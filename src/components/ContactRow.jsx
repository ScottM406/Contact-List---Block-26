import React from "react";

const ContactRow = ( {contac, onClick} ) => {
  return (
    <tr onClick={onClick}>
      <td>{contac.name}</td>
      <td>{contac.phone}</td>
      <td>{contac.email}</td>
    </tr>
  );
};

export default ContactRow;