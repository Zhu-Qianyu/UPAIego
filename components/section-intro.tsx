type SectionIntroProps = {
  title: string;
  description: string;
};

export function SectionIntro({ title, description }: SectionIntroProps) {
  return (
    <div className="mb-[clamp(1.25rem,2.4vw,2rem)]">
      <h2 className="section-title">{title}</h2>
      <p className="section-subtitle">{description}</p>
    </div>
  );
}
