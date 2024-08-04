import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { ContactList } from "../../components/ContactList/ContactList";
import { ContactForm } from "../../components/ContactForm/ContactForm";
import { SearchBox } from '../../components/SearchBox/SearchBox';
import { Loader } from '../../components/Loader/Loader';
import { Error } from '../../components/Error/Error';
import { fetchContacts } from '../../redux/contacts/contactsOps';
import { selectLoading, selectError } from '../../redux/contacts/contactsSlice';

export default function ContactsPage() {
      const dispatch = useDispatch();

      const loading = useSelector(selectLoading);
  
      const isError = useSelector(selectError);
  
    useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch]);
    return (
        <>
        <h2>Your contacts</h2>
        <ContactForm/>
        {loading && <Loader/>}
        {isError && <Error>Error message</Error>}
        <SearchBox/>
        <ContactList/>
        </>
    )
}