import SectionHeading from "./SectionHeading";

const experiences = [
  {
    role: "Frontend Developer Intern",
    company: "Scrumblebit",
    duration: "1 Month Internship",
    description:
      "Worked on frontend development tasks and gained practical experience with modern web development workflows, UI implementation, and frontend technologies.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="border-b border-border bg-surface py-20 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading title="Experience" />

        <div className="relative max-w-3xl">
          <div
            className="absolute top-0 bottom-0 left-[7px] w-px bg-border"
            aria-hidden="true"
          />

          {experiences.map((item) => (
            <article key={item.role} className="relative pl-10">
              <span
                className="absolute top-1.5 left-0 h-3.5 w-3.5 rounded-full border-2 border-accent bg-surface"
                aria-hidden="true"
              />
              <div className="rounded-xl border border-border bg-surface-elevated p-6">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="text-lg font-semibold text-ink">
                    {item.role}
                  </h3>
                  <span className="text-sm font-medium text-ink-muted">
                    {item.duration}
                  </span>
                </div>
                <p className="mt-1 text-sm font-medium text-ink-muted">
                  {item.company}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-ink-subtle">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
