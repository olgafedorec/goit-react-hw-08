import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import toast, { Toaster } from "react-hot-toast";
import { addContact } from '../../redux/contacts/operations';
import css from './ContactForm.module.css';

export const ContactForm = () => {
    const dispatch = useDispatch();
    const handleSubmit = (values, actions) => {
      const { name, number } = values;
      if(!name.trim() || !number.trim()) {
        toast.error('All fields are required!');
        return;
      }
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
        <button type="submit" className={css.button}>Add contact</button>
        <Toaster/>
            </Form>
           </Formik>
    )
}