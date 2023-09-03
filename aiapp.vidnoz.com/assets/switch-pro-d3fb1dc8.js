var o=Object.defineProperty;var c=(t,e,i)=>e in t?o(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i;var a=(t,e,i)=>(c(t,typeof e!="symbol"?e+"":e,i),i);import{s as d,a4 as p,q as u,x as g,j as s,V as h}from"./sentry-604fb4c0.js";import"./fabric-d1db407f.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="fa62d638-9da8-4de5-8522-254d25a27ff8",t._sentryDebugIdIdentifier="sentry-dbid-fa62d638-9da8-4de5-8522-254d25a27ff8")}catch{}})();class r extends d{constructor(){super(),this.id="switchChange",this.pageType="",this.allowClick="click"}render(){return g`
    <div class="${this.allowClick!=="click"?"no-click":""}">
      <span class="toggler ${this.value==="true"?"active":""} "  @click=${this._switChange}></span>
    </div>
    `}_switChange(e){var l,n;if(this.allowClick!=="click")return;if(this.pageType!=="avatar"&&["free","vip_expired"].includes((n=(l=document.getElementById("page-header"))==null?void 0:l.user_info)==null?void 0:n.type)&&this.id!=="is_publish"){this.openPricingC();return}s(e.target).toggleClass("active");const i=s(e.target).hasClass("active");this.value=i,i?s(`#${this.id}`).attr("value",!0):s(`#${this.id}`).attr("value",!1),this.dispatchEvent(new CustomEvent(this.id,{detail:i}))}init(){this.allowClick="click",this.value="false",this.shadowRoot.querySelector("span").classList.remove("active")}openPricingC(){h({isFree:"true",showTitle:"Unlock Endless Possibilities with Premium Plans",topTitle:"The selected feature is only available in Premium.",pricingType:"pricingC"})}}a(r,"properties",{id:{type:String,reflect:!0},value:{type:String,reflect:!0},pageType:{type:String},allowClick:{type:String}}),a(r,"styles",[p,u`
      .toggler {
        position: relative;
        width: 35px;
        height: 16px;
        border-radius: 12px;
        background: rgba(140, 140, 151, .3);
        display:block;
        transition: all .2s linear;
        cursor: pointer;
    }
      .toggler::before{
        content: "";
        position: absolute;
        top: -2px;
        left: 0;
        height: 20px;
        width: 20px;
        border-radius: 50%;
        background: rgba(140, 140, 151, 1);
        transition: all .2s linear;
    }
    .active::before {
        left: 15px;
        background: rgba(139, 61, 255, 1);
    }
    .active{
        background-color: rgba(139, 61, 255, .3);
    }
    .no-click span{
      cursor: not-allowed;
    }
      `]);customElements.define("switch-pro",r);
//# sourceMappingURL=switch-pro-d3fb1dc8.js.map
