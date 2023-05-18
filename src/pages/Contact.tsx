import { ContactList } from "../components";
import { Link } from "react-router-dom";

/**
 * DISPLAYS THE LIST OF CONTACTS AND A BUTTON TO ADD A CONTACT
 */
const Contact = ()=>{
    return (
        <section className="contact-page">
            <Link to="/create-contact" className="contact-btn">Create Contact</Link>
            <ContactList />
        </section>
    );
}

export default Contact;