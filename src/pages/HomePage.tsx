import ProductShowcase from '../components/ProductShowcase';
import CompanySection from '../components/CompanySection';
import CommunitySection from '../components/CommunitySection';

interface HomePageProps {
  isWalletConnected: boolean;
  isVerified: boolean; // Ensure this is defined
}

function HomePage({ isWalletConnected, isVerified }: HomePageProps) {
  return (
    <main>
      <ProductShowcase isWalletConnected={isWalletConnected} isVerified={isVerified} /> {/* Pass isVerified */}
      <CompanySection />
      <CommunitySection />
    </main>
  );
}

export default HomePage;