"use strict";var nav=document.querySelectorAll(".nav-holder");if(nav.length>0)for(var i=0;i<nav.length;i++)for(var drops=nav[i].querySelectorAll(".drop"),j=0;j<drops.length;j++)drops[j].parentNode.classList.add("js-dropdown");var quotesSlider=document.getElementById("quotes-slider");quotesSlider&&tns({container:quotesSlider,items:1,mode:"gallery",speed:700,axis:"horizontal",lazyload:!0});var sections=document.querySelectorAll(".js-flyin");function inView(){window.innerWidth>768&&sections.forEach(function(e){inViewport(e,{offset:-300})&&e.classList.add("js-inview")})}sections.length>0&&(inView(),window.onscroll=function(){inView()});var navHolder=document.querySelector(".nav-holder"),opener=navHolder.querySelector(".opener");opener&&(opener.onclick=function(){navHolder.classList.toggle("opened")},window.onresize=function(){navHolder.classList.contains("opened")&&navHolder.classList.remove("opened")});var contactForm=document.querySelector(".contact-form");function contactFormValidation(){var e=!0;contactForm.querySelectorAll(".required").forEach(function(t){if(t.classList.contains("js-error")&&(t.classList.remove("js-error"),t.parentNode.removeChild(t.parentNode.querySelector(".js-error-text"))),t.value.length<3)validationError(t,t.parentNode.querySelector("label").textContent+" is required!"),e=!1;else if("email"===t.getAttribute("type")){if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(t.value.toLowerCase()))validationError(t,t.parentNode.querySelector("label").textContent+" is not valid!"),e=!1}}),e&&contactForm.classList.add("js-validform")}function validationError(e,t){e.classList.add("js-error");var o=document.createElement("p");o.appendChild(document.createTextNode(t)),o.classList.add("js-error-text"),e.parentNode.appendChild(o)}contactForm&&(contactForm.querySelector(".btn").onclick=function(){contactFormValidation()}),new SmoothScroll('a.scrollto[href*="#"]');var header=document.getElementById("header");if(header){var headroom=new Headroom(header);headroom.init();var body=document.querySelector("body"),bodyHeight=body.clientHeight,windowHeight=window.outerHeight,progressbar=header.querySelector(".js-progressbar");document.onscroll=function(e){var t=window.scrollY;progressbar.style.width=(t+windowHeight)/bodyHeight*100+"%"}}var howitworksPopup=document.querySelector(".howitworks-popup");if(howitworksPopup){var removePopup=function(){howitworksPopup.classList.contains("js-visible")&&(howitworksPopup.classList.remove("js-visible"),_body.removeChild(fader))},popupOpener=document.querySelector(".popup-opener"),fader=document.createElement("span"),_body=document.querySelector("body"),close=howitworksPopup.querySelector(".close"),popupLeft=window.outerWidth/2-howitworksPopup.clientWidth/2+"px",popupTop=window.outerHeight/2-howitworksPopup.clientHeight/2+"px";howitworksPopup.style.left=popupLeft,howitworksPopup.style.top=popupTop,fader.setAttribute("id","fader"),popupOpener.onclick=function(e){e.preventDefault(),_body.appendChild(fader),howitworksPopup.classList.add("js-visible"),popupLeft=window.outerWidth/2-howitworksPopup.clientWidth/2+"px",popupTop=window.outerHeight/2-howitworksPopup.clientHeight/2+"px",howitworksPopup.style.left=popupLeft,howitworksPopup.style.top=popupTop},howitworksPopup.classList.contains("js-visible"),fader.onclick=function(){removePopup()},close.onclick=function(){removePopup()},window.onresize=function(){removePopup()}}customSelect(".custom-select");var quiz=document.querySelector(".quiz-holder");if(quiz){var updateSliderContent=function(e){console.log(e);var t=(activeStep=quiz.querySelector(".quiz-step.js-active")).querySelector(".slider-content .js-active");t&&(t.classList.remove("js-active"),activeStep.querySelector('.holder[data-attr="'+e+'"').classList.add("js-active"))},goNext=function(e){e.preventDefault(),(activeStep=quiz.querySelector(".quiz-step.js-active")).classList.remove("js-active"),activeStep.classList.add("js-completed"),(nextEl=activeStep.nextElementSibling).classList.add("js-active"),dataAttr=activeStep.getAttribute("data-attr"),progressBar.setAttribute("data-attr",1*dataAttr+1)},goBack=function(e){e.preventDefault(),(activeStep=quiz.querySelector(".quiz-step.js-active")).classList.remove("js-active"),(prevEl=activeStep.previousElementSibling).classList.remove("js-completed"),prevEl.classList.add("js-active"),dataAttr=1*prevEl.getAttribute("data-attr")-1,progressBar.setAttribute("data-attr",dataAttr+1)},getNumber=function(e,t){return parseInt(e.getAttribute(t),10)},pauseEvent=function(e){return e.stopPropagation&&e.stopPropagation(),e.preventDefault&&e.preventDefault(),e.cancelBubble=!0,e.returnValue=!1,!1},debounce=function(e,t,o){var n=void 0,i=void 0,r=void 0,a=void 0,s=void 0;function l(){var u=now()-a;u<t&&u>0?n=setTimeout(l,t-u):(n=null,o||(s=e.apply(r,i),n||(r=i=null)))}return null==t&&(t=100),function(){r=this,i=arguments,a=now();var u=o&&!n;return n||(n=setTimeout(l,t)),u&&(s=e.apply(r,i),r=i=null),s}},setInitialPosition=function(e,t,o){var n=isNaN(o)?0:o,i=t-e;return Math.round(100*(n-e)/i)},handlePosition=function(e,t){var o=Math.min(Math.max(e/t,0),1);return Math.round(100*o+0)},handlePositionSteps=function(e,t,o,n,i){var r=Math.min(Math.max(e/t,0),1),a=n-o;return Math.round(r*a/i)*i/a*100},eventHandler=function(e,t,o){var n=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],i=arguments[4];t(o),e.isMoving=n,e.animationFrame=window.requestAnimationFrame(i),e.offset=o.pageX-e.dimensions.left},handleValue=function(e,t,o){var n=t-e;return Math.round(o*n/100+e)},setValueInDom=function(e,t){e.textContent=t},setAttributeInDom=function(e,t,o){return e.setAttribute(t,o)},createSlider=function(){var e=document.getElementsByClassName("js-ranger"),t=document.getElementsByClassName("js-ranger-input"),o=document.getElementsByClassName("js-ranger-track");if(!(e.length<=0||t.length<e.length||o.length<e.length)){var n=Array.prototype.slice.call(e),i=debounce(setValueInDom,10),r=debounce(setAttributeInDom,40);n.forEach(function(e,t,o){var n=e.querySelector(".js-ranger-input"),a=e.querySelector(".js-ranger-track"),s=e.querySelector(".js-ranger-distance"),l=e.querySelector(".js-ranger-value"),u=e.querySelector(".js-ranger-indicator"),c={isMoving:!1,min:getNumber(n,"data-min"),max:getNumber(n,"data-max"),value:getNumber(n,"value"),steps:getNumber(n,"data-step"),offset:0,curretValue:0,dimensions:a.getBoundingClientRect()};!function(){var t=setInitialPosition(c.min,c.max,c.value)+"%";if(s.style.width=t,null!==u&&(setValueInDom(l,c.value),u.style.left=t),!isNaN(c.steps)){var o=document.createElement("div"),n=(c.max-c.min)/c.steps,i=100/n,r=void 0;for(o.classList.add("Slider-steps"),e.appendChild(o),r=n-1;r>=1;r--){var d=document.createElement("span");d.classList.add("Slider-fraction"),d.style.left=i*r+"%",o.appendChild(d)}}window.addEventListener("resize",function(){c.dimensions=a.getBoundingClientRect()})}();var d=function t(o){(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])&&(c.animationFrame=window.requestAnimationFrame(t)),e.classList.toggle("is-moving",c.isMoving),s.style.width=c.currentPosition+"%",r(n,"value",c.currentValue),null!==u&&(i(l,c.currentValue),u.style.left=c.currentPosition+"%")};e.addEventListener("mousedown",function(e){eventHandler(c,pauseEvent,e,!0,d),isNaN(c.steps)?c.currentPosition=handlePosition(c.offset,c.dimensions.width):c.currentPosition=handlePositionSteps(c.offset,c.dimensions.width,c.min,c.max,c.steps),c.currentValue=handleValue(c.min,c.max,c.currentPosition)}),window.addEventListener("mousemove",debounce(function(e){c.isMoving&&(eventHandler(c,pauseEvent,e,!0,d),isNaN(c.steps)?c.currentPosition=handlePosition(c.offset,c.dimensions.width):c.currentPosition=handlePositionSteps(c.offset,c.dimensions.width,c.min,c.max,c.steps),c.currentValue=handleValue(c.min,c.max,c.currentPosition))},10)),window.addEventListener("mouseup",function(e){c.isMoving&&(window.cancelAnimationFrame(c.animationFrame),c.isMoving=!1,d(null,!1)),c.currentValue&&updateSliderContent(c.currentValue)}),"ontouchstart"in window&&(e.addEventListener("touchstart",function(e){eventHandler(c,pauseEvent,e,!0,d),isNaN(c.steps)?c.currentPosition=handlePosition(c.offset,c.dimensions.width):c.currentPosition=handlePositionSteps(c.offset,c.dimensions.width,c.min,c.max,c.steps),c.currentValue=handleValue(c.min,c.max,c.currentPosition)}),e.addEventListener("touchmove",function(e){c.isMoving&&(eventHandler(c,pauseEvent,e,!0,d),isNaN(c.steps)?c.currentPosition=handlePosition(c.offset,c.dimensions.width):c.currentPosition=handlePositionSteps(c.offset,c.dimensions.width,c.min,c.max,c.steps),c.currentValue=handleValue(c.min,c.max,c.currentPosition))}),e.addEventListener("touchend",function(e){c.isMoving&&(window.cancelAnimationFrame(c.animationFrame),c.isMoving=!1,d(null,!1)),c.currentValue&&updateSliderContent(c.currentValue)}))})}},width=quiz.clientWidth,steps=quiz.querySelectorAll(".quiz-step"),quizContainer=quiz.querySelector(".quiz-inner"),progressBar=document.querySelector(".quiz-progressbar"),activeStep=quiz.querySelector(".quiz-step.js-active"),dataAttr=activeStep.getAttribute("data-attr"),rangerInputs=quiz.querySelectorAll(".js-ranger-input"),nextEl=void 0,prevEl=void 0,btn=void 0,back=void 0;steps.forEach(function(e){e.style.width=width+"px",(btn=e.querySelector(".btn"))&&(btn.onclick=function(e){goNext(e)}),(back=e.querySelector(".back"))&&(back.onclick=function(e){goBack(e)});var t=e.querySelector(".boxes-holder"),o=e.querySelectorAll(".box");o.length>0&&o.forEach(function(o,n){o.onclick=function(){var n=t.querySelector(".js-active");n&&n.classList.remove("js-active"),o.classList.add("js-active");var i=e.querySelector(".quiz-btns .disabled");i&&i.classList.remove("disabled")}})}),createSlider(),window.onresize=function(){width=quiz.clientWidth,steps.forEach(function(e){e.style.width=width+"px"})};var now=function(){return(new Date).getTime()}}