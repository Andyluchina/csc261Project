(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{236:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(15),i=n.n(r),l=n(32),c=n(33),s=n(36),u=n(34),g=n(37),m=n(89),d=n.n(m),h=n(35),p=n.n(h),w=n(23),f=n.n(w),k=n(51),v=n.n(k),b=n(86),y=n.n(b),E=n(88),C=n.n(E),j={root:{flexGrow:1},grow:{flexGrow:1},Button:{marginLeft:"20px"}},L=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).onClick=function(){n.props.clearUser(),n.props.Logout()},n}return Object(g.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:j.root},o.a.createElement(y.a,{position:"static"},o.a.createElement(C.a,null,o.a.createElement(f.a,{variant:"h6",color:"inherit",className:j.grow},this.props.workid),o.a.createElement(p.a,{color:"inherit",style:j.Button,onClick:this.onClick},"Logout"))))}}]),t}(o.a.Component),O=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={workid:"",page:"login"},n.onChange=function(e){n.setState({workid:e.target.value})},n.onClick=function(e){console.log(n.state.workid),n.setState({page:"main"})},n.styles={grid:{justifyContent:"center",width:"75%",margin:"auto",textAlign:"center",marginTop:"200px"},container:{backgroundColor:"lightblue",height:"100vh"}},n.Logout=function(){n.setState({page:"login"})},n.renderLogin=function(){return o.a.createElement(v.a,{style:n.styles.container,container:!0},o.a.createElement(v.a,{style:n.styles.grid},o.a.createElement(f.a,{component:"h2",variant:"h3",gutterBottom:!0},"The National Aeronautics and Space Administration"),o.a.createElement(f.a,{variant:"h6",gutterBottom:!0},"Please Login below with workid"),o.a.createElement(d.a,{required:!0,id:"outlined-required",label:"Required",defaultValue:n.state.workid,margin:"normal",variant:"outlined",onChange:n.onChange}),o.a.createElement("br",null),o.a.createElement(p.a,{variant:"contained",component:"span",onClick:n.onClick},"Login"),o.a.createElement("br",null),o.a.createElement(f.a,{style:{marginTop:"30px"},gutterBottom:!0},"This site is a highly classified site, any attempt to temper with this site is illegal")))},n.clearUser=function(){n.setState({workid:""})},n.renderMain=function(){return o.a.createElement(L,{Logout:n.Logout,workid:n.state.workid,clearUser:n.clearUser})},n}return Object(g.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return"login"===this.state.page?this.renderLogin():"main"===this.state.page?this.renderMain():void 0}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement("div",null,o.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},90:function(e,t,n){e.exports=n(236)}},[[90,1,2]]]);
//# sourceMappingURL=main.ef3d9262.chunk.js.map