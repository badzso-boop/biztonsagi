import React from 'react';
import parse from 'html-react-parser';

class CikkItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="bg-light m-2 p-4">
                <h3 id="cikktitle">{this.props.title}</h3>
                <div className="my-2">{parse(this.props.cikk)}</div>
                <span className="font-weight-bold text-light d-inline"><kbd className="bg-success p-1 ml-1">{this.props.author}</kbd></span>
                <span className="font-italic d-inline">  {this.props.date}</span>
                {this.props.user === 1 ? <button className="btn btn-danger my-3 ml-1 mr-2 text-light d-block">Törlés</button> : <span></span>}
            </div>
        );
    }
}

export default CikkItem;