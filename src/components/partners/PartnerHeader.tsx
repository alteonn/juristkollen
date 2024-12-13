import { MapPin } from 'lucide-react';
import { Partner } from '../../types/partner';

interface PartnerHeaderProps {
  partner: Partner;
}

export function PartnerHeader({ partner }: PartnerHeaderProps) {
  return (
    <div className="flex flex-col md:flex-row gap-8">
      <div className="w-full md:w-64 h-64 bg-secondary/30 rounded-xl flex-shrink-0">
        {partner.logo ? (
          <img
            src={partner.logo}
            alt={partner.name}
            className="w-full h-full object-contain p-8 rounded-xl"
          />
        ) : null}
      </div>

      <div className="flex-1">
        <h1 className="text-4xl font-bold mb-4">{partner.name}</h1>
        
        <div className="flex flex-wrap gap-6 text-muted-foreground mb-6">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>{partner.city}</span>
          </div>
        </div>

        <p className="text-muted-foreground mb-8">
          {partner.description}
        </p>
      </div>
    </div>
  );
}