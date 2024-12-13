import { Scale, Shield, Users, Target, Award, HeartHandshake } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { GlassCard } from '../components/ui/GlassCard';
import { Button } from '../components/ui/Button';
import { AboutHero } from '../components/about/AboutHero';
import { AboutValues } from '../components/about/AboutValues';
import { AboutQuality } from '../components/about/AboutQuality';
import { AboutSecurity } from '../components/about/AboutSecurity';
import { AboutContact } from '../components/about/AboutContact';

export function AboutUs() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary via-background to-background">
      <Navbar />
      
      <main>
        <AboutHero />
        <AboutValues />
        <AboutQuality />
        <AboutSecurity />
        <AboutContact />
      </main>

      <Footer />
    </div>
  );
}