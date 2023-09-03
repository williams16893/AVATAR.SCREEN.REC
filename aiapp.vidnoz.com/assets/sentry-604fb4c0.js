var Ud=Object.defineProperty;var Gd=(t,e,n)=>e in t?Ud(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var ot=(t,e,n)=>(Gd(t,typeof e!="symbol"?e+"":e,n),n);import{c as Zd,f as N}from"./fabric-d1db407f.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="de2fc0de-9383-4139-bc16-9ef4dc231e0b",t._sentryDebugIdIdentifier="sentry-dbid-de2fc0de-9383-4139-bc16-9ef4dc231e0b")}catch{}})();(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function n(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=n(s);fetch(s.href,a)}})();var se={},qd={get exports(){return se},set exports(t){se=t}};/*!
 * jQuery JavaScript Library v3.7.0
 * https://jquery.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2023-05-11T18:29Z
 */(function(t){(function(e,n){t.exports=e.document?n(e,!0):function(i){if(!i.document)throw new Error("jQuery requires a window with a document");return n(i)}})(typeof window<"u"?window:Zd,function(e,n){var i=[],s=Object.getPrototypeOf,a=i.slice,d=i.flat?function(r){return i.flat.call(r)}:function(r){return i.concat.apply([],r)},m=i.push,g=i.indexOf,v={},C=v.toString,S=v.hasOwnProperty,I=S.toString,O=I.call(Object),A={},$=function(o){return typeof o=="function"&&typeof o.nodeType!="number"&&typeof o.item!="function"},pe=function(o){return o!=null&&o===o.window},U=e.document,Ze={type:!0,src:!0,nonce:!0,noModule:!0};function ze(r,o,c){c=c||U;var l,f,h=c.createElement("script");if(h.text=r,o)for(l in Ze)f=o[l]||o.getAttribute&&o.getAttribute(l),f&&h.setAttribute(l,f);c.head.appendChild(h).parentNode.removeChild(h)}function Ne(r){return r==null?r+"":typeof r=="object"||typeof r=="function"?v[C.call(r)]||"object":typeof r}var Be="3.7.0",Ue=/HTML$/i,u=function(r,o){return new u.fn.init(r,o)};u.fn=u.prototype={jquery:Be,constructor:u,length:0,toArray:function(){return a.call(this)},get:function(r){return r==null?a.call(this):r<0?this[r+this.length]:this[r]},pushStack:function(r){var o=u.merge(this.constructor(),r);return o.prevObject=this,o},each:function(r){return u.each(this,r)},map:function(r){return this.pushStack(u.map(this,function(o,c){return r.call(o,c,o)}))},slice:function(){return this.pushStack(a.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(u.grep(this,function(r,o){return(o+1)%2}))},odd:function(){return this.pushStack(u.grep(this,function(r,o){return o%2}))},eq:function(r){var o=this.length,c=+r+(r<0?o:0);return this.pushStack(c>=0&&c<o?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:m,sort:i.sort,splice:i.splice},u.extend=u.fn.extend=function(){var r,o,c,l,f,h,p=arguments[0]||{},b=1,y=arguments.length,w=!1;for(typeof p=="boolean"&&(w=p,p=arguments[b]||{},b++),typeof p!="object"&&!$(p)&&(p={}),b===y&&(p=this,b--);b<y;b++)if((r=arguments[b])!=null)for(o in r)l=r[o],!(o==="__proto__"||p===l)&&(w&&l&&(u.isPlainObject(l)||(f=Array.isArray(l)))?(c=p[o],f&&!Array.isArray(c)?h=[]:!f&&!u.isPlainObject(c)?h={}:h=c,f=!1,p[o]=u.extend(w,h,l)):l!==void 0&&(p[o]=l));return p},u.extend({expando:"jQuery"+(Be+Math.random()).replace(/\D/g,""),isReady:!0,error:function(r){throw new Error(r)},noop:function(){},isPlainObject:function(r){var o,c;return!r||C.call(r)!=="[object Object]"?!1:(o=s(r),o?(c=S.call(o,"constructor")&&o.constructor,typeof c=="function"&&I.call(c)===O):!0)},isEmptyObject:function(r){var o;for(o in r)return!1;return!0},globalEval:function(r,o,c){ze(r,{nonce:o&&o.nonce},c)},each:function(r,o){var c,l=0;if(ye(r))for(c=r.length;l<c&&o.call(r[l],l,r[l])!==!1;l++);else for(l in r)if(o.call(r[l],l,r[l])===!1)break;return r},text:function(r){var o,c="",l=0,f=r.nodeType;if(f){if(f===1||f===9||f===11)return r.textContent;if(f===3||f===4)return r.nodeValue}else for(;o=r[l++];)c+=u.text(o);return c},makeArray:function(r,o){var c=o||[];return r!=null&&(ye(Object(r))?u.merge(c,typeof r=="string"?[r]:r):m.call(c,r)),c},inArray:function(r,o,c){return o==null?-1:g.call(o,r,c)},isXMLDoc:function(r){var o=r&&r.namespaceURI,c=r&&(r.ownerDocument||r).documentElement;return!Ue.test(o||c&&c.nodeName||"HTML")},merge:function(r,o){for(var c=+o.length,l=0,f=r.length;l<c;l++)r[f++]=o[l];return r.length=f,r},grep:function(r,o,c){for(var l,f=[],h=0,p=r.length,b=!c;h<p;h++)l=!o(r[h],h),l!==b&&f.push(r[h]);return f},map:function(r,o,c){var l,f,h=0,p=[];if(ye(r))for(l=r.length;h<l;h++)f=o(r[h],h,c),f!=null&&p.push(f);else for(h in r)f=o(r[h],h,c),f!=null&&p.push(f);return d(p)},guid:1,support:A}),typeof Symbol=="function"&&(u.fn[Symbol.iterator]=i[Symbol.iterator]),u.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(r,o){v["[object "+o+"]"]=o.toLowerCase()});function ye(r){var o=!!r&&"length"in r&&r.length,c=Ne(r);return $(r)||pe(r)?!1:c==="array"||o===0||typeof o=="number"&&o>0&&o-1 in r}function B(r,o){return r.nodeName&&r.nodeName.toLowerCase()===o.toLowerCase()}var me=i.pop,xe=i.sort,Ce=i.splice,q="[\\x20\\t\\r\\n\\f]",de=new RegExp("^"+q+"+|((?:^|[^\\\\])(?:\\\\.)*)"+q+"+$","g");u.contains=function(r,o){var c=o&&o.parentNode;return r===c||!!(c&&c.nodeType===1&&(r.contains?r.contains(c):r.compareDocumentPosition&&r.compareDocumentPosition(c)&16))};var Ee=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;function et(r,o){return o?r==="\0"?"�":r.slice(0,-1)+"\\"+r.charCodeAt(r.length-1).toString(16)+" ":"\\"+r}u.escapeSelector=function(r){return(r+"").replace(Ee,et)};var he=U,Qr=m;(function(){var r,o,c,l,f,h=Qr,p,b,y,w,M,P=u.expando,T=0,R=0,J=tr(),oe=tr(),ee=tr(),Oe=tr(),Re=function(_,x){return _===x&&(f=!0),0},wt="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",St="(?:\\\\[\\da-fA-F]{1,6}"+q+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",re="\\["+q+"*("+St+")(?:"+q+"*([*^$|!~]?=)"+q+`*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(`+St+"))|)"+q+"*\\]",ln=":("+St+`)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|`+re+")*)|.*)\\)|)",ce=new RegExp(q+"+","g"),Me=new RegExp("^"+q+"*,"+q+"*"),di=new RegExp("^"+q+"*([>+~]|"+q+")"+q+"*"),ms=new RegExp(q+"|>"),Ct=new RegExp(ln),fi=new RegExp("^"+St+"$"),Et={ID:new RegExp("^#("+St+")"),CLASS:new RegExp("^\\.("+St+")"),TAG:new RegExp("^("+St+"|[*])"),ATTR:new RegExp("^"+re),PSEUDO:new RegExp("^"+ln),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+q+"*(even|odd|(([+-]|)(\\d*)n|)"+q+"*(?:([+-]|)"+q+"*(\\d+)|))"+q+"*\\)|)","i"),bool:new RegExp("^(?:"+wt+")$","i"),needsContext:new RegExp("^"+q+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+q+"*((?:-\\d)?\\d*)"+q+"*\\)|)(?=[^-]|$)","i")},Vt=/^(?:input|select|textarea|button)$/i,Xt=/^h\d$/i,rt=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,gs=/[+~]/,Nt=new RegExp("\\\\[\\da-fA-F]{1,6}"+q+"?|\\\\([^\\r\\n\\f])","g"),Rt=function(_,x){var E="0x"+_.slice(1)-65536;return x||(E<0?String.fromCharCode(E+65536):String.fromCharCode(E>>10|55296,E&1023|56320))},jd=function(){Jt()},$d=rr(function(_){return _.disabled===!0&&B(_,"fieldset")},{dir:"parentNode",next:"legend"});function Fd(){try{return p.activeElement}catch{}}try{h.apply(i=a.call(he.childNodes),he.childNodes),i[he.childNodes.length].nodeType}catch{h={apply:function(x,E){Qr.apply(x,a.call(E))},call:function(x){Qr.apply(x,a.call(arguments,1))}}}function ge(_,x,E,k){var D,Y,F,z,H,ne,X,Q=x&&x.ownerDocument,ie=x?x.nodeType:9;if(E=E||[],typeof _!="string"||!_||ie!==1&&ie!==9&&ie!==11)return E;if(!k&&(Jt(x),x=x||p,y)){if(ie!==11&&(H=rt.exec(_)))if(D=H[1]){if(ie===9)if(F=x.getElementById(D)){if(F.id===D)return h.call(E,F),E}else return E;else if(Q&&(F=Q.getElementById(D))&&ge.contains(x,F)&&F.id===D)return h.call(E,F),E}else{if(H[2])return h.apply(E,x.getElementsByTagName(_)),E;if((D=H[3])&&x.getElementsByClassName)return h.apply(E,x.getElementsByClassName(D)),E}if(!Oe[_+" "]&&(!w||!w.test(_))){if(X=_,Q=x,ie===1&&(ms.test(_)||di.test(_))){for(Q=gs.test(_)&&_s(x.parentNode)||x,(Q!=x||!A.scope)&&((z=x.getAttribute("id"))?z=u.escapeSelector(z):x.setAttribute("id",z=P)),ne=nr(_),Y=ne.length;Y--;)ne[Y]=(z?"#"+z:":scope")+" "+ir(ne[Y]);X=ne.join(",")}try{return h.apply(E,Q.querySelectorAll(X)),E}catch{Oe(_,!0)}finally{z===P&&x.removeAttribute("id")}}}return Ha(_.replace(de,"$1"),x,E,k)}function tr(){var _=[];function x(E,k){return _.push(E+" ")>o.cacheLength&&delete x[_.shift()],x[E+" "]=k}return x}function ft(_){return _[P]=!0,_}function Dn(_){var x=p.createElement("fieldset");try{return!!_(x)}catch{return!1}finally{x.parentNode&&x.parentNode.removeChild(x),x=null}}function Hd(_){return function(x){return B(x,"input")&&x.type===_}}function Wd(_){return function(x){return(B(x,"input")||B(x,"button"))&&x.type===_}}function $a(_){return function(x){return"form"in x?x.parentNode&&x.disabled===!1?"label"in x?"label"in x.parentNode?x.parentNode.disabled===_:x.disabled===_:x.isDisabled===_||x.isDisabled!==!_&&$d(x)===_:x.disabled===_:"label"in x?x.disabled===_:!1}}function un(_){return ft(function(x){return x=+x,ft(function(E,k){for(var D,Y=_([],E.length,x),F=Y.length;F--;)E[D=Y[F]]&&(E[D]=!(k[D]=E[D]))})})}function _s(_){return _&&typeof _.getElementsByTagName<"u"&&_}function Jt(_){var x,E=_?_.ownerDocument||_:he;return E==p||E.nodeType!==9||!E.documentElement||(p=E,b=p.documentElement,y=!u.isXMLDoc(p),M=b.matches||b.webkitMatchesSelector||b.msMatchesSelector,he!=p&&(x=p.defaultView)&&x.top!==x&&x.addEventListener("unload",jd),A.getById=Dn(function(k){return b.appendChild(k).id=u.expando,!p.getElementsByName||!p.getElementsByName(u.expando).length}),A.disconnectedMatch=Dn(function(k){return M.call(k,"*")}),A.scope=Dn(function(){return p.querySelectorAll(":scope")}),A.cssHas=Dn(function(){try{return p.querySelector(":has(*,:jqfake)"),!1}catch{return!0}}),A.getById?(o.filter.ID=function(k){var D=k.replace(Nt,Rt);return function(Y){return Y.getAttribute("id")===D}},o.find.ID=function(k,D){if(typeof D.getElementById<"u"&&y){var Y=D.getElementById(k);return Y?[Y]:[]}}):(o.filter.ID=function(k){var D=k.replace(Nt,Rt);return function(Y){var F=typeof Y.getAttributeNode<"u"&&Y.getAttributeNode("id");return F&&F.value===D}},o.find.ID=function(k,D){if(typeof D.getElementById<"u"&&y){var Y,F,z,H=D.getElementById(k);if(H){if(Y=H.getAttributeNode("id"),Y&&Y.value===k)return[H];for(z=D.getElementsByName(k),F=0;H=z[F++];)if(Y=H.getAttributeNode("id"),Y&&Y.value===k)return[H]}return[]}}),o.find.TAG=function(k,D){return typeof D.getElementsByTagName<"u"?D.getElementsByTagName(k):D.querySelectorAll(k)},o.find.CLASS=function(k,D){if(typeof D.getElementsByClassName<"u"&&y)return D.getElementsByClassName(k)},w=[],Dn(function(k){var D;b.appendChild(k).innerHTML="<a id='"+P+"' href='' disabled='disabled'></a><select id='"+P+"-\r\\' disabled='disabled'><option selected=''></option></select>",k.querySelectorAll("[selected]").length||w.push("\\["+q+"*(?:value|"+wt+")"),k.querySelectorAll("[id~="+P+"-]").length||w.push("~="),k.querySelectorAll("a#"+P+"+*").length||w.push(".#.+[+~]"),k.querySelectorAll(":checked").length||w.push(":checked"),D=p.createElement("input"),D.setAttribute("type","hidden"),k.appendChild(D).setAttribute("name","D"),b.appendChild(k).disabled=!0,k.querySelectorAll(":disabled").length!==2&&w.push(":enabled",":disabled"),D=p.createElement("input"),D.setAttribute("name",""),k.appendChild(D),k.querySelectorAll("[name='']").length||w.push("\\["+q+"*name"+q+"*="+q+`*(?:''|"")`)}),A.cssHas||w.push(":has"),w=w.length&&new RegExp(w.join("|")),Re=function(k,D){if(k===D)return f=!0,0;var Y=!k.compareDocumentPosition-!D.compareDocumentPosition;return Y||(Y=(k.ownerDocument||k)==(D.ownerDocument||D)?k.compareDocumentPosition(D):1,Y&1||!A.sortDetached&&D.compareDocumentPosition(k)===Y?k===p||k.ownerDocument==he&&ge.contains(he,k)?-1:D===p||D.ownerDocument==he&&ge.contains(he,D)?1:l?g.call(l,k)-g.call(l,D):0:Y&4?-1:1)}),p}ge.matches=function(_,x){return ge(_,null,null,x)},ge.matchesSelector=function(_,x){if(Jt(_),y&&!Oe[x+" "]&&(!w||!w.test(x)))try{var E=M.call(_,x);if(E||A.disconnectedMatch||_.document&&_.document.nodeType!==11)return E}catch{Oe(x,!0)}return ge(x,p,null,[_]).length>0},ge.contains=function(_,x){return(_.ownerDocument||_)!=p&&Jt(_),u.contains(_,x)},ge.attr=function(_,x){(_.ownerDocument||_)!=p&&Jt(_);var E=o.attrHandle[x.toLowerCase()],k=E&&S.call(o.attrHandle,x.toLowerCase())?E(_,x,!y):void 0;return k!==void 0?k:_.getAttribute(x)},ge.error=function(_){throw new Error("Syntax error, unrecognized expression: "+_)},u.uniqueSort=function(_){var x,E=[],k=0,D=0;if(f=!A.sortStable,l=!A.sortStable&&a.call(_,0),xe.call(_,Re),f){for(;x=_[D++];)x===_[D]&&(k=E.push(D));for(;k--;)Ce.call(_,E[k],1)}return l=null,_},u.fn.uniqueSort=function(){return this.pushStack(u.uniqueSort(a.apply(this)))},o=u.expr={cacheLength:50,createPseudo:ft,match:Et,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(_){return _[1]=_[1].replace(Nt,Rt),_[3]=(_[3]||_[4]||_[5]||"").replace(Nt,Rt),_[2]==="~="&&(_[3]=" "+_[3]+" "),_.slice(0,4)},CHILD:function(_){return _[1]=_[1].toLowerCase(),_[1].slice(0,3)==="nth"?(_[3]||ge.error(_[0]),_[4]=+(_[4]?_[5]+(_[6]||1):2*(_[3]==="even"||_[3]==="odd")),_[5]=+(_[7]+_[8]||_[3]==="odd")):_[3]&&ge.error(_[0]),_},PSEUDO:function(_){var x,E=!_[6]&&_[2];return Et.CHILD.test(_[0])?null:(_[3]?_[2]=_[4]||_[5]||"":E&&Ct.test(E)&&(x=nr(E,!0))&&(x=E.indexOf(")",E.length-x)-E.length)&&(_[0]=_[0].slice(0,x),_[2]=E.slice(0,x)),_.slice(0,3))}},filter:{TAG:function(_){var x=_.replace(Nt,Rt).toLowerCase();return _==="*"?function(){return!0}:function(E){return B(E,x)}},CLASS:function(_){var x=J[_+" "];return x||(x=new RegExp("(^|"+q+")"+_+"("+q+"|$)"))&&J(_,function(E){return x.test(typeof E.className=="string"&&E.className||typeof E.getAttribute<"u"&&E.getAttribute("class")||"")})},ATTR:function(_,x,E){return function(k){var D=ge.attr(k,_);return D==null?x==="!=":x?(D+="",x==="="?D===E:x==="!="?D!==E:x==="^="?E&&D.indexOf(E)===0:x==="*="?E&&D.indexOf(E)>-1:x==="$="?E&&D.slice(-E.length)===E:x==="~="?(" "+D.replace(ce," ")+" ").indexOf(E)>-1:x==="|="?D===E||D.slice(0,E.length+1)===E+"-":!1):!0}},CHILD:function(_,x,E,k,D){var Y=_.slice(0,3)!=="nth",F=_.slice(-4)!=="last",z=x==="of-type";return k===1&&D===0?function(H){return!!H.parentNode}:function(H,ne,X){var Q,ie,V,ve,Je,je=Y!==F?"nextSibling":"previousSibling",st=H.parentNode,Tt=z&&H.nodeName.toLowerCase(),Pn=!X&&!z,Ge=!1;if(st){if(Y){for(;je;){for(V=H;V=V[je];)if(z?B(V,Tt):V.nodeType===1)return!1;Je=je=_==="only"&&!Je&&"nextSibling"}return!0}if(Je=[F?st.firstChild:st.lastChild],F&&Pn){for(ie=st[P]||(st[P]={}),Q=ie[_]||[],ve=Q[0]===T&&Q[1],Ge=ve&&Q[2],V=ve&&st.childNodes[ve];V=++ve&&V&&V[je]||(Ge=ve=0)||Je.pop();)if(V.nodeType===1&&++Ge&&V===H){ie[_]=[T,ve,Ge];break}}else if(Pn&&(ie=H[P]||(H[P]={}),Q=ie[_]||[],ve=Q[0]===T&&Q[1],Ge=ve),Ge===!1)for(;(V=++ve&&V&&V[je]||(Ge=ve=0)||Je.pop())&&!((z?B(V,Tt):V.nodeType===1)&&++Ge&&(Pn&&(ie=V[P]||(V[P]={}),ie[_]=[T,Ge]),V===H)););return Ge-=D,Ge===k||Ge%k===0&&Ge/k>=0}}},PSEUDO:function(_,x){var E,k=o.pseudos[_]||o.setFilters[_.toLowerCase()]||ge.error("unsupported pseudo: "+_);return k[P]?k(x):k.length>1?(E=[_,_,"",x],o.setFilters.hasOwnProperty(_.toLowerCase())?ft(function(D,Y){for(var F,z=k(D,x),H=z.length;H--;)F=g.call(D,z[H]),D[F]=!(Y[F]=z[H])}):function(D){return k(D,0,E)}):k}},pseudos:{not:ft(function(_){var x=[],E=[],k=vs(_.replace(de,"$1"));return k[P]?ft(function(D,Y,F,z){for(var H,ne=k(D,null,z,[]),X=D.length;X--;)(H=ne[X])&&(D[X]=!(Y[X]=H))}):function(D,Y,F){return x[0]=D,k(x,null,F,E),x[0]=null,!E.pop()}}),has:ft(function(_){return function(x){return ge(_,x).length>0}}),contains:ft(function(_){return _=_.replace(Nt,Rt),function(x){return(x.textContent||u.text(x)).indexOf(_)>-1}}),lang:ft(function(_){return fi.test(_||"")||ge.error("unsupported lang: "+_),_=_.replace(Nt,Rt).toLowerCase(),function(x){var E;do if(E=y?x.lang:x.getAttribute("xml:lang")||x.getAttribute("lang"))return E=E.toLowerCase(),E===_||E.indexOf(_+"-")===0;while((x=x.parentNode)&&x.nodeType===1);return!1}}),target:function(_){var x=e.location&&e.location.hash;return x&&x.slice(1)===_.id},root:function(_){return _===b},focus:function(_){return _===Fd()&&p.hasFocus()&&!!(_.type||_.href||~_.tabIndex)},enabled:$a(!1),disabled:$a(!0),checked:function(_){return B(_,"input")&&!!_.checked||B(_,"option")&&!!_.selected},selected:function(_){return _.parentNode&&_.parentNode.selectedIndex,_.selected===!0},empty:function(_){for(_=_.firstChild;_;_=_.nextSibling)if(_.nodeType<6)return!1;return!0},parent:function(_){return!o.pseudos.empty(_)},header:function(_){return Xt.test(_.nodeName)},input:function(_){return Vt.test(_.nodeName)},button:function(_){return B(_,"input")&&_.type==="button"||B(_,"button")},text:function(_){var x;return B(_,"input")&&_.type==="text"&&((x=_.getAttribute("type"))==null||x.toLowerCase()==="text")},first:un(function(){return[0]}),last:un(function(_,x){return[x-1]}),eq:un(function(_,x,E){return[E<0?E+x:E]}),even:un(function(_,x){for(var E=0;E<x;E+=2)_.push(E);return _}),odd:un(function(_,x){for(var E=1;E<x;E+=2)_.push(E);return _}),lt:un(function(_,x,E){var k;for(E<0?k=E+x:E>x?k=x:k=E;--k>=0;)_.push(k);return _}),gt:un(function(_,x,E){for(var k=E<0?E+x:E;++k<x;)_.push(k);return _})}},o.pseudos.nth=o.pseudos.eq;for(r in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})o.pseudos[r]=Hd(r);for(r in{submit:!0,reset:!0})o.pseudos[r]=Wd(r);function Fa(){}Fa.prototype=o.filters=o.pseudos,o.setFilters=new Fa;function nr(_,x){var E,k,D,Y,F,z,H,ne=oe[_+" "];if(ne)return x?0:ne.slice(0);for(F=_,z=[],H=o.preFilter;F;){(!E||(k=Me.exec(F)))&&(k&&(F=F.slice(k[0].length)||F),z.push(D=[])),E=!1,(k=di.exec(F))&&(E=k.shift(),D.push({value:E,type:k[0].replace(de," ")}),F=F.slice(E.length));for(Y in o.filter)(k=Et[Y].exec(F))&&(!H[Y]||(k=H[Y](k)))&&(E=k.shift(),D.push({value:E,type:Y,matches:k}),F=F.slice(E.length));if(!E)break}return x?F.length:F?ge.error(_):oe(_,z).slice(0)}function ir(_){for(var x=0,E=_.length,k="";x<E;x++)k+=_[x].value;return k}function rr(_,x,E){var k=x.dir,D=x.next,Y=D||k,F=E&&Y==="parentNode",z=R++;return x.first?function(H,ne,X){for(;H=H[k];)if(H.nodeType===1||F)return _(H,ne,X);return!1}:function(H,ne,X){var Q,ie,V=[T,z];if(X){for(;H=H[k];)if((H.nodeType===1||F)&&_(H,ne,X))return!0}else for(;H=H[k];)if(H.nodeType===1||F)if(ie=H[P]||(H[P]={}),D&&B(H,D))H=H[k]||H;else{if((Q=ie[Y])&&Q[0]===T&&Q[1]===z)return V[2]=Q[2];if(ie[Y]=V,V[2]=_(H,ne,X))return!0}return!1}}function ys(_){return _.length>1?function(x,E,k){for(var D=_.length;D--;)if(!_[D](x,E,k))return!1;return!0}:_[0]}function zd(_,x,E){for(var k=0,D=x.length;k<D;k++)ge(_,x[k],E);return E}function sr(_,x,E,k,D){for(var Y,F=[],z=0,H=_.length,ne=x!=null;z<H;z++)(Y=_[z])&&(!E||E(Y,k,D))&&(F.push(Y),ne&&x.push(z));return F}function bs(_,x,E,k,D,Y){return k&&!k[P]&&(k=bs(k)),D&&!D[P]&&(D=bs(D,Y)),ft(function(F,z,H,ne){var X,Q,ie,V,ve=[],Je=[],je=z.length,st=F||zd(x||"*",H.nodeType?[H]:H,[]),Tt=_&&(F||!x)?sr(st,ve,_,H,ne):st;if(E?(V=D||(F?_:je||k)?[]:z,E(Tt,V,H,ne)):V=Tt,k)for(X=sr(V,Je),k(X,[],H,ne),Q=X.length;Q--;)(ie=X[Q])&&(V[Je[Q]]=!(Tt[Je[Q]]=ie));if(F){if(D||_){if(D){for(X=[],Q=V.length;Q--;)(ie=V[Q])&&X.push(Tt[Q]=ie);D(null,V=[],X,ne)}for(Q=V.length;Q--;)(ie=V[Q])&&(X=D?g.call(F,ie):ve[Q])>-1&&(F[X]=!(z[X]=ie))}}else V=sr(V===z?V.splice(je,V.length):V),D?D(null,z,V,ne):h.apply(z,V)})}function xs(_){for(var x,E,k,D=_.length,Y=o.relative[_[0].type],F=Y||o.relative[" "],z=Y?1:0,H=rr(function(Q){return Q===x},F,!0),ne=rr(function(Q){return g.call(x,Q)>-1},F,!0),X=[function(Q,ie,V){var ve=!Y&&(V||ie!=c)||((x=ie).nodeType?H(Q,ie,V):ne(Q,ie,V));return x=null,ve}];z<D;z++)if(E=o.relative[_[z].type])X=[rr(ys(X),E)];else{if(E=o.filter[_[z].type].apply(null,_[z].matches),E[P]){for(k=++z;k<D&&!o.relative[_[k].type];k++);return bs(z>1&&ys(X),z>1&&ir(_.slice(0,z-1).concat({value:_[z-2].type===" "?"*":""})).replace(de,"$1"),E,z<k&&xs(_.slice(z,k)),k<D&&xs(_=_.slice(k)),k<D&&ir(_))}X.push(E)}return ys(X)}function Bd(_,x){var E=x.length>0,k=_.length>0,D=function(Y,F,z,H,ne){var X,Q,ie,V=0,ve="0",Je=Y&&[],je=[],st=c,Tt=Y||k&&o.find.TAG("*",ne),Pn=T+=st==null?1:Math.random()||.1,Ge=Tt.length;for(ne&&(c=F==p||F||ne);ve!==Ge&&(X=Tt[ve])!=null;ve++){if(k&&X){for(Q=0,!F&&X.ownerDocument!=p&&(Jt(X),z=!y);ie=_[Q++];)if(ie(X,F||p,z)){h.call(H,X);break}ne&&(T=Pn)}E&&((X=!ie&&X)&&V--,Y&&Je.push(X))}if(V+=ve,E&&ve!==V){for(Q=0;ie=x[Q++];)ie(Je,je,F,z);if(Y){if(V>0)for(;ve--;)Je[ve]||je[ve]||(je[ve]=me.call(H));je=sr(je)}h.apply(H,je),ne&&!Y&&je.length>0&&V+x.length>1&&u.uniqueSort(H)}return ne&&(T=Pn,c=st),Je};return E?ft(D):D}function vs(_,x){var E,k=[],D=[],Y=ee[_+" "];if(!Y){for(x||(x=nr(_)),E=x.length;E--;)Y=xs(x[E]),Y[P]?k.push(Y):D.push(Y);Y=ee(_,Bd(D,k)),Y.selector=_}return Y}function Ha(_,x,E,k){var D,Y,F,z,H,ne=typeof _=="function"&&_,X=!k&&nr(_=ne.selector||_);if(E=E||[],X.length===1){if(Y=X[0]=X[0].slice(0),Y.length>2&&(F=Y[0]).type==="ID"&&x.nodeType===9&&y&&o.relative[Y[1].type]){if(x=(o.find.ID(F.matches[0].replace(Nt,Rt),x)||[])[0],x)ne&&(x=x.parentNode);else return E;_=_.slice(Y.shift().value.length)}for(D=Et.needsContext.test(_)?0:Y.length;D--&&(F=Y[D],!o.relative[z=F.type]);)if((H=o.find[z])&&(k=H(F.matches[0].replace(Nt,Rt),gs.test(Y[0].type)&&_s(x.parentNode)||x))){if(Y.splice(D,1),_=k.length&&ir(Y),!_)return h.apply(E,k),E;break}}return(ne||vs(_,X))(k,x,!y,E,!x||gs.test(_)&&_s(x.parentNode)||x),E}A.sortStable=P.split("").sort(Re).join("")===P,Jt(),A.sortDetached=Dn(function(_){return _.compareDocumentPosition(p.createElement("fieldset"))&1}),u.find=ge,u.expr[":"]=u.expr.pseudos,u.unique=u.uniqueSort,ge.compile=vs,ge.select=Ha,ge.setDocument=Jt,ge.escape=u.escapeSelector,ge.getText=u.text,ge.isXML=u.isXMLDoc,ge.selectors=u.expr,ge.support=u.support,ge.uniqueSort=u.uniqueSort})();var wn=function(r,o,c){for(var l=[],f=c!==void 0;(r=r[o])&&r.nodeType!==9;)if(r.nodeType===1){if(f&&u(r).is(c))break;l.push(r)}return l},na=function(r,o){for(var c=[];r;r=r.nextSibling)r.nodeType===1&&r!==o&&c.push(r);return c},ia=u.expr.match.needsContext,ra=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function Kr(r,o,c){return $(o)?u.grep(r,function(l,f){return!!o.call(l,f,l)!==c}):o.nodeType?u.grep(r,function(l){return l===o!==c}):typeof o!="string"?u.grep(r,function(l){return g.call(o,l)>-1!==c}):u.filter(o,r,c)}u.filter=function(r,o,c){var l=o[0];return c&&(r=":not("+r+")"),o.length===1&&l.nodeType===1?u.find.matchesSelector(l,r)?[l]:[]:u.find.matches(r,u.grep(o,function(f){return f.nodeType===1}))},u.fn.extend({find:function(r){var o,c,l=this.length,f=this;if(typeof r!="string")return this.pushStack(u(r).filter(function(){for(o=0;o<l;o++)if(u.contains(f[o],this))return!0}));for(c=this.pushStack([]),o=0;o<l;o++)u.find(r,f[o],c);return l>1?u.uniqueSort(c):c},filter:function(r){return this.pushStack(Kr(this,r||[],!1))},not:function(r){return this.pushStack(Kr(this,r||[],!0))},is:function(r){return!!Kr(this,typeof r=="string"&&ia.test(r)?u(r):r||[],!1).length}});var sa,Bu=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,Uu=u.fn.init=function(r,o,c){var l,f;if(!r)return this;if(c=c||sa,typeof r=="string")if(r[0]==="<"&&r[r.length-1]===">"&&r.length>=3?l=[null,r,null]:l=Bu.exec(r),l&&(l[1]||!o))if(l[1]){if(o=o instanceof u?o[0]:o,u.merge(this,u.parseHTML(l[1],o&&o.nodeType?o.ownerDocument||o:U,!0)),ra.test(l[1])&&u.isPlainObject(o))for(l in o)$(this[l])?this[l](o[l]):this.attr(l,o[l]);return this}else return f=U.getElementById(l[2]),f&&(this[0]=f,this.length=1),this;else return!o||o.jquery?(o||c).find(r):this.constructor(o).find(r);else{if(r.nodeType)return this[0]=r,this.length=1,this;if($(r))return c.ready!==void 0?c.ready(r):r(u)}return u.makeArray(r,this)};Uu.prototype=u.fn,sa=u(U);var Gu=/^(?:parents|prev(?:Until|All))/,Zu={children:!0,contents:!0,next:!0,prev:!0};u.fn.extend({has:function(r){var o=u(r,this),c=o.length;return this.filter(function(){for(var l=0;l<c;l++)if(u.contains(this,o[l]))return!0})},closest:function(r,o){var c,l=0,f=this.length,h=[],p=typeof r!="string"&&u(r);if(!ia.test(r)){for(;l<f;l++)for(c=this[l];c&&c!==o;c=c.parentNode)if(c.nodeType<11&&(p?p.index(c)>-1:c.nodeType===1&&u.find.matchesSelector(c,r))){h.push(c);break}}return this.pushStack(h.length>1?u.uniqueSort(h):h)},index:function(r){return r?typeof r=="string"?g.call(u(r),this[0]):g.call(this,r.jquery?r[0]:r):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(r,o){return this.pushStack(u.uniqueSort(u.merge(this.get(),u(r,o))))},addBack:function(r){return this.add(r==null?this.prevObject:this.prevObject.filter(r))}});function oa(r,o){for(;(r=r[o])&&r.nodeType!==1;);return r}u.each({parent:function(r){var o=r.parentNode;return o&&o.nodeType!==11?o:null},parents:function(r){return wn(r,"parentNode")},parentsUntil:function(r,o,c){return wn(r,"parentNode",c)},next:function(r){return oa(r,"nextSibling")},prev:function(r){return oa(r,"previousSibling")},nextAll:function(r){return wn(r,"nextSibling")},prevAll:function(r){return wn(r,"previousSibling")},nextUntil:function(r,o,c){return wn(r,"nextSibling",c)},prevUntil:function(r,o,c){return wn(r,"previousSibling",c)},siblings:function(r){return na((r.parentNode||{}).firstChild,r)},children:function(r){return na(r.firstChild)},contents:function(r){return r.contentDocument!=null&&s(r.contentDocument)?r.contentDocument:(B(r,"template")&&(r=r.content||r),u.merge([],r.childNodes))}},function(r,o){u.fn[r]=function(c,l){var f=u.map(this,o,c);return r.slice(-5)!=="Until"&&(l=c),l&&typeof l=="string"&&(f=u.filter(l,f)),this.length>1&&(Zu[r]||u.uniqueSort(f),Gu.test(r)&&f.reverse()),this.pushStack(f)}});var xt=/[^\x20\t\r\n\f]+/g;function qu(r){var o={};return u.each(r.match(xt)||[],function(c,l){o[l]=!0}),o}u.Callbacks=function(r){r=typeof r=="string"?qu(r):u.extend({},r);var o,c,l,f,h=[],p=[],b=-1,y=function(){for(f=f||r.once,l=o=!0;p.length;b=-1)for(c=p.shift();++b<h.length;)h[b].apply(c[0],c[1])===!1&&r.stopOnFalse&&(b=h.length,c=!1);r.memory||(c=!1),o=!1,f&&(c?h=[]:h="")},w={add:function(){return h&&(c&&!o&&(b=h.length-1,p.push(c)),function M(P){u.each(P,function(T,R){$(R)?(!r.unique||!w.has(R))&&h.push(R):R&&R.length&&Ne(R)!=="string"&&M(R)})}(arguments),c&&!o&&y()),this},remove:function(){return u.each(arguments,function(M,P){for(var T;(T=u.inArray(P,h,T))>-1;)h.splice(T,1),T<=b&&b--}),this},has:function(M){return M?u.inArray(M,h)>-1:h.length>0},empty:function(){return h&&(h=[]),this},disable:function(){return f=p=[],h=c="",this},disabled:function(){return!h},lock:function(){return f=p=[],!c&&!o&&(h=c=""),this},locked:function(){return!!f},fireWith:function(M,P){return f||(P=P||[],P=[M,P.slice?P.slice():P],p.push(P),o||y()),this},fire:function(){return w.fireWith(this,arguments),this},fired:function(){return!!l}};return w};function Sn(r){return r}function qi(r){throw r}function aa(r,o,c,l){var f;try{r&&$(f=r.promise)?f.call(r).done(o).fail(c):r&&$(f=r.then)?f.call(r,o,c):o.apply(void 0,[r].slice(l))}catch(h){c.apply(void 0,[h])}}u.extend({Deferred:function(r){var o=[["notify","progress",u.Callbacks("memory"),u.Callbacks("memory"),2],["resolve","done",u.Callbacks("once memory"),u.Callbacks("once memory"),0,"resolved"],["reject","fail",u.Callbacks("once memory"),u.Callbacks("once memory"),1,"rejected"]],c="pending",l={state:function(){return c},always:function(){return f.done(arguments).fail(arguments),this},catch:function(h){return l.then(null,h)},pipe:function(){var h=arguments;return u.Deferred(function(p){u.each(o,function(b,y){var w=$(h[y[4]])&&h[y[4]];f[y[1]](function(){var M=w&&w.apply(this,arguments);M&&$(M.promise)?M.promise().progress(p.notify).done(p.resolve).fail(p.reject):p[y[0]+"With"](this,w?[M]:arguments)})}),h=null}).promise()},then:function(h,p,b){var y=0;function w(M,P,T,R){return function(){var J=this,oe=arguments,ee=function(){var Re,wt;if(!(M<y)){if(Re=T.apply(J,oe),Re===P.promise())throw new TypeError("Thenable self-resolution");wt=Re&&(typeof Re=="object"||typeof Re=="function")&&Re.then,$(wt)?R?wt.call(Re,w(y,P,Sn,R),w(y,P,qi,R)):(y++,wt.call(Re,w(y,P,Sn,R),w(y,P,qi,R),w(y,P,Sn,P.notifyWith))):(T!==Sn&&(J=void 0,oe=[Re]),(R||P.resolveWith)(J,oe))}},Oe=R?ee:function(){try{ee()}catch(Re){u.Deferred.exceptionHook&&u.Deferred.exceptionHook(Re,Oe.error),M+1>=y&&(T!==qi&&(J=void 0,oe=[Re]),P.rejectWith(J,oe))}};M?Oe():(u.Deferred.getErrorHook?Oe.error=u.Deferred.getErrorHook():u.Deferred.getStackHook&&(Oe.error=u.Deferred.getStackHook()),e.setTimeout(Oe))}}return u.Deferred(function(M){o[0][3].add(w(0,M,$(b)?b:Sn,M.notifyWith)),o[1][3].add(w(0,M,$(h)?h:Sn)),o[2][3].add(w(0,M,$(p)?p:qi))}).promise()},promise:function(h){return h!=null?u.extend(h,l):l}},f={};return u.each(o,function(h,p){var b=p[2],y=p[5];l[p[1]]=b.add,y&&b.add(function(){c=y},o[3-h][2].disable,o[3-h][3].disable,o[0][2].lock,o[0][3].lock),b.add(p[3].fire),f[p[0]]=function(){return f[p[0]+"With"](this===f?void 0:this,arguments),this},f[p[0]+"With"]=b.fireWith}),l.promise(f),r&&r.call(f,f),f},when:function(r){var o=arguments.length,c=o,l=Array(c),f=a.call(arguments),h=u.Deferred(),p=function(b){return function(y){l[b]=this,f[b]=arguments.length>1?a.call(arguments):y,--o||h.resolveWith(l,f)}};if(o<=1&&(aa(r,h.done(p(c)).resolve,h.reject,!o),h.state()==="pending"||$(f[c]&&f[c].then)))return h.then();for(;c--;)aa(f[c],p(c),h.reject);return h.promise()}});var Vu=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;u.Deferred.exceptionHook=function(r,o){e.console&&e.console.warn&&r&&Vu.test(r.name)&&e.console.warn("jQuery.Deferred exception: "+r.message,r.stack,o)},u.readyException=function(r){e.setTimeout(function(){throw r})};var es=u.Deferred();u.fn.ready=function(r){return es.then(r).catch(function(o){u.readyException(o)}),this},u.extend({isReady:!1,readyWait:1,ready:function(r){(r===!0?--u.readyWait:u.isReady)||(u.isReady=!0,!(r!==!0&&--u.readyWait>0)&&es.resolveWith(U,[u]))}}),u.ready.then=es.then;function Vi(){U.removeEventListener("DOMContentLoaded",Vi),e.removeEventListener("load",Vi),u.ready()}U.readyState==="complete"||U.readyState!=="loading"&&!U.documentElement.doScroll?e.setTimeout(u.ready):(U.addEventListener("DOMContentLoaded",Vi),e.addEventListener("load",Vi));var Pt=function(r,o,c,l,f,h,p){var b=0,y=r.length,w=c==null;if(Ne(c)==="object"){f=!0;for(b in c)Pt(r,o,b,c[b],!0,h,p)}else if(l!==void 0&&(f=!0,$(l)||(p=!0),w&&(p?(o.call(r,l),o=null):(w=o,o=function(M,P,T){return w.call(u(M),T)})),o))for(;b<y;b++)o(r[b],c,p?l:l.call(r[b],b,o(r[b],c)));return f?r:w?o.call(r):y?o(r[0],c):h},Xu=/^-ms-/,Ju=/-([a-z])/g;function Qu(r,o){return o.toUpperCase()}function vt(r){return r.replace(Xu,"ms-").replace(Ju,Qu)}var ii=function(r){return r.nodeType===1||r.nodeType===9||!+r.nodeType};function ri(){this.expando=u.expando+ri.uid++}ri.uid=1,ri.prototype={cache:function(r){var o=r[this.expando];return o||(o={},ii(r)&&(r.nodeType?r[this.expando]=o:Object.defineProperty(r,this.expando,{value:o,configurable:!0}))),o},set:function(r,o,c){var l,f=this.cache(r);if(typeof o=="string")f[vt(o)]=c;else for(l in o)f[vt(l)]=o[l];return f},get:function(r,o){return o===void 0?this.cache(r):r[this.expando]&&r[this.expando][vt(o)]},access:function(r,o,c){return o===void 0||o&&typeof o=="string"&&c===void 0?this.get(r,o):(this.set(r,o,c),c!==void 0?c:o)},remove:function(r,o){var c,l=r[this.expando];if(l!==void 0){if(o!==void 0)for(Array.isArray(o)?o=o.map(vt):(o=vt(o),o=o in l?[o]:o.match(xt)||[]),c=o.length;c--;)delete l[o[c]];(o===void 0||u.isEmptyObject(l))&&(r.nodeType?r[this.expando]=void 0:delete r[this.expando])}},hasData:function(r){var o=r[this.expando];return o!==void 0&&!u.isEmptyObject(o)}};var G=new ri,qe=new ri,Ku=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,ed=/[A-Z]/g;function td(r){return r==="true"?!0:r==="false"?!1:r==="null"?null:r===+r+""?+r:Ku.test(r)?JSON.parse(r):r}function ca(r,o,c){var l;if(c===void 0&&r.nodeType===1)if(l="data-"+o.replace(ed,"-$&").toLowerCase(),c=r.getAttribute(l),typeof c=="string"){try{c=td(c)}catch{}qe.set(r,o,c)}else c=void 0;return c}u.extend({hasData:function(r){return qe.hasData(r)||G.hasData(r)},data:function(r,o,c){return qe.access(r,o,c)},removeData:function(r,o){qe.remove(r,o)},_data:function(r,o,c){return G.access(r,o,c)},_removeData:function(r,o){G.remove(r,o)}}),u.fn.extend({data:function(r,o){var c,l,f,h=this[0],p=h&&h.attributes;if(r===void 0){if(this.length&&(f=qe.get(h),h.nodeType===1&&!G.get(h,"hasDataAttrs"))){for(c=p.length;c--;)p[c]&&(l=p[c].name,l.indexOf("data-")===0&&(l=vt(l.slice(5)),ca(h,l,f[l])));G.set(h,"hasDataAttrs",!0)}return f}return typeof r=="object"?this.each(function(){qe.set(this,r)}):Pt(this,function(b){var y;if(h&&b===void 0)return y=qe.get(h,r),y!==void 0||(y=ca(h,r),y!==void 0)?y:void 0;this.each(function(){qe.set(this,r,b)})},null,o,arguments.length>1,null,!0)},removeData:function(r){return this.each(function(){qe.remove(this,r)})}}),u.extend({queue:function(r,o,c){var l;if(r)return o=(o||"fx")+"queue",l=G.get(r,o),c&&(!l||Array.isArray(c)?l=G.access(r,o,u.makeArray(c)):l.push(c)),l||[]},dequeue:function(r,o){o=o||"fx";var c=u.queue(r,o),l=c.length,f=c.shift(),h=u._queueHooks(r,o),p=function(){u.dequeue(r,o)};f==="inprogress"&&(f=c.shift(),l--),f&&(o==="fx"&&c.unshift("inprogress"),delete h.stop,f.call(r,p,h)),!l&&h&&h.empty.fire()},_queueHooks:function(r,o){var c=o+"queueHooks";return G.get(r,c)||G.access(r,c,{empty:u.Callbacks("once memory").add(function(){G.remove(r,[o+"queue",c])})})}}),u.fn.extend({queue:function(r,o){var c=2;return typeof r!="string"&&(o=r,r="fx",c--),arguments.length<c?u.queue(this[0],r):o===void 0?this:this.each(function(){var l=u.queue(this,r,o);u._queueHooks(this,r),r==="fx"&&l[0]!=="inprogress"&&u.dequeue(this,r)})},dequeue:function(r){return this.each(function(){u.dequeue(this,r)})},clearQueue:function(r){return this.queue(r||"fx",[])},promise:function(r,o){var c,l=1,f=u.Deferred(),h=this,p=this.length,b=function(){--l||f.resolveWith(h,[h])};for(typeof r!="string"&&(o=r,r=void 0),r=r||"fx";p--;)c=G.get(h[p],r+"queueHooks"),c&&c.empty&&(l++,c.empty.add(b));return b(),f.promise(o)}});var la=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,si=new RegExp("^(?:([+-])=|)("+la+")([a-z%]*)$","i"),At=["Top","Right","Bottom","Left"],on=U.documentElement,Cn=function(r){return u.contains(r.ownerDocument,r)},nd={composed:!0};on.getRootNode&&(Cn=function(r){return u.contains(r.ownerDocument,r)||r.getRootNode(nd)===r.ownerDocument});var Xi=function(r,o){return r=o||r,r.style.display==="none"||r.style.display===""&&Cn(r)&&u.css(r,"display")==="none"};function ua(r,o,c,l){var f,h,p=20,b=l?function(){return l.cur()}:function(){return u.css(r,o,"")},y=b(),w=c&&c[3]||(u.cssNumber[o]?"":"px"),M=r.nodeType&&(u.cssNumber[o]||w!=="px"&&+y)&&si.exec(u.css(r,o));if(M&&M[3]!==w){for(y=y/2,w=w||M[3],M=+y||1;p--;)u.style(r,o,M+w),(1-h)*(1-(h=b()/y||.5))<=0&&(p=0),M=M/h;M=M*2,u.style(r,o,M+w),c=c||[]}return c&&(M=+M||+y||0,f=c[1]?M+(c[1]+1)*c[2]:+c[2],l&&(l.unit=w,l.start=M,l.end=f)),f}var da={};function id(r){var o,c=r.ownerDocument,l=r.nodeName,f=da[l];return f||(o=c.body.appendChild(c.createElement(l)),f=u.css(o,"display"),o.parentNode.removeChild(o),f==="none"&&(f="block"),da[l]=f,f)}function En(r,o){for(var c,l,f=[],h=0,p=r.length;h<p;h++)l=r[h],l.style&&(c=l.style.display,o?(c==="none"&&(f[h]=G.get(l,"display")||null,f[h]||(l.style.display="")),l.style.display===""&&Xi(l)&&(f[h]=id(l))):c!=="none"&&(f[h]="none",G.set(l,"display",c)));for(h=0;h<p;h++)f[h]!=null&&(r[h].style.display=f[h]);return r}u.fn.extend({show:function(){return En(this,!0)},hide:function(){return En(this)},toggle:function(r){return typeof r=="boolean"?r?this.show():this.hide():this.each(function(){Xi(this)?u(this).show():u(this).hide()})}});var oi=/^(?:checkbox|radio)$/i,fa=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,ha=/^$|^module$|\/(?:java|ecma)script/i;(function(){var r=U.createDocumentFragment(),o=r.appendChild(U.createElement("div")),c=U.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),o.appendChild(c),A.checkClone=o.cloneNode(!0).cloneNode(!0).lastChild.checked,o.innerHTML="<textarea>x</textarea>",A.noCloneChecked=!!o.cloneNode(!0).lastChild.defaultValue,o.innerHTML="<option></option>",A.option=!!o.lastChild})();var it={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};it.tbody=it.tfoot=it.colgroup=it.caption=it.thead,it.th=it.td,A.option||(it.optgroup=it.option=[1,"<select multiple='multiple'>","</select>"]);function Ve(r,o){var c;return typeof r.getElementsByTagName<"u"?c=r.getElementsByTagName(o||"*"):typeof r.querySelectorAll<"u"?c=r.querySelectorAll(o||"*"):c=[],o===void 0||o&&B(r,o)?u.merge([r],c):c}function ts(r,o){for(var c=0,l=r.length;c<l;c++)G.set(r[c],"globalEval",!o||G.get(o[c],"globalEval"))}var rd=/<|&#?\w+;/;function pa(r,o,c,l,f){for(var h,p,b,y,w,M,P=o.createDocumentFragment(),T=[],R=0,J=r.length;R<J;R++)if(h=r[R],h||h===0)if(Ne(h)==="object")u.merge(T,h.nodeType?[h]:h);else if(!rd.test(h))T.push(o.createTextNode(h));else{for(p=p||P.appendChild(o.createElement("div")),b=(fa.exec(h)||["",""])[1].toLowerCase(),y=it[b]||it._default,p.innerHTML=y[1]+u.htmlPrefilter(h)+y[2],M=y[0];M--;)p=p.lastChild;u.merge(T,p.childNodes),p=P.firstChild,p.textContent=""}for(P.textContent="",R=0;h=T[R++];){if(l&&u.inArray(h,l)>-1){f&&f.push(h);continue}if(w=Cn(h),p=Ve(P.appendChild(h),"script"),w&&ts(p),c)for(M=0;h=p[M++];)ha.test(h.type||"")&&c.push(h)}return P}var ma=/^([^.]*)(?:\.(.+)|)/;function Tn(){return!0}function kn(){return!1}function ns(r,o,c,l,f,h){var p,b;if(typeof o=="object"){typeof c!="string"&&(l=l||c,c=void 0);for(b in o)ns(r,b,c,l,o[b],h);return r}if(l==null&&f==null?(f=c,l=c=void 0):f==null&&(typeof c=="string"?(f=l,l=void 0):(f=l,l=c,c=void 0)),f===!1)f=kn;else if(!f)return r;return h===1&&(p=f,f=function(y){return u().off(y),p.apply(this,arguments)},f.guid=p.guid||(p.guid=u.guid++)),r.each(function(){u.event.add(this,o,f,l,c)})}u.event={global:{},add:function(r,o,c,l,f){var h,p,b,y,w,M,P,T,R,J,oe,ee=G.get(r);if(ii(r))for(c.handler&&(h=c,c=h.handler,f=h.selector),f&&u.find.matchesSelector(on,f),c.guid||(c.guid=u.guid++),(y=ee.events)||(y=ee.events=Object.create(null)),(p=ee.handle)||(p=ee.handle=function(Oe){return typeof u<"u"&&u.event.triggered!==Oe.type?u.event.dispatch.apply(r,arguments):void 0}),o=(o||"").match(xt)||[""],w=o.length;w--;)b=ma.exec(o[w])||[],R=oe=b[1],J=(b[2]||"").split(".").sort(),R&&(P=u.event.special[R]||{},R=(f?P.delegateType:P.bindType)||R,P=u.event.special[R]||{},M=u.extend({type:R,origType:oe,data:l,handler:c,guid:c.guid,selector:f,needsContext:f&&u.expr.match.needsContext.test(f),namespace:J.join(".")},h),(T=y[R])||(T=y[R]=[],T.delegateCount=0,(!P.setup||P.setup.call(r,l,J,p)===!1)&&r.addEventListener&&r.addEventListener(R,p)),P.add&&(P.add.call(r,M),M.handler.guid||(M.handler.guid=c.guid)),f?T.splice(T.delegateCount++,0,M):T.push(M),u.event.global[R]=!0)},remove:function(r,o,c,l,f){var h,p,b,y,w,M,P,T,R,J,oe,ee=G.hasData(r)&&G.get(r);if(!(!ee||!(y=ee.events))){for(o=(o||"").match(xt)||[""],w=o.length;w--;){if(b=ma.exec(o[w])||[],R=oe=b[1],J=(b[2]||"").split(".").sort(),!R){for(R in y)u.event.remove(r,R+o[w],c,l,!0);continue}for(P=u.event.special[R]||{},R=(l?P.delegateType:P.bindType)||R,T=y[R]||[],b=b[2]&&new RegExp("(^|\\.)"+J.join("\\.(?:.*\\.|)")+"(\\.|$)"),p=h=T.length;h--;)M=T[h],(f||oe===M.origType)&&(!c||c.guid===M.guid)&&(!b||b.test(M.namespace))&&(!l||l===M.selector||l==="**"&&M.selector)&&(T.splice(h,1),M.selector&&T.delegateCount--,P.remove&&P.remove.call(r,M));p&&!T.length&&((!P.teardown||P.teardown.call(r,J,ee.handle)===!1)&&u.removeEvent(r,R,ee.handle),delete y[R])}u.isEmptyObject(y)&&G.remove(r,"handle events")}},dispatch:function(r){var o,c,l,f,h,p,b=new Array(arguments.length),y=u.event.fix(r),w=(G.get(this,"events")||Object.create(null))[y.type]||[],M=u.event.special[y.type]||{};for(b[0]=y,o=1;o<arguments.length;o++)b[o]=arguments[o];if(y.delegateTarget=this,!(M.preDispatch&&M.preDispatch.call(this,y)===!1)){for(p=u.event.handlers.call(this,y,w),o=0;(f=p[o++])&&!y.isPropagationStopped();)for(y.currentTarget=f.elem,c=0;(h=f.handlers[c++])&&!y.isImmediatePropagationStopped();)(!y.rnamespace||h.namespace===!1||y.rnamespace.test(h.namespace))&&(y.handleObj=h,y.data=h.data,l=((u.event.special[h.origType]||{}).handle||h.handler).apply(f.elem,b),l!==void 0&&(y.result=l)===!1&&(y.preventDefault(),y.stopPropagation()));return M.postDispatch&&M.postDispatch.call(this,y),y.result}},handlers:function(r,o){var c,l,f,h,p,b=[],y=o.delegateCount,w=r.target;if(y&&w.nodeType&&!(r.type==="click"&&r.button>=1)){for(;w!==this;w=w.parentNode||this)if(w.nodeType===1&&!(r.type==="click"&&w.disabled===!0)){for(h=[],p={},c=0;c<y;c++)l=o[c],f=l.selector+" ",p[f]===void 0&&(p[f]=l.needsContext?u(f,this).index(w)>-1:u.find(f,this,null,[w]).length),p[f]&&h.push(l);h.length&&b.push({elem:w,handlers:h})}}return w=this,y<o.length&&b.push({elem:w,handlers:o.slice(y)}),b},addProp:function(r,o){Object.defineProperty(u.Event.prototype,r,{enumerable:!0,configurable:!0,get:$(o)?function(){if(this.originalEvent)return o(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[r]},set:function(c){Object.defineProperty(this,r,{enumerable:!0,configurable:!0,writable:!0,value:c})}})},fix:function(r){return r[u.expando]?r:new u.Event(r)},special:{load:{noBubble:!0},click:{setup:function(r){var o=this||r;return oi.test(o.type)&&o.click&&B(o,"input")&&Ji(o,"click",!0),!1},trigger:function(r){var o=this||r;return oi.test(o.type)&&o.click&&B(o,"input")&&Ji(o,"click"),!0},_default:function(r){var o=r.target;return oi.test(o.type)&&o.click&&B(o,"input")&&G.get(o,"click")||B(o,"a")}},beforeunload:{postDispatch:function(r){r.result!==void 0&&r.originalEvent&&(r.originalEvent.returnValue=r.result)}}}};function Ji(r,o,c){if(!c){G.get(r,o)===void 0&&u.event.add(r,o,Tn);return}G.set(r,o,!1),u.event.add(r,o,{namespace:!1,handler:function(l){var f,h=G.get(this,o);if(l.isTrigger&1&&this[o]){if(h)(u.event.special[o]||{}).delegateType&&l.stopPropagation();else if(h=a.call(arguments),G.set(this,o,h),this[o](),f=G.get(this,o),G.set(this,o,!1),h!==f)return l.stopImmediatePropagation(),l.preventDefault(),f}else h&&(G.set(this,o,u.event.trigger(h[0],h.slice(1),this)),l.stopPropagation(),l.isImmediatePropagationStopped=Tn)}})}u.removeEvent=function(r,o,c){r.removeEventListener&&r.removeEventListener(o,c)},u.Event=function(r,o){if(!(this instanceof u.Event))return new u.Event(r,o);r&&r.type?(this.originalEvent=r,this.type=r.type,this.isDefaultPrevented=r.defaultPrevented||r.defaultPrevented===void 0&&r.returnValue===!1?Tn:kn,this.target=r.target&&r.target.nodeType===3?r.target.parentNode:r.target,this.currentTarget=r.currentTarget,this.relatedTarget=r.relatedTarget):this.type=r,o&&u.extend(this,o),this.timeStamp=r&&r.timeStamp||Date.now(),this[u.expando]=!0},u.Event.prototype={constructor:u.Event,isDefaultPrevented:kn,isPropagationStopped:kn,isImmediatePropagationStopped:kn,isSimulated:!1,preventDefault:function(){var r=this.originalEvent;this.isDefaultPrevented=Tn,r&&!this.isSimulated&&r.preventDefault()},stopPropagation:function(){var r=this.originalEvent;this.isPropagationStopped=Tn,r&&!this.isSimulated&&r.stopPropagation()},stopImmediatePropagation:function(){var r=this.originalEvent;this.isImmediatePropagationStopped=Tn,r&&!this.isSimulated&&r.stopImmediatePropagation(),this.stopPropagation()}},u.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},u.event.addProp),u.each({focus:"focusin",blur:"focusout"},function(r,o){function c(l){if(U.documentMode){var f=G.get(this,"handle"),h=u.event.fix(l);h.type=l.type==="focusin"?"focus":"blur",h.isSimulated=!0,f(l),h.target===h.currentTarget&&f(h)}else u.event.simulate(o,l.target,u.event.fix(l))}u.event.special[r]={setup:function(){var l;if(Ji(this,r,!0),U.documentMode)l=G.get(this,o),l||this.addEventListener(o,c),G.set(this,o,(l||0)+1);else return!1},trigger:function(){return Ji(this,r),!0},teardown:function(){var l;if(U.documentMode)l=G.get(this,o)-1,l?G.set(this,o,l):(this.removeEventListener(o,c),G.remove(this,o));else return!1},_default:function(l){return G.get(l.target,r)},delegateType:o},u.event.special[o]={setup:function(){var l=this.ownerDocument||this.document||this,f=U.documentMode?this:l,h=G.get(f,o);h||(U.documentMode?this.addEventListener(o,c):l.addEventListener(r,c,!0)),G.set(f,o,(h||0)+1)},teardown:function(){var l=this.ownerDocument||this.document||this,f=U.documentMode?this:l,h=G.get(f,o)-1;h?G.set(f,o,h):(U.documentMode?this.removeEventListener(o,c):l.removeEventListener(r,c,!0),G.remove(f,o))}}}),u.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(r,o){u.event.special[r]={delegateType:o,bindType:o,handle:function(c){var l,f=this,h=c.relatedTarget,p=c.handleObj;return(!h||h!==f&&!u.contains(f,h))&&(c.type=p.origType,l=p.handler.apply(this,arguments),c.type=o),l}}}),u.fn.extend({on:function(r,o,c,l){return ns(this,r,o,c,l)},one:function(r,o,c,l){return ns(this,r,o,c,l,1)},off:function(r,o,c){var l,f;if(r&&r.preventDefault&&r.handleObj)return l=r.handleObj,u(r.delegateTarget).off(l.namespace?l.origType+"."+l.namespace:l.origType,l.selector,l.handler),this;if(typeof r=="object"){for(f in r)this.off(f,o,r[f]);return this}return(o===!1||typeof o=="function")&&(c=o,o=void 0),c===!1&&(c=kn),this.each(function(){u.event.remove(this,r,c,o)})}});var sd=/<script|<style|<link/i,od=/checked\s*(?:[^=]|=\s*.checked.)/i,ad=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function ga(r,o){return B(r,"table")&&B(o.nodeType!==11?o:o.firstChild,"tr")&&u(r).children("tbody")[0]||r}function cd(r){return r.type=(r.getAttribute("type")!==null)+"/"+r.type,r}function ld(r){return(r.type||"").slice(0,5)==="true/"?r.type=r.type.slice(5):r.removeAttribute("type"),r}function _a(r,o){var c,l,f,h,p,b,y;if(o.nodeType===1){if(G.hasData(r)&&(h=G.get(r),y=h.events,y)){G.remove(o,"handle events");for(f in y)for(c=0,l=y[f].length;c<l;c++)u.event.add(o,f,y[f][c])}qe.hasData(r)&&(p=qe.access(r),b=u.extend({},p),qe.set(o,b))}}function ud(r,o){var c=o.nodeName.toLowerCase();c==="input"&&oi.test(r.type)?o.checked=r.checked:(c==="input"||c==="textarea")&&(o.defaultValue=r.defaultValue)}function Mn(r,o,c,l){o=d(o);var f,h,p,b,y,w,M=0,P=r.length,T=P-1,R=o[0],J=$(R);if(J||P>1&&typeof R=="string"&&!A.checkClone&&od.test(R))return r.each(function(oe){var ee=r.eq(oe);J&&(o[0]=R.call(this,oe,ee.html())),Mn(ee,o,c,l)});if(P&&(f=pa(o,r[0].ownerDocument,!1,r,l),h=f.firstChild,f.childNodes.length===1&&(f=h),h||l)){for(p=u.map(Ve(f,"script"),cd),b=p.length;M<P;M++)y=f,M!==T&&(y=u.clone(y,!0,!0),b&&u.merge(p,Ve(y,"script"))),c.call(r[M],y,M);if(b)for(w=p[p.length-1].ownerDocument,u.map(p,ld),M=0;M<b;M++)y=p[M],ha.test(y.type||"")&&!G.access(y,"globalEval")&&u.contains(w,y)&&(y.src&&(y.type||"").toLowerCase()!=="module"?u._evalUrl&&!y.noModule&&u._evalUrl(y.src,{nonce:y.nonce||y.getAttribute("nonce")},w):ze(y.textContent.replace(ad,""),y,w))}return r}function ya(r,o,c){for(var l,f=o?u.filter(o,r):r,h=0;(l=f[h])!=null;h++)!c&&l.nodeType===1&&u.cleanData(Ve(l)),l.parentNode&&(c&&Cn(l)&&ts(Ve(l,"script")),l.parentNode.removeChild(l));return r}u.extend({htmlPrefilter:function(r){return r},clone:function(r,o,c){var l,f,h,p,b=r.cloneNode(!0),y=Cn(r);if(!A.noCloneChecked&&(r.nodeType===1||r.nodeType===11)&&!u.isXMLDoc(r))for(p=Ve(b),h=Ve(r),l=0,f=h.length;l<f;l++)ud(h[l],p[l]);if(o)if(c)for(h=h||Ve(r),p=p||Ve(b),l=0,f=h.length;l<f;l++)_a(h[l],p[l]);else _a(r,b);return p=Ve(b,"script"),p.length>0&&ts(p,!y&&Ve(r,"script")),b},cleanData:function(r){for(var o,c,l,f=u.event.special,h=0;(c=r[h])!==void 0;h++)if(ii(c)){if(o=c[G.expando]){if(o.events)for(l in o.events)f[l]?u.event.remove(c,l):u.removeEvent(c,l,o.handle);c[G.expando]=void 0}c[qe.expando]&&(c[qe.expando]=void 0)}}}),u.fn.extend({detach:function(r){return ya(this,r,!0)},remove:function(r){return ya(this,r)},text:function(r){return Pt(this,function(o){return o===void 0?u.text(this):this.empty().each(function(){(this.nodeType===1||this.nodeType===11||this.nodeType===9)&&(this.textContent=o)})},null,r,arguments.length)},append:function(){return Mn(this,arguments,function(r){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var o=ga(this,r);o.appendChild(r)}})},prepend:function(){return Mn(this,arguments,function(r){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var o=ga(this,r);o.insertBefore(r,o.firstChild)}})},before:function(){return Mn(this,arguments,function(r){this.parentNode&&this.parentNode.insertBefore(r,this)})},after:function(){return Mn(this,arguments,function(r){this.parentNode&&this.parentNode.insertBefore(r,this.nextSibling)})},empty:function(){for(var r,o=0;(r=this[o])!=null;o++)r.nodeType===1&&(u.cleanData(Ve(r,!1)),r.textContent="");return this},clone:function(r,o){return r=r??!1,o=o??r,this.map(function(){return u.clone(this,r,o)})},html:function(r){return Pt(this,function(o){var c=this[0]||{},l=0,f=this.length;if(o===void 0&&c.nodeType===1)return c.innerHTML;if(typeof o=="string"&&!sd.test(o)&&!it[(fa.exec(o)||["",""])[1].toLowerCase()]){o=u.htmlPrefilter(o);try{for(;l<f;l++)c=this[l]||{},c.nodeType===1&&(u.cleanData(Ve(c,!1)),c.innerHTML=o);c=0}catch{}}c&&this.empty().append(o)},null,r,arguments.length)},replaceWith:function(){var r=[];return Mn(this,arguments,function(o){var c=this.parentNode;u.inArray(this,r)<0&&(u.cleanData(Ve(this)),c&&c.replaceChild(o,this))},r)}}),u.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(r,o){u.fn[r]=function(c){for(var l,f=[],h=u(c),p=h.length-1,b=0;b<=p;b++)l=b===p?this:this.clone(!0),u(h[b])[o](l),m.apply(f,l.get());return this.pushStack(f)}});var is=new RegExp("^("+la+")(?!px)[a-z%]+$","i"),rs=/^--/,Qi=function(r){var o=r.ownerDocument.defaultView;return(!o||!o.opener)&&(o=e),o.getComputedStyle(r)},ba=function(r,o,c){var l,f,h={};for(f in o)h[f]=r.style[f],r.style[f]=o[f];l=c.call(r);for(f in o)r.style[f]=h[f];return l},dd=new RegExp(At.join("|"),"i");(function(){function r(){if(w){y.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",w.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",on.appendChild(y).appendChild(w);var M=e.getComputedStyle(w);c=M.top!=="1%",b=o(M.marginLeft)===12,w.style.right="60%",h=o(M.right)===36,l=o(M.width)===36,w.style.position="absolute",f=o(w.offsetWidth/3)===12,on.removeChild(y),w=null}}function o(M){return Math.round(parseFloat(M))}var c,l,f,h,p,b,y=U.createElement("div"),w=U.createElement("div");w.style&&(w.style.backgroundClip="content-box",w.cloneNode(!0).style.backgroundClip="",A.clearCloneStyle=w.style.backgroundClip==="content-box",u.extend(A,{boxSizingReliable:function(){return r(),l},pixelBoxStyles:function(){return r(),h},pixelPosition:function(){return r(),c},reliableMarginLeft:function(){return r(),b},scrollboxSize:function(){return r(),f},reliableTrDimensions:function(){var M,P,T,R;return p==null&&(M=U.createElement("table"),P=U.createElement("tr"),T=U.createElement("div"),M.style.cssText="position:absolute;left:-11111px;border-collapse:separate",P.style.cssText="border:1px solid",P.style.height="1px",T.style.height="9px",T.style.display="block",on.appendChild(M).appendChild(P).appendChild(T),R=e.getComputedStyle(P),p=parseInt(R.height,10)+parseInt(R.borderTopWidth,10)+parseInt(R.borderBottomWidth,10)===P.offsetHeight,on.removeChild(M)),p}}))})();function ai(r,o,c){var l,f,h,p,b=rs.test(o),y=r.style;return c=c||Qi(r),c&&(p=c.getPropertyValue(o)||c[o],b&&p&&(p=p.replace(de,"$1")||void 0),p===""&&!Cn(r)&&(p=u.style(r,o)),!A.pixelBoxStyles()&&is.test(p)&&dd.test(o)&&(l=y.width,f=y.minWidth,h=y.maxWidth,y.minWidth=y.maxWidth=y.width=p,p=c.width,y.width=l,y.minWidth=f,y.maxWidth=h)),p!==void 0?p+"":p}function xa(r,o){return{get:function(){if(r()){delete this.get;return}return(this.get=o).apply(this,arguments)}}}var va=["Webkit","Moz","ms"],wa=U.createElement("div").style,Sa={};function fd(r){for(var o=r[0].toUpperCase()+r.slice(1),c=va.length;c--;)if(r=va[c]+o,r in wa)return r}function ss(r){var o=u.cssProps[r]||Sa[r];return o||(r in wa?r:Sa[r]=fd(r)||r)}var hd=/^(none|table(?!-c[ea]).+)/,pd={position:"absolute",visibility:"hidden",display:"block"},Ca={letterSpacing:"0",fontWeight:"400"};function Ea(r,o,c){var l=si.exec(o);return l?Math.max(0,l[2]-(c||0))+(l[3]||"px"):o}function os(r,o,c,l,f,h){var p=o==="width"?1:0,b=0,y=0,w=0;if(c===(l?"border":"content"))return 0;for(;p<4;p+=2)c==="margin"&&(w+=u.css(r,c+At[p],!0,f)),l?(c==="content"&&(y-=u.css(r,"padding"+At[p],!0,f)),c!=="margin"&&(y-=u.css(r,"border"+At[p]+"Width",!0,f))):(y+=u.css(r,"padding"+At[p],!0,f),c!=="padding"?y+=u.css(r,"border"+At[p]+"Width",!0,f):b+=u.css(r,"border"+At[p]+"Width",!0,f));return!l&&h>=0&&(y+=Math.max(0,Math.ceil(r["offset"+o[0].toUpperCase()+o.slice(1)]-h-y-b-.5))||0),y+w}function Ta(r,o,c){var l=Qi(r),f=!A.boxSizingReliable()||c,h=f&&u.css(r,"boxSizing",!1,l)==="border-box",p=h,b=ai(r,o,l),y="offset"+o[0].toUpperCase()+o.slice(1);if(is.test(b)){if(!c)return b;b="auto"}return(!A.boxSizingReliable()&&h||!A.reliableTrDimensions()&&B(r,"tr")||b==="auto"||!parseFloat(b)&&u.css(r,"display",!1,l)==="inline")&&r.getClientRects().length&&(h=u.css(r,"boxSizing",!1,l)==="border-box",p=y in r,p&&(b=r[y])),b=parseFloat(b)||0,b+os(r,o,c||(h?"border":"content"),p,l,b)+"px"}u.extend({cssHooks:{opacity:{get:function(r,o){if(o){var c=ai(r,"opacity");return c===""?"1":c}}}},cssNumber:{animationIterationCount:!0,aspectRatio:!0,borderImageSlice:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,scale:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeMiterlimit:!0,strokeOpacity:!0},cssProps:{},style:function(r,o,c,l){if(!(!r||r.nodeType===3||r.nodeType===8||!r.style)){var f,h,p,b=vt(o),y=rs.test(o),w=r.style;if(y||(o=ss(b)),p=u.cssHooks[o]||u.cssHooks[b],c!==void 0){if(h=typeof c,h==="string"&&(f=si.exec(c))&&f[1]&&(c=ua(r,o,f),h="number"),c==null||c!==c)return;h==="number"&&!y&&(c+=f&&f[3]||(u.cssNumber[b]?"":"px")),!A.clearCloneStyle&&c===""&&o.indexOf("background")===0&&(w[o]="inherit"),(!p||!("set"in p)||(c=p.set(r,c,l))!==void 0)&&(y?w.setProperty(o,c):w[o]=c)}else return p&&"get"in p&&(f=p.get(r,!1,l))!==void 0?f:w[o]}},css:function(r,o,c,l){var f,h,p,b=vt(o),y=rs.test(o);return y||(o=ss(b)),p=u.cssHooks[o]||u.cssHooks[b],p&&"get"in p&&(f=p.get(r,!0,c)),f===void 0&&(f=ai(r,o,l)),f==="normal"&&o in Ca&&(f=Ca[o]),c===""||c?(h=parseFloat(f),c===!0||isFinite(h)?h||0:f):f}}),u.each(["height","width"],function(r,o){u.cssHooks[o]={get:function(c,l,f){if(l)return hd.test(u.css(c,"display"))&&(!c.getClientRects().length||!c.getBoundingClientRect().width)?ba(c,pd,function(){return Ta(c,o,f)}):Ta(c,o,f)},set:function(c,l,f){var h,p=Qi(c),b=!A.scrollboxSize()&&p.position==="absolute",y=b||f,w=y&&u.css(c,"boxSizing",!1,p)==="border-box",M=f?os(c,o,f,w,p):0;return w&&b&&(M-=Math.ceil(c["offset"+o[0].toUpperCase()+o.slice(1)]-parseFloat(p[o])-os(c,o,"border",!1,p)-.5)),M&&(h=si.exec(l))&&(h[3]||"px")!=="px"&&(c.style[o]=l,l=u.css(c,o)),Ea(c,l,M)}}}),u.cssHooks.marginLeft=xa(A.reliableMarginLeft,function(r,o){if(o)return(parseFloat(ai(r,"marginLeft"))||r.getBoundingClientRect().left-ba(r,{marginLeft:0},function(){return r.getBoundingClientRect().left}))+"px"}),u.each({margin:"",padding:"",border:"Width"},function(r,o){u.cssHooks[r+o]={expand:function(c){for(var l=0,f={},h=typeof c=="string"?c.split(" "):[c];l<4;l++)f[r+At[l]+o]=h[l]||h[l-2]||h[0];return f}},r!=="margin"&&(u.cssHooks[r+o].set=Ea)}),u.fn.extend({css:function(r,o){return Pt(this,function(c,l,f){var h,p,b={},y=0;if(Array.isArray(l)){for(h=Qi(c),p=l.length;y<p;y++)b[l[y]]=u.css(c,l[y],!1,h);return b}return f!==void 0?u.style(c,l,f):u.css(c,l)},r,o,arguments.length>1)}});function Xe(r,o,c,l,f){return new Xe.prototype.init(r,o,c,l,f)}u.Tween=Xe,Xe.prototype={constructor:Xe,init:function(r,o,c,l,f,h){this.elem=r,this.prop=c,this.easing=f||u.easing._default,this.options=o,this.start=this.now=this.cur(),this.end=l,this.unit=h||(u.cssNumber[c]?"":"px")},cur:function(){var r=Xe.propHooks[this.prop];return r&&r.get?r.get(this):Xe.propHooks._default.get(this)},run:function(r){var o,c=Xe.propHooks[this.prop];return this.options.duration?this.pos=o=u.easing[this.easing](r,this.options.duration*r,0,1,this.options.duration):this.pos=o=r,this.now=(this.end-this.start)*o+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Xe.propHooks._default.set(this),this}},Xe.prototype.init.prototype=Xe.prototype,Xe.propHooks={_default:{get:function(r){var o;return r.elem.nodeType!==1||r.elem[r.prop]!=null&&r.elem.style[r.prop]==null?r.elem[r.prop]:(o=u.css(r.elem,r.prop,""),!o||o==="auto"?0:o)},set:function(r){u.fx.step[r.prop]?u.fx.step[r.prop](r):r.elem.nodeType===1&&(u.cssHooks[r.prop]||r.elem.style[ss(r.prop)]!=null)?u.style(r.elem,r.prop,r.now+r.unit):r.elem[r.prop]=r.now}}},Xe.propHooks.scrollTop=Xe.propHooks.scrollLeft={set:function(r){r.elem.nodeType&&r.elem.parentNode&&(r.elem[r.prop]=r.now)}},u.easing={linear:function(r){return r},swing:function(r){return .5-Math.cos(r*Math.PI)/2},_default:"swing"},u.fx=Xe.prototype.init,u.fx.step={};var In,Ki,md=/^(?:toggle|show|hide)$/,gd=/queueHooks$/;function as(){Ki&&(U.hidden===!1&&e.requestAnimationFrame?e.requestAnimationFrame(as):e.setTimeout(as,u.fx.interval),u.fx.tick())}function ka(){return e.setTimeout(function(){In=void 0}),In=Date.now()}function er(r,o){var c,l=0,f={height:r};for(o=o?1:0;l<4;l+=2-o)c=At[l],f["margin"+c]=f["padding"+c]=r;return o&&(f.opacity=f.width=r),f}function Ma(r,o,c){for(var l,f=(dt.tweeners[o]||[]).concat(dt.tweeners["*"]),h=0,p=f.length;h<p;h++)if(l=f[h].call(c,o,r))return l}function _d(r,o,c){var l,f,h,p,b,y,w,M,P="width"in o||"height"in o,T=this,R={},J=r.style,oe=r.nodeType&&Xi(r),ee=G.get(r,"fxshow");c.queue||(p=u._queueHooks(r,"fx"),p.unqueued==null&&(p.unqueued=0,b=p.empty.fire,p.empty.fire=function(){p.unqueued||b()}),p.unqueued++,T.always(function(){T.always(function(){p.unqueued--,u.queue(r,"fx").length||p.empty.fire()})}));for(l in o)if(f=o[l],md.test(f)){if(delete o[l],h=h||f==="toggle",f===(oe?"hide":"show"))if(f==="show"&&ee&&ee[l]!==void 0)oe=!0;else continue;R[l]=ee&&ee[l]||u.style(r,l)}if(y=!u.isEmptyObject(o),!(!y&&u.isEmptyObject(R))){P&&r.nodeType===1&&(c.overflow=[J.overflow,J.overflowX,J.overflowY],w=ee&&ee.display,w==null&&(w=G.get(r,"display")),M=u.css(r,"display"),M==="none"&&(w?M=w:(En([r],!0),w=r.style.display||w,M=u.css(r,"display"),En([r]))),(M==="inline"||M==="inline-block"&&w!=null)&&u.css(r,"float")==="none"&&(y||(T.done(function(){J.display=w}),w==null&&(M=J.display,w=M==="none"?"":M)),J.display="inline-block")),c.overflow&&(J.overflow="hidden",T.always(function(){J.overflow=c.overflow[0],J.overflowX=c.overflow[1],J.overflowY=c.overflow[2]})),y=!1;for(l in R)y||(ee?"hidden"in ee&&(oe=ee.hidden):ee=G.access(r,"fxshow",{display:w}),h&&(ee.hidden=!oe),oe&&En([r],!0),T.done(function(){oe||En([r]),G.remove(r,"fxshow");for(l in R)u.style(r,l,R[l])})),y=Ma(oe?ee[l]:0,l,T),l in ee||(ee[l]=y.start,oe&&(y.end=y.start,y.start=0))}}function yd(r,o){var c,l,f,h,p;for(c in r)if(l=vt(c),f=o[l],h=r[c],Array.isArray(h)&&(f=h[1],h=r[c]=h[0]),c!==l&&(r[l]=h,delete r[c]),p=u.cssHooks[l],p&&"expand"in p){h=p.expand(h),delete r[l];for(c in h)c in r||(r[c]=h[c],o[c]=f)}else o[l]=f}function dt(r,o,c){var l,f,h=0,p=dt.prefilters.length,b=u.Deferred().always(function(){delete y.elem}),y=function(){if(f)return!1;for(var P=In||ka(),T=Math.max(0,w.startTime+w.duration-P),R=T/w.duration||0,J=1-R,oe=0,ee=w.tweens.length;oe<ee;oe++)w.tweens[oe].run(J);return b.notifyWith(r,[w,J,T]),J<1&&ee?T:(ee||b.notifyWith(r,[w,1,0]),b.resolveWith(r,[w]),!1)},w=b.promise({elem:r,props:u.extend({},o),opts:u.extend(!0,{specialEasing:{},easing:u.easing._default},c),originalProperties:o,originalOptions:c,startTime:In||ka(),duration:c.duration,tweens:[],createTween:function(P,T){var R=u.Tween(r,w.opts,P,T,w.opts.specialEasing[P]||w.opts.easing);return w.tweens.push(R),R},stop:function(P){var T=0,R=P?w.tweens.length:0;if(f)return this;for(f=!0;T<R;T++)w.tweens[T].run(1);return P?(b.notifyWith(r,[w,1,0]),b.resolveWith(r,[w,P])):b.rejectWith(r,[w,P]),this}}),M=w.props;for(yd(M,w.opts.specialEasing);h<p;h++)if(l=dt.prefilters[h].call(w,r,M,w.opts),l)return $(l.stop)&&(u._queueHooks(w.elem,w.opts.queue).stop=l.stop.bind(l)),l;return u.map(M,Ma,w),$(w.opts.start)&&w.opts.start.call(r,w),w.progress(w.opts.progress).done(w.opts.done,w.opts.complete).fail(w.opts.fail).always(w.opts.always),u.fx.timer(u.extend(y,{elem:r,anim:w,queue:w.opts.queue})),w}u.Animation=u.extend(dt,{tweeners:{"*":[function(r,o){var c=this.createTween(r,o);return ua(c.elem,r,si.exec(o),c),c}]},tweener:function(r,o){$(r)?(o=r,r=["*"]):r=r.match(xt);for(var c,l=0,f=r.length;l<f;l++)c=r[l],dt.tweeners[c]=dt.tweeners[c]||[],dt.tweeners[c].unshift(o)},prefilters:[_d],prefilter:function(r,o){o?dt.prefilters.unshift(r):dt.prefilters.push(r)}}),u.speed=function(r,o,c){var l=r&&typeof r=="object"?u.extend({},r):{complete:c||!c&&o||$(r)&&r,duration:r,easing:c&&o||o&&!$(o)&&o};return u.fx.off?l.duration=0:typeof l.duration!="number"&&(l.duration in u.fx.speeds?l.duration=u.fx.speeds[l.duration]:l.duration=u.fx.speeds._default),(l.queue==null||l.queue===!0)&&(l.queue="fx"),l.old=l.complete,l.complete=function(){$(l.old)&&l.old.call(this),l.queue&&u.dequeue(this,l.queue)},l},u.fn.extend({fadeTo:function(r,o,c,l){return this.filter(Xi).css("opacity",0).show().end().animate({opacity:o},r,c,l)},animate:function(r,o,c,l){var f=u.isEmptyObject(r),h=u.speed(o,c,l),p=function(){var b=dt(this,u.extend({},r),h);(f||G.get(this,"finish"))&&b.stop(!0)};return p.finish=p,f||h.queue===!1?this.each(p):this.queue(h.queue,p)},stop:function(r,o,c){var l=function(f){var h=f.stop;delete f.stop,h(c)};return typeof r!="string"&&(c=o,o=r,r=void 0),o&&this.queue(r||"fx",[]),this.each(function(){var f=!0,h=r!=null&&r+"queueHooks",p=u.timers,b=G.get(this);if(h)b[h]&&b[h].stop&&l(b[h]);else for(h in b)b[h]&&b[h].stop&&gd.test(h)&&l(b[h]);for(h=p.length;h--;)p[h].elem===this&&(r==null||p[h].queue===r)&&(p[h].anim.stop(c),f=!1,p.splice(h,1));(f||!c)&&u.dequeue(this,r)})},finish:function(r){return r!==!1&&(r=r||"fx"),this.each(function(){var o,c=G.get(this),l=c[r+"queue"],f=c[r+"queueHooks"],h=u.timers,p=l?l.length:0;for(c.finish=!0,u.queue(this,r,[]),f&&f.stop&&f.stop.call(this,!0),o=h.length;o--;)h[o].elem===this&&h[o].queue===r&&(h[o].anim.stop(!0),h.splice(o,1));for(o=0;o<p;o++)l[o]&&l[o].finish&&l[o].finish.call(this);delete c.finish})}}),u.each(["toggle","show","hide"],function(r,o){var c=u.fn[o];u.fn[o]=function(l,f,h){return l==null||typeof l=="boolean"?c.apply(this,arguments):this.animate(er(o,!0),l,f,h)}}),u.each({slideDown:er("show"),slideUp:er("hide"),slideToggle:er("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(r,o){u.fn[r]=function(c,l,f){return this.animate(o,c,l,f)}}),u.timers=[],u.fx.tick=function(){var r,o=0,c=u.timers;for(In=Date.now();o<c.length;o++)r=c[o],!r()&&c[o]===r&&c.splice(o--,1);c.length||u.fx.stop(),In=void 0},u.fx.timer=function(r){u.timers.push(r),u.fx.start()},u.fx.interval=13,u.fx.start=function(){Ki||(Ki=!0,as())},u.fx.stop=function(){Ki=null},u.fx.speeds={slow:600,fast:200,_default:400},u.fn.delay=function(r,o){return r=u.fx&&u.fx.speeds[r]||r,o=o||"fx",this.queue(o,function(c,l){var f=e.setTimeout(c,r);l.stop=function(){e.clearTimeout(f)}})},function(){var r=U.createElement("input"),o=U.createElement("select"),c=o.appendChild(U.createElement("option"));r.type="checkbox",A.checkOn=r.value!=="",A.optSelected=c.selected,r=U.createElement("input"),r.value="t",r.type="radio",A.radioValue=r.value==="t"}();var Ia,ci=u.expr.attrHandle;u.fn.extend({attr:function(r,o){return Pt(this,u.attr,r,o,arguments.length>1)},removeAttr:function(r){return this.each(function(){u.removeAttr(this,r)})}}),u.extend({attr:function(r,o,c){var l,f,h=r.nodeType;if(!(h===3||h===8||h===2)){if(typeof r.getAttribute>"u")return u.prop(r,o,c);if((h!==1||!u.isXMLDoc(r))&&(f=u.attrHooks[o.toLowerCase()]||(u.expr.match.bool.test(o)?Ia:void 0)),c!==void 0){if(c===null){u.removeAttr(r,o);return}return f&&"set"in f&&(l=f.set(r,c,o))!==void 0?l:(r.setAttribute(o,c+""),c)}return f&&"get"in f&&(l=f.get(r,o))!==null?l:(l=u.find.attr(r,o),l??void 0)}},attrHooks:{type:{set:function(r,o){if(!A.radioValue&&o==="radio"&&B(r,"input")){var c=r.value;return r.setAttribute("type",o),c&&(r.value=c),o}}}},removeAttr:function(r,o){var c,l=0,f=o&&o.match(xt);if(f&&r.nodeType===1)for(;c=f[l++];)r.removeAttribute(c)}}),Ia={set:function(r,o,c){return o===!1?u.removeAttr(r,c):r.setAttribute(c,c),c}},u.each(u.expr.match.bool.source.match(/\w+/g),function(r,o){var c=ci[o]||u.find.attr;ci[o]=function(l,f,h){var p,b,y=f.toLowerCase();return h||(b=ci[y],ci[y]=p,p=c(l,f,h)!=null?y:null,ci[y]=b),p}});var bd=/^(?:input|select|textarea|button)$/i,xd=/^(?:a|area)$/i;u.fn.extend({prop:function(r,o){return Pt(this,u.prop,r,o,arguments.length>1)},removeProp:function(r){return this.each(function(){delete this[u.propFix[r]||r]})}}),u.extend({prop:function(r,o,c){var l,f,h=r.nodeType;if(!(h===3||h===8||h===2))return(h!==1||!u.isXMLDoc(r))&&(o=u.propFix[o]||o,f=u.propHooks[o]),c!==void 0?f&&"set"in f&&(l=f.set(r,c,o))!==void 0?l:r[o]=c:f&&"get"in f&&(l=f.get(r,o))!==null?l:r[o]},propHooks:{tabIndex:{get:function(r){var o=u.find.attr(r,"tabindex");return o?parseInt(o,10):bd.test(r.nodeName)||xd.test(r.nodeName)&&r.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),A.optSelected||(u.propHooks.selected={get:function(r){var o=r.parentNode;return o&&o.parentNode&&o.parentNode.selectedIndex,null},set:function(r){var o=r.parentNode;o&&(o.selectedIndex,o.parentNode&&o.parentNode.selectedIndex)}}),u.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){u.propFix[this.toLowerCase()]=this});function an(r){var o=r.match(xt)||[];return o.join(" ")}function cn(r){return r.getAttribute&&r.getAttribute("class")||""}function cs(r){return Array.isArray(r)?r:typeof r=="string"?r.match(xt)||[]:[]}u.fn.extend({addClass:function(r){var o,c,l,f,h,p;return $(r)?this.each(function(b){u(this).addClass(r.call(this,b,cn(this)))}):(o=cs(r),o.length?this.each(function(){if(l=cn(this),c=this.nodeType===1&&" "+an(l)+" ",c){for(h=0;h<o.length;h++)f=o[h],c.indexOf(" "+f+" ")<0&&(c+=f+" ");p=an(c),l!==p&&this.setAttribute("class",p)}}):this)},removeClass:function(r){var o,c,l,f,h,p;return $(r)?this.each(function(b){u(this).removeClass(r.call(this,b,cn(this)))}):arguments.length?(o=cs(r),o.length?this.each(function(){if(l=cn(this),c=this.nodeType===1&&" "+an(l)+" ",c){for(h=0;h<o.length;h++)for(f=o[h];c.indexOf(" "+f+" ")>-1;)c=c.replace(" "+f+" "," ");p=an(c),l!==p&&this.setAttribute("class",p)}}):this):this.attr("class","")},toggleClass:function(r,o){var c,l,f,h,p=typeof r,b=p==="string"||Array.isArray(r);return $(r)?this.each(function(y){u(this).toggleClass(r.call(this,y,cn(this),o),o)}):typeof o=="boolean"&&b?o?this.addClass(r):this.removeClass(r):(c=cs(r),this.each(function(){if(b)for(h=u(this),f=0;f<c.length;f++)l=c[f],h.hasClass(l)?h.removeClass(l):h.addClass(l);else(r===void 0||p==="boolean")&&(l=cn(this),l&&G.set(this,"__className__",l),this.setAttribute&&this.setAttribute("class",l||r===!1?"":G.get(this,"__className__")||""))}))},hasClass:function(r){var o,c,l=0;for(o=" "+r+" ";c=this[l++];)if(c.nodeType===1&&(" "+an(cn(c))+" ").indexOf(o)>-1)return!0;return!1}});var vd=/\r/g;u.fn.extend({val:function(r){var o,c,l,f=this[0];return arguments.length?(l=$(r),this.each(function(h){var p;this.nodeType===1&&(l?p=r.call(this,h,u(this).val()):p=r,p==null?p="":typeof p=="number"?p+="":Array.isArray(p)&&(p=u.map(p,function(b){return b==null?"":b+""})),o=u.valHooks[this.type]||u.valHooks[this.nodeName.toLowerCase()],(!o||!("set"in o)||o.set(this,p,"value")===void 0)&&(this.value=p))})):f?(o=u.valHooks[f.type]||u.valHooks[f.nodeName.toLowerCase()],o&&"get"in o&&(c=o.get(f,"value"))!==void 0?c:(c=f.value,typeof c=="string"?c.replace(vd,""):c??"")):void 0}}),u.extend({valHooks:{option:{get:function(r){var o=u.find.attr(r,"value");return o??an(u.text(r))}},select:{get:function(r){var o,c,l,f=r.options,h=r.selectedIndex,p=r.type==="select-one",b=p?null:[],y=p?h+1:f.length;for(h<0?l=y:l=p?h:0;l<y;l++)if(c=f[l],(c.selected||l===h)&&!c.disabled&&(!c.parentNode.disabled||!B(c.parentNode,"optgroup"))){if(o=u(c).val(),p)return o;b.push(o)}return b},set:function(r,o){for(var c,l,f=r.options,h=u.makeArray(o),p=f.length;p--;)l=f[p],(l.selected=u.inArray(u.valHooks.option.get(l),h)>-1)&&(c=!0);return c||(r.selectedIndex=-1),h}}}}),u.each(["radio","checkbox"],function(){u.valHooks[this]={set:function(r,o){if(Array.isArray(o))return r.checked=u.inArray(u(r).val(),o)>-1}},A.checkOn||(u.valHooks[this].get=function(r){return r.getAttribute("value")===null?"on":r.value})});var li=e.location,Da={guid:Date.now()},ls=/\?/;u.parseXML=function(r){var o,c;if(!r||typeof r!="string")return null;try{o=new e.DOMParser().parseFromString(r,"text/xml")}catch{}return c=o&&o.getElementsByTagName("parsererror")[0],(!o||c)&&u.error("Invalid XML: "+(c?u.map(c.childNodes,function(l){return l.textContent}).join(`
`):r)),o};var Pa=/^(?:focusinfocus|focusoutblur)$/,Aa=function(r){r.stopPropagation()};u.extend(u.event,{trigger:function(r,o,c,l){var f,h,p,b,y,w,M,P,T=[c||U],R=S.call(r,"type")?r.type:r,J=S.call(r,"namespace")?r.namespace.split("."):[];if(h=P=p=c=c||U,!(c.nodeType===3||c.nodeType===8)&&!Pa.test(R+u.event.triggered)&&(R.indexOf(".")>-1&&(J=R.split("."),R=J.shift(),J.sort()),y=R.indexOf(":")<0&&"on"+R,r=r[u.expando]?r:new u.Event(R,typeof r=="object"&&r),r.isTrigger=l?2:3,r.namespace=J.join("."),r.rnamespace=r.namespace?new RegExp("(^|\\.)"+J.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,r.result=void 0,r.target||(r.target=c),o=o==null?[r]:u.makeArray(o,[r]),M=u.event.special[R]||{},!(!l&&M.trigger&&M.trigger.apply(c,o)===!1))){if(!l&&!M.noBubble&&!pe(c)){for(b=M.delegateType||R,Pa.test(b+R)||(h=h.parentNode);h;h=h.parentNode)T.push(h),p=h;p===(c.ownerDocument||U)&&T.push(p.defaultView||p.parentWindow||e)}for(f=0;(h=T[f++])&&!r.isPropagationStopped();)P=h,r.type=f>1?b:M.bindType||R,w=(G.get(h,"events")||Object.create(null))[r.type]&&G.get(h,"handle"),w&&w.apply(h,o),w=y&&h[y],w&&w.apply&&ii(h)&&(r.result=w.apply(h,o),r.result===!1&&r.preventDefault());return r.type=R,!l&&!r.isDefaultPrevented()&&(!M._default||M._default.apply(T.pop(),o)===!1)&&ii(c)&&y&&$(c[R])&&!pe(c)&&(p=c[y],p&&(c[y]=null),u.event.triggered=R,r.isPropagationStopped()&&P.addEventListener(R,Aa),c[R](),r.isPropagationStopped()&&P.removeEventListener(R,Aa),u.event.triggered=void 0,p&&(c[y]=p)),r.result}},simulate:function(r,o,c){var l=u.extend(new u.Event,c,{type:r,isSimulated:!0});u.event.trigger(l,null,o)}}),u.fn.extend({trigger:function(r,o){return this.each(function(){u.event.trigger(r,o,this)})},triggerHandler:function(r,o){var c=this[0];if(c)return u.event.trigger(r,o,c,!0)}});var wd=/\[\]$/,Na=/\r?\n/g,Sd=/^(?:submit|button|image|reset|file)$/i,Cd=/^(?:input|select|textarea|keygen)/i;function us(r,o,c,l){var f;if(Array.isArray(o))u.each(o,function(h,p){c||wd.test(r)?l(r,p):us(r+"["+(typeof p=="object"&&p!=null?h:"")+"]",p,c,l)});else if(!c&&Ne(o)==="object")for(f in o)us(r+"["+f+"]",o[f],c,l);else l(r,o)}u.param=function(r,o){var c,l=[],f=function(h,p){var b=$(p)?p():p;l[l.length]=encodeURIComponent(h)+"="+encodeURIComponent(b??"")};if(r==null)return"";if(Array.isArray(r)||r.jquery&&!u.isPlainObject(r))u.each(r,function(){f(this.name,this.value)});else for(c in r)us(c,r[c],o,f);return l.join("&")},u.fn.extend({serialize:function(){return u.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var r=u.prop(this,"elements");return r?u.makeArray(r):this}).filter(function(){var r=this.type;return this.name&&!u(this).is(":disabled")&&Cd.test(this.nodeName)&&!Sd.test(r)&&(this.checked||!oi.test(r))}).map(function(r,o){var c=u(this).val();return c==null?null:Array.isArray(c)?u.map(c,function(l){return{name:o.name,value:l.replace(Na,`\r
`)}}):{name:o.name,value:c.replace(Na,`\r
`)}}).get()}});var Ed=/%20/g,Td=/#.*$/,kd=/([?&])_=[^&]*/,Md=/^(.*?):[ \t]*([^\r\n]*)$/mg,Id=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Dd=/^(?:GET|HEAD)$/,Pd=/^\/\//,Ra={},ds={},La="*/".concat("*"),fs=U.createElement("a");fs.href=li.href;function Oa(r){return function(o,c){typeof o!="string"&&(c=o,o="*");var l,f=0,h=o.toLowerCase().match(xt)||[];if($(c))for(;l=h[f++];)l[0]==="+"?(l=l.slice(1)||"*",(r[l]=r[l]||[]).unshift(c)):(r[l]=r[l]||[]).push(c)}}function Ya(r,o,c,l){var f={},h=r===ds;function p(b){var y;return f[b]=!0,u.each(r[b]||[],function(w,M){var P=M(o,c,l);if(typeof P=="string"&&!h&&!f[P])return o.dataTypes.unshift(P),p(P),!1;if(h)return!(y=P)}),y}return p(o.dataTypes[0])||!f["*"]&&p("*")}function hs(r,o){var c,l,f=u.ajaxSettings.flatOptions||{};for(c in o)o[c]!==void 0&&((f[c]?r:l||(l={}))[c]=o[c]);return l&&u.extend(!0,r,l),r}function Ad(r,o,c){for(var l,f,h,p,b=r.contents,y=r.dataTypes;y[0]==="*";)y.shift(),l===void 0&&(l=r.mimeType||o.getResponseHeader("Content-Type"));if(l){for(f in b)if(b[f]&&b[f].test(l)){y.unshift(f);break}}if(y[0]in c)h=y[0];else{for(f in c){if(!y[0]||r.converters[f+" "+y[0]]){h=f;break}p||(p=f)}h=h||p}if(h)return h!==y[0]&&y.unshift(h),c[h]}function Nd(r,o,c,l){var f,h,p,b,y,w={},M=r.dataTypes.slice();if(M[1])for(p in r.converters)w[p.toLowerCase()]=r.converters[p];for(h=M.shift();h;)if(r.responseFields[h]&&(c[r.responseFields[h]]=o),!y&&l&&r.dataFilter&&(o=r.dataFilter(o,r.dataType)),y=h,h=M.shift(),h){if(h==="*")h=y;else if(y!=="*"&&y!==h){if(p=w[y+" "+h]||w["* "+h],!p){for(f in w)if(b=f.split(" "),b[1]===h&&(p=w[y+" "+b[0]]||w["* "+b[0]],p)){p===!0?p=w[f]:w[f]!==!0&&(h=b[0],M.unshift(b[1]));break}}if(p!==!0)if(p&&r.throws)o=p(o);else try{o=p(o)}catch(P){return{state:"parsererror",error:p?P:"No conversion from "+y+" to "+h}}}}return{state:"success",data:o}}u.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:li.href,type:"GET",isLocal:Id.test(li.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":La,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":u.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(r,o){return o?hs(hs(r,u.ajaxSettings),o):hs(u.ajaxSettings,r)},ajaxPrefilter:Oa(Ra),ajaxTransport:Oa(ds),ajax:function(r,o){typeof r=="object"&&(o=r,r=void 0),o=o||{};var c,l,f,h,p,b,y,w,M,P,T=u.ajaxSetup({},o),R=T.context||T,J=T.context&&(R.nodeType||R.jquery)?u(R):u.event,oe=u.Deferred(),ee=u.Callbacks("once memory"),Oe=T.statusCode||{},Re={},wt={},St="canceled",re={readyState:0,getResponseHeader:function(ce){var Me;if(y){if(!h)for(h={};Me=Md.exec(f);)h[Me[1].toLowerCase()+" "]=(h[Me[1].toLowerCase()+" "]||[]).concat(Me[2]);Me=h[ce.toLowerCase()+" "]}return Me==null?null:Me.join(", ")},getAllResponseHeaders:function(){return y?f:null},setRequestHeader:function(ce,Me){return y==null&&(ce=wt[ce.toLowerCase()]=wt[ce.toLowerCase()]||ce,Re[ce]=Me),this},overrideMimeType:function(ce){return y==null&&(T.mimeType=ce),this},statusCode:function(ce){var Me;if(ce)if(y)re.always(ce[re.status]);else for(Me in ce)Oe[Me]=[Oe[Me],ce[Me]];return this},abort:function(ce){var Me=ce||St;return c&&c.abort(Me),ln(0,Me),this}};if(oe.promise(re),T.url=((r||T.url||li.href)+"").replace(Pd,li.protocol+"//"),T.type=o.method||o.type||T.method||T.type,T.dataTypes=(T.dataType||"*").toLowerCase().match(xt)||[""],T.crossDomain==null){b=U.createElement("a");try{b.href=T.url,b.href=b.href,T.crossDomain=fs.protocol+"//"+fs.host!=b.protocol+"//"+b.host}catch{T.crossDomain=!0}}if(T.data&&T.processData&&typeof T.data!="string"&&(T.data=u.param(T.data,T.traditional)),Ya(Ra,T,o,re),y)return re;w=u.event&&T.global,w&&u.active++===0&&u.event.trigger("ajaxStart"),T.type=T.type.toUpperCase(),T.hasContent=!Dd.test(T.type),l=T.url.replace(Td,""),T.hasContent?T.data&&T.processData&&(T.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&(T.data=T.data.replace(Ed,"+")):(P=T.url.slice(l.length),T.data&&(T.processData||typeof T.data=="string")&&(l+=(ls.test(l)?"&":"?")+T.data,delete T.data),T.cache===!1&&(l=l.replace(kd,"$1"),P=(ls.test(l)?"&":"?")+"_="+Da.guid+++P),T.url=l+P),T.ifModified&&(u.lastModified[l]&&re.setRequestHeader("If-Modified-Since",u.lastModified[l]),u.etag[l]&&re.setRequestHeader("If-None-Match",u.etag[l])),(T.data&&T.hasContent&&T.contentType!==!1||o.contentType)&&re.setRequestHeader("Content-Type",T.contentType),re.setRequestHeader("Accept",T.dataTypes[0]&&T.accepts[T.dataTypes[0]]?T.accepts[T.dataTypes[0]]+(T.dataTypes[0]!=="*"?", "+La+"; q=0.01":""):T.accepts["*"]);for(M in T.headers)re.setRequestHeader(M,T.headers[M]);if(T.beforeSend&&(T.beforeSend.call(R,re,T)===!1||y))return re.abort();if(St="abort",ee.add(T.complete),re.done(T.success),re.fail(T.error),c=Ya(ds,T,o,re),!c)ln(-1,"No Transport");else{if(re.readyState=1,w&&J.trigger("ajaxSend",[re,T]),y)return re;T.async&&T.timeout>0&&(p=e.setTimeout(function(){re.abort("timeout")},T.timeout));try{y=!1,c.send(Re,ln)}catch(ce){if(y)throw ce;ln(-1,ce)}}function ln(ce,Me,di,ms){var Ct,fi,Et,Vt,Xt,rt=Me;y||(y=!0,p&&e.clearTimeout(p),c=void 0,f=ms||"",re.readyState=ce>0?4:0,Ct=ce>=200&&ce<300||ce===304,di&&(Vt=Ad(T,re,di)),!Ct&&u.inArray("script",T.dataTypes)>-1&&u.inArray("json",T.dataTypes)<0&&(T.converters["text script"]=function(){}),Vt=Nd(T,Vt,re,Ct),Ct?(T.ifModified&&(Xt=re.getResponseHeader("Last-Modified"),Xt&&(u.lastModified[l]=Xt),Xt=re.getResponseHeader("etag"),Xt&&(u.etag[l]=Xt)),ce===204||T.type==="HEAD"?rt="nocontent":ce===304?rt="notmodified":(rt=Vt.state,fi=Vt.data,Et=Vt.error,Ct=!Et)):(Et=rt,(ce||!rt)&&(rt="error",ce<0&&(ce=0))),re.status=ce,re.statusText=(Me||rt)+"",Ct?oe.resolveWith(R,[fi,rt,re]):oe.rejectWith(R,[re,rt,Et]),re.statusCode(Oe),Oe=void 0,w&&J.trigger(Ct?"ajaxSuccess":"ajaxError",[re,T,Ct?fi:Et]),ee.fireWith(R,[re,rt]),w&&(J.trigger("ajaxComplete",[re,T]),--u.active||u.event.trigger("ajaxStop")))}return re},getJSON:function(r,o,c){return u.get(r,o,c,"json")},getScript:function(r,o){return u.get(r,void 0,o,"script")}}),u.each(["get","post"],function(r,o){u[o]=function(c,l,f,h){return $(l)&&(h=h||f,f=l,l=void 0),u.ajax(u.extend({url:c,type:o,dataType:h,data:l,success:f},u.isPlainObject(c)&&c))}}),u.ajaxPrefilter(function(r){var o;for(o in r.headers)o.toLowerCase()==="content-type"&&(r.contentType=r.headers[o]||"")}),u._evalUrl=function(r,o,c){return u.ajax({url:r,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(l){u.globalEval(l,o,c)}})},u.fn.extend({wrapAll:function(r){var o;return this[0]&&($(r)&&(r=r.call(this[0])),o=u(r,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&o.insertBefore(this[0]),o.map(function(){for(var c=this;c.firstElementChild;)c=c.firstElementChild;return c}).append(this)),this},wrapInner:function(r){return $(r)?this.each(function(o){u(this).wrapInner(r.call(this,o))}):this.each(function(){var o=u(this),c=o.contents();c.length?c.wrapAll(r):o.append(r)})},wrap:function(r){var o=$(r);return this.each(function(c){u(this).wrapAll(o?r.call(this,c):r)})},unwrap:function(r){return this.parent(r).not("body").each(function(){u(this).replaceWith(this.childNodes)}),this}}),u.expr.pseudos.hidden=function(r){return!u.expr.pseudos.visible(r)},u.expr.pseudos.visible=function(r){return!!(r.offsetWidth||r.offsetHeight||r.getClientRects().length)},u.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch{}};var Rd={0:200,1223:204},ui=u.ajaxSettings.xhr();A.cors=!!ui&&"withCredentials"in ui,A.ajax=ui=!!ui,u.ajaxTransport(function(r){var o,c;if(A.cors||ui&&!r.crossDomain)return{send:function(l,f){var h,p=r.xhr();if(p.open(r.type,r.url,r.async,r.username,r.password),r.xhrFields)for(h in r.xhrFields)p[h]=r.xhrFields[h];r.mimeType&&p.overrideMimeType&&p.overrideMimeType(r.mimeType),!r.crossDomain&&!l["X-Requested-With"]&&(l["X-Requested-With"]="XMLHttpRequest");for(h in l)p.setRequestHeader(h,l[h]);o=function(b){return function(){o&&(o=c=p.onload=p.onerror=p.onabort=p.ontimeout=p.onreadystatechange=null,b==="abort"?p.abort():b==="error"?typeof p.status!="number"?f(0,"error"):f(p.status,p.statusText):f(Rd[p.status]||p.status,p.statusText,(p.responseType||"text")!=="text"||typeof p.responseText!="string"?{binary:p.response}:{text:p.responseText},p.getAllResponseHeaders()))}},p.onload=o(),c=p.onerror=p.ontimeout=o("error"),p.onabort!==void 0?p.onabort=c:p.onreadystatechange=function(){p.readyState===4&&e.setTimeout(function(){o&&c()})},o=o("abort");try{p.send(r.hasContent&&r.data||null)}catch(b){if(o)throw b}},abort:function(){o&&o()}}}),u.ajaxPrefilter(function(r){r.crossDomain&&(r.contents.script=!1)}),u.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(r){return u.globalEval(r),r}}}),u.ajaxPrefilter("script",function(r){r.cache===void 0&&(r.cache=!1),r.crossDomain&&(r.type="GET")}),u.ajaxTransport("script",function(r){if(r.crossDomain||r.scriptAttrs){var o,c;return{send:function(l,f){o=u("<script>").attr(r.scriptAttrs||{}).prop({charset:r.scriptCharset,src:r.url}).on("load error",c=function(h){o.remove(),c=null,h&&f(h.type==="error"?404:200,h.type)}),U.head.appendChild(o[0])},abort:function(){c&&c()}}}});var ja=[],ps=/(=)\?(?=&|$)|\?\?/;u.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var r=ja.pop()||u.expando+"_"+Da.guid++;return this[r]=!0,r}}),u.ajaxPrefilter("json jsonp",function(r,o,c){var l,f,h,p=r.jsonp!==!1&&(ps.test(r.url)?"url":typeof r.data=="string"&&(r.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&ps.test(r.data)&&"data");if(p||r.dataTypes[0]==="jsonp")return l=r.jsonpCallback=$(r.jsonpCallback)?r.jsonpCallback():r.jsonpCallback,p?r[p]=r[p].replace(ps,"$1"+l):r.jsonp!==!1&&(r.url+=(ls.test(r.url)?"&":"?")+r.jsonp+"="+l),r.converters["script json"]=function(){return h||u.error(l+" was not called"),h[0]},r.dataTypes[0]="json",f=e[l],e[l]=function(){h=arguments},c.always(function(){f===void 0?u(e).removeProp(l):e[l]=f,r[l]&&(r.jsonpCallback=o.jsonpCallback,ja.push(l)),h&&$(f)&&f(h[0]),h=f=void 0}),"script"}),A.createHTMLDocument=function(){var r=U.implementation.createHTMLDocument("").body;return r.innerHTML="<form></form><form></form>",r.childNodes.length===2}(),u.parseHTML=function(r,o,c){if(typeof r!="string")return[];typeof o=="boolean"&&(c=o,o=!1);var l,f,h;return o||(A.createHTMLDocument?(o=U.implementation.createHTMLDocument(""),l=o.createElement("base"),l.href=U.location.href,o.head.appendChild(l)):o=U),f=ra.exec(r),h=!c&&[],f?[o.createElement(f[1])]:(f=pa([r],o,h),h&&h.length&&u(h).remove(),u.merge([],f.childNodes))},u.fn.load=function(r,o,c){var l,f,h,p=this,b=r.indexOf(" ");return b>-1&&(l=an(r.slice(b)),r=r.slice(0,b)),$(o)?(c=o,o=void 0):o&&typeof o=="object"&&(f="POST"),p.length>0&&u.ajax({url:r,type:f||"GET",dataType:"html",data:o}).done(function(y){h=arguments,p.html(l?u("<div>").append(u.parseHTML(y)).find(l):y)}).always(c&&function(y,w){p.each(function(){c.apply(this,h||[y.responseText,w,y])})}),this},u.expr.pseudos.animated=function(r){return u.grep(u.timers,function(o){return r===o.elem}).length},u.offset={setOffset:function(r,o,c){var l,f,h,p,b,y,w,M=u.css(r,"position"),P=u(r),T={};M==="static"&&(r.style.position="relative"),b=P.offset(),h=u.css(r,"top"),y=u.css(r,"left"),w=(M==="absolute"||M==="fixed")&&(h+y).indexOf("auto")>-1,w?(l=P.position(),p=l.top,f=l.left):(p=parseFloat(h)||0,f=parseFloat(y)||0),$(o)&&(o=o.call(r,c,u.extend({},b))),o.top!=null&&(T.top=o.top-b.top+p),o.left!=null&&(T.left=o.left-b.left+f),"using"in o?o.using.call(r,T):P.css(T)}},u.fn.extend({offset:function(r){if(arguments.length)return r===void 0?this:this.each(function(f){u.offset.setOffset(this,r,f)});var o,c,l=this[0];if(l)return l.getClientRects().length?(o=l.getBoundingClientRect(),c=l.ownerDocument.defaultView,{top:o.top+c.pageYOffset,left:o.left+c.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var r,o,c,l=this[0],f={top:0,left:0};if(u.css(l,"position")==="fixed")o=l.getBoundingClientRect();else{for(o=this.offset(),c=l.ownerDocument,r=l.offsetParent||c.documentElement;r&&(r===c.body||r===c.documentElement)&&u.css(r,"position")==="static";)r=r.parentNode;r&&r!==l&&r.nodeType===1&&(f=u(r).offset(),f.top+=u.css(r,"borderTopWidth",!0),f.left+=u.css(r,"borderLeftWidth",!0))}return{top:o.top-f.top-u.css(l,"marginTop",!0),left:o.left-f.left-u.css(l,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var r=this.offsetParent;r&&u.css(r,"position")==="static";)r=r.offsetParent;return r||on})}}),u.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(r,o){var c=o==="pageYOffset";u.fn[r]=function(l){return Pt(this,function(f,h,p){var b;if(pe(f)?b=f:f.nodeType===9&&(b=f.defaultView),p===void 0)return b?b[o]:f[h];b?b.scrollTo(c?b.pageXOffset:p,c?p:b.pageYOffset):f[h]=p},r,l,arguments.length)}}),u.each(["top","left"],function(r,o){u.cssHooks[o]=xa(A.pixelPosition,function(c,l){if(l)return l=ai(c,o),is.test(l)?u(c).position()[o]+"px":l})}),u.each({Height:"height",Width:"width"},function(r,o){u.each({padding:"inner"+r,content:o,"":"outer"+r},function(c,l){u.fn[l]=function(f,h){var p=arguments.length&&(c||typeof f!="boolean"),b=c||(f===!0||h===!0?"margin":"border");return Pt(this,function(y,w,M){var P;return pe(y)?l.indexOf("outer")===0?y["inner"+r]:y.document.documentElement["client"+r]:y.nodeType===9?(P=y.documentElement,Math.max(y.body["scroll"+r],P["scroll"+r],y.body["offset"+r],P["offset"+r],P["client"+r])):M===void 0?u.css(y,w,b):u.style(y,w,M,b)},o,p?f:void 0,p)}})}),u.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(r,o){u.fn[o]=function(c){return this.on(o,c)}}),u.fn.extend({bind:function(r,o,c){return this.on(r,null,o,c)},unbind:function(r,o){return this.off(r,null,o)},delegate:function(r,o,c,l){return this.on(o,r,c,l)},undelegate:function(r,o,c){return arguments.length===1?this.off(r,"**"):this.off(o,r||"**",c)},hover:function(r,o){return this.mouseenter(r).mouseleave(o||r)}}),u.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(r,o){u.fn[o]=function(c,l){return arguments.length>0?this.on(o,null,c,l):this.trigger(o)}});var Ld=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;u.proxy=function(r,o){var c,l,f;if(typeof o=="string"&&(c=r[o],o=r,r=c),!!$(r))return l=a.call(arguments,2),f=function(){return r.apply(o||this,l.concat(a.call(arguments)))},f.guid=r.guid=r.guid||u.guid++,f},u.holdReady=function(r){r?u.readyWait++:u.ready(!0)},u.isArray=Array.isArray,u.parseJSON=JSON.parse,u.nodeName=B,u.isFunction=$,u.isWindow=pe,u.camelCase=vt,u.type=Ne,u.now=Date.now,u.isNumeric=function(r){var o=u.type(r);return(o==="number"||o==="string")&&!isNaN(r-parseFloat(r))},u.trim=function(r){return r==null?"":(r+"").replace(Ld,"$1")};var Od=e.jQuery,Yd=e.$;return u.noConflict=function(r){return e.$===u&&(e.$=Yd),r&&e.jQuery===u&&(e.jQuery=Od),u},typeof n>"u"&&(e.jQuery=e.$=u),u})})(qd);let Vd=t=>crypto.getRandomValues(new Uint8Array(t)),Xd=(t,e,n)=>{let i=(2<<Math.log(t.length-1)/Math.LN2)-1,s=-~(1.6*i*e/t.length);return(a=e)=>{let d="";for(;;){let m=n(s),g=s;for(;g--;)if(d+=t[m[g]&i]||"",d.length===a)return d}}},Jd=(t,e=21)=>Xd(t,e,Vd),Qd=(t=21)=>crypto.getRandomValues(new Uint8Array(t)).reduce((e,n)=>(n&=63,n<36?e+=n.toString(36):n<62?e+=(n-26).toString(36).toUpperCase():n>62?e+="-":e+="_",e),"");//! moment.js
//! version : 2.29.4
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var Bc;function j(){return Bc.apply(null,arguments)}function Kd(t){Bc=t}function _t(t){return t instanceof Array||Object.prototype.toString.call(t)==="[object Array]"}function _n(t){return t!=null&&Object.prototype.toString.call(t)==="[object Object]"}function le(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function yo(t){if(Object.getOwnPropertyNames)return Object.getOwnPropertyNames(t).length===0;var e;for(e in t)if(le(t,e))return!1;return!0}function Qe(t){return t===void 0}function Gt(t){return typeof t=="number"||Object.prototype.toString.call(t)==="[object Number]"}function ji(t){return t instanceof Date||Object.prototype.toString.call(t)==="[object Date]"}function Uc(t,e){var n=[],i,s=t.length;for(i=0;i<s;++i)n.push(e(t[i],i));return n}function Kt(t,e){for(var n in e)le(e,n)&&(t[n]=e[n]);return le(e,"toString")&&(t.toString=e.toString),le(e,"valueOf")&&(t.valueOf=e.valueOf),t}function It(t,e,n,i){return ml(t,e,n,i,!0).utc()}function ef(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidEra:null,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],era:null,meridiem:null,rfc2822:!1,weekdayMismatch:!1}}function K(t){return t._pf==null&&(t._pf=ef()),t._pf}var Gs;Array.prototype.some?Gs=Array.prototype.some:Gs=function(t){var e=Object(this),n=e.length>>>0,i;for(i=0;i<n;i++)if(i in e&&t.call(this,e[i],i,e))return!0;return!1};function bo(t){if(t._isValid==null){var e=K(t),n=Gs.call(e.parsedDateParts,function(s){return s!=null}),i=!isNaN(t._d.getTime())&&e.overflow<0&&!e.empty&&!e.invalidEra&&!e.invalidMonth&&!e.invalidWeekday&&!e.weekdayMismatch&&!e.nullInput&&!e.invalidFormat&&!e.userInvalidated&&(!e.meridiem||e.meridiem&&n);if(t._strict&&(i=i&&e.charsLeftOver===0&&e.unusedTokens.length===0&&e.bigHour===void 0),Object.isFrozen==null||!Object.isFrozen(t))t._isValid=i;else return i}return t._isValid}function Lr(t){var e=It(NaN);return t!=null?Kt(K(e),t):K(e).userInvalidated=!0,e}var Wa=j.momentProperties=[],ws=!1;function xo(t,e){var n,i,s,a=Wa.length;if(Qe(e._isAMomentObject)||(t._isAMomentObject=e._isAMomentObject),Qe(e._i)||(t._i=e._i),Qe(e._f)||(t._f=e._f),Qe(e._l)||(t._l=e._l),Qe(e._strict)||(t._strict=e._strict),Qe(e._tzm)||(t._tzm=e._tzm),Qe(e._isUTC)||(t._isUTC=e._isUTC),Qe(e._offset)||(t._offset=e._offset),Qe(e._pf)||(t._pf=K(e)),Qe(e._locale)||(t._locale=e._locale),a>0)for(n=0;n<a;n++)i=Wa[n],s=e[i],Qe(s)||(t[i]=s);return t}function $i(t){xo(this,t),this._d=new Date(t._d!=null?t._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),ws===!1&&(ws=!0,j.updateOffset(this),ws=!1)}function yt(t){return t instanceof $i||t!=null&&t._isAMomentObject!=null}function Gc(t){j.suppressDeprecationWarnings===!1&&typeof console<"u"}function lt(t,e){var n=!0;return Kt(function(){if(j.deprecationHandler!=null&&j.deprecationHandler(null,t),n){var i=[],s,a,d,m=arguments.length;for(a=0;a<m;a++){if(s="",typeof arguments[a]=="object"){s+=`
[`+a+"] ";for(d in arguments[0])le(arguments[0],d)&&(s+=d+": "+arguments[0][d]+", ");s=s.slice(0,-2)}else s=arguments[a];i.push(s)}Gc(t+`
Arguments: `+Array.prototype.slice.call(i).join("")+`
`+new Error().stack),n=!1}return e.apply(this,arguments)},e)}var za={};function Zc(t,e){j.deprecationHandler!=null&&j.deprecationHandler(t,e),za[t]||(Gc(e),za[t]=!0)}j.suppressDeprecationWarnings=!1;j.deprecationHandler=null;function Dt(t){return typeof Function<"u"&&t instanceof Function||Object.prototype.toString.call(t)==="[object Function]"}function tf(t){var e,n;for(n in t)le(t,n)&&(e=t[n],Dt(e)?this[n]=e:this["_"+n]=e);this._config=t,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)}function Zs(t,e){var n=Kt({},t),i;for(i in e)le(e,i)&&(_n(t[i])&&_n(e[i])?(n[i]={},Kt(n[i],t[i]),Kt(n[i],e[i])):e[i]!=null?n[i]=e[i]:delete n[i]);for(i in t)le(t,i)&&!le(e,i)&&_n(t[i])&&(n[i]=Kt({},n[i]));return n}function vo(t){t!=null&&this.set(t)}var qs;Object.keys?qs=Object.keys:qs=function(t){var e,n=[];for(e in t)le(t,e)&&n.push(e);return n};var nf={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"};function rf(t,e,n){var i=this._calendar[t]||this._calendar.sameElse;return Dt(i)?i.call(e,n):i}function Mt(t,e,n){var i=""+Math.abs(t),s=e-i.length,a=t>=0;return(a?n?"+":"":"-")+Math.pow(10,Math.max(0,s)).toString().substr(1)+i}var wo=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,or=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,Ss={},Yn={};function Z(t,e,n,i){var s=i;typeof i=="string"&&(s=function(){return this[i]()}),t&&(Yn[t]=s),e&&(Yn[e[0]]=function(){return Mt(s.apply(this,arguments),e[1],e[2])}),n&&(Yn[n]=function(){return this.localeData().ordinal(s.apply(this,arguments),t)})}function sf(t){return t.match(/\[[\s\S]/)?t.replace(/^\[|\]$/g,""):t.replace(/\\/g,"")}function of(t){var e=t.match(wo),n,i;for(n=0,i=e.length;n<i;n++)Yn[e[n]]?e[n]=Yn[e[n]]:e[n]=sf(e[n]);return function(s){var a="",d;for(d=0;d<i;d++)a+=Dt(e[d])?e[d].call(s,t):e[d];return a}}function yr(t,e){return t.isValid()?(e=qc(e,t.localeData()),Ss[e]=Ss[e]||of(e),Ss[e](t)):t.localeData().invalidDate()}function qc(t,e){var n=5;function i(s){return e.longDateFormat(s)||s}for(or.lastIndex=0;n>=0&&or.test(t);)t=t.replace(or,i),or.lastIndex=0,n-=1;return t}var af={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};function cf(t){var e=this._longDateFormat[t],n=this._longDateFormat[t.toUpperCase()];return e||!n?e:(this._longDateFormat[t]=n.match(wo).map(function(i){return i==="MMMM"||i==="MM"||i==="DD"||i==="dddd"?i.slice(1):i}).join(""),this._longDateFormat[t])}var lf="Invalid date";function uf(){return this._invalidDate}var df="%d",ff=/\d{1,2}/;function hf(t){return this._ordinal.replace("%d",t)}var pf={future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",w:"a week",ww:"%d weeks",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function mf(t,e,n,i){var s=this._relativeTime[n];return Dt(s)?s(t,e,n,i):s.replace(/%d/i,t)}function gf(t,e){var n=this._relativeTime[t>0?"future":"past"];return Dt(n)?n(e):n.replace(/%s/i,e)}var bi={};function He(t,e){var n=t.toLowerCase();bi[n]=bi[n+"s"]=bi[e]=t}function ut(t){return typeof t=="string"?bi[t]||bi[t.toLowerCase()]:void 0}function So(t){var e={},n,i;for(i in t)le(t,i)&&(n=ut(i),n&&(e[n]=t[i]));return e}var Vc={};function We(t,e){Vc[t]=e}function _f(t){var e=[],n;for(n in t)le(t,n)&&e.push({unit:n,priority:Vc[n]});return e.sort(function(i,s){return i.priority-s.priority}),e}function Or(t){return t%4===0&&t%100!==0||t%400===0}function ct(t){return t<0?Math.ceil(t)||0:Math.floor(t)}function te(t){var e=+t,n=0;return e!==0&&isFinite(e)&&(n=ct(e)),n}function Kn(t,e){return function(n){return n!=null?(Xc(this,t,n),j.updateOffset(this,e),this):Sr(this,t)}}function Sr(t,e){return t.isValid()?t._d["get"+(t._isUTC?"UTC":"")+e]():NaN}function Xc(t,e,n){t.isValid()&&!isNaN(n)&&(e==="FullYear"&&Or(t.year())&&t.month()===1&&t.date()===29?(n=te(n),t._d["set"+(t._isUTC?"UTC":"")+e](n,t.month(),Wr(n,t.month()))):t._d["set"+(t._isUTC?"UTC":"")+e](n))}function yf(t){return t=ut(t),Dt(this[t])?this[t]():this}function bf(t,e){if(typeof t=="object"){t=So(t);var n=_f(t),i,s=n.length;for(i=0;i<s;i++)this[n[i].unit](t[n[i].unit])}else if(t=ut(t),Dt(this[t]))return this[t](e);return this}var Jc=/\d/,nt=/\d\d/,Qc=/\d{3}/,Co=/\d{4}/,Yr=/[+-]?\d{6}/,Se=/\d\d?/,Kc=/\d\d\d\d?/,el=/\d\d\d\d\d\d?/,jr=/\d{1,3}/,Eo=/\d{1,4}/,$r=/[+-]?\d{1,6}/,ei=/\d+/,Fr=/[+-]?\d+/,xf=/Z|[+-]\d\d:?\d\d/gi,Hr=/Z|[+-]\d\d(?::?\d\d)?/gi,vf=/[+-]?\d+(\.\d{1,3})?/,Fi=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,Cr;Cr={};function W(t,e,n){Cr[t]=Dt(e)?e:function(i,s){return i&&n?n:e}}function wf(t,e){return le(Cr,t)?Cr[t](e._strict,e._locale):new RegExp(Sf(t))}function Sf(t){return tt(t.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(e,n,i,s,a){return n||i||s||a}))}function tt(t){return t.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var Vs={};function _e(t,e){var n,i=e,s;for(typeof t=="string"&&(t=[t]),Gt(e)&&(i=function(a,d){d[e]=te(a)}),s=t.length,n=0;n<s;n++)Vs[t[n]]=i}function Hi(t,e){_e(t,function(n,i,s,a){s._w=s._w||{},e(n,s._w,s,a)})}function Cf(t,e,n){e!=null&&le(Vs,t)&&Vs[t](e,n._a,n,t)}var Fe=0,Wt=1,kt=2,Le=3,pt=4,zt=5,gn=6,Ef=7,Tf=8;function kf(t,e){return(t%e+e)%e}var Ie;Array.prototype.indexOf?Ie=Array.prototype.indexOf:Ie=function(t){var e;for(e=0;e<this.length;++e)if(this[e]===t)return e;return-1};function Wr(t,e){if(isNaN(t)||isNaN(e))return NaN;var n=kf(e,12);return t+=(e-n)/12,n===1?Or(t)?29:28:31-n%7%2}Z("M",["MM",2],"Mo",function(){return this.month()+1});Z("MMM",0,0,function(t){return this.localeData().monthsShort(this,t)});Z("MMMM",0,0,function(t){return this.localeData().months(this,t)});He("month","M");We("month",8);W("M",Se);W("MM",Se,nt);W("MMM",function(t,e){return e.monthsShortRegex(t)});W("MMMM",function(t,e){return e.monthsRegex(t)});_e(["M","MM"],function(t,e){e[Wt]=te(t)-1});_e(["MMM","MMMM"],function(t,e,n,i){var s=n._locale.monthsParse(t,i,n._strict);s!=null?e[Wt]=s:K(n).invalidMonth=t});var Mf="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),tl="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),nl=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,If=Fi,Df=Fi;function Pf(t,e){return t?_t(this._months)?this._months[t.month()]:this._months[(this._months.isFormat||nl).test(e)?"format":"standalone"][t.month()]:_t(this._months)?this._months:this._months.standalone}function Af(t,e){return t?_t(this._monthsShort)?this._monthsShort[t.month()]:this._monthsShort[nl.test(e)?"format":"standalone"][t.month()]:_t(this._monthsShort)?this._monthsShort:this._monthsShort.standalone}function Nf(t,e,n){var i,s,a,d=t.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],i=0;i<12;++i)a=It([2e3,i]),this._shortMonthsParse[i]=this.monthsShort(a,"").toLocaleLowerCase(),this._longMonthsParse[i]=this.months(a,"").toLocaleLowerCase();return n?e==="MMM"?(s=Ie.call(this._shortMonthsParse,d),s!==-1?s:null):(s=Ie.call(this._longMonthsParse,d),s!==-1?s:null):e==="MMM"?(s=Ie.call(this._shortMonthsParse,d),s!==-1?s:(s=Ie.call(this._longMonthsParse,d),s!==-1?s:null)):(s=Ie.call(this._longMonthsParse,d),s!==-1?s:(s=Ie.call(this._shortMonthsParse,d),s!==-1?s:null))}function Rf(t,e,n){var i,s,a;if(this._monthsParseExact)return Nf.call(this,t,e,n);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),i=0;i<12;i++){if(s=It([2e3,i]),n&&!this._longMonthsParse[i]&&(this._longMonthsParse[i]=new RegExp("^"+this.months(s,"").replace(".","")+"$","i"),this._shortMonthsParse[i]=new RegExp("^"+this.monthsShort(s,"").replace(".","")+"$","i")),!n&&!this._monthsParse[i]&&(a="^"+this.months(s,"")+"|^"+this.monthsShort(s,""),this._monthsParse[i]=new RegExp(a.replace(".",""),"i")),n&&e==="MMMM"&&this._longMonthsParse[i].test(t))return i;if(n&&e==="MMM"&&this._shortMonthsParse[i].test(t))return i;if(!n&&this._monthsParse[i].test(t))return i}}function il(t,e){var n;if(!t.isValid())return t;if(typeof e=="string"){if(/^\d+$/.test(e))e=te(e);else if(e=t.localeData().monthsParse(e),!Gt(e))return t}return n=Math.min(t.date(),Wr(t.year(),e)),t._d["set"+(t._isUTC?"UTC":"")+"Month"](e,n),t}function rl(t){return t!=null?(il(this,t),j.updateOffset(this,!0),this):Sr(this,"Month")}function Lf(){return Wr(this.year(),this.month())}function Of(t){return this._monthsParseExact?(le(this,"_monthsRegex")||sl.call(this),t?this._monthsShortStrictRegex:this._monthsShortRegex):(le(this,"_monthsShortRegex")||(this._monthsShortRegex=If),this._monthsShortStrictRegex&&t?this._monthsShortStrictRegex:this._monthsShortRegex)}function Yf(t){return this._monthsParseExact?(le(this,"_monthsRegex")||sl.call(this),t?this._monthsStrictRegex:this._monthsRegex):(le(this,"_monthsRegex")||(this._monthsRegex=Df),this._monthsStrictRegex&&t?this._monthsStrictRegex:this._monthsRegex)}function sl(){function t(d,m){return m.length-d.length}var e=[],n=[],i=[],s,a;for(s=0;s<12;s++)a=It([2e3,s]),e.push(this.monthsShort(a,"")),n.push(this.months(a,"")),i.push(this.months(a,"")),i.push(this.monthsShort(a,""));for(e.sort(t),n.sort(t),i.sort(t),s=0;s<12;s++)e[s]=tt(e[s]),n[s]=tt(n[s]);for(s=0;s<24;s++)i[s]=tt(i[s]);this._monthsRegex=new RegExp("^("+i.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+n.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+e.join("|")+")","i")}Z("Y",0,0,function(){var t=this.year();return t<=9999?Mt(t,4):"+"+t});Z(0,["YY",2],0,function(){return this.year()%100});Z(0,["YYYY",4],0,"year");Z(0,["YYYYY",5],0,"year");Z(0,["YYYYYY",6,!0],0,"year");He("year","y");We("year",1);W("Y",Fr);W("YY",Se,nt);W("YYYY",Eo,Co);W("YYYYY",$r,Yr);W("YYYYYY",$r,Yr);_e(["YYYYY","YYYYYY"],Fe);_e("YYYY",function(t,e){e[Fe]=t.length===2?j.parseTwoDigitYear(t):te(t)});_e("YY",function(t,e){e[Fe]=j.parseTwoDigitYear(t)});_e("Y",function(t,e){e[Fe]=parseInt(t,10)});function xi(t){return Or(t)?366:365}j.parseTwoDigitYear=function(t){return te(t)+(te(t)>68?1900:2e3)};var ol=Kn("FullYear",!0);function jf(){return Or(this.year())}function $f(t,e,n,i,s,a,d){var m;return t<100&&t>=0?(m=new Date(t+400,e,n,i,s,a,d),isFinite(m.getFullYear())&&m.setFullYear(t)):m=new Date(t,e,n,i,s,a,d),m}function Ci(t){var e,n;return t<100&&t>=0?(n=Array.prototype.slice.call(arguments),n[0]=t+400,e=new Date(Date.UTC.apply(null,n)),isFinite(e.getUTCFullYear())&&e.setUTCFullYear(t)):e=new Date(Date.UTC.apply(null,arguments)),e}function Er(t,e,n){var i=7+e-n,s=(7+Ci(t,0,i).getUTCDay()-e)%7;return-s+i-1}function al(t,e,n,i,s){var a=(7+n-i)%7,d=Er(t,i,s),m=1+7*(e-1)+a+d,g,v;return m<=0?(g=t-1,v=xi(g)+m):m>xi(t)?(g=t+1,v=m-xi(t)):(g=t,v=m),{year:g,dayOfYear:v}}function Ei(t,e,n){var i=Er(t.year(),e,n),s=Math.floor((t.dayOfYear()-i-1)/7)+1,a,d;return s<1?(d=t.year()-1,a=s+Bt(d,e,n)):s>Bt(t.year(),e,n)?(a=s-Bt(t.year(),e,n),d=t.year()+1):(d=t.year(),a=s),{week:a,year:d}}function Bt(t,e,n){var i=Er(t,e,n),s=Er(t+1,e,n);return(xi(t)-i+s)/7}Z("w",["ww",2],"wo","week");Z("W",["WW",2],"Wo","isoWeek");He("week","w");He("isoWeek","W");We("week",5);We("isoWeek",5);W("w",Se);W("ww",Se,nt);W("W",Se);W("WW",Se,nt);Hi(["w","ww","W","WW"],function(t,e,n,i){e[i.substr(0,1)]=te(t)});function Ff(t){return Ei(t,this._week.dow,this._week.doy).week}var Hf={dow:0,doy:6};function Wf(){return this._week.dow}function zf(){return this._week.doy}function Bf(t){var e=this.localeData().week(this);return t==null?e:this.add((t-e)*7,"d")}function Uf(t){var e=Ei(this,1,4).week;return t==null?e:this.add((t-e)*7,"d")}Z("d",0,"do","day");Z("dd",0,0,function(t){return this.localeData().weekdaysMin(this,t)});Z("ddd",0,0,function(t){return this.localeData().weekdaysShort(this,t)});Z("dddd",0,0,function(t){return this.localeData().weekdays(this,t)});Z("e",0,0,"weekday");Z("E",0,0,"isoWeekday");He("day","d");He("weekday","e");He("isoWeekday","E");We("day",11);We("weekday",11);We("isoWeekday",11);W("d",Se);W("e",Se);W("E",Se);W("dd",function(t,e){return e.weekdaysMinRegex(t)});W("ddd",function(t,e){return e.weekdaysShortRegex(t)});W("dddd",function(t,e){return e.weekdaysRegex(t)});Hi(["dd","ddd","dddd"],function(t,e,n,i){var s=n._locale.weekdaysParse(t,i,n._strict);s!=null?e.d=s:K(n).invalidWeekday=t});Hi(["d","e","E"],function(t,e,n,i){e[i]=te(t)});function Gf(t,e){return typeof t!="string"?t:isNaN(t)?(t=e.weekdaysParse(t),typeof t=="number"?t:null):parseInt(t,10)}function Zf(t,e){return typeof t=="string"?e.weekdaysParse(t)%7||7:isNaN(t)?null:t}function To(t,e){return t.slice(e,7).concat(t.slice(0,e))}var qf="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),cl="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),Vf="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),Xf=Fi,Jf=Fi,Qf=Fi;function Kf(t,e){var n=_t(this._weekdays)?this._weekdays:this._weekdays[t&&t!==!0&&this._weekdays.isFormat.test(e)?"format":"standalone"];return t===!0?To(n,this._week.dow):t?n[t.day()]:n}function eh(t){return t===!0?To(this._weekdaysShort,this._week.dow):t?this._weekdaysShort[t.day()]:this._weekdaysShort}function th(t){return t===!0?To(this._weekdaysMin,this._week.dow):t?this._weekdaysMin[t.day()]:this._weekdaysMin}function nh(t,e,n){var i,s,a,d=t.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],i=0;i<7;++i)a=It([2e3,1]).day(i),this._minWeekdaysParse[i]=this.weekdaysMin(a,"").toLocaleLowerCase(),this._shortWeekdaysParse[i]=this.weekdaysShort(a,"").toLocaleLowerCase(),this._weekdaysParse[i]=this.weekdays(a,"").toLocaleLowerCase();return n?e==="dddd"?(s=Ie.call(this._weekdaysParse,d),s!==-1?s:null):e==="ddd"?(s=Ie.call(this._shortWeekdaysParse,d),s!==-1?s:null):(s=Ie.call(this._minWeekdaysParse,d),s!==-1?s:null):e==="dddd"?(s=Ie.call(this._weekdaysParse,d),s!==-1||(s=Ie.call(this._shortWeekdaysParse,d),s!==-1)?s:(s=Ie.call(this._minWeekdaysParse,d),s!==-1?s:null)):e==="ddd"?(s=Ie.call(this._shortWeekdaysParse,d),s!==-1||(s=Ie.call(this._weekdaysParse,d),s!==-1)?s:(s=Ie.call(this._minWeekdaysParse,d),s!==-1?s:null)):(s=Ie.call(this._minWeekdaysParse,d),s!==-1||(s=Ie.call(this._weekdaysParse,d),s!==-1)?s:(s=Ie.call(this._shortWeekdaysParse,d),s!==-1?s:null))}function ih(t,e,n){var i,s,a;if(this._weekdaysParseExact)return nh.call(this,t,e,n);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),i=0;i<7;i++){if(s=It([2e3,1]).day(i),n&&!this._fullWeekdaysParse[i]&&(this._fullWeekdaysParse[i]=new RegExp("^"+this.weekdays(s,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[i]=new RegExp("^"+this.weekdaysShort(s,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[i]=new RegExp("^"+this.weekdaysMin(s,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[i]||(a="^"+this.weekdays(s,"")+"|^"+this.weekdaysShort(s,"")+"|^"+this.weekdaysMin(s,""),this._weekdaysParse[i]=new RegExp(a.replace(".",""),"i")),n&&e==="dddd"&&this._fullWeekdaysParse[i].test(t))return i;if(n&&e==="ddd"&&this._shortWeekdaysParse[i].test(t))return i;if(n&&e==="dd"&&this._minWeekdaysParse[i].test(t))return i;if(!n&&this._weekdaysParse[i].test(t))return i}}function rh(t){if(!this.isValid())return t!=null?this:NaN;var e=this._isUTC?this._d.getUTCDay():this._d.getDay();return t!=null?(t=Gf(t,this.localeData()),this.add(t-e,"d")):e}function sh(t){if(!this.isValid())return t!=null?this:NaN;var e=(this.day()+7-this.localeData()._week.dow)%7;return t==null?e:this.add(t-e,"d")}function oh(t){if(!this.isValid())return t!=null?this:NaN;if(t!=null){var e=Zf(t,this.localeData());return this.day(this.day()%7?e:e-7)}else return this.day()||7}function ah(t){return this._weekdaysParseExact?(le(this,"_weekdaysRegex")||ko.call(this),t?this._weekdaysStrictRegex:this._weekdaysRegex):(le(this,"_weekdaysRegex")||(this._weekdaysRegex=Xf),this._weekdaysStrictRegex&&t?this._weekdaysStrictRegex:this._weekdaysRegex)}function ch(t){return this._weekdaysParseExact?(le(this,"_weekdaysRegex")||ko.call(this),t?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(le(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=Jf),this._weekdaysShortStrictRegex&&t?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function lh(t){return this._weekdaysParseExact?(le(this,"_weekdaysRegex")||ko.call(this),t?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(le(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=Qf),this._weekdaysMinStrictRegex&&t?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function ko(){function t(C,S){return S.length-C.length}var e=[],n=[],i=[],s=[],a,d,m,g,v;for(a=0;a<7;a++)d=It([2e3,1]).day(a),m=tt(this.weekdaysMin(d,"")),g=tt(this.weekdaysShort(d,"")),v=tt(this.weekdays(d,"")),e.push(m),n.push(g),i.push(v),s.push(m),s.push(g),s.push(v);e.sort(t),n.sort(t),i.sort(t),s.sort(t),this._weekdaysRegex=new RegExp("^("+s.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+i.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+n.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+e.join("|")+")","i")}function Mo(){return this.hours()%12||12}function uh(){return this.hours()||24}Z("H",["HH",2],0,"hour");Z("h",["hh",2],0,Mo);Z("k",["kk",2],0,uh);Z("hmm",0,0,function(){return""+Mo.apply(this)+Mt(this.minutes(),2)});Z("hmmss",0,0,function(){return""+Mo.apply(this)+Mt(this.minutes(),2)+Mt(this.seconds(),2)});Z("Hmm",0,0,function(){return""+this.hours()+Mt(this.minutes(),2)});Z("Hmmss",0,0,function(){return""+this.hours()+Mt(this.minutes(),2)+Mt(this.seconds(),2)});function ll(t,e){Z(t,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),e)})}ll("a",!0);ll("A",!1);He("hour","h");We("hour",13);function ul(t,e){return e._meridiemParse}W("a",ul);W("A",ul);W("H",Se);W("h",Se);W("k",Se);W("HH",Se,nt);W("hh",Se,nt);W("kk",Se,nt);W("hmm",Kc);W("hmmss",el);W("Hmm",Kc);W("Hmmss",el);_e(["H","HH"],Le);_e(["k","kk"],function(t,e,n){var i=te(t);e[Le]=i===24?0:i});_e(["a","A"],function(t,e,n){n._isPm=n._locale.isPM(t),n._meridiem=t});_e(["h","hh"],function(t,e,n){e[Le]=te(t),K(n).bigHour=!0});_e("hmm",function(t,e,n){var i=t.length-2;e[Le]=te(t.substr(0,i)),e[pt]=te(t.substr(i)),K(n).bigHour=!0});_e("hmmss",function(t,e,n){var i=t.length-4,s=t.length-2;e[Le]=te(t.substr(0,i)),e[pt]=te(t.substr(i,2)),e[zt]=te(t.substr(s)),K(n).bigHour=!0});_e("Hmm",function(t,e,n){var i=t.length-2;e[Le]=te(t.substr(0,i)),e[pt]=te(t.substr(i))});_e("Hmmss",function(t,e,n){var i=t.length-4,s=t.length-2;e[Le]=te(t.substr(0,i)),e[pt]=te(t.substr(i,2)),e[zt]=te(t.substr(s))});function dh(t){return(t+"").toLowerCase().charAt(0)==="p"}var fh=/[ap]\.?m?\.?/i,hh=Kn("Hours",!0);function ph(t,e,n){return t>11?n?"pm":"PM":n?"am":"AM"}var dl={calendar:nf,longDateFormat:af,invalidDate:lf,ordinal:df,dayOfMonthOrdinalParse:ff,relativeTime:pf,months:Mf,monthsShort:tl,week:Hf,weekdays:qf,weekdaysMin:Vf,weekdaysShort:cl,meridiemParse:fh},Te={},hi={},Ti;function mh(t,e){var n,i=Math.min(t.length,e.length);for(n=0;n<i;n+=1)if(t[n]!==e[n])return n;return i}function Ba(t){return t&&t.toLowerCase().replace("_","-")}function gh(t){for(var e=0,n,i,s,a;e<t.length;){for(a=Ba(t[e]).split("-"),n=a.length,i=Ba(t[e+1]),i=i?i.split("-"):null;n>0;){if(s=zr(a.slice(0,n).join("-")),s)return s;if(i&&i.length>=n&&mh(a,i)>=n-1)break;n--}e++}return Ti}function _h(t){return t.match("^[^/\\\\]*$")!=null}function zr(t){var e=null,n;if(Te[t]===void 0&&typeof module<"u"&&module&&module.exports&&_h(t))try{e=Ti._abbr,n=require,n("./locale/"+t),tn(e)}catch{Te[t]=null}return Te[t]}function tn(t,e){var n;return t&&(Qe(e)?n=Zt(t):n=Io(t,e),n&&(Ti=n)),Ti._abbr}function Io(t,e){if(e!==null){var n,i=dl;if(e.abbr=t,Te[t]!=null)Zc("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),i=Te[t]._config;else if(e.parentLocale!=null)if(Te[e.parentLocale]!=null)i=Te[e.parentLocale]._config;else if(n=zr(e.parentLocale),n!=null)i=n._config;else return hi[e.parentLocale]||(hi[e.parentLocale]=[]),hi[e.parentLocale].push({name:t,config:e}),null;return Te[t]=new vo(Zs(i,e)),hi[t]&&hi[t].forEach(function(s){Io(s.name,s.config)}),tn(t),Te[t]}else return delete Te[t],null}function yh(t,e){if(e!=null){var n,i,s=dl;Te[t]!=null&&Te[t].parentLocale!=null?Te[t].set(Zs(Te[t]._config,e)):(i=zr(t),i!=null&&(s=i._config),e=Zs(s,e),i==null&&(e.abbr=t),n=new vo(e),n.parentLocale=Te[t],Te[t]=n),tn(t)}else Te[t]!=null&&(Te[t].parentLocale!=null?(Te[t]=Te[t].parentLocale,t===tn()&&tn(t)):Te[t]!=null&&delete Te[t]);return Te[t]}function Zt(t){var e;if(t&&t._locale&&t._locale._abbr&&(t=t._locale._abbr),!t)return Ti;if(!_t(t)){if(e=zr(t),e)return e;t=[t]}return gh(t)}function bh(){return qs(Te)}function Do(t){var e,n=t._a;return n&&K(t).overflow===-2&&(e=n[Wt]<0||n[Wt]>11?Wt:n[kt]<1||n[kt]>Wr(n[Fe],n[Wt])?kt:n[Le]<0||n[Le]>24||n[Le]===24&&(n[pt]!==0||n[zt]!==0||n[gn]!==0)?Le:n[pt]<0||n[pt]>59?pt:n[zt]<0||n[zt]>59?zt:n[gn]<0||n[gn]>999?gn:-1,K(t)._overflowDayOfYear&&(e<Fe||e>kt)&&(e=kt),K(t)._overflowWeeks&&e===-1&&(e=Ef),K(t)._overflowWeekday&&e===-1&&(e=Tf),K(t).overflow=e),t}var xh=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,vh=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,wh=/Z|[+-]\d\d(?::?\d\d)?/,ar=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/],["YYYYMM",/\d{6}/,!1],["YYYY",/\d{4}/,!1]],Cs=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],Sh=/^\/?Date\((-?\d+)/i,Ch=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,Eh={UT:0,GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function fl(t){var e,n,i=t._i,s=xh.exec(i)||vh.exec(i),a,d,m,g,v=ar.length,C=Cs.length;if(s){for(K(t).iso=!0,e=0,n=v;e<n;e++)if(ar[e][1].exec(s[1])){d=ar[e][0],a=ar[e][2]!==!1;break}if(d==null){t._isValid=!1;return}if(s[3]){for(e=0,n=C;e<n;e++)if(Cs[e][1].exec(s[3])){m=(s[2]||" ")+Cs[e][0];break}if(m==null){t._isValid=!1;return}}if(!a&&m!=null){t._isValid=!1;return}if(s[4])if(wh.exec(s[4]))g="Z";else{t._isValid=!1;return}t._f=d+(m||"")+(g||""),Ao(t)}else t._isValid=!1}function Th(t,e,n,i,s,a){var d=[kh(t),tl.indexOf(e),parseInt(n,10),parseInt(i,10),parseInt(s,10)];return a&&d.push(parseInt(a,10)),d}function kh(t){var e=parseInt(t,10);return e<=49?2e3+e:e<=999?1900+e:e}function Mh(t){return t.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")}function Ih(t,e,n){if(t){var i=cl.indexOf(t),s=new Date(e[0],e[1],e[2]).getDay();if(i!==s)return K(n).weekdayMismatch=!0,n._isValid=!1,!1}return!0}function Dh(t,e,n){if(t)return Eh[t];if(e)return 0;var i=parseInt(n,10),s=i%100,a=(i-s)/100;return a*60+s}function hl(t){var e=Ch.exec(Mh(t._i)),n;if(e){if(n=Th(e[4],e[3],e[2],e[5],e[6],e[7]),!Ih(e[1],n,t))return;t._a=n,t._tzm=Dh(e[8],e[9],e[10]),t._d=Ci.apply(null,t._a),t._d.setUTCMinutes(t._d.getUTCMinutes()-t._tzm),K(t).rfc2822=!0}else t._isValid=!1}function Ph(t){var e=Sh.exec(t._i);if(e!==null){t._d=new Date(+e[1]);return}if(fl(t),t._isValid===!1)delete t._isValid;else return;if(hl(t),t._isValid===!1)delete t._isValid;else return;t._strict?t._isValid=!1:j.createFromInputFallback(t)}j.createFromInputFallback=lt("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(t){t._d=new Date(t._i+(t._useUTC?" UTC":""))});function Nn(t,e,n){return t??e??n}function Ah(t){var e=new Date(j.now());return t._useUTC?[e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate()]:[e.getFullYear(),e.getMonth(),e.getDate()]}function Po(t){var e,n,i=[],s,a,d;if(!t._d){for(s=Ah(t),t._w&&t._a[kt]==null&&t._a[Wt]==null&&Nh(t),t._dayOfYear!=null&&(d=Nn(t._a[Fe],s[Fe]),(t._dayOfYear>xi(d)||t._dayOfYear===0)&&(K(t)._overflowDayOfYear=!0),n=Ci(d,0,t._dayOfYear),t._a[Wt]=n.getUTCMonth(),t._a[kt]=n.getUTCDate()),e=0;e<3&&t._a[e]==null;++e)t._a[e]=i[e]=s[e];for(;e<7;e++)t._a[e]=i[e]=t._a[e]==null?e===2?1:0:t._a[e];t._a[Le]===24&&t._a[pt]===0&&t._a[zt]===0&&t._a[gn]===0&&(t._nextDay=!0,t._a[Le]=0),t._d=(t._useUTC?Ci:$f).apply(null,i),a=t._useUTC?t._d.getUTCDay():t._d.getDay(),t._tzm!=null&&t._d.setUTCMinutes(t._d.getUTCMinutes()-t._tzm),t._nextDay&&(t._a[Le]=24),t._w&&typeof t._w.d<"u"&&t._w.d!==a&&(K(t).weekdayMismatch=!0)}}function Nh(t){var e,n,i,s,a,d,m,g,v;e=t._w,e.GG!=null||e.W!=null||e.E!=null?(a=1,d=4,n=Nn(e.GG,t._a[Fe],Ei(we(),1,4).year),i=Nn(e.W,1),s=Nn(e.E,1),(s<1||s>7)&&(g=!0)):(a=t._locale._week.dow,d=t._locale._week.doy,v=Ei(we(),a,d),n=Nn(e.gg,t._a[Fe],v.year),i=Nn(e.w,v.week),e.d!=null?(s=e.d,(s<0||s>6)&&(g=!0)):e.e!=null?(s=e.e+a,(e.e<0||e.e>6)&&(g=!0)):s=a),i<1||i>Bt(n,a,d)?K(t)._overflowWeeks=!0:g!=null?K(t)._overflowWeekday=!0:(m=al(n,i,s,a,d),t._a[Fe]=m.year,t._dayOfYear=m.dayOfYear)}j.ISO_8601=function(){};j.RFC_2822=function(){};function Ao(t){if(t._f===j.ISO_8601){fl(t);return}if(t._f===j.RFC_2822){hl(t);return}t._a=[],K(t).empty=!0;var e=""+t._i,n,i,s,a,d,m=e.length,g=0,v,C;for(s=qc(t._f,t._locale).match(wo)||[],C=s.length,n=0;n<C;n++)a=s[n],i=(e.match(wf(a,t))||[])[0],i&&(d=e.substr(0,e.indexOf(i)),d.length>0&&K(t).unusedInput.push(d),e=e.slice(e.indexOf(i)+i.length),g+=i.length),Yn[a]?(i?K(t).empty=!1:K(t).unusedTokens.push(a),Cf(a,i,t)):t._strict&&!i&&K(t).unusedTokens.push(a);K(t).charsLeftOver=m-g,e.length>0&&K(t).unusedInput.push(e),t._a[Le]<=12&&K(t).bigHour===!0&&t._a[Le]>0&&(K(t).bigHour=void 0),K(t).parsedDateParts=t._a.slice(0),K(t).meridiem=t._meridiem,t._a[Le]=Rh(t._locale,t._a[Le],t._meridiem),v=K(t).era,v!==null&&(t._a[Fe]=t._locale.erasConvertYear(v,t._a[Fe])),Po(t),Do(t)}function Rh(t,e,n){var i;return n==null?e:t.meridiemHour!=null?t.meridiemHour(e,n):(t.isPM!=null&&(i=t.isPM(n),i&&e<12&&(e+=12),!i&&e===12&&(e=0)),e)}function Lh(t){var e,n,i,s,a,d,m=!1,g=t._f.length;if(g===0){K(t).invalidFormat=!0,t._d=new Date(NaN);return}for(s=0;s<g;s++)a=0,d=!1,e=xo({},t),t._useUTC!=null&&(e._useUTC=t._useUTC),e._f=t._f[s],Ao(e),bo(e)&&(d=!0),a+=K(e).charsLeftOver,a+=K(e).unusedTokens.length*10,K(e).score=a,m?a<i&&(i=a,n=e):(i==null||a<i||d)&&(i=a,n=e,d&&(m=!0));Kt(t,n||e)}function Oh(t){if(!t._d){var e=So(t._i),n=e.day===void 0?e.date:e.day;t._a=Uc([e.year,e.month,n,e.hour,e.minute,e.second,e.millisecond],function(i){return i&&parseInt(i,10)}),Po(t)}}function Yh(t){var e=new $i(Do(pl(t)));return e._nextDay&&(e.add(1,"d"),e._nextDay=void 0),e}function pl(t){var e=t._i,n=t._f;return t._locale=t._locale||Zt(t._l),e===null||n===void 0&&e===""?Lr({nullInput:!0}):(typeof e=="string"&&(t._i=e=t._locale.preparse(e)),yt(e)?new $i(Do(e)):(ji(e)?t._d=e:_t(n)?Lh(t):n?Ao(t):jh(t),bo(t)||(t._d=null),t))}function jh(t){var e=t._i;Qe(e)?t._d=new Date(j.now()):ji(e)?t._d=new Date(e.valueOf()):typeof e=="string"?Ph(t):_t(e)?(t._a=Uc(e.slice(0),function(n){return parseInt(n,10)}),Po(t)):_n(e)?Oh(t):Gt(e)?t._d=new Date(e):j.createFromInputFallback(t)}function ml(t,e,n,i,s){var a={};return(e===!0||e===!1)&&(i=e,e=void 0),(n===!0||n===!1)&&(i=n,n=void 0),(_n(t)&&yo(t)||_t(t)&&t.length===0)&&(t=void 0),a._isAMomentObject=!0,a._useUTC=a._isUTC=s,a._l=n,a._i=t,a._f=e,a._strict=i,Yh(a)}function we(t,e,n,i){return ml(t,e,n,i,!1)}var $h=lt("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var t=we.apply(null,arguments);return this.isValid()&&t.isValid()?t<this?this:t:Lr()}),Fh=lt("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var t=we.apply(null,arguments);return this.isValid()&&t.isValid()?t>this?this:t:Lr()});function gl(t,e){var n,i;if(e.length===1&&_t(e[0])&&(e=e[0]),!e.length)return we();for(n=e[0],i=1;i<e.length;++i)(!e[i].isValid()||e[i][t](n))&&(n=e[i]);return n}function Hh(){var t=[].slice.call(arguments,0);return gl("isBefore",t)}function Wh(){var t=[].slice.call(arguments,0);return gl("isAfter",t)}var zh=function(){return Date.now?Date.now():+new Date},pi=["year","quarter","month","week","day","hour","minute","second","millisecond"];function Bh(t){var e,n=!1,i,s=pi.length;for(e in t)if(le(t,e)&&!(Ie.call(pi,e)!==-1&&(t[e]==null||!isNaN(t[e]))))return!1;for(i=0;i<s;++i)if(t[pi[i]]){if(n)return!1;parseFloat(t[pi[i]])!==te(t[pi[i]])&&(n=!0)}return!0}function Uh(){return this._isValid}function Gh(){return bt(NaN)}function Br(t){var e=So(t),n=e.year||0,i=e.quarter||0,s=e.month||0,a=e.week||e.isoWeek||0,d=e.day||0,m=e.hour||0,g=e.minute||0,v=e.second||0,C=e.millisecond||0;this._isValid=Bh(e),this._milliseconds=+C+v*1e3+g*6e4+m*1e3*60*60,this._days=+d+a*7,this._months=+s+i*3+n*12,this._data={},this._locale=Zt(),this._bubble()}function br(t){return t instanceof Br}function Xs(t){return t<0?Math.round(-1*t)*-1:Math.round(t)}function Zh(t,e,n){var i=Math.min(t.length,e.length),s=Math.abs(t.length-e.length),a=0,d;for(d=0;d<i;d++)(n&&t[d]!==e[d]||!n&&te(t[d])!==te(e[d]))&&a++;return a+s}function _l(t,e){Z(t,0,0,function(){var n=this.utcOffset(),i="+";return n<0&&(n=-n,i="-"),i+Mt(~~(n/60),2)+e+Mt(~~n%60,2)})}_l("Z",":");_l("ZZ","");W("Z",Hr);W("ZZ",Hr);_e(["Z","ZZ"],function(t,e,n){n._useUTC=!0,n._tzm=No(Hr,t)});var qh=/([\+\-]|\d\d)/gi;function No(t,e){var n=(e||"").match(t),i,s,a;return n===null?null:(i=n[n.length-1]||[],s=(i+"").match(qh)||["-",0,0],a=+(s[1]*60)+te(s[2]),a===0?0:s[0]==="+"?a:-a)}function Ro(t,e){var n,i;return e._isUTC?(n=e.clone(),i=(yt(t)||ji(t)?t.valueOf():we(t).valueOf())-n.valueOf(),n._d.setTime(n._d.valueOf()+i),j.updateOffset(n,!1),n):we(t).local()}function Js(t){return-Math.round(t._d.getTimezoneOffset())}j.updateOffset=function(){};function Vh(t,e,n){var i=this._offset||0,s;if(!this.isValid())return t!=null?this:NaN;if(t!=null){if(typeof t=="string"){if(t=No(Hr,t),t===null)return this}else Math.abs(t)<16&&!n&&(t=t*60);return!this._isUTC&&e&&(s=Js(this)),this._offset=t,this._isUTC=!0,s!=null&&this.add(s,"m"),i!==t&&(!e||this._changeInProgress?xl(this,bt(t-i,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,j.updateOffset(this,!0),this._changeInProgress=null)),this}else return this._isUTC?i:Js(this)}function Xh(t,e){return t!=null?(typeof t!="string"&&(t=-t),this.utcOffset(t,e),this):-this.utcOffset()}function Jh(t){return this.utcOffset(0,t)}function Qh(t){return this._isUTC&&(this.utcOffset(0,t),this._isUTC=!1,t&&this.subtract(Js(this),"m")),this}function Kh(){if(this._tzm!=null)this.utcOffset(this._tzm,!1,!0);else if(typeof this._i=="string"){var t=No(xf,this._i);t!=null?this.utcOffset(t):this.utcOffset(0,!0)}return this}function ep(t){return this.isValid()?(t=t?we(t).utcOffset():0,(this.utcOffset()-t)%60===0):!1}function tp(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function np(){if(!Qe(this._isDSTShifted))return this._isDSTShifted;var t={},e;return xo(t,this),t=pl(t),t._a?(e=t._isUTC?It(t._a):we(t._a),this._isDSTShifted=this.isValid()&&Zh(t._a,e.toArray())>0):this._isDSTShifted=!1,this._isDSTShifted}function ip(){return this.isValid()?!this._isUTC:!1}function rp(){return this.isValid()?this._isUTC:!1}function yl(){return this.isValid()?this._isUTC&&this._offset===0:!1}var sp=/^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,op=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function bt(t,e){var n=t,i=null,s,a,d;return br(t)?n={ms:t._milliseconds,d:t._days,M:t._months}:Gt(t)||!isNaN(+t)?(n={},e?n[e]=+t:n.milliseconds=+t):(i=sp.exec(t))?(s=i[1]==="-"?-1:1,n={y:0,d:te(i[kt])*s,h:te(i[Le])*s,m:te(i[pt])*s,s:te(i[zt])*s,ms:te(Xs(i[gn]*1e3))*s}):(i=op.exec(t))?(s=i[1]==="-"?-1:1,n={y:dn(i[2],s),M:dn(i[3],s),w:dn(i[4],s),d:dn(i[5],s),h:dn(i[6],s),m:dn(i[7],s),s:dn(i[8],s)}):n==null?n={}:typeof n=="object"&&("from"in n||"to"in n)&&(d=ap(we(n.from),we(n.to)),n={},n.ms=d.milliseconds,n.M=d.months),a=new Br(n),br(t)&&le(t,"_locale")&&(a._locale=t._locale),br(t)&&le(t,"_isValid")&&(a._isValid=t._isValid),a}bt.fn=Br.prototype;bt.invalid=Gh;function dn(t,e){var n=t&&parseFloat(t.replace(",","."));return(isNaN(n)?0:n)*e}function Ua(t,e){var n={};return n.months=e.month()-t.month()+(e.year()-t.year())*12,t.clone().add(n.months,"M").isAfter(e)&&--n.months,n.milliseconds=+e-+t.clone().add(n.months,"M"),n}function ap(t,e){var n;return t.isValid()&&e.isValid()?(e=Ro(e,t),t.isBefore(e)?n=Ua(t,e):(n=Ua(e,t),n.milliseconds=-n.milliseconds,n.months=-n.months),n):{milliseconds:0,months:0}}function bl(t,e){return function(n,i){var s,a;return i!==null&&!isNaN(+i)&&(Zc(e,"moment()."+e+"(period, number) is deprecated. Please use moment()."+e+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),a=n,n=i,i=a),s=bt(n,i),xl(this,s,t),this}}function xl(t,e,n,i){var s=e._milliseconds,a=Xs(e._days),d=Xs(e._months);t.isValid()&&(i=i??!0,d&&il(t,Sr(t,"Month")+d*n),a&&Xc(t,"Date",Sr(t,"Date")+a*n),s&&t._d.setTime(t._d.valueOf()+s*n),i&&j.updateOffset(t,a||d))}var cp=bl(1,"add"),lp=bl(-1,"subtract");function vl(t){return typeof t=="string"||t instanceof String}function up(t){return yt(t)||ji(t)||vl(t)||Gt(t)||fp(t)||dp(t)||t===null||t===void 0}function dp(t){var e=_n(t)&&!yo(t),n=!1,i=["years","year","y","months","month","M","days","day","d","dates","date","D","hours","hour","h","minutes","minute","m","seconds","second","s","milliseconds","millisecond","ms"],s,a,d=i.length;for(s=0;s<d;s+=1)a=i[s],n=n||le(t,a);return e&&n}function fp(t){var e=_t(t),n=!1;return e&&(n=t.filter(function(i){return!Gt(i)&&vl(t)}).length===0),e&&n}function hp(t){var e=_n(t)&&!yo(t),n=!1,i=["sameDay","nextDay","lastDay","nextWeek","lastWeek","sameElse"],s,a;for(s=0;s<i.length;s+=1)a=i[s],n=n||le(t,a);return e&&n}function pp(t,e){var n=t.diff(e,"days",!0);return n<-6?"sameElse":n<-1?"lastWeek":n<0?"lastDay":n<1?"sameDay":n<2?"nextDay":n<7?"nextWeek":"sameElse"}function mp(t,e){arguments.length===1&&(arguments[0]?up(arguments[0])?(t=arguments[0],e=void 0):hp(arguments[0])&&(e=arguments[0],t=void 0):(t=void 0,e=void 0));var n=t||we(),i=Ro(n,this).startOf("day"),s=j.calendarFormat(this,i)||"sameElse",a=e&&(Dt(e[s])?e[s].call(this,n):e[s]);return this.format(a||this.localeData().calendar(s,this,we(n)))}function gp(){return new $i(this)}function _p(t,e){var n=yt(t)?t:we(t);return this.isValid()&&n.isValid()?(e=ut(e)||"millisecond",e==="millisecond"?this.valueOf()>n.valueOf():n.valueOf()<this.clone().startOf(e).valueOf()):!1}function yp(t,e){var n=yt(t)?t:we(t);return this.isValid()&&n.isValid()?(e=ut(e)||"millisecond",e==="millisecond"?this.valueOf()<n.valueOf():this.clone().endOf(e).valueOf()<n.valueOf()):!1}function bp(t,e,n,i){var s=yt(t)?t:we(t),a=yt(e)?e:we(e);return this.isValid()&&s.isValid()&&a.isValid()?(i=i||"()",(i[0]==="("?this.isAfter(s,n):!this.isBefore(s,n))&&(i[1]===")"?this.isBefore(a,n):!this.isAfter(a,n))):!1}function xp(t,e){var n=yt(t)?t:we(t),i;return this.isValid()&&n.isValid()?(e=ut(e)||"millisecond",e==="millisecond"?this.valueOf()===n.valueOf():(i=n.valueOf(),this.clone().startOf(e).valueOf()<=i&&i<=this.clone().endOf(e).valueOf())):!1}function vp(t,e){return this.isSame(t,e)||this.isAfter(t,e)}function wp(t,e){return this.isSame(t,e)||this.isBefore(t,e)}function Sp(t,e,n){var i,s,a;if(!this.isValid())return NaN;if(i=Ro(t,this),!i.isValid())return NaN;switch(s=(i.utcOffset()-this.utcOffset())*6e4,e=ut(e),e){case"year":a=xr(this,i)/12;break;case"month":a=xr(this,i);break;case"quarter":a=xr(this,i)/3;break;case"second":a=(this-i)/1e3;break;case"minute":a=(this-i)/6e4;break;case"hour":a=(this-i)/36e5;break;case"day":a=(this-i-s)/864e5;break;case"week":a=(this-i-s)/6048e5;break;default:a=this-i}return n?a:ct(a)}function xr(t,e){if(t.date()<e.date())return-xr(e,t);var n=(e.year()-t.year())*12+(e.month()-t.month()),i=t.clone().add(n,"months"),s,a;return e-i<0?(s=t.clone().add(n-1,"months"),a=(e-i)/(i-s)):(s=t.clone().add(n+1,"months"),a=(e-i)/(s-i)),-(n+a)||0}j.defaultFormat="YYYY-MM-DDTHH:mm:ssZ";j.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";function Cp(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function Ep(t){if(!this.isValid())return null;var e=t!==!0,n=e?this.clone().utc():this;return n.year()<0||n.year()>9999?yr(n,e?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):Dt(Date.prototype.toISOString)?e?this.toDate().toISOString():new Date(this.valueOf()+this.utcOffset()*60*1e3).toISOString().replace("Z",yr(n,"Z")):yr(n,e?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")}function Tp(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var t="moment",e="",n,i,s,a;return this.isLocal()||(t=this.utcOffset()===0?"moment.utc":"moment.parseZone",e="Z"),n="["+t+'("]',i=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",s="-MM-DD[T]HH:mm:ss.SSS",a=e+'[")]',this.format(n+i+s+a)}function kp(t){t||(t=this.isUtc()?j.defaultFormatUtc:j.defaultFormat);var e=yr(this,t);return this.localeData().postformat(e)}function Mp(t,e){return this.isValid()&&(yt(t)&&t.isValid()||we(t).isValid())?bt({to:this,from:t}).locale(this.locale()).humanize(!e):this.localeData().invalidDate()}function Ip(t){return this.from(we(),t)}function Dp(t,e){return this.isValid()&&(yt(t)&&t.isValid()||we(t).isValid())?bt({from:this,to:t}).locale(this.locale()).humanize(!e):this.localeData().invalidDate()}function Pp(t){return this.to(we(),t)}function wl(t){var e;return t===void 0?this._locale._abbr:(e=Zt(t),e!=null&&(this._locale=e),this)}var Sl=lt("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(t){return t===void 0?this.localeData():this.locale(t)});function Cl(){return this._locale}var Tr=1e3,jn=60*Tr,kr=60*jn,El=(365*400+97)*24*kr;function $n(t,e){return(t%e+e)%e}function Tl(t,e,n){return t<100&&t>=0?new Date(t+400,e,n)-El:new Date(t,e,n).valueOf()}function kl(t,e,n){return t<100&&t>=0?Date.UTC(t+400,e,n)-El:Date.UTC(t,e,n)}function Ap(t){var e,n;if(t=ut(t),t===void 0||t==="millisecond"||!this.isValid())return this;switch(n=this._isUTC?kl:Tl,t){case"year":e=n(this.year(),0,1);break;case"quarter":e=n(this.year(),this.month()-this.month()%3,1);break;case"month":e=n(this.year(),this.month(),1);break;case"week":e=n(this.year(),this.month(),this.date()-this.weekday());break;case"isoWeek":e=n(this.year(),this.month(),this.date()-(this.isoWeekday()-1));break;case"day":case"date":e=n(this.year(),this.month(),this.date());break;case"hour":e=this._d.valueOf(),e-=$n(e+(this._isUTC?0:this.utcOffset()*jn),kr);break;case"minute":e=this._d.valueOf(),e-=$n(e,jn);break;case"second":e=this._d.valueOf(),e-=$n(e,Tr);break}return this._d.setTime(e),j.updateOffset(this,!0),this}function Np(t){var e,n;if(t=ut(t),t===void 0||t==="millisecond"||!this.isValid())return this;switch(n=this._isUTC?kl:Tl,t){case"year":e=n(this.year()+1,0,1)-1;break;case"quarter":e=n(this.year(),this.month()-this.month()%3+3,1)-1;break;case"month":e=n(this.year(),this.month()+1,1)-1;break;case"week":e=n(this.year(),this.month(),this.date()-this.weekday()+7)-1;break;case"isoWeek":e=n(this.year(),this.month(),this.date()-(this.isoWeekday()-1)+7)-1;break;case"day":case"date":e=n(this.year(),this.month(),this.date()+1)-1;break;case"hour":e=this._d.valueOf(),e+=kr-$n(e+(this._isUTC?0:this.utcOffset()*jn),kr)-1;break;case"minute":e=this._d.valueOf(),e+=jn-$n(e,jn)-1;break;case"second":e=this._d.valueOf(),e+=Tr-$n(e,Tr)-1;break}return this._d.setTime(e),j.updateOffset(this,!0),this}function Rp(){return this._d.valueOf()-(this._offset||0)*6e4}function Lp(){return Math.floor(this.valueOf()/1e3)}function Op(){return new Date(this.valueOf())}function Yp(){var t=this;return[t.year(),t.month(),t.date(),t.hour(),t.minute(),t.second(),t.millisecond()]}function jp(){var t=this;return{years:t.year(),months:t.month(),date:t.date(),hours:t.hours(),minutes:t.minutes(),seconds:t.seconds(),milliseconds:t.milliseconds()}}function $p(){return this.isValid()?this.toISOString():null}function Fp(){return bo(this)}function Hp(){return Kt({},K(this))}function Wp(){return K(this).overflow}function zp(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}Z("N",0,0,"eraAbbr");Z("NN",0,0,"eraAbbr");Z("NNN",0,0,"eraAbbr");Z("NNNN",0,0,"eraName");Z("NNNNN",0,0,"eraNarrow");Z("y",["y",1],"yo","eraYear");Z("y",["yy",2],0,"eraYear");Z("y",["yyy",3],0,"eraYear");Z("y",["yyyy",4],0,"eraYear");W("N",Lo);W("NN",Lo);W("NNN",Lo);W("NNNN",em);W("NNNNN",tm);_e(["N","NN","NNN","NNNN","NNNNN"],function(t,e,n,i){var s=n._locale.erasParse(t,i,n._strict);s?K(n).era=s:K(n).invalidEra=t});W("y",ei);W("yy",ei);W("yyy",ei);W("yyyy",ei);W("yo",nm);_e(["y","yy","yyy","yyyy"],Fe);_e(["yo"],function(t,e,n,i){var s;n._locale._eraYearOrdinalRegex&&(s=t.match(n._locale._eraYearOrdinalRegex)),n._locale.eraYearOrdinalParse?e[Fe]=n._locale.eraYearOrdinalParse(t,s):e[Fe]=parseInt(t,10)});function Bp(t,e){var n,i,s,a=this._eras||Zt("en")._eras;for(n=0,i=a.length;n<i;++n){switch(typeof a[n].since){case"string":s=j(a[n].since).startOf("day"),a[n].since=s.valueOf();break}switch(typeof a[n].until){case"undefined":a[n].until=1/0;break;case"string":s=j(a[n].until).startOf("day").valueOf(),a[n].until=s.valueOf();break}}return a}function Up(t,e,n){var i,s,a=this.eras(),d,m,g;for(t=t.toUpperCase(),i=0,s=a.length;i<s;++i)if(d=a[i].name.toUpperCase(),m=a[i].abbr.toUpperCase(),g=a[i].narrow.toUpperCase(),n)switch(e){case"N":case"NN":case"NNN":if(m===t)return a[i];break;case"NNNN":if(d===t)return a[i];break;case"NNNNN":if(g===t)return a[i];break}else if([d,m,g].indexOf(t)>=0)return a[i]}function Gp(t,e){var n=t.since<=t.until?1:-1;return e===void 0?j(t.since).year():j(t.since).year()+(e-t.offset)*n}function Zp(){var t,e,n,i=this.localeData().eras();for(t=0,e=i.length;t<e;++t)if(n=this.clone().startOf("day").valueOf(),i[t].since<=n&&n<=i[t].until||i[t].until<=n&&n<=i[t].since)return i[t].name;return""}function qp(){var t,e,n,i=this.localeData().eras();for(t=0,e=i.length;t<e;++t)if(n=this.clone().startOf("day").valueOf(),i[t].since<=n&&n<=i[t].until||i[t].until<=n&&n<=i[t].since)return i[t].narrow;return""}function Vp(){var t,e,n,i=this.localeData().eras();for(t=0,e=i.length;t<e;++t)if(n=this.clone().startOf("day").valueOf(),i[t].since<=n&&n<=i[t].until||i[t].until<=n&&n<=i[t].since)return i[t].abbr;return""}function Xp(){var t,e,n,i,s=this.localeData().eras();for(t=0,e=s.length;t<e;++t)if(n=s[t].since<=s[t].until?1:-1,i=this.clone().startOf("day").valueOf(),s[t].since<=i&&i<=s[t].until||s[t].until<=i&&i<=s[t].since)return(this.year()-j(s[t].since).year())*n+s[t].offset;return this.year()}function Jp(t){return le(this,"_erasNameRegex")||Oo.call(this),t?this._erasNameRegex:this._erasRegex}function Qp(t){return le(this,"_erasAbbrRegex")||Oo.call(this),t?this._erasAbbrRegex:this._erasRegex}function Kp(t){return le(this,"_erasNarrowRegex")||Oo.call(this),t?this._erasNarrowRegex:this._erasRegex}function Lo(t,e){return e.erasAbbrRegex(t)}function em(t,e){return e.erasNameRegex(t)}function tm(t,e){return e.erasNarrowRegex(t)}function nm(t,e){return e._eraYearOrdinalRegex||ei}function Oo(){var t=[],e=[],n=[],i=[],s,a,d=this.eras();for(s=0,a=d.length;s<a;++s)e.push(tt(d[s].name)),t.push(tt(d[s].abbr)),n.push(tt(d[s].narrow)),i.push(tt(d[s].name)),i.push(tt(d[s].abbr)),i.push(tt(d[s].narrow));this._erasRegex=new RegExp("^("+i.join("|")+")","i"),this._erasNameRegex=new RegExp("^("+e.join("|")+")","i"),this._erasAbbrRegex=new RegExp("^("+t.join("|")+")","i"),this._erasNarrowRegex=new RegExp("^("+n.join("|")+")","i")}Z(0,["gg",2],0,function(){return this.weekYear()%100});Z(0,["GG",2],0,function(){return this.isoWeekYear()%100});function Ur(t,e){Z(0,[t,t.length],0,e)}Ur("gggg","weekYear");Ur("ggggg","weekYear");Ur("GGGG","isoWeekYear");Ur("GGGGG","isoWeekYear");He("weekYear","gg");He("isoWeekYear","GG");We("weekYear",1);We("isoWeekYear",1);W("G",Fr);W("g",Fr);W("GG",Se,nt);W("gg",Se,nt);W("GGGG",Eo,Co);W("gggg",Eo,Co);W("GGGGG",$r,Yr);W("ggggg",$r,Yr);Hi(["gggg","ggggg","GGGG","GGGGG"],function(t,e,n,i){e[i.substr(0,2)]=te(t)});Hi(["gg","GG"],function(t,e,n,i){e[i]=j.parseTwoDigitYear(t)});function im(t){return Ml.call(this,t,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)}function rm(t){return Ml.call(this,t,this.isoWeek(),this.isoWeekday(),1,4)}function sm(){return Bt(this.year(),1,4)}function om(){return Bt(this.isoWeekYear(),1,4)}function am(){var t=this.localeData()._week;return Bt(this.year(),t.dow,t.doy)}function cm(){var t=this.localeData()._week;return Bt(this.weekYear(),t.dow,t.doy)}function Ml(t,e,n,i,s){var a;return t==null?Ei(this,i,s).year:(a=Bt(t,i,s),e>a&&(e=a),lm.call(this,t,e,n,i,s))}function lm(t,e,n,i,s){var a=al(t,e,n,i,s),d=Ci(a.year,0,a.dayOfYear);return this.year(d.getUTCFullYear()),this.month(d.getUTCMonth()),this.date(d.getUTCDate()),this}Z("Q",0,"Qo","quarter");He("quarter","Q");We("quarter",7);W("Q",Jc);_e("Q",function(t,e){e[Wt]=(te(t)-1)*3});function um(t){return t==null?Math.ceil((this.month()+1)/3):this.month((t-1)*3+this.month()%3)}Z("D",["DD",2],"Do","date");He("date","D");We("date",9);W("D",Se);W("DD",Se,nt);W("Do",function(t,e){return t?e._dayOfMonthOrdinalParse||e._ordinalParse:e._dayOfMonthOrdinalParseLenient});_e(["D","DD"],kt);_e("Do",function(t,e){e[kt]=te(t.match(Se)[0])});var Il=Kn("Date",!0);Z("DDD",["DDDD",3],"DDDo","dayOfYear");He("dayOfYear","DDD");We("dayOfYear",4);W("DDD",jr);W("DDDD",Qc);_e(["DDD","DDDD"],function(t,e,n){n._dayOfYear=te(t)});function dm(t){var e=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return t==null?e:this.add(t-e,"d")}Z("m",["mm",2],0,"minute");He("minute","m");We("minute",14);W("m",Se);W("mm",Se,nt);_e(["m","mm"],pt);var fm=Kn("Minutes",!1);Z("s",["ss",2],0,"second");He("second","s");We("second",15);W("s",Se);W("ss",Se,nt);_e(["s","ss"],zt);var hm=Kn("Seconds",!1);Z("S",0,0,function(){return~~(this.millisecond()/100)});Z(0,["SS",2],0,function(){return~~(this.millisecond()/10)});Z(0,["SSS",3],0,"millisecond");Z(0,["SSSS",4],0,function(){return this.millisecond()*10});Z(0,["SSSSS",5],0,function(){return this.millisecond()*100});Z(0,["SSSSSS",6],0,function(){return this.millisecond()*1e3});Z(0,["SSSSSSS",7],0,function(){return this.millisecond()*1e4});Z(0,["SSSSSSSS",8],0,function(){return this.millisecond()*1e5});Z(0,["SSSSSSSSS",9],0,function(){return this.millisecond()*1e6});He("millisecond","ms");We("millisecond",16);W("S",jr,Jc);W("SS",jr,nt);W("SSS",jr,Qc);var en,Dl;for(en="SSSS";en.length<=9;en+="S")W(en,ei);function pm(t,e){e[gn]=te(("0."+t)*1e3)}for(en="S";en.length<=9;en+="S")_e(en,pm);Dl=Kn("Milliseconds",!1);Z("z",0,0,"zoneAbbr");Z("zz",0,0,"zoneName");function mm(){return this._isUTC?"UTC":""}function gm(){return this._isUTC?"Coordinated Universal Time":""}var L=$i.prototype;L.add=cp;L.calendar=mp;L.clone=gp;L.diff=Sp;L.endOf=Np;L.format=kp;L.from=Mp;L.fromNow=Ip;L.to=Dp;L.toNow=Pp;L.get=yf;L.invalidAt=Wp;L.isAfter=_p;L.isBefore=yp;L.isBetween=bp;L.isSame=xp;L.isSameOrAfter=vp;L.isSameOrBefore=wp;L.isValid=Fp;L.lang=Sl;L.locale=wl;L.localeData=Cl;L.max=Fh;L.min=$h;L.parsingFlags=Hp;L.set=bf;L.startOf=Ap;L.subtract=lp;L.toArray=Yp;L.toObject=jp;L.toDate=Op;L.toISOString=Ep;L.inspect=Tp;typeof Symbol<"u"&&Symbol.for!=null&&(L[Symbol.for("nodejs.util.inspect.custom")]=function(){return"Moment<"+this.format()+">"});L.toJSON=$p;L.toString=Cp;L.unix=Lp;L.valueOf=Rp;L.creationData=zp;L.eraName=Zp;L.eraNarrow=qp;L.eraAbbr=Vp;L.eraYear=Xp;L.year=ol;L.isLeapYear=jf;L.weekYear=im;L.isoWeekYear=rm;L.quarter=L.quarters=um;L.month=rl;L.daysInMonth=Lf;L.week=L.weeks=Bf;L.isoWeek=L.isoWeeks=Uf;L.weeksInYear=am;L.weeksInWeekYear=cm;L.isoWeeksInYear=sm;L.isoWeeksInISOWeekYear=om;L.date=Il;L.day=L.days=rh;L.weekday=sh;L.isoWeekday=oh;L.dayOfYear=dm;L.hour=L.hours=hh;L.minute=L.minutes=fm;L.second=L.seconds=hm;L.millisecond=L.milliseconds=Dl;L.utcOffset=Vh;L.utc=Jh;L.local=Qh;L.parseZone=Kh;L.hasAlignedHourOffset=ep;L.isDST=tp;L.isLocal=ip;L.isUtcOffset=rp;L.isUtc=yl;L.isUTC=yl;L.zoneAbbr=mm;L.zoneName=gm;L.dates=lt("dates accessor is deprecated. Use date instead.",Il);L.months=lt("months accessor is deprecated. Use month instead",rl);L.years=lt("years accessor is deprecated. Use year instead",ol);L.zone=lt("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",Xh);L.isDSTShifted=lt("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",np);function _m(t){return we(t*1e3)}function ym(){return we.apply(null,arguments).parseZone()}function Pl(t){return t}var ue=vo.prototype;ue.calendar=rf;ue.longDateFormat=cf;ue.invalidDate=uf;ue.ordinal=hf;ue.preparse=Pl;ue.postformat=Pl;ue.relativeTime=mf;ue.pastFuture=gf;ue.set=tf;ue.eras=Bp;ue.erasParse=Up;ue.erasConvertYear=Gp;ue.erasAbbrRegex=Qp;ue.erasNameRegex=Jp;ue.erasNarrowRegex=Kp;ue.months=Pf;ue.monthsShort=Af;ue.monthsParse=Rf;ue.monthsRegex=Yf;ue.monthsShortRegex=Of;ue.week=Ff;ue.firstDayOfYear=zf;ue.firstDayOfWeek=Wf;ue.weekdays=Kf;ue.weekdaysMin=th;ue.weekdaysShort=eh;ue.weekdaysParse=ih;ue.weekdaysRegex=ah;ue.weekdaysShortRegex=ch;ue.weekdaysMinRegex=lh;ue.isPM=dh;ue.meridiem=ph;function Mr(t,e,n,i){var s=Zt(),a=It().set(i,e);return s[n](a,t)}function Al(t,e,n){if(Gt(t)&&(e=t,t=void 0),t=t||"",e!=null)return Mr(t,e,n,"month");var i,s=[];for(i=0;i<12;i++)s[i]=Mr(t,i,n,"month");return s}function Yo(t,e,n,i){typeof t=="boolean"?(Gt(e)&&(n=e,e=void 0),e=e||""):(e=t,n=e,t=!1,Gt(e)&&(n=e,e=void 0),e=e||"");var s=Zt(),a=t?s._week.dow:0,d,m=[];if(n!=null)return Mr(e,(n+a)%7,i,"day");for(d=0;d<7;d++)m[d]=Mr(e,(d+a)%7,i,"day");return m}function bm(t,e){return Al(t,e,"months")}function xm(t,e){return Al(t,e,"monthsShort")}function vm(t,e,n){return Yo(t,e,n,"weekdays")}function wm(t,e,n){return Yo(t,e,n,"weekdaysShort")}function Sm(t,e,n){return Yo(t,e,n,"weekdaysMin")}tn("en",{eras:[{since:"0001-01-01",until:1/0,offset:1,name:"Anno Domini",narrow:"AD",abbr:"AD"},{since:"0000-12-31",until:-1/0,offset:1,name:"Before Christ",narrow:"BC",abbr:"BC"}],dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(t){var e=t%10,n=te(t%100/10)===1?"th":e===1?"st":e===2?"nd":e===3?"rd":"th";return t+n}});j.lang=lt("moment.lang is deprecated. Use moment.locale instead.",tn);j.langData=lt("moment.langData is deprecated. Use moment.localeData instead.",Zt);var Lt=Math.abs;function Cm(){var t=this._data;return this._milliseconds=Lt(this._milliseconds),this._days=Lt(this._days),this._months=Lt(this._months),t.milliseconds=Lt(t.milliseconds),t.seconds=Lt(t.seconds),t.minutes=Lt(t.minutes),t.hours=Lt(t.hours),t.months=Lt(t.months),t.years=Lt(t.years),this}function Nl(t,e,n,i){var s=bt(e,n);return t._milliseconds+=i*s._milliseconds,t._days+=i*s._days,t._months+=i*s._months,t._bubble()}function Em(t,e){return Nl(this,t,e,1)}function Tm(t,e){return Nl(this,t,e,-1)}function Ga(t){return t<0?Math.floor(t):Math.ceil(t)}function km(){var t=this._milliseconds,e=this._days,n=this._months,i=this._data,s,a,d,m,g;return t>=0&&e>=0&&n>=0||t<=0&&e<=0&&n<=0||(t+=Ga(Qs(n)+e)*864e5,e=0,n=0),i.milliseconds=t%1e3,s=ct(t/1e3),i.seconds=s%60,a=ct(s/60),i.minutes=a%60,d=ct(a/60),i.hours=d%24,e+=ct(d/24),g=ct(Rl(e)),n+=g,e-=Ga(Qs(g)),m=ct(n/12),n%=12,i.days=e,i.months=n,i.years=m,this}function Rl(t){return t*4800/146097}function Qs(t){return t*146097/4800}function Mm(t){if(!this.isValid())return NaN;var e,n,i=this._milliseconds;if(t=ut(t),t==="month"||t==="quarter"||t==="year")switch(e=this._days+i/864e5,n=this._months+Rl(e),t){case"month":return n;case"quarter":return n/3;case"year":return n/12}else switch(e=this._days+Math.round(Qs(this._months)),t){case"week":return e/7+i/6048e5;case"day":return e+i/864e5;case"hour":return e*24+i/36e5;case"minute":return e*1440+i/6e4;case"second":return e*86400+i/1e3;case"millisecond":return Math.floor(e*864e5)+i;default:throw new Error("Unknown unit "+t)}}function Im(){return this.isValid()?this._milliseconds+this._days*864e5+this._months%12*2592e6+te(this._months/12)*31536e6:NaN}function qt(t){return function(){return this.as(t)}}var Dm=qt("ms"),Pm=qt("s"),Am=qt("m"),Nm=qt("h"),Rm=qt("d"),Lm=qt("w"),Om=qt("M"),Ym=qt("Q"),jm=qt("y");function $m(){return bt(this)}function Fm(t){return t=ut(t),this.isValid()?this[t+"s"]():NaN}function vn(t){return function(){return this.isValid()?this._data[t]:NaN}}var Hm=vn("milliseconds"),Wm=vn("seconds"),zm=vn("minutes"),Bm=vn("hours"),Um=vn("days"),Gm=vn("months"),Zm=vn("years");function qm(){return ct(this.days()/7)}var jt=Math.round,On={ss:44,s:45,m:45,h:22,d:26,w:null,M:11};function Vm(t,e,n,i,s){return s.relativeTime(e||1,!!n,t,i)}function Xm(t,e,n,i){var s=bt(t).abs(),a=jt(s.as("s")),d=jt(s.as("m")),m=jt(s.as("h")),g=jt(s.as("d")),v=jt(s.as("M")),C=jt(s.as("w")),S=jt(s.as("y")),I=a<=n.ss&&["s",a]||a<n.s&&["ss",a]||d<=1&&["m"]||d<n.m&&["mm",d]||m<=1&&["h"]||m<n.h&&["hh",m]||g<=1&&["d"]||g<n.d&&["dd",g];return n.w!=null&&(I=I||C<=1&&["w"]||C<n.w&&["ww",C]),I=I||v<=1&&["M"]||v<n.M&&["MM",v]||S<=1&&["y"]||["yy",S],I[2]=e,I[3]=+t>0,I[4]=i,Vm.apply(null,I)}function Jm(t){return t===void 0?jt:typeof t=="function"?(jt=t,!0):!1}function Qm(t,e){return On[t]===void 0?!1:e===void 0?On[t]:(On[t]=e,t==="s"&&(On.ss=e-1),!0)}function Km(t,e){if(!this.isValid())return this.localeData().invalidDate();var n=!1,i=On,s,a;return typeof t=="object"&&(e=t,t=!1),typeof t=="boolean"&&(n=t),typeof e=="object"&&(i=Object.assign({},On,e),e.s!=null&&e.ss==null&&(i.ss=e.s-1)),s=this.localeData(),a=Xm(this,!n,i,s),n&&(a=s.pastFuture(+this,a)),s.postformat(a)}var Es=Math.abs;function An(t){return(t>0)-(t<0)||+t}function Gr(){if(!this.isValid())return this.localeData().invalidDate();var t=Es(this._milliseconds)/1e3,e=Es(this._days),n=Es(this._months),i,s,a,d,m=this.asSeconds(),g,v,C,S;return m?(i=ct(t/60),s=ct(i/60),t%=60,i%=60,a=ct(n/12),n%=12,d=t?t.toFixed(3).replace(/\.?0+$/,""):"",g=m<0?"-":"",v=An(this._months)!==An(m)?"-":"",C=An(this._days)!==An(m)?"-":"",S=An(this._milliseconds)!==An(m)?"-":"",g+"P"+(a?v+a+"Y":"")+(n?v+n+"M":"")+(e?C+e+"D":"")+(s||i||t?"T":"")+(s?S+s+"H":"")+(i?S+i+"M":"")+(t?S+d+"S":"")):"P0D"}var ae=Br.prototype;ae.isValid=Uh;ae.abs=Cm;ae.add=Em;ae.subtract=Tm;ae.as=Mm;ae.asMilliseconds=Dm;ae.asSeconds=Pm;ae.asMinutes=Am;ae.asHours=Nm;ae.asDays=Rm;ae.asWeeks=Lm;ae.asMonths=Om;ae.asQuarters=Ym;ae.asYears=jm;ae.valueOf=Im;ae._bubble=km;ae.clone=$m;ae.get=Fm;ae.milliseconds=Hm;ae.seconds=Wm;ae.minutes=zm;ae.hours=Bm;ae.days=Um;ae.weeks=qm;ae.months=Gm;ae.years=Zm;ae.humanize=Km;ae.toISOString=Gr;ae.toString=Gr;ae.toJSON=Gr;ae.locale=wl;ae.localeData=Cl;ae.toIsoString=lt("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",Gr);ae.lang=Sl;Z("X",0,0,"unix");Z("x",0,0,"valueOf");W("x",Fr);W("X",vf);_e("X",function(t,e,n){n._d=new Date(parseFloat(t)*1e3)});_e("x",function(t,e,n){n._d=new Date(te(t))});//! moment.js
j.version="2.29.4";Kd(we);j.fn=L;j.min=Hh;j.max=Wh;j.now=zh;j.utc=It;j.unix=_m;j.months=bm;j.isDate=ji;j.locale=tn;j.invalid=Lr;j.duration=bt;j.isMoment=yt;j.weekdays=vm;j.parseZone=ym;j.localeData=Zt;j.isDuration=br;j.monthsShort=xm;j.weekdaysMin=Sm;j.defineLocale=Io;j.updateLocale=yh;j.locales=bh;j.weekdaysShort=wm;j.normalizeUnits=ut;j.relativeTimeRounding=Jm;j.relativeTimeThreshold=Qm;j.calendarFormat=pp;j.prototype=L;j.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"};//! moment.js locale configuration
var Za="ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),eg="ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),Ts=[/^ene/i,/^feb/i,/^mar/i,/^abr/i,/^may/i,/^jun/i,/^jul/i,/^ago/i,/^sep/i,/^oct/i,/^nov/i,/^dic/i],qa=/^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;j.defineLocale("es",{months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),monthsShort:function(t,e){return t?/-MMM-/.test(e)?eg[t.month()]:Za[t.month()]:Za},monthsRegex:qa,monthsShortRegex:qa,monthsStrictRegex:/^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,monthsShortStrictRegex:/^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,monthsParse:Ts,longMonthsParse:Ts,shortMonthsParse:Ts,weekdays:"domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),weekdaysShort:"dom._lun._mar._mié._jue._vie._sáb.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_sá".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY H:mm",LLLL:"dddd, D [de] MMMM [de] YYYY H:mm"},calendar:{sameDay:function(){return"[hoy a la"+(this.hours()!==1?"s":"")+"] LT"},nextDay:function(){return"[mañana a la"+(this.hours()!==1?"s":"")+"] LT"},nextWeek:function(){return"dddd [a la"+(this.hours()!==1?"s":"")+"] LT"},lastDay:function(){return"[ayer a la"+(this.hours()!==1?"s":"")+"] LT"},lastWeek:function(){return"[el] dddd [pasado a la"+(this.hours()!==1?"s":"")+"] LT"},sameElse:"L"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",ss:"%d segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un día",dd:"%d días",w:"una semana",ww:"%d semanas",M:"un mes",MM:"%d meses",y:"un año",yy:"%d años"},dayOfMonthOrdinalParse:/\d{1,2}º/,ordinal:"%dº",week:{dow:1,doy:4},invalidDate:"Fecha inválida"});//! moment.js locale configuration
j.defineLocale("pt",{months:"janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),monthsShort:"jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),weekdays:"Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split("_"),weekdaysShort:"Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),weekdaysMin:"Do_2ª_3ª_4ª_5ª_6ª_Sá".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY HH:mm",LLLL:"dddd, D [de] MMMM [de] YYYY HH:mm"},calendar:{sameDay:"[Hoje às] LT",nextDay:"[Amanhã às] LT",nextWeek:"dddd [às] LT",lastDay:"[Ontem às] LT",lastWeek:function(){return this.day()===0||this.day()===6?"[Último] dddd [às] LT":"[Última] dddd [às] LT"},sameElse:"L"},relativeTime:{future:"em %s",past:"há %s",s:"segundos",ss:"%d segundos",m:"um minuto",mm:"%d minutos",h:"uma hora",hh:"%d horas",d:"um dia",dd:"%d dias",w:"uma semana",ww:"%d semanas",M:"um mês",MM:"%d meses",y:"um ano",yy:"%d anos"},dayOfMonthOrdinalParse:/\d{1,2}º/,ordinal:"%dº",week:{dow:1,doy:4}});//! moment.js locale configuration
function Ot(t,e,n,i){var s={m:["eine Minute","einer Minute"],h:["eine Stunde","einer Stunde"],d:["ein Tag","einem Tag"],dd:[t+" Tage",t+" Tagen"],w:["eine Woche","einer Woche"],M:["ein Monat","einem Monat"],MM:[t+" Monate",t+" Monaten"],y:["ein Jahr","einem Jahr"],yy:[t+" Jahre",t+" Jahren"]};return e?s[n][0]:s[n][1]}j.defineLocale("de",{months:"Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),monthsParseExact:!0,weekdays:"Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),weekdaysShort:"So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),weekdaysMin:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd, D. MMMM YYYY HH:mm"},calendar:{sameDay:"[heute um] LT [Uhr]",sameElse:"L",nextDay:"[morgen um] LT [Uhr]",nextWeek:"dddd [um] LT [Uhr]",lastDay:"[gestern um] LT [Uhr]",lastWeek:"[letzten] dddd [um] LT [Uhr]"},relativeTime:{future:"in %s",past:"vor %s",s:"ein paar Sekunden",ss:"%d Sekunden",m:Ot,mm:"%d Minuten",h:Ot,hh:"%d Stunden",d:Ot,dd:Ot,w:Ot,ww:"%d Wochen",M:Ot,MM:Ot,y:Ot,yy:Ot},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}});//! moment.js locale configuration
j.defineLocale("it",{months:"gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),monthsShort:"gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),weekdays:"domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato".split("_"),weekdaysShort:"dom_lun_mar_mer_gio_ven_sab".split("_"),weekdaysMin:"do_lu_ma_me_gi_ve_sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:function(){return"[Oggi a"+(this.hours()>1?"lle ":this.hours()===0?" ":"ll'")+"]LT"},nextDay:function(){return"[Domani a"+(this.hours()>1?"lle ":this.hours()===0?" ":"ll'")+"]LT"},nextWeek:function(){return"dddd [a"+(this.hours()>1?"lle ":this.hours()===0?" ":"ll'")+"]LT"},lastDay:function(){return"[Ieri a"+(this.hours()>1?"lle ":this.hours()===0?" ":"ll'")+"]LT"},lastWeek:function(){switch(this.day()){case 0:return"[La scorsa] dddd [a"+(this.hours()>1?"lle ":this.hours()===0?" ":"ll'")+"]LT";default:return"[Lo scorso] dddd [a"+(this.hours()>1?"lle ":this.hours()===0?" ":"ll'")+"]LT"}},sameElse:"L"},relativeTime:{future:"tra %s",past:"%s fa",s:"alcuni secondi",ss:"%d secondi",m:"un minuto",mm:"%d minuti",h:"un'ora",hh:"%d ore",d:"un giorno",dd:"%d giorni",w:"una settimana",ww:"%d settimane",M:"un mese",MM:"%d mesi",y:"un anno",yy:"%d anni"},dayOfMonthOrdinalParse:/\d{1,2}º/,ordinal:"%dº",week:{dow:1,doy:4}});//! moment.js locale configuration
j.defineLocale("ja",{eras:[{since:"2019-05-01",offset:1,name:"令和",narrow:"㋿",abbr:"R"},{since:"1989-01-08",until:"2019-04-30",offset:1,name:"平成",narrow:"㍻",abbr:"H"},{since:"1926-12-25",until:"1989-01-07",offset:1,name:"昭和",narrow:"㍼",abbr:"S"},{since:"1912-07-30",until:"1926-12-24",offset:1,name:"大正",narrow:"㍽",abbr:"T"},{since:"1873-01-01",until:"1912-07-29",offset:6,name:"明治",narrow:"㍾",abbr:"M"},{since:"0001-01-01",until:"1873-12-31",offset:1,name:"西暦",narrow:"AD",abbr:"AD"},{since:"0000-12-31",until:-1/0,offset:1,name:"紀元前",narrow:"BC",abbr:"BC"}],eraYearOrdinalRegex:/(元|\d+)年/,eraYearOrdinalParse:function(t,e){return e[1]==="元"?1:parseInt(e[1]||t,10)},months:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),weekdays:"日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"),weekdaysShort:"日_月_火_水_木_金_土".split("_"),weekdaysMin:"日_月_火_水_木_金_土".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日 HH:mm",LLLL:"YYYY年M月D日 dddd HH:mm",l:"YYYY/MM/DD",ll:"YYYY年M月D日",lll:"YYYY年M月D日 HH:mm",llll:"YYYY年M月D日(ddd) HH:mm"},meridiemParse:/午前|午後/i,isPM:function(t){return t==="午後"},meridiem:function(t,e,n){return t<12?"午前":"午後"},calendar:{sameDay:"[今日] LT",nextDay:"[明日] LT",nextWeek:function(t){return t.week()!==this.week()?"[来週]dddd LT":"dddd LT"},lastDay:"[昨日] LT",lastWeek:function(t){return this.week()!==t.week()?"[先週]dddd LT":"dddd LT"},sameElse:"L"},dayOfMonthOrdinalParse:/\d{1,2}日/,ordinal:function(t,e){switch(e){case"y":return t===1?"元年":t+"年";case"d":case"D":case"DDD":return t+"日";default:return t}},relativeTime:{future:"%s後",past:"%s前",s:"数秒",ss:"%d秒",m:"1分",mm:"%d分",h:"1時間",hh:"%d時間",d:"1日",dd:"%d日",M:"1ヶ月",MM:"%dヶ月",y:"1年",yy:"%d年"}});//! moment.js locale configuration
var tg=/^(janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre)/i,ng=/(janv\.?|févr\.?|mars|avr\.?|mai|juin|juil\.?|août|sept\.?|oct\.?|nov\.?|déc\.?)/i,Va=/(janv\.?|févr\.?|mars|avr\.?|mai|juin|juil\.?|août|sept\.?|oct\.?|nov\.?|déc\.?|janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre)/i,ks=[/^janv/i,/^févr/i,/^mars/i,/^avr/i,/^mai/i,/^juin/i,/^juil/i,/^août/i,/^sept/i,/^oct/i,/^nov/i,/^déc/i];j.defineLocale("fr",{months:"janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),monthsShort:"janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),monthsRegex:Va,monthsShortRegex:Va,monthsStrictRegex:tg,monthsShortStrictRegex:ng,monthsParse:ks,longMonthsParse:ks,shortMonthsParse:ks,weekdays:"dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),weekdaysShort:"dim._lun._mar._mer._jeu._ven._sam.".split("_"),weekdaysMin:"di_lu_ma_me_je_ve_sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[Aujourd’hui à] LT",nextDay:"[Demain à] LT",nextWeek:"dddd [à] LT",lastDay:"[Hier à] LT",lastWeek:"dddd [dernier à] LT",sameElse:"L"},relativeTime:{future:"dans %s",past:"il y a %s",s:"quelques secondes",ss:"%d secondes",m:"une minute",mm:"%d minutes",h:"une heure",hh:"%d heures",d:"un jour",dd:"%d jours",w:"une semaine",ww:"%d semaines",M:"un mois",MM:"%d mois",y:"un an",yy:"%d ans"},dayOfMonthOrdinalParse:/\d{1,2}(er|)/,ordinal:function(t,e){switch(e){case"D":return t+(t===1?"er":"");default:case"M":case"Q":case"DDD":case"d":return t+(t===1?"er":"e");case"w":case"W":return t+(t===1?"re":"e")}},week:{dow:1,doy:4}});const Wi="https://api.vidnoz.com";let ki="",yn="";const ig=["es","pt","de","it","ja","fr"],rg=navigator.language;let vi=ig.filter(t=>rg.includes(t));vi=vi.length>0?vi:["en"];const sg=window.location.hostname,og=["pt","it","es","jp","fr","de"];let vr=og.filter(t=>sg.includes(t));vr=vr.length===0?"www":vr;let Ut=vr.toString();Ut=Ut==="ja"?"jp":Ut;const ag=Ut==="en"?"www":Ut,cg=De("gotoWebsiteBe")&&De("gotoWebsiteBe")!==""?De("gotoWebsiteBe"):ag;function Ll(t){const e=new RegExp("(^|&)"+t+"=([^&]*)(&|$)"),n=window.location.search.substr(1).match(e);return n!=null?encodeURI(n[2]):null}function jo(t,e=()=>{},n="web",i=!1,s=!0,a=null){ki=De("access_token")?De("access_token"):"",yn=De("refresh_token")?De("refresh_token"):"";const d=Wi+t.url;return new Promise((m,g)=>{const v={Authorization:"Bearer "+ki,"Request-Language":Ut,"Request-App":"ai","Is-Official":1,"X-TASK-VERSION":"2.0.0","Cache-Control":t!=null&&t.noCache?"no-cache":""};let C={origin:n,...t.data||""};i&&(v["Content-Type"]="application/json",C=JSON.stringify(C));const S=se.ajax({url:d,type:t.type||"GET",headers:v,data:C,cache:!0,async:s,timeout:3e5,xhrFields:{withCredentials:!0},xhr:()=>{const I=se.ajaxSettings.xhr();return I&&(I.onprogress=function(O){O.lengthComputable&&e(O)},I.onabort=function(O){g(O)}),I},success:function(I){I=typeof I=="string"?JSON.parse(I):I,I.code===401?yn&&yn!==""?Yl():$o():m(I)},error:function(I){g(I)},complete:function(I,O){O==="timeout"&&S.abort()}});t.cancelToken&&t.cancelToken.promise.then(()=>{g({status:"canceled"}),S.abort()}),a&&a.addEventListener("abort",I=>{S&&S.abort()})})}function Ol(t,e=()=>{},n="web"){ki=De("access_token")?De("access_token"):"";const i=Wi+t.url;return t.data.append("origin",n),new Promise((s,a)=>{const d=se.ajax({url:i,type:t.type||"GET",data:t.data||"",cache:!0,async:!0,timeout:t.timeout||3e5,processData:!1,contentType:!1,headers:{Authorization:"Bearer "+ki,"Request-Language":Ut,"Request-App":"ai","Is-Official":1},mimeType:"multipart/form-data",xhrFields:{withCredentials:!0},xhr:function(){const m=se.ajaxSettings.xhr();return m.upload&&(m.upload.onprogress=function(g){g.lengthComputable&&e(g)}),m},success:function(m){m=typeof m=="string"?JSON.parse(m):m,m.code===401?yn&&yn!==""?Yl():$o():s(m)},error:function(m){a(m)},complete:function(m,g){g==="timeout"&&d.abort()}});t.cancelToken&&t.cancelToken.promise.then(()=>{a({status:"canceled"}),d.abort()})})}function wb(t){if(typeof t!="function")throw new Error("executor must be a function");let e;this.promise=new Promise(n=>{e=n}),t(()=>{e()})}const Yl=t=>{jo({url:"/api/user/refresh-token",type:"POST",data:{refresh_token:yn}}).then(n=>{n.code===200?(Fn("access_token",n.data.access_token,30),Fn("refresh_token",n.data.refresh_token,30),location.reload()):n.code===400&&$o()})},Xa=Ll("identity"),lg=Ll("from"),Ms=De("page_name");function Sb(t){Xa&&(ki=De("access_token")?De("access_token"):"",yn=De("refresh_token")?De("refresh_token"):"",jo({url:"/api/user/identity-check",type:"POST",data:{identity:Xa}}).then(n=>{if(n.code===200){if(n.data.target_user==null)return;(n.data.current_user==null||n.data.current_user!=null&&n.data.current_user.access_token!==n.data.target_user.access_token&&lg==="email-verify")&&(Fn("access_token",n.data.target_user.access_token,30),Fn("refresh_token",n.data.target_user.refresh_token,30),Fn("loginProduct",location.origin,30))}}).then(()=>{Ms&&Ms!==""?(window.location.href=Ms+".html",Rn("page_name")):t()}))}function $o(){localStorage.clear(),Rn("access_token"),Rn("refresh_token"),Rn("loginProduct"),Rn("user_info"),Rn("gotoWebsiteBe"),window.location=`https://${cg}.vidnoz.com/`}function Ja(t="",e=""){if(!t)return;se(t).attr("title","");const n=se(t).css("max-width")!=="none"&&!!se(t).css("max-width")!=="none"?se(t).css("max-width"):se(t).css("width"),i=document.createElement("div");se(i).css({width:n,visibility:"hidden",overflow:"hidden",font:se(t).css("font"),"text-overflow":"ellipsis","white-space":"nowrap",padding:e||se(t).css("padding")}).text(t.tagName==="INPUT"?se(t).val():t.tagName==="SELECT"?se(t).find("option:selected").text():se(t).text()),se("body").append(i),i.scrollWidth>i.clientWidth&&(t.tagName==="INPUT"?se(t).attr("title",se(t).val().trim()):t.tagName==="SELECT"?se(t).attr("title",se(t).find("option:selected").text().trim()):se(t).attr("title",se(t).text().trim())),i.remove()}function Cb(t){return!!/\.(jpg|jpeg|png|pjpeg|pjp|jfif|svg)$/i.exec(t)}function Eb(t){return!!/\.(m4v|mp4|mov|webm)$/i.exec(t)}function Tb(t){return!!/\.(wav|mp3)$/i.exec(t)}function mi(t){const{iconType:e="",titleText:n="",isCancel:i="false",submitType:s="",content:a="",contentList:d="[]",isClose:m="true",submitText:g=""}=t;se("body").append(`
    <confirm-dialog
      titleText="${n}"
      contentList='${d}'
      iconType="${e}"
      isClose=${m}
      isCancel="${i}"
      submitType="${s}"
      content="${a}"
      submitText="${g}">
    </confirm-dialog>`)}function kb(t){const{text:e="",type:n="",showtime:i=3e3}=t;se("body").append(`<bottom-message text='${e}' type='${n}' showtime=${i}></bottom-message>`)}function Mb(){const t=De("access_token")?De("access_token"):"";return new Promise((e,n)=>{se.ajax({url:Wi+"/api/site/heart-beat",cache:!0,headers:{Authorization:"Bearer "+t,"Request-Language":Ut},async:!0,timeout:3e5,success:function(i){e({status:!0})},error:function(i){e({status:!1,error:i})}})})}function Ib(t){t=t<0?0:t;let e=parseInt(t/60/60);e=e<10?"0"+e:e;let n=parseInt(t/60%60);n=n<10?"0"+n:n;let i=parseInt(t%60);return i=i<10?"0"+i:i,e.toString()==="00"?`${n.toString()}:${i.toString()}`:`${e.toString()}:${n.toString()}:${i.toString()}`}function Db(t){const e=t.split(":");let n=0,i=0;if(e.length>2){n=e[2],n=n.slice(0,1)>0?n:n.slice(1);let s=e[1];s=s.slice(0,1)>0?s:s.slice(1),s=e[1]>0?e[1]*60:e[1];let a=e[0];a=a.slice(0,1)>0?a:a.slice(1),a=e[0]>0?e[0]*60*60:e[0],i=parseInt(Number(n)+Number(s)+Number(a))}else if(e.length>1){n=e[1],n=n.slice(0,1)>0?n:n.slice(1);let s=e[0];s=s.slice(0,1)>0?s:s.slice(1),s=e[0]>0?e[0]*60:e[0],i=parseInt(Number(n)+Number(s))}return i}function Pb(t,e,n,i){t.preventDefault();const s=t.currentTarget.querySelector(`.${e}`),a=t.currentTarget.clientWidth;let d=n&&s.style.left?Number(s.style.left.replace(/px/g,"")):0,m=t.clientX-s.getBoundingClientRect().x+d,g=m*100/a;n?s.style.left=m-s.clientWidth/2+"px":s.style.width=m*100/a+"%";const v=I=>{d=n&&s.style.left?Number(s.style.left.replace(/px/g,"")):0,m=I.clientX-s.getBoundingClientRect().x+d,m=m>a?a:m<0?0:m,g=m*100/a,g=g.toFixed(2),n?s.style.left=m-s.clientWidth/2+"px":s.style.width=g+"%",i(g/100)},C=I=>{v(I)},S=I=>{window.removeEventListener("mousemove",C),window.removeEventListener("mouseup",S),i(g/100)};window.addEventListener("mousemove",C),window.addEventListener("mouseup",S)}function Ab(t){return new Promise((e,n)=>{const i=document.createElement("video");i.preload="metadata",i.src=t,i.currentTime=1,i.oncanplaythrough=function(){i.currentTime=1};let s=!1;i.onseeked=function(){if(s)return;s=!0;const a=document.createElement("canvas");a.width=i.videoWidth,a.height=i.videoHeight,a.getContext("2d").drawImage(i,0,0,a.width,a.height),a.toBlob(d=>{const m=new FormData;try{m.append("file",d,`${Qd()}.jpg`)}catch(g){n(g);return}m.append("type","thumbnail"),Ol({url:"/ai/source/upload",type:"POST",data:m}).then(g=>{g.code===200&&e({data:g.data})}).catch(g=>{n(g)})},"image/jpg")}})}function Nb(t,e="YYYY/MM/DD HH:mm"){return j.locale(vi),j.utc(t).local().format(e)}function Rb(t){return t=new Date(t),j.locale(vi),j(t).format("MMM DD, YYYY, HH:mm")}async function Lb(t,e=".jpg|.png|.svg",n=5,i=!0){if(!t.length)return;if(!await new Promise((C,S)=>{const I=new FileReader;I.readAsText(t[0]),I.onerror=function(O){I.error.name==="NotReadableError"&&(mi({titleText:"Upload failed. You don&#x27;t have the permission to open this file.",iconType:"tips",isCancel:"false",content:"Contact the file owner or an administrator to obtain permission."}),C(!1))},I.onload=function(O){C(!0)}}))return!1;const a=t[0].name,d=e.replaceAll("|",", ");if(!v(e,a))return mi({isCancel:"false",iconType:"tips",content:`${d} file sizes can&#x27;t exceed ${n}MB.`}),!1;if((t[0].size||0)/1024>n*1024)return mi({content:`${d} file sizes can&#x27;t exceed ${n}MB.`,isCancel:"false",iconType:"tips"}),!1;if(i){const C=new FormData;C.append("file",t[0]);let S="";try{const I=await Ol({url:"/ai/source/upload",type:"POST",data:C});I.code===200?S=I.data:mi({isCancel:"false",iconType:"tips",titleText:"Sorry, your image failed to upload. Please try again."})}catch{mi({isCancel:"false",iconType:"tips",titleText:"Sorry, your image failed to upload. Please try again."})}return S}return!0;function v(C,S){const I=S.toLowerCase();return!!new RegExp(`${C}$`).test(I)}}const Ob=t=>{const e=t,n=/^(?=^.{3,255}$)(http(s)?:\/\/)?(www)?(\.?[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+(\.[a-zA-Z][-a-zA-Z]{1,13})+(:\d+)*(\/\w+\.\w+)*\/*?$/;return new RegExp(n).test(e)===!0};function Yb(t){const e=t,n=document.createElement("input");n.value=e,document.body.appendChild(n),n.select(),document.execCommand("copy"),document.body.removeChild(n)}function jb(t,e){return t>e&&(t=e),t<0?0:t/e*100+"%"}function $b(t){return/^\s*$/.test(t)}function Fb({isFree:t="true",topTitle:e="",showTitle:n="",pricingType:i=""}){const s=se(`pricing-dialog[pricingType=${i}]`);s.length?s.show():se("body").append(`<pricing-dialog isFree=${t} topTitle='${e}' showTitle="${n}" pricingType="${i}" ></pricing-dialog>`)}function Hb(t){if(t<=0||!t)return"0m";const e=Math.floor(t/60),n=t%60;if(e>=1){const i=n>0?` ${n}s`:"";return`${e}m${i}`}else return`${n}s`}function ug(t="/product-list"){const e=`${Wi}${t}`;return new Promise((n,i)=>{fetch(e,{method:"GET",headers:jl()}).then(s=>s.json()).then(s=>n(s)).catch(s=>i(s))})}const jl=()=>({"Content-Type":"application/json",Authorization:"Bearer "+De("access_token")||"","Request-Language":Ut});async function dg(t={},e="/verifone-cards-pay"){const n=`${Wi}${e}`;return(await fetch(n,{method:"POST",headers:jl(),body:JSON.stringify(t)})).json()}function Fn(t,e,n){const i=new Date,s=location.hostname.includes(".vidnoz.com")?".vidnoz.com":location.hostname;i.setDate(i.getDate()+n),document.cookie=t+"="+escape(e)+(n==null?"":";expires="+i.toGMTString()+";path=/;domain="+s)}function De(t){if(document.cookie.length>0){let e=document.cookie.indexOf(t+"=");if(e!==-1){e=e+t.length+1;let n=document.cookie.indexOf(";",e);return n===-1&&(n=document.cookie.length),unescape(document.cookie.substring(e,n))}}return""}function Rn(t){Fn(t,"",-1)}function Wb(t){return new Promise((e,n)=>{const i=new Image;i.onload=function(){e({width:this.width,height:this.height})},i.onerror=function(){n(new Error(`Could not load image at ${t}`))},i.src=t})}function zb(t,e,n){const s={value:e,expiry:new Date().getTime()+n*60*1e3};localStorage.setItem(t,JSON.stringify(s))}function Bb(t){const e=localStorage.getItem(t);if(!e)return null;const n=JSON.parse(e);return new Date().getTime()>n.expiry?null:n.value}const fg=()=>navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);window.onload=function(){fg()&&(location.href="https://m.vidnoz.com/")};const hg=new Date,pg=hg.getTimezoneOffset(),Is=navigator.language||navigator.userLanguage,mg=()=>{jo({url:`/api/site/app-config?t=${new Date().getTime()}`}).then(t=>{t.code===200&&!t.data.is_in_ip_whitelist&&pg===-480&&Is!=="zh-TW"&&Is!=="zh-Hant"&&Is!=="zh-HK"&&(document.body.innerHTML='<div class="shield-page">The website is under construction.</div>',document.head.innerHTML=`
                    <style>
                          *{
                              padding:0;
                              margin:0;
                            }
                          body{
                            background-image: linear-gradient(to right, rgb(241,238,255), rgb(254,254,255));
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            width: 100vw;
                            height: 100vh;
                            overflow: hidden;
                          }
                          .shield-page{
                            font: normal normal 600 30px/30px Poppins;
                            color: #785EEE;
                          }
                          @media (max-width: 768px){
                            .shield-page{
                              font: normal normal 600 20px/20px Poppins;
                            }
                          }
                     </style>`)})};mg();const Fo=document.createElement("script");Fo.src="https://www.googletagmanager.com/gtag/js?id=G-J58LKJCDV5";Fo.async=!0;document.head.appendChild(Fo);window.dataLayer=window.dataLayer||[];function Ho(){window.dataLayer.push(arguments)}Ho("js",new Date);Ho("config","G-J58LKJCDV5");window.gtagClick=t=>{Ho("event",t)};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const wr=window,Wo=wr.ShadowRoot&&(wr.ShadyCSS===void 0||wr.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,zo=Symbol(),Qa=new WeakMap;let $l=class{constructor(e,n,i){if(this._$cssResult$=!0,i!==zo)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=n}get styleSheet(){let e=this.o;const n=this.t;if(Wo&&e===void 0){const i=n!==void 0&&n.length===1;i&&(e=Qa.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&Qa.set(n,e))}return e}toString(){return this.cssText}};const gg=t=>new $l(typeof t=="string"?t:t+"",void 0,zo),zi=(t,...e)=>{const n=t.length===1?t[0]:e.reduce((i,s,a)=>i+(d=>{if(d._$cssResult$===!0)return d.cssText;if(typeof d=="number")return d;throw Error("Value passed to 'css' function must be a 'css' function result: "+d+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[a+1],t[0]);return new $l(n,t,zo)},_g=(t,e)=>{Wo?t.adoptedStyleSheets=e.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet):e.forEach(n=>{const i=document.createElement("style"),s=wr.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=n.cssText,t.appendChild(i)})},Ka=Wo?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let n="";for(const i of e.cssRules)n+=i.cssText;return gg(n)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ds;const Ir=window,ec=Ir.trustedTypes,yg=ec?ec.emptyScript:"",tc=Ir.reactiveElementPolyfillSupport,Ks={toAttribute(t,e){switch(e){case Boolean:t=t?yg:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let n=t;switch(e){case Boolean:n=t!==null;break;case Number:n=t===null?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch{n=null}}return n}},Fl=(t,e)=>e!==t&&(e==e||t==t),Ps={attribute:!0,type:String,converter:Ks,reflect:!1,hasChanged:Fl};let Ln=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var n;this.finalize(),((n=this.h)!==null&&n!==void 0?n:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((n,i)=>{const s=this._$Ep(i,n);s!==void 0&&(this._$Ev.set(s,i),e.push(s))}),e}static createProperty(e,n=Ps){if(n.state&&(n.attribute=!1),this.finalize(),this.elementProperties.set(e,n),!n.noAccessor&&!this.prototype.hasOwnProperty(e)){const i=typeof e=="symbol"?Symbol():"__"+e,s=this.getPropertyDescriptor(e,i,n);s!==void 0&&Object.defineProperty(this.prototype,e,s)}}static getPropertyDescriptor(e,n,i){return{get(){return this[n]},set(s){const a=this[e];this[n]=s,this.requestUpdate(e,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||Ps}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const n=this.properties,i=[...Object.getOwnPropertyNames(n),...Object.getOwnPropertySymbols(n)];for(const s of i)this.createProperty(s,n[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const n=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const s of i)n.unshift(Ka(s))}else e!==void 0&&n.push(Ka(e));return n}static _$Ep(e,n){const i=n.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(n=>n(this))}addController(e){var n,i;((n=this._$ES)!==null&&n!==void 0?n:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)===null||i===void 0||i.call(e))}removeController(e){var n;(n=this._$ES)===null||n===void 0||n.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,n)=>{this.hasOwnProperty(n)&&(this._$Ei.set(n,this[n]),delete this[n])})}createRenderRoot(){var e;const n=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return _g(n,this.constructor.elementStyles),n}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(n=>{var i;return(i=n.hostConnected)===null||i===void 0?void 0:i.call(n)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(n=>{var i;return(i=n.hostDisconnected)===null||i===void 0?void 0:i.call(n)})}attributeChangedCallback(e,n,i){this._$AK(e,i)}_$EO(e,n,i=Ps){var s;const a=this.constructor._$Ep(e,i);if(a!==void 0&&i.reflect===!0){const d=(((s=i.converter)===null||s===void 0?void 0:s.toAttribute)!==void 0?i.converter:Ks).toAttribute(n,i.type);this._$El=e,d==null?this.removeAttribute(a):this.setAttribute(a,d),this._$El=null}}_$AK(e,n){var i;const s=this.constructor,a=s._$Ev.get(e);if(a!==void 0&&this._$El!==a){const d=s.getPropertyOptions(a),m=typeof d.converter=="function"?{fromAttribute:d.converter}:((i=d.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?d.converter:Ks;this._$El=a,this[a]=m.fromAttribute(n,d.type),this._$El=null}}requestUpdate(e,n,i){let s=!0;e!==void 0&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||Fl)(this[e],n)?(this._$AL.has(e)||this._$AL.set(e,n),i.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(n){Promise.reject(n)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((s,a)=>this[a]=s),this._$Ei=void 0);let n=!1;const i=this._$AL;try{n=this.shouldUpdate(i),n?(this.willUpdate(i),(e=this._$ES)===null||e===void 0||e.forEach(s=>{var a;return(a=s.hostUpdate)===null||a===void 0?void 0:a.call(s)}),this.update(i)):this._$Ek()}catch(s){throw n=!1,this._$Ek(),s}n&&this._$AE(i)}willUpdate(e){}_$AE(e){var n;(n=this._$ES)===null||n===void 0||n.forEach(i=>{var s;return(s=i.hostUpdated)===null||s===void 0?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((n,i)=>this._$EO(i,this[i],n)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};Ln.finalized=!0,Ln.elementProperties=new Map,Ln.elementStyles=[],Ln.shadowRootOptions={mode:"open"},tc==null||tc({ReactiveElement:Ln}),((Ds=Ir.reactiveElementVersions)!==null&&Ds!==void 0?Ds:Ir.reactiveElementVersions=[]).push("1.6.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var As;const Dr=window,Zn=Dr.trustedTypes,nc=Zn?Zn.createPolicy("lit-html",{createHTML:t=>t}):void 0,Pr="$lit$",Ht=`lit$${(Math.random()+"").slice(9)}$`,Bo="?"+Ht,bg=`<${Bo}>`,qn=document,Mi=()=>qn.createComment(""),Ii=t=>t===null||typeof t!="object"&&typeof t!="function",Hl=Array.isArray,Wl=t=>Hl(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",Ns=`[ 	
\f\r]`,gi=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ic=/-->/g,rc=/>/g,fn=RegExp(`>|${Ns}(?:([^\\s"'>=/]+)(${Ns}*=${Ns}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),sc=/'/g,oc=/"/g,zl=/^(?:script|style|textarea|title)$/i,xg=t=>(e,...n)=>({_$litType$:t,strings:e,values:n}),$e=xg(1),Vn=Symbol.for("lit-noChange"),Pe=Symbol.for("lit-nothing"),ac=new WeakMap,Hn=qn.createTreeWalker(qn,129,null,!1),Bl=(t,e)=>{const n=t.length-1,i=[];let s,a=e===2?"<svg>":"",d=gi;for(let g=0;g<n;g++){const v=t[g];let C,S,I=-1,O=0;for(;O<v.length&&(d.lastIndex=O,S=d.exec(v),S!==null);)O=d.lastIndex,d===gi?S[1]==="!--"?d=ic:S[1]!==void 0?d=rc:S[2]!==void 0?(zl.test(S[2])&&(s=RegExp("</"+S[2],"g")),d=fn):S[3]!==void 0&&(d=fn):d===fn?S[0]===">"?(d=s??gi,I=-1):S[1]===void 0?I=-2:(I=d.lastIndex-S[2].length,C=S[1],d=S[3]===void 0?fn:S[3]==='"'?oc:sc):d===oc||d===sc?d=fn:d===ic||d===rc?d=gi:(d=fn,s=void 0);const A=d===fn&&t[g+1].startsWith("/>")?" ":"";a+=d===gi?v+bg:I>=0?(i.push(C),v.slice(0,I)+Pr+v.slice(I)+Ht+A):v+Ht+(I===-2?(i.push(void 0),g):A)}const m=a+(t[n]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[nc!==void 0?nc.createHTML(m):m,i]};class Di{constructor({strings:e,_$litType$:n},i){let s;this.parts=[];let a=0,d=0;const m=e.length-1,g=this.parts,[v,C]=Bl(e,n);if(this.el=Di.createElement(v,i),Hn.currentNode=this.el.content,n===2){const S=this.el.content,I=S.firstChild;I.remove(),S.append(...I.childNodes)}for(;(s=Hn.nextNode())!==null&&g.length<m;){if(s.nodeType===1){if(s.hasAttributes()){const S=[];for(const I of s.getAttributeNames())if(I.endsWith(Pr)||I.startsWith(Ht)){const O=C[d++];if(S.push(I),O!==void 0){const A=s.getAttribute(O.toLowerCase()+Pr).split(Ht),$=/([.?@])?(.*)/.exec(O);g.push({type:1,index:a,name:$[2],strings:A,ctor:$[1]==="."?Gl:$[1]==="?"?Zl:$[1]==="@"?ql:Bi})}else g.push({type:6,index:a})}for(const I of S)s.removeAttribute(I)}if(zl.test(s.tagName)){const S=s.textContent.split(Ht),I=S.length-1;if(I>0){s.textContent=Zn?Zn.emptyScript:"";for(let O=0;O<I;O++)s.append(S[O],Mi()),Hn.nextNode(),g.push({type:2,index:++a});s.append(S[I],Mi())}}}else if(s.nodeType===8)if(s.data===Bo)g.push({type:2,index:a});else{let S=-1;for(;(S=s.data.indexOf(Ht,S+1))!==-1;)g.push({type:7,index:a}),S+=Ht.length-1}a++}}static createElement(e,n){const i=qn.createElement("template");return i.innerHTML=e,i}}function xn(t,e,n=t,i){var s,a,d,m;if(e===Vn)return e;let g=i!==void 0?(s=n._$Co)===null||s===void 0?void 0:s[i]:n._$Cl;const v=Ii(e)?void 0:e._$litDirective$;return(g==null?void 0:g.constructor)!==v&&((a=g==null?void 0:g._$AO)===null||a===void 0||a.call(g,!1),v===void 0?g=void 0:(g=new v(t),g._$AT(t,n,i)),i!==void 0?((d=(m=n)._$Co)!==null&&d!==void 0?d:m._$Co=[])[i]=g:n._$Cl=g),g!==void 0&&(e=xn(t,g._$AS(t,e.values),g,i)),e}class Ul{constructor(e,n){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var n;const{el:{content:i},parts:s}=this._$AD,a=((n=e==null?void 0:e.creationScope)!==null&&n!==void 0?n:qn).importNode(i,!0);Hn.currentNode=a;let d=Hn.nextNode(),m=0,g=0,v=s[0];for(;v!==void 0;){if(m===v.index){let C;v.type===2?C=new ti(d,d.nextSibling,this,e):v.type===1?C=new v.ctor(d,v.name,v.strings,this,e):v.type===6&&(C=new Vl(d,this,e)),this._$AV.push(C),v=s[++g]}m!==(v==null?void 0:v.index)&&(d=Hn.nextNode(),m++)}return a}v(e){let n=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,n),n+=i.strings.length-2):i._$AI(e[n])),n++}}class ti{constructor(e,n,i,s){var a;this.type=2,this._$AH=Pe,this._$AN=void 0,this._$AA=e,this._$AB=n,this._$AM=i,this.options=s,this._$Cp=(a=s==null?void 0:s.isConnected)===null||a===void 0||a}get _$AU(){var e,n;return(n=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&n!==void 0?n:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=n.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,n=this){e=xn(this,e,n),Ii(e)?e===Pe||e==null||e===""?(this._$AH!==Pe&&this._$AR(),this._$AH=Pe):e!==this._$AH&&e!==Vn&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):Wl(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==Pe&&Ii(this._$AH)?this._$AA.nextSibling.data=e:this.$(qn.createTextNode(e)),this._$AH=e}g(e){var n;const{values:i,_$litType$:s}=e,a=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=Di.createElement(s.h,this.options)),s);if(((n=this._$AH)===null||n===void 0?void 0:n._$AD)===a)this._$AH.v(i);else{const d=new Ul(a,this),m=d.u(this.options);d.v(i),this.$(m),this._$AH=d}}_$AC(e){let n=ac.get(e.strings);return n===void 0&&ac.set(e.strings,n=new Di(e)),n}T(e){Hl(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let i,s=0;for(const a of e)s===n.length?n.push(i=new ti(this.k(Mi()),this.k(Mi()),this,this.options)):i=n[s],i._$AI(a),s++;s<n.length&&(this._$AR(i&&i._$AB.nextSibling,s),n.length=s)}_$AR(e=this._$AA.nextSibling,n){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,n);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var n;this._$AM===void 0&&(this._$Cp=e,(n=this._$AP)===null||n===void 0||n.call(this,e))}}class Bi{constructor(e,n,i,s,a){this.type=1,this._$AH=Pe,this._$AN=void 0,this.element=e,this.name=n,this._$AM=s,this.options=a,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=Pe}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,n=this,i,s){const a=this.strings;let d=!1;if(a===void 0)e=xn(this,e,n,0),d=!Ii(e)||e!==this._$AH&&e!==Vn,d&&(this._$AH=e);else{const m=e;let g,v;for(e=a[0],g=0;g<a.length-1;g++)v=xn(this,m[i+g],n,g),v===Vn&&(v=this._$AH[g]),d||(d=!Ii(v)||v!==this._$AH[g]),v===Pe?e=Pe:e!==Pe&&(e+=(v??"")+a[g+1]),this._$AH[g]=v}d&&!s&&this.j(e)}j(e){e===Pe?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Gl extends Bi{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Pe?void 0:e}}const vg=Zn?Zn.emptyScript:"";class Zl extends Bi{constructor(){super(...arguments),this.type=4}j(e){e&&e!==Pe?this.element.setAttribute(this.name,vg):this.element.removeAttribute(this.name)}}class ql extends Bi{constructor(e,n,i,s,a){super(e,n,i,s,a),this.type=5}_$AI(e,n=this){var i;if((e=(i=xn(this,e,n,0))!==null&&i!==void 0?i:Pe)===Vn)return;const s=this._$AH,a=e===Pe&&s!==Pe||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,d=e!==Pe&&(s===Pe||a);a&&this.element.removeEventListener(this.name,this,s),d&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var n,i;typeof this._$AH=="function"?this._$AH.call((i=(n=this.options)===null||n===void 0?void 0:n.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}}class Vl{constructor(e,n,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=n,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){xn(this,e)}}const wg={O:Pr,P:Ht,A:Bo,C:1,M:Bl,L:Ul,D:Wl,R:xn,I:ti,V:Bi,H:Zl,N:ql,U:Gl,F:Vl},cc=Dr.litHtmlPolyfillSupport;cc==null||cc(Di,ti),((As=Dr.litHtmlVersions)!==null&&As!==void 0?As:Dr.litHtmlVersions=[]).push("2.7.3");const Sg=(t,e,n)=>{var i,s;const a=(i=n==null?void 0:n.renderBefore)!==null&&i!==void 0?i:e;let d=a._$litPart$;if(d===void 0){const m=(s=n==null?void 0:n.renderBefore)!==null&&s!==void 0?s:null;a._$litPart$=d=new ti(e.insertBefore(Mi(),m),m,void 0,n??{})}return d._$AI(t),d};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Rs,Ls;let nn=class extends Ln{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,n;const i=super.createRenderRoot();return(e=(n=this.renderOptions).renderBefore)!==null&&e!==void 0||(n.renderBefore=i.firstChild),i}update(e){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Sg(n,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return Vn}};nn.finalized=!0,nn._$litElement$=!0,(Rs=globalThis.litElementHydrateSupport)===null||Rs===void 0||Rs.call(globalThis,{LitElement:nn});const lc=globalThis.litElementPolyfillSupport;lc==null||lc({LitElement:nn});((Ls=globalThis.litElementVersions)!==null&&Ls!==void 0?Ls:globalThis.litElementVersions=[]).push("3.3.2");const Xl=zi`
  * {
    margin: 0;
    padding: 0;
  }
  ul li {
    list-style: none;
  }
  .flex {
    display: flex;
  }

  .flex-column {
    display: flex;
    flex-direction: column;
  }

  .flex-wrap {
    display: flex;
    flex-wrap: wrap;
  }

  .flex-nowrap {
    display: flex;
    flex-wrap: nowrap;
  }

  .flex-start {
    display: flex;
    justify-content: flex-start;
  }

  .flex-center {
    display: flex;
    justify-content: center;
  }

  .flex-end {
    display: flex;
    justify-content: flex-end;
  }

  .flex-between {
    display: flex;
    justify-content: space-between;
  }

  .flex-around {
    display: flex;
    justify-content: space-around;
  }

  .flex-item-start {
    display: flex;
    align-items: flex-start;
  }

  .flex-item-center {
    display: flex;
    align-items: center;
  }

  .flex-item-end {
    display: flex;
    align-items: flex-end;
  }
  .cursor-pointer {
    cursor: pointer;
  }
  .card {
    border-radius: 16px;
  }
  .see-all-more {
    font-size: 14px;
    color: #8C8C97;
  }
  object {
    pointer-events: none;
  }
  .small-loading{
    width: 100%;
    height: 100%;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font: normal normal normal 12px/16px Roboto;
    color: rgba(30, 30, 46, 1);
}

.small-loading >p{
  margin-top:35px;
}
.small-loading:before{
    content: " ";
    display: block;
    font-size: 5px;
    width: 1.6em;
    height: 1.6em;
    border-radius: 50%;
    position: relative;
    animation: mulShdSpin-white 1.1s infinite ease;
    transform: translateZ(0);
    flex-shrink: 0;
}
  .small-loading.white{
    background-color: #fff;
      &::before{
        animation: mulShdSpin-black 1.1s infinite ease;
      }
  }
  .small-loading.white:before{
    animation: mulShdSpin-black 1.1s infinite ease;
  }
  .item-loading{
  position:absolute;
  width:100%;
  height:100%;
  top:0;
  left:0;
  right: 0;
  margin: auto;
  z-index:20;
  background: linear-gradient(0.25turn, transparent, #FFF, transparent), linear-gradient(#efefef, #efefef);
  background-color: #fff;
  background-repeat: no-repeat;
  background-size: 500px 900px, 500px 900px;
  background-position: -315px 0, 0 0, 15px 140px;
  animation: loading 1.5s infinite;
  border-radius: 6px;
}
.item-loading.caption{
  width:70%;
  border-radius:20px;
}
.item-loading.describe{
  width:52%;
  border-radius:20px;
}
@keyframes loading{
  100%{
    background-position: 500px 0, 0 0, 15px 140px;
  }
}
  @keyframes flash-black {
  0% {
    background-color: #FFF2;
    box-shadow: 18px 0 #FFF2, -18px 0 #FFF;
  }
  50% {
    background-color: #FFF;
    box-shadow: 18px 0 #FFF2, -18px 0 #FFF2;
  }
  100% {
    background-color: #FFF2;
    box-shadow: 18px 0 #FFF, -18px 0 #FFF2;
  }
}
@keyframes mulShdSpin-black {
  0%,
  100% {
    box-shadow: 0em -2.6em 0em 0em #8C8C97, 1.8em -1.8em 0 0em rgba(0,0,0, 0.2), 2.5em 0em 0 0em rgba(0,0,0, 0.2), 1.75em 1.75em 0 0em rgba(0,0,0, 0.2), 0em 2.5em 0 0em rgba(0,0,0, 0.2), -1.8em 1.8em 0 0em rgba(0,0,0, 0.2), -2.6em 0em 0 0em rgba(0,0,0, 0.5), -1.8em -1.8em 0 0em rgba(0,0,0, 0.7);
  }
  12.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(0,0,0, 0.7), 1.8em -1.8em 0 0em #8C8C97, 2.5em 0em 0 0em rgba(0,0,0, 0.2), 1.75em 1.75em 0 0em rgba(0,0,0, 0.2), 0em 2.5em 0 0em rgba(0,0,0, 0.2), -1.8em 1.8em 0 0em rgba(0,0,0, 0.2), -2.6em 0em 0 0em rgba(0,0,0, 0.2), -1.8em -1.8em 0 0em rgba(0,0,0, 0.5);
  }
  25% {
    box-shadow: 0em -2.6em 0em 0em rgba(0,0,0, 0.5), 1.8em -1.8em 0 0em rgba(0,0,0, 0.7), 2.5em 0em 0 0em #8C8C97, 1.75em 1.75em 0 0em rgba(0,0,0, 0.2), 0em 2.5em 0 0em rgba(0,0,0, 0.2), -1.8em 1.8em 0 0em rgba(0,0,0, 0.2), -2.6em 0em 0 0em rgba(0,0,0, 0.2), -1.8em -1.8em 0 0em rgba(0,0,0, 0.2);
  }
  37.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(0,0,0, 0.2), 1.8em -1.8em 0 0em rgba(0,0,0, 0.5), 2.5em 0em 0 0em rgba(0,0,0, 0.7), 1.75em 1.75em 0 0em #8C8C97, 0em 2.5em 0 0em rgba(0,0,0, 0.2), -1.8em 1.8em 0 0em rgba(0,0,0, 0.2), -2.6em 0em 0 0em rgba(0,0,0, 0.2), -1.8em -1.8em 0 0em rgba(0,0,0, 0.2);
  }
  50% {
    box-shadow: 0em -2.6em 0em 0em rgba(0,0,0, 0.2), 1.8em -1.8em 0 0em rgba(0,0,0, 0.2), 2.5em 0em 0 0em rgba(0,0,0, 0.5), 1.75em 1.75em 0 0em rgba(0,0,0, 0.7), 0em 2.5em 0 0em #8C8C97, -1.8em 1.8em 0 0em rgba(0,0,0, 0.2), -2.6em 0em 0 0em rgba(0,0,0, 0.2), -1.8em -1.8em 0 0em rgba(0,0,0, 0.2);
  }
  62.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(0,0,0, 0.2), 1.8em -1.8em 0 0em rgba(0,0,0, 0.2), 2.5em 0em 0 0em rgba(0,0,0, 0.2), 1.75em 1.75em 0 0em rgba(0,0,0, 0.5), 0em 2.5em 0 0em rgba(0,0,0, 0.7), -1.8em 1.8em 0 0em #8C8C97, -2.6em 0em 0 0em rgba(0,0,0, 0.2), -1.8em -1.8em 0 0em rgba(0,0,0, 0.2);
  }
  75% {
    box-shadow: 0em -2.6em 0em 0em rgba(0,0,0, 0.2), 1.8em -1.8em 0 0em rgba(0,0,0, 0.2), 2.5em 0em 0 0em rgba(0,0,0, 0.2), 1.75em 1.75em 0 0em rgba(0,0,0, 0.2), 0em 2.5em 0 0em rgba(0,0,0, 0.5), -1.8em 1.8em 0 0em rgba(0,0,0, 0.7), -2.6em 0em 0 0em #8C8C97, -1.8em -1.8em 0 0em rgba(0,0,0, 0.2);
  }
  87.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(0,0,0, 0.2), 1.8em -1.8em 0 0em rgba(0,0,0, 0.2), 2.5em 0em 0 0em rgba(0,0,0, 0.2), 1.75em 1.75em 0 0em rgba(0,0,0, 0.2), 0em 2.5em 0 0em rgba(0,0,0, 0.2), -1.8em 1.8em 0 0em rgba(0,0,0, 0.5), -2.6em 0em 0 0em rgba(0,0,0, 0.7), -1.8em -1.8em 0 0em #8C8C97;
  }
}

@keyframes mulShdSpin-white {
  0%,
  100% {
    box-shadow: 0em -2.6em 0em 0em #ffffff, 1.8em -1.8em 0 0em rgba(255,255,255, 0.2), 2.5em 0em 0 0em rgba(255,255,255, 0.2), 1.75em 1.75em 0 0em rgba(255,255,255, 0.2), 0em 2.5em 0 0em rgba(255,255,255, 0.2), -1.8em 1.8em 0 0em rgba(255,255,255, 0.2), -2.6em 0em 0 0em rgba(255,255,255, 0.5), -1.8em -1.8em 0 0em rgba(255,255,255, 0.7);
  }
  12.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(255,255,255, 0.7), 1.8em -1.8em 0 0em #ffffff, 2.5em 0em 0 0em rgba(255,255,255, 0.2), 1.75em 1.75em 0 0em rgba(255,255,255, 0.2), 0em 2.5em 0 0em rgba(255,255,255, 0.2), -1.8em 1.8em 0 0em rgba(255,255,255, 0.2), -2.6em 0em 0 0em rgba(255,255,255, 0.2), -1.8em -1.8em 0 0em rgba(255,255,255, 0.5);
  }
  25% {
    box-shadow: 0em -2.6em 0em 0em rgba(255,255,255, 0.5), 1.8em -1.8em 0 0em rgba(255,255,255, 0.7), 2.5em 0em 0 0em #ffffff, 1.75em 1.75em 0 0em rgba(255,255,255, 0.2), 0em 2.5em 0 0em rgba(255,255,255, 0.2), -1.8em 1.8em 0 0em rgba(255,255,255, 0.2), -2.6em 0em 0 0em rgba(255,255,255, 0.2), -1.8em -1.8em 0 0em rgba(255,255,255, 0.2);
  }
  37.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(255,255,255, 0.2), 1.8em -1.8em 0 0em rgba(255,255,255, 0.5), 2.5em 0em 0 0em rgba(255,255,255, 0.7), 1.75em 1.75em 0 0em #ffffff, 0em 2.5em 0 0em rgba(255,255,255, 0.2), -1.8em 1.8em 0 0em rgba(255,255,255, 0.2), -2.6em 0em 0 0em rgba(255,255,255, 0.2), -1.8em -1.8em 0 0em rgba(255,255,255, 0.2);
  }
  50% {
    box-shadow: 0em -2.6em 0em 0em rgba(255,255,255, 0.2), 1.8em -1.8em 0 0em rgba(255,255,255, 0.2), 2.5em 0em 0 0em rgba(255,255,255, 0.5), 1.75em 1.75em 0 0em rgba(255,255,255, 0.7), 0em 2.5em 0 0em #ffffff, -1.8em 1.8em 0 0em rgba(255,255,255, 0.2), -2.6em 0em 0 0em rgba(255,255,255, 0.2), -1.8em -1.8em 0 0em rgba(255,255,255, 0.2);
  }
  62.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(255,255,255, 0.2), 1.8em -1.8em 0 0em rgba(255,255,255, 0.2), 2.5em 0em 0 0em rgba(255,255,255, 0.2), 1.75em 1.75em 0 0em rgba(255,255,255, 0.5), 0em 2.5em 0 0em rgba(255,255,255, 0.7), -1.8em 1.8em 0 0em #ffffff, -2.6em 0em 0 0em rgba(255,255,255, 0.2), -1.8em -1.8em 0 0em rgba(255,255,255, 0.2);
  }
  75% {
    box-shadow: 0em -2.6em 0em 0em rgba(255,255,255, 0.2), 1.8em -1.8em 0 0em rgba(255,255,255, 0.2), 2.5em 0em 0 0em rgba(255,255,255, 0.2), 1.75em 1.75em 0 0em rgba(255,255,255, 0.2), 0em 2.5em 0 0em rgba(255,255,255, 0.5), -1.8em 1.8em 0 0em rgba(255,255,255, 0.7), -2.6em 0em 0 0em #ffffff, -1.8em -1.8em 0 0em rgba(255,255,255, 0.2);
  }
  87.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(255,255,255, 0.2), 1.8em -1.8em 0 0em rgba(255,255,255, 0.2), 2.5em 0em 0 0em rgba(255,255,255, 0.2), 1.75em 1.75em 0 0em rgba(255,255,255, 0.2), 0em 2.5em 0 0em rgba(255,255,255, 0.2), -1.8em 1.8em 0 0em rgba(255,255,255, 0.5), -2.6em 0em 0 0em rgba(255,255,255, 0.7), -1.8em -1.8em 0 0em #ffffff;
  }
}
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
::-webkit-scrollbar-thumb {
  border-radius: 8px;
  background-color: rgba(140, 140, 151, 0.2);
}
::-webkit-scrollbar-thumb:hover{
  background: rgba(140, 140, 151, 0.5);
}
::-webkit-scrollbar-trach {
  border-radius: 0px;
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background-color: #ccc;
}
::-webkit-input-placeholder {
  color: #8c8c97;
  opacity: 0.5;
}
@-moz-document url-prefix() {
  * {
    scrollbar-width: thin;
    scrollbar-color: #e8e8ea transparent;
  }
}
`,Os=[{mime:"video/mp4",ext:"mp4",offset:4,signature:[102,116,121,112,105,115,111,109]},{mime:"video/mp4",ext:"mp4",offset:4,signature:[102,116,121,112,109,112,52]},{mime:"image/jpeg",ext:"jpeg",signature:[255,216,255]},{mime:"image/png",ext:"png",signature:[137,80,78,71,13,10,26,10]},{mime:"image/gif",ext:"gif",signature:[71,73,70,56,55,97]},{mime:"image/gif",ext:"gif",signature:[71,73,70,56,57,97]},{mime:"image/vnd.adobe.photoshop",ext:"psd",signature:[56,66,80,83]},{mime:"image/webp",ext:"webp",signature:[82,73,70,70,void 0,void 0,void 0,void 0,87,69,66,80,86,80]},{mime:"image/x-icon",ext:"ico",signature:[0,0,1,0]},{mime:"image/x-icon",ext:"cur",signature:[0,0,2,0]},{ext:"tif",mime:"image/tiff",signature:[77,77,0,42]},{ext:"tif",mime:"image/tiff",signature:[73,73,42,0]},{ext:"bpg",mime:"image/bpg",signature:[66,80,71,251]},{mime:"application/pdf",ext:"pdf",signature:[37,80,68,70,45]},{mime:"application/ogg",ext:"ogg",signature:[79,103,103,83]},{mime:"audio/midi",ext:"midi",signature:[77,84,104,100]},{mime:"audio/mpeg",ext:"mp3",signature:[73,68,51]},{ext:"flac",mime:"audio/x-flac",signature:[102,76,97,67]},{ext:"mpg",mime:"video/mpeg",signature:[0,0,1,186]},{ext:"mpg",mime:"video/mpeg",signature:[0,0,1,179]},{mime:"video/x-flv",ext:"flv",signature:[70,76,86]},{mime:"image/bmp",ext:"bmp",signature:[66,77]},{mime:"audio/aiff",ext:"aiff",signature:[70,79,82,77,void 0,void 0,void 0,void 0,65,73,70,70]},{mime:"video/vnd.avi",ext:"avi",signature:[82,73,70,70,void 0,void 0,void 0,void 0,65,86,73,32]},{mime:"video/webm",ext:"webm",signature:[26,69,223,163]},{mime:"audio/mpeg",ext:"mp3",signature:[255,251]},{mime:"audio/mpeg",ext:"mp3",signature:[255,243]},{mime:"audio/mpeg",ext:"mp3",signature:[255,242]},{mime:"audio/mpeg",ext:"mp3",signature:[255,251]},{mime:"audio/vnd.wave",ext:"wav",signature:[82,73,70,70,void 0,void 0,void 0,void 0,87,65,86,69]},{mime:"audio/qcelp",ext:"qcp",signature:[82,73,70,70,void 0,void 0,void 0,void 0,81,76,67,77]},{mime:"font/ttf",ext:"ttf",signature:[0,1,0,0]},{mime:"font/otf",ext:"otf",signature:[79,84,84,79]},{mime:"font/collection",ext:"ttcf",signature:[116,116,99,102]},{mime:"font/woff",ext:"woff",signature:[119,79,70,70]},{mime:"font/woff2",ext:"woff2",signature:[119,79,70,50]},{mime:"application/x-rar-compressed",ext:"rar",signature:[82,97,114,32,26,7,0]},{mime:"application/x-msdownload",ext:"exe",signature:[77,90]},{ext:"xz",mime:"application/x-xz",signature:[253,55,122,88,90,0]},{ext:"7z",mime:"application/x-7z-compressed",signature:[55,122,188,175,39,28]},{mime:"application/wasm",ext:"wasm",signature:[0,97,115,109]},{mime:"application/x-nintendo-nes-rom",ext:"nes",signature:[78,69,83,26]},{ext:"rpm",mime:"application/x-rpm",signature:[237,171,238,219]},{ext:"zst",mime:"application/zstd",signature:[40,181,47,253]},{ext:"alias",mime:"application/x.apple.alias",signature:[98,111,111,107,0,0,0,0,109,97,114,107,0,0,0,0]},{ext:"deb",mime:"application/x-deb",signature:[33,60,97,114,99,104,62,10]},{ext:"blend",mime:"application/x-blender",signature:[66,76,69,78,68,69,82]},{ext:"chm",mime:"application/vnd.ms-htmlhelp",signature:[73,84,83,70,3,0,0,0,96,0,0,0]},{ext:"rtf",mime:"application/rtf",signature:[123,92,114,116,102,49]},{ext:"cab",mime:"application/vnd.ms-cab-compressed",signature:[77,83,67,70]},{ext:"cab",mime:"application/vnd.ms-cab-compressed",signature:[73,83,99,40]},{ext:"crx",mime:"application/x-google-chrome-extension",signature:[67,114,50,52]},{ext:"nes",mime:"application/x-nintendo-nes-rom",signature:[78,69,83,26]},{ext:"sqlite",mime:"application/x-sqlite3",signature:[83,81,76,105,116,101,32,102,111,114,109,97,116,32,51,0]},{ext:"lz",mime:"application/x-lzip",signature:[76,90,73,80]},{ext:"pcap",mime:"application/vnd.tcpdump.pcap",signature:[212,195,178,161]},{ext:"pcap",mime:"application/vnd.tcpdump.pcap",signature:[161,178,195,212]},{mime:"text/plain",ext:"txt",signature:[239,187,191]},{mime:"text/plain",ext:"txt",signature:[254,255]},{mime:"text/plain",ext:"txt",signature:[255,254]}];function qb(t,e){window.localStorage.setItem(t,e)}function Vb(t){return window.localStorage.getItem(t)}function Xb(t,e,n="",i="mouseup",s=()=>{}){t.addEventListener(i,a=>{const d=se(e);!d.is(a.target)&&d.has(a.target).length===0&&(n&&se(n).hide(),s())})}const Cg=(t,{signature:e,offset:n=0})=>{for(let i=0,s=e.length;i<s;i++)if(t[i+n]!==e[i]&&e[i]!==void 0)return!1;return!0},Eg=(t,{start:e,end:n})=>new Promise((i,s)=>{try{const a=new FileReader;a.onload=d=>{const m=new Uint8Array(d.target.result);i(m)},a.onerror=d=>s(d),a.onabort=d=>s(d),a.readAsArrayBuffer(t.slice(e,n))}catch(a){s(a)}}),Jb=(t,e={start:0,end:32})=>Eg(t,e).then(n=>{for(let i=0,s=Os.length;i<s;i++)if(Cg(n,Os[i])){const{mime:a,ext:d}=Os[i];return{mime:a,ext:d}}return{mime:t.type,ext:""}}).catch(n=>n);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:Tg}=wg,Qb=(t,e)=>e===void 0?(t==null?void 0:t._$litType$)!==void 0:(t==null?void 0:t._$litType$)===e,kg=t=>t.strings===void 0,uc=()=>document.createComment(""),Kb=(t,e,n)=>{var i;const s=t._$AA.parentNode,a=e===void 0?t._$AB:e._$AA;if(n===void 0){const d=s.insertBefore(uc(),a),m=s.insertBefore(uc(),a);n=new Tg(d,m,t,t.options)}else{const d=n._$AB.nextSibling,m=n._$AM,g=m!==t;if(g){let v;(i=n._$AQ)===null||i===void 0||i.call(n,t),n._$AM=t,n._$AP!==void 0&&(v=t._$AU)!==m._$AU&&n._$AP(v)}if(d!==a||g){let v=n._$AA;for(;v!==d;){const C=v.nextSibling;s.insertBefore(v,a),v=C}}}return n},Mg={},ex=(t,e=Mg)=>t._$AH=e,tx=t=>t._$AH,nx=t=>{t._$AR()};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ig={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Dg=t=>(...e)=>({_$litDirective$:t,values:e});class Pg{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,n,i){this._$Ct=e,this._$AM=n,this._$Ci=i}_$AS(e,n){return this.update(e,n)}update(e,n){return this.render(...n)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const wi=(t,e)=>{var n,i;const s=t._$AN;if(s===void 0)return!1;for(const a of s)(i=(n=a)._$AO)===null||i===void 0||i.call(n,e,!1),wi(a,e);return!0},Ar=t=>{let e,n;do{if((e=t._$AM)===void 0)break;n=e._$AN,n.delete(t),t=e}while((n==null?void 0:n.size)===0)},Jl=t=>{for(let e;e=t._$AM;t=e){let n=e._$AN;if(n===void 0)e._$AN=n=new Set;else if(n.has(t))break;n.add(t),Rg(e)}};function Ag(t){this._$AN!==void 0?(Ar(this),this._$AM=t,Jl(this)):this._$AM=t}function Ng(t,e=!1,n=0){const i=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(e)if(Array.isArray(i))for(let a=n;a<i.length;a++)wi(i[a],!1),Ar(i[a]);else i!=null&&(wi(i,!1),Ar(i));else wi(this,t)}const Rg=t=>{var e,n,i,s;t.type==Ig.CHILD&&((e=(i=t)._$AP)!==null&&e!==void 0||(i._$AP=Ng),(n=(s=t)._$AQ)!==null&&n!==void 0||(s._$AQ=Ag))};class Lg extends Pg{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,n,i){super._$AT(e,n,i),Jl(this),this.isConnected=e._$AU}_$AO(e,n=!0){var i,s;e!==this.isConnected&&(this.isConnected=e,e?(i=this.reconnected)===null||i===void 0||i.call(this):(s=this.disconnected)===null||s===void 0||s.call(this)),n&&(wi(this,e),Ar(this))}setValue(e){if(kg(this._$Ct))this._$Ct._$AI(e,this);else{const n=[...this._$Ct._$AH];n[this._$Ci]=e,this._$Ct._$AI(n,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ix=()=>new Og;class Og{}const Ys=new WeakMap,rx=Dg(class extends Lg{render(t){return Pe}update(t,[e]){var n;const i=e!==this.G;return i&&this.G!==void 0&&this.ot(void 0),(i||this.rt!==this.lt)&&(this.G=e,this.ct=(n=t.options)===null||n===void 0?void 0:n.host,this.ot(this.lt=t.element)),Pe}ot(t){var e;if(typeof this.G=="function"){const n=(e=this.ct)!==null&&e!==void 0?e:globalThis;let i=Ys.get(n);i===void 0&&(i=new WeakMap,Ys.set(n,i)),i.get(this.G)!==void 0&&this.G.call(this.ct,void 0),i.set(this.G,t),t!==void 0&&this.G.call(this.ct,t)}else this.G.value=t}get rt(){var t,e,n;return typeof this.G=="function"?(e=Ys.get((t=this.ct)!==null&&t!==void 0?t:globalThis))===null||e===void 0?void 0:e.get(this.G):(n=this.G)===null||n===void 0?void 0:n.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}}),Ql=Object.prototype.toString;function Yg(t){switch(Ql.call(t)){case"[object Error]":case"[object Exception]":case"[object DOMException]":return!0;default:return Zr(t,Error)}}function Uo(t,e){return Ql.call(t)===`[object ${e}]`}function eo(t){return Uo(t,"String")}function jg(t){return t===null||typeof t!="object"&&typeof t!="function"}function Pi(t){return Uo(t,"Object")}function $g(t){return typeof Event<"u"&&Zr(t,Event)}function Fg(t){return typeof Element<"u"&&Zr(t,Element)}function Hg(t){return Uo(t,"RegExp")}function Go(t){return!!(t&&t.then&&typeof t.then=="function")}function Wg(t){return Pi(t)&&"nativeEvent"in t&&"preventDefault"in t&&"stopPropagation"in t}function zg(t){return typeof t=="number"&&t!==t}function Zr(t,e){try{return t instanceof e}catch{return!1}}function cr(t){return t&&t.Math==Math?t:void 0}const mt=typeof globalThis=="object"&&cr(globalThis)||typeof window=="object"&&cr(window)||typeof self=="object"&&cr(self)||typeof global=="object"&&cr(global)||function(){return this}()||{};function Bg(){return mt}function Zo(t,e,n){const i=n||mt,s=i.__SENTRY__=i.__SENTRY__||{};return s[t]||(s[t]=e())}const Ug=80;function Gg(t,e={}){try{let n=t;const i=5,s=[];let a=0,d=0;const m=" > ",g=m.length;let v;const C=Array.isArray(e)?e:e.keyAttrs,S=!Array.isArray(e)&&e.maxStringLength||Ug;for(;n&&a++<i&&(v=Zg(n,C),!(v==="html"||a>1&&d+s.length*g+v.length>=S));)s.push(v),d+=v.length,n=n.parentNode;return s.reverse().join(m)}catch{return"<unknown>"}}function Zg(t,e){const n=t,i=[];let s,a,d,m,g;if(!n||!n.tagName)return"";i.push(n.tagName.toLowerCase());const v=e&&e.length?e.filter(S=>n.getAttribute(S)).map(S=>[S,n.getAttribute(S)]):null;if(v&&v.length)v.forEach(S=>{i.push(`[${S[0]}="${S[1]}"]`)});else if(n.id&&i.push(`#${n.id}`),s=n.className,s&&eo(s))for(a=s.split(/\s+/),g=0;g<a.length;g++)i.push(`.${a[g]}`);const C=["aria-label","type","name","title","alt"];for(g=0;g<C.length;g++)d=C[g],m=n.getAttribute(d),m&&i.push(`[${d}="${m}"]`);return i.join("")}const qg="Sentry Logger ",to=["debug","info","warn","error","log","assert","trace"];function Kl(t){if(!("console"in mt))return t();const e=mt.console,n={};to.forEach(i=>{const s=e[i]&&e[i].__sentry_original__;i in e&&s&&(n[i]=e[i],e[i]=s)});try{return t()}finally{Object.keys(n).forEach(i=>{e[i]=n[i]})}}function dc(){let t=!1;const e={enable:()=>{t=!0},disable:()=>{t=!1}};return typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__?to.forEach(n=>{e[n]=(...i)=>{t&&Kl(()=>{mt.console[n](`${qg}[${n}]:`,...i)})}}):to.forEach(n=>{e[n]=()=>{}}),e}let fe;typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__?fe=Zo("logger",dc):fe=dc();const Vg=/^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;function Xg(t){return t==="http"||t==="https"}function eu(t,e=!1){const{host:n,path:i,pass:s,port:a,projectId:d,protocol:m,publicKey:g}=t;return`${m}://${g}${e&&s?`:${s}`:""}@${n}${a?`:${a}`:""}/${i&&`${i}/`}${d}`}function Jg(t){const e=Vg.exec(t);if(!e)return;const[n,i,s="",a,d="",m]=e.slice(1);let g="",v=m;const C=v.split("/");if(C.length>1&&(g=C.slice(0,-1).join("/"),v=C.pop()),v){const S=v.match(/^\d+/);S&&(v=S[0])}return tu({host:a,pass:s,path:g,projectId:v,port:d,protocol:n,publicKey:i})}function tu(t){return{protocol:t.protocol,publicKey:t.publicKey||"",pass:t.pass||"",host:t.host,port:t.port||"",path:t.path||"",projectId:t.projectId}}function Qg(t){if(!(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__))return!0;const{port:e,projectId:n,protocol:i}=t;return["protocol","publicKey","host","projectId"].find(d=>t[d]?!1:(fe.error(`Invalid Sentry Dsn: ${d} missing`),!0))?!1:n.match(/^\d+$/)?Xg(i)?e&&isNaN(parseInt(e,10))?(fe.error(`Invalid Sentry Dsn: Invalid port ${e}`),!1):!0:(fe.error(`Invalid Sentry Dsn: Invalid protocol ${i}`),!1):(fe.error(`Invalid Sentry Dsn: Invalid projectId ${n}`),!1)}function Kg(t){const e=typeof t=="string"?Jg(t):tu(t);if(!(!e||!Qg(e)))return e}class ht extends Error{constructor(e,n="warn"){super(e),this.message=e,this.name=new.target.prototype.constructor.name,Object.setPrototypeOf(this,new.target.prototype),this.logLevel=n}}function js(t,e=0){return typeof t!="string"||e===0||t.length<=e?t:`${t.slice(0,e)}...`}function e0(t,e,n=!1){return eo(t)?Hg(e)?e.test(t):eo(e)?n?t===e:t.includes(e):!1:!1}function qr(t,e=[],n=!1){return e.some(i=>e0(t,i,n))}function t0(t,e,n){Object.defineProperty(t,e,{value:n,writable:!0,configurable:!0})}function n0(t){return t.__sentry_original__}function i0(t){return Object.keys(t).map(e=>`${encodeURIComponent(e)}=${encodeURIComponent(t[e])}`).join("&")}function r0(t){if(Yg(t))return{message:t.message,name:t.name,stack:t.stack,...hc(t)};if($g(t)){const e={type:t.type,target:fc(t.target),currentTarget:fc(t.currentTarget),...hc(t)};return typeof CustomEvent<"u"&&Zr(t,CustomEvent)&&(e.detail=t.detail),e}else return t}function fc(t){try{return Fg(t)?Gg(t):Object.prototype.toString.call(t)}catch{return"<unknown>"}}function hc(t){if(typeof t=="object"&&t!==null){const e={};for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}else return{}}function qo(t){return no(t,new Map)}function no(t,e){if(Pi(t)){const n=e.get(t);if(n!==void 0)return n;const i={};e.set(t,i);for(const s of Object.keys(t))typeof t[s]<"u"&&(i[s]=no(t[s],e));return i}if(Array.isArray(t)){const n=e.get(t);if(n!==void 0)return n;const i=[];return e.set(t,i),t.forEach(s=>{i.push(no(s,e))}),i}return t}const $s="<anonymous>";function s0(t){try{return!t||typeof t!="function"?$s:t.name||$s}catch{return $s}}function o0(){const t=typeof WeakSet=="function",e=t?new WeakSet:[];function n(s){if(t)return e.has(s)?!0:(e.add(s),!1);for(let a=0;a<e.length;a++)if(e[a]===s)return!0;return e.push(s),!1}function i(s){if(t)e.delete(s);else for(let a=0;a<e.length;a++)if(e[a]===s){e.splice(a,1);break}}return[n,i]}function Wn(){const t=mt,e=t.crypto||t.msCrypto;if(e&&e.randomUUID)return e.randomUUID().replace(/-/g,"");const n=e&&e.getRandomValues?()=>e.getRandomValues(new Uint8Array(1))[0]:()=>Math.random()*16;return([1e7]+1e3+4e3+8e3+1e11).replace(/[018]/g,i=>(i^(n()&15)>>i/4).toString(16))}function a0(t){return t.exception&&t.exception.values?t.exception.values[0]:void 0}function pn(t){const{message:e,event_id:n}=t;if(e)return e;const i=a0(t);return i?i.type&&i.value?`${i.type}: ${i.value}`:i.type||i.value||n||"<unknown>":n||"<unknown>"}function pc(t){if(t&&t.__sentry_captured__)return!0;try{t0(t,"__sentry_captured__",!0)}catch{}return!1}function nu(t){return Array.isArray(t)?t:[t]}function c0(){return typeof __SENTRY_BROWSER_BUNDLE__<"u"&&!!__SENTRY_BROWSER_BUNDLE__}function l0(){return!c0()&&Object.prototype.toString.call(typeof process<"u"?process:0)==="[object process]"}function u0(t,e){return t.require(e)}function hn(t,e=100,n=1/0){try{return io("",t,e,n)}catch(i){return{ERROR:`**non-serializable** (${i})`}}}function io(t,e,n=1/0,i=1/0,s=o0()){const[a,d]=s;if(e==null||["number","boolean","string"].includes(typeof e)&&!zg(e))return e;const m=d0(t,e);if(!m.startsWith("[object "))return m;if(e.__sentry_skip_normalization__)return e;const g=typeof e.__sentry_override_normalization_depth__=="number"?e.__sentry_override_normalization_depth__:n;if(g===0)return m.replace("object ","");if(a(e))return"[Circular ~]";const v=e;if(v&&typeof v.toJSON=="function")try{const O=v.toJSON();return io("",O,g-1,i,s)}catch{}const C=Array.isArray(e)?[]:{};let S=0;const I=r0(e);for(const O in I){if(!Object.prototype.hasOwnProperty.call(I,O))continue;if(S>=i){C[O]="[MaxProperties ~]";break}const A=I[O];C[O]=io(O,A,g-1,i,s),S++}return d(e),C}function d0(t,e){try{if(t==="domain"&&e&&typeof e=="object"&&e._events)return"[Domain]";if(t==="domainEmitter")return"[DomainEmitter]";if(typeof global<"u"&&e===global)return"[Global]";if(typeof window<"u"&&e===window)return"[Window]";if(typeof document<"u"&&e===document)return"[Document]";if(Wg(e))return"[SyntheticEvent]";if(typeof e=="number"&&e!==e)return"[NaN]";if(typeof e=="function")return`[Function: ${s0(e)}]`;if(typeof e=="symbol")return`[${String(e)}]`;if(typeof e=="bigint")return`[BigInt: ${String(e)}]`;const n=f0(e);return/^HTML(\w*)Element$/.test(n)?`[HTMLElement: ${n}]`:`[object ${n}]`}catch(n){return`**non-serializable** (${n})`}}function f0(t){const e=Object.getPrototypeOf(t);return e?e.constructor.name:"null prototype"}var $t;(function(t){t[t.PENDING=0]="PENDING";const n=1;t[t.RESOLVED=n]="RESOLVED";const i=2;t[t.REJECTED=i]="REJECTED"})($t||($t={}));function Ai(t){return new Ui(e=>{e(t)})}function ro(t){return new Ui((e,n)=>{n(t)})}let Ui=class Yt{__init(){this._state=$t.PENDING}__init2(){this._handlers=[]}constructor(e){Yt.prototype.__init.call(this),Yt.prototype.__init2.call(this),Yt.prototype.__init3.call(this),Yt.prototype.__init4.call(this),Yt.prototype.__init5.call(this),Yt.prototype.__init6.call(this);try{e(this._resolve,this._reject)}catch(n){this._reject(n)}}then(e,n){return new Yt((i,s)=>{this._handlers.push([!1,a=>{if(!e)i(a);else try{i(e(a))}catch(d){s(d)}},a=>{if(!n)s(a);else try{i(n(a))}catch(d){s(d)}}]),this._executeHandlers()})}catch(e){return this.then(n=>n,e)}finally(e){return new Yt((n,i)=>{let s,a;return this.then(d=>{a=!1,s=d,e&&e()},d=>{a=!0,s=d,e&&e()}).then(()=>{if(a){i(s);return}n(s)})})}__init3(){this._resolve=e=>{this._setResult($t.RESOLVED,e)}}__init4(){this._reject=e=>{this._setResult($t.REJECTED,e)}}__init5(){this._setResult=(e,n)=>{if(this._state===$t.PENDING){if(Go(n)){n.then(this._resolve,this._reject);return}this._state=e,this._value=n,this._executeHandlers()}}}__init6(){this._executeHandlers=()=>{if(this._state===$t.PENDING)return;const e=this._handlers.slice();this._handlers=[],e.forEach(n=>{n[0]||(this._state===$t.RESOLVED&&n[1](this._value),this._state===$t.REJECTED&&n[2](this._value),n[0]=!0)})}}};function h0(t){const e=[];function n(){return t===void 0||e.length<t}function i(d){return e.splice(e.indexOf(d),1)[0]}function s(d){if(!n())return ro(new ht("Not adding Promise because buffer limit was reached."));const m=d();return e.indexOf(m)===-1&&e.push(m),m.then(()=>i(m)).then(null,()=>i(m).then(null,()=>{})),m}function a(d){return new Ui((m,g)=>{let v=e.length;if(!v)return m(!0);const C=setTimeout(()=>{d&&d>0&&m(!1)},d);e.forEach(S=>{Ai(S).then(()=>{--v||(clearTimeout(C),m(!0))},g)})})}return{$:e,add:s,drain:a}}const iu=Bg(),so={nowSeconds:()=>Date.now()/1e3};function p0(){const{performance:t}=iu;if(!t||!t.now)return;const e=Date.now()-t.now();return{now:()=>t.now(),timeOrigin:e}}function m0(){try{return u0(module,"perf_hooks").performance}catch{return}}const Fs=l0()?m0():p0(),mc=Fs===void 0?so:{nowSeconds:()=>(Fs.timeOrigin+Fs.now())/1e3},Vo=so.nowSeconds.bind(so),ru=mc.nowSeconds.bind(mc);(()=>{const{performance:t}=iu;if(!t||!t.now)return;const e=3600*1e3,n=t.now(),i=Date.now(),s=t.timeOrigin?Math.abs(t.timeOrigin+n-i):e,a=s<e,d=t.timing&&t.timing.navigationStart,g=typeof d=="number"?Math.abs(d+n-i):e,v=g<e;return a||v?s<=g?t.timeOrigin:d:i})();function Xo(t,e=[]){return[t,e]}function g0(t,e){const[n,i]=t;return[n,[...i,e]]}function gc(t,e){const n=t[1];for(const i of n){const s=i[0].type;if(e(i,s))return!0}return!1}function oo(t,e){return(e||new TextEncoder).encode(t)}function _0(t,e){const[n,i]=t;let s=JSON.stringify(n);function a(d){typeof s=="string"?s=typeof d=="string"?s+d:[oo(s,e),d]:s.push(typeof d=="string"?oo(d,e):d)}for(const d of i){const[m,g]=d;if(a(`
${JSON.stringify(m)}
`),typeof g=="string"||g instanceof Uint8Array)a(g);else{let v;try{v=JSON.stringify(g)}catch{v=JSON.stringify(hn(g))}a(v)}}return typeof s=="string"?s:y0(s)}function y0(t){const e=t.reduce((s,a)=>s+a.length,0),n=new Uint8Array(e);let i=0;for(const s of t)n.set(s,i),i+=s.length;return n}function b0(t,e){const n=typeof t.data=="string"?oo(t.data,e):t.data;return[qo({type:"attachment",length:n.length,filename:t.filename,content_type:t.contentType,attachment_type:t.attachmentType}),n]}const x0={session:"session",sessions:"session",attachment:"attachment",transaction:"transaction",event:"error",client_report:"internal",user_report:"default",profile:"profile",replay_event:"replay",replay_recording:"replay",check_in:"monitor"};function _c(t){return x0[t]}function su(t){if(!t||!t.sdk)return;const{name:e,version:n}=t.sdk;return{name:e,version:n}}function v0(t,e,n,i){const s=t.sdkProcessingMetadata&&t.sdkProcessingMetadata.dynamicSamplingContext;return{event_id:t.event_id,sent_at:new Date().toISOString(),...e&&{sdk:e},...!!n&&{dsn:eu(i)},...s&&{trace:qo({...s})}}}const w0=60*1e3;function S0(t,e=Date.now()){const n=parseInt(`${t}`,10);if(!isNaN(n))return n*1e3;const i=Date.parse(`${t}`);return isNaN(i)?w0:i-e}function C0(t,e){return t[e]||t.all||0}function E0(t,e,n=Date.now()){return C0(t,e)>n}function T0(t,{statusCode:e,headers:n},i=Date.now()){const s={...t},a=n&&n["x-sentry-rate-limits"],d=n&&n["retry-after"];if(a)for(const m of a.trim().split(",")){const[g,v]=m.split(":",2),C=parseInt(g,10),S=(isNaN(C)?60:C)*1e3;if(!v)s.all=i+S;else for(const I of v.split(";"))s[I]=i+S}else d?s.all=i+S0(d,i):e===429&&(s.all=i+60*1e3);return s}const ou="production";function k0(t){const e=ru(),n={sid:Wn(),init:!0,timestamp:e,started:e,duration:0,status:"ok",errors:0,ignoreDuration:!1,toJSON:()=>I0(n)};return t&&Xn(n,t),n}function Xn(t,e={}){if(e.user&&(!t.ipAddress&&e.user.ip_address&&(t.ipAddress=e.user.ip_address),!t.did&&!e.did&&(t.did=e.user.id||e.user.email||e.user.username)),t.timestamp=e.timestamp||ru(),e.ignoreDuration&&(t.ignoreDuration=e.ignoreDuration),e.sid&&(t.sid=e.sid.length===32?e.sid:Wn()),e.init!==void 0&&(t.init=e.init),!t.did&&e.did&&(t.did=`${e.did}`),typeof e.started=="number"&&(t.started=e.started),t.ignoreDuration)t.duration=void 0;else if(typeof e.duration=="number")t.duration=e.duration;else{const n=t.timestamp-t.started;t.duration=n>=0?n:0}e.release&&(t.release=e.release),e.environment&&(t.environment=e.environment),!t.ipAddress&&e.ipAddress&&(t.ipAddress=e.ipAddress),!t.userAgent&&e.userAgent&&(t.userAgent=e.userAgent),typeof e.errors=="number"&&(t.errors=e.errors),e.status&&(t.status=e.status)}function M0(t,e){let n={};e?n={status:e}:t.status==="ok"&&(n={status:"exited"}),Xn(t,n)}function I0(t){return qo({sid:`${t.sid}`,init:t.init,started:new Date(t.started*1e3).toISOString(),timestamp:new Date(t.timestamp*1e3).toISOString(),status:t.status,errors:t.errors,did:typeof t.did=="number"||typeof t.did=="string"?`${t.did}`:void 0,duration:t.duration,attrs:{release:t.release,environment:t.environment,ip_address:t.ipAddress,user_agent:t.userAgent}})}const D0=100;class bn{constructor(){this._notifyingListeners=!1,this._scopeListeners=[],this._eventProcessors=[],this._breadcrumbs=[],this._attachments=[],this._user={},this._tags={},this._extra={},this._contexts={},this._sdkProcessingMetadata={}}static clone(e){const n=new bn;return e&&(n._breadcrumbs=[...e._breadcrumbs],n._tags={...e._tags},n._extra={...e._extra},n._contexts={...e._contexts},n._user=e._user,n._level=e._level,n._span=e._span,n._session=e._session,n._transactionName=e._transactionName,n._fingerprint=e._fingerprint,n._eventProcessors=[...e._eventProcessors],n._requestSession=e._requestSession,n._attachments=[...e._attachments],n._sdkProcessingMetadata={...e._sdkProcessingMetadata}),n}addScopeListener(e){this._scopeListeners.push(e)}addEventProcessor(e){return this._eventProcessors.push(e),this}setUser(e){return this._user=e||{},this._session&&Xn(this._session,{user:e}),this._notifyScopeListeners(),this}getUser(){return this._user}getRequestSession(){return this._requestSession}setRequestSession(e){return this._requestSession=e,this}setTags(e){return this._tags={...this._tags,...e},this._notifyScopeListeners(),this}setTag(e,n){return this._tags={...this._tags,[e]:n},this._notifyScopeListeners(),this}setExtras(e){return this._extra={...this._extra,...e},this._notifyScopeListeners(),this}setExtra(e,n){return this._extra={...this._extra,[e]:n},this._notifyScopeListeners(),this}setFingerprint(e){return this._fingerprint=e,this._notifyScopeListeners(),this}setLevel(e){return this._level=e,this._notifyScopeListeners(),this}setTransactionName(e){return this._transactionName=e,this._notifyScopeListeners(),this}setContext(e,n){return n===null?delete this._contexts[e]:this._contexts[e]=n,this._notifyScopeListeners(),this}setSpan(e){return this._span=e,this._notifyScopeListeners(),this}getSpan(){return this._span}getTransaction(){const e=this.getSpan();return e&&e.transaction}setSession(e){return e?this._session=e:delete this._session,this._notifyScopeListeners(),this}getSession(){return this._session}update(e){if(!e)return this;if(typeof e=="function"){const n=e(this);return n instanceof bn?n:this}return e instanceof bn?(this._tags={...this._tags,...e._tags},this._extra={...this._extra,...e._extra},this._contexts={...this._contexts,...e._contexts},e._user&&Object.keys(e._user).length&&(this._user=e._user),e._level&&(this._level=e._level),e._fingerprint&&(this._fingerprint=e._fingerprint),e._requestSession&&(this._requestSession=e._requestSession)):Pi(e)&&(e=e,this._tags={...this._tags,...e.tags},this._extra={...this._extra,...e.extra},this._contexts={...this._contexts,...e.contexts},e.user&&(this._user=e.user),e.level&&(this._level=e.level),e.fingerprint&&(this._fingerprint=e.fingerprint),e.requestSession&&(this._requestSession=e.requestSession)),this}clear(){return this._breadcrumbs=[],this._tags={},this._extra={},this._user={},this._contexts={},this._level=void 0,this._transactionName=void 0,this._fingerprint=void 0,this._requestSession=void 0,this._span=void 0,this._session=void 0,this._notifyScopeListeners(),this._attachments=[],this}addBreadcrumb(e,n){const i=typeof n=="number"?n:D0;if(i<=0)return this;const s={timestamp:Vo(),...e};return this._breadcrumbs=[...this._breadcrumbs,s].slice(-i),this._notifyScopeListeners(),this}getLastBreadcrumb(){return this._breadcrumbs[this._breadcrumbs.length-1]}clearBreadcrumbs(){return this._breadcrumbs=[],this._notifyScopeListeners(),this}addAttachment(e){return this._attachments.push(e),this}getAttachments(){return this._attachments}clearAttachments(){return this._attachments=[],this}applyToEvent(e,n={}){if(this._extra&&Object.keys(this._extra).length&&(e.extra={...this._extra,...e.extra}),this._tags&&Object.keys(this._tags).length&&(e.tags={...this._tags,...e.tags}),this._user&&Object.keys(this._user).length&&(e.user={...this._user,...e.user}),this._contexts&&Object.keys(this._contexts).length&&(e.contexts={...this._contexts,...e.contexts}),this._level&&(e.level=this._level),this._transactionName&&(e.transaction=this._transactionName),this._span){e.contexts={trace:this._span.getTraceContext(),...e.contexts};const i=this._span.transaction;if(i){e.sdkProcessingMetadata={dynamicSamplingContext:i.getDynamicSamplingContext(),...e.sdkProcessingMetadata};const s=i.name;s&&(e.tags={transaction:s,...e.tags})}}return this._applyFingerprint(e),e.breadcrumbs=[...e.breadcrumbs||[],...this._breadcrumbs],e.breadcrumbs=e.breadcrumbs.length>0?e.breadcrumbs:void 0,e.sdkProcessingMetadata={...e.sdkProcessingMetadata,...this._sdkProcessingMetadata},this._notifyEventProcessors([...au(),...this._eventProcessors],e,n)}setSDKProcessingMetadata(e){return this._sdkProcessingMetadata={...this._sdkProcessingMetadata,...e},this}_notifyEventProcessors(e,n,i,s=0){return new Ui((a,d)=>{const m=e[s];if(n===null||typeof m!="function")a(n);else{const g=m({...n},i);(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&m.id&&g===null&&fe.log(`Event processor "${m.id}" dropped event`),Go(g)?g.then(v=>this._notifyEventProcessors(e,v,i,s+1).then(a)).then(null,d):this._notifyEventProcessors(e,g,i,s+1).then(a).then(null,d)}})}_notifyScopeListeners(){this._notifyingListeners||(this._notifyingListeners=!0,this._scopeListeners.forEach(e=>{e(this)}),this._notifyingListeners=!1)}_applyFingerprint(e){e.fingerprint=e.fingerprint?nu(e.fingerprint):[],this._fingerprint&&(e.fingerprint=e.fingerprint.concat(this._fingerprint)),e.fingerprint&&!e.fingerprint.length&&delete e.fingerprint}}function au(){return Zo("globalEventProcessors",()=>[])}function Jo(t){au().push(t)}const cu=4,P0=100;class lu{constructor(e,n=new bn,i=cu){this._version=i,this._stack=[{scope:n}],e&&this.bindClient(e)}isOlderThan(e){return this._version<e}bindClient(e){const n=this.getStackTop();n.client=e,e&&e.setupIntegrations&&e.setupIntegrations()}pushScope(){const e=bn.clone(this.getScope());return this.getStack().push({client:this.getClient(),scope:e}),e}popScope(){return this.getStack().length<=1?!1:!!this.getStack().pop()}withScope(e){const n=this.pushScope();try{e(n)}finally{this.popScope()}}getClient(){return this.getStackTop().client}getScope(){return this.getStackTop().scope}getStack(){return this._stack}getStackTop(){return this._stack[this._stack.length-1]}captureException(e,n){const i=this._lastEventId=n&&n.event_id?n.event_id:Wn(),s=new Error("Sentry syntheticException");return this._withClient((a,d)=>{a.captureException(e,{originalException:e,syntheticException:s,...n,event_id:i},d)}),i}captureMessage(e,n,i){const s=this._lastEventId=i&&i.event_id?i.event_id:Wn(),a=new Error(e);return this._withClient((d,m)=>{d.captureMessage(e,n,{originalException:e,syntheticException:a,...i,event_id:s},m)}),s}captureEvent(e,n){const i=n&&n.event_id?n.event_id:Wn();return e.type||(this._lastEventId=i),this._withClient((s,a)=>{s.captureEvent(e,{...n,event_id:i},a)}),i}lastEventId(){return this._lastEventId}addBreadcrumb(e,n){const{scope:i,client:s}=this.getStackTop();if(!s)return;const{beforeBreadcrumb:a=null,maxBreadcrumbs:d=P0}=s.getOptions&&s.getOptions()||{};if(d<=0)return;const g={timestamp:Vo(),...e},v=a?Kl(()=>a(g,n)):g;v!==null&&(s.emit&&s.emit("beforeAddBreadcrumb",v,n),i.addBreadcrumb(v,d))}setUser(e){this.getScope().setUser(e)}setTags(e){this.getScope().setTags(e)}setExtras(e){this.getScope().setExtras(e)}setTag(e,n){this.getScope().setTag(e,n)}setExtra(e,n){this.getScope().setExtra(e,n)}setContext(e,n){this.getScope().setContext(e,n)}configureScope(e){const{scope:n,client:i}=this.getStackTop();i&&e(n)}run(e){const n=yc(this);try{e(this)}finally{yc(n)}}getIntegration(e){const n=this.getClient();if(!n)return null;try{return n.getIntegration(e)}catch{return(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&fe.warn(`Cannot retrieve integration ${e.id} from the current Hub`),null}}startTransaction(e,n){const i=this._callExtensionMethod("startTransaction",e,n);return i}traceHeaders(){return this._callExtensionMethod("traceHeaders")}captureSession(e=!1){if(e)return this.endSession();this._sendSessionUpdate()}endSession(){const n=this.getStackTop().scope,i=n.getSession();i&&M0(i),this._sendSessionUpdate(),n.setSession()}startSession(e){const{scope:n,client:i}=this.getStackTop(),{release:s,environment:a=ou}=i&&i.getOptions()||{},{userAgent:d}=mt.navigator||{},m=k0({release:s,environment:a,user:n.getUser(),...d&&{userAgent:d},...e}),g=n.getSession&&n.getSession();return g&&g.status==="ok"&&Xn(g,{status:"exited"}),this.endSession(),n.setSession(m),m}shouldSendDefaultPii(){const e=this.getClient(),n=e&&e.getOptions();return!!(n&&n.sendDefaultPii)}_sendSessionUpdate(){const{scope:e,client:n}=this.getStackTop(),i=e.getSession();i&&n&&n.captureSession&&n.captureSession(i)}_withClient(e){const{scope:n,client:i}=this.getStackTop();i&&e(i,n)}_callExtensionMethod(e,...n){const s=Vr().__SENTRY__;if(s&&s.extensions&&typeof s.extensions[e]=="function")return s.extensions[e].apply(this,n);(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&fe.warn(`Extension method ${e} couldn't be found, doing nothing.`)}}function Vr(){return mt.__SENTRY__=mt.__SENTRY__||{extensions:{},hub:void 0},mt}function yc(t){const e=Vr(),n=ao(e);return uu(e,t),n}function Ae(){const t=Vr();if(t.__SENTRY__&&t.__SENTRY__.acs){const e=t.__SENTRY__.acs.getCurrentHub();if(e)return e}return A0(t)}function A0(t=Vr()){return(!N0(t)||ao(t).isOlderThan(cu))&&uu(t,new lu),ao(t)}function N0(t){return!!(t&&t.__SENTRY__&&t.__SENTRY__.hub)}function ao(t){return Zo("hub",()=>new lu,t)}function uu(t,e){if(!t)return!1;const n=t.__SENTRY__=t.__SENTRY__||{};return n.hub=e,!0}function R0(t,e){return Ae().captureException(t,{captureContext:e})}function sx(t){Ae().addBreadcrumb(t)}function ox(t){Ae().setUser(t)}function L0(t){Ae().withScope(t)}const O0="7";function Y0(t){const e=t.protocol?`${t.protocol}:`:"",n=t.port?`:${t.port}`:"";return`${e}//${t.host}${n}${t.path?`/${t.path}`:""}/api/`}function j0(t){return`${Y0(t)}${t.projectId}/envelope/`}function $0(t,e){return i0({sentry_key:t.publicKey,sentry_version:O0,...e&&{sentry_client:`${e.name}/${e.version}`}})}function F0(t,e={}){const n=typeof e=="string"?e:e.tunnel,i=typeof e=="string"||!e._metadata?void 0:e._metadata.sdk;return n||`${j0(t)}?${$0(t,i)}`}function H0(t,e){return e&&(t.sdk=t.sdk||{},t.sdk.name=t.sdk.name||e.name,t.sdk.version=t.sdk.version||e.version,t.sdk.integrations=[...t.sdk.integrations||[],...e.integrations||[]],t.sdk.packages=[...t.sdk.packages||[],...e.packages||[]]),t}function W0(t,e,n,i){const s=su(n),a={sent_at:new Date().toISOString(),...s&&{sdk:s},...!!i&&{dsn:eu(e)}},d="aggregates"in t?[{type:"sessions"},t]:[{type:"session"},t.toJSON()];return Xo(a,[d])}function z0(t,e,n,i){const s=su(n),a=t.type&&t.type!=="replay_event"?t.type:"event";H0(t,n&&n.sdk);const d=v0(t,s,i,e);return delete t.sdkProcessingMetadata,Xo(d,[[{type:a},t]])}const bc=[];function B0(t){const e={};return t.forEach(n=>{const{name:i}=n,s=e[i];s&&!s.isDefaultInstance&&n.isDefaultInstance||(e[i]=n)}),Object.keys(e).map(n=>e[n])}function U0(t){const e=t.defaultIntegrations||[],n=t.integrations;e.forEach(d=>{d.isDefaultInstance=!0});let i;Array.isArray(n)?i=[...e,...n]:typeof n=="function"?i=nu(n(e)):i=e;const s=B0(i),a=Z0(s,d=>d.name==="Debug");if(a!==-1){const[d]=s.splice(a,1);s.push(d)}return s}function G0(t){const e={};return t.forEach(n=>{n&&du(n,e)}),e}function du(t,e){e[t.name]=t,bc.indexOf(t.name)===-1&&(t.setupOnce(Jo,Ae),bc.push(t.name),(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&fe.log(`Integration installed: ${t.name}`))}function Z0(t,e){for(let n=0;n<t.length;n++)if(e(t[n])===!0)return n;return-1}function q0(t,e,n,i){const{normalizeDepth:s=3,normalizeMaxBreadth:a=1e3}=t,d={...e,event_id:e.event_id||n.event_id||Wn(),timestamp:e.timestamp||Vo()},m=n.integrations||t.integrations.map(C=>C.name);V0(d,t),Q0(d,m),e.type===void 0&&X0(d,t.stackParser);let g=i;n.captureContext&&(g=bn.clone(g).update(n.captureContext));let v=Ai(d);if(g){if(g.getAttachments){const C=[...n.attachments||[],...g.getAttachments()];C.length&&(n.attachments=C)}v=g.applyToEvent(d,n)}return v.then(C=>(C&&J0(C),typeof s=="number"&&s>0?K0(C,s,a):C))}function V0(t,e){const{environment:n,release:i,dist:s,maxValueLength:a=250}=e;"environment"in t||(t.environment="environment"in e?n:ou),t.release===void 0&&i!==void 0&&(t.release=i),t.dist===void 0&&s!==void 0&&(t.dist=s),t.message&&(t.message=js(t.message,a));const d=t.exception&&t.exception.values&&t.exception.values[0];d&&d.value&&(d.value=js(d.value,a));const m=t.request;m&&m.url&&(m.url=js(m.url,a))}const xc=new WeakMap;function X0(t,e){const n=mt._sentryDebugIds;if(!n)return;let i;const s=xc.get(e);s?i=s:(i=new Map,xc.set(e,i));const a=Object.keys(n).reduce((d,m)=>{let g;const v=i.get(m);v?g=v:(g=e(m),i.set(m,g));for(let C=g.length-1;C>=0;C--){const S=g[C];if(S.filename){d[S.filename]=n[m];break}}return d},{});try{t.exception.values.forEach(d=>{d.stacktrace.frames.forEach(m=>{m.filename&&(m.debug_id=a[m.filename])})})}catch{}}function J0(t){const e={};try{t.exception.values.forEach(i=>{i.stacktrace.frames.forEach(s=>{s.debug_id&&(s.abs_path?e[s.abs_path]=s.debug_id:s.filename&&(e[s.filename]=s.debug_id),delete s.debug_id)})})}catch{}if(Object.keys(e).length===0)return;t.debug_meta=t.debug_meta||{},t.debug_meta.images=t.debug_meta.images||[];const n=t.debug_meta.images;Object.keys(e).forEach(i=>{n.push({type:"sourcemap",code_file:i,debug_id:e[i]})})}function Q0(t,e){e.length>0&&(t.sdk=t.sdk||{},t.sdk.integrations=[...t.sdk.integrations||[],...e])}function K0(t,e,n){if(!t)return null;const i={...t,...t.breadcrumbs&&{breadcrumbs:t.breadcrumbs.map(s=>({...s,...s.data&&{data:hn(s.data,e,n)}}))},...t.user&&{user:hn(t.user,e,n)},...t.contexts&&{contexts:hn(t.contexts,e,n)},...t.extra&&{extra:hn(t.extra,e,n)}};return t.contexts&&t.contexts.trace&&i.contexts&&(i.contexts.trace=t.contexts.trace,t.contexts.trace.data&&(i.contexts.trace.data=hn(t.contexts.trace.data,e,n))),t.spans&&(i.spans=t.spans.map(s=>(s.data&&(s.data=hn(s.data,e,n)),s))),i}const vc="Not capturing exception because it's already been captured.";class mn{__init(){this._integrations={}}__init2(){this._integrationsInitialized=!1}__init3(){this._numProcessing=0}__init4(){this._outcomes={}}__init5(){this._hooks={}}constructor(e){if(mn.prototype.__init.call(this),mn.prototype.__init2.call(this),mn.prototype.__init3.call(this),mn.prototype.__init4.call(this),mn.prototype.__init5.call(this),this._options=e,e.dsn?this._dsn=Kg(e.dsn):(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&fe.warn("No DSN provided, client will not do anything."),this._dsn){const n=F0(this._dsn,e);this._transport=e.transport({recordDroppedEvent:this.recordDroppedEvent.bind(this),...e.transportOptions,url:n})}}captureException(e,n,i){if(pc(e)){(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&fe.log(vc);return}let s=n&&n.event_id;return this._process(this.eventFromException(e,n).then(a=>this._captureEvent(a,n,i)).then(a=>{s=a})),s}captureMessage(e,n,i,s){let a=i&&i.event_id;const d=jg(e)?this.eventFromMessage(String(e),n,i):this.eventFromException(e,i);return this._process(d.then(m=>this._captureEvent(m,i,s)).then(m=>{a=m})),a}captureEvent(e,n,i){if(n&&n.originalException&&pc(n.originalException)){(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&fe.log(vc);return}let s=n&&n.event_id;return this._process(this._captureEvent(e,n,i).then(a=>{s=a})),s}captureSession(e){if(!this._isEnabled()){(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&fe.warn("SDK not enabled, will not capture session.");return}typeof e.release!="string"?(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&fe.warn("Discarded session because of missing or non-string release"):(this.sendSession(e),Xn(e,{init:!1}))}getDsn(){return this._dsn}getOptions(){return this._options}getSdkMetadata(){return this._options._metadata}getTransport(){return this._transport}flush(e){const n=this._transport;return n?this._isClientDoneProcessing(e).then(i=>n.flush(e).then(s=>i&&s)):Ai(!0)}close(e){return this.flush(e).then(n=>(this.getOptions().enabled=!1,n))}setupIntegrations(){this._isEnabled()&&!this._integrationsInitialized&&(this._integrations=G0(this._options.integrations),this._integrationsInitialized=!0)}getIntegrationById(e){return this._integrations[e]}getIntegration(e){try{return this._integrations[e.id]||null}catch{return(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&fe.warn(`Cannot retrieve integration ${e.id} from the current Client`),null}}addIntegration(e){du(e,this._integrations)}sendEvent(e,n={}){if(this._dsn){let i=z0(e,this._dsn,this._options._metadata,this._options.tunnel);for(const a of n.attachments||[])i=g0(i,b0(a,this._options.transportOptions&&this._options.transportOptions.textEncoder));const s=this._sendEnvelope(i);s&&s.then(a=>this.emit("afterSendEvent",e,a),null)}}sendSession(e){if(this._dsn){const n=W0(e,this._dsn,this._options._metadata,this._options.tunnel);this._sendEnvelope(n)}}recordDroppedEvent(e,n,i){if(this._options.sendClientReports){const s=`${e}:${n}`;(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&fe.log(`Adding outcome: "${s}"`),this._outcomes[s]=this._outcomes[s]+1||1}}on(e,n){this._hooks[e]||(this._hooks[e]=[]),this._hooks[e].push(n)}emit(e,...n){this._hooks[e]&&this._hooks[e].forEach(i=>i(...n))}_updateSessionFromEvent(e,n){let i=!1,s=!1;const a=n.exception&&n.exception.values;if(a){s=!0;for(const g of a){const v=g.mechanism;if(v&&v.handled===!1){i=!0;break}}}const d=e.status==="ok";(d&&e.errors===0||d&&i)&&(Xn(e,{...i&&{status:"crashed"},errors:e.errors||Number(s||i)}),this.captureSession(e))}_isClientDoneProcessing(e){return new Ui(n=>{let i=0;const s=1,a=setInterval(()=>{this._numProcessing==0?(clearInterval(a),n(!0)):(i+=s,e&&i>=e&&(clearInterval(a),n(!1)))},s)})}_isEnabled(){return this.getOptions().enabled!==!1&&this._dsn!==void 0}_prepareEvent(e,n,i){const s=this.getOptions(),a=Object.keys(this._integrations);return!n.integrations&&a.length>0&&(n.integrations=a),q0(s,e,n,i)}_captureEvent(e,n={},i){return this._processEvent(e,n,i).then(s=>s.event_id,s=>{if(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__){const a=s;a.logLevel==="log"?fe.log(a.message):fe.warn(a)}})}_processEvent(e,n,i){const s=this.getOptions(),{sampleRate:a}=s;if(!this._isEnabled())return ro(new ht("SDK not enabled, will not capture event.","log"));const d=hu(e),m=fu(e),g=e.type||"error",v=`before send for type \`${g}\``;if(m&&typeof a=="number"&&Math.random()>a)return this.recordDroppedEvent("sample_rate","error",e),ro(new ht(`Discarding event because it's not included in the random sample (sampling rate = ${a})`,"log"));const C=g==="replay_event"?"replay":g;return this._prepareEvent(e,n,i).then(S=>{if(S===null)throw this.recordDroppedEvent("event_processor",C,e),new ht("An event processor returned `null`, will not send event.","log");if(n.data&&n.data.__sentry__===!0)return S;const O=t_(s,S,n);return e_(O,v)}).then(S=>{if(S===null)throw this.recordDroppedEvent("before_send",C,e),new ht(`${v} returned \`null\`, will not send event.`,"log");const I=i&&i.getSession();!d&&I&&this._updateSessionFromEvent(I,S);const O=S.transaction_info;if(d&&O&&S.transaction!==e.transaction){const A="custom";S.transaction_info={...O,source:A}}return this.sendEvent(S,n),S}).then(null,S=>{throw S instanceof ht?S:(this.captureException(S,{data:{__sentry__:!0},originalException:S}),new ht(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
Reason: ${S}`))})}_process(e){this._numProcessing++,e.then(n=>(this._numProcessing--,n),n=>(this._numProcessing--,n))}_sendEnvelope(e){if(this._transport&&this._dsn)return this.emit("beforeEnvelope",e),this._transport.send(e).then(null,n=>{(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&fe.error("Error while sending event:",n)});(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&fe.error("Transport disabled")}_clearOutcomes(){const e=this._outcomes;return this._outcomes={},Object.keys(e).map(n=>{const[i,s]=n.split(":");return{reason:i,category:s,quantity:e[n]}})}}function e_(t,e){const n=`${e} must return \`null\` or a valid event.`;if(Go(t))return t.then(i=>{if(!Pi(i)&&i!==null)throw new ht(n);return i},i=>{throw new ht(`${e} rejected with ${i}`)});if(!Pi(t)&&t!==null)throw new ht(n);return t}function t_(t,e,n){const{beforeSend:i,beforeSendTransaction:s}=t;return fu(e)&&i?i(e,n):hu(e)&&s?s(e,n):e}function fu(t){return t.type===void 0}function hu(t){return t.type==="transaction"}function n_(t,e){e.debug===!0&&(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&fe.enable();const n=Ae();n.getScope().update(e.initialScope);const s=new t(e);n.bindClient(s)}const i_=30;function pu(t,e,n=h0(t.bufferSize||i_)){let i={};const s=d=>n.drain(d);function a(d){const m=[];if(gc(d,(S,I)=>{const O=_c(I);if(E0(i,O)){const A=wc(S,I);t.recordDroppedEvent("ratelimit_backoff",O,A)}else m.push(S)}),m.length===0)return Ai();const g=Xo(d[0],m),v=S=>{gc(g,(I,O)=>{const A=wc(I,O);t.recordDroppedEvent(S,_c(O),A)})},C=()=>e({body:_0(g,t.textEncoder)}).then(S=>(S.statusCode!==void 0&&(S.statusCode<200||S.statusCode>=300)&&(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&fe.warn(`Sentry responded with status code ${S.statusCode} to sent event.`),i=T0(i,S),S),S=>{throw v("network_error"),S});return n.add(C).then(S=>S,S=>{if(S instanceof ht)return(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&fe.error("Skipped sending event because buffer is full."),v("queue_overflow"),Ai();throw S})}return a.__sentry__baseTransport__=!0,{send:a,flush:s}}function wc(t,e){if(!(e!=="event"&&e!=="transaction"))return Array.isArray(t)?t[1]:void 0}const Sc="7.57.0";let Cc;class Ni{constructor(){Ni.prototype.__init.call(this)}static __initStatic(){this.id="FunctionToString"}__init(){this.name=Ni.id}setupOnce(){Cc=Function.prototype.toString;try{Function.prototype.toString=function(...e){const n=n0(this)||this;return Cc.apply(n,e)}}catch{}}}Ni.__initStatic();const r_=[/^Script error\.?$/,/^Javascript error: Script error\.? on line 0$/],s_=[/^.*healthcheck.*$/,/^.*healthy.*$/,/^.*live.*$/,/^.*ready.*$/,/^.*heartbeat.*$/,/^.*\/health$/,/^.*\/healthz$/];class zn{static __initStatic(){this.id="InboundFilters"}__init(){this.name=zn.id}constructor(e={}){this._options=e,zn.prototype.__init.call(this)}setupOnce(e,n){const i=s=>{const a=n();if(a){const d=a.getIntegration(zn);if(d){const m=a.getClient(),g=m?m.getOptions():{},v=o_(d._options,g);return a_(s,v)?null:s}}return s};i.id=this.name,e(i)}}zn.__initStatic();function o_(t={},e={}){return{allowUrls:[...t.allowUrls||[],...e.allowUrls||[]],denyUrls:[...t.denyUrls||[],...e.denyUrls||[]],ignoreErrors:[...t.ignoreErrors||[],...e.ignoreErrors||[],...t.disableErrorDefaults?[]:r_],ignoreTransactions:[...t.ignoreTransactions||[],...e.ignoreTransactions||[],...t.disableTransactionDefaults?[]:s_],ignoreInternal:t.ignoreInternal!==void 0?t.ignoreInternal:!0}}function a_(t,e){return e.ignoreInternal&&h_(t)?((typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&fe.warn(`Event dropped due to being internal Sentry Error.
Event: ${pn(t)}`),!0):c_(t,e.ignoreErrors)?((typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&fe.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${pn(t)}`),!0):l_(t,e.ignoreTransactions)?((typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&fe.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.
Event: ${pn(t)}`),!0):u_(t,e.denyUrls)?((typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&fe.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${pn(t)}.
Url: ${Nr(t)}`),!0):d_(t,e.allowUrls)?!1:((typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&fe.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${pn(t)}.
Url: ${Nr(t)}`),!0)}function c_(t,e){return t.type||!e||!e.length?!1:f_(t).some(n=>qr(n,e))}function l_(t,e){if(t.type!=="transaction"||!e||!e.length)return!1;const n=t.transaction;return n?qr(n,e):!1}function u_(t,e){if(!e||!e.length)return!1;const n=Nr(t);return n?qr(n,e):!1}function d_(t,e){if(!e||!e.length)return!0;const n=Nr(t);return n?qr(n,e):!0}function f_(t){if(t.message)return[t.message];if(t.exception){const{values:e}=t.exception;try{const{type:n="",value:i=""}=e&&e[e.length-1]||{};return[`${i}`,`${n}: ${i}`]}catch{return(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&fe.error(`Cannot extract message for event ${pn(t)}`),[]}}return[]}function h_(t){try{return t.exception.values[0].type==="SentryError"}catch{}return!1}function p_(t=[]){for(let e=t.length-1;e>=0;e--){const n=t[e];if(n&&n.filename!=="<anonymous>"&&n.filename!=="[native code]")return n.filename||null}return null}function Nr(t){try{let e;try{e=t.exception.values[0].stacktrace.frames}catch{}return e?p_(e):null}catch{return(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&fe.error(`Cannot extract url for event ${pn(t)}`),null}}const mu=Object.prototype.toString;function gu(t){switch(mu.call(t)){case"[object Error]":case"[object Exception]":case"[object DOMException]":return!0;default:return ni(t,Error)}}function Gi(t,e){return mu.call(t)===`[object ${e}]`}function Qo(t){return Gi(t,"ErrorEvent")}function Ec(t){return Gi(t,"DOMError")}function m_(t){return Gi(t,"DOMException")}function Ri(t){return Gi(t,"String")}function g_(t){return t===null||typeof t!="object"&&typeof t!="function"}function _u(t){return Gi(t,"Object")}function Xr(t){return typeof Event<"u"&&ni(t,Event)}function __(t){return typeof Element<"u"&&ni(t,Element)}function y_(t){return!!(t&&t.then&&typeof t.then=="function")}function b_(t){return _u(t)&&"nativeEvent"in t&&"preventDefault"in t&&"stopPropagation"in t}function x_(t){return typeof t=="number"&&t!==t}function ni(t,e){try{return t instanceof e}catch{return!1}}function lr(t){return t&&t.Math==Math?t:void 0}const Jn=typeof globalThis=="object"&&lr(globalThis)||typeof window=="object"&&lr(window)||typeof self=="object"&&lr(self)||typeof global=="object"&&lr(global)||function(){return this}()||{};function Zi(){return Jn}function v_(t,e,n){const i=n||Jn,s=i.__SENTRY__=i.__SENTRY__||{};return s[t]||(s[t]=e())}const w_=Zi(),S_=80;function co(t,e={}){try{let n=t;const i=5,s=[];let a=0,d=0;const m=" > ",g=m.length;let v;const C=Array.isArray(e)?e:e.keyAttrs,S=!Array.isArray(e)&&e.maxStringLength||S_;for(;n&&a++<i&&(v=C_(n,C),!(v==="html"||a>1&&d+s.length*g+v.length>=S));)s.push(v),d+=v.length,n=n.parentNode;return s.reverse().join(m)}catch{return"<unknown>"}}function C_(t,e){const n=t,i=[];let s,a,d,m,g;if(!n||!n.tagName)return"";i.push(n.tagName.toLowerCase());const v=e&&e.length?e.filter(S=>n.getAttribute(S)).map(S=>[S,n.getAttribute(S)]):null;if(v&&v.length)v.forEach(S=>{i.push(`[${S[0]}="${S[1]}"]`)});else if(n.id&&i.push(`#${n.id}`),s=n.className,s&&Ri(s))for(a=s.split(/\s+/),g=0;g<a.length;g++)i.push(`.${a[g]}`);const C=["aria-label","type","name","title","alt"];for(g=0;g<C.length;g++)d=C[g],m=n.getAttribute(d),m&&i.push(`[${d}="${m}"]`);return i.join("")}function E_(){try{return w_.document.location.href}catch{return""}}const T_="Sentry Logger ",Rr=["debug","info","warn","error","log","assert","trace"];function k_(t){if(!("console"in Jn))return t();const e=Jn.console,n={};Rr.forEach(i=>{const s=e[i]&&e[i].__sentry_original__;i in e&&s&&(n[i]=e[i],e[i]=s)});try{return t()}finally{Object.keys(n).forEach(i=>{e[i]=n[i]})}}function Tc(){let t=!1;const e={enable:()=>{t=!0},disable:()=>{t=!1}};return typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__?Rr.forEach(n=>{e[n]=(...i)=>{t&&k_(()=>{Jn.console[n](`${T_}[${n}]:`,...i)})}}):Rr.forEach(n=>{e[n]=()=>{}}),e}let Ke;typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__?Ke=v_("logger",Tc):Ke=Tc();function yu(t,e=!1){const{host:n,path:i,pass:s,port:a,projectId:d,protocol:m,publicKey:g}=t;return`${m}://${g}${e&&s?`:${s}`:""}@${n}${a?`:${a}`:""}/${i&&`${i}/`}${d}`}function kc(t,e=0){return typeof t!="string"||e===0||t.length<=e?t:`${t.slice(0,e)}...`}function Mc(t,e){if(!Array.isArray(t))return"";const n=[];for(let i=0;i<t.length;i++){const s=t[i];try{n.push(String(s))}catch{n.push("[value cannot be serialized]")}}return n.join(e)}function Ye(t,e,n){if(!(e in t))return;const i=t[e],s=n(i);if(typeof s=="function")try{xu(s,i)}catch{}t[e]=s}function bu(t,e,n){Object.defineProperty(t,e,{value:n,writable:!0,configurable:!0})}function xu(t,e){const n=e.prototype||{};t.prototype=e.prototype=n,bu(t,"__sentry_original__",e)}function vu(t){return t.__sentry_original__}function wu(t){if(gu(t))return{message:t.message,name:t.name,stack:t.stack,...Dc(t)};if(Xr(t)){const e={type:t.type,target:Ic(t.target),currentTarget:Ic(t.currentTarget),...Dc(t)};return typeof CustomEvent<"u"&&ni(t,CustomEvent)&&(e.detail=t.detail),e}else return t}function Ic(t){try{return __(t)?co(t):Object.prototype.toString.call(t)}catch{return"<unknown>"}}function Dc(t){if(typeof t=="object"&&t!==null){const e={};for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}else return{}}function M_(t,e=40){const n=Object.keys(wu(t));if(n.sort(),!n.length)return"[object has no keys]";if(n[0].length>=e)return kc(n[0],e);for(let i=n.length;i>0;i--){const s=n.slice(0,i).join(", ");if(!(s.length>e))return i===n.length?s:kc(s,e)}return""}const Su=50,Pc=/\(error: (.*)\)/;function Cu(...t){const e=t.sort((n,i)=>n[0]-i[0]).map(n=>n[1]);return(n,i=0)=>{const s=[],a=n.split(`
`);for(let d=i;d<a.length;d++){const m=a[d];if(m.length>1024)continue;const g=Pc.test(m)?m.replace(Pc,"$1"):m;if(!g.match(/\S*Error: /)){for(const v of e){const C=v(g);if(C){s.push(C);break}}if(s.length>=Su)break}}return D_(s)}}function I_(t){return Array.isArray(t)?Cu(...t):t}function D_(t){if(!t.length)return[];const e=t.slice(0,Su),n=e[e.length-1].function;n&&/sentryWrapped/.test(n)&&e.pop(),e.reverse();const i=e[e.length-1].function;return i&&/captureMessage|captureException/.test(i)&&e.pop(),e.map(s=>({...s,filename:s.filename||e[e.length-1].filename,function:s.function||"?"}))}const Hs="<anonymous>";function sn(t){try{return!t||typeof t!="function"?Hs:t.name||Hs}catch{return Hs}}const lo=Zi();function Eu(){if(!("fetch"in lo))return!1;try{return new Headers,new Request("http://www.example.com"),new Response,!0}catch{return!1}}function uo(t){return t&&/^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(t.toString())}function P_(){if(!Eu())return!1;if(uo(lo.fetch))return!0;let t=!1;const e=lo.document;if(e&&typeof e.createElement=="function")try{const n=e.createElement("iframe");n.hidden=!0,e.head.appendChild(n),n.contentWindow&&n.contentWindow.fetch&&(t=uo(n.contentWindow.fetch)),e.head.removeChild(n)}catch(n){(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&Ke.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ",n)}return t}const ur=Zi();function A_(){const t=ur.chrome,e=t&&t.app&&t.app.runtime,n="history"in ur&&!!ur.history.pushState&&!!ur.history.replaceState;return!e&&n}const ke=Zi(),_i="__sentry_xhr_v2__",Si={},Ac={};function N_(t){if(!Ac[t])switch(Ac[t]=!0,t){case"console":R_();break;case"dom":W_();break;case"xhr":Y_();break;case"fetch":L_();break;case"history":j_();break;case"error":z_();break;case"unhandledrejection":B_();break;default:(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&Ke.warn("unknown instrumentation type:",t);return}}function Qt(t,e){Si[t]=Si[t]||[],Si[t].push(e),N_(t)}function gt(t,e){if(!(!t||!Si[t]))for(const n of Si[t]||[])try{n(e)}catch(i){(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&Ke.error(`Error while triggering instrumentation handler.
Type: ${t}
Name: ${sn(n)}
Error:`,i)}}function R_(){"console"in ke&&Rr.forEach(function(t){t in ke.console&&Ye(ke.console,t,function(e){return function(...n){gt("console",{args:n,level:t}),e&&e.apply(ke.console,n)}})})}function L_(){P_()&&Ye(ke,"fetch",function(t){return function(...e){const{method:n,url:i}=O_(e),s={args:e,fetchData:{method:n,url:i},startTimestamp:Date.now()};return gt("fetch",{...s}),t.apply(ke,e).then(a=>(gt("fetch",{...s,endTimestamp:Date.now(),response:a}),a),a=>{throw gt("fetch",{...s,endTimestamp:Date.now(),error:a}),a})}})}function fo(t,e){return!!t&&typeof t=="object"&&!!t[e]}function Nc(t){return typeof t=="string"?t:t?fo(t,"url")?t.url:t.toString?t.toString():"":""}function O_(t){if(t.length===0)return{method:"GET",url:""};if(t.length===2){const[n,i]=t;return{url:Nc(n),method:fo(i,"method")?String(i.method).toUpperCase():"GET"}}const e=t[0];return{url:Nc(e),method:fo(e,"method")?String(e.method).toUpperCase():"GET"}}function Y_(){if(!("XMLHttpRequest"in ke))return;const t=XMLHttpRequest.prototype;Ye(t,"open",function(e){return function(...n){const i=n[1],s=this[_i]={method:Ri(n[0])?n[0].toUpperCase():n[0],url:n[1],request_headers:{}};Ri(i)&&s.method==="POST"&&i.match(/sentry_key/)&&(this.__sentry_own_request__=!0);const a=()=>{const d=this[_i];if(d&&this.readyState===4){try{d.status_code=this.status}catch{}gt("xhr",{args:n,endTimestamp:Date.now(),startTimestamp:Date.now(),xhr:this})}};return"onreadystatechange"in this&&typeof this.onreadystatechange=="function"?Ye(this,"onreadystatechange",function(d){return function(...m){return a(),d.apply(this,m)}}):this.addEventListener("readystatechange",a),Ye(this,"setRequestHeader",function(d){return function(...m){const[g,v]=m,C=this[_i];return C&&(C.request_headers[g.toLowerCase()]=v),d.apply(this,m)}}),e.apply(this,n)}}),Ye(t,"send",function(e){return function(...n){const i=this[_i];return i&&n[0]!==void 0&&(i.body=n[0]),gt("xhr",{args:n,startTimestamp:Date.now(),xhr:this}),e.apply(this,n)}})}let dr;function j_(){if(!A_())return;const t=ke.onpopstate;ke.onpopstate=function(...n){const i=ke.location.href,s=dr;if(dr=i,gt("history",{from:s,to:i}),t)try{return t.apply(this,n)}catch{}};function e(n){return function(...i){const s=i.length>2?i[2]:void 0;if(s){const a=dr,d=String(s);dr=d,gt("history",{from:a,to:d})}return n.apply(this,i)}}Ye(ke.history,"pushState",e),Ye(ke.history,"replaceState",e)}const $_=1e3;let fr,hr;function F_(t,e){if(!t||t.type!==e.type)return!0;try{if(t.target!==e.target)return!0}catch{}return!1}function H_(t){if(t.type!=="keypress")return!1;try{const e=t.target;if(!e||!e.tagName)return!0;if(e.tagName==="INPUT"||e.tagName==="TEXTAREA"||e.isContentEditable)return!1}catch{}return!0}function Rc(t,e=!1){return n=>{if(!n||hr===n||H_(n))return;const i=n.type==="keypress"?"input":n.type;fr===void 0?(t({event:n,name:i,global:e}),hr=n):F_(hr,n)&&(t({event:n,name:i,global:e}),hr=n),clearTimeout(fr),fr=ke.setTimeout(()=>{fr=void 0},$_)}}function W_(){if(!("document"in ke))return;const t=gt.bind(null,"dom"),e=Rc(t,!0);ke.document.addEventListener("click",e,!1),ke.document.addEventListener("keypress",e,!1),["EventTarget","Node"].forEach(n=>{const i=ke[n]&&ke[n].prototype;!i||!i.hasOwnProperty||!i.hasOwnProperty("addEventListener")||(Ye(i,"addEventListener",function(s){return function(a,d,m){if(a==="click"||a=="keypress")try{const g=this,v=g.__sentry_instrumentation_handlers__=g.__sentry_instrumentation_handlers__||{},C=v[a]=v[a]||{refCount:0};if(!C.handler){const S=Rc(t);C.handler=S,s.call(this,a,S,m)}C.refCount++}catch{}return s.call(this,a,d,m)}}),Ye(i,"removeEventListener",function(s){return function(a,d,m){if(a==="click"||a=="keypress")try{const g=this,v=g.__sentry_instrumentation_handlers__||{},C=v[a];C&&(C.refCount--,C.refCount<=0&&(s.call(this,a,C.handler,m),C.handler=void 0,delete v[a]),Object.keys(v).length===0&&delete g.__sentry_instrumentation_handlers__)}catch{}return s.call(this,a,d,m)}}))})}let pr=null;function z_(){pr=ke.onerror,ke.onerror=function(t,e,n,i,s){return gt("error",{column:i,error:s,line:n,msg:t,url:e}),pr&&!pr.__SENTRY_LOADER__?pr.apply(this,arguments):!1},ke.onerror.__SENTRY_INSTRUMENTED__=!0}let mr=null;function B_(){mr=ke.onunhandledrejection,ke.onunhandledrejection=function(t){return gt("unhandledrejection",t),mr&&!mr.__SENTRY_LOADER__?mr.apply(this,arguments):!0},ke.onunhandledrejection.__SENTRY_INSTRUMENTED__=!0}function U_(){const t=typeof WeakSet=="function",e=t?new WeakSet:[];function n(s){if(t)return e.has(s)?!0:(e.add(s),!1);for(let a=0;a<e.length;a++)if(e[a]===s)return!0;return e.push(s),!1}function i(s){if(t)e.delete(s);else for(let a=0;a<e.length;a++)if(e[a]===s){e.splice(a,1);break}}return[n,i]}function Tu(t){return t.exception&&t.exception.values?t.exception.values[0]:void 0}function G_(t){const{message:e,event_id:n}=t;if(e)return e;const i=Tu(t);return i?i.type&&i.value?`${i.type}: ${i.value}`:i.type||i.value||n||"<unknown>":n||"<unknown>"}function ho(t,e,n){const i=t.exception=t.exception||{},s=i.values=i.values||[],a=s[0]=s[0]||{};a.value||(a.value=e||""),a.type||(a.type=n||"Error")}function Li(t,e){const n=Tu(t);if(!n)return;const i={type:"generic",handled:!0},s=n.mechanism;if(n.mechanism={...i,...s,...e},e&&"data"in e){const a={...s&&s.data,...e.data};n.mechanism.data=a}}function Z_(){return typeof __SENTRY_BROWSER_BUNDLE__<"u"&&!!__SENTRY_BROWSER_BUNDLE__}function q_(){return"npm"}function V_(){return!Z_()&&Object.prototype.toString.call(typeof process<"u"?process:0)==="[object process]"}function X_(t,e){return t.require(e)}function J_(t,e=100,n=1/0){try{return po("",t,e,n)}catch(i){return{ERROR:`**non-serializable** (${i})`}}}function ku(t,e=3,n=100*1024){const i=J_(t,e);return ty(i)>n?ku(t,e-1,n):i}function po(t,e,n=1/0,i=1/0,s=U_()){const[a,d]=s;if(e==null||["number","boolean","string"].includes(typeof e)&&!x_(e))return e;const m=Q_(t,e);if(!m.startsWith("[object "))return m;if(e.__sentry_skip_normalization__)return e;const g=typeof e.__sentry_override_normalization_depth__=="number"?e.__sentry_override_normalization_depth__:n;if(g===0)return m.replace("object ","");if(a(e))return"[Circular ~]";const v=e;if(v&&typeof v.toJSON=="function")try{const O=v.toJSON();return po("",O,g-1,i,s)}catch{}const C=Array.isArray(e)?[]:{};let S=0;const I=wu(e);for(const O in I){if(!Object.prototype.hasOwnProperty.call(I,O))continue;if(S>=i){C[O]="[MaxProperties ~]";break}const A=I[O];C[O]=po(O,A,g-1,i,s),S++}return d(e),C}function Q_(t,e){try{if(t==="domain"&&e&&typeof e=="object"&&e._events)return"[Domain]";if(t==="domainEmitter")return"[DomainEmitter]";if(typeof global<"u"&&e===global)return"[Global]";if(typeof window<"u"&&e===window)return"[Window]";if(typeof document<"u"&&e===document)return"[Document]";if(b_(e))return"[SyntheticEvent]";if(typeof e=="number"&&e!==e)return"[NaN]";if(typeof e=="function")return`[Function: ${sn(e)}]`;if(typeof e=="symbol")return`[${String(e)}]`;if(typeof e=="bigint")return`[BigInt: ${String(e)}]`;const n=K_(e);return/^HTML(\w*)Element$/.test(n)?`[HTMLElement: ${n}]`:`[object ${n}]`}catch(n){return`**non-serializable** (${n})`}}function K_(t){const e=Object.getPrototypeOf(t);return e?e.constructor.name:"null prototype"}function ey(t){return~-encodeURI(t).split(/%..|./).length}function ty(t){return ey(JSON.stringify(t))}var Ft;(function(t){t[t.PENDING=0]="PENDING";const n=1;t[t.RESOLVED=n]="RESOLVED";const i=2;t[t.REJECTED=i]="REJECTED"})(Ft||(Ft={}));function Mu(t){return new at(e=>{e(t)})}function ny(t){return new at((e,n)=>{n(t)})}class at{__init(){this._state=Ft.PENDING}__init2(){this._handlers=[]}constructor(e){at.prototype.__init.call(this),at.prototype.__init2.call(this),at.prototype.__init3.call(this),at.prototype.__init4.call(this),at.prototype.__init5.call(this),at.prototype.__init6.call(this);try{e(this._resolve,this._reject)}catch(n){this._reject(n)}}then(e,n){return new at((i,s)=>{this._handlers.push([!1,a=>{if(!e)i(a);else try{i(e(a))}catch(d){s(d)}},a=>{if(!n)s(a);else try{i(n(a))}catch(d){s(d)}}]),this._executeHandlers()})}catch(e){return this.then(n=>n,e)}finally(e){return new at((n,i)=>{let s,a;return this.then(d=>{a=!1,s=d,e&&e()},d=>{a=!0,s=d,e&&e()}).then(()=>{if(a){i(s);return}n(s)})})}__init3(){this._resolve=e=>{this._setResult(Ft.RESOLVED,e)}}__init4(){this._reject=e=>{this._setResult(Ft.REJECTED,e)}}__init5(){this._setResult=(e,n)=>{if(this._state===Ft.PENDING){if(y_(n)){n.then(this._resolve,this._reject);return}this._state=e,this._value=n,this._executeHandlers()}}}__init6(){this._executeHandlers=()=>{if(this._state===Ft.PENDING)return;const e=this._handlers.slice();this._handlers=[],e.forEach(n=>{n[0]||(this._state===Ft.RESOLVED&&n[1](this._value),this._state===Ft.REJECTED&&n[2](this._value),n[0]=!0)})}}}function Ws(t){if(!t)return{};const e=t.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);if(!e)return{};const n=e[6]||"",i=e[8]||"";return{host:e[4],path:e[5],protocol:e[2],search:n,hash:i,relative:e[5]+n+i}}const iy=["fatal","error","warning","log","info","debug"];function ry(t){return t==="warn"?"warning":iy.includes(t)?t:"log"}const Iu=Zi(),mo={nowSeconds:()=>Date.now()/1e3};function sy(){const{performance:t}=Iu;if(!t||!t.now)return;const e=Date.now()-t.now();return{now:()=>t.now(),timeOrigin:e}}function oy(){try{return X_(module,"perf_hooks").performance}catch{return}}const zs=V_()?oy():sy(),Lc=zs===void 0?mo:{nowSeconds:()=>(zs.timeOrigin+zs.now())/1e3},ay=mo.nowSeconds.bind(mo);Lc.nowSeconds.bind(Lc);(()=>{const{performance:t}=Iu;if(!t||!t.now)return;const e=3600*1e3,n=t.now(),i=Date.now(),s=t.timeOrigin?Math.abs(t.timeOrigin+n-i):e,a=s<e,d=t.timing&&t.timing.navigationStart,g=typeof d=="number"?Math.abs(d+n-i):e,v=g<e;return a||v?s<=g?t.timeOrigin:d:i})();function Du(t,e=[]){return[t,e]}function cy(t,e,n){const i=[{type:"client_report"},{timestamp:n||ay(),discarded_events:t}];return Du(e?{dsn:e}:{},[i])}const be=Jn;let go=0;function Pu(){return go>0}function ly(){go++,setTimeout(()=>{go--})}function Qn(t,e={},n){if(typeof t!="function")return t;try{const s=t.__sentry_wrapped__;if(s)return s;if(vu(t))return t}catch{return t}const i=function(){const s=Array.prototype.slice.call(arguments);try{n&&typeof n=="function"&&n.apply(this,arguments);const a=s.map(d=>Qn(d,e));return t.apply(this,a)}catch(a){throw ly(),L0(d=>{d.addEventProcessor(m=>(e.mechanism&&(ho(m,void 0,void 0),Li(m,e.mechanism)),m.extra={...m.extra,arguments:s},m)),R0(a)}),a}};try{for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(i[s]=t[s])}catch{}xu(i,t),bu(t,"__sentry_wrapped__",i);try{Object.getOwnPropertyDescriptor(i,"name").configurable&&Object.defineProperty(i,"name",{get(){return t.name}})}catch{}return i}function Au(t,e){const n=Ko(t,e),i={type:e&&e.name,value:hy(e)};return n.length&&(i.stacktrace={frames:n}),i.type===void 0&&i.value===""&&(i.value="Unrecoverable error caught"),i}function uy(t,e,n,i){const a=Ae().getClient(),d=a&&a.getOptions().normalizeDepth,m={exception:{values:[{type:Xr(e)?e.constructor.name:i?"UnhandledRejection":"Error",value:gy(e,{isUnhandledRejection:i})}]},extra:{__serialized__:ku(e,d)}};if(n){const g=Ko(t,n);g.length&&(m.exception.values[0].stacktrace={frames:g})}return m}function Bs(t,e){return{exception:{values:[Au(t,e)]}}}function Ko(t,e){const n=e.stacktrace||e.stack||"",i=fy(e);try{return t(n,i)}catch{}return[]}const dy=/Minified React error #\d+;/i;function fy(t){if(t){if(typeof t.framesToPop=="number")return t.framesToPop;if(dy.test(t.message))return 1}return 0}function hy(t){const e=t&&t.message;return e?e.error&&typeof e.error.message=="string"?e.error.message:e:"No error message"}function py(t,e,n,i){const s=n&&n.syntheticException||void 0,a=ea(t,e,s,i);return Li(a),a.level="error",n&&n.event_id&&(a.event_id=n.event_id),Mu(a)}function my(t,e,n="info",i,s){const a=i&&i.syntheticException||void 0,d=_o(t,e,a,s);return d.level=n,i&&i.event_id&&(d.event_id=i.event_id),Mu(d)}function ea(t,e,n,i,s){let a;if(Qo(e)&&e.error)return Bs(t,e.error);if(Ec(e)||m_(e)){const d=e;if("stack"in e)a=Bs(t,e);else{const m=d.name||(Ec(d)?"DOMError":"DOMException"),g=d.message?`${m}: ${d.message}`:m;a=_o(t,g,n,i),ho(a,g)}return"code"in d&&(a.tags={...a.tags,"DOMException.code":`${d.code}`}),a}return gu(e)?Bs(t,e):_u(e)||Xr(e)?(a=uy(t,e,n,s),Li(a,{synthetic:!0}),a):(a=_o(t,e,n,i),ho(a,`${e}`,void 0),Li(a,{synthetic:!0}),a)}function _o(t,e,n,i){const s={message:e};if(i&&n){const a=Ko(t,n);a.length&&(s.exception={values:[{value:e,stacktrace:{frames:a}}]})}return s}function gy(t,{isUnhandledRejection:e}){const n=M_(t),i=e?"promise rejection":"exception";return Qo(t)?`Event \`ErrorEvent\` captured as ${i} with message \`${t.message}\``:Xr(t)?`Event \`${_y(t)}\` (type=${t.type}) captured as ${i}`:`Object captured as ${i} with keys: ${n}`}function _y(t){try{const e=Object.getPrototypeOf(t);return e?e.constructor.name:void 0}catch{}}const gr=1024,Nu="Breadcrumbs";class Oi{static __initStatic(){this.id=Nu}__init(){this.name=Oi.id}constructor(e){Oi.prototype.__init.call(this),this.options={console:!0,dom:!0,fetch:!0,history:!0,sentry:!0,xhr:!0,...e}}setupOnce(){this.options.console&&Qt("console",by),this.options.dom&&Qt("dom",yy(this.options.dom)),this.options.xhr&&Qt("xhr",xy),this.options.fetch&&Qt("fetch",vy),this.options.history&&Qt("history",wy)}addSentryBreadcrumb(e){this.options.sentry&&Ae().addBreadcrumb({category:`sentry.${e.type==="transaction"?"transaction":"event"}`,event_id:e.event_id,level:e.level,message:G_(e)},{event:e})}}Oi.__initStatic();function yy(t){function e(n){let i,s=typeof t=="object"?t.serializeAttribute:void 0,a=typeof t=="object"&&typeof t.maxStringLength=="number"?t.maxStringLength:void 0;a&&a>gr&&((typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&Ke.warn(`\`dom.maxStringLength\` cannot exceed ${gr}, but a value of ${a} was configured. Sentry will use ${gr} instead.`),a=gr),typeof s=="string"&&(s=[s]);try{const d=n.event;i=Sy(d)?co(d.target,{keyAttrs:s,maxStringLength:a}):co(d,{keyAttrs:s,maxStringLength:a})}catch{i="<unknown>"}i.length!==0&&Ae().addBreadcrumb({category:`ui.${n.name}`,message:i},{event:n.event,name:n.name,global:n.global})}return e}function by(t){for(let n=0;n<t.args.length;n++)if(t.args[n]==="ref=Ref<"){t.args[n+1]="viewRef";break}const e={category:"console",data:{arguments:t.args,logger:"console"},level:ry(t.level),message:Mc(t.args," ")};if(t.level==="assert")if(t.args[0]===!1)e.message=`Assertion failed: ${Mc(t.args.slice(1)," ")||"console.assert"}`,e.data.arguments=t.args.slice(1);else return;Ae().addBreadcrumb(e,{input:t.args,level:t.level})}function xy(t){const{startTimestamp:e,endTimestamp:n}=t,i=t.xhr[_i];if(!e||!n||!i)return;const{method:s,url:a,status_code:d,body:m}=i,g={method:s,url:a,status_code:d},v={xhr:t.xhr,input:m,startTimestamp:e,endTimestamp:n};Ae().addBreadcrumb({category:"xhr",data:g,type:"http"},v)}function vy(t){const{startTimestamp:e,endTimestamp:n}=t;if(n&&!(t.fetchData.url.match(/sentry_key/)&&t.fetchData.method==="POST"))if(t.error){const i=t.fetchData,s={data:t.error,input:t.args,startTimestamp:e,endTimestamp:n};Ae().addBreadcrumb({category:"fetch",data:i,level:"error",type:"http"},s)}else{const i={...t.fetchData,status_code:t.response&&t.response.status},s={input:t.args,response:t.response,startTimestamp:e,endTimestamp:n};Ae().addBreadcrumb({category:"fetch",data:i,type:"http"},s)}}function wy(t){let e=t.from,n=t.to;const i=Ws(be.location.href);let s=Ws(e);const a=Ws(n);s.path||(s=i),i.protocol===a.protocol&&i.host===a.host&&(n=a.relative),i.protocol===s.protocol&&i.host===s.host&&(e=s.relative),Ae().addBreadcrumb({category:"navigation",data:{from:e,to:n}})}function Sy(t){return!!t&&!!t.target}function Cy(t,{metadata:e,tunnel:n,dsn:i}){const s={event_id:t.event_id,sent_at:new Date().toISOString(),...e&&e.sdk&&{sdk:{name:e.sdk.name,version:e.sdk.version}},...!!n&&!!i&&{dsn:yu(i)}},a=Ey(t);return Du(s,[a])}function Ey(t){return[{type:"user_report"},t]}class Ty extends mn{constructor(e){const n=be.SENTRY_SDK_SOURCE||q_();e._metadata=e._metadata||{},e._metadata.sdk=e._metadata.sdk||{name:"sentry.javascript.browser",packages:[{name:`${n}:@sentry/browser`,version:Sc}],version:Sc},super(e),e.sendClientReports&&be.document&&be.document.addEventListener("visibilitychange",()=>{be.document.visibilityState==="hidden"&&this._flushOutcomes()})}eventFromException(e,n){return py(this._options.stackParser,e,n,this._options.attachStacktrace)}eventFromMessage(e,n="info",i){return my(this._options.stackParser,e,n,i,this._options.attachStacktrace)}sendEvent(e,n){const i=this.getIntegrationById(Nu);i&&i.addSentryBreadcrumb&&i.addSentryBreadcrumb(e),super.sendEvent(e,n)}captureUserFeedback(e){if(!this._isEnabled()){(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&Ke.warn("SDK not enabled, will not capture user feedback.");return}const n=Cy(e,{metadata:this.getSdkMetadata(),dsn:this.getDsn(),tunnel:this.getOptions().tunnel});this._sendEnvelope(n)}_prepareEvent(e,n,i){return e.platform=e.platform||"javascript",super._prepareEvent(e,n,i)}_flushOutcomes(){const e=this._clearOutcomes();if(e.length===0){(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&Ke.log("No outcomes to send");return}if(!this._dsn){(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&Ke.log("No dsn provided, will not send outcomes");return}(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&Ke.log("Sending outcomes:",e);const n=cy(e,this._options.tunnel&&yu(this._dsn));this._sendEnvelope(n)}}let yi;function ky(){if(yi)return yi;if(uo(be.fetch))return yi=be.fetch.bind(be);const t=be.document;let e=be.fetch;if(t&&typeof t.createElement=="function")try{const n=t.createElement("iframe");n.hidden=!0,t.head.appendChild(n);const i=n.contentWindow;i&&i.fetch&&(e=i.fetch),t.head.removeChild(n)}catch(n){(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&Ke.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ",n)}return yi=e.bind(be)}function My(){yi=void 0}function Iy(t,e=ky()){let n=0,i=0;function s(a){const d=a.body.length;n+=d,i++;const m={body:a.body,method:"POST",referrerPolicy:"origin",headers:t.headers,keepalive:n<=6e4&&i<15,...t.fetchOptions};try{return e(t.url,m).then(g=>(n-=d,i--,{statusCode:g.status,headers:{"x-sentry-rate-limits":g.headers.get("X-Sentry-Rate-Limits"),"retry-after":g.headers.get("Retry-After")}}))}catch(g){return My(),n-=d,i--,ny(g)}}return pu(t,s)}const Dy=4;function Py(t){function e(n){return new at((i,s)=>{const a=new XMLHttpRequest;a.onerror=s,a.onreadystatechange=()=>{a.readyState===Dy&&i({statusCode:a.status,headers:{"x-sentry-rate-limits":a.getResponseHeader("X-Sentry-Rate-Limits"),"retry-after":a.getResponseHeader("Retry-After")}})},a.open("POST",t.url);for(const d in t.headers)Object.prototype.hasOwnProperty.call(t.headers,d)&&a.setRequestHeader(d,t.headers[d]);a.send(n.body)})}return pu(t,e)}const Jr="?",Ay=30,Ny=40,Ry=50;function ta(t,e,n,i){const s={filename:t,function:e,in_app:!0};return n!==void 0&&(s.lineno=n),i!==void 0&&(s.colno=i),s}const Ly=/^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,Oy=/\((\S*)(?::(\d+))(?::(\d+))\)/,Yy=t=>{const e=Ly.exec(t);if(e){if(e[2]&&e[2].indexOf("eval")===0){const a=Oy.exec(e[2]);a&&(e[2]=a[1],e[3]=a[2],e[4]=a[3])}const[i,s]=Ru(e[1]||Jr,e[2]);return ta(s,i,e[3]?+e[3]:void 0,e[4]?+e[4]:void 0)}},jy=[Ay,Yy],$y=/^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,Fy=/(\S+) line (\d+)(?: > eval line \d+)* > eval/i,Hy=t=>{const e=$y.exec(t);if(e){if(e[3]&&e[3].indexOf(" > eval")>-1){const a=Fy.exec(e[3]);a&&(e[1]=e[1]||"eval",e[3]=a[1],e[4]=a[2],e[5]="")}let i=e[3],s=e[1]||Jr;return[s,i]=Ru(s,i),ta(i,s,e[4]?+e[4]:void 0,e[5]?+e[5]:void 0)}},Wy=[Ry,Hy],zy=/^\s*at (?:((?:\[object object\])?.+) )?\(?((?:[-a-z]+):.*?):(\d+)(?::(\d+))?\)?\s*$/i,By=t=>{const e=zy.exec(t);return e?ta(e[2],e[1]||Jr,+e[3],e[4]?+e[4]:void 0):void 0},Uy=[Ny,By],Gy=[jy,Wy,Uy],Zy=Cu(...Gy),Ru=(t,e)=>{const n=t.indexOf("safari-extension")!==-1,i=t.indexOf("safari-web-extension")!==-1;return n||i?[t.indexOf("@")!==-1?t.split("@")[0]:Jr,n?`safari-extension:${e}`:`safari-web-extension:${e}`]:[t,e]};class rn{static __initStatic(){this.id="GlobalHandlers"}__init(){this.name=rn.id}__init2(){this._installFunc={onerror:qy,onunhandledrejection:Vy}}constructor(e){rn.prototype.__init.call(this),rn.prototype.__init2.call(this),this._options={onerror:!0,onunhandledrejection:!0,...e}}setupOnce(){Error.stackTraceLimit=50;const e=this._options;for(const n in e){const i=this._installFunc[n];i&&e[n]&&(Qy(n),i(),this._installFunc[n]=void 0)}}}rn.__initStatic();function qy(){Qt("error",t=>{const[e,n,i]=Yu();if(!e.getIntegration(rn))return;const{msg:s,url:a,line:d,column:m,error:g}=t;if(Pu()||g&&g.__sentry_own_request__)return;const v=g===void 0&&Ri(s)?Jy(s,a,d,m):Lu(ea(n,g||s,void 0,i,!1),a,d,m);v.level="error",Ou(e,g,v,"onerror")})}function Vy(){Qt("unhandledrejection",t=>{const[e,n,i]=Yu();if(!e.getIntegration(rn))return;let s=t;try{"reason"in t?s=t.reason:"detail"in t&&"reason"in t.detail&&(s=t.detail.reason)}catch{}if(Pu()||s&&s.__sentry_own_request__)return!0;const a=g_(s)?Xy(s):ea(n,s,void 0,i,!0);a.level="error",Ou(e,s,a,"onunhandledrejection")})}function Xy(t){return{exception:{values:[{type:"UnhandledRejection",value:`Non-Error promise rejection captured with value: ${String(t)}`}]}}}function Jy(t,e,n,i){const s=/^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i;let a=Qo(t)?t.message:t,d="Error";const m=a.match(s);return m&&(d=m[1],a=m[2]),Lu({exception:{values:[{type:d,value:a}]}},e,n,i)}function Lu(t,e,n,i){const s=t.exception=t.exception||{},a=s.values=s.values||[],d=a[0]=a[0]||{},m=d.stacktrace=d.stacktrace||{},g=m.frames=m.frames||[],v=isNaN(parseInt(i,10))?void 0:i,C=isNaN(parseInt(n,10))?void 0:n,S=Ri(e)&&e.length>0?e:E_();return g.length===0&&g.push({colno:v,filename:S,function:"?",in_app:!0,lineno:C}),t}function Qy(t){(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&Ke.log(`Global Handler attached: ${t}`)}function Ou(t,e,n,i){Li(n,{handled:!1,type:i}),t.captureEvent(n,{originalException:e})}function Yu(){const t=Ae(),e=t.getClient(),n=e&&e.getOptions()||{stackParser:()=>[],attachStacktrace:!1};return[t,n.stackParser,n.attachStacktrace]}const Ky=["EventTarget","Window","Node","ApplicationCache","AudioTrackList","ChannelMergerNode","CryptoOperation","EventSource","FileReader","HTMLUnknownElement","IDBDatabase","IDBRequest","IDBTransaction","KeyOperation","MediaController","MessagePort","ModalWindow","Notification","SVGElementInstance","Screen","TextTrack","TextTrackCue","TextTrackList","WebSocket","WebSocketWorker","Worker","XMLHttpRequest","XMLHttpRequestEventTarget","XMLHttpRequestUpload"];class Yi{static __initStatic(){this.id="TryCatch"}__init(){this.name=Yi.id}constructor(e){Yi.prototype.__init.call(this),this._options={XMLHttpRequest:!0,eventTarget:!0,requestAnimationFrame:!0,setInterval:!0,setTimeout:!0,...e}}setupOnce(){this._options.setTimeout&&Ye(be,"setTimeout",Oc),this._options.setInterval&&Ye(be,"setInterval",Oc),this._options.requestAnimationFrame&&Ye(be,"requestAnimationFrame",eb),this._options.XMLHttpRequest&&"XMLHttpRequest"in be&&Ye(XMLHttpRequest.prototype,"send",tb);const e=this._options.eventTarget;e&&(Array.isArray(e)?e:Ky).forEach(nb)}}Yi.__initStatic();function Oc(t){return function(...e){const n=e[0];return e[0]=Qn(n,{mechanism:{data:{function:sn(t)},handled:!0,type:"instrument"}}),t.apply(this,e)}}function eb(t){return function(e){return t.apply(this,[Qn(e,{mechanism:{data:{function:"requestAnimationFrame",handler:sn(t)},handled:!0,type:"instrument"}})])}}function tb(t){return function(...e){const n=this;return["onload","onerror","onprogress","onreadystatechange"].forEach(s=>{s in n&&typeof n[s]=="function"&&Ye(n,s,function(a){const d={mechanism:{data:{function:s,handler:sn(a)},handled:!0,type:"instrument"}},m=vu(a);return m&&(d.mechanism.data.handler=sn(m)),Qn(a,d)})}),t.apply(this,e)}}function nb(t){const e=be,n=e[t]&&e[t].prototype;!n||!n.hasOwnProperty||!n.hasOwnProperty("addEventListener")||(Ye(n,"addEventListener",function(i){return function(s,a,d){try{typeof a.handleEvent=="function"&&(a.handleEvent=Qn(a.handleEvent,{mechanism:{data:{function:"handleEvent",handler:sn(a),target:t},handled:!0,type:"instrument"}}))}catch{}return i.apply(this,[s,Qn(a,{mechanism:{data:{function:"addEventListener",handler:sn(a),target:t},handled:!0,type:"instrument"}}),d])}}),Ye(n,"removeEventListener",function(i){return function(s,a,d){const m=a;try{const g=m&&m.__sentry_wrapped__;g&&i.call(this,s,g,d)}catch{}return i.call(this,s,m,d)}}))}const ib="cause",rb=5;class Bn{static __initStatic(){this.id="LinkedErrors"}__init(){this.name=Bn.id}constructor(e={}){Bn.prototype.__init.call(this),this._key=e.key||ib,this._limit=e.limit||rb}setupOnce(){const e=Ae().getClient();e&&Jo((n,i)=>{const s=Ae().getIntegration(Bn);return s?sb(e.getOptions().stackParser,s._key,s._limit,n,i):n})}}Bn.__initStatic();function sb(t,e,n,i,s){if(!i.exception||!i.exception.values||!s||!ni(s.originalException,Error))return i;const a=ju(t,n,s.originalException,e);return i.exception.values=[...a,...i.exception.values],i}function ju(t,e,n,i,s=[]){if(!ni(n[i],Error)||s.length+1>=e)return s;const a=Au(t,n[i]);return ju(t,e,n[i],i,[a,...s])}class Un{constructor(){Un.prototype.__init.call(this)}static __initStatic(){this.id="HttpContext"}__init(){this.name=Un.id}setupOnce(){Jo(e=>{if(Ae().getIntegration(Un)){if(!be.navigator&&!be.location&&!be.document)return e;const n=e.request&&e.request.url||be.location&&be.location.href,{referrer:i}=be.document||{},{userAgent:s}=be.navigator||{},a={...e.request&&e.request.headers,...i&&{Referer:i},...s&&{"User-Agent":s}},d={...e.request,...n&&{url:n},headers:a};return{...e,request:d}}return e})}}Un.__initStatic();class Gn{constructor(){Gn.prototype.__init.call(this)}static __initStatic(){this.id="Dedupe"}__init(){this.name=Gn.id}setupOnce(e,n){const i=s=>{if(s.type)return s;const a=n().getIntegration(Gn);if(a){try{if(ob(s,a._previousEvent))return(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&Ke.warn("Event dropped due to being a duplicate of previously captured event."),null}catch{return a._previousEvent=s}return a._previousEvent=s}return s};i.id=this.name,e(i)}}Gn.__initStatic();function ob(t,e){return e?!!(ab(t,e)||cb(t,e)):!1}function ab(t,e){const n=t.message,i=e.message;return!(!n&&!i||n&&!i||!n&&i||n!==i||!Fu(t,e)||!$u(t,e))}function cb(t,e){const n=Yc(e),i=Yc(t);return!(!n||!i||n.type!==i.type||n.value!==i.value||!Fu(t,e)||!$u(t,e))}function $u(t,e){let n=jc(t),i=jc(e);if(!n&&!i)return!0;if(n&&!i||!n&&i||(n=n,i=i,i.length!==n.length))return!1;for(let s=0;s<i.length;s++){const a=i[s],d=n[s];if(a.filename!==d.filename||a.lineno!==d.lineno||a.colno!==d.colno||a.function!==d.function)return!1}return!0}function Fu(t,e){let n=t.fingerprint,i=e.fingerprint;if(!n&&!i)return!0;if(n&&!i||!n&&i)return!1;n=n,i=i;try{return n.join("")===i.join("")}catch{return!1}}function Yc(t){return t.exception&&t.exception.values&&t.exception.values[0]}function jc(t){const e=t.exception;if(e)try{return e.values[0].stacktrace.frames}catch{return}}const lb=[new zn,new Ni,new Yi,new Oi,new rn,new Bn,new Gn,new Un];function ub(t={}){t.defaultIntegrations===void 0&&(t.defaultIntegrations=lb),t.release===void 0&&(typeof __SENTRY_RELEASE__=="string"&&(t.release=__SENTRY_RELEASE__),be.SENTRY_RELEASE&&be.SENTRY_RELEASE.id&&(t.release=be.SENTRY_RELEASE.id)),t.autoSessionTracking===void 0&&(t.autoSessionTracking=!0),t.sendClientReports===void 0&&(t.sendClientReports=!0);const e={...t,stackParser:I_(t.stackParser||Zy),integrations:U0(t),transport:t.transport||(Eu()?Iy:Py)};n_(Ty,e),t.autoSessionTracking&&db()}function $c(t){t.startSession({ignoreDuration:!0}),t.captureSession()}function db(){if(typeof be.document>"u"){(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&Ke.warn("Session tracking in non-browser environment with @sentry/browser is not supported.");return}const t=Ae();t.captureSession&&($c(t),Qt("history",({from:e,to:n})=>{e===void 0||e===n||$c(Ae())}))}function Us(t,e,n){let i=null;return e&&(e.width&&e.height?e.centerPoint={x:e.width/2,y:e.height/2}:(delete e.width,delete e.height)),i=new N.fabric.CustomIcon(t,e),typeof n<"u"&&(i.sourcePath=n),i}const ax=()=>{N.fabric.CustomIcon=N.fabric.util.createClass(N.fabric.Group,{type:"CustomIcon",initialize:function(t,e,n){this.callSuper("initialize",t,e,n)},toObject:function(t){return this.callSuper("toObject",t)}}),N.fabric.CustomIcon.fromURL=function(t,e,n){const i=n||{};N.fabric.loadSVGFromURL(t,function(s,a){i.width=a.width,i.height=a.height;const d=Us(s,{...i});if(i.initColor){const m=d._objects;for(let g=0;g<=m.length-1;g++)m[g].fill&&(m[g].fill=i.fill?i.fill:""),m[g].stroke&&(m[g].stroke=i.stroke?i.stroke:"")}e(d)},()=>{},{crossOrigin:"anonymous"})},N.fabric.CustomIcon.fromString=function(t,e,n){const i=n||{};N.fabric.loadSVGFromString(t,function(s,a){i.width=a.width,i.height=a.height;const d=Us(s,{...i});e(d)},()=>{},{crossOrigin:"anonymous"})},N.fabric.CustomIcon.fromObject=function(t,e){const n=t.objects,i=N.fabric.util.object.clone(t,!0);if(delete i.objects,typeof n=="string"){N.fabric.loadSVGFromURL(n,function(s){const a=Us(s,t,i),d=i.clipPath;delete i.clipPath,a.set(i),d?N.fabric.util.enlivenObjects([d],function(m){a.clipPath=m[0],e&&e(a)}):e&&e(a)});return}N.fabric.util.enlivenObjects(n,function(s){N.fabric.util.enlivenObjectEnlivables(t,i,function(){e&&e(new N.fabric.CustomIcon(s,i,!0))})})}},cx=()=>{N.fabric.CustomImage=N.fabric.util.createClass(N.fabric.Group,{type:"CustomImage",initialize:function(t,e,n){this.callSuper("initialize",t,e,n),this.on("moving",i=>{i.e;const s=i.transform.target;s.clipPath&&(s.clipPath.left=s.left,s.clipPath.top=s.top)}),this.on("scaling",i=>{const s=i.transform.target;if(s.clipPath){const a=s.clipPath;a.left=s.left,a.top=s.top,a.scaleX=s.scaleX,a.scaleY=s.scaleY}}),this.on("rotating",i=>{const s=i.transform.target;if(s.clipPath){const a=s.clipPath;a.left=s.left,a.top=s.top,a.angle=s.angle}})},toObject:function(t){const e=this.includeDefaultValues,n=this._objects.filter(function(s){return!s.excludeFromExport}).map(function(s){const a=s.includeDefaultValues;s.includeDefaultValues=e;const d=s.toObject(t);return s.includeDefaultValues=a,d}),i=N.fabric.Object.prototype.toObject.call(this,t);return i.objects=n,i},loadCropImage(){const t=new Promise((s,a)=>{this.tlImg=new Image,this.tlImg.onload=()=>{s()},this.tlImg.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABHNCSVQICAgIfAhkiAAAAD9JREFUOE9j/A8EDFQEjCADe+yoY2LJIQaGIWggyNmUAAwvg8MBCMg1dNRABobRMCQ59YwmmxGTbNDTBiWlDQDdK3QBA5VRbwAAAABJRU5ErkJggg=="}),e=new Promise((s,a)=>{this.trImg=new Image,this.trImg.onload=()=>{s()},this.trImg.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABHNCSVQICAgIfAhkiAAAAD1JREFUOE9j/A8EDFQEjCADe+yoY2LJIQaGIWIgJR5GDi6wlykxDD38Rw0kPTRHw5BhNNmMJhsiQgBb9QEAP2ZzxbEFl0cAAAAASUVORK5CYII="}),n=new Promise((s,a)=>{this.blImg=new Image,this.blImg.onload=()=>{s()},this.blImg.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABHNCSVQICAgIfAhkiAAAAExJREFUOE9j/A8EDGiAEQjQxYjlM4IM7LFDKC85xMAwaiCxwQdWNxqGDAyjyYakJDOabCDBBUo2lACMrEeJYeA0jF4eDk4DKXEVul4APCZ0AWhtejIAAAAASUVORK5CYII="}),i=new Promise((s,a)=>{this.brImg=new Image,this.brImg.onload=()=>{s()},this.brImg.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABHNCSVQICAgIfAhkiAAAAExJREFUOE9jZKAA/AcCdO2MFJjHADKwxw5hQskhBoZRA0kL0dEwZBhNNqQlGZDqIZpssBVBpHgeo7RBDwdSDENXC06HQ8NASryJrhcAP2ZzxQ7axFoAAAAASUVORK5CYII="});return Promise.all([t,e,n,i])},doCrop:async function(){this.isClip=!0,this.clipPath&&(this.lastClipPath=this.clipPath,this.clipPath=null,this.dirty=!0,this.canvas.renderAll()),await this.loadCropImage();const t=`M ${this.left} ${this.top} H ${this.left+this.width} V ${this.top+this.height} H ${this.left} Z`,e=new N.fabric.Path(t,{absolutePositioned:!0,left:this.left,top:this.top,scaleX:this.scaleX,scaleY:this.scaleY,angle:this.angle,fill:"transparent",strokeWidth:0,belongTo:this});e.setControlsVisibility({mtr:!1,mt:!1,ml:!1,mb:!1,mr:!1,lock:!1});const n=e.controls.tl.actionHandler,i=e.controls.tr.actionHandler,s=e.controls.bl.actionHandler,a=e.controls.br.actionHandler,d=e.controls.tl.render,m=e.controls.tr.render,g=e.controls.bl.render,v=e.controls.br.render;e.controls.tl.actionHandler=(C,S,I,O)=>{if(!this.isClip)return n(C,S,I,O),!0;const A=N.fabric.util.degreesToRadians(this.angle),$=this._objects[0],pe=$.left*this.scaleX,U=$.top*this.scaleY,Ze=this.left+this.getScaledWidth()/2,ze=this.top+this.getScaledHeight()/2;$.width*this.scaleX,$.height*this.scaleY;const Ne=Ze+pe,Be=ze+U,Ue=new N.fabric.Point(Ne,Be),u=new N.fabric.Point(this.left,this.top),ye=N.fabric.util.rotatePoint(new N.fabric.Point(e.left,e.top),u,-A),B=N.fabric.util.rotatePoint(new N.fabric.Point(I,O),u,-A),me=Ue.x,xe=Ue.y,Ce=ye.x+e.getScaledWidth(),q=ye.y+e.getScaledHeight(),de={};B.x<me?(e.scaleX=(Ce-me)/e.width,de.x=me):B.x>Ce?(e.scaleX=0,de.x=Ce):(e.scaleX=(Ce-B.x)/e.width,de.x=B.x),B.y<xe?(e.scaleY=(q-xe)/e.height,de.y=xe):B.y>q?(e.scaleY=0,de.y=q):(e.scaleY=(q-B.y)/e.height,de.y=B.y);const Ee=N.fabric.util.rotatePoint(new N.fabric.Point(de.x,de.y),u,A);return e.left=Ee.x,e.top=Ee.y,!0},e.controls.tr.actionHandler=(C,S,I,O)=>{if(!this.isClip)return i(C,S,I,O),!0;const A=N.fabric.util.degreesToRadians(this.angle),$=this._objects[0],pe=$.left*this.scaleX,U=$.top*this.scaleY,Ze=$.width*this.scaleX;$.height*this.scaleY;const ze=this.left+this.getScaledWidth()/2,Ne=this.top+this.getScaledHeight()/2,Be=ze+pe,Ue=Ne+U,u=new N.fabric.Point(Be,Ue),ye=new N.fabric.Point(this.left,this.top),B=N.fabric.util.rotatePoint(new N.fabric.Point(e.left,e.top),ye,-A),me=N.fabric.util.rotatePoint(new N.fabric.Point(I,O),ye,-A),xe=B.x,Ce=u.y,q=u.x+Ze,de=B.y+e.getScaledHeight(),Ee={};Ee.x=B.x,me.x<xe?e.scaleX=0:me.x>q?e.scaleX=(q-xe)/e.width:e.scaleX=(me.x-xe)/e.width,me.y<Ce?(e.scaleY=(de-Ce)/e.height,Ee.y=Ce):me.y>de?(e.scaleY=0,Ee.y=de):(e.scaleY=(de-me.y)/e.height,Ee.y=me.y);const et=N.fabric.util.rotatePoint(new N.fabric.Point(Ee.x,Ee.y),ye,A);return e.left=et.x,e.top=et.y,!0},e.controls.bl.actionHandler=(C,S,I,O)=>{if(!this.isClip)return s(C,S,I,O),!0;const A=N.fabric.util.degreesToRadians(this.angle),$=this._objects[0],pe=$.left*this.scaleX,U=$.top*this.scaleY;$.width*this.scaleX;const Ze=$.height*this.scaleY,ze=this.left+this.getScaledWidth()/2,Ne=this.top+this.getScaledHeight()/2,Be=ze+pe,Ue=Ne+U,u=new N.fabric.Point(Be,Ue),ye=new N.fabric.Point(this.left,this.top),B=N.fabric.util.rotatePoint(new N.fabric.Point(e.left,e.top),ye,-A),me=N.fabric.util.rotatePoint(new N.fabric.Point(I,O),ye,-A),xe=u.x,Ce=B.y,q=B.x+e.getScaledWidth(),de=u.y+Ze,Ee={};me.x<xe?(e.scaleX=(q-xe)/e.width,Ee.x=xe):me.x>q?(e.scaleX=0,Ee.x=q):(e.scaleX=(q-me.x)/e.width,Ee.x=me.x),Ee.y=B.y,me.y<Ce?e.scaleY=0:me.y>de?e.scaleY=(de-Ce)/e.height:e.scaleY=(me.y-Ce)/e.height;const et=N.fabric.util.rotatePoint(new N.fabric.Point(Ee.x,Ee.y),ye,A);return e.left=et.x,e.top=et.y,!0},e.controls.br.actionHandler=(C,S,I,O)=>{if(!this.isClip)return a(C,S,I,O),!0;const A=N.fabric.util.degreesToRadians(this.angle),$=this._objects[0],pe=$.left*this.scaleX,U=$.top*this.scaleY,Ze=$.width*this.scaleX,ze=$.height*this.scaleY,Ne=this.left+this.getScaledWidth()/2,Be=this.top+this.getScaledHeight()/2,Ue=Ne+pe,u=Be+U,ye=new N.fabric.Point(Ue,u),B=new N.fabric.Point(this.left,this.top),me=N.fabric.util.rotatePoint(new N.fabric.Point(e.left,e.top),B,-A),xe=N.fabric.util.rotatePoint(new N.fabric.Point(I,O),B,-A),Ce=me.x,q=me.y,de=ye.x+Ze,Ee=ye.y+ze,et={x:Ce,y:q};xe.x<Ce?e.scaleX=0:xe.x>de?e.scaleX=(de-Ce)/e.width:e.scaleX=(xe.x-Ce)/e.width,xe.y<q?e.scaleY=0:xe.y>Ee?e.scaleY=(Ee-q)/e.height:e.scaleY=(xe.y-q)/e.height;const he=N.fabric.util.rotatePoint(new N.fabric.Point(et.x,et.y),B,A);return e.left=he.x,e.top=he.y,!0},e.cornerSize=40,e.controls.tl.offsetX=10,e.controls.tl.offsetY=10,e.controls.tr.offsetX=-10,e.controls.tr.offsetY=10,e.controls.bl.offsetX=10,e.controls.bl.offsetY=-10,e.controls.br.offsetX=-10,e.controls.br.offsetY=-10,e.controls.tl.render=(C,S,I,O,A)=>{if(this.isClip){C.save(),C.translate(S,I);const pe=this.tlImg;C.rotate(N.fabric.util.degreesToRadians(A.angle)),C.drawImage(pe,-40/2,-40/2,40,40),C.restore()}else return d.call(this,C,S,I,O,A),!0},e.controls.tr.render=(C,S,I,O,A)=>{if(this.isClip){C.save(),C.translate(S,I);const pe=this.trImg;C.rotate(N.fabric.util.degreesToRadians(A.angle)),C.drawImage(pe,-40/2,-40/2,40,40),C.restore()}else return m.call(this,C,S,I,O,A),!0},e.controls.bl.render=(C,S,I,O,A)=>{if(this.isClip){C.save(),C.translate(S,I);const pe=this.blImg;C.rotate(N.fabric.util.degreesToRadians(A.angle)),C.drawImage(pe,-40/2,-40/2,40,40),C.restore()}else return g.call(this,C,S,I,O,A),!0},e.controls.br.render=(C,S,I,O,A)=>{if(this.isClip){C.save(),C.translate(S,I);const pe=this.brImg;C.rotate(N.fabric.util.degreesToRadians(A.angle)),C.drawImage(pe,-40/2,-40/2,40,40),C.restore()}else return v.call(this,C,S,I,O,A),!0},e.on("moving",({e:C,transform:S,pointer:I})=>{const O=this._objects[0],A=N.fabric.util.degreesToRadians(this.angle),$=O.left*this.scaleX,pe=O.top*this.scaleY,U=O.width*this.scaleX,Ze=O.height*this.scaleY,ze=this.left+this.getScaledWidth()/2,Ne=this.top+this.getScaledHeight()/2,Be=ze+$,Ue=Ne+pe,u=new N.fabric.Point(this.left,this.top),ye=new N.fabric.Point(Be,Ue),B=N.fabric.util.rotatePoint(new N.fabric.Point(e.left,e.top),u,-A);B.x<ye.x&&(B.x=ye.x),B.y<ye.y&&(B.y=ye.y);const me=B.x+e.getScaledWidth(),xe=ye.x+U;me>xe&&(B.x=xe-e.getScaledWidth());const Ce=B.y+e.getScaledHeight(),q=ye.y+Ze;Ce>q&&(B.y=q-e.getScaledHeight());const de=N.fabric.util.rotatePoint(B,u,A);e.set("left",de.x).set("top",de.y)}),this.clipBox=e,this.canvas.add(e),this.canvas.setActiveObject(e),this.canvas.renderAll()},cancelCrop:function(){if(this.isClip){if(this.lastClipPath){const t=this.lastClipPath;this.set({clipPath:t})}this.isClip=!1,this.canvas.remove(this.clipBox),this.canvas.renderAll()}},doneCrop:function(){if(this.isClip){this.clipBox.controls.tl.offsetX=0,this.clipBox.controls.tl.offsetY=0,this.clipBox.controls.tr.offsetX=0,this.clipBox.controls.tr.offsetY=0,this.clipBox.controls.bl.offsetX=0,this.clipBox.controls.bl.offsetY=0,this.clipBox.controls.br.offsetX=0,this.clipBox.controls.br.offsetY=0,this.lastClipPath=null,this.lastWidth=this.width,this.lastHeight=this.height;const t=this.clipBox.getScaledWidth()/this.scaleX,e=this.clipBox.getScaledHeight()/this.scaleY,n=`M ${this.clipBox.left} ${this.clipBox.top} H ${this.clipBox.left+t} V ${this.clipBox.top+e} H ${this.clipBox.left} Z`,i=new N.fabric.Path(n,{absolutePositioned:!0,originX:"left",originY:"top",scaleX:this.scaleX,scaleY:this.scaleY,angle:this.clipBox.angle,strokeWidth:0}),s=new N.fabric.Point(this.left,this.top),a=this.left+this.getScaledWidth()/2,d=this.top+this.getScaledHeight()/2;this.set({clipPath:i,width:i.getScaledWidth()/this.scaleX,height:i.getScaledHeight()/this.scaleY,left:i.left,top:i.top,dirty:!0});const m=N.fabric.util.degreesToRadians(this.angle),g=N.fabric.util.rotatePoint(new N.fabric.Point(this.left,this.top),s,-m),v=g.x+this.getScaledWidth()/2-a,C=g.y+this.getScaledHeight()/2-d;this.item(0).left=this.item(0).left-v/this.scaleX,this.item(0).top=this.item(0).top-C/this.scaleY,this.setCoords(),this.isClip=!1,this.canvas.remove(this.clipBox),this.canvas.renderAll()}}}),N.fabric.CustomImage.fromURL=function(t,e,n){const i=n||{};N.fabric.Image.fromURL(t,s=>{const a=new N.fabric.CustomImage([s],{objectCaching:!1,lockScalingFlip:!0,padding:5,...i});i.initWidth&&a.scaleToWidth(i.initWidth),i.initHeight&&a.scaleToWidth(i.initHeight),e&&e(a)},{crossOrigin:"anonymous",objectCaching:!1})},N.fabric.CustomImage.fromObject=function(t,e){const n=t.objects,i=N.fabric.util.object.clone(t,!0);if(delete i.objects,typeof n=="string"){N.fabric.loadSVGFromURL(n,function(s){const a=N.fabric.util.groupSVGElements(s,t,n),d=i.clipPath;delete i.clipPath,a.set(i),d?N.fabric.util.enlivenObjects([d],function(m){a.clipPath=m[0],e&&e(a)}):e&&e(a)});return}N.fabric.util.enlivenObjects(n,function(s){N.fabric.util.enlivenObjectEnlivables(t,i,function(){e&&e(new N.fabric.CustomImage(s,i,!0))})})}};function lx(){N.fabric.CustomVideo=N.fabric.util.createClass(N.fabric.CustomImage,{type:"CustomVideo",initialize:function(t,e,n){this.callSuper("initialize",t,e,n)},toObject:function(t){return this.callSuper("toObject",t)},mountVideo:function(){this._objects[0].setElement(document.getElementById(this.videoId)),this.dirty=!0,this._loaded=!0},pause:function(t){const e=document.querySelector("#"+this.videoId);if(!e)throw new Error("no video");e.pause(),t&&(e.currentTime=0)},play:function(){const t=document.querySelector("#"+this.videoId);t.paused&&t.play()}}),N.fabric.CustomVideo.fromCoverURL=function(t,e,n){const i=document.createElement("video");i.style.display="none",i.src=n._staticUrl||n._videoSrc,i.setAttribute("preload","auto"),i.setAttribute("crossorigin","anonymous");const s=Jd("abcdefghijklmnopqrstuvwxyz",8);i.id=s(),i.addEventListener("loadeddata",a=>{i.width=i.videoWidth,i.height=i.videoHeight}),document.body.appendChild(i),N.fabric.Image.fromURL(t,a=>{const d=new N.fabric.CustomVideo([a],{objectCaching:!1,lockScalingFlip:!0,videoId:i.id,_loop:!0,...n});n.initWidth&&d.scaleToWidth(n.initWidth),n.initHeight&&d.scaleToHeight(n.initHeight),e&&e(d)},{crossOrigin:"anonymous",objectCaching:!1})},N.fabric.CustomVideo.fromObject=function(t,e){const n=t.objects,i=N.fabric.util.object.clone(t,!0);if(delete i.objects,typeof n=="string"){N.fabric.loadSVGFromURL(n,function(s){const a=N.fabric.util.groupSVGElements(s,t,n),d=i.clipPath;delete i.clipPath,a.set(i),d?N.fabric.util.enlivenObjects([d],function(m){a.clipPath=m[0],e&&e(a)}):e&&e(a)});return}N.fabric.util.enlivenObjects(n,function(s){N.fabric.util.enlivenObjectEnlivables(t,i,function(){e&&e(new N.fabric.CustomVideo(s,i,!0))})})}}class Fc extends nn{constructor(){super()}render(){if(this.name==="loading")return $e`
        <div class="box">
          <div class="loader"></div>
        </div>
      `;if(this.name==="whiteLoading")return $e`
        <div class="box-white">
          <div class="loader"></div>
        </div>
      `;if(this.name==="playing")return $e`
        <div class="item-playing">
          <div class="fir"></div>
          <div class="sec"></div>
          <div class="thr"></div>
          <div class="fou"></div>
        </div>
      `;if(this.name==="preview")return $e`
        <div class="preview-box">
          <div class="loader"></div>
          <p>Loading...</p>
        </div>
      `}}ot(Fc,"properties",{name:{type:String}}),ot(Fc,"styles",zi`
    .item-playing {
      display: flex;
      align-items: center;
      margin-left: 8px;
    }
    .item-playing div {
      height: 15px;
      width: 3px;
      background-color: #8b3dff;
      margin-left: 2px;
      border-radius: 10px;
    }
    .item-playing div.fir {
      animation: playingAnimation1 1s linear infinite;
    }
    .item-playing div.sec {
      animation: playingAnimation2 1s linear infinite;
    }
    .item-playing div.thr {
      animation: playingAnimation3 1s linear infinite;
    }
    .item-playing div.fou {
      animation: playingAnimation4 1s linear infinite;
    }
    @keyframes playingAnimation1 {
      0% {
        height: 15px;
      }
      25% {
        height: 9px;
      }
      50% {
        height: 3px;
      }
      75% {
        height: 9px;
      }
      100% {
        height: 15px;
      }
    }
    @keyframes playingAnimation2 {
      0% {
        height: 9px;
      }
      25% {
        height: 15px;
      }
      50% {
        height: 9px;
      }
      75% {
        height: 3px;
      }
      100% {
        height: 9px;
      }
    }
    @keyframes playingAnimation3 {
      0% {
        height: 3px;
      }
      25% {
        height: 9px;
      }
      50% {
        height: 15px;
      }
      75% {
        height: 9px;
      }
      100% {
        height: 3px;
      }
    }
    @keyframes playingAnimation4 {
      0% {
        height: 9px;
      }
      25% {
        height: 3px;
      }
      50% {
        height: 9px;
      }
      75% {
        height: 15px;
      }
      100% {
        height: 9px;
      }
    }

    .loader {
      font-size: 3px;
      width: 4px;
      height: 4px;
      border-radius: 50%;
      position: relative;
      text-indent: -9999em;
      transform: translateZ(0);
    }

    .box {
      height: 32px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .box .loader {
      animation: blackAnimation 1.1s infinite ease;
    }
    .preview-box {
      /* height: 64px; */
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .preview-box p {
      margin-top: 20px;
      color: #8c8c97;
      font: normal normal normal 14px/19px Roboto;
    }
    .preview-box .loader {
      animation: blackAnimation 1.1s infinite ease;
    }

    .box-white {
      height: 32px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .box-white .loader {
      animation: whietAnimation 1.1s infinite ease;
    }

    @keyframes whietAnimation {
      0%,
      100% {
        box-shadow: 0em -2.6em 0em 0em #ffffff, 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.1),
          2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.3),
          0em 2.5em 0 0em rgba(255, 255, 255, 0.4), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.5),
          -2.6em 0em 0 0em rgba(255, 255, 255, 0.6), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.7);
      }

      12.5% {
        box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.7), 1.8em -1.8em 0 0em #ffffff,
          2.5em 0em 0 0em rgba(255, 255, 255, 0.1), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2),
          0em 2.5em 0 0em rgba(255, 255, 255, 0.3), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.4),
          -2.6em 0em 0 0em rgba(255, 255, 255, 0.5), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.6);
      }

      25% {
        box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.6),
          1.8em -1.8em 0 0em rgba(255, 255, 255, 0.7), 2.5em 0em 0 0em #ffffff,
          1.75em 1.75em 0 0em rgba(255, 255, 255, 0.1), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2),
          -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.3), -2.6em 0em 0 0em rgba(255, 255, 255, 0.4),
          -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.5);
      }

      37.5% {
        box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.5),
          1.8em -1.8em 0 0em rgba(255, 255, 255, 0.6), 2.5em 0em 0 0em rgba(255, 255, 255, 0.7),
          1.75em 1.75em 0 0em #ffffff, 0em 2.5em 0 0em rgba(255, 255, 255, 0.1),
          -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.3),
          -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.4);
      }

      50% {
        box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.4),
          1.8em -1.8em 0 0em rgba(255, 255, 255, 0.5), 2.5em 0em 0 0em rgba(255, 255, 255, 0.6),
          1.75em 1.75em 0 0em rgba(255, 255, 255, 0.7), 0em 2.5em 0 0em #ffffff,
          -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.1), -2.6em 0em 0 0em rgba(255, 255, 255, 0.2),
          -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.3);
      }

      62.5% {
        box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.3),
          1.8em -1.8em 0 0em rgba(255, 255, 255, 0.4), 2.5em 0em 0 0em rgba(255, 255, 255, 0.5),
          1.75em 1.75em 0 0em rgba(255, 255, 255, 0.6), 0em 2.5em 0 0em rgba(255, 255, 255, 0.7),
          -1.8em 1.8em 0 0em #ffffff, -2.6em 0em 0 0em rgba(255, 255, 255, 0.1),
          -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);
      }

      75% {
        box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2),
          1.8em -1.8em 0 0em rgba(255, 255, 255, 0.3), 2.5em 0em 0 0em rgba(255, 255, 255, 0.4),
          1.75em 1.75em 0 0em rgba(255, 255, 255, 0.5), 0em 2.5em 0 0em rgba(255, 255, 255, 0.6),
          -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.7), -2.6em 0em 0 0em #ffffff,
          -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.1);
      }

      87.5% {
        box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.1),
          1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.3),
          1.75em 1.75em 0 0em rgba(255, 255, 255, 0.4), 0em 2.5em 0 0em rgba(255, 255, 255, 0.5),
          -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.6), -2.6em 0em 0 0em rgba(255, 255, 255, 0.7),
          -1.8em -1.8em 0 0em #ffffff;
      }
    }

    @keyframes blackAnimation {
      0%,
      100% {
        box-shadow: 0em -2.6em 0em 0em #ffffff, 1.8em -1.8em 0 0em rgba(70, 70, 70, 0.1),
          2.5em 0em 0 0em rgba(70, 70, 70, 0.2), 1.75em 1.75em 0 0em rgba(70, 70, 70, 0.3),
          0em 2.5em 0 0em rgba(70, 70, 70, 0.4), -1.8em 1.8em 0 0em rgba(70, 70, 70, 0.5),
          -2.6em 0em 0 0em rgba(70, 70, 70, 0.6), -1.8em -1.8em 0 0em rgba(70, 70, 70, 0.7);
      }

      12.5% {
        box-shadow: 0em -2.6em 0em 0em rgba(70, 70, 70, 0.7), 1.8em -1.8em 0 0em #ffffff,
          2.5em 0em 0 0em rgba(70, 70, 70, 0.1), 1.75em 1.75em 0 0em rgba(70, 70, 70, 0.2),
          0em 2.5em 0 0em rgba(70, 70, 70, 0.3), -1.8em 1.8em 0 0em rgba(70, 70, 70, 0.4),
          -2.6em 0em 0 0em rgba(70, 70, 70, 0.5), -1.8em -1.8em 0 0em rgba(70, 70, 70, 0.6);
      }

      25% {
        box-shadow: 0em -2.6em 0em 0em rgba(70, 70, 70, 0.6),
          1.8em -1.8em 0 0em rgba(70, 70, 70, 0.7), 2.5em 0em 0 0em #ffffff,
          1.75em 1.75em 0 0em rgba(70, 70, 70, 0.1), 0em 2.5em 0 0em rgba(70, 70, 70, 0.2),
          -1.8em 1.8em 0 0em rgba(70, 70, 70, 0.3), -2.6em 0em 0 0em rgba(70, 70, 70, 0.4),
          -1.8em -1.8em 0 0em rgba(70, 70, 70, 0.5);
      }

      37.5% {
        box-shadow: 0em -2.6em 0em 0em rgba(70, 70, 70, 0.5),
          1.8em -1.8em 0 0em rgba(70, 70, 70, 0.6), 2.5em 0em 0 0em rgba(70, 70, 70, 0.7),
          1.75em 1.75em 0 0em #ffffff, 0em 2.5em 0 0em rgba(70, 70, 70, 0.1),
          -1.8em 1.8em 0 0em rgba(70, 70, 70, 0.2), -2.6em 0em 0 0em rgba(70, 70, 70, 0.3),
          -1.8em -1.8em 0 0em rgba(70, 70, 70, 0.4);
      }

      50% {
        box-shadow: 0em -2.6em 0em 0em rgba(70, 70, 70, 0.4),
          1.8em -1.8em 0 0em rgba(70, 70, 70, 0.5), 2.5em 0em 0 0em rgba(70, 70, 70, 0.6),
          1.75em 1.75em 0 0em rgba(70, 70, 70, 0.7), 0em 2.5em 0 0em #ffffff,
          -1.8em 1.8em 0 0em rgba(70, 70, 70, 0.1), -2.6em 0em 0 0em rgba(70, 70, 70, 0.2),
          -1.8em -1.8em 0 0em rgba(70, 70, 70, 0.3);
      }

      62.5% {
        box-shadow: 0em -2.6em 0em 0em rgba(70, 70, 70, 0.3),
          1.8em -1.8em 0 0em rgba(70, 70, 70, 0.4), 2.5em 0em 0 0em rgba(70, 70, 70, 0.5),
          1.75em 1.75em 0 0em rgba(70, 70, 70, 0.6), 0em 2.5em 0 0em rgba(70, 70, 70, 0.7),
          -1.8em 1.8em 0 0em #ffffff, -2.6em 0em 0 0em rgba(70, 70, 70, 0.1),
          -1.8em -1.8em 0 0em rgba(70, 70, 70, 0.2);
      }

      75% {
        box-shadow: 0em -2.6em 0em 0em rgba(70, 70, 70, 0.2),
          1.8em -1.8em 0 0em rgba(70, 70, 70, 0.3), 2.5em 0em 0 0em rgba(70, 70, 70, 0.4),
          1.75em 1.75em 0 0em rgba(70, 70, 70, 0.5), 0em 2.5em 0 0em rgba(70, 70, 70, 0.6),
          -1.8em 1.8em 0 0em rgba(70, 70, 70, 0.7), -2.6em 0em 0 0em #ffffff,
          -1.8em -1.8em 0 0em rgba(70, 70, 70, 0.1);
      }

      87.5% {
        box-shadow: 0em -2.6em 0em 0em rgba(70, 70, 70, 0.1),
          1.8em -1.8em 0 0em rgba(70, 70, 70, 0.2), 2.5em 0em 0 0em rgba(70, 70, 70, 0.3),
          1.75em 1.75em 0 0em rgba(70, 70, 70, 0.4), 0em 2.5em 0 0em rgba(70, 70, 70, 0.5),
          -1.8em 1.8em 0 0em rgba(70, 70, 70, 0.6), -2.6em 0em 0 0em rgba(70, 70, 70, 0.7),
          -1.8em -1.8em 0 0em #ffffff;
      }
    }
  `);class Hc extends nn{constructor(){var n;super();ot(this,"descList",[{value:"No Watermark"},{value:"50+ Avatar Outfits"},{value:"100+ Language-specific Voices"},{value:"200+ Video Templates"},{value:"CTA on Share Page",toolTip:"Add a Call-to-action button to your share page."},{value:"Branded Share Page",toolTip:"Add your logo to the branded share page."},{value:"Priority Video Processing",toolTip:"Your videos have priority in processing over free users."},{value:"Change Plan Anytime"}]);ot(this,"gtagType",{month:{pricingA:{Starter:"pricing_a_mon_starter",Pro:"pricing_a_mon_pro",Business:"pricing_a_mon_business"},pricingB:{Starter:"pricing_b_mon_starter",Pro:"pricing_b_mon_pro",Business:"pricing_b_mon_business"},pricingC:{Starter:"pricing_c_mon_starter",Pro:"pricing_c_mon_pro",Business:"pricing_c_mon_business"},pricingD:{Starter:"pricing_d_mon_starter",Pro:"pricing_d_mon_pro",Business:"pricing_d_mon_business"},vipA:{Starter:"vip_a_mon_starter",Pro:"vip_a_mon_pro",Business:"vip_a_mon_business"},vipB:{Starter:"vip_b_mon_starter",Pro:"vip_b_mon_pro",Business:"vip_b_mon_business"},vipC:{Starter:"vip_c_mon_starter",Pro:"vip_c_mon_pro",Business:"vip_c_mon_business"}},year:{pricingA:{Starter:"pricing_a_year_starter",Pro:"pricing_a_year_pro",Business:"pricing_a_year_business"},pricingB:{Starter:"pricing_b_year_starter",Pro:"pricing_b_year_pro",Business:"pricing_b_year_business"},pricingC:{Starter:"pricing_c_year_starter",Pro:"pricing_c_year_pro",Business:"pricing_c_year_business"},pricingD:{Starter:"pricing_d_year_starter",Pro:"pricing_d_year_pro",Business:"pricing_d_year_business"},vipA:{Starter:"vip_a_year_starter",Pro:"vip_a_year_pro",Business:"vip_a_year_business"},vipB:{Starter:"vip_b_year_starter",Pro:"vip_b_year_pro",Business:"vip_b_year_business"},vipC:{Starter:"vip_c_year_starter",Pro:"vip_c_year_pro",Business:"vip_c_year_business"}}});ot(this,"gtagOpenType",{pricingA:"pricing_a_show",pricingB:"pricing_b_show",pricingC:"pricing_c_show",pricingD:"pricing_d_show",vipA:"vip_a_show",vipB:"vip_b_show",vipC:"vip_c_show"});this.dragging=!1,this.type="month",this.starterTime=10,this.proTime=10,this.businessTime=10,this.isFree="true",this.topTitle="",this.showTitle="",this.starterList=[],this.starterChoose={},this.proList=[],this.proChoose={},this.businessList=[],this.businessChoose={},this.freeTime=(((n=JSON.parse(localStorage.getItem("user_info")))==null?void 0:n.ai_free_time)/60).toFixed(0)||3,this.pricingType=""}render(){var n,i,s,a,d,m,g,v,C,S,I,O,A,$,pe,U,Ze,ze,Ne,Be,Ue,u,ye,B,me,xe,Ce,q,de,Ee,et;return $e`
      <div class='mask'>
        <div class='pricing'>
          <div class='header'>
            <div class='top-title'>${this.topTitle}</div>
            <div class='close' @click=${this.close}>
              <img src="/image/svg/window_close.svg" width='24' height='24' alt="">
            </div>
          </div>
          <div class='content'>
            <h1>
              ${this.showTitle}
            </h1>
            <div class='time-box'>
              <span class='time-month' style='color:${this.type==="month"?"#1E1E2E":""}'>
                Billed Monthly
              </span>
              <span id='switch' class="toggler ${this.type==="year"?"active":""}" @click=${this._switChange}></span>
              <span class='time-year' style='color:${this.type==="year"?"#1E1E2E":""}'>
                Yearly
              </span>
              <span class='time-number'>
                25% Off
              </span>
            </div>
          </div>
          <section>
            ${this.isFree==="true"?$e`
              <div class='free'>
              <div class='name'>
                <h3>
                  Free
                </h3>
              </div>
              <div class="origin-price"></div>
              <div class='discount-price'>
                ${(n=this.starterChoose)==null?void 0:n.symbol}<span class='price'>0</span>
              </div>
              <button>
                Your Current Plan
              </button>
              <div class='desc'>
                Start AI video creation easily and for free.
              </div>

              <ul>
                <li>
                  <i></i>
                  <span class='text'>
                    ${this.freeTime}-min Free Trial
                  </span>
                </li>
                <li>
                  <i></i>
                  <span class='text'>
                    50+ Avatar Outfits
                  </span>
                </li>
                <li>
                  <i></i>
                  <span class='text'>
                    100+ Language-specific Voices
                  </span>
                </li>
                <li>
                  <i></i>
                  <span class='text'>
                    200+ Video Templates
                  </span>
                </li>
              </ul>
            </div>
              `:""}

            <div class='starter' style="padding:${this.isFree==="true"?"16px 18px":"18px 62px"}">
              <div class='name'>
                <h3>
                  Starter
                </h3>
              </div>
              <div class="origin-price">
                ${Number((i=this.starterChoose)==null?void 0:i.save)?((s=this.starterChoose)==null?void 0:s.symbol)+((a=this.starterChoose)==null?void 0:a.save):""}
              </div>
              <div class='discount-price'>
                ${(d=this.starterChoose)==null?void 0:d.symbol}<span class='price'>${this.type==="month"?(m=this.starterChoose)==null?void 0:m.price:(((g=this.starterChoose)==null?void 0:g.price)/12).toFixed(2)}</span>/mo
                <span class='unit'>
                  ${((v=this.starterChoose)==null?void 0:v.symbol)+((C=this.starterChoose)==null?void 0:C.ai_per_minute_dollar)}/min
                </span>
              </div>
              <button @click="${()=>{this.goToShoppingCart(1)}}">
                ${this.isFree==="true"?"Get Plan":"Switch Plan"}
              </button>
              <progress-pro defaultGear='2' id="starter" .options=${this.starterList.map(he=>he.ai_monthly_video_time)}></progress-pro>
              <ul>
              <li>
                  <img src="/image/svg/window_yes.svg" width='10' height='10' alt="" />
                  <span class='text'>
                    Total&nbsp;<span class='video-time'>${(S=this.starterChoose)==null?void 0:S.ai_monthly_video_time} Mins / Month</span>
                  </span>
                </li>
                <li>
                  <img src="/image/svg/window_yes.svg" width='10' height='10' alt="" />
                  <span class='text'>
                    <span class='video-time'>${(I=this.starterChoose)==null?void 0:I.ai_single_video_time}-min&nbsp;</span> Max Duration per Video
                  </span>
                </li>
                ${this.descList.map(he=>$e`<li>
                  <img src='/image/svg/window_yes.svg' width='10' height='10' alt="" />
                  <span class='text'>
                    ${he.value}
                  </span>
                  ${he.toolTip?$e` <span class='tooltip'>
                            <span class='content'>
                              ${he.toolTip}
                            </span>
                          </span>
                      `:""}
                </li>`)}
              </ul>
            </div>

            <div class='pro' style="padding:${this.isFree==="true"?"16px 18px":"18px 62px"}">
              <div class='name'>
                <h3>
                  Pro
                </h3>
                <span>
                  Most Popular
                </span>
              </div>
              <div class="origin-price">
                ${Number((O=this.proChoose)==null?void 0:O.save)?((A=this.proChoose)==null?void 0:A.symbol)+(($=this.proChoose)==null?void 0:$.save):""}
              </div>
              <div class='discount-price'>
                ${(pe=this.proChoose)==null?void 0:pe.symbol}<span class='price'>${this.type==="month"?(U=this.proChoose)==null?void 0:U.price:(((Ze=this.proChoose)==null?void 0:Ze.price)/12).toFixed(2)}</span>/mo
                <span class='unit'>
                  ${((ze=this.proChoose)==null?void 0:ze.symbol)+((Ne=this.proChoose)==null?void 0:Ne.ai_per_minute_dollar)}/min
                </span>
              </div>
              <button @click="${()=>{this.goToShoppingCart(2)}}">
                ${this.isFree==="true"?"Get Plan":"Switch Plan"}
              </button>
              <progress-pro id="pro" .options=${this.proList.map(he=>he.ai_monthly_video_time)}></progress-pro>
              <ul>
                <li>
                  <img src="/image/svg/window_yes.svg" width='10' height='10' alt="" />
                  <span class='text'>
                    Total&nbsp;<span class='video-time'>${(Be=this.proChoose)==null?void 0:Be.ai_monthly_video_time} Mins / Month</span>
                  </span>
                </li>
                <li>
                  <img src="/image/svg/window_yes.svg" width='10' height='10' alt="" />
                  <span class='text'>
                    <span class='video-time'>${(Ue=this.proChoose)==null?void 0:Ue.ai_single_video_time}-min&nbsp;</span> Max Duration per Video
                  </span>
                </li>
                ${this.descList.map(he=>$e`<li>
                  <img src='/image/svg/window_yes.svg' width='10' height='10' alt="" />
                  <span class='text'>
                    ${he.value}
                  </span>
                  ${he.toolTip?$e` <span class='tooltip'>
                            <span class='content'>
                              ${he.toolTip}
                            </span>
                          </span>
                      `:""}
                </li>`)}
              </ul>
            </div>

            <div class="business" style="padding:${this.isFree==="true"?"16px 18px":"18px 62px"}">
              <div class='name'>
                <h3>
                  Business
                </h3>
              </div>
              <div class="origin-price">
                ${Number((u=this.businessChoose)==null?void 0:u.save)?((ye=this.businessChoose)==null?void 0:ye.symbol)+((B=this.businessChoose)==null?void 0:B.save):""}
              </div>
              <div class='discount-price'>
                ${(me=this.businessChoose)==null?void 0:me.symbol}<span class='price'>${this.type==="month"?(xe=this.businessChoose)==null?void 0:xe.price:(((Ce=this.businessChoose)==null?void 0:Ce.price)/12).toFixed(2)}</span>/mo
                <span class='unit'>
                  ${((q=this.businessChoose)==null?void 0:q.symbol)+((de=this.businessChoose)==null?void 0:de.ai_per_minute_dollar)}/min
                </span>
              </div>
              <button @click="${()=>{this.goToShoppingCart(3)}}">
                ${this.isFree==="true"?"Get Plan":"Switch Plan"}
              </button>
              <progress-pro id="business" .options=${this.businessList.map(he=>he.ai_monthly_video_time)}></progress-pro>
              <ul>
              <li>
                  <img src="/image/svg/window_yes.svg" width='10' height='10' alt="" />
                  <span class="text">
                    Total&nbsp;<span class='video-time'>${(Ee=this.businessChoose)==null?void 0:Ee.ai_monthly_video_time} Mins / Month</span>
                  </span>
                </li>
                <li>
                  <img src="/image/svg/window_yes.svg" width='10' height='10' alt="" />
                  <span class='text'>
                    <span class='video-time'>${(et=this.businessChoose)==null?void 0:et.ai_single_video_time}-min&nbsp;</span> Max Duration per Video
                  </span>
                </li>
                ${this.descList.map(he=>$e`<li>
                  <img src='/image/svg/window_yes.svg' width='10' height='10' alt="" />
                  <span class='text'>
                    ${he.value}
                  </span>
                  ${he.toolTip?$e` <span class='tooltip'>
                            <span class='content'>
                              ${he.toolTip}
                            </span>
                          </span>
                      `:""}
                </li>`)}
              </ul>
            </div>
          </section>
        </div>
      </div>
    `}firstUpdated(){this.getProductList(),se(this.shadowRoot.querySelector("section")).children("div").css("max-width",this.isFree==="true"?"254px":"346px"),this.shadowRoot.getElementById("starter").addEventListener("starter",m=>{const g=this.starterList.find(v=>v.ai_monthly_video_time===m.detail);this.starterChoose=g}),this.shadowRoot.getElementById("pro").addEventListener("pro",m=>{const g=this.proList.find(v=>v.ai_monthly_video_time===m.detail);this.proChoose=g}),this.shadowRoot.getElementById("business").addEventListener("business",m=>{const g=this.businessList.find(v=>v.ai_monthly_video_time===m.detail);this.businessChoose=g}),window.gtagClick(this.gtagOpenType[this.pricingType]);const a=this.starterChoose?this.starterChoose:this.proChoose?this.proChoose:this.businessChoose;localStorage.setItem("aiPayProData",JSON.stringify(a)),document.querySelector("pay-dialog")||document.body.insertAdjacentHTML("beforeend",`<pay-dialog  pricingType="${this.pricingType}" type="month" titleName = "">
        <div id="link-authentication-element"></div>
        <div id="payment-element"></div>
      </pay-dialog>`)}updated(){this.shadowRoot.querySelectorAll("ul li .text").forEach(n=>{Ja(n)}),this.shadowRoot.querySelectorAll(".unit").forEach(n=>{Ja(n)})}close(){this.dispatchEvent(new CustomEvent("closePricing",{detail:{value:"true"}})),se("pricing-dialog").hide()}async _switChange(n){se(n.target).toggleClass("active");const i=se(n.target).hasClass("active")?"year":"month";this.type=i,this.getProductList()}async getProductList(){var d,m,g,v;const n=((d=JSON.parse(localStorage.getItem("product_list")))==null?void 0:d[this.type])||{},i=Math.min(...Object.keys(n)),s=this.findMiddleValue(Object.keys(n)),a=Math.max(...Object.keys(n));this.starterList=n[i]||[],this.starterChoose=(m=n[i])==null?void 0:m[0],this.proList=n[s]||[],this.proChoose=(g=n[s])==null?void 0:g[0],this.businessList=n[a]||[],this.businessChoose=(v=n[a])==null?void 0:v[0]}findMiddleValue(n){const i=Math.min(...n),s=Math.max(...n),a=n.filter(d=>Number(d)!==i&&Number(d)!==s);return Number(a[0])}goToShoppingCart(n){let i=[],s="",a="";n===1?(i=this.starterChoose,s="Starter"):n===2?(i=this.proChoose,s="Pro"):n===3&&(i=this.businessChoose,s="Business"),window.gtagClick(this.gtagType[this.type][this.pricingType][s]),a=this.type==="year"?`Annual ${s} Plan`:`Monthly ${s} Plan`,localStorage.setItem("aiPayProData",JSON.stringify(i));const d=document.querySelector("pay-dialog");d?(d.setAttribute("type",this.type),d.setAttribute("titleName",a),d.setAttribute("pricingType",this.pricingType),d.shadowRoot.querySelector(".payContainer").classList.remove("isShow"),d.againIntoCart()):document.body.insertAdjacentHTML("beforeend",`<pay-dialog pricingType="${this.pricingType}" type="${this.type}" titleName = "${a}">
        <div id="link-authentication-element"></div>
        <div id="payment-element"></div>
      </pay-dialog>`),this.close()}}ot(Hc,"properties",{dragging:"",type:"",starterTime:"",proTime:"",businessTime:"",isFree:"",topTitle:"",showTitle:"",pricingType:"",starterList:{type:Array},proList:{type:Array},businessList:{type:Array},starterChoose:{type:Object},proChoose:{type:Object},businessChoose:{type:Object}}),ot(Hc,"styles",[Xl,zi`
     .mask{
      width:100vw;
      height:100vh;
      position:fixed;
      left:0;
      top:0;
      display:flex;
      align-items:center;
      justify-content:center;
      background-color:rgba(0, 0, 0, 0.4);
      z-index:200;
     }

     .pricing{
       width:1158px;
       height:750px;
       max-height:90vh;
       overflow:auto;
       box-sizing:border-box;
       background-color:#F4F5F8;
       border-radius: 8px;
       padding:14px 20px 28px 34px;
       color: #1E1E2E;
     }

     .header{
       display:flex;
       justify-content:flex-end;
     }

     .close{
       width:32px;
       height:32px;
       border-radius:8px;
       display:flex;
       align-items:center;
       justify-content:center;
       cursor:pointer;
     }

     .close:hover{
        background: rgba(140, 140, 151, .1);
     }

     .top-title{
      font: normal normal normal 16px/21px Roboto;
      display:flex;
      align-items:center;
      justify-content:center;
      flex:1;
     }

     h1{
      font: normal normal bold 26px/34px Roboto;
      text-align:center;
     }

     .time-box{
       display:flex;
       justify-content:center;
       align-items:center;
       margin-top:20px;
       font: normal normal normal 16px/21px Roboto;
     }

     .time-year{
       color: #8C8C97;
     }

     .time-month{
      color: #8C8C97;
     }

     .time-number{
       padding: 3px 8px;
       font: normal normal bold 13px/18px Roboto;
       color: #633924;
       background: #EBC56C;
       border-radius: 4px;
       margin-left: 16px;
     }

     .toggler {
        position: relative;
        width: 52px;
        height: 28px;
        border-radius: 14px;
        background-color: rgba(139, 61, 255, 1);
        display:block;
        transition: all .2s linear;
        cursor: pointer;
        margin:0 14px 0 18px;
    }

    .toggler::before{
        content: "";
        position: absolute;
        top: 2px;
        left: 2px;
        height: 24px;
        width: 24px;
        border-radius: 50%;
        background: #fff;
        transition: all .2s linear;
    }

    .active::before {
        left: 26px;
    }

    section{
      display:flex;
      justify-content:space-between;
      margin-top:34px;
      padding-right:10px;
      gap:24px;
    }

    section >div{
      background:#fff;
      flex:1;
      height:560px;
      box-sizing:border-box;
      position:relative;
      padding:16px 18px;
    }

    section >div::before{
      width:100%;
      height:2px;
      background: #8B3DFF;
      content:"";
      position:absolute;
      left:0;
      top:0;
    }

    section .free{
      background:rgba(255, 255, 255, .4);
    }

    section .free::before{
      background:#E0E0E6;
    }

    section .name{
      display:flex;
      justify-content:space-between;
    }

    section .name h3{
      font: normal normal bold 18px/24px Roboto;
    }

    section .name >span{
      background: rgba(139, 61, 255, .2);
      font: italic normal normal 12px Roboto;
      color: rgba(139, 61, 255, 1);
      padding:5px 8px;
      display:flex;
      align-items:center;
      justify-content:center;
      max-width:100px;
      border-radius: 4px;
    }

    section .origin-price{
      margin-top:5px;
      text-decoration: line-through;
      font: normal normal normal 12px/16px Segoe UI;
      color: #8C8C97;
      height:16px;
    }

    section .discount-price{
      font: normal normal bold 14px/19px Roboto;
      width:100%;
      white-space:nowrap;
    }

    section .discount-price .price{
      font: normal normal bold 32px/43px Roboto;
    }

    section .discount-price .unit{
      color: #676778;
      font: normal normal normal 14px/13px Roboto;
      margin-left:17px;
      display:inline-block;
      white-space:nowrap;
      overflow:hidden;
      text-overflow:ellipsis;
      max-width:77px;
    }

    section .free button{
      margin-top:19px;
      outline:none;
      border:none;
      padding:10px 18px;
      min-width:145px;
      background: rgba(140, 140, 151, .15);
      border-radius:4px;
      font: normal normal normal 14px Roboto;
      color: #1E1E2E;
    }

    section .free button:hover{
      background: rgba(140, 140, 151, .15);
      color: #1E1E2E;
      cursor:auto;
    }

    section button{
      width:100%;
      margin-top:16px;
      outline:none;
      padding:10px;
      background: transparent;
      border-radius:4px;
      font: normal normal normal 14px Roboto;
      color: #8B3DFF;
      border: 1px solid #8B3DFF;
      cursor:pointer;
    }

    section button:hover{
      background: #8B3DFF;
      color:#fff;
    }

    section .pro button{
      background: #8B3DFF;
      color:#fff;
    }

    section .pro button:hover{
      background: #9B57FF;
    }

    section .free .desc{
      font: normal normal normal 14px/19px Roboto;
      margin-top:15px;
    }

    section ul{
      margin-top:25px;
      font: normal normal normal 12px Roboto;
      display:flex;
      flex-direction:column;
      gap:16px;
    }

    section ul li{
      display:flex;
      align-items:center;
      font: normal normal normal 12px Roboto;
    }

    section ul li .text{
      white-space:nowrap;
      text-overflow: ellipsis;
      overflow:hidden;
      max-width:198px;
    }

    section ul li >i{
      display:block;
      width:10px;
      height:2px;
      background: #BEBECB 0% 0% no-repeat padding-box;
      border-radius: 2px;
      margin-right:10px;
    }

    section ul li >img{
      margin-right:10px;
    }

    .tooltip{
      position:relative;
      min-width:16px;
      height:16px;
      background:url(/image/svg/price_tooltip.svg);
      cursor:pointer;
      margin-left:10px;
      display:inline-block;
      z-index:1;
    }

    .tooltip:hover{
      background:url(/image/svg/price_tooltip_hover.svg);
    }


    .tooltip .content{
      position:absolute;
      left:-185px;
      top:16px;
      padding:8px 10px;
      width:183px;
      background: rgba(255, 255, 255, 1) 0% 0% no-repeat padding-box;
      box-shadow: 0px 3px 6px rgba(30, 30, 46, 0.2);
      border: 1px solid rgba(140, 140, 151, 0.3);
      border-radius: 4px;
      display:none;
      box-sizing:border-box;
    }

    .tooltip:hover .content{
      display:block;
    }

    .video-time{
      font: normal normal bold 12px Roboto;
    }
    `]);class Wc extends nn{constructor(){super(),this.options=[10,15,30,50],this.dragging=!1,this.id="progress",this.type="month",this.defaultGear=""}render(){return $e`
        <div class="slider-container" id=${this.id}>
          <div class="slider">
            <div class="progress"></div>
            <div class="ball"></div>
            <div class="ticks">
              ${this.options.map(e=>$e`
              <div class="tick" value=${e}></div>
              `)}
            </div>
          </div>
        </div>
        <div class="ticks-number">
          ${this.options.map((e,n)=>$e`
            <div class=${this.value>=e||n===0?"active":""}>${e}</div>
          `)}
        </div>
    `}firstUpdated(){const e=this.getEleByClassName(".slider");document.addEventListener("mousemove",n=>{if(this.dragging){const i=n.clientX-e.getBoundingClientRect().left;this.updateValue(i)}}),e.addEventListener("click",n=>{this.dragging||this.handleClick(n)}),this.setDefaultGear()}updated(){const e=document.querySelector("pricing-dialog").type;this.type!==e&&(this.type=e,this.updateValue(0),this.clickSlider=!1),this.defaultGear&&!this.clickSlider&&this.setDefaultGear()}setDefaultGear(){Array.from(this.shadowRoot.querySelectorAll(".tick")).forEach(e=>{e.getAttribute("value")-0===this.options[this.defaultGear-1]&&this.updateValue(e.getBoundingClientRect().left-this.getEleByClassName(".slider").getBoundingClientRect().left)}),this.clickSlider=!1}updateValue(e){const n=this.getEleByClassName(".slider"),i=this.getEleByClassName(".ball"),s=this.getEleByClassName(".progress"),a=100/(this.options.length-1),d=n.offsetWidth,m=0,g=d-i.offsetWidth;let v=e;v=Math.max(m,Math.min(v,g));const C=v/g*100,S=Math.round(C/a),I=this.options[S];let A=S*a/100*g;s.style.width=`${A}px`,A===0&&(A=-1),A===g&&(A=A+1,s.style.width=`${A}px`),i.style.left=`${A}px`,i.setAttribute("data-value",I),this.value=I,this.dispatchEvent(new CustomEvent(this.id,{detail:I}))}handleClick(e){const n=e.clientX-this.getEleByClassName(".slider").getBoundingClientRect().left;this.updateValue(n),this.clickSlider=!0}getEleByClassName(e){return this.shadowRoot.querySelector(`#${this.id} ${e}`)}}ot(Wc,"properties",{dragging:"",options:{type:Array},id:"",type:"",value:{type:Number},defaultGear:""}),ot(Wc,"styles",[Xl,zi`
      .slider-container {
        width: 100%;
        margin-top: 25px;
        position: relative;
      }

      .slider {
        width: 100%;
        height: 4px;
        background-color: rgba(139, 61, 255, .2);
        position: relative;
      }

      .progress {
        height: 100%;
        background-color: #8B3DFF;
        position: absolute;
        top: 0;
        left: 0;
      }

      .ball {
        width: 16px;
        height: 16px;
        background-color: #8B3DFF;
        position: absolute;
        top: -6px;
        left:-1px;
        border-radius: 50%;
        /* cursor: grab; */
        transition: background-color 0.2s;
        z-index:1;
        display:flex;
        align-items:center;
        justify-content:center;
      }

      .ball::before{
        content:"";
        width:8px;
        height:8px;
        display:block;
        background:#fff;
        border-radius: 50%;
      }

      .ball:hover::before{
        width:12px;
        height:12px;
      }

      .ticks {
        display: flex;
        justify-content: space-between;
        position: absolute;
        top: -2px;
        left: 0;
        right: 0;
        cursor:pointer;
      }

      .tick {
        width: 4px;
        height: 8px;
        background: rgba(139, 61, 255, 1);
        border-radius: 3px;
      }

      .ticks-number{
        display: flex;
        justify-content: space-between;
        margin-top:7px;
        font: normal normal normal 12px/16px Roboto;
      }

      .ticks-number >div{
        width:12px;
        text-align:center;
      }

      .ticks-number >div:last-child{
        text-align:left;
      }

      .active{
        color:rgba(139, 61, 255, 1);
        font: normal normal bold 12px/16px Roboto;
      }
    `]);const fb=zi`
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
button{
  outline:none;
}
i{
  font-style: normal;
}
 
.payContainer {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.16);
  z-index: 1000;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.payContainer.isShow {
  visibility: hidden;
  z-index: -10000;
  opacity: 0;
}



.payContainer.lang-jp .payContainer__cartInfo_desc {
  margin-bottom: 0 !important;
}

.payContainer .payContainer__main {
  width: 924px;
  height: 780px;
  background: #f8f9fb;
  -webkit-box-shadow: 0px 10px 40px #3c4a681a;
  box-shadow: 0px 10px 40px #3c4a681a;
  border: 1px solid #3c4a681a;
  border-radius: 8px;
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
  overflow-y: auto;
  overflow-x: hidden;
  border-top: 10px solid #f8f9fb;
  border-bottom: 10px solid #f8f9fb;
  padding:10px 0;
  max-height:90vh;
}

.payContainer .payContainer__main::-webkit-scrollbar {
  width: 5px;
}

.payContainer .payContainer__main::-webkit-scrollbar-thumb {
  cursor: pointer;
  border-radius: 8px;
  background-color: rgba(109, 113, 122, 0.2);
  border-radius: 4px;
}

.payContainer .payContainer__main::-webkit-scrollbar-thumb:hover {
  background: rgba(109, 113, 122, 0.5);
}

.payContainer .payContainer__main .payContainer__main_close {
  position: absolute;
  top: 0;
  right: 16px;
  width: 32px;
  height: 32px;
  cursor:pointer;
  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+CiAgPGRlZnM+CiAgICA8Y2xpcFBhdGggaWQ9ImNsaXAtcGF0aCI+CiAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGVfMTI2MyIgZGF0YS1uYW1lPSJSZWN0YW5nbGUgMTI2MyIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMTA0IDQ2MSkiIGZpbGw9IiNmZmYiIHN0cm9rZT0iIzFlMWUyZSIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICA8L2NsaXBQYXRoPgogIDwvZGVmcz4KICA8ZyBpZD0id2luZG93X2Nsb3NlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTEwNCAtNDYxKSIgb3BhY2l0eT0iMC42IiBjbGlwLXBhdGg9InVybCgjY2xpcC1wYXRoKSI+CiAgICA8cGF0aCBpZD0iUGF0aF8yMDQwIiBkYXRhLW5hbWU9IlBhdGggMjA0MCIgZD0iTTE4LDE1NjYsNiwxNTc4bTAtMTIsMTIsMTIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDExMDQgLTEwOTkpIiBmaWxsPSJub25lIiBzdHJva2U9IiMxZTFlMmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgPC9nPgo8L3N2Zz4K);
  background-size: 24px 24px;
  background-position: center;
}

.payContainer .payContainer__main .payContainer__main_close:hover::after {
  content:"";
  display: block;
  width:32px;
  height:32px;
  background-color:rgba(140, 140, 151, 0.1);
  border-radius:8px;
  
}

.payContainer .payContainer__main .payContainer__main_back {
  position: absolute;
  top: 0;
  left: 37px;
  width: 32px;
  height: 32px;
  cursor:pointer;
  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+CiAgPGRlZnM+CiAgICA8Y2xpcFBhdGggaWQ9ImNsaXAtcGF0aCI+CiAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGVfMjU2OCIgZGF0YS1uYW1lPSJSZWN0YW5nbGUgMjU2OCIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1MzUgNjApIiBmaWxsPSIjZmZmIiBzdHJva2U9IiM3MDcwNzAiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgPC9jbGlwUGF0aD4KICA8L2RlZnM+CiAgPGcgaWQ9ImNhcl9iYWNrIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNTM1IC02MCkiIGNsaXAtcGF0aD0idXJsKCNjbGlwLXBhdGgpIj4KICAgIDxwYXRoIGlkPSJQYXRoXzIwNzciIGRhdGEtbmFtZT0iUGF0aCAyMDc3IiBkPSJNMjEuMDc5LDE3MUg0bTAsMCw1LDVtLTUtNSw1LTUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUzNC40NiAtOTkuMDA0KSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNzM3MzdlIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMSIvPgogIDwvZz4KPC9zdmc+Cg==);
  background-size: 24px 24px;
  background-position: center;
  background-repeat:no-repeat;
}

.payContainer .payContainer__main .payContainer__main_back:hover::after {
  content:"";
  display: block;
  width:32px;
  height:32px;
  background-color:rgba(140, 140, 151, 0.1);
  border-radius:8px;
  
}

.payContainer .payContainer__main .payContainer__main_back.disabled {
  opacity: 0.5;
  pointer-events: none;
}


.payContainer .payContainer__main .payContainer__main_close.disabled {
  opacity: 0.5;
  pointer-events: none;
}

.payContainer .payContainer__main .payContainer__main_cartInfo {
  width: 415px;
  height: 684px;
  background: #ffffff;
  border: 1px solid #6d717a4d;
  border-radius: 3px;
  margin-right: 48px;
  padding: 27px 40px 0 40px;
  margin-top:10px;
}

.payContainer .payContainer__main .payContainer__main_cartInfo .payContainer__cartInfo_title {
  color: #39325a;
  font-weight: 600;
  font-size: 28px;
  line-height: 39px;
  margin-bottom: 21px;
}

.payContainer .payContainer__main .payContainer__main_cartInfo .hr {
  width: 100%;
  height: 1px;
  background-color: #39325a;
  opacity: 0.2;
  margin-bottom: 28.5px;
}

.payContainer .payContainer__main .payContainer__main_cartInfo .payContainer__cartInfo_pro {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: cemter;
  -ms-flex-align: cemter;
  align-items: cemter;
  margin-bottom: 14.5px;
}

.payContainer .payContainer__main .payContainer__main_cartInfo .payContainer__cartInfo_pro .payContainer__pro_icon {
  width: 62px;
  height: 62px;
  margin-right: 23px;
}

.payContainer .payContainer__main .payContainer__main_cartInfo .payContainer__cartInfo_pro .payContainer__pro_info .payContainer__info_title {
  color: #39325a;
  font-weight: 600;
  font-size: 20px;
  font: normal normal bold 24px/62px Roboto;
}
.flex-normal{
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.payContainer__info_orginal_total .payContainer__info_orginal_total_title{
  font: normal normal 500 18px/24px Roboto;
  color: #39325A;
}
.payContainer__info_orginal_total .payContainer__info_orginal_total_price{
  font: normal normal normal 16px/21px Roboto;
  color: #39325A;
}
.payContainer__info_description{
  margin-top:14px;
}
.payContainer__info_description span{
  display:flex;
  align-items: center;
  font: normal normal normal 14px/19px Roboto;
  color: #39325A;
}
.payContainer__info_description span:first-child{
  padding-bottom:8px;
}
.payContainer__info_description span::before{
  content:"";
  display:block;
  width:12px;
  height:12px;
  margin-right:10px;
  background: url("/image/svg/window_yes.svg") no-repeat center/cover;

}
.payContainer__info_subtotal{
  margin-top:29px;
}
.payContainer__info_subtotal span,.payContainer__info_discount span{
  font: normal normal normal 16px/21px Roboto;
  color: #39325A;
}
.payContainer__info_discount{
  margin-top:18px;
}
.payContainer__info_discount span{
  line-height:28px;
}
.payContainer__info_discount .payContainer__info_discount_price{
  padding:3px 0;
  background:#5EFFC8;
}
.payContainer__info_discount span i{
  font-style:normal;
  font-weight:bold;
}

.payContainer__info_total_due{
  margin-top:18px;
  margin-bottom:22px;
}
.payContainer__info_total_due span{
  
  color:#39325A;
  font: normal normal 500 16px/21px Roboto;
}
.payContainer__info_total_due .payContainer__info_total_due_price{
  font-weight:bold;
}
.payContainer__info_tips{
  font: normal normal normal 12px/16px Roboto;
  color: #676778;
}

.payContainer .payContainer__main .payContainer__main_cartInfo .payContainer__cartInfo_desc {
  color: #39325a;
  font-weight: 300;
  font-size: 12px;
  line-height: 18px;
  margin-bottom: 12px;
}


.payContainer .payContainer__main .payContainer__main_cartInfo .payContainer__cartInfo_coupon {
  color: #6d4dff;
  text-decoration: underline;
  font-weight: 300;
  font-size: 14px;
  line-height: 20px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.payContainer .payContainer__main .payContainer__main_cartInfo .payContainer__cartInfo_coupon:hover {
  opacity: 0.7;
}

.payContainer .payContainer__main .payContainer__main_cartInfo .payContainer__cartInfo_coupon:active {
  opacity: 0.8;
}

.payContainer .payContainer__main .payContainer__main_cartInfo .payContainer__cartInfo_avad {
  margin-bottom: 20px;
}

.payContainer .payContainer__main .payContainer__main_cartInfo .payContainer__cartInfo_avad li {
  color: #39325a;
  font-weight: 300;
  font-size: 14px;
  line-height: 35px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.payContainer .payContainer__main .payContainer__main_cartInfo .payContainer__cartInfo_avad li img {
  margin-right: 8px;
}

.payContainer .payContainer__main .payContainer__main_toPay {
  width: 375px;
  height: 684px;
  margin-top:10px;
}

.payContainer .payContainer__main .payContainer__main_toPay .payContainer__toPay_title {
  color: #39325a;
  font-weight: 600;
  font-size: 24px;
  line-height: 33px;
  margin-bottom: 30px;
}

.payContainer .payContainer__main .payContainer__main_toPay .payContainer__toPay_button {
  width: 100%;
  height: 44px;
  background: #ffc33a;
  border-radius: 3px;
  color: #39325a;
  font-weight: 600;
  font-size: 16px;
  line-height: 25px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin-bottom: 28px;
}

.payContainer .payContainer__main .payContainer__main_toPay .payContainer__toPay_button.loading {
  pointer-events: none;
}

.payContainer .payContainer__main .payContainer__main_toPay .payContainer__toPay_button.loading i {
  display: none;
}

.payContainer .payContainer__main .payContainer__main_toPay .payContainer__toPay_button>i {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.payContainer .payContainer__main .payContainer__main_toPay .payContainer__toPay_button img {
  margin-left: 7px;
}

.payContainer .payContainer__main .payContainer__main_toPay .payContainer__toPay_button:hover {
  background: #ffc33a !important;
  opacity: 0.7;
}

.payContainer .payContainer__main .payContainer__main_toPay .payContainer__toPay_button:active {
  opacity: 0.8;
}

.payContainer .payContainer__main .payContainer__main_toPay .payContainer__toPay_checkText {
  width: 100%;
  height: 17px;
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin-bottom: 28px;
}

.payContainer .payContainer__main .payContainer__main_toPay .payContainer__toPay_checkText p {
  color: #a19cb5;
  font-weight: 300;
  font-size: 12px;
  line-height: 17px;
  display: inline-block;
  background-color: #f8f9fb;
  position: relative;
  padding: 0 12px;
}

.payContainer .payContainer__main .payContainer__main_toPay .payContainer__toPay_checkText::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: #39325a;
  opacity: 0.2;
}

.payContainer .payContainer__main .payContainer__main_toPay .payContainer__toPay_form {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.payContainer .payContainer__main .payContainer__main_toPay .payContainer__toPay_form .payContainer__form_emailAndCountry {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-bottom: 29px;
  position: relative;
}

.payContainer .payContainer__main .payContainer__main_toPay .payContainer__toPay_form .payContainer__form_emailAndCountry .payContainer__form_email {
  width: 206px;
  margin-right: 5px;
}

.payContainer .payContainer__main .payContainer__main_toPay .payContainer__toPay_form .payContainer__form_emailAndCountry .payContainer__form_email p {
  margin-bottom: 5px;
  color: #a19cb5;
  font-weight: 300;
  font-size: 12px;
  line-height: 17px;
}

.payContainer .payContainer__main .payContainer__main_toPay .payContainer__toPay_form .payContainer__form_emailAndCountry .payContainer__form_email input {
  width: 100%;
  height: 40px;
  background: #ffffff;
  border: 1px solid #6d717a4d;
  border-radius: 3px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  outline: none;
  text-indent: 15px;
  color: #39325a;
  font-weight: 300;
  font-size: 12px;
}

.payContainer .payContainer__main .payContainer__main_toPay .payContainer__toPay_form .payContainer__form_emailAndCountry .payContainer__form_email input::-webkit-input-placeholder {
  color: #a19cb5;
  font-weight: 300;
  font-size: 12px;
  line-height: 40px;
}

.payContainer .payContainer__main .payContainer__main_toPay .payContainer__toPay_form .payContainer__form_emailAndCountry .payContainer__form_email input:-ms-input-placeholder {
  color: #a19cb5;
  font-weight: 300;
  font-size: 12px;
  line-height: 40px;
}

.payContainer .payContainer__main .payContainer__main_toPay .payContainer__toPay_form .payContainer__form_emailAndCountry .payContainer__form_email input::-ms-input-placeholder {
  color: #a19cb5;
  font-weight: 300;
  font-size: 12px;
  line-height: 40px;
}

.payContainer .payContainer__main .payContainer__main_toPay .payContainer__toPay_form .payContainer__form_emailAndCountry .payContainer__form_email input::placeholder {
  color: #a19cb5;
  font-weight: 300;
  font-size: 12px;
  line-height: 40px;
}

.payContainer .payContainer__main .payContainer__main_toPay .payContainer__toPay_form .payContainer__form_emailAndCountry .payContainer__form_country p {
  margin-bottom: 5px;
  color: #a19cb5;
  font-weight: 300;
  font-size: 12px;
  line-height: 17px;
}

.payContainer .payContainer__main .payContainer__main_toPay .payContainer__toPay_form .payContainer__form_emailAndCountry .payContainer__form_country select {
  width: 164px;
  height: 40px;
  background: #ffffff;
  border: 1px solid #6d717a4d;
  border-radius: 3px;
  padding-left: 15px;
  color: #39325a;
  font-size: 12px;
  font-weight: 300;
  -moz-appearance: none;
  appearance: none;
  -webkit-appearance: none;
  padding-right: 28px;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-break: break-all;
}

.payContainer .payContainer__main .payContainer__main_toPay .payContainer__toPay_form .payContainer__form_emailAndCountry .payContainer__form_country select:focus+.triangle {
  -webkit-transform: rotate(180deg);
  transform: rotate(180deg);
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
}

.payContainer .payContainer__main .payContainer__main_toPay .payContainer__toPay_form .payContainer__form_emailAndCountry .payContainer__form_country select:not(:focus)+.triangle {
  -webkit-transform: rotate(0deg);
  transform: rotate(0deg);
}

.payContainer .payContainer__main .payContainer__main_toPay .payContainer__toPay_form .payContainer__form_emailAndCountry .payContainer__form_country .triangle {
  position: absolute;
  right: 8px;
  bottom: 8px;
  width: 24px;
  height: 24px;
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+CiAgPGRlZnM+CiAgICA8Y2xpcFBhdGggaWQ9ImNsaXAtcGF0aCI+CiAgICAgIDxyZWN0IGlkPSLnn6nlvaJfMTc2OSIgZGF0YS1uYW1lPSLnn6nlvaIgMTc2OSIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg3NjggNTY2KSIgZmlsbD0iI2ZmZiIgc3Ryb2tlPSIjNzA3MDcwIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDwvY2xpcFBhdGg+CiAgPC9kZWZzPgogIDxnIGlkPSJ1cCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTc2OCAtNTY2KSIgY2xpcC1wYXRoPSJ1cmwoI2NsaXAtcGF0aCkiPgogICAgPHBhdGggaWQ9Iui3r+W+hF8xNTExMyIgZGF0YS1uYW1lPSLot6/lvoQgMTUxMTMiIGQ9Ik0tMjA3NS43NS03MzcuMjE3bDYsNiw2LTYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI4NDkuNzUgMTMxMi4yMTcpIiBmaWxsPSJub25lIiBzdHJva2U9IiMzMzMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgPC9nPgo8L3N2Zz4=");
  background-repeat: no-repeat;
  background-position: center;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
  display: block;
  pointer-events: none;
}

.payContainer .payContainer__main .payContainer__main_toPay .payContainer__toPay_form .payContainer__toPay_buyBtn {
  width: 100%;
  height: 44px;
  background: #fd3050;
  border-radius: 3px;
  margin-bottom: 18px;
  font-size: 16px;
  font-weight: 600;
  color: #ffffff;
}

.payContainer .payContainer__main .payContainer__main_toPay .payContainer__toPay_form .payContainer__toPay_buyBtn:hover {
  background: #fd3050 !important;
  opacity: 0.7;
}

.payContainer .payContainer__main .payContainer__main_toPay .payContainer__toPay_form .payContainer__toPay_buyBtn:active {
  opacity: 0.8;
}

.payContainer .payContainer__main .payContainer__main_toPay .payContainer__toPay_form .payContainer__toPay_buyBtn.loading {
  pointer-events: none;
}

.payContainer .payContainer__main .payContainer__main_toPay .payContainer__toPay_form #link-authentication-element {
  position: relative;
}

.payContainer .payContainer__main .payContainer__main_toPay .payContainer__toPay_form #link-authentication-element::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

.payContainer .payContainer__main .payContainer__main_toPay .payContainer__toPay_form .payContainer__toPay_desc {
  width: 100%;
  height: 76px;
  background: #e8eaee;
  border-radius: 3px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  cursor: default;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin-top: 18px;
}

.payContainer .payContainer__main .payContainer__main_toPay .payContainer__toPay_form .payContainer__toPay_desc p {
  font-weight: 300;
  font-size: 12px;
  line-height: 18px;
  text-align: center;
  cursor: default;
  max-width: 90%;
}

.payContainer .payContainer__main .payContainer__main_toPay .payContainer__toPay_form .payContainer__toPay_desc p:nth-child(1) {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.payContainer .payContainer__main .payContainer__main_toPay .payContainer__toPay_form .payContainer__toPay_desc p:nth-child(2) {
  color: #6d4dff;
  cursor: pointer;
  text-decoration: underline;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.payContainer .payContainer__main .payContainer__main_toPay .payContainer__toPay_form .payContainer__toPay_desc p:nth-child(2):hover {
  opacity: 0.7;
}

.payContainer .payContainer__main .payContainer__main_toPay .payContainer__toPay_form .payContainer__toPay_desc p:nth-child(2):active {
  opacity: 0.8;
}

.payContainer .payContainer__main .payContainer__main_toPay .payContainer__toPay_form .payContainer__form_cardName {
  width: 375px;
  margin-bottom: 20px;
  position: absolute;
  top: 394px;
}

.payContainer .payContainer__main .payContainer__main_toPay .payContainer__toPay_form .payContainer__form_cardName p {
  margin-bottom: 3px;
  color: #a19cb5;
  font-weight: 300;
  font-size: 12px;
  line-height: 17px;
}

.payContainer .payContainer__main .payContainer__main_toPay .payContainer__toPay_form .payContainer__form_cardName input {
  width: 100%;
  height: 40px;
  background: #ffffff;
  border: 1px solid #6d717a4d;
  border-radius: 3px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  outline: none;
  text-indent: 15px;
  color: #39325a;
  font-weight: 300;
  font-size: 12px;
}

.payContainer .payContainer__main .payContainer__main_toPay .payContainer__toPay_form .payContainer__form_cardName input::-webkit-input-placeholder {
  color: #a19cb5;
  font-weight: 300;
  font-size: 12px;
  line-height: 40px;
}

.payContainer .payContainer__main .payContainer__main_toPay .payContainer__toPay_form .payContainer__form_cardName input:-ms-input-placeholder {
  color: #a19cb5;
  font-weight: 300;
  font-size: 12px;
  line-height: 40px;
}

.payContainer .payContainer__main .payContainer__main_toPay .payContainer__toPay_form .payContainer__form_cardName input::-ms-input-placeholder {
  color: #a19cb5;
  font-weight: 300;
  font-size: 12px;
  line-height: 40px;
}

.payContainer .payContainer__main .payContainer__main_toPay .payContainer__toPay_form .payContainer__form_cardName input::placeholder {
  color: #a19cb5;
  font-weight: 300;
  font-size: 12px;
  line-height: 40px;
}

.payContainer .payContainer__main .payContainer__main_toPay .payContainer__toPay_form .validation-message {
  position: absolute;
  top: 100%;
  left: 0;
  max-width: 100%;
  font-size: 12px;
  color: #fd3050;
  line-height: 17px;
  display: none;
  font-weight: 400;
}

.PayResultPopFailed {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.16);
  z-index: 1000;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.PayResultPopFailed .PayResultPopFailed__main {
  width: 924px;
  height: 764px;
  background: #f8f9fb;
  -webkit-box-shadow: 0px 10px 40px #3c4a681a;
  box-shadow: 0px 10px 40px #3c4a681a;
  border: 1px solid #3c4a681a;
  border-radius: 8px;
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: center;
  /* padding-top: 126px; */
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  max-height:90vh;
}

.PayResultPopFailed .PayResultPopFailed__main .PayResultPopFailed__close {
  position: absolute;
  top: 16px;
  right: 16px;
  width: 32px;
  height: 32px;
  background-image: url(data:image/svg+xml;base64,PHN2ZyBpZD0i5YWz6ZetIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+CiAgPGRlZnM+CiAgICA8Y2xpcFBhdGggaWQ9ImNsaXAtcGF0aCI+CiAgICAgIDxyZWN0IGlkPSLnn6nlvaJfMTYwIiBkYXRhLW5hbWU9IuefqeW9oiAxNjAiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTg1NyA2ODApIiBmaWxsPSIjZmZmIiBzdHJva2U9IiMzMzMiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgPC9jbGlwUGF0aD4KICA8L2RlZnM+CiAgPGcgaWQ9IuiSmeeJiOe7hF80NyIgZGF0YS1uYW1lPSLokpnniYjnu4QgNDciIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xODU3IC02ODApIiBjbGlwLXBhdGg9InVybCgjY2xpcC1wYXRoKSI+CiAgICA8cGF0aCBpZD0i6Lev5b6EXzM0MjAiIGRhdGEtbmFtZT0i6Lev5b6EIDM0MjAiIGQ9Ik0tMTk4OS40NS02Ljc3NmwtMTIsMTJtMC0xMiwxMiwxMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzg2NC40NSA2OTMuMDQyKSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMzMzIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIvPgogIDwvZz4KPC9zdmc+);
  background-size: 24px 24px;
  background-position: center;
}

.PayResultPopFailed .PayResultPopFailed__main .PayResultPopFailed__close:hover {
  background-image: url(data:image/svg+xml;base64,PHN2ZyBpZD0i5YWz6ZetIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiI+CiAgPGRlZnM+CiAgICA8Y2xpcFBhdGggaWQ9ImNsaXAtcGF0aCI+CiAgICAgIDxyZWN0IGlkPSLnn6nlvaJfMTYwIiBkYXRhLW5hbWU9IuefqeW9oiAxNjAiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTg1NyA2ODApIiBmaWxsPSIjZmZmIiBzdHJva2U9IiMzMzMiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgPC9jbGlwUGF0aD4KICA8L2RlZnM+CiAgPHJlY3QgaWQ9IuefqeW9ol8xNjEiIGRhdGEtbmFtZT0i55+p5b2iIDE2MSIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiByeD0iMTIiIGZpbGw9IiM2ZDcxN2EiIG9wYWNpdHk9IjAuMSIvPgogIDxnIGlkPSLokpnniYjnu4RfNDciIGRhdGEtbmFtZT0i6JKZ54mI57uEIDQ3IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTg1MyAtNjc2KSIgY2xpcC1wYXRoPSJ1cmwoI2NsaXAtcGF0aCkiPgogICAgPHBhdGggaWQ9Iui3r+W+hF8zNDIwIiBkYXRhLW5hbWU9Iui3r+W+hCAzNDIwIiBkPSJNLTE5ODkuNDUtNi43NzZsLTEyLDEybTAtMTIsMTIsMTIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM4NjQuNDUgNjkzLjA0MikiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiLz4KICA8L2c+Cjwvc3ZnPg==);
  background-size: cover;
}

.PayResultPopFailed .PayResultPopFailed__main .PayResultPopFailed__main_title {
  margin-bottom: 22px;
  color: #39325a;
  font-size: 28px;
  line-height: 39px;
  font-weight: 600;
}

.PayResultPopFailed .PayResultPopFailed__main .PayResultPopFailed__main_desc {
  margin-bottom: 77px;
}

.PayResultPopFailed .PayResultPopFailed__main .PayResultPopFailed__main_desc p {
  color: #39325a;
  font-size: 16px;
  line-height: 25px;
  font-weight: 300;
  text-align: center;
}

.PayResultPopFailed .PayResultPopFailed__main .PayResultPopFailed__main_btn {
  text-align: center;
}

.PayResultPopFailed .PayResultPopFailed__main .PayResultPopFailed__main_btn button {
  width: 205px;
  height: 57px;
  background: #6d4dff;
  border-radius: 3px;
  margin-bottom: 18px;
  font-size: 18px;
  font-weight: 600;
  color: #ffffff;
  border:none;
}

.PayResultPopFailed .PayResultPopFailed__main .PayResultPopFailed__main_btn button:hover {
  background-color: #4d42e4 !important;
}

.PayResultPopFailed .PayResultPopFailed__main .PayResultPopFailed__main_needhelp {
  text-align: center;
  color: #39325a;
  font-size: 16px;
  line-height: 25px;
  font-weight: 300;
  cursor: pointer;
}

.PayResultPopFailed .PayResultPopFailed__main .PayResultPopFailed__main_needhelp:hover {
  text-decoration: underline;
}

.PayResultPopSuccessed {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.16);
  z-index: 1000;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.PayResultPopSuccessed .PayResultPopSuccessed__main {
  width: 924px;
  height: 764px;
  background: #f8f9fb;
  -webkit-box-shadow: 0px 10px 40px #3c4a681a;
  box-shadow: 0px 10px 40px #3c4a681a;
  border: 1px solid #3c4a681a;
  border-radius: 8px;
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: center;
  /* padding-top: 131px; */
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  max-height:90vh;
}

.PayResultPopSuccessed .PayResultPopSuccessed__main .PayResultPopSuccessed__mian_logo {
  margin-bottom: 25px;
}

.PayResultPopSuccessed .PayResultPopSuccessed__main .PayResultPopSuccessed__close {
  position: absolute;
  top: 16px;
  right: 16px;
  width: 32px;
  height: 32px;
  background-image: url(data:image/svg+xml;base64,PHN2ZyBpZD0i5YWz6ZetIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+CiAgPGRlZnM+CiAgICA8Y2xpcFBhdGggaWQ9ImNsaXAtcGF0aCI+CiAgICAgIDxyZWN0IGlkPSLnn6nlvaJfMTYwIiBkYXRhLW5hbWU9IuefqeW9oiAxNjAiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTg1NyA2ODApIiBmaWxsPSIjZmZmIiBzdHJva2U9IiMzMzMiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgPC9jbGlwUGF0aD4KICA8L2RlZnM+CiAgPGcgaWQ9IuiSmeeJiOe7hF80NyIgZGF0YS1uYW1lPSLokpnniYjnu4QgNDciIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xODU3IC02ODApIiBjbGlwLXBhdGg9InVybCgjY2xpcC1wYXRoKSI+CiAgICA8cGF0aCBpZD0i6Lev5b6EXzM0MjAiIGRhdGEtbmFtZT0i6Lev5b6EIDM0MjAiIGQ9Ik0tMTk4OS40NS02Ljc3NmwtMTIsMTJtMC0xMiwxMiwxMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzg2NC40NSA2OTMuMDQyKSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMzMzIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIvPgogIDwvZz4KPC9zdmc+);
  background-size: 24px 24px;
  background-position: center;
}

.PayResultPopSuccessed .PayResultPopSuccessed__main .PayResultPopSuccessed__close:hover {
  background-image: url(data:image/svg+xml;base64,PHN2ZyBpZD0i5YWz6ZetIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiI+CiAgPGRlZnM+CiAgICA8Y2xpcFBhdGggaWQ9ImNsaXAtcGF0aCI+CiAgICAgIDxyZWN0IGlkPSLnn6nlvaJfMTYwIiBkYXRhLW5hbWU9IuefqeW9oiAxNjAiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTg1NyA2ODApIiBmaWxsPSIjZmZmIiBzdHJva2U9IiMzMzMiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgPC9jbGlwUGF0aD4KICA8L2RlZnM+CiAgPHJlY3QgaWQ9IuefqeW9ol8xNjEiIGRhdGEtbmFtZT0i55+p5b2iIDE2MSIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiByeD0iMTIiIGZpbGw9IiM2ZDcxN2EiIG9wYWNpdHk9IjAuMSIvPgogIDxnIGlkPSLokpnniYjnu4RfNDciIGRhdGEtbmFtZT0i6JKZ54mI57uEIDQ3IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTg1MyAtNjc2KSIgY2xpcC1wYXRoPSJ1cmwoI2NsaXAtcGF0aCkiPgogICAgPHBhdGggaWQ9Iui3r+W+hF8zNDIwIiBkYXRhLW5hbWU9Iui3r+W+hCAzNDIwIiBkPSJNLTE5ODkuNDUtNi43NzZsLTEyLDEybTAtMTIsMTIsMTIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM4NjQuNDUgNjkzLjA0MikiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiLz4KICA8L2c+Cjwvc3ZnPg==);
  background-size: cover;
}

.PayResultPopSuccessed .PayResultPopSuccessed__main .PayResultPopSuccessed__main_title {
  margin-bottom: 22px;
  color: #39325a;
  font-size: 28px;
  line-height: 39px;
  font-weight: 600;
}

.PayResultPopSuccessed .PayResultPopSuccessed__main .PayResultPopSuccessed__main_desc {
  margin-bottom: 39px;
  width: 807px;
  height: 180px;
  background: #ffffff;
  border: 1px solid #3c4a681a;
  border-radius: 10px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.PayResultPopSuccessed .PayResultPopSuccessed__main .PayResultPopSuccessed__main_desc p {
  color: #39325a;
  font-weight: 300;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
}

.PayResultPopSuccessed .PayResultPopSuccessed__main .PayResultPopSuccessed__main_desc p span {
  font-weight: 600;
}

.PayResultPopSuccessed .PayResultPopSuccessed__main .PayResultPopSuccessed__main_desc p a {
  color: #6d4dff;
  font-weight: 300;
}

.PayResultPopSuccessed .PayResultPopSuccessed__main .PayResultPopSuccessed__main_desc p:nth-child(1) {
  margin-bottom: 15px;
  max-width: 670px;
}

.PayResultPopSuccessed .PayResultPopSuccessed__main .PayResultPopSuccessed__main_desc p:nth-child(2) {
  max-width: 690px;
}

.PayResultPopSuccessed .PayResultPopSuccessed__main .PayResultPopSuccessed__main_btn {
  text-align: center;
}

.PayResultPopSuccessed .PayResultPopSuccessed__main .PayResultPopSuccessed__main_btn button {
  width: 205px;
  height: 57px;
  background: #6d4dff;
  border-radius: 3px;
  margin-bottom: 18px;
  font-size: 18px;
  font-weight: 600;
  color: #ffffff;
  border:none;
}

.PayResultPopSuccessed .PayResultPopSuccessed__main .PayResultPopSuccessed__main_btn button:hover {
  background-color: #4d42e4 !important;
}

.payContainer__toPay_form {
  /* Buttons and links */
}

.payContainer__toPay_form .hidden {
  display: none;
}

.payContainer__toPay_form #payment-element {
  margin-bottom: 25px;
  margin-top: 25px;
  position: relative;
}

.payContainer__toPay_form button {
  height: 44px;
  background: #fd3050;
  color: #ffffff;
  border-radius: 3px;
  border: 0;
  font-size: 16px;
  font-weight: 600;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
  -webkit-box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
  box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
  width: 100%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    cursor: pointer;
    position: relative;
}

.payContainer__toPay_form button:hover {
  background-color: #fd3050 !important;
  opacity: 0.7;
}

.payContainer__toPay_form button:active {
  background-color: #fd3050 !important;
  opacity: 0.8;
}

.payContainer__toPay_form #submit.disabled {
  opacity: 0.6;
  background-color: #fd3050 !important;
  cursor: default;
}
.btn-loading {
  text-indent: -99999px;
}
.btn-loading:after {
  content: '';
  font-size: 8px;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  position: relative;
  display: block;
  animation: flash-black 1.5s ease-out infinite alternate;
}
@keyframes flash-black {
  0% {
    background-color: #FFF2;
    box-shadow: 2em 0 #FFF2, -2em 0 #FFF;
  }
  50% {
    background-color: #FFF;
    box-shadow: 2em 0 #FFF2, -2em 0 #FFF2;
  }
  100% {
    background-color: #FFF2;
    box-shadow: 2em 0 #FFF, -2em 0 #FFF2;
  }
}

@media (max-width: 1400px) {
  .payContainer .payContainer__main {
    height: 600px;
    overflow-y: auto;
    padding: 20px 0;
    -webkit-box-align: unset;
    -ms-flex-align: unset;
    align-items: unset;
    border-top: 20px solid #f8f9fb;
    border-bottom: 20px solid #f8f9fb;
  }

  .payContainer .payContainer__main .payContainer__toPay_form {
    padding-bottom: 0 !important;
  }

  .payContainer .payContainer__main::-webkit-scrollbar {
    width: 5px;
  }

  .payContainer .payContainer__main::-webkit-scrollbar-thumb {
    cursor: pointer;
    border-radius: 8px;
    background-color: rgba(109, 113, 122, 0.2);
    border-radius: 4px;
  }

  .payContainer .payContainer__main::-webkit-scrollbar-thumb:hover {
    background: rgba(109, 113, 122, 0.5);
  }
}

`;var Hu="https://js.stripe.com/v3",hb=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/;var pb=function(){for(var e=document.querySelectorAll('script[src^="'.concat(Hu,'"]')),n=0;n<e.length;n++){var i=e[n];if(hb.test(i.src))return i}return null},mb=function(e){var n=e&&!e.advancedFraudSignals?"?advancedFraudSignals=false":"",i=document.createElement("script");i.src="".concat(Hu).concat(n);var s=document.head||document.body;if(!s)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return s.appendChild(i),i},gb=function(e,n){!e||!e._registerWrapper||e._registerWrapper({name:"stripe-js",version:"1.54.1",startTime:n})},_r=null,_b=function(e){return _r!==null||(_r=new Promise(function(n,i){if(typeof window>"u"||typeof document>"u"){n(null);return}if(window.Stripe,window.Stripe){n(window.Stripe);return}try{var s=pb();s&&e||s||(s=mb(e)),s.addEventListener("load",function(){window.Stripe?n(window.Stripe):i(new Error("Stripe.js not available"))}),s.addEventListener("error",function(){i(new Error("Failed to load Stripe.js"))})}catch(a){i(a);return}})),_r},yb=function(e,n,i){if(e===null)return null;var s=e.apply(void 0,n);return gb(s,i),s},Wu=Promise.resolve().then(function(){return _b(null)}),zu=!1;Wu.catch(function(t){});var bb=function(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];zu=!0;var s=Date.now();return Wu.then(function(a){return yb(a,n,s)})};class zc extends nn{constructor(){super(),this.chooseId="",this.titleName="",this.type="",this.requestLanguage="en",this.curPayPro={},this.emailAddress="",this.stripeKey="",this.pricingType="",this.paymentElement=null,this.monthLists=["January","February","March","April","May","June","July","August","September","October","November","December"],this.logoUrl="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNzgiIGhlaWdodD0iNzgiIHZpZXdCb3g9IjAgMCA3OCA3OCI+CiAgPGRlZnM+CiAgICA8Y2xpcFBhdGggaWQ9ImNsaXAtcGF0aCI+CiAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGVfMjU0OSIgZGF0YS1uYW1lPSJSZWN0YW5nbGUgMjU0OSIgd2lkdGg9Ijc4IiBoZWlnaHQ9Ijc4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNSAzMCkiIGZpbGw9IiNmZmYiIHN0cm9rZT0iIzcwNzA3MCIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICA8L2NsaXBQYXRoPgogICAgPGxpbmVhckdyYWRpZW50IGlkPSJsaW5lYXItZ3JhZGllbnQiIHgxPSIwLjE4NSIgeTE9IjAuOTI2IiB4Mj0iMC43NzciIHkyPSIwLjA1IiBncmFkaWVudFVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzhmODdmZiIgc3RvcC1vcGFjaXR5PSIwIi8+CiAgICAgIDxzdG9wIG9mZnNldD0iMC4xNDUiIHN0b3AtY29sb3I9IiM4ZTdhZmYiIHN0b3Atb3BhY2l0eT0iMC4xNzMiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIwLjQ2MSIgc3RvcC1jb2xvcj0iIzhjNjBmZiIgc3RvcC1vcGFjaXR5PSIwLjUyMiIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjAuNzE4IiBzdG9wLWNvbG9yPSIjOGI0ZGZmIiBzdG9wLW9wYWNpdHk9IjAuNzgiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIwLjkwNCIgc3RvcC1jb2xvcj0iIzhiNDFmZiIgc3RvcC1vcGFjaXR5PSIwLjkzNyIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM4YjNkZmYiLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImxpbmVhci1ncmFkaWVudC0yIiB4MT0iMC40OTIiIHkxPSIwLjAyMSIgeDI9IjAuNTExIiB5Mj0iMS4wMDkiIHhsaW5rOmhyZWY9IiNsaW5lYXItZ3JhZGllbnQiLz4KICA8L2RlZnM+CiAgPGcgaWQ9ImxvZ29fbG9hZGluZyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTI1IC0zMCkiIGNsaXAtcGF0aD0idXJsKCNjbGlwLXBhdGgpIj4KICAgIDxnIGlkPSJHcm91cF8yMTU2IiBkYXRhLW5hbWU9Ikdyb3VwIDIxNTYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI3Ljk5OSAzNS45NzkpIj4KICAgICAgPHBhdGggaWQ9IlBhdGhfODA5MCIgZGF0YS1uYW1lPSJQYXRoIDgwOTAiIGQ9Ik0yNi4xODEsNjguODgzQTE2NS44ODUsMTY1Ljg4NSwwLDAsMCw2Mi4zODcsODkuOTA5LDE1LjM3OSwxNS4zNzksMCwwLDAsODMuODE1LDc2LjUyMWExNjUuOTUzLDE2NS45NTMsMCwwLDAtMy4wMzItNDEuNzU3Yy0xLjctOC4yLTExLjQ4My0xMi4wNTItMTkuNjM0LTguMDI5YTE5Ny43LDE5Ny43LDAsMCwwLTE3LjMxMyw5LjY1cS04LjQ4Nyw1LjMxLTE2LjI1NywxMS4zMjZDMjAuMzg3LDUzLjI3NiwxOS41NTksNjMuNzUzLDI2LjE4MSw2OC44ODNaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjEuNjY2IC0yNS4xMjkpIiBmaWxsPSIjOGIzZGZmIiBvcGFjaXR5PSIwLjI1Ii8+CiAgICAgIDxwYXRoIGlkPSJQYXRoXzgwOTEiIGRhdGEtbmFtZT0iUGF0aCA4MDkxIiBkPSJNNDEuODc1LDkwLjI3MkExNjUuNywxNjUuNywwLDAsMCw3OC44ODksNzAuNzE0YTE1LjM2OSwxNS4zNjksMCwwLDAsMC0yNS4yNjFBMTY1LjkzNSwxNjUuOTM1LDAsMCwwLDQxLjg3NSwyNS44ODljLTcuODU3LTIuOS0xNi4zMDgsMy4zNTctMTcuMjE3LDEyLjRhMTk4LjMxMSwxOTguMzExLDAsMCwwLDAsMzkuNTg5QzI1LjU2Nyw4Ni45MiwzNC4wMTgsOTMuMTcyLDQxLjg3NSw5MC4yNzJaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTMuNSAtMjQuOTQ5KSIgZmlsbD0iIzhiM2RmZiIvPgogICAgICA8cGF0aCBpZD0iUGF0aF84MDkyIiBkYXRhLW5hbWU9IlBhdGggODA5MiIgZD0iTTM5LjA1OSwzOC4yYy0uNjE1LDEuNjItMS4xNjMsMy4wNzgtMS43MTcsNC41NC0xLjY3MSw0LjQxOC0zLjMyNyw4Ljg0Mi01LjAxOCwxMy4yNUEzLjYyNSwzLjYyNSwwLDEsMSwyNS41MTksNTMuNXEzLjAyNC04LjIxMiw2LjE0LTE2LjM4OWE0NC44LDQ0LjgsMCwwLDEsMi4wMjEtNC44OTEsNS44ODksNS44ODksMCwwLDEsOS4yNDgtMS44NDQsOC44ODksOC44ODksMCwwLDEsMS45LDIuODY0YzEuNzYyLDMuNjA2LDMuNDQzLDcuMjQ3LDUuMzIyLDEwLjg2OFY0Mi45NjRjLjAwNS0xLjI5LS4wMi0yLjU4LjAxLTMuODdhMy42NzMsMy42NzMsMCwwLDEsMi4zNDYtMy40MDgsMy41LDMuNSwwLDAsMSwzLjksMS4wNzcsNC4wNjQsNC4wNjQsMCwwLDEsLjg0OCwyLjc2OGMuMDMsNC41NDUuMDUxLDkuMSwwLDEzLjY0MWE1LjExNSw1LjExNSwwLDAsMS0yLjkyLDQuNzg5QTQuOSw0LjksMCwwLDEsNDkuMSw1Ny41Nyw2LjQ2OCw2LjQ2OCwwLDAsMSw0Nyw1NC44MzhxLTMuODQ3LTguMTEzLTcuNjg0LTE2LjIzMkMzOS4yNzcsMzguNTIsMzkuMjE3LDM4LjQ0NCwzOS4wNTksMzguMloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02Ljk3NiAtOS44OTUpIiBmaWxsPSIjZmZmIi8+CiAgICAgIDxwYXRoIGlkPSJQYXRoXzgwOTMiIGRhdGEtbmFtZT0iUGF0aCA4MDkzIiBkPSJNMzYuOSwzMS41NTNhMy4zMTYsMy4zMTYsMCwxLDEtNi42MzMuMDIsMy4zNDgsMy4zNDgsMCwwLDEsMy4zNDItMy4zMTFBMy40NDQsMy40NDQsMCwwLDEsMzYuOSwzMS41NTNaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMy40MTUgLTEyLjM1KSIgZmlsbD0iI2ZmZiIvPgogICAgICA8cGF0aCBpZD0iUGF0aF84MDk0IiBkYXRhLW5hbWU9IlBhdGggODA5NCIgZD0iTTM1LjE3NCwzMC4yMDhhNC4yODUsNC4yODUsMCwwLDAtMy45NTYsMi42NDZjLS4wMjUuMDYxLS4wNjEuMTMyLS4wOTEuMTkzUTI4LjMsNDAuNTIsMjUuNTE5LDQ4LjAxNGEzLjYyNSwzLjYyNSwwLDEsMCw2LjgwNSwyLjQ5NGMxLjY5MS00LjQwOCwzLjM0Ny04LjgzMiw1LjAxOC0xMy4yNS41NTQtMS40NjMsMS4xLTIuOTIsMS43MTctNC41NGwuMDMuMDQ2QTQuMjc5LDQuMjc5LDAsMCwwLDM1LjE3NCwzMC4yMDhaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNi45NzYgLTQuNDEyKSIgb3BhY2l0eT0iMC4yNCIgZmlsbD0idXJsKCNsaW5lYXItZ3JhZGllbnQpIi8+CiAgICAgIDxwYXRoIGlkPSJQYXRoXzgwOTUiIGRhdGEtbmFtZT0iUGF0aCA4MDk1IiBkPSJNMzcuMjg3LDQ1Ljc1M2MuMDI1LTMuODQ1LjAxNS03LjY4OS0uMDEtMTEuNTM0YTQuMDY0LDQuMDY0LDAsMCwwLS44NDgtMi43NjgsMy41LDMuNSwwLDAsMC0zLjktMS4wNzcsMy42NzMsMy42NzMsMCwwLDAtMi4zNDYsMy40MDhjLS4wMywxLjI5LS4wMDUsMi41OC0uMDEsMy44N1YzOC43N2wzLjc3Myw3LjdhMS43NjgsMS43NjgsMCwwLDAsMy4zNDItLjcyMVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEzLjAwOCAtNC41ODQpIiBvcGFjaXR5PSIwLjI0IiBmaWxsPSJ1cmwoI2xpbmVhci1ncmFkaWVudC0yKSIvPgogICAgPC9nPgogIDwvZz4KPC9zdmc+Cg=="}render(){return $e`
    <div class="paySuccess"></div>
    <div class="payFail"></div>
    <div class="payContainer lang-${this.requestLanguage} isShow">
      <div class="payContainer__main">
        <div class="payContainer__main_cartInfo">
          <div class="payContainer__cartInfo_pro">
            <div class="payContainer__pro_icon">
              <img src="${this.logoUrl}" width="62" height="62" />
            </div>
            <div class="payContainer__pro_info">
              <h2 class="payContainer__info_title">Vidnoz AI Premium</h2>
            </div>
          </div>
          <div class="hr"></div>

          <div class="payContainer__info_orginal_total flex-normal">
            <span class="payContainer__info_orginal_total_title">${this.titleName}</span>
            <span class="payContainer__info_orginal_total_price"></span>
          </div>
          
          <div class="payContainer__info_description">
                <span class="payContainer__info_description_pre"></span>
                <span class="payContainer__info_description_max"></span>
          </div>

          <div class="payContainer__info_subtotal flex-normal" style="display:${this.type==="year"?"flex":"none"}">
                <span>Subtotal:</span>
                <span class="payContainer__info_subtotal_price"></span>
          </div>

          <div class="payContainer__info_discount flex-normal" style="display:${this.type==="year"?"flex":"none"}">
                <span>Discount:</span>
                <span class="payContainer__info_discount_price"></span>
          </div>

          <div class="payContainer__info_total_due flex-normal" style="margin-top:${this.type==="year"?"18":"63.5"}px">
                <span>Total due today:</span>
                <span class="payContainer__info_total_due_price"></span>
          </div>
          
          
          <div class="hr" style="margin-bottom: 12px"></div>
          
          <div class="payContainer__info_tips">Renewal on July 27, 2024, at $14.99/mo ($179.88 in total)</div>

          
          <ul class="payContainer__cartInfo_avad" style="margin-top:${this.type==="year"?"65":"110"}px">
            <li>
              <img src="/pay/secure.svg" width="24" height="24" />
              100% secure payment encryption
            </li>
            <li>
              <img src="/pay/service.svg" width="24" height="24" />
              24/7 technical service
            </li>
            <li>
              <img src="/pay/instant.svg" width="24" height="24" />
              Instant activation
            </li>
          </ul>
          <div class="hr" style="margin-bottom: 27.5px"></div>
          <div class="payContainer__cartInfo_logoList">
            <img src="/pay/logoList.svg" height="26" />
          </div>
        </div>
        <div class="payContainer__main_toPay">
          <div class="payContainer__toPay_title">Payment Details</div>
          <div class="payContainer__toPay_form">
            <form id="payment-form">
              <slot></slot>
              <button id="submit" class="button"><i>Buy Now</i></button>
            </form>
            <div class="payContainer__toPay_desc">
              <p>Your payment is securely processed by Stripe. </p>
              <p id="TermsAndConditions">Terms and Conditions</p>
            </div>
          </div>
        </div>
        <div class="payContainer__main_close"></div>
        <div class="payContainer__main_back"></div>
      </div>
    </div>
    `}async firstUpdated(){this.payContainer=this.qs(this.shadowRoot,".payContainer"),this.payContainerClose=this.qs(this.shadowRoot,".payContainer__main_close"),this.payContainerBack=this.qs(this.shadowRoot,".payContainer__main_back"),this.TermsAndConditions=this.qs(this.shadowRoot,"#TermsAndConditions");const e=this.getItem("aiPayProData");this.initPayPro(e),this.stripeKey||(this.stripeKey=await this.retryRequest());const n=await bb(this.stripeKey),i={jp:"ja",de:"de",en:"en",es:"es",fr:"fr",it:"it",pt:"pt"},s={mode:"payment",paymentMethodTypes:["card"],amount:Math.ceil(this.curPayPro.price*100),currency:this.curPayPro.currency.toLowerCase(),setup_future_usage:"off_session",locale:i[this.requestLanguage],fonts:[{cssSrc:"https://fonts.googleapis.com/css2?family=Lexend:wght@300&display=swap"}],appearance:{variables:{borderRadius:"3px",fontSizeBase:"0.8rem",colorText:"#A19CB5",fontSmooth:"always",spacingGridRow:"25px",fontFamily:"Lexend",colorDanger:"#FD3050",transition:"none"},rules:{".Input--invalid, .Input:focus":{boxShadow:"none"},".Input::placeholder":{color:"#A19CB5",fontSize:"0.8rem",fontFamily:"Lexend"},".Input":{boxShadow:"none",paddingTop:"0.89rem",paddingBottom:"0.89rem",color:"#39325A",fontFamily:"Lexend",transition:"none"},".Label":{textTransform:"Capitalize"},".Error":{color:"#FD3050"}}},hideIcon:!0},a=n.elements(s),d=this.getItem("user_info");this.emailAddress=d.email||"";const m=a.create("linkAuthentication",{defaultValues:{email:this.emailAddress}});m.mount("#link-authentication-element");let g=!0;m.on("change",I=>{this.emailAddress=I.value.email,m.update({defaultValues:{email:this.emailAddress}}),g&&(g=!1,document.querySelectorAll("pay-dialog iframe").forEach(O=>{O.addEventListener("mouseenter",()=>{O.setAttribute("title","")})}))}),this.paymentElement=a.create("payment",{layout:{type:"tabs",defaultCollapsed:!1}}),this.paymentElement.mount("#payment-element");const v=this.shadowRoot.querySelector("#payment-form"),C=this.shadowRoot.querySelector("#submit"),S=(I,O="")=>{this.clearSome(),O!=="input"&&this.createPayResultPopFailed()};v.addEventListener("submit",async I=>{I.preventDefault();const{error:O}=await a.submit();if(O){S(O,"input");return}C.classList.add("disabled"),this.changeLoadingStatus(C),this.payContainerClose.classList.add("disabled"),this.payContainerBack.classList.add("disabled");let A=null;try{A=(await dg({item:this.chooseId,product:"ai",st:De("st"),aff:De("aff"),insur:De("insur"),page:De("page")},"/stripe-pay-create")).clientSecret}catch{A=null}if(!A){S();return}const $=await n.confirmPayment({elements:a,clientSecret:A,confirmParams:{return_url:`${location.origin}/paysuccessful`,receipt_email:this.emailAddress},redirect:"if_required"}),{error:pe}=$;pe?S():this.createPayResultPopSuccessed()}),this.TermsAndConditions.onclick=()=>{const I={fr:"https://fr.vidnoz.com/conditions.html",en:"https://www.vidnoz.com/terms.html",es:"https://es.vidnoz.com/terminos.html",jp:"https://jp.vidnoz.com/terms.html",pt:"https://pt.vidnoz.com/termos.html",it:"https://it.vidnoz.com/terms.html",de:"https://de.vidnoz.com/nutzungsbedinungen.html"},O=I[this.requestLanguage]||I.en;window.open(O)},this.payContainerClose.onclick=()=>{this.paymentElement&&this.paymentElement.clear&&this.paymentElement.clear(),setTimeout(()=>{this.payContainer.classList.add("isShow")},20)},this.payContainerBack.onclick=()=>{this.paymentElement&&this.paymentElement.clear&&this.paymentElement.clear(),this.payContainer.classList.add("isShow");const I=document.querySelector(`pricing-dialog[pricingtype='${this.pricingType}']`);I&&(I.style.display="block")}}getItem(e){try{return JSON.parse(localStorage.getItem(e))}catch{return localStorage.getItem(e)}}setItem(e,n){e&&(e=e.toString(),n=JSON.stringify(n),window.localStorage.setItem(e,n))}qs(e,n=""){return e.querySelector(n)||""}changeLoadingStatus(e,n="add"){e.classList[n]("btn-loading")}createPayResultPopFailed(){const e=this.qs(this.shadowRoot,".PayResultPopFailed");e&&e.remove(),this.clearSome();const n=`
       <div class="PayResultPopFailed">
         <div class="PayResultPopFailed__main">
           <div class="PayResultPopFailed__close"></div>
           <img class="PayResultPopFailed__mian_logo" src="/pay/pay_failed_logo.svg" width="160" height="160" />
           <div class="PayResultPopFailed__main_title">Payment Failed</div>
           <div class="PayResultPopFailed__main_desc">
             <p>Your payment was not successfully processed.</p>
             <p>Please try again, or use a different payment method.</p>
           </div>
           <div class="PayResultPopFailed__main_btn">
             <button type="button" id="PayResultPopFailed__main_btn" class="button"><i>Try Again</i></button>
           </div>
           <p class="PayResultPopFailed__main_needhelp">Need help?</p>
         </div>
       </div>
     `;this.payContainer.classList.add("isShow"),this.shadowRoot.querySelector(".payFail").insertAdjacentHTML("beforeend",n);const i=this.qs(this.shadowRoot,".PayResultPopFailed"),s=this.qs(this.shadowRoot,".PayResultPopFailed__close"),a=this.qs(this.shadowRoot,".PayResultPopFailed__main_needhelp"),d=this.qs(this.shadowRoot,"#PayResultPopFailed__main_btn");s.onclick=()=>{i.remove()},a.onclick=()=>{window.open("https://www.vidnoz.com/requests.html")},d.onclick=()=>{this.payContainer.classList.remove("isShow"),i.remove()}}createPayResultPopSuccessed(){const e=this.qs(this.shadowRoot,".PayResultPopSuccessed");e&&e.remove(),this.clearSome();const n=`
       <div class="PayResultPopSuccessed">
         <div class="PayResultPopSuccessed__main">
           <div class="PayResultPopSuccessed__close"></div>
           <img class="PayResultPopSuccessed__mian_logo" src="/pay/success_logo.svg" width="90" height="90" />
           <div class="PayResultPopSuccessed__main_title">Payment Completed Successfully</div>
           <div class="PayResultPopSuccessed__main_desc">
             <p>Thanks for choosing Vidnoz AI. Your order (<span>${this.titleName||""}</span>) is complete, and your account:<span>${this.emailAddress||""}</span> switches to Premium automatically.</p>
             <p>If your Vidnoz AI Premium not working, try log out and back in. Or contact our <a href="https://www.vidnoz.com/requests.html" target="_blank">Support Team</a> for any question.</p>
           </div>
           <div class="PayResultPopSuccessed__main_btn">
             <button type="button" id="PayResultPopSuccessed__main_btn">OK</button>
           </div>
         </div>
       </div>
     `;this.payContainer.classList.add("isShow"),this.shadowRoot.querySelector(".paySuccess").insertAdjacentHTML("beforeend",n);const i=this.qs(this.shadowRoot,".PayResultPopSuccessed"),s=this.qs(this.shadowRoot,"#PayResultPopSuccessed__main_btn"),a=this.qs(this.shadowRoot,".PayResultPopSuccessed__close");a.onclick=()=>{i.remove(),localStorage.removeItem("isFreeuser"),localStorage.removeItem("user_info"),location.reload()},s.onclick=()=>{i.remove(),localStorage.removeItem("isFreeuser"),localStorage.removeItem("user_info"),location.reload()}}clearSome(){this.payContainerClose.classList.remove("disabled"),this.payContainerBack.classList.remove("disabled");const e=this.qs(this.shadowRoot,"#submit");e&&(this.changeLoadingStatus(e,"remove"),e.classList.remove("disabled"))}getKey(){return new Promise((e,n)=>{ug("/stripe-pay-get-set").then(i=>{let s="";i.code===200&&(s=(i.data||"").pk||""),e(s)}).catch(i=>{n(i)})})}async retryRequest(){let e=0;for(;e<5;)try{return await this.getKey()}catch{e++,await new Promise(i=>setTimeout(i,1e3))}}formatCurrency(e,n="USD"){const i={jp:"ja-JP",de:"de-DE",en:"en-US",es:"en-US",fr:"fr-FR",it:"it-IT",pt:"pt-BR"}[this.requestLanguage]||"en-US",s=new Intl.NumberFormat(i,{style:"currency",currency:n});return String(s.format(e)).replace(/&nbsp;|\s/ig,"")}getFutureYearAndMonth(e){const n=new Date,i=new Date(n.getFullYear(),n.getMonth()+e,n.getDate()),s=i.getFullYear(),a=i.getMonth()+1,d=i.getDate();return{year:s,month:this.monthLists[a-1],day:d}}initPayPro(e){this.curPayPro=e,this.chooseId=e.id,this.totalPriceDom=this.qs(this.shadowRoot,".payContainer__info_orginal_total_price"),this.descriptionPreDom=this.qs(this.shadowRoot,".payContainer__info_description_pre"),this.descriptionMaxDom=this.qs(this.shadowRoot,".payContainer__info_description_max"),this.subtotalPriceDom=this.qs(this.shadowRoot,".payContainer__info_subtotal_price"),this.discountPriceDom=this.qs(this.shadowRoot,".payContainer__info_discount_price"),this.duePriceDom=this.qs(this.shadowRoot,".payContainer__info_total_due_price"),this.tipsDom=this.qs(this.shadowRoot,".payContainer__info_tips");const n=e.currency,i=e.num,s=this.formatCurrency(e.price/i,n),a=this.formatCurrency(e.price,n),d=this.formatCurrency(e.price/.75,n);this.totalPriceDom.innerHTML=this.type==="year"?d:s,this.descriptionPreDom.innerHTML=`${e.ai_monthly_video_time}-min / month`,this.descriptionMaxDom.innerHTML=`${e.ai_single_video_time} mins maximum per video`,this.type==="year"&&(this.subtotalPriceDom.innerHTML=d,this.discountPriceDom.innerHTML=`<i>${e.discount}% OFF</i> (- ${this.formatCurrency(e.discount_price,n)})`),this.duePriceDom.innerHTML=a,this.tipsDom.innerHTML=`Renewal on ${this.getFutureYearAndMonth(i).month} ${this.getFutureYearAndMonth(i).day}, ${this.getFutureYearAndMonth(i).year}, at ${s}/mo (${a} in total)`}againIntoCart(){const e=this.getItem("aiPayProData");this.initPayPro(e)}}ot(zc,"properties",{type:"",titleName:"",pricingType:""}),ot(zc,"styles",[fb]);ub({dsn:"https://7ff740f4cb484c7cb43cd5f98b1d816e@o1325129.ingest.sentry.io/4505475862233088",environment:"prod",allowUrls:[/aiapp.*\.vidnoz\.com/],ignoreErrors:["ResizeObserver loop limit exceeded"]});export{kb as $,Ig as A,ix as B,wb as C,rx as D,Wb as E,Db as F,Qb as G,tx as H,Sg as I,Pe as J,ex as K,Kb as L,mi as M,nx as N,sx as O,Fc as P,Hc as Q,Wc as R,zc as S,Vn as T,Jd as U,Fb as V,cx as W,lx as X,ax as Y,Rb as Z,j as _,jo as a,Yb as a0,$b as a1,Lb as a2,Ob as a3,Xl as a4,Hb as a5,jb as a6,$o as a7,Fn as a8,ox as a9,Bb as aa,zb as ab,Mb as ac,De as b,Rn as c,Pb as d,Jb as e,Ib as f,Xa as g,Cb as h,Sb as i,se as j,Eb as k,Tb as l,Ab as m,Qd as n,Ja as o,Ol as p,zi as q,Vb as r,nn as s,Xb as t,Nb as u,qb as v,Ll as w,$e as x,Dg as y,Pg as z};
//# sourceMappingURL=sentry-604fb4c0.js.map
