(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],[,,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},,,function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(6),s=c.n(n),r=c(2),a=c(1),o=c.n(a),l=(c(11),c(12),c(13),c(0)),i=function(e){var t=e.todos,c=e.setSelectedUserId,n=Object(a.useState)(""),s=Object(r.a)(n,2),o=s[0],i=s[1],u=Object(a.useState)("show all"),d=Object(r.a)(u,2),j=d[0],b=d[1],h=Object(a.useState)(t),p=Object(r.a)(h,2),O=p[0],m=p[1];return Object(a.useEffect)((function(){m(t.filter((function(e){var t=e.title.toLowerCase(),c=o.toLowerCase();switch(j){case"show all":return t.includes(c);case"not completed":return t.includes(c)&&!1===e.completed;case"completed":return t.includes(c)&&!0===e.completed;default:return e}})))}),[o,j,t]),Object(l.jsxs)("div",{className:"TodoList",children:[Object(l.jsx)("h2",{children:"Todos:"}),Object(l.jsxs)("div",{className:"TodoList__sort",children:[Object(l.jsxs)("label",{className:"TodoList__label",children:["Sort by title:",Object(l.jsx)("input",{className:"TodoList__input",type:"text",value:o,onChange:function(e){var t=e.target;i(t.value)}})]}),Object(l.jsxs)("label",{className:"TodoList__label",children:["Sort by status:",Object(l.jsxs)("select",{className:"TodoList__input",name:"isCompleted",onChange:function(e){var t=e.target;b(t.value)},children:[Object(l.jsx)("option",{value:"show all",children:"Show all"}),Object(l.jsx)("option",{value:"not completed",children:"Not completed"}),Object(l.jsx)("option",{value:"completed",children:"Completed"})]})]})]}),Object(l.jsx)("div",{className:"TodoList__list-container",children:Object(l.jsx)("ul",{className:"TodoList__list",children:O.map((function(e){return Object(l.jsxs)("li",{className:"TodoList__item\n                  TodoList__item--".concat(e.completed?"checked":"unchecked"),children:[Object(l.jsxs)("label",{children:[Object(l.jsx)("input",{checked:e.completed,type:"checkbox",readOnly:!0}),Object(l.jsx)("p",{children:e.title})]}),e.userId&&Object(l.jsxs)("button",{className:" TodoList__user-button button",type:"button",onClick:function(){return c(e.userId)},children:["User\xa0#",e.userId]})]},e.id)}))})})]})},u=c(5),d=c(3),j=c.n(d),b="https://mate.academy/students-api",h=function(){var e=Object(u.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(b,"/todos"));case 3:return t=e.sent,e.next=6,t.json();case 6:return c=e.sent,e.abrupt("return",c);case 10:if(e.prev=10,e.t0=e.catch(0),!e.t0||"object"!==typeof e.t0||"Failed to fetch"!==e.t0.message){e.next=16;break}throw new Error("Now you cannot connect the server and get todos");case 16:throw e.t0;case 17:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=Object(u.a)(j.a.mark((function e(t){var c,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(b,"/users/").concat(t));case 3:return c=e.sent,e.next=6,c.json();case 6:return n=e.sent,e.abrupt("return",n);case 10:if(e.prev=10,e.t0=e.catch(0),!e.t0||"object"!==typeof e.t0||"Failed to fetch"!==e.t0.message){e.next=16;break}throw new Error("Cannot connect the server and get users");case 16:throw e.t0;case 17:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),O=(c(16),o.a.memo((function(e){var t=e.userId,c=e.clearUser,n=Object(a.useState)(null),s=Object(r.a)(n,2),o=s[0],i=s[1],u=Object(a.useState)(null),d=Object(r.a)(u,2),j=d[0],b=d[1];return Object(a.useEffect)((function(){p(t).then((function(e){i(e),b(null)})).catch((function(e){i(null),b(e.message)}))})),Object(l.jsxs)(l.Fragment,{children:[o&&Object(l.jsxs)("div",{className:"CurrentUser",children:[Object(l.jsx)("h2",{className:"CurrentUser__title",children:Object(l.jsx)("span",{children:"Selected user: ".concat(o.id)})}),Object(l.jsx)("h3",{className:"CurrentUser__name",children:o.name}),Object(l.jsx)("p",{className:"CurrentUser__email",children:o.email}),Object(l.jsx)("p",{className:"CurrentUser__phone",children:o.phone}),Object(l.jsx)("button",{type:"button",className:"CurrentUser__clear",onClick:c,children:"Clear"})]}),j&&Object(l.jsx)("div",{className:"CurrentUser",children:Object(l.jsx)("h2",{className:"CurrentUser__title",children:Object(l.jsx)("span",{children:"Please, try again: server cannot find user"})})})]})}))),m=function(){var e=Object(a.useState)(null),t=Object(r.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)([]),o=Object(r.a)(s,2),u=o[0],d=o[1],j=Object(a.useState)(null),b=Object(r.a)(j,2),p=b[0],m=b[1],f=Object(a.useCallback)((function(){n(null)}),[]);return Object(a.useEffect)((function(){h().then((function(e){d(e)})).catch((function(e){m(e.message),d([])}))})),Object(a.useEffect)((function(){d([])}),[]),Object(l.jsx)("div",{className:"App",children:p?Object(l.jsx)("h1",{className:"App__error",children:p}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"App__sidebar",children:Object(l.jsx)(i,{todos:u,setSelectedUserId:n})}),Object(l.jsx)("div",{className:"App__content",children:Object(l.jsx)("div",{className:"App__content-container",children:c?Object(l.jsx)(O,{userId:c,clearUser:f}):"No user selected"})})]})})};s.a.render(Object(l.jsx)(m,{}),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.30269582.chunk.js.map