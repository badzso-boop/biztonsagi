import React from 'react';
import {useRef} from 'react';

function SignUp(props) {
    const nevRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordRef2 = useRef();

    function signupHandler(event) {
        event.preventDefault();

        const enteredNev = nevRef.current.value;
        const enteredEmail = emailRef.current.value;
        const enteredPassword = passwordRef.current.value;
        const enteredPassword2 = passwordRef2.current.value;

        const signupData = {
            nev: enteredNev,
            email: enteredEmail,
            password: enteredPassword,
            password2: enteredPassword2
        }

        props.OnSignUp(signupData);
    }

    return (    
        <div className="col-xl-6 p-3">
            <h1 className="text-center py-3 text-success font-weight-bold">Regisztráció</h1>
            <form className="list-group w-100 mx-auto" id="list"  onSubmit={signupHandler}>
                <input className="list-group-item hatter text-dark" type = "name" name = "nev" placeholder = "Név" ref={nevRef}/>
                <input className="list-group-item hatter text-dark" type = "email" name = "email" placeholder = "Email" ref={emailRef}/>
                <input className="list-group-item hatter text-dark" type = "password" name = "password" placeholder = "Jelszó" ref={passwordRef}/>
                <input className="list-group-item hatter text-dark" type = "password" name = "password2" placeholder = "Jelszó újra" ref={passwordRef2}/>
                {props.hiba === '' ? <div></div> : React.createElement('div', {className:"my-1 p-0 text-center alert alert-danger"}, props.hiba)}
                <button id="hover-opacity" className="btn btn-success py-3 w-100 text-dark my-3 border-1" type = "submit"><h4 className="text-light m-0">Regisztráció!</h4></button>
            </form>
        </div>
      );
}

export default SignUp;