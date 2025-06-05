import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="logo" onClick={() => scrollToSection('home')}>
          <h1>Cattani</h1>
          <span>Serviços Cattani </span>
        </div>

        <div className="menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </div>

        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <span onClick={() => scrollToSection('home')}>Início</span>
          </li>
          <li className="nav-item">
            <span onClick={() => scrollToSection('about')}>Quem Somos</span>
          </li>
          <li className="nav-item">
            <span onClick={() => scrollToSection('services')}>Serviços</span>
          </li>
          <li className="nav-item">
            <span onClick={() => scrollToSection('contact')}>Contato</span>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
