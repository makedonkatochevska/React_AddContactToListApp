import React, { useState } from "react";
import type { ContactItemI } from "./Contact.tsx";

interface AddContactP {
  contacts: ContactItemI[];
  setContacts: React.Dispatch<React.SetStateAction<ContactItemI[]>>;
}

export default function AddContact({ contacts, setContacts }: AddContactP) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [wasSubmitted, setWasSubmitted] = useState(false);

  const buttonSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setWasSubmitted(true);

    if (!name || !phone || !email) {
      return;
    }

    const newContactItem: ContactItemI = {
      id: Date.now(),
      name,
      email,
      phone,
    };

    setContacts([newContactItem, ...contacts]);

    setName("");
    setEmail("");
    setPhone("");

    setWasSubmitted(false);
  };

  return (
    <div className="AddContact">
      <h2>Add Contact</h2>
      <form
        onSubmit={(e) => {
          buttonSubmit(e);
        }}
      >
        <label htmlFor="name">Name</label>
        <br />
        <input
          type="text"
          id="name"
          placeholder="Enter name..."
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {wasSubmitted && !name && <p>Name required</p>}
        <br />
        <label htmlFor="email">Email</label>
        <br />
        <input
          type="email"
          id="email"
          placeholder="Enter Email..."
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {wasSubmitted && !email && <p>Email required</p>}

        <br />
        <label htmlFor="phone">Phone</label>
        <br />
        <input
          type="text"
          id="phone"
          placeholder="Enter phone..."
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        {wasSubmitted && !phone && <p>Phone required</p>}

        <button type="submit">Add</button>
      </form>
    </div>
  );
}
