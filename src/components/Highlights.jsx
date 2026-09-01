import SectionHeading from "./SectionHeading";

const highlights = [
  "TÜBİTAK 2209-A project acceptance",
  "Machine learning and AI-focused academic projects",
  "Software development projects across web, mobile, and backend technologies",
];

export default function Highlights() {
  return (
    <section id="highlights" className="bg-surface py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <SectionHeading
            title="Academic & Technical Highlights"
            className="mb-8"
          />
          <ul className="space-y-3">
            {highlights.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm leading-relaxed text-ink-muted"
              >
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
