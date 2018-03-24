"use strict";var nav=document.querySelectorAll(".nav-holder");if(nav.length>0)for(var i=0;i<nav.length;i++)for(var drops=nav[i].querySelectorAll(".drop"),j=0;j<drops.length;j++)drops[j].parentNode.classList.add("js-dropdown");var quotesSlider=document.getElementById("quotes-slider");quotesSlider&&tns({container:quotesSlider,items:1,mode:"gallery",speed:700,axis:"horizontal",lazyload:!0});var sections=document.querySelectorAll(".js-flyin");function inView(){window.innerWidth>768&&sections.forEach(function(e){inViewport(e,{offset:-300})&&e.classList.add("js-inview")})}sections.length>0&&(inView(),window.onscroll=function(){inView()});var navHolder=document.querySelector(".nav-holder"),opener=navHolder.querySelector(".opener");opener&&(opener.onclick=function(){navHolder.classList.toggle("opened")},window.onresize=function(){navHolder.classList.contains("opened")&&navHolder.classList.remove("opened")});var contactForm=document.querySelector(".contact-form");function contactFormValidation(){var e=!0;contactForm.querySelectorAll(".required").forEach(function(o){if(o.classList.contains("js-error")&&(o.classList.remove("js-error"),o.parentNode.removeChild(o.parentNode.querySelector(".js-error-text"))),o.value.length<3)validationError(o,o.parentNode.querySelector("label").textContent+" is required!"),e=!1;else if("email"===o.getAttribute("type")){if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(o.value.toLowerCase()))validationError(o,o.parentNode.querySelector("label").textContent+" is not valid!"),e=!1}}),e&&contactForm.classList.add("js-validform")}function validationError(e,o){e.classList.add("js-error");var t=document.createElement("p");t.appendChild(document.createTextNode(o)),t.classList.add("js-error-text"),e.parentNode.appendChild(t)}contactForm&&(contactForm.querySelector(".btn").onclick=function(){contactFormValidation()}),new SmoothScroll('a.scrollto[href*="#"]');var header=document.getElementById("header");if(header){var headerH=header.offsetHeight+50,body=document.querySelector("body"),bodyHeight=body.clientHeight,windowHeight=window.outerHeight,span=document.createElement("span");span.classList.add("js-progressbar"),header.appendChild(span),document.onscroll=function(e){var o=window.scrollY;o>headerH?(body.classList.add("js-sticky"),span.style.width=(o+windowHeight)/bodyHeight*100+"%"):body.classList.remove("js-sticky")}}var howitworksPopup=document.querySelector(".howitworks-popup");if(howitworksPopup){var removePopup=function(){howitworksPopup.classList.contains("js-visible")&&(howitworksPopup.classList.remove("js-visible"),_body.removeChild(fader))},popupOpener=document.querySelector(".popup-opener"),fader=document.createElement("span"),_body=document.querySelector("body"),close=howitworksPopup.querySelector(".close"),popupLeft=window.outerWidth/2-howitworksPopup.clientWidth/2+"px",popupTop=window.outerHeight/2-howitworksPopup.clientHeight/2+"px";howitworksPopup.style.left=popupLeft,howitworksPopup.style.top=popupTop,fader.setAttribute("id","fader"),popupOpener.onclick=function(e){e.preventDefault(),_body.appendChild(fader),howitworksPopup.classList.add("js-visible"),popupLeft=window.outerWidth/2-howitworksPopup.clientWidth/2+"px",popupTop=window.outerHeight/2-howitworksPopup.clientHeight/2+"px",howitworksPopup.style.left=popupLeft,howitworksPopup.style.top=popupTop},howitworksPopup.classList.contains("js-visible"),fader.onclick=function(){removePopup()},close.onclick=function(){removePopup()},window.onresize=function(){removePopup()}}