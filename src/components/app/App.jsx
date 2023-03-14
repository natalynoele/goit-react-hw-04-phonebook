import { Component } from 'react';
import { nanoid } from 'nanoid';
import { titleCase } from 'components/helper';
import initialContacts from 'components/initialContacts';
import ContactList from 'components/contactsList/ContactList';
import Filter from 'components/Filter';
import ContactForm from 'components/contactForm/ContactForm';
import Container from './App_Style';

class App extends Component {
  state = {
    contacts: initialContacts,    
    filter: '',
  };

  addContact = (name, number) => {
    const normalizename = name.toLowerCase();
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    this.state.contacts.find(
      contact => contact.name.toLowerCase() === normalizename
    )
      ? alert(`${titleCase(name)} is already in contacts`)
      : this.setState(prevState => ({
          ...prevState,
          contacts: [contact, ...prevState.contacts],
        }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  handleFilter = ({ target }) => {
    this.setState(prevState => ({ ...prevState, filter: target.value }));
  };

  render() {
    const { contacts, filter } = this.state;
    const normalizeFilter = filter.toLowerCase();
    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter value={normalizeFilter} changeFilter={this.handleFilter} />
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={this.deleteContact}
        />
      </Container>
    );
  }
}

export default App;
