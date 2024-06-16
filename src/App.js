import './App.css';
import AboutMe from './components/AboutMe';
import Body from './components/Body';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Projects from './components/Projects';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App  bg-[#0D2438] dark:bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/About" element={<AboutMe />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>

    </BrowserRouter>
  );
}

export default App;
