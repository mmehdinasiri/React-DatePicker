_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[8],{"+5Se":function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/customization",function(){return r("zO3D")}])},"20a2":function(e,t,r){e.exports=r("nOHt")},YFqc:function(e,t,r){e.exports=r("cTJO")},aPDg:function(e,t,r){"use strict";r.d(t,"c",(function(){return c})),r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return l}));var n=r("G1Q1"),c=(r("ewFX"),function(e){var t=e.children;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(l,{}),Object(n.jsx)("div",{className:"container mx-auto min-h-full px-2 pt-16",children:Object(n.jsx)("div",{className:"main-content py-4",children:t})})]})}),s=r("YFqc"),a=r.n(s),i=r("20a2"),o=function(e){var t=e.children;Object(i.useRouter)();return Object(n.jsx)(c,{children:Object(n.jsxs)("div",{className:"flex ",children:[Object(n.jsx)("div",{className:"w-2/6 2xl:w-1/6",children:Object(n.jsxs)("div",{className:"fixed",style:{width:"240px"},children:[Object(n.jsx)("h2",{className:"font-bold text-text text-lg",children:"Usage"}),Object(n.jsxs)("div",{className:"pl-2",children:[Object(n.jsx)(a.a,{href:"/docs/get-started",children:Object(n.jsx)("a",{className:"block text-text hover:text-primary  my-2",children:"Get started"})}),Object(n.jsx)(a.a,{href:"/docs/props",children:Object(n.jsx)("a",{className:"block text-text hover:text-primary  my-2",children:"Props"})}),Object(n.jsx)(a.a,{href:"/docs/customization",children:Object(n.jsx)("a",{className:"block text-text hover:text-primary  my-2",children:"Customization"})}),Object(n.jsx)(a.a,{href:"/docs/utilities",children:Object(n.jsx)("a",{className:"block text-text hover:text-primary  my-2",children:"Utilities"})}),Object(n.jsx)(a.a,{href:"/docs/typescript",children:Object(n.jsx)("a",{className:"block text-text hover:text-primary  my-2",children:"Typescript"})}),Object(n.jsx)(a.a,{href:"/docs/examples",children:Object(n.jsx)("a",{className:"block text-text hover:text-primary  my-2",children:"Examples"})})]})]})}),Object(n.jsx)("div",{className:"w-4/6 2xl:w-5/6 pl-4 2xl:pl-12  xl:pl-6",children:t})]})})},l=function(){return Object(n.jsx)("div",{className:" fixed w-full z-20",children:Object(n.jsxs)("nav",{className:"flex items-center justify-between flex-wrap bg-teal p-4 bg-primary text-text-lightest",children:[Object(n.jsxs)("div",{className:"flex items-center flex-no-shrink text-text-lightest mr-6",children:[Object(n.jsx)(a.a,{href:"/",children:Object(n.jsx)("a",{className:"w-9 mr-2",children:Object(n.jsx)("img",{src:"".concat("/react-calendar-datetime-picker","/logo-w.png")})})}),Object(n.jsx)("span",{className:"text-xl text-text-lightest font-medium",children:Object(n.jsx)(a.a,{href:"/",children:Object(n.jsxs)("a",{className:"cursor-pointer",children:["React calendar date-time picker"," ",Object(n.jsx)("span",{className:"text-xs ml-1",children:"v1.3.3"})]})})})]}),Object(n.jsxs)("div",{className:"flex-grow flex items-center w-auto text-right",children:[Object(n.jsxs)("div",{className:"text-sm flex-grow",children:[Object(n.jsx)(a.a,{href:"/docs/get-started",children:Object(n.jsx)("a",{className:"block inline-block mt-0 text-text-lightest hover:text-white mr-4 font-extralight",children:"Docs"})}),Object(n.jsx)(a.a,{href:"/docs/examples",children:Object(n.jsx)("a",{className:"block inline-block mt-0 text-text-lightest hover:text-white mr-4 font-extralight",children:"Examples"})}),Object(n.jsx)("a",{className:"block inline-block mt-0 text-text-lightest hover:text-white mr-4 font-extralight",href:"https://github.com/mmehdinasiri/react-calendar-datetime-picker",target:"_blank",rel:"noopener noreferrer",children:"Github"})]}),Object(n.jsx)("div",{})]})]})})}},cTJO:function(e,t,r){"use strict";var n=r("J4zp"),c=r("284h");t.__esModule=!0,t.default=void 0;var s=c(r("ewFX")),a=r("elyg"),i=r("nOHt"),o=r("vNVm"),l={};function d(e,t,r,n){if(e&&(0,a.isLocalURL)(t)){e.prefetch(t,r,n).catch((function(e){0}));var c=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;l[t+"%"+r+(c?"%"+c:"")]=!0}}var p=function(e){var t=!1!==e.prefetch,r=(0,i.useRouter)(),c=r&&r.pathname||"/",p=s.default.useMemo((function(){var t=(0,a.resolveHref)(c,e.href,!0),r=n(t,2),s=r[0],i=r[1];return{href:s,as:e.as?(0,a.resolveHref)(c,e.as):i||s}}),[c,e.href,e.as]),u=p.href,h=p.as,f=e.children,x=e.replace,m=e.shallow,b=e.scroll,j=e.locale;"string"===typeof f&&(f=s.default.createElement("a",null,f));var y=s.Children.only(f),g=y&&"object"===typeof y&&y.ref,v=(0,o.useIntersection)({rootMargin:"200px"}),O=n(v,2),w=O[0],N=O[1],k=s.default.useCallback((function(e){w(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,w]);(0,s.useEffect)((function(){var e=N&&t&&(0,a.isLocalURL)(u),n="undefined"!==typeof j?j:r&&r.locale,c=l[u+"%"+h+(n?"%"+n:"")];e&&!c&&d(r,u,h,{locale:n})}),[h,u,N,j,t,r]);var T={ref:k,onClick:function(e){y.props&&"function"===typeof y.props.onClick&&y.props.onClick(e),e.defaultPrevented||function(e,t,r,n,c,s,i,o){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,a.isLocalURL)(r))&&(e.preventDefault(),null==i&&(i=n.indexOf("#")<0),t[c?"replace":"push"](r,n,{shallow:s,locale:o,scroll:i}).then((function(e){e&&i&&document.body.focus()})))}(e,r,u,h,x,m,b,j)},onMouseEnter:function(e){(0,a.isLocalURL)(u)&&(y.props&&"function"===typeof y.props.onMouseEnter&&y.props.onMouseEnter(e),d(r,u,h,{priority:!0}))}};if(e.passHref||"a"===y.type&&!("href"in y.props)){var C="undefined"!==typeof j?j:r&&r.locale,L=r&&r.isLocaleDomain&&(0,a.getDomainLocale)(h,C,r&&r.locales,r&&r.domainLocales);T.href=L||(0,a.addBasePath)((0,a.addLocale)(h,C,r&&r.defaultLocale))}return s.default.cloneElement(y,T)};t.default=p},vNVm:function(e,t,r){"use strict";var n=r("J4zp");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,r=e.disabled||!a,o=(0,c.useRef)(),l=(0,c.useState)(!1),d=n(l,2),p=d[0],u=d[1],h=(0,c.useCallback)((function(e){o.current&&(o.current(),o.current=void 0),r||p||e&&e.tagName&&(o.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=i.get(t);if(r)return r;var n=new Map,c=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return i.set(t,r={id:t,observer:c,elements:n}),r}(r),c=n.id,s=n.observer,a=n.elements;return a.set(e,t),s.observe(e),function(){a.delete(e),s.unobserve(e),0===a.size&&(s.disconnect(),i.delete(c))}}(e,(function(e){return e&&u(e)}),{rootMargin:t}))}),[r,t,p]);return(0,c.useEffect)((function(){if(!a&&!p){var e=(0,s.requestIdleCallback)((function(){return u(!0)}));return function(){return(0,s.cancelIdleCallback)(e)}}}),[p]),[h,p]};var c=r("ewFX"),s=r("0G5g"),a="undefined"!==typeof IntersectionObserver;var i=new Map},zO3D:function(e,t,r){"use strict";r.r(t);var n=r("G1Q1"),c=r("aPDg"),s=[{property:"placeholder",type:"string",default:'"select"',description:"To change input date picker placeholder"},{property:"inputClass",type:"string",default:"",description:"To change calender's input style"},{property:"clearBtnClass",type:"string",default:"",description:"To change calender's clear button style"},{property:"calenderModalClass",type:"string",default:"",description:"To change calender's main modal style"},{property:"headerClass",type:"string",default:"",description:"To change calender's green header style"},{property:"timeClass",type:"string",default:"",description:"To change calender's time view style"},{property:"daysClass",type:"string",default:"",description:"To change calender's days view style"},{property:"monthsClass",type:"string",default:"",description:"To change calender's months view style"},{property:"yearsClass",type:"string",default:"",description:"To change calender's years view style"},{property:"NextBtnIcon",type:"svg as component",default:'">"',description:"To change next month button icon."},{property:"PreviousBtnIcon",type:"svg as component",default:'"<"',description:"To change previous month button icon."},{property:"nextMonthBtnTitle",type:"string",default:'"next"',description:"To change next month button title(shows by hover)."},{property:"previousMonthBtnTitle",type:"string",default:'"previous"',description:"To change previous month button title(shows by hover)."},{property:"fromLabel",type:"string",default:'"from"',description:"Starting date label in input result(works only in range type)."},{property:"toLabel",type:"string",default:'"to"',description:"Ending date label in input result(works only in range type)."},{property:"clockFromLabel",type:"string",default:'"from"',description:"Title for starting time in the time component(works only in range type)."},{property:"clockToLabel",type:"string",default:'"to"',description:"Title for ending time in the time component(works only in range type)."},{property:"clockLabel",type:"string",default:'"clock"',description:"Label for time in the time component(works in single and range type)."}];t.default=function(){return Object(n.jsxs)(c.a,{children:[Object(n.jsx)("h1",{className:"text-3xl mb-6",children:"Customization"}),Object(n.jsx)("p",{className:"text-lg mb-3",children:"React-Calendar-DateTime-Picker is very customizable; one can change any label or style that they need. Here is a list of props that can be used to customize the calender:"}),Object(n.jsx)("div",{className:"overflow-x-auto",children:Object(n.jsxs)("table",{className:"border border-primary rounded  w-full",children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{className:"text-left",children:[Object(n.jsx)("th",{className:"w-3/12 border border-primary p-3",children:"Property"}),Object(n.jsx)("th",{className:"w-2/12 border border-primary p-3 text-center",children:"Type"}),Object(n.jsx)("th",{className:"w-2/12 border border-primary p-3 text-center",children:"Default"}),Object(n.jsx)("th",{className:"w-6/12 border border-primary p-3",children:"Description"})]})}),Object(n.jsx)("tbody",{children:s.map((function(e,t){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{className:"w-3/12 border border-primary p-2",children:e.property}),Object(n.jsx)("td",{className:"w-2/12 border border-primary p-2 text-center",children:e.type}),Object(n.jsx)("td",{className:"w-2/12 border border-primary p-2 text-center",children:e.default}),Object(n.jsx)("td",{className:"w-6/12 border border-primary p-2",children:e.description})]},t)}))})]})})]})}}},[["+5Se",0,2,1]]]);