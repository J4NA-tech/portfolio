export default function SectionHeading({ title, description, className = "" }) {
  return (
    <div className={`mb-10 md:mb-12 ${className}`}>
      <h2 className="text-2xl font-bold tracking-tight text-ink md:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-ink-muted">
          {description}
        </p>
      )}
    </div>
  );
}
