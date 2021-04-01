import React, { useState } from "react";
import PropTypes from "prop-types";

import FormAdd from "./FormAdd";

const InfoAdd = ({ number, dispatch }) => {
  const [add, setAdd] = useState(false);

  return (
    <div className="row">
      <div className="col-12 col-md-6">
        <h2>Lista de Contactos: {number}</h2>
      </div>
      <div className="col">
        <button className="btn btn-success" onClick={() => setAdd(!add)}>
          {" "}
          {add ? "+ Agregar Contacto" : "> Cerrar Formulario"}
        </button>
        {add && <FormAdd dispatch={dispatch} />}
      </div>
    </div>
  );
};

InfoAdd.propTypes = {
  number: PropTypes.number,
  dispatch: PropTypes.func,
};

export default InfoAdd;
