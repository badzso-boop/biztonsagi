import React from 'react';

class TopicCommentListItem extends React.Component {
    constructor(props){
        super(props)
    }

    render()
    {
        return(
            <div className="lightblue w-100 border border-1 border-primary rounded mt-4">
                <div className="bg-primary py-2">
                <span className="d-inline font-weight-bold text-light ml-2"><kbd className="bg-dark text-light p-1 ml-1">{this.props.author}</kbd></span>
                    <span className="d-inline font-italic pl-2"> - {this.props.created}</span>
                    <span className="d-inline float-right font-weight-bold mr-2">#{this.props.id}</span>
                </div>
                <h5 className="p-3 font-weight-normal">{this.props.content}</h5>
            </div>
        );
    }
}

export default TopicCommentListItem;