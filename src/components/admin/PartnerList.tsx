import { useState, useEffect } from 'react';
import { Edit2, Trash2, Search } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';
import { Button } from '../ui/Button';
import { supabase } from '../../lib/supabase';
import { PartnerForm } from './PartnerForm';

export function PartnerList() {
  const [partners, setPartners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [editingPartner, setEditingPartner] = useState(null);

  useEffect(() => {
    fetchPartners();
  }, []);

  const fetchPartners = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('partners')
        .select('*')
        .order('name');

      if (error) {
        console.error('Error details:', error);
        throw error;
      }
      
      console.log('Fetched partners:', data);
      setPartners(data || []);
    } catch (error) {
      console.error('Error fetching partners:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Är du säker på att du vill ta bort denna partner?')) return;

    try {
      const { error } = await supabase
        .from('partners')
        .delete()
        .eq('id', id);

      if (error) throw error;
      fetchPartners();
    } catch (error) {
      console.error('Error deleting partner:', error);
    }
  };

  const handleEdit = (partner: any) => {
    setEditingPartner(partner);
  };

  const handleEditComplete = () => {
    setEditingPartner(null);
    fetchPartners();
  };

  const filteredPartners = partners.filter((partner: any) =>
    partner.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    partner.city.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (editingPartner) {
    return (
      <PartnerForm 
        partner={editingPartner} 
        onCancel={() => setEditingPartner(null)}
        onComplete={handleEditComplete}
      />
    );
  }

  if (loading) {
    return (
      <GlassCard>
        <div className="text-center py-8 text-muted-foreground">
          Laddar partners...
        </div>
      </GlassCard>
    );
  }

  return (
    <div className="space-y-6">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        <input
          type="text"
          placeholder="Sök på namn eller stad..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-12 pr-4 py-3 bg-white rounded-xl border border-secondary 
                   focus:outline-none focus:ring-2 focus:ring-[#646cea]/20 transition-all"
        />
      </div>

      <div className="grid gap-4">
        {filteredPartners.map((partner: any) => (
          <GlassCard key={partner.id} className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {partner.logo && (
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="w-12 h-12 object-contain rounded-lg"
                />
              )}
              <div>
                <h3 className="text-lg font-semibold">{partner.name}</h3>
                <p className="text-muted-foreground">{partner.city}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Button 
                variant="secondary" 
                className="p-2"
                onClick={() => handleEdit(partner)}
              >
                <Edit2 className="w-5 h-5" />
              </Button>
              <Button 
                variant="secondary" 
                className="p-2 hover:bg-red-50 hover:text-red-600"
                onClick={() => handleDelete(partner.id)}
              >
                <Trash2 className="w-5 h-5" />
              </Button>
            </div>
          </GlassCard>
        ))}

        {filteredPartners.length === 0 && (
          <div className="text-center py-8 text-muted-foreground">
            Inga partners hittades
          </div>
        )}
      </div>
    </div>
  );
}