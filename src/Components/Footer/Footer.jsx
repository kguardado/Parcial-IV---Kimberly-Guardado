import './Footer.scss';

export default function Footer (){

    const anio = new Date().getFullYear();

    return(
        <>
        <footer>
            <div className="contenedor">
                <div className="redesSociales">
                    <a href="#redSocial"><i className="fab fa-facebook-square"></i></a>
                    <a href="#redSocial"><i className="fab fa-instagram-square"></i></a>
                    <a href="#redSocial"><i className="fab fa-tiktok"></i></a>
                    <a href="#redSocial"><i className="fab fa-youtube-square"></i></a>
                </div>
                <div>
                    <p>© El Salvador {anio} | Derechos Reservados</p>
                </div>
            </div>
        </footer>
        </>
    )
}
