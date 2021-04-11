import React from 'react';
import Redirect from 'react-router';

class TopicCommentAdd extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            comment: ''
        }

        this.commentAdd = this.commentAdd.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
        this.vissza = this.vissza.bind(this);
    }

    vissza() {
        this.props.Vissza(); 
    }

    changeHandler(event) {
        this.setState({comment: event.target.value})
        this.forceUpdate();
    }

    commentAdd() {
        const commentKuldd = {
            comment: this.state.comment,
            topic_id: this.props.topic_id
        };

        //fetch comment
        fetch('/nodejs/forumAPI/addForum', {method: 'POST', body: JSON.stringify(commentKuldd, null, 2), headers: {'Content-type':'application/json'}}).then(res => {
            return res.json();
        }).then(data => {
            switch(data.success)
            {
                case 0:
                    console.log('Hiányzó adatok!');
                    break;
                case 1:
                    console.log('A mentés sikerült!');
                    this.setState({comment: ''})
                    this.props.onSave(this.props.topic_id);
                    this.forceUpdate();         
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
        return (
            <div className="m-2 d-block">
                <h1 className="d-inline text-primary font-weight-bold">Hozzászólás</h1>
                <br />
                <input className="d-inline list-group-item lightblue text-dark list-group w-50" id="list" type="text" placeholder="Új hozzászólás" onChange={this.changeHandler}/>
                <button className="btn btn-primary my-auto d-inline ml-2" id="hover-opacity" onClick={this.commentAdd}><i class="fa fa-plus" aria-hidden="true"></i></button>
            </div>
        );
    }
}

export default TopicCommentAdd;