import Link from "next/link";

/** The sections of the AI Catalog page, converted from the supplied HTML. */
export function AiCatalogBody() {
  return (
    <>
<section>
    <div className="in">
      <span className="eyebrow">Reading the catalog</span>
      <h2>Four kinds of AI, from helpful to hands-off.</h2>
      <p className="lede">Each item in the catalog is one of these. The further right, the more work it takes off your people, and the more thought goes into rules and approvals.</p>
      <div className="legend">
        <div className="lg-i"><span className="ty feature">AI-assisted feature</span><h3>Built into an app</h3><p>Helps a person do a task faster, such as reading a PDF into a sales order or explaining an error.</p></div>
        <div className="lg-i"><span className="ty joule">Joule</span><h3>Ask and act</h3><p>SAP's AI assistant answers questions from live data and starts tasks for you.</p></div>
        <div className="lg-i"><span className="ty assist">Assistant</span><h3>Looks after an area</h3><p>Runs the routine steps of a whole job, such as accounts receivable, within limits you set.</p></div>
        <div className="lg-i"><span className="ty agent">Agent</span><h3>Does a task end to end</h3><p>Carries out one specific task, such as clearing open items, and hands you only the exceptions.</p></div>
      </div>
    </div>
  </section>

  
  <section className="light">
    <div className="in">
      <span className="eyebrow">What's included</span>
      <h2>Included, premium, or your own.</h2>
      <p className="lede">Every item shows how it's licensed. We never show prices here; we size premium AI for your volumes and check it against your SAP contract.</p>
      <div className="users">
        <table>
          <thead><tr><th>Label</th><th>What it means</th></tr></thead>
          <tbody>
            <tr><td data-label="Label">Included</td><td data-label="What it means">Part of your SAP Cloud ERP subscription, such as Joule's basic features and built-in predictions.</td></tr>
            <tr><td data-label="Label">Premium AI</td><td data-label="What it means">Licensed separately and charged by use. Assistants, agents and SAP Document AI are usually here.</td></tr>
            <tr><td data-label="Label">Check with us</td><td data-label="What it means">SAP's terms for this item depend on your contract or are changing. We confirm before you start.</td></tr>
            <tr><td data-label="Label">Platform</td><td data-label="What it means">Built on SAP's AI platform for your own use cases, charged by use.</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>

  
  <section className="" id="watch">
    <div className="in">
      <span className="eyebrow">Watch and learn</span>
      <h2>See it from SAP.</h2>
      <p className="lede">Videos from SAP’s official YouTube channel on SAP Business AI.</p>
      <div className="vgrid"><a className="vcard" href="https://www.youtube.com/watch?v=DnIUOHMjowc" target="_blank" rel="noopener" data-yt="DnIUOHMjowc" aria-label="Play on YouTube: Joule: Work, AI Assistants and Platform">
      <div className="poster" data-k="start"><div className="top"><span className="ch"><b>SAP</b>YouTube</span><span className="tag">Start here</span></div><div className="big">Joule in 2 minutes</div><span className="play" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 18 18"><path d="M5 2.5v13l11-6.5z" fill="#0b2a1f"/></svg></span></div>
      <div className="vmeta"><h3>Joule: Work, AI Assistants and Platform</h3><p>A short overview of Joule Work, SAP’s AI assistants and the platform behind them.</p><span className="d">SAP · May 2026</span></div></a><a className="vcard" href="https://www.youtube.com/watch?v=PhAMg7UVuE8" target="_blank" rel="noopener" data-yt="PhAMg7UVuE8" aria-label="Play on YouTube: AI, data and the autonomous enterprise">
      <div className="poster" data-k="rel"><div className="top"><span className="ch"><b>SAP</b>YouTube</span><span className="tag">SAP Connect 2026</span></div><div className="big">Keynote in 17 minutes</div><span className="play" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 18 18"><path d="M5 2.5v13l11-6.5z" fill="#0b2a1f"/></svg></span></div>
      <div className="vmeta"><h3>AI, data and the autonomous enterprise</h3><p>Highlights from the SAP Connect keynote in October 2026: Joule, assistants, agents and SAP’s AI roadmap.</p><span className="d">SAP · October 2026</span></div></a></div>
      <p className="vnote">Published by SAP on its official YouTube channel.</p>
    </div>
  </section>

  
  <section className="light">
    <div className="in">
      <span className="eyebrow">Questions we hear</span>
      <h2>Straight answers.</h2>
      <div className="faq">
        <details><summary>Is this SAP's official catalog?</summary><p>No. SAP publishes its own full catalog of AI features in the SAP Discovery Center, covering all SAP products. This is Mawkish's guide to the AI that matters for SAP Cloud ERP customers, written in plain language, with our view on where to start.</p></details>
        <details><summary>What does "Mawkish quick win" mean?</summary><p>It's our recommendation: AI that most companies can switch on early, with little change to how people work and a result you can measure within weeks.</p></details>
        <details><summary>Can we use these if we're still implementing SAP?</summary><p>Yes, and it's often the best time. Some, such as reading sales orders or payment advices, can be part of your design from day one.</p></details>
        <details><summary>Why does availability say "beta" or "early adopter"?</summary><p>SAP releases some AI to a limited group of customers first. We can tell you whether joining makes sense for you.</p></details>
        <details><summary>How often is the catalog updated?</summary><p>We review it after each SAP release and each quarterly AI update.</p></details>
      </div>
    </div>
  </section>

  
  <section id="book">
    <div className="in">
      <div className="cta-band">
        <div>
          <span className="eyebrow">Start here</span>
          <h2>See your shortlist working on your processes.</h2>
          <p className="lede">Bring the AI you've shortlisted. In one session we show each one on processes like yours, tell you what's included and what's premium, and pick the first one to prove.</p>
          <div style={{ marginTop: "28px" }}><Link href="/contact" className="btn pri">Book an AI discovery session →</Link></div>
        </div>
        <ul>
          <li>Your shortlist, demonstrated</li>
          <li>Included versus premium AI</li>
          <li>Data and roles checked</li>
          <li>A pilot with your own data</li>
          <li>Results measured monthly</li>
        </ul>
      </div>
    </div>
  </section>
    </>
  );
}
