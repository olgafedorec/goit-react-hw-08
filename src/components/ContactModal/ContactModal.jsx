import { useSelector, useDispatch } from 'react-redux';
import Modal from 'react-modal';
import { editContact } from '../../redux/contacts/operations';
import { selectIsModalOpen, selectEditingContact } from '../../redux/contacts/selectors';
import { closeModal } from '../../redux/contacts/slice';
import { Formik, Form, Field } from 'formik';
import { BsX } from "react-icons/bs";
import css from './ContactModal.module.css';

export default function ContactModal() {
    const dispatch = useDispatch();
    const isModalOpen = useSelector(selectIsModalOpen);
    const editingContact = useSelector(selectEditingContact);
    
    const handleSave = (values) => {
      const updatedData = { name: values.name, number: values.number}
      dispatch(editContact({ contactsId: values.id, updatedData }));
      dispatch(closeModal());
    }
    
    return (
        <Modal
        isOpen={isModalOpen}
        onRequestClose={() => dispatch(closeModal())}
        className={css.modal}
        >
          {editingContact && (<Formik initialValues={editingContact}
          onSubmit={handleSave}
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
        <button className={css.button} type="submit" >Save edits</button>  
            </Form>
          </Formik>)}
          <button className={css.buttonClose} onClick={() => dispatch(closeModal())}><BsX size={25}/></button>
        </Modal>
    )
    
}