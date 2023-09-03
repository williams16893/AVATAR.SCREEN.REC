var Yl=Object.defineProperty;var $l=(r,t,e)=>t in r?Yl(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var cr=(r,t,e)=>($l(r,typeof t!="symbol"?t+"":t,e),e);import{s as du,q as fu,r as Zl,t as Jl,x as pu,j as A,g as Ql,i as eh,o as Sa,M as mt,e as th,p as nh,a as Jt,v as ti,w as rh}from"./sentry-604fb4c0.js";import"./fabric-d1db407f.js";import"./switch-pro-d3fb1dc8.js";(function(){try{var r=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[t]="da7c7807-93ab-4212-ad1e-0b6402657fce",r._sentryDebugIdIdentifier="sentry-dbid-da7c7807-93ab-4212-ad1e-0b6402657fce")}catch{}})();class ko extends du{constructor(){super(),this.value="1"}renderAudioList(){let t="";this.dataList=JSON.parse(Zl("audioList")),this.dataList.map(n=>{t+=`
            <li data-id="${n.id}">
              <img src="${n.img_url}" >
              <p class="language">${n.country_name}</p>
              <span class="avatar-name">${n.name}</span>
              <i class="icon"></i>
            </li>
            `}),this.shadowRoot.querySelector(".select-option-data").innerHTML=t,Jl(document,this,this.renderRoot.querySelector(".select-option-data"),"mouseup");const e=this.renderRoot.querySelectorAll("li");e.forEach(n=>{n.onclick=a=>{e.forEach(s=>{s.classList.remove("active")}),n.classList.add("active");const o=~~a.currentTarget.getAttribute("data-id"),i=this.dataList.filter(s=>s.id===o);i.length>0&&(this.shadowRoot.querySelector(".display-data").innerHTML=` <img src="${i[0].img_url}" >
            <p class="language">${i[0].country_name}</p>
            <span class="avatar-name">${i[0].name}</span>`,this.renderRoot.querySelector(".select-option-data").style.display="none",this.dispatchEvent(new CustomEvent("choosevoice",{detail:{value:i[0]}})))}})}render(){return pu`
      <div class="select-voice">
        <div class="display-data" @click=${this.showOption}></div>
        <ul class="select-option-data  ${this.position}" >

        </ul>
      </div>
    `}showOption(){const t=this.renderRoot.querySelector(".select-option-data"),e=this.renderRoot.querySelector(".display-data");t.style.display==="block"?t.style.display="none":(t.style.display="block",window.innerHeight-10<=t.clientHeight+e.getBoundingClientRect().top+e.clientHeight?t.classList.add("top"):t.classList.remove("top"))}getSelectedVoice(){const t=this.renderRoot.querySelector(".select-option-data .active");return t?t.getAttribute("data-id"):!1}setSelectedVoice(t){if(this.renderRoot.querySelector(`li[data-id='${t}']`))this.renderRoot.querySelector(`li[data-id='${t}']`).click();else{const e=this.renderRoot.querySelector("li");e&&e.click()}}}cr(ko,"properties",{value:"",position:"",currentValue:""}),cr(ko,"styles",[fu`
    .select-voice{
      width: 310px;
      height: 44px;
      box-sizing: border-box;
      position: relative;
    }
    
    img{
      width:30px;
      height:30px;
      flex-shrink: 0;
      border: 1px solid #8C8C9733;
      border-radius: 50%;
      box-sizing: border-box;
    }
    .language{
      padding-left:19px;
      font: normal normal normal 14px/19px Roboto;
      color: #1E1E2E;
    }
    .avatar-name{
      font: normal normal normal 13px/18px Roboto;
      color: #8C8C97;
      margin-left:auto;
    }
    .display-data{
      width: 100%;
      height: 100%;
      cursor: pointer;
      border-radius: 6px;
      box-sizing: border-box;
      background-color: rgba(255, 255, 255, 1);
      border: 1px solid rgba(30, 30, 46, 0.2);
      background-image: url('/image/img/pull_down.png');
      background-size:12px 12px;
      background-repeat: no-repeat;
      background-position: right 14px center;
      padding:0 42px 0 8px;
      display:flex;
      align-items: center;
    }
    .display-data:hover{
      background-image: url('/image/img/pull_down_on.png');
      border: 1px solid rgba(30, 30, 46, 0.5);
    }
    .select-option-data{
      margin:0;
      position:absolute;
      width:100%;
      left:0;
      top:120%;
      background: #FFFFFF ;
      box-shadow: 0px 3px 6px #1E1E2E33;
      border-radius: 6px;
      box-sizing: border-box;
      max-height:322px;
      overflow-y:auto;
      padding:0;
      z-index:99999;
      border-right:2px solid transparent;
      display:none;
    }
    .select-option-data.top{
      top:unset;
      bottom:120%;
    }
    li{
      width:100%;
      list-style: none;
      display:flex;
      align-items: center;
      padding:0 8px;
      box-sizing: border-box;
      cursor:pointer;
    }
    li .icon{
      background:url('/image/img/ico_select.png');
      margin-left:16px;
      width:14px;
      height:14px;
      visibility:hidden;
    }
    li:hover .language,li.active .language {
      color: rgba(139, 61, 255, 1);
    }
    li:hover .avatar-name,li.active .avatar-name{
      color: rgba(139, 61, 255, 0.5);
    }
    li.active .icon{
      visibility:visible;
    }

    .select-option-data::-webkit-scrollbar{
      width:8px;
    }
    .select-option-data::-webkit-scrollbar-thumb {
        width:8px;
        border-radius:20px;
        background: rgba(140, 140, 151, 0.2);
      }
      .select-option-data::-webkit-scrollbar-thumb:hover {
        background: rgba(140, 140, 151, 0.5);
      }
      @-moz-document url-prefix() {
  * {
    scrollbar-width: thin;
    scrollbar-color: #e8e8ea transparent;
  }
}
    `]);customElements.define("select-voice",ko);class So extends du{constructor(){super(),this.currentValue="1.0",this.containerWidth=""}render(){return pu`
      <div class="speed-setting" style="${this.containerWidth?`width:${this.containerWidth}px`:""}">
        <span class="speed-text">Speed</span>
        <span class="speed-btn reduce ${Number(this.currentValue)===.5?"off":""}" @click="${this.reduceSpeed}"></span>
        <span class="speed-text">${Number(this.currentValue).toFixed(1)}x</span>
        <span class="speed-btn add ${Number(this.currentValue)===1.5?"off":""}" @click="${this.addSpeed}"></span>
      </div>
    `}reduceSpeed(){this.currentValue=((Number(this.currentValue)*10-1)/10).toFixed(1),this.currentValue=this.currentValue<.5?.5:this.currentValue,this.dispatchEvent(new CustomEvent("speedchange",{detail:{value:this.currentValue}}))}addSpeed(){this.currentValue=((Number(this.currentValue)*10+1)/10).toFixed(1),this.currentValue=this.currentValue>1.5?1.5:this.currentValue,this.dispatchEvent(new CustomEvent("speedchange",{detail:{value:this.currentValue}}))}getSpeed(){return Number(this.currentValue)}setSpeed(t){this.currentValue=t}}cr(So,"properties",{currentValue:{type:Number,attribute:!0},containerWidth:""}),cr(So,"styles",[fu`
      .speed-setting{
        display:flex;
        align-items: center;
        width:310px;
        height:44px;
        padding:0 10px 0 16px;
        background: rgba(255, 255, 255, 1);
        border: 1px solid rgba(30, 30, 46, 0.2);
        border-radius: 6px;
        box-sizing: border-box;
      }
      .speed-text{
        font: normal normal normal 14px/19px Roboto;
        color: rgba(30, 30, 46, 1);
      }
      .speed-btn{
        display:block;
        box-sizing: border-box;
        width:24px;
        height:24px;
        cursor:pointer;
      }
      .reduce{
        margin-left: auto;
        margin-right: 12px;
        background:url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8ZyBpZD0iR3JvdXBfMTQ5MSIgZGF0YS1uYW1lPSJHcm91cCAxNDkxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNzE2LjI5MiAtNjY4KSIgb3BhY2l0eT0iMC41Ij4KICAgIDxnIGlkPSJFbGxpcHNlXzI2NiIgZGF0YS1uYW1lPSJFbGxpcHNlIDI2NiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNzE2LjI5MiA2NjgpIiBmaWxsPSJub25lIiBzdHJva2U9IiMxZTFlMmUiIHN0cm9rZS13aWR0aD0iMS4zIj4KICAgICAgPGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTIiIHN0cm9rZT0ibm9uZSIvPgogICAgICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMS4zNSIgZmlsbD0ibm9uZSIvPgogICAgPC9nPgogICAgPHJlY3QgaWQ9IlJlY3RhbmdsZV8xNDA2IiBkYXRhLW5hbWU9IlJlY3RhbmdsZSAxNDA2IiB3aWR0aD0iMTIiIGhlaWdodD0iMiIgcng9IjEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDcyMi4yOTIgNjc5KSIgZmlsbD0iIzFlMWUyZSIvPgogIDwvZz4KPC9zdmc+Cg==')
      }
      .reduce:not(.off):hover{
        background:url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8ZyBpZD0iR3JvdXBfMTQ5MSIgZGF0YS1uYW1lPSJHcm91cCAxNDkxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNzE2LjI5MiAtNjY4KSIgb3BhY2l0eT0iMC44Ij4KICAgIDxnIGlkPSJFbGxpcHNlXzI2NiIgZGF0YS1uYW1lPSJFbGxpcHNlIDI2NiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNzE2LjI5MiA2NjgpIiBmaWxsPSJub25lIiBzdHJva2U9IiMxZTFlMmUiIHN0cm9rZS13aWR0aD0iMS4zIj4KICAgICAgPGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTIiIHN0cm9rZT0ibm9uZSIvPgogICAgICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMS4zNSIgZmlsbD0ibm9uZSIvPgogICAgPC9nPgogICAgPHJlY3QgaWQ9IlJlY3RhbmdsZV8xNDA2IiBkYXRhLW5hbWU9IlJlY3RhbmdsZSAxNDA2IiB3aWR0aD0iMTIiIGhlaWdodD0iMiIgcng9IjEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDcyMi4yOTIgNjc5KSIgZmlsbD0iIzFlMWUyZSIvPgogIDwvZz4KPC9zdmc+Cg==')
      }
      .add{
        margin-left: 12px;
        background:url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8ZyBpZD0iR3JvdXBfMTQ5MiIgZGF0YS1uYW1lPSJHcm91cCAxNDkyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNzE2LjI5MiAtNjY4KSIgb3BhY2l0eT0iMC41Ij4KICAgIDxnIGlkPSJFbGxpcHNlXzI2NiIgZGF0YS1uYW1lPSJFbGxpcHNlIDI2NiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNzE2LjI5MiA2NjgpIiBmaWxsPSJub25lIiBzdHJva2U9IiMxZTFlMmUiIHN0cm9rZS13aWR0aD0iMS4zIj4KICAgICAgPGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTIiIHN0cm9rZT0ibm9uZSIvPgogICAgICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMS4zNSIgZmlsbD0ibm9uZSIvPgogICAgPC9nPgogICAgPHBhdGggaWQ9IlVuaW9uXzIiIGRhdGEtbmFtZT0iVW5pb24gMiIgZD0iTTEzNDIwLjI5MywxNzI5MXYtNGgtNGExLDEsMCwwLDEsMC0yaDR2LTRhMSwxLDAsMCwxLDIsMHY0aDRhMSwxLDAsMSwxLDAsMmgtNHY0YTEsMSwwLDEsMS0yLDBaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTI2OTMgLTE2NjA2KSIgZmlsbD0iIzFlMWUyZSIvPgogIDwvZz4KPC9zdmc+Cg==')
      }
      .add:not(.off):hover{
        background:url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8ZyBpZD0iR3JvdXBfMTQ5MiIgZGF0YS1uYW1lPSJHcm91cCAxNDkyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNzE2LjI5MiAtNjY4KSIgb3BhY2l0eT0iMC44Ij4KICAgIDxnIGlkPSJFbGxpcHNlXzI2NiIgZGF0YS1uYW1lPSJFbGxpcHNlIDI2NiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNzE2LjI5MiA2NjgpIiBmaWxsPSJub25lIiBzdHJva2U9IiMxZTFlMmUiIHN0cm9rZS13aWR0aD0iMS4zIj4KICAgICAgPGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMTIiIHN0cm9rZT0ibm9uZSIvPgogICAgICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMS4zNSIgZmlsbD0ibm9uZSIvPgogICAgPC9nPgogICAgPHBhdGggaWQ9IlVuaW9uXzIiIGRhdGEtbmFtZT0iVW5pb24gMiIgZD0iTTEzNDIwLjI5MywxNzI5MXYtNGgtNGExLDEsMCwwLDEsMC0yaDR2LTRhMSwxLDAsMCwxLDIsMHY0aDRhMSwxLDAsMSwxLDAsMmgtNHY0YTEsMSwwLDEsMS0yLDBaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTI2OTMgLTE2NjA2KSIgZmlsbD0iIzFlMWUyZSIvPgogIDwvZz4KPC9zdmc+Cg==')
      }
      .off{
        opacity:0.3;
      }
    `]);customElements.define("speed-setting",So);/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var vu=function(r,t){return(vu=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var a in n)n.hasOwnProperty(a)&&(e[a]=n[a])})(r,t)};function It(r,t){function e(){this.constructor=r}vu(r,t),r.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}function Y(r,t,e,n){return new(e||(e=Promise))(function(a,o){function i(c){try{u(n.next(c))}catch(l){o(l)}}function s(c){try{u(n.throw(c))}catch(l){o(l)}}function u(c){c.done?a(c.value):new e(function(l){l(c.value)}).then(i,s)}u((n=n.apply(r,t||[])).next())})}function $(r,t){var e,n,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function s(u){return function(c){return function(l){if(e)throw new TypeError("Generator is already executing.");for(;i;)try{if(e=1,n&&(a=2&l[0]?n.return:l[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,l[1])).done)return a;switch(n=0,a&&(l=[2&l[0],a.value]),l[0]){case 0:case 1:a=l;break;case 4:return i.label++,{value:l[1],done:!1};case 5:i.label++,n=l[1],l=[0];continue;case 7:l=i.ops.pop(),i.trys.pop();continue;default:if(!(a=(a=i.trys).length>0&&a[a.length-1])&&(l[0]===6||l[0]===2)){i=0;continue}if(l[0]===3&&(!a||l[1]>a[0]&&l[1]<a[3])){i.label=l[1];break}if(l[0]===6&&i.label<a[1]){i.label=a[1],a=l;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(l);break}a[2]&&i.ops.pop(),i.trys.pop();continue}l=t.call(r,i)}catch(h){l=[6,h],n=0}finally{e=a=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([u,c])}}}var ah=function(){function r(t){this.global=t,this.flags={},this.flagRegistry={},this.urlFlags={},this.populateURLFlags()}return r.prototype.setPlatform=function(t,e){this.platform!=null,this.platformName=t,this.platform=e},r.prototype.registerFlag=function(t,e,n){if(this.flagRegistry[t]={evaluationFn:e,setHook:n},this.urlFlags[t]!=null){var a=this.urlFlags[t];this.set(t,a)}},r.prototype.get=function(t){return t in this.flags?this.flags[t]:(this.flags[t]=this.evaluateFlag(t),this.flags[t])},r.prototype.getNumber=function(t){return this.get(t)},r.prototype.getBool=function(t){return this.get(t)},r.prototype.getFlags=function(){return this.flags},Object.defineProperty(r.prototype,"features",{get:function(){return this.flags},enumerable:!0,configurable:!0}),r.prototype.set=function(t,e){if(this.flagRegistry[t]==null)throw new Error("Cannot set flag "+t+" as it has not been registered.");this.flags[t]=e,this.flagRegistry[t].setHook!=null&&this.flagRegistry[t].setHook(e)},r.prototype.evaluateFlag=function(t){if(this.flagRegistry[t]==null)throw new Error("Cannot evaluate flag '"+t+"': no evaluation function found.");return this.flagRegistry[t].evaluationFn()},r.prototype.setFlags=function(t){this.flags=Object.assign({},t)},r.prototype.reset=function(){this.flags={},this.urlFlags={},this.populateURLFlags()},r.prototype.populateURLFlags=function(){var t=this;if(this.global!==void 0&&this.global.location!==void 0&&this.global.location.search!==void 0){var e,n,a=(e=this.global.location.search,n={},e.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g,function(o){for(var i=[],s=1;s<arguments.length;s++)i[s-1]=arguments[s];return oh(n,i[0],i[1]),i.join("=")}),n);"tfjsflags"in a&&a.tfjsflags.split(",").forEach(function(o){var i=o.split(":"),s=i[0],u=i[1];t.urlFlags[s]=function(c,l){if((l=l.toLowerCase())==="true"||l==="false")return l==="true";if(""+ +l===l)return+l;throw new Error("Could not parse value flag value "+l+" for flag "+c+".")}(s,u)})}},r}();function oh(r,t,e){r[decodeURIComponent(t)]=decodeURIComponent(e||"")}function O(){return gu}var gu=null,ra=new Map,Ro=new Map;function mu(r,t){var e=bu(r,t);return ra.get(e)}function ih(r){return Ro.get(r)}function ls(r){for(var t=ra.entries(),e=[];;){var n=t.next(),a=n.done,o=n.value;if(a)break;var i=o[0],s=o[1];i.split("_")[0]===r&&e.push(s)}return e}function yu(r){var t=r.kernelName,e=r.backendName,n=bu(t,e);if(ra.has(n))throw new Error("The kernel '"+t+"' for backend '"+e+"' is already registered");ra.set(n,r)}function sh(r){var t=r.kernelName;Ro.has(t),Ro.set(t,r)}function bu(r,t){return t+"_"+r}function Ao(r,t,e){return Math.max(r,Math.min(t,e))}function xu(r){return r%2==0?r:r+1}function uh(r){for(var t=0,e=0;e<r.length;e++)t+=r[e];return t}function E(r,t){if(!r)throw new Error(typeof t=="string"?t:t())}function xe(r,t,e){e===void 0&&(e=""),E(Ve(r,t),function(){return e+" Shapes "+r+" and "+t+" must match"})}function sr(r){E(r!=null,function(){return"The input to the tensor constructor must be a non-null value."})}function nr(r,t,e){if(t===void 0&&(t=[]),e===void 0&&(e=!1),t==null&&(t=[]),Array.isArray(r)||Lt(r)&&!e)for(var n=0;n<r.length;++n)nr(r[n],t,e);else t.push(r);return t}function Z(r){if(r.length===0)return 1;for(var t=r[0],e=1;e<r.length;e++)t*=r[e];return t}function Ve(r,t){if(r===t)return!0;if(r==null||t==null||r.length!==t.length)return!1;for(var e=0;e<r.length;e++)if(r[e]!==t[e])return!1;return!0}function Te(r){return r%1==0}function ch(r){if(Math.tanh!=null)return Math.tanh(r);if(r===1/0)return 1;if(r===-1/0)return-1;var t=Math.exp(2*r);return(t-1)/(t+1)}function Do(r){var t=Math.ceil(Math.sqrt(r));return[t,Math.ceil(r/t)]}function pr(r,t){return t<=r.length?r:r+" ".repeat(t-r.length)}function hs(r,t,e){return t===void 0&&(t=function(n){return 0}),new Promise(function(n,a){var o=0,i=function(){if(r())n();else{o++;var s=t(o);e!=null&&o>=e?a():setTimeout(i,s)}};i()})}function lh(r,t){for(var e=1,n=-1,a=0;a<r.length;++a)if(r[a]>=0)e*=r[a];else if(r[a]===-1){if(n!==-1)throw Error("Shapes can only have 1 implicit size. Found -1 at dim "+n+" and dim "+a);n=a}else if(r[a]<0)throw Error("Shapes can not be < 0. Found "+r[a]+" at dim "+a);if(n===-1){if(t>0&&t!==e)throw Error("Size("+t+") must match the product of shape "+r);return r}if(e===0)throw Error("Cannot infer the missing size in ["+r+"] when there are 0 elements");if(t%e!=0)throw Error("The implicit shape can't be a fractional number. Got "+t+" / "+e);var o=r.slice();return o[n]=t/e,o}function We(r,t){var e=t.length;return E((r=r==null?t.map(function(n,a){return a}):[].concat(r)).every(function(n){return n>=-e&&n<e}),function(){return"All values in axis param must be in range [-"+e+", "+e+") but got axis "+r}),E(r.every(function(n){return Te(n)}),function(){return"All values in axis param must be integers but got axis "+r}),r.map(function(n){return n<0?e+n:n})}function In(r,t){for(var e=[],n=[],a=t!=null&&Array.isArray(t)&&t.length===0,o=t==null||a?null:We(t,r).sort(),i=0,s=0;s<r.length;++s){if(o!=null){if(o[i]===s&&r[s]!==1)throw new Error("Can't squeeze axis "+s+" since its dim '"+r[s]+"' is not 1");(o[i]==null||o[i]>s)&&r[s]===1&&(e.push(r[s]),n.push(s)),o[i]<=s&&i++}r[s]!==1&&(e.push(r[s]),n.push(s))}return{newShape:e,keptDims:n}}function br(r,t){var e=null;if(r==null||r==="float32")e=new Float32Array(t);else if(r==="int32")e=new Int32Array(t);else{if(r!=="bool")throw new Error("Unknown data type "+r);e=new Uint8Array(t)}return e}function aa(r,t){var e=null;if(r==null||r==="float32")e=new Float32Array(t);else if(r==="int32")e=new Int32Array(t);else if(r==="bool")e=new Uint8Array(t);else{if(r!=="string")throw new Error("Unknown data type "+r);e=new Array(t)}return e}function hh(r,t){for(var e=0;e<r.length;e++){var n=r[e];if(isNaN(n)||!isFinite(n))throw Error("A tensor of type "+t+" being uploaded contains "+n+".")}}function dh(r){return r==="bool"||r==="complex64"||r==="float32"||r==="int32"||r==="string"}function fh(r,t){return t!=="complex64"&&(t!=="float32"||r==="complex64")&&(t!=="int32"||r==="float32"||r==="complex64")&&(t!=="bool"||r!=="bool")}function Lt(r){return r instanceof Float32Array||r instanceof Int32Array||r instanceof Uint8Array}function wu(r){if(r==="float32"||r==="int32")return 4;if(r==="complex64")return 8;if(r==="bool")return 1;throw new Error("Unknown dtype "+r)}function ph(r){if(r==null)return 0;var t=0;return r.forEach(function(e){return t+=e.length}),t}function ni(r){return typeof r=="string"||r instanceof String}function vh(r){return typeof r=="boolean"}function gh(r){return typeof r=="number"}function Tr(r){return Array.isArray(r)?Tr(r[0]):r instanceof Float32Array?"float32":r instanceof Int32Array||r instanceof Uint8Array?"int32":gh(r)?"float32":ni(r)?"string":vh(r)?"bool":"float32"}function To(r){return!!(r&&r.constructor&&r.call&&r.apply)}function No(r,t){for(var e=t;e<r;++e)if(r%e==0)return e;return r}function Wt(r){var t=r.length;if(t<2)return[];var e=new Array(t-1);e[t-2]=r[t-1];for(var n=t-3;n>=0;--n)e[n]=e[n+1]*r[n+1];return e}function Cu(r,t,e){if(t==="string")throw new Error("Cannot convert a string[] to a TypedArray");if(Array.isArray(r)&&(r=nr(r)),e&&hh(r,t),function(o,i){return o instanceof Float32Array&&i==="float32"||o instanceof Int32Array&&i==="int32"||o instanceof Uint8Array&&i==="bool"}(r,t))return r;if(t==null||t==="float32"||t==="complex64")return new Float32Array(r);if(t==="int32")return new Int32Array(r);if(t==="bool"){for(var n=new Uint8Array(r.length),a=0;a<n.length;++a)Math.round(r[a])!==0&&(n[a]=1);return n}throw new Error("Unknown data type "+t)}function ds(r,t){if(r.length===0)return t[0];var e=r.reduce(function(n,a){return n*a});if(e===0)return[];if(e!==t.length)throw new Error("["+r+"] does not match the input size.");return function n(a,o,i){var s=new Array;if(o.length===1)for(var u=o[0],c=0;c<u;c++)s[c]=i[a+c];else{u=o[0];var l=o.slice(1),h=l.reduce(function(d,f){return d*f});for(c=0;c<u;c++)s[c]=n(a+c*h,l,i)}return s}(0,r,t)}function _u(r,t){for(var e=Nr(r,t),n=0;n<e.length;n++)e[n]=1;return e}function Nr(r,t){if(t==null||t==="float32"||t==="complex64")return new Float32Array(r);if(t==="int32")return new Int32Array(r);if(t==="bool")return new Uint8Array(r);throw new Error("Unknown data type "+t)}function Ft(){return O().platform.now()}function Eu(r){r.forEach(function(t){E(Number.isInteger(t)&&t>=0,function(){return"Tensor must have a shape comprised of positive integers but got shape ["+r+"]."})})}function mh(r,t){return t===void 0&&(t="utf-8"),t=t||"utf-8",O().platform.encode(r,t)}function oa(r,t){return t===void 0&&(t="utf-8"),t=t||"utf-8",O().platform.decode(r,t)}function fs(r,t,e){if(t===0)return 0;if(t===1)return r[0];for(var n=r[r.length-1],a=0;a<r.length-1;++a)n+=e[a]*r[a];return n}function yh(r,t,e){if(t===0)return[];if(t===1)return[r];for(var n=new Array(t),a=0;a<n.length-1;++a)n[a]=Math.floor(r/e[a]),r-=n[a]*e[a];return n[n.length-1]=r,n}var bh=function(){function r(t,e){this.backendTimer=t,this.logger=e,e==null&&(this.logger=new xh)}return r.prototype.profileKernel=function(t,e,n){var a,o=this,i=this.backendTimer.time(function(){a=n()});return a.forEach(function(s){s.data().then(function(u){(function(c,l,h){if(l!=="float32")return!1;for(var d=0;d<c.length;d++){var f=c[d];if(isNaN(f)||!isFinite(f))return!0}})(u,s.dtype,t),i.then(function(c){var l="";c.getExtraProfileInfo!=null&&(l=c.getExtraProfileInfo()),o.logger.logKernelProfile(t,s,u,c.kernelMs,e,l)})})}),a},r}(),xh=function(){function r(){}return r.prototype.logKernelProfile=function(t,e,n,a,o,i){var s=typeof a=="number"?pr(a+"ms",9):a.error,u=pr(t,25),c=e.rank,l=e.size,h=pr(e.shape.toString(),14),d="";for(var f in o){var p=o[f].shape||e.shape,g=p.length;d+=f+": "+g+"D "+(g>0?p:"")+" "}},r}(),ps=20,lr=3,Ja=7;function wh(r,t,e,n){var a=Wt(t),o=function(c,l,h,d){var f=Z(l),p=d[d.length-1],g=new Array(p).fill(0),v=l.length,m=h==="complex64"?dr(c):c;if(v>1)for(var b=0;b<f/p;b++)for(var x=b*p,y=0;y<p;y++)g[y]=Math.max(g[y],hr(m[x+y],0,h).length);return g}(r,t,e,a),i=t.length,s=function c(l,h,d,f,p,g){g===void 0&&(g=!0);var v=d==="complex64"?2:1,m=h[0],b=h.length;if(b===0)return d==="complex64"?[hr(dr(l)[0],0,d)]:d==="bool"?[Iu(l[0])]:[l[0].toString()];if(b===1){if(m>ps){var x=lr*v,y=Array.from(l.slice(0,x)),w=Array.from(l.slice((m-lr)*v,m*v));return d==="complex64"&&(y=dr(y),w=dr(w)),["["+y.map(function(L,V){return hr(L,p[V],d)}).join(", ")+", ..., "+w.map(function(L,V){return hr(L,p[m-lr+V],d)}).join(", ")+"]"]}return["["+(d==="complex64"?dr(l):Array.from(l)).map(function(L,V){return hr(L,p[V],d)}).join(", ")+"]"]}var C=h.slice(1),R=f.slice(1),S=f[0]*v,I=[];if(m>ps){for(var k=0;k<lr;k++){var F=(T=k*S)+S;I.push.apply(I,c(l.slice(T,F),C,d,R,p,!1))}for(I.push("..."),k=m-lr;k<m;k++)F=(T=k*S)+S,I.push.apply(I,c(l.slice(T,F),C,d,R,p,k===m-1))}else for(k=0;k<m;k++){var T;F=(T=k*S)+S,I.push.apply(I,c(l.slice(T,F),C,d,R,p,k===m-1))}var W=b===2?",":"";for(I[0]="["+I[0]+W,k=1;k<I.length-1;k++)I[k]=" "+I[k]+W;var B=`,
`;for(k=2;k<b;k++)B+=`
`;return I[I.length-1]=" "+I[I.length-1]+"]"+(g?"":B),I}(r,t,e,a,o),u=["Tensor"];return n&&(u.push("  dtype: "+e),u.push("  rank: "+i),u.push("  shape: ["+t+"]"),u.push("  values:")),u.push(s.map(function(c){return"    "+c}).join(`
`)),u.join(`
`)}function hr(r,t,e){return pr(Array.isArray(r)?parseFloat(r[0].toFixed(Ja))+" + "+parseFloat(r[1].toFixed(Ja))+"j":ni(r)?"'"+r+"'":e==="bool"?Iu(r):parseFloat(r.toFixed(Ja)).toString(),t)}function Iu(r){return r===0?"false":"true"}function dr(r){for(var t=[],e=0;e<r.length;e+=2)t.push([r[e],r[e+1]]);return t}var xr=function(){function r(t,e,n){var a=this;if(this.dtype=e,this.shape=t.slice(),this.size=Z(t),n!=null){var o=n.length;E(o===this.size,function(){return"Length of values '"+o+"' does not match the size inferred by the shape '"+a.size+"'."})}if(e==="complex64")throw new Error("complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).");this.values=n||aa(e,this.size),this.strides=Wt(t)}return r.prototype.set=function(t){for(var e=this,n=[],a=1;a<arguments.length;a++)n[a-1]=arguments[a];n.length===0&&(n=[0]),E(n.length===this.rank,function(){return"The number of provided coordinates ("+n.length+") must match the rank ("+e.rank+")"});var o=this.locToIndex(n);this.values[o]=t},r.prototype.get=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];t.length===0&&(t=[0]);for(var n=0,a=0,o=t;a<o.length;a++){var i=o[a];if(i<0||i>=this.shape[n]){var s="Requested out of range element at "+t+".   Buffer shape="+this.shape;throw new Error(s)}n++}for(var u=t[t.length-1],c=0;c<t.length-1;++c)u+=this.strides[c]*t[c];return this.values[u]},r.prototype.locToIndex=function(t){if(this.rank===0)return 0;if(this.rank===1)return t[0];for(var e=t[t.length-1],n=0;n<t.length-1;++n)e+=this.strides[n]*t[n];return e},r.prototype.indexToLoc=function(t){if(this.rank===0)return[];if(this.rank===1)return[t];for(var e=new Array(this.shape.length),n=0;n<e.length-1;++n)e[n]=Math.floor(t/this.strides[n]),t-=e[n]*this.strides[n];return e[e.length-1]=t,e},Object.defineProperty(r.prototype,"rank",{get:function(){return this.shape.length},enumerable:!0,configurable:!0}),r.prototype.toTensor=function(){return Pt().makeTensor(this.values,this.shape,this.dtype)},r}(),Pt=null,M=null,ku=null,ke=function(){function r(t,e,n,a){this.kept=!1,this.isDisposedInternal=!1,this.shape=t.slice(),this.dtype=e||"float32",this.size=Z(t),this.strides=Wt(t),this.dataId=n,this.id=a,this.rankType=this.rank<5?this.rank.toString():"higher"}return r.prototype.flatten=function(){return this.throwIfDisposed(),this.as1D()},r.prototype.asScalar=function(){return this.throwIfDisposed(),E(this.size===1,function(){return"The array must have only 1 element."}),this.reshape([])},r.prototype.as1D=function(){return this.throwIfDisposed(),this.reshape([this.size])},r.prototype.as2D=function(t,e){return this.throwIfDisposed(),this.reshape([t,e])},r.prototype.as3D=function(t,e,n){return this.throwIfDisposed(),this.reshape([t,e,n])},r.prototype.as4D=function(t,e,n,a){return this.throwIfDisposed(),this.reshape([t,e,n,a])},r.prototype.as5D=function(t,e,n,a,o){return this.throwIfDisposed(),this.reshape([t,e,n,a,o])},r.prototype.asType=function(t){return this.throwIfDisposed(),M.cast(this,t)},Object.defineProperty(r.prototype,"rank",{get:function(){return this.shape.length},enumerable:!0,configurable:!0}),r.prototype.buffer=function(){return Y(this,void 0,void 0,function(){var t;return $(this,function(e){switch(e.label){case 0:return[4,this.data()];case 1:return t=e.sent(),[2,M.buffer(this.shape,this.dtype,t)]}})})},r.prototype.bufferSync=function(){return M.buffer(this.shape,this.dtype,this.dataSync())},r.prototype.array=function(){return Y(this,void 0,void 0,function(){var t;return $(this,function(e){switch(e.label){case 0:return[4,this.data()];case 1:return t=e.sent(),[2,ds(this.shape,t)]}})})},r.prototype.arraySync=function(){return ds(this.shape,this.dataSync())},r.prototype.data=function(){return Y(this,void 0,void 0,function(){var t,e;return $(this,function(n){switch(n.label){case 0:return this.throwIfDisposed(),t=Pt().read(this.dataId),this.dtype!=="string"?[3,2]:[4,t];case 1:e=n.sent();try{return[2,e.map(function(a){return oa(a)})]}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}n.label=2;case 2:return[2,t]}})})},r.prototype.dataSync=function(){this.throwIfDisposed();var t=Pt().readSync(this.dataId);if(this.dtype==="string")try{return t.map(function(e){return oa(e)})}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}return t},r.prototype.bytes=function(){return Y(this,void 0,void 0,function(){var t;return $(this,function(e){switch(e.label){case 0:return this.throwIfDisposed(),[4,Pt().read(this.dataId)];case 1:return t=e.sent(),this.dtype==="string"?[2,t]:[2,new Uint8Array(t.buffer)]}})})},r.prototype.dispose=function(){this.isDisposed||(Pt().disposeTensor(this),this.isDisposedInternal=!0)},Object.defineProperty(r.prototype,"isDisposed",{get:function(){return this.isDisposedInternal},enumerable:!0,configurable:!0}),r.prototype.throwIfDisposed=function(){if(this.isDisposed)throw new Error("Tensor is disposed.")},r.prototype.toFloat=function(){return this.asType("float32")},r.prototype.toInt=function(){return this.asType("int32")},r.prototype.toBool=function(){return this.asType("bool")},r.prototype.print=function(t){return t===void 0&&(t=!1),M.print(this,t)},r.prototype.reshape=function(t){return this.throwIfDisposed(),M.reshape(this,t)},r.prototype.reshapeAs=function(t){return this.throwIfDisposed(),this.reshape(t.shape)},r.prototype.expandDims=function(t){return t===void 0&&(t=0),M.expandDims(this,t)},r.prototype.cumsum=function(t,e,n){return t===void 0&&(t=0),e===void 0&&(e=!1),n===void 0&&(n=!1),M.cumsum(this,t,e,n)},r.prototype.squeeze=function(t){return this.throwIfDisposed(),M.squeeze(this,t)},r.prototype.clone=function(){return this.throwIfDisposed(),M.clone(this)},r.prototype.oneHot=function(t,e,n){return this.throwIfDisposed(),M.oneHot(this,t,e,n)},r.prototype.toString=function(t){return t===void 0&&(t=!1),wh(this.dataSync(),this.shape,this.dtype,t)},r.prototype.tile=function(t){return this.throwIfDisposed(),M.tile(this,t)},r.prototype.gather=function(t,e){return e===void 0&&(e=0),this.throwIfDisposed(),M.gather(this,t,e)},r.prototype.matMul=function(t,e,n){return e===void 0&&(e=!1),n===void 0&&(n=!1),this.throwIfDisposed(),M.matMul(this,t,e,n)},r.prototype.dot=function(t){return this.throwIfDisposed(),M.dot(this,t)},r.prototype.norm=function(t,e,n){return t===void 0&&(t="euclidean"),e===void 0&&(e=null),n===void 0&&(n=!1),this.throwIfDisposed(),M.norm(this,t,e,n)},r.prototype.slice=function(t,e){return this.throwIfDisposed(),M.slice(this,t,e)},r.prototype.reverse=function(t){return this.throwIfDisposed(),M.reverse(this,t)},r.prototype.concat=function(t,e){return e===void 0&&(e=0),this.throwIfDisposed(),t instanceof r&&(t=[t]),M.concat([this].concat(t),e)},r.prototype.split=function(t,e){return e===void 0&&(e=0),this.throwIfDisposed(),M.split(this,t,e)},r.prototype.stack=function(t,e){return e===void 0&&(e=0),M.stack([this,t],e)},r.prototype.unstack=function(t){return t===void 0&&(t=0),M.unstack(this,t)},r.prototype.pad=function(t,e){return e===void 0&&(e=0),M.pad(this,t,e)},r.prototype.batchNormalization=function(t,e,n,a,o){return n===void 0&&(n=.001),ku("tf.batchNormalization() is going away. Use tf.batchNorm() instead, and note the positional argument change of scale, offset, and varianceEpsilon"),this.batchNorm(t,e,o,a,n)},r.prototype.batchNorm=function(t,e,n,a,o){return o===void 0&&(o=.001),this.throwIfDisposed(),M.batchNorm(this,t,e,n,a,o)},r.prototype.all=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),M.all(this,t,e)},r.prototype.any=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),M.any(this,t,e)},r.prototype.logSumExp=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),M.logSumExp(this,t,e)},r.prototype.sum=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),M.sum(this,t,e)},r.prototype.prod=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),M.prod(this,t,e)},r.prototype.mean=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),M.mean(this,t,e)},r.prototype.min=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),M.min(this,t,e)},r.prototype.max=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),M.max(this,t,e)},r.prototype.argMin=function(t){return t===void 0&&(t=null),this.throwIfDisposed(),M.argMin(this,t)},r.prototype.argMax=function(t){return t===void 0&&(t=null),this.throwIfDisposed(),M.argMax(this,t)},r.prototype.cast=function(t){return this.throwIfDisposed(),M.cast(this,t)},r.prototype.add=function(t){return this.throwIfDisposed(),M.add(this,t)},r.prototype.addStrict=function(t){return this.throwIfDisposed(),M.addStrict(this,t)},r.prototype.atan2=function(t){return this.throwIfDisposed(),M.atan2(this,t)},r.prototype.sub=function(t){return this.throwIfDisposed(),M.sub(this,t)},r.prototype.subStrict=function(t){return this.throwIfDisposed(),M.subStrict(this,t)},r.prototype.pow=function(t){return this.throwIfDisposed(),M.pow(this,t)},r.prototype.powStrict=function(t){return this.throwIfDisposed(),M.powStrict(this,t)},r.prototype.mul=function(t){return this.throwIfDisposed(),M.mul(this,t)},r.prototype.mulStrict=function(t){return this.throwIfDisposed(),M.mulStrict(this,t)},r.prototype.div=function(t){return this.throwIfDisposed(),M.div(this,t)},r.prototype.divNoNan=function(t){return this.throwIfDisposed(),M.divNoNan(this,t)},r.prototype.floorDiv=function(t){return this.throwIfDisposed(),M.floorDiv(this,t)},r.prototype.divStrict=function(t){return this.throwIfDisposed(),M.divStrict(this,t)},r.prototype.minimum=function(t){return this.throwIfDisposed(),M.minimum(this,t)},r.prototype.minimumStrict=function(t){return this.throwIfDisposed(),M.minimumStrict(this,t)},r.prototype.maximum=function(t){return this.throwIfDisposed(),M.maximum(this,t)},r.prototype.maximumStrict=function(t){return this.throwIfDisposed(),M.maximumStrict(this,t)},r.prototype.mod=function(t){return this.throwIfDisposed(),M.mod(this,t)},r.prototype.modStrict=function(t){return this.throwIfDisposed(),M.modStrict(this,t)},r.prototype.squaredDifferenceStrict=function(t){return this.throwIfDisposed(),M.squaredDifferenceStrict(this,t)},r.prototype.transpose=function(t){return this.throwIfDisposed(),M.transpose(this,t)},r.prototype.notEqual=function(t){return this.throwIfDisposed(),M.notEqual(this,t)},r.prototype.notEqualStrict=function(t){return this.throwIfDisposed(),M.notEqualStrict(this,t)},r.prototype.less=function(t){return this.throwIfDisposed(),M.less(this,t)},r.prototype.lessStrict=function(t){return this.throwIfDisposed(),M.lessStrict(this,t)},r.prototype.equal=function(t){return this.throwIfDisposed(),M.equal(this,t)},r.prototype.equalStrict=function(t){return this.throwIfDisposed(),M.equalStrict(this,t)},r.prototype.lessEqual=function(t){return this.throwIfDisposed(),M.lessEqual(this,t)},r.prototype.lessEqualStrict=function(t){return this.throwIfDisposed(),M.lessEqualStrict(this,t)},r.prototype.greater=function(t){return this.throwIfDisposed(),M.greater(this,t)},r.prototype.greaterStrict=function(t){return this.throwIfDisposed(),M.greaterStrict(this,t)},r.prototype.greaterEqual=function(t){return this.throwIfDisposed(),M.greaterEqual(this,t)},r.prototype.greaterEqualStrict=function(t){return this.throwIfDisposed(),M.greaterEqualStrict(this,t)},r.prototype.logicalAnd=function(t){return this.throwIfDisposed(),M.logicalAnd(this,t)},r.prototype.logicalOr=function(t){return this.throwIfDisposed(),M.logicalOr(this,t)},r.prototype.logicalNot=function(){return this.throwIfDisposed(),M.logicalNot(this)},r.prototype.logicalXor=function(t){return this.throwIfDisposed(),M.logicalXor(this,t)},r.prototype.where=function(t,e){return this.throwIfDisposed(),M.where(t,this,e)},r.prototype.neg=function(){return this.throwIfDisposed(),M.neg(this)},r.prototype.ceil=function(){return this.throwIfDisposed(),M.ceil(this)},r.prototype.floor=function(){return this.throwIfDisposed(),M.floor(this)},r.prototype.sign=function(){return this.throwIfDisposed(),M.sign(this)},r.prototype.isNaN=function(){return this.throwIfDisposed(),M.isNaN(this)},r.prototype.isInf=function(){return this.throwIfDisposed(),M.isInf(this)},r.prototype.isFinite=function(){return this.throwIfDisposed(),M.isFinite(this)},r.prototype.exp=function(){return this.throwIfDisposed(),M.exp(this)},r.prototype.expm1=function(){return this.throwIfDisposed(),M.expm1(this)},r.prototype.log=function(){return this.throwIfDisposed(),M.log(this)},r.prototype.log1p=function(){return this.throwIfDisposed(),M.log1p(this)},r.prototype.sqrt=function(){return this.throwIfDisposed(),M.sqrt(this)},r.prototype.rsqrt=function(){return this.throwIfDisposed(),M.rsqrt(this)},r.prototype.square=function(){return this.throwIfDisposed(),M.square(this)},r.prototype.reciprocal=function(){return this.throwIfDisposed(),M.reciprocal(this)},r.prototype.abs=function(){return this.throwIfDisposed(),M.abs(this)},r.prototype.clipByValue=function(t,e){return this.throwIfDisposed(),M.clipByValue(this,t,e)},r.prototype.relu=function(){return this.throwIfDisposed(),M.relu(this)},r.prototype.relu6=function(){return this.throwIfDisposed(),M.relu6(this)},r.prototype.elu=function(){return this.throwIfDisposed(),M.elu(this)},r.prototype.selu=function(){return this.throwIfDisposed(),M.selu(this)},r.prototype.leakyRelu=function(t){return t===void 0&&(t=.2),this.throwIfDisposed(),M.leakyRelu(this,t)},r.prototype.prelu=function(t){return this.throwIfDisposed(),M.prelu(this,t)},r.prototype.sigmoid=function(){return this.throwIfDisposed(),M.sigmoid(this)},r.prototype.logSigmoid=function(){return this.throwIfDisposed(),M.logSigmoid(this)},r.prototype.softplus=function(){return this.throwIfDisposed(),M.softplus(this)},r.prototype.zerosLike=function(){return this.throwIfDisposed(),M.zerosLike(this)},r.prototype.onesLike=function(){return this.throwIfDisposed(),M.onesLike(this)},r.prototype.sin=function(){return this.throwIfDisposed(),M.sin(this)},r.prototype.cos=function(){return this.throwIfDisposed(),M.cos(this)},r.prototype.tan=function(){return this.throwIfDisposed(),M.tan(this)},r.prototype.asin=function(){return this.throwIfDisposed(),M.asin(this)},r.prototype.acos=function(){return this.throwIfDisposed(),M.acos(this)},r.prototype.atan=function(){return this.throwIfDisposed(),M.atan(this)},r.prototype.sinh=function(){return this.throwIfDisposed(),M.sinh(this)},r.prototype.cosh=function(){return this.throwIfDisposed(),M.cosh(this)},r.prototype.tanh=function(){return this.throwIfDisposed(),M.tanh(this)},r.prototype.asinh=function(){return this.throwIfDisposed(),M.asinh(this)},r.prototype.acosh=function(){return this.throwIfDisposed(),M.acosh(this)},r.prototype.atanh=function(){return this.throwIfDisposed(),M.atanh(this)},r.prototype.erf=function(){return this.throwIfDisposed(),M.erf(this)},r.prototype.round=function(){return this.throwIfDisposed(),M.round(this)},r.prototype.step=function(t){return t===void 0&&(t=0),this.throwIfDisposed(),M.step(this,t)},r.prototype.softmax=function(t){return t===void 0&&(t=-1),this.throwIfDisposed(),M.softmax(this,t)},r.prototype.logSoftmax=function(t){return t===void 0&&(t=-1),this.throwIfDisposed(),M.logSoftmax(this,t)},r.prototype.resizeBilinear=function(t,e){return e===void 0&&(e=!1),this.throwIfDisposed(),M.image.resizeBilinear(this,t,e)},r.prototype.resizeNearestNeighbor=function(t,e){return e===void 0&&(e=!1),this.throwIfDisposed(),M.image.resizeNearestNeighbor(this,t,e)},r.prototype.conv1d=function(t,e,n,a,o,i){return a===void 0&&(a="NWC"),o===void 0&&(o=1),this.throwIfDisposed(),M.conv1d(this,t,e,n,a,o,i)},r.prototype.conv2d=function(t,e,n,a,o,i){return a===void 0&&(a="NHWC"),o===void 0&&(o=[1,1]),this.throwIfDisposed(),M.conv2d(this,t,e,n,a,o,i)},r.prototype.conv2dTranspose=function(t,e,n,a,o){return this.throwIfDisposed(),M.conv2dTranspose(this,t,e,n,a,o)},r.prototype.depthwiseConv2D=function(t,e,n,a,o,i){return a===void 0&&(a="NHWC"),o===void 0&&(o=[1,1]),this.throwIfDisposed(),M.depthwiseConv2d(this,t,e,n,a,o,i)},r.prototype.separableConv2d=function(t,e,n,a,o,i){return o===void 0&&(o=[1,1]),i===void 0&&(i="NHWC"),this.throwIfDisposed(),M.separableConv2d(this,t,e,n,a,o,i)},r.prototype.avgPool=function(t,e,n,a){return this.throwIfDisposed(),M.avgPool(this,t,e,n,a)},r.prototype.maxPool=function(t,e,n,a){return this.throwIfDisposed(),M.maxPool(this,t,e,n,a)},r.prototype.localResponseNormalization=function(t,e,n,a){return t===void 0&&(t=5),e===void 0&&(e=1),n===void 0&&(n=1),a===void 0&&(a=.5),M.localResponseNormalization(this,t,e,n,a)},r.prototype.pool=function(t,e,n,a,o){return this.throwIfDisposed(),M.pool(this,t,e,n,a,o)},r.prototype.variable=function(t,e,n){return t===void 0&&(t=!0),this.throwIfDisposed(),Pt().makeVariable(this,t,e,n)},r.prototype.unsortedSegmentSum=function(t,e){return this.throwIfDisposed(),M.unsortedSegmentSum(this,t,e)},r.prototype.batchToSpaceND=function(t,e){return this.throwIfDisposed(),M.batchToSpaceND(this,t,e)},r.prototype.spaceToBatchND=function(t,e){return this.throwIfDisposed(),M.spaceToBatchND(this,t,e)},r.prototype.topk=function(t,e){return t===void 0&&(t=1),e===void 0&&(e=!0),this.throwIfDisposed(),M.topk(this,t,e)},r.prototype.stridedSlice=function(t,e,n,a,o,i,s,u){return a===void 0&&(a=0),o===void 0&&(o=0),i===void 0&&(i=0),s===void 0&&(s=0),u===void 0&&(u=0),this.throwIfDisposed(),M.stridedSlice(this,t,e,n,a,o,i,s,u)},r.prototype.depthToSpace=function(t,e){return this.throwIfDisposed(),M.depthToSpace(this,t,e)},r.prototype.fft=function(){return this.throwIfDisposed(),M.spectral.fft(this)},r.prototype.ifft=function(){return this.throwIfDisposed(),M.spectral.ifft(this)},r.prototype.rfft=function(){return this.throwIfDisposed(),M.spectral.rfft(this)},r.prototype.irfft=function(){return this.throwIfDisposed(),M.spectral.irfft(this)},r}();Object.defineProperty(ke,Symbol.hasInstance,{value:function(r){return!!r&&r.dataId!=null&&r.shape!=null&&r.dtype!=null}});var vs,Fo,Po,Mo,Oo,rr=function(r){function t(e,n,a,o){var i=r.call(this,e.shape,e.dtype,e.dataId,o)||this;return i.trainable=n,i.name=a,i}return It(t,r),t.prototype.assign=function(e){if(e.dtype!==this.dtype)throw new Error("dtype of the new value ("+e.dtype+") and previous value ("+this.dtype+") must match");if(!Ve(e.shape,this.shape))throw new Error("shape of the new value ("+e.shape+") and previous value ("+this.shape+") must match");Pt().disposeTensor(this),this.dataId=e.dataId,Pt().incRef(this,null)},t.prototype.dispose=function(){Pt().disposeVariable(this),this.isDisposedInternal=!0},t}(ke);Object.defineProperty(rr,Symbol.hasInstance,{value:function(r){return r instanceof ke&&r.assign!=null&&r.assign instanceof Function}}),function(r){r.R0="R0",r.R1="R1",r.R2="R2",r.R3="R3",r.R4="R4",r.R5="R5",r.R6="R6"}(vs||(vs={})),function(r){r.float32="float32",r.int32="int32",r.bool="int32",r.complex64="complex64"}(Fo||(Fo={})),function(r){r.float32="float32",r.int32="int32",r.bool="bool",r.complex64="complex64"}(Po||(Po={})),function(r){r.float32="float32",r.int32="float32",r.bool="float32",r.complex64="complex64"}(Mo||(Mo={})),function(r){r.float32="complex64",r.int32="complex64",r.bool="complex64",r.complex64="complex64"}(Oo||(Oo={}));var Ch={float32:Mo,int32:Fo,bool:Po,complex64:Oo};function je(r,t){if(r==="string"||t==="string"){if(r==="string"&&t==="string")return"string";throw new Error("Can not upcast "+r+" with "+t)}return Ch[r][t]}function Qa(r){return je(r,"int32")}function Re(r,t){if(r.dtype===t.dtype)return[r,t];var e=je(r.dtype,t.dtype);return[r.cast(e),t.cast(e)]}function _h(r,t){E(r.dtype===t.dtype,function(){return"The dtypes of the first("+r.dtype+") and second("+t.dtype+") input must match"})}function Su(r){var t=[];return function e(n,a,o){if(n!=null){if(n instanceof ke)return void a.push(n);if(i=n,!(!Array.isArray(i)&&typeof i!="object")){var i,s=n;for(var u in s){var c=s[u];o.has(c)||(o.add(c),e(c,a,o))}}}}(r,t,new Set),t}var eo,gs=function(){function r(){this.registeredVariables={},this.nextTapeNodeId=0,this.numBytes=0,this.numTensors=0,this.numStringTensors=0,this.numDataBuffers=0,this.gradientDepth=0,this.kernelDepth=0,this.scopeStack=[],this.numDataMovesStack=[],this.nextScopeId=0,this.tensorInfo=new WeakMap,this.profiling=!1,this.activeProfile={newBytes:0,newTensors:0,peakBytes:0,kernels:[],result:null}}return r.prototype.dispose=function(){for(var t in this.registeredVariables)this.registeredVariables[t].dispose()},r}(),Eh=function(){function r(t){this.ENV=t,this.registry={},this.registryFactory={},this.pendingBackendInitId=0,this.state=new gs}return r.prototype.ready=function(){return Y(this,void 0,void 0,function(){var t,e,n;return $(this,function(a){switch(a.label){case 0:if(this.pendingBackendInit!=null)return[2,this.pendingBackendInit.then(function(){})];if(this.backendInstance!=null)return[2];t=this.getSortedBackends(),e=0,a.label=1;case 1:return e<t.length?(n=t[e],[4,this.initializeBackend(n).success]):[3,5];case 2:return a.sent()?[4,this.setBackend(n)]:[3,4];case 3:return a.sent(),[2];case 4:return e++,[3,1];case 5:throw new Error("Could not initialize any backends, all backend initializations failed.")}})})},Object.defineProperty(r.prototype,"backend",{get:function(){if(this.pendingBackendInit!=null)throw new Error("Backend '"+this.backendName+"' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods");if(this.backendInstance==null){var t=this.initializeBackendsAndReturnBest(),e=t.name;if(t.asyncInit)throw new Error("The highest priority backend '"+e+"' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods");this.setBackend(e)}return this.backendInstance},enumerable:!0,configurable:!0}),r.prototype.backendNames=function(){return Object.keys(this.registryFactory)},r.prototype.findBackend=function(t){return!(t in this.registry)&&(!(t in this.registryFactory)||this.initializeBackend(t).asyncInit)?null:this.registry[t]},r.prototype.findBackendFactory=function(t){return t in this.registryFactory?this.registryFactory[t].factory:null},r.prototype.registerBackend=function(t,e,n){return n===void 0&&(n=1),t in this.registryFactory?!1:(this.registryFactory[t]={factory:e,priority:n},!0)},r.prototype.setBackend=function(t){return Y(this,void 0,void 0,function(){var e,n,a;return $(this,function(o){switch(o.label){case 0:if(this.registryFactory[t]==null)throw new Error("Backend name '"+t+"' not found in registry");return this.backendName=t,this.registry[t]!=null?[3,4]:(this.backendInstance=null,e=this.initializeBackend(t),n=e.success,e.asyncInit?[4,n]:[3,2]);case 1:return a=o.sent(),[3,3];case 2:a=n,o.label=3;case 3:if(!a)return[2,!1];o.label=4;case 4:return this.backendInstance=this.registry[t],this.setupRegisteredKernels(),this.profiler=new bh(this.backendInstance),[2,!0]}})})},r.prototype.setupRegisteredKernels=function(){var t=this;ls(this.backendName).forEach(function(e){e.setupFunc!=null&&e.setupFunc(t.backendInstance)})},r.prototype.disposeRegisteredKernels=function(t){var e=this;ls(t).forEach(function(n){n.disposeFunc!=null&&n.disposeFunc(e.registry[t])})},r.prototype.initializeBackend=function(t){var e=this,n=this.registryFactory[t];if(n==null)throw new Error("Cannot initialize backend "+t+", no registration found.");try{var a=n.factory();if(Promise.resolve(a)===a){var o=++this.pendingBackendInitId,i=a.then(function(s){return!(o<e.pendingBackendInitId)&&(e.registry[t]=s,e.pendingBackendInit=null,!0)}).catch(function(s){return!(o<e.pendingBackendInitId)&&(e.pendingBackendInit=null,!1)});return this.pendingBackendInit=i,{success:i,asyncInit:!0}}return this.registry[t]=a,{success:!0,asyncInit:!1}}catch{return{success:!1,asyncInit:!1}}},r.prototype.removeBackend=function(t){if(!(t in this.registryFactory))throw new Error(t+" backend not found in registry");this.backendName===t&&this.pendingBackendInit!=null&&this.pendingBackendInitId++,t in this.registry&&(this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t]),delete this.registryFactory[t],this.backendName===t&&(this.pendingBackendInit=null,this.backendName=null,this.backendInstance=null)},r.prototype.getSortedBackends=function(){var t=this;if(Object.keys(this.registryFactory).length===0)throw new Error("No backend found in registry.");return Object.keys(this.registryFactory).sort(function(e,n){return t.registryFactory[n].priority-t.registryFactory[e].priority})},r.prototype.initializeBackendsAndReturnBest=function(){for(var t=this.getSortedBackends(),e=0;e<t.length;e++){var n=t[e],a=this.initializeBackend(n),o=a.success,i=a.asyncInit;if(i||o)return{name:n,asyncInit:i}}throw new Error("Could not initialize any backends, all backend initializations failed.")},r.prototype.moveData=function(t,e){var n=this.state.tensorInfo.get(e),a=n.backend,o=this.readSync(e);a.disposeData(e),n.backend=t,t.move(e,o,n.shape,n.dtype),this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack[this.state.numDataMovesStack.length-1]++},r.prototype.tidy=function(t,e){var n,a=this,o=null;if(e==null){if(typeof t!="function")throw new Error("Please provide a function to tidy()");e=t}else{if(typeof t!="string"&&!(t instanceof String))throw new Error("When calling with two arguments, the first argument to tidy() must be a string");if(typeof e!="function")throw new Error("When calling with two arguments, the 2nd argument to tidy() must be a function");o=t}return this.scopedRun(function(){return a.startScope(o)},function(){return a.endScope(n)},function(){return(n=e())instanceof Promise,n})},r.prototype.scopedRun=function(t,e,n){t();try{var a=n();return e(),a}catch(o){throw e(),o}},r.prototype.nextTensorId=function(){return r.nextTensorId++},r.prototype.nextVariableId=function(){return r.nextVariableId++},r.prototype.clone=function(t){var e=this.makeTensorFromDataId(t.dataId,t.shape,t.dtype),n={x:t};return this.addTapeNode(this.state.activeScope.name,n,[e],function(a){return{x:function(){return a.toFloat()}}},[]),e},r.prototype.runKernel=function(t,e,n,a,o){return this.runKernelFunc(null,e,null,t,n,a,o)},r.prototype.shouldCheckForMemLeaks=function(){return this.ENV.getBool("IS_TEST")},r.prototype.checkKernelForMemLeak=function(t,e,n){var a=this.backend.numDataIds(),o=0;n.forEach(function(u){o+=u.dtype==="complex64"?3:1});var i=this.state.numDataMovesStack[this.state.numDataMovesStack.length-1],s=a-e-o-i;if(s>0)throw new Error("Backend '"+this.backendName+"' has an internal memory leak ("+s+" data ids) after running '"+t+"'")},r.prototype.runKernelFunc=function(t,e,n,a,o,i,s){var u,c=this;i===void 0&&(i=[]),s===void 0&&(s=[]);var l=[],h=this.isTapeOn();a==null&&(a=this.state.activeScope!=null?this.state.activeScope.name:"");var d,f=function(b){h&&(l=b.map(function(x){return c.keep(c.clone(x))}))},p=this.state.numBytes,g=this.state.numTensors;this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack.push(0);var v,m=mu(a,this.backendName);return d=m!=null?function(){var b=c.backend.numDataIds();v=m.kernelFunc({inputs:e,attrs:o,backend:c.backend});var x=Array.isArray(v)?v:[v];c.shouldCheckForMemLeaks()&&c.checkKernelForMemLeak(a,b,x);var y=x.map(function(C){var R=C.dataId,S=C.shape,I=C.dtype;return c.makeTensorFromDataId(R,S,I)}),w=y.filter(function(C,R){return s[R]});return f((i||[]).slice().concat(w)),y}:function(){var b=c.backend.numDataIds();v=c.tidy(function(){return t(c.backend,f)});var x=Array.isArray(v)?v:[v];return c.shouldCheckForMemLeaks()&&c.checkKernelForMemLeak(a,b,x),x},this.scopedRun(function(){return c.state.kernelDepth++},function(){return c.state.kernelDepth--},function(){u=c.ENV.getBool("DEBUG")?c.profiler.profileKernel(a,e,function(){return d()}):d()}),h&&this.addTapeNode(a,e,u,n,l),this.state.profiling&&this.state.activeProfile.kernels.push({name:a,bytesAdded:this.state.numBytes-p,totalBytesSnapshot:this.state.numBytes,tensorsAdded:this.state.numTensors-g,totalTensorsSnapshot:this.state.numTensors,inputShapes:Object.keys(e).map(function(b){return e[b].shape}),outputShapes:u.map(function(b){return b.shape})}),Array.isArray(v)?u:u[0]},r.prototype.makeTensor=function(t,e,n,a){if(t==null)throw new Error("Values passed to engine.makeTensor() are null");n=n||"float32",a=a||this.backend;var o=t;n==="string"&&ni(t[0])&&(o=t.map(function(l){return mh(l)}));var i=a.write(o,e,n),s=new ke(e,n,i,this.nextTensorId());if(this.incRef(s,a),n==="string"){var u=this.state.tensorInfo.get(i),c=ph(o);this.state.numBytes+=c-u.bytes,u.bytes=c}return s},r.prototype.makeTensorFromDataId=function(t,e,n,a){var o=new ke(e,n=n||"float32",t,this.nextTensorId());return this.incRef(o,a),o},r.prototype.makeVariable=function(t,e,n,a){e===void 0&&(e=!0),n=n||this.nextVariableId().toString(),a!=null&&a!==t.dtype&&(t=t.asType(a));var o=new rr(t,e,n,this.nextTensorId());if(this.state.registeredVariables[o.name]!=null)throw new Error("Variable with name "+o.name+" was already registered");return this.state.registeredVariables[o.name]=o,this.incRef(o,this.backend),o},r.prototype.incRef=function(t,e){var n=this.state.tensorInfo.has(t.dataId)?this.state.tensorInfo.get(t.dataId).refCount:0;if(this.state.numTensors++,t.dtype==="string"&&this.state.numStringTensors++,n===0){this.state.numDataBuffers++;var a=0;t.dtype!=="complex64"&&t.dtype!=="string"&&(a=t.size*wu(t.dtype)),this.state.tensorInfo.set(t.dataId,{backend:e||this.backend,dtype:t.dtype,shape:t.shape,bytes:a,refCount:0}),this.state.numBytes+=a}this.state.tensorInfo.get(t.dataId).refCount++,t instanceof rr||this.track(t)},r.prototype.disposeTensor=function(t){if(this.state.tensorInfo.has(t.dataId)){this.state.numTensors--,t.dtype==="string"&&this.state.numStringTensors--;var e=this.state.tensorInfo.get(t.dataId);e.refCount<=1?(t.dtype!=="complex64"&&(this.state.numBytes-=e.bytes),this.state.numDataBuffers--,e.backend.disposeData(t.dataId),this.state.tensorInfo.delete(t.dataId)):this.state.tensorInfo.get(t.dataId).refCount--}},r.prototype.disposeVariables=function(){for(var t in this.state.registeredVariables){var e=this.state.registeredVariables[t];this.disposeVariable(e)}},r.prototype.disposeVariable=function(t){this.disposeTensor(t),this.state.registeredVariables[t.name]!=null&&delete this.state.registeredVariables[t.name]},r.prototype.memory=function(){var t=this.backend.memory();return t.numTensors=this.state.numTensors,t.numDataBuffers=this.state.numDataBuffers,t.numBytes=this.state.numBytes,this.state.numStringTensors>0&&(t.unreliable=!0,t.reasons==null&&(t.reasons=[]),t.reasons.push("Memory usage by string tensors is approximate (2 bytes per character)")),t},r.prototype.profile=function(t){return Y(this,void 0,void 0,function(){var e,n;return $(this,function(a){return this.state.profiling=!0,e=this.state.numBytes,n=this.state.numTensors,this.state.activeProfile.kernels=[],this.state.activeProfile.result=t(),this.state.profiling=!1,this.state.activeProfile.peakBytes=Math.max.apply(Math,this.state.activeProfile.kernels.map(function(o){return o.totalBytesSnapshot})),this.state.activeProfile.newBytes=this.state.numBytes-e,this.state.activeProfile.newTensors=this.state.numTensors-n,[2,this.state.activeProfile]})})},r.prototype.isTapeOn=function(){return this.state.gradientDepth>0&&this.state.kernelDepth===0},r.prototype.addTapeNode=function(t,e,n,a,o){var i=this,s={id:this.state.nextTapeNodeId++,kernelName:t,inputs:e,outputs:n,saved:o},u=ih(t);u!=null&&(a=u.gradFunc),a!=null&&(s.gradient=function(c){return c=c.map(function(l,h){if(l==null){var d=n[h],f=Nr(d.size,d.dtype);return i.makeTensor(f,d.shape,d.dtype)}return l}),a(c.length>1?c:c[0],o)}),this.state.activeTape.push(s)},r.prototype.keep=function(t){return t.kept=!0,t},r.prototype.startTape=function(){this.state.gradientDepth===0&&(this.state.activeTape=[]),this.state.gradientDepth++},r.prototype.endTape=function(){this.state.gradientDepth--},r.prototype.startScope=function(t){var e={track:[],name:"unnamed scope",id:this.state.nextScopeId++};t&&(e.name=t),this.state.scopeStack.push(e),this.state.activeScope=e},r.prototype.endScope=function(t){for(var e=this,n=Su(t),a=new Set(n.map(function(u){return u.id})),o=0;o<this.state.activeScope.track.length;o++){var i=this.state.activeScope.track[o];i.kept||a.has(i.id)||i.dispose()}var s=this.state.scopeStack.pop();this.state.activeScope=this.state.scopeStack.length===0?null:this.state.scopeStack[this.state.scopeStack.length-1],n.forEach(function(u){u.kept||u.scopeId!==s.id||e.track(u)})},r.prototype.gradients=function(t,e,n,a){var o=this;if(a===void 0&&(a=!1),E(e.length>0,function(){return"gradients() received an empty list of xs."}),n!=null&&n.dtype!=="float32")throw new Error("dy must have 'float32' dtype, but has '"+n.dtype+"'");var i=this.scopedRun(function(){return o.startTape()},function(){return o.endTape()},function(){return o.tidy("forward",t)});E(i instanceof ke,function(){return"The result y returned by f() must be a tensor."});var s=function(u,c,l){for(var h={},d={},f=0;f<c.length;f++)h[c[f].id]=!0;for(f=0;f<u.length;f++){var p=(C=u[f]).inputs;for(var g in p){for(var v=p[g],m=!1,b=0;b<c.length;b++)if(h[v.id]){C.outputs.forEach(function(k){return h[k.id]=!0}),m=!0,d[C.id]=!0;break}if(m)break}}var x={};x[l.id]=!0;var y={};for(f=u.length-1;f>=0;f--)for(p=(C=u[f]).inputs,b=0;b<C.outputs.length;b++)if(x[C.outputs[b].id]){for(var g in p)x[p[g].id]=!0,y[C.id]=!0;break}var w=[];for(f=0;f<u.length;f++){var C;if(d[(C=u[f]).id]&&y[C.id]){var R={};for(var g in C.inputs){var S=C.inputs[g];h[S.id]&&(R[g]=S)}var I=Object.assign({},C);I.inputs=R,I.outputs=C.outputs,w.push(I)}}return w}(this.state.activeTape,e,i);if(!a&&s.length===0&&e.length>0)throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.");return this.tidy("backward",function(){var u,c,l={};l[i.id]=n??(u=i.shape,c=_u(Z(u),"float32"),N.makeTensor(c,u,"float32")),function(d,f,p){for(var g=function(m){var b=f[m],x=[];if(b.outputs.forEach(function(R){var S=d[R.id];S!=null?x.push(S):x.push(null)}),b.gradient==null)throw new Error("Cannot compute gradient: gradient function not found for "+b.kernelName+".");var y=b.gradient(x),w=function(R){if(!(R in y))throw new Error("Cannot backprop through input "+R+". Available gradients found: "+Object.keys(y)+".");var S=p(function(){return y[R]()});if(S.dtype!=="float32")throw new Error("Error in gradient for op "+b.kernelName+". The gradient of input "+R+" must have 'float32' dtype, but has '"+S.dtype+"'");var I=b.inputs[R];if(!Ve(S.shape,I.shape))throw new Error("Error in gradient for op "+b.kernelName+". The gradient of input '"+R+"' has shape '"+S.shape+"', which does not match the shape of the input '"+I.shape+"'");if(d[I.id]==null)d[I.id]=S;else{var k=d[I.id];d[I.id]=k.add(S),k.dispose()}};for(var C in b.inputs)w(C)},v=f.length-1;v>=0;v--)g(v)}(l,s,function(d){return o.tidy(d)});var h=e.map(function(d){return l[d.id]});return o.state.gradientDepth===0&&(o.state.activeTape.forEach(function(d){for(var f=0,p=d.saved;f<p.length;f++)p[f].dispose()}),o.state.activeTape=null),{value:i,grads:h}})},r.prototype.customGrad=function(t){var e=this;return E(To(t),function(){return"The f passed in customGrad(f) must be a function."}),function(){for(var n,a=[],o=0;o<arguments.length;o++)a[o]=arguments[o];E(a.every(function(s){return s instanceof ke}),function(){return"The args passed in customGrad(f)(x1, x2,...) must all be tensors"});var i={};return a.forEach(function(s,u){i[u]=s}),e.runKernelFunc(function(s,u){return E((n=t.apply(void 0,a.concat([u]))).value instanceof ke,function(){return"The function f passed in customGrad(f) must return an object where `obj.value` is a tensor"}),E(To(n.gradFunc),function(){return"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function."}),n.value},i,function(s,u){var c=n.gradFunc(s,u),l=Array.isArray(c)?c:[c];E(l.length===a.length,function(){return"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...)."}),E(l.every(function(d){return d instanceof ke}),function(){return"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors."});var h={};return l.forEach(function(d,f){h[f]=function(){return d}}),h})}},r.prototype.readSync=function(t){return this.state.tensorInfo.get(t).backend.readSync(t)},r.prototype.read=function(t){return this.state.tensorInfo.get(t).backend.read(t)},r.prototype.time=function(t){return Y(this,void 0,void 0,function(){var e,n;return $(this,function(a){switch(a.label){case 0:return e=Ft(),[4,this.backend.time(t)];case 1:return(n=a.sent()).wallMs=Ft()-e,[2,n]}})})},r.prototype.track=function(t){return this.state.activeScope!=null&&(t.scopeId=this.state.activeScope.id,this.state.activeScope.track.push(t)),t},Object.defineProperty(r.prototype,"registeredVariables",{get:function(){return this.state.registeredVariables},enumerable:!0,configurable:!0}),r.prototype.reset=function(){for(var t in this.pendingBackendInitId++,this.state.dispose(),this.ENV.reset(),this.state=new gs,this.registry)this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t];this.backendName=null,this.backendInstance=null,this.pendingBackendInit=null},r.nextTensorId=0,r.nextVariableId=0,r}(),N=function(){var r=function(){if(eo==null){var e=void 0;if(typeof window<"u")e=window;else if(typeof global<"u")e=global;else if(typeof process<"u")e=process;else{if(typeof self>"u")throw new Error("Could not find a global object");e=self}eo=e}return eo}();if(r._tfengine==null){var t=new ah(r);r._tfengine=new Eh(t)}return function(e){gu=e}(r._tfengine.ENV),Pt=function(){return r._tfengine},r._tfengine}();function Ru(){return typeof window<"u"&&window.document!=null||typeof WorkerGlobalScope<"u"}var Xt=O();Xt.registerFlag("DEBUG",function(){return!1},function(r){}),Xt.registerFlag("IS_BROWSER",function(){return Ru()}),Xt.registerFlag("IS_NODE",function(){return typeof process<"u"&&process.versions!==void 0&&process.versions.node!==void 0}),Xt.registerFlag("IS_CHROME",function(){return typeof navigator<"u"&&navigator!=null&&navigator.userAgent!=null&&/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor)}),Xt.registerFlag("PROD",function(){return!1}),Xt.registerFlag("TENSORLIKE_CHECK_SHAPE_CONSISTENCY",function(){return Xt.getBool("DEBUG")}),Xt.registerFlag("DEPRECATION_WARNINGS_ENABLED",function(){return!0}),Xt.registerFlag("IS_TEST",function(){return!1});var wr,ct,ut,_n={},to={alpha:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1,depth:!1,stencil:!1,failIfMajorPerformanceCaveat:!0};function Ih(r,t){_n[r]=t}function Vt(r){r in _n||(_n[r]=function(e){if(e!==1&&e!==2)throw new Error("Cannot get WebGL rendering context, WebGL is disabled.");var n=function(a){if(typeof OffscreenCanvas<"u"&&a===2)return new OffscreenCanvas(300,150);if(typeof document<"u")return document.createElement("canvas");throw new Error("Cannot create a canvas in this context")}(e);return n.addEventListener("webglcontextlost",function(a){a.preventDefault(),delete _n[e]},!1),e===1?n.getContext("webgl",to)||n.getContext("experimental-webgl",to):n.getContext("webgl2",to)}(r));var t=_n[r];return t.isContextLost()?(delete _n[r],Vt(r)):(t.disable(t.DEPTH_TEST),t.disable(t.STENCIL_TEST),t.disable(t.BLEND),t.disable(t.DITHER),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SAMPLE_COVERAGE),t.enable(t.SCISSOR_TEST),t.enable(t.CULL_FACE),t.cullFace(t.BACK),_n[r])}function Ra(r,t){return[t,r]}function vr(r){var t=Z(r);return Do(Math.ceil(t/4))}function Fr(r,t){return[Math.max(1,Math.ceil(t/2)),Math.max(1,Math.ceil(r/2))]}function ri(r,t){var e,n,a,o,i,s,u,c,l,h=r;return O().getNumber("WEBGL_VERSION")===2?(e=h.R32F,n=h.R16F,a=h.RGBA16F,o=h.RGBA32F,i=h.RED,s=4,u=1,c=h.HALF_FLOAT,l=h.FLOAT):(e=r.RGBA,n=r.RGBA,a=r.RGBA,o=h.RGBA,i=r.RGBA,s=4,u=4,c=t!=null?t.HALF_FLOAT_OES:null,l=r.FLOAT),{internalFormatFloat:e,internalFormatHalfFloat:n,internalFormatPackedHalfFloat:a,internalFormatPackedFloat:o,textureFormatFloat:i,downloadTextureFormat:r.RGBA,downloadUnpackNumChannels:s,defaultNumChannels:u,textureTypeHalfFloat:c,textureTypeFloat:l}}function J(r,t,e){var n=e();return t&&function(a){var o=a.getError();if(o!==a.NO_ERROR)throw new Error("WebGL Error: "+Ah(a,o))}(r),n}(function(r){r[r.DENSE=0]="DENSE",r[r.SHARED_BATCH=1]="SHARED_BATCH"})(wr||(wr={})),function(r){r[r.RENDER=0]="RENDER",r[r.UPLOAD=1]="UPLOAD",r[r.PIXELS=2]="PIXELS",r[r.DOWNLOAD=3]="DOWNLOAD"}(ct||(ct={})),function(r){r[r.UNPACKED_FLOAT16=0]="UNPACKED_FLOAT16",r[r.UNPACKED_FLOAT32=1]="UNPACKED_FLOAT32",r[r.PACKED_4X1_UNSIGNED_BYTE=2]="PACKED_4X1_UNSIGNED_BYTE",r[r.PACKED_2X2_FLOAT32=3]="PACKED_2X2_FLOAT32",r[r.PACKED_2X2_FLOAT16=4]="PACKED_2X2_FLOAT16"}(ut||(ut={}));var kh=596e-10,Sh=65504;function Rh(r){return!!(O().getBool("WEBGL_RENDER_FLOAT32_ENABLED")||r===0||kh<Math.abs(r)&&Math.abs(r)<Sh)}function Ah(r,t){switch(t){case r.NO_ERROR:return"NO_ERROR";case r.INVALID_ENUM:return"INVALID_ENUM";case r.INVALID_VALUE:return"INVALID_VALUE";case r.INVALID_OPERATION:return"INVALID_OPERATION";case r.INVALID_FRAMEBUFFER_OPERATION:return"INVALID_FRAMEBUFFER_OPERATION";case r.OUT_OF_MEMORY:return"OUT_OF_MEMORY";case r.CONTEXT_LOST_WEBGL:return"CONTEXT_LOST_WEBGL";default:return"Unknown error code "+t}}function Ur(r,t,e){return Qt(r,t,function(){return r.getExtension(e)},'Extension "'+e+'" not supported on this browser.')}function Dh(r,t,e){var n=Qt(r,t,function(){return r.createShader(r.VERTEX_SHADER)},"Unable to create vertex WebGLShader.");if(J(r,t,function(){return r.shaderSource(n,e)}),J(r,t,function(){return r.compileShader(n)}),r.getShaderParameter(n,r.COMPILE_STATUS)===!1)throw new Error("Failed to compile vertex shader.");return n}function Th(r,t,e){var n=Qt(r,t,function(){return r.createShader(r.FRAGMENT_SHADER)},"Unable to create fragment WebGLShader.");if(J(r,t,function(){return r.shaderSource(n,e)}),J(r,t,function(){return r.compileShader(n)}),r.getShaderParameter(n,r.COMPILE_STATUS)===!1)throw function(a,o){var i=Nh.exec(o);if(i!=null){for(var s=+i[1],u=a.split(`
`),c=u.length.toString().length+2,l=u.map(function(v,m){return pr((m+1).toString(),c)+v}),h=0,d=0;d<l.length;d++)h=Math.max(l[d].length,h);var f=l.slice(0,s-1),p=l.slice(s-1,s),g=l.slice(s)}}(e,r.getShaderInfoLog(n)),new Error("Failed to compile fragment shader.");return n}var no,ro,Nh=/ERROR: [0-9]+:([0-9]+):/g;function Fh(r,t){return Qt(r,t,function(){return r.createProgram()},"Unable to create WebGLProgram.")}function Ph(r,t,e){if(J(r,t,function(){return r.linkProgram(e)}),r.getProgramParameter(e,r.LINK_STATUS)===!1)throw new Error("Failed to link vertex and fragment shaders.")}function ao(r,t,e){if(J(r,t,function(){return r.validateProgram(e)}),r.getProgramParameter(e,r.VALIDATE_STATUS)===!1)throw new Error("Shader program validation failed.")}function Mh(r,t,e){var n=Qt(r,t,function(){return r.createBuffer()},"Unable to create WebGLBuffer");return J(r,t,function(){return r.bindBuffer(r.ARRAY_BUFFER,n)}),J(r,t,function(){return r.bufferData(r.ARRAY_BUFFER,e,r.STATIC_DRAW)}),n}function Oh(r,t,e){var n=Qt(r,t,function(){return r.createBuffer()},"Unable to create WebGLBuffer");return J(r,t,function(){return r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,n)}),J(r,t,function(){return r.bufferData(r.ELEMENT_ARRAY_BUFFER,e,r.STATIC_DRAW)}),n}function Bh(r,t){return Qt(r,t,function(){return r.createTexture()},"Unable to create WebGLTexture.")}function Lh(r,t){var e=O().getNumber("WEBGL_MAX_TEXTURE_SIZE");if(r<=0||t<=0){var n="["+r+"x"+t+"]";throw new Error("Requested texture size "+n+" is invalid.")}if(r>e||t>e)throw n="["+r+"x"+t+"]",new Error("Requested texture size "+n+" greater than WebGL maximum on this browser / GPU "+("["+e+"x"+e+"]")+".")}function Wh(r,t){return Qt(r,t,function(){return r.createFramebuffer()},"Unable to create WebGLFramebuffer.")}function ms(r,t,e,n,a,o,i,s){var u=r.getAttribLocation(e,n);return u!==-1&&(J(r,t,function(){return r.bindBuffer(r.ARRAY_BUFFER,a)}),J(r,t,function(){return r.vertexAttribPointer(u,o,r.FLOAT,!1,i,s)}),J(r,t,function(){return r.enableVertexAttribArray(u)}),!0)}function zh(r,t,e,n){jh(r,n),J(r,t,function(){return r.activeTexture(r.TEXTURE0+n)}),J(r,t,function(){return r.bindTexture(r.TEXTURE_2D,e)})}function Uh(r,t,e,n){return Qt(r,t,function(){return r.getUniformLocation(e,n)},'uniform "'+n+'" not present in program.')}function Vh(r,t,e){return r.getUniformLocation(t,e)}function Gh(r,t,e,n,a,o){J(r,t,function(){return zh(r,t,n,o)}),J(r,t,function(){return r.uniform1i(a,o)})}function oo(r,t,e,n){J(r,t,function(){return r.bindFramebuffer(r.FRAMEBUFFER,n)}),J(r,t,function(){return r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,e,0)})}function ys(r,t,e){J(r,t,function(){return r.bindFramebuffer(r.FRAMEBUFFER,e)}),J(r,t,function(){return r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,null,0)})}function Vr(r){var t=r.checkFramebufferStatus(r.FRAMEBUFFER);if(t!==r.FRAMEBUFFER_COMPLETE)throw new Error("Error binding framebuffer: "+Hh(r,t))}function Hh(r,t){switch(t){case r.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_ATTACHMENT";case r.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT";case r.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:return"FRAMEBUFFER_INCOMPLETE_DIMENSIONS";case r.FRAMEBUFFER_UNSUPPORTED:return"FRAMEBUFFER_UNSUPPORTED";default:return"unknown error "+t}}function Qt(r,t,e,n){var a=J(r,t,function(){return e()});if(a==null)throw new Error(n);return a}function jh(r,t){var e=r.MAX_COMBINED_TEXTURE_IMAGE_UNITS-1,n=t+r.TEXTURE0;if(n<r.TEXTURE0||n>e)throw new Error("textureUnit must be in "+("[gl.TEXTURE0, gl.TEXTURE"+e+"]")+".")}function ia(r,t){return t===void 0&&(t=2),Z(r.slice(0,r.length-t))}function sa(r){if(r.length===0)throw Error("Cannot get rows and columns of an empty shape array.");return[r.length>1?r[r.length-2]:1,r[r.length-1]]}function io(r){var t=[1,1,1];return r.length===0||r.length===1&&r[0]===1||(t=[ia(r)].concat(sa(r))),t}function qh(r,t){var e;t===void 0&&(t=!1);var n=O().getNumber("WEBGL_MAX_TEXTURE_SIZE");if(t&&(n*=2,(r=r.map(function(c,l){return l>=r.length-2?xu(r[l]):r[l]})).length===1&&(r=[2,r[0]])),r.length!==2){var a=In(r);r=a.newShape}var o=Z(r);if(r.length<=1&&o<=n)return[1,o];if(r.length===2&&r[0]<=n&&r[1]<=n)return r;if(r.length===3&&r[0]*r[1]<=n&&r[2]<=n)return[r[0]*r[1],r[2]];if(r.length===3&&r[0]<=n&&r[1]*r[2]<=n)return[r[0],r[1]*r[2]];if(r.length===4&&r[0]*r[1]*r[2]<=n&&r[3]<=n)return[r[0]*r[1]*r[2],r[3]];if(r.length===4&&r[0]<=n&&r[1]*r[2]*r[3]<=n)return[r[0],r[1]*r[2]*r[3]];if(t){var i=ia(r),s=2,u=2;return r.length&&(s=(e=sa(r))[0],u=e[1]),Do(o=i*(s/2)*(u/2)).map(function(c){return 2*c})}return Do(o)}function Gr(r){return r%2==0}function Hr(r,t){if(Ve(r=r.slice(-2),t=t.slice(-2))||!r.length||!t.length||r[0]===0||r[1]===0||t[0]===0||t[1]===0)return!0;if(r.length!==t.length){var e=r.slice(-1)[0],n=t.slice(-1)[0];if(e===n||Gr(e)&&Gr(n)&&(r[0]===1||t[0]===1))return!0}return r[1]===t[1]&&Gr(r[0])&&Gr(t[0])}function Kh(r){if(no==null){var t=Vt(r);no=t.getParameter(t.MAX_TEXTURE_SIZE)}return no}function Xh(r){if(ro==null){var t=Vt(r);ro=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS)}return Math.min(16,ro)}function Yh(r){if(r===0)return 0;var t=Vt(r);return yt(t,"EXT_disjoint_timer_query_webgl2")&&r===2?2:yt(t,"EXT_disjoint_timer_query")?1:0}function yt(r,t){return r.getExtension(t)!=null}function bs(r){try{if(Vt(r)!=null)return!0}catch{return!1}return!1}function $h(r){if(r===0)return!1;var t=Vt(r);if(r===1){if(!yt(t,"OES_texture_float"))return!1}else if(!yt(t,"EXT_color_buffer_float"))return!1;return Bo(t)}function Zh(r){if(r===0)return!1;var t=Vt(r);if(r!==1){if(yt(t,"EXT_color_buffer_float"))return Bo(t);if(yt(t,"EXT_color_buffer_half_float")){var e=t.getExtension("EXT_color_buffer_half_float");return function(n,a){var o=ri(n,a),i=n.createTexture();n.bindTexture(n.TEXTURE_2D,i),n.texImage2D(n.TEXTURE_2D,0,o.internalFormatHalfFloat,1,1,0,o.textureFormatFloat,o.textureTypeHalfFloat,null);var s=n.createFramebuffer();n.bindFramebuffer(n.FRAMEBUFFER,s),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,i,0);var u=n.checkFramebufferStatus(n.FRAMEBUFFER)===n.FRAMEBUFFER_COMPLETE;return n.bindTexture(n.TEXTURE_2D,null),n.bindFramebuffer(n.FRAMEBUFFER,null),n.deleteTexture(i),n.deleteFramebuffer(s),u}(t,e)}return!1}return!!yt(t,"OES_texture_float")&&!!yt(t,"WEBGL_color_buffer_float")&&Bo(t)}function Bo(r){var t=ri(r),e=r.createTexture();r.bindTexture(r.TEXTURE_2D,e),r.texImage2D(r.TEXTURE_2D,0,t.internalFormatFloat,1,1,0,t.textureFormatFloat,t.textureTypeFloat,null);var n=r.createFramebuffer();r.bindFramebuffer(r.FRAMEBUFFER,n),r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,e,0);var a=r.checkFramebufferStatus(r.FRAMEBUFFER)===r.FRAMEBUFFER_COMPLETE;return r.bindTexture(r.TEXTURE_2D,null),r.bindFramebuffer(r.FRAMEBUFFER,null),r.deleteTexture(e),r.deleteFramebuffer(n),a}function Jh(r){return r===2&&Vt(r).fenceSync!=null}var re=O();function Au(r){O().getBool("DEPRECATION_WARNINGS_ENABLED")}function X(r,t){return N.tidy(r,t)}function nt(r){Su(r).forEach(function(t){return t.dispose()})}function Qh(r){return N.keep(r)}function ua(){for(var r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];O().getBool("IS_TEST")}function yn(r,t){var e=r;if(Lt(r))return t==="string"?[]:[r.length];if(!Array.isArray(r))return[];for(var n=[];Array.isArray(e)||Lt(e)&&t!=="string";)n.push(e.length),e=e[0];return Array.isArray(r)&&O().getBool("TENSORLIKE_CHECK_SHAPE_CONSISTENCY")&&function a(o,i,s){if(s=s||[],!Array.isArray(o)&&!Lt(o))return void E(i.length===0,function(){return"Element arr["+s.join("][")+"] is a primitive, but should be an array/TypedArray of "+i[0]+" elements"});E(i.length>0,function(){return"Element arr["+s.join("][")+"] should be a primitive, but is an array of "+o.length+" elements"}),E(o.length===i[0],function(){return"Element arr["+s.join("][")+"] should have "+i[0]+" elements, but has "+o.length+" elements"});for(var u=i.slice(1),c=0;c<o.length;++c)a(o[c],u,s.concat(c))}(r,n,[]),n}function xs(r,t,e,n){if(r!=null&&(r!=="numeric"&&r!==t||r==="numeric"&&t==="string"))throw new Error("Argument '"+e+"' passed to '"+n+"' must be "+r+" tensor, but got "+t+" tensor")}function _(r,t,e,n){if(n===void 0&&(n="numeric"),r instanceof ke)return xs(n,r.dtype,t,e),r;var a=Tr(r);if(a!=="string"&&["bool","int32","float32"].indexOf(n)>=0&&(a=n),xs(n,a,t,e),r==null||!Lt(r)&&!Array.isArray(r)&&typeof r!="number"&&typeof r!="boolean"&&typeof r!="string"){var o=r==null?"null":r.constructor.name;throw new Error("Argument '"+t+"' passed to '"+e+"' must be a Tensor or TensorLike, but got '"+o+"'")}var i=yn(r,a);Lt(r)||Array.isArray(r)||(r=[r]);var s=a!=="string"?Cu(r,a,O().getBool("DEBUG")):nr(r,[],!0);return N.makeTensor(s,i,a)}function ca(r,t,e,n){if(n===void 0&&(n="numeric"),!Array.isArray(r))throw new Error("Argument "+t+" passed to "+e+" must be a `Tensor[]` or `TensorLike[]`");return r.map(function(a,o){return _(a,t+"["+o+"]",e)},n)}function Du(r,t){for(var e=0;e<r.length;++e)if(r[r.length-e-1]!==t-1-e)return!1;return!0}function ed(r,t,e){for(var n=r.length+t.length,a=[],o=0,i=0,s=0;s<n;s++)e.indexOf(s)===-1?a.push(r[o++]):a.push(t[i++]);return a}function Ke(r,t){for(var e=[],n=r.length,a=0;a<n;a++)t.indexOf(a)===-1&&e.push(r[a]);return[e,t.map(function(o){return r[o]})]}function at(r,t){return ed(r,t.map(function(e){return 1}),t)}function st(r,t,e){E(Du(t,e),function(){return r+" supports only inner-most axes for now. Got axes "+t+" and rank-"+e+" input."})}function Gt(r,t){if(Du(r,t))return null;for(var e=[],n=0;n<t;++n)r.indexOf(n)===-1&&e.push(n);return r.forEach(function(a){return e.push(a)}),e}function ai(r){return r.map(function(t,e){return[e,t]}).sort(function(t,e){return t[1]-e[1]}).map(function(t){return t[0]})}function Ht(r,t){for(var e=[],n=t-r;n<t;++n)e.push(n);return e}function td(r,t){var e=r[0].length;r.forEach(function(a,o){E(a.length===e,function(){return"Error in concat"+e+"D: rank of tensors["+o+"] must be the same as the rank of the rest ("+e+")"})}),E(t>=0&&t<e,function(){return"Error in concat"+e+"D: axis must be between 0 and "+(e-1)+"."});var n=r[0];r.forEach(function(a,o){for(var i=0;i<e;i++)E(i===t||a[i]===n[i],function(){return"Error in concat"+e+"D: Shape of tensors["+o+"] ("+a+") does not match the shape of the rest ("+n+") along the non-concatenated axis "+o+"."})})}function ar(r,t){for(var e=r[0].slice(),n=1;n<r.length;n++)e[t]+=r[n][t];return e}function D(r){var t=Object.keys(r);if(t.length!==1)throw new Error("Please provide an object with a single key (operation name) mapping to a function. Got an object with "+t.length+" keys.");var e=t[0],n=r[e];e.endsWith("_")&&(e=e.substring(0,e.length-1));var a=function(){for(var o=[],i=0;i<arguments.length;i++)o[i]=arguments[i];N.startScope(e);try{var s=n.apply(void 0,o);return s instanceof Promise,N.endScope(s),s}catch(u){throw N.endScope(null),u}};return Object.defineProperty(a,"name",{value:e,configurable:!0}),a}re.registerFlag("HAS_WEBGL",function(){return re.getNumber("WEBGL_VERSION")>0}),re.registerFlag("WEBGL_VERSION",function(){return bs(2)?2:bs(1)?1:0}),re.registerFlag("WEBGL_BUFFER_SUPPORTED",function(){return re.get("WEBGL_VERSION")===2}),re.registerFlag("WEBGL_CPU_FORWARD",function(){return!0}),re.registerFlag("WEBGL_FORCE_F16_TEXTURES",function(){return!1}),re.registerFlag("WEBGL_PACK",function(){return re.getBool("HAS_WEBGL")}),re.registerFlag("WEBGL_PACK_NORMALIZATION",function(){return re.getBool("WEBGL_PACK")}),re.registerFlag("WEBGL_PACK_CLIP",function(){return re.getBool("WEBGL_PACK")}),re.registerFlag("WEBGL_PACK_DEPTHWISECONV",function(){return!1}),re.registerFlag("WEBGL_PACK_BINARY_OPERATIONS",function(){return re.getBool("WEBGL_PACK")}),re.registerFlag("WEBGL_PACK_UNARY_OPERATIONS",function(){return re.getBool("WEBGL_PACK")}),re.registerFlag("WEBGL_PACK_ARRAY_OPERATIONS",function(){return re.getBool("WEBGL_PACK")}),re.registerFlag("WEBGL_PACK_IMAGE_OPERATIONS",function(){return re.getBool("WEBGL_PACK")}),re.registerFlag("WEBGL_PACK_REDUCE",function(){return re.getBool("WEBGL_PACK")}),re.registerFlag("WEBGL_LAZILY_UNPACK",function(){return re.getBool("WEBGL_PACK")}),re.registerFlag("WEBGL_CONV_IM2COL",function(){return re.getBool("WEBGL_PACK")}),re.registerFlag("WEBGL_MAX_TEXTURE_SIZE",function(){return Kh(re.getNumber("WEBGL_VERSION"))}),re.registerFlag("WEBGL_MAX_TEXTURES_IN_SHADER",function(){return Xh(re.getNumber("WEBGL_VERSION"))}),re.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION",function(){var r=re.getNumber("WEBGL_VERSION");return r===0?0:Yh(r)}),re.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE",function(){return re.getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0&&(r=navigator.userAgent||navigator.vendor||window.opera,!(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(r)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(r.substr(0,4))));var r}),re.registerFlag("WEBGL_RENDER_FLOAT32_CAPABLE",function(){return $h(re.getNumber("WEBGL_VERSION"))}),re.registerFlag("WEBGL_RENDER_FLOAT32_ENABLED",function(){return!re.getBool("WEBGL_FORCE_F16_TEXTURES")&&re.getBool("WEBGL_RENDER_FLOAT32_CAPABLE")}),re.registerFlag("WEBGL_DOWNLOAD_FLOAT_ENABLED",function(){return Zh(re.getNumber("WEBGL_VERSION"))}),re.registerFlag("WEBGL_FENCE_API_ENABLED",function(){return Jh(re.getNumber("WEBGL_VERSION"))}),re.registerFlag("WEBGL_SIZE_UPLOAD_UNIFORM",function(){return re.getBool("WEBGL_RENDER_FLOAT32_ENABLED")?4:0}),ku=Au;var He=D({complex_:function(r,t){var e=_(r,"real","complex"),n=_(t,"imag","complex");return xe(e.shape,n.shape,"real and imag shapes, "+e.shape+" and "+n.shape+", must match in call to tf.complex()."),N.runKernelFunc(function(a){return a.complex(e,n)},{$real:e,$imag:n})}}),gt=D({real_:function(r){var t=_(r,"input","real");return N.runKernelFunc(function(e){return e.real(t)},{$input:t})}}),Mt=D({imag_:function(r){var t=_(r,"input","imag");return N.runKernelFunc(function(e){return e.imag(t)},{$input:t})}});function qe(r,t,e){return bn(r,t,yn(r,e),e)}function bn(r,t,e,n){if(n==null&&(n=Tr(r)),n==="complex64")throw new Error("Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).");if(!Lt(r)&&!Array.isArray(r)&&typeof r!="number"&&typeof r!="boolean"&&typeof r!="string")throw new Error("values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray");if(t!=null){Eu(t);var a=Z(t),o=Z(e);E(a===o,function(){return"Based on the provided shape, ["+t+"], the tensor should have "+a+" values but has "+o});for(var i=0;i<e.length;++i){var s=e[i],u=i!==e.length-1||s!==Z(t.slice(i));E(e[i]===t[i]||!u,function(){return"Error creating a new Tensor. Inferred shape ("+e+") does not match the provided shape ("+t+"). "})}}return Lt(r)||Array.isArray(r)||(r=[r]),t=t||e,r=n!=="string"?Cu(r,n,O().getBool("DEBUG")):nr(r,[],!0),N.makeTensor(r,t,n)}function q(r,t){if((Lt(r)&&t!=="string"||Array.isArray(r))&&t!=="complex64")throw new Error("Error creating a new Scalar: value must be a primitive (number|boolean|string)");if(t==="string"&&Lt(r)&&!(r instanceof Uint8Array))throw new Error("When making a scalar from encoded string, the value must be `Uint8Array`.");return bn(r,[],[],t)}function Fe(r,t){sr(r);var e=yn(r,t);if(e.length!==1)throw new Error("tensor1d() requires values to be a flat/TypedArray");return bn(r,null,e,t)}function dn(r,t,e){if(sr(r),t!=null&&t.length!==2)throw new Error("tensor2d() requires shape to have two numbers");var n=yn(r,e);if(n.length!==2&&n.length!==1)throw new Error("tensor2d() requires values to be number[][] or flat/TypedArray");if(n.length===1&&t==null)throw new Error("tensor2d() requires shape to be provided when `values` are a flat/TypedArray");return bn(r,t,n,e)}function oi(r,t,e){if(sr(r),t!=null&&t.length!==3)throw new Error("tensor3d() requires shape to have three numbers");var n=yn(r,e);if(n.length!==3&&n.length!==1)throw new Error("tensor3d() requires values to be number[][][] or flat/TypedArray");if(n.length===1&&t==null)throw new Error("tensor3d() requires shape to be provided when `values` are a flat array");return bn(r,t,n,e)}function Qe(r,t,e){if(sr(r),t!=null&&t.length!==4)throw new Error("tensor4d() requires shape to have four numbers");var n=yn(r,e);if(n.length!==4&&n.length!==1)throw new Error("tensor4d() requires values to be number[][][][] or flat/TypedArray");if(n.length===1&&t==null)throw new Error("tensor4d() requires shape to be provided when `values` are a flat array");return bn(r,t,n,e)}function nd(r,t,e){if(sr(r),t!=null&&t.length!==5)throw new Error("tensor5d() requires shape to have five numbers");var n=yn(r,e);if(n.length!==5&&n.length!==1)throw new Error("tensor5d() requires values to be number[][][][][] or flat/TypedArray");if(n.length===1&&t==null)throw new Error("tensor5d() requires shape to be provided when `values` are a flat array");return bn(r,t,n,e)}function rd(r,t,e){if(sr(r),t!=null&&t.length!==6)throw new Error("tensor6d() requires shape to have six numbers");var n=yn(r,e);if(n.length!==6&&n.length!==1)throw new Error("tensor6d() requires values to be number[][][][][][] or flat/TypedArray");if(n.length===1&&t==null)throw new Error("tensor6d() requires shape to be provided when `values` are a flat array");return bn(r,t=t||n,n,e)}function ad(r,t,e,n){return t===void 0&&(t=!0),N.makeVariable(r,t,e,n)}function ur(r,t){if(t===void 0&&(t="float32"),t==="complex64"){var e=ur(r,"float32"),n=_e(r,"float32");return He(e,n)}var a=_u(Z(r),t);return N.makeTensor(a,r,t)}function _e(r,t){if(t===void 0&&(t="float32"),t==="complex64"){var e=_e(r,"float32"),n=_e(r,"float32");return He(e,n)}var a=Nr(Z(r),t);return N.makeTensor(a,r,t)}function zt(r,t,e){return N.runKernelFunc(function(n){return n.fill(r,t,e)},{})}function od(r,t,e){if(e<=0)throw new Error("The number of values should be positive.");return N.runKernelFunc(function(n){return n.linspace(r,t,e)},{})}function la(r,t,e,n){if(e===void 0&&(e=1),n===void 0&&(n="float32"),e===0)throw new Error("Cannot have a step of zero");if(r===t||r<t&&e<0||t<r&&e>1)return _e([0],n);var a=Nr(Math.abs(Math.ceil((t-r)/e)),n);t<r&&e===1&&(e=-1),a[0]=r;for(var o=1;o<a.length;o++)a[o]=a[o-1]+e;return Fe(a,n)}var Tu=D({onesLike_:function(r){var t=_(r,"x","onesLike");if(t.dtype==="complex64"){var e=Tu(gt(t)),n=me(Mt(t));return He(e,n)}return N.runKernelFunc(function(a){return a.onesLike(t)},{$x:t},function(a,o){return{$x:function(){return me(a)}}})}}),me=D({zerosLike_:function(r){var t=_(r,"x","zerosLike");return N.runKernelFunc(function(e){return e.zerosLike(t)},{$x:t},function(e,n){return{$x:function(){return me(e)}}})}}),Me=D({concat_:function(r,t){t===void 0&&(t=0),E(r.length>=1,function(){return"Pass at least one tensor to concat"});var e=ca(r,"tensors","concat");e[0].dtype==="complex64"&&e.forEach(function(s){if(s.dtype!=="complex64")throw new Error(`Cannot concatenate complex64 tensors with a tensor
          with dtype `+s.dtype+". ")}),t=We(t,e[0].shape)[0];var n=ar(e.map(function(s){return s.shape}),t);if(Z(n)===0)return qe([],n);if((e=e.filter(function(s){return s.size>0})).length===1)return e[0];var a=e.map(function(s){return s.shape});td(a,t);var o=e,i={axis:t};return N.runKernelFunc(function(s){return s.concat(e,t)},o,function(s){var u=a.map(function(c){return c[t]});return ii(s,u,t).map(function(c){return function(){return c}})},"Concat",i)}}),id=D({concat1d_:function(r){return Me(r,0)}}),sd=D({concat2d_:function(r,t){return Me(r,t)}}),ud=D({concat3d_:function(r,t){return Me(r,t)}}),cd=D({concat4d_:function(r,t){return Me(r,t)}}),ii=D({split_:function(r,t,e){e===void 0&&(e=0);var n,a=_(r,"x","split");return e=We(e,a.shape)[0],typeof t=="number"?(E(a.shape[e]%t==0,function(){return"Number of splits must evenly divide the axis."}),n=new Array(t).fill(a.shape[e]/t)):(E(a.shape[e]===t.reduce(function(o,i){return o+i}),function(){return"The sum of sizes must match the size of the axis dimension."}),n=t),N.runKernelFunc(function(o){return o.split(a,n,e)},{$x:a},function(o){return{$x:function(){return Me(o,e)}}})}});function Pn(r,t){return r(t={exports:{}},t.exports),t.exports}var ld=Pn(function(r){(function(t,e,n){function a(s){var u,c=this,l=(u=4022871197,function(h){h=h.toString();for(var d=0;d<h.length;d++){var f=.02519603282416938*(u+=h.charCodeAt(d));f-=u=f>>>0,u=(f*=u)>>>0,u+=4294967296*(f-=u)}return 23283064365386963e-26*(u>>>0)});c.next=function(){var h=2091639*c.s0+23283064365386963e-26*c.c;return c.s0=c.s1,c.s1=c.s2,c.s2=h-(c.c=0|h)},c.c=1,c.s0=l(" "),c.s1=l(" "),c.s2=l(" "),c.s0-=l(s),c.s0<0&&(c.s0+=1),c.s1-=l(s),c.s1<0&&(c.s1+=1),c.s2-=l(s),c.s2<0&&(c.s2+=1),l=null}function o(s,u){return u.c=s.c,u.s0=s.s0,u.s1=s.s1,u.s2=s.s2,u}function i(s,u){var c=new a(s),l=u&&u.state,h=c.next;return h.int32=function(){return 4294967296*c.next()|0},h.double=function(){return h()+11102230246251565e-32*(2097152*h()|0)},h.quick=h,l&&(typeof l=="object"&&o(l,c),h.state=function(){return o(c,{})}),h}e&&e.exports?e.exports=i:n&&n.amd?n(function(){return i}):this.alea=i})(0,r,!1)}),hd=Pn(function(r){(function(t,e,n){function a(s){var u=this,c="";u.x=0,u.y=0,u.z=0,u.w=0,u.next=function(){var h=u.x^u.x<<11;return u.x=u.y,u.y=u.z,u.z=u.w,u.w^=u.w>>>19^h^h>>>8},s===(0|s)?u.x=s:c+=s;for(var l=0;l<c.length+64;l++)u.x^=0|c.charCodeAt(l),u.next()}function o(s,u){return u.x=s.x,u.y=s.y,u.z=s.z,u.w=s.w,u}function i(s,u){var c=new a(s),l=u&&u.state,h=function(){return(c.next()>>>0)/4294967296};return h.double=function(){do var d=((c.next()>>>11)+(c.next()>>>0)/4294967296)/2097152;while(d===0);return d},h.int32=c.next,h.quick=h,l&&(typeof l=="object"&&o(l,c),h.state=function(){return o(c,{})}),h}e&&e.exports?e.exports=i:n&&n.amd?n(function(){return i}):this.xor128=i})(0,r,!1)}),dd=Pn(function(r){(function(t,e,n){function a(s){var u=this,c="";u.next=function(){var h=u.x^u.x>>>2;return u.x=u.y,u.y=u.z,u.z=u.w,u.w=u.v,(u.d=u.d+362437|0)+(u.v=u.v^u.v<<4^h^h<<1)|0},u.x=0,u.y=0,u.z=0,u.w=0,u.v=0,s===(0|s)?u.x=s:c+=s;for(var l=0;l<c.length+64;l++)u.x^=0|c.charCodeAt(l),l==c.length&&(u.d=u.x<<10^u.x>>>4),u.next()}function o(s,u){return u.x=s.x,u.y=s.y,u.z=s.z,u.w=s.w,u.v=s.v,u.d=s.d,u}function i(s,u){var c=new a(s),l=u&&u.state,h=function(){return(c.next()>>>0)/4294967296};return h.double=function(){do var d=((c.next()>>>11)+(c.next()>>>0)/4294967296)/2097152;while(d===0);return d},h.int32=c.next,h.quick=h,l&&(typeof l=="object"&&o(l,c),h.state=function(){return o(c,{})}),h}e&&e.exports?e.exports=i:n&&n.amd?n(function(){return i}):this.xorwow=i})(0,r,!1)}),fd=Pn(function(r){(function(t,e,n){function a(s){var u=this;u.next=function(){var c,l,h=u.x,d=u.i;return c=h[d],l=(c^=c>>>7)^c<<24,l^=(c=h[d+1&7])^c>>>10,l^=(c=h[d+3&7])^c>>>3,l^=(c=h[d+4&7])^c<<7,c=h[d+7&7],l^=(c^=c<<13)^c<<9,h[d]=l,u.i=d+1&7,l},function(c,l){var h,d=[];if(l===(0|l))d[0]=l;else for(l=""+l,h=0;h<l.length;++h)d[7&h]=d[7&h]<<15^l.charCodeAt(h)+d[h+1&7]<<13;for(;d.length<8;)d.push(0);for(h=0;h<8&&d[h]===0;++h);for(h==8?d[7]=-1:d[h],c.x=d,c.i=0,h=256;h>0;--h)c.next()}(u,s)}function o(s,u){return u.x=s.x.slice(),u.i=s.i,u}function i(s,u){s==null&&(s=+new Date);var c=new a(s),l=u&&u.state,h=function(){return(c.next()>>>0)/4294967296};return h.double=function(){do var d=((c.next()>>>11)+(c.next()>>>0)/4294967296)/2097152;while(d===0);return d},h.int32=c.next,h.quick=h,l&&(l.x&&o(l,c),h.state=function(){return o(c,{})}),h}e&&e.exports?e.exports=i:n&&n.amd?n(function(){return i}):this.xorshift7=i})(0,r,!1)}),pd=Pn(function(r){(function(t,e,n){function a(s){var u=this;u.next=function(){var c,l,h=u.w,d=u.X,f=u.i;return u.w=h=h+1640531527|0,l=d[f+34&127],c=d[f=f+1&127],l^=l<<13,c^=c<<17,l^=l>>>15,c^=c>>>12,l=d[f]=l^c,u.i=f,l+(h^h>>>16)|0},function(c,l){var h,d,f,p,g,v=[],m=128;for(l===(0|l)?(d=l,l=null):(l+="\0",d=0,m=Math.max(m,l.length)),f=0,p=-32;p<m;++p)l&&(d^=l.charCodeAt((p+32)%l.length)),p===0&&(g=d),d^=d<<10,d^=d>>>15,d^=d<<4,d^=d>>>13,p>=0&&(g=g+1640531527|0,f=(h=v[127&p]^=d+g)==0?f+1:0);for(f>=128&&(v[127&(l&&l.length||0)]=-1),f=127,p=512;p>0;--p)d=v[f+34&127],h=v[f=f+1&127],d^=d<<13,h^=h<<17,d^=d>>>15,h^=h>>>12,v[f]=d^h;c.w=g,c.X=v,c.i=f}(u,s)}function o(s,u){return u.i=s.i,u.w=s.w,u.X=s.X.slice(),u}function i(s,u){s==null&&(s=+new Date);var c=new a(s),l=u&&u.state,h=function(){return(c.next()>>>0)/4294967296};return h.double=function(){do var d=((c.next()>>>11)+(c.next()>>>0)/4294967296)/2097152;while(d===0);return d},h.int32=c.next,h.quick=h,l&&(l.X&&o(l,c),h.state=function(){return o(c,{})}),h}e&&e.exports?e.exports=i:n&&n.amd?n(function(){return i}):this.xor4096=i})(0,r,!1)}),vd=Pn(function(r){(function(t,e,n){function a(s){var u=this,c="";u.next=function(){var h=u.b,d=u.c,f=u.d,p=u.a;return h=h<<25^h>>>7^d,d=d-f|0,f=f<<24^f>>>8^p,p=p-h|0,u.b=h=h<<20^h>>>12^d,u.c=d=d-f|0,u.d=f<<16^d>>>16^p,u.a=p-h|0},u.a=0,u.b=0,u.c=-1640531527,u.d=1367130551,s===Math.floor(s)?(u.a=s/4294967296|0,u.b=0|s):c+=s;for(var l=0;l<c.length+20;l++)u.b^=0|c.charCodeAt(l),u.next()}function o(s,u){return u.a=s.a,u.b=s.b,u.c=s.c,u.d=s.d,u}function i(s,u){var c=new a(s),l=u&&u.state,h=function(){return(c.next()>>>0)/4294967296};return h.double=function(){do var d=((c.next()>>>11)+(c.next()>>>0)/4294967296)/2097152;while(d===0);return d},h.int32=c.next,h.quick=h,l&&(typeof l=="object"&&o(l,c),h.state=function(){return o(c,{})}),h}e&&e.exports?e.exports=i:n&&n.amd?n(function(){return i}):this.tychei=i})(0,r,!1)}),En=Pn(function(r){(function(t,e){var n,a=this,o=256,i=6,s="random",u=e.pow(o,i),c=e.pow(2,52),l=2*c,h=o-1;function d(m,b,x){var y=[],w=g(function S(I,k){var F,T=[],W=typeof I;if(k&&W=="object")for(F in I)try{T.push(S(I[F],k-1))}catch{}return T.length?T:W=="string"?I:I+"\0"}((b=b==1?{entropy:!0}:b||{}).entropy?[m,v(t)]:m??function(){try{var S;return n&&(S=n.randomBytes)?S=S(o):(S=new Uint8Array(o),(a.crypto||a.msCrypto).getRandomValues(S)),v(S)}catch{var I=a.navigator,k=I&&I.plugins;return[+new Date,a,k,a.screen,v(t)]}}(),3),y),C=new f(y),R=function(){for(var S=C.g(i),I=u,k=0;S<c;)S=(S+k)*o,I*=o,k=C.g(1);for(;S>=l;)S/=2,I/=2,k>>>=1;return(S+k)/I};return R.int32=function(){return 0|C.g(4)},R.quick=function(){return C.g(4)/4294967296},R.double=R,g(v(C.S),t),(b.pass||x||function(S,I,k,F){return F&&(F.S&&p(F,C),S.state=function(){return p(C,{})}),k?(e[s]=S,I):S})(R,w,"global"in b?b.global:this==e,b.state)}function f(m){var b,x=m.length,y=this,w=0,C=y.i=y.j=0,R=y.S=[];for(x||(m=[x++]);w<o;)R[w]=w++;for(w=0;w<o;w++)R[w]=R[C=h&C+m[w%x]+(b=R[w])],R[C]=b;(y.g=function(S){for(var I,k=0,F=y.i,T=y.j,W=y.S;S--;)I=W[F=h&F+1],k=k*o+W[h&(W[F]=W[T=h&T+I])+(W[T]=I)];return y.i=F,y.j=T,k})(o)}function p(m,b){return b.i=m.i,b.j=m.j,b.S=m.S.slice(),b}function g(m,b){for(var x,y=m+"",w=0;w<y.length;)b[h&w]=h&(x^=19*b[h&w])+y.charCodeAt(w++);return v(b)}function v(m){return String.fromCharCode.apply(0,m)}if(e["seed"+s]=d,g(e.random(),t),r.exports){r.exports=d;try{n=require("crypto")}catch{}}})([],Math)});En.alea=ld,En.xor128=hd,En.xorwow=dd,En.xorshift7=fd,En.xor4096=pd,En.tychei=vd;var Aa=En.alea,si=function(){function r(t,e,n,a,o){this.mean=t,this.stdDev=e,this.dtype=n,this.nextVal=NaN,this.truncated=a,this.truncated&&(this.upper=this.mean+2*this.stdDev,this.lower=this.mean-2*this.stdDev);var i=o||Math.random();this.random=Aa(i.toString())}return r.prototype.nextValue=function(){if(!isNaN(this.nextVal)){var t=this.nextVal;return this.nextVal=NaN,t}for(var e,n,a=!1;!a;){var o=void 0,i=void 0,s=void 0;do s=(o=2*this.random()-1)*o+(i=2*this.random()-1)*i;while(s>=1||s===0);var u=Math.sqrt(-2*Math.log(s)/s);e=this.mean+this.stdDev*o*u,n=this.mean+this.stdDev*i*u,this.truncated&&!this.isValidTruncated(e)||(a=!0)}return this.truncated&&!this.isValidTruncated(n)||(this.nextVal=this.convertValue(n)),this.convertValue(e)},r.prototype.convertValue=function(t){return this.dtype==null||this.dtype==="float32"?t:Math.round(t)},r.prototype.isValidTruncated=function(t){return t<=this.upper&&t>=this.lower},r}(),gd=function(){function r(t,e,n,a){this.alpha=t,this.beta=1/e,this.dtype=n;var o=a||Math.random();this.randu=Aa(o.toString()),this.randn=new si(0,1,n,!1,this.randu()),this.d=t<1?t+2/3:t-1/3,this.c=1/Math.sqrt(9*this.d)}return r.prototype.nextValue=function(){for(var t,e,n,a,o,i;;){do a=this.randn.nextValue(),i=1+this.c*a;while(i<=0);if(i*=i*i,e=1-.331*(t=a*a)*t,n=.5*t+this.d*(1-i+Math.log(i)),(o=this.randu())<e||Math.log(o)<n)break}return i=1/this.beta*this.d*i,this.alpha<1&&(i*=Math.pow(this.randu(),1/this.alpha)),this.convertValue(i)},r.prototype.convertValue=function(t){return this.dtype==="float32"?t:Math.round(t)},r}(),md=function(){function r(t,e,n,a){var o=this;if(t===void 0&&(t=0),e===void 0&&(e=1),this.canReturnFloat=function(){return o.dtype==null||o.dtype==="float32"},this.min=t,this.range=e-t,this.dtype=n,a==null&&(a=Math.random()),typeof a=="number"&&(a=a.toString()),!this.canReturnFloat()&&this.range<=1)throw new Error("The difference between "+t+" - "+e+" <= 1 and dtype is not float");this.random=Aa(a)}return r.prototype.convertValue=function(t){return this.canReturnFloat()?t:Math.round(t)},r.prototype.nextValue=function(){return this.convertValue(this.min+this.range*this.random())},r}();function oe(r,t,e){return t===void 0&&(t="float32"),t=t||"float32",Eu(r),new xr(r,t,e)}function yd(r,t){t===void 0&&(t=!1)}var Nu=D({batchToSpaceND_:function(r,t,e){var n=_(r,"x","batchToSpaceND"),a=t.reduce(function(o,i){return o*i});return E(n.rank>=1+t.length,function(){return"input rank is "+n.rank+" but should be > than blockShape.length "+t.length}),E(e.length===t.length,function(){return"crops.length is "+e.length+" but should be equal to blockShape.length  "+t.length}),E(n.shape[0]%a==0,function(){return"input tensor batch is "+n.shape[0]+" but is not divisible by the product of the elements of blockShape "+t.join(" * ")+" === "+a}),N.runKernelFunc(function(o){return o.batchToSpaceND(n,t,e)},{$x:n},function(o){return{$x:function(){return o.spaceToBatchND(t,e)}}})}}),bd=D({broadcastTo_:function(r,t){var e=_(r,"broadcastTo","x"),n=e.shape;if(t.some(function(u){return!(u>0)||u%1!=0}))throw new Error("broadcastTo(): Invalid broadcast shape ["+t+"].");if(t.length<e.rank)throw new Error("broadcastTo(): shape.length="+t.length+" < input.rank="+e.rank+".");if(t.length>e.rank){for(var a=e.shape.slice();a.length<t.length;)a.unshift(1);e=e.reshape(a)}for(var o=Array.from(t),i=t.length-1;i>=0;i--)if(e.shape[i]===t[i])o[i]=1;else if(e.shape[i]!==1)throw new Error("broadcastTo(): ["+n+"] cannot be broadcast to ["+t+"].");var s=o.map(function(u,c){return u>1?c:-1}).filter(function(u){return u>=0});return s.length===0?e.clone():N.runKernelFunc(function(u){return u.tile(e,o)},{input:e},function(u){return{input:function(){return u.sum(s,!0)}}})}}),xd=D({cast_:function(r,t){var e=_(r,"x","cast");if(!dh(t))throw new Error("Failed to cast to unknown dtype "+t);if(t==="string"&&e.dtype!=="string"||t!=="string"&&e.dtype==="string")throw new Error("Only strings can be casted to strings");var n={dtype:t};return N.runKernelFunc(function(a){return a.cast(e,t)},{x:e},function(a){return{x:function(){return a.clone()}}},"Cast",n)}}),wd=D({clone_:function(r){var t=_(r,"x","clone",null);return N.runKernelFunc(function(){return N.makeTensorFromDataId(t.dataId,t.shape,t.dtype)},{$x:t},function(e){return{$x:function(){return e.toFloat()}}})}}),Cd=D({cumsum_:function(r,t,e,n){t===void 0&&(t=0),e===void 0&&(e=!1),n===void 0&&(n=!1);var a=_(r,"x","cumsum"),o=Gt([t|=0],a.rank),i=a;o!=null&&(i=a.transpose(o));var s=Ht(1,a.rank)[0],u=N.runKernelFunc(function(c){return c.cumsum(i,s,e,n)},{permutedX:i},function(c){return{permutedX:function(){return c.cumsum(t,e,!n)}}});return o!=null&&(u=u.transpose(o)),u}}),_d=D({depthToSpace_:function(r,t,e){e===void 0&&(e="NHWC");var n=_(r,"x","depthToSpace"),a=e==="NHWC"?n.shape[1]:n.shape[2],o=e==="NHWC"?n.shape[2]:n.shape[3],i=e==="NHWC"?n.shape[3]:n.shape[1];return E(a*t>=0,function(){return`Negative dimension size caused by overflow when multiplying
      `+a+" and "+t+`  for depthToSpace with input shape
      `+n.shape}),E(o*t>=0,function(){return`Negative dimension size caused by overflow when multiplying
      `+o+" and "+t+` for depthToSpace with input shape
          `+n.shape}),E(i%(t*t)==0,function(){return"Dimension size must be evenly divisible by "+t*t+" but is "+i+" for depthToSpace with input shape "+n.shape}),N.runKernelFunc(function(s){return s.depthToSpace(n,t,e)},{$x:n})}}),vt=D({expandDims_:function(r,t){t===void 0&&(t=0);var e=_(r,"x","expandDims",null);E(t<=e.rank,function(){return"Axis must be <= rank of the tensor"});var n=e.shape.slice();return t<0&&(E(-(e.rank+1)<=t,function(){return"Axis must be in the interval ["+-(e.rank+1)+", "+e.rank+"]"}),t=e.rank+t+1),n.splice(t,0,1),Ct(e,n)}}),Fu=D({eye_:function(r,t,e,n){n===void 0&&(n="float32"),t==null&&(t=r);for(var a=oe([r,t],n),o=r<=t?r:t,i=0;i<o;++i)a.set(1,i,i);var s=a.toTensor().as2D(r,t);if(e==null)return s;if(e.length===1)return $n(vt(s,0),[e[0],1,1]);if(e.length===2)return $n(vt(vt(s,0),0),[e[0],e[1],1,1]);if(e.length===3)return $n(vt(vt(vt(s,0),0),0),[e[0],e[1],e[2],1,1]);throw new Error("eye() currently supports only 1D and 2D batchShapes, but received "+e.length+"D.")}}),Ed=D({multinomial_:function(r,t,e,n){n===void 0&&(n=!1);var a=_(r,"logits","multinomial"),o=a.size,i=a.rank;if(o<2)throw new Error("Error in multinomial: you need at least 2 outcomes, but got "+o+".");if(i>2)throw new Error("Rank of probabilities must be 1 or 2, but is "+i);e=e||Math.random();var s=i===1?a.as2D(1,-1):a,u=N.runKernelFunc(function(c){return c.multinomial(s,n,t,e)},{logits2D:s});return i===1?u.as1D():u}}),Lo=D({oneHot_:function(r,t,e,n){if(e===void 0&&(e=1),n===void 0&&(n=0),t<2)throw new Error("Error in oneHot: depth must be >=2, but it is "+t);var a=_(r,"indices","oneHot","int32"),o=a.shape.concat([t]);return a=a.flatten(),N.runKernelFunc(function(i){return i.oneHot(a,t,e,n)},{$indices:a},function(i){return{$indices:function(){return _e(a.shape,"float32")}}}).reshape(o)}}),Mn=D({pad_:function(r,t,e){e===void 0&&(e=0);var n=_(r,"x","pad");if(n.rank===0)throw new Error("pad(scalar) is not defined. Pass non-scalar to pad");var a={paddings:t,constantValue:e};return N.runKernelFunc(function(o){return o.pad(n,t,e)},{x:n},function(o){var i=t.map(function(s){return s[0]});return{x:function(){return o.slice(i,n.shape)}}},"PadV2",a)}}),Id=D({pad1d_:function(r,t,e){return e===void 0&&(e=0),E(t.length===2,function(){return"Invalid number of paddings. Must be length of 2."}),Mn(r,[t],e)}}),kd=D({pad2d_:function(r,t,e){return e===void 0&&(e=0),E(t.length===2&&t[0].length===2&&t[1].length===2,function(){return"Invalid number of paddings. Must be length of 2 each."}),Mn(r,t,e)}}),Sd=D({pad3d_:function(r,t,e){return e===void 0&&(e=0),E(t.length===3&&t[0].length===2&&t[1].length===2&&t[2].length===2,function(){return"Invalid number of paddings. Must be length of 2 each."}),Mn(r,t,e)}}),Rd=D({pad4d_:function(r,t,e){return e===void 0&&(e=0),E(t.length===4&&t[0].length===2&&t[1].length===2&&t[2].length===2&&t[3].length===2,function(){return"Invalid number of paddings. Must be length of 2 each."}),Mn(r,t,e)}}),Ad=D({rand_:function(r,t,e){var n=Z(r),a=null;if(e==null||e==="float32")a=new Float32Array(n);else if(e==="int32")a=new Int32Array(n);else{if(e!=="bool")throw new Error("Unknown data type "+e);a=new Uint8Array(n)}for(var o=0;o<n;o++)a[o]=t();return N.makeTensor(a,r,e)}}),Dd=D({randomNormal_:function(r,t,e,n,a){if(t===void 0&&(t=0),e===void 0&&(e=1),n!=null&&n==="bool")throw new Error("Unsupported data type "+n);for(var o=new si(t,e,n,!1,a),i=oe(r,n),s=0;s<i.values.length;s++)i.values[s]=o.nextValue();return i.toTensor()}}),Td=D({randomGamma_:function(r,t,e,n,a){if(e===void 0&&(e=1),n===void 0&&(n="float32"),e==null&&(e=1),n==null&&(n="float32"),n!=="float32"&&n!=="int32")throw new Error("Unsupported data type "+n);for(var o=new gd(t,e,n,a),i=oe(r,n),s=0;s<i.values.length;s++)i.values[s]=o.nextValue();return i.toTensor()}}),Pu=D({randomUniform_:function(r,t,e,n,a){t===void 0&&(t=0),e===void 0&&(e=1),n===void 0&&(n="float32");for(var o=oe(r,n),i=new md(t,e,null,a),s=0;s<o.values.length;s++)o.values[s]=i.nextValue();return o.toTensor()}}),Ct=D({reshape_:function(r,t){var e=_(r,"x","reshape",null);t=lh(t,e.size),E(e.size===Z(t),function(){return"new shape and old shape must have the same number of elements."});var n={shape:t};return N.runKernelFunc(function(a){return a.reshape(e,t)},{x:e},function(a){return{x:function(){return a.reshape(e.shape)}}},"Reshape",n)}}),Mu=D({spaceToBatchND_:function(r,t,e){var n=_(r,"x","spaceToBatchND");return E(n.rank>=1+t.length,function(){return"input rank "+n.rank+" should be > than [blockShape] "+t.length}),E(e.length===t.length,function(){return"paddings.shape[0] "+e.length+" must be equal to [blockShape] "+t.length}),E(n.shape.reduce(function(a,o,i){return i>0&&i<=t.length?a&&(o+e[i-1][0]+e[i-1][1])%t[i-1]==0:a},!0),function(){return"input spatial dimensions "+n.shape.slice(1)+" with paddings "+e.toString()+" must be divisible by blockShapes "+t.toString()}),N.runKernelFunc(function(a){return a.spaceToBatchND(n,t,e)},{$x:n},function(a){return{$x:function(){return a.batchToSpaceND(t,e)}}})}}),Ou=D({squeeze_:function(r,t){var e=_(r,"x","squeeze");return Ct(e,In(e.shape,t).newShape)}}),pt=D({stack_:function(r,t){t===void 0&&(t=0);var e=ca(r,"tensors","stack");if(E(e.length>=1,function(){return"Pass at least one tensor to tf.stack"}),e.length===1)return e[0].expandDims(t);var n=e[0].rank,a=e[0].shape,o=e[0].dtype;E(t<=n,function(){return"Axis must be <= rank of the tensor"}),e.forEach(function(s){xe(a,s.shape,"All tensors passed to stack must have matching shapes")}),e.forEach(function(s){E(o===s.dtype,function(){return"All tensors passed to stack must have matching dtypes"})});var i=e.map(function(s){return s.expandDims(t)});return Me(i,t)}}),$n=D({tile_:function(r,t){var e=_(r,"x","tile",null);E(e.rank===t.length,function(){return"Error in transpose: rank of input "+e.rank+" must match length of reps "+t+"."});var n=[e],a={reps:t};return N.runKernelFunc(function(o,i){var s=o.tile(e,t);return i([e]),s},{x:e},function(o,i){var s=i[0];return{x:function(){var u=me(s);if(s.rank===1)for(var c=0;c<t[0];++c)u=u.add(o.slice([c*s.shape[0]],[s.shape[0]]));else if(s.rank===2)for(c=0;c<t[0];++c)for(var l=0;l<t[1];++l)u=u.add(o.slice([c*s.shape[0],l*s.shape[1]],[s.shape[0],s.shape[1]]));else if(s.rank===3)for(c=0;c<t[0];++c)for(l=0;l<t[1];++l)for(var h=0;h<t[2];++h)u=u.add(o.slice([c*s.shape[0],l*s.shape[1],h*s.shape[2]],[s.shape[0],s.shape[1],s.shape[2]]));else{if(s.rank!==4)throw new Error("Gradient for tile operation is not implemented for rank-"+s.rank+" tensors yet.");for(c=0;c<t[0];++c)for(l=0;l<t[1];++l)for(h=0;h<t[2];++h)for(var d=0;d<t[3];++d)u=u.add(o.slice([c*s.shape[0],l*s.shape[1],h*s.shape[2],d*s.shape[3]],[s.shape[0],s.shape[1],s.shape[2],s.shape[3]]))}return u}}},"Tile",a,n)}}),Nd=D({truncatedNormal_:function(r,t,e,n,a){if(t===void 0&&(t=0),e===void 0&&(e=1),n!=null&&n==="bool")throw new Error("Unsupported data type "+n);for(var o=new si(t,e,n,!0,a),i=oe(r,n),s=0;s<i.values.length;s++)i.values[s]=o.nextValue();return i.toTensor()}}),Oe=D({unstack_:function(r,t){t===void 0&&(t=0),t=t||0;var e=_(r,"x","unstack");E(t>=-e.shape.length&&t<e.shape.length,function(){return"Axis = "+t+" is not in [-"+e.shape.length+", "+e.shape.length+")"}),t<0&&(t+=e.shape.length);var n={axis:t};return N.runKernelFunc(function(a){return a.unstack(e,t)},{x:e},function(a){return{x:function(){return pt(a,t)}}},"Unpack",n)}}),Fd=function(r,t){return Y(this,void 0,void 0,function(){var e,n,a,o,i,s,u,c,l,h;return $(this,function(d){switch(d.label){case 0:return e=_(r,"x","setdiff1d"),n=_(t,"y","setdiff1d"),E(e.dtype===n.dtype,function(){return"x and y should have the same dtype, but got x ("+e.dtype+") and y ("+n.dtype+")."}),E(e.rank===1,function(){return"x should be 1D tensor, but got x ("+e.shape+")."}),E(n.rank===1,function(){return"y should be 1D tensor, but got y ("+n.shape+")."}),[4,e.data()];case 1:return a=d.sent(),[4,n.data()];case 2:for(o=d.sent(),i=new Set(o),s=0,l=0;l<a.length;l++)i.has(a[l])||s++;for(u=new xr([s],e.dtype),c=new xr([s],"int32"),l=0,h=0;l<a.length;l++)i.has(a[l])||(u.values[h]=a[l],c.values[h]=l,h++);return[2,[u.toTensor(),c.toTensor()]]}})})};function ha(r,t,e,n){n===void 0&&(n=!0);var a=[];if(n)(a=a.concat(t.slice(0))).push(r[0]/e),a=a.concat(r.slice(1));else{a=a.concat(r[0]);for(var o=t.length,i=0;i<o;++i)a=a.concat([r[i+1]/t[i],t[i]]);a=a.concat(r.slice(o+1))}return a}function da(r,t,e){e===void 0&&(e=!0);var n=[];if(e){n.push(t);for(var a=t+1;a<r;++a)a<=2*t?(n.push(a),n.push(a-(t+1))):n.push(a)}else{var o=[],i=[];for(a=1;a<r;++a)a>=2*t+1||a%2==1?i.push(a):o.push(a);n.push.apply(n,o),n.push(0),n.push.apply(n,i)}return n}function fa(r,t,e,n){n===void 0&&(n=!0);var a=[];n?a.push(r[0]/e):a.push(r[0]*e);for(var o=1;o<r.length;++o)o<=t.length?n?a.push(t[o-1]*r[o]):a.push(r[o]/t[o-1]):a.push(r[o]);return a}function Bu(r,t){for(var e=[0],n=0;n<t;++n)e.push(r[n][0]);return e}function Lu(r,t,e){for(var n=r.slice(0,1),a=0;a<e;++a)n.push(r[a+1]-t[a][0]-t[a][1]);return n}function Wu(r,t){if(r.rank<1)throw new Error("tf.gatherND() expects the input to be rank 1 or higher, but the rank was "+r.rank+".");if(t.rank<1)throw new Error("tf.gatherND() expects the indices to be rank 1 or higher, but the rank was "+t.rank+".");if(t.dtype!=="int32")throw new Error("tf.gatherND() expects the indices to be int32 type, but the dtype was "+t.dtype+".");if(t.shape[t.rank-1]>r.rank)throw new Error("index innermost dimension length must be <= tensor rank; saw: "+t.shape[t.rank-1]+" vs. "+r.rank);if(r.size===0)throw new Error("Requested more than 0 entries, but input is empty. Input shape: "+r.shape+".");for(var e=t.shape,n=e[e.length-1],a=1,o=0;o<e.length-1;++o)a*=e[o];var i=r.shape,s=e.slice();s.pop();var u=1;for(o=n;o<r.rank;++o)u*=i[o],s.push(i[o]);var c=Wt(r.shape).map(function(l){return l/u}).concat([1]).slice(0,n);return[s,a,u,c]}var zu=30;function so(r){return r<=zu?r:No(r,Math.floor(Math.sqrt(r)))}function Pd(r,t,e){var n=t.rank>1?t.shape[t.rank-1]:1,a=t.rank>1?t.rank-1:1,o="Must have updates.shape = indices.shape[:batchDim] + shape[sliceDim:], got updates.shape: "+e.shape+", indices.shape: "+t.shape+", shape: "+r+", sliceDim: "+n+", and batchDim: "+a+".";if(e.rank<a)throw new Error(o+" update.rank < "+a+". ");if(r.length<n+(e.rank-a))throw new Error(o+" Output shape length < "+(n+(e.rank-a)));if(e.rank!==a+r.length-n)throw new Error(o+" update.rank != "+(a+r.length-n));for(var i=0;i<a;++i)if(e.shape[i]!==t.shape[i])throw new Error(o+" updates.shape["+i+"] ("+e.shape[i]+") != indices.shape["+i+"] ("+t.shape[i]+").");for(i=0;i<e.rank-a;++i)if(e.shape[i+a]!==r[i+n])throw new Error(o+" updates.shape["+(i+a)+"] ("+e.shape[i+a]+") != shape["+(i+a)+"] ("+r[i+a]+")")}function Md(r,t,e){if(t.rank<1)throw new Error("tf.scatterND() expects the indices to be rank 1 or higher, but the rank was "+t.rank+".");if(r.rank<1)throw new Error("tf.scatterND() expects the updates to be rank 1 or higher, but the rank was "+r.rank+".");if(t.dtype!=="int32")throw new Error("The dtype of 'indices' should be int32, but got dtype: "+t.dtype);if(e.length<1)throw new Error("Output rank must be greater or equal to 1, but got shape: "+e);if(e.length===0){if(t.size===0)throw new Error("Indices specified for empty output. indices shape: "+t.shape);if(r.size===0)throw new Error("Updates specified for empty output. updates shape: "+r.shape)}Pd(e,t,r)}function pa(r,t,e){for(var n=t.shape.length,a=n>1?t.shape[n-1]:1,o=e.length,i=1,s=a;s<o;++s)i*=e[s];var u=a<1?1:a;return{sliceRank:a,numUpdates:Z(t.shape)/u,sliceSize:i,strides:Wt(e.slice(0,a)).concat([1]),outputSize:Z(e)}}function Od(r,t,e){E(r.rank===t.length,function(){return"Error in slice"+r.rank+"D: Length of begin "+t+" must match the rank of the array ("+r.rank+")."}),E(r.rank===e.length,function(){return"Error in slice"+r.rank+"D: Length of size "+e+" must match the rank of the array ("+r.rank+")."});for(var n=function(o){E(t[o]+e[o]<=r.shape[o],function(){return"Error in slice"+r.rank+"D: begin["+o+"] + size["+o+"] ("+(t[o]+e[o])+") would overflow input.shape["+o+"] ("+r.shape[o]+")"})},a=0;a<r.rank;++a)n(a)}function ws(r){for(var t=[],e=0;r>0;)1&r&&t.push(e),r/=2,e++;return t}function ui(r,t,e){for(var n=[],a=0;a<r.length;a++)n[a]=Math.ceil((t[a]-r[a])/e[a]);return n}function Bd(r,t,e,n,a){var o=t[a],i=e[a]||1;(r&1<<a||o==null)&&(o=i>0?Number.MIN_SAFE_INTEGER:Number.MAX_SAFE_INTEGER);var s=n[a];return o<0&&(o+=s),o=Ao(0,o,s-1)}function Ld(r,t,e,n,a){var o=t[a],i=e[a]||1;(r&1<<a||o==null)&&(o=i>0?Number.MAX_SAFE_INTEGER:Number.MIN_SAFE_INTEGER);var s=n[a];return o<0&&(o+=s),o=i>0?Ao(0,o,s):Ao(-1,o,s-1)}function Uu(r,t,e){for(var n=e.length,a=0;a<e.length;a++)if(e[a]>1){n=a;break}for(a=n+1;a<e.length;a++)if(t[a]>0||e[a]!==r[a])return!1;return!0}function Vu(r,t){for(var e=r.length>0?r[r.length-1]:1,n=0;n<r.length-1;n++)e+=r[n]*t[n];return e}function Wd(r,t){E(To(r),function(){return"The f passed in variableGrads(f) must be a function"}),E(t==null||Array.isArray(t)&&t.every(function(l){return l instanceof rr}),function(){return"The varList passed in variableGrads(f, varList) must be an array of variables"});var e=t!=null;if(!e)for(var n in t=[],N.registeredVariables)t.push(N.registeredVariables[n]);var a=e?t.filter(function(l){return!l.trainable}):null,o=t.length;E((t=t.filter(function(l){return l.trainable})).length>0,function(){return"variableGrads() expects at least one of the input variables to be trainable, but none of the "+o+" variables is trainable."});var i=N.gradients(r,t,null,!0),s=i.value,u=i.grads;E(u.some(function(l){return l!=null}),function(){return"Cannot find a connection between any variable and the result of the loss function y=f(x). Please make sure the operations that use variables are inside the function f passed to minimize()."}),E(s.rank===0,function(){return"The f passed in variableGrads(f) must return a scalar, but it returned a rank-"+s.rank+" tensor"});var c={};return t.forEach(function(l,h){u[h]!=null&&(c[l.name]=u[h])}),a!=null&&a.forEach(function(l){return c[l.name]=null}),{value:s,grads:c}}function Da(r){return N.customGrad(r)}var en=D({softmax_:function(r,t){t===void 0&&(t=-1);var e=_(r,"logits","softmax","float32");if(t===-1&&(t=e.rank-1),t!==e.rank-1)throw Error("Softmax along a non-last dimension is not yet supported. Logits was rank "+e.rank+" and dim was "+t);return N.runKernelFunc(function(n,a){var o=n.softmax(e,t);return a([o]),o},{logits:e},function(n,a){var o=a[0],i=n.mul(o);return{logits:function(){return i.sub(i.sum([t],!0).mul(o))}}},"Softmax",{dim:t},[],[!0])}}),zd=D({logSoftmax_:function(r,t){t===void 0&&(t=-1);var e=_(r,"logits","logSoftmax");if(t===-1&&(t=e.rank-1),t!==e.rank-1)throw Error("Log Softmax along a non-last dimension is not yet supported. Logits was rank "+e.rank+" and axis was "+t);return Da(function(n,a){var o=n.max(t,!0),i=n.sub(o),s=i.toFloat().sub(i.exp().sum(t,!0).log());return a([s]),{value:s,gradFunc:function(u,c){var l=c[0].exp();return u.sub(u.sum(t,!0).mul(l))}}})(e)}}),Gu=function(){function r(t,e){this.backend=t,this.dataMover=e,this.data=new WeakMap,this.dataIdsCount=0}return r.prototype.get=function(t){return this.data.has(t)||this.dataMover.moveData(this.backend,t),this.data.get(t)},r.prototype.set=function(t,e){this.dataIdsCount++,this.data.set(t,e)},r.prototype.has=function(t){return this.data.has(t)},r.prototype.delete=function(t){return this.dataIdsCount--,this.data.delete(t)},r.prototype.numDataIds=function(){return this.dataIdsCount},r}(),Hu=function(){function r(){}return r.prototype.time=function(t){return P("time")},r.prototype.read=function(t){return P("read")},r.prototype.readSync=function(t){return P("readSync")},r.prototype.numDataIds=function(){return P("numDataIds")},r.prototype.disposeData=function(t){return P("disposeData")},r.prototype.write=function(t,e,n){return P("write")},r.prototype.move=function(t,e,n,a){return P("move")},r.prototype.memory=function(){return P("memory")},r.prototype.floatPrecision=function(){return P("floatPrecision")},r.prototype.epsilon=function(){return this.floatPrecision()===32?1e-7:1e-4},r.prototype.batchMatMul=function(t,e,n,a){return P("batchMatMul")},r.prototype.fusedBatchMatMul=function(t){return t.a,t.b,t.transposeA,t.transposeB,t.bias,t.activation,t.preluActivationWeights,P("fusedBatchMatMul")},r.prototype.slice=function(t,e,n){return P("slice")},r.prototype.stridedSlice=function(t,e,n,a){return P("stridedSlice")},r.prototype.unstack=function(t,e){return P("unstack")},r.prototype.reverse=function(t,e){return P("reverse")},r.prototype.concat=function(t,e){return P("concat")},r.prototype.neg=function(t){return P("neg")},r.prototype.add=function(t,e){return P("add")},r.prototype.addN=function(t){return P("addN")},r.prototype.subtract=function(t,e){return P("subtract")},r.prototype.multiply=function(t,e){return P("multiply")},r.prototype.realDivide=function(t,e){return P("realDivide")},r.prototype.floorDiv=function(t,e){return P("floorDiv")},r.prototype.sum=function(t,e){return P("sum")},r.prototype.prod=function(t,e){return P("prod")},r.prototype.unsortedSegmentSum=function(t,e,n){return P("unsortedSegmentSum")},r.prototype.argMin=function(t,e){return P("argMin")},r.prototype.argMax=function(t,e){return P("argMax")},r.prototype.equal=function(t,e){return P("equal")},r.prototype.notEqual=function(t,e){return P("notEqual")},r.prototype.less=function(t,e){return P("less")},r.prototype.lessEqual=function(t,e){return P("lessEqual")},r.prototype.greater=function(t,e){return P("greater")},r.prototype.greaterEqual=function(t,e){return P("greaterEqual")},r.prototype.logicalNot=function(t){return P("logicalNot")},r.prototype.logicalAnd=function(t,e){return P("logicalAnd")},r.prototype.logicalOr=function(t,e){return P("logicalOr")},r.prototype.where=function(t){return P("where")},r.prototype.select=function(t,e,n){return P("select")},r.prototype.topk=function(t,e,n){return P("topk")},r.prototype.min=function(t,e){return P("min")},r.prototype.minimum=function(t,e){return P("minimum")},r.prototype.mod=function(t,e){return P("mod")},r.prototype.max=function(t,e){return P("max")},r.prototype.maximum=function(t,e){return P("maximum")},r.prototype.all=function(t,e){return P("all")},r.prototype.any=function(t,e){return P("any")},r.prototype.squaredDifference=function(t,e){return P("squaredDifference")},r.prototype.ceil=function(t){return P("ceil")},r.prototype.floor=function(t){return P("floor")},r.prototype.round=function(t){return P("round")},r.prototype.sign=function(t){return P("sign")},r.prototype.isNaN=function(t){return P("isNaN")},r.prototype.isInf=function(t){return P("isInf")},r.prototype.isFinite=function(t){return P("isFinite")},r.prototype.pow=function(t,e){return P("pow")},r.prototype.exp=function(t){return P("exp")},r.prototype.expm1=function(t){return P("expm1")},r.prototype.softmax=function(t,e){return P("softmax")},r.prototype.log=function(t){return P("log")},r.prototype.log1p=function(t){return P("log1p")},r.prototype.sqrt=function(t){return P("sqrt")},r.prototype.rsqrt=function(t){return P("rsqrt")},r.prototype.square=function(t){return P("square")},r.prototype.reciprocal=function(t){return P("reciprocal")},r.prototype.relu=function(t){return P("relu")},r.prototype.relu6=function(t){return P("relu6")},r.prototype.prelu=function(t,e){return P("prelu")},r.prototype.elu=function(t){return P("elu")},r.prototype.eluDer=function(t,e){return P("eluDer")},r.prototype.selu=function(t){return P("selu")},r.prototype.int=function(t){return P("int")},r.prototype.clip=function(t,e,n){return P("clip")},r.prototype.abs=function(t){return P("abs")},r.prototype.complexAbs=function(t){return P("complexAbs")},r.prototype.sigmoid=function(t){return P("sigmoid")},r.prototype.softplus=function(t){return P("softplus")},r.prototype.sin=function(t){return P("sin")},r.prototype.cos=function(t){return P("cos")},r.prototype.tan=function(t){return P("tan")},r.prototype.asin=function(t){return P("asin")},r.prototype.acos=function(t){return P("acos")},r.prototype.atan=function(t){return P("atan")},r.prototype.atan2=function(t,e){return P("atan2")},r.prototype.sinh=function(t){return P("sinh")},r.prototype.cosh=function(t){return P("cosh")},r.prototype.tanh=function(t){return P("tanh")},r.prototype.asinh=function(t){return P("asinh")},r.prototype.acosh=function(t){return P("acosh")},r.prototype.atanh=function(t){return P("atanh")},r.prototype.erf=function(t){return P("erf")},r.prototype.step=function(t,e){return P("step")},r.prototype.fusedConv2d=function(t){return t.input,t.filter,t.convInfo,t.bias,t.activation,t.preluActivationWeights,P("fusedConv2d")},r.prototype.conv2d=function(t,e,n){return P("conv2d")},r.prototype.conv2dDerInput=function(t,e,n){return P("conv2dDerInput")},r.prototype.conv2dDerFilter=function(t,e,n){return P("conv2dDerFilter")},r.prototype.fusedDepthwiseConv2D=function(t){return t.input,t.filter,t.convInfo,t.bias,t.activation,t.preluActivationWeights,P("fusedDepthwiseConv2D")},r.prototype.depthwiseConv2D=function(t,e,n){return P("depthwiseConv2D")},r.prototype.depthwiseConv2DDerInput=function(t,e,n){return P("depthwiseConv2DDerInput")},r.prototype.depthwiseConv2DDerFilter=function(t,e,n){return P("depthwiseConv2DDerFilter")},r.prototype.conv3d=function(t,e,n){return P("conv3d")},r.prototype.conv3dDerInput=function(t,e,n){return P("conv3dDerInput")},r.prototype.conv3dDerFilter=function(t,e,n){return P("conv3dDerFilter")},r.prototype.maxPool=function(t,e){return P("maxPool")},r.prototype.maxPoolBackprop=function(t,e,n,a){return P("maxPoolBackprop")},r.prototype.avgPool=function(t,e){return P("avgPool")},r.prototype.avgPoolBackprop=function(t,e,n){return P("avgPoolBackprop")},r.prototype.avgPool3d=function(t,e){return P("avgPool3d")},r.prototype.avgPool3dBackprop=function(t,e,n){return P("avgPool3dBackprop")},r.prototype.maxPool3d=function(t,e){return P("maxPool3d")},r.prototype.maxPool3dBackprop=function(t,e,n,a){return P("maxPool3dBackprop")},r.prototype.reshape=function(t,e){return P("reshape")},r.prototype.cast=function(t,e){return P("cast")},r.prototype.tile=function(t,e){return P("tile")},r.prototype.pad=function(t,e,n){return P("pad")},r.prototype.transpose=function(t,e){return P("transpose")},r.prototype.gather=function(t,e,n){return P("gather")},r.prototype.gatherND=function(t,e){return P("gatherND")},r.prototype.scatterND=function(t,e,n){return P("scatterND")},r.prototype.batchToSpaceND=function(t,e,n){return P("batchToSpaceND")},r.prototype.spaceToBatchND=function(t,e,n){return P("spaceToBatchND")},r.prototype.resizeBilinear=function(t,e,n,a){return P("resizeBilinear")},r.prototype.resizeBilinearBackprop=function(t,e,n){return P("resizeBilinearBackprop")},r.prototype.resizeNearestNeighbor=function(t,e,n,a){return P("resizeNearestNeighbor")},r.prototype.resizeNearestNeighborBackprop=function(t,e,n){return P("resizeNearestNeighborBackprop")},r.prototype.batchNormalization=function(t,e,n,a,o,i){return P("batchNormalization")},r.prototype.localResponseNormalization4D=function(t,e,n,a,o){return P("localResponseNormalization4D")},r.prototype.LRNGrad=function(t,e,n,a,o,i,s){return P("LRNGrad")},r.prototype.multinomial=function(t,e,n,a){return P("multinomial")},r.prototype.oneHot=function(t,e,n,a){return P("oneHot")},r.prototype.cumsum=function(t,e,n,a){return P("cumsum")},r.prototype.nonMaxSuppression=function(t,e,n,a,o){return P("nonMaxSuppression")},r.prototype.fft=function(t){return P("fft")},r.prototype.ifft=function(t){return P("ifft")},r.prototype.complex=function(t,e){return P("complex")},r.prototype.real=function(t){return P("real")},r.prototype.imag=function(t){return P("imag")},r.prototype.cropAndResize=function(t,e,n,a,o,i){return P("cropAndResize")},r.prototype.depthToSpace=function(t,e,n){return P("depthToSpace")},r.prototype.split=function(t,e,n){return P("split")},r.prototype.sparseToDense=function(t,e,n,a){return P("sparseToDense")},r.prototype.diag=function(t){return P("diag")},r.prototype.fill=function(t,e,n){return P("fill")},r.prototype.onesLike=function(t){return P("onesLike")},r.prototype.zerosLike=function(t){return P("zerosLike")},r.prototype.linspace=function(t,e,n){return P("linspace")},r.prototype.dispose=function(){return P("dispose")},r}();function P(r){throw new Error("'"+r+"' not yet implemented or not found in the registry. Did you forget to import the kernel?")}function ln(r,t){for(var e=r.length,n=[],a=0;a<e;a++){var o=e-1-a,i=r[o]||1;(t[t.length-1-a]||1)>1&&i===1&&n.unshift(o)}return n}function Be(r,t){for(var e=[],n=0;n<t.length;n++){var a=r[r.length-n-1],o=t.length-n-1,i=t[o];(a==null||a===1&&i>1)&&e.unshift(o)}return e}function de(r,t){for(var e=[],n=Math.max(r.length,t.length),a=0;a<n;a++){var o=r[r.length-a-1];o==null&&(o=1);var i=t[t.length-a-1];if(i==null&&(i=1),o===1)e.unshift(i);else if(i===1)e.unshift(o);else{if(o!==i)throw Error("Operands could not be broadcast together with shapes "+r+" and "+t+".");e.unshift(o)}}return e}function Cr(r,t,e,n,a,o,i){i===void 0&&(i="channelsLast");var s,u=ma(t),c=u[0],l=u[1];if(i==="channelsLast")s=[c,l,r[3],r[3]];else{if(i!=="channelsFirst")throw new Error("Unknown dataFormat "+i);s=[c,l,r[1],r[1]]}return On(r,s,e,n,a,o,!1,i)}function va(r,t,e,n,a,o,i){i===void 0&&(i="NDHWC");var s,u,c=Wo(t),l=c[0],h=c[1],d=c[2];if(i==="NDHWC")u="channelsLast",s=[l,h,d,r[4],r[4]];else{if(i!=="NCDHW")throw new Error("Unknown dataFormat "+i);u="channelsFirst",s=[l,h,d,r[1],r[1]]}return ga(r,s,e,n,a,!1,u,o)}function On(r,t,e,n,a,o,i,s){i===void 0&&(i=!1),s===void 0&&(s="channelsLast");var u=[-1,-1,-1,-1],c=u[0],l=u[1],h=u[2],d=u[3];if(s==="channelsLast")c=r[0],l=r[1],h=r[2],d=r[3];else{if(s!=="channelsFirst")throw new Error("Unknown dataFormat "+s);c=r[0],d=r[1],l=r[2],h=r[3]}var f,p=t[0],g=t[1],v=t[3],m=ma(e),b=m[0],x=m[1],y=ma(n),w=y[0],C=y[1],R=Zn(p,w),S=Zn(g,C),I=function(B,L,V,U,z,H,j,K){var te,ne,ue;if(typeof B=="number"){te={top:B,bottom:B,left:B,right:B,type:B===0?"VALID":"NUMBER"};var ce=function(pe,we,ye,Ae,Ee){Ae==null&&(Ae=ju(pe,we,ye));var Ie=pe[0],Rt=pe[1],At=gr((Ie-we+2*Ae)/ye+1,Ee);E(Te(At),function(){return"The output # of rows ("+At+") must be an integer. Change the stride and/or zero pad parameters"});var it=gr((Rt-we+2*Ae)/ye+1,Ee);return E(Te(it),function(){return"The output # of columns ("+it+") must be an integer. Change the stride and/or zero pad parameters"}),[At,it]}([L,V],H,U,B,K);ne=ce[0],ue=ce[1]}else if(B==="same"){ne=Math.ceil(L/U),ue=Math.ceil(V/z);var he=Math.max(0,(ne-1)*U+H-L),ve=Math.max(0,(ue-1)*z+j-V),fe=Math.floor(he/2),ge=he-fe,Ne=Math.floor(ve/2);te={top:fe,bottom:ge,left:Ne,right:ve-Ne,type:"SAME"}}else{if(B!=="valid")throw Error("Unknown padding parameter: "+B);te={top:0,bottom:0,left:0,right:0,type:"VALID"},ne=Math.ceil((L-H+1)/U),ue=Math.ceil((V-j+1)/z)}return{padInfo:te,outHeight:ne,outWidth:ue}}(a,l,h,b,x,R,S,o),k=I.padInfo,F=I.outHeight,T=I.outWidth,W=i?v*d:v;return s==="channelsFirst"?f=[c,W,F,T]:s==="channelsLast"&&(f=[c,F,T,W]),{batchSize:c,dataFormat:s,inHeight:l,inWidth:h,inChannels:d,outHeight:F,outWidth:T,outChannels:W,padInfo:k,strideHeight:b,strideWidth:x,filterHeight:p,filterWidth:g,effectiveFilterHeight:R,effectiveFilterWidth:S,dilationHeight:w,dilationWidth:C,inShape:r,outShape:f,filterShape:t}}function ga(r,t,e,n,a,o,i,s){o===void 0&&(o=!1),i===void 0&&(i="channelsLast");var u=[-1,-1,-1,-1,-1],c=u[0],l=u[1],h=u[2],d=u[3],f=u[4];if(i==="channelsLast")c=r[0],l=r[1],h=r[2],d=r[3],f=r[4];else{if(i!=="channelsFirst")throw new Error("Unknown dataFormat "+i);c=r[0],f=r[1],l=r[2],h=r[3],d=r[4]}var p,g=t[0],v=t[1],m=t[2],b=t[4],x=Wo(e),y=x[0],w=x[1],C=x[2],R=Wo(n),S=R[0],I=R[1],k=R[2],F=Zn(g,S),T=Zn(v,I),W=Zn(m,k),B=function(j,K,te,ne,ue,ce,he,ve,fe,ge,Ne){var pe,we,ye,Ae;if(typeof j=="number"){pe={top:j,bottom:j,left:j,right:j,front:j,back:j,type:j===0?"VALID":"NUMBER"};var Ee=function(zn,Kt,Ka,Un,Dt,Xa){Dt==null&&(Dt=ju(zn,Kt,Un));var ql=zn[0],Kl=zn[1],Xl=zn[2],Ya=gr((ql-Kt+2*Dt)/Un+1,Xa);E(Te(Ya),function(){return"The output # of depths ("+Ya+") must be an integer. Change the stride and/or zero pad parameters"});var $a=gr((Kl-Kt+2*Dt)/Un+1,Xa);E(Te($a),function(){return"The output # of rows ("+$a+") must be an integer. Change the stride and/or zero pad parameters"});var Za=gr((Xl-Kt+2*Dt)/Un+1,Xa);return E(Te(Za),function(){return"The output # of columns ("+Za+") must be an integer. Change the stride and/or zero pad parameters"}),[Ya,$a,Za,Ka]}([K,te,ne,1],ve,1,ue,j,Ne);we=Ee[0],ye=Ee[1],Ae=Ee[2]}else if(j==="same"){we=Math.ceil(K/ue),ye=Math.ceil(te/ce),Ae=Math.ceil(ne/he);var Ie=(we-1)*ue+ve-K,Rt=(ye-1)*ce+fe-te,At=(Ae-1)*he+ge-ne,it=Math.floor(Ie/2),Wn=Ie-it,jt=Math.floor(Rt/2),on=Rt-jt,qt=Math.floor(At/2);pe={top:jt,bottom:on,left:qt,right:At-qt,front:it,back:Wn,type:"SAME"}}else{if(j!=="valid")throw Error("Unknown padding parameter: "+j);pe={top:0,bottom:0,left:0,right:0,front:0,back:0,type:"VALID"},we=Math.ceil((K-ve+1)/ue),ye=Math.ceil((te-fe+1)/ce),Ae=Math.ceil((ne-ge+1)/he)}return{padInfo:pe,outDepth:we,outHeight:ye,outWidth:Ae}}(a,l,h,d,y,w,C,F,T,W,s),L=B.padInfo,V=B.outDepth,U=B.outHeight,z=B.outWidth,H=o?b*f:b;return i==="channelsFirst"?p=[c,H,V,U,z]:i==="channelsLast"&&(p=[c,V,U,z,H]),{batchSize:c,dataFormat:i,inDepth:l,inHeight:h,inWidth:d,inChannels:f,outDepth:V,outHeight:U,outWidth:z,outChannels:H,padInfo:L,strideDepth:y,strideHeight:w,strideWidth:C,filterDepth:g,filterHeight:v,filterWidth:m,effectiveFilterDepth:F,effectiveFilterHeight:T,effectiveFilterWidth:W,dilationDepth:S,dilationHeight:I,dilationWidth:k,inShape:r,outShape:p,filterShape:t}}function ju(r,t,e,n){n===void 0&&(n=1);var a=Zn(t,n);return Math.floor((r[0]*(e-1)-e+a)/2)}function ma(r){return typeof r=="number"?[r,r,r]:r.length===2?[r[0],r[1],1]:r}function Wo(r){return typeof r=="number"?[r,r,r]:r}function Zn(r,t){return t<=1?r:r+(r-1)*(t-1)}function gr(r,t){if(!t)return r;switch(t){case"round":return Math.round(r);case"ceil":return Math.ceil(r);case"floor":return Math.floor(r);default:throw new Error("Unknown roundingMode "+t)}}function or(r){var t=ma(r),e=t[0],n=t[1],a=t[2];return e===1&&n===1&&a===1}function ot(r,t){return or(r)||or(t)}function ci(r){if(r==="NHWC")return"channelsLast";if(r==="NCHW")return"channelsFirst";throw new Error("Unknown dataFormat "+r)}function qu(r,t,e){if(t==="complex64"){if(r.dtype==="complex64")return r.clone();var n=_e(r.shape),a=r.toFloat(),o=e.complex(a,n);return n.dispose(),a.dispose(),o}if(!fh(r.dtype,t))return N.makeTensorFromDataId(r.dataId,r.shape,t);if(r.dtype==="complex64"){var i=e.real(r);return o=i.cast(t),i.dispose(),o}if(t==="int32")return e.int(r);if(t==="bool"){var s=q(0,r.dtype);return o=e.notEqual(r,s),s.dispose(),o}throw new Error("Error in Cast: failed to cast "+r.dtype+" to "+t)}function zo(r,t){return N.makeTensorFromDataId(r.dataId,t,r.dtype)}function Ku(r,t,e){var n=(t-r)/(e-1),a=Nr(e,"float32");a[0]=r;for(var o=1;o<a.length;o++)a[o]=a[o-1]+n;return Fe(a,"float32")}function Uo(r,t){if(r.length!==t.length)throw new Error("Cannot merge real and imag arrays of different lengths. real:"+r.length+", imag: "+t.length+".");for(var e=new Float32Array(2*r.length),n=0;n<e.length;n+=2)e[n]=r[n/2],e[n+1]=t[n/2];return e}function Cs(r,t){return{real:r[2*t],imag:r[2*t+1]}}function Ud(r,t,e,n){r[2*n]=t,r[2*n+1]=e}function Vd(r,t,e){var n=(e?2:-2)*Math.PI*(r/t);return{real:Math.cos(n),imag:Math.sin(n)}}function Gd(r,t,e){var n=function(o,i,s){return function(u,c,l){for(var h=0,d=u.length,f=0,p=!1;h<d;){var g=l(c,u[f=h+(d-h>>>1)]);g>0?h=f+1:(d=f,p=!g)}return p?h:-h-1}(o,i,s||Hd)}(r,t,e),a=n<0?-(n+1):n;r.splice(a,0,t)}function Hd(r,t){return r>t?1:r<t?-1:0}function li(r,t,e,n,a){return Xu(r,t,e,n,a,0).selectedIndices}function hi(r,t,e,n,a,o){var i=Xu(r,t,e,n,a,o);return i.numValidOutputs.dispose(),{selectedIndices:i.selectedIndices,selectedScores:i.selectedScores}}function Xu(r,t,e,n,a,o,i,s){s===void 0&&(s=!1);for(var u=Array.from(t).map(function(y,w){return{score:y,boxIndex:w,suppressBeginIndex:0}}).filter(function(y){return y.score>a}).sort(_s),c=o>0?-.5/o:0,l=[],h=[];l.length<e&&u.length>0;){var d=u.pop(),f=d.score,p=d.boxIndex,g=d.suppressBeginIndex;if(f<a)break;for(var v=!1,m=l.length-1;m>=g;--m){var b=jd(r,p,l[m]);if(b>=n){v=!0;break}if(d.score=d.score*qd(n,c,b),d.score<=a)break}d.suppressBeginIndex=l.length,v||(d.score===f?(l.push(p),h.push(d.score)):d.score>a&&Gd(u,d,_s))}var x=l.length;return s&&(l.fill(0,x),h.fill(0,x)),{selectedIndices:Fe(l,"int32"),selectedScores:Fe(h,"float32"),numValidOutputs:q(x,"int32")}}function jd(r,t,e){var n=r.subarray(4*t,4*t+4),a=r.subarray(4*e,4*e+4),o=Math.min(n[0],n[2]),i=Math.min(n[1],n[3]),s=Math.max(n[0],n[2]),u=Math.max(n[1],n[3]),c=Math.min(a[0],a[2]),l=Math.min(a[1],a[3]),h=Math.max(a[0],a[2]),d=Math.max(a[1],a[3]),f=(s-o)*(u-i),p=(h-c)*(d-l);if(f<=0||p<=0)return 0;var g=Math.max(o,c),v=Math.max(i,l),m=Math.min(s,h),b=Math.min(u,d),x=Math.max(m-g,0)*Math.max(b-v,0);return x/(f+p-x)}function qd(r,t,e){var n=Math.exp(t*e*e);return e<=r?n:0}function _s(r,t){return r.score-t.score||r.score===t.score&&t.boxIndex-r.boxIndex}function Yu(r,t,e){var n=new Array(r.rank).fill(0),a=r.shape.slice();return t.map(function(o){a[e]=o;var i=r.slice(n,a);return n[e]+=o,i})}function $u(r,t){for(var e=new Array(r.rank),n=0;n<e.length;n++)e[n]=r.shape[n]*t[n];var a=oe(e,r.dtype);for(n=0;n<a.values.length;++n){for(var o=a.indexToLoc(n),i=new Array(r.rank),s=0;s<i.length;s++)i[s]=o[s]%r.shape[s];var u=r.locToIndex(i);a.values[n]=r.values[u]}return a.toTensor()}function Zu(r,t,e,n,a){for(var o=t[t.length-1],i=[r.length/o,o],s=i[0],u=i[1],c=br(e,s*n),l=br("int32",s*n),h=0;h<s;h++){for(var d=h*u,f=r.subarray(d,d+u),p=[],g=0;g<f.length;g++)p.push({value:f[g],index:g});p.sort(function(y,w){return w.value-y.value});var v=h*n,m=c.subarray(v,v+n),b=l.subarray(v,v+n);for(g=0;g<n;g++)m[g]=p[g].value,b[g]=p[g].index}var x=t.slice();return x[x.length-1]=n,[qe(c,x,e),qe(l,x,"int32")]}function di(r,t){for(var e=[],n=0;n<t.length;n++)t[n]&&e.push(n);var a=oe(r,"int32"),o=oe([e.length,r.length],"int32");for(n=0;n<e.length;n++){var i=a.indexToLoc(e[n]),s=n*r.length;o.values.set(i,s)}return o.toTensor()}var Kd=function(r,t){this.outputShape=[],this.outputShape=r,this.variableNames=t.map(function(a,o){return"T"+o});var e=[];this.variableNames.forEach(function(a){e.push("float v"+a+" = get"+a+"AtOutCoords();")});var n=this.variableNames.map(function(a){return"v"+a}).join(" + ");this.userCode=`
      void main() {
        `+e.join(`
        `)+`

        float result = `+n+`;
        setOutput(result);
      }
    `},Xd=function(r,t){this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=r,this.variableNames=t.map(function(a,o){return"T"+o});var e=[];this.variableNames.forEach(function(a){e.push("vec4 v"+a+" = get"+a+"AtOutCoords();")});var n=this.variableNames.map(function(a){return"v"+a}).join(" + ");this.userCode=`
      void main() {
        `+e.join(`
        `)+`

        vec4 result = `+n+`;
        setOutput(result);
      }
    `},Yd=function(r,t,e){this.variableNames=["A"];var n=r.windowSize,a=r.batchSize,o=r.inSize,i=Math.ceil(o/n);e||this.variableNames.push("bestIndicesA"),this.outputShape=[a,i];var s=t==="max"?">":"<",u=e?"inOffset + i;":"round(getBestIndicesA(batch, inOffset + i));";this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * `+n+`;

        int bestIndex = inOffset;
        float bestValue = getA(batch, bestIndex);

        for (int i = 0; i < `+n+`; i++) {
          int inIdx = `+u+`;
          float candidate = getA(batch, inIdx);
          if (candidate `+s+` bestValue) {
            bestValue = candidate;
            bestIndex = inIdx;
          }
        }
        setOutput(float(bestIndex));
      }
    `};function Ju(r,t){return["x","y","z","w","u","v"].slice(0,t).map(function(e){return r+"."+e})}function tt(r,t){return t===1?[r]:Ju(r,t)}function Ye(){var r,t,e,n,a,o,i,s,u,c;return O().getNumber("WEBGL_VERSION")===2?(r="#version 300 es",t="in",e="out",n="in",a="texture",o="outputColor",i="out vec4 outputColor;",s=`
      bool isnan_custom(float val) {
        return (val > 0.0 || val < 0.0) ? false : val != 0.0;
      }

      bvec4 isnan_custom(vec4 val) {
        return bvec4(isnan_custom(val.x),
          isnan_custom(val.y), isnan_custom(val.z), isnan_custom(val.w));
      }

      #define isnan(value) isnan_custom(value)
    `,u="",c=`
      #define round(value) newRound(value)
      int newRound(float value) {
        return int(floor(value + 0.5));
      }

      ivec4 newRound(vec4 value) {
        return ivec4(floor(value + vec4(0.5)));
      }
    `):(r="",t="attribute",e="varying",n="varying",a="texture2D",o="gl_FragColor",i="",s=`
      #define isnan(value) isnan_custom(value)
      bool isnan_custom(float val) {
        return (val > 0. || val < 1. || val == 0.) ? false : true;
      }
      bvec4 isnan_custom(vec4 val) {
        return bvec4(isnan(val.x), isnan(val.y), isnan(val.z), isnan(val.w));
      }
    `,u=`
      uniform float INFINITY;

      bool isinf(float val) {
        return abs(val) == INFINITY;
      }
      bvec4 isinf(vec4 val) {
        return equal(abs(val), vec4(INFINITY));
      }
    `,c=`
      int round(float value) {
        return int(floor(value + 0.5));
      }

      ivec4 round(vec4 value) {
        return ivec4(floor(value + vec4(0.5)));
      }
    `),{version:r,attribute:t,varyingVs:e,varyingFs:n,texture2D:a,output:o,defineOutput:i,defineSpecialNaN:s,defineSpecialInf:u,defineRound:c}}function kn(r,t,e){e===void 0&&(e="index");var n=Wt(t);return n.map(function(a,o){return"int "+r[o]+" = "+e+" / "+a+"; "+(o===n.length-1?"int "+r[o+1]+" = "+e+" - "+r[o]+" * "+a:"index -= "+r[o]+" * "+a)+";"}).join("")}function fi(r){var t=Wt(r).map(function(e){return e.toString()});return`
  int getFlatIndex(ivec3 coords) {
    return coords.x * `+t[0]+" + coords.y * "+t[1]+` + coords.z;
  }
`}var Qu=`
  const float FLOAT_MAX = 1.70141184e38;
  const float FLOAT_MIN = 1.17549435e-38;

  lowp vec4 encode_float(highp float v) {
    if (isnan(v)) {
      return vec4(255, 255, 255, 255);
    }

    highp float av = abs(v);

    if(av < FLOAT_MIN) {
      return vec4(0.0, 0.0, 0.0, 0.0);
    } else if(v > FLOAT_MAX) {
      return vec4(0.0, 0.0, 128.0, 127.0) / 255.0;
    } else if(v < -FLOAT_MAX) {
      return vec4(0.0, 0.0,  128.0, 255.0) / 255.0;
    }

    highp vec4 c = vec4(0,0,0,0);

    highp float e = floor(log2(av));
    highp float m = exp2(fract(log2(av))) - 1.0;

    c[2] = floor(128.0 * m);
    m -= c[2] / 128.0;
    c[1] = floor(32768.0 * m);
    m -= c[1] / 32768.0;
    c[0] = floor(8388608.0 * m);

    highp float ebias = e + 127.0;
    c[3] = floor(ebias / 2.0);
    ebias -= c[3] * 2.0;
    c[2] += floor(ebias) * 128.0;

    c[3] += 128.0 * step(0.0, -v);

    return c / 255.0;
  }
`;function $d(r,t,e,n){var a=[];r.forEach(function(f){var p=Z(f.shapeInfo.logicalShape);f.shapeInfo.isUniform?a.push("uniform float "+f.name+(p>1?"["+p+"]":"")+";"):(a.push("uniform sampler2D "+f.name+";"),a.push("uniform int offset"+f.name+";"))});var o,i,s=a.join(`
`),u=r.map(function(f){return function(p,g,v){v===void 0&&(v=!1);var m="";m+=v?ec(p):qn(p);var b=p.shapeInfo.logicalShape,x=g.logicalShape;return b.length<=x.length&&(m+=v?function(y,w){var C,R=y.name,S=R.charAt(0).toUpperCase()+R.slice(1),I="get"+S+"AtOutCoords",k=y.shapeInfo.logicalShape.length,F=w.logicalShape.length,T=ln(y.shapeInfo.logicalShape,w.logicalShape),W=Ce(F),B=F-k,L=["x","y","z","w","u","v"];C=k===0?"":F<2&&T.length>=1?"coords = 0;":T.map(function(te){return"coords."+L[te+B]+" = 0;"}).join(`
`);var V="";V=F<2&&k>0?"coords":y.shapeInfo.logicalShape.map(function(te,ne){return"coords."+L[ne+B]}).join(", ");var U="return outputValue;",z=Z(y.shapeInfo.logicalShape)===1,H=Z(w.logicalShape)===1;if(k!==1||z||H){if(z&&!H)U=F===1?`
        return vec4(outputValue.x, outputValue.x, 0., 0.);
      `:`
        return vec4(outputValue.x);
      `;else if(T.length){var j=k-2,K=k-1;T.indexOf(j)>-1&&T.indexOf(K)>-1?U="return vec4(outputValue.x);":T.indexOf(j)>-1?U="return vec4(outputValue.x, outputValue.y, outputValue.x, outputValue.y);":T.indexOf(K)>-1&&(U="return vec4(outputValue.xx, outputValue.zz);")}}else U=`
      return vec4(outputValue.xy, outputValue.xy);
    `;return`
    vec4 `+I+`() {
      `+W+` coords = getOutputCoords();
      `+C+`
      vec4 outputValue = get`+S+"("+V+`);
      `+U+`
    }
  `}(p,g):function(y,w){var C=y.name,R=C.charAt(0).toUpperCase()+C.slice(1),S="get"+R+"AtOutCoords",I=w.texShape,k=y.shapeInfo.texShape,F=y.shapeInfo.logicalShape.length,T=w.logicalShape.length;if(!y.shapeInfo.isUniform&&F===T&&y.shapeInfo.flatOffset==null&&Ve(k,I))return`
      float `+S+`() {
        return sampleTexture(`+C+`, resultUV);
      }
    `;var W,B=Ce(T),L=ln(y.shapeInfo.logicalShape,w.logicalShape),V=T-F,U=["x","y","z","w","u","v"];W=F===0?"":T<2&&L.length>=1?"coords = 0;":L.map(function(H){return"coords."+U[H+V]+" = 0;"}).join(`
`);var z="";return z=T<2&&F>0?"coords":y.shapeInfo.logicalShape.map(function(H,j){return"coords."+U[j+V]}).join(", "),`
    float `+S+`() {
      `+B+` coords = getOutputCoords();
      `+W+`
      return get`+R+"("+z+`);
    }
  `}(p,g)),m}(f,t,n)}).join(`
`),c=t.texShape,l=Ye(),h=function(f){return`
    float sampleTexture(sampler2D textureSampler, vec2 uv) {
      return `+f.texture2D+`(textureSampler, uv).r;
    }
  `}(l),d=function(f){return f.version+`
    precision highp float;
    precision highp int;
    precision highp sampler2D;
    `+f.varyingFs+` vec2 resultUV;
    `+f.defineOutput+`
    const vec2 halfCR = vec2(0.5, 0.5);

    struct ivec5
    {
      int x;
      int y;
      int z;
      int w;
      int u;
    };

    struct ivec6
    {
      int x;
      int y;
      int z;
      int w;
      int u;
      int v;
    };

    uniform float NAN;
    `+f.defineSpecialNaN+`
    `+f.defineSpecialInf+`
    `+f.defineRound+`

    int imod(int x, int y) {
      return x - y * (x / y);
    }

    int idiv(int a, int b, float sign) {
      int res = a / b;
      int mod = imod(a, b);
      if (sign < 0. && mod != 0) {
        res -= 1;
      }
      return res;
    }

    //Based on the work of Dave Hoskins
    //https://www.shadertoy.com/view/4djSRW
    #define HASHSCALE1 443.8975
    float random(float seed){
      vec2 p = resultUV * seed;
      vec3 p3  = fract(vec3(p.xyx) * HASHSCALE1);
      p3 += dot(p3, p3.yzx + 19.19);
      return fract((p3.x + p3.y) * p3.z);
    }

    `+Zd+`
    `+Jd+`
    `+Qd+`
  `}(l);return t.isPacked?(o=function(f,p){switch(f.length){case 0:return`
    int getOutputCoords() {
      return 0;
    }
  `;case 1:return function(y,w){var C=[Math.ceil(w[0]/2),Math.ceil(w[1]/2)];return C[0]===1?`
      int getOutputCoords() {
        return 2 * int(resultUV.x * `+C[1]+`.0);
      }
    `:C[1]===1?`
      int getOutputCoords() {
        return 2 * int(resultUV.y * `+C[0]+`.0);
      }
    `:`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+C[0]+", "+C[1]+`));
      return 2 * (resTexRC.x * `+C[1]+` + resTexRC.y);
    }
  `}(0,p);case 2:return function(y,w){var C=[Math.ceil(w[0]/2),Math.ceil(w[1]/2)];if(Ve(y,w))return`
      ivec2 getOutputCoords() {
        return 2 * ivec2(resultUV.yx * vec2(`+C[0]+", "+C[1]+`));
      }
    `;var R=Math.ceil(y[1]/2);return`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+C[0]+", "+C[1]+`));

      int index = resTexRC.x * `+C[1]+` + resTexRC.y;
      int r = 2 * (index / `+R+`);
      int c = imod(index, `+R+`) * 2;

      return ivec2(r, c);
    }
  `}(f,p);case 3:return g=f,v=p,m=[Math.ceil(v[0]/2),Math.ceil(v[1]/2)],b=Math.ceil(g[2]/2),x=b*Math.ceil(g[1]/2),`
    ivec3 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+m[0]+", "+m[1]+`));
      int index = resTexRC.x * `+m[1]+` + resTexRC.y;

      int b = index / `+x+`;
      index -= b * `+x+`;

      int r = 2 * (index / `+b+`);
      int c = imod(index, `+b+`) * 2;

      return ivec3(b, r, c);
    }
  `;default:return function(y,w){for(var C=[Math.ceil(w[0]/2),Math.ceil(w[1]/2)],R=Math.ceil(y[y.length-1]/2),S=R*Math.ceil(y[y.length-2]/2),I=S,k="",F="b, r, c",T=2;T<y.length-1;T++)I*=y[y.length-T-1],k=`
      int b`+T+" = index / "+I+`;
      index -= b`+T+" * "+I+`;
    `+k,F="b"+T+", "+F;return`
    ivec`+y.length+` getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+C[0]+", "+C[1]+`));
      int index = resTexRC.x * `+C[1]+` + resTexRC.y;

      `+k+`

      int b = index / `+S+`;
      index -= b * `+S+`;

      int r = 2 * (index / `+R+`);
      int c = imod(index, `+R+`) * 2;

      return ivec`+y.length+"("+F+`);
    }
  `}(f,p)}var g,v,m,b,x}(t.logicalShape,c),i=function(f){return`
    void setOutput(vec4 val) {
      `+f.output+` = val;
    }
  `}(l)):(o=function(f,p){switch(f.length){case 0:return`
    int getOutputCoords() {
      return 0;
    }
  `;case 1:return function(m,b){return b[0]===1?`
      int getOutputCoords() {
        return int(resultUV.x * `+b[1]+`.0);
      }
    `:b[1]===1?`
      int getOutputCoords() {
        return int(resultUV.y * `+b[0]+`.0);
      }
    `:`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+b[0]+", "+b[1]+`));
      return resTexRC.x * `+b[1]+` + resTexRC.y;
    }
  `}(0,p);case 2:return function(m,b){return Ve(m,b)?`
      ivec2 getOutputCoords() {
        return ivec2(resultUV.yx * vec2(`+b[0]+", "+b[1]+`));
      }
    `:m[1]===1?`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(`+b[0]+", "+b[1]+`));
        int index = resTexRC.x * `+b[1]+` + resTexRC.y;
        return ivec2(index, 0);
      }
    `:m[0]===1?`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(`+b[0]+", "+b[1]+`));
        int index = resTexRC.x * `+b[1]+` + resTexRC.y;
        return ivec2(0, index);
      }
    `:`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+b[0]+", "+b[1]+`));
      int index = resTexRC.x * `+b[1]+` + resTexRC.y;
      int r = index / `+m[1]+`;
      int c = index - r * `+m[1]+`;
      return ivec2(r, c);
    }
  `}(f,p);case 3:return g=p,v=kn(["r","c","d"],f),`
    ivec3 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+g[0]+", "+g[1]+`));
      int index = resTexRC.x * `+g[1]+` + resTexRC.y;
      `+v+`
      return ivec3(r, c, d);
    }
  `;case 4:return function(m,b){var x=kn(["r","c","d","d2"],m);return`
    ivec4 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(`+b[0]+", "+b[1]+`));
      int index = resTexRC.x * `+b[1]+` + resTexRC.y;
      `+x+`
      return ivec4(r, c, d, d2);
    }
  `}(f,p);case 5:return function(m,b){var x=kn(["r","c","d","d2","d3"],m);return`
    ivec5 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx * vec2(`+b[0]+`,
                             `+b[1]+`));

      int index = resTexRC.x * `+b[1]+` + resTexRC.y;

      `+x+`

      ivec5 outShape = ivec5(r, c, d, d2, d3);
      return outShape;
    }
  `}(f,p);case 6:return function(m,b){var x=kn(["r","c","d","d2","d3","d4"],m);return`
    ivec6 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(`+b[0]+", "+b[1]+`));
      int index = resTexRC.x * `+b[1]+` + resTexRC.y;

      `+x+`

      ivec6 result = ivec6(r, c, d, d2, d3, d4);
      return result;
    }
  `}(f,p);default:throw new Error(f.length+"-D output sampling is not yet supported")}var g,v}(t.logicalShape,c),i=function(f){return`
    void setOutput(float val) {
      `+f.output+` = vec4(val, 0, 0, 0);
    }
  `}(l)),n&&(d+=ef),[d,h,i,s,o,u,e].join(`
`)}function qn(r){var t=r.shapeInfo.logicalShape;switch(t.length){case 0:return function(e){var n=e.name,a="get"+n.charAt(0).toUpperCase()+n.slice(1);if(e.shapeInfo.isUniform)return"float "+a+"() {return "+n+";}";var o=e.shapeInfo.texShape,i=o[0],s=o[1];if(i===1&&s===1)return`
      float `+a+`() {
        return sampleTexture(`+n+`, halfCR);
      }
    `;var u=e.shapeInfo.texShape,c=u[0],l=u[1],h=Cn(n);return`
    float `+a+`() {
      vec2 uv = uvFromFlat(`+c+", "+l+", "+h+`);
      return sampleTexture(`+n+`, uv);
    }
  `}(r);case 1:return function(e){var n=e.name,a="get"+n.charAt(0).toUpperCase()+n.slice(1);if(e.shapeInfo.isUniform)return`
      float `+a+`(int index) {
        `+Vn(e)+`
      }
    `;var o=e.shapeInfo.texShape,i=o[0],s=o[1];if(s===1&&i===1)return`
      float `+a+`(int index) {
        return sampleTexture(`+n+`, halfCR);
      }
    `;var u=Cn(n);return s===1?`
      float `+a+`(int index) {
        vec2 uv = vec2(0.5, (float(index + `+u+") + 0.5) / "+i+`.0);
        return sampleTexture(`+n+`, uv);
      }
    `:i===1?`
      float `+a+`(int index) {
        vec2 uv = vec2((float(index + `+u+") + 0.5) / "+s+`.0, 0.5);
        return sampleTexture(`+n+`, uv);
      }
    `:`
    float `+a+`(int index) {
      vec2 uv = uvFromFlat(`+i+", "+s+", index + "+u+`);
      return sampleTexture(`+n+`, uv);
    }
  `}(r);case 2:return function(e){var n=e.shapeInfo.logicalShape,a=e.name,o="get"+a.charAt(0).toUpperCase()+a.slice(1),i=e.shapeInfo.texShape;if(i!=null&&Ve(n,i)){var s=i[0],u=i[1];return`
    float `+o+`(int row, int col) {
      vec2 uv = (vec2(col, row) + halfCR) / vec2(`+u+".0, "+s+`.0);
      return sampleTexture(`+a+`, uv);
    }
  `}var c=In(n),l=c.newShape,h=c.keptDims,d=l;if(d.length<n.length){var f=Kn(e,d);return`
      `+qn(f)+`
      float `+o+`(int row, int col) {
        return `+o+"("+Xn(["row","col"],h)+`);
      }
    `}if(e.shapeInfo.isUniform)return`
      float `+o+`(int row, int col) {
        int index = round(dot(vec2(row, col), vec2(`+n[1]+`, 1)));
        `+Vn(e)+`
      }
    `;var p=i[0],g=i[1],v=Cn(a);return g===1?`
    float `+o+`(int row, int col) {
      float index = dot(vec3(row, col, `+v+"), vec3("+n[1]+`, 1, 1));
      vec2 uv = vec2(0.5, (index + 0.5) / `+p+`.0);
      return sampleTexture(`+a+`, uv);
    }
  `:p===1?`
    float `+o+`(int row, int col) {
      float index = dot(vec3(row, col, `+v+"), vec3("+n[1]+`, 1, 1));
      vec2 uv = vec2((index + 0.5) / `+g+`.0, 0.5);
      return sampleTexture(`+a+`, uv);
    }
  `:`
  float `+o+`(int row, int col) {
    // Explicitly use integer operations as dot() only works on floats.
    int index = row * `+n[1]+" + col + "+v+`;
    vec2 uv = uvFromFlat(`+p+", "+g+`, index);
    return sampleTexture(`+a+`, uv);
  }
`}(r);case 3:return function(e){var n=e.shapeInfo.logicalShape,a=e.name,o="get"+a.charAt(0).toUpperCase()+a.slice(1),i=n[1]*n[2],s=n[2],u=In(n),c=u.newShape,l=u.keptDims,h=c;if(h.length<n.length){var d=Kn(e,h);return`
        `+qn(d)+`
        float `+o+`(int row, int col, int depth) {
          return `+o+"("+Xn(["row","col","depth"],l)+`);
        }
      `}if(e.shapeInfo.isUniform)return`
      float `+o+`(int row, int col, int depth) {
        int index = round(dot(vec3(row, col, depth),
                          vec3(`+i+", "+s+`, 1)));
        `+Vn(e)+`
      }
    `;var f=e.shapeInfo.texShape,p=f[0],g=f[1],v=e.shapeInfo.flatOffset;if(g===i&&v==null)return`
        float `+o+`(int row, int col, int depth) {
          float texR = float(row);
          float texC = dot(vec2(col, depth), vec2(`+s+`, 1));
          vec2 uv = (vec2(texC, texR) + halfCR) /
                     vec2(`+g+".0, "+p+`.0);
          return sampleTexture(`+a+`, uv);
        }
      `;if(g===s&&v==null)return`
    float `+o+`(int row, int col, int depth) {
      float texR = dot(vec2(row, col), vec2(`+n[1]+`, 1));
      float texC = float(depth);
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(`+g+".0, "+p+`.0);
      return sampleTexture(`+a+`, uv);
    }
  `;var m=Cn(a);return`
      float `+o+`(int row, int col, int depth) {
        // Explicitly use integer operations as dot() only works on floats.
        int index = row * `+i+" + col * "+s+" + depth + "+m+`;
        vec2 uv = uvFromFlat(`+p+", "+g+`, index);
        return sampleTexture(`+a+`, uv);
      }
  `}(r);case 4:return function(e){var n=e.shapeInfo.logicalShape,a=e.name,o="get"+a.charAt(0).toUpperCase()+a.slice(1),i=n[3],s=n[2]*i,u=n[1]*s,c=In(n),l=c.newShape,h=c.keptDims;if(l.length<n.length){var d=Kn(e,l);return`
      `+qn(d)+`
      float `+o+`(int row, int col, int depth, int depth2) {
        return `+o+"("+Xn(["row","col","depth","depth2"],h)+`);
      }
    `}if(e.shapeInfo.isUniform)return`
      float `+o+`(int row, int col, int depth, int depth2) {
        int index = round(dot(vec4(row, col, depth, depth2),
                          vec4(`+u+", "+s+", "+i+`, 1)));
        `+Vn(e)+`
      }
    `;var f=e.shapeInfo.flatOffset,p=e.shapeInfo.texShape,g=p[0],v=p[1];if(v===u&&f==null)return`
      float `+o+`(int row, int col, int depth, int depth2) {
        float texR = float(row);
        float texC =
            dot(vec3(col, depth, depth2),
                vec3(`+s+", "+i+`, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(`+v+".0, "+g+`.0);
        return sampleTexture(`+a+`, uv);
      }
    `;if(v===i&&f==null)return`
      float `+o+`(int row, int col, int depth, int depth2) {
        float texR = dot(vec3(row, col, depth),
                         vec3(`+n[1]*n[2]+", "+n[2]+`, 1));
        float texC = float(depth2);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(`+v+".0, "+g+`.0);
        return sampleTexture(`+a+`, uv);
      }
    `;var m=Cn(a);return`
    float `+o+`(int row, int col, int depth, int depth2) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * `+u+" + col * "+s+` +
          depth * `+i+` + depth2;
      vec2 uv = uvFromFlat(`+g+", "+v+", index + "+m+`);
      return sampleTexture(`+a+`, uv);
    }
  `}(r);case 5:return function(e){var n=e.shapeInfo.logicalShape,a=e.name,o="get"+a.charAt(0).toUpperCase()+a.slice(1),i=n[4],s=n[3]*i,u=n[2]*s,c=n[1]*u,l=In(n),h=l.newShape,d=l.keptDims;if(h.length<n.length){var f=Kn(e,h);return`
      `+qn(f)+`
      float `+o+`(int row, int col, int depth, int depth2, int depth3) {
        return `+o+"("+Xn(["row","col","depth","depth2","depth3"],d)+`);
      }
    `}if(e.shapeInfo.isUniform)return`
      float `+o+`(int row, int col, int depth, int depth2, int depth3) {
        float index = dot(
          vec4(row, col, depth, depth2),
          vec4(`+c+", "+u+", "+s+", "+i+`)) +
          depth3;
        `+Vn(e)+`
      }
    `;var p=e.shapeInfo.flatOffset,g=e.shapeInfo.texShape,v=g[0],m=g[1];if(m===c&&p==null)return`
      float `+o+`(int row, int col, int depth, int depth2, int depth3) {
        int texR = row;
        float texC = dot(vec4(col, depth, depth2, depth3),
                         vec4(`+u+", "+s+", "+i+`, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(`+m+".0, "+v+`.0);
        return sampleTexture(`+a+`, uv);
      }
    `;if(m===i&&p==null)return`
      float `+o+`(int row, int col, int depth, int depth2, int depth3) {
        float texR = dot(
          vec4(row, col, depth, depth2),
          vec4(`+n[1]*n[2]*n[3]+`,
               `+n[2]*n[3]+", "+n[3]+`, 1));
        int texC = depth3;
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(`+m+".0, "+v+`.0);
        return sampleTexture(`+a+`, uv);
      }
    `;var b=Cn(a);return`
    float `+o+`(int row, int col, int depth, int depth2, int depth3) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * `+c+" + col * "+u+" + depth * "+s+` +
          depth2 * `+i+" + depth3 + "+b+`;
      vec2 uv = uvFromFlat(`+v+", "+m+`, index);
      return sampleTexture(`+a+`, uv);
    }
  `}(r);case 6:return function(e){var n=e.shapeInfo.logicalShape,a=e.name,o="get"+a.charAt(0).toUpperCase()+a.slice(1),i=In(n),s=i.newShape,u=i.keptDims;if(s.length<n.length){var c=Kn(e,s);return`
      `+qn(c)+`
      float `+o+`(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        return `+o+"("+Xn(["row","col","depth","depth2","depth3","depth4"],u)+`);
      }
    `}var l=n[5],h=n[4]*l,d=n[3]*h,f=n[2]*d,p=n[1]*f;if(e.shapeInfo.isUniform)return`
      float `+o+`(int row, int col, int depth,
                  int depth2, int depth3, int depth4) {
        int index = round(dot(
          vec4(row, col, depth, depth2),
          vec4(`+p+", "+f+", "+d+", "+h+`)) +
          dot(
            vec2(depth3, depth4),
            vec2(`+l+`, 1)));
        `+Vn(e)+`
      }
    `;var g=e.shapeInfo.flatOffset,v=e.shapeInfo.texShape,m=v[0],b=v[1];if(b===p&&g==null)return`
      float `+o+`(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        int texR = row;
        float texC = dot(vec4(col, depth, depth2, depth3),
          vec4(`+f+", "+d+", "+h+", "+l+`)) +
               float(depth4);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(`+b+".0, "+m+`.0);
        return sampleTexture(`+a+`, uv);
      }
    `;if(b===l&&g==null)return`
      float `+o+`(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        float texR = dot(vec4(row, col, depth, depth2),
          vec4(`+n[1]*n[2]*n[3]*n[4]+`,
               `+n[2]*n[3]*n[4]+`,
               `+n[3]*n[4]+`,
               `+n[4]+`)) + float(depth3);
        int texC = depth4;
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(`+b+".0, "+m+`.0);
        return sampleTexture(`+a+`, uv);
      }
    `;var x=Cn(a);return`
    float `+o+`(int row, int col, int depth,
                  int depth2, int depth3, int depth4) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * `+p+" + col * "+f+" + depth * "+d+` +
          depth2 * `+h+" + depth3 * "+l+" + depth4 + "+x+`;
      vec2 uv = uvFromFlat(`+m+", "+b+`, index);
      return sampleTexture(`+a+`, uv);
    }
  `}(r);default:throw new Error(t.length+"-D input sampling is not yet supported")}}function ec(r){var t,e,n;switch(r.shapeInfo.logicalShape.length){case 0:return t=r.name,e="get"+t.charAt(0).toUpperCase()+t.slice(1),n=Ye(),`
    vec4 `+e+`() {
      return `+n.texture2D+"("+t+`, halfCR);
    }
  `;case 1:return function(a){var o=a.name,i="get"+o.charAt(0).toUpperCase()+o.slice(1),s=a.shapeInfo.texShape,u=[Math.ceil(s[0]/2),Math.ceil(s[1]/2)],c=Ye();return`
    vec4 `+i+`(int index) {
      vec2 uv = packedUVfrom1D(
        `+u[0]+", "+u[1]+`, index);
      return `+c.texture2D+"("+o+`, uv);
    }
  `}(r);case 2:return function(a){var o=a.shapeInfo.logicalShape,i=a.name,s="get"+i.charAt(0).toUpperCase()+i.slice(1),u=a.shapeInfo.texShape,c=u[0],l=u[1],h=Ye();if(u!=null&&Ve(o,u))return`
      vec4 `+s+`(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(`+l+".0, "+c+`.0);

        return `+h.texture2D+"("+i+`, uv);
      }
    `;var d=[Math.ceil(u[0]/2),Math.ceil(u[1]/2)],f=Math.ceil(o[1]/2);return`
    vec4 `+s+`(int row, int col) {
      vec2 uv = packedUVfrom2D(`+f+", "+d[0]+", "+d[1]+`, row, col);
      return `+h.texture2D+"("+i+`, uv);
    }
  `}(r);case 3:return function(a){var o=a.shapeInfo.logicalShape,i=a.name,s="get"+i.charAt(0).toUpperCase()+i.slice(1),u=a.shapeInfo.texShape,c=[Math.ceil(u[0]/2),Math.ceil(u[1]/2)];if(o[0]===1){var l=o.slice(1),h=Kn(a,l);return`
        `+ec(h)+`
        vec4 `+s+`(int b, int row, int col) {
          return `+s+"("+Xn(["b","row","col"],[1,2])+`);
        }
      `}var d=c[0],f=c[1],p=Math.ceil(o[2]/2),g=p*Math.ceil(o[1]/2),v=Ye();return`
    vec4 `+s+`(int b, int row, int col) {
      vec2 uv = packedUVfrom3D(
        `+d+", "+f+", "+g+", "+p+`, b, row, col);
      return `+v.texture2D+"("+i+`, uv);
    }
  `}(r);default:return function(a){for(var o=a.shapeInfo.logicalShape,i=o.length,s=a.name,u="get"+s.charAt(0).toUpperCase()+s.slice(1),c=a.shapeInfo.texShape,l=[Math.ceil(c[0]/2),Math.ceil(c[1]/2)],h=l[0],d=l[1],f=Math.ceil(o[i-1]/2),p=f*Math.ceil(o[i-2]/2),g="int b, int row, int col",v="b * "+p+" + (row / 2) * "+f+" + (col / 2)",m=2;m<i-1;m++)g="int b"+m+", "+g,p*=o[i-m-1],v="b"+m+" * "+p+" + "+v;var b=Ye();return`
    vec4 `+u+"("+g+`) {
      int index = `+v+`;
      int texR = index / `+d+`;
      int texC = index - texR * `+d+`;
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(`+d+", "+h+`);
      return `+b.texture2D+"("+s+`, uv);
    }
  `}(r)}}var Zd=`
vec2 uvFromFlat(int texNumR, int texNumC, int index) {
  int texR = index / texNumC;
  int texC = index - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
vec2 packedUVfrom1D(int texNumR, int texNumC, int index) {
  int texelIndex = index / 2;
  int texR = texelIndex / texNumC;
  int texC = texelIndex - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,Jd=`
vec2 packedUVfrom2D(int texelsInLogicalRow, int texNumR,
  int texNumC, int row, int col) {
  int texelIndex = (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = texelIndex / texNumC;
  int texC = texelIndex - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,Qd=`
vec2 packedUVfrom3D(int texNumR, int texNumC,
    int texelsInBatch, int texelsInLogicalRow, int b,
    int row, int col) {
  int index = b * texelsInBatch + (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = index / texNumC;
  int texC = index - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,ef=`
  float getChannel(vec4 frag, vec2 innerDims) {
    vec2 modCoord = mod(innerDims, 2.);
    return modCoord.x == 0. ?
      (modCoord.y == 0. ? frag.r : frag.g) :
      (modCoord.y == 0. ? frag.b : frag.a);
  }
  float getChannel(vec4 frag, int dim) {
    float modCoord = mod(float(dim), 2.);
    return modCoord == 0. ? frag.r : frag.g;
  }
`;function Cn(r){return"offset"+r}function Vn(r){var t=r.name,e=Z(r.shapeInfo.logicalShape);return e<2?"return "+t+";":`
    for (int i = 0; i < `+e+`; i++) {
      if (i == index) {
        return `+t+`[i];
      }
    }
  `}function Ce(r){if(r<=1)return"int";if(r===2)return"ivec2";if(r===3)return"ivec3";if(r===4)return"ivec4";if(r===5)return"ivec5";if(r===6)return"ivec6";throw Error("GPU for rank "+r+" is not yet supported")}function Kn(r,t){var e=JSON.parse(JSON.stringify(r));return e.shapeInfo.logicalShape=t,e}function Xn(r,t){return t.map(function(e){return r[e]}).join(", ")}var tf=function(r,t,e,n){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,E(r.length>2,function(){return"Packed arg"+(e.charAt(0).toUpperCase()+e.slice(1))+" supports only inputs with rank above 2."});var a=r[r.length-1],o=Math.ceil(a/t);this.outputShape=r.slice(0,-1),o>1&&this.outputShape.push(o),n||this.variableNames.push("bestIndicesA");var i,s,u=this.outputShape,c=u.length,l=Ce(c),h=tt("coords",c);if(o===1){var d=Ce(s=c+1);i=`
        `+d+" sourceLocR = "+d+"("+h.join()+`, 0);
        ++`+h[c-1]+`;
        `+d+" sourceLocG = "+d+"("+h.join()+`, 0);
        ++`+h[c-2]+`;
        `+d+" sourceLocA = "+d+"("+h.join()+`, 0);
        --`+h[c-1]+`;
        `+d+" sourceLocB = "+d+"("+h.join()+`, 0);
        --`+h[c-2]+";"}else s=c,i=`
        `+l+` sourceLocR = coords;
        ++`+h[c-1]+`;
        `+l+` sourceLocG = coords;
        ++`+h[c-2]+`;
        `+l+` sourceLocA = coords;
        --`+h[c-1]+`;
        `+l+` sourceLocB = coords;
        --`+h[c-2]+";";var f=["x","y","z","w","u","v"].slice(0,s),p="."+f[s-1],g=f.map(function(S){return"int "+S}),v=tt("sourceLocR",s-1).concat("inIdx.r"),m=tt("sourceLocG",s-1).concat("inIdx.g"),b=tt("sourceLocB",s-1).concat("inIdx.b"),x=tt("sourceLocA",s-1).concat("inIdx.a"),y=e==="max"?"greaterThan":"lessThan",w=n?"":`
          inIdx = round(vec4(getBestIndicesAChannel(`+v.join()+`),
                             getBestIndicesAChannel(`+m.join()+`),
                             getBestIndicesAChannel(`+b.join()+`),
                             getBestIndicesAChannel(`+x.join()+")));",C=`vec4(
            getAChannel(`+v.join()+`),
            hasNextCol ? getAChannel(`+m.join()+`) : 0.,
            hasNextRow ? getAChannel(`+b.join()+`) : 0.,
            hasNextRow && hasNextCol ? getAChannel(`+x.join()+") : 0.)",R=n?"":`
      float getBestIndicesAChannel(`+g.join()+`) {
        return getChannel(getBestIndicesA(`+f.join()+`),
                                          vec2(`+f.slice(-2).join()+`));
      }`;this.userCode=`
      float getAChannel(`+g.join()+`) {
        return getChannel(getA(`+f.join()+`),
                               vec2(`+f.slice(-2).join()+`));
      }
      `+R+`
      void main() {
        `+l+` coords = getOutputCoords();
        bool hasNextCol = `+h[c-1]+" < "+(u[c-1]-1)+`;
        bool hasNextRow = `+h[c-2]+" < "+(u[c-2]-1)+`;
        `+i+`
        ivec4 srcIdx = ivec4(sourceLocR`+p+", sourceLocG"+p+`,
          sourceLocB`+p+", sourceLocA"+p+") * "+t+`;
        ivec4 inIdx = srcIdx;
        vec4 bestIndex = vec4(inIdx);
        vec4 bestValue = `+C+`;

        for (int i = 0; i < `+t+`; i++) {
          inIdx = srcIdx;
          `+w+`
          vec4 candidate = `+C+`;
          bvec4 nan = isnan(candidate);
          bvec4 replace = bvec4(
            vec4(`+y+`(candidate, bestValue)) * (vec4(1.0) - vec4(nan)));

          bestValue = vec4(replace.x  ? candidate.x : bestValue.x,
                           replace.y  ? candidate.y : bestValue.y,
                           replace.z  ? candidate.z : bestValue.z,
                           replace.w  ? candidate.w : bestValue.w);
          bestIndex = mix(bestIndex, vec4(inIdx), vec4(replace));
          srcIdx++;
        }
        setOutput(bestIndex);
      }
    `},nf=function(r){this.variableNames=["dy"],this.outputShape=r.inShape;var t=r.filterHeight,e=r.filterWidth,n=r.strideHeight,a=r.strideWidth,o=r.dilationHeight,i=r.dilationWidth,s=r.effectiveFilterHeight,u=r.effectiveFilterWidth,c=s-1-r.padInfo.top,l=u-1-r.padInfo.left,h=1/(t*e);this.userCode=`
      const ivec2 pads = ivec2(`+c+", "+l+`);
      const float avgMultiplier = float(`+h+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];

        ivec2 dyRCCorner = coords.yz - pads;
        int dyRCorner = dyRCCorner.x;
        int dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < `+s+`;
            wR += `+o+`) {
          float dyR = float(dyRCorner + wR) / `+n+`.0;

          if (dyR < 0.0 || dyR >= `+r.outHeight+`.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          for (int wC = 0; wC < `+u+`;
            wC+= `+i+`) {
            float dyC = float(dyCCorner + wC) / `+a+`.0;

            if (dyC < 0.0 || dyC >= `+r.outWidth+`.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            float dyValue = getDy(b, idyR, idyC, d);

            dotProd += dyValue * avgMultiplier;
          }
        }
        setOutput(dotProd);
      }
    `},rf=function(r){this.variableNames=["dy"],this.outputShape=r.inShape;var t=r.filterDepth,e=r.filterHeight,n=r.filterWidth,a=r.strideDepth,o=r.strideHeight,i=r.strideWidth,s=r.dilationDepth,u=r.dilationHeight,c=r.dilationWidth,l=r.effectiveFilterDepth,h=r.effectiveFilterHeight,d=r.effectiveFilterWidth,f=l-1-r.padInfo.front,p=h-1-r.padInfo.top,g=d-1-r.padInfo.left,v=1/(t*e*n);this.userCode=`
      const ivec3 pads = ivec3(`+f+", "+p+", "+g+`);
      const float avgMultiplier = float(`+v+`);

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyDCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, d) with pos mask(:, :, :, ch) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int wD = 0; wD < `+l+`;
            wD += `+s+`) {
          float dyD = float(dyDCorner + wD) / `+a+`.0;

          if (dyD < 0.0 || dyD >= `+r.outDepth+`.0 || fract(dyD) > 0.0) {
            continue;
          }
          int idyD = int(dyD);

          for (int wR = 0; wR < `+h+`;
              wR += `+u+`) {
            float dyR = float(dyRCorner + wR) / `+o+`.0;

            if (dyR < 0.0 || dyR >= `+r.outHeight+`.0 ||
                fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            for (int wC = 0; wC < `+d+`;
                wC += `+c+`) {
              float dyC = float(dyCCorner + wC) / `+i+`.0;

              if (dyC < 0.0 || dyC >= `+r.outWidth+`.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              float dyValue = getDy(batch, idyD, idyR, idyC, ch);

              dotProd += dyValue * avgMultiplier;
            }
          }
        }
        setOutput(dotProd);
      }
    `},af=function(r,t,e,n,a,o){this.outputShape=[],this.variableNames=["x","mean","variance"],de(r,t),de(r,e);var i="0.0";n!=null&&(de(r,n),this.variableNames.push("offset"),i="getOffsetAtOutCoords()");var s="1.0";a!=null&&(de(r,a),this.variableNames.push("scale"),s="getScaleAtOutCoords()"),this.outputShape=r,this.userCode=`
      void main() {
        float x = getXAtOutCoords();
        float mean = getMeanAtOutCoords();
        float variance = getVarianceAtOutCoords();
        float offset = `+i+`;
        float scale = `+s+`;
        float inv = scale * inversesqrt(variance + float(`+o+`));
        setOutput(dot(vec3(x, -mean, offset), vec3(inv, inv, 1)));
      }
    `},of=function(r,t,e,n,a,o){this.packedInputs=!0,this.packedOutput=!0,this.variableNames=["x","mean","variance"],de(r,t),de(r,e);var i="vec4(0.0)";n!=null&&(de(r,n),this.variableNames.push("offset"),i="getOffsetAtOutCoords()");var s="vec4(1.0)";a!=null&&(de(r,a),this.variableNames.push("scale"),s="getScaleAtOutCoords()"),this.outputShape=r,this.userCode=`
      void main() {
        vec4 offset = `+i+`;
        vec4 scale = `+s+`;

        vec4 x = getXAtOutCoords();
        vec4 mean = getMeanAtOutCoords();
        vec4 variance = getVarianceAtOutCoords();

        vec4 inv = scale * inversesqrt(variance + vec4(`+o+`));

        setOutput((x - mean) * inv + offset);
      }
    `},sf="return areal * breal - aimag * bimag;",uf="return areal * bimag + aimag * breal;",Es=function(r,t,e){this.variableNames=["AReal","AImag","BReal","BImag"],this.outputShape=de(t,e),this.userCode=`
      float binaryOpComplex(
          float areal, float aimag, float breal, float bimag) {
        `+r+`
      }

      void main() {
        float areal = getARealAtOutCoords();
        float aimag = getAImagAtOutCoords();
        float breal = getBRealAtOutCoords();
        float bimag = getBImagAtOutCoords();
        setOutput(binaryOpComplex(areal, aimag, breal, bimag));
      }
    `},uo="return a + b;",co="return a - b;",Is="return a * b;",tc="return (a < 0.) ? b * a : a;",De=function(r,t,e){this.variableNames=["A","B"],this.outputShape=de(t,e),this.userCode=`
      float binaryOperation(float a, float b) {
        `+r+`
      }

      void main() {
        float a = getAAtOutCoords();
        float b = getBAtOutCoords();
        setOutput(binaryOperation(a, b));
      }
    `},nc=`
  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));
  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);
`,Yt=function(r,t,e,n){n===void 0&&(n=!1),this.variableNames=["A","B"],this.supportsBroadcasting=!0,this.packedInputs=!0,this.packedOutput=!0,this.outputShape=de(t,e);var a=this.outputShape.length,o="";if(n)if(a===0||Z(this.outputShape)===1)o=`
          result.y = 0.;
          result.z = 0.;
          result.w = 0.;
        `;else if(o=`
          `+Ce(a)+` coords = getOutputCoords();
        `,a===1)o+=`
            result.y = (coords + 1) >= `+this.outputShape[0]+` ? 0. : result.y;
            result.z = 0.;
            result.w = 0.;
          `;else{var i=tt("coords",a);o+=`
            bool nextRowOutOfBounds =
              (`+i[a-2]+" + 1) >= "+this.outputShape[a-2]+`;
            bool nextColOutOfBounds =
              (`+i[a-1]+" + 1) >= "+this.outputShape[a-1]+`;
            result.y = nextColOutOfBounds ? 0. : result.y;
            result.z = nextRowOutOfBounds ? 0. : result.z;
            result.w = nextColOutOfBounds || nextRowOutOfBounds ? 0. : result.w;
          `}this.userCode=`
      vec4 binaryOperation(vec4 a, vec4 b) {
        `+r+`
      }

      void main() {
        vec4 a = getAAtOutCoords();
        vec4 b = getBAtOutCoords();

        vec4 result = binaryOperation(a, b);
        `+o+`

        setOutput(result);
      }
    `},cf=function(){function r(t){this.variableNames=["A"],this.outputShape=t,this.userCode=`
      uniform float minVal;
      uniform float maxVal;

      void main() {
        float value = getAAtOutCoords();
        if (isnan(value)) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, minVal, maxVal));
      }
    `}return r.prototype.getCustomSetupFunc=function(t,e){var n=this;return function(a,o){n.minLoc==null&&(n.minLoc=a.getUniformLocationNoThrow(o,"minVal"),n.maxLoc=a.getUniformLocationNoThrow(o,"maxVal")),a.gl.uniform1f(n.minLoc,t),a.gl.uniform1f(n.maxLoc,e)}},r}(),lf=function(){function r(t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t,this.userCode=`
      uniform float minVal;
      uniform float maxVal;

      void main() {
        vec4 value = getAAtOutCoords();

        if (any(isnan(value))) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, vec4(minVal), vec4(maxVal)));
      }
    `}return r.prototype.getCustomSetupFunc=function(t,e){var n=this;return function(a,o){n.minLoc==null&&(n.minLoc=a.getUniformLocationNoThrow(o,"minVal"),n.maxLoc=a.getUniformLocationNoThrow(o,"maxVal")),a.gl.uniform1f(n.minLoc,t),a.gl.uniform1f(n.maxLoc,e)}},r}(),hf=function(r){this.variableNames=["real","imag"],this.outputShape=r,this.userCode=`
      void main() {
        float re = abs(getRealAtOutCoords());
        float im = abs(getImagAtOutCoords());
        float mx = max(re, im);

        // sadly the length function in glsl is not underflow-safe
        // (at least not on Intel GPUs). So the safe solution is
        // to ensure underflow-safety in all cases.
        setOutput(
          mx == 0.0 ? 0.0 : mx * length(vec2(1, min(re, im)/mx))
        );
      }
    `},df=function(r){this.outputShape=[],this.outputShape=ar(r,1),this.variableNames=r.map(function(s,u){return"T"+u});var t=new Array(r.length-1);t[0]=r[0][1];for(var e=1;e<t.length;e++)t[e]=t[e-1]+r[e][1];var n=["if (yC < "+t[0]+") setOutput(getT0(yR, yC));"];for(e=1;e<t.length;e++){var a=t[e-1];n.push("else if (yC < "+t[e]+") setOutput(getT"+e+"(yR, yC-"+a+"));")}var o=t.length,i=t[t.length-1];n.push("else setOutput(getT"+o+"(yR, yC-"+i+"));"),this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int yR = coords.x;
        int yC = coords.y;

        `+n.join(`
        `)+`
      }
    `},ff=function(r,t){this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[],this.outputShape=ar(r,t);var e=this.outputShape,n=e.length,a=Ce(n),o=tt("coords",n),i=["x","y","z","w","u","v"].slice(0,n);this.variableNames=r.map(function(v,m){return"T"+m});var s=new Array(r.length-1);s[0]=r[0][t];for(var u=1;u<s.length;u++)s[u]=s[u-1]+r[u][t];var c=i[t],l=i.slice(-2),h=i.join(),d="if ("+c+" < "+s[0]+`) {
        return getChannel(
            getT0(`+h+"), vec2("+l.join()+`));
        }`;for(u=1;u<s.length;u++){var f=s[u-1];d+=`
        if (`+c+" < "+s[u]+"  && "+c+" >= "+s[u-1]+`) {
          return getChannel(
            getT`+u+"("+jr(i,c,f)+`),
            vec2(`+jr(l,c,f)+`));
        }`}var p=s.length,g=s[s.length-1];d+=`
        return getChannel(
          getT`+p+"("+jr(i,c,g)+`),
          vec2(`+jr(l,c,g)+"));",this.userCode=`
      float getValue(`+i.map(function(v){return"int "+v})+`) {
        `+d+`
      }

      void main() {
        `+a+` coords = getOutputCoords();
        vec4 result = vec4(getValue(`+o+`), 0., 0., 0.);

        `+o[n-1]+" = "+o[n-1]+` + 1;
        if (`+o[n-1]+" < "+e[n-1]+`) {
          result.g = getValue(`+o+`);
        }

        `+o[n-2]+" = "+o[n-2]+` + 1;
        if (`+o[n-2]+" < "+e[n-2]+`) {
          result.a = getValue(`+o+`);
        }

        `+o[n-1]+" = "+o[n-1]+` - 1;
        if (`+o[n-2]+" < "+e[n-2]+` &&
            `+o[n-1]+" < "+e[n-1]+`) {
          result.b = getValue(`+o+`);
        }
        setOutput(result);
      }
    `};function jr(r,t,e){var n=r.indexOf(t);return r.map(function(a,o){return o===n?a+" - "+e:a}).join()}var pf=function(r){this.variableNames=["x","dy"],this.outputShape=r.filterShape;var t=r.strideHeight,e=r.strideWidth,n=r.padInfo.top,a=r.padInfo.left,o=r.dataFormat==="channelsLast";this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int wR = coords.x;
        int wC = coords.y;
        int d1 = coords.z;
        int d2 = coords.w;

        // Convolve x(?, ?, d1) with dy(:, :, d2) to get dw(wR, wC, d1, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int b = 0; b < `+r.batchSize+`; b++) {
          for (int yR = 0; yR < `+r.outHeight+`; yR++) {
            int xR = wR + yR * `+t+" - "+n+`;

            if (xR < 0 || xR >= `+r.inHeight+`) {
              continue;
            }

            for (int yC = 0; yC < `+r.outWidth+`; yC++) {
              int xC = wC + yC * `+e+" - "+a+`;

              if (xC < 0 || xC >= `+r.inWidth+`) {
                continue;
              }

              if (`+o+`) {
                float dyValue = getDy(b, yR, yC, d2);
                float xValue = getX(b, xR, xC, d1);
                dotProd += (xValue * dyValue);
              } else {
                float dyValue = getDy(b, d2, yR, yC);
                float xValue = getX(b, d1, xR, xC);
                dotProd += (xValue * dyValue);
              }

            }
          }
        }
        setOutput(dotProd);
      }
    `},vf=function(r){this.variableNames=["dy","W"],this.outputShape=r.inShape;var t=r.filterHeight,e=r.filterWidth,n=r.strideHeight,a=r.strideWidth,o=r.dataFormat==="channelsLast",i=t-1-r.padInfo.top,s=e-1-r.padInfo.left,u=o?1:2,c=o?2:3,l=o?3:1;this.userCode=`
      const ivec2 pads = ivec2(`+i+", "+s+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[`+l+`];

        ivec2 dyCorner = ivec2(coords[`+u+"], coords["+c+`]) - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < `+t+`; wR++) {
          float dyR = float(dyRCorner + wR) / `+n+`.0;

          if (dyR < 0.0 || dyR >= `+r.outHeight+`.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = `+t+` - 1 - wR;

          for (int wC = 0; wC < `+e+`; wC++) {
            float dyC = float(dyCCorner + wC) / `+a+`.0;

            if (dyC < 0.0 || dyC >= `+r.outWidth+`.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            int wCPerm = `+e+` - 1 - wC;

            for (int d2 = 0; d2 < `+r.outChannels+`; d2++) {

              if (`+o+`) {
                float xValue = getDy(batch, idyR, idyC, d2);
                float wValue = getW(wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              } else {
                float xValue = getDy(batch, d2, idyR, idyC);
                float wValue = getW(wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              }

            }
          }
        }
        setOutput(dotProd);
      }
    `},gf=function(r){this.variableNames=["x","dy"],this.outputShape=r.filterShape;var t=r.strideDepth,e=r.strideHeight,n=r.strideWidth,a=r.padInfo.front,o=r.padInfo.top,i=r.padInfo.left;this.userCode=`
      void main() {
        ivec5 coords = getOutputCoords();
        int wF = coords.x;
        int wR = coords.y;
        int wC = coords.z;
        int d1 = coords.w;
        int d2 = coords.u;

        float dotProd = 0.0;

        for (int b = 0; b < `+r.batchSize+`; b++) {
          for (int yF = 0; yF < `+r.outDepth+`; yF++) {
            int xF = wF + yF * `+t+" - "+a+`;

            if (xF < 0 || xF >= `+r.inDepth+`) {
              continue;
            }

            for (int yR = 0; yR < `+r.outHeight+`; yR++) {
              int xR = wR + yR * `+e+" - "+o+`;

              if (xR < 0 || xR >= `+r.inHeight+`) {
                continue;
              }

              for (int yC = 0; yC < `+r.outWidth+`; yC++) {
                int xC = wC + yC * `+n+" - "+i+`;

                if (xC < 0 || xC >= `+r.inWidth+`) {
                  continue;
                }

                float dyValue = getDy(b, yF, yR, yC, d2);
                float xValue = getX(b, xF, xR, xC, d1);
                dotProd += (xValue * dyValue);
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `},mf=function(r){this.variableNames=["dy","W"],this.outputShape=r.inShape;var t=r.filterDepth,e=r.filterHeight,n=r.filterWidth,a=r.strideDepth,o=r.strideHeight,i=r.strideWidth,s=t-1-r.padInfo.front,u=e-1-r.padInfo.top,c=n-1-r.padInfo.left;this.userCode=`
      const ivec3 pads = ivec3(`+s+", "+u+", "+c+`);

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int d1 = coords.u;


        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyFCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        float dotProd = 0.0;
        for (int wF = 0; wF < `+t+`; wF++) {
          float dyF = float(dyFCorner + wF) / `+a+`.0;

          if (dyF < 0.0 || dyF >= `+r.outDepth+`.0 || fract(dyF) > 0.0) {
            continue;
          }
          int idyF = int(dyF);

          int wFPerm = `+t+` - 1 - wF;

          for (int wR = 0; wR < `+e+`; wR++) {
            float dyR = float(dyRCorner + wR) / `+o+`.0;

            if (dyR < 0.0 || dyR >= `+r.outHeight+`.0 ||
              fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            int wRPerm = `+e+` - 1 - wR;

            for (int wC = 0; wC < `+n+`; wC++) {
              float dyC = float(dyCCorner + wC) / `+i+`.0;

              if (dyC < 0.0 || dyC >= `+r.outWidth+`.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              int wCPerm = `+n+` - 1 - wC;

              for (int d2 = 0; d2 < `+r.outChannels+`; d2++) {
                float xValue = getDy(batch, idyF, idyR, idyC, d2);
                float wValue = getW(wFPerm, wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `},yf=function(r){this.variableNames=["x","dy"],this.outputShape=r.filterShape;var t=r.strideHeight,e=r.strideWidth,n=r.padInfo.top,a=r.padInfo.left,o=r.outChannels/r.inChannels;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int wR = coords.x;
        int wC = coords.y;
        int d1 = coords.z;
        int dm = coords.w;
        int d2 = d1 * `+o+` + dm;

        float dotProd = 0.0;

        // TO DO: Vec4 over the batch size
        for (int b = 0; b < `+r.batchSize+`; b++) {
          for (int yR = 0; yR < `+r.outHeight+`; yR++) {
            int xR = wR + yR * `+t+" - "+n+`;

            if (xR < 0 || xR >= `+r.inHeight+`) {
              continue;
            }

            for (int yC = 0; yC < `+r.outWidth+`; yC++) {
              int xC = wC + yC * `+e+" - "+a+`;

              if (xC < 0 || xC >= `+r.inWidth+`) {
                continue;
              }

              float dyValue = getDy(b, yR, yC, d2);
              float xValue = getX(b, xR, xC, d1);
              dotProd += (xValue * dyValue);
            }
          }
        }
        setOutput(dotProd);
      }
    `},bf=function(r){this.variableNames=["dy","W"],this.outputShape=r.inShape;var t=r.filterHeight,e=r.filterWidth,n=r.strideHeight,a=r.strideWidth,o=t-1-r.padInfo.top,i=e-1-r.padInfo.left,s=r.outChannels/r.inChannels;this.userCode=`
      const ivec2 pads = ivec2(`+o+", "+i+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[3];
        ivec2 dyCorner = coords.yz - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        float dotProd = 0.0;

        for (int wR = 0; wR < `+t+`; wR++) {
          float dyR = float(dyRCorner + wR) / `+n+`.0;

          if (dyR < 0.0 || dyR >= `+r.outHeight+`.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = `+t+` - 1 - wR;

          for (int wC = 0; wC < `+e+`; wC++) {
            float dyC = float(dyCCorner + wC) / `+a+`.0;

            if (dyC < 0.0 || dyC >= `+r.outWidth+`.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            int wCPerm = `+e+` - 1 - wC;

            // TO DO: Vec4 over the channelMul
            for (int dm = 0; dm < `+s+`; dm++) {
              int d2 = d1 * `+s+` + dm;
              float xValue = getDy(batch, idyR, idyC, d2);
              float wValue = getW(wRPerm, wCPerm, d1, dm);
              dotProd += xValue * wValue;
            }
          }
        }
        setOutput(dotProd);
      }
    `},ks=function(r,t,e,n){t===void 0&&(t=!1),e===void 0&&(e=null),n===void 0&&(n=!1),this.variableNames=["x","W"],this.outputShape=r.outShape;var a=r.padInfo.top,o=r.padInfo.left,i=r.strideHeight,s=r.strideWidth,u=r.dilationHeight,c=r.dilationWidth,l=r.filterHeight,h=r.filterWidth,d=4*Math.floor(r.inChannels/4),f=r.inChannels%4,p=r.dataFormat==="channelsLast",g=p?1:2,v=p?2:3,m=p?3:1,b="",x="";e&&(b=n?`float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          `+e+`
        }`:`
          float activation(float x) {
            `+e+`
          }
        `,x="result = activation(result);");var y=t?"result += getBiasAtOutCoords();":"";t&&this.variableNames.push("bias"),n&&this.variableNames.push("preluActivationWeights"),this.userCode=`
      `+b+`

      const ivec2 strides = ivec2(`+i+", "+s+`);
      const ivec2 pads = ivec2(`+a+", "+o+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d2 = coords[`+m+`];

        ivec2 xRCCorner =
            ivec2(coords[`+g+"], coords["+v+`]) * strides - pads;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // Convolve x(?, ?, d1) with w(:, :, d1, d2) to get y(yR, yC, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < `+l+`; wR++) {
          int xR = xRCorner + wR * `+u+`;

          if (xR < 0 || xR >= `+r.inHeight+`) {
            continue;
          }

          for (int wC = 0; wC < `+h+`; wC++) {
            int xC = xCCorner + wC * `+c+`;

            if (xC < 0 || xC >= `+r.inWidth+`) {
              continue;
            }

            for (int d1 = 0; d1 < `+d+`; d1 += 4) {
              vec4 wValues = vec4(
                getW(wR, wC, d1, d2),
                getW(wR, wC, d1 + 1, d2),
                getW(wR, wC, d1 + 2, d2),
                getW(wR, wC, d1 + 3, d2)
              );

              if (`+p+`) {
                vec4 xValues = vec4(
                  getX(batch, xR, xC, d1),
                  getX(batch, xR, xC, d1 + 1),
                  getX(batch, xR, xC, d1 + 2),
                  getX(batch, xR, xC, d1 + 3)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec4 xValues = vec4(
                  getX(batch, d1, xR, xC),
                  getX(batch, d1 + 1, xR, xC),
                  getX(batch, d1 + 2, xR, xC),
                  getX(batch, d1 + 3, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }
            }

            if (`+(f===1)+`) {

              if (`+p+`) {
                dotProd +=
                    getX(batch, xR, xC, `+d+`) *
                    getW(wR, wC, `+d+`, d2);
              } else {
                dotProd +=
                    getX(batch, `+d+`, xR, xC) *
                    getW(wR, wC, `+d+`, d2);
              }

            } else if (`+(f===2)+`) {
              vec2 wValues = vec2(
                getW(wR, wC, `+d+`, d2),
                getW(wR, wC, `+d+` + 1, d2)
              );

              if (`+p+`) {
                vec2 xValues = vec2(
                  getX(batch, xR, xC, `+d+`),
                  getX(batch, xR, xC, `+d+` + 1)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec2 xValues = vec2(
                  getX(batch, `+d+`, xR, xC),
                  getX(batch, `+d+` + 1, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }

            } else if (`+(f===3)+`) {
              vec3 wValues = vec3(
                getW(wR, wC, `+d+`, d2),
                getW(wR, wC, `+d+` + 1, d2),
                getW(wR, wC, `+d+` + 2, d2)
              );

              if (`+p+`) {
                vec3 xValues = vec3(
                  getX(batch, xR, xC, `+d+`),
                  getX(batch, xR, xC, `+d+` + 1),
                  getX(batch, xR, xC, `+d+` + 2)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec3 xValues = vec3(
                  getX(batch, `+d+`, xR, xC),
                  getX(batch, `+d+` + 1, xR, xC),
                  getX(batch, `+d+` + 2, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }

            }
          }
        }

        float result = dotProd;
        `+y+`
        `+x+`
        setOutput(result);
      }
    `},xf=function(r){this.variableNames=["x","W"],this.outputShape=r.outShape;var t=r.padInfo.front,e=r.padInfo.top,n=r.padInfo.left,a=r.strideDepth,o=r.strideHeight,i=r.strideWidth,s=r.dilationDepth,u=r.dilationHeight,c=r.dilationWidth,l=r.filterDepth,h=r.filterHeight,d=r.filterWidth,f=4*Math.floor(r.inChannels/4),p=r.inChannels%4;this.userCode=`
      const ivec3 strides = ivec3(`+a+", "+o+", "+i+`);
      const ivec3 pads = ivec3(`+t+", "+e+", "+n+`);

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int d2 = coords.u;

        ivec3 xFRCCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
        int xFCorner = xFRCCorner.x;
        int xRCorner = xFRCCorner.y;
        int xCCorner = xFRCCorner.z;

        // Convolve x(?, ?, ?, d1) with w(:, :, :, d1, d2) to get
        // y(yF, yR, yC, d2). ? = to be determined. : = across all
        // values in that axis.
        float dotProd = 0.0;
        for (int wF = 0; wF < `+l+`; wF++) {
          int xF = xFCorner + wF * `+s+`;

          if (xF < 0 || xF >= `+r.inDepth+`) {
            continue;
          }

          for (int wR = 0; wR < `+h+`; wR++) {
            int xR = xRCorner + wR * `+u+`;

            if (xR < 0 || xR >= `+r.inHeight+`) {
              continue;
            }

            for (int wC = 0; wC < `+d+`; wC++) {
              int xC = xCCorner + wC * `+c+`;

              if (xC < 0 || xC >= `+r.inWidth+`) {
                continue;
              }

              for (int d1 = 0; d1 < `+f+`; d1 += 4) {
                vec4 xValues = vec4(
                  getX(batch, xF, xR, xC, d1),
                  getX(batch, xF, xR, xC, d1 + 1),
                  getX(batch, xF, xR, xC, d1 + 2),
                  getX(batch, xF, xR, xC, d1 + 3)
                );
                vec4 wValues = vec4(
                  getW(wF, wR, wC, d1, d2),
                  getW(wF, wR, wC, d1 + 1, d2),
                  getW(wF, wR, wC, d1 + 2, d2),
                  getW(wF, wR, wC, d1 + 3, d2)
                );

                dotProd += dot(xValues, wValues);
              }

              if (`+(p===1)+`) {
                dotProd +=
                  getX(batch, xF, xR, xC, `+f+`) *
                  getW(wF, wR, wC, `+f+`, d2);
              } else if (`+(p===2)+`) {
                vec2 xValues = vec2(
                  getX(batch, xF, xR, xC, `+f+`),
                  getX(batch, xF, xR, xC, `+f+` + 1)
                );
                vec2 wValues = vec2(
                  getW(wF, wR, wC, `+f+`, d2),
                  getW(wF, wR, wC, `+f+` + 1, d2)
                );
                dotProd += dot(xValues, wValues);
              } else if (`+(p===3)+`) {
                vec3 xValues = vec3(
                  getX(batch, xF, xR, xC, `+f+`),
                  getX(batch, xF, xR, xC, `+f+` + 1),
                  getX(batch, xF, xR, xC, `+f+` + 2)
                );
                vec3 wValues = vec3(
                  getW(wF, wR, wC, `+f+`, d2),
                  getW(wF, wR, wC, `+f+` + 1, d2),
                  getW(wF, wR, wC, `+f+` + 2, d2)
                );
                dotProd += dot(xValues, wValues);
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `},Ss=function(r,t,e,n){t===void 0&&(t=!1),e===void 0&&(e=null),n===void 0&&(n=!1),this.variableNames=["x","W"],this.outputShape=r.outShape;var a=r.inHeight,o=r.inWidth,i=r.padInfo.top,s=r.padInfo.left,u=r.strideHeight,c=r.strideWidth,l=r.dilationHeight,h=r.dilationWidth,d=r.filterHeight,f=r.filterWidth,p=r.outChannels/r.inChannels,g="",v="";e&&(g=n?`float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          `+e+`
        }`:`
          float activation(float x) {
            `+e+`
          }
        `,v="result = activation(result);");var m=t?"result += getBiasAtOutCoords();":"";t&&this.variableNames.push("bias"),n&&this.variableNames.push("preluActivationWeights"),this.userCode=`
      `+g+`

      const ivec2 strides = ivec2(`+u+", "+c+`);
      const ivec2 pads = ivec2(`+i+", "+s+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        ivec2 xRCCorner = coords.yz * strides - pads;
        int d2 = coords.w;
        int d1 = d2 / `+p+`;
        int q = d2 - d1 * `+p+`;

        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // Convolve x(?, ?, d1) with w(:, :, d1, q) to get y(yR, yC, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        // TO DO(dsmilkov): Flatten the two for loops and vec4 the operations.
        for (int wR = 0; wR < `+d+`; wR++) {
          int xR = xRCorner + wR * `+l+`;

          if (xR < 0 || xR >= `+a+`) {
            continue;
          }

          for (int wC = 0; wC < `+f+`; wC++) {
            int xC = xCCorner + wC * `+h+`;

            if (xC < 0 || xC >= `+o+`) {
              continue;
            }

            float xVal = getX(batch, xR, xC, d1);
            float wVal = getW(wR, wC, d1, q);
            dotProd += xVal * wVal;
          }
        }

        float result = dotProd;
        `+m+`
        `+v+`
        setOutput(result);
      }
    `},Rs=function(r,t,e,n){t===void 0&&(t=!1),e===void 0&&(e=null),n===void 0&&(n=!1),this.variableNames=["x","W"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=r.outShape;for(var a=r.inHeight,o=r.inWidth,i=r.padInfo.top,s=r.padInfo.left,u=r.strideHeight,c=r.strideWidth,l=r.dilationHeight,h=r.dilationWidth,d=r.filterHeight,f=r.filterWidth,p=f,g="int xR; int xC; int xCOffset;",v=0;v<d;v++)for(var m=0;m<f;m++)g+=`
          vec4 xTexelR`+v+"C"+2*m+` = vec4(0.);
          vec4 wR`+v+"C"+m+` = vec4(0.);
          vec4 xR`+v+"C"+m+" = vec4(0.);";for(v=0;v<d;v++)for(var b=0;b<p;b++){if(g+=`
          xR = xRCorner + `+v*l+`;
          xC = xCCorner + `+(m=2*b)*h+`;
        `,c===1){if(m<f&&(g+=s%2==1?`
                xCOffset = xC + 1;
                if(xR >= 0 && xR < `+a+" && xCOffset >= 0 && xCOffset < "+o+`) {
                  xTexelR`+v+"C"+m+` = getX(batch, xR, xCOffset, d1);

                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if(xCOffset + 1 >= `+o+`) {
                    xTexelR`+v+"C"+m+`.zw = vec2(0.);
                  }
                } else {
                  xTexelR`+v+"C"+m+` = vec4(0.);
                }

                xCOffset = xC + 1 - 2;
                if(xR >= 0 && xR < `+a+" && xCOffset >= 0 && xCOffset < "+o+`) {
                  vec4 previous = getX(batch, xR, xCOffset, d1);

                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if(xCOffset + 1 >= `+o+`) {
                    previous.zw = vec2(0.);
                  }

                  xR`+v+"C"+m+" = vec4(previous.zw, xTexelR"+v+"C"+m+`.xy);
                } else {
                  xR`+v+"C"+m+" = vec4(0, 0, xTexelR"+v+"C"+m+`.xy);
                }
              `:`
                if(xR >= 0 && xR < `+a+" && xC >= 0 && xC < "+o+`) {
                  xTexelR`+v+"C"+m+` = getX(batch, xR, xC, d1);
                } else {
                  xTexelR`+v+"C"+m+` = vec4(0.);
                }

                xR`+v+"C"+m+" = xTexelR"+v+"C"+m+`;
              `,m+1<f)){var x=s%2==0?xu(h):h;h%2==0&&s%2==1||h%2!=0&&s%2!=1?(g+=`
                  xCOffset = xC + `+s%2+" + "+x+`;

                  if(xR >= 0 && xR < `+a+` &&
                    xCOffset >= 0 && xCOffset < `+o+`) {
                    xTexelR`+v+"C"+(m+2)+` = getX(batch, xR, xCOffset, d1);
                  }
                `,h>1&&(g+=`
                    xCOffset -= 2;
                    if(xR >= 0 && xR < `+a+` &&
                      xCOffset >= 0 && xCOffset < `+o+`) {
                      xTexelR`+v+"C"+m+` = getX(batch, xR, xCOffset, d1);
                    } else {
                      xTexelR`+v+"C"+m+` = vec4(0.);
                    }
                  `),g+=`
                  xR`+v+"C"+(m+1)+` = vec4(
                    xTexelR`+v+"C"+m+".zw, xTexelR"+v+"C"+(m+2)+`.xy);
                `):g+=`
                  xCOffset = xC + `+x+`;

                  if(xR >= 0 && xR < `+a+` &&
                    xCOffset >= 0 && xCOffset < `+o+`) {
                    xTexelR`+v+"C"+(m+2)+` = getX(batch, xR, xCOffset, d1);
                  }

                  xR`+v+"C"+(m+1)+" = xTexelR"+v+"C"+(m+2)+`;
                `}}else m<f&&(g+=`
              if(xR >= 0 && xR < `+a+`) {
            `,s%2==1?(g+=`
                xCOffset = xC + 1 - `+c+`;
                if(xCOffset >= 0 && xCOffset < `+o+`) {
                  xTexelR`+v+"C"+m+` = getX(batch, xR, xCOffset, d1);
                } else {
                  xTexelR`+v+"C"+m+` = vec4(0.);
                }

                if(xC + 1 >= 0 && xC + 1 < `+o+`) {
                  xTexelR`+v+"C"+(m+2)+` = getX(batch, xR, xC + 1, d1);
                } else {
                  xTexelR`+v+"C"+(m+2)+` = vec4(0.);
                }

                xR`+v+"C"+m+` = vec4(
                  xTexelR`+v+"C"+m+".zw, xTexelR"+v+"C"+(m+2)+`.zw);
              `,m+1<f&&(g+=`
                  vec4 final = vec4(0.);
                  xCOffset = xC + 1 + `+c+`;
                  if(xCOffset >= 0 && xCOffset < `+o+`) {
                    final = getX(batch, xR, xCOffset, d1);
                  }
                  xR`+v+"C"+(m+1)+" = vec4(xTexelR"+v+"C"+(m+2)+`.xy, final.xy);
                `)):(g+=`
                if(xC >= 0 && xC < `+o+`) {
                  xTexelR`+v+"C"+m+` = getX(batch, xR, xC, d1);
                } else {
                  xTexelR`+v+"C"+m+` = vec4(0.);
                }

                xCOffset = xC + `+c+`;
                if(xCOffset >= 0 && xCOffset < `+o+`) {
                  xTexelR`+v+"C"+(m+2)+` = getX(batch, xR, xCOffset, d1);
                } else {
                  xTexelR`+v+"C"+(m+2)+` = vec4(0.);
                }

                xR`+v+"C"+m+` = vec4(
                  xTexelR`+v+"C"+m+".xy, xTexelR"+v+"C"+(m+2)+`.xy);
              `,m+1<f&&(g+=`
                  xR`+v+"C"+(m+1)+` = vec4(
                    xTexelR`+v+"C"+m+".zw, xTexelR"+v+"C"+(m+2)+`.zw);
                `)),g+="}");m<f&&(g+=`
            vec4 wTexelR`+v+"C"+m+" = getW("+v+", "+m+`, d1, q);
            wR`+v+"C"+m+" = vec4(wTexelR"+v+"C"+m+".xz, wTexelR"+v+"C"+m+`.xz);
          `,m+1<f&&(g+=`
              vec4 wTexelR`+v+"C"+(m+1)+" = getW("+v+", "+(m+1)+`, d1, q);
              wR`+v+"C"+(m+1)+` =
                vec4(wTexelR`+v+"C"+(m+1)+".xz, wTexelR"+v+"C"+(m+1)+".xz);"))}for(v=0;v<d;v++)for(m=0;m<f;m++)g+="dotProd += xR"+v+"C"+m+" * wR"+v+"C"+m+";";var y="",w="";e&&(y=n?`vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          `+e+`
        }`:`vec4 activation(vec4 x) {
          `+e+`
        }`,w="result = activation(result);");var C=t?"result += getBiasAtOutCoords();":"";t&&this.variableNames.push("bias"),n&&this.variableNames.push("preluActivationWeights"),this.userCode=`
      `+y+`

      const ivec2 strides = ivec2(`+u+", "+c+`);
      const ivec2 pads = ivec2(`+i+", "+s+`);

      void main() {

        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        ivec2 xRCCorner = coords.yz * strides - pads;
        int d2 = coords.w;
        int d1 = d2;
        int q = 0;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        vec4 dotProd = vec4(0.);

        `+g+`

        vec4 result = dotProd;
        `+C+`
        `+w+`
        setOutput(result);
      }
    `},wf=function(r,t,e,n,a){this.variableNames=["Image","Boxes","BoxInd"],this.outputShape=[];var o=r[0],i=r[1],s=r[2],u=r[3],c=t[0],l=e[0],h=e[1];this.outputShape=[c,l,h,u];var d=n==="bilinear"?1:0,f=[i-1+".0",s-1+".0"],p=f[0],g=f[1],v=l>1?[""+(i-1)/(l-1),"(y2-y1) * height_ratio","y1*"+p+" + float(y)*(height_scale)"]:["0.0","0.0","0.5 * (y1+y2) * "+p],m=v[0],b=v[1],x=v[2],y=h>1?[""+(s-1)/(h-1),"(x2-x1) * width_ratio","x1*"+g+" + float(x)*(width_scale)"]:["0.0","0.0","0.5 * (x1+x2) * "+g],w=y[0],C=y[1],R=y[2];this.userCode=`
      const float height_ratio = float(`+m+`);
      const float width_ratio = float(`+w+`);
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int y = coords[1];
        int x = coords[2];
        int d = coords[3];

        // get box vals
        float y1 = getBoxes(b,0);
        float x1 = getBoxes(b,1);
        float y2 = getBoxes(b,2);
        float x2 = getBoxes(b,3);

        // get image in batch index
        int bInd = round(getBoxInd(b));
        if(bInd < 0 || bInd >= `+o+`) {
          return;
        }

        float height_scale = `+b+`;
        float width_scale = `+C+`;

        float in_y = `+x+`;
        if( in_y < 0.0 || in_y > `+p+` ) {
          setOutput(float(`+a+`));
          return;
        }
        float in_x = `+R+`;
        if( in_x < 0.0 || in_x > `+g+` ) {
          setOutput(float(`+a+`));
          return;
        }

        vec2 sourceFracIndexCR = vec2(in_x,in_y);
        if(`+d+` == 1) {
          // Compute the four integer indices.
          ivec2 sourceFloorCR = ivec2(sourceFracIndexCR);
          ivec2 sourceCeilCR = ivec2(ceil(sourceFracIndexCR));

          float topLeft = getImage(b, sourceFloorCR.y, sourceFloorCR.x, d);
          float bottomLeft = getImage(b, sourceCeilCR.y, sourceFloorCR.x, d);
          float topRight = getImage(b, sourceFloorCR.y, sourceCeilCR.x, d);
          float bottomRight = getImage(b, sourceCeilCR.y, sourceCeilCR.x, d);

          vec2 fracCR = sourceFracIndexCR - vec2(sourceFloorCR);

          float top = topLeft + (topRight - topLeft) * fracCR.x;
          float bottom = bottomLeft + (bottomRight - bottomLeft) * fracCR.x;
          float newValue = top + (bottom - top) * fracCR.y;
          setOutput(newValue);
        } else {
          // Compute the coordinators of nearest neighbor point.
          ivec2 sourceNearestCR = ivec2(floor(
            sourceFracIndexCR + vec2(0.5,0.5)));
          float newValue = getImage(b, sourceNearestCR.y, sourceNearestCR.x, d);
          setOutput(newValue);
        }
      }
    `},Cf=function(r,t,e){this.variableNames=["x"],this.outputShape=r;var n=r.length,a=r[r.length-1],o=e?"<":">";this.userCode=`
      int getIndex(int i) {
        `+(e?"return "+a+" -i - 1;":"return i;")+`
      }

      void main() {
        `+Ce(n)+` coords = getOutputCoords();
        int end = `+As(n,"coords")+`;
        float val = 0.0;
        for (int i = `+a+` - 1; i >= 0; i -= 1) {
          int idx = getIndex(i);
          if (idx `+o+` end) {
            continue;
          }
          if (idx == end && `+t+`) {
            continue;
          }
          `+As(n,"coords")+` = idx;
          val += getX(`+function(i,s){if(i===1)return""+s;if(i===2)return s+".x, "+s+".y";if(i===3)return s+".x, "+s+".y, "+s+".z";if(i===4)return s+".x, "+s+".y, "+s+".z, "+s+".w";throw Error("Cumulative sum for rank "+i+" is not yet supported")}(n,"coords")+`);
        }
        setOutput(val);
      }
    `};function As(r,t){if(r===1)return""+t;if(r===2)return t+".y";if(r===3)return t+".z";if(r===4)return t+".w";throw Error("Cumulative sum for rank "+r+" is not yet supported")}var _f=function(r){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outPackingScheme=wr.DENSE;var t=vr(r),e=Ye();this.outputShape=r,this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        `+kn(["r","c","d"],r)+`
        return ivec3(r, c, d);
      }

      void main() {
        ivec2 resTexRC = ivec2(resultUV.yx *
          vec2(`+t[0]+", "+t[1]+`));
        int index = 4 * (resTexRC.x * `+t[1]+` + resTexRC.y);

        vec4 result = vec4(0.);

        for (int i=0; i<4; i++) {
          int flatIndex = index + i;
          ivec3 rc = outCoordsFromFlatIndex(flatIndex);
          result[i] = getA(rc.x, rc.y, rc.z);
        }

        `+e.output+` = result;
      }
    `},Ef=function(r){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outPackingScheme=wr.DENSE;var t=vr(r),e=Ye();this.outputShape=r,this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        `+kn(["r","c","d"],r)+`
        return ivec3(r, c, d);
      }

      void main() {
        ivec2 resTexRC = ivec2(resultUV.yx *
          vec2(`+t[0]+", "+t[1]+`));
        int index = 4 * (resTexRC.x * `+t[1]+` + resTexRC.y);

        vec4 result = vec4(0.);

        for (int i=0; i<4; i++) {
          int flatIndex = index + i;
          ivec3 rc = outCoordsFromFlatIndex(flatIndex);
          result[i] = getChannel(getA(rc.x, rc.y, rc.z), vec2(rc.y, rc.z));
        }

        `+e.output+` = result;
      }
    `},If=function(){function r(t,e,n){this.variableNames=["x"],this.outputShape=[],this.outputShape=t,this.blockSize=e,this.dataFormat=n,this.userCode=`
    void main() {
      ivec4 coords = getOutputCoords();
      int b = coords[0];
      int h = `+this.getHeightCoordString()+`;
      int w = `+this.getWidthCoordString()+`;
      int d = `+this.getDepthCoordString()+`;

      int in_h = h / `+e+`;
      int offset_h = imod(h, `+e+`);
      int in_w = w / `+e+`;
      int offset_w = imod(w, `+e+`);
      int offset_d = (offset_h * `+e+` + offset_w) *
        `+this.getOutputDepthSize()+`;
      int in_d = d + offset_d;

      float result = `+this.getInputSamplingString()+`;
      setOutput(result);
    }
  `}return r.prototype.getHeightCoordString=function(){return this.dataFormat==="NHWC"?"coords[1]":"coords[2]"},r.prototype.getWidthCoordString=function(){return this.dataFormat==="NHWC"?"coords[2]":"coords[3]"},r.prototype.getDepthCoordString=function(){return this.dataFormat==="NHWC"?"coords[3]":"coords[1]"},r.prototype.getOutputDepthSize=function(){return this.dataFormat==="NHWC"?this.outputShape[3]:this.outputShape[1]},r.prototype.getInputSamplingString=function(){return this.dataFormat==="NHWC"?"getX(b, in_h, in_w, in_d)":"getX(b, in_d, in_h, in_w)"},r}(),kf=function(r){this.variableNames=["X"],this.outputShape=[r,r],this.userCode=`
      void main() {
          ivec2 coords = getOutputCoords();
          float val = coords[0] == coords[1] ? getX(coords[0]) : 0.0;
          setOutput(val);
      }
    `},Sf=function(r){this.variableNames=["A"],this.outTexUsage=ct.DOWNLOAD;var t=Ye();this.outputShape=r,this.userCode=`
      `+Qu+`

      void main() {
        float x = getAAtOutCoords();
        `+t.output+` = encode_float(x);
      }
    `},Rf=function(r){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!1,this.outTexUsage=ct.DOWNLOAD;var t=Ye();this.outputShape=r,this.userCode=`
      `+Qu+`

      void main() {
        ivec3 coords = getOutputCoords();
        float x = getChannel(getAAtOutCoords(), vec2(coords.y, coords.z));
        `+t.output+` = encode_float(x);
      }
    `},Af=function(r,t,e){e===void 0&&(e=!1),this.variableNames=["A"];var n=Ye(),a=t[0],o=t[1];this.outputShape=r;var i="result";e&&(i="floor(result * 255. + 0.5)"),this.userCode=`
      `+fi(r)+`

      void main() {
        ivec3 coords = getOutputCoords();

        int flatIndex = getFlatIndex(coords);
        int offset = imod(flatIndex, 4);

        flatIndex = idiv(flatIndex, 4, 1.);
        
        int r = flatIndex / `+o+`;
        int c = imod(flatIndex, `+o+`);
        vec2 uv = (vec2(c, r) + halfCR) / vec2(`+o+".0, "+a+`.0);
        vec4 values = `+n.texture2D+`(A, uv);

        float result;

        if(offset == 0) {
          result = values[0];
        } else if(offset == 1) {
          result = values[1];
        } else if(offset == 2) {
          result = values[2];
        } else {
          result = values[3];
        }

        `+n.output+" = vec4("+i+`, 0., 0., 0.);
      }
    `},Df=function(r,t,e){e===void 0&&(e=!1),this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0;var n=Ye(),a=t[0],o=t[1];this.outputShape=r;var i="",s="result";e&&(s="floor(result * 255. + 0.5)");for(var u=0;u<=1;u++)for(var c=0;c<=1;c++){var l=2*u+c;i+=`
          localCoords = coords;
          if(localCoords[2] + `+c+" < "+r[2]+`) {
            localCoords[2] += `+c+`;
            if(localCoords[1] + `+u+" < "+r[1]+`) {
              localCoords[1] += `+u+`;

              flatIndex = getFlatIndex(localCoords);
              offset = imod(flatIndex, 4);

              flatIndex = idiv(flatIndex, 4, 1.);

              r = flatIndex / `+o+`;
              c = imod(flatIndex, `+o+`);
              uv = (vec2(c, r) + halfCR) / vec2(`+o+".0, "+a+`.0);
              values = `+n.texture2D+`(A, uv);

              if(offset == 0) {
                result[`+l+`] = values[0];
              } else if(offset == 1) {
                result[`+l+`] = values[1];
              } else if(offset == 2) {
                result[`+l+`] = values[2];
              } else {
                result[`+l+`] = values[3];
              }
            }
          }
        `}this.userCode=`
      `+fi(r)+`

      void main() {
        ivec3 coords = getOutputCoords();

        vec4 result = vec4(0.);
        int flatIndex, r, c, offset;
        ivec3 localCoords;
        vec2 uv;
        vec4 values;

        `+i+`

        `+n.output+" = "+s+`;
      }
    `},Tf="return real * expR - imag * expI;",Nf="return real * expI + imag * expR;",Ds=function(r,t,e){this.variableNames=["real","imag"];var n=t[1];this.outputShape=t;var a=e?"2.0 * "+Math.PI:"-2.0 * "+Math.PI,o=e?n+".0":"1.0";this.userCode=`
      const float exponentMultiplier = `+a+`;

      float unaryOpComplex(float real, float expR, float imag, float expI) {
        `+r+`
      }

      float mulMatDFT(int batch, int index) {
        float indexRatio = float(index) / float(`+n+`);
        float exponentMultiplierTimesIndexRatio =
            exponentMultiplier * indexRatio;

        float result = 0.0;

        for (int i = 0; i < `+n+`; i++) {
          // x = (-2|2 * PI / N) * index * i;
          float x = exponentMultiplierTimesIndexRatio * float(i);
          float expR = cos(x);
          float expI = sin(x);
          float real = getReal(batch, i);
          float imag = getImag(batch, i);

          result +=
              unaryOpComplex(real, expR, imag, expI) / `+o+`;
        }

        return result;
      }

      void main() {
        ivec2 coords = getOutputCoords();
        setOutput(mulMatDFT(coords[0], coords[1]));
      }
    `},Ff=function(){function r(t,e){this.outputShape=[],this.variableNames=["x"],this.outputShape=t,this.userCode=`
      uniform float value;
      void main() {
        // Input can be obtained from uniform value.
        setOutput(value);
      }
    `}return r.prototype.getCustomSetupFunc=function(t){var e=this;return function(n,a){e.valueLoc==null&&(e.valueLoc=n.getUniformLocationNoThrow(a,"value")),n.gl.uniform1f(e.valueLoc,t)}},r}(),Pf=function(r,t,e){this.variableNames=["A","indices"];var n=r.slice();n[e]=t,this.outputShape=n,this.rank=n.length;var a=Ce(this.rank),o=function(i,s){var u=i.length;if(u>4)throw Error("Gather for rank "+u+" is not yet supported");if(u===1)return"int(getIndices(resRC))";for(var c=["resRC.x","resRC.y","resRC.z","resRC.w"],l=[],h=0;h<i.length;h++)h===s?l.push("int(getIndices("+c[h]+"))"):l.push(""+c[h]);return l.join()}(r,e);this.userCode=`
      void main() {
        `+a+` resRC = getOutputCoords();
        setOutput(getA(`+o+`));
      }
    `},Mf=function(r,t,e){this.sliceDim=r,this.strides=t,this.variableNames=["x","indices"],this.outputShape=e;var n=Ce(t.length),a=Ce(e.length),o=this.sliceDim>1?"strides[j]":"strides";this.userCode=`
        `+n+" strides = "+n+"("+this.strides+`);
         void main() {
          `+a+` coords = getOutputCoords();
          int flattenIndex = 0;
          for (int j = 0; j < `+this.sliceDim+`; j++) {
            int index = round(getIndices(coords[0], j));
            flattenIndex += index * `+o+`;
          }
          setOutput(getX(flattenIndex, coords[1]));
        }
      `};function Of(r,t){var e=Ye();return Dh(r,t,e.version+`
    precision highp float;
    `+e.attribute+` vec3 clipSpacePos;
    `+e.attribute+` vec2 uv;
    `+e.varyingVs+` vec2 resultUV;

    void main() {
      gl_Position = vec4(clipSpacePos, 1);
      resultUV = uv;
    }`)}function Bf(r,t){return Mh(r,t,new Float32Array([-1,1,0,0,1,-1,-1,0,0,0,1,1,0,1,1,1,-1,0,1,0]))}function Lf(r,t){return Oh(r,t,new Uint16Array([0,1,2,2,1,3]))}function Pr(r,t,e,n,a,o,i){Lh(e,n);var s=Bh(r,t),u=r.TEXTURE_2D;return J(r,t,function(){return r.bindTexture(u,s)}),J(r,t,function(){return r.texParameteri(u,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE)}),J(r,t,function(){return r.texParameteri(u,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}),J(r,t,function(){return r.texParameteri(u,r.TEXTURE_MIN_FILTER,r.NEAREST)}),J(r,t,function(){return r.texParameteri(u,r.TEXTURE_MAG_FILTER,r.NEAREST)}),J(r,t,function(){return r.texImage2D(u,0,a,e,n,0,o,i,null)}),J(r,t,function(){return r.bindTexture(r.TEXTURE_2D,null)}),s}function Wf(r,t,e,n,a){var o=Ra(e,n);return Pr(r,t,o[0],o[1],a.internalFormatFloat,a.textureFormatFloat,r.FLOAT)}function zf(r,t,e,n,a){var o=Ra(e,n);return Pr(r,t,o[0],o[1],a.internalFormatHalfFloat,a.textureFormatFloat,a.textureTypeHalfFloat)}function Uf(r,t,e,n,a){var o=Ra(e,n);return Pr(r,t,o[0],o[1],r.RGBA,r.RGBA,r.UNSIGNED_BYTE)}function Vf(r,t,e,n,a){var o=Fr(e,n);return Pr(r,t,o[0],o[1],a.internalFormatPackedFloat,r.RGBA,r.FLOAT)}function Gf(r,t,e,n,a){var o=Fr(e,n);return Pr(r,t,o[0],o[1],a.internalFormatPackedHalfFloat,r.RGBA,a.textureTypeHalfFloat)}function Hf(r,t,e,n){return J(r,t,function(){return r.bindBuffer(r.ARRAY_BUFFER,n)}),ms(r,t,e,"clipSpacePos",n,3,20,0)&&ms(r,t,e,"uv",n,2,20,12)}function jf(r,t,e,n,a,o,i){var s,u,c;J(r,t,function(){return r.bindTexture(r.TEXTURE_2D,e)}),o instanceof Uint8Array?(s=new Uint8Array(n*a*4),u=r.UNSIGNED_BYTE,c=r.RGBA):(s=new Float32Array(n*a*4),u=r.FLOAT,c=i.internalFormatPackedFloat),s.set(o),J(r,t,function(){return r.texImage2D(r.TEXTURE_2D,0,c,n,a,0,r.RGBA,u,s)}),J(r,t,function(){return r.bindTexture(r.TEXTURE_2D,null)})}function qf(r,t,e,n){J(r,t,function(){return r.bindTexture(r.TEXTURE_2D,e)}),n.data instanceof Uint8Array?J(r,t,function(){return r.texImage2D(r.TEXTURE_2D,0,r.RGBA,n.width,n.height,0,r.RGBA,r.UNSIGNED_BYTE,n.data)}):J(r,t,function(){return r.texImage2D(r.TEXTURE_2D,0,r.RGBA,r.RGBA,r.UNSIGNED_BYTE,n)}),J(r,t,function(){return r.bindTexture(r.TEXTURE_2D,null)})}function Kf(r,t,e,n,a){var o=r.createBuffer();J(r,t,function(){return r.bindBuffer(r.PIXEL_PACK_BUFFER,o)});var i=16*e*n;return J(r,t,function(){return r.bufferData(r.PIXEL_PACK_BUFFER,i,r.STREAM_READ)}),J(r,t,function(){return r.readPixels(0,0,n,e,r.RGBA,r.FLOAT,0)}),J(r,t,function(){return r.bindBuffer(r.PIXEL_PACK_BUFFER,null)}),o}function Xf(r,t,e){var n=r,a=new Float32Array(e);return n.bindBuffer(n.PIXEL_PACK_BUFFER,t),n.getBufferSubData(n.PIXEL_PACK_BUFFER,0,a),n.bindBuffer(n.PIXEL_PACK_BUFFER,null),a}function Yf(r,t,e,n,a){var o=Ra(e,n),i=o[0],s=o[1],u=new Uint8Array(e*n*4);return J(r,t,function(){return r.readPixels(0,0,i,s,a.downloadTextureFormat,r.UNSIGNED_BYTE,u)}),new Float32Array(u.buffer)}function $f(r,t,e,n,a,o,i,s){var u=r,c=new Float32Array(function(l,h){var d=Fr(l,h);return d[0]*d[1]*4}(o,i));return u.bindBuffer(u.PIXEL_PACK_BUFFER,t),u.getBufferSubData(u.PIXEL_PACK_BUFFER,0,c),u.bindBuffer(u.PIXEL_PACK_BUFFER,null),c}function Zf(r,t,e,n){var a=new Float32Array(e*n*4);return J(r,t,function(){return r.readPixels(0,0,n,e,r.RGBA,r.FLOAT,a)}),a}var Jf=function(){function r(t){this.outputTexture=null,this.program=null,this.disposed=!1,this.vertexAttrsAreBound=!1,this.itemsToPoll=[];var e=O().getNumber("WEBGL_VERSION");t!=null?(this.gl=t,Ih(e,t)):this.gl=Vt(e);var n="WEBGL_color_buffer_float";if(O().getNumber("WEBGL_VERSION")===1){if(this.textureFloatExtension=Ur(this.gl,this.debug,"OES_texture_float"),yt(this.gl,"OES_texture_half_float"))this.textureHalfFloatExtension=Ur(this.gl,this.debug,"OES_texture_half_float");else if(O().get("WEBGL_FORCE_F16_TEXTURES"))throw new Error("GL context does not support half float textures, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.");if(this.colorBufferFloatExtension=this.gl.getExtension(n),yt(this.gl,"EXT_color_buffer_half_float"))this.colorBufferHalfFloatExtension=Ur(this.gl,this.debug,"EXT_color_buffer_half_float");else if(O().get("WEBGL_FORCE_F16_TEXTURES"))throw new Error("GL context does not support color renderable half floats, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.")}else if(n="EXT_color_buffer_float",yt(this.gl,n))this.colorBufferFloatExtension=this.gl.getExtension(n);else{if(!yt(this.gl,"EXT_color_buffer_half_float"))throw new Error("GL context does not support color renderable floats");this.colorBufferHalfFloatExtension=this.gl.getExtension("EXT_color_buffer_half_float")}this.vertexBuffer=Bf(this.gl,this.debug),this.indexBuffer=Lf(this.gl,this.debug),this.framebuffer=Wh(this.gl,this.debug),this.textureConfig=ri(this.gl,this.textureHalfFloatExtension)}return Object.defineProperty(r.prototype,"debug",{get:function(){return O().getBool("DEBUG")},enumerable:!0,configurable:!0}),r.prototype.dispose=function(){var t=this;if(!this.disposed){this.program!=null,this.outputTexture!=null;var e=this.gl;J(e,this.debug,function(){return e.finish()}),J(e,this.debug,function(){return e.bindFramebuffer(e.FRAMEBUFFER,null)}),J(e,this.debug,function(){return e.deleteFramebuffer(t.framebuffer)}),J(e,this.debug,function(){return e.bindBuffer(e.ARRAY_BUFFER,null)}),J(e,this.debug,function(){return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,null)}),J(e,this.debug,function(){return e.deleteBuffer(t.indexBuffer)}),this.disposed=!0}},r.prototype.createFloat32MatrixTexture=function(t,e){return this.throwIfDisposed(),Wf(this.gl,this.debug,t,e,this.textureConfig)},r.prototype.createFloat16MatrixTexture=function(t,e){return this.throwIfDisposed(),zf(this.gl,this.debug,t,e,this.textureConfig)},r.prototype.createUnsignedBytesMatrixTexture=function(t,e){return this.throwIfDisposed(),Uf(this.gl,this.debug,t,e,this.textureConfig)},r.prototype.uploadPixelDataToTexture=function(t,e){this.throwIfDisposed(),qf(this.gl,this.debug,t,e)},r.prototype.uploadDenseMatrixToTexture=function(t,e,n,a){this.throwIfDisposed(),jf(this.gl,this.debug,t,e,n,a,this.textureConfig)},r.prototype.createFloat16PackedMatrixTexture=function(t,e){return this.throwIfDisposed(),Gf(this.gl,this.debug,t,e,this.textureConfig)},r.prototype.createPackedMatrixTexture=function(t,e){return this.throwIfDisposed(),Vf(this.gl,this.debug,t,e,this.textureConfig)},r.prototype.deleteMatrixTexture=function(t){var e=this;this.throwIfDisposed(),this.outputTexture===t&&(ys(this.gl,this.debug,this.framebuffer),this.outputTexture=null),J(this.gl,this.debug,function(){return e.gl.deleteTexture(t)})},r.prototype.downloadByteEncodedFloatMatrixFromOutputTexture=function(t,e,n){var a=this;return this.downloadMatrixDriver(t,function(){return Yf(a.gl,a.debug,e,n,a.textureConfig)})},r.prototype.downloadPackedMatrixFromBuffer=function(t,e,n,a,o,i){return $f(this.gl,t,0,0,0,o,i,this.textureConfig)},r.prototype.downloadFloat32MatrixFromBuffer=function(t,e){return Xf(this.gl,t,e)},r.prototype.createBufferFromTexture=function(t,e,n){this.bindTextureToFrameBuffer(t);var a=Kf(this.gl,this.debug,e,n,this.textureConfig);return this.unbindTextureToFrameBuffer(),a},r.prototype.createAndWaitForFence=function(){var t=this.createFence(this.gl);return this.pollFence(t)},r.prototype.createFence=function(t){var e,n,a=this;if(O().getBool("WEBGL_FENCE_API_ENABLED")){var o=t,i=o.fenceSync(o.SYNC_GPU_COMMANDS_COMPLETE,0);t.flush(),n=function(){var s=o.clientWaitSync(i,0,0);return s===o.ALREADY_SIGNALED||s===o.CONDITION_SATISFIED},e=i}else O().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0?(e=this.beginQuery(),this.endQuery(),n=function(){return a.isQueryAvailable(e,O().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))}):n=function(){return!0};return{query:e,isFencePassed:n}},r.prototype.downloadMatrixFromPackedTexture=function(t,e,n){var a=this;return this.downloadMatrixDriver(t,function(){return Zf(a.gl,a.debug,e,n)})},r.prototype.createProgram=function(t){this.throwIfDisposed();var e=this.gl,n=Th(e,this.debug,t),a=Of(e,this.debug),o=Fh(e,this.debug);return J(e,this.debug,function(){return e.attachShader(o,a)}),J(e,this.debug,function(){return e.attachShader(o,n)}),Ph(e,this.debug,o),this.debug&&ao(e,this.debug,o),this.vertexAttrsAreBound||(this.setProgram(o),this.vertexAttrsAreBound=Hf(e,this.debug,this.program,this.vertexBuffer)),o},r.prototype.deleteProgram=function(t){var e=this;this.throwIfDisposed(),t===this.program&&(this.program=null),t!=null&&J(this.gl,this.debug,function(){return e.gl.deleteProgram(t)})},r.prototype.setProgram=function(t){var e=this;this.throwIfDisposed(),this.program=t,this.program!=null&&this.debug&&ao(this.gl,this.debug,this.program),J(this.gl,this.debug,function(){return e.gl.useProgram(t)})},r.prototype.getUniformLocation=function(t,e,n){return n===void 0&&(n=!0),this.throwIfDisposed(),n?Uh(this.gl,this.debug,t,e):Vh(this.gl,t,e)},r.prototype.getAttributeLocation=function(t,e){var n=this;return this.throwIfDisposed(),J(this.gl,this.debug,function(){return n.gl.getAttribLocation(t,e)})},r.prototype.getUniformLocationNoThrow=function(t,e){return this.throwIfDisposed(),this.gl.getUniformLocation(t,e)},r.prototype.setInputMatrixTexture=function(t,e,n){this.throwIfDisposed(),this.throwIfNoProgram(),Gh(this.gl,this.debug,this.program,t,e,n)},r.prototype.setOutputMatrixTexture=function(t,e,n){this.setOutputMatrixTextureDriver(t,n,e)},r.prototype.setOutputPackedMatrixTexture=function(t,e,n){this.throwIfDisposed();var a=Fr(e,n),o=a[0],i=a[1];this.setOutputMatrixTextureDriver(t,o,i)},r.prototype.setOutputMatrixWriteRegion=function(t,e,n,a){this.setOutputMatrixWriteRegionDriver(n,t,a,e)},r.prototype.setOutputPackedMatrixWriteRegion=function(t,e,n,a){throw new Error("setOutputPackedMatrixWriteRegion not implemented.")},r.prototype.debugValidate=function(){this.program!=null&&ao(this.gl,this.debug,this.program),Vr(this.gl)},r.prototype.executeProgram=function(){this.throwIfDisposed(),this.throwIfNoProgram();var t=this.gl;this.debug&&this.debugValidate(),J(t,this.debug,function(){return t.drawElements(t.TRIANGLES,6,t.UNSIGNED_SHORT,0)})},r.prototype.blockUntilAllProgramsCompleted=function(){var t=this;this.throwIfDisposed(),J(this.gl,this.debug,function(){return t.gl.finish()})},r.prototype.getQueryTimerExtension=function(){return this.disjointQueryTimerExtension==null&&(this.disjointQueryTimerExtension=Ur(this.gl,this.debug,O().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")===2?"EXT_disjoint_timer_query_webgl2":"EXT_disjoint_timer_query")),this.disjointQueryTimerExtension},r.prototype.getQueryTimerExtensionWebGL2=function(){return this.getQueryTimerExtension()},r.prototype.getQueryTimerExtensionWebGL1=function(){return this.getQueryTimerExtension()},r.prototype.beginQuery=function(){if(O().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")===2){var t=this.gl,e=this.getQueryTimerExtensionWebGL2(),n=t.createQuery();return t.beginQuery(e.TIME_ELAPSED_EXT,n),n}var a=this.getQueryTimerExtensionWebGL1(),o=a.createQueryEXT();return a.beginQueryEXT(a.TIME_ELAPSED_EXT,o),o},r.prototype.endQuery=function(){if(O().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")!==2){var t=this.getQueryTimerExtensionWebGL1();t.endQueryEXT(t.TIME_ELAPSED_EXT)}else{var e=this.gl,n=this.getQueryTimerExtensionWebGL2();e.endQuery(n.TIME_ELAPSED_EXT)}},r.prototype.waitForQueryAndGetTime=function(t){return Y(this,void 0,void 0,function(){var e=this;return $(this,function(n){switch(n.label){case 0:return[4,hs(function(){return e.disposed||e.isQueryAvailable(t,O().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))})];case 1:return n.sent(),[2,this.getQueryTime(t,O().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))]}})})},r.prototype.getQueryTime=function(t,e){if(e===0)return null;if(e===2){var n=this.gl;return n.getQueryParameter(t,n.QUERY_RESULT)/1e6}var a=this.getQueryTimerExtensionWebGL1();return a.getQueryObjectEXT(t,a.QUERY_RESULT_EXT)/1e6},r.prototype.isQueryAvailable=function(t,e){if(e===0)return!0;if(e===2){var n=this.gl,a=this.getQueryTimerExtensionWebGL2(),o=n.getQueryParameter(t,n.QUERY_RESULT_AVAILABLE);return this.disjoint==null&&(this.disjoint=this.gl.getParameter(a.GPU_DISJOINT_EXT)),o&&!this.disjoint}return o=(a=this.getQueryTimerExtensionWebGL1()).getQueryObjectEXT(t,a.QUERY_RESULT_AVAILABLE_EXT),this.disjoint==null&&(this.disjoint=this.gl.getParameter(a.GPU_DISJOINT_EXT)),o&&!this.disjoint},r.prototype.pollFence=function(t){var e=this;return new Promise(function(n){e.addItemToPoll(function(){return t.isFencePassed()},function(){return n()})})},r.prototype.pollItems=function(){for(var t=function(n){for(var a=0;a<n.length&&n[a]();++a);return a-1}(this.itemsToPoll.map(function(n){return n.isDoneFn})),e=0;e<=t;++e)(0,this.itemsToPoll[e].resolveFn)();this.itemsToPoll=this.itemsToPoll.slice(t+1)},r.prototype.addItemToPoll=function(t,e){var n=this;this.itemsToPoll.push({isDoneFn:t,resolveFn:e}),this.itemsToPoll.length>1||hs(function(){return n.pollItems(),n.itemsToPoll.length===0})},r.prototype.bindTextureToFrameBuffer=function(t){this.throwIfDisposed(),oo(this.gl,this.debug,t,this.framebuffer),this.debug&&Vr(this.gl)},r.prototype.unbindTextureToFrameBuffer=function(){this.outputTexture!=null?(oo(this.gl,this.debug,this.outputTexture,this.framebuffer),this.debug&&Vr(this.gl)):ys(this.gl,this.debug,this.framebuffer)},r.prototype.downloadMatrixDriver=function(t,e){this.bindTextureToFrameBuffer(t);var n=e();return this.unbindTextureToFrameBuffer(),n},r.prototype.setOutputMatrixTextureDriver=function(t,e,n){this.throwIfDisposed();var a=this.gl;oo(a,this.debug,t,this.framebuffer),this.debug&&Vr(a),this.outputTexture=t,J(a,this.debug,function(){return a.viewport(0,0,e,n)}),J(a,this.debug,function(){return a.scissor(0,0,e,n)})},r.prototype.setOutputMatrixWriteRegionDriver=function(t,e,n,a){var o=this;this.throwIfDisposed(),J(this.gl,this.debug,function(){return o.gl.scissor(t,e,n,a)})},r.prototype.throwIfDisposed=function(){if(this.disposed)throw new Error("Attempted to use disposed GPGPUContext.")},r.prototype.throwIfNoProgram=function(){if(this.program==null)throw new Error("No GPU program is currently set.")},r}();function Ts(r,t){if(r.length!==t.length)throw Error("Binary was compiled with "+r.length+" inputs, but was executed with "+t.length+" inputs");r.forEach(function(e,n){var a=e.logicalShape,o=t[n],i=o.shape;if(!Ve(a,i))throw Error("Binary was compiled with different shapes than the current args. Shapes "+a+" and "+i+" must match");if(!e.isUniform||!o.isUniform){var s=e.texShape,u=o.isUniform?null:o.texData.texShape;if(!Ve(s,u))throw Error("Binary was compiled with different texture shapes than the current args. Shape "+s+" and "+u+" must match")}})}var Qf=function(r,t,e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=r;for(var n=e.filterWidth,a=e.inChannels,o=e.strideWidth,i=e.strideHeight,s=e.padInfo,u=e.outWidth,c=e.dilationWidth,l=e.dilationHeight,h=e.dataFormat,d=s.left,f=s.top,p=a*n,g=Ye(),v=h==="channelsLast",m=v?0:1,b=v?1:2,x="",y=0;y<=1;y++)for(var w=0;w<=1;w++)x+=`
          blockIndex = rc.y + `+w+`;
          pos = rc.x + `+y+`;

          if(blockIndex < `+r[1]+" && pos < "+r[0]+`) {
            offsetY = int(blockIndex / (`+u+")) * "+i+" - "+f+`;
            d0 = offsetY + `+l+" * (pos / "+p+`);

            if(d0 < `+t[m]+` && d0 >= 0) {

              offsetX = int(mod(float(blockIndex), `+u+".) * "+o+". - "+d+`.);
              d1 = offsetX + `+c+" * (int(mod(float(pos), "+p+".) / "+a+`.));

              if(d1 < `+t[b]+` && d1 >= 0) {

                ch = int(mod(float(pos), `+a+`.));

                if (`+v+`) {
                  innerDims = vec2(d1, ch);
                  result[`+(2*y+w)+`] = getChannel(
                    getA(d0, int(innerDims.x),
                    int(innerDims.y)), innerDims);
                } else {
                  innerDims = vec2(d0, d1);
                  result[`+(2*y+w)+`] = getChannel(
                    getA(ch, int(innerDims.x),
                    int(innerDims.y)), innerDims);
                }
              }
            }
          }
        `;this.userCode=`
      void main() {
        ivec2 rc = getOutputCoords();

        vec4 result = vec4(0);

        int blockIndex, pos, offsetY, d0, offsetX, d1, ch;
        vec2 innerDims;

        `+x+`

        `+g.output+` = result;
      }
    `},ep=function(r,t,e,n,a){this.variableNames=["x"],this.outputShape=[];var o,i=t,s=r[3]-1;this.outputShape=r;var u="float("+e+") + float("+n+") * sum";o=a===.5?"inversesqrt("+u+")":a===1?"1.0/("+u+")":"exp(log("+u+") * float(-"+a+"));",this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int r = coords[1];
        int c = coords[2];
        int d = coords[3];
        float x = getX(b, r, c, d);
        float sum = 0.0;
        for (int j = -`+i+"; j <= "+i+`; j++) {
          int idx = d + j;
          if (idx >= 0 && idx <=  `+s+`) {
            float z = getX(b, r, c, idx);
            sum += z * z;
          }
        }
        float val = x * `+o+`;
        setOutput(val);
      }
    `},tp=function(r,t,e,n,a){this.variableNames=["inputImage","outputImage","dy"],this.outputShape=[],this.outputShape=r,this.depth=r[3],this.depthRadius=t,this.bias=e,this.alpha=n,this.beta=a,this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int r = coords[1];
        int c = coords[2];

        float result = 0.0;
        for (int d = 0; d < `+this.depth+`; ++d) {
          int depthBegin = int(max(0.0, float(d - `+t+`)));
          int depthEnd = int(min(float(`+this.depth+`),
              float(d + `+t+` + 1)));

          const int MIN_DEPTH_BEGIN = 0;
          const int MAX_DEPTH_END = `+this.depth+`;

          float norm = 0.0;
          for (int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k) {
            if (k < depthBegin){
              continue;
            }
            else if (k >= depthBegin && k < depthEnd) {
              norm += getInputImage(b, r, c, k) * getInputImage(b, r, c, k);
            }
            else {
              break;
            }
          }

          norm = float(`+n+") * norm + float("+e+`);

          for(int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k){
            if (k < depthBegin){
              continue;
            }
            else if (k >= depthBegin && k < depthEnd){
              float dyi = -2.0 * float(`+n+`)
                * float(`+a+`)
                * getInputImage(b ,r ,c, k) * getOutputImage(b, r, c, d)
                / norm;
              if (k == d) {
                dyi += pow(norm, -1.0 * `+a+`);
              }
              if (k == coords[3]) {
                dyi *= getDy(b, r, c, d);
                result += dyi;
              }
            }
            else {
              break;
            }
          }
      }
      setOutput(result);
      }
    `},np=function(r,t,e,n,a){this.variableNames=["x"],this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0;var o,i=t,s=r[3]-1;this.outputShape=r;var u="float("+e+") + float("+n+") * sum";o=a===.5?"inversesqrt("+u+")":a===1?"1.0/("+u+")":"exp(log("+u+") * float(-"+a+"));",this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords.x;
        int r = coords.y;
        int c = coords.z;
        int d = coords.w;

        bool hasNextCol = d < `+this.outputShape[3]+`;
        bool hasNextRow = c < `+this.outputShape[2]+`;

        vec4 sum = vec4(0.);
        vec4 xFragAtOutputCoords = getX(b, r, c, d);

        vec4 xAtOutputCoords = vec4(
          getChannel(xFragAtOutputCoords, vec2(c, d)),
          hasNextCol ?
            getChannel(xFragAtOutputCoords, vec2(c, d + 1)) : 0.0,
          hasNextRow ?
            getChannel(xFragAtOutputCoords , vec2(c + 1, d)) : 0.0,
          (hasNextRow && hasNextCol) ?
            getChannel(xFragAtOutputCoords, vec2(c + 1, d + 1)) : 0.0
        );

        int firstChannel = d - `+i+`;
        vec2 cache = vec2(0.);
        if(firstChannel >= 0){
          vec4 firstChannelFrag = getX(b, r, c, firstChannel);
          cache.x = getChannel(firstChannelFrag, vec2(c, firstChannel));
            if(hasNextRow){
              cache.y = getChannel(firstChannelFrag, vec2(c + 1, firstChannel));
            }
        }

        ivec2 depth = ivec2(d, d + 1);
        for (int j = - `+i+"; j <= "+i+`; j++) {
          ivec2 idx = depth + j;
          bvec2 aboveLowerBound = greaterThanEqual(idx, ivec2(0));
          bvec2 belowUpperBound = lessThanEqual(idx, ivec2(`+s+`));

          bool depthInRange = aboveLowerBound.x && belowUpperBound.x;
          bool depthPlusOneInRange = aboveLowerBound.y && belowUpperBound.y;

          if(depthInRange || depthPlusOneInRange){
            vec4 z = vec4(0.);
            vec4 xFragAtCurrentDepth;
            z.xz = cache.xy;
            if(depthPlusOneInRange && hasNextCol){
              xFragAtCurrentDepth = idx.y != d ?
                getX(b, r, c, idx.y) : xFragAtOutputCoords;
              z.y = getChannel(xFragAtCurrentDepth, vec2(c, idx.y));
              if(hasNextRow){
                z.w = getChannel(xFragAtCurrentDepth, vec2(c + 1, idx.y));
              }
            }
            cache.xy = z.yw;
            sum += z * z;
          }
        }
        vec4 result = xAtOutputCoords * `+o+`;
        setOutput(result);
      }
    `},rp=function(r){this.variableNames=["dy","maxPos"],this.outputShape=r.inShape;var t=r.strideHeight,e=r.strideWidth,n=r.dilationHeight,a=r.effectiveFilterHeight,o=r.effectiveFilterWidth,i=a-1-r.padInfo.top,s=o-1-r.padInfo.left,u=a*o-1;this.userCode=`
      const ivec2 pads = ivec2(`+i+", "+s+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];

        ivec2 dyRCCorner = coords.yz - pads;
        int dyRCorner = dyRCCorner.x;
        int dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < `+a+`;
          wR += `+n+`) {
          float dyR = float(dyRCorner + wR) / `+t+`.0;

          if (dyR < 0.0 || dyR >= `+r.outHeight+`.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          for (int wC = 0; wC < `+o+`; wC++) {
            float dyC = float(dyCCorner + wC) / `+e+`.0;

            if (dyC < 0.0 || dyC >= `+r.outWidth+`.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            float dyValue = getDy(b, idyR, idyC, d);
            int maxPosValue = `+u+` - int(getMaxPos(b, idyR, idyC, d));

            // Get the current value, check it against the value from the
            // position matrix.
            int curPosValue = wR * `+o+` + wC;
            float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);

            dotProd += dyValue * mask;
          }
        }
        setOutput(dotProd);
      }
    `},ap=function(r){this.variableNames=["dy","maxPos"],this.outputShape=r.inShape;var t=r.strideDepth,e=r.strideHeight,n=r.strideWidth,a=r.dilationDepth,o=r.dilationHeight,i=r.dilationWidth,s=r.effectiveFilterDepth,u=r.effectiveFilterHeight,c=r.effectiveFilterWidth,l=s-1-r.padInfo.front,h=u-1-r.padInfo.top,d=c-1-r.padInfo.left,f=s*u*c-1;this.userCode=`
      const ivec3 pads = ivec3(`+l+", "+h+", "+d+`);

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyDCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, ch) with pos mask(:, :, :, d) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int wD = 0; wD < `+s+`;
           wD += `+a+`) {
          float dyD = float(dyDCorner + wD) / `+t+`.0;

          if (dyD < 0.0 || dyD >= `+r.outDepth+`.0 || fract(dyD) > 0.0) {
            continue;
          }
          int idyD = int(dyD);

          for (int wR = 0; wR < `+u+`;
              wR += `+o+`) {
            float dyR = float(dyRCorner + wR) / `+e+`.0;

            if (dyR < 0.0 || dyR >= `+r.outHeight+`.0 ||
                fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            for (int wC = 0; wC < `+c+`;
                wC += `+i+`) {
              float dyC = float(dyCCorner + wC) / `+n+`.0;

              if (dyC < 0.0 || dyC >= `+r.outWidth+`.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              float dyValue = getDy(batch, idyD, idyR, idyC, ch);
              int maxPosValue = `+f+` -
                  int(getMaxPos(batch, idyD, idyR, idyC, ch));

              // Get the current value, check it against the value from the
              // position matrix.
              int curPosValue =
                  wD * `+u+" * "+c+` +
                  wR * `+c+` + wC;
              float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);

              dotProd += dyValue * mask;
            }
          }
        }
        setOutput(dotProd);
      }
    `},lo=function(r,t,e,n,a,o,i){e===void 0&&(e=!1),n===void 0&&(n=!1),a===void 0&&(a=!1),o===void 0&&(o=null),i===void 0&&(i=!1),this.variableNames=["matrixA","matrixB"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t;var s=e?r[1]:r[2],u=Math.ceil(s/2),c=e?"i * 2, rc.y":"rc.y, i * 2",l=n?"rc.z, i * 2":"i * 2, rc.z",h=e?["a.xxyy","a.zzww"]:["a.xxzz","a.yyww"],d=n?["b.xzxz","b.ywyw"]:["b.xyxy","b.zwzw"],f="",p="";o&&(f=i?`vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          `+o+`
        }`:`vec4 activation(vec4 x) {
          `+o+`
        }`,p="result = activation(result);");var g=a?"result += getBiasAtOutCoords();":"";a&&this.variableNames.push("bias"),i&&this.variableNames.push("preluActivationWeights"),this.userCode=`
      `+f+`

      const float sharedDimension = `+u+`.0;

      vec4 dot2x2ARowBCol(ivec3 rc) {
        vec4 result = vec4(0);
        for (int i = 0; i < `+u+`; i++) {
          vec4 a = getMatrixA(rc.x, `+c+`);
          vec4 b = getMatrixB(rc.x, `+l+`);

          // These swizzled products need to be separately added.
          // See: https://github.com/tensorflow/tfjs/issues/1735
          result += (`+h[0]+" * "+d[0]+`);
          result += (`+h[1]+" * "+d[1]+`);
        }
        return result;
      }

      void main() {
        ivec3 rc = getOutputCoords();
        vec4 result = dot2x2ARowBCol(rc);

        `+g+`

        `+p+`

        setOutput(result);
      }
    `},op=function(){function r(t,e,n){this.variableNames=["probs"],this.outputShape=[t,n],this.userCode=`
      uniform float seed;

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];

        float r = random(seed);
        float cdf = 0.0;

        for (int i = 0; i < `+(e-1)+`; i++) {
          cdf += getProbs(batch, i);

          if (r < cdf) {
            setOutput(float(i));
            return;
          }
        }

        // If no other event happened, last event happened.
        setOutput(float(`+(e-1)+`));
      }
    `}return r.prototype.getCustomSetupFunc=function(t){var e=this;return function(n,a){e.seedLoc==null&&(e.seedLoc=n.getUniformLocation(a,"seed")),n.gl.uniform1f(e.seedLoc,t)}},r}(),ip=function(r,t,e,n){this.variableNames=["indices"],this.outputShape=[r,t],this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int index = round(getIndices(coords.x));
        setOutput(mix(float(`+n+"), float("+e+`),
                      float(index == coords.y)));
      }
    `},sp=function(r){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outputShape=r;var t=r.length;if(t===0)this.userCode=`
        void main() {
          setOutput(vec4(getA(), 0., 0., 0.));
        }
      `;else{var e=tt("rc",t),n=Ce(t),a=function(s,u,c){if(s===1)return"rc > "+u[0];for(var l="",h=s-2;h<s;h++)l+=c[h]+" >= "+u[h],h<s-1&&(l+="||");return l}(t,r,e),o=function(s,u,c,l){if(s===1)return"";var h=l.slice(-2);return`
    int r = `+h[0]+`;
    int c = `+h[1]+`;
    int rp1 = r + 1;
    int cp1 = c + 1;

    bool cEdge = cp1 >= `+u+`;
    bool rEdge = rp1 >= `+c+`;
  `}(t,r[r.length-1],r[r.length-2],e),i=function(s,u){var c=s.length,l=function(h,d){for(var f=[],p=0;p<=1;p++)for(var g=0;g<=1;g++){for(var v=(p===0?"r":"rp1")+", "+(g===0?"c":"cp1"),m=2;m<h;m++)v=d[d.length-1-m]+","+v;f.push(v)}return f}(c,u);return c===1?`getA(rc),
            rc + 1 >= `+s[0]+` ? 0. : getA(rc + 1),
            0, 0`:"getA("+l[0]+`),
          cEdge ? 0. : getA(`+l[1]+`),
          rEdge ? 0. : getA(`+l[2]+`),
          rEdge || cEdge ? 0. : getA(`+l[3]+")"}(r,e);this.userCode=`
        void main() {
          `+n+` rc = getOutputCoords();

          if(`+a+`) {
            setOutput(vec4(0));
          } else {
            `+o+`

            setOutput(vec4(`+i+`));
          }
        }
      `}},up=function(r,t,e){this.variableNames=["x"],this.outputShape=t.map(function(u,c){return u[0]+r[c]+u[1]});var n=r.length,a=Ce(n),o=t.map(function(u){return u[0]}).join(","),i=t.map(function(u,c){return u[0]+r[c]}).join(","),s=["coords[0]","coords[1]","coords[2]","coords[3]"].slice(0,n);this.userCode=n!==1?`
      `+a+" start = "+a+"("+o+`);
      `+a+" end = "+a+"("+i+`);

      void main() {
        `+a+` outC = getOutputCoords();
        if (any(lessThan(outC, start)) || any(greaterThanEqual(outC, end))) {
          setOutput(float(`+e+`));
        } else {
          `+a+` coords = outC - start;
          setOutput(getX(`+s+`));
        }
      }
    `:`
        int start = `+o+`;
        int end = `+i+`;

        void main() {
          int outC = getOutputCoords();
          if (outC < start || outC >= end) {
            setOutput(float(`+e+`));
          } else {
            setOutput(getX(outC - start));
          }
        }
      `},cp=function(r,t,e){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t.map(function(v,m){return v[0]+r[m]+v[1]});for(var n=r.length,a=Ce(n),o=t.map(function(v){return v[0]}).join(","),i=t.map(function(v,m){return v[0]+r[m]}).join(","),s=tt("rc",n),u=tt("source",n),c=s[n-1]+" < "+this.outputShape[n-1],l=n===1?"source":"vec2("+u.slice(-2).join()+")",h=[a+" rc = outputLoc;",s[n-1]+` += 1;
       if(`+c+`) {
      `,n===1?"":`}
       rc = outputLoc;
       `+s[n-2]+` += 1;
       if(`+s[n-2]+" < "+this.outputShape[n-2]+") {",n===1?"":"  "+s[n-1]+` += 1;
         if(`+c+") {"],d=n===1?"rc < start || rc >= end":"any(lessThan(rc, start)) || any(greaterThanEqual(rc, end))",f="",p=0,g=n===1?2:4;p<g;p++)f+=`
        `+h[p]+`
        if (`+d+`) {
          result[`+p+"] = float("+e+`);
        } else {
          `+a+` source = rc - start;
          result[`+p+"] = getChannel(getX("+u.join()+"), "+l+`);
        }
      `;f+=n===1?"} ":"}}",this.userCode=`
      const `+a+" start = "+a+"("+o+`);
      const `+a+" end = "+a+"("+i+`);

      void main() {
        `+a+` outputLoc = getOutputCoords();
        vec4 result = vec4(0.);
        `+f+`
        setOutput(result);
      }
    `},ho=function(r,t,e){if(this.variableNames=["x"],t==="avg"&&e)throw new Error("Cannot compute positions for average pool.");var n=r.filterWidth,a=r.strideHeight,o=r.strideWidth,i=r.dilationHeight,s=r.dilationWidth,u=r.effectiveFilterHeight,c=r.effectiveFilterWidth,l=r.padInfo.top,h=r.padInfo.left;this.outputShape=r.outShape;var d=t==="avg",f="0.0";if(d||(f="-1.0 / 1e-20"),e)this.userCode=`
        const ivec2 strides = ivec2(`+a+", "+o+`);
        const ivec2 pads = ivec2(`+l+", "+h+`);

        void main() {
          ivec4 coords = getOutputCoords();
          int batch = coords[0];
          int d = coords[3];

          ivec2 xRCCorner = coords.yz * strides - pads;
          int xRCorner = xRCCorner.x;
          int xCCorner = xRCCorner.y;

          // max/min x(?, ?, d) to get y(yR, yC, d).
          // ? = to be determined
          float minMaxValue = 0.0;
          float minMaxValueFound = 0.0;
          int minMaxPosition = 0;
          float avgValue = 0.0;

          for (int wR = 0; wR < `+u+`;
              wR += `+i+`) {
            int xR = xRCorner + wR;

            if (xR < 0 || xR >= `+r.inHeight+`) {
              continue;
            }

            for (int wC = 0; wC < `+c+`;
                wC += `+s+`) {
              int xC = xCCorner + wC;

              if (xC < 0 || xC >= `+r.inWidth+`) {
                continue;
              }

              float value = getX(batch, xR, xC, d);

              // If a min / max value has already been found, use it. If not,
              // use the current value.
              float currMinMaxValue = mix(
                  value, minMaxValue, minMaxValueFound);
              if (value >= currMinMaxValue) {
                minMaxValue = value;
                minMaxValueFound = 1.0;
                minMaxPosition = wR * `+c+` + wC;
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;else{var p=t+"("+t+"("+t+"(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])";t==="avg"&&(p="avgValue / count");var g=4*Math.floor(n/4),v=n%4,m=`
      if (`+d+`) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = max(values, minMaxValue);
      }
    `;this.userCode=`
      const ivec2 strides = ivec2(`+a+", "+o+`);
      const ivec2 pads = ivec2(`+l+", "+h+`);
      const float initializationValue = `+f+`;
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float count = 0.0;

      float getValue(int batch, int xR, int xC, int d) {
        if (xC < 0 || xC >= `+r.inWidth+`) {
          return initializationValue;
        }
        count += 1.0;
        return getX(batch, xR, xC, d);
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d = coords[3];

        ivec2 xRCCorner = coords.yz * strides - pads;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // max/min x(?, ?, d) to get y(yR, yC, d).
        // ? = to be determined
        vec4 minMaxValue = vec4(`+f+`);
        float avgValue = 0.0;
        count = 0.0;

        for (int wR = 0; wR < `+u+`;
            wR += `+i+`) {
          int xR = xRCorner + wR;

          if (xR < 0 || xR >= `+r.inHeight+`) {
            continue;
          }

          for (int wC = 0; wC < `+g+`; wC += 4) {
            int xC = xCCorner + wC * `+s+`;

            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + `+s+`, d),
              getValue(batch, xR, xC + 2 * `+s+`, d),
              getValue(batch, xR, xC + 3 * `+s+`, d)
            );

            `+m+`
          }

          int xC = xCCorner + `+g+`;
          if (`+(v===1)+`) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              initializationValue,
              initializationValue,
              initializationValue
            );

            `+m+`
          } else if (`+(v===2)+`) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + `+s+`, d),
              initializationValue,
              initializationValue
            );

            `+m+`
          } else if (`+(v===3)+`) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + `+s+`, d),
              getValue(batch, xR, xC + 2 * `+s+`, d),
              initializationValue
            );

            `+m+`
          }
        }
        setOutput(`+p+`);
      }
    `}},fo=function(r,t,e){if(this.variableNames=["x"],t==="avg"&&e)throw new Error("Cannot compute positions for average pool.");var n=r.filterWidth,a=r.strideDepth,o=r.strideHeight,i=r.strideWidth,s=r.dilationDepth,u=r.dilationHeight,c=r.dilationWidth,l=r.effectiveFilterDepth,h=r.effectiveFilterHeight,d=r.effectiveFilterWidth,f=r.padInfo.front,p=r.padInfo.top,g=r.padInfo.left;this.outputShape=r.outShape;var v=t==="avg",m="0.0";if(v||(m="-1.0 / 1e-20"),e)this.userCode=`
        const ivec3 strides =
            ivec3(`+a+", "+o+", "+i+`);
        const ivec3 pads = ivec3(`+f+", "+p+", "+g+`);

        void main() {
          ivec5 coords = getOutputCoords();
          int batch = coords.x;
          int ch = coords.u;

          ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
          int xDCorner = xCorner.x;
          int xRCorner = xCorner.y;
          int xCCorner = xCorner.z;

          // max/min x(?, ?, ?, ch) to get y(yD, yR, yC, ch).
          // ? = to be determined
          float minMaxValue = 0.0;
          float minMaxValueFound = 0.0;
          int minMaxPosition = 0;

          for (int wD = 0; wD < `+l+`;
              wD += `+s+`) {
            int xD = xDCorner + wD;

            if (xD < 0 || xD >= `+r.inDepth+`) {
              continue;
            }

            for (int wR = 0; wR < `+h+`;
                wR += `+u+`) {
              int xR = xRCorner + wR;

              if (xR < 0 || xR >= `+r.inHeight+`) {
                continue;
              }

              for (int wC = 0; wC < `+d+`;
                  wC += `+c+`) {
                int xC = xCCorner + wC;

                if (xC < 0 || xC >= `+r.inWidth+`) {
                  continue;
                }

                float value = getX(batch, xD, xR, xC, ch);

                // If a min / max value has already been found, use it. If not,
                // use the current value.
                float currMinMaxValue = mix(
                    value, minMaxValue, minMaxValueFound);
                if (value >= currMinMaxValue) {
                  minMaxValue = value;
                  minMaxValueFound = 1.0;
                  minMaxPosition =
                      wD * `+h+" * "+d+` +
                      wR * `+d+` + wC;;
                }
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;else{var b=t+"("+t+"("+t+"(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])";t==="avg"&&(b="avgValue / count");var x=4*Math.floor(n/4),y=n%4,w=`
      if (`+v+`) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = max(values, minMaxValue);
      }
    `;this.userCode=`
      const ivec3 strides =
        ivec3(`+a+", "+o+", "+i+`);
      const ivec3 pads = ivec3(`+f+", "+p+", "+g+`);
      const float initializationValue = `+m+`;
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float count = 0.0;

      float getValue(int batch, int xD, int xR, int xC, int ch) {
        if (xC < 0 || xC >= `+r.inWidth+`) {
          return initializationValue;
        }
        count += 1.0;
        return getX(batch, xD, xR, xC, ch);
      }

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
        int xDCorner = xCorner.x;
        int xRCorner = xCorner.y;
        int xCCorner = xCorner.z;

        // max/min x(?, ?, ?, d) to get y(yD, yR, yC, ch).
        // ? = to be determined
        vec4 minMaxValue = vec4(`+m+`);
        float avgValue = 0.0;
        count = 0.0;

        for (int wD = 0; wD < `+l+`;
            wD += `+s+`) {
          int xD = xDCorner + wD;

          if (xD < 0 || xD >= `+r.inDepth+`) {
            continue;
          }

          for (int wR = 0; wR < `+h+`;
            wR += `+u+`) {
            int xR = xRCorner + wR;

            if (xR < 0 || xR >= `+r.inHeight+`) {
              continue;
            }

            for (int wC = 0; wC < `+x+`; wC += 4) {
              int xC = xCCorner + wC * `+c+`;

              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + `+c+`, ch),
                getValue(batch, xD, xR, xC + 2 * `+c+`, ch),
                getValue(batch, xD, xR, xC + 3 * `+c+`, ch)
              );

              `+w+`
            }

            int xC = xCCorner + `+x+`;
            if (`+(y===1)+`) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                initializationValue,
                initializationValue,
                initializationValue
              );

              `+w+`
            } else if (`+(y===2)+`) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + `+c+`, ch),
                initializationValue,
                initializationValue
              );

              `+w+`
            } else if (`+(y===3)+`) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + `+c+`, ch),
                getValue(batch, xD, xR, xC + 2 * `+c+`, ch),
                initializationValue
              );

              `+w+`
            }
          }
          setOutput(`+b+`);
        }
      }
    `}},lp=function(r,t){this.variableNames=["x"];var e=r.windowSize,n=r.batchSize,a=r.inSize,o=Math.ceil(a/e);this.outputShape=[n,o];var i="0.0",s="";t==="prod"?i="1.0":t==="min"?(i="1.0 / 1e-20",s="min"):t==="max"&&(i="-1.0 / 1e-20",s="max");var u=t+"("+t+"("+t+"(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])";t==="sum"?u="sumValue":t==="prod"?u="prodValue":t==="all"?u="allValue":t==="any"&&(u="anyValue");var c=4*Math.floor(e/4),l=e%4,h=`
      if (`+(t==="sum")+`) {
        sumValue += dot(values, ones);
      } else if (`+(t==="prod")+`) {
        vec2 tmp = vec2(values[0], values[1]) * vec2(values[2], values[3]);
        prodValue *= tmp[0] * tmp[1];
      } else {
        minMaxValue = `+s+`(values, minMaxValue);
      }
    `,d="vec4";t==="all"?(i="1.0",h=`
        bool reducedAllValue = all(values);
        float floatedReducedAllValue = float(reducedAllValue);
        allValue = float(allValue >= 1.0 && floatedReducedAllValue >= 1.0);
      `,d="bvec4"):t==="any"&&(i="0.0",h=`
        bool reducedAnyValue = any(values);
        float floatedReducedAnyValue = float(reducedAnyValue);
        anyValue = float(anyValue >= 1.0 || floatedReducedAnyValue >= 1.0);
      `,d="bvec4");var f="";a%e>0&&(f=`
        if (inIdx < 0 || inIdx >= `+a+`) {
          return initializationValue;
        }
      `),this.userCode=`
      const float initializationValue = `+i+`;
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float getValue(int batch, int inIdx) {
        `+f+`
        return getX(batch, inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * `+e+`;

        vec4 minMaxValue = vec4(`+i+`);
        float prodValue = 1.0;
        float sumValue = 0.0;
        float allValue = 1.0;
        float anyValue = 0.0;

        for (int i = 0; i < `+c+`; i += 4) {
          int inIdx = inOffset + i;
          `+d+" values = "+d+`(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          `+h+`
        }

        int inIdx = inOffset + `+c+`;
        if (`+(l===1)+`) {
          `+d+" values = "+d+`(
            getValue(batch, inIdx),
            initializationValue,
            initializationValue,
            initializationValue
          );

          `+h+`
        } else if (`+(l===2)+`) {
          `+d+" values = "+d+`(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            initializationValue,
            initializationValue
          );

          `+h+`
        } else if (`+(l===3)+`) {
          `+d+" values = "+d+`(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            initializationValue
          );

          `+h+`
        }
        setOutput(`+u+`);
      }
    `},hp=function(r,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=r;for(var e="",n=0;n<4;n++){var a="thisRC = rc;";n%2==1&&(a+="thisRC.z += 1;"),n>1&&(a+="thisRC.y += 1;"),e+=`
        `+a+`
        `+(n>0?"if(thisRC.y < rows && thisRC.z < cols){":"")+`
          int flatIndex = getFlatIndex(thisRC);

          ivec3 inputRC = inputCoordsFromReshapedOutCoords(flatIndex);
          vec2 inputRCInnerDims = vec2(float(inputRC.y),float(inputRC.z));

          result[`+n+`] =
            getChannel(getA(inputRC.x, inputRC.y, inputRC.z), inputRCInnerDims);
        `+(n>0?"}":"")+`
      `}this.userCode=`
      
    ivec3 inputCoordsFromReshapedOutCoords(int index) {
      `+kn(["r","c","d"],t)+`
      return ivec3(r, c, d);
    }
  
      `+fi(r)+`

      void main() {
        ivec3 rc = getOutputCoords();

        vec4 result = vec4(0.);

        ivec3 thisRC;
        int rows = `+r[1]+`;
        int cols = `+r[2]+`;

        `+e+`

        setOutput(result);
      }
    `},dp=function(r,t,e){this.variableNames=["dy"],this.outputShape=[],this.outputShape=t.shape;var n=t.shape,a=n[1],o=n[2],i=r.shape,s=i[1],u=i[2],c=[e&&s>1?a-1:a,e&&u>1?o-1:o],l=[e&&s>1?s-1:s,e&&u>1?u-1:u],h=c[0]/l[0],d=c[1]/l[1],f=1/h,p=1/d,g=2*Math.ceil(f)+2,v=2*Math.ceil(p)+2;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        int r = coords[1];
        int c = coords[2];

        float accumulator = 0.0;

        const float heightScale = float(`+h+`);
        const float widthScale = float(`+d+`);

        const float invHeightScale = float(`+f+`);
        const float invWidthScale = float(`+p+`);

        const int winHeight = int(`+g+`);
        const int winWidth = int(`+v+`);

        // Compute bounds for where in dy we will look
        float startRLerp = floor(float(r) * invHeightScale);
        int startDyR = int(startRLerp - float(winHeight / 2));

        float startCLerp = floor(float(c) * invWidthScale);
        int startDyC = int(startCLerp - float(winWidth / 2));

        // Loop over dy
        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {
          int dyR = dyROffset + startDyR;

          // Guard against the window exceeding the bounds of dy
          if (dyR < 0 || dyR >= `+s+`) {
            continue;
          }

          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {
            int dyC = dyCOffset + startDyC;

            // Guard against the window exceeding the bounds of dy
            if (dyC < 0 || dyC >= `+u+`) {
              continue;
            }

            float dxR = float(dyR) * heightScale;
            int topDxRIndex = int(floor(dxR));
            int bottomDxRIndex = int(min(ceil(dxR), `+(a-1)+`.0));
            float dxRLerp = dxR - float(topDxRIndex);
            float inverseDxRLerp = 1.0 - dxRLerp;

            float dxC = float(dyC) * widthScale;
            int leftDxCIndex = int(floor(dxC));
            int rightDxCIndex = int(min(ceil(dxC), `+(o-1)+`.0));
            float dxCLerp = dxC - float(leftDxCIndex);
            float inverseDxCLerp = 1.0 - dxCLerp;

            if (r == topDxRIndex && c == leftDxCIndex) {
              // topLeft
              accumulator +=
                getDy(b, dyR, dyC, d) * inverseDxRLerp * inverseDxCLerp;
            }

            if (r == topDxRIndex && c == rightDxCIndex) {
              // topRight
              accumulator += getDy(b, dyR, dyC, d) * inverseDxRLerp * dxCLerp;
            }

            if (r == bottomDxRIndex && c == leftDxCIndex) {
              // bottomLeft
              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * inverseDxCLerp;
            }

            if (r == bottomDxRIndex && c == rightDxCIndex) {
              // bottomRight
              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * dxCLerp;
            }
          }
        }
        // End loop over dy

        setOutput(accumulator);
      }
    `},fp=function(r,t,e,n){this.variableNames=["A"],this.outputShape=[];var a=r[0],o=r[1],i=r[2],s=r[3];this.outputShape=[a,t,e,s];var u=[n&&t>1?o-1:o,n&&e>1?i-1:i],c=[n&&t>1?t-1:t,n&&e>1?e-1:e];this.userCode=`
      const vec2 effectiveInputOverOutputRatioRC = vec2(
          `+u[0]/c[0]+`,
          `+u[1]/c[1]+`);
      const vec2 inputShapeRC = vec2(`+o+".0, "+i+`.0);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        ivec2 yRC = coords.yz;

        // Fractional source index.
        vec2 sourceFracIndexRC = vec2(yRC) * effectiveInputOverOutputRatioRC;

        // Compute the four integer indices.
        ivec2 sourceFloorRC = ivec2(sourceFracIndexRC);
        ivec2 sourceCeilRC = ivec2(
          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));

        float topLeft = getA(b, sourceFloorRC.x, sourceFloorRC.y, d);
        float bottomLeft = getA(b, sourceCeilRC.x, sourceFloorRC.y, d);
        float topRight = getA(b, sourceFloorRC.x, sourceCeilRC.y, d);
        float bottomRight = getA(b, sourceCeilRC.x, sourceCeilRC.y, d);

        vec2 fracRC = sourceFracIndexRC - vec2(sourceFloorRC);

        float top = topLeft + (topRight - topLeft) * fracRC.y;
        float bottom = bottomLeft + (bottomRight - bottomLeft) * fracRC.y;
        float newValue = top + (bottom - top) * fracRC.x;

        setOutput(newValue);
      }
    `},pp=function(r,t,e,n){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[];var a=r[0],o=r[1],i=r[2],s=r[3];this.outputShape=[a,t,e,s];var u=[n&&t>1?o-1:o,n&&e>1?i-1:i],c=[n&&t>1?t-1:t,n&&e>1?e-1:e];this.userCode=`
      const vec3 effectiveInputOverOutputRatioRC = vec3(
          `+u[0]/c[0]+`,
          `+u[1]/c[1]+`,
          `+u[1]/c[1]+`);
      const vec3 inputShapeRC = vec3(`+o+".0, "+i+`.0,
                                     `+i+`.0);

      float getAValue(int b, int r, int c, int d) {
        return getChannel(getA(b, r, c, d), vec2(c, d));
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        // Calculate values for next column in yRC.z.
        ivec3 yRC = coords.yzz + ivec3(0, 0, 1);

        // Fractional source index.
        vec3 sourceFracIndexRC = vec3(yRC) * effectiveInputOverOutputRatioRC;

        // Compute the four integer indices.
        ivec3 sourceFloorRC = ivec3(sourceFracIndexRC);
        ivec3 sourceCeilRC = ivec3(
          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));

        // Should we calculate next column and row elements in 2x2 packed cell.
        bool hasNextCol = d < `+(s-1)+`;
        bool hasNextRow = coords.z < `+(e-1)+`;

        // In parallel, construct four corners for all four components in
        // packed 2x2 cell.
        vec4 topLeft = vec4(
          getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d),
          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d + 1) : 0.0);

        vec4 bottomLeft = vec4(
          getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d),
          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d + 1) : 0.0);

        vec4 topRight = vec4(
          getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d),
          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d + 1) : 0.0);

        vec4 bottomRight = vec4(
          getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d),
          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d + 1) : 0.0);

        vec3 fracRC = sourceFracIndexRC - vec3(sourceFloorRC);

        vec4 top = mix(topLeft, topRight, fracRC.yyzz);
        vec4 bottom = mix(bottomLeft, bottomRight, fracRC.yyzz);
        vec4 newValue = mix(top, bottom, fracRC.x);

        setOutput(newValue);
      }
    `},vp=function(r,t,e){this.variableNames=["dy"],this.outputShape=[],this.outputShape=t.shape;var n=t.shape,a=n[1],o=n[2],i=r.shape,s=i[1],u=i[2],c=[e&&s>1?a-1:a,e&&u>1?o-1:o],l=[e&&s>1?s-1:s,e&&u>1?u-1:u],h=c[0]/l[0],d=c[1]/l[1],f=1/h,p=1/d,g=2*Math.ceil(f)+2,v=2*Math.ceil(p)+2;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        int r = coords[1];
        int c = coords[2];

        float accumulator = 0.0;

        const float heightScale = float(`+h+`);
        const float widthScale = float(`+d+`);

        const float invHeightScale = float(`+f+`);
        const float invWidthScale = float(`+p+`);

        const int winHeight = int(`+g+`);
        const int winWidth = int(`+v+`);

        // Compute bounds for where in dy we will look
        float startRLerp = floor(float(r) * invHeightScale);
        int startDyR = int(floor(startRLerp - float(winHeight / 2)));

        float startCLerp = floor(float(c) * invWidthScale);
        int startDyC = int(floor(startCLerp - float(winWidth / 2)));

        // Loop over dy
        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {
          int dyR = dyROffset + startDyR;

          // Guard against the window exceeding the bounds of dy
          if (dyR < 0 || dyR >= `+s+`) {
            continue;
          }

          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {
            int dyC = dyCOffset + startDyC;

            // Guard against the window exceeding the bounds of dy
            if (dyC < 0 || dyC >= `+u+`) {
              continue;
            }

            float sourceFracRow =
              float(`+c[0]+`) *
                (float(dyR) / float(`+l[0]+`));

            float sourceFracCol =
                float(`+c[1]+`) *
                  (float(dyC) / float(`+l[1]+`));

            int sourceNearestRow = int(min(
                float(int(`+a+`) - 1),
                `+e+` ? float(round(sourceFracRow)) :
                                  float(floor(sourceFracRow))));

            int sourceNearestCol = int(min(
                float(int(`+o+`) - 1),
                `+e+` ? float(round(sourceFracCol)) :
                                  float(floor(sourceFracCol))));

            if (r == sourceNearestRow && c == sourceNearestCol) {
              accumulator += getDy(b, dyR, dyC, d);
            }
          }
        }
        // End loop over dy

        setOutput(accumulator);
      }
    `},gp=function(r,t,e,n){this.variableNames=["A"],this.outputShape=[];var a=r[0],o=r[1],i=r[2],s=r[3];this.outputShape=[a,t,e,s];var u=[n&&t>1?o-1:o,n&&e>1?i-1:i],c=[n&&t>1?t-1:t,n&&e>1?e-1:e],l=n?"0.5":"0.0";this.userCode=`
      const vec2 effectiveInputOverOutputRatioRC = vec2(
          `+u[0]/c[0]+`,
          `+u[1]/c[1]+`);
      const vec2 inputShapeRC = vec2(`+o+".0, "+i+`.0);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        ivec2 yRC = coords.yz;

        // Fractional source index.
        vec2 sourceFracIndexRC = vec2(yRC) * effectiveInputOverOutputRatioRC;

        // Compute the coordinators of nearest neighbor point.
        ivec2 sourceNearestRC = ivec2(
          min(inputShapeRC - 1.0, floor(sourceFracIndexRC + `+l+`)));

        float newValue = getA(b, sourceNearestRC.x, sourceNearestRC.y, d);

        setOutput(newValue);
      }
    `},mp=function(r,t){this.variableNames=["x"];var e=r.length;if(e>4)throw new Error("WebGL backend: Reverse of rank-"+e+" tensor is not yet supported");if(this.outputShape=r,e!==1){var n=r.map(function(o,i){return function(s){return t.indexOf(s)!==-1&&r[s]!==1?r[s]+" - coords["+s+"] - 1":"coords["+s+"]"}(i)}).join(","),a=Ce(e);this.userCode=`
      void main() {
        `+a+` coords = getOutputCoords();
        setOutput(getX(`+n+`));
      }
    `}else this.userCode=`
        void main() {
          int coord = getOutputCoords();
          setOutput(getX(`+r[0]+` - coord - 1));
        }
      `},yp=function(r,t){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0;var e=r.length;if(e>4)throw new Error("WebGL backend: Reverse of rank-"+e+" tensor is not yet supported");this.outputShape=r;var n=tt("rc",e),a=n[e-1]+" + 1 < "+this.outputShape[e-1],o=n[e-2]+" + 1 < "+this.outputShape[e-2],i=Ce(e);function s(u){var c=r.map(function(l,h){return function(d,f){return t.indexOf(d)!==-1&&r[d]!==1?r[d]+" - "+f[d]+" - 1":""+f[d]}(h,u)});return"getChannel(getX("+c.join(",")+"), vec2("+c.slice(-2).join(",")+"))"}this.userCode=e===1?`
        void main(){
          int rc = getOutputCoords();
          vec4 result = vec4(0.);
          result.r = getChannel(getX(`+r[0]+` - rc - 1),
            `+r[0]+` - rc - 1);
          if(`+a+`){
              result.g = getChannel(getX(`+r[0]+` - (rc  + 1) - 1),
                `+r[0]+` - (rc  + 1) - 1);
          }
          setOutput(result);
        }
      `:`
        void main() {
          `+i+` rc = getOutputCoords();
          vec4 result = vec4(0.);
          result.r = `+function(u){return s(u)}(n.slice())+`;
          if(`+a+`){
            result.g = `+function(u){return u[e-1]="("+u[e-1]+" + 1)",s(u)}(n.slice())+`;
          }
          if(`+o+`) {
            result.b = `+function(u){return u[e-2]="("+u[e-2]+" + 1)",s(u)}(n.slice())+`;
            if(`+a+`) {
              result.a = `+function(u){return u[e-1]="("+u[e-1]+" + 1)",u[e-2]="("+u[e-2]+" + 1)",s(u)}(n.slice())+`;
            }
          }
          setOutput(result);
        }
    `},Ns=function(r,t,e,n,a,o,i){this.variableNames=["updates","indices","defaultValue"],this.outputShape=o;var s=Ce(a.length),u=Ce(o.length),c="";e===1?c="i":e===2&&(c="i, j");var l="getIndices("+c+")",h="";n===1?h="i":n===2&&(h="i, coords[1]");var d="getUpdates("+h+")",f=t>1?"strides[j]":"strides";this.userCode=`
        `+s+" strides = "+s+"("+a+`);

        void main() {
          `+u+` coords = getOutputCoords();
          float sum = 0.0;
          bool found = false;
          for (int i = 0; i < `+r+`; i++) {
            int flattenedIndex = 0;
            for (int j = 0; j < `+t+`; j++) {
              int index = round(`+l+`);
              flattenedIndex += index * `+f+`;
            }
            if (flattenedIndex == coords[0]) {
              sum += `+d+`;
              found = true;
            }
          }
          setOutput(mix(getDefaultValue(), sum, float(found)));
        }
      `},bp=function(r,t){this.variableNames=["x","segmentIds"];var e=r.windowSize,n=r.batchSize,a=r.inSize,o=r.numSegments,i=o*Math.ceil(a/e);this.outputShape=[n,i];var s=4*Math.floor(e/4),u=e%4,c=`
        sumValue += dot(values, segFilter);
    `,l="";a%e>0&&(l=`
        if (inIdx < 0 || inIdx >= `+a+`) {
          return initializationValue;
        }
      `);var h="";a%e>0&&(h=`
        if (inIdx < 0 || inIdx >= `+a+`) {
          return -1.0;
        }
      `),this.userCode=`
      const float initializationValue = 0.0;

      float getValue(int batch, int inIdx) {
        `+l+`
        return getX(batch, inIdx);
      }

      float getSegmentIdAtIndex(int inIdx) {
        `+h+`
        return getSegmentIds(inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = int(floor(float(outIdx) / float(
          `+o+")) * float("+e+`));
        int currentSeg = int(mod(float(outIdx), float(`+o+`)));

        float sumValue = 0.0;

        for (int i = 0; i < `+s+`; i += 4) {
          int inIdx = inOffset + i;
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 3)) == currentSeg ? 1 : 0
          );

          `+c+`
        }

        int inIdx = inOffset + `+s+`;
        if (`+(u===1)+`) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            initializationValue,
            initializationValue,
            initializationValue
          );

          int inIdxSeg = int(getSegmentIdAtIndex(inIdx));

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            0,
            0,
            0
          );

          `+c+`
        } else if (`+(u===2)+`) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            initializationValue,
            initializationValue
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
              0,
              0
          );

          `+c+`
        } else if (`+(u===3)+`) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            initializationValue
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,
            0
          );

          `+c+`
        }
        setOutput(sumValue);
      }
    `},xp=function(r,t,e){var n,a;if(this.variableNames=["c","a","b"],this.outputShape=t,e>4)throw Error("Where for rank "+e+" is not yet supported");if(e===1)a="resRC",n="resRC";else{for(var o=["resRC.x","resRC.y","resRC.z","resRC.w"],i=[],s=[],u=0;u<t.length;u++)s.push(""+o[u]),u<r&&i.push(""+o[u]);n=i.join(),a=s.join()}var c=Ce(e);this.userCode=`
      void main() {
        `+c+` resRC = getOutputCoords();
        float cVal = getC(`+n+`);
        if (cVal >= 1.0) {
          setOutput(getA(`+a+`));
        } else {
          setOutput(getB(`+a+`));
        }
      }
    `},wp=function(){function r(t){this.variableNames=["source"],this.outputShape=t,this.rank=t.length;var e,n=Ce(this.rank),a="uniform int start["+this.rank+"];",o=function(i){if(i===1)return"sourceLoc";if(i<=6)return po.slice(0,i).map(function(s){return"sourceLoc."+s}).join(",");throw Error("Slicing for rank "+i+" is not yet supported")}(this.rank);e=`
        `+n+` sourceLoc;
        `+n+` coords = getOutputCoords();
        `+t.map(function(i,s){return"sourceLoc."+po[s]+" = start["+s+"] + coords."+po[s]+";"}).join(`
`)+`
      `,this.userCode=`
      `+a+`
      void main() {
        `+e+`
        setOutput(getSource(`+o+`));
      }
    `}return r.prototype.getCustomSetupFunc=function(t){var e=this;if(t.length!==this.rank)throw Error("The rank ("+this.rank+") of the program must match the length of start ("+t.length+")");return function(n,a){e.startLoc==null&&(e.startLoc=n.getUniformLocationNoThrow(a,"start"),e.startLoc==null)||n.gl.uniform1iv(e.startLoc,t)}},r}(),po=["x","y","z","w","u","v"],Cp=function(){function r(t){this.variableNames=["source"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t,this.rank=t.length;var e=Ce(this.rank),n=tt("coords",this.rank),a=tt("sourceLoc",this.rank),o=this.rank===1?"sourceLoc":"vec2("+a.slice(-2).join()+")",i="getChannel(getSource("+a.join()+"), "+o+")",s=`
      result.x = `+i+`;
      if (++`+n[this.rank-1]+" < "+t[this.rank-1]+`) {
        ++`+a[this.rank-1]+`;
        result.y = `+i+`;
        --`+a[this.rank-1]+`;
      }
    `,u=this.rank===1?"":`
      --`+n[this.rank-1]+`;
      if (++`+n[this.rank-2]+" < "+t[this.rank-2]+`) {
        ++`+a[this.rank-2]+`;
        result.z = `+i+`;
        if (++`+n[this.rank-1]+" < "+t[this.rank-1]+`) {
          ++`+a[this.rank-1]+`;
          result.w = `+i+`;
        }
      }
    `,c=this.rank<=4?`sourceLoc = coords +
            `+e+"("+t.map(function(l,h){return"start["+h+"]"}).join()+");":t.map(function(l,h){return a[h]+" = "+n[h]+" + start["+h+"];"}).join(`
`);this.userCode=`
      uniform int start[`+this.rank+`];
      void main() {
        `+e+` coords = getOutputCoords();
        `+e+` sourceLoc;
        `+c+`
        vec4 result = vec4(0.);
        `+s+`
        `+u+`
        setOutput(result);
      }
    `}return r.prototype.getCustomSetupFunc=function(t){var e=this;if(t.length!==this.rank)throw Error("The rank ("+this.rank+") of the program must match the length of start ("+t.length+")");return function(n,a){e.startLoc==null&&(e.startLoc=n.getUniformLocationNoThrow(a,"start"),e.startLoc==null)||n.gl.uniform1iv(e.startLoc,t)}},r}(),_p=function(r,t,e){this.variableNames=["x"],this.outputShape=e;var n=e.length,a=Ce(e.length),o=Ce(e.length),i="";if(n===1)i="coords * strides + begin";else{var s=0;i=e.map(function(u,c){return s++,e.length===1?"coords * strides["+c+"] + begin["+c+"]":"coords["+(s-1)+"] * strides["+c+"] + begin["+c+"]"}).join(",")}this.userCode=`
      `+a+" begin = "+a+"("+r+`);
      `+a+" strides = "+a+"("+t+`);

      void main() {
        `+o+` coords = getOutputCoords();
        setOutput(getX(`+i+`));
      }
    `},Ep=function(){function r(t){this.gpgpu=t,this.numUsedTextures=0,this.numFreeTextures=0,this.freeTextures={},this.logEnabled=!1,this.usedTextures={}}return r.prototype.acquireTexture=function(t,e,n){var a,o=Fs(e,n),i=Ps(t,o,n);if(i in this.freeTextures||(this.freeTextures[i]=[]),i in this.usedTextures||(this.usedTextures[i]=[]),this.freeTextures[i].length>0){this.numFreeTextures--,this.numUsedTextures++,this.log();var s=this.freeTextures[i].shift();return this.usedTextures[i].push(s),s}return this.numUsedTextures++,this.log(),o===ut.PACKED_2X2_FLOAT32?a=this.gpgpu.createPackedMatrixTexture(t[0],t[1]):o===ut.PACKED_2X2_FLOAT16?a=this.gpgpu.createFloat16PackedMatrixTexture(t[0],t[1]):o===ut.UNPACKED_FLOAT32?a=this.gpgpu.createFloat32MatrixTexture(t[0],t[1]):o===ut.UNPACKED_FLOAT16?a=this.gpgpu.createFloat16MatrixTexture(t[0],t[1]):o===ut.PACKED_4X1_UNSIGNED_BYTE&&(a=this.gpgpu.createUnsignedBytesMatrixTexture(t[0],t[1])),this.usedTextures[i].push(a),a},r.prototype.releaseTexture=function(t,e,n,a){if(this.freeTextures!=null){var o=Ps(e,Fs(n,a),a);o in this.freeTextures||(this.freeTextures[o]=[]),this.freeTextures[o].push(t),this.numFreeTextures++,this.numUsedTextures--;var i=this.usedTextures[o],s=i.indexOf(t);if(s<0)throw new Error("Cannot release a texture that was never provided by this texture manager");i.splice(s,1),this.log()}},r.prototype.log=function(){if(this.logEnabled)var t=this.numFreeTextures+this.numUsedTextures},r.prototype.getNumUsedTextures=function(){return this.numUsedTextures},r.prototype.getNumFreeTextures=function(){return this.numFreeTextures},r.prototype.dispose=function(){var t=this;if(this.freeTextures!=null){for(var e in this.freeTextures)this.freeTextures[e].forEach(function(n){t.gpgpu.deleteMatrixTexture(n)});for(var e in this.usedTextures)this.usedTextures[e].forEach(function(a){t.gpgpu.deleteMatrixTexture(a)});this.freeTextures=null,this.usedTextures=null,this.numUsedTextures=0,this.numFreeTextures=0}},r}();function Fs(r,t){if(r===ct.UPLOAD)return ut.PACKED_2X2_FLOAT32;if(r===ct.RENDER||r==null)return function(e){return O().getBool("WEBGL_RENDER_FLOAT32_ENABLED")?e?ut.PACKED_2X2_FLOAT32:ut.UNPACKED_FLOAT32:e?ut.PACKED_2X2_FLOAT16:ut.UNPACKED_FLOAT16}(t);if(r===ct.DOWNLOAD||r===ct.PIXELS)return ut.PACKED_4X1_UNSIGNED_BYTE;throw new Error("Unknown logical texture type "+r)}function Ps(r,t,e){return r[0]+"_"+r[1]+"_"+t+"_"+e}var Ip=function(r,t){this.variableNames=["A"];for(var e=new Array(r.length),n=0;n<e.length;n++)e[n]=r[n]*t[n];this.outputShape=e,this.rank=e.length;var a=Ce(this.rank),o=function(i){var s=i.length;if(s>5)throw Error("Tile for rank "+s+" is not yet supported");if(s===1)return"imod(resRC, "+i[0]+")";for(var u=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u"],c=[],l=0;l<i.length;l++)c.push("imod("+u[l]+", "+i[l]+")");return c.join()}(r);this.userCode=`
      void main() {
        `+a+` resRC = getOutputCoords();
        setOutput(getA(`+o+`));
      }
    `},kp=function(r,t){this.variableNames=["A"];for(var e=new Array(r.length),n=0;n<e.length;n++)e[n]=r[t[n]];this.outputShape=e,this.rank=e.length;var a=Ce(this.rank),o=function(i){var s=i.length;if(s>6)throw Error("Transpose for rank "+s+" is not yet supported");for(var u=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u","resRC.v"],c=new Array(s),l=0;l<i.length;l++)c[i[l]]=u[l];return c.join()}(t);this.userCode=`
    void main() {
      `+a+` resRC = getOutputCoords();
      setOutput(getA(`+o+`));
    }
    `},Sp=function(r,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0;for(var e=new Array(r.length),n=0;n<e.length;n++)e[n]=r[t[n]];if(this.outputShape=e,this.rank=e.length,this.rank>6)throw Error("Packed transpose for rank "+this.rank+" is not yet supported.");var a=Ce(this.rank),o=Ju("rc",this.rank),i=new Array(this.rank);for(n=0;n<t.length;n++)i[t[n]]=o[n];var s="vec2("+i.slice(-2).join()+")",u="++"+o[this.rank-1]+" < "+e[this.rank-1],c="getChannel(getA("+i.join()+"), "+s+")";this.userCode=`
    void main() {
      `+a+` rc = getOutputCoords();
      vec4 result = vec4(0.);
      result[0] = `+c+`;
      if(`+u+`) {
        result[1] = `+c+`;
      }
      --`+o[this.rank-1]+`;
      if(++`+o[this.rank-2]+" < "+e[this.rank-2]+`) {
        result[2] = `+c+`;
        if(`+u+`) {
          result[3] = `+c+`;
        }
      }
      setOutput(result);
    }
    `},pi=1.7580993408473768,vi=1.0507009873554805,se=function(r,t){this.variableNames=["A"],this.outputShape=r,this.userCode=`
      float unaryOperation(float x) {
        `+t+`
      }

      void main() {
        float x = getAAtOutCoords();
        float y = unaryOperation(x);

        setOutput(y);
      }
    `},kt="if (isnan(x)) return x;",Rp="return x;",Ms="return abs(x);",rc=kt+`
  return (x < 0.0) ? 0.0 : x;
`,ac=kt+`
  return (x < 0.0) ? 0.0 : min(6.0, x);
`,oc="return (x >= 0.0) ? x : (exp(x) - 1.0);",Ap=`
  // Stable and Attracting Fixed Point (0, 1) for Normalized Weights.
  // see: https://arxiv.org/abs/1706.02515
  float scaleAlpha = `+pi+`;
  float scale = `+vi+`;
  return (x >= 0.0) ? scale * x : scaleAlpha * (exp(x) - 1.0);
`,Os="return -x;",Bs="return ceil(x);",Ls="return floor(x);",Ws="return exp(x);",zs="return exp(x) - 1.0;",Dp=kt+`
  return sin(x);
`,Tp=kt+`
  return cos(x);
`,Np=kt+`
  if (abs(x) > 1.) {
    return NAN;
  }
  return asin(x);
`,Fp=kt+`
  if (abs(x) > 1.) {
    return NAN;
  }
  return acos(x);
`,Pp=kt+`
  return atan(x);
`,Mp=kt+"return log(x + sqrt(x * x + 1.0));",Op=kt+`
  if (x < 1.0) return NAN;
  return log(x + sqrt(x * x - 1.0));`,Bp=kt+`
  if ((x < -1.0) || (x > 1.0)) return NAN;
  return (log(1.0 + x) - log(1.0 - x)) / 2.0;`,qr="return x;",Lp="return x;",ic=`
  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,sc=`
  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,uc=`
  vec4 result;

  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);
  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);
  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);
  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);

  return result;
`,fr=function(r,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=r,this.userCode=`
      vec4 unaryOperation(vec4 x) {
        `+t+`
      }

      void main() {
        vec4 x = getAAtOutCoords();
        vec4 y = unaryOperation(x);

        setOutput(y);
      }
    `},Wp=function(r){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!1,this.outputShape=r;var t=r.length,e=tt("rc",t),n=Ce(t),a=function(s,u){if(s===1)return"rc";for(var c="",l=0;l<s;l++)c+=u[l],l<s-1&&(c+=",");return c}(t,e),o=e.slice(-2),i=t<=1?"rc":"vec2("+o.join(",")+")";this.userCode=`
      void main() {
        `+n+` rc = getOutputCoords();
        vec4 packedInput = getA(`+a+`);

        setOutput(getChannel(packedInput, `+i+`));
      }
    `},Kr={};function Xr(r,t){if(t===void 0&&(t=!1),r==="linear")return t?Lp:Rp;if(r==="relu")return t?ic:rc;if(r==="elu")return t?uc:oc;if(r==="relu6")return t?sc:ac;if(r==="prelu")return t?nc:tc;throw new Error("Activation "+r+" has not been implemented for the WebGL backend.")}var zp=600,Up=function(r){function t(e){var n,a=r.call(this)||this;if(a.pendingRead=new WeakMap,a.pendingDisposal=new WeakSet,a.dataRefCount=new WeakMap,a.numBytesInGPU=0,a.uploadWaitMs=0,a.downloadWaitMs=0,a.warnedAboutMemory=!1,a.pendingDeletes=0,a.disposed=!1,!O().getBool("HAS_WEBGL"))throw new Error("WebGL is not supported on this device");if(e==null){var o=Vt(O().getNumber("WEBGL_VERSION"));a.binaryCache=((n=O().getNumber("WEBGL_VERSION"))in Kr||(Kr[n]={}),Kr[n]),a.gpgpu=new Jf(o),a.canvas=o.canvas,a.gpgpuCreatedLocally=!0}else a.gpgpu=e,a.binaryCache={},a.gpgpuCreatedLocally=!1,a.canvas=e.gl.canvas;return a.textureManager=new Ep(a.gpgpu),a.numMBBeforeWarning=O().global.screen==null?1024:O().global.screen.height*O().global.screen.width*window.devicePixelRatio*zp/1024/1024,a.texData=new Gu(a,N),a}return It(t,r),t.prototype.numDataIds=function(){return this.texData.numDataIds()+(this.cpuBackend?this.cpuBackend.numDataIds():0)-this.pendingDeletes},t.prototype.write=function(e,n,a){if(O().getBool("DEBUG")&&this.checkNumericalProblems(e),a==="complex64"&&e!=null)throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");var o={};return this.texData.set(o,{shape:n,dtype:a,values:e,usage:ct.UPLOAD}),o},t.prototype.move=function(e,n,a,o){if(O().getBool("DEBUG")&&this.checkNumericalProblems(n),o==="complex64")throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");this.texData.set(e,{shape:a,dtype:o,values:n,usage:ct.UPLOAD})},t.prototype.readSync=function(e){var n=this.texData.get(e),a=n.values,o=n.dtype,i=n.complexTensors,s=n.slice,u=n.shape,c=n.isPacked;if(s!=null){var l=void 0;l=c?new fr(u,qr):new se(u,qr);var h=this.runWebGLProgram(l,[{dataId:e,shape:u,dtype:o}],o),d=this.readSync(h.dataId);return this.disposeData(h.dataId),d}if(a!=null)return this.convertAndCacheOnCPU(e);if(o==="string")return a;var f,p,g=this.activeTimers!=null;return g&&(f=Ft()),o==="complex64"?p=Uo(i.real.dataSync(),i.imag.dataSync()):p=this.getValuesFromTexture(e),g&&(this.downloadWaitMs+=Ft()-f),this.convertAndCacheOnCPU(e,p)},t.prototype.read=function(e){return Y(this,void 0,void 0,function(){var n,a,o,i,s,u,c,l,h,d,f,p,g,v,m,b,x,y,w,C,R,S;return $(this,function(I){switch(I.label){case 0:if(this.pendingRead.has(e))return n=this.pendingRead.get(e),[2,new Promise(function(k){return n.push(k)})];if(a=this.texData.get(e),o=a.values,i=a.shape,s=a.slice,u=a.dtype,c=a.complexTensors,l=a.isPacked,s!=null)return h=void 0,h=l?new fr(i,qr):new se(i,qr),d=this.runWebGLProgram(h,[{dataId:e,shape:i,dtype:u}],u),f=this.read(d.dataId),this.disposeData(d.dataId),[2,f];if(o!=null)return[2,this.convertAndCacheOnCPU(e)];if(!O().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")&&O().getNumber("WEBGL_VERSION")===2)throw new Error("tensor.data() with WEBGL_DOWNLOAD_FLOAT_ENABLED=false and WEBGL_VERSION=2 not yet supported.");return p=null,u!=="complex64"&&O().get("WEBGL_BUFFER_SUPPORTED")&&(g=this.decode(e),v=this.texData.get(g.dataId),p=(S=this.gpgpu).createBufferFromTexture.apply(S,[v.texture].concat(vr(i)))),this.pendingRead.set(e,[]),u==="complex64"?[3,2]:[4,this.gpgpu.createAndWaitForFence()];case 1:I.sent(),I.label=2;case 2:return u!=="complex64"?[3,4]:[4,Promise.all([c.real.data(),c.imag.data()])];case 3:return b=I.sent(),x=b[0],y=b[1],m=Uo(x,y),[3,5];case 4:p==null?m=this.getValuesFromTexture(e):(w=Z(i),m=this.gpgpu.downloadFloat32MatrixFromBuffer(p,w)),I.label=5;case 5:return g!=null&&this.disposeData(g.dataId),C=this.convertAndCacheOnCPU(e,m),R=this.pendingRead.get(e),this.pendingRead.delete(e),R.forEach(function(k){return k(C)}),this.pendingDisposal.has(e)&&(this.pendingDisposal.delete(e),this.disposeData(e),this.pendingDeletes--),[2,C]}})})},t.prototype.checkNumericalProblems=function(e){if(e!=null)for(var n=0;n<e.length;n++){var a=e[n];if(!Rh(a))throw O().getBool("WEBGL_RENDER_FLOAT32_CAPABLE")?Error("The value "+a+" cannot be represented with your current settings. Consider enabling float32 rendering: 'tf.env().set('WEBGL_RENDER_FLOAT32_ENABLED', true);'"):Error("The value "+a+" cannot be represented on this device.")}},t.prototype.getValuesFromTexture=function(e){var n,a=this.texData.get(e),o=a.shape,i=a.dtype,s=a.isPacked,u=Z(o);if(O().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")){var c=this.decode(e),l=this.texData.get(c.dataId),h=(n=this.gpgpu).downloadMatrixFromPackedTexture.apply(n,[l.texture].concat(vr(o))).subarray(0,u);return this.disposeData(c.dataId),h}var d=O().getBool("WEBGL_PACK")&&s===!0,f=d?io(o):o,p=d?new Rf(f):new Sf(f),g=this.runWebGLProgram(p,[{shape:f,dtype:i,dataId:e}],"float32"),v=this.texData.get(g.dataId),m=this.gpgpu.downloadByteEncodedFloatMatrixFromOutputTexture(v.texture,v.texShape[0],v.texShape[1]).subarray(0,u);return this.disposeData(g.dataId),m},t.prototype.time=function(e){return Y(this,void 0,void 0,function(){var n,a,o,i,s,u,c;return $(this,function(l){switch(l.label){case 0:return n=this.activeTimers,a=[],o=!1,this.programTimersStack==null?(this.programTimersStack=a,o=!0):this.activeTimers.push(a),this.activeTimers=a,e(),i=nr(this.activeTimers.map(function(h){return h.query})).filter(function(h){return h!=null}),s=nr(this.activeTimers.map(function(h){return h.name})).filter(function(h){return h!=null}),this.activeTimers=n,o&&(this.programTimersStack=null),u={uploadWaitMs:this.uploadWaitMs,downloadWaitMs:this.downloadWaitMs,kernelMs:null,wallMs:null},O().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?[4,Promise.all(i)]:[3,2];case 1:return c=l.sent(),u.kernelMs=uh(c),u.getExtraProfileInfo=function(){return c.map(function(h,d){return{name:s[d],ms:h}}).map(function(h){return h.name+": "+h.ms}).join(", ")},[3,3];case 2:u.kernelMs={error:"WebGL query timers are not supported in this environment."},l.label=3;case 3:return this.uploadWaitMs=0,this.downloadWaitMs=0,[2,u]}})})},t.prototype.memory=function(){return{unreliable:!1,numBytesInGPU:this.numBytesInGPU}},t.prototype.startTimer=function(){return O().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?this.gpgpu.beginQuery():{startMs:Ft(),endMs:null}},t.prototype.endTimer=function(e){return O().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?(this.gpgpu.endQuery(),e):(e.endMs=Ft(),e)},t.prototype.getQueryTime=function(e){return Y(this,void 0,void 0,function(){var n;return $(this,function(a){return O().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?[2,this.gpgpu.waitForQueryAndGetTime(e)]:[2,(n=e).endMs-n.startMs]})})},t.prototype.disposeData=function(e){if(!this.pendingDisposal.has(e)){if(this.pendingRead.has(e))return this.pendingDisposal.add(e),void this.pendingDeletes++;if(this.texData.has(e)){this.releaseGPUData(e);var n=this.texData.get(e).complexTensors;n!=null&&(n.real.dispose(),n.imag.dispose()),this.texData.delete(e)}}},t.prototype.releaseGPUData=function(e){var n=this.texData.get(e),a=n.texture,o=n.dtype,i=n.texShape,s=n.usage,u=n.isPacked,c=n.slice,l=c&&c.origDataId||e,h=this.dataRefCount.get(l);h>1?this.dataRefCount.set(l,h-1):(this.dataRefCount.delete(l),a!=null&&(this.numBytesInGPU-=this.computeBytes(i,o),this.textureManager.releaseTexture(a,i,s,u)));var d=this.texData.get(e);d.texture=null,d.texShape=null,d.isPacked=!1,d.slice=null},t.prototype.getTexture=function(e){return this.uploadToGPU(e),this.texData.get(e).texture},t.prototype.getDataInfo=function(e){return this.texData.get(e)},t.prototype.getCPUBackend=function(){return O().getBool("WEBGL_CPU_FORWARD")?(this.cpuBackend==null&&(this.cpuBackend=N.findBackend("cpu")),this.cpuBackend):null},t.prototype.shouldExecuteOnCPU=function(e,n){var a=this;return n===void 0&&(n=128),this.getCPUBackend()!=null&&e.every(function(o){return a.texData.get(o.dataId).texture==null&&o.size<n})},t.prototype.getGPGPUContext=function(){return this.gpgpu},t.prototype.complex=function(e,n){var a=this.makeOutput(e.shape,"complex64");return this.texData.get(a.dataId).complexTensors={real:N.keep(e.clone()),imag:N.keep(n.clone())},a},t.prototype.real=function(e){return this.texData.get(e.dataId).complexTensors.real.clone()},t.prototype.imag=function(e){return this.texData.get(e.dataId).complexTensors.imag.clone()},t.prototype.slice=function(e,n,a){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.slice(e,n,a);if(Z(a)===0)return qe([],a,e.dtype);var o=this.texData.get(e.dataId).isPacked,i=Uu(e.shape,n,a);if(o||!i){var s=O().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new Cp(a):new wp(a),u=s.getCustomSetupFunc(n);return this.compileAndRun(s,[e],null,u)}return this.uploadToGPU(e.dataId),this.shallowSlice(e,n,a)},t.prototype.shallowSlice=function(e,n,a){var o=this.texData.get(e.dataId),i=this.makeOutput(a,e.dtype),s=this.texData.get(i.dataId);Object.assign(s,o),s.shape=a,s.dtype=e.dtype;var u=Vu(n,e.strides);o.slice&&(u+=o.slice.flatOffset),s.slice={flatOffset:u,origDataId:o.slice&&o.slice.origDataId||e.dataId};var c=this.dataRefCount.get(s.slice.origDataId)||1;return this.dataRefCount.set(s.slice.origDataId,c+1),i},t.prototype.stridedSlice=function(e,n,a,o){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.stridedSlice(e,n,a,o);var i=ui(n,a,o);if(i.some(function(u){return u===0}))return qe([],i);var s=new _p(n,o,i);return this.compileAndRun(s,[e])},t.prototype.reverse=function(e,n){var a=O().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new yp(e.shape,n):new mp(e.shape,n);return this.compileAndRun(a,[e])},t.prototype.concat=function(e,n){if(e[0].dtype==="complex64"){var a=e.map(function(f){return gt(f)}),o=e.map(function(f){return Mt(f)});return He(this.concat(a,n),this.concat(o,n))}if(this.shouldExecuteOnCPU(e))return this.cpuBackend.concat(e,n);if(e.length===1)return e[0];if(e.length>O().getNumber("WEBGL_MAX_TEXTURES_IN_SHADER")){var i=Math.floor(e.length/2),s=this.concat(e.slice(0,i),n),u=this.concat(e.slice(i),n);return this.concat([s,u],n)}if(O().getBool("WEBGL_PACK_ARRAY_OPERATIONS")&&e[0].rank>1){var c=new ff(e.map(function(f){return f.shape}),n);return this.compileAndRun(c,e)}var l=ar(e.map(function(f){return f.shape}),n),h=e.map(function(f){return f.as2D(-1,Z(f.shape.slice(n)))}),d=new df(h.map(function(f){return f.shape}));return this.compileAndRun(d,h).reshape(l)},t.prototype.neg=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.neg(e);if(O().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,Os,e.dtype);var n=new se(e.shape,Os);return this.compileAndRun(n,[e])},t.prototype.batchMatMul=function(e,n,a,o){var i=a?e.shape[2]:e.shape[1],s=o?n.shape[1]:n.shape[2],u=a?e.shape[1]:e.shape[2],c=e.shape[0];if((i===1||s===1)&&u>1e3){a&&(e=e.transpose([0,2,1])),o&&(n=n.transpose([0,2,1]));var l=s===1?e:e.as3D(c,u,1),h=s===1?2:1,d=s===1?n.as3D(c,1,u):n;return this.multiply(l,d).sum(h,!0)}var f=je(e.dtype,n.dtype),p=new lo(e.shape,[c,i,s],a,o);return this.compileAndRun(p,[e,n],f)},t.prototype.fusedBatchMatMul=function(e){var n=e.a,a=e.b,o=e.transposeA,i=e.transposeB,s=e.bias,u=e.activation,c=e.preluActivationWeights,l=o?n.shape[2]:n.shape[1],h=i?a.shape[1]:a.shape[2],d=n.shape[0],f=je(n.dtype,a.dtype),p=s!=null,g=c!=null,v=u?Xr(u,!0):null,m=new lo(n.shape,[d,l,h],o,i,p,v,g),b=[n,a];return s&&b.push(s),c&&b.push(c),this.compileAndRun(m,b,f)},t.prototype.multiply=function(e,n){if(e.dtype==="complex64"){var a=this.texData.get(e.dataId),o=this.texData.get(n.dataId),i=new Es(sf,e.shape,n.shape),s=new Es(uf,e.shape,n.shape),u=[this.makeComplexComponentTensorInfo(e,a.complexTensors.real),this.makeComplexComponentTensorInfo(e,a.complexTensors.imag),this.makeComplexComponentTensorInfo(n,o.complexTensors.real),this.makeComplexComponentTensorInfo(n,o.complexTensors.imag)],c=this.compileAndRun(i,u),l=this.compileAndRun(s,u),h=this.complex(c,l);return c.dispose(),l.dispose(),h}if(this.shouldExecuteOnCPU([e,n]))return this.cpuBackend.multiply(e,n);if(O().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,Is,e.dtype);var d=new De(Is,e.shape,n.shape);return this.compileAndRun(d,[e,n],e.dtype)},t.prototype.batchNormalization=function(e,n,a,o,i,s){var u=[e,n,a],c=null;s!=null&&(c=s.shape,u.push(s));var l=null;if(i!=null&&(l=i.shape,u.push(i)),O().getBool("WEBGL_PACK_NORMALIZATION")){var h=new of(e.shape,n.shape,a.shape,c,l,o);return this.compileAndRun(h,u)}var d=new af(e.shape,n.shape,a.shape,c,l,o);return this.compileAndRun(d,u)},t.prototype.localResponseNormalization4D=function(e,n,a,o,i){var s=O().getBool("WEBGL_PACK_NORMALIZATION")?new np(e.shape,n,a,o,i):new ep(e.shape,n,a,o,i);return this.compileAndRun(s,[e])},t.prototype.LRNGrad=function(e,n,a,o,i,s,u){var c=new tp(n.shape,o,i,s,u);return this.compileAndRun(c,[n,a,e])},t.prototype.tile=function(e,n){if(e.dtype==="string"){var a=this.readSync(e.dataId).map(function(i){return oa(i)});return $u(oe(e.shape,e.dtype,a),n)}var o=new Ip(e.shape,n);return this.compileAndRun(o,[e])},t.prototype.pad=function(e,n,a){var o=O().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new cp(e.shape,n,a):new up(e.shape,n,a);return this.compileAndRun(o,[e])},t.prototype.transpose=function(e,n){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.transpose(e,n);var a=O().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new Sp(e.shape,n):new kp(e.shape,n);return this.compileAndRun(a,[e])},t.prototype.gather=function(e,n,a){if(this.shouldExecuteOnCPU([e,n]))return this.cpuBackend.gather(e,n,a);var o=new Pf(e.shape,n.size,a);return this.compileAndRun(o,[e,n])},t.prototype.batchToSpaceND=function(e,n,a){E(e.rank<=4,function(){return"batchToSpaceND for rank > 4 with a WebGL backend not implemented yet"});var o=n.reduce(function(h,d){return h*d}),i=ha(e.shape,n,o),s=da(i.length,n.length),u=fa(e.shape,n,o),c=Bu(a,n.length),l=Lu(u,a,n.length);return e.reshape(i).transpose(s).reshape(u).slice(c,l)},t.prototype.spaceToBatchND=function(e,n,a){E(e.rank<=4,function(){return"spaceToBatchND for rank > 4 with a WebGL backend not implemented yet"});var o=n.reduce(function(d,f){return d*f}),i=[[0,0]];i.push.apply(i,a);for(var s=1+n.length;s<e.shape.length;++s)i.push([0,0]);var u=e.pad(i),c=ha(u.shape,n,o,!1),l=da(c.length,n.length,!1),h=fa(u.shape,n,o,!1);return u.reshape(c).transpose(l).reshape(h)},t.prototype.reduce=function(e,n,a){var o=e.shape[0],i=e.shape[1],s=so(i),u=new lp({windowSize:s,inSize:i,batchSize:o},n),c=this.compileAndRun(u,[e],a);return c.shape[1]===1?c:this.reduce(c,n,a)},t.prototype.argReduce=function(e,n,a){a===void 0&&(a=null);var o=e.shape[0],i=e.shape[1];a!=null&&(o=a.shape[0],i=a.shape[1]);var s=so(i),u=new Yd({windowSize:s,inSize:i,batchSize:o},n,a==null),c=[e];a!=null&&c.push(a);var l=this.compileAndRun(u,c,"int32");return l.shape[1]===1?l:this.argReduce(e,n,l)},t.prototype.argReducePacked=function(e,n,a){a===void 0&&(a=null);var o=a!=null?a.shape:e.shape,i=so(o[o.length-1]),s=new tf(o,i,n,a==null),u=a==null?[e]:[e,a],c=this.compileAndRun(s,u,"int32");return c.rank===e.rank?this.argReducePacked(e,n,c):c},t.prototype.sum=function(e,n){st("sum",n,e.rank);var a=Ke(e.shape,n),o=a[0],i=Z(a[1]),s=e.as2D(-1,i),u=Qa(e.dtype);return this.reduce(s,"sum",u).reshape(o)},t.prototype.prod=function(e,n){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.prod(e,n);var a=Ke(e.shape,n),o=a[0],i=Z(a[1]),s=e.as2D(-1,i),u=Qa(e.dtype);return this.reduce(s,"prod",u).reshape(o)},t.prototype.unsortedSegmentSum=function(e,n,a){var o=0,i=Gt([o],e.rank),s=e;i!=null&&(s=e.transpose(i),o=Ht(1,e.rank)[0]);var u=function(f,p,g){for(var v=[],m=f.length,b=0;b<m;b++)b!==p?v.push(f[b]):v.push(g);return v}(s.shape,o,a),c=Z([s.shape[o]]),l=s.as2D(-1,c),h=Qa(e.dtype),d=this.segOpCompute(l,"unsortedSegmentSum",n,h,a).reshape(u);return i!=null&&(d=d.transpose(ai(i))),d},t.prototype.segOpCompute=function(e,n,a,o,i){var s=e.shape[0],u=e.shape[1],c=function(d,f){var p,g=!1;for(d<=zu?(p=d,g=!0):p=No(d,Math.floor(Math.sqrt(d)));!g;)p>f||p===d?g=!0:p=No(d,p+1);return p}(u,i),l=new bp({windowSize:c,inSize:u,batchSize:s,numSegments:i}),h=this.compileAndRun(l,[e,a],o);return h.shape[1]===i?h:(a=la(0,i).tile([u/c]),this.segOpCompute(h,n,a,o,i))},t.prototype.argMinMaxReduce=function(e,n,a){var o=[n];if(st("arg"+a.charAt(0).toUpperCase()+a.slice(1),o,e.rank),!O().getBool("WEBGL_PACK_REDUCE")||e.rank<=2){var i=Ke(e.shape,o),s=i[0],u=Z(i[1]),c=e.as2D(-1,u);return this.argReduce(c,a).reshape(s)}return this.argReducePacked(e,a)},t.prototype.argMin=function(e,n){return this.argMinMaxReduce(e,n,"min")},t.prototype.argMax=function(e,n){return this.argMinMaxReduce(e,n,"max")},t.prototype.cumsum=function(e,n,a,o){if(n!==e.rank-1)throw new Error("WebGL cumsum shader expects an inner-most axis="+(e.rank-1)+" but got axis="+n);var i=new Cf(e.shape,a,o);return this.compileAndRun(i,[e])},t.prototype.equal=function(e,n){if(O().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,`
  return vec4(equal(a, b));
`,"bool");var a=new De("return float(a == b);",e.shape,n.shape);return this.compileAndRun(a,[e,n],"bool")},t.prototype.notEqual=function(e,n){if(O().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,`
  return vec4(notEqual(a, b));
`,"bool");var a=new De("return float(a != b);",e.shape,n.shape);return this.compileAndRun(a,[e,n],"bool")},t.prototype.less=function(e,n){if(this.shouldExecuteOnCPU([e,n]))return this.cpuBackend.less(e,n);if(O().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,`
  return vec4(lessThan(a, b));
`,"bool");var a=new De("return float(a < b);",e.shape,n.shape);return this.compileAndRun(a,[e,n],"bool")},t.prototype.lessEqual=function(e,n){if(O().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,`
  return vec4(lessThanEqual(a, b));
`,"bool");var a=new De("return float(a <= b);",e.shape,n.shape);return this.compileAndRun(a,[e,n],"bool")},t.prototype.greater=function(e,n){if(this.shouldExecuteOnCPU([e,n]))return this.cpuBackend.greater(e,n);if(O().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,`
  return vec4(greaterThan(a, b));
`,"bool");var a=new De("return float(a > b);",e.shape,n.shape);return this.compileAndRun(a,[e,n],"bool")},t.prototype.greaterEqual=function(e,n){if(O().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,`
  return vec4(greaterThanEqual(a, b));
`,"bool");var a=new De("return float(a >= b);",e.shape,n.shape);return this.compileAndRun(a,[e,n],"bool")},t.prototype.logicalNot=function(e){var n=new se(e.shape,"return float(!(x >= 1.0));");return this.compileAndRun(n,[e])},t.prototype.logicalAnd=function(e,n){if(O().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,`
  return vec4(
    vec4(greaterThanEqual(a, vec4(1.0))) *
    vec4(greaterThanEqual(b, vec4(1.0))));
`,"bool");var a=new De("return float(a >= 1.0 && b >= 1.0);",e.shape,n.shape);return this.compileAndRun(a,[e,n],"bool")},t.prototype.logicalOr=function(e,n){if(O().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,`
  return min(
    vec4(greaterThanEqual(a, vec4(1.0))) +
    vec4(greaterThanEqual(b, vec4(1.0))),
    vec4(1.0));
`,"bool");var a=new De("return float(a >= 1.0 || b >= 1.0);",e.shape,n.shape);return this.compileAndRun(a,[e,n],"bool")},t.prototype.select=function(e,n,a){var o=new xp(e.rank,n.shape,n.rank);return this.compileAndRun(o,[e,n,a],je(n.dtype,a.dtype))},t.prototype.where=function(e){ua("tf.where() in webgl locks the UI thread. Call tf.whereAsync() instead");var n=e.dataSync();return di(e.shape,n)},t.prototype.topk=function(e,n,a){return Zu(e.dataSync(),e.shape,e.dtype,n)},t.prototype.min=function(e,n){st("min",n,e.rank);var a=Ke(e.shape,n),o=a[0],i=Z(a[1]),s=e.as2D(-1,i);return this.reduce(s,"min",s.dtype).reshape(o)},t.prototype.minimum=function(e,n){if(this.shouldExecuteOnCPU([e,n]))return this.cpuBackend.minimum(e,n);var a=O().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new Yt(`
  vec4 result = vec4(min(a, b));
  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,e.shape,n.shape):new De(`
  if (isnan(a)) return a;
  if (isnan(b)) return b;

  return min(a, b);
`,e.shape,n.shape);return this.compileAndRun(a,[e,n])},t.prototype.mod=function(e,n){var a=O().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new Yt(`
  vec4 result = mod(a, b);
  vec4 isNaN = vec4(equal(b, vec4(0.0)));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,e.shape,n.shape):new De(`if (b == 0.0) return NAN;
  return mod(a, b);`,e.shape,n.shape);return this.compileAndRun(a,[e,n])},t.prototype.max=function(e,n){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.max(e,n);st("max",n,e.rank);var a=Ke(e.shape,n),o=a[0],i=Z(a[1]),s=e.as2D(-1,i);return this.reduce(s,"max",s.dtype).reshape(o)},t.prototype.maximum=function(e,n){if(this.shouldExecuteOnCPU([e,n]))return this.cpuBackend.maximum(e,n);var a=O().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new Yt(`
  vec4 result = vec4(max(a, b));
  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,e.shape,n.shape):new De(`
  if (isnan(a)) return a;
  if (isnan(b)) return b;

  return max(a, b);
`,e.shape,n.shape);return this.compileAndRun(a,[e,n])},t.prototype.all=function(e,n){st("all",n,e.rank);var a=Ke(e.shape,n),o=a[0],i=Z(a[1]),s=e.as2D(-1,i);return this.reduce(s,"all",s.dtype).reshape(o)},t.prototype.any=function(e,n){st("any",n,e.rank);var a=Ke(e.shape,n),o=a[0],i=Z(a[1]),s=e.as2D(-1,i);return this.reduce(s,"any",s.dtype).reshape(o)},t.prototype.realDivide=function(e,n){if(O().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,`
  // vec4 one = vec4(equal(a, b));
  // return one + (vec4(1.0) - one) * a / b;
  vec4 result = a / b;
  if(a.x == b.x) {
    result.x = 1.;
  }
  if(a.y == b.y) {
    result.y = 1.;
  }
  if(a.z == b.z) {
    result.z = 1.;
  }
  if(a.w == b.w) {
    result.w = 1.;
  }

  return result;
`,"float32",!0);var a=new De(`
if (a == b) {
  return 1.0;
};
return a / b;`,e.shape,n.shape);return this.compileAndRun(a,[e,n],"float32")},t.prototype.floorDiv=function(e,n){if(O().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,`
  ivec4 ia = round(a);
  ivec4 ib = round(b);
  bvec4 cond = notEqual(ib, ivec4(0));
  ivec4 result = ivec4(0);
  vec4 s = sign(a) * sign(b);

  // Windows (D3D) wants guaranteed non-zero int division at compile-time.
  if (cond[0]) {
    result[0] = idiv(ia[0], ib[0], s[0]);
  }
  if (cond[1]) {
    result[1] = idiv(ia[1], ib[1], s[1]);
  }
  if (cond[2]) {
    result[2] = idiv(ia[2], ib[2], s[2]);
  }
  if (cond[3]) {
    result[3] = idiv(ia[3], ib[3], s[3]);
  }
  return vec4(result);
`,"int32");var a=new De(`
  float s = sign(a) * sign(b);
  int ia = round(a);
  int ib = round(b);
  if (ib != 0) {
    // Windows (D3D) wants guaranteed non-zero int division at compile-time.
    return float(idiv(ia, ib, s));
  } else {
    return NAN;
  }
`,e.shape,n.shape);return this.compileAndRun(a,[e,n],"int32")},t.prototype.add=function(e,n){if(e.dtype==="complex64"&&n.dtype==="complex64")return this.complexSeparableBinaryOp(e,n,uo);if(this.shouldExecuteOnCPU([e,n]))return this.cpuBackend.add(e,n);var a=je(e.dtype,n.dtype);if(O().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,uo,a);var o=new De(uo,e.shape,n.shape);return this.compileAndRun(o,[e,n],a)},t.prototype.packedUnaryOp=function(e,n,a){var o=new fr(e.shape,n);return this.compileAndRun(o,[e],a)},t.prototype.packedBinaryOp=function(e,n,a,o,i){i===void 0&&(i=!1);var s=new Yt(a,e.shape,n.shape,i);return this.compileAndRun(s,[e,n],o)},t.prototype.complexSeparableBinaryOp=function(e,n,a){var o=this,i=this.texData.get(e.dataId),s=this.texData.get(n.dataId),u=[[i.complexTensors.real,s.complexTensors.real],[i.complexTensors.imag,s.complexTensors.imag]].map(function(d){var f=d[0],p=d[1],g=o.makeComplexComponentTensorInfo(e,f),v=o.makeComplexComponentTensorInfo(n,p),m=new De(a,e.shape,n.shape);return o.compileAndRun(m,[g,v],je(f.dtype,p.dtype))}),c=u[0],l=u[1],h=this.complex(c,l);return c.dispose(),l.dispose(),h},t.prototype.makeComplexComponentTensorInfo=function(e,n){return{dataId:n.dataId,dtype:n.dtype,shape:e.shape}},t.prototype.addN=function(e){if(e.length===1)return e[0];if(e.length>O().get("WEBGL_MAX_TEXTURES_IN_SHADER")){var n=Math.floor(e.length/2),a=this.addN(e.slice(0,n)),o=this.addN(e.slice(n));return this.addN([a,o])}var i=e.map(function(c){return c.dtype}).reduce(function(c,l){return je(c,l)}),s=e.map(function(c){return c.shape}),u=O().getBool("WEBGL_PACK")?new Xd(e[0].shape,s):new Kd(e[0].shape,s);return this.compileAndRun(u,e,i)},t.prototype.subtract=function(e,n){if(e.dtype==="complex64"&&n.dtype==="complex64")return this.complexSeparableBinaryOp(e,n,co);if(this.shouldExecuteOnCPU([e,n]))return this.cpuBackend.subtract(e,n);var a=je(e.dtype,n.dtype);if(O().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,co,e.dtype);var o=new De(co,e.shape,n.shape);return this.compileAndRun(o,[e,n],a)},t.prototype.pow=function(e,n){var a=O().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new Yt(`
  // isModRound1 has 1 for components with round(mod(b, 2.0)) == 1, 0 otherwise.
  vec4 isModRound1 = vec4(equal(round(mod(b, 2.0)), ivec4(1)));
  vec4 multiplier = sign(a) * isModRound1 + (vec4(1.0) - isModRound1);
  vec4 result = multiplier * pow(abs(a), b);

  // Ensure that a^0 = 1, including 0^0 = 1 as this correspond to TF and JS
  bvec4 isExpZero = equal(b, vec4(0.0));
  result.r = isExpZero.r ? 1.0 : result.r;
  result.g = isExpZero.g ? 1.0 : result.g;
  result.b = isExpZero.b ? 1.0 : result.b;
  result.a = isExpZero.a ? 1.0 : result.a;

  vec4 isNaN = vec4(lessThan(a, vec4(0.0))) * vec4(lessThan(floor(b), b));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,e.shape,n.shape):new De(`
if(a < 0.0 && floor(b) < b){
  return NAN;
}
if (b == 0.0) {
  return 1.0;
}
return (round(mod(b, 2.0)) != 1) ?
    pow(abs(a), b) : sign(a) * pow(abs(a), b);
`,e.shape,n.shape),o=je(e.dtype,n.dtype);return this.compileAndRun(a,[e,n],o)},t.prototype.ceil=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.ceil(e);if(O().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,Bs,e.dtype);var n=new se(e.shape,Bs);return this.compileAndRun(n,[e])},t.prototype.floor=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.floor(e);if(O().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,Ls,e.dtype);var n=new se(e.shape,Ls);return this.compileAndRun(n,[e])},t.prototype.sign=function(e){var n=new se(e.shape,`
  if (isnan(x)) { return 0.0; }
  return sign(x);
`);return this.compileAndRun(n,[e])},t.prototype.isNaN=function(e){var n=new se(e.shape,"return float(isnan(x));");return this.compileAndRun(n,[e],"bool")},t.prototype.isInf=function(e){var n=new se(e.shape,"return float(isinf(x));");return this.compileAndRun(n,[e],"bool")},t.prototype.isFinite=function(e){var n=new se(e.shape,"return float(!isnan(x) && !isinf(x));");return this.compileAndRun(n,[e],"bool")},t.prototype.round=function(e){var n=new se(e.shape,`
  // OpenGL ES does not support round function.
  // The algorithm is based on banker's rounding.
  float base = floor(x);
  if ((x - base) < 0.5) {
    return floor(x);
  } else if ((x - base) > 0.5) {
    return ceil(x);
  } else {
    if (mod(base, 2.0) == 0.0) {
      return base;
    } else {
      return base + 1.0;
    }
  }
`);return this.compileAndRun(n,[e])},t.prototype.exp=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.exp(e);if(O().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,Ws,e.dtype);var n=new se(e.shape,Ws);return this.compileAndRun(n,[e])},t.prototype.expm1=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.expm1(e);if(O().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,zs,e.dtype);var n=new se(e.shape,zs);return this.compileAndRun(n,[e])},t.prototype.softmax=function(e,n){var a=We([n],e.shape),o=this.max(e,a),i=at(o.shape,a),s=this.subtract(e,o.reshape(i)),u=this.exp(s),c=this.sum(u,a).reshape(i);return this.realDivide(u,c)},t.prototype.log=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.log(e);if(O().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,`
  vec4 result = log(x);
  vec4 isNaN = vec4(lessThan(x, vec4(0.0)));
  result.r = isNaN.r == 1.0 ? NAN : result.r;
  result.g = isNaN.g == 1.0 ? NAN : result.g;
  result.b = isNaN.b == 1.0 ? NAN : result.b;
  result.a = isNaN.a == 1.0 ? NAN : result.a;

  return result;
`,e.dtype);var n=new se(e.shape,`if (x < 0.0) return NAN;
  return log(x);`);return this.compileAndRun(n,[e])},t.prototype.log1p=function(e){var n=new se(e.shape,"return log(1.0 + x);");return this.compileAndRun(n,[e])},t.prototype.sqrt=function(e){var n=new se(e.shape,"return sqrt(x);");return this.compileAndRun(n,[e])},t.prototype.rsqrt=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.rsqrt(e);var n=new se(e.shape,"return inversesqrt(x);");return this.compileAndRun(n,[e])},t.prototype.reciprocal=function(e){var n=new se(e.shape,"return 1.0 / x;");return this.compileAndRun(n,[e])},t.prototype.relu=function(e){var n;return n=O().getBool("WEBGL_PACK")?new fr(e.shape,ic):new se(e.shape,rc),this.compileAndRun(n,[e])},t.prototype.relu6=function(e){var n;return n=O().getBool("WEBGL_PACK")?new fr(e.shape,sc):new se(e.shape,ac),this.compileAndRun(n,[e])},t.prototype.prelu=function(e,n){var a=O().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new Yt(nc,e.shape,n.shape):new De(tc,e.shape,n.shape);return this.compileAndRun(a,[e,n])},t.prototype.elu=function(e){if(O().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,uc,e.dtype);var n=new se(e.shape,oc);return this.compileAndRun(n,[e])},t.prototype.eluDer=function(e,n){var a=O().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new Yt(`
  vec4 bGTEZero = vec4(greaterThanEqual(b, vec4(0.)));
  return (bGTEZero * a) + ((vec4(1.0) - bGTEZero) * (a * (b + vec4(1.0))));
`,e.shape,n.shape):new De("return (b >= 1.0) ? a : a * (b + 1.0);",e.shape,n.shape);return this.compileAndRun(a,[e,n])},t.prototype.selu=function(e){var n=new se(e.shape,Ap);return this.compileAndRun(n,[e])},t.prototype.int=function(e){var n=new se(e.shape,"return float(int(x));");return this.compileAndRun(n,[e],"int32")},t.prototype.clip=function(e,n,a){var o,i=(o=O().getBool("WEBGL_PACK_CLIP")?new lf(e.shape):new cf(e.shape)).getCustomSetupFunc(n,a);return this.compileAndRun(o,[e],null,i)},t.prototype.abs=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.abs(e);if(O().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,Ms,e.dtype);var n=new se(e.shape,Ms);return this.compileAndRun(n,[e])},t.prototype.complexAbs=function(e){var n=this.texData.get(e.dataId),a=new hf(e.shape),o=[this.makeComplexComponentTensorInfo(e,n.complexTensors.real),this.makeComplexComponentTensorInfo(e,n.complexTensors.imag)];return this.compileAndRun(a,o)},t.prototype.sigmoid=function(e){var n=new se(e.shape,"return 1.0 / (1.0 + exp(-1.0 * x));");return this.compileAndRun(n,[e])},t.prototype.softplus=function(e){var n=new se(e.shape,`
  float epsilon = 1.1920928955078125e-7;
  float threshold = log(epsilon) + 2.0;

  bool too_large = x > -threshold;
  bool too_small = x < threshold;

  float result;
  float exp_x = exp(x);

  if (too_large){
    result = x;
  }
  else if (too_small){
    result = exp_x;
  }
  else{
    result = log(exp_x + 1.0);
  }
  return result;
`);return this.compileAndRun(n,[e])},t.prototype.sin=function(e){var n=new se(e.shape,Dp);return this.compileAndRun(n,[e])},t.prototype.cos=function(e){var n=new se(e.shape,Tp);return this.compileAndRun(n,[e])},t.prototype.tan=function(e){var n=new se(e.shape,"return tan(x);");return this.compileAndRun(n,[e])},t.prototype.asin=function(e){var n=new se(e.shape,Np);return this.compileAndRun(n,[e])},t.prototype.acos=function(e){var n=new se(e.shape,Fp);return this.compileAndRun(n,[e])},t.prototype.atan=function(e){var n=new se(e.shape,Pp);return this.compileAndRun(n,[e])},t.prototype.atan2=function(e,n){var a=O().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new Yt(`
  vec4 result = atan(a, b);
  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,e.shape,n.shape):new De(`
  if (isnan(a)) return a;
  if (isnan(b)) return b;

  return atan(a, b);
`,e.shape,n.shape);return this.compileAndRun(a,[e,n])},t.prototype.sinh=function(e){var n=new se(e.shape,`
  float e2x = exp(x);
  return (e2x - 1.0 / e2x) / 2.0;
`);return this.compileAndRun(n,[e])},t.prototype.cosh=function(e){var n=new se(e.shape,`
  float e2x = exp(-x);
  return (e2x + 1.0 / e2x) / 2.0;
`);return this.compileAndRun(n,[e])},t.prototype.tanh=function(e){var n=new se(e.shape,`
  float e2x = exp(-2.0 * abs(x));
  return sign(x) * (1.0 - e2x) / (1.0 + e2x);
`);return this.compileAndRun(n,[e])},t.prototype.asinh=function(e){var n=new se(e.shape,Mp);return this.compileAndRun(n,[e])},t.prototype.acosh=function(e){var n=new se(e.shape,Op);return this.compileAndRun(n,[e])},t.prototype.atanh=function(e){var n=new se(e.shape,Bp);return this.compileAndRun(n,[e])},t.prototype.erf=function(e){var n=new se(e.shape,`
  // Error function is calculated approximately with elementary function.
  // See "Handbook of Mathematical Functions with Formulas,
  // Graphs, and Mathematical Tables", Abramowitz and Stegun.
  float p = 0.3275911;
  float a1 = 0.254829592;
  float a2 = -0.284496736;
  float a3 = 1.421413741;
  float a4 = -1.453152027;
  float a5 = 1.061405429;

  float sign = sign(x);
  x = abs(x);
  float t = 1.0 / (1.0 + p * x);
  return sign * (1.0 - (((((a5*t + a4)*t) + a3)*t + a2)*t + a1)*t*exp(-x*x));
`);return this.compileAndRun(n,[e])},t.prototype.step=function(e,n){var a=new se(e.shape,function(o){return o===void 0&&(o=0),kt+`
    return x > 0.0 ? 1.0 : float(`+o+`);
  `}(n));return this.compileAndRun(a,[e])},t.prototype.conv2dByMatMul=function(e,n,a,o,i,s){var u=e.shape,c=this.texData.get(e.dataId),l=a.inChannels,h=u[0]*u[1]*u[2],d=a.outChannels,f=a.dataFormat==="channelsLast",p=(h===1||d===1)&&l>1e3,g=u[2]%2!=0&&!!c.isPacked;if(p||!O().getBool("WEBGL_LAZILY_UNPACK")||!O().getBool("WEBGL_PACK_BINARY_OPERATIONS")||!g){var v=f?u[0]*u[1]*u[2]:u[0]*u[2]*u[3],m=this.reshape(e,[1,v,a.inChannels]),b=this.reshape(n,[1,a.inChannels,a.outChannels]);return this.reshape(this.fusedBatchMatMul({a:m,b,transposeA:!1,transposeB:!1,bias:o,activation:i,preluActivationWeights:s}),a.outShape)}var x=f?u[0]*u[1]*(u[2]+1):u[0]*u[2]*(u[3]+1),y={dataId:e.dataId,shape:[1,x,a.inChannels],dtype:e.dtype},w=c.shape;c.shape=c.shape.slice(),c.shape[c.shape.length-2]++,E(Hr(c.shape,y.shape),function(){return"packed reshape "+c.shape+" to "+y.shape+" isn't free"});var C=this.reshape(n,[1,a.inChannels,a.outChannels]),R=this.fusedBatchMatMul({a:y,b:C,transposeA:!1,transposeB:!1,bias:o,activation:i,preluActivationWeights:s}),S=this.texData.get(R.dataId);return E(S.isPacked,function(){return"batchMatMul result is expected to be packed"}),c.shape=w,S.shape=a.outShape,N.makeTensorFromDataId(R.dataId,a.outShape,R.dtype)},t.prototype.conv2dWithIm2Row=function(e,n,a,o,i,s){var u=a.filterWidth,c=a.filterHeight,l=a.inChannels,h=a.outWidth,d=a.outHeight,f=a.dataFormat==="channelsLast",p=u*c*l,g=d*h,v=[p,g],m=e.squeeze([0]),b=n.reshape([1,p,-1]),x=new Qf(v,m.shape,a),y=this.compileAndRun(x,[m]).reshape([1,v[0],v[1]]),w=o!=null,C=s!=null,R=i?Xr(i,!0):null,S=new lo(y.shape,[1,g,a.outChannels],!0,!1,w,R,C),I=[y,b];o&&I.push(o),C&&I.push(s);var k=this.compileAndRun(S,I);return f?k.reshape([1,d,h,a.outChannels]):k.reshape([1,a.outChannels,d,h])},t.prototype.fusedConv2d=function(e){var n=e.input,a=e.filter,o=e.convInfo,i=e.bias,s=e.activation,u=e.preluActivationWeights;if(o.filterHeight===1&&o.filterWidth===1&&o.dilationHeight===1&&o.dilationWidth===1&&o.strideHeight===1&&o.strideWidth===1&&(o.padInfo.type==="SAME"||o.padInfo.type==="VALID"))return this.conv2dByMatMul(n,a,o,i,s,u);if(O().getBool("WEBGL_CONV_IM2COL")&&n.shape[0]===1)return this.conv2dWithIm2Row(n,a,o,i,s,u);var c=i!=null,l=u!=null,h=s?Xr(s,!1):null,d=new ks(o,c,h,l),f=[n,a];return i&&f.push(i),u&&f.push(u),this.compileAndRun(d,f)},t.prototype.conv2d=function(e,n,a){if(a.filterHeight===1&&a.filterWidth===1&&a.dilationHeight===1&&a.dilationWidth===1&&a.strideHeight===1&&a.strideWidth===1&&(a.padInfo.type==="SAME"||a.padInfo.type==="VALID"))return this.conv2dByMatMul(e,n,a);if(O().getBool("WEBGL_CONV_IM2COL")&&e.shape[0]===1)return this.conv2dWithIm2Row(e,n,a);var o=new ks(a);return this.compileAndRun(o,[e,n])},t.prototype.conv2dDerInput=function(e,n,a){var o=new vf(a);return this.compileAndRun(o,[e,n])},t.prototype.conv2dDerFilter=function(e,n,a){var o=new pf(a);return this.compileAndRun(o,[e,n])},t.prototype.fusedDepthwiseConv2D=function(e){var n,a=e.input,o=e.filter,i=e.convInfo,s=e.bias,u=e.activation,c=e.preluActivationWeights,l=O().getBool("WEBGL_PACK_DEPTHWISECONV")&&i.strideWidth<=2&&i.outChannels/i.inChannels==1,h=u?Xr(u,l):null,d=[a,o],f=s!=null,p=c!=null;return f&&d.push(s),p&&d.push(c),l?(n=new Rs(i,f,h,p),this.compileAndRun(n,d)):(n=new Ss(i,f,h,p),this.compileAndRun(n,d))},t.prototype.depthwiseConv2D=function(e,n,a){var o;return O().getBool("WEBGL_PACK_DEPTHWISECONV")&&a.strideWidth<=2&&a.outChannels/a.inChannels==1?(o=new Rs(a),this.compileAndRun(o,[e,n])):(o=new Ss(a),this.compileAndRun(o,[e,n]))},t.prototype.depthwiseConv2DDerInput=function(e,n,a){var o=new bf(a);return this.compileAndRun(o,[e,n])},t.prototype.depthwiseConv2DDerFilter=function(e,n,a){var o=new yf(a);return this.compileAndRun(o,[e,n])},t.prototype.conv3d=function(e,n,a){var o=new xf(a);return this.compileAndRun(o,[e,n])},t.prototype.conv3dDerInput=function(e,n,a){var o=new mf(a);return this.compileAndRun(o,[e,n])},t.prototype.conv3dDerFilter=function(e,n,a){var o=new gf(a);return this.compileAndRun(o,[e,n])},t.prototype.maxPool=function(e,n){var a=new ho(n,"max",!1);return this.compileAndRun(a,[e])},t.prototype.avgPool=function(e,n){var a=new ho(n,"avg",!1);return this.compileAndRun(a,[e],"float32")},t.prototype.maxPoolBackprop=function(e,n,a,o){var i=new ho(o,"max",!0),s=this.compileAndRun(i,[n]),u=new rp(o),c=this.compileAndRun(u,[e,s],n.dtype);return s.dispose(),c},t.prototype.avgPoolBackprop=function(e,n,a){var o=new nf(a);return this.compileAndRun(o,[e],n.dtype)},t.prototype.cast=function(e,n){return qu(e,n,this)},t.prototype.unstack=function(e,n){for(var a=e.shape[n],o=new Array(e.rank-1),i=0,s=0;s<e.rank;s++)s!==n&&(o[i++]=e.shape[s]);var u=new Array(e.rank).fill(0),c=e.shape.slice();c[n]=1;var l=new Array(a);for(s=0;s<l.length;s++)u[n]=s,l[s]=this.slice(e,u,c).reshape(o);return l},t.prototype.avgPool3d=function(e,n){var a=new fo(n,"avg",!1);return this.compileAndRun(a,[e],"float32")},t.prototype.avgPool3dBackprop=function(e,n,a){var o=new rf(a);return this.compileAndRun(o,[e],n.dtype)},t.prototype.maxPool3d=function(e,n){var a=new fo(n,"max",!1);return this.compileAndRun(a,[e],"float32")},t.prototype.maxPool3dBackprop=function(e,n,a,o){var i=new fo(o,"max",!0),s=this.compileAndRun(i,[n]),u=new ap(o),c=this.compileAndRun(u,[e,s],n.dtype);return s.dispose(),c},t.prototype.reshape=function(e,n){var a=this.texData.get(e.dataId);if(a.isPacked&&!Hr(e.shape,n)&&(a.texture===null||!Hr(a.shape,n))){var o=this.packedReshape(e,n);return N.makeTensorFromDataId(o.dataId,o.shape,o.dtype)}return zo(e,n)},t.prototype.resizeBilinear=function(e,n,a,o){var i=O().getBool("WEBGL_PACK_IMAGE_OPERATIONS")?new pp(e.shape,n,a,o):new fp(e.shape,n,a,o);return this.compileAndRun(i,[e],"float32")},t.prototype.resizeBilinearBackprop=function(e,n,a){var o=new dp(e,n,a);return this.compileAndRun(o,[e])},t.prototype.resizeNearestNeighbor=function(e,n,a,o){var i=new gp(e.shape,n,a,o);return this.compileAndRun(i,[e])},t.prototype.resizeNearestNeighborBackprop=function(e,n,a){var o=new vp(e,n,a);return this.compileAndRun(o,[e])},t.prototype.multinomial=function(e,n,a,o){var i=n?e:en(e),s=i.shape[0],u=i.shape[1],c=new op(s,u,a),l=c.getCustomSetupFunc(o);return this.compileAndRun(c,[i],"int32",l)},t.prototype.oneHot=function(e,n,a,o){var i=new ip(e.size,n,a,o);return this.compileAndRun(i,[e])},t.prototype.diag=function(e){var n=new kf(e.size);return this.compileAndRun(n,[e])},t.prototype.nonMaxSuppression=function(e,n,a,o,i){return ua("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead"),li(e.dataSync(),n.dataSync(),a,o,i)},t.prototype.cropAndResize=function(e,n,a,o,i,s){var u=new wf(e.shape,n.shape,o,i,s);return this.compileAndRun(u,[e,n,a],"float32")},t.prototype.depthToSpace=function(e,n,a){E(n>1,function(){return"blockSize should be > 1 for depthToSpace, but was: "+n});var o=e.shape[0],i=a==="NHWC"?e.shape[1]:e.shape[2],s=a==="NHWC"?e.shape[2]:e.shape[3],u=a==="NHWC"?e.shape[3]:e.shape[1],c=i*n,l=s*n,h=u/(n*n),d=new If(a==="NHWC"?[o,c,l,h]:[o,h,c,l],n,a);return this.compileAndRun(d,[e])},t.prototype.split=function(e,n,a){return Yu(e,n,a)},t.prototype.scatterND=function(e,n,a){var o=pa(0,e,a),i=o.sliceRank,s=o.numUpdates,u=o.sliceSize,c=o.strides,l=o.outputSize,h=[l/u,u],d=e.reshape([s,i]),f=n.reshape([s,u]);if(l===0)return zo(qe([]),a);var p=q(0),g=new Ns(s,i,d.rank,f.rank,c,h);return this.compileAndRun(g,[f,d,p]).reshape(a)},t.prototype.sparseToDense=function(e,n,a,o){var i=pa(0,e,a),s=i.sliceRank,u=i.numUpdates,c=i.strides,l=i.outputSize,h=new Ns(u,s,e.rank,n.rank,c,[l,1]);return this.compileAndRun(h,[n,e,o]).reshape(a)},t.prototype.fft=function(e){return this.fftImpl(e,!1)},t.prototype.ifft=function(e){return this.fftImpl(e,!0)},t.prototype.fftImpl=function(e,n){var a=this.texData.get(e.dataId),o=new Ds(Tf,e.shape,n),i=new Ds(Nf,e.shape,n),s=[this.makeComplexComponentTensorInfo(e,a.complexTensors.real),this.makeComplexComponentTensorInfo(e,a.complexTensors.imag)],u=this.compileAndRun(o,s),c=this.compileAndRun(i,s),l=this.complex(u,c).as2D(e.shape[0],e.shape[1]);return u.dispose(),c.dispose(),l},t.prototype.gatherND=function(e,n){var a=n.shape,o=a[a.length-1],i=Wu(e,n),s=i[0],u=i[1],c=i[2],l=i[3],h=n.reshape([u,o]),d=e.reshape([e.size/c,c]),f=new Mf(o,l,[u,c]);return this.compileAndRun(f,[d,h]).reshape(s)},t.prototype.fill=function(e,n,a){if((a=a||Tr(n))==="string"){var o=aa(a,Z(e));return o.fill(n),N.makeTensor(o,e,a,this)}var i=new Ff(e,n),s=i.getCustomSetupFunc(n);return this.compileAndRun(i,[],a,s)},t.prototype.onesLike=function(e){if(e.dtype==="string")throw new Error("onesLike is not supported under string dtype");return this.fill(e.shape,1,e.dtype)},t.prototype.zerosLike=function(e){return this.fill(e.shape,e.dtype==="string"?"":0,e.dtype)},t.prototype.linspace=function(e,n,a){return Ku(e,n,a)},t.prototype.makeTensorInfo=function(e,n){var a=this.write(null,e,n);return this.texData.get(a).usage=null,{dataId:a,shape:e,dtype:n}},t.prototype.makeOutput=function(e,n){var a=this.makeTensorInfo(e,n).dataId;return N.makeTensorFromDataId(a,e,n,this)},t.prototype.unpackTensor=function(e){var n=new Wp(e.shape);return this.runWebGLProgram(n,[e],e.dtype)},t.prototype.packTensor=function(e){var n=new sp(e.shape);return this.runWebGLProgram(n,[e],e.dtype,null,!0)},t.prototype.packedReshape=function(e,n){var a=[ia(e.shape)].concat(sa(e.shape)),o={dtype:e.dtype,shape:a,dataId:e.dataId},i=[ia(n)].concat(sa(n)),s=new hp(i,a),u=this.runWebGLProgram(s,[o],e.dtype,null,!0);return{dataId:u.dataId,shape:n,dtype:u.dtype}},t.prototype.decode=function(e){var n,a=this.texData.get(e),o=a.isPacked,i=a.shape,s=a.dtype,u=io(i);return n=o?new Ef(u):new _f(u),{dtype:s,shape:i,dataId:this.runWebGLProgram(n,[{shape:u,dtype:s,dataId:e}],s,null,!0).dataId}},t.prototype.runWebGLProgram=function(e,n,a,o,i){var s=this;i===void 0&&(i=!1);var u=this.makeTensorInfo(e.outputShape,a),c=this.texData.get(u.dataId);if(e.packedOutput&&(c.isPacked=!0),e.outPackingScheme===wr.DENSE){var l=vr(e.outputShape);c.texShape=l.map(function(x){return 2*x})}if(e.outTexUsage!=null&&(c.usage=e.outTexUsage),Z(u.shape)===0)return c.values=br(u.dtype,0),u;var h=[],d=n.map(function(x){if(x.dtype==="complex64")throw new Error("GPGPUProgram does not support complex64 input. For complex64 dtypes, please separate the program into real and imaginary parts.");var y=s.texData.get(x.dataId);if(y.texture==null){if(!e.packedInputs&&Z(x.shape)<=O().getNumber("WEBGL_SIZE_UPLOAD_UNIFORM"))return{shape:x.shape,texData:null,isUniform:!0,uniformValues:y.values};e.packedInputs&&(y.isPacked=!0,y.shape=x.shape)}else if(!!y.isPacked!=!!e.packedInputs)x=y.isPacked?s.unpackTensor(x):s.packTensor(x),h.push(x),y=s.texData.get(x.dataId);else if(y.isPacked&&!Hr(y.shape,x.shape)){var w=x,C=x.shape;x.shape=y.shape,x=s.packedReshape(x,C),h.push(x),y=s.texData.get(x.dataId),w.shape=C}return s.uploadToGPU(x.dataId),{shape:x.shape,texData:y,isUniform:!1}});this.uploadToGPU(u.dataId);var f,p={shape:u.shape,texData:c,isUniform:!1},g=function(x,y,w){var C="";y.concat(w).forEach(function(I){var k=I.texData!=null&&I.texData.slice!=null&&I.texData.slice.flatOffset>0,F=I.isUniform?"uniform":I.texData.texShape;C+=I.shape+"_"+F+"_"+k});var R=x.userCode,S=x.constructor.name;return S+="_"+C+"_"+R}(e,d,p),v=this.getAndSaveBinary(g,function(){return function(x,y,w,C){var R=y.userCode,S=w.map(function(z,H){var j={logicalShape:z.shape,texShape:z.isUniform?null:z.texData.texShape,isUniform:z.isUniform,isPacked:!z.isUniform&&z.texData.isPacked,flatOffset:null};return z.texData!=null&&z.texData.slice!=null&&z.texData.slice.flatOffset>0&&(j.flatOffset=z.texData.slice.flatOffset),{name:y.variableNames[H],shapeInfo:j}}),I=S.map(function(z){return z.shapeInfo}),k={logicalShape:C.shape,texShape:C.texData.texShape,isUniform:!1,isPacked:C.texData.isPacked,flatOffset:null},F=$d(S,k,R,y.packedInputs),T=x.createProgram(F),W=null,B=x.getUniformLocation(T,"NAN",!1);O().getNumber("WEBGL_VERSION")===1&&(W=x.getUniformLocation(T,"INFINITY",!1));for(var L={},V=0;V<y.variableNames.length;V++){var U=y.variableNames[V];L[U]=x.getUniformLocation(T,U,!1),L["offset"+U]=x.getUniformLocation(T,"offset"+U,!1)}return{program:y,source:F,webGLProgram:T,uniformLocations:L,inShapeInfos:I,outShapeInfo:k,infLoc:W,nanLoc:B}}(s.gpgpu,e,d,p)}),m=this.activeTimers!=null;if(m&&(f=this.startTimer()),function(x,y,w,C,R){Ts(y.inShapeInfos,w),Ts([y.outShapeInfo],[C]);var S=C.texData.texture,I=C.texData.texShape;C.texData.isPacked?x.setOutputPackedMatrixTexture(S,I[0],I[1]):x.setOutputMatrixTexture(S,I[0],I[1]),x.setProgram(y.webGLProgram),O().getNumber("WEBGL_VERSION")===1&&y.infLoc!==null&&x.gl.uniform1f(y.infLoc,1/0),y.nanLoc!==null&&x.gl.uniform1f(y.nanLoc,NaN),w.forEach(function(k,F){var T=y.program.variableNames[F],W=y.uniformLocations[T],B=y.uniformLocations["offset"+T];if(W!=null)if(k.isUniform)if(Z(k.shape)<2)x.gl.uniform1f(W,k.uniformValues[0]);else{var L=k.uniformValues;L instanceof Float32Array||(L=new Float32Array(L)),x.gl.uniform1fv(W,L)}else k.texData.slice!=null&&B!=null&&x.gl.uniform1i(B,k.texData.slice.flatOffset),x.setInputMatrixTexture(k.texData.texture,W,F)}),R!=null&&R(x,y.webGLProgram),x.executeProgram()}(this.gpgpu,v,d,p,o),h.forEach(function(x){return s.disposeData(x.dataId)}),m&&(f=this.endTimer(f),this.activeTimers.push({name:e.constructor.name,query:this.getQueryTime(f)})),!O().getBool("WEBGL_LAZILY_UNPACK")&&c.isPacked&&i===!1){var b=this.unpackTensor(u);return this.disposeData(u.dataId),b}return u},t.prototype.compileAndRun=function(e,n,a,o,i){i===void 0&&(i=!1),a=a||n[0].dtype;var s=this.runWebGLProgram(e,n,a,o,i);return N.makeTensorFromDataId(s.dataId,s.shape,s.dtype)},t.prototype.getAndSaveBinary=function(e,n){return e in this.binaryCache||(this.binaryCache[e]=n()),this.binaryCache[e]},t.prototype.getTextureManager=function(){return this.textureManager},t.prototype.dispose=function(){var e=this;this.disposed||(O().getBool("IS_TEST")||Object.keys(this.binaryCache).forEach(function(n){e.gpgpu.deleteProgram(e.binaryCache[n].webGLProgram),delete e.binaryCache[n]}),this.textureManager.dispose(),this.canvas!=null&&typeof HTMLCanvasElement<"u"&&this.canvas instanceof HTMLCanvasElement?this.canvas.remove():this.canvas=null,this.gpgpuCreatedLocally&&(this.gpgpu.program=null,this.gpgpu.dispose()),this.disposed=!0)},t.prototype.floatPrecision=function(){var e=this;return this.floatPrecisionValue==null&&(this.floatPrecisionValue=X(function(){if(!O().get("WEBGL_RENDER_FLOAT32_ENABLED")){var n=O().getBool("DEBUG");O().set("DEBUG",!1);var a=e.abs(q(1e-8)).dataSync()[0];if(O().set("DEBUG",n),a>0)return 32}return 16})),this.floatPrecisionValue},t.prototype.epsilon=function(){return this.floatPrecision()===32?1e-7:1e-4},t.prototype.uploadToGPU=function(e){var n,a=this.texData.get(e),o=a.shape,i=a.dtype,s=a.values,u=a.texture,c=a.usage,l=a.isPacked;if(u==null){var h,d=this.activeTimers!=null;d&&(h=Ft());var f=a.texShape;if(f==null&&(f=qh(o,l),a.texShape=f),s!=null){var p=io(o),g=void 0,v=f[1],m=f[0],b=s instanceof Uint8Array;l?(v=(n=Fr(f[0],f[1]))[0],m=n[1],g=new Df(p,[m,v],b)):g=new Af(p,[m,v],b);var x=this.makeTensorInfo([m,v],i);this.texData.get(x.dataId).usage=b?ct.PIXELS:ct.UPLOAD,this.gpgpu.uploadDenseMatrixToTexture(this.getTexture(x.dataId),v,m,s);var y=this.runWebGLProgram(g,[x],i,null,!0),w=this.texData.get(y.dataId);a.texture=w.texture,a.texShape=w.texShape,a.isPacked=w.isPacked,a.usage=w.usage,this.disposeData(x.dataId),this.texData.delete(y.dataId),a.values=null,d&&(this.uploadWaitMs+=Ft()-h)}else{var C=this.acquireTexture(f,c,i,l);a.texture=C}}},t.prototype.convertAndCacheOnCPU=function(e,n){var a=this.texData.get(e),o=a.dtype;return this.releaseGPUData(e),n!=null&&(a.values=function(i,s){if(s==="float32"||s==="complex64")return i;if(s==="int32"||s==="bool"){for(var u=s==="int32"?new Int32Array(i.length):new Uint8Array(i.length),c=0;c<u.length;++c)u[c]=Math.round(i[c]);return u}throw new Error("Unknown dtype "+s)}(n,o)),a.values},t.prototype.acquireTexture=function(e,n,a,o){if(this.numBytesInGPU+=this.computeBytes(e,a),!this.warnedAboutMemory&&this.numBytesInGPU>1024*this.numMBBeforeWarning*1024){var i=(this.numBytesInGPU/1024/1024).toFixed(2);this.warnedAboutMemory=!0}return this.textureManager.acquireTexture(e,n,o)},t.prototype.computeBytes=function(e,n){return e[0]*e[1]*wu(n)},t}(Hu);Ru()&&N.registerBackend("webgl",function(){return new Up},2);var Vp=D({square_:function(r){var t=_(r,"x","square"),e=[t];return N.runKernelFunc(function(n,a){return a([t]),n.square(t)},{x:t},null,"Square",{},e,[])}}),_r="SquaredDifference",cc=D({squaredDifference_:function(r,t){var e,n=_(r,"a","squaredDifference"),a=_(t,"b","squaredDifference");e=Re(n,a),n=e[0],a=e[1],de(n.shape,a.shape);var o={a:n,b:a},i=[n,a];return N.runKernelFunc(function(s,u){var c=s.squaredDifference(n,a);return u([n,a]),c},o,function(s,u){var c=u[0],l=u[1],h=q(2);return{a:function(){return s.mul(c.sub(l).mul(h))},b:function(){return s.mul(l.sub(c).mul(h))}}},_r,{},i,[])}}),Gp=D({abs_:function(r){var t=_(r,"x","abs");return t.dtype==="complex64"?N.runKernelFunc(function(e){return e.complexAbs(t)},{$x:t}):N.runKernelFunc(function(e,n){var a=e.abs(t);return n([t]),a},{x:t},function(e,n){var a=n[0];return{x:function(){return e.mul(a.toFloat().step(-1))}}},"Abs")}}),Hp=D({acos_:function(r){var t=_(r,"x","acos");return N.runKernelFunc(function(e,n){var a=e.acos(t);return n([t]),a},{$x:t},function(e,n){var a=n[0];return{$x:function(){return e.divStrict(q(1).sub(a.toFloat().square()).sqrt()).neg()}}})}}),jp=D({acosh_:function(r){var t=_(r,"x","acosh");return N.runKernelFunc(function(e,n){var a=e.acosh(t);return n([t]),a},{$x:t},function(e,n){var a=n[0];return{$x:function(){return e.divStrict(a.toFloat().square().sub(1).sqrt())}}})}}),qp=D({asin_:function(r){var t=_(r,"x","asin");return N.runKernelFunc(function(e,n){var a=e.asin(t);return n([t]),a},{$x:t},function(e,n){var a=n[0];return{$x:function(){return e.divStrict(q(1).sub(a.toFloat().square()).sqrt())}}})}}),Kp=D({asinh_:function(r){var t=_(r,"x","asinh");return N.runKernelFunc(function(e,n){var a=e.asinh(t);return n([t]),a},{$x:t},function(e,n){var a=n[0];return{$x:function(){return e.divStrict(q(1).add(a.toFloat().square()).sqrt())}}})}}),Xp=D({atan_:function(r){var t=_(r,"x","atan");return N.runKernelFunc(function(e,n){var a=e.atan(t);return n([t]),a},{$x:t},function(e,n){var a=n[0];return{$x:function(){return e.div(a.toFloat().square().add(1))}}})}}),Yp=D({atanh_:function(r){var t=_(r,"x","atanh");return N.runKernelFunc(function(e,n){var a=e.atanh(t);return n([t]),a},{$x:t},function(e,n){var a=n[0];return{$x:function(){return e.div(q(1).sub(a.toFloat().square()))}}})}}),$p=D({ceil_:function(r){var t=_(r,"x","ceil");return N.runKernelFunc(function(e){return e.ceil(t)},{$x:t},function(e){return{$x:function(){return me(e)}}})}}),gi=D({clipByValue_:function(r,t,e){var n=_(r,"x","clipByValue");E(t<=e,function(){return"Error in clip: min ("+t+") must be less than or equal to max ("+e+")."});var a=[n],o={min:t,max:e};return N.runKernelFunc(function(i,s){var u=i.clip(n,t,e);return s([n]),u},{x:n},function(i,s){var u=s[0];return{x:function(){return i.where(u.greaterEqual(t).logicalAnd(u.lessEqual(e)),me(i))}}},"ClipByValue",o,a)}}),Zp=D({cos_:function(r){var t=_(r,"x","cos"),e=[t];return N.runKernelFunc(function(n,a){var o=n.cos(t);return a([t]),o},{x:t},function(n,a){var o=a[0];return{x:function(){return o.toFloat().sin().neg().mul(n)}}},"Cos",{},e)}}),Jp=D({cosh_:function(r){var t=_(r,"x","cosh");return N.runKernelFunc(function(e,n){var a=e.cosh(t);return n([t]),a},{$x:t},function(e,n){var a=n[0];return{$x:function(){return a.toFloat().sinh().mulStrict(e)}}})}}),Qp=D({erf_:function(r){var t=_(r,"x","erf");return E(t.dtype==="int32"||t.dtype==="float32",function(){return"Input dtype must be `int32` or `float32`."}),t.dtype==="int32"&&(t=t.toFloat()),N.runKernelFunc(function(e,n){var a=e.erf(t);return n([t]),a},{$x:t},function(e,n){var a=n[0];return{$x:function(){return e.mul(a.square().neg().exp().mul(2/Math.sqrt(Math.PI)))}}})}}),Vo=D({exp_:function(r){var t=_(r,"x","exp");return N.runKernelFunc(function(e,n){var a=e.exp(t);return n([a]),a},{x:t},function(e,n){return{x:function(){return e.mulStrict(n[0])}}},"Exp",{},[],[!0])}}),ev=D({expm1_:function(r){var t=_(r,"x","expm1");return N.runKernelFunc(function(e,n){var a=e.expm1(t);return n([t]),a},{$x:t},function(e,n){var a=n[0];return{$x:function(){return e.mul(a.exp())}}})}}),tv=D({floor_:function(r){var t=_(r,"x","floor");return N.runKernelFunc(function(e){return e.floor(t)},{$x:t},function(e){return{$x:function(){return me(e)}}})}}),nv=D({log_:function(r){var t=_(r,"x","log"),e=[t];return N.runKernelFunc(function(n,a){var o=n.log(t);return a([t]),o},{x:t},function(n,a){var o=a[0];return{x:function(){return n.div(o.toFloat())}}},"Log",{},e)}}),rv=D({log1p_:function(r){var t=_(r,"x","log1p");return N.runKernelFunc(function(e,n){var a=e.log1p(t);return n([t]),a},{$x:t},function(e,n){var a=n[0];return{$x:function(){return e.div(a.add(1))}}})}}),av=D({logSigmoid_:function(r){var t=_(r,"x","logSigmoid");return N.runKernelFunc(function(e,n){var a=e.softplus(t.neg()).neg();return n([t]),a},{$x:t},function(e,n){var a=n[0];return{$x:function(){return e.mul(a.neg().sigmoid())}}})}}),ya=D({neg_:function(r){var t=_(r,"x","neg"),e=[t];return N.runKernelFunc(function(n){return n.neg(t)},{x:t},function(n){return{x:function(){return n.neg()}}},"Neg",{},e)}}),ov=D({reciprocal_:function(r){var t=_(r,"x","reciprocal");return N.runKernelFunc(function(e,n){var a=e.reciprocal(t);return n([t]),a},{$x:t},function(e,n){var a=n[0];return{$x:function(){return e.div(a.square().neg())}}})}}),iv=D({round_:function(r){var t=_(r,"x","round");return N.runKernelFunc(function(e){return e.round(t)},{$x:t},function(e){return{$x:function(){return me(e)}}})}}),lc=D({rsqrt_:function(r){var t=_(r,"x","rsqrt"),e=[t];return N.runKernelFunc(function(n,a){var o=n.rsqrt(t);return a([t]),o},{x:t},function(n,a){var o=a[0];return{x:function(){return n.div(o.pow(1.5).mul(2)).neg()}}},"Rsqrt",{},e)}}),hc=D({sigmoid_:function(r){var t=_(r,"x","sigmoid");return N.runKernelFunc(function(e,n){var a=e.sigmoid(t);return n([a]),a},{x:t},function(e,n){var a=n[0];return{x:function(){return e.mul(a.mul(q(1).sub(a)))}}},"Sigmoid")}}),sv=D({sign_:function(r){var t=_(r,"x","sign");return N.runKernelFunc(function(e){return e.sign(t)},{$x:t},function(e){return{$x:function(){return me(e)}}})}}),uv=D({isNaN_:function(r){var t=_(r,"x","isNaN");return N.runKernelFunc(function(e){return e.isNaN(t)},{$x:t},function(e){return{$x:function(){return me(e)}}})}}),cv=D({isInf_:function(r){var t=_(r,"x","isInf");return N.runKernelFunc(function(e){return e.isInf(t)},{$x:t},function(e){return{$x:function(){return me(e)}}})}}),lv=D({isFinite_:function(r){var t=_(r,"x","isFinite");return N.runKernelFunc(function(e){return e.isFinite(t)},{$x:t},function(e){return{$x:function(){return me(e)}}})}}),hv=D({sin_:function(r){var t=_(r,"x","sin"),e=[t];return N.runKernelFunc(function(n,a){var o=n.sin(t);return a([t]),o},{x:t},function(n,a){var o=a[0];return{x:function(){return o.toFloat().cos().mul(n)}}},"Sin",{},e)}}),dv=D({sinh_:function(r){var t=_(r,"x","sinh");return N.runKernelFunc(function(e,n){var a=e.sinh(t);return n([t]),a},{$x:t},function(e,n){var a=n[0];return{$x:function(){return a.toFloat().cosh().mulStrict(e)}}})}}),fv=D({softplus_:function(r){var t=_(r,"x","softplus");return N.runKernelFunc(function(e,n){var a=e.softplus(t);return n([t]),a},{$x:t},function(e,n){var a=n[0];return{$x:function(){return e.mul(a.sigmoid())}}})}}),pv=D({sqrt_:function(r){var t=_(r,"x","sqrt");return N.runKernelFunc(function(e,n){var a=e.sqrt(t);return n([t]),a},{$x:t},function(e,n){var a=n[0];return{$x:function(){return e.div(a.toFloat().sqrt().mul(2))}}})}}),vv=D({step_:function(r,t){t===void 0&&(t=0);var e=_(r,"x","step");return N.runKernelFunc(function(n){return n.step(e,t)},{$x:e},function(n){return{$x:function(){return me(n)}}})}}),gv=D({tan_:function(r){var t=_(r,"x","tan");return N.runKernelFunc(function(e,n){var a=e.tan(t);return n([t]),a},{$x:t},function(e,n){var a=n[0];return{$x:function(){return e.div(a.cos().square())}}})}}),mv=D({tanh_:function(r){var t=_(r,"x","tanh");return N.runKernelFunc(function(e,n){var a=e.tanh(t);return n([a]),a},{x:t},function(e,n){var a=n[0];return{x:function(){return q(1).sub(a.square()).mulStrict(e)}}},"Tanh",{},null,[!0])}});function dc(r,t,e,n,a,o){var i,s,u=_(r,"x","batchNorm"),c=_(t,"mean","batchNorm"),l=_(e,"variance","batchNorm");return a!=null&&(i=_(a,"scale","batchNorm")),n!=null&&(s=_(n,"offset","batchNorm")),E(u.rank===2,function(){return"Error in batchNorm3D: x must be rank 3 but got rank "+u.rank+"."}),E(c.rank===2||c.rank===1,function(){return"Error in batchNorm2D: mean must be rank 2 or rank 1 but got rank "+c.rank+"."}),E(l.rank===2||l.rank===1,function(){return"Error in batchNorm2D: variance must be rank 2 or rank 1 but got rank "+l.rank+"."}),i!=null&&E(i.rank===2||i.rank===1,function(){return"Error in batchNorm2D: scale must be rank 2 or rank 1 but got rank "+i.rank+"."}),s!=null&&E(s.rank===2||s.rank===1,function(){return"Error in batchNorm2D: offset must be rank 2 or rank 1 but got rank "+s.rank+"."}),Mr(u,c,l,s,i,o)}function fc(r,t,e,n,a,o){var i,s,u=_(r,"x","batchNorm"),c=_(t,"mean","batchNorm"),l=_(e,"variance","batchNorm");return a!=null&&(i=_(a,"scale","batchNorm")),n!=null&&(s=_(n,"offset","batchNorm")),E(u.rank===3,function(){return"Error in batchNorm3D: x must be rank 3 but got rank "+u.rank+"."}),E(c.rank===3||c.rank===1,function(){return"Error in batchNorm3D: mean must be rank 3 or rank 1 but got rank "+c.rank+"."}),E(l.rank===3||l.rank===1,function(){return"Error in batchNorm3D: variance must be rank 3 or rank 1 but got rank "+l.rank+"."}),i!=null&&E(i.rank===3||i.rank===1,function(){return"Error in batchNorm3D: scale must be rank 3 or rank 1 but got rank "+i.rank+"."}),s!=null&&E(s.rank===3||s.rank===1,function(){return"Error in batchNorm3D: offset must be rank 3 or rank 1 but got rank "+s.rank+"."}),Mr(u,c,l,s,i,o)}function pc(r,t,e,n,a,o){var i,s,u=_(r,"x","batchNorm"),c=_(t,"mean","batchNorm"),l=_(e,"variance","batchNorm");return a!=null&&(i=_(a,"scale","batchNorm")),n!=null&&(s=_(n,"offset","batchNorm")),E(u.rank===4,function(){return"Error in batchNorm4D: x must be rank 4 but got rank "+u.rank+"."}),E(c.rank===4||c.rank===1,function(){return"Error in batchNorm4D: mean must be rank 4 or rank 1 but got rank "+c.rank+"."}),E(l.rank===4||l.rank===1,function(){return"Error in batchNorm4D: variance must be rank 4 or rank 1 but got rank "+l.rank+"."}),i!=null&&E(i.rank===4||i.rank===1,function(){return"Error in batchNorm4D: scale must be rank 4 or rank 1 but got rank "+i.rank+"."}),s!=null&&E(s.rank===4||s.rank===1,function(){return"Error in batchNorm4D: offset must be rank 4 or rank 1 but got rank "+s.rank+"."}),Mr(u,c,l,s,i,o)}function Mr(r,t,e,n,a,o){o==null&&(o=.001);var i,s,u,c=_(r,"x","batchNorm"),l=_(t,"mean","batchNorm"),h=_(e,"variance","batchNorm");a!=null&&(i=_(a,"scale","batchNorm")),n!=null&&(s=_(n,"offset","batchNorm")),E(l.rank===h.rank,function(){return"Batch normalization gradient requires mean and variance to have equal ranks."}),E(s==null||l.rank===s.rank,function(){return"Batch normalization gradient requires mean and offset to have equal ranks."}),E(i==null||l.rank===i.rank,function(){return"Batch normalization gradient requires mean and scale to have equal ranks."}),u=c.rank===0||c.rank===1?c.as4D(1,1,1,c.size):c.rank===2?c.as4D(1,1,c.shape[0],c.shape[1]):c.rank===3?c.as4D(1,c.shape[0],c.shape[1],c.shape[2]):c;var d=[c,l,h,i];return N.runKernelFunc(function(f,p){var g=f.batchNormalization(u,Yr(l),Yr(h),o,Yr(i),Yr(s));return p([c,l,h,i]),g},{x:c,mean:l,variance:h,scale:i,offset:s},function(f,p){var g=p,v=g[0],m=g[1],b=g[2],x=g[3],y=x??q(1),w=Be(m.shape,u.shape),C=[];if(m.rank===1){for(var R=0;R<u.shape.length-1;++R)C.push(u.shape[R]);C.push(1)}var S=v.sub(m),I=f.mul(y),k=lc(b.add(q(o))),F=k.mul(k).mul(k).mul(q(-.5));return{x:function(){return m.rank===1?f.mul($n(k.as4D(1,1,1,m.shape[0]),C)).mul(y).reshape(v.shape):f.mul(k).mul(y).reshape(v.shape)},mean:function(){var T=k.mul(q(-1)).mul(I);return m.rank===1&&(T=T.sum(w)),T.reshape(m.shape)},variance:function(){var T=F.mul(S).mul(I);return m.rank===1&&(T=T.sum(w)),T.reshape(m.shape)},scale:function(){var T=S.mul(k),W=f.mul(T);return m.rank===1&&(W=W.sum(w)),W.reshape(m.shape)},offset:function(){var T=f;return m.rank===1&&(T=T.sum(w)),T.reshape(m.shape)}}},"BatchNormalization",{varianceEpsilon:o},d).reshape(c.shape)}function Yr(r){return r==null?null:r.rank===0?r.as1D():r.rank===1?r:r.rank===2?r.as4D(1,1,r.shape[0],r.shape[1]):r.rank===3?r.as4D(1,r.shape[0],r.shape[1],r.shape[2]):r}function Ta(){Au("tf.batchNormalization() is going away. Use tf.batchNorm() instead, and note the positional argument change of scale, offset, and varianceEpsilon")}var yv=D({batchNormalization2d_:function(r,t,e,n,a,o){return n===void 0&&(n=.001),Ta(),dc(r,t,e,o,a,n)}}),bv=D({batchNormalization3d_:function(r,t,e,n,a,o){return n===void 0&&(n=.001),Ta(),fc(r,t,e,o,a,n)}}),xv=D({batchNormalization4d_:function(r,t,e,n,a,o){return n===void 0&&(n=.001),Ta(),pc(r,t,e,o,a,n)}}),wv=D({batchNormalization_:function(r,t,e,n,a,o){return n===void 0&&(n=.001),Ta(),Mr(r,t,e,o,a,n)}}),vc=D({batchNorm_:Mr}),Cv=D({batchNorm2d_:dc}),_v=D({batchNorm3d_:fc}),Ev=D({batchNorm4d_:pc}),Na=D({logicalAnd_:function(r,t){var e=_(r,"a","logicalAnd","bool"),n=_(t,"b","logicalAnd","bool");return de(e.shape,n.shape),N.runKernelFunc(function(a){return a.logicalAnd(e,n)},{a:e,b:n},null,"LogicalAnd")}}),Iv=D({logicalNot_:function(r){var t=_(r,"x","logicalNot","bool");return N.runKernelFunc(function(e){return e.logicalNot(t)},{$x:t})}}),gc=D({logicalOr_:function(r,t){var e=_(r,"a","logicalOr","bool"),n=_(t,"b","logicalOr","bool");return de(e.shape,n.shape),N.runKernelFunc(function(a){return a.logicalOr(e,n)},{$a:e,$b:n})}}),kv=D({logicalXor_:function(r,t){var e=_(r,"a","logicalXor","bool"),n=_(t,"b","logicalXor","bool");return de(e.shape,n.shape),gc(r,t).logicalAnd(Na(r,t).logicalNot())}}),Nn=D({where_:function(r,t,e){var n=_(t,"a","where"),a=_(e,"b","where"),o=_(r,"condition","where","bool");return xe(n.shape,a.shape,"Error in where: "),o.rank===1?E(o.shape[0]===n.shape[0],function(){return"The first dimension of `a` must match the size of `condition`."}):xe(o.shape,a.shape,"Error in where: "),N.runKernelFunc(function(i,s){var u=i.select(o,n,a);return s([o]),u},{$condition:o,$a:n,$b:a},function(i,s){var u=s[0];return{$condition:function(){return me(u).toFloat()},$a:function(){return i.mul(u.cast(i.dtype))},$b:function(){return i.mul(u.logicalNot().cast(i.dtype))}}})}}),mc=function(r){return Y(this,void 0,void 0,function(){var t,e,n;return $(this,function(a){switch(a.label){case 0:return[4,(t=_(r,"condition","whereAsync","bool")).data()];case 1:return e=a.sent(),n=di(t.shape,e),r!==t&&t.dispose(),[2,n]}})})},le=D({add_:function(r,t){var e,n=_(r,"a","add"),a=_(t,"b","add");e=Re(n,a),n=e[0],a=e[1];var o=de(n.shape,a.shape);return N.runKernelFunc(function(i){return i.add(n,a)},{a:n,b:a},function(i){return{a:function(){var s=i,u=Be(n.shape,o);return u.length>0&&(s=s.sum(u)),s.reshape(n.shape)},b:function(){var s=i,u=Be(a.shape,o);return u.length>0&&(s=s.sum(u)),s.reshape(a.shape)}}},"Add")}}),Sv=D({addN_:function(r){E(Array.isArray(r),function(){return"The argument passed to tf.addN() must be a list of tensors"}),E(r.length>=1,function(){return"Must pass at least one tensor to tf.addN(), but got "+r.length});var t=r.map(function(a,o){return _(a,"tensors"+o,"addN")}),e=t[0];t.forEach(function(a){if(a.dtype!==e.dtype)throw new Error("All tensors passed to tf.addN() must have the same dtype")}),t.forEach(function(a){if(!Ve(a.shape,e.shape))throw new Error("All tensors passed to tf.addN() must have the same shape")});var n=t;return N.runKernelFunc(function(a){return a.addN(t)},n,function(a){var o={};return t.forEach(function(i,s){o[s]=function(){return a.clone()}}),o},"AddN")}}),Rv=D({addStrict_:function(r,t){var e=_(r,"a","addStrict"),n=_(t,"b","addStrict");return xe(e.shape,n.shape,"Error in addStrict: "),e.add(n)}}),Av=D({atan2_:function(r,t){var e,n=_(r,"a","atan2"),a=_(t,"b","atan2");e=Re(n,a),n=e[0],a=e[1];var o=de(n.shape,a.shape);return N.runKernelFunc(function(i,s){var u=i.atan2(n,a);return s([n,a]),u},{$a:n,$b:a},function(i,s){var u=s[0],c=s[1];return{$a:function(){var l=le(u.square(),c.square()),h=i.mul(c.div(l)),d=Be(u.shape,o);return d.length>0&&(h=h.sum(d)),h.reshape(u.shape)},$b:function(){var l=le(u.square(),c.square()),h=ya(i.mul(u.div(l))),d=Be(c.shape,o);return d.length>0&&(h=h.sum(d)),h.reshape(c.shape)}}})}}),wt=D({div_:function(r,t){var e,n=_(r,"a","div"),a=_(t,"b","div");if(e=Re(n,a),n=e[0],a=e[1],n.dtype==="int32"&&a.dtype==="int32")return yc(n,a);var o=de(n.shape,a.shape);return N.runKernelFunc(function(i,s){var u=i.realDivide(n,a);return s([n,a]),u},{a:n,b:a},function(i,s){var u=s[0],c=s[1];return{a:function(){var l=i.div(c.toFloat()),h=Be(u.shape,o);return h.length>0?l.sum(h).reshape(u.shape):l},b:function(){var l=i.mul(u.toFloat()),h=Be(c.shape,o);h.length>0&&(l=l.sum(h).reshape(c.shape));var d=c.square();return l.div(d.toFloat()).neg()}}},"Div")}}),Dv=D({divNoNan_:function(r,t){var e,n=_(r,"a","div"),a=_(t,"b","div");n=(e=Re(n,a))[0],a=e[1];var o=wt(n,a),i=me(o),s=a.equal(i);return Nn(s,i,o)}}),Tv=D({divStrict_:function(r,t){var e=_(r,"a","div"),n=_(t,"b","div");return xe(e.shape,n.shape,"Error in divideStrict: "),e.div(n)}}),yc=D({floorDiv_:function(r,t){var e,n=_(r,"a","floorDiv"),a=_(t,"b","floorDiv");e=Re(n,a),n=e[0],a=e[1];var o=de(n.shape,a.shape);return N.runKernelFunc(function(i,s){var u=i.floorDiv(n,a);return s([n,a]),u},{a:n,b:a},function(i,s){var u=s[0],c=s[1];return{a:function(){var l=i.div(c.toFloat()),h=Be(u.shape,o);return h.length>0?l.sum(h).reshape(u.shape):l},b:function(){var l=i.mul(u.toFloat()),h=Be(c.shape,o);h.length>0&&(l=l.sum(h).reshape(c.shape));var d=c.square();return l.div(d.toFloat()).neg()}}},"FloorDiv")}}),mi=D({maximum_:function(r,t){var e,n=_(r,"a","maximum"),a=_(t,"b","maximum");return e=Re(n,a),n=e[0],a=e[1],n.dtype==="bool"&&(n=n.toInt(),a=a.toInt()),de(n.shape,a.shape),N.runKernelFunc(function(o,i){var s=o.maximum(n,a);return i([n,a]),s},{a:n,b:a},function(o,i){var s=i[0],u=i[1];return{a:function(){return o.mul(s.greaterEqual(u).toFloat())},b:function(){return o.mul(s.less(u).toFloat())}}},"Maximum")}}),Nv=D({maximumStrict_:function(r,t){var e=_(r,"a","maximumStrict"),n=_(t,"b","maximumStrict");return xe(e.shape,n.shape,"Error in maximumStrict: "),e.maximum(n)}}),bc=D({minimum_:function(r,t){var e,n=_(r,"a","minimum"),a=_(t,"b","minimum");return e=Re(n,a),n=e[0],a=e[1],n.dtype==="bool"&&(n=n.toInt(),a=a.toInt()),de(n.shape,a.shape),N.runKernelFunc(function(o,i){var s=o.minimum(n,a);return i([n,a]),s},{a:n,b:a},function(o,i){var s=i[0],u=i[1];return{a:function(){return o.mul(s.lessEqual(u).toFloat())},b:function(){return o.mul(s.greater(u).toFloat())}}},"Minimum")}}),Fv=D({minimumStrict_:function(r,t){var e=_(r,"a","minimumStrict"),n=_(t,"b","minimumStrict");return xe(e.shape,n.shape,"Error in minimumStrict: "),e.minimum(n)}}),Pv=D({mod_:function(r,t){var e,n=_(r,"a","mod"),a=_(t,"b","mod");e=Re(n,a),n=e[0],a=e[1];var o=de(n.shape,a.shape);return N.runKernelFunc(function(i,s){var u=i.mod(n,a);return s([n,a]),u},{$a:n,$b:a},function(i,s){var u=s[0],c=s[1];return{$a:function(){var l=Be(u.shape,o);return l.length>0?i.sum(l).reshape(u.shape):i},$b:function(){var l=i.mul(u.div(c).floor().neg()),h=Be(c.shape,o);return h.length>0?l.sum(h).reshape(c.shape):l}}})}}),Mv=D({modStrict_:function(r,t){var e=_(r,"a","modStrict"),n=_(t,"b","modStrict");return xe(e.shape,n.shape,"Error in modStrict: "),e.mod(n)}}),Ze=D({mul_:function(r,t){var e,n=_(r,"a","mul"),a=_(t,"b","mul");e=Re(n,a),n=e[0],a=e[1];var o=de(n.shape,a.shape);return N.runKernelFunc(function(i,s){var u=i.multiply(n,a);return s([n,a]),u},{a:n,b:a},function(i,s){var u=s[0],c=s[1];return{a:function(){var l=i.mul(c.toFloat()),h=Be(u.shape,o);return h.length>0?l.sum(h).reshape(u.shape):l},b:function(){var l=i.mul(u.toFloat()),h=Be(c.shape,o);return h.length>0?l.sum(h).reshape(c.shape):l}}},"Mul")}}),Ov=D({mulStrict_:function(r,t){var e=_(r,"a","mul"),n=_(t,"b","mul");return xe(e.shape,n.shape,"Error in multiplyStrict: "),e.mul(n)}}),ba=D({pow_:function(r,t){var e,n=_(r,"base","pow"),a=_(t,"exp","pow");e=Re(n,a),n=e[0],a=e[1];var o=de(n.shape,a.shape),i=[n,a];return N.runKernelFunc(function(s,u){var c=s.pow(n,a);return u([n,a,c]),c},{a:n,b:a},function(s,u){var c=u[0],l=u[1],h=u[2];return{a:function(){var d=l.toFloat(),f=s.mul(d.mul(c.pow(d.sub(q(1))))),p=Be(c.shape,o);return p.length>0&&(f=f.sum(p)),f.reshape(c.shape)},b:function(){var d=c.greater(0),f=c.log().where(d,me(c)),p=s.mul(h.mul(f)),g=Be(l.shape,o);return g.length>0&&(p=p.sum(g)),p.reshape(l.shape)}}},"Pow",{},i,[!0])}}),Bv=D({powStrict_:function(r,t){return xe(r.shape,t.shape,"Error in powStrict: "),r.pow(t)}}),Lv=D({squaredDifferenceStrict_:function(r,t){var e=_(r,"a","squaredDifferenceStrict"),n=_(t,"b","squaredDifferenceStrict");return xe(e.shape,n.shape,"Error in squaredDifferenceStrict: "),e.squaredDifference(n)}}),Le=D({sub_:function(r,t){var e,n=_(r,"a","sub"),a=_(t,"b","sub");e=Re(n,a),n=e[0],a=e[1];var o=de(n.shape,a.shape);return N.runKernelFunc(function(i){return i.subtract(n,a)},{a:n,b:a},function(i){return{a:function(){var s=i,u=Be(n.shape,o);return u.length>0&&(s=s.sum(u)),s.reshape(n.shape)},b:function(){var s=i,u=Be(a.shape,o);return u.length>0&&(s=s.sum(u)),s.neg().reshape(a.shape)}}},"Sub")}}),Wv=D({subStrict_:function(r,t){var e=_(r,"a","subStrict"),n=_(t,"b","subStrict");return xe(e.shape,n.shape,"Error in subStrict: "),e.sub(n)}}),xc=D({equal_:function(r,t){var e,n=_(r,"a","equal"),a=_(t,"b","equal");return e=Re(n,a),n=e[0],a=e[1],de(n.shape,a.shape),N.runKernelFunc(function(o){return o.equal(n,a)},{$a:n,$b:a})}}),zv=D({equalStrict_:function(r,t){var e=_(r,"a","equalStrict"),n=_(t,"b","equalStrict");return xe(e.shape,n.shape,"Error in equalStrict: "),e.equal(n)}}),Uv=D({greater_:function(r,t){var e,n=_(r,"a","greater"),a=_(t,"b","greater");return e=Re(n,a),n=e[0],a=e[1],de(n.shape,a.shape),N.runKernelFunc(function(o){return o.greater(n,a)},{a:n,b:a},null,"Greater")}}),wc=D({greaterEqual_:function(r,t){var e,n=_(r,"a","greaterEqual"),a=_(t,"b","greaterEqual");return e=Re(n,a),n=e[0],a=e[1],de(n.shape,a.shape),N.runKernelFunc(function(o,i){var s=o.greaterEqual(n,a);return i([n,a]),s},{a:n,b:a},function(o,i){var s=i[0],u=i[1];return{a:function(){return me(s)},b:function(){return me(u)}}},"GreaterEqual")}}),Vv=D({greaterEqualStrict_:function(r,t){var e=_(r,"a","greaterEqualStrict"),n=_(t,"b","greaterEqualStrict");return xe(e.shape,n.shape,"Error in greaterEqualStrict: "),e.greaterEqual(n)}}),Gv=D({greaterStrict_:function(r,t){var e=_(r,"a","greaterStrict"),n=_(t,"b","greaterStrict");return xe(e.shape,n.shape,"Error in greaterStrict: "),e.greater(n)}}),Hv=D({less_:function(r,t){var e,n=_(r,"a","less"),a=_(t,"b","less");return e=Re(n,a),n=e[0],a=e[1],de(n.shape,a.shape),N.runKernelFunc(function(o){return o.less(n,a)},{a:n,b:a},null,"Less")}}),jv=D({lessEqual_:function(r,t){var e,n=_(r,"a","lessEqual"),a=_(t,"b","lessEqual");return e=Re(n,a),n=e[0],a=e[1],de(n.shape,a.shape),N.runKernelFunc(function(o,i){var s=o.lessEqual(n,a);return i([n,a]),s},{a:n,b:a},null,"LessEqual")}}),qv=D({lessEqualStrict_:function(r,t){var e=_(r,"a","lessEqualStrict"),n=_(t,"b","lessEqualStrict");return xe(e.shape,n.shape,"Error in lessEqualStrict: "),e.lessEqual(n)}}),Kv=D({lessStrict_:function(r,t){var e=_(r,"a","lessStrict"),n=_(t,"b","lessStrict");return xe(e.shape,n.shape,"Error in lessStrict: "),e.less(n)}}),Xv=D({notEqual_:function(r,t){var e,n=_(r,"a","notEqual"),a=_(t,"b","notEqual");return e=Re(n,a),n=e[0],a=e[1],de(n.shape,a.shape),N.runKernelFunc(function(o){return o.notEqual(n,a)},{a:n,b:a},null,"NotEqual")}}),Yv=D({notEqualStrict_:function(r,t){var e=_(r,"a","notEqualStrict"),n=_(t,"b","notEqualStrict");return xe(e.shape,n.shape,"Error in notEqualStrict: "),e.notEqual(n)}});function Us(r,t){for(var e=[],n=r;n<t;++n)e.push(n);return e}function Vs(r){for(var t=[],e=0;e<r.length;++e)for(var n=0;n<r[e].length;++n)t.push(r[e][n]);return t}var yi=D({gather_:function(r,t,e){e===void 0&&(e=0);var n=_(r,"x","gather"),a=_(t,"indices","gather","int32");e=We(e,n.shape)[0];var o=function(i,s,u){for(var c=i.shape[u],l=[],h=1,d=1,f=0;f<u;f++)l.push(i.shape[f]),h*=i.shape[f];for(f=0;f<s.rank;f++)l.push(s.shape[f]);for(f=u+1;f<i.rank;f++)l.push(i.shape[f]),d*=i.shape[f];return{batchSize:h,sliceSize:d,dimSize:c,outputShape:l}}(n,a,e);return N.runKernelFunc(function(i,s){var u=i.gather(n,a.flatten(),e);return s([a]),u},{x:n,indices:a},function(i,s){var u=s[0];return{x:function(){var c=n.shape,l=u.size,h=c.slice(0,e),d=h.length,f=c.slice(e,c.length).slice(1),p=f.length,g=Us(0,d),v=Us(d+1,d+1+p),m=Vs([h,[l],f]),b=i.reshape(m),x=u.reshape([l]),y=Vs([[d],g,v]),w=b.transpose(y),C=Cc(w,x,n.shape[e]),R=ai(y);return C=C.transpose(R)},indices:function(){return u}}},"Gather",{axis:e}).reshape(o.outputShape)}}),Cc=D({unsortedSegmentSum_:function(r,t,e){var n=_(r,"x","unsortedSegmentSum"),a=_(t,"segmentIds","unsortedSegmentSum","int32");return E(Te(e),function(){return"numSegments must be of dtype int"}),N.runKernelFunc(function(o,i){var s=o.unsortedSegmentSum(n,a,e);return i([a]),s},{$x:n},function(o,i){var s=i[0];return{$x:function(){return function(u,c){for(var l=mi(c,me(c)),h=yi(u,l),d=wc(c,q(0,"int32")),f=h.rank-d.rank,p=0;p<f;++p)d=vt(d,p+1);d=Na(d,ur(h.shape,"bool"));var g=me(h);return Nn(d,h,g)}(o,s)}}})}}),$v=function(r,t,e){return Y(this,void 0,void 0,function(){var n,a,o,i,s,u,c,l,h,d,f,p,g;return $(this,function(v){switch(v.label){case 0:for(n=_(r,"tensor","boolMask"),a=_(t,"mask","boolMask","bool"),o=e??0,i=a.rank,s=n.shape,E(i>0,function(){return"mask cannot be scalar"}),xe(s.slice(o,o+i),a.shape,"mask's shape must match the first K dimensions of tensor's shape,"),u=1,c=o;c<o+i;c++)u*=s[c];return l=s.slice(0,o).concat([u],s.slice(o+i)),h=n.reshape(l),d=a.reshape([-1]),[4,mc(d)];case 1:return f=v.sent(),p=f.squeeze([1]),g=yi(h,p,o),r!==n&&n.dispose(),t!==a&&a.dispose(),p.dispose(),h.dispose(),d.dispose(),f.dispose(),[2,g]}})})};function _c(r,t,e,n,a,o,i){o===void 0&&(o="NHWC"),E(r.length===t.rank,function(){return"Length of inShape ("+r.length+") and rank of dy ("+t.rank+") must match"});var s=r,u=t,c=!1;t.rank===3&&(c=!0,u=t.as4D(1,t.shape[0],t.shape[1],t.shape[2]),s=[1,r[0],r[1],r[2]]),E(s.length===4,function(){return"Error in conv2dDerInput: inShape must be length 4, but got length "+s.length+"."}),E(u.rank===4,function(){return"Error in conv2dDerInput: dy must be rank 4, but got rank "+u.rank}),E(e.rank===4,function(){return"Error in conv2dDerInput: filter must be rank 4, but got rank "+e.rank});var l=o==="NHWC"?s[3]:s[1],h=o==="NHWC"?u.shape[3]:u.shape[1];E(l===e.shape[2],function(){return"Error in conv2dDerInput: depth of input ("+l+") must match input depth for filter "+e.shape[2]+"."}),E(h===e.shape[3],function(){return"Error in conv2dDerInput: depth of output ("+h+") must match output depth for filter "+e.shape[3]+"."}),i!=null&&E(Te(a),function(){return"Error in conv2dDerInput: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+a+"."});var d=ci(o),f=On(s,e.shape,n,1,a,i,!1,d),p=N.runKernelFunc(function(g,v){var m=g.conv2dDerInput(u,e,f);return v([e,u]),m},{dy4D:u,filter:e},function(g,v){var m=v[0],b=v[1];return{dy4D:function(){return xt(g,m,n,a,o,1,i)},filter:function(){return bi(g,b,m.shape,n,a,o,i)}}});return c?p.as3D(p.shape[1],p.shape[2],p.shape[3]):p}function vo(r){var t=function(o){return typeof o=="number"?[o,o,o]:o.length===2?[o[0],o[1],1]:o}(r),e=t[0],n=t[1],a=t[2];return e===1&&n===1&&a===1}function Ec(r,t,e,n,a){E(r.length===t.rank,function(){return"Length of inShape ("+r.length+") and rank of dy ("+t.rank+") must match"});var o=r,i=t,s=!1;t.rank===4&&(s=!0,i=t.as5D(1,t.shape[0],t.shape[1],t.shape[2],t.shape[3]),o=[1,r[0],r[1],r[2],r[3]]);var u=o[4],c=i.shape[4];E(o.length===5,function(){return"Error in conv3dDerInput: inShape must be length 5, but got length "+o.length+"."}),E(i.rank===5,function(){return"Error in conv3dDerInput: dy must be rank 5, but got rank "+i.rank}),E(e.rank===5,function(){return"Error in conv3dDerInput: filter must be rank 5, but got rank "+e.rank}),E(u===e.shape[3],function(){return"Error in conv3dDerInput: depth of input ("+u+") must match input depth for filter "+e.shape[3]+"."}),E(c===e.shape[4],function(){return"Error in conv3dDerInput: depth of output ("+c+") must match output depth for filter "+e.shape[4]+"."});var l=ga(o,e.shape,n,1,a),h=N.runKernelFunc(function(d){return d.conv3dDerInput(i,e,l)},{dy5D:i});return s?h.as4D(h.shape[1],h.shape[2],h.shape[3],h.shape[4]):h}var Zv=D({conv1d_:function(r,t,e,n,a,o,i){a===void 0&&(a="NWC"),o===void 0&&(o=1);var s=_(r,"x","conv1d"),u=_(t,"filter","conv1d"),c=s,l=!1;s.rank===2&&(l=!0,c=s.as3D(1,s.shape[0],s.shape[1])),E(c.rank===3,function(){return"Error in conv1d: input must be rank 3, but got rank "+c.rank+"."}),E(u.rank===3,function(){return"Error in conv1d: filter must be rank 3, but got rank "+u.rank+"."}),i!=null&&E(Te(n),function(){return"Error in conv1d: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+n+"."}),E(c.shape[2]===u.shape[1],function(){return"Error in conv1d: depth of input ("+c.shape[2]+") must match input depth for filter "+u.shape[1]+"."}),E(ot(e,o),function(){return"Error in conv1D: Either stride or dilation must be 1. Got stride "+e+" and dilation '"+o+"'"}),E(a==="NWC",function(){return"Error in conv1d: got dataFormat of "+a+" but only NWC is currently supported."});var h=u.as4D(1,u.shape[0],u.shape[1],u.shape[2]),d=c.as4D(c.shape[0],1,c.shape[1],c.shape[2]),f=xt(d,h,[1,e],n,"NHWC",[1,o],i);return l?f.as2D(f.shape[2],f.shape[3]):f.as3D(f.shape[0],f.shape[2],f.shape[3])}}),xt=D({conv2d_:function(r,t,e,n,a,o,i){a===void 0&&(a="NHWC"),o===void 0&&(o=[1,1]);var s=_(r,"x","conv2d"),u=_(t,"filter","conv2d"),c=s,l=!1;s.rank===3&&(l=!0,c=s.as4D(1,s.shape[0],s.shape[1],s.shape[2])),E(c.rank===4,function(){return"Error in conv2d: input must be rank 4, but got rank "+c.rank+"."}),E(u.rank===4,function(){return"Error in conv2d: filter must be rank 4, but got rank "+u.rank+"."}),i!=null&&E(Te(n),function(){return"Error in conv2d: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+n+"."});var h=a==="NHWC"?c.shape[3]:c.shape[1];E(h===u.shape[2],function(){return"Error in conv2d: depth of input ("+h+") must match input depth for filter "+u.shape[2]+"."}),E(ot(e,o),function(){return"Error in conv2D: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+o+"'"});var d=ci(a),f=On(c.shape,u.shape,e,o,n,i,!1,d),p=[u,c],g=N.runKernelFunc(function(v,m){var b=v.conv2d(c,u,f);return m([u,c]),b},{x:c,filter:u},function(v,m){var b=m,x=b[0],y=b[1];return E(or(o),function(){return"Error in gradient of conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '"+o+"'"}),{x:function(){return Ic(y.shape,v,x,e,n,a)},filter:function(){return bi(y,v,x.shape,e,n,a)}}},"Conv2D",f,p);return l?g.as3D(g.shape[1],g.shape[2],g.shape[3]):g}}),Jv=D({conv3d_:function(r,t,e,n,a,o){a===void 0&&(a="NDHWC"),o===void 0&&(o=[1,1,1]);var i=_(r,"x","conv3d"),s=_(t,"filter","conv3d"),u=i,c=!1;i.rank===4&&(c=!0,u=i.as5D(1,i.shape[0],i.shape[1],i.shape[2],i.shape[3])),E(u.rank===5,function(){return"Error in conv3d: input must be rank 5, but got rank "+u.rank+"."}),E(s.rank===5,function(){return"Error in conv3d: filter must be rank 5, but got rank "+s.rank+"."}),E(u.shape[4]===s.shape[3],function(){return"Error in conv3d: depth of input ("+u.shape[4]+") must match input depth for filter "+s.shape[3]+"."}),E(function(d,f){return vo(d)||vo(f)}(e,o),function(){return"Error in conv3D: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+o+"'"}),E(a==="NDHWC",function(){return"Error in conv3d: got dataFormat of "+a+" but only NDHWC is currently supported."});var l=ga(u.shape,s.shape,e,o,n),h=N.runKernelFunc(function(d,f){var p=d.conv3d(u,s,l);return f([u,s]),p},{x:u,$filter:s},function(d,f){E(vo(o),function(){return"Error in gradient of conv3D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '"+o+"'"});var p=f[0],g=f[1];return{x:function(){return Ec(p.shape,d,g,e,n)},$filter:function(){return function(v,m,b,x,y){var w=v;v.rank===4&&(w=v.as5D(1,v.shape[0],v.shape[1],v.shape[2],v.shape[3]));var C=m;C.rank===4&&(C=m.as5D(1,m.shape[0],m.shape[1],m.shape[2],m.shape[3])),E(w.rank===5,function(){return"Error in conv3dDerFilter: input must be rank 5, but got shape "+w.shape+"."}),E(C.rank===5,function(){return"Error in conv3dDerFilter: dy must be rank 5, but got shape "+C.shape+"."}),E(b.length===5,function(){return"Error in conv3dDerFilter: filterShape must be length 5, but got "+b+"."}),E(w.shape[4]===b[3],function(){return"Error in conv3dDerFilter: depth of input "+w.shape[4]+") must match input depth in filter ("+b[3]+"."}),E(C.shape[4]===b[4],function(){return"Error in conv3dDerFilter: depth of dy ("+C.shape[4]+") must match output depth for filter ("+b[4]+")."});var R=ga(w.shape,b,x,1,y);return N.runKernelFunc(function(S){return S.conv3dDerFilter(w,C,R)},{x5D:w,dy5D:C})}(p,d,g.shape,e,n)}}});return c?h.as4D(h.shape[1],h.shape[2],h.shape[3],h.shape[4]):h}}),bi=D({conv2dDerFilter_:function(r,t,e,n,a,o,i){o===void 0&&(o="NHWC");var s=r;r.rank===3&&(s=r.as4D(1,r.shape[0],r.shape[1],r.shape[2]));var u=t;u.rank===3&&(u=t.as4D(1,t.shape[0],t.shape[1],t.shape[2])),E(s.rank===4,function(){return"Error in conv2dDerFilter: input must be rank 4, but got shape "+s.shape+"."}),E(u.rank===4,function(){return"Error in conv2dDerFilter: dy must be rank 4, but got shape "+u.shape+"."}),E(e.length===4,function(){return"Error in conv2dDerFilter: filterShape must be length 4, but got "+e+"."});var c=o==="NHWC"?s.shape[3]:s.shape[1],l=o==="NHWC"?u.shape[3]:u.shape[1];E(c===e[2],function(){return"Error in conv2dDerFilter: depth of input "+c+") must match input depth in filter ("+e[2]+"."}),E(l===e[3],function(){return"Error in conv2dDerFilter: depth of dy ("+l+") must match output depth for filter ("+e[3]+")."}),i!=null&&E(Te(a),function(){return"Error in conv2dDerFilter: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+a+"."});var h=ci(o),d=On(s.shape,e,n,1,a,i,!1,h);return N.runKernelFunc(function(f){return f.conv2dDerFilter(s,u,d)},{x4D:s,dy4D:u})}}),Ic=D({conv2dDerInput_:_c}),Fa=D({depthwiseConv2d_:function(r,t,e,n,a,o,i){o===void 0&&(o=[1,1]);var s=_(r,"x","depthwiseConv2d"),u=_(t,"filter","depthwiseConv2d"),c=s,l=!1;s.rank===3&&(l=!0,c=s.as4D(1,s.shape[0],s.shape[1],s.shape[2])),E(c.rank===4,function(){return"Error in depthwiseConv2d: input must be rank 4, but got rank "+c.rank+"."}),E(u.rank===4,function(){return"Error in depthwiseConv2d: filter must be rank 4, but got rank "+u.rank+"."}),E(c.shape[3]===u.shape[2],function(){return"Error in depthwiseConv2d: number of input channels ("+c.shape[3]+") must match the inChannels dimension in filter "+u.shape[2]+"."}),o==null&&(o=[1,1]),E(ot(e,o),function(){return"Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+o+"'"}),i!=null&&E(Te(n),function(){return"Error in depthwiseConv2d: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+n+"."});var h=On(c.shape,u.shape,e,o,n,i,!0),d=[c,u],f=N.runKernelFunc(function(p,g){var v=p.depthwiseConv2D(c,u,h);return g([c,u]),v},{x:c,filter:u},function(p,g){E(or(o),function(){return"Error in gradient of depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '"+o+"'"});var v=g[0],m=g[1];return{x:function(){return kc(v.shape,p,m,h)},filter:function(){return Sc(v,p,m.shape,h)}}},"DepthwiseConv2dNative",h,d);return l?f.as3D(f.shape[1],f.shape[2],f.shape[3]):f}}),kc=D({depthwiseConv2dDerInput_:function(r,t,e,n){var a=t,o=!1;t.rank===3&&(o=!0,a=t.as4D(1,t.shape[0],t.shape[1],t.shape[2]));var i=N.runKernelFunc(function(s){return s.depthwiseConv2DDerInput(a,e,n)},{dy4D:a});return o?i.as3D(i.shape[1],i.shape[2],i.shape[3]):i}}),Sc=D({depthwiseConv2dDerFilter_:function(r,t,e,n){var a=r;r.rank===3&&(a=r.as4D(1,r.shape[0],r.shape[1],r.shape[2]));var o=t;return o.rank===3&&(o=t.as4D(1,t.shape[0],t.shape[1],t.shape[2])),N.runKernelFunc(function(i){return i.depthwiseConv2DDerFilter(a,o,n)},{x4D:a,dy4D:o})}}),xi=D({separableConv2d_:function(r,t,e,n,a,o,i){o===void 0&&(o=[1,1]),i===void 0&&(i="NHWC");var s=_(r,"x","separableConv2d"),u=_(t,"depthwiseFilter","separableConv2d"),c=_(e,"pointwiseFilter","separableConv2d"),l=s,h=!1;if(s.rank===3&&(h=!0,l=s.as4D(1,s.shape[0],s.shape[1],s.shape[2])),i==="NCHW")throw new Error("separableConv2d currently does not support dataFormat NCHW; only NHWC is supported");E(l.rank===4,function(){return"Error in separableConv2d: input must be rank 4, but got rank "+l.rank+"."}),E(u.rank===4,function(){return"Error in separableConv2d: depthwise filter must be rank 4, but got rank "+u.rank+"."}),E(c.rank===4,function(){return"Error in separableConv2d: pointwise filter must be rank 4, but got rank "+u.rank+"."}),E(c.shape[0]===1,function(){return"Error in separableConv2d: the first dimension of pointwise filter  must be 1, but got "+c.shape[0]+"."}),E(c.shape[1]===1,function(){return"Error in separableConv2d: the second dimension of pointwise filter must be 1, but got "+c.shape[1]+"."});var d=u.shape[2],f=u.shape[3];E(c.shape[2]===d*f,function(){return"Error in separableConv2d: the third dimension of pointwise filter must be "+d*f+", but got "+c.shape[2]+"."});var p=Fa(l,u,n,a,i,o),g=xt(p,c,1,"valid",i);return h?g.as3D(g.shape[1],g.shape[2],g.shape[3]):g}}),Qv=D({conv2dTranspose_:function(r,t,e,n,a,o){return _c(e,_(r,"x","conv2dTranspose"),_(t,"filter","conv2dTranspose"),n,a,"NHWC",o)}}),eg=D({conv3dTranspose_:function(r,t,e,n,a){return Ec(e,_(r,"x","conv3dTranspose"),_(t,"filter","conv3dTranspose"),n,a)}}),Pa=D({matMul_:function(r,t,e,n){var a;e===void 0&&(e=!1),n===void 0&&(n=!1);var o=_(r,"a","matMul"),i=_(t,"b","matMul");a=Re(o,i),o=a[0],i=a[1];var s=e?o.shape[o.rank-2]:o.shape[o.rank-1],u=n?i.shape[i.rank-1]:i.shape[i.rank-2],c=e?o.shape[o.rank-1]:o.shape[o.rank-2],l=n?i.shape[i.rank-2]:i.shape[i.rank-1],h=o.shape.slice(0,-2),d=i.shape.slice(0,-2),f=Z(h),p=Z(d);E(o.rank>=2&&i.rank>=2&&o.rank===i.rank,function(){return"Error in matMul: inputs must have the same rank of at least 2, got ranks "+o.rank+" and "+i.rank+"."}),E(Ve(h,d),function(){return"Error in matMul: outer dimensions ("+h+") and ("+d+") of Tensors with shapes "+o.shape+" and "+i.shape+" must match."}),E(s===u,function(){return"Error in matMul: inner shapes ("+s+") and ("+u+") of Tensors with shapes "+o.shape+" and "+i.shape+" and transposeA="+e+" and transposeB="+n+" must match."});var g=o.shape.slice(0,-2).concat([c,l]),v=e?o.as3D(f,s,c):o.as3D(f,c,s),m=n?i.as3D(p,l,u):i.as3D(p,u,l),b={transposeA:e,transposeB:n};return N.runKernelFunc(function(x,y){var w=x.batchMatMul(v,m,e,n);return y([v,m]),w},{a:v,b:m},function(x,y){var w=y,C=w[0],R=w[1];return e||n?!e&&n?{a:function(){return x.matMul(R,!1,!1)},b:function(){return x.matMul(C,!0,!1)}}:e&&!n?{a:function(){return R.matMul(x,!1,!0)},b:function(){return C.matMul(x,!1,!1)}}:{a:function(){return R.matMul(x,!0,!0)},b:function(){return x.matMul(C,!0,!0)}}:{a:function(){return x.matMul(R,!1,!0)},b:function(){return C.matMul(x,!0,!1)}}},"BatchMatMul",b).reshape(g)}}),tg=D({dot_:function(r,t){var e=_(r,"t1","dot"),n=_(t,"t2","dot");E(!(e.rank!==1&&e.rank!==2||n.rank!==1&&n.rank!==2),function(){return"Error in dot: inputs must all be rank 1 or 2, but got ranks "+e.rank+" and "+n.rank+"."});var a=e.rank===1?e.size:e.shape[1],o=n.rank===1?n.size:n.shape[0];return E(a===o,function(){return"Error in dot: inner dimensions of inputs must match, but got "+a+" and "+o+"."}),e.rank===1&&n.rank===1?e.as2D(1,-1).matMul(n.as2D(-1,1)).asScalar():e.rank===1&&n.rank===2?e.as2D(1,-1).matMul(n.as2D(n.shape[0],n.shape[1])).as1D():e.rank===2&&n.rank===1?e.matMul(n.as2D(-1,1)).as1D():e.matMul(n.as2D(n.shape[0],n.shape[1]))}}),ng=D({outerProduct_:function(r,t){var e=_(r,"v1","outerProduct"),n=_(t,"v2","outerProduct");return E(e.rank===1&&n.rank===1,function(){return"Error in outerProduct: inputs must be rank 1, but got ranks "+e.rank+" and "+n.rank+"."}),e.as2D(-1,1).matMul(n.as2D(1,-1))}}),Or=D({reverse_:function(r,t){var e=_(r,"x","reverse");if(e.rank===0)return e.clone();var n=We(t,e.shape);return N.runKernelFunc(function(a){return a.reverse(e,n)},{$x:e},function(a){return{$x:function(){return a.reverse(n)}}}).reshapeAs(e)}}),rg=D({reverse1d_:function(r){var t=_(r,"x","reverse");return E(t.rank===1,function(){return"Error in reverse1D: x must be rank 1 but got rank "+t.rank+"."}),Or(t,0)}}),ag=D({reverse2d_:function(r,t){var e=_(r,"x","reverse");return E(e.rank===2,function(){return"Error in reverse2D: x must be rank 2 but got rank "+e.rank+"."}),Or(e,t)}}),og=D({reverse3d_:function(r,t){var e=_(r,"x","reverse");return E(e.rank===3,function(){return"Error in reverse3D: x must be rank 3 but got rank "+e.rank+"."}),Or(e,t)}}),ig=D({reverse4d_:function(r,t){var e=_(r,"x","reverse");return E(e.rank===4,function(){return"Error in reverse4D: x must be rank 4 but got rank "+e.rank+"."}),Or(e,t)}});function Rc(r,t,e,n,a,o){var i=_(r,"x","maxPool"),s=i,u=!1;i.rank===3&&(u=!0,s=i.as4D(1,i.shape[0],i.shape[1],i.shape[2])),n==null&&(n=[1,1]),E(s.rank===4,function(){return"Error in maxPool: input must be rank 4 but got rank "+s.rank+"."}),E(ot(e,n),function(){return"Error in maxPool: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+n+"'"}),o!=null&&E(Te(a),function(){return"Error in maxPool: pad must be an integer when using, dimRoundingMode "+o+" but got pad "+a+"."});var c=Cr(s.shape,t,e,n,a,o);if(c.filterWidth===1&&c.filterHeight===1&&Ve(c.inShape,c.outShape))return i.clone();var l=[s],h=N.runKernelFunc(function(d,f){var p=d.maxPool(s,c);return f([s,p]),p},{x:s},function(d,f){var p=f[0],g=f[1];return{x:function(){return function(v,m,b,x,y,w,C,R){var S=_(v,"dy","maxPoolBackprop"),I=_(m,"input","maxPoolBackprop"),k=_(b,"output","maxPoolBackprop");E(I.rank===S.rank,function(){return"Rank of input ("+I.rank+") does not match rank of dy ("+S.rank+")"}),w==null&&(w=[1,1]),E(ot(y,w),function(){return"Error in maxPoolBackProp: Either strides or dilations must be 1. Got strides "+y+" and dilations '"+w+"'"}),E(S.rank===4,function(){return"Error in maxPoolBackprop: dy must be rank 4 but got rank "+S.rank+"."}),E(I.rank===4,function(){return"Error in maxPoolBackprop: input must be rank 4 but got rank "+I.rank+"."}),R!=null&&E(Te(C),function(){return"Error in maxPoolBackprop: pad must be an integer when using, dimRoundingMode "+R+" but got pad "+C+"."});var F=Cr(I.shape,x,y,w,C,R);return N.runKernelFunc(function(T){return T.maxPoolBackprop(S,I,k,F)},{$dy:S,$input:I})}(d,p,g,t,e,n,a)}}},"MaxPool",c,l);return u?h.as3D(h.shape[1],h.shape[2],h.shape[3]):h}function Ac(r,t,e,n,a,o){var i=_(r,"x","avgPool","float32");n==null&&(n=[1,1]),E(ot(e,n),function(){return"Error in avgPool: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+n+"'"});var s=i,u=!1;i.rank===3&&(u=!0,s=i.as4D(1,i.shape[0],i.shape[1],i.shape[2])),E(s.rank===4,function(){return"Error in avgPool: x must be rank 4 but got rank "+s.rank+"."}),o!=null&&E(Te(a),function(){return"Error in avgPool: pad must be an integer when using, dimRoundingMode "+o+" but got pad "+a+"."});var c=Cr(s.shape,t,e,n,a,o);if(c.filterWidth===1&&c.filterHeight===1&&Ve(c.inShape,c.outShape))return i.clone();var l=N.runKernelFunc(function(h){return h.avgPool(s,c)},{x:s},function(h){return{x:function(){return function(d,f,p,g,v,m){var b=_(d,"dy","avgPoolBackprop"),x=_(f,"input","avgPoolBackprop");E(x.rank===b.rank,function(){return"Rank of input ("+x.rank+") does not match rank of dy ("+b.rank+")"}),v==null&&(v=[1,1]),E(ot(g,v),function(){return"Error in avgPoolBackprop: Either strides or dilations must be 1. Got strides "+g+" and dilations '"+v+"'"});var y=x,w=b,C=!1;x.rank===3&&(C=!0,y=x.as4D(1,x.shape[0],x.shape[1],x.shape[2]),w=b.as4D(1,b.shape[0],b.shape[1],b.shape[2])),E(w.rank===4,function(){return"Error in avgPoolBackprop: dy must be rank 4 but got rank "+w.rank+"."}),E(y.rank===4,function(){return"Error in avgPoolBackprop: input must be rank 4 but got rank "+y.rank+"."});var R=Cr(y.shape,p,g,v,m),S=N.runKernelFunc(function(I){return I.avgPoolBackprop(w,y,R)},{dy4D:w,input4D:y});return C?S.as3D(S.shape[1],S.shape[2],S.shape[3]):S}(h,s,t,e,n,a)}}},"AvgPool",c);return l=l.cast(i.dtype),u?l.as3D(l.shape[1],l.shape[2],l.shape[3]):l}var ze=D({maxPool_:function(r,t,e,n,a){return Rc(r,t,e,1,n,a)}}),Br=D({avgPool_:function(r,t,e,n,a){return Ac(r,t,e,1,n,a)}}),sg=D({pool_:function(r,t,e,n,a,o){a==null&&(a=[1,1]),o==null&&(o=1),n===0&&(n="valid");var i=_(r,"x","maxPool"),s=i,u=!1;i.rank===3&&(u=!0,s=i.as4D(1,i.shape[0],i.shape[1],i.shape[2])),E(ot(o,a),function(){return"Error in pool: Either strides or dilations must be 1. Got strides "+o+" and dilations '"+a+"'"});var c,l=Cr(s.shape,t,o,a,n),h=[l.dilationHeight,l.dilationWidth];c=n==="same"?function(y,w){var C=y.map(function(I,k){return I+(I-1)*(w[k]-1)}).map(function(I){return I-1}),R=C.map(function(I){return Math.floor(I/2)}),S=C.map(function(I,k){return I-R[k]});return C.map(function(I,k){return[R[k],S[k]]})}([l.filterHeight,l.filterWidth],h):[[0,0],[0,0]];var d=h[0]===1&&h[1]===1,f=function(y,w,C){var R=C.map(function(B){return B[0]}),S=C.map(function(B){return B[1]}),I=y.concat(R,S),k=w.map(function(B,L){return(B-I[L]%B)%B}),F=S.map(function(B,L){return B+k[L]}),T=w.map(function(B,L){return[R[L],F[L]]}),W=w.map(function(B,L){return[0,k[L]]});return[T,W]}([l.inHeight,l.inWidth],h,c),p=f[0],g=f[1],v=d?n:"valid",m=d?s:Mu(s,h,p),b=(e==="avg"?function(){return Ac(m,t,o,1,v)}:function(){return Rc(m,t,o,1,v)})(),x=d?b:Nu(b,h,g);return u?x.as3D(x.shape[1],x.shape[2],x.shape[3]):x}}),ug=D({maxPool3d_:function(r,t,e,n,a,o,i){o===void 0&&(o="NDHWC");var s=_(r,"x","maxPool3d"),u=s,c=!1;s.rank===4&&(c=!0,u=s.as5D(1,s.shape[0],s.shape[1],s.shape[2],s.shape[3])),i==null&&(i=[1,1,1]),E(u.rank===5,function(){return"Error in maxPool3d: x must be rank 5 but got rank "+u.rank+"."}),E(o==="NDHWC",function(){return"Error in maxPool3d: Only NDHWC is currently supported, but got dataFormat of "+o}),E(ot(e,i),function(){return"Error in maxPool3d: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+i+"'"}),a!=null&&E(Te(n),function(){return"Error in maxPool3d: pad must be an integer when using, dimRoundingMode "+a+" but got pad "+n+"."});var l=va(u.shape,t,e,i,n,a,o),h=N.runKernelFunc(function(d,f){var p=d.maxPool3d(u,l);return f([u,p]),p},{x:u},function(d,f){var p=f[0],g=f[1];return{x:function(){return function(v,m,b,x,y,w,C,R){var S=_(v,"dy","maxPool3dBackprop"),I=_(m,"input","maxPool3dBackprop"),k=_(b,"output","maxPool3dBackprop"),F=S,T=I,W=k,B=!1;I.rank===4&&(B=!0,F=S.as5D(1,S.shape[0],S.shape[1],S.shape[2],S.shape[3]),T=I.as5D(1,I.shape[0],I.shape[1],I.shape[2],I.shape[3]),W=k.as5D(1,k.shape[0],k.shape[1],k.shape[2],k.shape[3])),E(F.rank===5,function(){return"Error in maxPool3dBackprop: dy must be rank 5 but got rank "+F.rank+"."}),E(T.rank===5,function(){return"Error in maxPool3dBackprop: input must be rank 5 but got rank "+T.rank+"."}),E(W.rank===5,function(){return"Error in maxPool3dBackprop: output must be rank 5 but got rank "+W.rank+"."}),w==null&&(w=[1,1,1]),E(ot(y,w),function(){return"Error in maxPool3dBackprop: Either strides or dilations must be 1. Got strides "+y+" and dilations '"+w+"'"}),R!=null&&E(Te(C),function(){return"Error in maxPool3dBackprop: pad must be an integer when using, dimRoundingMode "+R+" but got pad "+C+"."});var L=va(T.shape,x,y,w,C,R),V=N.runKernelFunc(function(U){return U.maxPool3dBackprop(F,T,W,L)},{dy5D:F,input5D:T});return B?V.as4D(V.shape[1],V.shape[2],V.shape[3],V.shape[4]):V}(d,p,g,t,e,i,n,a)}}});return c?h.as4D(h.shape[1],h.shape[2],h.shape[3],h.shape[4]):h}}),cg=D({avgPool3d_:function(r,t,e,n,a,o,i){o===void 0&&(o="NDHWC");var s=_(r,"x","avgPool3d","float32"),u=s,c=!1;s.rank===4&&(c=!0,u=s.as5D(1,s.shape[0],s.shape[1],s.shape[2],s.shape[3])),i==null&&(i=[1,1,1]),E(u.rank===5,function(){return"Error in avgPool3d: x must be rank 5 but got rank "+u.rank+"."}),E(o==="NDHWC",function(){return"Error in avgPool3d: Only NDHWC is currently supported, but got dataFormat of "+o}),E(ot(e,i),function(){return"Error in avgPool3d: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+i+"'"}),a!=null&&E(Te(n),function(){return"Error in avgPool3d: pad must be an integer when using, dimRoundingMode "+a+" but got pad "+n+"."});var l=va(u.shape,t,e,i,n,a,o),h=N.runKernelFunc(function(d){return d.avgPool3d(u,l)},{x:u},function(d){return{x:function(){return function(f,p,g,v,m,b,x){var y=_(f,"dy","avgPool3dBackprop"),w=_(p,"input","avgPool3dBackprop"),C=y,R=w,S=!1;w.rank===4&&(S=!0,C=y.as5D(1,y.shape[0],y.shape[1],y.shape[2],y.shape[3]),R=w.as5D(1,w.shape[0],w.shape[1],w.shape[2],w.shape[3])),E(C.rank===5,function(){return"Error in avgPool3dBackprop: dy must be rank 5 but got rank "+C.rank+"."}),E(R.rank===5,function(){return"Error in avgPool3dBackprop: input must be rank 5 but got rank "+R.rank+"."}),m==null&&(m=[1,1,1]),E(ot(v,m),function(){return"Error in avgPool3dBackprop: Either strides or dilations must be 1. Got strides "+v+" and dilations '"+m+"'"}),x!=null&&E(Te(b),function(){return"Error in maxPool3dBackprop: pad must be an integer when using, dimRoundingMode "+x+" but got pad "+b+"."});var I=va(R.shape,g,v,m,b,x),k=N.runKernelFunc(function(F){return F.avgPool3dBackprop(C,R,I)},{dy5D:C,input5D:R});return S?k.as4D(k.shape[1],k.shape[2],k.shape[3],k.shape[4]):k}(d,u,t,e,i,n,a)}}});return h=h.cast(u.dtype),c?h.as4D(h.shape[1],h.shape[2],h.shape[3],h.shape[4]):h}}),Ut=D({slice_:function(r,t,e){var n,a,o=_(r,"x","slice");if(o.rank===0)throw new Error("Slicing scalar is not possible");(n=typeof t=="number"?[t].concat(new Array(o.rank-1).fill(0)):t.length<o.rank?t.concat(new Array(o.rank-t.length).fill(0)):t.slice()).forEach(function(u){E(u!==-1,function(){return"slice() does not support negative begin indexing."})}),a=(a=e==null?new Array(o.rank).fill(-1):typeof e=="number"?[e].concat(new Array(o.rank-1).fill(-1)):e.length<o.rank?e.concat(new Array(o.rank-e.length).fill(-1)):e).map(function(u,c){return u>=0?u:(E(u===-1,function(){return"Negative size values should be exactly -1 but got "+u+" for the slice() size at index "+c+"."}),o.shape[c]-n[c])}),Od(o,n,a);var i=o.shape,s={begin:n,size:a};return N.runKernelFunc(function(u){return u.slice(o,n,a)},{x:o},function(u){for(var c=[],l=0;l<u.rank;l++)c.push([n[l],i[l]-n[l]-a[l]]);return{x:function(){return u.pad(c)}}},"Slice",s)}}),lg=D({slice1d_:function(r,t,e){var n=_(r,"x","slice1d");return E(n.rank===1,function(){return"slice1d expects a rank-1 tensor, but got a rank-"+n.rank+" tensor"}),Ut(n,[t],[e])}}),hg=D({slice2d_:function(r,t,e){var n=_(r,"x","slice2d");return E(n.rank===2,function(){return"slice2d expects a rank-2 tensor, but got a rank-"+n.rank+" tensor"}),Ut(n,t,e)}}),Dc=D({slice3d_:function(r,t,e){var n=_(r,"x","slice3d");return E(n.rank===3,function(){return"slice3d expects a rank-3 tensor, but got a rank-"+n.rank+" tensor"}),Ut(n,t,e)}}),dg=D({slice4d_:function(r,t,e){var n=_(r,"x","slice4d");return E(n.rank===4,function(){return"slice4d expects a rank-4 tensor, but got a rank-"+n.rank+" tensor"}),Ut(n,t,e)}});function Tc(r,t,e,n,a){return t.rank<e.rank&&(t=t.reshape(at(t.shape,n))),r.rank<e.rank&&(r=r.reshape(at(r.shape,n))),{x:function(){var o=r.mul(e.equal(t).cast(r.dtype));return a==null?o:o.transpose(a)}}}var fg=D({all_:function(r,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var n=_(r,"x","all","bool"),a=We(t,n.shape),o=a,i=Gt(o,n.rank);i!=null&&(n=n.transpose(i),o=Ht(o.length,n.rank));var s=N.runKernelFunc(function(c){return c.all(n,o)},{$x:n});if(e){var u=at(s.shape,a);return s.reshape(u)}return s}}),pg=D({any_:function(r,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var n=_(r,"x","any","bool"),a=We(t,n.shape),o=a,i=Gt(o,n.rank);i!=null&&(n=n.transpose(i),o=Ht(o.length,n.rank));var s=N.runKernelFunc(function(c){return c.any(n,o)},{$x:n});if(e){var u=at(s.shape,a);return s.reshape(u)}return s}}),vg=D({argMax_:function(r,t){t===void 0&&(t=0);var e=_(r,"x","argMax");t==null&&(t=0);var n=We(t,e.shape),a=Gt(n,e.rank);a!=null&&(e=e.transpose(a),n=Ht(n.length,e.rank));var o={axis:n[0]},i=[e];return N.runKernelFunc(function(s,u){var c=s.argMax(e,n[0]);return u([e]),c},{x:e},function(s,u){var c=u[0];return{x:function(){return me(c)}}},"ArgMax",o,i)}}),gg=D({argMin_:function(r,t){t===void 0&&(t=0);var e=_(r,"x","argMin");t==null&&(t=0);var n=We(t,e.shape),a=Gt(n,e.rank);return a!=null&&(e=e.transpose(a),n=Ht(n.length,e.rank)),N.runKernelFunc(function(o,i){var s=o.argMin(e,n[0]);return i([e]),s},{$x:e},function(o,i){var s=i[0];return{$x:function(){return me(s)}}})}}),mg=D({logSumExp_:function(r,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var n=_(r,"x","logSumExp"),a=We(t,n.shape),o=n.max(a,!0),i=n.sub(o).exp().sum(a).log(),s=o.reshape(i.shape).add(i);if(e){var u=at(s.shape,a);return s.reshape(u)}return s}}),Ma=D({max_:function(r,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var n=_(r,"x","max"),a=n,o=We(t,n.shape),i=o,s=Gt(i,n.rank);s!=null&&(n=n.transpose(s),i=Ht(i.length,n.rank));var u=[n],c=N.runKernelFunc(function(h,d){var f=h.max(n,i);return d([a,f]),f},{x:n},function(h,d){return Tc(h,d[1],d[0],o,s)},"Max",{axes:i},u,[!0]);if(e){var l=at(c.shape,o);c=c.reshape(l)}return c}}),yg=D({mean_:function(r,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var n=_(r,"x","mean"),a=We(t,n.shape),o=Z(Ke(n.shape,a)[1]);return Da(function(i){var s=q(o);return{value:(s.dtype===i.dtype?i:i.cast(s.dtype)).div(s).sum(t,e),gradFunc:function(u){var c=i.shape.slice();return a.forEach(function(l){c[l]=1}),u.reshape(c).mul(ur(i.shape,"float32")).div(o)}}})(n)}}),bg=D({min_:function(r,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var n=_(r,"x","min"),a=n,o=We(t,n.shape),i=o,s=Gt(i,n.rank);s!=null&&(n=n.transpose(s),i=Ht(i.length,n.rank));var u=[n],c=N.runKernelFunc(function(h,d){var f=h.min(n,i);return d([a,f]),f},{x:n},function(h,d){return Tc(h,d[1],d[0],o,s)},"Min",{axes:i},u,[!0]);if(e){var l=at(c.shape,o);c=c.reshape(l)}return c}}),xg=D({moments_:function(r,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var n=We(t,(r=_(r,"x","moments")).shape),a=r.mean(n,e),o=a.shape;e||(o=at(a.shape,n));var i=r.toFloat().sub(a.reshape(o)).square();return{mean:a,variance:i.mean(n,e)}}}),Nc=D({sum_:function(r,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var n=_(r,"x","sum");n.dtype==="bool"&&(n=n.toInt());var a=We(t,n.shape);return Da(function(o){var i=Gt(a,o.rank),s=a,u=o;i!=null&&(u=o.transpose(i),s=Ht(s.length,o.rank));var c=function(f){var p=o.shape.slice();return a.forEach(function(g){p[g]=1}),f.reshape(p).mul(ur(o.shape,"float32"))},l={axes:s},h=N.runKernelFunc(function(f){return f.sum(u,s)},{x:u},function(f){return{x:function(){return c(f)}}},"Sum",l);if(e){var d=at(h.shape,a);h=h.reshape(d)}return{value:h,gradFunc:c}})(n)}}),wg=D({prod_:function(r,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var n=_(r,"x","prod");n.dtype==="bool"&&(n=n.toInt());var a=We(t,n.shape),o=Gt(a,n.rank),i=a,s=n;o!=null&&(s=n.transpose(o),i=Ht(i.length,n.rank));var u=N.runKernelFunc(function(l){return l.prod(s,i)},{permutedX:s});if(e){var c=at(u.shape,a);u=u.reshape(c)}return u}}),Fc=D({elu_:function(r){var t=_(r,"x","elu");return N.runKernelFunc(function(e,n){var a=e.elu(t);return n([a]),a},{$x:t},function(e,n){var a=n[0];return{$x:function(){return N.runKernelFunc(function(o){return o.eluDer(e,a)},{dy:e,y:a})}}})}}),Cg=D({leakyRelu_:function(r,t){t===void 0&&(t=.2);var e=_(r,"x","leakyRelu");return mi(q(t).mul(e),e)}}),Pc=D({prelu_:function(r,t){var e=_(r,"x","prelu"),n=_(t,"alpha","prelu");return N.runKernelFunc(function(a,o){var i=a.prelu(e,n);return o([e,n]),i},{x:e,alpha:n},function(a,o){var i=o[0],s=o[1],u=i.greater(0);return{x:function(){return Nn(u,a,a.mul(s))},alpha:function(){var c=Nn(u,me(a),a.mul(i)),l=Be(s.shape,a.shape);return l.length>0&&(c=c.sum(l)),c.reshape(s.shape)}}},"Prelu")}}),Se=D({relu_:function(r){var t=_(r,"x","relu");return t.dtype==="bool"?t.toInt():N.runKernelFunc(function(e,n){var a=e.relu(t);return n([t]),a},{x:t},function(e,n){var a=n[0];return{x:function(){return e.mulStrict(a.step().toFloat())}}},"Relu")}}),Mc=D({relu6_:function(r){var t=_(r,"x","relu6");return t.dtype==="bool"?t.toInt():N.runKernelFunc(function(e,n){var a=e.relu6(t);return n([t]),a},{x:t},function(e,n){var a=n[0],o=a.lessEqual(6).mul(a.step());return{x:function(){return e.mulStrict(o.toFloat())}}},"Relu6")}}),_g=D({selu_:function(r){var t=_(r,"x","selu");return N.runKernelFunc(function(e,n){var a=e.selu(t);return n([t]),a},{$x:t},function(e,n){var a=n[0];return{$x:function(){var o=a.greater(q(0)),i=q(pi),s=q(vi),u=e.mul(s),c=e.mul(i).mul(a.toFloat().exp());return Nn(o,u,c)}}})}}),gn=D({transpose_:function(r,t){var e=_(r,"x","transpose");if(t==null&&(t=e.shape.map(function(a,o){return o}).reverse()),E(e.rank===t.length,function(){return"Error in transpose: rank of input "+e.rank+" must match length of perm "+t+"."}),t.forEach(function(a){E(a>=0&&a<e.rank,function(){return"All entries in 'perm' must be between 0 and "+(e.rank-1)+" but got "+t})}),e.rank<=1)return e.clone();var n={perm:t};return N.runKernelFunc(function(a){return a.transpose(e,t)},{x:e},function(a){var o=ai(t);return{x:function(){return a.transpose(o)}}},"Transpose",n)}}),Eg=D({localResponseNormalization_:function(r,t,e,n,a){t===void 0&&(t=5),e===void 0&&(e=1),n===void 0&&(n=1),a===void 0&&(a=.5);var o=_(r,"x","localResponseNormalization");E(o.rank===4||o.rank===3,function(){return`Error in localResponseNormalization: x must be rank 3 or 4 but got
               rank `+o.rank+"."}),E(Te(t),function(){return"Error in localResponseNormalization: depthRadius must be an integer but got depthRadius "+t+"."});var i=o,s=!1;o.rank===3&&(s=!0,i=o.as4D(1,o.shape[0],o.shape[1],o.shape[2]));var u=N.runKernelFunc(function(c,l){var h=c.localResponseNormalization4D(i,t,e,n,a);return l([i,h]),h},{x4D:i},function(c,l){var h=l[0],d=l[1];return{x4D:function(){return N.runKernelFunc(function(f){return f.LRNGrad(c,h,d,t,e,n,a)},{})}}});return s?u.as3D(u.shape[1],u.shape[2],u.shape[3]):u}}),Oc=D({norm_:function(r,t,e,n){t===void 0&&(t="euclidean"),e===void 0&&(e=null),n===void 0&&(n=!1);var a=function s(u,c,l){if(l===void 0&&(l=null),u.rank===0)return u.abs();if(u.rank!==1&&l===null)return s(u.reshape([-1]),c,l);if(u.rank===1||typeof l=="number"||Array.isArray(l)&&l.length===1){if(c===1)return u.abs().sum(l);if(c===1/0)return u.abs().max(l);if(c===-1/0)return u.abs().min(l);if(c==="euclidean"||c===2)return u.abs().pow(q(2,"int32")).sum(l).sqrt();throw new Error("Error in norm: invalid ord value: "+c)}if(Array.isArray(l)&&l.length===2){if(c===1)return u.abs().sum(l[0]).max(l[1]-1);if(c===1/0)return u.abs().sum(l[1]).max(l[0]);if(c===-1/0)return u.abs().sum(l[1]).min(l[0]);if(c==="fro"||c==="euclidean")return u.square().sum(l).sqrt();throw new Error("Error in norm: invalid ord value: "+c)}throw new Error("Error in norm: invalid axis: "+l)}(r=_(r,"x","norm"),t,e),o=a.shape;if(n){var i=We(e,r.shape);o=at(a.shape,i)}return a.reshape(o)}}),Ig=D({basicLSTMCell_:function(r,t,e,n,a,o){var i=_(r,"forgetBias","basicLSTMCell"),s=_(t,"lstmKernel","basicLSTMCell"),u=_(e,"lstmBias","basicLSTMCell"),c=_(n,"data","basicLSTMCell"),l=_(a,"c","basicLSTMCell"),h=_(o,"h","basicLSTMCell"),d=c.concat(h,1).matMul(s).add(u),f=d.shape[0],p=d.shape[1]/4,g=[f,p],v=d.slice([0,0],g),m=d.slice([0,p],g),b=d.slice([0,2*p],g),x=d.slice([0,3*p],g),y=v.sigmoid().mulStrict(m.tanh()).addStrict(l.mulStrict(i.add(b).sigmoid())),w=y.tanh().mulStrict(x.sigmoid());return[y,w]}}),kg=D({multiRNNCell_:function(r,t,e,n){for(var a=_(t,"data","multiRNNCell"),o=ca(e,"c","multiRNNCell"),i=ca(n,"h","multiRNNCell"),s=a,u=[],c=0;c<r.length;c++){var l=r[c](s,o[c],i[c]);u.push(l[0]),u.push(l[1]),s=l[1]}var h=[],d=[];for(c=0;c<u.length;c+=2)h.push(u[c]),d.push(u[c+1]);return[h,d]}}),Sg=D({movingAverage_:function(r,t,e,n,a){a===void 0&&(a=!0);var o=_(r,"v","movingAverage"),i=_(t,"x","movingAverage"),s=_(e,"decay","movingAverage");_h(o,i),E(Ve(o.shape,i.shape),function(){return"Shape mismatch in v and x"});var u=q(1),c=u.sub(s),l=i.sub(o).mul(c);if(a){E(n!=null,function(){return"When using zeroDebias: true, step is required."});var h=_(n,"step","movingAverage");l=l.div(u.sub(ba(s,h)))}return o.add(l)}}),Rg=D({stridedSlice_:function(r,t,e,n,a,o,i,s,u){if(a===void 0&&(a=0),o===void 0&&(o=0),i===void 0&&(i=0),s===void 0&&(s=0),u===void 0&&(u=0),n==null&&(n=new Array(t.length)),i!==0)throw new Error("ellipsis mask is not yet supported");var c=_(r,"x","stridedSlice"),l=ws(s),h=c.shape.slice();l.forEach(function(v){t[v]=0,e[v]=1,h.splice(v,0,1)}),c=c.reshape(h);for(var d=0;d<c.rank;d++)t[d]=Bd(a,t,n,c.shape,d),e[d]=Ld(o,e,n,c.shape,d),n[d]=n[d]||1;var f=ws(u);f.forEach(function(v){e[v]=t[v]+1,n[v]=1});var p=ui(t,e,n),g=p.filter(function(v,m){return f.indexOf(m)===-1});return n.every(function(v){return v===1})?Ut(c,t,p).reshape(g):N.runKernelFunc(function(v){return v.stridedSlice(c,t,e,n)},{$x:c}).reshape(g)}}),Ag=D({topk_:function(r,t,e){t===void 0&&(t=1),e===void 0&&(e=!0);var n=_(r,"x","topk");if(n.rank===0)throw new Error("topk() expects the input to be of rank 1 or higher");var a=n.shape[n.shape.length-1];if(t>a)throw new Error("'k' passed to topk() must be <= the last dimension ("+a+") but got "+t);var o=N.runKernelFunc(function(i){return i.topk(n,t,e)},{$x:n});return{values:o[0],indices:o[1]}}}),Dg=D({scatterND_:function(r,t,e){var n=_(r,"indices","scatterND","int32"),a=_(t,"updates","scatterND");return Md(a,n,e),N.runKernelFunc(function(o){return o.scatterND(n,a,e)},{indices:n,updates:a},null,"ScatterNd",{shape:e})}}),wi=D({fft_:function(r){E(r.dtype==="complex64",function(){return"The dtype for tf.spectral.fft() must be complex64 but got "+r.dtype+"."});var t=r.shape[r.shape.length-1],e=r.size/t,n=r.as2D(e,t);return N.runKernelFunc(function(a){return a.fft(n)},{input:r}).reshape(r.shape)}}),xa=D({ifft_:function(r){E(r.dtype==="complex64",function(){return"The dtype for tf.spectral.ifft() must be complex64 but got "+r.dtype+"."});var t=r.shape[r.shape.length-1],e=r.size/t,n=r.as2D(e,t);return N.runKernelFunc(function(a){return a.ifft(n)},{input:r}).reshape(r.shape)}}),Ci=D({rfft_:function(r,t){E(r.dtype==="float32",function(){return"The dtype for rfft() must be real value but got "+r.dtype});var e,n=r.shape[r.shape.length-1],a=r.size/n;if(t!=null&&t<n){var o=r.shape.map(function(m){return 0}),i=r.shape.map(function(m){return m});i[r.shape.length-1]=t,e=r.slice(o,i),n=t}else if(t!=null&&t>n){var s=r.shape.map(function(m){return m});s[r.shape.length-1]=t-n,e=r.concat(_e(s),r.shape.length-1),n=t}else e=r;var u=e.zerosLike(),c=He(e,u).as2D(a,n),l=wi(c),h=Math.floor(n/2)+1,d=gt(l),f=Mt(l),p=d.split([h,n-h],d.shape.length-1),g=f.split([h,n-h],f.shape.length-1),v=e.shape.slice();return v[e.shape.length-1]=h,He(p[0],g[0]).reshape(v)}}),Bc=D({irfft_:function(r){var t=r.shape[r.shape.length-1],e=r.size/t;if(t<=2){var n=r.as2D(e,t),a=xa(n);return gt(a)}var o=[e,2*(t-1)],i=gt(r).as2D(e,t),s=Mt(r).as2D(e,t),u=i.slice([0,1],[e,t-2]).reverse(1),c=s.slice([0,1],[e,t-2]).reverse(1).mul(q(-1)),l=i.concat(u,1),h=s.concat(c,1);return n=He(l,h).as2D(o[0],o[1]),a=xa(n),gt(a)}}),Tg=Object.freeze({fft:wi,ifft:xa,rfft:Ci,irfft:Bc}),Ng=D({sparseToDense_:function(r,t,e,n){n===void 0&&(n=0);var a=_(r,"sparseIndices","sparseToDense","int32"),o=_(t,"sparseValues","sparseToDense"),i=_(n,"defaultValue","sparseToDense",o.dtype);return function(s,u,c,l){if(s.dtype!=="int32")throw new Error("tf.sparseToDense() expects the indices to be int32 type, but the dtype was "+s.dtype+".");if(s.rank>2)throw new Error("sparseIndices should be a scalar, vector, or matrix, but got shape "+s.shape+".");var h=s.rank>0?s.shape[0]:1,d=s.rank>1?s.shape[1]:1;if(c.length!==d)throw new Error("outputShape has incorrect number of elements:, "+c.length+", should be: "+d+".");var f=u.size;if(u.rank!==0&&(u.rank!==1||f!==h))throw new Error("sparseValues has incorrect shape "+u.shape+", should be [] or ["+h+"]");if(u.dtype!==l.dtype)throw new Error("sparseValues.dtype must match defaultValues.dtype")}(a,o,e,i),N.runKernelFunc(function(s){return s.sparseToDense(a,o,e,i)},{$sparseIndices:a,$sparseValues:o,$defaultValue:i})}}),Fg=D({gatherND_:function(r,t){var e=_(t,"indices","gatherND","int32"),n=_(r,"x","gatherND");return N.runKernelFunc(function(a){return a.gatherND(n,e)},{x:n,indices:e},null,"GatherNd")}}),Pg=D({diag_:function(r){var t=_(r,"x","diag").flatten(),e=r.shape.concat(r.shape);return N.runKernelFunc(function(n){return n.diag(t)},{$x:t}).reshape(e)}}),Mg=D({dropout_:function(r,t,e,n){var a=_(r,"x","dropout");if(E(a.dtype==="float32",function(){return"x has to be a floating point tensor since it's going to be scaled, but got a "+a.dtype+" tensor instead."}),E(t>=0&&t<1,function(){return"rate must be a float in the range [0, 1), but got "+t+"."}),t===0)return r instanceof ke?a.clone():a;var o=function(u,c){if(c==null)return u.shape.slice();if(Ve(u.shape,c))return c;if(u.shape.length===c.length){for(var l=[],h=0;h<u.shape.length;h++)c[h]==null&&u.shape[h]!=null?l.push(u.shape[h]):l.push(c[h]);return l}return c}(a,e),i=1-t,s=Pu(o,0,1,"float32",n).add(i).floor().div(i);return a.mul(s)}});function Lc(r,t,e){for(var n=1-r%2,a=new Float32Array(r),o=0;o<r;++o){var i=2*Math.PI*o/(r+n-1);a[o]=t-e*Math.cos(i)}return Fe(a,"float32")}var _i=D({hannWindow_:function(r){return Lc(r,.5,.5)}}),Wc=D({hammingWindow_:function(r){return Lc(r,.54,.46)}}),Ei=D({frame_:function(r,t,e,n,a){n===void 0&&(n=!1),a===void 0&&(a=0);for(var o=0,i=[];o+t<=r.size;)i.push(Ut(r,o,t)),o+=e;if(n)for(;o<r.size;){var s=o+t-r.size,u=Me([Ut(r,o,t-s),zt([s],a)]);i.push(u),o+=e}return i.length===0?dn([],[0,t]):Me(i).as2D(i.length,t)}}),zc=D({stft_:function(r,t,e,n,a){var o;a===void 0&&(a=_i),n==null&&(o=t,n=Math.floor(Math.pow(2,Math.ceil(Math.log(o)/Math.log(2)))));for(var i=Ei(r,t,e),s=Ze(i,a(t)),u=[],c=0;c<i.shape[0];c++)u.push(Ci(s.slice([c,0],[1,t]),n));return Me(u)}}),Og=Object.freeze({hannWindow:_i,hammingWindow:Wc,frame:Ei,stft:zc}),$e,Bg=function(r,t,e){return e===void 0&&(e=1),Y(this,void 0,void 0,function(){var n,a,o,i,s,u,c,l,h,d,f,p,g,v;return $(this,function(m){switch(m.label){case 0:return n=_(r,"predictions","inTopK"),a=_(t,"targets","inTopK"),E(n.rank>1,function(){return"inTopK() expects the predictions to be of rank 2 or higher, but got "+n.rank}),E(n.rank-1===a.rank,function(){return"predictions rank should be 1 larger than targets rank, but got predictions rank "+n.rank+" and targets rank "+a.rank}),xe(n.shape.slice(0,n.shape.length-1),a.shape,"predictions's shape should be align with the targets' shape, except the last dimension."),o=n.shape[n.shape.length-1],E(e>0&&e<=o,function(){return"'k' passed to inTopK() must be > 0 && <= the predictions last dimension ("+o+"), but got "+e}),[4,n.data()];case 1:return i=m.sent(),[4,a.data()];case 2:for(s=m.sent(),u=[i.length/o,o],l=u[1],h=br("bool",c=u[0]),d=0;d<c;d++){for(f=d*l,p=i.subarray(f,f+l),g=[],v=0;v<p.length;v++)g.push({value:p[v],index:v});for(g.sort(function(b,x){return x.value-b.value}),h[d]=0,v=0;v<e;v++)if(g[v].index===s[d]){h[d]=1;break}}return r!==n&&n.dispose(),t!==a&&a.dispose(),[2,qe(h,a.shape,"bool")]}})})};(function(r){r[r.NONE=0]="NONE",r[r.MEAN=1]="MEAN",r[r.SUM=2]="SUM",r[r.SUM_BY_NONZERO_WEIGHTS=3]="SUM_BY_NONZERO_WEIGHTS"})($e||($e={}));var Lg=D({absoluteDifference_:function(r,t,e,n){n===void 0&&(n=$e.SUM_BY_NONZERO_WEIGHTS);var a=_(r,"labels","absoluteDifference"),o=_(t,"predictions","absoluteDifference"),i=null;e!=null&&(i=_(e,"weights","absoluteDifference")),xe(a.shape,o.shape,"Error in absoluteDifference: ");var s=a.sub(o).abs();return tn(s,i,n)}}),tn=D({computeWeightedLoss_:function(r,t,e){e===void 0&&(e=$e.SUM_BY_NONZERO_WEIGHTS);var n=_(r,"losses","computeWeightedLoss"),a=null;t!=null&&(a=_(t,"weights","computeWeightedLoss"));var o=a==null?n:n.mul(a);if(e===$e.NONE)return o;if(e===$e.SUM)return o.sum();if(e===$e.MEAN){if(a==null)return o.mean();var i=n.size/a.size,s=o.sum().div(a.sum());return i>1?s.div(q(i)):s}if(e===$e.SUM_BY_NONZERO_WEIGHTS){if(a==null)return o.sum().div(q(n.size));var u=a.mul(ur(n.shape)).notEqual(q(0)).sum().toFloat();return o.sum().div(u)}throw Error("Unknown reduction: "+e)}}),Wg=D({cosineDistance_:function(r,t,e,n,a){a===void 0&&(a=$e.SUM_BY_NONZERO_WEIGHTS);var o=_(r,"labels","cosineDistance"),i=_(t,"predictions","cosineDistance"),s=null;n!=null&&(s=_(n,"weights","cosineDistance")),xe(o.shape,i.shape,"Error in cosineDistance: ");var u=q(1).sub(o.mul(i).sum(e,!0));return tn(u,s,a)}}),zg=D({hingeLoss_:function(r,t,e,n){n===void 0&&(n=$e.SUM_BY_NONZERO_WEIGHTS);var a=_(r,"labels","hingeLoss"),o=_(t,"predictions","hingeLoss"),i=null;e!=null&&(i=_(e,"weights","hingeLoss")),xe(a.shape,o.shape,"Error in hingeLoss: ");var s=q(1);a=q(2).mul(a).sub(s);var u=s.sub(a.mul(o)).relu();return tn(u,i,n)}}),Ug=D({huberLoss_:function(r,t,e,n,a){n===void 0&&(n=1),a===void 0&&(a=$e.SUM_BY_NONZERO_WEIGHTS);var o=_(r,"labels","huberLoss"),i=_(t,"predictions","huberLoss"),s=null;e!=null&&(s=_(e,"weights","huberLoss")),xe(o.shape,i.shape,"Error in huberLoss: ");var u=q(n),c=i.sub(o).abs(),l=bc(c,u),h=c.sub(l),d=q(.5).mul(l.square()).add(u.mul(h));return tn(d,s,a)}}),Vg=D({logLoss_:function(r,t,e,n,a){n===void 0&&(n=1e-7),a===void 0&&(a=$e.SUM_BY_NONZERO_WEIGHTS);var o=_(r,"labels","logLoss"),i=_(t,"predictions","logLoss"),s=null;e!=null&&(s=_(e,"weights","logLoss")),xe(o.shape,i.shape,"Error in logLoss: ");var u=q(1),c=q(n),l=o.mul(i.add(c).log()).neg().sub(u.sub(o).mul(u.sub(i).add(c).log()));return tn(l,s,a)}}),Gg=D({meanSquaredError_:function(r,t,e,n){n===void 0&&(n=$e.SUM_BY_NONZERO_WEIGHTS);var a=_(r,"labels","meanSquaredError"),o=_(t,"predictions","meanSquaredError"),i=null;e!=null&&(i=_(e,"weights","meanSquaredError")),xe(a.shape,o.shape,"Error in meanSquaredError: ");var s=a.squaredDifference(o);return tn(s,i,n)}}),Hg=D({sigmoidCrossEntropy_:function(r,t,e,n,a){n===void 0&&(n=0),a===void 0&&(a=$e.SUM_BY_NONZERO_WEIGHTS);var o=_(r,"multiClassLabels","sigmoidCrossEntropy"),i=_(t,"logits","sigmoidCrossEntropy"),s=null;if(e!=null&&(s=_(e,"weights","sigmoidCrossEntropy")),xe(o.shape,i.shape,"Error in sigmoidCrossEntropy: "),n>0){var u=q(n),c=q(1),l=q(.5);o=o.mul(c.sub(u)).add(l.mul(u))}var h=function(d,f){var p=_(d,"labels","sigmoidCrossEntropyWithLogits"),g=_(f,"logits","sigmoidCrossEntropyWithLogits");xe(p.shape,g.shape,"Error in sigmoidCrossEntropyWithLogits: ");var v=g.relu(),m=g.mul(p),b=g.abs().neg().exp().log1p();return v.sub(m).add(b)}(o,i);return tn(h,s,a)}}),jg=D({softmaxCrossEntropy_:function(r,t,e,n,a){n===void 0&&(n=0),a===void 0&&(a=$e.SUM_BY_NONZERO_WEIGHTS);var o=_(r,"onehotLabels","softmaxCrossEntropy"),i=_(t,"logits","softmaxCrossEntropy"),s=null;if(e!=null&&(s=_(e,"weights","softmaxCrossEntropy")),xe(o.shape,i.shape,"Error in softmaxCrossEntropy: "),n>0){var u=q(n),c=q(1),l=q(o.shape[1]);o=o.mul(c.sub(u)).add(u.div(l))}var h=function(d,f,p){if(p===void 0&&(p=-1),p===-1&&(p=f.rank-1),p!==f.rank-1)throw Error("Softmax cross entropy along a non-last dimension is not yet supported. Labels / logits was rank "+f.rank+" and dim was "+p);return Da(function(g,v,m){var b=v.logSumExp([p],!0),x=v.toFloat().sub(b);return m([g,x]),{value:x.mul(g).neg().sum([p]),gradFunc:function(y,w){var C=w[0],R=w[1],S=at(y.shape,[p]);return[y.reshape(S).mul(C.toFloat().sub(R.exp())),y.reshape(S).mul(R.exp().sub(C.toFloat()))]}}})(d,f)}(o,i);return tn(h,s,a)}}),qg=Object.freeze({get Reduction(){return $e},absoluteDifference:Lg,computeWeightedLoss:tn,cosineDistance:Wg,hingeLoss:zg,huberLoss:Ug,logLoss:Vg,meanSquaredError:Gg,sigmoidCrossEntropy:Hg,softmaxCrossEntropy:jg});function Gs(r,t){return t===void 0&&(t=!1),N.tidy(function(){if(r.shape.length!==2)throw new Error("qr2d() requires a 2D Tensor, but got a "+r.shape.length+"D Tensor.");for(var e=r.shape[0],n=r.shape[1],a=Fu(e),o=r.clone(),i=dn([[1]],[1,1]),s=i.clone(),u=e>=n?n:e,c=function(h){var d,f=o,p=s,g=a;d=N.tidy(function(){var v=o.slice([h,h],[e-h,1]),m=v.norm(),b=o.slice([h,h],[1,1]),x=dn([[-1]]).where(b.greater(0),dn([[1]])),y=b.sub(x.mul(m)),w=v.div(y);s=w.shape[0]===1?i.clone():i.concat(w.slice([1,0],[w.shape[0]-1,w.shape[1]]),0);var C=x.matMul(y).div(m).neg(),R=o.slice([h,0],[e-h,n]),S=C.mul(s);if(h===0)o=R.sub(S.matMul(s.transpose().matMul(R)));else{var I=R.sub(S.matMul(s.transpose().matMul(R)));o=o.slice([0,0],[h,n]).concat(I,0)}var k=a.slice([0,h],[e,a.shape[1]-h]);if(h===0)a=k.sub(k.matMul(s).matMul(S.transpose()));else{var F=k.sub(k.matMul(s).matMul(S.transpose()));a=a.slice([0,0],[e,h]).concat(F,1)}return[s,o,a]}),s=d[0],o=d[1],a=d[2],nt([f,p,g])},l=0;l<u;++l)c(l);return!t&&e>n&&(a=a.slice([0,0],[e,n]),o=o.slice([0,0],[n,n])),[a,o]})}var Kg=D({bandPart_:function(r,t,e){if(t%1!=0)throw new Error("bandPart(): numLower must be an integer, got "+t+".");if(e%1!=0)throw new Error("bandPart(): numUpper must be an integer, got "+e+".");var n=_(r,"a","bandPart");if(n.rank<2)throw new Error("bandPart(): Rank must be at least 2, got "+n.rank+".");var a=n.shape,o=n.shape.slice(-2),i=o[0],s=o[1];if(!(t<=i))throw new Error("bandPart(): numLower ("+t+") must not be greater than the number of rows ("+i+").");if(!(e<=s))throw new Error("bandPart(): numUpper ("+e+") must not be greater than the number of columns ("+s+").");t<0&&(t=i),e<0&&(e=s);var u=la(0,i,1,"int32").reshape([-1,1]),c=la(0,s,1,"int32"),l=Le(u,c),h=Na(l.lessEqual(q(+t,"int32")),l.greaterEqual(q(-e,"int32"))),d=_e([i,s],n.dtype);return pt(Oe(n.reshape([-1,i,s])).map(function(f){return Nn(h,f,d)})).reshape(a)}}),Xg=D({gramSchmidt_:function(r){var t;if(Array.isArray(r)){t=!1,E(r!=null&&r.length>0,function(){return"Gram-Schmidt process: input must not be null, undefined, or empty"});for(var e=r[0].shape[0],n=function(u){E(r[u].shape[0]===e,function(){return"Gram-Schmidt: Non-unique lengths found in the input vectors: ("+r[u].shape[0]+" vs. "+e+")"})},a=1;a<r.length;++a)n(a)}else t=!0,r=ii(r,r.shape[0],0).map(function(u){return Ou(u,[0])});E(r.length<=r[0].shape[0],function(){return"Gram-Schmidt: Number of vectors ("+r.length+") exceeds number of dimensions ("+r[0].shape[0]+")."});var o=[],i=r,s=function(u){o.push(N.tidy(function(){var c=i[u];if(u>0)for(var l=0;l<u;++l){var h=Nc(o[l].mulStrict(c)).mul(o[l]);c=c.sub(h)}return c.div(Oc(c,"euclidean"))}))};for(a=0;a<r.length;++a)s(a);return t?pt(o,0):o}}),Yg=D({qr_:function(r,t){if(t===void 0&&(t=!1),r.rank<2)throw new Error("qr() requires input tensor to have a rank >= 2, but got rank "+r.rank);if(r.rank===2)return Gs(r,t);var e=r.shape.slice(0,r.shape.length-2).reduce(function(i,s){return i*s}),n=Oe(r.reshape([e,r.shape[r.shape.length-2],r.shape[r.shape.length-1]]),0),a=[],o=[];return n.forEach(function(i){var s=Gs(i,t),u=s[0],c=s[1];a.push(u),o.push(c)}),[pt(a,0).reshape(r.shape),pt(o,0).reshape(r.shape)]}}),$g=Object.freeze({bandPart:Kg,gramSchmidt:Xg,qr:Yg});function Oa(r,t,e,n,a,o){n==null&&(n=.5),a==null&&(a=Number.NEGATIVE_INFINITY),o==null&&(o=0);var i=r.shape[0];return e=Math.min(e,i),E(0<=n&&n<=1,function(){return"iouThreshold must be in [0, 1], but was '"+n+"'"}),E(r.rank===2,function(){return"boxes must be a 2D tensor, but was of rank '"+r.rank+"'"}),E(r.shape[1]===4,function(){return"boxes must have 4 columns, but 2nd dimension was "+r.shape[1]}),E(t.rank===1,function(){return"scores must be a 1D tensor"}),E(t.shape[0]===i,function(){return"scores has incompatible shape with boxes. Expected "+i+", but was "+t.shape[0]}),E(0<=o&&o<=1,function(){return"softNmsSigma must be in [0, 1], but was '"+o+"'"}),{maxOutputSize:e,iouThreshold:n,scoreThreshold:a,softNmsSigma:o}}var Zg=D({resizeBilinear_:function(r,t,e){e===void 0&&(e=!1);var n=_(r,"images","resizeBilinear");E(n.rank===3||n.rank===4,function(){return"Error in resizeBilinear: x must be rank 3 or 4, but got rank "+n.rank+"."}),E(t.length===2,function(){return"Error in resizeBilinear: new shape must 2D, but got shape "+t+"."});var a=n,o=!1;n.rank===3&&(o=!0,a=n.as4D(1,n.shape[0],n.shape[1],n.shape[2]));var i=t[0],s=t[1],u=N.runKernelFunc(function(c,l){return l([a]),c.resizeBilinear(a,i,s,e)},{x:a},function(c,l){return{x:function(){return N.runKernelFunc(function(h){return h.resizeBilinearBackprop(c,l[0],e)},{})}}},"ResizeBilinear",{alignCorners:e,newHeight:i,newWidth:s});return o?u.as3D(u.shape[1],u.shape[2],u.shape[3]):u}}),Jg=D({resizeNearestNeighbor_:function(r,t,e){e===void 0&&(e=!1);var n=_(r,"images","resizeNearestNeighbor");E(n.rank===3||n.rank===4,function(){return"Error in resizeNearestNeighbor: x must be rank 3 or 4, but got rank "+n.rank+"."}),E(t.length===2,function(){return"Error in resizeNearestNeighbor: new shape must 2D, but got shape "+t+"."}),E(n.dtype==="float32"||n.dtype==="int32",function(){return"`images` must have `int32` or `float32` as dtype"});var a=n,o=!1;n.rank===3&&(o=!0,a=n.as4D(1,n.shape[0],n.shape[1],n.shape[2]));var i=t[0],s=t[1],u=N.runKernelFunc(function(c,l){return l([a]),c.resizeNearestNeighbor(a,i,s,e)},{batchImages:a},function(c,l){return{batchImages:function(){return N.runKernelFunc(function(h){return h.resizeNearestNeighborBackprop(c,l[0],e)},{})}}});return o?u.as3D(u.shape[1],u.shape[2],u.shape[3]):u}}),Qg=D({nonMaxSuppression_:function(r,t,e,n,a){n===void 0&&(n=.5),a===void 0&&(a=Number.NEGATIVE_INFINITY);var o=_(r,"boxes","nonMaxSuppression"),i=_(t,"scores","nonMaxSuppression"),s=Oa(o,i,e,n,a);e=s.maxOutputSize,n=s.iouThreshold,a=s.scoreThreshold;var u={maxOutputSize:e,iouThreshold:n,scoreThreshold:a};return N.runKernelFunc(function(c){return c.nonMaxSuppression(o,i,e,n,a)},{boxes:o,scores:i},null,"NonMaxSuppressionV3",u)}}),em=function(r,t,e,n,a){return n===void 0&&(n=.5),a===void 0&&(a=Number.NEGATIVE_INFINITY),Y(this,void 0,void 0,function(){var o,i,s,u,c,l,h;return $(this,function(d){switch(d.label){case 0:return o=_(r,"boxes","nonMaxSuppressionAsync"),i=_(t,"scores","nonMaxSuppressionAsync"),s=Oa(o,i,e,n,a),e=s.maxOutputSize,n=s.iouThreshold,a=s.scoreThreshold,[4,Promise.all([o.data(),i.data()])];case 1:return u=d.sent(),c=u[0],l=u[1],h=li(c,l,e,n,a),o!==r&&o.dispose(),i!==t&&i.dispose(),[2,h]}})})},tm=D({nonMaxSuppressionWithScore_:function(r,t,e,n,a,o){n===void 0&&(n=.5),a===void 0&&(a=Number.NEGATIVE_INFINITY),o===void 0&&(o=0);var i=_(r,"boxes","nonMaxSuppression"),s=_(t,"scores","nonMaxSuppression"),u=Oa(i,s,e,n,a,o),c={maxOutputSize:e=u.maxOutputSize,iouThreshold:n=u.iouThreshold,scoreThreshold:a=u.scoreThreshold,softNmsSigma:o=u.softNmsSigma},l=N.runKernel("NonMaxSuppressionV5",{boxes:i,scores:s},c);return{selectedIndices:l[0],selectedScores:l[1]}}}),nm=function(r,t,e,n,a,o){return n===void 0&&(n=.5),a===void 0&&(a=Number.NEGATIVE_INFINITY),o===void 0&&(o=0),Y(this,void 0,void 0,function(){var i,s,u,c,l,h,d;return $(this,function(f){switch(f.label){case 0:return i=_(r,"boxes","nonMaxSuppressionAsync"),s=_(t,"scores","nonMaxSuppressionAsync"),u=Oa(i,s,e,n,a,o),e=u.maxOutputSize,n=u.iouThreshold,a=u.scoreThreshold,o=u.softNmsSigma,[4,Promise.all([i.data(),s.data()])];case 1:return c=f.sent(),l=c[0],h=c[1],d=hi(l,h,e,n,a,o),i!==r&&i.dispose(),s!==t&&s.dispose(),[2,d]}})})},rm=D({cropAndResize_:function(r,t,e,n,a,o){var i=_(r,"image","cropAndResize"),s=_(t,"boxes","cropAndResize","float32"),u=_(e,"boxInd","cropAndResize","int32");a=a||"bilinear",o=o||0;var c=s.shape[0];return E(i.rank===4,function(){return"Error in cropAndResize: image must be rank 4,but got rank "+i.rank+"."}),E(s.rank===2&&s.shape[1]===4,function(){return"Error in cropAndResize: boxes must be have size ["+c+",4] but had shape "+s.shape+"."}),E(u.rank===1&&u.shape[0]===c,function(){return"Error in cropAndResize: boxInd must be have size ["+c+"] but had shape "+s.shape+"."}),E(n.length===2,function(){return"Error in cropAndResize: cropSize must be of length 2, but got length "+n.length+"."}),E(n[0]>=1&&n[1]>=1,function(){return"cropSize must be atleast [1,1], but was "+n}),E(a==="bilinear"||a==="nearest",function(){return"method must be bilinear or nearest, but was "+a}),N.runKernelFunc(function(l,h){return l.cropAndResize(i,s,u,n,a,o)},{images:i,boxes:s,boxInd:u},null,"CropAndResize",{method:a,extrapolationValue:o,cropSize:n})}}),Ii=Object.freeze({resizeBilinear:Zg,resizeNearestNeighbor:Jg,nonMaxSuppression:Qg,nonMaxSuppressionAsync:em,nonMaxSuppressionWithScore:tm,nonMaxSuppressionWithScoreAsync:nm,cropAndResize:rm}),ki=function(r,t){return!(r>0)||t==="linear"},Si=function(r,t,e){if(e==null||e==="linear")return r;if(e==="relu")return r.mul(t.step());throw new Error("Gradient for activation "+e+" has not been implemented yet.")},Ri=function(r,t){var e=t,n=Be(r.shape,t.shape);return n.length>0&&(e=e.sum(n)),e.reshape(r.shape)},Ai=function(r,t,e){if(t==="linear")return r;if(t==="relu")return Se(r);if(t==="elu")return Fc(r);if(t==="relu6")return Mc(r);if(t==="prelu")return Pc(r,e);throw new Error("Unknown fused activation "+t+".")},am=D({fusedMatMul_:function(r){var t,e=r.a,n=r.b,a=r.transposeA,o=a!==void 0&&a,i=r.transposeB,s=i!==void 0&&i,u=r.bias,c=r.activation,l=c===void 0?"linear":c,h=r.preluActivationWeights;if(ki(N.state.gradientDepth,l)===!1){var d=Pa(e,n,o,s);return u!=null&&(d=le(d,u)),Ai(d,l,h)}var f=_(e,"a","fused matMul"),p=_(n,"b","fused matMul");t=Re(f,p),f=t[0],p=t[1];var g=o?f.shape[f.rank-2]:f.shape[f.rank-1],v=s?p.shape[p.rank-1]:p.shape[p.rank-2],m=o?f.shape[f.rank-1]:f.shape[f.rank-2],b=s?p.shape[p.rank-2]:p.shape[p.rank-1],x=f.shape.slice(0,-2),y=p.shape.slice(0,-2),w=Z(x),C=Z(y);E(f.rank>=2&&p.rank>=2&&f.rank===p.rank,function(){return"Error in fused matMul: inputs must have the same rank of at least 2, got ranks "+f.rank+" and "+p.rank+"."}),E(Ve(x,y),function(){return"Error in fused matMul: outer dimensions ("+x+") and ("+y+") of Tensors with shapes "+f.shape+" and "+p.shape+" must match."}),E(g===v,function(){return"Error in fused matMul: inner shapes ("+g+") and ("+v+") of Tensors with shapes "+f.shape+" and "+p.shape+" and transposeA="+o+" and transposeB="+s+" must match."});var R,S,I=f.shape.slice(0,-2).concat([m,b]),k=o?f.as3D(w,g,m):f.as3D(w,m,g),F=s?p.as3D(C,b,v):p.as3D(C,v,b);u!=null&&de(I,(R=Re(R=_(u,"bias","fused matMul"),f)[0]).shape),h!=null&&(S=_(h,"prelu weights","fused matMul"));var T={a:k,b:F};u!=null&&(T.bias=R),h!=null&&(T.preluActivationWeights=S);var W=[k,F];return N.runKernelFunc(function(B,L){var V=B.fusedBatchMatMul({a:k,b:F,transposeA:o,transposeB:s,bias:R,activation:l,preluActivationWeights:S});return L([k,F,V]),V},T,function(B,L){var V=L[0],U=L[1],z=L[2],H=Si(B,z,l),j={};return u!=null&&(j={bias:function(){return Ri(R,H)}}),Object.assign(o||s?!o&&s?{a:function(){return H.matMul(U,!1,!1)},b:function(){return H.matMul(V,!0,!1)}}:o&&!s?{a:function(){return U.matMul(H,!1,!0)},b:function(){return V.matMul(H,!1,!1)}}:{a:function(){return U.matMul(H,!0,!0)},b:function(){return H.matMul(V,!0,!0)}}:{a:function(){return H.matMul(U,!1,!0)},b:function(){return V.matMul(H,!0,!1)}},j)},"_FusedMatMul",{transposeA:o,transposeB:s,activation:l},W,[!0]).reshape(I)}}),om=D({fusedConv2d_:function(r){var t=r.x,e=r.filter,n=r.strides,a=r.pad,o=r.dataFormat,i=o===void 0?"NHWC":o,s=r.dilations,u=s===void 0?[1,1]:s,c=r.dimRoundingMode,l=r.bias,h=r.activation,d=h===void 0?"linear":h,f=r.preluActivationWeights;if(d=d||"linear",ki(N.state.gradientDepth,d)===!1){var p=xt(t,e,n,a,i,u,c);return l!=null&&(p=le(p,l)),Ai(p,d,f)}var g=_(t,"x","conv2d"),v=_(e,"filter","conv2d"),m=g,b=!1;g.rank===3&&(b=!0,m=g.as4D(1,g.shape[0],g.shape[1],g.shape[2])),E(m.rank===4,function(){return"Error in fused conv2d: input must be rank 4, but got rank "+m.rank+"."}),E(v.rank===4,function(){return"Error in fused conv2d: filter must be rank 4, but got rank "+v.rank+"."}),c!=null&&E(Te(a),function(){return"Error in fused conv2d: pad must be an integer when using, dimRoundingMode "+c+" but got pad "+a+"."}),E(m.shape[3]===v.shape[2],function(){return"Error in conv2d: depth of input ("+m.shape[3]+") must match input depth for filter "+v.shape[2]+"."}),E(ot(n,u),function(){return"Error in conv2D: Either strides or dilations must be 1. Got strides "+n+" and dilations '"+u+"'"}),E(i==="NHWC",function(){return"Error in conv2d: got dataFormat of "+i+" but only NHWC is currently supported."});var x,y,w=On(m.shape,v.shape,n,u,a,c);l!=null&&(x=Re(x=_(l,"bias","fused conv2d"),g)[0],de(w.outShape,x.shape)),f!=null&&(y=_(f,"prelu weights","fused conv2d"));var C={x:m,filter:v};l!=null&&(C.bias=x),f!=null&&(C.preluActivationWeights=y);var R=[v,m],S=N.runKernelFunc(function(I,k){var F=I.fusedConv2d({input:m,filter:v,convInfo:w,bias:x,activation:d,preluActivationWeights:y});return k([v,m,F]),F},C,function(I,k){var F=k,T=F[0],W=F[1],B=F[2],L=Si(I,B,d);E(or(u),function(){return"Error in gradient of fused conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '"+u+"'"});var V={};return l!=null&&(V={bias:function(){return Ri(x,L)}}),Object.assign({x:function(){return Ic(W.shape,L,T,n,a)},filter:function(){return bi(W,L,T.shape,n,a)}},V)},"FusedConv2D",{convInfo:w,activation:d},R,[!0]);return b?S.as3D(S.shape[1],S.shape[2],S.shape[3]):S}}),im=D({fusedDepthwiseConv2d_:function(r){var t=r.x,e=r.filter,n=r.strides,a=r.pad,o=r.dataFormat,i=o===void 0?"NHWC":o,s=r.dilations,u=s===void 0?[1,1]:s,c=r.dimRoundingMode,l=r.bias,h=r.activation,d=h===void 0?"linear":h,f=r.preluActivationWeights;if(ki(N.state.gradientDepth,d)===!1){var p=Fa(t,e,n,a,i,u,c);return l!=null&&(p=le(p,l)),Ai(p,d,f)}var g=_(t,"x","depthwiseConv2d"),v=_(e,"filter","depthwiseConv2d"),m=g,b=!1;g.rank===3&&(b=!0,m=g.as4D(1,g.shape[0],g.shape[1],g.shape[2])),E(m.rank===4,function(){return"Error in fused depthwiseConv2d: input must be rank 4, but got rank "+m.rank+"."}),E(v.rank===4,function(){return"Error in fused depthwiseConv2d: filter must be rank 4, but got rank "+v.rank+"."}),E(m.shape[3]===v.shape[2],function(){return"Error in fused depthwiseConv2d: number of input channels ("+m.shape[3]+") must match the inChannels dimension in filter "+v.shape[2]+"."}),u==null&&(u=[1,1]),E(ot(n,u),function(){return"Error in fused depthwiseConv2d: Either strides or dilations must be 1. Got strides "+n+" and dilations '"+u+"'"}),c!=null&&E(Te(a),function(){return"Error in fused depthwiseConv2d: pad must be an integer when using dimRoundingMode "+c+" but got pad "+a+"."});var x,y,w=On(m.shape,v.shape,n,u,a,c,!0);l!=null&&(x=Re(x=_(l,"bias","fused conv2d"),g)[0],de(w.outShape,x.shape)),f!=null&&(y=_(f,"prelu weights","fused depthwiseConv2d"));var C={x:m,filter:v};l!=null&&(C.bias=x),f!=null&&(C.preluActivationWeights=y);var R=[v,m],S=N.runKernelFunc(function(I,k){var F=I.fusedDepthwiseConv2D({input:m,filter:v,convInfo:w,bias:x,activation:d,preluActivationWeights:y});return k([v,m,F]),F},C,function(I,k){E(or(u),function(){return"Error in gradient of fused depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '"+u+"'"});var F=k[0],T=k[1],W=k[2],B=Si(I,W,d),L={};return l!=null&&(L={bias:function(){return Ri(x,B)}}),Object.assign({x:function(){return kc(T.shape,B,F,w)},filter:function(){return Sc(T,B,F.shape,w)}},L)},"FusedDepthwiseConv2D",{convInfo:w,activation:d},R,[!0]);return b?S.as3D(S.shape[1],S.shape[2],S.shape[3]):S}}),sm=Object.freeze({matMul:am,conv2d:om,depthwiseConv2d:im}),um=Object.freeze({image:Ii,linalg:$g,losses:qg,spectral:Tg,fused:sm,signal:Og,square:Vp,squaredDifference:cc,conv1d:Zv,conv2d:xt,conv3d:Jv,depthwiseConv2d:Fa,separableConv2d:xi,conv2dTranspose:Qv,conv3dTranspose:eg,op:D,batchNormalization2d:yv,batchNormalization3d:bv,batchNormalization4d:xv,batchNormalization:wv,batchNorm:vc,batchNorm2d:Cv,batchNorm3d:_v,batchNorm4d:Ev,booleanMaskAsync:$v,complex:He,real:gt,imag:Mt,concat:Me,concat1d:id,concat2d:sd,concat3d:ud,concat4d:cd,split:ii,matMul:Pa,dot:tg,outerProduct:ng,reverse:Or,reverse1d:rg,reverse2d:ag,reverse3d:og,reverse4d:ig,maxPool:ze,avgPool:Br,pool:sg,maxPool3d:ug,avgPool3d:cg,slice:Ut,slice1d:lg,slice2d:hg,slice3d:Dc,slice4d:dg,abs:Gp,acos:Hp,acosh:jp,asin:qp,asinh:Kp,atan:Xp,atanh:Yp,ceil:$p,clipByValue:gi,cos:Zp,cosh:Jp,erf:Qp,exp:Vo,expm1:ev,floor:tv,log:nv,log1p:rv,logSigmoid:av,neg:ya,reciprocal:ov,round:iv,rsqrt:lc,sigmoid:hc,sign:sv,isNaN:uv,isInf:cv,isFinite:lv,sin:hv,sinh:dv,softplus:fv,sqrt:pv,step:vv,tan:gv,tanh:mv,all:fg,any:pg,argMax:vg,argMin:gg,logSumExp:mg,max:Ma,mean:yg,min:bg,moments:xg,sum:Nc,prod:wg,equal:xc,equalStrict:zv,greater:Uv,greaterEqual:wc,greaterEqualStrict:Vv,greaterStrict:Gv,less:Hv,lessEqual:jv,lessEqualStrict:qv,lessStrict:Kv,notEqual:Xv,notEqualStrict:Yv,add:le,addN:Sv,addStrict:Rv,atan2:Av,div:wt,divNoNan:Dv,divStrict:Tv,floorDiv:yc,maximum:mi,maximumStrict:Nv,minimum:bc,minimumStrict:Fv,mod:Pv,modStrict:Mv,mul:Ze,mulStrict:Ov,pow:ba,powStrict:Bv,squaredDifferenceStrict:Lv,sub:Le,subStrict:Wv,elu:Fc,leakyRelu:Cg,prelu:Pc,relu:Se,relu6:Mc,selu:_g,logicalAnd:Na,logicalNot:Iv,logicalOr:gc,logicalXor:kv,where:Nn,whereAsync:mc,buffer:oe,print:yd,batchToSpaceND:Nu,broadcastTo:bd,cast:xd,clone:wd,cumsum:Cd,depthToSpace:_d,expandDims:vt,eye:Fu,multinomial:Ed,oneHot:Lo,pad:Mn,pad1d:Id,pad2d:kd,pad3d:Sd,pad4d:Rd,rand:Ad,randomNormal:Dd,randomGamma:Td,randomUniform:Pu,reshape:Ct,spaceToBatchND:Mu,squeeze:Ou,stack:pt,tile:$n,truncatedNormal:Nd,unstack:Oe,setdiff1dAsync:Fd,fill:zt,linspace:od,ones:ur,range:la,scalar:q,tensor:qe,tensor1d:Fe,tensor2d:dn,tensor3d:oi,tensor4d:Qe,tensor5d:nd,tensor6d:rd,variable:ad,zeros:_e,onesLike:Tu,zerosLike:me,transpose:gn,softmax:en,logSoftmax:zd,localResponseNormalization:Eg,norm:Oc,gather:yi,unsortedSegmentSum:Cc,basicLSTMCell:Ig,multiRNNCell:kg,movingAverage:Sg,stridedSlice:Rg,topk:Ag,scatterND:Dg,fft:wi,ifft:xa,rfft:Ci,irfft:Bc,sparseToDense:Ng,gatherND:Fg,diag:Pg,dropout:Mg,hannWindow:_i,hammingWindow:Wc,frame:Ei,stft:zc,inTopKAsync:Bg});function G(r,t){Array.isArray(r)||(r=[r]),r.forEach(function(e){e!=null&&E(e.dtype!=="complex64",function(){return t+" does not support complex64 tensors."})})}function go(r,t,e,n){if(e==="linear")return r.linear(t);if(e==="relu")return r.relu(t);if(e==="elu")return r.elu(t);if(e==="relu6")return r.relu6(t);if(e==="prelu")return r.prelu(t,n);throw new Error("Activation "+e+" has not been implemented for the CPU backend.")}var cm=function(r){function t(){var e=r.call(this)||this;return e.blockSize=48,e.firstUse=!0,e.data=new Gu(e,N),e}return It(t,r),t.prototype.write=function(e,n,a){this.firstUse&&(this.firstUse=!1,O().get("IS_NODE")&&ua(`
============================
Hi there 👋. Looks like you are running TensorFlow.js in Node.js. To speed things up dramatically, install our node backend, which binds to TensorFlow C++, by running npm i @tensorflow/tfjs-node, or npm i @tensorflow/tfjs-node-gpu if you have CUDA. Then call require('@tensorflow/tfjs-node'); (-gpu suffix for CUDA) at the start of your program. Visit https://github.com/tensorflow/tfjs-node for more details.
============================`));var o={};return this.data.set(o,{values:e,dtype:a}),o},t.prototype.move=function(e,n,a,o){this.data.set(e,{values:n,dtype:o})},t.prototype.numDataIds=function(){return this.data.numDataIds()},t.prototype.read=function(e){return Y(this,void 0,void 0,function(){return $(this,function(n){return[2,this.readSync(e)]})})},t.prototype.readSync=function(e){var n=this.data.get(e),a=n.dtype,o=n.complexTensors;return a==="complex64"?Uo(this.readSync(o.real.dataId),this.readSync(o.imag.dataId)):this.data.get(e).values},t.prototype.bufferSync=function(e){var n=this.readSync(e.dataId),a=n;if(e.dtype==="string")try{a=n.map(function(o){return oa(o)})}catch{throw new Error("Failed to decode encoded string bytes into utf-8")}return oe(e.shape,e.dtype,a)},t.prototype.makeOutput=function(e,n,a){var o=this.write(e,n,a);return N.makeTensorFromDataId(o,n,a,this)},t.prototype.disposeData=function(e){if(this.data.has(e)){var n=this.data.get(e).complexTensors;n!=null&&(n.real.dispose(),n.imag.dispose()),this.data.delete(e)}},t.prototype.time=function(e){return Y(this,void 0,void 0,function(){var n;return $(this,function(a){return n=Ft(),e(),[2,{kernelMs:Ft()-n}]})})},t.prototype.memory=function(){return{unreliable:!0,reasons:["The reported memory is an upper bound. Due to automatic garbage collection, the true allocated memory may be less."]}},t.prototype.complex=function(e,n){var a=this.makeOutput(null,e.shape,"complex64");return this.data.get(a.dataId).complexTensors={real:N.keep(e.clone()),imag:N.keep(n.clone())},a},t.prototype.real=function(e){return this.data.get(e.dataId).complexTensors.real.clone()},t.prototype.imag=function(e){return this.data.get(e.dataId).complexTensors.imag.clone()},t.prototype.slice=function(e,n,a){if(G(e,"slice"),Uu(e.shape,n,a)){var o=Vu(n,e.strides),i=Z(a);return qe(this.readSync(e.dataId).subarray(o,o+i),a,e.dtype)}for(var s=oe(a,e.dtype),u=this.bufferSync(e),c=0;c<s.size;++c){var l=s.indexToLoc(c).map(function(h,d){return h+n[d]});s.values[c]=u.get.apply(u,l)}return s.toTensor()},t.prototype.stridedSlice=function(e,n,a,o){G(e,"stridedSlice");var i=ui(n,a,o);if(i.some(function(f){return f===0}))return qe([],i);for(var s=oe(i,e.dtype),u=this.bufferSync(e),c=0;c<s.size;c++){for(var l=s.indexToLoc(c),h=new Array(l.length),d=0;d<h.length;d++)h[d]=l[d]*o[d]+n[d];s.set.apply(s,[u.get.apply(u,h)].concat(l))}return s.toTensor()},t.prototype.diag=function(e){for(var n=this.readSync(e.dataId),a=oe([e.size,e.size],e.dtype),o=a.values,i=0;i<n.length;i++)o[i*e.size+i]=n[i];return a.toTensor()},t.prototype.unstack=function(e,n){for(var a=e.shape[n],o=new Array(e.rank-1),i=0,s=0;s<e.rank;s++)s!==n&&(o[i++]=e.shape[s]);var u=new Array(e.rank).fill(0),c=e.shape.slice();c[n]=1;var l=new Array(a);for(s=0;s<l.length;s++)u[n]=s,l[s]=this.slice(e,u,c).reshape(o);return l},t.prototype.reverse=function(e,n){G(e,"reverse");for(var a=oe(e.shape,e.dtype),o=this.bufferSync(e),i=function(u){var c=a.indexToLoc(u),l=c.slice();n.forEach(function(h){return l[h]=e.shape[h]-1-l[h]}),a.set.apply(a,[o.get.apply(o,l)].concat(c))},s=0;s<a.size;s++)i(s);return a.toTensor()},t.prototype.concat=function(e,n){var a=this;if(e[0].dtype==="complex64"){var o=e.map(function(f){return gt(f)}),i=e.map(function(f){return Mt(f)});return He(this.concat(o,n),this.concat(i,n))}var s=e.map(function(f){var p=Z(f.shape.slice(n));return f.as2D(-1,p)}),u=ar(s.map(function(f){return f.shape}),1),c=oe(u,e[0].dtype).values;if(s[0].shape[0]===1){var l=0;s.forEach(function(f){c.set(a.readSync(f.dataId),l),l+=f.size})}else{var h=0;s.forEach(function(f){for(var p=a.readSync(f.dataId),g=0,v=0;v<f.shape[0];++v)for(var m=v*u[1]+h,b=0;b<f.shape[1];++b)c[m+b]=p[g++];h+=f.shape[1]})}var d=ar(e.map(function(f){return f.shape}),n);return qe(c,d,e[0].dtype)},t.prototype.neg=function(e){return G(e,"neg"),this.multiply(q(-1),e)},t.prototype.add=function(e,n){return e.dtype==="complex64"||n.dtype==="complex64"?this.broadcastedBinaryComplexOp(e.cast("complex64"),n.cast("complex64"),function(a,o,i,s){return{real:a+i,imag:o+s}}):this.broadcastedBinaryOp(e,n,je(e.dtype,n.dtype),function(a,o){return a+o})},t.prototype.addN=function(e){var n=this;G(e,"addN");for(var a=e.map(function(l){return n.readSync(l.dataId)}),o=oe(e[0].shape,e[0].dtype),i=o.values,s=0;s<e.length;s++)for(var u=a[s],c=0;c<i.length;c++)i[c]+=u[c];return o.toTensor()},t.prototype.softmax=function(e,n){var a=We([n],e.shape),o=this.max(e,a),i=at(o.shape,a),s=this.subtract(e,o.reshape(i)),u=this.exp(s),c=this.sum(u,a).reshape(i);return this.realDivide(u,c)},t.prototype.subtract=function(e,n){return e.dtype==="complex64"||n.dtype==="complex64"?this.broadcastedBinaryComplexOp(e.cast("complex64"),n.cast("complex64"),function(a,o,i,s){return{real:a-i,imag:o-s}}):this.broadcastedBinaryOp(e,n,je(e.dtype,n.dtype),function(a,o){return a-o})},t.prototype.pow=function(e,n){return G([e,n],"pow"),this.broadcastedBinaryOp(e,n,e.dtype,function(a,o){return Math.pow(a,o)})},t.prototype.batchMatMul=function(e,n,a,o){G([e,n],"matMul");for(var i=a?e.shape[1]:e.shape[2],s=a?e.shape[2]:e.shape[1],u=o?n.shape[1]:n.shape[2],c=e.shape[0],l=this.readSync(e.dataId),h=this.readSync(n.dataId),d=a?[e.strides[0],1,e.strides[1]]:[e.strides[0],e.strides[1],1],f=d[0],p=d[1],g=d[2],v=o?[1,n.strides[1],n.strides[0]]:[n.strides[1],1,n.strides[0]],m=v[0],b=v[1],x=v[2],y=s*u,w=oe([c,s,u],e.dtype),C=w.values,R=this.blockSize,S=0;S<c;S++)for(var I=0;I<s;I+=R)for(var k=0;k<u;k+=R)for(var F=0;F<i;F+=R)for(var T=Math.min(I+R,s),W=Math.min(k+R,u),B=Math.min(F+R,i),L=I;L<T;L++)for(var V=k;V<W;V++){for(var U=0,z=F;z<B;z++)U+=l[S*f+L*p+z*g]*h[z*m+V*b+S*x];C[S*y+(L*u+V)]+=U}return w.toTensor()},t.prototype.fusedBatchMatMul=function(e){var n=e.a,a=e.b,o=e.transposeA,i=e.transposeB,s=e.bias,u=e.activation,c=e.preluActivationWeights,l=this.batchMatMul(n,a,o,i);return s&&(l=this.add(l,s)),u&&(l=go(this,l,u,c)),l},t.prototype.multiply=function(e,n){return e.dtype==="complex64"||n.dtype==="complex64"?this.broadcastedBinaryComplexOp(e.cast("complex64"),n.cast("complex64"),function(a,o,i,s){return{real:a*i-o*s,imag:a*s+o*i}}):this.broadcastedBinaryOp(e,n,je(e.dtype,n.dtype),function(a,o){return a*o})},t.prototype.realDivide=function(e,n){return G([e,n],"realDivide"),this.broadcastedBinaryOp(e,n,"float32",function(a,o){return a/o})},t.prototype.floorDiv=function(e,n){return G([e,n],"floorDiv"),this.broadcastedBinaryOp(e,n,"int32",function(a,o){return Math.floor(a/o)})},t.prototype.sum=function(e,n){G(e,"sum"),st("sum",n,e.rank);for(var a=Ke(e.shape,n),o=a[0],i=a[1],s=_e(o,je(e.dtype,"int32")),u=Z(i),c=this.readSync(s.dataId),l=this.readSync(e.dataId),h=0;h<c.length;++h){for(var d=h*u,f=0,p=0;p<u;++p)f+=l[d+p];c[h]=f}return s},t.prototype.prod=function(e,n){G(e,"sum");for(var a=Ke(e.shape,n),o=a[0],i=a[1],s=_e(o,je(e.dtype,"int32")),u=Z(i),c=this.readSync(s.dataId),l=this.readSync(e.dataId),h=0;h<c.length;++h){for(var d=h*u,f=1,p=0;p<u;++p)f*=l[d+p];c[h]=f}return s},t.prototype.unsortedSegmentSum=function(e,n,a){G(e,"unsortedSegmentSum");for(var o=[],i=e.rank-n.rank,s=0;s<i;++s)n=n.expandDims(s+1);for(s=0;s<a;++s){var u=q(s,"int32"),c=xc(u,n).asType("float32").mul(e).sum(0);o.push(c)}return pt(o)},t.prototype.argMin=function(e,n){G(e,"argMin");var a=[n];st("argMin",a,e.rank);for(var o=Ke(e.shape,a),i=o[0],s=o[1],u=_e(i,"int32"),c=Z(s),l=this.readSync(u.dataId),h=this.readSync(e.dataId),d=0;d<l.length;++d){for(var f=d*c,p=h[f],g=0,v=0;v<c;++v){var m=h[f+v];m<p&&(p=m,g=v)}l[d]=g}return u},t.prototype.argMax=function(e,n){G(e,"argMax");var a=[n];st("argMax",a,e.rank);for(var o=Ke(e.shape,a),i=o[0],s=o[1],u=_e(i,"int32"),c=Z(s),l=this.readSync(u.dataId),h=this.readSync(e.dataId),d=0;d<l.length;++d){for(var f=d*c,p=h[f],g=0,v=0;v<c;++v){var m=h[f+v];m>p&&(p=m,g=v)}l[d]=g}return u},t.prototype.cumsum=function(e,n,a,o){if(G(e,"cumsum"),n!==e.rank-1)throw new Error("backend.cumsum in CPU expects an inner-most axis="+(e.rank-1)+" but got axis="+n);for(var i=je(e.dtype,"int32"),s=_e(e.shape,i),u=this.readSync(s.dataId),c=this.readSync(e.dataId),l=e.shape[e.rank-1],h=o?function(v,m){return v+l-m-1}:function(v,m){return v+m},d=0;d<c.length;d+=l)for(var f=0;f<l;f++){var p=h(d,f);if(f===0)u[p]=a?0:c[p];else{var g=h(d,f-1);u[p]=a?c[g]+u[g]:c[p]+u[g]}}return s},t.prototype.equal=function(e,n){return G([e,n],"equal"),this.broadcastedBinaryOp(e,n,"bool",function(a,o){return a===o?1:0})},t.prototype.notEqual=function(e,n){return G([e,n],"notEqual"),this.broadcastedBinaryOp(e,n,"bool",function(a,o){return a!==o?1:0})},t.prototype.less=function(e,n){return G([e,n],"less"),this.broadcastedBinaryOp(e,n,"bool",function(a,o){return a<o?1:0})},t.prototype.lessEqual=function(e,n){return G([e,n],"lessEqual"),this.broadcastedBinaryOp(e,n,"bool",function(a,o){return a<=o?1:0})},t.prototype.greater=function(e,n){return G([e,n],"greater"),this.broadcastedBinaryOp(e,n,"bool",function(a,o){return a>o?1:0})},t.prototype.greaterEqual=function(e,n){return G([e,n],"greaterEqual"),this.broadcastedBinaryOp(e,n,"bool",function(a,o){return a>=o?1:0})},t.prototype.logicalNot=function(e){G(e,"logicalNot");for(var n=this.readSync(e.dataId),a=new Uint8Array(n.length),o=0;o<n.length;++o)a[o]=n[o]?0:1;return this.makeOutput(a,e.shape,"bool")},t.prototype.logicalAnd=function(e,n){return G([e,n],"logicalAnd"),this.broadcastedBinaryOp(e,n,"bool",function(a,o){return a&&o})},t.prototype.logicalOr=function(e,n){return G([e,n],"logicalOr"),this.broadcastedBinaryOp(e,n,"bool",function(a,o){return a||o})},t.prototype.select=function(e,n,a){G([e,n,a],"select");for(var o=this.readSync(e.dataId),i=this.readSync(n.dataId),s=this.readSync(a.dataId),u=_e(n.shape,je(n.dtype,a.dtype)),c=this.readSync(u.dataId),l=0,h=e.rank===0||e.rank>1||n.rank===1?1:Z(n.shape.slice(1)),d=0;d<o.length;d++)for(var f=0;f<h;f++)o[d]===1?c[l++]=i[d]:c[l++]=s[d];return u},t.prototype.where=function(e){G([e],"where");var n=this.readSync(e.dataId);return di(e.shape,n)},t.prototype.topk=function(e,n,a){return G(e,"topk"),Zu(this.readSync(e.dataId),e.shape,e.dtype,n)},t.prototype.min=function(e,n){G(e,"min"),st("min",n,e.rank);for(var a=Ke(e.shape,n),o=a[0],i=a[1],s=_e(o,e.dtype),u=Z(i),c=this.readSync(s.dataId),l=this.readSync(e.dataId),h=0;h<c.length;++h){for(var d=h*u,f=l[d],p=0;p<u;++p){var g=l[d+p];g<f&&(f=g)}c[h]=f}return s},t.prototype.minimum=function(e,n){return G([e,n],"minimum"),this.broadcastedBinaryOp(e,n,e.dtype,function(a,o){return Math.min(a,o)})},t.prototype.mod=function(e,n){return G([e,n],"mod"),this.broadcastedBinaryOp(e,n,e.dtype,function(a,o){var i=a%o;return a<0&&o<0||a>=0&&o>=0?i:(i+o)%o})},t.prototype.max=function(e,n){G(e,"max"),st("max",n,e.rank);for(var a=Ke(e.shape,n),o=a[0],i=a[1],s=_e(o,e.dtype),u=Z(i),c=this.readSync(s.dataId),l=this.readSync(e.dataId),h=0;h<c.length;++h){for(var d=h*u,f=l[d],p=0;p<u;++p){var g=l[d+p];g>f&&(f=g)}c[h]=f}return s},t.prototype.maximum=function(e,n){return G([e,n],"maximum"),this.broadcastedBinaryOp(e,n,e.dtype,function(a,o){return Math.max(a,o)})},t.prototype.all=function(e,n){G(e,"all"),st("all",n,e.rank);for(var a=Ke(e.shape,n),o=a[0],i=a[1],s=_e(o,e.dtype),u=Z(i),c=this.readSync(s.dataId),l=this.readSync(e.dataId),h=0;h<c.length;++h){for(var d=h*u,f=l[d],p=0;p<u;++p){var g=l[d+p];f=f&&g}c[h]=f}return s},t.prototype.any=function(e,n){G(e,"any"),st("any",n,e.rank);for(var a=Ke(e.shape,n),o=a[0],i=a[1],s=_e(o,e.dtype),u=Z(i),c=this.readSync(s.dataId),l=this.readSync(e.dataId),h=0;h<c.length;++h){for(var d=h*u,f=l[d],p=0;p<u;++p){var g=l[d+p];f=f||g}c[h]=f}return s},t.prototype.squaredDifference=function(e,n){return G([e,n],"squaredDifference"),this.broadcastedBinaryOp(e,n,e.dtype,function(a,o){var i=a-o;return i*i})},t.prototype.ceil=function(e){G(e,"ceil");for(var n=this.readSync(e.dataId),a=new Float32Array(n.length),o=0;o<n.length;++o)a[o]=Math.ceil(n[o]);return this.makeOutput(a,e.shape,"float32")},t.prototype.floor=function(e){G(e,"floor");for(var n=this.readSync(e.dataId),a=new Float32Array(n.length),o=0;o<n.length;++o)a[o]=Math.floor(n[o]);return this.makeOutput(a,e.shape,"float32")},t.prototype.sign=function(e){G(e,"x");for(var n=this.readSync(e.dataId),a=new Float32Array(n.length),o=0;o<n.length;++o)n[o]<0?a[o]=-1:n[o]>0?a[o]=1:a[o]=0;return this.makeOutput(a,e.shape,"float32")},t.prototype.isNaN=function(e){G(e,"x");for(var n=this.readSync(e.dataId),a=new Uint8Array(n.length),o=0;o<n.length;++o)Number.isNaN(n[o])&&(a[o]=1);return this.makeOutput(a,e.shape,"bool")},t.prototype.isInf=function(e){G(e,"x");for(var n=this.readSync(e.dataId),a=new Uint8Array(n.length),o=0;o<n.length;++o)Math.abs(n[o])===1/0&&(a[o]=1);return this.makeOutput(a,e.shape,"bool")},t.prototype.isFinite=function(e){G(e,"x");for(var n=this.readSync(e.dataId),a=new Uint8Array(n.length),o=0;o<n.length;++o)Number.isFinite(n[o])&&(a[o]=1);return this.makeOutput(a,e.shape,"bool")},t.prototype.round=function(e){G(e,"round");for(var n=this.readSync(e.dataId),a=new Float32Array(n.length),o=0;o<n.length;++o){var i=Math.floor(n[o]);n[o]-i<.5?a[o]=Math.floor(n[o]):n[o]-i>.5?a[o]=Math.ceil(n[o]):a[o]=i%2==0?i:i+1}return this.makeOutput(a,e.shape,"float32")},t.prototype.exp=function(e){G(e,"exp");for(var n=this.readSync(e.dataId),a=new Float32Array(n.length),o=0;o<n.length;++o)a[o]=Math.exp(n[o]);return this.makeOutput(a,e.shape,"float32")},t.prototype.expm1=function(e){G(e,"expm1");for(var n=this.readSync(e.dataId),a=new Float32Array(n.length),o=0;o<n.length;++o)a[o]=Math.expm1(n[o]);return this.makeOutput(a,e.shape,"float32")},t.prototype.log=function(e){G(e,"log");for(var n=this.readSync(e.dataId),a=new Float32Array(n.length),o=0;o<n.length;++o){var i=n[o];a[o]=Math.log(i)}return this.makeOutput(a,e.shape,"float32")},t.prototype.log1p=function(e){G(e,"log1p");for(var n=this.readSync(e.dataId),a=new Float32Array(n.length),o=0;o<n.length;++o){var i=n[o];a[o]=Math.log1p(i)}return this.makeOutput(a,e.shape,"float32")},t.prototype.sqrt=function(e){G(e,"sqrt");for(var n=this.readSync(e.dataId),a=new Float32Array(n.length),o=0;o<n.length;++o){var i=n[o];a[o]=Math.sqrt(i)}return this.makeOutput(a,e.shape,"float32")},t.prototype.rsqrt=function(e){G(e,"rsqrt");for(var n=this.readSync(e.dataId),a=new Float32Array(n.length),o=0;o<n.length;++o){var i=n[o];a[o]=1/Math.sqrt(i)}return this.makeOutput(a,e.shape,"float32")},t.prototype.reciprocal=function(e){G(e,"reciprocal");for(var n=this.readSync(e.dataId),a=new Float32Array(n.length),o=0;o<n.length;++o)a[o]=1/n[o];return this.makeOutput(a,e.shape,"float32")},t.prototype.linear=function(e){return e},t.prototype.relu=function(e){G(e,"relu");for(var n=_e(e.shape,e.dtype),a=this.readSync(n.dataId),o=this.readSync(e.dataId),i=0;i<o.length;++i)a[i]=Math.max(0,o[i]);return n},t.prototype.relu6=function(e){G(e,"relu");for(var n=_e(e.shape,e.dtype),a=this.readSync(n.dataId),o=this.readSync(e.dataId),i=0;i<o.length;++i)a[i]=Math.min(Math.max(0,o[i]),6);return n},t.prototype.prelu=function(e,n){return G([e,n],"prelu"),this.broadcastedBinaryOp(e,n,e.dtype,function(a,o){return a<0?o*a:a})},t.prototype.elu=function(e){G(e,"elu");for(var n=new Float32Array(e.size),a=this.readSync(e.dataId),o=0;o<a.length;++o){var i=a[o];n[o]=i>=0?i:Math.exp(i)-1}return this.makeOutput(n,e.shape,"float32")},t.prototype.eluDer=function(e,n){G([e,n],"eluDer");for(var a=new Float32Array(n.size),o=this.readSync(n.dataId),i=this.readSync(e.dataId),s=0;s<o.length;++s){var u=o[s];a[s]=u>=1?i[s]:i[s]*(u+1)}return this.makeOutput(a,n.shape,"float32")},t.prototype.selu=function(e){G(e,"selu");for(var n=pi,a=vi,o=new Float32Array(e.size),i=this.readSync(e.dataId),s=0;s<i.length;++s){var u=i[s];o[s]=u>=0?a*u:n*(Math.exp(u)-1)}return this.makeOutput(o,e.shape,"float32")},t.prototype.clip=function(e,n,a){G(e,"clip");for(var o=new Float32Array(e.size),i=this.readSync(e.dataId),s=0;s<i.length;++s){var u=i[s];o[s]=u>a?a:u<n?n:u}return this.makeOutput(o,e.shape,"float32")},t.prototype.abs=function(e){for(var n=new Float32Array(e.size),a=this.readSync(e.dataId),o=0;o<a.length;++o)n[o]=Math.abs(a[o]);return this.makeOutput(n,e.shape,"float32")},t.prototype.complexAbs=function(e){for(var n=new Float32Array(e.size),a=this.readSync(e.dataId),o=0;o<e.size;++o){var i=a[2*o],s=a[2*o+1];n[o]=Math.hypot(i,s)}return this.makeOutput(n,e.shape,"float32")},t.prototype.int=function(e){G(e,"int");for(var n=new Int32Array(e.size),a=this.readSync(e.dataId),o=0;o<a.length;++o)n[o]=a[o];return this.makeOutput(n,e.shape,"int32")},t.prototype.sigmoid=function(e){G(e,"sigmoid");for(var n=new Float32Array(e.size),a=this.readSync(e.dataId),o=0;o<a.length;++o)n[o]=1/(1+Math.exp(-a[o]));return this.makeOutput(n,e.shape,"float32")},t.prototype.softplus=function(e){G(e,"softplus");for(var n=Math.log(11920928955078125e-23)+2,a=new Float32Array(e.size),o=this.readSync(e.dataId),i=0;i<o.length;++i){var s=o[i]>-n,u=o[i]<n,c=Math.exp(o[i]),l=void 0;l=u?c:s?o[i]:Math.log(1+c),a[i]=l}return this.makeOutput(a,e.shape,"float32")},t.prototype.sin=function(e){G(e,"sin");for(var n=new Float32Array(e.size),a=this.readSync(e.dataId),o=0;o<a.length;++o)n[o]=Math.sin(a[o]);return this.makeOutput(n,e.shape,"float32")},t.prototype.cos=function(e){G(e,"cos");for(var n=new Float32Array(e.size),a=this.readSync(e.dataId),o=0;o<a.length;++o)n[o]=Math.cos(a[o]);return this.makeOutput(n,e.shape,"float32")},t.prototype.tan=function(e){G(e,"tan");for(var n=new Float32Array(e.size),a=this.readSync(e.dataId),o=0;o<a.length;++o)n[o]=Math.tan(a[o]);return this.makeOutput(n,e.shape,"float32")},t.prototype.asin=function(e){G(e,"asin");for(var n=new Float32Array(e.size),a=this.readSync(e.dataId),o=0;o<a.length;++o)n[o]=Math.asin(a[o]);return this.makeOutput(n,e.shape,"float32")},t.prototype.acos=function(e){G(e,"acos");for(var n=new Float32Array(e.size),a=this.readSync(e.dataId),o=0;o<a.length;++o)n[o]=Math.acos(a[o]);return this.makeOutput(n,e.shape,"float32")},t.prototype.atan=function(e){G(e,"atan");for(var n=new Float32Array(e.size),a=this.readSync(e.dataId),o=0;o<a.length;++o)n[o]=Math.atan(a[o]);return this.makeOutput(n,e.shape,"float32")},t.prototype.atan2=function(e,n){return G([e,n],"atan2"),this.broadcastedBinaryOp(e,n,e.dtype,function(a,o){return Math.atan2(a,o)})},t.prototype.sinh=function(e){G(e,"sinh");for(var n=new Float32Array(e.size),a=this.readSync(e.dataId),o=0;o<a.length;++o)n[o]=Math.sinh(a[o]);return this.makeOutput(n,e.shape,"float32")},t.prototype.cosh=function(e){G(e,"cosh");for(var n=new Float32Array(e.size),a=this.readSync(e.dataId),o=0;o<a.length;++o)n[o]=Math.cosh(a[o]);return this.makeOutput(n,e.shape,"float32")},t.prototype.tanh=function(e){G(e,"tanh");for(var n=new Float32Array(e.size),a=this.readSync(e.dataId),o=0;o<a.length;++o)n[o]=ch(a[o]);return this.makeOutput(n,e.shape,"float32")},t.prototype.asinh=function(e){G(e,"asinh");for(var n=new Float32Array(e.size),a=this.readSync(e.dataId),o=0;o<a.length;++o)n[o]=Math.asinh(a[o]);return this.makeOutput(n,e.shape,"float32")},t.prototype.acosh=function(e){G(e,"acosh");for(var n=new Float32Array(e.size),a=this.readSync(e.dataId),o=0;o<a.length;++o)n[o]=Math.acosh(a[o]);return this.makeOutput(n,e.shape,"float32")},t.prototype.atanh=function(e){G(e,"atanh");for(var n=new Float32Array(e.size),a=this.readSync(e.dataId),o=0;o<a.length;++o)n[o]=Math.atanh(a[o]);return this.makeOutput(n,e.shape,"float32")},t.prototype.erf=function(e){G(e,"erf");for(var n=new Float32Array(e.size),a=this.readSync(e.dataId),o=0;o<a.length;++o){var i=Math.sign(a[o]),s=Math.abs(a[o]),u=1/(1+.3275911*s);n[o]=i*(1-((((1.061405429*u-1.453152027)*u+1.421413741)*u-.284496736)*u+.254829592)*u*Math.exp(-s*s))}return this.makeOutput(n,e.shape,"float32")},t.prototype.step=function(e,n){n===void 0&&(n=0),G(e,"step");for(var a=new Float32Array(e.size),o=this.readSync(e.dataId),i=0;i<o.length;++i){var s=o[i];isNaN(s)?a[i]=NaN:a[i]=s>0?1:n}return this.makeOutput(a,e.shape,"float32")},t.prototype.fusedConv2d=function(e){var n=e.input,a=e.filter,o=e.convInfo,i=e.bias,s=e.activation,u=e.preluActivationWeights,c=this.conv2d(n,a,o);return i&&(c=this.add(c,i)),s&&(c=go(this,c,s,u)),c},t.prototype.conv2d=function(e,n,a){G([e,n],"conv2d");for(var o=a.filterHeight,i=a.filterWidth,s=a.dilationHeight,u=a.dilationWidth,c=a.padInfo.left,l=a.padInfo.top,h=a.dataFormat==="channelsLast",d=oe(a.outShape,e.dtype),f=e.strides[0],p=h?e.strides[1]:e.strides[2],g=h?e.strides[2]:1,v=h?1:e.strides[1],m=d.strides[0],b=h?d.strides[1]:d.strides[2],x=h?d.strides[2]:1,y=h?1:d.strides[1],w=this.readSync(e.dataId),C=this.readSync(n.dataId),R=d.values,S=0;S<a.batchSize;++S)for(var I=S*f,k=S*m,F=0;F<a.outHeight;++F)for(var T=k+F*b,W=F*a.strideHeight-l,B=0;B<o;B++){var L=W+B*s;if(!(L<0||L>=a.inHeight))for(var V=B*n.strides[0],U=I+L*p,z=0;z<a.outWidth;++z)for(var H=T+z*x,j=z*a.strideWidth-c,K=0;K<i;K++){var te=j+K*u;if(!(te<0||te>=a.inWidth))for(var ne=U+te*g,ue=V+K*n.strides[1],ce=0;ce<a.inChannels;++ce){for(var he=w[ne+ce*v],ve=0;ve<a.outChannels;++ve)R[H+ve*y]+=he*C[ue+ve];ue+=a.outChannels}}}return d.toTensor()},t.prototype.conv3d=function(e,n,a){for(var o=a.filterDepth,i=a.filterHeight,s=a.filterWidth,u=a.dilationDepth,c=a.dilationHeight,l=a.dilationWidth,h=a.padInfo.front,d=a.padInfo.left,f=a.padInfo.top,p=oe(a.outShape,e.dtype),g=this.readSync(e.dataId),v=this.readSync(n.dataId),m=p.values,b=0;b<a.batchSize;++b)for(var x=b*e.strides[0],y=b*p.strides[0],w=0;w<a.outDepth;++w)for(var C=y+w*p.strides[1],R=w*a.strideDepth-h,S=0;S<o;S++){var I=R+S*u;if(!(I<0||I>=a.inDepth))for(var k=S*n.strides[0],F=x+I*e.strides[1],T=0;T<a.outHeight;++T)for(var W=C+T*p.strides[2],B=T*a.strideHeight-f,L=0;L<i;L++){var V=B+L*c;if(!(V<0||V>=a.inHeight))for(var U=k+L*n.strides[1],z=F+V*e.strides[2],H=0;H<a.outWidth;++H)for(var j=W+H*a.outChannels,K=H*a.strideWidth-d,te=0;te<s;te++){var ne=K+te*l;if(!(ne<0||ne>=a.inWidth))for(var ue=U+te*n.strides[2],ce=z+ne*a.inChannels,he=ue,ve=0;ve<a.inChannels;++ve){for(var fe=g[ce+ve],ge=0;ge<a.outChannels;++ge)m[j+ge]+=fe*v[he+ge];he+=a.outChannels}}}}return p.toTensor()},t.prototype.conv2dDerInput=function(e,n,a){G([e,n],"conv2dDerInput");for(var o=oe(a.inShape,"float32"),i=o.values,s=this.readSync(e.dataId),u=this.readSync(n.dataId),c=n.strides,l=c[0],h=c[1],d=c[2],f=a.batchSize,p=a.filterHeight,g=a.filterWidth,v=a.inChannels,m=a.inHeight,b=a.inWidth,x=a.outChannels,y=a.outHeight,w=a.outWidth,C=a.strideHeight,R=a.strideWidth,S=a.dataFormat,I=p-1-a.padInfo.top,k=g-1-a.padInfo.left,F=S==="channelsLast",T=o.strides[0],W=F?o.strides[1]:o.strides[2],B=F?o.strides[2]:1,L=F?1:o.strides[1],V=e.strides[0],U=F?e.strides[1]:e.strides[2],z=F?e.strides[2]:1,H=F?1:e.strides[1],j=0;j<f;++j)for(var K=0;K<v;++K)for(var te=0;te<m;++te)for(var ne=te-I,ue=Math.max(0,Math.ceil(ne/C)),ce=Math.min(y,(p+ne)/C),he=0;he<b;++he){for(var ve=he-k,fe=Math.max(0,Math.ceil(ve/R)),ge=Math.min(w,(g+ve)/R),Ne=0,pe=ue;pe<ce;++pe)for(var we=pe*C-ne,ye=fe;ye<ge;++ye)for(var Ae=V*j+U*pe+z*ye,Ee=l*(p-1-we)+h*(g-1-(ye*R-ve))+d*K,Ie=0;Ie<x;++Ie)Ne+=s[Ae+H*Ie]*u[Ee+Ie];i[T*j+W*te+B*he+L*K]=Ne}return o.toTensor()},t.prototype.conv3dDerInput=function(e,n,a){for(var o=oe(a.inShape,"float32"),i=o.values,s=o.strides,u=s[0],c=s[1],l=s[2],h=s[3],d=this.readSync(e.dataId),f=e.strides,p=f[0],g=f[1],v=f[2],m=f[3],b=this.readSync(n.dataId),x=n.strides,y=x[0],w=x[1],C=x[2],R=x[3],S=a.batchSize,I=a.filterDepth,k=a.filterHeight,F=a.filterWidth,T=a.inChannels,W=a.inDepth,B=a.inHeight,L=a.inWidth,V=a.outChannels,U=a.outDepth,z=a.outHeight,H=a.outWidth,j=a.strideDepth,K=a.strideHeight,te=a.strideWidth,ne=I-1-a.padInfo.front,ue=k-1-a.padInfo.top,ce=F-1-a.padInfo.left,he=0;he<S;++he)for(var ve=0;ve<T;++ve)for(var fe=0;fe<W;++fe)for(var ge=fe-ne,Ne=Math.max(0,Math.ceil(ge/j)),pe=Math.min(U,(I+ge)/j),we=0;we<B;++we)for(var ye=we-ue,Ae=Math.max(0,Math.ceil(ye/K)),Ee=Math.min(z,(k+ye)/K),Ie=0;Ie<L;++Ie){for(var Rt=Ie-ce,At=Math.max(0,Math.ceil(Rt/te)),it=Math.min(H,(F+Rt)/te),Wn=0,jt=Ne;jt<pe;++jt)for(var on=jt*j-ge,qt=Ae;qt<Ee;++qt)for(var zn=qt*K-ye,Kt=At;Kt<it;++Kt)for(var Ka=p*he+g*jt+v*qt+m*Kt,Un=y*(I-1-on)+w*(k-1-zn)+C*(F-1-(Kt*te-Rt))+R*ve,Dt=0;Dt<V;++Dt)Wn+=d[Ka+Dt]*b[Un+Dt];i[u*he+c*fe+l*we+h*Ie+ve]=Wn}return o.toTensor()},t.prototype.conv2dDerFilter=function(e,n,a){G([e,n],"conv2dDerFilter");for(var o=a.strideHeight,i=a.strideWidth,s=a.filterHeight,u=a.filterWidth,c=a.dataFormat==="channelsLast",l=oe(a.filterShape,"float32"),h=a.padInfo.left,d=a.padInfo.top,f=this.bufferSync(e),p=this.bufferSync(n),g=0;g<s;++g)for(var v=Math.max(0,Math.ceil((d-g)/o)),m=Math.min(a.outHeight,(a.inHeight+d-g)/o),b=0;b<u;++b)for(var x=Math.max(0,Math.ceil((h-b)/i)),y=Math.min(a.outWidth,(a.inWidth+h-b)/i),w=0;w<a.inChannels;++w)for(var C=0;C<a.outChannels;++C){for(var R=0,S=0;S<a.batchSize;++S)for(var I=v;I<m;++I)for(var k=g+I*o-d,F=x;F<y;++F){var T=b+F*i-h;R+=c?f.get(S,k,T,w)*p.get(S,I,F,C):f.get(S,w,k,T)*p.get(S,C,I,F)}l.set(R,g,b,w,C)}return l.toTensor()},t.prototype.conv3dDerFilter=function(e,n,a){for(var o=a.strideDepth,i=a.strideHeight,s=a.strideWidth,u=a.filterDepth,c=a.filterHeight,l=a.filterWidth,h=oe(a.filterShape,"float32"),d=h.values,f=h.strides,p=f[0],g=f[1],v=f[2],m=f[3],b=this.readSync(n.dataId),x=n.strides,y=x[0],w=x[1],C=x[2],R=x[3],S=this.readSync(e.dataId),I=e.strides,k=I[0],F=I[1],T=I[2],W=I[3],B=a.padInfo.front,L=a.padInfo.left,V=a.padInfo.top,U=0;U<u;++U)for(var z=Math.max(0,Math.ceil((B-U)/o)),H=Math.min(a.outDepth,(a.inDepth+B-U)/o),j=U*p,K=0;K<c;++K)for(var te=Math.max(0,Math.ceil((V-K)/i)),ne=Math.min(a.outHeight,(a.inHeight+V-K)/i),ue=K*g+j,ce=0;ce<l;++ce)for(var he=Math.max(0,Math.ceil((L-ce)/s)),ve=Math.min(a.outWidth,(a.inWidth+L-ce)/s),fe=ce*v+ue,ge=0;ge<a.inChannels;++ge)for(var Ne=ge*m+fe,pe=0;pe<a.outChannels;++pe){for(var we=0,ye=0;ye<a.batchSize;++ye)for(var Ae=ye*k,Ee=ye*y,Ie=z;Ie<H;++Ie)for(var Rt=(U+Ie*o-B)*F+Ae,At=Ie*w+Ee,it=te;it<ne;++it)for(var Wn=(K+it*i-V)*T+Rt,jt=it*C+At,on=he;on<ve;++on){var qt=on*R+jt;we+=S[(ce+on*s-L)*W+Wn+ge]*b[qt+pe]}d[Ne+pe]=we}return h.toTensor()},t.prototype.fusedDepthwiseConv2D=function(e){var n=e.input,a=e.filter,o=e.convInfo,i=e.bias,s=e.activation,u=e.preluActivationWeights,c=this.depthwiseConv2D(n,a,o);return i&&(c=this.add(c,i)),s&&(c=go(this,c,s,u)),c},t.prototype.depthwiseConv2D=function(e,n,a){G([e,n],"depthwiseConv2D");for(var o=a.filterHeight,i=a.filterWidth,s=a.dilationHeight,u=a.dilationWidth,c=a.padInfo.left,l=a.padInfo.top,h=a.outChannels/a.inChannels,d=oe(a.outShape,e.dtype),f=this.readSync(e.dataId),p=this.readSync(n.dataId),g=d.values,v=0;v<a.batchSize;++v)for(var m=v*e.strides[0],b=v*d.strides[0],x=0;x<a.outHeight;++x)for(var y=b+x*d.strides[1],w=x*a.strideHeight-c,C=0;C<o;++C){var R=w+C*s;if(!(R<0||R>=a.inHeight))for(var S=C*n.strides[0],I=m+R*e.strides[1],k=0;k<a.outWidth;++k)for(var F=y+k*d.strides[2],T=k*a.strideWidth-l,W=0;W<i;++W){var B=T+W*u;if(!(B<0||B>=a.inWidth))for(var L=S+W*n.strides[1],V=I+B*a.inChannels,U=F,z=L,H=0;H<a.inChannels;++H){for(var j=f[V+H],K=0;K<h;++K)g[U+K]+=j*p[z+K];U+=h,z+=h}}}return d.toTensor()},t.prototype.depthwiseConv2DDerInput=function(e,n,a){G([e,n],"depthwiseConv2DDerInput");for(var o=oe(a.inShape,"float32"),i=o.values,s=o.strides,u=s[0],c=s[1],l=s[2],h=this.readSync(e.dataId),d=e.strides,f=d[0],p=d[1],g=d[2],v=this.readSync(n.dataId),m=n.strides,b=m[0],x=m[1],y=m[2],w=a.batchSize,C=a.filterHeight,R=a.filterWidth,S=a.inChannels,I=a.inHeight,k=a.inWidth,F=a.outChannels,T=a.outHeight,W=a.outWidth,B=a.strideHeight,L=a.strideWidth,V=C-1-a.padInfo.top,U=R-1-a.padInfo.left,z=F/S,H=0;H<w;++H)for(var j=0;j<S;++j)for(var K=0;K<I;++K)for(var te=K-V,ne=Math.max(0,Math.ceil(te/B)),ue=Math.min(T,(C+te)/B),ce=0;ce<k;++ce){for(var he=ce-U,ve=Math.max(0,Math.ceil(he/L)),fe=Math.min(W,(R+he)/L),ge=0,Ne=ne;Ne<ue;++Ne)for(var pe=Ne*B-te,we=ve;we<fe;++we)for(var ye=f*H+p*Ne+g*we,Ae=b*(C-1-pe)+x*(R-1-(we*L-he))+y*j,Ee=0;Ee<z;++Ee)ge+=h[ye+(j*z+Ee)]*v[Ae+Ee];i[u*H+c*K+l*ce+j]=ge}return o.toTensor()},t.prototype.depthwiseConv2DDerFilter=function(e,n,a){G([e,n],"depthwiseConv2DDerFilter");for(var o=a.strideHeight,i=a.strideWidth,s=a.filterHeight,u=a.filterWidth,c=oe(a.filterShape,"float32"),l=a.padInfo.left,h=a.padInfo.top,d=a.outChannels/a.inChannels,f=this.bufferSync(e),p=this.bufferSync(n),g=0;g<s;++g)for(var v=Math.max(0,Math.ceil((h-g)/o)),m=Math.min(a.outHeight,(a.inHeight+h-g)/o),b=0;b<u;++b)for(var x=Math.max(0,Math.ceil((l-b)/i)),y=Math.min(a.outWidth,(a.inWidth+l-b)/i),w=0;w<a.outChannels;++w){for(var C=Math.trunc(w/d),R=w%d,S=0,I=0;I<a.batchSize;++I)for(var k=v;k<m;++k)for(var F=g+k*o-h,T=x;T<y;++T){var W=b+T*i-l;S+=f.get(I,F,W,C)*p.get(I,k,T,w)}c.set(S,g,b,C,R)}return c.toTensor()},t.prototype.tile=function(e,n){return G(e,"tile"),$u(this.bufferSync(e),n)},t.prototype.pad=function(e,n,a){G(e,"pad");var o=n.map(function(d,f){return d[0]+e.shape[f]+d[1]}),i=n.map(function(d){return d[0]}),s=this.bufferSync(e),u=oe(o,e.dtype);a!==0&&u.values.fill(a);for(var c=0;c<e.size;c++){var l=s.indexToLoc(c),h=l.map(function(d,f){return d+i[f]});u.set.apply(u,[s.get.apply(s,l)].concat(h))}return u.toTensor()},t.prototype.transpose=function(e,n){G(e,"transpose");for(var a=new Array(e.rank),o=0;o<a.length;o++)a[o]=e.shape[n[o]];var i=this.readSync(e.dataId),s=oe(a,e.dtype),u=this.bufferSync(e);for(o=0;o<e.size;++o){for(var c=u.indexToLoc(o),l=new Array(c.length),h=0;h<l.length;h++)l[h]=c[n[h]];var d=s.locToIndex(l);s.values[d]=i[o]}return s.toTensor()},t.prototype.gather=function(e,n,a){G([e,n],"gather");var o=e.shape.slice(),i=this.readSync(n.dataId);o[a]=i.length;for(var s=oe(o,e.dtype),u=this.bufferSync(e),c=0;c<s.size;++c){var l=s.indexToLoc(c),h=l.slice();h[a]=i[l[a]];var d=u.locToIndex(h);s.values[c]=u.values[d]}return s.toTensor()},t.prototype.batchToSpaceND=function(e,n,a){G([e],"batchToSpaceND");var o=n.reduce(function(h,d){return h*d}),i=ha(e.shape,n,o),s=da(i.length,n.length),u=fa(e.shape,n,o),c=Bu(a,n.length),l=Lu(u,a,n.length);return e.reshape(i).transpose(s).reshape(u).slice(c,l)},t.prototype.spaceToBatchND=function(e,n,a){G([e],"spaceToBatchND");var o=n.reduce(function(d,f){return d*f}),i=[[0,0]];i.push.apply(i,a);for(var s=1+n.length;s<e.shape.length;++s)i.push([0,0]);var u=e.pad(i),c=ha(u.shape,n,o,!1),l=da(c.length,n.length,!1),h=fa(u.shape,n,o,!1);return u.reshape(c).transpose(l).reshape(h)},t.prototype.pool=function(e,n,a){G(e,"pool");for(var o=n.strideHeight,i=n.strideWidth,s=n.dilationHeight,u=n.dilationWidth,c=n.effectiveFilterHeight,l=n.effectiveFilterWidth,h=n.padInfo.top,d=n.padInfo.left,f=a==="max"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,p=this.readSync(e.dataId),g=oe(n.outShape,e.dtype),v=g.values,m=n.outShape[1]*n.outShape[2]*n.outShape[3],b=n.outShape[2]*n.outShape[3],x=n.outShape[3],y=0;y<n.batchSize;++y)for(var w=y*m,C=y*e.strides[0],R=0;R<n.inChannels;++R)for(var S=0;S<n.outHeight;++S)for(var I=S*o-h,k=Math.max(0,I),F=Math.min(n.inHeight,c+I),T=w+S*b,W=0;W<n.outWidth;++W){for(var B=W*i-d,L=Math.max(0,B),V=Math.min(n.inWidth,l+B),U=f,z=0,H=0,j=k;j<F;j+=s){for(var K=C+j*e.strides[1],te=L;te<V;te+=u){var ne=p[K+te*e.strides[2]+R];a==="max"&&ne>U?U=ne:a==="avg"&&(z+=ne,H++)}if(isNaN(U))break}v[T+W*x+R]=a==="avg"?z/H:U}return g.toTensor()},t.prototype.maxPool=function(e,n){return this.pool(e,n,"max")},t.prototype.maxPoolPositions=function(e,n){for(var a=oe(n.outShape,"int32"),o=n.strideHeight,i=n.strideWidth,s=n.dilationHeight,u=n.dilationWidth,c=n.effectiveFilterHeight,l=n.effectiveFilterWidth,h=n.padInfo.top,d=n.padInfo.left,f=this.bufferSync(e),p=0;p<n.batchSize;++p)for(var g=0;g<n.inChannels;++g)for(var v=0;v<n.outHeight;++v){for(var m=v*o-h,b=m;b<0;)b+=s;for(var x=Math.min(n.inHeight,c+m),y=0;y<n.outWidth;++y){for(var w=y*i-d,C=w;C<0;)C+=u;for(var R=Math.min(n.inWidth,l+w),S=Number.NEGATIVE_INFINITY,I=-1,k=b;k<x;k+=s)for(var F=k-m,T=C;T<R;T+=u){var W=T-w,B=f.get(p,k,T,g);B>S&&(S=B,I=F*l+W)}a.set(I,p,v,y,g)}}return a.toTensor()},t.prototype.maxPoolBackprop=function(e,n,a,o){G([n,a],"maxPoolBackprop");for(var i=this.maxPoolPositions(n,o),s=o.strideHeight,u=o.strideWidth,c=o.dilationHeight,l=o.dilationWidth,h=o.effectiveFilterHeight,d=o.effectiveFilterWidth,f=d-1-o.padInfo.left,p=h-1-o.padInfo.top,g=oe(n.shape,"float32"),v=this.bufferSync(i),m=this.bufferSync(e),b=0;b<o.batchSize;++b)for(var x=0;x<o.inChannels;++x)for(var y=0;y<o.inHeight;++y)for(var w=0;w<o.inWidth;++w){for(var C=y-p,R=w-f,S=0,I=0;I<h;I+=c){var k=(C+I)/s;if(!(k<0||k>=o.outHeight||Math.floor(k)!==k))for(var F=0;F<d;F+=l){var T=(R+F)/u;if(!(T<0||T>=o.outWidth||Math.floor(T)!==T)){var W=h*d-1-v.get(b,k,T,x)===I*d+F?1:0;W!==0&&(S+=m.get(b,k,T,x)*W)}}}g.set(S,b,y,w,x)}return g.toTensor()},t.prototype.avgPoolBackprop=function(e,n,a){G([e,n],"avgPoolBackprop");for(var o=a.strideHeight,i=a.strideWidth,s=a.filterHeight,u=a.filterWidth,c=a.dilationHeight,l=a.dilationWidth,h=a.effectiveFilterHeight,d=a.effectiveFilterWidth,f=d-1-a.padInfo.left,p=h-1-a.padInfo.top,g=oe(n.shape,"float32"),v=1/(s*u),m=this.bufferSync(e),b=0;b<a.batchSize;++b)for(var x=0;x<a.inChannels;++x)for(var y=0;y<a.inHeight;++y)for(var w=0;w<a.inWidth;++w){for(var C=y-p,R=w-f,S=0,I=0;I<h;I+=c){var k=(C+I)/o;if(!(k<0||k>=a.outHeight||Math.floor(k)!==k))for(var F=0;F<d;F+=l){var T=(R+F)/i;T<0||T>=a.outWidth||Math.floor(T)!==T||(S+=m.get(b,k,T,x))}}g.set(S*v,b,y,w,x)}return g.toTensor()},t.prototype.pool3d=function(e,n,a){G(e,"pool3d");for(var o=n.strideDepth,i=n.strideHeight,s=n.strideWidth,u=n.dilationDepth,c=n.dilationHeight,l=n.dilationWidth,h=n.effectiveFilterDepth,d=n.effectiveFilterHeight,f=n.effectiveFilterWidth,p=n.padInfo.front,g=n.padInfo.top,v=n.padInfo.left,m=a==="max"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,b=this.readSync(e.dataId),x=oe(n.outShape,e.dtype),y=x.values,w=n.outShape[1]*n.outShape[2]*n.outShape[3]*n.outShape[4],C=n.outShape[2]*n.outShape[3]*n.outShape[4],R=n.outShape[3]*n.outShape[4],S=n.outShape[4],I=0;I<n.batchSize;++I)for(var k=I*w,F=I*e.strides[0],T=0;T<n.inChannels;++T)for(var W=0;W<n.outDepth;++W){for(var B=W*o-p,L=B;L<0;)L+=u;for(var V=Math.min(n.inDepth,h+B),U=k+W*C,z=0;z<n.outHeight;++z){for(var H=z*i-g,j=H;j<0;)j+=c;for(var K=Math.min(n.inHeight,d+H),te=U+z*R,ne=0;ne<n.outWidth;++ne){for(var ue=ne*s-v,ce=ue;ce<0;)ce+=l;for(var he=Math.min(n.inWidth,f+ue),ve=te+ne*S,fe=m,ge=0,Ne=0,pe=L;pe<V;pe+=u){for(var we=F+pe*e.strides[1],ye=j;ye<K;ye+=c){for(var Ae=we+ye*e.strides[2],Ee=ce;Ee<he;Ee+=l){var Ie=b[Ae+Ee*e.strides[3]+T];if(a==="max"&&Ie>fe?fe=Ie:a==="avg"&&(ge+=Ie,Ne++),isNaN(fe))break}if(isNaN(fe))break}if(isNaN(fe))break}y[ve+T]=a==="avg"?ge/Ne:fe}}}return x.toTensor()},t.prototype.avgPool3d=function(e,n){return G(e,"avgPool3d"),this.pool3d(e,n,"avg").toFloat()},t.prototype.avgPool3dBackprop=function(e,n,a){G([e,n],"avgPool3dBackprop");for(var o=a.strideDepth,i=a.strideHeight,s=a.strideWidth,u=a.filterDepth,c=a.filterHeight,l=a.filterWidth,h=a.dilationDepth,d=a.dilationHeight,f=a.dilationWidth,p=a.effectiveFilterDepth,g=a.effectiveFilterHeight,v=a.effectiveFilterWidth,m=p-1-a.padInfo.front,b=v-1-a.padInfo.left,x=g-1-a.padInfo.top,y=oe(n.shape,"float32"),w=1/(u*c*l),C=this.bufferSync(e),R=0;R<a.batchSize;++R)for(var S=0;S<a.inChannels;++S)for(var I=0;I<a.inDepth;++I)for(var k=0;k<a.inHeight;++k)for(var F=0;F<a.inWidth;++F){for(var T=I-m,W=k-x,B=F-b,L=0,V=0;V<p;V+=h){var U=(T+V)/o;if(!(U<0||U>=a.outDepth||Math.floor(U)!==U))for(var z=0;z<g;z+=d){var H=(W+z)/i;if(!(H<0||H>=a.outHeight||Math.floor(H)!==H))for(var j=0;j<v;j+=f){var K=(B+j)/s;K<0||K>=a.outWidth||Math.floor(K)!==K||(L+=C.get(R,U,H,K,S))}}}y.set(L*w,R,I,k,F,S)}return y.toTensor()},t.prototype.maxPool3d=function(e,n){return G(e,"maxPool3d"),this.pool3d(e,n,"max").toFloat()},t.prototype.maxPool3dPositions=function(e,n){for(var a=oe(n.outShape,"int32"),o=n.strideDepth,i=n.strideHeight,s=n.strideWidth,u=n.dilationDepth,c=n.dilationHeight,l=n.dilationWidth,h=n.effectiveFilterDepth,d=n.effectiveFilterHeight,f=n.effectiveFilterWidth,p=n.padInfo.front,g=n.padInfo.top,v=n.padInfo.left,m=this.bufferSync(e),b=0;b<n.batchSize;++b)for(var x=0;x<n.inChannels;++x)for(var y=0;y<n.outDepth;++y){for(var w=y*o-p,C=w;C<0;)C+=u;for(var R=Math.min(n.inDepth,h+w),S=0;S<n.outHeight;++S){for(var I=S*i-g,k=I;k<0;)k+=c;for(var F=Math.min(n.inHeight,d+I),T=0;T<n.outWidth;++T){for(var W=T*s-v,B=W;B<0;)B+=l;for(var L=Math.min(n.inWidth,f+W),V=Number.NEGATIVE_INFINITY,U=-1,z=C;z<R;z+=u)for(var H=z-w,j=k;j<F;j+=c)for(var K=j-I,te=B;te<L;te+=l){var ne=te-W,ue=m.get(b,z,j,te,x);ue>=V&&(V=ue,U=H*d*f+K*d+ne)}a.set(U,b,y,S,T,x)}}}return a.toTensor()},t.prototype.maxPool3dBackprop=function(e,n,a,o){G([n,a],"maxPool3dBackprop");for(var i=this.maxPool3dPositions(n,o),s=o.strideDepth,u=o.strideHeight,c=o.strideWidth,l=o.dilationDepth,h=o.dilationHeight,d=o.dilationWidth,f=o.effectiveFilterDepth,p=o.effectiveFilterHeight,g=o.effectiveFilterWidth,v=f-1-o.padInfo.front,m=g-1-o.padInfo.left,b=p-1-o.padInfo.top,x=oe(n.shape,"float32"),y=this.bufferSync(i),w=this.bufferSync(e),C=0;C<o.batchSize;++C)for(var R=0;R<o.inChannels;++R)for(var S=0;S<o.inDepth;++S)for(var I=0;I<o.inHeight;++I)for(var k=0;k<o.inWidth;++k){for(var F=S-v,T=I-b,W=k-m,B=0,L=0;L<f;L+=l){var V=(F+L)/s;if(!(V<0||V>=o.outDepth||Math.floor(V)!==V))for(var U=0;U<p;U+=h){var z=(T+U)/u;if(!(z<0||z>=o.outHeight||Math.floor(z)!==z))for(var H=0;H<g;H+=d){var j=(W+H)/c;if(!(j<0||j>=o.outWidth||Math.floor(j)!==j)){var K=f*p*g-1-y.get(C,V,z,j,R)===L*p*g+U*g+H?1:0;K!==0&&(B+=w.get(C,V,z,j,R)*K)}}}}x.set(B,C,S,I,k,R)}return x.toTensor()},t.prototype.cast=function(e,n){return qu(e,n,this)},t.prototype.reshape=function(e,n){return zo(e,n)},t.prototype.avgPool=function(e,n){return G(e,"avgPool"),this.pool(e,n,"avg").toFloat()},t.prototype.resizeBilinear=function(e,n,a,o){G(e,"resizeBilinear");for(var i=e.shape,s=i[0],u=i[1],c=i[2],l=i[3],h=this.readSync(e.dataId),d=new Float32Array(Z([s,n,a,l])),f=[o&&n>1?u-1:u,o&&a>1?c-1:c],p=[o&&n>1?n-1:n,o&&a>1?a-1:a],g=0,v=f[0]/p[0],m=f[1]/p[1],b=0;b<s;b++)for(var x=0;x<n;x++)for(var y=v*x,w=Math.floor(y),C=y-w,R=Math.min(u-1,Math.ceil(y)),S=b*e.strides[0]+w*e.strides[1],I=b*e.strides[0]+R*e.strides[1],k=0;k<a;k++)for(var F=m*k,T=Math.floor(F),W=F-T,B=Math.min(c-1,Math.ceil(F)),L=S+T*e.strides[2],V=I+T*e.strides[2],U=S+B*e.strides[2],z=I+B*e.strides[2],H=0;H<l;H++){var j=h[L+H],K=h[V+H],te=j+(h[U+H]-j)*W,ne=te+(K+(h[z+H]-K)*W-te)*C;d[g++]=ne}return qe(d,[s,n,a,l])},t.prototype.resizeBilinearBackprop=function(e,n,a){G([e,n],"resizeBilinearBackprop");for(var o=n.shape,i=o[0],s=o[1],u=o[2],c=o[3],l=e.shape,h=l[1],d=l[2],f=new Float32Array(i*s*u*c),p=[a&&h>1?s-1:s,a&&d>1?u-1:u],g=[a&&h>1?h-1:h,a&&d>1?d-1:d],v=p[0]/g[0],m=p[1]/g[1],b=this.readSync(e.dataId),x=0,y=0;y<i;y++)for(var w=y*n.strides[0],C=0;C<h;C++)for(var R=C*v,S=Math.floor(R),I=Math.min(Math.ceil(R),s-1),k=w+S*n.strides[1],F=w+I*n.strides[1],T=R-S,W=1-T,B=0;B<d;B++)for(var L=B*m,V=Math.floor(L),U=Math.min(Math.ceil(L),u-1),z=L-V,H=1-z,j=k+V*n.strides[2],K=k+U*n.strides[2],te=F+V*n.strides[2],ne=F+U*n.strides[2],ue=W*H,ce=W*z,he=T*H,ve=T*z,fe=0;fe<c;fe++){var ge=b[x++];f[j+fe]+=ge*ue,f[K+fe]+=ge*ce,f[te+fe]+=ge*he,f[ne+fe]+=ge*ve}return Qe(f,[i,u,s,c],n.dtype)},t.prototype.resizeNearestNeighbor=function(e,n,a,o){G(e,"resizeNearestNeighbor");for(var i=e.shape,s=i[0],u=i[1],c=i[2],l=i[3],h=this.readSync(e.dataId),d=new Float32Array(s*n*a*l),f=[o&&n>1?u-1:u,o&&a>1?c-1:c],p=[o&&n>1?n-1:n,o&&a>1?a-1:a],g=f[0]/p[0],v=f[1]/p[1],m=0,b=0;b<s;b++)for(var x=b*e.strides[0],y=0;y<n;y++)for(var w=g*y,C=x+Math.min(u-1,o?Math.round(w):Math.floor(w))*e.strides[1],R=0;R<a;R++)for(var S=v*R,I=C+Math.min(c-1,o?Math.round(S):Math.floor(S))*e.strides[2],k=0;k<l;k++){var F=h[I+k];d[m++]=F}return qe(d,[s,n,a,l],e.dtype)},t.prototype.resizeNearestNeighborBackprop=function(e,n,a){G([e,n],"resizeNearestNeighborBackprop");for(var o=n.shape,i=o[0],s=o[1],u=o[2],c=o[3],l=e.shape,h=l[1],d=l[2],f=new Float32Array(i*s*u*c),p=this.readSync(e.dataId),g=[a&&h>1?s-1:s,a&&d>1?u-1:u],v=[a&&h>1?h-1:h,a&&d>1?d-1:d],m=g[0]/v[0],b=g[1]/v[1],x=1/m,y=1/b,w=2*Math.ceil(x)+2,C=2*Math.ceil(y)+2,R=0;R<i;R++)for(var S=R*n.strides[0],I=0;I<s;I++)for(var k=S+I*n.strides[1],F=Math.floor(I*x),T=Math.floor(F-w/2),W=0;W<u;W++)for(var B=k+W*n.strides[2],L=Math.floor(W*y),V=Math.floor(L-C/2),U=0;U<c;U++){for(var z=0,H=0;H<w;H++){var j=H+T;if(!(j<0||j>=h)){var K=S+j*e.strides[1],te=j*m;if(I===Math.min(s-1,a?Math.round(te):Math.floor(te)))for(var ne=0;ne<C;ne++){var ue=ne+V;if(!(ue<0||ue>=d)){var ce=K+ue*e.strides[2],he=ue*b;W===Math.min(u-1,a?Math.round(he):Math.floor(he))&&(z+=p[ce+U])}}}}f[B+U]=z}return Qe(f,n.shape,n.dtype)},t.prototype.batchNormalization=function(e,n,a,o,i,s){G([e,n,a,i,s],"batchNorm");for(var u=this.readSync(e.dataId),c=this.readSync(n.dataId),l=this.readSync(a.dataId),h=i?this.readSync(i.dataId):new Float32Array([1]),d=s?this.readSync(s.dataId):new Float32Array([0]),f=new Float32Array(u.length),p=d.length,g=h.length,v=l.length,m=c.length,b=0,x=0,y=0,w=0,C=0;C<u.length;++C)f[C]=d[b++]+(u[C]-c[x++])*h[y++]/Math.sqrt(l[w++]+o),b>=p&&(b=0),x>=m&&(x=0),y>=g&&(y=0),w>=v&&(w=0);return Qe(f,e.shape)},t.prototype.localResponseNormalization4D=function(e,n,a,o,i){G(e,"localResponseNormalization4D");var s=e.shape[3],u=s-1,c=this.readSync(e.dataId),l=e.size,h=new Float32Array(l);function d(v){for(var m=v%s,b=v-m+Math.max(0,m-n),x=v-m+Math.min(m+n,u),y=0;b<=x;b++){var w=c[b];y+=w*w}return y}for(var f=0;f<l;f++){var p=d(f),g=c[f]*Math.pow(a+o*p,-i);h[f]=g}return Qe(h,e.shape)},t.prototype.LRNGrad=function(e,n,a,o,i,s,u){G(e,"LRNGrad");for(var c=e.shape[3],l=this.readSync(e.dataId),h=this.readSync(n.dataId),d=this.readSync(a.dataId),f=new Float32Array(e.size),p=e.size,g=0;g<p;g++){for(var v=g%c,m=g-v+Math.max(0,v-o),b=g-v+Math.min(c,v+o+1),x=0,y=m;y<b;y++)x+=Math.pow(h[y],2);for(x=s*x+i,y=m;y<b;y++){var w=-2*s*u*h[y]*d[g]/x;g===y&&(w+=Math.pow(x,-u)),w*=l[g],f[y]+=w}}return Qe(f,e.shape)},t.prototype.multinomial=function(e,n,a,o){G(e,"multinomial");for(var i=n?e:en(e),s=i.shape[0],u=i.shape[1],c=_e([s,a],"int32"),l=this.readSync(c.dataId),h=this.readSync(i.dataId),d=0;d<s;++d){var f=d*u,p=new Float32Array(u-1);p[0]=h[f];for(var g=1;g<p.length;++g)p[g]=p[g-1]+h[f+g];for(var v=Aa(o.toString()),m=d*a,b=0;b<a;++b){var x=v();l[m+b]=p.length;for(var y=0;y<p.length;y++)if(x<p[y]){l[m+b]=y;break}}}return c},t.prototype.oneHot=function(e,n,a,o){G(e,"oneHot");var i=new Float32Array(e.size*n);i.fill(o);for(var s=this.readSync(e.dataId),u=0;u<e.size;++u)s[u]>=0&&s[u]<n&&(i[u*n+s[u]]=a);return dn(i,[e.size,n],"int32")},t.prototype.nonMaxSuppression=function(e,n,a,o,i){return G(e,"nonMaxSuppression"),li(this.readSync(e.dataId),this.readSync(n.dataId),a,o,i)},t.prototype.fft=function(e){return this.fftBatch(e,!1)},t.prototype.ifft=function(e){return this.fftBatch(e,!0)},t.prototype.fftBatch=function(e,n){for(var a=e.shape[0],o=e.shape[1],i=oe(e.shape,"float32"),s=oe(e.shape,"float32"),u=gt(e).as2D(a,o),c=Mt(e).as2D(a,o),l=0;l<a;l++)for(var h=u.slice([l,0],[1,o]),d=c.slice([l,0],[1,o]),f=He(h,d),p=this.readSync(this.fftImpl(f,n).dataId),g=0;g<o;g++){var v=Cs(p,g);i.values[l*o+g]=v.real,s.values[l*o+g]=v.imag}return He(i.toTensor(),s.toTensor()).as2D(a,o)},t.prototype.fftImpl=function(e,n){var a=e.as1D(),o=a.size;if(this.isExponentOf2(o)){var i=this.fftRadix2(a,o,n).as2D(e.shape[0],e.shape[1]);return n&&(i=He(gt(i).div(q(o)),Mt(i).div(q(o)))),i}var s=this.readSync(e.dataId),u=function(c){for(var l=new Float32Array(c.length/2),h=new Float32Array(c.length/2),d=0;d<c.length;d+=2)l[d/2]=c[d],h[d/2]=c[d+1];return{real:l,imag:h}}(this.fourierTransformByMatmul(s,o,n));return He(u.real,u.imag).as2D(e.shape[0],e.shape[1])},t.prototype.isExponentOf2=function(e){return(e&e-1)==0},t.prototype.fftRadix2=function(e,n,a){if(n===1)return e;var o=this.readSync(e.dataId),i=n/2,s=function(m){for(var b=Math.ceil(m.length/4),x=new Float32Array(b),y=new Float32Array(b),w=0;w<m.length;w+=4)x[Math.floor(w/4)]=m[w],y[Math.floor(w/4)]=m[w+1];return{real:x,imag:y}}(o),u=He(s.real,s.imag).as1D(),c=function(m){for(var b=Math.floor(m.length/4),x=new Float32Array(b),y=new Float32Array(b),w=2;w<m.length;w+=4)x[Math.floor(w/4)]=m[w],y[Math.floor(w/4)]=m[w+1];return{real:x,imag:y}}(o),l=He(c.real,c.imag).as1D();u=this.fftRadix2(u,i,a),l=this.fftRadix2(l,i,a);var h=function(m,b){for(var x=new Float32Array(m/2),y=new Float32Array(m/2),w=0;w<Math.ceil(m/2);w++){var C=(b?2:-2)*Math.PI*(w/m);x[w]=Math.cos(C),y[w]=Math.sin(C)}return{real:x,imag:y}}(n,a),d=He(h.real,h.imag).mul(l),f=u.add(d),p=u.sub(d),g=gt(f).concat(gt(p)),v=Mt(f).concat(Mt(p));return He(g,v).as1D()},t.prototype.fourierTransformByMatmul=function(e,n,a){for(var o=new Float32Array(2*n),i=0;i<n;i++){for(var s=0,u=0,c=0;c<n;c++){var l=Vd(i*c,n,a),h=Cs(e,c);s+=h.real*l.real-h.imag*l.imag,u+=h.real*l.imag+h.imag*l.real}a&&(s/=n,u/=n),Ud(o,s,u,i)}return o},t.prototype.depthToSpace=function(e,n,a){E(a==="NHWC",function(){return"Only NHWC dataFormat supported on CPU for depthToSpace. Got "+a}),E(n>1,function(){return"blockSize should be > 1 for depthToSpace, but was: "+n});for(var o=e.shape[0],i=e.shape[1],s=e.shape[2],u=e.shape[3],c=i*n,l=s*n,h=u/(n*n),d=this.readSync(e.dataId),f=new Float32Array(o*c*l*h),p=0,g=0;g<o;++g)for(var v=0;v<c;++v)for(var m=Math.floor(v/n),b=v%n,x=0;x<l;++x)for(var y=Math.floor(x/n),w=(b*n+x%n)*h,C=0;C<h;++C){var R=C+w+u*(y+s*(m+i*g));f[p++]=d[R]}return Qe(f,[o,c,l,h])},t.prototype.broadcastedBinaryOp=function(e,n,a,o){var i=de(e.shape,n.shape),s=oe(i,a),u=this.readSync(e.dataId),c=this.readSync(n.dataId),l=ln(e.shape,i),h=ln(n.shape,i),d=s.values;if(l.length+h.length===0)for(var f=0;f<d.length;++f)d[f]=o(u[f%u.length],c[f%c.length]);else{var p=this.bufferSync(e),g=this.bufferSync(n),v=function(m){var b=s.indexToLoc(m),x=b.slice(-e.rank);l.forEach(function(R){return x[R]=0});var y=p.locToIndex(x),w=b.slice(-n.rank);h.forEach(function(R){return w[R]=0});var C=g.locToIndex(w);d[m]=o(u[y],c[C])};for(f=0;f<d.length;++f)v(f)}return s.toTensor()},t.prototype.broadcastedBinaryComplexOp=function(e,n,a){var o=de(e.shape,n.shape),i=oe(o,"float32"),s=oe(o,"float32"),u=this.readSync(e.dataId),c=this.readSync(n.dataId),l=ln(e.shape,o),h=ln(n.shape,o),d=i.values,f=s.values;if(l.length+h.length===0)for(var p=0;p<d.length;p++){var g=p%u.length,v=p%c.length,m=a(u[2*g],u[2*g+1],c[2*v],c[2*v+1]);d[p]=m.real,f[p]=m.imag}else{var b=this.bufferSync(this.data.get(e.dataId).complexTensors.real),x=this.bufferSync(this.data.get(n.dataId).complexTensors.real),y=function(w){var C=i.indexToLoc(w),R=C.slice(-e.rank);l.forEach(function(T){return R[T]=0});var S=b.locToIndex(R),I=C.slice(-n.rank);h.forEach(function(T){return I[T]=0});var k=x.locToIndex(I),F=a(u[2*S],u[2*S+1],c[2*k],c[2*k+1]);d[w]=F.real,f[w]=F.imag};for(p=0;p<d.length;p++)y(p)}return this.complex(i.toTensor(),s.toTensor())},t.prototype.split=function(e,n,a){return Yu(e,n,a)},t.prototype.dispose=function(){},t.prototype.floatPrecision=function(){return 32},t.prototype.epsilon=function(){return 1e-7},t.prototype.cropAndResize=function(e,n,a,o,i,s){for(var u=e.shape,c=u[0],l=u[1],h=u[2],d=u[3],f=n.shape[0],p=o[0],g=o[1],v=oe([f,p,g,d],"float32"),m=this.readSync(n.dataId),b=this.readSync(a.dataId),x=this.readSync(e.dataId),y=e.strides,w=v.strides,C=0;C<f;C++){var R=4*C,S=m[R],I=m[R+1],k=m[R+2],F=m[R+3],T=b[C];if(!(T>=c))for(var W=p>1?(k-S)*(l-1)/(p-1):0,B=g>1?(F-I)*(h-1)/(g-1):0,L=0;L<p;L++){var V=p>1?S*(l-1)+L*W:.5*(S+k)*(l-1);if(V<0||V>l-1)for(var U=0;U<g;U++)for(var z=0;z<d;z++){var H=z+U*w[2]+L*w[1]+C*w[0];v.values[H]=s}else if(i==="bilinear"){var j=Math.floor(V),K=Math.ceil(V),te=V-j;for(U=0;U<g;U++)if((pe=g>1?I*(h-1)+U*B:.5*(I+F)*(h-1))<0||pe>h-1)for(z=0;z<d;z++)H=z+U*w[2]+L*w[1]+C*w[0],v.values[H]=s;else{var ne=Math.floor(pe),ue=Math.ceil(pe),ce=pe-ne;for(z=0;z<d;z++){var he=x[H=z+ne*y[2]+j*y[1]+T*y[0]],ve=x[H=z+ue*y[2]+j*y[1]+T*y[0]],fe=x[H=z+ne*y[2]+K*y[1]+T*y[0]],ge=he+(ve-he)*ce,Ne=fe+(x[H=z+ue*y[2]+K*y[1]+T*y[0]]-fe)*ce;H=z+U*w[2]+L*w[1]+C*w[0],v.values[H]=ge+(Ne-ge)*te}}}else for(U=0;U<g;++U){var pe;if((pe=g>1?I*(h-1)+U*B:.5*(I+F)*(h-1))<0||pe>h-1)for(z=0;z<d;z++)H=z+U*w[2]+L*w[1]+C*w[0],v.values[H]=s;else{var we=Math.round(pe),ye=Math.round(V);for(z=0;z<d;z++){var Ae=z+we*y[2]+ye*y[1]+T*y[0],Ee=z+U*w[2]+L*w[1]+C*w[0];v.values[Ee]=x[Ae]}}}}}return v.toTensor()},t.prototype.sparseToDense=function(e,n,a,o){var i=pa(0,e,a),s=i.sliceRank,u=i.numUpdates,c=i.sliceSize,l=i.strides,h=i.outputSize;return this.scatter(e,n,a,h,c,u,s,l,o,!1)},t.prototype.gatherND=function(e,n){var a=n.shape,o=a[a.length-1],i=Wu(e,n),s=i[0],u=i[1],c=i[2],l=i[3];if(u===0)return qe([],s,e.dtype);for(var h=new xr([u,c],e.dtype),d=this.readSync(n.dataId),f=this.readSync(e.dataId),p=0;p<u;p++){for(var g=[],v=0,m=0;m<o;m++){var b=d[p*o+m];v+=b*l[m],g.push(b)}if(v<0||v>=e.size/c)throw new Error("Invalid indices: "+g+" does not index into "+e.shape);for(var x=0;x<c;x++)h.values[p*c+x]=f[v*c+x]}return h.toTensor().reshape(s)},t.prototype.scatterND=function(e,n,a){var o=pa(0,e,a),i=o.sliceRank,s=o.numUpdates,u=o.sliceSize,c=o.strides,l=o.outputSize,h=q(0);return this.scatter(e,n,a,l,u,s,i,c,h,!0)},t.prototype.fill=function(e,n,a){var o=aa(a=a||Tr(n),Z(e));return o.fill(n),N.makeTensor(o,e,a,this)},t.prototype.onesLike=function(e){if(e.dtype==="string")throw new Error("onesLike is not supported for string tensors");return this.fill(e.shape,1,e.dtype)},t.prototype.zerosLike=function(e){var n=aa(e.dtype,Z(e.shape));return this.makeOutput(n,e.shape,e.dtype)},t.prototype.linspace=function(e,n,a){return Ku(e,n,a)},t.prototype.scatter=function(e,n,a,o,i,s,u,c,l,h){var d=[o/i,i],f=this.readSync(e.dataId),p=this.readSync(n.dataId);if(o===0)return qe([],a,n.dtype);var g=new xr(d,n.dtype);g.values.fill(this.readSync(l.dataId)[0]);for(var v=0;v<s;v++){for(var m=[],b=0,x=0;x<u;x++){var y=f[v*u+x];m.push(y),b+=y*c[x]}if(b<0||b>=o/i)throw new Error("Invalid indices: "+m+" does not index into "+a);for(var w=0;w<i;w++)h?g.values[b*i+w]+=p[v*i+w]:g.values[b*i+w]=n.rank===0?p[0]:p[v*i+w]}return g.toTensor().reshape(a)},t}(Hu);N.registerBackend("cpu",function(){return new cm},1);for(var mo=0,Hs=[{kernelName:"NonMaxSuppressionV5",backendName:"cpu",kernelFunc:function(r){var t=r.inputs,e=r.backend,n=r.attrs,a=t,o=a.boxes,i=a.scores,s=n,u=s.maxOutputSize,c=s.iouThreshold,l=s.scoreThreshold,h=s.softNmsSigma,d=e;G(o,"NonMaxSuppressionWithScore");var f=hi(d.data.get(o.dataId).values,d.data.get(i.dataId).values,u,c,l,h);return[f.selectedIndices,f.selectedScores]}},{kernelName:"Square",backendName:"cpu",kernelFunc:function(r){var t=r.inputs,e=r.backend,n=t.x,a=e;G(n,"square");for(var o=a.data.get(n.dataId).values,i=new Float32Array(o.length),s=0;s<o.length;++s){var u=o[s];i[s]=u*u}return{dataId:a.write(i,n.shape,n.dtype),shape:n.shape,dtype:n.dtype}}},{kernelName:_r,backendName:"cpu",kernelFunc:function(r){var t=r.inputs,e=r.backend,n=t,a=n.a,o=n.b,i=e;G([a,o],_r);var s=i.data.get(a.dataId).values,u=i.data.get(o.dataId).values,c=function(d,f,p,g,v,m){var b=de(d,f),x=b.length,y=Wt(b),w=br(v,Z(b)),C=d.length,R=f.length,S=Wt(d),I=Wt(f),k=ln(d,b),F=ln(f,b);if(k.length+F.length===0)for(var T=0;T<w.length;++T)w[T]=m(p[T%p.length],g[T%g.length]);else{var W=function(B){var L=yh(B,x,y),V=L.slice(-C);k.forEach(function(j){return V[j]=0});var U=fs(V,C,S),z=L.slice(-R);F.forEach(function(j){return z[j]=0});var H=fs(z,R,I);w[B]=m(p[U],g[H])};for(T=0;T<w.length;++T)W(T)}return[w,b]}(a.shape,o.shape,s,u,a.dtype,function(d,f){var p=d-f;return p*p}),l=c[0],h=c[1];return{dataId:i.write(l,h,a.dtype),shape:h,dtype:a.dtype}}}];mo<Hs.length;mo++)yu(Hs[mo]);var Gn,lm=function(r){this.variableNames=["A"];var t=Ye(),e=r[0],n=r[1];this.outputShape=r,this.userCode=`
      void main() {
        ivec3 coords = getOutputCoords();
        int texR = coords[0];
        int texC = coords[1];
        int depth = coords[2];
        vec2 uv = (vec2(texC, texR) + halfCR) / vec2(`+n+".0, "+e+`.0);

        vec4 values = `+t.texture2D+`(A, uv);
        float value;
        if (depth == 0) {
          value = values.r;
        } else if (depth == 1) {
          value = values.g;
        } else if (depth == 2) {
          value = values.b;
        } else if (depth == 3) {
          value = values.a;
        }

        setOutput(floor(value * 255.0 + 0.5));
      }
    `},hm=function(r){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0;var t=Ye(),e=r[0],n=r[1];this.outputShape=r,this.userCode=`
      void main() {
        ivec3 coords = getOutputCoords();
        int texR = coords[0];
        int texC = coords[1];
        int depth = coords[2];

        vec4 result = vec4(0.);

        for(int row=0; row<=1; row++) {
          for(int col=0; col<=1; col++) {
            texC = coords[1] + row;
            depth = coords[2] + col;

            vec2 uv = (vec2(texC, texR) + halfCR) /
                       vec2(`+n+".0, "+e+`.0);
            vec4 values = `+t.texture2D+`(A, uv);
            float value;
            if (depth == 0) {
              value = values.r;
            } else if (depth == 1) {
              value = values.g;
            } else if (depth == 2) {
              value = values.b;
            } else if (depth == 3) {
              value = values.a;
            }

            result[row * 2 + col] = floor(value * 255.0 + 0.5);
          }
        }

        `+t.output+` = result;
      }
    `};for(var yo=0,js=[{kernelName:"FromPixels",backendName:"webgl",kernelFunc:function(r){var t=r.inputs,e=r.backend,n=r.attrs,a=t.pixels,o=n.numChannels,i=typeof HTMLVideoElement<"u"&&a instanceof HTMLVideoElement,s=typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement,u=i?[a.videoWidth,a.videoHeight]:[a.width,a.height],c=u[0],l=u[1],h=[l,c],d=[l,c,o];(s||i)&&(Gn==null&&(Gn=document.createElement("canvas").getContext("2d")),Gn.canvas.width=c,Gn.canvas.height=l,Gn.drawImage(a,0,0,c,l),a=Gn.canvas);var f=e.makeTensorInfo(h,"int32");e.texData.get(f.dataId).usage=ct.PIXELS,e.gpgpu.uploadPixelDataToTexture(e.getTexture(f.dataId),a);var p=O().getBool("WEBGL_PACK")?new hm(d):new lm(d),g=e.runWebGLProgram(p,[f],"int32");return e.disposeData(f.dataId),g}},{kernelName:"NonMaxSuppressionV5",backendName:"webgl",kernelFunc:function(r){var t=r.inputs,e=r.backend,n=r.attrs;ua("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");var a=t,o=a.boxes,i=a.scores,s=n,u=s.maxOutputSize,c=s.iouThreshold,l=s.scoreThreshold,h=s.softNmsSigma,d=e,f=hi(d.readSync(o.dataId),d.readSync(i.dataId),u,c,l,h);return[f.selectedIndices,f.selectedScores]}},{kernelName:"Square",backendName:"webgl",kernelFunc:function(r){var t=r.inputs,e=r.backend,n=t.x,a=e,o=new se(n.shape,"return x * x;");return a.runWebGLProgram(o,[n],n.dtype)}},{kernelName:_r,backendName:"webgl",kernelFunc:function(r){var t=r.inputs,e=r.backend,n=t,a=n.a,o=n.b,i=e,s=O().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new Yt("return (a - b) * (a - b);",a.shape,o.shape):new De("return (a - b) * (a - b);",a.shape,o.shape);return i.compileAndRun(s,[a,o])}}];yo<js.length;yo++)yu(js[yo]);for(var bo=0,qs=[{kernelName:"Square",gradFunc:function(r,t){var e=t[0];return{x:function(){return r.mul(e.toFloat().mul(2))}}}},{kernelName:_r,gradFunc:function(r,t){var e=t[0],n=t[1],a=q(2);return{a:function(){return Ze(r,Ze(a,Le(e,n)))},b:function(){return Ze(r,Ze(a,Le(n,e)))}}}}];bo<qs.length;bo++)sh(qs[bo]);var dm=function(){function r(){}return r.prototype.fetch=function(t,e){return fetch(t,e)},r.prototype.now=function(){return performance.now()},r.prototype.encode=function(t,e){if(e!=="utf-8"&&e!=="utf8")throw new Error("Browser's encoder only supports utf-8, but got "+e);return this.textEncoder==null&&(this.textEncoder=new TextEncoder),this.textEncoder.encode(t)},r.prototype.decode=function(t,e){return new TextDecoder(e).decode(t)},r}();O().get("IS_BROWSER")&&O().setPlatform("browser",new dm);var xo,fm=function(){return require("node-fetch")},pm=function(){function r(){this.util=require("util"),this.textEncoder=new this.util.TextEncoder}return r.prototype.fetch=function(t,e){return O().global.fetch!=null?O().global.fetch(t,e):(xo==null&&(xo=fm()),xo(t,e))},r.prototype.now=function(){var t=process.hrtime();return 1e3*t[0]+t[1]/1e6},r.prototype.encode=function(t,e){if(e!=="utf-8"&&e!=="utf8")throw new Error("Node built-in encoder only supports utf-8, but got "+e);return this.textEncoder.encode(t)},r.prototype.decode=function(t,e){return t.length===0?"":new this.util.TextDecoder(e).decode(t)},r}();O().get("IS_NODE")&&O().setPlatform("node",new pm);var Go={float32:4,int32:4,uint16:2,uint8:1,bool:1},wa=4;function Uc(r,t){for(var e={},n=0,a=function(s){var u=s.name,c=s.dtype,l=s.shape,h=Z(l),d=void 0;if("quantization"in s){var f=s.quantization;if(f.dtype!=="uint8"&&f.dtype!=="uint16")throw new Error("Weight "+s.name+" has unknown quantization dtype "+f.dtype+". Supported quantization dtypes are: 'uint8' and 'uint16'.");var p=Go[f.dtype],g=r.slice(n,n+h*p),v=f.dtype==="uint8"?new Uint8Array(g):new Uint16Array(g);if(c==="float32")d=Float32Array.from(v,function(C){return C*f.scale+f.min});else{if(c!=="int32")throw new Error("Unsupported dtype in weight '"+u+"': "+c);d=Int32Array.from(v,function(C){return Math.round(C*f.scale+f.min)})}n+=h*p}else if(c==="string"){var m=Z(s.shape);d=[];for(var b=0;b<m;b++){var x=new Uint32Array(r.slice(n,n+wa))[0];n+=wa;var y=new Uint8Array(r.slice(n,n+x));d.push(y),n+=x}}else{var w=Go[c];if(g=r.slice(n,n+h*w),c==="float32")d=new Float32Array(g);else if(c==="int32")d=new Int32Array(g);else{if(c!=="bool")throw new Error("Unsupported dtype in weight '"+u+"': "+c);d=new Uint8Array(g)}n+=h*w}e[u]=qe(d,l,c)},o=0,i=t;o<i.length;o++)a(i[o]);return e}function vm(r){if(r===null)throw new Error("Invalid input value: "+JSON.stringify(r));var t=0,e=[];r.forEach(function(o){if(t+=o.byteLength,e.push(o.byteLength===o.buffer.byteLength?o:new o.constructor(o)),!(o instanceof Float32Array||o instanceof Int32Array||o instanceof Uint8Array))throw new Error("Unsupported TypedArray subtype: "+o.constructor.name)});var n=new Uint8Array(t),a=0;return e.forEach(function(o){n.set(new Uint8Array(o.buffer),a),a+=o.byteLength}),n.buffer}var Ho=typeof Buffer<"u"&&(typeof Blob>"u"||typeof atob>"u"||typeof btoa>"u");function Ks(r){return Ho?Buffer.byteLength(r):new Blob([r]).size}function Di(r){var t=0;r.forEach(function(a){t+=a.byteLength});var e=new Uint8Array(t),n=0;return r.forEach(function(a){e.set(new Uint8Array(a),n),n+=a.byteLength}),e.buffer}function Xs(r){for(r=r.trim();r.endsWith("/");)r=r.slice(0,r.length-1);var t=r.split("/");return t[t.length-1]}function Lr(r){if(r.modelTopology instanceof ArrayBuffer)throw new Error("Expected JSON model topology, received ArrayBuffer.");return{dateSaved:new Date,modelTopologyType:"JSON",modelTopologyBytes:r.modelTopology==null?0:Ks(JSON.stringify(r.modelTopology)),weightSpecsBytes:r.weightSpecs==null?0:Ks(JSON.stringify(r.weightSpecs)),weightDataBytes:r.weightData==null?0:r.weightData.byteLength}}var lt=function(){function r(){this.saveRouters=[],this.loadRouters=[]}return r.getInstance=function(){return r.instance==null&&(r.instance=new r),r.instance},r.registerSaveRouter=function(t){r.getInstance().saveRouters.push(t)},r.registerLoadRouter=function(t){r.getInstance().loadRouters.push(t)},r.getSaveHandlers=function(t){return r.getHandlers(t,"save")},r.getLoadHandlers=function(t,e){return r.getHandlers(t,"load",e)},r.getHandlers=function(t,e,n){var a=[];return(e==="load"?r.getInstance().loadRouters:r.getInstance().saveRouters).forEach(function(o){var i=o(t,n);i!==null&&a.push(i)}),a},r}(),Jn="://",fn=function(){function r(){this.managers={}}return r.getInstance=function(){return r.instance==null&&(r.instance=new r),r.instance},r.registerManager=function(t,e){E(t!=null,function(){return"scheme must not be undefined or null."}),t.endsWith(Jn)&&(t=t.slice(0,t.indexOf(Jn))),E(t.length>0,function(){return"scheme must not be an empty string."});var n=r.getInstance();E(n.managers[t]==null,function(){return"A model store manager is already registered for scheme '"+t+"'."}),n.managers[t]=e},r.getManager=function(t){var e=this.getInstance().managers[t];if(e==null)throw new Error("Cannot find model manager for scheme '"+t+"'");return e},r.getSchemes=function(){return Object.keys(this.getInstance().managers)},r}();function ta(r){if(r.indexOf(Jn)===-1)throw new Error("The url string provided does not contain a scheme. Supported schemes are: "+fn.getSchemes().join(","));return{scheme:r.split(Jn)[0],path:r.split(Jn)[1]}}function Ys(r,t,e){return e===void 0&&(e=!1),Y(this,void 0,void 0,function(){var n,a,o,i,s,u,c,l,h;return $(this,function(d){switch(d.label){case 0:return E(r!==t,function(){return"Old path and new path are the same: '"+r+"'"}),E((n=lt.getLoadHandlers(r)).length>0,function(){return"Copying failed because no load handler is found for source URL "+r+"."}),E(n.length<2,function(){return"Copying failed because more than one ("+n.length+") load handlers for source URL "+r+"."}),a=n[0],E((o=lt.getSaveHandlers(t)).length>0,function(){return"Copying failed because no save handler is found for destination URL "+t+"."}),E(o.length<2,function(){return"Copying failed because more than one ("+n.length+") save handlers for destination URL "+t+"."}),i=o[0],s=ta(r).scheme,u=ta(r).path,c=s===ta(r).scheme,[4,a.load()];case 1:return l=d.sent(),e&&c?[4,fn.getManager(s).removeModel(u)]:[3,3];case 2:d.sent(),d.label=3;case 3:return[4,i.save(l)];case 4:return h=d.sent(),!e||c?[3,6]:[4,fn.getManager(s).removeModel(u)];case 5:d.sent(),d.label=6;case 6:return[2,h.modelArtifactsInfo]}})})}var Sn="models_store",hn="model_info_store";function Vc(){if(!O().getBool("IS_BROWSER"))throw new Error("Failed to obtain IndexedDB factory because the current environmentis not a web browser.");var r=window||self,t=r.indexedDB||r.mozIndexedDB||r.webkitIndexedDB||r.msIndexedDB||r.shimIndexedDB;if(t==null)throw new Error("The current browser does not appear to support IndexedDB.");return t}function jo(r){var t=r.result;t.createObjectStore(Sn,{keyPath:"modelPath"}),t.createObjectStore(hn,{keyPath:"modelPath"})}var Qn=function(){function r(t){if(this.indexedDB=Vc(),t==null||!t)throw new Error("For IndexedDB, modelPath must not be null, undefined or empty.");this.modelPath=t}return r.prototype.save=function(t){return Y(this,void 0,void 0,function(){return $(this,function(e){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");return[2,this.databaseAction(this.modelPath,t)]})})},r.prototype.load=function(){return Y(this,void 0,void 0,function(){return $(this,function(t){return[2,this.databaseAction(this.modelPath)]})})},r.prototype.databaseAction=function(t,e){var n=this;return new Promise(function(a,o){var i=n.indexedDB.open("tensorflowjs",1);i.onupgradeneeded=function(){return jo(i)},i.onsuccess=function(){var s=i.result;if(e==null){var u=s.transaction(Sn,"readonly"),c=u.objectStore(Sn).get(n.modelPath);c.onsuccess=function(){if(c.result==null)return s.close(),o(new Error("Cannot find model with path '"+n.modelPath+"' in IndexedDB."));a(c.result.modelArtifacts)},c.onerror=function(g){return s.close(),o(c.error)},u.oncomplete=function(){return s.close()}}else{var l,h=Lr(e),d=s.transaction(hn,"readwrite"),f=d.objectStore(hn),p=f.put({modelPath:n.modelPath,modelArtifactsInfo:h});p.onsuccess=function(){var g=(l=s.transaction(Sn,"readwrite")).objectStore(Sn).put({modelPath:n.modelPath,modelArtifacts:e,modelArtifactsInfo:h});g.onsuccess=function(){return a({modelArtifactsInfo:h})},g.onerror=function(v){var m=(f=d.objectStore(hn)).delete(n.modelPath);m.onsuccess=function(){return s.close(),o(g.error)},m.onerror=function(b){return s.close(),o(g.error)}}},p.onerror=function(g){return s.close(),o(p.error)},d.oncomplete=function(){l==null?s.close():l.oncomplete=function(){return s.close()}}}},i.onerror=function(s){return o(i.error)}})},r.URL_SCHEME="indexeddb://",r}(),$s=function(r){return O().getBool("IS_BROWSER")&&!Array.isArray(r)&&r.startsWith(Qn.URL_SCHEME)?(t=r.slice(Qn.URL_SCHEME.length),new Qn(t)):null;var t};lt.registerSaveRouter($s),lt.registerLoadRouter($s);var gm=function(){function r(){this.indexedDB=Vc()}return r.prototype.listModels=function(){return Y(this,void 0,void 0,function(){var t=this;return $(this,function(e){return[2,new Promise(function(n,a){var o=t.indexedDB.open("tensorflowjs",1);o.onupgradeneeded=function(){return jo(o)},o.onsuccess=function(){var i=o.result,s=i.transaction(hn,"readonly"),u=s.objectStore(hn).getAll();u.onsuccess=function(){for(var c={},l=0,h=u.result;l<h.length;l++){var d=h[l];c[d.modelPath]=d.modelArtifactsInfo}n(c)},u.onerror=function(c){return i.close(),a(u.error)},s.oncomplete=function(){return i.close()}},o.onerror=function(i){return a(o.error)}})]})})},r.prototype.removeModel=function(t){return Y(this,void 0,void 0,function(){var e=this;return $(this,function(n){var a;return t=(a=t).startsWith(Qn.URL_SCHEME)?a.slice(Qn.URL_SCHEME.length):a,[2,new Promise(function(o,i){var s=e.indexedDB.open("tensorflowjs",1);s.onupgradeneeded=function(){return jo(s)},s.onsuccess=function(){var u,c=s.result,l=c.transaction(hn,"readwrite"),h=l.objectStore(hn),d=h.get(t);d.onsuccess=function(){if(d.result==null)return c.close(),i(new Error("Cannot find model with path '"+t+"' in IndexedDB."));var f=h.delete(t),p=function(){var g=(u=c.transaction(Sn,"readwrite")).objectStore(Sn).delete(t);g.onsuccess=function(){return o(d.result.modelArtifactsInfo)},g.onerror=function(v){return i(d.error)}};f.onsuccess=p,f.onerror=function(g){return p(),c.close(),i(d.error)}},d.onerror=function(f){return c.close(),i(d.error)},l.oncomplete=function(){u==null?c.close():u.oncomplete=function(){return c.close()}}},s.onerror=function(u){return i(s.error)}})]})})},r}();if(O().getBool("IS_BROWSER"))try{fn.registerManager(Qn.URL_SCHEME,new gm)}catch{}var $t="/",Yn="tensorflowjs_models",Gc="info",mm="model_topology",ym="weight_specs",bm="weight_data",xm="model_metadata";function Hc(r){return{info:[Yn,r,Gc].join($t),topology:[Yn,r,mm].join($t),weightSpecs:[Yn,r,ym].join($t),weightData:[Yn,r,bm].join($t),modelMetadata:[Yn,r,xm].join($t)}}function wm(r){var t=r.split($t);if(t.length<3)throw new Error("Invalid key format: "+r);return t.slice(1,t.length-1).join($t)}var er=function(){function r(t){if(!O().getBool("IS_BROWSER")||typeof window>"u"||window.localStorage===void 0)throw new Error("The current environment does not support local storage.");if(this.LS=window.localStorage,t==null||!t)throw new Error("For local storage, modelPath must not be null, undefined or empty.");this.modelPath=t,this.keys=Hc(this.modelPath)}return r.prototype.save=function(t){return Y(this,void 0,void 0,function(){var e,n,a;return $(this,function(o){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");e=JSON.stringify(t.modelTopology),n=JSON.stringify(t.weightSpecs),a=Lr(t);try{return this.LS.setItem(this.keys.info,JSON.stringify(a)),this.LS.setItem(this.keys.topology,e),this.LS.setItem(this.keys.weightSpecs,n),this.LS.setItem(this.keys.weightData,function(i){if(Ho)return Buffer.from(i).toString("base64");for(var s=new Uint8Array(i),u="",c=0,l=s.length;c<l;c++)u+=String.fromCharCode(s[c]);return btoa(u)}(t.weightData)),this.LS.setItem(this.keys.modelMetadata,JSON.stringify({format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,userDefinedMetadata:t.userDefinedMetadata})),[2,{modelArtifactsInfo:a}]}catch{throw this.LS.removeItem(this.keys.info),this.LS.removeItem(this.keys.topology),this.LS.removeItem(this.keys.weightSpecs),this.LS.removeItem(this.keys.weightData),this.LS.removeItem(this.keys.modelMetadata),new Error("Failed to save model '"+this.modelPath+"' to local storage: size quota being exceeded is a possible cause of this failure: modelTopologyBytes="+a.modelTopologyBytes+", weightSpecsBytes="+a.weightSpecsBytes+", weightDataBytes="+a.weightDataBytes+".")}return[2]})})},r.prototype.load=function(){return Y(this,void 0,void 0,function(){var t,e,n,a,o,i,s;return $(this,function(u){if((t=JSON.parse(this.LS.getItem(this.keys.info)))==null)throw new Error("In local storage, there is no model with name '"+this.modelPath+"'");if(t.modelTopologyType!=="JSON")throw new Error("BrowserLocalStorage does not support loading non-JSON model topology yet.");if(e={},(n=JSON.parse(this.LS.getItem(this.keys.topology)))==null)throw new Error("In local storage, the topology of model '"+this.modelPath+"' is missing.");if(e.modelTopology=n,(a=JSON.parse(this.LS.getItem(this.keys.weightSpecs)))==null)throw new Error("In local storage, the weight specs of model '"+this.modelPath+"' are missing.");if(e.weightSpecs=a,(o=this.LS.getItem(this.keys.modelMetadata))!=null&&(i=JSON.parse(o),e.format=i.format,e.generatedBy=i.generatedBy,e.convertedBy=i.convertedBy,e.userDefinedMetadata=i.userDefinedMetadata),(s=this.LS.getItem(this.keys.weightData))==null)throw new Error("In local storage, the binary weight values of model '"+this.modelPath+"' are missing.");return e.weightData=function(c){if(Ho){var l=Buffer.from(c,"base64");return l.buffer.slice(l.byteOffset,l.byteOffset+l.byteLength)}for(var h=atob(c),d=new Uint8Array(h.length),f=0;f<h.length;++f)d.set([h.charCodeAt(f)],f);return d.buffer}(s),[2,e]})})},r.URL_SCHEME="localstorage://",r}(),Zs=function(r){return O().getBool("IS_BROWSER")&&!Array.isArray(r)&&r.startsWith(er.URL_SCHEME)?(t=r.slice(er.URL_SCHEME.length),new er(t)):null;var t};lt.registerSaveRouter(Zs),lt.registerLoadRouter(Zs);var Cm=function(){function r(){E(O().getBool("IS_BROWSER"),function(){return"Current environment is not a web browser"}),E(typeof window>"u"||window.localStorage!==void 0,function(){return"Current browser does not appear to support localStorage"}),this.LS=window.localStorage}return r.prototype.listModels=function(){return Y(this,void 0,void 0,function(){var t,e,n,a,o,i;return $(this,function(s){for(t={},e=Yn+$t,n=$t+Gc,a=0;a<this.LS.length;++a)(o=this.LS.key(a)).startsWith(e)&&o.endsWith(n)&&(i=wm(o),t[i]=JSON.parse(this.LS.getItem(o)));return[2,t]})})},r.prototype.removeModel=function(t){return Y(this,void 0,void 0,function(){var e,n;return $(this,function(a){var o;if(t=(o=t).startsWith(er.URL_SCHEME)?o.slice(er.URL_SCHEME.length):o,e=Hc(t),this.LS.getItem(e.info)==null)throw new Error("Cannot find model at path '"+t+"'");return n=JSON.parse(this.LS.getItem(e.info)),this.LS.removeItem(e.info),this.LS.removeItem(e.topology),this.LS.removeItem(e.weightSpecs),this.LS.removeItem(e.weightData),[2,n]})})},r}();if(O().getBool("IS_BROWSER"))try{fn.registerManager(er.URL_SCHEME,new Cm)}catch{}var _m="model",Em=".json",Im=".weights.bin";function Js(r){return new Promise(function(t){return setTimeout(t)}).then(r)}var wo=function(){function r(t){if(!O().getBool("IS_BROWSER"))throw new Error("browserDownloads() cannot proceed because the current environment is not a browser.");t.startsWith(r.URL_SCHEME)&&(t=t.slice(r.URL_SCHEME.length)),t!=null&&t.length!==0||(t=_m),this.modelTopologyFileName=t+Em,this.weightDataFileName=t+Im}return r.prototype.save=function(t){return Y(this,void 0,void 0,function(){var e,n,a,o,i,s;return $(this,function(u){switch(u.label){case 0:if(typeof document>"u")throw new Error("Browser downloads are not supported in this environment since `document` is not present");if(e=window.URL.createObjectURL(new Blob([t.weightData],{type:"application/octet-stream"})),!(t.modelTopology instanceof ArrayBuffer))return[3,1];throw new Error("BrowserDownloads.save() does not support saving model topology in binary formats yet.");case 1:return n=[{paths:["./"+this.weightDataFileName],weights:t.weightSpecs}],a={modelTopology:t.modelTopology,format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,weightsManifest:n},o=window.URL.createObjectURL(new Blob([JSON.stringify(a)],{type:"application/json"})),(i=this.jsonAnchor==null?document.createElement("a"):this.jsonAnchor).download=this.modelTopologyFileName,i.href=o,[4,Js(function(){return i.dispatchEvent(new MouseEvent("click"))})];case 2:return u.sent(),t.weightData==null?[3,4]:((s=this.weightDataAnchor==null?document.createElement("a"):this.weightDataAnchor).download=this.weightDataFileName,s.href=e,[4,Js(function(){return s.dispatchEvent(new MouseEvent("click"))})]);case 3:u.sent(),u.label=4;case 4:return[2,{modelArtifactsInfo:Lr(t)}]}})})},r.URL_SCHEME="downloads://",r}(),km=function(){function r(t){if(t==null||t.length<1)throw new Error("When calling browserFiles, at least 1 file is required, but received "+t);this.files=t}return r.prototype.load=function(){return Y(this,void 0,void 0,function(){var t,e,n=this;return $(this,function(a){return t=this.files[0],e=this.files.slice(1),[2,new Promise(function(o,i){var s=new FileReader;s.onload=function(u){var c=JSON.parse(u.target.result),l=c.modelTopology;if(l!=null){e.length===0&&o({modelTopology:l});var h=c.weightsManifest;if(h!=null){var d;try{d=n.checkManifestAndWeightFiles(h,e)}catch(v){return void i(v)}var f=[],p=[],g=[];h.forEach(function(v){v.paths.forEach(function(m){p.push(m),g.push(null)}),f.push.apply(f,v.weights)}),h.forEach(function(v){v.paths.forEach(function(m){var b=new FileReader;b.onload=function(x){var y=x.target.result,w=p.indexOf(m);g[w]=y,g.indexOf(null)===-1&&o({modelTopology:l,weightSpecs:f,weightData:Di(g),format:c.format,generatedBy:c.generatedBy,convertedBy:c.convertedBy,userDefinedMetadata:c.userDefinedMetadata})},b.onerror=function(x){return i("Failed to weights data from file of path '"+m+"'.")},b.readAsArrayBuffer(d[m])})})}else i(new Error("weightManifest field is missing from file "+t.name))}else i(new Error("modelTopology field is missing from file "+t.name))},s.onerror=function(u){return i("Failed to read model topology and weights manifest JSON from file '"+t.name+"'. BrowserFiles supports loading Keras-style tf.Model artifacts only.")},s.readAsText(t)})]})})},r.prototype.checkManifestAndWeightFiles=function(t,e){for(var n=[],a=e.map(function(u){return Xs(u.name)}),o={},i=0,s=t;i<s.length;i++)s[i].paths.forEach(function(u){var c=Xs(u);if(n.indexOf(c)!==-1)throw new Error("Duplicate file basename found in weights manifest: '"+c+"'");if(n.push(c),a.indexOf(c)===-1)throw new Error("Weight file with basename '"+c+"' is not provided.");o[u]=e[a.indexOf(c)]});if(n.length!==e.length)throw new Error("Mismatch in the number of files in weights manifest ("+n.length+") and the number of weight files provided ("+e.length+").");return o},r}();function Qs(r,t,e,n){(function(o){E(o!=null&&Array.isArray(o)&&o.length>0,function(){return"promises must be a none empty array"})})(r),function(o,i){E(o>=0&&o<=1,function(){return"Progress fraction must be in range [0, 1], but got startFraction "+o}),E(i>=0&&i<=1,function(){return"Progress fraction must be in range [0, 1], but got endFraction "+i}),E(i>=o,function(){return"startFraction must be no more than endFraction, but got startFraction "+o+" and endFraction "+i})}(e=e??0,n=n??1);var a=0;return Promise.all(r.map(function(o){return o.then(function(i){var s=e+ ++a/r.length*(n-e);return t(s),i}),o}))}function jc(r,t){return Y(this,void 0,void 0,function(){var e,n,a,o,i,s,u,c,l;return $(this,function(h){switch(h.label){case 0:return t==null&&(t={}),e=t.fetchFunc==null?O().platform.fetch:t.fetchFunc,n=r.map(function(d){return e(d,t.requestInit,{isBinary:!0})}),a=0,o=.5,t.onProgress!=null?[3,2]:[4,Promise.all(n)];case 1:return i=h.sent(),[3,4];case 2:return[4,Qs(n,t.onProgress,a,o)];case 3:i=h.sent(),h.label=4;case 4:return s=i.map(function(d){return d.arrayBuffer()}),u=.5,c=1,t.onProgress!=null?[3,6]:[4,Promise.all(s)];case 5:return l=h.sent(),[3,8];case 6:return[4,Qs(s,t.onProgress,u,c)];case 7:l=h.sent(),h.label=8;case 8:return[2,l]}})})}function eu(r){var t=this;return function(e,n,a){return n===void 0&&(n=""),Y(t,void 0,void 0,function(){var o,i,s,u,c,l,h,d,f,p;return $(this,function(g){switch(g.label){case 0:if(o=e.map(function(){return!1}),i={},s=a!=null?a.map(function(){return!1}):[],u=[],e.forEach(function(v,m){var b=0;v.weights.forEach(function(x){var y="quantization"in x?x.quantization.dtype:x.dtype,w=Go[y]*Z(x.shape),C=function(){o[m]=!0,i[m]==null&&(i[m]=[]),i[m].push({manifestEntry:x,groupOffset:b,sizeBytes:w})};a!=null?a.forEach(function(R,S){R===x.name&&(C(),s[S]=!0)}):C(),u.push(x.name),b+=w})}),!s.every(function(v){return v}))throw c=a.filter(function(v,m){return!s[m]}),new Error("Could not find weights in manifest with names: "+c.join(", ")+`. 
Manifest JSON has weights with names: `+u.join(", ")+".");return l=o.reduce(function(v,m,b){return m&&v.push(b),v},[]),h=[],l.forEach(function(v){e[v].paths.forEach(function(m){var b=n+(n.endsWith("/")?"":"/")+m;h.push(b)})}),[4,r(h)];case 1:return d=g.sent(),f={},p=0,l.forEach(function(v){for(var m=e[v].paths.length,b=0,x=0;x<m;x++)b+=d[p+x].byteLength;for(var y=new ArrayBuffer(b),w=new Uint8Array(y),C=0,R=0;R<m;R++){var S=new Uint8Array(d[p+R]);w.set(S,C),C+=S.byteLength}i[v].forEach(function(I){var k=Uc(y.slice(I.groupOffset,I.groupOffset+I.sizeBytes),[I.manifestEntry]);for(var F in k)f[F]=k[F]}),p+=m}),[2,f]}})})}}lt.registerSaveRouter(function(r){return O().getBool("IS_BROWSER")&&!Array.isArray(r)&&r.startsWith(wo.URL_SCHEME)?function(t){return t===void 0&&(t="model"),new wo(t)}(r.slice(wo.URL_SCHEME.length)):null});var qc=function(){function r(t,e){if(this.DEFAULT_METHOD="POST",e==null&&(e={}),this.weightPathPrefix=e.weightPathPrefix,this.onProgress=e.onProgress,e.fetchFunc!=null?(E(typeof e.fetchFunc=="function",function(){return"Must pass a function that matches the signature of `fetch` (see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)"}),this.fetch=e.fetchFunc):this.fetch=O().platform.fetch,E(t!=null&&t.length>0,function(){return"URL path for http must not be null, undefined or empty."}),Array.isArray(t)&&E(t.length===2,function(){return"URL paths for http must have a length of 2, (actual length is "+t.length+")."}),this.path=t,e.requestInit!=null&&e.requestInit.body!=null)throw new Error("requestInit is expected to have no pre-existing body, but has one.");this.requestInit=e.requestInit||{}}return r.prototype.save=function(t){return Y(this,void 0,void 0,function(){var e,n,a,o;return $(this,function(i){switch(i.label){case 0:if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserHTTPRequest.save() does not support saving model topology in binary formats yet.");return(e=Object.assign({method:this.DEFAULT_METHOD},this.requestInit)).body=new FormData,n=[{paths:["./model.weights.bin"],weights:t.weightSpecs}],a={modelTopology:t.modelTopology,format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,userDefinedMetadata:t.userDefinedMetadata,weightsManifest:n},e.body.append("model.json",new Blob([JSON.stringify(a)],{type:"application/json"}),"model.json"),t.weightData!=null&&e.body.append("model.weights.bin",new Blob([t.weightData],{type:"application/octet-stream"}),"model.weights.bin"),[4,this.fetch(this.path,e)];case 1:if((o=i.sent()).ok)return[2,{modelArtifactsInfo:Lr(t),responses:[o]}];throw new Error("BrowserHTTPRequest.save() failed due to HTTP response status "+o.status+".")}})})},r.prototype.load=function(){return Y(this,void 0,void 0,function(){var t,e,n,a,o,i,s,u,c,l,h,d;return $(this,function(f){switch(f.label){case 0:return[4,this.fetch(this.path,this.requestInit)];case 1:if(!(t=f.sent()).ok)throw new Error("Request to "+this.path+" failed with status code "+t.status+". Please verify this URL points to the model JSON of the model to load.");f.label=2;case 2:return f.trys.push([2,4,,5]),[4,t.json()];case 3:return e=f.sent(),[3,5];case 4:throw f.sent(),n="Failed to parse model JSON of response from "+this.path+".",this.path.endsWith(".pb")?n+=" Your path contains a .pb file extension. Support for .pb models have been removed in TensorFlow.js 1.0 in favor of .json models. You can re-convert your Python TensorFlow model using the TensorFlow.js 1.0 conversion scripts or you can convert your.pb models with the 'pb2json'NPM script in the tensorflow/tfjs-converter repository.":n+=" Please make sure the server is serving valid JSON for this request.",new Error(n);case 5:if(a=e.modelTopology,o=e.weightsManifest,i=e.generatedBy,s=e.convertedBy,u=e.format,c=e.userDefinedMetadata,a==null&&o==null)throw new Error("The JSON from HTTP path "+this.path+" contains neither model topology or manifest for weights.");return o==null?[3,7]:[4,this.loadWeights(o)];case 6:d=f.sent(),l=d[0],h=d[1],f.label=7;case 7:return[2,{modelTopology:a,weightSpecs:l,weightData:h,userDefinedMetadata:c,generatedBy:i,convertedBy:s,format:u}]}})})},r.prototype.loadWeights=function(t){return Y(this,void 0,void 0,function(){var e,n,a,o,i,s,u,c,l,h,d;return $(this,function(f){switch(f.label){case 0:for(e=Array.isArray(this.path)?this.path[1]:this.path,n=function(p){var g=p.lastIndexOf("/"),v=p.lastIndexOf("?"),m=p.substring(0,g),b=v>g?p.substring(v):"";return[m+"/",b]}(e),a=n[0],o=n[1],i=this.weightPathPrefix||a,s=[],u=0,c=t;u<c.length;u++)l=c[u],s.push.apply(s,l.weights);return h=[],t.forEach(function(p){p.paths.forEach(function(g){h.push(i+g+o)})}),[4,jc(h,{requestInit:this.requestInit,fetchFunc:this.fetch,onProgress:this.onProgress})];case 1:return d=f.sent(),[2,[s,Di(d)]]}})})},r.URL_SCHEME_REGEX=/^https?:\/\//,r}();function qo(r){return r.match(qc.URL_SCHEME_REGEX)!=null}var tu=function(r,t){return typeof fetch>"u"?null:(Array.isArray(r)?r.every(function(e){return qo(e)}):qo(r))?Ko(r,{onProgress:t}):null};function Ko(r,t){return new qc(r,t)}lt.registerSaveRouter(tu),lt.registerLoadRouter(tu);var Co=function(){function r(t){this.modelArtifacts=t}return r.prototype.load=function(){return Y(this,void 0,void 0,function(){return $(this,function(t){return[2,this.modelArtifacts]})})},r}(),Sm=function(){function r(t){this.saveHandler=t}return r.prototype.save=function(t){return Y(this,void 0,void 0,function(){return $(this,function(e){return[2,this.saveHandler(t)]})})},r}(),Kc=Object.freeze({browserFiles:function(r){return new km(r)},browserHTTPRequest:function(r,t){return Ko(r,t)},concatenateArrayBuffers:Di,decodeWeights:Uc,encodeWeights:function(r,t){return Y(this,void 0,void 0,function(){var e,n,a,o,i,s=this;return $(this,function(u){switch(u.label){case 0:for(e=[],n=[],a=Array.isArray(r)?r.map(function(c){return c.name}):Object.keys(r),o=function(c){var l=a[c],h=Array.isArray(r)?r[c].tensor:r[l];if(h.dtype!=="float32"&&h.dtype!=="int32"&&h.dtype!=="bool"&&h.dtype!=="string")throw new Error("Unsupported dtype in weight '"+l+"': "+h.dtype);var d={name:l,shape:h.shape,dtype:h.dtype};if(h.dtype==="string"){var f=new Promise(function(p){return Y(s,void 0,void 0,function(){var g,v,m,b,x,y,w;return $(this,function(C){switch(C.label){case 0:return[4,h.bytes()];case 1:for(g=C.sent(),v=g.reduce(function(R,S){return R+S.length},0)+wa*g.length,m=new Uint8Array(v),b=0,x=0;x<g.length;x++)y=g[x],w=new Uint8Array(new Uint32Array([y.length]).buffer),m.set(w,b),b+=wa,m.set(y,b),b+=y.length;return p(m),[2]}})})});n.push(f)}else n.push(h.data());t!=null&&(d.group=t),e.push(d)},i=0;i<a.length;++i)o(i);return[4,Promise.all(n)];case 1:return[2,{data:vm(u.sent()),specs:e}]}})})},fromMemory:function(r,t,e,n){return arguments.length===1?r.modelTopology!=null||r.weightSpecs!=null?new Co(r):new Co({modelTopology:r}):new Co({modelTopology:r,weightSpecs:t,weightData:e,trainingConfig:n})},getLoadHandlers:function(r,t){return lt.getLoadHandlers(r,t)},getModelArtifactsInfoForJSON:Lr,getSaveHandlers:function(r){return lt.getSaveHandlers(r)},http:Ko,isHTTPScheme:qo,loadWeights:function(r,t,e,n){return t===void 0&&(t=""),Y(this,void 0,void 0,function(){return $(this,function(a){return[2,eu(function(o){return jc(o,{requestInit:n})})(r,t,e)]})})},registerLoadRouter:function(r){return lt.registerLoadRouter(r)},registerSaveRouter:function(r){return lt.registerSaveRouter(r)},weightsLoaderFactory:eu,withSaveHandler:function(r){return new Sm(r)},copyModel:function(r,t){return Y(this,void 0,void 0,function(){return $(this,function(e){return[2,Ys(r,t,!1)]})})},listModels:function(){return Y(this,void 0,void 0,function(){var r,t,e,n,a,o,i;return $(this,function(s){switch(s.label){case 0:r=fn.getSchemes(),t={},e=0,n=r,s.label=1;case 1:return e<n.length?(a=n[e],[4,fn.getManager(a).listModels()]):[3,4];case 2:for(i in o=s.sent())t[a+Jn+i]=o[i];s.label=3;case 3:return e++,[3,1];case 4:return[2,t]}})})},moveModel:function(r,t){return Y(this,void 0,void 0,function(){return $(this,function(e){return[2,Ys(r,t,!0)]})})},removeModel:function(r){return Y(this,void 0,void 0,function(){var t;return $(this,function(e){return t=ta(r),[2,fn.getManager(t.scheme).removeModel(t.path)]})})}}),Hn;D({confusionMatrix_:function(r,t,e){var n=_(r,"labels","confusionMatrix"),a=_(t,"predictions","confusionMatrix");E(e==null||e>0&&Number.isInteger(e),function(){return"If provided, numClasses must be a positive integer, but got "+e}),E(n.rank===1,function(){return"Expected the rank of labels to be 1, but got "+n.rank}),E(a.rank===1,function(){return"Expected the rank of predictions to be 1, but got "+a.rank}),E(n.shape[0]===a.shape[0],function(){return"Mismatch in the number of examples: "+n.shape[0]+" vs. "+a.shape[0]+". Labels and predictions should have the same number of elements."}),E(e>0&&Number.isInteger(e),function(){return"numClasses is required to be a positive integer, but got "+e});var o=Lo(n.asType("int32"),e),i=Lo(a.asType("int32"),e);return o.transpose().matMul(i).asType("int32")}});var Rm=D({fromPixels_:function(r,t){if(t===void 0&&(t=3),t>4)throw new Error("Cannot construct Tensor with more than 4 channels from pixels.");if(r==null)throw new Error("pixels passed to tf.browser.fromPixels() can not be null");var e=!1,n=!1,a=!1,o=!1,i=!1;if(r.data instanceof Uint8Array)e=!0;else if(typeof ImageData<"u"&&r instanceof ImageData)n=!0;else if(typeof HTMLVideoElement<"u"&&r instanceof HTMLVideoElement)a=!0;else if(typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement)o=!0;else{if(r.getContext==null)throw new Error("pixels passed to tf.browser.fromPixels() must be either an HTMLVideoElement, HTMLImageElement, HTMLCanvasElement, ImageData in browser, or OffscreenCanvas, ImageData in webworker or {data: Uint32Array, width: number, height: number}, but was "+r.constructor.name);i=!0}if(a&&a&&r.readyState<2)throw new Error("The video element has not loaded data yet. Please wait for `loadeddata` event on the <video> element.");if(mu("FromPixels",N.backendName)!=null)return N.runKernel("FromPixels",{pixels:r},{numChannels:t});var s,u,c=a?[r.videoWidth,r.videoHeight]:[r.width,r.height],l=c[0],h=c[1];if(i?s=r.getContext("2d").getImageData(0,0,l,h).data:n||e?s=r.data:(o||a)&&(Hn==null&&(Hn=document.createElement("canvas").getContext("2d")),Hn.canvas.width=l,Hn.canvas.height=h,Hn.drawImage(r,0,0,l,h),s=Hn.getImageData(0,0,l,h).data),t===4)u=new Int32Array(s);else{var d=l*h;u=new Int32Array(d*t);for(var f=0;f<d;f++)for(var p=0;p<t;++p)u[f*t+p]=s[4*f+p]}return oi(u,[h,l,t],"int32")}}),Ti=Object.freeze({toPixels:function(r,t){return Y(this,void 0,void 0,function(){var e,n,a,o,i,s,u,c,l,h,d,f,p,g,v,m,b,x,y,w,C,R,S;return $(this,function(I){switch(I.label){case 0:if(e=_(r,"img","toPixels"),r instanceof ke||(e=e.toInt()),e.rank!==2&&e.rank!==3)throw new Error("toPixels only supports rank 2 or 3 tensors, got rank "+e.rank+".");if(n=e.shape.slice(0,2),a=n[0],o=n[1],(i=e.rank===2?1:e.shape[2])>4||i===2)throw new Error("toPixels only supports depth of size 1, 3 or 4 but got "+i);return[4,e.data()];case 1:return s=I.sent(),u=e.min(),c=e.max(),[4,Promise.all([u.data(),c.data()])];case 2:if(l=I.sent(),h=l[0],d=l[1],f=h[0],p=d[0],u.dispose(),c.dispose(),e.dtype==="float32"){if(f<0||p>1)throw new Error("Tensor values for a float32 Tensor must be in the range [0 - 1] but got range ["+f+" - "+p+"].")}else{if(e.dtype!=="int32")throw new Error("Unsupported type for toPixels: "+e.dtype+". Please use float32 or int32 tensors.");if(f<0||p>255)throw new Error("Tensor values for a int32 Tensor must be in the range [0 - 255] but got range ["+f+" - "+p+"].")}for(g=e.dtype==="float32"?255:1,v=new Uint8ClampedArray(o*a*4),m=0;m<a*o;++m)b=void 0,x=void 0,y=void 0,w=void 0,i===1?(b=s[m]*g,x=s[m]*g,y=s[m]*g,w=255):i===3?(b=s[3*m]*g,x=s[3*m+1]*g,y=s[3*m+2]*g,w=255):i===4&&(b=s[4*m]*g,x=s[4*m+1]*g,y=s[4*m+2]*g,w=s[4*m+3]*g),v[(C=4*m)+0]=Math.round(b),v[C+1]=Math.round(x),v[C+2]=Math.round(y),v[C+3]=Math.round(w);return t!=null&&(t.width=o,t.height=a,R=t.getContext("2d"),S=new ImageData(v,o,a),R.putImageData(S,0,0)),e!==r&&e.dispose(),[2,v]}})})},fromPixels:Rm}),Am=function(){function r(){}return r.prototype.getClassName=function(){return this.constructor.className},r.fromConfig=function(t,e){return new t(e)},r}(),Dm=function(){function r(){this.classNameMap={}}return r.getMap=function(){return r.instance==null&&(r.instance=new r),r.instance},r.register=function(t){r.getMap().classNameMap[t.className]=[t,t.fromConfig]},r}();function Bn(r){E(r.className!=null,function(){return"Class being registered does not have the static className property defined."}),E(typeof r.className=="string",function(){return"className is required to be a string, but got type "+typeof r.className}),E(r.className.length>0,function(){return"Class being registered has an empty-string as its className, which is disallowed."}),Dm.register(r)}var Ln=function(r){function t(){return r!==null&&r.apply(this,arguments)||this}return It(t,r),t.prototype.minimize=function(e,n,a){n===void 0&&(n=!1);var o=this.computeGradients(e,a),i=o.value,s=o.grads;if(a!=null){var u=a.map(function(c){return{name:c.name,tensor:s[c.name]}});this.applyGradients(u)}else this.applyGradients(s);return nt(s),n?i:(i.dispose(),null)},Object.defineProperty(t.prototype,"iterations",{get:function(){return this.iterations_==null&&(this.iterations_=0),this.iterations_},enumerable:!0,configurable:!0}),t.prototype.incrementIterations=function(){this.iterations_=this.iterations+1},t.prototype.computeGradients=function(e,n){return Wd(e,n)},t.prototype.dispose=function(){this.iterations_!=null&&nt(this.iterations_)},t.prototype.saveIterations=function(){return Y(this,void 0,void 0,function(){return $(this,function(e){return this.iterations_==null&&(this.iterations_=0),[2,{name:"iter",tensor:q(this.iterations_,"int32")}]})})},t.prototype.getWeights=function(){return Y(this,void 0,void 0,function(){return $(this,function(e){throw new Error("getWeights() is not implemented for this optimizer yet.")})})},t.prototype.setWeights=function(e){return Y(this,void 0,void 0,function(){return $(this,function(n){throw new Error("setWeights() is not implemented for this optimizer class "+this.getClassName())})})},t.prototype.extractIterations=function(e){return Y(this,void 0,void 0,function(){var n;return $(this,function(a){switch(a.label){case 0:return n=this,[4,e[0].tensor.data()];case 1:return n.iterations_=a.sent()[0],[2,e.slice(1)]}})})},t}(Am);Object.defineProperty(Ln,Symbol.hasInstance,{value:function(r){return r.minimize!=null&&r.computeGradients!=null&&r.applyGradients!=null}});var Tm=function(r){function t(e,n,a){a===void 0&&(a=null);var o=r.call(this)||this;return o.learningRate=e,o.rho=n,o.epsilon=a,o.accumulatedGrads=[],o.accumulatedUpdates=[],a==null&&(o.epsilon=N.backend.epsilon()),o}return It(t,r),t.prototype.applyGradients=function(e){var n=this;(Array.isArray(e)?e.map(function(a){return a.name}):Object.keys(e)).forEach(function(a,o){var i=N.registeredVariables[a];n.accumulatedGrads[o]==null&&(n.accumulatedGrads[o]={originalName:a+"/accum_grad",variable:X(function(){return me(i).variable(!1)})}),n.accumulatedUpdates[o]==null&&(n.accumulatedUpdates[o]={originalName:a+"/accum_var",variable:X(function(){return me(i).variable(!1)})});var s=Array.isArray(e)?e[o].tensor:e[a];if(s!=null){var u=n.accumulatedGrads[o].variable,c=n.accumulatedUpdates[o].variable;X(function(){var l=u.mul(n.rho).add(s.square().mul(1-n.rho)),h=c.add(n.epsilon).sqrt().div(u.add(n.epsilon).sqrt()).mul(s),d=c.mul(n.rho).add(h.square().mul(1-n.rho));u.assign(l),c.assign(d);var f=h.mul(-n.learningRate).add(i);i.assign(f)})}}),this.incrementIterations()},t.prototype.dispose=function(){this.accumulatedUpdates!=null&&(nt(this.accumulatedGrads.map(function(e){return e.variable})),nt(this.accumulatedUpdates.map(function(e){return e.variable})))},t.prototype.getWeights=function(){return Y(this,void 0,void 0,function(){var e;return $(this,function(n){switch(n.label){case 0:return e=this.accumulatedGrads.concat(this.accumulatedUpdates),[4,this.saveIterations()];case 1:return[2,[n.sent()].concat(e.map(function(a){return{name:a.originalName,tensor:a.variable}}))]}})})},t.prototype.setWeights=function(e){return Y(this,void 0,void 0,function(){var n;return $(this,function(a){switch(a.label){case 0:return[4,this.extractIterations(e)];case 1:return e=a.sent(),n=e.length/2,this.accumulatedGrads=e.slice(0,n).map(function(o){return{originalName:o.name,variable:o.tensor.variable(!1)}}),this.accumulatedUpdates=e.slice(n,2*n).map(function(o){return{originalName:o.name,variable:o.tensor.variable(!1)}}),[2]}})})},t.prototype.getConfig=function(){return{learningRate:this.learningRate,rho:this.rho,epsilon:this.epsilon}},t.fromConfig=function(e,n){return new e(n.learningRate,n.rho,n.epsilon)},t.className="Adadelta",t}(Ln);Bn(Tm);var Nm=function(r){function t(e,n){n===void 0&&(n=.1);var a=r.call(this)||this;return a.learningRate=e,a.initialAccumulatorValue=n,a.accumulatedGrads=[],a}return It(t,r),t.prototype.applyGradients=function(e){var n=this;(Array.isArray(e)?e.map(function(a){return a.name}):Object.keys(e)).forEach(function(a,o){var i=N.registeredVariables[a];n.accumulatedGrads[o]==null&&(n.accumulatedGrads[o]={originalName:a+"/accumulator",variable:X(function(){return zt(i.shape,n.initialAccumulatorValue).variable(!1)})});var s=Array.isArray(e)?e[o].tensor:e[a];if(s!=null){var u=n.accumulatedGrads[o].variable;X(function(){var c=u.add(s.square());u.assign(c);var l=s.div(c.add(N.backend.epsilon()).sqrt()).mul(-n.learningRate).add(i);i.assign(l)})}}),this.incrementIterations()},t.prototype.dispose=function(){this.accumulatedGrads!=null&&nt(this.accumulatedGrads.map(function(e){return e.variable}))},t.prototype.getWeights=function(){return Y(this,void 0,void 0,function(){return $(this,function(e){switch(e.label){case 0:return[4,this.saveIterations()];case 1:return[2,[e.sent()].concat(this.accumulatedGrads.map(function(n){return{name:n.originalName,tensor:n.variable}}))]}})})},t.prototype.setWeights=function(e){return Y(this,void 0,void 0,function(){return $(this,function(n){switch(n.label){case 0:return[4,this.extractIterations(e)];case 1:return e=n.sent(),this.accumulatedGrads=e.map(function(a){return{originalName:a.name,variable:a.tensor.variable(!1)}}),[2]}})})},t.prototype.getConfig=function(){return{learningRate:this.learningRate,initialAccumulatorValue:this.initialAccumulatorValue}},t.fromConfig=function(e,n){return new e(n.learningRate,n.initialAccumulatorValue)},t.className="Adagrad",t}(Ln);Bn(Nm);var Fm=function(r){function t(e,n,a,o){o===void 0&&(o=null);var i=r.call(this)||this;return i.learningRate=e,i.beta1=n,i.beta2=a,i.epsilon=o,i.accumulatedFirstMoment=[],i.accumulatedSecondMoment=[],X(function(){i.accBeta1=q(n).variable(),i.accBeta2=q(a).variable()}),o==null&&(i.epsilon=N.backend.epsilon()),i}return It(t,r),t.prototype.applyGradients=function(e){var n=this,a=Array.isArray(e)?e.map(function(o){return o.name}):Object.keys(e);X(function(){var o=Le(1,n.accBeta1),i=Le(1,n.accBeta2);a.forEach(function(s,u){var c=N.registeredVariables[s];n.accumulatedFirstMoment[u]==null&&(n.accumulatedFirstMoment[u]={originalName:s+"/m",variable:X(function(){return me(c).variable(!1)})}),n.accumulatedSecondMoment[u]==null&&(n.accumulatedSecondMoment[u]={originalName:s+"/v",variable:X(function(){return me(c).variable(!1)})});var l=Array.isArray(e)?e[u].tensor:e[s];if(l!=null){var h=n.accumulatedFirstMoment[u].variable,d=n.accumulatedSecondMoment[u].variable,f=h.mul(n.beta1).add(l.mul(1-n.beta1)),p=d.mul(n.beta2).add(l.square().mul(1-n.beta2)),g=f.div(o),v=p.div(i);h.assign(f),d.assign(p);var m=g.div(v.sqrt().add(n.epsilon)).mul(-n.learningRate).add(c);c.assign(m)}}),n.accBeta1.assign(n.accBeta1.mul(n.beta1)),n.accBeta2.assign(n.accBeta2.mul(n.beta2))}),this.incrementIterations()},t.prototype.dispose=function(){this.accBeta1.dispose(),this.accBeta2.dispose(),this.accumulatedFirstMoment!=null&&nt(this.accumulatedFirstMoment.map(function(e){return e.variable})),this.accumulatedSecondMoment!=null&&nt(this.accumulatedSecondMoment.map(function(e){return e.variable}))},t.prototype.getWeights=function(){return Y(this,void 0,void 0,function(){var e;return $(this,function(n){switch(n.label){case 0:return e=this.accumulatedFirstMoment.concat(this.accumulatedSecondMoment),[4,this.saveIterations()];case 1:return[2,[n.sent()].concat(e.map(function(a){return{name:a.originalName,tensor:a.variable}}))]}})})},t.prototype.setWeights=function(e){return Y(this,void 0,void 0,function(){var n,a=this;return $(this,function(o){switch(o.label){case 0:return[4,this.extractIterations(e)];case 1:return e=o.sent(),X(function(){a.accBeta1.assign(ba(a.beta1,a.iterations_+1)),a.accBeta2.assign(ba(a.beta2,a.iterations_+1))}),n=e.length/2,this.accumulatedFirstMoment=e.slice(0,n).map(function(i){return{originalName:i.name,variable:i.tensor.variable(!1)}}),this.accumulatedSecondMoment=e.slice(n,2*n).map(function(i){return{originalName:i.name,variable:i.tensor.variable(!1)}}),[2]}})})},t.prototype.getConfig=function(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon}},t.fromConfig=function(e,n){return new e(n.learningRate,n.beta1,n.beta2,n.epsilon)},t.className="Adam",t}(Ln);Bn(Fm);var Pm=function(r){function t(e,n,a,o,i){o===void 0&&(o=null),i===void 0&&(i=0);var s=r.call(this)||this;return s.learningRate=e,s.beta1=n,s.beta2=a,s.epsilon=o,s.decay=i,s.accumulatedFirstMoment=[],s.accumulatedWeightedInfNorm=[],X(function(){s.iteration=q(0).variable(),s.accBeta1=q(n).variable()}),o==null&&(s.epsilon=N.backend.epsilon()),s}return It(t,r),t.prototype.applyGradients=function(e){var n=this,a=Array.isArray(e)?e.map(function(o){return o.name}):Object.keys(e);X(function(){var o=Le(1,n.accBeta1),i=wt(-n.learningRate,n.iteration.mul(n.decay).add(1));a.forEach(function(s,u){var c=N.registeredVariables[s];n.accumulatedFirstMoment[u]==null&&(n.accumulatedFirstMoment[u]={originalName:s+"/m",variable:me(c).variable(!1)}),n.accumulatedWeightedInfNorm[u]==null&&(n.accumulatedWeightedInfNorm[u]={originalName:s+"/v",variable:me(c).variable(!1)});var l=Array.isArray(e)?e[u].tensor:e[s];if(l!=null){var h=n.accumulatedFirstMoment[u].variable,d=n.accumulatedWeightedInfNorm[u].variable,f=h.mul(n.beta1).add(l.mul(1-n.beta1)),p=d.mul(n.beta2),g=l.abs(),v=p.maximum(g);h.assign(f),d.assign(v);var m=i.div(o).mul(f.div(v.add(n.epsilon))).add(c);c.assign(m)}}),n.iteration.assign(n.iteration.add(1)),n.accBeta1.assign(n.accBeta1.mul(n.beta1))}),this.incrementIterations()},t.prototype.dispose=function(){this.accBeta1.dispose(),this.iteration.dispose(),this.accumulatedFirstMoment!=null&&nt(this.accumulatedFirstMoment.map(function(e){return e.variable})),this.accumulatedWeightedInfNorm!=null&&nt(this.accumulatedWeightedInfNorm.map(function(e){return e.variable}))},t.prototype.getWeights=function(){return Y(this,void 0,void 0,function(){return $(this,function(e){throw new Error("getWeights() is not implemented for Adamax yet.")})})},t.prototype.setWeights=function(e){return Y(this,void 0,void 0,function(){return $(this,function(n){throw new Error("setWeights() is not implemented for Adamax yet.")})})},t.prototype.getConfig=function(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon,decay:this.decay}},t.fromConfig=function(e,n){return new e(n.learningRate,n.beta1,n.beta2,n.epsilon,n.decay)},t.className="Adamax",t}(Ln);Bn(Pm);var Xc=function(r){function t(e){var n=r.call(this)||this;return n.learningRate=e,n.setLearningRate(e),n}return It(t,r),t.prototype.applyGradients=function(e){var n=this;(Array.isArray(e)?e.map(function(a){return a.name}):Object.keys(e)).forEach(function(a,o){var i=Array.isArray(e)?e[o].tensor:e[a];if(i!=null){var s=N.registeredVariables[a];X(function(){var u=n.c.mul(i).add(s);s.assign(u)})}}),this.incrementIterations()},t.prototype.setLearningRate=function(e){this.learningRate=e,this.c!=null&&this.c.dispose(),this.c=Qh(q(-e))},t.prototype.dispose=function(){this.c.dispose()},t.prototype.getWeights=function(){return Y(this,void 0,void 0,function(){return $(this,function(e){switch(e.label){case 0:return[4,this.saveIterations()];case 1:return[2,[e.sent()]]}})})},t.prototype.setWeights=function(e){return Y(this,void 0,void 0,function(){return $(this,function(n){switch(n.label){case 0:return[4,this.extractIterations(e)];case 1:if((e=n.sent()).length!==0)throw new Error("SGD optimizer does not have settable weights.");return[2]}})})},t.prototype.getConfig=function(){return{learningRate:this.learningRate}},t.fromConfig=function(e,n){return new e(n.learningRate)},t.className="SGD",t}(Ln);Bn(Xc);var Mm=function(r){function t(e,n,a){a===void 0&&(a=!1);var o=r.call(this,e)||this;return o.learningRate=e,o.momentum=n,o.useNesterov=a,o.accumulations=[],o.m=q(o.momentum),o}return It(t,r),t.prototype.applyGradients=function(e){var n=this;(Array.isArray(e)?e.map(function(a){return a.name}):Object.keys(e)).forEach(function(a,o){var i=N.registeredVariables[a];n.accumulations[o]==null&&(n.accumulations[o]={originalName:a+"/momentum",variable:X(function(){return me(i).variable(!1)})});var s=n.accumulations[o].variable,u=Array.isArray(e)?e[o].tensor:e[a];u!=null&&X(function(){var c,l=n.m.mul(s).add(u);c=n.useNesterov?n.c.mul(u.add(l.mul(n.m))).add(i):n.c.mul(l).add(i),s.assign(l),i.assign(c)})}),this.incrementIterations()},t.prototype.dispose=function(){this.m.dispose(),this.accumulations!=null&&nt(this.accumulations.map(function(e){return e.variable}))},t.prototype.setMomentum=function(e){this.momentum=e},t.prototype.getWeights=function(){return Y(this,void 0,void 0,function(){return $(this,function(e){switch(e.label){case 0:return[4,this.saveIterations()];case 1:return[2,[e.sent()].concat(this.accumulations.map(function(n){return{name:n.originalName,tensor:n.variable}}))]}})})},t.prototype.setWeights=function(e){return Y(this,void 0,void 0,function(){return $(this,function(n){switch(n.label){case 0:return[4,this.extractIterations(e)];case 1:return e=n.sent(),this.accumulations=e.map(function(a){return{originalName:a.name,variable:a.tensor.variable(!1)}}),[2]}})})},t.prototype.getConfig=function(){return{learningRate:this.learningRate,momentum:this.momentum,useNesterov:this.useNesterov}},t.fromConfig=function(e,n){return new e(n.learningRate,n.momentum,n.useNesterov)},t.className="Momentum",t}(Xc);Bn(Mm);var Om=function(r){function t(e,n,a,o,i){n===void 0&&(n=.9),a===void 0&&(a=0),o===void 0&&(o=null),i===void 0&&(i=!1);var s=r.call(this)||this;if(s.learningRate=e,s.decay=n,s.momentum=a,s.epsilon=o,s.accumulatedMeanSquares=[],s.accumulatedMoments=[],s.accumulatedMeanGrads=[],s.centered=i,o==null&&(s.epsilon=N.backend.epsilon()),e==null)throw new Error("learningRate for RMSPropOptimizer must be defined.");return s}return It(t,r),t.prototype.applyGradients=function(e){var n=this;(Array.isArray(e)?e.map(function(a){return a.name}):Object.keys(e)).forEach(function(a,o){var i=N.registeredVariables[a];n.accumulatedMeanSquares[o]==null&&(n.accumulatedMeanSquares[o]={originalName:a+"/rms",variable:X(function(){return me(i).variable(!1)})}),n.accumulatedMoments[o]==null&&(n.accumulatedMoments[o]={originalName:a+"/momentum",variable:X(function(){return me(i).variable(!1)})}),n.accumulatedMeanGrads[o]==null&&n.centered&&(n.accumulatedMeanGrads[o]={originalName:a+"/mg",variable:X(function(){return me(i).variable(!1)})});var s=Array.isArray(e)?e[o].tensor:e[a];if(s!=null){var u=n.accumulatedMeanSquares[o].variable,c=n.accumulatedMoments[o].variable;X(function(){var l=u.mul(n.decay).add(s.square().mul(1-n.decay));if(n.centered){var h=n.accumulatedMeanGrads[o].variable,d=h.mul(n.decay).add(s.mul(1-n.decay)),f=c.mul(n.momentum).add(s.mul(n.learningRate).div(l.sub(d.square().add(n.epsilon)).sqrt()));u.assign(l),h.assign(d),c.assign(f);var p=i.sub(f);i.assign(p)}else{var g=u.mul(n.decay).add(s.square().mul(1-n.decay));f=c.mul(n.momentum).add(s.mul(n.learningRate).div(g.add(n.epsilon).sqrt())),u.assign(g),c.assign(f),p=i.sub(f),i.assign(p)}})}}),this.incrementIterations()},t.prototype.dispose=function(){this.accumulatedMeanSquares!=null&&nt(this.accumulatedMeanSquares.map(function(e){return e.variable})),this.accumulatedMeanGrads!=null&&this.centered&&nt(this.accumulatedMeanGrads.map(function(e){return e.variable})),this.accumulatedMoments!=null&&nt(this.accumulatedMoments.map(function(e){return e.variable}))},t.prototype.getWeights=function(){return Y(this,void 0,void 0,function(){var e;return $(this,function(n){switch(n.label){case 0:return e=this.accumulatedMeanSquares.concat(this.accumulatedMoments),this.centered&&e.push.apply(e,this.accumulatedMeanGrads),[4,this.saveIterations()];case 1:return[2,[n.sent()].concat(e.map(function(a){return{name:a.originalName,tensor:a.variable}}))]}})})},t.prototype.setWeights=function(e){return Y(this,void 0,void 0,function(){var n;return $(this,function(a){switch(a.label){case 0:return[4,this.extractIterations(e)];case 1:return e=a.sent(),n=this.centered?e.length/3:e.length/2,this.accumulatedMeanSquares=e.slice(0,n).map(function(o){return{originalName:o.name,variable:o.tensor.variable(!1)}}),this.accumulatedMoments=e.slice(n,2*n).map(function(o){return{originalName:o.name,variable:o.tensor.variable(!1)}}),this.centered&&(this.accumulatedMeanGrads=e.slice(2*n,3*n).map(function(o){return{originalName:o.name,variable:o.tensor.variable(!1)}})),[2]}})})},t.prototype.getConfig=function(){return{learningRate:this.learningRate,decay:this.decay,momentum:this.momentum,epsilon:this.epsilon,centered:this.centered}},t.fromConfig=function(e,n){return new e(n.learningRate,n.decay,n.momentum,n.epsilon,n.centered)},t.className="RMSProp",t}(Ln);Bn(Om);ke.prototype.squaredDifference=function(r){return cc(this,r)},M=um;/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Xo=function(r,t){return Xo=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var a in n)n.hasOwnProperty(a)&&(e[a]=n[a])},Xo(r,t)};function ae(r,t){Xo(r,t);function e(){this.constructor=r}r.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}var Xe=function(){return Xe=Object.assign||function(t){for(var e,n=1,a=arguments.length;n<a;n++){e=arguments[n];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t},Xe.apply(this,arguments)};function Q(r,t,e,n){function a(o){return o instanceof e?o:new e(function(i){i(o)})}return new(e||(e=Promise))(function(o,i){function s(l){try{c(n.next(l))}catch(h){i(h)}}function u(l){try{c(n.throw(l))}catch(h){i(h)}}function c(l){l.done?o(l.value):a(l.value).then(s,u)}c((n=n.apply(r,t||[])).next())})}function ee(r,t){var e={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},n,a,o,i;return i={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(i[Symbol.iterator]=function(){return this}),i;function s(c){return function(l){return u([c,l])}}function u(c){if(n)throw new TypeError("Generator is already executing.");for(;e;)try{if(n=1,a&&(o=c[0]&2?a.return:c[0]?a.throw||((o=a.return)&&o.call(a),0):a.next)&&!(o=o.call(a,c[1])).done)return o;switch(a=0,o&&(c=[c[0]&2,o.value]),c[0]){case 0:case 1:o=c;break;case 4:return e.label++,{value:c[1],done:!1};case 5:e.label++,a=c[1],c=[0];continue;case 7:c=e.ops.pop(),e.trys.pop();continue;default:if(o=e.trys,!(o=o.length>0&&o[o.length-1])&&(c[0]===6||c[0]===2)){e=0;continue}if(c[0]===3&&(!o||c[1]>o[0]&&c[1]<o[3])){e.label=c[1];break}if(c[0]===6&&e.label<o[1]){e.label=o[1],o=c;break}if(o&&e.label<o[2]){e.label=o[2],e.ops.push(c);break}o[2]&&e.ops.pop(),e.trys.pop();continue}c=t.call(r,e)}catch(l){c=[6,l],a=0}finally{n=o=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}}function mr(){for(var r=0,t=0,e=arguments.length;t<e;t++)r+=arguments[t].length;for(var n=Array(r),a=0,t=0;t<e;t++)for(var o=arguments[t],i=0,s=o.length;i<s;i++,a++)n[a]=o[i];return n}var Rn=function(){function r(t,e){if(!An(t)||!An(e))throw new Error("Dimensions.constructor - expected width and height to be valid numbers, instead have "+JSON.stringify({width:t,height:e}));this._width=t,this._height=e}return Object.defineProperty(r.prototype,"width",{get:function(){return this._width},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"height",{get:function(){return this._height},enumerable:!0,configurable:!0}),r.prototype.reverse=function(){return new r(1/this.width,1/this.height)},r}();function Ba(r,t){return r instanceof ke&&r.shape.length===t}function Bm(r){return Ba(r,2)}function La(r){return Ba(r,3)}function pn(r){return Ba(r,4)}function Lm(r){return r%1!==0}function nu(r){return r%2===0}function Wm(r,t){t===void 0&&(t=2);var e=Math.pow(10,t);return Math.floor(r*e)/e}function ru(r){return r&&r.width&&r.height}function zm(r,t){var e=r.width,n=r.height,a=t/Math.max(n,e);return new Rn(Math.round(e*a),Math.round(n*a))}function Ni(r){return r.reduce(function(t,e){return t.add(e)},new be(0,0)).div(new be(r.length,r.length))}function Er(r,t,e){return Array(r).fill(0).map(function(n,a){return t+a*e})}function An(r){return!!r&&r!==1/0&&r!==-1/0&&!isNaN(r)||r===0}function au(r){return An(r)&&0<=r&&r<=1}var be=function(){function r(t,e){this._x=t,this._y=e}return Object.defineProperty(r.prototype,"x",{get:function(){return this._x},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"y",{get:function(){return this._y},enumerable:!0,configurable:!0}),r.prototype.add=function(t){return new r(this.x+t.x,this.y+t.y)},r.prototype.sub=function(t){return new r(this.x-t.x,this.y-t.y)},r.prototype.mul=function(t){return new r(this.x*t.x,this.y*t.y)},r.prototype.div=function(t){return new r(this.x/t.x,this.y/t.y)},r.prototype.abs=function(){return new r(Math.abs(this.x),Math.abs(this.y))},r.prototype.magnitude=function(){return Math.sqrt(Math.pow(this.x,2)+Math.pow(this.y,2))},r.prototype.floor=function(){return new r(Math.floor(this.x),Math.floor(this.y))},r}(),mn=function(){function r(t,e){e===void 0&&(e=!0);var n=t||{},a=[n.left,n.top,n.right,n.bottom].every(An),o=[n.x,n.y,n.width,n.height].every(An);if(!o&&!a)throw new Error("Box.constructor - expected box to be IBoundingBox | IRect, instead have "+JSON.stringify(n));var i=o?[n.x,n.y,n.width,n.height]:[n.left,n.top,n.right-n.left,n.bottom-n.top],s=i[0],u=i[1],c=i[2],l=i[3];r.assertIsValidBox({x:s,y:u,width:c,height:l},"Box.constructor",e),this._x=s,this._y=u,this._width=c,this._height=l}return r.isRect=function(t){return!!t&&[t.x,t.y,t.width,t.height].every(An)},r.assertIsValidBox=function(t,e,n){if(n===void 0&&(n=!1),!r.isRect(t))throw new Error(e+" - invalid box: "+JSON.stringify(t)+", expected object with properties x, y, width, height");if(!n&&(t.width<0||t.height<0))throw new Error(e+" - width ("+t.width+") and height ("+t.height+") must be positive numbers")},Object.defineProperty(r.prototype,"x",{get:function(){return this._x},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"y",{get:function(){return this._y},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"width",{get:function(){return this._width},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"height",{get:function(){return this._height},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"left",{get:function(){return this.x},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"top",{get:function(){return this.y},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"right",{get:function(){return this.x+this.width},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"bottom",{get:function(){return this.y+this.height},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"area",{get:function(){return this.width*this.height},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"topLeft",{get:function(){return new be(this.left,this.top)},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"topRight",{get:function(){return new be(this.right,this.top)},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"bottomLeft",{get:function(){return new be(this.left,this.bottom)},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"bottomRight",{get:function(){return new be(this.right,this.bottom)},enumerable:!0,configurable:!0}),r.prototype.round=function(){var t=[this.x,this.y,this.width,this.height].map(function(i){return Math.round(i)}),e=t[0],n=t[1],a=t[2],o=t[3];return new r({x:e,y:n,width:a,height:o})},r.prototype.floor=function(){var t=[this.x,this.y,this.width,this.height].map(function(i){return Math.floor(i)}),e=t[0],n=t[1],a=t[2],o=t[3];return new r({x:e,y:n,width:a,height:o})},r.prototype.toSquare=function(){var t=this,e=t.x,n=t.y,a=t.width,o=t.height,i=Math.abs(a-o);return a<o&&(e-=i/2,a+=i),o<a&&(n-=i/2,o+=i),new r({x:e,y:n,width:a,height:o})},r.prototype.rescale=function(t){var e=ru(t)?t.width:t,n=ru(t)?t.height:t;return new r({x:this.x*e,y:this.y*n,width:this.width*e,height:this.height*n})},r.prototype.pad=function(t,e){var n=[this.x-t/2,this.y-e/2,this.width+t,this.height+e],a=n[0],o=n[1],i=n[2],s=n[3];return new r({x:a,y:o,width:i,height:s})},r.prototype.clipAtImageBorders=function(t,e){var n=this,a=n.x,o=n.y,i=n.right,s=n.bottom,u=Math.max(a,0),c=Math.max(o,0),l=i-u,h=s-c,d=Math.min(l,t-u),f=Math.min(h,e-c);return new r({x:u,y:c,width:d,height:f}).floor()},r.prototype.shift=function(t,e){var n=this,a=n.width,o=n.height,i=this.x+t,s=this.y+e;return new r({x:i,y:s,width:a,height:o})},r.prototype.padAtBorders=function(t,e){var n=this.width+1,a=this.height+1,o=1,i=1,s=n,u=a,c=this.left,l=this.top,h=this.right,d=this.bottom;return h>e&&(s=-h+e+n,h=e),d>t&&(u=-d+t+a,d=t),c<1&&(u=2-c,c=1),l<1&&(u=2-l,l=1),{dy:i,edy:u,dx:o,edx:s,y:l,ey:d,x:c,ex:h,w:n,h:a}},r.prototype.calibrate=function(t){return new r({left:this.left+t.left*this.width,top:this.top+t.top*this.height,right:this.right+t.right*this.width,bottom:this.bottom+t.bottom*this.height}).toSquare().round()},r}(),Wa=function(r){ae(t,r);function t(e,n,a,o,i){return i===void 0&&(i=!1),r.call(this,{left:e,top:n,right:a,bottom:o},i)||this}return t}(mn),Yc=function(){function r(t,e,n,a,o){this._imageDims=new Rn(o.width,o.height),this._score=t,this._classScore=e,this._className=n,this._box=new mn(a).rescale(this._imageDims)}return Object.defineProperty(r.prototype,"score",{get:function(){return this._score},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"classScore",{get:function(){return this._classScore},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"className",{get:function(){return this._className},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"box",{get:function(){return this._box},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"imageDims",{get:function(){return this._imageDims},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"imageWidth",{get:function(){return this.imageDims.width},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"imageHeight",{get:function(){return this.imageDims.height},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"relativeBox",{get:function(){return new mn(this._box).rescale(this.imageDims.reverse())},enumerable:!0,configurable:!0}),r.prototype.forSize=function(t,e){return new r(this.score,this.classScore,this.className,this.relativeBox,{width:t,height:e})},r}(),St=function(r){ae(t,r);function t(e,n,a){return r.call(this,e,e,"",n,a)||this}return t.prototype.forSize=function(e,n){var a=r.prototype.forSize.call(this,e,n),o=a.score,i=a.relativeBox,s=a.imageDims;return new t(o,i,s)},t}(Yc);function Um(r,t,e){e===void 0&&(e=!0);var n=Math.max(0,Math.min(r.right,t.right)-Math.max(r.left,t.left)),a=Math.max(0,Math.min(r.bottom,t.bottom)-Math.max(r.top,t.top)),o=n*a;return e?o/(r.area+t.area-o):o/Math.min(r.area,t.area)}function Vm(r){var t=r.map(function(s){return s.x}),e=r.map(function(s){return s.y}),n=t.reduce(function(s,u){return u<s?u:s},1/0),a=e.reduce(function(s,u){return u<s?u:s},1/0),o=t.reduce(function(s,u){return s<u?u:s},0),i=e.reduce(function(s,u){return s<u?u:s},0);return new Wa(n,a,o,i)}function Ir(r,t,e,n){n===void 0&&(n=!0);for(var a=t.map(function(s,u){return{score:s,boxIndex:u}}).sort(function(s,u){return s.score-u.score}).map(function(s){return s.boxIndex}),o=[],i=function(){var s=a.pop();o.push(s);for(var u=a,c=[],l=0;l<u.length;l++){var h=u[l],d=r[s],f=r[h];c.push(Um(d,f,n))}a=a.filter(function(p,g){return c[g]<=e})};a.length>0;)i();return o}function Wr(r,t){return X(function(){var e=t[0],n=t[1],a=t[2],o=zt(mr(r.shape.slice(0,3),[1]),e),i=zt(mr(r.shape.slice(0,3),[1]),n),s=zt(mr(r.shape.slice(0,3),[1]),a),u=Me([o,i,s],3);return Le(r,u)})}function Gm(r,t){return t===void 0&&(t=!1),X(function(){var e=r.shape.slice(1),n=e[0],a=e[1];if(n===a)return r;var o=Math.abs(n-a),i=Math.round(o*(t?.5:1)),s=n>a?2:1,u=function(f){var p=r.shape.slice();return p[s]=f,zt(p,0)},c=u(i),l=o-c.shape[s],h=t&&l?u(l):null,d=[h,r,c].filter(function(f){return!!f}).map(function(f){return f.toFloat()});return Me(d,s)})}function _o(r){return 1/(1+Math.exp(-r))}var Fi=function(r){ae(t,r);function t(e,n,a,o,i){return i===void 0&&(i=!1),r.call(this,{x:e,y:n,width:a,height:o},i)||this}return t}(mn),Hm=.5,jm=.43,qm=.45,kr=function(){function r(t,e,n){n===void 0&&(n=new be(0,0));var a=e.width,o=e.height;this._imgDims=new Rn(a,o),this._shift=n,this._positions=t.map(function(i){return i.mul(new be(a,o)).add(n)})}return Object.defineProperty(r.prototype,"shift",{get:function(){return new be(this._shift.x,this._shift.y)},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"imageWidth",{get:function(){return this._imgDims.width},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"imageHeight",{get:function(){return this._imgDims.height},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"positions",{get:function(){return this._positions},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"relativePositions",{get:function(){var t=this;return this._positions.map(function(e){return e.sub(t._shift).div(new be(t.imageWidth,t.imageHeight))})},enumerable:!0,configurable:!0}),r.prototype.forSize=function(t,e){return new this.constructor(this.relativePositions,{width:t,height:e})},r.prototype.shiftBy=function(t,e){return new this.constructor(this.relativePositions,this._imgDims,new be(t,e))},r.prototype.shiftByPoint=function(t){return this.shiftBy(t.x,t.y)},r.prototype.align=function(t,e){if(e===void 0&&(e={}),t){var n=t instanceof St?t.box.floor():new mn(t);return this.shiftBy(n.x,n.y).align(null,e)}var a=Object.assign({},{useDlibAlignment:!1,minBoxPadding:.2},e),o=a.useDlibAlignment,i=a.minBoxPadding;return o?this.alignDlib():this.alignMinBbox(i)},r.prototype.alignDlib=function(){var t=this.getRefPointsForAlignment(),e=t[0],n=t[1],a=t[2],o=function(h){return a.sub(h).magnitude()},i=(o(e)+o(n))/2,s=Math.floor(i/qm),u=Ni(t),c=Math.floor(Math.max(0,u.x-Hm*s)),l=Math.floor(Math.max(0,u.y-jm*s));return new Fi(c,l,Math.min(s,this.imageWidth+c),Math.min(s,this.imageHeight+l))},r.prototype.alignMinBbox=function(t){var e=Vm(this.positions);return e.pad(e.width*t,e.height*t)},r.prototype.getRefPointsForAlignment=function(){throw new Error("getRefPointsForAlignment not implemented by base class")},r}(),Km=function(r){ae(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.getRefPointsForAlignment=function(){var e=this.positions;return[e[0],e[1],Ni([e[3],e[4]])]},t}(kr),Xm=function(r){ae(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.getJawOutline=function(){return this.positions.slice(0,17)},t.prototype.getLeftEyeBrow=function(){return this.positions.slice(17,22)},t.prototype.getRightEyeBrow=function(){return this.positions.slice(22,27)},t.prototype.getNose=function(){return this.positions.slice(27,36)},t.prototype.getLeftEye=function(){return this.positions.slice(36,42)},t.prototype.getRightEye=function(){return this.positions.slice(42,48)},t.prototype.getMouth=function(){return this.positions.slice(48,68)},t.prototype.getRefPointsForAlignment=function(){return[this.getLeftEye(),this.getRightEye(),this.getMouth()].map(Ni)},t}(kr),ou=function(){function r(t,e){this._label=t,this._distance=e}return Object.defineProperty(r.prototype,"label",{get:function(){return this._label},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"distance",{get:function(){return this._distance},enumerable:!0,configurable:!0}),r.prototype.toString=function(t){return t===void 0&&(t=!0),""+this.label+(t?" ("+Wm(this.distance)+")":"")},r}(),iu=function(r){ae(t,r);function t(e,n){var a=r.call(this,e)||this;return a._label=n,a}return t.assertIsValidLabeledBox=function(e,n){if(mn.assertIsValidBox(e,n),!An(e.label))throw new Error(n+" - expected property label ("+e.label+") to be a number")},Object.defineProperty(t.prototype,"label",{get:function(){return this._label},enumerable:!0,configurable:!0}),t}(mn),$r=function(){function r(t,e){if(typeof t!="string")throw new Error("LabeledFaceDescriptors - constructor expected label to be a string");if(!Array.isArray(e)||e.some(function(n){return!(n instanceof Float32Array)}))throw new Error("LabeledFaceDescriptors - constructor expected descriptors to be an array of Float32Array");this._label=t,this._descriptors=e}return Object.defineProperty(r.prototype,"label",{get:function(){return this._label},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"descriptors",{get:function(){return this._descriptors},enumerable:!0,configurable:!0}),r.prototype.toJSON=function(){return{label:this.label,descriptors:this.descriptors.map(function(t){return Array.from(t)})}},r.fromJSON=function(t){var e=t.descriptors.map(function(n){return new Float32Array(n)});return new r(t.label,e)},r}();(function(r){ae(t,r);function t(e,n,a,o){var i=r.call(this,e,n)||this;return i._score=a,i._classScore=o,i}return t.assertIsValidPredictedBox=function(e,n){if(iu.assertIsValidLabeledBox(e,n),!au(e.score)||!au(e.classScore))throw new Error(n+" - expected properties score ("+e.score+") and ("+e.classScore+") to be a number between [0, 1]")},Object.defineProperty(t.prototype,"score",{get:function(){return this._score},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"classScore",{get:function(){return this._classScore},enumerable:!0,configurable:!0}),t})(iu);function $c(r){return r.detection instanceof St}function Sr(r,t){var e={detection:t};return Object.assign({},r,e)}function Zc(){var r=window.fetch||function(){throw new Error("fetch - missing fetch implementation for browser environment")},t=function(){throw new Error("readFile - filesystem not available for browser environment")};return{Canvas:HTMLCanvasElement,CanvasRenderingContext2D,Image:HTMLImageElement,ImageData,Video:HTMLVideoElement,createCanvasElement:function(){return document.createElement("canvas")},createImageElement:function(){return document.createElement("img")},fetch:r,readFile:t}}function Jc(r){var t="";if(!r)try{r=require("fs")}catch(n){t=n.toString()}var e=r?function(n){return new Promise(function(a,o){r.readFile(n,function(i,s){return i?o(i):a(s)})})}:function(){throw new Error("readFile - failed to require fs in nodejs environment with error: "+t)};return{readFile:e}}function Qc(){var r=global.Canvas||global.HTMLCanvasElement,t=global.Image||global.HTMLImageElement,e=function(){if(r)return new r;throw new Error("createCanvasElement - missing Canvas implementation for nodejs environment")},n=function(){if(t)return new t;throw new Error("createImageElement - missing Image implementation for nodejs environment")},a=global.fetch||function(){throw new Error("fetch - missing fetch implementation for nodejs environment")},o=Jc();return Xe({Canvas:r||function(){function i(){}return i}(),CanvasRenderingContext2D:global.CanvasRenderingContext2D||function(){function i(){}return i}(),Image:t||function(){function i(){}return i}(),ImageData:global.ImageData||function(){function i(){}return i}(),Video:global.HTMLVideoElement||function(){function i(){}return i}(),createCanvasElement:e,createImageElement:n,fetch:a},o)}function el(){return typeof window=="object"&&typeof document<"u"&&typeof HTMLImageElement<"u"&&typeof HTMLCanvasElement<"u"&&typeof HTMLVideoElement<"u"&&typeof ImageData<"u"&&typeof CanvasRenderingContext2D<"u"}function tl(){return typeof global=="object"&&typeof require=="function"&&typeof module<"u"&&typeof process<"u"&&!!process.version}var Pe;function Ym(){if(!Pe)throw new Error("getEnv - environment is not defined, check isNodejs() and isBrowser()");return Pe}function Yo(r){Pe=r}function Pi(){el()&&Yo(Zc()),tl()&&Yo(Qc())}function $m(r){if(Pe||Pi(),!Pe)throw new Error("monkeyPatch - environment is not defined, check isNodejs() and isBrowser()");var t=r.Canvas,e=t===void 0?Pe.Canvas:t,n=r.Image,a=n===void 0?Pe.Image:n;Pe.Canvas=e,Pe.Image=a,Pe.createCanvasElement=r.createCanvasElement||function(){return new e},Pe.createImageElement=r.createImageElement||function(){return new a},Pe.ImageData=r.ImageData||Pe.ImageData,Pe.Video=r.Video||Pe.Video,Pe.fetch=r.fetch||Pe.fetch,Pe.readFile=r.readFile||Pe.readFile}var Je={getEnv:Ym,setEnv:Yo,initialize:Pi,createBrowserEnv:Zc,createFileSystem:Jc,createNodejsEnv:Qc,monkeyPatch:$m,isBrowser:el,isNodejs:tl};Pi();function nl(r){return!Je.isNodejs()&&typeof r=="string"?document.getElementById(r):r}function Fn(r){var t=Je.getEnv(),e=t.Canvas,n=t.CanvasRenderingContext2D;if(r instanceof n)return r;var a=nl(r);if(!(a instanceof e))throw new Error("resolveContext2d - expected canvas to be of instance of Canvas");var o=a.getContext("2d");if(!o)throw new Error("resolveContext2d - canvas 2d context is null");return o}var su;(function(r){r.TOP_LEFT="TOP_LEFT",r.TOP_RIGHT="TOP_RIGHT",r.BOTTOM_LEFT="BOTTOM_LEFT",r.BOTTOM_RIGHT="BOTTOM_RIGHT"})(su||(su={}));function rl(r){var t=Je.getEnv(),e=t.Image,n=t.Video;return r instanceof e&&r.complete||r instanceof n&&r.readyState>=3}function Zm(r){return new Promise(function(t,e){if(r instanceof Je.getEnv().Canvas||rl(r))return t();function n(o){o.currentTarget&&(o.currentTarget.removeEventListener("load",n),o.currentTarget.removeEventListener("error",a),t(o))}function a(o){o.currentTarget&&(o.currentTarget.removeEventListener("load",n),o.currentTarget.removeEventListener("error",a),e(o))}r.addEventListener("load",n),r.addEventListener("error",a)})}function al(r){var t=Je.getEnv(),e=t.Image,n=t.Video;return r instanceof e?new Rn(r.naturalWidth,r.naturalHeight):r instanceof n?new Rn(r.videoWidth,r.videoHeight):new Rn(r.width,r.height)}function za(r){var t=r.width,e=r.height,n=Je.getEnv().createCanvasElement,a=n();return a.width=t,a.height=e,a}function Mi(r,t){var e=Je.getEnv().ImageData;if(!(r instanceof e)&&!rl(r))throw new Error("createCanvasFromMedia - media has not finished loading yet");var n=t||al(r),a=n.width,o=n.height,i=za({width:a,height:o});return r instanceof e?Fn(i).putImageData(r,0,0):Fn(i).drawImage(r,0,0,a,o),i}function Jm(r,t){return Q(this,void 0,void 0,function(){var e,n,a,o,i,s;return ee(this,function(u){switch(u.label){case 0:return e=t||Je.getEnv().createCanvasElement(),n=r.shape.slice(pn(r)?1:0),a=n[0],o=n[1],i=n[2],s=X(function(){return r.as3D(a,o,i).toInt()}),[4,Ti.toPixels(s,e)];case 1:return u.sent(),s.dispose(),[2,e]}})})}function uu(r){var t=Je.getEnv(),e=t.Image,n=t.Canvas,a=t.Video;return r instanceof e||r instanceof n||r instanceof a}function Qm(r,t,e){e===void 0&&(e=!1);var n=Je.getEnv(),a=n.Image,o=n.Canvas;if(!(r instanceof a||r instanceof o))throw new Error("imageToSquare - expected arg0 to be HTMLImageElement | HTMLCanvasElement");var i=al(r),s=t/Math.max(i.height,i.width),u=s*i.width,c=s*i.height,l=za({width:t,height:t}),h=r instanceof o?r:Mi(r),d=Math.abs(u-c)/2,f=e&&u<c?d:0,p=e&&c<u?d:0;return Fn(l).drawImage(h,f,p,u,c),l}var Ca=function(){function r(t,e){var n=this;if(e===void 0&&(e=!1),this._imageTensors=[],this._canvases=[],this._treatAsBatchInput=!1,this._inputDimensions=[],!Array.isArray(t))throw new Error("NetInput.constructor - expected inputs to be an Array of TResolvedNetInput or to be instanceof tf.Tensor4D, instead have "+t);this._treatAsBatchInput=e,this._batchSize=t.length,t.forEach(function(a,o){if(La(a)){n._imageTensors[o]=a,n._inputDimensions[o]=a.shape;return}if(pn(a)){var i=a.shape[0];if(i!==1)throw new Error("NetInput - tf.Tensor4D with batchSize "+i+" passed, but not supported in input array");n._imageTensors[o]=a,n._inputDimensions[o]=a.shape.slice(1);return}var s=a instanceof Je.getEnv().Canvas?a:Mi(a);n._canvases[o]=s,n._inputDimensions[o]=[s.height,s.width,3]})}return Object.defineProperty(r.prototype,"imageTensors",{get:function(){return this._imageTensors},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"canvases",{get:function(){return this._canvases},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"isBatchInput",{get:function(){return this.batchSize>1||this._treatAsBatchInput},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"batchSize",{get:function(){return this._batchSize},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"inputDimensions",{get:function(){return this._inputDimensions},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"inputSize",{get:function(){return this._inputSize},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"reshapedInputDimensions",{get:function(){var t=this;return Er(this.batchSize,0,1).map(function(e,n){return t.getReshapedInputDimensions(n)})},enumerable:!0,configurable:!0}),r.prototype.getInput=function(t){return this.canvases[t]||this.imageTensors[t]},r.prototype.getInputDimensions=function(t){return this._inputDimensions[t]},r.prototype.getInputHeight=function(t){return this._inputDimensions[t][0]},r.prototype.getInputWidth=function(t){return this._inputDimensions[t][1]},r.prototype.getReshapedInputDimensions=function(t){if(typeof this.inputSize!="number")throw new Error("getReshapedInputDimensions - inputSize not set, toBatchTensor has not been called yet");var e=this.getInputWidth(t),n=this.getInputHeight(t);return zm({width:e,height:n},this.inputSize)},r.prototype.toBatchTensor=function(t,e){var n=this;return e===void 0&&(e=!0),this._inputSize=t,X(function(){var a=Er(n.batchSize,0,1).map(function(i){var s=n.getInput(i);if(s instanceof ke){var u=pn(s)?s:s.expandDims();return u=Gm(u,e),(u.shape[1]!==t||u.shape[2]!==t)&&(u=Ii.resizeBilinear(u,[t,t])),u.as3D(t,t,3)}if(s instanceof Je.getEnv().Canvas)return Ti.fromPixels(Qm(s,t,e));throw new Error("toBatchTensor - at batchIdx "+i+", expected input to be instanceof tf.Tensor or instanceof HTMLCanvasElement, instead have "+s)}),o=pt(a.map(function(i){return i.toFloat()})).as4D(n.batchSize,t,t,3);return o})},r}();function Ge(r){return Q(this,void 0,void 0,function(){var t,e,n;return ee(this,function(a){switch(a.label){case 0:if(r instanceof Ca)return[2,r];if(t=Array.isArray(r)?r:[r],!t.length)throw new Error("toNetInput - empty array passed as input");return e=function(o){return Array.isArray(r)?" at input index "+o+":":""},n=t.map(nl),n.forEach(function(o,i){if(!uu(o)&&!La(o)&&!pn(o))throw typeof t[i]=="string"?new Error("toNetInput -"+e(i)+" string passed, but could not resolve HTMLElement for element id "+t[i]):new Error("toNetInput -"+e(i)+" expected media to be of type HTMLImageElement | HTMLVideoElement | HTMLCanvasElement | tf.Tensor3D, or to be an element id");if(pn(o)){var s=o.shape[0];if(s!==1)throw new Error("toNetInput -"+e(i)+" tf.Tensor4D with batchSize "+s+" passed, but not supported in input array")}}),[4,Promise.all(n.map(function(o){return uu(o)&&Zm(o)}))];case 1:return a.sent(),[2,new Ca(n,Array.isArray(r))]}})})}function Oi(r,t){return Q(this,void 0,void 0,function(){var e,n,a,o,i,s,u;return ee(this,function(c){switch(c.label){case 0:return e=Je.getEnv().Canvas,n=r,r instanceof e?[3,5]:[4,Ge(r)];case 1:if(a=c.sent(),a.batchSize>1)throw new Error("extractFaces - batchSize > 1 not supported");return o=a.getInput(0),o instanceof e?(i=o,[3,4]):[3,2];case 2:return[4,Jm(o)];case 3:i=c.sent(),c.label=4;case 4:n=i,c.label=5;case 5:return s=Fn(n),u=t.map(function(l){return l instanceof St?l.forSize(n.width,n.height).box.floor():l}).map(function(l){return l.clipAtImageBorders(n.width,n.height)}),[2,u.map(function(l){var h=l.x,d=l.y,f=l.width,p=l.height,g=za({width:f,height:p});return Fn(g).putImageData(s.getImageData(h,d,f,p),0,0),g})]}})})}function Bi(r,t){return Q(this,void 0,void 0,function(){return ee(this,function(e){if(!La(r)&&!pn(r))throw new Error("extractFaceTensors - expected image tensor to be 3D or 4D");if(pn(r)&&r.shape[0]>1)throw new Error("extractFaceTensors - batchSize > 1 not supported");return[2,X(function(){var n=r.shape.slice(pn(r)?1:0),a=n[0],o=n[1],i=n[2],s=t.map(function(c){return c instanceof St?c.forSize(o,a).box:c}).map(function(c){return c.clipAtImageBorders(o,a)}),u=s.map(function(c){var l=c.x,h=c.y,d=c.width,f=c.height;return Dc(r.as3D(a,o,i),[h,l,0],[f,d,i])});return u})]})})}function e0(r,t){return Q(this,void 0,void 0,function(){var e,n;return ee(this,function(a){switch(a.label){case 0:return e=Je.getEnv().fetch,[4,e(r,t)];case 1:if(n=a.sent(),!(n.status<400))throw new Error("failed to fetch: ("+n.status+") "+n.statusText+", from url: "+n.url);return[2,n]}})})}function t0(r){return Q(this,void 0,void 0,function(){return ee(this,function(t){switch(t.label){case 0:return[4,e0(r)];case 1:return[2,t.sent().json()]}})})}function ol(r,t){var e=t+"-weights_manifest.json";if(!r)return{modelBaseUri:"",manifestUri:e};if(r==="/")return{modelBaseUri:"/",manifestUri:"/"+e};var n=r.startsWith("http://")?"http://":r.startsWith("https://")?"https://":"";r=r.replace(n,"");var a=r.split("/").filter(function(s){return s}),o=r.endsWith(".json")?a[a.length-1]:e,i=n+(r.endsWith(".json")?a.slice(0,a.length-1):a).join("/");return i=r.startsWith("/")?"/"+i:i,{modelBaseUri:i,manifestUri:i==="/"?"/"+o:i+"/"+o}}function n0(r,t){return Q(this,void 0,void 0,function(){var e,n,a,o;return ee(this,function(i){switch(i.label){case 0:return e=ol(r,t),n=e.manifestUri,a=e.modelBaseUri,[4,t0(n)];case 1:return o=i.sent(),[2,Kc.loadWeights(o,a)]}})})}var nn=function(){function r(t){this._name=t,this._params=void 0,this._paramMappings=[]}return Object.defineProperty(r.prototype,"params",{get:function(){return this._params},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"paramMappings",{get:function(){return this._paramMappings},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"isLoaded",{get:function(){return!!this.params},enumerable:!0,configurable:!0}),r.prototype.getParamFromPath=function(t){var e=this.traversePropertyPath(t),n=e.obj,a=e.objProp;return n[a]},r.prototype.reassignParamFromPath=function(t,e){var n=this.traversePropertyPath(t),a=n.obj,o=n.objProp;a[o].dispose(),a[o]=e},r.prototype.getParamList=function(){var t=this;return this._paramMappings.map(function(e){var n=e.paramPath;return{path:n,tensor:t.getParamFromPath(n)}})},r.prototype.getTrainableParams=function(){return this.getParamList().filter(function(t){return t.tensor instanceof rr})},r.prototype.getFrozenParams=function(){return this.getParamList().filter(function(t){return!(t.tensor instanceof rr)})},r.prototype.variable=function(){var t=this;this.getFrozenParams().forEach(function(e){var n=e.path,a=e.tensor;t.reassignParamFromPath(n,a.variable())})},r.prototype.freeze=function(){var t=this;this.getTrainableParams().forEach(function(e){var n=e.path,a=e.tensor,o=qe(a.dataSync());a.dispose(),t.reassignParamFromPath(n,o)})},r.prototype.dispose=function(t){t===void 0&&(t=!0),this.getParamList().forEach(function(e){if(t&&e.tensor.isDisposed)throw new Error("param tensor has already been disposed for path "+e.path);e.tensor.dispose()}),this._params=void 0},r.prototype.serializeParams=function(){return new Float32Array(this.getParamList().map(function(t){var e=t.tensor;return Array.from(e.dataSync())}).reduce(function(t,e){return t.concat(e)}))},r.prototype.load=function(t){return Q(this,void 0,void 0,function(){return ee(this,function(e){switch(e.label){case 0:return t instanceof Float32Array?(this.extractWeights(t),[2]):[4,this.loadFromUri(t)];case 1:return e.sent(),[2]}})})},r.prototype.loadFromUri=function(t){return Q(this,void 0,void 0,function(){var e;return ee(this,function(n){switch(n.label){case 0:if(t&&typeof t!="string")throw new Error(this._name+".loadFromUri - expected model uri");return[4,n0(t,this.getDefaultModelName())];case 1:return e=n.sent(),this.loadFromWeightMap(e),[2]}})})},r.prototype.loadFromDisk=function(t){return Q(this,void 0,void 0,function(){var e,n,a,o,i,s,u,c,l,h;return ee(this,function(d){switch(d.label){case 0:if(t&&typeof t!="string")throw new Error(this._name+".loadFromDisk - expected model file path");return e=Je.getEnv().readFile,n=ol(t,this.getDefaultModelName()),a=n.manifestUri,o=n.modelBaseUri,i=function(f){return Promise.all(f.map(function(p){return e(p).then(function(g){return g.buffer})}))},s=Kc.weightsLoaderFactory(i),l=(c=JSON).parse,[4,e(a)];case 1:return u=l.apply(c,[d.sent().toString()]),[4,s(u,o)];case 2:return h=d.sent(),this.loadFromWeightMap(h),[2]}})})},r.prototype.loadFromWeightMap=function(t){var e=this.extractParamsFromWeigthMap(t),n=e.paramMappings,a=e.params;this._paramMappings=n,this._params=a},r.prototype.extractWeights=function(t){var e=this.extractParams(t),n=e.paramMappings,a=e.params;this._paramMappings=n,this._params=a},r.prototype.traversePropertyPath=function(t){if(!this.params)throw new Error("traversePropertyPath - model has no loaded params");var e=t.split("/").reduce(function(o,i){if(!o.nextObj.hasOwnProperty(i))throw new Error("traversePropertyPath - object does not have property "+i+", for path "+t);return{obj:o.nextObj,objProp:i,nextObj:o.nextObj[i]}},{nextObj:this.params}),n=e.obj,a=e.objProp;if(!n||!a||!(n[a]instanceof ke))throw new Error("traversePropertyPath - parameter is not a tensor, for path "+t);return{obj:n,objProp:a}},r}();function ht(r,t,e){return X(function(){var n=xi(r,t.depthwise_filter,t.pointwise_filter,e,"same");return n=le(n,t.bias),n})}function Eo(r,t,e){return e===void 0&&(e=!1),X(function(){var n=Se(e?le(xt(r,t.conv0.filters,[2,2],"same"),t.conv0.bias):ht(r,t.conv0,[2,2])),a=ht(n,t.conv1,[1,1]),o=Se(le(n,a)),i=ht(o,t.conv2,[1,1]);return Se(le(n,le(a,i)))})}function Zr(r,t,e,n){return e===void 0&&(e=!1),n===void 0&&(n=!0),X(function(){var a=Se(e?le(xt(r,t.conv0.filters,n?[2,2]:[1,1],"same"),t.conv0.bias):ht(r,t.conv0,n?[2,2]:[1,1])),o=ht(a,t.conv1,[1,1]),i=Se(le(a,o)),s=ht(i,t.conv2,[1,1]),u=Se(le(a,le(o,s))),c=ht(u,t.conv3,[1,1]);return Se(le(a,le(o,le(s,c))))})}function _t(r,t,e,n){return e===void 0&&(e="same"),n===void 0&&(n=!1),X(function(){var a=le(xt(r,t.filters,[1,1],e),t.bias);return n?Se(a):a})}function rn(r,t){Object.keys(r).forEach(function(e){t.some(function(n){return n.originalPath===e})||r[e].dispose()})}function Ua(r,t){return function(e,n,a,o){var i=Qe(r(e*n*a*a),[a,a,e,n]),s=Fe(r(n));return t.push({paramPath:o+"/filters"},{paramPath:o+"/bias"}),{filters:i,bias:s}}}function Li(r,t){return function(e,n,a){var o=dn(r(e*n),[e,n]),i=Fe(r(n));return t.push({paramPath:a+"/weights"},{paramPath:a+"/bias"}),{weights:o,bias:i}}}var il=function(){function r(t,e,n){this.depthwise_filter=t,this.pointwise_filter=e,this.bias=n}return r}();function Wi(r,t){return function(e,n,a){var o=Qe(r(9*e),[3,3,e,1]),i=Qe(r(e*n),[1,1,e,n]),s=Fe(r(n));return t.push({paramPath:a+"/depthwise_filter"},{paramPath:a+"/pointwise_filter"},{paramPath:a+"/bias"}),new il(o,i,s)}}function zi(r){return function(t){var e=r(t+"/depthwise_filter",4),n=r(t+"/pointwise_filter",4),a=r(t+"/bias",1);return new il(e,n,a)}}function xn(r,t){return function(e,n,a){var o=r[e];if(!Ba(o,n))throw new Error("expected weightMap["+e+"] to be a Tensor"+n+"D, instead have "+o);return t.push({originalPath:e,paramPath:a||e}),o}}function an(r){var t=r;function e(a){var o=t.slice(0,a);return t=t.slice(a),o}function n(){return t}return{extractWeights:e,getRemainingWeights:n}}function sl(r,t){var e=Ua(r,t),n=Wi(r,t);function a(i,s,u,c){c===void 0&&(c=!1);var l=c?e(i,s,3,u+"/conv0"):n(i,s,u+"/conv0"),h=n(s,s,u+"/conv1"),d=n(s,s,u+"/conv2");return{conv0:l,conv1:h,conv2:d}}function o(i,s,u,c){c===void 0&&(c=!1);var l=a(i,s,u,c),h=l.conv0,d=l.conv1,f=l.conv2,p=n(s,s,u+"/conv3");return{conv0:h,conv1:d,conv2:f,conv3:p}}return{extractDenseBlock3Params:a,extractDenseBlock4Params:o}}function r0(r){var t=[],e=an(r),n=e.extractWeights,a=e.getRemainingWeights,o=sl(n,t).extractDenseBlock4Params,i=o(3,32,"dense0",!0),s=o(32,64,"dense1"),u=o(64,128,"dense2"),c=o(128,256,"dense3");if(a().length!==0)throw new Error("weights remaing after extract: "+a().length);return{paramMappings:t,params:{dense0:i,dense1:s,dense2:u,dense3:c}}}function ul(r){return function(t){var e=r(t+"/filters",4),n=r(t+"/bias",1);return{filters:e,bias:n}}}function cl(r,t){var e=xn(r,t),n=ul(e),a=zi(e);function o(s,u){u===void 0&&(u=!1);var c=u?n(s+"/conv0"):a(s+"/conv0"),l=a(s+"/conv1"),h=a(s+"/conv2");return{conv0:c,conv1:l,conv2:h}}function i(s,u){u===void 0&&(u=!1);var c=u?n(s+"/conv0"):a(s+"/conv0"),l=a(s+"/conv1"),h=a(s+"/conv2"),d=a(s+"/conv3");return{conv0:c,conv1:l,conv2:h,conv3:d}}return{extractDenseBlock3Params:o,extractDenseBlock4Params:i}}function a0(r){var t=[],e=cl(r,t).extractDenseBlock4Params,n={dense0:e("dense0",!0),dense1:e("dense1"),dense2:e("dense2"),dense3:e("dense3")};return rn(r,t),{params:n,paramMappings:t}}var ll=function(r){ae(t,r);function t(){return r.call(this,"FaceFeatureExtractor")||this}return t.prototype.forwardInput=function(e){var n=this.params;if(!n)throw new Error("FaceFeatureExtractor - load model before inference");return X(function(){var a=e.toBatchTensor(112,!0),o=[122.782,117.001,104.298],i=Wr(a,o).div(q(255)),s=Zr(i,n.dense0,!0);return s=Zr(s,n.dense1),s=Zr(s,n.dense2),s=Zr(s,n.dense3),s=Br(s,[7,7],[2,2],"valid"),s})},t.prototype.forward=function(e){return Q(this,void 0,void 0,function(){var n;return ee(this,function(a){switch(a.label){case 0:return n=this.forwardInput,[4,Ge(e)];case 1:return[2,n.apply(this,[a.sent()])]}})})},t.prototype.getDefaultModelName=function(){return"face_feature_extractor_model"},t.prototype.extractParamsFromWeigthMap=function(e){return a0(e)},t.prototype.extractParams=function(e){return r0(e)},t}(nn);function Ot(r,t){return X(function(){return le(Pa(r,t.weights),t.bias)})}function o0(r,t,e){var n=[],a=an(r),o=a.extractWeights,i=a.getRemainingWeights,s=Li(o,n),u=s(t,e,"fc");if(i().length!==0)throw new Error("weights remaing after extract: "+i().length);return{paramMappings:n,params:{fc:u}}}function i0(r){var t=[],e=xn(r,t);function n(o){var i=e(o+"/weights",2),s=e(o+"/bias",1);return{weights:i,bias:s}}var a={fc:n("fc")};return rn(r,t),{params:a,paramMappings:t}}function hl(r){var t={},e={};return Object.keys(r).forEach(function(n){var a=n.startsWith("fc")?e:t;a[n]=r[n]}),{featureExtractorMap:t,classifierMap:e}}var dl=function(r){ae(t,r);function t(e,n){var a=r.call(this,e)||this;return a._faceFeatureExtractor=n,a}return Object.defineProperty(t.prototype,"faceFeatureExtractor",{get:function(){return this._faceFeatureExtractor},enumerable:!0,configurable:!0}),t.prototype.runNet=function(e){var n=this,a=this.params;if(!a)throw new Error(this._name+" - load model before inference");return X(function(){var o=e instanceof Ca?n.faceFeatureExtractor.forwardInput(e):e;return Ot(o.as2D(o.shape[0],-1),a.fc)})},t.prototype.dispose=function(e){e===void 0&&(e=!0),this.faceFeatureExtractor.dispose(e),r.prototype.dispose.call(this,e)},t.prototype.loadClassifierParams=function(e){var n=this.extractClassifierParams(e),a=n.params,o=n.paramMappings;this._params=a,this._paramMappings=o},t.prototype.extractClassifierParams=function(e){return o0(e,this.getClassifierChannelsIn(),this.getClassifierChannelsOut())},t.prototype.extractParamsFromWeigthMap=function(e){var n=hl(e),a=n.featureExtractorMap,o=n.classifierMap;return this.faceFeatureExtractor.loadFromWeightMap(a),i0(o)},t.prototype.extractParams=function(e){var n=this.getClassifierChannelsIn(),a=this.getClassifierChannelsOut(),o=a*n+a,i=e.slice(0,e.length-o),s=e.slice(e.length-o);return this.faceFeatureExtractor.extractWeights(i),this.extractClassifierParams(s)},t}(nn),cu=["neutral","happy","sad","angry","fearful","disgusted","surprised"],s0=function(){function r(t){var e=this;if(t.length!==7)throw new Error("FaceExpressions.constructor - expected probabilities.length to be 7, have: "+t.length);cu.forEach(function(n,a){e[n]=t[a]})}return r.prototype.asSortedArray=function(){var t=this;return cu.map(function(e){return{expression:e,probability:t[e]}}).sort(function(e,n){return n.probability-e.probability})},r}(),u0=function(r){ae(t,r);function t(e){return e===void 0&&(e=new ll),r.call(this,"FaceExpressionNet",e)||this}return t.prototype.forwardInput=function(e){var n=this;return X(function(){return en(n.runNet(e))})},t.prototype.forward=function(e){return Q(this,void 0,void 0,function(){var n;return ee(this,function(a){switch(a.label){case 0:return n=this.forwardInput,[4,Ge(e)];case 1:return[2,n.apply(this,[a.sent()])]}})})},t.prototype.predictExpressions=function(e){return Q(this,void 0,void 0,function(){var n,a,o,i,s=this;return ee(this,function(u){switch(u.label){case 0:return[4,Ge(e)];case 1:return n=u.sent(),[4,this.forwardInput(n)];case 2:return a=u.sent(),[4,Promise.all(Oe(a).map(function(c){return Q(s,void 0,void 0,function(){var l;return ee(this,function(h){switch(h.label){case 0:return[4,c.data()];case 1:return l=h.sent(),c.dispose(),[2,l]}})})}))];case 3:return o=u.sent(),a.dispose(),i=o.map(function(c){return new s0(c)}),[2,n.isBatchInput?i:i[0]]}})})},t.prototype.getDefaultModelName=function(){return"face_expression_model"},t.prototype.getClassifierChannelsIn=function(){return 256},t.prototype.getClassifierChannelsOut=function(){return 7},t}(dl);function fl(r,t){var e={expressions:t};return Object.assign({},r,e)}function pl(r){return $c(r)&&r.landmarks instanceof kr&&r.unshiftedLandmarks instanceof kr&&r.alignedRect instanceof St}function Va(r,t){var e=r.detection.box,n=t.shiftBy(e.x,e.y),a=n.align(),o=r.detection.imageDims,i=new St(r.detection.score,a.rescale(o.reverse()),o),s={landmarks:n,unshiftedLandmarks:t,alignedRect:i};return Object.assign({},r,s)}function c0(r,t){var e=Ua(r,t),n=Wi(r,t);function a(i,s,u){var c=n(i,s,u+"/separable_conv0"),l=n(s,s,u+"/separable_conv1"),h=e(i,s,1,u+"/expansion_conv");return{separable_conv0:c,separable_conv1:l,expansion_conv:h}}function o(i,s){var u=n(i,i,s+"/separable_conv0"),c=n(i,i,s+"/separable_conv1"),l=n(i,i,s+"/separable_conv2");return{separable_conv0:u,separable_conv1:c,separable_conv2:l}}return{extractConvParams:e,extractSeparableConvParams:n,extractReductionBlockParams:a,extractMainBlockParams:o}}function l0(r,t){var e=[],n=an(r),a=n.extractWeights,o=n.getRemainingWeights,i=c0(a,e),s=i.extractConvParams,u=i.extractSeparableConvParams,c=i.extractReductionBlockParams,l=i.extractMainBlockParams,h=s(3,32,3,"entry_flow/conv_in"),d=c(32,64,"entry_flow/reduction_block_0"),f=c(64,128,"entry_flow/reduction_block_1"),p={conv_in:h,reduction_block_0:d,reduction_block_1:f},g={};Er(t,0,1).forEach(function(x){g["main_block_"+x]=l(128,"middle_flow/main_block_"+x)});var v=c(128,256,"exit_flow/reduction_block"),m=u(256,512,"exit_flow/separable_conv"),b={reduction_block:v,separable_conv:m};if(o().length!==0)throw new Error("weights remaing after extract: "+o().length);return{paramMappings:e,params:{entry_flow:p,middle_flow:g,exit_flow:b}}}function h0(r,t){var e=xn(r,t),n=ul(e),a=zi(e);function o(s){var u=a(s+"/separable_conv0"),c=a(s+"/separable_conv1"),l=n(s+"/expansion_conv");return{separable_conv0:u,separable_conv1:c,expansion_conv:l}}function i(s){var u=a(s+"/separable_conv0"),c=a(s+"/separable_conv1"),l=a(s+"/separable_conv2");return{separable_conv0:u,separable_conv1:c,separable_conv2:l}}return{extractConvParams:n,extractSeparableConvParams:a,extractReductionBlockParams:o,extractMainBlockParams:i}}function d0(r,t){var e=[],n=h0(r,e),a=n.extractConvParams,o=n.extractSeparableConvParams,i=n.extractReductionBlockParams,s=n.extractMainBlockParams,u=a("entry_flow/conv_in"),c=i("entry_flow/reduction_block_0"),l=i("entry_flow/reduction_block_1"),h={conv_in:u,reduction_block_0:c,reduction_block_1:l},d={};Er(t,0,1).forEach(function(v){d["main_block_"+v]=s("middle_flow/main_block_"+v)});var f=i("exit_flow/reduction_block"),p=o("exit_flow/separable_conv"),g={reduction_block:f,separable_conv:p};return rn(r,e),{params:{entry_flow:h,middle_flow:d,exit_flow:g},paramMappings:e}}function vl(r,t,e){return le(xt(r,t.filters,e,"same"),t.bias)}function Io(r,t,e){e===void 0&&(e=!0);var n=e?Se(r):r;return n=ht(n,t.separable_conv0,[1,1]),n=ht(Se(n),t.separable_conv1,[1,1]),n=ze(n,[3,3],[2,2],"same"),n=le(n,vl(r,t.expansion_conv,[2,2])),n}function f0(r,t){var e=ht(Se(r),t.separable_conv0,[1,1]);return e=ht(Se(e),t.separable_conv1,[1,1]),e=ht(Se(e),t.separable_conv2,[1,1]),e=le(e,r),e}var p0=function(r){ae(t,r);function t(e){var n=r.call(this,"TinyXception")||this;return n._numMainBlocks=e,n}return t.prototype.forwardInput=function(e){var n=this,a=this.params;if(!a)throw new Error("TinyXception - load model before inference");return X(function(){var o=e.toBatchTensor(112,!0),i=[122.782,117.001,104.298],s=Wr(o,i).div(q(256)),u=Se(vl(s,a.entry_flow.conv_in,[2,2]));return u=Io(u,a.entry_flow.reduction_block_0,!1),u=Io(u,a.entry_flow.reduction_block_1),Er(n._numMainBlocks,0,1).forEach(function(c){u=f0(u,a.middle_flow["main_block_"+c])}),u=Io(u,a.exit_flow.reduction_block),u=Se(ht(u,a.exit_flow.separable_conv,[1,1])),u})},t.prototype.forward=function(e){return Q(this,void 0,void 0,function(){var n;return ee(this,function(a){switch(a.label){case 0:return n=this.forwardInput,[4,Ge(e)];case 1:return[2,n.apply(this,[a.sent()])]}})})},t.prototype.getDefaultModelName=function(){return"tiny_xception_model"},t.prototype.extractParamsFromWeigthMap=function(e){return d0(e,this._numMainBlocks)},t.prototype.extractParams=function(e){return l0(e,this._numMainBlocks)},t}(nn);function v0(r){var t=[],e=an(r),n=e.extractWeights,a=e.getRemainingWeights,o=Li(n,t),i=o(512,1,"fc/age"),s=o(512,2,"fc/gender");if(a().length!==0)throw new Error("weights remaing after extract: "+a().length);return{paramMappings:t,params:{fc:{age:i,gender:s}}}}function g0(r){var t=[],e=xn(r,t);function n(o){var i=e(o+"/weights",2),s=e(o+"/bias",1);return{weights:i,bias:s}}var a={fc:{age:n("fc/age"),gender:n("fc/gender")}};return rn(r,t),{params:a,paramMappings:t}}var _a;(function(r){r.FEMALE="female",r.MALE="male"})(_a||(_a={}));var m0=function(r){ae(t,r);function t(e){e===void 0&&(e=new p0(2));var n=r.call(this,"AgeGenderNet")||this;return n._faceFeatureExtractor=e,n}return Object.defineProperty(t.prototype,"faceFeatureExtractor",{get:function(){return this._faceFeatureExtractor},enumerable:!0,configurable:!0}),t.prototype.runNet=function(e){var n=this,a=this.params;if(!a)throw new Error(this._name+" - load model before inference");return X(function(){var o=e instanceof Ca?n.faceFeatureExtractor.forwardInput(e):e,i=Br(o,[7,7],[2,2],"valid").as2D(o.shape[0],-1),s=Ot(i,a.fc.age).as1D(),u=Ot(i,a.fc.gender);return{age:s,gender:u}})},t.prototype.forwardInput=function(e){var n=this;return X(function(){var a=n.runNet(e),o=a.age,i=a.gender;return{age:o,gender:en(i)}})},t.prototype.forward=function(e){return Q(this,void 0,void 0,function(){var n;return ee(this,function(a){switch(a.label){case 0:return n=this.forwardInput,[4,Ge(e)];case 1:return[2,n.apply(this,[a.sent()])]}})})},t.prototype.predictAgeAndGender=function(e){return Q(this,void 0,void 0,function(){var n,a,o,i,s,u,c=this;return ee(this,function(l){switch(l.label){case 0:return[4,Ge(e)];case 1:return n=l.sent(),[4,this.forwardInput(n)];case 2:return a=l.sent(),o=Oe(a.age),i=Oe(a.gender),s=o.map(function(h,d){return{ageTensor:h,genderTensor:i[d]}}),[4,Promise.all(s.map(function(h){var d=h.ageTensor,f=h.genderTensor;return Q(c,void 0,void 0,function(){var p,g,v,m,b;return ee(this,function(x){switch(x.label){case 0:return[4,d.data()];case 1:return p=x.sent()[0],[4,f.data()];case 2:return g=x.sent()[0],v=g>.5,m=v?_a.MALE:_a.FEMALE,b=v?g:1-g,d.dispose(),f.dispose(),[2,{age:p,gender:m,genderProbability:b}]}})})}))];case 3:return u=l.sent(),a.age.dispose(),a.gender.dispose(),[2,n.isBatchInput?u:u[0]]}})})},t.prototype.getDefaultModelName=function(){return"age_gender_model"},t.prototype.dispose=function(e){e===void 0&&(e=!0),this.faceFeatureExtractor.dispose(e),r.prototype.dispose.call(this,e)},t.prototype.loadClassifierParams=function(e){var n=this.extractClassifierParams(e),a=n.params,o=n.paramMappings;this._params=a,this._paramMappings=o},t.prototype.extractClassifierParams=function(e){return v0(e)},t.prototype.extractParamsFromWeigthMap=function(e){var n=hl(e),a=n.featureExtractorMap,o=n.classifierMap;return this.faceFeatureExtractor.loadFromWeightMap(a),g0(o)},t.prototype.extractParams=function(e){var n=1539,a=e.slice(0,e.length-n),o=e.slice(e.length-n);return this.faceFeatureExtractor.extractWeights(a),this.extractClassifierParams(o)},t}(nn),gl=function(r){ae(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.postProcess=function(e,n,a){var o=a.map(function(s){var u=s.width,c=s.height,l=n/Math.max(c,u);return{width:u*l,height:c*l}}),i=o.length;return X(function(){var s=function(d,f){return pt([zt([68],d),zt([68],f)],1).as2D(1,136).as1D()},u=function(d,f){var p=o[d],g=p.width,v=p.height;return f(g,v)?Math.abs(g-v)/2:0},c=function(d){return u(d,function(f,p){return f<p})},l=function(d){return u(d,function(f,p){return p<f})},h=e.mul(zt([i,136],n)).sub(pt(Array.from(Array(i),function(d,f){return s(c(f),l(f))}))).div(pt(Array.from(Array(i),function(d,f){return s(o[f].width,o[f].height)})));return h})},t.prototype.forwardInput=function(e){var n=this;return X(function(){var a=n.runNet(e);return n.postProcess(a,e.inputSize,e.inputDimensions.map(function(o){var i=o[0],s=o[1];return{height:i,width:s}}))})},t.prototype.forward=function(e){return Q(this,void 0,void 0,function(){var n;return ee(this,function(a){switch(a.label){case 0:return n=this.forwardInput,[4,Ge(e)];case 1:return[2,n.apply(this,[a.sent()])]}})})},t.prototype.detectLandmarks=function(e){return Q(this,void 0,void 0,function(){var n,a,o,i=this;return ee(this,function(s){switch(s.label){case 0:return[4,Ge(e)];case 1:return n=s.sent(),a=X(function(){return Oe(i.forwardInput(n))}),[4,Promise.all(a.map(function(u,c){return Q(i,void 0,void 0,function(){var l,h,d,f,p;return ee(this,function(g){switch(g.label){case 0:return d=(h=Array).from,[4,u.data()];case 1:return l=d.apply(h,[g.sent()]),f=l.filter(function(v,m){return nu(m)}),p=l.filter(function(v,m){return!nu(m)}),[2,new Xm(Array(68).fill(0).map(function(v,m){return new be(f[m],p[m])}),{height:n.getInputHeight(c),width:n.getInputWidth(c)})]}})})}))];case 2:return o=s.sent(),a.forEach(function(u){return u.dispose()}),[2,n.isBatchInput?o:o[0]]}})})},t.prototype.getClassifierChannelsOut=function(){return 136},t}(dl),ml=function(r){ae(t,r);function t(e){return e===void 0&&(e=new ll),r.call(this,"FaceLandmark68Net",e)||this}return t.prototype.getDefaultModelName=function(){return"face_landmark_68_model"},t.prototype.getClassifierChannelsIn=function(){return 256},t}(gl);function y0(r){var t=[],e=cl(r,t).extractDenseBlock3Params,n={dense0:e("dense0",!0),dense1:e("dense1"),dense2:e("dense2")};return rn(r,t),{params:n,paramMappings:t}}function b0(r){var t=[],e=an(r),n=e.extractWeights,a=e.getRemainingWeights,o=sl(n,t).extractDenseBlock3Params,i=o(3,32,"dense0",!0),s=o(32,64,"dense1"),u=o(64,128,"dense2");if(a().length!==0)throw new Error("weights remaing after extract: "+a().length);return{paramMappings:t,params:{dense0:i,dense1:s,dense2:u}}}var x0=function(r){ae(t,r);function t(){return r.call(this,"TinyFaceFeatureExtractor")||this}return t.prototype.forwardInput=function(e){var n=this.params;if(!n)throw new Error("TinyFaceFeatureExtractor - load model before inference");return X(function(){var a=e.toBatchTensor(112,!0),o=[122.782,117.001,104.298],i=Wr(a,o).div(q(255)),s=Eo(i,n.dense0,!0);return s=Eo(s,n.dense1),s=Eo(s,n.dense2),s=Br(s,[14,14],[2,2],"valid"),s})},t.prototype.forward=function(e){return Q(this,void 0,void 0,function(){var n;return ee(this,function(a){switch(a.label){case 0:return n=this.forwardInput,[4,Ge(e)];case 1:return[2,n.apply(this,[a.sent()])]}})})},t.prototype.getDefaultModelName=function(){return"face_feature_extractor_tiny_model"},t.prototype.extractParamsFromWeigthMap=function(e){return y0(e)},t.prototype.extractParams=function(e){return b0(e)},t}(nn),w0=function(r){ae(t,r);function t(e){return e===void 0&&(e=new x0),r.call(this,"FaceLandmark68TinyNet",e)||this}return t.prototype.getDefaultModelName=function(){return"face_landmark_68_tiny_model"},t.prototype.getClassifierChannelsIn=function(){return 128},t}(gl);(function(r){ae(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t})(ml);function C0(r,t){return le(Ze(r,t.weights),t.biases)}function Ui(r,t,e,n,a){a===void 0&&(a="same");var o=t.conv,i=o.filters,s=o.bias,u=xt(r,i,e,a);return u=le(u,s),u=C0(u,t.scale),n?Se(u):u}function _0(r,t){return Ui(r,t,[1,1],!0)}function yl(r,t){return Ui(r,t,[1,1],!1)}function bl(r,t){return Ui(r,t,[2,2],!0,"valid")}function E0(r,t){function e(s,u,c){var l=r(s),h=l.length/(u*c*c);if(Lm(h))throw new Error("depth has to be an integer: "+h+", weights.length: "+l.length+", numFilters: "+u+", filterSize: "+c);return X(function(){return gn(Qe(l,[u,h,c,c]),[2,3,1,0])})}function n(s,u,c,l){var h=e(s,u,c),d=Fe(r(u));return t.push({paramPath:l+"/filters"},{paramPath:l+"/bias"}),{filters:h,bias:d}}function a(s,u){var c=Fe(r(s)),l=Fe(r(s));return t.push({paramPath:u+"/weights"},{paramPath:u+"/biases"}),{weights:c,biases:l}}function o(s,u,c,l){var h=n(s,u,c,l+"/conv"),d=a(u,l+"/scale");return{conv:h,scale:d}}function i(s,u,c,l,h){h===void 0&&(h=!1);var d=o((h?.5:1)*s,u,c,l+"/conv1"),f=o(s,u,c,l+"/conv2");return{conv1:d,conv2:f}}return{extractConvLayerParams:o,extractResidualLayerParams:i}}function I0(r){var t=an(r),e=t.extractWeights,n=t.getRemainingWeights,a=[],o=E0(e,a),i=o.extractConvLayerParams,s=o.extractResidualLayerParams,u=i(4704,32,7,"conv32_down"),c=s(9216,32,3,"conv32_1"),l=s(9216,32,3,"conv32_2"),h=s(9216,32,3,"conv32_3"),d=s(36864,64,3,"conv64_down",!0),f=s(36864,64,3,"conv64_1"),p=s(36864,64,3,"conv64_2"),g=s(36864,64,3,"conv64_3"),v=s(147456,128,3,"conv128_down",!0),m=s(147456,128,3,"conv128_1"),b=s(147456,128,3,"conv128_2"),x=s(589824,256,3,"conv256_down",!0),y=s(589824,256,3,"conv256_1"),w=s(589824,256,3,"conv256_2"),C=s(589824,256,3,"conv256_down_out"),R=X(function(){return gn(dn(e(256*128),[128,256]),[1,0])});if(a.push({paramPath:"fc"}),n().length!==0)throw new Error("weights remaing after extract: "+n().length);var S={conv32_down:u,conv32_1:c,conv32_2:l,conv32_3:h,conv64_down:d,conv64_1:f,conv64_2:p,conv64_3:g,conv128_down:v,conv128_1:m,conv128_2:b,conv256_down:x,conv256_1:y,conv256_2:w,conv256_down_out:C,fc:R};return{params:S,paramMappings:a}}function k0(r,t){var e=xn(r,t);function n(i){var s=e(i+"/scale/weights",1),u=e(i+"/scale/biases",1);return{weights:s,biases:u}}function a(i){var s=e(i+"/conv/filters",4),u=e(i+"/conv/bias",1),c=n(i);return{conv:{filters:s,bias:u},scale:c}}function o(i){return{conv1:a(i+"/conv1"),conv2:a(i+"/conv2")}}return{extractConvLayerParams:a,extractResidualLayerParams:o}}function S0(r){var t=[],e=k0(r,t),n=e.extractConvLayerParams,a=e.extractResidualLayerParams,o=n("conv32_down"),i=a("conv32_1"),s=a("conv32_2"),u=a("conv32_3"),c=a("conv64_down"),l=a("conv64_1"),h=a("conv64_2"),d=a("conv64_3"),f=a("conv128_down"),p=a("conv128_1"),g=a("conv128_2"),v=a("conv256_down"),m=a("conv256_1"),b=a("conv256_2"),x=a("conv256_down_out"),y=r.fc;if(t.push({originalPath:"fc",paramPath:"fc"}),!Bm(y))throw new Error("expected weightMap[fc] to be a Tensor2D, instead have "+y);var w={conv32_down:o,conv32_1:i,conv32_2:s,conv32_3:u,conv64_down:c,conv64_1:l,conv64_2:h,conv64_3:d,conv128_down:f,conv128_1:p,conv128_2:g,conv256_down:v,conv256_1:m,conv256_2:b,conv256_down_out:x,fc:y};return rn(r,t),{params:w,paramMappings:t}}function Tt(r,t){var e=_0(r,t.conv1);return e=yl(e,t.conv2),e=le(e,r),e=Se(e),e}function Jr(r,t){var e=bl(r,t.conv1);e=yl(e,t.conv2);var n=Br(r,2,2,"valid"),a=_e(n.shape),o=n.shape[3]!==e.shape[3],i=n.shape[1]!==e.shape[1]||n.shape[2]!==e.shape[2];if(i){var s=mr(e.shape);s[1]=1;var u=_e(s);e=Me([e,u],1);var c=mr(e.shape);c[2]=1;var l=_e(c);e=Me([e,l],2)}return n=o?Me([n,a],3):n,e=le(n,e),e=Se(e),e}var R0=function(r){ae(t,r);function t(){return r.call(this,"FaceRecognitionNet")||this}return t.prototype.forwardInput=function(e){var n=this.params;if(!n)throw new Error("FaceRecognitionNet - load model before inference");return X(function(){var a=e.toBatchTensor(150,!0).toFloat(),o=[122.782,117.001,104.298],i=Wr(a,o).div(q(256)),s=bl(i,n.conv32_down);s=ze(s,3,2,"valid"),s=Tt(s,n.conv32_1),s=Tt(s,n.conv32_2),s=Tt(s,n.conv32_3),s=Jr(s,n.conv64_down),s=Tt(s,n.conv64_1),s=Tt(s,n.conv64_2),s=Tt(s,n.conv64_3),s=Jr(s,n.conv128_down),s=Tt(s,n.conv128_1),s=Tt(s,n.conv128_2),s=Jr(s,n.conv256_down),s=Tt(s,n.conv256_1),s=Tt(s,n.conv256_2),s=Jr(s,n.conv256_down_out);var u=s.mean([1,2]),c=Pa(u,n.fc);return c})},t.prototype.forward=function(e){return Q(this,void 0,void 0,function(){var n;return ee(this,function(a){switch(a.label){case 0:return n=this.forwardInput,[4,Ge(e)];case 1:return[2,n.apply(this,[a.sent()])]}})})},t.prototype.computeFaceDescriptor=function(e){return Q(this,void 0,void 0,function(){var n,a,o,i=this;return ee(this,function(s){switch(s.label){case 0:return[4,Ge(e)];case 1:return n=s.sent(),a=X(function(){return Oe(i.forwardInput(n))}),[4,Promise.all(a.map(function(u){return u.data()}))];case 2:return o=s.sent(),a.forEach(function(u){return u.dispose()}),[2,n.isBatchInput?o:o[0]]}})})},t.prototype.getDefaultModelName=function(){return"face_recognition_model"},t.prototype.extractParamsFromWeigthMap=function(e){return S0(e)},t.prototype.extractParams=function(e){return I0(e)},t}(nn);function xl(r,t){var e={descriptor:t};return Object.assign({},r,e)}function wl(r,t){var e={age:t};return Object.assign({},r,e)}function Cl(r,t,e){var n={gender:t,genderProbability:e};return Object.assign({},r,n)}var _l=function(){function r(t){var e=t===void 0?{}:t,n=e.minFaceSize,a=e.scaleFactor,o=e.maxNumScales,i=e.scoreThresholds,s=e.scaleSteps;if(this._name="MtcnnOptions",this._minFaceSize=n||20,this._scaleFactor=a||.709,this._maxNumScales=o||10,this._scoreThresholds=i||[.6,.7,.7],this._scaleSteps=s,typeof this._minFaceSize!="number"||this._minFaceSize<0)throw new Error(this._name+" - expected minFaceSize to be a number > 0");if(typeof this._scaleFactor!="number"||this._scaleFactor<=0||this._scaleFactor>=1)throw new Error(this._name+" - expected scaleFactor to be a number between 0 and 1");if(typeof this._maxNumScales!="number"||this._maxNumScales<0)throw new Error(this._name+" - expected maxNumScales to be a number > 0");if(!Array.isArray(this._scoreThresholds)||this._scoreThresholds.length!==3||this._scoreThresholds.some(function(u){return typeof u!="number"}))throw new Error(this._name+" - expected scoreThresholds to be an array of numbers of length 3");if(this._scaleSteps&&(!Array.isArray(this._scaleSteps)||this._scaleSteps.some(function(u){return typeof u!="number"})))throw new Error(this._name+" - expected scaleSteps to be an array of numbers")}return Object.defineProperty(r.prototype,"minFaceSize",{get:function(){return this._minFaceSize},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"scaleFactor",{get:function(){return this._scaleFactor},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"maxNumScales",{get:function(){return this._maxNumScales},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"scoreThresholds",{get:function(){return this._scoreThresholds},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"scaleSteps",{get:function(){return this._scaleSteps},enumerable:!0,configurable:!0}),r}();function A0(r,t){function e(u,c){var l=Qe(r(9*u),[3,3,u,1]),h=Fe(r(u)),d=Fe(r(u)),f=Fe(r(u)),p=Fe(r(u));return t.push({paramPath:c+"/filters"},{paramPath:c+"/batch_norm_scale"},{paramPath:c+"/batch_norm_offset"},{paramPath:c+"/batch_norm_mean"},{paramPath:c+"/batch_norm_variance"}),{filters:l,batch_norm_scale:h,batch_norm_offset:d,batch_norm_mean:f,batch_norm_variance:p}}function n(u,c,l,h,d){var f=Qe(r(u*c*l*l),[l,l,u,c]),p=Fe(r(c));return t.push({paramPath:h+"/filters"},{paramPath:h+"/"+(d?"batch_norm_offset":"bias")}),{filters:f,bias:p}}function a(u,c,l,h){var d=n(u,c,l,h,!0),f=d.filters,p=d.bias;return{filters:f,batch_norm_offset:p}}function o(u,c,l){var h=e(u,l+"/depthwise_conv"),d=a(u,c,1,l+"/pointwise_conv");return{depthwise_conv:h,pointwise_conv:d}}function i(){var u=a(3,32,3,"mobilenetv1/conv_0"),c=o(32,64,"mobilenetv1/conv_1"),l=o(64,128,"mobilenetv1/conv_2"),h=o(128,128,"mobilenetv1/conv_3"),d=o(128,256,"mobilenetv1/conv_4"),f=o(256,256,"mobilenetv1/conv_5"),p=o(256,512,"mobilenetv1/conv_6"),g=o(512,512,"mobilenetv1/conv_7"),v=o(512,512,"mobilenetv1/conv_8"),m=o(512,512,"mobilenetv1/conv_9"),b=o(512,512,"mobilenetv1/conv_10"),x=o(512,512,"mobilenetv1/conv_11"),y=o(512,1024,"mobilenetv1/conv_12"),w=o(1024,1024,"mobilenetv1/conv_13");return{conv_0:u,conv_1:c,conv_2:l,conv_3:h,conv_4:d,conv_5:f,conv_6:p,conv_7:g,conv_8:v,conv_9:m,conv_10:b,conv_11:x,conv_12:y,conv_13:w}}function s(){var u=a(1024,256,1,"prediction_layer/conv_0"),c=a(256,512,3,"prediction_layer/conv_1"),l=a(512,128,1,"prediction_layer/conv_2"),h=a(128,256,3,"prediction_layer/conv_3"),d=a(256,128,1,"prediction_layer/conv_4"),f=a(128,256,3,"prediction_layer/conv_5"),p=a(256,64,1,"prediction_layer/conv_6"),g=a(64,128,3,"prediction_layer/conv_7"),v=n(512,12,1,"prediction_layer/box_predictor_0/box_encoding_predictor"),m=n(512,9,1,"prediction_layer/box_predictor_0/class_predictor"),b=n(1024,24,1,"prediction_layer/box_predictor_1/box_encoding_predictor"),x=n(1024,18,1,"prediction_layer/box_predictor_1/class_predictor"),y=n(512,24,1,"prediction_layer/box_predictor_2/box_encoding_predictor"),w=n(512,18,1,"prediction_layer/box_predictor_2/class_predictor"),C=n(256,24,1,"prediction_layer/box_predictor_3/box_encoding_predictor"),R=n(256,18,1,"prediction_layer/box_predictor_3/class_predictor"),S=n(256,24,1,"prediction_layer/box_predictor_4/box_encoding_predictor"),I=n(256,18,1,"prediction_layer/box_predictor_4/class_predictor"),k=n(128,24,1,"prediction_layer/box_predictor_5/box_encoding_predictor"),F=n(128,18,1,"prediction_layer/box_predictor_5/class_predictor"),T={box_encoding_predictor:v,class_predictor:m},W={box_encoding_predictor:b,class_predictor:x},B={box_encoding_predictor:y,class_predictor:w},L={box_encoding_predictor:C,class_predictor:R},V={box_encoding_predictor:S,class_predictor:I},U={box_encoding_predictor:k,class_predictor:F};return{conv_0:u,conv_1:c,conv_2:l,conv_3:h,conv_4:d,conv_5:f,conv_6:p,conv_7:g,box_predictor_0:T,box_predictor_1:W,box_predictor_2:B,box_predictor_3:L,box_predictor_4:V,box_predictor_5:U}}return{extractMobilenetV1Params:i,extractPredictionLayerParams:s}}function D0(r){var t=[],e=an(r),n=e.extractWeights,a=e.getRemainingWeights,o=A0(n,t),i=o.extractMobilenetV1Params,s=o.extractPredictionLayerParams,u=i(),c=s(),l=oi(n(5118*4),[1,5118,4]),h={extra_dim:l};if(t.push({paramPath:"output_layer/extra_dim"}),a().length!==0)throw new Error("weights remaing after extract: "+a().length);return{params:{mobilenetv1:u,prediction_layer:c,output_layer:h},paramMappings:t}}function T0(r,t){var e=xn(r,t);function n(c,l,h){var d=e(c+"/Conv2d_"+l+"_pointwise/weights",4,h+"/filters"),f=e(c+"/Conv2d_"+l+"_pointwise/convolution_bn_offset",1,h+"/batch_norm_offset");return{filters:d,batch_norm_offset:f}}function a(c){var l="mobilenetv1/conv_"+c,h="MobilenetV1/Conv2d_"+c+"_depthwise",d=l+"/depthwise_conv",f=l+"/pointwise_conv",p=e(h+"/depthwise_weights",4,d+"/filters"),g=e(h+"/BatchNorm/gamma",1,d+"/batch_norm_scale"),v=e(h+"/BatchNorm/beta",1,d+"/batch_norm_offset"),m=e(h+"/BatchNorm/moving_mean",1,d+"/batch_norm_mean"),b=e(h+"/BatchNorm/moving_variance",1,d+"/batch_norm_variance");return{depthwise_conv:{filters:p,batch_norm_scale:g,batch_norm_offset:v,batch_norm_mean:m,batch_norm_variance:b},pointwise_conv:n("MobilenetV1",c,f)}}function o(){return{conv_0:n("MobilenetV1",0,"mobilenetv1/conv_0"),conv_1:a(1),conv_2:a(2),conv_3:a(3),conv_4:a(4),conv_5:a(5),conv_6:a(6),conv_7:a(7),conv_8:a(8),conv_9:a(9),conv_10:a(10),conv_11:a(11),conv_12:a(12),conv_13:a(13)}}function i(c,l){var h=e(c+"/weights",4,l+"/filters"),d=e(c+"/biases",1,l+"/bias");return{filters:h,bias:d}}function s(c){var l=i("Prediction/BoxPredictor_"+c+"/BoxEncodingPredictor","prediction_layer/box_predictor_"+c+"/box_encoding_predictor"),h=i("Prediction/BoxPredictor_"+c+"/ClassPredictor","prediction_layer/box_predictor_"+c+"/class_predictor");return{box_encoding_predictor:l,class_predictor:h}}function u(){return{conv_0:n("Prediction",0,"prediction_layer/conv_0"),conv_1:n("Prediction",1,"prediction_layer/conv_1"),conv_2:n("Prediction",2,"prediction_layer/conv_2"),conv_3:n("Prediction",3,"prediction_layer/conv_3"),conv_4:n("Prediction",4,"prediction_layer/conv_4"),conv_5:n("Prediction",5,"prediction_layer/conv_5"),conv_6:n("Prediction",6,"prediction_layer/conv_6"),conv_7:n("Prediction",7,"prediction_layer/conv_7"),box_predictor_0:s(0),box_predictor_1:s(1),box_predictor_2:s(2),box_predictor_3:s(3),box_predictor_4:s(4),box_predictor_5:s(5)}}return{extractMobilenetV1Params:o,extractPredictionLayerParams:u}}function N0(r){var t=[],e=T0(r,t),n=e.extractMobilenetV1Params,a=e.extractPredictionLayerParams,o=r["Output/extra_dim"];if(t.push({originalPath:"Output/extra_dim",paramPath:"output_layer/extra_dim"}),!La(o))throw new Error("expected weightMap['Output/extra_dim'] to be a Tensor3D, instead have "+o);var i={mobilenetv1:n(),prediction_layer:a(),output_layer:{extra_dim:o}};return rn(r,t),{params:i,paramMappings:t}}function Nt(r,t,e){return X(function(){var n=xt(r,t.filters,e,"same");return n=le(n,t.batch_norm_offset),gi(n,0,6)})}var F0=.0010000000474974513;function P0(r,t,e){return X(function(){var n=Fa(r,t.filters,e,"same");return n=vc(n,t.batch_norm_mean,t.batch_norm_variance,t.batch_norm_offset,t.batch_norm_scale,F0),gi(n,0,6)})}function M0(r){return[2,4,6,12].some(function(t){return t===r})?[2,2]:[1,1]}function O0(r,t){return X(function(){var e=null,n=Nt(r,t.conv_0,[2,2]),a=[t.conv_1,t.conv_2,t.conv_3,t.conv_4,t.conv_5,t.conv_6,t.conv_7,t.conv_8,t.conv_9,t.conv_10,t.conv_11,t.conv_12,t.conv_13];if(a.forEach(function(o,i){var s=i+1,u=M0(s);n=P0(n,o.depthwise_conv,u),n=Nt(n,o.pointwise_conv,[1,1]),s===11&&(e=n)}),e===null)throw new Error("mobileNetV1 - output of conv layer 11 is null");return{out:n,conv11:e}})}function B0(r,t,e,n,a){var o=r.shape[0],i=Math.min(e,o),s=t.map(function(l,h){return{score:l,boxIndex:h}}).filter(function(l){return l.score>a}).sort(function(l,h){return h.score-l.score}),u=function(l){return l<=n?1:0},c=[];return s.forEach(function(l){if(!(c.length>=i)){for(var h=l.score,d=c.length-1;d>=0;--d){var f=L0(r,l.boxIndex,c[d]);if(f!==0&&(l.score*=u(f),l.score<=a))break}h===l.score&&c.push(l.boxIndex)}}),c}function L0(r,t,e){var n=r.arraySync(),a=Math.min(n[t][0],n[t][2]),o=Math.min(n[t][1],n[t][3]),i=Math.max(n[t][0],n[t][2]),s=Math.max(n[t][1],n[t][3]),u=Math.min(n[e][0],n[e][2]),c=Math.min(n[e][1],n[e][3]),l=Math.max(n[e][0],n[e][2]),h=Math.max(n[e][1],n[e][3]),d=(i-a)*(s-o),f=(l-u)*(h-c);if(d<=0||f<=0)return 0;var p=Math.max(a,u),g=Math.max(o,c),v=Math.min(i,l),m=Math.min(s,h),b=Math.max(v-p,0)*Math.max(m-g,0);return b/(d+f-b)}function W0(r){var t=Oe(gn(r,[1,0])),e=[Le(t[2],t[0]),Le(t[3],t[1])],n=[le(t[0],wt(e[0],q(2))),le(t[1],wt(e[1],q(2)))];return{sizes:e,centers:n}}function z0(r,t){var e=W0(r),n=e.sizes,a=e.centers,o=Oe(gn(t,[1,0])),i=wt(Ze(Vo(wt(o[2],q(5))),n[0]),q(2)),s=le(Ze(wt(o[0],q(10)),n[0]),a[0]),u=wt(Ze(Vo(wt(o[3],q(5))),n[1]),q(2)),c=le(Ze(wt(o[1],q(10)),n[1]),a[1]);return gn(pt([Le(s,i),Le(c,u),le(s,i),le(c,u)]),[1,0])}function U0(r,t,e){return X(function(){var n=r.shape[0],a=z0(Ct($n(e.extra_dim,[n,1,1]),[-1,4]),Ct(r,[-1,4]));a=Ct(a,[n,a.shape[0]/n,4]);var o=hc(Ut(t,[0,0,1],[-1,-1,-1])),i=Ut(o,[0,0,0],[-1,-1,1]);i=Ct(i,[n,i.shape[1]]);var s=Oe(a),u=Oe(i);return{boxes:s,scores:u}})}function jn(r,t){return X(function(){var e=r.shape[0],n=Ct(_t(r,t.box_encoding_predictor),[e,-1,1,4]),a=Ct(_t(r,t.class_predictor),[e,-1,3]);return{boxPredictionEncoding:n,classPrediction:a}})}function V0(r,t,e){return X(function(){var n=Nt(r,e.conv_0,[1,1]),a=Nt(n,e.conv_1,[2,2]),o=Nt(a,e.conv_2,[1,1]),i=Nt(o,e.conv_3,[2,2]),s=Nt(i,e.conv_4,[1,1]),u=Nt(s,e.conv_5,[2,2]),c=Nt(u,e.conv_6,[1,1]),l=Nt(c,e.conv_7,[2,2]),h=jn(t,e.box_predictor_0),d=jn(r,e.box_predictor_1),f=jn(a,e.box_predictor_2),p=jn(i,e.box_predictor_3),g=jn(u,e.box_predictor_4),v=jn(l,e.box_predictor_5),m=Me([h.boxPredictionEncoding,d.boxPredictionEncoding,f.boxPredictionEncoding,p.boxPredictionEncoding,g.boxPredictionEncoding,v.boxPredictionEncoding],1),b=Me([h.classPrediction,d.classPrediction,f.classPrediction,p.classPrediction,g.classPrediction,v.classPrediction],1);return{boxPredictions:m,classPredictions:b}})}var Ga=function(){function r(t){var e=t===void 0?{}:t,n=e.minConfidence,a=e.maxResults;if(this._name="SsdMobilenetv1Options",this._minConfidence=n||.5,this._maxResults=a||100,typeof this._minConfidence!="number"||this._minConfidence<=0||this._minConfidence>=1)throw new Error(this._name+" - expected minConfidence to be a number between 0 and 1");if(typeof this._maxResults!="number")throw new Error(this._name+" - expected maxResults to be a number")}return Object.defineProperty(r.prototype,"minConfidence",{get:function(){return this._minConfidence},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"maxResults",{get:function(){return this._maxResults},enumerable:!0,configurable:!0}),r}(),El=function(r){ae(t,r);function t(){return r.call(this,"SsdMobilenetv1")||this}return t.prototype.forwardInput=function(e){var n=this.params;if(!n)throw new Error("SsdMobilenetv1 - load model before inference");return X(function(){var a=e.toBatchTensor(512,!1).toFloat(),o=Le(Ze(a,q(.007843137718737125)),q(1)),i=O0(o,n.mobilenetv1),s=V0(i.out,i.conv11,n.prediction_layer),u=s.boxPredictions,c=s.classPredictions;return U0(u,c,n.output_layer)})},t.prototype.forward=function(e){return Q(this,void 0,void 0,function(){var n;return ee(this,function(a){switch(a.label){case 0:return n=this.forwardInput,[4,Ge(e)];case 1:return[2,n.apply(this,[a.sent()])]}})})},t.prototype.locateFaces=function(e,n){return n===void 0&&(n={}),Q(this,void 0,void 0,function(){var a,o,i,s,u,c,l,h,d,f,p,g,v,m,b,x,y,w,C,R,S;return ee(this,function(I){switch(I.label){case 0:return a=new Ga(n),o=a.maxResults,i=a.minConfidence,[4,Ge(e)];case 1:for(s=I.sent(),u=this.forwardInput(s),c=u.boxes,l=u.scores,h=c[0],d=l[0],f=1;f<c.length;f++)c[f].dispose(),l[f].dispose();return v=(g=Array).from,[4,d.data()];case 2:return p=v.apply(g,[I.sent()]),m=.5,b=B0(h,p,o,m,i),x=s.getReshapedInputDimensions(0),y=s.inputSize,w=y/x.width,C=y/x.height,R=h.arraySync(),S=b.map(function(k){var F=[Math.max(0,R[k][0]),Math.min(1,R[k][2])].map(function(U){return U*C}),T=F[0],W=F[1],B=[Math.max(0,R[k][1]),Math.min(1,R[k][3])].map(function(U){return U*w}),L=B[0],V=B[1];return new St(p[k],new Fi(L,T,V-L,W-T),{height:s.getInputHeight(0),width:s.getInputWidth(0)})}),h.dispose(),d.dispose(),[2,S]}})})},t.prototype.getDefaultModelName=function(){return"ssd_mobilenetv1_model"},t.prototype.extractParamsFromWeigthMap=function(e){return N0(e)},t.prototype.extractParams=function(e){return D0(e)},t}(nn);(function(r){ae(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t})(El);var G0=.4,H0=[new be(.738768,.874946),new be(2.42204,2.65704),new be(4.30971,7.04493),new be(10.246,4.59428),new be(12.6868,11.8741)],j0=[new be(1.603231,2.094468),new be(6.041143,7.080126),new be(2.882459,3.518061),new be(4.266906,5.178857),new be(9.041765,10.66308)],q0=[117.001,114.697,97.404],K0="tiny_yolov2_model",X0="tiny_yolov2_separable_conv_model",Qr=function(r){return typeof r=="number"};function Y0(r){if(!r)throw new Error("invalid config: "+r);if(typeof r.withSeparableConvs!="boolean")throw new Error("config.withSeparableConvs has to be a boolean, have: "+r.withSeparableConvs);if(!Qr(r.iouThreshold)||r.iouThreshold<0||r.iouThreshold>1)throw new Error("config.iouThreshold has to be a number between [0, 1], have: "+r.iouThreshold);if(!Array.isArray(r.classes)||!r.classes.length||!r.classes.every(function(t){return typeof t=="string"}))throw new Error("config.classes has to be an array class names: string[], have: "+JSON.stringify(r.classes));if(!Array.isArray(r.anchors)||!r.anchors.length||!r.anchors.map(function(t){return t||{}}).every(function(t){return Qr(t.x)&&Qr(t.y)}))throw new Error("config.anchors has to be an array of { x: number, y: number }, have: "+JSON.stringify(r.anchors));if(r.meanRgb&&(!Array.isArray(r.meanRgb)||r.meanRgb.length!==3||!r.meanRgb.every(Qr)))throw new Error("config.meanRgb has to be an array of shape [number, number, number], have: "+JSON.stringify(r.meanRgb))}function Vi(r){return X(function(){var t=Ze(r,q(.10000000149011612));return le(Se(Le(r,t)),t)})}function sn(r,t){return X(function(){var e=Mn(r,[[0,0],[1,1],[1,1],[0,0]]);return e=xt(e,t.conv.filters,[1,1],"valid"),e=Le(e,t.bn.sub),e=Ze(e,t.bn.truediv),e=le(e,t.conv.bias),Vi(e)})}function un(r,t){return X(function(){var e=Mn(r,[[0,0],[1,1],[1,1],[0,0]]);return e=xi(e,t.depthwise_filter,t.pointwise_filter,[1,1],"valid"),e=le(e,t.bias),Vi(e)})}function $0(r,t){var e=Ua(r,t);function n(i,s){var u=Fe(r(i)),c=Fe(r(i));return t.push({paramPath:s+"/sub"},{paramPath:s+"/truediv"}),{sub:u,truediv:c}}function a(i,s,u){var c=e(i,s,3,u+"/conv"),l=n(s,u+"/bn");return{conv:c,bn:l}}var o=Wi(r,t);return{extractConvParams:e,extractConvWithBatchNormParams:a,extractSeparableConvParams:o}}function Z0(r,t,e,n){var a=an(r),o=a.extractWeights,i=a.getRemainingWeights,s=[],u=$0(o,s),c=u.extractConvParams,l=u.extractConvWithBatchNormParams,h=u.extractSeparableConvParams,d;if(t.withSeparableConvs){var f=n[0],p=n[1],g=n[2],v=n[3],m=n[4],b=n[5],x=n[6],y=n[7],w=n[8],C=t.isFirstLayerConv2d?c(f,p,3,"conv0"):h(f,p,"conv0"),R=h(p,g,"conv1"),S=h(g,v,"conv2"),I=h(v,m,"conv3"),k=h(m,b,"conv4"),F=h(b,x,"conv5"),T=y?h(x,y,"conv6"):void 0,W=w?h(y,w,"conv7"):void 0,B=c(w||y||x,5*e,1,"conv8");d={conv0:C,conv1:R,conv2:S,conv3:I,conv4:k,conv5:F,conv6:T,conv7:W,conv8:B}}else{var f=n[0],p=n[1],g=n[2],v=n[3],m=n[4],b=n[5],x=n[6],y=n[7],w=n[8],C=l(f,p,"conv0"),R=l(p,g,"conv1"),S=l(g,v,"conv2"),I=l(v,m,"conv3"),k=l(m,b,"conv4"),F=l(b,x,"conv5"),T=l(x,y,"conv6"),W=l(y,w,"conv7"),B=c(w,5*e,1,"conv8");d={conv0:C,conv1:R,conv2:S,conv3:I,conv4:k,conv5:F,conv6:T,conv7:W,conv8:B}}if(i().length!==0)throw new Error("weights remaing after extract: "+i().length);return{params:d,paramMappings:s}}function J0(r,t){var e=xn(r,t);function n(s){var u=e(s+"/sub",1),c=e(s+"/truediv",1);return{sub:u,truediv:c}}function a(s){var u=e(s+"/filters",4),c=e(s+"/bias",1);return{filters:u,bias:c}}function o(s){var u=a(s+"/conv"),c=n(s+"/bn");return{conv:u,bn:c}}var i=zi(e);return{extractConvParams:a,extractConvWithBatchNormParams:o,extractSeparableConvParams:i}}function Q0(r,t){var e=[],n=J0(r,e),a=n.extractConvParams,o=n.extractConvWithBatchNormParams,i=n.extractSeparableConvParams,s;if(t.withSeparableConvs){var u=t.filterSizes&&t.filterSizes.length||9;s={conv0:t.isFirstLayerConv2d?a("conv0"):i("conv0"),conv1:i("conv1"),conv2:i("conv2"),conv3:i("conv3"),conv4:i("conv4"),conv5:i("conv5"),conv6:u>7?i("conv6"):void 0,conv7:u>8?i("conv7"):void 0,conv8:a("conv8")}}else s={conv0:o("conv0"),conv1:o("conv1"),conv2:o("conv2"),conv3:o("conv3"),conv4:o("conv4"),conv5:o("conv5"),conv6:o("conv6"),conv7:o("conv7"),conv8:a("conv8")};return rn(r,e),{params:s,paramMappings:e}}var lu;(function(r){r[r.XS=224]="XS",r[r.SM=320]="SM",r[r.MD=416]="MD",r[r.LG=608]="LG"})(lu||(lu={}));var Gi=function(){function r(t){var e=t===void 0?{}:t,n=e.inputSize,a=e.scoreThreshold;if(this._name="TinyYolov2Options",this._inputSize=n||416,this._scoreThreshold=a||.5,typeof this._inputSize!="number"||this._inputSize%32!==0)throw new Error(this._name+" - expected inputSize to be a number divisible by 32");if(typeof this._scoreThreshold!="number"||this._scoreThreshold<=0||this._scoreThreshold>=1)throw new Error(this._name+" - expected scoreThreshold to be a number between 0 and 1")}return Object.defineProperty(r.prototype,"inputSize",{get:function(){return this._inputSize},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"scoreThreshold",{get:function(){return this._scoreThreshold},enumerable:!0,configurable:!0}),r}(),Il=function(r){ae(t,r);function t(e){var n=r.call(this,"TinyYolov2")||this;return Y0(e),n._config=e,n}return Object.defineProperty(t.prototype,"config",{get:function(){return this._config},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"withClassScores",{get:function(){return this.config.withClassScores||this.config.classes.length>1},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"boxEncodingSize",{get:function(){return 5+(this.withClassScores?this.config.classes.length:0)},enumerable:!0,configurable:!0}),t.prototype.runTinyYolov2=function(e,n){var a=sn(e,n.conv0);return a=ze(a,[2,2],[2,2],"same"),a=sn(a,n.conv1),a=ze(a,[2,2],[2,2],"same"),a=sn(a,n.conv2),a=ze(a,[2,2],[2,2],"same"),a=sn(a,n.conv3),a=ze(a,[2,2],[2,2],"same"),a=sn(a,n.conv4),a=ze(a,[2,2],[2,2],"same"),a=sn(a,n.conv5),a=ze(a,[2,2],[1,1],"same"),a=sn(a,n.conv6),a=sn(a,n.conv7),_t(a,n.conv8,"valid",!1)},t.prototype.runMobilenet=function(e,n){var a=this.config.isFirstLayerConv2d?Vi(_t(e,n.conv0,"valid",!1)):un(e,n.conv0);return a=ze(a,[2,2],[2,2],"same"),a=un(a,n.conv1),a=ze(a,[2,2],[2,2],"same"),a=un(a,n.conv2),a=ze(a,[2,2],[2,2],"same"),a=un(a,n.conv3),a=ze(a,[2,2],[2,2],"same"),a=un(a,n.conv4),a=ze(a,[2,2],[2,2],"same"),a=un(a,n.conv5),a=ze(a,[2,2],[1,1],"same"),a=n.conv6?un(a,n.conv6):a,a=n.conv7?un(a,n.conv7):a,_t(a,n.conv8,"valid",!1)},t.prototype.forwardInput=function(e,n){var a=this,o=this.params;if(!o)throw new Error("TinyYolov2 - load model before inference");return X(function(){var i=e.toBatchTensor(n,!1).toFloat();return i=a.config.meanRgb?Wr(i,a.config.meanRgb):i,i=i.div(q(256)),a.config.withSeparableConvs?a.runMobilenet(i,o):a.runTinyYolov2(i,o)})},t.prototype.forward=function(e,n){return Q(this,void 0,void 0,function(){var a;return ee(this,function(o){switch(o.label){case 0:return a=this.forwardInput,[4,Ge(e)];case 1:return[4,a.apply(this,[o.sent(),n])];case 2:return[2,o.sent()]}})})},t.prototype.detect=function(e,n){return n===void 0&&(n={}),Q(this,void 0,void 0,function(){var a,o,i,s,u,c,l,h,d,f,p,g,v,m,b=this;return ee(this,function(x){switch(x.label){case 0:return a=new Gi(n),o=a.inputSize,i=a.scoreThreshold,[4,Ge(e)];case 1:return s=x.sent(),[4,this.forwardInput(s,o)];case 2:return u=x.sent(),c=X(function(){return Oe(u)[0].expandDims()}),l={width:s.getInputWidth(0),height:s.getInputHeight(0)},[4,this.extractBoxes(c,s.getReshapedInputDimensions(0),i)];case 3:return h=x.sent(),u.dispose(),c.dispose(),d=h.map(function(y){return y.box}),f=h.map(function(y){return y.score}),p=h.map(function(y){return y.classScore}),g=h.map(function(y){return b.config.classes[y.label]}),v=Ir(d.map(function(y){return y.rescale(o)}),f,this.config.iouThreshold,!0),m=v.map(function(y){return new Yc(f[y],p[y],g[y],d[y],l)}),[2,m]}})})},t.prototype.getDefaultModelName=function(){return""},t.prototype.extractParamsFromWeigthMap=function(e){return Q0(e,this.config)},t.prototype.extractParams=function(e){var n=this.config.filterSizes||t.DEFAULT_FILTER_SIZES,a=n?n.length:void 0;if(a!==7&&a!==8&&a!==9)throw new Error("TinyYolov2 - expected 7 | 8 | 9 convolutional filters, but found "+a+" filterSizes in config");return Z0(e,this.config,this.boxEncodingSize,n)},t.prototype.extractBoxes=function(e,n,a){return Q(this,void 0,void 0,function(){var o,i,s,u,c,l,h,d,f,p,g,v,m,b,x,y,w,C,R,S,I,k,F,T,W,B,L,V,U,z=this;return ee(this,function(H){switch(H.label){case 0:return o=n.width,i=n.height,s=Math.max(o,i),u=s/o,c=s/i,l=e.shape[1],h=this.config.anchors.length,d=X(function(){var j=e.reshape([l,l,h,z.boxEncodingSize]),K=j.slice([0,0,0,0],[l,l,h,4]),te=j.slice([0,0,0,4],[l,l,h,1]),ne=z.withClassScores?en(j.slice([0,0,0,5],[l,l,h,z.config.classes.length]),3):q(0);return[K,te,ne]}),f=d[0],p=d[1],g=d[2],v=[],[4,p.array()];case 1:return m=H.sent(),[4,f.array()];case 2:b=H.sent(),x=0,H.label=3;case 3:if(!(x<l))return[3,12];y=0,H.label=4;case 4:if(!(y<l))return[3,11];w=0,H.label=5;case 5:return w<h?(C=_o(m[x][y][w][0]),!a||C>a?(R=(y+_o(b[x][y][w][0]))/l*u,S=(x+_o(b[x][y][w][1]))/l*c,I=Math.exp(b[x][y][w][2])*this.config.anchors[w].x/l*u,k=Math.exp(b[x][y][w][3])*this.config.anchors[w].y/l*c,F=R-I/2,T=S-k/2,W={row:x,col:y,anchor:w},this.withClassScores?[4,this.extractPredictedClass(g,W)]:[3,7]):[3,9]):[3,10];case 6:return U=H.sent(),[3,8];case 7:U={classScore:1,label:0},H.label=8;case 8:B=U,L=B.classScore,V=B.label,v.push(Xe({box:new Wa(F,T,F+I,T+k),score:C,classScore:C*L,label:V},W)),H.label=9;case 9:return w++,[3,5];case 10:return y++,[3,4];case 11:return x++,[3,3];case 12:return f.dispose(),p.dispose(),g.dispose(),[2,v]}})})},t.prototype.extractPredictedClass=function(e,n){return Q(this,void 0,void 0,function(){var a,o,i,s;return ee(this,function(u){switch(u.label){case 0:return a=n.row,o=n.col,i=n.anchor,[4,e.array()];case 1:return s=u.sent(),[2,Array(this.config.classes.length).fill(0).map(function(c,l){return s[a][o][i][l]}).map(function(c,l){return{classScore:c,label:l}}).reduce(function(c,l){return c.classScore>l.classScore?c:l})]}})})},t.DEFAULT_FILTER_SIZES=[3,16,32,64,128,256,512,1024,1024],t}(nn),ey=function(r){ae(t,r);function t(e){e===void 0&&(e=!0);var n=this,a=Object.assign({},{withSeparableConvs:e,iouThreshold:G0,classes:["face"]},e?{anchors:j0,meanRgb:q0}:{anchors:H0,withClassScores:!0});return n=r.call(this,a)||this,n}return Object.defineProperty(t.prototype,"withSeparableConvs",{get:function(){return this.config.withSeparableConvs},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"anchors",{get:function(){return this.config.anchors},enumerable:!0,configurable:!0}),t.prototype.locateFaces=function(e,n){return Q(this,void 0,void 0,function(){var a;return ee(this,function(o){switch(o.label){case 0:return[4,this.detect(e,n)];case 1:return a=o.sent(),[2,a.map(function(i){return new St(i.score,i.relativeBox,{width:i.imageWidth,height:i.imageHeight})})]}})})},t.prototype.getDefaultModelName=function(){return this.withSeparableConvs?X0:K0},t.prototype.extractParamsFromWeigthMap=function(e){return r.prototype.extractParamsFromWeigthMap.call(this,e)},t}(Il),ty=function(r){ae(t,r);function t(){var e=r!==null&&r.apply(this,arguments)||this;return e._name="TinyFaceDetectorOptions",e}return t}(Gi),zr=function(){function r(){}return r.prototype.then=function(t){return Q(this,void 0,void 0,function(){var e;return ee(this,function(n){switch(n.label){case 0:return e=t,[4,this.run()];case 1:return[2,e.apply(void 0,[n.sent()])]}})})},r.prototype.run=function(){return Q(this,void 0,void 0,function(){return ee(this,function(t){throw new Error("ComposableTask - run is not implemented")})})},r}();function Ha(r,t,e,n,a){return a===void 0&&(a=function(o){var i=o.alignedRect;return i}),Q(this,void 0,void 0,function(){var o,i,s,u,c;return ee(this,function(l){switch(l.label){case 0:return o=r.map(function(h){return pl(h)?a(h):h.detection}),s=n,s?[3,5]:t instanceof ke?[4,Bi(t,o)]:[3,2];case 1:return u=l.sent(),[3,4];case 2:return[4,Oi(t,o)];case 3:u=l.sent(),l.label=4;case 4:s=u,l.label=5;case 5:return i=s,[4,e(i)];case 6:return c=l.sent(),i.forEach(function(h){return h instanceof ke&&h.dispose()}),[2,c]}})})}function Hi(r,t,e,n,a){return Q(this,void 0,void 0,function(){var o=this;return ee(this,function(i){return[2,Ha([r],t,function(s){return Q(o,void 0,void 0,function(){return ee(this,function(u){return[2,e(s[0])]})})},n,a)]})})}function ny(r){return X(function(){return pt(Oe(r,3).reverse(),3)})}var ea=2,Ea=12;function ry(r,t){var e=Ua(r,t),n=Li(r,t);function a(c,l){var h=Fe(r(c));return t.push({paramPath:l}),h}function o(c,l,h){h===void 0&&(h=!1);var d=e(c[0],c[1],3,l+"/conv1"),f=a(c[1],l+"/prelu1_alpha"),p=e(c[1],c[2],3,l+"/conv2"),g=a(c[2],l+"/prelu2_alpha"),v=e(c[2],c[3],h?2:3,l+"/conv3"),m=a(c[3],l+"/prelu3_alpha");return{conv1:d,prelu1_alpha:f,conv2:p,prelu2_alpha:g,conv3:v,prelu3_alpha:m}}function i(){var c=o([3,10,16,32],"pnet"),l=e(32,2,1,"pnet/conv4_1"),h=e(32,4,1,"pnet/conv4_2");return Xe(Xe({},c),{conv4_1:l,conv4_2:h})}function s(){var c=o([3,28,48,64],"rnet",!0),l=n(576,128,"rnet/fc1"),h=a(128,"rnet/prelu4_alpha"),d=n(128,2,"rnet/fc2_1"),f=n(128,4,"rnet/fc2_2");return Xe(Xe({},c),{fc1:l,prelu4_alpha:h,fc2_1:d,fc2_2:f})}function u(){var c=o([3,32,64,64],"onet"),l=e(64,128,2,"onet/conv4"),h=a(128,"onet/prelu4_alpha"),d=n(1152,256,"onet/fc1"),f=a(256,"onet/prelu5_alpha"),p=n(256,2,"onet/fc2_1"),g=n(256,4,"onet/fc2_2"),v=n(256,10,"onet/fc2_3");return Xe(Xe({},c),{conv4:l,prelu4_alpha:h,fc1:d,prelu5_alpha:f,fc2_1:p,fc2_2:g,fc2_3:v})}return{extractPNetParams:i,extractRNetParams:s,extractONetParams:u}}function ay(r){var t=an(r),e=t.extractWeights,n=t.getRemainingWeights,a=[],o=ry(e,a),i=o.extractPNetParams,s=o.extractRNetParams,u=o.extractONetParams,c=i(),l=s(),h=u();if(n().length!==0)throw new Error("weights remaing after extract: "+n().length);return{params:{pnet:c,rnet:l,onet:h},paramMappings:a}}function oy(r,t){var e=xn(r,t);function n(l){var h=e(l+"/weights",4,l+"/filters"),d=e(l+"/bias",1);return{filters:h,bias:d}}function a(l){var h=e(l+"/weights",2),d=e(l+"/bias",1);return{weights:h,bias:d}}function o(l){return e(l,1)}function i(l){var h=n(l+"/conv1"),d=o(l+"/prelu1_alpha"),f=n(l+"/conv2"),p=o(l+"/prelu2_alpha"),g=n(l+"/conv3"),v=o(l+"/prelu3_alpha");return{conv1:h,prelu1_alpha:d,conv2:f,prelu2_alpha:p,conv3:g,prelu3_alpha:v}}function s(){var l=i("pnet"),h=n("pnet/conv4_1"),d=n("pnet/conv4_2");return Xe(Xe({},l),{conv4_1:h,conv4_2:d})}function u(){var l=i("rnet"),h=a("rnet/fc1"),d=o("rnet/prelu4_alpha"),f=a("rnet/fc2_1"),p=a("rnet/fc2_2");return Xe(Xe({},l),{fc1:h,prelu4_alpha:d,fc2_1:f,fc2_2:p})}function c(){var l=i("onet"),h=n("onet/conv4"),d=o("onet/prelu4_alpha"),f=a("onet/fc1"),p=o("onet/prelu5_alpha"),g=a("onet/fc2_1"),v=a("onet/fc2_2"),m=a("onet/fc2_3");return Xe(Xe({},l),{conv4:h,prelu4_alpha:d,fc1:f,prelu5_alpha:p,fc2_1:g,fc2_2:v,fc2_3:m})}return{extractPNetParams:s,extractRNetParams:u,extractONetParams:c}}function iy(r){var t=[],e=oy(r,t),n=e.extractPNetParams,a=e.extractRNetParams,o=e.extractONetParams,i=n(),s=a(),u=o();return rn(r,t),{params:{pnet:i,rnet:s,onet:u},paramMappings:t}}function $o(r,t){var e=t[0],n=t[1];return{height:Math.floor(e*r),width:Math.floor(n*r)}}function sy(r,t,e){for(var n=e[0],a=e[1],o=Ea/r,i=[],s=Math.min(n,a)*o,u=0;s>=12;)i.push(o*Math.pow(t,u)),s=s*t,u+=1;return i}var ji=function(r){ae(t,r);function t(e,n,a,o){return r.call(this,{left:e,top:n,right:a,bottom:o},!0)||this}return t}(mn);function kl(r){return X(function(){return Ze(Le(r,q(127.5)),q(.0078125))})}function tr(r,t){return X(function(){return le(Se(r),Ze(t,ya(Se(ya(r)))))})}function qi(r,t,e){return e===void 0&&(e=!1),X(function(){var n=_t(r,t.conv1,"valid");return n=tr(n,t.prelu1_alpha),n=ze(n,e?[2,2]:[3,3],[2,2],"same"),n=_t(n,t.conv2,"valid"),n=tr(n,t.prelu2_alpha),n=e?n:ze(n,[3,3],[2,2],"valid"),n=_t(n,t.conv3,"valid"),n=tr(n,t.prelu3_alpha),n})}function uy(r,t){return X(function(){var e=qi(r,t,!0),n=_t(e,t.conv4_1,"valid"),a=vt(Ma(n,3),3),o=en(Le(n,a),3),i=_t(e,t.conv4_2,"valid");return{prob:o,regions:i}})}function cy(r,t){return X(function(){var e=$o(t,r.shape.slice(1)),n=e.height,a=e.width,o=Ii.resizeBilinear(r,[n,a]),i=kl(o);return gn(i,[0,2,1,3])})}function ly(r,t,e,n){for(var a=[],o=r.arraySync(),i=0;i<r.shape[0];i++)for(var s=0;s<r.shape[1];s++)o[i][s]>=n&&a.push(new be(s,i));var u=a.map(function(c){var l=new Wa(Math.round((c.y*ea+1)/e),Math.round((c.x*ea+1)/e),Math.round((c.y*ea+Ea)/e),Math.round((c.x*ea+Ea)/e)),h=o[c.y][c.x],d=t.arraySync(),f=new ji(d[c.y][c.x][0],d[c.y][c.x][1],d[c.y][c.x][2],d[c.y][c.x][3]);return{cell:l,score:h,region:f}});return u}function hy(r,t,e,n,a){a.stage1=[];var o=t.map(function(d){return X(function(){var f={scale:d},p=cy(r,d),g=Date.now(),v=uy(p,n),m=v.prob,b=v.regions;f.pnet=Date.now()-g;var x=Oe(Oe(m,3)[1])[0],y=Oe(b)[0];return{scoresTensor:x,regionsTensor:y,scale:d,statsForScale:f}})}),i=o.map(function(d){var f=d.scoresTensor,p=d.regionsTensor,g=d.scale,v=d.statsForScale,m=ly(f,p,g,e);if(f.dispose(),p.dispose(),!m.length)return a.stage1.push(v),[];var b=Date.now(),x=Ir(m.map(function(y){return y.cell}),m.map(function(y){return y.score}),.5);return v.nms=Date.now()-b,v.numBoxes=x.length,a.stage1.push(v),x.map(function(y){return m[y]})}),s=i.reduce(function(d,f){return d.concat(f)},[]),u=[],c=[];if(s.length>0){var l=Date.now(),h=Ir(s.map(function(d){return d.cell}),s.map(function(d){return d.score}),.7);a.stage1_nms=Date.now()-l,c=h.map(function(d){return s[d].score}),u=h.map(function(d){return s[d]}).map(function(d){var f=d.cell,p=d.region;return new Wa(f.left+p.left*f.width,f.top+p.top*f.height,f.right+p.right*f.width,f.bottom+p.bottom*f.height).toSquare().round()})}return{boxes:u,scores:c}}function Sl(r,t,e){var n=e.width,a=e.height;return Q(this,void 0,void 0,function(){var o,i,s,u=this;return ee(this,function(c){switch(c.label){case 0:return o=Fn(r),[4,Promise.all(t.map(function(l){return Q(u,void 0,void 0,function(){var h,d,f,p,g,v,m,b;return ee(this,function(x){return h=l.padAtBorders(r.height,r.width),d=h.y,f=h.ey,p=h.x,g=h.ex,v=p-1,m=d-1,b=o.getImageData(v,m,g-v,f-m),[2,Je.isNodejs()?Mi(b):createImageBitmap(b)]})})}))];case 1:return i=c.sent(),s=[],i.forEach(function(l){var h=za({width:n,height:a}),d=Fn(h);d.drawImage(l,0,0,n,a);for(var f=d.getImageData(0,0,n,a).data,p=[],g=0;g<f.length;g+=4)p.push(f[g+2]),p.push(f[g+1]),p.push(f[g]);s.push(p)}),[2,s.map(function(l){var h=X(function(){var d=gn(Qe(l,[1,n,a,3]),[0,2,1,3]).toFloat();return kl(d)});return h})]}})})}function dy(r,t){return X(function(){var e=qi(r,t),n=Ct(e,[e.shape[0],t.fc1.weights.shape[0]]),a=Ot(n,t.fc1),o=tr(a,t.prelu4_alpha),i=Ot(o,t.fc2_1),s=vt(Ma(i,1),1),u=en(Le(i,s),1),c=Ot(o,t.fc2_2),l=Oe(u,1)[1];return{scores:l,regions:c}})}function fy(r,t,e,n,a){return Q(this,void 0,void 0,function(){var o,i,s,u,c,l,h,d,f,p,g,v,m,b;return ee(this,function(x){switch(x.label){case 0:return o=Date.now(),[4,Sl(r,t,{width:24,height:24})];case 1:return i=x.sent(),a.stage2_extractImagePatches=Date.now()-o,o=Date.now(),s=i.map(function(y){var w=dy(y,n);return y.dispose(),w}),a.stage2_rnet=Date.now()-o,u=s.length>1?Me(s.map(function(y){return y.scores})):s[0].scores,h=(l=Array).from,[4,u.data()];case 2:return c=h.apply(l,[x.sent()]),u.dispose(),d=c.map(function(y,w){return{score:y,idx:w}}).filter(function(y){return y.score>e}).map(function(y){var w=y.idx;return w}),f=d.map(function(y){return t[y]}),p=d.map(function(y){return c[y]}),g=[],v=[],f.length>0&&(o=Date.now(),m=Ir(f,p,.7),a.stage2_nms=Date.now()-o,b=m.map(function(y){var w=s[d[y]].regions.arraySync();return new ji(w[0][0],w[0][1],w[0][2],w[0][3])}),v=m.map(function(y){return p[y]}),g=m.map(function(y,w){return f[y].calibrate(b[w])})),s.forEach(function(y){y.regions.dispose(),y.scores.dispose()}),[2,{boxes:g,scores:v}]}})})}function py(r,t){return X(function(){var e=qi(r,t);e=ze(e,[2,2],[2,2],"same"),e=_t(e,t.conv4,"valid"),e=tr(e,t.prelu4_alpha);var n=Ct(e,[e.shape[0],t.fc1.weights.shape[0]]),a=Ot(n,t.fc1),o=tr(a,t.prelu5_alpha),i=Ot(o,t.fc2_1),s=vt(Ma(i,1),1),u=en(Le(i,s),1),c=Ot(o,t.fc2_2),l=Ot(o,t.fc2_3),h=Oe(u,1)[1];return{scores:h,regions:c,points:l}})}function vy(r,t,e,n,a){return Q(this,void 0,void 0,function(){var o,i,s,u,c,l,h,d,f,p,g,v,m,b,x;return ee(this,function(y){switch(y.label){case 0:return o=Date.now(),[4,Sl(r,t,{width:48,height:48})];case 1:return i=y.sent(),a.stage3_extractImagePatches=Date.now()-o,o=Date.now(),s=i.map(function(w){var C=py(w,n);return w.dispose(),C}),a.stage3_onet=Date.now()-o,u=s.length>1?Me(s.map(function(w){return w.scores})):s[0].scores,h=(l=Array).from,[4,u.data()];case 2:return c=h.apply(l,[y.sent()]),u.dispose(),d=c.map(function(w,C){return{score:w,idx:C}}).filter(function(w){return w.score>e}).map(function(w){var C=w.idx;return C}),f=d.map(function(w){var C=s[w].regions.arraySync();return new ji(C[0][0],C[0][1],C[0][2],C[0][3])}),p=d.map(function(w,C){return t[w].calibrate(f[C])}),g=d.map(function(w){return c[w]}),v=[],m=[],b=[],p.length>0&&(o=Date.now(),x=Ir(p,g,.7,!1),a.stage3_nms=Date.now()-o,v=x.map(function(w){return p[w]}),m=x.map(function(w){return g[w]}),b=x.map(function(w,C){return Array(5).fill(0).map(function(R,S){var I=s[w].points.arraySync();return new be(I[0][S]*(v[C].width+1)+v[C].left,I[0][S+5]*(v[C].height+1)+v[C].top)})})),s.forEach(function(w){w.regions.dispose(),w.scores.dispose(),w.points.dispose()}),[2,{boxes:v,scores:m,points:b}]}})})}var gy=function(r){ae(t,r);function t(){return r.call(this,"Mtcnn")||this}return t.prototype.load=function(e){return Q(this,void 0,void 0,function(){return ee(this,function(n){return[2,r.prototype.load.call(this,e)]})})},t.prototype.loadFromDisk=function(e){return Q(this,void 0,void 0,function(){return ee(this,function(n){return[2,r.prototype.loadFromDisk.call(this,e)]})})},t.prototype.forwardInput=function(e,n){return n===void 0&&(n={}),Q(this,void 0,void 0,function(){var a,o,i,s,u,c,l,h,d,f,p,g,v,m,b,x,y,w,C,R,S;return ee(this,function(I){switch(I.label){case 0:if(a=this.params,!a)throw new Error("Mtcnn - load model before inference");if(o=e.canvases[0],!o)throw new Error("Mtcnn - inputCanvas is not defined, note that passing tensors into Mtcnn.forwardInput is not supported yet.");return i={},s=Date.now(),u=X(function(){return ny(vt(Ti.fromPixels(o)).toFloat())}),c=function(k){return u.dispose(),i.total=Date.now()-s,k},l=u.shape.slice(1),h=l[0],d=l[1],f=new _l(n),p=f.minFaceSize,g=f.scaleFactor,v=f.maxNumScales,m=f.scoreThresholds,b=f.scaleSteps,x=(b||sy(p,g,[h,d])).filter(function(k){var F=$o(k,[h,d]);return Math.min(F.width,F.height)>Ea}).slice(0,v),i.scales=x,i.pyramid=x.map(function(k){return $o(k,[h,d])}),y=Date.now(),[4,hy(u,x,m[0],a.pnet,i)];case 1:return w=I.sent(),i.total_stage1=Date.now()-y,w.boxes.length?(i.stage2_numInputBoxes=w.boxes.length,y=Date.now(),[4,fy(o,w.boxes,m[1],a.rnet,i)]):[2,c({results:[],stats:i})];case 2:return C=I.sent(),i.total_stage2=Date.now()-y,C.boxes.length?(i.stage3_numInputBoxes=C.boxes.length,y=Date.now(),[4,vy(o,C.boxes,m[2],a.onet,i)]):[2,c({results:[],stats:i})];case 3:return R=I.sent(),i.total_stage3=Date.now()-y,S=R.boxes.map(function(k,F){return Va(Sr({},new St(R.scores[F],new Fi(k.left/d,k.top/h,k.width/d,k.height/h),{height:h,width:d})),new Km(R.points[F].map(function(T){return T.sub(new be(k.left,k.top)).div(new be(k.width,k.height))}),{width:k.width,height:k.height}))}),[2,c({results:S,stats:i})]}})})},t.prototype.forward=function(e,n){return n===void 0&&(n={}),Q(this,void 0,void 0,function(){var a;return ee(this,function(o){switch(o.label){case 0:return a=this.forwardInput,[4,Ge(e)];case 1:return[4,a.apply(this,[o.sent(),n])];case 2:return[2,o.sent().results]}})})},t.prototype.forwardWithStats=function(e,n){return n===void 0&&(n={}),Q(this,void 0,void 0,function(){var a;return ee(this,function(o){switch(o.label){case 0:return a=this.forwardInput,[4,Ge(e)];case 1:return[2,a.apply(this,[o.sent(),n])]}})})},t.prototype.getDefaultModelName=function(){return"mtcnn_model"},t.prototype.extractParamsFromWeigthMap=function(e){return iy(e)},t.prototype.extractParams=function(e){return ay(e)},t}(nn),my=.4,yy=[new be(1.603231,2.094468),new be(6.041143,7.080126),new be(2.882459,3.518061),new be(4.266906,5.178857),new be(9.041765,10.66308)],by=[117.001,114.697,97.404],xy=function(r){ae(t,r);function t(){var e=this,n={withSeparableConvs:!0,iouThreshold:my,classes:["face"],anchors:yy,meanRgb:by,isFirstLayerConv2d:!0,filterSizes:[3,16,32,64,128,256,512]};return e=r.call(this,n)||this,e}return Object.defineProperty(t.prototype,"anchors",{get:function(){return this.config.anchors},enumerable:!0,configurable:!0}),t.prototype.locateFaces=function(e,n){return Q(this,void 0,void 0,function(){var a;return ee(this,function(o){switch(o.label){case 0:return[4,this.detect(e,n)];case 1:return a=o.sent(),[2,a.map(function(i){return new St(i.score,i.relativeBox,{width:i.imageWidth,height:i.imageHeight})})]}})})},t.prototype.getDefaultModelName=function(){return"tiny_face_detector_model"},t.prototype.extractParamsFromWeigthMap=function(e){return r.prototype.extractParamsFromWeigthMap.call(this,e)},t}(Il),dt={ssdMobilenetv1:new El,tinyFaceDetector:new xy,tinyYolov2:new ey,mtcnn:new gy,faceLandmark68Net:new ml,faceLandmark68TinyNet:new w0,faceRecognitionNet:new R0,faceExpressionNet:new u0,ageGenderNet:new m0},Rl=function(r){ae(t,r);function t(e,n,a){var o=r.call(this)||this;return o.parentTask=e,o.input=n,o.extractedFaces=a,o}return t}(zr),Ki=function(r){ae(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.run=function(){return Q(this,void 0,void 0,function(){var e,n,a=this;return ee(this,function(o){switch(o.label){case 0:return[4,this.parentTask];case 1:return e=o.sent(),[4,Ha(e,this.input,function(i){return Q(a,void 0,void 0,function(){return ee(this,function(s){switch(s.label){case 0:return[4,Promise.all(i.map(function(u){return dt.faceExpressionNet.predictExpressions(u)}))];case 1:return[2,s.sent()]}})})},this.extractedFaces)];case 2:return n=o.sent(),[2,e.map(function(i,s){return fl(i,n[s])})]}})})},t.prototype.withAgeAndGender=function(){return new Zi(this,this.input)},t}(Rl),Xi=function(r){ae(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.run=function(){return Q(this,void 0,void 0,function(){var e,n;return ee(this,function(a){switch(a.label){case 0:return[4,this.parentTask];case 1:return e=a.sent(),e?[4,Hi(e,this.input,function(o){return dt.faceExpressionNet.predictExpressions(o)},this.extractedFaces)]:[2];case 2:return n=a.sent(),[2,fl(e,n)]}})})},t.prototype.withAgeAndGender=function(){return new Ji(this,this.input)},t}(Rl),Yi=function(r){ae(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.withAgeAndGender=function(){return new Qi(this,this.input)},t.prototype.withFaceDescriptors=function(){return new ts(this,this.input)},t}(Ki),$i=function(r){ae(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.withAgeAndGender=function(){return new es(this,this.input)},t.prototype.withFaceDescriptor=function(){return new ns(this,this.input)},t}(Xi),Al=function(r){ae(t,r);function t(e,n,a){var o=r.call(this)||this;return o.parentTask=e,o.input=n,o.extractedFaces=a,o}return t}(zr),Zi=function(r){ae(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.run=function(){return Q(this,void 0,void 0,function(){var e,n,a=this;return ee(this,function(o){switch(o.label){case 0:return[4,this.parentTask];case 1:return e=o.sent(),[4,Ha(e,this.input,function(i){return Q(a,void 0,void 0,function(){return ee(this,function(s){switch(s.label){case 0:return[4,Promise.all(i.map(function(u){return dt.ageGenderNet.predictAgeAndGender(u)}))];case 1:return[2,s.sent()]}})})},this.extractedFaces)];case 2:return n=o.sent(),[2,e.map(function(i,s){var u=n[s],c=u.age,l=u.gender,h=u.genderProbability;return wl(Cl(i,l,h),c)})]}})})},t.prototype.withFaceExpressions=function(){return new Ki(this,this.input)},t}(Al),Ji=function(r){ae(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.run=function(){return Q(this,void 0,void 0,function(){var e,n,a,o,i;return ee(this,function(s){switch(s.label){case 0:return[4,this.parentTask];case 1:return e=s.sent(),e?[4,Hi(e,this.input,function(u){return dt.ageGenderNet.predictAgeAndGender(u)},this.extractedFaces)]:[2];case 2:return n=s.sent(),a=n.age,o=n.gender,i=n.genderProbability,[2,wl(Cl(e,o,i),a)]}})})},t.prototype.withFaceExpressions=function(){return new Xi(this,this.input)},t}(Al),Qi=function(r){ae(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.withFaceExpressions=function(){return new Yi(this,this.input)},t.prototype.withFaceDescriptors=function(){return new ts(this,this.input)},t}(Zi),es=function(r){ae(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.withFaceExpressions=function(){return new $i(this,this.input)},t.prototype.withFaceDescriptor=function(){return new ns(this,this.input)},t}(Ji),Dl=function(r){ae(t,r);function t(e,n){var a=r.call(this)||this;return a.parentTask=e,a.input=n,a}return t}(zr),ts=function(r){ae(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.run=function(){return Q(this,void 0,void 0,function(){var e,n;return ee(this,function(a){switch(a.label){case 0:return[4,this.parentTask];case 1:return e=a.sent(),[4,Ha(e,this.input,function(o){return Promise.all(o.map(function(i){return dt.faceRecognitionNet.computeFaceDescriptor(i)}))},null,function(o){return o.landmarks.align(null,{useDlibAlignment:!0})})];case 2:return n=a.sent(),[2,n.map(function(o,i){return xl(e[i],o)})]}})})},t.prototype.withFaceExpressions=function(){return new Yi(this,this.input)},t.prototype.withAgeAndGender=function(){return new Qi(this,this.input)},t}(Dl),ns=function(r){ae(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.run=function(){return Q(this,void 0,void 0,function(){var e,n;return ee(this,function(a){switch(a.label){case 0:return[4,this.parentTask];case 1:return e=a.sent(),e?[4,Hi(e,this.input,function(o){return dt.faceRecognitionNet.computeFaceDescriptor(o)},null,function(o){return o.landmarks.align(null,{useDlibAlignment:!0})})]:[2];case 2:return n=a.sent(),[2,xl(e,n)]}})})},t.prototype.withFaceExpressions=function(){return new $i(this,this.input)},t.prototype.withAgeAndGender=function(){return new es(this,this.input)},t}(Dl),Tl=function(r){ae(t,r);function t(e,n,a){var o=r.call(this)||this;return o.parentTask=e,o.input=n,o.useTinyLandmarkNet=a,o}return Object.defineProperty(t.prototype,"landmarkNet",{get:function(){return this.useTinyLandmarkNet?dt.faceLandmark68TinyNet:dt.faceLandmark68Net},enumerable:!0,configurable:!0}),t}(zr),wy=function(r){ae(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.run=function(){return Q(this,void 0,void 0,function(){var e,n,a,o,i,s=this;return ee(this,function(u){switch(u.label){case 0:return[4,this.parentTask];case 1:return e=u.sent(),n=e.map(function(c){return c.detection}),this.input instanceof ke?[4,Bi(this.input,n)]:[3,3];case 2:return o=u.sent(),[3,5];case 3:return[4,Oi(this.input,n)];case 4:o=u.sent(),u.label=5;case 5:return a=o,[4,Promise.all(a.map(function(c){return s.landmarkNet.detectLandmarks(c)}))];case 6:return i=u.sent(),a.forEach(function(c){return c instanceof ke&&c.dispose()}),[2,e.map(function(c,l){return Va(c,i[l])})]}})})},t.prototype.withFaceExpressions=function(){return new Yi(this,this.input)},t.prototype.withAgeAndGender=function(){return new Qi(this,this.input)},t.prototype.withFaceDescriptors=function(){return new ts(this,this.input)},t}(Tl),Cy=function(r){ae(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.run=function(){return Q(this,void 0,void 0,function(){var e,n,a,o,i;return ee(this,function(s){switch(s.label){case 0:return[4,this.parentTask];case 1:return e=s.sent(),e?(n=e.detection,this.input instanceof ke?[4,Bi(this.input,[n])]:[3,3]):[2];case 2:return o=s.sent(),[3,5];case 3:return[4,Oi(this.input,[n])];case 4:o=s.sent(),s.label=5;case 5:return a=o,[4,this.landmarkNet.detectLandmarks(a[0])];case 6:return i=s.sent(),a.forEach(function(u){return u instanceof ke&&u.dispose()}),[2,Va(e,i)]}})})},t.prototype.withFaceExpressions=function(){return new $i(this,this.input)},t.prototype.withAgeAndGender=function(){return new es(this,this.input)},t.prototype.withFaceDescriptor=function(){return new ns(this,this.input)},t}(Tl),Nl=function(r){ae(t,r);function t(e,n){n===void 0&&(n=new Ga);var a=r.call(this)||this;return a.input=e,a.options=n,a}return t}(zr),Fl=function(r){ae(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.run=function(){return Q(this,void 0,void 0,function(){var e,n,a,o;return ee(this,function(i){switch(i.label){case 0:return e=this,n=e.input,a=e.options,a instanceof _l?[4,dt.mtcnn.forward(n,a)]:[3,2];case 1:return[2,i.sent().map(function(s){return s.detection})];case 2:if(o=a instanceof ty?function(s){return dt.tinyFaceDetector.locateFaces(s,a)}:a instanceof Ga?function(s){return dt.ssdMobilenetv1.locateFaces(s,a)}:a instanceof Gi?function(s){return dt.tinyYolov2.locateFaces(s,a)}:null,!o)throw new Error("detectFaces - expected options to be instance of TinyFaceDetectorOptions | SsdMobilenetv1Options | MtcnnOptions | TinyYolov2Options");return[2,o(n)]}})})},t.prototype.runAndExtendWithFaceDetections=function(){var e=this;return new Promise(function(n){return Q(e,void 0,void 0,function(){var a;return ee(this,function(o){switch(o.label){case 0:return[4,this.run()];case 1:return a=o.sent(),[2,n(a.map(function(i){return Sr({},i)}))]}})})})},t.prototype.withFaceLandmarks=function(e){return e===void 0&&(e=!1),new wy(this.runAndExtendWithFaceDetections(),this.input,e)},t.prototype.withFaceExpressions=function(){return new Ki(this.runAndExtendWithFaceDetections(),this.input)},t.prototype.withAgeAndGender=function(){return new Zi(this.runAndExtendWithFaceDetections(),this.input)},t}(Nl);(function(r){ae(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.run=function(){return Q(this,void 0,void 0,function(){var e,n;return ee(this,function(a){switch(a.label){case 0:return[4,new Fl(this.input,this.options)];case 1:return e=a.sent(),n=e[0],e.forEach(function(o){o.score>n.score&&(n=o)}),[2,n]}})})},t.prototype.runAndExtendWithFaceDetection=function(){var e=this;return new Promise(function(n){return Q(e,void 0,void 0,function(){var a;return ee(this,function(o){switch(o.label){case 0:return[4,this.run()];case 1:return a=o.sent(),[2,n(a?Sr({},a):void 0)]}})})})},t.prototype.withFaceLandmarks=function(e){return e===void 0&&(e=!1),new Cy(this.runAndExtendWithFaceDetection(),this.input,e)},t.prototype.withFaceExpressions=function(){return new Xi(this.runAndExtendWithFaceDetection(),this.input)},t.prototype.withAgeAndGender=function(){return new Ji(this.runAndExtendWithFaceDetection(),this.input)},t})(Nl);function _y(r,t){return t===void 0&&(t=new Ga),new Fl(r,t)}function Ey(r,t){if(r.length!==t.length)throw new Error("euclideanDistance: arr1.length !== arr2.length");var e=Array.from(r),n=Array.from(t);return Math.sqrt(e.map(function(a,o){return a-n[o]}).reduce(function(a,o){return a+Math.pow(o,2)},0))}(function(){function r(t,e){e===void 0&&(e=.6),this._distanceThreshold=e;var n=Array.isArray(t)?t:[t];if(!n.length)throw new Error("FaceRecognizer.constructor - expected atleast one input");var a=1,o=function(){return"person "+a++};this._labeledDescriptors=n.map(function(i){if(i instanceof $r)return i;if(i instanceof Float32Array)return new $r(o(),[i]);if(i.descriptor&&i.descriptor instanceof Float32Array)return new $r(o(),[i.descriptor]);throw new Error("FaceRecognizer.constructor - expected inputs to be of type LabeledFaceDescriptors | WithFaceDescriptor<any> | Float32Array | Array<LabeledFaceDescriptors | WithFaceDescriptor<any> | Float32Array>")})}return Object.defineProperty(r.prototype,"labeledDescriptors",{get:function(){return this._labeledDescriptors},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"distanceThreshold",{get:function(){return this._distanceThreshold},enumerable:!0,configurable:!0}),r.prototype.computeMeanDistance=function(t,e){return e.map(function(n){return Ey(n,t)}).reduce(function(n,a){return n+a},0)/(e.length||1)},r.prototype.matchDescriptor=function(t){var e=this;return this.labeledDescriptors.map(function(n){var a=n.descriptors,o=n.label;return new ou(o,e.computeMeanDistance(t,a))}).reduce(function(n,a){return n.distance<a.distance?n:a})},r.prototype.findBestMatch=function(t){var e=this.matchDescriptor(t);return e.distance<this.distanceThreshold?e:new ou("unknown",e.distance)},r.prototype.toJSON=function(){return{distanceThreshold:this.distanceThreshold,labeledDescriptors:this.labeledDescriptors.map(function(t){return t.toJSON()})}},r.fromJSON=function(t){var e=t.labeledDescriptors.map(function(n){return $r.fromJSON(n)});return new r(e,t.distanceThreshold)},r})();function Pl(r,t){var e=new Rn(t.width,t.height),n=e.width,a=e.height;if(n<=0||a<=0)throw new Error("resizeResults - invalid dimensions: "+JSON.stringify({width:n,height:a}));if(Array.isArray(r))return r.map(function(s){return Pl(s,{width:n,height:a})});if(pl(r)){var o=r.detection.forSize(n,a),i=r.unshiftedLandmarks.forSize(o.box.width,o.box.height);return Va(Sr(r,o),i)}return $c(r)?Sr(r,r.detection.forSize(n,a)):r instanceof kr||r instanceof St?r.forSize(n,a):r}const Ml=A(".avatar-container"),Ol=document.querySelector("fullscreen-loading"),Bl=1;let rs="",Rr="",as="",Zo=[];const ie={};let et=[],na=!1,yr=!1,ir={};const Dn=document.createElement("div");Dn.style=`
width: 100vw;
height: 100vh;
position: fixed;
top: 0;
left: 0;
z-index: 999999999;
`;let ja=!1,Tn="",os="",vn=!1,Ue=1,Jo=[];const bt=location.pathname.indexOf("/avatar")!==-1;function hu(){if(bt){window.gtagClick("visit_avatars");const r=rh("nav");r&&(~~r?~~r===2&&(A(".nav-tabs li").eq(2).addClass("active").siblings().removeClass("active"),Ue=2):(A(".nav-tabs li").eq(0).addClass("active").siblings().removeClass("active"),Ue=0,A(".avatar_create").css("display","flex")))}else jl(!0);Dr(!0),Ty()}bt&&A(function(){Ql?eh(hu):hu()});function is(r){return Jt({url:"/ai/avatar/user-avatar-list",type:"post",data:{type:r}})}function Ll(r){return Jt({url:"/ai/avatar/list",type:"post",data:{type:r}})}const Bt=A("#create-avatar-input"),cn=A("#create-avatar-file"),Wl=A(".create-avatar-body-title i");A(document).on("click",".avatar_create",function(){let r="";bt?(r=Ml.find("avatar-card"),window.gtagClick("talkingphoto_bnclick_add")):(window.gtagClick("home_talkinghead_upload"),r=A(".avatar-photo-sliderarea").find("avatar-card"));const t=ss(r,Bl);Bt.val(t),Ry(),A(".create-avatar-mask").css("display","flex"),wn("init",Bt),Sa(Bt[0])});A(".create-avatar-body-close").on("click",function(){A(".create-avatar-mask").hide(),A(".create-avatar-body .audio-box audio").attr("src","")});Bt.on("input porpertychange",function(){wn("",A(this))});Bt.on("blur",function(){if(A(this).val(A(this).val().trim()),Wl.show(),A(this).attr("disabled",!0),!A(this).val()){const r=Ml.find("avatar-card"),t=ss(r,Bl);A(this).val(t)}wn("init",A(this)),Sa(A(this)[0])});Wl.on("click",function(){Bt.attr("disabled",!1).trigger("focus");const r=Bt.val().length;Bt[0].setSelectionRange(r,r),A(this).hide(),wn("",Bt)});A(".create-avatar-body-steps .default-status , .create-avatar-body-steps .success-status").on("click",function(){cn.trigger("click")});A(".create-avatar-body-steps .default-status , .create-avatar-body-steps .success-status").on("dragenter dragover drop",function(r){if(r.stopPropagation(),r.preventDefault(),r.type==="drop"){const t=r.originalEvent.dataTransfer.files;let e="";if(t.length>0&&(e=t[0]),!e){mt({contentList:JSON.stringify(["Upload failed. You don&#x27;t have the permission to open this file.","Contact the file owner or an administrator to obtain permission."]),isCancel:"false",iconType:"tips"});return}const n=new FileReader;n.readAsText(e),n.onerror=function(a){n.error.name==="NotReadableError"&&mt({contentList:JSON.stringify(["Upload failed. You don&#x27;t have the permission to open this file.","Contact the file owner or an administrator to obtain permission."]),isCancel:"false",iconType:"tips"})},n.onload=function(a){}}});A(".create-avatar-body-steps .default-status , .create-avatar-body-steps .success-status").on("dragover",function(r){A(this).addClass("dragover")});A(".create-avatar-body-steps .default-status , .create-avatar-body-steps .success-status").on("dragleave",function(r){A(this).removeClass("dragover")});cn.on("change",function(r){const t=A(this)[0].files[0];Iy(t)});async function Iy(r){if(!r)return;const t=await th(r);if(t.ext&&!["png","jpeg"].includes(t.ext)){e();return}if(!Sy(r.name)||r.size/1024/1024>10){e();return}function e(){mt({content:".png/.jpg supported, up to 10MB. Image size less than 4096*4096 pixels.",isCancel:"false",iconType:"hint"}),cn.val("")}const n=window.URL.createObjectURL(r),a=document.createElement("img");a.src=n;const o=new FormData;o.append("file",r);try{await new Promise((s,u)=>{a.onload=c=>{const l=a.width,h=a.height,d=2560,f=1440;if(l>4096||h>4096)u(c);else if(l>d||h>f){let p=0,g=0;const v=document.createElement("canvas"),m=v.getContext("2d");l>h?(p=d,g=Math.round(h/l*d),g>f&&(p=Math.round(l/h*f),g=f)):(p=Math.round(l/h*f),g=f,p>d&&(p=d,g=Math.round(h/l*d))),v.width=p,v.height=g,m.drawImage(a,0,0,p,g),v.toBlob(b=>{try{o.set("file",b,r.name),s()}catch(x){u(x)}},r.type)}else s()}})}catch{e();return}A(".create-avatar-body-steps-one-main").addClass("loading").removeClass("success"),A("switch-pro").attr("allowClick","");try{if(!await ky(a)){mt({content:"No face detected, please try another photo.",isCancel:"false",iconType:"tips"}),A(".create-avatar-body-steps-one-main").removeClass("loading"),A("switch-pro").attr("allowClick","click"),A(".success-status img").attr("src").length&&A(".create-avatar-body-steps-one-main").addClass("success"),cn.val("");return}}catch{cn.val("")}window.URL.revokeObjectURL(n);try{const s=await nh({url:"/ai/source/upload",type:"POST",data:o});if(s.code===200){let u=function(c){Jt({url:"/ai/task/detail",type:"GET",data:{task_id:c}}).then(l=>{l.code===200?l.data.status===0?(os=s.data.url,rs=s.data.key,Rr=l.data.additional_data.bg_remove,as=l.data.additional_data.config,ja?Gl(Rr).then(h=>{h.code===200&&(Tn=h.data.url,A(".success-status img").attr("src",Tn).on("load error",function(){A(".success-status img").off("load error"),A(".create-avatar-body-steps-one-main").addClass("success").removeClass("loading"),A("switch-pro").attr("allowClick","click")}))}):(Tn="",A(".success-status img").attr("src",s.data.url).on("load error",function(){A(".success-status img").off("load error"),A(".create-avatar-body-steps-one-main").addClass("success").removeClass("loading"),A("switch-pro").attr("allowClick","click")}))):l.data.status===-1||l.data.status===-2?setTimeout(()=>{u(c)},1500):l.data.status===810?(mt({content:"No face detected, please try another photo.",isCancel:"false",iconType:"tips"}),A(".create-avatar-body-steps-one-main").removeClass("loading"),A("switch-pro").attr("allowClick","click"),A(".success-status img").attr("src").length&&A(".create-avatar-body-steps-one-main").addClass("success"),cn.val("")):i():i()}).catch(()=>{i()})};Jt({url:"/ai/task/generate",type:"POST",data:{action:"generate_avatar",param:{original:s.data.key}}}).then(c=>{c.code===200?u(c.data.task_id):i()}).finally(()=>{cn.val("")})}else i()}catch{i()}function i(){mt({content:" Sorry, failed to upload. Please try again.",isCancel:"false",iconType:"tips"}),A(".create-avatar-body-steps-one-main").removeClass("loading"),A("switch-pro").attr("allowClick","click"),A(".success-status img").attr("src").length&&A(".create-avatar-body-steps-one-main").addClass("success")}cn.val("")}async function ky(r){await dt.ssdMobilenetv1.loadFromUri("/models");const t=await _y(r);return Pl(t,r).length>0}function ss(r,t){const e=`Avatar ${t}`;let n=!1;return r.each((a,o)=>{e===o.getAttribute("avatarName")&&(n=!0)}),n?ss(r,t+1):e}function wn(r="",t){const e=document.createElement("span"),n=t.val().replace(/\s/g,"-");A(e).css({font:t.css("font"),visibility:"hidden"}).text(n),A("body").append(e);let a=~~A(e).css("width").replace(/px/g,"")+(r==="init"?3:26);const o=n?0:30;a=a<o?o:a>700?700:a,t.css("width",a+"px"),A(e).remove()}const Zt=A(".create-avatar-body .audio-box audio"),Ar=A(".create-avatar-body .audio-box");let zl="",Qo=!1;A(".create-avatar-body select-voice").on("choosevoice",r=>{zl=r.detail.value.audio_url,Qo=!0,Zt[0].pause()});Zt.on("loadeddata",function(){Ar.removeClass("loading"),Zt[0].play()});A(".create-avatar-body speed-setting").on("speedchange",function(r){Zt[0].playbackRate=r.detail.value});Ar.on("click",function(r){A(this).hasClass("loading")||(A(this).hasClass("play")?Zt[0].pause():Qo?(Ar.removeClass("play").addClass("loading"),Zt.attr("src",zl),Qo=!1):Zt[0].play())});Zt.on("play",function(){Ar.addClass("play")});Zt.on("pause ended",function(){Ar.removeClass("play")});function Sy(r){return!!/\.(jpg|png)$/i.exec(r)}A(".generate-btn").on("click",function(){bt&&window.gtagClick("avatars_head_upload"),A(this).addClass("loading"),A("body").append(Dn);const r=A(".create-avatar-body select-voice")[0].getSelectedVoice(),t=A(".create-avatar-body speed-setting")[0].getSpeed();let e=!1;Jt({url:"/ai/avatar/save-avatar",type:"POST",data:{type:"1",name:Bt.val(),avatar_key:rs,voice_id:r.toString(),speed:t.toString(),view:"2",avatar_noback_key:Rr,config:as,gender:0,show_back:ja?2:1,model_name:""}},()=>{},"web",!0).then(n=>{n.code===200?(e=!0,Py(n.data)):mt({content:"Sorry, failed to Generate. Please try again later. ",isCancel:"false",iconType:"tips"})}).catch(()=>{mt({content:"Sorry, failed to Generate. Please try again later. ",isCancel:"false",iconType:"tips"})}).finally(()=>{e||(A(this).removeClass("loading"),Dn.remove())})});function Ry(){rs="",Rr="",Tn="",os="",as="",ja=!1,A(".create-avatar-body select-voice")[0].setSelectedVoice(yr),A(".create-avatar-body speed-setting")[0].setSpeed(1),A(".create-avatar-body-steps-one-main").removeClass("loading success"),A("switch-pro")[0].init(),A(".success-status img").attr("src",""),A(".audio-box").removeClass("loading play")}const ft=A(".avatar-preview-body-title input"),Ul=A(".avatar-preview-body-title i"),rt=A(".avatar-preview-btns audio");function Ay(r){A("avatar-card").off("deletesuccess preview avatartoedit"),A("avatar-card").on("deletesuccess",function(){Dr()}),A("avatar-card").on("preview",function(t){A(".avatar-preview-btn-preview").removeClass("loading"),A(".avatar-preview-body").addClass("before-edit").removeClass("before-edit-video");const{type:e,id:n}=t.detail;ie.type=e;const a=e==="my"?"Save changes":"Save as my avatar";bt||(A(this).parents(".avatar-photo-sliderarea").length?Ue=0:Ue=1),Ue!==0&&A(".avatar-preview-body").addClass("before-edit-video"),!bt&&A(this).parents(".avatar-photo-sliderarea").length?ie.data=Jo.filter(s=>~~n===~~s.id&&s.boxType===e)[0]||{}:ie.data=Zo.filter(s=>~~n===~~s.id)[0]||{},ir=ie.data.config;let o={};if(ie.data.gender&&(ie.data.gender===1||ie.data.gender===2)?o=et.filter(s=>s.gender===ie.data.gender):o=et,o=o.length?o:et,ti("audioList",JSON.stringify(o)),A(".avatar-preview-body select-voice")[0].renderAudioList(),A(".avatar-preview-btn-save").text(a),ft.val(ie.data.name),A(".avatar-preview-img-box").addClass("loading"),Ue!==0?(A(".avatar-preview-img-box video").attr("src",ie.data.video.url),A(".avatar-preview-img-box video").off("canplay"),A(".avatar-preview-img-box video").on("canplay",function(){const s=document.querySelector("video-controls");s.setAttribute("totalTime",0),s.init(),A(".avatar-preview-img-box video").off("canplay")}),A(".avatar-preview-img-box video").on("play",function(){A(".avatar-preview-img-box").hasClass("loading")&&A(".avatar-preview-img-box").removeClass("loading")})):Hl(),ie.data.voice_id)A(".avatar-preview-options select-voice")[0].setSelectedVoice(ie.data.voice_id);else{const s=ie.data.gender===1?na:yr;A(".avatar-preview-options select-voice")[0].setSelectedVoice(s)}let i=ie.data.speed;ie.data.speed?(i=Number(ie.data.speed),rt[0].playbackRate=i):i=1,A(".avatar-preview-options speed-setting")[0].setSpeed(i),A(".avatar-preview-mask").css("display","flex"),wn("init",ft),Sa(ft[0])}),A("avatar-card").on("avatartoedit",function(t){const{type:e,id:n}=t.detail,a={};ie.type=e;let o={};!bt&&A(this).parents(".avatar-photo-sliderarea").length?o=Jo.filter(i=>~~n===~~i.id&&i.boxType===e)[0]||{}:o=Zo.filter(i=>~~n===~~i.id&&i.boxType===e)[0]||{},ie.data=o,a.config=o.config,a.name=o.name,a.type=o.type,a.view=o.view?o.view:"1",a.speed=o.speed?o.speed:1,a.show_back=o.show_back?o.show_back:"1",a.key=o.avatar.key,a.url=o.avatar.url,a.gender=o.gender,a.property=et.filter(i=>~~o.voice_id===i.id)[0]||{},a.view=a.view.toString()==="2"?"circle":a.view.toString()==="1"?"halfbody":"square",qa(a)})}A(".avatar-preview-options speed-setting").on("speedchange",function(r){rt[0].playbackRate=r.detail.value});A(".avatar-preview-body-close").on("click",function(){A(".avatar-preview-mask").hide(),rt.attr("src",""),A(".avatar-preview-video")[0].pause()});A(".avatar-preview-half-body").on("click",function(){if(!vn&&!A(this).hasClass("on")){A(".avatar-preview-img-box").addClass("loading"),A(".avatar-preview-view >div").removeClass("on"),A(this).addClass("on"),A(".avatar-preview-img-box").removeClass("circle");let r=ie.data.avatar.url;ie.data.show_back&&ie.data.show_back===2&&(r=ie.data.avatar_noback_url),vn=!0,A(".avatar-preview-img-box img").attr("src",r)}});A(".avatar-preview-circle").on("click",function(){vn||A(this).hasClass("on")||(A(".avatar-preview-square").hasClass("on")?A(".avatar-preview-img-box").addClass("circle"):(A(".avatar-preview-img-box").addClass("loading"),us(ir),A(".avatar-preview-img-box").addClass("circle")),A(".avatar-preview-view >div").removeClass("on"),A(this).addClass("on"))});A(".avatar-preview-square").on("click",function(){vn||A(this).hasClass("on")||(A(".avatar-preview-circle").hasClass("on")?A(".avatar-preview-img-box").removeClass("circle"):(A(".avatar-preview-img-box").addClass("loading"),us(ir),A(".avatar-preview-img-box").removeClass("circle")),A(".avatar-preview-view >div").removeClass("on"),A(this).addClass("on"))});function us(r){const t=document.createElement("canvas");t.width=r.width||400,t.height=r.height||400;const e=t.getContext("2d"),n=A(".avatar-preview-img-box img")[0];e.drawImage(n,-r.x||0,-r.y||0);const a=t.toDataURL();vn=!0,n.src=a}function Dy(r,t){return new Promise(e=>{const n=document.createElement("img");n.crossOrigin="Anonymous",n.src=t,n.onload=function(){const a=document.createElement("canvas");a.width=r.width||400,a.height=r.height||400,a.getContext("2d").drawImage(n,-r.x||0,-r.y||0),e(a.toDataURL())}})}Ul.on("click",function(){ft.attr("disabled",!1).trigger("focus"),A(this).hide();const r=ft.val().length;ft[0].setSelectionRange(r,r),wn("",ft)});ft.on("blur",function(){A(this).val(A(this).val().trim()),Ul.show(),A(this).attr("disabled",!0),A(this).val()||ft.val(ie.data.name),wn("init",A(this)),Sa(A(this)[0])});ft.on("input porpertychange",function(){wn("",A(this))});const Et=A(".avatar-preview-btn-preview");Et.on("click",function(){const r=A(this).hasClass("loading"),t=A(this).hasClass("play");r||(t?rt[0].pause():(Ia?(Et.removeClass("play").addClass("loading"),rt.attr("src",ei),Ia=!1):rt[0].play(),A(".avatar-preview-img-box").append('<bottom-message text="The avatar won&#x27;t animate in preview." type="avatar"  ></bottom-message>')))});rt.on("play",function(){Et.addClass("play"),Et.text("Playing"),Et.removeClass("loading"),A(".avatar-preview-audio").attr({autoplay:!1})});rt.on("pause ended",function(){Et.removeClass("play"),Et.text("Preview")});let ei="",Ia=!1;A(".avatar-preview-options select-voice").on("choosevoice",r=>{rt[0].pause(),Et.removeClass("play"),Et.text("Preview"),ei=r.detail.value.audio_url,Ia=!0,A(".avatar-preview-body ").hasClass("before-edit")&&!A(".avatar-preview-body").hasClass("before-edit-video")?A(".avatar-preview-audio").attr({src:ei,autoplay:!0}):A(".avatar-preview-audio").attr({autoplay:!1})});rt.on("loadeddata",function(){Et.hasClass("loading")&&(Et.removeClass("loading"),rt[0].play())});A(".avatar-preview-btn-save").on("click",function(){window.gtagClick("avatars_edit_save"),Ia=!0,A(".avatar-preview-audio").attr("src",""),A(".avatar-preview-btn-preview").removeClass("loading play"),A("body").append(Dn),A(this).addClass("loading");const r=ie.data,t=A(".avatar-preview-options select-voice")[0].getSelectedVoice(),e=A(".avatar-preview-options speed-setting")[0].getSpeed(),n=A(".avatar-preview-half-body").hasClass("on")?"1":A(".avatar-preview-circle").hasClass("on")?"2":"3";if(ie.type==="my")Jt({url:"/ai/avatar/edit-avatar",type:"post",data:{id:r.id,name:ft.val(),voice_id:t.toString(),speed:e.toString(),view:n,gender:r.gender}}).then(a=>{a.code===200?(bt||(location.href="/avatar/index.html?nav=0"),A(".avatar-preview-mask").hide(),rt[0].pause(),A(".avatar-preview-video")[0].pause(),Dr()):mt({content:"Sorry, failed to save the changes. Please try again later. ",isCancel:"false",iconType:"tips"})}).catch(()=>{mt({content:"Sorry, failed to save the changes. Please try again later. ",isCancel:"false",iconType:"tips"})}).finally(()=>{A(this).removeClass("loading"),Dn.remove()});else{const a=(Ue+1).toString();Jt({url:"/ai/avatar/save-avatar",type:"POST",data:{type:a,name:ft.val(),avatar_key:r.avatar.key,voice_id:t.toString(),speed:e.toString(),view:n,avatar_noback_key:r.avatar.key,config:ir.width?ir:{width:400,height:400,x:0,y:0},gender:r.gender,show_back:1,video_key:r.video.key,model_name:r.model_name}},()=>{},"web",!0).then(o=>{o.code===200?(bt||(~~a===1?location.href="/avatar/index.html?nav=0":location.href="/avatar/index.html?nav=2"),A(".avatar-preview-mask").hide(),rt[0].pause(),A(".avatar-preview-video")[0].pause(),Ue===1?A(".nav-tabs li").eq(2).trigger("click"):Dr()):mt({content:"Sorry, failed to save the avatar. Please try again later.",isCancel:"false",iconType:"tips"})}).catch(()=>{mt({content:"Sorry, failed to save the avatar. Please try again later.",isCancel:"false",iconType:"tips"})}).finally(()=>{A(this).removeClass("loading"),Dn.remove()})}});A(".avatar-preview-btn-create,.mode-item-landscape").on("click",function(){A(".avatar-preview-body").hasClass("before-edit")?window.gtagClick("avatars_preview_create"):window.gtagClick("avatars_edit_create");const r=Vl();qa(r)});A(".mode-item-portrait").on("click",function(){A(".avatar-preview-body").hasClass("before-edit")?window.gtagClick("avatars_preview_create"):window.gtagClick("avatars_edit_create");const r=Vl();qa(r,!1,"portrait")});function Vl(){const r={},t=A(".avatar-preview-options select-voice")[0].getSelectedVoice();return r.speed=A(".avatar-preview-options speed-setting")[0].getSpeed(),r.name=ft.val(),r.config=ie.data.config,r.type=ie.data.type,r.key=ie.data.avatar.key,r.url=ie.data.avatar.url,r.gender=ie.data.gender,r.view=A(".avatar-preview-half-body").hasClass("on")?"halfbody":A(".avatar-preview-circle").hasClass("on")?"circle":"square",r.property=et.filter(e=>~~t===e.id)[0]||{},r}function qa(r,t=!1,e="landscape"){r.property.hasOwnProperty("id")||(~~ie.data.gender===1||~~ie.data.gender===2?r.property=et.filter(a=>~~ie.data.gender===~~a.gender)[0]||{}:r.property=et[0]),ti("avatarPageEditData",JSON.stringify({avatar:{config:r.config,key:r.key,name:r.name,type:r.type,url:r.url,avatarType:r.view,detailData:ie.data},speech:{speed:r.speed,property:r.property}}));let n="";Ue===0&&!t?n="/edit/?from=avatar&key=avatarPageEditData&type=talking-photo":Ue===1&&!t?n="/edit/?from=avatar&key=avatarPageEditData&type=avatar-pro":n="/edit/?from=avatar&key=avatarPageEditData",e==="landscape"?n=n+"&mode=landscape":n=n+"&mode=portrait",window.location.href=n}function Ty(){Jt({url:"/ai/audio/list",type:"post"}).then(r=>{if(r.code===200){et=r.data.list;const t=[],e=[];et.map(n=>(n.lan==="en"?t.push(n):e.push(n),n.name==="Brandon"&&(na=n.id),n.name==="Libby"&&(yr=n.id),n)),e.sort((n,a)=>n.country_name.localeCompare(a.country_name)),et=[...t,...e],ti("audioList",JSON.stringify(et)),na||(na=et[0].id),yr||(yr=et[0].id),A("select-voice").each((n,a)=>{a.renderAudioList()})}})}A(".create-avatar-mask").on("dragenter dragover drop",function(r){r.preventDefault()});A("switch-pro").on("switchChange",async function(r){ja=r.detail;let t="";if(r.detail)if(Tn)t=Tn;else{const e=await Gl(Rr);e.code===200&&(t=e.data.url,Tn=t)}else t=os;t&&(A(".create-avatar-body-steps-one-main").addClass("loading-processing"),A("switch-pro").attr("allowClick",""),A(".success-status img").attr("src",t).on("load error",function(){A(".success-status img").off("load error"),A(".create-avatar-body-steps-one-main").addClass("success").removeClass("loading-processing"),A("switch-pro").attr("allowClick","click")}))});function Gl(r){return Jt({url:"/ai/source/get-access-url",type:"POST",data:{key:r}})}A(".avatar-preview-btn-to-edit").on("click",function(){window.gtagClick("avatars_preview_edit"),rt[0].pause(),A(".avatar-preview-img-box").addClass("loading"),Ue===0?(A(".avatar-preview-body").removeClass("before-edit"),setTimeout(()=>{A(".avatar-preview-img-box").removeClass("loading")},800)):(A(".avatar-preview-body").removeClass("before-edit before-edit-video"),Hl()),A(".avatar-preview-video")[0].pause()});function Hl(){let r=ie.data.avatar.url;ie.data.show_back&&ie.data.show_back===2&&(r=ie.data.avatar_noback_url),vn=!0,A(".avatar-preview-img-box img").attr("src",r),A(".avatar-preview-img-box img").off("load");let t=!1;A(".avatar-preview-view >div").removeClass("on"),A(".avatar-preview-img-box").removeClass("circle"),~~ie.data.view===2||~~ie.data.view===3?(~~ie.data.view===2?(A(".avatar-preview-img-box").addClass("circle"),A(".avatar-preview-circle").addClass("on")):A(".avatar-preview-square").addClass("on"),A(".avatar-preview-img-box img").on("load",function(){t?setTimeout(()=>{vn=!1,A(".avatar-preview-img-box").removeClass("loading")},500):(us(ir),t=!0)})):(A(".avatar-preview-half-body").addClass("on"),A(".avatar-preview-img-box img").on("load",function(){setTimeout(()=>{vn=!1,A(".avatar-preview-img-box").removeClass("loading")},500)}))}const ka=A(".avatar-container");A(".nav-tabs li").on("click",function(){const r=A(this).index(),t=A(".nav-tabs li.active").index();r===0?window.gtagClick("avatars_tab_head"):r===1?window.gtagClick("avatars_tab_pro"):window.gtagClick("avatars_tab_my"),t!==r&&(Ue=r,A(this).addClass("active").siblings().removeClass("active"),r===0?A(".avatar_create").css("display","flex"):A(".avatar_create").hide(),Dr())});function Dr(r=!1){if(bt)Ol.showLoading();else if(!r)return;ka.find("avatar-card,no-result").remove(),ka.removeClass("no-result"),Ue===0?jl():Ue===1?Ny():Fy()}function jl(r=!1){const t=new Promise((a,o)=>{is("1").then(i=>{i.code===200?(A("#page-main-view").show(),Array.isArray(i.data.list)?i.data.list=i.data.list.map(s=>(s.boxType="my",s.avatar={},s.avatar.key=s.avatar_key,s.avatar.url=~~s.show_back===1?s.avatar_url:s.avatar_noback_url,s.video={},s.video.key=s.video_key,s.video.url=s.video_url,s)):i.data.list=[],a(i.data)):o(i)}).catch(i=>{o(i)})}),e=new Promise((a,o)=>{Ll("1").then(i=>{i.code===200?(Array.isArray(i.data.list)?i.data.list=i.data.list.map(s=>(s.boxType="ai",s)):i.data.list=[],a(i.data)):o(i)}).catch(i=>{o(i)})});Promise.all([t,e]).then(a=>{const o=a.reduce((u,c)=>c.count.type1+u,0),i=[...a[0].list,...a[1].list],s={};s.list=i,s.count={},s.count.type1=o,s.count.type2=a[1].count.type2,s.count.type3=a[0].count.type2,r?Jo=s.list:cs(s)}).catch(a=>{})}function Ny(){Ll("2").then(r=>{r.code===200&&(A("#page-main-view").show(),Array.isArray(r.data.list)?r.data.list=r.data.list.map(t=>(t.boxType="ai",t)):r.data.list=[],r.data.count.type1=r.data.count.type1+r.data.other_count.type1,r.data.count.type3=r.data.other_count.type2,cs(r.data))}).catch(r=>{})}function Fy(){is("2").then(r=>{r.code===200&&(A("#page-main-view").show(),Array.isArray(r.data.list)?r.data.list=r.data.list.map(t=>(t.boxType="my",t.avatar={},t.avatar.key=t.avatar_key,t.avatar.url=~~t.show_back===1?t.avatar_url:t.avatar_noback_url,t.video={},t.video.key=t.video_key,t.video.url=t.video_url,t)):r.data.list=[],r.data.count.type1=r.data.count.type1+r.data.other_count.type1,r.data.count.type3=r.data.count.type2,r.data.count.type2=r.data.other_count.type2,cs(r.data,"No Avatar here. You may personalize from Avatar Pro."))}).catch(r=>{})}function cs(r,t=""){window.scrollTo({top:0,behavior:"smooth"});const{type1:e=0,type2:n=0,type3:a=0}=r.count;A(".taking-photo-number").text(e),A(".avatar-pro-number").text(n),A(".my-avatar-number").text(a);let o="";Zo=r.list,bt&&(r.list&&r.list.length>0?r.list.map(async i=>{let s="";const u=i.avatar.url;~~i.view===2||~~i.view===3?Dy(i.config,u).then(c=>{A(`.avatar-container avatar-card[id='${i.id}'],[type='${i.boxType}]`).attr("pictureUrl",c)}):s=u,o+=`<avatar-card boxType="${Ue===0?"photo":"pro"}" type="${i.boxType}" view="${i.view}" urlkey="${i.avatar.key}" class="avatar-my-template_item" id="${i.id}" close="${i.boxType==="my"?"show":"hide"}" pictureUrl="${s}" avatarName="${i.name}"></avatar-card>`}):ka.addClass("no-result").append(`<no-result picture="/image/img/small_window_empty_med.png" text="${t}"></no-result>`),ka.append(o),Ol.hideLoading(),Ay())}function Py(r){is("1").then(t=>{if(t.code===200&&Array.isArray(t.data.list)){const[e]=t.data.list.filter(n=>n.id===r);if(e){e.avatar={},e.avatar.key=e.avatar_key,e.avatar.url=~~e.show_back===1?e.avatar_url:e.avatar_noback_url,e.video={},e.video.key=e.video_key,e.video.url=e.video_url,ie.type="my",ie.data=e;const n={};ie.data=e,n.config=e.config,n.name=e.name,n.type=e.type,n.view=e.view?e.view:"1",n.speed=e.speed?e.speed:1,n.show_back=e.show_back?e.show_back:"1",n.key=e.avatar.key,n.url=e.avatar.url,n.gender=e.gender,n.property=et.filter(a=>~~e.voice_id===a.id)[0]||{},n.view=n.view.toString()==="2"?"circle":n.view.toString()==="1"?"halfbody":"square",bt||(Ue=0),qa(n,!1)}}}).catch(t=>{}).finally(()=>{A(".generate-btn").removeClass("loading"),Dn.remove()})}A(document).on("click",".avatar-page avatar-card",function(){Ue===0?window.gtagClick("avatars_head_thumbnail"):Ue===1&&window.gtagClick("avatars_pro_thumbnail")});export{Ay as a,hu as h};
//# sourceMappingURL=index-018ba728.js.map
