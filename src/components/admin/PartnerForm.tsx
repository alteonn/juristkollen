import { useState, useEffect } from 'react';
import { ArrowLeft, Upload, Plus, X } from 'lucide-react';
import { Button } from '../ui/Button';
import { GlassCard } from '../ui/GlassCard';
import { supabase } from '../../lib/supabase';
import { uploadFile } from '../../lib/uploadFile';
import { TeamMemberForm } from './TeamMemberForm';

interface TeamMember {
  name: string;
  role: string;
  email: string;
  phone: string;
  photo?: string;
}

interface PartnerFormProps {
  partner?: any;
  onCancel: () => void;
  onComplete?: () => void;
}

export function PartnerForm({ partner, onCancel, onComplete }: PartnerFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    website: '',
    city: '',
    description: '',
    specialties: [] as string[],
    languages: [] as string[],
    logo: '',
    featured: false,
    featured_order: 0
  });

  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    if (partner) {
      setFormData({
        name: partner.name || '',
        email: partner.email || '',
        phone: partner.phone || '',
        website: partner.website || '',
        city: partner.city || '',
        description: partner.description || '',
        specialties: partner.specialties || [],
        languages: partner.languages || [],
        logo: partner.logo || '',
        featured: partner.featured || false,
        featured_order: partner.featured_order || 0
      });
      setTeamMembers(partner.team_members || []);
    }
  }, [partner]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleArrayInputChange = (e: React.ChangeEvent<HTMLInputElement>, field: 'specialties' | 'languages') => {
    const values = e.target.value.split(',').map(v => v.trim());
    setFormData(prev => ({ ...prev, [field]: values }));
  };

  const handleLogoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;
    
    const file = e.target.files[0];
    setIsUploading(true);

    try {
      const logoUrl = await uploadFile(file, 'partner-logos');
      if (logoUrl) {
        setFormData(prev => ({ ...prev, logo: logoUrl }));
      }
    } catch (error) {
      console.error('Error uploading logo:', error);
    } finally {
      setIsUploading(false);
    }
  };

  const addTeamMember = () => {
    setTeamMembers(prev => [...prev, {
      name: '',
      role: '',
      email: '',
      phone: '',
    }]);
  };

  const removeTeamMember = (index: number) => {
    setTeamMembers(prev => prev.filter((_, i) => i !== index));
  };

  const updateTeamMember = (index: number, field: keyof TeamMember, value: string) => {
    setTeamMembers(prev => prev.map((member, i) => 
      i === index ? { ...member, [field]: value } : member
    ));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const partnerData = {
        ...formData,
        team_members: teamMembers,
        featured: formData.featured,
        featured_order: formData.featured ? formData.featured_order : null
      };

      if (partner) {
        const { error } = await supabase
          .from('partners')
          .update(partnerData)
          .eq('id', partner.id);

        if (error) throw error;
      } else {
        const { error } = await supabase
          .from('partners')
          .insert([partnerData]);

        if (error) throw error;
      }
      
      onComplete?.();
      onCancel();
    } catch (error) {
      console.error('Error saving partner:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <GlassCard>
      <div className="flex items-center gap-4 mb-8">
        <Button
          variant="secondary"
          className="p-2"
          onClick={onCancel}
        >
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <h2 className="text-2xl font-semibold">
          {partner ? 'Redigera partner' : 'Lägg till ny partner'}
        </h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium">Namn *</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-white/50 rounded-xl border border-secondary 
                       focus:outline-none focus:ring-2 focus:ring-[#646cea]/20 transition-all"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium">E-post *</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-white/50 rounded-xl border border-secondary 
                       focus:outline-none focus:ring-2 focus:ring-[#646cea]/20 transition-all"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium">Telefon *</label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-white/50 rounded-xl border border-secondary 
                       focus:outline-none focus:ring-2 focus:ring-[#646cea]/20 transition-all"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium">Hemsida</label>
            <input
              type="url"
              name="website"
              value={formData.website}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-white/50 rounded-xl border border-secondary 
                       focus:outline-none focus:ring-2 focus:ring-[#646cea]/20 transition-all"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium">Stad *</label>
            <input
              type="text"
              name="city"
              required
              value={formData.city}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-white/50 rounded-xl border border-secondary 
                       focus:outline-none focus:ring-2 focus:ring-[#646cea]/20 transition-all"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium">Logotyp</label>
            <div className="flex items-center gap-4">
              {formData.logo && (
                <img
                  src={formData.logo}
                  alt="Partner logo"
                  className="w-12 h-12 object-contain rounded-lg"
                />
              )}
              <label className="flex items-center gap-2 px-4 py-3 bg-white/50 rounded-xl border border-secondary 
                              hover:bg-secondary/50 cursor-pointer transition-colors">
                <Upload className="w-5 h-5" />
                <span>{isUploading ? 'Laddar upp...' : 'Ladda upp logotyp'}</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleLogoUpload}
                  disabled={isUploading}
                  className="hidden"
                />
              </label>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium">Beskrivning *</label>
          <textarea
            name="description"
            required
            value={formData.description}
            onChange={handleInputChange}
            rows={4}
            className="w-full px-4 py-3 bg-white/50 rounded-xl border border-secondary 
                     focus:outline-none focus:ring-2 focus:ring-[#646cea]/20 transition-all"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium">Specialområden *</label>
            <input
              type="text"
              required
              value={formData.specialties.join(', ')}
              onChange={(e) => handleArrayInputChange(e, 'specialties')}
              placeholder="Separera med kommatecken"
              className="w-full px-4 py-3 bg-white/50 rounded-xl border border-secondary 
                       focus:outline-none focus:ring-2 focus:ring-[#646cea]/20 transition-all"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium">Språk *</label>
            <input
              type="text"
              required
              value={formData.languages.join(', ')}
              onChange={(e) => handleArrayInputChange(e, 'languages')}
              placeholder="Separera med kommatecken"
              className="w-full px-4 py-3 bg-white/50 rounded-xl border border-secondary 
                       focus:outline-none focus:ring-2 focus:ring-[#646cea]/20 transition-all"
            />
          </div>
        </div>

        <div className="space-y-4 p-6 bg-secondary/20 rounded-xl">
          <h3 className="font-semibold">Visa på startsidan</h3>
          <div className="space-y-4">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={formData.featured}
                onChange={(e) => setFormData(prev => ({ 
                  ...prev, 
                  featured: e.target.checked,
                  featured_order: e.target.checked ? prev.featured_order || 1 : 0
                }))}
                className="rounded border-secondary focus:ring-[#646cea]"
              />
              <span className="text-sm">Visa denna partner på startsidan</span>
            </label>

            {formData.featured && (
              <div className="space-y-2">
                <label className="block text-sm font-medium">
                  Ordning på startsidan (1-6)
                </label>
                <input
                  type="number"
                  min="1"
                  max="6"
                  value={formData.featured_order || ''}
                  onChange={(e) => setFormData(prev => ({ 
                    ...prev, 
                    featured_order: parseInt(e.target.value) || 0
                  }))}
                  className="w-24 px-4 py-3 bg-white/50 rounded-xl border border-secondary 
                           focus:outline-none focus:ring-2 focus:ring-[#646cea]/20 transition-all"
                />
                <p className="text-sm text-muted-foreground">
                  Position 1-6 där 1 visas först. Max 6 partners kan visas på startsidan.
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Teammedlemmar</h3>
            <Button
              type="button"
              variant="secondary"
              onClick={addTeamMember}
              className="flex items-center gap-2"
            >
              <Plus className="w-5 h-5" />
              Lägg till medlem
            </Button>
          </div>

          <div className="space-y-4">
            {teamMembers.map((member, index) => (
              <TeamMemberForm
                key={index}
                member={member}
                index={index}
                onUpdate={updateTeamMember}
                onRemove={removeTeamMember}
              />
            ))}
          </div>
        </div>

        <div className="flex items-center justify-end gap-4">
          <Button
            type="button"
            variant="secondary"
            onClick={onCancel}
          >
            Avbryt
          </Button>
          <Button
            type="submit"
            variant="primary"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sparar...' : (partner ? 'Spara ändringar' : 'Spara partner')}
          </Button>
        </div>
      </form>
    </GlassCard>
  );
}