import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { nanoid } from 'nanoid';
import titleCase from 'functions/titleCase';
import initialContacts from 'initialContacts';
import ContactList from 'components/contactsList/ContactList';
import Filter from 'components/Filter';
import ContactForm from 'components/contactForm/ContactForm';
import Container from './App_Style';

const App = () => {
  const localStorageKey = 'PhoneBookContacts';
  const [filterValue, setFilterValue] = useState('');
  const [contacts, setContacts] = useState(() => {
    const localData = localStorage.getItem(localStorageKey);
    return localData ? JSON.parse(localData) : [];
  });

  const normalizeFilter = filterValue.toLowerCase();
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizeFilter)
  );
  useEffect(() => {
    if (localStorage.getItem(localStorageKey) === null) {
      localStorage.setItem(localStorageKey, JSON.stringify(initialContacts));
    }
  });

  const addContact = (name, number) => {
    const normalizeName = name.toLowerCase();
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    contacts.find(contact => contact.name.toLowerCase() === normalizeName)
      ? toast.error(`${titleCase(name)} is already in contacts`)
      : setContacts(prevContacts => [contact, ...prevContacts]);
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  const handleFilter = ({ target }) => {
    if (contacts.length === 0) {      
      return toast.error('There are no contacts yet. Please add the contacts');
    };
    if (visibleContacts.length === 0) {
      toast.info('There is no contact with a such name');
    }
    setFilterValue(target.value);
  };

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <h2>Contacts</h2>
      <Filter value={normalizeFilter} changeFilter={handleFilter} />
      <ContactList contacts={visibleContacts} onDeleteContact={deleteContact} />
      <ToastContainer />
    </Container>
  );
};

export default App;
