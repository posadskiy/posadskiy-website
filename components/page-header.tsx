type Props = {
  title: string;
  subtitle: string;
};

export function PageHeader({ title, subtitle }: Props) {
  return (
    <div className="space-y-3 text-center">
      <p className="text-xs uppercase tracking-[0.4em] text-ink-muted">
        {subtitle}
      </p>
      <h1 className="text-4xl font-semibold">{title}</h1>
    </div>
  );
}

