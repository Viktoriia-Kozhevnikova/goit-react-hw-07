import { useDispatch, useSelector } from 'react-redux'; 
import { useEffect } from 'react'; 
import { deleteContact, fetchContacts } from '/src/redux/contactsOps.js';
import { selectFilteredContacts } from '/src/redux/contactsSlice.js';
import Contact from '/src/components/Contact/Contact.jsx';
import s from '/src/components/ContactList/ContactList.module.css';

const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ul className={s.list}>
      {filteredContacts.length === 0 && <li>No results found!</li>}
      {filteredContacts.map((contact) => (
        <Contact
          className={s.item}
          key={contact.id}
          name={contact.name}
          number={contact.number}
          onDelete={() => dispatch(deleteContact(contact.id))}
        />
      ))}
    </ul>
  );
};

export default ContactList;


