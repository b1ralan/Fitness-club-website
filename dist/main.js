!function(e){var t={};function n(l){if(t[l])return t[l].exports;var r=t[l]={i:l,l:!1,exports:{}};return e[l].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,l){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(n.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(l,r,function(t){return e[t]}.bind(null,r));return l},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var l=()=>{const e=document.querySelector("body"),t=document.querySelector(".list"),n=document.getElementById("free_visit_form"),l=document.getElementById("callback_form"),r=document.getElementById("gift"),o=document.querySelectorAll("li > a "),c=document.querySelector(".popup-menu"),i=document.getElementById("totop");function s(){e.classList.add("no-scroll")}function d(){e.classList.remove("no-scroll")}e.addEventListener("click",e=>{e.target.closest(".clubs-list")?"none"===t.style.display?t.style.display="block":t.style.display="none":e.target.matches("p")&&e.target.closest(".clubs-list")||(t.style.display="none"),e.target.closest(".open-popup")?("none"===n.style.display?n.style.display="block":n.style.display="none",s()):(e.target.closest(".close_icon")||e.target.closest(".overlay"))&&(n.style.display="none",d()),e.target.closest(".callback-btn")?("none"===l.style.display?l.style.display="block":l.style.display="none",s()):(e.target.closest(".close_icon")||e.target.closest(".overlay"))&&(l.style.display="none",d()),e.target.closest(".fixed-gift")?(document.querySelector(".fixed-gift").style.display="none","none"===r.style.display?r.style.display="block":r.style.display="none",s()):(e.target.closest(".close_icon")||e.target.closest(".overlay")||e.target.closest(".close-btn"))&&(r.style.display="none",d()),e.target.closest(".scroll")&&(e.preventDefault(),o.forEach(t=>{const n=new URL(t.href).hash;t===e.target&&document.querySelector(n).scrollIntoView({behavior:"smooth",block:"start"})})),e.target.closest('[src="images/menu-button.png"]')?c.style.display="flex":(e.target.closest(".close-menu-btn")||e.target.closest(".scroll"))&&(c.style.display="none")});window.onscroll=function(){(()=>{const e=document.getElementById("navbar");window.pageYOffset>=180&&window.innerWidth<768?e.classList.add("menu-fix"):e.classList.remove("menu-fix")})()};window.addEventListener("scroll",(function(){let e=window.pageYOffset,t=document.documentElement.clientHeight;e>t&&(i.style.display="block"),e<t&&(i.style.display="none")})),i.addEventListener("click",e=>{e.stopPropagation(),e.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})})};var r=()=>{const e=document.querySelectorAll(".main-slide");let t,n=0;const l=()=>{e[n].style.display="none",n++,n>=e.length&&(n=0),((e,t)=>{e[t].style.display="flex"})(e,n)};((e=3e3)=>{t=setInterval(l,e)})(3e3)};var o=()=>{const e=document.createElement("style");e.id="carousel-style",e.textContent="\n    .services-slider {\n      width: 100%;\n      overflow: hidden;\n      padding-left: 5px;\n      position: relative;\n    }\n\n    .services-slider > .slide {   \n      min-width: 226px;    \n      margin-right: 0% !important; \n      margin-left: 0%!important;\n      transition: transform 0.5s !important;\n      will-change: transform !important;\n    }\n\n    .services-slider > span {\n      position: absolute;\n      width: 36px;\n      height: 37px;\n      background-color: #f4c71b !important;\n      border-radius: 50%;\n      text-align: center;\n      padding-top: 11px;\n    }\n\n    .carousel-slider-left {\n      top: 22%;\n      left: 0;\n      cursor: pointer;\n    }\n\n    .carousel-slider-right {\n      top: 22%;\n      left: 97%;\n      cursor: pointer;\n    }\n\n    @media (max-width: 1100px) {\n\n    .services-slider {\n      width: 95%;\n    }\n\n    .services-slider > .slide {\n      flex: 0 0 34%;   \n\n    }\n  }\n\n    @media (max-width: 768px) {\n\n    .services-slider {\n      width: 90%;\n    }\n\n    .services-slider > .slide {\n      flex: 0 0 100%;   \n    }\n\n    .carousel-slider-left {\n      top: 22;\n      left: 3%;\n      cursor: pointer;\n    }\n\n    .carousel-slider-right {\n      top: 22%;\n      left: 80%;\n      cursor: pointer;\n    }\n  }\n\n    @media (max-width: 330px) {\n\n    .carousel-slider-left {\n      left: 3%;\n    }\n  \n    .carousel-slider-right {\n      left: 80%;\n    }\n  }\n\n    @media (max-width: 380px) {\n\n    .carousel-slider-left {\n      left: 6%;\n    }\n  \n    .carousel-slider-right {\n      left: 80%;\n    }\n  }\n    ",document.head.append(e);const t=document.querySelector(".services-slider"),n=[...t.children],l=document.querySelectorAll(" .services-slider > .slide > img"),r=document.createElement("span"),o=document.createElement("span");r.className="carousel-slider-left",r.innerHTML='<i class="fa fa-angle-left"></i>',o.className="carousel-slider-right",o.innerHTML='<i class="fa fa-angle-right"></i>',t.append(r),t.append(o);const c=()=>{let e=0,r=0;t.addEventListener("click",t=>{const o=t.target;if(o.closest(".carousel-slider-left, .carousel-slider-right")){if(o.closest(".carousel-slider-left")&&r>0){if(window.innerWidth<=768)return e+=n[0].getBoundingClientRect().width-l[0].getBoundingClientRect().width+l[0].getBoundingClientRect().width,r--,void n.forEach(t=>{t.style.transform=`translateX(${e}px)`});if(window.innerWidth<1100)return e+=n[0].getBoundingClientRect().width,r--,void n.forEach(t=>{t.style.transform=`translateX(${e}px)`});if(window.innerWidth>1100)return e+=226,r--,void n.forEach(t=>{t.style.transform=`translateX(${e}px)`})}if(o.closest(".carousel-slider-right")){if(window.innerWidth<=768&&r!==n.length-1)return e-=n[0].getBoundingClientRect().width-l[0].getBoundingClientRect().width+l[0].getBoundingClientRect().width,r++,void n.forEach(t=>{t.style.transform=`translateX(${e}px)`});if(window.innerWidth>768&&window.innerWidth<=1100&&r!==n.length-3)return e-=n[0].getBoundingClientRect().width,r++,void n.forEach(t=>{t.style.transform=`translateX(${e}px)`});if(window.innerWidth>1100&&r!==n.length-5)return e-=226,r++,void n.forEach(t=>{t.style.transform=`translateX(${e}px)`})}}})};c(),window.addEventListener("resize",c)};const c=()=>{const e=document.getElementById("footer"),t=document.querySelectorAll("li > a ");e.addEventListener("click",e=>{e.target.matches("a")&&(e.preventDefault(),t.forEach(t=>{const n=new URL(t.href).hash;t===e.target&&document.querySelector(n).scrollIntoView({behavior:"smooth",block:"start"})}))})};c();var i=c;var s=()=>{const e=document.querySelector(".gallery-slider"),t=document.querySelectorAll(".gallery-slide"),n=document.querySelector(".slider-dots");let l,r=document.querySelectorAll(".dot"),o=0;for(let e=0;e<t.length;e++){const e=document.createElement("button");e.classList.add("dot"),n.appendChild(e)}r=document.querySelectorAll(".dot"),r[0].classList.add("dot-active");const c=(e,t,n)=>{e[t].classList.remove(n)},i=(e,t,n)=>{e[t].classList.add(n)},s=()=>{c(t,o,"gallery-slide-active"),c(r,o,"dot-active"),o++,o>=t.length&&(o=0),i(t,o,"gallery-slide-active"),i(r,o,"dot-active")},d=(e=3e3)=>{l=setInterval(s,e)};e.addEventListener("click",e=>{e.preventDefault();const n=e.target;c(t,o,"gallery-slide-active"),c(r,o,"dot-active"),n.closest("#arrow-left")?o--:n.closest("#arrow-right")?o++:n.matches(".dot")&&r.forEach((e,t)=>{e===n&&(o=t)}),o>=t.length&&(o=0),o<0&&(o=t.length-1),i(t,o,"gallery-slide-active"),i(r,o,"dot-active")}),e.addEventListener("mouseover",e=>{(e.target.closest(".slider-arrow")||e.target.closest(".gallery-slide")||e.target.closest(".dot"))&&clearInterval(l)}),e.addEventListener("mouseout",e=>{(e.target.closest(".slider-arrow")||e.target.closest(".gallery-slide")||e.target.closest(".dot"))&&d()}),d(1500)};var d=()=>{let e=document.getElementById("m1"),t=document.getElementById("m2"),n=document.getElementById("m3"),l=document.getElementById("m4"),r=document.getElementById("promo"),o=document.getElementById("price-total"),c=document.getElementById("card_leto_mozaika"),i=document.getElementById("card_leto_schelkovo"),s=document.getElementById("card_order");s.addEventListener("click",()=>{c.checked&&"ТЕЛО2020"!==r.value&&(e.checked&&(o.innerHTML=1999),t.checked&&(o.innerHTML=9900),n.checked&&(o.innerHTML=13900),l.checked&&(o.innerHTML=19900)),i.checked&&"ТЕЛО2020"!==r.value&&(e.checked&&(o.innerHTML=2999),t.checked&&(o.innerHTML=14900),n.checked&&(o.innerHTML=20900),l.checked&&(o.innerHTML=24900)),c.checked&&"ТЕЛО2020"===r.value&&(e.checked&&(o.innerHTML=Math.floor(1999-1999*.3)),t.checked&&(o.innerHTML=Math.floor(6930)),n.checked&&(o.innerHTML=Math.floor(9730)),l.checked&&(o.innerHTML=Math.floor(13930))),i.checked&&"ТЕЛО2020"===r.value&&(e.checked&&(o.innerHTML=Math.floor(2099.3)),t.checked&&(o.innerHTML=Math.floor(10430)),n.checked&&(o.innerHTML=Math.floor(15330)),l.checked&&(o.innerHTML=Math.floor(17430))),r.addEventListener("input",()=>{"ТЕЛО2020"===r.value&&e.checked&&c.checked?o.innerHTML=Math.floor(1999-1999*.3):"ТЕЛО2020"!==r.value&&e.checked&&c.checked?o.innerHTML=1999:"ТЕЛО2020"===r.value&&t.checked&&c.checked?o.innerHTML=Math.floor(6930):"ТЕЛО2020"!==r.value&&t.checked&&c.checked?o.innerHTML=9900:"ТЕЛО2020"===r.value&&n.checked&&c.checked?o.innerHTML=Math.floor(9730):"ТЕЛО2020"!==r.value&&n.checked&&c.checked?o.innerHTML=13900:"ТЕЛО2020"===r.value&&l.checked&&c.checked?o.innerHTML=Math.floor(13930):"ТЕЛО2020"!==r.value&&l.checked&&c.checked&&(o.innerHTML=19900),"ТЕЛО2020"===r.value&&e.checked&&i.checked?o.innerHTML=Math.floor(2099.3):"ТЕЛО2020"===r.value&&t.checked&&i.checked?o.innerHTML=Math.floor(10430):"ТЕЛО2020"===r.value&&n.checked&&i.checked?o.innerHTML=Math.floor(15330):"ТЕЛО2020"===r.value&&l.checked&&i.checked&&(o.innerHTML=Math.floor(17430)),"ТЕЛО2020"!==r.value&&e.checked&&i.checked?o.innerHTML=2999:"ТЕЛО2020"!==r.value&&t.checked&&i.checked?o.innerHTML=14900:"ТЕЛО2020"!==r.value&&n.checked&&i.checked?o.innerHTML=21900:"ТЕЛО2020"!==r.value&&l.checked&&i.checked&&(o.innerHTML=24900)})})};l(),r(),o(),s(),d(),i()}]);