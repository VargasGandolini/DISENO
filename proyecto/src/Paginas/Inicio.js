import '../App.css'
import { Carousel, Container } from 'react-bootstrap';
import imagen1 from '../Imagenes/Imagen1.jpg' 
import imagen2 from '../Imagenes/Imagen2.jpg' 
import imagen3 from '../Imagenes/Imagen3.jpg' 
import imagen4 from '../Imagenes/Imagen4.jpg' 

function Inicio() {
  return (
    <div className='App'>
        <header className='App-header'>
            <h1>CLONES</h1>
        </header>
    <div className='App'>
        <Container>
        <Carousel className='carrusel'>
            <Carousel.Item>
                <a href='/quienes_somos'>
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
                </a>
            </Carousel.Item>
            <Carousel.Item>
                <a href='/nosotros'>
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
                </a>
            </Carousel.Item>
            <Carousel.Item>
                <a href='/imagenes'>
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
                </a>
            </Carousel.Item>
            <Carousel.Item>
                <a href='contacto'>
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
                </a>
            </Carousel.Item>
        </Carousel>
        </Container>
        </div>
    </div>
    
  );
}

export default Inicio;