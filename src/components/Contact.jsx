import { personalInfo } from "../data/personal";
import { getLinkProps, isPlaceholder } from "../utils/links";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./icons";
import SectionHeading from "./SectionHeading";

const placeholderLabels = {
  YOUR_EMAIL: "janasamra90@gmail.com",
  YOUR_LINKEDIN_URL: "https://www.linkedin.com/in/jana-el-samra-59b657293/",
  YOUR_GITHUB_URL: "https://github.com/J4NA-tech",
};

function ContactLink({ href, external, icon: Icon, label, value }) {
  const placeholder = isPlaceholder(value);
  const displayValue = placeholder
    ? placeholderLabels[value] ?? "Update in personal.js"
    : value;

  if (placeholder) {
    return (
      <div className="flex items-center gap-4 rounded-xl border border-border bg-surface-elevated px-5 py-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-ink-muted">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <p className="text-sm font-medium text-ink">{label}</p>
          <p className="text-sm text-ink-subtle">{displayValue}</p>
        </div>
      </div>
    );
  }

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group flex items-center gap-4 rounded-xl border border-border bg-surface-elevated px-5 py-4 transition-colors hover:border-accent/30"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-ink-muted transition-colors group-hover:bg-blue-50 group-hover:text-accent">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <p className="text-sm font-medium text-ink">{label}</p>
        <p className="text-sm text-ink-subtle transition-colors group-hover:text-accent">
          {displayValue}
        </p>
      </div>
    </a>
  );
}

export default function Contact() {
  const email = getLinkProps(`mailto:${personalInfo.email}`);
  const linkedin = getLinkProps(personalInfo.linkedin);
  const github = getLinkProps(personalInfo.github);

  return (
    <section id="contact" className="border-t border-border bg-surface-elevated py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <SectionHeading
            title="Let's Work Together"
            description="I'm open to software development and frontend opportunities where I can contribute, learn, and build meaningful products."
            className="mb-10 text-center [&_p]:mx-auto"
          />
        </div>

        <div className="mx-auto grid max-w-2xl gap-4">
          <ContactLink
            href={isPlaceholder(personalInfo.email) ? undefined : email.href}
            external={email.external}
            icon={MailIcon}
            label="Email"
            value={personalInfo.email}
          />
          <ContactLink
            href={linkedin.href}
            external={linkedin.external}
            icon={LinkedInIcon}
            label="LinkedIn"
            value={personalInfo.linkedin}
          />
          <ContactLink
            href={github.href}
            external={github.external}
            icon={GitHubIcon}
            label="GitHub"
            value={personalInfo.github}
          />
        </div>
      </div>
    </section>
  );
}
