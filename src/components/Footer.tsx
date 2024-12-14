import { Link } from 'react-router-dom';
import { Scale } from 'lucide-react';
import { legalServices } from '../routes/legalServices';
import { getAllCities } from '../config/cities';

export function Footer() {
  const cities = getAllCities();
  const other = [
    { name: 'Kundservice', href: '/kundservice' },
    { name: 'Sök byrå', href: '/search-firms' },
    { name: 'Sök jurist', href: '/search-lawyers' },
    { name: 'Bli Partner', href: '/become-partner' },
    { name: 'Få hjälp', href: '/get-help' },
    { name: 'Om oss', href: '/om-oss' },
    { name: 'Ordlista', href: '/ordlista' }
  ];

  return (
    <footer className="bg-gradient-to-b from-background to-secondary/30">
      <div className="container py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          {/* Logo and Branding */}
          <div className="md:col-span-12 mb-8">
            <Link 
              to="/" 
              className="inline-flex items-center gap-3 hover:opacity-80 transition-opacity"
            >
              <div className="bg-primary/10 p-2.5 rounded-2xl">
                <Scale className="h-7 w-7 text-primary" />
              </div>
              <span className="text-2xl font-serif font-bold tracking-tight">
                <span className="text-primary">Juristkollen</span>
                <span className="text-accent">.se</span>
              </span>
            </Link>
          </div>

          {/* Main Navigation Sections */}
          <div className="md:col-span-4">
            <h3 className="text-lg font-semibold mb-6">Rättsområden</h3>
            <div className="grid grid-cols-1 gap-3">
              {legalServices.map((service, index) => (
                <Link
                  key={index}
                  to={service.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="md:col-span-4">
            <h3 className="text-lg font-semibold mb-6">Populära städer</h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-3">
              {cities.map((city, index) => (
                <Link
                  key={index}
                  to={city.path}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {city.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="md:col-span-4">
            <h3 className="text-lg font-semibold mb-6">Övrigt</h3>
            <div className="grid grid-cols-1 gap-3">
              {other.map((item, index) => (
                <Link
                  key={index}
                  to={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-secondary/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 text-sm text-muted-foreground">
              <p>© {new Date().getFullYear()} Juristkollen.se</p>
              <p>Utvecklad av <a href="https://almfors.se" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Almfors</a></p>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/integritetspolicy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Integritetspolicy
              </Link>
              <Link to="/dataskyddspolicy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Dataskyddspolicy
              </Link>
              <Link to="/cookies" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Cookies
              </Link>
              <Link to="/villkor" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Villkor
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}