import React from 'react';

class TopicListItem extends React.Component {
    constructor(props){
        super(props);

        this.topicDecide = this.topicDecide.bind(this);
    }

    topicDecide() {
        this.props.Decide(this.props.id);
    }

    render() {
        return(
        <button className="d-block btn btn-primary w-75 mx-auto my-3 topic p-2" id="hover-opacity" onClick={this.topicDecide}>
            <div>
                <h1 className="mt-2 mb-3">{this.props.title}</h1>
                <span className="font-weight-bold text-light"><kbd className="bg-dark text-light p-1 ml-1">{this.props.author}</kbd></span>
                <span className="font-italic"> - {this.props.created}</span>
            </div>
        </button>);
    }
}

export default TopicListItem;