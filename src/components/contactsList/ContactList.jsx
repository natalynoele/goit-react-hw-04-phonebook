import PropTypes from 'prop-types';
import titleCase from 'functions/titleCase';
import Notification from 'components/Notification';
import Button from 'components/button/Button';
import { Span, Item } from './ContactList_Style';

const ContactList = ({ contacts, onDeleteContact }) => {
  
  return (contacts.length > 0 && 
    <ul>
      {contacts.map(({ id, name, number }) => (
        <Item key={id}>
          <Span>
            {titleCase(name)} {number}
          </Span>
          <Button type="button" clickBtn={onDeleteContact} id={id}>
            Delete
          </Button>
        </Item>
      ))}
    </ul>
  )
}  


ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape),
  onDeleteContact: PropTypes.func,
};
export default ContactList;
