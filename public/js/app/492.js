"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[492],{7492:(e,t,r)=>{r.r(t),r.d(t,{default:()=>g});var o=r(821),l=r(9038),n={class:"flex items-center min-h-screen"},a={class:"bg-white p-8 rounded-xl w-full lg:w-1/4 mx-auto border"},s=(0,o.createElementVNode)("h1",{class:"text-3xl text-center mb-6"},"Login",-1),d={class:"mb-6"},c=(0,o.createElementVNode)("label",{for:"email",class:"block mb-2 uppercase font-bold text-xs text-gray-700"}," Email ",-1),i={key:0,class:"block text-red-500 text-xs mt-1"},u={class:"mb-6"},m=(0,o.createElementVNode)("label",{for:"password",class:"block mb-2 uppercase font-bold text-xs text-gray-700"}," Password ",-1),p={key:0,class:"block text-red-500 text-xs mt-1"},b={class:"flex justify-between items-center"},f=["disabled"],x=(0,o.createTextVNode)(" Go to home "),w={layout:null};const g=Object.assign(w,{name:"Login",setup:function(e){var t=(0,l.cI)({email:"",password:""}),r=function(){t.post("/login")};return function(e,l){var w=(0,o.resolveComponent)("Head"),g=(0,o.resolveComponent)("Link");return(0,o.openBlock)(),(0,o.createElementBlock)(o.Fragment,null,[(0,o.createVNode)(w,{title:"Login"}),(0,o.createElementVNode)("main",n,[(0,o.createElementVNode)("section",a,[s,(0,o.createElementVNode)("form",{onSubmit:l[2]||(l[2]=(0,o.withModifiers)((function(){return(0,o.unref)(r)&&(0,o.unref)(r).apply(void 0,arguments)}),["prevent"]))},[(0,o.createElementVNode)("div",d,[c,(0,o.withDirectives)((0,o.createElementVNode)("input",{"onUpdate:modelValue":l[0]||(l[0]=function(e){return(0,o.unref)(t).email=e}),type:"email",name:"email",id:"email",class:"border rounded border-gray-400 p-2 w-full"},null,512),[[o.vModelText,(0,o.unref)(t).email]]),(0,o.unref)(t).errors.email?((0,o.openBlock)(),(0,o.createElementBlock)("span",i,(0,o.toDisplayString)((0,o.unref)(t).errors.email),1)):(0,o.createCommentVNode)("",!0)]),(0,o.createElementVNode)("div",u,[m,(0,o.withDirectives)((0,o.createElementVNode)("input",{"onUpdate:modelValue":l[1]||(l[1]=function(e){return(0,o.unref)(t).password=e}),type:"password",name:"password",id:"password",class:"border rounded border-gray-400 p-2 w-full"},null,512),[[o.vModelText,(0,o.unref)(t).password]]),(0,o.unref)(t).errors.password?((0,o.openBlock)(),(0,o.createElementBlock)("span",p,(0,o.toDisplayString)((0,o.unref)(t).errors.password),1)):(0,o.createCommentVNode)("",!0)]),(0,o.createElementVNode)("div",b,[(0,o.createElementVNode)("button",{type:"submit",class:"bg-blue-400 text-white rounded py-2 px-4 hover:bg-blue-500 disabled:bg-gray-200 disabled:text-gray-700",disabled:(0,o.unref)(t).processing}," Submit ",8,f),(0,o.createVNode)(g,{href:"/",class:"text-blue-600 hover:underline"},{default:(0,o.withCtx)((function(){return[x]})),_:1})])],32)])])],64)}}})}}]);