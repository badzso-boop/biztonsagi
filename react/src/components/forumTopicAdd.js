import React from 'react';

class forumTopicAdd extends React.Component {
    constructor(props){
        super(props);

	console.log(props);

        this.state = {
            cim: ''
        }

        this.changeHandler = this.changeHandler.bind(this);
        this.topicSave = this.topicSave.bind(this);
    }

    changeHandler(event) {
        this.setState({cim: event.target.value});
    }

    topicSave() {
        //fetch a topichoz
        const kuldData = {
            title: this.state.cim
        }

        fetch('/nodejs/forumAPI/addTopic', {method: 'POST', body: JSON.stringify(kuldData, null, 2), headers: {'Content-type':'application/json'}}).then(res => {
            return res.json();
        }).then(data => {
            switch(data.success)
            {
                case 0:
                    console.log('Hiányzó adatok!');
                    break;
                case 1:
                    console.log('A mentés sikerült!');
                    this.setState({cim: ''});
                    this.props.onUpdate();   
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
	<span>
	{this.props.onShow ? <div className="m-2 d-block">
            <h1 className="pt-3 text-primary font-weight-bold">Téma hozzáadása</h1>
            <input className="d-inline list-group-item lightblue text-dark list-group w-50" id="list-invert" type="text" placeholder="Új téma" onChange={this.changeHandler}/>
            <button className="btn btn-primary my-auto d-inline ml-2" id="hover-opacity" onClick={this.topicSave}><i class="fa fa-plus" aria-hidden="true"></i></button>
        </div> : <span></span>}</span>
	);
    }
}

export default forumTopicAdd;