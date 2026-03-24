function SectionHeading({ eyebrow, title, description }) {
  return (
    <div>
      <p className="section-title">{eyebrow}</p>
      <h2 className="section-heading">{title}</h2>
      <p className="section-copy">{description}</p>
    </div>
  );
}

export default SectionHeading;
