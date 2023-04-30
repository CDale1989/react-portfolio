import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from './components/Skills';

function App() {
  return (
    <Router>
      <main className="text-gray-400 bg-gray-900 font-bold">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<About />}></Route>
            <Route path="/Skills" element={<Skills />}></Route>
            <Route path="/Projects" element={<Projects />}></Route>
            <Route path="/Contact" element={<Contact />}></Route>
          </Routes>
        </div>
      </main>
    </Router>
  );
}

export default App;
