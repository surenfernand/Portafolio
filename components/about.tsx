import { principles } from "@/lib/content";

export function About() {
  return (
    <section className="wrap about-intro" id="about">
      <div className="about">
        <div>
          <div className="eyebrow">Strategy meets engineering</div>
          <h2 className="page-title">
            Your business deserves more than <em>just a page.</em>
          </h2>
          <p>
            A website should help people understand what you do, trust what
            they see, and take the next step. That’s where we start.
          </p>
        </div>
        <div>
          <p>
            From the first conversation to the final details, the aim is
            simple: make the technical side feel approachable and build
            something useful for your business.
          </p>
          <div className="principles">
            {principles.map((principle) => (
              <div key={principle.title}>
                <strong>{principle.title}</strong>
                <span>{principle.detail}</span>
              </div>
            ))}
          </div>
          <div className="about-sign">
            WEB LOOM ZONE &nbsp; / &nbsp; Design with intention. Develop with
            care.
          </div>
        </div>
      </div>
    </section>
  );
}
