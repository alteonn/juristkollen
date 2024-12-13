interface ResponsiveGridProps {
  children: React.ReactNode;
  columns?: {
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
  gap?: string;
  className?: string;
}

export function ResponsiveGrid({ 
  children, 
  columns = { sm: 1, md: 2, lg: 3, xl: 4 },
  gap = 'gap-4 sm:gap-6 lg:gap-8',
  className = ''
}: ResponsiveGridProps) {
  const getGridCols = () => {
    return `
      grid-cols-1
      ${columns.sm ? `sm:grid-cols-${columns.sm}` : ''}
      ${columns.md ? `md:grid-cols-${columns.md}` : ''}
      ${columns.lg ? `lg:grid-cols-${columns.lg}` : ''}
      ${columns.xl ? `xl:grid-cols-${columns.xl}` : ''}
    `;
  };

  return (
    <div className={`grid ${getGridCols()} ${gap} ${className}`}>
      {children}
    </div>
  );
}