type SectionIntroProps = {
  title: string;
  description: string;
};

export function SectionIntro({ title, description }: SectionIntroProps) {
  return (
    <div className="mb-8">
      <h2 className="section-title">{title}</h2>
      <p className="section-subtitle">{description}</p>
    </div>
  );
}
