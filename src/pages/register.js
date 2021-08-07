import React, {useState} from "react";
import Link from "@material-ui/core/Link"
import firebase from "firebase";

//firebase configuration
import firebaseconfig from "../config/firebase";

const Register = () => {
    
    //use state
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [Username, setUsername] = useState(null);
    const [signUpError, setSignUpError] = useState(false);

    //db
    const db = firebaseconfig.firestore().collection("User");

    //handle the states 
    const handleUsernameChange = (event)=>{
        const target = event.target;
        const value = event.value;

        setUsername(value);
    }

    const handleEmailChange = (event)=>{
        const target = event.target;
        const value = event.value;

        setEmail(value);
    }

    const handlePasswordChange = (event) =>{
        const target = event.target;
        const value = event.value;
        setPassword(value);
    }

    //handle submission
    const handleSubmit = () => {

        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in 
            var user = userCredential.user;
            //sign in to db
            console.log(user);
            db.doc(user.uid).set({
                Username: Username,
                email: user.email,
                uid: user.uid
            })

        })
        .catch((error) => {
             var errorCode = error.code;
            var errorMessage = error.message;
            setSignUpError(errorMessage);
            
        });
    }

    return(
        //put all the html and form portion here
        
    )
}
export default Register;