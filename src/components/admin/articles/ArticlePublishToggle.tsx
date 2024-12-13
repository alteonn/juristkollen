interface ArticlePublishToggleProps {
  published: boolean;
  onChange: (published: boolean) => void;
}

export function ArticlePublishToggle({ published, onChange }: ArticlePublishToggleProps) {
  return (
    <div className="flex items-center gap-2">
      <input
        type="checkbox"
        id="published"
        checked={published}
        onChange={(e) => onChange(e.target.checked)}
        className="rounded border-secondary focus:ring-[#646cea]"
      />
      <label htmlFor="published" className="text-sm font-medium">
        Publicera artikel
      </label>
    </div>
  );
}