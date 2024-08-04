import { useDispatch, useSelector } from 'react-redux';
import { lazy, Suspense, useEffect } from 'react';
// import AppBar from '../AppBar/AppBar';
import Layout from '../Layout/Layout';
import { Route, Routes } from "react-router-dom";
import { refreshUser } from '../../redux/auth/authOps';
import { selectIsRefreshing } from '../../redux/auth/authSelectors';
import { Loader } from '../Loader/Loader';
import RestrictedRoute from '../RestrictedRoute';
import PrivateRoute from '../PrivateRoute';
// import { ContactForm } from '../ContactForm/ContactForm';
// import { Loader } from '../Loader/Loader';
// import { Error } from '../Error/Error';
// import { ContactList } from '../ContactList/ContactList';
// import { SearchBox } from '../SearchBox/SearchBox';
// import { fetchContacts } from '../../redux/contacts/contactsOps';
// import { selectLoading, selectError } from '../../redux/contacts/contactsSlice';
// import css from "./App.module.css";
import Modal from 'react-modal';

Modal.setAppElement('#root');

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const RegisterPage = lazy(() => import("../../pages/RegisterPage/RegisterPage"));
const LoginPage = lazy(() => import("../../pages/LoginPage/LoginPage"));
const ContactsPage = lazy(() => import("../../pages/ContactsPage/ContactsPage"));

// export default function App() {
//   const dispatch = useDispatch();
  
//   const loading = useSelector(selectLoading);
  
//   const isError = useSelector(selectError);
  
//   useEffect(() => {
//     dispatch(fetchContacts())
//   }, [dispatch]);
 
//   return (
//     <div className={css.container}>
//   <AppBar/>
//   <h1>Phonebook</h1>
//   <ContactForm />
//   {loading && <Loader/>}
//   {isError && <Error>Error message</Error>}
//   <SearchBox />
//   <ContactList  />
// </div>
//   )
// }

export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing)

  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch])
  
  return isRefreshing ? (<Loader/>) : (
    <Layout>
      <Suspense fallback={null}>
        <Routes>
           <Route path="/" element={<HomePage/>}/>
           <Route path="/register" element={<RestrictedRoute component={<RegisterPage/>} redirectTo="/contacts"/>}/>
           <Route path="/login" element={<RestrictedRoute component={<LoginPage/>} redirectTo="/contacts"/>}/>
           <Route path="/contacts" element={<PrivateRoute component={<ContactsPage/>} redirectTo="/login"/>}/>
        </Routes>
      </Suspense>
    </Layout>
  )
}