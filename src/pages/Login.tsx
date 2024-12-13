import { useState } from 'react';
import { Mail, Lock, ArrowRight, Scale, AlertCircle, ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { GlassCard } from '../components/ui/GlassCard';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const { error: signInError } = await signIn(email, password);
      
      if (signInError) {
        setError('Felaktiga inloggningsuppgifter. Försök igen.');
      } else {
        navigate('/admin');
      }
    } catch (err) {
      console.error('Login error:', err);
      setError('Ett fel uppstod. Försök igen senare.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary via-background to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80')] opacity-[0.03]"></div>

      <div className="container relative py-20">
        <Button
          variant="secondary"
          className="mb-12 flex items-center gap-2"
          onClick={() => navigate('/')}
        >
          <ArrowLeft className="w-4 h-4" />
          Tillbaka till startsidan
        </Button>

        <div className="max-w-md mx-auto text-center mb-12">
          <div 
            className="inline-flex items-center space-x-3 mb-8 hover:opacity-80 transition-opacity cursor-pointer"
            onClick={() => navigate('/')}
          >
            <div className="bg-primary/10 p-2.5 rounded-2xl">
              <Scale className="h-7 w-7 text-primary" />
            </div>
            <span className="text-2xl font-serif font-bold tracking-tight">
              <span className="text-primary">Juristkollen</span>
              <span className="text-accent">.se</span>
            </span>
          </div>
          <h1 className="text-4xl font-bold mb-4">
            Välkommen tillbaka
          </h1>
          <p className="text-lg text-muted-foreground">
            Logga in för att hantera dina juridiska ärenden
          </p>
        </div>

        <GlassCard className="max-w-md mx-auto">
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-100 rounded-xl flex items-center gap-3 text-red-600">
              <AlertCircle className="w-5 h-5" />
              <p className="text-sm">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium">
                E-postadress
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-white/50 rounded-xl border border-secondary 
                           focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  placeholder="namn@exempel.se"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-medium">
                Lösenord
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-white/50 rounded-xl border border-secondary 
                           focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <Button 
              type="submit" 
              variant="primary" 
              className="w-full flex items-center justify-center gap-2"
              disabled={isLoading}
            >
              {isLoading ? 'Loggar in...' : 'Logga in'}
              {!isLoading && <ArrowRight className="w-5 h-5" />}
            </Button>
          </form>
        </GlassCard>
      </div>
    </div>
  );
}