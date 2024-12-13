import { Mail, Phone } from 'lucide-react';
import { TeamMember } from '../../types/partner';

interface PartnerTeamProps {
  members: TeamMember[];
}

export function PartnerTeam({ members }: PartnerTeamProps) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {members.map((member, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-center p-6 rounded-xl bg-gradient-to-b from-primary/5 to-transparent"
        >
          {member.photo ? (
            <img
              src={member.photo}
              alt={member.name}
              className="w-64 h-64 rounded-xl object-cover mb-6"
            />
          ) : (
            <div className="w-64 h-64 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-6">
              <span className="text-6xl font-bold text-primary">
                {member.name.charAt(0)}
              </span>
            </div>
          )}
          <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
          <p className="text-muted-foreground text-lg mb-4">
            {member.role}
          </p>
          <div className="space-y-2">
            {member.email && (
              <a
                href={`mailto:${member.email}`}
                className="flex items-center justify-center gap-2 text-primary hover:underline group"
              >
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                {member.email}
              </a>
            )}
            {member.phone && (
              <a
                href={`tel:${member.phone}`}
                className="flex items-center justify-center gap-2 text-primary hover:underline group"
              >
                <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                {member.phone}
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}