import{u as a}from"./useSwitchPage-de16abab.js";import{d as e,r as s,_ as n,e as t,o as r,c as l,a as i,n as o,h as c,w as m,j as d,p as u,b as g}from"./index-6b5316ae.js";import{g as f}from"./util-48c523a2.js";const x=e({name:"ErrorPage",setup(){const e=s("error"),n=a();function t(a,e){return parseInt(`${Math.random()*(e-a+1)+a}`,10)}const r=s(t(0,10));return{prefixCls:e,getImageUrl:f,backHome:()=>{n({name:"DataManage"})},imgIndex:r,setImgIndex:function(){r.value=t(0,10)}}}}),p=a=>(u("data-v-5fc457fe"),a=a(),g(),a),I=["src","data-img-index"],_=p((()=>i("span",null,"抱歉，您访问的页面不存在！",-1))),k=p((()=>i("br",null,null,-1))),v=p((()=>i("span",null,"访问链接可能错误，或者该页面已被删除。",-1)));const C=n(x,[["render",function(a,e,s,n,u,g){const f=t("a-button");return r(),l("section",{class:o([a.prefixCls])},[i("div",null,[i("img",{src:a.getImageUrl(`404/404_${a.imgIndex}.svg`),"data-img-index":a.imgIndex,alt:"404",onClick:e[0]||(e[0]=(...e)=>a.setImgIndex&&a.setImgIndex(...e))},null,8,I),i("div",{class:o(`${a.prefixCls}__msg`)},[_,k,v,c(f,{type:"link",onClick:a.backHome},{default:m((()=>[d("前往xx模块")])),_:1},8,["onClick"])],2)])],2)}],["__scopeId","data-v-5fc457fe"]]);export{C as default};
