(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{121:function(e,t,n){e.exports=n(296)},296:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(19),i=n.n(o),l=n(42),c=n.n(l),s=n(51),u=n(27),p=n(28),d=n(31),m=n(29),h=n(32),g=n(119),w=n.n(g),k=n(25),f=n.n(k),E=n(35),v=n.n(E),b=n(24),C=n.n(b),y=n(117),O=n.n(y),j=n(118),S=n.n(j),x=n(17),L=n(297),A=n(300),B=n(299),T=n(298),N=n(52),M=n.n(N),F=n(69),U=n(112),q=n.n(U),W=n(114),_=n.n(W),D=n(70),H=n.n(D),V=n(113),G=n.n(V),I=n(71),P=n.n(I),R=n(50),J=n.n(R),z=0;function K(e,t,n,a,r){return{id:z+=1,name:e,calories:t,fat:n,carbs:a,protein:r}}K("Frozen yoghurt",159,6,24,4),K("Ice cream sandwich",237,9,37,4.3),K("Eclair",262,16,24,6),K("Cupcake",305,3.7,67,4.3),K("Gingerbread",356,16,49,3.9);var X=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).renderElements=function(e){return e.map(function(e){return r.a.createElement(H.a,{align:"right"},e)})},n}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t=this.props.classes,n=this.props.data;if("NA"===n[0])return r.a.createElement("p",null,"There is no data for you to view given your Administrative privilege");var a=Object.keys(n[0]);return r.a.createElement(J.a,{className:t.root},r.a.createElement(q.a,{className:t.table},r.a.createElement(G.a,null,r.a.createElement(P.a,null,a.map(function(e){return r.a.createElement(H.a,{align:"right"},e)}))),r.a.createElement(_.a,null,n.map(function(t){return r.a.createElement(P.a,null,e.renderElements(Object.values(t)))}))))}}]),t}(r.a.Component),Y=Object(F.withStyles)(function(e){return{root:{width:"100%",marginTop:3*e.spacing.unit,overflowX:"auto"},table:{minWidth:700}}})(X),$={dropdown:{marginTop:"30px"}},Q=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(d.a)(this,Object(m.a)(t).call(this,e))).onClick=function(e){var t=e.target.innerHTML.toUpperCase();console.log(t),n.setState({tablename:t});var a=n.requestBackend(t);n.setState({data:a}),console.log("the state of the data: "),console.log(a)},n.requestBackend=function(){var e=Object(s.a)(c.a.mark(function e(t){var a;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log({workid:n.props.workid,tablename:t}),e.next=3,M.a.post("/~mswanso2/view_route.php",{workid:n.props.workid,tablename:t});case 3:if(a=e.sent,console.log("immediate result after request Mission"),console.log(a),"rejected"!==a.data.status){e.next=8;break}return e.abrupt("return",[]);case 8:return e.abrupt("return",a.data);case 9:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),n.toggle=n.toggle.bind(Object(x.a)(Object(x.a)(n))),n.state={dropdownOpen:!1,tablename:"",data:["NA"]},n}return Object(h.a)(t,e),Object(p.a)(t,[{key:"toggle",value:function(){this.setState(function(e){return{dropdownOpen:!e.dropdownOpen}})}},{key:"render",value:function(){return r.a.createElement(C.a,null,r.a.createElement(L.a,{isOpen:this.state.dropdownOpen,toggle:this.toggle,style:$.dropdown},r.a.createElement(A.a,{caret:!0},"Choose What you would like to see"),r.a.createElement(B.a,null,r.a.createElement(T.a,{onClick:this.onClick},"Mission"),r.a.createElement(T.a,{onClick:this.onClick},"Project"),r.a.createElement(T.a,{onClick:this.onClick},"Works_on"),r.a.createElement(T.a,{onClick:this.onClick},"Employee"),r.a.createElement(T.a,{onClick:this.onClick},"Contractor"),r.a.createElement(T.a,{onClick:this.onClick},"Supplies"))),r.a.createElement(Y,{data:this.state.data}))}}]),t}(a.Component),Z={root:{flexGrow:1},grow:{flexGrow:1},Button:{marginLeft:"20px"},ButtonF:{marginLeft:"200px"},content:{paddingLeft:"100px",paddingRight:"100px"}},ee=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(d.a)(this,Object(m.a)(t).call(this,e))).onClick=function(){n.props.clearUser(),n.props.Logout()},n.onClickFunc=function(e){console.log(e.target.innerHTML),n.setState({viewStatus:e.target.innerHTML})},n.renderContent=function(){return"View"===n.state.viewStatus?r.a.createElement(Q,{workid:n.state.workid}):"Add"===n.state.viewStatus?r.a.createElement("p",null,"This is Add page"):"Delete"===n.state.viewStatus?r.a.createElement("p",null,"This is Delete page"):"Update"===n.state.viewStatus?r.a.createElement("p",null,"This is Update page"):void 0},n.state={viewStatus:"View",workid:n.props.workid},n}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:Z.root},r.a.createElement(O.a,{position:"static"},r.a.createElement(S.a,null,r.a.createElement(v.a,{variant:"h6",color:"inherit",className:Z.grow},this.props.workerinfo.FNAME),r.a.createElement(f.a,{color:"inherit",style:Z.Button,onClick:this.onClick},"Logout"),r.a.createElement(C.a,null,r.a.createElement(f.a,{color:"inherit",style:Z.ButtonF,onClick:this.onClickFunc},"Add"),r.a.createElement(f.a,{color:"inherit",style:Z.Button,onClick:this.onClickFunc},"Delete"),r.a.createElement(f.a,{color:"inherit",style:Z.Button,onClick:this.onClickFunc},"Update"),r.a.createElement(f.a,{color:"inherit",style:Z.Button,onClick:this.onClickFunc},"View")))),r.a.createElement(C.a,null,r.a.createElement("h3",null,"Your info: "),r.a.createElement("p",null,this.props.workerinfo.WORK_ID),r.a.createElement("p",null,this.props.workerinfo.FNAME," ",this.props.workerinfo.LNAME),r.a.createElement("p",null,this.props.workerinfo.PHONE_NUM)),r.a.createElement(C.a,{container:!0,style:Z.content},this.renderContent()))}}]),t}(r.a.Component),te=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={workid:"",page:"login",workerinfo:{}},n.onChange=function(e){n.setState({workid:e.target.value})},n.onClick=function(){var e=Object(s.a)(c.a.mark(function e(t){var a;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(n.state.workid),e.next=3,M.a.post("/~mswanso2/info_route.php",{workid:n.state.workid});case 3:a=e.sent,console.log(a),"error"===a.data[0]?alert("illegal workid"):(n.setState({workerinfo:a.data[0]}),n.setState({page:"main"}));case 6:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),n.styles={grid:{justifyContent:"center",width:"75%",margin:"auto",textAlign:"center",marginTop:"200px"},container:{backgroundColor:"lightblue",height:"100vh"}},n.Logout=function(){n.setState({page:"login",workid:"",workerinfo:{}})},n.renderLogin=function(){return r.a.createElement(C.a,{style:n.styles.container,container:!0},r.a.createElement(C.a,{style:n.styles.grid},r.a.createElement(v.a,{component:"h2",variant:"h3",gutterBottom:!0},"The National Aeronautics and Space Administration"),r.a.createElement(v.a,{variant:"h6",gutterBottom:!0},"Please Login below with workid"),r.a.createElement(w.a,{required:!0,id:"outlined-required",label:"Required",defaultValue:n.state.workid,margin:"normal",variant:"outlined",onChange:n.onChange}),r.a.createElement("br",null),r.a.createElement(f.a,{variant:"contained",component:"span",onClick:n.onClick},"Login"),r.a.createElement("br",null),r.a.createElement(v.a,{style:{marginTop:"30px"},gutterBottom:!0},"This site is a highly classified site, any attempt to temper with this site is illegal")))},n.clearUser=function(){n.setState({workid:""})},n.renderMain=function(){return r.a.createElement(ee,{Logout:n.Logout,workid:n.state.workid,clearUser:n.clearUser,workerinfo:n.state.workerinfo})},n}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return"login"===this.state.page?this.renderLogin():"main"===this.state.page?this.renderMain():void 0}}]),t}(a.Component);n(295),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement("div",null,r.a.createElement(te,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[121,1,2]]]);
//# sourceMappingURL=main.ccf7f693.chunk.js.map