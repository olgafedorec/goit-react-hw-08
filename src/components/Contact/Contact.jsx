import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';
import css from './Contact.module.css';
import { BsFillPersonFill, BsFillTelephoneFill } from "react-icons/bs";

export const Contact = ({ contact }) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteContact(contact.id))
    };
    return (
        <div className={css.container}>
            <ul className={css.list}>
                <li className={css.item}><BsFillPersonFill className={css.icon} size={20} /> {contact.name}</li>
                <li className={css.item}><BsFillTelephoneFill /> {contact.number}</li>
            </ul>
            <button className={css.button} onClick={handleDelete}>Delete</button>
        </div>
    )
}