"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[279],{4731:(e,t,n)=>{n.d(t,{Z:()=>f});var r=n(821),a=n(9038),o={class:"w-96 border-2 border-gray-400 rounded-lg p-6 mt-3 shadow-lg"},l=(0,r.createElementVNode)("div",{class:"flex justify-between"},[(0,r.createElementVNode)("h1",{class:"text-3xl"},"Cart Items"),(0,r.createElementVNode)("h1",{class:"text-2xl"},"X")],-1),c={class:"flex justify-between"},s={class:"text-lg font-bold"},u={class:"text-lg font-bold"},i=(0,r.createTextVNode)(" Checkout "),d={name:"ThePopUp"};const f=Object.assign(d,{setup:function(e){var t=(0,r.computed)((function(){var e=[];return null!=(0,a.qt)().props.value.cart&&(0,a.qt)().props.value.cart.forEach((function(t){e.push(t)})),e}));return function(e,n){var a=(0,r.resolveComponent)("Link");return(0,r.openBlock)(),(0,r.createElementBlock)("div",o,[l,((0,r.openBlock)(!0),(0,r.createElementBlock)(r.Fragment,null,(0,r.renderList)((0,r.unref)(t),(function(e){return(0,r.openBlock)(),(0,r.createElementBlock)("div",c,[(0,r.createElementVNode)("p",s,(0,r.toDisplayString)(e.name),1),(0,r.createElementVNode)("p",u,(0,r.toDisplayString)(e.quantity)+" x "+(0,r.toDisplayString)(e.price)+" = "+(0,r.toDisplayString)(e.quantity*e.price),1)])})),256)),(0,r.createVNode)(a,{as:"button",disabled:null===(0,r.unref)(t),href:"/checkout",class:"mx-auto block px-5 py-3 bg-gray-900 text-white disabled:bg-gray-600"},{default:(0,r.withCtx)((function(){return[i]})),_:1},8,["disabled"])])}}})},4279:(e,t,n)=>{n.r(t),n.d(t,{default:()=>y});var r=n(821),a=n(9680),o=(n(6455),n(3655)),l={class:"flex flex-col items-center justify-center w-full m-10"},c=(0,r.createElementVNode)("h1",{class:"font-black text-4xl mb-16"},"Cart",-1),s={key:0,class:"divide-y divide-gray-400 space-y-10 w-10/12"},u={class:"font-black text-3xl"},i={class:"text-lg"},d=(0,r.createTextVNode)(" Quantity: "),f=["onChange","value"],m=(0,r.createTextVNode)("Remove"),p={class:"font-medium text-3xl"},h={class:"flex justify-around"},x=(0,r.createElementVNode)("h1",{class:"font-black text-3xl"},"Total",-1),N={class:"font-medium text-3xl"},v={class:"flex justify-around items-center w-1/2 mt-10"},k=(0,r.createTextVNode)(" Checkout "),V=(0,r.createTextVNode)("Go Back Shopping"),g={name:"Cart",layout:o.Z};const y=Object.assign(g,{props:{cartItems:Array},setup:function(e){var t=e,n=((0,r.computed)((function(){return null!=t.cartItems&&t.cartItems.length})),function(e,t){a.Inertia.post("/add-to-cart/".concat(t),{quantity:e.target.value})}),o=(0,r.computed)((function(){var e=0;return t.cartItems.map((function(t){e+=t.quantity*t.price})),e}));return console.log(t.cartItems),function(t,a){var g=(0,r.resolveComponent)("Link");return(0,r.openBlock)(),(0,r.createElementBlock)("div",l,[c,e.cartItems?((0,r.openBlock)(),(0,r.createElementBlock)("div",s,[((0,r.openBlock)(!0),(0,r.createElementBlock)(r.Fragment,null,(0,r.renderList)(e.cartItems,(function(e){return(0,r.openBlock)(),(0,r.createElementBlock)("div",{class:"flex justify-around",key:e.id},[(0,r.createElementVNode)("div",null,[(0,r.createElementVNode)("h1",u,(0,r.toDisplayString)(e.name),1),(0,r.createElementVNode)("div",i,[d,(0,r.createElementVNode)("input",{onChange:function(t){return(0,r.unref)(n)(t,e.id)},type:"number",class:"border-2 border-gray-400 rounded-lg w-24 text-center",value:e.quantity,min:"1"},null,40,f)]),(0,r.createVNode)(g,{href:"/remove-from-cart/".concat(e.id),class:"text-red-600",method:"post",as:"button"},{default:(0,r.withCtx)((function(){return[m]})),_:2},1032,["href"])]),(0,r.createElementVNode)("div",null,[(0,r.createElementVNode)("h3",p,(0,r.toDisplayString)(e.quantity*e.price),1)])])})),128)),(0,r.createElementVNode)("div",h,[x,(0,r.createElementVNode)("h3",N,(0,r.toDisplayString)((0,r.unref)(o)),1)])])):(0,r.createCommentVNode)("",!0),(0,r.createElementVNode)("div",v,[(0,r.createVNode)(g,{as:"button",disabled:null===e.cartItems,href:"/checkout",class:"px-10 py-5 bg-gray-900 text-white disabled:bg-gray-600"},{default:(0,r.withCtx)((function(){return[k]})),_:1},8,["disabled"]),(0,r.createVNode)(g,{href:"/",class:"text-blue-600 hover:underline"},{default:(0,r.withCtx)((function(){return[V]})),_:1})])])}}})},3655:(e,t,n)=>{n.d(t,{Z:()=>E});var r=n(821),a=n(4731),o=n(9038),l=n(5924),c=n(8765),s={class:"w-full min-h-screen"},u={class:"bg-gray-900 p-6"},i={class:"flex justify-between mx-10 container"},d=(0,r.createElementVNode)("div",{class:"flex items-center text-white"},[(0,r.createElementVNode)("h1",{class:"text-lg font-bold"},"iStore")],-1),f={class:"flex space-x-6 items-center text-white"},m=(0,r.createTextVNode)(" Home "),p=(0,r.createTextVNode)(" Stores "),h={class:"flex gap-5"},x=(0,r.createTextVNode)(" Login "),N=(0,r.createTextVNode)(" Become a Seller "),v=(0,r.createTextVNode)(" Dashboard "),k=(0,r.createElementVNode)("div",null,null,-1),V=(0,r.createElementVNode)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[(0,r.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"})],-1),g={key:0},y=(0,r.createElementVNode)("footer",{class:"w-full bg-gray-900 py-6"},[(0,r.createElementVNode)("p",{class:"text-center text-white"}," iStore 2022 ")],-1),w={name:"FrontLayout",components:{Nav:l.Z,NavLink:c.Z}};const E=Object.assign(w,{setup:function(e){var t=(0,r.computed)((function(){var e=0;return null!=(0,o.qt)().props.value.cart&&(0,o.qt)().props.value.cart.forEach((function(t){e+=t.quantity})),e})),n=!1;return function(e,o){return(0,r.openBlock)(),(0,r.createElementBlock)(r.Fragment,null,[(0,r.createElementVNode)("main",s,[(0,r.createElementVNode)("section",u,[(0,r.createElementVNode)("header",i,[d,(0,r.createElementVNode)("div",f,[(0,r.createVNode)((0,r.unref)(c.Z),{href:"/",class:"text-white"},{default:(0,r.withCtx)((function(){return[m]})),_:1}),(0,r.createVNode)((0,r.unref)(c.Z),{href:"/list-stores",class:"text-white"},{default:(0,r.withCtx)((function(){return[p]})),_:1})]),(0,r.createElementVNode)("div",h,[e.$page.props.auth?(0,r.createCommentVNode)("",!0):((0,r.openBlock)(),(0,r.createBlock)((0,r.unref)(c.Z),{key:0,href:"/login",class:"text-white"},{default:(0,r.withCtx)((function(){return[x]})),_:1})),e.$page.props.auth?(0,r.createCommentVNode)("",!0):((0,r.openBlock)(),(0,r.createBlock)((0,r.unref)(c.Z),{key:1,href:"/register",class:"text-white"},{default:(0,r.withCtx)((function(){return[N]})),_:1})),e.$page.props.auth?((0,r.openBlock)(),(0,r.createBlock)((0,r.unref)(c.Z),{key:2,href:"/dashboard",class:"text-white"},{default:(0,r.withCtx)((function(){return[v]})),_:1})):(0,r.createCommentVNode)("",!0),k,(0,r.createVNode)((0,r.unref)(c.Z),{href:"/cart",class:"text-white flex"},{default:(0,r.withCtx)((function(){return[V,(0,r.unref)(t)>0?((0,r.openBlock)(),(0,r.createElementBlock)("span",g,(0,r.toDisplayString)((0,r.unref)(t)),1)):(0,r.createCommentVNode)("",!0)]})),_:1})])])]),(0,r.withDirectives)((0,r.createVNode)((0,r.unref)(a.Z),{class:"ml-auto",onClicked:o[0]||(o[0]=function(e){return(0,r.isRef)(n)?n.value=!0:n=!0})},null,512),[[r.vShow,(0,r.unref)(n)]]),(0,r.renderSlot)(e.$slots,"default")]),y],64)}}})},5924:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(821),a={class:"flex ml-6 space-x-4 list-inside"},o=(0,r.createTextVNode)("Logout ");const l={name:"Nav",components:{NavLink:n(8765).Z}};const c=(0,n(3744).Z)(l,[["render",function(e,t,n,l,c,s){var u=(0,r.resolveComponent)("NavLink");return(0,r.openBlock)(),(0,r.createElementBlock)("nav",null,[(0,r.createElementVNode)("ul",a,[(0,r.createElementVNode)("li",null,[(0,r.createVNode)(u,{href:"/logout",as:"button",method:"post"},{default:(0,r.withCtx)((function(){return[o]})),_:1})])])])}]])},8765:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(821),a=n(9038);const o={name:"NavLink",props:{active:Boolean},setup:function(e){return function(t,n){return(0,r.openBlock)(),(0,r.createBlock)((0,r.unref)(a.rU),{class:(0,r.normalizeClass)(["hover:underline",{"font-bold underline":e.active}])},{default:(0,r.withCtx)((function(){return[(0,r.renderSlot)(t.$slots,"default")]})),_:3},8,["class"])}}}}}]);