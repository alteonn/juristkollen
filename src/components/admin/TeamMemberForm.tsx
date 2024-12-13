import { useState } from 'react';
import { X, Upload } from 'lucide-react';
import { Button } from '../ui/Button';
import { uploadFile } from '../../lib/uploadFile';

interface TeamMember {
  name: string;
  role: string;
  email: string;
  phone: string;
  photo?: string;
}

interface TeamMemberFormProps {
  member: TeamMember;
  index: number;
  onUpdate: (index: number, field: keyof TeamMember, value: string) => void;
  onRemove: (index: number) => void;
}

export function TeamMemberForm({ member, index, onUpdate, onRemove }: TeamMemberFormProps) {
  const [isUploading, setIsUploading] = useState(false);

  const handlePhotoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;
    
    const file = e.target.files[0];
    setIsUploading(true);

    try {
      const photoUrl = await uploadFile(file, 'team-photos');
      if (photoUrl) {
        onUpdate(index, 'photo', photoUrl);
      }
    } catch (error) {
      console.error('Error uploading team member photo:', error);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="relative p-6 bg-white/50 rounded-xl border border-secondary">
      <button
        type="button"
        onClick={() => onRemove(index)}
        className="absolute top-4 right-4 p-2 hover:bg-red-50 rounded-lg 
                 hover:text-red-600 transition-colors"
      >
        <X className="w-5 h-5" />
      </button>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="block text-sm font-medium">Namn *</label>
          <input
            type="text"
            required
            value={member.name}
            onChange={(e) => onUpdate(index, 'name', e.target.value)}
            className="w-full px-4 py-3 bg-white/50 rounded-xl border border-secondary 
                     focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium">Roll *</label>
          <input
            type="text"
            required
            value={member.role}
            onChange={(e) => onUpdate(index, 'role', e.target.value)}
            className="w-full px-4 py-3 bg-white/50 rounded-xl border border-secondary 
                     focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium">E-post</label>
          <input
            type="email"
            value={member.email}
            onChange={(e) => onUpdate(index, 'email', e.target.value)}
            className="w-full px-4 py-3 bg-white/50 rounded-xl border border-secondary 
                     focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium">Telefon</label>
          <input
            type="tel"
            value={member.phone}
            onChange={(e) => onUpdate(index, 'phone', e.target.value)}
            className="w-full px-4 py-3 bg-white/50 rounded-xl border border-secondary 
                     focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
          />
        </div>

        <div className="space-y-2 md:col-span-2">
          <label className="block text-sm font-medium">Foto</label>
          <div className="flex items-center gap-4">
            {member.photo && (
              <img
                src={member.photo}
                alt={member.name}
                className="w-12 h-12 object-cover rounded-lg"
              />
            )}
            <label className="flex items-center gap-2 px-4 py-3 bg-white/50 rounded-xl border border-secondary 
                            hover:bg-secondary/50 cursor-pointer transition-colors">
              <Upload className="w-5 h-5" />
              <span>{isUploading ? 'Laddar upp...' : 'Ladda upp foto'}</span>
              <input
                type="file"
                accept="image/*"
                onChange={handlePhotoUpload}
                disabled={isUploading}
                className="hidden"
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}