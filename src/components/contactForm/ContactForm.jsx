import { Component } from 'react';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.name, this.state.number);
    this.resetForm()
  };

  resetForm = () => {
    this.setState({ name: '', number: '' });
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState(prevState => ({ ...prevState, [name]: value }));
  };
  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={name}
          required
          onChange={this.handleChange}
        />
        <label htmlFor="number">Number</label>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={number}
          required
          onChange={this.handleChange}
        />
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default ContactForm;
