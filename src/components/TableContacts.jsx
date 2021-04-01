import React from "react";
import PropTypes from "prop-types";

const TableContacts = ({ contacts, dispatch }) => {
  const handleDelete = (id) => {
    const deleteAction = {
      type: "delete",
      payload: id,
    };

    dispatch(deleteAction);
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nombre</th>
          <th scope="col">Número</th>
          <th scope="col">Acción</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map(({ id, name, phone }) => {
          return (
            <tr key={id}>
              <th scope="row" className="col-12 col-md-3">
                {id.split("-")[0]}
              </th>
              <td>{name}</td>
              <td>{phone}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

TableContacts.propTypes = {
  contacts: PropTypes.array,
};

export default TableContacts;
