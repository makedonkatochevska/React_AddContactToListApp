import { useEffect, useState } from "react";
import AddContact from "./AddContact";
import Contacts from "./Contacts";

export interface ContactItemI {
  id: number | string;
  name: string;
  email: string;
  phone: string;
}

const initialContacts: ContactItemI[] = [
  {
    id: 1,
    name: "blagica",
    email: "blagica@brainster.co",
    phone: "5641231234",
  },
  {
    id: 2,
    name: "kristijan",
    email: "kristijan@brainster.co",
    phone: "5654744",
  },
  { id: 3, name: "ognen", email: "ognen@brainster.co", phone: "123456789" },
];

export default function Contact() {
  const [contactsList, setContactList] = useState<ContactItemI[]>(() => {
    const stored = localStorage.getItem("contactsList");
    if (stored) {
      return JSON.parse(stored);
    } else {
      localStorage.setItem("contactsList", JSON.stringify(initialContacts));
      return initialContacts;
    }
  });

  useEffect(() => {
    localStorage.setItem("contactsList", JSON.stringify(contactsList));
  }, [contactsList]);

  const handleDelete = (id: number | string) => {
    const updatedContacts = contactsList.filter((contact) => contact.id !== id);
    setContactList(updatedContacts);
  };

  return (
    <div>
      <AddContact contacts={contactsList} setContacts={setContactList} />
      {contactsList.map((contactItem) => {
        return (
          <Contacts
            key={contactItem.id}
            name={contactItem.name}
            id={contactItem.id}
            phone={contactItem.phone}
            email={contactItem.email}
            deleteContact={handleDelete}
          />
        );
      })}
    </div>
  );
}
