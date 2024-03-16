"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3087],{4487:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var s=n(4848),o=n(8453);const r={sidebar_position:1,title:"\uc804\uc5ed \ud14c\ub9c8 \uac1d\uccb4 \ucc38\uc870"},i="\uc804\uc5ed \ud14c\ub9c8 \uac1d\uccb4 \ucc38\uc870",d={id:"advanced/global-theme-value",title:"\uc804\uc5ed \ud14c\ub9c8 \uac1d\uccb4 \ucc38\uc870",description:"React Native Styled System\uc740 React\uc758 Context \uc678\ubd80\uc758 \uc804\uc5ed\uc5d0\uc11c \ud14c\ub9c8\ub97c \uac00\uc838\uc624\ub294",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/advanced/global-theme-value.mdx",sourceDirName:"advanced",slug:"/advanced/global-theme-value",permalink:"/react-native-styled-system/ko/docs/advanced/global-theme-value",draft:!1,unlisted:!1,editUrl:"https://github.com/mj-studio-library/react-native-styled-system/tree/main/doc/docs/advanced/global-theme-value.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"\uc804\uc5ed \ud14c\ub9c8 \uac1d\uccb4 \ucc38\uc870"},sidebar:"tutorialSidebar",previous:{title:"useSxTokens\ub97c \uc774\uc6a9\ud574 \ud1a0\ud070\uac12 \uc5bb\uae30",permalink:"/react-native-styled-system/ko/docs/advanced/get-token-value"}},a={},l=[];function c(e){const t={admonition:"admonition",code:"code",h1:"h1",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"\uc804\uc5ed-\ud14c\ub9c8-\uac1d\uccb4-\ucc38\uc870",children:"\uc804\uc5ed \ud14c\ub9c8 \uac1d\uccb4 \ucc38\uc870"}),"\n",(0,s.jsx)(t.p,{children:"React Native Styled System\uc740 React\uc758 Context \uc678\ubd80\uc758 \uc804\uc5ed\uc5d0\uc11c \ud14c\ub9c8\ub97c \uac00\uc838\uc624\ub294\n\ubc29\uc2dd\uc744 \uc81c\uacf5\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."}),"\n",(0,s.jsxs)(t.p,{children:["\uadf8\ub7ec\ub098 ",(0,s.jsx)(t.code,{children:"StyledSystemProvider"}),"\uc5d0 \ud14c\ub9c8\ub97c \uc804\ub2ec\ud560 \ub54c, \uc774 \ud14c\ub9c8\uac00 \ubcc0\uacbd\ub418\ub294 \ub2f9\uc2e0\uc758 \ucf54\ub4dc\uc5d0\uc11c\n\uc804\uc5ed \uac1d\uccb4\ub85c \ud14c\ub9c8\ub97c \uc800\uc7a5\ud574\ub450\uace0 \ucc38\uc870\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,s.jsxs)(t.p,{children:["\ub2e4\uc74c\uacfc \uac19\uc740 ",(0,s.jsx)(t.code,{children:"StyledSystemProvider"}),"\ub97c \uac10\uc2f8\ub294 \ub2f9\uc2e0\uc758 \ucf54\ub4dc\uc758 Wrapper \ucef4\ud3ec\ub10c\ud2b8\uac00 \uc788\ub2e4\uace0 \ud574\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",children:"import ...\nimport StyledSystemTheme from './AppTheme'\n\nexport const StyledSystemAppThemeProvider = ({ children }: PropsWithChildren<{}>) => {\n  const { sfTop, sfBottom, sfLeft, sfRight } = useSafeAreaValues();\n\n  const theme = useMemo(() => {\n    const safeArea = { sfTop, sfRight, sfBottom, sfLeft };\n    return {\n      ...StyledSystemTheme,\n      sizes: { ...StyledSystemTheme.sizes, ...safeArea },\n      space: { ...StyledSystemTheme.space, ...safeArea },\n    };\n  }, [sfLeft, sfTop, sfRight, sfBottom]);\n\n  return <StyledSystemProvider theme={theme}>{children}</StyledSystemProvider>;\n};\n"})}),"\n",(0,s.jsxs)(t.p,{children:["\uc774\uc81c ",(0,s.jsx)(t.code,{children:"theme"}),"\uac1d\uccb4\uac00 \ubcc0\uacbd\ub420 \ub54c \uc774\ub97c \uc804\uc5ed \ubcc0\uc218\ub85c \ucc38\uc870\ud560 \uc218 \uc788\uac8c \uc800\uc7a5\ud569\ub2c8\ub2e4."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",children:"import ...\nimport StyledSystemTheme from './AppTheme'\n\n// highlight-start\nlet _globalTheme: ThemedDict = StyledSystemTheme;\nexport const getGlobalTheme = () => _globalTheme;\n// highlight-end\n\nexport const StyledSystemAppThemeProvider = ({ children }: PropsWithChildren<{}>) => {\n  const { sfTop, sfBottom, sfLeft, sfRight } = useSafeAreaValues();\n\n  const theme = useMemo(() => {\n    const safeArea = { sfTop, sfRight, sfBottom, sfLeft };\n    return {\n      ...StyledSystemTheme,\n      sizes: { ...StyledSystemTheme.sizes, ...safeArea },\n      space: { ...StyledSystemTheme.space, ...safeArea },\n    };\n  }, [sfLeft, sfTop, sfRight, sfBottom]);\n\n// highlight-start\n  useEffect(() => {\n    globalTheme = theme;\n  }, [theme]);\n// highlight-end\n\n  return <StyledSystemProvider theme={theme}>{children}</StyledSystemProvider>;\n};\n"})}),"\n",(0,s.jsxs)(t.p,{children:["\uc774\uc81c \uc6b0\ub9ac\uc758 \ucf54\ub4dc\uc5d0\uc11c ",(0,s.jsx)(t.code,{children:"getGlobalTheme()"}),"\ub97c \ud1b5\ud574 \ud14c\ub9c8\ub97c \ucc38\uc870\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,s.jsxs)(t.admonition,{type:"warning",children:[(0,s.jsxs)(t.p,{children:["\ud56d\uc0c1 \ucd5c\uc2e0 ",(0,s.jsx)(t.code,{children:"theme"}),"\uac12\uc774 \ucc38\uc870\ub418\uc9c0 \uc54a\uc744 \uc218 \uc788\ub2e4\ub294 \uac83\uc744 \uc8fc\uc758\ud558\uc138\uc694."]}),(0,s.jsxs)(t.p,{children:["\uc608\ub97c \ub4e4\uc5b4, ",(0,s.jsx)(t.code,{children:"getGlobalTheme()"}),"\ub85c \ubc18\ud658\ub41c \uac12\uc744 \ubcc0\uc218\uc5d0 \uc800\uc7a5\ud574\ub450\uc5c8\ub2e4\uac00\n\ud14c\ub9c8 \uac12\uc774 \ubcc0\uacbd\ub41c \uc774\ud6c4 \uc0ac\uc6a9\ud558\ub824\uace0 \ud558\uba74 \uc774\uc804\uc758 \uac12\uc744 \uac00\ub9ac\ud0a4\uace0 \uc788\uc2b5\ub2c8\ub2e4."]})]})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>d});var s=n(6540);const o={},r=s.createContext(o);function i(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);