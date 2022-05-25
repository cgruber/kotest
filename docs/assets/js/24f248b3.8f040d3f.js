"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[8753],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return g}});var r=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var s=r.createContext({}),p=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},u=function(t){var e=p(t.components);return r.createElement(s.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,i=t.originalType,s=t.parentName,u=a(t,["components","mdxType","originalType","parentName"]),f=p(n),g=o,d=f["".concat(s,".").concat(g)]||f[g]||c[g]||i;return n?r.createElement(d,l(l({ref:e},u),{},{components:n})):r.createElement(d,l({ref:e},u))}));function g(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=n.length,l=new Array(i);l[0]=f;var a={};for(var s in e)hasOwnProperty.call(e,s)&&(a[s]=e[s]);a.originalType=t,a.mdxType="string"==typeof t?t:o,l[1]=a;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},68189:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return a},metadata:function(){return p},toc:function(){return c}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),l=["components"],a={id:"globalconfig",title:"Global Configuration",slug:"property-test-global-config.html"},s=void 0,p={unversionedId:"proptest/globalconfig",id:"version-5.2/proptest/globalconfig",title:"Global Configuration",description:"Some property test settings can be set globally for all property tests.",source:"@site/versioned_docs/version-5.2/proptest/globalconfig.md",sourceDirName:"proptest",slug:"/proptest/property-test-global-config.html",permalink:"/docs/5.2/proptest/property-test-global-config.html",draft:!1,editUrl:"https://github.com/kotest/kotest/blob/master/documentation/versioned_docs/version-5.2/proptest/globalconfig.md",tags:[],version:"5.2",frontMatter:{id:"globalconfig",title:"Global Configuration",slug:"property-test-global-config.html"},sidebar:"proptest",previous:{title:"Shrinking",permalink:"/docs/5.2/proptest/property-test-shrinking.html"},next:{title:"Arrow Generators",permalink:"/docs/5.2/proptest/property-test-generators-arrow.html"}},u={},c=[{value:"Default Iterations",id:"default-iterations",level:3},{value:"Printing Shrink Steps",id:"printing-shrink-steps",level:3}],f={toc:c};function g(t){var e=t.components,n=(0,o.Z)(t,l);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Some property test settings can be set globally for all property tests."),(0,i.kt)("h3",{id:"default-iterations"},"Default Iterations"),(0,i.kt)("p",null,"The standard default iteration count is 1000. This means when you don't specify the iteration count in a property test,\nthe default will be 1000."),(0,i.kt)("p",null,"We can override this default either by assigning a value to ",(0,i.kt)("inlineCode",{parentName:"p"},"PropertyTesting.defaultIterationCount"),", or by using the system property ",(0,i.kt)("inlineCode",{parentName:"p"},"kotest.proptest.default.iteration.count"),"."),(0,i.kt)("p",null,"Any test which directly sets the iteration count will of course use that value."),(0,i.kt)("p",null,"For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'PropertyTesting.defaultIterationCount = 123\n\n// will use 555 iterations specified in the test\nforAll<String, String>(555) { a,b -> a + b == "$a$b" }\n\n// will use 123 iterations from the global default\nforAll<String, String> { a,b -> a + b == "$a$b" }\n')),(0,i.kt)("h3",{id:"printing-shrink-steps"},"Printing Shrink Steps"),(0,i.kt)("p",null,"By default, when using shrinking, each shrinking step will not be logged, but only the final shrunk value."),(0,i.kt)("p",null,"To enable logging of each intermediate value, assign true to ",(0,i.kt)("inlineCode",{parentName:"p"},"PropertyTesting.shouldPrintShrinkSteps"),"\nor use the system property ",(0,i.kt)("inlineCode",{parentName:"p"},"kotest.proptest.output.shrink-steps=true"),"."))}g.isMDXComponent=!0}}]);