(this.webpackJsonprichergo=this.webpackJsonprichergo||[]).push([[0],{11:function(e,t,n){},12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),s=n(5),a=n.n(s),i=(n(11),n(12),n(6)),o=n(2),j=(n(4),n(0));var l,d,p=function(){var e=g.Context,t=g.ActionType,n=Object(c.useContext)(e).dispatcher;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h3",{children:"Login Area"}),Object(j.jsx)("input",{className:"username",type:"text",placeholder:"E-mail"}),Object(j.jsx)("input",{className:"password",type:"text",placeholder:"Password"}),Object(j.jsx)("p",{onClick:function(){return n({type:t.forgot})},className:"paraclick",children:"Forgot password?"}),Object(j.jsx)("button",{children:"Login"}),Object(j.jsxs)("div",{className:"sign-up",children:[Object(j.jsx)("p",{children:"Create New Account?"}),Object(j.jsx)("a",{onClick:function(){return n({type:t.signup})},children:"Sign up!"})]})]})},u=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("p",{children:"Enter your email address and we'll reset your password"}),Object(j.jsx)("input",{className:"username",type:"text",placeholder:"E-mail"}),Object(j.jsx)("button",{children:"Send"})]})},b=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h3",{children:"Sign Up Area"}),Object(j.jsxs)("span",{className:"completename",children:[Object(j.jsx)("input",{className:"fname",type:"text",placeholder:"First Name"}),Object(j.jsx)("input",{className:"lname",type:"text",placeholder:"Last Name"})]}),Object(j.jsx)("input",{className:"username",type:"text",placeholder:"E-mail"}),Object(j.jsx)("input",{className:"password",type:"text",placeholder:"Password"}),Object(j.jsx)("input",{className:"cpassword",type:"text",placeholder:"Confirm Password"}),Object(j.jsx)("button",{children:"Sign Up"})]})};(d=l||(l={})).login="login",d.forgot="forgot",d.signup="signup";var x={page:"login",renderContent:function(){return Object(j.jsx)(p,{})}};function h(e,t){var n;switch(t.type){case l.login:n=Object(o.a)(Object(o.a)({},e),{},{page:"login",renderContent:function(){return Object(j.jsx)(p,{})}});break;case l.forgot:n=Object(o.a)(Object(o.a)({},e),{},{page:"forgot",renderContent:function(){return Object(j.jsx)(u,{})}});break;case l.signup:n=Object(o.a)(Object(o.a)({},e),{},{page:"signup",renderContent:function(){return Object(j.jsx)(b,{})}});break;default:throw new Error}return console.log("curState: ",n),console.log("from: ".concat(t.from," curState: "),n),n}var O=Object(c.createContext)({state:x,dispatcher:function(){}});var g={LoginProvider:function(e){var t=e.children,n=Object(c.useReducer)(h,x),r=Object(i.a)(n,2),s=r[0],a=r[1];return Object(j.jsx)(O.Provider,{value:{state:s,dispatcher:a},children:t})},Context:O,ActionType:l};function m(){var e=g.Context,t=g.ActionType,n=Object(c.useContext)(e),r=n.state,s=n.dispatcher;return Object(j.jsx)(j.Fragment,{children:"login"!==r.page?Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"login-area",children:[r.renderContent(),Object(j.jsxs)("div",{className:"sign-up",children:[Object(j.jsx)("p",{children:"You have an account?"}),Object(j.jsx)("a",{onClick:function(){return s({type:t.login})},children:"Log in!"})]})]})}):Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"login-area",children:r.renderContent()})})})}var f=function(){var e=g.LoginProvider;return Object(j.jsx)(e,{children:Object(j.jsx)("div",{className:"App",children:Object(j.jsx)("header",{className:"App-header",children:Object(j.jsx)(m,{})})})})};a.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(f,{})}),document.getElementById("root"))},4:function(e,t,n){}},[[14,1,2]]]);