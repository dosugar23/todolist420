(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],Array(53).concat([function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,c){},,,,,function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(1),a=c.n(s),i=c(42),r=c.n(i),o=(c(53),c(54),c(10)),l=c(11),u=c(13),j=c(12),d=(c(55),function(e){Object(u.a)(c,e);var t=Object(j.a)(c);function c(){return Object(o.a)(this,c),t.apply(this,arguments)}return Object(l.a)(c,[{key:"render",value:function(){return Object(n.jsx)("div",{className:"Background",children:this.props.children})}}]),c}(s.Component)),b=function(e){return e.children},h=(c(56),c(57),function(e){return Object(n.jsx)("div",{className:"Image"})}),O=(c(58),c(59),function(e){Object(u.a)(c,e);var t=Object(j.a)(c);function c(){var e;Object(o.a)(this,c);for(var n=arguments.length,s=new Array(n),a=0;a<n;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).changeHandler=function(t){var c=t.target.value;e.props.setData(c)},e}return Object(l.a)(c,[{key:"render",value:function(){return Object(n.jsx)(b,{children:Object(n.jsx)("div",{className:"Input",children:Object(n.jsxs)("div",{className:"Block",children:[Object(n.jsx)("label",{children:this.props.label}),Object(n.jsx)("input",{type:this.props.type,onChange:this.changeHandler})]})})})}}]),c}(s.Component)),f=(c(60),c(61),function(e){return Object(n.jsx)(b,{children:Object(n.jsx)("button",{className:e.className,onClick:e.clicked,children:e.title})})}),p=c(43),x=c.n(p),m=c(9),v=c.n(m),k=v.a.get("access_token"),g=v.a.get("client"),y=v.a.get("uid"),w=x.a.create({baseURL:"https://herokutuan.herokuapp.com",headers:{Authorization:"Bearer ya29.a0AfH6SMC3w1tXe7lCUECmZhkZZ1tRIaeYTrcF1B9_Bk7PFJcfbuxds7nEqowZQNqBs4_JBrnA9a2dDuY_r58jnUl0zgtBUZz95iTKwlVhvVzWgpaJzsiqD7045KO-NdLCa1TT7ZhZcP6npf_Ofb_Y-fkN9ZVgGjG",uid:"".concat(y),"access-token":"".concat(k),client:"".concat(g),"Content-Type":"application/json"}}),N=(c(89),function(){return Object(n.jsx)(b,{children:Object(n.jsxs)("div",{className:"Spinner",children:[Object(n.jsx)("div",{}),Object(n.jsx)("div",{}),Object(n.jsx)("div",{}),Object(n.jsx)("div",{})]})})}),S=c(122),C=c(17),T=Object(C.a)({forceRefresh:!0}),L=c(23),_=c.n(L),D=function(e){Object(u.a)(c,e);var t=Object(j.a)(c);function c(){var e;Object(o.a)(this,c);for(var n=arguments.length,s=new Array(n),a=0;a<n;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={email:"",password:"",message:!1,loading:!1},e.setEmail=function(t){e.setState({email:t})},e.setPassword=function(t){e.setState({password:t})},e.loginHandler=function(){e.setState({loading:!0}),w.post("/auth/sign_in",e.state).then((function(t){e.setState({loading:!1});var c=t.headers;v.a.set("isLoggedIn",!0),v.a.set("access_token",c["access-token"]),v.a.set("client",c.client),v.a.set("uid",c.uid),T.push({pathname:"/"})})).catch((function(t){e.setState({loading:!1}),e.setState({message:t.response.data.errors})}))},e.keyPress=function(){e.loginHandler()},e}return Object(l.a)(c,[{key:"render",value:function(){return!0===v.a.get("isLoggedIn")?T.push("/"):Object(n.jsx)(b,{children:Object(n.jsx)(_.a,{handleKeys:["enter"],onKeyEvent:this.keyPress,children:Object(n.jsxs)("div",{className:"LoginForm",children:[Object(n.jsx)("h2",{className:"Title",children:"Login"}),this.state.message?this.state.message.map((function(e){return Object(n.jsx)("p",{style:{color:"red",textAlign:"center",marginTop:"3px"},children:e},e)})):"",this.props.isRegistered?Object(n.jsx)("p",{style:{color:"#a8df65",textAlign:"center"},children:"Successful Register, Log In to continue !"}):"",Object(n.jsx)(O,{label:"Email",type:"email",setData:this.setEmail}),Object(n.jsx)(O,{label:"Password",type:"password",setData:this.setPassword}),Object(n.jsxs)("div",{className:"ButtonGroup",children:[Object(n.jsx)(f,{className:"LoginButton",title:"Login",clicked:this.loginHandler}),Object(n.jsx)(f,{className:"RegisterButton",title:"Register",clicked:this.props.clickedRegisterButton})]}),this.state.loading?Object(n.jsx)("div",{className:"SpinnerContainer",children:Object(n.jsx)(N,{})}):""]})})})}}]),c}(s.Component),B=Object(S.d)(D),I=c(45),E=(c(94),function(e){Object(u.a)(c,e);var t=Object(j.a)(c);function c(){var e;Object(o.a)(this,c);for(var n=arguments.length,s=new Array(n),a=0;a<n;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).changeHandler=function(t){var c=t.target.value;e.props.setData(c)},e}return Object(l.a)(c,[{key:"render",value:function(){return Object(n.jsx)(b,{children:Object(n.jsx)("div",{className:"Input",children:Object(n.jsxs)("div",{className:"Block",children:[Object(n.jsx)("label",{children:this.props.label}),this.props.message?Object(n.jsx)("p",{}):Object(n.jsx)("p",{style:{color:"red"},children:"Password does not match"}),Object(n.jsx)("input",{type:this.props.type,onChange:this.changeHandler})]})})})}}]),c}(s.Component)),A=(c(95),function(e){return Object(n.jsx)(b,{children:Object(n.jsx)("button",{className:e.className,onClick:e.clicked,disabled:e.disabled,children:e.title})})}),P=function(e){Object(u.a)(c,e);var t=Object(j.a)(c);function c(){var e;Object(o.a)(this,c);for(var s=arguments.length,a=new Array(s),i=0;i<s;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={firstName:"",lastName:"",email:"",password:"",rightPassword:!0,loading:!1,message:!1,done:!1},e.setFirstname=function(t){e.setState({firstName:t})},e.setLastname=function(t){e.setState({lastName:t})},e.setEmail=function(t){e.setState({email:t})},e.setPassword=function(t){e.setState({password:t})},e.checkConfirm=function(t){0!==t.length&&e.setState({rightPassword:t===e.state.password})},e.registerHandler=function(){if(e.setState({loading:!0}),e.state.rightPassword){var t={name:e.state.firstName+e.state.lastName,email:e.state.email,password:e.state.password};w.post("/auth",t).then((function(t){e.setState({loading:!1}),v.a.set("successfulRegister",!0),e.setState({done:!0}),e.props.done(e.state.done)})).catch((function(t){e.setState({loading:!1});var c=t.response.data.errors.full_messages,s=Object.keys(c).map((function(e){return Number(e)})).map((function(e){return Object(I.a)(Array(c[e]))})).reduce((function(e,t){return e.concat(t)})).map((function(e){return Object(n.jsx)("p",{keys:e,style:{color:"red",textAlign:"center",marginTop:"3px"},children:e})}));e.setState({message:s})}))}},e.pressKey=function(){e.registerHandler()},e}return Object(l.a)(c,[{key:"render",value:function(){return Object(n.jsx)(b,{children:Object(n.jsx)(_.a,{handleKeys:["enter"],onKeyEvent:this.pressKey,children:Object(n.jsxs)("div",{className:"RegisterForm",children:[Object(n.jsx)("h2",{className:"Title",children:"Register"}),this.state.message,Object(n.jsx)(E,{label:"First Name",type:"text",setData:this.setFirstname,message:!0}),Object(n.jsx)(E,{label:"Last Name",type:"text",setData:this.setLastname,message:!0}),Object(n.jsx)(E,{label:"Email",type:"email",setData:this.setEmail,message:!0}),Object(n.jsx)(E,{label:"Password",type:"password",setData:this.setPassword,message:!0}),Object(n.jsx)(E,{label:"Confirm Password",type:"password",setData:this.checkConfirm,message:this.state.rightPassword}),Object(n.jsxs)("div",{className:"ButtonGroup",children:[Object(n.jsx)(A,{className:"RegisterButton",title:"Register Now",clicked:this.registerHandler}),Object(n.jsx)(A,{className:"LoginButton",clicked:this.props.clickedLoginButton,title:"Have an account"})]}),this.state.loading?Object(n.jsx)("div",{className:"SpinnerContainer",children:Object(n.jsx)(N,{})}):""]})})})}}]),c}(s.Component),M=function(e){return Object(n.jsx)("div",{className:"Main",children:e.show?Object(n.jsx)(B,{clickedRegisterButton:e.showRegisterForm,isRegistered:e.registered}):Object(n.jsx)(P,{clickedLoginButton:e.showLoginForm,done:e.successfulRegister})})},R=function(e){Object(u.a)(c,e);var t=Object(j.a)(c);function c(){var e;Object(o.a)(this,c);for(var n=arguments.length,s=new Array(n),a=0;a<n;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={show:!0,successfulRegister:!1},e.showRegisterFormHandler=function(){e.setState({show:!1})},e.showLoginFormHandler=function(){e.setState({show:!0})},e.loginStep=function(t){t&&e.setState({show:!0,successfulRegister:!0})},e}return Object(l.a)(c,[{key:"render",value:function(){return Object(n.jsx)(b,{children:Object(n.jsxs)("div",{className:"Welcome",children:[Object(n.jsx)(M,{show:this.state.show,showRegisterForm:this.showRegisterFormHandler,showLoginForm:this.showLoginFormHandler,successfulRegister:this.loginStep,registered:this.state.successfulRegister}),Object(n.jsx)(h,{})]})})}}]),c}(s.Component),H=function(e){Object(u.a)(c,e);var t=Object(j.a)(c);function c(){return Object(o.a)(this,c),t.apply(this,arguments)}return Object(l.a)(c,[{key:"render",value:function(){return Object(n.jsx)(d,{children:Object(n.jsx)(R,{})})}}]),c}(s.Component),F=c(4),q=c.n(F),J=c(7),W=c(2),Y=(c(97),c(98),c(99),c(5)),K=function(e){return Object(n.jsx)(b,{children:Object(n.jsxs)("div",{className:"Item",onClick:e.click,children:[Object(n.jsx)("div",{className:"Icon",children:Object(n.jsx)(Y.a,{icon:e.icon,color:e.color})}),Object(n.jsx)("p",{className:"Label",children:e.label}),Object(n.jsx)("p",{className:"Number",children:e.number})]})})},Z=c(3);var z=function(e){var t=!0,c=!1,s=!1;return 0===e.controller?(t=!0,c=!1,s=!1):1===e.controller?(t=!1,c=!0,s=!1):(t=!1,c=!1,s=!0),Object(n.jsx)(b,{children:Object(n.jsxs)("div",{className:"SideBar",children:[t?Object(n.jsx)(K,{icon:Z.l,label:"Tasks",number:e.tasklists,color:"#5cb85c",click:e.clickTodo}):Object(n.jsx)(K,{icon:Z.l,label:"Todo",number:e.tasklists,color:"white",click:e.clickTodo}),c?Object(n.jsx)(K,{icon:Z.f,label:"Inbox",number:e.shared,color:"#5cb85c",click:e.clickInBox}):Object(n.jsx)(K,{icon:Z.f,label:"Inbox",number:e.shared,color:"white",click:e.clickInBox}),s?Object(n.jsx)(K,{icon:Z.h,label:"Share",number:e.share,color:"#5cb85c",click:e.clickShare}):Object(n.jsx)(K,{icon:Z.h,label:"Share",number:e.share,color:"white",click:e.clickShare})]})})};c(102),c(103),c(104);var U=function(e){var t=Object(s.useState)(e.check),c=Object(W.a)(t,2),a=c[0],i=c[1],r=Object(s.useState)(!1),o=Object(W.a)(r,2),l=o[0],u=o[1],j=Object(s.useState)(e.name),d=Object(W.a)(j,2),h=d[0],O=d[1],f=Object(s.useState)(e.name),p=Object(W.a)(f,2),x=p[0],m=p[1],v=Object(s.useState)(!1),k=Object(W.a)(v,2),g=k[0],y=k[1];return Object(s.useEffect)((function(){function t(){return(t=Object(J.a)(q.a.mark((function t(){return q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w.patch("/task_lists/".concat(e.tasklistId,"/todos/").concat(e.id),{done:"".concat(a)});case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[a]),Object(n.jsx)(b,{children:g?"":Object(n.jsxs)("div",{className:"TodoMain",children:[Object(n.jsx)("div",{className:"TodoMainCheckbox",children:l?Object(n.jsx)("input",{type:"text",value:x,onChange:function(e){var t=e.target.value;m(t)}}):Object(n.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-around"},children:[Object(n.jsx)("input",{type:"checkbox",checked:a,onChange:function(){return i(!a)}}),Object(n.jsx)("label",{style:{fontFamily:"inherit",fontWeight:"100"},children:h})]})}),Object(n.jsxs)("div",{className:"TodoMainIcon",children:[l?Object(n.jsx)(Y.a,{icon:Z.c,style:{cursor:"pointer"},onClick:function(){w.patch("/task_lists/".concat(e.tasklistId,"/todos/").concat(e.id),{name:"".concat(x)}).then((function(e){u(!1),O(x)})).catch((function(e){console.log(e)}))}}):Object(n.jsx)(Y.a,{icon:Z.e,style:{cursor:"pointer"},onClick:function(){u(!0)}}),l?Object(n.jsx)(Y.a,{icon:Z.m,style:{cursor:"pointer"},onClick:function(){u(!1),m(h)}}):Object(n.jsx)(Y.a,{icon:Z.n,style:{cursor:"pointer"},onClick:function(){w.delete("/task_lists/".concat(e.tasklistId,"/todos/").concat(e.id)).then((function(e){y(!0)})).catch((function(e){console.log(e)}))}})]})]})})};c(105);var G=function(e){return Object(n.jsx)(b,{children:Object(n.jsxs)("div",{className:"AddTodoMain",children:[Object(n.jsx)(Y.a,{icon:Z.g,onClick:e.click,className:"AddTodoMainBtn"}),Object(n.jsx)("input",{type:"text",placeholder:"Add more tasks",onChange:function(t){var c=t.target.value;e.setData(c)},value:e.value})]})})};c(106);var V=function(e){var t=Object(s.useState)([]),c=Object(W.a)(t,2),a=c[0],i=c[1],r=Object(s.useState)(!1),o=Object(W.a)(r,2),l=o[0],u=o[1],j=Object(s.useState)(e.name),d=Object(W.a)(j,2),h=d[0],O=d[1],f=Object(s.useState)(e.name),p=Object(W.a)(f,2),x=p[0],m=p[1],v=Object(s.useState)(!1),k=Object(W.a)(v,2),g=k[0],y=k[1],N=Object(s.useState)([]),S=Object(W.a)(N,2),C=(S[0],S[1],Object(s.useState)("")),T=Object(W.a)(C,2),L=T[0],_=T[1],D=Object(s.useState)(""),B=Object(W.a)(D,2),I=B[0],E=B[1],A=Object(s.useState)(!1),P=Object(W.a)(A,2),M=P[0],R=(P[1],Object(s.useState)(!1)),H=Object(W.a)(R,2),F=(H[0],H[1],Object(s.useState)("")),K=Object(W.a)(F,2),z=(K[0],K[1],Object(s.useState)([])),V=Object(W.a)(z,2),Q=(V[0],V[1]);Object(s.useEffect)((function(){function t(){return(t=Object(J.a)(q.a.mark((function t(){var c;return q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,w.request("/task_lists/".concat(e.id,"/todos"));case 3:c=t.sent,i(c.data),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[l]),Object(s.useEffect)((function(){function e(){return(e=Object(J.a)(q.a.mark((function e(){var t;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.request("/users");case 3:t=e.sent,Q(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(s.useEffect)((function(){function t(){return(t=Object(J.a)(q.a.mark((function t(){var c;return q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,w.request("/users");case 3:c=t.sent,c.data.map((function(t){t.id===e.user_id&&E(t.email)})),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]);var X=function(e){y(!1),O(x)},$=function(e){""!==L&&(u(!0),w.post("/task_lists/".concat(e,"/todos"),JSON.stringify({name:"".concat(L)})).then((function(e){_(""),u(!1)})).catch((function(e){console.log(e)})))};return Object(n.jsx)(b,{children:Object(n.jsxs)("div",{className:"TaskListMain",children:[Object(n.jsxs)("div",{className:"TaskListMainName",children:[g?Object(n.jsx)("input",{type:"text",style:{opacity:"1"},value:h,onChange:function(e){var t=e.target.value;O(t)}}):Object(n.jsxs)("h2",{style:{opacity:"1"},children:[x,"  ",Object(n.jsxs)("span",{style:{color:"black",fontSize:"10px"},children:["(",a.length,")"]})]}),Object(n.jsxs)("div",{className:"TaskListMainNameIcon",children:[g?Object(n.jsx)(Y.a,{icon:Z.c,onClick:function(){w.patch("/task_lists/".concat(e.id),{name:"".concat(h)}).then((function(e){y(!1),m(h)})).catch((function(e){console.log(e)}))}}):Object(n.jsx)(Y.a,{icon:Z.e,onClick:function(){y(!0)}}),g?Object(n.jsx)(Y.a,{icon:Z.m,onClick:X}):Object(n.jsx)(Y.a,{icon:Z.m,onClick:X,style:{display:"none"}})]})]}),Object(n.jsx)("div",{className:"TodosMain",children:a.map((function(t){return Object(n.jsx)(U,{check:t.done,name:t.name,id:t.id+t.name,tasklistId:e.id},e.id)}))}),e.edit?Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{children:[Object(n.jsx)(G,{setData:_,click:function(){return $(e.id)},value:L}),Object(n.jsx)("div",{className:"DeleteBtn",children:Object(n.jsx)(Y.a,{icon:Z.o,color:"red",onClick:e.clickDeleteBtn})})]}),Object(n.jsx)("h6",{style:{opacity:"0"},children:"You do not have edit permission"})]}):Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{style:{opacity:"0"},children:[Object(n.jsx)(G,{setData:_,click:function(){return $(e.id)},value:L}),Object(n.jsx)("div",{className:"DeleteBtn",children:Object(n.jsx)(Y.a,{icon:Z.o,color:"red",onClick:e.clickDeleteBtn})})]}),Object(n.jsx)("h6",{style:{opacity:"1"},children:"You do not have edit permission"})]}),e.user_id?Object(n.jsxs)("h6",{style:{textAlign:"center",color:"black"},children:["Shared by ",I]}):null,M?Object(n.jsxs)("h6",{style:{textAlign:"center",color:"black"},children:["Sharing with ",M]}):null]})})},Q=c(123),X=c(124);var $=function(e){var t=Object(s.useState)([e.tasklists]),c=Object(W.a)(t,2),a=c[0],i=c[1],r=Object(s.useState)(!1),o=Object(W.a)(r,2),l=o[0],u=o[1];Object(s.useEffect)((function(){function e(){return(e=Object(J.a)(q.a.mark((function e(){var t;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.request("/task_lists");case 3:t=e.sent,i(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[l]),Object(s.useEffect)((function(){function t(){return(t=Object(J.a)(q.a.mark((function t(){return q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:i(e.tasklists);case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e.tasklists]);var j=a.map((function(e){return Object(n.jsx)(Q.a,{lg:3,children:Object(n.jsx)(V,{name:e.name,id:e.id,clickDeleteBtn:function(){return t=e.id,u(!0),void w.delete("/task_lists/".concat(t)).then((function(e){u(!1)})).catch((function(e){console.log(e)}));var t},edit:!0},e.id+e.name)},e.id)}));return Object(n.jsx)(b,{children:Object(n.jsxs)("div",{className:"MainDisplay",children:[e.children,Object(n.jsx)("div",{className:"TaskListArea",children:Object(n.jsx)(X.a,{children:j})})]})})},ee=(c(107),c(108),c(109),function(e){return Object(n.jsx)(b,{children:Object(n.jsxs)("div",{className:"DropMenuItem",onClick:e.clicked,children:[Object(n.jsx)(Y.a,{icon:e.icon}),Object(n.jsx)("p",{children:e.label})]})})}),te=function(e){return Object(n.jsx)(b,{children:Object(n.jsxs)("div",{className:"DropMenu",children:[Object(n.jsx)(ee,{label:"Profile",icon:Z.a}),Object(n.jsx)(ee,{label:"Log Out",icon:Z.k,clicked:e.clickedSignOutButton})]})})},ce=(c(110),function(e){return Object(n.jsx)(b,{children:Object(n.jsx)("div",{className:"Logo",onClick:e.clickedLogo,children:Object(n.jsx)("p",{children:"TO DO LIST v0.0"})})})}),ne=(c(111),function(e){return Object(n.jsx)(b,{children:Object(n.jsxs)("div",{className:"Search",children:[Object(n.jsx)(Y.a,{icon:Z.i,color:"black"}),Object(n.jsx)("input",{type:"text",placeholder:"Search"})]})})}),se=(c(112),function(e){return Object(n.jsx)(b,{children:Object(n.jsxs)("div",{className:"Sayhi",children:[Object(n.jsx)("p",{children:e.name}),Object(n.jsx)("div",{className:"DropDown",onClick:e.clickedDropDown,children:Object(n.jsx)(Y.a,{icon:Z.b,color:"black"})})]})})}),ae=(c(113),function(e){return Object(n.jsx)(b,{children:Object(n.jsxs)("div",{className:"DrawerToggle",onClick:e.clicked,children:[Object(n.jsx)("div",{}),Object(n.jsx)("div",{}),Object(n.jsx)("div",{})]})})}),ie=function(e){Object(u.a)(c,e);var t=Object(j.a)(c);function c(){var e;Object(o.a)(this,c);for(var n=arguments.length,s=new Array(n),a=0;a<n;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={showDropMenu:!1},e.showDropMenu=function(){e.setState({showDropMenu:!e.state.showDropMenu})},e}return Object(l.a)(c,[{key:"render",value:function(){return Object(n.jsx)(b,{children:Object(n.jsxs)("div",{className:"NavigationBar",children:[Object(n.jsx)(ae,{}),Object(n.jsx)(ce,{clickedLogo:this.props.refeshPage}),Object(n.jsx)(ne,{}),Object(n.jsx)(se,{clickedDropDown:this.showDropMenu,name:"Account"}),this.state.showDropMenu?Object(n.jsx)(te,{clickedSignOutButton:this.props.clickedSignOutButton}):""]})})}}]),c}(s.Component),re=(c(114),c(115),function(e){return Object(n.jsx)(b,{children:e.show?Object(n.jsx)("div",{className:"BackDrop",onClick:e.cancel}):null})}),oe=function(e){return Object(n.jsxs)(b,{children:[Object(n.jsx)(re,{show:e.show,cancel:e.cancel}),Object(n.jsx)("div",{className:"Modal",style:{transform:e.show?"translateY(0)":"translateY(-100vh)",opacity:e.show?"1":"0"},children:e.children})]})};c(116),c(117);var le=function(e){return Object(n.jsx)(b,{children:Object(n.jsxs)("div",{className:"InputTaskListArea",children:[Object(n.jsx)("label",{children:e.name}),Object(n.jsx)("input",{type:"text",onChange:function(t){var c=t.target.value;e.setData(c)}})]})})},ue=(c(118),function(e){return Object(n.jsx)("p",{className:"AddButtonSubmit",onClick:e.click,children:"Add"})});var je=function(e){return Object(n.jsx)(b,{children:Object(n.jsxs)("div",{className:"AddTaskListPanel",children:[Object(n.jsx)("h2",{children:"Add Task List"}),e.message?Object(n.jsx)("p",{style:{color:"red"},children:"You need to enter tasklist name"}):null,Object(n.jsx)(le,{name:"Task name",setData:e.setTaskListName}),Object(n.jsx)(le,{name:"Task 1",setData:e.setTodo1Name}),Object(n.jsx)(le,{name:"Task 2",setData:e.setTodo2Name}),Object(n.jsx)(ue,{click:e.submitHandler}),e.loading?Object(n.jsx)("div",{className:"SpinnerContainer",children:Object(n.jsx)(N,{})}):null]})})};c(119);var de=function(e){var t=Object(s.useState)([e.tasklists]),c=Object(W.a)(t,2),a=c[0],i=c[1];Object(s.useEffect)((function(){function e(){return(e=Object(J.a)(q.a.mark((function e(){var t;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.request("/shared");case 3:t=e.sent,i(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var r=a.map((function(e){return Object(n.jsx)(Q.a,{lg:3,children:Object(n.jsx)(V,{name:e.name,id:e.id,edit:e.is_write,user_id:e.user_id},e.id+e.name)},e.id)}));return Object(n.jsx)(b,{children:Object(n.jsx)("div",{className:"MainDisplay",children:Object(n.jsx)("div",{className:"TaskListArea",children:Object(n.jsx)(X.a,{children:r})})})})},be=c(30);var he=function(e){var t=Object(s.useState)(e.is_write),c=Object(W.a)(t,2),a=c[0],i=c[1],r=Object(s.useState)(!1),o=Object(W.a)(r,2),l=o[0],u=o[1],j=Object(s.useState)([]),d=Object(W.a)(j,2),b=d[0],h=d[1],O=e.user;Object(s.useEffect)((function(){function t(){return(t=Object(J.a)(q.a.mark((function t(){return q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,w.put("/task_lists/".concat(e.taskListId,"/share/").concat(e.user_id),{share_task:{is_write:"".concat(a)}});case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),console.log(t.t0);case 8:case"end":return t.stop()}}),t,null,[[0,5]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[a]),Object(s.useEffect)((function(){function t(){return(t=Object(J.a)(q.a.mark((function t(){var c;return q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,w.request("/task_lists/".concat(e.taskListId,"/todos"));case 3:c=t.sent,h(c.data),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e.taskListId]);var f=Object(n.jsxs)("div",{className:"TaskListMain",style:{width:"250px",margin:"10px"},children:[Object(n.jsx)("div",{className:"TaskListMainName",children:Object(n.jsxs)("h2",{children:[e.name,"  ",Object(n.jsxs)("span",{style:{color:"black",fontSize:"10px"},children:["(",b.length,")"]})]})}),Object(n.jsx)("div",{className:"TodosMain",children:b.map((function(t){return Object(n.jsx)(U,{check:t.done,name:t.name,id:t.id,tasklistId:e.id},e.id)}))}),Object(n.jsx)("span",{style:{color:"red",marginBottom:"20px"},children:O[e.id]}),Object(n.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-around",width:"150px"},children:[Object(n.jsx)("input",{type:"checkbox",checked:a,onChange:function(){return i(!a)}}),Object(n.jsx)("label",{style:{fontFamily:"inherit",fontWeight:"100"},children:"Edit Permission"})]}),Object(n.jsx)("div",{className:"DeleteBtn",children:Object(n.jsx)(Y.a,{icon:Z.o,color:"red",onClick:function(){try{w.delete("task_lists/".concat(e.taskListId,"/share/").concat(e.user_id)),u(!0)}catch(t){console.log(t)}}})})]});return l?null:f};var Oe=function(e){var t=Object(s.useState)({}),c=Object(W.a)(t,2),a=c[0],i=c[1],r=Object(s.useState)([]),o=Object(W.a)(r,2),l=o[0],u=o[1];Object(s.useEffect)((function(){function t(){return(t=Object(J.a)(q.a.mark((function t(){var c;return q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,w.request("/task_lists/".concat(e.id,"/share"));case 3:c=t.sent,u(c.data),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]),Object(s.useEffect)((function(){function e(){return(e=Object(J.a)(q.a.mark((function e(){var t,c,n,s;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.request("/users");case 3:t=e.sent,c=t.data,n=c.map((function(e){var t=e.id,c={id:e.email};return j(c,"id",t),c})),s=n.reduce((function(e,t){return Object(be.a)(Object(be.a)({},e),t)})),i(s),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var j=function(e,t,c){t!==c&&(Object.defineProperty(e,c,Object.getOwnPropertyDescriptor(e,t)),delete e[t])},d=l.map((function(t){return Object(n.jsx)(he,{user:a,id:t.user_id,taskListId:t.task_list_id,is_write:t.is_write,name:e.name,user_id:t.user_id},t.user_id)}));return Object(n.jsx)(b,{children:Object(n.jsx)("div",{style:{marginBottom:"15px",padding:"10px",display:"flex",overflow:"scroll",maxWidth:"1200px"},children:d})})};var fe=function(e){var t=Object(s.useState)([e.tasklists]),c=Object(W.a)(t,2),a=c[0],i=(c[1],a.reduce((function(e){return e})).map((function(e){return Object(n.jsx)("div",{children:Object(n.jsx)(Oe,{name:e.name,id:e.id},e.id+e.name)},e.id)})));return Object(n.jsx)(b,{children:Object(n.jsx)("div",{className:"MainDisplay",children:Object(n.jsx)("div",{className:"TaskListArea",children:i})})})};c(120);var pe=function(e){var t=!1;return e.correctEmail&&e.correctTaskList&&(t=!0),Object(n.jsx)(b,{children:Object(n.jsxs)("div",{className:"AddTaskListPanel ShareTaskListPanel",children:[Object(n.jsx)("h2",{children:"Share Task List"}),e.message?Object(n.jsx)("p",{style:{color:"red"},children:"You need to enter tasklist name"}):null,Object(n.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[Object(n.jsx)(le,{name:"User Email",setData:e.setUserEmail}),e.correctEmail?Object(n.jsx)(Y.a,{icon:Z.c,color:"#00ff00"}):Object(n.jsx)(Y.a,{icon:Z.m,color:"#ff0000"})]}),Object(n.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[Object(n.jsx)(le,{name:"TaskList Name",setData:e.setTasklistName}),e.correctTaskList?Object(n.jsx)(Y.a,{icon:Z.c,color:"#00ff00"}):Object(n.jsx)(Y.a,{icon:Z.m,color:"#ff0000"})]}),Object(n.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},onChange:function(t){var c=t.target.value;e.setData(c)}.bind(this),children:[Object(n.jsx)("label",{children:"Edit Permission"}),Object(n.jsx)("input",{type:"radio",value:"editor",name:"name"}),"Editor",Object(n.jsx)("input",{type:"radio",value:"watcher",name:"name"}),"Watcher"]}),Object(n.jsx)("button",{onClick:e.submitHandler,disabled:!t,style:{width:"30%",padding:"5px",backgroundColor:"#5cb85c",color:"white",outline:"none",border:"none"},children:"Submit"}),e.loading?Object(n.jsx)("div",{className:"SpinnerContainer",children:Object(n.jsx)(N,{})}):null]})})};var xe=function(e){var t=Object(s.useState)([]),c=Object(W.a)(t,2),a=c[0],i=c[1],r=Object(s.useState)(!1),o=Object(W.a)(r,2),l=o[0],u=o[1],j=Object(s.useState)(!1),d=Object(W.a)(j,2),h=d[0],O=d[1],f=Object(s.useState)(""),p=Object(W.a)(f,2),x=p[0],m=p[1],k=Object(s.useState)(""),g=Object(W.a)(k,2),y=g[0],N=g[1],S=Object(s.useState)(""),C=Object(W.a)(S,2),L=C[0],_=C[1],D=Object(s.useState)(!1),B=Object(W.a)(D,2),I=B[0],E=B[1],A=Object(s.useState)(""),P=Object(W.a)(A,2),M=(P[0],P[1],Object(s.useState)([])),R=Object(W.a)(M,2),H=R[0],F=R[1],K=Object(s.useState)([]),U=Object(W.a)(K,2),G=U[0],V=U[1],Q=Object(s.useState)(0),X=Object(W.a)(Q,2),ee=X[0],te=X[1],ce=Object(s.useState)(!1),ne=Object(W.a)(ce,2),se=ne[0],ae=ne[1],re=Object(s.useState)(""),le=Object(W.a)(re,2),ue=(le[0],le[1],Object(s.useState)("")),be=Object(W.a)(ue,2),he=be[0],Oe=be[1],xe=Object(s.useState)(!1),me=Object(W.a)(xe,2),ve=me[0],ke=me[1],ge=Object(s.useState)(!1),ye=Object(W.a)(ge,2),we=ye[0],Ne=ye[1],Se=Object(s.useState)([]),Ce=Object(W.a)(Se,2),Te=Ce[0],Le=Ce[1],_e=Object(s.useState)(!1),De=Object(W.a)(_e,2),Be=De[0],Ie=De[1],Ee=Object(s.useState)(""),Ae=Object(W.a)(Ee,2),Pe=Ae[0],Me=Ae[1],Re=Object(s.useState)(!1),He=Object(W.a)(Re,2);return He[0],He[1],Object(s.useEffect)((function(){function e(){return(e=Object(J.a)(q.a.mark((function e(){var t;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.request("/task_lists");case 3:t=e.sent,i(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[h]),Object(s.useEffect)((function(){function e(){return(e=Object(J.a)(q.a.mark((function e(){var t;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.request("/task_lists");case 3:t=e.sent,i(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(s.useEffect)((function(){function e(){return(e=Object(J.a)(q.a.mark((function e(){var t,c,n;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.request("/task_lists");case 3:t=e.sent,c=t.data,n=[],c.map((function(e){if(0!==e.share_count){var t={id:e.id,name:e.name};n.push(t)}})),V(n),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[h]),Object(s.useEffect)((function(){function e(){return(e=Object(J.a)(q.a.mark((function e(){var t;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.request("/shared");case 3:t=e.sent,F(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(s.useEffect)((function(){function e(){return(e=Object(J.a)(q.a.mark((function e(){var t;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.request("/users");case 3:t=e.sent,Le(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(n.jsx)(b,{children:Object(n.jsxs)("div",{className:"WorkPlace",children:[Object(n.jsx)(z,{clickTodo:function(){te(0)},clickInBox:function(){te(1)},clickShare:function(){te(2)},tasklists:a.length,share:G.length,shared:H.length,controller:ee}),Object(n.jsxs)("div",{className:"ActionArea",children:[Object(n.jsx)(ie,{refeshPage:function(){T.push("/account")},clickedSignOutButton:function(){v.a.set("isLoggedIn",!1),v.a.set("access_token",""),v.a.set("uid",""),v.a.set("client",""),T.push("/account")}}),0===ee?Object(n.jsxs)($,{tasklists:a,children:[Object(n.jsx)(oe,{show:I,cancel:function(){O(!1),u(!1),E(!1)},children:Object(n.jsx)(je,{setTaskListName:function(e){m(e.trim())},setTodo1Name:function(e){N(e.trim())},setTodo2Name:function(e){_(e.trim())},submitHandler:function(){O(!0),""===x?(u(!0),O(!1)):w.post("/task_lists",JSON.stringify({name:"".concat(x)})).then((function(e){var t=e.data.id;if(""===y){if(""===L)return O(!1),u(!1),void E(!1);w.post("/task_lists/".concat(t,"/todos"),JSON.stringify({name:"".concat(L)})).then((function(e){O(!1),u(!1),E(!1)})).catch((function(e){console.log(e)}))}else w.post("/task_lists/".concat(t,"/todos"),JSON.stringify({name:"".concat(y)})).then((function(e){if(""===L)return O(!1),u(!1),void E(!1);w.post("/task_lists/".concat(t,"/todos"),JSON.stringify({name:"".concat(L)})).then((function(e){O(!1),u(!1),E(!1)})).catch((function(e){console.log(e)}))})).catch((function(e){console.log(e)}))})).catch((function(e){console.log(e)}))},loading:h,message:l})}),Object(n.jsx)(oe,{show:se,cancel:function(){O(!1),u(!1),ae(!1),Ne(!1),Ie(!1),Oe(""),ke(!1),Me("")},children:Object(n.jsx)(pe,{setUserEmail:function(e){!0===Be&&Ie(!1),Te.map((function(t){t.email===e&&(Ie(!0),Oe(t.id))}))},setTasklistName:function(e){var t=e;!0===we&&Ne(!1),a.map((function(e){if(e.name===t)return Ne(!0),void Me(e.id)}))},submitHandler:function(){O(!0),w.post("/task_lists/".concat(Pe,"/share"),{user_id:"".concat(he),is_write:"".concat(ve)}).then((function(e){O(!1),ae(!1)})).catch((function(e){console.log(e)}))},loading:h,correctTaskList:we,correctEmail:Be,setData:function(e){"editor"===e?ke(!0):"watcher"===e&&ke(!1)}})}),Object(n.jsxs)("div",{className:"TaskListOption",children:[Object(n.jsx)(Y.a,{icon:Z.g,onClick:function(){E(!0)}}),Object(n.jsx)(Y.a,{icon:Z.j,onClick:function(){ae(!0)}})]})]}):null,1===ee?Object(n.jsx)(de,{tasklists:H}):null,2===ee?Object(n.jsx)(fe,{tasklists:G}):null]})]})})},me=v.a.get("isLoggedIn"),ve=function(){return!1===me?T.push("/account"):Object(n.jsx)("div",{className:"HomePage",children:Object(n.jsx)(xe,{})})};var ke=function(){return Object(n.jsx)(S.b,{history:T,children:Object(n.jsx)("div",{className:"App",children:Object(n.jsxs)(S.c,{children:[Object(n.jsx)(S.a,{path:"/account",component:H}),Object(n.jsx)(S.a,{path:"/",component:ve})]})})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(ke,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}]),[[121,1,2]]]);
//# sourceMappingURL=main.f7143904.chunk.js.map