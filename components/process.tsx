import { steps } from "@/lib/content";

export function Process() {
  return (
    <section className="wrap section" id="process">
      <div className="section-heading">
        <div>
          <div className="eyebrow">No mystery. Just a clear process.</div>
          <h2>
            From “what if”
            <br />
            <em>to “we’re live”.</em>
          </h2>
        </div>
        <p>
          Know what happens next, give feedback along the way, and launch with
          a website you understand.
        </p>
      </div>
      <div className="process timeline">
        {steps.map((step) => (
          <article className="step" key={step.number}>
            <span className="step-number">{step.number}</span>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
