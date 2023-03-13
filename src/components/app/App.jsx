import { Component } from 'react';
import { nanoid } from 'nanoid';
import Container from './AppStyle';
import ContactList from 'components/contacts/ContactList';
import Contact from 'components/contacts/Contact';

class App extends Component {
  contactId = nanoid();

  state = {
    contacts: [],
    name: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    const { contacts, name } = this.state;
    this.setState(prevState => ({
      ...prevState,
      contacts: [{ id: nanoid(), name: name }, ...contacts],
    }));
    e.target.reset();
  };

  setContact = () => {
    const { contacts, name } = this.state;
    return [{ id: this.contactId, name: name }, ...contacts];
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState(prevState => ({ ...prevState, [name]: value }));
  };

  render() {
    return (
      <Container>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleChange}
          />
          <button type="submit">Add contact</button>
        </form>
        <ContactList contacts={this.state.contacts} />
      </Container>
    );
  }
}

export default App;
