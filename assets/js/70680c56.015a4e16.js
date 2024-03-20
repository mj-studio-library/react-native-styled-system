"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5094],{8560:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>a});var s=n(4848),i=n(8453);const o={sidebar_position:2,title:"Configuration"},r="Configuration",d={id:"usage/configuration",title:"Configuration",description:"1. StyledSystemProvider declaration",source:"@site/docs/usage/configuration.mdx",sourceDirName:"usage",slug:"/usage/configuration",permalink:"/react-native-styled-system/docs/usage/configuration",draft:!1,unlisted:!1,editUrl:"https://github.com/mj-studio-library/react-native-styled-system/tree/main/doc/docs/usage/configuration.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Configuration"},sidebar:"tutorialSidebar",previous:{title:"Install",permalink:"/react-native-styled-system/docs/usage/install"},next:{title:"Component",permalink:"/react-native-styled-system/docs/usage/component"}},c={},a=[{value:"1. <code>StyledSystemProvider</code> declaration",id:"1-styledsystemprovider-declaration",level:2},{value:"2. Creating a custom <code>ThemedDict</code> object",id:"2-creating-a-custom-themeddict-object",level:2},{value:"3. Passing <code>ThemedDict</code> object to <code>StyledSystemProvider</code>",id:"3-passing-themeddict-object-to-styledsystemprovider",level:2}];function l(e){const t={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"configuration",children:"Configuration"}),"\n",(0,s.jsxs)(t.h2,{id:"1-styledsystemprovider-declaration",children:["1. ",(0,s.jsx)(t.code,{children:"StyledSystemProvider"})," declaration"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"StyledSystemProvider"})," is a ",(0,s.jsx)(t.code,{children:"React.Provider"})," that accepts a custom theme similar to the ",(0,s.jsx)(t.code,{children:"ThemeProvider"})," of other design packages as an argument and allows you to retrieve values from components or hooks within the app."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",metastring:'title="App.tsx"',children:"<App>\n  <StyledSystemProvider theme={theme}>\n     {...others}\n  </StyledSystemProvider>\n</App>\n"})}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"theme"})," passed as an argument is described in the next paragraph."]}),"\n",(0,s.jsx)(t.admonition,{type:"warning",children:(0,s.jsxs)(t.p,{children:["If you try to use a theme in a Render Context where ",(0,s.jsx)(t.code,{children:"StyledSystemProvider"})," does not exist, an error will not occur, but the style may not be applied properly."]})}),"\n",(0,s.jsxs)(t.h2,{id:"2-creating-a-custom-themeddict-object",children:["2. Creating a custom ",(0,s.jsx)(t.code,{children:"ThemedDict"})," object"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"ThemedDict"})," is a set of design token values that you need to pass to your theme."]}),"\n",(0,s.jsxs)(t.p,{children:["These include ",(0,s.jsx)(t.code,{children:"space"}),", ",(0,s.jsx)(t.code,{children:"sizes"}),", ",(0,s.jsx)(t.code,{children:"colors"}),", etc."]}),"\n",(0,s.jsxs)(t.p,{children:["Since a module that ",(0,s.jsx)(t.code,{children:"default exports"})," ",(0,s.jsx)(t.code,{children:"ThemedDict"})," is needed in the Type Generation process using CLI in the future, it is recommended to define it as follows."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",metastring:'title="Theme.ts"',children:"const unit = 4;\nconst spacing = {\n  0: 0 * unit, // 0px\n  px: 1, // 1px\n  0.5: 0.5 * unit, // 2px\n  1: 1 * unit, // 4px\n  2: 2 * unit, // 8px\n  3: 3 * unit, // 12px\n  // others\n} as const;\n\nconst AppTheme = {\n  colors: {\n    white: '#FFFFFF',\n    black: '#000000',\n    transparent: '#FFFFFF00',\n    gray50: '#F9FAFB',\n    gray100: '#F3F4F6',\n    gray200: '#E5E7EB',\n    // others\n  },\n  space: { ...spacing, sidePadding: 0 /* injected from outer */ },\n  sizes: { ...spacing, sidePadding: 0 /* injected from outer */ },\n  radii: { sm: 4, md: 8, ... },\n}\n\nexport default AppTheme;\n"})}),"\n",(0,s.jsxs)(t.admonition,{type:"info",children:[(0,s.jsxs)(t.p,{children:["In fact, this ",(0,s.jsx)(t.code,{children:"ThemedDict"})," object is used as a value passed to ",(0,s.jsx)(t.code,{children:"StyledSystemProvider"}),",\nbut since Type Generation using CLI creates a type based on this object,\nit exists to ensure that values injected later exist in the created type."]}),(0,s.jsx)(t.p,{children:"For values among the keys that are not immediately known, you can put any value in them and inject them later."})]}),"\n",(0,s.jsxs)(t.h2,{id:"3-passing-themeddict-object-to-styledsystemprovider",children:["3. Passing ",(0,s.jsx)(t.code,{children:"ThemedDict"})," object to ",(0,s.jsx)(t.code,{children:"StyledSystemProvider"})]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",metastring:'title="App.tsx"',children:"import theme from './AppTheme'\n\n...\n\nconst sidePadding = useResponsiveSidePadding();\n\n<App>\n  <StyledSystemProvider theme={{ ...theme, sidePadding }}>\n     {...others}\n  </StyledSystemProvider>\n</App>\n"})})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>d});var s=n(6540);const i={},o=s.createContext(i);function r(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);