import { ArrowUpRight } from "lucide-react";
import { projects } from "../data";
import { ProjectPreview } from "./ProjectPreview.tsx";
import { Reveal } from "./Reveal";

export function Projects() {
  return (
    <section id="projects" className="projects section-pad">
      <div className="section-heading">
        <div>
          <span className="eyebrow">/ SELECTED WORK</span>
          <h2>
            Projects<span>.</span>
          </h2>
        </div>
        <p>
          A few things I’ve helped bring to life.
          <br />
          Built with care, shipped with confidence.
        </p>
      </div>
      <div className="project-list">
        {projects.map((project, index) => (
          <Reveal key={project.name} delay={index * 0.08}>
            <article className="project-card">
              <div className="project-info">
                <span className="project-number">{project.number} / 03</span>
                <span className="eyebrow">{project.type}</span>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <a
                  className="text-link"
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  View project <ArrowUpRight size={14} />
                </a>
              </div>
              <ProjectPreview variant={project.variant} />
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
