import { Mail, MapPin } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';

export function AboutContact() {
  return (
    <section className="py-24 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <GlassCard>
            <h2 className="text-3xl font-bold mb-8">Kontakta oss</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-3 rounded-xl">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Besöksadress</h3>
                    <p className="text-muted-foreground">
                      Stjärntorget 2<br />
                      169 79 Solna
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-3 rounded-xl">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">E-post</h3>
                    <a 
                      href="mailto:info@juristkollen.se"
                      className="text-primary hover:underline"
                    >
                      info@juristkollen.se
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}