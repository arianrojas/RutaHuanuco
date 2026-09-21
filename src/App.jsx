import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeatureBar from './components/FeatureBar';
import CategoryExplorer from './components/CategoryExplorer';
import BannerCTA from './components/BannerCTA';
import MypesSection from './components/MypesSection';
import ImpactSection from './components/ImpactSection';
import Footer from './components/Footer';
import DetailModal from './components/DetailModal';

export default function App() {
  const [activeView, setActiveView] = useState('home'); // 'home' | 'mypes'

  const [modalState, setModalState] = useState({
    isOpen: false,
    type: null, // 'search' | 'auth'
    data: null
  });

  const handleOpenSearch = (query = '') => {
    setModalState({
      isOpen: true,
      type: 'search',
      data: { searchQuery: query }
    });
  };

  const handleSelectCategory = (categoryId) => {
    if (categoryId === 'mypes') {
      setActiveView('mypes');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    setModalState({
      isOpen: true,
      type: 'search',
      data: { category: categoryId }
    });
  };

  const handleOpenAuth = (authType = 'login') => {
    setModalState({
      isOpen: true,
      type: 'auth',
      data: { authType }
    });
  };

  const handleCloseModal = () => {
    setModalState({ isOpen: false, type: null, data: null });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans selection:bg-emerald-600 selection:text-white">
      
      {/* Navigation Bar */}
      <Navbar 
        onOpenSearch={() => handleOpenSearch('')}
        onOpenAuth={handleOpenAuth}
        activeView={activeView}
        onNavigateView={(view) => setActiveView(view)}
      />

      {/* Main Content Areas */}
      <main className="flex-1">
        {activeView === 'home' ? (
          <>
            {/* Hero Banner Section */}
            <HeroSection 
              onSearch={(query) => handleOpenSearch(query)}
              onSelectCategory={handleSelectCategory}
            />

            {/* 4 Feature Highlights Bar */}
            <FeatureBar />

            {/* Category Explorer Grid */}
            <CategoryExplorer 
              onSelectCategory={handleSelectCategory}
              onOpenAllCategories={() => handleOpenSearch('')}
            />

            {/* Emerald Banner CTA with Local Artisan & Stats */}
            <BannerCTA 
              onExploreNow={() => {
                setActiveView('mypes');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            {/* Huánuco Impact & Values Section */}
            <ImpactSection />
          </>
        ) : (
          /* Dedicated Standalone MYPES Page View */
          <MypesSection 
            onBackToHome={() => {
              setActiveView('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }} 
          />
        )}
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modal (Search, Categories, Auth) */}
      {modalState.isOpen && (
        <DetailModal
          type={modalState.type}
          data={modalState.data}
          onClose={handleCloseModal}
          onSelectCategory={handleSelectCategory}
        />
      )}

    </div>
  );
}
