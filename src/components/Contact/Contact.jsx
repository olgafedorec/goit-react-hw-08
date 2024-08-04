import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contactsOps';
import { openModal } from '../../redux/contacts/contactsSlice';
import ContactModal from '../ContactModal/ContactModal';
import css from './Contact.module.css';
import { BsFillPersonFill, BsFillTelephoneFill } from "react-icons/bs";


export const Contact = ({ contact }) => {
    const dispatch = useDispatch();

    const handleEdit = () => {
        dispatch(openModal(contact));
    };

    const handleDelete = () => {
        dispatch(deleteContact(contact.id))
    };

    return (
        <div className={css.container}>
            <ul className={css.list}>
                <li className={css.item}><BsFillPersonFill size={20} /> {contact.name}</li>
                <li className={css.item}><BsFillTelephoneFill /> {contact.number}</li>
            </ul>
            <div className={css.buttonWrapper}>
            <button className={css.button} onClick={handleEdit}>Edit</button>
            <button className={css.button} onClick={handleDelete}>Delete</button>
            <ContactModal/>
            </div>
        </div>
    )
}