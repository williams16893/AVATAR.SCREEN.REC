var kh=Object.defineProperty;var Hh=(t,e,i)=>e in t?kh(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i;var M=(t,e,i)=>(Hh(t,typeof e!="symbol"?e+"":e,i),i),oo=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)};var Pe=(t,e,i)=>(oo(t,e,"read from private field"),i?i.call(t):e.get(t)),Ye=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Nt=(t,e,i,r)=>(oo(t,e,"write to private field"),r?r.call(t,i):e.set(t,i),i);var Fe=(t,e,i)=>(oo(t,e,"access private method"),i);import{q as Be,s as fe,B as ge,a4 as _e,x as O,D as be,a5 as gr,a6 as Nh,a7 as so,u as Ao,t as lo,j as P,o as fi,a as ct,a2 as Lh,p as Dr,M as pi,a8 as Mh,a9 as Rh,$ as co,V as qA,r as Ii,v as Ur,aa as el,ab as Dh,Y as $h,W as Ph,X as Oh,ac as cu,y as zh,z as Kh,J as tl,A as Xh,T as Gh,f as il,d as Yh,P as Vh,Q as Wh,R as Jh,S as jh}from"./sentry-604fb4c0.js";import{f as dn}from"./fabric-d1db407f.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="d75a5f9b-69ee-494f-a9c6-cc863a587aa7",t._sentryDebugIdIdentifier="sentry-dbid-d75a5f9b-69ee-494f-a9c6-cc863a587aa7")}catch{}})();const Zh=Be`
.loading-mask {
    width: 918px;
    height: 750px;
    background: transparent;
    position: fixed;
    top: 0;
    left: 0;
    bottom:0;
    right:0;
    margin:auto;
    z-index: 1002;
    border-radius: 8px;
    display:none;
  }
  #page-header {
    position: fixed;
    top: 0;
    width: calc(100% - 240px);
    height: 5.5em;
    background: #ffffff;
    box-sizing: border-box;
    z-index: 100;
    transition: all 0.3s ease-out;
  }
  #page-header.border-bottom {
    border-bottom: 1px solid #f3f3f4;
  }

  #page-header .normal{
    font: normal normal 500 20px/26px Roboto;
    color: #000000;
    margin-right:auto;
    margin-left:48px;
  }

  #page-header .gradient{
    font-size:16px;
    margin-right:auto;
    margin-left:48px;
    background: transparent linear-gradient(271deg, #2CBEFF 0%, #8B3DFF 100%) 0% 0% no-repeat padding-box;
    -webkit-background-clip: text;
    color: transparent;
  }

  .page-header-pro {
    cursor:pointer;
    transition:all 0.2s ease-out;
    display:flex;
    align-items:center;
  }

  .page-header-pro.vipuser::after{
    content:attr(vip_time);
    display:block;
    white-space:nowrap;
    background: #F3AC42 0% 0% no-repeat padding-box;
    border-radius: 0px 14px 14px 0px;
    font: normal normal normal 12px/28px Roboto;
    color: #FFFFFF;
    padding:0 14px 0 5px;
    margin-left:-5px;
    height:28px;
    box-sizing:border-box;
  }

  .page-header-pro.vipuser .pro-icon-1{
    height: 44px;
    width:44px;
    border-radius:44px;
    display:flex;
    align-items:center;
    justify-content:center;
    background: #F3AC42 0% 0% no-repeat padding-box;
    font-size:15px;
    color:#fff;
    font-weight:500;
    box-sizing:border-box;
  }

  .page-header-pro.freeuser::after{
    content:attr(vip_time);
    display:block;
    white-space:nowrap;
    background: #F3AC42 0% 0% no-repeat padding-box;
    border-radius: 0px 6px 6px 0px;
    font: normal normal 500 15px/44px Roboto;
    color: #FFFFFF;
    padding-right:18px;
    padding-left:8px;
    height:44px;
    box-sizing:border-box;
  }

  .page-header-pro.freeuser .pro-icon-1{
    height: 44px;
    min-width:44px;
    border-radius:6px 0 0 6px;
    padding-left:18px;
    display:flex;
    align-items:center;
    justify-content:center;
    background: #F3AC42 0% 0% no-repeat padding-box;
    font-size:15px;
    color:#fff;
    font-weight:500;
    box-sizing:border-box;
  }

  .page-header-pro:hover::after{
    background: #F8B34C 0% 0% no-repeat padding-box;
  }

  .page-header-pro:hover .pro-icon-1{
    background: #F8B34C 0% 0% no-repeat padding-box;
  }
  /* .page-header-pro:hover .pro-icon-1{
    transform:scale(calc(32 / 24));
    z-index:1;
    transition:all 0.2s ease-out;
  } */
  .page-header-create {
    height: 44px;
    line-height:44px;
    color: #ffffff;
    min-width: 166px;
    background: #8B3DFF 0% 0% no-repeat padding-box;
    border-radius: 6px;
    margin: 0 16px;
    padding: 0 10px;
    box-sizing:border-box;
    justify-content:center;
    align-items:center;
    font: normal normal 400 15px/20px Roboto;
  }

  .page-header-create img{
    margin-right:8px;
  }

  .page-header-create:hover {
    cursor: pointer;
    background: #9B57FF 0% 0% no-repeat padding-box;
  }

  .page-header-user {
    margin-right: 2.5em;
    height: 3.25em;
    width: 3.25em;
    position:relative;
    display:flex;
    justify-content:center;
    align-items:center;
  }

  .page-header-user .head_portrait{
    height: 2.75em;
    width: 2.75em;
    border: 1px solid #8C8C974D;
    border-radius:50%;
    overflow:hidden;
  }

  .page-header-user .head_portrait >img{
    width:100%;
    height:100%;
    object-fit:cover;
    cursor:pointer;
  }
  .page-header-user .head_portrait:hover{
    border: 4px solid #8C8C9726;
    transition:all ease-out .1s;
  }

  .header-tag{
    background: #8C8C97;
    border: 2px solid #FFFFFF;
    border-radius: 6px;
    position:absolute;
    bottom:-14px;
    left:50%;
    transform:translate(-50%);
    padding:1px 8px;
    color: #FFFFFF;
    font: normal normal normal 13px/18px Roboto;
    white-space:nowrap;
  }

  .page-header-user .page-header-user-box{
    width:300px;
    padding:25px 25px 0 25px;
    background-color:#ffffff;
    position:absolute;
    right:0;
    top:64px;
    box-shadow: 0px 3px 6px #1E1E2E33;
    border: 1px solid #8C8C971A;
    border-radius: 6px;
    box-sizing:border-box;
    display:flex;
    flex-direction:column;
    z-index:3;
  }

  .page-header-user-box .userinfo-box{
    display:flex;
    align-items:center;
  }

  .person-header{
    width:56px;
    height:56px;
    flex-shrink:0;
    border: 1px solid #8C8C974D;
    border-radius:50%;
    position:relative;
  }
  .person-header >img{
    width:100%;
    height:100%;
    object-fit:cover;
    border-radius:50%;
  }

  .person-info{
    margin-left:16px;
    width:100%;
    overflow:hidden;
    text-overflow: ellipsis;
  }

  .person-info span{
    white-space:nowrap;
    font: normal normal normal 15px/20px Roboto;
    color: #000000;
    overflow:hidden;
    text-overflow: ellipsis;
    max-width:300px;
    display:block;
  }
  .person-info >span:last-child{
    font: normal normal normal 13px/18px Roboto;
    color: #8C8C97;
    margin-top:4px;
  }
  .person-settings{
    margin-top:20px;
    padding:7px 0 16px;
    border-top:1px solid rgba(30, 30, 46, .1);
  }
  .person-settings >li{
    display:flex;
    justify-content:space-between;
    align-items:center;
    cursor:pointer;
    margin:5px -15px 0;
    padding:11px 15px;
    border-radius: 6px;
  }

  .person-settings >li:hover{
    transition: background 0.6s ease 0s;
    background: rgb(243, 243, 243);
  }
  .person-settings >li >div{
    display:flex;
    align-items:center;
    font: normal normal normal 14px/19px Roboto;
  }

  .person-settings >li >div >img{
    width:22px;
    height:22px;
    margin-right:8px;
  }
  .person-info-settings-box .mask{
    width:100vw;
    height:100vh;

  }
  .form-box{
    overflow:auto;
  }
  .form{
    display:flex;
    flex-direction:column;
    width:600px;
    margin:0 auto;
    max-height: 65vh;
    padding-right:10px;
  }
  .form-control{
    display:flex;
    flex-direction:column;
    font: normal normal 500 13px/18px Roboto;
    color: #1E1E2E;
    margin-top:24px;
    position:relative;
  }

  .form-control:nth-child(3){
    margin:0
  }

  .name-box{
    display:flex;
    align-items:center;
    justify-content:space-between;
  }

  .name-box .form-control{
       margin:0;
       flex:1;
       &:last-child{
        margin-left:24px;
       }
    }

  .name-box .form-control:last-child{
      margin-left:24px;
  }

  .form-control input{
    height: 44px;
    outline: none;
    border-radius: 6px;
    padding:0 18px;
    border:1px solid #1E1E2E33;
    font: normal normal normal 14px/19px Roboto;
    color: #1E1E2E;
    box-sizing:border-box;
  }
  .form-control label{
    margin-bottom:10px;
    font: normal normal normal 13px/18px Roboto;
    color: rgba(30, 30, 46, 1);
  }
  .form-control input:hover{
    border: 1px solid #1E1E2E80;
  }
  .form-control input:focus{
    outline: 2px solid #564AFE1A;
    border: 1px solid #8B3DFF;
  }
  .form-control input.error{
    outline:2px solid #DC3A3A1A;
    border:1px solid #DC3A3A;
  }
  .form-control input::placeholder{
    color: #8C8C97;
  }

  .form-control.last{
    justify-content:space-between;
    flex-direction:row;
    align-items:center;
    margin-top:32px;
  }

  .form-control .delete{
    font: normal normal normal 14px/19px Roboto;
    color: #8C8C97;
    cursor:pointer;
  }

  .form-control .delete:hover{
    color: #1E1E2E;
  }

  .divider{
    width:100%;
    height:0.1px;
    border: 1px dashed #1E1E2E33;
    margin:21px 0;
  }
  .save{
    background: rgba(30, 30, 46, .1);
    width: 120px;
    height: 40px;
    border-radius: 6px;
    outline:none;
    border:none;
    cursor:pointer;
    color: #1E1E2E;
    font: normal normal normal 14px/19px Roboto;
    transition:all ease-out 0.3s;
  }
  .save:hover{
    background:rgba(30, 30, 46, .2);
  }
  .save:disabled{
    pointer-events:none;
  }
  .person-header-setting{
    width:96px;
    height:96px;
    border: 2px solid #1E1E2E0D;
    border-radius:50%;
    position:relative;
    flex-shrink: 0;
  }
  .person-header-setting .head-portrait{
    width:100%;
    height:100%;
    overflow:hidden;
    border-radius:50%;
  }
  .person-header-setting .head-portrait >img{
    width:100%;
    height:100%;
    object-fit:cover;
  }

  .person-header-setting:hover .settings-header-mask{
    visibility:visible;
    transition:all ease-out .3s;
    opacity:1;
  }

  .settings-header-mask{
    width:100%;
    height:100%;
    position:absolute;
    display:flex;
    left:0;
    top:0;
    background: rgba(0, 0, 0, 0.4);
    border-radius:50%;
    align-items:center;
    font: normal normal normal 12px/16px Roboto;
    color: rgba(255, 255, 255, 1);
    padding:0 10px;
    box-sizing:border-box;
    justify-content:space-between;
    opacity:0;
    visibility:hidden;
  }

  .settings-header-mask >span{
    position:relative;
    cursor:pointer;
    border-radius: 10px;
    width:32px;
    height:32px;
    display:flex;
    align-items:center;
    justify-content:center;
  }

  .settings-header-mask >span >span{
    position:absolute;
    padding:4px 8px;
    background: #1E1E2E;
    border-radius: 4px;
    left:24px;
    top:24px;
    visibility:hidden;
    opacity:0;
    white-space:nowrap;
  }

  .settings-header-mask >span:hover{
    background-color:rgba(255, 255, 255, .2);
  }

  .settings-header-mask >span:hover >span{
    visibility:visible;
    opacity:1;
    transition:all ease-out .3s;
  }

  .user-tag{
    padding:1px 8px;
    font: normal normal normal 13px/18px Roboto;
    border-radius: 4px;
    border: 2px solid rgba(255, 255, 255, 1);
    position:absolute;
    top: -2px;
    background:rgba(140, 140, 151, 1);
    color:#ffffff;
    left: 68px;
    z-index:1;
    white-space:nowrap;
  }

  .settings-header{
    display:flex;
    align-items:center;
  }
  .settings-header div:nth-child(2){
    min-width:600px;
    display:flex;
    justify-content:space-between;
    margin-left:40px;
    align-items:center;
  }

  .settings-header >div:nth-child(2) >div:first-child{
    display:flex;
    flex-direction:column;
  }

  .settings-header >div:nth-child(2) >div:first-child >span{
    font: normal normal 700 16px/21px Roboto;
    color: #1E1E2E;
    max-width:300px;
    text-overflow: ellipsis;
    overflow:hidden;
    white-space:nowrap;
  }

  .settings-header >div:nth-child(2) >div:first-child >span:last-child{
    font: normal normal normal 13px/18px Roboto;
    color: #8C8C97;
    margin-top:2px;
  }

  .upload-button{
    background: #8B3DFF;
    border-radius: 6px;
    outline:none;
    border:none;
    width:120px;
    height:38px;
    color: #FFFFFF;
    cursor:pointer;
    transition:all ease-out 0.3s;
    display:flex;
    align-items:center;
    justify-content:center;
  }

  .upload-button:hover{
    background:#9B57FF;
  }

  .upload-button >img{
    margin-right:8px;
  }

  .settings-more{
    margin-left:98px;
  }

  .settings-more >div:first-child{
    width:32px;
    height:32px;
    display:flex;
    flex-direction:column;
    align-items:center;
    padding:6px 0;
    justify-content:space-between;
    cursor:pointer;
    border-radius: 4px;
    transition:all ease-out 0.3s;
    box-sizing:border-box;
  }

  .settings-more >div:first-child:hover{
    background: rgba(30, 30, 46, .1);
  }

  .settings-more >div:first-child span{
    width:4px;
    height:4px;
    border-radius:50%;
    background:#8C8C97;
    pointer-events:none;
  }

  .settings-more {
    position:relative;
  }

  .settings-active{
    background: rgba(30, 30, 46, .1);
  }

   .tooltip {
    position:absolute;
    padding:4px 9px;
    border-radius: 4px;
    background: #1E1E2E;
    color: #FFFFFF;
    font: normal normal normal 12px/16px Roboto;
    top:30px;
    right:-44px;
    visibility:hidden;
    opacity:0;
  }

  .settings-more >div:first-child:hover + .tooltip{
    visibility:visible;
    transition:all ease-out .3s;
    opacity:1;
  }

  .settings-more >ul{
    width:200px;
    padding:8px;
    position:absolute;
    background:#ffffff;
    box-shadow: 0px 3px 6px #1E1E2E33;
    border-radius: 6px;
    top:48px;
    right:0;
    display:none;
    z-index:1;
  }

  .settings-more >ul >li{
    font: normal normal normal 13px/18px Roboto;
    box-sizing:border-box;
    cursor:pointer;
    display:flex;
    align-items:center;
    height:40px;
    border-radius: 4px;
    padding:11px 8px;
  }

  .settings-more >ul >li >img{
    margin-right:8px;
  }

  .settings-more >ul >li:hover{
    background:rgba(140, 140, 151, .2);
  }

  .full-mask {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 1000;
    display:none;
  }
  .dialog-box {
    position: absolute;
    max-height: 90vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    background-color: #ffffff;
    border-radius: 8px;
    padding:18px 4px 27px 24px;
    box-sizing: border-box;
    /* overflow:auto; */
    display:flex;
    flex-direction:column;
  }

  .dialog-box .tabs-content-subscriptions{
    height:653px;
    overflow:auto;
    padding-right:20px;
  }
  .dialog-box .tabs-content-subscriptions.showScroll{
    padding-right:12px;
  }
  .dialog-title {
    display: flex;
    justify-content: space-between;
    padding-bottom: 25px;
    font-weight: 700;
    padding-right:20px;
  }
  .title-text {
    font-size: 16px;
    font: normal normal medium 16px/21px Roboto;
    color: #8C8C97;
  }

  .title-text ul{
    display:flex;
  }
  .title-text ul >li{
    margin-right:35px;
    cursor:pointer;
    display:flex;
    flex-direction:column;
    align-items:center;
  }

  .title-text ul >li::after{
    margin-top:8px;
    content:"";
    display:block;
    width:0;
    height:4px;
    background:#8B3DFF;
    transition:all ease-out 0.3s;
  }

  .title-text ul >li:hover{
    color: #1E1E2E;
    transition:all ease-out .3s;
  }

  .active{
    color:#1E1E2E;
  }
  .active::after{
    width:100% !important;
  }
  .cursor-pointer{
    width:32px;
    height:32px;
    display:flex;
    justify-content:center;
    align-items:center;
    transition:all ease-out .3s;
    border-radius: 8px;
  }
  .cursor-pointer:hover{
    background: rgba(140, 140, 151, .1);
  }
  .sub-top{
    display:flex;
    justify-content:center;
    align-items:center;
  }
  .sub-top .left{
    width:335px;
    border-radius: 6px 0 0 6px;
    background: rgba(140, 140, 151, 0.05);
    padding:22px 0 22px 37px;
    color: rgba(30, 30, 46, 1);
    box-sizing:border-box;
    height: fit-content;
    height:410px;
    margin-top:18px;
  }
  .sub-top .left dt {
    font: normal normal 700 16px/21px Roboto;
    color: #1E1E2E;
  }
  .sub-top .left dt span{
    background: rgba(140, 140, 151, 1) 0% 0% no-repeat padding-box;
    border-radius: 12px 2px;
    padding:4px 13px;
    font: normal normal normal 13px/18px Roboto;
    color: rgba(255, 255, 255, 1);
    margin-left:18px;
  }
  .sub-top dd{
    margin-top: 27px;
    display:flex;
    align-items:center;
    font: normal normal normal 13px Roboto;

  }
  .sub-top dd img{
    margin-right:8px;
  }
  .sub-top .left .divider{
    background: rgba(140, 140, 151, .1);
    width:100%;
    height:1px;
    border:none;
  }
  .sub-top .right{
    width:382px;
    box-sizing:border-box;
    height:480px;
    padding:24px 0 24px 46px;
    border-radius: 6px;
    background-image:url(/image/img/subscriptions_plan_pro.png);
    background-color:#F6E3C3;
    background-repeat: no-repeat,
                       no-repeat;
    background-position:right 248px,0% 0%;
    background-size:222px 213px,100% 100%;
  }


  .sub-top .right button{
    margin-top:30px;
    border-radius: 6px;
    background: transparent linear-gradient(90deg, rgba(39, 43, 58, 1) 0%, rgba(60, 62, 75, 1) 100%) 0% 0% no-repeat padding-box;
    font: normal normal 600 15px/20px Roboto;
    color: rgba(235, 196, 130, 1);
    min-width:290px;
    padding:12px;
    border:none;
    outline:none;
    cursor:pointer;
    display:flex;
    justify-content:center;
    align-items:center;
  }
  .sub-top .right button >img{
    visibility:hidden;
    width:0;
  }
  .sub-top .right button:hover >img{
    visibility:visible;
    margin-left:6px;
    transition:all ease-out .3s;
    width:20px;
  }
  .sub-top .right dt{
    font: normal normal bold 16px/21px Roboto;
    display:flex;
    align-items:center;
  }
  .sub-top .right dt>img{
    margin-left:17px;
  }

  .sub-top .right dd{
    margin-top:13px;
  }
  .sub-top .right dd:nth-child(2){
    margin-top:25px;
    font: normal normal bold 13px/18px Roboto;
    color: #1E1E2E;
  }

  .sub-top .right dd >span{
    font: normal normal bold 13px/18px Roboto;
    color: #1E1E2E;
  }
  .sub-top-type{
    display:flex;
    align-items:center;
    font: normal normal normal 14px/19px Roboto;
    color: #1E1E2E;
  }
  .sub-top-type img{
    margin-right:8px;
  }
  .sub-bottom{
    margin-top:16px;
  }
  table{
    margin-top:18px;
    border-radius: 6px;
    background: rgba(140, 140, 151, 0.05);
    padding:0 24px;
    width:100%;
    border-spacing: 0 12px;
    text-align:left;
  }
  table thead{
    font: normal normal normal 13px/18px Roboto;
    color: rgba(140, 140, 151, 1);
  }
  table thead,table tbody tr{
    display: table;
    width: 100%;
    table-layout: fixed;
  }
  table tbody{
    font: normal normal normal 12px/16px Roboto;
    color: rgba(51, 51, 51, 1);
    /* max-height:196px;
    overflow-y:scroll; */
    display:block;
  }
  table tbody::-webkit-scrollbar { width: 0 !important }

  table tbody { -ms-overflow-style: none; }

  table tbody { overflow: -moz-scrollbars-none; }

  table thead th{
    border-bottom:1px dashed rgba(140, 140, 151, .2);
    padding-bottom:19px;
    font: normal normal normal 13px/18px Roboto;
    color: #8C8C97;
  }
  table thead th:last-child{
    text-align:right;
  }
  table tbody tr td:last-child{
    text-align:right;
  }
  .no-result{
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    padding:36px 0;
  }
  .no-result >span{
    color: #8C8C97;
    font: normal normal normal 12px/16px Roboto;
    margin-top:9px;
  }
  .pro-sub-content{
    box-sizing:border-box;
    display:flex;
    padding:24px 24px 35px 32px;
    background: #F6E3C3 0% 0% no-repeat padding-box;
    border-radius: 6px;
    margin-top:26px;
    margin-bottom:48px;
  }
  .pro-sub-content .left{
    font: normal normal normal 12px/16px Roboto;
    display:flex;
    flex-direction:column;
  }
  .pro-sub-content .left p{
    margin-top:12px;
    font: normal normal 500 16px/21px Roboto;
    color: #1E1E2E;
  }

  .pro-sub-content .left p >span{
    font: normal normal bold 16px/21px Roboto;
  }
  .pro-sub-content .left >span{
    margin-top:10px;
    font: italic normal normal 13px/18px Roboto;
    color: #976419;
  }
  .pro-sub-content .right{
    flex:1;
    margin-left:91px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding-top:9px ;
  }
  .pro-sub-content .right-box{
    display:flex;
    align-items:center;
  }
  .pro-sub-content .right-box::before{
    content:"";
    display:block;
    width:1px;
    height:98px;
    background: #DFBF88 0% 0% no-repeat padding-box;
    margin-right:30px;
  }
  .pro-sub-content .right-box .content >p{
    margin-top:13px;
    font: normal normal 500 16px/21px Roboto;
  }
  .pro-sub-content .right-box .content >p >span{
    font: normal normal bold 16px/21px Roboto;
  }

  .pro-sub-content .right-box .content >span{
    margin-top:10px;
    display:inline-block;
    font: italic normal normal 12px/16px Roboto;
    color: #976419;
  }

  .pro-sub-content .right >button{
    border:none;
    outline:none;
    height:44px;
    box-sizing:border-box;
    width:144px;
    padding:12px;
    background: transparent linear-gradient(90deg, #272B3A 0%, #3C3E4B 100%) 0% 0% no-repeat padding-box;
    font: normal normal 500 15px/20px Roboto;
    color: #EBC482;
    border-radius: 6px;
    display:flex;
    align-items:center;
    justify-content:center;
    white-space:nowrap;
    cursor:pointer;
  }

  .pro-sub-content .right >button img{
    visibility:hidden;
    width:0;
  }

  .pro-sub-content .right >button:hover img{
    visibility:visible;
    margin-left:6px;
    transition:all ease-out .3s;
    width:20px;
  }

  .loading{
    position:absolute;
    left:50%;
    top:50%;
    transform:translate(-50%,-50%);
    border-radius: 50% !important;
    background: rgba(0, 0, 0, 0.4) !important;
  }
  .loading:before{
    width: 1.4em !important;
    height: 1.4em !important;
    font-size:7px !important;
    margin-bottom:0 !important;
  }

  .save-loading{
    width: 120px !important;
    height: 40px !important;
    background: rgba(30, 30, 46, .1) !important;
    border-radius: 6px;
  }
  .save-loading:before{
    width: 1.5em !important;
    height: 1.5em !important;
    font-size:5px !important;
    margin-bottom:0 !important;
  }

  .error-name{
    position:absolute;
    left:0;
    top:-18px;
    padding: 11px 16px;
    background: #DC3A3A;
    border-radius: 8px;
    color: #FFFFFF;
    font-size: 12px;
    line-height: 15px;
    user-select: none
  }
  .error-name::after {
    content: "";
    width: 0;
    height: 0;
    display: block;
    position: absolute;
    left: 14px;
    bottom: -8px;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 14px solid #DC3A3A
  }

  .person-time-progress{
    margin-top:28px;
  }

  .person-time-progress .person-time{
    display:flex;
    justify-content: space-between;
    align-items:center;
  }

  .person-time-progress .credits{
    font: normal normal normal 13px/18px Roboto;
    color: #1E1E2E;
  }

  .person-time-progress .time-box{
    font: normal normal bold 13px/18px Roboto;
    color: #8B3DFF;
    display:flex;
    align-items:center;
  }

  .person-time-progress .time-box .tip{
    display:flex;
    align-items:center;
    margin-left:12px;
    cursor:pointer;
    width:18px;
    height:18px;
    background:url(/image/svg/Individual_credits_tip.svg);
    position:relative;
  }

  .person-time-progress .time-box .tip-box::before{
    height:10px;
    width:100%;
    content:"";
    display:block;
    background-color:transparent;
    position:absolute;
    top:-10px;
    right:0;
  }

  .person-time-progress .time-box .tip:hover{
    background:url(/image/svg/Individual_credits_tip_hover.svg);
  }

  .person-time-progress .time-box .tip:hover .tip-box{
    display:block;
  }

  .person-time-progress .time-box .tip .tip-box{
    position:absolute;
    right:0;
    top:22px;
    padding:8px 12px 5px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #1E1E2E33;
    border: 1px solid #8C8C974D;
    border-radius: 4px;
    width:255px;
    z-index:1;
    font: normal normal normal 12px/16px Roboto;
    color: #1E1E2E;
    cursor:auto;
    box-sizing:border-box;
    display:none;
  }

  .person-time-progress .time-box .tip .tip-box a{
    text-decoration:underline;
    color: #8B3DFF;
    cursor:pointer;
  }

  .time-progress{
    margin-top:12px;
    position:relative;
  }

  .time-progress .total{
    background: rgba(155, 87, 255, .2) 0% 0% no-repeat padding-box;
    border-radius: 5px;
    width:100%;
    height:8px;
  }

  .time-progress .progress{
    background: rgba(155, 87, 255, 1) 0% 0% no-repeat padding-box;
    border-radius: 5px;
    width:50%;
    height:8px;
    position:absolute;
    left:0;
    top:0;
  }
`;class Xo extends fe{constructor(){var i,r,n;super();M(this,"pageHeader",ge());M(this,"accountType",{free:{name:"Free",color:"#8C8C97"},vip:{name:"Premium",color:"#E8AC52"},vip_expired:{name:"Expired",color:"#DB5353"},designer:{name:"Designer",color:"#2986FF"}});M(this,"formItem",[{title:"Twitter",id:"twitter_link",placeHolder:"Add your Twitter link here",initialValue:""},{title:"Instagram",id:"ig_link",placeHolder:"Add your Instagram link here",initialValue:""},{title:"Facebook",id:"facebook_link",placeHolder:"Add your Facebook link here",initialValue:""},{title:"YouTube Channel",id:"youtube_link",placeHolder:"Add your channel link here",initialValue:""}]);M(this,"subsPlanFree",[{iconUrl:"/image/svg/subscriptions_plan_prompt.svg",text:"-min Free Trial"},{iconUrl:"/image/svg/subscriptions_plan_prompt.svg",text:"50+ Avatar Outfits"},{iconUrl:"/image/svg/subscriptions_plan_prompt.svg",text:"100+ Language-specific Voices"},{iconUrl:"/image/svg/subscriptions_plan_prompt.svg",text:"200+ Video Templates"},{iconUrl:"/image/svg/subscriptions_plan_prompt.svg",text:"Unlock All Premium Features"}]);M(this,"subsPlanPro",[{iconUrl:"/image/svg/subscriptions_plan_pro.svg",text:"Up to 180 Mins / Month"},{iconUrl:"/image/svg/subscriptions_plan_pro.svg",text:"Max Duration per Video"},{iconUrl:"/image/svg/subscriptions_plan_pro.svg",text:"No Watermark"},{iconUrl:"/image/svg/subscriptions_plan_pro.svg",text:"50+ Avatar Outfits"},{iconUrl:"/image/svg/subscriptions_plan_pro.svg",text:"100+ Language-specific Voices"},{iconUrl:"/image/svg/subscriptions_plan_pro.svg",text:"200+ Video Templates"},{iconUrl:"/image/svg/subscriptions_plan_pro.svg",text:"CTA on Share Page"},{iconUrl:"/image/svg/subscriptions_plan_pro.svg",text:"Branded Share Page"},{iconUrl:"/image/svg/subscriptions_plan_pro.svg",text:"Priority Video Processing"},{iconUrl:"/image/svg/subscriptions_plan_pro.svg",text:"Change Plan Anytime"}]);M(this,"Dialog",ge());this.username="",this.user_info={type:((i=JSON.parse(localStorage.getItem("user_info")))==null?void 0:i.type)||"free",head_portrait:((r=JSON.parse(localStorage.getItem("user_info")))==null?void 0:r.head_portrait)||"/image/svg/head_portrait.svg"},this.openChangePwd=!1,this.time_info=((n=JSON.parse(localStorage.getItem("user_info")))==null?void 0:n.ai_credit)||{},this.historyList=[],this.pageName="",this.pageNameClassName="normal",this.showBottomBorder="hide"}render(){var i,r,n,a,o,s,A,l,c,u,d,h,g,f,p,v,m,w,x,_,b,E,U,H,T,y,Q,B,C,I,S,k,F,N,D,z,Y,ae;return O`
      <create-dialog id="create-dialog"></create-dialog>
      <mob-dialog></mob-dialog>
      <div class='loading-mask'></div>
      <div ${be(this.pageHeader)} id="page-header" class="flex-item-center flex-end ${this.showBottomBorder==="show"?"border-bottom ":""}">
        <!-- pagename -->
        ${this.pageName?O`<span class='${this.pageNameClassName}'>${this.pageName}</span>`:""}

        <div class="page-header-pro ${["free","vip_expired"].includes(this.user_info.type)?"freeuser":"vipuser"}"
             vip_time='${["free","vip_expired"].includes(this.user_info.type)?"Upgrade":gr(((i=this.time_info)==null?void 0:i.total_time)-((r=this.time_info)==null?void 0:r.used_time))}'
             @click=${["free","vip_expired"].includes(this.user_info.type)?this.openPricingA:this.openVipA}>
          <div class="pro-icon-1">
            <img src="/image/svg/diamond.svg" />
          </div>
        </div>

        <div class="page-header-create flex-item-center" @click=${this._createClick}>
          <img width='24' height='24' src="/image/svg/add.svg" />
          Create Video
        </div>

        <div class="page-header-user" >
          <div class="head_portrait">
            <img src="${((n=this.user_info)==null?void 0:n.head_portrait)||"/image/svg/head_portrait.svg"}" @click=${this._togglePerson}/>
          </div>
          <div class="page-header-user-box" style="display:none">
            <div class='userinfo-box'>
              <div class="person-header">
                <img src="${((a=this.user_info)==null?void 0:a.head_portrait)||"/image/svg/head_portrait.svg"}"/>
                <span style="background-color:${(s=this.accountType[(o=this.user_info)==null?void 0:o.type])==null?void 0:s.color}" class="header-tag">${(l=this.accountType[(A=this.user_info)==null?void 0:A.type])==null?void 0:l.name}</span>
            </div>
              <div class="person-info">
                <span class='headerUserName' title="${(c=this.user_info)==null?void 0:c.first_name}&nbsp;${(u=this.user_info)==null?void 0:u.last_name}">
                  ${(d=this.user_info)==null?void 0:d.first_name}&nbsp;${(h=this.user_info)==null?void 0:h.last_name}
                </span>
                <span class='headerUserEmail' title="${(g=this.user_info)==null?void 0:g.email}">${(f=this.user_info)==null?void 0:f.email}</span>
              </div>
            </div>

            <div class='person-time-progress'>
              <div class='person-time'>
                <div class='credits'>
                  Credits:
                </div>
                <div class='time-box'>
                  <span class='time'>
                    ${gr(((p=this.time_info)==null?void 0:p.total_time)-((v=this.time_info)==null?void 0:v.used_time))}
                  </span>
                  <span class='tip'>
                    <div class='tip-box'>
                      ${this.showTips()}
                    </div>
                  </span>
                </div>
              </div>

              <div class='time-progress'>
                <div class='total'></div>
                <div class='progress' style="width:${Nh(((m=this.time_info)==null?void 0:m.total_time)-((w=this.time_info)==null?void 0:w.used_time),(x=this.time_info)==null?void 0:x.total_time)}"></div>
              </div>

            </div>

            <ul class="person-settings">
              <li @click=${R=>this._open(R,0)}>
                <div><img width="22" height="22" src="/image/svg/profile.svg" />Profile</div>
                <img src="/image/svg/profile_more.svg" />
              </li>
              <li @click=${R=>this._open(R,1)}>
                <div><img width="22" height="22" src="/image/svg/Individual_subscriptions.svg" />Subscriptions</div>
                <img src="/image/svg/profile_more.svg" />
              </li>
              <li @click=${this._openSupport}>
                <div><img width="22" height="22" src="/image/svg/Individual_help.svg" />Help &amp; Supports</div>
                <img src="/image/svg/profile_more.svg" />
              </li>
              <li @click=${so}>
                <div><img width="22" height="22" src="/image/svg/Individual_signout.svg" />Sign out</div>
                <img src="/image/svg/profile_more.svg" />
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="full-mask" ${be(this.Dialog)}>
        <div class="dialog-box" style="width:918px;height:750px">
          <div class="dialog-title">
            <div class="title-text">
              <ul class='tabs'>
                <li @click=${R=>this._checkTab(R,0)}>Profile</li>
                <li @click=${R=>this._checkTab(R,1)}>Subscriptions</li>
              </ul>
          </div>
            <div class="cursor-pointer" @click=${this._close}>
              <img src="/image/img/window_close.png" />
            </div>
          </div>

          <div class="tabs-content">
            <div class="settings-header">
              <div class="person-header-setting">
                <div class='head-portrait'>
                  <img src="${((_=this.user_info)==null?void 0:_.head_portrait)||"/image/svg/head_portrait.svg"}"/>
                </div>
                <span class="user-tag" style="background-color:${(E=this.accountType[(b=this.user_info)==null?void 0:b.type])==null?void 0:E.color}" class="header-tag">${(H=this.accountType[(U=this.user_info)==null?void 0:U.type])==null?void 0:H.name}</span>
                ${this.loading?O`
                <div class="small-loading loading"></div>
                `:O`<div class="settings-header-mask">
                  <span @click=${()=>this._resetHead()}>
                    <img width="24" height='24' src="/image/svg/profile_reset.svg" />
                    <span>Restore to default</span>
                  </span>
                  <span @click=${()=>this._openUploadHead()}>
                    <img width="24" height='24' src="/image/svg/profile_replace.svg" />
                    <span>Choose another image</span>
                  </span>
                </div>`}
              </div>
              <div>
                <div>
                  <span class='userName' title="${(T=this.user_info)==null?void 0:T.first_name}&nbsp;${(y=this.user_info)==null?void 0:y.last_name}">
                    ${(Q=this.user_info)==null?void 0:Q.first_name}&nbsp;${(B=this.user_info)==null?void 0:B.last_name}
                  </span>
                  <span class='userEmail' title="${(C=this.user_info)==null?void 0:C.email}">${(I=this.user_info)==null?void 0:I.email}</span>
                </div>
                ${["vip"].includes(this.user_info.type)?"":O`<button class="upload-button" @click=${this.openPricingA}>
                    <img src="/image/svg/profile_upgrade.svg" width='14' height='14' alt="">
                    Upgrade</button>`}
                <input type="file" style="display:none;" @change=${this._uploadHead} id="headInput" accept=".jpg,.jpeg,.png,.gif,.heic">
              </div>
              <div class="settings-more">
                <div class="show-settings" @click=${this._showSettings}>
                  <span></span><span></span><span></span>
                </div>
                <span class="tooltip">More</span>
                <ul class="more-settings">
                  <li @click=${this._openChangePwd}><img width="18" height='18' src="/image/svg/profile_password.svg" />Change Password</li>
                  <li @click=${so}><img width="18" height='18' src="/image/svg/profile_signout.svg" />Sign out</li>
                </ul>
              </div>
            </div>
            <div class='form-box'>
              <form id="form" class="form" autocomplete="off">
              <div class="name-box">
                <div class="form-control">
                    <label for="first_name">First Name</label>
                    <input type="text" name="first_name" id='first_name'  @input=${this._inputChange} @blur=${this._inputBlur} maxlength="100"/>
                    <div class="error-name" style="display:none">
                      Enter your first name here.
                    </div>
                  </div>
                  <div class="form-control">
                    <label for="last_name">Last Name</label>
                    <input type="text" name="last_name" id='last_name'  @input=${this._inputChange} @blur=${this._inputBlur} maxlength="100"/>
                    <div class="error-name" style="display:none">
                      Enter your last name here.
                    </div>
                  </div>
              </div>
                <div class="divider"></div>
                ${this.formItem.map(R=>O`
                  <div class="form-control">
                    <label for=${R.id}>${R.title}</label>
                    <input type="text" id=${R.id} name=${R.id} placeholder=${R.placeHolder} @input=${this._inputChange} @blur=${this._inputBlur} maxlength="800"/>
                    <div class="error-name" style="display:none">
                      Must start with http:// or https://
                    </div>
                  </div>
                  `)}
                <div class="form-control last">
                  ${this.saveLoading?O`<div class="small-loading white save-loading"></div>`:O`<button type="submit" class="save" @click=${this._submit}>
                      Save
                    </button>`}
                  <span class='delete' @click=${this.deleteMyAccount}>Delete my account</span>
                </div>
              </form>
            </div>
        </div>

        <div class="tabs-content tabs-content-subscriptions ${["free","vip_expired"].includes((S=this.user_info)==null?void 0:S.type)?"showScroll":""}">
            <div class="sub-top-type">
              <img width="20" height='20' src="/image/svg/subscriptions_plan.svg" />
              Plan
            </div>
          ${["vip"].includes(this.user_info.type)?O`<div class="pro-sub-top">
            <div class="pro-sub-content">
              <div class="left">
                <img width="50" height='54' src="/image/svg/subscriptions_plan_premium.svg" />
                <p>Premium Plan - <span>${((F=(k=this.historyList)==null?void 0:k.find(R=>R.status==="active"))==null?void 0:F.ai_monthly_video_time)||0}-min / Month</span></p>
                <span>Expired in: ${Ao((N=this.user_info)==null?void 0:N.ai_vip_expired_at,"MMM DD, YYYY")}</span>
              </div>
              <div class="right">
                <div class='right-box'>
                  <div class='content'>
                    <img width="44" height='44' src="/image/svg/subscriptions_plan_time.svg" />
                    <p><span>${gr(((D=this.time_info)==null?void 0:D.total_time)-((z=this.time_info)==null?void 0:z.used_time))}</span> Remaining</p>
                    <span>Renew in ${((Y=this.time_info)==null?void 0:Y.renew_in)||0} Days</span>
                  </div>
                </div>
                <button @click=${this.openVipA}>
                  Switch Plan
                  <img width="20" height='20' src="/image/svg/subscriptions_plan_more.svg" />
                </button>
              </div>
            </div>
            </div>`:O` <div class="sub-top">
                  <dl class='left'>
                  <dt>Your Current Plan <span>Free</span></dt>
                  <div class='divider'></div>
                  ${this.subsPlanFree.map((R,se)=>{var X;return se===0?O`
                              <dd><img width="18" height='18' src=${R.iconUrl} />${(((X=this.time_info)==null?void 0:X.ai_free_time)/60).toFixed(0)+R.text}</dd>`:O`
                              <dd><img width="18" height='18' src=${R.iconUrl} />${R.text}</dd>
                    `})}
                </dl>
                <dl class="right">
                <dt>Premium Plan <img width='34' height='34' src="/image/svg/subscriptions_pro.svg" alt=""></dt>
                  ${this.subsPlanPro.map(function(R,se){return se===1?O` <dd><img width="18" height='18' src=${R.iconUrl} /><span>Up to 20-min&nbsp;</span>${R.text}</dd>`:O` <dd><img width="18" height='18' src=${R.iconUrl} />${R.text}</dd>`})}
                <button @click=${this.openPricingA}>
                  Unlock All Premium Features
                  <img width="20" height='20' src="/image/svg/subscriptions_plan_more.svg" />
                </button>
              </dl>
            </div>`}

            <div class="sub-bottom">
              <div class="sub-top-type">
              <img width="20" height='20' src="/image/svg/subscriptions_history.svg" />
              Billing History
              </div>
              <table>
                <thead>
                  <tr>
                    <th>Billing Data</th>
                    <th>Plan</th>
                    <th>Amount</th>
                    <th>Payment Method</th>
                    <th>Validity Period</th>
                  </tr>
                </thead>
                <tbody>
                  ${((ae=this.historyList)==null?void 0:ae.length)>0?this.historyList.map(R=>O`<tr>
                    <td>${Ao(R.created_at,"MMM DD, YYYY")}</td>
                    <td>${R.plan}</td>
                    <td>${R.symbol+R.price}</td>
                    <td>${R.type}</td>
                    <td>${Ao(R.expired_at,"MMM DD, YYYY")}</td>
                    </tr>`):O`<tr>
                    <td colspan="5">
                      <div class="no-result">
                        <img width="64" height='64' src="/image/svg/subscriptions_history_bill.svg" />
                        <span>No transations yet</span>
                    </div>
                    </td>
                  </tr>`}
                </tbody>
            </table>
            </div>
        </div>
        </div>
      </div>
      <change-password open=${this.openChangePwd} userInfo=${JSON.stringify(this.user_info)}></change-password>
    `}async firstUpdated(){const i=()=>{P(this.renderRoot.querySelector(".page-header-user-box")).slideUp("fast")};lo(document,"#page-header","","mouseup",i),lo(this.renderRoot,this.renderRoot.querySelector(".page-header-user"),"","mouseup",i),await this.getProductList(),await this._getUserInfo(),await this._getTimeInfo(),this._setInitalValue(),this.renderRoot.getElementById("create-dialog").addEventListener("templates",a=>{this.dispatchEvent(new CustomEvent("getTemplates",{detail:a.detail}))}),P(this.renderRoot.querySelector(".head-portrait")).find("img")[0].addEventListener("load",()=>{this.loading=!1}),this._histotyList()}updated(){const i=this.shadowRoot.querySelector(".headerUserName");fi(i);const r=this.shadowRoot.querySelector(".headerUserEmail");fi(r);const n=this.shadowRoot.querySelector(".userName");fi(n);const a=this.shadowRoot.querySelector(".userEmail");fi(a)}showTips(){var i,r,n,a,o,s,A,l;switch(this.user_info.type){case"free":return((i=this.time_info)==null?void 0:i.total_time)-((r=this.time_info)==null?void 0:r.used_time)>0?O`You only have ${gr(((n=this.time_info)==null?void 0:n.total_time)-((a=this.time_info)==null?void 0:a.used_time))} left for free video duration. <a @click=${this.openPricingA}>Upgrade</a> now to get more!`:O`Your free video duration runs out. <a @click=${this.openPricingA}>Upgrade</a> now to get more!`;case"vip":return((o=this.time_info)==null?void 0:o.total_time)-((s=this.time_info)==null?void 0:s.used_time)>0?O`You only have ${gr(((A=this.time_info)==null?void 0:A.total_time)-((l=this.time_info)==null?void 0:l.used_time))} video duration left for this month. Please <a @click=${this.openVipA}>upgrade</a> to get more.`:O`Your video duration for this month runs out. Please <a @click=${this.openVipA}>upgrade</a> to get more.`;case"vip_expired":return O`Your Premium membership expired, please <a @click=${this.openPricingA}>renew</a> here.`}}importPPT(){this.renderRoot.getElementById("create-dialog").importPPT()}async getProductList(){try{const i=await ct({url:"/ai/product/product-list",type:"POST"});localStorage.setItem("product_list",JSON.stringify(i.data))}catch{}}async _setInitalValue(){const i=this.renderRoot.querySelector(".form");for(const r in this.user_info)P(i).find(`input[name=${r}]`).val(this.user_info[r]||"")}_openSupport(){P(this.renderRoot.querySelector(".page-header-user-box")).slideUp("fast"),window.open("https://www.vidnoz.com/requests.html")}async _openUploadHead(){P(this.renderRoot.querySelector("#headInput")).val(""),P(this.renderRoot.querySelector("#headInput")).trigger("click")}async _uploadHead(i){const r=i.target.files;if(await Lh(r,".jpg|.jpeg|.png|.gif|.heic",5,!1))try{const a=new FormData;a.append("file",r[0]),a.append("type","head_portrait");let o="";this.loading=!0;const s=await Dr({url:"/file-upload",type:"post",data:a});s.code===200?o=s.data.url:(pi({isCancel:"false",iconType:"hint",content:`Failed to upload ${r[0].name}. Please try again later.`}),this.loading=!1);const A=new FormData;A.append("head_portrait_url",o),(await Dr({url:"/api/user/set-head-portrait",type:"post",data:A})).code===200&&await this._getUserInfo()}catch{pi({isCancel:"false",iconType:"hint",content:`Failed to upload ${r[0].name}. Please try again later.`}),this.loading=!1}}async _resetHead(){this.loading=!0;try{const i=new FormData;i.append("head_portrait_url",""),(await Dr({url:"/api/user/set-head-portrait",type:"post",data:i})).code===200&&await this._getUserInfo(),this.loading=!1}catch{this.loading=!1}}_createClick(){this.renderRoot.getElementById("create-dialog")._open()}_togglePerson(){P(this.renderRoot.querySelector(".page-header-user-box")).slideToggle("fast")}_open(i,r){this.Dialog.value.style.display="block",P(this.renderRoot.querySelector(".page-header-user-box")).slideUp("fast"),P(this.renderRoot.querySelector(".tabs")).find("li").eq(r).addClass("active").siblings().removeClass("active"),P(this.renderRoot.querySelectorAll(".tabs-content")).eq(r).css("display","block").siblings(".tabs-content").css("display","none")}_close(){this.Dialog.value.style.display="none";const i=this.renderRoot.querySelector(".dialog-box");P(i).find("#form .form-control input").removeClass("error").next().hide(),this._setInitalValue()}_checkTab(i,r){P(i.target).addClass("active").siblings().removeClass("active"),P(this.renderRoot.querySelectorAll(".tabs-content")).eq(r).css("display","block").siblings(".tabs-content").css("display","none")}_showSettings(i){P(i.target).toggleClass("settings-active").siblings("ul").slideToggle("fast"),lo(this.renderRoot,this.renderRoot.querySelector(".settings-more"),"","mouseup",()=>P(this.renderRoot.querySelector(".show-settings")).removeClass("settings-active").siblings(".more-settings").slideUp("fast"))}async _getUserInfo(){try{const i=await ct({url:"/api/user/get-profile",type:"post"});if(i.code===200){this.user_info=i.data,this.dispatchEvent(new CustomEvent("refeshUserInfo"));const r=JSON.parse(localStorage.getItem("user_info"));localStorage.setItem("user_info",JSON.stringify({...r,...i.data}));const n={id:i.data.id,email:i.data.email,first_name:i.data.first_name,last_name:i.data.last_name,head_portrait:i.data.head_portrait,usertype:i.data.type};Mh("user_info",JSON.stringify(n),30),Rh({id:i.data.id,email:i.data.email})}}catch{}}async _getTimeInfo(){var i,r;try{const n=await ct({url:"/api/user/info",type:"post"});if(n.code===200){this.time_info=(i=n.data)==null?void 0:i.ai_credit,this.time_info.ai_free_time=(r=n.data)==null?void 0:r.ai_free_time;const a=JSON.parse(localStorage.getItem("user_info"));localStorage.setItem("user_info",JSON.stringify({...a,...n.data}))}}catch{}}async _histotyList(){try{const i=await ct({url:`/ai/product/order-list?t=${new Date().getTime()}`,type:"GET"});i.code===200&&(this.historyList=i.data||[])}catch{}}_openChangePwd(){P(this.renderRoot.querySelector(".show-settings")).toggleClass("settings-active").siblings("ul").slideToggle("fast"),this.openChangePwd=!0,this.renderRoot.querySelector("change-password").setAttribute("open",!0)}_inputBlur(){this.beforeSave()}_inputChange(i){P(i.target).removeClass("error").next().hide()}beforeSave(){const i={};P(this.renderRoot.querySelector("#form")).serializeArray().forEach(a=>{i[a.name]=a.value});let n=!0;for(const a in i)["first_name","last_name"].includes(a)&&!i[a]&&(P(this.renderRoot.querySelector(`#${a}`)).addClass("error").next().show(),P(this.renderRoot.querySelector(".save")).attr("disabled",!0),n=!1),!["first_name","last_name"].includes(a)&&i[a]&&(i[a]=i[a].trim(),i[a].startsWith("http://")||i[a].startsWith("https://")||(P(this.renderRoot.querySelector(`#${a}`)).addClass("error").next().show(),P(this.renderRoot.querySelector(".save")).attr("disabled",!0),n=!1));if(n)return P(this.renderRoot.querySelector(".save")).attr("disabled",!1),i}async _submit(i){i.preventDefault();const r=this.beforeSave();if(r){this.saveLoading=!0,P(this.renderRoot.querySelector(".loading-mask")).show();try{const n=await ct({url:"/api/user/set-profile",type:"post",data:r});this.saveLoading=!1,P(this.renderRoot.querySelector(".loading-mask")).hide(),n.code===200?(co({text:"Updated successfully!"}),this._getUserInfo()):co({text:"Save failed. Please try again later.",type:"error"})}catch{this.saveLoading=!1,P(this.renderRoot.querySelector(".loading-mask")).hide(),co({text:"Save failed. Please try again later.",type:"error"})}}}deleteMyAccount(){const i=this.user_info.type==="vip"?"What’s more, this will not end your subscription or payments and you will continue to be charged. If you want to disable this service, please cancel your subscription.":"";pi({titleText:"Delete account?",contentList:JSON.stringify(["All the videos you created will be permanently erased. Videos will not appear in any places where they are embedded or posted, and anyone you previously shared the link with will not be able to access your content.",i]),submitType:"delete",isCancel:"true",submitText:"Delete my account"});const r=document.querySelector("confirm-dialog");r.addEventListener("submit",async()=>{try{(await ct({url:"/api/user/delete",type:"POST"})).code===200&&so()}catch{r.cnacelFun(),pi({submitType:"ok",isCancel:"fasle",iconType:"hint",content:"Failed to delete your account. Please try again later."})}})}openPricingA(){this._close(),P(this.renderRoot.querySelector(".page-header-user-box")).slideUp("fast"),qA({isFree:"true",showTitle:"Vidnoz AI Premium for Everything You Need",pricingType:"pricingA"})}openVipA(){this._close(),P(this.renderRoot.querySelector(".page-header-user-box")).slideUp("fast"),qA({isFree:"false",showTitle:"Switch Your Plan to Fit Perfectly",pricingType:"vipA"})}}M(Xo,"properties",{username:"",user_info:{state:!0},loading:{state:!0},openChangePwd:{state:!0},saveLoading:{state:!0},time_info:{state:!0},historyList:{state:!0},pageName:"",pageNameClassName:"",showBottomBorder:""}),M(Xo,"styles",[Zh,_e]);class Go extends fe{constructor(){super();M(this,"pageNavigat",ge());this.background="#f4f8ff",this.color="#2c71ff",this.title="-",this.text="-"}render(){return O`
      <div id="page-navigat-position">
        <div ${be(this.pageNavigat)} id="page-navigat">
          <div class="menu-collapse flex-item-center flex-center">
            <object
              id="collapse-icon"
              type="image/svg+xml"
              data="/image/svg/ico_return.svg"
            ></object>
          </div>
          <div class="page-navigat-logo  flex-item-center">
            <div class="logo-img">
              <img src="/image/svg/logo.svg" />
            </div>
          </div>
          <div class="page-navigat-menu">
            <ul>
              <li data-url="/" data-name="home">
                <div class="page-navigat-menu_icon">
                  <object type="image/svg+xml" data="/image/svg/home.svg"></object>
                </div>
                <div class="page-navigat-menu_text">Home</div>
              </li>
              <li data-url="/template/index.html" data-name="template">
                <div class="page-navigat-menu_icon">
                  <object type="image/svg+xml" data="/image/svg/template.svg"></object>
                </div>
                <div class="page-navigat-menu_text">Templates</div>
              </li>
              <li data-url="/avatar/index.html" data-name="avatar">
                <div class="page-navigat-menu_icon">
                  <object type="image/svg+xml" data="/image/svg/avatar.svg"></object>
                </div>
                <div class="page-navigat-menu_text">Avatars</div>
              </li>
              <li data-url="/video/index.html" data-name="video">
                <div class="page-navigat-menu_icon">
                  <object type="image/svg+xml" data="/image/svg/video.svg"></object>
                </div>
                <div class="page-navigat-menu_text">My Creations</div>
              </li>
              <li data-url="/asset/index.html" data-name="asset">
                <div class="page-navigat-menu_icon">
                  <object type="image/svg+xml" data="/image/svg/asset.svg"></object>
                </div>
                <div class="page-navigat-menu_text">Assets</div>
              </li>
            </ul>
          </div>
          <div class="page-navigat-feedback flex-item-center flex-center" @click=${this.linkToFeedback}>
            <div class="page-navigat-feedback_icon">
              <object
                id="feedback-icon"
                type="image/svg+xml"
                data="/image/svg/feedback.svg"
              ></object>
            </div>
            <div class="page-navigat-feedback_text">Feedback</div>
          </div>
        </div>
      </div>
    `}firstUpdated(){this.pageMain=document.querySelector("#page-main"),this.templateHeader=this.pageMain.querySelector("#template-library"),this.avatarHeader=this.pageMain.querySelector("#avatar-library"),this.videoHeader=this.pageMain.querySelector("#video-library"),this.assetHeader=this.pageMain.querySelector("#asset-library"),this.pageNavigatEl=this.pageNavigat.value,this.collapse=this.pageNavigatEl.querySelector(".menu-collapse"),this.menuItem=this.pageNavigatEl.querySelectorAll("li"),this.menuText=this.pageNavigatEl.querySelectorAll(".page-navigat-menu_text"),this.logoBox=this.pageNavigatEl.querySelector(".logo-img"),this.feedbackButton=this.pageNavigatEl.querySelector(".page-navigat-feedback"),this.feedbackIcon=this.pageNavigatEl.querySelector("#feedback-icon"),this.feedbackIcon.onload=()=>{const o=this.feedbackIcon.contentDocument.querySelector("#feedback");this.feedbackButton.onmouseenter=()=>{o.setAttribute("color","#ffffff")},this.feedbackButton.onmouseleave=()=>{o.setAttribute("color","#564afe")}},this.collapse.style.visibility="hidden",Ii("menuCollapse")?(this.pageMain.style.transition="none",this.pageNavigatEl.style.transition="none",this.logoBox.style.transition="none",this.templateHeader&&(this.templateHeader.style.transition="none"),this.avatarHeader&&(this.avatarHeader.style.transition="none"),this.videoHeader&&(this.videoHeader.style.transition="none"),this.assetHeader&&(this.assetHeader.style.transition="none"),setTimeout(()=>{this.pageMain.style.transition="all 0.2s",this.pageNavigatEl.style.transition="all 0.2s",this.logoBox.style.transition="all 0.2s",this.templateHeader&&(this.templateHeader.style.transition="all 0.2s"),this.videoHeader&&(this.videoHeader.style.transition="all 0.2s"),this.avatarHeader&&(this.avatarHeader.style.transition="all 0.2s"),this.assetHeader&&(this.assetHeader.style.transition="all 0.2s")},200),this._collapseMenu(Ii("menuCollapse"))):Ur("menuCollapse","");const i=window.location.pathname,n={"/":"home","/index.html":"home","/index":"home","/template/index.html":"template","/avatar/index.html":"avatar","/video/index.html":"video","/video/share/index.html":"video","/asset/index.html":"asset"}[i];Ur("currentMenu",n);const a=Array.from(this.menuItem).filter(o=>o.dataset.name===Ii("currentMenu"))[0];this._setCurrentMenuItem(a),this.pageNavigatEl.onmouseenter=()=>{this.collapse.style.visibility=""},this.pageNavigatEl.onmouseleave=()=>{Ii("menuCollapse")||(this.collapse.style.visibility="hidden")},this.collapse.onclick=()=>{Ii("menuCollapse")?Ur("menuCollapse",""):Ur("menuCollapse",!0),this._collapseMenu(Ii("menuCollapse"),"hand")},this.menuItem.forEach(o=>{o.onclick=()=>{document.location.replace(o.dataset.url)}}),window.onresize=()=>{}}linkToFeedback(){window.open("https://www.vidnoz.com/requests.html","_blank")}_setCurrentMenuItem(i){if(typeof i>"u"||!i)return;i.style.background="rgba(140, 140, 151, 0.15)",i.querySelector("object").setAttribute("data",`/image/svg/${i.dataset.name}_select.svg`)}_collapseMenu(i,r){if(i){if(this.pageNavigatEl.style.width="80px",this.pageMain.style.width="calc(100% - 80px)",this.logoBox.style.width="32px",this.collapse.style.transform="rotateZ(180deg)",this.collapse.style.right="-24px",this.collapse.style.visibility="",this.feedbackButton.style.width="44px",this.feedbackButton.querySelector(".page-navigat-feedback_text").style.width="0",this.feedbackButton.querySelector(".page-navigat-feedback_text").style.visibility="hidden",this.menuText.forEach(n=>{n.style.width="0",n.style.visibility="hidden"}),this.menuItem.forEach(n=>{n.style.width="40px",n.style.paddingLeft="0",n.style.marginLeft="12px",n.style.justifyContent="center"}),r==="hand"){const n=document.querySelector("#page-header").pageHeader.value;n.style.width="calc(100% - 80px)"}}else if(this.collapse.style.transform="",this.collapse.style.right="0",this.logoBox.style.width="120px",this.pageNavigatEl.style.width="240px",this.pageMain.style.width="calc(100% - 240px)",this.menuText.forEach(n=>{n.style.width="auto",n.style.visibility=""}),this.menuItem.forEach(n=>{n.style.width="",n.style.paddingLeft="14px",n.style.marginLeft="0",n.style.justifyContent="flex-start"}),this.feedbackButton.style.width="208px",this.feedbackButton.querySelector(".page-navigat-feedback_text").style.width="auto",this.feedbackButton.querySelector(".page-navigat-feedback_text").style.visibility="",r==="hand"){const n=document.querySelector("#page-header").pageHeader.value;n.style.width="calc(100% - 240px)"}}}M(Go,"properties",{background:"",color:"",title:"",text:""}),M(Go,"styles",[Be`
      #page-navigat-position {
        position: fixed;
        left: 0;
        top: 0;
        z-index: 120;
      }
      #page-navigat {
        position: relative;
        height: 100vh;
        width: 15em;
        min-width: 5em;
        box-sizing: border-box;
        transition: width 0.2s;
        z-index: 2;
        background: rgba(246, 247, 249, 1) 0% 0% no-repeat padding-box;
      }
      .menu-collapse {
        position: absolute;
        top: 24px;
        right: 0;
        margin: auto;
        width: 24px;
        height: 40px;
        background: rgba(30, 30, 46, 0.1) 0% 0% no-repeat padding-box;
        border-radius: 12px 0 0 12px;
        display:none !important
      }
      .menu-collapse:hover {
        background: rgba(30, 30, 46, 0.15) 0% 0% no-repeat padding-box;
        cursor: pointer;
      }
      .page-navigat-logo {
        height: 5.5em;
        border-bottom: 1px solid rgba(140, 140, 151, 0.1);
        margin: 0 1em;
      }
      .logo-img {
        margin-left: 0.5em;
        transition: width 0.2s;
        overflow: hidden;
      }
      .page-navigat-menu ul {
        padding: 0 0.5em;
      }
      .page-navigat-menu ul li {
        display: flex;
        align-items: center;
        margin-top: 16px;
        height: 40px;
        line-height: 40px;
        border-radius: 6px;
        font-size: 14px;
        padding-left: 14px;
        color: rgba(30, 30, 46, 1);
      }
      .page-navigat-menu ul li:hover {
        transition: background 0.2s ease;
        background: rgba(140, 140, 151, 0.15) 0% 0% no-repeat padding-box;
        cursor: pointer;
      }
      .page-navigat-menu_icon {
        margin-right:8px;
        margin-left:8px;
        display:flex;
        align-items:center;
      }
      .page-navigat-menu_icon object {
        width: 20px;
        height: 20px;
      }
      .page-navigat-menu_tip {
        position: absolute;
        right: 0;
        height: 1.625em;
        line-height: 2.5em;
        border-radius: 4px 0 0 4px;
        width: 0.375em;
        background: #564afe;
      }
      .page-navigat-feedback {
        width: 208px;
        box-sizing:border-box;
        padding:0 6px;
        height: 44px;
        position: absolute;
        left:0;
        right:0;
        bottom: 32px;
        margin:auto;
        background: rgba(30, 30, 46, 0.1) 0% 0% no-repeat padding-box;
        border-radius: 6px;
        transition: width 0.2s;
        color: rgba(30, 30, 46, 1);
        font-size:14px;
      }
      .page-navigat-feedback a{
        position:absolute;
        width:100%;
        height:100%;
        display:block;
        z-index:5; 
        left:0;
        top:0;
      }
      .page-navigat-feedback:hover {
        background: rgba(30, 30, 46, 0.2) 0% 0% no-repeat padding-box;
        cursor:pointer;
      }
      .page-navigat-feedback_icon {
        margin: 0 8px;
      }
      .page-navigat-feedback_icon #feedback-icon {
        width: 24px;
        height: 24px;
      }
      .page-navigat-feedback_text {
        color: rgba(30, 30, 46, 1);
      }
      .page-navigat-version{
        background: #A6A6B1;
        padding:3px 7px;
        color: #FFFFFF;
        font-size:12px;
        line-height:16px;
        border-radius:4px;
        margin-top:2px;
      }
    `,_e]);class Yo extends fe{constructor(){super(),this.name="-",this.text="-",this.linkto="",this.mode="hide"}render(){return O`
      <div class="home-quick-navigation_item flex-item-center  card ${this.mode==="show"?"mode":""}" style="width:${this.width}px" @click="${this.linkToHref}">
        <div class=" flex-item-center flex-start">
          <div class="item-icon">
            <img src=${this.icon} />
          </div>
          <div class="item-text flex-column flex-center">
            <div class="flex-item-center">
              <div class="item-text-title">${this.name}</div>
              <div class="item-select">
                <img src="/image/svg/create_arrow5.svg" />
              </div>
            </div>
            <div class="item-text-content">${this.text}</div>
          </div>
          <div class="horizontal flex-column flex-center flex-item-center">
              <img src="/image/svg/blank_landscape.svg" width="40" height="40"/>
              <span class="item-screen-text">16:9</span>
          </div>
          <div class="vertical flex-column flex-center flex-item-center" @click="${this.openEdit}">
              <img src="/image/svg/blank_portrait.svg" width="40" height="40"/>
              <span class="item-screen-text">9:16</span>
          </div>
        </div>
      </div>
    `}linkToHref(){this.linkto!==""&&window.open(this.linkto,"_self")}openEdit(e){e.stopPropagation(),window.open("/edit/?from=blank&mode=portrait","_self")}}M(Yo,"properties",{icon:"",name:"",text:"",width:"",linkto:"",mode:""}),M(Yo,"styles",[_e,Be`
      .home-quick-navigation_item {
        position: relative;
        box-sizing: border-box;
        height: 110px;
        padding: 0 32px;
        background: rgba(139, 61, 255, 0.05) 0% 0% no-repeat padding-box;
        border-radius: 10px;
      }
      .home-quick-navigation_item >div{
        width:100%;
      }
      .home-quick-navigation_item .item-text {
        color: rgba(139, 61, 255, 1);
        margin-left: 30px;
      }
      .home-quick-navigation_item .item-text .item-text-title {
        font-size: 15px;
        line-height:20px;
        font-weight: normal
      }
      .home-quick-navigation_item .item-text .item-text-content {
        font-size: 12px;
        line-height:16px;
        opacity:0.8;
        margin-top:6px;
      }
      .home-quick-navigation_item .item-select {
        opacity: 0;
        transition: all 0.3s;
      }
      .home-quick-navigation_item:hover {
        cursor: pointer;
        background: rgba(139, 61, 255, 0.1) 0% 0% no-repeat padding-box;
      }
      .home-quick-navigation_item:hover .item-select {
        margin-left: 1em;
        opacity: 1;
      }
      .item-icon .icon-object {
        width: 58px;
        height: 58px;
      }
      .item-select .select-object {
        width: 22px;
        height: 22px;
      }
      .horizontal{
        margin-left:auto;
        opacity:0;
        transition: opacity 0.3s;
        width:72px;
        height:72px;
        pointer-events:none;
      }
      .vertical{
        opacity:0;
        transition: opacity 0.3s;
        width:72px;
        height:72px;
        pointer-events:none;
      }
      .vertical::after,.horizontal::after {
        content: "";
        display: block;
        opacity:0;
        position:absolute;
        left:50%;
        top:50%;
        transform:translate(-50%,-50%);
        background:rgba(139, 61, 255, 0.1);
        border-radius:8px;
        transition: opacity 0.3s;
        width:100%;
        height:100%;
      }
      .item-screen-text{
        font: normal normal normal 13px/18px Roboto;
        color: #8B3DFF;
        padding-top:2px;
      }
      @media screen and (max-width: 1100px) {
        .home-quick-navigation_item{
          padding: 0px 20px;
        }
      }
      .mode:hover .horizontal,.mode:hover .vertical{
        opacity:1;
        position:relative;
        pointer-events:auto;
      }
       .horizontal:hover::after,  .vertical:hover::after{
        opacity:1;
      }
    `]);class Vo extends fe{constructor(){super(),this.tempName="-",this.background="",this.templateid="",this.previewvideo="",this.minHeight="168px",this.categoriesid=9,this.hasUse=!1,this.smaillTitle=!1}render(){return O`
      <div class="template_item" data-id="${this.templateid}" @click="${this.openPreview}">
        <div class="template_item_typemiddle">
          <div class="item-loading" @mousemove="${e=>{e.stopPropagation()}}"></div>
          <div class="item-isnew" style="visibility:${this.isNew==="true"?"":"hidden"}">
            <img src="/image/svg/new_tag.svg" />
          </div>
          <div class="item-background" style="width:${this.width};height:${this.height};min-height:${this.minHeight}">
            <img src="${this.background}" />
            <div class="item-mask"></div>
          </div>
          ${this.hasUse?O`<div class="item-usetemp" @click="${this.useTemplate}">
                          <div class="item-usetemp_text">Use this template</div>
                          <div class="item-usetemp_circle  flex-item-center">
                            <div class="item-usetemp_icon">
                              <img src="/image/svg/template_ico_use.svg" />
                            </div>
                          </div>
                        </div>`:O`
            <div class="item-preview">
              <img src="/image/svg/template_play.svg" width="40" height="40">
              <p>Preview Template</p>
            </div>
          `}
        </div>
        <div class="item-title ${this.smallTitle?"item-title-small":""}"><span class="item-tempname" @mousemove = "${this.overShowTitle}">${this.tempName}</span><div class="item-loading caption" @mousemove="${e=>{e.stopPropagation()}}"></div></div>
        
        
      </div>
    `}firstUpdated(){this.shadowRoot.querySelector(".item-background img").addEventListener("load",()=>{this.shadowRoot.querySelector(".item-loading").style.display="none",this.shadowRoot.querySelector(".item-title .item-loading").style.display="none",this.shadowRoot.querySelector(".item-title .item-tempname").style.display="block"})}openPreview(){this.dispatchEvent(new CustomEvent("openpreview",{detail:{value:this.templateid,categoriesid:this.categoriesid,name:this.tempName,previewvideo:this.previewvideo}}))}overShowTitle(){fi(this.shadowRoot.querySelector(".item-tempname"))}useTemplate(e){e.stopPropagation(),e.preventDefault(),window.open(`/edit/index.html?from=template&id=${this.templateid}`,"_self")}}M(Vo,"properties",{tempName:"",background:"",isNew:"false",width:"",height:"",minHeight:"",templateid:"",categoriesid:{type:Number,value:0},previewvideo:"",hasUse:!1,smallTitle:!1}),M(Vo,"styles",[Be`
      .template_item {
        position: relative;
        overflow: hidden;
      }
      .template_item .item-background {
        width: 298px;
        height: 168px;
        min-height: 166px;
        overflow: hidden;
        border-radius: 6px;
        position:relative;
        border: 1px solid rgba(86, 74, 254, 0.1);
        box-sizing:border-box;
      }
      .template_item .item-background img {
        width: 100%;
        height:100%;
        object-fit:fill;
      }
      .template_item .item-title {
        min-height:18px;
        margin-top: 15px;
        text-align: center;
        font-size:14px;
        position:relative;
        color: rgba(30, 30, 46, 1);
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
      }
      .template_item .item-title span{
        display:none;
      }
      .template_item .item-title-small{
        margin-top: 8px;
        min-height:18px;
        color: #676778;
      }
      .template_item .item-mask {
        transition: all 0.2s;
        position: absolute;
        border-radius: 6px;
        top: -1px;
        left:-1px;
        width: calc(100% + 2px);
        height: calc(100% + 2px);
        background-color: rgba(0, 0, 0, 0.4);
        opacity: 0;
      }
      .template_item .item-usetemp {
        transition: all 0.2s;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        min-width: 150px;
        width:fit-content;
        box-sizing:border-box;
        height: 32px;
        line-height: 32px;
        border-radius: 32px;
        padding:0 15px 0 0;
        background-color: rgba(139, 61, 255, 0.4);
        opacity: 0;
        font-size:12px;
        color:#fff;
        z-index:5;
      }
      .template_item .item-preview{
        position:absolute;
        left:0;
        right:0; 
        top:0;
        bottom:0;
        margin:auto;
        display:flex;
        z-index:5;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        opacity:0;
      }
      .template_item .item-preview p{
        font-size:13px;
        line-height:18px;
        color:#fff;
        text-shadow: 0px 1px 2px #00000033;
        margin-top:6px;
      }
      .template_item_typemiddle:hover .item-preview {
        opacity:1
      }
      .template_item .item-usetemp .item-usetemp_circle {
        position: absolute;
        top: 0;
        left: 0;
        height: 32px;
        width: 32px;
        background-color: rgba(139, 61, 255, 1);
        border-radius: 32px;
        transition: width 0.2s;
      }
      .template_item .item-usetemp .item-usetemp_circle .item-usetemp_icon {
        margin-left: 0.5em;
        display: flex;
        align-items:center;
      }
      .template_item .item-usetemp .item-usetemp_text {
        padding-left:36px;
        font-size: 12px;
        color: #ffffff;
        z-index:10;
        position:relative;
      }
      .template_item .item-usetemp:hover .item-usetemp_circle {
        width: 100%;
      }

      .template_item .item-isnew {
        position: absolute;
        left: 0;
        top: 0;
        z-index:3
      }
      .template_item_typemiddle:hover {
        cursor: pointer;
      }
      .template_item_typemiddle:hover .item-mask {
        opacity: 1;
      }
      .template_item_typemiddle:hover .item-usetemp {
        bottom: 12px;
        opacity: 1;
      }
      .small-loading {
        position: absolute;  
        height: 168px !important;
        border-radius: 6px;
        top:0;
        left:0;
        box-sizing: border-box;
        border:1px solid rgba(86, 74, 254, 0.1);
        z-index:6
      }
      .template_item_typemiddle{
        position:relative;
        overflow:hidden;
        border-radius:6px;
      }

    `,_e]);class Wo extends fe{constructor(){super(),this.text="-",this.type=""}render(){return O`
      <div class="see-all-more flex-item-center" data-type="${this.type}" @click=${this.jumpClick}>
        ${this.text}
        <div class="more-arrow">
        <img src="/image/img/more-arrow.svg" />
        </div>
      </div>
    `}jumpClick(){this.type&&this.dispatchEvent(new CustomEvent("jumpClick",{detail:{value:this.type}}))}}M(Wo,"properties",{text:"",type:""}),M(Wo,"styles",[Be`
      .see-all-more {
        position: relative;
        font-size: 14px;
        color: #8C8C97;
        transition: all 0.2s;
      }
      .more-arrow {
        position: absolute;
        right: 0;
        opacity: 0;
        transition: all 0.2s;
      }
      .see-all-more:hover {
        padding-right: 32px;
        cursor: pointer;
      }
      .see-all-more:hover .more-arrow {
        opacity: 1;
      }
    `,_e]);class Jo extends fe{constructor(){super(),this.avatarName="-",this.background="",this.close="hide",this.pictureUrl="",this.view="1",this.boxType="pro",this.dpi="show"}render(){return O`
      <div class="avatar-item ${this.dpi==="show"?"dpi":""}" @click="${this.previewFun}">
        <div class="item-background card">
          <img src="${this.pictureUrl}" crossorigin="anonymous" class="${this.boxType==="pro"&&this.view!=="2"&&this.view!=="3"?"pro":""} ${this.view==="2"?"circle":""}">
        </div>
        <div class="item-title item-title-name" style="display:none;" @mouseover='${e=>{this.titleOver(e)}}'>${this.avatarName}</div>
        <div class="item-title item-loading caption"></div>
        <div class="item-mask card">
          <img src="/image/svg/template_play.svg" width="40" height="40" alt="">
          ${this.boxType==="pro"?"Preview Avatar":"Preview Talking Photo"}
        </div>
        <!-- <div class="item-usetemp" @click='${e=>{this.gotoEdit(e)}}'>
          <div class="item-usetemp_text">Use this avatar</div>
          <div class="item-usetemp_circle  flex-item-center">
            <div class="item-usetemp_icon">
              <img src="/image/svg/ico_use_avatar.svg" />
            </div>
          </div>
        </div> -->
        <div class="close-button" @click="${e=>{this.deleteFun(e)}}" style="display:${this.close==="show"?"block":"none"}"></div>
        <div class="item-loading" @mousemove="${e=>{e.stopPropagation()}}"></div>
      </div>
    `}firstUpdated(){this.shadowRoot.querySelector(".item-background img").addEventListener("load",()=>{this.shadowRoot.querySelectorAll(".item-loading").forEach(i=>{i.style.display="none"}),this.shadowRoot.querySelector(".item-title-name").style.display="block"})}titleOver(e){fi(e.target)}deleteFun(e){e.stopPropagation();const i=document.createElement("confirm-dialog");i.setAttribute("titleText"," Delete avatar"),i.setAttribute("isCancel","true"),i.setAttribute("content","The avatar cannot be restored after deleting."),i.setAttribute("submitType","delete"),document.body.appendChild(i),i.addEventListener("submit",()=>{ct({url:"/ai/avatar/user-avatar-del",type:"post",data:{id:this.id}}).then(r=>{r.code===200?(document.body.insertAdjacentHTML("beforeend",'<bottom-message text="Deleted successfully!" ></bottom-message>'),this.dispatchEvent(new CustomEvent("deletesuccess"))):pi({titleText:"Failed to delete the avatar. Please try again later.",isCancel:"false",submitType:"ok",iconType:"tips"})}).catch(()=>{pi({titleText:"Failed to delete the avatar. Please try again later.",isCancel:"false",submitType:"ok",iconType:"tips"})}).finally(()=>{i.closeConfirm()})})}gotoEdit(e){e.stopPropagation(),this.dispatchEvent(new CustomEvent("avatartoedit",{detail:{id:this.id,type:this.type}}))}previewFun(){this.dispatchEvent(new CustomEvent("preview",{detail:{id:this.id,type:this.type}}))}}M(Jo,"properties",{id:"",avatarName:"",background:"",close:"",pictureUrl:"",urlkey:"",type:"",view:"",boxType:"",dpi:""}),M(Jo,"styles",[Be`
      .avatar-item {
        position: relative;
        width: 18.625em;
        height: 12.5em;
        overflow: hidden;
      }
      .avatar-item .item-background {
        width: 100%;
        height: 10.5em;
        background-color: #f9f9fa;
        border: 1px solid rgba(86, 74, 254, 0.1);
        box-sizing: border-box;
        display:flex;
        justify-content: center;
        align-items: center;
        overflow:hidden;
      }
      @media (min-resolution: 120dpi) {
        /* 应用在DPI大于等于125时的样式 */
        .avatar-item.dpi {
          width: 282px;
          height: 12em;
        }
        .avatar-item.dpi .item-background {
          height: 10em;
        }
      }
      .avatar-item .item-background img{
        height:auto;
        width:auto;
        max-width:100%;
        max-height:100%;
        object-fit: contain;
        vertical-align: middle;
      }
      .avatar-item .item-background img.pro{
        transform: scale(1.5) translateY(20px);
      }
      .avatar-item .item-background img.circle{
        border-radius:50%;
        width:140px;
        height:140px;
        border:1px solid rgba(140, 140, 151, 0.2);
      }
      .avatar-item .item-title {
        margin-top: 13px;
        text-align: center;
        font: normal normal normal 14px/19px Roboto;
        color: #1E1E2E;
        white-space: nowrap;
        overflow: hidden;
        text-overflow:ellipsis;
      }
      .avatar-item .item-title.item-loading {
        
        height:20px !important;
        box-sizing:border-box;
        position:relative !important;
      }
      .avatar-item .item-mask {
        transition: all 0.2s;
        position: absolute;
        top: 0;
        width: 100%;
        height: 10.5em;
        height: 84%;
        background-color: rgba(30, 30, 46, 0.4);
        opacity: 0;
        display:flex;
        align-items:center;
        justify-content:center;
        flex-direction:column;
        gap:6px;
        font: normal normal normal 14px/19px Roboto;
        color: #FFFFFF;
        text-shadow: 0px 1px 2px #00000033;
      }
      .avatar-item .item-usetemp {
        transition: all 0.2s;
        position: absolute;
        bottom: 2em;
        left: 50%;
        transform:translateX(-50%);
        height: 32px;
        line-height: 32px;
        border-radius: 32px;
        background-color: rgba(139, 61, 255, 0.4);
        opacity: 0;
        min-width:150px;
        max-width:100%;
      }
      .avatar-item .item-usetemp .item-usetemp_circle {
        position: absolute;
        top: 0;
        left: 0;
        height: 32px;
        width: 32px;
        background-color: rgba(139, 61, 255, 1);
        border-radius: 32px;
        transition: width 0.2s;
      }
      .avatar-item .item-usetemp .item-usetemp_circle .item-usetemp_icon {
        margin-left: 0.5em;
      }
      .avatar-item .item-usetemp .item-usetemp_text {
        position:relative;
        font-size: 0.75em;
        color: #ffffff;
        z-index: 2;
        pointer-events: none;
        white-space:nowrap;
        text-align:center;
        padding:0 35.5px
      }
      .avatar-item .item-usetemp:hover .item-usetemp_circle {
        width: 100%;
      }
      .avatar-item:hover {
        cursor: pointer;
      }
      .avatar-item:hover .item-mask {
        opacity: 1;
      }
      .avatar-item:hover .item-usetemp {
        bottom: 3em;
        opacity: 1;
      }
      .close-button {
        position: absolute;
        right: 7px;
        top: 7px;
        width: 32px;
        height: 32px;
        border-radius: 8px;
        background-position:center center;
        background-repeat:no-repeat;
        background-size: 22px 22px ;
      }
      .close-button:hover {
        background-color: rgba(30, 30, 46, 0.5);
      }
      .avatar-item:hover .close-button {
        background-image:url('/image/img/delete.png');
      }
      .item-loading {
        position: absolute;  
        height: 168px !important;
        border-radius: 6px;
        top:0;
        left:0;
        box-sizing: border-box;
        border:1px solid rgba(86, 74, 254, 0.1);
        z-index: 1 !important;
      }
      .card {
        border-radius: 6px !important;
      }
    `,_e]);class jo extends fe{constructor(){super();M(this,"selectButton",ge());M(this,"handleMenu",ge());this.videoName="-",this.time="-",this.background="",this.timeTag="03:00",this.selected=!1,this.isOpen=!1}render(){return O`
      <div class="video-item card">
        <div class="item-background card"><img src="/temp/444.jpg" width="100%" height="100%"></div>
        <div class="item-timetag">${this.timeTag}</div>
        <div class="item-title">${this.videoName}</div>
        <div class="item-time">${this.time}</div>
        <div class="item-draft" style="display:${this.isDraft?"block":"none"}">draft</div>
        <div class="item-mask card"></div>
        <div class="handle-button" @click="${this._openHandle}">
          <div>...</div>
        </div>
        <div class="select-button flex-item-center flex-center" @click="${this._select}">
          <object
            type="image/svg+xml"
            data="/image/svg/ico_select.svg"
            style="visibility:${this.selected?"":"hidden"}"
          ></object>
        </div>
        <div class="handle flex-end">
          <div class="flex-between">
            <div class="handle-download flex-item-center flex-center">
              <object type="image/svg+xml" data="/image/svg/download.svg"></object>
            </div>
            <div class="handle-edit flex-item-center flex-center">
              <object type="image/svg+xml" data="/image/svg/edit.svg"></object>
            </div>
          </div>
        </div>
        <div ${be(this.handleMenu)} class="handle-menu">
          <ul>
            <li class="flex-item-center" @click="${this._publish}">
              <div class="menu-item-icon">
                <object type="image/svg+xml" data="/image/svg/publish.svg"></object>
              </div>
              <div class="menu-item-text">Publish</div>
            </li>
            <li class="flex-item-center" @click="${this._download}">
              <div class="menu-item-icon">
                <object type="image/svg+xml" data="/image/svg/download-1.svg"></object>
              </div>
              <div class="menu-item-text">Download</div>
            </li>
            <li class="flex-item-center" @click="${this._edit}">
              <div class="menu-item-icon">
                <object type="image/svg+xml" data="/image/svg/edit-1.svg"></object>
              </div>
              <div class="menu-item-text">Edit</div>
            </li>
            <li class="flex-item-center" @click="${this._duplicate}">
              <div class="menu-item-icon">
                <object type="image/svg+xml" data="/image/svg/duplicate.svg"></object>
              </div>
              <div class="menu-item-text">Duplicate</div>
            </li>
            <li class="flex-item-center" @click="${this._delete}">
              <div class="menu-item-icon">
                <object type="image/svg+xml" data="/image/svg/delete.svg"></object>
              </div>
              <div class="menu-item-text">Delete</div>
            </li>
          </ul>
        </div>
      </div>
    `}_select(){this.selected=!this.selected;const i=this.selectButton.value;this.selected?(i.style.background="#564afe",i.style.border="none"):(i.style.background="",i.style.border="1px solid #ffffff")}_openHandle(i){this.isOpen=!this.isOpen;const r=this.handleMenu.value,n=a=>{a.target!==this&&(this.isOpen=!1,r.style.display="none",document.removeEventListener("click",n))};this.isOpen?(r.style.display="block",i.x>1700&&(r.style.right="-30px"),document.addEventListener("click",n)):r.style.display="none"}_publish(){}_download(){}_edit(){}_duplicate(){}_delete(){}}M(jo,"properties",{timeTag:"",videoName:"",background:"",time:"",isDraft:!1,selected:!1,isOpen:!1}),M(jo,"styles",[Be`
      .video-item {
        position: relative;
        cursor: pointer;
      }
      .video-item .item-background {
        width: 100%;
        height: 10.5em;
        background-color: #ccc;
      }
      .video-item .item-timetag,
      .item-draft {
        position: absolute;
        font-size: 12px;
        bottom: 5em;
        left: 1em;
        width: 54px;
        height: 24px;
        line-height: 24px;
        background-color: rgba(0, 0, 0, 0.5);
        border-radius: 24px;
        color: #ffffff;
        text-align: center;
      }
      .video-item .item-draft {
        background: transparent linear-gradient(90deg, #8a8aff 0%, #bf75ff 100%) 0% 0% no-repeat
          padding-box;
      }
      .video-item .item-title {
        margin-top: 0.5em;
        text-align: center;
      }
      .video-item .item-time {
        text-align: center;
      }
      .video-item .item-mask {
        transition: all 0.2s;
        position: absolute;
        top: 0;
        width: 100%;
        height: 10.5em;
        background-color: rgba(0, 0, 0, 0.4);
        opacity: 0;
      }
      .video-item:hover .item-mask {
        opacity: 1;
      }
      .handle-button {
        position: absolute;
        right: 0.5em;
        top: 0.5em;
        width: 2em;
        height: 2em;
        line-height: 1.5em;
        border-radius: 0.65em;
        color: #ffffff;
        text-align: center;
        opacity: 0;
        transition: all 0.3s;
      }
      .handle-button:hover {
        background: rgba(0, 0, 0, 0.2);
      }
      .video-item:hover .handle-button {
        opacity: 1;
      }
      .select-button {
        position: absolute;
        box-sizing: border-box;
        left: 12px;
        top: 12px;
        width: 22px;
        height: 22px;
        line-height: 22px;
        border: 1px solid #ffffff;
        border-radius: 0.375em;
        color: #ffffff;
        text-align: center;
        opacity: 1;
        transition: all 0.3s;
      }
      .video-item:hover .select-button {
        opacity: 1;
      }
      .select-button:hover {
        background: rgba(255, 255, 255, 0.2);
      }
      .handle {
        position: absolute;
        bottom: 3.5em;
        width: 100%;
        box-sizing: border-box;
        padding: 0 1em;
        opacity: 0;
        color: #ffffff;
      }
      .handle-download,
      .handle-edit {
        width: 32px;
        height: 32px;
        border-radius: 8px;
        background: #1e1e2e80;
      }
      .handle-download:hover,
      .handle-edit:hover {
        background: #434256;
      }
      .handle-edit {
        margin-left: 0.5em;
      }
      .video-item:hover .handle {
        opacity: 1;
      }
      .handle-menu {
        position: absolute;
        top: 50px;
        right: -122px;
        width: 160px;
        box-sizing: border-box;
        background: #ffffff;
        box-shadow: 0px 3px 6px #8c8c9733;
        border-radius: 8px;
        padding: 4px;
        z-index: 1;
        display: none;
      }
      .handle-menu ul li {
        height: 36px;
        line-height: 36px;
        border-radius: 4px;
        transition: all 0.4s ease-in;
      }
      .handle-menu ul li:not(:last-child):hover {
        background: #dddbff;
        color: #564afe;
      }
      .handle-menu ul li:last-child:hover {
        background: #fecde6;
        color: #f90583;
      }
      .menu-item-icon {
        padding: 0 8px;
      }
    `,_e]);class Zo extends fe{constructor(){super(),this.assetName="",this.beforeName="",this.background="",this.tag="",this.type="img",this.format="",this.leftDistance="265",this.topDistance="50",this.showMore=!1,this.isSelected="false",this.size="",this.time="",this.urlKey=""}render(){return O`
      <div data-id="${this.id}" @click='${e=>{this.assetClick(e)}}'  class="video-item card ${this.type==="img"?"asset-img-section":this.type==="video"?"asset-vidoe-section":"asset-music-section"} ${this.isSelected==="true"?"on":""}">
        <div class="item-background card ${this.type==="music"?"music":""}">
          ${this.type!=="music"?O`<img crossorigin="anonymous" src="${this.pictureUrl}">`:O`<img  src="${this.pictureUrl}">`}
        </div>
        <div class="item-timetag"><span>${this.format}</span>${this.tag}</div>
        <input class="item-title" style='display:none;' @click="${e=>{e.stopPropagation(),this.hideMore()}}" @input="${e=>{this.nameChange(e)}}" @blur="${this.blurInput}" maxlength="100" type="text" @mouseover="${e=>{this.titleOver(e)}}" value="${this.assetName}"></input>
        <div class="item-loading item-title caption"></div>
        <div class="item-mask card" @mousedown="${e=>{this.clickRight(e)}}" @contextmenu="${e=>{this.clickRight(e)}}"></div>
        <div class="handle-button" title="More…" @click="${e=>{this.clickMore(e)}}"></div>
        <div class="select-button ${this.isSelected==="true"?"active":""}" @click="${this.selectItem}"></div>
        <div class="handle-menu" @contextmenu="${e=>{e.preventDefault()}}" style="left:${this.leftDistance}px;top:${this.topDistance}px;display:${this.showMore?"block":"none"}">
          <ul @click="${e=>{e.stopPropagation(),this.hideMore()}}">
            <li @click="${this.filePreview}">Preview</li>
            <li @click="${this.fileDownload}">Download</li>
            <li @click="${this.fileDelete}">Delete</li>
          </ul>
        </div>
        <div class="item-loading" @mousemove="${e=>{e.stopPropagation()}}"></div>
      </div>
    `}async firstUpdated(){this.shadowRoot.querySelector(".item-background img").addEventListener("load",()=>{this.shadowRoot.querySelectorAll(".item-loading").forEach(i=>{i.style.display="none"}),this.shadowRoot.querySelector("input").style.display="block"})}selectItem(e){e.stopPropagation(),this.hideMore(),this.isSelected==="true"?(this.shadowRoot.querySelector(".video-item").classList.remove("on"),this.isSelected="false"):this.isSelected="true",this.dispatchEvent(new CustomEvent("selectitem",{detail:{id:this.id,type:this.type,key:this.urlKey,name:this.assetName,downloadUrl:this.downloadUrl,status:this.isSelected==="true",suffix:this.format.toLocaleLowerCase()}}))}clickMore(e){if(e.stopPropagation(),this.showMore){this.showMore=!1;return}document.querySelectorAll("asset-card").forEach(r=>{r.hideMore()}),e.type!=="mousedown"&&(this.leftDistance="265",this.topDistance="50"),this.getBoundingClientRect().left+~~this.leftDistance+200>window.innerWidth&&(e.type!=="mousedown"?(this.leftDistance="92",this.topDistance="50"):this.leftDistance=window.innerWidth-200-this.getBoundingClientRect().left-10),this.showMore=!0,document.addEventListener("click",()=>{this.hideMore()})}hideMore(){this.showMore=!1,document.querySelectorAll("asset-card").forEach(e=>{e.showMore=!1}),document.removeEventListener("click",this.hideMore)}clickRight(e){e.stopPropagation(),e.preventDefault(),e.button===2&&e.type==="mousedown"&&(this.leftDistance=e.offsetX,this.topDistance=e.offsetY,this.clickMore(e))}titleOver(e){fi(e.target)}nameChange(e){this.assetName=e.target.value}blurInput(){this.assetName=this.assetName.trim(),this.assetName?(this.beforeName=this.assetName,this.dispatchEvent(new CustomEvent("namechange",{detail:{id:this.id,value:this.assetName}}))):(this.assetName=this.beforeName,this.shadowRoot.querySelector("input").value=this.beforeName)}filePreview(){this.dispatchEvent(new CustomEvent("filepreview",{detail:{id:this.id,type:this.type}})),this.assetClick()}fileDownload(){this.dispatchEvent(new CustomEvent("filedownload",{detail:{url:this.downloadUrl,key:this.urlKey,name:this.assetName,type:this.type,suffix:this.format.toLocaleLowerCase()}}))}fileDelete(){this.dispatchEvent(new CustomEvent("filedelete",{detail:{id:this.id,type:this.type}}))}setIsSelectedValue(e){this.isSelected=e}assetClick(){let e="";this.size<1024?e=Number(this.size)+" B":this.size<1024*1024?e=(this.size/1024).toFixed(1)+" KB":e=(this.size/1024/1024).toFixed(1)+" MB",this.dispatchEvent(new CustomEvent("assetclick",{detail:{id:this.id,name:this.assetName,url:this.pictureUrl,playUrl:this.downloadUrl,type:this.type,format:this.format,size:e,tag:this.tag,time:this.time}}))}}M(Zo,"properties",{id:"",tag:"",assetName:{reflect:!0},background:"",type:"",pictureUrl:"",downloadUrl:"",format:"",leftDistance:{reflect:!0},topDistance:{reflect:!0},showMore:{type:Boolean,reflect:!0},isSelected:"",isDraft:!1,beforeName:"",time:"",size:"",urlKey:""}),M(Zo,"styles",[Be`
    :host{
      width:auto;
      height:auto;
    }
      .video-item {
        position: relative;
        width: 18.625em;
        height: 13.4375em;
        cursor: pointer;
      }
      .video-item .item-background {
        width: 100%;
        height: 10.5em;
        background-color: #F9F9FB;
        display:flex;
        justify-content: center;
        align-items: center;
        overflow:hidden;
        border: 1px solid #564AFE1A;
      }
      .video-item .item-background img{
        height:auto;
        width:auto;
        max-width:100%;
        max-height:100%;
        object-fit: contain;
        vertical-align: middle;
      }
      .video-item .item-background.music img{
        height:66px;
        width:66px;
      }
      .video-item .item-timetag {
        position: absolute;
        font-size: 12px;
        bottom: 5em;
        left: 1em;
        height: 24px;
        color: #ffffff;
        text-align: center;
        background: #1E1E2E80;
        border: 1px solid #FFFFFF33;
        border-radius: 12px;
        font: normal normal normal 12px/24px Roboto;
      }
      .video-item .item-timetag{
        padding-right: 16px;
        box-sizing:border-box;
      }
      .video-item .item-timetag span{
        height:100%;
        padding:4px 9px;
        font: normal normal normal 12px/16px Roboto;
        color: #FFFFFF;
        background-color: #1E1E2E;
        display:inline-block;
        border-radius:inherit;
        box-sizing:border-box;
        margin-right: 10px;
      }
      .video-item .item-timetag.tag-vidoe{
        padding:0 14px;
      }
      
      .video-item .item-title {
        margin-top: 0.5em;
        text-align: center;
        font: normal normal normal 14px/19px Roboto;
        color: rgba(30, 30, 46, 1);
        width:100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow:ellipsis;
        padding-top:14.5px;
        border:unset !important;
        outline: none !important;
      }
      .video-item .item-title.item-loading {
        height:20px !important;
        box-sizing:border-box;
        position:relative !important;
      }
      .video-item .item-title:focus,.video-item .item-title:hover{
        text-decoration:underline;
      }
      .video-item .item-time {
        text-align: center;
      }
      .video-item .item-mask {
        transition: all 0.2s;
        position: absolute;
        top: 1px;
        left: 1px;
        width: 100%;
        height: 10.5em;
        background-color: rgba(30, 30, 46, 0.4);
        opacity: 0;
      }
      .video-item:hover .item-mask,.video-item.on .item-mask {
        opacity: 1;
      }
      .handle-button {
        position: absolute;
        right: 12px;
        top: 12px;
        width: 22px;
        height: 22px;
        opacity: 0;
        transition: all 0.3s;
        background: url('/image/svg/video_library_menu.svg')

      }
      .video-item:hover .handle-button,.video-item.on .handle-button {
        opacity: 1;
      }
      .select-button {
        position: absolute;
        box-sizing: border-box;
        left: 12px;
        top: 12px;
        width: 22px;
        height: 22px;
        opacity: 0;
        transition: all 0.3s;
        background: url('/image/svg/check_box_white.svg')
      }
      .video-item:hover .select-button,.video-item.on .select-button {
        opacity: 1;
      }
      .select-button:hover {
        background: url('/image/svg/check_box_white_hover.svg')
      }
      .select-button.active {
        background: url('/image/svg/check_box_white_select.svg')
      }
      .handle-menu {
        position: absolute;
        top: 50px;
        left: 265px;
        width: 200px;
        box-sizing: border-box;
        background: #ffffff;
        box-shadow: 0px 3px 6px #1E1E2E33;
        border-radius: 6px;
        padding: 8px;
        z-index: 1;
        display: none;
      }
      .handle-menu ul li {
        height: 40px;
        border-radius: 4px;
        font: normal normal normal 14px/19px Roboto;
        color: rgba(30, 30, 46, 1);
        display:flex;
        align-items: center;
      }
      .handle-menu ul li::before{
        content:"";
        display:block;
        margin-right:8px;
        margin-left:8px;
        width:18px;
        height:18px;
        background:url('/image/svg/menu_preview.svg') no-repeat center/cover;
      }
      .handle-menu ul li:nth-child(2)::before{
        background:url('/image/svg/menu_download.svg') no-repeat center/cover;
      }
      .handle-menu ul li:nth-child(3)::before{
        background:url('/image/svg/menu_delete.svg') no-repeat center/cover;
      }
      .handle-menu ul li:hover {
        background: rgba(140, 140, 151, 0.2);
      }
      .handle-button:hover::after {
        content: "";
        display: block;
        position: absolute;
        top:50%;
        left: 50%;
        transform:translate(-50%, -50%);
        border-radius:8px;
        background-color:rgba(255, 255, 255, 0.2);
        width: 32px;
        height: 32px;
      }
      .item-loading {
        position: absolute;  
        height: 168px !important;
        border-radius: 6px;
        top:0;
        left:0;
        border:1px solid rgba(86, 74, 254, 0.1);
        z-index: 1 !important;
      }
      .card {
        border-radius: 6px !important;
      }
      
      @media (min-resolution: 120dpi) {
        /* 应用在DPI大于等于125时的样式 */
        .video-item {
          width: 282px;
          height: 12em;
        }
        .video-item .item-background,.video-item .item-mask {
          height: 10em;
        }
        .item-loading{
          height: 10em !important;
        }
      }
    `,_e]);class qo extends fe{constructor(){super();M(this,"templateSearch",ge());M(this,"closeButton",ge());M(this,"searchInput",ge());this.text="",this.timer=!1}render(){return O`
      <div ${be(this.templateSearch)} class="template-search flex-item-center">
        <div class="search-icon">
          <img src="/image/img/search-normal.png" />
        </div>
        <input
          ${be(this.searchInput)}
          class="search-input"
          type="text"
          placeholder="${this.text}"
          @focus="${this._focusEvent}"
          @blur="${this._blurEvent}"
        />
        <div ${be(this.closeButton)} class="search-close" @click="${this._clearInput}" title="Clear">
          <img src="/image/img/close_small.png" />
        </div>
      </div>
    `}_focusEvent(){const i=this.templateSearch.value;i.style.border="1px solid rgb(139, 61, 255)",i.style.outline="rgba(86, 74, 254, 0.1) solid 2px"}_blurEvent(){const i=this.templateSearch.value;i.style.border="",i.style.outline=""}_clearInput(){const i=this.searchInput.value,r=this.closeButton.value,n=this.templateSearch.value;i.value="",r.style.display="none",n.style.boxShadow="",clearTimeout(this.timer),this.dispatchEvent(new CustomEvent("clearInput"))}firstUpdated(){const i=this.searchInput.value,r=this.closeButton.value;i.addEventListener("input",()=>{let n="none";i.value.length>0&&(n="block"),r.style.display=n,this.timer||(this.timer=setTimeout(()=>{this.timer=!1,this.dispatchEvent(new CustomEvent("inputChange",{detail:{value:i.value}}))},1e3))}),i.addEventListener("keydown",n=>{n.keyCode===27&&this._clearInput()})}}M(qo,"properties",{text:"",timer:!1}),M(qo,"styles",[Be`
      .template-search {
        box-sizing: border-box;
        width: 360px;
        height: 42px;
        line-height: 42px;
        padding:0 16px;
        border: 1px solid rgba(30, 30, 46, 0.1);
        border-radius: 6px;
        position: relative;
        box-sizing: border-box;
        box-shadow:none;
      }
      .template-search:hover {
        box-shadow:none;
        border: 1px solid rgba(30, 30, 46, 0.5);
      }
      .search-icon{
        margin-right:16px
      }
      .search-close {
        position: absolute;
        right: 1em;
        cursor: pointer;
        display:none;
        &:hover::after{
          content:"";
          width: 20px;
          height: 20px;
          display: block;
          position: absolute;
          top: 50%;
          left: 50%;
          transform:translate(-50%, -50%);
          background-color:rgb(243, 243, 243);
          border-radius:4px;
          z-index: -1;
        }
      }
      .search-input {
        width: 100%;
        height: 100%;
        border: none;
        outline: none;
        color: #8c8c97;
        background: transparent;
        position:absolute;
        top:0;
        left:0;
        font-size:14px;
        color: rgba(30, 30, 46, 1);
        padding:0 48px 0 52px;
        font: normal normal normal 14px/19px Roboto;
      }
      .search-input::placeholder{
        font: normal normal normal 14px/19px Roboto;
        color: #8C8C97;
      }
      object {
        width: 20px;
        height: 20px;
      }
      @media (max-width: 1500px) {
        .template-search{
          width:280px;
        }
      }
    `,_e]);class es extends fe{constructor(){super();M(this,"sortMenu",ge());this.text="",this.changeLeft=!1,this.clickBtn=!1}render(){return O`
      <div class="sort-wrap flex flex-item-center" @click=${this.showOption}>
        <div class="sort-by flex-between flex-item-center">
          <div>Sort by</div>
          <div class="sort-by-icon ${this.sortby==="asc"?"":"dec"}" @click=${this.changeSort}>
            <i class="sort_asc"></i>
            <i class="sort_dec"></i>
          </div>
        </div>
        <div class="sort-current">${this.sortCurrent}</div>
        <div class="sort-select-button">
          <img src="/image/img/pull_down.png" class="down-off" />
          <img src="/image/img/pull_down_on.png" class="down-on"/>
        </div>
        <div class="sort-select-menu" ${be(this.sortMenu)}>
          <ul class="menu-ul1">
            ${this.menuoption.map(i=>O`<li class="${this.currentchoose.menuoption===i.value?"active":""}" data-value="${i.value}" @click=${r=>this.chooseOption(r)}>${i.name}</li>`)}
          </ul>
          <div class="line"></div>
          <ul class="menu-ul2">
            ${this.menumethod.map(i=>O`<li class="${this.currentchoose.menumethod===i.value?"active":""}" data-value="${i.value}" @click=${r=>this.chooseOption(r)}>${i.name}</li>`)}
          </ul>
        </div>
      </div>
    `}firstUpdated(){const i=this.sortMenu.value;document.addEventListener("click",r=>{(i.style.display==="block"&&r.target!==this||this.clickBtn)&&(i.style.display="none",this.clickBtn=!1)}),this.sortby=this.currentchoose.menumethod==="desc"?"dec":"asc",this.sortCurrent=this.menuoption.map(r=>{if(this.currentchoose.menuoption===r.value)return r.name})}showOption(){if(!this.changeLeft){this.changeLeft=!0;const r=this.shadowRoot.querySelector(".sort-by").clientWidth+4;this.shadowRoot.querySelector(".sort-select-menu").style.left=`${r}px`}const i=this.sortMenu.value;i.style.display==="block"?i.style.display="none":i.style.display="block"}chooseOption(i){const r=i.target.parentNode,n=i.target.parentNode.children;r.className.includes("menu-ul1")&&(this.sortCurrent=i.target.innerText),r.className.includes("menu-ul2")&&(this.sortby=i.target.getAttribute("data-value")==="desc"?"dec":"asc");for(const s of n)s.classList.remove("active"),i.target===s&&s.classList.add("active");const a=this.sortMenu.value.querySelector(".menu-ul1 .active").getAttribute("data-value"),o=this.sortMenu.value.querySelector(".menu-ul2 .active").getAttribute("data-value");this.dispatchEvent(new CustomEvent("sortchange",{detail:{menuOptionValue:a,menuMethodValue:o}}))}changeSort(i){i.stopPropagation(),this.clickBtn=!0,this.sortby==="dec"?this.sortMenu.value.querySelector(".menu-ul2 [data-value='asc']").click():this.sortMenu.value.querySelector(".menu-ul2 [data-value='desc']").click()}}M(es,"properties",{text:"",menuoption:{type:Object},menumethod:{type:Object},currentchoose:{type:Object},sortCurrent:{reflect:!0},sortby:{reflect:!0}}),M(es,"styles",[Be`
      .sort-wrap {
        position: relative;
        box-sizing: border-box;
        min-width: 220px;
        height: 34px;
        padding: 3px;
        background: #FFFFFF00;
        border: 1px solid #1E1E2E33;
        border-radius: 6px;
        margin-left:50px;
        cursor:pointer;
      }
      .down-on{
        display: none;
      }
      .sort-wrap:hover {
        border: 1px solid #1E1E2E4D;
      }
      .sort-wrap:hover .down-off{
          display: none;
        }
        .sort-wrap:hover .down-on{
          display:block;
        }
      .sort-by {
        min-width: 86px;
        height: 28px;
        border-radius: 4px;
        background: #ececee;
        padding: 0 10px;
        font: normal normal normal 13px/28px Roboto;
        color: #1E1E2E;
        box-sizing: border-box;
      }
      .sort-by-icon {
        width: 14px;
        height: 14px;
        margin-left:4px;
      }
      .sort-by-icon >i{
        width: 14px;
        height: 14px;
      }
      .sort_asc{
        display:block;
        background:url('data:image/svg+xml;base64,PHN2ZyBpZD0ic29ydF91cCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjE0IiBoZWlnaHQ9IjE0IiB2aWV3Qm94PSIwIDAgMTQgMTQiPgogIDxkZWZzPgogICAgPGNsaXBQYXRoIGlkPSJjbGlwLXBhdGgiPgogICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlXzEzMjgiIGRhdGEtbmFtZT0iUmVjdGFuZ2xlIDEzMjgiIHdpZHRoPSIxNCIgaGVpZ2h0PSIxNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoODIyIDE4NikiIGZpbGw9IiNmZmYiIHN0cm9rZT0iIzcwNzA3MCIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICA8L2NsaXBQYXRoPgogIDwvZGVmcz4KICA8ZyBpZD0iTWFza19Hcm91cF80NiIgZGF0YS1uYW1lPSJNYXNrIEdyb3VwIDQ2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtODIyIC0xODYpIiBjbGlwLXBhdGg9InVybCgjY2xpcC1wYXRoKSI+CiAgICA8ZyBpZD0idnVlc2F4X2xpbmVhcl9hcnJvdy0zIiBkYXRhLW5hbWU9InZ1ZXNheC9saW5lYXIvYXJyb3ctMyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTIwLjkyNiAtMS4wNykiPgogICAgICA8ZyBpZD0iYXJyb3ctMyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzAzLjAxIDE4OSkiPgogICAgICAgIDxnIGlkPSJHcm91cCI+CiAgICAgICAgICA8cGF0aCBpZD0iVmVjdG9yIiBkPSJNNC4xOTEsMi4xLDIuMSwwLDAsMi4xIiBmaWxsPSJub25lIiBzdHJva2U9IiMyOTJkMzIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KICAgICAgICAgIDxwYXRoIGlkPSJWZWN0b3ItMiIgZGF0YS1uYW1lPSJWZWN0b3IiIGQ9Ik0wLDEwLjE0VjAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIuMDk2KSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMjkyZDMyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41Ii8+CiAgICAgICAgICA8cGF0aCBpZD0iVmVjdG9yLTMiIGRhdGEtbmFtZT0iVmVjdG9yIiBkPSJNMCwwLDIuMSwyLjEsNC4xOTEsMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNS45MzggOC4wNDUpIiBmaWxsPSJub25lIiBzdHJva2U9IiNhZmFmYjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KICAgICAgICAgIDxwYXRoIGlkPSJWZWN0b3ItNCIgZGF0YS1uYW1lPSJWZWN0b3IiIGQ9Ik0wLDBWMTAuMTQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDguMDMzKSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjYWZhZmI1IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41Ii8+CiAgICAgICAgPC9nPgogICAgICA8L2c+CiAgICA8L2c+CiAgPC9nPgo8L3N2Zz4K')
      }
      .sort_dec{
        display: none;
        background:url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNCAxNCI+CiAgPGRlZnM+CiAgICA8Y2xpcFBhdGggaWQ9ImNsaXAtcGF0aCI+CiAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGVfMTMyOCIgZGF0YS1uYW1lPSJSZWN0YW5nbGUgMTMyOCIgd2lkdGg9IjE0IiBoZWlnaHQ9IjE0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4MjIgMTg2KSIgZmlsbD0iI2ZmZiIgc3Ryb2tlPSIjNzA3MDcwIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDwvY2xpcFBhdGg+CiAgPC9kZWZzPgogIDxnIGlkPSJzb3J0X2Rvd24iIHRyYW5zZm9ybT0idHJhbnNsYXRlKC04MjIgLTE4NikiIGNsaXAtcGF0aD0idXJsKCNjbGlwLXBhdGgpIj4KICAgIDxnIGlkPSJ2dWVzYXhfbGluZWFyX2Fycm93LTMiIGRhdGEtbmFtZT0idnVlc2F4L2xpbmVhci9hcnJvdy0zIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1MjAuOTI2IC0xLjA3KSI+CiAgICAgIDxnIGlkPSJhcnJvdy0zIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzMDMuMDEgMTg5KSI+CiAgICAgICAgPGcgaWQ9Ikdyb3VwIj4KICAgICAgICAgIDxwYXRoIGlkPSJWZWN0b3IiIGQ9Ik00LjE5MSwyLjEsMi4xLDAsMCwyLjEiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2FmYWZiNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNSIvPgogICAgICAgICAgPHBhdGggaWQ9IlZlY3Rvci0yIiBkYXRhLW5hbWU9IlZlY3RvciIgZD0iTTAsMTAuMTRWMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMi4wOTYpIiBmaWxsPSJub25lIiBzdHJva2U9IiNhZmFmYjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KICAgICAgICAgIDxwYXRoIGlkPSJWZWN0b3ItMyIgZGF0YS1uYW1lPSJWZWN0b3IiIGQ9Ik0wLDAsMi4xLDIuMSw0LjE5MSwwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1LjkzOCA4LjA0NSkiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzFlMWUyZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNSIvPgogICAgICAgICAgPHBhdGggaWQ9IlZlY3Rvci00IiBkYXRhLW5hbWU9IlZlY3RvciIgZD0iTTAsMFYxMC4xNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOC4wMzMpIiBmaWxsPSJub25lIiBzdHJva2U9IiMxZTFlMmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KICAgICAgICA8L2c+CiAgICAgIDwvZz4KICAgIDwvZz4KICA8L2c+Cjwvc3ZnPgo=')
      }
      .sort-by-icon.dec .sort_asc{
        display: none;
      }
      .sort-by-icon.dec .sort_dec{
        display: block;
      }
      .sort-current {
        margin-left: 12px;
        font: normal normal normal 13px/34px Roboto;
        color: #1E1E2E;
        flex: 1;
        padding-right:25px;
      }
      .sort-select-button {
        cursor: pointer;
        position:absolute;
        right: 12px;
        top: 50%;
        transform: translateY(-50%);
      }
      .sort-select-menu {
        position: absolute;
        top: 135%;
        left: 90px;
        width: 200px;
        background: #ffffff;
        box-shadow: 0px 3px 6px #1E1E2E33;
        border-radius: 6px;
        padding: 8px;
        box-sizing:border-box;
        display: none;
      }
      .sort-select-menu ul {
        width: 100%;
      }

      .sort-select-menu ul li {
        height: 40px;
        border-radius: 4px;
        cursor: pointer;
        font: normal normal normal 14px/40px Roboto;
        color: rgba(30, 30, 46, 1);
        padding: 0 20px 0 8px;
      }
      .sort-select-menu ul li:hover {
        background: rgba(140, 140, 151, 0.2);
      }
      .sort-select-menu ul li.active{
        color:rgba(139, 61, 255, 1);
        background-image:url('/image/img/ico_select.png');
        background-size: 14px 14px;
        background-repeat: no-repeat;
        background-position: right 6px center;
      }
      .line {
        width: 136px;
        height: 2px;
        background: #8c8c97;
        opacity: 0.08;
        margin: 4px 0px 4px 8px;
      }
      
    `,_e]);class ts extends fe{constructor(){super();M(this,"Dialog",ge());this.name=""}render(){const i=this.height!=="min-content"?this.height+"px":this.height;return O`
      <div class="full-mask" ${be(this.Dialog)}>
        <div class="dialog-box" style="width:${this.width}px;height:${i}">
          <div class="dialog-title">
            <div class="title-text">${this.name}</div>
            <div class="cursor-pointer hover-effect" @click=${this._close}>
              <img src="/image/img/window_close.png" />
            </div>
          </div>
          <slot name="dialog-body"></slot>
        </div>
      </div>
    `}_open(){var r,n;this.Dialog.value.style.visibility="visible",(n=(r=this.shadowRoot.querySelector("slot").assignedElements()[0]).opened)==null||n.call(r)}_close(){var r;this.Dialog.value.style.visibility="hidden";const i=document.getElementById("project-proposal");(r=i==null?void 0:i._close)==null||r.call(i)}}M(ts,"properties",{name:"",width:"",height:"",bodyHTML:""}),M(ts,"styles",[_e,Be`
      .full-mask {
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.4);
        z-index: 1000;
        visibility: hidden;
      }
      .dialog-box {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        background-color: #ffffff;
        border-radius: 6px;
        padding: 18px 24px 24px;
        box-sizing: border-box;
        max-height: 90vh;
        overflow: auto;
      }
      .dialog-title {
        display: flex;
        justify-content: space-between;
        padding-bottom: 25px;
        font-weight: 700;
      }
      .title-text {
        font-size: 16px;
        color: #1e1e2e;
        font-weight: 500;
      }
      .hover-effect {
        position: relative;
        z-index: 1;
      }
      .hover-effect::before {
        content: '';
        display: block;
        left: 50%;
        top: 50%;
        position: absolute;
        transform: translate(-50%, -50%);
        width: 32px;
        height: 32px;
        background-color: rgba(140, 140, 151, 0.2) !important;
        border-radius: 8px;
        opacity: 0;
        transition: opacity 0.3s;
        z-index: -1;
      }
      .hover-effect:hover::before {
        opacity: 1;
      }
    `]);class is extends fe{constructor(){var i;super();M(this,"Dialog",ge());M(this,"LandscapeRender",()=>this.templates.filter(r=>r.layout_type==="landscape").slice(0,4).map(r=>{var n;return O`
          <template-card
            class="template-content-left_item"
            hasUse=true
            tempName=${r.name}
            isNew=${r.is_new}
            templateid=${r.id}
            background="${(n=r.thumbnail)==null?void 0:n.url}"
            width="250px"
            height="140px"
            minHeight="140px"
          ></template-card>
        `}));M(this,"portraitRender",()=>this.templates.filter(r=>r.layout_type==="portrait").slice(0,3).map(r=>{var n;return O`
          <template-card
            class="template-content-right_item"
            tempName=${r.name}
            hasUse=true
            isNew=${r.is_new}
            templateid=${r.id}
            background="${(n=r.thumbnail)==null?void 0:n.url}"
            width="186px"
            height="332px"
          ></template-card>
        `}));this.text="",this.templates=((i=el("templatesList"))==null?void 0:i.templates)||[]}render(){return O`
      <fullscreen-dialog
        ${be(this.Dialog)}
        width="1200"
        height="660"
        name="Create Video"
      >
        <div slot="dialog-body" class="dialog-body">
          <div class="flex-between">
            <home-create-card
              class=""
              mode="show"
              name="Start a blank"
              text="Get started with an empty canvas"
              icon="/image/svg/create_blank.svg"
              width="564"
              @click=${this.createVideoBlank}
            ></home-create-card>
            <home-create-card
              class=""
              name="Import PPT"
              text="Create video from your PPT with one click!"
              icon="/image/svg/creat_import.svg"
              width="564"
              @click=${this.importPPT}
            ></home-create-card>
          </div>
          <div class="flex-between template">
            <div class="flex flex-item-center">
              <div class="template-title">Start with a template</div>
              <div class="replace-button flex" @click=${this.shuffle}>
                <div class="replace-button-icon flex-center flex-item-center">
                  <img src="/image/svg/ico_replace.svg" />
                </div>
                <div class="replace-button-text">Refresh</div>
              </div>
            </div>
            <div>
              <more-button
                @click="${this.linkToTemplate}"
                type="linkTotemplates"
                text="See all"
              ></more-button>
            </div>
          </div>
          <div class="flex flex-between template-content">
            <div class="flex flex-wrap template-content-left">${this.LandscapeRender()}</div>
            <div class="flex flex-wrap template-content-right">${this.portraitRender()}</div>
          </div>
        </div>
      </fullscreen-dialog>
      <import-dialog id="import-dialog"></import-dialog>
    `}shuffle(){const i=this.templates;let r=i.length,n,a;for(;r;)a=Math.floor(Math.random()*r),r-=1,n=i[r],i[r]=i[a],i[a]=n;this.templates=i}async firstUpdated(){try{if(el("templatesList"))return;const r=await ct({url:`/ai/template/list-all?t=${new Date().getTime()}`,noCache:!0});r.code===200&&(this.templates=r.data.templates,Dh("templatesList",r.data,60))}catch{}}createVideoBlank(){window.open("/edit/?from=blank&mode=landscape","_self")}linkToTemplate(){window.open("/template/index.html","_self")}importPPT(){this._close(),this.renderRoot.getElementById("import-dialog")._open()}_open(){this.Dialog.value._open()}_close(){this.Dialog.value._close()}}M(is,"properties",{text:"",templates:{type:Array,state:!0,hasChanged:()=>!0}}),M(is,"styles",[_e,Be`
      .template {
        margin-top: 32px;
      }
      .template-title {
        font-size: 16px;
        color: rgba(30, 30, 46, 1);
        font-weight: 600;
      }
      .replace-button {
        margin-left: 54px;
        cursor: pointer;
        align-items: center;
      }
      .replace-button-text {
        color: rgba(30, 30, 46, 1);
        font-size: 14px;
        user-select: none;
      }
      .replace-button-icon {
        width: 20px;
        height: 20px;
        margin-right: 8px;
        opacity: 0.4;
      }
      .replace-button:hover .replace-button-icon {
        opacity: 1;
      }
      .template-content {
        margin-top: 16px;
      }
      .template-content-left {
        width: 520px;
      }
      .template-content-left_item {
        margin-bottom: 20px;
        width:250px;
      }
      .template-content-left_item:not(:nth-of-type(2n)) {
        margin-right: 20px;
      }
      .template-content-right {
        width: 598px;
      }
      .template-content-right_item {
        margin-bottom: 20px;
        width:186px;
      }
      .template-content-right_item:not(:last-child) {
        margin-right: 20px;
      }
    `]);class rs extends fe{constructor(){super();M(this,"Dialog",ge());M(this,"MoreListMask",ge());M(this,"ListSidesMask",ge());this.text="",this.name="",this.dataId="",this.dataDistance=0,this.moveDistance=216,this.width=1058,this.categoriesid=9,this.firstIntoFile=!0}render(){var i;return O`
      <fullscreen-dialog ${be(this.Dialog)} width="${this.width}" height="min-content" name="${this.name}" data="${this.data}">
      <div slot="dialog-body" class="dialog-body" data-id=${this.dataId}>
        <div class="template-preview flex-between">
          <div class="preview-box">
            <div class="preview-player">
              <video id="preview-player" class="preview-player-video" width="100%" height="100%" autoplay></video>
              <video-controls videoClassName="preview-player-video" showPlayTime="hide" inComponentId = "project-proposal" fullClassName="preview-player"
            showFullPlayBtn="true"></video-controls>
            </div>
            <div class="use-template-button flex-item-center flex-between" @click=${this.linkToHref}>
              <object type="image/svg+xml" data="/image/svg/template_ico_use.svg"></object>
              Use this template
            </div>
          </div>
        </div>
        <div class="pagehear-more-recommmend">
          <div class="more-title"><span>More recommendations</span></div>
          <div ${be(this.MoreListMask)} class="more-list-position" id="morelistbox">
              <div class="templates-menu-button template-slideleft" id="templateSlideLeft" @click=${this.slideLeft}></div>
              <div class="templates-menu-button template-slideright" id="templateSlideRight" @click=${this.slideRight}></div>
              <div class="shadow-left" id="shadowLeft"></div>
              <div class="shadow-right" id="shadowRight"></div>
            <!-- <div class="more-list flex" id="morelistslidebox" @mousedown=${this._moreListMousedown}> -->
            <div class="more-list flex" id="morelistslidebox">
                ${(i=this.data)==null?void 0:i.map(r=>this._createMoreItem(r))}
            </div>
          </div>
        </div>
      </div>
      </fullscreen-dialog>

    `}firstUpdated(){const i=document.documentElement.clientWidth,r=this.shadowRoot.querySelector("video-controls"),n=this.shadowRoot.querySelector("#preview-player");r.setAttribute("totalTime",0),i<1460?this.width=900:i<1300&&(this.width=800),n.oncanplay=()=>{this.firstIntoFile&&(this.firstIntoFile=!1,r.setAttribute("totalTime",n.duration),n.click())},n.ondurationchange=()=>{r.setAttribute("showPlayTime","show")}}_open(){this.dataDistance=0,this.firstIntoFile=!0,this.shadowRoot.querySelector("video-controls").setAttribute("showPlayTime","hide");const i=JSON.parse(localStorage.getItem("templatesList"));this.objTemplates=i==null?void 0:i.value.templates;const r=this.shadowRoot.querySelector("#morelistslidebox");r.animate({transform:"translateX(0px)"},{duration:1,fill:"forwards"});const n=this.objTemplates.filter(s=>this.dataId===s.id.toString());r.classList.remove("portrait"),r.classList.remove("landscape"),r.classList.add(n[0].layout_type),n[0].layout_type==="landscape"?this.moveDistance=216:this.moveDistance=129;const a=this.objTemplates.filter(s=>n[0].layout_type===s.layout_type&&s.category_id.includes(this.categoriesid)&&this.dataId!==s.id.toString());this.data=a,this.shadowRoot.querySelector("#preview-player").setAttribute("src",this.previewvideo),this.Dialog.value._open(),setTimeout(()=>{this.hasArrow(0)})}_close(){this.shadowRoot.querySelector("#preview-player").setAttribute("src","")}slideLeft(i){const r=this.shadowRoot.querySelector("#morelistslidebox");Math.abs(this.dataDistance)<this.moveDistance?(this.dataDistance=0,r.animate({transform:"translateX("+this.dataDistance+"px)"},{duration:500,fill:"forwards"})):(this.dataDistance+=this.moveDistance,r.animate({transform:"translateX("+this.dataDistance+"px)"},{duration:500,fill:"forwards"})),this.hasArrow(Math.abs(this.dataDistance))}slideRight(){const i=this.shadowRoot.querySelector("#morelistbox"),r=this.shadowRoot.querySelector("#morelistslidebox"),n=r.clientWidth-i.clientWidth;n-Math.abs(this.dataDistance)<this.moveDistance?(this.dataDistance=this.dataDistance-(n-Math.abs(this.dataDistance)),r.animate({transform:"translateX("+this.dataDistance+"px)"},{duration:500,fill:"forwards"})):(this.dataDistance-=this.moveDistance,r.animate({transform:"translateX("+this.dataDistance+"px)"},{duration:500,fill:"forwards"})),this.hasArrow(Math.abs(this.dataDistance))}hasArrow(i){const r=this.shadowRoot.querySelector("#morelistbox"),n=this.shadowRoot.querySelector("#morelistslidebox"),a=this.shadowRoot.querySelector("#templateSlideLeft"),o=this.shadowRoot.querySelector("#shadowLeft"),s=this.shadowRoot.querySelector("#templateSlideRight"),A=this.shadowRoot.querySelector("#shadowRight"),l=n.clientWidth-r.clientWidth;i===0?(a.style.display="none",o.style.display="none"):(a.style.display="block",o.style.display="block"),i<l?(s.style.display="block",A.style.display="block"):(s.style.display="none",A.style.display="none")}linkToHref(){window.open(`/edit/index.html?from=template&id=${this.dataId}`,"_self")}_createMoreItem(i){const r=i.thumbnail.url!==""?i.thumbnail.url:i.layout_type==="landscape"?"/temp/444.jpg":"/temp/555.jpg";return O`
      <div class="more-list_item" @click="${n=>{this.previewCurrentVideo(n)}}" currentid=${i.id} currentvideo=${i.preview_video.url}>
        <div class="item-isnew" style="display:${i.is_new?"block":"none"}">
          <img src="/image/svg/new_tag.svg">
        </div>
        <div class="background">
          <img src="${r}" />
        </div>
        <div class="mask"></div>
      </div>
    `}_sidesMousedown(i){const r=i.y,n=this.ListSidesMask.value.scrollTop;document.onmousemove=a=>{const o=a.y-r-n;this.ListSidesMask.value.scrollTop=-o,document.onmouseup=()=>{document.onmousemove=null,document.onmouseup=null}}}previewCurrentVideo(i){this.firstIntoFile=!0,this.shadowRoot.querySelector("video-controls").setAttribute("showPlayTime","hide");const r=i.currentTarget,n=r.getAttribute("currentvideo"),a=r.getAttribute("currentid"),o=this.shadowRoot.querySelector("#preview-player"),s=this.objTemplates.filter(A=>a===A.id.toString());this.name=s[0].name,o.setAttribute("src",""),o.setAttribute("src",n)}}M(rs,"properties",{text:"",name:"",dataId:"",categoriesid:{type:Number,value:0},previewvideo:"",objTemplates:[],moveDistance:216,dataDistance:{type:Number,value:0},data:{state:!0,hasChanged:()=>!0}}),M(rs,"styles",[_e,Be`
      .dialog-body {
        margin-top: 4px;
      }
      .preview-box {
        width: 778px;
      }
      .template-preview{
        align-items:center;
        justify-content:center;
      }
      .preview-player {
        width: 778px;
        aspect-ratio: 1920 / 1080;
        background-color: #eeeeee;
        border: 1px solid #564AFE1A;
        border-radius: 6px;
        margin:0 auto;
        overflow: hidden;
        position:relative;
      }
      .use-template-button {
        background-color: #eeedff;
        min-width:186px;
        height: 40px;
        padding: 0 20px;
        text-align:center;
        box-sizing:border-box;
        font-size: 14px;
        background: #8B3DFF 0% 0% no-repeat padding-box;
        border-radius: 6px;
        color: #fff;
        margin: 16px auto 0;
        cursor:pointer;
        justify-content:center;
        width: max-content;
      }
      .use-template-button object{
        margin-right:8px;
      }
      .use-template-button:hover{
        background: #9B57FF 0% 0% no-repeat padding-box;
      }
      .template-list-text {
        margin-bottom: 16px;
        font-size: 14px;
        color: #8c8c97;
      }
      .template-list-position {
        width: 150px;
        height: 404px;
        overflow: auto;
        position: relative;
        user-select: none;
      }
      .template-list-position::-webkit-scrollbar {
        width: 0;
        height: 0;
      }
      .template-list-sides {
        position: absolute;
        top: 0;
      }
      .template-list_item {
        width: 150px;
        height: 84px;
        border-radius: 8px;
        position: relative;
        padding-bottom: 10px;
        cursor: pointer;
      }
      .template-list_item .background img {
        width: 100%;
      }
      .template-list_item .mask {
        width: 150px;
        height: 84px;
        background: #564afe;
        border-radius: 8px;
        position: absolute;
        top: 0;
        opacity: 0;
        transition: all 0.2s;
      }
      .play {
        width: 150px;
        height: 84px;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        opacity: 0;
      }
      .ontheair {
        color: #ffffff;
      }
      .template-list_item:hover .mask {
        opacity: 0.5;
      }
      .template-list_item:hover .play {
        opacity: 1;
      }
      .pagehear-more-recommmend{
        margin-top: 15px;
        position: relative;
      }
      .pagehear-more-recommmend .more-title{
        font-size:16px;
        color: #1E1E2E;
        line-height:21px;
        position:relative;
        display:flex;
        align-items:center;
      }
      .pagehear-more-recommmend .more-title span{
        flex-shrink:0;
      }
      .pagehear-more-recommmend .more-title:after{
        width:100%;
        height:1px;
        background: #8C8C97 0% 0% no-repeat padding-box;
        opacity: 0.1;
        content:"";
        display:block;
        margin-left:34px;
      }
      .more-list{
        width: max-content;
        position: relative;
        display: flex;
        gap: 16px;
      }
      .more-list.portrait{
        gap:24px;
      }
      .more-list-position {
        margin-top: 24px;
        overflow:hidden;
      }
      .more-list-position::-webkit-scrollbar {
        width: 0;
        height: 0;
      }
      .more-list_item {
        width: 200px;
        height: 112px;
        border: 1px solid rgba(86, 74, 254, 0.1);
        box-sizing:border-box;
        border-radius: 6px;
        position: relative;
        flex-shrink:0;
      }
      .item-isnew{
        position:absolute;
        left:0;
        top:0;
      }
      .more-list.portrait .more-list_item {
        width: 105px;
        height: 187px;
        position: relative;
      }
      .more-list_item .background{
        border-radius: 8px;
        overflow:hidden;
      }
      .more-list_item .mask {
        position: absolute;
        width: 100%;
        height: 100%;
        background: rgba(30, 30, 46, 0.4);
        border-radius: 8px;
        top: 0;
        opacity: 0;
        transition: all 0.2s;
        cursor: pointer;
      }
      .more-list_item:hover .mask {
        opacity: 0.5;
      }
      .more-list_item .background img {
        width: 100%;
        height: 100%;
        user-select: none;
      }
      .more-list-position_button {
        width: 40px;
        height: 40px;
        background: red;
        border-radius: 50%;
        position: absolute;
        right: -20px;
        top: 76px;
        z-index: 1;
        opacity: 1;
      }
      .templates-menu-button {
        width: 32px;
        height: 32px;
        border: 1px solid rgba(30, 30, 46, 0.2);
        border-radius: 50%;
        cursor: pointer;
        position: absolute;
        background: url(/image/svg/ico_return.svg) #fff no-repeat center center;
        background-size: 8px 12px;
        box-sizing: border-box;
        z-index: 4;
        top:calc(50% + 8px)
      }
      .templates-menu-button:hover {
        box-shadow: 0 0 1px 1px rgba(30, 30, 46, 0.2);
      }
      .templates-menu-button.template-slideright{
        right: -16px;
        transform: rotate(180deg);
      }
      .templates-menu-button.template-slideleft{
        left: -16px;
        display: none;
      }
      .shadow-right {
        z-index: 3;
        position: absolute;
        width: 60px;
        height: 100%;
        top: 0px;
        background: transparent linear-gradient(90deg, #FFFFFF00 0%, #FFFFFF 100%) 0% 0% no-repeat padding-box;
        right: 0px;
      }
      .shadow-left {
        z-index: 3;
        position: absolute;
        width: 60px;
        height: 80%;
        top: 20%;
        background: transparent linear-gradient(270deg, #FFFFFF00 0%, #FFFFFF 100%) 0% 0% no-repeat padding-box;
        left: 0px;
        display: none;
      }
      @media screen and (max-width: 1460px) {
        .preview-player{
          width:600px;
        }
      }
      @media screen and (max-width: 1300px) {
        .preview-player{
          width:500px;
        }
      }
    `]);class ns extends fe{constructor(){super();M(this,"loadingRef",ge());this.text="-"}firstUpdated(){}render(){return O`
      <div ${be(this.loadingRef)} class="full-screent-loading" >
        <div class="loading-logo-box">
          <span><i></i></span>
        </div>
        <span class="text">Loading...</span>
      </div>
    `}showLoading(){this.loadingRef.value&&(this.loadingRef.value.style.display="flex")}hideLoading(){this.loadingRef.value&&(this.loadingRef.value.style.display="none")}}M(ns,"properties",{}),M(ns,"styles",[Be`
      .full-screent-loading{
        position: fixed;
        width: 100%;
        height: 100%;
        left: 120px;
        top: 44px;
        background: #FFFFFF;
        z-index: 99;
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      .loading-logo-box i{
        background:url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNzgiIGhlaWdodD0iNzgiIHZpZXdCb3g9IjAgMCA3OCA3OCI+CiAgPGRlZnM+CiAgICA8Y2xpcFBhdGggaWQ9ImNsaXAtcGF0aCI+CiAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGVfMjU0OSIgZGF0YS1uYW1lPSJSZWN0YW5nbGUgMjU0OSIgd2lkdGg9Ijc4IiBoZWlnaHQ9Ijc4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNSAzMCkiIGZpbGw9IiNmZmYiIHN0cm9rZT0iIzcwNzA3MCIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICA8L2NsaXBQYXRoPgogICAgPGxpbmVhckdyYWRpZW50IGlkPSJsaW5lYXItZ3JhZGllbnQiIHgxPSIwLjE4NSIgeTE9IjAuOTI2IiB4Mj0iMC43NzciIHkyPSIwLjA1IiBncmFkaWVudFVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzhmODdmZiIgc3RvcC1vcGFjaXR5PSIwIi8+CiAgICAgIDxzdG9wIG9mZnNldD0iMC4xNDUiIHN0b3AtY29sb3I9IiM4ZTdhZmYiIHN0b3Atb3BhY2l0eT0iMC4xNzMiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIwLjQ2MSIgc3RvcC1jb2xvcj0iIzhjNjBmZiIgc3RvcC1vcGFjaXR5PSIwLjUyMiIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjAuNzE4IiBzdG9wLWNvbG9yPSIjOGI0ZGZmIiBzdG9wLW9wYWNpdHk9IjAuNzgiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIwLjkwNCIgc3RvcC1jb2xvcj0iIzhiNDFmZiIgc3RvcC1vcGFjaXR5PSIwLjkzNyIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM4YjNkZmYiLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImxpbmVhci1ncmFkaWVudC0yIiB4MT0iMC40OTIiIHkxPSIwLjAyMSIgeDI9IjAuNTExIiB5Mj0iMS4wMDkiIHhsaW5rOmhyZWY9IiNsaW5lYXItZ3JhZGllbnQiLz4KICA8L2RlZnM+CiAgPGcgaWQ9ImxvZ29fbG9hZGluZyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTI1IC0zMCkiIGNsaXAtcGF0aD0idXJsKCNjbGlwLXBhdGgpIj4KICAgIDxnIGlkPSJHcm91cF8yMTU2IiBkYXRhLW5hbWU9Ikdyb3VwIDIxNTYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI3Ljk5OSAzNS45NzkpIj4KICAgICAgPHBhdGggaWQ9IlBhdGhfODA5MCIgZGF0YS1uYW1lPSJQYXRoIDgwOTAiIGQ9Ik0yNi4xODEsNjguODgzQTE2NS44ODUsMTY1Ljg4NSwwLDAsMCw2Mi4zODcsODkuOTA5LDE1LjM3OSwxNS4zNzksMCwwLDAsODMuODE1LDc2LjUyMWExNjUuOTUzLDE2NS45NTMsMCwwLDAtMy4wMzItNDEuNzU3Yy0xLjctOC4yLTExLjQ4My0xMi4wNTItMTkuNjM0LTguMDI5YTE5Ny43LDE5Ny43LDAsMCwwLTE3LjMxMyw5LjY1cS04LjQ4Nyw1LjMxLTE2LjI1NywxMS4zMjZDMjAuMzg3LDUzLjI3NiwxOS41NTksNjMuNzUzLDI2LjE4MSw2OC44ODNaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjEuNjY2IC0yNS4xMjkpIiBmaWxsPSIjOGIzZGZmIiBvcGFjaXR5PSIwLjI1Ii8+CiAgICAgIDxwYXRoIGlkPSJQYXRoXzgwOTEiIGRhdGEtbmFtZT0iUGF0aCA4MDkxIiBkPSJNNDEuODc1LDkwLjI3MkExNjUuNywxNjUuNywwLDAsMCw3OC44ODksNzAuNzE0YTE1LjM2OSwxNS4zNjksMCwwLDAsMC0yNS4yNjFBMTY1LjkzNSwxNjUuOTM1LDAsMCwwLDQxLjg3NSwyNS44ODljLTcuODU3LTIuOS0xNi4zMDgsMy4zNTctMTcuMjE3LDEyLjRhMTk4LjMxMSwxOTguMzExLDAsMCwwLDAsMzkuNTg5QzI1LjU2Nyw4Ni45MiwzNC4wMTgsOTMuMTcyLDQxLjg3NSw5MC4yNzJaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTMuNSAtMjQuOTQ5KSIgZmlsbD0iIzhiM2RmZiIvPgogICAgICA8cGF0aCBpZD0iUGF0aF84MDkyIiBkYXRhLW5hbWU9IlBhdGggODA5MiIgZD0iTTM5LjA1OSwzOC4yYy0uNjE1LDEuNjItMS4xNjMsMy4wNzgtMS43MTcsNC41NC0xLjY3MSw0LjQxOC0zLjMyNyw4Ljg0Mi01LjAxOCwxMy4yNUEzLjYyNSwzLjYyNSwwLDEsMSwyNS41MTksNTMuNXEzLjAyNC04LjIxMiw2LjE0LTE2LjM4OWE0NC44LDQ0LjgsMCwwLDEsMi4wMjEtNC44OTEsNS44ODksNS44ODksMCwwLDEsOS4yNDgtMS44NDQsOC44ODksOC44ODksMCwwLDEsMS45LDIuODY0YzEuNzYyLDMuNjA2LDMuNDQzLDcuMjQ3LDUuMzIyLDEwLjg2OFY0Mi45NjRjLjAwNS0xLjI5LS4wMi0yLjU4LjAxLTMuODdhMy42NzMsMy42NzMsMCwwLDEsMi4zNDYtMy40MDgsMy41LDMuNSwwLDAsMSwzLjksMS4wNzcsNC4wNjQsNC4wNjQsMCwwLDEsLjg0OCwyLjc2OGMuMDMsNC41NDUuMDUxLDkuMSwwLDEzLjY0MWE1LjExNSw1LjExNSwwLDAsMS0yLjkyLDQuNzg5QTQuOSw0LjksMCwwLDEsNDkuMSw1Ny41Nyw2LjQ2OCw2LjQ2OCwwLDAsMSw0Nyw1NC44MzhxLTMuODQ3LTguMTEzLTcuNjg0LTE2LjIzMkMzOS4yNzcsMzguNTIsMzkuMjE3LDM4LjQ0NCwzOS4wNTksMzguMloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02Ljk3NiAtOS44OTUpIiBmaWxsPSIjZmZmIi8+CiAgICAgIDxwYXRoIGlkPSJQYXRoXzgwOTMiIGRhdGEtbmFtZT0iUGF0aCA4MDkzIiBkPSJNMzYuOSwzMS41NTNhMy4zMTYsMy4zMTYsMCwxLDEtNi42MzMuMDIsMy4zNDgsMy4zNDgsMCwwLDEsMy4zNDItMy4zMTFBMy40NDQsMy40NDQsMCwwLDEsMzYuOSwzMS41NTNaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMy40MTUgLTEyLjM1KSIgZmlsbD0iI2ZmZiIvPgogICAgICA8cGF0aCBpZD0iUGF0aF84MDk0IiBkYXRhLW5hbWU9IlBhdGggODA5NCIgZD0iTTM1LjE3NCwzMC4yMDhhNC4yODUsNC4yODUsMCwwLDAtMy45NTYsMi42NDZjLS4wMjUuMDYxLS4wNjEuMTMyLS4wOTEuMTkzUTI4LjMsNDAuNTIsMjUuNTE5LDQ4LjAxNGEzLjYyNSwzLjYyNSwwLDEsMCw2LjgwNSwyLjQ5NGMxLjY5MS00LjQwOCwzLjM0Ny04LjgzMiw1LjAxOC0xMy4yNS41NTQtMS40NjMsMS4xLTIuOTIsMS43MTctNC41NGwuMDMuMDQ2QTQuMjc5LDQuMjc5LDAsMCwwLDM1LjE3NCwzMC4yMDhaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNi45NzYgLTQuNDEyKSIgb3BhY2l0eT0iMC4yNCIgZmlsbD0idXJsKCNsaW5lYXItZ3JhZGllbnQpIi8+CiAgICAgIDxwYXRoIGlkPSJQYXRoXzgwOTUiIGRhdGEtbmFtZT0iUGF0aCA4MDk1IiBkPSJNMzcuMjg3LDQ1Ljc1M2MuMDI1LTMuODQ1LjAxNS03LjY4OS0uMDEtMTEuNTM0YTQuMDY0LDQuMDY0LDAsMCwwLS44NDgtMi43NjgsMy41LDMuNSwwLDAsMC0zLjktMS4wNzcsMy42NzMsMy42NzMsMCwwLDAtMi4zNDYsMy40MDhjLS4wMywxLjI5LS4wMDUsMi41OC0uMDEsMy44N1YzOC43N2wzLjc3Myw3LjdhMS43NjgsMS43NjgsMCwwLDAsMy4zNDItLjcyMVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEzLjAwOCAtNC41ODQpIiBvcGFjaXR5PSIwLjI0IiBmaWxsPSJ1cmwoI2xpbmVhci1ncmFkaWVudC0yKSIvPgogICAgPC9nPgogIDwvZz4KPC9zdmc+Cg==') no-repeat center/cover;
        width:75px;
        height:75px;
        display:block;
        animation: loading-rotate ease   1.8s infinite ;
      }
      .loading-logo-box span{
        animation: loading-height ease   1.8s infinite ;
        display:block;
      }
      .loading-logo-box::after{
        content:"";
        display:block;
        width:64px;
        height:12px;
        background-color:#D1D1D5;
        border-radius: 50%;
        margin-top: 7px;
        animation: loading-shadow ease   1.8s infinite ;
      }
      .full-screent-loading .text {
        font: normal normal normal 14px/19px Roboto;
        color: #8C8C97;
        margin-top: 8px;
      }
      @keyframes loading-rotate {
        0%{
          transform: rotate(0deg);
        }
        16%{
          transform: rotate(120deg);
        }
        33%{
          transform: rotate(120deg);
        }
        49%{
          transform: rotate(240deg);
        }
        66%{
          transform: rotate(240deg);
        }
        82%{
          transform: rotate(360deg);
        }
        100%{
          transform: rotate(360deg);
        }
      }
      @keyframes loading-height {
        0%{
          transform: translateY(0px);
        }
        16%{
          transform: translateY(-15px);
        }
        33%{
          transform: translateY(0px);
        }
        49%{
          transform: translateY(-15px);
        }
        66%{
          transform: translateY(0px);
        }
        82%{
          transform: translateY(-15px);
        }
        100%{
          transform: translateY(0px);
        }
      }
      @keyframes loading-shadow{
        
        0%{
          transform: scale(1);
          background-color:rgb(209, 209, 213);
        }
        16%{
          transform: scale(0.5);
          background-color:rgb(209, 209, 213,0.6);
        }
        33%{
          transform: scale(1);
          background-color:rgb(209, 209, 213);
        }
        49%{
          transform: scale(0.5);
          background-color:rgb(209, 209, 213,0.6);
        }
        66%{
          transform: scale(1);
        background-color:rgb(209, 209, 213);
        }
        82%{
          transform: scale(0.5);
          background-color:rgb(209, 209, 213,0.6);
        }
        100%{
          transform: scale(1);
          background-color:rgb(209, 209, 213);
        }
      }
    `]);function Ln(t,e){return t==null||e==null?NaN:t<e?-1:t>e?1:t>=e?0:NaN}function qh(t,e){return t==null||e==null?NaN:e<t?-1:e>t?1:e>=t?0:NaN}function qs(t){let e,i,r;t.length!==2?(e=Ln,i=(s,A)=>Ln(t(s),A),r=(s,A)=>t(s)-A):(e=t===Ln||t===qh?t:eg,i=t,r=t);function n(s,A,l=0,c=s.length){if(l<c){if(e(A,A)!==0)return c;do{const u=l+c>>>1;i(s[u],A)<0?l=u+1:c=u}while(l<c)}return l}function a(s,A,l=0,c=s.length){if(l<c){if(e(A,A)!==0)return c;do{const u=l+c>>>1;i(s[u],A)<=0?l=u+1:c=u}while(l<c)}return l}function o(s,A,l=0,c=s.length){const u=n(s,A,l,c-1);return u>l&&r(s[u-1],A)>-r(s[u],A)?u-1:u}return{left:n,center:o,right:a}}function eg(){return 0}function tg(t){return t===null?NaN:+t}const ig=qs(Ln),rg=ig.right;qs(tg).center;const ng=rg;class rl extends Map{constructor(e,i=sg){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:i}}),e!=null)for(const[r,n]of e)this.set(r,n)}get(e){return super.get(nl(this,e))}has(e){return super.has(nl(this,e))}set(e,i){return super.set(ag(this,e),i)}delete(e){return super.delete(og(this,e))}}function nl({_intern:t,_key:e},i){const r=e(i);return t.has(r)?t.get(r):i}function ag({_intern:t,_key:e},i){const r=e(i);return t.has(r)?t.get(r):(t.set(r,i),i)}function og({_intern:t,_key:e},i){const r=e(i);return t.has(r)&&(i=t.get(r),t.delete(r)),i}function sg(t){return t!==null&&typeof t=="object"?t.valueOf():t}const Ag=Math.sqrt(50),lg=Math.sqrt(10),cg=Math.sqrt(2);function Zn(t,e,i){const r=(e-t)/Math.max(0,i),n=Math.floor(Math.log10(r)),a=r/Math.pow(10,n),o=a>=Ag?10:a>=lg?5:a>=cg?2:1;let s,A,l;return n<0?(l=Math.pow(10,-n)/o,s=Math.round(t*l),A=Math.round(e*l),s/l<t&&++s,A/l>e&&--A,l=-l):(l=Math.pow(10,n)*o,s=Math.round(t/l),A=Math.round(e/l),s*l<t&&++s,A*l>e&&--A),A<s&&.5<=i&&i<2?Zn(t,e,i*2):[s,A,l]}function as(t,e,i){if(e=+e,t=+t,i=+i,!(i>0))return[];if(t===e)return[t];const r=e<t,[n,a,o]=r?Zn(e,t,i):Zn(t,e,i);if(!(a>=n))return[];const s=a-n+1,A=new Array(s);if(r)if(o<0)for(let l=0;l<s;++l)A[l]=(a-l)/-o;else for(let l=0;l<s;++l)A[l]=(a-l)*o;else if(o<0)for(let l=0;l<s;++l)A[l]=(n+l)/-o;else for(let l=0;l<s;++l)A[l]=(n+l)*o;return A}function os(t,e,i){return e=+e,t=+t,i=+i,Zn(t,e,i)[2]}function ss(t,e,i){e=+e,t=+t,i=+i;const r=e<t,n=r?os(e,t,i):os(t,e,i);return(r?-1:1)*(n<0?1/-n:n)}function ug(t){return t}var Mn=1,Rn=2,As=3,Ir=4,al=1e-6;function dg(t){return"translate("+t+",0)"}function hg(t){return"translate(0,"+t+")"}function gg(t){return e=>+t(e)}function fg(t,e){return e=Math.max(0,t.bandwidth()-e*2)/2,t.round()&&(e=Math.round(e)),i=>+t(i)+e}function pg(){return!this.__axis}function Ua(t,e){var i=[],r=null,n=null,a=6,o=6,s=3,A=typeof window<"u"&&window.devicePixelRatio>1?0:.5,l=t===Mn||t===Ir?-1:1,c=t===Ir||t===Rn?"x":"y",u=t===Mn||t===As?dg:hg;function d(h){var g=r??(e.ticks?e.ticks.apply(e,i):e.domain()),f=n??(e.tickFormat?e.tickFormat.apply(e,i):ug),p=Math.max(a,0)+s,v=e.range(),m=+v[0]+A,w=+v[v.length-1]+A,x=(e.bandwidth?fg:gg)(e.copy(),A),_=h.selection?h.selection():h,b=_.selectAll(".domain").data([null]),E=_.selectAll(".tick").data(g,e).order(),U=E.exit(),H=E.enter().append("g").attr("class","tick"),T=E.select("line"),y=E.select("text");b=b.merge(b.enter().insert("path",".tick").attr("class","domain").attr("stroke","currentColor")),E=E.merge(H),T=T.merge(H.append("line").attr("stroke","currentColor").attr(c+"2",l*a)),y=y.merge(H.append("text").attr("fill","currentColor").attr(c,l*p).attr("dy",t===Mn?"0em":t===As?"0.71em":"0.32em")),h!==_&&(b=b.transition(h),E=E.transition(h),T=T.transition(h),y=y.transition(h),U=U.transition(h).attr("opacity",al).attr("transform",function(Q){return isFinite(Q=x(Q))?u(Q+A):this.getAttribute("transform")}),H.attr("opacity",al).attr("transform",function(Q){var B=this.parentNode.__axis;return u((B&&isFinite(B=B(Q))?B:x(Q))+A)})),U.remove(),b.attr("d",t===Ir||t===Rn?o?"M"+l*o+","+m+"H"+A+"V"+w+"H"+l*o:"M"+A+","+m+"V"+w:o?"M"+m+","+l*o+"V"+A+"H"+w+"V"+l*o:"M"+m+","+A+"H"+w),E.attr("opacity",1).attr("transform",function(Q){return u(x(Q)+A)}),T.attr(c+"2",l*a),y.attr(c,l*p).text(f),_.filter(pg).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor",t===Rn?"start":t===Ir?"end":"middle"),_.each(function(){this.__axis=x})}return d.scale=function(h){return arguments.length?(e=h,d):e},d.ticks=function(){return i=Array.from(arguments),d},d.tickArguments=function(h){return arguments.length?(i=h==null?[]:Array.from(h),d):i.slice()},d.tickValues=function(h){return arguments.length?(r=h==null?null:Array.from(h),d):r&&r.slice()},d.tickFormat=function(h){return arguments.length?(n=h,d):n},d.tickSize=function(h){return arguments.length?(a=o=+h,d):a},d.tickSizeInner=function(h){return arguments.length?(a=+h,d):a},d.tickSizeOuter=function(h){return arguments.length?(o=+h,d):o},d.tickPadding=function(h){return arguments.length?(s=+h,d):s},d.offset=function(h){return arguments.length?(A=+h,d):A},d}function vg(t){return Ua(Mn,t)}function mg(t){return Ua(Rn,t)}function ol(t){return Ua(As,t)}function sl(t){return Ua(Ir,t)}var xg={value:()=>{}};function eA(){for(var t=0,e=arguments.length,i={},r;t<e;++t){if(!(r=arguments[t]+"")||r in i||/[\s.]/.test(r))throw new Error("illegal type: "+r);i[r]=[]}return new Dn(i)}function Dn(t){this._=t}function Bg(t,e){return t.trim().split(/^|\s+/).map(function(i){var r="",n=i.indexOf(".");if(n>=0&&(r=i.slice(n+1),i=i.slice(0,n)),i&&!e.hasOwnProperty(i))throw new Error("unknown type: "+i);return{type:i,name:r}})}Dn.prototype=eA.prototype={constructor:Dn,on:function(t,e){var i=this._,r=Bg(t+"",i),n,a=-1,o=r.length;if(arguments.length<2){for(;++a<o;)if((n=(t=r[a]).type)&&(n=wg(i[n],t.name)))return n;return}if(e!=null&&typeof e!="function")throw new Error("invalid callback: "+e);for(;++a<o;)if(n=(t=r[a]).type)i[n]=Al(i[n],t.name,e);else if(e==null)for(n in i)i[n]=Al(i[n],t.name,null);return this},copy:function(){var t={},e=this._;for(var i in e)t[i]=e[i].slice();return new Dn(t)},call:function(t,e){if((n=arguments.length-2)>0)for(var i=new Array(n),r=0,n,a;r<n;++r)i[r]=arguments[r+2];if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(a=this._[t],r=0,n=a.length;r<n;++r)a[r].value.apply(e,i)},apply:function(t,e,i){if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(var r=this._[t],n=0,a=r.length;n<a;++n)r[n].value.apply(e,i)}};function wg(t,e){for(var i=0,r=t.length,n;i<r;++i)if((n=t[i]).name===e)return n.value}function Al(t,e,i){for(var r=0,n=t.length;r<n;++r)if(t[r].name===e){t[r]=xg,t=t.slice(0,r).concat(t.slice(r+1));break}return i!=null&&t.push({name:e,value:i}),t}var ls="http://www.w3.org/1999/xhtml";const ji={svg:"http://www.w3.org/2000/svg",xhtml:ls,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function Ia(t){var e=t+="",i=e.indexOf(":");return i>=0&&(e=t.slice(0,i))!=="xmlns"&&(t=t.slice(i+1)),ji.hasOwnProperty(e)?{space:ji[e],local:t}:t}function bg(t){return function(){var e=this.ownerDocument,i=this.namespaceURI;return i===ls&&e.documentElement.namespaceURI===ls?e.createElement(t):e.createElementNS(i,t)}}function yg(t){return function(){return this.ownerDocument.createElementNS(t.space,t.local)}}function uu(t){var e=Ia(t);return(e.local?yg:bg)(e)}function _g(){}function tA(t){return t==null?_g:function(){return this.querySelector(t)}}function Cg(t){typeof t!="function"&&(t=tA(t));for(var e=this._groups,i=e.length,r=new Array(i),n=0;n<i;++n)for(var a=e[n],o=a.length,s=r[n]=new Array(o),A,l,c=0;c<o;++c)(A=a[c])&&(l=t.call(A,A.__data__,c,a))&&("__data__"in A&&(l.__data__=A.__data__),s[c]=l);return new Je(r,this._parents)}function du(t){return t==null?[]:Array.isArray(t)?t:Array.from(t)}function Tg(){return[]}function hu(t){return t==null?Tg:function(){return this.querySelectorAll(t)}}function Eg(t){return function(){return du(t.apply(this,arguments))}}function Qg(t){typeof t=="function"?t=Eg(t):t=hu(t);for(var e=this._groups,i=e.length,r=[],n=[],a=0;a<i;++a)for(var o=e[a],s=o.length,A,l=0;l<s;++l)(A=o[l])&&(r.push(t.call(A,A.__data__,l,o)),n.push(A));return new Je(r,n)}function gu(t){return function(){return this.matches(t)}}function fu(t){return function(e){return e.matches(t)}}var Fg=Array.prototype.find;function Ug(t){return function(){return Fg.call(this.children,t)}}function Ig(){return this.firstElementChild}function Sg(t){return this.select(t==null?Ig:Ug(typeof t=="function"?t:fu(t)))}var kg=Array.prototype.filter;function Hg(){return Array.from(this.children)}function Ng(t){return function(){return kg.call(this.children,t)}}function Lg(t){return this.selectAll(t==null?Hg:Ng(typeof t=="function"?t:fu(t)))}function Mg(t){typeof t!="function"&&(t=gu(t));for(var e=this._groups,i=e.length,r=new Array(i),n=0;n<i;++n)for(var a=e[n],o=a.length,s=r[n]=[],A,l=0;l<o;++l)(A=a[l])&&t.call(A,A.__data__,l,a)&&s.push(A);return new Je(r,this._parents)}function pu(t){return new Array(t.length)}function Rg(){return new Je(this._enter||this._groups.map(pu),this._parents)}function qn(t,e){this.ownerDocument=t.ownerDocument,this.namespaceURI=t.namespaceURI,this._next=null,this._parent=t,this.__data__=e}qn.prototype={constructor:qn,appendChild:function(t){return this._parent.insertBefore(t,this._next)},insertBefore:function(t,e){return this._parent.insertBefore(t,e)},querySelector:function(t){return this._parent.querySelector(t)},querySelectorAll:function(t){return this._parent.querySelectorAll(t)}};function Dg(t){return function(){return t}}function $g(t,e,i,r,n,a){for(var o=0,s,A=e.length,l=a.length;o<l;++o)(s=e[o])?(s.__data__=a[o],r[o]=s):i[o]=new qn(t,a[o]);for(;o<A;++o)(s=e[o])&&(n[o]=s)}function Pg(t,e,i,r,n,a,o){var s,A,l=new Map,c=e.length,u=a.length,d=new Array(c),h;for(s=0;s<c;++s)(A=e[s])&&(d[s]=h=o.call(A,A.__data__,s,e)+"",l.has(h)?n[s]=A:l.set(h,A));for(s=0;s<u;++s)h=o.call(t,a[s],s,a)+"",(A=l.get(h))?(r[s]=A,A.__data__=a[s],l.delete(h)):i[s]=new qn(t,a[s]);for(s=0;s<c;++s)(A=e[s])&&l.get(d[s])===A&&(n[s]=A)}function Og(t){return t.__data__}function zg(t,e){if(!arguments.length)return Array.from(this,Og);var i=e?Pg:$g,r=this._parents,n=this._groups;typeof t!="function"&&(t=Dg(t));for(var a=n.length,o=new Array(a),s=new Array(a),A=new Array(a),l=0;l<a;++l){var c=r[l],u=n[l],d=u.length,h=Kg(t.call(c,c&&c.__data__,l,r)),g=h.length,f=s[l]=new Array(g),p=o[l]=new Array(g),v=A[l]=new Array(d);i(c,u,f,p,v,h,e);for(var m=0,w=0,x,_;m<g;++m)if(x=f[m]){for(m>=w&&(w=m+1);!(_=p[w])&&++w<g;);x._next=_||null}}return o=new Je(o,r),o._enter=s,o._exit=A,o}function Kg(t){return typeof t=="object"&&"length"in t?t:Array.from(t)}function Xg(){return new Je(this._exit||this._groups.map(pu),this._parents)}function Gg(t,e,i){var r=this.enter(),n=this,a=this.exit();return typeof t=="function"?(r=t(r),r&&(r=r.selection())):r=r.append(t+""),e!=null&&(n=e(n),n&&(n=n.selection())),i==null?a.remove():i(a),r&&n?r.merge(n).order():n}function Yg(t){for(var e=t.selection?t.selection():t,i=this._groups,r=e._groups,n=i.length,a=r.length,o=Math.min(n,a),s=new Array(n),A=0;A<o;++A)for(var l=i[A],c=r[A],u=l.length,d=s[A]=new Array(u),h,g=0;g<u;++g)(h=l[g]||c[g])&&(d[g]=h);for(;A<n;++A)s[A]=i[A];return new Je(s,this._parents)}function Vg(){for(var t=this._groups,e=-1,i=t.length;++e<i;)for(var r=t[e],n=r.length-1,a=r[n],o;--n>=0;)(o=r[n])&&(a&&o.compareDocumentPosition(a)^4&&a.parentNode.insertBefore(o,a),a=o);return this}function Wg(t){t||(t=Jg);function e(u,d){return u&&d?t(u.__data__,d.__data__):!u-!d}for(var i=this._groups,r=i.length,n=new Array(r),a=0;a<r;++a){for(var o=i[a],s=o.length,A=n[a]=new Array(s),l,c=0;c<s;++c)(l=o[c])&&(A[c]=l);A.sort(e)}return new Je(n,this._parents).order()}function Jg(t,e){return t<e?-1:t>e?1:t>=e?0:NaN}function jg(){var t=arguments[0];return arguments[0]=this,t.apply(null,arguments),this}function Zg(){return Array.from(this)}function qg(){for(var t=this._groups,e=0,i=t.length;e<i;++e)for(var r=t[e],n=0,a=r.length;n<a;++n){var o=r[n];if(o)return o}return null}function ef(){let t=0;for(const e of this)++t;return t}function tf(){return!this.node()}function rf(t){for(var e=this._groups,i=0,r=e.length;i<r;++i)for(var n=e[i],a=0,o=n.length,s;a<o;++a)(s=n[a])&&t.call(s,s.__data__,a,n);return this}function nf(t){return function(){this.removeAttribute(t)}}function af(t){return function(){this.removeAttributeNS(t.space,t.local)}}function of(t,e){return function(){this.setAttribute(t,e)}}function sf(t,e){return function(){this.setAttributeNS(t.space,t.local,e)}}function Af(t,e){return function(){var i=e.apply(this,arguments);i==null?this.removeAttribute(t):this.setAttribute(t,i)}}function lf(t,e){return function(){var i=e.apply(this,arguments);i==null?this.removeAttributeNS(t.space,t.local):this.setAttributeNS(t.space,t.local,i)}}function cf(t,e){var i=Ia(t);if(arguments.length<2){var r=this.node();return i.local?r.getAttributeNS(i.space,i.local):r.getAttribute(i)}return this.each((e==null?i.local?af:nf:typeof e=="function"?i.local?lf:Af:i.local?sf:of)(i,e))}function vu(t){return t.ownerDocument&&t.ownerDocument.defaultView||t.document&&t||t.defaultView}function uf(t){return function(){this.style.removeProperty(t)}}function df(t,e,i){return function(){this.style.setProperty(t,e,i)}}function hf(t,e,i){return function(){var r=e.apply(this,arguments);r==null?this.style.removeProperty(t):this.style.setProperty(t,r,i)}}function gf(t,e,i){return arguments.length>1?this.each((e==null?uf:typeof e=="function"?hf:df)(t,e,i??"")):Zi(this.node(),t)}function Zi(t,e){return t.style.getPropertyValue(e)||vu(t).getComputedStyle(t,null).getPropertyValue(e)}function ff(t){return function(){delete this[t]}}function pf(t,e){return function(){this[t]=e}}function vf(t,e){return function(){var i=e.apply(this,arguments);i==null?delete this[t]:this[t]=i}}function mf(t,e){return arguments.length>1?this.each((e==null?ff:typeof e=="function"?vf:pf)(t,e)):this.node()[t]}function mu(t){return t.trim().split(/^|\s+/)}function iA(t){return t.classList||new xu(t)}function xu(t){this._node=t,this._names=mu(t.getAttribute("class")||"")}xu.prototype={add:function(t){var e=this._names.indexOf(t);e<0&&(this._names.push(t),this._node.setAttribute("class",this._names.join(" ")))},remove:function(t){var e=this._names.indexOf(t);e>=0&&(this._names.splice(e,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(t){return this._names.indexOf(t)>=0}};function Bu(t,e){for(var i=iA(t),r=-1,n=e.length;++r<n;)i.add(e[r])}function wu(t,e){for(var i=iA(t),r=-1,n=e.length;++r<n;)i.remove(e[r])}function xf(t){return function(){Bu(this,t)}}function Bf(t){return function(){wu(this,t)}}function wf(t,e){return function(){(e.apply(this,arguments)?Bu:wu)(this,t)}}function bf(t,e){var i=mu(t+"");if(arguments.length<2){for(var r=iA(this.node()),n=-1,a=i.length;++n<a;)if(!r.contains(i[n]))return!1;return!0}return this.each((typeof e=="function"?wf:e?xf:Bf)(i,e))}function yf(){this.textContent=""}function _f(t){return function(){this.textContent=t}}function Cf(t){return function(){var e=t.apply(this,arguments);this.textContent=e??""}}function Tf(t){return arguments.length?this.each(t==null?yf:(typeof t=="function"?Cf:_f)(t)):this.node().textContent}function Ef(){this.innerHTML=""}function Qf(t){return function(){this.innerHTML=t}}function Ff(t){return function(){var e=t.apply(this,arguments);this.innerHTML=e??""}}function Uf(t){return arguments.length?this.each(t==null?Ef:(typeof t=="function"?Ff:Qf)(t)):this.node().innerHTML}function If(){this.nextSibling&&this.parentNode.appendChild(this)}function Sf(){return this.each(If)}function kf(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function Hf(){return this.each(kf)}function Nf(t){var e=typeof t=="function"?t:uu(t);return this.select(function(){return this.appendChild(e.apply(this,arguments))})}function Lf(){return null}function Mf(t,e){var i=typeof t=="function"?t:uu(t),r=e==null?Lf:typeof e=="function"?e:tA(e);return this.select(function(){return this.insertBefore(i.apply(this,arguments),r.apply(this,arguments)||null)})}function Rf(){var t=this.parentNode;t&&t.removeChild(this)}function Df(){return this.each(Rf)}function $f(){var t=this.cloneNode(!1),e=this.parentNode;return e?e.insertBefore(t,this.nextSibling):t}function Pf(){var t=this.cloneNode(!0),e=this.parentNode;return e?e.insertBefore(t,this.nextSibling):t}function Of(t){return this.select(t?Pf:$f)}function zf(t){return arguments.length?this.property("__data__",t):this.node().__data__}function Kf(t){return function(e){t.call(this,e,this.__data__)}}function Xf(t){return t.trim().split(/^|\s+/).map(function(e){var i="",r=e.indexOf(".");return r>=0&&(i=e.slice(r+1),e=e.slice(0,r)),{type:e,name:i}})}function Gf(t){return function(){var e=this.__on;if(e){for(var i=0,r=-1,n=e.length,a;i<n;++i)a=e[i],(!t.type||a.type===t.type)&&a.name===t.name?this.removeEventListener(a.type,a.listener,a.options):e[++r]=a;++r?e.length=r:delete this.__on}}}function Yf(t,e,i){return function(){var r=this.__on,n,a=Kf(e);if(r){for(var o=0,s=r.length;o<s;++o)if((n=r[o]).type===t.type&&n.name===t.name){this.removeEventListener(n.type,n.listener,n.options),this.addEventListener(n.type,n.listener=a,n.options=i),n.value=e;return}}this.addEventListener(t.type,a,i),n={type:t.type,name:t.name,value:e,listener:a,options:i},r?r.push(n):this.__on=[n]}}function Vf(t,e,i){var r=Xf(t+""),n,a=r.length,o;if(arguments.length<2){var s=this.node().__on;if(s){for(var A=0,l=s.length,c;A<l;++A)for(n=0,c=s[A];n<a;++n)if((o=r[n]).type===c.type&&o.name===c.name)return c.value}return}for(s=e?Yf:Gf,n=0;n<a;++n)this.each(s(r[n],e,i));return this}function bu(t,e,i){var r=vu(t),n=r.CustomEvent;typeof n=="function"?n=new n(e,i):(n=r.document.createEvent("Event"),i?(n.initEvent(e,i.bubbles,i.cancelable),n.detail=i.detail):n.initEvent(e,!1,!1)),t.dispatchEvent(n)}function Wf(t,e){return function(){return bu(this,t,e)}}function Jf(t,e){return function(){return bu(this,t,e.apply(this,arguments))}}function jf(t,e){return this.each((typeof e=="function"?Jf:Wf)(t,e))}function*Zf(){for(var t=this._groups,e=0,i=t.length;e<i;++e)for(var r=t[e],n=0,a=r.length,o;n<a;++n)(o=r[n])&&(yield o)}var rA=[null];function Je(t,e){this._groups=t,this._parents=e}function or(){return new Je([[document.documentElement]],rA)}function qf(){return this}Je.prototype=or.prototype={constructor:Je,select:Cg,selectAll:Qg,selectChild:Sg,selectChildren:Lg,filter:Mg,data:zg,enter:Rg,exit:Xg,join:Gg,merge:Yg,selection:qf,order:Vg,sort:Wg,call:jg,nodes:Zg,node:qg,size:ef,empty:tf,each:rf,attr:cf,style:gf,property:mf,classed:bf,text:Tf,html:Uf,raise:Sf,lower:Hf,append:Nf,insert:Mf,remove:Df,clone:Of,datum:zf,on:Vf,dispatch:jf,[Symbol.iterator]:Zf};function G(t){return typeof t=="string"?new Je([[document.querySelector(t)]],[document.documentElement]):new Je([[t]],rA)}function ep(t){let e;for(;e=t.sourceEvent;)t=e;return t}function cs(t,e){if(t=ep(t),e===void 0&&(e=t.currentTarget),e){var i=e.ownerSVGElement||e;if(i.createSVGPoint){var r=i.createSVGPoint();return r.x=t.clientX,r.y=t.clientY,r=r.matrixTransform(e.getScreenCTM().inverse()),[r.x,r.y]}if(e.getBoundingClientRect){var n=e.getBoundingClientRect();return[t.clientX-n.left-e.clientLeft,t.clientY-n.top-e.clientTop]}}return[t.pageX,t.pageY]}function yu(t){return typeof t=="string"?new Je([document.querySelectorAll(t)],[document.documentElement]):new Je([du(t)],rA)}const tp={passive:!1},zr={capture:!0,passive:!1};function uo(t){t.stopImmediatePropagation()}function Gi(t){t.preventDefault(),t.stopImmediatePropagation()}function ip(t){var e=t.document.documentElement,i=G(t).on("dragstart.drag",Gi,zr);"onselectstart"in e?i.on("selectstart.drag",Gi,zr):(e.__noselect=e.style.MozUserSelect,e.style.MozUserSelect="none")}function rp(t,e){var i=t.document.documentElement,r=G(t).on("dragstart.drag",null);e&&(r.on("click.drag",Gi,zr),setTimeout(function(){r.on("click.drag",null)},0)),"onselectstart"in i?r.on("selectstart.drag",null):(i.style.MozUserSelect=i.__noselect,delete i.__noselect)}const hn=t=>()=>t;function us(t,{sourceEvent:e,subject:i,target:r,identifier:n,active:a,x:o,y:s,dx:A,dy:l,dispatch:c}){Object.defineProperties(this,{type:{value:t,enumerable:!0,configurable:!0},sourceEvent:{value:e,enumerable:!0,configurable:!0},subject:{value:i,enumerable:!0,configurable:!0},target:{value:r,enumerable:!0,configurable:!0},identifier:{value:n,enumerable:!0,configurable:!0},active:{value:a,enumerable:!0,configurable:!0},x:{value:o,enumerable:!0,configurable:!0},y:{value:s,enumerable:!0,configurable:!0},dx:{value:A,enumerable:!0,configurable:!0},dy:{value:l,enumerable:!0,configurable:!0},_:{value:c}})}us.prototype.on=function(){var t=this._.on.apply(this._,arguments);return t===this._?this:t};function np(t){return!t.ctrlKey&&!t.button}function ap(){return this.parentNode}function op(t,e){return e??{x:t.x,y:t.y}}function sp(){return navigator.maxTouchPoints||"ontouchstart"in this}function Ap(){var t=np,e=ap,i=op,r=sp,n={},a=eA("start","drag","end"),o=0,s,A,l,c,u=0;function d(x){x.on("mousedown.drag",h).filter(r).on("touchstart.drag",p).on("touchmove.drag",v,tp).on("touchend.drag touchcancel.drag",m).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function h(x,_){if(!(c||!t.call(this,x,_))){var b=w(this,e.call(this,x,_),x,_,"mouse");b&&(G(x.view).on("mousemove.drag",g,zr).on("mouseup.drag",f,zr),ip(x.view),uo(x),l=!1,s=x.clientX,A=x.clientY,b("start",x))}}function g(x){if(Gi(x),!l){var _=x.clientX-s,b=x.clientY-A;l=_*_+b*b>u}n.mouse("drag",x)}function f(x){G(x.view).on("mousemove.drag mouseup.drag",null),rp(x.view,l),Gi(x),n.mouse("end",x)}function p(x,_){if(t.call(this,x,_)){var b=x.changedTouches,E=e.call(this,x,_),U=b.length,H,T;for(H=0;H<U;++H)(T=w(this,E,x,_,b[H].identifier,b[H]))&&(uo(x),T("start",x,b[H]))}}function v(x){var _=x.changedTouches,b=_.length,E,U;for(E=0;E<b;++E)(U=n[_[E].identifier])&&(Gi(x),U("drag",x,_[E]))}function m(x){var _=x.changedTouches,b=_.length,E,U;for(c&&clearTimeout(c),c=setTimeout(function(){c=null},500),E=0;E<b;++E)(U=n[_[E].identifier])&&(uo(x),U("end",x,_[E]))}function w(x,_,b,E,U,H){var T=a.copy(),y=cs(H||b,_),Q,B,C;if((C=i.call(x,new us("beforestart",{sourceEvent:b,target:d,identifier:U,active:o,x:y[0],y:y[1],dx:0,dy:0,dispatch:T}),E))!=null)return Q=C.x-y[0]||0,B=C.y-y[1]||0,function I(S,k,F){var N=y,D;switch(S){case"start":n[U]=I,D=o++;break;case"end":delete n[U],--o;case"drag":y=cs(F||k,_),D=o;break}T.call(S,x,new us(S,{sourceEvent:k,subject:C,target:d,identifier:U,active:D,x:y[0]+Q,y:y[1]+B,dx:y[0]-N[0],dy:y[1]-N[1],dispatch:T}),E)}}return d.filter=function(x){return arguments.length?(t=typeof x=="function"?x:hn(!!x),d):t},d.container=function(x){return arguments.length?(e=typeof x=="function"?x:hn(x),d):e},d.subject=function(x){return arguments.length?(i=typeof x=="function"?x:hn(x),d):i},d.touchable=function(x){return arguments.length?(r=typeof x=="function"?x:hn(!!x),d):r},d.on=function(){var x=a.on.apply(a,arguments);return x===a?d:x},d.clickDistance=function(x){return arguments.length?(u=(x=+x)*x,d):Math.sqrt(u)},d}function nA(t,e,i){t.prototype=e.prototype=i,i.constructor=t}function _u(t,e){var i=Object.create(t.prototype);for(var r in e)i[r]=e[r];return i}function tn(){}var Kr=.7,ea=1/Kr,Yi="\\s*([+-]?\\d+)\\s*",Xr="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",Ft="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",lp=/^#([0-9a-f]{3,8})$/,cp=new RegExp(`^rgb\\(${Yi},${Yi},${Yi}\\)$`),up=new RegExp(`^rgb\\(${Ft},${Ft},${Ft}\\)$`),dp=new RegExp(`^rgba\\(${Yi},${Yi},${Yi},${Xr}\\)$`),hp=new RegExp(`^rgba\\(${Ft},${Ft},${Ft},${Xr}\\)$`),gp=new RegExp(`^hsl\\(${Xr},${Ft},${Ft}\\)$`),fp=new RegExp(`^hsla\\(${Xr},${Ft},${Ft},${Xr}\\)$`),ll={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};nA(tn,yi,{copy(t){return Object.assign(new this.constructor,this,t)},displayable(){return this.rgb().displayable()},hex:cl,formatHex:cl,formatHex8:pp,formatHsl:vp,formatRgb:ul,toString:ul});function cl(){return this.rgb().formatHex()}function pp(){return this.rgb().formatHex8()}function vp(){return Cu(this).formatHsl()}function ul(){return this.rgb().formatRgb()}function yi(t){var e,i;return t=(t+"").trim().toLowerCase(),(e=lp.exec(t))?(i=e[1].length,e=parseInt(e[1],16),i===6?dl(e):i===3?new rt(e>>8&15|e>>4&240,e>>4&15|e&240,(e&15)<<4|e&15,1):i===8?gn(e>>24&255,e>>16&255,e>>8&255,(e&255)/255):i===4?gn(e>>12&15|e>>8&240,e>>8&15|e>>4&240,e>>4&15|e&240,((e&15)<<4|e&15)/255):null):(e=cp.exec(t))?new rt(e[1],e[2],e[3],1):(e=up.exec(t))?new rt(e[1]*255/100,e[2]*255/100,e[3]*255/100,1):(e=dp.exec(t))?gn(e[1],e[2],e[3],e[4]):(e=hp.exec(t))?gn(e[1]*255/100,e[2]*255/100,e[3]*255/100,e[4]):(e=gp.exec(t))?fl(e[1],e[2]/100,e[3]/100,1):(e=fp.exec(t))?fl(e[1],e[2]/100,e[3]/100,e[4]):ll.hasOwnProperty(t)?dl(ll[t]):t==="transparent"?new rt(NaN,NaN,NaN,0):null}function dl(t){return new rt(t>>16&255,t>>8&255,t&255,1)}function gn(t,e,i,r){return r<=0&&(t=e=i=NaN),new rt(t,e,i,r)}function mp(t){return t instanceof tn||(t=yi(t)),t?(t=t.rgb(),new rt(t.r,t.g,t.b,t.opacity)):new rt}function ds(t,e,i,r){return arguments.length===1?mp(t):new rt(t,e,i,r??1)}function rt(t,e,i,r){this.r=+t,this.g=+e,this.b=+i,this.opacity=+r}nA(rt,ds,_u(tn,{brighter(t){return t=t==null?ea:Math.pow(ea,t),new rt(this.r*t,this.g*t,this.b*t,this.opacity)},darker(t){return t=t==null?Kr:Math.pow(Kr,t),new rt(this.r*t,this.g*t,this.b*t,this.opacity)},rgb(){return this},clamp(){return new rt(Bi(this.r),Bi(this.g),Bi(this.b),ta(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:hl,formatHex:hl,formatHex8:xp,formatRgb:gl,toString:gl}));function hl(){return`#${vi(this.r)}${vi(this.g)}${vi(this.b)}`}function xp(){return`#${vi(this.r)}${vi(this.g)}${vi(this.b)}${vi((isNaN(this.opacity)?1:this.opacity)*255)}`}function gl(){const t=ta(this.opacity);return`${t===1?"rgb(":"rgba("}${Bi(this.r)}, ${Bi(this.g)}, ${Bi(this.b)}${t===1?")":`, ${t})`}`}function ta(t){return isNaN(t)?1:Math.max(0,Math.min(1,t))}function Bi(t){return Math.max(0,Math.min(255,Math.round(t)||0))}function vi(t){return t=Bi(t),(t<16?"0":"")+t.toString(16)}function fl(t,e,i,r){return r<=0?t=e=i=NaN:i<=0||i>=1?t=e=NaN:e<=0&&(t=NaN),new xt(t,e,i,r)}function Cu(t){if(t instanceof xt)return new xt(t.h,t.s,t.l,t.opacity);if(t instanceof tn||(t=yi(t)),!t)return new xt;if(t instanceof xt)return t;t=t.rgb();var e=t.r/255,i=t.g/255,r=t.b/255,n=Math.min(e,i,r),a=Math.max(e,i,r),o=NaN,s=a-n,A=(a+n)/2;return s?(e===a?o=(i-r)/s+(i<r)*6:i===a?o=(r-e)/s+2:o=(e-i)/s+4,s/=A<.5?a+n:2-a-n,o*=60):s=A>0&&A<1?0:o,new xt(o,s,A,t.opacity)}function Bp(t,e,i,r){return arguments.length===1?Cu(t):new xt(t,e,i,r??1)}function xt(t,e,i,r){this.h=+t,this.s=+e,this.l=+i,this.opacity=+r}nA(xt,Bp,_u(tn,{brighter(t){return t=t==null?ea:Math.pow(ea,t),new xt(this.h,this.s,this.l*t,this.opacity)},darker(t){return t=t==null?Kr:Math.pow(Kr,t),new xt(this.h,this.s,this.l*t,this.opacity)},rgb(){var t=this.h%360+(this.h<0)*360,e=isNaN(t)||isNaN(this.s)?0:this.s,i=this.l,r=i+(i<.5?i:1-i)*e,n=2*i-r;return new rt(ho(t>=240?t-240:t+120,n,r),ho(t,n,r),ho(t<120?t+240:t-120,n,r),this.opacity)},clamp(){return new xt(pl(this.h),fn(this.s),fn(this.l),ta(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const t=ta(this.opacity);return`${t===1?"hsl(":"hsla("}${pl(this.h)}, ${fn(this.s)*100}%, ${fn(this.l)*100}%${t===1?")":`, ${t})`}`}}));function pl(t){return t=(t||0)%360,t<0?t+360:t}function fn(t){return Math.max(0,Math.min(1,t||0))}function ho(t,e,i){return(t<60?e+(i-e)*t/60:t<180?i:t<240?e+(i-e)*(240-t)/60:e)*255}const aA=t=>()=>t;function wp(t,e){return function(i){return t+i*e}}function bp(t,e,i){return t=Math.pow(t,i),e=Math.pow(e,i)-t,i=1/i,function(r){return Math.pow(t+r*e,i)}}function yp(t){return(t=+t)==1?Tu:function(e,i){return i-e?bp(e,i,t):aA(isNaN(e)?i:e)}}function Tu(t,e){var i=e-t;return i?wp(t,i):aA(isNaN(t)?e:t)}const ia=function t(e){var i=yp(e);function r(n,a){var o=i((n=ds(n)).r,(a=ds(a)).r),s=i(n.g,a.g),A=i(n.b,a.b),l=Tu(n.opacity,a.opacity);return function(c){return n.r=o(c),n.g=s(c),n.b=A(c),n.opacity=l(c),n+""}}return r.gamma=t,r}(1);function _p(t,e){e||(e=[]);var i=t?Math.min(e.length,t.length):0,r=e.slice(),n;return function(a){for(n=0;n<i;++n)r[n]=t[n]*(1-a)+e[n]*a;return r}}function Cp(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function Tp(t,e){var i=e?e.length:0,r=t?Math.min(i,t.length):0,n=new Array(r),a=new Array(i),o;for(o=0;o<r;++o)n[o]=rn(t[o],e[o]);for(;o<i;++o)a[o]=e[o];return function(s){for(o=0;o<r;++o)a[o]=n[o](s);return a}}function Ep(t,e){var i=new Date;return t=+t,e=+e,function(r){return i.setTime(t*(1-r)+e*r),i}}function mt(t,e){return t=+t,e=+e,function(i){return t*(1-i)+e*i}}function Qp(t,e){var i={},r={},n;(t===null||typeof t!="object")&&(t={}),(e===null||typeof e!="object")&&(e={});for(n in e)n in t?i[n]=rn(t[n],e[n]):r[n]=e[n];return function(a){for(n in i)r[n]=i[n](a);return r}}var hs=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,go=new RegExp(hs.source,"g");function Fp(t){return function(){return t}}function Up(t){return function(e){return t(e)+""}}function Eu(t,e){var i=hs.lastIndex=go.lastIndex=0,r,n,a,o=-1,s=[],A=[];for(t=t+"",e=e+"";(r=hs.exec(t))&&(n=go.exec(e));)(a=n.index)>i&&(a=e.slice(i,a),s[o]?s[o]+=a:s[++o]=a),(r=r[0])===(n=n[0])?s[o]?s[o]+=n:s[++o]=n:(s[++o]=null,A.push({i:o,x:mt(r,n)})),i=go.lastIndex;return i<e.length&&(a=e.slice(i),s[o]?s[o]+=a:s[++o]=a),s.length<2?A[0]?Up(A[0].x):Fp(e):(e=A.length,function(l){for(var c=0,u;c<e;++c)s[(u=A[c]).i]=u.x(l);return s.join("")})}function rn(t,e){var i=typeof e,r;return e==null||i==="boolean"?aA(e):(i==="number"?mt:i==="string"?(r=yi(e))?(e=r,ia):Eu:e instanceof yi?ia:e instanceof Date?Ep:Cp(e)?_p:Array.isArray(e)?Tp:typeof e.valueOf!="function"&&typeof e.toString!="function"||isNaN(e)?Qp:mt)(t,e)}function Ip(t,e){return t=+t,e=+e,function(i){return Math.round(t*(1-i)+e*i)}}var vl=180/Math.PI,gs={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function Qu(t,e,i,r,n,a){var o,s,A;return(o=Math.sqrt(t*t+e*e))&&(t/=o,e/=o),(A=t*i+e*r)&&(i-=t*A,r-=e*A),(s=Math.sqrt(i*i+r*r))&&(i/=s,r/=s,A/=s),t*r<e*i&&(t=-t,e=-e,A=-A,o=-o),{translateX:n,translateY:a,rotate:Math.atan2(e,t)*vl,skewX:Math.atan(A)*vl,scaleX:o,scaleY:s}}var pn;function Sp(t){const e=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(t+"");return e.isIdentity?gs:Qu(e.a,e.b,e.c,e.d,e.e,e.f)}function kp(t){return t==null||(pn||(pn=document.createElementNS("http://www.w3.org/2000/svg","g")),pn.setAttribute("transform",t),!(t=pn.transform.baseVal.consolidate()))?gs:(t=t.matrix,Qu(t.a,t.b,t.c,t.d,t.e,t.f))}function Fu(t,e,i,r){function n(l){return l.length?l.pop()+" ":""}function a(l,c,u,d,h,g){if(l!==u||c!==d){var f=h.push("translate(",null,e,null,i);g.push({i:f-4,x:mt(l,u)},{i:f-2,x:mt(c,d)})}else(u||d)&&h.push("translate("+u+e+d+i)}function o(l,c,u,d){l!==c?(l-c>180?c+=360:c-l>180&&(l+=360),d.push({i:u.push(n(u)+"rotate(",null,r)-2,x:mt(l,c)})):c&&u.push(n(u)+"rotate("+c+r)}function s(l,c,u,d){l!==c?d.push({i:u.push(n(u)+"skewX(",null,r)-2,x:mt(l,c)}):c&&u.push(n(u)+"skewX("+c+r)}function A(l,c,u,d,h,g){if(l!==u||c!==d){var f=h.push(n(h)+"scale(",null,",",null,")");g.push({i:f-4,x:mt(l,u)},{i:f-2,x:mt(c,d)})}else(u!==1||d!==1)&&h.push(n(h)+"scale("+u+","+d+")")}return function(l,c){var u=[],d=[];return l=t(l),c=t(c),a(l.translateX,l.translateY,c.translateX,c.translateY,u,d),o(l.rotate,c.rotate,u,d),s(l.skewX,c.skewX,u,d),A(l.scaleX,l.scaleY,c.scaleX,c.scaleY,u,d),l=c=null,function(h){for(var g=-1,f=d.length,p;++g<f;)u[(p=d[g]).i]=p.x(h);return u.join("")}}}var Hp=Fu(Sp,"px, ","px)","deg)"),Np=Fu(kp,", ",")",")"),qi=0,Sr=0,fr=0,Uu=1e3,ra,kr,na=0,_i=0,Sa=0,Gr=typeof performance=="object"&&performance.now?performance:Date,Iu=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(t){setTimeout(t,17)};function oA(){return _i||(Iu(Lp),_i=Gr.now()+Sa)}function Lp(){_i=0}function aa(){this._call=this._time=this._next=null}aa.prototype=Su.prototype={constructor:aa,restart:function(t,e,i){if(typeof t!="function")throw new TypeError("callback is not a function");i=(i==null?oA():+i)+(e==null?0:+e),!this._next&&kr!==this&&(kr?kr._next=this:ra=this,kr=this),this._call=t,this._time=i,fs()},stop:function(){this._call&&(this._call=null,this._time=1/0,fs())}};function Su(t,e,i){var r=new aa;return r.restart(t,e,i),r}function Mp(){oA(),++qi;for(var t=ra,e;t;)(e=_i-t._time)>=0&&t._call.call(void 0,e),t=t._next;--qi}function ml(){_i=(na=Gr.now())+Sa,qi=Sr=0;try{Mp()}finally{qi=0,Dp(),_i=0}}function Rp(){var t=Gr.now(),e=t-na;e>Uu&&(Sa-=e,na=t)}function Dp(){for(var t,e=ra,i,r=1/0;e;)e._call?(r>e._time&&(r=e._time),t=e,e=e._next):(i=e._next,e._next=null,e=t?t._next=i:ra=i);kr=t,fs(r)}function fs(t){if(!qi){Sr&&(Sr=clearTimeout(Sr));var e=t-_i;e>24?(t<1/0&&(Sr=setTimeout(ml,t-Gr.now()-Sa)),fr&&(fr=clearInterval(fr))):(fr||(na=Gr.now(),fr=setInterval(Rp,Uu)),qi=1,Iu(ml))}}function xl(t,e,i){var r=new aa;return e=e==null?0:+e,r.restart(n=>{r.stop(),t(n+e)},e,i),r}var $p=eA("start","end","cancel","interrupt"),Pp=[],ku=0,Bl=1,ps=2,$n=3,wl=4,vs=5,Pn=6;function ka(t,e,i,r,n,a){var o=t.__transition;if(!o)t.__transition={};else if(i in o)return;Op(t,i,{name:e,index:r,group:n,on:$p,tween:Pp,time:a.time,delay:a.delay,duration:a.duration,ease:a.ease,timer:null,state:ku})}function sA(t,e){var i=wt(t,e);if(i.state>ku)throw new Error("too late; already scheduled");return i}function Ht(t,e){var i=wt(t,e);if(i.state>$n)throw new Error("too late; already running");return i}function wt(t,e){var i=t.__transition;if(!i||!(i=i[e]))throw new Error("transition not found");return i}function Op(t,e,i){var r=t.__transition,n;r[e]=i,i.timer=Su(a,0,i.time);function a(l){i.state=Bl,i.timer.restart(o,i.delay,i.time),i.delay<=l&&o(l-i.delay)}function o(l){var c,u,d,h;if(i.state!==Bl)return A();for(c in r)if(h=r[c],h.name===i.name){if(h.state===$n)return xl(o);h.state===wl?(h.state=Pn,h.timer.stop(),h.on.call("interrupt",t,t.__data__,h.index,h.group),delete r[c]):+c<e&&(h.state=Pn,h.timer.stop(),h.on.call("cancel",t,t.__data__,h.index,h.group),delete r[c])}if(xl(function(){i.state===$n&&(i.state=wl,i.timer.restart(s,i.delay,i.time),s(l))}),i.state=ps,i.on.call("start",t,t.__data__,i.index,i.group),i.state===ps){for(i.state=$n,n=new Array(d=i.tween.length),c=0,u=-1;c<d;++c)(h=i.tween[c].value.call(t,t.__data__,i.index,i.group))&&(n[++u]=h);n.length=u+1}}function s(l){for(var c=l<i.duration?i.ease.call(null,l/i.duration):(i.timer.restart(A),i.state=vs,1),u=-1,d=n.length;++u<d;)n[u].call(t,c);i.state===vs&&(i.on.call("end",t,t.__data__,i.index,i.group),A())}function A(){i.state=Pn,i.timer.stop(),delete r[e];for(var l in r)return;delete t.__transition}}function zp(t,e){var i=t.__transition,r,n,a=!0,o;if(i){e=e==null?null:e+"";for(o in i){if((r=i[o]).name!==e){a=!1;continue}n=r.state>ps&&r.state<vs,r.state=Pn,r.timer.stop(),r.on.call(n?"interrupt":"cancel",t,t.__data__,r.index,r.group),delete i[o]}a&&delete t.__transition}}function Kp(t){return this.each(function(){zp(this,t)})}function Xp(t,e){var i,r;return function(){var n=Ht(this,t),a=n.tween;if(a!==i){r=i=a;for(var o=0,s=r.length;o<s;++o)if(r[o].name===e){r=r.slice(),r.splice(o,1);break}}n.tween=r}}function Gp(t,e,i){var r,n;if(typeof i!="function")throw new Error;return function(){var a=Ht(this,t),o=a.tween;if(o!==r){n=(r=o).slice();for(var s={name:e,value:i},A=0,l=n.length;A<l;++A)if(n[A].name===e){n[A]=s;break}A===l&&n.push(s)}a.tween=n}}function Yp(t,e){var i=this._id;if(t+="",arguments.length<2){for(var r=wt(this.node(),i).tween,n=0,a=r.length,o;n<a;++n)if((o=r[n]).name===t)return o.value;return null}return this.each((e==null?Xp:Gp)(i,t,e))}function AA(t,e,i){var r=t._id;return t.each(function(){var n=Ht(this,r);(n.value||(n.value={}))[e]=i.apply(this,arguments)}),function(n){return wt(n,r).value[e]}}function Hu(t,e){var i;return(typeof e=="number"?mt:e instanceof yi?ia:(i=yi(e))?(e=i,ia):Eu)(t,e)}function Vp(t){return function(){this.removeAttribute(t)}}function Wp(t){return function(){this.removeAttributeNS(t.space,t.local)}}function Jp(t,e,i){var r,n=i+"",a;return function(){var o=this.getAttribute(t);return o===n?null:o===r?a:a=e(r=o,i)}}function jp(t,e,i){var r,n=i+"",a;return function(){var o=this.getAttributeNS(t.space,t.local);return o===n?null:o===r?a:a=e(r=o,i)}}function Zp(t,e,i){var r,n,a;return function(){var o,s=i(this),A;return s==null?void this.removeAttribute(t):(o=this.getAttribute(t),A=s+"",o===A?null:o===r&&A===n?a:(n=A,a=e(r=o,s)))}}function qp(t,e,i){var r,n,a;return function(){var o,s=i(this),A;return s==null?void this.removeAttributeNS(t.space,t.local):(o=this.getAttributeNS(t.space,t.local),A=s+"",o===A?null:o===r&&A===n?a:(n=A,a=e(r=o,s)))}}function ev(t,e){var i=Ia(t),r=i==="transform"?Np:Hu;return this.attrTween(t,typeof e=="function"?(i.local?qp:Zp)(i,r,AA(this,"attr."+t,e)):e==null?(i.local?Wp:Vp)(i):(i.local?jp:Jp)(i,r,e))}function tv(t,e){return function(i){this.setAttribute(t,e.call(this,i))}}function iv(t,e){return function(i){this.setAttributeNS(t.space,t.local,e.call(this,i))}}function rv(t,e){var i,r;function n(){var a=e.apply(this,arguments);return a!==r&&(i=(r=a)&&iv(t,a)),i}return n._value=e,n}function nv(t,e){var i,r;function n(){var a=e.apply(this,arguments);return a!==r&&(i=(r=a)&&tv(t,a)),i}return n._value=e,n}function av(t,e){var i="attr."+t;if(arguments.length<2)return(i=this.tween(i))&&i._value;if(e==null)return this.tween(i,null);if(typeof e!="function")throw new Error;var r=Ia(t);return this.tween(i,(r.local?rv:nv)(r,e))}function ov(t,e){return function(){sA(this,t).delay=+e.apply(this,arguments)}}function sv(t,e){return e=+e,function(){sA(this,t).delay=e}}function Av(t){var e=this._id;return arguments.length?this.each((typeof t=="function"?ov:sv)(e,t)):wt(this.node(),e).delay}function lv(t,e){return function(){Ht(this,t).duration=+e.apply(this,arguments)}}function cv(t,e){return e=+e,function(){Ht(this,t).duration=e}}function uv(t){var e=this._id;return arguments.length?this.each((typeof t=="function"?lv:cv)(e,t)):wt(this.node(),e).duration}function dv(t,e){if(typeof e!="function")throw new Error;return function(){Ht(this,t).ease=e}}function hv(t){var e=this._id;return arguments.length?this.each(dv(e,t)):wt(this.node(),e).ease}function gv(t,e){return function(){var i=e.apply(this,arguments);if(typeof i!="function")throw new Error;Ht(this,t).ease=i}}function fv(t){if(typeof t!="function")throw new Error;return this.each(gv(this._id,t))}function pv(t){typeof t!="function"&&(t=gu(t));for(var e=this._groups,i=e.length,r=new Array(i),n=0;n<i;++n)for(var a=e[n],o=a.length,s=r[n]=[],A,l=0;l<o;++l)(A=a[l])&&t.call(A,A.__data__,l,a)&&s.push(A);return new Pt(r,this._parents,this._name,this._id)}function vv(t){if(t._id!==this._id)throw new Error;for(var e=this._groups,i=t._groups,r=e.length,n=i.length,a=Math.min(r,n),o=new Array(r),s=0;s<a;++s)for(var A=e[s],l=i[s],c=A.length,u=o[s]=new Array(c),d,h=0;h<c;++h)(d=A[h]||l[h])&&(u[h]=d);for(;s<r;++s)o[s]=e[s];return new Pt(o,this._parents,this._name,this._id)}function mv(t){return(t+"").trim().split(/^|\s+/).every(function(e){var i=e.indexOf(".");return i>=0&&(e=e.slice(0,i)),!e||e==="start"})}function xv(t,e,i){var r,n,a=mv(e)?sA:Ht;return function(){var o=a(this,t),s=o.on;s!==r&&(n=(r=s).copy()).on(e,i),o.on=n}}function Bv(t,e){var i=this._id;return arguments.length<2?wt(this.node(),i).on.on(t):this.each(xv(i,t,e))}function wv(t){return function(){var e=this.parentNode;for(var i in this.__transition)if(+i!==t)return;e&&e.removeChild(this)}}function bv(){return this.on("end.remove",wv(this._id))}function yv(t){var e=this._name,i=this._id;typeof t!="function"&&(t=tA(t));for(var r=this._groups,n=r.length,a=new Array(n),o=0;o<n;++o)for(var s=r[o],A=s.length,l=a[o]=new Array(A),c,u,d=0;d<A;++d)(c=s[d])&&(u=t.call(c,c.__data__,d,s))&&("__data__"in c&&(u.__data__=c.__data__),l[d]=u,ka(l[d],e,i,d,l,wt(c,i)));return new Pt(a,this._parents,e,i)}function _v(t){var e=this._name,i=this._id;typeof t!="function"&&(t=hu(t));for(var r=this._groups,n=r.length,a=[],o=[],s=0;s<n;++s)for(var A=r[s],l=A.length,c,u=0;u<l;++u)if(c=A[u]){for(var d=t.call(c,c.__data__,u,A),h,g=wt(c,i),f=0,p=d.length;f<p;++f)(h=d[f])&&ka(h,e,i,f,d,g);a.push(d),o.push(c)}return new Pt(a,o,e,i)}var Cv=or.prototype.constructor;function Tv(){return new Cv(this._groups,this._parents)}function Ev(t,e){var i,r,n;return function(){var a=Zi(this,t),o=(this.style.removeProperty(t),Zi(this,t));return a===o?null:a===i&&o===r?n:n=e(i=a,r=o)}}function Nu(t){return function(){this.style.removeProperty(t)}}function Qv(t,e,i){var r,n=i+"",a;return function(){var o=Zi(this,t);return o===n?null:o===r?a:a=e(r=o,i)}}function Fv(t,e,i){var r,n,a;return function(){var o=Zi(this,t),s=i(this),A=s+"";return s==null&&(A=s=(this.style.removeProperty(t),Zi(this,t))),o===A?null:o===r&&A===n?a:(n=A,a=e(r=o,s))}}function Uv(t,e){var i,r,n,a="style."+e,o="end."+a,s;return function(){var A=Ht(this,t),l=A.on,c=A.value[a]==null?s||(s=Nu(e)):void 0;(l!==i||n!==c)&&(r=(i=l).copy()).on(o,n=c),A.on=r}}function Iv(t,e,i){var r=(t+="")=="transform"?Hp:Hu;return e==null?this.styleTween(t,Ev(t,r)).on("end.style."+t,Nu(t)):typeof e=="function"?this.styleTween(t,Fv(t,r,AA(this,"style."+t,e))).each(Uv(this._id,t)):this.styleTween(t,Qv(t,r,e),i).on("end.style."+t,null)}function Sv(t,e,i){return function(r){this.style.setProperty(t,e.call(this,r),i)}}function kv(t,e,i){var r,n;function a(){var o=e.apply(this,arguments);return o!==n&&(r=(n=o)&&Sv(t,o,i)),r}return a._value=e,a}function Hv(t,e,i){var r="style."+(t+="");if(arguments.length<2)return(r=this.tween(r))&&r._value;if(e==null)return this.tween(r,null);if(typeof e!="function")throw new Error;return this.tween(r,kv(t,e,i??""))}function Nv(t){return function(){this.textContent=t}}function Lv(t){return function(){var e=t(this);this.textContent=e??""}}function Mv(t){return this.tween("text",typeof t=="function"?Lv(AA(this,"text",t)):Nv(t==null?"":t+""))}function Rv(t){return function(e){this.textContent=t.call(this,e)}}function Dv(t){var e,i;function r(){var n=t.apply(this,arguments);return n!==i&&(e=(i=n)&&Rv(n)),e}return r._value=t,r}function $v(t){var e="text";if(arguments.length<1)return(e=this.tween(e))&&e._value;if(t==null)return this.tween(e,null);if(typeof t!="function")throw new Error;return this.tween(e,Dv(t))}function Pv(){for(var t=this._name,e=this._id,i=Mu(),r=this._groups,n=r.length,a=0;a<n;++a)for(var o=r[a],s=o.length,A,l=0;l<s;++l)if(A=o[l]){var c=wt(A,e);ka(A,t,i,l,o,{time:c.time+c.delay+c.duration,delay:0,duration:c.duration,ease:c.ease})}return new Pt(r,this._parents,t,i)}function Ov(){var t,e,i=this,r=i._id,n=i.size();return new Promise(function(a,o){var s={value:o},A={value:function(){--n===0&&a()}};i.each(function(){var l=Ht(this,r),c=l.on;c!==t&&(e=(t=c).copy(),e._.cancel.push(s),e._.interrupt.push(s),e._.end.push(A)),l.on=e}),n===0&&a()})}var zv=0;function Pt(t,e,i,r){this._groups=t,this._parents=e,this._name=i,this._id=r}function Lu(t){return or().transition(t)}function Mu(){return++zv}var Lt=or.prototype;Pt.prototype=Lu.prototype={constructor:Pt,select:yv,selectAll:_v,selectChild:Lt.selectChild,selectChildren:Lt.selectChildren,filter:pv,merge:vv,selection:Tv,transition:Pv,call:Lt.call,nodes:Lt.nodes,node:Lt.node,size:Lt.size,empty:Lt.empty,each:Lt.each,on:Bv,attr:ev,attrTween:av,style:Iv,styleTween:Hv,text:Mv,textTween:$v,remove:bv,tween:Yp,delay:Av,duration:uv,ease:hv,easeVarying:fv,end:Ov,[Symbol.iterator]:Lt[Symbol.iterator]};const Kv=t=>+t;function Xv(t){return((t*=2)<=1?t*t*t:(t-=2)*t*t+2)/2}var Gv={time:null,delay:0,duration:250,ease:Xv};function Yv(t,e){for(var i;!(i=t.__transition)||!(i=i[e]);)if(!(t=t.parentNode))throw new Error(`transition ${e} not found`);return i}function Vv(t){var e,i;t instanceof Pt?(e=t._id,t=t._name):(e=Mu(),(i=Gv).time=oA(),t=t==null?null:t+"");for(var r=this._groups,n=r.length,a=0;a<n;++a)for(var o=r[a],s=o.length,A,l=0;l<s;++l)(A=o[l])&&ka(A,t,e,l,o,i||Yv(A,e));return new Pt(r,this._parents,t,e)}or.prototype.interrupt=Kp;or.prototype.transition=Vv;function Wv(t){var e=t.__brush;return e?e.dim.output(e.selection):null}const ms=Math.PI,xs=2*ms,ui=1e-6,Jv=xs-ui;function Ru(t){this._+=t[0];for(let e=1,i=t.length;e<i;++e)this._+=arguments[e]+t[e]}function jv(t){let e=Math.floor(t);if(!(e>=0))throw new Error(`invalid digits: ${t}`);if(e>15)return Ru;const i=10**e;return function(r){this._+=r[0];for(let n=1,a=r.length;n<a;++n)this._+=Math.round(arguments[n]*i)/i+r[n]}}let Zv=class{constructor(e){this._x0=this._y0=this._x1=this._y1=null,this._="",this._append=e==null?Ru:jv(e)}moveTo(e,i){this._append`M${this._x0=this._x1=+e},${this._y0=this._y1=+i}`}closePath(){this._x1!==null&&(this._x1=this._x0,this._y1=this._y0,this._append`Z`)}lineTo(e,i){this._append`L${this._x1=+e},${this._y1=+i}`}quadraticCurveTo(e,i,r,n){this._append`Q${+e},${+i},${this._x1=+r},${this._y1=+n}`}bezierCurveTo(e,i,r,n,a,o){this._append`C${+e},${+i},${+r},${+n},${this._x1=+a},${this._y1=+o}`}arcTo(e,i,r,n,a){if(e=+e,i=+i,r=+r,n=+n,a=+a,a<0)throw new Error(`negative radius: ${a}`);let o=this._x1,s=this._y1,A=r-e,l=n-i,c=o-e,u=s-i,d=c*c+u*u;if(this._x1===null)this._append`M${this._x1=e},${this._y1=i}`;else if(d>ui)if(!(Math.abs(u*A-l*c)>ui)||!a)this._append`L${this._x1=e},${this._y1=i}`;else{let h=r-o,g=n-s,f=A*A+l*l,p=h*h+g*g,v=Math.sqrt(f),m=Math.sqrt(d),w=a*Math.tan((ms-Math.acos((f+d-p)/(2*v*m)))/2),x=w/m,_=w/v;Math.abs(x-1)>ui&&this._append`L${e+x*c},${i+x*u}`,this._append`A${a},${a},0,0,${+(u*h>c*g)},${this._x1=e+_*A},${this._y1=i+_*l}`}}arc(e,i,r,n,a,o){if(e=+e,i=+i,r=+r,o=!!o,r<0)throw new Error(`negative radius: ${r}`);let s=r*Math.cos(n),A=r*Math.sin(n),l=e+s,c=i+A,u=1^o,d=o?n-a:a-n;this._x1===null?this._append`M${l},${c}`:(Math.abs(this._x1-l)>ui||Math.abs(this._y1-c)>ui)&&this._append`L${l},${c}`,r&&(d<0&&(d=d%xs+xs),d>Jv?this._append`A${r},${r},0,1,${u},${e-s},${i-A}A${r},${r},0,1,${u},${this._x1=l},${this._y1=c}`:d>ui&&this._append`A${r},${r},0,${+(d>=ms)},${u},${this._x1=e+r*Math.cos(a)},${this._y1=i+r*Math.sin(a)}`)}rect(e,i,r,n){this._append`M${this._x0=this._x1=+e},${this._y0=this._y1=+i}h${r=+r}v${+n}h${-r}Z`}toString(){return this._}};var bl={},fo={},po=34,pr=10,vo=13;function Du(t){return new Function("d","return {"+t.map(function(e,i){return JSON.stringify(e)+": d["+i+'] || ""'}).join(",")+"}")}function qv(t,e){var i=Du(t);return function(r,n){return e(i(r),n,t)}}function yl(t){var e=Object.create(null),i=[];return t.forEach(function(r){for(var n in r)n in e||i.push(e[n]=n)}),i}function Ze(t,e){var i=t+"",r=i.length;return r<e?new Array(e-r+1).join(0)+i:i}function em(t){return t<0?"-"+Ze(-t,6):t>9999?"+"+Ze(t,6):Ze(t,4)}function tm(t){var e=t.getUTCHours(),i=t.getUTCMinutes(),r=t.getUTCSeconds(),n=t.getUTCMilliseconds();return isNaN(t)?"Invalid Date":em(t.getUTCFullYear())+"-"+Ze(t.getUTCMonth()+1,2)+"-"+Ze(t.getUTCDate(),2)+(n?"T"+Ze(e,2)+":"+Ze(i,2)+":"+Ze(r,2)+"."+Ze(n,3)+"Z":r?"T"+Ze(e,2)+":"+Ze(i,2)+":"+Ze(r,2)+"Z":i||e?"T"+Ze(e,2)+":"+Ze(i,2)+"Z":"")}function $u(t){var e=new RegExp('["'+t+`
\r]`),i=t.charCodeAt(0);function r(u,d){var h,g,f=n(u,function(p,v){if(h)return h(p,v-1);g=p,h=d?qv(p,d):Du(p)});return f.columns=g||[],f}function n(u,d){var h=[],g=u.length,f=0,p=0,v,m=g<=0,w=!1;u.charCodeAt(g-1)===pr&&--g,u.charCodeAt(g-1)===vo&&--g;function x(){if(m)return fo;if(w)return w=!1,bl;var b,E=f,U;if(u.charCodeAt(E)===po){for(;f++<g&&u.charCodeAt(f)!==po||u.charCodeAt(++f)===po;);return(b=f)>=g?m=!0:(U=u.charCodeAt(f++))===pr?w=!0:U===vo&&(w=!0,u.charCodeAt(f)===pr&&++f),u.slice(E+1,b-1).replace(/""/g,'"')}for(;f<g;){if((U=u.charCodeAt(b=f++))===pr)w=!0;else if(U===vo)w=!0,u.charCodeAt(f)===pr&&++f;else if(U!==i)continue;return u.slice(E,b)}return m=!0,u.slice(E,g)}for(;(v=x())!==fo;){for(var _=[];v!==bl&&v!==fo;)_.push(v),v=x();d&&(_=d(_,p++))==null||h.push(_)}return h}function a(u,d){return u.map(function(h){return d.map(function(g){return c(h[g])}).join(t)})}function o(u,d){return d==null&&(d=yl(u)),[d.map(c).join(t)].concat(a(u,d)).join(`
`)}function s(u,d){return d==null&&(d=yl(u)),a(u,d).join(`
`)}function A(u){return u.map(l).join(`
`)}function l(u){return u.map(c).join(t)}function c(u){return u==null?"":u instanceof Date?tm(u):e.test(u+="")?'"'+u.replace(/"/g,'""')+'"':u}return{parse:r,parseRows:n,format:o,formatBody:s,formatRows:A,formatRow:l,formatValue:c}}var Pu=$u(","),im=Pu.parse,rm=Pu.parseRows,Ou=$u("	"),nm=Ou.parse,am=Ou.parseRows;function om(t){return Math.abs(t=Math.round(t))>=1e21?t.toLocaleString("en").replace(/,/g,""):t.toString(10)}function oa(t,e){if((i=(t=e?t.toExponential(e-1):t.toExponential()).indexOf("e"))<0)return null;var i,r=t.slice(0,i);return[r.length>1?r[0]+r.slice(2):r,+t.slice(i+1)]}function er(t){return t=oa(Math.abs(t)),t?t[1]:NaN}function sm(t,e){return function(i,r){for(var n=i.length,a=[],o=0,s=t[0],A=0;n>0&&s>0&&(A+s+1>r&&(s=Math.max(1,r-A)),a.push(i.substring(n-=s,n+s)),!((A+=s+1)>r));)s=t[o=(o+1)%t.length];return a.reverse().join(e)}}function Am(t){return function(e){return e.replace(/[0-9]/g,function(i){return t[+i]})}}var lm=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function Yr(t){if(!(e=lm.exec(t)))throw new Error("invalid format: "+t);var e;return new lA({fill:e[1],align:e[2],sign:e[3],symbol:e[4],zero:e[5],width:e[6],comma:e[7],precision:e[8]&&e[8].slice(1),trim:e[9],type:e[10]})}Yr.prototype=lA.prototype;function lA(t){this.fill=t.fill===void 0?" ":t.fill+"",this.align=t.align===void 0?">":t.align+"",this.sign=t.sign===void 0?"-":t.sign+"",this.symbol=t.symbol===void 0?"":t.symbol+"",this.zero=!!t.zero,this.width=t.width===void 0?void 0:+t.width,this.comma=!!t.comma,this.precision=t.precision===void 0?void 0:+t.precision,this.trim=!!t.trim,this.type=t.type===void 0?"":t.type+""}lA.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===void 0?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision===void 0?"":"."+Math.max(0,this.precision|0))+(this.trim?"~":"")+this.type};function cm(t){e:for(var e=t.length,i=1,r=-1,n;i<e;++i)switch(t[i]){case".":r=n=i;break;case"0":r===0&&(r=i),n=i;break;default:if(!+t[i])break e;r>0&&(r=0);break}return r>0?t.slice(0,r)+t.slice(n+1):t}var zu;function um(t,e){var i=oa(t,e);if(!i)return t+"";var r=i[0],n=i[1],a=n-(zu=Math.max(-8,Math.min(8,Math.floor(n/3)))*3)+1,o=r.length;return a===o?r:a>o?r+new Array(a-o+1).join("0"):a>0?r.slice(0,a)+"."+r.slice(a):"0."+new Array(1-a).join("0")+oa(t,Math.max(0,e+a-1))[0]}function _l(t,e){var i=oa(t,e);if(!i)return t+"";var r=i[0],n=i[1];return n<0?"0."+new Array(-n).join("0")+r:r.length>n+1?r.slice(0,n+1)+"."+r.slice(n+1):r+new Array(n-r.length+2).join("0")}const Cl={"%":(t,e)=>(t*100).toFixed(e),b:t=>Math.round(t).toString(2),c:t=>t+"",d:om,e:(t,e)=>t.toExponential(e),f:(t,e)=>t.toFixed(e),g:(t,e)=>t.toPrecision(e),o:t=>Math.round(t).toString(8),p:(t,e)=>_l(t*100,e),r:_l,s:um,X:t=>Math.round(t).toString(16).toUpperCase(),x:t=>Math.round(t).toString(16)};function Tl(t){return t}var El=Array.prototype.map,Ql=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function dm(t){var e=t.grouping===void 0||t.thousands===void 0?Tl:sm(El.call(t.grouping,Number),t.thousands+""),i=t.currency===void 0?"":t.currency[0]+"",r=t.currency===void 0?"":t.currency[1]+"",n=t.decimal===void 0?".":t.decimal+"",a=t.numerals===void 0?Tl:Am(El.call(t.numerals,String)),o=t.percent===void 0?"%":t.percent+"",s=t.minus===void 0?"−":t.minus+"",A=t.nan===void 0?"NaN":t.nan+"";function l(u){u=Yr(u);var d=u.fill,h=u.align,g=u.sign,f=u.symbol,p=u.zero,v=u.width,m=u.comma,w=u.precision,x=u.trim,_=u.type;_==="n"?(m=!0,_="g"):Cl[_]||(w===void 0&&(w=12),x=!0,_="g"),(p||d==="0"&&h==="=")&&(p=!0,d="0",h="=");var b=f==="$"?i:f==="#"&&/[boxX]/.test(_)?"0"+_.toLowerCase():"",E=f==="$"?r:/[%p]/.test(_)?o:"",U=Cl[_],H=/[defgprs%]/.test(_);w=w===void 0?6:/[gprs]/.test(_)?Math.max(1,Math.min(21,w)):Math.max(0,Math.min(20,w));function T(y){var Q=b,B=E,C,I,S;if(_==="c")B=U(y)+B,y="";else{y=+y;var k=y<0||1/y<0;if(y=isNaN(y)?A:U(Math.abs(y),w),x&&(y=cm(y)),k&&+y==0&&g!=="+"&&(k=!1),Q=(k?g==="("?g:s:g==="-"||g==="("?"":g)+Q,B=(_==="s"?Ql[8+zu/3]:"")+B+(k&&g==="("?")":""),H){for(C=-1,I=y.length;++C<I;)if(S=y.charCodeAt(C),48>S||S>57){B=(S===46?n+y.slice(C+1):y.slice(C))+B,y=y.slice(0,C);break}}}m&&!p&&(y=e(y,1/0));var F=Q.length+y.length+B.length,N=F<v?new Array(v-F+1).join(d):"";switch(m&&p&&(y=e(N+y,N.length?v-B.length:1/0),N=""),h){case"<":y=Q+y+B+N;break;case"=":y=Q+N+y+B;break;case"^":y=N.slice(0,F=N.length>>1)+Q+y+B+N.slice(F);break;default:y=N+Q+y+B;break}return a(y)}return T.toString=function(){return u+""},T}function c(u,d){var h=l((u=Yr(u),u.type="f",u)),g=Math.max(-8,Math.min(8,Math.floor(er(d)/3)))*3,f=Math.pow(10,-g),p=Ql[8+g/3];return function(v){return h(f*v)+p}}return{format:l,formatPrefix:c}}var vn,Vr,Ku;hm({thousands:",",grouping:[3],currency:["$",""]});function hm(t){return vn=dm(t),Vr=vn.format,Ku=vn.formatPrefix,vn}function gm(t){return Math.max(0,-er(Math.abs(t)))}function fm(t,e){return Math.max(0,Math.max(-8,Math.min(8,Math.floor(er(e)/3)))*3-er(Math.abs(t)))}function pm(t,e){return t=Math.abs(t),e=Math.abs(e)-t,Math.max(0,er(e)-er(t))+1}function sr(t,e){switch(arguments.length){case 0:break;case 1:this.range(t);break;default:this.range(e).domain(t);break}return this}const Fl=Symbol("implicit");function Xu(){var t=new rl,e=[],i=[],r=Fl;function n(a){let o=t.get(a);if(o===void 0){if(r!==Fl)return r;t.set(a,o=e.push(a)-1)}return i[o%i.length]}return n.domain=function(a){if(!arguments.length)return e.slice();e=[],t=new rl;for(const o of a)t.has(o)||t.set(o,e.push(o)-1);return n},n.range=function(a){return arguments.length?(i=Array.from(a),n):i.slice()},n.unknown=function(a){return arguments.length?(r=a,n):r},n.copy=function(){return Xu(e,i).unknown(r)},sr.apply(n,arguments),n}function vm(t){return function(){return t}}function mm(t){return+t}var Ul=[0,1];function Di(t){return t}function Bs(t,e){return(e-=t=+t)?function(i){return(i-t)/e}:vm(isNaN(e)?NaN:.5)}function xm(t,e){var i;return t>e&&(i=t,t=e,e=i),function(r){return Math.max(t,Math.min(e,r))}}function Bm(t,e,i){var r=t[0],n=t[1],a=e[0],o=e[1];return n<r?(r=Bs(n,r),a=i(o,a)):(r=Bs(r,n),a=i(a,o)),function(s){return a(r(s))}}function wm(t,e,i){var r=Math.min(t.length,e.length)-1,n=new Array(r),a=new Array(r),o=-1;for(t[r]<t[0]&&(t=t.slice().reverse(),e=e.slice().reverse());++o<r;)n[o]=Bs(t[o],t[o+1]),a[o]=i(e[o],e[o+1]);return function(s){var A=ng(t,s,1,r)-1;return a[A](n[A](s))}}function Ha(t,e){return e.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown())}function cA(){var t=Ul,e=Ul,i=rn,r,n,a,o=Di,s,A,l;function c(){var d=Math.min(t.length,e.length);return o!==Di&&(o=xm(t[0],t[d-1])),s=d>2?wm:Bm,A=l=null,u}function u(d){return d==null||isNaN(d=+d)?a:(A||(A=s(t.map(r),e,i)))(r(o(d)))}return u.invert=function(d){return o(n((l||(l=s(e,t.map(r),mt)))(d)))},u.domain=function(d){return arguments.length?(t=Array.from(d,mm),c()):t.slice()},u.range=function(d){return arguments.length?(e=Array.from(d),c()):e.slice()},u.rangeRound=function(d){return e=Array.from(d),i=Ip,c()},u.clamp=function(d){return arguments.length?(o=d?!0:Di,c()):o!==Di},u.interpolate=function(d){return arguments.length?(i=d,c()):i},u.unknown=function(d){return arguments.length?(a=d,u):a},function(d,h){return r=d,n=h,c()}}function Gu(){return cA()(Di,Di)}function bm(t,e,i,r){var n=ss(t,e,i),a;switch(r=Yr(r??",f"),r.type){case"s":{var o=Math.max(Math.abs(t),Math.abs(e));return r.precision==null&&!isNaN(a=fm(n,o))&&(r.precision=a),Ku(r,o)}case"":case"e":case"g":case"p":case"r":{r.precision==null&&!isNaN(a=pm(n,Math.max(Math.abs(t),Math.abs(e))))&&(r.precision=a-(r.type==="e"));break}case"f":case"%":{r.precision==null&&!isNaN(a=gm(n))&&(r.precision=a-(r.type==="%")*2);break}}return Vr(r)}function Yu(t){var e=t.domain;return t.ticks=function(i){var r=e();return as(r[0],r[r.length-1],i??10)},t.tickFormat=function(i,r){var n=e();return bm(n[0],n[n.length-1],i??10,r)},t.nice=function(i){i==null&&(i=10);var r=e(),n=0,a=r.length-1,o=r[n],s=r[a],A,l,c=10;for(s<o&&(l=o,o=s,s=l,l=n,n=a,a=l);c-- >0;){if(l=os(o,s,i),l===A)return r[n]=o,r[a]=s,e(r);if(l>0)o=Math.floor(o/l)*l,s=Math.ceil(s/l)*l;else if(l<0)o=Math.ceil(o*l)/l,s=Math.floor(s*l)/l;else break;A=l}return t},t}function sa(){var t=Gu();return t.copy=function(){return Ha(t,sa())},sr.apply(t,arguments),Yu(t)}function Vu(t,e){t=t.slice();var i=0,r=t.length-1,n=t[i],a=t[r],o;return a<n&&(o=i,i=r,r=o,o=n,n=a,a=o),t[i]=e.floor(n),t[r]=e.ceil(a),t}function Il(t){return Math.log(t)}function Sl(t){return Math.exp(t)}function ym(t){return-Math.log(-t)}function _m(t){return-Math.exp(-t)}function Cm(t){return isFinite(t)?+("1e"+t):t<0?0:t}function Tm(t){return t===10?Cm:t===Math.E?Math.exp:e=>Math.pow(t,e)}function Em(t){return t===Math.E?Math.log:t===10&&Math.log10||t===2&&Math.log2||(t=Math.log(t),e=>Math.log(e)/t)}function kl(t){return(e,i)=>-t(-e,i)}function Qm(t){const e=t(Il,Sl),i=e.domain;let r=10,n,a;function o(){return n=Em(r),a=Tm(r),i()[0]<0?(n=kl(n),a=kl(a),t(ym,_m)):t(Il,Sl),e}return e.base=function(s){return arguments.length?(r=+s,o()):r},e.domain=function(s){return arguments.length?(i(s),o()):i()},e.ticks=s=>{const A=i();let l=A[0],c=A[A.length-1];const u=c<l;u&&([l,c]=[c,l]);let d=n(l),h=n(c),g,f;const p=s==null?10:+s;let v=[];if(!(r%1)&&h-d<p){if(d=Math.floor(d),h=Math.ceil(h),l>0){for(;d<=h;++d)for(g=1;g<r;++g)if(f=d<0?g/a(-d):g*a(d),!(f<l)){if(f>c)break;v.push(f)}}else for(;d<=h;++d)for(g=r-1;g>=1;--g)if(f=d>0?g/a(-d):g*a(d),!(f<l)){if(f>c)break;v.push(f)}v.length*2<p&&(v=as(l,c,p))}else v=as(d,h,Math.min(h-d,p)).map(a);return u?v.reverse():v},e.tickFormat=(s,A)=>{if(s==null&&(s=10),A==null&&(A=r===10?"s":","),typeof A!="function"&&(!(r%1)&&(A=Yr(A)).precision==null&&(A.trim=!0),A=Vr(A)),s===1/0)return A;const l=Math.max(1,r*s/e.ticks().length);return c=>{let u=c/a(Math.round(n(c)));return u*r<r-.5&&(u*=r),u<=l?A(c):""}},e.nice=()=>i(Vu(i(),{floor:s=>a(Math.floor(n(s))),ceil:s=>a(Math.ceil(n(s)))})),e}function Wu(){const t=Qm(cA()).domain([1,10]);return t.copy=()=>Ha(t,Wu()).base(t.base()),sr.apply(t,arguments),t}function Hl(t){return function(e){return Math.sign(e)*Math.log1p(Math.abs(e/t))}}function Nl(t){return function(e){return Math.sign(e)*Math.expm1(Math.abs(e))*t}}function Fm(t){var e=1,i=t(Hl(e),Nl(e));return i.constant=function(r){return arguments.length?t(Hl(e=+r),Nl(e)):e},Yu(i)}function Ju(){var t=Fm(cA());return t.copy=function(){return Ha(t,Ju()).constant(t.constant())},sr.apply(t,arguments)}const mo=new Date,xo=new Date;function Ne(t,e,i,r){function n(a){return t(a=arguments.length===0?new Date:new Date(+a)),a}return n.floor=a=>(t(a=new Date(+a)),a),n.ceil=a=>(t(a=new Date(a-1)),e(a,1),t(a),a),n.round=a=>{const o=n(a),s=n.ceil(a);return a-o<s-a?o:s},n.offset=(a,o)=>(e(a=new Date(+a),o==null?1:Math.floor(o)),a),n.range=(a,o,s)=>{const A=[];if(a=n.ceil(a),s=s==null?1:Math.floor(s),!(a<o)||!(s>0))return A;let l;do A.push(l=new Date(+a)),e(a,s),t(a);while(l<a&&a<o);return A},n.filter=a=>Ne(o=>{if(o>=o)for(;t(o),!a(o);)o.setTime(o-1)},(o,s)=>{if(o>=o)if(s<0)for(;++s<=0;)for(;e(o,-1),!a(o););else for(;--s>=0;)for(;e(o,1),!a(o););}),i&&(n.count=(a,o)=>(mo.setTime(+a),xo.setTime(+o),t(mo),t(xo),Math.floor(i(mo,xo))),n.every=a=>(a=Math.floor(a),!isFinite(a)||!(a>0)?null:a>1?n.filter(r?o=>r(o)%a===0:o=>n.count(0,o)%a===0):n)),n}const Aa=Ne(()=>{},(t,e)=>{t.setTime(+t+e)},(t,e)=>e-t);Aa.every=t=>(t=Math.floor(t),!isFinite(t)||!(t>0)?null:t>1?Ne(e=>{e.setTime(Math.floor(e/t)*t)},(e,i)=>{e.setTime(+e+i*t)},(e,i)=>(i-e)/t):Aa);Aa.range;const Rt=1e3,ut=Rt*60,Dt=ut*60,Ot=Dt*24,uA=Ot*7,Ll=Ot*30,Bo=Ot*365,mi=Ne(t=>{t.setTime(t-t.getMilliseconds())},(t,e)=>{t.setTime(+t+e*Rt)},(t,e)=>(e-t)/Rt,t=>t.getUTCSeconds());mi.range;const dA=Ne(t=>{t.setTime(t-t.getMilliseconds()-t.getSeconds()*Rt)},(t,e)=>{t.setTime(+t+e*ut)},(t,e)=>(e-t)/ut,t=>t.getMinutes());dA.range;const hA=Ne(t=>{t.setUTCSeconds(0,0)},(t,e)=>{t.setTime(+t+e*ut)},(t,e)=>(e-t)/ut,t=>t.getUTCMinutes());hA.range;const gA=Ne(t=>{t.setTime(t-t.getMilliseconds()-t.getSeconds()*Rt-t.getMinutes()*ut)},(t,e)=>{t.setTime(+t+e*Dt)},(t,e)=>(e-t)/Dt,t=>t.getHours());gA.range;const fA=Ne(t=>{t.setUTCMinutes(0,0,0)},(t,e)=>{t.setTime(+t+e*Dt)},(t,e)=>(e-t)/Dt,t=>t.getUTCHours());fA.range;const nn=Ne(t=>t.setHours(0,0,0,0),(t,e)=>t.setDate(t.getDate()+e),(t,e)=>(e-t-(e.getTimezoneOffset()-t.getTimezoneOffset())*ut)/Ot,t=>t.getDate()-1);nn.range;const Na=Ne(t=>{t.setUTCHours(0,0,0,0)},(t,e)=>{t.setUTCDate(t.getUTCDate()+e)},(t,e)=>(e-t)/Ot,t=>t.getUTCDate()-1);Na.range;const ju=Ne(t=>{t.setUTCHours(0,0,0,0)},(t,e)=>{t.setUTCDate(t.getUTCDate()+e)},(t,e)=>(e-t)/Ot,t=>Math.floor(t/Ot));ju.range;function Ei(t){return Ne(e=>{e.setDate(e.getDate()-(e.getDay()+7-t)%7),e.setHours(0,0,0,0)},(e,i)=>{e.setDate(e.getDate()+i*7)},(e,i)=>(i-e-(i.getTimezoneOffset()-e.getTimezoneOffset())*ut)/uA)}const La=Ei(0),la=Ei(1),Um=Ei(2),Im=Ei(3),tr=Ei(4),Sm=Ei(5),km=Ei(6);La.range;la.range;Um.range;Im.range;tr.range;Sm.range;km.range;function Qi(t){return Ne(e=>{e.setUTCDate(e.getUTCDate()-(e.getUTCDay()+7-t)%7),e.setUTCHours(0,0,0,0)},(e,i)=>{e.setUTCDate(e.getUTCDate()+i*7)},(e,i)=>(i-e)/uA)}const Ma=Qi(0),ca=Qi(1),Hm=Qi(2),Nm=Qi(3),ir=Qi(4),Lm=Qi(5),Mm=Qi(6);Ma.range;ca.range;Hm.range;Nm.range;ir.range;Lm.range;Mm.range;const pA=Ne(t=>{t.setDate(1),t.setHours(0,0,0,0)},(t,e)=>{t.setMonth(t.getMonth()+e)},(t,e)=>e.getMonth()-t.getMonth()+(e.getFullYear()-t.getFullYear())*12,t=>t.getMonth());pA.range;const vA=Ne(t=>{t.setUTCDate(1),t.setUTCHours(0,0,0,0)},(t,e)=>{t.setUTCMonth(t.getUTCMonth()+e)},(t,e)=>e.getUTCMonth()-t.getUTCMonth()+(e.getUTCFullYear()-t.getUTCFullYear())*12,t=>t.getUTCMonth());vA.range;const zt=Ne(t=>{t.setMonth(0,1),t.setHours(0,0,0,0)},(t,e)=>{t.setFullYear(t.getFullYear()+e)},(t,e)=>e.getFullYear()-t.getFullYear(),t=>t.getFullYear());zt.every=t=>!isFinite(t=Math.floor(t))||!(t>0)?null:Ne(e=>{e.setFullYear(Math.floor(e.getFullYear()/t)*t),e.setMonth(0,1),e.setHours(0,0,0,0)},(e,i)=>{e.setFullYear(e.getFullYear()+i*t)});zt.range;const Kt=Ne(t=>{t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0)},(t,e)=>{t.setUTCFullYear(t.getUTCFullYear()+e)},(t,e)=>e.getUTCFullYear()-t.getUTCFullYear(),t=>t.getUTCFullYear());Kt.every=t=>!isFinite(t=Math.floor(t))||!(t>0)?null:Ne(e=>{e.setUTCFullYear(Math.floor(e.getUTCFullYear()/t)*t),e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0)},(e,i)=>{e.setUTCFullYear(e.getUTCFullYear()+i*t)});Kt.range;function Zu(t,e,i,r,n,a){const o=[[mi,1,Rt],[mi,5,5*Rt],[mi,15,15*Rt],[mi,30,30*Rt],[a,1,ut],[a,5,5*ut],[a,15,15*ut],[a,30,30*ut],[n,1,Dt],[n,3,3*Dt],[n,6,6*Dt],[n,12,12*Dt],[r,1,Ot],[r,2,2*Ot],[i,1,uA],[e,1,Ll],[e,3,3*Ll],[t,1,Bo]];function s(l,c,u){const d=c<l;d&&([l,c]=[c,l]);const h=u&&typeof u.range=="function"?u:A(l,c,u),g=h?h.range(l,+c+1):[];return d?g.reverse():g}function A(l,c,u){const d=Math.abs(c-l)/u,h=qs(([,,p])=>p).right(o,d);if(h===o.length)return t.every(ss(l/Bo,c/Bo,u));if(h===0)return Aa.every(Math.max(ss(l,c,u),1));const[g,f]=o[d/o[h-1][2]<o[h][2]/d?h-1:h];return g.every(f)}return[s,A]}const[Rm,Dm]=Zu(Kt,vA,Ma,ju,fA,hA),[$m,Pm]=Zu(zt,pA,La,nn,gA,dA);function wo(t){if(0<=t.y&&t.y<100){var e=new Date(-1,t.m,t.d,t.H,t.M,t.S,t.L);return e.setFullYear(t.y),e}return new Date(t.y,t.m,t.d,t.H,t.M,t.S,t.L)}function bo(t){if(0<=t.y&&t.y<100){var e=new Date(Date.UTC(-1,t.m,t.d,t.H,t.M,t.S,t.L));return e.setUTCFullYear(t.y),e}return new Date(Date.UTC(t.y,t.m,t.d,t.H,t.M,t.S,t.L))}function vr(t,e,i){return{y:t,m:e,d:i,H:0,M:0,S:0,L:0}}function Om(t){var e=t.dateTime,i=t.date,r=t.time,n=t.periods,a=t.days,o=t.shortDays,s=t.months,A=t.shortMonths,l=mr(n),c=xr(n),u=mr(a),d=xr(a),h=mr(o),g=xr(o),f=mr(s),p=xr(s),v=mr(A),m=xr(A),w={a:k,A:F,b:N,B:D,c:null,d:Ol,e:Ol,f:u0,g:w0,G:y0,H:A0,I:l0,j:c0,L:qu,m:d0,M:h0,p:z,q:Y,Q:Xl,s:Gl,S:g0,u:f0,U:p0,V:v0,w:m0,W:x0,x:null,X:null,y:B0,Y:b0,Z:_0,"%":Kl},x={a:ae,A:R,b:se,B:X,c:null,d:zl,e:zl,f:Q0,g:R0,G:$0,H:C0,I:T0,j:E0,L:td,m:F0,M:U0,p:Se,q:$e,Q:Xl,s:Gl,S:I0,u:S0,U:k0,V:H0,w:N0,W:L0,x:null,X:null,y:M0,Y:D0,Z:P0,"%":Kl},_={a:T,A:y,b:Q,B,c:C,d:$l,e:$l,f:n0,g:Dl,G:Rl,H:Pl,I:Pl,j:e0,L:r0,m:qm,M:t0,p:H,q:Zm,Q:o0,s:s0,S:i0,u:Ym,U:Vm,V:Wm,w:Gm,W:Jm,x:I,X:S,y:Dl,Y:Rl,Z:jm,"%":a0};w.x=b(i,w),w.X=b(r,w),w.c=b(e,w),x.x=b(i,x),x.X=b(r,x),x.c=b(e,x);function b($,K){return function(W){var L=[],je=-1,ce=0,at=$.length,ot,si,ZA;for(W instanceof Date||(W=new Date(+W));++je<at;)$.charCodeAt(je)===37&&(L.push($.slice(ce,je)),(si=Ml[ot=$.charAt(++je)])!=null?ot=$.charAt(++je):si=ot==="e"?" ":"0",(ZA=K[ot])&&(ot=ZA(W,si)),L.push(ot),ce=je+1);return L.push($.slice(ce,je)),L.join("")}}function E($,K){return function(W){var L=vr(1900,void 0,1),je=U(L,$,W+="",0),ce,at;if(je!=W.length)return null;if("Q"in L)return new Date(L.Q);if("s"in L)return new Date(L.s*1e3+("L"in L?L.L:0));if(K&&!("Z"in L)&&(L.Z=0),"p"in L&&(L.H=L.H%12+L.p*12),L.m===void 0&&(L.m="q"in L?L.q:0),"V"in L){if(L.V<1||L.V>53)return null;"w"in L||(L.w=1),"Z"in L?(ce=bo(vr(L.y,0,1)),at=ce.getUTCDay(),ce=at>4||at===0?ca.ceil(ce):ca(ce),ce=Na.offset(ce,(L.V-1)*7),L.y=ce.getUTCFullYear(),L.m=ce.getUTCMonth(),L.d=ce.getUTCDate()+(L.w+6)%7):(ce=wo(vr(L.y,0,1)),at=ce.getDay(),ce=at>4||at===0?la.ceil(ce):la(ce),ce=nn.offset(ce,(L.V-1)*7),L.y=ce.getFullYear(),L.m=ce.getMonth(),L.d=ce.getDate()+(L.w+6)%7)}else("W"in L||"U"in L)&&("w"in L||(L.w="u"in L?L.u%7:"W"in L?1:0),at="Z"in L?bo(vr(L.y,0,1)).getUTCDay():wo(vr(L.y,0,1)).getDay(),L.m=0,L.d="W"in L?(L.w+6)%7+L.W*7-(at+5)%7:L.w+L.U*7-(at+6)%7);return"Z"in L?(L.H+=L.Z/100|0,L.M+=L.Z%100,bo(L)):wo(L)}}function U($,K,W,L){for(var je=0,ce=K.length,at=W.length,ot,si;je<ce;){if(L>=at)return-1;if(ot=K.charCodeAt(je++),ot===37){if(ot=K.charAt(je++),si=_[ot in Ml?K.charAt(je++):ot],!si||(L=si($,W,L))<0)return-1}else if(ot!=W.charCodeAt(L++))return-1}return L}function H($,K,W){var L=l.exec(K.slice(W));return L?($.p=c.get(L[0].toLowerCase()),W+L[0].length):-1}function T($,K,W){var L=h.exec(K.slice(W));return L?($.w=g.get(L[0].toLowerCase()),W+L[0].length):-1}function y($,K,W){var L=u.exec(K.slice(W));return L?($.w=d.get(L[0].toLowerCase()),W+L[0].length):-1}function Q($,K,W){var L=v.exec(K.slice(W));return L?($.m=m.get(L[0].toLowerCase()),W+L[0].length):-1}function B($,K,W){var L=f.exec(K.slice(W));return L?($.m=p.get(L[0].toLowerCase()),W+L[0].length):-1}function C($,K,W){return U($,e,K,W)}function I($,K,W){return U($,i,K,W)}function S($,K,W){return U($,r,K,W)}function k($){return o[$.getDay()]}function F($){return a[$.getDay()]}function N($){return A[$.getMonth()]}function D($){return s[$.getMonth()]}function z($){return n[+($.getHours()>=12)]}function Y($){return 1+~~($.getMonth()/3)}function ae($){return o[$.getUTCDay()]}function R($){return a[$.getUTCDay()]}function se($){return A[$.getUTCMonth()]}function X($){return s[$.getUTCMonth()]}function Se($){return n[+($.getUTCHours()>=12)]}function $e($){return 1+~~($.getUTCMonth()/3)}return{format:function($){var K=b($+="",w);return K.toString=function(){return $},K},parse:function($){var K=E($+="",!1);return K.toString=function(){return $},K},utcFormat:function($){var K=b($+="",x);return K.toString=function(){return $},K},utcParse:function($){var K=E($+="",!0);return K.toString=function(){return $},K}}}var Ml={"-":"",_:" ",0:"0"},Re=/^\s*\d+/,zm=/^%/,Km=/[\\^$*+?|[\]().{}]/g;function ne(t,e,i){var r=t<0?"-":"",n=(r?-t:t)+"",a=n.length;return r+(a<i?new Array(i-a+1).join(e)+n:n)}function Xm(t){return t.replace(Km,"\\$&")}function mr(t){return new RegExp("^(?:"+t.map(Xm).join("|")+")","i")}function xr(t){return new Map(t.map((e,i)=>[e.toLowerCase(),i]))}function Gm(t,e,i){var r=Re.exec(e.slice(i,i+1));return r?(t.w=+r[0],i+r[0].length):-1}function Ym(t,e,i){var r=Re.exec(e.slice(i,i+1));return r?(t.u=+r[0],i+r[0].length):-1}function Vm(t,e,i){var r=Re.exec(e.slice(i,i+2));return r?(t.U=+r[0],i+r[0].length):-1}function Wm(t,e,i){var r=Re.exec(e.slice(i,i+2));return r?(t.V=+r[0],i+r[0].length):-1}function Jm(t,e,i){var r=Re.exec(e.slice(i,i+2));return r?(t.W=+r[0],i+r[0].length):-1}function Rl(t,e,i){var r=Re.exec(e.slice(i,i+4));return r?(t.y=+r[0],i+r[0].length):-1}function Dl(t,e,i){var r=Re.exec(e.slice(i,i+2));return r?(t.y=+r[0]+(+r[0]>68?1900:2e3),i+r[0].length):-1}function jm(t,e,i){var r=/^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(e.slice(i,i+6));return r?(t.Z=r[1]?0:-(r[2]+(r[3]||"00")),i+r[0].length):-1}function Zm(t,e,i){var r=Re.exec(e.slice(i,i+1));return r?(t.q=r[0]*3-3,i+r[0].length):-1}function qm(t,e,i){var r=Re.exec(e.slice(i,i+2));return r?(t.m=r[0]-1,i+r[0].length):-1}function $l(t,e,i){var r=Re.exec(e.slice(i,i+2));return r?(t.d=+r[0],i+r[0].length):-1}function e0(t,e,i){var r=Re.exec(e.slice(i,i+3));return r?(t.m=0,t.d=+r[0],i+r[0].length):-1}function Pl(t,e,i){var r=Re.exec(e.slice(i,i+2));return r?(t.H=+r[0],i+r[0].length):-1}function t0(t,e,i){var r=Re.exec(e.slice(i,i+2));return r?(t.M=+r[0],i+r[0].length):-1}function i0(t,e,i){var r=Re.exec(e.slice(i,i+2));return r?(t.S=+r[0],i+r[0].length):-1}function r0(t,e,i){var r=Re.exec(e.slice(i,i+3));return r?(t.L=+r[0],i+r[0].length):-1}function n0(t,e,i){var r=Re.exec(e.slice(i,i+6));return r?(t.L=Math.floor(r[0]/1e3),i+r[0].length):-1}function a0(t,e,i){var r=zm.exec(e.slice(i,i+1));return r?i+r[0].length:-1}function o0(t,e,i){var r=Re.exec(e.slice(i));return r?(t.Q=+r[0],i+r[0].length):-1}function s0(t,e,i){var r=Re.exec(e.slice(i));return r?(t.s=+r[0],i+r[0].length):-1}function Ol(t,e){return ne(t.getDate(),e,2)}function A0(t,e){return ne(t.getHours(),e,2)}function l0(t,e){return ne(t.getHours()%12||12,e,2)}function c0(t,e){return ne(1+nn.count(zt(t),t),e,3)}function qu(t,e){return ne(t.getMilliseconds(),e,3)}function u0(t,e){return qu(t,e)+"000"}function d0(t,e){return ne(t.getMonth()+1,e,2)}function h0(t,e){return ne(t.getMinutes(),e,2)}function g0(t,e){return ne(t.getSeconds(),e,2)}function f0(t){var e=t.getDay();return e===0?7:e}function p0(t,e){return ne(La.count(zt(t)-1,t),e,2)}function ed(t){var e=t.getDay();return e>=4||e===0?tr(t):tr.ceil(t)}function v0(t,e){return t=ed(t),ne(tr.count(zt(t),t)+(zt(t).getDay()===4),e,2)}function m0(t){return t.getDay()}function x0(t,e){return ne(la.count(zt(t)-1,t),e,2)}function B0(t,e){return ne(t.getFullYear()%100,e,2)}function w0(t,e){return t=ed(t),ne(t.getFullYear()%100,e,2)}function b0(t,e){return ne(t.getFullYear()%1e4,e,4)}function y0(t,e){var i=t.getDay();return t=i>=4||i===0?tr(t):tr.ceil(t),ne(t.getFullYear()%1e4,e,4)}function _0(t){var e=t.getTimezoneOffset();return(e>0?"-":(e*=-1,"+"))+ne(e/60|0,"0",2)+ne(e%60,"0",2)}function zl(t,e){return ne(t.getUTCDate(),e,2)}function C0(t,e){return ne(t.getUTCHours(),e,2)}function T0(t,e){return ne(t.getUTCHours()%12||12,e,2)}function E0(t,e){return ne(1+Na.count(Kt(t),t),e,3)}function td(t,e){return ne(t.getUTCMilliseconds(),e,3)}function Q0(t,e){return td(t,e)+"000"}function F0(t,e){return ne(t.getUTCMonth()+1,e,2)}function U0(t,e){return ne(t.getUTCMinutes(),e,2)}function I0(t,e){return ne(t.getUTCSeconds(),e,2)}function S0(t){var e=t.getUTCDay();return e===0?7:e}function k0(t,e){return ne(Ma.count(Kt(t)-1,t),e,2)}function id(t){var e=t.getUTCDay();return e>=4||e===0?ir(t):ir.ceil(t)}function H0(t,e){return t=id(t),ne(ir.count(Kt(t),t)+(Kt(t).getUTCDay()===4),e,2)}function N0(t){return t.getUTCDay()}function L0(t,e){return ne(ca.count(Kt(t)-1,t),e,2)}function M0(t,e){return ne(t.getUTCFullYear()%100,e,2)}function R0(t,e){return t=id(t),ne(t.getUTCFullYear()%100,e,2)}function D0(t,e){return ne(t.getUTCFullYear()%1e4,e,4)}function $0(t,e){var i=t.getUTCDay();return t=i>=4||i===0?ir(t):ir.ceil(t),ne(t.getUTCFullYear()%1e4,e,4)}function P0(){return"+0000"}function Kl(){return"%"}function Xl(t){return+t}function Gl(t){return Math.floor(+t/1e3)}var Si,mA,rd,xA,nd;O0({dateTime:"%x, %X",date:"%-m/%-d/%Y",time:"%-I:%M:%S %p",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]});function O0(t){return Si=Om(t),mA=Si.format,rd=Si.parse,xA=Si.utcFormat,nd=Si.utcParse,Si}function z0(t){return new Date(t)}function K0(t){return t instanceof Date?+t:+new Date(+t)}function BA(t,e,i,r,n,a,o,s,A,l){var c=Gu(),u=c.invert,d=c.domain,h=l(".%L"),g=l(":%S"),f=l("%I:%M"),p=l("%I %p"),v=l("%a %d"),m=l("%b %d"),w=l("%B"),x=l("%Y");function _(b){return(A(b)<b?h:s(b)<b?g:o(b)<b?f:a(b)<b?p:r(b)<b?n(b)<b?v:m:i(b)<b?w:x)(b)}return c.invert=function(b){return new Date(u(b))},c.domain=function(b){return arguments.length?d(Array.from(b,K0)):d().map(z0)},c.ticks=function(b){var E=d();return t(E[0],E[E.length-1],b??10)},c.tickFormat=function(b,E){return E==null?_:l(E)},c.nice=function(b){var E=d();return(!b||typeof b.range!="function")&&(b=e(E[0],E[E.length-1],b??10)),b?d(Vu(E,b)):c},c.copy=function(){return Ha(c,BA(t,e,i,r,n,a,o,s,A,l))},c}function X0(){return sr.apply(BA($m,Pm,zt,pA,La,nn,gA,dA,mi,mA).domain([new Date(2e3,0,1),new Date(2e3,0,2)]),arguments)}function G0(){return sr.apply(BA(Rm,Dm,Kt,vA,Ma,Na,fA,hA,mi,xA).domain([Date.UTC(2e3,0,1),Date.UTC(2e3,0,2)]),arguments)}function ie(t){return function(){return t}}const Yl=Math.abs,Oe=Math.atan2,Ai=Math.cos,Y0=Math.max,yo=Math.min,_t=Math.sin,$i=Math.sqrt,ze=1e-12,Wr=Math.PI,ua=Wr/2,On=2*Wr;function V0(t){return t>1?0:t<-1?Wr:Math.acos(t)}function Vl(t){return t>=1?ua:t<=-1?-ua:Math.asin(t)}function wA(t){let e=3;return t.digits=function(i){if(!arguments.length)return e;if(i==null)e=null;else{const r=Math.floor(i);if(!(r>=0))throw new RangeError(`invalid digits: ${i}`);e=r}return t},()=>new Zv(e)}function W0(t){return t.innerRadius}function J0(t){return t.outerRadius}function j0(t){return t.startAngle}function Z0(t){return t.endAngle}function q0(t){return t&&t.padAngle}function ex(t,e,i,r,n,a,o,s){var A=i-t,l=r-e,c=o-n,u=s-a,d=u*A-c*l;if(!(d*d<ze))return d=(c*(e-a)-u*(t-n))/d,[t+d*A,e+d*l]}function mn(t,e,i,r,n,a,o){var s=t-i,A=e-r,l=(o?a:-a)/$i(s*s+A*A),c=l*A,u=-l*s,d=t+c,h=e+u,g=i+c,f=r+u,p=(d+g)/2,v=(h+f)/2,m=g-d,w=f-h,x=m*m+w*w,_=n-a,b=d*f-g*h,E=(w<0?-1:1)*$i(Y0(0,_*_*x-b*b)),U=(b*w-m*E)/x,H=(-b*m-w*E)/x,T=(b*w+m*E)/x,y=(-b*m+w*E)/x,Q=U-p,B=H-v,C=T-p,I=y-v;return Q*Q+B*B>C*C+I*I&&(U=T,H=y),{cx:U,cy:H,x01:-c,y01:-u,x11:U*(n/_-1),y11:H*(n/_-1)}}function Wl(){var t=W0,e=J0,i=ie(0),r=null,n=j0,a=Z0,o=q0,s=null,A=wA(l);function l(){var c,u,d=+t.apply(this,arguments),h=+e.apply(this,arguments),g=n.apply(this,arguments)-ua,f=a.apply(this,arguments)-ua,p=Yl(f-g),v=f>g;if(s||(s=c=A()),h<d&&(u=h,h=d,d=u),!(h>ze))s.moveTo(0,0);else if(p>On-ze)s.moveTo(h*Ai(g),h*_t(g)),s.arc(0,0,h,g,f,!v),d>ze&&(s.moveTo(d*Ai(f),d*_t(f)),s.arc(0,0,d,f,g,v));else{var m=g,w=f,x=g,_=f,b=p,E=p,U=o.apply(this,arguments)/2,H=U>ze&&(r?+r.apply(this,arguments):$i(d*d+h*h)),T=yo(Yl(h-d)/2,+i.apply(this,arguments)),y=T,Q=T,B,C;if(H>ze){var I=Vl(H/d*_t(U)),S=Vl(H/h*_t(U));(b-=I*2)>ze?(I*=v?1:-1,x+=I,_-=I):(b=0,x=_=(g+f)/2),(E-=S*2)>ze?(S*=v?1:-1,m+=S,w-=S):(E=0,m=w=(g+f)/2)}var k=h*Ai(m),F=h*_t(m),N=d*Ai(_),D=d*_t(_);if(T>ze){var z=h*Ai(w),Y=h*_t(w),ae=d*Ai(x),R=d*_t(x),se;if(p<Wr)if(se=ex(k,F,ae,R,z,Y,N,D)){var X=k-se[0],Se=F-se[1],$e=z-se[0],$=Y-se[1],K=1/_t(V0((X*$e+Se*$)/($i(X*X+Se*Se)*$i($e*$e+$*$)))/2),W=$i(se[0]*se[0]+se[1]*se[1]);y=yo(T,(d-W)/(K-1)),Q=yo(T,(h-W)/(K+1))}else y=Q=0}E>ze?Q>ze?(B=mn(ae,R,k,F,h,Q,v),C=mn(z,Y,N,D,h,Q,v),s.moveTo(B.cx+B.x01,B.cy+B.y01),Q<T?s.arc(B.cx,B.cy,Q,Oe(B.y01,B.x01),Oe(C.y01,C.x01),!v):(s.arc(B.cx,B.cy,Q,Oe(B.y01,B.x01),Oe(B.y11,B.x11),!v),s.arc(0,0,h,Oe(B.cy+B.y11,B.cx+B.x11),Oe(C.cy+C.y11,C.cx+C.x11),!v),s.arc(C.cx,C.cy,Q,Oe(C.y11,C.x11),Oe(C.y01,C.x01),!v))):(s.moveTo(k,F),s.arc(0,0,h,m,w,!v)):s.moveTo(k,F),!(d>ze)||!(b>ze)?s.lineTo(N,D):y>ze?(B=mn(N,D,z,Y,d,-y,v),C=mn(k,F,ae,R,d,-y,v),s.lineTo(B.cx+B.x01,B.cy+B.y01),y<T?s.arc(B.cx,B.cy,y,Oe(B.y01,B.x01),Oe(C.y01,C.x01),!v):(s.arc(B.cx,B.cy,y,Oe(B.y01,B.x01),Oe(B.y11,B.x11),!v),s.arc(0,0,d,Oe(B.cy+B.y11,B.cx+B.x11),Oe(C.cy+C.y11,C.cx+C.x11),v),s.arc(C.cx,C.cy,y,Oe(C.y11,C.x11),Oe(C.y01,C.x01),!v))):s.arc(0,0,d,_,x,v)}if(s.closePath(),c)return s=null,c+""||null}return l.centroid=function(){var c=(+t.apply(this,arguments)+ +e.apply(this,arguments))/2,u=(+n.apply(this,arguments)+ +a.apply(this,arguments))/2-Wr/2;return[Ai(u)*c,_t(u)*c]},l.innerRadius=function(c){return arguments.length?(t=typeof c=="function"?c:ie(+c),l):t},l.outerRadius=function(c){return arguments.length?(e=typeof c=="function"?c:ie(+c),l):e},l.cornerRadius=function(c){return arguments.length?(i=typeof c=="function"?c:ie(+c),l):i},l.padRadius=function(c){return arguments.length?(r=c==null?null:typeof c=="function"?c:ie(+c),l):r},l.startAngle=function(c){return arguments.length?(n=typeof c=="function"?c:ie(+c),l):n},l.endAngle=function(c){return arguments.length?(a=typeof c=="function"?c:ie(+c),l):a},l.padAngle=function(c){return arguments.length?(o=typeof c=="function"?c:ie(+c),l):o},l.context=function(c){return arguments.length?(s=c??null,l):s},l}function bA(t){return typeof t=="object"&&"length"in t?t:Array.from(t)}function ad(t){this._context=t}ad.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(t,e){switch(t=+t,e=+e,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,e):this._context.moveTo(t,e);break;case 1:this._point=2;default:this._context.lineTo(t,e);break}}};function yA(t){return new ad(t)}function od(t){return t[0]}function sd(t){return t[1]}function Ad(t,e){var i=ie(!0),r=null,n=yA,a=null,o=wA(s);t=typeof t=="function"?t:t===void 0?od:ie(t),e=typeof e=="function"?e:e===void 0?sd:ie(e);function s(A){var l,c=(A=bA(A)).length,u,d=!1,h;for(r==null&&(a=n(h=o())),l=0;l<=c;++l)!(l<c&&i(u=A[l],l,A))===d&&((d=!d)?a.lineStart():a.lineEnd()),d&&a.point(+t(u,l,A),+e(u,l,A));if(h)return a=null,h+""||null}return s.x=function(A){return arguments.length?(t=typeof A=="function"?A:ie(+A),s):t},s.y=function(A){return arguments.length?(e=typeof A=="function"?A:ie(+A),s):e},s.defined=function(A){return arguments.length?(i=typeof A=="function"?A:ie(!!A),s):i},s.curve=function(A){return arguments.length?(n=A,r!=null&&(a=n(r)),s):n},s.context=function(A){return arguments.length?(A==null?r=a=null:a=n(r=A),s):r},s}function tx(t,e,i){var r=null,n=ie(!0),a=null,o=yA,s=null,A=wA(l);t=typeof t=="function"?t:t===void 0?od:ie(+t),e=typeof e=="function"?e:ie(e===void 0?0:+e),i=typeof i=="function"?i:i===void 0?sd:ie(+i);function l(u){var d,h,g,f=(u=bA(u)).length,p,v=!1,m,w=new Array(f),x=new Array(f);for(a==null&&(s=o(m=A())),d=0;d<=f;++d){if(!(d<f&&n(p=u[d],d,u))===v)if(v=!v)h=d,s.areaStart(),s.lineStart();else{for(s.lineEnd(),s.lineStart(),g=d-1;g>=h;--g)s.point(w[g],x[g]);s.lineEnd(),s.areaEnd()}v&&(w[d]=+t(p,d,u),x[d]=+e(p,d,u),s.point(r?+r(p,d,u):w[d],i?+i(p,d,u):x[d]))}if(m)return s=null,m+""||null}function c(){return Ad().defined(n).curve(o).context(a)}return l.x=function(u){return arguments.length?(t=typeof u=="function"?u:ie(+u),r=null,l):t},l.x0=function(u){return arguments.length?(t=typeof u=="function"?u:ie(+u),l):t},l.x1=function(u){return arguments.length?(r=u==null?null:typeof u=="function"?u:ie(+u),l):r},l.y=function(u){return arguments.length?(e=typeof u=="function"?u:ie(+u),i=null,l):e},l.y0=function(u){return arguments.length?(e=typeof u=="function"?u:ie(+u),l):e},l.y1=function(u){return arguments.length?(i=u==null?null:typeof u=="function"?u:ie(+u),l):i},l.lineX0=l.lineY0=function(){return c().x(t).y(e)},l.lineY1=function(){return c().x(t).y(i)},l.lineX1=function(){return c().x(r).y(e)},l.defined=function(u){return arguments.length?(n=typeof u=="function"?u:ie(!!u),l):n},l.curve=function(u){return arguments.length?(o=u,a!=null&&(s=o(a)),l):o},l.context=function(u){return arguments.length?(u==null?a=s=null:s=o(a=u),l):a},l}function ix(t,e){return e<t?-1:e>t?1:e>=t?0:NaN}function rx(t){return t}function nx(){var t=rx,e=ix,i=null,r=ie(0),n=ie(On),a=ie(0);function o(s){var A,l=(s=bA(s)).length,c,u,d=0,h=new Array(l),g=new Array(l),f=+r.apply(this,arguments),p=Math.min(On,Math.max(-On,n.apply(this,arguments)-f)),v,m=Math.min(Math.abs(p)/l,a.apply(this,arguments)),w=m*(p<0?-1:1),x;for(A=0;A<l;++A)(x=g[h[A]=A]=+t(s[A],A,s))>0&&(d+=x);for(e!=null?h.sort(function(_,b){return e(g[_],g[b])}):i!=null&&h.sort(function(_,b){return i(s[_],s[b])}),A=0,u=d?(p-l*w)/d:0;A<l;++A,f=v)c=h[A],x=g[c],v=f+(x>0?x*u:0)+w,g[c]={data:s[c],index:A,value:x,startAngle:f,endAngle:v,padAngle:m};return g}return o.value=function(s){return arguments.length?(t=typeof s=="function"?s:ie(+s),o):t},o.sortValues=function(s){return arguments.length?(e=s,i=null,o):e},o.sort=function(s){return arguments.length?(i=s,e=null,o):i},o.startAngle=function(s){return arguments.length?(r=typeof s=="function"?s:ie(+s),o):r},o.endAngle=function(s){return arguments.length?(n=typeof s=="function"?s:ie(+s),o):n},o.padAngle=function(s){return arguments.length?(a=typeof s=="function"?s:ie(+s),o):a},o}function oi(){}function da(t,e,i){t._context.bezierCurveTo((2*t._x0+t._x1)/3,(2*t._y0+t._y1)/3,(t._x0+2*t._x1)/3,(t._y0+2*t._y1)/3,(t._x0+4*t._x1+e)/6,(t._y0+4*t._y1+i)/6)}function Ra(t){this._context=t}Ra.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){switch(this._point){case 3:da(this,this._x1,this._y1);case 2:this._context.lineTo(this._x1,this._y1);break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(t,e){switch(t=+t,e=+e,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,e):this._context.moveTo(t,e);break;case 1:this._point=2;break;case 2:this._point=3,this._context.lineTo((5*this._x0+this._x1)/6,(5*this._y0+this._y1)/6);default:da(this,t,e);break}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=e}};function ax(t){return new Ra(t)}function ld(t){this._context=t}ld.prototype={areaStart:oi,areaEnd:oi,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._y0=this._y1=this._y2=this._y3=this._y4=NaN,this._point=0},lineEnd:function(){switch(this._point){case 1:{this._context.moveTo(this._x2,this._y2),this._context.closePath();break}case 2:{this._context.moveTo((this._x2+2*this._x3)/3,(this._y2+2*this._y3)/3),this._context.lineTo((this._x3+2*this._x2)/3,(this._y3+2*this._y2)/3),this._context.closePath();break}case 3:{this.point(this._x2,this._y2),this.point(this._x3,this._y3),this.point(this._x4,this._y4);break}}},point:function(t,e){switch(t=+t,e=+e,this._point){case 0:this._point=1,this._x2=t,this._y2=e;break;case 1:this._point=2,this._x3=t,this._y3=e;break;case 2:this._point=3,this._x4=t,this._y4=e,this._context.moveTo((this._x0+4*this._x1+t)/6,(this._y0+4*this._y1+e)/6);break;default:da(this,t,e);break}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=e}};function ox(t){return new ld(t)}function cd(t){this._context=t}cd.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===3)&&this._context.closePath(),this._line=1-this._line},point:function(t,e){switch(t=+t,e=+e,this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3;var i=(this._x0+4*this._x1+t)/6,r=(this._y0+4*this._y1+e)/6;this._line?this._context.lineTo(i,r):this._context.moveTo(i,r);break;case 3:this._point=4;default:da(this,t,e);break}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=e}};function sx(t){return new cd(t)}function ud(t,e){this._basis=new Ra(t),this._beta=e}ud.prototype={lineStart:function(){this._x=[],this._y=[],this._basis.lineStart()},lineEnd:function(){var t=this._x,e=this._y,i=t.length-1;if(i>0)for(var r=t[0],n=e[0],a=t[i]-r,o=e[i]-n,s=-1,A;++s<=i;)A=s/i,this._basis.point(this._beta*t[s]+(1-this._beta)*(r+A*a),this._beta*e[s]+(1-this._beta)*(n+A*o));this._x=this._y=null,this._basis.lineEnd()},point:function(t,e){this._x.push(+t),this._y.push(+e)}};const Ax=function t(e){function i(r){return e===1?new Ra(r):new ud(r,e)}return i.beta=function(r){return t(+r)},i}(.85);function ha(t,e,i){t._context.bezierCurveTo(t._x1+t._k*(t._x2-t._x0),t._y1+t._k*(t._y2-t._y0),t._x2+t._k*(t._x1-e),t._y2+t._k*(t._y1-i),t._x2,t._y2)}function _A(t,e){this._context=t,this._k=(1-e)/6}_A.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x2,this._y2);break;case 3:ha(this,this._x1,this._y1);break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(t,e){switch(t=+t,e=+e,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,e):this._context.moveTo(t,e);break;case 1:this._point=2,this._x1=t,this._y1=e;break;case 2:this._point=3;default:ha(this,t,e);break}this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=e}};const lx=function t(e){function i(r){return new _A(r,e)}return i.tension=function(r){return t(+r)},i}(0);function CA(t,e){this._context=t,this._k=(1-e)/6}CA.prototype={areaStart:oi,areaEnd:oi,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._x5=this._y0=this._y1=this._y2=this._y3=this._y4=this._y5=NaN,this._point=0},lineEnd:function(){switch(this._point){case 1:{this._context.moveTo(this._x3,this._y3),this._context.closePath();break}case 2:{this._context.lineTo(this._x3,this._y3),this._context.closePath();break}case 3:{this.point(this._x3,this._y3),this.point(this._x4,this._y4),this.point(this._x5,this._y5);break}}},point:function(t,e){switch(t=+t,e=+e,this._point){case 0:this._point=1,this._x3=t,this._y3=e;break;case 1:this._point=2,this._context.moveTo(this._x4=t,this._y4=e);break;case 2:this._point=3,this._x5=t,this._y5=e;break;default:ha(this,t,e);break}this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=e}};const cx=function t(e){function i(r){return new CA(r,e)}return i.tension=function(r){return t(+r)},i}(0);function TA(t,e){this._context=t,this._k=(1-e)/6}TA.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===3)&&this._context.closePath(),this._line=1-this._line},point:function(t,e){switch(t=+t,e=+e,this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3,this._line?this._context.lineTo(this._x2,this._y2):this._context.moveTo(this._x2,this._y2);break;case 3:this._point=4;default:ha(this,t,e);break}this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=e}};const ux=function t(e){function i(r){return new TA(r,e)}return i.tension=function(r){return t(+r)},i}(0);function EA(t,e,i){var r=t._x1,n=t._y1,a=t._x2,o=t._y2;if(t._l01_a>ze){var s=2*t._l01_2a+3*t._l01_a*t._l12_a+t._l12_2a,A=3*t._l01_a*(t._l01_a+t._l12_a);r=(r*s-t._x0*t._l12_2a+t._x2*t._l01_2a)/A,n=(n*s-t._y0*t._l12_2a+t._y2*t._l01_2a)/A}if(t._l23_a>ze){var l=2*t._l23_2a+3*t._l23_a*t._l12_a+t._l12_2a,c=3*t._l23_a*(t._l23_a+t._l12_a);a=(a*l+t._x1*t._l23_2a-e*t._l12_2a)/c,o=(o*l+t._y1*t._l23_2a-i*t._l12_2a)/c}t._context.bezierCurveTo(r,n,a,o,t._x2,t._y2)}function dd(t,e){this._context=t,this._alpha=e}dd.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x2,this._y2);break;case 3:this.point(this._x2,this._y2);break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(t,e){if(t=+t,e=+e,this._point){var i=this._x2-t,r=this._y2-e;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(i*i+r*r,this._alpha))}switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(t,e):this._context.moveTo(t,e);break;case 1:this._point=2;break;case 2:this._point=3;default:EA(this,t,e);break}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=e}};const dx=function t(e){function i(r){return e?new dd(r,e):new _A(r,0)}return i.alpha=function(r){return t(+r)},i}(.5);function hd(t,e){this._context=t,this._alpha=e}hd.prototype={areaStart:oi,areaEnd:oi,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._x5=this._y0=this._y1=this._y2=this._y3=this._y4=this._y5=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){switch(this._point){case 1:{this._context.moveTo(this._x3,this._y3),this._context.closePath();break}case 2:{this._context.lineTo(this._x3,this._y3),this._context.closePath();break}case 3:{this.point(this._x3,this._y3),this.point(this._x4,this._y4),this.point(this._x5,this._y5);break}}},point:function(t,e){if(t=+t,e=+e,this._point){var i=this._x2-t,r=this._y2-e;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(i*i+r*r,this._alpha))}switch(this._point){case 0:this._point=1,this._x3=t,this._y3=e;break;case 1:this._point=2,this._context.moveTo(this._x4=t,this._y4=e);break;case 2:this._point=3,this._x5=t,this._y5=e;break;default:EA(this,t,e);break}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=e}};const hx=function t(e){function i(r){return e?new hd(r,e):new CA(r,0)}return i.alpha=function(r){return t(+r)},i}(.5);function gd(t,e){this._context=t,this._alpha=e}gd.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===3)&&this._context.closePath(),this._line=1-this._line},point:function(t,e){if(t=+t,e=+e,this._point){var i=this._x2-t,r=this._y2-e;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(i*i+r*r,this._alpha))}switch(this._point){case 0:this._point=1;break;case 1:this._point=2;break;case 2:this._point=3,this._line?this._context.lineTo(this._x2,this._y2):this._context.moveTo(this._x2,this._y2);break;case 3:this._point=4;default:EA(this,t,e);break}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=e}};const gx=function t(e){function i(r){return e?new gd(r,e):new TA(r,0)}return i.alpha=function(r){return t(+r)},i}(.5);function fd(t){this._context=t}fd.prototype={areaStart:oi,areaEnd:oi,lineStart:function(){this._point=0},lineEnd:function(){this._point&&this._context.closePath()},point:function(t,e){t=+t,e=+e,this._point?this._context.lineTo(t,e):(this._point=1,this._context.moveTo(t,e))}};function fx(t){return new fd(t)}function Jl(t){return t<0?-1:1}function jl(t,e,i){var r=t._x1-t._x0,n=e-t._x1,a=(t._y1-t._y0)/(r||n<0&&-0),o=(i-t._y1)/(n||r<0&&-0),s=(a*n+o*r)/(r+n);return(Jl(a)+Jl(o))*Math.min(Math.abs(a),Math.abs(o),.5*Math.abs(s))||0}function Zl(t,e){var i=t._x1-t._x0;return i?(3*(t._y1-t._y0)/i-e)/2:e}function _o(t,e,i){var r=t._x0,n=t._y0,a=t._x1,o=t._y1,s=(a-r)/3;t._context.bezierCurveTo(r+s,n+s*e,a-s,o-s*i,a,o)}function ga(t){this._context=t}ga.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=this._t0=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x1,this._y1);break;case 3:_o(this,this._t0,Zl(this,this._t0));break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(t,e){var i=NaN;if(t=+t,e=+e,!(t===this._x1&&e===this._y1)){switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(t,e):this._context.moveTo(t,e);break;case 1:this._point=2;break;case 2:this._point=3,_o(this,Zl(this,i=jl(this,t,e)),i);break;default:_o(this,this._t0,i=jl(this,t,e));break}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=e,this._t0=i}}};function pd(t){this._context=new vd(t)}(pd.prototype=Object.create(ga.prototype)).point=function(t,e){ga.prototype.point.call(this,e,t)};function vd(t){this._context=t}vd.prototype={moveTo:function(t,e){this._context.moveTo(e,t)},closePath:function(){this._context.closePath()},lineTo:function(t,e){this._context.lineTo(e,t)},bezierCurveTo:function(t,e,i,r,n,a){this._context.bezierCurveTo(e,t,r,i,a,n)}};function px(t){return new ga(t)}function vx(t){return new pd(t)}function md(t){this._context=t}md.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=[],this._y=[]},lineEnd:function(){var t=this._x,e=this._y,i=t.length;if(i)if(this._line?this._context.lineTo(t[0],e[0]):this._context.moveTo(t[0],e[0]),i===2)this._context.lineTo(t[1],e[1]);else for(var r=ql(t),n=ql(e),a=0,o=1;o<i;++a,++o)this._context.bezierCurveTo(r[0][a],n[0][a],r[1][a],n[1][a],t[o],e[o]);(this._line||this._line!==0&&i===1)&&this._context.closePath(),this._line=1-this._line,this._x=this._y=null},point:function(t,e){this._x.push(+t),this._y.push(+e)}};function ql(t){var e,i=t.length-1,r,n=new Array(i),a=new Array(i),o=new Array(i);for(n[0]=0,a[0]=2,o[0]=t[0]+2*t[1],e=1;e<i-1;++e)n[e]=1,a[e]=4,o[e]=4*t[e]+2*t[e+1];for(n[i-1]=2,a[i-1]=7,o[i-1]=8*t[i-1]+t[i],e=1;e<i;++e)r=n[e]/a[e-1],a[e]-=r,o[e]-=r*o[e-1];for(n[i-1]=o[i-1]/a[i-1],e=i-2;e>=0;--e)n[e]=(o[e]-n[e+1])/a[e];for(a[i-1]=(t[i]+n[i-1])/2,e=0;e<i-1;++e)a[e]=2*t[e+1]-n[e+1];return[n,a]}function mx(t){return new md(t)}function Da(t,e){this._context=t,this._t=e}Da.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=this._y=NaN,this._point=0},lineEnd:function(){0<this._t&&this._t<1&&this._point===2&&this._context.lineTo(this._x,this._y),(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line>=0&&(this._t=1-this._t,this._line=1-this._line)},point:function(t,e){switch(t=+t,e=+e,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,e):this._context.moveTo(t,e);break;case 1:this._point=2;default:{if(this._t<=0)this._context.lineTo(this._x,e),this._context.lineTo(t,e);else{var i=this._x*(1-this._t)+t*this._t;this._context.lineTo(i,this._y),this._context.lineTo(i,e)}break}}this._x=t,this._y=e}};function xx(t){return new Da(t,.5)}function Bx(t){return new Da(t,0)}function wx(t){return new Da(t,1)}function Pi(t,e,i){this.k=t,this.x=e,this.y=i}Pi.prototype={constructor:Pi,scale:function(t){return t===1?this:new Pi(this.k*t,this.x,this.y)},translate:function(t,e){return t===0&e===0?this:new Pi(this.k,this.x+this.k*t,this.y+this.k*e)},apply:function(t){return[t[0]*this.k+this.x,t[1]*this.k+this.y]},applyX:function(t){return t*this.k+this.x},applyY:function(t){return t*this.k+this.y},invert:function(t){return[(t[0]-this.x)/this.k,(t[1]-this.y)/this.k]},invertX:function(t){return(t-this.x)/this.k},invertY:function(t){return(t-this.y)/this.k},rescaleX:function(t){return t.copy().domain(t.range().map(this.invertX,this).map(t.invert,t))},rescaleY:function(t){return t.copy().domain(t.range().map(this.invertY,this).map(t.invert,t))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};var bx=new Pi(1,0,0);Pi.prototype;/*!
* Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 * 
 * billboard.js, JavaScript chart library
 * https://naver.github.io/billboard.js/
 * 
 * @version 3.8.2
*/var re=function(){var t=typeof globalThis=="object"&&globalThis!==null&&globalThis.Object===Object&&globalThis||typeof global=="object"&&global!==null&&global.Object===Object&&global||typeof self=="object"&&self!==null&&self.Object===Object&&self;return t||Function("return this")()}(),xd=typeof re.requestAnimationFrame=="function",Bd=typeof re.requestIdleCallback=="function",wd=xd?re.requestAnimationFrame:function(t){return setTimeout(t,1)},yx=xd?re.cancelAnimationFrame:function(t){return clearTimeout(t)},bd=Bd?re.requestIdleCallback:wd;Bd&&re.cancelIdleCallback;var ye=re==null?void 0:re.document,Z={AREA:"area",AREA_LINE_RANGE:"area-line-range",AREA_SPLINE:"area-spline",AREA_SPLINE_RANGE:"area-spline-range",AREA_STEP:"area-step",BAR:"bar",BUBBLE:"bubble",CANDLESTICK:"candlestick",DONUT:"donut",GAUGE:"gauge",LINE:"line",PIE:"pie",POLAR:"polar",RADAR:"radar",SCATTER:"scatter",SPLINE:"spline",STEP:"step",TREEMAP:"treemap"},Co={AREA:"initArea",AREA_LINE_RANGE:"initArea",AREA_SPLINE:"initArea",AREA_SPLINE_RANGE:"initArea",AREA_STEP:"initArea",BAR:"initBar",BUBBLE:"initCircle",CANDLESTICK:"initCandlestick",DONUT:"initArc",GAUGE:"initArc",LINE:"initLine",PIE:"initArc",POLAR:"initPolar",RADAR:"initCircle",SCATTER:"initCircle",SPLINE:"initLine",STEP:"initLine",TREEMAP:"initTreemap"},Jt={Area:[Z.AREA,Z.AREA_SPLINE,Z.AREA_SPLINE_RANGE,Z.AREA_LINE_RANGE,Z.AREA_STEP],AreaRange:[Z.AREA_SPLINE_RANGE,Z.AREA_LINE_RANGE],Arc:[Z.PIE,Z.DONUT,Z.GAUGE,Z.POLAR,Z.RADAR],Line:[Z.LINE,Z.SPLINE,Z.AREA,Z.AREA_SPLINE,Z.AREA_SPLINE_RANGE,Z.AREA_LINE_RANGE,Z.STEP,Z.AREA_STEP],Step:[Z.STEP,Z.AREA_STEP],Spline:[Z.SPLINE,Z.AREA_SPLINE,Z.AREA_SPLINE_RANGE]},ee=function(){return ee=Object.assign||function(e){for(var i,r=1,n=arguments.length;r<n;r++){i=arguments[r];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e},ee.apply(this,arguments)};function Ge(t,e,i){if(i||arguments.length===2)for(var r=0,n=e.length,a;r<n;r++)(a||!(r in e))&&(a||(a=Array.prototype.slice.call(e,0,r)),a[r]=e[r]);return t.concat(a||Array.prototype.slice.call(e))}var V=function(t){return t||t===0},te=function(t){return typeof t=="function"},Qe=function(t){return typeof t=="string"},J=function(t){return typeof t=="number"},nt=function(t){return typeof t>"u"},me=function(t){return typeof t<"u"},yd=function(t){return typeof t=="boolean"},ec=function(t){return Math.ceil(t/10)*10},Br=function(t){return Math.ceil(t)+.5},$r=function(t){return t[1]-t[0]},St=function(t){return typeof t=="object"},Ar=function(t){return nt(t)||t===null||Qe(t)&&t.length===0||St(t)&&!(t instanceof Date)&&Object.keys(t).length===0||J(t)&&isNaN(t)},Ee=function(t){return!Ar(t)},de=function(t){return Array.isArray(t)},xe=function(t){return t&&!(t!=null&&t.nodeType)&&St(t)&&!de(t)};function ii(t,e,i){return me(t[e])?t[e]:i}function _x(t,e){var i=!1;return Object.keys(t).forEach(function(r){return t[r]===e&&(i=!0)}),i}function Te(t,e){for(var i=[],r=2;r<arguments.length;r++)i[r-2]=arguments[r];var n=te(t);return n&&t.call.apply(t,Ge([e],i,!1)),n}function QA(t,e){var i=0,r=function(){for(var n=[],a=0;a<arguments.length;a++)n[a]=arguments[a];!--i&&e.apply.apply(e,Ge([this],n,!1))};"duration"in t?t.each(function(){return++i}).on("end",r):(++i,t.call(r))}function wr(t){return Qe(t)?t.replace(/</g,"&lt;").replace(/>/g,"&gt;"):t}function fa(t,e,i,r){if(i===void 0&&(i=[-1,1]),r===void 0&&(r=!1),!(!t||!Qe(e)))if(e.indexOf(`
`)===-1)t.text(e);else{var n=[t.text(),e].map(function(s){return s.replace(/[\s\n]/g,"")});if(n[0]!==n[1]){var a=e.split(`
`),o=r?a.length-1:1;t.html(""),a.forEach(function(s,A){t.append("tspan").attr("x",0).attr("dy","".concat(A===0?i[0]*o:i[1],"em")).text(s)})}}}function _d(t){var e=t.getBBox(),i=e.x,r=e.y,n=e.width,a=e.height;return[{x:i,y:r+a},{x:i,y:r},{x:i+n,y:r},{x:i+n,y:r+a}]}function Cx(t){var e=t.getBoundingClientRect(),i=e.width,r=e.height,n=_d(t),a=n[0].x,o=Math.min(n[0].y,n[1].y);return{x:a,y:o,width:i,height:r}}function Ut(t,e){var i,r=t&&((i=t.touches||t.sourceEvent&&t.sourceEvent.touches)===null||i===void 0?void 0:i[0]),n=cs(r||t,e);return n.map(function(a){return isNaN(a)?0:a})}function Cd(t){var e=t.event,i=t.$el,r=i.subchart.main||i.main,n;return e&&e.type==="brush"?n=e.selection:r&&(n=r.select(".bb-brush").node())&&(n=Wv(n)),n}function Hr(t){var e=!("rect"in t)||"rect"in t&&t.hasAttribute("width")&&t.rect.width!==+t.getAttribute("width");return e?t.rect=t.getBoundingClientRect():t.rect}function Fi(t,e,i){t===void 0&&(t=!0),e===void 0&&(e=0),i===void 0&&(i=1e4);var r=re.crypto||re.msCrypto,n=r?e+r.getRandomValues(new Uint32Array(1))[0]%(i-e+1):Math.floor(Math.random()*(i-e)+e);return t?String(n):n}function ws(t,e,i,r,n){if(i>r)return-1;var a=Math.floor((i+r)/2),o=t[a],s=o.x,A=o.w,l=A===void 0?0:A;return n&&(s=t[a].y,l=t[a].h),e>=s&&e<=s+l?a:e<s?ws(t,e,i,a-1,n):ws(t,e,a+1,r,n)}function Tx(t){var e=Cd(t);return e?e[0]===e[1]:!0}function Ex(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var i=function(r){if(xe(r)&&r.constructor){var n=new r.constructor;for(var a in r)n[a]=i(r[a]);return n}return r};return t.map(function(r){return i(r)}).reduce(function(r,n){return ee(ee({},r),n)})}function Bt(t,e){t===void 0&&(t={}),de(e)&&e.forEach(function(r){return Bt(t,r)});for(var i in e)/^\d+$/.test(i)||i in t||(t[i]=e[i]);return t}var Xt=function(t){return t.charAt(0).toUpperCase()+t.slice(1)};function Qx(t,e){return e===void 0&&(e="-"),t.split(e).map(function(i,r){return r?i.charAt(0).toUpperCase()+i.slice(1).toLowerCase():i.toLowerCase()}).join("")}var Ci=function(t){return[].slice.call(t)};function Fx(t,e,i){var r=t.rootSelctor,n=t.sheet,a=function(s){return s.replace(/\s?(bb-)/g,".$1").replace(/\.+/g,".")},o="".concat(r," ").concat(a(e)," {").concat(i.join(";"),"}");return n[n.insertRule?"insertRule":"addRule"](o,n.cssRules.length)}function Ux(t){var e=[];return t.forEach(function(i){var r;try{i.cssRules&&i.cssRules.length&&(e=e.concat(Ci(i.cssRules)))}catch(n){(r=re.console)===null||r===void 0||r.warn("Error while reading rules from ".concat(i.href,": ").concat(n.toString()))}}),e}function tc(t){var e=t?t.transform:null,i=e&&e.baseVal;return i&&i.numberOfItems?i.getItem(0).matrix:{a:0,b:0,c:0,d:0,e:0,f:0}}function bs(t){var e=t[0]instanceof Date,i=(e?t.map(Number):t).filter(function(r,n,a){return a.indexOf(r)===n});return e?i.map(function(r){return new Date(r)}):i}function To(t){return t&&t.length?t.reduce(function(e,i){return e.concat(i)}):[]}function rr(t){for(var e=[],i=1;i<arguments.length;i++)e[i-1]=arguments[i];if(!e.length||e.length===1&&!e[0])return t;var r=e.shift();return xe(t)&&xe(r)&&Object.keys(r).forEach(function(n){var a=r[n];xe(a)?(!t[n]&&(t[n]={}),t[n]=rr(t[n],a)):t[n]=de(a)?a.concat():a}),rr.apply(void 0,Ge([t],e,!1))}function nr(t,e){e===void 0&&(e=!0);var i;return t[0]instanceof Date?i=e?function(r,n){return r-n}:function(r,n){return n-r}:e&&!t.every(isNaN)?i=function(r,n){return r-n}:e||(i=function(r,n){return r>n&&-1||r<n&&1||r===n&&0}),t.concat().sort(i)}function Zt(t,e){var i=e.filter(function(r){return Ee(r)});return i.length?J(i[0])?i=Math[t].apply(Math,i):i[0]instanceof Date&&(i=nr(i,t==="min")[0]):i=void 0,i}var Ix={mouse:function(){var t=function(){return{bubbles:!1,cancelable:!1,screenX:0,screenY:0,clientX:0,clientY:0}};try{return new MouseEvent("t"),function(e,i,r){r===void 0&&(r=t()),e.dispatchEvent(new MouseEvent(i,r))}}catch{return function(i,r,n){n===void 0&&(n=t());var a=ye.createEvent("MouseEvent");a.initMouseEvent(r,n.bubbles,n.cancelable,re,0,n.screenX,n.screenY,n.clientX,n.clientY,!1,!1,!1,!1,0,null),i.dispatchEvent(a)}}}(),touch:function(t,e,i){var r=new Touch(rr({identifier:Date.now(),target:t,radiusX:2.5,radiusY:2.5,rotationAngle:10,force:.5},i));t.dispatchEvent(new TouchEvent(e,{cancelable:!0,bubbles:!0,shiftKey:!0,touches:[r],targetTouches:[],changedTouches:[r]}))}};function ys(t,e){var i=t;for(var r in e)i=i.replace(new RegExp("{=".concat(r,"}"),"g"),e[r]);return i}function kt(t){var e,i;if(t instanceof Date)i=t;else if(Qe(t)){var r=this,n=r.config,a=r.format;i=(e=a.dataTime(n.data_xFormat)(t))!==null&&e!==void 0?e:new Date(t)}else J(t)&&!isNaN(t)&&(i=new Date(+t));return!i||isNaN(+i),i}function an(){return(ye==null?void 0:ye.hidden)===!1||(ye==null?void 0:ye.visibilityState)==="visible"}function Sx(t,e){var i=re.DocumentTouch,r=re.matchMedia,n=re.navigator,a=!1;if(e)if(n&&"maxTouchPoints"in n)a=n.maxTouchPoints>0;else if("ontouchmove"in re||i&&ye instanceof i)a=!0;else if(r!=null&&r("(pointer:coarse)").matches)a=!0;else{var o=n.userAgent;a=/\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(o)||/\b(Android|Windows Phone|iPad|iPod)\b/i.test(o)}var s=t&&["any-hover:hover","any-pointer:fine"].some(function(A){return r==null?void 0:r("(".concat(A,")")).matches});return s&&"mouse"||a&&"touch"||"mouse"}function Td(t,e){e()===!1?wd(function(){return Td(t,e)}):t()}function kx(t){var e=t,i=e.config,r="";if(Ar(i.data_type||i.data_types)&&!e[Co.LINE])r="line";else for(var n in Co){var a=Z[n];if(e.hasType(a)&&!e[Co[n]]){r=a;break}}r&&Hx("Please, make sure if %c".concat(Qx(r)),"module has been imported and specified correctly.")}function Hx(t,e){var i,r="[billboard.js]",n="https://github.com/naver/billboard.js/wiki/CHANGELOG-v2#modularization-by-its-functionality",a=(i=re.console)===null||i===void 0?void 0:i.error;throw Error("".concat(r," ").concat(t.replace(/\%c([a-z-]+)/i,"'$1' ")," ").concat(e))}var Ae={button:"bb-button",chart:"bb-chart",empty:"bb-empty",main:"bb-main",target:"bb-target",EXPANDED:"_expanded_"},Ue={arc:"bb-arc",arcLabelLine:"bb-arc-label-line",arcs:"bb-arcs",chartArc:"bb-chart-arc",chartArcs:"bb-chart-arcs",chartArcsBackground:"bb-chart-arcs-background",chartArcsTitle:"bb-chart-arcs-title"},_s={area:"bb-area",areas:"bb-areas"},Me={axis:"bb-axis",axisX:"bb-axis-x",axisXLabel:"bb-axis-x-label",axisY:"bb-axis-y",axisY2:"bb-axis-y2",axisY2Label:"bb-axis-y2-label",axisYLabel:"bb-axis-y-label"},vt={bar:"bb-bar",bars:"bb-bars",chartBar:"bb-chart-bar",chartBars:"bb-chart-bars"},Cs={candlestick:"bb-candlestick",candlesticks:"bb-candlesticks",chartCandlestick:"bb-chart-candlestick",chartCandlesticks:"bb-chart-candlesticks",valueDown:"bb-value-down",valueUp:"bb-value-up"},Ke={chartCircles:"bb-chart-circles",circle:"bb-circle",circles:"bb-circles"},Ts={colorPattern:"bb-color-pattern",colorScale:"bb-colorscale"},di={dragarea:"bb-dragarea",INCLUDED:"_included_"},Et={chartArcsGaugeMax:"bb-chart-arcs-gauge-max",chartArcsGaugeMin:"bb-chart-arcs-gauge-min",chartArcsGaugeUnit:"bb-chart-arcs-gauge-unit",chartArcsGaugeTitle:"bb-chart-arcs-gauge-title",gaugeValue:"bb-gauge-value"},ue={legend:"bb-legend",legendBackground:"bb-legend-background",legendItem:"bb-legend-item",legendItemEvent:"bb-legend-item-event",legendItemHidden:"bb-legend-item-hidden",legendItemPoint:"bb-legend-item-point",legendItemTile:"bb-legend-item-tile"},qt={chartLine:"bb-chart-line",chartLines:"bb-chart-lines",line:"bb-line",lines:"bb-lines"},gt={eventRect:"bb-event-rect",eventRects:"bb-event-rects",eventRectsMultiple:"bb-event-rects-multiple",eventRectsSingle:"bb-event-rects-single"},ve={focused:"bb-focused",defocused:"bb-defocused",legendItemFocused:"bb-legend-item-focused",xgridFocus:"bb-xgrid-focus",ygridFocus:"bb-ygrid-focus"},pe={grid:"bb-grid",gridLines:"bb-grid-lines",xgrid:"bb-xgrid",xgridLine:"bb-xgrid-line",xgridLines:"bb-xgrid-lines",xgrids:"bb-xgrids",ygrid:"bb-ygrid",ygridLine:"bb-ygrid-line",ygridLines:"bb-ygrid-lines",ygrids:"bb-ygrids"},Nx={chartRadar:"bb-chart-radar",chartRadars:"bb-chart-radars"},Jr={region:"bb-region",regions:"bb-regions"},He={selectedCircle:"bb-selected-circle",selectedCircles:"bb-selected-circles",SELECTED:"_selected_"},We={shape:"bb-shape",shapes:"bb-shapes"},Ed={brush:"bb-brush",subchart:"bb-subchart"},qe={chartText:"bb-chart-text",chartTexts:"bb-chart-texts",text:"bb-text",texts:"bb-texts",title:"bb-title",TextOverlapping:"text-overlapping"},zn={tooltip:"bb-tooltip",tooltipContainer:"bb-tooltip-container",tooltipName:"bb-tooltip-name"},Qd={treemap:"bb-treemap",chartTreemap:"bb-chart-treemap",chartTreemaps:"bb-chart-treemaps"},Lx={buttonZoomReset:"bb-zoom-reset",zoomBrush:"bb-zoom-brush"},De=ee(ee(ee(ee(ee(ee(ee(ee(ee(ee(ee(ee(ee(ee(ee(ee(ee(ee(ee(ee(ee(ee(ee(ee({},Ae),Ue),_s),Me),vt),Cs),Ke),Ts),di),Et),ue),qt),gt),ve),pe),Nx),Jr),He),We),Ed),qe),zn),Qd),Lx),Mx=function(){function t(){var e={chart:null,main:null,svg:null,axis:{x:null,y:null,y2:null,subX:null},defs:null,tooltip:null,legend:null,title:null,subchart:{main:null,bar:null,line:null,area:null},arcs:null,bar:null,candlestick:null,line:null,area:null,circle:null,radar:null,text:null,grid:{main:null,x:null,y:null},gridLines:{main:null,x:null,y:null},region:{main:null,list:null},eventRect:null,zoomResetBtn:null};return e}return t}(),Rx=function(){function t(){return{width:0,width2:0,height:0,height2:0,margin:{top:0,bottom:0,left:0,right:0},margin2:{top:0,bottom:0,left:0,right:0},margin3:{top:0,bottom:0,left:0,right:0},arcWidth:0,arcHeight:0,xAxisHeight:0,hasAxis:!1,hasRadar:!1,hasTreemap:!1,cssRule:{},current:{width:0,height:0,dataMax:0,maxTickWidths:{x:{size:0,ticks:[],clipPath:0,domain:""},y:{size:0,domain:""},y2:{size:0,domain:""}},types:[]},isLegendRight:!1,isLegendInset:!1,isLegendTop:!1,isLegendLeft:!1,legendStep:0,legendItemWidth:0,legendItemHeight:0,legendHasRendered:!1,eventReceiver:{currentIdx:-1,rect:{},data:[],coords:[]},axis:{x:{padding:{left:0,right:0},tickCount:0}},rotatedPadding:{left:30,right:0,top:5},withoutFadeIn:{},inputType:"",datetimeId:"",clip:{id:"",idXAxis:"",idYAxis:"",idXAxisTickTexts:"",idGrid:"",idSubchart:"",path:"",pathXAxis:"",pathYAxis:"",pathXAxisTickTexts:"",pathGrid:""},event:null,dragStart:null,dragging:!1,flowing:!1,cancelClick:!1,mouseover:!1,rendered:!1,transiting:!1,redrawing:!1,resizing:!1,toggling:!1,zooming:!1,hasNegativeValue:!1,hasPositiveValue:!0,orgAreaOpacity:"0.2",orgConfig:{},hiddenTargetIds:[],hiddenLegendIds:[],focusedTargetIds:[],defocusedTargetIds:[],radius:0,innerRadius:0,outerRadius:void 0,innerRadiusRatio:0,gaugeArcWidth:0,radiusExpanded:0,xgridAttr:{x1:null,x2:null,y1:null,y2:null}}}return t}(),ic={element:Mx,state:Rx},Dx=function(){function t(){var e=this;Object.keys(ic).forEach(function(i){e[i]=new ic[i]})}return t.prototype.getStore=function(e){return this[e]},t}(),$x={bindto:"#chart",background:{},clipPath:!0,svg_classname:void 0,size_width:void 0,size_height:void 0,padding:!0,padding_mode:void 0,padding_left:void 0,padding_right:void 0,padding_top:void 0,padding_bottom:void 0,resize_auto:!0,resize_timer:!0,onclick:void 0,onover:void 0,onout:void 0,onresize:void 0,onresized:void 0,onbeforeinit:void 0,oninit:void 0,onafterinit:void 0,onrendered:void 0,transition_duration:250,plugins:[],render:{},regions:[]},Px={boost_useCssRule:!1,boost_useWorker:!1},Ox={data_x:void 0,data_idConverter:function(t){return t},data_names:{},data_classes:{},data_type:void 0,data_types:{},data_order:"desc",data_groups:[],data_groupsZeroAs:"positive",data_color:void 0,data_colors:{},data_labels:{},data_labels_backgroundColors:void 0,data_labels_colors:void 0,data_labels_position:{},data_hide:!1,data_filter:void 0,data_onclick:function(){},data_onover:function(){},data_onout:function(){},data_onshown:void 0,data_onhidden:void 0,data_onmin:void 0,data_onmax:void 0,data_url:void 0,data_headers:void 0,data_json:void 0,data_rows:void 0,data_columns:void 0,data_mimeType:"csv",data_keys:void 0,data_empty_label_text:""},zx={color_pattern:[],color_tiles:void 0,color_threshold:{},color_onover:void 0},Kx={interaction_enabled:!0,interaction_brighten:!0,interaction_inputType_mouse:!0,interaction_inputType_touch:{}},Xx={legend_show:!0,legend_hide:!1,legend_contents_bindto:void 0,legend_contents_template:"<span style='color:#fff;padding:5px;background-color:{=COLOR}'>{=TITLE}</span>",legend_position:"bottom",legend_inset_anchor:"top-left",legend_inset_x:10,legend_inset_y:0,legend_inset_step:void 0,legend_item_onclick:void 0,legend_item_onover:void 0,legend_item_onout:void 0,legend_equally:!1,legend_padding:0,legend_item_tile_width:10,legend_item_tile_height:10,legend_item_tile_r:5,legend_item_tile_type:"rectangle",legend_usePoint:!1},Gx={title_text:void 0,title_padding:{top:0,right:0,bottom:0,left:0},title_position:"center"},Yx={tooltip_show:!0,tooltip_doNotHide:!1,tooltip_grouped:!0,tooltip_format_title:void 0,tooltip_format_name:void 0,tooltip_format_value:void 0,tooltip_position:void 0,tooltip_contents:{},tooltip_init_show:!1,tooltip_init_x:0,tooltip_init_position:{top:"0px",left:"50px"},tooltip_linked:!1,tooltip_linked_name:"",tooltip_onshow:function(){},tooltip_onhide:function(){},tooltip_onshown:function(){},tooltip_onhidden:function(){},tooltip_order:null},$a=function(){function t(){return Ex($x,Px,Ox,zx,Kx,Xx,Gx,Yx,t.data)}return t.setOptions=function(e){this.data=e.reduce(function(i,r){return ee(ee({},i),r)},this.data)},t.data={},t}(),Qt={bubbleBaseLength:"$baseLength",colorPattern:"__colorPattern__",dataMinMax:"$dataMinMax",dataTotalSum:"$dataTotalSum",dataTotalPerIndex:"$totalPerIndex",legendItemTextBox:"legendItemTextBox",radarPoints:"$radarPoints",setOverOut:"setOverOut",callOverOutForTouch:"callOverOutForTouch",textRect:"textRect"},Vx=function(){function t(){this.cache={}}return t.prototype.add=function(e,i,r){return r===void 0&&(r=!1),this.cache[e]=r?this.cloneTarget(i):i,this.cache[e]},t.prototype.remove=function(e){var i=this;Ci(e).forEach(function(r){return delete i.cache[r]})},t.prototype.get=function(e,i){if(i===void 0&&(i=!1),i){for(var r=[],n=0,a=void 0;a=e[n];n++)a in this.cache&&r.push(this.cloneTarget(this.cache[a]));return r}else{var o=this.cache[e];return V(o)?o:null}},t.prototype.reset=function(e){var i=this;for(var r in i.cache)(e||/^\$/.test(r))&&(i.cache[r]=null)},t.prototype.cloneTarget=function(e){return{id:e.id,id_org:e.id_org,values:e.values.map(function(i){return{x:i.x,value:i.value,id:i.id}})}},t}(),Wx=re.setTimeout,Jx=re.clearTimeout;function jx(t){var e=[],i,r=function(){r.clear(),t===!1?bd(function(){e.forEach(function(n){return n()})},{timeout:200}):i=Wx(function(){e.forEach(function(n){return n()})},J(t)?t:200)};return r.clear=function(){i&&(Jx(i),i=null)},r.add=function(n){return e.push(n)},r.remove=function(n){return e.splice(e.indexOf(n),1)},r}function Fd(){var t=[],e=function(i,r){function n(){for(var a,o=0,s=0,A=void 0;A=t[s];s++){if(A===!0||!((a=A.empty)===null||a===void 0)&&a.call(A)){o++;continue}if(an()===!1){o=t.length;break}try{A.transition()}catch{o++}}return o===t.length}Td(function(){r==null||r()},n)};return e.add=function(i){de(i)?t=t.concat(i):t.push(i)},e}var Eo={};function Zx(t,e){var i,r=t.toString(),n=r.replace(/(function|[\s\W\n])/g,"").substring(0,15);return n in Eo||(Eo[n]=new re.Blob(["".concat((i=e==null?void 0:e.map(String).join(";"))!==null&&i!==void 0?i:"",`

			self.onmessage=function({data}) {
				const result = (`).concat(r,`).apply(null, data);
				self.postMessage(result);
			};`)],{type:"text/javascript"})),re.URL.createObjectURL(Eo[n])}function Qo(t,e,i,r){t===void 0&&(t=!0);var n;if(re.Worker&&t){var a=Zx(e,r),o=new re.Worker(a);n=function(){for(var s=[],A=0;A<arguments.length;A++)s[A]=arguments[A];o.postMessage(s),o.onmessage=function(l){return re.URL.revokeObjectURL(a),i(l.data)},o.onerror=function(l){}}}else n=function(){for(var s=[],A=0;A<arguments.length;A++)s[A]=arguments[A];var l=e.apply(void 0,s);i(l)};return n}function Es(t){var e=[];return t.forEach(function(i,r){var n=i[0];i.forEach(function(a,o){if(o>0){if(typeof e[o-1]>"u"&&(e[o-1]={}),typeof a>"u")throw new Error("Source data is missing a component at (".concat(r,", ").concat(o,")!"));e[o-1][n]=a}})}),e}function Qs(t){var e=t[0],i=[];return t.forEach(function(r,n){if(n>0){var a={};r.forEach(function(o,s){if(typeof o>"u")throw new Error("Source data is missing a component at (".concat(n,", ").concat(s,")!"));a[e[s]]=o}),i.push(a)}}),i}function Ud(t,e){var i=[],r,n;if(Array.isArray(t)){var a=function(o,s){if(o[s]!==void 0)return o[s];var A=s.replace(/\[(\w+)\]/g,".$1"),l=A.replace(/^\./,"").split("."),c=o;return l.some(function(u){return!(c=c&&u in c?c[u]:void 0)}),c};e.x?r=e.value.concat(e.x):r=e.value,i.push(r),t.forEach(function(o){var s=r.map(function(A){var l=a(o,A);return typeof l>"u"&&(l=null),l});i.push(s)}),n=Qs(i)}else Object.keys(t).forEach(function(o){var s,A=t[o].concat();(s=A.unshift)===null||s===void 0||s.call(A,o),i.push(A)}),n=Es(i);return n}function qx(t,e,i,r,n){e===void 0&&(e="csv");var a=new XMLHttpRequest,o={csv:eB,tsv:tB,json:Ud};a.open("GET",t),i&&Object.keys(i).forEach(function(s){a.setRequestHeader(s,i[s])}),a.onreadystatechange=function(){if(a.readyState===4)if(a.status===200){var s=a.responseText;s&&n.call(this,o[e](e==="json"?JSON.parse(s):s,r))}else throw new Error("".concat(t,": Something went wrong loading!"))},a.send()}function Id(t,e){var i=t.rows(e),r;return i.length===1?(r=[{}],i[0].forEach(function(n){r[0][n]=null})):r=t.parse(e),r}function eB(t){return Id({rows:rm,parse:im},t)}function tB(t){return Id({rows:am,parse:nm},t)}function rc(t,e){var i=t||(e==null?void 0:e.data_keys);return i!=null&&i.x&&(e.data_x=i.x),i}var iB={convertData:function(t,e){var i=this.config,r=i.boost_useWorker,n=t;if(t.bindto&&(n={},["url","mimeType","headers","keys","json","keys","rows","columns"].forEach(function(a){var o="data_".concat(a);o in t&&(n[a]=t[o])})),n.url&&e)qx(n.url,n.mimeType,n.headers,rc(n.keys,i),e);else if(n.json)Qo(r,Ud,e,[Es,Qs])(n.json,rc(n.keys,i));else if(n.rows)Qo(r,Qs,e)(n.rows);else if(n.columns)Qo(r,Es,e)(n.columns);else if(t.bindto)throw Error("url or json or rows or columns is required.")},convertDataToTargets:function(t,e){var i=this,r=this,n=r.axis,a=r.config,o=r.state,s=a.data_type,A=!1,l=!1,c=!1;n&&(A=n.isCategorized(),l=n.isTimeSeries(),c=n.isCustomX());var u=Object.keys(t[0]||{}),d=u.length?u.filter(r.isNotX,r):[],h=u.length?u.filter(r.isX,r):[],g;d.forEach(function(v){var m=i.getXKey(v);c||l?h.indexOf(m)>=0?g=(e&&r.data.xs[v]||[]).concat(t.map(function(w){return w[m]}).filter(V).map(function(w,x){return r.generateTargetX(w,v,x)})):a.data_x?g=i.getOtherTargetXs():Ee(a.data_xs)&&(g=r.getXValuesOfXKey(m,r.data.targets)):g=t.map(function(w,x){return x}),g&&(i.data.xs[v]=g)}),d.forEach(function(v){if(!i.data.xs[v])throw new Error('x is not defined for id = "'.concat(v,'".'))});var f=d.map(function(v,m){var w=a.data_idConverter.bind(r.api)(v),x=r.getXKey(v),_=c&&A,b=_&&t.map(function(H){return H.x}).every(function(H){return a.axis_x_categories.indexOf(H)>-1}),E=t.__append__,U=x===null&&E?r.api.data.values(v).length:0;return{id:w,id_org:v,values:t.map(function(H,T){var y=H[x],Q=H[v],B;return Q=Q!==null&&!isNaN(Q)&&!xe(Q)?+Q:de(Q)||xe(Q)?Q:null,(_||o.hasRadar)&&m===0&&!nt(y)?(!b&&m===0&&T===0&&!E&&(a.axis_x_categories=[]),B=a.axis_x_categories.indexOf(y),B===-1&&(B=a.axis_x_categories.length,a.axis_x_categories.push(y))):B=r.generateTargetX(y,v,U+T),(nt(Q)||r.data.xs[v].length<=T)&&(B=void 0),{x:B,value:Q,id:w,index:-1}}).filter(function(H){return me(H.x)})}});if(f.forEach(function(v){var m;a.data_xSort&&(v.values=v.values.sort(function(w,x){var _=w.x||w.x===0?w.x:1/0,b=x.x||x.x===0?x.x:1/0;return _-b})),v.values.forEach(function(w,x){return w.index=x}),(m=r.data.xs[v.id])===null||m===void 0||m.sort(function(w,x){return w-x})}),o.hasNegativeValue=r.hasNegativeValueInTargets(f),o.hasPositiveValue=r.hasPositiveValueInTargets(f),s&&r.isValidChartType(s)){var p=r.mapToIds(f).filter(function(v){return!(v in a.data_types)||!r.isValidChartType(a.data_types[v])});r.setTargetType(p,s)}return f.forEach(function(v){return r.cache.add(v.id_org,v,!0)}),f}},rB={isX:function(t){var e=this,i=e.config,r=i.data_x&&t===i.data_x,n=Ee(i.data_xs)&&_x(i.data_xs,t);return r||n},isNotX:function(t){return!this.isX(t)},isStackNormalized:function(){var t=this.config;return!!(t.data_stack_normalize&&t.data_groups.length)},isGrouped:function(t){var e=this.config.data_groups;return t?e.some(function(i){return i.indexOf(t)>=0&&i.length>1}):e.length>0},getXKey:function(t){var e=this,i=e.config;return i.data_x?i.data_x:Ee(i.data_xs)?i.data_xs[t]:null},getXValuesOfXKey:function(t,e){var i=this,r=e&&Ee(e)?i.mapToIds(e):[],n;return r.forEach(function(a){i.getXKey(a)===t&&(n=i.data.xs[a])}),n},getIndexByX:function(t,e){var i=this;return e?e.indexOf(Qe(t)?t:+t):(i.filterByX(i.data.targets,t)[0]||{index:null}).index},getXValue:function(t,e){var i=this;return t in i.data.xs&&i.data.xs[t]&&V(i.data.xs[t][e])?i.data.xs[t][e]:e},getOtherTargetXs:function(){var t=this,e=Object.keys(t.data.xs);return e.length?t.data.xs[e[0]]:null},getOtherTargetX:function(t){var e=this.getOtherTargetXs();return e&&t<e.length?e[t]:null},addXs:function(t){var e=this,i=e.config;Object.keys(t).forEach(function(r){i.data_xs[r]=t[r]})},isMultipleX:function(){return Ee(this.config.data_xs)||this.hasType("bubble")||this.hasType("scatter")},addName:function(t){var e=this,i=e.config,r;return t&&(r=i.data_names[t.id],t.name=r!==void 0?r:t.id),t},getAllValuesOnIndex:function(t,e){e===void 0&&(e=!1);var i=this,r=i.filterTargetsToShow(i.data.targets).map(function(n){return i.addName(i.getValueOnIndex(n.values,t))});return e&&(r=r.filter(function(n){return n&&"value"in n&&V(n.value)})),r},getValueOnIndex:function(t,e){var i=t.filter(function(r){return r.index===e});return i.length?i[0]:null},updateTargetX:function(t,e){var i=this;t.forEach(function(r){r.values.forEach(function(n,a){n.x=i.generateTargetX(e[a],r.id,a)}),i.data.xs[r.id]=e})},updateTargetXs:function(t,e){var i=this;t.forEach(function(r){e[r.id]&&i.updateTargetX([r],e[r.id])})},generateTargetX:function(t,e,i){var r=this,n=r.axis,a=n!=null&&n.isCategorized()?i:t||i;if(n!=null&&n.isTimeSeries()){var o=kt.bind(r);a=o(t||r.getXValue(e,i))}else n!=null&&n.isCustomX()&&!(n!=null&&n.isCategorized())&&(a=V(t)?+t:r.getXValue(e,i));return a},updateXs:function(t){t.length&&(this.axis.xs=t.map(function(e){return e.x}))},getPrevX:function(t){var e=this.axis.xs[t-1];return me(e)?e:null},getNextX:function(t){var e=this.axis.xs[t+1];return me(e)?e:null},getBaseValue:function(t){var e=this,i=e.state.hasAxis,r=t.value;return r&&i&&(e.isAreaRangeType(t)?r=e.getRangedData(t,"mid"):e.isBubbleZType(t)&&(r=e.getBubbleZData(r,"y"))),r},getMinMaxValue:function(t){var e=this.getBaseValue.bind(this),i,r;return(t||this.data.targets.map(function(n){return n.values})).forEach(function(n,a){var o=n.map(e).filter(J);i=Math.min.apply(Math,Ge([a?i:1/0],o,!1)),r=Math.max.apply(Math,Ge([a?r:-1/0],o,!1))}),{min:i,max:r}},getMinMaxData:function(){var t=this,e=Qt.dataMinMax,i=t.cache.get(e);if(!i){var r=t.data.targets.map(function(s){return s.values}),n=t.getMinMaxValue(r),a=[],o=[];r.forEach(function(s){var A=t.getFilteredDataByValue(s,n.min),l=t.getFilteredDataByValue(s,n.max);A.length&&(a=a.concat(A)),l.length&&(o=o.concat(l))}),t.cache.add(e,i={min:a,max:o})}return i},getTotalPerIndex:function(){var t=this,e=Qt.dataTotalPerIndex,i=t.cache.get(e);return(t.config.data_groups.length||t.isStackNormalized())&&!i&&(i=[],t.data.targets.forEach(function(r){r.values.forEach(function(n,a){i[a]||(i[a]=0),i[a]+=J(n.value)?n.value:0})})),i},getTotalDataSum:function(t){var e=this,i=Qt.dataTotalSum,r=e.cache.get(i);if(!J(r)){var n=To(e.data.targets.map(function(a){return a.values})).map(function(a){return a.value});r=n.length?n.reduce(function(a,o){return a+o}):0,e.cache.add(i,r)}return t&&(r-=e.getHiddenTotalDataSum()),r},getHiddenTotalDataSum:function(){var t=this,e=t.api,i=t.state.hiddenTargetIds,r=0;return i.length&&(r=e.data.values.bind(e)(i).reduce(function(n,a){return n+a})),r},getFilteredDataByValue:function(t,e){var i=this;return t.filter(function(r){return i.getBaseValue(r)===e})},getMaxDataCount:function(){return Math.max.apply(Math,this.data.targets.map(function(t){return t.values.length}))},getMaxDataCountTarget:function(){var t=this.filterTargetsToShow()||[],e=t.length,i=this.config.axis_x_inverted;return e>1?(t=t.map(function(r){return r.values}).reduce(function(r,n){return r.concat(n)}).map(function(r){return r.x}),t=nr(bs(t)).map(function(r,n,a){return{x:r,index:i?a.length-n-1:n}})):e&&(t=t[0].values.concat()),t},mapToIds:function(t){return t.map(function(e){return e.id})},mapToTargetIds:function(t){var e=this;return t?de(t)?t.concat():[t]:e.mapToIds(e.data.targets)},hasTarget:function(t,e){for(var i=this.mapToIds(t),r=0,n=void 0;n=i[r];r++)if(n===e)return!0;return!1},isTargetToShow:function(t){return this.state.hiddenTargetIds.indexOf(t)<0},isLegendToShow:function(t){return this.state.hiddenLegendIds.indexOf(t)<0},filterTargetsToShow:function(t){var e=this;return(t||e.data.targets).filter(function(i){return e.isTargetToShow(i.id)})},mapTargetsToUniqueXs:function(t){var e=this,i=e.axis,r=[];return t!=null&&t.length&&(r=bs(To(t.map(function(n){return n.values.map(function(a){return+a.x})}))),r=i!=null&&i.isTimeSeries()?r.map(function(n){return new Date(+n)}):r.map(Number)),nr(r)},addTargetIds:function(t,e){var i=this.state,r=de(e)?e:[e];r.forEach(function(n){i[t].indexOf(n)<0&&i[t].push(n)})},removeTargetIds:function(t,e){var i=this.state,r=de(e)?e:[e];r.forEach(function(n){var a=i[t].indexOf(n);a>=0&&i[t].splice(a,1)})},addHiddenTargetIds:function(t){this.addTargetIds("hiddenTargetIds",t)},removeHiddenTargetIds:function(t){this.removeTargetIds("hiddenTargetIds",t)},addHiddenLegendIds:function(t){this.addTargetIds("hiddenLegendIds",t)},removeHiddenLegendIds:function(t){this.removeTargetIds("hiddenLegendIds",t)},getValuesAsIdKeyed:function(t){var e=this,i=e.state.hasAxis,r={},n=e.isMultipleX(),a=n?e.mapTargetsToUniqueXs(t).map(function(o){return Qe(o)?o:+o}):null;return t.forEach(function(o){var s=[];o.values.filter(function(A){var l=A.value;return V(l)||l===null}).forEach(function(A){var l=A.value;l!==null&&e.isCandlestickType(A)&&(l=de(l)?l.slice(0,4):[l.open,l.high,l.low,l.close]),de(l)?s.push.apply(s,l):xe(l)&&"high"in l?s.push.apply(s,Object.values(l)):e.isBubbleZType(A)?s.push(i&&e.getBubbleZData(l,"y")):n?s[e.getIndexByX(A.x,a)]=l:s.push(l)}),r[o.id]=s}),r},checkValueInTargets:function(t,e){for(var i=Object.keys(t),r,n=0;n<i.length;n++){r=t[i[n]].values;for(var a=0;a<r.length;a++)if(e(r[a].value))return!0}return!1},hasMultiTargets:function(){return this.filterTargetsToShow().length>1},hasNegativeValueInTargets:function(t){return this.checkValueInTargets(t,function(e){return e<0})},hasPositiveValueInTargets:function(t){return this.checkValueInTargets(t,function(e){return e>0})},orderTargets:function(t){var e=this,i=Ge([],t,!0),r=e.getSortCompareFn();return r&&i.sort(r),i},getSortCompareFn:function(t){t===void 0&&(t=!1);var e=this,i=e.config,r=i.data_order,n=/asc/i.test(r),a=/desc/i.test(r),o;if(n||a){var s=function(A,l){return A+Math.abs(l.value)};o=function(A,l){var c="values"in A?A.values.reduce(s,0):A.value,u="values"in l?l.values.reduce(s,0):l.value;return t?n?c-u:u-c:n?u-c:c-u}}else te(r)&&(o=r.bind(e.api));return o||null},filterByX:function(t,e){return To(t.map(function(i){return i.values})).filter(function(i){return i.x-e===0})},filterRemoveNull:function(t){var e=this;return t.filter(function(i){return V(e.getBaseValue(i))})},filterByXDomain:function(t,e){return t.map(function(i){return{id:i.id,id_org:i.id_org,values:i.values.filter(function(r){return e[0]<=r.x&&r.x<=e[1]})}})},hasDataLabel:function(){var t=this.config.data_labels;return yd(t)&&t||St(t)&&Ee(t)},getDataIndexFromEvent:function(t){var e=this,i=e.config,r=e.state,n=r.inputType,a=r.eventReceiver,o=a.coords,s=a.rect,A=i.axis_rotated,l=n==="touch"&&t.changedTouches?t.changedTouches[0]:t,c=ws(o,A?l.clientY-s.top:l.clientX-s.left,0,o.length-1,A);return c},getDataLabelLength:function(t,e,i){var r=this,n=[0,0],a=1.3;return r.$el.chart.select("svg").selectAll(".dummy").data([t,e]).enter().append("text").text(function(o){return r.dataLabelFormat(o.id)(o)}).each(function(o,s){n[s]=this.getBoundingClientRect()[i]*a}).remove(),n},isNoneArc:function(t){return this.hasTarget(this.data.targets,t.id)},isArc:function(t){return"data"in t&&this.hasTarget(this.data.targets,t.data.id)},findSameXOfValues:function(t,e){var i=t[e].x,r=[],n;for(n=e-1;n>=0&&i===t[n].x;n--)r.push(t[n]);for(n=e;n<t.length&&i===t[n].x;n++)r.push(t[n]);return r},findClosestFromTargets:function(t,e){var i=this,r=t.map(function(n){return i.findClosest(n.values,e)});return i.findClosest(r,e)},findClosest:function(t,e){var i=this,r=i.config,n=i.$el.main,a=t.filter(function(A){return A&&V(A.value)}),o=r.point_sensitivity,s;return a.filter(function(A){return i.isBarType(A.id)||i.isCandlestickType(A.id)}).forEach(function(A){var l=i.isBarType(A.id)?".".concat(vt.chartBar,".").concat(Ae.target).concat(i.getTargetSelectorSuffix(A.id)," .").concat(vt.bar,"-").concat(A.index):".".concat(Cs.chartCandlestick,".").concat(Ae.target).concat(i.getTargetSelectorSuffix(A.id)," .").concat(Cs.candlestick,"-").concat(A.index," path");!s&&i.isWithinBar(n.select(l).node())&&(s=A)}),a.filter(function(A){return!i.isBarType(A.id)&&!i.isCandlestickType(A.id)}).forEach(function(A){var l=i.dist(A,e);l<o&&(o=l,s=A)}),s},dist:function(t,e){var i=this,r=i.config.axis_rotated,n=i.scale,a=r?1:0,o=r?0:1,s=i.circleY(t,t.index),A=(n.zoom||n.x)(t.x);return Math.sqrt(Math.pow(A-e[a],2)+Math.pow(s-e[o],2))},convertValuesToStep:function(t){var e=this,i=e.axis,r=e.config,n=r.line_step_type,a=i?i.isCategorized():!1,o=de(t)?t.concat():[t];if(!(a||/step\-(after|before)/.test(n)))return t;if(o.length){var s=o[0],A=o[o.length-1],l=s.id,c=s.x;o.unshift({x:--c,value:s.value,id:l}),a&&n==="step-after"&&o.unshift({x:--c,value:s.value,id:l}),c=A.x,o.push({x:++c,value:A.value,id:l}),a&&n==="step-before"&&o.push({x:++c,value:A.value,id:l})}return o},convertValuesToRange:function(t){var e=de(t)?t.concat():[t],i=[];return e.forEach(function(r){var n=r.x,a=r.id;i.push({x:n,id:a,value:r.value[0]}),i.push({x:n,id:a,value:r.value[2]})}),i},updateDataAttributes:function(t,e){var i=this,r=i.config,n=r["data_".concat(t)];return nt(e)||(Object.keys(e).forEach(function(a){n[a]=e[a]}),i.redraw({withLegend:!0})),n},getRangedData:function(t,e,i){e===void 0&&(e=""),i===void 0&&(i="areaRange");var r=t==null?void 0:t.value;if(de(r)){var n={areaRange:["high","mid","low"],candlestick:["open","high","low","close","volume"]}[i].indexOf(e);return n>=0&&r?r[n]:void 0}else if(r)return r[e];return r},setRatioForGroupedData:function(t){var e=this,i=e.config;if(i.data_groups.length&&t.some(function(n){return e.isGrouped(n.id)})){var r=function(n){return e.getRatio("index",n,!0)};t.forEach(function(n){"values"in n?n.values.forEach(r):r(n)})}},getRatio:function(t,e,i){i===void 0&&(i=!1);var r=this,n=r.config,a=r.state,o=r.api,s=0;if(e&&o.data.shown().length)if(s=e.ratio||e.value,t==="arc")if(r.pie.padAngle()())s=e.value/r.getTotalDataSum(!0);else{var A=n.gauge_fullCircle?r.getArcLength():r.getStartAngle()*-2,l=r.hasType("gauge")?A:Math.PI*2;s=(e.endAngle-e.startAngle)/l}else if(t==="index"){var c=o.data.values.bind(o),u=this.getTotalPerIndex();if(a.hiddenTargetIds.length){var d=c(a.hiddenTargetIds,!1);d.length&&(d=d.reduce(function(p,v){return p.map(function(m,w){return(J(m)?m:0)+v[w]})}),u=u.map(function(p,v){return p-d[v]}))}var h=u[e.index];e.ratio=J(e.value)&&u&&h?e.value/h:0,s=e.ratio}else if(t==="radar")s=parseFloat(String(Math.max(e.value,0)))/a.current.dataMax*n.radar_size_ratio;else if(t==="bar"){var g=r.getYScaleById.bind(r)(e.id),f=g.domain().reduce(function(p,v){return v-p});s=f===0?0:Math.abs(e.value)/f}else t==="treemap"&&(s/=r.getTotalDataSum(!0));return i&&s?s*100:s},updateDataIndexByX:function(t){var e=this,i=t.reduce(function(r,n,a){return r[Number(n.x)]=a,r},{});e.data.targets.forEach(function(r){r.values.forEach(function(n,a){var o=i[Number(n.x)];o===void 0&&(o=a),n.index=o})})},isBubbleZType:function(t){var e=this;return e.isBubbleType(t)&&(xe(t.value)&&("z"in t.value||"y"in t.value)||de(t.value)&&t.value.length>=2)},isBarRangeType:function(t){var e=this,i=t.value;return e.isBarType(t)&&de(i)&&i.length>=2&&i.every(function(r){return J(r)})},getDataById:function(t){var e,i=this.cache.get(t)||this.api.data(t);return(e=i==null?void 0:i[0])!==null&&e!==void 0?e:i}};function Sd(t,e){e===void 0&&(e=!1);var i=this,r=i.api;e&&i.api.flush(!0),t==null||t.call(r)}var nB={load:function(t,e){var i=this,r=i.data,n=e.append,a=t;a&&(e.filter&&(a=a.filter(e.filter)),(e.type||e.types)&&a.forEach(function(o){var s,A=((s=e.types)===null||s===void 0?void 0:s[o.id])||e.type;i.setTargetType(o.id,A)}),r.targets.forEach(function(o){for(var s=0;s<a.length;s++)if(o.id===a[s].id){o.values=n?o.values.concat(a[s].values):a[s].values,a.splice(s,1);break}}),r.targets=r.targets.concat(a)),i.updateTargets(r.targets),i.redraw({withUpdateOrgXDomain:!0,withUpdateXDomain:!0,withLegend:!0}),i.updateTypesElements(),Sd.call(i,e.done,e.resizeAfter)},loadFromArgs:function(t){var e=this;e.config&&(e.cache.reset(),e.convertData(t,function(i){var r=t.data||i;t.append&&(r.__append__=!0),r&&e.load(e.convertDataToTargets(r),t)}))},unload:function(t,e){var i=this,r=i.state,n=i.$el,a=i.$T,o=e,s=t;if(i.cache.reset(),o||(o=function(){}),s=s.filter(function(l){return i.hasTarget(i.data.targets,l)}),!s||s.length===0){o();return}var A=n.svg.selectAll(s.map(function(l){return i.selectorTarget(l)}));a(A).style("opacity","0").remove().call(QA,o),s.forEach(function(l){r.withoutFadeIn[l]=!1,n.legend&&n.legend.selectAll(".".concat(ue.legendItem).concat(i.getTargetSelectorSuffix(l))).remove(),i.data.targets=i.data.targets.filter(function(c){return c.id!==l})}),r.hasTreemap&&i.updateTargetsForTreemap(i.data.targets),i.updateTypesElements()}},aB={selectRectForSingle:function(t,e,i){var r,n,a=this,o=a.config,s=a.$el,A=s.main,l=s.circle,c=o.data_selection_enabled,u=o.data_selection_grouped,d=o.data_selection_isselectable,h=o.tooltip_grouped,g=a.getAllValuesOnIndex(i);if(!(h&&(a.showTooltip(g,t),(r=a.showGridFocus)===null||r===void 0||r.call(a,g),!c||u))){!l&&A.selectAll(".".concat(Ae.EXPANDED,":not(.").concat(We.shape,"-").concat(i,")")).classed(Ae.EXPANDED,!1);var f=A.selectAll(".".concat(We.shape,"-").concat(i)).classed(Ae.EXPANDED,!0).style("cursor",d?"pointer":null).filter(function(p){return a.isWithinShape(this,p)});f.empty()&&!h&&((n=a.hideGridFocus)===null||n===void 0||n.call(a),a.hideTooltip(),!u&&a.setExpand(i)),f.call(function(p){var v,m,w=p.data();c&&(u||d!=null&&d.bind(a.api)(w))&&e.style("cursor","pointer"),h||(a.showTooltip(w,t),(v=a.showGridFocus)===null||v===void 0||v.call(a,w),(m=a.unexpandCircles)===null||m===void 0||m.call(a),p.each(function(x){return a.setExpand(i,x.id)}))})}},setExpand:function(t,e,i){var r=this,n=r.config,a=r.$el.circle;a&&n.point_focus_expand_enabled&&r.expandCircles(t,e,i),r.expandBarTypeShapes(!0,t,e,i)},expandBarTypeShapes:function(t,e,i,r){t===void 0&&(t=!0);var n=this;["bar","candlestick"].filter(function(a){return n.$el[a]}).forEach(function(a){r&&n.$el[a].classed(Ae.EXPANDED,!1),n.getShapeByIndex(a,e,i).classed(Ae.EXPANDED,t)})},setOverOut:function(t,e){var i=this,r=i.config,n=i.state,a=n.hasRadar,o=n.hasTreemap,s=i.$el.main,A=xe(e);if(A||e!==-1){var l=r[t?"data_onover":"data_onout"].bind(i.api);if(r.color_onover&&i.setOverColor(t,e,A),A){var c=o?Qd.treemap:Ue.arc;l(e,s.select(".".concat(c).concat(i.getTargetSelectorSuffix(e.id))).node())}else if(r.tooltip_grouped)t&&(r.point_focus_only&&a?i.showCircleFocus(i.getAllValuesOnIndex(e,!0)):i.setExpand(e,null,!0)),!i.isMultipleX()&&s.selectAll(".".concat(We.shape,"-").concat(e)).each(function(f){l(f,this)});else{var u=i.cache.get(Qt.setOverOut)||[],d=s.selectAll(".".concat(We.shape,"-").concat(e)).filter(function(f){return i.isWithinShape(this,f)}),h=d.filter(function(){var f=this;return u.every(function(p){return p!==f})});if(!t||d.empty()||u.length===h.size()&&h.nodes().every(function(f,p){return f!==u[p]}))for(;u.length;){var g=u.pop();r.data_onout.bind(i.api)(G(g).datum(),g)}h.each(function(){t&&(l(G(this).datum(),this),u.push(this))}),i.cache.add(Qt.setOverOut,u)}}},callOverOutForTouch:function(t){var e=this,i=e.cache.get(Qt.callOverOutForTouch);(xe(t)&&i?t.id!==i.id:t!==i)&&((i||J(i))&&e.setOverOut(!1,i),(t||J(t))&&e.setOverOut(!0,t),e.cache.add(Qt.callOverOutForTouch,t))},getDraggableSelection:function(){var t=this,e=t.config,i=t.state;return e.interaction_enabled&&e.data_selection_draggable&&t.drag?Ap().on("drag",function(r){i.event=r,t.drag(Ut(r,this))}).on("start",function(r){i.event=r,t.dragstart(Ut(r,this))}).on("end",function(r){i.event=r,t.dragend()}):function(){}},dispatchEvent:function(t,e,i){var r,n=this,a=n.config,o=n.state,s=o.eventReceiver,A=o.hasAxis,l=o.hasRadar,c=o.hasTreemap,u=n.$el,d=u.eventRect,h=u.arcs,g=u.radar,f=u.treemap,p=(r=c&&s.rect||l&&g.axes.select(".".concat(Me.axis,"-").concat(e," text"))||d||(h==null?void 0:h.selectAll(".".concat(Ae.target," path")).filter(function(T,y){return y===e})))===null||r===void 0?void 0:r.node();if(p){var v=n.isMultipleX(),m=p.getBoundingClientRect(),w=m.width,x=m.left,_=m.top;if(A&&!l&&!v){var b=s.coords[e];w=b.w,x+=b.x,_+=b.y}var E=x+(i?i[0]:0)+(v||a.axis_rotated?0:w/2),U=_+(i?i[1]:0),H={screenX:E,screenY:U,clientX:E,clientY:U};Ix[/^(mouse|click)/.test(t)?"mouse":"touch"](c?f.node():p,t,H)}},setDragStatus:function(t){this.state.dragging=t},unbindZoomEvent:function(){var t=this,e=t.$el,i=e.eventRect,r=e.zoomResetBtn;i==null||i.on(".zoom wheel.zoom .drag",null),r==null||r.on("click",null).style("display","none")},unbindAllEvents:function(){var t,e=this,i=e.$el,r=i.arcs,n=i.eventRect,a=i.legend,o=i.region,s=i.svg,A=i.treemap,l=e.brush,c=["wheel","click","mouseover","mousemove","mouseout","touchstart","touchmove","touchend","touchstart.eventRect","touchmove.eventRect","touchend.eventRect",".brush",".drag",".zoom","wheel.zoom","dblclick.zoom"].join(" ");[s,n,o==null?void 0:o.list,l==null?void 0:l.getSelection(),r==null?void 0:r.selectAll("path"),a==null?void 0:a.selectAll("g"),A].forEach(function(u){return u==null?void 0:u.on(c,null)}),(t=e.unbindZoomEvent)===null||t===void 0||t.call(e)}},oB={generateClass:function(t,e){return" ".concat(t," ").concat(t+this.getTargetSelectorSuffix(e))},getClass:function(t,e){var i=this,r=/s$/.test(t),n=/^(area|arc|line|treemap)s?$/.test(t),a=r?"id":"index";return function(o){var s=o.data||o,A=(e?i.generateClass(De[r?"shapes":"shape"],s[a]):"")+i.generateClass(De[t],s[n?"id":a]);return A.trim()}},getChartClass:function(t){var e=this;return function(i){return De["chart".concat(t)]+e.classTarget((i.data?i.data:i).id)}},generateExtraLineClass:function(){var t=this,e=t.config.line_classes||[],i=[];return function(r){var n,a=r.id||((n=r.data)===null||n===void 0?void 0:n.id)||r;return i.indexOf(a)<0&&i.push(a),e[i.indexOf(a)%e.length]}},classRegion:function(t,e){return"".concat(this.generateClass(De.region,e)," ").concat("class"in t?t.class:"")},classTarget:function(t){var e=this.config.data_classes[t],i="";return e&&(i=" ".concat(De.target,"-").concat(e)),this.generateClass(De.target,t)+i},classFocus:function(t){return this.classFocused(t)+this.classDefocused(t)},classFocused:function(t){return" ".concat(this.state.focusedTargetIds.indexOf(t.id)>=0?De.focused:"")},classDefocused:function(t){return" ".concat(this.state.defocusedTargetIds.indexOf(t.id)>=0?De.defocused:"")},getTargetSelectorSuffix:function(t){var e=t||t===0?"-".concat(t):"";return e.replace(/([\s?!@#$%^&*()_=+,.<>'":;\[\]\/|~`{}\\])/g,"-")},selectorTarget:function(t,e,i){e===void 0&&(e=""),i===void 0&&(i="");var r=this.getTargetSelectorSuffix(t);return"".concat(e,".").concat(De.target+r," ").concat(i,", ").concat(e,".").concat(De.circles+r," ").concat(i)},selectorTargets:function(t,e){var i=this,r=t||[];return r.length?r.map(function(n){return i.selectorTarget(n,e)}):null},selectorLegend:function(t){return".".concat(De.legendItem+this.getTargetSelectorSuffix(t))},selectorLegends:function(t){var e=this;return t!=null&&t.length?t.map(function(i){return e.selectorLegend(i)}):null}},sB={categoryName:function(t){var e=this.config.axis_x_categories;return t<(e==null?void 0:e.length)?e[t]:t}},AB=function(t,e,i){var r=G(t.cloneNode(!0));return r.attr("id",i).insert("rect",":first-child").attr("width",r.attr("width")).attr("height",r.attr("height")).style("fill",e),{id:i,node:r.node()}};function lB(t){var e=Qt.colorPattern,i=ye.body,r=i[e];if(!r){var n=";",a=t.classed(Ts.colorPattern,!0).style("background-image");t.classed(Ts.colorPattern,!1),a.indexOf(n)>-1&&(r=a.replace(/url[^#]*|["'()]|(\s|%20)/g,"").split(n).map(function(o){return o.trim().replace(/[\"'\s]/g,"")}).filter(Boolean),i[e]=r)}return r}var cB=["#1f77b4","#ff7f0e","#2ca02c","#d62728","#9467bd","#8c564b","#e377c2","#7f7f7f","#bcbd22","#17becf"],uB={generateColor:function(){var t=this,e=t.$el,i=t.config,r=i.data_colors,n=i.data_color,a=[],o=Ee(i.color_pattern)?i.color_pattern:Xu(lB(e.chart)||cB).range(),s=o;if(te(i.color_tiles)){var A=i.color_tiles.bind(t.api)(),l=o.map(function(c,u){var d=c.replace(/[#\(\)\s,]/g,""),h="".concat(t.state.datetimeId,"-pattern-").concat(d,"-").concat(u);return AB(A[u%A.length],c,h)});o=l.map(function(c){return"url(#".concat(c.id,")")}),t.patterns=l}return function(c){var u,d=c.id||((u=c.data)===null||u===void 0?void 0:u.id)||c,h=t.isTypeOf(d,["line","spline","step"])||!i.data_types[d],g;return te(r[d])?g=r[d].bind(t.api)(c):r[d]?g=r[d]:(a.indexOf(d)<0&&a.push(d),g=h?s[a.indexOf(d)%s.length]:o[a.indexOf(d)%o.length],r[d]=g),te(n)?n.bind(t.api)(g,c):g}},generateLevelColor:function(){var t=this,e=t.config,i=e.color_pattern,r=e.color_threshold,n=r.unit==="value",a=r.max||100,o=r.values&&r.values.length?r.values:[];return Ee(r)?function(s){for(var A=n?s:s*100/a,l=i[i.length-1],c=0,u=o.length;c<u;c++)if(A<=o[c]){l=i[c];break}return l}:null},generateDataLabelBackgroundColorFilter:function(t){var e=this,i=e.$el,r=e.config,n=e.state,a=t||r.data_labels_backgroundColors;if(a){var o=[];Qe(a)?o.push(""):xe(a)&&(o=Object.keys(a)),o.forEach(function(s){var A="".concat(n.datetimeId,"-labels-bg").concat(e.getTargetSelectorSuffix(s)).concat(t?e.getTargetSelectorSuffix(t):"");i.defs.append("filter").attr("x","0").attr("y","0").attr("width","1").attr("height","1").attr("id",A).html('<feFlood flood-color="'.concat(s===""?a:a[s],'" /><feComposite in="SourceGraphic"/>'))})}},getGradienColortUrl:function(t){return"url(#".concat(this.state.datetimeId,"-gradient").concat(this.getTargetSelectorSuffix(t),")")},updateLinearGradient:function(){var t=this,e=t.config,i=t.data.targets,r=t.state.datetimeId,n=t.$el.defs;i.forEach(function(a){var o="".concat(r,"-gradient").concat(t.getTargetSelectorSuffix(a.id)),s=t.isAreaType(a)&&"area"||t.isBarType(a)&&"bar",A=e.axis_rotated;if(s&&n.select("#".concat(o)).empty()){var l=t.color(a),c=e["".concat(s,"_linearGradient")],u=c.x,d=u===void 0?A?[1,0]:[0,0]:u,h=c.y,g=h===void 0?A?[0,0]:[0,1]:h,f=c.stops,p=f===void 0?[[0,l,1],[1,l,0]]:f,v=n.append("linearGradient").attr("id","".concat(o)).attr("x1",d[0]).attr("x2",d[1]).attr("y1",g[0]).attr("y2",g[1]);p.forEach(function(m){var w=te(m[1])?m[1].bind(t.api)(a.id):m[1];v.append("stop").attr("offset",m[0]).attr("stop-color",w||l).attr("stop-opacity",m[2])})}})},setOverColor:function(t,e){var i=this,r=i.config,n=i.$el.main,a=r.color_onover,o=t?a:i.color;xe(o)?o=function(s){var A=s.id;return A in a?a[A]:i.color(A)}:Qe(o)?o=function(){return a}:te(a)&&(o=o.bind(i.api)),n.selectAll(xe(e)?".".concat(Ue.arc).concat(i.getTargetSelectorSuffix(e.id)):".".concat(We.shape,"-").concat(e)).style("fill",o)}},dB={getYDomainMinMax:function(t,e){var i=this,r=i.axis,n=i.config,a=e==="min",o=n.data_groups,s=i.mapToIds(t),A=i.getValuesAsIdKeyed(t);if(o.length>0){var l=i["has".concat(a?"Negative":"Positive","ValueInTargets")](t);o.forEach(function(c){var u=c.filter(function(g){return s.indexOf(g)>=0});if(u.length){var d=u[0],h=r.getId(d);l&&A[d]&&(A[d]=A[d].map(function(g){return(a?g<0:g>0)?g:0})),u.filter(function(g,f){return f>0}).forEach(function(g){if(A[g]){var f=r.getId(g);A[g].forEach(function(p,v){var m=+p,w=a?m>0:m<0;f===h&&!(l&&w)&&(A[d][v]+=m)})}})}})}return Zt(e,Object.keys(A).map(function(c){return Zt(e,A[c])}))},isHiddenTargetWithYDomain:function(t){var e=this;return e.state.hiddenTargetIds.some(function(i){return e.axis.getId(i)===t})},getYDomain:function(t,e,i){var r=this,n=r.axis,a=r.config,o=r.scale,s="axis_".concat(e);if(r.isStackNormalized())return[0,100];var A=(o==null?void 0:o[e])&&o[e].type==="log",l=t.filter(function(C){return n.getId(C.id)===e}),c=i?r.filterByXDomain(l,i):l;if(c.length===0)return r.isHiddenTargetWithYDomain(e)?o[e].domain():e==="y2"?o.y.domain():r.getYDomain(t,"y2",i);var u=a["".concat(s,"_min")],d=a["".concat(s,"_max")],h=a["".concat(s,"_center")],g=a["".concat(s,"_inverted")],f=r.hasDataLabel()&&a.axis_rotated,p=r.hasDataLabel()&&!a.axis_rotated,v=r.getYDomainMinMax(c,"min"),m=r.getYDomainMinMax(c,"max"),w=Ge([Z.BAR,Z.BUBBLE,Z.SCATTER],Jt.Line,!0).some(function(C){var I=C.indexOf("area")>-1?"area":C;return r.hasType(C,c,!0)&&a["".concat(I,"_zerobased")]});v=V(u)?u:V(d)?v<=d?v:d-10:v,m=V(d)?d:V(u)?u<=m?m:u+10:m,isNaN(v)&&(v=0),isNaN(m)&&(m=v),v===m&&(v<0?m=0:v=0);var x=v>=0&&m>=0,_=v<=0&&m<=0;(V(u)&&x||V(d)&&_)&&(w=!1),w&&(x&&(v=0),_&&(m=0));var b=Math.abs(m-v),E={top:b*.1,bottom:b*.1};if(me(h)){var U=Math.max(Math.abs(v),Math.abs(m));m=h+U,v=h-U}if(f){var H=$r(o.y.range()),T=r.getDataLabelLength(v,m,"width").map(function(C){return C/H});["bottom","top"].forEach(function(C,I){E[C]+=b*(T[I]/(1-T[0]-T[1]))})}else if(p){var y=r.getDataLabelLength(v,m,"height");["bottom","top"].forEach(function(C,I){E[C]+=r.convertPixelToScale("y",y[I],b)})}E=r.getResettedPadding(E);var Q=a["".concat(s,"_padding")];Ee(Q)&&["bottom","top"].forEach(function(C){E[C]=n.getPadding(Q,C,E[C],b)}),w&&(x&&(E.bottom=v),_&&(E.top=-m));var B=A?[v,m].map(function(C){return C<0?0:C}):[v-E.bottom,m+E.top];return g?B.reverse():B},getXDomainMinMax:function(t,e){var i,r=this,n=r.config["axis_x_".concat(e)],a=Zt(e,t.map(function(s){return Zt(e,s.values.map(function(A){return A.x}))})),o=xe(n)?n.value:n;return o=me(o)&&(!((i=r.axis)===null||i===void 0)&&i.isTimeSeries())?kt.bind(this)(o):o,xe(n)&&n.fit&&(e==="min"&&o<a||e==="max"&&o>a)&&(o=void 0),me(o)?o:a},getXDomainPadding:function(t,e){var i=this,r=i.axis,n=i.config,a=n.axis_x_padding,o=r.isTimeSeries()&&e,s=$r(t),A;if(r.isCategorized()||o)A=0;else if(i.hasType("bar")){var l=i.getMaxDataCount();A=l>1?s/(l-1)/2:.5}else A=i.getResettedPadding(s*.01);var c=J(a)?{left:a,right:a}:a,u=c.left,d=u===void 0?A:u,h=c.right,g=h===void 0?A:h;if(a.unit==="px"){var f=Math.abs(s+s*.2);d=r.getPadding(a,"left",A,f),g=r.getPadding(a,"right",A,f)}else{var p=s+d+g;if(o&&p){var v=s/e/p;d=d/p/v,g=g/p/v}}return{left:d,right:g}},getXDomain:function(t){var e=this,i=e.axis,r=e.config,n=e.scale.x,a=r.axis_x_inverted,o=[e.getXDomainMinMax(t,"min"),e.getXDomainMinMax(t,"max")],s=o[0],A=s===void 0?0:s,l=o[1],c=l===void 0?0:l;if(n.type!=="log"){var u=i.isCategorized(),d=i.isTimeSeries(),h=e.getXDomainPadding(o),g=o[0],f=o[1];g-f===0&&!u&&(d?(g=new Date(g.getTime()*.5),f=new Date(f.getTime()*1.5)):(g=g===0?1:g*.5,f=f===0?-1:f*1.5)),(g||g===0)&&(A=d?new Date(g.getTime()-h.left):g-h.left),(f||f===0)&&(c=d?new Date(f.getTime()+h.right):f+h.right)}return a?[c,A]:[A,c]},updateXDomain:function(t,e,i,r,n){var a,o=this,s=o.config,A=o.org,l=o.scale,c=l.x,u=l.subX,d=s.zoom_enabled;if(i&&(c.domain(n||nr(o.getXDomain(t),!s.axis_x_inverted)),A.xDomain=c.domain(),d&&o.zoom.updateScaleExtent(),u.domain(c.domain()),(a=o.brush)===null||a===void 0||a.scale(u)),e){var h=n||!o.brush||Tx(o)?A.xDomain:Cd(o).map(u.invert);c.domain(h),d&&o.zoom.updateScaleExtent()}return r&&c.domain(o.trimXDomain(c.orgDomain())),c.domain()},trimXDomain:function(t){var e=this,i=e.config.axis_x_inverted,r=e.getZoomDomain(),n=r[0],a=r[1];return(i?t[0]>=n:t[0]<=n)&&(t[0]=n,t[1]=+t[1]+(n-t[0])),(i?t[1]<=a:t[1]>=a)&&(t[0]=+t[0]-(t[1]-a),t[1]=a),t},getZoomDomain:function(){var t=this,e=t.config,i=t.org,r=i.xDomain,n=r[0],a=r[1];return me(e.zoom_x_min)&&(n=Zt("min",[n,e.zoom_x_min])),me(e.zoom_x_max)&&(a=Zt("max",[a,e.zoom_x_max])),[n,a]},convertPixelToScale:function(t,e,i){var r=this,n=r.config,a=r.state,o=n.axis_rotated,s;return t==="x"?s=o?"height":"width":s=o?"width":"height",i*(e/a[s])}};function nc(t,e,i){var r=t.config,n="axis_".concat(e,"_tick_format"),a=r[n]?r[n]:t.defaultValueFormat;return a.call(t.api,i)}var hB={yFormat:function(t){return nc(this,"y",t)},y2Format:function(t){return nc(this,"y2",t)},getDefaultValueFormat:function(){var t=this,e=t.defaultArcValueFormat,i=t.yFormat,r=t.y2Format,n=t.hasArcType(null,["gauge","polar","radar"]);return function(a,o,s){var A=n?e:t.axis&&t.axis.getId(s)==="y2"?r:i;return A.call(t,a,o)}},defaultValueFormat:function(t){return V(t)?+t:""},defaultArcValueFormat:function(t,e){return"".concat((e*100).toFixed(1),"%")},defaultPolarValueFormat:function(t){return"".concat(t)},dataLabelFormat:function(t){var e=this,i=e.config.data_labels,r=function(a){return V(a)?+a:""},n=r;return te(i.format)?n=i.format:St(i.format)&&(i.format[t]?n=i.format[t]===!0?r:i.format[t]:n=function(){return""}),n.bind(e.api)}};function xn(t){var e=this,i=e.getDataById(t),r=e.levelColor?e.levelColor(i.values[0].value):e.color(i);return r}var gB={initLegend:function(){var t=this,e=t.config,i=t.$el;t.legendItemTextBox={},t.state.legendHasRendered=!1,e.legend_show?(e.legend_contents_bindto||(i.legend=t.$el.svg.append("g").classed(ue.legend,!0).attr("transform",t.getTranslate("legend"))),t.updateLegend()):t.state.hiddenLegendIds=t.mapToIds(t.data.targets)},updateLegend:function(t,e,i){var r,n=this,a=n.config,o=n.state,s=n.scale,A=n.$el,l=e||{withTransform:!1,withTransitionForTransform:!1,withTransition:!1};l.withTransition=ii(l,"withTransition",!0),l.withTransitionForTransform=ii(l,"withTransitionForTransform",!0),a.legend_contents_bindto&&a.legend_contents_template?n.updateLegendTemplate():o.hasTreemap||n.updateLegendElement(t||n.mapToIds(n.data.targets),l,i),(r=A.legend)===null||r===void 0||r.selectAll(".".concat(ue.legendItem)).classed(ue.legendItemHidden,function(c){var u=!n.isTargetToShow(c);return u&&(this.style.opacity=null),u}),n.updateScales(!1,!s.zoom),n.updateSvgSize(),n.transformAll(l.withTransitionForTransform,i),o.legendHasRendered=!0},updateLegendTemplate:function(){var t=this,e=t.config,i=t.$el,r=G(e.legend_contents_bindto),n=e.legend_contents_template;if(!r.empty()){var a=t.mapToIds(t.data.targets),o=[],s="";a.forEach(function(l){var c=te(n)?n.bind(t.api)(l,t.color(l),t.api.data(l)[0].values):ys(n,{COLOR:t.color(l),TITLE:l});c&&(o.push(l),s+=c)});var A=r.html(s).selectAll(function(){return this.childNodes}).data(o);t.setLegendItem(A),i.legend=r}},updateSizeForLegend:function(t){var e=this,i=e.config,r=e.state,n=r.isLegendTop,a=r.isLegendLeft,o=r.isLegendRight,s=r.isLegendInset,A=r.current,l=t.width,c=t.height,u={top:n?e.getCurrentPaddingTop()+i.legend_inset_y+5.5:A.height-c-e.getCurrentPaddingBottom()-i.legend_inset_y,left:a?e.getCurrentPaddingLeft()+i.legend_inset_x+.5:A.width-l-e.getCurrentPaddingRight()-i.legend_inset_x+.5};e.state.margin3={top:o?0:s?u.top:A.height-c,right:NaN,bottom:0,left:o?A.width-l:s?u.left:0}},transformLegend:function(t){var e=this,i=e.$el.legend,r=e.$T;r(i,t).attr("transform",e.getTranslate("legend"))},updateLegendStep:function(t){this.state.legendStep=t},updateLegendItemWidth:function(t){this.state.legendItemWidth=t},updateLegendItemHeight:function(t){this.state.legendItemHeight=t},updateLegendItemColor:function(t,e){var i=this.$el.legend;i&&i.select(".".concat(ue.legendItem,"-").concat(t," line")).style("stroke",e)},getLegendWidth:function(){var t=this,e=t.state,i=e.current.width,r=e.isLegendRight,n=e.isLegendInset,a=e.legendItemWidth,o=e.legendStep;return t.config.legend_show?r||n?a*(o+1):i:0},getLegendHeight:function(){var t,e=this,i=e.state,r=i.current,n=i.isLegendRight,a=i.legendItemHeight,o=i.legendStep,s=((t=e.config.padding)===null||t===void 0?void 0:t.mode)==="fit";return e.config.legend_show?n?r.height:(s?10:Math.max(20,a))*(o+1):0},opacityForUnfocusedLegend:function(t){return t.classed(ue.legendItemHidden)?null:"0.3"},toggleFocusLegend:function(t,e){var i=this,r=i.$el.legend,n=i.$T,a=i.mapToTargetIds(t);r&&n(r.selectAll(".".concat(ue.legendItem)).filter(function(o){return a.indexOf(o)>=0}).classed(ve.legendItemFocused,e)).style("opacity",function(){return e?null:i.opacityForUnfocusedLegend.call(i,G(this))})},revertLegend:function(){var t=this,e=t.$el.legend,i=t.$T;e&&i(e.selectAll(".".concat(ue.legendItem)).classed(ve.legendItemFocused,!1)).style("opacity",null)},showLegend:function(t){var e=this,i=e.config,r=e.$el,n=e.$T;i.legend_show||(i.legend_show=!0,r.legend?r.legend.style("visibility",null):e.initLegend(),!e.state.legendHasRendered&&e.updateLegend()),e.removeHiddenLegendIds(t),n(r.legend.selectAll(e.selectorLegends(t)).style("visibility",null)).style("opacity",null)},hideLegend:function(t){var e=this,i=e.config,r=e.$el.legend;i.legend_show&&Ar(t)&&(i.legend_show=!1,r.style("visibility","hidden")),e.addHiddenLegendIds(t),r.selectAll(e.selectorLegends(t)).style("opacity","0").style("visibility","hidden")},getLegendItemTextBox:function(t,e){var i=this,r=i.cache,n=i.state,a,o=Qt.legendItemTextBox;return t&&(a=!n.redrawing&&r.get(o)||{},a[t]||(a[t]=i.getTextRect(e,ue.legendItem),r.add(o,a)),a=a[t]),a},setLegendItem:function(t){var e=this,i=e.$el,r=e.api,n=e.config,a=e.state,o=a.inputType==="touch",s=e.hasType("gauge"),A=n.boost_useCssRule;t.attr("class",function(l){var c=G(this),u=!c.empty()&&c.attr("class")||"";return u+e.generateClass(ue.legendItem,l)}).style("visibility",function(l){return e.isLegendToShow(l)?null:"hidden"}),n.interaction_enabled&&(A&&[[".".concat(ue.legendItem),"cursor:pointer"],[".".concat(ue.legendItem," text"),"pointer-events:none"],[".".concat(ue.legendItemPoint," text"),"pointer-events:none"],[".".concat(ue.legendItemTile),"pointer-events:none"],[".".concat(ue.legendItemEvent),"fill-opacity:0"]].forEach(function(l){var c=l[0],u=l[1];e.setCssRule(!1,c,[u])(i.legend)}),t.style("cursor",e.getStylePropValue("pointer")).on("click",function(l,c){Te(n.legend_item_onclick,r,c)||(l.altKey?(r.hide(),r.show(c)):(r.toggle(c),G(this).classed(ve.legendItemFocused,!1))),o&&e.hideTooltip()}),!o&&t.on("mouseout",function(l,c){Te(n.legend_item_onout,r,c)||(G(this).classed(ve.legendItemFocused,!1),s&&e.undoMarkOverlapped(e,".".concat(Et.gaugeValue)),e.api.revert())}).on("mouseover",function(l,c){Te(n.legend_item_onover,r,c)||(G(this).classed(ve.legendItemFocused,!0),s&&e.markOverlapped(c,e,".".concat(Et.gaugeValue)),!a.transiting&&e.isTargetToShow(c)&&r.focus(c))}))},updateLegendElement:function(t,e){var i=this,r=i.config,n=i.state,a=i.$el.legend,o=i.$T,s=r.legend_item_tile_type,A=s!=="circle",l=r.legend_item_tile_r,c={width:A?r.legend_item_tile_width:l*2,height:A?r.legend_item_tile_height:l*2},u={padding:{top:4,right:10},max:{width:0,height:0},posMin:10,step:0,tileWidth:c.width+5,totalLength:0},d={offsets:{},widths:{},heights:{},margins:[0],steps:{}},h,g,f,p=t.filter(function(b){return!me(r.data_names[b])||r.data_names[b]!==null}),v=e.withTransition,m=i.getUpdateLegendPositions(p,u,d);n.isLegendInset&&(u.step=r.legend_inset_step?r.legend_inset_step:p.length,i.updateLegendStep(u.step)),n.isLegendRight?(h=function(b){return u.max.width*d.steps[b]},g=function(b){return d.margins[d.steps[b]]+d.offsets[b]}):n.isLegendInset?(h=function(b){return u.max.width*d.steps[b]+10},g=function(b){return d.margins[d.steps[b]]+d.offsets[b]}):(h=function(b){return d.margins[d.steps[b]]+d.offsets[b]},g=function(b){return u.max.height*d.steps[b]});var w={xText:function(b,E){return h(b,E)+4+c.width},xRect:function(b,E){return h(b,E)},x1Tile:function(b,E){return h(b,E)-2},x2Tile:function(b,E){return h(b,E)-2+c.width},yText:function(b,E){return g(b,E)+9},yRect:function(b,E){return g(b,E)-5},yTile:function(b,E){return g(b,E)+4}};i.generateLegendItem(p,c,m,w),f=a.select(".".concat(ue.legendBackground," rect")),n.isLegendInset&&u.max.width>0&&f.size()===0&&(f=a.insert("g",".".concat(ue.legendItem)).attr("class",ue.legendBackground).append("rect"));var x=a.selectAll("text").data(p).text(function(b){return me(r.data_names[b])?r.data_names[b]:b}).each(function(b,E){m(this,b,E)});o(x,v).attr("x",w.xText).attr("y",w.yText);var _=a.selectAll("rect.".concat(ue.legendItemEvent)).data(p);o(_,v).attr("width",function(b){return d.widths[b]}).attr("height",function(b){return d.heights[b]}).attr("x",w.xRect).attr("y",w.yRect),i.updateLegendItemPos(p,v,w),f&&o(f,v).attr("height",i.getLegendHeight()-12).attr("width",u.max.width*(u.step+1)+10),i.updateLegendItemWidth(u.max.width),i.updateLegendItemHeight(u.max.height),i.updateLegendStep(u.step)},getUpdateLegendPositions:function(t,e,i){var r=this,n=r.config,a=r.state,o=a.isLegendRight||a.isLegendInset;return function(s,A,l){var c=l===0,u=l===t.length-1,d=r.getLegendItemTextBox(A,s),h=d.width+e.tileWidth+(u&&!o?0:e.padding.right)+n.legend_padding,g=d.height+e.padding.top,f=o?g:h,p=o?r.getLegendHeight():r.getLegendWidth(),v,m=function(x,_){_||(v=(p-e.totalLength-f)/2,v<e.posMin&&(v=(p-f)/2,e.totalLength=0,e.step++)),i.steps[x]=e.step,i.margins[e.step]=a.isLegendInset?10:v,i.offsets[x]=e.totalLength,e.totalLength+=f};if(c&&(e.totalLength=0,e.step=0,e.max.width=0,e.max.height=0),n.legend_show&&!r.isLegendToShow(A)){i.widths[A]=0,i.heights[A]=0,i.steps[A]=0,i.offsets[A]=0;return}i.widths[A]=h,i.heights[A]=g,(!e.max.width||h>=e.max.width)&&(e.max.width=h),(!e.max.height||g>=e.max.height)&&(e.max.height=g);var w=o?e.max.height:e.max.width;n.legend_equally?(Object.keys(i.widths).forEach(function(x){return i.widths[x]=e.max.width}),Object.keys(i.heights).forEach(function(x){return i.heights[x]=e.max.height}),v=(p-w*t.length)/2,v<e.posMin?(e.totalLength=0,e.step=0,t.forEach(function(x){return m(x)})):m(A,!0)):m(A)}},generateLegendItem:function(t,e,i,r){var n=this,a=n.config,o=n.state,s=n.$el.legend,A=a.legend_usePoint,l=a.legend_item_tile_r,c=a.legend_item_tile_type,u=c!=="circle",d=o.isLegendRight||o.isLegendInset,h=-200,g=s.selectAll(".".concat(ue.legendItem)).data(t).enter().append("g");if(n.setLegendItem(g),g.append("text").text(function(p){return me(a.data_names[p])?a.data_names[p]:p}).each(function(p,v){i(this,p,v)}).style("pointer-events",n.getStylePropValue("none")).attr("x",d?r.xText:h).attr("y",d?h:r.yText),g.append("rect").attr("class",ue.legendItemEvent).style("fill-opacity",n.getStylePropValue("0")).attr("x",d?r.xRect:h).attr("y",d?h:r.yRect),A){var f=[];g.append(function(p){var v=Ee(a.point_pattern)?a.point_pattern:[a.point_type];f.indexOf(p)===-1&&f.push(p);var m=v[f.indexOf(p)%v.length];return m==="rectangle"&&(m="rect"),ye.createElementNS(ji.svg,"hasValidPointType"in n&&n.hasValidPointType(m)?m:"use")}).attr("class",ue.legendItemPoint).style("fill",xn.bind(n)).style("pointer-events",n.getStylePropValue("none")).attr("href",function(p,v,m){var w=m[v],x=w.nodeName.toLowerCase(),_=n.getTargetSelectorSuffix(p);return x==="use"?"#".concat(o.datetimeId,"-point").concat(_):void 0})}else g.append(u?"line":c).attr("class",ue.legendItemTile).style("stroke",xn.bind(n)).style("pointer-events",n.getStylePropValue("none")).call(function(p){c==="circle"?p.attr("r",l).style("fill",xn.bind(n)).attr("cx",d?r.x2Tile:h).attr("cy",d?h:r.yTile):u&&p.attr("stroke-width",e.height).attr("x1",d?r.x1Tile:h).attr("y1",d?h:r.yTile).attr("x2",d?r.x2Tile:h).attr("y2",d?h:r.yTile)})},updateLegendItemPos:function(t,e,i){var r=this,n=r.config,a=r.$el.legend,o=r.$T,s=n.legend_usePoint,A=n.legend_item_tile_type,l=A!=="circle";if(s){var c=a.selectAll(".".concat(ue.legendItemPoint)).data(t);o(c,e).each(function(){var u=this.nodeName.toLowerCase(),d=n.point_r,h="x",g="y",f=2,p=2.5,v=null,m=null,w=null;if(u==="circle"){var x=d*.2;h="cx",g="cy",v=d+x,f=d*2,p=-x}else if(u==="rect"){var x=d*2.5;m=x,w=x,p=3}G(this).attr(h,function(_){return i.x1Tile(_)+f}).attr(g,function(_){return i.yTile(_)-p}).attr("r",v).attr("width",m).attr("height",w)})}else{var c=a.selectAll(".".concat(ue.legendItemTile)).data(t);o(c,e).style("stroke",xn.bind(r)).call(function(d){A==="circle"?d.attr("cx",function(h){var g=i.x2Tile(h);return g-(g-i.x1Tile(h))/2}).attr("cy",i.yTile):l&&d.attr("x1",i.x1Tile).attr("y1",i.yTile).attr("x2",i.x2Tile).attr("y2",i.yTile)})}}},fB={redraw:function(t){var e,i,r;t===void 0&&(t={});var n=this,a=n.config,o=n.state,s=n.$el,A=s.main,l=s.treemap;o.redrawing=!0;var c=n.filterTargetsToShow(n.data.targets),u=t.flow,d=t.initializing,h=n.getWithOption(t),g=h.Transition?a.transition_duration:0,f=h.TransitionForExit?g:0,p=h.TransitionForAxis?g:0,v=(e=n.axis)===null||e===void 0?void 0:e.generateTransitions(p);n.updateSizes(d),h.Legend&&a.legend_show?(t.withTransition=!!g,!l&&n.updateLegend(n.mapToIds(n.data.targets),t,v)):h.Dimension&&n.updateDimension(!0),!l&&(!n.hasArcType()||o.hasRadar)&&n.updateCircleY&&(n.circleY=n.updateCircleY()),a.data_empty_label_text&&A.select("text.".concat(qe.text,".").concat(Ae.empty)).attr("x",o.width/2).attr("y",o.height/2).text(a.data_empty_label_text).style("display",c.length?"none":null),o.hasAxis?(n.axis.redrawAxis(c,h,v,u,d),n.hasGrid()&&n.updateGrid(),a.regions.length&&n.updateRegion(),["bar","candlestick","line","area"].forEach(function(m){var w=Xt(m);(/^(line|area)$/.test(m)&&n.hasTypeOf(w)||n.hasType(m))&&n["update".concat(w)](h.TransitionForExit)}),s.text&&A.selectAll(".".concat(He.selectedCircles)).filter(n.isBarType.bind(n)).selectAll("circle").remove(),a.interaction_enabled&&!u&&h.EventRect&&(n.redrawEventRect(),(i=n.bindZoomEvent)===null||i===void 0||i.call(n))):(s.arcs&&n.redrawArc(g,f,h.Transform),s.radar&&n.redrawRadar(),s.polar&&n.redrawPolar(),l&&n.updateTreemap(f)),!o.resizing&&!l&&(n.hasPointType()||o.hasRadar)&&n.updateCircle(),n.hasDataLabel()&&!n.hasArcType(null,["radar"])&&n.updateText(),(r=n.redrawTitle)===null||r===void 0||r.call(n),d&&n.updateTypesElements(),n.generateRedrawList(c,u,g,h.Subchart),n.callPluginHook("$redraw",t,g)},generateRedrawList:function(t,e,i,r){var n=this,a=n.config,o=n.state,s=n.getDrawShape();o.hasAxis&&a.subchart_show&&n.redrawSubchart(r,i,s);var A=e&&n.generateFlow({targets:t,flow:e,duration:e.duration,shape:s,xv:n.xv.bind(n)}),l=(i||A)&&an(),c=n.getRedrawList(s,e,A,l),u=function(){A&&A(),o.redrawing=!1,Te(a.onrendered,n.api)};if(u)if(l&&c.length){var d=Fd();Lu().duration(i).each(function(){c.reduce(function(h,g){return h.concat(g)},[]).forEach(function(h){return d.add(h)})}).call(d,u)}else o.transiting||u();n.mapToIds(n.data.targets).forEach(function(h){o.withoutFadeIn[h]=!0})},getRedrawList:function(t,e,i,r){var n=this,a=n.config,o=n.state,s=o.hasAxis,A=o.hasRadar,l=o.hasTreemap,c=n.$el.grid,u=t.pos,d=u.cx,h=u.cy,g=u.xForText,f=u.yForText,p=[];return s&&((a.grid_x_lines.length||a.grid_y_lines.length)&&p.push(n.redrawGrid(r)),a.regions.length&&p.push(n.redrawRegion(r)),Object.keys(t.type).forEach(function(v){var m=Xt(v),w=t.type[v];(/^(area|line)$/.test(v)&&n.hasTypeOf(m)||n.hasType(v))&&p.push(n["redraw".concat(m)](w,r))}),!e&&c.main&&p.push(n.updateGridFocus())),(!n.hasArcType()||A)&&Ee(a.data_labels)&&a.data_labels!==!1&&p.push(n.redrawText(g,f,e,r)),(n.hasPointType()||A)&&!a.point_focus_only&&n.redrawCircle&&p.push(n.redrawCircle(d,h,r,i)),l&&p.push(n.redrawTreemap(r)),p},updateAndRedraw:function(t){t===void 0&&(t={});var e=this,i=e.config,r=e.state,n;t.withTransition=ii(t,"withTransition",!0),t.withTransform=ii(t,"withTransform",!1),t.withLegend=ii(t,"withLegend",!1),t.withUpdateXDomain=!0,t.withUpdateOrgXDomain=!0,t.withTransitionForExit=!1,t.withTransitionForTransform=ii(t,"withTransitionForTransform",t.withTransition),t.withLegend&&i.legend_show||(r.hasAxis&&(n=e.axis.generateTransitions(t.withTransitionForAxis?i.transition_duration:0)),e.updateScales(),e.updateSvgSize(),e.transformAll(t.withTransitionForTransform,n)),e.redraw(t,n)}};function Ti(t,e,i){t===void 0&&(t="linear"),e===void 0&&(e=0),i===void 0&&(i=1);var r={linear:sa,log:Ju,_log:Wu,time:X0,utc:G0}[t]();return r.type=t,/_?log/.test(t)&&r.clamp(!0),r.range([e,i])}var pB={getXScale:function(t,e,i,r){var n=this,a=n.scale.zoom||Ti(n.axis.getAxisType("x"),t,e);return n.getCustomizedXScale(i?a.domain(i):a,r)},getYScale:function(t,e,i,r){var n=this,a=Ti(n.axis.getAxisType(t),e,i);return r&&a.domain(r),a},getYScaleById:function(t,e){var i;e===void 0&&(e=!1);var r=((i=this.axis)===null||i===void 0?void 0:i.getId(t))==="y2",n=e?r?"subY2":"subY":r?"y2":"y";return this.scale[n]},getCustomizedXScale:function(t,e){var i=this,r=e||function(){return i.axis.x.tickOffset()},n=i.config.axis_x_inverted,a=function(s,A){var l=t(s)+r();return A?l:Math.ceil(l)};for(var o in t)a[o]=t[o];return a.orgDomain=function(){return t.domain()},a.orgScale=function(){return t},i.axis.isCategorized()&&(a.domain=function(s){var A=s;return arguments.length?(t.domain(A),a):(A=this.orgDomain(),n?[A[0]+1,A[1]]:[A[0],A[1]+1])}),a},updateScales:function(t,e){var i,r;e===void 0&&(e=!0);var n=this,a=n.axis,o=n.config,s=n.format,A=n.org,l=n.scale,c=n.state,u=c.current,d=c.width,h=c.height,g=c.width2,f=c.height2,p=c.hasAxis,v=c.hasTreemap;if(p){var m=o.axis_rotated,w=n.getResettedPadding(1),x={x:m?w:0,y:m?0:h,subX:m?1:0,subY:m?0:f},_={x:m?h:d,y:m?d:w,subX:m?h:d,subY:m?g:1},b=e&&((i=l.x)===null||i===void 0?void 0:i.orgDomain()),E=e&&A.xDomain;l.x=n.getXScale(x.x,_.x,b,function(){return a.x.tickOffset()}),l.subX=n.getXScale(x.x,_.x,E,function(H){var T;return H%1?0:((T=a.subX)!==null&&T!==void 0?T:a.x).tickOffset()}),s.xAxisTick=a.getXAxisTickFormat(),s.subXAxisTick=a.getXAxisTickFormat(!0),a.setAxis("x",l.x,o.axis_x_tick_outer,t),o.subchart_show&&a.setAxis("subX",l.subX,o.axis_x_tick_outer,t),l.y=n.getYScale("y",x.y,_.y,l.y?l.y.domain():o.axis_y_default),l.subY=n.getYScale("y",x.subY,_.subY,l.subY?l.subY.domain():o.axis_y_default),a.setAxis("y",l.y,o.axis_y_tick_outer,t),o.axis_y2_show&&(l.y2=n.getYScale("y2",x.y,_.y,l.y2?l.y2.domain():o.axis_y2_default),l.subY2=n.getYScale("y2",x.subY,_.subY,l.subY2?l.subY2.domain():o.axis_y2_default),a.setAxis("y2",l.y2,o.axis_y2_tick_outer,t))}else if(v){var U=n.getCurrentPadding();l.x=sa().rangeRound([U.left,u.width-U.right]),l.y=sa().rangeRound([U.top,u.height-U.bottom])}else(r=n.updateArc)===null||r===void 0||r.call(n)},xx:function(t){var e=this,i=e.config,r=e.scale,n=r.x,a=r.zoom,o=i.zoom_enabled&&a?a:n;return t?o(V(t.x)?t.x:t):null},xv:function(t){var e=this,i=e.axis,r=e.config,n=e.scale,a=n.x,o=n.zoom,s=r.zoom_enabled&&o?o:a,A=e.getBaseValue(t);return i.isTimeSeries()?A=kt.call(e,A):i.isCategorized()&&Qe(A)&&(A=r.axis_x_categories.indexOf(A)),Math.ceil(s(A))},yv:function(t){var e=this,i=e.scale,r=i.y,n=i.y2,a=t.axis&&t.axis==="y2"?n:r;return Math.ceil(a(e.getBaseValue(t)))},subxx:function(t){return t?this.scale.subX(t.x):null}},vB={getDrawShape:function(){var t=this,e=t.config.axis_rotated,i=t.state,r=i.hasRadar,n=i.hasTreemap,a={type:{},indices:{},pos:{}};if(!n&&["bar","candlestick","line","area"].forEach(function(A){var l=Xt(/^(bubble|scatter)$/.test(A)?"line":A);if(t.hasType(A)||t.hasTypeOf(l)||A==="line"&&(t.hasType("bubble")||t.hasType("scatter"))){var c=t.getShapeIndices(t["is".concat(l,"Type")]),u=t["generateDraw".concat(l)];a.indices[A]=c,a.type[A]=u?u.bind(t)(c,!1):void 0}}),!t.hasArcType()||r||n){var o=void 0,s=void 0;n||(o=r?t.radarCircleX:e?t.circleY:t.circleX,s=r?t.radarCircleY:e?t.circleX:t.circleY),a.pos={xForText:t.generateXYForText(a.indices,!0),yForText:t.generateXYForText(a.indices,!1),cx:(o||function(){}).bind(t),cy:(s||function(){}).bind(t)}}return a},getShapeIndices:function(t){var e=this,i=e.config,r=i.data_xs,n=Ee(r),a={},o=n?{}:0;return n&&bs(Object.keys(r).map(function(s){return r[s]})).forEach(function(s){o[s]=0,a[s]={}}),e.filterTargetsToShow(e.data.targets.filter(t,e)).forEach(function(s){for(var A=(s.id in r)?r[s.id]:"",l=A?a[A]:a,c=0,u=void 0;u=i.data_groups[c];c++)if(!(u.indexOf(s.id)<0)){for(var d=0,h=void 0;h=u[d];d++)if(h in l){l[s.id]=l[h];break}}nt(l[s.id])&&(l[s.id]=A?o[A]++:o++,l.__max__=(A?o[A]:o)-1)}),a},getIndices:function(t,e,i){var r=this,n=r.config,a=n.data_xs,o=n.bar_indices_removeNull,s=e.id,A=e.index;if(r.isBarType(s)&&o){var l={};return r.getAllValuesOnIndex(A,!0).forEach(function(c,u){l[c.id]=u,l.__max__=u}),l}return Ee(a)?t[a[s]]:t},getIndicesMax:function(t){return Ee(this.config.data_xs)?Object.keys(t).map(function(e){return t[e].__max__||0}).reduce(function(e,i){return e+i}):t.__max__},getShapeX:function(t,e,i){var r=this,n=r.config,a=r.scale,o=i?a.subX:a.zoom||a.x,s=n.bar_overlap,A=n.bar_padding,l=function(u,d){return u+d},c=St(t)&&(t._$total.length?t._$total.reduce(l)/2:0);return function(u){var d=r.getIndices(e,u,"getShapeX"),h=u.id in d?d[u.id]:0,g=(d.__max__||0)+1,f=0;if(Ee(u.x)){var p=o(u.x,!0);if(c){var v=t[u.id]||t._$width;f=s?p-v/2:p-v+t._$total.slice(0,h+1).reduce(l)-c}else f=p-(J(t)?t:t._$width)*(g/2-(s?1:h))}return t&&f&&g>1&&A&&(h&&(f+=A*h),g>2?f-=(g-1)*A/2:g===2&&(f-=A/2)),f}},getShapeY:function(t){var e=this,i=e.isStackNormalized();return function(r){var n=r.value;return J(r)?n=r:i?n=e.getRatio("index",r,!0):e.isBubbleZType(r)?n=e.getBubbleZData(r.value,"y"):e.isBarRangeType(r)&&(n=n[1]),e.getYScaleById(r.id,t)(n)}},getShapeYMin:function(t){var e=this,i=e.axis.getId(t),r=e.scale[i],n=r.domain()[0],a=e.config["axis_".concat(i,"_inverted")];return!e.isGrouped(t)&&!a&&n>0?n:0},getShapeOffsetData:function(t){var e=this,i=e.orderTargets(e.filterTargetsToShow(e.data.targets.filter(t,e))),r=e.isStackNormalized(),n=i.map(function(o){var s=o.values,A={};e.isStepType(o)&&(s=e.convertValuesToStep(s));var l=s.reduce(function(c,u){var d=Number(u.x);return c[d]=u,A[d]=r?e.getRatio("index",u,!0):u.value,c},{});return{id:o.id,rowValues:s,rowValueMapByXValue:l,values:A}}),a=i.reduce(function(o,s,A){var l=s.id;return o[l]=A,o},{});return{indexMapByTargetId:a,shapeOffsetTargets:n}},getShapeOffset:function(t,e,i){var r=this,n=r.getShapeOffsetData(t),a=n.shapeOffsetTargets,o=n.indexMapByTargetId,s=r.config.data_groupsZeroAs;return function(A,l){var c=A.id,u=A.value,d=A.x,h=r.getIndices(e,A),g=r.getYScaleById(c,i);if(r.isBarRangeType(A))return g(u[0]);var f=Number(d),p=g(s==="zero"?0:r.getShapeYMin(c)),v=p;return a.filter(function(m){return m.id!==c&&h[m.id]===h[c]}).forEach(function(m){var w=m.id,x=m.rowValueMapByXValue,_=m.rowValues,b=m.values;if(o[w]<o[c]){var E=b[f],U=_[l];if((!U||Number(U.x)!==f)&&(U=x[f]),(U==null?void 0:U.value)*u>=0&&J(E)){var H=u===0?s==="positive"&&E>0||s==="negative"&&E<0:!0;H&&(v+=g(E)-p)}}}),v}},getBarW:function(t,e,i){var r=this,n=r.config,a=r.org,o=r.scale,s=r.getMaxDataCount(),A=t==="bar"&&n.data_groups.length,l="".concat(t,"_width"),c=o.zoom&&!r.axis.isCategorized()?a.xDomain.map(function(h){return o.zoom(h)}).reduce(function(h,g){return Math.abs(h)+g})/s:e.tickInterval(s),u=function(h){var g=h?n[l][h]:n[l],f=h?g.ratio:n["".concat(l,"_ratio")],p=h?g.max:n["".concat(l,"_max")],v=J(g)?g:i?c*f/i:0;return p&&v>p?p:v},d=u();return!A&&St(n[l])&&(d={_$width:d,_$total:[]},r.filterTargetsToShow(r.data.targets).forEach(function(h){n[l][h.id]&&(d[h.id]=u(h.id),d._$total.push(d[h.id]||d._$width))})),d},getShapeByIndex:function(t,e,i){var r=this,n=r.$el,a=V(e)?"-".concat(e):"",o=n[t];return o&&!o.empty()?o=o.filter(function(s){return i?s.id===i:!0}).filter(function(s){return V(e)?s.index===e:!0}):o=(i?n.main.selectAll(".".concat(De["".concat(t,"s")]).concat(r.getTargetSelectorSuffix(i))):n.main).selectAll(".".concat(De[t]).concat(a)),o},isWithinShape:function(t,e){var i,r=this,n=G(t),a;return r.isTargetToShow(e.id)?!((i=r.hasValidPointType)===null||i===void 0)&&i.call(r,t.nodeName)?a=r.isStepType(e)?r.isWithinStep(t,r.getYScaleById(e.id)(e.value)):r.isWithinCircle(t,r.isBubbleType(e)?r.pointSelectR(e)*1.5:0):t.nodeName==="path"&&(a=n.classed(De.bar)?r.isWithinBar(t):!0):a=!1,a},getInterpolate:function(t){var e=this,i=e.getInterpolateType(t);return{basis:ax,"basis-closed":ox,"basis-open":sx,bundle:Ax,cardinal:lx,"cardinal-closed":cx,"cardinal-open":ux,"catmull-rom":dx,"catmull-rom-closed":hx,"catmull-rom-open":gx,"monotone-x":px,"monotone-y":vx,natural:mx,"linear-closed":fx,linear:yA,step:xx,"step-after":wx,"step-before":Bx}[i]},getInterpolateType:function(t){var e=this,i=e.config,r=i.spline_interpolation_type,n=e.isInterpolationType(r)?r:"cardinal";return e.isSplineType(t)?n:e.isStepType(t)?i.line_step_type:"linear"},isWithinBar:function(t){var e=Ut(this.state.event,t),i=_d(t),r=i[0],n=i[1],a=Math.min(r.x,n.x),o=Math.min(r.y,n.y),s=this.config.bar_sensitivity,A=t.getBBox(),l=A.width,c=A.height,u=a-s,d=a+l+s,h=o+c+s,g=o-s,f=u<e[0]&&e[0]<d&&g<e[1]&&e[1]<h;return f}},mB={setContainerSize:function(){var t=this,e=t.state;e.current.width=t.getCurrentWidth(),e.current.height=t.getCurrentHeight()},getCurrentWidth:function(){var t=this;return t.config.size_width||t.getParentWidth()},getCurrentHeight:function(){var t=this,e=t.config,i=e.size_height||t.getParentHeight();return i>0?i:320/(t.hasType("gauge")&&!e.gauge_fullCircle?2:1)},getCurrentPaddingTop:function(){var t=this,e=t.config,i=t.state.hasAxis,r=t.$el,n=i?e.axis_y2_axes.length:0,a=V(e.padding_top)?e.padding_top:0;return r.title&&r.title.node()&&(a+=t.getTitlePadding()),n&&e.axis_rotated&&(a+=t.getHorizontalAxisHeight("y2")*n),a},getCurrentPaddingBottom:function(){var t=this,e=t.config,i=t.state.hasAxis,r=e.axis_rotated?"y":"x",n=i?e["axis_".concat(r,"_axes")].length:0,a=V(e.padding_bottom)?e.padding_bottom:0;return a+(n?t.getHorizontalAxisHeight(r)*n:0)},getCurrentPaddingLeft:function(t){var e,i=this,r=i.config,n=i.state.hasAxis,a=r.axis_rotated,o=((e=r.padding)===null||e===void 0?void 0:e.mode)==="fit",s=a?"x":"y",A=n?r["axis_".concat(s,"_axes")].length:0,l=n?i.getAxisWidthByAxisId(s,t):0;o||(l=ec(l));var c=r["axis_".concat(s,"_inner")]||!r["axis_".concat(s,"_show")]?0:l;return V(r.padding_left)?c=r.padding_left+(o&&a?l:0):n&&a&&(c=r.axis_x_show?o?l:Math.max(l,40):1),n&&(o||r["axis_".concat(s,"_inner")])&&r["axis_".concat(s,"_label")].text&&(c+=i.axis.getAxisLabelPosition("y").isOuter?20:0),c+l*A},getCurrentPaddingRight:function(t){var e,i;t===void 0&&(t=!1);var r=this,n=r.config,a=r.state.hasAxis,o=n.axis_rotated,s=((e=n.padding)===null||e===void 0?void 0:e.mode)==="fit",A=s?2:10,l=r.state.isLegendRight?r.getLegendWidth()+20:0,c=a?n.axis_y2_axes.length:0,u=!((i=r.axis)===null||i===void 0)&&i.getAxisLabelPosition("y2").isOuter?20:0,d=t?r.axis.getXAxisTickTextY2Overflow(A):0,h=a&&!n.axis_y2_inner?r.getAxisWidthByAxisId("y2"):1;s||(h=ec(h));var g=o?0:Math.max(h+l,d);return V(n.padding_right)?g=n.padding_right+(s&&(o||!n.axis_y2_show?A:g))+(a&&!s?1:0):r.axis&&o?g=A+l:r.axis&&(!n.axis_y2_show||n.axis_y2_inner)&&(g=Math.max((s&&!n.axis_y2_show?2:1)+l+u,d)),a&&!o&&s&&n.axis_y2_show&&!n.axis_y2_inner&&n.axis_y2_label.text&&(g+=u),g+h*c},getParentRectValue:function(t){for(var e="offset".concat(Xt(t)),i=this.$el.chart.node(),r=0;r<30&&i&&i.tagName!=="BODY";){try{r=i.getBoundingClientRect()[t]}catch{e in i&&(r=i[e])}i=i.parentNode}var n=ye.body[e];return r>n&&(r=n),r},getParentWidth:function(){return this.getParentRectValue("width")},getParentHeight:function(){var t=this.$el.chart.style("height"),e=0;return t&&(e=/px$/.test(t)?parseInt(t,10):this.getParentRectValue("height")),e},getSvgLeft:function(t){var e=this,i=e.config,r=e.$el,n=i.axis_rotated||!i.axis_rotated&&!i.axis_y_inner,a=i.axis_rotated?Me.axisX:Me.axisY,o=r.main.select(".".concat(a)).node(),s=o&&n?o.getBoundingClientRect():{right:0},A=r.chart.node().getBoundingClientRect(),l=e.hasArcType(),c=s.right-A.left-(l?0:e.getCurrentPaddingLeft(t));return c>0?c:0},updateDimension:function(t){var e,i=this,r=i.config,n=i.state.hasAxis,a=i.$el;n&&!t&&i.axis.x&&r.axis_rotated&&((e=i.axis.subX)===null||e===void 0||e.create(a.axis.subX)),i.updateScales(t),i.updateSvgSize(),i.transformAll(!1)},updateSvgSize:function(){var t=this,e=t.state,i=e.clip,r=e.current,n=e.hasAxis,a=e.width,o=e.height,s=t.$el.svg;if(s.attr("width",r.width).attr("height",r.height),n){var A=s.select(".".concat(Ed.brush," .overlay")),l={width:0,height:0};A.size()&&(l.width=+A.attr("width"),l.height=+A.attr("height")),s.selectAll(["#".concat(i.id),"#".concat(i.idGrid)]).select("rect").attr("width",a).attr("height",o),s.select("#".concat(i.idXAxis)).select("rect").call(t.setXAxisClipPath.bind(t)),s.select("#".concat(i.idYAxis)).select("rect").call(t.setYAxisClipPath.bind(t)),i.idSubchart&&s.select("#".concat(i.idSubchart)).select("rect").attr("width",a).attr("height",l.height)}},getCurrentPadding:function(){var t=this;return{top:t.getCurrentPaddingTop(),bottom:t.getCurrentPaddingBottom(),left:t.getCurrentPaddingLeft(),right:t.getCurrentPaddingRight()}},getResettedPadding:function(t){var e=this,i=e.config,r=J(t),n=r?0:{};return i.padding===!1?!r&&Object.keys(t).forEach(function(a){n[a]=!Ar(i.data_labels)&&i.data_labels!==!1&&a==="top"?t[a]:0}):n=t,n},updateSizes:function(t){var e,i,r,n=this,a=n.config,o=n.state,s=n.$el.legend,A=a.axis_rotated,l=n.hasArcType()||o.hasTreemap,c=((e=a.padding)===null||e===void 0?void 0:e.mode)==="fit";!t&&n.setContainerSize();var u={width:s?n.getLegendWidth():0,height:s?n.getLegendHeight():0};!l&&a.axis_x_show&&a.axis_x_tick_autorotate&&n.updateXAxisTickClip();var d=o.isLegendRight||o.isLegendInset?0:u.height,h=A||l?0:n.getHorizontalAxisHeight("x"),g=a.subchart_axis_x_show&&a.subchart_axis_x_tick_text_show?h:30,f=a.subchart_show&&!l?a.subchart_size_height+g:0,p=n.getCurrentPadding();if(o.margin=!l&&A?{top:n.getHorizontalAxisHeight("y2")+p.top,right:l?0:n.getCurrentPaddingRight(!0),bottom:n.getHorizontalAxisHeight("y")+d+p.bottom,left:f+(l?0:p.left)}:{top:(c?0:4)+p.top,right:l?0:n.getCurrentPaddingRight(!0),bottom:h+f+d+p.bottom,left:l?0:p.left},o.margin=n.getResettedPadding(o.margin),o.margin2=A?{top:o.margin.top,right:NaN,bottom:20+d,left:n.state.rotatedPadding.left}:{top:o.current.height-f-d,right:NaN,bottom:g+d,left:o.margin.left},o.margin3={top:0,right:NaN,bottom:0,left:0},(i=n.updateSizeForLegend)===null||i===void 0||i.call(n,u),o.width=o.current.width-o.margin.left-o.margin.right,o.height=o.current.height-o.margin.top-o.margin.bottom,o.width<0&&(o.width=0),o.height<0&&(o.height=0),o.width2=A?o.margin.left-o.rotatedPadding.left-o.rotatedPadding.right:o.width,o.height2=A?o.height:o.current.height-o.margin2.top-o.margin2.bottom,o.width2<0&&(o.width2=0),o.height2<0&&(o.height2=0),n.hasArcType()){var v=n.hasType("gauge"),m=a.legend_show&&o.isLegendRight;o.arcWidth=o.width-(m?u.width+10:0),o.arcHeight=o.height-(m&&!v?0:10),v&&!a.gauge_fullCircle&&(o.arcHeight+=o.height-n.getPaddingBottomForGauge()),(r=n.updateRadius)===null||r===void 0||r.call(n)}o.isLegendRight&&l&&(o.margin3.left=o.arcWidth/2+o.radiusExpanded*1.1)}},xB={setCssRule:function(t,e,i,r){var n=this,a=n.config,o=n.state,s=o.cssRule,A=o.style;return a.boost_useCssRule?function(l){l.each(function(c){var u=r&&(r==null?void 0:r.call(n,c)),d="".concat(t?".".concat(We.shapes+n.getTargetSelectorSuffix(c.id)):"").concat(e);e in s&&A.sheet.deleteRule(s[d]),n.state.cssRule[d]=Fx(A,d,i.filter(Boolean).map(function(h){return Qe(u)&&h.indexOf(":")===-1?"".concat(h,": ").concat(u):h||""}))})}:function(){}},getStylePropValue:function(t){var e=this.config.boost_useCssRule;return e?null:te(t)?t.bind(this):t}};function BB(t){var e="middle";return t>0&&t<=170?e="end":t>190&&t<=360&&(e="start"),e}function wB(t,e,i,r,n){var a,o=this,s=t.value,A=o.isCandlestickType(t),l=J(s)&&s<0||A&&!(!((a=o.getCandlestickData(t))===null||a===void 0)&&a._isUp),c=e.x,u=e.y,d=4,h=d*2;return r?i==="start"?(c+=l?0:h,u+=d):i==="middle"?(c+=h,u-=h):i==="end"&&(l&&(c-=h),u+=d):(i==="start"?(c+=d,l&&(u+=h*2)):i==="middle"?u-=h:i==="end"&&(c-=d,l&&(u+=h*2)),n&&(u+=l?-17:A?13:7)),{x:c,y:u}}var bB={opacityForText:function(t){var e=this;return e.isBarType(t)&&!e.meetsLabelThreshold(Math.abs(e.getRatio("bar",t)),"bar")?"0":e.hasDataLabel?null:"0"},initText:function(){var t=this.$el;t.main.select(".".concat(Ae.chart)).append("g").attr("class",qe.chartTexts).style("pointer-events",t.treemap?"none":null)},updateTargetsForText:function(t){var e=this,i=e.getChartClass("Text"),r=e.getClass("texts","id"),n=e.classFocus.bind(e),a=e.$el.main.select(".".concat(qe.chartTexts)).selectAll(".".concat(qe.chartText)).data(t).attr("class",function(s){return"".concat(i(s)).concat(n(s)).trim()}),o=a.enter().append("g").style("opacity","0").attr("class",i).call(e.setCssRule(!0," .".concat(qe.text),["fill","pointer-events:none"],e.updateTextColor));o.append("g").attr("class",r)},updateText:function(){var t=this,e=t.$el,i=t.$T,r=t.config,n=t.axis,a=t.getClass("text","index"),o=r.data_labels.centered,s=e.main.selectAll(".".concat(qe.texts)).selectAll(".".concat(qe.text)).data(t.labelishData.bind(t));i(s.exit()).style("fill-opacity","0").remove(),e.text=s.enter().append("text").merge(s).attr("class",a).attr("text-anchor",function(A){var l=r["axis_".concat(n==null?void 0:n.getId(A.id),"_inverted")],c=l?A.value>0:A.value<0;if(t.isCandlestickType(A)){var u=t.getCandlestickData(A);c=!(u!=null&&u._isUp)}else if(t.isTreemapType(A))return o?"middle":"start";return r.axis_rotated?c?"end":"start":"middle"}).style("fill",t.getStylePropValue(t.updateTextColor)).style("fill-opacity","0").each(function(A,l,c){var u=G(this),d=A.value;if(t.isBubbleZType(A))d=t.getBubbleZData(d,"z");else if(t.isCandlestickType(A)){var h=t.getCandlestickData(A);h&&(d=h.close)}d=t.isTreemapType(A)?t.treemapDataLabelFormat(A)(u):t.dataLabelFormat(A.id)(d,A.id,l,c),J(d)?this.textContent=d:fa(u,d)})},updateTextColor:function(t){var e=this,i=e.config,r=i.data_labels_colors,n=e.isArcType(t)&&!e.isRadarType(t)||e.isTreemapType(t)?null:e.color(t),a;if(Qe(r))a=r;else if(xe(r)){var o=(t.data||t).id;a=r[o]}else te(r)&&(a=r.bind(e.api)(n,t));if(e.isCandlestickType(t)&&!te(r)){var s=e.getCandlestickData(t);if(!(s!=null&&s._isUp)){var A=i.candlestick_color_down;a=xe(A)?A[t.id]:A}}return a||n},updateTextBacgroundColor:function(t){var e=this,i=e.$el,r=e.config,n=r.data_labels_backgroundColors,a="";if(Qe(n)||xe(n)){var o=Qe(n)?"":e.getTargetSelectorSuffix("id"in t?t.id:t.data.id),s=i.defs.select(["filter[id*='labels-bg","']"].join(o));s.size()&&(a="url(#".concat(s.attr("id"),")"))}return a||null},redrawText:function(t,e,i,r){var n=this,a=n.$T,o=n.axis,s=n.config,A=n.state.hasTreemap,l=Fi(!0),c=s.axis_rotated,u=s.data_labels.rotate,d=BB(u),h=u?"rotate(".concat(u,")"):"";return n.$el.text.style("fill",n.getStylePropValue(n.updateTextColor)).attr("filter",n.updateTextBacgroundColor.bind(n)).style("fill-opacity",i?0:n.opacityForText.bind(n)).each(function(g,f){var p=a(A&&this.childElementCount?this.parentNode:this,!!(r&&this.getAttribute("x")),l),v=s["axis_".concat(o==null?void 0:o.getId(g.id),"_inverted")],m={x:t.bind(this)(g,f),y:e.bind(this)(g,f)};u&&(m=wB.bind(n)(g,m,d,c,v),p.attr("text-anchor",d)),this.childElementCount||u?p.attr("transform","translate(".concat(m.x," ").concat(m.y,") ").concat(h)):p.attr("x",m.x).attr("y",m.y)}),!0},getTextRect:function(t,e){var i=this,r=t.node?t.node():t;/text/i.test(r.tagName)||(r=r.querySelector("text"));var n=r.textContent,a="".concat(Qt.textRect,"-").concat(n.replace(/\W/g,"_")),o=i.cache.get(a);return o||(i.$el.svg.append("text").style("visibility","hidden").style("font",G(r).style("font")).classed(e,!0).text(n).call(function(s){o=Hr(s.node())}).remove(),i.cache.add(a,o)),o},generateXYForText:function(t,e){var i=this,r=i.state,n=r.hasRadar,a=r.hasTreemap,o=Object.keys(t),s={},A=e?i.getXForText:i.getYForText;return n&&o.push("radar"),a&&o.push("treemap"),o.forEach(function(l){s[l]=i["generateGet".concat(Xt(l),"Points")](t[l],!1)}),function(l,c){var u=i.isAreaType(l)&&"area"||i.isBarType(l)&&"bar"||i.isCandlestickType(l)&&"candlestick"||i.isRadarType(l)&&"radar"||i.isTreemapType(l)&&"treemap"||"line";return A.call(i,s[u](l,c),l,this)}},getCenteredTextPos:function(t,e,i,r){var n=this,a=n.config,o=a.axis_rotated,s=n.isBarType(t),A=n.isTreemapType(t);if(a.data_labels.centered&&(s||A)){var l=Hr(i);if(s){var c=t.value>=0;if(o){var u=(c?e[1][1]-e[0][1]:e[0][1]-e[1][1])/2+l.width/2;return c?-u-3:u+2}else{var d=(c?e[0][1]-e[1][1]:e[1][1]-e[0][1])/2+l.height/2;return c?d:-d-2}}else if(A)return r==="x"?(e[1][0]-e[0][0])/2:(e[1][1]-e[0][1])/2+l.height/2}return 0},getTextPos:function(t,e){var i=this.config.data_labels_position;return(t in i?i[t]:i)[e]||0},getXForText:function(t,e,i){var r,n=this,a=n.config,o=n.state,s=a.axis_rotated,A=n.isTreemapType(e),l=t[0][0];if(n.isCandlestickType(e))s?l=!((r=n.getCandlestickData(e))===null||r===void 0)&&r._isUp?t[2][2]+4:t[2][1]-4:l+=(t[1][0]-l)/2;else if(A)l+=a.data_labels.centered?0:5;else if(s){var c=a["axis_".concat(n.axis.getId(e.id),"_inverted")],u=n.isBarType(e)?4:6,d=e.value;l=t[2][1],c?l-=u*(d>0?1:-1):l+=u*(d<0?-1:1)}else l=n.hasType("bar")?(t[2][0]+t[0][0])/2:l;if(e.value===null)if(l>o.width){var h=Hr(i).width;l=o.width-h}else l<0&&(l=4);return(s||A)&&(l+=n.getCenteredTextPos(e,t,i,"x")),l+n.getTextPos(e.id,"x")},getYForText:function(t,e,i){var r=this,n=r.axis,a=r.config,o=r.state,s=a.axis_rotated,A=a["axis_".concat(n==null?void 0:n.getId(e.id),"_inverted")],l=r.isBarType(e),c=r.isTreemapType(e),u=a.point_r,d=Hr(i),h=e.value,g=3,f;if(r.isCandlestickType(e))h=r.getCandlestickData(e),s?(f=t[0][0],f+=(t[1][0]-f)/2+g):(f=h&&h._isUp?t[2][2]-g:t[2][1]+g*4,A&&(f+=15*(h._isUp?1:-1)));else if(c)f=t[0][1]+(a.data_labels.centered?0:d.height+5);else if(s)f=(t[0][0]+t[2][0]+d.height*.6)/2;else if(f=t[2][1],J(u)&&u>5&&(r.isLineType(e)||r.isScatterType(e))&&(g+=a.point_r/2.3),h<0||h===0&&!o.hasPositiveValue&&o.hasNegativeValue)f+=A?l?-3:-5:d.height+(l?-g:g);else{var p=-g*2;l?p=-g:r.isBubbleType(e)&&(p=g),A&&(p=l?10:15),f+=p}if(e.value===null&&!s){var v=d.height;f<v?f=v:f>o.height&&(f=o.height-4)}return(!s||c)&&(f+=r.getCenteredTextPos(e,t,i,"y")),f+r.getTextPos(e.id,"y")},markOverlapped:function(t,e,i){var r=e.$el.arcs.selectAll(i),n=r.filter(function(A){return A.data.id!==t}),a=r.filter(function(A){return A.data.id===t}),o=tc(a.node()),s=function(A,l){return Math.sqrt(Math.pow(A,2)+Math.pow(l,2))};a.node()&&n.each(function(){var A=tc(this),l=G(this),c=s(o.e,o.f)>s(A.e,A.f)?a:l,u=Math.ceil(Math.abs(o.e-A.e))<Math.ceil(c.node().getComputedTextLength()),d=Math.ceil(Math.abs(o.f-A.f))<parseInt(a.style("font-size"),10);l.classed(qe.TextOverlapping,u&&d)})},undoMarkOverlapped:function(t,e){t.$el.arcs.selectAll(e).each(function(){yu([this,this.previousSibling]).classed(qe.TextOverlapping,!1)})},meetsLabelThreshold:function(t,e){t===void 0&&(t=0);var i=this,r=i.config,n=r["".concat(e,"_label_threshold")]||0;return t>=n}};function ac(t,e){t===void 0&&(t="left");var i=J(e),r;return t.indexOf("center")>-1?r=i?e/2:"middle":t.indexOf("right")>-1?r=i?e:"end":r=i?0:"start",r}var yB={initTitle:function(){var t=this,e=t.config,i=t.$el;if(e.title_text){i.title=i.svg.append("g");var r=i.title.append("text").style("text-anchor",ac(e.title_position)).attr("class",qe.title);fa(r,e.title_text,[.3,1.5])}},redrawTitle:function(){var t=this,e=t.config,i=t.state.current,r=t.$el.title;if(r){var n=t.yForTitle.call(t);/g/i.test(r.node().tagName)?r.attr("transform","translate(".concat(ac(e.title_position,i.width),", ").concat(n,")")):r.attr("x",t.xForTitle.call(t)).attr("y",n)}},xForTitle:function(){var t=this,e=t.config,i=t.state.current,r=e.title_position||"left",n=t.getTextRect(t.$el.title,qe.title).width,a;return/(right|center)/.test(r)?(a=i.width-n,r.indexOf("right")>=0?a=i.width-n-e.title_padding.right:r.indexOf("center")>=0&&(a=(i.width-n)/2)):a=e.title_padding.left||0,a},yForTitle:function(){var t=this;return(t.config.title_padding.top||0)+t.getTextRect(t.$el.title,qe.title).height},getTitlePadding:function(){var t=this;return t.yForTitle()+(t.config.title_padding.bottom||0)}},_B={initTooltip:function(){var t=this,e=t.config,i=t.$el;i.tooltip=G(e.tooltip_contents.bindto),i.tooltip.empty()&&(i.tooltip=i.chart.append("div").attr("class",zn.tooltipContainer).style("position","absolute").style("pointer-events","none").style("display","none")),t.bindTooltipResizePos()},initShowTooltip:function(){var t,e,i=this,r=i.config,n=i.$el,a=i.state,o=a.hasAxis,s=a.hasRadar;if(r.tooltip_init_show){var A=!(o&&s);if(!((t=i.axis)===null||t===void 0)&&t.isTimeSeries()&&Qe(r.tooltip_init_x)){var l=i.data.targets[0],c=void 0,u=void 0;for(r.tooltip_init_x=kt.call(i,r.tooltip_init_x),c=0;(u=l.values[c])&&u.x-r.tooltip_init_x!==0;c++);r.tooltip_init_x=c}var d=i.data.targets.map(function(h){var g=A?0:r.tooltip_init_x;return i.addName(h.values[g])});A&&(d=[d[r.tooltip_init_x]]),n.tooltip.html(i.getTooltipHTML(d,(e=i.axis)===null||e===void 0?void 0:e.getXAxisTickFormat(),i.getDefaultValueFormat(),i.color)),r.tooltip_contents.bindto||n.tooltip.style("top",r.tooltip_init_position.top).style("left",r.tooltip_init_position.left).style("display",null)}},getTooltipHTML:function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var i=this,r=i.api,n=i.config;return te(n.tooltip_contents)?n.tooltip_contents.bind(r).apply(void 0,t):i.getTooltipContent.apply(i,t)},getTooltipContent:function(t,e,i,r){var n=this,a=n.api,o=n.config,s=n.state,A=n.$el,l=["title","name","value"].map(function(B){var C=o["tooltip_format_".concat(B)];return te(C)?C.bind(a):C}),c=l[0],u=l[1],d=l[2];c=c||e,u=u||function(B){return B},d=d||(s.hasTreemap||n.isStackNormalized()?function(B,C){return"".concat((C*100).toFixed(2),"%")}:i);var h=o.tooltip_order,g=function(B){return n.axis&&n.isBubbleZType(B)?n.getBubbleZData(B.value,"z"):n.getBaseValue(B)},f=n.levelColor?function(B){return n.levelColor(B.value)}:function(B){return r(B)},p=o.tooltip_contents,v=p.template,m=n.mapToTargetIds();if(h===null&&o.data_groups.length){var w=n.orderTargets(n.data.targets).map(function(B){return B.id}).reverse();t.sort(function(B,C){var I=B?B.value:null,S=C?C.value:null;return I>0&&S>0&&(I=B.id?w.indexOf(B.id):null,S=C.id?w.indexOf(C.id):null),I-S})}else if(/^(asc|desc)$/.test(h)){var x=h==="asc";t.sort(function(B,C){var I=B?g(B):null,S=C?g(C):null;return x?I-S:S-I})}else te(h)&&t.sort(h.bind(a));var _=n.getTooltipContentTemplate(v),b=t.length,E,U,H,T,y,Q=function(){if(U=t[y],!U||!(g(U)||g(U)===0))return"continue";if(nt(E)){var B=(s.hasAxis||s.hasRadar)&&wr(c?c(U.x):U.x);E=ys(_[0],{CLASS_TOOLTIP:zn.tooltip,TITLE:V(B)?v?B:'<tr><th colspan="2">'.concat(B,"</th></tr>"):""})}if(!U.ratio&&A.arcs&&(H=["arc",n.$el.arcs.select("path.".concat(Ue.arc,"-").concat(U.id)).data()[0]],U.ratio=n.getRatio.apply(n,H)),H=[U.ratio,U.id,U.index,t],T=wr(d.apply(void 0,Ge([g(U)],H,!1))),n.isAreaRangeType(U)){var C=["high","low"].map(function($e){return wr(d.apply(void 0,Ge([n.getRangedData(U,$e)],H,!1)))}),I=C[0],S=C[1];T="<b>Mid:</b> ".concat(T," <b>High:</b> ").concat(I," <b>Low:</b> ").concat(S)}else if(n.isCandlestickType(U)){var k=["open","high","low","close","volume"].map(function(K){return wr(d.apply(void 0,Ge([n.getRangedData(U,K,"candlestick")],H,!1)))}),F=k[0],I=k[1],S=k[2],N=k[3],D=k[4];T="<b>Open:</b> ".concat(F," <b>High:</b> ").concat(I," <b>Low:</b> ").concat(S," <b>Close:</b> ").concat(N).concat(D?" <b>Volume:</b> ".concat(D):"")}else if(n.isBarRangeType(U)){var z=U.value,Y=z[0],ae=z[1];T="".concat(d(Y)," ~ ").concat(d(ae))}if(T!==void 0){if(U.name===null)return"continue";var R=wr(u.apply(void 0,Ge([U.name],H,!1))),se=f(U),X={CLASS_TOOLTIP_NAME:zn.tooltipName+n.getTargetSelectorSuffix(U.id),COLOR:v||!n.patterns?se:'<svg><rect style="fill:'.concat(se,'" width="10" height="10"></rect></svg>'),NAME:R,VALUE:T};if(v&&xe(p.text)){var Se=m.indexOf(U.id);Object.keys(p.text).forEach(function($e){X[$e]=p.text[$e][Se]})}E+=ys(_[1],X)}};for(y=0;y<b;y++)Q();return"".concat(E,"</table>")},getTooltipContentTemplate:function(t){return(t||`<table class="{=CLASS_TOOLTIP}"><tbody>
				{=TITLE}
				{{<tr class="{=CLASS_TOOLTIP_NAME}">
					<td class="name">`.concat(this.patterns?"{=COLOR}":'<span style="background-color:{=COLOR}"></span>',`{=NAME}</td>
					<td class="value">{=VALUE}</td>
				</tr>}}
			</tbody></table>`)).replace(/(\r?\n|\t)/g,"").split(/{{(.*)}}/)},tooltipPosition:function(t,e,i,r){var n=this,a=n.config,o=n.scale,s=n.state,A=s.width,l=s.height,c=s.current,u=s.isLegendRight,d=s.inputType,h=s.event,g=n.hasType("gauge")&&!a.gauge_fullCircle,f=s.hasTreemap,p=n.getSvgLeft(!0),v=p+c.width-n.getCurrentPaddingRight(),m=n.getCurrentPaddingLeft(!0),w=20,x=Ut(h,r),_=x[0],b=x[1];if(n.hasArcType()){var E=d==="touch"||n.hasType("radar");E||(b+=g?l:l/2,_+=(A-(u?n.getLegendWidth():0))/2)}else if(!f){var U=o.x(t[0].x);a.axis_rotated?(b=U+w,_+=p+100,v-=p):(b-=5,_=p+m+w+(o.zoom?_:U))}if(_+e+15>v&&(_-=e+(f?0:m)),b+i>c.height){var H=f?0:30;b-=g?i*3:i+H}var T={top:b,left:_};return Object.keys(T).forEach(function(y){T[y]<0&&(T[y]=0)}),T},showTooltip:function(t,e){var i,r,n=this,a=n.config,o=n.scale,s=n.state,A=n.$el.tooltip,l=a.tooltip_contents.bindto,c=t.filter(function(T){return T&&V(n.getBaseValue(T))});if(!(!A||c.length===0||!a.tooltip_show)){var u=A.datum(),d=u||{},h=d.width,g=h===void 0?0:h,f=d.height,p=f===void 0?0:f,v=JSON.stringify(t);if(!u||u.current!==v){var m=t.concat().sort()[0].index;Te(a.tooltip_onshow,n.api,t),A.html(n.getTooltipHTML(t,n.axis?n.axis.getXAxisTickFormat():n.categoryName.bind(n),n.getDefaultValueFormat(),n.color)).style("display",null).style("visibility",null).datum(u={index:m,current:v,width:g=A.property("offsetWidth"),height:p=A.property("offsetHeight")}),Te(a.tooltip_onshown,n.api,t),n._handleLinkedCharts(!0,m)}if(!l){var w=((i=a.tooltip_position)===null||i===void 0?void 0:i.bind(n.api))||n.tooltipPosition.bind(n),x=Ut(s.event,e),_=x[0],b=x[1],E={x:_,y:b},U=(r=t.filter(Boolean))===null||r===void 0?void 0:r.shift();o.x&&U&&"x"in U&&(E.xAxis=o.x(U.x));var H=w(c,g,p,e,E);["top","left"].forEach(function(T){var y=H[T];A.style(T,"".concat(y,"px")),T==="left"&&!u.xPosInPercent&&(u.xPosInPercent=y/s.current.width*100)})}}},bindTooltipResizePos:function(){var t=this,e=t.resizeFunction,i=t.state,r=t.$el.tooltip;e.add(function(){if(r.style("display")==="block"){var n=i.current,a=r.datum(),o=a.width,s=a.xPosInPercent,A=n.width/100*s,l=n.width-(A+o);l<0&&(A+=l),r.style("left","".concat(A,"px"))}})},hideTooltip:function(t){var e=this,i=e.api,r=e.config,n=e.$el.tooltip;if(n&&n.style("display")!=="none"&&(!r.tooltip_doNotHide||t)){var a=JSON.parse(n.datum().current);Te(r.tooltip_onhide,i,a),n.style("display","none").style("visibility","hidden").datum(null),Te(r.tooltip_onhidden,i,a)}},_handleLinkedCharts:function(t,e){var i=this,r=i.charts,n=i.config,a=i.state.event;if(a!=null&&a.isTrusted&&n.tooltip_linked&&r.length>1){var o=n.tooltip_linked_name;r.filter(function(s){return s!==i.api}).forEach(function(s){var A=s.internal,l=A.config,c=A.$el,u=l.tooltip_linked,d=l.tooltip_linked_name,h=ye.body.contains(c.chart.node());if(u&&o===d&&h){var g=c.tooltip.data()[0],f=e!==(g==null?void 0:g.index);try{s.tooltip[t&&f?"show":"hide"]({index:e})}catch{}}})}}},CB={getTranslate:function(t,e){e===void 0&&(e=0);var i=this,r=i.config,n=i.state,a=r.axis_rotated,o=0,s,A;if(e&&/^(x|y2?)$/.test(t)&&(o=i.getAxisSize(t)*e),t==="main")s=Br(n.margin.left),A=Br(n.margin.top);else if(t==="context")s=Br(n.margin2.left),A=Br(n.margin2.top);else if(t==="legend")s=n.margin3.left,A=n.margin3.top;else if(t==="x")s=a?-o:0,A=a?0:n.height+o;else if(t==="y")s=a?0:-o,A=a?n.height+o:0;else if(t==="y2")s=a?0:n.width+o,A=a&&o?1-o:0;else if(t==="subX")s=0,A=a?0:n.height2;else if(t==="arc")s=n.arcWidth/2,A=n.arcHeight/2;else if(t==="polar")s=n.arcWidth/2,A=n.arcHeight/2;else if(t==="radar"){var l=i.getRadarSize()[0];s=n.width/2-l,A=Br(n.margin.top)}return"translate(".concat(s,", ").concat(A,")")},transformMain:function(t,e){var i=this,r=i.$el.main,n=i.$T,a=e!=null&&e.axisX?e.axisX:n(r.select(".".concat(Me.axisX)),t),o=e!=null&&e.axisY?e.axisY:n(r.select(".".concat(Me.axisY)),t),s=e!=null&&e.axisY2?e.axisY2:n(r.select(".".concat(Me.axisY2)),t);n(r,t).attr("transform",i.getTranslate("main")),a.attr("transform",i.getTranslate("x")),o.attr("transform",i.getTranslate("y")),s.attr("transform",i.getTranslate("y2")),r.select(".".concat(Ue.chartArcs)).attr("transform",i.getTranslate("arc"))},transformAll:function(t,e){var i=this,r=i.config,n=i.state,a=n.hasAxis,o=n.hasTreemap,s=i.$el;!o&&i.transformMain(t,e),a&&r.subchart_show&&i.transformContext(t,e),s.legend&&i.transformLegend(t)}},TB={isValidChartType:function(t){return!!(t&&Object.values(Z).indexOf(t)>-1)},setTargetType:function(t,e){var i=this,r=i.config,n=i.state.withoutFadeIn;i.mapToTargetIds(t).forEach(function(a){n[a]=e===r.data_types[a],r.data_types[a]=e}),t||(r.data_type=e)},updateTypesElements:function(){var t=this,e=t.state.current;Object.keys(Z).forEach(function(i){var r=Z[i],n=t.hasType(r,null,!0),a=e.types.indexOf(r);a===-1&&n?e.types.push(r):a>-1&&!n&&e.types.splice(a,1)}),t.setChartElements()},hasType:function(t,e,i){var r;i===void 0&&(i=!1);var n=this,a=n.config,o=n.state.current,s=a.data_types,A=e||n.data.targets,l=!1;return!i&&((r=o.types)===null||r===void 0?void 0:r.indexOf(t))>-1?l=!0:A!=null&&A.length?A.forEach(function(c){var u=s[c.id];(u===t||!u&&t==="line")&&(l=!0)}):Object.keys(s).length?Object.keys(s).forEach(function(c){s[c]===t&&(l=!0)}):l=a.data_type===t,l},hasTypeOf:function(t,e,i){var r=this;return i===void 0&&(i=[]),t in Jt?!Jt[t].filter(function(n){return i.indexOf(n)===-1}).every(function(n){return!r.hasType(n,e)}):!1},isTypeOf:function(t,e){var i=Qe(t)?t:t.id,r=this.config.data_types[i]||this.config.data_type;return de(e)?e.indexOf(r)>=0:r===e},hasPointType:function(){var t=this;return t.hasTypeOf("Line")||t.hasType("bubble")||t.hasType("scatter")},hasArcType:function(t,e){return this.hasTypeOf("Arc",t,e)},hasMultiArcGauge:function(){return this.hasType("gauge")&&this.config.gauge_type==="multi"},isLineType:function(t){var e=Qe(t)?t:t.id;return!this.config.data_types[e]||this.isTypeOf(e,Jt.Line)},isStepType:function(t){return this.isTypeOf(t,Jt.Step)},isSplineType:function(t){return this.isTypeOf(t,Jt.Spline)},isAreaType:function(t){return this.isTypeOf(t,Jt.Area)},isAreaRangeType:function(t){return this.isTypeOf(t,Jt.AreaRange)},isBarType:function(t){return this.isTypeOf(t,"bar")},isBubbleType:function(t){return this.isTypeOf(t,"bubble")},isCandlestickType:function(t){return this.isTypeOf(t,"candlestick")},isScatterType:function(t){return this.isTypeOf(t,"scatter")},isTreemapType:function(t){return this.isTypeOf(t,"treemap")},isPieType:function(t){return this.isTypeOf(t,"pie")},isGaugeType:function(t){return this.isTypeOf(t,"gauge")},isDonutType:function(t){return this.isTypeOf(t,"donut")},isPolarType:function(t){return this.isTypeOf(t,"polar")},isRadarType:function(t){return this.isTypeOf(t,"radar")},isArcType:function(t){return this.isPieType(t)||this.isDonutType(t)||this.isGaugeType(t)||this.isPolarType(t)||this.isRadarType(t)},isCirclePoint:function(t){var e=this.config,i=e.point_pattern,r=!1;return(t==null?void 0:t.tagName)==="circle"?r=!0:r=e.point_type==="circle"&&(!i||de(i)&&i.length===0),r},lineData:function(t){return this.isLineType(t)?[t]:[]},arcData:function(t){return this.isArcType(t.data)?[t]:[]},labelishData:function(t){return this.isBarType(t)||this.isLineType(t)||this.isScatterType(t)||this.isBubbleType(t)||this.isCandlestickType(t)||this.isRadarType(t)||this.isTreemapType(t)?t.values.filter(function(e){return J(e.value)||!!e.value}):[]},barLineBubbleData:function(t){return this.isBarType(t)||this.isLineType(t)||this.isBubbleType(t)?t.values:[]},isInterpolationType:function(t){return["basis","basis-closed","basis-open","bundle","cardinal","cardinal-closed","cardinal-open","catmull-rom","catmull-rom-closed","catmull-rom-open","linear","linear-closed","monotone-x","monotone-y","natural"].indexOf(t)>=0}},Pa=function(){function t(e){this.data={xs:{},targets:[]},this.scale={x:null,y:null,y2:null,subX:null,subY:null,subY2:null,zoom:null},this.org={xScale:null,xDomain:null},this.format={extraLineClasses:null,xAxisTick:null,dataTime:null,defaultAxisTime:null,axisTime:null};var i=this;i.api=e,i.config=new $a,i.cache=new Vx;var r=new Dx;i.$el=r.getStore("element"),i.state=r.getStore("state"),i.$T=i.$T.bind(i)}return t.prototype.$T=function(e,i,r){var n=this,a=n.config,o=n.state,s=a.transition_duration,A=a.subchart_show,l=e;if(l){"tagName"in l&&(l=G(l));var c=(i!==!1&&s||i)&&(!o.zooming||o.dragging)&&!o.resizing&&o.rendered&&!A;l=c?l.transition(r).duration(s):l}return l},t.prototype.beforeInit=function(){var e=this;e.callPluginHook("$beforeInit"),Te(e.config.onbeforeinit,e.api)},t.prototype.afterInit=function(){var e=this;e.callPluginHook("$afterInit"),Te(e.config.onafterinit,e.api)},t.prototype.init=function(){var e=this,i=e.config,r=e.state,n=e.$el,a=i.boost_useCssRule;if(kx(e),r.hasRadar=!r.hasAxis&&e.hasType("radar"),r.hasTreemap=!r.hasAxis&&e.hasType("treemap"),r.hasAxis=!e.hasArcType()&&!r.hasTreemap,r.datetimeId="bb-".concat(+new Date*Fi()),a){var o=ye.createElement("style");o.type="text/css",ye.head.appendChild(o),r.style={rootSelctor:".".concat(r.datetimeId),sheet:o.sheet},n.style=o}var s={element:i.bindto,classname:"bb"};xe(i.bindto)&&(s.element=i.bindto.element||"#chart",s.classname=i.bindto.classname||s.classname),n.chart=te(s.element.node)?i.bindto.element:G(s.element||[]),n.chart.empty()&&(n.chart=G(ye.body.appendChild(ye.createElement("div")))),n.chart.html("").classed(s.classname,!0).classed(r.datetimeId,a).style("position","relative"),e.initParams(),e.initToRender()},t.prototype.initToRender=function(e){var i=this,r=i.config,n=i.state,a=i.$el.chart,o=function(){return a.style("display")==="none"||a.style("visibility")==="hidden"},s=r.render.lazy||o(),A=re.MutationObserver;s&&A&&r.render.observe!==!1&&!e&&new A(function(l,c){o()||(c.disconnect(),!n.rendered&&i.initToRender(!0))}).observe(a.node(),{attributes:!0,attributeFilter:["class","style"]}),(!s||e)&&i.convertData(r,function(l){i.initWithData(l),i.afterInit()})},t.prototype.initParams=function(){var e=this,i=e.config,r=e.format,n=e.state,a=i.axis_rotated;if(e.color=e.generateColor(),e.levelColor=e.generateLevelColor(),i.padding===!1&&(i.axis_x_show=!1,i.axis_y_show=!1,i.axis_y2_show=!1,i.subchart_show=!1),e.hasPointType()&&(e.point=e.generatePoint()),n.hasAxis){e.initClip(),r.extraLineClasses=e.generateExtraLineClass(),r.dataTime=i.data_xLocaltime?rd:nd,r.axisTime=i.axis_x_localtime?mA:xA;var o=e.config.zoom_enabled&&e.config.zoom_type==="drag";r.defaultAxisTime=function(s){var A=e.scale,l=A.x,c=A.zoom,u=o?c:c&&l.orgDomain().toString()!==c.domain().toString(),d=s.getMilliseconds()&&".%L"||s.getSeconds()&&".:%S"||s.getMinutes()&&"%I:%M"||s.getHours()&&"%I %p"||s.getDate()!==1&&"%b %d"||u&&s.getDate()===1&&"%b'%y"||s.getMonth()&&"%-m/%-d"||"%Y";return r.axisTime(d)(s)}}n.isLegendRight=i.legend_position==="right",n.isLegendInset=i.legend_position==="inset",n.isLegendTop=i.legend_inset_anchor==="top-left"||i.legend_inset_anchor==="top-right",n.isLegendLeft=i.legend_inset_anchor==="top-left"||i.legend_inset_anchor==="bottom-left",n.rotatedPadding.top=e.getResettedPadding(n.rotatedPadding.top),n.rotatedPadding.right=a&&!i.axis_x_show?0:30,n.inputType=Sx(i.interaction_inputType_mouse,i.interaction_inputType_touch)},t.prototype.initWithData=function(e){var i,r,n=this,a=n.config,o=n.scale,s=n.state,A=n.$el,l=n.org,c=s.hasAxis,u=s.hasTreemap,d=a.interaction_enabled,h=n.hasType("polar");if(c&&(n.axis=n.getAxisInstance(),a.zoom_enabled&&n.initZoom()),n.data.xs={},n.data.targets=n.convertDataToTargets(e),a.data_filter&&(n.data.targets=n.data.targets.filter(a.data_filter.bind(n.api))),a.data_hide&&n.addHiddenTargetIds(a.data_hide===!0?n.mapToIds(n.data.targets):a.data_hide),a.legend_hide&&n.addHiddenLegendIds(a.legend_hide===!0?n.mapToIds(n.data.targets):a.legend_hide),n.updateSizes(),n.updateScales(!0),c){var g=o.x,f=o.y,p=o.y2,v=o.subX,m=o.subY,w=o.subY2;g&&(g.domain(nr(n.getXDomain(n.data.targets),!a.axis_x_inverted)),v.domain(g.domain()),l.xDomain=g.domain()),f&&(f.domain(n.getYDomain(n.data.targets,"y")),m.domain(f.domain())),p&&(p.domain(n.getYDomain(n.data.targets,"y2")),w&&w.domain(p.domain()))}if(A.svg=A.chart.append("svg").style("overflow","hidden").style("display","block"),d&&s.inputType){var x=s.inputType==="touch",_=a.onclick,b=a.onover,E=a.onout;A.svg.on("click",(_==null?void 0:_.bind(n.api))||null).on(x?"touchstart":"mouseenter",(b==null?void 0:b.bind(n.api))||null).on(x?"touchend":"mouseleave",(E==null?void 0:E.bind(n.api))||null)}a.svg_classname&&A.svg.attr("class",a.svg_classname);var U=te(a.color_tiles)&&n.patterns;(c||U||h||u||a.data_labels_backgroundColors)&&(A.defs=A.svg.append("defs"),c&&["id","idXAxis","idYAxis","idGrid"].forEach(function(y){n.appendClip(A.defs,s.clip[y])}),n.generateDataLabelBackgroundColorFilter(),U&&n.patterns.forEach(function(y){return A.defs.append(function(){return y.node})})),n.updateSvgSize(),n.bindResize();var H=A.svg.append("g").classed(Ae.main,!0).attr("transform",u?null:n.getTranslate("main"));if(A.main=H,a.subchart_show&&n.initSubchart(),a.tooltip_show&&n.initTooltip(),a.title_text&&n.initTitle(),!u&&a.legend_show&&n.initLegend(),a.data_empty_label_text&&H.append("text").attr("class","".concat(qe.text," ").concat(Ae.empty)).attr("text-anchor","middle").attr("dominant-baseline","middle"),c&&(a.regions.length&&n.initRegion(),!a.clipPath&&n.axis.init()),H.append("g").classed(Ae.chart,!0).attr("clip-path",c?s.clip.path:null),n.callPluginHook("$init"),c&&(d&&((i=n.initEventRect)===null||i===void 0||i.call(n)),n.initGrid(),a.clipPath&&((r=n.axis)===null||r===void 0||r.init())),n.initChartElements(),n.updateTargets(n.data.targets),n.updateDimension(),Te(a.oninit,n.api),n.setBackground(),n.redraw({withTransition:!1,withTransform:!0,withUpdateXDomain:!0,withUpdateOrgXDomain:!0,withTransitionForAxis:!1,initializing:!0}),a.data_onmin||a.data_onmax){var T=n.getMinMaxData();Te(a.data_onmin,n.api,T.min),Te(a.data_onmax,n.api,T.max)}a.tooltip_show&&n.initShowTooltip(),s.rendered=!0},t.prototype.initChartElements=function(){var e=this,i=e.state,r=i.hasAxis,n=i.hasRadar,a=i.hasTreemap,o=[];if(r)["bar","bubble","candlestick","line"].forEach(function(A){var l=Xt(A);(A==="line"&&e.hasTypeOf(l)||e.hasType(A))&&o.push(l)});else if(a)o.push("Treemap");else{var s=e.hasType("polar");n||o.push("Arc","Pie"),e.hasType("gauge")?o.push("Gauge"):n?o.push("Radar"):s&&o.push("Polar")}o.forEach(function(A){e["init".concat(A)]()}),Ee(e.config.data_labels)&&!e.hasArcType(null,["radar"])&&e.initText()},t.prototype.setChartElements=function(){var e=this,i=e.$el,r=i.chart,n=i.svg,a=i.defs,o=i.main,s=i.tooltip,A=i.legend,l=i.title,c=i.grid,u=i.arcs,d=i.circle,h=i.bar,g=i.candlestick,f=i.line,p=i.area,v=i.text;e.api.$={chart:r,svg:n,defs:a,main:o,tooltip:s,legend:A,title:l,grid:c,arc:u,circles:d,bar:{bars:h},candlestick:g,line:{lines:f,areas:p},text:{texts:v}}},t.prototype.setBackground=function(){var e=this,i=e.config.background,r=e.state,n=e.$el.svg;if(Ee(i)){var a=n.select("g").insert(i.imgUrl?"image":"rect",":first-child");i.imgUrl?a.attr("href",i.imgUrl):i.color&&a.style("fill",i.color).attr("clip-path",r.clip.path),a.attr("class",i.class||null).attr("width","100%").attr("height","100%")}},t.prototype.updateTargets=function(e){var i,r=this,n=r.state,a=n.hasAxis,o=n.hasRadar,s=n.hasTreemap,A=function(u){return r["updateTargetsFor".concat(u)](e.filter(r["is".concat(u,"Type")].bind(r)))};if(r.updateTargetsForText(e),a)["bar","candlestick","line"].forEach(function(u){var d=Xt(u);(u==="line"&&r.hasTypeOf(d)||r.hasType(u))&&A(d)}),r.updateTargetsForSubchart&&r.updateTargetsForSubchart(e);else if(r.hasArcType(e)){var l="Arc";o?l="Radar":r.hasType("polar")&&(l="Polar"),A(l)}else s&&A("Treemap");var c=r.hasType("bubble")||r.hasType("scatter");c&&((i=r.updateTargetForCircle)===null||i===void 0||i.call(r)),r.filterTargetsToShowAtInit(c)},t.prototype.filterTargetsToShowAtInit=function(e){e===void 0&&(e=!1);var i=this,r=i.$el.svg,n=i.$T,a=".".concat(Ae.target);e&&(a+=", .".concat(Ke.chartCircles," > .").concat(Ke.circles)),n(r.selectAll(a).filter(function(o){return i.isTargetToShow(o.id)})).style("opacity",null)},t.prototype.getWithOption=function(e){var i={Dimension:!0,EventRect:!0,Legend:!1,Subchart:!0,Transform:!1,Transition:!0,TrimXDomain:!0,UpdateXAxis:"UpdateXDomain",UpdateXDomain:!1,UpdateOrgXDomain:!1,TransitionForExit:"Transition",TransitionForAxis:"Transition",Y:!0};return Object.keys(i).forEach(function(r){var n=i[r];Qe(n)&&(n=i[n]),i[r]=ii(e,"with".concat(r),n)}),i},t.prototype.initialOpacity=function(e){var i=this,r=i.state.withoutFadeIn,n=i.getBaseValue(e)!==null&&r[e.id]?null:"0";return n},t.prototype.bindResize=function(){var e=this,i=e.config,r=e.state,n=jx(i.resize_timer),a=[];a.push(function(){return Te(i.onresize,e.api)}),i.resize_auto&&a.push(function(){r.resizing=!0,i.legend_show&&(e.updateSizes(),e.updateLegend()),e.api.flush(!1)}),a.push(function(){Te(i.onresized,e.api),r.resizing=!1}),a.forEach(function(o){return n.add(o)}),e.resizeFunction=n,re.addEventListener("resize",e.resizeFunction=n)},t.prototype.callPluginHook=function(e){for(var i=this,r=[],n=1;n<arguments.length;n++)r[n-1]=arguments[n];this.config.plugins.forEach(function(a){e==="$beforeInit"&&(a.$$=i,i.api.plugins.push(a)),a[e].apply(a,r)})},t}();Bt(Pa.prototype,[iB,rB,nB,sB,oB,uB,dB,aB,hB,gB,fB,pB,vB,mB,xB,bB,yB,_B,CB,TB]);function EB(t){var e=this.config,i,r,n,a=function(){var o=r.shift();if(o&&i&&St(i)&&o in i)return i=i[o],a();if(!o)return i};Object.keys(e).forEach(function(o){i=t,r=o.split("_"),n=a(),me(n)&&(e[o]=n)}),this.api&&(this.state.orgConfig=t)}var QB={resize:function(t){var e=this.internal,i=e.config,r=e.state;r.rendered&&(i.size_width=t?t.width:null,i.size_height=t?t.height:null,r.resizing=!0,this.flush(!1),e.resizeFunction())},flush:function(t){var e,i,r=this.internal,n=r.state,a=r.$el.zoomResetBtn;n.rendered?(n.resizing?(e=r.brush)===null||e===void 0||e.updateResize():(i=r.axis)===null||i===void 0||i.setOrient(),a==null||a.style("display","none"),r.scale.zoom=null,t?r.redraw({withTransform:!0,withUpdateXDomain:!0,withUpdateOrgXDomain:!0,withLegend:!0}):r.updateAndRedraw({withLegend:!0,withTransition:!1,withTransitionForTransform:!1}),!n.resizing&&r.brush&&(r.brush.getSelection().call(r.brush.move),r.unselectRect())):r.initToRender(!0)},destroy:function(){var t=this,e=this.internal,i=e.$el,r=i.chart,n=i.style,a=i.svg;if(Ee(e)){e.callPluginHook("$willDestroy"),e.charts.splice(e.charts.indexOf(this),1),e.unbindAllEvents(),a.select("*").interrupt(),e.resizeFunction.clear(),re.removeEventListener("resize",e.resizeFunction),r.classed("bb",!1).style("position",null).selectChildren().remove(),n&&n.parentNode.removeChild(n),Object.keys(this).forEach(function(s){s==="internal"&&Object.keys(e).forEach(function(A){e[A]=null}),t[s]=null,delete t[s]});for(var o in this)this[o]=function(){}}return null},config:function(t,e,i){var r=this.internal,n=r.config,a=r.state,o=t==null?void 0:t.replace(/\./g,"_"),s;return t&&o in n?me(e)?(n[o]=e,s=e,i&&this.flush()):s=n[o]:(arguments.length===0||Ar(t))&&(s=a.orgConfig),s}},FB={color:function(t){return this.internal.color(t)}},kd=function(t){var e=this.internal.data.targets;if(!nt(t)){var i=de(t)?t:[t];return e.filter(function(r){return i.some(function(n){return n===r.id})})}return e};Bt(kd,{shown:function(t){return this.internal.filterTargetsToShow(this.data(t))},values:function(t,e){e===void 0&&(e=!0);var i=null;if(t){var r=this.data(t);de(r)&&(i=[],r.forEach(function(n){var a=n.values.map(function(o){return o.value});e?i=i.concat(a):i.push(a)}))}return i},names:function(t){var e=this.internal;return e.updateDataAttributes("names",t)},colors:function(t){return this.internal.updateDataAttributes("colors",t)},axes:function(t){return this.internal.updateDataAttributes("axes",t)},min:function(){return this.internal.getMinMaxData().min},max:function(){return this.internal.getMinMaxData().max}});var UB={data:kd},IB=function(t){var e;return(e=re.btoa)===null||e===void 0?void 0:e.call(re,encodeURIComponent(t).replace(/%([0-9A-F]{2})/g,function(i,r){return String.fromCharCode(Number("0x".concat(r)))}))};function SB(t,e,i){var r=e||i,n=r.width,a=r.height,o=new XMLSerializer,s=t.cloneNode(!0),A=Ux(Ci(ye.styleSheets)).filter(function(h){return h.cssText}).map(function(h){return h.cssText});s.setAttribute("xmlns",ji.xhtml),s.style.margin="0",s.style.padding="0",e.preserveFontStyle&&s.querySelectorAll("text").forEach(function(h){h.innerHTML=""});var l=o.serializeToString(s),c=ye.createElement("style");c.appendChild(ye.createTextNode(A.join(`
`)));var u=o.serializeToString(c),d='<svg xmlns="'.concat(ji.svg,'" width="').concat(n,'" height="').concat(a,`" 
		viewBox="0 0 `).concat(i.width," ").concat(i.height,`" 
		preserveAspectRatio="`).concat((e==null?void 0:e.preserveAspectRatio)===!1?"none":"xMinYMid meet",`">
			<foreignObject width="100%" height="100%">
				`).concat(u,`
				`).concat(l.replace(/(url\()[^#]+/g,"$1"),`
			</foreignObject></svg>`).replace(`/
/g`,"%0A");return"data:image/svg+xml;base64,".concat(IB(d))}function kB(t,e){var i=e.top,r=e.left,n=t.getBBox(),a=n.x,o=n.y,s=t.getScreenCTM(),A=s.a,l=s.b,c=s.c,u=s.d,d=s.e,h=s.f,g=t.getBoundingClientRect(),f=g.width,p=g.height;return{x:A*a+c*o+d-r,y:l*a+u*o+h-i+(p-Math.round(p/4)),width:f,height:p}}function HB(t){var e=t.getBoundingClientRect(),i=e.left,r=e.top,n=function(o){return o.textContent||o.childElementCount},a=[];return Ci(t.querySelectorAll("text")).filter(n).forEach(function(o){var s=function(l){var c,u=re.getComputedStyle(l),d=u.fill,h=u.fontFamily,g=u.fontSize,f=u.textAnchor,p=u.transform,v=kB(l,{left:i,top:r}),m=v.x,w=v.y,x=v.width,_=v.height;return c={},c[l.textContent]={x:m,y:w,width:x,height:_,fill:d,fontFamily:h,fontSize:g,textAnchor:f,transform:p},c};if(o.childElementCount>1){var A=[];return Ci(o.querySelectorAll("tspan")).filter(n).forEach(function(l){a.push(s(l))}),A}else a.push(s(o))}),a}function NB(t,e){e.forEach(function(i){Object.keys(i).forEach(function(r){var n=i[r],a=n.x,o=n.y,s=n.width,A=n.height,l=n.fill,c=n.fontFamily,u=n.fontSize,d=n.transform;if(t.save(),t.font="".concat(u," ").concat(c),t.fillStyle=l,d==="none")t.fillText(r,a,o);else{var h=d.replace(/(matrix|\(|\))/g,"").split(",");h.splice(4).every(function(g){return+g==0})?(h.push(a+s-s/4),h.push(o-A+A/3)):(h.push(a),h.push(o)),t.transform.apply(t,h),t.fillText(r,0,0)}t.restore()})})}var LB={export:function(t,e){var i=this,r=this.internal,n=r.state,a=r.$el,o=a.chart,s=a.svg,A=n.current,l=A.width,c=A.height,u=rr({width:l,height:c,preserveAspectRatio:!0,preserveFontStyle:!1,mimeType:"image/png"},t),d=SB(o.node(),u,{width:l,height:c}),h=u.preserveFontStyle?HB(s.node()):[];if(e&&te(e)){var g=new Image;g.crossOrigin="Anonymous",g.onload=function(){var f=ye.createElement("canvas"),p=f.getContext("2d");f.width=u.width||l,f.height=u.height||c,p.drawImage(g,0,0),h.length&&(NB(p,h),h.length=0),e.bind(i)(f.toDataURL(u.mimeType))},g.src=d}return d}},MB={focus:function(t){var e=this.internal,i=e.state,r=e.mapToTargetIds(t),n=e.$el.svg.selectAll(e.selectorTargets(r.filter(e.isTargetToShow,e)));this.revert(),this.defocus(),n.classed(ve.focused,!0).classed(ve.defocused,!1),e.hasArcType()&&!i.hasRadar&&(e.expandArc(r),e.hasType("gauge")&&e.markOverlapped(t,e,".".concat(Et.gaugeValue))),e.toggleFocusLegend(r,!0),i.focusedTargetIds=r,i.defocusedTargetIds=i.defocusedTargetIds.filter(function(a){return r.indexOf(a)<0})},defocus:function(t){var e=this.internal,i=e.state,r=e.mapToTargetIds(t),n=e.$el.svg.selectAll(e.selectorTargets(r.filter(e.isTargetToShow,e)));n.classed(ve.focused,!1).classed(ve.defocused,!0),e.hasArcType(null,["polar"])&&(e.unexpandArc(r),e.hasType("gauge")&&e.undoMarkOverlapped(e,".".concat(Et.gaugeValue))),e.toggleFocusLegend(r,!1),i.focusedTargetIds=i.focusedTargetIds.filter(function(a){return r.indexOf(a)<0}),i.defocusedTargetIds=r},revert:function(t){var e=this.internal,i=e.config,r=e.state,n=e.$el,a=e.mapToTargetIds(t),o=n.svg.selectAll(e.selectorTargets(a));o.classed(ve.focused,!1).classed(ve.defocused,!1),e.hasArcType(null,["polar"])&&e.unexpandArc(a),i.legend_show&&(e.showLegend(a.filter(e.isLegendToShow.bind(e))),n.legend.selectAll(e.selectorLegends(a)).filter(function(){return G(this).classed(ve.legendItemFocused)}).classed(ve.legendItemFocused,!1)),r.focusedTargetIds=[],r.defocusedTargetIds=[]}},RB={show:function(t){var e=this.internal;e.showLegend(e.mapToTargetIds(t)),e.updateAndRedraw({withLegend:!0})},hide:function(t){var e=this.internal;e.hideLegend(e.mapToTargetIds(t)),e.updateAndRedraw({withLegend:!0})}},DB={legend:RB},$B={load:function(t){var e=this.internal,i=e.config;t.xs&&e.addXs(t.xs),"names"in t&&this.data.names(t.names),"classes"in t&&Object.keys(t.classes).forEach(function(r){i.data_classes[r]=t.classes[r]}),"categories"in t&&e.axis.isCategorized()&&(i.axis_x_categories=t.categories),"axes"in t&&Object.keys(t.axes).forEach(function(r){i.data_axes[r]=t.axes[r]}),"colors"in t&&Object.keys(t.colors).forEach(function(r){i.data_colors[r]=t.colors[r]}),"unload"in t&&t.unload!==!1?e.unload(e.mapToTargetIds(t.unload===!0?null:t.unload),function(){bd(function(){return e.loadFromArgs(t)})}):(e.api.tooltip.hide(),e.loadFromArgs(t))},unload:function(t){var e=this.internal,i=t||{};de(i)?i={ids:i}:Qe(i)&&(i={ids:[i]});var r=e.mapToTargetIds(i.ids);e.unload(r,function(){e.redraw({withUpdateOrgXDomain:!0,withUpdateXDomain:!0,withLegend:!0}),e.cache.remove(r),Sd.call(e,i.done,i.resizeAfter)})}};function oc(t,e,i){var r=this,n=this.internal,a=n.mapToTargetIds(e),o=n.state.hiddenTargetIds.map(function(l){return a.indexOf(l)>-1&&l}).filter(Boolean);n.state.toggling=!0,n["".concat(t?"remove":"add","HiddenTargetIds")](a);var s=n.$el.svg.selectAll(n.selectorTargets(a)),A=t?null:"0";t&&o.length&&(s.style("display",null),Te(n.config.data_onshown,this,o)),n.$T(s).style("opacity",A,"important").call(QA,function(){!t&&o.length===0&&(s.style("display","none"),Te(n.config.data_onhidden,r,a)),s.style("opacity",A)}),i.withLegend&&n["".concat(t?"show":"hide","Legend")](a),n.redraw({withUpdateOrgXDomain:!0,withUpdateXDomain:!0,withLegend:!0}),n.state.toggling=!1}var PB={show:function(t,e){e===void 0&&(e={}),oc.call(this,!0,t,e)},hide:function(t,e){e===void 0&&(e={}),oc.call(this,!1,t,e)},toggle:function(t,e){var i=this;e===void 0&&(e={});var r=this.internal,n={show:[],hide:[]};r.mapToTargetIds(t).forEach(function(a){return n[r.isTargetToShow(a)?"hide":"show"].push(a)}),n.show.length&&this.show(n.show,e),n.hide.length&&setTimeout(function(){return i.hide(n.hide,e)},0)}},OB={show:function(t){var e=this.internal,i=e.$el,r=e.config,n=e.state,a=n.eventReceiver,o=n.hasTreemap,s=n.inputType,A,l;if(t.mouse&&(l=t.mouse),t.data){var c=t.data,u=e.getYScaleById(c.id)(c.value);o&&c.id?a.rect=i.main.select("".concat(e.selectorTarget(c.id,void 0,"rect"))):e.isMultipleX()?l=[e.xx(c),u]:(r.tooltip_grouped||(l=[0,u]),A=V(c.index)?c.index:e.getIndexByX(c.x))}else me(t.x)?A=e.getIndexByX(t.x):me(t.index)&&(A=t.index);(s==="mouse"?["mouseover","mousemove"]:["touchstart"]).forEach(function(d){e.dispatchEvent(d,A,l)})},hide:function(){var t,e,i,r=this.internal,n=r.state.inputType,a=r.$el.tooltip,o=a==null?void 0:a.datum();if(o){var s=JSON.parse(o.current)[0].index;(n==="mouse"?["mouseout"]:["touchend"]).forEach(function(A){r.dispatchEvent(A,s)})}n==="touch"&&r.callOverOutForTouch(),r.hideTooltip(!0),(t=r.hideGridFocus)===null||t===void 0||t.call(r),(e=r.unexpandCircles)===null||e===void 0||e.call(r),(i=r.expandBarTypeShapes)===null||i===void 0||i.call(r,!1)}},zB={tooltip:OB},FA=function(){function t(e){this.plugins=[];var i=new Pa(this);this.internal=i,function r(n,a,o){Object.keys(n).forEach(function(s){var A=te(n[s]),l=a!==o,c=Ee(n[s]),u=c&&Object.keys(n[s]).length>0;A&&(!l&&u||l)?a[s]=n[s].bind(o):c&&!A?a[s]={}:a[s]=n[s],u&&r(n[s],a[s],o)})}(t.prototype,this,this),EB.call(i,e),i.beforeInit(),i.init()}return t}();Bt(FA.prototype,[QB,FB,UB,LB,MB,DB,$B,PB,zB]);function sc(t,e,i){var r=t.config,n=function(a,o){var s=J(o)?o:o===!1?void 0:null;s!==null&&(r["axis_".concat(a,"_").concat(e)]=s)};me(i)&&(St(i)?Object.keys(i).forEach(function(a){n(a,i[a])}):(J(i)||i===!1)&&["y","y2"].forEach(function(a){n(a,i)}),t.redraw({withUpdateOrgXDomain:!0,withUpdateXDomain:!0}))}function Ac(t,e){var i=t.config;return{x:i["axis_x_".concat(e)],y:i["axis_y_".concat(e)],y2:i["axis_y2_".concat(e)]}}var KB={labels:function(t){var e=this.internal,i;return t&&(Object.keys(t).forEach(function(r){e.axis.setLabelText(r,t[r])}),e.axis.updateLabels()),["x","y","y2"].forEach(function(r){var n=e.axis.getLabelText(r);n&&(!i&&(i={}),i[r]=n)}),i},min:function(t){var e=this.internal;return V(t)||t===!1?sc(e,"min",t):Ac(e,"min")},max:function(t){var e=this.internal;return V(t)||t===!1?sc(e,"max",t):Ac(e,"max")},range:function(t){var e=this.axis;if(arguments.length){var i=t.min,r=t.max;me(r)&&e.max(r),me(i)&&e.min(i)}else return{max:e.max(),min:e.min()}}},XB={axis:KB},GB={category:function(t,e){var i=this.internal,r=i.config;return arguments.length>1&&(r.axis_x_categories[t]=e,i.redraw()),r.axis_x_categories[t]},categories:function(t){var e=this.internal,i=e.config;return arguments.length&&(i.axis_x_categories=t,e.redraw()),i.axis_x_categories}};function UA(t,e){var i=this.internal,r=i.config,n=r.transition_duration&&an(),a="grid_".concat(e,"_lines");return t&&(r[a]=t,i.updateGrid(),i.redrawGrid(n)),r[a]}function Hd(t,e){var i="grid_".concat(e,"_lines");return UA.bind(this)(this.internal.config[i].concat(t||[]),e)}function Nd(t,e){this.internal.removeGridLines(t,e)}var Ld=function(t){return UA.bind(this)(t,"x")};Bt(Ld,{add:function(t){return Hd.bind(this)(t,"x")},remove:function(t){return Nd.bind(this)(t,!0)}});var Md=function(t){return UA.bind(this)(t,"y")};Bt(Md,{add:function(t){return Hd.bind(this)(t,"y")},remove:function(t){return Nd.bind(this)(t,!1)}});var YB={xgrids:Ld,ygrids:Md},VB={groups:function(t){var e=this.internal,i=e.config;return nt(t)||(i.data_groups=t,e.redraw()),i.data_groups}};function Rd(t,e){e===void 0&&(e=!1);var i=this.internal,r=i.config,n=r.transition_duration&&an();return t?(r.regions=e?r.regions.concat(t):t,i.updateRegion(),i.redrawRegion(n),e?r.regions:t):r.regions}var Dd=function(t){return Rd.bind(this)(t)};Bt(Dd,{add:function(t){return Rd.bind(this)(t,!0)},remove:function(t){var e=this.internal,i=e.config,r=e.$T,n=t||{},a=ii(n,"classes",[Jr.region]),o=e.$el.main.select(".".concat(Jr.regions)).selectAll(a.map(function(s){return".".concat(s)}));return r(o).style("opacity","0").remove(),o=i.regions,Object.keys(n).length?(o=o.filter(function(s){var A=!1;return s.class?(s.class.split(" ").forEach(function(l){a.indexOf(l)>=0&&(A=!0)}),!A):!0}),i.regions=o):i.regions=[],o}});var WB={regions:Dd},JB={x:function(t){var e=this.internal,i=e.axis,r=e.data,n=i.isCustomX()&&i.isCategorized();return de(t)&&(n?this.categories(t):(e.updateTargetX(r.targets,t),e.redraw({withUpdateOrgXDomain:!0,withUpdateXDomain:!0}))),n?this.categories():r.xs},xs:function(t){var e=this.internal;return xe(t)&&(e.updateTargetXs(e.data.targets,t),e.redraw({withUpdateOrgXDomain:!0,withUpdateXDomain:!0})),e.data.xs}},jB={flow:function(t){var e=this.internal,i;(t.json||t.rows||t.columns)&&e.convertData(t,function(n){i=n,r()});function r(){var n,a=0,o=0,s,A;if(!(e.state.redrawing||!i||!an())){var l=[],c=e.getMaxDataCount(),u=e.convertDataToTargets(i,!0),d=e.axis.isTimeSeries();e.data.targets.forEach(function(f){for(var p=!1,v=0;v<u.length;v++)if(f.id===u[v].id){p=!0,f.values[f.values.length-1]&&(o=f.values[f.values.length-1].index+1),a=u[v].values.length;for(var m=0;m<a;m++)u[v].values[m].index=o+m,d||(u[v].values[m].x=o+m);f.values=f.values.concat(u[v].values),u.splice(v,1);break}!p&&l.push(f.id)}),e.data.targets.forEach(function(f){for(var p=0;p<l.length;p++)if(f.id===l[p]){o=f.values[f.values.length-1].index+1;for(var v=0;v<a;v++)f.values.push({id:f.id,index:o+v,x:d?e.getOtherTargetX(o+v):o+v,value:null})}}),e.data.targets.length&&u.forEach(function(f){for(var p=[],v=e.data.targets[0].values[0].index;v<o;v++)p.push({id:f.id,index:v,x:d?e.getOtherTargetX(v):v,value:null});f.values.forEach(function(m){m.index+=o,d||(m.x+=o)}),f.values=p.concat(f.values)}),e.data.targets=e.data.targets.concat(u);var h=e.data.targets[0],g=h.values[0];me(t.to)?(a=0,A=d?kt.call(e,t.to):t.to,h.values.forEach(function(f){f.x<A&&a++})):me(t.length)&&(a=t.length),c?c===1&&d&&(s=(h.values[h.values.length-1].x-g.x)/2,n=[new Date(+g.x-s),new Date(+g.x+s)]):(d?s=h.values.length>1?h.values[h.values.length-1].x-g.x:g.x-e.getXDomain(e.data.targets)[0]:s=1,n=[g.x-s,g.x]),n&&e.updateXDomain(null,!0,!0,!1,n),e.updateTargets(e.data.targets),e.redraw({flow:{index:g.index,length:a,duration:V(t.duration)?t.duration:e.config.transition_duration,done:t.done,orgDataCount:c},withLegend:!0,withTransition:c>1,withTrimXDomain:!1,withUpdateXAxis:!0})}}}},lc=function(){function t(e){var i=Ti(),r=e.config,n=e.params;this.owner=e,this.config=r,this.scale=i,(r.noTransition||!n.config.transition_duration)&&(r.withoutTransition=!0),r.range=this.scaleExtent((n.orgXScale||i).range())}return t.getSizeFor1Char=function(e){var i={w:5.5,h:11.5};return!e.empty()&&e.select("text").text("0").call(function(r){try{var n=r.node().getBBox(),a=n.width,o=n.height;a&&o&&(i.w=a,i.h=o)}catch{}finally{r.text("")}}),this.getSizeFor1Char=function(){return i},i},t.prototype.getTickTransformSetter=function(e){var i=this.config,r=e==="x"?function(n){return"translate(".concat(n+i.tickOffset,",0)")}:function(n){return"translate(0,".concat(n,")")};return function(n,a){n.attr("transform",function(o){return V(o)?r(Math.ceil(a(o))):null})}},t.prototype.scaleExtent=function(e){var i=e[0],r=e[e.length-1];return i<r?[i,r]:[r,i]},t.prototype.generateTicks=function(e,i){var r=this.owner.params.tickStepSize,n=e.domain(),a=n[0],o=n[1],s=[];if(i&&r)for(var A=Math.round(a);A<=o;)s.push(A),A+=r;else if(e.ticks){var l=this.config.tickArguments;if(e.type==="log"&&!l){var c=Ti("_log").domain([a>0?a:1,o]).range(e.range());s=c.ticks();for(var u=o.toFixed().length;s.length>15;u--)s=c.ticks(u);s.splice(0,1,a),s.splice(s.length-1,1,o)}else s=e.ticks.apply(e,this.config.tickArguments||[]);s=s.map(function(h){var g=Qe(h)&&J(h)&&!isNaN(h)&&Math.round(h*10)/10||h;return g})}else{for(var d=Math.ceil(a);d<o;d++)s.push(d);s.length>0&&s[0]>0&&s.unshift(s[0]-(s[1]-s[0]))}return s},t.prototype.copyScale=function(){var e=this.scale.copy();return e.domain().length||e.domain(this.scale.domain()),e.type=this.scale.type,e},t.prototype.textFormatted=function(e){var i=this.config.tickFormat,r=/\d+\.\d+0{5,}\d$/.test(e)?+String(e).replace(/0+\d$/,""):e,n=i?i(r):r;return me(n)?n:""},t.prototype.transitionise=function(e){var i=this.config,r=e;if(i.withoutTransition)r=e.interrupt();else if(i.transition||!this.owner.params.noTransition)try{r=e.transition(i.transition)}catch{}return r},t}(),ZB=function(){function t(e){e===void 0&&(e={});var i={innerTickSize:6,outerTickSize:e.outerTick?6:0,orient:"bottom",range:[],tickArguments:null,tickCentered:null,tickCulling:!0,tickFormat:null,tickLength:9,tickOffset:0,tickPadding:3,tickValues:null,transition:null,noTransition:e.noTransition};i.tickLength=Math.max(i.innerTickSize,0)+i.tickPadding,this.config=i,this.params=e,this.helper=new lc(this)}return t.prototype.create=function(e){var i=this,r=i.config,n=i.helper,a=i.params,o=n.scale,s=r.orient,A=this.splitTickText.bind(i),l=/^(left|right)$/.test(s),c=/^(top|bottom)$/.test(s),u=n.getTickTransformSetter(c?"x":"y"),d=u===n.axisX?"y":"x",h=/^(top|left)$/.test(s)?-1:1,g=a.tickTextRotate;this.config.range=o.rangeExtent?o.rangeExtent():n.scaleExtent((a.orgXScale||o).range());var f=r.innerTickSize,p=r.tickLength,v=r.range,m=a.id,w=m&&/^(x|y|y2)$/.test(m)?a.config["axis_".concat(m,"_tick_text_position")]:{x:0,y:0},x=m==="subX"?"subchart_axis_x":"axis_".concat(m),_=a.config["".concat(x,"_show")],b={tick:_?a.config["".concat(x,"_tick_show")]:!1,text:_?a.config["".concat(x,"_tick_text_show")]:!1},E;e.each(function(){var U=G(this),H=this.__chart__||o,T=n.copyScale();E=U,this.__chart__=T,r.tickOffset=a.isCategory?Math.ceil((T(1)-T(0))/2):0;var y=U.selectAll(".domain").data([0]);if(y.enter().append("path").attr("class","domain").merge(y).attr("d",function(){var R=r.outerTickSize*h;return c?"M".concat(v[0],",").concat(R,"V0H").concat(v[1],"V").concat(R):"M".concat(R,",").concat(v[0],"H0V").concat(v[1],"H").concat(R)}),b.tick||b.text){var Q=r.tickValues||n.generateTicks(T,l);i.generatedTicks=Q;var B=U.selectAll(".tick").data(Q,T),C=B.enter().insert("g",".domain").attr("class","tick"),I=B.exit().remove();B=C.merge(B),b.tick&&C.append("line"),b.text&&C.append("text");var S=lc.getSizeFor1Char(B),k=[],F=B.select("text").selectAll("tspan").data(function(R,se){var X=a.tickMultiline?A(R,T,Q,l,S.w):de(n.textFormatted(R))?n.textFormatted(R).concat():[n.textFormatted(R)];return k[se]=X.length,X.map(function(Se){return{index:se,splitted:Se}})});F.exit().remove(),F=F.enter().append("tspan").merge(F).text(function(R){return R.splitted}),F.attr("x",c?0:p*h).attr("dx",function(){var R=0;return/(top|bottom)/.test(s)&&g&&(R=8*Math.sin(Math.PI*(g/180))*(s==="top"?-1:1)),R+(w.x||0)}()).attr("dy",function(R,se){var X=".71em",Se=0;return s!=="top"&&(Se=S.h,se===0&&(Se=l?-((k[R.index]-1)*(S.h/2)-3):w.y===0?X:0)),J(Se)&&w.y?Se+w.y:Se||X});var N=B.select("line"),D=B.select("text");if(C.select("line").attr("".concat(d,"2"),f*h),C.select("text").attr(d,p*h),i.setTickLineTextPosition(N,D),a.tickTitle){var z=D.select("title");(z.empty()?D.append("title"):z).text(function(R){return a.tickTitle[R]})}if(T.bandwidth){var Y=T,ae=Y.bandwidth()/2;H=function(R){return Y(R)+ae},T=H}else H.bandwidth?H=T:u(I,T);B=a.owner.state.flowing?n.transitionise(B):a.owner.$T(B),u(C,H),u(B.style("opacity",null),T)}}),this.g=E},t.prototype.getGeneratedTicks=function(e){var i,r=((i=this.generatedTicks)===null||i===void 0?void 0:i.length)-1,n=this.generatedTicks;if(r>e){var a=Math.round(r/e+.1);n=this.generatedTicks.map(function(o,s){return s%a===0?o:null}).filter(function(o){return o!==null}).splice(0,e)}return n},t.prototype.getTickXY=function(){var e=this.config,i={x:0,y:0};return this.params.isCategory&&(i.x=e.tickCentered?0:e.tickOffset,i.y=e.tickCentered?e.tickOffset:0),i},t.prototype.getTickSize=function(e){var i=this.helper.scale,r=this.config,n=r.innerTickSize,a=r.range,o=i(e)+(r.tickCentered?0:r.tickOffset);return a[0]<o&&o<a[1]?n:0},t.prototype.setTickLineTextPosition=function(e,i){var r=this.getTickXY(),n=this.config,a=n.innerTickSize,o=n.orient,s=n.tickLength,A=n.tickOffset,l=this.params.tickTextRotate,c=function(h){var g=["start","end"];return o==="top"&&g.reverse(),h?g[h>0?0:1]:"middle"},u=function(h){return h?"rotate(".concat(h,")"):null},d=function(h){var g=h/(o==="bottom"?15:23);return h?11.5-2.5*g*(h>0?1:-1):s};switch(o){case"bottom":e.attr("x1",r.x).attr("x2",r.x).attr("y2",this.getTickSize.bind(this)),i.attr("x",0).attr("y",d(l)).style("text-anchor",c(l)).attr("transform",u(l));break;case"top":e.attr("x2",0).attr("y2",-a),i.attr("x",0).attr("y",-d(l)*2).style("text-anchor",c(l)).attr("transform",u(l));break;case"left":e.attr("x2",-a).attr("y1",r.y).attr("y2",r.y),i.attr("x",-s).attr("y",A).style("text-anchor","end");break;case"right":e.attr("x2",a).attr("y2",0),i.attr("x",s).attr("y",0).style("text-anchor","start")}},t.prototype.splitTickText=function(e,i,r,n,a){var o=this.params,s=this.helper.textFormatted(e),A=Qe(s)&&s.indexOf(`
`)>-1?s.split(`
`):[];if(A.length)return A;if(de(s))return s;var l=o.tickWidth;(!l||l<=0)&&(l=n?95:o.isCategory?Math.ceil(o.isInverted?i(r[0])-i(r[1]):i(r[1])-i(r[0]))-12:110);function c(u,d){for(var h,g,f,p=1;p<d.length;p++)if(d.charAt(p)===" "&&(g=p),h=d.substr(0,p+1),f=a*h.length,l<f)return c(u.concat(d.substr(0,g||p)),d.slice(g?g+1:p));return u.concat(d)}return c(A,String(s))},t.prototype.scale=function(e){return arguments.length?(this.helper.scale=e,this):this.helper.scale},t.prototype.orient=function(e){return arguments.length?(this.config.orient=e in{top:1,right:1,bottom:1,left:1}?String(e):"bottom",this):this.config.orient},t.prototype.tickFormat=function(e){var i=this.config;return arguments.length?(i.tickFormat=e,this):i.tickFormat},t.prototype.tickCentered=function(e){var i=this.config;return arguments.length?(i.tickCentered=e,this):i.tickCentered},t.prototype.tickOffset=function(){return this.config.tickOffset},t.prototype.tickInterval=function(e){var i=this,r=this.config,n=r.outerTickSize,a=r.tickOffset,o=r.tickValues,s;if(this.params.isCategory)s=a*2;else{var A=this.g.select("path.domain").node().getTotalLength()-n*2;s=A/(e||this.g.selectAll("line").size());var l=o?o.map(function(c,u,d){var h=u+1;return h<d.length?i.helper.scale(d[h])-i.helper.scale(c):null}).filter(Boolean):[];s=Math.min.apply(Math,Ge(Ge([],l,!1),[s],!1))}return s===1/0?0:s},t.prototype.ticks=function(){for(var e=[],i=0;i<arguments.length;i++)e[i]=arguments[i];var r=this.config;return e.length?(r.tickArguments=Ci(e),this):r.tickArguments},t.prototype.tickCulling=function(e){var i=this.config;return arguments.length?(i.tickCulling=e,this):i.tickCulling},t.prototype.tickValues=function(e){var i=this,r=this.config;if(te(e))r.tickValues=function(){return e(i.helper.scale.domain())};else{if(!arguments.length)return r.tickValues;r.tickValues=e}return this},t.prototype.setTransition=function(e){return this.config.transition=e,this},t}(),qB={getAxisInstance:function(){return this.axis||new ew(this)}},ew=function(){function t(e){this.axesList={},this.tick={x:null,y:null,y2:null},this.xs=[],this.orient={x:"bottom",y:"left",y2:"right",subX:"bottom"},this.owner=e,this.setOrient()}return t.prototype.getAxisClassName=function(e){return"".concat(Me.axis," ").concat(Me["axis".concat(Xt(e))])},t.prototype.isHorizontal=function(e,i){var r=e.config.axis_rotated;return i?r:!r},t.prototype.isCategorized=function(){var e=this.owner,i=e.config,r=e.state;return i.axis_x_type.indexOf("category")>=0||r.hasRadar},t.prototype.isCustomX=function(){var e=this.owner.config;return!this.isTimeSeries()&&(e.data_x||Ee(e.data_xs))},t.prototype.isTimeSeries=function(e){return e===void 0&&(e="x"),this.owner.config["axis_".concat(e,"_type")]==="timeseries"},t.prototype.isLog=function(e){return e===void 0&&(e="x"),this.owner.config["axis_".concat(e,"_type")]==="log"},t.prototype.isTimeSeriesY=function(){return this.isTimeSeries("y")},t.prototype.getAxisType=function(e){e===void 0&&(e="x");var i="linear";return this.isTimeSeries(e)?i=this.owner.config.axis_x_localtime?"time":"utc":this.isLog(e)&&(i="log"),i},t.prototype.init=function(){var e=this,i=this.owner,r=i.config,n=i.$el,a=n.main,o=n.axis,s=i.state.clip,A=r.axis_rotated,l=["x","y"];r.axis_y2_show&&l.push("y2"),l.forEach(function(c){var u=e.getAxisClassName(c),d=Me["axis".concat(c.toUpperCase(),"Label")];o[c]=a.append("g").attr("class",u).attr("clip-path",function(){var h=null;return c==="x"?h=s.pathXAxis:c==="y"&&(h=s.pathYAxis),h}).attr("transform",i.getTranslate(c)).style("visibility",r["axis_".concat(c,"_show")]?null:"hidden"),o[c].append("text").attr("class",d).attr("transform",["rotate(-90)",null][c==="x"?+!A:+A]).style("text-anchor",function(){return e.textAnchorForAxisLabel(c)}),e.generateAxes(c)})},t.prototype.setOrient=function(){var e=this.owner,i=e.config,r=i.axis_rotated,n=i.axis_y_inner,a=i.axis_y2_inner;this.orient={x:r?"left":"bottom",y:r?n?"top":"bottom":n?"right":"left",y2:r?a?"bottom":"top":a?"left":"right",subX:r?"left":"bottom"}},t.prototype.generateAxes=function(e){var i=this.owner,r=i.config,n=[],a=r["axis_".concat(e,"_axes")],o=r.axis_rotated,s;e==="x"?s=o?sl:ol:e==="y"?s=o?ol:sl:e==="y2"&&(s=o?vg:mg),a.length&&a.forEach(function(A){var l=A.tick||{},c=i.scale[e].copy();A.domain&&c.domain(A.domain),n.push(s(c).ticks(l.count).tickFormat(te(l.format)?l.format.bind(i.api):function(u){return u}).tickValues(l.values).tickSizeOuter(l.outer===!1?0:6))}),this.axesList[e]=n},t.prototype.updateAxes=function(){var e=this,i=this.owner,r=i.config,n=i.$el.main,a=i.$T;Object.keys(this.axesList).forEach(function(o){var s=r["axis_".concat(o,"_axes")],A=i.scale[o].copy(),l=A.range();e.axesList[o].forEach(function(c,u){var d=c.scale().range();l.every(function(f,p){return f===d[p]})||c.scale().range(l);var h="".concat(e.getAxisClassName(o),"-").concat(u+1),g=n.select(".".concat(h.replace(/\s/,".")));g.empty()?g=n.append("g").attr("class",h).style("visibility",r["axis_".concat(o,"_show")]?null:"hidden").call(c):(s[u].domain&&A.domain(s[u].domain),a(g).call(c.scale(A))),g.attr("transform",i.getTranslate(o,u+1))})})},t.prototype.setAxis=function(e,i,r,n){var a=this.owner;e!=="subX"&&(this.tick[e]=this.getTickValues(e)),this[e]=this.getAxis(e,i,r,e==="x"&&(a.scale.zoom||a.config.subchart_show||a.state.resizing)?!0:n)},t.prototype.getAxis=function(e,i,r,n,a){var o=this.owner,s=o.config,A=/^(x|subX)$/.test(e),l=A?"x":e,c=A&&this.isCategorized(),u=this.orient[e],d=a?0:o.getAxisTickRotate(l),h;if(A)h=e==="subX"?o.format.subXAxisTick:o.format.xAxisTick;else{var g=s["axis_".concat(e,"_tick_format")];te(g)&&(h=g.bind(o.api))}var f=this.tick[l],p=rr({outerTick:r,noTransition:n,config:s,id:e,tickTextRotate:d,owner:o},A&&{isCategory:c,isInverted:s.axis_x_inverted,tickMultiline:s.axis_x_tick_multiline,tickWidth:s.axis_x_tick_width,tickTitle:c&&s.axis_x_tick_tooltip&&o.api.categories(),orgXScale:o.scale.x});A||(p.tickStepSize=s["axis_".concat(l,"_tick_stepSize")]);var v=new ZB(p).scale(A&&o.scale.zoom||i).orient(u);if(A&&this.isTimeSeries()&&f&&!te(f)){var m=kt.bind(o);f=f.map(function(x){return m(x)})}else!A&&this.isTimeSeriesY()&&(v.ticks(s.axis_y_tick_time_value),f=null);f&&v.tickValues(f),v.tickFormat(h||!A&&o.isStackNormalized()&&function(x){return"".concat(x,"%")}),c&&(v.tickCentered(s.axis_x_tick_centered),Ar(s.axis_x_tick_culling)&&(s.axis_x_tick_culling=!1));var w=s["axis_".concat(l,"_tick_count")];return w&&v.ticks(w),v},t.prototype.updateXAxisTickValues=function(e,i){var r,n=this.owner,a=n.config,o=a.axis_x_tick_fit,s=a.axis_x_tick_count,A;return(o||s&&o)&&(A=n.mapTargetsToUniqueXs(e),this.isCategorized()&&s>A.length&&(s=A.length),A=this.generateTickValues(A,s,this.isTimeSeries())),i?i.tickValues(A):this.x&&(this.x.tickValues(A),(r=this.subX)===null||r===void 0||r.tickValues(A)),A},t.prototype.getId=function(e){var i=this.owner,r=i.config,n=i.scale,a=r.data_axes[e];return(!a||!n[a])&&(a="y"),a},t.prototype.getXAxisTickFormat=function(e){var i=this.owner,r=i.config,n=i.format,a=e&&r.subchart_axis_x_tick_format||r.axis_x_tick_format,o=this.isTimeSeries(),s=this.isCategorized(),A;return a?te(a)?A=a.bind(i.api):o&&(A=function(l){return l?n.axisTime(a)(l):""}):A=o?n.defaultAxisTime:s?i.categoryName:function(l){return l<0?l.toFixed(0):l},te(A)?function(l){return A.apply(i,s?[l,i.categoryName(l)]:[l])}:A},t.prototype.getTickValues=function(e){var i=this.owner,r=i.config["axis_".concat(e,"_tick_values")],n=i["".concat(e,"Axis")];return(te(r)?r.call(i.api):r)||(n?n.tickValues():void 0)},t.prototype.getLabelOptionByAxisId=function(e){return this.owner.config["axis_".concat(e,"_label")]},t.prototype.getLabelText=function(e){var i=this.getLabelOptionByAxisId(e);return Qe(i)?i:i?i.text:null},t.prototype.setLabelText=function(e,i){var r=this.owner,n=r.config,a=this.getLabelOptionByAxisId(e);Qe(a)?n["axis_".concat(e,"_label")]=i:a&&(a.text=i)},t.prototype.getLabelPosition=function(e,i){var r=this.owner.config.axis_rotated,n=this.getLabelOptionByAxisId(e),a=St(n)&&n.position?n.position:i[+!r],o=function(s){return!!~a.indexOf(s)};return{isInner:o("inner"),isOuter:o("outer"),isLeft:o("left"),isCenter:o("center"),isRight:o("right"),isTop:o("top"),isMiddle:o("middle"),isBottom:o("bottom")}},t.prototype.getAxisLabelPosition=function(e){return this.getLabelPosition(e,e==="x"?["inner-top","inner-right"]:["inner-right","inner-top"])},t.prototype.getLabelPositionById=function(e){return this.getAxisLabelPosition(e)},t.prototype.xForAxisLabel=function(e){var i=this.owner,r=i.state,n=r.width,a=r.height,o=this.getAxisLabelPosition(e),s=o.isMiddle?-a/2:0;return this.isHorizontal(i,e!=="x")?s=o.isLeft?0:o.isCenter?n/2:n:o.isBottom&&(s=-a),s},t.prototype.dxForAxisLabel=function(e){var i=this.owner,r=this.getAxisLabelPosition(e),n=r.isBottom?"0.5em":"0";return this.isHorizontal(i,e!=="x")?n=r.isLeft?"0.5em":r.isRight?"-0.5em":"0":r.isTop&&(n="-0.5em"),n},t.prototype.textAnchorForAxisLabel=function(e){var i=this.owner,r=this.getAxisLabelPosition(e),n=r.isMiddle?"middle":"end";return this.isHorizontal(i,e!=="x")?n=r.isLeft?"start":r.isCenter?"middle":"end":r.isBottom&&(n="start"),n},t.prototype.dyForAxisLabel=function(e){var i=this.owner,r=i.config,n=r.axis_rotated,a=this.getAxisLabelPosition(e).isInner,o=r["axis_".concat(e,"_tick_rotate")]?i.getHorizontalAxisHeight(e):0,s=this.getMaxTickWidth(e),A;if(e==="x"){var l=r.axis_x_height;n?A=a?"1.2em":-25-s:a?A="-0.5em":l?A=l-10:o?A=o-10:A="3em"}else A={y:["-0.5em",10,"3em","1.2em",10],y2:["1.2em",-20,"-2.2em","-0.5em",15]}[e],n?a?A=A[0]:o?A=o*(e==="y2"?-1:1)-A[1]:A=A[2]:A=a?A[3]:(A[4]+(r["axis_".concat(e,"_inner")]?0:s+A[4]))*(e==="y"?-1:1);return A},t.prototype.getMaxTickWidth=function(e,i){var r=this.owner,n=r.config,a=r.state.current,o=r.$el,s=o.svg,A=o.chart,l=a.maxTickWidths[e],c=0;if(i||!n["axis_".concat(e,"_show")]||l.size>0&&r.filterTargetsToShow().length===0)return l.size;if(s){var u=/^y2?$/.test(e),d=r.filterTargetsToShow(r.data.targets),h=r.scale[e].copy().domain(r["get".concat(u?"Y":"X","Domain")](d,e)),g=h.domain(),f=g[0]===g[1]&&g.every(function(_){return _>0}),p=de(l.domain)&&l.domain[0]===l.domain[1]&&l.domain.every(function(_){return _>0});if(f||p)return l.size;l.domain=g,u||l.ticks.splice(0);var v=this.getAxis(e,h,!1,!1,!0),m=n["axis_".concat(e,"_tick_count")],w=n["axis_".concat(e,"_tick_values")];!w&&m&&v.tickValues(this.generateTickValues(g,m,u?this.isTimeSeriesY():this.isTimeSeries())),!u&&this.updateXAxisTickValues(d,v);var x=A.append("svg").style("visibility","hidden").style("position","fixed").style("top","0").style("left","0");v.create(x),x.selectAll("text").each(function(_,b){var E=this.getBoundingClientRect().width;c=Math.max(c,E),u||(l.ticks[b]=E)}),x.remove()}return c>0&&(l.size=c),l.size},t.prototype.getXAxisTickTextY2Overflow=function(e){var i=this.owner,r=i.axis,n=i.config,a=i.state,o=i.getAxisTickRotate("x"),s=o>0&&o<90;if((r.isCategorized()||r.isTimeSeries())&&n.axis_x_tick_fit&&!n.axis_x_tick_culling&&!n.axis_x_tick_multiline&&s){var A=a.current.width-i.getCurrentPaddingLeft(),l=this.getXAxisTickMaxOverflow(o,A-e),c=Math.max(0,l)+e;return Math.min(c,A/2)}return 0},t.prototype.getXAxisTickMaxOverflow=function(e,i){for(var r=this.owner,n=r.axis,a=r.config,o=r.state,s=n.isTimeSeries(),A=o.current.maxTickWidths.x.ticks,l=A.length,c=o.axis.x.padding,u=c.left,d=c.right,h=0,g=l-(s&&a.axis_x_tick_fit?.5:0),f=0;f<l;f++){var p=f+1,v=Math.cos(Math.PI*e/180)*A[f],m=p-(s?1:.5)+u;if(!(m<=0)){var w=i-v,x=w/m,_=g-p,b=d*x,E=_*x+b,U=v-x/2-E;h=Math.max(h,U)}}var H=r.filterTargetsToShow(r.data.targets),T=0;if(!s&&a.axis_x_tick_count<=H.length&&H[0].values.length){var y=Ti(r.axis.getAxisType("x"),0,i-h).domain([u*-1,r.getXDomainMax(r.data.targets)+1+d]);T=Math.ceil((y(1)-y(0))/2)}return h+T},t.prototype.updateLabels=function(e){var i=this,r=this.owner,n=r.$el.main,a=r.$T,o={x:n.select(".".concat(Me.axisX," .").concat(Me.axisXLabel)),y:n.select(".".concat(Me.axisY," .").concat(Me.axisYLabel)),y2:n.select(".".concat(Me.axisY2," .").concat(Me.axisY2Label))};Object.keys(o).filter(function(s){return!o[s].empty()}).forEach(function(s){var A=o[s];a(A,e).attr("x",function(){return i.xForAxisLabel(s)}).attr("dx",function(){return i.dxForAxisLabel(s)}).attr("dy",function(){return i.dyForAxisLabel(s)}).text(function(){return i.getLabelText(s)})})},t.prototype.getPadding=function(e,i,r,n){var a=J(e)?e:e[i];return V(a)?this.owner.convertPixelToScale(/(bottom|top)/.test(i)?"y":"x",a,n):r},t.prototype.generateTickValues=function(e,i,r){var n=e;if(i){var a=te(i)?i():i;if(a===1)n=[e[0]];else if(a===2)n=[e[0],e[e.length-1]];else if(a>2){var o=this.isCategorized(),s=a-2,A=e[0],l=e[e.length-1],c=(l-A)/(s+1),u=void 0;n=[A];for(var d=0;d<s;d++)u=+A+c*(d+1),n.push(r?new Date(u):o?Math.round(u):u);n.push(l)}}return r||(n=n.sort(function(h,g){return h-g})),n},t.prototype.generateTransitions=function(e){var i=this.owner,r=i.$el.axis,n=i.$T,a=["x","y","y2","subX"].map(function(c){return n(r[c],e)}),o=a[0],s=a[1],A=a[2],l=a[3];return{axisX:o,axisY:s,axisY2:A,axisSubX:l}},t.prototype.redraw=function(e,i,r){var n=this,a=this.owner,o=a.config,s=a.$el,A=i?"0":null;["x","y","y2","subX"].forEach(function(l){var c=n[l],u=s.axis[l];c&&u&&(!r&&!o.transition_duration&&(c.config.withoutTransition=!0),u.style("opacity",A),c.create(e["axis".concat(Xt(l))]))}),this.updateAxes()},t.prototype.redrawAxis=function(e,i,r,n,a){var o=this,s,A,l,c=this.owner,u=c.config,d=c.scale,h=c.$el,g=!!d.zoom,f;!g&&this.isCategorized()&&e.length===0&&d.x.domain([0,h.axis.x.selectAll(".tick").size()]),d.x&&e.length?(!g&&c.updateXDomain(e,i.UpdateXDomain,i.UpdateOrgXDomain,i.TrimXDomain),u.axis_x_tick_values||this.updateXAxisTickValues(e)):this.x&&(this.x.tickValues([]),(s=this.subX)===null||s===void 0||s.tickValues([])),u.zoom_rescale&&!n&&(f=d.x.orgDomain()),["y","y2"].forEach(function(p){var v="axis_".concat(p,"_"),m=d[p];if(m){var w=u["".concat(v,"tick_values")],x=u["".concat(v,"tick_count")];if(m.domain(c.getYDomain(e,p,f)),!w&&x){var _=c.axis[p],b=m.domain();_.tickValues(o.generateTickValues(b,b.every(function(E){return E===0})?1:x,o.isTimeSeriesY()))}}}),this.redraw(r,c.hasArcType(),a),this.updateLabels(i.Transition),(i.UpdateXDomain||i.UpdateXAxis||i.Y)&&e.length&&this.setCulling(),i.Y&&((A=d.subY)===null||A===void 0||A.domain(c.getYDomain(e,"y")),(l=d.subY2)===null||l===void 0||l.domain(c.getYDomain(e,"y2")))},t.prototype.setCulling=function(){var e=this.owner,i=e.config,r=e.state,n=r.clip,a=r.current,o=e.$el;["subX","x","y","y2"].forEach(function(s){var A=o.axis[s],l=s==="subX"?"x":s,c="axis_".concat(l,"_tick_culling"),u=i[c];if(A&&u){var d=A.selectAll(".tick"),h=nr(d.data()),g=h.length,f=i["".concat(c,"_max")],p=i["".concat(c,"_lines")],v;if(g){for(var m=1;m<g;m++)if(g/m<f){v=m;break}d.each(function(x){var _=p?this.querySelector("text"):this;_&&(_.style.display=h.indexOf(x)%v?"none":null)})}else d.style("display",null);if(s==="x"){var w=a.maxTickWidths.x.clipPath?n.pathXAxisTickTexts:null;o.svg.selectAll(".".concat(Me.axisX," .tick text")).attr("clip-path",w)}}})},t}(),tw={initEventRect:function(){var t=this;t.$el.main.select(".".concat(Ae.chart)).append("g").attr("class",gt.eventRects).style("fill-opacity","0")},redrawEventRect:function(){var t,e=this,i=e.config,r=e.state,n=e.$el,a=e.isMultipleX(),o=i.axis_x_inverted;if(n.eventRect)e.updateEventRect(n.eventRect,!0);else if(e.data.targets.length){var s=e.$el.main.select(".".concat(gt.eventRects)).style("cursor",i.zoom_enabled&&i.zoom_type!=="drag"?i.axis_rotated?"ns-resize":"ew-resize":null).classed(gt.eventRectsMultiple,a).classed(gt.eventRectsSingle,!a),A=s.selectAll(".".concat(gt.eventRect)).data([0]).enter().append("rect");e.updateEventRect(A),a?e.generateEventRectsForMultipleXs(A):e.generateEventRectsForSingleX(A),A.call(e.getDraggableSelection()),n.eventRect=A,e.state.inputType==="touch"&&!n.svg.on("touchstart.eventRect")&&!e.hasArcType()&&e.bindTouchOnEventRect(a),r.rendered&&e.updateEventRect(n.eventRect,!0)}if(!a){var l=e.getMaxDataCountTarget();(!i.data_xSort||o)&&l.sort(function(c,u){return o?u.x-c.x:c.x-u.x}),e.updateDataIndexByX(l),e.updateXs(l),(t=e.updatePointClass)===null||t===void 0||t.call(e,!0),r.eventReceiver.data=l}e.updateEventRectData()},bindTouchOnEventRect:function(t){var e=this,i=e.config,r=e.state,n=e.$el,a=n.eventRect,o=n.svg,s=function(g){if(t)e.selectRectForMultipleXs(g);else{var f=e.getDataIndexFromEvent(r.event);e.callOverOutForTouch(f),f===-1?e.unselectRect():e.selectRectForSingle(g,a,f)}},A=function(){e.unselectRect(),e.callOverOutForTouch()},l=i.interaction_inputType_touch.preventDefault,c=yd(l)&&l||!1,u=!isNaN(l)&&l||null,d,h=function(g){var f=g.type,p=g.changedTouches[0],v=p["client".concat(i.axis_rotated?"Y":"X")];f==="touchstart"?c?g.preventDefault():u!==null&&(d=v):f==="touchmove"&&(c||d===!0||u!==null&&Math.abs(d-v)>=u)&&(d=!0,g.preventDefault())};a.on("touchstart",function(g){r.event=g,e.updateEventRect()}).on("touchstart.eventRect touchmove.eventRect",function(g){if(r.event=g,!a.empty()&&a.classed(gt.eventRect)){if(r.dragging||r.flowing||e.hasArcType()||g.touches.length>1)return;h(g),s(a.node())}else A()},!0).on("touchend.eventRect",function(g){r.event=g,!a.empty()&&a.classed(gt.eventRect)&&(e.hasArcType()||!e.toggleShape||r.cancelClick)&&r.cancelClick&&(r.cancelClick=!1)},!0),o.on("touchstart",function(g){r.event=g;var f=g.target;f&&f!==a.node()&&A()})},updateEventRect:function(t,e){e===void 0&&(e=!1);var i=this,r=i.state,n=i.$el,a=r.eventReceiver,o=r.width,s=r.height,A=r.rendered,l=r.resizing,c=t||n.eventRect,u=function(){a&&(a.rect=c.node().getBoundingClientRect())};(!A||l||e)&&(c.attr("x",0).attr("y",0).attr("width",o).attr("height",s),(!A||e)&&c.classed(gt.eventRect,!0)),u()},updateEventRectData:function(){var t=this,e=t.config,i=t.scale,r=t.state,n=i.zoom||i.x,a=e.axis_rotated,o,s,A,l;if(t.isMultipleX())o=0,s=0,A=r.width,l=r.height;else{var c,u=void 0;if(t.axis.isCategorized())c=t.getEventRectWidth(),u=function(f){return n(f.x)-c/2};else{var d=function(f){var p=f.index;return{prev:t.getPrevX(p),next:t.getNextX(p)}};c=function(f){var p=d(f),v=n.domain(),m;return p.prev===null&&p.next===null?m=a?r.height:r.width:p.prev===null?m=(n(p.next)+n(f.x))/2:p.next===null?m=n(v[1])-(n(p.prev)+n(f.x))/2:(Object.keys(p).forEach(function(w,x){var _;p[w]=(_=p[w])!==null&&_!==void 0?_:v[x]}),m=Math.max(0,(n(p.next)-n(p.prev))/2)),m},u=function(f){var p=d(f),v;return p.prev===null&&p.next===null?v=0:p.prev===null?v=n(n.domain()[0]):v=(n(f.x)+n(p.prev))/2,v}}o=a?0:u,s=a?u:0,A=a?r.width:c,l=a?c:r.height}var h=r.eventReceiver,g=function(f,p){return te(f)?f(p):f};h.coords.splice(h.data.length),h.data.forEach(function(f,p){h.coords[p]={x:g(o,f),y:g(s,f),w:g(A,f),h:g(l,f)}})},selectRectForMultipleXs:function(t){var e=this,i=e.config,r=e.state,n=e.filterTargetsToShow(e.data.targets);if(!(r.dragging||e.hasArcType(n))){var a=Ut(r.event,t),o=e.findClosestFromTargets(n,a);if(r.mouseover&&(!o||o.id!==r.mouseover.id)&&(i.data_onout.call(e.api,r.mouseover),r.mouseover=void 0),!o){e.unselectRect();return}var s=e.isBubbleType(o)||e.isScatterType(o)||!i.tooltip_grouped?[o]:e.filterByX(n,o.x),A=s.map(function(l){return e.addName(l)});e.showTooltip(A,t),e.setExpand(o.index,o.id,!0),e.showGridFocus(A),(e.isBarType(o.id)||e.dist(o,a)<i.point_sensitivity)&&(e.$el.svg.select(".".concat(gt.eventRect)).style("cursor","pointer"),r.mouseover||(i.data_onover.call(e.api,o),r.mouseover=o))}},unselectRect:function(){var t=this,e=t.config,i=t.$el,r=i.circle,n=i.tooltip;t.$el.svg.select(".".concat(gt.eventRect)).style("cursor",null),t.hideGridFocus(),n&&(t.hideTooltip(),t._handleLinkedCharts(!1)),r&&!e.point_focus_only&&t.unexpandCircles(),t.expandBarTypeShapes(!1)},generateEventRectsForSingleX:function(t){var e=this,i=e.config,r=e.state,n=r.eventReceiver,a=t.style("cursor",i.data_selection_enabled&&i.data_selection_grouped?"pointer":null).on("click",function(s){r.event=s;var A=n.currentIdx,l=n.data,c=l[A===-1?e.getDataIndexFromEvent(s):A];e.clickHandlerForSingleX.bind(this)(c,e)});if(r.inputType==="mouse"){var o=function(s){var A=s?e.getDataIndexFromEvent(s):n.currentIdx;return A>-1?n.data[A]:null};a.on("mouseover",function(s){r.event=s,e.updateEventRect()}).on("mousemove",function(s){var A=o(s);if(r.event=s,!!A){var l=A.index,c=i.line_step_type;if(i.line_step_tooltipMatch&&e.hasType("step")&&/^step\-(before|after)$/.test(c)){var u=e.scale.zoom||e.scale.x,d=e.axis.xs[l],h=u.invert(Ut(s,this)[0]);c==="step-after"&&h<d?l-=1:c==="step-before"&&h>d&&(l+=1)}r.dragging||r.flowing||e.hasArcType()||i.tooltip_grouped&&l===n.currentIdx||(l!==n.currentIdx&&(e.setOverOut(!1,n.currentIdx),n.currentIdx=l),l===-1?e.unselectRect():e.selectRectForSingle(this,a,l),e.setOverOut(l!==-1,l))}}).on("mouseout",function(s){r.event=s,!(!i||e.hasArcType()||n.currentIdx===-1)&&(e.unselectRect(),e.setOverOut(!1,n.currentIdx),n.currentIdx=-1)})}return a},clickHandlerForSingleX:function(t,e){var i=e,r=i.config,n=i.state,a=i.$el.main;if(!t||i.hasArcType()||n.cancelClick){n.cancelClick&&(n.cancelClick=!1);return}var o=t.index;a.selectAll(".".concat(We.shape,"-").concat(o)).each(function(s){var A;(r.data_selection_grouped||i.isWithinShape(this,s))&&((A=i.toggleShape)===null||A===void 0||A.call(i,this,s,o),r.data_onclick.bind(i.api)(s,this))})},generateEventRectsForMultipleXs:function(t){var e=this,i=e.state;t.on("click",function(r){i.event=r,e.clickHandlerForMultipleXS.bind(this)(e)}),i.inputType==="mouse"&&t.on("mouseover mousemove",function(r){i.event=r,e.selectRectForMultipleXs(this)}).on("mouseout",function(r){i.event=r,!(!e.config||e.hasArcType())&&e.unselectRect()})},clickHandlerForMultipleXS:function(t){var e=t,i=e.config,r=e.state,n=e.filterTargetsToShow(e.data.targets);if(!e.hasArcType(n)){var a=Ut(r.event,this),o=e.findClosestFromTargets(n,a);o&&(e.isBarType(o.id)||e.dist(o,a)<i.point_sensitivity)&&e.$el.main.selectAll(".".concat(We.shapes).concat(e.getTargetSelectorSuffix(o.id))).selectAll(".".concat(We.shape,"-").concat(o.index)).each(function(){var s;(i.data_selection_grouped||e.isWithinShape(this,o))&&((s=e.toggleShape)===null||s===void 0||s.call(e,this,o,o.index),i.data_onclick.bind(e.api)(o,this))})}}},iw={generateFlow:function(t){var e=this,i=e.data,r=e.state,n=e.$el;return function(){var a=t.flow.length;r.flowing=!0,i.targets.forEach(function(s){s.values.splice(0,a)}),e.updateXGrid&&e.updateXGrid(!0);var o={};["axis.x","grid.x","gridLines.x","region.list","text","bar","line","area","circle"].forEach(function(s){var A=s.split("."),l=n[A[0]];l&&A.length>1&&(l=l[A[1]]),l!=null&&l.size()&&(o[s]=l)}),e.hideGridFocus(),e.setFlowList(o,t)}},setFlowList:function(t,e){var i=this,r=e.flow,n=e.targets,a=r.duration,o=a===void 0?e.duration:a,s=r.index,A=r.length,l=r.orgDataCount,c=i.getFlowTransform(n,l,s,A),u=Fd(),d;u.add(Object.keys(t).map(function(h){return d=t[h].transition().ease(Kv).duration(o),h==="axis.x"?d=d.call(function(g){i.axis.x.setTransition(g).create(g)}):h==="region.list"?d=d.filter(i.isRegionOnX).attr("transform",c):d=d.attr("transform",c),d})),d.call(u,function(){i.cleanUpFlow(t,e)})},cleanUpFlow:function(t,e){var i=this,r=i.config,n=i.state,a=i.$el.svg,o=r.axis_rotated,s=e.flow,A=e.shape,l=e.xv,c=A.pos,u=c.cx,d=c.cy,h=c.xForText,g=c.yForText,f=s.done,p=f===void 0?function(){}:f,v=s.length;v&&(["circle","text","shape","eventRect"].forEach(function(m){for(var w=[],x=0;x<v;x++)w.push(".".concat(De[m],"-").concat(x));a.selectAll(".".concat(De["".concat(m,"s")])).selectAll(w).remove()}),a.select(".".concat(De.xgrid)).remove()),Object.keys(t).forEach(function(m){var w=t[m];if(m!=="axis.x"&&w.attr("transform",null),m==="grid.x")w.attr(n.xgridAttr);else if(m==="gridLines.x")w.attr("x1",o?0:l).attr("x2",o?n.width:l);else if(m==="gridLines.x")w.select("line").attr("x1",o?0:l).attr("x2",o?n.width:l),w.select("text").attr("x",o?n.width:0).attr("y",l);else if(/^(area|bar|line)$/.test(m))w.attr("d",A.type[m]);else if(m==="text")w.attr("x",h).attr("y",g).style("fill-opacity",i.opacityForText.bind(i));else if(m==="circle")if(i.isCirclePoint())w.attr("cx",u).attr("cy",d);else{var x=function(b){return u(b)-r.point_r},_=function(b){return d(b)-r.point_r};w.attr("x",x).attr("y",_).attr("cx",u).attr("cy",d)}else m==="region.list"&&w.select("rect").filter(i.isRegionOnX).attr("x",i.regionX.bind(i)).attr("width",i.regionWidth.bind(i))}),r.interaction_enabled&&i.redrawEventRect(),p.call(i.api),n.flowing=!1},getFlowTransform:function(t,e,i,r){var n=this,a=n.data,o=n.scale.x,s=a.targets[0].values,A=n.getValueOnIndex(s,i),l=n.getValueOnIndex(s,i+r),c,u=o.domain(),d=n.updateXDomain(t,!0,!0);e?e===1||(A==null?void 0:A.x)===(l==null?void 0:l.x)?c=o(u[0])-o(d[0]):c=n.axis.isTimeSeries()?o(u[0])-o(d[0]):o((A==null?void 0:A.x)||0)-o(l.x):s.length!==1?c=o(u[0])-o(d[0]):n.axis.isTimeSeries()?(A=n.getValueOnIndex(s,0),l=n.getValueOnIndex(s,s.length-1),c=o(A.x)-o(l.x)):c=$r(d)/2;var h=$r(u)/$r(d);return"translate(".concat(c,",0) scale(").concat(h,",1)")}},rw={initClip:function(){var t=this,e=t.state,i=e.clip,r=e.datetimeId;i.id="".concat(r,"-clip"),i.idXAxis="".concat(i.id,"-xaxis"),i.idYAxis="".concat(i.id,"-yaxis"),i.idGrid="".concat(i.id,"-grid"),i.path=t.getClipPath(i.id),i.pathXAxis=t.getClipPath(i.idXAxis),i.pathYAxis=t.getClipPath(i.idYAxis),i.pathGrid=t.getClipPath(i.idGrid)},getClipPath:function(t){var e=this,i=e.config;if(!i.clipPath&&/-clip$/.test(t)||!i.axis_x_clipPath&&/-clip-xaxis$/.test(t)||!i.axis_y_clipPath&&/-clip-yaxis$/.test(t))return null;var r=re.navigator?re.navigator.appVersion.toLowerCase().indexOf("msie 9.")>=0:!1;return"url(".concat(r?"":ye.URL.split("#")[0],"#").concat(t,")")},appendClip:function(t,e){e&&t.append("clipPath").attr("id",e).append("rect")},setXAxisClipPath:function(t){var e=this,i=e.config,r=e.state,n=r.margin,a=r.width,o=r.height,s=i.axis_rotated,A=Math.max(30,n.left)-(s?0:20),l=s?-(1+A):-(A-1),c=-Math.max(15,n.top),u=s?n.left+20:a+10+A,d=(s?n.top+o+10:n.bottom)+20;t.attr("x",l).attr("y",c).attr("width",u).attr("height",d)},setYAxisClipPath:function(t){var e,i=this,r=i.config,n=i.state,a=n.margin,o=n.width,s=n.height,A=r.axis_rotated,l=Math.max(30,a.left)-(A?20:0),c=r.axis_y_inner,u=c&&!A?r.axis_y_label.text?-20:-1:A?-(1+l):-(l-1),d=-(A?20:a.top),h=(A?o+15+l:a.left+20)+(c?20:0),g=(A?a.bottom+(((e=r.padding)===null||e===void 0?void 0:e.mode)==="fit"?10:0):a.top+s)+10;t.attr("x",u).attr("y",d).attr("width",h).attr("height",g)},updateXAxisTickClip:function(){var t=this,e=t.config,i=t.state,r=i.clip,n=i.xAxisHeight,a=t.$el.defs,o=t.getHorizontalAxisHeight("x");if(a&&!r.idXAxisTickTexts){var s="".concat(r.id,"-xaxisticktexts");t.appendClip(a,s),r.pathXAxisTickTexts=t.getClipPath(r.idXAxisTickTexts),r.idXAxisTickTexts=s}!e.axis_x_tick_multiline&&t.getAxisTickRotate("x")&&o!==n&&(t.setXAxisTickClipWidth(),t.setXAxisTickTextClipPathWidth()),t.state.xAxisHeight=o},setXAxisTickClipWidth:function(){var t=this,e=t.config,i=t.state.current.maxTickWidths,r=t.getAxisTickRotate("x");if(!e.axis_x_tick_multiline&&r){var n=Math.sin(Math.PI/180*Math.abs(r));i.x.clipPath=(t.getHorizontalAxisHeight("x")-20)/n}else i.x.clipPath=null},setXAxisTickTextClipPathWidth:function(){var t=this,e=t.state,i=e.clip,r=e.current,n=t.$el.svg;n&&n.select("#".concat(i.idXAxisTickTexts," rect")).attr("width",r.maxTickWidths.x.clipPath).attr("height",30)}},cc=function(t){return V(t.position)||"end"},uc=function(t){return t.position==="start"?4:t.position==="middle"?0:-4};function dc(t,e,i){return function(r){var n=t?0:e;return r.position==="start"?n=t?-i:0:r.position==="middle"&&(n=(t?-i:e)/2),n}}function hc(t,e){e==="grid"&&t.each(function(){var i=G(this);["x1","x2","y1","y2"].forEach(function(r){return i.attr(r,Math.ceil(+i.attr(r)))})})}var nw={hasGrid:function(){var t=this.config;return["x","y"].some(function(e){return t["grid_".concat(e,"_show")]||t["grid_".concat(e,"_lines")].length})},initGrid:function(){var t=this;t.hasGrid()&&t.initGridLines(),t.initFocusGrid()},initGridLines:function(){var t=this,e=t.config,i=t.state.clip,r=t.$el;(e.grid_x_lines.length||e.grid_y_lines.length)&&(r.gridLines.main=r.main.insert("g",".".concat(Ae.chart).concat(e.grid_lines_front?" + *":"")).attr("clip-path",i.pathGrid).attr("class","".concat(pe.grid," ").concat(pe.gridLines)),r.gridLines.main.append("g").attr("class",pe.xgridLines),r.gridLines.main.append("g").attr("class",pe.ygridLines),r.gridLines.x=yu([]))},updateXGrid:function(t){var e=this,i=e.config,r=e.scale,n=e.state,a=e.$el,o=a.main,s=a.grid,A=i.axis_rotated,l=e.generateGridData(i.grid_x_type,r.x),c=e.axis.isCategorized()?e.axis.x.tickOffset():0,u=function(d){return(r.zoom||r.x)(d)+c*(A?-1:1)};n.xgridAttr=A?{x1:0,x2:n.width,y1:u,y2:u}:{x1:u,x2:u,y1:0,y2:n.height},s.x=o.select(".".concat(pe.xgrids)).selectAll(".".concat(pe.xgrid)).data(l),s.x.exit().remove(),s.x=s.x.enter().append("line").attr("class",pe.xgrid).merge(s.x),t||s.x.each(function(){var d=G(this);Object.keys(n.xgridAttr).forEach(function(h){d.attr(h,n.xgridAttr[h]).style("opacity",function(){return d.attr(A?"y1":"x1")===(A?n.height:0)?"0":null})})})},updateYGrid:function(){var t=this,e=t.axis,i=t.config,r=t.scale,n=t.state,a=t.$el,o=a.grid,s=a.main,A=i.axis_rotated,l=function(u){return Math.ceil(r.y(u))},c=e.y.getGeneratedTicks(i.grid_y_ticks)||t.scale.y.ticks(i.grid_y_ticks);o.y=s.select(".".concat(pe.ygrids)).selectAll(".".concat(pe.ygrid)).data(c),o.y.exit().remove(),o.y=o.y.enter().append("line").attr("class",pe.ygrid).merge(o.y),o.y.attr("x1",A?l:0).attr("x2",A?l:n.width).attr("y1",A?0:l).attr("y2",A?n.height:l),hc(o.y,"grid")},updateGrid:function(){var t=this,e=t.$el,i=e.grid,r=e.gridLines;!r.main&&t.initGridLines(),i.main.style("visibility",t.hasArcType()?"hidden":null),t.hideGridFocus(),t.updateXGridLines(),t.updateYGridLines()},updateXGridLines:function(){var t=this,e=t.config,i=t.$el,r=i.gridLines,n=i.main,a=t.$T,o=e.axis_rotated;e.grid_x_show&&t.updateXGrid();var s=n.select(".".concat(pe.xgridLines)).selectAll(".".concat(pe.xgridLine)).data(e.grid_x_lines);a(s.exit()).style("opacity","0").remove();var A=s.enter().append("g");A.append("line").style("opacity","0"),A.append("text").attr("transform",o?null:"rotate(-90)").attr("dy",-5).style("opacity","0"),s=A.merge(s),a(s.attr("class",function(l){return"".concat(pe.xgridLine," ").concat(l.class||"").trim()}).select("text").attr("text-anchor",cc).attr("dx",uc)).text(function(l){return l.text}).style("opacity",null),r.x=s},updateYGridLines:function(){var t=this,e=t.config,i=t.state,r=i.width,n=i.height,a=t.$el,o=t.$T,s=e.axis_rotated;e.grid_y_show&&t.updateYGrid();var A=a.main.select(".".concat(pe.ygridLines)).selectAll(".".concat(pe.ygridLine)).data(e.grid_y_lines);o(A.exit()).style("opacity","0").remove();var l=A.enter().append("g");l.append("line").style("opacity","0"),l.append("text").attr("transform",s?"rotate(-90)":"").style("opacity","0"),A=l.merge(A);var c=t.yv.bind(t);o(A.attr("class",function(u){return"".concat(pe.ygridLine," ").concat(u.class||"").trim()}).select("line")).attr("x1",s?c:0).attr("x2",s?c:r).attr("y1",s?0:c).attr("y2",s?n:c).style("opacity",null),o(A.select("text").attr("text-anchor",cc).attr("dx",uc)).attr("dy",-5).attr("x",dc(s,r,n)).attr("y",c).text(function(u){return u.text}).style("opacity",null),a.gridLines.y=A},redrawGrid:function(t){var e=this,i=e.config.axis_rotated,r=e.state,n=r.width,a=r.height,o=e.$el.gridLines,s=e.$T,A=e.xv.bind(e),l=o.x.select("line"),c=o.x.select("text");return l=s(l,t).attr("x1",i?0:A).attr("x2",i?n:A).attr("y1",i?A:0).attr("y2",i?A:a),c=s(c,t).attr("x",dc(!i,n,a)).attr("y",A).text(function(u){return u.text}),[l.style("opacity",null),c.style("opacity",null)]},initFocusGrid:function(){var t=this,e=t.config,i=t.state.clip,r=t.$el,n=e.grid_front,a=".".concat(n&&r.gridLines.main?pe.gridLines:Ae.chart).concat(n?" + *":""),o=r.main.insert("g",a).attr("clip-path",i.pathGrid).attr("class",pe.grid);r.grid.main=o,e.grid_x_show&&o.append("g").attr("class",pe.xgrids),e.grid_y_show&&o.append("g").attr("class",pe.ygrids),e.interaction_enabled&&e.grid_focus_show&&(o.append("g").attr("class",ve.xgridFocus).append("line").attr("class",ve.xgridFocus),e.grid_focus_y&&!e.tooltip_grouped&&o.append("g").attr("class",ve.ygridFocus).append("line").attr("class",ve.ygridFocus))},showGridFocus:function(t){var e,i=this,r=i.config,n=i.state,a=n.width,o=n.height,s=r.axis_rotated,A=i.$el.main.selectAll("line.".concat(ve.xgridFocus,", line.").concat(ve.ygridFocus)),l=(t||[A.datum()]).filter(function(d){return d&&V(i.getBaseValue(d))});if(!(!r.tooltip_show||l.length===0||i.hasType("bubble")||i.hasArcType())){var c=r.grid_focus_edge&&!r.tooltip_grouped,u=i.xx.bind(i);A.style("visibility",null).data(l.concat(l)).each(function(d){var h=G(this),g={x:u(d),y:i.getYScaleById(d.id)(d.value)},f;if(h.classed(ve.xgridFocus))f=s?[null,g.x,c?g.y:a,g.x]:[g.x,c?g.y:null,g.x,o];else{var p=i.axis.getId(d.id)==="y2";f=s?[g.y,c&&!p?g.x:null,g.y,c&&p?g.x:o]:[c&&p?g.x:null,g.y,c&&!p?g.x:a,g.y]}["x1","y1","x2","y2"].forEach(function(v,m){return h.attr(v,f[m])})}),hc(A,"grid"),(e=i.showCircleFocus)===null||e===void 0||e.call(i,t)}},hideGridFocus:function(){var t,e=this,i=e.state,r=i.inputType,n=i.resizing,a=e.$el.main;(r==="mouse"||!n)&&(a.selectAll("line.".concat(ve.xgridFocus,", line.").concat(ve.ygridFocus)).style("visibility","hidden"),(t=e.hideCircleFocus)===null||t===void 0||t.call(e))},updateGridFocus:function(){var t,e=this,i=e.state,r=i.inputType,n=i.width,a=i.height,o=i.resizing,s=e.$el.grid,A=s.main.select("line.".concat(ve.xgridFocus));if(r==="touch")A.empty()?o&&((t=e.showCircleFocus)===null||t===void 0||t.call(e)):e.showGridFocus();else{var l=e.config.axis_rotated;A.attr("x1",l?0:-10).attr("x2",l?n:-10).attr("y1",l?-10:0).attr("y2",l?-10:a)}return!0},generateGridData:function(t,e){var i=this,r=i.$el.main.select(".".concat(Me.axisX)).selectAll(".tick").size(),n=[];if(t==="year")for(var a=i.getXDomain(),o=a.map(function(c){return c.getFullYear()}),s=o[0],A=o[1],l=s;l<=A;l++)n.push(new Date("".concat(l,"-01-01 00:00:00")));else n=e.ticks(10),n.length>r&&(n=n.filter(function(c){return String(c).indexOf(".")<0}));return n},getGridFilterToRemove:function(t){return t?function(e){var i=!1;return(de(t)?t.concat():[t]).forEach(function(r){("value"in r&&e.value===r.value||"class"in r&&e.class===r.class)&&(i=!0)}),i}:function(){return!0}},removeGridLines:function(t,e){var i=this,r=i.config,n=i.$T,a=i.getGridFilterToRemove(t),o=function(c){return!a(c)},s=e?pe.xgridLines:pe.ygridLines,A=e?pe.xgridLine:pe.ygridLine;n(i.$el.main.select(".".concat(s)).selectAll(".".concat(A)).filter(a)).style("opacity","0").remove();var l="grid_".concat(e?"x":"y","_lines");r[l]=r[l].filter(o)}},aw={initRegion:function(){var t=this,e=t.$el;e.region.main=e.main.insert("g",":first-child").attr("clip-path",t.state.clip.path).attr("class",Jr.regions)},updateRegion:function(){var t=this,e=t.config,i=t.$el.region,r=t.$T;i.main||t.initRegion(),i.main.style("visibility",t.hasArcType()?"hidden":null);var n=i.main.selectAll(".".concat(Jr.region)).data(e.regions);r(n.exit()).style("opacity","0").remove();var a=n.enter().append("g");a.append("rect").style("fill-opacity","0"),i.list=a.merge(n).attr("class",t.classRegion.bind(t))},redrawRegion:function(t){var e=this,i=e.$el.region,r=e.$T,n=i.list.select("rect");return n=r(n,t).attr("x",e.regionX.bind(e)).attr("y",e.regionY.bind(e)).attr("width",e.regionWidth.bind(e)).attr("height",e.regionHeight.bind(e)),[n.style("fill-opacity",function(a){return V(a.opacity)?a.opacity:null}).on("end",function(){G(this.parentNode).selectAll("rect:not([x])").remove()})]},getRegionXY:function(t,e){var i=this,r=i.config,n=i.scale,a=r.axis_rotated,o=t==="x",s="start",A,l=0;return e.axis==="y"||e.axis==="y2"?(o||(s="end"),(o?a:!a)&&s in e&&(A=n[e.axis],l=A(e[s]))):(o?!a:a)&&s in e&&(A=n.zoom||n.x,l=A(i.axis.isTimeSeries()?kt.call(i,e[s]):e[s])),l},regionX:function(t){return this.getRegionXY("x",t)},regionY:function(t){return this.getRegionXY("y",t)},getRegionSize:function(t,e){var i=this,r=i.config,n=i.scale,a=i.state,o=r.axis_rotated,s=t==="width",A=i[s?"regionX":"regionY"](e),l,c="end",u=a[t];return e.axis==="y"||e.axis==="y2"?(s||(c="start"),(s?o:!o)&&c in e&&(l=n[e.axis],u=l(e[c]))):(s?!o:o)&&c in e&&(l=n.zoom||n.x,u=l(i.axis.isTimeSeries()?kt.call(i,e[c]):e[c])),u<A?0:u-A},regionWidth:function(t){return this.getRegionSize("width",t)},regionHeight:function(t){return this.getRegionSize("height",t)},isRegionOnX:function(t){return!t.axis||t.axis==="x"}},ow={getAxisSize:function(t){var e=this,i=e.config.axis_rotated;return i&&t==="x"||!i&&/y2?/.test(t)?e.getAxisWidthByAxisId(t,!0):e.getHorizontalAxisHeight(t)},getAxisWidthByAxisId:function(t,e){var i,r,n=this;if(n.axis){var a=(i=n.axis)===null||i===void 0?void 0:i.getLabelPositionById(t),o=n.axis.getMaxTickWidth(t,e),s=o===0?.5:0;return o+(((r=n.config.padding)===null||r===void 0?void 0:r.mode)==="fit"?a.isInner?10+s:10:a.isInner?20+s:40)}else return 40},getHorizontalAxisHeight:function(t){var e,i,r=this,n=r.config,a=r.state,o=a.current,s=a.rotatedPadding,A=a.isLegendRight,l=a.isLegendInset,c=n.axis_rotated,u=((e=n.padding)===null||e===void 0?void 0:e.mode)==="fit",d=n["axis_".concat(t,"_inner")],h=n["axis_".concat(t,"_label")].text,g=((i=n.padding)===null||i===void 0?void 0:i.mode)==="fit"?d&&!h?t==="y"?1:0:20:30;if(t==="x"&&!n.axis_x_show)return 8;if(t==="x"&&n.axis_x_height)return n.axis_x_height;if(t==="y"&&!n.axis_y_show)return n.legend_show&&!A&&!l?10:1;if(t==="y2"&&!n.axis_y2_show)return u?0:s.top;var f=r.getAxisTickRotate(t);return(t==="x"&&!c||/y2?/.test(t)&&c)&&f&&(g=30+r.axis.getMaxTickWidth(t)*Math.cos(Math.PI*(90-Math.abs(f))/180),!n.axis_x_tick_multiline&&o.height&&g>o.height/2&&(g=o.height/2)),g+(r.axis.getLabelPositionById(t).isInner?0:10)+(t==="y2"&&!c?-10:0)},getEventRectWidth:function(){var t=this,e=t.config,i=t.axis,r=e.axis_x_inverted,n=i.x.tickInterval();return Math.max(0,r?Math.abs(n):n)},getAxisTickRotate:function(t){var e=this,i=e.axis,r=e.config,n=e.state,a=e.$el,o=r["axis_".concat(t,"_tick_rotate")];if(t==="x"){var s=i.isCategorized()||i.isTimeSeries();if(r.axis_x_tick_fit&&s){var A=r.axis_x_tick_count,l=n.current.maxTickWidths.x.ticks.length,c=0;if(A?c=A>l?l:A:l&&(c=l),c!==n.axis.x.tickCount){var u=e.data.targets;n.axis.x.padding=e.getXDomainPadding([e.getXDomainMinMax(u,"min"),e.getXDomainMinMax(u,"max")],c)}n.axis.x.tickCount=c}a.svg&&r.axis_x_tick_fit&&!r.axis_x_tick_multiline&&!r.axis_x_tick_culling&&r.axis_x_tick_autorotate&&s&&(o=e.needToRotateXAxisTickTexts()?r.axis_x_tick_rotate:0)}return o},needToRotateXAxisTickTexts:function(){var t=this,e=t.state,i=e.axis,r=e.current,n=r.width-t.getCurrentPaddingLeft(!1)-t.getCurrentPaddingRight(),a=i.x.tickCount+i.x.padding.left+i.x.padding.right,o=t.axis.getMaxTickWidth("x"),s=a?n/a:0;return o>s}},sw={data_xs:{},data_xFormat:"%Y-%m-%d",data_xLocaltime:!0,data_xSort:!0,data_axes:{},data_regions:{},data_stack_normalize:!1},Aw={axis_x_clipPath:!0,axis_x_show:!0,axis_x_type:"indexed",axis_x_localtime:!0,axis_x_categories:[],axis_x_tick_centered:!1,axis_x_tick_format:void 0,axis_x_tick_culling:{},axis_x_tick_culling_max:10,axis_x_tick_culling_lines:!0,axis_x_tick_count:void 0,axis_x_tick_show:!0,axis_x_tick_text_show:!0,axis_x_tick_text_position:{x:0,y:0},axis_x_tick_fit:!0,axis_x_tick_values:null,axis_x_tick_autorotate:!1,axis_x_tick_rotate:0,axis_x_tick_outer:!0,axis_x_tick_multiline:!0,axis_x_tick_width:null,axis_x_tick_tooltip:!1,axis_x_max:void 0,axis_x_min:void 0,axis_x_inverted:!1,axis_x_padding:{},axis_x_height:void 0,axis_x_extent:void 0,axis_x_label:{},axis_x_axes:[]},lw={axis_y_clipPath:!0,axis_y_show:!0,axis_y_type:"indexed",axis_y_max:void 0,axis_y_min:void 0,axis_y_inverted:!1,axis_y_center:void 0,axis_y_inner:!1,axis_y_label:{},axis_y_tick_format:void 0,axis_y_tick_culling:!1,axis_y_tick_culling_max:5,axis_y_tick_culling_lines:!0,axis_y_tick_outer:!0,axis_y_tick_values:null,axis_y_tick_rotate:0,axis_y_tick_count:void 0,axis_y_tick_show:!0,axis_y_tick_stepSize:null,axis_y_tick_text_show:!0,axis_y_tick_text_position:{x:0,y:0},axis_y_tick_time_value:void 0,axis_y_padding:{},axis_y_default:void 0,axis_y_axes:[]},cw={axis_y2_show:!1,axis_y2_type:"indexed",axis_y2_max:void 0,axis_y2_min:void 0,axis_y2_inverted:!1,axis_y2_center:void 0,axis_y2_inner:!1,axis_y2_label:{},axis_y2_tick_format:void 0,axis_y2_tick_culling:!1,axis_y2_tick_culling_max:5,axis_y2_tick_culling_lines:!0,axis_y2_tick_outer:!0,axis_y2_tick_values:null,axis_y2_tick_rotate:0,axis_y2_tick_count:void 0,axis_y2_tick_show:!0,axis_y2_tick_stepSize:null,axis_y2_tick_text_show:!0,axis_y2_tick_text_position:{x:0,y:0},axis_y2_padding:{},axis_y2_default:void 0,axis_y2_axes:[]},uw=ee(ee(ee({axis_rotated:!1},Aw),lw),cw),dw={grid_x_show:!1,grid_x_type:"tick",grid_x_lines:[],grid_y_show:!1,grid_y_lines:[],grid_y_ticks:void 0,grid_focus_edge:!1,grid_focus_show:!0,grid_focus_y:!1,grid_front:!1,grid_lines_front:!0},hw=[XB,GB,jB,YB,VB,WB,JB],gw=[qB,rw,tw,iw,nw,aw,ow],fw=[sw,uw,dw];function gc(t){t===void 0&&(t=0);var e=this,i=e.config,r=e.state,n=e.hasMultiArcGauge(),a=r.gaugeArcWidth/e.filterTargetsToShow(e.data.targets).length,o=t?Math.min(r.radiusExpanded*t-r.radius,a*.8-(1-t)*100):0;return{inner:function(s){var A=e.getRadius(s).innerRadius;return n?r.radius-a*(s.index+1):J(A)?A:0},outer:function(s){var A=e.getRadius(s).outerRadius,l;if(n)l=r.radius-a*s.index+o;else if(e.hasType("polar")&&!t)l=e.getPolarOuterRadius(s,A);else if(l=A,t){var c=r.radiusExpanded;r.radius!==A&&(c-=Math.abs(r.radius-A)),l=c*t}return l},corner:function(s,A){var l=i.arc_cornerRadius_ratio,c=l===void 0?0:l,u=i.arc_cornerRadius,d=u===void 0?0:u,h=s.data.id,g=s.value,f=0;return c?f=c*A:f=J(d)?d:d.call(e.api,h,g,A),f}}}function Fo(t){return function(e){var i=rn(this._current,e);return this._current=e,function(r){var n=i(r);return t(n)}}}var pw={initPie:function(){var t=this,e=t.config,i=e.data_type,r=e["".concat(i,"_padding")],n=e["".concat(i,"_startingAngle")]||0,a=(r?r*.01:e["".concat(i,"_padAngle")])||0;t.pie=nx().startAngle(n).endAngle(n+2*Math.PI).padAngle(a).value(function(o){return o.values.reduce(function(s,A){return s+A.value},0)}).sort(t.getSortCompareFn.bind(t)(!0))},updateRadius:function(){var t=this,e=t.config,i=t.state,r=e.data_type,n=e["".concat(r,"_padding")],a=e.gauge_width||e.donut_width,o=t.filterTargetsToShow(t.data.targets).length*e.gauge_arcs_minWidth;i.radiusExpanded=Math.min(i.arcWidth,i.arcHeight)/2*(t.hasMultiArcGauge()&&e.gauge_label_show?.85:1),i.radius=i.radiusExpanded*.95,i.innerRadiusRatio=a?(i.radius-a)/i.radius:.6,i.gaugeArcWidth=a||(o<=i.radius-i.innerRadius?i.radius-i.innerRadius:o<=i.radius?o:i.radius);var s=e.pie_innerRadius||(n?n*(i.innerRadiusRatio+.1):0);i.outerRadius=e.pie_outerRadius,i.innerRadius=t.hasType("donut")||t.hasType("gauge")?i.radius*i.innerRadiusRatio:s},getRadius:function(t){var e=this,i=t==null?void 0:t.data,r=e.state,n=r.innerRadius,a=r.outerRadius;return!J(n)&&i&&(n=n[i.id]||0),xe(a)&&i&&i.id in a?a=a[i.id]:J(a)||(a=e.state.radius),{innerRadius:n,outerRadius:a}},updateArc:function(){var t=this;t.updateRadius(),t.svgArc=t.getSvgArc(),t.svgArcExpanded=t.getSvgArcExpanded()},getArcLength:function(){var t=this,e=t.config,i=e.gauge_arcLength*3.6,r=2*(i/360);return i<-360?r=-2:i>360&&(r=2),r*Math.PI},getStartAngle:function(){var t=this,e=t.config,i=e.gauge_fullCircle,r=-1*Math.PI/2,n=Math.PI/2,a=e.gauge_startingAngle;return!i&&a<=r?a=r:!i&&a>=n?a=n:(a>Math.PI||a<-1*Math.PI)&&(a=Math.PI),a},updateAngle:function(t){var e=this,i=e.config,r=e.state,n=e.pie,a=t,o=!1;if(!i)return null;var s=e.getStartAngle(),A=i.gauge_fullCircle?e.getArcLength():s*-2;if(a.data&&e.isGaugeType(a.data)&&!e.hasMultiArcGauge()){var l=i.gauge_min,c=i.gauge_max,u=e.getTotalDataSum(r.rendered),d=A*((u-l)/(c-l));n=n.startAngle(s).endAngle(d+s)}if(n(e.filterTargetsToShow()).forEach(function(v,m){!o&&v.data.id===a.data.id&&(o=!0,a=v,a.index=m)}),isNaN(a.startAngle)&&(a.startAngle=0),isNaN(a.endAngle)&&(a.endAngle=a.startAngle),a.data&&e.hasMultiArcGauge()){var h=i.gauge_min,g=i.gauge_max,f=A/(g-h),p=a.value<h?0:a.value<g?a.value-h:g-h;a.startAngle=s,a.endAngle=s+f*p}return o?a:null},getSvgArc:function(){var t=this,e=gc.call(t),i=e.inner,r=e.outer,n=e.corner,a=Wl().innerRadius(i).outerRadius(r),o=function(s,A){var l,c="M 0 0";if(s.value||s.data){var u=A?s:(l=t.updateAngle(s))!==null&&l!==void 0?l:null;u&&(c=a.cornerRadius(n(u,r(u)))(u))}return c};return o.centroid=a.centroid,o},getSvgArcExpanded:function(t){t===void 0&&(t=1);var e=this,i=gc.call(e,t),r=i.inner,n=i.outer,a=i.corner,o=Wl().innerRadius(r).outerRadius(n);return function(s){var A=e.updateAngle(s),l=n(A),c=0;return A&&(c=a(A,l)),A?o.cornerRadius(c)(A):"M 0 0"}},getArc:function(t,e,i){return i||this.isArcType(t.data)?this.svgArc(t,e):"M 0 0"},transformForArcLabel:function(t){var e,i=this,r=i.config,n=i.state.radiusExpanded,a=i.updateAngle(t),o="";if(a){if(i.hasMultiArcGauge()){var s=Math.sin(a.endAngle-Math.PI/2),A=Math.cos(a.endAngle-Math.PI/2)*(n+25),l=s*(n+15-Math.abs(s*10))+3;o="translate(".concat(A,",").concat(l,")")}else if(!i.hasType("gauge")||i.data.targets.length>1){var c=i.getRadius(t).outerRadius;i.hasType("polar")&&(c=i.getPolarOuterRadius(t,c));var u=this.svgArc.centroid(a),d=u.map(function(v){return isNaN(v)?0:v}),A=d[0],l=d[1],h=Math.sqrt(A*A+l*l),g=(e=["donut","pie","polar"].filter(i.hasType.bind(i)).map(function(v){return r["".concat(v,"_label_ratio")]}))===null||e===void 0?void 0:e[0];g?g=te(g)?g.bind(i.api)(t,c,h):g:g=c&&(h?(36/c>.375?1.175-36/c:.8)*c/h:0),o="translate(".concat(A*g,",").concat(l*g,")")}}return o},convertToArcData:function(t){return this.addName({id:"data"in t?t.data.id:t.id,value:t.value,ratio:this.getRatio("arc",t),index:t.index})},textForArcLabel:function(t){var e=this,i=e.hasType("gauge");e.shouldShowArcLabel()&&t.style("fill",e.updateTextColor.bind(e)).attr("filter",e.updateTextBacgroundColor.bind(e)).each(function(r){var n,a=G(this),o=e.updateAngle(r),s=e.getRatio("arc",o),A=e.meetsLabelThreshold(s,(n=["donut","gauge","pie","polar"].filter(e.hasType.bind(e)))===null||n===void 0?void 0:n[0]);if(A){var l=(o||r).value,c=(e.getArcLabelFormat()||e.defaultArcValueFormat)(l,s,r.data.id).toString();fa(a,c,[-1,1],i)}else a.text("")})},expandArc:function(t){var e=this,i=e.state.transiting,r=e.$el;if(i){var n=setInterval(function(){i||(clearInterval(n),r.legend.selectAll(".".concat(ve.legendItemFocused)).size()>0&&e.expandArc(t))},10);return}var a=e.mapToTargetIds(t);r.svg.selectAll(e.selectorTargets(a,".".concat(Ue.chartArc))).each(function(o){if(e.shouldExpand(o.data.id)){var s=e.getExpandConfig(o.data.id,"duration"),A=e.getSvgArcExpanded(e.getExpandConfig(o.data.id,"rate"));G(this).selectAll("path").transition().duration(s).attrTween("d",Fo(e.svgArcExpanded.bind(e))).transition().duration(s*2).attrTween("d",Fo(A.bind(e)))}})},unexpandArc:function(t){var e=this,i=e.state.transiting,r=e.$el.svg;if(!i){var n=e.mapToTargetIds(t);r.selectAll(e.selectorTargets(n,".".concat(Ue.chartArc))).selectAll("path").transition().duration(function(a){return e.getExpandConfig(a.data.id,"duration")}).attrTween("d",Fo(e.svgArc.bind(e))),r.selectAll("".concat(Ue.arc)).style("opacity",null)}},getExpandConfig:function(t,e){var i=this,r=i.config,n={duration:50,rate:.98},a;return i.isDonutType(t)?a="donut":i.isGaugeType(t)?a="gauge":i.isPieType(t)&&(a="pie"),a?r["".concat(a,"_expand_").concat(e)]:n[e]},shouldExpand:function(t){var e=this,i=e.config;return e.isDonutType(t)&&i.donut_expand||e.isGaugeType(t)&&i.gauge_expand||e.isPieType(t)&&i.pie_expand},shouldShowArcLabel:function(){var t=this,e=t.config;return["donut","gauge","pie","polar"].some(function(i){return t.hasType(i)&&e["".concat(i,"_label_show")]})},getArcLabelFormat:function(){var t=this,e=t.config,i=function(r){return r};return["donut","gauge","pie","polar"].filter(t.hasType.bind(t)).forEach(function(r){i=e["".concat(r,"_label_format")]}),te(i)?i.bind(t.api):i},getArcTitle:function(){var t=this,e=t.hasType("donut")&&"donut"||t.hasType("gauge")&&"gauge";return e?t.config["".concat(e,"_title")]:""},updateTargetsForArc:function(t){var e=this,i=e.$el,r=e.hasType("gauge"),n=e.getChartClass("Arc"),a=e.getClass("arcs",!0),o=e.classFocus.bind(e),s=i.main.select(".".concat(Ue.chartArcs)),A=s.selectAll(".".concat(Ue.chartArc)).data(e.pie(t)).attr("class",function(c){return n(c)+o(c.data)}),l=A.enter().append("g").attr("class",n).call(this.setCssRule(!1,".".concat(Ue.chartArcs," text"),["pointer-events:none","text-anchor:middle"]));l.append("g").attr("class",a).merge(A),l.append("text").attr("dy",r&&!e.hasMultiTargets()?"-.1em":".35em").style("opacity","0").style("text-anchor",e.getStylePropValue("middle")).style("pointer-events",e.getStylePropValue("none")),i.text=s.selectAll(".".concat(Ae.target," text"))},initArc:function(){var t=this,e=t.$el;e.arcs=e.main.select(".".concat(Ae.chart)).append("g").attr("class",Ue.chartArcs).attr("transform",t.getTranslate("arc")),t.setArcTitle()},setArcTitle:function(){var t=this,e=t.getArcTitle(),i=t.hasType("gauge");if(e){var r=t.$el.arcs.append("text").attr("class",i?Et.chartArcsGaugeTitle:Ue.chartArcsTitle).style("text-anchor","middle");i&&r.attr("dy","-0.3em"),fa(r,e,i?void 0:[-.6,1.35],!0)}},redrawArc:function(t,e,i){var r=this,n=r.config,a=r.state,o=r.$el.main,s=n.interaction_enabled,A=s&&n.data_selection_isselectable,l=o.selectAll(".".concat(Ue.arcs)).selectAll(".".concat(Ue.arc)).data(r.arcData.bind(r));l.exit().transition().duration(e).style("opacity","0").remove(),l=l.enter().append("path").attr("class",r.getClass("arc",!0)).style("fill",function(c){return r.color(c.data)}).style("cursor",function(c){var u;return!((u=A==null?void 0:A.bind)===null||u===void 0)&&u.call(A,r.api)(c)?"pointer":null}).style("opacity","0").each(function(c){r.isGaugeType(c.data)&&(c.startAngle=n.gauge_startingAngle,c.endAngle=n.gauge_startingAngle),this._current=c}).merge(l),r.hasType("gauge")&&(r.updateGaugeMax(),r.hasMultiArcGauge()&&r.redrawMultiArcGauge()),l.attr("transform",function(c){return!r.isGaugeType(c.data)&&i?"scale(0)":""}).style("opacity",function(c){return c===this._current?"0":null}).each(function(){a.transiting=!0}).transition().duration(t).attrTween("d",function(c){var u=r.updateAngle(c);if(!u)return function(){return"M 0 0"};isNaN(this._current.startAngle)&&(this._current.startAngle=0),isNaN(this._current.endAngle)&&(this._current.endAngle=this._current.startAngle);var d=rn(this._current,u);return this._current=d(0),function(h){var g=d(h);return g.data=c.data,r.getArc(g,!0)}}).attr("transform",i?"scale(1)":"").style("fill",function(c){var u;return r.levelColor?(u=r.levelColor(c.data.values[0].value),n.data_colors[c.data.id]=u):u=r.color(c.data),u}).style("opacity",null).call(QA,function(){if(r.levelColor){var c=G(this),u=c.datum();r.updateLegendItemColor(u.data.id,c.style("fill"))}a.transiting=!1,Te(n.onrendered,r.api)}),s&&r.bindArcEvent(l),r.hasType("polar")&&r.redrawPolar(),r.hasType("gauge")&&r.redrawBackgroundArcs(),r.redrawArcText(t)},redrawBackgroundArcs:function(){var t=this,e=t.config,i=t.state,r=t.hasMultiArcGauge(),n=e.gauge_fullCircle,a=t.filterTargetsToShow(t.data.targets).length===0&&!!e.data_empty_label_text,o=t.getStartAngle(),s=n?o+t.getArcLength():o*-1,A=t.$el.arcs.select("".concat(r?"g":"",".").concat(Ue.chartArcsBackground));if(r){var l=0;A=A.selectAll("path.".concat(Ue.chartArcsBackground)).data(t.data.targets),A.enter().append("path").attr("class",function(c,u){return"".concat(Ue.chartArcsBackground," ").concat(Ue.chartArcsBackground,"-").concat(u)}).merge(A).style("fill",e.gauge_background||null).attr("d",function(c){var u=c.id;if(a||i.hiddenTargetIds.indexOf(u)>=0)return"M 0 0";var d={data:[{value:e.gauge_max}],startAngle:o,endAngle:s,index:l++};return t.getArc(d,!0,!0)}),A.exit().remove()}else A.attr("d",a?"M 0 0":function(){var c={data:[{value:e.gauge_max}],startAngle:o,endAngle:s};return t.getArc(c,!0,!0)})},bindArcEvent:function(t){var e=this,i=e.config,r=e.state,n=r.inputType==="touch",a=r.inputType==="mouse";function o(l,c,u){e.expandArc(u),e.api.focus(u),e.toggleFocusLegend(u,!0),e.showTooltip([c],l)}function s(l){var c=(l==null?void 0:l.id)||void 0;e.unexpandArc(c),e.api.revert(),e.revertLegend(),e.hideTooltip()}if(t.on("click",function(l,c,u){var d,h=e.updateAngle(c),g;h&&(g=e.convertToArcData(h),(d=e.toggleShape)===null||d===void 0||d.call(e,this,g,u),i.data_onclick.bind(e.api)(g,this))}),a&&t.on("mouseover",function(l,c){if(!r.transiting){r.event=l;var u=e.updateAngle(c),d=u?e.convertToArcData(u):null,h=(d==null?void 0:d.id)||void 0;o(this,d,h),e.setOverOut(!0,d)}}).on("mouseout",function(l,c){if(!r.transiting){r.event=l;var u=e.updateAngle(c),d=u?e.convertToArcData(u):null;s(),e.setOverOut(!1,d)}}).on("mousemove",function(l,c){var u=e.updateAngle(c),d=u?e.convertToArcData(u):null;r.event=l,e.showTooltip([d],this)}),n&&e.hasArcType()&&!e.radars){var A=function(l){var c=l.changedTouches[0],u=G(ye.elementFromPoint(c.clientX,c.clientY));return u};e.$el.svg.on("touchstart touchmove",function(l){if(!r.transiting){r.event=l;var c=A(l),u=c.datum(),d=u!=null&&u.data&&u.data.id?e.updateAngle(u):null,h=d?e.convertToArcData(d):null,g=(h==null?void 0:h.id)||void 0;e.callOverOutForTouch(h),nt(g)?s():o(this,h,g)}})}},redrawArcText:function(t){var e=this,i=e.config,r=e.state,n=e.$el,a=n.main,o=n.arcs,s=e.hasType("gauge"),A=e.hasMultiArcGauge(),l;if(s&&e.data.targets.length===1&&i.gauge_title||(l=a.selectAll(".".concat(Ue.chartArc)).select("text").style("opacity","0").attr("class",function(u){return e.isGaugeType(u.data)?Et.gaugeValue:null}).call(e.textForArcLabel.bind(e)).attr("transform",e.transformForArcLabel.bind(e)).style("font-size",function(u){return e.isGaugeType(u.data)&&e.data.targets.length===1&&!A?"".concat(Math.round(r.radius/5),"px"):null}).transition().duration(t).style("opacity",function(u){return e.isTargetToShow(u.data.id)&&e.isArcType(u.data)?null:"0"}),A&&l.attr("dy","-.1em")),a.select(".".concat(Ue.chartArcsTitle)).style("opacity",e.hasType("donut")||s?null:"0"),s){var c=i.gauge_fullCircle;c&&(l==null||l.attr("dy","".concat(A?0:Math.round(r.radius/14)))),i.gauge_label_show&&(o.select(".".concat(Et.chartArcsGaugeUnit)).attr("dy","".concat(c?1.5:.75,"em")).text(i.gauge_units),o.select(".".concat(Et.chartArcsGaugeMin)).attr("dx","".concat(-1*(r.innerRadius+(r.radius-r.innerRadius)/(c?1:2)),"px")).attr("dy","1.2em").text(e.textForGaugeMinMax(i.gauge_min,!1)),!c&&o.select(".".concat(Et.chartArcsGaugeMax)).attr("dx","".concat(r.innerRadius+(r.radius-r.innerRadius)/2,"px")).attr("dy","1.2em").text(e.textForGaugeMinMax(i.gauge_max,!0)))}}},vw={initArea:function(t){var e=this,i=e.config;t.insert("g",".".concat(i.area_front?Ke.circles:qt.lines)).attr("class",e.getClass("areas",!0))},updateAreaColor:function(t){var e=this;return e.config.area_linearGradient?e.getGradienColortUrl(t.id):e.color(t)},updateArea:function(t,e){e===void 0&&(e=!1);var i=this,r=i.config,n=i.state,a=i.$el,o=i.$T,s=e?a.subchart:a;r.area_linearGradient&&i.updateLinearGradient();var A=s.main.selectAll(".".concat(_s.areas)).selectAll(".".concat(_s.area)).data(i.lineData.bind(i));o(A.exit(),t).style("opacity","0").remove(),s.area=A.enter().append("path").attr("class",i.getClass("area",!0)).style("fill",i.updateAreaColor.bind(i)).style("opacity",function(){return n.orgAreaOpacity=G(this).style("opacity"),"0"}).merge(A),A.style("opacity",n.orgAreaOpacity),i.setRatioForGroupedData(s.area.data())},redrawArea:function(t,e,i){i===void 0&&(i=!1);var r=this,n=(i?this.$el.subchart:this.$el).area,a=r.state.orgAreaOpacity;return[r.$T(n,e,Fi()).attr("d",t).style("fill",r.updateAreaColor.bind(r)).style("opacity",function(o){return String(r.isAreaRangeType(o)?a/1.75:a)})]},generateDrawArea:function(t,e){var i=this,r=i.config,n=r.line_connectNull,a=r.axis_rotated,o=i.generateGetAreaPoints(t,e),s=i.getYScaleById.bind(i),A=function(u){return(e?i.subxx:i.xx).call(i,u)},l=function(u,d){return i.isGrouped(u.id)?o(u,d)[0][1]:s(u.id,e)(i.isAreaRangeType(u)?i.getRangedData(u,"high"):i.getShapeYMin(u.id))},c=function(u,d){return i.isGrouped(u.id)?o(u,d)[1][1]:s(u.id,e)(i.isAreaRangeType(u)?i.getRangedData(u,"low"):u.value)};return function(u){var d=n?i.filterRemoveNull(u.values):u.values,h=0,g=0,f;if(i.isAreaType(u)){var p=tx();p=a?p.y(A).x0(l).x1(c):p.x(A).y0(r.area_above?0:r.area_below?i.state.height:l).y1(c),n||(p=p.defined(function(v){return i.getBaseValue(v)!==null})),i.isStepType(u)&&(d=i.convertValuesToStep(d)),f=p.curve(i.getCurve(u))(d)}else d[0]&&(h=i.scale.x(d[0].x),g=i.getYScaleById(u.id)(d[0].value)),f=a?"M ".concat(g," ").concat(h):"M ".concat(h," ").concat(g);return f||"M 0 0"}},generateGetAreaPoints:function(t,e){var i=this,r=i.config,n=i.getShapeX(0,t,e),a=i.getShapeY(!!e),o=i.getShapeOffset(i.isAreaType,t,e),s=i.getYScaleById.bind(i);return function(A,l){var c=s.call(i,A.id,e)(i.getShapeYMin(A.id)),u=o(A,l)||c,d=n(A),h=A.value,g=a(A);return r.axis_rotated&&(h>0&&g<c||h<0&&c<g)&&(g=c),[[d,u],[d,g-(c-u)],[d,g-(c-u)],[d,u]]}}},mw={initBar:function(){var t=this,e=t.$el,i=t.config,r=t.state.clip;e.bar=e.main.select(".".concat(Ae.chart)).insert("g",":first-child").attr("class",vt.chartBars).call(this.setCssRule(!1,".".concat(vt.chartBars),["pointer-events:none"])),i.clipPath===!1&&(i.bar_radius||i.bar_radius_ratio)&&e.bar.attr("clip-path",r.pathXAxis.replace(/#[^)]*/,"#".concat(r.id)))},updateTargetsForBar:function(t){var e=this,i=e.config,r=e.$el,n=e.getChartClass("Bar"),a=e.getClass("bars",!0),o=e.classFocus.bind(e),s=i.interaction_enabled&&i.data_selection_isselectable;r.bar||e.initBar();var A=r.main.select(".".concat(vt.chartBars)).selectAll(".".concat(vt.chartBar)).data(t.filter(function(c){return c.values.some(function(u){return J(u.value)||e.isBarRangeType(u)})})).attr("class",function(c){return n(c)+o(c)}),l=A.enter().append("g").attr("class",n).style("opacity","0").style("pointer-events",e.getStylePropValue("none"));l.append("g").attr("class",a).style("cursor",function(c){var u;return!((u=s==null?void 0:s.bind)===null||u===void 0)&&u.call(s,e.api)(c)?"pointer":null}).call(e.setCssRule(!0," .".concat(vt.bar),["fill"],e.color))},updateBar:function(t,e){e===void 0&&(e=!1);var i=this,r=i.config,n=i.$el,a=i.$T,o=e?n.subchart:n,s=i.getClass("bar",!0),A=i.initialOpacity.bind(i);r.bar_linearGradient&&i.updateLinearGradient();var l=o.main.selectAll(".".concat(vt.bars)).selectAll(".".concat(vt.bar)).data(i.labelishData.bind(i));a(l.exit(),t).style("opacity","0").remove(),o.bar=l.enter().append("path").attr("class",s).style("fill",i.updateBarColor.bind(i)).merge(l).style("opacity",A),i.setRatioForGroupedData(o.bar.data())},updateBarColor:function(t){var e=this,i=e.getStylePropValue(e.color);return e.config.bar_linearGradient?e.getGradienColortUrl(t.id):i?i(t):null},redrawBar:function(t,e,i){i===void 0&&(i=!1);var r=this,n=(i?r.$el.subchart:r.$el).bar;return[r.$T(n,e,Fi()).attr("d",function(a){return(J(a.value)||r.isBarRangeType(a))&&t(a)}).style("fill",r.updateBarColor.bind(r)).style("opacity",null)]},generateDrawBar:function(t,e){var i=this,r=i.config,n=i.generateGetBarPoints(t,e),a=r.axis_rotated,o=r.bar_radius,s=r.bar_radius_ratio,A=J(o)&&o>0?function(){return o}:J(s)?function(l){return l*s}:null;return function(l,c){var u=n(l,c),d=+a,h=+!d,g=l.value<0,f=r["axis_".concat(i.axis.getId(l.id),"_inverted")],p=!f&&g||f&&!g,v=["",""],m=0,w=i.isGrouped(l.id),x=A&&w?i.isStackingRadiusData(l):!1;if(A){var _=a?h:d,b=u[2][_]-u[0][_];m=!w||x?A(b):0;var E="a".concat(m,",").concat(m," ").concat(p?"1 0 0":"0 0 1"," ");v[+!a]="".concat(E).concat(m,",").concat(m),v[+a]="".concat(E).concat([-m,m][a?"sort":"reverse"]()),p&&v.reverse()}var U=a?"H".concat(u[1][d]+(p?m:-m)," ").concat(v[0],"V").concat(u[2][h]-m," ").concat(v[1],"H").concat(u[3][d]):"V".concat(u[1][h]+(p?-m:m)," ").concat(v[0],"H").concat(u[2][d]-m," ").concat(v[1],"V").concat(u[3][h]);return"M".concat(u[0][d],",").concat(u[0][h]).concat(U,"z")}},isStackingRadiusData:function(t){var e=this,i=e.$el,r=e.config,n=e.data,a=e.state,o=t.id,s=t.index,A=t.value;if(a.hiddenTargetIds.indexOf(o)>-1){var l=i.bar.filter(function(h){return h.id===o&&h.value===A});return!l.empty()&&/a\d+/i.test(l.attr("d"))}var c=r.data_groups.find(function(h){return h.indexOf(o)>-1}),u=e.orderTargets(e.filterTargetsToShow(n.targets.filter(e.isBarType,e))).filter(function(h){return c.indexOf(h.id)>-1}),d=u.map(function(h){return h.values.filter(function(g){return g.index===s&&(J(A)&&A>0?g.value>0:g.value<0)})[0]}).filter(Boolean).map(function(h){return h.id});return A!==0&&d.indexOf(o)===d.length-1},generateGetBarPoints:function(t,e){var i=this,r=i.config,n=e?i.axis.subX:i.axis.x,a=i.getIndicesMax(t)+1,o=i.getBarW("bar",n,a),s=i.getShapeX(o,t,!!e),A=i.getShapeY(!!e),l=i.getShapeOffset(i.isBarType,t,!!e),c=i.getYScaleById.bind(i);return function(u,d){var h=u.id,g=c.call(i,h,e)(i.getShapeYMin(h)),f=l(u,d)||g,p=J(o)?o:o[u.id]||o._$width,v=r["axis_".concat(i.axis.getId(h),"_inverted")],m=u.value,w=s(u),x=A(u);r.axis_rotated&&!v&&(m>0&&x<g||m<0&&g<x)&&(x=g),i.isBarRangeType(u)||(x-=g-f);var _=w+p;return[[w,f],[w,x],[_,x],[_,f]]}}},xw={initLine:function(){var t=this.$el;t.line=t.main.select(".".concat(Ae.chart)).append("g").attr("class",qt.chartLines).call(this.setCssRule(!1,".".concat(qt.chartLines),["pointer-events:none"]))},updateTargetsForLine:function(t){var e=this,i=e.$el,r=i.area,n=i.line,a=i.main,o=e.getChartClass("Line"),s=e.getClass("lines",!0),A=e.classFocus.bind(e);n||e.initLine();var l=t.filter(function(h){return!(e.isScatterType(h)||e.isBubbleType(h))}),c=a.select(".".concat(qt.chartLines)).selectAll(".".concat(qt.chartLine)).data(l).attr("class",function(h){return o(h)+A(h)}),u=c.enter().append("g").attr("class",o).style("opacity","0").style("pointer-events",e.getStylePropValue("none"));if(u.append("g").attr("class",s),e.hasTypeOf("Area")){var d=(!r&&u.empty()?c:u).filter(e.isAreaType.bind(e));e.initArea(d)}e.updateTargetForCircle(l,u)},updateLine:function(t,e){e===void 0&&(e=!1);var i=this,r=i.format.extraLineClasses,n=i.$el,a=i.$T,o=e?n.subchart:n,s=o.main.selectAll(".".concat(qt.lines)).selectAll(".".concat(qt.line)).data(i.lineData.bind(i));a(s.exit(),t).style("opacity","0").remove(),o.line=s.enter().append("path").attr("class",function(A){return"".concat(i.getClass("line",!0)(A)," ").concat(r(A)||"")}).style("stroke",i.color).merge(s).style("opacity",i.initialOpacity.bind(i)).style("shape-rendering",function(A){return i.isStepType(A)?"crispEdges":""}).attr("transform",null)},redrawLine:function(t,e,i){i===void 0&&(i=!1);var r=this,n=r.$el,a=r.$T,o=(i?n.subchart:n).line;return[a(o,e,Fi()).attr("d",t).style("stroke",this.color).style("opacity",null)]},getCurve:function(t){var e=this,i=e.config.axis_rotated&&e.isStepType(t);return i?function(r){var n=e.getInterpolate(t)(r);return n.orgPoint=n.point,n.pointRotated=function(a,o){this._point===1&&(this._point=2);var s=this._y*(1-this._t)+o*this._t;this._context.lineTo(this._x,s),this._context.lineTo(a,s),this._x=a,this._y=o},n.point=function(a,o){this._point===0?this.orgPoint(a,o):this.pointRotated(a,o)},n}:e.getInterpolate(t)},generateDrawLine:function(t,e){var i=this,r=i.config,n=i.scale,a=r.line_connectNull,o=r.axis_rotated,s=i.generateGetLinePoints(t,e),A=i.getYScaleById.bind(i),l=function(h){return(e?i.subxx:i.xx).call(i,h)},c=function(h,g){return i.isGrouped(h.id)?s(h,g)[0][1]:A(h.id,e)(i.getBaseValue(h))},u=Ad();u=o?u.x(c).y(l):u.x(l).y(c),a||(u=u.defined(function(h){return i.getBaseValue(h)!==null}));var d=e?n.subX:n.x;return function(h){var g=A(h.id,e),f=a?i.filterRemoveNull(h.values):h.values,p=0,v=0,m;if(i.isLineType(h)){var w=r.data_regions[h.id];w?m=i.lineWithRegions(f,n.zoom||d,g,w):(i.isStepType(h)&&(f=i.convertValuesToStep(f)),m=u.curve(i.getCurve(h))(f))}else f[0]&&(p=d(f[0].x),v=g(f[0].value)),m=o?"M ".concat(v," ").concat(p):"M ".concat(p," ").concat(v);return m||"M 0 0"}},lineWithRegions:function(t,e,i,r){var n=this,a=n.config,o=a.axis_rotated,s=n.axis.isTimeSeries(),A=[],l="2 2",c,u,d,h;if(me(r))for(var g=function(k,F){return nt(k)?F:s?kt.call(n,k):k},f=0,p=void 0;p=r[f];f++){var v=g(p.start,t[0].x),m=g(p.end,t[t.length-1].x),w=p.style||{dasharray:l};A[f]={start:v,end:m,style:w}}for(var x=o?function(k){return i(k.value)}:function(k){return e(k.x)},_=o?function(k){return e(k.x)}:function(k){return i(k.value)},b=function(k){return"M".concat(k[0][0],",").concat(k[0][1],"L").concat(k[1][0],",").concat(k[1][1])},E=s?function(k,F,N,D){var z=k.x.getTime(),Y=F.x-k.x,ae=new Date(z+Y*N),R=new Date(z+Y*(N+D)),se=o?[[i(u(N)),e(ae)],[i(u(N+d)),e(R)]]:[[e(ae),i(u(N))],[e(R),i(u(N+d))]];return b(se)}:function(k,F,N,D){var z=o?[[i(u(N),!0),e(c(N))],[i(u(N+D),!0),e(c(N+D))]]:[[e(c(N),!0),i(u(N))],[e(c(N+D),!0),i(u(N+D))]];return b(z)},U={x:n.axis.getAxisType("x"),y:n.axis.getAxisType("y")},H="",f=0,T=void 0;T=t[f];f++){var y=t[f-1],Q=y&&V(y.value),w=n.isWithinRegions(T.x,A);if(V(T.value)){if(nt(A)||!w||!Q)H+="".concat(f&&Q?"L":"M").concat(x(T),",").concat(_(T));else if(Q){try{w=w.dasharray.split(" ")}catch{w=l.split(" ")}c=Ti(U.x,y.x,T.x),u=Ti(U.y,y.value,T.value);var B=e(T.x)-e(y.x),C=i(T.value)-i(y.value),I=Math.sqrt(Math.pow(B,2)+Math.pow(C,2));d=w[0]/I,h=d*w[1];for(var S=d;S<=1;S+=h)H+=E(y,T,S,d),S+h>=1&&(H+=E(y,T,1,0))}}}return H},isWithinRegions:function(t,e){for(var i=0,r=void 0;r=e[i];i++)if(r.start<t&&t<=r.end)return r.style;return!1},isWithinStep:function(t,e){return Math.abs(e-Ut(this.state.event,t)[1])<30},shouldDrawPointsForLine:function(t){var e=this.config.line_point;return e===!0||de(e)&&e.indexOf(t.id)!==-1}},ki=function(){return Fi()},$d={hasValidPointType:function(t){return/^(circle|rect(angle)?|polygon|ellipse|use)$/i.test(t||this.config.point_type)},hasValidPointDrawMethods:function(t){var e=t||this.config.point_type;return St(e)&&te(e.create)&&te(e.update)},initialOpacityForCircle:function(t){var e=this,i=e.config,r=e.state.withoutFadeIn,n=i.point_opacity;return nt(n)&&(n=this.getBaseValue(t)!==null&&r[t.id]?this.opacityForCircle(t):"0"),n},opacityForCircle:function(t){var e=this.config,i=e.point_opacity;return nt(i)&&(i=e.point_show&&!e.point_focus_only?null:"0",i=V(this.getBaseValue(t))?this.isBubbleType(t)||this.isScatterType(t)?"0.5":i:"0"),i},initCircle:function(){var t=this,e=t.$el.main;t.point=t.generatePoint(),(t.hasType("bubble")||t.hasType("scatter"))&&e.select(".".concat(Ke.chartCircles)).empty()&&e.select(".".concat(Ae.chart)).append("g").attr("class",Ke.chartCircles)},updateTargetForCircle:function(t,e){var i=this,r=this,n=r.config,a=r.data,o=r.$el,s=n.interaction_enabled&&n.data_selection_enabled,A=s&&n.data_selection_isselectable,l=r.getClass("circles",!0);if(n.point_show){!o.circle&&r.initCircle();var c=t,u=e;if(!c){c=a.targets.filter(function(h){return i.isScatterType(h)||i.isBubbleType(h)});var d=o.main.select(".".concat(Ke.chartCircles)).style("pointer-events","none").selectAll(".".concat(Ke.circles)).data(c);d.exit().remove(),u=d.enter()}s&&u.append("g").attr("class",function(h){return r.generateClass(He.selectedCircles,h.id)}),u.append("g").attr("class",l).call(function(h){r.setCssRule(!0,".".concat(Ke.circles),["cursor:pointer"],A)(h),r.setCssRule(!0," .".concat(Ke.circle),["fill","stroke"],r.color)(h)}).style("opacity",function(){var h=G(this.parentNode);return h.attr("class").indexOf(Ke.chartCircles)>-1?"0":null}),s&&c.forEach(function(h){o.main.selectAll(".".concat(He.selectedCircles).concat(r.getTargetSelectorSuffix(h.id))).selectAll("".concat(He.selectedCircle)).each(function(g){g.value=h.values[g.index].value})})}},updateCircle:function(t){t===void 0&&(t=!1);var e=this,i=e.config,r=e.state,n=e.$el,a=i.point_focus_only,o=t?n.subchart:n;if(i.point_show&&!r.toggling){var s=o.main.selectAll(".".concat(Ke.circles)).selectAll(".".concat(Ke.circle)).data(function(A){return e.isLineType(A)&&e.shouldDrawPointsForLine(A)||e.isBubbleType(A)||e.isRadarType(A)||e.isScatterType(A)?a?[A.values[0]]:A.values:[]});s.exit().remove(),s.enter().filter(Boolean).append(e.point("create",this,e.pointR.bind(e),e.getStylePropValue(e.color))),o.circle=o.main.selectAll(".".concat(Ke.circles," .").concat(Ke.circle)).style("stroke",e.getStylePropValue(e.color)).style("opacity",e.initialOpacityForCircle.bind(e))}},redrawCircle:function(t,e,i,r,n){n===void 0&&(n=!1);var a=this,o=a.state.rendered,s=a.$el,A=a.$T,l=n?s.subchart:s,c=l.main.selectAll(".".concat(He.selectedCircle));if(!a.config.point_show)return[];var u=a.point("update",a,t,e,a.getStylePropValue(a.color),i,r,c),d=a.isCirclePoint()?"c":"",h=Fi(),g=a.opacityForCircle.bind(a),f=[];return l.circle.each(function(p){var v=u.bind(this)(p);v=A(v,i||!o,h).style("opacity",g),f.push(v)}),[f,A(c,i).attr("".concat(d,"x"),t).attr("".concat(d,"y"),e)]},showCircleFocus:function(t){var e=this,i=e.config,r=e.state,n=r.hasRadar,a=r.resizing,o=r.toggling,s=r.transiting,A=e.$el,l=A.circle;if(s===!1&&i.point_focus_only&&l){var c=(n?e.radarCircleX:e.circleX).bind(e),u=(n?e.radarCircleY:e.circleY).bind(e),d=o||nt(t),h=e.point("update",e,c,u,e.getStylePropValue(e.color),a?!1:d);t&&(l=l.filter(function(g){var f,p=(f=t.filter)===null||f===void 0?void 0:f.call(t,function(v){return v.id===g.id});return p.length?G(this).datum(p[0]):!1})),l.attr("class",this.updatePointClass.bind(this)).style("opacity",null).each(function(g){var f=g.id,p=g.index,v=g.value,m="hidden";V(v)&&(h.bind(this)(g),e.expandCircles(p,f),m=""),this.style.visibility=m})}},hideCircleFocus:function(){var t=this,e=t.config,i=t.$el.circle;e.point_focus_only&&i&&(t.unexpandCircles(),i.style("visibility","hidden"))},circleX:function(t){return this.xx(t)},updateCircleY:function(t){t===void 0&&(t=!1);var e=this,i=e.generateGetLinePoints(e.getShapeIndices(e.isLineType),t);return function(r,n){var a=r.id;return e.isGrouped(a)?i(r,n)[0][1]:e.getYScaleById(a,t)(e.getBaseValue(r))}},expandCircles:function(t,e,i){var r=this,n=r.pointExpandedR.bind(r);i&&r.unexpandCircles();var a=r.getShapeByIndex("circle",t,e).classed(Ae.EXPANDED,!0),o=n(a)/r.config.point_r,s=1-o;r.isCirclePoint()?a.attr("r",n):a.each(function(){var A=G(this);if(this.tagName==="circle")A.attr("r",n);else{var l=this.getBBox(),c=l.width,u=l.height,d=s*(+A.attr("x")+c/2),h=s*(+A.attr("y")+u/2);A.attr("transform","translate(".concat(d," ").concat(h,") scale(").concat(o,")"))}})},unexpandCircles:function(t){var e=this,i=e.pointR.bind(e),r=e.getShapeByIndex("circle",t).filter(function(){return G(this).classed(Ae.EXPANDED)}).classed(Ae.EXPANDED,!1);if(r.attr("r",i),!e.isCirclePoint()){var n=i(r)/e.config.point_r;r.attr("transform",n!==1?"scale(".concat(n,")"):null)}},pointR:function(t){var e=this,i=e.config,r=i.point_r,n=r;return e.isBubbleType(t)?n=e.getBubbleR(t):te(r)&&(n=r.bind(e.api)(t)),n},pointExpandedR:function(t){var e=this,i=e.config,r=e.isBubbleType(t)?1.15:1.75;return i.point_focus_expand_enabled?i.point_focus_expand_r||e.pointR(t)*r:e.pointR(t)},pointSelectR:function(t){var e=this,i=e.config.point_select_r;return te(i)?i(t):i||e.pointR(t)*4},isWithinCircle:function(t,e){var i=Ut(this.state.event,t),r=G(t),n=this.isCirclePoint(t)?"c":"",a=+r.attr("".concat(n,"x")),o=+r.attr("".concat(n,"y"));if(!(a||o)&&t.nodeType===1){var s=Hr(t),A=s.x,l=s.y;a=A,o=l}return Math.sqrt(Math.pow(a-i[0],2)+Math.pow(o-i[1],2))<(e||this.config.point_sensitivity)},insertPointInfoDefs:function(t,e){var i,r=this,n=function(l,c){for(var u=l.attributes,d=0,h;h=u[d];d++)h=h.name,c.setAttribute(h,l.getAttribute(h))},a=new DOMParser().parseFromString(t,"image/svg+xml"),o=a.documentElement,s=ye.createElementNS(ji.svg,o.nodeName.toLowerCase());if(s.id=e,s.style.fill="inherit",s.style.stroke="inherit",n(o,s),!((i=o.childNodes)===null||i===void 0)&&i.length){var A=G(s);"innerHTML"in s?A.html(o.innerHTML):Ci(o.childNodes).forEach(function(l){n(l,A.append(l.tagName).node())})}r.$el.defs.node().appendChild(s)},pointFromDefs:function(t){return this.$el.defs.select("#".concat(t))},updatePointClass:function(t){var e=this,i=e.$el.circle,r=!1;return(xe(t)||i)&&(r=t===!0?i.each(function(n){var a=e.getClass("circle",!0)(n);this.getAttribute("class").indexOf(Ae.EXPANDED)>-1&&(a+=" ".concat(Ae.EXPANDED)),this.setAttribute("class",a)}):e.getClass("circle",!0)(t)),r},generateGetLinePoints:function(t,e){var i=this,r=i.config,n=i.getShapeX(0,t,e),a=i.getShapeY(e),o=i.getShapeOffset(i.isLineType,t,e),s=i.getYScaleById.bind(i);return function(A,l){var c=s.call(i,A.id,e)(i.getShapeYMin(A.id)),u=o(A,l)||c,d=n(A),h=a(A);r.axis_rotated&&(A.value>0&&h<c||A.value<0&&c<h)&&(h=c);var g=[d,h-(c-u)];return[g,g,g,g]}},generatePoint:function(){var t=this,e=t.config,i=t.state.datetimeId,r=[],n=Ee(e.point_pattern)?e.point_pattern:[e.point_type];return function(a,o){for(var s=[],A=2;A<arguments.length;A++)s[A-2]=arguments[A];return function(l){var c,u=t.getTargetSelectorSuffix(l.id||((c=l.data)===null||c===void 0?void 0:c.id)||l),d=G(this);r.indexOf(u)<0&&r.push(u);var h=n[r.indexOf(u)%n.length];if(t.hasValidPointType(h))h=t[h];else if(!t.hasValidPointDrawMethods(h)){var g="".concat(i,"-point").concat(u),f=t.pointFromDefs(g);if(f.size()<1&&t.insertPointInfoDefs(h,g),a==="create")return t.custom.create.bind(o).apply(void 0,Ge([d,g],s,!1));if(a==="update")return t.custom.update.bind(o).apply(void 0,Ge([d],s,!1))}return h[a].bind(o).apply(void 0,Ge([d],s,!1))}}},custom:{create:function(t,e,i){return t.append("use").attr("xlink:href","#".concat(e)).attr("class",this.updatePointClass.bind(this)).style("fill",i).node()},update:function(t,e,i,r,n,a,o){var s=this,A=t.node().getBBox(),l=A.width,c=A.height,u=function(g){return V(g.value)?e(g)-l/2:0},d=function(g){return V(g.value)?i(g)-c/2:0},h=t;return n&&(a&&h.attr("x",u),h=s.$T(h,n,ki()),o&&s.$T(o,n,ki())),h.attr("x",u).attr("y",d).style("fill",r)}},circle:{create:function(t,e,i){return t.append("circle").attr("class",this.updatePointClass.bind(this)).attr("r",e).style("fill",i).node()},update:function(t,e,i,r,n,a,o){var s=this,A=t;return s.hasType("bubble")&&A.attr("r",s.pointR.bind(s)),n&&(a&&A.attr("cx",e),A.attr("cx")&&(A=s.$T(A,n,ki())),o&&s.$T(A,n,ki())),A.attr("cx",e).attr("cy",i).style("fill",r)}},rectangle:{create:function(t,e,i){var r=function(n){return e(n)*2};return t.append("rect").attr("class",this.updatePointClass.bind(this)).attr("width",r).attr("height",r).style("fill",i).node()},update:function(t,e,i,r,n,a,o){var s=this,A=s.config.point_r,l=function(d){return e(d)-A},c=function(d){return i(d)-A},u=t;return n&&(a&&u.attr("x",l),u=s.$T(u,n,ki()),o&&s.$T(o,n,ki())),u.attr("x",l).attr("y",c).style("fill",r)}}},Pd={point_show:!0,point_r:2.5,point_sensitivity:10,point_focus_expand_enabled:!0,point_focus_expand_r:void 0,point_focus_only:!1,point_opacity:void 0,point_pattern:[],point_select_r:void 0,point_type:"circle"},Bw={area_above:!1,area_below:!1,area_front:!0,area_linearGradient:!1,area_zerobased:!0},ww={bar_label_threshold:0,bar_linearGradient:!1,bar_indices_removeNull:!1,bar_overlap:!1,bar_padding:0,bar_radius:void 0,bar_radius_ratio:void 0,bar_sensitivity:2,bar_width:void 0,bar_width_ratio:.6,bar_width_max:void 0,bar_zerobased:!0},bw={line_connectNull:!1,line_step_type:"step",line_step_tooltipMatch:!1,line_zerobased:!1,line_classes:void 0,line_point:!0},yw={scatter_zerobased:!1},_w={arc_cornerRadius:0,arc_cornerRadius_ratio:0},Cw={pie_label_show:!0,pie_label_format:void 0,pie_label_threshold:.05,pie_label_ratio:void 0,pie_expand:{},pie_expand_rate:.98,pie_expand_duration:50,pie_innerRadius:0,pie_outerRadius:void 0,pie_padAngle:0,pie_padding:0,pie_startingAngle:0};function IA(t,e){Bt(Pa.prototype,gw.concat(t)),Bt(FA.prototype,hw),$a.setOptions(fw.concat(e||[]))}function Od(t,e){IA([$d,xw].concat(t||[])),$a.setOptions([Pd,bw].concat(e||[]))}function Tw(t,e){Bt(Pa.prototype,[pw].concat(t||[])),$a.setOptions(e)}var zd=function(){return Od(vw,[Bw]),(zd=function(){return Z.AREA})()},Kd=function(){return Od(),(Kd=function(){return Z.LINE})()},Xd=function(){return Tw(void 0,[_w,Cw]),(Xd=function(){return Z.PIE})()},Gd=function(){return IA([mw],ww),(Gd=function(){return Z.BAR})()},Yd=function(){return IA([$d],[Pd,yw]),(Yd=function(){return Z.SCATTER})()};function Ew(t,e,i,r){r===void 0&&(r=!1);var n=i[0],a=i[1];return t.every(function(o,s){return(s===0?r?+o<=n:+o>=n:r?+o>=a:+o<=a)&&!t.every(function(A,l){return A===e[l]})})}var Qw=function(t){var e,i=this.internal,r=i.$el,n=i.axis,a=i.config,o=i.org,s=i.scale,A=a.axis_rotated,l=a.axis_x_inverted,c=n.isCategorized(),u=t;if(a.zoom_enabled&&u){n.isTimeSeries()&&(u=u.map(function(p){return kt.bind(i)(p)}));var d=Ew(u,i.getZoomDomain(!0),i.getZoomDomain(),l);if(d){if(c&&(u=u.map(function(p,v){return Number(p)+(v===0?0:1)})),i.api.tooltip.hide(),a.subchart_show){var h=s.zoom||s.x;i.brush.getSelection().call(i.brush.move,u.map(h))}else{var h=c?s.x.orgScale():o.xScale||s.x,g=[-h(u[0]),0],f=(e=bx.scale(h.range()[1]/(h(u[1])-h(u[0])))).translate.apply(e,A?g.reverse():g);r.eventRect.call(i.zoom.transform,f)}i.setZoomResetButton()}}else u=s.zoom?s.zoom.domain():s.x.orgDomain();return u};Bt(Qw,{enable:function(t){var e=this.internal,i=e.config;/^(drag|wheel)$/.test(t)&&(i.zoom_type=t),i.zoom_enabled=!!t,e.zoom?t===!1&&e.bindZoomEvent(!1):(e.initZoom(),e.bindZoomEvent()),e.updateAndRedraw()},max:function(t){var e=this.internal,i=e.config,r=e.org.xDomain;return(t===0||t)&&(i.zoom_x_max=Zt("max",[r[1],t])),i.zoom_x_max},min:function(t){var e=this.internal,i=e.config,r=e.org.xDomain;return(t===0||t)&&(i.zoom_x_min=Zt("min",[r[0],t])),i.zoom_x_min},range:function(t){var e=this.zoom;if(xe(t)){var i=t.min,r=t.max;me(i)&&e.min(i),me(r)&&e.max(r)}return{min:e.min(),max:e.max()}}});var Fw={drag:function(t){var e=this,i=e.config,r=e.state,n=e.$el.main,a=i.data_selection_grouped,o=i.interaction_enabled&&i.data_selection_isselectable;if(!(e.hasArcType()||!i.data_selection_enabled||i.zoom_enabled&&!e.zoom.altDomain||!i.data_selection_multiple)){var s=r.dragStart||[0,0],A=s[0],l=s[1],c=t[0],u=t[1],d=Math.min(A,c),h=Math.max(A,c),g=a?r.margin.top:Math.min(l,u),f=a?r.height:Math.max(l,u);n.select(".".concat(di.dragarea)).attr("x",d).attr("y",g).attr("width",h-d).attr("height",f-g),n.selectAll(".".concat(We.shapes)).selectAll(".".concat(We.shape)).filter(function(p){return o==null?void 0:o.bind(e.api)(p)}).each(function(p,v){var m=G(this),w=m.classed(He.SELECTED),x=m.classed(di.INCLUDED),_=!1,b;if(m.classed(Ke.circle)){var E=+m.attr("cx")*1,U=+m.attr("cy")*1;b=e.togglePoint,_=d<E&&E<h&&g<U&&U<f}else if(m.classed(vt.bar)){var H=Cx(this),E=H.x,U=H.y,T=H.width,y=H.height;b=e.togglePath,_=!(h<E||E+T<d)&&!(f<U||U+y<g)}else return;_^x&&(m.classed(di.INCLUDED,!x),m.classed(He.SELECTED,!w),b.call(e,!w,m,p,v))})}},dragstart:function(t){var e=this,i=e.config,r=e.state,n=e.$el.main;e.hasArcType()||!i.data_selection_enabled||(r.dragStart=t,n.select(".".concat(Ae.chart)).append("rect").attr("class",di.dragarea).style("opacity","0.1"),e.setDragStatus(!0))},dragend:function(){var t=this,e=t.config,i=t.$el.main,r=t.$T;t.hasArcType()||!e.data_selection_enabled||(r(i.select(".".concat(di.dragarea))).style("opacity","0").remove(),i.selectAll(".".concat(We.shape)).classed(di.INCLUDED,!1),t.setDragStatus(!1))}};ee(ee({},Fw),{selectPoint:function(t,e,i){var r=this,n=r.config,a=r.$el.main,o=r.$T,s=n.axis_rotated,A=(s?r.circleY:r.circleX).bind(r),l=(s?r.circleX:r.circleY).bind(r),c=r.pointSelectR.bind(r);Te(n.data_onselected,r.api,e,t.node()),o(a.select(".".concat(He.selectedCircles).concat(r.getTargetSelectorSuffix(e.id))).selectAll(".".concat(He.selectedCircle,"-").concat(i)).data([e]).enter().append("circle").attr("class",function(){return r.generateClass(He.selectedCircle,i)}).attr("cx",A).attr("cy",l).attr("stroke",r.color).attr("r",function(u){return r.pointSelectR(u)*1.4})).attr("r",c)},unselectPoint:function(t,e,i){var r=this,n=r.config,a=r.$el.main,o=r.$T;Te(n.data_onunselected,r.api,e,t==null?void 0:t.node()),o(a.select(".".concat(He.selectedCircles).concat(r.getTargetSelectorSuffix(e.id))).selectAll(".".concat(He.selectedCircle,"-").concat(i))).attr("r",0).remove()},togglePoint:function(t,e,i,r){var n="".concat(t?"":"un","selectPoint");this[n](e,i,r)},selectPath:function(t,e){var i=this,r=i.config;Te(r.data_onselected,i.api,e,t.node()),r.interaction_brighten&&t.style("filter","brightness(1.25)")},unselectPath:function(t,e){var i=this,r=i.config;Te(r.data_onunselected,i.api,e,t.node()),r.interaction_brighten&&t.style("filter",null)},togglePath:function(t,e,i,r){this["".concat(t?"":"un","selectPath")](e,i,r)},getToggle:function(t,e){var i=this;return t.nodeName==="path"?i.togglePath:i.isStepType(e)?function(){}:i.togglePoint},toggleShape:function(t,e,i){var r=this,n=r.config,a=r.$el.main;if(n.data_selection_enabled&&n.data_selection_isselectable.bind(r.api)(e)){var o=G(t),s=o.classed(He.SELECTED),A=r.getToggle(t,e).bind(r),l;if(!n.data_selection_multiple){var c=n.point_focus_only,u=".".concat(c?He.selectedCircles:We.shapes);n.data_selection_grouped&&(u+=r.getTargetSelectorSuffix(e.id)),a.selectAll(u).selectAll(c?".".concat(He.selectedCircle):".".concat(We.shape,".").concat(He.SELECTED)).classed(He.SELECTED,!1).each(function(d){var h=G(this);l=h,A(!1,h,d,d.index)})}(!l||l.node()!==o.node())&&(o.classed(He.SELECTED,!s),A(!s,o,e,i))}}});var Uo={},Uw={version:"3.8.2",generate:function(t){var e=rr({},Uo,t),i=new FA(e);return i.internal.charts=this.instance,this.instance.push(i),i},defaults:function(t){return xe(t)&&(Uo=t),Uo},instance:[],plugin:{}};const Iw=t=>{Sw(t.MsgQueue),fc(P(".block")),fc(P("table td"))};function Sw(t){t.forEach(e=>kw(e==null?void 0:e.data))}const Io=(t,e=i=>{})=>({axis:(r=>(e(r),r))({x:{tick:{format(r){return t[0].xlabels[r]||r}}}})});function kw(t){if(!t)return;const{chartID:e,chartType:i,chartData:r}=t,n={bindto:`#${e}`};switch(i){case"lineChart":Object.assign(n,{data:{columns:r.map(a=>[a.key,...a.values.map(({y:o})=>o)]),type:Kd()},...Io(r),interaction:{enabled:!0}});break;case"barChart":Object.assign(n,{data:{columns:r.map(a=>[a.key,...a.values.map(({y:o})=>o)]),type:Gd()},...Io(r,a=>(a.x.tick.multiline=!0,a))});break;case"pieChart":case"pie3DChart":Object.assign(n,{data:{columns:Object.values(r[0].xlabels).map((a,o)=>[a,r[0].values[o].y]),type:Xd()}});break;case"areaChart":Object.assign(n,{data:{columns:r.map(a=>[a.key,...a.values.map(({y:o})=>o)]),type:zd()},interaction:{enabled:!0},...Io(r)});break;case"scatterChart":Object.assign(n,{data:{xs:{y:"x"},columns:r.map((a,o)=>[o?"y":"x",...a]),type:Yd()},axis:{x:{label:"X",showDist:!0,tick:{format:Vr(".02f")}},y:{label:"Y",showDist:!0,tick:{format:Vr(".02f")}}}});break}n.data&&Uw.generate(n)}function fc(t){const e=t;for(let i=0;i<e.length;i++){const r=P(e[i]).find(".numeric-bullet-style");if(r.length>0){let n="",a="",o=0;const s=[];let A=0;const l=[];for(let c=0;c<r.length;c++){const u=P(r[c]).data("bulltname"),d=P(r[c]).data("bulltlvl");o===0?(n=u,a=d,s[A]=o,l[A]=u,o++):u===n&&d===a?(n=u,a=d,o++,s[A]=o,l[A]=u):u!==n&&d===a||u!==n&&Number(d)>Number(a)?(n=u,a=d,A++,s[A]=o,l[A]=u,o=1):u!==n&&Number(d)<Number(a)&&(n=u,a=d,A--,o=s[A]+1);const h=Hw(l[A],o);P(r[c]).html(h)}}}}function Hw(t,e){let i="";switch(t){case"arabicPeriod":i=e+". ";break;case"arabicParenR":i=e+") ";break;case"alphaLcParenR":i=Bn(e,"lowerCase")+") ";break;case"alphaLcPeriod":i=Bn(e,"lowerCase")+". ";break;case"alphaUcParenR":i=Bn(e,"upperCase")+") ";break;case"alphaUcPeriod":i=Bn(e,"upperCase")+". ";break;case"romanUcPeriod":i=pc(e)+". ";break;case"romanLcParenR":i=pc(e)+") ";break;case"hebrew2Minus":i=Nw.format(e)+"-";break;default:i=String(e)}return i}function pc(t){if(!+t)return!1;const e=String(+t).split(""),i=["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM","","X","XX","XXX","XL","L","LX","LXX","LXXX","XC","","I","II","III","IV","V","VI","VII","VIII","IX"];let r="",n=3;for(;n--;)r=(i[+(e.pop()??"")+n*10]||"")+r;return Array(+e.join("")+1).join("M")+r}const Nw=Lw([[1e3,""],[400,"ת"],[300,"ש"],[200,"ר"],[100,"ק"],[90,"צ"],[80,"פ"],[70,"ע"],[60,"ס"],[50,"נ"],[40,"מ"],[30,"ל"],[20,"כ"],[10,"י"],[9,"ט"],[8,"ח"],[7,"ז"],[6,"ו"],[5,"ה"],[4,"ד"],[3,"ג"],[2,"ב"],[1,"א"],[/יה/,"ט״ו"],[/יו/,"ט״ז"],[/([א-ת])([א-ת])$/,"$1״$2"],[/^([א-ת])$/,"$1׳"]]);function Lw(t){return t.slice().sort(function(e,i){return i[1].length-e[1].length}),{format:function(e){let i="";return P.each(t,function(){const r=this[0];if(parseInt(r)>0)for(;e>=r;e-=r)i+=this[1];else i=i.replace(r,this[1])}),i}}}function Bn(t,e){t=Number(t)-1;let i="";return e==="upperCase"?i=((t/26>=1?String.fromCharCode(t/26+64):"")+String.fromCharCode(t%26+65)).toUpperCase():e==="lowerCase"&&(i=((t/26>=1?String.fromCharCode(t/26+64):"")+String.fromCharCode(t%26+65)).toLowerCase()),i}const Mw="/assets/worker-278ee72e.js";var Oa={},lr={};Object.defineProperty(lr,"__esModule",{value:!0});lr.PATH={VECTOR:0,BEZIER_CURVE:1,CIRCLE:2};var dt={},bt={};Object.defineProperty(bt,"__esModule",{value:!0});var Rw=function(){function t(e,i){var r=[],n=!0,a=!1,o=void 0;try{for(var s=e[Symbol.iterator](),A;!(n=(A=s.next()).done)&&(r.push(A.value),!(i&&r.length===i));n=!0);}catch(l){a=!0,o=l}finally{try{!n&&s.return&&s.return()}finally{if(a)throw o}}return r}return function(e,i){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,i);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),Dw=function(){function t(e,i){for(var r=0;r<i.length;r++){var n=i[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,i,r){return i&&t(e.prototype,i),r&&t(e,r),e}}();function $w(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var Pw=/^#([a-f0-9]{3})$/i,Ow=function(e){var i=e.match(Pw);return i?[parseInt(i[1][0]+i[1][0],16),parseInt(i[1][1]+i[1][1],16),parseInt(i[1][2]+i[1][2],16),null]:!1},zw=/^#([a-f0-9]{6})$/i,Kw=function(e){var i=e.match(zw);return i?[parseInt(i[1].substring(0,2),16),parseInt(i[1].substring(2,4),16),parseInt(i[1].substring(4,6),16),null]:!1},Xw=/^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/,Gw=function(e){var i=e.match(Xw);return i?[Number(i[1]),Number(i[2]),Number(i[3]),null]:!1},Yw=/^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d?\.?\d+)\s*\)$/,Vw=function(e){var i=e.match(Yw);return i&&i.length>4?[Number(i[1]),Number(i[2]),Number(i[3]),Number(i[4])]:!1},Ww=function(e){return[Math.min(e[0],255),Math.min(e[1],255),Math.min(e[2],255),e.length>3?e[3]:null]},Jw=function(e){var i=jw[e.toLowerCase()];return i||!1},Vd=function(){function t(e){$w(this,t);var i=Array.isArray(e)?Ww(e):Ow(e)||Gw(e)||Vw(e)||Jw(e)||Kw(e)||[0,0,0,null],r=Rw(i,4),n=r[0],a=r[1],o=r[2],s=r[3];this.r=n,this.g=a,this.b=o,this.a=s}return Dw(t,[{key:"isTransparent",value:function(){return this.a===0}},{key:"toString",value:function(){return this.a!==null&&this.a!==1?"rgba("+this.r+","+this.g+","+this.b+","+this.a+")":"rgb("+this.r+","+this.g+","+this.b+")"}}]),t}();bt.default=Vd;var jw={transparent:[0,0,0,0],aliceblue:[240,248,255,null],antiquewhite:[250,235,215,null],aqua:[0,255,255,null],aquamarine:[127,255,212,null],azure:[240,255,255,null],beige:[245,245,220,null],bisque:[255,228,196,null],black:[0,0,0,null],blanchedalmond:[255,235,205,null],blue:[0,0,255,null],blueviolet:[138,43,226,null],brown:[165,42,42,null],burlywood:[222,184,135,null],cadetblue:[95,158,160,null],chartreuse:[127,255,0,null],chocolate:[210,105,30,null],coral:[255,127,80,null],cornflowerblue:[100,149,237,null],cornsilk:[255,248,220,null],crimson:[220,20,60,null],cyan:[0,255,255,null],darkblue:[0,0,139,null],darkcyan:[0,139,139,null],darkgoldenrod:[184,134,11,null],darkgray:[169,169,169,null],darkgreen:[0,100,0,null],darkgrey:[169,169,169,null],darkkhaki:[189,183,107,null],darkmagenta:[139,0,139,null],darkolivegreen:[85,107,47,null],darkorange:[255,140,0,null],darkorchid:[153,50,204,null],darkred:[139,0,0,null],darksalmon:[233,150,122,null],darkseagreen:[143,188,143,null],darkslateblue:[72,61,139,null],darkslategray:[47,79,79,null],darkslategrey:[47,79,79,null],darkturquoise:[0,206,209,null],darkviolet:[148,0,211,null],deeppink:[255,20,147,null],deepskyblue:[0,191,255,null],dimgray:[105,105,105,null],dimgrey:[105,105,105,null],dodgerblue:[30,144,255,null],firebrick:[178,34,34,null],floralwhite:[255,250,240,null],forestgreen:[34,139,34,null],fuchsia:[255,0,255,null],gainsboro:[220,220,220,null],ghostwhite:[248,248,255,null],gold:[255,215,0,null],goldenrod:[218,165,32,null],gray:[128,128,128,null],green:[0,128,0,null],greenyellow:[173,255,47,null],grey:[128,128,128,null],honeydew:[240,255,240,null],hotpink:[255,105,180,null],indianred:[205,92,92,null],indigo:[75,0,130,null],ivory:[255,255,240,null],khaki:[240,230,140,null],lavender:[230,230,250,null],lavenderblush:[255,240,245,null],lawngreen:[124,252,0,null],lemonchiffon:[255,250,205,null],lightblue:[173,216,230,null],lightcoral:[240,128,128,null],lightcyan:[224,255,255,null],lightgoldenrodyellow:[250,250,210,null],lightgray:[211,211,211,null],lightgreen:[144,238,144,null],lightgrey:[211,211,211,null],lightpink:[255,182,193,null],lightsalmon:[255,160,122,null],lightseagreen:[32,178,170,null],lightskyblue:[135,206,250,null],lightslategray:[119,136,153,null],lightslategrey:[119,136,153,null],lightsteelblue:[176,196,222,null],lightyellow:[255,255,224,null],lime:[0,255,0,null],limegreen:[50,205,50,null],linen:[250,240,230,null],magenta:[255,0,255,null],maroon:[128,0,0,null],mediumaquamarine:[102,205,170,null],mediumblue:[0,0,205,null],mediumorchid:[186,85,211,null],mediumpurple:[147,112,219,null],mediumseagreen:[60,179,113,null],mediumslateblue:[123,104,238,null],mediumspringgreen:[0,250,154,null],mediumturquoise:[72,209,204,null],mediumvioletred:[199,21,133,null],midnightblue:[25,25,112,null],mintcream:[245,255,250,null],mistyrose:[255,228,225,null],moccasin:[255,228,181,null],navajowhite:[255,222,173,null],navy:[0,0,128,null],oldlace:[253,245,230,null],olive:[128,128,0,null],olivedrab:[107,142,35,null],orange:[255,165,0,null],orangered:[255,69,0,null],orchid:[218,112,214,null],palegoldenrod:[238,232,170,null],palegreen:[152,251,152,null],paleturquoise:[175,238,238,null],palevioletred:[219,112,147,null],papayawhip:[255,239,213,null],peachpuff:[255,218,185,null],peru:[205,133,63,null],pink:[255,192,203,null],plum:[221,160,221,null],powderblue:[176,224,230,null],purple:[128,0,128,null],rebeccapurple:[102,51,153,null],red:[255,0,0,null],rosybrown:[188,143,143,null],royalblue:[65,105,225,null],saddlebrown:[139,69,19,null],salmon:[250,128,114,null],sandybrown:[244,164,96,null],seagreen:[46,139,87,null],seashell:[255,245,238,null],sienna:[160,82,45,null],silver:[192,192,192,null],skyblue:[135,206,235,null],slateblue:[106,90,205,null],slategray:[112,128,144,null],slategrey:[112,128,144,null],snow:[255,250,250,null],springgreen:[0,255,127,null],steelblue:[70,130,180,null],tan:[210,180,140,null],teal:[0,128,128,null],thistle:[216,191,216,null],tomato:[255,99,71,null],turquoise:[64,224,208,null],violet:[238,130,238,null],wheat:[245,222,179,null],white:[255,255,255,null],whitesmoke:[245,245,245,null],yellow:[255,255,0,null],yellowgreen:[154,205,50,null]};bt.TRANSPARENT=new Vd([0,0,0,0]);Object.defineProperty(dt,"__esModule",{value:!0});dt.parseTextDecoration=dt.TEXT_DECORATION_LINE=dt.TEXT_DECORATION=dt.TEXT_DECORATION_STYLE=void 0;var Zw=bt,qw=eb(Zw);function eb(t){return t&&t.__esModule?t:{default:t}}var br=dt.TEXT_DECORATION_STYLE={SOLID:0,DOUBLE:1,DOTTED:2,DASHED:3,WAVY:4},tb=dt.TEXT_DECORATION={NONE:null},wn=dt.TEXT_DECORATION_LINE={UNDERLINE:1,OVERLINE:2,LINE_THROUGH:3,BLINK:4},ib=function(e){switch(e){case"underline":return wn.UNDERLINE;case"overline":return wn.OVERLINE;case"line-through":return wn.LINE_THROUGH}return wn.BLINK},rb=function(e){return e==="none"?null:e.split(" ").map(ib)},nb=function(e){switch(e){case"double":return br.DOUBLE;case"dotted":return br.DOTTED;case"dashed":return br.DASHED;case"wavy":return br.WAVY}return br.SOLID};dt.parseTextDecoration=function(e){var i=rb(e.textDecorationLine?e.textDecorationLine:e.textDecoration);if(i===null)return tb.NONE;var r=e.textDecorationColor?new qw.default(e.textDecorationColor):null,n=nb(e.textDecorationStyle);return{textDecorationLine:i,textDecorationColor:r,textDecorationStyle:n}};Object.defineProperty(Oa,"__esModule",{value:!0});var ab=function(){function t(e,i){for(var r=0;r<i.length;r++){var n=i[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,i,r){return i&&t(e.prototype,i),r&&t(e,r),e}}(),vc=lr,So=dt;function ob(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var mc=function(e,i){var r=Math.max.apply(null,e.colorStops.map(function(a){return a.stop})),n=1/Math.max(1,r);e.colorStops.forEach(function(a){i.addColorStop(n*a.stop,a.color.toString())})},sb=function(){function t(e){ob(this,t),this.canvas=e||document.createElement("canvas"),this.customCanvas=!!e}return ab(t,[{key:"render",value:function(i){this.ctx=this.canvas.getContext("2d"),this.options=i,this.customCanvas||(this.canvas.width=Math.floor(i.width*i.scale),this.canvas.height=Math.floor(i.height*i.scale),this.canvas.style.width=i.width+"px",this.canvas.style.height=i.height+"px"),this.ctx.scale(this.options.scale,this.options.scale),this.ctx.translate(-i.x,-i.y),this.ctx.textBaseline="bottom",i.logger.log("Canvas renderer initialized ("+i.width+"x"+i.height+" at "+i.x+","+i.y+") with scale "+this.options.scale)}},{key:"clip",value:function(i,r){var n=this;i.length&&(this.ctx.save(),i.forEach(function(a){n.path(a),n.ctx.clip()})),r(),i.length&&this.ctx.restore()}},{key:"drawImage",value:function(i,r,n){this.ctx.drawImage(i,r.left,r.top,r.width,r.height,n.left,n.top,n.width,n.height)}},{key:"drawShape",value:function(i,r){this.path(i),this.ctx.fillStyle=r.toString(),this.ctx.fill()}},{key:"fill",value:function(i){this.ctx.fillStyle=i.toString(),this.ctx.fill()}},{key:"getTarget",value:function(){return Promise.resolve(this.canvas)}},{key:"path",value:function(i){var r=this;this.ctx.beginPath(),Array.isArray(i)?i.forEach(function(n,a){var o=n.type===vc.PATH.VECTOR?n:n.start;a===0?r.ctx.moveTo(o.x,o.y):r.ctx.lineTo(o.x,o.y),n.type===vc.PATH.BEZIER_CURVE&&r.ctx.bezierCurveTo(n.startControl.x,n.startControl.y,n.endControl.x,n.endControl.y,n.end.x,n.end.y)}):this.ctx.arc(i.x+i.radius,i.y+i.radius,i.radius,0,Math.PI*2,!0),this.ctx.closePath()}},{key:"rectangle",value:function(i,r,n,a,o){this.ctx.fillStyle=o.toString(),this.ctx.fillRect(i,r,n,a)}},{key:"renderLinearGradient",value:function(i,r){var n=this.ctx.createLinearGradient(i.left+r.direction.x1,i.top+r.direction.y1,i.left+r.direction.x0,i.top+r.direction.y0);mc(r,n),this.ctx.fillStyle=n,this.ctx.fillRect(i.left,i.top,i.width,i.height)}},{key:"renderRadialGradient",value:function(i,r){var n=this,a=i.left+r.center.x,o=i.top+r.center.y,s=this.ctx.createRadialGradient(a,o,0,a,o,r.radius.x);if(s)if(mc(r,s),this.ctx.fillStyle=s,r.radius.x!==r.radius.y){var A=i.left+.5*i.width,l=i.top+.5*i.height,c=r.radius.y/r.radius.x,u=1/c;this.transform(A,l,[1,0,0,c,0,0],function(){return n.ctx.fillRect(i.left,u*(i.top-l)+l,i.width,i.height*u)})}else this.ctx.fillRect(i.left,i.top,i.width,i.height)}},{key:"renderRepeat",value:function(i,r,n,a,o){this.path(i),this.ctx.fillStyle=this.ctx.createPattern(this.resizeImage(r,n),"repeat"),this.ctx.translate(a,o),this.ctx.fill(),this.ctx.translate(-a,-o)}},{key:"renderTextNode",value:function(i,r,n,a,o){var s=this;this.ctx.font=[n.fontStyle,n.fontVariant,n.fontWeight,n.fontSize,n.fontFamily].join(" "),i.forEach(function(A){if(s.ctx.fillStyle=r.toString(),o&&A.text.trim().length?o.slice(0).reverse().forEach(function(c){s.ctx.shadowColor=c.color.toString(),s.ctx.shadowOffsetX=c.offsetX*s.options.scale,s.ctx.shadowOffsetY=c.offsetY*s.options.scale,s.ctx.shadowBlur=c.blur,s.ctx.fillText(A.text,A.bounds.left,A.bounds.top+A.bounds.height)}):s.ctx.fillText(A.text,A.bounds.left,A.bounds.top+A.bounds.height),a!==null){var l=a.textDecorationColor||r;a.textDecorationLine.forEach(function(c){switch(c){case So.TEXT_DECORATION_LINE.UNDERLINE:var u=s.options.fontMetrics.getMetrics(n),d=u.baseline;s.rectangle(A.bounds.left,Math.round(A.bounds.top+d),A.bounds.width,1,l);break;case So.TEXT_DECORATION_LINE.OVERLINE:s.rectangle(A.bounds.left,Math.round(A.bounds.top),A.bounds.width,1,l);break;case So.TEXT_DECORATION_LINE.LINE_THROUGH:var h=s.options.fontMetrics.getMetrics(n),g=h.middle;s.rectangle(A.bounds.left,Math.ceil(A.bounds.top+g),A.bounds.width,1,l);break}})}})}},{key:"resizeImage",value:function(i,r){if(i.width===r.width&&i.height===r.height)return i;var n=this.canvas.ownerDocument.createElement("canvas");n.width=r.width,n.height=r.height;var a=n.getContext("2d");return a.drawImage(i,0,0,i.width,i.height,0,0,r.width,r.height),n}},{key:"setOpacity",value:function(i){this.ctx.globalAlpha=i}},{key:"transform",value:function(i,r,n,a){this.ctx.save(),this.ctx.translate(i,r),this.ctx.transform(n[0],n[1],n[2],n[3],n[4],n[5]),this.ctx.translate(-i,-r),a(),this.ctx.restore()}}]),t}();Oa.default=sb;var za={};Object.defineProperty(za,"__esModule",{value:!0});var Ab=function(){function t(e,i){for(var r=0;r<i.length;r++){var n=i[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,i,r){return i&&t(e.prototype,i),r&&t(e,r),e}}();function lb(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var cb=function(){function t(e,i,r){lb(this,t),this.enabled=typeof window<"u"&&e,this.start=r||Date.now(),this.id=i}return Ab(t,[{key:"child",value:function(i){return new t(this.enabled,i,this.start)}},{key:"log",value:function(){if(this.enabled&&window.console&&window.console.log){for(var i=arguments.length,r=Array(i),n=0;n<i;n++)r[n]=arguments[n];Function.prototype.bind.call(window.console.log,window.console).apply(window.console,[Date.now()-this.start+"ms",this.id?"html2canvas ("+this.id+"):":"html2canvas:"].concat([].slice.call(r,0)))}}},{key:"error",value:function(){if(this.enabled&&window.console&&window.console.error){for(var i=arguments.length,r=Array(i),n=0;n<i;n++)r[n]=arguments[n];Function.prototype.bind.call(window.console.error,window.console).apply(window.console,[Date.now()-this.start+"ms",this.id?"html2canvas ("+this.id+"):":"html2canvas:"].concat([].slice.call(r,0)))}}}]),t}();za.default=cb;var Ka={},Xa={},SA={},bn={},yt={};Object.defineProperty(yt,"__esModule",{value:!0});yt.contains=function(e,i){return(e&i)!==0};yt.distance=function(e,i){return Math.sqrt(e*e+i*i)};yt.copyCSSStyles=function(e,i){for(var r=e.length-1;r>=0;r--){var n=e.item(r);n!=="content"&&i.style.setProperty(n,e.getPropertyValue(n))}return i};yt.SMALL_IMAGE="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";var le={},Yt={},xc;function Ui(){if(xc)return Yt;xc=1,Object.defineProperty(Yt,"__esModule",{value:!0}),Yt.calculateLengthFromValueWithUnit=Yt.LENGTH_TYPE=void 0;var t=function(){function s(A,l){for(var c=0;c<l.length;c++){var u=l[c];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(A,u.key,u)}}return function(A,l,c){return l&&s(A.prototype,l),c&&s(A,c),A}}(),e=hr();i(e);function i(s){return s&&s.__esModule?s:{default:s}}function r(s,A){if(!(s instanceof A))throw new TypeError("Cannot call a class as a function")}var n=Yt.LENGTH_TYPE={PX:0,PERCENTAGE:1},a=function(){function s(A){r(this,s),this.type=A.substr(A.length-1)==="%"?n.PERCENTAGE:n.PX;var l=parseFloat(A);this.value=isNaN(l)?0:l}return t(s,[{key:"isPercentage",value:function(){return this.type===n.PERCENTAGE}},{key:"getAbsoluteValue",value:function(l){return this.isPercentage()?l*(this.value/100):this.value}}],[{key:"create",value:function(l){return new s(l)}}]),s}();Yt.default=a;var o=function s(A){var l=A.parent;return l?s(l):parseFloat(A.style.font.fontSize)};return Yt.calculateLengthFromValueWithUnit=function(A,l,c){switch(c){case"px":case"%":return new a(l+c);case"em":case"rem":var u=new a(l);return u.value*=c==="em"?parseFloat(A.style.font.fontSize):o(A),u;default:return new a("0")}},Yt}var kA={};Object.defineProperty(kA,"__esModule",{value:!0});function ub(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var db=function t(e,i){ub(this,t),this.width=e,this.height=i};kA.default=db;var cr={};Object.defineProperty(cr,"__esModule",{value:!0});var hb=lr;function gb(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var fb=function t(e,i){gb(this,t),this.type=hb.PATH.VECTOR,this.x=e,this.y=i};cr.default=fb;var he={},HA={};Object.defineProperty(HA,"__esModule",{value:!0});var pb=function(){function t(e,i){for(var r=0;r<i.length;r++){var n=i[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,i,r){return i&&t(e.prototype,i),r&&t(e,r),e}}(),vb=lr,mb=cr,xb=Bb(mb);function Bb(t){return t&&t.__esModule?t:{default:t}}function wb(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var Hi=function(e,i,r){return new xb.default(e.x+(i.x-e.x)*r,e.y+(i.y-e.y)*r)},bb=function(){function t(e,i,r,n){wb(this,t),this.type=vb.PATH.BEZIER_CURVE,this.start=e,this.startControl=i,this.endControl=r,this.end=n}return pb(t,[{key:"subdivide",value:function(i,r){var n=Hi(this.start,this.startControl,i),a=Hi(this.startControl,this.endControl,i),o=Hi(this.endControl,this.end,i),s=Hi(n,a,i),A=Hi(a,o,i),l=Hi(s,A,i);return r?new t(this.start,n,s,l):new t(l,A,o,this.end)}},{key:"reverse",value:function(){return new t(this.end,this.endControl,this.startControl,this.start)}}]),t}();HA.default=bb;Object.defineProperty(he,"__esModule",{value:!0});he.parseBoundCurves=he.calculatePaddingBoxPath=he.calculateBorderBoxPath=he.parsePathForBorder=he.parseDocumentSize=he.calculateContentBox=he.calculatePaddingBox=he.parseBounds=he.Bounds=void 0;var yb=function(){function t(e,i){for(var r=0;r<i.length;r++){var n=i[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,i,r){return i&&t(e.prototype,i),r&&t(e,r),e}}(),_b=cr,we=Wd(_b),Cb=HA,ri=Wd(Cb);function Wd(t){return t&&t.__esModule?t:{default:t}}function Tb(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var lt=0,wi=1,ni=2,Xe=3,yn=0,_n=1,Ga=he.Bounds=function(){function t(e,i,r,n){Tb(this,t),this.left=e,this.top=i,this.width=r,this.height=n}return yb(t,null,[{key:"fromClientRect",value:function(i,r,n){return new t(i.left+r,i.top+n,i.width,i.height)}}]),t}();he.parseBounds=function(e,i,r){return Ga.fromClientRect(e.getBoundingClientRect(),i,r)};he.calculatePaddingBox=function(e,i){return new Ga(e.left+i[Xe].borderWidth,e.top+i[lt].borderWidth,e.width-(i[wi].borderWidth+i[Xe].borderWidth),e.height-(i[lt].borderWidth+i[ni].borderWidth))};he.calculateContentBox=function(e,i,r){var n=i[lt].value,a=i[wi].value,o=i[ni].value,s=i[Xe].value;return new Ga(e.left+s+r[Xe].borderWidth,e.top+n+r[lt].borderWidth,e.width-(r[wi].borderWidth+r[Xe].borderWidth+s+a),e.height-(r[lt].borderWidth+r[ni].borderWidth+n+o))};he.parseDocumentSize=function(e){var i=e.body,r=e.documentElement;if(!i||!r)throw new Error("");var n=Math.max(Math.max(i.scrollWidth,r.scrollWidth),Math.max(i.offsetWidth,r.offsetWidth),Math.max(i.clientWidth,r.clientWidth)),a=Math.max(Math.max(i.scrollHeight,r.scrollHeight),Math.max(i.offsetHeight,r.offsetHeight),Math.max(i.clientHeight,r.clientHeight));return new Ga(0,0,n,a)};he.parsePathForBorder=function(e,i){switch(i){case lt:return Cn(e.topLeftOuter,e.topLeftInner,e.topRightOuter,e.topRightInner);case wi:return Cn(e.topRightOuter,e.topRightInner,e.bottomRightOuter,e.bottomRightInner);case ni:return Cn(e.bottomRightOuter,e.bottomRightInner,e.bottomLeftOuter,e.bottomLeftInner);case Xe:default:return Cn(e.bottomLeftOuter,e.bottomLeftInner,e.topLeftOuter,e.topLeftInner)}};var Cn=function(e,i,r,n){var a=[];return e instanceof ri.default?a.push(e.subdivide(.5,!1)):a.push(e),r instanceof ri.default?a.push(r.subdivide(.5,!0)):a.push(r),n instanceof ri.default?a.push(n.subdivide(.5,!0).reverse()):a.push(n),i instanceof ri.default?a.push(i.subdivide(.5,!1).reverse()):a.push(i),a};he.calculateBorderBoxPath=function(e){return[e.topLeftOuter,e.topRightOuter,e.bottomRightOuter,e.bottomLeftOuter]};he.calculatePaddingBoxPath=function(e){return[e.topLeftInner,e.topRightInner,e.bottomRightInner,e.bottomLeftInner]};he.parseBoundCurves=function(e,i,r){var n=r[Ie.TOP_LEFT][yn].getAbsoluteValue(e.width),a=r[Ie.TOP_LEFT][_n].getAbsoluteValue(e.height),o=r[Ie.TOP_RIGHT][yn].getAbsoluteValue(e.width),s=r[Ie.TOP_RIGHT][_n].getAbsoluteValue(e.height),A=r[Ie.BOTTOM_RIGHT][yn].getAbsoluteValue(e.width),l=r[Ie.BOTTOM_RIGHT][_n].getAbsoluteValue(e.height),c=r[Ie.BOTTOM_LEFT][yn].getAbsoluteValue(e.width),u=r[Ie.BOTTOM_LEFT][_n].getAbsoluteValue(e.height),d=[];d.push((n+o)/e.width),d.push((c+A)/e.width),d.push((a+u)/e.height),d.push((s+l)/e.height);var h=Math.max.apply(Math,d);h>1&&(n/=h,a/=h,o/=h,s/=h,A/=h,l/=h,c/=h,u/=h);var g=e.width-o,f=e.height-l,p=e.width-A,v=e.height-u;return{topLeftOuter:n>0||a>0?Vt(e.left,e.top,n,a,Ie.TOP_LEFT):new we.default(e.left,e.top),topLeftInner:n>0||a>0?Vt(e.left+i[Xe].borderWidth,e.top+i[lt].borderWidth,Math.max(0,n-i[Xe].borderWidth),Math.max(0,a-i[lt].borderWidth),Ie.TOP_LEFT):new we.default(e.left+i[Xe].borderWidth,e.top+i[lt].borderWidth),topRightOuter:o>0||s>0?Vt(e.left+g,e.top,o,s,Ie.TOP_RIGHT):new we.default(e.left+e.width,e.top),topRightInner:o>0||s>0?Vt(e.left+Math.min(g,e.width+i[Xe].borderWidth),e.top+i[lt].borderWidth,g>e.width+i[Xe].borderWidth?0:o-i[Xe].borderWidth,s-i[lt].borderWidth,Ie.TOP_RIGHT):new we.default(e.left+e.width-i[wi].borderWidth,e.top+i[lt].borderWidth),bottomRightOuter:A>0||l>0?Vt(e.left+p,e.top+f,A,l,Ie.BOTTOM_RIGHT):new we.default(e.left+e.width,e.top+e.height),bottomRightInner:A>0||l>0?Vt(e.left+Math.min(p,e.width-i[Xe].borderWidth),e.top+Math.min(f,e.height+i[lt].borderWidth),Math.max(0,A-i[wi].borderWidth),l-i[ni].borderWidth,Ie.BOTTOM_RIGHT):new we.default(e.left+e.width-i[wi].borderWidth,e.top+e.height-i[ni].borderWidth),bottomLeftOuter:c>0||u>0?Vt(e.left,e.top+v,c,u,Ie.BOTTOM_LEFT):new we.default(e.left,e.top+e.height),bottomLeftInner:c>0||u>0?Vt(e.left+i[Xe].borderWidth,e.top+v,Math.max(0,c-i[Xe].borderWidth),u-i[ni].borderWidth,Ie.BOTTOM_LEFT):new we.default(e.left+i[Xe].borderWidth,e.top+e.height-i[ni].borderWidth)}};var Ie={TOP_LEFT:0,TOP_RIGHT:1,BOTTOM_RIGHT:2,BOTTOM_LEFT:3},Vt=function(e,i,r,n,a){var o=4*((Math.sqrt(2)-1)/3),s=r*o,A=n*o,l=e+r,c=i+n;switch(a){case Ie.TOP_LEFT:return new ri.default(new we.default(e,c),new we.default(e,c-A),new we.default(l-s,i),new we.default(l,i));case Ie.TOP_RIGHT:return new ri.default(new we.default(e,i),new we.default(e+s,i),new we.default(l,c-A),new we.default(l,c));case Ie.BOTTOM_RIGHT:return new ri.default(new we.default(l,i),new we.default(l,i+A),new we.default(e+s,c),new we.default(e,c));case Ie.BOTTOM_LEFT:default:return new ri.default(new we.default(l,c),new we.default(l-s,c),new we.default(e,i+A),new we.default(e,i))}},li={},Bc;function Jd(){if(Bc)return li;Bc=1,Object.defineProperty(li,"__esModule",{value:!0}),li.parsePadding=li.PADDING_SIDES=void 0;var t=Ui(),e=i(t);function i(n){return n&&n.__esModule?n:{default:n}}li.PADDING_SIDES={TOP:0,RIGHT:1,BOTTOM:2,LEFT:3};var r=["top","right","bottom","left"];return li.parsePadding=function(a){return r.map(function(o){return new e.default(a.getPropertyValue("padding-"+o))})},li}var wc;function on(){if(wc)return le;wc=1,Object.defineProperty(le,"__esModule",{value:!0}),le.parseBackgroundImage=le.parseBackground=le.calculateBackgroundRepeatPath=le.calculateBackgroundPosition=le.calculateBackgroungPositioningArea=le.calculateBackgroungPaintingArea=le.calculateGradientBackgroundSize=le.calculateBackgroundSize=le.BACKGROUND_ORIGIN=le.BACKGROUND_CLIP=le.BACKGROUND_SIZE=le.BACKGROUND_REPEAT=void 0;var t=bt,e=c(t),i=Ui(),r=c(i),n=kA,a=c(n),o=cr,s=c(o),A=he,l=Jd();function c(T){return T&&T.__esModule?T:{default:T}}function u(T,y){if(!(T instanceof y))throw new TypeError("Cannot call a class as a function")}var d=le.BACKGROUND_REPEAT={REPEAT:0,NO_REPEAT:1,REPEAT_X:2,REPEAT_Y:3},h=le.BACKGROUND_SIZE={AUTO:0,CONTAIN:1,COVER:2,LENGTH:3},g=le.BACKGROUND_CLIP={BORDER_BOX:0,PADDING_BOX:1,CONTENT_BOX:2},f=le.BACKGROUND_ORIGIN=g,p="auto",v=function T(y){switch(u(this,T),y){case"contain":this.size=h.CONTAIN;break;case"cover":this.size=h.COVER;break;case"auto":this.size=h.AUTO;break;default:this.value=new r.default(y)}};le.calculateBackgroundSize=function(y,Q,B){var C=0,I=0,S=y.size;if(S[0].size===h.CONTAIN||S[0].size===h.COVER){var k=B.width/B.height,F=Q.width/Q.height;return k<F!=(S[0].size===h.COVER)?new a.default(B.width,B.width/F):new a.default(B.height*F,B.height)}return S[0].value&&(C=S[0].value.getAbsoluteValue(B.width)),S[0].size===h.AUTO&&S[1].size===h.AUTO?I=Q.height:S[1].size===h.AUTO?I=C/Q.width*Q.height:S[1].value&&(I=S[1].value.getAbsoluteValue(B.height)),S[0].size===h.AUTO&&(C=I/Q.height*Q.width),new a.default(C,I)},le.calculateGradientBackgroundSize=function(y,Q){var B=y.size,C=B[0].value?B[0].value.getAbsoluteValue(Q.width):Q.width,I=B[1].value?B[1].value.getAbsoluteValue(Q.height):B[0].value?C:Q.height;return new a.default(C,I)};var m=new v(p);le.calculateBackgroungPaintingArea=function(y,Q){switch(Q){case g.BORDER_BOX:return(0,A.calculateBorderBoxPath)(y);case g.PADDING_BOX:default:return(0,A.calculatePaddingBoxPath)(y)}},le.calculateBackgroungPositioningArea=function(y,Q,B,C){var I=(0,A.calculatePaddingBox)(Q,C);switch(y){case f.BORDER_BOX:return Q;case f.CONTENT_BOX:var S=B[l.PADDING_SIDES.LEFT].getAbsoluteValue(Q.width),k=B[l.PADDING_SIDES.RIGHT].getAbsoluteValue(Q.width),F=B[l.PADDING_SIDES.TOP].getAbsoluteValue(Q.width),N=B[l.PADDING_SIDES.BOTTOM].getAbsoluteValue(Q.width);return new A.Bounds(I.left+S,I.top+F,I.width-S-k,I.height-F-N);case f.PADDING_BOX:default:return I}},le.calculateBackgroundPosition=function(y,Q,B){return new s.default(y[0].getAbsoluteValue(B.width-Q.width),y[1].getAbsoluteValue(B.height-Q.height))},le.calculateBackgroundRepeatPath=function(y,Q,B,C,I){var S=y.repeat;switch(S){case d.REPEAT_X:return[new s.default(Math.round(I.left),Math.round(C.top+Q.y)),new s.default(Math.round(I.left+I.width),Math.round(C.top+Q.y)),new s.default(Math.round(I.left+I.width),Math.round(B.height+C.top+Q.y)),new s.default(Math.round(I.left),Math.round(B.height+C.top+Q.y))];case d.REPEAT_Y:return[new s.default(Math.round(C.left+Q.x),Math.round(I.top)),new s.default(Math.round(C.left+Q.x+B.width),Math.round(I.top)),new s.default(Math.round(C.left+Q.x+B.width),Math.round(I.height+I.top)),new s.default(Math.round(C.left+Q.x),Math.round(I.height+I.top))];case d.NO_REPEAT:return[new s.default(Math.round(C.left+Q.x),Math.round(C.top+Q.y)),new s.default(Math.round(C.left+Q.x+B.width),Math.round(C.top+Q.y)),new s.default(Math.round(C.left+Q.x+B.width),Math.round(C.top+Q.y+B.height)),new s.default(Math.round(C.left+Q.x),Math.round(C.top+Q.y+B.height))];default:return[new s.default(Math.round(I.left),Math.round(I.top)),new s.default(Math.round(I.left+I.width),Math.round(I.top)),new s.default(Math.round(I.left+I.width),Math.round(I.height+I.top)),new s.default(Math.round(I.left),Math.round(I.height+I.top))]}},le.parseBackground=function(y,Q){return{backgroundColor:new e.default(y.backgroundColor),backgroundImage:b(y,Q),backgroundClip:w(y.backgroundClip),backgroundOrigin:x(y.backgroundOrigin)}};var w=function(y){switch(y){case"padding-box":return g.PADDING_BOX;case"content-box":return g.CONTENT_BOX}return g.BORDER_BOX},x=function(y){switch(y){case"padding-box":return f.PADDING_BOX;case"content-box":return f.CONTENT_BOX}return f.BORDER_BOX},_=function(y){switch(y.trim()){case"no-repeat":return d.NO_REPEAT;case"repeat-x":case"repeat no-repeat":return d.REPEAT_X;case"repeat-y":case"no-repeat repeat":return d.REPEAT_Y;case"repeat":return d.REPEAT}return d.REPEAT},b=function(y,Q){var B=H(y.backgroundImage).map(function(k){if(k.method==="url"){var F=Q.loadImage(k.args[0]);k.args=F?[F]:[]}return k}),C=y.backgroundPosition.split(","),I=y.backgroundRepeat.split(","),S=y.backgroundSize.split(",");return B.map(function(k,F){var N=(S[F]||p).trim().split(" ").map(E),D=(C[F]||p).trim().split(" ").map(U);return{source:k,repeat:_(typeof I[F]=="string"?I[F]:I[0]),size:N.length<2?[N[0],m]:[N[0],N[1]],position:D.length<2?[D[0],D[0]]:[D[0],D[1]]}})},E=function(y){return y==="auto"?m:new v(y)},U=function(y){switch(y){case"bottom":case"right":return new r.default("100%");case"left":case"top":return new r.default("0%");case"auto":return new r.default("0")}return new r.default(y)},H=le.parseBackgroundImage=function(y){var Q=/^\s$/,B=[],C=[],I="",S=null,k="",F=0,N=0,D=function(){var Y="";if(I){k.substr(0,1)==='"'&&(k=k.substr(1,k.length-2)),k&&C.push(k.trim());var ae=I.indexOf("-",1)+1;I.substr(0,1)==="-"&&ae>0&&(Y=I.substr(0,ae).toLowerCase(),I=I.substr(ae)),I=I.toLowerCase(),I!=="none"&&B.push({prefix:Y,method:I,args:C})}C=[],I=k=""};return y.split("").forEach(function(z){if(!(F===0&&Q.test(z))){switch(z){case'"':S?S===z&&(S=null):S=z;break;case"(":if(S)break;if(F===0){F=1;return}else N++;break;case")":if(S)break;if(F===1)if(N===0){F=0,D();return}else N--;break;case",":if(S)break;if(F===0){D();return}else if(F===1&&N===0&&!I.match(/^url$/i)){C.push(k.trim()),k="";return}break}F===0?I+=z:k+=z}}),D(),B};return le}var It={};Object.defineProperty(It,"__esModule",{value:!0});It.parseBorder=It.BORDER_SIDES=It.BORDER_STYLE=void 0;var Eb=bt,Qb=Fb(Eb);function Fb(t){return t&&t.__esModule?t:{default:t}}var bc=It.BORDER_STYLE={NONE:0,SOLID:1},Ub=It.BORDER_SIDES={TOP:0,RIGHT:1,BOTTOM:2,LEFT:3},Ib=Object.keys(Ub).map(function(t){return t.toLowerCase()}),Sb=function(e){switch(e){case"none":return bc.NONE}return bc.SOLID};It.parseBorder=function(e){return Ib.map(function(i){var r=new Qb.default(e.getPropertyValue("border-"+i+"-color")),n=Sb(e.getPropertyValue("border-"+i+"-style")),a=parseFloat(e.getPropertyValue("border-"+i+"-width"));return{borderColor:r,borderStyle:n,borderWidth:isNaN(a)?0:a}})};var yr={},yc;function kb(){if(yc)return yr;yc=1,Object.defineProperty(yr,"__esModule",{value:!0}),yr.parseBorderRadius=void 0;var t=function(){function a(o,s){var A=[],l=!0,c=!1,u=void 0;try{for(var d=o[Symbol.iterator](),h;!(l=(h=d.next()).done)&&(A.push(h.value),!(s&&A.length===s));l=!0);}catch(g){c=!0,u=g}finally{try{!l&&d.return&&d.return()}finally{if(c)throw u}}return A}return function(o,s){if(Array.isArray(o))return o;if(Symbol.iterator in Object(o))return a(o,s);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),e=Ui(),i=r(e);function r(a){return a&&a.__esModule?a:{default:a}}var n=["top-left","top-right","bottom-right","bottom-left"];return yr.parseBorderRadius=function(o){return n.map(function(s){var A=o.getPropertyValue("border-"+s+"-radius"),l=A.split(" ").map(i.default.create),c=t(l,2),u=c[0],d=c[1];return typeof d>"u"?[u,u]:[u,d]})},yr}var Ya={};Object.defineProperty(Ya,"__esModule",{value:!0});var oe=Ya.DISPLAY={NONE:1<<0,BLOCK:1<<1,INLINE:1<<2,RUN_IN:1<<3,FLOW:1<<4,FLOW_ROOT:1<<5,TABLE:1<<6,FLEX:1<<7,GRID:1<<8,RUBY:1<<9,SUBGRID:1<<10,LIST_ITEM:1<<11,TABLE_ROW_GROUP:1<<12,TABLE_HEADER_GROUP:1<<13,TABLE_FOOTER_GROUP:1<<14,TABLE_ROW:1<<15,TABLE_CELL:1<<16,TABLE_COLUMN_GROUP:1<<17,TABLE_COLUMN:1<<18,TABLE_CAPTION:1<<19,RUBY_BASE:1<<20,RUBY_TEXT:1<<21,RUBY_BASE_CONTAINER:1<<22,RUBY_TEXT_CONTAINER:1<<23,CONTENTS:1<<24,INLINE_BLOCK:1<<25,INLINE_LIST_ITEM:1<<26,INLINE_TABLE:1<<27,INLINE_FLEX:1<<28,INLINE_GRID:1<<29},Hb=function(e){switch(e){case"block":return oe.BLOCK;case"inline":return oe.INLINE;case"run-in":return oe.RUN_IN;case"flow":return oe.FLOW;case"flow-root":return oe.FLOW_ROOT;case"table":return oe.TABLE;case"flex":return oe.FLEX;case"grid":return oe.GRID;case"ruby":return oe.RUBY;case"subgrid":return oe.SUBGRID;case"list-item":return oe.LIST_ITEM;case"table-row-group":return oe.TABLE_ROW_GROUP;case"table-header-group":return oe.TABLE_HEADER_GROUP;case"table-footer-group":return oe.TABLE_FOOTER_GROUP;case"table-row":return oe.TABLE_ROW;case"table-cell":return oe.TABLE_CELL;case"table-column-group":return oe.TABLE_COLUMN_GROUP;case"table-column":return oe.TABLE_COLUMN;case"table-caption":return oe.TABLE_CAPTION;case"ruby-base":return oe.RUBY_BASE;case"ruby-text":return oe.RUBY_TEXT;case"ruby-base-container":return oe.RUBY_BASE_CONTAINER;case"ruby-text-container":return oe.RUBY_TEXT_CONTAINER;case"contents":return oe.CONTENTS;case"inline-block":return oe.INLINE_BLOCK;case"inline-list-item":return oe.INLINE_LIST_ITEM;case"inline-table":return oe.INLINE_TABLE;case"inline-flex":return oe.INLINE_FLEX;case"inline-grid":return oe.INLINE_GRID}return oe.NONE},Nb=function(e,i){return e|Hb(i)};Ya.parseDisplay=function(e){return e.split(" ").reduce(Nb,0)};var Va={};Object.defineProperty(Va,"__esModule",{value:!0});var _r=Va.FLOAT={NONE:0,LEFT:1,RIGHT:2,INLINE_START:3,INLINE_END:4};Va.parseCSSFloat=function(e){switch(e){case"left":return _r.LEFT;case"right":return _r.RIGHT;case"inline-start":return _r.INLINE_START;case"inline-end":return _r.INLINE_END}return _r.NONE};var NA={};Object.defineProperty(NA,"__esModule",{value:!0});var Lb=function(e){switch(e){case"normal":return 400;case"bold":return 700}var i=parseInt(e,10);return isNaN(i)?400:i};NA.parseFont=function(e){var i=e.fontFamily,r=e.fontSize,n=e.fontStyle,a=e.fontVariant,o=Lb(e.fontWeight);return{fontFamily:i,fontSize:r,fontStyle:n,fontVariant:a,fontWeight:o}};var LA={};Object.defineProperty(LA,"__esModule",{value:!0});LA.parseLetterSpacing=function(e){if(e==="normal")return 0;var i=parseFloat(e);return isNaN(i)?0:i};var Wa={};Object.defineProperty(Wa,"__esModule",{value:!0});var _c=Wa.LINE_BREAK={NORMAL:"normal",STRICT:"strict"};Wa.parseLineBreak=function(e){switch(e){case"strict":return _c.STRICT;case"normal":default:return _c.NORMAL}};var ht={},Cc;function Ja(){if(Cc)return ht;Cc=1,Object.defineProperty(ht,"__esModule",{value:!0}),ht.parseListStyle=ht.parseListStyleType=ht.LIST_STYLE_TYPE=ht.LIST_STYLE_POSITION=void 0;var t=on(),e=ht.LIST_STYLE_POSITION={INSIDE:0,OUTSIDE:1},i=ht.LIST_STYLE_TYPE={NONE:-1,DISC:0,CIRCLE:1,SQUARE:2,DECIMAL:3,CJK_DECIMAL:4,DECIMAL_LEADING_ZERO:5,LOWER_ROMAN:6,UPPER_ROMAN:7,LOWER_GREEK:8,LOWER_ALPHA:9,UPPER_ALPHA:10,ARABIC_INDIC:11,ARMENIAN:12,BENGALI:13,CAMBODIAN:14,CJK_EARTHLY_BRANCH:15,CJK_HEAVENLY_STEM:16,CJK_IDEOGRAPHIC:17,DEVANAGARI:18,ETHIOPIC_NUMERIC:19,GEORGIAN:20,GUJARATI:21,GURMUKHI:22,HEBREW:22,HIRAGANA:23,HIRAGANA_IROHA:24,JAPANESE_FORMAL:25,JAPANESE_INFORMAL:26,KANNADA:27,KATAKANA:28,KATAKANA_IROHA:29,KHMER:30,KOREAN_HANGUL_FORMAL:31,KOREAN_HANJA_FORMAL:32,KOREAN_HANJA_INFORMAL:33,LAO:34,LOWER_ARMENIAN:35,MALAYALAM:36,MONGOLIAN:37,MYANMAR:38,ORIYA:39,PERSIAN:40,SIMP_CHINESE_FORMAL:41,SIMP_CHINESE_INFORMAL:42,TAMIL:43,TELUGU:44,THAI:45,TIBETAN:46,TRAD_CHINESE_FORMAL:47,TRAD_CHINESE_INFORMAL:48,UPPER_ARMENIAN:49,DISCLOSURE_OPEN:50,DISCLOSURE_CLOSED:51},r=ht.parseListStyleType=function(o){switch(o){case"disc":return i.DISC;case"circle":return i.CIRCLE;case"square":return i.SQUARE;case"decimal":return i.DECIMAL;case"cjk-decimal":return i.CJK_DECIMAL;case"decimal-leading-zero":return i.DECIMAL_LEADING_ZERO;case"lower-roman":return i.LOWER_ROMAN;case"upper-roman":return i.UPPER_ROMAN;case"lower-greek":return i.LOWER_GREEK;case"lower-alpha":return i.LOWER_ALPHA;case"upper-alpha":return i.UPPER_ALPHA;case"arabic-indic":return i.ARABIC_INDIC;case"armenian":return i.ARMENIAN;case"bengali":return i.BENGALI;case"cambodian":return i.CAMBODIAN;case"cjk-earthly-branch":return i.CJK_EARTHLY_BRANCH;case"cjk-heavenly-stem":return i.CJK_HEAVENLY_STEM;case"cjk-ideographic":return i.CJK_IDEOGRAPHIC;case"devanagari":return i.DEVANAGARI;case"ethiopic-numeric":return i.ETHIOPIC_NUMERIC;case"georgian":return i.GEORGIAN;case"gujarati":return i.GUJARATI;case"gurmukhi":return i.GURMUKHI;case"hebrew":return i.HEBREW;case"hiragana":return i.HIRAGANA;case"hiragana-iroha":return i.HIRAGANA_IROHA;case"japanese-formal":return i.JAPANESE_FORMAL;case"japanese-informal":return i.JAPANESE_INFORMAL;case"kannada":return i.KANNADA;case"katakana":return i.KATAKANA;case"katakana-iroha":return i.KATAKANA_IROHA;case"khmer":return i.KHMER;case"korean-hangul-formal":return i.KOREAN_HANGUL_FORMAL;case"korean-hanja-formal":return i.KOREAN_HANJA_FORMAL;case"korean-hanja-informal":return i.KOREAN_HANJA_INFORMAL;case"lao":return i.LAO;case"lower-armenian":return i.LOWER_ARMENIAN;case"malayalam":return i.MALAYALAM;case"mongolian":return i.MONGOLIAN;case"myanmar":return i.MYANMAR;case"oriya":return i.ORIYA;case"persian":return i.PERSIAN;case"simp-chinese-formal":return i.SIMP_CHINESE_FORMAL;case"simp-chinese-informal":return i.SIMP_CHINESE_INFORMAL;case"tamil":return i.TAMIL;case"telugu":return i.TELUGU;case"thai":return i.THAI;case"tibetan":return i.TIBETAN;case"trad-chinese-formal":return i.TRAD_CHINESE_FORMAL;case"trad-chinese-informal":return i.TRAD_CHINESE_INFORMAL;case"upper-armenian":return i.UPPER_ARMENIAN;case"disclosure-open":return i.DISCLOSURE_OPEN;case"disclosure-closed":return i.DISCLOSURE_CLOSED;case"none":default:return i.NONE}};ht.parseListStyle=function(o){var s=(0,t.parseBackgroundImage)(o.getPropertyValue("list-style-image"));return{listStyleType:r(o.getPropertyValue("list-style-type")),listStyleImage:s.length?s[0]:null,listStylePosition:n(o.getPropertyValue("list-style-position"))}};var n=function(o){switch(o){case"inside":return e.INSIDE;case"outside":default:return e.OUTSIDE}};return ht}var Cr={},Tc;function Mb(){if(Tc)return Cr;Tc=1,Object.defineProperty(Cr,"__esModule",{value:!0}),Cr.parseMargin=void 0;var t=Ui(),e=i(t);function i(n){return n&&n.__esModule?n:{default:n}}var r=["top","right","bottom","left"];return Cr.parseMargin=function(a){return r.map(function(o){return new e.default(a.getPropertyValue("margin-"+o))})},Cr}var ja={};Object.defineProperty(ja,"__esModule",{value:!0});var Tn=ja.OVERFLOW={VISIBLE:0,HIDDEN:1,SCROLL:2,AUTO:3};ja.parseOverflow=function(e){switch(e){case"hidden":return Tn.HIDDEN;case"scroll":return Tn.SCROLL;case"auto":return Tn.AUTO;case"visible":default:return Tn.VISIBLE}};var sn={};Object.defineProperty(sn,"__esModule",{value:!0});var Ec=sn.OVERFLOW_WRAP={NORMAL:0,BREAK_WORD:1};sn.parseOverflowWrap=function(e){switch(e){case"break-word":return Ec.BREAK_WORD;case"normal":default:return Ec.NORMAL}};var Za={};Object.defineProperty(Za,"__esModule",{value:!0});var Tr=Za.POSITION={STATIC:0,RELATIVE:1,ABSOLUTE:2,FIXED:3,STICKY:4};Za.parsePosition=function(e){switch(e){case"relative":return Tr.RELATIVE;case"absolute":return Tr.ABSOLUTE;case"fixed":return Tr.FIXED;case"sticky":return Tr.STICKY}return Tr.STATIC};var qa={};Object.defineProperty(qa,"__esModule",{value:!0});qa.parseTextShadow=void 0;var Rb=bt,Db=$b(Rb);function $b(t){return t&&t.__esModule?t:{default:t}}var Pb=/^([+-]|\d|\.)$/i;qa.parseTextShadow=function(e){if(e==="none"||typeof e!="string")return null;for(var i="",r=!1,n=[],a=[],o=0,s=null,A=function(){i.length&&(r?n.push(parseFloat(i)):s=new Db.default(i)),r=!1,i=""},l=function(){n.length&&s!==null&&a.push({color:s,offsetX:n[0]||0,offsetY:n[1]||0,blur:n[2]||0}),n.splice(0,n.length),s=null},c=0;c<e.length;c++){var u=e[c];switch(u){case"(":i+=u,o++;break;case")":i+=u,o--;break;case",":o===0?(A(),l()):i+=u;break;case" ":o===0?A():i+=u;break;default:i.length===0&&Pb.test(u)&&(r=!0),i+=u}}return A(),l(),a.length===0?null:a};var An={};Object.defineProperty(An,"__esModule",{value:!0});var En=An.TEXT_TRANSFORM={NONE:0,LOWERCASE:1,UPPERCASE:2,CAPITALIZE:3};An.parseTextTransform=function(e){switch(e){case"uppercase":return En.UPPERCASE;case"lowercase":return En.LOWERCASE;case"capitalize":return En.CAPITALIZE}return En.NONE};var Er={},Qc;function Ob(){if(Qc)return Er;Qc=1,Object.defineProperty(Er,"__esModule",{value:!0}),Er.parseTransform=void 0;var t=Ui(),e=i(t);function i(s){return s&&s.__esModule?s:{default:s}}var r=function(A){return parseFloat(A.trim())},n=/(matrix|matrix3d)\((.+)\)/;Er.parseTransform=function(A){var l=o(A.transform||A.webkitTransform||A.mozTransform||A.msTransform||A.oTransform);return l===null?null:{transform:l,transformOrigin:a(A.transformOrigin||A.webkitTransformOrigin||A.mozTransformOrigin||A.msTransformOrigin||A.oTransformOrigin)}};var a=function(A){if(typeof A!="string"){var l=new e.default("0");return[l,l]}var c=A.split(" ").map(e.default.create);return[c[0],c[1]]},o=function(A){if(A==="none"||typeof A!="string")return null;var l=A.match(n);if(l)if(l[1]==="matrix"){var c=l[2].split(",").map(r);return[c[0],c[1],c[2],c[3],c[4],c[5]]}else{var u=l[2].split(",").map(r);return[u[0],u[1],u[4],u[5],u[12],u[13]]}return null};return Er}var eo={};Object.defineProperty(eo,"__esModule",{value:!0});var ko=eo.VISIBILITY={VISIBLE:0,HIDDEN:1,COLLAPSE:2};eo.parseVisibility=function(e){switch(e){case"hidden":return ko.HIDDEN;case"collapse":return ko.COLLAPSE;case"visible":default:return ko.VISIBLE}};var to={};Object.defineProperty(to,"__esModule",{value:!0});var Ho=to.WORD_BREAK={NORMAL:"normal",BREAK_ALL:"break-all",KEEP_ALL:"keep-all"};to.parseWordBreak=function(e){switch(e){case"break-all":return Ho.BREAK_ALL;case"keep-all":return Ho.KEEP_ALL;case"normal":default:return Ho.NORMAL}};var MA={};Object.defineProperty(MA,"__esModule",{value:!0});MA.parseZIndex=function(e){var i=e==="auto";return{auto:i,order:i?0:parseInt(e,10)}};var ke={},Qn={},ci={},ur={},dr={};Object.defineProperty(dr,"__esModule",{value:!0});var zb=function(){function t(e,i){for(var r=0;r<i.length;r++){var n=i[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,i,r){return i&&t(e.prototype,i),r&&t(e,r),e}}();function Kb(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var Xb=function(){function t(e){Kb(this,t),this.element=e}return zb(t,[{key:"render",value:function(i){var r=this;this.options=i,this.canvas=document.createElement("canvas"),this.ctx=this.canvas.getContext("2d"),this.canvas.width=Math.floor(i.width)*i.scale,this.canvas.height=Math.floor(i.height)*i.scale,this.canvas.style.width=i.width+"px",this.canvas.style.height=i.height+"px",i.logger.log("ForeignObject renderer initialized ("+i.width+"x"+i.height+" at "+i.x+","+i.y+") with scale "+i.scale);var n=Gb(Math.max(i.windowWidth,i.width)*i.scale,Math.max(i.windowHeight,i.height)*i.scale,i.scrollX*i.scale,i.scrollY*i.scale,this.element);return Yb(n).then(function(a){return i.backgroundColor&&(r.ctx.fillStyle=i.backgroundColor.toString(),r.ctx.fillRect(0,0,i.width*i.scale,i.height*i.scale)),r.ctx.drawImage(a,-i.x*i.scale,-i.y*i.scale),r.canvas})}}]),t}();dr.default=Xb;var Gb=dr.createForeignObjectSVG=function(e,i,r,n,a){var o="http://www.w3.org/2000/svg",s=document.createElementNS(o,"svg"),A=document.createElementNS(o,"foreignObject");return s.setAttributeNS(null,"width",e),s.setAttributeNS(null,"height",i),A.setAttributeNS(null,"width","100%"),A.setAttributeNS(null,"height","100%"),A.setAttributeNS(null,"x",r),A.setAttributeNS(null,"y",n),A.setAttributeNS(null,"externalResourcesRequired","true"),s.appendChild(A),A.appendChild(a),s},Yb=dr.loadSerializedSVG=function(e){return new Promise(function(i,r){var n=new Image;n.onload=function(){return i(n)},n.onerror=r,n.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(new XMLSerializer().serializeToString(e))})};Object.defineProperty(ur,"__esModule",{value:!0});var Fn=dr,Vb=function(e){var i=123;if(e.createRange){var r=e.createRange();if(r.getBoundingClientRect){var n=e.createElement("boundtest");n.style.height=i+"px",n.style.display="block",e.body.appendChild(n),r.selectNode(n);var a=r.getBoundingClientRect(),o=Math.round(a.height);if(e.body.removeChild(n),o===i)return!0}}return!1},Wb=function(e,i){var r=new Image,n=e.createElement("canvas"),a=n.getContext("2d");return new Promise(function(o){r.src=i;var s=function(){try{a.drawImage(r,0,0),n.toDataURL()}catch{return o(!1)}return o(!0)};r.onload=s,r.onerror=function(){return o(!1)},r.complete===!0&&setTimeout(function(){s()},500)})},Jb=function(){return typeof new Image().crossOrigin<"u"},jb=function(){return typeof new XMLHttpRequest().responseType=="string"},Zb=function(e){var i=new Image,r=e.createElement("canvas"),n=r.getContext("2d");i.src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";try{n.drawImage(i,0,0),r.toDataURL()}catch{return!1}return!0},Fc=function(e){return e[0]===0&&e[1]===255&&e[2]===0&&e[3]===255},qb=function(e){var i=e.createElement("canvas"),r=100;i.width=r,i.height=r;var n=i.getContext("2d");n.fillStyle="rgb(0, 255, 0)",n.fillRect(0,0,r,r);var a=new Image,o=i.toDataURL();a.src=o;var s=(0,Fn.createForeignObjectSVG)(r,r,0,0,a);return n.fillStyle="red",n.fillRect(0,0,r,r),(0,Fn.loadSerializedSVG)(s).then(function(A){n.drawImage(A,0,0);var l=n.getImageData(0,0,r,r).data;n.fillStyle="red",n.fillRect(0,0,r,r);var c=e.createElement("div");return c.style.backgroundImage="url("+o+")",c.style.height=r+"px",Fc(l)?(0,Fn.loadSerializedSVG)((0,Fn.createForeignObjectSVG)(r,r,0,0,c)):Promise.reject(!1)}).then(function(A){return n.drawImage(A,0,0),Fc(n.getImageData(0,0,r,r).data)}).catch(function(A){return!1})},jt={get SUPPORT_RANGE_BOUNDS(){var t=Vb(document);return Object.defineProperty(jt,"SUPPORT_RANGE_BOUNDS",{value:t}),t},get SUPPORT_SVG_DRAWING(){var t=Zb(document);return Object.defineProperty(jt,"SUPPORT_SVG_DRAWING",{value:t}),t},get SUPPORT_BASE64_DRAWING(){return function(t){var e=Wb(document,t);return Object.defineProperty(jt,"SUPPORT_BASE64_DRAWING",{value:function(){return e}}),e}},get SUPPORT_FOREIGNOBJECT_DRAWING(){var t=typeof Array.from=="function"&&typeof window.fetch=="function"?qb(document):Promise.resolve(!1);return Object.defineProperty(jt,"SUPPORT_FOREIGNOBJECT_DRAWING",{value:t}),t},get SUPPORT_CORS_IMAGES(){var t=Jb();return Object.defineProperty(jt,"SUPPORT_CORS_IMAGES",{value:t}),t},get SUPPORT_RESPONSE_TYPE(){var t=jb();return Object.defineProperty(jt,"SUPPORT_RESPONSE_TYPE",{value:t}),t},get SUPPORT_CORS_XHR(){var t="withCredentials"in new XMLHttpRequest;return Object.defineProperty(jt,"SUPPORT_CORS_XHR",{value:t}),t}};ur.default=jt;var No={},jd={},Gt={};Object.defineProperty(Gt,"__esModule",{value:!0});Gt.toCodePoints=function(e){for(var i=[],r=0,n=e.length;r<n;){var a=e.charCodeAt(r++);if(a>=55296&&a<=56319&&r<n){var o=e.charCodeAt(r++);(o&64512)===56320?i.push(((a&1023)<<10)+(o&1023)+65536):(i.push(a),r--)}else i.push(a)}return i};Gt.fromCodePoint=function(){if(String.fromCodePoint)return String.fromCodePoint.apply(String,arguments);var e=arguments.length;if(!e)return"";for(var i=[],r=-1,n="";++r<e;){var a=arguments.length<=r?void 0:arguments[r];a<=65535?i.push(a):(a-=65536,i.push((a>>10)+55296,a%1024+56320)),(r+1===e||i.length>16384)&&(n+=String.fromCharCode.apply(String,i),i.length=0)}return n};var Uc="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Nr=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(var Un=0;Un<Uc.length;Un++)Nr[Uc.charCodeAt(Un)]=Un;Gt.decode=function(e){var i=e.length*.75,r=e.length,n=void 0,a=0,o=void 0,s=void 0,A=void 0,l=void 0;e[e.length-1]==="="&&(i--,e[e.length-2]==="="&&i--);var c=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u"&&typeof Uint8Array.prototype.slice<"u"?new ArrayBuffer(i):new Array(i),u=Array.isArray(c)?c:new Uint8Array(c);for(n=0;n<r;n+=4)o=Nr[e.charCodeAt(n)],s=Nr[e.charCodeAt(n+1)],A=Nr[e.charCodeAt(n+2)],l=Nr[e.charCodeAt(n+3)],u[a++]=o<<2|s>>4,u[a++]=(s&15)<<4|A>>2,u[a++]=(A&3)<<6|l&63;return c};Gt.polyUint16Array=function(e){for(var i=e.length,r=[],n=0;n<i;n+=2)r.push(e[n+1]<<8|e[n]);return r};Gt.polyUint32Array=function(e){for(var i=e.length,r=[],n=0;n<i;n+=4)r.push(e[n+3]<<24|e[n+2]<<16|e[n+1]<<8|e[n]);return r};var Ce={},q={};Object.defineProperty(q,"__esModule",{value:!0});q.Trie=q.createTrieFromBase64=q.UTRIE2_INDEX_2_MASK=q.UTRIE2_INDEX_2_BLOCK_LENGTH=q.UTRIE2_OMITTED_BMP_INDEX_1_LENGTH=q.UTRIE2_INDEX_1_OFFSET=q.UTRIE2_UTF8_2B_INDEX_2_LENGTH=q.UTRIE2_UTF8_2B_INDEX_2_OFFSET=q.UTRIE2_INDEX_2_BMP_LENGTH=q.UTRIE2_LSCP_INDEX_2_LENGTH=q.UTRIE2_DATA_MASK=q.UTRIE2_DATA_BLOCK_LENGTH=q.UTRIE2_LSCP_INDEX_2_OFFSET=q.UTRIE2_SHIFT_1_2=q.UTRIE2_INDEX_SHIFT=q.UTRIE2_SHIFT_1=q.UTRIE2_SHIFT_2=void 0;var ey=function(){function t(e,i){for(var r=0;r<i.length;r++){var n=i[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,i,r){return i&&t(e.prototype,i),r&&t(e,r),e}}(),Lo=Gt;function ty(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var bi=q.UTRIE2_SHIFT_2=5,RA=q.UTRIE2_SHIFT_1=6+5,Mo=q.UTRIE2_INDEX_SHIFT=2,iy=q.UTRIE2_SHIFT_1_2=RA-bi,Zd=q.UTRIE2_LSCP_INDEX_2_OFFSET=65536>>bi,ry=q.UTRIE2_DATA_BLOCK_LENGTH=1<<bi,Ro=q.UTRIE2_DATA_MASK=ry-1,ny=q.UTRIE2_LSCP_INDEX_2_LENGTH=1024>>bi,ay=q.UTRIE2_INDEX_2_BMP_LENGTH=Zd+ny,oy=q.UTRIE2_UTF8_2B_INDEX_2_OFFSET=ay,sy=q.UTRIE2_UTF8_2B_INDEX_2_LENGTH=32,Ay=q.UTRIE2_INDEX_1_OFFSET=oy+sy,ly=q.UTRIE2_OMITTED_BMP_INDEX_1_LENGTH=65536>>RA,cy=q.UTRIE2_INDEX_2_BLOCK_LENGTH=1<<iy,uy=q.UTRIE2_INDEX_2_MASK=cy-1;q.createTrieFromBase64=function(e){var i=(0,Lo.decode)(e),r=Array.isArray(i)?(0,Lo.polyUint32Array)(i):new Uint32Array(i),n=Array.isArray(i)?(0,Lo.polyUint16Array)(i):new Uint16Array(i),a=24,o=n.slice(a/2,r[4]/2),s=r[5]===2?n.slice((a+r[4])/2):r.slice(Math.ceil((a+r[4])/4));return new dy(r[0],r[1],r[2],r[3],o,s)};var dy=q.Trie=function(){function t(e,i,r,n,a,o){ty(this,t),this.initialValue=e,this.errorValue=i,this.highStart=r,this.highValueIndex=n,this.index=a,this.data=o}return ey(t,[{key:"get",value:function(i){var r=void 0;if(i>=0){if(i<55296||i>56319&&i<=65535)return r=this.index[i>>bi],r=(r<<Mo)+(i&Ro),this.data[r];if(i<=65535)return r=this.index[Zd+(i-55296>>bi)],r=(r<<Mo)+(i&Ro),this.data[r];if(i<this.highStart)return r=Ay-ly+(i>>RA),r=this.index[r],r+=i>>bi&uy,r=this.index[r],r=(r<<Mo)+(i&Ro),this.data[r];if(i<=1114111)return this.data[this.highValueIndex]}return this.errorValue}}]),t}(),hy="KwAAAAAAAAAACA4AIDoAAPAfAAACAAAAAAAIABAAGABAAEgAUABYAF4AZgBeAGYAYABoAHAAeABeAGYAfACEAIAAiACQAJgAoACoAK0AtQC9AMUAXgBmAF4AZgBeAGYAzQDVAF4AZgDRANkA3gDmAOwA9AD8AAQBDAEUARoBIgGAAIgAJwEvATcBPwFFAU0BTAFUAVwBZAFsAXMBewGDATAAiwGTAZsBogGkAawBtAG8AcIBygHSAdoB4AHoAfAB+AH+AQYCDgIWAv4BHgImAi4CNgI+AkUCTQJTAlsCYwJrAnECeQKBAk0CiQKRApkCoQKoArACuALAAsQCzAIwANQC3ALkAjAA7AL0AvwCAQMJAxADGAMwACADJgMuAzYDPgOAAEYDSgNSA1IDUgNaA1oDYANiA2IDgACAAGoDgAByA3YDfgOAAIQDgACKA5IDmgOAAIAAogOqA4AAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAK8DtwOAAIAAvwPHA88D1wPfAyAD5wPsA/QD/AOAAIAABAQMBBIEgAAWBB4EJgQuBDMEIAM7BEEEXgBJBCADUQRZBGEEaQQwADAAcQQ+AXkEgQSJBJEEgACYBIAAoASoBK8EtwQwAL8ExQSAAIAAgACAAIAAgACgAM0EXgBeAF4AXgBeAF4AXgBeANUEXgDZBOEEXgDpBPEE+QQBBQkFEQUZBSEFKQUxBTUFPQVFBUwFVAVcBV4AYwVeAGsFcwV7BYMFiwWSBV4AmgWgBacFXgBeAF4AXgBeAKsFXgCyBbEFugW7BcIFwgXIBcIFwgXQBdQF3AXkBesF8wX7BQMGCwYTBhsGIwYrBjMGOwZeAD8GRwZNBl4AVAZbBl4AXgBeAF4AXgBeAF4AXgBeAF4AXgBeAGMGXgBqBnEGXgBeAF4AXgBeAF4AXgBeAF4AXgB5BoAG4wSGBo4GkwaAAIADHgR5AF4AXgBeAJsGgABGA4AAowarBrMGswagALsGwwbLBjAA0wbaBtoG3QbaBtoG2gbaBtoG2gblBusG8wb7BgMHCwcTBxsHCwcjBysHMAc1BzUHOgdCB9oGSgdSB1oHYAfaBloHaAfaBlIH2gbaBtoG2gbaBtoG2gbaBjUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHbQdeAF4ANQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQd1B30HNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B4MH2gaKB68EgACAAIAAgACAAIAAgACAAI8HlwdeAJ8HpweAAIAArwe3B14AXgC/B8UHygcwANAH2AfgB4AA6AfwBz4B+AcACFwBCAgPCBcIogEYAR8IJwiAAC8INwg/CCADRwhPCFcIXwhnCEoDGgSAAIAAgABvCHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIhAiLCI4IMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAANQc1BzUHNQc1BzUHNQc1BzUHNQc1B54INQc1B6II2gaqCLIIugiAAIAAvgjGCIAAgACAAIAAgACAAIAAgACAAIAAywiHAYAA0wiAANkI3QjlCO0I9Aj8CIAAgACAAAIJCgkSCRoJIgknCTYHLwk3CZYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiAAIAAAAFAAXgBeAGAAcABeAHwAQACQAKAArQC9AJ4AXgBeAE0A3gBRAN4A7AD8AMwBGgEAAKcBNwEFAUwBXAF4QkhCmEKnArcCgAHHAsABz4LAAcABwAHAAd+C6ABoAG+C/4LAAcABwAHAAc+DF4MAAcAB54M3gweDV4Nng3eDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEeDqABVg6WDqABoQ6gAaABoAHXDvcONw/3DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DncPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB7cPPwlGCU4JMACAAIAAgABWCV4JYQmAAGkJcAl4CXwJgAkwADAAMAAwAIgJgACLCZMJgACZCZ8JowmrCYAAswkwAF4AXgB8AIAAuwkABMMJyQmAAM4JgADVCTAAMAAwADAAgACAAIAAgACAAIAAgACAAIAAqwYWBNkIMAAwADAAMADdCeAJ6AnuCR4E9gkwAP4JBQoNCjAAMACAABUK0wiAAB0KJAosCjQKgAAwADwKQwqAAEsKvQmdCVMKWwowADAAgACAALcEMACAAGMKgABrCjAAMAAwADAAMAAwADAAMAAwADAAMAAeBDAAMAAwADAAMAAwADAAMAAwADAAMAAwAIkEPQFzCnoKiQSCCooKkAqJBJgKoAqkCokEGAGsCrQKvArBCjAAMADJCtEKFQHZCuEK/gHpCvEKMAAwADAAMACAAIwE+QowAIAAPwEBCzAAMAAwADAAMACAAAkLEQswAIAAPwEZCyELgAAOCCkLMAAxCzkLMAAwADAAMAAwADAAXgBeAEELMAAwADAAMAAwADAAMAAwAEkLTQtVC4AAXAtkC4AAiQkwADAAMAAwADAAMAAwADAAbAtxC3kLgAuFC4sLMAAwAJMLlwufCzAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAApwswADAAMACAAIAAgACvC4AAgACAAIAAgACAALcLMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAvwuAAMcLgACAAIAAgACAAIAAyguAAIAAgACAAIAA0QswADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAANkLgACAAIAA4AswADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACJCR4E6AswADAAhwHwC4AA+AsADAgMEAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMACAAIAAGAwdDCUMMAAwAC0MNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQw1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHPQwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADUHNQc1BzUHNQc1BzUHNQc2BzAAMAA5DDUHNQc1BzUHNQc1BzUHNQc1BzUHNQdFDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAgACAAIAATQxSDFoMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAF4AXgBeAF4AXgBeAF4AYgxeAGoMXgBxDHkMfwxeAIUMXgBeAI0MMAAwADAAMAAwAF4AXgCVDJ0MMAAwADAAMABeAF4ApQxeAKsMswy7DF4Awgy9DMoMXgBeAF4AXgBeAF4AXgBeAF4AXgDRDNkMeQBqCeAM3Ax8AOYM7Az0DPgMXgBeAF4AXgBeAF4AXgBeAF4AXgBeAF4AXgBeAF4AXgCgAAANoAAHDQ4NFg0wADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAeDSYNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIAAgACAAIAAgACAAC4NMABeAF4ANg0wADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAD4NRg1ODVYNXg1mDTAAbQ0wADAAMAAwADAAMAAwADAA2gbaBtoG2gbaBtoG2gbaBnUNeg3CBYANwgWFDdoGjA3aBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gaUDZwNpA2oDdoG2gawDbcNvw3HDdoG2gbPDdYN3A3fDeYN2gbsDfMN2gbaBvoN/g3aBgYODg7aBl4AXgBeABYOXgBeACUG2gYeDl4AJA5eACwO2w3aBtoGMQ45DtoG2gbaBtoGQQ7aBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gZJDjUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B1EO2gY1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQdZDjUHNQc1BzUHNQc1B2EONQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHaA41BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B3AO2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gY1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B2EO2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gZJDtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBkkOeA6gAKAAoAAwADAAMAAwAKAAoACgAKAAoACgAKAAgA4wADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAD//wQABAAEAAQABAAEAAQABAAEAA0AAwABAAEAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAKABMAFwAeABsAGgAeABcAFgASAB4AGwAYAA8AGAAcAEsASwBLAEsASwBLAEsASwBLAEsAGAAYAB4AHgAeABMAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAFgAbABIAHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYADQARAB4ABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkAFgAaABsAGwAbAB4AHQAdAB4ATwAXAB4ADQAeAB4AGgAbAE8ATwAOAFAAHQAdAB0ATwBPABcATwBPAE8AFgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwArAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAAQABAANAA0ASwBLAEsASwBLAEsASwBLAEsASwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUAArACsABABQAAQABAAEAAQABAAEAAQAKwArAAQABAArACsABAAEAAQAUAArACsAKwArACsAKwArACsABAArACsAKwArAFAAUAArAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAGgAaAFAAUABQAFAAUABMAB4AGwBQAB4AKwArACsABAAEAAQAKwBQAFAAUABQAFAAUAArACsAKwArAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUAArAFAAUAArACsABAArAAQABAAEAAQABAArACsAKwArAAQABAArACsABAAEAAQAKwArACsABAArACsAKwArACsAKwArAFAAUABQAFAAKwBQACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwAEAAQAUABQAFAABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUAArACsABABQAAQABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQAKwArAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwAeABsAKwArACsAKwArACsAKwBQAAQABAAEAAQABAAEACsABAAEAAQAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwArAAQABAArACsABAAEAAQAKwArACsAKwArACsAKwArAAQABAArACsAKwArAFAAUAArAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwAeAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwAEAFAAKwBQAFAAUABQAFAAUAArACsAKwBQAFAAUAArAFAAUABQAFAAKwArACsAUABQACsAUAArAFAAUAArACsAKwBQAFAAKwArACsAUABQAFAAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQAKwArACsABAAEAAQAKwAEAAQABAAEACsAKwBQACsAKwArACsAKwArAAQAKwArACsAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAB4AHgAeAB4AHgAeABsAHgArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABAArACsAKwArACsAKwArAAQABAArAFAAUABQACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAB4AUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABAArACsAKwArACsAKwArAAQABAArACsAKwArACsAKwArAFAAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwArAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAKwBcAFwAKwBcACsAKwBcACsAKwArACsAKwArAFwAXABcAFwAKwBcAFwAXABcAFwAXABcACsAXABcAFwAKwBcACsAXAArACsAXABcACsAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgArACoAKgBcACsAKwBcAFwAXABcAFwAKwBcACsAKgAqACoAKgAqACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAFwAXABcAFwAUAAOAA4ADgAOAB4ADgAOAAkADgAOAA0ACQATABMAEwATABMACQAeABMAHgAeAB4ABAAEAB4AHgAeAB4AHgAeAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUAANAAQAHgAEAB4ABAAWABEAFgARAAQABABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAAQABAAEAAQABAANAAQABABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsADQANAB4AHgAeAB4AHgAeAAQAHgAeAB4AHgAeAB4AKwAeAB4ADgAOAA0ADgAeAB4AHgAeAB4ACQAJACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgAeAB4AHgBcAFwAXABcAFwAXAAqACoAKgAqAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAKgAqACoAKgAqACoAKgBcAFwAXAAqACoAKgAqAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAXAAqAEsASwBLAEsASwBLAEsASwBLAEsAKgAqACoAKgAqACoAUABQAFAAUABQAFAAKwBQACsAKwArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQACsAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwAEAAQABAAeAA0AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAEQArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAADQANAA0AUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAA0ADQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoADQANABUAXAANAB4ADQAbAFwAKgArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAB4AHgATABMADQANAA4AHgATABMAHgAEAAQABAAJACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAUABQAFAAUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwAeACsAKwArABMAEwBLAEsASwBLAEsASwBLAEsASwBLAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwBcAFwAXABcAFwAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcACsAKwArACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwAeAB4AXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgArACsABABLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKgAqACoAKgAqACoAKgBcACoAKgAqACoAKgAqACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAUABQAFAAUABQAFAAUAArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4ADQANAA0ADQAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAHgAeAB4AHgBQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwANAA0ADQANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwBQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsABAAEAAQAHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAABABQAFAAUABQAAQABAAEAFAAUAAEAAQABAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAKwBQACsAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAKwArAB4AHgAeAB4AHgAeACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAUABQAFAAKwAeAB4AHgAeAB4AHgAeAA4AHgArAA0ADQANAA0ADQANAA0ACQANAA0ADQAIAAQACwAEAAQADQAJAA0ADQAMAB0AHQAeABcAFwAWABcAFwAXABYAFwAdAB0AHgAeABQAFAAUAA0AAQABAAQABAAEAAQABAAJABoAGgAaABoAGgAaABoAGgAeABcAFwAdABUAFQAeAB4AHgAeAB4AHgAYABYAEQAVABUAFQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgANAB4ADQANAA0ADQAeAA0ADQANAAcAHgAeAB4AHgArAAQABAAEAAQABAAEAAQABAAEAAQAUABQACsAKwBPAFAAUABQAFAAUAAeAB4AHgAWABEATwBQAE8ATwBPAE8AUABQAFAAUABQAB4AHgAeABYAEQArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAGwAbABsAGwAbABsAGwAaABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAaABsAGwAbABsAGgAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgBQABoAHgAdAB4AUAAeABoAHgAeAB4AHgAeAB4AHgAeAB4ATwAeAFAAGwAeAB4AUABQAFAAUABQAB4AHgAeAB0AHQAeAFAAHgBQAB4AUAAeAFAATwBQAFAAHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AUABQAFAAUABPAE8AUABQAFAAUABQAE8AUABQAE8AUABPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAE8ATwBPAE8ATwBPAE8ATwBPAE8AUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAATwAeAB4AKwArACsAKwAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB0AHQAeAB4AHgAdAB0AHgAeAB0AHgAeAB4AHQAeAB0AGwAbAB4AHQAeAB4AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB0AHgAdAB4AHQAdAB0AHQAdAB0AHgAdAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAdAB0AHQAdAB4AHgAdAB0AHgAeAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABQAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAlACUAHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBQAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAeAB4AHgAeAB0AHQAeAB4AHgAeAB0AHQAdAB4AHgAdAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB0AHQAeAB4AHQAeAB4AHgAeAB0AHQAeAB4AHgAeACUAJQAdAB0AJQAeACUAJQAlACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAHgAeAB4AHgAdAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHQAdAB0AHgAdACUAHQAdAB4AHQAdAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHQAdAB0AHQAlAB4AJQAlACUAHQAlACUAHQAdAB0AJQAlAB0AHQAlAB0AHQAlACUAJQAeAB0AHgAeAB4AHgAdAB0AJQAdAB0AHQAdAB0AHQAlACUAJQAlACUAHQAlACUAIAAlAB0AHQAlACUAJQAlACUAJQAlACUAHgAeAB4AJQAlACAAIAAgACAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeABcAFwAXABcAFwAXAB4AEwATACUAHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwArACUAJQBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAKwArACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAE8ATwBPAE8ATwBPAE8ATwAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeACsAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUAArACsAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQBQAFAAUABQACsAKwArACsAUABQAFAAUABQAFAAUABQAA0AUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQACsAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgBQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAABAAEAAQAKwAEAAQAKwArACsAKwArAAQABAAEAAQAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsABAAEAAQAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsADQANAA0ADQANAA0ADQANAB4AKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AUABQAFAAUABQAFAAUABQAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAUABQAFAAUABQAA0ADQANAA0ADQANABQAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwANAA0ADQANAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAeAAQABAAEAB4AKwArAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLACsADQArAB4AKwArAAQABAAEAAQAUABQAB4AUAArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwAEAAQABAAEAAQABAAEAAQABAAOAA0ADQATABMAHgAeAB4ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0AUABQAFAAUAAEAAQAKwArAAQADQANAB4AUAArACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXABcAA0ADQANACoASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUAArACsAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANACsADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEcARwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQACsAKwAeAAQABAANAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAEAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUAArACsAUAArACsAUABQACsAKwBQAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AKwArAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAeAB4ADQANAA0ADQAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAArAAQABAArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAEAAQABAAEAAQABAAEACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAFgAWAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAKwBQACsAKwArACsAKwArAFAAKwArACsAKwBQACsAUAArAFAAKwBQAFAAUAArAFAAUAArAFAAKwArAFAAKwBQACsAUAArAFAAKwBQACsAUABQACsAUAArACsAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAUABQAFAAUAArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUAArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAlACUAJQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeACUAJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeACUAJQAlACUAJQAeACUAJQAlACUAJQAgACAAIAAlACUAIAAlACUAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIQAhACEAIQAhACUAJQAgACAAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAgACAAIAAlACUAJQAlACAAJQAgACAAIAAgACAAIAAgACAAIAAlACUAJQAgACUAJQAlACUAIAAgACAAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeACUAHgAlAB4AJQAlACUAJQAlACAAJQAlACUAJQAeACUAHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAgACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAlACUAJQAlACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAIAAgACAAJQAlACUAIAAgACAAIAAgAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFwAXABcAFQAVABUAHgAeAB4AHgAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAgACAAJQAlACUAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAlACAAIAAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsA";Object.defineProperty(Ce,"__esModule",{value:!0});Ce.LineBreaker=Ce.inlineBreakOpportunities=Ce.lineBreakAtIndex=Ce.codePointsToCharacterClasses=Ce.UnicodeTrie=Ce.BREAK_ALLOWED=Ce.BREAK_NOT_ALLOWED=Ce.BREAK_MANDATORY=Ce.classes=Ce.LETTER_NUMBER_MODIFIER=void 0;var gy=function(){function t(e,i){for(var r=0;r<i.length;r++){var n=i[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,i,r){return i&&t(e.prototype,i),r&&t(e,r),e}}(),io=function(){function t(e,i){var r=[],n=!0,a=!1,o=void 0;try{for(var s=e[Symbol.iterator](),A;!(n=(A=s.next()).done)&&(r.push(A.value),!(i&&r.length===i));n=!0);}catch(l){a=!0,o=l}finally{try{!n&&s.return&&s.return()}finally{if(a)throw o}}return r}return function(e,i){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,i);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),fy=q,py=hy,vy=my(py),pa=Gt;function my(t){return t&&t.__esModule?t:{default:t}}function xy(t){if(Array.isArray(t)){for(var e=0,i=Array(t.length);e<t.length;e++)i[e]=t[e];return i}else return Array.from(t)}function By(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var Ic=Ce.LETTER_NUMBER_MODIFIER=50,qd=1,DA=2,$A=3,eh=4,th=5,wy=6,Fs=7,PA=8,Us=9,$t=10,OA=11,Is=12,va=13,ih=14,Oi=15,ma=16,Lr=17,Ni=18,Ss=19,Kn=20,xa=21,Li=22,Xn=23,hi=24,Ve=25,zi=26,Ki=27,gi=28,rh=29,ei=30,nh=31,Mi=32,Ri=33,Ba=34,wa=35,ba=36,ai=37,ya=38,Pr=39,Or=40,Gn=41,zA=42,ah=43;Ce.classes={BK:qd,CR:DA,LF:$A,CM:eh,NL:th,SG:wy,WJ:Fs,ZW:PA,GL:Us,SP:$t,ZWJ:OA,B2:Is,BA:va,BB:ih,HY:Oi,CB:ma,CL:Lr,CP:Ni,EX:Ss,IN:Kn,NS:xa,OP:Li,QU:Xn,IS:hi,NU:Ve,PO:zi,PR:Ki,SY:gi,AI:rh,AL:ei,CJ:nh,EB:Mi,EM:Ri,H2:Ba,H3:wa,HL:ba,ID:ai,JL:ya,JV:Pr,JT:Or,RI:Gn,SA:zA,XX:ah};var ro=Ce.BREAK_MANDATORY="!",j=Ce.BREAK_NOT_ALLOWED="×",In=Ce.BREAK_ALLOWED="÷",oh=Ce.UnicodeTrie=(0,fy.createTrieFromBase64)(vy.default),Ct=[ei,ba],ks=[qd,DA,$A,th],sh=[$t,PA],Sc=[Ki,zi],by=ks.concat(sh),kc=[ya,Pr,Or,Ba,wa],yy=[Oi,va],Ah=Ce.codePointsToCharacterClasses=function(e){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"strict",r=[],n=[],a=[];return e.forEach(function(o,s){var A=oh.get(o);if(A>Ic?(a.push(!0),A-=Ic):a.push(!1),["normal","auto","loose"].indexOf(i)!==-1&&[8208,8211,12316,12448].indexOf(o)!==-1)return n.push(s),r.push(ma);if(A===eh||A===OA){if(s===0)return n.push(s),r.push(ei);var l=r[s-1];return by.indexOf(l)===-1?(n.push(n[s-1]),r.push(l)):(n.push(s),r.push(ei))}if(n.push(s),A===nh)return r.push(i==="strict"?xa:ai);if(A===zA||A===rh)return r.push(ei);if(A===ah)return o>=131072&&o<=196605||o>=196608&&o<=262141?r.push(ai):r.push(ei);r.push(A)}),[n,r,a]},Do=function(e,i,r,n){var a=n[r];if(Array.isArray(e)?e.indexOf(a)!==-1:e===a)for(var o=r;o<=n.length;){o++;var s=n[o];if(s===i)return!0;if(s!==$t)break}if(a===$t)for(var A=r;A>0;){A--;var l=n[A];if(Array.isArray(e)?e.indexOf(l)!==-1:e===l)for(var c=r;c<=n.length;){c++;var u=n[c];if(u===i)return!0;if(u!==$t)break}if(l!==$t)break}return!1},Hc=function(e,i){for(var r=e;r>=0;){var n=i[r];if(n===$t)r--;else return n}return 0},KA=function(e,i,r,n,a){if(r[n]===0)return j;var o=n-1;if(Array.isArray(a)&&a[o]===!0)return j;var s=o-1,A=o+1,l=i[o],c=s>=0?i[s]:0,u=i[A];if(l===DA&&u===$A)return j;if(ks.indexOf(l)!==-1)return ro;if(ks.indexOf(u)!==-1||sh.indexOf(u)!==-1)return j;if(Hc(o,i)===PA)return In;if(oh.get(e[o])===OA&&(u===ai||u===Mi||u===Ri)||l===Fs||u===Fs||l===Us||[$t,va,Oi].indexOf(l)===-1&&u===Us||[Lr,Ni,Ss,hi,gi].indexOf(u)!==-1||Hc(o,i)===Li||Do(Xn,Li,o,i)||Do([Lr,Ni],xa,o,i)||Do(Is,Is,o,i))return j;if(l===$t)return In;if(l===Xn||u===Xn)return j;if(u===ma||l===ma)return In;if([va,Oi,xa].indexOf(u)!==-1||l===ih||c===ba&&yy.indexOf(l)!==-1||l===gi&&u===ba||u===Kn&&Ct.concat(Kn,Ss,Ve,ai,Mi,Ri).indexOf(l)!==-1||Ct.indexOf(u)!==-1&&l===Ve||Ct.indexOf(l)!==-1&&u===Ve||l===Ki&&[ai,Mi,Ri].indexOf(u)!==-1||[ai,Mi,Ri].indexOf(l)!==-1&&u===zi||Ct.indexOf(l)!==-1&&Sc.indexOf(u)!==-1||Sc.indexOf(l)!==-1&&Ct.indexOf(u)!==-1||[Ki,zi].indexOf(l)!==-1&&(u===Ve||[Li,Oi].indexOf(u)!==-1&&i[A+1]===Ve)||[Li,Oi].indexOf(l)!==-1&&u===Ve||l===Ve&&[Ve,gi,hi].indexOf(u)!==-1)return j;if([Ve,gi,hi,Lr,Ni].indexOf(u)!==-1)for(var d=o;d>=0;){var h=i[d];if(h===Ve)return j;if([gi,hi].indexOf(h)!==-1)d--;else break}if([Ki,zi].indexOf(u)!==-1)for(var g=[Lr,Ni].indexOf(l)!==-1?s:o;g>=0;){var f=i[g];if(f===Ve)return j;if([gi,hi].indexOf(f)!==-1)g--;else break}if(ya===l&&[ya,Pr,Ba,wa].indexOf(u)!==-1||[Pr,Ba].indexOf(l)!==-1&&[Pr,Or].indexOf(u)!==-1||[Or,wa].indexOf(l)!==-1&&u===Or||kc.indexOf(l)!==-1&&[Kn,zi].indexOf(u)!==-1||kc.indexOf(u)!==-1&&l===Ki||Ct.indexOf(l)!==-1&&Ct.indexOf(u)!==-1||l===hi&&Ct.indexOf(u)!==-1||Ct.concat(Ve).indexOf(l)!==-1&&u===Li||Ct.concat(Ve).indexOf(u)!==-1&&l===Ni)return j;if(l===Gn&&u===Gn){for(var p=r[o],v=1;p>0&&(p--,i[p]===Gn);)v++;if(v%2!==0)return j}return l===Mi&&u===Ri?j:In};Ce.lineBreakAtIndex=function(e,i){if(i===0)return j;if(i>=e.length)return ro;var r=Ah(e),n=io(r,2),a=n[0],o=n[1];return KA(e,o,a,i)};var lh=function(e,i){i||(i={lineBreak:"normal",wordBreak:"normal"});var r=Ah(e,i.lineBreak),n=io(r,3),a=n[0],o=n[1],s=n[2];(i.wordBreak==="break-all"||i.wordBreak==="break-word")&&(o=o.map(function(l){return[Ve,ei,zA].indexOf(l)!==-1?ai:l}));var A=i.wordBreak==="keep-all"?s.map(function(l,c){return l&&e[c]>=19968&&e[c]<=40959}):null;return[a,o,A]};Ce.inlineBreakOpportunities=function(e,i){var r=(0,pa.toCodePoints)(e),n=j,a=lh(r,i),o=io(a,3),s=o[0],A=o[1],l=o[2];return r.forEach(function(c,u){n+=(0,pa.fromCodePoint)(c)+(u>=r.length-1?ro:KA(r,A,s,u+1,l))}),n};var _y=function(){function t(e,i,r,n){By(this,t),this._codePoints=e,this.required=i===ro,this.start=r,this.end=n}return gy(t,[{key:"slice",value:function(){return pa.fromCodePoint.apply(void 0,xy(this._codePoints.slice(this.start,this.end)))}}]),t}();Ce.LineBreaker=function(e,i){var r=(0,pa.toCodePoints)(e),n=lh(r,i),a=io(n,3),o=a[0],s=a[1],A=a[2],l=r.length,c=0,u=0;return{next:function(){if(u>=l)return{done:!0};for(var h=j;u<l&&(h=KA(r,s,o,++u,A))===j;);if(h!==j||u===l){var g=new _y(r,h,c,u);return c=u,{value:g,done:!1}}return{done:!0}}}};(function(t){Object.defineProperty(t,"__esModule",{value:!0});var e=Gt;Object.defineProperty(t,"toCodePoints",{enumerable:!0,get:function(){return e.toCodePoints}}),Object.defineProperty(t,"fromCodePoint",{enumerable:!0,get:function(){return e.fromCodePoint}});var i=Ce;Object.defineProperty(t,"LineBreaker",{enumerable:!0,get:function(){return i.LineBreaker}})})(jd);var Nc;function ch(){return Nc||(Nc=1,function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.breakWords=t.fromCodePoint=t.toCodePoints=void 0;var e=jd;Object.defineProperty(t,"toCodePoints",{enumerable:!0,get:function(){return e.toCodePoints}}),Object.defineProperty(t,"fromCodePoint",{enumerable:!0,get:function(){return e.fromCodePoint}});var i=hr();n(i);var r=sn;function n(a){return a&&a.__esModule?a:{default:a}}t.breakWords=function(o,s){for(var A=(0,e.LineBreaker)(o,{lineBreak:s.style.lineBreak,wordBreak:s.style.overflowWrap===r.OVERFLOW_WRAP.BREAK_WORD?"break-word":s.style.wordBreak}),l=[],c=void 0;!(c=A.next()).done;)l.push(c.value.slice());return l}}(No)),No}var Lc;function uh(){if(Lc)return ci;Lc=1,Object.defineProperty(ci,"__esModule",{value:!0}),ci.parseTextBounds=ci.TextBounds=void 0;var t=he,e=dt,i=ur,r=a(i),n=ch();function a(c){return c&&c.__esModule?c:{default:c}}function o(c,u){if(!(c instanceof u))throw new TypeError("Cannot call a class as a function")}var s=ci.TextBounds=function c(u,d){o(this,c),this.text=u,this.bounds=d};ci.parseTextBounds=function(u,d,h){for(var g=d.style.letterSpacing!==0,f=g?(0,n.toCodePoints)(u).map(function(H){return(0,n.fromCodePoint)(H)}):(0,n.breakWords)(u,d),p=f.length,v=h.parentNode?h.parentNode.ownerDocument.defaultView:null,m=v?v.pageXOffset:0,w=v?v.pageYOffset:0,x=[],_=0,b=0;b<p;b++){var E=f[b];if(d.style.textDecoration!==e.TEXT_DECORATION.NONE||E.trim().length>0)if(r.default.SUPPORT_RANGE_BOUNDS)x.push(new s(E,l(h,_,E.length,m,w)));else{var U=h.splitText(E.length);x.push(new s(E,A(h,m,w))),h=U}else r.default.SUPPORT_RANGE_BOUNDS||(h=h.splitText(E.length));_+=E.length}return x};var A=function(u,d,h){var g=u.ownerDocument.createElement("html2canvaswrapper");g.appendChild(u.cloneNode(!0));var f=u.parentNode;if(f){f.replaceChild(g,u);var p=(0,t.parseBounds)(g,d,h);return g.firstChild&&f.replaceChild(g.firstChild,g),p}return new t.Bounds(0,0,0,0)},l=function(u,d,h,g,f){var p=u.ownerDocument.createRange();return p.setStart(u,d),p.setEnd(u,d+h),t.Bounds.fromClientRect(p.getBoundingClientRect(),g,f)};return ci}var Mc;function no(){if(Mc)return Qn;Mc=1,Object.defineProperty(Qn,"__esModule",{value:!0});var t=function(){function A(l,c){for(var u=0;u<c.length;u++){var d=c[u];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(l,d.key,d)}}return function(l,c,u){return c&&A(l.prototype,c),u&&A(l,u),l}}(),e=An,i=uh();function r(A,l){if(!(A instanceof l))throw new TypeError("Cannot call a class as a function")}var n=function(){function A(l,c,u){r(this,A),this.text=l,this.parent=c,this.bounds=u}return t(A,null,[{key:"fromTextNode",value:function(c,u){var d=o(c.data,u.style.textTransform);return new A(d,u,(0,i.parseTextBounds)(d,u,c))}}]),A}();Qn.default=n;var a=/(^|\s|:|-|\(|\))([a-z])/g,o=function(l,c){switch(c){case e.TEXT_TRANSFORM.LOWERCASE:return l.toLowerCase();case e.TEXT_TRANSFORM.CAPITALIZE:return l.replace(a,s);case e.TEXT_TRANSFORM.UPPERCASE:return l.toUpperCase();default:return l}};function s(A,l,c){return A.length>0?l+c.toUpperCase():A}return Qn}var XA={};Object.defineProperty(XA,"__esModule",{value:!0});var Cy=lr;function Ty(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var Ey=function t(e,i,r){Ty(this,t),this.type=Cy.PATH.CIRCLE,this.x=e,this.y=i,this.radius=r};XA.default=Ey;var Rc;function dh(){if(Rc)return ke;Rc=1,Object.defineProperty(ke,"__esModule",{value:!0}),ke.reformatInputBounds=ke.inlineSelectElement=ke.inlineTextAreaElement=ke.inlineInputElement=ke.getInputBorderRadius=ke.INPUT_BACKGROUND=ke.INPUT_BORDERS=ke.INPUT_COLOR=void 0;var t=no(),e=h(t),i=on(),r=It,n=XA,a=h(n),o=cr,s=h(o),A=bt,l=h(A),c=Ui(),u=h(c);uh();var d=yt;function h(H){return H&&H.__esModule?H:{default:H}}ke.INPUT_COLOR=new l.default([42,42,42]);var g=new l.default([165,165,165]),f=new l.default([222,222,222]),p={borderWidth:1,borderColor:g,borderStyle:r.BORDER_STYLE.SOLID};ke.INPUT_BORDERS=[p,p,p,p],ke.INPUT_BACKGROUND={backgroundColor:f,backgroundImage:[],backgroundClip:i.BACKGROUND_CLIP.PADDING_BOX,backgroundOrigin:i.BACKGROUND_ORIGIN.PADDING_BOX};var v=new u.default("50%"),m=[v,v],w=[m,m,m,m],x=new u.default("3px"),_=[x,x],b=[_,_,_,_];ke.getInputBorderRadius=function(T){return T.type==="radio"?w:b},ke.inlineInputElement=function(T,y){if(T.type==="radio"||T.type==="checkbox"){if(T.checked){var Q=Math.min(y.bounds.width,y.bounds.height);y.childNodes.push(T.type==="checkbox"?[new s.default(y.bounds.left+Q*.39363,y.bounds.top+Q*.79),new s.default(y.bounds.left+Q*.16,y.bounds.top+Q*.5549),new s.default(y.bounds.left+Q*.27347,y.bounds.top+Q*.44071),new s.default(y.bounds.left+Q*.39694,y.bounds.top+Q*.5649),new s.default(y.bounds.left+Q*.72983,y.bounds.top+Q*.23),new s.default(y.bounds.left+Q*.84,y.bounds.top+Q*.34085),new s.default(y.bounds.left+Q*.39363,y.bounds.top+Q*.79)]:new a.default(y.bounds.left+Q/4,y.bounds.top+Q/4,Q/4))}}else E(U(T),T,y,!1)},ke.inlineTextAreaElement=function(T,y){E(T.value,T,y,!0)},ke.inlineSelectElement=function(T,y){var Q=T.options[T.selectedIndex||0];E(Q&&Q.text||"",T,y,!1)},ke.reformatInputBounds=function(T){return T.width>T.height?(T.left+=(T.width-T.height)/2,T.width=T.height):T.width<T.height&&(T.top+=(T.height-T.width)/2,T.height=T.width),T};var E=function(T,y,Q,B){var C=y.ownerDocument.body;if(T.length>0&&C){var I=y.ownerDocument.createElement("html2canvaswrapper");(0,d.copyCSSStyles)(y.ownerDocument.defaultView.getComputedStyle(y,null),I),I.style.position="absolute",I.style.left=Q.bounds.left+"px",I.style.top=Q.bounds.top+"px",B||(I.style.whiteSpace="nowrap");var S=y.ownerDocument.createTextNode(T);I.appendChild(S),C.appendChild(I),Q.childNodes.push(e.default.fromTextNode(S,Q)),C.removeChild(I)}},U=function(T){var y=T.type==="password"?new Array(T.value.length+1).join("•"):T.value;return y.length===0?T.placeholder||"":y};return ke}var Mt={},Dc;function GA(){if(Dc)return Mt;Dc=1,Object.defineProperty(Mt,"__esModule",{value:!0}),Mt.createCounterText=Mt.inlineListItemElement=Mt.getListOwner=void 0;var t=yt,e=hr(),i=s(e),r=no(),n=s(r),a=Ja(),o=ch();function s(Q){return Q&&Q.__esModule?Q:{default:Q}}var A=7,l=["OL","UL","MENU"];Mt.getListOwner=function(B){var C=B.parent;if(!C)return null;do{var I=l.indexOf(C.tagName)!==-1;if(I)return C;C=C.parent}while(C);return B.parent},Mt.inlineListItemElement=function(B,C,I){var S=C.style.listStyle;if(S){var k=B.ownerDocument.defaultView.getComputedStyle(B,null),F=B.ownerDocument.createElement("html2canvaswrapper");switch((0,t.copyCSSStyles)(k,F),F.style.position="absolute",F.style.bottom="auto",F.style.display="block",F.style.letterSpacing="normal",S.listStylePosition){case a.LIST_STYLE_POSITION.OUTSIDE:F.style.left="auto",F.style.right=B.ownerDocument.defaultView.innerWidth-C.bounds.left-C.style.margin[1].getAbsoluteValue(C.bounds.width)+A+"px",F.style.textAlign="right";break;case a.LIST_STYLE_POSITION.INSIDE:F.style.left=C.bounds.left-C.style.margin[3].getAbsoluteValue(C.bounds.width)+"px",F.style.right="auto",F.style.textAlign="left";break}var N=void 0,D=C.style.margin[0].getAbsoluteValue(C.bounds.width),z=S.listStyleImage;if(z)if(z.method==="url"){var Y=B.ownerDocument.createElement("img");Y.src=z.args[0],F.style.top=C.bounds.top-D+"px",F.style.width="auto",F.style.height="auto",F.appendChild(Y)}else{var ae=parseFloat(C.style.font.fontSize)*.5;F.style.top=C.bounds.top-D+C.bounds.height-1.5*ae+"px",F.style.width=ae+"px",F.style.height=ae+"px",F.style.backgroundImage=k.listStyleImage}else typeof C.listIndex=="number"&&(N=B.ownerDocument.createTextNode(y(C.listIndex,S.listStyleType,!0)),F.appendChild(N),F.style.top=C.bounds.top-D+"px");var R=B.ownerDocument.body;R.appendChild(F),N?(C.childNodes.push(n.default.fromTextNode(N,C)),R.removeChild(F)):C.childNodes.push(new i.default(F,C,I,0))}};var c={integers:[1e3,900,500,400,100,90,50,40,10,9,5,4,1],values:["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"]},u={integers:[9e3,8e3,7e3,6e3,5e3,4e3,3e3,2e3,1e3,900,800,700,600,500,400,300,200,100,90,80,70,60,50,40,30,20,10,9,8,7,6,5,4,3,2,1],values:["Ք","Փ","Ւ","Ց","Ր","Տ","Վ","Ս","Ռ","Ջ","Պ","Չ","Ո","Շ","Ն","Յ","Մ","Ճ","Ղ","Ձ","Հ","Կ","Ծ","Խ","Լ","Ի","Ժ","Թ","Ը","Է","Զ","Ե","Դ","Գ","Բ","Ա"]},d={integers:[1e4,9e3,8e3,7e3,6e3,5e3,4e3,3e3,2e3,1e3,400,300,200,100,90,80,70,60,50,40,30,20,19,18,17,16,15,10,9,8,7,6,5,4,3,2,1],values:["י׳","ט׳","ח׳","ז׳","ו׳","ה׳","ד׳","ג׳","ב׳","א׳","ת","ש","ר","ק","צ","פ","ע","ס","נ","מ","ל","כ","יט","יח","יז","טז","טו","י","ט","ח","ז","ו","ה","ד","ג","ב","א"]},h={integers:[1e4,9e3,8e3,7e3,6e3,5e3,4e3,3e3,2e3,1e3,900,800,700,600,500,400,300,200,100,90,80,70,60,50,40,30,20,10,9,8,7,6,5,4,3,2,1],values:["ჵ","ჰ","ჯ","ჴ","ხ","ჭ","წ","ძ","ც","ჩ","შ","ყ","ღ","ქ","ფ","ჳ","ტ","ს","რ","ჟ","პ","ო","ჲ","ნ","მ","ლ","კ","ი","თ","ჱ","ზ","ვ","ე","დ","გ","ბ","ა"]},g=function(B,C,I,S,k,F){return B<C||B>I?y(B,k,F.length>0):S.integers.reduce(function(N,D,z){for(;B>=D;)B-=D,N+=S.values[z];return N},"")+F},f=function(B,C,I,S){var k="";do I||B--,k=S(B)+k,B/=C;while(B*C>=C);return k},p=function(B,C,I,S,k){var F=I-C+1;return(B<0?"-":"")+(f(Math.abs(B),F,S,function(N){return(0,o.fromCodePoint)(Math.floor(N%F)+C)})+k)},v=function(B,C){var I=arguments.length>2&&arguments[2]!==void 0?arguments[2]:". ",S=C.length;return f(Math.abs(B),S,!1,function(k){return C[Math.floor(k%S)]})+I},m=1<<0,w=1<<1,x=1<<2,_=1<<3,b=function(B,C,I,S,k,F){if(B<-9999||B>9999)return y(B,a.LIST_STYLE_TYPE.CJK_DECIMAL,k.length>0);var N=Math.abs(B),D=k;if(N===0)return C[0]+D;for(var z=0;N>0&&z<=4;z++){var Y=N%10;Y===0&&(0,t.contains)(F,m)&&D!==""?D=C[Y]+D:Y>1||Y===1&&z===0||Y===1&&z===1&&(0,t.contains)(F,w)||Y===1&&z===1&&(0,t.contains)(F,x)&&B>100||Y===1&&z>1&&(0,t.contains)(F,_)?D=C[Y]+(z>0?I[z-1]:"")+D:Y===1&&z>0&&(D=I[z-1]+D),N=Math.floor(N/10)}return(B<0?S:"")+D},E="十百千萬",U="拾佰仟萬",H="マイナス",T="마이너스 ",y=Mt.createCounterText=function(B,C,I){var S=I?". ":"",k=I?"、":"",F=I?", ":"";switch(C){case a.LIST_STYLE_TYPE.DISC:return"•";case a.LIST_STYLE_TYPE.CIRCLE:return"◦";case a.LIST_STYLE_TYPE.SQUARE:return"◾";case a.LIST_STYLE_TYPE.DECIMAL_LEADING_ZERO:var N=p(B,48,57,!0,S);return N.length<4?"0"+N:N;case a.LIST_STYLE_TYPE.CJK_DECIMAL:return v(B,"〇一二三四五六七八九",k);case a.LIST_STYLE_TYPE.LOWER_ROMAN:return g(B,1,3999,c,a.LIST_STYLE_TYPE.DECIMAL,S).toLowerCase();case a.LIST_STYLE_TYPE.UPPER_ROMAN:return g(B,1,3999,c,a.LIST_STYLE_TYPE.DECIMAL,S);case a.LIST_STYLE_TYPE.LOWER_GREEK:return p(B,945,969,!1,S);case a.LIST_STYLE_TYPE.LOWER_ALPHA:return p(B,97,122,!1,S);case a.LIST_STYLE_TYPE.UPPER_ALPHA:return p(B,65,90,!1,S);case a.LIST_STYLE_TYPE.ARABIC_INDIC:return p(B,1632,1641,!0,S);case a.LIST_STYLE_TYPE.ARMENIAN:case a.LIST_STYLE_TYPE.UPPER_ARMENIAN:return g(B,1,9999,u,a.LIST_STYLE_TYPE.DECIMAL,S);case a.LIST_STYLE_TYPE.LOWER_ARMENIAN:return g(B,1,9999,u,a.LIST_STYLE_TYPE.DECIMAL,S).toLowerCase();case a.LIST_STYLE_TYPE.BENGALI:return p(B,2534,2543,!0,S);case a.LIST_STYLE_TYPE.CAMBODIAN:case a.LIST_STYLE_TYPE.KHMER:return p(B,6112,6121,!0,S);case a.LIST_STYLE_TYPE.CJK_EARTHLY_BRANCH:return v(B,"子丑寅卯辰巳午未申酉戌亥",k);case a.LIST_STYLE_TYPE.CJK_HEAVENLY_STEM:return v(B,"甲乙丙丁戊己庚辛壬癸",k);case a.LIST_STYLE_TYPE.CJK_IDEOGRAPHIC:case a.LIST_STYLE_TYPE.TRAD_CHINESE_INFORMAL:return b(B,"零一二三四五六七八九",E,"負",k,w|x|_);case a.LIST_STYLE_TYPE.TRAD_CHINESE_FORMAL:return b(B,"零壹貳參肆伍陸柒捌玖",U,"負",k,m|w|x|_);case a.LIST_STYLE_TYPE.SIMP_CHINESE_INFORMAL:return b(B,"零一二三四五六七八九",E,"负",k,w|x|_);case a.LIST_STYLE_TYPE.SIMP_CHINESE_FORMAL:return b(B,"零壹贰叁肆伍陆柒捌玖",U,"负",k,m|w|x|_);case a.LIST_STYLE_TYPE.JAPANESE_INFORMAL:return b(B,"〇一二三四五六七八九","十百千万",H,k,0);case a.LIST_STYLE_TYPE.JAPANESE_FORMAL:return b(B,"零壱弐参四伍六七八九","拾百千万",H,k,m|w|x);case a.LIST_STYLE_TYPE.KOREAN_HANGUL_FORMAL:return b(B,"영일이삼사오육칠팔구","십백천만",T,F,m|w|x);case a.LIST_STYLE_TYPE.KOREAN_HANJA_INFORMAL:return b(B,"零一二三四五六七八九","十百千萬",T,F,0);case a.LIST_STYLE_TYPE.KOREAN_HANJA_FORMAL:return b(B,"零壹貳參四五六七八九","拾百千",T,F,m|w|x);case a.LIST_STYLE_TYPE.DEVANAGARI:return p(B,2406,2415,!0,S);case a.LIST_STYLE_TYPE.GEORGIAN:return g(B,1,19999,h,a.LIST_STYLE_TYPE.DECIMAL,S);case a.LIST_STYLE_TYPE.GUJARATI:return p(B,2790,2799,!0,S);case a.LIST_STYLE_TYPE.GURMUKHI:return p(B,2662,2671,!0,S);case a.LIST_STYLE_TYPE.HEBREW:return g(B,1,10999,d,a.LIST_STYLE_TYPE.DECIMAL,S);case a.LIST_STYLE_TYPE.HIRAGANA:return v(B,"あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん");case a.LIST_STYLE_TYPE.HIRAGANA_IROHA:return v(B,"いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす");case a.LIST_STYLE_TYPE.KANNADA:return p(B,3302,3311,!0,S);case a.LIST_STYLE_TYPE.KATAKANA:return v(B,"アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン",k);case a.LIST_STYLE_TYPE.KATAKANA_IROHA:return v(B,"イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス",k);case a.LIST_STYLE_TYPE.LAO:return p(B,3792,3801,!0,S);case a.LIST_STYLE_TYPE.MONGOLIAN:return p(B,6160,6169,!0,S);case a.LIST_STYLE_TYPE.MYANMAR:return p(B,4160,4169,!0,S);case a.LIST_STYLE_TYPE.ORIYA:return p(B,2918,2927,!0,S);case a.LIST_STYLE_TYPE.PERSIAN:return p(B,1776,1785,!0,S);case a.LIST_STYLE_TYPE.TAMIL:return p(B,3046,3055,!0,S);case a.LIST_STYLE_TYPE.TELUGU:return p(B,3174,3183,!0,S);case a.LIST_STYLE_TYPE.THAI:return p(B,3664,3673,!0,S);case a.LIST_STYLE_TYPE.TIBETAN:return p(B,3872,3881,!0,S);case a.LIST_STYLE_TYPE.DECIMAL:default:return p(B,48,57,!0,S)}};return Mt}var $c;function hr(){if($c)return bn;$c=1,Object.defineProperty(bn,"__esModule",{value:!0});var t=function(){function k(F,N){for(var D=0;D<N.length;D++){var z=N[D];z.enumerable=z.enumerable||!1,z.configurable=!0,"value"in z&&(z.writable=!0),Object.defineProperty(F,z.key,z)}}return function(F,N,D){return N&&k(F.prototype,N),D&&k(F,D),F}}(),e=bt,i=Q(e),r=yt,n=on(),a=It,o=kb(),s=Ya,A=Va,l=NA,c=LA,u=Wa,d=Ja(),h=Mb(),g=ja,f=sn,p=Jd(),v=Za,m=dt,w=qa,x=An,_=Ob(),b=eo,E=to,U=MA,H=he,T=dh(),y=GA();function Q(k){return k&&k.__esModule?k:{default:k}}function B(k,F){if(!(k instanceof F))throw new TypeError("Cannot call a class as a function")}var C=["INPUT","TEXTAREA","SELECT"],I=function(){function k(F,N,D,z){var Y=this;B(this,k),this.parent=N,this.tagName=F.tagName,this.index=z,this.childNodes=[],this.listItems=[],typeof F.start=="number"&&(this.listStart=F.start);var ae=F.ownerDocument.defaultView,R=ae.pageXOffset,se=ae.pageYOffset,X=ae.getComputedStyle(F,null),Se=(0,s.parseDisplay)(X.display),$e=F.type==="radio"||F.type==="checkbox",$=(0,v.parsePosition)(X.position);if(this.style={background:$e?T.INPUT_BACKGROUND:(0,n.parseBackground)(X,D),border:$e?T.INPUT_BORDERS:(0,a.parseBorder)(X),borderRadius:(F instanceof ae.HTMLInputElement||F instanceof HTMLInputElement)&&$e?(0,T.getInputBorderRadius)(F):(0,o.parseBorderRadius)(X),color:$e?T.INPUT_COLOR:new i.default(X.color),display:Se,float:(0,A.parseCSSFloat)(X.float),font:(0,l.parseFont)(X),letterSpacing:(0,c.parseLetterSpacing)(X.letterSpacing),listStyle:Se===s.DISPLAY.LIST_ITEM?(0,d.parseListStyle)(X):null,lineBreak:(0,u.parseLineBreak)(X.lineBreak),margin:(0,h.parseMargin)(X),opacity:parseFloat(X.opacity),overflow:C.indexOf(F.tagName)===-1?(0,g.parseOverflow)(X.overflow):g.OVERFLOW.HIDDEN,overflowWrap:(0,f.parseOverflowWrap)(X.overflowWrap?X.overflowWrap:X.wordWrap),padding:(0,p.parsePadding)(X),position:$,textDecoration:(0,m.parseTextDecoration)(X),textShadow:(0,w.parseTextShadow)(X.textShadow),textTransform:(0,x.parseTextTransform)(X.textTransform),transform:(0,_.parseTransform)(X),visibility:(0,b.parseVisibility)(X.visibility),wordBreak:(0,E.parseWordBreak)(X.wordBreak),zIndex:(0,U.parseZIndex)($!==v.POSITION.STATIC?X.zIndex:"auto")},this.isTransformed()&&(F.style.transform="matrix(1,0,0,1,0,0)"),Se===s.DISPLAY.LIST_ITEM){var K=(0,y.getListOwner)(this);if(K){var W=K.listItems.length;K.listItems.push(this),this.listIndex=F.hasAttribute("value")&&typeof F.value=="number"?F.value:W===0?typeof K.listStart=="number"?K.listStart:1:K.listItems[W-1].listIndex+1}}F.tagName==="IMG"&&F.addEventListener("load",function(){Y.bounds=(0,H.parseBounds)(F,R,se),Y.curvedBounds=(0,H.parseBoundCurves)(Y.bounds,Y.style.border,Y.style.borderRadius)}),this.image=S(F,D),this.bounds=$e?(0,T.reformatInputBounds)((0,H.parseBounds)(F,R,se)):(0,H.parseBounds)(F,R,se),this.curvedBounds=(0,H.parseBoundCurves)(this.bounds,this.style.border,this.style.borderRadius)}return t(k,[{key:"getClipPaths",value:function(){var N=this.parent?this.parent.getClipPaths():[],D=this.style.overflow!==g.OVERFLOW.VISIBLE;return D?N.concat([(0,H.calculatePaddingBoxPath)(this.curvedBounds)]):N}},{key:"isInFlow",value:function(){return this.isRootElement()&&!this.isFloating()&&!this.isAbsolutelyPositioned()}},{key:"isVisible",value:function(){return!(0,r.contains)(this.style.display,s.DISPLAY.NONE)&&this.style.opacity>0&&this.style.visibility===b.VISIBILITY.VISIBLE}},{key:"isAbsolutelyPositioned",value:function(){return this.style.position!==v.POSITION.STATIC&&this.style.position!==v.POSITION.RELATIVE}},{key:"isPositioned",value:function(){return this.style.position!==v.POSITION.STATIC}},{key:"isFloating",value:function(){return this.style.float!==A.FLOAT.NONE}},{key:"isRootElement",value:function(){return this.parent===null}},{key:"isTransformed",value:function(){return this.style.transform!==null}},{key:"isPositionedWithZIndex",value:function(){return this.isPositioned()&&!this.style.zIndex.auto}},{key:"isInlineLevel",value:function(){return(0,r.contains)(this.style.display,s.DISPLAY.INLINE)||(0,r.contains)(this.style.display,s.DISPLAY.INLINE_BLOCK)||(0,r.contains)(this.style.display,s.DISPLAY.INLINE_FLEX)||(0,r.contains)(this.style.display,s.DISPLAY.INLINE_GRID)||(0,r.contains)(this.style.display,s.DISPLAY.INLINE_LIST_ITEM)||(0,r.contains)(this.style.display,s.DISPLAY.INLINE_TABLE)}},{key:"isInlineBlockOrInlineTable",value:function(){return(0,r.contains)(this.style.display,s.DISPLAY.INLINE_BLOCK)||(0,r.contains)(this.style.display,s.DISPLAY.INLINE_TABLE)}}]),k}();bn.default=I;var S=function(F,N){if(F instanceof F.ownerDocument.defaultView.SVGSVGElement||F instanceof SVGSVGElement){var D=(0,H.parseBounds)(F,0,0);F.setAttribute("width",D.width+"px"),F.setAttribute("height",D.height+"px");var z=new XMLSerializer;return N.loadImage("data:image/svg+xml,"+encodeURIComponent(z.serializeToString(F)))}switch(F.tagName){case"IMG":var Y=F;return N.loadImage(Y.currentSrc||Y.src);case"CANVAS":var ae=F;return N.loadCanvas(ae);case"IFRAME":var R=F.getAttribute("data-html2canvas-internal-iframe-key");if(R)return R;break}return null};return bn}Object.defineProperty(SA,"__esModule",{value:!0});var Qy=function(){function t(e,i){for(var r=0;r<i.length;r++){var n=i[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,i,r){return i&&t(e.prototype,i),r&&t(e,r),e}}(),Fy=hr();Uy(Fy);function Uy(t){return t&&t.__esModule?t:{default:t}}function Iy(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var Sy=function(){function t(e,i,r){Iy(this,t),this.container=e,this.parent=i,this.contexts=[],this.children=[],this.treatAsRealStackingContext=r}return Qy(t,[{key:"getOpacity",value:function(){return this.parent?this.container.style.opacity*this.parent.getOpacity():this.container.style.opacity}},{key:"getRealParentStackingContext",value:function(){return!this.parent||this.treatAsRealStackingContext?this:this.parent.getRealParentStackingContext()}}]),t}();SA.default=Sy;Object.defineProperty(Xa,"__esModule",{value:!0});Xa.NodeParser=void 0;var ky=SA,Hs=YA(ky),Hy=hr(),_a=YA(Hy),Ny=no(),Ly=YA(Ny),$o=dh(),My=GA(),Ry=Ja();function YA(t){return t&&t.__esModule?t:{default:t}}Xa.NodeParser=function(e,i,r){var n=0,a=new _a.default(e,null,i,n++),o=new Hs.default(a,null,!0);return $y(e,a,o,i,n),o};var Dy=["SCRIPT","HEAD","TITLE","OBJECT","BR","OPTION"],$y=function t(e,i,r,n,a){for(var o=e.firstChild,s;o;o=s){s=o.nextSibling;var A=o.ownerDocument.defaultView;if(o instanceof A.Text||o instanceof Text||A.parent&&o instanceof A.parent.Text)o.data.trim().length>0&&i.childNodes.push(Ly.default.fromTextNode(o,i));else if(o instanceof A.HTMLElement||o instanceof HTMLElement||A.parent&&o instanceof A.parent.HTMLElement){if(Dy.indexOf(o.nodeName)===-1){var l=new _a.default(o,i,n,a++);if(l.isVisible()){o.tagName==="INPUT"?(0,$o.inlineInputElement)(o,l):o.tagName==="TEXTAREA"?(0,$o.inlineTextAreaElement)(o,l):o.tagName==="SELECT"?(0,$o.inlineSelectElement)(o,l):l.style.listStyle&&l.style.listStyle.listStyleType!==Ry.LIST_STYLE_TYPE.NONE&&(0,My.inlineListItemElement)(o,l,n);var c=o.tagName!=="TEXTAREA",u=Pc(l,o);if(u||Oc(l)){var d=u||l.isPositioned()?r.getRealParentStackingContext():r,h=new Hs.default(l,d,u);d.contexts.push(h),c&&t(o,l,h,n,a)}else r.children.push(l),c&&t(o,l,r,n,a)}}}else if(o instanceof A.SVGSVGElement||o instanceof SVGSVGElement||A.parent&&o instanceof A.parent.SVGSVGElement){var g=new _a.default(o,i,n,a++),f=Pc(g,o);if(f||Oc(g)){var p=f||g.isPositioned()?r.getRealParentStackingContext():r,v=new Hs.default(g,p,f);p.contexts.push(v)}else r.children.push(g)}}},Pc=function(e,i){return e.isRootElement()||e.isPositionedWithZIndex()||e.style.opacity<1||e.isTransformed()||Py(e,i)},Oc=function(e){return e.isPositioned()||e.isFloating()},Py=function(e,i){return i.nodeName==="BODY"&&e.parent instanceof _a.default&&e.parent.style.background.backgroundColor.isTransparent()},VA={},ao={};Object.defineProperty(ao,"__esModule",{value:!0});ao.FontMetrics=void 0;var Oy=function(){function t(e,i){for(var r=0;r<i.length;r++){var n=i[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,i,r){return i&&t(e.prototype,i),r&&t(e,r),e}}(),zy=yt;function Ky(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var zc="Hidden Text";ao.FontMetrics=function(){function t(e){Ky(this,t),this._data={},this._document=e}return Oy(t,[{key:"_parseMetrics",value:function(i){var r=this._document.createElement("div"),n=this._document.createElement("img"),a=this._document.createElement("span"),o=this._document.body;if(!o)throw new Error("");r.style.visibility="hidden",r.style.fontFamily=i.fontFamily,r.style.fontSize=i.fontSize,r.style.margin="0",r.style.padding="0",o.appendChild(r),n.src=zy.SMALL_IMAGE,n.width=1,n.height=1,n.style.margin="0",n.style.padding="0",n.style.verticalAlign="baseline",a.style.fontFamily=i.fontFamily,a.style.fontSize=i.fontSize,a.style.margin="0",a.style.padding="0",a.appendChild(this._document.createTextNode(zc)),r.appendChild(a),r.appendChild(n);var s=n.offsetTop-a.offsetTop+2;r.removeChild(a),r.appendChild(this._document.createTextNode(zc)),r.style.lineHeight="normal",n.style.verticalAlign="super";var A=n.offsetTop-r.offsetTop+2;return o.removeChild(r),{baseline:s,middle:A}}},{key:"getMetrics",value:function(i){var r=i.fontFamily+" "+i.fontSize;return this._data[r]===void 0&&(this._data[r]=this._parseMetrics(i)),this._data[r]}}]),t}();var tt={},WA={};Object.defineProperty(WA,"__esModule",{value:!0});var Xy=/([+-]?\d*\.?\d+)(deg|grad|rad|turn)/i;WA.parseAngle=function(e){var i=e.match(Xy);if(i){var r=parseFloat(i[1]);switch(i[2].toLowerCase()){case"deg":return Math.PI*r/180;case"grad":return Math.PI/200*r;case"rad":return r;case"turn":return Math.PI*2*r}}return null};Object.defineProperty(tt,"__esModule",{value:!0});tt.transformWebkitRadialGradientArgs=tt.parseGradient=tt.RadialGradient=tt.LinearGradient=tt.RADIAL_GRADIENT_SHAPE=tt.GRADIENT_TYPE=void 0;var Gy=function(){function t(e,i){var r=[],n=!0,a=!1,o=void 0;try{for(var s=e[Symbol.iterator](),A;!(n=(A=s.next()).done)&&(r.push(A.value),!(i&&r.length===i));n=!0);}catch(l){a=!0,o=l}finally{try{!n&&s.return&&s.return()}finally{if(a)throw o}}return r}return function(e,i){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,i);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),Yy=hr();JA(Yy);var Vy=WA,Wy=bt,Jy=JA(Wy),Mr=Ui(),ti=JA(Mr),st=yt;function JA(t){return t&&t.__esModule?t:{default:t}}function hh(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var jy=/^(to )?(left|top|right|bottom)( (left|top|right|bottom))?$/i,Zy=/^([+-]?\d*\.?\d+)% ([+-]?\d*\.?\d+)%$/i,qy=/(px)|%|( 0)$/i,e_=/^(from|to|color-stop)\((?:([\d.]+)(%)?,\s*)?(.+?)\)$/i,t_=/^\s*(circle|ellipse)?\s*((?:([\d.]+)(px|r?em|%)\s*(?:([\d.]+)(px|r?em|%))?)|closest-side|closest-corner|farthest-side|farthest-corner)?\s*(?:at\s*(?:(left|center|right)|([\d.]+)(px|r?em|%))\s+(?:(top|center|bottom)|([\d.]+)(px|r?em|%)))?(?:\s|$)/i,gh=tt.GRADIENT_TYPE={LINEAR_GRADIENT:0,RADIAL_GRADIENT:1},Tt=tt.RADIAL_GRADIENT_SHAPE={CIRCLE:0,ELLIPSE:1},Kc={left:new ti.default("0%"),top:new ti.default("0%"),center:new ti.default("50%"),right:new ti.default("100%"),bottom:new ti.default("100%")},i_=tt.LinearGradient=function t(e,i){hh(this,t),this.type=gh.LINEAR_GRADIENT,this.colorStops=e,this.direction=i},r_=tt.RadialGradient=function t(e,i,r,n){hh(this,t),this.type=gh.RADIAL_GRADIENT,this.colorStops=e,this.shape=i,this.center=r,this.radius=n};tt.parseGradient=function(e,i,r){var n=i.args,a=i.method,o=i.prefix;if(a==="linear-gradient")return Xc(n,r,!!o);if(a==="gradient"&&n[0]==="linear")return Xc(["to bottom"].concat(Wc(n.slice(3))),r,!!o);if(a==="radial-gradient")return Gc(e,o==="-webkit-"?Vc(n):n,r);if(a==="gradient"&&n[0]==="radial")return Gc(e,Wc(Vc(n.slice(1))),r)};var fh=function(e,i,r){for(var n=[],a=i;a<e.length;a++){var o=e[a],s=qy.test(o),A=o.lastIndexOf(" "),l=new Jy.default(s?o.substring(0,A):o),c=s?new ti.default(o.substring(A+1)):a===i?new ti.default("0%"):a===e.length-1?new ti.default("100%"):null;n.push({color:l,stop:c})}for(var u=n.map(function(w){var x=w.color,_=w.stop,b=r===0?0:_?_.getAbsoluteValue(r)/r:null;return{color:x,stop:b}}),d=u[0].stop,h=0;h<u.length;h++)if(d!==null){var g=u[h].stop;if(g===null){for(var f=h;u[f].stop===null;)f++;for(var p=f-h+1,v=u[f].stop,m=(v-d)/p;h<f;h++)d=u[h].stop=d+m}else d=g}return u},Xc=function(e,i,r){var n=(0,Vy.parseAngle)(e[0]),a=jy.test(e[0]),o=a||n!==null||Zy.test(e[0]),s=o?n!==null?ft(r?n-Math.PI*.5:n,i):a?n_(e[0],i):a_(e[0],i):ft(Math.PI,i),A=o?1:0,l=Math.min((0,st.distance)(Math.abs(s.x0)+Math.abs(s.x1),Math.abs(s.y0)+Math.abs(s.y1)),i.width*2,i.height*2);return new i_(fh(e,A,l),s)},Gc=function(e,i,r){var n=i[0].match(t_),a=n&&(n[1]==="circle"||n[3]!==void 0&&n[5]===void 0)?Tt.CIRCLE:Tt.ELLIPSE,o={},s={};n&&(n[3]!==void 0&&(o.x=(0,Mr.calculateLengthFromValueWithUnit)(e,n[3],n[4]).getAbsoluteValue(r.width)),n[5]!==void 0&&(o.y=(0,Mr.calculateLengthFromValueWithUnit)(e,n[5],n[6]).getAbsoluteValue(r.height)),n[7]?s.x=Kc[n[7].toLowerCase()]:n[8]!==void 0&&(s.x=(0,Mr.calculateLengthFromValueWithUnit)(e,n[8],n[9])),n[10]?s.y=Kc[n[10].toLowerCase()]:n[11]!==void 0&&(s.y=(0,Mr.calculateLengthFromValueWithUnit)(e,n[11],n[12])));var A={x:s.x===void 0?r.width/2:s.x.getAbsoluteValue(r.width),y:s.y===void 0?r.height/2:s.y.getAbsoluteValue(r.height)},l=o_(n&&n[2]||"farthest-corner",a,A,o,r);return new r_(fh(i,n?1:0,Math.min(l.x,l.y)),a,A,l)},ft=function(e,i){var r=i.width,n=i.height,a=r*.5,o=n*.5,s=Math.abs(r*Math.sin(e))+Math.abs(n*Math.cos(e)),A=s/2,l=a+Math.sin(e)*A,c=o-Math.cos(e)*A,u=r-l,d=n-c;return{x0:l,x1:u,y0:c,y1:d}},Sn=function(e){return Math.acos(e.width/2/((0,st.distance)(e.width,e.height)/2))},n_=function(e,i){switch(e){case"bottom":case"to top":return ft(0,i);case"left":case"to right":return ft(Math.PI/2,i);case"right":case"to left":return ft(3*Math.PI/2,i);case"top right":case"right top":case"to bottom left":case"to left bottom":return ft(Math.PI+Sn(i),i);case"top left":case"left top":case"to bottom right":case"to right bottom":return ft(Math.PI-Sn(i),i);case"bottom left":case"left bottom":case"to top right":case"to right top":return ft(Sn(i),i);case"bottom right":case"right bottom":case"to top left":case"to left top":return ft(2*Math.PI-Sn(i),i);case"top":case"to bottom":default:return ft(Math.PI,i)}},a_=function(e,i){var r=e.split(" ").map(parseFloat),n=Gy(r,2),a=n[0],o=n[1],s=a/100*i.width/(o/100*i.height);return ft(Math.atan(isNaN(s)?1:s)+Math.PI/2,i)},Yc=function(e,i,r,n){var a=[{x:0,y:0},{x:0,y:e.height},{x:e.width,y:0},{x:e.width,y:e.height}];return a.reduce(function(o,s){var A=(0,st.distance)(i-s.x,r-s.y);return(n?A<o.optimumDistance:A>o.optimumDistance)?{optimumCorner:s,optimumDistance:A}:o},{optimumDistance:n?1/0:-1/0,optimumCorner:null}).optimumCorner},o_=function(e,i,r,n,a){var o=r.x,s=r.y,A=0,l=0;switch(e){case"closest-side":i===Tt.CIRCLE?A=l=Math.min(Math.abs(o),Math.abs(o-a.width),Math.abs(s),Math.abs(s-a.height)):i===Tt.ELLIPSE&&(A=Math.min(Math.abs(o),Math.abs(o-a.width)),l=Math.min(Math.abs(s),Math.abs(s-a.height)));break;case"closest-corner":if(i===Tt.CIRCLE)A=l=Math.min((0,st.distance)(o,s),(0,st.distance)(o,s-a.height),(0,st.distance)(o-a.width,s),(0,st.distance)(o-a.width,s-a.height));else if(i===Tt.ELLIPSE){var c=Math.min(Math.abs(s),Math.abs(s-a.height))/Math.min(Math.abs(o),Math.abs(o-a.width)),u=Yc(a,o,s,!0);A=(0,st.distance)(u.x-o,(u.y-s)/c),l=c*A}break;case"farthest-side":i===Tt.CIRCLE?A=l=Math.max(Math.abs(o),Math.abs(o-a.width),Math.abs(s),Math.abs(s-a.height)):i===Tt.ELLIPSE&&(A=Math.max(Math.abs(o),Math.abs(o-a.width)),l=Math.max(Math.abs(s),Math.abs(s-a.height)));break;case"farthest-corner":if(i===Tt.CIRCLE)A=l=Math.max((0,st.distance)(o,s),(0,st.distance)(o,s-a.height),(0,st.distance)(o-a.width,s),(0,st.distance)(o-a.width,s-a.height));else if(i===Tt.ELLIPSE){var d=Math.max(Math.abs(s),Math.abs(s-a.height))/Math.max(Math.abs(o),Math.abs(o-a.width)),h=Yc(a,o,s,!1);A=(0,st.distance)(h.x-o,(h.y-s)/d),l=d*A}break;default:A=n.x||0,l=n.y!==void 0?n.y:A;break}return{x:A,y:l}},Vc=tt.transformWebkitRadialGradientArgs=function(e){var i="",r="",n="",a="",o=0,s=/^(left|center|right|\d+(?:px|r?em|%)?)(?:\s+(top|center|bottom|\d+(?:px|r?em|%)?))?$/i,A=/^(circle|ellipse)?\s*(closest-side|closest-corner|farthest-side|farthest-corner|contain|cover)?$/i,l=/^\d+(px|r?em|%)?(?:\s+\d+(px|r?em|%)?)?$/i,c=e[o].match(s);c&&o++;var u=e[o].match(A);u&&(i=u[1]||"",n=u[2]||"",n==="contain"?n="closest-side":n==="cover"&&(n="farthest-corner"),o++);var d=e[o].match(l);d&&o++;var h=e[o].match(s);h&&o++;var g=e[o].match(l);g&&o++;var f=h||c;f&&f[1]&&(a=f[1]+(/^\d+$/.test(f[1])?"px":""),f[2]&&(a+=" "+f[2]+(/^\d+$/.test(f[2])?"px":"")));var p=g||d;return p&&(r=p[0],p[1]||(r+="px")),a&&!i&&!r&&!n&&(r=a,a=""),a&&(a="at "+a),[[i,n,r,a].filter(function(v){return!!v}).join(" ")].concat(e.slice(o))},Wc=function(e){return e.map(function(i){return i.match(e_)}).map(function(i,r){if(!i)return e[r];switch(i[1]){case"from":return i[4]+" 0%";case"to":return i[4]+" 100%";case"color-stop":return i[3]==="%"?i[4]+" "+i[2]:i[4]+" "+parseFloat(i[2])*100+"%"}})};Object.defineProperty(VA,"__esModule",{value:!0});var Jc=function(){function t(e,i){var r=[],n=!0,a=!1,o=void 0;try{for(var s=e[Symbol.iterator](),A;!(n=(A=s.next()).done)&&(r.push(A.value),!(i&&r.length===i));n=!0);}catch(l){a=!0,o=l}finally{try{!n&&s.return&&s.return()}finally{if(a)throw o}}return r}return function(e,i){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,i);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),s_=function(){function t(e,i){for(var r=0;r<i.length;r++){var n=i[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,i,r){return i&&t(e.prototype,i),r&&t(e,r),e}}(),Qr=he,Po=tt,A_=no(),l_=c_(A_),Wt=on(),jc=It;function c_(t){return t&&t.__esModule?t:{default:t}}function u_(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var d_=function(){function t(e,i){u_(this,t),this.target=e,this.options=i,e.render(i)}return s_(t,[{key:"renderNode",value:function(i){i.isVisible()&&(this.renderNodeBackgroundAndBorders(i),this.renderNodeContent(i))}},{key:"renderNodeContent",value:function(i){var r=this,n=function(){if(i.childNodes.length&&i.childNodes.forEach(function(u){if(u instanceof l_.default){var d=u.parent.style;r.target.renderTextNode(u.bounds,d.color,d.font,d.textDecoration,d.textShadow)}else r.target.drawShape(u,i.style.color)}),i.image){var s=r.options.imageStore.get(i.image);if(s){var A=(0,Qr.calculateContentBox)(i.bounds,i.style.padding,i.style.border),l=typeof s.width=="number"&&s.width>0?s.width:A.width,c=typeof s.height=="number"&&s.height>0?s.height:A.height;l>0&&c>0&&r.target.clip([(0,Qr.calculatePaddingBoxPath)(i.curvedBounds)],function(){r.target.drawImage(s,new Qr.Bounds(0,0,l,c),A)})}}},a=i.getClipPaths();a.length?this.target.clip(a,n):n()}},{key:"renderNodeBackgroundAndBorders",value:function(i){var r=this,n=!i.style.background.backgroundColor.isTransparent()||i.style.background.backgroundImage.length,a=i.style.border.some(function(A){return A.borderStyle!==jc.BORDER_STYLE.NONE&&!A.borderColor.isTransparent()}),o=function(){var l=(0,Wt.calculateBackgroungPaintingArea)(i.curvedBounds,i.style.background.backgroundClip);n&&r.target.clip([l],function(){i.style.background.backgroundColor.isTransparent()||r.target.fill(i.style.background.backgroundColor),r.renderBackgroundImage(i)}),i.style.border.forEach(function(c,u){c.borderStyle!==jc.BORDER_STYLE.NONE&&!c.borderColor.isTransparent()&&r.renderBorder(c,u,i.curvedBounds)})};if(n||a){var s=i.parent?i.parent.getClipPaths():[];s.length?this.target.clip(s,o):o()}}},{key:"renderBackgroundImage",value:function(i){var r=this;i.style.background.backgroundImage.slice(0).reverse().forEach(function(n){n.source.method==="url"&&n.source.args.length?r.renderBackgroundRepeat(i,n):/gradient/i.test(n.source.method)&&r.renderBackgroundGradient(i,n)})}},{key:"renderBackgroundRepeat",value:function(i,r){var n=this.options.imageStore.get(r.source.args[0]);if(n){var a=(0,Wt.calculateBackgroungPositioningArea)(i.style.background.backgroundOrigin,i.bounds,i.style.padding,i.style.border),o=(0,Wt.calculateBackgroundSize)(r,n,a),s=(0,Wt.calculateBackgroundPosition)(r.position,o,a),A=(0,Wt.calculateBackgroundRepeatPath)(r,s,o,a,i.bounds),l=Math.round(a.left+s.x),c=Math.round(a.top+s.y);this.target.renderRepeat(A,n,o,l,c)}}},{key:"renderBackgroundGradient",value:function(i,r){var n=(0,Wt.calculateBackgroungPositioningArea)(i.style.background.backgroundOrigin,i.bounds,i.style.padding,i.style.border),a=(0,Wt.calculateGradientBackgroundSize)(r,n),o=(0,Wt.calculateBackgroundPosition)(r.position,a,n),s=new Qr.Bounds(Math.round(n.left+o.x),Math.round(n.top+o.y),a.width,a.height),A=(0,Po.parseGradient)(i,r.source,s);if(A)switch(A.type){case Po.GRADIENT_TYPE.LINEAR_GRADIENT:this.target.renderLinearGradient(s,A);break;case Po.GRADIENT_TYPE.RADIAL_GRADIENT:this.target.renderRadialGradient(s,A);break}}},{key:"renderBorder",value:function(i,r,n){this.target.drawShape((0,Qr.parsePathForBorder)(n,r),i.borderColor)}},{key:"renderStack",value:function(i){var r=this;if(i.container.isVisible()){var n=i.getOpacity();n!==this._opacity&&(this.target.setOpacity(i.getOpacity()),this._opacity=n);var a=i.container.style.transform;a!==null?this.target.transform(i.container.bounds.left+a.transformOrigin[0].value,i.container.bounds.top+a.transformOrigin[1].value,a.transform,function(){return r.renderStackContent(i)}):this.renderStackContent(i)}}},{key:"renderStackContent",value:function(i){var r=g_(i),n=Jc(r,5),a=n[0],o=n[1],s=n[2],A=n[3],l=n[4],c=h_(i),u=Jc(c,2),d=u[0],h=u[1];this.renderNodeBackgroundAndBorders(i.container),a.sort(Zc).forEach(this.renderStack,this),this.renderNodeContent(i.container),h.forEach(this.renderNode,this),A.forEach(this.renderStack,this),l.forEach(this.renderStack,this),d.forEach(this.renderNode,this),o.forEach(this.renderStack,this),s.sort(Zc).forEach(this.renderStack,this)}},{key:"render",value:function(i){this.options.backgroundColor&&this.target.rectangle(this.options.x,this.options.y,this.options.width,this.options.height,this.options.backgroundColor),this.renderStack(i);var r=this.target.getTarget();return r}}]),t}();VA.default=d_;var h_=function(e){for(var i=[],r=[],n=e.children.length,a=0;a<n;a++){var o=e.children[a];o.isInlineLevel()?i.push(o):r.push(o)}return[i,r]},g_=function(e){for(var i=[],r=[],n=[],a=[],o=[],s=e.contexts.length,A=0;A<s;A++){var l=e.contexts[A];l.container.isPositioned()||l.container.style.opacity<1||l.container.isTransformed()?l.container.style.zIndex.order<0?i.push(l):l.container.style.zIndex.order>0?n.push(l):r.push(l):l.container.isFloating()?a.push(l):o.push(l)}return[i,r,n,a,o]},Zc=function(e,i){return e.container.style.zIndex.order>i.container.style.zIndex.order?1:e.container.style.zIndex.order<i.container.style.zIndex.order?-1:e.container.index>i.container.index?1:-1},ar={},ln={};Object.defineProperty(ln,"__esModule",{value:!0});ln.Proxy=void 0;var f_=ur,Oo=p_(f_);function p_(t){return t&&t.__esModule?t:{default:t}}ln.Proxy=function(e,i){if(!i.proxy)return Promise.reject(null);var r=i.proxy;return new Promise(function(n,a){var o=Oo.default.SUPPORT_CORS_XHR&&Oo.default.SUPPORT_RESPONSE_TYPE?"blob":"text",s=Oo.default.SUPPORT_CORS_XHR?new XMLHttpRequest:new XDomainRequest;if(s.onload=function(){if(s instanceof XMLHttpRequest)if(s.status===200)if(o==="text")n(s.response);else{var l=new FileReader;l.addEventListener("load",function(){return n(l.result)},!1),l.addEventListener("error",function(c){return a(c)},!1),l.readAsDataURL(s.response)}else a("");else n(s.responseText)},s.onerror=a,s.open("GET",r+"?url="+encodeURIComponent(e)+"&responseType="+o),o!=="text"&&s instanceof XMLHttpRequest&&(s.responseType=o),i.imageTimeout){var A=i.imageTimeout;s.timeout=A,s.ontimeout=function(){return a("")}}s.send()})};var cn={};Object.defineProperty(cn,"__esModule",{value:!0});cn.ResourceStore=void 0;var ph=function(){function t(e,i){for(var r=0;r<i.length;r++){var n=i[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,i,r){return i&&t(e.prototype,i),r&&t(e,r),e}}(),v_=ur,zo=m_(v_),qc=ln;function m_(t){return t&&t.__esModule?t:{default:t}}function vh(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var x_=function(){function t(e,i,r){vh(this,t),this.options=e,this._window=r,this.origin=this.getOrigin(r.location.href),this.cache={},this.logger=i,this._index=0}return ph(t,[{key:"loadImage",value:function(i){var r=this;if(this.hasResourceInCache(i))return i;if(!tu(i)||zo.default.SUPPORT_SVG_DRAWING){if(this.options.allowTaint===!0||eu(i)||this.isSameOrigin(i))return this.addImage(i,i,!1);if(!this.isSameOrigin(i)){if(typeof this.options.proxy=="string")return this.cache[i]=(0,qc.Proxy)(i,this.options).then(function(n){return kn(n,r.options.imageTimeout||0)}),i;if(this.options.useCORS===!0&&zo.default.SUPPORT_CORS_IMAGES)return this.addImage(i,i,!0)}}}},{key:"inlineImage",value:function(i){var r=this;return eu(i)?kn(i,this.options.imageTimeout||0):this.hasResourceInCache(i)?this.cache[i]:!this.isSameOrigin(i)&&typeof this.options.proxy=="string"?this.cache[i]=(0,qc.Proxy)(i,this.options).then(function(n){return kn(n,r.options.imageTimeout||0)}):this.xhrImage(i)}},{key:"xhrImage",value:function(i){var r=this;return this.cache[i]=new Promise(function(n,a){var o=new XMLHttpRequest;if(o.onreadystatechange=function(){if(o.readyState===4)if(o.status!==200)a("Failed to fetch image "+i.substring(0,256)+" with status code "+o.status);else{var A=new FileReader;A.addEventListener("load",function(){var l=A.result;n(l)},!1),A.addEventListener("error",function(l){return a(l)},!1),A.readAsDataURL(o.response)}},o.responseType="blob",r.options.imageTimeout){var s=r.options.imageTimeout;o.timeout=s,o.ontimeout=function(){return a("")}}o.open("GET",i,!0),o.send()}).then(function(n){return kn(n,r.options.imageTimeout||0)}),this.cache[i]}},{key:"loadCanvas",value:function(i){var r=String(this._index++);return this.cache[r]=Promise.resolve(i),r}},{key:"hasResourceInCache",value:function(i){return typeof this.cache[i]<"u"}},{key:"addImage",value:function(i,r,n){var a=this,o=function(A){return new Promise(function(l,c){var u=new Image;if(u.onload=function(){return l(u)},(!A||n)&&(u.crossOrigin="anonymous"),u.onerror=c,u.src=r,u.complete===!0&&setTimeout(function(){l(u)},500),a.options.imageTimeout){var d=a.options.imageTimeout;setTimeout(function(){return c("")},d)}})};return this.cache[i]=__(r)&&!tu(r)?zo.default.SUPPORT_BASE64_DRAWING(r).then(o):o(!0),i}},{key:"isSameOrigin",value:function(i){return this.getOrigin(i)===this.origin}},{key:"getOrigin",value:function(i){var r=this._link||(this._link=this._window.document.createElement("a"));return r.href=i,r.href=r.href,r.protocol+r.hostname+r.port}},{key:"ready",value:function(){var i=this,r=Object.keys(this.cache),n=r.map(function(a){return i.cache[a].catch(function(o){return null})});return Promise.all(n).then(function(a){return new B_(r,a)})}}]),t}();cn.default=x_;var B_=cn.ResourceStore=function(){function t(e,i){vh(this,t),this._keys=e,this._resources=i}return ph(t,[{key:"get",value:function(i){var r=this._keys.indexOf(i);return r===-1?null:this._resources[r]}}]),t}(),w_=/^data:image\/svg\+xml/i,b_=/^data:image\/.*;base64,/i,y_=/^data:image\/.*/i,eu=function(e){return y_.test(e)},__=function(e){return b_.test(e)},tu=function(e){return e.substr(-3).toLowerCase()==="svg"||w_.test(e)},kn=function(e,i){return new Promise(function(r,n){var a=new Image;a.onload=function(){return r(a)},a.onerror=n,a.src=e,a.complete===!0&&setTimeout(function(){r(a)},500),i&&setTimeout(function(){return n("")},i)})},it={};Object.defineProperty(it,"__esModule",{value:!0});it.parseContent=it.resolvePseudoContent=it.popCounters=it.parseCounterReset=it.TOKEN_TYPE=it.PSEUDO_CONTENT_ITEM_TYPE=void 0;var mh=function(){function t(e,i){var r=[],n=!0,a=!1,o=void 0;try{for(var s=e[Symbol.iterator](),A;!(n=(A=s.next()).done)&&(r.push(A.value),!(i&&r.length===i));n=!0);}catch(l){a=!0,o=l}finally{try{!n&&s.return&&s.return()}finally{if(a)throw o}}return r}return function(e,i){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,i);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),C_=GA(),T_=Ja(),Ko=it.PSEUDO_CONTENT_ITEM_TYPE={TEXT:0,IMAGE:1},et=it.TOKEN_TYPE={STRING:0,ATTRIBUTE:1,URL:2,COUNTER:3,COUNTERS:4,OPENQUOTE:5,CLOSEQUOTE:6};it.parseCounterReset=function(e,i){if(!e||!e.counterReset||e.counterReset==="none")return[];for(var r=[],n=e.counterReset.split(/\s*,\s*/),a=n.length,o=0;o<a;o++){var s=n[o].split(/\s+/),A=mh(s,2),l=A[0],c=A[1];r.push(l);var u=i.counters[l];u||(u=i.counters[l]=[]),u.push(parseInt(c||0,10))}return r};it.popCounters=function(e,i){for(var r=e.length,n=0;n<r;n++)i.counters[e[n]].pop()};it.resolvePseudoContent=function(e,i,r){if(!i||!i.content||i.content==="none"||i.content==="-moz-alt-content"||i.display==="none")return null;var n=E_(i.content),a=n.length,o=[],s="",A=i.counterIncrement;if(A&&A!=="none"){var l=A.split(/\s+/),c=mh(l,2),u=c[0],d=c[1],h=r.counters[u];h&&(h[h.length-1]+=d===void 0?1:parseInt(d,10))}for(var g=0;g<a;g++){var f=n[g];switch(f.type){case et.STRING:s+=f.value||"";break;case et.ATTRIBUTE:e instanceof HTMLElement&&f.value&&(s+=e.getAttribute(f.value)||"");break;case et.COUNTER:var p=r.counters[f.name||""];p&&(s+=nu([p[p.length-1]],"",f.format));break;case et.COUNTERS:var v=r.counters[f.name||""];v&&(s+=nu(v,f.glue,f.format));break;case et.OPENQUOTE:s+=ru(i,!0,r.quoteDepth),r.quoteDepth++;break;case et.CLOSEQUOTE:r.quoteDepth--,s+=ru(i,!1,r.quoteDepth);break;case et.URL:s&&(o.push({type:Ko.TEXT,value:s}),s=""),o.push({type:Ko.IMAGE,value:f.value||""});break}}return s&&o.push({type:Ko.TEXT,value:s}),o};var E_=it.parseContent=function(e,i){if(i&&i[e])return i[e];for(var r=[],n=e.length,a=!1,o=!1,s=!1,A="",l="",c=[],u=0;u<n;u++){var d=e.charAt(u);switch(d){case"'":case'"':o?A+=d:(a=!a,!s&&!a&&(r.push({type:et.STRING,value:A}),A=""));break;case"\\":o?(A+=d,o=!1):o=!0;break;case"(":a?A+=d:(s=!0,l=A,A="",c=[]);break;case")":if(a)A+=d;else if(s){switch(A&&c.push(A),l){case"attr":c.length>0&&r.push({type:et.ATTRIBUTE,value:c[0]});break;case"counter":if(c.length>0){var h={type:et.COUNTER,name:c[0]};c.length>1&&(h.format=c[1]),r.push(h)}break;case"counters":if(c.length>0){var g={type:et.COUNTERS,name:c[0]};c.length>1&&(g.glue=c[1]),c.length>2&&(g.format=c[2]),r.push(g)}break;case"url":c.length>0&&r.push({type:et.URL,value:c[0]});break}s=!1,A=""}break;case",":a?A+=d:s&&(c.push(A),A="");break;case" ":case"	":a?A+=d:A&&(iu(r,A),A="");break;default:A+=d}d!=="\\"&&(o=!1)}return A&&iu(r,A),i&&(i[e]=r),r},iu=function(e,i){switch(i){case"open-quote":e.push({type:et.OPENQUOTE});break;case"close-quote":e.push({type:et.CLOSEQUOTE});break}},ru=function(e,i,r){var n=e.quotes?e.quotes.split(/\s+/):[`'"'`,`'"'`],a=r*2;return a>=n.length&&(a=n.length-2),i||++a,n[a].replace(/^["']|["']$/g,"")},nu=function(e,i,r){for(var n=e.length,a="",o=0;o<n;o++)o>0&&(a+=i||""),a+=(0,C_.createCounterText)(e[o],(0,T_.parseListStyleType)(r||"decimal"),!1);return a};Object.defineProperty(ar,"__esModule",{value:!0});ar.cloneWindow=ar.DocumentCloner=void 0;var Q_=function(){function t(e,i){var r=[],n=!0,a=!1,o=void 0;try{for(var s=e[Symbol.iterator](),A;!(n=(A=s.next()).done)&&(r.push(A.value),!(i&&r.length===i));n=!0);}catch(l){a=!0,o=l}finally{try{!n&&s.return&&s.return()}finally{if(a)throw o}}return r}return function(e,i){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,i);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),F_=function(){function t(e,i){for(var r=0;r<i.length;r++){var n=i[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,i,r){return i&&t(e.prototype,i),r&&t(e,r),e}}(),xh=he,U_=ln,I_=cn,S_=Bh(I_),Yn=yt,jA=on(),k_=Oa,H_=Bh(k_),Xi=it;function Bh(t){return t&&t.__esModule?t:{default:t}}function N_(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var wh="data-html2canvas-ignore",L_=ar.DocumentCloner=function(){function t(e,i,r,n,a){N_(this,t),this.referenceElement=e,this.scrolledElements=[],this.copyStyles=n,this.inlineImages=n,this.logger=r,this.options=i,this.renderer=a,this.resourceLoader=new S_.default(i,r,window),this.pseudoContentData={counters:{},quoteDepth:0},this.documentElement=this.cloneNode(e.ownerDocument.documentElement)}return F_(t,[{key:"inlineAllImages",value:function(i){var r=this;if(this.inlineImages&&i){var n=i.style;Promise.all((0,jA.parseBackgroundImage)(n.backgroundImage).map(function(a){return a.method==="url"?r.resourceLoader.inlineImage(a.args[0]).then(function(o){return o&&typeof o.src=="string"?'url("'+o.src+'")':"none"}).catch(function(o){}):Promise.resolve(""+a.prefix+a.method+"("+a.args.join(",")+")")})).then(function(a){a.length>1&&(n.backgroundColor=""),n.backgroundImage=a.join(",")}),i instanceof HTMLImageElement&&this.resourceLoader.inlineImage(i.src).then(function(a){if(a&&i instanceof HTMLImageElement&&i.parentNode){var o=i.parentNode,s=(0,Yn.copyCSSStyles)(i.style,a.cloneNode(!1));o.replaceChild(s,i)}}).catch(function(a){})}}},{key:"inlineFonts",value:function(i){var r=this;return Promise.all(Array.from(i.styleSheets).map(function(n){return n.href?fetch(n.href).then(function(a){return a.text()}).then(function(a){return M_(a,n.href)}).catch(function(a){return[]}):bh(n,i)})).then(function(n){return n.reduce(function(a,o){return a.concat(o)},[])}).then(function(n){return Promise.all(n.map(function(a){return fetch(a.formats[0].src).then(function(o){return o.blob()}).then(function(o){return new Promise(function(s,A){var l=new FileReader;l.onerror=A,l.onload=function(){var c=l.result;s(c)},l.readAsDataURL(o)})}).then(function(o){return a.fontFace.setProperty("src",'url("'+o+'")'),"@font-face {"+a.fontFace.cssText+" "})}))}).then(function(n){var a=i.createElement("style");a.textContent=n.join(`
`),r.documentElement.appendChild(a)})}},{key:"createElementClone",value:function(i){var r=this;if(this.copyStyles&&i instanceof HTMLCanvasElement){var n=i.ownerDocument.createElement("img");try{return n.src=i.toDataURL(),n}catch{}}if(i instanceof HTMLIFrameElement){var a=i.cloneNode(!1),o=z_();a.setAttribute("data-html2canvas-internal-iframe-key",o);var s=(0,xh.parseBounds)(i,0,0),A=s.width,l=s.height;return this.resourceLoader.cache[o]=X_(i,this.options).then(function(d){return r.renderer(d,{async:r.options.async,allowTaint:r.options.allowTaint,backgroundColor:"#ffffff",canvas:null,imageTimeout:r.options.imageTimeout,logging:r.options.logging,proxy:r.options.proxy,removeContainer:r.options.removeContainer,scale:r.options.scale,foreignObjectRendering:r.options.foreignObjectRendering,useCORS:r.options.useCORS,target:new H_.default,width:A,height:l,x:0,y:0,windowWidth:d.ownerDocument.defaultView.innerWidth,windowHeight:d.ownerDocument.defaultView.innerHeight,scrollX:d.ownerDocument.defaultView.pageXOffset,scrollY:d.ownerDocument.defaultView.pageYOffset},r.logger.child(o))}).then(function(d){return new Promise(function(h,g){var f=document.createElement("img");f.onload=function(){return h(d)},f.onerror=g,f.src=d.toDataURL(),a.parentNode&&a.parentNode.replaceChild((0,Yn.copyCSSStyles)(i.ownerDocument.defaultView.getComputedStyle(i),f),a)})}),a}if(i instanceof HTMLStyleElement&&i.sheet&&i.sheet.cssRules){var c=[].slice.call(i.sheet.cssRules,0).reduce(function(d,h){return d+h.cssText},""),u=i.cloneNode(!1);return u.textContent=c,u}return i.cloneNode(!1)}},{key:"cloneNode",value:function(i){var r=i.nodeType===Node.TEXT_NODE?document.createTextNode(i.nodeValue):this.createElementClone(i),n=i.ownerDocument.defaultView,a=i instanceof n.HTMLElement?n.getComputedStyle(i):null,o=i instanceof n.HTMLElement?n.getComputedStyle(i,":before"):null,s=i instanceof n.HTMLElement?n.getComputedStyle(i,":after"):null;this.referenceElement===i&&r instanceof n.HTMLElement&&(this.clonedReferenceElement=r),r instanceof n.HTMLBodyElement&&$_(r);for(var A=(0,Xi.parseCounterReset)(a,this.pseudoContentData),l=(0,Xi.resolvePseudoContent)(i,o,this.pseudoContentData),c=i.firstChild;c;c=c.nextSibling)(c.nodeType!==Node.ELEMENT_NODE||c.nodeName!=="SCRIPT"&&!c.hasAttribute(wh)&&(typeof this.options.ignoreElements!="function"||!this.options.ignoreElements(c)))&&(!this.copyStyles||c.nodeName!=="STYLE")&&r.appendChild(this.cloneNode(c));var u=(0,Xi.resolvePseudoContent)(i,s,this.pseudoContentData);if((0,Xi.popCounters)(A,this.pseudoContentData),i instanceof n.HTMLElement&&r instanceof n.HTMLElement)switch(o&&this.inlineAllImages(au(i,r,o,l,Ca)),s&&this.inlineAllImages(au(i,r,s,u,yh)),a&&this.copyStyles&&!(i instanceof HTMLIFrameElement)&&(0,Yn.copyCSSStyles)(a,r),this.inlineAllImages(r),(i.scrollTop!==0||i.scrollLeft!==0)&&this.scrolledElements.push([r,i.scrollLeft,i.scrollTop]),i.nodeName){case"CANVAS":this.copyStyles||D_(i,r);break;case"TEXTAREA":case"SELECT":r.value=i.value;break;case"INPUT":i.checked&&r.setAttribute("checked",!0);break}return r}}]),t}(),bh=function(e,i){return(e.cssRules?Array.from(e.cssRules):[]).filter(function(r){return r.type===CSSRule.FONT_FACE_RULE}).map(function(r){for(var n=(0,jA.parseBackgroundImage)(r.style.getPropertyValue("src")),a=[],o=0;o<n.length;o++)if(n[o].method==="url"&&n[o+1]&&n[o+1].method==="format"){var s=i.createElement("a");s.href=n[o].args[0],i.body&&i.body.appendChild(s);var A={src:s.href,format:n[o+1].args[0]};a.push(A)}return{formats:a.filter(function(l){return/^woff/i.test(l.format)}),fontFace:r.style}}).filter(function(r){return r.formats.length})},M_=function(e,i){var r=document.implementation.createHTMLDocument(""),n=document.createElement("base");n.href=i;var a=document.createElement("style");return a.textContent=e,r.head&&r.head.appendChild(n),r.body&&r.body.appendChild(a),a.sheet?bh(a.sheet,r):[]},R_=function(e,i,r){e.defaultView&&(i!==e.defaultView.pageXOffset||r!==e.defaultView.pageYOffset)&&e.defaultView.scrollTo(i,r)},D_=function(e,i){try{if(i){i.width=e.width,i.height=e.height;var r=e.getContext("2d"),n=i.getContext("2d");r?n.putImageData(r.getImageData(0,0,e.width,e.height),0,0):n.drawImage(e,0,0)}}catch{}},au=function(e,i,r,n,a){if(!(!r||!r.content||r.content==="none"||r.content==="-moz-alt-content"||r.display==="none")){var o=i.ownerDocument.createElement("html2canvaspseudoelement");if((0,Yn.copyCSSStyles)(r,o),n)for(var s=n.length,A=0;A<s;A++){var l=n[A];switch(l.type){case Xi.PSEUDO_CONTENT_ITEM_TYPE.IMAGE:var c=i.ownerDocument.createElement("img");c.src=(0,jA.parseBackgroundImage)("url("+l.value+")")[0].args[0],c.style.opacity="1",o.appendChild(c);break;case Xi.PSEUDO_CONTENT_ITEM_TYPE.TEXT:o.appendChild(i.ownerDocument.createTextNode(l.value));break}}return o.className=Ns+" "+Ls,i.className+=a===Ca?" "+Ns:" "+Ls,a===Ca?i.insertBefore(o,i.firstChild):i.appendChild(o),o}},Ca=":before",yh=":after",Ns="___html2canvas___pseudoelement_before",Ls="___html2canvas___pseudoelement_after",ou=`{
    content: "" !important;
    display: none !important;
}`,$_=function(e){P_(e,"."+Ns+Ca+ou+`
         .`+Ls+yh+ou)},P_=function(e,i){var r=e.ownerDocument.createElement("style");r.innerHTML=i,e.appendChild(r)},O_=function(e){var i=Q_(e,3),r=i[0],n=i[1],a=i[2];r.scrollLeft=n,r.scrollTop=a},z_=function(){return Math.ceil(Date.now()+Math.random()*1e7).toString(16)},K_=/^data:text\/(.+);(base64)?,(.*)$/i,X_=function(e,i){try{return Promise.resolve(e.contentWindow.document.documentElement)}catch{return i.proxy?(0,U_.Proxy)(e.src,i).then(function(n){var a=n.match(K_);return a?a[2]==="base64"?window.atob(decodeURIComponent(a[3])):decodeURIComponent(a[3]):Promise.reject()}).then(function(n){return _h(e.ownerDocument,(0,xh.parseBounds)(e,0,0)).then(function(a){var o=a.contentWindow,s=o.document;s.open(),s.write(n);var A=Ch(a).then(function(){return s.documentElement});return s.close(),A})}):Promise.reject()}},_h=function(e,i){var r=e.createElement("iframe");return r.className="html2canvas-container",r.style.visibility="hidden",r.style.position="fixed",r.style.left="-10000px",r.style.top="0px",r.style.border="0",r.width=i.width.toString(),r.height=i.height.toString(),r.scrolling="no",r.setAttribute(wh,"true"),e.body?(e.body.appendChild(r),Promise.resolve(r)):Promise.reject("")},Ch=function(e){var i=e.contentWindow,r=i.document;return new Promise(function(n,a){i.onload=e.onload=r.onreadystatechange=function(){var o=setInterval(function(){r.body.childNodes.length>0&&r.readyState==="complete"&&(clearInterval(o),n(e))},50)}})};ar.cloneWindow=function(e,i,r,n,a,o){var s=new L_(r,n,a,!1,o),A=e.defaultView.pageXOffset,l=e.defaultView.pageYOffset;return _h(e,i).then(function(c){var u=c.contentWindow,d=u.document,h=Ch(c).then(function(){s.scrolledElements.forEach(O_),u.scrollTo(i.left,i.top),/(iPad|iPhone|iPod)/g.test(navigator.userAgent)&&(u.scrollY!==i.top||u.scrollX!==i.left)&&(d.documentElement.style.top=-i.top+"px",d.documentElement.style.left=-i.left+"px",d.documentElement.style.position="absolute");var g=Promise.resolve([c,s.clonedReferenceElement,s.resourceLoader]),f=n.onclone;return s.clonedReferenceElement instanceof u.HTMLElement||s.clonedReferenceElement instanceof e.defaultView.HTMLElement||s.clonedReferenceElement instanceof HTMLElement?typeof f=="function"?Promise.resolve().then(function(){return f(d)}).then(function(){return g}):g:Promise.reject("")});return d.open(),d.write(G_(document.doctype)+"<html></html>"),R_(r.ownerDocument,A,l),d.replaceChild(d.adoptNode(s.documentElement),d.documentElement),d.close(),h})};var G_=function(e){var i="";return e&&(i+="<!DOCTYPE ",e.name&&(i+=e.name),e.internalSubset&&(i+=e.internalSubset),e.publicId&&(i+='"'+e.publicId+'"'),e.systemId&&(i+='"'+e.systemId+'"'),i+=">"),i};Object.defineProperty(Ka,"__esModule",{value:!0});Ka.renderElement=void 0;var Y_=function(){function t(e,i){var r=[],n=!0,a=!1,o=void 0;try{for(var s=e[Symbol.iterator](),A;!(n=(A=s.next()).done)&&(r.push(A.value),!(i&&r.length===i));n=!0);}catch(l){a=!0,o=l}finally{try{!n&&s.return&&s.return()}finally{if(a)throw o}}return r}return function(e,i){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,i);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),V_=za;un(V_);var W_=Xa,J_=VA,su=un(J_),j_=dr,Z_=un(j_),q_=ur,eC=un(q_),tC=he,Au=ar,iC=ao,Vn=bt,Hn=un(Vn);function un(t){return t&&t.__esModule?t:{default:t}}Ka.renderElement=function t(e,i,r){var n=e.ownerDocument,a=new tC.Bounds(i.scrollX,i.scrollY,i.windowWidth,i.windowHeight),o=n.documentElement?new Hn.default(getComputedStyle(n.documentElement).backgroundColor):Vn.TRANSPARENT,s=n.body?new Hn.default(getComputedStyle(n.body).backgroundColor):Vn.TRANSPARENT,A=e===n.documentElement?o.isTransparent()?s.isTransparent()?i.backgroundColor?new Hn.default(i.backgroundColor):null:s:o:i.backgroundColor?new Hn.default(i.backgroundColor):null;return(i.foreignObjectRendering?eC.default.SUPPORT_FOREIGNOBJECT_DRAWING:Promise.resolve(!1)).then(function(l){return l?function(c){return c.inlineFonts(n).then(function(){return c.resourceLoader.ready()}).then(function(){var u=new Z_.default(c.documentElement);return u.render({backgroundColor:A,logger:r,scale:i.scale,x:i.x,y:i.y,width:i.width,height:i.height,windowWidth:i.windowWidth,windowHeight:i.windowHeight,scrollX:i.scrollX,scrollY:i.scrollY})})}(new Au.DocumentCloner(e,i,r,!0,t)):(0,Au.cloneWindow)(n,a,e,i,r,t).then(function(c){var u=Y_(c,3),d=u[0],h=u[1],g=u[2],f=(0,W_.NodeParser)(h,g,r),p=h.ownerDocument;return A===f.container.style.background.backgroundColor&&(f.container.style.background.backgroundColor=Vn.TRANSPARENT),g.ready().then(function(v){var m=new iC.FontMetrics(p),w={backgroundColor:A,fontMetrics:m,imageStore:v,logger:r,scale:i.scale,x:i.x,y:i.y,width:i.width,height:i.height};if(Array.isArray(i.target))return Promise.all(i.target.map(function(b){var E=new su.default(b,w);return E.render(f)}));var x=new su.default(i.target,w),_=x.render(f);return i.removeContainer===!0&&d.parentNode&&d.parentNode.removeChild(d),_})})})};var rC=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r])}return t},nC=Oa,Th=Eh(nC),aC=za,oC=Eh(aC),sC=Ka,lu=he;function Eh(t){return t&&t.__esModule?t:{default:t}}var Qh=function(e,i){var r=i||{},n=new oC.default(typeof r.logging=="boolean"?r.logging:!0);n.log("html2canvas $npm_package_version");var a=e.ownerDocument;if(!a)return Promise.reject("Provided element is not within a Document");var o=a.defaultView,s=o.pageXOffset,A=o.pageYOffset,l=e.tagName==="HTML"||e.tagName==="BODY",c=l?(0,lu.parseDocumentSize)(a):(0,lu.parseBounds)(e,s,A),u=c.width,d=c.height,h=c.left,g=c.top,f={async:!0,allowTaint:!1,backgroundColor:"#ffffff",imageTimeout:15e3,logging:!0,proxy:null,removeContainer:!0,foreignObjectRendering:!1,scale:o.devicePixelRatio||1,target:new Th.default(r.canvas),useCORS:!1,x:h,y:g,width:Math.ceil(u),height:Math.ceil(d),windowWidth:o.innerWidth,windowHeight:o.innerHeight,scrollX:o.pageXOffset,scrollY:o.pageYOffset},p=(0,sC.renderElement)(e,rC({},f,r),n);return p};Qh.CanvasRenderer=Th.default;var Ms=Qh;const AC=`
.slide {
position: relative;
border: 1px solid #333;
border-radius: 10px;
overflow: hidden;
margin-bottom: 50px;
margin-left: auto;
margin-right: auto;
z-index: 100;
}
.slide div.block {
position: absolute;
top: 0;
left: 0;
width: 100%;
line-height: 1;
}
.slide div.content {
display: flex;
flex-direction: column;
}
.slide div.diagram-content{
display: flex;
flex-direction: column;
}
.slide div.content-rtl {
display: flex;
flex-direction: column;
direction: rtl;
}
.slide .pregraph-rtl{
direction: rtl;
}
.slide .pregraph-ltr{
direction: ltr;
}
.slide .pregraph-inherit{
direction: inherit;
}
.slide .slide-prgrph{
width: 100%;
}
.slide .line-break-br::before{
  content: "\\A";
  white-space: pre;
}
.slide div.v-up {
justify-content: flex-start;
}
.slide div.v-mid {
justify-content: center;
}
.slide div.v-down {
justify-content: flex-end;
}
.slide div.h-left {
justify-content: flex-start;
align-items: flex-start;
text-align: left;
}
.slide div.h-left-rtl {
justify-content: flex-end;
align-items: flex-end;
text-align: left;
}
.slide div.h-mid {
justify-content: center;
align-items: center;
text-align: center;
}
.slide div.h-right {
justify-content: flex-end;
align-items: flex-end;
text-align: right;
}
.slide div.h-right-rtl {
justify-content: flex-start;
align-items: flex-start;
text-align: right;
}
.slide div.h-just,
.slide div.h-dist {
text-align: justify;
}
.slide div.up-left {
justify-content: flex-start;
align-items: flex-start;
text-align: left;
}
.slide div.up-center {
justify-content: flex-start;
align-items: center;
}
.slide div.up-right {
justify-content: flex-start;
align-items: flex-end;
}
.slide div.center-left {
justify-content: center;
align-items: flex-start;
text-align: left;
}
.slide div.center-center {
justify-content: center;
align-items: center;
}
.slide div.center-right {
justify-content: center;
align-items: flex-end;
}
.slide div.down-left {
justify-content: flex-end;
align-items: flex-start;
text-align: left;
}
.slide div.down-center {
justify-content: flex-end;
align-items: center;
}
.slide div.down-right {
justify-content: flex-end;
align-items: flex-end;
}

.slide li.slide {
margin: 10px 0px;
font-size: 18px;
}
.slide table {
position: absolute;
}
.slide svg.drawing {
position: absolute;
overflow: visible;
}`,lC=".bb-color-pattern{background-image:url(#00c73c;#fa7171;#2ad0ff;#7294ce;#e3e448;#cc7e6e;#fb6ccf;#c98dff;#4aea99;#bbbbbb;)}.bb svg{font-family:sans-serif,Arial,nanumgothic,Dotum;font-size:12px;line-height:1}.bb line,.bb path{fill:none;stroke:#c4c4c4}.bb .bb-button,.bb text{fill:#555;font-size:11px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.bb-axis,.bb-bars path,.bb-event-rect,.bb-legend-item-title,.bb-xgrid-focus,.bb-ygrid,.bb-ygrid-focus{shape-rendering:crispEdges}.bb-axis-y text,.bb-axis-y2 text{fill:#737373}.bb-event-rects{fill-opacity:1!important}.bb-event-rects .bb-event-rect{fill:transparent}.bb-event-rects .bb-event-rect._active_{fill:rgba(39,201,3,.05)}.tick._active_ text{fill:#00c83c!important}.bb-grid{pointer-events:none}.bb-grid line{stroke:#f1f1f1}.bb-xgrid-focus line,.bb-ygrid-focus line{stroke:#ddd}.bb-text.bb-empty{fill:#767676}.bb-line{stroke-width:1px}.bb-circle._expanded_{fill:#fff!important;stroke-width:2px;stroke:red}rect.bb-circle._expanded_,use.bb-circle._expanded_{stroke-width:1px}.bb-selected-circle{fill:#fff;stroke-width:2px}.bb-bar{stroke-width:0}.bb-bar._expanded_{fill-opacity:.75}.bb-candlestick{stroke-width:1px}.bb-candlestick._expanded_{fill-opacity:.75}.bb-circles.bb-focused,.bb-target.bb-focused{opacity:1}.bb-circles.bb-focused path.bb-line,.bb-circles.bb-focused path.bb-step,.bb-target.bb-focused path.bb-line,.bb-target.bb-focused path.bb-step{stroke-width:2px}.bb-circles.bb-defocused,.bb-target.bb-defocused{opacity:.3!important}.bb-circles.bb-defocused .text-overlapping,.bb-target.bb-defocused .text-overlapping{opacity:.05!important}.bb-region{fill:#4682b4;fill-opacity:.1}.bb-region.selected rect{fill:#27c903}.bb-brush .extent,.bb-zoom-brush{fill-opacity:.1}.bb-legend-item{user-select:none}.bb-legend-item-hidden{opacity:.15}.bb-legend-background{fill:#fff;stroke:#d3d3d3;stroke-width:1;opacity:.75}.bb-title{font-size:14px}.bb-chart-treemaps rect{stroke:#fff;stroke-width:1px}.bb-tooltip-container{font-family:sans-serif,Arial,nanumgothic,Dotum;user-select:none;z-index:10}.bb-tooltip{background-color:#fff;border:1px solid #999;border-collapse:separate;border-spacing:0;empty-cells:show;font-size:11px;text-align:left}.bb-tooltip th{border-bottom:1px solid #eee;font-size:12px;padding:4px 8px;text-align:left}.bb-tooltip td{background-color:#fff;padding:4px 6px}.bb-tooltip td:first-child{padding-left:8px}.bb-tooltip td:last-child{padding-right:8px}.bb-tooltip td>span,.bb-tooltip td>svg{border-radius:5px;display:inline-block;height:10px;margin-right:6px;vertical-align:middle;width:10px}.bb-tooltip td.value{border-left:1px solid transparent}.bb-tooltip .bb-tooltip-title{color:#aaa;display:inline-block;line-height:20px}.bb-tooltip .bb-tooltip-detail table{border-collapse:collapse;border-spacing:0}.bb-tooltip .bb-tooltip-detail .bb-tooltip-name,.bb-tooltip .bb-tooltip-detail .bb-tooltip-value{color:#444;font-size:11px;font-weight:400;line-height:13px;padding:4px 0 3px;text-align:left}.bb-tooltip .bb-tooltip-detail .bb-tooltip-value{font-size:12px;font-weight:800;padding-left:5px}.bb-area{stroke-width:0;opacity:.2}.bb-chart-arcs-title{dominant-baseline:middle;font-size:1.3em}text.bb-chart-arcs-gauge-title{dominant-baseline:middle;font-size:2.7em}.bb-chart-arcs .bb-chart-arcs-background{fill:#e0e0e0;stroke:none}.bb-chart-arcs .bb-chart-arcs-gauge-unit{fill:#000;font-size:16px}.bb-chart-arcs .bb-chart-arcs-gauge-max,.bb-chart-arcs .bb-chart-arcs-gauge-min{fill:#777}.bb-chart-arcs .bb-chart-arcs-title{fill:#000;font-size:16px!important;font-weight:600}.bb-chart-arcs path.empty{fill:#eaeaea;stroke-width:0}.bb-chart-arcs .bb-levels circle{fill:none;stroke:#848282;stroke-width:.5px}.bb-chart-arcs .bb-levels text{fill:#848282}.bb-chart-arc .bb-gauge-value{fill:#000}.bb-chart-arc path{stroke:#fff}.bb-chart-arc rect{stroke:#fff;stroke-width:1}.bb-chart-arc text{fill:#fff;font-size:13px}.bb-chart-radars .bb-levels polygon{fill:none;stroke:#848282;stroke-width:.5px}.bb-chart-radars .bb-levels text{fill:#848282}.bb-chart-radars .bb-axis line{stroke:#848282;stroke-width:.5px}.bb-chart-radars .bb-axis text{cursor:default;font-size:1.15em}.bb-chart-radars .bb-shapes polygon{fill-opacity:.2;stroke-width:1px}.bb-button{position:absolute;right:10px;top:10px}.bb-button .bb-zoom-reset{background-color:#fff;border:1px solid #ccc;border-radius:5px;cursor:pointer;padding:5px}",cC=t=>{t.querySelectorAll("svg").forEach(function(i){i.setAttribute("width",i.getBoundingClientRect().width),i.setAttribute("height",i.getBoundingClientRect().height);const r=document.createElement("div"),n=i.cloneNode(!0);let a=0;for(;;){const o=i.style[`${a}`];if(o)r.style[o]=i.style[o],a++;else break}r.style.position="absolute",r.style.top=i.style.top,r.style.left=i.style.left,r.style.width=i.style.width,r.style.height=i.style.height,r.style["z-index"]=i.style["z-index"],r.style.transform=i.style.transform,n.style=null,n.removeAttribute("'"),r.appendChild(n),i.parentNode.appendChild(r),i.remove()})},uC=async(t,e={themeProcess:!0,mediaProcess:!0,incSlide:{width:0,height:0}})=>new Promise((i,r)=>{const n=document.createElement("div"),a={isDone:!1,thumbElement:null,worker:null,timer:null};({startWorker(){a.worker&&a.worker.terminate(),a.timer&&clearInterval(a.timer),new URL("data:application/javascript;base64,J3VzZSBzdHJpY3QnDQoNCmltcG9ydCBwcm9jZXNzUHB0eCBmcm9tICcuL3Byb2Nlc3MnDQoNCnByb2Nlc3NQcHR4KA0KICAobWVzc2FnZUhhbmRsZXIsIGVycm9ySGFuZGxlcikgPT4gew0KICAgIHNlbGYub25tZXNzYWdlID0gZSA9PiBtZXNzYWdlSGFuZGxlcihlLmRhdGEpDQogICAgc2VsZi5vbmVycm9yID0gZSA9PiBlcnJvckhhbmRsZXIoZSkNCiAgfSwNCiAgbXNnID0+IHNlbGYucG9zdE1lc3NhZ2UobXNnKQ0KKQ0K",self.location);const s=Mw,A=a.worker=new Worker(s,{type:"module"});A.addEventListener("message",l=>{this.processMessage(l.data)},!1),A.addEventListener("error",l=>{r(l)},!1),A.postMessage({type:"processPPTX",data:t,IE11:"MSInputMethodContext"in window&&"documentMode"in document,options:e}),a.timer=setInterval(this.stopWorker,500)},async stopWorker(){var s;a.isDone&&((s=a.worker)==null||s.terminate(),a.timer&&clearInterval(a.timer),i(n))},processMessage(s){if(a.isDone)return;const{thumbElement:A}=a;switch(s.type){case"slide":n.innerHTML+=s.data;break;case"pptx-thumb":A&&P(A).attr("src",`data:image/jpeg;base64,${s.data}`);break;case"slideSize":break;case"globalCSS":n.innerHTML+=`<style>${AC}
${lC}
${s.data}</style>`;break;case"ExecutionTime":case"Done":Iw(s.charts),a.isDone=!0;break;case"WARN":break;case"ERROR":a.isDone=!0,r(s.data);break;case"DEBUG":break;case"INFO":default:}}}).startWorker()}),dC=async t=>{t.style.cssText="margin: 0 auto; max-width: 100%; position: absolute; left: -1000000px;",document.body.appendChild(t);const e=t.getElementsByClassName("slide"),i=[];for(let r=0;r<e.length;r++){const n=e[r];cC(n);const a=await Ms(n,{logging:!1});i.push(a.toDataURL())}return t.remove(),i};$h();Ph();Oh();var Vi,pt,At,jr,Ta,Fh,Wi,Wn,Ea,Uh,Zr,Rs,xi,Rr,Qa,Ih,qr,Ds,Fa,Sh,en,$s,Ji,Jn;class hC{constructor(e,i){Ye(this,Ta);Ye(this,Wi);Ye(this,Ea);Ye(this,Zr);Ye(this,xi);Ye(this,Qa);Ye(this,qr);Ye(this,Fa);Ye(this,en);Ye(this,Ji);Ye(this,Vi,void 0);Ye(this,pt,void 0);Ye(this,At,void 0);Ye(this,jr,void 0);M(this,"interrupt");Nt(this,Vi,e),Nt(this,jr,i),this.interrupt=!1}async getParseJson(){if(Pe(this,pt))return Pe(this,pt);if(Pe(this,At)||Nt(this,At,await this.getRenderDom()),Pe(this,At)){Nt(this,pt,{});const e=document.createElement("div");e.style.display="none",e.appendChild(Pe(this,At)),document.body.appendChild(e);const i=Pe(this,At).getElementsByClassName("slide");for(let r=0;r<i.length;r++){const n=i[r].childNodes[0];if(!n)break;const a={},o=window.getComputedStyle(n);if(a.width=Number(o.width.replace("px","")),a.height=Number(o.height.replace("px","")),a.backgroundColor=o.backgroundColor,a.items=[],o.backgroundImage){const s={};s.type="img",s.left=0,s.top=0,s.width=a.width,s.height=a.height,s.angle=0,s.scaleX=1,s.scaleY=1,s.zIndex=0,s.content=await Fe(this,en,$s).call(this,n),a.items.push(s)}if(n.childNodes.length)for(let s=0;s<n.childNodes.length;s++){const A=n.childNodes[s];if(typeof A.className=="string"&&A.className.includes("group")){const l=Number(A.style.left.replace("px","")),c=Number(A.style.top.replace("px","")),u=A.childNodes;if(u.length)for(let d=0;d<u.length;d++){const h=u[d],g=await Fe(this,Ji,Jn).call(this,a,h,l,c);g&&g.type&&g.content&&a.items.push(g)}}else{const l=await Fe(this,Ji,Jn).call(this,a,A);l.type&&l.content&&a.items.push(l)}}a.items.sort((s,A)=>s.zIndex-A.zIndex),Pe(this,pt)[r+1]=a}e.remove()}return Pe(this,pt)}async getRenderDom(){return Pe(this,At)?Pe(this,At):(Nt(this,At,await uC(Pe(this,Vi))),Pe(this,At))}async getImages(){const i=(await this.getRenderDom()).cloneNode(!0);return await dC(i)}async getVedioConfig(){let e;Pe(this,pt)?e=Pe(this,pt):e=await this.getParseJson();const i={version:"0.0.1",layout:"landscape",title:Pe(this,jr),clips:[]};for(const r in e){const n=e[r];r==="1"&&(n.width>=n.height?i.layout="landscape":i.layout="portrait");let a=1,o=0,s=0;if(i.layout==="landscape"){const l=1920/n.width,c=1080/n.height;l>c&&(s=(1920-n.width*c)/2),l<c&&(o=(1080-n.height*l)/2),a=l>=c?c:l}else{const l=1080/n.width,c=1920/n.height;l>c&&(s=(1080-n.width*c)/2),l<c&&(o=(1920-n.height*l)/2),a=l>=c?c:l}const A={bgColor:Fe(this,Qa,Ih).call(this,n.backgroundColor),layers:[]};for(let l=0;l<n.items.length;l++){const c=n.items[l],u={type:"object"};switch(c.type){case"svg":{c.content.includes('fill="none"')||(c.content=c.content.replace('stroke="undefined"',""),c.content=c.content.replace('stroke-width="undefined"',""),c.content=c.content.replace('stroke-width="NaN"','stroke-width="1"')),await new Promise((h,g)=>{dn.fabric.CustomIcon.fromString(c.content,f=>{const p=(c.width+1)/2+c.left,v=(c.height+1)/2+c.top,m=Fe(this,xi,Rr).call(this,c.angle),w=(c.left-p)*Math.cos(m)-(c.top-v)*Math.sin(m)+p,x=(c.left-p)*Math.sin(m)+(c.top-v)*Math.cos(m)+v;f.left=w*a+s,f.top=x*a+o,f.scaleX=a,f.flipX=!(c.scaleX>=0),f.scaleY=a,f.flipY=!(c.scaleY>=0),f.angle=c.angle,u.property=f.toObject(),h(!0)})});break}case"img":{if(this.interrupt)break;const d=await Fe(this,Wi,Wn).call(this,c.content);d.code===200&&await new Promise((g,f)=>{dn.fabric.CustomImage.fromURL(c.content,p=>{const v=(c.width+1)/2+c.left,m=(c.height+1)/2+c.top,w=Fe(this,xi,Rr).call(this,c.angle),x=(c.left-v)*Math.cos(w)-(c.top-m)*Math.sin(w)+v,_=(c.left-v)*Math.sin(w)+(c.top-m)*Math.cos(w)+m,b=c.width*a/p.width,E=c.height*a/p.height;p.left=x*a+s,p.top=_*a+o,p.scaleX=b,p.flipX=!(c.scaleX>=0),p.scaleY=E,p.flipY=!(c.scaleY>=0),p.angle=c.angle;const U=p.toObject();U.objects[0].src="",U._urlkey=d.data.key,U.objects[0].crossOrigin="anonymous",U.objects[0].objectCaching=!1,U.objectCaching=!1,u.property=U,g(!0)},{})});break}case"video":{if(u.type="video",this.interrupt)break;const d=await Fe(this,Wi,Wn).call(this,c.content);d.code===200&&await new Promise((g,f)=>{dn.fabric.CustomVideo.fromCoverURL(c.content,p=>{const v=(c.width+1)/2+c.left,m=(c.height+1)/2+c.top,w=Fe(this,xi,Rr).call(this,c.angle),x=(c.left-v)*Math.cos(w)-(c.top-m)*Math.sin(w)+v,_=(c.left-v)*Math.sin(w)+(c.top-m)*Math.cos(w)+m,b=c.width*a/p.width,E=c.height*a/p.height;p.left=x*a+s,p.top=_*a+o,p.scaleX=b,p.flipX=!(c.scaleX>=0),p.scaleY=E,p.flipY=!(c.scaleY>=0),p.angle=c.angle;const U=p.toObject(["_urlkey","_loaded","_volume"]);U.objects[0].src="",U._frontCoverKey=d.data.key,U.objects[0].crossOrigin="anonymous",U.objects[0].objectCaching=!1,U.objectCaching=!1,u.property=U,g(!0)},{_urlkey:c.videoKey,_volume:1,_loaded:!1})});break}case"text":{const d=(c.width+1)/2+c.left,h=(c.height+1)/2+c.top,g=Fe(this,xi,Rr).call(this,c.angle),f=(c.left-d)*Math.cos(g)-(c.top-h)*Math.sin(g)+d,p=(c.left-d)*Math.sin(g)+(c.top-h)*Math.cos(g)+h,v=new dn.fabric.Textbox(c.content,{left:f*a+s,top:p*a+o,width:c.width*a,height:c.height*a,flipX:!(c.scaleX>=0),flipY:!(c.scaleY>=0),angle:c.angle,fontFamily:`'${c.fontFamily}'`,fontWeight:c.fontWeight,fontStyle:c.fontStyle,fontSize:c.fontSize*a,fill:c.color,textAlign:c.textAlign});u.property=v.toJSON();break}}u.property&&A.layers.push(u)}i.clips.push(A)}return i}interrupted(){this.interrupt=!0}destroy(){Nt(this,Vi,null),Nt(this,pt,null),Nt(this,At,null)}}Vi=new WeakMap,pt=new WeakMap,At=new WeakMap,jr=new WeakMap,Ta=new WeakSet,Fh=function(e){const i=e.split(","),r=i[0].match(/:(.*?);/)[1],n=`${new Date().getTime()}.${r.split("/")[1]}`,a=atob(i[1]);let o=a.length;const s=new Uint8Array(o);for(;o--;)s[o]=a.charCodeAt(o);return new File([s],n,{type:r})},Wi=new WeakSet,Wn=async function(e){const i=Fe(this,Ta,Fh).call(this,e),r=new FormData;return r.append("file",i),await Dr({type:"post",url:"/ai/source/upload",data:r})},Ea=new WeakSet,Uh=function(e){if(!e||e==="none")return 0;const i=e.match(new RegExp("(?<=rotate).*?(?=deg)"));return i?Number(i[0].replace("(","")):0},Zr=new WeakSet,Rs=function(e){if(!e||e==="none")return[1,1];const i=e.match(new RegExp("(?<=scale\\().*?(?=\\))"));return i?i[0].replace(" ","").split(","):[1,1]},xi=new WeakSet,Rr=function(e){return e*(Math.PI/180)},Qa=new WeakSet,Ih=function(e){let i;if(Array.isArray(e)&&e.length>=3)i=e;else if(typeof e=="string")i=e.replace(/(?:\(|\)|rgba|RGBA|rgb|RGB)*/g,"").split(",");else throw new Error("Rgb is not a string or rgb array is less than 3");if(Array.isArray(i)&&i.length>=3){let r="#";for(let n=0;n<3;n++){const a=i[n];let o=Number(a).toString(16);o.length<2&&(o="0"+o),r+=o}return r}else throw new Error("Conversion failed, rgb string error")},qr=new WeakSet,Ds=function(e){let i;return Array.isArray(e)&&e.length>=4?i=e:typeof e=="string"&&(i=e.replace(/(?:\(|\)|rgba|RGBA)*/g,"").split(",")),i.length>=4&&Number(i[3])===0},Fa=new WeakSet,Sh=async function(e,i,r){const n=document.createElement("div");n.style.cssText="margin: 0 auto; max-width: 100%; position: absolute; left: -1000000px;";const a=e.cloneNode(!0);a.setAttribute("width",i),a.setAttribute("height",r);const o=document.createElement("div");let s=0;for(;;){const l=a.style[`${s}`];if(l)o.style[l]=a.style[l],s++;else break}o.style.width=a.style.width,o.style.height=a.style.height,o.style.transform=a.style.transform,a.style=null,a.removeAttribute("'"),o.appendChild(a),n.appendChild(o),document.body.appendChild(n);const A=await Ms(n,{logging:!1,ignoreElements:function(l){return!!l.tagName.includes("-")}});return n.remove(),A.toDataURL()},en=new WeakSet,$s=async function(e,i=!1){const r=document.createElement("div");r.style.cssText="margin: 0 auto; max-width: 100%; position: absolute; left: -1000000px;";const n=e.cloneNode(i);r.appendChild(n),document.body.appendChild(r);const a=await Ms(r,{logging:!1,ignoreElements:function(o){return!!o.tagName.includes("-")}});return r.remove(),a.toDataURL()},Ji=new WeakSet,Jn=async function(e,i,r=0,n=0){if(i.className&&typeof i.className=="string"&&i.className.includes("group")){const a=Number(i.style.left.replace("px",""))+r,o=Number(i.style.top.replace("px",""))+n,s=i.childNodes;if(s.length)for(let A=0;A<s.length;A++){const l=s[A],c=await Fe(this,Ji,Jn).call(this,e,l,a,o);c&&c.type&&c.content&&e.items.push(c)}return""}else{const a={};if(a.left=Number(i.style.left.replace("px",""))+r,a.top=Number(i.style.top.replace("px",""))+n,a.width=Number(i.style.width.replace("px","")),a.height=Number(i.style.height.replace("px","")),a.angle=Fe(this,Ea,Uh).call(this,i.style.transform),a.scaleX=Number(Fe(this,Zr,Rs).call(this,i.style.transform)[0]),a.scaleY=Number(Fe(this,Zr,Rs).call(this,i.style.transform)[1]),a.zIndex=parseInt(i.style["z-index"]),i.tagName==="svg")i.innerHTML.includes("<image xlink:href=")||i.innerHTML.includes("<linearGradient")?(a.type="img",a.content=await Fe(this,Fa,Sh).call(this,i,a.width,a.height)):(a.type="svg",a.content=`<svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg">${i.innerHTML}</svg>`);else if(i.tagName==="TABLE")a.type="img",a.content=await Fe(this,en,$s).call(this,i,!0);else{const o=i.getElementsByTagName("img"),s=i.getElementsByTagName("video");if(o&&o.length)a.type="img",a.content=o[0].src;else if(s&&s.length){a.type="video",a.content=s[0].src;const A=await Fe(this,Wi,Wn).call(this,s[0].getAttribute("video-url"));A.code===200&&(a.videoKey=A.data.key)}else if(i.innerText.trim()){const A=window.getComputedStyle(i);let l=!1;if(A.flexDirection==="column"&&(l=!0),l){const u=i.childNodes;for(let d=0;d<u.length;d++){const h=u[d];a.content?a.content+=`
${h.innerText}`:a.content=h.innerText}}const c=i.getElementsByTagName("sapn");if(c&&c.length){a.type="text";for(let u=0;u<c.length;u++){const d=c[u],h=window.getComputedStyle(d);if(d.innerText.trim()&&d.innerText!=="&nbsp;"){if(!a.color)if(Fe(this,qr,Ds).call(this,h.color))if(Fe(this,qr,Ds).call(this,h.backgroundColor))if(h.backgroundImage.includes("linear-gradient")){let g=h.backgroundImage.replace("linear-gradient(","");g=g.substring(0,g.length-1),a.color=g.match(/(rgb|rgba).*?(\))/)[0]}else a.color=h.color;else a.color=h.backgroundColor;else a.color=h.color;a.fontFamily||(a.fontFamily=h.fontFamily),a.fontSize||(a.fontSize=Number(h.fontSize.replace("px",""))),a.fontWeight||(a.fontWeight=Number(h.fontWeight)),a.fontStyle||(a.fontStyle=h.fontStyle),a.textAlign||(a.textAlign=h.textAlign),l||(a.content?a.content+=d.innerText:a.content=d.innerText)}}}}}return a}};let Le=null,Fr=null,jn=!1,Nn=null;function gC(t,e,i){let r=0;function n(s,A){return ct({url:"/ai/task/generate",type:"POST",data:{action:"convert",param:{key:s,url:A,from:e,to:i}}},()=>{},"web",!0)}function a(s){return new Promise((A,l)=>{ct({url:"/ai/task/detail",type:"GET",data:{task_id:s}}).then(c=>{c&&c.code===200&&(c.data.status===0?A(c.data.additional_data):c.data.status===-1||c.data.status===-2?setTimeout(()=>{if(r+=1500,r>3e4){l(Error("task timeout"));return}jn||a(s).then(u=>{A(u)}).catch(u=>{l(u)})},1500):l(Error("task fail")))})})}function o(s){return new Promise(A=>{ct({url:"/ai/source/get-access-url",type:"POST",data:{key:s}}).then(l=>{l&&l.code===200&&A(l.data.url)})})}return new Promise((s,A)=>{const l=new FormData;l.append("file",t),Dr({url:"/ai/source/upload",type:"POST",data:l}).then(c=>{if(c&&c.code===200){const u=c.data.key,d=c.data.url;n(u,d).then(h=>{const g=h.data.task_id;a(g).then(f=>{f.url?fetch(f.url).then(p=>{p.blob().then(v=>{const m=`test.${i}`,w=new File([v],m);s(w)})}):o(f.key).then(p=>{fetch(p).then(v=>{v.blob().then(m=>{const w=`test.${i}`,x=new File([m],w);s(x)})})})}).catch(f=>{A(f)})})}else A(Error("Failed to upload PPT"))})})}class Ps extends fe{constructor(){super();M(this,"DropTarget",ge());M(this,"FileInput",ge());M(this,"uploadButtonText",ge());M(this,"uploadButtonIcon",ge());M(this,"uploadButton",ge());M(this,"failedTipMsg",ge());M(this,"Dialog",ge());this.text="",this.loading=!1,this.failedTip="111124",this.isPPT=!1,this.uploading=!1}render(){return O`
      <div class="full-mask" ${be(this.Dialog)}>
        <div class="dialog-box">
          <div class="dialog-title">
            <div class="title-text">Import PPT</div>
            <div class="cursor-pointer hover-effect" @click=${this._close}>
              <img src="/image/img/window_close.png" />
            </div>
          </div>
          <div class="dialog-body">
            <div class="title">Create video from your PPT with one click!</div>
            <div
              ${be(this.DropTarget)}
              @click=${this._uploadClick}
              class="upload-box flex-column flex-center flex-item-center"
            >
              <input
                ${be(this.FileInput)}
                @change=${this._inputChange}
                id="fileInput"
                type="file"
                style="display:none;"
                accept=".ppt,.pptx"
              />
              ${this._renderPreview()}
            </div>
            <div ${be(this.failedTipMsg)} class="failed-tip">${this.failedTip}</div>
            <div
              ${be(this.uploadButton)}
              class="upload-button flex-item-center flex-center"
              @click=${this._generate}
            >
              <div class="icon-box" ${be(this.uploadButtonIcon)}>
                <img src="/image/img/video-play.png" />
              </div>
              <span ${be(this.uploadButtonText)}>Generate Video</span>
            </div>
          </div>
        </div>
      </div>
    `}_renderPreview(){if(this.uploading)return O`
        <div class="flex flex-item-center">
          <div class="title-loading"><css-animation name="loading"></css-animation></div>
          <span>Hold on tight, it will be ready right away!</span>
        </div>
      `;if(Le){let i="";switch(Le.type){case"application/vnd.ms-powerpoint":i="/image/img/ppt_file.png";break;case"application/vnd.openxmlformats-officedocument.presentationml.presentation":i="/image/img/ppt_file.png";break;case"application/pdf":i="/image/img/ppt_file.png";break;default:i="/image/img/ppt_file.png"}return O`
          <img src=${i} />
          <p class="upload-text">${Le.name}</p>
          <p class="upload-tip">Click or drag to replace the file.</p>
        `}else return O`
          <img src="/image/img/ico_upload.png" />
          <p class="upload-text">Click here or drag to upload your file</p>
          <p class="upload-tip">${this.isOpera()?".ppt/.pptx supported, up to 50MB.":".ppt/.pptx supported, up to 100MB."}</p>
        `}_handleEvent(i){if(i.preventDefault(),!(this.loading||this.uploading))if(i.type==="drop"){this.DropTarget.value.style.borderColor="#a89b9b";for(const r of i.dataTransfer.files)this.filesToBlod(r)}else i.type==="dragleave"?this.DropTarget.value.style.borderColor="#a89b9b":this.DropTarget.value.style.borderColor="rgb(139, 61, 255)"}_setEvent(){this.DropTarget.value.addEventListener("dragenter",this._handleEvent.bind(this)),this.DropTarget.value.addEventListener("dragover",this._handleEvent.bind(this)),this.DropTarget.value.addEventListener("drop",this._handleEvent.bind(this)),this.DropTarget.value.addEventListener("dragleave",this._handleEvent.bind(this)),this.Dialog.value.addEventListener("dragenter",i=>(i.stopPropagation(),i.preventDefault(),!1)),this.Dialog.value.addEventListener("dragover",i=>(i.stopPropagation(),i.preventDefault(),!1)),this.Dialog.value.addEventListener("drop",i=>(i.stopPropagation(),i.preventDefault(),!1)),this.Dialog.value.addEventListener("dragleave",i=>(i.stopPropagation(),i.preventDefault(),!1))}_uploadClick(){this.loading||this.uploading||this.FileInput.value.click()}_inputChange(i){this.loading||this.uploading||i.target.files[0]&&this.filesToBlod(i.target.files[0])}_generate(){if(!this.isFailed&&Le){window.gtagClick("imppt_btclick_generatevideo"),this.setButtonState("loading");const i=new FileReader;Fr?i.readAsArrayBuffer(Fr):i.readAsArrayBuffer(Le),i.onload=r=>{if(["application/vnd.openxmlformats-officedocument.presentationml.presentation","application/vnd.ms-powerpoint","application/pdf"].includes(Le.type))switch(Le.type){case"application/vnd.openxmlformats-officedocument.presentationml.presentation":case"application/vnd.ms-powerpoint":{Nn=new hC(i.result,Le.name.substring(0,Le.name.lastIndexOf("."))),Nn.getVedioConfig().then(a=>{this.setButtonState(),!jn&&(Ur("pptx",JSON.stringify(a)),window.location="/edit/?from=localStorage&key=pptx")}).catch(()=>{this.setButtonState("failed"),this.failedTip="Sorry, fail to upload. Please try again!",this.failedTipMsg.value.style.visibility="visible"});break}}}}}pptTopptx(i){this.setButtonState("uploading"),gC(i,"ppt","pptx").then(r=>{Le=i,Fr=r,this.setButtonState(),this.requestUpdate()}).catch(()=>{this.setButtonState("failed"),this.failedTip="Sorry, fail to upload. Please try again!",this.failedTipMsg.value.style.visibility="visible"})}isOpera(){return navigator.userAgent.indexOf("Opera")>-1||navigator.userAgent.indexOf("OPR")>-1}async filesToBlod(i){if(i.size/1048576>100||this.isOpera()&&i.size/1048576>50){this.failedTip="The file format or size is not supported!",this.failedTipMsg.value.style.visibility="visible",Le=null,this.setButtonState("failed");return}if(!(await cu()).status){this.failedTip="Sorry, fail to upload. Please try again!",this.failedTipMsg.value.style.visibility="visible",Le=null,this.setButtonState("failed");return}const n=new FileReader;n.readAsDataURL(i),n.onerror=()=>{switch(n.error.code){case"1":alert("未找到文件");break;case"2":alert("安全错误");break;case"3":alert("读取被中断");break;case"4":alert("文件不可读");break;case"5":alert("编码错误");break;default:this.failedTip="Your don’t have access to this file.",this.failedTipMsg.value.style.visibility="visible",this.setButtonState("failed"),Le=null}},n.onload=a=>{if(["application/vnd.ms-powerpoint","application/vnd.openxmlformats-officedocument.presentationml.presentation"].includes(i.type))switch(i.type){case"application/vnd.openxmlformats-officedocument.presentationml.presentation":{Le=i,this.setButtonState(),this.requestUpdate();break}case"application/vnd.ms-powerpoint":{this.pptTopptx(i);break}case"application/pdf":{Le=null;break}}else this.failedTip="The file format or size is not supported!",this.failedTipMsg.value.style.visibility="visible",Le=null,this.setButtonState("failed")},this.requestUpdate()}setButtonState(i){i==="loading"?(this.failedTipMsg.value.style.visibility="hidden",this.loading=!0,this.isFailed=!0,this.uploading=!1,this.uploadButtonText.value.innerText="Generating…",this.uploadButtonIcon.value.innerHTML='<css-animation name="whiteLoading"></css-animation>',this.uploadButton.value.style.backgroundColor="#b888ff"):i==="uploading"?(this.uploading=!0,this.loading=!1,this.isFailed=!1,this.failedTipMsg.value.style.visibility="hidden",this.uploadButtonText.value.innerText="Generate Video",this.uploadButtonIcon.value.innerHTML='<img class="icon" src="/image/img/video-play.png" />',this.uploadButton.value.style.backgroundColor="#e5e5e8",this.uploadButton.value.style.cursor="auto"):i==="failed"?(this.isFailed=!0,this.loading=!1,this.uploading=!1,this.uploadButtonText.value.innerText="Generate Video",this.uploadButtonIcon.value.innerHTML='<img class="icon" src="/image/img/video-play.png" />',this.uploadButton.value.style.backgroundColor="#e5e5e8",this.uploadButton.value.style.cursor="auto"):i==="disabled"?(this.loading=!1,this.isFailed=!1,this.uploading=!1,this.failedTipMsg.value.style.visibility="hidden",this.uploadButtonText.value.innerText="Generate Video",this.uploadButtonIcon.value.innerHTML='<img class="icon" src="/image/img/video-play.png" />',this.uploadButton.value.style.backgroundColor="#e5e5e8",this.uploadButton.value.style.cursor="auto"):(this.loading=!1,this.isFailed=!1,this.uploading=!1,this.failedTipMsg.value.style.visibility="hidden",this.uploadButtonText.value.innerText="Generate Video",this.uploadButtonIcon.value.innerHTML='<img class="icon" src="/image/img/video-play.png" />',this.uploadButton.value.style.backgroundColor="#8b3dff",this.uploadButton.value.style.cursor="pointer")}_open(){this.Dialog.value.style.visibility="visible",this.opened(),document.body.addEventListener("dragstart",()=>!1)}_close(){this.cancelTip().then(i=>{i==="submit"&&(this.Dialog.value.style.visibility="hidden",this.closed(),Nn&&Nn.interrupted())})}opened(){this._setEvent(),Le=null,Fr=null,jn=!1,this.setButtonState("disabled"),this.isPPT=!1}closed(){this.loading=!1,this.isPPT=!1,Le=null,Fr=null,jn=!0,this.FileInput.value.value=null,this.setButtonState("disabled"),this.requestUpdate()}cancelTip(){return new Promise(i=>{if(this.uploading){const r=document.createElement("confirm-dialog");r.setAttribute("titleText","Cancel PPT Importing?"),r.setAttribute("iconType","hint"),r.setAttribute("cancelText","No"),r.setAttribute("submitText","Yes, Cancel It"),r.setAttribute("isCancel",!0),r.setAttribute("content","Your file is being processed, are you sure to cancel it?"),r.addEventListener("submit",()=>{i("submit")}),r.addEventListener("cancale",()=>{i("cancale")}),document.body.appendChild(r)}else this.loading?i("cancale"):i("submit")})}}M(Ps,"properties",{text:{type:String},data:{type:Array},loading:{type:Boolean},failedTip:{type:String},isFailed:{type:Boolean},isPPT:{type:Boolean},uploading:{type:Boolean}}),M(Ps,"styles",[_e,Be`
      .full-mask {
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.4);
        z-index: 1000;
        visibility: hidden;
      }
      .dialog-box {
        width: 916px;
        height: 640px;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        background-color: #ffffff;
        border-radius: 6px;
        padding: 18px 24px 24px;
        box-sizing: border-box;
      }
      .dialog-title {
        display: flex;
        justify-content: space-between;
        padding-bottom: 25px;
        font-weight: 700;
      }
      .title-text {
        font-size: 16px;
        color: #1e1e2e;
        font-weight: 500;
      }
      .hover-effect {
        position: relative;
        z-index: 1;
      }
      .hover-effect::before {
        content: '';
        display: block;
        left: 50%;
        top: 50%;
        position: absolute;
        transform: translate(-50%, -50%);
        width: 32px;
        height: 32px;
        background-color: rgba(140, 140, 151, 0.2) !important;
        border-radius: 8px;
        opacity: 0;
        transition: opacity 0.3s;
        z-index: -1;
      }
      .hover-effect:hover::before {
        opacity: 1;
      }
      .dialog-body {
        margin-top: 54px;
      }
      .title {
        color: #1e1e2e;
        font-size: 16px;
        text-align: center;
        font-weight: 500;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 19px;
      }
      .title-loading {
        width: 50px;
      }
      .upload-box {
        width: 100%;
        height: 345px;
        border: 1px dashed #8c8c9733;
        border-radius: 6px;
        background: #8c8c970d;
        margin-top: 28px;
        cursor: pointer;
      }
      .upload-box:hover {
        border: 1px dashed #ceced3;
        background-color: #f3f3f4;
      }
      .upload-text {
        font-size: 14px;
        color: #1e1e2e;
        margin-top: 15px;
      }
      .upload-tip {
        font-size: 12px;
        color: #1e1e2e;
        opacity: 0.8;
        margin-top: 10px;
      }
      .upload-button {
        width: 266px;
        height: 48px;
        background: #8b3dff;
        border-radius: 6px;
        color: #ffffff;
        font-size: 14px;
        margin: 0px auto 40px;
        user-select: none;
      }
      .upload-button:hover {
        background-color: #9b57ff;
        cursor: pointer;
      }
      .icon-box {
        width: 32px;
      }
      .failed-tip {
        font: normal normal normal 14px/19px Roboto;
        text-align: center;
        color: #f90505;
        padding: 10px 0;
        visibility: hidden;
      }
    `]);class fC extends fe{constructor(){super(...arguments);M(this,"Dialog",ge())}render(){return O`
      <fullscreen-dialog ${be(this.Dialog)} width="900" height="514" name="Create from URL">
        <create-url-slot slot="dialog-body"></create-url-slot>
      </fullscreen-dialog>
    `}_open(){this.Dialog.value._open()}}class Os extends fe{constructor(){super(),this.text=""}render(){return O`
      <div class="dialog-body">
        <div class="title">Create video from your Amazon or Blog URL with one click!</div>
        <div class="create-input-box flex-center flex-item-center">
          <input
            type="text"
            class="create-input"
            placeholder="Paste your Amazon or Blog URL here"
          />
        </div>
        <div class="upload-button flex-item-center flex-center">
          <img class="icon" src="/image/img/video-play.png" />
          Generate Video
        </div>
      </div>
    `}_openDialog(){this.Dialog.value._open()}_closeDialog(){this.Dialog.value._close()}}M(Os,"properties",{text:"",data:[]}),M(Os,"styles",[_e,Be`
      .dialog-body {
        margin-top: 120px;
      }
      .title {
        color: #1e1e2e;
        font-size: 16px;
        text-align: center;
        font-weight: 500;
      }

      .create-input-box {
        margin-top: 48px;
      }

      .create-input {
        width: 520px;
        height: 44px;
        border: 2px solid #e8e8ea;
        border-radius: 6px;
        outline: none;
        padding: 16px;
        box-sizing: border-box;
      }

      .upload-button {
        width: 266px;
        height: 48px;
        background: #8b3dff;
        border-radius: 6px;
        color: #ffffff;
        font-size: 14px;
        margin: 126px auto 0;
      }
      .upload-button:hover {
        background-color: #9b57ff;
        cursor: pointer;
      }
      .icon {
        margin-right: 10px;
      }
    `]);customElements.define("create-url-slot",Os);class zs extends fe{constructor(){super(),this.picture="",this.text="-",this.descript=""}render(){return O`
      <div class="flex-column search-noresult">
        <img src="${this.picture}" />
        <p>${this.text}</p>
        <p>${this.descript}</p>
      </div>
    `}}M(zs,"properties",{picture:"",text:"",descript:""}),M(zs,"styles",[Be`
      .search-noresult{
        justify-content:center;
        align-items:center;
        
      }
      .search-noresult img{
        margin-bottom:16px;
      }
      .search-noresult p{
        font-size:14px;
        line-height:1.357;
        color: #1E1E2E;
        margin-top:8px;
      }
      @media screen and (max-width: 1600px) {
        .search-noresult img{
          width:220px;
          height:auto
        }
      }
    `,_e]);class Ks extends fe{constructor(){super();M(this,"submitMap",{delete:this.submitText||"delete",ok:this.submitText||"okk"});M(this,"SelectedBox",ge());this.isCancel="true",this.isClose="true",this.content=" ",this.cancelText="",this.submitText="",this.submitType="",this.contentList=[]}render(){return this.contentList=this.contentList&&typeof this.contentList=="string"?JSON.parse(this.contentList):[],O`
      <div ${be(this.SelectedBox)} class="confirm-dialogflex flex-item-center flex-center">
        <div class="confirm-body">
          <i
            class="close-btn"
            @click="${i=>{this.closeConfirm(i)}}"
            style="display:${this.isClose==="true"?"block":"none"}"
          ></i>
          <h3 class="${this.iconType?this.iconType:""}">${this.titleText}</h3>
          <p class="${this.titleText?"":"big"}" style="display:${this.contentList.length?"none":"block"}" >${this.content}</p>
          <p style="display:${this.contentList.length?"block":"none"}" >
            ${this.contentList.map((i,r)=>r===this.contentList.length-1?this.contentList[r]:O`${this.contentList[r]}<br/>`)}
          </p>
          <div class="btn-ground flex-end">
            <button
              @click="${i=>{this.cnacelFun(i)}}"
              style="display:${this.isCancel==="true"?"block":"none"}"
              class="cancel-btn"
            >
              ${this.cancelText?this.cancelText:"Cancel"}
            </button>
            <button
              @click="${i=>{this.submitFun(i)}}"
                class="submit-btn ${this.submitType==="delete"?"del":""}"
            >
                ${this.submitText||(this.submitType==="delete"?"Delete":"OK")}
            </button>
          </div>
        </div>
      </div>
    `}closeConfirm(i){i&&i.stopPropagation(),this.dispatchEvent(new CustomEvent("closebtnclick")),this.remove()}cnacelFun(i){i&&i.stopPropagation(),this.dispatchEvent(new CustomEvent("cancale")),this.closeConfirm()}submitFun(i){if(i&&i.stopPropagation(),this.dispatchEvent(new CustomEvent("submit")),this.submitType!=="delete")this.closeConfirm();else{this.shadowRoot.querySelector(".close-btn").style.pointerEvents="none",this.shadowRoot.querySelector(".cancel-btn").style.pointerEvents="none",this.shadowRoot.querySelector(".submit-btn").style.pointerEvents="none";const r=this.shadowRoot.querySelector(".submit-btn").offsetWidth;this.shadowRoot.querySelector(".submit-btn").style.width=r+"px",this.shadowRoot.querySelector(".submit-btn").classList.add("loading")}}}M(Ks,"properties",{titleText:"",content:"",isCancel:"true",submitType:"",iconType:"",cancelText:"",submitText:"",contentList:"",isClose:"true"}),M(Ks,"styles",[_e,Be`
      .confirm-dialogflex {
        position: fixed;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        z-index: 9999;
        background-color: rgba(0, 0, 0, 0.4);
      }
      .confirm-body {
        width: 518px;
        min-height: 204px;
        background-color: rgba(255, 255, 255, 1);
        border-radius: 8px;
        padding: 24px 24px 0 66px;
        position: relative;
        box-sizing: border-box;
        padding-bottom: 24px;
      }
      .close-btn {
        display: block;
        width: 32px;
        height: 32px;
        border-radius: 8px;
        position: absolute;
        top: 20px;
        right: 20px;
        background-image: url('/image/img/window_close.png');
        cursor: pointer;
        background-size: 24px 24px;
        background-repeat: no-repeat;
        background-position: center;
        z-index: 1;
      }
      .close-btn:hover {
        background-color: rgba(140, 140, 151, 0.2);
      }
      h3 {
        font: normal normal normal 16px/26px Roboto;
        color: rgba(51, 51, 51, 1);
        position: relative;
        padding-right: 32px;
        user-select:none;
      }
      h3::before {
        content: '';
        display: block;
        background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAABHNCSVQICAgIfAhkiAAAAlpJREFUSEu9Vr1VwzAQlmIKOsIEwARkA8gEwASEjkBB/HBoSVoCzzSQkjABZgKSCYAJgAlIKngPbPGdbQX/SJZNgYpYse/uu5/vTuLsnxY34ZydXTVqNWuDMbHNGG/gWY90+BT7Jzy9IPAnJyeH2OuXFsh1h6u+z90IoNQaWRbr23b7VSWtBLq4GLaEYDelzGeEOGd7x8ftUVY3BzQYDHsQPv0LiNSBk/1ut91L2kgBlYjkDUbC1MAZqtW6zqFsZHOgqCbsRaUI4xMhgk624KQTBOwS37dUeqjZmqzZHAjReCoFeHaPnM8JQca/voJ6EhTpHkMOzMytW8dpt8IM0E9E4dqjyau0M/zJsj6atm1PXdet+/7ie5F+CDQYXHc4Jyrn1jM8Qu8wpqqfEMLudg8u6fv5+ZBqt5K1IGViIF3o1JQsZo/oYL+aNIRUN8GucTEQm0BmMwSCN2RwSRW67l2SVajRJv4/qGX51HH2lyWQqAAyw7RoOc6B91tfCyByNOUtIf3wI4qoApDYqQJC9pNAZVP3BqWwTlG6+F1RJHFsM+jUDWRIp4EalwobA+l6J6UkdUz0zib8Fcke0UsYiNlYXN0UvYsatgJJlKJyDM1HEAhBnu4aDN9a1if1E8MkGOOhHaqxnfQIopdFQ1WCpxv0mk5ckEG7ZoimkRuqJG46JjIjh0bPkQ5Ge0xIBfPBx9GoYXOG7FMt48EnlUyRFaULkXRKHeXSSFyzXgmCSBUQhfUqXU6SHhPg93d41dqGt3RkyOE7Q4pwxRLewgL3dADSlvFeV5CmSp9+ANcOMCokQ5sXAAAAAElFTkSuQmCC');
        width: 26px;
        height: 26px;
        position: absolute;
        top: 0;
        left: -42px;
      }
      h3.hint::before {
        background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAABHNCSVQICAgIfAhkiAAAAgFJREFUSEutVktSwkAUnMDGnXoC4wmUExhOoDdQd1BupEjYCltIVcqFshRPIJ7AeAK5gXACdecmwX7DTJjEJDNjSVWgyPSbfq9fz8dhlp8oivYopNfrfdqEOjpwGN6fMeacAufhcQv4Jf7H67UzD4LOc91clUSTydRzHHYjCHT50DgI2SgIunEZuJQIJENBYkKQwyBu2O93R8XAX0RhOJ0BdG7NkA+Y+X73Un2VIzKoZAV5qC8MmVO/DqoSEjIO5XhGJHryUlPJV7P57Uq3kfuSZIdId2vI2rJnKlGMLE+qiZyF73da6jhkXuD/UU1yMSRscwXoS1j4SdcXBOWkBtFaFwMJeVWCyMwAaZq2BoMrqoKNx3fHjUbjTUeE8VskeC2JSOvKxsrJZHY2KgC7BNGhJNJKQJOrTjJwaFYsSe5E0dRNEvZuIAFBHhF0sanITG7Cwq37IOI2/TAhQkWvaKxHWFSkcel2Rk4ksjOSjrDSeSaOk1RcOkFkZAbC0l6WpvjZbLgmnxWIXCt7m8xaglHtzc8c7YIVFfHNEv16MCHOLVjT5tqaQcXbbKq8AJymqJ56tZ7rKlIXuO0xoZs7G688JiTCZiHWsGYLW2L+/SgvVlJLJMzh4ZfuDjVn1LYmajzhrS4nqiTi5CUD0FPc4Vd4NwcJrlvltx9tRVX6//UC+QPVxOqVLvGicgAAAABJRU5ErkJggg==');
      }
      h3.tips::before {
        background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAABHNCSVQICAgIfAhkiAAAAoNJREFUSEu9lj1IW1EUx89NXKsdikNBiBBwENv4sZguyZapiYuLg3EQjFNDnnPtbEI6BFMQ2ih00cHEKVuy2NFWikMxYEDooC0YnVI0t+fc90Ge5r574+CFlxd459zf+9/zv+c+Bk80mIqTzxcDd3csjnERvAIAPGTmsB/408Sr7vfzSjqdov/SIQWZAHiPmUnVy1jPS34/fJABe4Ky2c0EgO8Lvv1zTYgVxq4AOkuGsVq+n/cAlMsVk5wDQh4/GIOlTCZV6p7BBTKVsH0dxMjIS2i1buD6+kYSzue6lTkgq+jfdZYrHJ6B2dkZaLfbUCjIxLMrNMmkXTMHlM0WSeqijppo9A1MTU0g6B9sbX0VQMnYNoyUMJMAWQ4704HYMePjY2LZzs9/e6ahE0dJlQBtbGy+Y4zldUAEoOvi4g/U69+UKZzz9Nra6kcBQqeV0Wm0KT0HAWKxqBOTy31SpQA6sIIOTAgQ1od2+WuvLHLZ8PALGBx85tSnUPisBFEHMYyVSRvEVRkEoJosLy8IWKPRhEqlqkoTz9EQKMxUpARRHAEIRKNarcHJya++Qcqloxmnp19BJBIWk5Ot5ZvVxT9GRaG+zBCPxyAYDMDl5V/Y2dnTUuMyg669M5kVMfnR0U+o1Q7FUqpUueyts2HJdfPzbwVod/dAOPD09EwJcm1YyxAlvEtbkN3fKJZUkBlUXQFD3S2Iki1VZIqhXosfDI46m5UgjYayY7VQTehBUzVV6R8TaidIjgk78UkOPhtmKaOa9VxGDzUtPM+SWke5PYlVs3Uvg9wDbmNN1vv6OOmegIC3tzzh87EIdvgAPrOb7zFuxmanw+sDA6z86M8tdbH7i/gP+UEVKoE0NREAAAAASUVORK5CYII=');
      }
      h3.right::before {
        background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAABHNCSVQICAgIfAhkiAAAAhNJREFUSEu9lk1SwjAUx5OWcXAlNxBOIJ7AcgL1BOIS3NChsJU1H1M2ylK4gZ7AegLhBJYb1JXMQFvfqw0kkBZSHTuTgZkk7/c+/i8JJf/00UM43e5DWde1yzAkRViPAz+XUuL6fvDSbt9N99lJBQ0GoyoYv+eMJ9lzCQk7llWfJC2QgmzbLvj+8StsLu/zdGve0fXFtWma3va+HRCmSdN0hBQUIfFy6gWBX9lOpwCKI/nIDmGuUU/Xv0p8ZAKo3x9hUc+yRbKzy7GsWmWNZn/iwj9lhMzifYKToMrbZrM2xrl1RBANKIecZgDNQAAG7vP9vLOVEReiKq1BPwLQ3rNCWC16vccGpdTm7QRBcI7CiCLq9UYdCBP7ReWLImGQpNSHYWi2WvVhBIK0YR5vFCgHQWJ7E0hflUXkQEQXEhAWuQjjhJtTgRA4Wd5arZqRBooMLpdHRagfFhlhShB0TgDJUgcLKuAJAgiKhVJtmMstrvbVRJIVIXUSMciPEjSk0nOCGJLlvQtTgaBTgrxj5bnwK2nYDUwVAvbmoDgU0+ZkSDdCPVDlGNLQUGgBIj2C4qj+7FBlamOOSa6JPKaQ7xuVINjaT2iNYuI1waTM9U0mCAjASL34mFW8AFer/HPCaZEIx3TxvcYvPORx0pGrUeDNwakOu3tknhz83ILj34BRjp9cqCgXVDiF4fz6uZWlQEl7vgFIvi8qsyUD+wAAAABJRU5ErkJggg==');
      }
      p {
        padding-top: 6px;
        font: normal normal normal 14px/19px Roboto;
        color: rgba(109, 113, 122, 1);
        min-height: 75px;
        max-width: 400px;
        word-break:break-all;
      }
      p.big {
        min-height: 100px;
        padding-top: 4px;
      }
      .btn-ground {
        gap: 24px;
        margin-top: 24px;
      }
      .btn-ground button {
        border: unset;
        outline: none;
        display: flex;
        align-items: center;
        justify-content: center;
        min-width: 120px;
        height: 40px;
        border-radius: 6px;
        cursor: pointer;
        padding: 0 10px;
        box-sizing: border-box;
      }
      .cancel-btn {
        background: rgba(30, 30, 46, 0.1);
        font: normal normal normal 14px/19px Roboto;
        color: rgba(30, 30, 46, 1);
      }
      .cancel-btn:hover {
        background: rgba(30, 30, 46, 0.2);
      }
      .submit-btn {
        background: rgba(139, 61, 255, 1);
        font: normal normal normal 14px/19px Roboto;
        color: rgba(255, 255, 255, 1);
      }
      .submit-btn:hover {
        background: rgba(155, 87, 255, 1);
      }
      .submit-btn.del {
        background: rgba(235, 51, 88, 1);
      }
      .submit-btn.del:hover {
        background: rgba(255, 80, 115, 1);
      }
      .submit-btn.loading {
        text-indent: -99999px;
        /* font-size:0; */
      }
      .submit-btn.loading:after {
        content: '';
        font-size: 8px;
        width: 1em;
        height: 1em;
        border-radius: 50%;
        position: relative;
        display: block;
        animation: flash-black 1.5s ease-out infinite alternate;
      }
    `]);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Xs extends Kh{constructor(e){if(super(e),this.et=tl,e.type!==Xh.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===tl||e==null)return this.ft=void 0,this.et=e;if(e===Gh)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.et)return this.ft;this.et=e;const i=[e];return i.raw=i,this.ft={_$litType$:this.constructor.resultType,strings:i,values:[]}}}Xs.directiveName="unsafeHTML",Xs.resultType=1;const pC=zh(Xs);class Gs extends fe{constructor(){super();M(this,"renderLi",()=>{if(this.countPage<=1)return"";let i="";if(this.countPage<=5)for(let r=1;r<=this.countPage;r++)i+=`
        <li class="${r===this.currentPage?"active":""}">${r}</li>
        `;else for(let r=1;r<=this.countPage;r++)r===1||r===this.countPage?i+=`
          <li class="${r===this.currentPage?"active":""}">${r}</li>
          `:r===this.currentPage?i+=`
          <li class="active">${r}</li>
          `:r===this.currentPage-1?this.currentPage-1>2?i+=`
                    <li class="not-hover">...</li>
                    <li>${r}</li>
                    `:i+=`
                    <li>${r}</li>
          `:r===this.currentPage+1&&(this.currentPage+1<this.countPage-1?i+=`
                    <li>${r}</li>
                    <li class="not-hover">...</li>
                    `:i+=`
                    <li>${r}</li>
                    `);return pC(i)});this.countPage=1,this.currentPage=1}render(){return this.countPage<this.currentPage&&(this.currentPage=this.countPage),O`
      <div class="list-pagination flex-item-center flex-center" style="display:${this.countPage<=1?"none":"flex"}">
        <div class="btn pre-page ${this.currentPage===1?"off":""}" title="Previous page"></div>
        <ul>
          ${this.renderLi()}
        </ul>
        <div class="btn next-page ${this.currentPage===this.countPage?"off":""}" title="Next page"></div>
      </div>
    `}updated(i){this.shadowRoot.querySelectorAll("li").forEach(r=>{r.onclick=()=>{this.currentPage=~~r.innerText,this.changePage()}}),this.shadowRoot.querySelector(".pre-page").onclick=()=>{this.currentPage>=2&&(this.currentPage-=1,this.changePage())},this.shadowRoot.querySelector(".next-page").onclick=()=>{this.currentPage<=this.countPage-1&&(this.currentPage+=1,this.changePage())}}changePage(){this.dispatchEvent(new CustomEvent("pagechange",{detail:{value:this.currentPage}}))}setCountPage(i){this.countPage=i}setCurrentPage(i){this.currentPage=i}}M(Gs,"properties",{text:"",countPage:{type:Number,attribute:!0},currentPage:{type:Number,attribute:!0}}),M(Gs,"styles",[Be`
    :host{
      
      /* position:relative;
      bottom:36px;
      width:100%; */
    }
    .list-pagination{
      gap:12px;
      position:absolute;
      bottom:36px;
      left:50%;
      transform:translateX(-50%)
    }
    .btn{
      cursor:pointer;
      width: 32px;
      height: 32px;
      background-image:url('/image/svg/ico_return.svg');
      background-repeat:no-repeat;
      background-position: center center;
      background-size: 8.5px 15px;
      border-radius: 4px;
    }
    .btn:hover{
      background-color: rgba(30, 30, 46, 0.1) ;
    }
    .btn.off{
      opacity:0.2;
      cursor:default
    }
    .btn.off:hover{
      background-color: rgba(255, 255, 255, 1) ;
    }
    .next-page{
      transform:rotate(180deg)
    }
    ul {
      display:flex;
      gap:12px;
    }
    ul li{
      list-style:none;
      cursor:pointer;
      width: 32px;
      height: 32px;
      background: rgba(30, 30, 46, 0.1) ;
      border-radius: 4px;
      display:flex;
      align-items:center;
      justify-content:center;
      color: rgba(30, 30, 46, 1);
      font: normal normal normal 14px/19px Roboto;
    }
    ul li:not(.not-hover):hover,ul li.active{
      color: rgba(255, 255, 255, 1);
      background-color:rgba(30, 30, 46, 1);
    }
    .not-hover{
      cursor:auto;
      pointer-events:none;
    }
      
    `,_e]);class Ys extends fe{constructor(){super();M(this,"bottomMessage",ge());this.text="",this.type="success",this.showtime=3e3,this.timer=null}render(){return O`
      <div ${be(this.bottomMessage)} class="bottom-message flex-item-center ${this.type==="error"?"ero":this.type==="btnmsg"?"btn-msg":this.type==="avatar"?"avatar":""}">
      <i class="icon-before"></i>
      <p class="text">${this.text}</p>
      <button @click=${this.submitFun}>Undo</button>
      </div>
    `}firstUpdated(){this.showtime!==0&&(this.timer=setTimeout(()=>{this&&(this.bottomMessage.value.style.display="none",this.remove())},this.showtime)),setTimeout(()=>{this.bottomMessage.value.classList.add("on")},0)}submitFun(){clearTimeout(this.timer),this.remove(),this.dispatchEvent(new CustomEvent("btnclick"))}}M(Ys,"properties",{text:"",type:"",showtime:{type:Number}}),M(Ys,"styles",[_e,Be`
     .bottom-message{
      position: fixed;
      left: 50%;
      bottom: 0;
      transform:translateX(-50%);
      padding:12px 20px 12px 16px;
      background-color: rgba(202, 239, 223, 1);
      border-radius:6px;
      height:44px;
      box-sizing: border-box;
      opacity:0;
      transition: bottom 0.3s,opacity 0.3s;
      z-index:9999
     }
     .bottom-message.on{
      bottom: 50px;
      opacity:1;
     }
     .icon-before{
      background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABHNCSVQICAgIfAhkiAAAAd5JREFUOE+1VMFRwlAQ3R+cAU5iBWIFQAUExgI8oidSAVgBUIFQQXJSvFmAQjowdAAVwA2YkXzfkvzwE5PgQTPDZMj+ffve2/0rKOcx7buKkOWaENLkY1IKV4rtwrXeNllpIi1wa3dMn8hGrJqRuDSIrHdr6ibjMUBmZFBxQCT6OLjA2zFIeioxKCTq4NpFvIb32Kf9SGccATJYgYpzeUyg0cyaDvPsaNsdjg8ECh5o31KgEWDbvh+jYs8no+Faz14emIqZ9kPdIP8TSiYz64VV0REw9Gz+G2bJQoopPG2xNUdAfFzitYFMlnv2YWYFOjQ/rNdJmM+KLpF/I4JGlNYg+wjakJ3/BDIPUCNWigDsglz55NPuSii5inIenA6GZFM1QscQygNUixrUsjsO/rj45sQbEDDTwTiuq0wFRBEX55r4WQyaxexU7GRbquSwIoNieGkIf+DRT2YKMCY5qykJ0EVSpu51rClqbDDxa4xBQz8YgvYBNs5bCLCIx6YCe6r/M9gByz+8elrro0aA/ihvJtW44UzM35T1Veau9niL4LDjS8PjpcrgvGwN4fP17AZbSUx82g5T15fOJhwDHurrDJYr3Kzu2QWbTOYuX1Cpju1tgs2Gl+0X7by8jn8DjYAp7HwZtcsAAAAASUVORK5CYII=');
      width: 20px;
      height: 20px;
      flex-shrink:0;
     }
     .bottom-message .text{
      font: normal normal normal 14px/19px Roboto;
      color: rgba(66, 159, 88, 1);;
      padding-left: 8px;
     }
     .bottom-message button{
      margin-left:90px;
      border-radius:4px;
      background:rgba(139, 61, 255, 1);
      text-align: center;
      height:32px;
      font: normal normal normal 14px/32px Roboto;
      color: rgba(255, 255, 255, 1);
      padding:0 23px;
      border:unset;
      outline:none;
      display: none;
      cursor:pointer;
     }
     .bottom-message button:hover{
      background:rgba(155, 87, 255, 1);
     }
     .bottom-message.ero{
      background:rgba(255, 225, 233, 1);
     }
     .bottom-message.ero .icon-before{
      background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABHNCSVQICAgIfAhkiAAAAg9JREFUOE+1lT1S21AQx3dlPRmqQEMLOYHFTA4gbpAbxDkBUECDNcgj0yQF5gQxN8gN8AEyE/kGpE2DO7CfrJf/yn7Os7AFBWjGs5Lf7m8/tWKquQwlO7nvtQriSNQ8MkM/L0ZMyXiTGa87ePTTyGP+QWQO1hvyfWHM1+08HlbPV4ASkVbepSE+geIIcmCMyayhOGLmkMm0cd6C7CtddN2Il0CBTVXjDoohGeo28zipK8fETxNiuoROFujZkYUugVOV9g3RMZN3GOiLrA5mz6bqKjRU/AbkJtCxZAUfuOY1o7vXRFZ1ZCMtDB1JaUrgRKX3EOOmjkNrMAnSz7j/1JzGHRfypHonHvHQzQL2yIg/NHXnIy9q94AGnG7pTt8B9hDxBXL4Duj5wvEA8ktVV5ygQdeo5S7bdG3IbjSI8hugZwKF3BMYfrfIRLq8vFwG2xpAae1MLqFz82cw+dPN8mWgSss0S5yTvhvhCrA25f+wW8D+2vRtTS10JeVNTbGFdtN0anrldn+lKYvuydg8oI6H1qsMbUEmcjtf6gZpD+IXgD+t7nxsaAf2B+8z2OLpTV89p/VD3LdkDrAcum4nq/fOchhhoKNny8FCtWoksiTwnEEOGlhfslTlXJbtrFxf1MajyBulZ8na9eVGsBgDmb/9DVH+wZvVfnHBVo1lpJ78RugRRYZ5LMt2K59ldZ+AfzIBPqDminRuAAAAAElFTkSuQmCC');
     }
     .bottom-message.ero .text{
        color: rgba(249, 5, 131, 1);
     }
     .bottom-message.btn-msg{
      padding:12px 8px 12px 16px;
      background:rgba(244, 236, 255, 1);
     }
     .bottom-message.btn-msg .icon-before{
      background: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCI+CiAgPGRlZnM+CiAgICA8Y2xpcFBhdGggaWQ9ImNsaXAtcGF0aCI+CiAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGVfMjI1NCIgZGF0YS1uYW1lPSJSZWN0YW5nbGUgMjI1NCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg3OTggODM2KSIgZmlsbD0iI2ZmZiIgc3Ryb2tlPSIjOGIzZGZmIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDwvY2xpcFBhdGg+CiAgPC9kZWZzPgogIDxnIGlkPSJwcm9tcHRfaGludCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTc5OCAtODM2KSIgY2xpcC1wYXRoPSJ1cmwoI2NsaXAtcGF0aCkiPgogICAgPGcgaWQ9InZ1ZXNheF9saW5lYXJfaW5mby1jaXJjbGUiIGRhdGEtbmFtZT0idnVlc2F4L2xpbmVhci9pbmZvLWNpcmNsZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTE4Mi43OTYgMTEwOC43OTYpIHJvdGF0ZSgxODApIj4KICAgICAgPGcgaWQ9ImluZm8tY2lyY2xlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzNjYgMjU0KSI+CiAgICAgICAgPHBhdGggaWQ9IlZlY3RvciIgZD0iTTguOCwxNy41OTJBOC44LDguOCwwLDEsMCwwLDguOCw4LjgyMiw4LjgyMiwwLDAsMCw4LjgsMTcuNTkyWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjOGIzZGZmIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41Ii8+CiAgICAgICAgPHBhdGggaWQ9IlZlY3Rvci0yIiBkYXRhLW5hbWU9IlZlY3RvciIgZD0iTTAsMFY0LjQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDguNzk2IDUuMjc4KSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjOGIzZGZmIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41Ii8+CiAgICAgICAgPHBhdGggaWQ9IlZlY3Rvci0zIiBkYXRhLW5hbWU9IlZlY3RvciIgZD0iTTAsMEguMDA4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4Ljc5MSAxMi4zMTQpIiBmaWxsPSJub25lIiBzdHJva2U9IiM4YjNkZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICAgIDwvZz4KICAgIDwvZz4KICA8L2c+Cjwvc3ZnPgo=');
     }
     .bottom-message.btn-msg .text{
        color: rgba(139, 61, 255, 1);
     }
     .bottom-message.btn-msg button{
        display:block;
     }
     .bottom-message.avatar{
      position:absolute;
      background-color: rgba(232, 182, 83, 1);
     }
     .bottom-message.avatar.on{
      bottom: 20px;
      opacity:1;

     }
     .bottom-message.avatar .icon-before{
      background: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCI+CiAgPGRlZnM+CiAgICA8Y2xpcFBhdGggaWQ9ImNsaXAtcGF0aCI+CiAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGVfMTcxNCIgZGF0YS1uYW1lPSJSZWN0YW5nbGUgMTcxNCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4NDAgNTg5KSIgZmlsbD0iI2ZmZiIgc3Ryb2tlPSIjNzA3MDcwIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDwvY2xpcFBhdGg+CiAgPC9kZWZzPgogIDxnIGlkPSJ0aXBzX3doaXRlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtODQwIC01ODkpIiBjbGlwLXBhdGg9InVybCgjY2xpcC1wYXRoKSI+CiAgICA8cGF0aCBpZD0iUGF0aF83MDAxIiBkYXRhLW5hbWU9IlBhdGggNzAwMSIgZD0iTTczLjQ4MSw2NGE5LjUsOS41LDAsMSwxLTYuNywyLjc4M0E5LjQ1Nyw5LjQ1NywwLDAsMSw3My40ODEsNjRaTTc0LjksNjkuODIxYTEuMywxLjMsMCwwLDAsLjkxLS4zMjksMS4yNSwxLjI1LDAsMCwwLDAtMS43NTYsMS40LDEuNCwwLDAsMC0xLjgsMCwxLjI1MywxLjI1MywwLDAsMCwwLDEuNzU2LDEuMjczLDEuMjczLDAsMCwwLC44ODkuMzI5Wm0uMjU1LDcuNjE5YzAtLjA4NS4wMDctLjIuMDIxLS4zMzlhMS45MzEsMS45MzEsMCwwLDAsMC0uNGwtMS4xMjIsMS4yOWExLjQ4MiwxLjQ4MiwwLDAsMS0uMzQ5LjMuMzc1LjM3NSwwLDAsMS0uMzA3LjA2NC4yNjcuMjY3LDAsMCwxLS4xNjktLjNsMS44NjItNS44NjJhMS4yMTksMS4yMTksMCwwLDAtMS4xNDItMS41MjQsMy4wODIsMy4wODIsMCwwLDAtMS42MTkuNjI1LDYuMSw2LjEsMCwwLDAtMS41MzUsMS41MzR2LjMxOGExLjkzLDEuOTMsMCwwLDAsMCwuNGwxLjEyMi0xLjI5MWExLjQ4MSwxLjQ4MSwwLDAsMSwuMzQ5LS4zLjMzOS4zMzksMCwwLDEsLjI4Ni0uMDYzLjI2My4yNjMsMCwwLDEsLjE0OC4zMzlsLTEuODQyLDUuODQxYTEuMDUyLDEuMDUyLDAsMCwwLC4xNDkuOTQyLDEuNiwxLjYsMCwwLDAsMS4wMzcuNTYsMi43ODksMi43ODksMCwwLDAsMS43NzgtLjYxMyw2LjgyMSw2LjgyMSwwLDAsMCwxLjMzNC0xLjUyM2gwWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNzc2LjUxOSA1MjUuNTE5KSIgZmlsbD0iI2ZmZiIvPgogIDwvZz4KPC9zdmc+Cg==');
     }
     .bottom-message.avatar .text{
      color:rgba(255, 255, 255, 1);
     }
    `]);class Vs extends fe{constructor(){super();M(this,"SelectedBox",ge());this.text="",this.num=0,this.type="",this.hdownload=""}render(){return O`
      <div ${be(this.SelectedBox)} class="flex flex-item-center flex-between selected-opteration-box">
        <span class="text ">${this.num} ${this.text}</span>
        <i class="download-icon hover" @click="${this.downloadFun}" title="Download" style="display:${this.hdownload==="hdownload"?"none":"block"}"></i>
        <i class="restore-icon hover" @click="${this.restoreFun}" title="Restore" style="display:${this.type==="recycle"?"block":"none"}"></i>
        <i class="delete-icon hover" @click="${this.deleteFun}" title="${this.type==="recycle"?"Delete selected items permanently":"Delete"}" style="margin-left:${this.type==="recycle"||this.hdownload!=="hdownload"?"0":"40px"}"></i>
        <button class="hover" @click="${this.calcelFun}">Cancel</button>
      </div>
    `}downloadFun(){this.SelectedBox.value.style.display="none",this.dispatchEvent(new CustomEvent("download"))}restoreFun(){this.hideFun(),this.dispatchEvent(new CustomEvent("restore"))}deleteFun(){this.hideFun(),this.dispatchEvent(new CustomEvent("delete"))}calcelFun(){this.hideFun(),this.dispatchEvent(new CustomEvent("calcel"))}setNum(i){this.num=i}showFun(){this.SelectedBox.value&&(this.SelectedBox.value.style.display="flex")}hideFun(){this.SelectedBox.value&&(this.SelectedBox.value.style.display="none")}}M(Vs,"properties",{text:"",type:{attribute:!0},hdownload:{attribute:!0},num:{attribute:!0}}),M(Vs,"styles",[_e,Be`
    .selected-opteration-box{
      position:fixed;
      bottom: 32px;
      width:440px;
      height: 48px;
      background: #9B57FF;
      border-radius: 6px;
      padding: 6px 8px 6px 26px;
      box-sizing: border-box;
      box-shadow: 0px 3px 6px #00000029;
      border: 2px solid #FFFFFF;
      gap:8px;
      z-index:99;
      display: none;
    }
    .text{
      font: normal normal normal 14px/19px Roboto;
      color: #FFFFFF;
      width: 244px;
    }
    .selected-opteration-box *{
      flex-shrink:0;
    }
    .selected-opteration-box >i{
      width:32px;
      height:32px;
      background-repeat: no-repeat;
      background-size: 22px 22px;
      background-position: center;
      border-radius: 8px;
    }
    .download-icon{
      background-image:url('/image/img/selected_download.png');
    }
    .delete-icon{
      background-image:url('/image/img/selected_delete.png');
    }
    .restore-icon{
      background-image:url('/image/img/selected_restore.png');
    }
    .hover:hover{
      cursor: pointer;
      background-color:rgba(255, 255, 255, 0.2);
    }
    button{
      border:unset;
      outline:none;
      width:70px;
      height:32px;
      font: normal normal normal 14px/32px Roboto;
      background:unset;
      color: #FFFFFF;
      border-radius: 4px;
    }
  `]);class Ws extends fe{constructor(){super();M(this,"speedList",[{title:"0.25x",value:"0.25"},{title:"0.5x",value:"0.5"},{title:"1.0x",value:"1.0"},{title:"1.5x",value:"1.5"},{title:"1.75x",value:"1.75"},{title:"2.0x",value:"2.0"}]);this.videoClassName="",this.fullClassName="",this.showFullPlayBtn="false",this.isFullScreen="false",this.isVertical="false",this.isSpeed="false",this.totalTime=0,this.currentTime=0,this.clickVolume=!1,this.timer=null,this.inComponentId="",this.pageName="",this.speed="1.0",this.isProgress=!1,this.showPlayTime="show"}render(){return O`
      <div class="video-controls   ${this.isVertical==="true"?"vertical":""} ${this.isFullScreen==="true"?"full-screen":""}" @mousemove="${this.showControls}" @mouseleave="${this.hideControls}">
        <div class="controls-full-btn play-btn" style="display:${this.showFullPlayBtn==="true"?"block":"none"}" @click="${this.playClick}"></div>
        <div class="small-loading"></div>

        <div class="video-controls-boy ${this.clickVolume?"show":""}">
          <div class="video-controls-main" @mouseleave='${this.controlsMainLeave}'>
            <div class="controls-play-btn play-btn" @click="${this.playClick}"></div>
            <div class="controls-time-part" style="display:${this.showPlayTime==="show"?"flex":"none"}" >
              <div class="controls-current-time">${il(this.currentTime)}</div>
              <i> / </i>
              <div class="controls-total-time">${il(this.totalTime)}</div>
            </div>
            <div class="controls-progress-bar-box" @mousedown="${i=>{this.seekVideoTime(i)}}">
                <div class="controls-progress"></div>
            </div>
            <div class="controls-speed-box" style="display:${this.isSpeed==="true"?"block":"none"}" @mouseenter="${this.showSpeed}" @mouseleave="${this.hideSpeed}">
              <i class="controls-speed-data">${this.speed}x</i>
              <ul class="controls-speed-select" >
                ${this.speedList.map(i=>O`
                  <li class="controls-speed-select-option ${i.value===1?"active":""}"
                   @click="${r=>this.changeSpeed(r,i.value)}">${i.title}</li>
                `)}
              </ul>
            </div>
            <div class="controls-volum-box ${this.isSpeed==="true"?"hasSpeed":""}" @click="${this.showVolume}" style="display:${this.pageName==="asset"?"none":"block"}">
              <i class="controls-volum-icon"></i>
              <div class="controls-volum-operation-part">
                <div class="controls-volum-progress-bar-box" @mousedown="${i=>{this.changeVideoVolume(i)}}">
                  <div class="controls-volum-progress"></div>
                </div>
              </div>
            </div>
            <div class="controls-full-screen-btn" @click="${this.toggleFullScreen}"></div>
          </div>
        </div>

      </div>
    `}firstUpdated(){document.addEventListener&&document.addEventListener("fullscreenchange",()=>{this.exitHandler()},!1)}init(){const i=this.getVideoDomElement(),r=this.shadowRoot.querySelectorAll(".play-btn");(!this.totalTime||!~~this.totalTime)&&(this.totalTime=i.duration),r.forEach(n=>{n.classList.remove("pause")}),this.shadowRoot.querySelector(".controls-progress").style.width="0",i.onpause=()=>{cancelAnimationFrame(this.requestId),r.forEach(n=>{n.classList.remove("pause")})},i.onplay=()=>{this.requestId=requestAnimationFrame(()=>{this.updateProgress()}),r.forEach(n=>{n.classList.add("pause")})},i.onended=()=>{this.shadowRoot.querySelector(".controls-progress").style.width=0,i.currentTime=0,this.currentTime=0,r.forEach(n=>{n.classList.remove("pause")})},this.shadowRoot.querySelector(".controls-progress-bar-box").addEventListener("mousedown",()=>{this.isProgress=!0,cancelAnimationFrame(this.requestId)}),document.addEventListener("mouseup",()=>{this.isProgress&&(this.requestId=requestAnimationFrame(()=>{this.updateProgress()}),this.isProgress=!1)})}showSpeed(){this.shadowRoot.querySelector(".controls-speed-box").classList.add("select")}updateProgress(){const i=this.getVideoDomElement();this.currentTime=i.currentTime;let r=(i.currentTime/~~this.totalTime).toFixed(4);r=r>1?1:r,this.shadowRoot.querySelector(".controls-progress").style.width=`${r*100}%`,this.requestId=requestAnimationFrame(()=>{this.updateProgress()})}hideSpeed(){this.shadowRoot.querySelector(".controls-speed-box").classList.remove("select")}changeSpeed(i,r){const n=this.getVideoDomElement();this.shadowRoot.querySelectorAll(".controls-speed-select-option").forEach(o=>{o.classList.remove("active")}),i.target.classList.add("active"),n.playbackRate=r,this.speed=r,this.hideSpeed()}seekVideoTime(i){this.isProgress=!0,Yh(i,"controls-progress",!1,r=>{const n=(~~this.totalTime*r).toFixed(2);if(isNaN(n))return;const a=this.getVideoDomElement();a.currentTime=n,this.currentTime=n})}changeVideoVolume(i){i.preventDefault(),this.clickVolume=!0;const r=this.getVideoDomElement(),n=i.currentTarget,a=this.shadowRoot.querySelector(".controls-volum-progress"),o=n.clientHeight;let s=o-(i.clientY-n.getBoundingClientRect().y);const A=()=>{s=s<0?0:s>o?o:s,s===0?this.shadowRoot.querySelector(".controls-volum-icon").classList.add("mute"):this.shadowRoot.querySelector(".controls-volum-icon").classList.remove("mute"),r.volume=(s/o).toFixed(2);const u=s/o*100;a.style.height=`${u<20?20:u}%`};A();const l=u=>{s=o-(u.clientY-n.getBoundingClientRect().y),A()},c=()=>{window.removeEventListener("mousemove",l),window.removeEventListener("mouseup",c),this.clickVolume=!1,this.controlsMainLeave()};window.addEventListener("mousemove",l),window.addEventListener("mouseup",c)}showVolume(){this.shadowRoot.querySelector(".controls-volum-box").classList.add("showvolume")}controlsMainLeave(){this.clickVolume||this.shadowRoot.querySelector(".controls-volum-box").classList.remove("showvolume")}playClick(){const i=this.getVideoDomElement();i.readyState===4&&(i.paused?i.play():i.pause())}exitHandler(){document.fullscreenElement||(this.isFullScreen="false")}toggleFullScreen(){this.isFullScreen==="true"?(this.exitFullscreen(),this.isFullScreen="false"):(this.isFullScreen="true",this.videoFullScreen(this.inComponentId?document.querySelector(`#${this.inComponentId}`).shadowRoot.querySelector(`.${this.fullClassName}`):document.querySelector(`.${this.fullClassName}`))),this.dispatchEvent(new CustomEvent("screenchange",{detail:{value:this.isFullScreen}}))}videoFullScreen(i){i.requestFullscreen?i.requestFullscreen():i.mozRequestFullScreen?i.mozRequestFullScreen():i.msRequestFullscreen?i.msRequestFullscreen():i.oRequestFullscreen?i.oRequestFullscreen():i.webkitRequestFullscreen&&i.webkitRequestFullscreen()}exitFullscreen(){document.exitFullScreen?document.exitFullScreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen()}showControls(){clearTimeout(this.timer),this.shadowRoot.querySelector(".video-controls").classList.add("mousemove"),this.timer=setTimeout(()=>{this.isFullScreen==="true"&&this.shadowRoot.querySelector(".video-controls").classList.remove("mousemove")},3e3)}hideControls(){this.shadowRoot.querySelector(".video-controls").classList.remove("mousemove")}getVideoDomElement(){let i="";return this.inComponentId?i=document.querySelector(`#${this.inComponentId}`).shadowRoot.querySelector(`.${this.videoClassName}`):i=document.querySelector(`.${this.videoClassName}`),i}}M(Ws,"properties",{videoClassName:"",fullClassName:"",showFullPlayBtn:"",isFullScreen:"",isVertical:"",isSpeed:"",totalTime:"",currentTime:"",clickVolume:{type:Boolean},inComponentId:"",pageName:"",speed:"",showPlayTime:""}),M(Ws,"styles",[_e,Be`
      .video-controls {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 100%;
  border-radius: 0px 0px 6px 6px;
  box-sizing: border-box;
}

.video-controls.mousemove .video-controls-boy {
  display: block;
}
.video-controls.mousemove .controls-full-btn.pause {
  visibility: visible;
}

.small-loading {
  position: relative;
  display: none;
}

.controls-full-btn {
  background-color: rgba(30, 30, 46, 0.25);
  background-image: url("/image/svg/video_play.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 40px 40px;
  width: 104px;
  height: 104px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  cursor: pointer;
  z-index:1;
}

.controls-full-btn.pause {
  background-image: url("/image/svg/video_pause.svg");
  visibility: hidden;
}

.controls-full-btn:hover {
  background-color: rgba(30, 30, 46, 0.5);
}

.video-controls-boy {
  width: 100%;
  height: 110px;
  background: transparent linear-gradient(180deg, #54517B00 0%, #1E1E2E 100%);
  border-radius: inherit;
  position: absolute;
  bottom: 0;
  left: 0;
  display: none;
}
.video-controls-boy.show{
  display: block !important;
}

.video-controls-main {
  display: flex;
  align-items: center;
  padding: 0 20px 20px;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  box-sizing: border-box;
}

.controls-play-btn {
  background: url("/image/svg/video_play.svg") no-repeat center/cover;
  width: 22px;
  height: 22px;
  position: relative;
  cursor: pointer;
}

.controls-play-btn.pause {
  background: url("/image/svg/video_pause.svg") no-repeat center/cover;
}

.controls-play-btn:hover:before {
  content: "";
  display: block;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 12px;
  background-color: rgba(255, 255, 255, 0.2);
  width: 40px;
  height: 40px;
}

.controls-time-part {
  display: flex;
  font: normal normal normal 12px/16px Roboto;
  color: white;
  padding-left: 14px;
}

.controls-time-part > * {
  font: inherit;
  color: inherit;
  font-style: unset;
}

.controls-progress-bar-box {
  flex: 1;
  height: 6px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 5px;
  /* overflow:hidden; */
  position: relative;
  margin-left: 32px;
  cursor: pointer;
}

.controls-progress {
  position: absolute;
  left: 0;
  width: 0%;
  height: 100%;
  border-radius: inherit;
  background-color: white;
}

.controls-progress::after {
  content: "";
  position: absolute;
  right: -8px;
  top: 50%;
  transform: translateY(-50%);
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: inherit;
  display: block;
}

.controls-progress:hover::after {
  display: block;
}

.controls-volum-box {
  position: relative;
  margin-left: 24px;
  cursor: pointer;
}

.controls-volum-box.hasSpeed{
  margin-left:10px;
}

.controls-volum-box .controls-volum-icon {
  background: url("/image/svg/video_volume.svg") no-repeat center/cover;
  width: 20px;
  height: 20px;
  position: relative;
  display: block;
}

.controls-volum-box .controls-volum-icon.mute {
  background: url("/image/svg/video_volume_mute.svg") no-repeat center/cover;
}

.controls-volum-box .controls-volum-icon:hover:before {
  content: "";
  display: block;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.2);
  width: 32px;
  height: 32px;
}

.controls-volum-box .controls-volum-operation-part {
  position: absolute;
  bottom: 100%;
  margin-bottom: 10px;
  width: 100%;
  justify-content: center;
  display: none;
  width: 32px;
  height: 83px;
  box-sizing: border-box;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  align-items: center;
  left: 50%;
  transform: translateX(-50%);
}
.controls-volum-box .controls-volum-operation-part::after{
  content: "";
  display: block;
  position: absolute;
  left: 0;
  bottom: -10px;
  width:100%;
  height:10px;
  background-color:transparent;
}

.controls-volum-box .controls-volum-operation-part .controls-volum-progress-bar-box {
  cursor: pointer;
  width: 6px;
  height: 64px;
  border-radius: 6px;
  background-color: rgba(0, 0, 0, 0.4);
  position: relative;
}

.controls-volum-box .controls-volum-operation-part .controls-volum-progress-bar-box .controls-volum-progress {
  position: absolute;
  left: 0;
  height: 100%;
  width: 100%;
  bottom: 0;
  border-radius: inherit;
  background-color: white;
}

.controls-volum-box .controls-volum-operation-part .controls-volum-progress-bar-box .controls-volum-progress::after {
  content: "";
  position: absolute;
  left: -9px;
  left: 50%;
  transform: translateX(-50%);
  width: 18px;
  height: 18px;
  top:0px;
  border-radius: 50%;
  background-color: inherit;
  display: block;
}

.controls-volum-box:hover .controls-volum-icon:before {
  content: "";
  display: block;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.2);
  width: 32px;
  height: 32px;
}

.controls-volum-box.showvolume .controls-volum-operation-part {
  display: flex;
}

.controls-full-screen-btn {
  background: url("/image/svg/video_full_screen.svg") no-repeat center/cover;
  width: 20px;
  height: 20px;
  position: relative;
  margin-left: 16px;
  cursor: pointer;
}

.controls-full-screen-btn:hover:before {
  content: "";
  display: block;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.2);
  width: 32px;
  height: 32px;
}

.vertical {
  padding: 0 16px 16px;
}

.vertical .video-controls-main {
  flex-wrap: wrap;
}

.vertical .video-controls-main .controls-volum-box {
  margin-left: auto;
}

.vertical .video-controls-main .controls-volum-box.hasSpeed{
  margin-left: 10px;
}

.vertical .controls-speed-box{
  margin-left: auto;
}

.full-screen .controls-speed-box{
  margin-left:24px;
}

.vertical:not(.full-screen) .video-controls-main .controls-progress-bar-box {
  order: 1;
  margin-left: unset;
  margin-top: 12px;
  width: 100%;
  flex: unset;
}

.full-screen .video-controls-boy {
  height: 300px;
}

.full-screen .video-controls-boy .video-controls-main {
  padding: 0 34px 27px;
}

.full-screen .video-controls-boy .video-controls-main .controls-play-btn {
  width: 40px;
  height: 40px;
}

.full-screen .video-controls-boy .video-controls-main .controls-play-btn:hover:before {
  width: 56px;
  height: 56px;
}

.full-screen .video-controls-boy .video-controls-main .controls-time-part {
  padding-left: 40px;
  font: normal normal normal 14px/18px Lexend;
}

.full-screen .video-controls-boy .video-controls-main .controls-progress-bar-box {
  margin-left: 24px;
}

.full-screen .video-controls-boy .video-controls-main .controls-volum-box {
  margin-left: 29px;
}

.full-screen .video-controls-boy .video-controls-main .controls-volum-box.hasSpeed{
  margin-left: 24px;
}

.full-screen .video-controls-boy .video-controls-main .controls-full-screen-btn {
  background: url("/image/svg/video_smell_screen.svg") no-repeat center/cover;
  margin-left: 24px;
}

.controls-speed-box {
  position:relative;
  margin-left:21px;
}

.controls-speed-box .controls-speed-data{
  border-radius: 6px;
  width: 42px;
  height: 32px;
  font: normal normal bold 14px/24px Roboto;
  color: #FFFFFF;
  cursor:pointer;
  display:flex;
  align-items:center;
  justify-content:center;
}

.controls-speed-box:hover .controls-speed-data{
  background: rgba(255, 255, 255, 0.2);
}

.controls-speed-box .controls-speed-select{
  position:absolute;
  top:-183px;
  left:50%;
  transform:translateX(-50%);
  display:flex;
  flex-direction:column;
  align-items:center;
  padding:10px 20px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 6px;
  display:none;
}
.controls-speed-box .controls-speed-select::after{
  content:"";
  display:block;
  width:100%;
  background-color: transparent !important;
  height:13px;
  position:absolute;
  bottom:-10px;
}
.controls-speed-box.select .controls-speed-select{
  display:flex;
}

.controls-speed-box .controls-speed-select .controls-speed-select-option{
  font: normal normal bold 14px/19px Roboto;
  margin-top:8px;
  color: rgba(255, 255, 255, 1);
  cursor:pointer;
}
.controls-speed-box .controls-speed-select .controls-speed-select-option:first-child{
  margin-top:0;
}
.controls-speed-box .controls-speed-select .controls-speed-select-option:hover{
  color: rgba(192, 149, 255, 1);
}
.controls-speed-box .controls-speed-select .controls-speed-select-option.active{
  color: rgba(192, 149, 255, 1);
}


    `]);class Js extends fe{constructor(){super(),this.text="",this.isMob="hide"}render(){return O`
      <div class="mob-dialog-mask" style="display:${this.isMob==="hide"?"none":"flex"}">
        <div class="mob-dialog-body">
          <img src="/image/svg/tips_grey.svg" width="64" height="64">
          <p>Please login from your desktop or laptop computer.</p>
          <button @click="${this.goToWebsite}">Go Back to Homepage</button>
        </div>
      </div>
    `}firstUpdated(){this.hideShowDom(),window.addEventListener("resize",()=>{this.hideShowDom()},!1),window.addEventListener("load",()=>{this.hideShowDom()},!1),document.addEventListener("DOMContentLoaded",()=>{this.hideShowDom()},!1)}hideShowDom(){this.isMobile()?location.href="https://m.vidnoz.com/":this.isMob="hide"}isMobile(){return navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)}goToWebsite(){window.location.href="https://www.vidnoz.com/"}}M(Js,"properties",{text:"",isMob:""}),M(Js,"styles",[Be`
      .mob-dialog-mask{
        width:100vw;
        height:100vh;
        position:fixed;
        left:0;
        top:0;
        z-index:9999999999999999;
        display:flex;
        align-items:center;
        justify-content:center;
        background-color:#999999;
      }
      .mob-dialog-body{
        width:91%;
        height:344px;
        border-radius:8px;
        background-color:#fff;
      }
      .mob-dialog-body >*{
        display:block;
        box-sizing: border-box;
      }
      .mob-dialog-body >img{
        margin:48px auto 24px;
      }
      .mob-dialog-body >p{
        width:100%;
        text-align:center;
        padding:0 26px;
        font: normal normal 500 16px/24px Roboto;
        color: #1E1E2E;
      }
      .mob-dialog-body >button{
        margin:60px auto;
        padding:14px 26px;
        background:#8B3DFF;
        border-radius:6px;
        font: normal normal normal 14px/19px Roboto;
        color: #FFFFFF;
        outline:none;
        border:none;
        cursor:pointer;
      }
        
    `]);class js extends fe{constructor(){super();M(this,"_inputHandle",(i,r)=>{r?(i.siblings(".inputWaring").show(),i.addClass("input-error"),i.attr("name","stop")):(i.siblings(".inputWaring").hide(),i.removeClass("input-error"),i.attr("name","pass"))});this.userInfo={}}render(){var i,r;return O`
      <div class="change-password_dialog"  style="display: ${this.open==="true"?"flex":"none"};">
      <div class="dialog-content form-content">
        <div class="dialog-header">
          <p class="dialog-title">Change Password</p>
          <div class="dialog-close" @click=${this._close}>
            <img src="/image/img/window_close.png">
          </div>
        </div>
        <div class="dialog-main">
          <form class="dialog-form" autocomplete="off">
            <div class="form-item" style="display:${(i=this.userInfo)!=null&&i.password_enable?"flex":"none"}">
              <p class="form-item_title">Old password</p>
              <div>
                <input class="input" name=${(r=this.userInfo)!=null&&r.password_enable?"stop":"pass"} type="password" id="oldPassword"
                  placeholder="Current Password" @blur=${this._pwdBlur} @input=${this._pwdInput}>
                <div class="eyes-box">
                  <img src="/image/svg/eyes.svg" alt="" class="eyes" @click=${this._showPwd}>
                  <img src="/image/svg/eyes-close.svg" alt="" class="eyes-close"
                    style="display: none;" @click=${this._hidePwd}>
                </div>
                <div class="inputWaring" style="left: 0px; top: -46px;display:none;padding: 11px 15px;">
                  <p>The old password can not be blank.</p>
                </div>
              </div>
            </div>
            <div class="form-item">
              <p class="form-item_title">New password</p>
              <div>
                <input class="input" type="password" name="stop" id="newPassword"
                  placeholder="New Password" @blur=${this._pwdBlur} @input=${this._pwdInput}>
                <div class="eyes-box">
                  <img src="/image/svg/eyes.svg" alt="" class="eyes" @click=${this._showPwd}>
                  <img src="/image/svg/eyes-close.svg" alt="" class="eyes-close"
                    style="display: none;" @click=${this._hidePwd}>
                </div>
                <div class="inputWaring" style="left: 0; top: -45px;display:none">
                  <p>Password must be 6 to 20 characters.</p>
                </div>
              </div>
            </div>
            <div class="form-item">
              <p class="form-item_title">Confirm password</p>
              <div>
                <input class="input" type="password" name="stop" id="confirmPassword"
                  placeholder="Confirm New Password"  @blur=${this._confirmPwdBlur} @input=${this._confirmPwdInput}>
                <div class="eyes-box">
                <img src="/image/svg/eyes.svg" alt="" class="eyes" @click=${this._showPwd}>
                <img src="/image/svg/eyes-close.svg" alt="" class="eyes-close"
                  style="display: none;" @click=${this._hidePwd}>
              </div>
                <div class="inputWaring" style="left: 0; top: -45px;display:none;padding: 11px 10px;">
                  <p>Passwords don’t match. Please double-check and try again.</p>
                </div>
              </div>
            </div>
            <p class="note">Note: Password must be 6 to 20 characters.</p>
            <p class="note noNetwork" style="display: none;">Network failure. Please check your network connection and try again.</p>
          </form>
        </div>
        <div class="dialog-footer">
          <span class="cancel button" @click=${this._close}>Cancel</span>
          <span id="changeBtn" class="change-disabled" @click=${this._changePwd}>
            <span>Change</span>
            <div class="loading" style="display:none">
        </div>
        </span>
        </div>
      </div>
    </div>
    `}_pwdBlur(i){if(i.target.value.length<6||i.target.value.length>20){P(i.target).siblings(".inputWaring").show(),P(i.target).addClass("input-error"),P(i.target).siblings(".inputWaring").children("p").text("Password must be 6 to 20 characters.");return}if(i.target.value.startsWith(" ")||i.target.value.endsWith(" ")){P(i.target).siblings(".inputWaring").show(),P(i.target).addClass("input-error"),P(i.target).siblings(".inputWaring").children("p").text("Your password can’t start or end with a blank space.");return}P(i.target).siblings(".inputWaring").hide(),P(i.target).removeClass("input-error")}_pwdInput(i){if(i.target.value&&(P(i.target).siblings(".inputWaring").hide(),P(i.target).removeClass("input-error")),i.target.value.length<6||i.target.value.length>20){P(i.target).attr("name","stop"),this._changeHandle();return}if(i.target.value.startsWith(" ")||i.target.value.endsWith(" ")){P(i.target).attr("name","stop"),this._changeHandle();return}P(i.target).attr("name","pass"),this._changeHandle()}_initalForm(){var r;const i=P(this.renderRoot.querySelector(".change-password_dialog"));i.find(".dialog-form .input").val(""),i.find(".espical-error").removeClass("espical-error"),i.find(".dialog-form .input").attr({name:"stop",type:"password"}).removeClass("input-error").siblings(".inputWaring").hide(),(r=this.userInfo)!=null&&r.password_enable||i.find(".dialog-form #oldPassword").attr({name:"pass",type:"password"}).removeClass("input-error").siblings(".inputWaring").hide(),i.find(".dialog-form .eyes").show().next().hide(),i.find("#changeBtn").removeClass("change").removeClass("button").addClass("change-disabled"),i.find(".noNetwork").hide()}_close(){this.open=!1,this._initalForm()}_showPwd(i){P(i.target).hide().next().show(),P(i.target).parent().siblings(".input").attr("type","text")}_hidePwd(i){P(i.target).hide().prev().show(),P(i.target).parent().siblings(".input").attr("type","password")}_confirmPwdBlur(i){if(i.target.value!==P(this.renderRoot.querySelector("#newPassword")).val()){P(i.target).siblings(".inputWaring").show(),P(i.target).addClass("input-error");return}P(i.target).siblings(".inputWaring").hide(),P(i.target).removeClass("input-error")}_confirmPwdInput(i){if(i.target.value&&(P(i.target).siblings(".inputWaring").hide(),P(i.target).removeClass("input-error")),i.target.value!==P(this.renderRoot.querySelector("#newPassword")).val()){P(i.target).attr("name","stop"),this._changeHandle();return}P(i.target).attr("name","pass"),this._changeHandle()}_changeHandle(){this._valiteForm()?P(this.renderRoot.querySelector("#changeBtn")).removeClass("change-disabled").addClass("change").addClass("button"):P(this.renderRoot.querySelector("#changeBtn")).addClass("change-disabled").removeClass("change").removeClass("button")}_valiteForm(){const i=P(this.renderRoot.querySelector(".dialog-form")).find(".form-item .input");for(const r of i)if(r.name==="stop")return!1;return!0}async _changePwd(){const i=P(this.renderRoot.querySelector(".change-password_dialog"));if(i.find("#confirmPassword").val()!==i.find("#newPassword").val()&&(i.find("#confirmPassword").attr("name","stop"),this._changeHandle()),this._valiteForm()){if(i.find(".dialog-close,.cancel").css("pointer-events","none"),i.find(".loading").show().siblings("span").hide().parent("#changeBtn").addClass("change-loading"),!(await cu()).status){i.find(".noNetwork").show(),i.find(".dialog-close,.cancel").css("pointer-events","visible"),i.find(".loading").hide().siblings("span").show().parent("#changeBtn").removeClass("change-loading");return}i.find(".noNetwork").hide();const n={url:"/api/user/change-password",type:"post",data:{productName:"ai",new_password:i.find("#newPassword").val()}};this.userInfo.password_enable&&(n.data.old_password=i.find("#oldPassword").val());const a=await ct(n);i.find(".dialog-close,.cancel").css("pointer-events","visible"),i.find(".loading").hide().siblings("span").show().parent("#changeBtn").removeClass("change-loading"),a.code===200?(pi({content:"Password changed successfully!",isCancel:!1,submitType:"ok",iconType:"right",isClose:"false"}),this._close(),document.getElementById("page-header")._getUserInfo()):a.code===403&&(i.find("#oldPassword").siblings(".inputWaring").children("p").text("The old password you entered is incorrect. Please double-check and try again."),i.find("#oldPassword").siblings(".inputWaring").addClass("espical-error"),this._inputHandle(i.find("#oldPassword"),!0),i.find("#oldPassword").trigger("select"),i.find("#changeBtn").addClass("change-disabled").removeClass("change").removeClass("button"))}else{const r=i.find(".dialog-form .form-item .input");for(const n of r){const a=n.id;n.name==="stop"?this._inputHandle(i.find(`#${a}`),!0):this._inputHandle(i.find(`#${a}`),!1)}}}}M(js,"properties",{open:{attribute:!0,reflect:!0},userInfo:{attribute:!0,type:Object}}),M(js,"styles",[Be`
      .change-password_dialog {
        width: 918px;
        height: 750px;
        background: rgba(255, 255, 255, 0.7) 0% 0% no-repeat padding-box;
        position: fixed;
        top: 0;
        left: 0;
        bottom:0;
        right:0;
        margin:auto;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1002;
        border-radius: 8px;
      }

      .change-password_dialog .dialog-content {
        width: 490px;
        max-height: 456px;
        box-sizing: border-box;
        padding: 12px 12px 17px 15px;
        background: #FFFFFF 0% 0% no-repeat padding-box;
        box-shadow: 0px 10px 30px rgba(30, 30, 46, 0.1);
        border-radius: 8px;
      }
      .change-password_dialog .dialog-content .dialog-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 32px;
      }
      .change-password_dialog .dialog-content .dialog-header .dialog-title {
        display: flex;
        align-items: center;
        font: normal normal normal 16px/21px Roboto;
        color: rgba(30, 30, 46, 1);
      }
      .change-password_dialog .dialog-content .dialog-header .dialog-close {
        display: inline-block;
        height: 32px;
        width: 32px;
        cursor:pointer;
        display:flex;
        justify-content:center;
        align-items:center;
        transition: all 0.3s ease-out 0s;
        border-radius: 8px;
      }
      .change-password_dialog .dialog-content .dialog-header .dialog-close:hover {
        background: rgba(140, 140, 151, 0.1);
      }
      .change-password_dialog .dialog-content .dialog-main {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top:40px;
      }
      .change-password_dialog .dialog-content .dialog-main .dialog-form {
        width: 100%;
      }
      .change-password_dialog .dialog-content .dialog-main .dialog-form .espical-error {
        white-space:nowrap;
      }
      .change-password_dialog .dialog-content .dialog-main .dialog-form .form-item{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 26px;
      }
      .dialog-form .form-item:nth-child(3) {
        margin-bottom:0 !important;
      }
      .change-password_dialog .dialog-content .dialog-main .dialog-form .form-item .form-item_title {
        font: normal normal normal 14px/19px Roboto;
      }
      .change-password_dialog .dialog-content .dialog-main .dialog-form .form-item .error-msg {
        position: absolute;
        color: #DC3A3A;
        right: 0;
        bottom: -14px;
        font: normal normal normal 12px/14px Roboto;
      }
      .change-password_dialog .dialog-content .dialog-main .dialog-form .form-item > div {
        width: 68%;
        position: relative;
      }
      .change-password_dialog .dialog-content .dialog-main .dialog-form .form-item > div .input {
        height: 44px;
        width: 100%;
        border: 1px solid #1E1E2E33;
        border-radius: 6px;
        padding-left: 16px;
        padding-right: 32px;
        font: normal normal normal 14px/19px Roboto;
        box-sizing:border-box;
      }
      .change-password_dialog .dialog-content .dialog-main .dialog-form .form-item > div .input:hover {
        border: 1px solid #1E1E2E80;
      }
      .change-password_dialog .dialog-content .dialog-main .dialog-form .form-item > div .input:focus {
        border: 1px solid #8B3DFF;
        outline: 2px solid #564AFE1A;
      }
      .change-password_dialog .dialog-content .dialog-main .dialog-form .form-item > div .input::placeholder {
        font: normal normal normal 14px/19px Roboto;
        color: #8C8C97;
      }
      .change-password_dialog .dialog-content .dialog-main .dialog-form .form-item > div input::-ms-reveal {
        display: none;
      }
      .change-password_dialog .dialog-content .dialog-main .dialog-form .form-item > div input::-ms-clear {
        display: none;
      }
      .change-password_dialog .dialog-content .dialog-main .dialog-form .form-item > div input::-o-clear {
        display: none;
      }
      .change-password_dialog .dialog-content .dialog-main .dialog-form .form-item > div .input-error {
        border: 1px solid #DC3A3A;
        outline:2px solid #DC3A3A1A;
      }
      .change-password_dialog .dialog-content .dialog-main .dialog-form .form-item > div .input-error:hover {
        border: 1px solid #DC3A3A;
      }
      .change-password_dialog .dialog-content .dialog-main .dialog-form .form-item > div .input-error:focus {
        border: 1px solid #DC3A3A;
      }
      .eyes-box{
        width: 28px;
        height: 28px;
        position: absolute;
        transform:translateY(-50%);
        top: 50%;
        right: 12px;
        z-index: 9;
        cursor: pointer;
        transition: .3s;
        display:flex;
        justify-content:center;
        align-items:center;
        border-radius: 6px;
      }
      .eyes-box:hover{
        background: #8C8C9733
      }
      .change-password_dialog .dialog-content .dialog-main .dialog-form .form-item > div .eyes {
        width: 20px;
        height: 20px;
      }
      .change-password_dialog .dialog-content .dialog-main .dialog-form .form-item > div .eyes-close {
        width: 20px;
        height: 20px;
      }

      .change-password_dialog .dialog-content .note {
        padding: 12px;
        background: rgba(255, 167, 67, .1) 0% 0% no-repeat padding-box;
        border-radius: 6px;
        font: normal normal normal 12px/16px Roboto;
        color: #FFA743;
        margin-top: 18px;
      }
      .change-password_dialog .dialog-content .noNetwork {
        padding: 0;
        background: none;
        color: #DC3A3A;
      }
      .change-password_dialog .dialog-content .dialog-footer {
        display:flex;
        justify-content:flex-end;
        align-items:center;
        margin-top:35px;
      }
      .change-password_dialog .dialog-content .dialog-footer >span {
        display: flex;
        padding: 9px;
        cursor: pointer;
        margin-left: 24px;
        transition: .1s;
        border-radius: 6px;
        font: normal normal normal 15px/20px Roboto;
        box-sizing:border-box;
        justify-content:center;
        align-items:center;
        height:44px;
        box-sizing:border-box;
        width:120px;
      }
      .change-password_dialog .dialog-content .dialog-footer .cancel {
        background: rgba(30, 30, 46, .1);
        border-radius: 6px;
        color: rgba(30, 30, 46, 1);
      }
      .change-password_dialog .dialog-content .dialog-footer .cancel:hover {
        background: rgba(30, 30, 46, .2);
      }
      .change-password_dialog .dialog-content .dialog-footer .change {
        padding: 9px 44px;
        background: rgba(139, 61, 255, 1);
        color: #FFFFFF;
        transition:all ease-out .3s;
      }
      .change-password_dialog .dialog-content .dialog-footer .change >span{
        white-space:nowrap;
      }
      .change-password_dialog .dialog-content .dialog-footer .change:hover {
        background: #9B57FF 0% 0% no-repeat padding-box;
        transition:all ease-out .3s;
      }
      .change-password_dialog .dialog-content .dialog-footer .change-disabled {
        background: rgba(30, 30, 46, 0.1);
        color: #FFFFFF;
        pointer-events: none;
      }

      .change-password_dialog .dialog-content .dialog-footer .change-loading {
        background: rgba(139, 61, 255, 1);
        color: #FFFFFF;
        pointer-events: none;
      }
      .change-password_dialog .dialog-content .dialog-footer .change-loading {
        background: rgba(139, 61, 255, 1);
        color: #FFFFFF;
        pointer-events: none;
      }

      .change-password_dialog .success-content,
      .change-password_dialog .success-content-file {
        width: 490px;
        min-height: 280px;
      }
      .change-password_dialog .success-content .dialog-header,
      .change-password_dialog .success-content-file .dialog-header {
        position: relative;
        display: flex;
        justify-content: center;
      }
      .change-password_dialog .success-content .dialog-header .yes-icon,
      .change-password_dialog .success-content-file .dialog-header .yes-icon {
        display: inline-block;
        width: 140px;
        height: 140px;
        background: url("/image/img/yes-icon.png") no-repeat;
        position: absolute;
        top: -85px;
        z-index:1;
      }
      .change-password_dialog .success-content .dialog-header .dialog-close,
      .change-password_dialog .success-content-file .dialog-header .dialog-close {
        position: absolute;
        right: 0;
      }
      .change-password_dialog .success-content .dialog-main,
      .change-password_dialog .success-content-file .dialog-main {
        margin: 20% 0 14% 0;
      }
      .change-password_dialog .success-content .success-tip,
      .change-password_dialog .success-content-file .success-tip {
        text-align: center;
        font: normal normal 600 16px/20px Roboto;
        color: #333333;
      }
      .change-password_dialog .success-content .dialog-footer,
      .change-password_dialog .success-content-file .dialog-footer {
        text-align: center;
      }
      .change-password_dialog .success-content .dialog-footer .yes,
      .change-password_dialog .success-content-file .dialog-footer .yes {
        background: #8B3DFF 0% 0% no-repeat padding-box;
        border-radius: 8px;
        color: #ffffff;
        font: normal normal normal 14px/16px Roboto;
        margin-left:0;
      }
      .dialog-footer .yes:hover{
        background:#9B57FF !important;
      }
      .change-password_dialog .success-content {
        height: 280px;
      }

      .inputWaring {
        position: absolute;
        padding: 11px 16px;
        background: #DC3A3A;
        border-radius: 8px
       }

      .inputWaring p {
        color: #FFFFFF !important;
        font-size: 12px;
        line-height: 15px;
        user-select: none;
        white-space:nowrap;
      }

      .inputWaring::after {
        content: "";
        width: 0;
        height: 0;
        display: block;
        position: absolute;
        left: 14px;
        bottom: -8px;
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
        border-top: 14px solid #DC3A3A
      }
      .loading {
        text-indent: -99999px;
        /* font-size:0; */
      }
      .loading:after {
        content: '';
        font-size: 8px;
        width: 1em;
        height: 1em;
        border-radius: 50%;
        position: relative;
        display: block;
        animation: flash-black 1.5s ease-out infinite alternate;
      }
    `,_e]);class Zs extends fe{constructor(){super(),this.imgUrl="",this.type="logo"}render(){return O`<div class='mask'>
        <div class='img-box ${this.type}'>
          <img src=${this.imgUrl} alt="">
          <span class="close" @click=${this._close}>
            <img width='16' height="16" src="/image/svg/close_big_white.svg" alt="">
          </span>
        </div>
      </div>`}firstUpdated(){document.addEventListener("keydown",e=>{e.keyCode===27&&this._close()})}_close(){this.remove()}}M(Zs,"properties",{imgUrl:"",type:""}),M(Zs,"styles",[Be`
    .mask{
      display:flex;
      align-items:center;
      justify-content:center;
      position:fixed;
      left:0;
      top:0;
      background: rgba(0, 0, 0, 0.4);
      z-index:10086;
      width:100vw;
      height:100%;
    }

    .img-box{
      display:flex;
      align-items:center;
      justify-content:center;
      position:relative;
      height:auto;
      border-radius: 12px;
      max-width:70vw;
      max-height: 70vh;
    }

    .logo{
      width:480px;
      height:320px;
      background-color:#fff;
      background-image:url(/image/img/msaike.png);
      background-size:cover cover,456px 296px;
      background-position:center;
      background-repeat:no-repeat;
      padding:12px;
      box-sizing:border-box;
    }

    .logo >img{
      object-fit:contain;
      max-width:100%;
      max-height:100%;
    }

    .bg >img{
      border-radius: 12px;
      max-width:70vw;
      max-height: 70vh;
    }

    .close{
      position:absolute;
      top:0;
      right:-50px;
      width:40px;
      height:40px;
      display:flex;
      align-items:center;
      justify-content:center;
      background: rgba(0, 0, 0, .1);
      border-radius: 10px;
      z-index:1;
      cursor:pointer;
    }
    .close:hover{
      background: rgba(0, 0, 0, 0.3);
      transition:all ease-out .3s;
    }
    `,_e]);function wC(){customElements.define("page-header",Xo),customElements.define("page-navigat",Go),customElements.define("home-create-card",Yo),customElements.define("template-card",Vo),customElements.define("more-button",Wo),customElements.define("avatar-card",Jo),customElements.define("video-card",jo),customElements.define("asset-card",Zo),customElements.define("search-box",qo),customElements.define("sort-box",es),customElements.define("fullscreen-dialog",ts),customElements.define("create-dialog",is),customElements.define("project-proposal",rs),customElements.define("fullscreen-loading",ns),customElements.define("import-dialog",Ps),customElements.define("create-from-url",fC),customElements.define("no-result",zs),customElements.define("confirm-dialog",Ks),customElements.define("list-pagination",Gs),customElements.define("bottom-message",Ys),customElements.define("selected-optearion-box",Vs),customElements.define("video-controls",Ws),customElements.define("mob-dialog",Js),customElements.define("change-password",js),customElements.define("img-preview",Zs),customElements.define("css-animation",Vh),customElements.define("pricing-dialog",Wh),customElements.define("progress-pro",Jh),customElements.define("pay-dialog",jh)}export{wC as i};
//# sourceMappingURL=init-component-6e97d311.js.map
