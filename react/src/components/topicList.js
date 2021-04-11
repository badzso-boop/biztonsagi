import React from 'react';

import TopicListItem from './topicListItem'

class TopicList extends React.Component {
    constructor(props){
        super(props);

        this.Decided = this.Decided.bind(this);
    }

    Decided(props) {
        this.props.onDecide(props);
    }

    render() {
        return(
        <div>
            {this.props.adatok.map(adat => <TopicListItem 
                                                    key={adat.id} 
                                                    id = {adat.id}
                                                    author = {adat.author}
                                                    title = {adat.title}
                                                    created = {adat.created}
                                                    Decide = {this.Decided}/>)}
        </div>);
    }
}

export default TopicList;