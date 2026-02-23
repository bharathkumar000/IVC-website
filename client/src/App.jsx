import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Domains from './pages/Domains';
import Projects from './pages/Projects';
import Events from './pages/Events';
import Team from './pages/Team';
import Join from './pages/Join';
import Achievements from './pages/Achievements';

import InteractiveBackground from './components/InteractiveBackground';
import SplashScreen from './components/SplashScreen';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <Router>
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
      <div className="min-h-screen bg-transparent dark:bg-transparent text-ivc-text font-sans selection:bg-ivc-primary selection:text-white flex flex-col relative">
        <InteractiveBackground />
        <Navbar showSplash={showSplash} />
        <main className="flex-grow relative z-10">
          <section id="home" className="scroll-mt-20"><Home showSplash={showSplash} /></section>
          <section id="about" className="scroll-mt-20"><About /></section>
          <section id="domains" className="scroll-mt-20"><Domains /></section>
          <section id="projects" className="scroll-mt-20"><Projects /></section>
          <section id="events" className="scroll-mt-20"><Events /></section>
          <section id="achievements" className="scroll-mt-20"><Achievements /></section>
          <section id="team" className="scroll-mt-20"><Team /></section>
          <section id="join" className="scroll-mt-20"><Join /></section>
        </main>

        <footer className="py-12 text-center text-gray-600 text-sm border-t border-white/5 bg-black backdrop-blur-xl relative z-20">
          &copy; {new Date().getFullYear()} IVC - Innovation & Value Creation Club. All rights reserved.
        </footer>
      </div>
    </Router>
  );
}

export default App;
