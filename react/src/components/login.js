import React, {useRef} from 'react';

function LoginForm(props) {
    const emailRef = useRef();
    const passwordRef = useRef();

    function loginHandler(event) {
        event.preventDefault();

        const enteredEmail = emailRef.current.value;
        const enteredPassword = passwordRef.current.value;

        const loginData = {
            email: enteredEmail,
            password: enteredPassword
        }

        props.OnLogin(loginData);
    }

    return (
        <div className="col-xl-6 p-3">
            <h1 className="text-center py-3 text-success font-weight-bold">Belépés</h1>
            <form className="list-group w-100 mx-auto" id="list" onSubmit={loginHandler}>
                <input className="list-group-item hatter text-dark" type = "email" name = "email" placeholder = "Email" ref={emailRef}/>
                <input className="list-group-item hatter text-dark" type = "password" name = "password" placeholder = "Jelszó" ref={passwordRef}/>
                {props.hiba === '' ? <div></div> : React.createElement('div', {className:"my-1 p-0 text-center alert alert-danger"}, props.hiba)}
                <button id="hover-opacity" className="btn btn-success py-3 w-100 text-dark my-3 border-1" type = "submit"><h4 className="text-light m-0">Belépés!</h4></button>
            </form>
        </div>
    );
}

export default LoginForm;