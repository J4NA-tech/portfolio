import { skillCategories } from "../data/skills";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section
      id="skills"
      className="border-y border-border bg-surface-elevated py-20 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading title="Technical Skills" />

        <div className="grid gap-6 sm:grid-cols-2">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="rounded-xl border border-border bg-surface p-6"
            >
              <h3 className="text-sm font-semibold tracking-wide text-ink uppercase">
                {category.title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-border bg-surface-elevated px-3 py-1.5 text-sm font-medium text-ink-muted"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
