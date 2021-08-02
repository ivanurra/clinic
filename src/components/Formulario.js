import React, { Fragment, useState } from 'react';

const Formulario = () => {
    
    //Crear State de citas
    const [cita, actualizarCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    })

    //Función que se actualiza cuando el usuario escribe en un input
    const actualizarState = () => {
        console.log('escribiendo...');
    }
    
    return (
        <Fragment>
            <h2>Crear cita</h2>
            <form>
                <label>Nombre Animal:</label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre animal"
                    onChange={actualizarState}
                />
                <label>Nombre Propietario:</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre propietario"
                    onChange={actualizarState}
                />
                <label>Fecha:</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={actualizarState}
                />
                <label>Hora:</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={actualizarState}
                />
                <label>Síntomas:</label>
                <textarea
                    className="u-full-width"
                    name="sintomas"
                    onChange={actualizarState}
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