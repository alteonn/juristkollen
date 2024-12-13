import { Link } from 'react-router-dom';
import { Scale } from 'lucide-react';

export function FooterLogo() {
  return (
    <Link to="/" className="flex items-center space-x-3 mb-8">
      <div className="bg-primary/10 p-2.5 rounded-2xl">
        <Scale className="h-6 w-6 text-primary" />
      </div>
      <span className="text-xl font-serif font-bold tracking-tight">
        <span className="text-primary">Juristkollen</span>
        <span className="text-accent">.se</span>
      </span>
    </Link>
  );
}