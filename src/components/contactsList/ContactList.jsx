import PropTypes from 'prop-types';
import titleCase from 'functions/titleCase';
import Notification from 'components/Notification';
import { Button } from 'components/contactForm/ContactForm_Style';
import { Span, Item } from './ContactList_Style';

const ContactList = ({ contacts, onDeleteContact }) =>
  contacts.length > 0 ? (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <Item key={id}>
          <Span>
            {titleCase(name)} {number}
          </Span>
          <Button type="button" onClick={() => onDeleteContact(id)}>
            Delete
          </Button>
        </Item>
      ))}
    </ul>
  ) : (
    <Notification message="There no contact with such name" />
  );

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape),
  onDeleteContact: PropTypes.func,
};
export default ContactList;
