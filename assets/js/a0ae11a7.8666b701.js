"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[664],{9978:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var t=n(4848),i=n(8453);const r={sidebar_position:4,title:"Pass styles and parsing priorities"},o="Pass styles and parsing priorities",a={id:"usage/style-parsing",title:"Pass styles and parsing priorities",description:"There are various ways in which useSx is used to parse styles and produce output.",source:"@site/docs/usage/style-parsing.mdx",sourceDirName:"usage",slug:"/usage/style-parsing",permalink:"/react-native-styled-system/docs/usage/style-parsing",draft:!1,unlisted:!1,editUrl:"https://github.com/mj-studio-library/react-native-styled-system/tree/main/doc/docs/usage/style-parsing.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Pass styles and parsing priorities"},sidebar:"tutorialSidebar",previous:{title:"Component",permalink:"/react-native-styled-system/docs/usage/component"},next:{title:"SxProps References",permalink:"/react-native-styled-system/docs/usage/sx-props"}},l={},d=[];function c(e){const s={admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"pass-styles-and-parsing-priorities",children:"Pass styles and parsing priorities"}),"\n",(0,t.jsxs)(s.p,{children:["There are ",(0,t.jsx)(s.strong,{children:"various ways"})," in which ",(0,t.jsx)(s.code,{children:"useSx"})," is used to parse styles and produce output."]}),"\n",(0,t.jsx)(s.p,{children:"Let me show the following snippet."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-tsx",children:"const props = {\n  style: { marginTop: 24 }, // #3\n  sx: { mt: '24px' }, // #4\n  mt: '24px', // #5\n}\n\nconst { getStyle, filteredProps } = useSx(props, {\n  transform: ({ /* ... */ }) => ({ mt: 4 }), // #2\n  fallback: { mt: 8 }, // #6\n});\n\nreturn <View style={getStyle({ mt: 2 } /* #1 */ )} />\n"})}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["Argument ",(0,t.jsx)(s.code,{children:"sx"})," of ",(0,t.jsx)(s.code,{children:"getStyle(sx?: TextSxProps)"})]}),"\n",(0,t.jsxs)(s.li,{children:["Parsed result of ",(0,t.jsx)(s.code,{children:"transform"})," in the ",(0,t.jsx)(s.code,{children:"useSx"})," options (To be added)"]}),"\n",(0,t.jsxs)(s.li,{children:["Plain old ",(0,t.jsx)(s.code,{children:"style"})," prop"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"sx"})," in props"]}),"\n",(0,t.jsxs)(s.li,{children:["Plain properties in props, such as ",(0,t.jsx)(s.code,{children:"ml"})," or ",(0,t.jsx)(s.code,{children:"color"})]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"fallback"})," in the ",(0,t.jsx)(s.code,{children:"useSx"})," options (To be added)"]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"The priority is calculated as  1 > 2 > 3 > 4 > 5 > 6."})}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:"1 has the highest priority."}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"The reasons for this priority are as follows:"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"First of all, #6 should always have the lowest priority."})}),"\n",(0,t.jsxs)(s.p,{children:["As the name suggests, it means ",(0,t.jsx)(s.code,{children:"fallback"}),"."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"And #2 should have at least a higher priority than #3-5."})}),"\n",(0,t.jsx)(s.p,{children:"In the aspect of user of this component, they can only set #3-5."}),"\n",(0,t.jsxs)(s.p,{children:["The reason ",(0,t.jsx)(s.code,{children:"transform"})," is created is to calculate the value of another property based on the result of these or to change the value of the passed property. ."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"#3 should have higher priority than #4 and #5."})}),"\n",(0,t.jsx)(s.p,{children:"This is because when integrating this package, we want to maximize stability when refactoring existing code."}),"\n",(0,t.jsx)(s.admonition,{title:"To Be Discussed",type:"warning",children:(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"We should decide that #1 is really needed in this package later"})})}),"\n",(0,t.jsx)(s.admonition,{type:"tip",children:(0,t.jsx)(s.p,{children:"If you are not sure what to write and are confused,\nwe recommend removing all of the code that was #3 in the beginning and introducing only #5 and #2 first."})})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>o,x:()=>a});var t=n(6540);const i={},r=t.createContext(i);function o(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);