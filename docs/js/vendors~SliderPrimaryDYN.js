(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{8:function(t,e,n){"use strict";n.d(e,"a",(function(){return z}));var i=window,a=i.requestAnimationFrame||i.webkitRequestAnimationFrame||i.mozRequestAnimationFrame||i.msRequestAnimationFrame||function(t){return setTimeout(t,16)},r=window,o=r.cancelAnimationFrame||r.mozCancelAnimationFrame||function(t){clearTimeout(t)};function u(){for(var t,e,n,i=arguments[0]||{},a=1,r=arguments.length;a<r;a++)if(null!==(t=arguments[a]))for(e in t)i!==(n=t[e])&&void 0!==n&&(i[e]=n);return i}function l(t){return["true","false"].indexOf(t)>=0?JSON.parse(t):t}function s(t,e,n,i){if(i)try{t.setItem(e,n)}catch(t){}return n}function c(){var t=document,e=t.body;return e||((e=t.createElement("body")).fake=!0),e}var f=document.documentElement;function d(t){var e="";return t.fake&&(e=f.style.overflow,t.style.background="",t.style.overflow=f.style.overflow="hidden",f.appendChild(t)),e}function v(t,e){t.fake&&(t.remove(),f.style.overflow=e,f.offsetHeight)}function p(t,e,n,i){"insertRule"in t?t.insertRule(e+"{"+n+"}",i):t.addRule(e,n,i)}function h(t){return("insertRule"in t?t.cssRules:t.rules).length}function m(t,e,n){for(var i=0,a=t.length;i<a;i++)e.call(n,t[i],i)}var y="classList"in document.createElement("_"),g=y?function(t,e){return t.classList.contains(e)}:function(t,e){return t.className.indexOf(e)>=0},x=y?function(t,e){g(t,e)||t.classList.add(e)}:function(t,e){g(t,e)||(t.className+=" "+e)},b=y?function(t,e){g(t,e)&&t.classList.remove(e)}:function(t,e){g(t,e)&&(t.className=t.className.replace(e,""))};function w(t,e){return t.hasAttribute(e)}function C(t,e){return t.getAttribute(e)}function M(t){return void 0!==t.item}function T(t,e){if(t=M(t)||t instanceof Array?t:[t],"[object Object]"===Object.prototype.toString.call(e))for(var n=t.length;n--;)for(var i in e)t[n].setAttribute(i,e[i])}function E(t,e){t=M(t)||t instanceof Array?t:[t];for(var n=(e=e instanceof Array?e:[e]).length,i=t.length;i--;)for(var a=n;a--;)t[i].removeAttribute(e[a])}function A(t){for(var e=[],n=0,i=t.length;n<i;n++)e.push(t[n]);return e}function N(t,e){"none"!==t.style.display&&(t.style.display="none")}function L(t,e){"none"===t.style.display&&(t.style.display="")}function B(t){return"none"!==window.getComputedStyle(t).display}function S(t){if("string"==typeof t){var e=[t],n=t.charAt(0).toUpperCase()+t.substr(1);["Webkit","Moz","ms","O"].forEach((function(i){"ms"===i&&"transform"!==t||e.push(i+n)})),t=e}for(var i=document.createElement("fakeelement"),a=(t.length,0);a<t.length;a++){var r=t[a];if(void 0!==i.style[r])return r}return!1}function H(t,e){var n=!1;return/^Webkit/.test(t)?n="webkit"+e+"End":/^O/.test(t)?n="o"+e+"End":t&&(n=e.toLowerCase()+"end"),n}var O=!1;try{var D=Object.defineProperty({},"passive",{get:function(){O=!0}});window.addEventListener("test",null,D)}catch(t){}var k=!!O&&{passive:!0};function R(t,e,n){for(var i in e){var a=["touchstart","touchmove"].indexOf(i)>=0&&!n&&k;t.addEventListener(i,e[i],a)}}function I(t,e){for(var n in e){var i=["touchstart","touchmove"].indexOf(n)>=0&&k;t.removeEventListener(n,e[n],i)}}function P(){return{topics:{},on:function(t,e){this.topics[t]=this.topics[t]||[],this.topics[t].push(e)},off:function(t,e){if(this.topics[t])for(var n=0;n<this.topics[t].length;n++)if(this.topics[t][n]===e){this.topics[t].splice(n,1);break}},emit:function(t,e){e.type=t,this.topics[t]&&this.topics[t].forEach((function(n){n(e,t)}))}}}Object.keys||(Object.keys=function(t){var e=[];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.push(n);return e}),"remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)});var z=function(t){t=u({container:".slider",mode:"carousel",axis:"horizontal",items:1,gutter:0,edgePadding:0,fixedWidth:!1,autoWidth:!1,viewportMax:!1,slideBy:1,center:!1,controls:!0,controlsPosition:"top",controlsText:["prev","next"],controlsContainer:!1,prevButton:!1,nextButton:!1,nav:!0,navPosition:"top",navContainer:!1,navAsThumbnails:!1,arrowKeys:!1,speed:300,autoplay:!1,autoplayPosition:"top",autoplayTimeout:5e3,autoplayDirection:"forward",autoplayText:["start","stop"],autoplayHoverPause:!1,autoplayButton:!1,autoplayButtonOutput:!0,autoplayResetOnVisibility:!0,animateIn:"tns-fadeIn",animateOut:"tns-fadeOut",animateNormal:"tns-normal",animateDelay:!1,loop:!0,rewind:!1,autoHeight:!1,responsive:!1,lazyload:!1,lazyloadSelector:".tns-lazy-img",touch:!0,mouseDrag:!1,swipeAngle:15,nested:!1,preventActionWhenRunning:!1,preventScrollOnTouch:!1,freezable:!0,onInit:!1,useLocalStorage:!0,nonce:!1},t||{});var e=document,n=window,i={ENTER:13,SPACE:32,LEFT:37,RIGHT:39},r={},f=t.useLocalStorage;if(f){var y=navigator.userAgent,M=new Date;try{(r=n.localStorage)?(r.setItem(M,M),f=r.getItem(M)==M,r.removeItem(M)):f=!1,f||(r={})}catch(t){f=!1}f&&(r.tnsApp&&r.tnsApp!==y&&["tC","tPL","tMQ","tTf","t3D","tTDu","tTDe","tADu","tADe","tTE","tAE"].forEach((function(t){r.removeItem(t)})),localStorage.tnsApp=y)}var O=r.tC?l(r.tC):s(r,"tC",function(){var t=document,e=c(),n=d(e),i=t.createElement("div"),a=!1;e.appendChild(i);try{for(var r,o="(10px * 10)",u=["calc"+o,"-moz-calc"+o,"-webkit-calc"+o],l=0;l<3;l++)if(r=u[l],i.style.width=r,100===i.offsetWidth){a=r.replace(o,"");break}}catch(t){}return e.fake?v(e,n):i.remove(),a}(),f),D=r.tPL?l(r.tPL):s(r,"tPL",function(){var t,e=document,n=c(),i=d(n),a=e.createElement("div"),r=e.createElement("div"),o="";a.className="tns-t-subp2",r.className="tns-t-ct";for(var u=0;u<70;u++)o+="<div></div>";return r.innerHTML=o,a.appendChild(r),n.appendChild(a),t=Math.abs(a.getBoundingClientRect().left-r.children[67].getBoundingClientRect().left)<2,n.fake?v(n,i):a.remove(),t}(),f),k=r.tMQ?l(r.tMQ):s(r,"tMQ",function(){if(window.matchMedia||window.msMatchMedia)return!0;var t,e=document,n=c(),i=d(n),a=e.createElement("div"),r=e.createElement("style"),o="@media all and (min-width:1px){.tns-mq-test{position:absolute}}";return r.type="text/css",a.className="tns-mq-test",n.appendChild(r),n.appendChild(a),r.styleSheet?r.styleSheet.cssText=o:r.appendChild(e.createTextNode(o)),t=window.getComputedStyle?window.getComputedStyle(a).position:a.currentStyle.position,n.fake?v(n,i):a.remove(),"absolute"===t}(),f),W=r.tTf?l(r.tTf):s(r,"tTf",S("transform"),f),q=r.t3D?l(r.t3D):s(r,"t3D",function(t){if(!t)return!1;if(!window.getComputedStyle)return!1;var e,n=document,i=c(),a=d(i),r=n.createElement("p"),o=t.length>9?"-"+t.slice(0,-9).toLowerCase()+"-":"";return o+="transform",i.insertBefore(r,null),r.style[t]="translate3d(1px,1px,1px)",e=window.getComputedStyle(r).getPropertyValue(o),i.fake?v(i,a):r.remove(),void 0!==e&&e.length>0&&"none"!==e}(W),f),F=r.tTDu?l(r.tTDu):s(r,"tTDu",S("transitionDuration"),f),j=r.tTDe?l(r.tTDe):s(r,"tTDe",S("transitionDelay"),f),V=r.tADu?l(r.tADu):s(r,"tADu",S("animationDuration"),f),G=r.tADe?l(r.tADe):s(r,"tADe",S("animationDelay"),f),Q=r.tTE?l(r.tTE):s(r,"tTE",H(F,"Transition"),f),X=r.tAE?l(r.tAE):s(r,"tAE",H(V,"Animation"),f),Y=n.console&&"function"==typeof n.console.warn,J=["container","controlsContainer","prevButton","nextButton","navContainer","autoplayButton"],K={};if(J.forEach((function(n){if("string"==typeof t[n]){var i=t[n],a=e.querySelector(i);if(K[n]=i,!a||!a.nodeName)return void(Y&&console.warn("Can't find",t[n]));t[n]=a}})),!(t.container.children.length<1)){var U=t.responsive,_=t.nested,Z="carousel"===t.mode;if(U){0 in U&&(t=u(t,U[0]),delete U[0]);var $={};for(var tt in U){var et=U[tt];et="number"==typeof et?{items:et}:et,$[tt]=et}U=$,$=null}if(Z||function t(e){for(var n in e)Z||("slideBy"===n&&(e[n]="page"),"edgePadding"===n&&(e[n]=!1),"autoHeight"===n&&(e[n]=!1)),"responsive"===n&&t(e[n])}(t),!Z){t.axis="horizontal",t.slideBy="page",t.edgePadding=!1;var nt=t.animateIn,it=t.animateOut,at=t.animateDelay,rt=t.animateNormal}var ot,ut,lt="horizontal"===t.axis,st=e.createElement("div"),ct=e.createElement("div"),ft=t.container,dt=ft.parentNode,vt=ft.outerHTML,pt=ft.children,ht=pt.length,mt=On(),yt=!1;U&&Zn(),Z&&(ft.className+=" tns-vpfix");var gt,xt,bt,wt,Ct,Mt,Tt,Et,At,Nt=t.autoWidth,Lt=In("fixedWidth"),Bt=In("edgePadding"),St=In("gutter"),Ht=kn(),Ot=In("center"),Dt=Nt?1:Math.floor(In("items")),kt=In("slideBy"),Rt=t.viewportMax||t.fixedWidthViewportWidth,It=In("arrowKeys"),Pt=In("speed"),zt=t.rewind,Wt=!zt&&t.loop,qt=In("autoHeight"),Ft=In("controls"),jt=In("controlsText"),Vt=In("nav"),Gt=In("touch"),Qt=In("mouseDrag"),Xt=In("autoplay"),Yt=In("autoplayTimeout"),Jt=In("autoplayText"),Kt=In("autoplayHoverPause"),Ut=In("autoplayResetOnVisibility"),_t=(Tt=null,Et=In("nonce"),At=document.createElement("style"),Tt&&At.setAttribute("media",Tt),Et&&At.setAttribute("nonce",Et),document.querySelector("head").appendChild(At),At.sheet?At.sheet:At.styleSheet),Zt=t.lazyload,$t=t.lazyloadSelector,te=[],ee=Wt?(Ct=function(){if(Nt||Lt&&!Rt)return ht-1;var e=Lt?"fixedWidth":"items",n=[];if((Lt||t[e]<ht)&&n.push(t[e]),U)for(var i in U){var a=U[i][e];a&&(Lt||a<ht)&&n.push(a)}return n.length||n.push(0),Math.ceil(Lt?Rt/Math.min.apply(null,n):Math.max.apply(null,n))}(),Mt=Z?Math.ceil((5*Ct-ht)/2):4*Ct-ht,Mt=Math.max(Ct,Mt),Rn("edgePadding")?Mt+1:Mt):0,ne=Z?ht+2*ee:ht+ee,ie=!(!Lt&&!Nt||Wt),ae=Lt?Ti():null,re=!Z||!Wt,oe=lt?"left":"top",ue="",le="",se=Lt?function(){return Ot&&!Wt?ht-1:Math.ceil(-ae/(Lt+St))}:Nt?function(){for(var t=0;t<ne;t++)if(gt[t]>=-ae)return t}:function(){return Ot&&Z&&!Wt?ht-1:Wt||Z?Math.max(0,ne-Math.ceil(Dt)):ne-1},ce=Bn(In("startIndex")),fe=ce,de=(Ln(),0),ve=Nt?null:se(),pe=t.preventActionWhenRunning,he=t.swipeAngle,me=!he||"?",ye=!1,ge=t.onInit,xe=new P,be=" tns-slider tns-"+t.mode,we=ft.id||(wt=window.tnsId,window.tnsId=wt?wt+1:1,"tns"+window.tnsId),Ce=In("disable"),Me=!1,Te=t.freezable,Ee=!(!Te||Nt)&&_n(),Ae=!1,Ne={click:Di,keydown:function(t){t=Fi(t);var e=[i.LEFT,i.RIGHT].indexOf(t.keyCode);e>=0&&(0===e?Je.disabled||Di(t,-1):Ke.disabled||Di(t,1))}},Le={click:function(t){if(ye){if(pe)return;Hi()}var e=ji(t=Fi(t));for(;e!==$e&&!w(e,"data-nav");)e=e.parentNode;if(w(e,"data-nav")){var n=an=Number(C(e,"data-nav")),i=Lt||Nt?n*ht/en:n*Dt;Oi(Ie?n:Math.min(Math.ceil(i),ht-1),t),rn===n&&(fn&&zi(),an=-1)}},keydown:function(t){t=Fi(t);var n=e.activeElement;if(!w(n,"data-nav"))return;var a=[i.LEFT,i.RIGHT,i.ENTER,i.SPACE].indexOf(t.keyCode),r=Number(C(n,"data-nav"));a>=0&&(0===a?r>0&&qi(Ze[r-1]):1===a?r<en-1&&qi(Ze[r+1]):(an=r,Oi(r,t)))}},Be={mouseover:function(){fn&&(Ri(),dn=!0)},mouseout:function(){dn&&(ki(),dn=!1)}},Se={visibilitychange:function(){e.hidden?fn&&(Ri(),pn=!0):pn&&(ki(),pn=!1)}},He={keydown:function(t){t=Fi(t);var e=[i.LEFT,i.RIGHT].indexOf(t.keyCode);e>=0&&Di(t,0===e?-1:1)}},Oe={touchstart:Xi,touchmove:Yi,touchend:Ji,touchcancel:Ji},De={mousedown:Xi,mousemove:Yi,mouseup:Ji,mouseleave:Ji},ke=Rn("controls"),Re=Rn("nav"),Ie=!!Nt||t.navAsThumbnails,Pe=Rn("autoplay"),ze=Rn("touch"),We=Rn("mouseDrag"),qe="tns-slide-active",Fe="tns-complete",je={load:function(t){ui(ji(t))},error:function(t){e=ji(t),x(e,"failed"),li(e);var e}},Ve="force"===t.preventScrollOnTouch;if(ke)var Ge,Qe,Xe=t.controlsContainer,Ye=t.controlsContainer?t.controlsContainer.outerHTML:"",Je=t.prevButton,Ke=t.nextButton,Ue=t.prevButton?t.prevButton.outerHTML:"",_e=t.nextButton?t.nextButton.outerHTML:"";if(Re)var Ze,$e=t.navContainer,tn=t.navContainer?t.navContainer.outerHTML:"",en=Nt?ht:Ui(),nn=0,an=-1,rn=Hn(),on=rn,un="tns-nav-active",ln="Carousel Page ",sn=" (Current Slide)";if(Pe)var cn,fn,dn,vn,pn,hn="forward"===t.autoplayDirection?1:-1,mn=t.autoplayButton,yn=t.autoplayButton?t.autoplayButton.outerHTML:"",gn=["<span class='tns-visually-hidden'>"," animation</span>"];if(ze||We)var xn,bn,wn={},Cn={},Mn=!1,Tn=lt?function(t,e){return t.x-e.x}:function(t,e){return t.y-e.y};Nt||Nn(Ce||Ee),W&&(oe=W,ue="translate",q?(ue+=lt?"3d(":"3d(0px, ",le=lt?", 0px, 0px)":", 0px)"):(ue+=lt?"X(":"Y(",le=")")),Z&&(ft.className=ft.className.replace("tns-vpfix","")),function(){Rn("gutter");st.className="tns-outer",ct.className="tns-inner",st.id=we+"-ow",ct.id=we+"-iw",""===ft.id&&(ft.id=we);be+=D||Nt?" tns-subpixel":" tns-no-subpixel",be+=O?" tns-calc":" tns-no-calc",Nt&&(be+=" tns-autowidth");be+=" tns-"+t.axis,ft.className+=be,Z?((ot=e.createElement("div")).id=we+"-mw",ot.className="tns-ovh",st.appendChild(ot),ot.appendChild(ct)):st.appendChild(ct);if(qt){(ot||ct).className+=" tns-ah"}if(dt.insertBefore(st,ft),ct.appendChild(ft),m(pt,(function(t,e){x(t,"tns-item"),t.id||(t.id=we+"-item"+e),!Z&&rt&&x(t,rt),T(t,{"aria-hidden":"true",tabindex:"-1"})})),ee){for(var n=e.createDocumentFragment(),i=e.createDocumentFragment(),a=ee;a--;){var r=a%ht,o=pt[r].cloneNode(!0);if(x(o,"tns-slide-cloned"),E(o,"id"),i.insertBefore(o,i.firstChild),Z){var u=pt[ht-1-r].cloneNode(!0);x(u,"tns-slide-cloned"),E(u,"id"),n.appendChild(u)}}ft.insertBefore(n,ft.firstChild),ft.appendChild(i),pt=ft.children}}(),function(){if(!Z)for(var e=ce,i=ce+Math.min(ht,Dt);e<i;e++){var a=pt[e];a.style.left=100*(e-ce)/Dt+"%",x(a,nt),b(a,rt)}lt&&(D||Nt?(p(_t,"#"+we+" > .tns-item","font-size:"+n.getComputedStyle(pt[0]).fontSize+";",h(_t)),p(_t,"#"+we,"font-size:0;",h(_t))):Z&&m(pt,(function(t,e){t.style.marginLeft=function(t){return O?O+"("+100*t+"% / "+ne+")":100*t/ne+"%"}(e)})));if(k){if(F){var r=ot&&t.autoHeight?jn(t.speed):"";p(_t,"#"+we+"-mw",r,h(_t))}r=Pn(t.edgePadding,t.gutter,t.fixedWidth,t.speed,t.autoHeight),p(_t,"#"+we+"-iw",r,h(_t)),Z&&(r=lt&&!Nt?"width:"+zn(t.fixedWidth,t.gutter,t.items)+";":"",F&&(r+=jn(Pt)),p(_t,"#"+we,r,h(_t))),r=lt&&!Nt?Wn(t.fixedWidth,t.gutter,t.items):"",t.gutter&&(r+=qn(t.gutter)),Z||(F&&(r+=jn(Pt)),V&&(r+=Vn(Pt))),r&&p(_t,"#"+we+" > .tns-item",r,h(_t))}else{Z&&qt&&(ot.style[F]=Pt/1e3+"s"),ct.style.cssText=Pn(Bt,St,Lt,qt),Z&&lt&&!Nt&&(ft.style.width=zn(Lt,St,Dt));r=lt&&!Nt?Wn(Lt,St,Dt):"";St&&(r+=qn(St)),r&&p(_t,"#"+we+" > .tns-item",r,h(_t))}if(U&&k)for(var o in U){o=parseInt(o);var u=U[o],l=(r="",""),s="",c="",f="",d=Nt?null:In("items",o),v=In("fixedWidth",o),y=In("speed",o),g=In("edgePadding",o),w=In("autoHeight",o),C=In("gutter",o);F&&ot&&In("autoHeight",o)&&"speed"in u&&(l="#"+we+"-mw{"+jn(y)+"}"),("edgePadding"in u||"gutter"in u)&&(s="#"+we+"-iw{"+Pn(g,C,v,y,w)+"}"),Z&&lt&&!Nt&&("fixedWidth"in u||"items"in u||Lt&&"gutter"in u)&&(c="width:"+zn(v,C,d)+";"),F&&"speed"in u&&(c+=jn(y)),c&&(c="#"+we+"{"+c+"}"),("fixedWidth"in u||Lt&&"gutter"in u||!Z&&"items"in u)&&(f+=Wn(v,C,d)),"gutter"in u&&(f+=qn(C)),!Z&&"speed"in u&&(F&&(f+=jn(y)),V&&(f+=Vn(y))),f&&(f="#"+we+" > .tns-item{"+f+"}"),(r=l+s+c+f)&&_t.insertRule("@media (min-width: "+o/16+"em) {"+r+"}",_t.cssRules.length)}}(),Gn();var En=Wt?Z?function(){var t=de,e=ve;t+=kt,e-=kt,Bt?(t+=1,e-=1):Lt&&(Ht+St)%(Lt+St)&&(e-=1),ee&&(ce>e?ce-=ht:ce<t&&(ce+=ht))}:function(){if(ce>ve)for(;ce>=de+ht;)ce-=ht;else if(ce<de)for(;ce<=ve-ht;)ce+=ht}:function(){ce=Math.max(de,Math.min(ve,ce))},An=Z?function(){var t,e,n,i,a,r,o,u,l,s,c;Ci(ft,""),F||!Pt?(Ni(),Pt&&B(ft)||Hi()):(t=ft,e=oe,n=ue,i=le,a=Ei(),r=Pt,o=Hi,u=Math.min(r,10),l=a.indexOf("%")>=0?"%":"px",a=a.replace(l,""),s=Number(t.style[e].replace(n,"").replace(i,"").replace(l,"")),c=(a-s)/r*u,setTimeout((function a(){r-=u,s+=c,t.style[e]=n+s+l+i,r>0?setTimeout(a,u):o()}),u)),lt||Ki()}:function(){te=[];var t={};t[Q]=t[X]=Hi,I(pt[fe],t),R(pt[ce],t),Li(fe,nt,it,!0),Li(ce,rt,nt),Q&&X&&Pt&&B(ft)||Hi()};return{version:"2.9.3",getInfo:Zi,events:xe,goTo:Oi,play:function(){Xt&&!fn&&(Pi(),vn=!1)},pause:function(){fn&&(zi(),vn=!0)},isOn:yt,updateSliderHeight:pi,refresh:Gn,destroy:function(){if(_t.disabled=!0,_t.ownerNode&&_t.ownerNode.remove(),I(n,{resize:Kn}),It&&I(e,He),Xe&&I(Xe,Ne),$e&&I($e,Le),I(ft,Be),I(ft,Se),mn&&I(mn,{click:Wi}),Xt&&clearInterval(cn),Z&&Q){var i={};i[Q]=Hi,I(ft,i)}Gt&&I(ft,Oe),Qt&&I(ft,De);var a=[vt,Ye,Ue,_e,tn,yn];for(var r in J.forEach((function(e,n){var i="container"===e?st:t[e];if("object"==typeof i&&i){var r=!!i.previousElementSibling&&i.previousElementSibling,o=i.parentNode;i.outerHTML=a[n],t[e]=r?r.nextElementSibling:o.firstElementChild}})),J=nt=it=at=rt=lt=st=ct=ft=dt=vt=pt=ht=ut=mt=Nt=Lt=Bt=St=Ht=Dt=kt=Rt=It=Pt=zt=Wt=qt=_t=Zt=gt=te=ee=ne=ie=ae=re=oe=ue=le=se=ce=fe=de=ve=he=me=ye=ge=xe=be=we=Ce=Me=Te=Ee=Ae=Ne=Le=Be=Se=He=Oe=De=ke=Re=Ie=Pe=ze=We=qe=Fe=je=xt=Ft=jt=Xe=Ye=Je=Ke=Ge=Qe=Vt=$e=tn=Ze=en=nn=an=rn=on=un=ln=sn=Xt=Yt=hn=Jt=Kt=mn=yn=Ut=gn=cn=fn=dn=vn=pn=wn=Cn=xn=Mn=bn=Tn=Gt=Qt=null,this)"rebuild"!==r&&(this[r]=null);yt=!1},rebuild:function(){return z(u(t,K))}}}function Nn(t){t&&(Ft=Vt=Gt=Qt=It=Xt=Kt=Ut=!1)}function Ln(){for(var t=Z?ce-ee:ce;t<0;)t+=ht;return t%ht+1}function Bn(t){return t=t?Math.max(0,Math.min(Wt?ht-1:ht-Dt,t)):0,Z?t+ee:t}function Sn(t){for(null==t&&(t=ce),Z&&(t-=ee);t<0;)t+=ht;return Math.floor(t%ht)}function Hn(){var t,e=Sn();return t=Ie?e:Lt||Nt?Math.ceil((e+1)*en/ht-1):Math.floor(e/Dt),!Wt&&Z&&ce===ve&&(t=en-1),t}function On(){return n.innerWidth||e.documentElement.clientWidth||e.body.clientWidth}function Dn(t){return"top"===t?"afterbegin":"beforeend"}function kn(){var t=Bt?2*Bt-St:0;return function t(n){if(null!=n){var i,a,r=e.createElement("div");return n.appendChild(r),a=(i=r.getBoundingClientRect()).right-i.left,r.remove(),a||t(n.parentNode)}}(dt)-t}function Rn(e){if(t[e])return!0;if(U)for(var n in U)if(U[n][e])return!0;return!1}function In(e,n){if(null==n&&(n=mt),"items"===e&&Lt)return Math.floor((Ht+St)/(Lt+St))||1;var i=t[e];if(U)for(var a in U)n>=parseInt(a)&&e in U[a]&&(i=U[a][e]);return"slideBy"===e&&"page"===i&&(i=In("items")),Z||"slideBy"!==e&&"items"!==e||(i=Math.floor(i)),i}function Pn(t,e,n,i,a){var r="";if(void 0!==t){var o=t;e&&(o-=e),r=lt?"margin: 0 "+o+"px 0 "+t+"px;":"margin: "+t+"px 0 "+o+"px 0;"}else if(e&&!n){var u="-"+e+"px";r="margin: 0 "+(lt?u+" 0 0":"0 "+u+" 0")+";"}return!Z&&a&&F&&i&&(r+=jn(i)),r}function zn(t,e,n){return t?(t+e)*ne+"px":O?O+"("+100*ne+"% / "+n+")":100*ne/n+"%"}function Wn(t,e,n){var i;if(t)i=t+e+"px";else{Z||(n=Math.floor(n));var a=Z?ne:n;i=O?O+"(100% / "+a+")":100/a+"%"}return i="width:"+i,"inner"!==_?i+";":i+" !important;"}function qn(t){var e="";!1!==t&&(e=(lt?"padding-":"margin-")+(lt?"right":"bottom")+": "+t+"px;");return e}function Fn(t,e){var n=t.substring(0,t.length-e).toLowerCase();return n&&(n="-"+n+"-"),n}function jn(t){return Fn(F,18)+"transition-duration:"+t/1e3+"s;"}function Vn(t){return Fn(V,17)+"animation-duration:"+t/1e3+"s;"}function Gn(){if(Rn("autoHeight")||Nt||!lt){var t=ft.querySelectorAll("img");m(t,(function(t){var e=t.src;Zt||(e&&e.indexOf("data:image")<0?(t.src="",R(t,je),x(t,"loading"),t.src=e):ui(t))})),a((function(){fi(A(t),(function(){xt=!0}))})),Rn("autoHeight")&&(t=si(ce,Math.min(ce+Dt-1,ne-1))),Zt?Qn():a((function(){fi(A(t),Qn)}))}else Z&&Ai(),Yn(),Jn()}function Qn(){if(Nt&&ht>1){var t=Wt?ce:ht-1;!function e(){var n=pt[t].getBoundingClientRect().left,i=pt[t-1].getBoundingClientRect().right;Math.abs(n-i)<=1?Xn():setTimeout((function(){e()}),16)}()}else Xn()}function Xn(){lt&&!Nt||(hi(),Nt?(ae=Ti(),Te&&(Ee=_n()),ve=se(),Nn(Ce||Ee)):Ki()),Z&&Ai(),Yn(),Jn()}function Yn(){if(mi(),st.insertAdjacentHTML("afterbegin",'<div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">'+ai()+"</span>  of "+ht+"</div>"),bt=st.querySelector(".tns-liveregion .current"),Pe){var e=Xt?"stop":"start";mn?T(mn,{"data-action":e}):t.autoplayButtonOutput&&(st.insertAdjacentHTML(Dn(t.autoplayPosition),'<button type="button" data-action="'+e+'">'+gn[0]+e+gn[1]+Jt[0]+"</button>"),mn=st.querySelector("[data-action]")),mn&&R(mn,{click:Wi}),Xt&&(Pi(),Kt&&R(ft,Be),Ut&&R(ft,Se))}if(Re){if($e)T($e,{"aria-label":"Carousel Pagination"}),m(Ze=$e.children,(function(t,e){T(t,{"data-nav":e,tabindex:"-1","aria-label":ln+(e+1),"aria-controls":we})}));else{for(var n="",i=Ie?"":'style="display:none"',a=0;a<ht;a++)n+='<button type="button" data-nav="'+a+'" tabindex="-1" aria-controls="'+we+'" '+i+' aria-label="'+ln+(a+1)+'"></button>';n='<div class="tns-nav" aria-label="Carousel Pagination">'+n+"</div>",st.insertAdjacentHTML(Dn(t.navPosition),n),$e=st.querySelector(".tns-nav"),Ze=$e.children}if(_i(),F){var r=F.substring(0,F.length-18).toLowerCase(),o="transition: all "+Pt/1e3+"s";r&&(o="-"+r+"-"+o),p(_t,"[aria-controls^="+we+"-item]",o,h(_t))}T(Ze[rn],{"aria-label":ln+(rn+1)+sn}),E(Ze[rn],"tabindex"),x(Ze[rn],un),R($e,Le)}ke&&(Xe||Je&&Ke||(st.insertAdjacentHTML(Dn(t.controlsPosition),'<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button type="button" data-controls="prev" tabindex="-1" aria-controls="'+we+'">'+jt[0]+'</button><button type="button" data-controls="next" tabindex="-1" aria-controls="'+we+'">'+jt[1]+"</button></div>"),Xe=st.querySelector(".tns-controls")),Je&&Ke||(Je=Xe.children[0],Ke=Xe.children[1]),t.controlsContainer&&T(Xe,{"aria-label":"Carousel Navigation",tabindex:"0"}),(t.controlsContainer||t.prevButton&&t.nextButton)&&T([Je,Ke],{"aria-controls":we,tabindex:"-1"}),(t.controlsContainer||t.prevButton&&t.nextButton)&&(T(Je,{"data-controls":"prev"}),T(Ke,{"data-controls":"next"})),Ge=gi(Je),Qe=gi(Ke),wi(),Xe?R(Xe,Ne):(R(Je,Ne),R(Ke,Ne))),$n()}function Jn(){if(Z&&Q){var i={};i[Q]=Hi,R(ft,i)}Gt&&R(ft,Oe,t.preventScrollOnTouch),Qt&&R(ft,De),It&&R(e,He),"inner"===_?xe.on("outerResized",(function(){Un(),xe.emit("innerLoaded",Zi())})):(U||Lt||Nt||qt||!lt)&&R(n,{resize:Kn}),qt&&("outer"===_?xe.on("innerLoaded",ci):Ce||ci()),oi(),Ce?ni():Ee&&ei(),xe.on("indexChanged",di),"inner"===_&&xe.emit("innerLoaded",Zi()),"function"==typeof ge&&ge(Zi()),yt=!0}function Kn(t){a((function(){Un(Fi(t))}))}function Un(n){if(yt){"outer"===_&&xe.emit("outerResized",Zi(n)),mt=On();var i,a=ut,r=!1;U&&(Zn(),(i=a!==ut)&&xe.emit("newBreakpointStart",Zi(n)));var o,u,l=Dt,s=Ce,c=Ee,f=It,d=Ft,v=Vt,y=Gt,g=Qt,w=Xt,C=Kt,M=Ut,T=ce;if(i){var E=Lt,A=qt,B=jt,S=Ot,H=Jt;if(!k)var O=St,D=Bt}if(It=In("arrowKeys"),Ft=In("controls"),Vt=In("nav"),Gt=In("touch"),Ot=In("center"),Qt=In("mouseDrag"),Xt=In("autoplay"),Kt=In("autoplayHoverPause"),Ut=In("autoplayResetOnVisibility"),i&&(Ce=In("disable"),Lt=In("fixedWidth"),Pt=In("speed"),qt=In("autoHeight"),jt=In("controlsText"),Jt=In("autoplayText"),Yt=In("autoplayTimeout"),k||(Bt=In("edgePadding"),St=In("gutter"))),Nn(Ce),Ht=kn(),lt&&!Nt||Ce||(hi(),lt||(Ki(),r=!0)),(Lt||Nt)&&(ae=Ti(),ve=se()),(i||Lt)&&(Dt=In("items"),kt=In("slideBy"),(u=Dt!==l)&&(Lt||Nt||(ve=se()),En())),i&&Ce!==s&&(Ce?ni():function(){if(!Me)return;if(_t.disabled=!1,ft.className+=be,Ai(),Wt)for(var t=ee;t--;)Z&&L(pt[t]),L(pt[ne-t-1]);if(!Z)for(var e=ce,n=ce+ht;e<n;e++){var i=pt[e],a=e<ce+Dt?nt:rt;i.style.left=100*(e-ce)/Dt+"%",x(i,a)}ti(),Me=!1}()),Te&&(i||Lt||Nt)&&(Ee=_n())!==c&&(Ee?(Ni(Ei(Bn(0))),ei()):(!function(){if(!Ae)return;Bt&&k&&(ct.style.margin="");if(ee)for(var t="tns-transparent",e=ee;e--;)Z&&b(pt[e],t),b(pt[ne-e-1],t);ti(),Ae=!1}(),r=!0)),Nn(Ce||Ee),Xt||(Kt=Ut=!1),It!==f&&(It?R(e,He):I(e,He)),Ft!==d&&(Ft?Xe?L(Xe):(Je&&L(Je),Ke&&L(Ke)):Xe?N(Xe):(Je&&N(Je),Ke&&N(Ke))),Vt!==v&&(Vt?(L($e),_i()):N($e)),Gt!==y&&(Gt?R(ft,Oe,t.preventScrollOnTouch):I(ft,Oe)),Qt!==g&&(Qt?R(ft,De):I(ft,De)),Xt!==w&&(Xt?(mn&&L(mn),fn||vn||Pi()):(mn&&N(mn),fn&&zi())),Kt!==C&&(Kt?R(ft,Be):I(ft,Be)),Ut!==M&&(Ut?R(e,Se):I(e,Se)),i){if(Lt===E&&Ot===S||(r=!0),qt!==A&&(qt||(ct.style.height="")),Ft&&jt!==B&&(Je.innerHTML=jt[0],Ke.innerHTML=jt[1]),mn&&Jt!==H){var P=Xt?1:0,z=mn.innerHTML,W=z.length-H[P].length;z.substring(W)===H[P]&&(mn.innerHTML=z.substring(0,W)+Jt[P])}}else Ot&&(Lt||Nt)&&(r=!0);if((u||Lt&&!Nt)&&(en=Ui(),_i()),(o=ce!==T)?(xe.emit("indexChanged",Zi()),r=!0):u?o||di():(Lt||Nt)&&(oi(),mi(),ii()),u&&!Z&&function(){for(var t=ce+Math.min(ht,Dt),e=ne;e--;){var n=pt[e];e>=ce&&e<t?(x(n,"tns-moving"),n.style.left=100*(e-ce)/Dt+"%",x(n,nt),b(n,rt)):n.style.left&&(n.style.left="",x(n,rt),b(n,nt)),b(n,it)}setTimeout((function(){m(pt,(function(t){b(t,"tns-moving")}))}),300)}(),!Ce&&!Ee){if(i&&!k&&(Bt===D&&St===O||(ct.style.cssText=Pn(Bt,St,Lt,Pt,qt)),lt)){Z&&(ft.style.width=zn(Lt,St,Dt));var q=Wn(Lt,St,Dt)+qn(St);!function(t,e){"deleteRule"in t?t.deleteRule(e):t.removeRule(e)}(_t,h(_t)-1),p(_t,"#"+we+" > .tns-item",q,h(_t))}qt&&ci(),r&&(Ai(),fe=ce)}i&&xe.emit("newBreakpointEnd",Zi(n))}}function _n(){if(!Lt&&!Nt)return ht<=(Ot?Dt-(Dt-1)/2:Dt);var t=Lt?(Lt+St)*ht:gt[ht],e=Bt?Ht+2*Bt:Ht+St;return Ot&&(e-=Lt?(Ht-Lt)/2:(Ht-(gt[ce+1]-gt[ce]-St))/2),t<=e}function Zn(){for(var t in ut=0,U)t=parseInt(t),mt>=t&&(ut=t)}function $n(){!Xt&&mn&&N(mn),!Vt&&$e&&N($e),Ft||(Xe?N(Xe):(Je&&N(Je),Ke&&N(Ke)))}function ti(){Xt&&mn&&L(mn),Vt&&$e&&L($e),Ft&&(Xe?L(Xe):(Je&&L(Je),Ke&&L(Ke)))}function ei(){if(!Ae){if(Bt&&(ct.style.margin="0px"),ee)for(var t="tns-transparent",e=ee;e--;)Z&&x(pt[e],t),x(pt[ne-e-1],t);$n(),Ae=!0}}function ni(){if(!Me){if(_t.disabled=!0,ft.className=ft.className.replace(be.substring(1),""),E(ft,["style"]),Wt)for(var t=ee;t--;)Z&&N(pt[t]),N(pt[ne-t-1]);if(lt&&Z||E(ct,["style"]),!Z)for(var e=ce,n=ce+ht;e<n;e++){var i=pt[e];E(i,["style"]),b(i,nt),b(i,rt)}$n(),Me=!0}}function ii(){var t=ai();bt.innerHTML!==t&&(bt.innerHTML=t)}function ai(){var t=ri(),e=t[0]+1,n=t[1]+1;return e===n?e+"":e+" to "+n}function ri(t){null==t&&(t=Ei());var e,n,i,a=ce;if(Ot||Bt?(Nt||Lt)&&(n=-(parseFloat(t)+Bt),i=n+Ht+2*Bt):Nt&&(n=gt[ce],i=n+Ht),Nt)gt.forEach((function(t,r){r<ne&&((Ot||Bt)&&t<=n+.5&&(a=r),i-t>=.5&&(e=r))}));else{if(Lt){var r=Lt+St;Ot||Bt?(a=Math.floor(n/r),e=Math.ceil(i/r-1)):e=a+Math.ceil(Ht/r)-1}else if(Ot||Bt){var o=Dt-1;if(Ot?(a-=o/2,e=ce+o/2):e=ce+o,Bt){var u=Bt*Dt/Ht;a-=u,e+=u}a=Math.floor(a),e=Math.ceil(e)}else e=a+Dt-1;a=Math.max(a,0),e=Math.min(e,ne-1)}return[a,e]}function oi(){if(Zt&&!Ce){var t=ri();t.push($t),si.apply(null,t).forEach((function(t){if(!g(t,Fe)){var e={};e[Q]=function(t){t.stopPropagation()},R(t,e),R(t,je),t.src=C(t,"data-src");var n=C(t,"data-srcset");n&&(t.srcset=n),x(t,"loading")}}))}}function ui(t){x(t,"loaded"),li(t)}function li(t){x(t,Fe),b(t,"loading"),I(t,je)}function si(t,e,n){var i=[];for(n||(n="img");t<=e;)m(pt[t].querySelectorAll(n),(function(t){i.push(t)})),t++;return i}function ci(){var t=si.apply(null,ri());a((function(){fi(t,pi)}))}function fi(t,e){return xt?e():(t.forEach((function(e,n){!Zt&&e.complete&&li(e),g(e,Fe)&&t.splice(n,1)})),t.length?void a((function(){fi(t,e)})):e())}function di(){oi(),mi(),ii(),wi(),function(){if(Vt&&(rn=an>=0?an:Hn(),an=-1,rn!==on)){var t=Ze[on],e=Ze[rn];T(t,{tabindex:"-1","aria-label":ln+(on+1)}),b(t,un),T(e,{"aria-label":ln+(rn+1)+sn}),E(e,"tabindex"),x(e,un),on=rn}}()}function vi(t,e){for(var n=[],i=t,a=Math.min(t+e,ne);i<a;i++)n.push(pt[i].offsetHeight);return Math.max.apply(null,n)}function pi(){var t=qt?vi(ce,Dt):vi(ee,ht),e=ot||ct;e.style.height!==t&&(e.style.height=t+"px")}function hi(){gt=[0];var t=lt?"left":"top",e=lt?"right":"bottom",n=pt[0].getBoundingClientRect()[t];m(pt,(function(i,a){a&&gt.push(i.getBoundingClientRect()[t]-n),a===ne-1&&gt.push(i.getBoundingClientRect()[e]-n)}))}function mi(){var t=ri(),e=t[0],n=t[1];m(pt,(function(t,i){i>=e&&i<=n?w(t,"aria-hidden")&&(E(t,["aria-hidden","tabindex"]),x(t,qe)):w(t,"aria-hidden")||(T(t,{"aria-hidden":"true",tabindex:"-1"}),b(t,qe))}))}function yi(t){return t.nodeName.toLowerCase()}function gi(t){return"button"===yi(t)}function xi(t){return"true"===t.getAttribute("aria-disabled")}function bi(t,e,n){t?e.disabled=n:e.setAttribute("aria-disabled",n.toString())}function wi(){if(Ft&&!zt&&!Wt){var t=Ge?Je.disabled:xi(Je),e=Qe?Ke.disabled:xi(Ke),n=ce<=de,i=!zt&&ce>=ve;n&&!t&&bi(Ge,Je,!0),!n&&t&&bi(Ge,Je,!1),i&&!e&&bi(Qe,Ke,!0),!i&&e&&bi(Qe,Ke,!1)}}function Ci(t,e){F&&(t.style[F]=e)}function Mi(t){return null==t&&(t=ce),Nt?(Ht-(Bt?St:0)-(gt[t+1]-gt[t]-St))/2:Lt?(Ht-Lt)/2:(Dt-1)/2}function Ti(){var t=Ht+(Bt?St:0)-(Lt?(Lt+St)*ne:gt[ne]);return Ot&&!Wt&&(t=Lt?-(Lt+St)*(ne-1)-Mi():Mi(ne-1)-gt[ne-1]),t>0&&(t=0),t}function Ei(t){var e;if(null==t&&(t=ce),lt&&!Nt)if(Lt)e=-(Lt+St)*t,Ot&&(e+=Mi());else{var n=W?ne:Dt;Ot&&(t-=Mi()),e=100*-t/n}else e=-gt[t],Ot&&Nt&&(e+=Mi());return ie&&(e=Math.max(e,ae)),e+=!lt||Nt||Lt?"px":"%"}function Ai(t){Ci(ft,"0s"),Ni(t)}function Ni(t){null==t&&(t=Ei()),ft.style[oe]=ue+t+le}function Li(t,e,n,i){var a=t+Dt;Wt||(a=Math.min(a,ne));for(var r=t;r<a;r++){var o=pt[r];i||(o.style.left=100*(r-ce)/Dt+"%"),at&&j&&(o.style[j]=o.style[G]=at*(r-t)/1e3+"s"),b(o,e),x(o,n),i&&te.push(o)}}function Bi(t,e){re&&En(),(ce!==fe||e)&&(xe.emit("indexChanged",Zi()),xe.emit("transitionStart",Zi()),qt&&ci(),fn&&t&&["click","keydown"].indexOf(t.type)>=0&&zi(),ye=!0,An())}function Si(t){return t.toLowerCase().replace(/-/g,"")}function Hi(t){if(Z||ye){if(xe.emit("transitionEnd",Zi(t)),!Z&&te.length>0)for(var e=0;e<te.length;e++){var n=te[e];n.style.left="",G&&j&&(n.style[G]="",n.style[j]=""),b(n,it),x(n,rt)}if(!t||!Z&&t.target.parentNode===ft||t.target===ft&&Si(t.propertyName)===Si(oe)){if(!re){var i=ce;En(),ce!==i&&(xe.emit("indexChanged",Zi()),Ai())}"inner"===_&&xe.emit("innerLoaded",Zi()),ye=!1,fe=ce}}}function Oi(t,e){if(!Ee)if("prev"===t)Di(e,-1);else if("next"===t)Di(e,1);else{if(ye){if(pe)return;Hi()}var n=Sn(),i=0;if("first"===t?i=-n:"last"===t?i=Z?ht-Dt-n:ht-1-n:("number"!=typeof t&&(t=parseInt(t)),isNaN(t)||(e||(t=Math.max(0,Math.min(ht-1,t))),i=t-n)),!Z&&i&&Math.abs(i)<Dt){var a=i>0?1:-1;i+=ce+i-ht>=de?ht*a:2*ht*a*-1}ce+=i,Z&&Wt&&(ce<de&&(ce+=ht),ce>ve&&(ce-=ht)),Sn(ce)!==Sn(fe)&&Bi(e)}}function Di(t,e){if(ye){if(pe)return;Hi()}var n;if(!e){for(var i=ji(t=Fi(t));i!==Xe&&[Je,Ke].indexOf(i)<0;)i=i.parentNode;var a=[Je,Ke].indexOf(i);a>=0&&(n=!0,e=0===a?-1:1)}if(zt){if(ce===de&&-1===e)return void Oi("last",t);if(ce===ve&&1===e)return void Oi("first",t)}e&&(ce+=kt*e,Nt&&(ce=Math.floor(ce)),Bi(n||t&&"keydown"===t.type?t:null))}function ki(){cn=setInterval((function(){Di(null,hn)}),Yt),fn=!0}function Ri(){clearInterval(cn),fn=!1}function Ii(t,e){T(mn,{"data-action":t}),mn.innerHTML=gn[0]+t+gn[1]+e}function Pi(){ki(),mn&&Ii("stop",Jt[1])}function zi(){Ri(),mn&&Ii("start",Jt[0])}function Wi(){fn?(zi(),vn=!0):(Pi(),vn=!1)}function qi(t){t.focus()}function Fi(t){return Vi(t=t||n.event)?t.changedTouches[0]:t}function ji(t){return t.target||n.event.srcElement}function Vi(t){return t.type.indexOf("touch")>=0}function Gi(t){t.preventDefault?t.preventDefault():t.returnValue=!1}function Qi(){return r=Cn.y-wn.y,o=Cn.x-wn.x,e=Math.atan2(r,o)*(180/Math.PI),n=he,i=!1,(a=Math.abs(90-Math.abs(e)))>=90-n?i="horizontal":a<=n&&(i="vertical"),i===t.axis;var e,n,i,a,r,o}function Xi(t){if(ye){if(pe)return;Hi()}Xt&&fn&&Ri(),Mn=!0,bn&&(o(bn),bn=null);var e=Fi(t);xe.emit(Vi(t)?"touchStart":"dragStart",Zi(t)),!Vi(t)&&["img","a"].indexOf(yi(ji(t)))>=0&&Gi(t),Cn.x=wn.x=e.clientX,Cn.y=wn.y=e.clientY,Z&&(xn=parseFloat(ft.style[oe].replace(ue,"")),Ci(ft,"0s"))}function Yi(t){if(Mn){var e=Fi(t);Cn.x=e.clientX,Cn.y=e.clientY,Z?bn||(bn=a((function(){!function t(e){if(!me)return void(Mn=!1);o(bn),Mn&&(bn=a((function(){t(e)})));"?"===me&&(me=Qi());if(me){!Ve&&Vi(e)&&(Ve=!0);try{e.type&&xe.emit(Vi(e)?"touchMove":"dragMove",Zi(e))}catch(t){}var n=xn,i=Tn(Cn,wn);if(!lt||Lt||Nt)n+=i,n+="px";else n+=W?i*Dt*100/((Ht+St)*ne):100*i/(Ht+St),n+="%";ft.style[oe]=ue+n+le}}(t)}))):("?"===me&&(me=Qi()),me&&(Ve=!0)),("boolean"!=typeof t.cancelable||t.cancelable)&&Ve&&t.preventDefault()}}function Ji(e){if(Mn){bn&&(o(bn),bn=null),Z&&Ci(ft,""),Mn=!1;var n=Fi(e);Cn.x=n.clientX,Cn.y=n.clientY;var i=Tn(Cn,wn);if(Math.abs(i)){if(!Vi(e)){var r=ji(e);R(r,{click:function t(e){Gi(e),I(r,{click:t})}})}Z?bn=a((function(){if(lt&&!Nt){var t=-i*Dt/(Ht+St);t=i>0?Math.floor(t):Math.ceil(t),ce+=t}else{var n=-(xn+i);if(n<=0)ce=de;else if(n>=gt[ne-1])ce=ve;else for(var a=0;a<ne&&n>=gt[a];)ce=a,n>gt[a]&&i<0&&(ce+=1),a++}Bi(e,i),xe.emit(Vi(e)?"touchEnd":"dragEnd",Zi(e))})):me&&Di(e,i>0?-1:1)}}"auto"===t.preventScrollOnTouch&&(Ve=!1),he&&(me="?"),Xt&&!fn&&ki()}function Ki(){(ot||ct).style.height=gt[ce+Dt]-gt[ce]+"px"}function Ui(){var t=Lt?(Lt+St)*ht/Ht:ht/Dt;return Math.min(Math.ceil(t),ht)}function _i(){if(Vt&&!Ie&&en!==nn){var t=nn,e=en,n=L;for(nn>en&&(t=en,e=nn,n=N);t<e;)n(Ze[t]),t++;nn=en}}function Zi(t){return{container:ft,slideItems:pt,navContainer:$e,navItems:Ze,controlsContainer:Xe,hasControls:ke,prevButton:Je,nextButton:Ke,items:Dt,slideBy:kt,cloneCount:ee,slideCount:ht,slideCountNew:ne,index:ce,indexCached:fe,displayIndex:Ln(),navCurrentIndex:rn,navCurrentIndexCached:on,pages:en,pagesCached:nn,sheet:_t,isOn:yt,event:t||{}}}Y&&console.warn("No slides found in",t.container)}}}]);