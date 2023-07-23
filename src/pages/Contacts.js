import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectLoading, selectError } from '../redux/selectors';
import { fetchContacts } from '../redux/operations';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { Filter } from '../components/Filter/Filter';
import { ContactList } from '../components/ContactList/ContactList';
import { Helmet } from 'react-helmet';

const Contacts = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div
      className="container"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#010101',
      }}
    >
      <Helmet>
        <title>Contacts</title>
      </Helmet>
      <h1 className="section_title">Phonebook</h1>
      <ContactForm />
      <h2 className="section_title">Contacts </h2>
      {!contacts.length ? (
        <p>There are no contacts in your phonebook</p>
      ) : (
        <Filter />
      )}
      {loading && <p>Loading contacts...</p>}
      {error && <p>Error {error}</p>}
      <ContactList />
    </div>
  );
};

export default Contacts;
