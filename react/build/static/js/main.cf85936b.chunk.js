(this.webpackJsonptudason=this.webpackJsonptudason||[]).push([[0],{54:function(e,t,s){},55:function(e,t,s){"use strict";s.r(t);var a=s(1),n=s.n(a),c=s(27),i=s.n(c),l=s(11),r=s(0);var o=function(e){return Object(r.jsxs)("div",{className:"navbar navbar-expand-lg bg-light navbar-light",children:[Object(r.jsxs)("span",{className:"navbar-brand text-dark font-weight-bold py-3",children:["Tud\xe1s",Object(r.jsx)("kbd",{className:"bg-success p-1 ml-1",children:"ON"})]}),Object(r.jsx)("button",{className:"navbar-toggler border-0 p-1",type:"button","data-toggle":"collapse","data-target":"#csukott",children:Object(r.jsx)("span",{className:"navbar-toggler-icon custom-toggler"})}),Object(r.jsxs)("div",{className:"collapse navbar-collapse",id:"csukott",children:[Object(r.jsxs)("ul",{className:"nav navbar-nav mr-auto",children:[Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(l.b,{className:"nav-link text-dark mx-2",to:"/cikk",children:Object(r.jsx)("span",{className:"nav-text",children:"Cikkek"})})}),Object(r.jsx)("li",{className:"nav-item",children:1===e.adatok.perm_article?Object(r.jsx)(l.b,{className:"nav-link text-dark mx-2",to:"/cikkadd",children:Object(r.jsx)("span",{className:"nav-text",children:"Cikk hozz\xe1ad\xe1sa"})}):Object(r.jsx)("span",{})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(l.b,{className:"nav-link text-dark mx-2",to:"/forum",children:Object(r.jsx)("span",{className:"nav-text",children:"F\xf3rum"})})})]}),Object(r.jsxs)("ul",{className:"nav navbar-nav",children:[Object(r.jsx)("li",{className:"nav-item",children:void 0===e.adatok.user_name?Object(r.jsx)(l.b,{className:"nav-link text-dark mx-2",to:"/log",children:Object(r.jsx)("span",{className:"nav-text",children:"Bel\xe9p\xe9s/Regisztr\xe1ci\xf3"})}):Object(r.jsxs)("span",{className:"nav-link text-dark mx-2",children:[Object(r.jsx)("i",{class:"fa fa-user pr-2","aria-hidden":"true"}),e.adatok.user_name]})}),Object(r.jsx)("li",{className:"nav-item",children:1===e.adatok.perm_admin?Object(r.jsx)(l.b,{className:"nav-link text-dark mx-2",to:"/admin",children:Object(r.jsx)("span",{className:"nav-text",children:"Admin fel\xfclet"})}):Object(r.jsx)("span",{})}),Object(r.jsx)("li",{className:"nav-item",children:void 0===e.adatok.user_name?Object(r.jsx)("span",{}):Object(r.jsx)("a",{className:"nav-link text-dark mx-2",href:"/nodejs/exit",children:Object(r.jsx)("span",{className:"nav-text",children:Object(r.jsx)("i",{class:"fa fa-sign-out","aria-hidden":"true"})})})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(l.b,{className:"nav-link text-dark mx-2",to:"/download",children:Object(r.jsx)("span",{className:"nav-text",children:Object(r.jsx)("i",{class:"fa fa-download","aria-hidden":"true"})})})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(l.b,{className:"nav-link text-dark mx-2",to:"/help",children:Object(r.jsx)("span",{className:"nav-text",children:Object(r.jsx)("i",{class:"fa fa-question-circle","aria-hidden":"true"})})})})]})]})]})},d=s(3),b=s(4),j=s(6),h=s(5),u=s(2),m=s(16),p=function(e){Object(j.a)(s,e);var t=Object(h.a)(s);function s(e){return Object(d.a)(this,s),t.call(this,e)}return Object(b.a)(s,[{key:"render",value:function(){return Object(r.jsxs)("div",{className:"bg-light m-2 p-4",children:[Object(r.jsx)("h3",{id:"cikktitle",children:this.props.title}),Object(r.jsx)("div",{className:"my-2",children:Object(m.a)(this.props.cikk)}),Object(r.jsx)("span",{className:"font-weight-bold text-light d-inline",children:Object(r.jsx)("kbd",{className:"bg-success p-1 ml-1",children:this.props.author})}),Object(r.jsxs)("span",{className:"font-italic d-inline",children:["  ",this.props.date]}),1===this.props.user?Object(r.jsx)("button",{className:"btn btn-danger my-3 ml-1 mr-2 text-light d-block",children:"T\xf6rl\xe9s"}):Object(r.jsx)("span",{})]})}}]),s}(n.a.Component),O=function(e){Object(j.a)(s,e);var t=Object(h.a)(s);function s(e){return Object(d.a)(this,s),t.call(this,e)}return Object(b.a)(s,[{key:"render",value:function(){return Object(r.jsx)("div",{className:"hely",children:Object(r.jsx)("ul",{className:"m-0 p-0",children:this.props.adatok.map((function(e){return Object(r.jsx)(p,{id:e.id,title:e.article_title,cikk:e.content,date:e.date,author:e.author,edit:e.editable},e.id)}))})})}}]),s}(n.a.Component),x=[],g=function(e){Object(j.a)(s,e);var t=Object(h.a)(s);function s(e){var a;return Object(d.a)(this,s),(a=t.call(this,e)).fetchCikk=a.fetchCikk.bind(Object(u.a)(a)),a}return Object(b.a)(s,[{key:"componentDidMount",value:function(){this.fetchCikk()}},{key:"fetchCikk",value:function(){var e=this;x=[],fetch("/nodejs/cikkAPI/getCikk",{method:"GET",headers:{"Content-type":"application/json"}}).then((function(e){return e.json()})).then((function(t){for(var s=Array.from(t),a=0;a<s.length;a++){console.log(s[a].date);var n=new Date(s[a].date),c=(n.getFullYear(),+n.getMonth()+1),i=n.getDate(),l=n.getHours(),r=n.getMinutes(),o=n.getSeconds();c=c<10?"0"+c:c,i=i<10?"0"+i:i,l=l<10?"0"+l:l,r=r<10?"0"+r:r,o=o<10?"0"+o:o;var d=n.getFullYear()+"."+c+"."+i+" - "+l+":"+r+":"+o;s[a].date=d,x.push(s[a])}e.forceUpdate()})).catch((function(e){console.log("Hiba: "+e)}))}},{key:"render",value:function(){return Object(r.jsxs)("div",{children:[Object(r.jsxs)("h1",{className:"text-center my-3",children:["Tud\xe1s",Object(r.jsx)("kbd",{className:"bg-success p-1 ml-1",children:"ON"})," cikkei"]}),Object(r.jsx)("hr",{className:"w-75 mx-auto my-4"}),Object(r.jsx)(O,{adatok:x,status:this.props.onBelepes})]})}}]),s}(n.a.Component),f=s(17),k=s(22),v=s.n(k),N=(s(53),function(e){Object(j.a)(s,e);var t=Object(h.a)(s);function s(e){var a;return Object(d.a)(this,s),(a=t.call(this,e)).state={szoveg:"",cim:""},a.handleBlur=a.handleBlur.bind(Object(u.a)(a)),a.clickEvent=a.clickEvent.bind(Object(u.a)(a)),a.changeHandler=a.changeHandler.bind(Object(u.a)(a)),a}return Object(b.a)(s,[{key:"handleBlur",value:function(e,t){this.setState({szoveg:t})}},{key:"changeHandler",value:function(e){this.setState({cim:e.target.value})}},{key:"clickEvent",value:function(){var e={title:this.state.cim,content:this.state.szoveg};fetch("/nodejs/cikkAPI/addCikk",{method:"POST",body:JSON.stringify(e,null,2),headers:{"Content-type":"application/json"}}).then((function(e){return e.json()})).then((function(e){switch(e.success){case 0:console.log("Hi\xe1nyz\xf3 adatok!");break;case 1:console.log("A ment\xe9s siker\xfclt!"),window.location.href="/nodejs/cikk";break;case 2:console.log("Adatb\xe1zis hiba!")}}))}},{key:"render",value:function(){var e;return Object(r.jsxs)("div",{className:"text-center hely",children:[Object(r.jsxs)("h1",{className:"text-center my-3",children:["Tud\xe1s",Object(r.jsx)("kbd",{className:"bg-success p-1 ml-1",children:"ON"})," szerkeszt\u0151"]}),Object(r.jsx)("hr",{className:"w-75 mx-auto my-4"}),Object(r.jsx)("input",{onChange:this.changeHandler,type:"text",name:"title",id:"title",placeholder:"C\xedm",className:"row mx-auto w-50 text-center border-1 border-success m-3 font-weight-bold display-5"}),Object(r.jsx)("div",{className:"container-fluid p-2 my-4 bg-success",children:Object(r.jsx)(v.a,{onBlur:this.handleBlur,setOptions:{buttonList:k.buttonList.formatting}})}),Object(r.jsx)("button",(e={id:"hover-opacity",className:"btn btn-success py-3 w-100 text-dark my-3 border-1",type:"submit"},Object(f.a)(e,"id","list"),Object(f.a)(e,"onClick",this.clickEvent),Object(f.a)(e,"children",Object(r.jsx)("h4",{className:"text-light m-0",children:"Ment\xe9s"})),e))]})}}]),s}(n.a.Component)),y=function(e){Object(j.a)(s,e);var t=Object(h.a)(s);function s(e){var a;return Object(d.a)(this,s),a=t.call(this,e),console.log(e),a.state={cim:""},a.changeHandler=a.changeHandler.bind(Object(u.a)(a)),a.topicSave=a.topicSave.bind(Object(u.a)(a)),a}return Object(b.a)(s,[{key:"changeHandler",value:function(e){this.setState({cim:e.target.value})}},{key:"topicSave",value:function(){var e=this,t={title:this.state.cim};fetch("/nodejs/forumAPI/addTopic",{method:"POST",body:JSON.stringify(t,null,2),headers:{"Content-type":"application/json"}}).then((function(e){return e.json()})).then((function(t){switch(t.success){case 0:console.log("Hi\xe1nyz\xf3 adatok!");break;case 1:console.log("A ment\xe9s siker\xfclt!"),e.setState({cim:""}),e.props.onUpdate();break;case 2:console.log("Adatb\xe1zis hiba!")}}))}},{key:"render",value:function(){return Object(r.jsx)("span",{children:this.props.onShow?Object(r.jsxs)("div",{className:"m-2 d-block",children:[Object(r.jsx)("h1",{className:"pt-3 text-primary font-weight-bold",children:"T\xe9ma hozz\xe1ad\xe1sa"}),Object(r.jsx)("input",{className:"d-inline list-group-item lightblue text-dark list-group w-50",id:"list-invert",type:"text",placeholder:"\xdaj t\xe9ma",onChange:this.changeHandler}),Object(r.jsx)("button",{className:"btn btn-primary my-auto d-inline ml-2",id:"hover-opacity",onClick:this.topicSave,children:Object(r.jsx)("i",{class:"fa fa-plus","aria-hidden":"true"})})]}):Object(r.jsx)("span",{})})}}]),s}(n.a.Component),w=function(e){Object(j.a)(s,e);var t=Object(h.a)(s);function s(e){var a;return Object(d.a)(this,s),(a=t.call(this,e)).topicDecide=a.topicDecide.bind(Object(u.a)(a)),a}return Object(b.a)(s,[{key:"topicDecide",value:function(){this.props.Decide(this.props.id)}},{key:"render",value:function(){return Object(r.jsx)("button",{className:"d-block btn btn-primary w-75 mx-auto my-3 topic p-2",id:"hover-opacity",onClick:this.topicDecide,children:Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{className:"mt-2 mb-3",children:this.props.title}),Object(r.jsx)("span",{className:"font-weight-bold text-light",children:Object(r.jsx)("kbd",{className:"bg-dark text-light p-1 ml-1",children:this.props.author})}),Object(r.jsxs)("span",{className:"font-italic",children:[" - ",this.props.created]})]})})}}]),s}(n.a.Component),z=function(e){Object(j.a)(s,e);var t=Object(h.a)(s);function s(e){var a;return Object(d.a)(this,s),(a=t.call(this,e)).Decided=a.Decided.bind(Object(u.a)(a)),a}return Object(b.a)(s,[{key:"Decided",value:function(e){this.props.onDecide(e)}},{key:"render",value:function(){var e=this;return Object(r.jsx)("div",{children:this.props.adatok.map((function(t){return Object(r.jsx)(w,{id:t.id,author:t.author,title:t.title,created:t.created,Decide:e.Decided},t.id)}))})}}]),s}(n.a.Component),C=function(e){Object(j.a)(s,e);var t=Object(h.a)(s);function s(e){var a;return Object(d.a)(this,s),(a=t.call(this,e)).state={comment:""},a.commentAdd=a.commentAdd.bind(Object(u.a)(a)),a.changeHandler=a.changeHandler.bind(Object(u.a)(a)),a.vissza=a.vissza.bind(Object(u.a)(a)),a}return Object(b.a)(s,[{key:"vissza",value:function(){this.props.Vissza()}},{key:"changeHandler",value:function(e){this.setState({comment:e.target.value}),this.forceUpdate()}},{key:"commentAdd",value:function(){var e=this,t={comment:this.state.comment,topic_id:this.props.topic_id};fetch("/nodejs/forumAPI/addForum",{method:"POST",body:JSON.stringify(t,null,2),headers:{"Content-type":"application/json"}}).then((function(e){return e.json()})).then((function(t){switch(t.success){case 0:console.log("Hi\xe1nyz\xf3 adatok!");break;case 1:console.log("A ment\xe9s siker\xfclt!"),e.setState({comment:""}),e.props.onSave(e.props.topic_id),e.forceUpdate();break;case 2:console.log("Adatb\xe1zis hiba!")}}))}},{key:"render",value:function(){return Object(r.jsxs)("div",{className:"m-2 d-block",children:[Object(r.jsx)("h1",{className:"d-inline text-primary font-weight-bold",children:"Hozz\xe1sz\xf3l\xe1s"}),Object(r.jsx)("br",{}),Object(r.jsx)("input",{className:"d-inline list-group-item lightblue text-dark list-group w-50",id:"list",type:"text",placeholder:"\xdaj hozz\xe1sz\xf3l\xe1s",onChange:this.changeHandler}),Object(r.jsx)("button",{className:"btn btn-primary my-auto d-inline ml-2",id:"hover-opacity",onClick:this.commentAdd,children:Object(r.jsx)("i",{class:"fa fa-plus","aria-hidden":"true"})})]})}}]),s}(n.a.Component),A=function(e){Object(j.a)(s,e);var t=Object(h.a)(s);function s(e){return Object(d.a)(this,s),t.call(this,e)}return Object(b.a)(s,[{key:"render",value:function(){return Object(r.jsxs)("div",{className:"lightblue w-100 border border-1 border-primary rounded mt-4",children:[Object(r.jsxs)("div",{className:"bg-primary py-2",children:[Object(r.jsx)("span",{className:"d-inline font-weight-bold text-light ml-2",children:Object(r.jsx)("kbd",{className:"bg-dark text-light p-1 ml-1",children:this.props.author})}),Object(r.jsxs)("span",{className:"d-inline font-italic pl-2",children:[" - ",this.props.created]}),Object(r.jsxs)("span",{className:"d-inline float-right font-weight-bold mr-2",children:["#",this.props.id]})]}),Object(r.jsx)("h5",{className:"p-3 font-weight-normal",children:this.props.content})]})}}]),s}(n.a.Component),S=function(e){Object(j.a)(s,e);var t=Object(h.a)(s);function s(e){var a;return Object(d.a)(this,s),(a=t.call(this,e)).reload=a.reload.bind(Object(u.a)(a)),a.back=a.back.bind(Object(u.a)(a)),a}return Object(b.a)(s,[{key:"reload",value:function(e){this.props.onReload(e)}},{key:"back",value:function(){console.log("egyel feljebb"),this.props.onBack()}},{key:"render",value:function(){return Object(r.jsxs)("div",{children:[this.props.onShow?Object(r.jsxs)("div",{children:[Object(r.jsx)("button",{onClick:this.back,id:"hover-opacity",className:"d-inline btn btn-primary text-light mb-3 mr-2",children:Object(r.jsx)("i",{class:"fa fa-arrow-left","aria-hidden":"true"})}),Object(r.jsx)(C,{topic_id:this.props.topicID,onSave:this.reload})]}):Object(r.jsx)("button",{onClick:this.back,id:"hover-opacity",className:"d-inline btn btn-primary text-light mb-3 mr-2",children:Object(r.jsx)("i",{class:"fa fa-arrow-left","aria-hidden":"true"})}),this.props.adatok.map((function(e){return Object(r.jsx)(A,{id:e.id,topic_id:e.topic_id,author:e.author,content:e.content,created:e.created},e.id)}))]})}}]),s}(n.a.Component),H=[],D=[],T=!1,P=!1,M=-1,B=function(e){Object(j.a)(s,e);var t=Object(h.a)(s);function s(e){var a;return Object(d.a)(this,s),(a=t.call(this,e)).state={topic_id:-1},a.fetchAdmin=a.fetchAdmin.bind(Object(u.a)(a)),a.getThisTopic=a.getThisTopic.bind(Object(u.a)(a)),a.update=a.update.bind(Object(u.a)(a)),a}return Object(b.a)(s,[{key:"componentDidMount",value:function(){this.fetchAdmin()}},{key:"fetchAdmin",value:function(){var e=this;H=[],fetch("/nodejs/forumAPI/getTopic",{method:"GET",headers:{"Content-type":"application/json"}}).then((function(e){return e.json()})).then((function(t){for(var s=Array.from(t),a=0;a<s.length;a++){console.log(s[a].created);var n=new Date(s[a].created),c=(n.getFullYear(),+n.getMonth()+1),i=n.getDate(),l=n.getHours(),r=n.getMinutes(),o=n.getSeconds();c=c<10?"0"+c:c,i=i<10?"0"+i:i,l=l<10?"0"+l:l,r=r<10?"0"+r:r,o=o<10?"0"+o:o;var d=n.getFullYear()+"."+c+"."+i+" - "+l+":"+r+":"+o;s[a].created=d,H.push(s[a])}e.forceUpdate()})).catch((function(e){console.log("Hiba: "+e)}))}},{key:"getThisTopic",value:function(e){var t=this;M=e,T=!0,this.forceUpdate(),D=[],fetch("/nodejs/forumAPI/getForum/".concat(e),{method:"GET",headers:{"Content-type":"application/json"}}).then((function(e){return e.json()})).then((function(e){for(var s=Array.from(e),a=0;a<s.length;a++){console.log(s[a].created);var n=new Date(s[a].created),c=(n.getFullYear(),+n.getMonth()+1),i=n.getDate(),l=n.getHours(),r=n.getMinutes(),o=n.getSeconds();c=c<10?"0"+c:c,i=i<10?"0"+i:i,l=l<10?"0"+l:l,r=r<10?"0"+r:r,o=o<10?"0"+o:o;var d=n.getFullYear()+"."+c+"."+i+" - "+l+":"+r+":"+o;s[a].created=d,D.push(s[a])}t.forceUpdate()})).catch((function(e){console.log("Hiba: "+e)}))}},{key:"update",value:function(){this.fetchAdmin(),T=!1,this.forceUpdate()}},{key:"render",value:function(){return Object(r.jsxs)("div",{className:"hely",children:[Object(r.jsxs)("h1",{className:"text-center my-3",children:["Tud\xe1s",Object(r.jsx)("kbd",{className:"bg-success p-1 ml-1",children:"ON"})," t\xe9m\xe1k"]}),Object(r.jsx)("hr",{className:"w-75 mx-auto my-4"}),P=void 0!==this.props.user.user_name,T?Object(r.jsx)(S,{onShow:P,onReload:this.update,topicID:M,onBack:this.update,adatok:D}):Object(r.jsxs)("div",{children:[Object(r.jsx)(y,{onShow:P,onUpdate:this.update}),Object(r.jsx)("hr",{"data-content":"T\xc9M\xc1K",class:"hr-text my-5"}),Object(r.jsx)(z,{adatok:H,onDecide:this.getThisTopic})]})]})}}]),s}(n.a.Component),_=function(e){Object(j.a)(s,e);var t=Object(h.a)(s);function s(e){var a;return Object(d.a)(this,s),(a=t.call(this,e)).allowArticle=a.allowArticle.bind(Object(u.a)(a)),a.deleteArticle=a.deleteArticle.bind(Object(u.a)(a)),a}return Object(b.a)(s,[{key:"allowArticle",value:function(){var e=this,t={id:this.props.id};fetch("/nodejs/cikkAPI/moderateAllowCikk",{method:"POST",body:JSON.stringify(t,null,2),headers:{"Content-type":"application/json"}}).then((function(e){return e.json()})).then((function(t){switch(t.success){case 0:console.log("Hi\xe1nyz\xf3 adatok!");break;case 1:console.log("A ment\xe9s siker\xfclt!"),e.props.onAllow();break;case 2:console.log("Adatb\xe1zis hiba!")}})).catch((function(e){console.log("Hiba: "+e)}))}},{key:"deleteArticle",value:function(){var e=this,t={id:this.props.id};fetch("/nodejs/cikkAPI/moderateDeleteCikk",{method:"POST",body:JSON.stringify(t,null,2),headers:{"Content-type":"application/json"}}).then((function(e){return e.json()})).then((function(t){switch(t.success){case 0:console.log("Hi\xe1nyz\xf3 adatok!");break;case 1:console.log("A ment\xe9s siker\xfclt!"),e.props.onAllow();break;case 2:console.log("Adatb\xe1zis hiba!")}})).catch((function(e){console.log("Hiba: "+e)}))}},{key:"render",value:function(){return Object(r.jsxs)("div",{className:"bg-light m-2 p-4",children:[Object(r.jsx)("h3",{id:"cikktitle",children:this.props.title}),Object(r.jsx)("div",{className:"my-2",children:Object(m.a)(this.props.cikk)}),Object(r.jsx)("span",{className:"font-weight-bold text-light d-inline",children:Object(r.jsx)("kbd",{className:"bg-success p-1 ml-1",children:this.props.author})}),Object(r.jsxs)("span",{className:"font-italic d-inline",children:["  ",this.props.date]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("button",{onClick:this.allowArticle,id:"hover-opacity",className:"btn btn-info my-3 ml-1 mr-2 text-light",type:"submit",children:Object(r.jsx)("i",{class:"fa fa-check","aria-hidden":"true"})}),Object(r.jsx)("button",{onClick:this.deleteArticle,className:"btn btn-danger my-3 mr-2 ml-1 text-light",type:"submit",children:Object(r.jsx)("i",{class:"fa fa-times","aria-hidden":"true"})})]})]})}}]),s}(n.a.Component),E=function(e){Object(j.a)(s,e);var t=Object(h.a)(s);function s(e){var a;return Object(d.a)(this,s),(a=t.call(this,e)).allowHandler=a.allowHandler.bind(Object(u.a)(a)),a}return Object(b.a)(s,[{key:"allowHandler",value:function(){this.props.onAllowed()}},{key:"render",value:function(){var e=this;return Object(r.jsx)("div",{children:Object(r.jsx)("ul",{className:"m-0 p-0",children:this.props.adatok.map((function(t){return Object(r.jsx)(_,{id:t.id,title:t.article_title,cikk:t.content,date:t.date,author:t.author,edit:t.editable,user:e.props.status[0].rang,onAllow:e.allowHandler},t.id)}))})})}}]),s}(n.a.Component),F=[],U=[{id:0,name:"Kamu Profil",rang:""}],R=function(e){Object(j.a)(s,e);var t=Object(h.a)(s);function s(e){var a;return Object(d.a)(this,s),(a=t.call(this,e)).fetchAdmin=a.fetchAdmin.bind(Object(u.a)(a)),a}return Object(b.a)(s,[{key:"componentDidMount",value:function(){this.fetchAdmin()}},{key:"fetchAdmin",value:function(){var e=this;F=[],fetch("/nodejs/cikkAPI/moderateGetCikk",{method:"GET",headers:{"Content-type":"application/json"}}).then((function(e){return e.json()})).then((function(t){for(var s=Array.from(t),a=0;a<s.length;a++){var n=new Date(s[a].date),c=(n.getFullYear(),+n.getMonth()+1),i=n.getDate(),l=n.getHours(),r=n.getMinutes(),o=n.getSeconds();c=c<10?"0"+c:c,i=i<10?"0"+i:i,l=l<10?"0"+l:l,r=r<10?"0"+r:r,o=o<10?"0"+o:o;var d=n.getFullYear()+"."+c+"."+i+" - "+l+":"+r+":"+o;s[a].date=d,F.push(s[a])}e.forceUpdate()})).catch((function(e){console.log("Hiba: "+e)}))}},{key:"render",value:function(){return Object(r.jsxs)("div",{className:"hely",children:[Object(r.jsxs)("h1",{className:"text-center my-3",children:["Tud\xe1s",Object(r.jsx)("kbd",{className:"bg-success p-1 ml-1",children:"ON"})," moder\xe1tor"]}),Object(r.jsx)("hr",{className:"w-75 mx-auto my-4"}),Object(r.jsx)("h2",{children:"J\xf3v\xe1hagy\xe1sra v\xe1r:"}),Object(r.jsx)(E,{adatok:F,status:U,onAllowed:this.fetchAdmin})]})}}]),s}(n.a.Component);var J=function(e){var t=Object(a.useRef)(),s=Object(a.useRef)();return Object(r.jsxs)("div",{className:"col-xl-6 p-3",children:[Object(r.jsx)("h1",{className:"text-center py-3 text-success font-weight-bold",children:"Bel\xe9p\xe9s"}),Object(r.jsxs)("form",{className:"list-group w-100 mx-auto",id:"list",onSubmit:function(a){a.preventDefault();var n={email:t.current.value,password:s.current.value};e.OnLogin(n)},children:[Object(r.jsx)("input",{className:"list-group-item hatter text-dark",type:"email",name:"email",placeholder:"Email",ref:t}),Object(r.jsx)("input",{className:"list-group-item hatter text-dark",type:"password",name:"password",placeholder:"Jelsz\xf3",ref:s}),""===e.hiba?Object(r.jsx)("div",{}):n.a.createElement("div",{className:"my-1 p-0 text-center alert alert-danger"},e.hiba),Object(r.jsx)("button",{id:"hover-opacity",className:"btn btn-success py-3 w-100 text-dark my-3 border-1",type:"submit",children:Object(r.jsx)("h4",{className:"text-light m-0",children:"Bel\xe9p\xe9s!"})})]})]})};var I=function(e){var t=Object(a.useRef)(),s=Object(a.useRef)(),c=Object(a.useRef)(),i=Object(a.useRef)();return Object(r.jsxs)("div",{className:"col-xl-6 p-3",children:[Object(r.jsx)("h1",{className:"text-center py-3 text-success font-weight-bold",children:"Regisztr\xe1ci\xf3"}),Object(r.jsxs)("form",{className:"list-group w-100 mx-auto",id:"list",onSubmit:function(a){a.preventDefault();var n={nev:t.current.value,email:s.current.value,password:c.current.value,password2:i.current.value};e.OnSignUp(n)},children:[Object(r.jsx)("input",{className:"list-group-item hatter text-dark",type:"name",name:"nev",placeholder:"N\xe9v",ref:t}),Object(r.jsx)("input",{className:"list-group-item hatter text-dark",type:"email",name:"email",placeholder:"Email",ref:s}),Object(r.jsx)("input",{className:"list-group-item hatter text-dark",type:"password",name:"password",placeholder:"Jelsz\xf3",ref:c}),Object(r.jsx)("input",{className:"list-group-item hatter text-dark",type:"password",name:"password2",placeholder:"Jelsz\xf3 \xfajra",ref:i}),""===e.hiba?Object(r.jsx)("div",{}):n.a.createElement("div",{className:"my-1 p-0 text-center alert alert-danger"},e.hiba),Object(r.jsx)("button",{id:"hover-opacity",className:"btn btn-success py-3 w-100 text-dark my-3 border-1",type:"submit",children:Object(r.jsx)("h4",{className:"text-light m-0",children:"Regisztr\xe1ci\xf3!"})})]})]})},L="",K="",Y=function(e){Object(j.a)(s,e);var t=Object(h.a)(s);function s(e){var a;return Object(d.a)(this,s),(a=t.call(this,e)).loginHandler=a.loginHandler.bind(Object(u.a)(a)),a.signupHandler=a.signupHandler.bind(Object(u.a)(a)),a}return Object(b.a)(s,[{key:"loginHandler",value:function(e){var t=this,s={email:e.email,password:e.password};fetch("/nodejs/loginAPI/login",{method:"POST",body:JSON.stringify(s,null,2),headers:{"Content-type":"application/json"}}).then((function(e){return e.json()})).then((function(e){switch(e.success){case 0:L="K\xe9rem t\xf6ltse ki az \xfcres mez\u0151ket!";break;case 1:L="Hib\xe1s email c\xedm vagy jelsz\xf3";break;case 2:window.location.replace("/nodejs/cikk")}t.forceUpdate()})).catch((function(e){console.log("Hiba: "+e)}))}},{key:"signupHandler",value:function(e){var t=this,s={nev:e.nev,email:e.email,password:e.password,password2:e.password2};fetch("/nodejs/loginAPI/signup",{method:"POST",body:JSON.stringify(s,null,2),headers:{"Content-type":"application/json"}}).then((function(e){return e.json()})).then((function(e){switch(e.success){case 0:K="K\xe9rem t\xf6ltse ki az \xfcres mez\u0151ket!";break;case 1:K="Ezzel az email c\xedmmel m\xe1r regisztr\xe1ltak fi\xf3kot!";break;case 2:K="A k\xe9t jelsz\xf3 nem egyezik meg!";break;case 3:window.location.replace("/nodejs/cikk")}t.forceUpdate()})).catch((function(e){console.log("Hiba: "+e)}))}},{key:"render",value:function(){return Object(r.jsxs)("div",{className:"container-fluid row p-1 m-0 hely",children:[Object(r.jsx)(J,{OnLogin:this.loginHandler,hiba:L}),Object(r.jsx)(I,{OnSignUp:this.signupHandler,hiba:K})]})}}]),s}(n.a.Component);var V=function(){return Object(r.jsxs)("div",{className:"p-3 hely",children:[Object(r.jsxs)("h1",{className:"text-center my-3",children:["Tud\xe1s",Object(r.jsx)("kbd",{className:"bg-success p-1 ml-1",children:"ON"})," s\xfag\xf3"]}),Object(r.jsxs)("ul",{className:"list-group",children:[Object(r.jsxs)("li",{className:"list-group-item border-0",children:[Object(r.jsx)("h1",{className:"text-success",children:"Cikkek"}),Object(r.jsx)("h4",{className:"font-weight-normal ml-2",children:"A cikkeket regisztr\xe1ci\xf3 n\xe9lk\xfcl is olvashatj\xe1k az oldal l\xe1togat\xf3i. T\xf6rl\xe9si joggal csak az adminok rendelkeznek. Miel\u0151tt a szerkeszt\u0151k \xe1ltal megosztani k\xedv\xe1nt sz\xf6veget az oldal olvas\xf3i l\xe1thatn\xe1k, az adminoknak enged\xe9lyezni\xfck kell azt. Ha \xfagy gondolj\xe1k a cikk nem az oldalra ill\u0151, egyszer\u0171en csak kit\xf6rlik azt."})]}),Object(r.jsxs)("li",{className:"list-group-item border-0",children:[Object(r.jsx)("h1",{className:"text-success",children:"F\xf3rum"}),Object(r.jsx)("h4",{className:"font-weight-normal ml-2",children:"A f\xf3rumon t\xf6bb t\xe9ma k\xf6z\xf6tt lehet b\xf6ng\xe9szni, vagy ak\xe1r egy \xfajat l\xe9trehozni. A t\xe9m\xe1k alatt minden felhaszn\xe1l\xf3 hozz\xe1 tud sz\xf3lni, olvasni m\xe1sok v\xe9lem\xe9ny\xe9t."})]}),Object(r.jsxs)("li",{className:"list-group-item border-0",children:[Object(r.jsx)("h1",{className:"text-success",children:"Admin Fel\xfclet"}),Object(r.jsx)("h4",{className:"font-weight-normal ml-2",children:"Ehhez az oldalhoz csak az adminoknak van jogosults\xe1guk. M\xe1s felhaszn\xe1l\xf3k \xe9s vend\xe9gek nem is tudnak a l\xe9tez\xe9s\xe9r\u0151l. Ennek a r\xe9sznek a c\xe9lja az, hogy a szerkeszt\u0151k \xe1ltal megosztani k\xedv\xe1nt cikkeket itt tudj\xe1k kiv\xe1logatni az arra jogosultak."})]}),Object(r.jsxs)("li",{className:"list-group-item border-0",children:[Object(r.jsx)("h1",{className:"text-success",children:"Bel\xe9p\xe9s/Regisztr\xe1ci\xf3"}),Object(r.jsx)("h4",{className:"font-weight-normal ml-2",children:"Ezen az oldalon k\xe9t oszlopot l\xe1thatnak a vend\xe9gek. Ha m\xe1r r\xe9gebben regisztr\xe1ltak egy felhaszn\xe1l\xf3t, gyorsan be tudnak l\xe9pni, hogy teljesen ki\xe9lvezhess\xe9k oldalunkat. A teljesen \xfajaknak regisztr\xe1lniuk kell fi\xf3kjukat, melynek adatait mi biztons\xe1gban t\xe1roljuk. Mindezek ut\xe1n \u0151 is hozz\xe1f\xe9r a b\u0151vebb oldalhoz."})]})]})]})},G=function(e){Object(j.a)(s,e);var t=Object(h.a)(s);function s(){return Object(d.a)(this,s),t.apply(this,arguments)}return Object(b.a)(s,[{key:"render",value:function(){return Object(r.jsxs)("div",{className:"hely",children:[Object(r.jsxs)("h1",{className:"text-center my-3",children:["Tud\xe1s",Object(r.jsx)("kbd",{className:"bg-success p-1 ml-1",children:"ON"})," let\xf6lt\xe9sek"]}),Object(r.jsxs)("ul",{className:"list-group",children:[Object(r.jsxs)("li",{className:"list-group-item",children:[Object(r.jsx)("h3",{className:"text-success",children:"Felhaszn\xe1l\xf3bar\xe1t Linux Disztrib\xfaci\xf3k"}),Object(r.jsx)("div",{className:"list-group-item ml-2 border-0",children:Object(r.jsx)("a",{target:"blank",href:"https://www.linuxmint.com/download.php",children:Object(r.jsx)("span",{class:"btn btn-default",children:"Mint"})})}),Object(r.jsx)("div",{className:"list-group-item ml-2 border-0",children:Object(r.jsx)("a",{target:"blank",href:"https://www.ubuntu.com/download",children:Object(r.jsx)("span",{class:"btn btn-default",children:"Ubuntu"})})}),Object(r.jsx)("div",{className:"list-group-item ml-2 border-0",children:Object(r.jsx)("a",{target:"blank",href:"https://www.debian.org/distrib/ftplist",children:Object(r.jsx)("span",{class:"btn btn-default",children:"Debian"})})}),Object(r.jsx)("div",{className:"list-group-item ml-2 border-0",children:Object(r.jsx)("a",{target:"blank",href:"https://zorinos.com/download/",children:Object(r.jsx)("span",{class:"btn btn-default",children:"ZorinOS"})})}),Object(r.jsx)("div",{className:"list-group-item ml-2 border-0",children:Object(r.jsx)("a",{target:"blank",href:"https://elementary.io/",children:Object(r.jsx)("span",{class:"btn btn-default",children:"ElementaryOS"})})}),Object(r.jsx)("div",{className:"list-group-item ml-2 border-0",children:Object(r.jsx)("a",{target:"blank",href:"https://mxlinux.org/",children:Object(r.jsx)("span",{class:"btn btn-default",children:"MX Linux"})})})]}),Object(r.jsxs)("li",{className:"list-group-item",children:[Object(r.jsx)("h3",{className:"text-success",children:"Egy\xe9b Linux Disztrib\xfaci\xf3k"}),Object(r.jsx)("div",{className:"list-group-item ml-2 border-0",children:Object(r.jsx)("a",{target:"blank",href:"https://wiki.centos.org/Download",children:Object(r.jsx)("span",{class:"btn btn-default",children:"CentOS"})})}),Object(r.jsx)("div",{className:"list-group-item ml-2 border-0",children:Object(r.jsx)("a",{target:"blank",href:"https://getfedora.org/",children:Object(r.jsx)("span",{class:"btn btn-default",children:"Fedora"})})}),Object(r.jsx)("div",{className:"list-group-item ml-2 border-0",children:Object(r.jsx)("a",{target:"blank",href:"http://www.slackware.com/getslack/",children:Object(r.jsx)("span",{class:"btn btn-default",children:"Slackware"})})}),Object(r.jsx)("div",{className:"list-group-item ml-2 border-0",children:Object(r.jsx)("a",{target:"blank",href:"https://xubuntu.org/getxubuntu/",children:Object(r.jsx)("span",{class:"btn btn-default",children:"Xubuntu"})})}),Object(r.jsx)("div",{className:"list-group-item ml-2 border-0",children:Object(r.jsx)("a",{target:"blank",href:"https://www.archlinux.org/download/",children:Object(r.jsx)("span",{class:"btn btn-default",children:"Arch"})})}),Object(r.jsx)("div",{className:"list-group-item ml-2 border-0",children:Object(r.jsx)("a",{target:"blank",href:"https://software.opensuse.org/",children:Object(r.jsx)("span",{class:"btn btn-default",children:"OpenSUSE"})})}),Object(r.jsx)("div",{className:"list-group-item ml-2 border-0",children:Object(r.jsx)("a",{target:"blank",href:"https://access.redhat.com/downloads",children:Object(r.jsx)("span",{class:"btn btn-default",children:"Red Hat"})})}),Object(r.jsx)("div",{className:"list-group-item ml-2 border-0",children:Object(r.jsx)("a",{target:"blank",href:"https://sourceforge.net/projects/slackel/files/",children:Object(r.jsx)("span",{class:"btn btn-default",children:"Slackel"})})}),Object(r.jsx)("div",{className:"list-group-item ml-2 border-0",children:Object(r.jsx)("a",{target:"blank",href:"https://pureos.net/download/",children:Object(r.jsx)("span",{class:"btn btn-default",children:"PureOS"})})}),Object(r.jsx)("div",{className:"list-group-item ml-2 border-0",children:Object(r.jsx)("a",{target:"blank",href:"http://mageia.org/en/downloads/",children:Object(r.jsx)("span",{class:"btn btn-default",children:"Mageia"})})}),Object(r.jsx)("div",{className:"list-group-item ml-2 border-0",children:Object(r.jsx)("a",{target:"blank",href:"http://pclinuxos.com/?page_id=10",children:Object(r.jsx)("span",{class:"btn btn-default",children:"PCLinuxOS"})})}),Object(r.jsx)("div",{className:"list-group-item ml-2 border-0",children:Object(r.jsx)("a",{target:"blank",href:"http://www.puppylinux.com/download",children:Object(r.jsx)("span",{class:"btn btn-default",children:"Puppy"})})}),Object(r.jsx)("div",{className:"list-group-item ml-2 border-0",children:Object(r.jsx)("a",{target:"blank",href:"https://www.bunsenlabs.org/installation.html",children:Object(r.jsx)("span",{class:"btn btn-default",children:"BunsenLabs"})})}),Object(r.jsx)("div",{className:"list-group-item ml-2 border-0",children:Object(r.jsx)("a",{target:"blank",href:"https://www.kubuntu.org/getkubuntu/",children:Object(r.jsx)("span",{class:"btn btn-default",children:"Kubuntu"})})}),Object(r.jsx)("div",{className:"list-group-item ml-2 border-0",children:Object(r.jsx)("a",{target:"blank",href:"https://sourceforge.net/projects/manjarolinux/files/release/",children:Object(r.jsx)("span",{class:"btn btn-default",children:"Manjaro"})})}),Object(r.jsx)("div",{className:"list-group-item ml-2 border-0",children:Object(r.jsx)("a",{target:"blank",href:"https://sourceforge.net/projects/bodhilinux/files/",children:Object(r.jsx)("span",{class:"btn btn-default",children:"Bodhi"})})}),Object(r.jsx)("div",{className:"list-group-item ml-2 border-0",children:Object(r.jsx)("a",{target:"blank",href:"http://www.netrunner.com/download/",children:Object(r.jsx)("span",{class:"btn btn-default",children:"Netrunner"})})}),Object(r.jsx)("div",{className:"list-group-item ml-2 border-0",children:Object(r.jsx)("a",{target:"blank",href:"https://neptuneos.com/en/download.html",children:Object(r.jsx)("span",{class:"btn btn-default",children:"Neptune"})})}),Object(r.jsx)("div",{className:"list-group-item ml-2 border-0",children:Object(r.jsx)("a",{target:"blank",href:"https://www.kali.org/downloads/",children:Object(r.jsx)("span",{class:"btn btn-default",children:"Kali"})})}),Object(r.jsx)("div",{className:"list-group-item ml-2 border-0",children:Object(r.jsx)("a",{target:"blank",href:"https://sourceforge.net/projects/os4online/files/",children:Object(r.jsx)("span",{class:"btn btn-default",children:"Black Lab"})})}),Object(r.jsx)("div",{className:"list-group-item ml-2 border-0",children:Object(r.jsx)("a",{target:"blank",href:"https://getsol.us/download/",children:Object(r.jsx)("span",{class:"btn btn-default",children:"Solus"})})})]}),Object(r.jsxs)("li",{className:"list-group-item",children:[Object(r.jsx)("h3",{className:"text-success",children:"Visual Studio Code"}),Object(r.jsx)("div",{className:"list-group-item ml-2 border-0",children:Object(r.jsx)("a",{target:"blank",href:"https://visualstudio.microsoft.com/downloads/",children:Object(r.jsx)("span",{class:"btn btn-default",children:"Visual Studio Code"})})})]}),Object(r.jsxs)("li",{className:"list-group-item",children:[Object(r.jsx)("h3",{className:"text-success",children:"Oracle VM VirtualBox"}),Object(r.jsx)("div",{className:"list-group-item ml-2 border-0",children:Object(r.jsx)("a",{target:"blank",href:"https://go.oracle.com/lp=101444?src1=:ad:pas:go:dg:RC_WWMK201210P00009C0001:_pan_virt_emea_tr_en&SC=sckw=WWMK201210P00009C0001&gclid=Cj0KCQjwmcWDBhCOARIsALgJ2QfPRsxCcyXFFZFDCWlNeNvFzYJnKrJV3_yN3OlnUK3RCkAhXc1KgZMaAi9qEALw_wcB&gclsrc=aw.ds",children:Object(r.jsx)("span",{class:"btn btn-default",children:"Oracle VM VirtualBox"})})})]}),Object(r.jsxs)("li",{className:"list-group-item",children:[Object(r.jsx)("h3",{className:"text-success",children:"Notepad++"}),Object(r.jsx)("div",{className:"list-group-item ml-2 border-0",children:Object(r.jsx)("a",{target:"blank",href:"https://notepad-plus-plus.org/downloads/",children:Object(r.jsx)("span",{class:"btn btn-default",children:"Notepad++"})})})]}),Object(r.jsxs)("li",{className:"list-group-item",children:[Object(r.jsx)("h3",{className:"text-success",children:"LibreOffice"}),Object(r.jsx)("div",{className:"list-group-item ml-2 border-0",children:Object(r.jsx)("a",{target:"blank",href:"https://www.libreoffice.org/download/download/",children:Object(r.jsx)("span",{class:"btn btn-default",children:"LibreOffice"})})})]})]})]})}}]),s}(n.a.Component),W=s(7),X=[],Z=function(e){Object(j.a)(s,e);var t=Object(h.a)(s);function s(e){return Object(d.a)(this,s),t.call(this,e)}return Object(b.a)(s,[{key:"render",value:function(){return Object(r.jsxs)(W.c,{children:[Object(r.jsx)(W.a,{path:"/log",children:Object(r.jsx)(Y,{})}),Object(r.jsx)(W.a,{path:"/cikk",children:Object(r.jsx)(g,{onBelepes:X})}),Object(r.jsx)(W.a,{path:"/cikkadd",children:Object(r.jsx)(N,{className:"mb-5",onBelepes:X})}),Object(r.jsx)(W.a,{path:"/forum",children:Object(r.jsx)(B,{user:this.props.adatok,onBelepes:X})}),Object(r.jsx)(W.a,{path:"/admin",children:Object(r.jsx)(R,{onBelepes:X})}),Object(r.jsx)(W.a,{path:"/help",children:Object(r.jsx)(V,{})}),Object(r.jsx)(W.a,{path:"/download",children:Object(r.jsx)(G,{})})]})}}]),s}(n.a.Component);var q=function(){return Object(r.jsx)("footer",{class:"bg-dark text-center text-white fixed-bottom",children:Object(r.jsxs)("div",{class:"text-center p-3",children:["\xa9 2021",Object(r.jsx)("a",{class:"text-white font-weight-bold ml-2",href:"#",children:"Programoz\xf3 Pal\xe1nt\xe1k"})]})})},Q=(s(54),{});fetch("/nodejs/getUserData",{method:"GET",headers:{"Content-type":"application/json"}}).then((function(e){return e.json()})).then((function(e){Q=e,i.a.render(Object(r.jsxs)(l.a,{children:[Object(r.jsx)(o,{adatok:Q}),Object(r.jsx)(Z,{adatok:Q}),Object(r.jsx)(q,{})]}),document.getElementById("root"))})).catch((function(e){console.log("Hiba: "+e)}))}},[[55,1,2]]]);
//# sourceMappingURL=main.cf85936b.chunk.js.map