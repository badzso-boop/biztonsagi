import React from 'react';

import CikkItem from './cikkItem';

class Cikk extends React.Component {
    constructor(props) {
        super(props);
    }

    //author:
    //id:
    //article_title:
    //content:
    //date:
    render() {
        return (
            <div className="hely">

                <ul className="m-0 p-0">
                {this.props.adatok.map(adat => <CikkItem 
                                                    key={adat.id} 
                                                    id = {adat.id} 
                                                    title = {adat.article_title}
                                                    cikk = {adat.content}
                                                    date = {adat.date}
                                                    author ={adat.author}
                                                    edit = {adat.editable}/>)}
                </ul>
            </div>
        );
    }
}

export default Cikk;