import React from 'react';

import CikkAdmin from '../components/cikkAdmin';

var adat = [];

var kamu = [
    {
        id: 0,
        name: 'Kamu Profil',
        rang: ''
    }
];

class AdminPage extends React.Component {
    constructor(props) {
        super(props);

        this.fetchAdmin = this.fetchAdmin.bind(this);
    }

    componentDidMount() {
        this.fetchAdmin();
    }

    fetchAdmin() {
        adat = [];
        fetch('/nodejs/cikkAPI/moderateGetCikk', {method: 'GET', headers: {'Content-type':'application/json'}}).then(res => {
            return res.json();
          }).then(data => {
            var result = Array.from(data);
            for(let i = 0; i < result.length; i++)
            {
                let daa = new Date(result[i].date);
                let year =daa.getFullYear();
                let month = +daa.getMonth() + 1;
                let day = daa.getDate();
                let hour = daa.getHours();
                let minute = daa.getMinutes();
                let second = daa.getSeconds();
                month = (month < 10) ? '0' + month : month;
                day = (day < 10) ? '0' + day : day;
                hour = (hour < 10) ? '0' + hour : hour;
                minute = (minute < 10) ? '0' + minute : minute;
                second = (second < 10) ? '0' + second : second;
                const currentDate = daa.getFullYear() + "." + month + "." + day + " - " + hour + ":" + minute + ":" + second;
                result[i].date = currentDate;
                adat.push(result[i]);
            }
            
            this.forceUpdate();
          }).catch(err => {
            console.log('Hiba: ' + err);
          });
    }

    render() {
        return (
            <div className="hely">
                <h1 className="text-center my-3" >Tudás<kbd className="bg-success p-1 ml-1" >ON</kbd> moderátor</h1>
                <hr className="w-75 mx-auto my-4" />
                <h2>Jóváhagyásra vár:</h2>
                <CikkAdmin adatok={adat} status={kamu} onAllowed={this.fetchAdmin}/>
            </div>
        );
    }
}

export default AdminPage;