//import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServiceCard from "../components/ServiceCard";
import StatCounter from "../components/StatCounter";
import ContactForm from "../components/ContactForm";
import ImageCarousel from "../components/ImageCarousel";
import {
  Paintbrush,
  Hammer,
  Droplets,
  Lightbulb,
  Brush,
  Building2,
  Building,
  Wrench,
  Bath,
  Home,
  HardHat,
  Shell,
} from "lucide-react";
import "./Index.css";
import cattaniImg from "../img/pinturaEstacionamento.jpg";

const Index = () => {
  // Estrutura dos serviços por categoria
  const serviceCategories = [
    {
      title: "Construção e Reformas",
      services: [
        {
          icon: <Hammer size={32} />,
          title: "Serviços de Pedreiro",
          description:
            "Construção, alvenaria, assentamento de tijolos e blocos, pequenas reformas e reparos.",
        },
        {
          icon: <Paintbrush size={32} />,
          title: "Pintura",
          description:
            "Pintura residencial, comercial e industrial. Acabamento perfeito e materiais de qualidade.",
        },
        {
          icon: <Wrench size={32} />,
          title: "Pequenos Reparos",
          description:
            "Manutenções gerais e pequenos reparos para sua residência ou empresa.",
        },
        {
          icon: <HardHat size={32} />,
          title: "Colocação de Porcelanato",
          description:
            "Instalação profissional de porcelanato, pisos e revestimentos.",
        },
      ],
    },
    {
      title: "Hidráulica",
      services: [
        {
          icon: <Droplets size={32} />,
          title: "Serviços de Encanador",
          description:
            "Instalação e manutenção de sistemas hidráulicos, detecção e reparo de vazamentos.",
        },
        {
          icon: <Bath size={32} />,
          title: "Limpeza de Caixa d'Água",
          description:
            "Higienização e limpeza de caixas d'água com produtos adequados e profissionais especializados.",
        },
        {
          icon: <Shell size={32} />,
          title: "Limpeza de Fossa",
          description:
            "Limpeza e manutenção de fossas sépticas, evitando transbordamentos e mau cheiro.",
        },
      ],
    },
    {
      title: "Elétrica",
      services: [
        {
          icon: <Lightbulb size={32} />,
          title: "Serviços de Eletricista",
          description:
            "Instalações elétricas, manutenções preventivas, reparos e projetos elétricos.",
        },
      ],
    },
    {
      title: "Limpeza e Manutenção",
      services: [
        {
          icon: <Brush size={32} />,
          title: "Limpeza de Telhado",
          description:
            "Limpeza, manutenção e troca de telhas para evitar infiltrações e aumentar a vida útil.",
        },
        {
          icon: <Building size={32} />,
          title: "Lavação de Prédios",
          description:
            "Limpeza de fachadas de edifícios residenciais e comerciais com equipamentos profissionais.",
        },
        {
          icon: <Home size={32} />,
          title: "Lavação de Casas",
          description:
            "Higienização completa de residências, removendo sujeira e garantindo um ambiente limpo.",
        },
        {
          icon: <Building2 size={32} />,
          title: "Recuperação de Fachadas",
          description:
            "Restauração e recuperação de fachadas de prédios, tratamento de trincas e impermeabilização.",
        },
      ],
    },
  ];

  return (
    <div className="main-container">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <ImageCarousel />
        <div className="hero-content">
          <h1>Cattani Serviços</h1>
          <p>Cattani Serviços - Soluções pra suas obras</p>
          <div className="hero-buttons">
            <a href="#services" className="btn btn-primary">
              Nossos Serviços
            </a>
            <a href="#contact" className="btn btn-secondary">
              Solicitar Orçamento
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section about-section">
        <div className="container">
          <div className="section-header">
            <h2>Quem Somos</h2>
            <p>
              Há mais de 15 anos no mercado, entregando qualidade e confiança
            </p>
          </div>

          <div className="about-content">
            <div className="about-image">
              <img src={cattaniImg} alt="Equipe Cattani" />
            </div>

            <div className="about-text">
              <h3>Nossa História</h3>
              <p>
                Fundada em 2006, a Cattani nasceu com um propósito claro:
                oferecer soluções construtivas de qualidade, com foco na
                satisfação do cliente e no comprometimento com prazos e
                orçamentos.
              </p>
              <p>
                Ao longo dos anos, nos consolidamos no mercado como referência
                em serviços de construção civil, atendendo clientes
                residenciais, comerciais e industriais com a mesma dedicação e
                excelência.
              </p>
              <p>
                Nossa equipe é formada por profissionais qualificados e
                experientes, prontos para atender às suas necessidades com
                soluções personalizadas e resultados que superam expectativas.
              </p>

              <div className="about-values">
                <div className="value-item">
                  <h4>Missão</h4>
                  <p>
                    Oferecer soluções construtivas de excelência, transformando
                    espaços e melhorando a qualidade de vida de nossos clientes.
                  </p>
                </div>

                <div className="value-item">
                  <h4>Visão</h4>
                  <p>
                    Ser referência nacional em serviços de construção civil,
                    reconhecida pela qualidade, inovação e sustentabilidade.
                  </p>
                </div>

                <div className="value-item">
                  <h4>Valores</h4>
                  <p>
                    Ética, Comprometimento, Qualidade, Respeito ao cliente e
                    Responsabilidade socioambiental.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="stats-container">
            <StatCounter endValue={22} suffix="+" label="Anos de Experiência" />
            <StatCounter
              endValue={300}
              suffix="+"
              label="Projetos Concluídos"
            />
            <StatCounter
              endValue={500}
              suffix="+"
              label="Clientes Satisfeitos"
            />
            <StatCounter
              endValue={10}
              suffix="+"
              label="Profissionais Qualificados"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section services-section">
        <div className="container">
          <div className="section-header">
            <h2>Nossos Serviços</h2>
            <p>Soluções completas para sua casa, empresa ou indústria</p>
          </div>

          {serviceCategories.map((category, index) => (
            <div key={index} className="service-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="services-grid">
                {category.services.map((service, serviceIndex) => (
                  <ServiceCard
                    key={serviceIndex}
                    icon={service.icon}
                    title={service.title}
                    description={service.description}
                  />
                ))}
              </div>
            </div>
          ))}

          <div className="cta-container">
            <h3>Precisa de um serviço não listado?</h3>
            <p>
              Entre em contato conosco e solicite um orçamento personalizado.
            </p>
            <a href="#contact" className="btn btn-primary">
              Solicitar Orçamento
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact-section">
        <div className="container">
          <div className="section-header">
            <h2>Fale Conosco</h2>
            <p>Estamos prontos para atender você</p>
          </div>

          <div className="contact-container">
            <div className="contact-info">
              <div className="contact-card">
                <h3>Informações de Contato</h3>
                <ul>
                  <li>
                    <strong>Endereço:</strong> R. João Silvano, 104 - Brusque -
                    SC
                  </li>
                  <li>
                    <strong>Telefone:</strong> (47) 9634-1374
                  </li>
                  <li>
                    <strong>Email:</strong> igor@cattaniserviços.com.br
                  </li>
                  <li>
                    <strong>Horário:</strong> Seg-Sex: 8h às 18h | Emergência:
                    24h
                  </li>
                </ul>

                <div className="map-container">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3550.791728288341!2d-48.88793583640701!3d-27.131369198135015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94df4618cedb43d5%3A0x14712c973ac802bc!2sR.%20Jo%C3%A3o%20Silvano%2C%20104%20-%20Po%C3%A7o%20Fundo%2C%20Brusque%20-%20SC%2C%2088357-047!5e0!3m2!1spt-BR!2sbr!4v1746481711569!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="350"
                    style={{ border: 0 }}
                    loading="lazy"
                    title="Localização Cattani"
                  ></iframe>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
