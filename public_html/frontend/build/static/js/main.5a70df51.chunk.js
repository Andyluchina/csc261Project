(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{113:function(e,t,n){e.exports=n(283)},283:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(19),i=n.n(r),l=n(37),c=n(30),s=n(40),u=n(38),d=n(41),p=n(111),m=n.n(p),g=n(23),h=n.n(g),w=n(31),k=n.n(w),E=n(27),f=n.n(E),v=n(109),b=n.n(v),C=n(110),y=n.n(C),O=n(63),j=n.n(O),S=n(104),L=n(17),x=n(284),B=n(287),M=n(286),T=n(285),A=n(105),F=n.n(A),U={dropdown:{marginTop:"30px"}},N=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).onClickMission=function(e){n.setState({tablename:"MISSON"})},n.toggle=n.toggle.bind(Object(L.a)(Object(L.a)(n))),n.state={dropdownOpen:!1,tablename:""},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){var e=Object(S.a)(j.a.mark(function e(){var t;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.a.post("http://betaweb.csug.rochester.edu/~mswanso2/view_route.php",{workid:"123",tablename:"MISSION"});case 2:t=e.sent,console.log(t);case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()}]),Object(c.a)(t,[{key:"toggle",value:function(){this.setState(function(e){return{dropdownOpen:!e.dropdownOpen}})}},{key:"render",value:function(){return o.a.createElement(f.a,null,o.a.createElement(x.a,{isOpen:this.state.dropdownOpen,toggle:this.toggle,style:U.dropdown},o.a.createElement(B.a,{caret:!0},"Choose What you would like to see"),o.a.createElement(M.a,null,o.a.createElement(T.a,{onClick:this.onClickMission},"Mission"),o.a.createElement(T.a,null,"Project"),o.a.createElement(T.a,null,"Works_on"),o.a.createElement(T.a,null,"Employee"),o.a.createElement(T.a,null,"Contractor"),o.a.createElement(T.a,null,"Supplies"))))}}]),t}(a.Component),W={root:{flexGrow:1},grow:{flexGrow:1},Button:{marginLeft:"20px"},ButtonF:{marginLeft:"200px"},content:{paddingLeft:"100px",paddingRight:"100px"}},I=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).onClick=function(){n.props.clearUser(),n.props.Logout()},n.onClickFunc=function(e){console.log(e.target.innerHTML),n.setState({viewStatus:e.target.innerHTML})},n.renderContent=function(){return"View"===n.state.viewStatus?o.a.createElement(N,null):"Add"===n.state.viewStatus?o.a.createElement("p",null,"This is Add page"):"Delete"===n.state.viewStatus?o.a.createElement("p",null,"This is Delete page"):"Update"===n.state.viewStatus?o.a.createElement("p",null,"This is Update page"):void 0},n.state={viewStatus:"View"},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:W.root},o.a.createElement(b.a,{position:"static"},o.a.createElement(y.a,null,o.a.createElement(k.a,{variant:"h6",color:"inherit",className:W.grow},this.props.workid),o.a.createElement(h.a,{color:"inherit",style:W.Button,onClick:this.onClick},"Logout"),o.a.createElement(f.a,null,o.a.createElement(h.a,{color:"inherit",style:W.ButtonF,onClick:this.onClickFunc},"Add"),o.a.createElement(h.a,{color:"inherit",style:W.Button,onClick:this.onClickFunc},"Delete"),o.a.createElement(h.a,{color:"inherit",style:W.Button,onClick:this.onClickFunc},"Update"),o.a.createElement(h.a,{color:"inherit",style:W.Button,onClick:this.onClickFunc},"View")))),o.a.createElement(f.a,{container:!0,style:W.content},this.renderContent()))}}]),t}(o.a.Component),V=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={workid:"",page:"login"},n.onChange=function(e){n.setState({workid:e.target.value})},n.onClick=function(e){console.log(n.state.workid),n.setState({page:"main"})},n.styles={grid:{justifyContent:"center",width:"75%",margin:"auto",textAlign:"center",marginTop:"200px"},container:{backgroundColor:"lightblue",height:"100vh"}},n.Logout=function(){n.setState({page:"login"})},n.renderLogin=function(){return o.a.createElement(f.a,{style:n.styles.container,container:!0},o.a.createElement(f.a,{style:n.styles.grid},o.a.createElement(k.a,{component:"h2",variant:"h3",gutterBottom:!0},"The National Aeronautics and Space Administration"),o.a.createElement(k.a,{variant:"h6",gutterBottom:!0},"Please Login below with workid"),o.a.createElement(m.a,{required:!0,id:"outlined-required",label:"Required",defaultValue:n.state.workid,margin:"normal",variant:"outlined",onChange:n.onChange}),o.a.createElement("br",null),o.a.createElement(h.a,{variant:"contained",component:"span",onClick:n.onClick},"Login"),o.a.createElement("br",null),o.a.createElement(k.a,{style:{marginTop:"30px"},gutterBottom:!0},"This site is a highly classified site, any attempt to temper with this site is illegal")))},n.clearUser=function(){n.setState({workid:""})},n.renderMain=function(){return o.a.createElement(I,{Logout:n.Logout,workid:n.state.workid,clearUser:n.clearUser})},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return"login"===this.state.page?this.renderLogin():"main"===this.state.page?this.renderMain():void 0}}]),t}(a.Component);n(282),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement("div",null,o.a.createElement(V,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[113,1,2]]]);
//# sourceMappingURL=main.5a70df51.chunk.js.map