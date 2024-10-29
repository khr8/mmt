import React from 'react';
import Header from './components/Header';
import NavBar from './components/NavBar';
import SearchForm from './components/SearchForm';
import LuxeSection from './components/LuxeSection';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <NavBar />
      <main className="px-4">
        <SearchForm />
        <LuxeSection />
      </main>
    </div>
  );
}

export default App;