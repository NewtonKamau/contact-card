import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Avator from "./Avator";

function createContact(contact) {
    return <Card
        key={contact.id}
        name={contact.name}
        img={contact.imgURL}
        tel={contact.phone}
        email={contact.email}
    />;
}
function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avator img="https://cdn.shopify.com/s/files/1/0161/1156/articles/IMG_3780_medium.jpg?v=1479130925" />
      {contacts.map(createContact)}
    </div>
  );
}

export default App;
