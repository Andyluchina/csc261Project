(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{126:function(e,t,n){e.exports=n(296)},296:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(20),i=n.n(o),l=n(18),c=n.n(l),s=n(29),u=n(21),p=n(22),m=n(24),d=n(23),h=n(25),f=n(125),w=n.n(f),k=n(26),g=n.n(k),E=n(36),v=n.n(E),C=n(19),b=n.n(C),O=n(123),y=n.n(O),j=n(124),S=n.n(j),T=n(17),x=n(297),M=n(300),N=n(299),L=n(298),A=n(33),F=n.n(A),B=n(38),P=n(118),U=n.n(P),W=n(120),D=n.n(W),_=n(75),I=n.n(_),R=n(119),q=n.n(R),H=n(76),V=n.n(H),G=n(57),J=n.n(G),K=0;function Y(e,t,n,a,r){return{id:K+=1,name:e,calories:t,fat:n,carbs:a,protein:r}}Y("Frozen yoghurt",159,6,24,4),Y("Ice cream sandwich",237,9,37,4.3),Y("Eclair",262,16,24,6),Y("Cupcake",305,3.7,67,4.3),Y("Gingerbread",356,16,49,3.9);var z=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).renderElements=function(e){return e.map(function(e){return r.a.createElement(I.a,{align:"right"},e)})},n}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t=this.props.classes,n=this.props.data;if("NA"===n[0])return r.a.createElement("p",null,"There is no data for you to view given your Administrative privilege");var a=Object.keys(n[0]);return r.a.createElement(J.a,{className:t.root},r.a.createElement(U.a,{className:t.table},r.a.createElement(q.a,null,r.a.createElement(V.a,null,a.map(function(e){return r.a.createElement(I.a,{align:"right"},e)}))),r.a.createElement(D.a,null,n.map(function(t){return r.a.createElement(V.a,null,e.renderElements(Object.values(t)))}))))}}]),t}(r.a.Component),X=Object(B.withStyles)(function(e){return{root:{width:"100%",marginTop:3*e.spacing.unit,overflowX:"auto"},table:{minWidth:700}}})(z),$={dropdown:{marginTop:"30px"}},Q=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(m.a)(this,Object(d.a)(t).call(this,e))).onClick=function(){var e=Object(s.a)(c.a.mark(function e(t){var a,r;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.target.innerHTML.toUpperCase(),console.log(a),n.setState({tablename:a}),e.next=5,n.requestBackend(a);case 5:r=e.sent,n.setState({data:r}),console.log("the state of the data: "),console.log(r);case 9:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),n.requestBackend=function(){var e=Object(s.a)(c.a.mark(function e(t){var a;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log({workid:n.props.workid,tablename:t}),e.next=3,F.a.post("/~mswanso2/view_route.php",{workid:n.props.workid,tablename:t});case 3:if(a=e.sent,console.log("immediate result after request Mission"),console.log(a),"rejected"!==a.data.status){e.next=8;break}return e.abrupt("return",[]);case 8:return e.abrupt("return",a.data);case 9:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),n.toggle=n.toggle.bind(Object(T.a)(Object(T.a)(n))),n.state={dropdownOpen:!1,tablename:"",data:["NA"]},n}return Object(h.a)(t,e),Object(p.a)(t,[{key:"toggle",value:function(){this.setState(function(e){return{dropdownOpen:!e.dropdownOpen}})}},{key:"render",value:function(){return r.a.createElement(b.a,null,r.a.createElement(x.a,{isOpen:this.state.dropdownOpen,toggle:this.toggle,style:$.dropdown},r.a.createElement(M.a,{caret:!0},"Choose What you would like to see"),r.a.createElement(N.a,null,r.a.createElement(L.a,{onClick:this.onClick},"Mission"),r.a.createElement(L.a,{onClick:this.onClick},"Project"),r.a.createElement(L.a,{onClick:this.onClick},"Works_on"),r.a.createElement(L.a,{onClick:this.onClick},"Employee"),r.a.createElement(L.a,{onClick:this.onClick},"Contractor"),r.a.createElement(L.a,{onClick:this.onClick},"Supplies"))),r.a.createElement(X,{data:this.state.data}))}}]),t}(a.Component),Z=n(51),ee=n.n(Z),te=n(49),ne=n.n(te),ae=n(50),re=n.n(ae),oe=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={name:""},n.handleChange=function(e){n.setState({name:e.target.value})},n.onClick=Object(s.a)(c.a.mark(function e(){var t;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log({workid:n.props.workid,workid1:n.state.name}),e.next=3,F.a.post("/~mswanso2/delMIS_route.php",{workid:n.props.workid,mid:n.state.name});case 3:t=e.sent,console.log(t),alert(t.data);case 6:case"end":return e.stop()}},e)})),n}return Object(h.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.forceUpdate()}},{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(b.a,null,r.a.createElement("h3",{style:{marginTop:"30px"}},"Please enter the Missionid of the Mission you want to delete"),r.a.createElement("div",{className:e.container},r.a.createElement(ne.a,{className:e.formControl,variant:"filled"},r.a.createElement(re.a,{htmlFor:"component-filled"},"Mission_id"),r.a.createElement(ee.a,{id:"component-filled",value:this.state.name,onChange:this.handleChange})),r.a.createElement(g.a,{variant:"outlined",color:"secondary",className:e.button,onClick:this.onClick},"DELETE")))}}]),t}(r.a.Component),ie=Object(B.withStyles)(function(e){return{container:{display:"flex",flexWrap:"wrap"},formControl:{margin:e.spacing.unit},button:{margin:e.spacing.unit}}})(oe),le=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={name:""},n.handleChange=function(e){n.setState({name:e.target.value})},n.onClick=Object(s.a)(c.a.mark(function e(){var t;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log({workid:n.props.workid,workid1:n.state.name}),e.next=3,F.a.post("/~mswanso2/delEMP_route.php",{workid:n.props.workid,workid1:n.state.name});case 3:t=e.sent,console.log(t),alert(t.data);case 6:case"end":return e.stop()}},e)})),n}return Object(h.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.forceUpdate()}},{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(b.a,null,r.a.createElement("h3",{style:{marginTop:"30px"}},"Please enter the workid of the person you want to delete"),r.a.createElement("div",{className:e.container},r.a.createElement(ne.a,{className:e.formControl,variant:"filled"},r.a.createElement(re.a,{htmlFor:"component-filled"},"Workid"),r.a.createElement(ee.a,{id:"component-filled",value:this.state.name,onChange:this.handleChange})),r.a.createElement(g.a,{variant:"outlined",color:"secondary",className:e.button,onClick:this.onClick},"DELETE")))}}]),t}(r.a.Component),ce=Object(B.withStyles)(function(e){return{container:{display:"flex",flexWrap:"wrap"},formControl:{margin:e.spacing.unit},button:{margin:e.spacing.unit}}})(le),se={dropdown:{marginTop:"30px"}},ue=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={dropdownOpen:!1,tablename:"",data:["NA"],formToShow:""},n.onClick=function(){var e=Object(s.a)(c.a.mark(function e(t){var a;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a=t.target.innerHTML.toUpperCase(),console.log(a),n.setState({formToShow:a});case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),n.renderForms=function(){return"MISSION"==n.state.formToShow?r.a.createElement(ie,{workid:n.props.workid}):"EMPLOYEE"==n.state.formToShow?r.a.createElement(ce,{workid:n.props.workid}):"WORKS_ON"==n.state.formToShow?r.a.createElement("p",null,"This is Delete Works_on Form"):"PROJECT"==n.state.formToShow?r.a.createElement("p",null,"This is Delete Project Form"):"SUPPLIES"==n.state.formToShow?r.a.createElement("p",null,"This is Delete Supplies Form"):"CONTRACTOR"==n.state.formToShow?r.a.createElement("p",null,"This is Delete Contractor Form"):r.a.createElement("h2",null,"Please Select the category you want to delete")},n.toggle=n.toggle.bind(Object(T.a)(Object(T.a)(n))),n}return Object(h.a)(t,e),Object(p.a)(t,[{key:"toggle",value:function(){this.setState(function(e){return{dropdownOpen:!e.dropdownOpen}})}},{key:"render",value:function(){return r.a.createElement(b.a,null,r.a.createElement(x.a,{isOpen:this.state.dropdownOpen,toggle:this.toggle,style:se.dropdown},r.a.createElement(M.a,{caret:!0},"Choose What you would like to Delete"),r.a.createElement(N.a,null,r.a.createElement(L.a,{onClick:this.onClick},"Mission"),r.a.createElement(L.a,{onClick:this.onClick},"Project"),r.a.createElement(L.a,{onClick:this.onClick},"Works_on"),r.a.createElement(L.a,{onClick:this.onClick},"Employee"),r.a.createElement(L.a,{onClick:this.onClick},"Contractor"),r.a.createElement(L.a,{onClick:this.onClick},"Supplies"))),this.renderForms())}}]),t}(a.Component),pe={root:{flexGrow:1},grow:{flexGrow:1},Button:{marginLeft:"20px"},ButtonF:{marginLeft:"200px"},content:{paddingLeft:"100px",paddingRight:"100px"}},me=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(m.a)(this,Object(d.a)(t).call(this,e))).onClick=function(){n.props.clearUser(),n.props.Logout()},n.onClickFunc=function(e){console.log(e.target.innerHTML),n.setState({viewStatus:e.target.innerHTML})},n.renderContent=function(){return"View"===n.state.viewStatus?r.a.createElement(Q,{workid:n.state.workid}):"Add"===n.state.viewStatus?r.a.createElement("p",null,"This is Add page"):"Delete"===n.state.viewStatus?r.a.createElement(ue,{workid:n.state.workid}):"Update"===n.state.viewStatus?r.a.createElement("p",null,"This is Update page"):void 0},n.state={viewStatus:"View",workid:n.props.workid},n}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:pe.root},r.a.createElement(y.a,{position:"static"},r.a.createElement(S.a,null,r.a.createElement(v.a,{variant:"h6",color:"inherit",className:pe.grow},this.props.workerinfo.FNAME),r.a.createElement(g.a,{color:"inherit",style:pe.Button,onClick:this.onClick},"Logout"),r.a.createElement(b.a,null,r.a.createElement(g.a,{color:"inherit",style:pe.ButtonF,onClick:this.onClickFunc},"Add"),r.a.createElement(g.a,{color:"inherit",style:pe.Button,onClick:this.onClickFunc},"Delete"),r.a.createElement(g.a,{color:"inherit",style:pe.Button,onClick:this.onClickFunc},"Update"),r.a.createElement(g.a,{color:"inherit",style:pe.Button,onClick:this.onClickFunc},"View")))),r.a.createElement(b.a,null,r.a.createElement("h3",null,"Your info: "),r.a.createElement("p",null,this.props.workerinfo.WORK_ID),r.a.createElement("p",null,this.props.workerinfo.FNAME," ",this.props.workerinfo.LNAME),r.a.createElement("p",null,this.props.workerinfo.PHONE_NUM)),r.a.createElement(b.a,{container:!0,style:pe.content},this.renderContent()))}}]),t}(r.a.Component),de=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={workid:"",page:"login",workerinfo:{}},n.onChange=function(e){n.setState({workid:e.target.value})},n.onClick=function(){var e=Object(s.a)(c.a.mark(function e(t){var a;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(n.state.workid),e.next=3,F.a.post("/~mswanso2/info_route.php",{workid:n.state.workid});case 3:a=e.sent,console.log(a),"error"===a.data[0]?alert("illegal workid"):(n.setState({workerinfo:a.data[0]}),n.setState({page:"main"}));case 6:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),n.styles={grid:{justifyContent:"center",width:"75%",margin:"auto",textAlign:"center",marginTop:"200px"},container:{backgroundColor:"lightblue",height:"100vh"}},n.Logout=function(){n.setState({page:"login",workid:"",workerinfo:{}})},n.renderLogin=function(){return r.a.createElement(b.a,{style:n.styles.container,container:!0},r.a.createElement(b.a,{style:n.styles.grid},r.a.createElement(v.a,{component:"h2",variant:"h3",gutterBottom:!0},"The National Aeronautics and Space Administration"),r.a.createElement(v.a,{variant:"h6",gutterBottom:!0},"Please Login below with workid"),r.a.createElement(w.a,{required:!0,id:"outlined-required",label:"Required",defaultValue:n.state.workid,margin:"normal",variant:"outlined",onChange:n.onChange}),r.a.createElement("br",null),r.a.createElement(g.a,{variant:"contained",component:"span",onClick:n.onClick},"Login"),r.a.createElement("br",null),r.a.createElement(v.a,{style:{marginTop:"30px"},gutterBottom:!0},"This site is a highly classified site, any attempt to temper with this site is illegal")))},n.clearUser=function(){n.setState({workid:""})},n.renderMain=function(){return r.a.createElement(me,{Logout:n.Logout,workid:n.state.workid,clearUser:n.clearUser,workerinfo:n.state.workerinfo})},n}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return"login"===this.state.page?this.renderLogin():"main"===this.state.page?this.renderMain():void 0}}]),t}(a.Component);n(295),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement("div",null,r.a.createElement(de,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[126,1,2]]]);
//# sourceMappingURL=main.cb54a2ca.chunk.js.map