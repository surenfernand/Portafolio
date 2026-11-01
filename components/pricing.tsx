import { plans } from "@/lib/content";
import { PackageLink } from "./package-link";

export function Pricing() {
  return (
    <section className="wrap section" id="packages">
      <div className="section-heading">
        <div>
          <div className="eyebrow">One-time development prices</div>
          <h2>
            A plan for where you are.
            <br />
            <em>Room for where you’re going.</em>
          </h2>
        </div>
        <p>
          From a first website to custom software. Prices are in Sri Lankan
          rupees, with a final quotation based on your requirements.
        </p>
      </div>
      <div className="pricing pricing-five">
        {plans.map((plan) => (
          <article
            className={plan.featured ? "plan featured" : "plan"}
            key={plan.name}
          >
            {plan.featured ? (
              <span className="plan-tag">{plan.tag}</span>
            ) : null}
            <small>{plan.kicker}</small>
            <h3>{plan.name}</h3>
            <div className={plan.custom ? "plan-price custom-price" : "plan-price"}>
              <span className="price-prefix">{plan.prefix}</span>
              <strong>
                {plan.currency ? <span>LKR</span> : null}
                {plan.price}
              </strong>
              <span className="price-period">{plan.period}</span>
            </div>
            <p>{plan.description}</p>
            <ul>
              {plan.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <PackageLink
              className={plan.featured ? "button" : "button light"}
              packageName={plan.name}
              service={plan.service}
            >
              {plan.cta} <span aria-hidden="true">↗</span>
            </PackageLink>
          </article>
        ))}
      </div>
      <aside className="care-banner" aria-labelledby="care-heading">
        <div className="care-icon" aria-hidden="true">
          ⌘
        </div>
        <div className="care-description">
          <div className="eyebrow">Optional ongoing service</div>
          <h3 id="care-heading">Website Hosting & Maintenance</h3>
          <p>
            Hosting, SSL, scheduled backups, uptime monitoring, and routine
            maintenance within an agreed scope.
          </p>
          <small>
            Content changes and new features are quoted separately. Support
            limits and backup retention are agreed in your care plan.
          </small>
        </div>
        <div className="care-action">
          <div className="care-price">
            <span>FROM</span>
            <strong>
              LKR 1,800<small> / month onwards</small>
            </strong>
          </div>
          <PackageLink
            className="button light"
            packageName="Website Hosting & Maintenance"
          >
            Ask about care <span aria-hidden="true">↗</span>
          </PackageLink>
        </div>
      </aside>
      <p className="pricing-note">
        Starting prices. Final quote depends on scope. Domains and third-party
        fees are extra.
      </p>
    </section>
  );
}
