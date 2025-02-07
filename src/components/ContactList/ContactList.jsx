import Contact from '../Contact/Contact';
import s from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contacts/selectors';

const ContactList = () => {
  const filterContactList = useSelector(selectFilteredContacts);
  return (
    <ul className={s.contactList}>
      {filterContactList.map(data => (
        <li className={s.contactItem} key={data.id}>
          <Contact data={data} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
