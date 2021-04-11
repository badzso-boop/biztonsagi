import React from 'react';

import Cikk from '../components/cikk';

var adat = [];

//cikkek fetch -> hash -> kilistázása nagy Hash-ből -> mindegyik egy component
class Cikkek extends React.Component {
    constructor(props) {
        super(props);

        this.fetchCikk = this.fetchCikk.bind(this);
    }

    componentDidMount() {
        this.fetchCikk();
    }
 
    fetchCikk() {
        adat = [];
        fetch('/nodejs/cikkAPI/getCikk', {method: 'GET', headers: {'Content-type':'application/json'}}).then(res => {
            return res.json();
          }).then(data => {
            var result = Array.from(data);
            for(let i = 0; i < result.length; i++)
            {
                console.log(result[i].date);
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
        <div>
            <h1 className="text-center my-3">Tudás<kbd className="bg-success p-1 ml-1">ON</kbd> cikkei</h1>
            <hr className="w-75 mx-auto my-4" />
            <Cikk adatok={adat} status={this.props.onBelepes}/>
        </div>);
    }
}

export default Cikkek;