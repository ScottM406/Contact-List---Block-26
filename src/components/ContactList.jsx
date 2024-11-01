import { useState } from "react";
import { useEffect } from "react";
import ContactRow from "./ContactRow.jsx";
import SingleContact from "./SingleContact.jsx";
import "../index.css"

const dummyContacts = [
  { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
  { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
  { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
];

const ContactList = () => {
  const [contacts, setContacts] = useState(dummyContacts);
  const [singleContact, setSingleContact] = useState(null);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await fetch("https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users");
        const responseJSON = await response.json();
        setContacts(responseJSON);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchContacts();
},[]);

  return (
    <>
    <table id="list">
      <thead>
        <tr>
        <th colSpan="3">Contact List</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone Number</th>
        </tr>
        {contacts.map((contact) => {
          return<ContactRow key={contact.id} contac={contact} onClick={() => setSingleContact(contact)} />;
          //NOTE THAT "CONTAC" IS PROPS - IT IS BEING PASSED TO CONTACT ROW!!!!
        })}
      </tbody>
      <tfoot>
      </tfoot>
    </table>
    <div id="single">
    {singleContact && <SingleContact contact={singleContact} />}
    </div>
    </>
  )
}

export default ContactList;