interface CitySectionProps {
  title: string;
  description: string;
  children: React.ReactNode;
  variant?: 'light' | 'dark';
  className?: string;
}

export function CitySection({ 
  title, 
  description, 
  children, 
  variant = 'light',
  className = ''
}: CitySectionProps) {
  const bgClass = variant === 'light' 
    ? 'from-background to-secondary/30'
    : 'from-secondary/30 to-background';

  return (
    <section className={`py-24 bg-gradient-to-b ${bgClass} relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80')] opacity-[0.02]" />
      
      <div className="container relative">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            {title}
          </h2>
          <p className="text-xl text-muted-foreground">
            {description}
          </p>
        </div>
        {children}
      </div>
    </section>
  );
}