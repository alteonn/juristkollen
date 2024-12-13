import { MapPin, Users, Globe, Scale } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';
import { Button } from '../ui/Button';
import { Partner } from '../../types/partner';
import { useNavigate } from 'react-router-dom';

interface PartnerCardProps {
  partner: Partner;
}

export function PartnerCard({ partner }: PartnerCardProps) {
  const navigate = useNavigate();

  return (
    <GlassCard className="flex flex-col h-full p-0 overflow-hidden">
      <div className="relative h-40 w-full bg-secondary/30">
        {partner.logo ? (
          <img
            src={partner.logo}
            alt={partner.name}
            className="w-full h-full object-contain p-4"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <Scale className="w-16 h-16 text-muted-foreground" />
          </div>
        )}
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">{partner.name}</h3>
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span>{partner.city}</span>
          </div>
        </div>

        <p className="text-muted-foreground mb-6 line-clamp-3">
          {partner.description}
        </p>

        <div className="flex flex-wrap gap-4 mb-6 text-sm">
          <div className="flex items-center gap-2 bg-secondary/30 px-3 py-1.5 rounded-full">
            <Users className="w-4 h-4 text-primary" />
            <span>{partner.team_members?.length || 0} jurister</span>
          </div>
          {partner.languages.length > 0 && (
            <div className="flex items-center gap-2 bg-secondary/30 px-3 py-1.5 rounded-full">
              <Globe className="w-4 h-4 text-primary" />
              <span>{partner.languages.join(', ')}</span>
            </div>
          )}
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {partner.specialties.slice(0, 3).map((specialty, index) => (
            <span
              key={index}
              className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm"
            >
              {specialty}
            </span>
          ))}
          {partner.specialties.length > 3 && (
            <span className="text-sm text-muted-foreground px-2">
              +{partner.specialties.length - 3} till
            </span>
          )}
        </div>

        <Button 
          variant="primary" 
          className="w-full mt-auto"
          onClick={() => navigate(`/partners/${partner.id}`)}
        >
          Se mer information
        </Button>
      </div>
    </GlassCard>
  );
}