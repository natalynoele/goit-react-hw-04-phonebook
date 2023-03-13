import { Component } from 'react';
import { nanoid } from 'nanoid';
import Container from './AppStyle';
import ContactList from 'components/contacts/ContactList';
import Section from 'components/section/Section';
import Filter from 'components/Filter';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: '',
  };

  // contact = (name, number) => {
  //   id: nanoid(),
  //     name,
  //     number    
  // }

  contactId = nanoid();

  handleSubmit = e => {
    e.preventDefault();
    const { contacts, name, number } = this.state;
    this.setState(prevState => ({
      ...prevState,
      contacts: [{ id: nanoid(), name: name, number: number }, ...contacts],
    }));
    e.target.reset();
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState(prevState => ({ ...prevState, [name]: value }));
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
        <Section title="Phonebook">
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.handleChange}
            />
            <label htmlFor="number">Number</label>
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={this.handleChange}
            />
            <button type="submit">Add contact</button>
          </form>
        </Section>
        <Filter filter={filter} changeFilter={this.handleFilter}
        />
        <ContactList contacts={visibleContacts} />
      </Container>
    );
  }
}

export default App;
