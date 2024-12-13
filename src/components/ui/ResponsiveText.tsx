interface ResponsiveTextProps {
  children: React.ReactNode;
  variant?: 'heading' | 'subheading' | 'body';
  className?: string;
}

export function ResponsiveText({ 
  children, 
  variant = 'body',
  className = '' 
}: ResponsiveTextProps) {
  const variantClasses = {
    heading: 'heading-responsive font-bold',
    subheading: 'subheading-responsive font-semibold',
    body: 'text-responsive'
  };

  return (
    <div className={`${variantClasses[variant]} ${className}`}>
      {children}
    </div>
  );
}