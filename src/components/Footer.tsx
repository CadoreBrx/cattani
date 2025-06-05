import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";
import "./Footer.css";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Cattani</h3>
            <p>
              Soluções completas para projetos residenciais, comerciais e
              industriais. Qualidade garantida e satisfação do cliente em
              primeiro lugar.
            </p>
          </div>

          <div className="footer-section">
            <h3>Entre em Contato</h3>
            <ul className="contact-list">
              <li>
                <Phone size={18} />
                <span>(47) 99634-1374</span>
              </li>
              <li>  
                <Mail size={18} />
                <span>igor@cattaniserviços.com.br</span>
              </li>
              <li>
                <MapPin size={18} />
                <span>R. João Silvano, 104 - Brusque - SC</span>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Horários</h3>
            <ul className="hours-list">
              <li>
                <strong>Seg - Sex:</strong> 8:00 - 18:00
              </li>
              <li>
                <strong>Emergência:</strong> 24:00
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Redes Sociais</h3>
            <div className="social-icons">
              <a
                href="https://www.facebook.com/cattaniservicos?locale=pt_BR"
                target="_Blank"
                aria-label="Facebook"
              >
                <Facebook size={22} />
              </a>
              <a href="https://www.instagram.com/cattani.servicos" target="_Blank" aria-label="Instagram">
                <Instagram size={22} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Cattani Serviços</p>
          <p>
            Desenvolvido por <a href="#">Jefvs</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
