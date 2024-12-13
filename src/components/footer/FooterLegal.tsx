import { Link } from 'react-router-dom';

export function FooterLegal() {
  return (
    <div className="border-t border-secondary pt-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Juristkollen.se. Alla rättigheter förbehållna.</p>
        <div className="flex gap-6">
          <Link to="/integritetspolicy" className="hover:text-primary transition-colors">
            Integritetspolicy
          </Link>
          <Link to="/dataskyddspolicy" className="hover:text-primary transition-colors">
            Dataskyddspolicy
          </Link>
          <Link to="/cookies" className="hover:text-primary transition-colors">
            Cookies
          </Link>
          <Link to="/villkor" className="hover:text-primary transition-colors">
            Villkor
          </Link>
        </div>
      </div>
    </div>
  );
}