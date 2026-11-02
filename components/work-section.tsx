"use client";

import { useState } from "react";
import Image from "next/image";
import {
  projectFilters,
  projects,
  type ProjectFilter,
} from "@/lib/content";
import { ProjectLightbox } from "./project-lightbox";
import { useSite } from "./site-context";

const categoryLabel = {
  website: "Business website",
  booking: "Booking",
  app: "Web application",
  store: "E-commerce",
} as const;

export function WorkSection() {
  const [filter, setFilter] = useState<ProjectFilter>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const { openProject } = useSite();
  const visible = projects.filter(
    (project) => filter === "all" || project.category === filter,
  );
  const shots = visible.flatMap((project) =>
    project.images
      ? [
          {
            slug: project.slug,
            title: project.title,
            description: project.description,
            alt: project.alt,
            src: project.images.desktop,
          },
        ]
      : [],
  );

  return (
    <section className="work-section" id="work">
      <div className="wrap section">
        <div className="section-heading">
          <div>
            <div className="eyebrow">Selected work</div>
            <h2 className="page-title">Selected work.</h2>
          </div>
          <p>
            Independent projects are my own. The other sites are work I
            contributed to professionally. Those cards link to the public
            website and are not presented as Web Loom Zone client work.
          </p>
        </div>
        <div className="filters" role="group" aria-label="Filter projects">
          {projectFilters.map((item) => (
            <button
              key={item.id}
              className="filter"
              type="button"
              aria-pressed={filter === item.id}
              onClick={() => {
                setFilter(item.id);
                setLightboxIndex(null);
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
        <div className="projects" key={filter}>
          {visible.map((project) => {
            const index = projects.findIndex((item) => item.slug === project.slug);
            const shotIndex = shots.findIndex((shot) => shot.slug === project.slug);
            return (
              <article className="project" key={project.slug}>
                <div className="project-visual">
                  {project.images ? (
                    <button
                      className="browser-frame"
                      type="button"
                      aria-label={`Enlarge the ${project.title} screenshot`}
                      onClick={() => setLightboxIndex(shotIndex)}
                    >
                      <span className="browser-bar" aria-hidden="true">
                        <i />
                        <i />
                        <i />
                        <span>Preview</span>
                      </span>
                      <span className="project-shot">
                        <Image
                          src={project.images.desktop}
                          alt={project.alt}
                          fill
                          sizes="(max-width: 760px) 100vw, (max-width: 1050px) 50vw, 33vw"
                          style={{ objectFit: "contain", objectPosition: "center" }}
                        />
                      </span>
                    </button>
                  ) : (
                    <div className="shot-missing">
                      <span>Screenshot needed</span>
                      <p>No screenshot is available for this project yet.</p>
                    </div>
                  )}
                </div>
                <div className="project-caption">
                  <div>
                    <p className="project-kicker">
                      {categoryLabel[project.category]}
                    </p>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    {project.technologies.length > 0 ? (
                      <ul className="tech-list">
                        {project.technologies.map((tech) => (
                          <li className="tech-badge" key={tech}>
                            {tech}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                    {project.live ? (
                      <div className="project-links">
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Visit site ↗
                        </a>
                      </div>
                    ) : null}
                  </div>
                  {project.origin === "independent" ? (
                    <button
                      className="project-open"
                      type="button"
                      aria-label={`View ${project.title} details`}
                      onClick={() => openProject(index)}
                    >
                      ↗
                    </button>
                  ) : null}
                </div>
              </article>
            );
          })}
        </div>
       
      </div>
      <ProjectLightbox
        shots={shots}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onIndex={setLightboxIndex}
      />
    </section>
  );
}
