import Link from "next/link";
import { CareersOpenings } from "./CareersOpenings";

/** Careers, from the supplied page: the body only. The site's own header, copyright notice and footer wrap it. */
export function CareersBody() {
  return (
    <main id="top">
  <section className="hero k-hero">
    <div className="in">
      <div className="crumbs"><Link href="/">Home</Link> / Careers</div>
      <span className="eyebrow">Careers at Mawkish</span>
      <h1>Do the best work of your career, <em>with AI on every task.</em></h1>
      <p className="lede">We help businesses in Sri Lanka and India run on SAP, Salesforce and the cloud. We work as one team, we learn in public, and we use AI in everything we do, from the first workshop to the last line of code. If that sounds like you, we would like to meet you.</p>
      <div className="ctas"><a href="#openings" className="btn pri">See open positions →</a><a href="#culture" className="btn sec">How we work</a></div>
      <div className="k-pillars">
        <div><b>AI first</b><span>Every role uses AI daily, and we teach you how</span></div>
        <div><b>Client first</b><span>We sit on the client&apos;s side of the table, always</span></div>
        <div><b>Real projects</b><span>Industry work across Sri Lanka and India</span></div>
        <div><b>Grow fast</b><span>A clear path from intern to lead</span></div>
      </div>
    </div>
  </section>

  <section className="light" id="culture">
    <div className="in">
      <div className="k-vision">
        <div>
          <span className="eyebrow">Our vision</span>
          <p className="k-quote">To be the partner that makes enterprise technology <em>simple, fast and intelligent</em> for every business we serve.</p>
        </div>
        <div>
          <p>Large companies and fast-growing ones come to us to run their finance, supply chain, sales and service on world-class platforms. Our job is to get them there with less effort and less risk than they expect.</p>
          <p>We do that with small, senior-led teams that know the industry, follow the standard, and let AI do the repetitive work. That leaves people free for the parts that need judgement: understanding the business, designing the solution and earning the customer&apos;s trust.</p>
        </div>
      </div>
      <div className="k-vals">
        <div><span className="n">01</span><h3>Use AI for everything first</h3><p>Before you start any task, ask how AI can do it faster or better. Drafting, analysis, testing, documentation, code: AI goes first, and you make it right.</p></div>
        <div><span className="n">02</span><h3>Win as one team</h3><p>No one owns a problem alone. Functional, technical and project people sit together, share what they learn and cover for each other when it matters.</p></div>
        <div><span className="n">03</span><h3>The client&apos;s success is our success</h3><p>We measure ourselves by what the client can do after go-live, not by hours or documents. If something is not right, we say so early and fix it.</p></div>
        <div><span className="n">04</span><h3>Standard first, simple always</h3><p>We follow the platform standard and keep designs clean, so customers can upgrade with ease. Clever is good. Simple is better.</p></div>
        <div><span className="n">05</span><h3>Learn every week</h3><p>The platforms change every quarter. So do we. Everyone has time to learn, certify and share what they found with the team.</p></div>
        <div><span className="n">06</span><h3>Respect and openness</h3><p>Ask questions, challenge ideas and give credit. Everyone&apos;s voice counts, from the newest intern to the most senior lead.</p></div>
      </div>
      <div className="k-client">
        <div>
          <span className="eyebrow">Who we look for</span>
          <h2>People who sit on the client&apos;s side of the table.</h2>
          <p>We hire people who are obsessed with client success. People who care about our clients&apos; businesses as if they were their own, and who measure their work by what it changes for the client, not by what it took to deliver.</p>
          <p>That means holding the line on quality, even when it is the harder path. If a design is not right, a test is not complete or a deadline puts quality at risk, we expect you to say so, push back inside Mawkish and fight for the right outcome. Internally, you speak for the client. Always.</p>
        </div>
        <ul>
          <li><b>Client success first</b><span>Every decision starts with one question: is this right for the client?</span></li>
          <li><b>Passion for the people we serve</b><span>You know their business, their pressures and their goals, and you care about them.</span></li>
          <li><b>Uncompromising on quality</b><span>You would rather raise a hard issue today than hand over something you are not proud of.</span></li>
          <li><b>The courage to challenge</b><span>You challenge colleagues, leaders and plans, respectfully and with evidence, when the client&apos;s interest is at stake.</span></li>
        </ul>
      </div>
    </div>
  </section>

  <section>
    <div className="in k-ai">
      <div>
        <span className="eyebrow">AI in how we work</span>
        <h2>We expect you to use AI on every task.</h2>
        <p className="lede">At Mawkish, AI is not a side project. It is how the work gets done. We give every team member access to AI tools, show them how to use them well, and expect them to look for a smarter way every day.</p>
        <div className="k-rules">
          <b>Our ground rules for AI</b>
          <ul>
            <li>You are responsible for what AI produces. Check it before it reaches a customer.</li>
            <li>Never put confidential customer data into a tool that is not approved for it.</li>
            <li>Share prompts, agents and shortcuts that work, so the whole team gets faster.</li>
          </ul>
        </div>
      </div>
      <div className="k-ai-list">
        <div><b>Consultants</b><span>Draft fit-to-standard notes, process designs and configuration guides with AI, then refine them with the customer.</span></div>
        <div><b>Developers</b><span>Pair with AI coding assistants for ABAP, CAP, Apex and Lightning Web Components, and generate tests as you build.</span></div>
        <div><b>Cloud engineers</b><span>Write infrastructure as code, runbooks and troubleshooting steps with AI, and review every change before it ships.</span></div>
        <div><b>Testers</b><span>Turn requirements into test cases and test data in minutes, then automate the runs.</span></div>
        <div><b>Project office</b><span>Use AI to prepare status reports, minutes, risk logs and plans, so meetings are about decisions, not updates.</span></div>
        <div><b>Everyone</b><span>Use Joule, Agentforce and other built-in AI so you can show customers what the platforms can really do.</span></div>
      </div>
    </div>
  </section>

  <section className="light">
    <div className="in">
      <span className="eyebrow">Why join us</span>
      <h2>What we offer the people who join us.</h2>
      <div className="k-why">
        <div><h3>Work that matters</h3><p>You work on real projects for leading companies in food, manufacturing, retail, consumer brands and more, in Sri Lanka and India.</p></div>
        <div><h3>Certification support</h3><p>We support you to earn SAP, Salesforce and AWS certifications, with study time and guidance from people who have done it.</p></div>
        <div><h3>Mentors from day one</h3><p>Every new joiner has a mentor. Interns and associates learn on live projects next to experienced consultants.</p></div>
        <div><h3>Three platforms, one company</h3><p>Learn how SAP, Salesforce and the cloud fit together. Few places in the region give you all three.</p></div>
        <div><h3>Flexible, hybrid work</h3><p>Our home is Colombo. We work from the office, from customer sites and from home, depending on what the project needs.</p></div>
        <div><h3>A voice from the start</h3><p>Small teams mean your ideas get heard and used. Good ideas become how we work.</p></div>
      </div>
      <div className="k-path" aria-label="Career path">
        <div><span className="s">Start</span><h3>Intern or trainee</h3><p>Learn the platform on live projects with a mentor.</p></div>
        <div><span className="s">Build</span><h3>Associate</h3><p>Own tasks end to end and earn your first certification.</p></div>
        <div><span className="s">Deliver</span><h3>Consultant or engineer</h3><p>Run a workstream and work directly with customers.</p></div>
        <div><span className="s">Lead</span><h3>Senior and lead</h3><p>Design solutions, lead teams and guide others.</p></div>
        <div><span className="s">Shape</span><h3>Product, process or project lead</h3><p>Own a product line, a process area or a programme.</p></div>
      </div>
    </div>
  </section>

      <CareersOpenings />

  <section className="light">
    <div className="in">
      <span className="eyebrow">How we hire</span>
      <h2>Simple, quick and fair.</h2>
      <ol className="k-steps">
        <li><h3>Email your CV</h3><p>Send it to careers@mawkishtechnologies.com with the job code in the subject.</p></li>
        <li><h3>A short call</h3><p>We talk about your experience, what you want next and the role.</p></li>
        <li><h3>Show us your work</h3><p>A practical exercise or technical interview. Use AI as you would on the job, and tell us how.</p></li>
        <li><h3>Meet the team</h3><p>Meet the people you will work with and ask them anything.</p></li>
        <li><h3>Offer</h3><p>We aim to give you a decision quickly after the final conversation.</p></li>
      </ol>
      <div className="cta-band" style={{ marginTop: 44, color: "#eef3f0", "--fg": "#eef3f0", "--muted": "#a9bab2", "--green-hi": "#34b386" } as React.CSSProperties}>
        <div>
          <span className="eyebrow">No role that fits?</span>
          <h2>Send us your CV anyway.</h2>
          <p className="lede">We are always looking for people who love SAP, Salesforce, the cloud and AI. Tell us what you are great at and what you want to do next.</p>
          <div style={{ marginTop: 28 }}><a href="mailto:careers@mawkishtechnologies.com?subject=General%20application" className="btn pri">Email careers@mawkishtechnologies.com →</a></div>
        </div>
        <ul><li>SAP, Salesforce, AWS, sales and marketing</li><li>Interns to leads</li><li>Colombo and hybrid</li></ul>
      </div>
    </div>
  </section>
    </main>
  );
}
