"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[877],{1877:(e,t,n)=>{n.r(t),n.d(t,{default:()=>y});var r=n(821),o={class:"max-w-60"},c={class:"border rounded-3xl mx-auto overflow-hidden max-h-96"},l=["src"],a={class:"text-center py-4"},s={class:"font-bold"},u=(0,r.createElementVNode)("br",null,null,-1),i=(0,r.createTextVNode)(" Add to Cart ");const d={name:"Product",props:{product:Object}};const m=(0,n(3744).Z)(d,[["render",function(e,t,n,d,m,p){var f=(0,r.resolveComponent)("Link");return(0,r.openBlock)(),(0,r.createElementBlock)("div",o,[(0,r.createElementVNode)("div",c,[(0,r.createElementVNode)("img",{src:n.product.image,alt:"",class:"w-60 h-auto"},null,8,l),(0,r.createElementVNode)("h3",a,[(0,r.createElementVNode)("span",s,(0,r.toDisplayString)(n.product.name),1),(0,r.createTextVNode)(" $"+(0,r.toDisplayString)(n.product.price)+" ",1),u,(0,r.createVNode)(f,{href:"/add-to-cart/".concat(n.product.id),method:"post",as:"button",class:"border rounded bg-gray-900 text-center text-white px-3 py-2"},{default:(0,r.withCtx)((function(){return[i]})),_:1},8,["href"])])])])}]]);var p={class:"grid grid-cols-3 gap-4"},f={name:"ProductGrid"};const k=Object.assign(f,{props:{products:Array},setup:function(e){var t=e;return function(e,n){return(0,r.openBlock)(),(0,r.createElementBlock)("div",p,[((0,r.openBlock)(!0),(0,r.createElementBlock)(r.Fragment,null,(0,r.renderList)((0,r.unref)(t).products,(function(e){return(0,r.openBlock)(),(0,r.createBlock)((0,r.unref)(m),{product:e},null,8,["product"])})),256))])}}});var h=n(6494),x=(n(9038),n(3655)),N={class:"grid gap-6"},v={class:"flex items-center content-center w-10/12 mx-auto text-black space-x-6"},V={class:"w-60 min-h-screen flex items-center bg-gray-300 my-10 sticky"},g={class:"divide-y-2 divide-gray-400 w-full"},w={class:"my-10"},B={class:"flex justify-center my-5"},E={layout:x.Z};const y=Object.assign(E,{name:"Home",props:{categories:Array,products:Object},setup:function(e){var t=e,n=(0,r.computed)((function(){return new Set(t.categories)}));return function(e,o){var c=(0,r.resolveComponent)("Head"),l=(0,r.resolveComponent)("Link");return(0,r.openBlock)(),(0,r.createElementBlock)(r.Fragment,null,[(0,r.createVNode)(c,{title:"Home"}),(0,r.createElementVNode)("div",N,[(0,r.createElementVNode)("div",v,[(0,r.createElementVNode)("div",V,[(0,r.createElementVNode)("ul",g,[((0,r.openBlock)(!0),(0,r.createElementBlock)(r.Fragment,null,(0,r.renderList)((0,r.unref)(n),(function(e){return(0,r.openBlock)(),(0,r.createElementBlock)("li",{class:"text-center",key:e.id},[(0,r.createVNode)(l,{href:"/categories/".concat(e.id,"/products")},{default:(0,r.withCtx)((function(){return[(0,r.createTextVNode)((0,r.toDisplayString)(e.name),1)]})),_:2},1032,["href"])])})),128))])]),(0,r.createElementVNode)("div",w,[(0,r.createVNode)((0,r.unref)(k),{products:(0,r.unref)(t).products.data},null,8,["products"]),(0,r.createElementVNode)("div",B,[(0,r.createVNode)((0,r.unref)(h.Z),{links:(0,r.unref)(t).products.links},null,8,["links"])])])])])],64)}}})},3655:(e,t,n)=>{n.d(t,{Z:()=>B});var r=n(821),o=n(9038),c=n(5924),l=n(8765),a={class:"w-full min-h-screen"},s={class:"bg-gray-900 p-6"},u={class:"flex justify-between mx-10 container"},i=(0,r.createElementVNode)("div",{class:"flex items-center text-white"},[(0,r.createElementVNode)("h1",{class:"text-lg font-bold"},"iStore")],-1),d={class:"flex space-x-6 items-center text-white"},m=(0,r.createTextVNode)(" Home "),p=(0,r.createTextVNode)(" Stores "),f={class:"flex gap-5"},k=(0,r.createTextVNode)(" Login "),h=(0,r.createTextVNode)(" Become a Seller "),x=(0,r.createTextVNode)(" Dashboard "),N=(0,r.createElementVNode)("div",null,null,-1),v=(0,r.createElementVNode)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[(0,r.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"})],-1),V={key:0},g=(0,r.createElementVNode)("footer",{class:"w-full bg-gray-900 py-6"},[(0,r.createElementVNode)("p",{class:"text-center text-white"}," iStore 2022 ")],-1),w={name:"FrontLayout",components:{Nav:c.Z,NavLink:l.Z}};const B=Object.assign(w,{setup:function(e){var t=(0,r.computed)((function(){var e=0;return null!=(0,o.qt)().props.value.cart&&(0,o.qt)().props.value.cart.forEach((function(t){e+=t.quantity})),e}));return function(e,n){return(0,r.openBlock)(),(0,r.createElementBlock)(r.Fragment,null,[(0,r.createElementVNode)("main",a,[(0,r.createElementVNode)("section",s,[(0,r.createElementVNode)("header",u,[i,(0,r.createElementVNode)("div",d,[(0,r.createVNode)((0,r.unref)(l.Z),{href:"/",class:"text-white"},{default:(0,r.withCtx)((function(){return[m]})),_:1}),(0,r.createVNode)((0,r.unref)(l.Z),{href:"/list-stores",class:"text-white"},{default:(0,r.withCtx)((function(){return[p]})),_:1})]),(0,r.createElementVNode)("div",f,[e.$page.props.auth?(0,r.createCommentVNode)("",!0):((0,r.openBlock)(),(0,r.createBlock)((0,r.unref)(l.Z),{key:0,href:"/login",class:"text-white"},{default:(0,r.withCtx)((function(){return[k]})),_:1})),e.$page.props.auth?(0,r.createCommentVNode)("",!0):((0,r.openBlock)(),(0,r.createBlock)((0,r.unref)(l.Z),{key:1,href:"/register",class:"text-white"},{default:(0,r.withCtx)((function(){return[h]})),_:1})),e.$page.props.auth?((0,r.openBlock)(),(0,r.createBlock)((0,r.unref)(l.Z),{key:2,href:"/dashboard",class:"text-white"},{default:(0,r.withCtx)((function(){return[x]})),_:1})):(0,r.createCommentVNode)("",!0),N,(0,r.createVNode)((0,r.unref)(l.Z),{href:"/cart",class:"text-white flex"},{default:(0,r.withCtx)((function(){return[v,(0,r.unref)(t)>0?((0,r.openBlock)(),(0,r.createElementBlock)("span",V,(0,r.toDisplayString)((0,r.unref)(t)),1)):(0,r.createCommentVNode)("",!0)]})),_:1})])])]),(0,r.renderSlot)(e.$slots,"default")]),g],64)}}})},5924:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(821),o={class:"flex ml-6 space-x-4 list-inside"},c=(0,r.createTextVNode)("Logout ");const l={name:"Nav",components:{NavLink:n(8765).Z}};const a=(0,n(3744).Z)(l,[["render",function(e,t,n,l,a,s){var u=(0,r.resolveComponent)("NavLink");return(0,r.openBlock)(),(0,r.createElementBlock)("nav",null,[(0,r.createElementVNode)("ul",o,[(0,r.createElementVNode)("li",null,[(0,r.createVNode)(u,{href:"/logout",as:"button",method:"post"},{default:(0,r.withCtx)((function(){return[c]})),_:1})])])])}]])},8765:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(821),o=n(9038);const c={name:"NavLink",props:{active:Boolean},setup:function(e){return function(t,n){return(0,r.openBlock)(),(0,r.createBlock)((0,r.unref)(o.rU),{class:(0,r.normalizeClass)(["hover:underline",{"font-bold underline":e.active}])},{default:(0,r.withCtx)((function(){return[(0,r.renderSlot)(t.$slots,"default")]})),_:3},8,["class"])}}}},6494:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(821);const o={name:"Pagination",props:{links:Array}};const c=(0,n(3744).Z)(o,[["render",function(e,t,n,o,c,l){return(0,r.openBlock)(),(0,r.createElementBlock)("div",null,[((0,r.openBlock)(!0),(0,r.createElementBlock)(r.Fragment,null,(0,r.renderList)(n.links,(function(e){return(0,r.openBlock)(),(0,r.createBlock)((0,r.resolveDynamicComponent)(e.url?"Link":"span"),{href:e.url,innerHTML:e.label,class:(0,r.normalizeClass)(["px-3",{"text-gray-500":!e.url,"font-bold":e.active}])},null,8,["href","innerHTML","class"])})),256))])}]])}}]);