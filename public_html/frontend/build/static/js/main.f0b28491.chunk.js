(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{140:function(e,t,a){e.exports=a(318)},318:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(31),i=a.n(o),l=a(7),s=a.n(l),c=a(15),m=a(24),u=a(20),p=a(26),d=a(25),h=a(27),f=a(84),g=a.n(f),E=a(12),k=a.n(E),w=a(35),b=a.n(w),C=a(13),v=a.n(C),y=a(138),O=a.n(y),j=a(139),S=a.n(j),N=a(30),A=a(319),M=a(322),D=a(320),x=a(321),P=a(28),T=a.n(P),F=a(65),U=a(32),_=a(85),L=a.n(_),B=a(87),W=a.n(B),I=a(37),R=a.n(I),J=a(86),q=a.n(J),V=a(56),Y=a.n(V),H=a(55),G=a.n(H),K=a(131),X=a.n(K),$=a(135),z=a.n($),Q=a(133),Z=a.n(Q),ee=a(134),te=a.n(ee),ae=a(132),ne=a.n(ae),re=a(14),oe=a.n(re),ie=a(68),le=a.n(ie),se=a(67),ce=a.n(se),me=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={open:!1,pre:{},cur:{}},a.renderElements=function(e){return e.map(function(e){return r.a.createElement(R.a,{align:"right"},e)})},a.renderButtons=function(e){return r.a.createElement(R.a,{align:"right"},r.a.createElement(k.a,{variant:"contained",color:"primary",style:{marginRight:5},onClick:function(){return a.onClickUpdate(e)}},"Update"),r.a.createElement(k.a,{variant:"contained",color:"secondary",onClick:function(){return a.onClickDelete(e)}},"Delete"))},a.onClickDelete=function(){var e=Object(c.a)(s.a.mark(function e(t){var n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log({workid:a.props.workid,tableName:a.props.tableName,payload:t}),e.next=3,T.a.post("/~mswanso2/DEL_route.php",{workid:a.props.workid,tableName:a.props.tableName,payload:t});case 3:n=e.sent,alert(n.data),a.props.onUpdateData(a.props.tableName);case 6:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.onClickUpdate=function(e){a.setState({open:!0,pre:e,cur:e})},a.handleClose=function(){a.setState({open:!1,pre:{},cur:{}})},a.submitUpdate=Object(c.a)(s.a.mark(function e(){var t;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.setState({open:!1}),console.log({workid:a.props.workid,tableName:a.props.tableName,payload:{pre:a.state.pre,cur:a.state.cur}}),e.next=4,T.a.post("/~mswanso2/UPD_route.php",{workid:a.props.workid,tableName:a.props.tableName,payload:{pre:a.state.pre,cur:a.state.cur}});case 4:t=e.sent,alert(t.data),a.props.onUpdateData(a.props.tableName);case 7:case"end":return e.stop()}},e)})),a.onChangeCur=function(e,t){var n=Object(F.a)({},a.state.cur);n[t]=e.target.value,a.setState({cur:n})},a.containsObject=function(e,t){var a;for(a=0;a<t.length;a++)if(JSON.stringify(t[a])===JSON.stringify(e))return!0;return!1},a.getValue=function(e){return a.containsObject(e,a.props.AssignedEmployees)},a.handleChangecheck=function(e,t){console.log(t.target.checked),!0===t.target.checked?t.target.checked=!1:t.target.checked=!0},a.renderCheckBox=function(e){return"hideMassAssign"===a.props.showMassAssign?r.a.createElement(ce.a,{control:r.a.createElement(le.a,{checked:a.getValue(e),onChange:function(t){return a.handleChangecheck(e,t)},value:"assignable"})}):void 0},a.renderCheckhead=function(){return"hideMassAssign"===a.props.showMassAssign?r.a.createElement(R.a,{align:"right"},"Checkbox"):void 0},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.props.classes,a=this.props.data;if("NA"===a[0])return r.a.createElement("p",null,"There is no data for you to view given your Administrative privilege");var n=Object.keys(a[0]);return r.a.createElement("div",null,r.a.createElement(G.a,{className:t.root},r.a.createElement(L.a,{className:t.table},r.a.createElement(q.a,null,r.a.createElement(Y.a,null,this.renderCheckhead(),n.map(function(e){return r.a.createElement(R.a,{align:"right"},e)}))),r.a.createElement(W.a,null,a.map(function(t){return r.a.createElement(Y.a,null,e.renderCheckBox(t),e.renderElements(Object.values(t)),e.renderButtons(t))})))),r.a.createElement(X.a,{open:this.state.open,onClose:this.handleClose,"aria-labelledby":"form-dialog-title",fullWidth:!0},r.a.createElement(ne.a,{id:"form-dialog-title"},"Update"),r.a.createElement(Z.a,null,r.a.createElement(te.a,null,"Update you things here. Click Cancel if you want to quit"),r.a.createElement(L.a,{className:t.table},r.a.createElement(q.a,null,r.a.createElement(Y.a,null,r.a.createElement(R.a,{align:"right"},"Attribute Name"),r.a.createElement(R.a,{align:"right"},"Current Value"),r.a.createElement(R.a,{align:"right"},"Update Value"))),r.a.createElement(W.a,null,Object.keys(this.state.pre).map(function(t,a){return r.a.createElement(Y.a,null,r.a.createElement(R.a,{align:"right"},t),r.a.createElement(R.a,{align:"right"},e.state.pre[t]),r.a.createElement(R.a,{align:"right"},r.a.createElement(oe.a,{id:"component-filled",value:e.state.cur[t],onChange:function(a){e.onChangeCur(a,t)}})))})))),r.a.createElement(z.a,null,r.a.createElement(k.a,{onClick:this.handleClose,color:"primary"},"Cancel"),r.a.createElement(k.a,{onClick:this.submitUpdate,color:"primary"},"Submit"))))}}]),t}(r.a.Component),ue=Object(U.withStyles)(function(e){return{root:{width:"100%",marginTop:3*e.spacing.unit,overflowX:"auto"},table:{minWidth:700},button:{marginRight:5}}})(me),pe=a(66),de=a(16),he=a.n(de),fe=a(17),ge=a.n(fe),Ee=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={initialData:{},referenceData:{},assignable:!1},a.handleChange=function(e,t){var n=a.state.initialData;n[e]=t.target.value,a.setState({initialData:n})},a.onClick=Object(c.a)(s.a.mark(function e(){var t;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log({tablename:a.props.tablename,workid:a.props.workid,payload:a.state.initialData,assignable:a.state.assignable}),e.next=3,T.a.post("/~mswanso2/search_route.php",{tablename:a.props.tablename,workid:a.props.workid,payload:a.state.initialData,assignable:a.state.assignable});case 3:t=e.sent,console.log("searching"),console.log(t),a.props.updateSearch(t.data);case 7:case"end":return e.stop()}},e)})),a.handleChangecheck=function(e){return function(t){a.setState(Object(pe.a)({},e,t.target.checked))}},a.renderAssignable=function(){if("EMPLOYEE"===a.props.tablename)return r.a.createElement(ce.a,{control:r.a.createElement(le.a,{checked:a.state.assignable,onChange:a.handleChangecheck("assignable"),value:"assignable"}),label:"assignable"})},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentWillMount",value:function(){this.setState({referenceData:this.props.initialData})}},{key:"render",value:function(){var e=this,t=this.props.classes;return""===this.props.tablename?r.a.createElement(v.a,null):(JSON.stringify(this.state.referenceData)===JSON.stringify(this.props.initialData)||(this.setState({initialData:null,referenceData:null}),this.setState({initialData:this.props.initialData,referenceData:this.props.initialData})),r.a.createElement(v.a,null,r.a.createElement("h3",{style:{marginTop:"30px"}},"Search the ",this.props.tablename," Table"),r.a.createElement("div",{className:t.container},this.props.attributes.map(function(a){return r.a.createElement(he.a,{className:t.formControl,variant:"filled",style:{marginRight:7}},r.a.createElement(ge.a,{htmlFor:"component-filled"},a),r.a.createElement(oe.a,{id:"component-filled",value:e.state.initialData[a],onChange:function(t){return e.handleChange(a,t)}}))}),this.renderAssignable(),r.a.createElement(k.a,{variant:"outlined",color:"primary",className:t.button,onClick:this.onClick},"Search"))))}}]),t}(r.a.Component),ke=Object(U.withStyles)(function(e){return{container:{},formControl:{margin:e.spacing.unit},button:{margin:e.spacing.unit}}})(Ee),we={dropdown:{marginTop:"30px"}},be=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).onClick=function(){var e=Object(c.a)(s.a.mark(function e(t){var n,r,o,i;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.target.innerHTML.toUpperCase(),console.log(n),a.setState({tablename:n}),e.next=5,a.requestBackend(n);case 5:r=e.sent,a.setState({data:r}),o=a.state.schema[a.state.tablename],i={},o.forEach(function(e){i[e]=""}),a.setState({attributes:o,initialData:i}),console.log(a.state);case 12:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.onUpdateData=function(){var e=Object(c.a)(s.a.mark(function e(t){var n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.requestBackend(t);case 2:n=e.sent,a.setState({data:n}),console.log(n);case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.requestBackend=function(){var e=Object(c.a)(s.a.mark(function e(t){var n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log({workid:a.props.workid,tablename:t}),e.next=3,T.a.post("/~mswanso2/view_route.php",{workid:a.props.workid,tablename:t});case 3:if(n=e.sent,console.log("immediate result after request Mission"),console.log(n),"rejected"!==n.data.status){e.next=8;break}return e.abrupt("return",[]);case 8:return e.abrupt("return",n.data);case 9:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.setData=function(e){a.setState({initialData:e})},a.updateSearch=function(e){a.setState({data:e})},a.onClickMassAssign=Object(c.a)(s.a.mark(function e(){var t,n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if("showMassAssign"!==a.state.showMassAssign){e.next=9;break}return a.setState({showMassAssign:"hideMassAssign"}),e.next=4,T.a.post("/~mswanso2/search_route.php",{tablename:"EMPLOYEE",workid:a.props.workid,payload:a.state.initialData,assignable:!0});case 4:t=e.sent,console.log(t.data),a.setState({data:t.data}),e.next=14;break;case 9:return a.setState({showMassAssign:"showMassAssign"}),e.next=12,a.requestBackend("EMPLOYEE");case 12:n=e.sent,a.setState({data:n});case 14:case"end":return e.stop()}},e)})),a.appendData=function(e){var t=a.state.AssignedEmployees;t.push(e),a.setState({AssignedEmployees:t})},a.removeData=function(e){var t=a.state.AssignedEmployees.filter(function(t){return!JSON.stringify(t)===JSON.stringify(e)});a.setState({AssignedEmployees:t})},a.onClickSubmitMassAssign=function(){},a.handleChangeMassAssignPid=function(e){a.setState({MassAssignPid:e.target.value})},a.renderAssignableForm=function(){return"showMassAssign"===a.state.showMassAssign?r.a.createElement(v.a,null):r.a.createElement(v.a,null,r.a.createElement(he.a,{variant:"filled"},r.a.createElement(ge.a,{htmlFor:"component-filled"},"Project Id"),r.a.createElement(oe.a,{id:"component-filled",value:a.state.MassAssignPid,onChange:a.handleChangeMassAssignPid})),r.a.createElement(k.a,{variant:"outlined",color:"primary",onClick:a.onClickSubmitMassAssign},"Submit"))},a.renderMassAssign=function(){if("EMPLOYEE"===a.state.tablename)return r.a.createElement(v.a,null,r.a.createElement(k.a,{variant:"outlined",color:"primary",onClick:a.onClickMassAssign},a.state.showMassAssign),a.renderAssignableForm())},a.toggle=a.toggle.bind(Object(N.a)(Object(N.a)(a))),a.state={dropdownOpen:!1,tablename:"",data:["NA"],attributes:[],initialData:{},schema:{},showMassAssign:"showMassAssign",MassAssignPid:"",AssignedEmployees:[]},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentWillMount",value:function(){var e=Object(c.a)(s.a.mark(function e(){var t;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.a.post("/~mswanso2/schema_route.php");case 2:t=e.sent,console.log(t.data),this.setState({schema:t.data});case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}]),Object(u.a)(t,[{key:"toggle",value:function(){this.setState(function(e){return{dropdownOpen:!e.dropdownOpen}})}},{key:"render",value:function(){return r.a.createElement(v.a,null,r.a.createElement(A.a,{isOpen:this.state.dropdownOpen,toggle:this.toggle,style:we.dropdown},r.a.createElement(M.a,{caret:!0},"Choose What you would like to see"),r.a.createElement(D.a,null,r.a.createElement(x.a,{onClick:this.onClick},"Mission"),r.a.createElement(x.a,{onClick:this.onClick},"Project"),r.a.createElement(x.a,{onClick:this.onClick},"Works_on"),r.a.createElement(x.a,{onClick:this.onClick},"Employee"),r.a.createElement(x.a,{onClick:this.onClick},"Contractor"),r.a.createElement(x.a,{onClick:this.onClick},"Supplies"))),r.a.createElement(ke,{tablename:this.state.tablename,workid:this.props.workid,updateSearch:this.updateSearch,attributes:this.state.attributes,initialData:this.state.initialData,setData:this.setData}),r.a.createElement("br",null),this.renderMassAssign(),r.a.createElement(ue,{data:this.state.data,workid:this.props.workid,tableName:this.state.tablename,onUpdateData:this.onUpdateData,showMassAssign:this.state.showMassAssign,AssignedEmployees:this.state.AssignedEmployees,appendData:this.appendData,removeData:this.removeData}))}}]),t}(n.Component),Ce=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={fname:"",mi:"",lname:"",pnum:"",title:""},a.handleChangefname=function(e){a.setState({fname:e.target.value})},a.handleChangemi=function(e){a.setState({mi:e.target.value})},a.handleChangelname=function(e){a.setState({lname:e.target.value})},a.handleChangepnum=function(e){a.setState({pnum:e.target.value})},a.handleChangetitle=function(e){a.setState({title:e.target.value})},a.onClick=Object(c.a)(s.a.mark(function e(){var t;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log({fname:a.state.fname,mi:a.state.mi,lname:a.state.lname,pnum:a.state.pnum,title:a.state.title,workid:a.props.workid}),e.next=3,T.a.post("/~mswanso2/addEMP_route.php",{fname:a.state.fname,mi:a.state.mi,lname:a.state.lname,pnum:a.state.pnum,title:a.state.title,workid:a.props.workid});case 3:t=e.sent,console.log(t),alert(t.data);case 6:case"end":return e.stop()}},e)})),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.forceUpdate()}},{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(v.a,null,r.a.createElement("h3",{style:{marginTop:"30px"}},"Please enter the information of the person you want to add"),r.a.createElement("div",{className:e.container},r.a.createElement(he.a,{className:e.formControl,variant:"filled"},r.a.createElement(ge.a,{htmlFor:"component-filled"},"FisrtName"),r.a.createElement(oe.a,{id:"component-filled",value:this.state.fname,onChange:this.handleChangefname})),r.a.createElement("br",null),r.a.createElement(he.a,{className:e.formControl,variant:"filled"},r.a.createElement(ge.a,{htmlFor:"component-filled"},"Middle Inital"),r.a.createElement(oe.a,{id:"component-filled",value:this.state.mi,onChange:this.handleChangemi})),r.a.createElement("br",null),r.a.createElement(he.a,{className:e.formControl,variant:"filled"},r.a.createElement(ge.a,{htmlFor:"component-filled"},"Last Name"),r.a.createElement(oe.a,{id:"component-filled",value:this.state.lname,onChange:this.handleChangelname})),r.a.createElement("br",null),r.a.createElement(he.a,{className:e.formControl,variant:"filled"},r.a.createElement(ge.a,{htmlFor:"component-filled"},"Phone Number"),r.a.createElement(oe.a,{id:"component-filled",value:this.state.pnum,onChange:this.handleChangepnum})),r.a.createElement("br",null),r.a.createElement(he.a,{className:e.formControl,variant:"filled"},r.a.createElement(ge.a,{htmlFor:"component-filled"},"Title"),r.a.createElement(oe.a,{id:"component-filled",value:this.state.title,onChange:this.handleChangetitle})),r.a.createElement("br",null),r.a.createElement(k.a,{variant:"outlined",color:"primary",className:e.button,onClick:this.onClick},"ADD")))}}]),t}(r.a.Component),ve=Object(U.withStyles)(function(e){return{container:{},formControl:{margin:e.spacing.unit},button:{margin:e.spacing.unit}}})(Ce),ye=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={mname:"",mlid:""},a.handleChangemname=function(e){a.setState({mname:e.target.value})},a.handleChangemlid=function(e){a.setState({mlid:e.target.value})},a.onClick=Object(c.a)(s.a.mark(function e(){var t;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log({mname:a.state.mname,mlid:a.state.mlid,workid:a.props.workid}),e.next=3,T.a.post("/~mswanso2/addMIS_route.php",{mname:a.state.mname,mlid:a.state.mlid,workid:a.props.workid});case 3:t=e.sent,console.log(t),alert(t.data);case 6:case"end":return e.stop()}},e)})),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.forceUpdate()}},{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(v.a,null,r.a.createElement("h3",{style:{marginTop:"30px"}},"Please enter the information of the Mission you want to add"),r.a.createElement("div",{className:e.container},r.a.createElement(he.a,{className:e.formControl,variant:"filled"},r.a.createElement(ge.a,{htmlFor:"component-filled"},"Mission Name"),r.a.createElement(oe.a,{id:"component-filled",value:this.state.mname,onChange:this.handleChangemname})),r.a.createElement("br",null),r.a.createElement(he.a,{className:e.formControl,variant:"filled"},r.a.createElement(ge.a,{htmlFor:"component-filled"},"Mission Leader Id"),r.a.createElement(oe.a,{id:"component-filled",value:this.state.mlid,onChange:this.handleChangemlid})),r.a.createElement("br",null),r.a.createElement(k.a,{variant:"outlined",color:"primary",className:e.button,onClick:this.onClick},"ADD")))}}]),t}(r.a.Component),Oe=Object(U.withStyles)(function(e){return{container:{},formControl:{margin:e.spacing.unit},button:{margin:e.spacing.unit}}})(ye),je=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={cname:""},a.handleChangemname=function(e){a.setState({cname:e.target.value})},a.onClick=Object(c.a)(s.a.mark(function e(){var t;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log({cname:a.state.cname,workid:a.props.workid}),e.next=3,T.a.post("/~mswanso2/addCON_route.php",{cname:a.state.cname,workid:a.props.workid});case 3:t=e.sent,console.log(t),alert(t.data);case 6:case"end":return e.stop()}},e)})),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.forceUpdate()}},{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(v.a,null,r.a.createElement("h3",{style:{marginTop:"30px"}},"Please enter the information of the Contractor you want to add"),r.a.createElement("div",{className:e.container},r.a.createElement(he.a,{className:e.formControl,variant:"filled"},r.a.createElement(ge.a,{htmlFor:"component-filled"},"Contractor Name"),r.a.createElement(oe.a,{id:"component-filled",value:this.state.cname,onChange:this.handleChangemname})),r.a.createElement("br",null),r.a.createElement(k.a,{variant:"outlined",color:"primary",className:e.button,onClick:this.onClick},"ADD")))}}]),t}(r.a.Component),Se=Object(U.withStyles)(function(e){return{container:{},formControl:{margin:e.spacing.unit},button:{margin:e.spacing.unit}}})(je),Ne=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={pname:"",mid:"",plid:""},a.handleChangepname=function(e){a.setState({pname:e.target.value})},a.handleChangemid=function(e){a.setState({mid:e.target.value})},a.handleChangeplid=function(e){a.setState({plid:e.target.value})},a.onClick=Object(c.a)(s.a.mark(function e(){var t;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log({pname:a.state.pname,mid:a.state.mid,plid:a.state.plid,workid:a.props.workid}),e.next=3,T.a.post("/~mswanso2/addPRJ_route.php",{pname:a.state.pname,mid:a.state.mid,plid:a.state.plid,workid:a.props.workid});case 3:t=e.sent,console.log(t),alert(t.data);case 6:case"end":return e.stop()}},e)})),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.forceUpdate()}},{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(v.a,null,r.a.createElement("h3",{style:{marginTop:"30px"}},"Please enter the information of the Project you want to add"),r.a.createElement("div",{className:e.container},r.a.createElement(he.a,{className:e.formControl,variant:"filled"},r.a.createElement(ge.a,{htmlFor:"component-filled"},"Project Name"),r.a.createElement(oe.a,{id:"component-filled",value:this.state.pname,onChange:this.handleChangepname})),r.a.createElement("br",null),r.a.createElement(he.a,{className:e.formControl,variant:"filled"},r.a.createElement(ge.a,{htmlFor:"component-filled"},"Mission Id"),r.a.createElement(oe.a,{id:"component-filled",value:this.state.mid,onChange:this.handleChangemid})),r.a.createElement("br",null),r.a.createElement(he.a,{className:e.formControl,variant:"filled"},r.a.createElement(ge.a,{htmlFor:"component-filled"},"Project Leader Id"),r.a.createElement(oe.a,{id:"component-filled",value:this.state.plid,onChange:this.handleChangeplid})),r.a.createElement("br",null),r.a.createElement(k.a,{variant:"outlined",color:"primary",className:e.button,onClick:this.onClick},"ADD")))}}]),t}(r.a.Component),Ae=Object(U.withStyles)(function(e){return{container:{},formControl:{margin:e.spacing.unit},button:{margin:e.spacing.unit}}})(Ne),Me=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={emp_id:"",pid:""},a.handleChangeemp_id=function(e){a.setState({emp_id:e.target.value})},a.handleChangepid=function(e){a.setState({pid:e.target.value})},a.onClick=Object(c.a)(s.a.mark(function e(){var t;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log({emp_id:a.state.emp_id,pid:a.state.pid,workid:a.props.workid}),e.next=3,T.a.post("/~mswanso2/assignEMP_route.php",{emp_id:a.state.emp_id,pid:a.state.pid,workid:a.props.workid});case 3:t=e.sent,console.log(t),alert(t.data);case 6:case"end":return e.stop()}},e)})),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.forceUpdate()}},{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(v.a,null,r.a.createElement("h3",{style:{marginTop:"30px"}},"Please enter the information of the Works_on you want to add"),r.a.createElement("div",{className:e.container},r.a.createElement(he.a,{className:e.formControl,variant:"filled"},r.a.createElement(ge.a,{htmlFor:"component-filled"},"Employee Workid"),r.a.createElement(oe.a,{id:"component-filled",value:this.state.emp_id,onChange:this.handleChangeemp_id})),r.a.createElement("br",null),r.a.createElement(he.a,{className:e.formControl,variant:"filled"},r.a.createElement(ge.a,{htmlFor:"component-filled"},"Project Id"),r.a.createElement(oe.a,{id:"component-filled",value:this.state.pid,onChange:this.handleChangepid})),r.a.createElement("br",null),r.a.createElement(k.a,{variant:"outlined",color:"primary",className:e.button,onClick:this.onClick},"ADD")))}}]),t}(r.a.Component),De=Object(U.withStyles)(function(e){return{container:{},formControl:{margin:e.spacing.unit},button:{margin:e.spacing.unit}}})(Me),xe=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={pid:"",cid:"",budget:""},a.handleChangepid=function(e){a.setState({pid:e.target.value})},a.handleChangecid=function(e){a.setState({cid:e.target.value})},a.handleChangebudget=function(e){a.setState({budget:e.target.value})},a.onClick=Object(c.a)(s.a.mark(function e(){var t;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log({cid:a.state.cid,pid:a.state.pid,budget:a.state.budget,workid:a.props.workid}),e.next=3,T.a.post("/~mswanso2/assignCON_route.php",{cid:a.state.cid,pid:a.state.pid,budget:a.state.budget,workid:a.props.workid});case 3:t=e.sent,console.log(t),alert(t.data);case 6:case"end":return e.stop()}},e)})),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.forceUpdate()}},{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(v.a,null,r.a.createElement("h3",{style:{marginTop:"30px"}},"Please enter the information of the Supplies you want to add"),r.a.createElement("div",{className:e.container},r.a.createElement(he.a,{className:e.formControl,variant:"filled"},r.a.createElement(ge.a,{htmlFor:"component-filled"},"Contractor id"),r.a.createElement(oe.a,{id:"component-filled",value:this.state.cid,onChange:this.handleChangecid})),r.a.createElement("br",null),r.a.createElement(he.a,{className:e.formControl,variant:"filled"},r.a.createElement(ge.a,{htmlFor:"component-filled"},"Project id"),r.a.createElement(oe.a,{id:"component-filled",value:this.state.pid,onChange:this.handleChangepid})),r.a.createElement("br",null),r.a.createElement(he.a,{className:e.formControl,variant:"filled"},r.a.createElement(ge.a,{htmlFor:"component-filled"},"budget"),r.a.createElement(oe.a,{id:"component-filled",value:this.state.budget,onChange:this.handleChangebudget})),r.a.createElement("br",null),r.a.createElement(k.a,{variant:"outlined",color:"primary",className:e.button,onClick:this.onClick},"ADD")))}}]),t}(r.a.Component),Pe=Object(U.withStyles)(function(e){return{container:{},formControl:{margin:e.spacing.unit},button:{margin:e.spacing.unit}}})(xe),Te={dropdown:{marginTop:"30px"}},Fe=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).state={dropdownOpen:!1,tablename:"",data:["NA"],formToShow:""},a.onClick=function(){var e=Object(c.a)(s.a.mark(function e(t){var n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n=t.target.innerHTML.toUpperCase(),console.log(n),a.setState({formToShow:n});case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.renderForms=function(){return"MISSION"==a.state.formToShow?r.a.createElement(Oe,{workid:a.props.workid}):"EMPLOYEE"==a.state.formToShow?r.a.createElement(ve,{workid:a.props.workid}):"WORKS_ON"==a.state.formToShow?r.a.createElement(De,{workid:a.props.workid}):"PROJECT"==a.state.formToShow?r.a.createElement(Ae,{workid:a.props.workid}):"SUPPLIES"==a.state.formToShow?r.a.createElement(Pe,{workid:a.props.workid}):"CONTRACTOR"==a.state.formToShow?r.a.createElement(Se,{workid:a.props.workid}):r.a.createElement("h2",null,"Please Select the category you want to Add")},a.toggle=a.toggle.bind(Object(N.a)(Object(N.a)(a))),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"toggle",value:function(){this.setState(function(e){return{dropdownOpen:!e.dropdownOpen}})}},{key:"render",value:function(){return r.a.createElement(v.a,null,r.a.createElement(A.a,{isOpen:this.state.dropdownOpen,toggle:this.toggle,style:Te.dropdown},r.a.createElement(M.a,{caret:!0},"Choose What you would like to Add"),r.a.createElement(D.a,null,r.a.createElement(x.a,{onClick:this.onClick},"Mission"),r.a.createElement(x.a,{onClick:this.onClick},"Project"),r.a.createElement(x.a,{onClick:this.onClick},"Works_on"),r.a.createElement(x.a,{onClick:this.onClick},"Employee"),r.a.createElement(x.a,{onClick:this.onClick},"Contractor"),r.a.createElement(x.a,{onClick:this.onClick},"Supplies"))),this.renderForms())}}]),t}(n.Component),Ue={root:{flexGrow:1},grow:{flexGrow:1},Button:{marginLeft:"20px"},ButtonF:{marginLeft:"200px"},content:{paddingLeft:"100px",paddingRight:"100px"}},_e=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).onClick=function(){a.props.clearUser(),a.props.Logout()},a.onClickFunc=function(e){console.log(e.target.innerHTML),a.setState({viewStatus:e.target.innerHTML})},a.renderContent=function(){return"View"===a.state.viewStatus?r.a.createElement(be,{workid:a.state.workid}):"Add"===a.state.viewStatus?r.a.createElement(Fe,{workid:a.state.workid}):void 0},a.state={viewStatus:"View",workid:a.props.workid},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:Ue.root},r.a.createElement(O.a,{position:"static"},r.a.createElement(S.a,null,r.a.createElement(b.a,{variant:"h6",color:"inherit",className:Ue.grow},this.props.workerinfo.FNAME),r.a.createElement(k.a,{color:"inherit",style:Ue.Button,onClick:this.onClick},"Logout"),r.a.createElement(v.a,null,r.a.createElement(k.a,{color:"inherit",style:Ue.ButtonF,onClick:this.onClickFunc},"Add"),r.a.createElement(k.a,{color:"inherit",style:Ue.Button,onClick:this.onClickFunc},"View")))),r.a.createElement(v.a,null,r.a.createElement("h3",null,"Your info: "),r.a.createElement("p",null," Workid: ",this.props.workerinfo.WORK_ID),r.a.createElement("p",null,"Name: ",this.props.workerinfo.FNAME," ",this.props.workerinfo.LNAME),r.a.createElement("p",null,"Phone: ",this.props.workerinfo.PHONE_NUM)),r.a.createElement(v.a,{container:!0,style:Ue.content},this.renderContent()))}}]),t}(r.a.Component),Le=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={workid:"",page:"login",workerinfo:{}},a.onChange=function(e){a.setState({workid:e.target.value})},a.onClick=function(){var e=Object(c.a)(s.a.mark(function e(t){var n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(a.state.workid),e.next=3,T.a.post("/~mswanso2/info_route.php",{workid:a.state.workid});case 3:n=e.sent,console.log(n),"error"===n.data[0]?alert("illegal workid"):(a.setState({workerinfo:n.data[0]}),a.setState({page:"main"}));case 6:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.styles={grid:{justifyContent:"center",width:"75%",margin:"auto",textAlign:"center",marginTop:"200px"},container:{backgroundColor:"lightblue",height:"100vh"}},a.Logout=function(){a.setState({page:"login",workid:"",workerinfo:{}})},a.renderLogin=function(){return r.a.createElement(v.a,{style:a.styles.container,container:!0},r.a.createElement(v.a,{style:a.styles.grid},r.a.createElement(b.a,{component:"h2",variant:"h3",gutterBottom:!0},"The National Aeronautics and Space Administration"),r.a.createElement(b.a,{variant:"h6",gutterBottom:!0},"Please Login below with workid"),r.a.createElement(g.a,{required:!0,id:"outlined-required",label:"Required",defaultValue:a.state.workid,margin:"normal",variant:"outlined",onChange:a.onChange}),r.a.createElement("br",null),r.a.createElement(k.a,{variant:"contained",component:"span",onClick:a.onClick},"Login"),r.a.createElement("br",null),r.a.createElement(b.a,{style:{marginTop:"30px"},gutterBottom:!0},"This site is a highly classified site, any attempt to temper with this site is illegal")))},a.clearUser=function(){a.setState({workid:""})},a.renderMain=function(){return r.a.createElement(_e,{Logout:a.Logout,workid:a.state.workid,clearUser:a.clearUser,workerinfo:a.state.workerinfo})},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return"login"===this.state.page?this.renderLogin():"main"===this.state.page?this.renderMain():void 0}}]),t}(n.Component);a(317),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement("div",null,r.a.createElement(Le,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[140,1,2]]]);
//# sourceMappingURL=main.f0b28491.chunk.js.map