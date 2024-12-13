import { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  withArrow?: boolean;
  className?: string;
  onClick?: () => void;
}

export function Button({ 
  children, 
  variant = 'primary', 
  withArrow = false,
  className = '',
  onClick
}: ButtonProps) {
  const baseClass = variant === 'primary' ? 'btn-primary' : 'btn-secondary';
  
  return (
    <button 
      className={`${baseClass} flex items-center justify-center gap-2 ${className}`}
      onClick={onClick}
    >
      {children}
      {withArrow && <ArrowRight className="w-5 h-5" />}
    </button>
  );
}