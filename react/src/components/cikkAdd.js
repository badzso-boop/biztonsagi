import React from 'react';
import { useHistory } from 'react-router-dom';

import SunEditor, {buttonList} from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';

class CikkAdd extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            szoveg: '',
            cim: ''
        }

        this.handleBlur = this.handleBlur.bind(this);
        this.clickEvent = this.clickEvent.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
    }

    handleBlur(event, editorContents){ //Get the blur event
        this.setState({szoveg: editorContents});
    }

    changeHandler(event) {
        this.setState({cim: event.target.value});
    }

    clickEvent() {
        const kuldData = {
            title: this.state.cim,
            content: this.state.szoveg
        }

        //cikkek add fetch
        fetch('/nodejs/cikkAPI/addCikk', {method: 'POST', body: JSON.stringify(kuldData, null, 2), headers: {'Content-type':'application/json'}}).then(res => {
            return res.json();
        }).then(data => {
            switch(data.success)
            {
                case 0:
                    console.log('Hiányzó adatok!');
                    break;
                case 1:
                    console.log('A mentés sikerült!');
                    window.location.href = "/nodejs/cikk";            
                    break;
                case 2:
                    console.log('Adatbázis hiba!');
                    break;
                default:
                    break;
            }
        });
    }

    render() {
        return(
            <div className="text-center hely">
                <h1 className="text-center my-3">Tudás<kbd className="bg-success p-1 ml-1">ON</kbd> szerkesztő</h1>
                <hr className="w-75 mx-auto my-4" />
                <input onChange={this.changeHandler} type = "text" name = "title" id = "title" placeholder="Cím" className="row mx-auto w-50 text-center border-1 border-success m-3 font-weight-bold display-5"/>
                <div className="container-fluid p-2 my-4 bg-success">
                    <SunEditor onBlur={this.handleBlur} setOptions={{buttonList: buttonList.formatting}}/>
                </div>
                <button id="hover-opacity" className="btn btn-success py-3 w-100 text-dark my-3 border-1" type = "submit" id="list" onClick={this.clickEvent}><h4 className="text-light m-0">Mentés</h4></button>
            </div>
        );
    }
}

export default CikkAdd;