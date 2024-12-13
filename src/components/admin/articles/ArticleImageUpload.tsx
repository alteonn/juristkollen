import { ArrowLeft, Image as ImageIcon } from 'lucide-react';
import { useState } from 'react';
import { supabase } from '../../../lib/supabase';

interface ArticleImageUploadProps {
  imageUrl: string;
  onImageChange: (url: string) => void;
}

export function ArticleImageUpload({ imageUrl, onImageChange }: ArticleImageUploadProps) {
  const [isUploading, setIsUploading] = useState(false);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;
    
    const file = e.target.files[0];
    setIsUploading(true);

    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}.${fileExt}`;
      
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('article-images')
        .upload(fileName, file);

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from('article-images')
        .getPublicUrl(fileName);

      onImageChange(publicUrl);
    } catch (error) {
      console.error('Error uploading image:', error);
      alert('Failed to upload image. Please try again.');
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium">Omslagsbild (valfritt)</label>
      <div className="flex items-center gap-4">
        {imageUrl && (
          <div className="relative w-32 h-32 rounded-lg overflow-hidden">
            <img
              src={imageUrl}
              alt="Article cover"
              className="w-full h-full object-cover"
            />
            <button
              type="button"
              onClick={() => onImageChange('')}
              className="absolute top-2 right-2 p-1 bg-white/80 rounded-full 
                       hover:bg-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
          </div>
        )}
        <label className="flex items-center gap-2 px-4 py-3 bg-white/50 rounded-xl 
                       border border-secondary hover:bg-secondary/20 cursor-pointer 
                       transition-colors">
          {isUploading ? (
            <span>Laddar upp...</span>
          ) : (
            <>
              <ImageIcon className="w-5 h-5" />
              <span>Välj bild</span>
            </>
          )}
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            disabled={isUploading}
            className="hidden"
          />
        </label>
      </div>
    </div>
  );
}