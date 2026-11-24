const services = [
  { n: "01", title: "Ready-made software", text: "Purpose-built tools designed around recurring business workflows. Start with a focused solution and grow from there." },
  { n: "02", title: "Custom software", text: "Software shaped around the way your organisation actually works—not the other way around." },
  { n: "03", title: "Websites & platforms", text: "Clear, useful digital experiences that help customers understand your business and take the next step." },
  { n: "04", title: "Automation & integration", text: "Reduce repetitive work by connecting systems and improving everyday processes." },
];
const steps = [
  ["01", "Understand", "We learn about the business, the people and the problem."],
  ["02", "Plan", "We define a practical scope, priorities and a clear path forward."],
  ["03", "Build", "We design, develop and test the solution in focused steps."],
  ["04", "Improve", "We use feedback to refine the product as needs evolve."],
];
export default function Home() {
  return <>
    <section className="hero section-wrap">
      <div className="hero-copy">
        <div className="eyebrow"><span className="eyebrow-dot"/> BUSINESS SOFTWARE & DIGITAL SOLUTIONS</div>
        <h1>Make work<br/> <em>work better.</em></h1>
        <p className="hero-lead">We build practical software and digital tools that help businesses organise their work, serve customers and move forward.</p>
        <div className="hero-actions"><a className="button button-dark" href="/contact">Tell us what you need <span>↗</span></a><a className="text-link" href="/solutions">Explore what we do <span>↓</span></a></div>
        <div className="hero-footnote"><span>INDEPENDENT SOFTWARE STUDIO</span><span>IDEAS → USEFUL TECHNOLOGY</span></div>
      </div>
      <div className="hero-art" aria-label="Abstract illustration of connected business workflows">
        <div className="art-orbit orbit-one"/><div className="art-orbit orbit-two"/>
        <div className="art-card art-card-main"><div className="art-card-head"><span className="mini-logo">P.</span><span className="art-live">WORKFLOW OVERVIEW</span></div><div className="art-title">A clearer way<br/>to run things.</div><div className="art-bars"><i/><i/><i/><i/></div><div className="art-card-foot"><span>PLAN</span><span>BUILD</span><span>IMPROVE</span></div></div>
        <div className="art-chip chip-one">Business tools <b>↗</b></div><div className="art-chip chip-two"><b className="chip-dot"/> Thoughtful software</div><div className="art-stamp">BUILT<br/>WITH<br/>PURPOSE</div>
      </div>
    </section>
    <div className="ticker"><div>SOFTWARE THAT FITS THE WORK <span>✳</span> BUILT AROUND REAL NEEDS <span>✳</span> SIMPLE. USEFUL. THOUGHTFUL. <span>✳</span> SOFTWARE THAT FITS THE WORK <span>✳</span></div></div>
    <section className="intro section-wrap">
      <div className="section-kicker">01 / WHAT WE BELIEVE</div>
      <div className="intro-content"><h2>Good technology should make the <em>everyday easier.</em></h2><div><p>Running a business involves dozens of moving parts. We believe the right technology should bring clarity to that complexity—not add another layer to it.</p><p>Our focus is on understanding real problems and building useful digital solutions, whether that means adapting a ready-made product or creating something from the ground up.</p><a className="text-link" href="/about">A little more about us <span>↗</span></a></div></div>
    </section>
    <section className="services-section">
      <div className="section-wrap">
        <div className="section-heading"><div><div className="section-kicker">02 / WHAT WE DO</div><h2>Technology for<br/><em>the work ahead.</em></h2></div><p>From a focused business tool to a custom platform, we start with the problem and work towards a practical solution.</p></div>
        <div className="service-grid">{services.map(s=><article className="service-card" key={s.n}><div className="service-number">{s.n}</div><div><h3>{s.title}</h3><p>{s.text}</p><a href={s.n==="01"?"/solutions":"/custom-development"} aria-label={`Explore ${s.title}`}>↗</a></div></article>)}</div>
      </div>
    </section>
    <section className="product-feature section-wrap">
      <div className="product-visual"><div className="product-window"><div className="window-top"><span/><span/><span/><b>P DINE / CONCEPT PREVIEW</b></div><div className="window-body"><div className="window-sidebar"><i/><i/><i/><i/></div><div className="window-main"><small>RESTAURANT OPERATIONS</small><strong>One view.<br/>More control.</strong><div className="window-widgets"><i/><i/><i/></div><div className="window-line"/></div></div></div><div className="product-orbit">P DINE</div></div>
      <div className="product-copy"><div className="section-kicker">03 / A PRODUCT IN PROGRESS</div><span className="status-pill"><i/> IN DEVELOPMENT</span><h2>Meet <em>P Dine.</em></h2><p>A restaurant operations platform we are working towards—designed to bring everyday tasks like orders, tables and team workflows into a more organised experience.</p><p className="muted">P Dine is a work in progress. Features and availability may change as development continues.</p><a className="button button-dark" href="/products">Explore our product direction <span>↗</span></a></div>
    </section>
    <section className="approach-section"><div className="section-wrap"><div className="section-kicker">04 / HOW WE APPROACH THE WORK</div><div className="approach-heading"><h2>Thoughtful from<br/><em>first question to launch.</em></h2><p>No unnecessary complexity. Just a clear process, open communication and steady progress.</p></div><div className="steps-grid">{steps.map(s=><div className="step" key={s[0]}><span>{s[0]}</span><h3>{s[1]}</h3><p>{s[2]}</p></div>)}</div></div></section>
    <section className="cta-section section-wrap"><div className="cta-inner"><div className="section-kicker">HAVE A CHALLENGE TO SOLVE?</div><h2>Let&apos;s build something<br/><em>useful together.</em></h2><p>Tell us what you are trying to improve. We can start with a conversation.</p><a className="button button-light" href="/contact">Start a conversation <span>↗</span></a><div className="cta-decoration">P.</div></div></section>
  </>;
}
