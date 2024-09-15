// src/ContactForm.js
import { useState } from 'react';
import './Contact.css';
import Footer from '../Footer/Footer';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',  // Adicionado o campo de telefone
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Lógica para enviar o formulário
        console.log(formData);
    };

    return (
    <div className="container mt-5">
      <h2>Formulario de Contato</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Nome
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required placeholder='Digite seu nome'
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required placeholder='Digite seu email'
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Telefone
          </label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required placeholder='Digite seu telefone'
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Mensagem
          </label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required placeholder='Escreva sua mensagem'
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
      <br />


    {/* Team section */}
    
    <section id="staff" className="py-5 text-center bg-dark text-white">
      <div className="container-fluid"> {/* Use container-fluid para ocupar toda a largura */}
        <h1>Nossa equipe</h1>
        <hr className="my-4" />
        <div className="row justify-content-center">
          <div className="col-12 col-md-3 d-flex flex-column align-items-center">
            <img
              src="image/alexandre.jpg"
              alt="Alexandre Salgado"
              className="img-fluid rounded-circle mb-3"
            />
            <h4>Alexandre Salgado</h4>
            <small>Professor</small>
          </div>
          <div className="col-12 col-md-3 d-flex flex-column align-items-center">
            <img
              src="/image/nogi.jpeg"
              alt="Ana Carol"
              className="img-fluid rounded-circle mb-3"
            />
            <h4>NoGi</h4>
            <small>Alexandre Salgado</small>
          </div>
          <div className="col-12 col-md-3 d-flex flex-column align-items-center">
            <img
              src="image/ana.jpg"
              alt="Renata Bastos"
              className="img-fluid rounded-circle mb-3"
            />
            <h4>Anna Carolina</h4>
            <small>Professora</small>
          </div>
          <div className="col-12 col-md-3 d-flex flex-column align-items-center">
            <img
              src="image/meninas.jpeg"
              alt="Vitor Werneck"
              className="img-fluid rounded-circle mb-3"
            />
            <h4>Meninas</h4>
            <small>Anna Carolina</small>
          </div>          
        </div>        
      </div>      
    </section>  
   <Footer />
     
    </div>  
 
    );
}

export default Contact;
