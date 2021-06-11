import {Link} from 'react-router-dom';
import {useState} from 'react';
import './Menumovil.scss';

export default function MenuMovil (){

    const [menu, setMenu] = useState(false);
    function accionMenu (){
        setMenu(!menu);
    }

    return(
        <>
        <hr/>
            <nav className="menuMovil">
                <div className="contenedor">
                    <div className="btn" onClick={accionMenu}>
                        {menu ?
                            <i className="fas fa-times"></i>
                            :
                            <i className="fas fa-bars"></i>
                        }
                    </div>
                    <img src="img/logo.jpg" alt="" className="logomovil" />
                </div>
            </nav>
            <div className={`blur ${menu ? 'activo' :''}`}></div>
            <div className={`enlacesmoviles ${menu ? 'activo' :''}`}>
                <Link to="/">Home</Link>
                <a href="Parcial">Servicios</a>
                <a href="Parcial">Ubicación</a>
                <Link to="Acerca">Acerca de</Link>
                <Link to="Contacto">Contácto</Link>
            </div>            
        </>
    )
}