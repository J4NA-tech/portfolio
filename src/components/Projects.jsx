import { projects } from "../data/projects";
import ProjectCardActions from "./ProjectCardActions";
import SectionHeading from "./SectionHeading";

function ProjectCard({ project, prominent = false }) {
  return (
    <article
      className={`flex h-full flex-col rounded-xl border border-border bg-surface-elevated ${
        prominent ? "p-7 md:p-8" : "p-6"
      }`}
    >
      <div className="flex-1">
        <div className="flex flex-wrap items-center gap-2">
          {project.context && (
            <span className="rounded-md bg-gray-100 px-2 py-0.5 text-xs font-medium text-ink-muted">
              {project.context}
            </span>
          )}
        </div>

        <h3
          className={`mt-3 font-semibold tracking-tight text-ink ${
            prominent ? "text-xl md:text-2xl" : "text-lg"
          }`}
        >
          {project.title}
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-ink-muted">
          {project.description}
        </p>

        {project.features?.length > 0 && (
          <ul className="mt-4 space-y-1.5">
            {project.features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-2 text-sm text-ink-subtle"
              >
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                {feature}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-border bg-surface px-2.5 py-1 text-xs font-medium text-ink-muted"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <ProjectCardActions
        githubUrl={project.githubUrl}
        demoUrl={project.demoUrl}
      />
    </article>
  );
}

export default function Projects() {
  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);
  const [primaryProject, ...secondaryFeatured] = featuredProjects;

  return (
    <section id="projects" className="py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title="Projects"
          description="Selected academic and personal work across frontend development, mobile applications, and full-stack systems."
        />

        <div className="space-y-6">
          {primaryProject && (
            <ProjectCard project={primaryProject} prominent />
          )}

          {secondaryFeatured.length > 0 && (
            <div className="grid gap-6 lg:grid-cols-2">
              {secondaryFeatured.map((project) => (
                <ProjectCard key={project.id} project={project} prominent />
              ))}
            </div>
          )}
        </div>

        {otherProjects.length > 0 && (
          <div className="mt-12">
            <h3 className="mb-6 text-base font-semibold text-ink">
              Additional Projects
            </h3>
            <div className="grid gap-6 md:grid-cols-2">
              {otherProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
