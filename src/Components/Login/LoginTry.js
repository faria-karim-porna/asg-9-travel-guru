import React, { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import { initializeLoginFramework, handleGoogleSignIn, handleSignOut, handleFbSignIn, createUserWithEmailAndPassword, signInWithEmailAndPassword } from './loginManager';
import './Login.css';
import fbLogo from '../../Icon/fb.png';
import gLogo from '../../Icon/google.png';



function LoginTry() {
  const [newUser, setNewUser] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [checkPassword, setCheckPassword] = useState('');

  const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    photo: ''
  });

  initializeLoginFramework();

  const [loggedInUser, setLoggedInUser ] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const googleSignIn = () => {
      handleGoogleSignIn()
      .then(res => {
        handleResponse(res, true);
      })
  }

  const fbSignIn = () => {
      handleFbSignIn()
      .then(res => {
        handleResponse(res, true);
      })

  }

  const signOut = () => {
      handleSignOut()
      .then(res => {
          handleResponse(res, false);
      })
  }

  const handleResponse = (res, redirect) =>{
    setUser(res);
    console.log(res);
    setLoggedInUser(res);
    if(redirect){
        history.replace(from);
    }
  }
 
  const handleBlur = (e) => {
    console.log(e.target.value);
    let isFieldValid = true;
    console.log(e.target.name);
    if(e.target.name === 'email'){
      isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
      setEmailError(!isFieldValid);
    }
    if(e.target.name === 'password'){
      const isPasswordValid = e.target.value.length > 6;
      const passwordHasNumber =  /\d{1}/.test(e.target.value);
      isFieldValid = isPasswordValid && passwordHasNumber;
      setPasswordError(!isFieldValid);
      setCheckPassword(e.target.value);
    }
    if(e.target.name=== 'confirm_password')
    {

        isFieldValid = e.target.value == checkPassword;
        console.log(checkPassword);
        console.log(e.target.value);
        console.log(isFieldValid);
        setConfirmPasswordError(!isFieldValid);
    }
    if(isFieldValid){
      const newUserInfo = {...user};
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo)
    }
  }
  const handleSubmit = (e) => {
    if(newUser && user.email && user.password){
        user.name=user.firstname+ ' '+user.lastname;
        console.log("full",user.name);
      createUserWithEmailAndPassword(user.name, user.email, user.password)
      .then(res => {
        handleResponse(res, true);
      })
    }

    if(!newUser && user.email && user.password){
      signInWithEmailAndPassword(user.email, user.password)
      .then(res => {
        handleResponse(res, true);
      })
    }
    e.preventDefault();
  }

  return (
      <div className="signup-form">
    <form onSubmit={handleSubmit}>
		<p className="hint-text">Create an account</p>
		
        {newUser && <div className="form-group">
        	<input type="text" onBlur={handleBlur} className="form-control input-lg" name="firstname" placeholder="First Name" required="required"/>
        </div>}
        {newUser && <div className="form-group">
        	<input type="text" onBlur={handleBlur} className="form-control input-lg" name="lastname" placeholder="Last Name" required="required"/>
        </div>}
		<div className="form-group">
        	<input type="email" onBlur={handleBlur} className="form-control input-lg" name="email" placeholder="Username or Email" required="required"/>
        </div>

        {emailError && <p style={{color: 'red'}}>Email is not valid</p>}

		<div className="form-group">
            <input type="password" onBlur={handleBlur} className="form-control input-lg" name="password" placeholder="Password" required="required"/>
        </div>

        {passwordError && <p style={{color: 'red'}}>Password should have at least 7 characters including at least one number</p>}
		{newUser && <div className="form-group">
            <input type="password" onBlur={handleBlur} className="form-control input-lg" name="confirm_password" placeholder="Confirm Password" required="required"/>
        </div>}
        {
            confirmPasswordError && <p style={{color: 'red'}}>Password is not correct</p>
        }  
        <div className="form-group">
            <button type="submit" className="btn btn-lg btn-block signup-btn">{newUser ? 'Create an account' : 'Log-in'}</button>
        </div>
        {newUser ? <div className="text-center">Already have an account? <a href="#" onClick={() => setNewUser(!newUser)}>Login</a></div>:<div className="text-center">Don't have an account? <a href="#" onClick={() => setNewUser(!newUser)}>Create an account</a></div>}
    </form>

    <p style={{color: 'red'}}>{user.error}</p>
      { user.success && <p style={{color: 'green'}}>User { newUser ? 'created' : 'Logged In'} successfully</p>}
    
    <div className="or-seperator"><b>or</b></div>
    <div className="social-btn text-center">
			<a href="#" className="btn btn-lg" onClick={fbSignIn}><img src = {fbLogo} className ="icons" /> Facebook</a>
            <br/>
			<a href="#" className="btn btn-lg" onClick={googleSignIn}><img src = {gLogo} className ="icons" /> Google</a>
	</div>
</div>
  
  );
}

export default LoginTry;
