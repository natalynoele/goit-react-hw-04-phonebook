import { Component } from 'react';
import { nanoid } from 'nanoid';
import Container from './App_Style';
import ContactList from 'components/contactsList/ContactList';
import Filter from 'components/Filter';
import ContactForm from 'components/contactForm/ContactForm';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    this.setState(prevState => ({
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
    console.log(filter);
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
        <ContactList contacts={visibleContacts} onDeleteContact={ this.deleteContact} />
      </Container>
    );
  }
}

export default App;
