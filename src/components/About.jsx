import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="border-b border-border bg-surface py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <SectionHeading title="About Me" />
          <div className="space-y-4 text-base leading-relaxed text-ink-muted">
            <p>
              I’m a Computer Engineering graduate currently pursuing a Master’s degree in Computer Engineering, with a strong interest in software development, modern web technologies, and AI-assisted development.
              I have hands-on experience building web and mobile applications with React, JavaScript, Flutter, Python, FastAPI, and SQL through academic projects, internships, and personal development. I enjoy turning ideas into functional products, from designing user interfaces to implementing backend logic and working with databases
            </p>
            <p>
              I also actively use AI-powered development tools such as Claude, Cursor, and GitHub Copilot as part of my coding workflow. I use AI to explore solutions, generate and refine ideas, debug issues, learn unfamiliar technologies, and accelerate development while understanding, reviewing, and maintaining the code I build.
              I’m always looking to learn new technologies, experiment with different approaches, and build practical projects that solve real-world problems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
