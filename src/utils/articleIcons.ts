import { 
  Scale, 
  Briefcase, 
  Users, 
  Gavel, 
  Heart, 
  Building2, 
  FileText, 
  ShoppingBag,
  LucideIcon
} from 'lucide-react';

export const getCategoryIcon = (category: string): LucideIcon => {
  switch (category) {
    case 'Avtalsrätt':
      return Scale;
    case 'Arbetsrätt':
      return Briefcase;
    case 'Familjerätt':
      return Heart;
    case 'Brottmål':
      return Gavel;
    case 'Fastighetsrätt':
      return Building2;
    case 'Skatterätt':
      return FileText;
    case 'Företagsjuridik':
      return Users;
    case 'Konsumenträtt':
      return ShoppingBag;
    default:
      return Scale;
  }
};

export const getCategoryColor = (category: string): string => {
  // Use the consistent purple color for all categories
  return '#646cea';
};