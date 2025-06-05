import React, { useState } from "react";
import "./ContactForm.css";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    subject: "",
    message: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const numeroWhatsApp = '5547996341374'; // 5547996341374

    const mensagem = `Olá, me chamo ${formData.firstName} ${formData.lastName}.
Assunto: ${formData.subject}.
Mensagem: ${formData.message}`;

    const mensagemCodificada = encodeURIComponent(mensagem);
    const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensagemCodificada}`;

    window.open(linkWhatsApp, '_blank');

    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);

    setFormData({
      firstName: "",
      lastName: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="contact-form-container">
      {formSubmitted ? (
        <div className="success-message">
          <h3>Mensagem Enviada!</h3>
          <p>Obrigado por entrar em contato. Retornaremos em breve.</p>
        </div>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">Nome</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Sobrenome</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Assunto</label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            >
              <option value="">Selecione um assunto</option>
              <option value="Solicitar orçamento">Solicitar orçamento</option>
              <option value="Informações">Informações</option>
              <option value="Parceria">Parceria</option>
              <option value="Outro">Outro</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="message">Mensagem</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">
            Chamar no WhatsApp
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
