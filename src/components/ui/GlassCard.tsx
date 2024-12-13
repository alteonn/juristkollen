import { ReactNode, HTMLAttributes } from 'react';

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

export function GlassCard({ children, className = '', onClick, ...props }: GlassCardProps) {
  return (
    <div 
      className={`glass-card p-6 ${className}`} 
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  );
}