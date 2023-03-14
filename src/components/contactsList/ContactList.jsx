import { titleCase } from 'components/helper';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul>
    {contacts.map(({id, name, number}) => (
    <li key={id}>
      <div>
        <span>{titleCase(name)}</span>
        <span>{number}</span>
        <button type="button" onClick={() => onDeleteContact(id)}>
          Delete
        </button>
      </div>
    </li>
    ))}
  </ul>
);
//   const list = contacts.map(({ id, name, number }) => (
//     <li key={id}>
//       <div>
//         <span>{titleCase(name)}</span>
//         <span>{number}</span>
//         <button type="button" onClick={()=> onDeleteContact(id)}>Delete</button>
//       </div>
//     </li>
//   ));
//   return <ul>{list}</ul>;
// };
export default ContactList;
