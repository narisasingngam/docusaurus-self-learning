(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{107:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return m})),n.d(t,"metadata",(function(){return f})),n.d(t,"Highlight",(function(){return v})),n.d(t,"toc",(function(){return O})),n.d(t,"default",(function(){return y}));var r=n(3),a=n(7),i=n(0),o=n.n(i),c=n(111),l=n(125),s=n(112),u=n(83),b=n.n(u);const d=37,h=39;var p=function(e){const{lazy:t,block:n,defaultValue:r,values:a,groupId:c,className:u}=e,{tabGroupChoices:p,setTabGroupChoices:g}=Object(l.a)(),[m,f]=Object(i.useState)(r),v=i.Children.toArray(e.children),O=[];if(null!=c){const e=p[c];null!=e&&e!==m&&a.some((t=>t.value===e))&&f(e)}const j=e=>{const t=e.target,n=O.indexOf(t),r=v[n].props.value;f(r),null!=c&&(g(c,r),setTimeout((()=>{(function(e){const{top:t,left:n,bottom:r,right:a}=e.getBoundingClientRect(),{innerHeight:i,innerWidth:o}=window;return t>=0&&a<=o&&r<=i&&n>=0})(t)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(b.a.tabItemActive),setTimeout((()=>t.classList.remove(b.a.tabItemActive)),2e3))}),150))},y=e=>{var t;let n;switch(e.keyCode){case h:{const t=O.indexOf(e.target)+1;n=O[t]||O[0];break}case d:{const t=O.indexOf(e.target)-1;n=O[t]||O[O.length-1];break}}null===(t=n)||void 0===t||t.focus()};return o.a.createElement("div",{className:"tabs-container"},o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(s.a)("tabs",{"tabs--block":n},u)},a.map((({value:e,label:t})=>o.a.createElement("li",{role:"tab",tabIndex:m===e?0:-1,"aria-selected":m===e,className:Object(s.a)("tabs__item",b.a.tabItem,{"tabs__item--active":m===e}),key:e,ref:e=>O.push(e),onKeyDown:y,onFocus:j,onClick:j},t)))),t?Object(i.cloneElement)(v.filter((e=>e.props.value===m))[0],{className:"margin-vert--md"}):o.a.createElement("div",{className:"margin-vert--md"},v.map(((e,t)=>Object(i.cloneElement)(e,{key:t,hidden:e.props.value!==m})))))};var g=function({children:e,hidden:t,className:n}){return o.a.createElement("div",{role:"tabpanel",hidden:t,className:n},e)},m={id:"React",sidebar_label:"React :)",custom_edit_url:"https://github.com/narisasingngam/docusaurus2"},f={unversionedId:"React",id:"React",isDocsHomePage:!1,title:"React",description:"React components",source:"@site/docs/react-component.mdx",slug:"/React",permalink:"/docusaurus-self-learning/docs/React",editUrl:"https://github.com/narisasingngam/docusaurus2",version:"current",sidebar_label:"React :)",sidebar:"docs",previous:{title:"Markdown Features",permalink:"/docusaurus-self-learning/docs/markdown-features"}},v=function(e){var t=e.children,n=e.color;return Object(c.b)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},O=[{value:"React components",id:"react-components",children:[{value:"TAB",id:"tab",children:[]},{value:"CODE BOX",id:"code-box",children:[]},{value:"Line highlighting",id:"line-highlighting",children:[]},{value:"Interactive code editor",id:"interactive-code-editor",children:[]}]}],j={Highlight:v,toc:O};function y(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},j,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"react-components"},"React components"),Object(c.b)("p",null,"Thanks to ",Object(c.b)("a",{parentName:"p",href:"https://mdxjs.com/"},"MDX"),", you can make your doc more interactive and use React components inside Markdown:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},"export const Highlight = ({children, color}) => (\n  <span\n    style={{\n      backgroundColor: color,\n      borderRadius: '2px',\n      color: 'red',\n      padding: '0.2rem',\n    }}>\n    {children}\n  </span>\n);\n\n<Highlight color=\"#25c2a0\">Docusaurus green</Highlight> and <Highlight color=\"#1877F2\">Facebook blue</Highlight> are my favorite colors.\n")),Object(c.b)(v,{color:"#25c2a0",mdxType:"Highlight"},"Docusaurus green")," and ",Object(c.b)(v,{color:"#1877F2",mdxType:"Highlight"},"Facebook blue")," are my favorite colors.",Object(c.b)("hr",null),Object(c.b)("h3",{id:"tab"},"TAB"),Object(c.b)(p,{defaultValue:"apple",values:[{label:"Apple",value:"apple"},{label:"Orange",value:"orange"},{label:"Banana",value:"banana"}],mdxType:"Tabs"},Object(c.b)(g,{value:"apple",mdxType:"TabItem"},"This is an apple \ud83c\udf4e"),Object(c.b)(g,{value:"orange",mdxType:"TabItem"},"This is an orange \ud83c\udf4a"),Object(c.b)(g,{value:"banana",mdxType:"TabItem"},"This is a banana \ud83c\udf4c")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"code-box"},"CODE BOX"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx",metastring:'title="/src/components/HelloCodeTitle.js"',title:'"/src/components/HelloCodeTitle.js"'},"function HelloCodeTitle(props) {\n  return <h1>Hello, {props.name}</h1>;\n}\n")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"line-highlighting"},"Line highlighting"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js",metastring:"{2}","{2}":!0},"function highlightMe() {\n  console.log('This line can be highlighted!');\n}\n")),Object(c.b)("h4",{id:"highlight-multiple-lines"},"highlight multiple lines"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},"function HighlightSomeText(highlight) {\n  if (highlight) {\n    // highlight-next-line\n    return 'This text is highlighted!';\n  }\n\n  return 'Nothing highlighted';\n}\n\nfunction HighlightMoreText(highlight) {\n  // highlight-start\n  if (highlight) {\n    return 'This range is highlighted!';\n  }\n  // highlight-end\n\n  return 'Nothing highlighted';\n}\n")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"interactive-code-editor"},"Interactive code editor"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"(Powered by React Live ",Object(c.b)("a",{parentName:"li",href:"https://github.com/FormidableLabs/react-live"},"React Live"),")")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Clock(props) {\n  const [date, setDate] = useState(new Date());\n  useEffect(() => {\n    var timerID = setInterval(() => tick(), 1000);\n\n    return function cleanup() {\n      clearInterval(timerID);\n    };\n  });\n\n  function tick() {\n    setDate(new Date());\n  }\n\n  return (\n    <div>\n      <h2>It is {date.toLocaleTimeString()}.</h2>\n    </div>\n  );\n}\n")))}y.isMDXComponent=!0},111:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return p}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=u(n),h=r,p=b["".concat(o,".").concat(h)]||b[h]||d[h]||i;return n?a.a.createElement(p,c(c({ref:t},s),{},{components:n})):a.a.createElement(p,c({ref:t},s))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},112:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},125:function(e,t,n){"use strict";var r=n(0),a=n(126);t.a=function(){const e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},126:function(e,t,n){"use strict";var r=n(0);const a=Object(r.createContext)(void 0);t.a=a}}]);