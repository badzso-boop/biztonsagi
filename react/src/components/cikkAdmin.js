import React from 'react';
import CikkAdd from './cikkAdd';

import CikkAdminItem from './cikkAdminItem';

class CikkAdmin extends React.Component {
    constructor(props) {
        super(props);

        this.allowHandler = this.allowHandler.bind(this);
    }

    allowHandler() {
        this.props.onAllowed();
    }

    //author:
    //id:
    //article_title:
    //content:
    //date:
    render() {
        return (
            <div>

                <ul className="m-0 p-0">
                {this.props.adatok.map(adat => <CikkAdminItem 
                                                    key={adat.id} 
                                                    id = {adat.id} 
                                                    title = {adat.article_title}
                                                    cikk = {adat.content}
                                                    date = {adat.date}
                                                    author ={adat.author}
                                                    edit = {adat.editable}
                                                    user = {this.props.status[0].rang} 
                                                    onAllow = {this.allowHandler}/>)}
                </ul>
            </div>
        );
    }
}

export default CikkAdmin;