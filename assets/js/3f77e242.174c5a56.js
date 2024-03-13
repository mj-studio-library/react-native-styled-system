"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4713],{4863:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var s=t(4848),o=t(8453);const i={sidebar_position:3,title:"Component"},r="Component",l={id:"usage/component",title:"Component",description:"React Native Styled System does not create basic components internally.",source:"@site/docs/usage/component.mdx",sourceDirName:"usage",slug:"/usage/component",permalink:"/react-native-styled-system/docs/usage/component",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/usage/component.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Component"},sidebar:"tutorialSidebar",previous:{title:"Settings",permalink:"/react-native-styled-system/docs/usage/configuration"},next:{title:"Pass styles and parsing priorities",permalink:"/react-native-styled-system/docs/usage/style-parsing"}},c={},d=[{value:"<code>StyledView</code> example",id:"styledview-example",level:2},{value:"Example of refactoring an existing component",id:"example-of-refactoring-an-existing-component",level:2}];function a(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"component",children:"Component"}),"\n",(0,s.jsx)(n.p,{children:"React Native Styled System does not create basic components internally."}),"\n",(0,s.jsx)(n.p,{children:"Instead, you can define the components that will use your theme directly with a simple and extensible API."}),"\n",(0,s.jsx)(n.p,{children:"The mainly used APIs are as follows."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"useSx(hook)"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"SxProps(type)"})}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"styledview-example",children:[(0,s.jsx)(n.code,{children:"StyledView"})," example"]}),"\n",(0,s.jsxs)(n.p,{children:["Let\u2019s create a component that can use React Native\u2019s ",(0,s.jsx)(n.code,{children:"View"})," component like a Styled System."]}),"\n",(0,s.jsxs)(n.p,{children:["How to use the completed ",(0,s.jsx)(n.code,{children:"StyledView"})," component is as follows."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://raw.githubusercontent.com/mym0404/image-archive/master/202403131245340.png",alt:"image.png"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"<StyledView w={48} h={48}>\n  <StyledView w={'100%'} h={24} radius={12} bg={'red500'} t={0} />\n  <StyledView w={24} h={24} radius={12} bg={'blue400'} pos={'absolute'} t={0} r={'-24'} />\n  <StyledView w={24} h={24} radius={12} bg={'yellow300'} pos={'absolute'} b={0} r={-24} />\n  <StyledView w={24} h={24} radius={12} bg={'violet400'} pos={'absolute'} b={0} r={'-48'} />\n  <StyledView w={24} h={24} radius={12} bg={'violet50'} pos={'absolute'} b={0} l={'sidePadding'} />\n</StyledView>\n"})}),"\n",(0,s.jsx)(n.p,{children:"It can be defined as follows:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",metastring:'title="StyledView.tsx"',children:"import { forwardRef, Ref, PropsWithChildren } from 'react';\nimport { View, ViewProps } from 'react-native';\nimport { SxProps, useSx } from 'react-native-themed-styled-system';\n\ntype StyledViewProps = PropsWithChildren<ViewProps & SxProps>;\nconst StyledView = forwardRef((props: StyledViewProps, ref: Ref<View>) => {\n  const { viewStyle } = useSx(props);\n  return <View ref={ref} {...props} style={viewStyle()} />;\n});\n\nexport { StyledView };\nexport type { StyledViewProps };\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"useSx"})," is responsible for receiving ",(0,s.jsx)(n.code,{children:"SxProps"})," and converting it to ",(0,s.jsx)(n.code,{children:"ViewStyle"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["You can call the ",(0,s.jsx)(n.code,{children:"viewStyle"})," function returned by ",(0,s.jsx)(n.code,{children:"useSx"})," and pass it to the ",(0,s.jsx)(n.code,{children:"style"})," prop of the desired view."]}),"\n",(0,s.jsxs)(n.admonition,{type:"warning",children:[(0,s.jsxs)(n.p,{children:["The prop type of a component containing the ",(0,s.jsx)(n.code,{children:"SxProps"})," type includes all the keys included in ",(0,s.jsx)(n.code,{children:"SxProps"}),"."]}),(0,s.jsxs)(n.p,{children:["Therefore, if all props from the parent are passed through object destruction like in the existing ",(0,s.jsx)(n.code,{children:"{...props}"}),", the keys do not overlap.\nYou need to be careful not to do so."]})]}),"\n",(0,s.jsx)(n.h2,{id:"example-of-refactoring-an-existing-component",children:"Example of refactoring an existing component"}),"\n",(0,s.jsx)(n.p,{children:"Let's look at how to refactor existing components as follows."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"type Props = {\n  style?: StyleProp<ViewStyle>;\n  title?: string;\n  body?: string;\n};\nconst ExistComponent = ({\n  style,\n  title,\n  body,\n}: Props) => {\n  return (\n    <View\n      style={[style, { alignItems: 'center', justifyContent: 'center' }]}\n    >\n...\n"})}),"\n",(0,s.jsx)(n.p,{children:"This changes to:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"type Props = {\n  style?: StyleProp<ViewStyle>;\n  title?: string;\n  body?: string;\n//highlight-next-line\n} &SxProps;\nconst ScreenErrorFallback = (props: Props) => {\n//highlight-next-line\n  const { title, body } = props;\n//highlight-next-line\n  const { viewStyle } = useSx(props);\n  return (\n    <View\n//highlight-next-line\n      style={viewStyle({ alignItems: 'center', justifyContent: 'center' })}\n      pointerEvents={'box-none'}\n    >\n"})}),"\n",(0,s.jsx)(n.p,{children:"There are a few things to keep in mind."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"useSx"})," includes ",(0,s.jsx)(n.code,{children:"props.style"})," in the automatically created style output.\nThere is no need to add ",(0,s.jsx)(n.code,{children:"style"})," as a prop to ",(0,s.jsx)(n.code,{children:"style"})," of ",(0,s.jsx)(n.code,{children:"View"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Always pass all ",(0,s.jsx)(n.code,{children:"props"})," objects themselves to ",(0,s.jsx)(n.code,{children:"useSx"})," to avoid missing any properties. ",(0,s.jsx)(n.code,{children:"useSx"}),"\nProperties that are not used internally are ignored and not changed."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"viewStyle"})," can receive ",(0,s.jsx)(n.code,{children:"SxProps"})," as an argument and consider it in the result."]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>l});var s=t(6540);const o={},i=s.createContext(o);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);