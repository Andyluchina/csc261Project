(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{126:function(e,t,a){e.exports=a(296)},296:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(27),l=a.n(o),i=a(11),c=a.n(i),s=a(26),m=a(20),u=a(21),d=a(23),p=a(22),h=a(24),f=a(125),g=a.n(f),w=a(25),k=a.n(w),E=a(38),C=a.n(E),v=a(19),b=a.n(v),O=a(123),y=a.n(O),j=a(124),S=a.n(j),T=a(12),N=a(297),x=a(300),M=a(299),F=a(298),A=a(28),L=a.n(A),P=a(34),D=a(118),U=a.n(D),W=a(120),_=a.n(W),B=a(76),I=a.n(B),R=a(119),q=a.n(R),H=a(77),J=a.n(H),V=a(59),G=a.n(V),K=0;function Y(e,t,a,n,r){return{id:K+=1,name:e,calories:t,fat:a,carbs:n,protein:r}}Y("Frozen yoghurt",159,6,24,4),Y("Ice cream sandwich",237,9,37,4.3),Y("Eclair",262,16,24,6),Y("Cupcake",305,3.7,67,4.3),Y("Gingerbread",356,16,49,3.9);var z=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).renderElements=function(e){return e.map(function(e){return r.a.createElement(I.a,{align:"right"},e)})},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.props.classes,a=this.props.data;if("NA"===a[0])return r.a.createElement("p",null,"There is no data for you to view given your Administrative privilege");var n=Object.keys(a[0]);return r.a.createElement(G.a,{className:t.root},r.a.createElement(U.a,{className:t.table},r.a.createElement(q.a,null,r.a.createElement(J.a,null,n.map(function(e){return r.a.createElement(I.a,{align:"right"},e)}))),r.a.createElement(_.a,null,a.map(function(t){return r.a.createElement(J.a,null,e.renderElements(Object.values(t)))}))))}}]),t}(r.a.Component),X=Object(P.withStyles)(function(e){return{root:{width:"100%",marginTop:3*e.spacing.unit,overflowX:"auto"},table:{minWidth:700}}})(z),$={dropdown:{marginTop:"30px"}},Q=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).onClick=function(){var e=Object(s.a)(c.a.mark(function e(t){var n,r;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.target.innerHTML.toUpperCase(),console.log(n),a.setState({tablename:n}),e.next=5,a.requestBackend(n);case 5:r=e.sent,a.setState({data:r}),console.log("the state of the data: "),console.log(r);case 9:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.requestBackend=function(){var e=Object(s.a)(c.a.mark(function e(t){var n;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log({workid:a.props.workid,tablename:t}),e.next=3,L.a.post("/~mswanso2/view_route.php",{workid:a.props.workid,tablename:t});case 3:if(n=e.sent,console.log("immediate result after request Mission"),console.log(n),"rejected"!==n.data.status){e.next=8;break}return e.abrupt("return",[]);case 8:return e.abrupt("return",n.data);case 9:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.toggle=a.toggle.bind(Object(T.a)(Object(T.a)(a))),a.state={dropdownOpen:!1,tablename:"",data:["NA"]},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"toggle",value:function(){this.setState(function(e){return{dropdownOpen:!e.dropdownOpen}})}},{key:"render",value:function(){return r.a.createElement(b.a,null,r.a.createElement(N.a,{isOpen:this.state.dropdownOpen,toggle:this.toggle,style:$.dropdown},r.a.createElement(x.a,{caret:!0},"Choose What you would like to see"),r.a.createElement(M.a,null,r.a.createElement(F.a,{onClick:this.onClick},"Mission"),r.a.createElement(F.a,{onClick:this.onClick},"Project"),r.a.createElement(F.a,{onClick:this.onClick},"Works_on"),r.a.createElement(F.a,{onClick:this.onClick},"Employee"),r.a.createElement(F.a,{onClick:this.onClick},"Contractor"),r.a.createElement(F.a,{onClick:this.onClick},"Supplies"))),r.a.createElement(X,{data:this.state.data}))}}]),t}(n.Component),Z=a(31),ee=a.n(Z),te=a(29),ae=a.n(te),ne=a(30),re=a.n(ne),oe=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={name:""},a.handleChange=function(e){a.setState({name:e.target.value})},a.onClick=Object(s.a)(c.a.mark(function e(){var t;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log({workid:a.props.workid,workid1:a.state.name}),e.next=3,L.a.post("/~mswanso2/delMIS_route.php",{workid:a.props.workid,mid:a.state.name});case 3:t=e.sent,console.log(t),alert(t.data);case 6:case"end":return e.stop()}},e)})),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.forceUpdate()}},{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(b.a,null,r.a.createElement("h3",{style:{marginTop:"30px"}},"Please enter the Missionid of the Mission you want to delete"),r.a.createElement("div",{className:e.container},r.a.createElement(ae.a,{className:e.formControl,variant:"filled"},r.a.createElement(re.a,{htmlFor:"component-filled"},"Mission_id"),r.a.createElement(ee.a,{id:"component-filled",value:this.state.name,onChange:this.handleChange})),r.a.createElement(k.a,{variant:"outlined",color:"secondary",className:e.button,onClick:this.onClick},"DELETE")))}}]),t}(r.a.Component),le=Object(P.withStyles)(function(e){return{container:{display:"flex",flexWrap:"wrap"},formControl:{margin:e.spacing.unit},button:{margin:e.spacing.unit}}})(oe),ie=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={name:""},a.handleChange=function(e){a.setState({name:e.target.value})},a.onClick=Object(s.a)(c.a.mark(function e(){var t;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log({workid:a.props.workid,workid1:a.state.name}),e.next=3,L.a.post("/~mswanso2/delEMP_route.php",{workid:a.props.workid,workid1:a.state.name});case 3:t=e.sent,console.log(t),alert(t.data);case 6:case"end":return e.stop()}},e)})),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.forceUpdate()}},{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(b.a,null,r.a.createElement("h3",{style:{marginTop:"30px"}},"Please enter the workid of the person you want to delete"),r.a.createElement("div",{className:e.container},r.a.createElement(ae.a,{className:e.formControl,variant:"filled"},r.a.createElement(re.a,{htmlFor:"component-filled"},"Workid"),r.a.createElement(ee.a,{id:"component-filled",value:this.state.name,onChange:this.handleChange})),r.a.createElement(k.a,{variant:"outlined",color:"secondary",className:e.button,onClick:this.onClick},"DELETE")))}}]),t}(r.a.Component),ce=Object(P.withStyles)(function(e){return{container:{display:"flex",flexWrap:"wrap"},formControl:{margin:e.spacing.unit},button:{margin:e.spacing.unit}}})(ie),se={dropdown:{marginTop:"30px"}},me=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).state={dropdownOpen:!1,tablename:"",data:["NA"],formToShow:""},a.onClick=function(){var e=Object(s.a)(c.a.mark(function e(t){var n;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n=t.target.innerHTML.toUpperCase(),console.log(n),a.setState({formToShow:n});case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.renderForms=function(){return"MISSION"==a.state.formToShow?r.a.createElement(le,{workid:a.props.workid}):"EMPLOYEE"==a.state.formToShow?r.a.createElement(ce,{workid:a.props.workid}):"WORKS_ON"==a.state.formToShow?r.a.createElement("p",null,"This is Delete Works_on Form"):"PROJECT"==a.state.formToShow?r.a.createElement("p",null,"This is Delete Project Form"):"SUPPLIES"==a.state.formToShow?r.a.createElement("p",null,"This is Delete Supplies Form"):"CONTRACTOR"==a.state.formToShow?r.a.createElement("p",null,"This is Delete Contractor Form"):r.a.createElement("h2",null,"Please Select the category you want to delete")},a.toggle=a.toggle.bind(Object(T.a)(Object(T.a)(a))),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"toggle",value:function(){this.setState(function(e){return{dropdownOpen:!e.dropdownOpen}})}},{key:"render",value:function(){return r.a.createElement(b.a,null,r.a.createElement(N.a,{isOpen:this.state.dropdownOpen,toggle:this.toggle,style:se.dropdown},r.a.createElement(x.a,{caret:!0},"Choose What you would like to Delete"),r.a.createElement(M.a,null,r.a.createElement(F.a,{onClick:this.onClick},"Mission"),r.a.createElement(F.a,{onClick:this.onClick},"Project"),r.a.createElement(F.a,{onClick:this.onClick},"Works_on"),r.a.createElement(F.a,{onClick:this.onClick},"Employee"),r.a.createElement(F.a,{onClick:this.onClick},"Contractor"),r.a.createElement(F.a,{onClick:this.onClick},"Supplies"))),this.renderForms())}}]),t}(n.Component),ue=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={fname:"",mi:"",lname:"",pnum:"",title:""},a.handleChangefname=function(e){a.setState({fname:e.target.value})},a.handleChangemi=function(e){a.setState({mi:e.target.value})},a.handleChangelname=function(e){a.setState({lname:e.target.value})},a.handleChangepnum=function(e){a.setState({pnum:e.target.value})},a.handleChangetitle=function(e){a.setState({title:e.target.value})},a.onClick=Object(s.a)(c.a.mark(function e(){var t;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log({fname:a.state.fname,mi:a.state.mi,lname:a.state.lname,pnum:a.state.pnum,title:a.state.title,workid:a.props.workid}),e.next=3,L.a.post("/~mswanso2/addEMP_route.php",{fname:a.state.fname,mi:a.state.mi,lname:a.state.lname,pnum:a.state.pnum,title:a.state.title,workid:a.props.workid});case 3:t=e.sent,console.log(t),alert(t.data);case 6:case"end":return e.stop()}},e)})),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.forceUpdate()}},{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(b.a,null,r.a.createElement("h3",{style:{marginTop:"30px"}},"Please enter the information of the person you want to add"),r.a.createElement("div",{className:e.container},r.a.createElement(ae.a,{className:e.formControl,variant:"filled"},r.a.createElement(re.a,{htmlFor:"component-filled"},"FisrtName"),r.a.createElement(ee.a,{id:"component-filled",value:this.state.fname,onChange:this.handleChangefname})),r.a.createElement("br",null),r.a.createElement(ae.a,{className:e.formControl,variant:"filled"},r.a.createElement(re.a,{htmlFor:"component-filled"},"Middle Inital"),r.a.createElement(ee.a,{id:"component-filled",value:this.state.mi,onChange:this.handleChangemi})),r.a.createElement("br",null),r.a.createElement(ae.a,{className:e.formControl,variant:"filled"},r.a.createElement(re.a,{htmlFor:"component-filled"},"Last Name"),r.a.createElement(ee.a,{id:"component-filled",value:this.state.lname,onChange:this.handleChangelname})),r.a.createElement("br",null),r.a.createElement(ae.a,{className:e.formControl,variant:"filled"},r.a.createElement(re.a,{htmlFor:"component-filled"},"Phone Number"),r.a.createElement(ee.a,{id:"component-filled",value:this.state.pnum,onChange:this.handleChangepnum})),r.a.createElement("br",null),r.a.createElement(ae.a,{className:e.formControl,variant:"filled"},r.a.createElement(re.a,{htmlFor:"component-filled"},"Title"),r.a.createElement(ee.a,{id:"component-filled",value:this.state.title,onChange:this.handleChangetitle})),r.a.createElement("br",null),r.a.createElement(k.a,{variant:"outlined",color:"primary",className:e.button,onClick:this.onClick},"ADD")))}}]),t}(r.a.Component),de=Object(P.withStyles)(function(e){return{container:{},formControl:{margin:e.spacing.unit},button:{margin:e.spacing.unit}}})(ue),pe=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={mname:"",mlid:""},a.handleChangemname=function(e){a.setState({mname:e.target.value})},a.handleChangemlid=function(e){a.setState({mlid:e.target.value})},a.onClick=Object(s.a)(c.a.mark(function e(){var t;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log({mname:a.state.mname,mlid:a.state.mlid,workid:a.props.workid}),e.next=3,L.a.post("/~mswanso2/addEMP_route.php",{mname:a.state.mname,mlid:a.state.mlid,workid:a.props.workid});case 3:t=e.sent,console.log(t),alert(t.data);case 6:case"end":return e.stop()}},e)})),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.forceUpdate()}},{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(b.a,null,r.a.createElement("h3",{style:{marginTop:"30px"}},"Please enter the information of the Mission you want to add"),r.a.createElement("div",{className:e.container},r.a.createElement(ae.a,{className:e.formControl,variant:"filled"},r.a.createElement(re.a,{htmlFor:"component-filled"},"Mission Name"),r.a.createElement(ee.a,{id:"component-filled",value:this.state.mname,onChange:this.handleChangemname})),r.a.createElement("br",null),r.a.createElement(ae.a,{className:e.formControl,variant:"filled"},r.a.createElement(re.a,{htmlFor:"component-filled"},"Mission Leader Id"),r.a.createElement(ee.a,{id:"component-filled",value:this.state.mlid,onChange:this.handleChangemlid})),r.a.createElement("br",null),r.a.createElement(k.a,{variant:"outlined",color:"primary",className:e.button,onClick:this.onClick},"ADD")))}}]),t}(r.a.Component),he=Object(P.withStyles)(function(e){return{container:{},formControl:{margin:e.spacing.unit},button:{margin:e.spacing.unit}}})(pe),fe={dropdown:{marginTop:"30px"}},ge=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).state={dropdownOpen:!1,tablename:"",data:["NA"],formToShow:""},a.onClick=function(){var e=Object(s.a)(c.a.mark(function e(t){var n;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n=t.target.innerHTML.toUpperCase(),console.log(n),a.setState({formToShow:n});case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.renderForms=function(){return"MISSION"==a.state.formToShow?r.a.createElement(he,{workid:a.props.workid}):"EMPLOYEE"==a.state.formToShow?r.a.createElement(de,{workid:a.props.workid}):"WORKS_ON"==a.state.formToShow?r.a.createElement("p",null,"This is Add Works_on Form"):"PROJECT"==a.state.formToShow?r.a.createElement("p",null,"This is Add Project Form"):"SUPPLIES"==a.state.formToShow?r.a.createElement("p",null,"This is Add Supplies Form"):"CONTRACTOR"==a.state.formToShow?r.a.createElement("p",null,"This is Add Contractor Form"):r.a.createElement("h2",null,"Please Select the category you want to Add")},a.toggle=a.toggle.bind(Object(T.a)(Object(T.a)(a))),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"toggle",value:function(){this.setState(function(e){return{dropdownOpen:!e.dropdownOpen}})}},{key:"render",value:function(){return r.a.createElement(b.a,null,r.a.createElement(N.a,{isOpen:this.state.dropdownOpen,toggle:this.toggle,style:fe.dropdown},r.a.createElement(x.a,{caret:!0},"Choose What you would like to Add"),r.a.createElement(M.a,null,r.a.createElement(F.a,{onClick:this.onClick},"Mission"),r.a.createElement(F.a,{onClick:this.onClick},"Project"),r.a.createElement(F.a,{onClick:this.onClick},"Works_on"),r.a.createElement(F.a,{onClick:this.onClick},"Employee"),r.a.createElement(F.a,{onClick:this.onClick},"Contractor"),r.a.createElement(F.a,{onClick:this.onClick},"Supplies"))),this.renderForms())}}]),t}(n.Component),we={root:{flexGrow:1},grow:{flexGrow:1},Button:{marginLeft:"20px"},ButtonF:{marginLeft:"200px"},content:{paddingLeft:"100px",paddingRight:"100px"}},ke=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).onClick=function(){a.props.clearUser(),a.props.Logout()},a.onClickFunc=function(e){console.log(e.target.innerHTML),a.setState({viewStatus:e.target.innerHTML})},a.renderContent=function(){return"View"===a.state.viewStatus?r.a.createElement(Q,{workid:a.state.workid}):"Add"===a.state.viewStatus?r.a.createElement(ge,{workid:a.state.workid}):"Delete"===a.state.viewStatus?r.a.createElement(me,{workid:a.state.workid}):"Update"===a.state.viewStatus?r.a.createElement("p",null,"This is Update page"):void 0},a.state={viewStatus:"View",workid:a.props.workid},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:we.root},r.a.createElement(y.a,{position:"static"},r.a.createElement(S.a,null,r.a.createElement(C.a,{variant:"h6",color:"inherit",className:we.grow},this.props.workerinfo.FNAME),r.a.createElement(k.a,{color:"inherit",style:we.Button,onClick:this.onClick},"Logout"),r.a.createElement(b.a,null,r.a.createElement(k.a,{color:"inherit",style:we.ButtonF,onClick:this.onClickFunc},"Add"),r.a.createElement(k.a,{color:"inherit",style:we.Button,onClick:this.onClickFunc},"Delete"),r.a.createElement(k.a,{color:"inherit",style:we.Button,onClick:this.onClickFunc},"Update"),r.a.createElement(k.a,{color:"inherit",style:we.Button,onClick:this.onClickFunc},"View")))),r.a.createElement(b.a,null,r.a.createElement("h3",null,"Your info: "),r.a.createElement("p",null,this.props.workerinfo.WORK_ID),r.a.createElement("p",null,this.props.workerinfo.FNAME," ",this.props.workerinfo.LNAME),r.a.createElement("p",null,this.props.workerinfo.PHONE_NUM)),r.a.createElement(b.a,{container:!0,style:we.content},this.renderContent()))}}]),t}(r.a.Component),Ee=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).state={workid:"",page:"login",workerinfo:{}},a.onChange=function(e){a.setState({workid:e.target.value})},a.onClick=function(){var e=Object(s.a)(c.a.mark(function e(t){var n;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(a.state.workid),e.next=3,L.a.post("/~mswanso2/info_route.php",{workid:a.state.workid});case 3:n=e.sent,console.log(n),"error"===n.data[0]?alert("illegal workid"):(a.setState({workerinfo:n.data[0]}),a.setState({page:"main"}));case 6:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.styles={grid:{justifyContent:"center",width:"75%",margin:"auto",textAlign:"center",marginTop:"200px"},container:{backgroundColor:"lightblue",height:"100vh"}},a.Logout=function(){a.setState({page:"login",workid:"",workerinfo:{}})},a.renderLogin=function(){return r.a.createElement(b.a,{style:a.styles.container,container:!0},r.a.createElement(b.a,{style:a.styles.grid},r.a.createElement(C.a,{component:"h2",variant:"h3",gutterBottom:!0},"The National Aeronautics and Space Administration"),r.a.createElement(C.a,{variant:"h6",gutterBottom:!0},"Please Login below with workid"),r.a.createElement(g.a,{required:!0,id:"outlined-required",label:"Required",defaultValue:a.state.workid,margin:"normal",variant:"outlined",onChange:a.onChange}),r.a.createElement("br",null),r.a.createElement(k.a,{variant:"contained",component:"span",onClick:a.onClick},"Login"),r.a.createElement("br",null),r.a.createElement(C.a,{style:{marginTop:"30px"},gutterBottom:!0},"This site is a highly classified site, any attempt to temper with this site is illegal")))},a.clearUser=function(){a.setState({workid:""})},a.renderMain=function(){return r.a.createElement(ke,{Logout:a.Logout,workid:a.state.workid,clearUser:a.clearUser,workerinfo:a.state.workerinfo})},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return"login"===this.state.page?this.renderLogin():"main"===this.state.page?this.renderMain():void 0}}]),t}(n.Component);a(295),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement("div",null,r.a.createElement(Ee,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[126,1,2]]]);
//# sourceMappingURL=main.38dff12a.chunk.js.map