import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeatureBar from './components/FeatureBar';
import CategoryExplorer from './components/CategoryExplorer';
import BannerCTA from './components/BannerCTA';
import ImpactSection from './components/ImpactSection';
import Footer from './components/Footer';
import DetailModal from './components/DetailModal';

export default function App() {
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
      />

      {/* Main Content Areas */}
      <main className="flex-1">
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
          onExploreNow={() => handleOpenSearch('')}
        />

        {/* Huánuco Impact & Values Section */}
        <ImpactSection />
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
