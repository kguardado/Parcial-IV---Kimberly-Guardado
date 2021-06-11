import {useState} from 'react';
import {isEmpty, isEmail} from 'validator';
import './Formulario.scss';

export default function Formulario (){

    const [error, setError] = useState({
        estado: false,
        mensaje: ''
    });
    const [formulario, setFormulario] = useState({
        nombre: '',
        correo: '',
        fecha: '',
        categoria: '',
    })

    function capturarDatos(e){
        setFormulario({
            ...formulario,
            [e.target.name]: e.target.value
        })

    }

    function validarDatos(e){
        const {nombre, correo, fecha, categoria} = formulario;
        e.preventDefault();

        if(isEmpty(nombre) || isEmpty(correo) || isEmpty(fecha) || isEmpty(categoria)){
            setError ({
                estado: true,
                mensaje: 'Complete todos los campos.'
            })
        } else{
            if (!isEmail(correo)){
                setError({
                    estado: true,
                    mensaje: 'Escriba un correo valido.'
                })
            } else {
                setError({
                    estado: false,
                    mensaje: ''
                })
                setFormulario({
                    ...formulario,
                    nombre: '',
                    correo: '',
                    fecha: '',
                })
            }
        }
    }

    return(
        <section className="contacto">
            <div className="contenedor">
                <div className="texto">
                <i className="fas fa-address-book"></i>
                    <h2>Contáctanos</h2>
                    <p>Solicita tus cotizaciones y información de nuestros próximos viajes. Solo ingresa tus datos y una breve descripción de lo que solicitas.</p>
                </div>
                <div className="formulario">
                <h3>Ingresa tus datos</h3>
                <form onSubmit={validarDatos}>
                <div className="campo">
                        <label htmlFor="nombre">Nombre completo:</label>
                        <input type="text" id="nombre" name="nombre" placeholder="Nombre, Apellido" value={formulario.nombre} onChange={capturarDatos}/>
                    </div>
                    <div className="campo">
                        <label htmlFor="correo">Correo electrónico:</label>
                        <input type="text" id="correo" name="correo" placeholder="ejemplo@gmail.com" value={formulario.correo} onChange={capturarDatos}/>
                    </div>
                    <div className="campodoble">
                        <div>
                            <label htmlFor="fecha">Fecha:</label>
                            <input type="date" id="fecha" name="fecha" value={formulario.fecha} onChange={capturarDatos}/>
                        </div>
                        <div>
                            <label htmlFor="categoria">Aventura:</label>
                            <select name="categoria" id="categoria" defaultValue={formulario.categoria} onChange={capturarDatos}>
                            <option value="Bosque">Bosque</option>
                            <option value="Lago">Lago</option>
                            <option value="Montana">Montaña</option>
                            <option value="Playa">Playa</option>
                            </select>
                        </div>
                    </div>
                    {error.estado &&
                        <div className="error">
                            <span>Error: </span>{error.mensaje}
                        </div>
                    }
                    <div className="botonera">
                        <button type="submit">Enviar</button>
                    </div>
            </form>
                </div>
            </div>
        </section>
    )
}