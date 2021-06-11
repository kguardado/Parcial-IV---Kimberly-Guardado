import calendario from '../../helpers/calendario';
import './Section.scss'
export default function Section (){
    return(
        <section className="eventos" id="eventos">
            <div className="contenedor">
                <div className="titulo">
                    <i className="fas fa-calendar-alt"></i>
                    <h2>Próximos Eventos</h2>
                    </div>
                    <div className="proximos">
                        {calendario.map((calendario, index)=> (
                            <div className="evento" key={index}>
                                <img src={calendario.img} alt="" />
                                <p className="nombre">{calendario.nombre}</p>
                            </div>
                        ))}
                </div>
            </div>
        </section>
    )
}
