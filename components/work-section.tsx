"use client";

import { useState } from "react";
import { projectFilters, type ProjectFilter } from "@/lib/content";
import { useSite } from "./site-context";

export function WorkSection() {
  const [filter, setFilter] = useState<ProjectFilter>("all");
  const { openProject } = useSite();

  return (
    <section className="work-section" id="work">
      <div className="wrap section">
        <div className="section-heading">
          <div>
            <div className="eyebrow">A few possibilities</div>
            <h2>
              Different businesses.
              <br />
              <em>Distinctive websites.</em>
            </h2>
          </div>
          <p>
            Explore three sample directions. Each one starts with a different
            business need, rather than the same template.
          </p>
        </div>
        <div className="filters" aria-label="Filter project concepts">
          {projectFilters.map((item) => (
            <button
              key={item.id}
              className="filter"
              type="button"
              aria-pressed={filter === item.id}
              onClick={() => setFilter(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>
        <div className="projects">
          <article
            className="project"
            hidden={filter !== "all" && filter !== "website"}
          >
            <div className="project-visual">
              <div className="project-preview">
                <nav>
                  <b>Meraki Arts</b>
                  <span>Gallery &nbsp; About &nbsp; Contact</span>
                </nav>
                <h4>
                  Little details.
                  <br />
                  Lasting memories.
                </h4>
                <p>
                  Pencil portraits that turn your favourite moments into
                  something to keep.
                </p>
                <span className="mini-btn">Explore the gallery ↗</span>
                <div className="sketch">
                  <svg viewBox="0 0 100 140" aria-hidden="true">
                    <path
                      d="M20 140Q16 110 31 99L39 92 39 78Q24 66 30 41Q31 14 57 17Q84 18 79 51L73 76 61 88 65 100Q87 112 90 140"
                      fill="#b6afa4"
                    />
                    <path
                      d="M33 43Q34 20 55 24Q73 28 72 48L67 72 55 84 43 79 35 66Z"
                      fill="#ddd5c8"
                    />
                    <path
                      d="M29 49Q20 16 51 10Q85 8 82 54L71 43 63 25Q50 47 29 49Z"
                      fill="#726c65"
                    />
                    <path
                      d="M39 55L46 53M57 53L65 55M52 56L49 67 55 68M46 74Q54 78 59 72"
                      fill="none"
                      stroke="#746e66"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="project-caption">
              <div>
                <h3>Meraki Arts</h3>
                <p>Artist portfolio · Concept design</p>
              </div>
              <button
                className="project-open"
                type="button"
                aria-label="View Meraki Arts concept"
                onClick={() => openProject(0)}
              >
                ↗
              </button>
            </div>
          </article>
          <article
            className="project"
            hidden={filter !== "all" && filter !== "store"}
          >
            <div className="project-visual">
              <div className="project-preview preview-two">
                <nav>
                  <b>DAILY GOODS.</b>
                  <span>Shop &nbsp; Our story</span>
                </nav>
                <h4>
                  Less clutter.
                  <br />
                  More everyday joy.
                </h4>
                <p>Considered essentials for a home that feels like yours.</p>
                <div className="mini-products">
                  <div>◡</div>
                  <div>▱</div>
                  <div>◒</div>
                </div>
              </div>
            </div>
            <div className="project-caption">
              <div>
                <h3>Daily Goods</h3>
                <p>Lifestyle store · Concept design</p>
              </div>
              <button
                className="project-open"
                type="button"
                aria-label="View Daily Goods concept"
                onClick={() => openProject(1)}
              >
                ↗
              </button>
            </div>
          </article>
          <article
            className="project"
            hidden={filter !== "all" && filter !== "app"}
          >
            <div className="project-visual">
              <div className="project-preview preview-three">
                <nav>
                  <b>STUDIO / DESK</b>
                  <span>Overview &nbsp; Projects</span>
                </nav>
                <h4>
                  Everything in
                  <br />
                  its right place.
                </h4>
                <p>
                  A calmer workspace for projects, requests, and the next thing
                  to do.
                </p>
                <div className="code-lines">
                  <i />
                  <i style={{ width: "65%" }} />
                  <i style={{ width: "80%" }} />
                </div>
                <span
                  className="mini-btn"
                  style={{ background: "#edc97a", color: "#172c43" }}
                >
                  Open workspace ↗
                </span>
              </div>
            </div>
            <div className="project-caption">
              <div>
                <h3>Studio Desk</h3>
                <p>Client portal · Concept design</p>
              </div>
              <button
                className="project-open"
                type="button"
                aria-label="View Studio Desk concept"
                onClick={() => openProject(2)}
              >
                ↗
              </button>
            </div>
          </article>
        </div>
        <p className="work-note">
          Illustrative project concepts. Replace these with your own completed
          work and case studies.
        </p>
      </div>
    </section>
  );
}
