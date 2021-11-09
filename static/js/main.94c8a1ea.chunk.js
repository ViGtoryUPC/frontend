(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{34:function(e,t,r){"use strict";r.r(t);var n=r(21),a=r(32),i=r(8),s=r(9),c=r(11),o=r(10),l=r(0),u=r.n(l),d=r(33),j=r(23),m=r(28),p=r(27),_=r(15),b=r(13),g=r.n(b),v=(r(39),r(40),r(1));function f(e){return Object(v.jsx)("button",{className:"square",onClick:e.onClick,children:e.value})}var h=function(e){Object(c.a)(r,e);var t=Object(o.a)(r);function r(){return Object(i.a)(this,r),t.apply(this,arguments)}return Object(s.a)(r,[{key:"renderSquare",value:function(e){var t=this;return Object(v.jsx)(f,{value:this.props.squares[e],onClick:function(){return t.props.onClick(e)}})}},{key:"renderBoard",value:function(){var e=this,t=Object(a.a)(Array(3).keys());return t.map((function(r){return Object(v.jsx)("div",{className:"board-row",children:t.map((function(n){return e.renderSquare(r*t.length+n)}))})}))}},{key:"render",value:function(){return Object(v.jsxs)("div",{children:[Object(v.jsx)("div",{className:"status",children:this.status}),this.renderBoard()]})}}]),r}(u.a.Component);u.a.Component;function O(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],r=0;r<t.length;r++){var a=Object(n.a)(t[r],3),i=a[0],s=a[1],c=a[2];if(e[i]&&e[i]===e[s]&&e[i]===e[c])return e[i]}return null}function x(e){var t=e.field_name,r=e.form_field_name;return Object(v.jsxs)(d.a,{children:[Object(v.jsx)(d.a.Text,{children:t}),Object(v.jsx)(j.a,{type:"text",name:r,placeholder:"usuari",defaultValue:""})]})}var y=function(e){Object(c.a)(r,e);var t=Object(o.a)(r);function r(e){var n;return Object(i.a)(this,r),(n=t.call(this,e)).state={valid:!0,err_msg:""},n}return Object(s.a)(r,[{key:"validate_content_clientside",value:function(e){var t=function(e,t){var r=e.currentTarget.value;console.log(r);for(var n=0;n<t.length;n++){var a=Object.keys(t[n])[0];if(!new RegExp(a.slice(1,-1)).test(r))return t[n][a]}return!1}(e,this.props.validation_rgx_msg);if(0!=t)return this.setState({valid:!1,err_msg:t}),void console.log("err_msg: "+this.state.err_msg);this.setState({valid:!0,err_msg:""})}},{key:"render",value:function(){return Object(v.jsxs)(m.a.Floating,{className:"sm mt-2 mb-3",children:[Object(v.jsx)(j.a,{type:"text",name:"username",placeholder:"Nom d'usuari",defaultValue:"",onChange:this.validate_content_clientside.bind(this),required:!0}),Object(v.jsx)(m.a.Control.Feedback,{type:"invalid",children:this.state.err_msg}),Object(v.jsx)("label",{htmlFor:"floatingInputCustom",children:"Nom d'usuari"})]})}}]),r}(u.a.Component),k=function(e){Object(c.a)(r,e);var t=Object(o.a)(r);function r(){return Object(i.a)(this,r),t.apply(this,arguments)}return Object(s.a)(r,[{key:"render",value:function(){return this.props.form_field_name.split("_").length<3&&console.log(this.props.validation_rgx_msg[0]),Object(v.jsx)(x,{field_name:"Contrasenya",form_field_name:"password"})}}]),r}(u.a.Component),C=function(e){Object(c.a)(r,e);var t=Object(o.a)(r);function r(){return Object(i.a)(this,r),t.apply(this,arguments)}return Object(s.a)(r,[{key:"render",value:function(){return console.log(this.props.validation_rgx_msg[0]),Object(v.jsx)(x,{field_name:"Correu electr\xf2nic",form_field_name:"mail"})}}]),r}(u.a.Component),w=function(e){Object(c.a)(r,e);var t=Object(o.a)(r);function r(){return Object(i.a)(this,r),t.apply(this,arguments)}return Object(s.a)(r,[{key:"render",value:function(){return Object(v.jsx)(m.a.Select,{field_name:"Grau d'estudis",form_field_name:"degree"})}}]),r}(u.a.Component);function N(e){var t=e.children,r=e.eventKey,n=Object(_.b)(r,(function(){}));return Object(v.jsx)("span",{className:"interactiveToggleLoginRegister",onClick:n,children:t})}var A=function(e){Object(c.a)(r,e);var t=Object(o.a)(r);function r(){return Object(i.a)(this,r),t.apply(this,arguments)}return Object(s.a)(r,[{key:"render",value:function(){var e=Object(v.jsx)(y,{form_field_name:"login_username",validation_rgx_msg:this.props.validation_rgx_msg.username}),t=Object(v.jsx)(k,{form_field_name:"login_password",validation_rgx_msg:this.props.validation_rgx_msg.password});return Object(v.jsxs)("div",{children:[Object(v.jsx)("h1",{children:"Inicia sessi\xf3:"}),e,t,Object(v.jsxs)("p",{children:["No tens un compte?\xa0",Object(v.jsx)(N,{eventKey:"accord_register",children:"Crea'n un!"})]})]})}}]),r}(u.a.Component),q=function(e){Object(c.a)(r,e);var t=Object(o.a)(r);function r(){return Object(i.a)(this,r),t.apply(this,arguments)}return Object(s.a)(r,[{key:"render",value:function(){return Object(v.jsxs)("div",{children:[Object(v.jsx)("h1",{children:"Crea un nou compte:"}),Object(v.jsx)(y,{form_field_name:"register_username",validation_rgx_msg:this.props.validation_rgx_msg.username}),Object(v.jsx)(k,{form_field_name:"register_password",validation_rgx_msg:this.props.validation_rgx_msg.password}),Object(v.jsx)(k,{form_field_name:"register_password_confirm"}),Object(v.jsx)(C,{form_field_name:"register_mail",validation_rgx_msg:this.props.validation_rgx_msg.mail}),Object(v.jsx)(w,{form_field_name:"register_degree"}),Object(v.jsxs)("p",{children:["Ja tens un compte?\xa0",Object(v.jsx)(N,{eventKey:"accord_login",children:"Accedeix-hi aqu\xed!"})]})]})}}]),r}(u.a.Component),E=function(e){Object(c.a)(r,e);var t=Object(o.a)(r);function r(e){var n;return Object(i.a)(this,r),(n=t.call(this,e)).state={loginTregisterF:!0},n}return Object(s.a)(r,[{key:"LoginOrRegisterClick",value:function(){this.setState({loginTregisterF:!this.state.loginTregisterF})}},{key:"getValidationRegexAndErrorMessages",value:function(){return{username:[{"/^.{2,32}$/":"El teu nom d'usuari nom\xe9s pot ocupar 2-32 car\xe0cters."},{"/^[a-zA-Z0-9_\\-\\.]+$/":"El teu nom d'usuari nom\xe9s pot contenir car\xe0cters [a-z, A-Z, 0-9, _, -, .]."}],password:[{"/^.{4,32}$/":"La teva contrasenya nom\xe9s pot ocupar 4-32 car\xe0cters."},{"/^[a-zA-Z0-9_\\-\\.]+$/":"La teva contrasenya nom\xe9s pot contenir car\xe0cters [a-z, A-Z, 0-9, _, -, .]."}],mail:[{"/^.+@.+$/":"\xc9s necess\xe0ria una adre\xe7a electr\xf2nica v\xe0lida.\nPer exemple: usuari@domini.xyz"}]}}},{key:"render",value:function(){var e=this.getValidationRegexAndErrorMessages();return Object(v.jsx)("div",{children:Object(v.jsxs)(p.a,{defaultActiveKey:"accord_login",className:"content",children:[Object(v.jsx)(p.a.Collapse,{eventKey:"accord_login",children:Object(v.jsx)("div",{className:"content_wrapper",children:Object(v.jsx)(A,{validation_rgx_msg:e})})}),Object(v.jsx)(p.a.Collapse,{eventKey:"accord_register",children:Object(v.jsx)("div",{className:"content_wrapper",children:Object(v.jsx)(q,{validation_rgx_msg:e})})})]})})}}]),r}(u.a.Component);g.a.render(Object(v.jsx)(E,{}),document.getElementById("root"))},39:function(e,t,r){}},[[34,1,2]]]);
//# sourceMappingURL=main.94c8a1ea.chunk.js.map