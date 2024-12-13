import { lazy, Suspense } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ScrollToTop } from './components/ScrollToTop';
import { LoadingSpinner } from './components/ui/LoadingSpinner';
import { CookieBanner } from './components/CookieBanner';
import { useAuth } from './contexts/AuthContext';

// Core pages
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { AdminDashboard } from './pages/AdminDashboard';

// Lazy loaded pages
const SearchFirms = lazy(() => import('./pages/SearchFirms').then(m => ({ default: m.SearchFirms })));
const SearchLawyers = lazy(() => import('./pages/SearchLawyers').then(m => ({ default: m.SearchLawyers })));
const PartnerDetails = lazy(() => import('./pages/PartnerDetails').then(m => ({ default: m.PartnerDetails })));
const BecomePartner = lazy(() => import('./pages/BecomePartner').then(m => ({ default: m.BecomePartner })));
const GetHelp = lazy(() => import('./pages/GetHelp').then(m => ({ default: m.GetHelp })));
const Glossary = lazy(() => import('./pages/Glossary').then(m => ({ default: m.Glossary })));
const Articles = lazy(() => import('./pages/Articles').then(m => ({ default: m.Articles })));
const ArticleDetail = lazy(() => import('./pages/ArticleDetail').then(m => ({ default: m.ArticleDetail })));
const CustomerService = lazy(() => import('./pages/CustomerService').then(m => ({ default: m.CustomerService })));
const AboutUs = lazy(() => import('./pages/AboutUs').then(m => ({ default: m.AboutUs })));
const Terms = lazy(() => import('./pages/Terms').then(m => ({ default: m.Terms })));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy').then(m => ({ default: m.PrivacyPolicy })));
const Cookies = lazy(() => import('./pages/Cookies').then(m => ({ default: m.Cookies })));
const DataProtectionPolicy = lazy(() => import('./pages/DataProtectionPolicy').then(m => ({ default: m.DataProtectionPolicy })));
const NotariusPublicus = lazy(() => import('./pages/NotariusPublicus').then(m => ({ default: m.NotariusPublicus })));
const CityPage = lazy(() => import('./pages/CityPage').then(m => ({ default: m.CityPage })));

// Legal services pages
const EmploymentLaw = lazy(() => import('./pages/EmploymentLaw').then(m => ({ default: m.EmploymentLaw })));
const AsylumLaw = lazy(() => import('./pages/AsylumLaw').then(m => ({ default: m.AsylumLaw })));
const ContractLaw = lazy(() => import('./pages/ContractLaw').then(m => ({ default: m.ContractLaw })));
const CriminalLaw = lazy(() => import('./pages/CriminalLaw').then(m => ({ default: m.CriminalLaw })));
const FamilyLaw = lazy(() => import('./pages/FamilyLaw').then(m => ({ default: m.FamilyLaw })));
const RealEstateLaw = lazy(() => import('./pages/RealEstateLaw').then(m => ({ default: m.RealEstateLaw })));
const AdministrativeLaw = lazy(() => import('./pages/AdministrativeLaw').then(m => ({ default: m.AdministrativeLaw })));
const ConsumerLaw = lazy(() => import('./pages/ConsumerLaw').then(m => ({ default: m.ConsumerLaw })));
const InsuranceLaw = lazy(() => import('./pages/InsuranceLaw').then(m => ({ default: m.InsuranceLaw })));
const TaxLaw = lazy(() => import('./pages/TaxLaw').then(m => ({ default: m.TaxLaw })));

export default function App() {
  const { user } = useAuth();

  return (
    <Router>
      <ScrollToTop />
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          {/* Core routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={user ? <AdminDashboard /> : <Login />} />
          
          {/* Feature routes */}
          <Route path="/search-firms" element={<SearchFirms />} />
          <Route path="/search-lawyers" element={<SearchLawyers />} />
          <Route path="/partners/:id" element={<PartnerDetails />} />
          <Route path="/become-partner" element={<BecomePartner />} />
          <Route path="/get-help" element={<GetHelp />} />
          <Route path="/ordlista" element={<Glossary />} />
          <Route path="/artiklar" element={<Articles />} />
          <Route path="/artiklar/:slug" element={<ArticleDetail />} />
          <Route path="/kundservice" element={<CustomerService />} />
          <Route path="/om-oss" element={<AboutUs />} />
          <Route path="/villkor" element={<Terms />} />
          <Route path="/integritetspolicy" element={<PrivacyPolicy />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/dataskyddspolicy" element={<DataProtectionPolicy />} />
          <Route path="/notarius-publicus" element={<NotariusPublicus />} />

          {/* Legal services routes */}
          <Route path="/tjanster/arbetsratt" element={<EmploymentLaw />} />
          <Route path="/tjanster/asylratt" element={<AsylumLaw />} />
          <Route path="/tjanster/avtal" element={<ContractLaw />} />
          <Route path="/tjanster/brottmal" element={<CriminalLaw />} />
          <Route path="/tjanster/familjeratt" element={<FamilyLaw />} />
          <Route path="/tjanster/fastighetsratt" element={<RealEstateLaw />} />
          <Route path="/tjanster/forvaltningsratt" element={<AdministrativeLaw />} />
          <Route path="/tjanster/konsumentratt" element={<ConsumerLaw />} />
          <Route path="/tjanster/skadestand" element={<InsuranceLaw />} />
          <Route path="/tjanster/skatt-finans" element={<TaxLaw />} />

          {/* City routes */}
          <Route path="/stad/:citySlug" element={<CityPage />} />
        </Routes>
      </Suspense>
      <CookieBanner />
    </Router>
  );
}