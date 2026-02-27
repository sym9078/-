import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProfilePage from './pages/ProfilePage';
import SkillsPage from './pages/SkillsPage';
import ProjectsPage from './pages/ProjectsPage';
import PhilosophyPage from './pages/PhilosophyPage';

export default function App() {
  return (
    <Router>
      <main className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-indigo-500/30 flex flex-col">
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/philosophy" element={<PhilosophyPage />} />
          </Routes>
        </div>
        <Footer />
      </main>
    </Router>
  );
}
