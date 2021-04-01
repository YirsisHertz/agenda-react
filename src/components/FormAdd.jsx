import React, { useState } from "react";
import PropTypes from "prop-types";
import { v4 as uuid } from "uuid";

const FormAdd = ({ dispatch }) => {
  const [data, setData] = useState({ name: "", phone: "" });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const addAction = {
    type: "add",
    payload: { id: uuid(), name: data.name, phone: data.phone },
  };

  const addContact = () => {
    if (data.name !== "" && data.phone !== "") {
      dispatch(addAction);
      setData({ name: "", phone: "" });
    }
  };

  return (
    <div>
      <div className="col my-2">
        <label className="mx-1 d-grid gap-2">
          Name:
          <input
            onChange={handleChange}
            name="name"
            value={data.name}
            autoComplete="off"
            type="text"
            className="form-control"
          />
        </label>
        <label className="mx-1 d-grid gap-2">
          Telefono:
          <input
            value={data.phone}
            onChange={handleChange}
            name="phone"
            autoComplete="off"
            type="text"
            className="form-control"
          />
        </label>
      </div>
      <div className="col d-grid gap-2">
        <button className="btn btn-info btn-block mx-1" onClick={addContact}>
          Agregar
        </button>
      </div>
    </div>
  );
};

FormAdd.propTypes = {
  dispatch: PropTypes.func,
};

export default FormAdd;
