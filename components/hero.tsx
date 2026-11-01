export function Hero() {
  return (
    <section className="wrap hero" aria-labelledby="hero-title">
      <div>
        <div className="eyebrow">Websites. Applications. Possibilities.</div>
        <h1 id="hero-title">
          Good ideas.
          <br />
          <em>Great software.</em>
        </h1>
        <p>
          We turn business ideas into thoughtful websites, online stores, and
          custom applications. From the first sketch to the final deployment, we
          connect design with development.
        </p>
        <div className="hero-actions">
          <a href="#contact" className="button">
            Start a project <span className="arrow" aria-hidden="true">↗</span>
          </a>
          <a href="#work" className="button light">
            Explore the possibilities <span aria-hidden="true">↓</span>
          </a>
        </div>
        <div className="availability">
          <i aria-hidden="true" />
          Based in Sri Lanka · Built for a connected world
        </div>
      </div>
      <div className="hero-art" aria-label="Illustrative software project workspace">
        <div className="ambient-orbit orbit-one" />
        <div className="ambient-orbit orbit-two" />
        <div className="workspace">
          <div className="workspace-toolbar">
            <div className="window-dots">
              <i />
              <i />
              <i />
            </div>
            <span>YOUR NEXT PROJECT</span>
            <span className="workspace-lock">↗</span>
          </div>
          <div className="workspace-body">
            <aside className="workspace-sidebar">
              <div className="workspace-monogram">
                w<span>z</span>
              </div>
              <div className="workspace-nav selected">
                ▦ <span>Overview</span>
              </div>
              <div className="workspace-nav">
                ▤ <span>Pages</span>
              </div>
              <div className="workspace-nav">
                ◇ <span>Components</span>
              </div>
              <div className="workspace-nav">
                ⌘ <span>Settings</span>
              </div>
              <div className="sidebar-bottom">DESIGN + CODE</div>
            </aside>
            <div className="workspace-content">
              <div className="workspace-top">
                <div>
                  <small>PROJECT WORKSPACE</small>
                  <h3>From idea to interface.</h3>
                </div>
                <span className="concept-badge">CONCEPT</span>
              </div>
              <div className="workspace-tiles">
                <div>
                  <span>01 / DESIGN</span>
                  <strong>Make it clear.</strong>
                  <div className="mini-wireframe">
                    <b />
                    <i />
                    <i />
                    <div>
                      <em />
                      <em />
                      <em />
                    </div>
                  </div>
                </div>
                <div className="code-tile">
                  <span>02 / DEVELOPMENT</span>
                  <strong>Make it work.</strong>
                  <pre>
                    <span>const</span>
                    {" yourNextIdea = {\n  design: "}
                    <b>&quot;thoughtful&quot;</b>
                    {",\n  experience: "}
                    <b>&quot;intuitive&quot;</b>
                    {",\n  builtFor: "}
                    <b>&quot;your business&quot;</b>
                    {"\n};"}
                  </pre>
                </div>
              </div>
              <div className="workspace-bottom">
                <div className="quality-orb">↗</div>
                <div>
                  <strong>One connected experience.</strong>
                  <p>Responsive design. Purposeful development.</p>
                </div>
                <span className="build-bars" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                </span>
              </div>
            </div>
          </div>
          <div className="workspace-status">
            <span>● &nbsp; MADE TO FIT YOUR BUSINESS</span>
            <span>DESIGN → DEVELOP → DELIVER</span>
          </div>
        </div>
        <div className="workspace-sticker">
          <span className="sticker-icon">&lt;/&gt;</span>
          <div>
            <small>LESS FRICTION. MORE POSSIBILITY.</small>
            <strong>Built around you.</strong>
          </div>
          <span>✳</span>
        </div>
      </div>
    </section>
  );
}
