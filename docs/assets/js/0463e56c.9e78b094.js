"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[51],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(h,l(l({ref:t},c),{},{components:n})):r.createElement(h,l({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=u;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},55386:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return a},metadata:function(){return p},toc:function(){return m}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),l=["components"],a={id:"compiler",title:"Compiler Matchers",slug:"compiler-matchers.html",sidebar_label:"Compiler"},s=void 0,p={unversionedId:"assertions/compiler",id:"assertions/compiler",title:"Compiler Matchers",description:"The `kotest-assertions-compiler` extension provides matchers to assert that given kotlin code snippet compiles or not.",source:"@site/docs/assertions/compiler.md",sourceDirName:"assertions",slug:"/assertions/compiler-matchers.html",permalink:"/docs/next/assertions/compiler-matchers.html",draft:!1,editUrl:"https://github.com/kotest/kotest/blob/master/documentation/docs/assertions/compiler.md",tags:[],version:"current",frontMatter:{id:"compiler",title:"Compiler Matchers",slug:"compiler-matchers.html",sidebar_label:"Compiler"},sidebar:"assertions",previous:{title:"Klock",permalink:"/docs/next/assertions/klock-matchers.html"},next:{title:"Jsoup",permalink:"/docs/next/assertions/jsoup-matchers.html"}},c={},m=[],u={toc:m};function d(e){var t=e.components,n=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"kotest-assertions-compiler")," extension provides matchers to assert that given kotlin code snippet compiles or not.\nThis extension is a wrapper over ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/tschuchortdev/kotlin-compile-testing"},"kotlin-compile-testing")," and provides following matchers"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"String.shouldCompile()"),(0,i.kt)("li",{parentName:"ul"},"String.shouldNotCompile()"),(0,i.kt)("li",{parentName:"ul"},"File.shouldCompile()"),(0,i.kt)("li",{parentName:"ul"},"File.shouldNotCompile()")),(0,i.kt)("p",null,"To add the compilation matcher, add the following dependency to your project"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-groovy"},'testImplementation("io.kotest.extensions:kotest-assertions-compiler:${version}")\n')),(0,i.kt)("p",null,"Usage:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'    class CompilationTest: StringSpec() {\n        init {\n            "shouldCompile test" {\n                val codeSnippet = """ val aString: String = "A valid assignment" """.trimMargin()\n\n                codeSnippet.shouldCompile()\n                File("SourceFile.kt").shouldCompile()\n            }\n\n            "shouldNotCompile test" {\n                val codeSnippet = """ val aInteger: Int = "A invalid assignment" """.trimMargin()\n\n                codeSnippet.shouldNotCompile()\n                File("SourceFile.kt").shouldNotCompile()\n            }\n        }\n    }\n')),(0,i.kt)("p",null,"During checking of code snippet compilation the classpath of calling process is inherited, which means any dependencies which are available in calling process will also be available while compiling the code snippet."),(0,i.kt)("p",null,"Matchers that verify if a given piece of Kotlin code compiles or not"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Matcher"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string.shouldCompile()")),(0,i.kt)("td",{parentName:"tr",align:null},"Asserts that the string is a valid Kotlin code.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"file.shouldCompile()")),(0,i.kt)("td",{parentName:"tr",align:null},"Asserts that the file contains valid Kotlin code.")))))}d.isMDXComponent=!0}}]);