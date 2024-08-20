import{m as x,R as L,q as N,j as r}from"./annotorious.es.DN-DtnhR.js";import{r as t}from"./index.Cn5qh0VW.js";const p=t.createContext({anno:void 0,setAnno:void 0,annotations:[],selection:{selected:[]}}),$=t.forwardRef((e,s)=>{const[o,c]=t.useState(null),[l,n]=t.useState([]),[u,i]=t.useState({selected:[]});return t.useImperativeHandle(s,()=>o),t.useEffect(()=>{if(o){const{selection:m,store:a}=o.state;a.all().length>0&&n(a.all());const d=()=>n(()=>a.all());a.observe(d);let g;const C=m.subscribe(({selected:h,...S})=>{g&&a.unobserve(g);const R=(h||[]).map(({id:f,editable:b})=>({annotation:a.getAnnotation(f),editable:b}));i({selected:R,...S}),g=f=>{const{updated:b}=f.changes;i(v=>({...v,selected:v.selected.map(({annotation:y,editable:j})=>{const A=b.find(k=>k.oldValue.id===y.id);return A?{annotation:A.newValue,editable:j}:{annotation:y,editable:j}})}))},a.observe(g,{annotations:h.map(({id:f})=>f)})});return()=>{a.unobserve(d),C()}}},[o]),x.jsx(p.Provider,{value:{anno:o,setAnno:c,annotations:l,selection:u},children:e.children})}),T=()=>{const{anno:e}=t.useContext(p);return e},I=e=>{const{children:s,tool:o,...c}=e,l=t.Children.only(s),{anno:n,setAnno:u}=t.useContext(p),i=m=>{if(!n){const a=m.target,d=L(a,c);u(d)}};return t.useEffect(()=>{e.tool&&n&&n.setDrawingTool(e.tool)},[e.tool,n]),t.useEffect(()=>{n&&n.setFilter(e.filter)},[e.filter]),t.useEffect(()=>{n&&n.setStyle(e.style)},[e.style]),t.useEffect(()=>{n&&n.setUserSelectAction(e.userSelectAction)},[e.userSelectAction]),x.jsx(x.Fragment,{children:t.cloneElement(l,{onLoad:i})})},q=N;/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),E=(...e)=>e.filter((s,o,c)=>!!s&&c.indexOf(s)===o).join(" ");/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var P={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B=t.forwardRef(({color:e="currentColor",size:s=24,strokeWidth:o=2,absoluteStrokeWidth:c,className:l="",children:n,iconNode:u,...i},m)=>t.createElement("svg",{ref:m,...P,width:s,height:s,stroke:e,strokeWidth:c?Number(o)*24/Number(s):o,className:E("lucide",l),...i},[...u.map(([a,d])=>t.createElement(a,d)),...Array.isArray(n)?n:[n]]));/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=(e,s)=>{const o=t.forwardRef(({className:c,...l},n)=>t.createElement(B,{ref:n,iconNode:s,className:E(`lucide-${H(e)}`,c),...l}));return o.displayName=`${e}`,o};/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D=w("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F=w("TriangleRight",[["path",{d:"M22 18a2 2 0 0 1-2 2H3c-1.1 0-1.3-.6-.4-1.3L20.4 4.3c.9-.7 1.6-.4 1.6.7Z",key:"183wce"}]]),K={id:"7fb76422-3a8c-4c87-bbad-7c8bb68399a0",bodies:[],target:{annotation:"7fb76422-3a8c-4c87-bbad-7c8bb68399a0",selector:{type:q.RECTANGLE,geometry:{bounds:{minX:272,minY:169,maxX:393,maxY:259},x:272,y:169,w:121,h:90}}}},M=()=>{const e=T(),[s,o]=t.useState("rectangle");return t.useEffect(()=>{if(e)return e.addAnnotation(K),()=>{e.clearAnnotations()}},[e]),r.jsxs("div",{className:"image-example",children:[r.jsx(I,{tool:s,children:r.jsx("img",{src:"/640px-Hallstatt.jpg"})}),r.jsxs("div",{className:"actions",children:[r.jsxs("button",{className:s==="rectangle"?"active":void 0,onClick:()=>o("rectangle"),children:[r.jsx(D,{size:15})," Rectangle"]}),r.jsxs("button",{className:s==="polygon"?"polygon active":"polygon",onClick:()=>o("polygon"),children:[r.jsx(F,{size:15})," Polygon"]})]})]})},Y=()=>r.jsx($,{children:r.jsx(M,{})});export{Y as ImageExample};
