import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Reviews from "./components/Reviews";
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Reviews />  {/* New Section Added */}
      <Footer />
    </div>
  );
}

export default App;

