import{_ as I,m as $,f as j,g as S,h as k,i as q}from"./C5PqHtfV.js";import{l as E,P as G,L as f,R as B,J as h,Q as g,U as c,I as R,a0 as W,t as w,m as b}from"./B8xjQDrD.js";const D={wrapper:"flex items-center -space-x-px",base:"",rounded:"first:rounded-s-md last:rounded-e-md",default:{size:"sm",activeButton:{color:"primary"},inactiveButton:{color:"white"},firstButton:{color:"white",class:"rtl:[&_span:first-child]:rotate-180",icon:"i-heroicons-chevron-double-left-20-solid"},lastButton:{color:"white",class:"rtl:[&_span:last-child]:rotate-180",icon:"i-heroicons-chevron-double-right-20-solid"},prevButton:{color:"white",class:"rtl:[&_span:first-child]:rotate-180",icon:"i-heroicons-chevron-left-20-solid"},nextButton:{color:"white",class:"rtl:[&_span:last-child]:rotate-180",icon:"i-heroicons-chevron-right-20-solid"}}},r=$(k.ui.strategy,k.ui.pagination,D),J=$(k.ui.strategy,k.ui.button,q),Q=E({components:{UButton:j},inheritAttrs:!1,props:{modelValue:{type:Number,required:!0},pageCount:{type:Number,default:10},total:{type:Number,required:!0},max:{type:Number,default:7,validate(e){return e>=5&&e<Number.MAX_VALUE}},disabled:{type:Boolean,default:!1},size:{type:String,default:()=>r.default.size,validator(e){return Object.keys(J.size).includes(e)}},to:{type:Function,default:null},activeButton:{type:Object,default:()=>r.default.activeButton},inactiveButton:{type:Object,default:()=>r.default.inactiveButton},showFirst:{type:Boolean,default:!1},showLast:{type:Boolean,default:!1},firstButton:{type:Object,default:()=>r.default.firstButton},lastButton:{type:Object,default:()=>r.default.lastButton},prevButton:{type:Object,default:()=>r.default.prevButton},nextButton:{type:Object,default:()=>r.default.nextButton},divider:{type:String,default:"…"},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["update:modelValue"],setup(e,{emit:C}){const{ui:P,attrs:z}=S("pagination",w(e,"ui"),r,w(e,"class")),i=b({get(){return e.modelValue},set(o){C("update:modelValue",o)}}),p=b(()=>Array.from({length:Math.ceil(e.total/e.pageCount)},(o,s)=>s+1)),u=b(()=>{const o=p.value.length,s=i.value,O=Math.max(e.max,5),l=Math.floor((Math.min(O,o)-5)/2),N=s-l,y=s+l,L=N-1>1,F=y+1<o,n=[];if(o<=O){for(let a=1;a<=o;a++)n.push(a);return n}if(n.push(1),L&&n.push(e.divider),!F){const a=s+l+2-o;for(let d=s-l-a;d<=s-l-1;d++)n.push(d)}for(let a=Math.max(2,N);a<=Math.min(o,y);a++)n.push(a);if(!L){const a=1-(s-l-2);for(let d=s+l+1;d<=s+l+a;d++)n.push(d)}return F&&n.push(e.divider),y<o&&n.push(o),n.length>=3&&n[1]===e.divider&&n[2]===3&&(n[1]=2),n.length>=3&&n[n.length-2]===e.divider&&n[n.length-1]===n.length&&(n[n.length-2]=n.length-1),n}),t=b(()=>i.value>1),v=b(()=>i.value<p.value.length);function m(){t.value&&(i.value=1)}function M(){v.value&&(i.value=p.value.length)}function V(o){typeof o!="string"&&(i.value=o)}function A(){t.value&&i.value--}function U(){v.value&&i.value++}return{ui:P,attrs:z,currentPage:i,pages:p,displayedPages:u,canGoLastOrNext:v,canGoFirstOrPrev:t,onClickPrev:A,onClickNext:U,onClickPage:V,onClickFirst:m,onClickLast:M}}});function X(e,C,P,z,i,p){const u=j;return f(),G("div",c({class:e.ui.wrapper},e.attrs),[B(e.$slots,"first",{onClick:e.onClickFirst,canGoFirst:e.canGoFirstOrPrev},()=>{var t;return[e.firstButton&&e.showFirst?(f(),h(u,c({key:0,size:e.size,to:(t=e.to)==null?void 0:t.call(e,1),disabled:!e.canGoFirstOrPrev||e.disabled,class:[e.ui.base,e.ui.rounded]},{...e.ui.default.firstButton||{},...e.firstButton},{ui:{rounded:""},"aria-label":"First",onClick:e.onClickFirst}),null,16,["size","to","disabled","class","onClick"])):g("",!0)]}),B(e.$slots,"prev",{onClick:e.onClickPrev,canGoPrev:e.canGoFirstOrPrev},()=>{var t;return[e.prevButton?(f(),h(u,c({key:0,size:e.size,to:(t=e.to)==null?void 0:t.call(e,e.currentPage-1),disabled:!e.canGoFirstOrPrev||e.disabled,class:[e.ui.base,e.ui.rounded]},{...e.ui.default.prevButton||{},...e.prevButton},{ui:{rounded:""},"aria-label":"Prev",onClick:e.onClickPrev}),null,16,["size","to","disabled","class","onClick"])):g("",!0)]}),(f(!0),G(R,null,W(e.displayedPages,(t,v)=>{var m;return f(),h(u,c({key:`${t}-${v}`,to:typeof t=="number"?(m=e.to)==null?void 0:m.call(e,t):null,size:e.size,disabled:e.disabled,label:`${t}`,ref_for:!0},t===e.currentPage?{...e.ui.default.activeButton||{},...e.activeButton}:{...e.ui.default.inactiveButton||{},...e.inactiveButton},{class:[{"pointer-events-none":typeof t=="string","z-[1]":t===e.currentPage},e.ui.base,e.ui.rounded],ui:{rounded:""},onClick:()=>e.onClickPage(t)}),null,16,["to","size","disabled","label","class","onClick"])}),128)),B(e.$slots,"next",{onClick:e.onClickNext,canGoNext:e.canGoLastOrNext},()=>{var t;return[e.nextButton?(f(),h(u,c({key:0,size:e.size,to:(t=e.to)==null?void 0:t.call(e,e.currentPage+1),disabled:!e.canGoLastOrNext||e.disabled,class:[e.ui.base,e.ui.rounded]},{...e.ui.default.nextButton||{},...e.nextButton},{ui:{rounded:""},"aria-label":"Next",onClick:e.onClickNext}),null,16,["size","to","disabled","class","onClick"])):g("",!0)]}),B(e.$slots,"last",{onClick:e.onClickLast,canGoLast:e.canGoLastOrNext},()=>{var t;return[e.lastButton&&e.showLast?(f(),h(u,c({key:0,size:e.size,to:(t=e.to)==null?void 0:t.call(e,e.pages.length),disabled:!e.canGoLastOrNext||e.disabled,class:[e.ui.base,e.ui.rounded]},{...e.ui.default.lastButton||{},...e.lastButton},{ui:{rounded:""},"aria-label":"Last",onClick:e.onClickLast}),null,16,["size","to","disabled","class","onClick"])):g("",!0)]})],16)}const T=I(Q,[["render",X]]);export{T as _};
