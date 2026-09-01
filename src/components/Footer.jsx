import { personalInfo } from "../data/personal";
import { getLinkProps } from "../utils/links";
import { GitHubIcon, LinkedInIcon } from "./icons";

function FooterLink({ href, external, label, children }) {
  if (!href) {
    return (
      <span className="text-ink-subtle" aria-hidden="true">
        {children}
      </span>
    );
  }

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="text-ink-subtle transition-colors hover:text-accent"
      aria-label={label}
    >
      {children}
    </a>
  );
}

export default function Footer() {
  const github = getLinkProps(personalInfo.github);
  const linkedin = getLinkProps(personalInfo.linkedin);

  return (
    <footer className="border-t border-border bg-surface-elevated py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="text-sm text-ink-muted">
            &copy; 2026 {personalInfo.name}
          </p>
          <p className="mt-1 text-xs text-ink-subtle">Built with React</p>
        </div>

        <div className="flex items-center gap-4">
          <FooterLink
            href={github.href}
            external={github.external}
            label="GitHub profile"
          >
            <GitHubIcon />
          </FooterLink>
          <FooterLink
            href={linkedin.href}
            external={linkedin.external}
            label="LinkedIn profile"
          >
            <LinkedInIcon />
          </FooterLink>
        </div>
      </div>
    </footer>
  );
}
