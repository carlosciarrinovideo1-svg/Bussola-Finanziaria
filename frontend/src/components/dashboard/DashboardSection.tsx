interface DashboardSectionProps {
  title: string;
  children: React.ReactNode;
}

export default function DashboardSection({
  title,
  children,
}: DashboardSectionProps) {

  return (
    <section>

      <h2>
        {title}
      </h2>

      <div>
        {children}
      </div>

    </section>
  );
}
