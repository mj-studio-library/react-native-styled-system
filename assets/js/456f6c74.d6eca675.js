"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1958],{6343:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>u,metadata:()=>i,toc:()=>d});var a=n(4848),r=n(8453),s=n(1470),l=n(9365);const u={sidebar_position:1,title:"Install"},o="Install",i={id:"usage/install",title:"Install",description:"Installiation step",source:"@site/docs/usage/install.mdx",sourceDirName:"usage",slug:"/usage/install",permalink:"/react-native-styled-system/docs/usage/install",draft:!1,unlisted:!1,editUrl:"https://github.com/mj-studio-library/react-native-styled-system/tree/main/doc/docs/usage/install.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Install"},sidebar:"tutorialSidebar",previous:{title:"Usage",permalink:"/react-native-styled-system/docs/category/usage"},next:{title:"Configuration",permalink:"/react-native-styled-system/docs/usage/configuration"}},c={},d=[];function m(e){const t={code:"code",h1:"h1",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"install",children:"Install"}),"\n",(0,a.jsx)(t.p,{children:"Installiation step"}),"\n",(0,a.jsxs)(s.A,{children:[(0,a.jsx)(l.A,{value:"npm",label:"npm",default:!0,children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sh",children:"npm install react-native-themed-styled-system\n"})})}),(0,a.jsx)(l.A,{value:"yarn",label:"yarn",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sh",children:"yarn add react-native-themed-styled-system\n"})})})]})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},9365:(e,t,n)=>{n.d(t,{A:()=>l});n(6540);var a=n(4164);const r={tabItem:"tabItem_Ymn6"};var s=n(4848);function l(e){let{children:t,hidden:n,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,l),hidden:n,children:t})}},1470:(e,t,n)=>{n.d(t,{A:()=>w});var a=n(6540),r=n(4164),s=n(3104),l=n(6347),u=n(205),o=n(7485),i=n(1682),c=n(9466);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}(n);return function(e){const t=(0,i.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const r=(0,l.W6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o.aZ)(s),(0,a.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(r.location.search);t.set(s,e),r.replace({...r.location,search:t.toString()})}),[s,r])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,s=m(e),[l,o]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s}))),[i,d]=f({queryString:n,groupId:r}),[h,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,s]=(0,c.Dv)(n);return[r,(0,a.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:r}),v=(()=>{const e=i??h;return p({value:e,tabValues:s})?e:null})();(0,u.A)((()=>{v&&o(v)}),[v]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),b(e)}),[d,b,s]),tabValues:s}}var b=n(2303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(4848);function y(e){let{className:t,block:n,selectedValue:a,selectValue:l,tabValues:u}=e;const o=[],{blockElementScrollPositionUntilNextRender:i}=(0,s.a_)(),c=e=>{const t=e.currentTarget,n=o.indexOf(t),r=u[n].value;r!==a&&(i(t),l(r))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:u.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>o.push(e),onKeyDown:d,onClick:c,...s,className:(0,r.A)("tabs__item",v.tabItem,s?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function x(e){let{lazy:t,children:n,selectedValue:r}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function I(e){const t=h(e);return(0,g.jsxs)("div",{className:(0,r.A)("tabs-container",v.tabList),children:[(0,g.jsx)(y,{...e,...t}),(0,g.jsx)(x,{...e,...t})]})}function w(e){const t=(0,b.A)();return(0,g.jsx)(I,{...e,children:d(e.children)},String(t))}},8453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>u});var a=n(6540);const r={},s=a.createContext(r);function l(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function u(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);