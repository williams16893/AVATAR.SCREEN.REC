import{j as e,g as V,i as X,o as I,M as $,a as v,u as R,b as H,c as z}from"./sentry-604fb4c0.js";import{i as M}from"./init-component-6e97d311.js";import{a as A,h as Y}from"./index-018ba728.js";import{S as k}from"./swiper.min-e80c9f31.js";import"./fabric-d1db407f.js";import"./switch-pro-d3fb1dc8.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[o]="ea5f66c9-3324-4c31-8fe4-65aec3d7ea9f",t._sentryDebugIdIdentifier="sentry-dbid-ea5f66c9-3324-4c31-8fe4-65aec3d7ea9f")}catch{}})();window.gtagClick("visit_home");const S=document.getElementById("page-header"),L=document.documentElement.clientWidth,c=document.querySelector("selected-optearion-box"),J=e("fullscreen-loading")[0];e("more-button").on("jumpClick",t=>{t.detail.value==="linkTotemplates"?location.href="/template/index.html":t.detail.value==="linkToavatar"?location.href="/avatar/index.html":t.detail.value==="linkToavatarPhoto"?location.href="/avatar/index.html?nav=0":t.detail.value==="linkToVideo"&&(location.href="/video/index.html")});const x=document.getElementById("import-ppt-button");x&&(x.onclick=()=>{S.importPPT()});function _(){M(),f(),Q(),e(".page-main-middle").show(),j(),K(),te(),Y()}e(function(){V?X(_):_()});const W=new k(".avatar-card-swiper",{slidesPerView:"auto",spaceBetween:21,speed:500,navigation:{nextEl:".swiper-avatar-button-next",prevEl:".swiper-avatar-button-prev"},on:{slideChange:function(){e(this.$el).find(".shadow-left").show(),e(this.$el).find(".shadow-right").show()},reachEnd:function(){e(this.$el).find(".shadow-right").hide(),T<q.page_count&&(T+=1,j())},reachBeginning:function(){setTimeout(()=>{e(this.$el).find(".shadow-left").hide()},0)}}}),G=new k(".avatar-photo-card-swiper",{slidesPerView:"auto",spaceBetween:21,speed:500,navigation:{nextEl:".swiper-photo-button-next",prevEl:".swiper-photo-button-prev"},on:{slideChangeTransitionStart:function(){e(this.$el).find(".shadow-left").show(),e(this.$el).find(".shadow-right").show()},reachEnd:function(){e(this.$el).find(".shadow-right").hide()},reachBeginning:function(){setTimeout(()=>{e(this.$el).find(".shadow-left").hide()},0)}}}),U=new k(".templates-card-swiper",{slidesPerView:"auto",spaceBetween:21,speed:500,navigation:{nextEl:".swiper-templates-button-next",prevEl:".swiper-templates-button-prev"},on:{slideChangeTransitionStart:function(){e(this.$el).find(".shadow-left").show(),e(this.$el).find(".shadow-right").show()},reachEnd:function(){e(this.$el).find(".shadow-right").hide()},reachBeginning:function(){setTimeout(()=>{e(this.$el).find(".shadow-left").hide()},0)}}}),D=new k(".templates-portrait-card-swiper",{slidesPerView:"auto",spaceBetween:21,speed:500,navigation:{nextEl:".swiper-templates-portrait-button-next",prevEl:".swiper-templates-portrait-button-prev"},on:{slideChangeTransitionStart:function(){e(this.$el).find(".shadow-left").show(),e(this.$el).find(".shadow-right").show()},reachEnd:function(){e(this.$el).find(".shadow-right").hide()},reachBeginning:function(){setTimeout(()=>{e(this.$el).find(".shadow-left").hide()},0)}}});async function K(){if(!H("isepedmrenew"))return;const t=document.querySelector("page-header");await t._getUserInfo();const o=JSON.parse(localStorage.getItem("user_info"));["vip_expired","free"].includes(o==null?void 0:o.type)&&(await t.getProductList(),t.openPricingA(),document.querySelector("pricing-dialog").addEventListener("closePricing",s=>{s.detail.value==="true"&&z("isepedmrenew")}))}let C=[],P=[];const Q=()=>{v({url:`/ai/template/hot-list?t=${new Date().getTime()}`,noCache:!0}).then(t=>{t.code===200&&(C=t.data.list,P=t.data.categories,Z(C,P))})},Z=(t,o)=>{let i="",s=0,l="";t.forEach(a=>{const n=o.find(u=>a.category_id.includes(u.id)).id,r=a.thumbnail.url!==""?a.thumbnail.url:a.layout_type==="landscape"?"/temp/444.jpg":"/temp/555.jpg",p=a.is_new===!0?"true":"false",h=a.preview_video.url===""?"/edit/video/dizzy.mp4":a.preview_video.url;if(a.layout_type&&a.category_id.length>0){const u=a.layout_type==="portrait"?332:168;a.layout_type==="portrait"?D.appendSlide(`<div class="swiper-slide"><template-card class="home-featured-template_item" templateid="${a.id}" categoriesid="${n}" previewvideo="${h}" width="100%" height="${u}px" tempName="${a.name}" isNew=${p} background="${r}"></template-card></div>`):(s%2===0&&(i="",l=""),i+=`<template-card class="home-featured-template_item" templateid="${a.id}" categoriesid="${n}" previewvideo="${h}" width="100%" height="${u}px" tempName="${a.name}" isNew=${p} background="${r}"></template-card>`,l+=`<div class="template-loading">
                          <div class="template-loading-img " style="height: ${u}px"></div>
                          <div class="template-loading-text  "></div>
                        </div>`,(s%2===1||s===t.length-1)&&(U.appendSlide(`<div class="swiper-slide">${i}</div>`),e(".home-featured-template").append(`<div>${l}</div>`)),s+=1)}}),J.hideLoading(),e("template-card").on("openpreview",a=>{const d=a.detail,n=document.getElementById("project-proposal");n.setAttribute("name",a.detail.name),n.setAttribute("dataId",a.detail.value),n.setAttribute("categoriesid",a.detail.categoriesid),n.setAttribute("previewvideo",a.detail.previewvideo),n._open(),n.shadowRoot.querySelector("video-controls").init()}),e("template-card").on("click",function(){window.gtagClick("home_template_thumbnail")})};e(".template-nav li").on("click",function(){window.gtagClick("home_templates_switch");const t=e(this).index();e(this).addClass("on").siblings().removeClass("on"),(t===1?"portrait":"landscape")==="portrait"?(e(".template-landscape").hide(),e(".template-portrait").show(),D.update()):(e(".template-landscape").show(),e(".template-portrait").hide(),U.update())});e(document).on("mouseover",".video-card-item .item-title_name",function(){I(e(this))});e(document).on("click",".videolist-summary-more-menu",function(t){if(!e(this).parents(".video-card-item").hasClass("showed")){const o=t.clientX;L-o<200?e(this).parents(".video-card-item").find(".videolist-summary-more-total").css({top:"46px",left:"auto",right:0}):e(this).parents(".video-card-item").find(".videolist-summary-more-total").css({top:"46px",left:"auto",right:"-166px"})}e(this).parents(".video-card-item").toggleClass("showed").find(".videolist-summary-more-total").slideToggle("fast"),e(this).parents(".video-card-item").siblings().removeClass("showed").find(".videolist-summary-more-total").slideUp()});e(document).on("click",".videolist-summary-more-total",function(){e(this).slideUp()});e(document).on("click",function(t){e(t.target).closest(".videolist-summary-more-menu").length||(e(".videolist-summary-more-total").slideUp(),e(".video-card-item").removeClass("showed"))});c.addEventListener("download",()=>{y(N,!0)});c.addEventListener("restore",()=>{y(b)});c.addEventListener("delete",()=>{e("#avatar-menu-list li.active").hasClass("trashlist")?y(O):y(F)});c.addEventListener("calcel",()=>{m()});const y=(t=(i,s=0,l=0)=>{},o=!1)=>{let i=[];const s=o?".video-card-item.complete.checked":".video-card-item.checked",l=e(`${s}`).length;for(let d=0;d<l;d++){const n=e(`${s}`).eq(d).find(".videolist-summary-list").attr("data-id");i.push(n)}i=i.toString(),t({ids:i},g,w[0])},m=()=>{e(".video-card-item").removeClass("checked")};let g=0,w=[];e(document).on("click",".videolist-summary-absolute-select",function(){w=[],g=0,e(this).parents(".video-card-item").toggleClass("checked");const t=e(".home-recent-video").find(".video-card-item.checked").length,o=e(".home-recent-video").find(".video-card-item.draft.checked").length;t>0?(c.setAttribute("type",""),t===o?c.setAttribute("hdownload","hdownload"):c.setAttribute("hdownload",""),c.showFun(),c.setNum(t)):c.hideFun();for(let i=0;i<e(".video-card-item.checked").length;i++)Number(e(".video-card-item.checked").eq(i).find(".videolist-summary-list").attr("data-publish"))===1&&(w.push(e(".video-card-item.checked").eq(i).find(".videolist-summary-list").attr("data-share")),g+=1)});e(document).on("click",".video-card-item.progress",function(){$({titleText:"The video is being processed. Please wait for a while.",content:"",iconType:"hint"})});e(document).on("click",".videolist-summary-more-edit,.videolist-summary-edit",function(){c.hideFun();const t=e(this).parents(".videolist-summary-list").attr("data-id");location.href=`/edit/index.html?from=video&id=${t}`});e(document).on("click",".videolist-summary-more-publish",function(){c.hideFun();const t=e(this).parents(".videolist-summary-list").attr("data-id");location.href=`/video/share/index.html?from=video&id=${t}`});e(document).on("click",".videolist-summary-more-download,.videolist-summary-download",function(){const o={ids:e(this).parents(".videolist-summary-list").attr("data-id")};N(o)});e(document).on("click",".videolist-summary-progress-close",function(){const o={id:e(this).parents(".videolist-summary-list").attr("data-id")};v({url:"/ai/video/video-to-draft",data:o}).then(i=>{i.code===200&&f()})});e(document).on("click",".videolist-summary-more-duplicate",function(){c.hideFun();const t=e(this).parents(".videolist-summary-list").attr("data-id"),o=e(this).parents(".videolist-summary-list").attr("data-name"),i={id:t};let s="Copy of "+o;s=s.length>100?s.slice(0,100)+"...":s,e("body").append(`<bottom-message text="${s} created successfully!" ></bottom-message>`),v({url:"/ai/video/duplicate",data:i}).then(l=>{l.code===200?f():m()})});e(document).on("click",".videolist-summary-more-deletetotrash",function(){c.hideFun();const t=e(this).parents(".videolist-summary-list").attr("data-id"),o=e(this).parents(".videolist-summary-list").attr("data-share");g=Number(e(this).parents(".videolist-summary-list").attr("data-publish")),F({ids:t},g,o,"single")});e(document).on("click",".videolist-summary-more-deletethorough",function(){c.hideFun();const o={ids:e(this).parents(".videolist-summary-list").attr("data-id")};O(o,"single")});e(document).on("click",".videolist-summary-more-restore",function(){const o={ids:e(this).parents(".videolist-summary-list").attr("data-id")};b(o,"single")});const N=t=>{c.hideFun(),m(),v({url:"/ai/video/download",type:"POST",data:t}).then(async o=>{if(o.code===200)for(let i=0;i<o.data.length;i++){const s=o.data[i].url.url,l=o.data[i].title;fetch(s,{cache:"no-store"}).then(a=>a.blob()).then(a=>{const d=URL.createObjectURL(a),n=document.createElement("a");n.href=d,n.download=`${l}.mp4`,n.click(),URL.revokeObjectURL(d)})}})},F=(t,o,i,s="optearion")=>{const l=o===1?`${i}`:"",a=t.ids.split(",");let d=!1;a.forEach(r=>{e(`.videolist-summary-list[data-id=${r}]`).parent(".video-card-item").hasClass("complete")&&(d=!0)});const n=o===1?`This video has been shared via ${l}. If the video is deleted, anyone you shared with won’t be able to watch it.`:"If the videos are deleted, anyone you shared with won’t be able to watch them.";if(o!==0&&d){const r=document.createElement("confirm-dialog");r.setAttribute("content",`${n}`),r.setAttribute("isCancel","true"),r.setAttribute("submitType","delete"),e("body").append(r),r.addEventListener("closebtnclick",function(p){m()}),r.addEventListener("cancale",function(p){m()}),r.addEventListener("submit",function(p){E(t,s,r)})}else E(t,s)},E=(t,o="",i="")=>{const s=t.ids.split(","),l=o==="single"?"The video has been deleted":"Videos have been deleted.",a=o==="single"?"Failed to delete the video. Please try again later.":"Failed to delete videos. Please try again later.";v({url:"/ai/video/delete-to-trash",type:"POST",data:t}).then(d=>{if(d.code===200){f();let n=Number(e(".trashnum").html());n+=s.length,e(".trashnum").html(n),e("body").append(`<bottom-message type="btnmsg" text="${l}" ></bottom-message>`),e("bottom-message").on("btnclick",function(r){o==="single"?b(t,"single"):b(t)})}else m(),i!==""?$({titleText:`${a}`,content:"",iconType:"tips"}):e("body").append(`<bottom-message type="error" text="${a}"></bottom-message>`)}).catch(()=>{m(),i!==""?$({titleText:`${a}`,content:"",iconType:"tips"}):e("body").append(`<bottom-message type="error" text="${a}"></bottom-message>`)}).finally(()=>{w=[],g=0,i!==""&&i.closeConfirm()})},O=(t,o="optearion")=>{const i=o==="single"?"Failed to delete the video. Please try again later.":"Failed to delete videos. Please try again later.",s=document.createElement("confirm-dialog");s.setAttribute("titleText","Delete video permanently?"),s.setAttribute("content","The video and all the data associated will be deleted permanently. This action cannot be undone."),s.setAttribute("isCancel","true"),s.setAttribute("submitType","delete"),e("body").append(s),s.addEventListener("closebtnclick",function(l){m()}),s.addEventListener("cancale",function(l){m()}),s.addEventListener("submit",function(l){v({url:"/ai/video/delete",type:"POST",data:t}).then(a=>{a.code===200?e("body").append('<bottom-message text="Deleted successfully!" ></bottom-message>'):(m(),e("body").append(`<bottom-message type="error" text="${i}"></bottom-message>`))}).catch(()=>{m(),e("body").append(`<bottom-message type="error" text="${i}"></bottom-message>`)}).finally(()=>{s.closeConfirm()})})},b=(t,o="optearion")=>{const i=t.ids.split(","),s=o==="single"?"Failed to restore the video. Please try again later.":"Failed to restore the videos. Please try again later.",l=o==="single"?"The video has been restored.":"Videos have been restored.";v({url:"/ai/video/reduction",type:"POST",data:t}).then(a=>{if(a.code===200){e("body").append(`<bottom-message text="${l}" ></bottom-message>`),f();let d=Number(e(".videonum").html());d+=i.length,e(".videonum").html(d)}else e("body").append(`<bottom-message type="error" text='${s}' ></bottom-message>`),m()}).catch(()=>{e("body").append(`<bottom-message type="error" text='${s}' ></bottom-message>`),m()})};e(document).on("mouseover",".video-card-descript p",function(){I(e(this))});e(document).on("contextmenu",".videolist-summary-list",function(t){t.preventDefault();const o=t.clientX;L-o<200?e(this).find(".videolist-summary-more-total").css({top:t.offsetY+"px",left:"auto",right:0}).slideDown("fast"):e(this).find(".videolist-summary-more-total").css({top:t.offsetY+"px",left:t.offsetX+"px",right:"auto"}).slideDown("fast"),e(this).parents(".video-card-item").siblings().find(".videolist-summary-more-total").slideUp("fast")});function f(){setTimeout(()=>{c.hideFun()},"fast");let t="";v({url:`/ai/video/recent-video?t=${new Date().getTime()}`,noCache:!0}).then(o=>{if(o.code===200){let i=o.data.list;i=i.slice(0,20),t+=`<div class="video-card-item">
        <div class="item-background videolist-summary-picture creatnewvideo" id="creatnewvideo">
          <div class="item-addicon"><img src="/image/svg/create_video.svg"></div>
        </div>
        <div class="item-title">
          <p class="item-title_name">Create Video</p>
        </div>
      </div>`;for(let s=0;s<i.length;s++){const l=i[s].id,a=i[s].status,d=i[s].is_generate,n=i[s].thumbnail.url===""?"/video/default.svg":i[s].thumbnail.url,r=i[s].title===""?"Untitled":i[s].title,p=R(i[s].update_time),h=i[s].video_type;if(a===10&&d===10?t+='<div class="video-card-item complete">':a===0&&d===10?t+='<div class="video-card-item draft">':(a===0||a===10)&&d===11?t+='<div class="video-card-item progress">':t+='<div class="video-card-item failed">',t+=`
          <div class="videolist-summary-list ${i[s].layout_type}" data-share="${i[s].share_link}" data-id="${l}" data-name="${r}" data-publish="${i[s].is_publish}">
            <div class="item-loading"></div>
            <div class="videolist-summary-picture">
              <img src="${n}">
            </div>`,i[s].designerStatus){const u=i[s].designerStatus===2?'<div class="video-designer-status publish">Published</div>':'<div class="video-designer-status audited">Audited</div>';t+=`${u}`}if(a===0&&d===10?t+=`<a href="/edit/index.html?from=video&id=${l}" class="videolist-summary-link"></a>
            <div class="videolist-summary-statustime">Draft</div>`:a===10&&d===10&&(t+=`<a href="/video/share/index.html?from=video&id=${l}" class="videolist-summary-link"></a>
            <div class="videolist-summary-statustime">${i[s].video_time}</div>`),(a===0||a===10)&&d===10&&(t+=`
              <div class="videolist-summary-absolute">
                <div class="videolist-summary-topsolute flex-item-center flex-between">
                  <div class="videolist-summary-absolute-select"></div>
                  <div class="videolist-summary-more-menu" title="More…"></div>
                </div>`),a===10&&d===10?t+=`<div class="videolist-summary-bottomsolute">
            <div class="videolist-summary-download" title="Download"></div>
            ${h==="app"?'<div class="videolist-summary-edit" title="Edit"></div>':""}
              </div>
            </div>`:a===0&&d===10&&(t+=`
            </div>`),a===10&&d===10)t+=`<div class="videolist-summary-more-total">
            <div class="videolist-summary-morelist videolist-summary-more-publish"><img src="/image/svg/menu_publish.svg">Publish</div>
            <div class="videolist-summary-morelist videolist-summary-more-download"><img src="/image/svg/menu_download.svg" title="Download">Download</div>
            ${h==="app"?'<div class="videolist-summary-morelist videolist-summary-more-edit"><img src="/image/svg/menu_edit.svg" title="Edit">Edit</div>':""}
            <div class="videolist-summary-morelist videolist-summary-more-duplicate"><img src="/image/svg/menu_duplicate.svg">Duplicate</div>
            <div class="videolist-summary-morelist videolist-summary-more-deletetotrash"><img src="/image/svg/menu_delete.svg">Delete</div>
          </div>`;else if(a===0&&d===10)t+=`<div class="videolist-summary-more-total">
            <div class="videolist-summary-morelist videolist-summary-more-edit"><img src="/image/svg/menu_edit.svg" title="Edit">Edit</div>
            <div class="videolist-summary-morelist videolist-summary-more-duplicate"><img src="/image/svg/menu_duplicate.svg">Duplicate</div>
            <div class="videolist-summary-morelist videolist-summary-more-deletetotrash"><img src="/image/svg/menu_delete.svg">Delete</div>
          </div>`;else if((a===0||a===10)&&d===11){const u=i[s].progress?i[s].progress:0;t+=`<div class="videolist-summary-progress">
            <div class="videolist-summary-progress-status">
              <div class="text videolist-summary-progress-text">Generating <div class="generating-animate"><span></span><span></span><span></span></div></div>
              <div class="text videolist-summary-progress-num">${u}%</div>
            </div>
            `}else(a===0||a===10)&&d===12&&(t+=`<div class="videolist-summary-progress">
            <div class="videolist-summary-progress-status">
              <div class="text videolist-summary-progress-text">Failed to generate!</div>
              ${h==="app"?'<div class="text videolist-summary-progress-close"></div>':""}
              </div>
              `);if((a===0||a===10)&&d===11||(a===0||a===10)&&d===12){const u=i[s].progress?i[s].progress:0;t+=`<div class="videolist-summary-progress-line">
            <div class="videolist-summary-progress-complete" style="width:${u}%"></div>
          </div>
        </div>`}t+=`
          </div>
          <div class="video-card-descript">
            <p><b>${r}</b><span class="item-loading caption"></span></p>
            <time><font>${p}</font><span class="item-loading describe"></span></time>
          </div>
        </div>`}e(".home-recent-video").html(t),e(".creatnewvideo").on("click",s=>{S._createClick(),window.gtagClick("home_videos_create")}),t=""}}).then(o=>{for(let i=0;i<e(".video-card-item").length;i++)e(".video-card-item").eq(i).find(".videolist-summary-picture img").on("load",()=>{e(".video-card-item").eq(i).find(".item-loading").hide(),e(".video-card-item").eq(i).find("b,font").show()})})}let T=1,q={};function j(){v({url:`/ai/avatar/hot-list?page=${T}`,type:"post",data:{page_size:40}}).then(t=>{t.code===200&&(ee(t.data),q=t.data)}).catch(t=>{})}function ee(t){let o="";t.list&&t.list.length>0&&t.list.map((i,s)=>{s%2===0&&(o="");let l="";const a=i.avatar.url;if(typeof i.config=="string"&&i.config.length>0)try{i.config=JSON.parse(i.config)}catch{i.config={}}~~i.view===2||~~i.view===3?B(i.config,a).then(d=>{e(`.avatar-sliderarea avatar-card[id='${i.id}'],[type='${i.boxType}]`).attr("pictureUrl",d)}):l=a,o+=`<avatar-card dpi="hide" type="ai" boxType="pro" view='${i.view}'  urlkey="${i.avatar.key}" class="avatar-my-template_item" id="${i.id}" close="hide" pictureUrl="${l}" avatarName="${i.name}"></avatar-card>`,(s%2===1||s===t.list.length-1)&&W.appendSlide(`<div class="swiper-slide">${o}</div>`)}),A()}function te(){const t=new Promise((s,l)=>{v({url:"/ai/avatar/user-avatar-list",type:"post",data:{type:"1"}}).then(a=>{a.code===200?(Array.isArray(a.data.list)?a.data.list=a.data.list.map(d=>(d.boxType="my",d.avatar={},d.avatar.key=d.avatar_key,d.avatar.url=~~d.show_back===1?d.avatar_url:d.avatar_noback_url,d.video={},d.video.key=d.video_key,d.video.url=d.video_url,d)):a.data.list=[],s(a.data)):l(a)}).catch(a=>{l(a)})}),o=new Promise((s,l)=>{v({url:"/ai/avatar/list",type:"post",data:{type:"1"}}).then(a=>{a.code===200?(Array.isArray(a.data.list)?a.data.list=a.data.list.map(d=>(d.boxType="ai",d)):a.data.list=[],s(a.data)):l(a)}).catch(a=>{l(a)})});Promise.all([t,o]).then(s=>{const l=[...s[0].list,...s[1].list],a={};a.list=l,a.count={},ie(a)}).catch(s=>{})}function ie(t,o=""){let i="";t.list&&t.list.length>0&&(t.list.map((s,l)=>{let a="";const d=s.avatar.url;~~s.view===2||~~s.view===3?B(s.config,d).then(n=>{e(`avatar-card[id='${s.id}'],[type='${s.boxType}]`).attr("pictureUrl",n)}):a=d,i=`<avatar-card dpi="hide" boxType="photo" type="${s.boxType}" view="${s.view}" urlkey="${s.avatar.key}" class="avatar-my-template_item" id="${s.id}" close="hide" pictureUrl="${a}" avatarName="${s.name}"></avatar-card>`,G.appendSlide(`<div class="swiper-slide avatar-photo-sliderarea">${i}</div>`)}),A())}function B(t,o){return new Promise(i=>{const s=document.createElement("img");s.crossOrigin="Anonymous",s.src=o,s.onload=function(){const l=document.createElement("canvas");l.width=t.width||400,l.height=t.height||400,l.getContext("2d").drawImage(s,-t.x||0,-t.y||0),i(l.toDataURL())}})}e('more-button[type="linkTotemplates"]').on("click",function(){window.gtagClick("home_template_more")});e(document).on("click",".avatar-card-swiper avatar-card",function(){window.gtagClick("home_avatars_thumbnail")});e('more-button[type="linkToavatar"]').on("click",function(){window.gtagClick("home_avatars_more")});e(document).on("click",".avatar-photo-card-swiper avatar-card",function(){window.gtagClick("home_talkinghead_thumbnail")});e('more-button[type="linkToavatarPhoto"]').on("click",function(){window.gtagClick("home_talkinghead_more")});e(document).on("click",".home-recent-video .videolist-summary-list",function(){window.gtagClick("home_videos_thumbnail")});e('more-button[type="linkToVideo"]').on("click",function(){window.gtagClick("home_videos_more")});
//# sourceMappingURL=main-329670d4.js.map
