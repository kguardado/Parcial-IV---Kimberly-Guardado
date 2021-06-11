import {Link} from 'react-router-dom';
import './Menu.scss';
export default function Menu (){
    return(
        <>
        <nav className="menu">
            <div className= "contenedor">
            <img src="img/logo.jpg" alt=""className="logo" />
            <div className="enlaces">
                <Link to="/">Home</Link>
                <a href="Parcial">Servicios</a>
                <a href="Parcial">Ubicación</a>
                <Link to="/Acerca">Acerca de</Link>
                <Link to="/Contacto">Contácto</Link>
            </div>
            </div>
        </nav>
        <hr/>
        </>
    )
}