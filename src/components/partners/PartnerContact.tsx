import { Mail, Phone, Link as LinkIcon } from 'lucide-react';

interface PartnerContactProps {
  email?: string;
  phone?: string;
  website?: string;
}

export function PartnerContact({ email, phone, website }: PartnerContactProps) {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {email && (
        <a
          href={`mailto:${email}`}
          className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-primary/5 to-primary/10 
                   hover:from-primary/10 hover:to-primary/15 transition-colors group"
        >
          <Mail className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
          <span className="text-primary">{email}</span>
        </a>
      )}
      {phone && (
        <a
          href={`tel:${phone}`}
          className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-primary/5 to-primary/10 
                   hover:from-primary/10 hover:to-primary/15 transition-colors group"
        >
          <Phone className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
          <span className="text-primary">{phone}</span>
        </a>
      )}
      {website && (
        <a
          href={website}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-primary/5 to-primary/10 
                   hover:from-primary/10 hover:to-primary/15 transition-colors group"
        >
          <LinkIcon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
          <span className="text-primary">{new URL(website).hostname}</span>
        </a>
      )}
    </div>
  );
}