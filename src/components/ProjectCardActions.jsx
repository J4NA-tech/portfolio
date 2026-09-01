import { getLinkProps, isPlaceholder } from "../utils/links";
import { ExternalLinkIcon, GitHubIcon } from "./icons";

const actionButtonClass =
  "inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-4 py-2 text-sm font-medium text-ink transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/30 hover:text-accent hover:shadow-sm";

const placeholderButtonClass =
  "inline-flex cursor-not-allowed items-center gap-2 rounded-lg border border-dashed border-border bg-surface px-4 py-2 text-sm font-medium text-ink-subtle opacity-70";

function ActionLink({ href, external, icon: Icon, label }) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={actionButtonClass}
    >
      <Icon className="h-4 w-4" />
      {label}
    </a>
  );
}

function PlaceholderAction({ icon: Icon, label }) {
  return (
    <span
      className={placeholderButtonClass}
      aria-disabled="true"
      title="Add the repository URL in src/data/projects.js"
    >
      <Icon className="h-4 w-4" />
      {label}
    </span>
  );
}

export default function ProjectCardActions({ githubUrl, demoUrl }) {
  const github = getLinkProps(githubUrl);
  const demo = demoUrl ? getLinkProps(demoUrl) : { href: undefined };
  const showDemo = demoUrl && !isPlaceholder(demoUrl);

  return (
    <div className="mt-6 flex flex-wrap gap-3 border-t border-border pt-5">
      {github.href ? (
        <ActionLink
          href={github.href}
          external={github.external}
          icon={GitHubIcon}
          label="GitHub"
        />
      ) : (
        <PlaceholderAction icon={GitHubIcon} label="GitHub" />
      )}

      {showDemo && (
        <ActionLink
          href={demo.href}
          external={demo.external}
          icon={ExternalLinkIcon}
          label="Live Demo"
        />
      )}
    </div>
  );
}
