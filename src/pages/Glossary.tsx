import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { GlossaryAlphabet } from '../components/glossary/GlossaryAlphabet';
import { GlossarySection } from '../components/glossary/GlossarySection';
import { GlossarySearch } from '../components/glossary/GlossarySearch';
import { GlossaryTerm } from '../types/glossary';
import { 
  aTerms, bTerms, cTerms, dTerms, eTerms, 
  fTerms, gTerms, hTerms, iTerms, jTerms, 
  kTerms, lTerms, mTerms, nTerms, oTerms,
  pTerms, qTerms, rTerms, sTerms, tTerms,
  uTerms, vTerms, wTerms, xTerms, yTerms,
  zTerms, aaTerms, aeTerms, oeTerms 
} from '../data/glossary';

export function Glossary() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedLetter, setSelectedLetter] = useState<string | null>(
    searchParams.get('letter')
  );
  const [searchTerm, setSearchTerm] = useState(
    searchParams.get('search') || ''
  );

  const allTerms = [
    ...aTerms, ...bTerms, ...cTerms, ...dTerms, ...eTerms, 
    ...fTerms, ...gTerms, ...hTerms, ...iTerms, ...jTerms, 
    ...kTerms, ...lTerms, ...mTerms, ...nTerms, ...oTerms,
    ...pTerms, ...qTerms, ...rTerms, ...sTerms, ...tTerms,
    ...uTerms, ...vTerms, ...wTerms, ...xTerms, ...yTerms,
    ...zTerms, ...aaTerms, ...aeTerms, ...oeTerms
  ];

  const availableLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖ'.split('');

  // Update URL when filters change
  useEffect(() => {
    const params = new URLSearchParams();
    if (selectedLetter) params.set('letter', selectedLetter);
    if (searchTerm) params.set('search', searchTerm);
    setSearchParams(params, { replace: true });
  }, [selectedLetter, searchTerm, setSearchParams]);

  const filteredTerms = allTerms.filter(term => {
    const matchesSearch = searchTerm === '' || 
      term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      term.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesLetter = !selectedLetter || term.letter === selectedLetter;

    return matchesSearch && matchesLetter;
  });

  const hasTermsForLetter = (letter: string) => {
    return allTerms.some(term => term.letter === letter);
  };

  const handleLetterSelect = (letter: string | null) => {
    setSelectedLetter(letter);
    if (!letter) {
      searchParams.delete('letter');
      setSearchParams(searchParams);
    }
  };

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    if (!value) {
      searchParams.delete('search');
      setSearchParams(searchParams);
    }
  };

  const groupedTerms = filteredTerms.reduce((acc, term) => {
    if (!acc[term.letter]) {
      acc[term.letter] = [];
    }
    acc[term.letter].push(term);
    return acc;
  }, {} as Record<string, GlossaryTerm[]>);

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary via-background to-background">
      <Navbar />
      
      <main className="py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Juridisk ordlista
            </h1>
            <p className="text-xl text-muted-foreground">
              Här hittar du förklaringar till vanliga juridiska termer och begrepp
            </p>
          </div>

          <GlossarySearch 
            value={searchTerm}
            onChange={handleSearchChange}
          />

          <GlossaryAlphabet 
            letters={availableLetters}
            selectedLetter={selectedLetter}
            onLetterSelect={handleLetterSelect}
            hasTerms={hasTermsForLetter}
          />

          <div className="max-w-3xl mx-auto mt-16">
            {Object.entries(groupedTerms)
              .sort(([a], [b]) => a.localeCompare(b, 'sv'))
              .map(([letter, terms]) => (
                <GlossarySection 
                  key={letter} 
                  letter={letter} 
                  terms={terms} 
                />
              ))}

            {filteredTerms.length === 0 && (
              <div className="text-center py-12 text-muted-foreground">
                Inga termer hittades som matchar din sökning
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}