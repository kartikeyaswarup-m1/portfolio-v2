import "./App.css";
import { useState } from "react";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects";
import { Stack } from "./components/Stack";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  // App owns only page composition and shared navigation state.
  return (
    <div className="site-shell">
      <Navbar
        menuOpen={menuOpen}
        onToggle={() => setMenuOpen(!menuOpen)}
        onNavigate={closeMenu}
      />
      <main id="top">
        <Hero />
        <Projects />
        <Stack />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
