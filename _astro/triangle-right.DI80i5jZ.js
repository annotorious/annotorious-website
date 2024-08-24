import{r as a}from"./index.Cn5qh0VW.js";var l={exports:{}},c={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var w=a,x=Symbol.for("react.element"),h=Symbol.for("react.fragment"),v=Object.prototype.hasOwnProperty,g=w.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,k={key:!0,ref:!0,__self:!0,__source:!0};function u(t,e,o){var r,s={},n=null,i=null;o!==void 0&&(n=""+o),e.key!==void 0&&(n=""+e.key),e.ref!==void 0&&(i=e.ref);for(r in e)v.call(e,r)&&!k.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:x,type:t,key:n,ref:i,props:s,_owner:g.current}}c.Fragment=h;c.jsx=u;c.jsxs=u;l.exports=c;var j=l.exports;/**
 * @license lucide-react v0.435.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),f=(...t)=>t.filter((e,o,r)=>!!e&&r.indexOf(e)===o).join(" ");/**
 * @license lucide-react v0.435.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var E={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.435.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=a.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:o=2,absoluteStrokeWidth:r,className:s="",children:n,iconNode:i,...m},d)=>a.createElement("svg",{ref:d,...E,width:e,height:e,stroke:t,strokeWidth:r?Number(o)*24/Number(e):o,className:f("lucide",s),...m},[...i.map(([_,y])=>a.createElement(_,y)),...Array.isArray(n)?n:[n]]));/**
 * @license lucide-react v0.435.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=(t,e)=>{const o=a.forwardRef(({className:r,...s},n)=>a.createElement(b,{ref:n,iconNode:e,className:f(`lucide-${R(t)}`,r),...s}));return o.displayName=`${t}`,o};/**
 * @license lucide-react v0.435.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=p("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.435.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=p("TriangleRight",[["path",{d:"M22 18a2 2 0 0 1-2 2H3c-1.1 0-1.3-.6-.4-1.3L20.4 4.3c.9-.7 1.6-.4 1.6.7Z",key:"183wce"}]]);export{C as S,L as T,p as c,j};
