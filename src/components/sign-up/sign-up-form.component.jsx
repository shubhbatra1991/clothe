import { useState } from "react";
import { createAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
};

const SignUpForm = () => {
 const [formFields, setFormFields] = useState(defaultFormFields);
 const { displayName, email, password, confirmPassword } = formFields;

 console.log(formFields);

 const handleSubmit = async (event) => {
    event.preventDefault();

    if(password !== confirmPassword){
        alert("passwords do not match");
        return;
    }

    try {
        const response = await createAuthUserWithEmailAndPassword(email, password);
        console.log(response);
    } catch(error) {
        console.log('user creation encountered an error',error);
    }



 };



 const handleChange = (event) => {
    const {name, value} = event.target;

    setFormFields({...formFields, [name]: value });

 };


    return (
        <div>
            <h1>Sign up with your email and password.</h1>
            <form onSubmit={ handleSubmit }>
                <label>Display Name</label>
                <input required type="text" onChange={handleChange} name = "displayName" value={displayName} />

                <label>Email</label>
                <input required type="email" onChange={handleChange} name = "email" value={email}    />

                <label>Password</label>
                <input required type="password" onChange={handleChange} name = "password" value={password}   />

                <label>Confirm Password</label>
                <input required type="password" onChange={handleChange} name = "confirmPassword" value={confirmPassword}   />

                <button type="submit">Sign Up</button>

            </form>
        </div>
    )
};

export default SignUpForm;