import s from './Contact.module.css';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoPerson } from 'react-icons/io5';
import { MdDelete } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';

const Contact = ({ data: { id, name, number } }) => {
  const dispatch = useDispatch();

  return (
    <div className={s.contactContainer}>
      <div className={s.contactData}>
        <h2 className={s.contactName}>
          <IoPerson size="20" />
          {name}
        </h2>
        <p className={s.contactPhone}>
          <FaPhoneAlt size="20" />
          {number}
        </p>
      </div>
      <button
        className={s.contactBtnDelete}
        onClick={() => dispatch(deleteContact(id))}
      >
        <MdDelete size="20" />
        Delete
      </button>
    </div>
  );
};

export default Contact;
