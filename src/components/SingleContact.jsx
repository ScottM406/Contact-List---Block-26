import React from "react";

const SingleContact = ( {contact}) => {
 return (
  <>
  <h1>Name: {contact.name}</h1>
  <h3>Username: {contact.username}</h3>
  <h3>Phone: {contact.phone}</h3>
  <h3>Address: {contact.address.street}</h3>
  <h3>Company: {contact.company.name}</h3>
  <h3>Email: {contact.email}</h3>
  <h3>Website: {contact.website}</h3>
  <h3></h3>
  </>
 )
};

export default SingleContact;