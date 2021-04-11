import React from 'react';

import TopicCommentAdd from './topicCommentAdd';
import TopCommentListItem from './topicCommentListItem';

class TopicCommentList extends React.Component {
    constructor(props){
        super(props)

        this.reload = this.reload.bind(this);
        this.back = this.back.bind(this);
    }

    reload(props) {
        this.props.onReload(props);
    }

    back() {
	console.log('egyel feljebb');
        this.props.onBack();
    }

    render()
    {
        return(
            <div>
		{this.props.onShow ? <div><button onClick={this.back} id="hover-opacity" className="d-inline btn btn-primary text-light mb-3 mr-2"><i class="fa fa-arrow-left" aria-hidden="true"></i></button><TopicCommentAdd topic_id={this.props.topicID} onSave={this.reload} /></div> : <button onClick={this.back} id="hover-opacity" className="d-inline btn btn-primary text-light mb-3 mr-2"><i class="fa fa-arrow-left" aria-hidden="true"></i></button>}
                {this.props.adatok.map(adat => <TopCommentListItem 
                                                    key={adat.id} 
                                                    id = {adat.id}
                                                    topic_id = {adat.topic_id}
                                                    author = {adat.author}
                                                    content = {adat.content}
                                                    created = {adat.created} />)}
            </div>
        );
    }
}

export default TopicCommentList;