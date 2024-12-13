import { Briefcase } from 'lucide-react';

interface PartnerSpecialtiesProps {
  specialties: string[];
}

export function PartnerSpecialties({ specialties }: PartnerSpecialtiesProps) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-4">
        <div className="bg-primary/10 p-2 rounded-lg">
          <Briefcase className="w-5 h-5 text-primary" />
        </div>
        <h3 className="text-lg font-semibold">Specialområden</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {specialties.map((specialty, index) => (
          <span
            key={index}
            className="px-4 py-2 rounded-full text-sm bg-gradient-to-r from-primary/5 to-primary/10 
                     text-primary border border-primary/10 hover:border-primary/20 transition-colors"
          >
            {specialty}
          </span>
        ))}
      </div>
    </div>
  );
}