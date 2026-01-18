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

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-ivc-bg text-white font-sans selection:bg-ivc-primary selection:text-white flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/domains" element={<Domains />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/events" element={<Events />} />
            <Route path="/team" element={<Team />} />
            <Route path="/join" element={<Join />} />
            <Route path="/achievements" element={<Achievements />} />
          </Routes>
        </main>

        <footer className="py-8 text-center text-gray-500 text-sm border-t border-white/10 bg-black/20 backdrop-blur-sm">
          &copy; {new Date().getFullYear()} IVC - Innovation & Value Creation Club. All rights reserved.
        </footer>
      </div>
    </Router>
  );
}

export default App;
