(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[4],{298:function(e,s,a){e.exports={dialogs:"Dialogs_dialogs__xzoT3",dialogsItems:"Dialogs_dialogsItems__1ib8T",active:"Dialogs_active__1MMz_",dialog:"Dialogs_dialog__jkkMr",messages:"Dialogs_messages__1e3HD",message:"Dialogs_message__3Vhbc"}},299:function(e,s,a){"use strict";a.d(s,"a",(function(){return g}));var t=a(5),n=a(35),i=a(36),c=a(39),o=a(38),r=a(0),d=a.n(r),u=a(17),j=a(10),l=a(1),b=function(e){return{isAuth:e.auth.isAuth}},g=function(e){var s=function(s){Object(c.a)(r,s);var a=Object(o.a)(r);function r(){return Object(n.a)(this,r),a.apply(this,arguments)}return Object(i.a)(r,[{key:"render",value:function(){return this.props.isAuth?Object(l.jsx)(e,Object(t.a)({},this.props)):Object(l.jsx)(j.a,{to:"/login"})}}]),r}(d.a.Component);return Object(u.b)(b)(s)}},305:function(e,s,a){"use strict";a.r(s);a(0);var t=a(126),n=a(89),i=a(127),c=a(56),o=a(33),r=a(18),d=a(298),u=a.n(d),j=a(1),l=function(e){var s="/dialogs/"+e.id;return Object(j.jsx)("div",{className:u.a.dialog+" "+u.a.active,children:Object(j.jsx)(r.b,{to:s,children:e.name})})},b=function(e){return Object(j.jsx)("div",{className:u.a.dialog,children:e.message})},g=Object(c.a)(100),m=Object(i.a)({form:"dialogAddMessageForm"})((function(e){return Object(j.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(j.jsx)("div",{children:Object(j.jsx)(n.a,{placeholder:"Enter your message",component:o.b,name:"newMessageBody",validate:[c.b,g]})}),Object(j.jsx)("div",{children:Object(j.jsx)("button",{children:"Send"})})]})})),O=function(e){var s=e.dialogsPage,a=s.dialogs.map((function(e){return Object(j.jsx)(l,{name:e.name,id:e.id},e.id)})),t=s.messages.map((function(e){return Object(j.jsx)(b,{message:e.message},e.id)}));s.newMessageBody;return Object(j.jsxs)("div",{className:u.a.dialogs,children:[Object(j.jsx)("div",{className:u.a.dialogsItems,children:a}),Object(j.jsx)("div",{className:u.a.messages,children:Object(j.jsx)("div",{children:t})}),Object(j.jsx)(m,{onSubmit:function(s){e.sendMessage(s.newMessageBody)}})]})},h=a(17),f=a(299),p=a(9);s.default=Object(p.d)(Object(h.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{sendMessage:function(s){e(Object(t.b)(s))}}})),f.a)(O)}}]);
//# sourceMappingURL=4.fab7ce99.chunk.js.map