interface GlossaryAlphabetProps {
  letters: string[];
  selectedLetter: string | null;
  onLetterSelect: (letter: string | null) => void;
  hasTerms: (letter: string) => boolean;
}

export function GlossaryAlphabet({ letters, selectedLetter, onLetterSelect, hasTerms }: GlossaryAlphabetProps) {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex flex-wrap justify-center gap-2">
        {letters.map(letter => {
          const isActive = hasTerms(letter);
          const isSelected = selectedLetter === letter;

          return (
            <button
              key={letter}
              onClick={() => onLetterSelect(isSelected ? null : letter)}
              disabled={!isActive}
              className={`
                w-10 h-10 rounded-xl font-medium transition-all
                ${isActive 
                  ? isSelected
                    ? 'bg-[#646cea] text-white shadow-lg'
                    : 'bg-white hover:bg-[#646cea]/10'
                  : 'bg-secondary/50 text-muted-foreground cursor-not-allowed opacity-40'
                }
              `}
            >
              {letter}
            </button>
          );
        })}
      </div>
    </div>
  );
}