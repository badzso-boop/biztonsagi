import React from 'react';

import Login from '../components/login';
import Signup from '../components/signup';

var loginHiba = '';
var signupHiba = '';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        this.loginHandler = this.loginHandler.bind(this);
        this.signupHandler = this.signupHandler.bind(this);
    }

    loginHandler(props) {
        const loginData = {
            email: props.email,
            password: props.password
        };

        fetch('/nodejs/loginAPI/login', {method: 'POST', body: JSON.stringify(loginData, null, 2), headers: {'Content-type':'application/json'}}).then(res => {
            return res.json();
        }).then(data => {
            switch(data.success) {
                case 0:
                    loginHiba = 'Kérem töltse ki az üres mezőket!';
                    break;
                case 1:
                    loginHiba = 'Hibás email cím vagy jelszó';
                    break;
                case 2:
                    window.location.replace('/nodejs/cikk');
                    break;
                default:
                    break;
            }
            this.forceUpdate();
        }).catch(err => {
            console.log('Hiba: ' + err);
        });
    }

    signupHandler(props) {
        const signupData = {
            nev: props.nev,
            email: props.email,
            password: props.password,
            password2: props.password2
        };

        fetch('/nodejs/loginAPI/signup', {method: 'POST', body: JSON.stringify(signupData, null, 2), headers: {'Content-type':'application/json'}}).then(res => {
            return res.json();
        }).then(data => {
            switch(data.success) {
                case 0:
                    signupHiba = 'Kérem töltse ki az üres mezőket!';
                    break;
                case 1:
                    signupHiba = 'Ezzel az email címmel már regisztráltak fiókot!';
                    break;
                case 2:
                    signupHiba = 'A két jelszó nem egyezik meg!';
                    break;
                case 3:
                    window.location.replace('/nodejs/cikk');
                    break;
                default:
                    break;
            }
            this.forceUpdate();
        }).catch(err => {
            console.log('Hiba: ' + err);
        });
    }

    render() {
        return (
          <div className="container-fluid row p-1 m-0 hely">
              <Login OnLogin={this.loginHandler} hiba={loginHiba}/>
              <Signup OnSignUp={this.signupHandler} hiba={signupHiba}/>
          </div>  
        );
    }
}

export default LoginPage;