import React, { Fragment } from 'react';

const Formulario = () => {
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
                />
                <label>Nombre Propietario:</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre propietario"
                />
                <label>Fecha:</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                />
                <label>Hora:</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                />
                <label>Síntomas:</label>
                <textarea
                    className="u-full-width"
                    name="sintomas"
                />
                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Agregar cita</button>
            </form>
        </Fragment>
      );
}
 
export default Formulario;