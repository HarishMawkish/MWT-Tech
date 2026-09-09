"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";
import { FilmPass } from "three/examples/jsm/postprocessing/FilmPass.js";
import { OutputPass } from "three/examples/jsm/postprocessing/OutputPass.js";
import { isLowPowerDevice } from "@/lib/device-performance";

// Organic, slowly-drifting noise field — replaces the old wireframe
// icosahedron core/shell as the scene's background layer. Two octaves of
// value noise (fbm) blended between the brand's near-black / jade / mint,
// with a soft vignette so it reads as an ambient backdrop, not a texture.
const bgVertexShader = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const bgFragmentShader = /* glsl */ `
  varying vec2 vUv;
  uniform float uTime;
  uniform float uProgress;
  uniform vec3 uColorBg;
  uniform vec3 uColorJade;
  uniform vec3 uColorMint;

  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
  }

  float fbm(vec2 p) {
    float v = 0.0;
    float amp = 0.5;
    for (int i = 0; i < 5; i++) {
      v += amp * noise(p);
      p *= 2.02;
      amp *= 0.5;
    }
    return v;
  }

  void main() {
    vec2 uv = vUv * 3.0;
    float t = uTime * 0.045;
    float n = fbm(uv + vec2(t, -t * 0.6) + uProgress * 1.4);
    float n2 = fbm(uv * 1.6 - vec2(t * 0.7, t * 0.3) + 4.0);
    float blob = smoothstep(0.35, 0.78, n) * smoothstep(0.2, 0.9, n2);

    vec3 col = mix(uColorBg, uColorJade, blob * 0.6);
    col = mix(col, uColorMint, blob * blob * 0.45);

    float d = distance(vUv, vec2(0.5));
    col *= smoothstep(0.95, 0.25, d) * 0.55 + 0.45;

    gl_FragColor = vec4(col, 1.0);
  }
`;

/**
 * Immersive WebGL background: an organic shader noise field behind a
 * particle field of nodes with sparse "data link" lines — representing
 * the brand idea of interconnected enterprise systems (SAP / Salesforce /
 * Odoo / AI) resolving into one coherent structure. Bloom + film grain
 * postprocessing for a more premium/cinematic finish (skipped on
 * lower-power devices). Drifts on a fixed, predetermined rotation rather
 * than following the pointer — smoother and frame-rate independent, and
 * removes the need for a pointermove listener entirely.
 */
export function HeroScene({ className = "" }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const lowPower = isLowPowerDevice();

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: !lowPower,
        alpha: true,
        powerPreference: "low-power",
      });
    } catch {
      return; // No WebGL available — the CSS gradient backdrop still holds the hero.
    }

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x020604, 0.055);

    const camera = new THREE.PerspectiveCamera(48, 1, 0.1, 100);
    camera.position.set(0, 0, 7.2);

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, lowPower ? 1 : 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    const mint = new THREE.Color("#7fd9b4");
    const jade = new THREE.Color("#1c6b51");
    const bgColor = new THREE.Color("#020604");

    // Root rig — everything nested here drifts on a fixed rotation.
    const rig = new THREE.Group();
    scene.add(rig);

    // Organic shader background plane, sized to always cover the frustum
    // (recomputed on resize since aspect changes).
    const bgUniforms = {
      uTime: { value: 0 },
      uProgress: { value: 0 },
      uColorBg: { value: bgColor },
      uColorJade: { value: jade },
      uColorMint: { value: mint },
    };
    const bgMaterial = new THREE.ShaderMaterial({
      uniforms: bgUniforms,
      vertexShader: bgVertexShader,
      fragmentShader: bgFragmentShader,
      depthWrite: false,
    });
    const bgMesh = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), bgMaterial);
    bgMesh.position.z = -6;
    scene.add(bgMesh);

    // Particle field — nodes scattered in a shell around the center.
    // Reduced further from the original 460/200 split for smoother, more
    // consistent rendering across devices.
    const NODE_COUNT = lowPower ? 130 : 260;
    const positions = new Float32Array(NODE_COUNT * 3);
    for (let i = 0; i < NODE_COUNT; i++) {
      const radius = 3.4 + Math.random() * 2.1;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }
    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const particles = new THREE.Points(
      particleGeo,
      new THREE.PointsMaterial({
        color: mint,
        size: 0.045,
        sizeAttenuation: true,
        transparent: true,
        opacity: 0.85,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      })
    );
    rig.add(particles);

    // Sparse "data link" lines from a handful of nodes back toward the
    // center — reinforces the idea of disparate systems resolving into
    // one network.
    const LINKS = 22;
    const linkPositions = new Float32Array(LINKS * 2 * 3);
    for (let i = 0; i < LINKS; i++) {
      const idx = Math.floor(Math.random() * NODE_COUNT) * 3;
      linkPositions[i * 6] = positions[idx];
      linkPositions[i * 6 + 1] = positions[idx + 1];
      linkPositions[i * 6 + 2] = positions[idx + 2];
      linkPositions[i * 6 + 3] = 0;
      linkPositions[i * 6 + 4] = 0;
      linkPositions[i * 6 + 5] = 0;
    }
    const linkGeo = new THREE.BufferGeometry();
    linkGeo.setAttribute("position", new THREE.BufferAttribute(linkPositions, 3));
    const links = new THREE.LineSegments(
      linkGeo,
      new THREE.LineBasicMaterial({ color: mint, transparent: true, opacity: 0.1 })
    );
    rig.add(links);

    // --- Postprocessing: subtle bloom + film grain, then output pass for
    // correct color space handling since the composer bypasses the
    // renderer's default output conversion. Skipped on low-power devices —
    // bloom in particular costs several extra full-screen passes per frame,
    // and the scene still looks intentional without it, just less glowy. ---
    const composer = lowPower ? null : new EffectComposer(renderer);
    if (composer) {
      composer.addPass(new RenderPass(scene, camera));
      composer.addPass(new UnrealBloomPass(new THREE.Vector2(1, 1), 0.55, 0.4, 0.15));
      composer.addPass(new FilmPass(0.3, false));
      composer.addPass(new OutputPass());
    }

    const frustumHeightAtZ = (z: number) => {
      const vFov = (camera.fov * Math.PI) / 180;
      return 2 * Math.tan(vFov / 2) * Math.abs(camera.position.z - z);
    };

    const resize = () => {
      const { clientWidth, clientHeight } = container;
      if (clientWidth === 0 || clientHeight === 0) return;
      camera.aspect = clientWidth / clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(clientWidth, clientHeight);
      composer?.setSize(clientWidth, clientHeight);

      // Overscan slightly so the background plane always fully covers the
      // frustum even as aspect ratio changes.
      const h = frustumHeightAtZ(bgMesh.position.z) * 1.15;
      const w = h * camera.aspect * 1.15;
      bgMesh.scale.set(w, h, 1);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(container);

    const clock = new THREE.Clock();
    let frameId = 0;

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      const dt = clock.getDelta();

      // Don't waste GPU/battery rendering a backgrounded tab — invisible to
      // the user either way, but stops burning cycles when they've tabbed away.
      if (document.hidden) return;

      bgUniforms.uTime.value += dt;

      if (!reduceMotion) {
        particles.rotation.y += dt * 0.03;
        links.rotation.y += dt * 0.03;

        // Fixed, predetermined drift instead of pointer-follow — smooth and
        // consistent regardless of frame rate, no pointermove listener needed.
        rig.rotation.y += dt * 0.025;
        rig.rotation.x = Math.sin(bgUniforms.uTime.value * 0.08) * 0.06;
      }

      if (composer) {
        composer.render();
      } else {
        renderer.render(scene, camera);
      }
    };
    animate();

    return () => {
      cancelAnimationFrame(frameId);
      ro.disconnect();
      bgMesh.geometry.dispose();
      bgMaterial.dispose();
      particleGeo.dispose();
      linkGeo.dispose();
      (particles.material as THREE.Material).dispose();
      (links.material as THREE.Material).dispose();
      composer?.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} aria-hidden="true" className={className} />;
}