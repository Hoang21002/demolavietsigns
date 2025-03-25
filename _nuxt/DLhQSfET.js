import{c as w,q as L,a as C,_ as I}from"./C5PqHtfV.js";import{L as $}from"./DQ_VhB-G.js";import{S as v}from"./B1GADOef.js";import{u as A}from"./CLVUvA78.js";import{l as E,d as _,m as j,v as B,E as N,P as l,Q as D,Z as t,a2 as i,I as T,a0 as q,u as c,L as n,a3 as g,Y as f,X as M}from"./B8xjQDrD.js";const O={class:"container"},Q={class:"grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px]"},V=["content"],z={class:"relative text-center item-hover-service flex flex-col justify-center items-center"},G=["src"],P={style:{"font-family":"'Cormorant', serif"},class:"text-[30px] font-bold uppercase leading-[1.2] text-[#1c1a1d] text-[var(--color-primary)] mb-[5px]",itemprop:"name"},Z={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 31 4",class:"w-[31px] h-[4px]",style:{fill:"var(--color-primary)"}},F=E({__name:"SectionServices",props:{block:{}},setup(H){const u=_(v),p=Object.keys(v)[0],b=u.value[p].business_type.split("/").length,h=u.value[p].business_type.split("/")[b-1],m=$.map(e=>({name:e.label,value:e.value,enable:e.isDefault})),d=w(),o=_("/"),y=async e=>{e.slug&&m.some(a=>a.value===e.slug[0])&&m?o.value=`/${e.slug[0]}/`:o.value="/"},{data:x}=A("dataService",async()=>await L(`${o.value}service`).where({_path:`${o.value}service`}).sort({createdAt:-1}).findOne()),k=j(()=>{var e;return(e=x.value)==null?void 0:e.content_blocks.filter(a=>a._block_name==="service/item"&&a.status)});return B(()=>d.params,()=>{y(d.params)},{deep:!0}),N(()=>{const e=new IntersectionObserver(r=>{r.forEach(s=>{s.isIntersecting?s.target.classList.add("visible"):s.target.classList.remove("visible")})},{threshold:0,rootMargin:"0px 0px 300px 0px"});document.querySelectorAll(".animation_up").forEach(r=>{e.observe(r)})}),(e,a)=>{const r=C;return e.block.status?(n(),l("section",{key:0,class:"section_service w-full relative pt-[30px] pb-[65px] z-30",style:i({backgroundColor:e.block.background_color})},[t("div",{class:"bg-image",style:i({backgroundImage:"url('"+e.block.background_image+"')"})},null,4),t("div",O,[t("div",Q,[(n(!0),l(T,null,q(c(k),(s,S)=>(n(),l("div",{key:S,class:"animation_up",itemscope:"",itemtype:"http://schema.org/Service"},[t("meta",{itemprop:"serviceType",content:c(h)},null,8,V),t("div",z,[t("div",{class:"item-image-leaves",style:i({backgroundImage:"url('"+e.block.image_flower+"')"})},null,4),g(r,{class:"image",to:`${c(o)}service/#${s==null?void 0:s.title.split(" ").join("")}`},{default:f(()=>[t("img",{src:s.image_home,alt:"Alt Service Home",class:"w-full h-full object-cover rounded-full",itemprop:"image"},null,8,G)]),_:2},1032,["to"]),g(r,{to:`${c(o)}service/#${s==null?void 0:s.title.split(" ").join("")}`,itemprop:"url"},{default:f(()=>[t("h3",P,M(s.title),1)]),_:2},1032,["to"]),(n(),l("svg",Z,a[0]||(a[0]=[t("g",{"data-name":"3 Boxes"},[t("g",{"data-name":"01"},[t("path",{class:"cls-1",d:"M25.752,2.377c-2.7,2.164-5,2.164-7.7,0a3.508,3.508,0,0,0-5.021,0c-2.673,2.143-4.853,2.143-7.526,0-1.779-1.427-2.981-1.427-4.761,0L0.011,1.331c2.163-1.734,3.981-1.8,6.23,0,2.12,1.7,3.685,1.9,6.057,0a4.641,4.641,0,0,1,6.489,0c2.206,1.77,3.937,1.839,6.23,0,2.25-1.8,3.721-1.8,5.97,0L30.254,2.377C28.446,0.927,27.562.927,25.752,2.377Z"})])],-1)])))])]))),128))])])],4)):D("",!0)}}}),J=I(F,[["__scopeId","data-v-31ade04c"]]);export{J as default};
