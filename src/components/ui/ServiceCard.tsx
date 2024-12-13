import { LucideIcon } from 'lucide-react';
import { GlassCard } from './GlassCard';

interface ServiceCardProps {
  Icon: LucideIcon;
  title: string;
  description: string;
}

export function ServiceCard({ Icon, title, description }: ServiceCardProps) {
  return (
    <GlassCard className="flex flex-col items-start h-full hover:-translate-y-1 transition-transform duration-300">
      <div className="bg-primary/10 p-3 rounded-2xl mb-6">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </GlassCard>
  );
}