import React, {useState} from "react";
import { Redirect } from "react-router-dom";

import { auth, db } from "../../config/firebase";
import { Button, FormControl, TextField } from "@material-ui/core";

//material UI modules 

const Register = () => {
    const [currentUse, setCurrentUser] = useState(null);    
    const handleSubmit = (e) => {
      e.preventDefault();    
      const { email, password, username } = e.target.elements;
      try {
        auth.createUserWithEmailAndPassword(email.value, password.value).catch(
            function(error){
                var errorCode = error.code
                //errod message
                 var errorMessage = error.message
                //show error message
                alert("Error : " + errorMessage);
            }
        ).then(
            setCurrentUser(true)
        )    
        
      } catch (error) {
        alert(error);
      }
    };
    if (currentUse) {
        auth.currentUser.sendEmailVerification().then(()=>{
            alert('sent email')
            auth.onAuthStateChanged(
                function(user) {
                    if(user){
                        var emailVerified = user.emailVerified;
                        if (emailVerified== true){
                            return <Redirect to="/" />
                        }
        } else {
            console.log("No user found")
        }
    }
); 
        })
    }
    return (
      <>
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <label for="email">Email</label>
          <input type="email" name="email" placeholder="Email" />
          <label for="password">Password</label>
          <input type="password" name="password" placeholder="Password" />
          <button type="submit">Submit</button>
        </form>
      </>
    );
}

export default Register;