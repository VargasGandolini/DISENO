import '../App.css'
import { Carousel, Container, Nav, Navbar} from 'react-bootstrap';
import imagen1 from '../Imagenes/Imagen1.jpg' 
import imagen2 from '../Imagenes/Imagen2.jpg' 
import imagen3 from '../Imagenes/Imagen3.jpg' 
import imagen4 from '../Imagenes/Imagen4.jpg' 

function Inicio() {
  return (
    <div className='App'>
      <Navbar className='navbar'>
        <Container className='text-navbar'>
          <Navbar.Brand style={{color:'#d1d1d1'}}>Clones</Navbar.Brand>
          <Nav variant="underline" defaultActiveKey="/">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/quienes_somos">Quienes Somos</Nav.Link>
            <Nav.Link href="/nosotros">Nosotros</Nav.Link>
            <Nav.Link href="/imagenes">Imagenes</Nav.Link>
            <Nav.Link href="/Contacto">Contacto</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    <div className='App'>
        <Container>
        <Carousel className='carrusel'>
            <Carousel.Item>
                <img
                className="imagen"
                src={imagen1}
                alt="First slide"
                />
                <Carousel.Caption>
                    <div className='carrusel-texto'>
                        <h3>QUIENES SOMOS</h3>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                    <img
                    className="imagen"
                    src={imagen2}
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                        <div className='carrusel-texto'>
                            <h3>NOSOTROS</h3>
                        </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="imagen"
                src={imagen3}
                alt="First slide"
                />
                <Carousel.Caption>
                    <div className='carrusel-texto'>
                        <h3>IMAGENES</h3>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="imagen"
                src={imagen4}
                alt="First slide"
                />
                <Carousel.Caption>
                    <div className='carrusel-texto'>
                        <h3>CONTACTO</h3>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </Container>
        </div>
    </div>
  );
}

export default Inicio;