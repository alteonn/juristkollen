import { MapPin, Mail, Phone } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';
import { Button } from '../ui/Button';
import { useNavigate } from 'react-router-dom';

interface LawyerCardProps {
  lawyer: {
    name: string;
    role: string;
    email?: string;
    phone?: string;
    photo?: string;
    partnerName: string;
    partnerLogo?: string;
    partnerCity: string;
    partnerId: string;
  };
}

export function LawyerCard({ lawyer }: LawyerCardProps) {
  const navigate = useNavigate();

  return (
    <GlassCard className="flex flex-col h-full p-0 overflow-hidden">
      <div className="relative aspect-[4/5] w-full bg-gradient-to-b from-secondary/50 to-secondary/10">
        {lawyer.photo ? (
          <img
            src={lawyer.photo}
            alt={lawyer.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/5 to-accent/5">
            <span className="text-8xl font-bold text-primary/20">
              {lawyer.name.charAt(0)}
            </span>
          </div>
        )}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent p-6">
          <h3 className="text-2xl font-semibold mb-2 text-white">{lawyer.name}</h3>
          <p className="text-white/90 font-medium">{lawyer.role}</p>
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <div className="space-y-4 mb-8">
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span>{lawyer.partnerCity}</span>
          </div>

          {lawyer.email && (
            <a
              href={`mailto:${lawyer.email}`}
              className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              <Mail className="w-4 h-4" />
              {lawyer.email}
            </a>
          )}

          {lawyer.phone && (
            <a
              href={`tel:${lawyer.phone}`}
              className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              <Phone className="w-4 h-4" />
              {lawyer.phone}
            </a>
          )}
        </div>

        <div className="mt-auto">
          <div className="flex items-center gap-3 mb-6 h-14 p-4 bg-secondary/30 rounded-xl">
            {lawyer.partnerLogo && (
              <img
                src={lawyer.partnerLogo}
                alt={lawyer.partnerName}
                className="h-full object-contain"
              />
            )}
            <span className="font-medium text-secondary-foreground">
              {lawyer.partnerName}
            </span>
          </div>

          <Button 
            variant="primary" 
            className="w-full"
            onClick={() => navigate(`/partners/${lawyer.partnerId}`)}
          >
            Se mer information
          </Button>
        </div>
      </div>
    </GlassCard>
  );
}