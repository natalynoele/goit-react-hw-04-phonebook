import { Component } from 'react';
import { nanoid } from 'nanoid';
import Container from './AppStyle';
import ContactList from 'components/contacts/ContactList';
import Section from 'components/section/Section';

class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };
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

  render() {
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
        <ContactList contacts={this.state.contacts} />
      </Container>
    );
  }
}

export default App;
