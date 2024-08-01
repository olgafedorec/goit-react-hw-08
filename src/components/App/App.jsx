import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { ContactForm } from '../ContactForm/ContactForm';
import { Loader } from '../Loader/Loader';
import { Error } from '../Error/Error';
import { ContactList } from '../ContactList/ContactList';
import { SearchBox } from '../SearchBox/SearchBox';
import { fetchContacts } from '../../redux/contactsOps';
import { selectLoading, selectError } from '../../redux/contactsSlice';
import css from "./App.module.css";

export default function App() {
  const dispatch = useDispatch();
  
  const loading = useSelector(selectLoading);
  
  const isError = useSelector(selectError);
  
  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch]);
 
  return (
    <div className={css.container}>
  <h1>Phonebook</h1>
  <ContactForm />
  {loading && <Loader/>}
  {isError && <Error>Error message</Error>}
  <SearchBox />
  <ContactList  />
</div>
  )
}