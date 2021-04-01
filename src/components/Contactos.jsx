import React, { useEffect, useReducer } from "react";
import { ContactsReducer } from "../helpers/ContactsReducer";

import InfoAdd from "./InfoAdd";
import TableContacts from "./TableContacts";

const init = () => {
  const contactos = localStorage.getItem("contactos");

  return contactos ? JSON.parse(contactos) : [];
};

const Contactos = () => {
  const [state, dispatch] = useReducer(ContactsReducer, [], init);

  useEffect(() => {
    localStorage.setItem("contactos", JSON.stringify(state));
  }, [state]);

  return (
    <div className="container my-3">
      <InfoAdd number={state.length} dispatch={dispatch} />
      <TableContacts contacts={state} dispatch={dispatch} />
    </div>
  );
};

export default Contactos;
