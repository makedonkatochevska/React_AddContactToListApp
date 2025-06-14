import { useState } from "react";
import type { ContactItemI } from "./Contact";

interface ContactProps extends ContactItemI {
  deleteContact: (id: number | string) => void;
}

export default function Contacts({
  name,
  id,
  email,
  phone,
  deleteContact,
}: ContactProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="Contact" data-id={id}>
      <h4>
        {name}{" "}
        <i
          className="fas fa-chevron-down"
          onClick={() => setIsExpanded(!isExpanded)}
        ></i>
        <i
          className="fas fa-times"
          style={{ float: "right", color: "red" }}
          onClick={() => deleteContact(id)}
        ></i>
      </h4>
      <ul style={{ display: isExpanded ? "block" : "none" }}>
        <li>Email: {email}</li>
        <li>Phone: {phone}</li>
      </ul>
    </div>
  );
}
