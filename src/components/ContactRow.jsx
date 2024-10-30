const ContactRow = ( {contact} ) => {
  return (
    <tr>
      <td>{contact.name}</td>
      <td>{contact.phone}</td>
      <td>{contact.email}</td>
    </tr>
  );
};

// YOU ARE CURRENTLY ON STEP 13 OF 'SETTING UP A TABLE'

export default ContactRow;