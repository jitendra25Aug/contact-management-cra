import { RiCloseCircleFill, RiContactsFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { contactSliceActions, contactStateType } from "../store/contact-slice";
import { useNavigate } from "react-router";

/**
 * USES REDUX STORE TO DISPLAY CONTACT LIST
 * @returns REACT ELEMENT DISPLAYED ON EMPTY CONTACT LIST
 * @returns REACT ELEMENT WHICH DISPLAYS LIST OF CONTACTS 
 */
const ContactList = () => {
    const users = useSelector((state: contactStateType) => state.users);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleEdit = (id: string)=>{
        dispatch(contactSliceActions.editContact(id));
        navigate("/create-contact");
    }
    const handleDelete = (id:string) => {
        dispatch(contactSliceActions.deleteContact(id));
    }
    if (!users.length) {
        return (
            <div className="empty-contact-list-container">
                <RiCloseCircleFill />
                <p>
                    No Contact Found <br /> Please add contact from <br /> Create Contact Button
                </p>
            </div>
        );
    }
    return (
        <div className="contact-list">
            {users.map((user) => {
                const { firstName, lastName, status, id } = user;
                return (
                    <div key={id} className="contact-wrapper">
                        <div className="user-container">
                            <RiContactsFill className="user-img" />
                            <div className="user-info">
                                <div>
                                    <span>Name:</span>
                                    <p className="user-name">{firstName} {lastName}</p>
                                </div>
                                <p className="user-status"><span>Status:</span>{status}</p>
                            </div>
                        </div>
                        <div className="btn-container">
                            <button type="button" onClick={()=>handleEdit(id)} className="btn-success">Edit</button>
                            <button type="button" onClick={()=>handleDelete(id)} className="btn-danger">Delete</button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
export default ContactList;