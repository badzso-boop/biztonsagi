import React from 'react';

import ForumTopicAdd from '../components/forumTopicAdd';
import TopicList from '../components/topicList';
import TopicCommentList from '../components/TopicCommentList';


var adminData = [];

var topicCommentData = [];

var show = false;
var userD = false;

var topicId = -1;

class Forum extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            topic_id: -1
        }

        this.fetchAdmin = this.fetchAdmin.bind(this);
        this.getThisTopic = this.getThisTopic.bind(this);
        this.update = this.update.bind(this);
    }

    componentDidMount() {
        this.fetchAdmin();
    }

    fetchAdmin() {
        //fetch topics -> adminData
        adminData = [];
        fetch('/nodejs/forumAPI/getTopic', {method: 'GET', headers: {'Content-type':'application/json'}}).then(res => {
            return res.json();
          }).then(data => {
            var result = Array.from(data);
            for(let i = 0; i < result.length; i++)
            {
                console.log(result[i].created);
                let daa = new Date(result[i].created);
                let year =daa.getFullYear();
                let month = +daa.getMonth() + 1;
                let day = daa.getDate();
                let hour = daa.getHours();
                let minute = daa.getMinutes();
                let second = daa.getSeconds();
                month = (month < 10) ? '0' + month : month;
                day = (day < 10) ? '0' + day : day;
                hour = (hour < 10) ? '0' + hour : hour;
                minute = (minute < 10) ? '0' + minute : minute;
                second = (second < 10) ? '0' + second : second;
                const currentDate = daa.getFullYear() + "." + month + "." + day + " - " + hour + ":" + minute + ":" + second;
                
                result[i].created = currentDate;
                adminData.push(result[i]);              
            }
            this.forceUpdate();
          }).catch(err => {
            console.log('Hiba: ' + err);
          });
    }

    getThisTopic(props) {
        topicId = props
        show = true;
        this.forceUpdate();
        //fetch comments -> topicCommentData
        topicCommentData = [];
        fetch(`/nodejs/forumAPI/getForum/${props}`, {method: 'GET', headers: {'Content-type':'application/json'}}).then(res => {
            return res.json();
          }).then(data => {
            var result = Array.from(data);
            for(let i = 0; i < result.length; i++)
            {
                console.log(result[i].created);
                let daa = new Date(result[i].created);
                let year =daa.getFullYear();
                let month = +daa.getMonth() + 1;
                let day = daa.getDate();
                let hour = daa.getHours();
                let minute = daa.getMinutes();
                let second = daa.getSeconds();
                month = (month < 10) ? '0' + month : month;
                day = (day < 10) ? '0' + day : day;
                hour = (hour < 10) ? '0' + hour : hour;
                minute = (minute < 10) ? '0' + minute : minute;
                second = (second < 10) ? '0' + second : second;
                const currentDate = daa.getFullYear() + "." + month + "." + day + " - " + hour + ":" + minute + ":" + second;
                
                result[i].created = currentDate;
                topicCommentData.push(result[i]);              
            }
            this.forceUpdate();
          }).catch(err => {
            console.log('Hiba: ' + err);
          });
    }

    update() {
        this.fetchAdmin();
	show=false;
	this.forceUpdate();
    }

    render() {
        return (
            <div className="hely">
                <h1 className="text-center my-3">Tudás<kbd className="bg-success p-1 ml-1">ON</kbd> témák</h1>
                <hr className="w-75 mx-auto my-4" />
		{this.props.user.user_name === undefined ? userD = false : userD = true}
                {show ? <TopicCommentList onShow={userD} onReload={this.update} topicID = {topicId} onBack={this.update} adatok={topicCommentData}/> : <div><ForumTopicAdd onShow={userD} onUpdate={this.update}/><hr data-content="TÉMÁK" class="hr-text my-5"></hr><TopicList adatok={adminData} onDecide={this.getThisTopic}/></div>}
            </div>
        );
    }
}

export default Forum;