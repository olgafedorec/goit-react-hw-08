import css from "./AppDescription.module.css";
import { ImAddressBook } from "react-icons/im";

export default function AppDescription() {
    return (
       <div className={css.container}>
       <h2 className={css.title}>Welcome to the Phone book application {<ImAddressBook size={30}/>}</h2> 
       <p className={css.text}>Here you can create, edit and delete contacts of your friends</p>
       </div>
    )
}