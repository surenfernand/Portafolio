import { faqs } from "@/lib/content";

export function Faq() {
  return (
    <section className="wrap section" id="faq" style={{ paddingTop: 0 }}>
      <div className="faq-layout">
        <div>
          <div className="eyebrow">Good questions</div>
          <h2>
            A few things
            <br />
            <em>you might be wondering.</em>
          </h2>
          <p>
            Not sure where to start? A rough idea is enough for the first
            conversation.
          </p>
        </div>
        <div>
          {faqs.map((item, index) => (
            <details key={item.question} {...(index === 0 ? { open: true } : {})}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
