import{u as e}from"./useSwitchPage-9e8f64c9.js";import{d as a,r as t,o as n,c as l,a as s,n as u,p as o,b as r,_ as i,e as c,f as m,w as d,g as _,h as v,F as p,i as f,u as C,t as y,j as h,k as g,l as b,m as k,q as $,s as I,U as x}from"./index-b59cb0d8.js";import{g as R}from"./util-edfcc3f1.js";const F=[(e=>(o("data-v-357682bb"),e=e(),r(),e))((()=>s("span",null,"Custom UI",-1)))],M=i(a({__name:"SystemLogo",setup(a){const o=t("app-logo"),r=e();function i(){r({name:"UtilsDemo"})}return(e,a)=>(n(),l("section",{class:u(o.value)},[s("div",{class:u(`${o.value}__click-area`),onClick:i},[s("img",{class:u(`${o.value}__logo`),src:"/custom-ui/logo.svg",alt:"system_logo"},null,2),s("div",{class:u(`${o.value}__title`)},F,2)],2)],2))}}),[["__scopeId","data-v-357682bb"]]),w=["src"],j=["title"],U=i(a({__name:"UserInfo",setup(a){const o=t("header-user-info"),r=e(),i=t({username:"admin"});const g=[{action:()=>{r({name:"PersonalCenter"})},title:"个人中心",icon:""},{action:()=>async function(){r({name:"Login"})}(),title:"退出登录",icon:""}];function b({key:e}){g[e].action()}return(e,a)=>{const t=c("a-menu-item"),r=c("a-menu"),k=c("a-dropdown");return n(),l("div",{class:u(`${o.value}`)},[i.value.username?(n(),m(k,{key:0,placement:"bottomRight","overlay-class-name":`${o.value}__dropdown`},{overlay:d((()=>[v(r,{onClick:b},{default:d((()=>[(n(),l(p,null,f(g,((e,a)=>v(t,{key:a,class:u(`${o.value}__li`)},{default:d((()=>[h(y(e.title),1)])),_:2},1032,["class"]))),64))])),_:1})])),default:d((()=>[s("div",{class:u(`${o.value}__click-area`)},[s("img",{src:C(R)("avatar.svg"),alt:""},null,8,w),s("span",{title:i.value.username,class:u([`${o.value}__username`])},y(i.value.username),11,j)],2)])),_:1},8,["overlay-class-name"])):_("",!0)],2)}}}),[["__scopeId","data-v-c01a10e3"]]);const K=i(a({name:"ItemContent",props:{item:{type:Object,default:null}},setup:e=>({prefixCls:t("menu-item-content"),icon:g((()=>{var a;return null==(a=e.item)?void 0:a.icon})),title:g((()=>{var a;return null==(a=e.item)?void 0:a.title}))})}),[["render",function(e,a,t,s,o,r){return n(),l("span",{class:u(`${e.prefixCls}`)},y(e.title),3)}],["__scopeId","data-v-eb68effd"]]),L=i(a({__name:"NavMenu",setup(a){const s=t("menu"),o=e(),{reload:r}=$(),i=b(),y=k.getRoutes(),h=/^\/\w+(?=\/)/,I=y.filter((e=>!h.test(e.path)&&e.meta.isMenu)),x=g({get:()=>{const e=h.exec(k.currentRoute.value.path);if(!e)return[k.currentRoute.value.name];const a=I.find((a=>a.path===e[0]));return a?a.meta.hideChildrenInMenu?[a.name]:k.currentRoute.value.meta.isMenu?[k.currentRoute.value.name]:[k.currentRoute.value.meta.subMenuItemName]:[k.currentRoute.value.name]},set:()=>{}});async function R(e){const a=i.matched.find((a=>a.name===e.key));a&&[a.redirect,a.path].includes(i.path)&&r(),o({name:e.key})}return(e,a)=>{const t=c("a-menu-item"),o=c("a-sub-menu"),r=c("a-menu");return n(),l("section",{class:u(s.value)},[v(r,{selectedKeys:x.value,"onUpdate:selectedKeys":a[0]||(a[0]=e=>x.value=e),mode:"horizontal",onClick:R},{default:d((()=>[(n(!0),l(p,null,f(C(I),(e=>(n(),l(p,null,[e.meta.hideChildrenInMenu?(n(),m(t,{key:e.name},{default:d((()=>[v(K,{item:e.meta},null,8,["item"])])),_:2},1024)):(n(),m(o,{key:e.name},{title:d((()=>[v(K,{item:e.meta},null,8,["item"])])),default:d((()=>[(n(!0),l(p,null,f(e.children,(e=>{var a;return n(),l(p,null,[(null==(a=e.meta)?void 0:a.isMenu)?(n(),m(t,{key:e.name},{default:d((()=>[v(K,{item:e.meta},null,8,["item"])])),_:2},1024)):_("",!0)],64)})),256))])),_:2},1024))],64)))),256))])),_:1},8,["selectedKeys"])],2)}}}),[["__scopeId","data-v-9bc7778d"]]);const N=i(a({name:"CompContent",setup(){const e=t("basic-layout"),a=b();return{prefixCls:e,isFullContainer:g((()=>{var e;return null==(e=a.meta)?void 0:e.isFullContainer})),isFullContent:g((()=>{var e;return null==(e=a.meta)?void 0:e.isFullContent}))}}}),[["render",function(e,a,t,o,r,i){const _=c("router-view");return n(),l("main",{class:u([`${e.prefixCls}__container`,e.isFullContainer&&`${e.prefixCls}__container-full`])},[s("div",{class:u([`${e.prefixCls}__content`,e.isFullContent&&`${e.prefixCls}__content-full`])},[v(_,null,{default:d((({Component:e})=>[(n(),m(I(e)))])),_:1})],2)],2)}],["__scopeId","data-v-452d4f79"]]),P=i(a({__name:"Index",setup(e){const a=t("basic-layout");return(e,t)=>(n(),l("div",{class:u(a.value)},[s("header",{class:u(`${a.value}__header`)},[v(M),v(L),v(U)],2),v(C(x),null,{default:d((()=>[v(N)])),_:1})],2))}}),[["__scopeId","data-v-c59b9e00"]]);export{P as default};
