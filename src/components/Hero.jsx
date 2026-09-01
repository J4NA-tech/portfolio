import { personalInfo } from "../data/personal";
import { getLinkProps } from "../utils/links";
import { GitHubIcon, LinkedInIcon } from "./icons";

function HeroVisual() {
  return (
    <div className="relative hidden lg:block" aria-hidden="true">
      <div className="relative mx-auto w-full max-w-sm">
        <div className="overflow-hidden rounded-xl border border-border bg-surface-elevated shadow-sm">
          <div className="border-b border-border px-5 py-4">
            <div className="h-2 w-20 rounded bg-gray-200" />
            <div className="mt-3 h-2 w-32 rounded bg-gray-100" />
          </div>
          <div className="space-y-3 p-5">
            <div className="rounded-lg border border-border p-4">
              <div className="h-2 w-24 rounded bg-gray-200" />
              <div className="mt-3 space-y-2">
                <div className="h-2 w-full rounded bg-gray-100" />
                <div className="h-2 w-5/6 rounded bg-gray-100" />
                <div className="h-2 w-4/6 rounded bg-gray-100" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-lg border border-border p-3">
                <div className="h-2 w-12 rounded bg-gray-200" />
                <div className="mt-2 h-2 w-full rounded bg-gray-100" />
              </div>
              <div className="rounded-lg border border-border p-3">
                <div className="h-2 w-12 rounded bg-gray-200" />
                <div className="mt-2 h-2 w-full rounded bg-gray-100" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SocialLink({ href, external, icon: Icon, label }) {
  if (!href) {
    return (
      <span className="inline-flex items-center gap-1.5 text-sm text-ink-subtle">
        <Icon className="h-4 w-4" />
        {label}
      </span>
    );
  }

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-muted transition-colors hover:text-accent"
    >
      <Icon className="h-4 w-4" />
      {label}
    </a>
  );
}

export default function Hero() {
  const github = getLinkProps(personalInfo.github);
  const linkedin = getLinkProps(personalInfo.linkedin);

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="border-b border-border bg-surface-elevated pt-28 pb-16 md:pt-32 md:pb-20"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-sm font-medium text-ink-muted">
            {personalInfo.title}
          </p>
          <h1
            id="hero-heading"
            className="mt-2 text-3xl font-bold tracking-tight text-ink md:text-4xl lg:text-5xl lg:leading-tight"
          >
            {personalInfo.name}
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-ink-muted">
            {personalInfo.tagline}
          </p>

          <ul className="mt-5 flex flex-wrap gap-2" aria-label="Background">
            {personalInfo.credentials.map((item) => (
              <li
                key={item}
                className="rounded-md border border-border bg-surface px-3 py-1 text-xs font-medium text-ink-muted"
              >
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
            >
              View My Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg border border-border bg-surface-elevated px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-accent/30 hover:text-accent"
            >
              Get in Touch
            </a>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-border pt-6">
            <span className="text-xs font-medium tracking-wide text-ink-subtle uppercase">
              Connect
            </span>
            <SocialLink
              href={github.href}
              external={github.external}
              icon={GitHubIcon}
              label="GitHub"
            />
            <SocialLink
              href={linkedin.href}
              external={linkedin.external}
              icon={LinkedInIcon}
              label="LinkedIn"
            />
          </div>
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}
