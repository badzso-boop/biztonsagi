import React from 'react';
import parse from 'html-react-parser';

class CikkAdminItem extends React.Component {
    constructor(props) {
        super(props);

        this.allowArticle = this.allowArticle.bind(this);
        this.deleteArticle = this.deleteArticle.bind(this);
    }

    allowArticle() {

        const kuldData = {
            id: this.props.id
        }

        fetch('/nodejs/cikkAPI/moderateAllowCikk', {method: 'POST', body: JSON.stringify(kuldData, null, 2), headers: {'Content-type':'application/json'}}).then(res => {
            return res.json();
          }).then(data => {
            switch(data.success)
            {
                case 0:
                    console.log('Hiányzó adatok!');
                    break;
                case 1:
                    console.log('A mentés sikerült!');
                    this.props.onAllow();
                    break;
                case 2:
                    console.log('Adatbázis hiba!');
                    break;
                default:
                    break;
            }
          }).catch(err => {
            console.log('Hiba: ' + err);
          });
    }

    deleteArticle() {
        const kuldData = {
            id: this.props.id
        }

        fetch('/nodejs/cikkAPI/moderateDeleteCikk', {method: 'POST', body: JSON.stringify(kuldData, null, 2), headers: {'Content-type':'application/json'}}).then(res => {
            return res.json();
          }).then(data => {
            switch(data.success)
            {
                case 0:
                    console.log('Hiányzó adatok!');
                    break;
                case 1:
                    console.log('A mentés sikerült!');
                    this.props.onAllow();
                    break;
                case 2:
                    console.log('Adatbázis hiba!');
                    break;
                default:
                    break;
            }
          }).catch(err => {
            console.log('Hiba: ' + err);
          });
    }

    render() {
        return (
            <div className="bg-light m-2 p-4">
                <h3 id="cikktitle">{this.props.title}</h3>
                <div className="my-2">{parse(this.props.cikk)}</div>
                <span className="font-weight-bold text-light d-inline"><kbd className="bg-success p-1 ml-1">{this.props.author}</kbd></span>
                <span className="font-italic d-inline">  {this.props.date}</span>
                <div><button onClick={this.allowArticle} id="hover-opacity" className="btn btn-info my-3 ml-1 mr-2 text-light" type = "submit"><i class="fa fa-check" aria-hidden="true"></i></button><button onClick={this.deleteArticle} className="btn btn-danger my-3 mr-2 ml-1 text-light" type = "submit"><i class="fa fa-times" aria-hidden="true"></i></button></div>
            </div>
        );
    }
}

export default CikkAdminItem;
