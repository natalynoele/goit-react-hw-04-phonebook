import { titleCase } from "components/helper";
import Notification from "components/Notification";

const ContactList = ({ contacts }) => {
  
  return (
    contacts.length > 0 ? (   contacts.map(({ id, name, number }) => (
    <li key={id}>
      <span>
        {titleCase(name)} {number}
      </span>{' '}
    </li>
  ))) : (<Notification message='We are sorry, but there is no contact with this name' />)
 )
};
export default ContactList;
