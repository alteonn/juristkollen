import { useState, useEffect } from 'react';
import { Cookie, X } from 'lucide-react';
import { Button } from './ui/Button';

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAcceptedCookies = localStorage.getItem('cookiesAccepted');
    if (!hasAcceptedCookies) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookiesAccepted', 'false');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-secondary z-50 p-4 md:p-6">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="bg-[#646cea]/10 p-3 rounded-xl shrink-0">
            <Cookie className="w-6 h-6 text-[#646cea]" />
          </div>

          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-2">Vi använder cookies</h3>
            <p className="text-muted-foreground text-sm md:text-base">
              Vi använder cookies för att förbättra din upplevelse på vår webbplats. 
              Genom att fortsätta använda webbplatsen godkänner du användningen av cookies.
            </p>
          </div>

          <div className="flex items-center gap-4 w-full md:w-auto">
            <Button
              variant="secondary"
              onClick={handleDecline}
              className="flex-1 md:flex-none"
            >
              Avböj
            </Button>
            <Button
              variant="primary"
              onClick={handleAccept}
              className="flex-1 md:flex-none"
            >
              Godkänn
            </Button>
          </div>

          <button
            onClick={handleDecline}
            className="absolute top-4 right-4 md:static p-2 hover:bg-secondary/50 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}