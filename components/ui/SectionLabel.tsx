interface SectionLabelProps {
  children: React.ReactNode;
}

export default function SectionLabel({ children }: SectionLabelProps) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="w-6 h-px bg-teal" />
      <span className="section-label">{children}</span>
    </div>
  );
}
