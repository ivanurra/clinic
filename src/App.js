import React, { Fragment, useState } from "react";
import Cita from "./components/Cita";
import Formulario from "./components/Formulario";

function App() {

  // Array de citas
  const [ citas, guardarCitas ] = useState([]);

  // Función que contiene las citas actuales y agrega la nueva
  const crearCita = cita => {
    guardarCitas([
      ...citas,
      cita
    ])
  }

  return (
    <Fragment>
      <h1>Clínica Veterinaria</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario
              crearCita={crearCita}
            />
          </div>
          <div className="one-half column">
            <h2>CITAS GUARDADAS</h2>
            {citas.map(cita => (
              <Cita
                key={cita.id}
                cita={cita}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
