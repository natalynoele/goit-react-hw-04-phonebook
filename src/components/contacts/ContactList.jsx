import { titleCase } from "components/helper";

const ContactList = ({ contacts }) => {
  return contacts.map(({ id, name, number }) => (
    <li key={id}>
      <span>
        {titleCase(name)} {number}
      </span>{' '}
    </li>
  ));
};
export default ContactList;
