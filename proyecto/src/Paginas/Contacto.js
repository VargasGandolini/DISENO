import React, { useState } from "react";
import { Carousel, Container, Nav, Navbar} from 'react-bootstrap';
import '../App.css'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "El nombre es obligatorio";
    }

    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "El correo electrónico no es válido";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "El asunto es obligatorio";
    }

    if (!formData.message.trim()) {
      newErrors.message = "El mensaje es obligatorio";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Datos enviados:", formData);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className='App'>
      <Navbar className='navbar'>
        <Container className='text-navbar'>
          <Navbar.Brand style={{color:'#d1d1d1'}}>Clones</Navbar.Brand>
          <Nav variant="underline" defaultActiveKey="/contacto">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/quienes_somos">Quienes Somos</Nav.Link>
            <Nav.Link href="/nosotros">Nosotros</Nav.Link>
            <Nav.Link href="/imagenes">Imagenes</Nav.Link>
            <Nav.Link href="/contacto">Contacto</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className='App'>
        <Container>
          <div>
          <h2 className="Titulo">
              Formulario de Contacto
          </h2>
          <div className="formulario">
            <legend>
              Información de Contacto
            </legend>
            <form onSubmit={handleSubmit}>
              <div>
                <label>Nombre:</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="inputs"
                />
                {errors.name && <p className="error">{errors.name}</p>}
              </div>
              <div>
                <label>Correo Electrónico:</label>
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="inputs"
                />
                {errors.email && <p className="error">{errors.email}</p>}
              </div>
              <div>
                <label>Asunto:</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="inputs"
                />
                {errors.subject && <p className="error">{errors.subject}</p>}
              </div>
              <div>
                <label>Mensaje:</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="inputs"
                />
                {errors.message && <p className="error">{errors.message}</p>}
              </div>
              <button type="submit" className="boton-contacto">
                Enviar
              </button>
            </form>
            </div>
            </div>
        </Container>
      </div>
    </div>
  );
};

export default ContactForm;
