import React, { Fragment, useState } from 'react';
import uuid from 'uuid/v4';

const Formulario = ({crearCita}) => {
    
    // Crear State de citas
    const [cita, actualizarCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    })

    // State de error
    const [error, actualizarError] = useState(false)

    // Función que se actualiza cuando el usuario escribe en un input
    const actualizarState = e => {
        actualizarCita({
            ...cita,
            [e.target.name]: e.target.value
        })
    }

    // Extraer los valores
    const { mascota, propietario, fecha, hora, sintomas } = cita;

    // Enviar formulario con todos los datos
    const submitCita = e => {
        e.preventDefault();
        
        // Validación
        if(mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === '') {
            actualizarError(true);
            return;
        }

        // Eliminar el mensaje previo
        actualizarError(false);

        // Asignar un ID
        cita.id =  uuid();

        // Crear cita
        crearCita(cita);

        // Reiniciar el formulario
        actualizarCita({
            mascota: '',
            propietario: '',
            fecha: '',
            hora: '',
            sintomas: ''
        })
    }
    
    return (
        <Fragment>
            <h2>Crear cita</h2>

            { error ? <p className="alerta-error">Debes completar todos los campos.</p> : null}

            <form
                onSubmit={submitCita}
            >
                <label>Nombre Animal:</label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre animal"
                    onChange={actualizarState}
                    value={mascota}
                />
                <label>Nombre Propietario:</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre propietario"
                    onChange={actualizarState}
                    value={propietario}
                />
                <label>Fecha:</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={fecha}
                />
                <label>Hora:</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={hora}
                />
                <label>Síntomas:</label>
                <textarea
                    className="u-full-width"
                    name="sintomas"
                    onChange={actualizarState}
                    value={sintomas}
                />
                <button
                    type="submit"
                    className="u-full-width button-primary"
                    onChange={actualizarState}
                >Agregar cita</button>
            </form>
        </Fragment>
      );
}
 
export default Formulario;
