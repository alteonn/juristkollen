import { useState, useEffect } from 'react';
import { Menu, X, Scale, LogIn, HelpCircle, Search, Users, LogOut, LayoutDashboard, Home, BookOpen, Building2 } from 'lucide-react';
import { Button } from './ui/Button';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate, useLocation, Link } from 'react-router-dom';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleAdminClick = () => {
    navigate('/admin');
  };

  const handleLogoutClick = async () => {
    try {
      await signOut();
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const handleBecomePartnerClick = () => {
    navigate('/become-partner');
  };

  const handleGetHelpClick = () => {
    navigate('/get-help');
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
      isScrolled || isMenuOpen || location.pathname !== '/' 
        ? 'bg-white/95 backdrop-blur-xl shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-[1600px] mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <div className="bg-primary/10 p-2.5 rounded-2xl">
                <Scale className="h-7 w-7 text-primary" />
              </div>
            </Link>

            <div className="hidden lg:flex items-center ml-16 space-x-16">
              <Link 
                to="/"
                className="text-foreground/90 hover:text-primary transition-colors font-medium tracking-wide text-[15px] flex items-center gap-2"
              >
                <Home className="w-4 h-4" />
                Hem
              </Link>
              <Link 
                to="/search-lawyers"
                className="text-foreground/90 hover:text-primary transition-colors font-medium tracking-wide text-[15px] flex items-center gap-2"
              >
                <Users className="w-4 h-4" />
                Sök jurist
              </Link>
              <Link 
                to="/search-firms"
                className="text-foreground/90 hover:text-primary transition-colors font-medium tracking-wide text-[15px] flex items-center gap-2"
              >
                <Search className="w-4 h-4" />
                Sök byrå
              </Link>
              <Link 
                to="/artiklar"
                className="text-foreground/90 hover:text-primary transition-colors font-medium tracking-wide text-[15px] flex items-center gap-2"
              >
                <BookOpen className="w-4 h-4" />
                Artiklar
              </Link>
              <Link 
                to="/ordlista"
                className="text-foreground/90 hover:text-primary transition-colors font-medium tracking-wide text-[15px] flex items-center gap-2"
              >
                <BookOpen className="w-4 h-4" />
                Ordlista
              </Link>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <Button 
              variant="secondary" 
              className="flex items-center gap-2 px-5 py-1.5 text-sm"
              onClick={handleGetHelpClick}
            >
              <HelpCircle className="w-4 h-4" />
              Få hjälp
            </Button>
            <Button 
              variant="secondary" 
              className="flex items-center gap-2 px-5 py-1.5 text-sm"
              onClick={handleBecomePartnerClick}
            >
              <Building2 className="w-4 h-4" />
              Bli partner
            </Button>
            {user ? (
              <>
                <Button 
                  variant="secondary" 
                  className="flex items-center gap-2 px-5 py-1.5 text-sm"
                  onClick={handleAdminClick}
                >
                  <LayoutDashboard className="w-4 h-4" />
                  Admin
                </Button>
                <Button 
                  variant="primary" 
                  className="flex items-center gap-2 px-5 py-1.5 text-sm ml-2"
                  onClick={handleLogoutClick}
                >
                  <LogOut className="w-4 h-4" />
                  Logga ut
                </Button>
              </>
            ) : (
              <Button 
                variant="primary" 
                className="flex items-center gap-2 px-5 py-1.5 text-sm ml-2"
                onClick={handleLoginClick}
              >
                <LogIn className="w-4 h-4" />
                Logga in
              </Button>
            )}
          </div>

          <button 
            className="lg:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden mt-4 p-6 rounded-2xl bg-white shadow-xl border border-secondary animate-fadeIn">
            <div className="flex flex-col gap-4">
              <Link 
                to="/"
                className="flex items-center gap-2 py-3 text-foreground/90 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <Home className="w-4 h-4" />
                Hem
              </Link>
              <Link 
                to="/search-lawyers"
                className="flex items-center gap-2 py-3 text-foreground/90 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <Users className="w-4 h-4" />
                Sök jurist
              </Link>
              <Link 
                to="/search-firms"
                className="flex items-center gap-2 py-3 text-foreground/90 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <Search className="w-4 h-4" />
                Sök byrå
              </Link>
              <Link 
                to="/artiklar"
                className="flex items-center gap-2 py-3 text-foreground/90 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <BookOpen className="w-4 h-4" />
                Artiklar
              </Link>
              <Link 
                to="/ordlista"
                className="flex items-center gap-2 py-3 text-foreground/90 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <BookOpen className="w-4 h-4" />
                Ordlista
              </Link>
            </div>

            <div className="flex flex-col gap-3 pt-6 mt-6 border-t border-secondary">
              <Button 
                variant="secondary" 
                className="w-full flex items-center justify-center gap-2"
                onClick={() => {
                  handleGetHelpClick();
                  setIsMenuOpen(false);
                }}
              >
                <HelpCircle className="w-4 h-4" />
                Få hjälp
              </Button>
              <Button 
                variant="secondary" 
                className="w-full flex items-center justify-center gap-2"
                onClick={() => {
                  handleBecomePartnerClick();
                  setIsMenuOpen(false);
                }}
              >
                <Building2 className="w-4 h-4" />
                Bli partner
              </Button>
              {user ? (
                <>
                  <Button 
                    variant="secondary" 
                    className="w-full flex items-center justify-center gap-2"
                    onClick={() => {
                      handleAdminClick();
                      setIsMenuOpen(false);
                    }}
                  >
                    <LayoutDashboard className="w-4 h-4" />
                    Admin
                  </Button>
                  <Button 
                    variant="primary" 
                    className="w-full flex items-center justify-center gap-2"
                    onClick={() => {
                      handleLogoutClick();
                      setIsMenuOpen(false);
                    }}
                  >
                    <LogOut className="w-4 h-4" />
                    Logga ut
                  </Button>
                </>
              ) : (
                <Button 
                  variant="primary" 
                  className="w-full flex items-center justify-center gap-2"
                  onClick={() => {
                    handleLoginClick();
                    setIsMenuOpen(false);
                  }}
                >
                  <LogIn className="w-4 h-4" />
                  Logga in
                </Button>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}