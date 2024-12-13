import { Users, Scale, MapPin } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';

interface CityStatsProps {
  cityName: string;
}

export function CityStats({ cityName }: CityStatsProps) {
  return (
    <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto -mt-16 relative z-10">
      <GlassCard className="flex items-center gap-4">
        <div className="bg-[#646cea]/10 p-3 rounded-2xl">
          <Scale className="w-6 h-6 text-[#646cea]" />
        </div>
        <div>
          <div className="text-2xl font-bold">Omfattande</div>
          <div className="text-muted-foreground">Juridisk expertis</div>
        </div>
      </GlassCard>

      <GlassCard className="flex items-center gap-4">
        <div className="bg-[#646cea]/10 p-3 rounded-2xl">
          <Users className="w-6 h-6 text-[#646cea]" />
        </div>
        <div>
          <div className="text-2xl font-bold">Beprövad</div>
          <div className="text-muted-foreground">Erfarenhet</div>
        </div>
      </GlassCard>

      <GlassCard className="flex items-center gap-4">
        <div className="bg-[#646cea]/10 p-3 rounded-2xl">
          <MapPin className="w-6 h-6 text-[#646cea]" />
        </div>
        <div>
          <div className="text-2xl font-bold">Etablerad</div>
          <div className="text-muted-foreground">Lokal närvaro</div>
        </div>
      </GlassCard>
    </div>
  );
}