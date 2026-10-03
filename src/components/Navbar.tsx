import { ArrowUpRight, Menu, X } from "lucide-react";

type NavbarProps = {
  menuOpen: boolean;
  onToggle: () => void;
  onNavigate: () => void;
};

export function Navbar({ menuOpen, onToggle, onNavigate }: NavbarProps) {
  return (
    <header className="navbar">
      <a className="brand" href="#top" onClick={onNavigate}>
        Kartikeya Swarup Sharma <span>FULL-STACK AI DEVELOPER</span>
      </a>
      <nav className={menuOpen ? "open" : ""}>
        <a href="#projects" onClick={onNavigate}>
          Projects
        </a>
        <a href="#stack" onClick={onNavigate}>
          Stack
        </a>
        <a href="#about" onClick={onNavigate}>
          About
        </a>
        <a href="#contact" onClick={onNavigate}>
          Contact
        </a>
      </nav>
      <a className="hire-button" href="#contact">
        Hire me <ArrowUpRight size={14} />
      </a>
      <button
        className="menu-button"
        onClick={onToggle}
        aria-label="Toggle menu"
      >
        {menuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>
    </header>
  );
}
