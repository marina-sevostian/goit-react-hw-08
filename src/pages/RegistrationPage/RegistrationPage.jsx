import { Link } from 'react-router-dom';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import s from './RegistrationPage.module.css';

const RegistrationPage = () => {
  return (
    <div className={s.wrapRegister}>
      <div className={s.boxRegister}>
        <p className={s.welcome}>
          Welcome to Phonebook! Please fill out the registration form to start
          using all the features!
        </p>
        <h2 className={s.title}>Register</h2>
        <p className={s.text}>
          Your data is safe with us. We value your privacy. Please fill out the
          form below to register for Phonebook.
        </p>
        <RegistrationForm />
        <p className={s.text}>
          Already have an account?{' '}
          <Link className={s.linkLogin} to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegistrationPage;
