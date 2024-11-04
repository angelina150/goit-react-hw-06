import { deleteContact, selectContacts } from "../../redux/contactsSlice";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectNameFilter } from "../../redux/filtersSlice";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);
  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase().trim()) ||
      contact.number.toLowerCase().includes(filter.toLowerCase().trim())
  );

  const onDeleteContact = (contactId) => {
    const action = deleteContact(contactId);
    dispatch(action);
  };
  return (
    <div>
      <ul className={css.list}>
        {filteredContacts.map((contact) => (
          <Contact
            key={contact.id}
            id={contact.id}
            name={contact.name}
            number={contact.number}
            onDeleteContact={onDeleteContact}
          />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
