import {useState, useRef} from 'react';
import galeria from '../../helpers/galeria';
import './Galeria.scss';

export default function Galeria(){
    
    const [lightbox, setLightbox] =useState(false);
    const imgLighbox = useRef();

    function capturarImagen(url){
        imgLighbox.current.setAttribute('src', url);
        accionLightbox()
    }

    function accionLightbox(){
        setLightbox(!lightbox);
    }

    return(
        <>
            <div className={`lightbox ${lightbox ? 'activo' :''}`}>
                <span onClick={accionLightbox}>Salida<i className="fas fa-times"></i></span>
                <img src="img/imagen01.jpg" alt="" ref={imgLighbox}/>
            </div>
            <section className="galeria">
            <div className="cabecera">
                <div className="contenedor">
                    <h3>¿Que prefieres explorar?</h3>
                </div>
            </div>
            <div className="imagenes">
                {galeria.map((imagen, index)=>(
                    <div style={{background: `url('${imagen}')`}} key={index} onClick={()=>{capturarImagen(imagen)}} ></div>
                ))}
            </div>
        </section>
        </>
    )
}