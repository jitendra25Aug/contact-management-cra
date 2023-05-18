import { SyntheticEvent, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { contactSliceActions, contactStateType } from "../store/contact-slice";

/**
 * USES REDUX STORE TO ACCESS AND MANAGE CONTACT DATA
 * @returns REACT ELEMENT WHICH DISPLAYS A FORM TO ENTER CONTACT DETAILS
 */
const ContactForm = () => {
    const firstName: string = useSelector((state: contactStateType) => state.userInfo.firstName);
    const lastName: string = useSelector((state: contactStateType) => state.userInfo.lastName);
    const status: string = useSelector((state: contactStateType) => state.userInfo.status);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const nameInputRef = useRef<HTMLInputElement>(null);
    useEffect(()=>{ nameInputRef.current?.focus(); }, []);

    const handleInput = (e: SyntheticEvent<HTMLInputElement>) => {
        const { name, value } = e.currentTarget;
        dispatch(contactSliceActions.handleInputData({ name, value }))
    }

    const handleSubmit = (e: SyntheticEvent) => {
        e.preventDefault();
        dispatch(contactSliceActions.addContact());
        dispatch(contactSliceActions.clearContactData());
        navigate("/");
    }

    return (
        <section className="contact-form">
            <form onSubmit={handleSubmit} className="form">
                <div className="form-inputs">

                    <div className="form-row">
                        <label htmlFor="first-name" className="form-label"> First Name: </label>
                        <input id="first-name" type="text" name="firstName" className="form-input" required ref={nameInputRef}
                            value={firstName} onChange={handleInput} />
                    </div>
                    <div className="form-row">
                        <label htmlFor="last-name" className="form-label">Last Name: </label>
                        <input id="last-name" type="text" name="lastName" required className="form-input"
                            value={lastName} onChange={handleInput} />
                    </div>
                    <div className="form-row">
                        <h4 className="form-label">Status: </h4>
                        <div className="radio-group">
                            <div className="input-group">
                                <input type="radio" id="active" name="status" onChange={handleInput} value="active"
                                    checked={status === "active"} />
                                <label htmlFor="active" className="form-label">Active</label>
                            </div>
                            <div className="input-group">
                                <input type="radio" id="inactive" name="status" onChange={handleInput} value="inactive"
                                    checked={status === "inactive"} />
                                <label htmlFor="inactive" className="form-label">Inactive</label>
                            </div>
                        </div>
                    </div>
                </div>
                <button type="submit" className="btn-block">save contact</button>
            </form>
        </section>
    );
}

export default ContactForm;