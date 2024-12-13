export interface TeamMember {
  name: string;
  role: string;
  email: string;
  phone: string;
  photo?: string;
}

export interface Partner {
  id: string;
  name: string;
  email: string;
  phone: string;
  website?: string;
  logo: string;
  city: string;
  specialties: string[];
  languages: string[];
  description: string;
  team_members: TeamMember[];
}