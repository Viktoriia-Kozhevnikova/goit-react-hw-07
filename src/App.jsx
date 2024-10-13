import s from '/src/App.module.css';
import ContactForm from '/src/components/ContactForm/ContactForm.jsx';
import SearchBox from '/src/components/SearchBox/SearchBox.jsx';
import ContactList from '/src/components/ContactList/ContactList.jsx';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from './redux/contactsOps';


function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={s.container}>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}

export default App;