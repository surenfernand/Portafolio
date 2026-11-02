import { plans, whatsapp } from "@/lib/content";
import { PackageLink } from "./package-link";

function PlanIcon({ name }: { name: (typeof plans)[number]["icon"] }) {
  const paths: Record<(typeof plans)[number]["icon"], string> = {
    launch: "M12 19V5m0 0 4 4m-4-4-4 4",
    business: "M4 20V8l8-4 8 4v12M9 20v-6h6v6",
    growth: "M4 16l5-5 3 3 8-8M14 6h6v6",
    store: "M4 7h16l-1 13H5L4 7zm4 0V5a4 4 0 0 1 8 0v2",
    custom: "M8 8l-4 4 4 4M16 8l4 4-4 4",
  };

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d={paths[name]}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Pricing() {
  return (
    <section className="wrap section" id="packages">
      <div className="section-heading">
        <div>
          <div className="eyebrow">One-time development prices</div>
          <h2 className="page-title">
            Your business.
            <br />
            <em>Built for the web.</em>
          </h2>
        </div>
        <p>
          Websites, online stores, and custom software. Modern design.
          Mobile-friendly experiences. Built around your business.
        </p>
      </div>
      <div className="offer-list">
        {plans.map((plan) => (
          <PackageLink
            key={plan.name}
            className={plan.featured ? "price-row featured" : "price-row"}
            packageName={plan.name}
            service={plan.service}
          >
            <span className="price-icon">
              <PlanIcon name={plan.icon} />
            </span>
            <span className="price-copy">
              <span className="price-name">
                {plan.name}
                {plan.featured ? <span className="offer-tag">Popular</span> : null}
              </span>
              <span className="price-highlight">{plan.highlight}</span>
            </span>
            <strong>{plan.price}</strong>
          </PackageLink>
        ))}
      </div>
      <PackageLink
        className="care-row"
        packageName="Website Hosting & Maintenance"
      >
        <span className="price-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24">
            <ellipse cx="12" cy="6" rx="7" ry="3" fill="none" stroke="currentColor" strokeWidth="1.7" />
            <path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" fill="none" stroke="currentColor" strokeWidth="1.7" />
          </svg>
        </span>
        <span className="care-copy">
          <span id="care-heading">Website Hosting & Maintenance</span>
          <small>From LKR 1,800/month onwards</small>
        </span>
      </PackageLink>
      <a
        className="whatsapp-cta"
        href={whatsapp.href}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="whatsapp-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24">
            <path
              d="M7 4h3l1 4-2 1a12 12 0 0 0 6 6l1-2 4 1v3a2 2 0 0 1-2 2A15 15 0 0 1 5 6a2 2 0 0 1 2-2z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <span>
          <small>WhatsApp your requirements</small>
          <strong>{whatsapp.display}</strong>
        </span>
      </a>
      <p className="pricing-note">
        Starting prices. Final quote depends on scope. Domains and third-party
        fees are extra.
        <br />
        Based in Sri Lanka · Working with businesses everywhere.
      </p>
    </section>
  );
}
