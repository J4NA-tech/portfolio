import SectionHeading from "./SectionHeading";

const education = [
  {
    degree: "Master's Degree",
    field: "Computer Engineering",
    institution: null,
    status: "Currently pursuing",
  },
  {
    degree: "Bachelor's Degree",
    field: "Computer Engineering",
    institution: "Biruni University",
    status: null,
  },
  {
    degree: "High School",
    field: null,
    institution: "Şafak Vocational and Technical Anatolian High School",
    status: null,
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="border-b border-border bg-surface-elevated py-20 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading title="Education" />

        <div className="relative max-w-3xl">
          <div
            className="absolute top-0 bottom-0 left-[7px] w-px bg-border"
            aria-hidden="true"
          />

          {education.map((item) => (
            <article
              key={`${item.degree}-${item.institution ?? "current"}`}
              className="relative pl-10 pb-10 last:pb-0"
            >
              <span
                className="absolute top-1.5 left-0 h-3.5 w-3.5 rounded-full border-2 border-accent bg-surface-elevated"
                aria-hidden="true"
              />
              <div className="rounded-xl border border-border bg-surface p-6">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-ink">
                      {item.degree}
                    </h3>
                    {item.field && (
                      <p className="mt-1 text-sm font-medium text-ink-muted">
                        {item.field}
                      </p>
                    )}
                  </div>
                  {item.status && (
                    <span className="inline-flex w-fit rounded-md border border-border bg-surface-elevated px-3 py-1 text-xs font-medium text-ink-muted">
                      {item.status}
                    </span>
                  )}
                </div>
                {item.institution && (
                  <p className="mt-3 text-sm text-ink-subtle">
                    {item.institution}
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
