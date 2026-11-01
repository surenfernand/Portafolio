import { services } from "@/lib/content";

export function Services() {
  return (
    <section className="wrap section" id="services">
      <div className="section-heading">
        <div>
          <div className="eyebrow">What we can build together</div>
          <h2>
            Your next move.
            <br />
            <em>Our kind of challenge.</em>
          </h2>
        </div>
        <p>
          A first website, a fresh start, or a smarter way to sell. Choose the
          right foundation for where your business is going.
        </p>
      </div>
      <div className="services">
        {services.map((service) => (
          <article className="service" key={service.title}>
            <div className="service-icon" aria-hidden="true">
              {service.icon}
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <ul>
              {service.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
