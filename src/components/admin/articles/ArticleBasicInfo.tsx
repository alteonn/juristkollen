interface ArticleBasicInfoProps {
  formData: {
    title: string;
    category: string;
    excerpt: string;
  };
  onChange: (data: any) => void;
}

export function ArticleBasicInfo({ formData, onChange }: ArticleBasicInfoProps) {
  const categories = [
    'Avtalsrätt',
    'Arbetsrätt',
    'Familjerätt',
    'Brottmål',
    'Fastighetsrätt',
    'Skatterätt',
    'Företagsjuridik',
    'Konsumenträtt'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    onChange({ ...formData, [name]: value });
  };

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="block text-sm font-medium">Titel *</label>
          <input
            type="text"
            name="title"
            required
            value={formData.title}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-white/50 rounded-xl border border-secondary 
                     focus:outline-none focus:ring-2 focus:ring-[#646cea]/20 transition-all"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium">Kategori *</label>
          <select
            name="category"
            required
            value={formData.category}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-white/50 rounded-xl border border-secondary 
                     focus:outline-none focus:ring-2 focus:ring-[#646cea]/20 transition-all"
          >
            <option value="">Välj kategori</option>
            {categories.map((category) => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium">Utdrag *</label>
        <textarea
          name="excerpt"
          required
          value={formData.excerpt}
          onChange={handleInputChange}
          rows={2}
          className="w-full px-4 py-3 bg-white/50 rounded-xl border border-secondary 
                   focus:outline-none focus:ring-2 focus:ring-[#646cea]/20 transition-all"
        />
      </div>
    </div>
  );
}