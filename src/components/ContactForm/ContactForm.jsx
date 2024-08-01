import { Formik, Form, Field } from 'formik'
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsOps';
import css from './ContactForm.module.css';


export const ContactForm = () => {
    const dispatch = useDispatch();
    const handleSubmit = (values, actions) => {
      dispatch(addContact(values));
      actions.resetForm();
   }

    return (   
           <Formik initialValues={{
            name: "",
            number: "",
           }}
           onSubmit={handleSubmit}
           >
             <Form className={css.form}>
       <div className={css.formGroup}>
       <label >Name</label>
        <Field className={css.input} name="name" type="text" />
       </div>
       <div className={css.formGroup}>
       <label >Number</label>
       <Field className={css.input} type="text" name="number" />
       </div>
        <button type="submit">Add contact</button>  
            </Form>
           </Formik>
    )
}