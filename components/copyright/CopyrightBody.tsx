import Link from "next/link";

/** The sections of the Copyright and Content Use page, converted from the supplied HTML. */
export function CopyrightBody() {
  return (
    <>
  <section className="hero cp-hero">
    <div className="in">
      <div className="crumbs"><Link href="/">Home</Link> / Legal / Copyright</div>
      <span className="eyebrow">Copyright and content use</span>
      <h1>Our knowledge is <em>our work.</em> Please respect it.</h1>
      <p className="lede">Everything on this website, from our service guides and case studies to our diagrams, illustrations and code, was researched, written and designed by Mawkish Technologies. It is protected by copyright. We're happy for people and AI to learn from it. We're not happy for anyone to copy it and call it their own. This page sets out the rules.</p>
      <div className="cp-meta"><span><b>Owner:</b> Mawkish Technologies (Private) Limited</span><span><b>Applies to:</b> mawkishtechnologies.com and its sub-pages</span><span><b>Last updated:</b> 3 November 2026</span></div>
      <div className="cp-sum">
        <div className="y"><span className="k">✓</span><h3>You may</h3><p>Read, share and quote our pages with credit and a link. Search engines and AI models may index and learn from them.</p></div>
        <div className="n"><span className="k">✕</span><h3>You may not</h3><p>Reproduce substantial parts of our content, by hand or through AI, and publish it as your own.</p></div>
        <div className="a"><span className="k">?</span><h3>Ask us</h3><p>Want to use something? Email us. We often say yes to partners, clients, educators and the press.</p></div>
      </div>
    </div>
  </section>

  <section className="light">
    <div className="in cp-wrap">
      <nav className="cp-toc" aria-label="On this page">
        <b>On this page</b>
        <ol>
          <li><a href="#own">Ownership</a></li>
          <li><a href="#lk">Sri Lankan law</a></li>
          <li><a href="#intl">International protection</a></li>
          <li><a href="#what">What is protected</a></li>
          <li><a href="#design">Design and experience</a></li>
          <li><a href="#ok">What you may do</a></li>
          <li><a href="#no">What you may not do</a></li>
          <li><a href="#ai">AI and automated access</a></li>
          <li><a href="#cases">Case studies</a></li>
          <li><a href="#tm">Trademarks</a></li>
          <li><a href="#perm">Permission</a></li>
          <li><a href="#report">Report misuse</a></li>
          <li><a href="#law">Enforcement and law</a></li>
        </ol>
      </nav>

      <div className="cp-doc">
        <section id="own">
          <h2>Ownership</h2>
          <p>Unless stated otherwise, all content on this website is owned by <strong>Mawkish Technologies (Private) Limited</strong> ("Mawkish", "we", "us") or used by us under licence.</p>
          <p>Publishing content openly on the internet does not place it in the public domain. Being able to view, copy or download something does not give anyone the right to reuse it.</p>
          <p>This includes the website's design, interface, user experience, menu structure, and the way its content is organised and presented, all of which belong to us. See <a href="#design">Design, interface and experience</a>.</p>
          <div className="cp-notice">© 2026 Mawkish Technologies (Private) Limited. All rights reserved.</div>
        </section>

        <section id="lk">
          <h2>How Sri Lankan law protects our work</h2>
          <p>Copyright in Sri Lanka is governed by the <strong>Intellectual Property Act, No. 36 of 2003</strong>. These are the parts that matter most for content like ours.</p>
          <div className="cp-intl">
            <div><span className="t">Section 6</span><h3>Protected from day one</h3><p>Original writing, illustrations and software are protected from the moment they're created. No registration is needed.</p></div>
            <div><span className="t">Section 9</span><h3>The whole work, and any substantial part</h3><p>Only the owner may reproduce, adapt, translate or publish the work. Changing a few words doesn't make a copy lawful.</p></div>
            <div><span className="t">Section 8</span><h3>Ideas are free, expression is not</h3><p>Anyone can discuss the same facts and ideas. Our wording, structure, diagrams and illustrations belong to us.</p></div>
            <div><span className="t">Section 11</span><h3>Fair use has limits</h3><p>Short quotes for comment, teaching or news are fine. Courts look at how much was taken and whether it harms the original, so large-scale copying isn't.</p></div>
            <div><span className="t">Section 14</span><h3>Created by our team, owned by Mawkish</h3><p>Work created by employees in the course of their jobs belongs to the employer, unless a contract says otherwise.</p></div>
            <div><span className="t">Sections 22 and 178</span><h3>Real consequences</h3><p>Courts can order copying to stop and award damages. Wilful infringement is also a criminal offence, and company officers can be held personally responsible.</p></div>
          </div>
        </section>

        <section id="intl">
          <h2>Protection outside Sri Lanka</h2>
          <p>Copyright doesn't stop at the border. Through international treaties, our content is protected in more than 180 countries, under each country's own law and without any registration.</p>
          <div className="cp-intl">
            <div><span className="t">Berne Convention</span><h3>Equal protection abroad</h3><p>Sri Lanka has been a member since 1948. Every member country must protect our work just as it protects its own authors' work.</p></div>
            <div><span className="t">WTO TRIPS Agreement</span><h3>Effective enforcement</h3><p>WTO members must offer real remedies against infringement, including court orders and damages.</p></div>
            <div><span className="t">India</span><h3>Copyright Act, 1957</h3><p>Where we also work. Knowingly infringing copyright there is a criminal offence as well as a civil wrong.</p></div>
            <div><span className="t">Online platforms</span><h3>Fast takedowns</h3><p>Most hosting providers, social platforms and search engines remove or de-list copied content quickly once notified, wherever it appears.</p></div>
          </div>
          <p>Using an AI tool doesn't change any of this. If published material substantially reproduces our work, whoever publishes it is responsible.</p>
        </section>

        <section id="what">
          <h2>What is protected</h2>
          <p>Our copyright covers the whole website and each part of it, including:</p>
          <ul>
            <li><strong>Written content:</strong> service pages, technical guides, explanations, FAQs, insights and articles, including their structure, selection and arrangement.</li>
            <li><strong>Case studies:</strong> the narratives, analysis and presentation of our client work.</li>
            <li><strong>Visual work:</strong> diagrams, architecture drawings, illustrated product screens, icons, layouts and animations created by us.</li>
            <li><strong>Interactive tools:</strong> assessments, catalogues, calculators, selectors and their logic.</li>
            <li><strong>Methods as we describe them:</strong> our delivery approaches, frameworks, checklists and templates as written and presented on this site.</li>
            <li><strong>Code and design:</strong> the website's source code, styling and overall look and feel.</li>
            <li><strong>Design, interface and experience:</strong> the visual design, user interface, user experience, menu and navigation structure, and the way content is structured and presented. See <a href="#design">Design, interface and experience</a>.</li>
          </ul>
        </section>

        <section id="design">
          <h2>Design, interface and experience</h2>
          <p>The way this website looks, works and is organised is original work created by Mawkish Technologies, and it belongs to us. That protection is separate from the protection of the words on the page, and it covers the following.</p>
          <div className="cp-intl">
            <div><span className="t">Look and feel</span><h3>Visual design</h3><p>Our layouts, page compositions, colour palette, typography, spacing, iconography, illustrations, imagery and animation, and the way they combine into one recognisable style.</p></div>
            <div><span className="t">User interface</span><h3>Interface design</h3><p>The design of our components: navigation, cards, sections, buttons, forms, tables, diagrams, interactive elements and their states, and how they are arranged on each page.</p></div>
            <div><span className="t">User experience</span><h3>How it feels to use</h3><p>The flow from page to page, the order in which information is revealed, interaction and motion behaviour, and the overall journey we designed for visitors.</p></div>
            <div><span className="t">Site structure</span><h3>Menu and navigation</h3><p>The structure, grouping, hierarchy, labelling and ordering of our menus, mega menus, footer and internal links, and the way our services and industries are organised.</p></div>
            <div><span className="t">Content architecture</span><h3>Structure and presentation</h3><p>How we organise, sequence and present content: page templates, section order, the way a topic is broken down, compared and illustrated, and the selection and arrangement of material across the site.</p></div>
            <div><span className="t">Code</span><h3>Source and styling</h3><p>The website's source code, stylesheets, scripts, templates and component library, in every form in which they are delivered.</p></div>
          </div>
          <p>All of this, taken individually and as a whole, is our copyright work and our property, and it is protected as an original compilation and design under the Intellectual Property Act, No. 36 of 2003, and under the international treaties described above. It also falls under the law against passing off and unfair competition, so copying the overall impression of the site can be unlawful even where no text or image is copied word for word.</p>
          <p>Unless we have agreed otherwise in writing, we, and not any client, partner, contractor or visitor, own the design, interface, experience, structure and presentation of this website. Nobody may claim any right in them.</p>
        </section>

        <section id="ok">
          <h2>What you may do</h2>
          <p>We want people to learn from our content and talk about it. Without asking us, you may:</p>
          <ul>
            <li>View and read pages for your own information, or for your organisation's internal evaluation of our services.</li>
            <li>Share links to any page by email, messaging or social media.</li>
            <li>Print or save a single copy of a page for your own reference, keeping this copyright notice on it.</li>
            <li>Quote a short extract, a sentence or two, for commentary, review, news reporting or teaching. You must credit <strong>Mawkish Technologies</strong> and link to the original page. This is consistent with fair use under Sri Lankan law.</li>
            <li>Learn from our content and write about the same topics in your own words. Facts and ideas are free for everyone. Our wording, structure and visuals are not.</li>
          </ul>
        </section>

        <section id="no">
          <h2>What you may not do</h2>
          <p>Unless you have our prior written permission, you may not:</p>
          <ul>
            <li>Copy, reproduce or republish our content, in full or in substantial part, on any website, document, proposal, presentation, course or social media post.</li>
            <li>Rewrite, paraphrase, translate or adapt our content, yourself or with an AI tool, so closely that it is still recognisably our work, and present it as your own.</li>
            <li>Use our diagrams, illustrations or screens in your own sales material, tenders or training.</li>
            <li>Frame our pages, or embed them inside another site, so they appear to be someone else's.</li>
            <li>Remove or alter any copyright notice, attribution or watermark.</li>
            <li>Sell, license or otherwise commercialise any of our content.</li>
            <li>Copy, clone or imitate the look, interface or user experience of this website, or of any page or section of it, in another website, app, template, theme or design file, whether by hand, by automated tools or with AI.</li>
            <li>Reproduce or closely imitate the structure of our menus and navigation, or the way we organise and present our services, industries and content.</li>
            <li>Use screenshots, screen recordings or exports of our pages, or of the website's code, stylesheets or design, as a basis for building another site or product, or to train a tool whose purpose is to reproduce our design.</li>
            <li>Present a website, proposal or product that copies our design, structure or presentation as your own, or in a way that could make people think it comes from, or is connected with, Mawkish.</li>
          </ul>
          <div className="cp-two">
            <div className="ok"><h3>Fine</h3><ul><li>"Mawkish explains the move from ECC well. Read it here: [link]"</li><li>A two-line quote with credit and a link</li></ul></div>
            <div><h3>Not fine</h3><ul><li>Pasting a service guide into your own proposal</li><li>Reusing our architecture diagram in your slides</li></ul></div>
          </div>
        </section>

        <section id="ai">
          <h2>AI and automated access</h2>
          <p>We want our knowledge to be useful, including through search engines and AI tools. Our rule is simple: <strong>learning from our content is fine, passing it off is not.</strong></p>
          <p><strong>You may:</strong></p>
          <ul>
            <li>index our pages for search engines and AI assistants;</li>
            <li>use our content to train or improve AI and machine learning models;</li>
            <li>use AI tools to read, summarise or answer questions about our pages for your own understanding.</li>
          </ul>
          <p><strong>You may not:</strong></p>
          <ul>
            <li>publish AI-generated output that reproduces, or closely imitates, substantial parts of our content, such as its wording, structure, diagrams or illustrations, as your own;</li>
            <li>use AI to rewrite our guides, case studies or methods and present the result as original work, without crediting Mawkish;</li>
            <li>scrape the site in a way that overloads it, gets around access controls, or copies our gated content.</li>
          </ul>
          <p>Who publishes the content is responsible for it. Using an AI tool does not make copying lawful: if published material substantially reproduces our work, it infringes our copyright however it was produced.</p>
          <div className="cp-box"><p><strong>Building on our work?</strong> Credit "Mawkish Technologies" and link to the original page. That's all we ask.</p></div>
        </section>

        <section id="cases">
          <h2>Case studies and gated content</h2>
          <p>Some content, such as our client case studies, is available only after you register. It is provided to you personally, for your evaluation of our services. You may not share it, forward it, publish it, or use it to approach our clients or to compete with us.</p>
          <p>Client names and logos appear with their consent or as a fair reference to work we have delivered. They remain the property of their owners.</p>
        </section>

        <section id="tm">
          <h2>Trademarks and third-party material</h2>
          <p>"Mawkish" and the Mawkish logo are trademarks of Mawkish Technologies. You may not use them in a way that suggests we endorse you or are connected with you.</p>
          <p>SAP, SAP S/4HANA, RISE with SAP, GROW with SAP, SAP Business Technology Platform, Joule and other SAP products are trademarks or registered trademarks of SAP SE in Germany and other countries. Salesforce and its product names are trademarks of Salesforce, Inc. Other product names and client logos belong to their respective owners. We use them only to identify products and clients, and our copyright does not extend to them.</p>
          <p>Product screens on this site are illustrations drawn by us to explain concepts. They are not screenshots, and they contain sample data. Videos we link to remain the property of their publishers.</p>
        </section>

        <section id="perm">
          <h2>Asking for permission</h2>
          <p>We are happy to consider requests, especially from clients, partners, universities and the press. Email <a href="mailto:info@mawkishtechnologies.com">info@mawkishtechnologies.com</a> with:</p>
          <ul>
            <li>your name and organisation;</li>
            <li>the page or item you want to use, with its link;</li>
            <li>how and where you plan to use it, and for how long.</li>
          </ul>
          <p>Permission is only valid if given in writing by Mawkish, and only for the use described.</p>
        </section>

        <section id="report">
          <h2>Reporting misuse</h2>
          <p>If you find our content used somewhere without permission, please tell us at <a href="mailto:info@mawkishtechnologies.com">info@mawkishtechnologies.com</a> with the link and, if possible, a screenshot. If you believe something on our site infringes your rights, contact us at the same address and we will review it promptly.</p>
        </section>

        <section id="law">
          <h2>Enforcement and governing law</h2>
          <p>We keep dated records of our content and monitor the web for copies of it. Where we find infringement, we may, without further notice:</p>
          <ul>
            <li>ask the person or organisation to remove the content and confirm in writing;</li>
            <li>file takedown notices with hosting providers, platforms and search engines;</li>
            <li>seek an injunction, damages and costs through the courts.</li>
          </ul>
          <p>This notice and any dispute about the use of this website are governed by the laws of the Democratic Socialist Republic of Sri Lanka. The courts of Colombo have jurisdiction, without limiting our right to act in the country where an infringement takes place.</p>
          <p>We may update this notice from time to time. The version on this page is the one that applies.</p>
          <div className="cp-box"><p><strong>Questions?</strong> Write to <a href="mailto:info@mawkishtechnologies.com">info@mawkishtechnologies.com</a>. We'd rather help you use our content properly than see it misused.</p></div>
        </section>

      </div>
    </div>
  </section>
    </>
  );
}
