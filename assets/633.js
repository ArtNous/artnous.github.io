(self.webpackChunkbarba_starter_template=self.webpackChunkbarba_starter_template||[]).push([[633],{6633:(e,t,n)=>{"use strict";var i=n(9069),r=n.n(i),o=n(2212),a=n(7564),s=n.n(a),c=n(6358),l=n(7082),u=n(6107),m=n(1122),h=n(2986),d=n(9582);n(9144),n(1043);class v extends o.Tme{constructor(e,t,n,i,r){super(),this.material=new o.vBJ({color:i});for(let i=0;i<2+n;i++){const a=e+(t-e)*(i/(1+n)),s=new o.o8S(a,a+r,64);s.translate(0,e-a-e,0);const c=new o.Kj0(s,this.material);this.add(c)}}}class p extends o.Tme{constructor(e,t,n,i){super(),this.nulo_int=new o.Tme,this.circulo_ext=new v(e,2*e/3,t,n,i),this.circulo_int=new v(2*e/3,e/3,t,n,i),this.add(this.nulo_int),this.add(this.circulo_ext),this.nulo_int.position.y=e/3,this.circulo_ext.position.y=e,this.circulo_int.position.y=2*e/3,this.nulo_int.rotation.z=Math.PI,this.nulo_int.add(this.circulo_int)}}const y=p;var g=n(6835),f=n(7059),x=n(2074);class w{constructor(e){this.canvas=e,this.renderer=new o.CP7({canvas:this.canvas,alpha:!0});const t=window.devicePixelRatio;this.width=this.canvas.clientWidth*t|0,this.height=this.canvas.clientHeight*t|0,this.camara=new o.iKG(this.width/-2,this.width/2,this.height/2,this.height/-2,-1e3,1e3),this.scene=new o.xsS,this.resizeRendererToDisplaySize()}resizeRendererToDisplaySize(){const e=window.devicePixelRatio;this.width=this.canvas.clientWidth*e|0,this.height=this.canvas.clientHeight*e|0;(this.canvas.width!==this.width||this.canvas.height!==this.height)&&(this.renderer.setSize(this.width,this.height,!1),this.camara.aspect=this.width/this.height,this.camara.updateProjectionMatrix())}render(){this.resizeRendererToDisplaySize(),this.renderer.render(this.scene,this.camara)}}class _ extends w{constructor(e){super(e);const t=e.clientWidth<e.clientHeight?e.clientWidth:e.clientHeight,n=7799039;this.volumen1=new y(.6*t,32,n,2),this.volumen1.position.x=-this.canvas.clientWidth/2,this.volumen1.position.y=-this.canvas.clientHeight/2,this.scene.add(this.volumen1),this.volumen2=new y(.6*t,32,n,2),this.volumen2.position.x=this.canvas.clientWidth/2,this.volumen2.position.y=this.canvas.clientHeight/2,this.scene.add(this.volumen2);const i=(new o.dpR).load(x);i.minFilter=o.wem,this.material=new o.FIo({vertexShader:g,fragmentShader:f,uniforms:{u_texture:{value:i},u_time:{value:0},u_bajo:{value:0},u_medio:{value:0}}}),this.plano=new o._12(this.width,this.height),this.fondo=new o.Kj0(this.plano,this.material),this.fondo.position.z=-1,this.scene.add(this.fondo),this.incremento={z:.003},this.pico=!0}animar(e,t){const n=o.M8C.mapLinear(e[1],0,255,10,15),i=o.M8C.mapLinear(e[15],0,255,0,.1),r=o.M8C.clamp(e[15],0,1),a=o.M8C.mapLinear(Math.sin(t*r*.3),-1,1,.3,-.3);this.volumen1.circulo_int.children.forEach(((e,t,n)=>{const i=t/(n.length-1);e.scale.set(1+a*i,1+a*i,1)})),this.volumen2.circulo_int.children.forEach(((e,t,n)=>{n.length;e.scale.set(1+a,1+a,1)})),this.material.uniforms.u_time.value=t,this.material.uniforms.u_bajo.value=n,this.material.uniforms.u_medio.value=i,this.volumen1.rotation.z+=this.incremento.z,this.volumen2.rotation.z-=this.incremento.z,this.render()}}class b extends w{constructor(e){super(e);const t=window.innerWidth<window.innerHeight?window.innerWidth:window.innerHeight,n=11184810;this.volumen1=new y(.6*t,32,n,2),this.volumen2=new y(.6*t,32,n,2),this.volumen1.position.x=.5*this.canvas.clientWidth,this.volumen1.position.y=-.3*this.canvas.clientHeight,this.volumen2.position.x=-.5*this.canvas.clientWidth,this.volumen2.position.y=.3*this.canvas.clientHeight,this.scene.add(this.volumen1),this.scene.add(this.volumen2)}animar(e){this.volumen1.rotation.z=e,this.volumen2.rotation.z=e,this.render()}}class P extends w{constructor(e,t,n){super(e);const i=window.innerWidth<window.innerHeight?window.innerWidth:window.innerHeight;this.volumen=new y(.5*i,32,7799039,2),this.volumen.position.x=this.canvas.clientWidth*t,this.volumen.position.y=this.canvas.clientHeight*n,this.scene.add(this.volumen),this.incremento={z:0},this.pico=!0}animar(e){this.volumen.rotation.z=e,this.render()}}class S extends w{constructor(e){super(e),this.target=new o.FM8,this.mouse=new o.FM8,this.canvas=e}actualizar(e,t){this.mouse.set(e,t)}mirar(){const e=this.canvas.getBoundingClientRect(),t=new o.FM8((e.left+e.right)/2,(e.top+e.bottom)/2);this.target.lerp(this.mouse,.07);const n=.21-Math.atan2(this.target.x-t.x,this.target.y-t.y);this.canvas.style.transform=`rotateZ(${n}rad)`}}let q,L,M;function E(e,t){const n=e.querySelectorAll(".barra"),i=e.querySelector(".img");M=new S(i),window.addEventListener("mousemove",(function(e){M.actualizar(e.pageX,e.pageY)}),!1),function e(i){const r=t.getFrequencyData();M.mirar(),function(e,t){const n=o.M8C.mapLinear(o.M8C.smoothstep(e[1],200,255),0,1,0,10),i=o.M8C.mapLinear(o.M8C.smoothstep(e[10],50,200),0,1,0,10),r=o.M8C.mapLinear(o.M8C.smoothstep(e[20],0,100),0,1,0,10);t[0].style.height=`${n+4}px`,t[1].style.height=`${i+4}px`,t[2].style.height=`${r+4}px`}(r,n),requestAnimationFrame(e)}()}function k(e,t=".internal"){const n=e.querySelector(t),i=new b(n);!function e(t){i.animar(1e-4*t),requestAnimationFrame(e)}()}var O=n(7842);var Z=n(8686),A=n(9255),C=n(5647);c.ZP.registerPlugin(l.i);let I=new o.SJI,D=new o.BbS(I);(new o.mTL).load(O,(function(e){D.setBuffer(e),D.setLoop(!0),D.setVolume(.9)}));const F=new o.kqm(D,256);function T(e){D.isPlaying?(D.pause(),e.currentTarget.querySelector("h6").innerText="Sound OFF"):(e.currentTarget.querySelector("h6").innerText="Sound ON",D.play())}let z,R;const H=e=>document.querySelector(e),B=e=>document.querySelectorAll(e);let j=B(".portfolio__categories a"),W=H(".portfolio__image--l"),N=H(".portfolio__image--l .image_inside");const V=H(".loader"),$=H(".loader .inner"),Y=H(".loader .progress"),G=H(".loader__mask");!function(){c.ZP.set(V,{autoAlpha:1}),c.ZP.set($,{scaleY:.005,transformOrigin:"bottom"});const e=c.ZP.to(Y,{paused:!0,scaleX:0,ease:"none",transformOrigin:"right"});let t,n=0;const i=H("#main"),r=s()(i);function o(n){c.ZP.to(e,{progress:n/t,duration:.3,ease:"power1.out"})}t=r.images.length,o(0),r.on("progress",(function(){n++,o(n)})),r.on("done",(function(){c.ZP.set(Y,{autoAlpha:0,onComplete:X})}))}();function X(){H("body").classList.remove("is-loading"),r().hooks.before((()=>{H("html").classList.add("is-transitioning")})),r().hooks.after((()=>{H("html").classList.remove("is-transitioning")})),r().hooks.beforeEnter((()=>{window.scrollTo(0,0)})),r().init({views:[{namespace:"index",afterEnter({next:e}){K(e.container),U(e.container),J(e.container),ie(e.container),e.container,new m.Z(".home",{type:"carousel",autoplay:4e3,focusAt:"center",startAt:0,perView:2,breakpoints:{1200:{perView:2,focusAt:1},800:{perView:1}}}).mount(),ne(e.container)}},{namespace:"online-gallery",beforeEnter({next:e,current:t}){K(e.container),U(e.container),J(e.container),ie(e.container);window.matchMedia("(min-width: 768px)").matches&&(e=>{const t=e.querySelectorAll(".box.image"),n=e.ownerDocument.createElement("img");n.id="activity-image-container",e.querySelector("#image-container").prepend(n),t.length&&t.forEach((t=>{t.addEventListener("mouseenter",(t=>{const i=t.currentTarget,r=i.dataset.img,o=i.dataset.text;n.src=r,e.querySelector("#image-text").innerHTML=o})),t.addEventListener("mouseleave",(()=>{e.querySelector("#activity-image-container").src="",e.querySelector("#image-text").innerHTML=""}))}))})(e.container),(0,A.pl)(e.container),function(e,t){const n=e.querySelector(".welcome"),i=new _(n),r=e.querySelector(".canvas_artistas");q=new P(r,-.5,-.3);const o=e.querySelector(".canvas_fundaciones");L=new P(o,-.5,.3);const a=e.querySelector(".news"),s=new b(a);!function e(n){const r=t.getFrequencyData();i.animar(r,.004*n),q.animar(3e-4*n),L.animar(3e-4*n),s.animar(1e-4*n),requestAnimationFrame(e)}()}(e.container,F),null===t.container&&(E(document,F),document.querySelector("#sound").addEventListener("click",T,!1)),document.querySelector(".canvas").className="canvas img"}},{namespace:"artists",beforeEnter({next:e,current:t}){K(e.container),U(e.container),J(e.container),(0,A.uL)(e.container),ie(e.container),ne(e.container),(0,h.NZ)(e.container),(0,d.p)(e.container),function(e,t){const n=e.querySelector(".artist"),i=new P(n,.5,.3);!function e(n){t.getFrequencyData(),i.animar(3e-4*n),requestAnimationFrame(e)}()}(e.container,F),null===t.container&&(E(document,F),document.querySelector("#sound").addEventListener("click",T,!1)),document.querySelector(".canvas").className="canvas img-2"}},{namespace:"art-work",beforeEnter({next:e,current:t}){K(e.container),U(e.container),J(e.container),(0,A.uL)(e.container),ie(e.container),ne(e.container),(0,Z.Z)(e.container),(0,Z.O)(e.container),re(e.container),k(e.container),k(e.container,".internal-2"),console.log(t.container),null===t.container&&(E(document,F),document.querySelector("#sound").addEventListener("click",T,!1)),document.querySelector(".canvas").className="canvas img"}},{namespace:"non-profit",beforeEnter({next:e,current:t}){K(e.container),ie(e.container),(0,C.Z)(e.container),function(e){const t=e.querySelector(".canvas-left"),n=new P(t,.5,.5),i=e.querySelector(".canvas-right"),r=new P(i,-.5,-.5);console.log(r),function e(t){n.animar(3e-4*t),r.animar(3e-4*t),requestAnimationFrame(e)}()}(e.container),null===t.container&&(E(document,F),document.querySelector("#sound").addEventListener("click",T,!1)),document.querySelector(".canvas").className="canvas img-2"}},{namespace:"activities-internal",beforeEnter({next:e,current:t}){K(e.container),U(e.container),J(e.container),(0,A.uL)(e.container),ie(e.container),ne(e.container),null===t.container&&(E(document,F),document.querySelector("#sound").addEventListener("click",T,!1))}},{namespace:"activities-all",beforeEnter({next:e,current:t}){K(e.container),U(e.container),J(e.container),(0,A.uL)(e.container),ie(e.container),ne(e.container),(0,h.NZ)(e.container),k(e.container),null===t.container&&(E(document,F),document.querySelector("#sound").addEventListener("click",T,!1))}},{namespace:"faxxi",beforeEnter({next:e}){(0,h.gT)(e.container),K(e.container),U(e.container),J(e.container),ne(e.container),e.container,c.ZP.utils.toArray(".with-parallax2").forEach((e=>{const t=e.querySelector(".bg");c.ZP.to(t,{yPercent:40,ease:"none",scrollTrigger:{trigger:".with-parallax2",start:"top bottom",scrub:!0}})})),ie(e.container),re(e.container)}},{namespace:"anteriores",beforeEnter({next:e}){var t;(0,h.gT)(e.container),K(e.container),U(e.container),J(e.container),t=e.container,j=t.querySelectorAll(".portfolio__categories a"),N=t.querySelectorAll(".portfolio__image--l .image_inside"),W=t.querySelector(".portfolio__image--l"),j.forEach((e=>{e.addEventListener("mouseenter",Q),e.addEventListener("mouseleave",Q),e.addEventListener("mousemove",ee)})),ie(e.container)}},{namespace:"contacto",beforeEnter({next:e}){(0,h.gT)(e.container),K(e.container),U(e.container),J(e.container),ie(e.container)}},{namespace:"resultados",beforeEnter({next:e}){K(e.container),U(e.container),J(e.container),ie(e.container)}},{namespace:"interna",beforeEnter({next:e}){(0,h.gT)(e.container),K(e.container),U(e.container),J(e.container),ie(e.container)}},{namespace:"prensa",beforeEnter({next:e}){(0,h.gT)(e.container),K(e.container),U(e.container),J(e.container),(0,A.uL)(e.container),ie(e.container)}}],transitions:[{name:"onliGallery-artistas",from:{namespace:["online-gallery"]},to:{namespace:["artists"]},leave:({current:e})=>(e=>{z.scrollTo(0,window.innerHeight,2e3),(0,A.Li)(e);const t=e.querySelector("#left"),n=e.querySelector("#right"),i=t.querySelector("a"),r=q.volumen,o=c.ZP.timeline({defaults:{duration:2,ease:"power1.inOut"}});return o.to(t,{flex:"0 1 100%",padding:0}),o.to(n,{flex:"0 1 0%",padding:0},0),o.to("#right",{padding:0},0),o.to(i,{x:"-50%"},.5),o.to(r.position,{x:.5*window.innerWidth,y:.3*window.innerHeight},0),o})(e.container),enter:({next:e})=>(e=>{const t=e.querySelector("main"),n=c.ZP.timeline({defaults:{duration:1,ease:"power1.inOut"}});return n.from(t,{autoAlpha:0,y:500},0),n.from("header",{autoAlpha:0,y:100},0),n})(e.container)},{name:"onliGallery-fundaciones",from:{namespace:["online-gallery"]},to:{namespace:["non-profit"]},leave:({current:e})=>(e=>{z.scrollTo(0,window.innerHeight,2e3),(0,A.Li)(e);const t=e.querySelector("#left"),n=e.querySelector("#right"),i=t.querySelector("a"),r=L.volumen,o=c.ZP.timeline({defaults:{duration:2,ease:"power1.inOut"}});return o.to(t,{flex:"0 1 0%",padding:0}),o.to(n,{flex:"0 1 100%",padding:0},0),o.to("#left",{padding:0},0),o.to(i,{x:"-50%"},.5),o.to(r.position,{x:.25*window.innerWidth,y:.5*window.innerHeight},0),o})(e.container),enter:({next:e})=>(e=>{const t=e.querySelector("main"),n=c.ZP.timeline({defaults:{duration:1,ease:"power1.inOut"}});return n.from(t,{autoAlpha:0},0),n})(e.container)},{name:"general",once(){!function(){const e=c.ZP.timeline({id:"tlLoaderIn",defaults:{duration:1.1,ease:"power2.out"}}),t=H(".loader__image img"),n=H(".loader__image--mask"),i=H(".loader__title--mask:nth-child(1) span"),r=H(".loader__title--mask:nth-child(2) span"),o=H(".loader__title--mask:nth-child(3) span"),a=B(".loader__title--mask"),s=H(".loader__content");e.set(s,{autoAlpha:1}).to($,{scaleY:1,transformOrigin:"bottom",ease:"power1.inOut"}).addLabel("revealImage").from(n,{yPercent:100},"revealImage-=0.6").from(t,{yPercent:-80},"revealImage-=0.6").from([i,r,o],{yPercent:100,stagger:.1},"revealImage-=0.4");const l=c.ZP.timeline({id:"tlLoaderOut",defaults:{duration:1.2,ease:"power2.inOut"},delay:1});l.to(a,{yPercent:-500,stagger:.2},0).to([V,s],{yPercent:-100},.2).from("#main",{y:150},.2);c.ZP.timeline().add(e).add(l)}()},async leave({current:e}){await function(){const e=c.ZP.timeline({defaults:{duration:.8,ease:"power1.inOut"}});return e.set($,{autoAlpha:0}).fromTo(V,{yPercent:-100},{yPercent:0}).fromTo(G,{yPercent:80},{yPercent:0},0),e}()},enter({next:e}){!function(){const e=c.ZP.timeline({defaults:{duration:.8,ease:"power1.inOut"}});e.to(V,{yPercent:100}).to(G,{yPercent:-80},0)}()}}]})}function K(e){z=u.Z.init(e.querySelector("#viewport"),{damping:.07}),z.track.xAxis.element.remove(),l.i.scrollerProxy(e.ownerDocument.body,{scrollTop(e){return arguments.length&&(z.scrollTop=e),z.scrollTop}}),z.addListener(l.i.update),window.bodyScrollBar=z}function U(e){const t=c.ZP.utils.toArray(e.querySelectorAll(".main-nav a")),n=c.ZP.utils.toArray(e.querySelectorAll(".main-nav a")).reverse(),i=c.ZP.utils.toArray(e.querySelectorAll(".navigation "));function r(e){const i=1===e,r=i?t:n;return c.ZP.to(r,{duration:.5,stagger:.05,autoAlpha:()=>i?0:1,y:()=>i?20:0,ease:"power4.out"})}t.forEach((e=>{e.addEventListener("mouseleave",(()=>{e.classList.add("animate-out")})),e.ontransitionend=function(){e.classList.remove("animate-out")}})),i.forEach((e=>{e.addEventListener("mouseleave",(()=>{e.classList.add("animate-out")})),e.ontransitionend=function(){e.classList.remove("animate-out")}})),R=l.i.create({trigger:e.querySelector("#main"),start:"top top",end:"100000",toggleClass:{targets:"body",className:"has-scrolled"},onEnter:({direction:e})=>r(e),onLeaveBack:({direction:e})=>r(e)}),R.scroll(0)}function J(){l.i.create({trigger:"article",start:"top top",end:"bottom bottom-=100",toggleClass:{targets:"body",className:"has-scrolled-home"}})}function Q(e){if("mouseenter"===e.type){const{color:t,imagelarge:n}=e.target.dataset,i=Array.from(j).filter((t=>t!==e.target));c.ZP.timeline({onStart:()=>(0,h.updateBodyColor)(t)}).set(N,{backgroundImage:`url(${n})`}).to(W,{autoAlpha:1}).to(i,{color:"#000",autoAlpha:.2},0).to(e.target,{color:"#000",autoAlpha:1},0)}else if("mouseleave"===e.type){c.ZP.timeline({onStart:()=>(0,h.updateBodyColor)("#ACB7AE")}).to(W,{autoAlpha:0}).to(j,{color:"#000000",autoAlpha:1},0)}}function ee(e){const{clientY:t}=e;c.ZP.to(W,{duration:1.2,y:te(t)/3,ease:"power3.out"})}function te(e){return-(H(".portfolio__categories").clientHeight-e)}function ne(){c.ZP.utils.toArray(".with-parallax").forEach((e=>{const t=e.querySelector(".bg");c.ZP.to(t,{yPercent:40,ease:"none",scrollTrigger:{trigger:".with-parallax",start:"top bottom",scrub:!0}})}))}function ie(e){const t=e.querySelector(".burger");t.addEventListener("click",(function(){this.classList.toggle("animating"),this.classList.toggle("active");const e=c.ZP.timeline({onComplete:()=>t.classList.toggle("animating")}),n=[".menu-overlay:not(#art-work-overlay)",".menu-overlay:not(#art-work-overlay) > .navBefore",".menu-overlay:not(#art-work-overlay) > .nav",".menu-overlay:not(#art-work-overlay) .navigation, .menu-overlay:not(#art-work-overlay) .link, .menu-overlay:not(#art-work-overlay) .social, .menu-overlay:not(#art-work-overlay) .navigation-2, .menu-overlay:not(#art-work-overlay) #logo-overlay, .menu-overlay:not(#art-work-overlay) #circle-overlay"];this.classList.contains("active")?(document.querySelector(".canvas")&&document.querySelector(".canvas").classList.add("img-2"),e.to(n[0],{duration:.1,display:"flex",ease:"expo.in"}).to(n[1],{duration:.5,marginLeft:"0",ease:"expo.in"},0).to(n[2],{duration:.8,marginLeft:"0",delay:.3,ease:"expo.in"},0).to(n[3],{duration:1,opacity:"1",delay:.5,ease:"expo.in"},0)):(document.querySelector(".canvas").classList.contains("img")&&document.querySelector(".canvas").classList.remove("img-2"),e.to(n[3],{duration:1,delay:.2,opacity:"0",ease:"expo.in"}).to(n[2],{duration:1,marginLeft:"100%",delay:.3,ease:"expo.in"},0).to(n[1],{duration:1,marginLeft:"100%",delay:.5,ease:"expo.in"},0).to(n[0],{duration:1,display:"none",delay:1,ease:"expo.in"},0))}))}function re(){new m.Z(".testimonial",{type:"carousel",startAt:0,perView:1}).mount()}},2986:(e,t,n)=>{"use strict";n.d(t,{gT:()=>h,uZ:()=>m,FE:()=>d,NZ:()=>s,t7:()=>u,UI:()=>l});var i=n(3391),r=n.n(i);const o=[{href:"index.html",text:"Inicio"},{href:"faxxi.html",text:"Que es Faxxi"},{href:"online_gallery.html",text:"Galeria Online",dataset:{"data-barba-prevent":"all"}},{href:"anteriores.html",text:"Versiones Anteriores"},{href:"prensa.html",text:"Prensa"},{href:"contacto.html",text:"Contacto"}];const a=class{constructor(e){this.dom=e,this.buildMenu()}getMenuItem(e){const{text:t,href:n}=e,i=document.createElement("li"),r=document.createElement("a");return r.text=t,r.href=n,i.appendChild(r),i}buildMenu(){o.forEach((e=>{const t=this.getMenuItem(e);this.dom.appendChild(t)}))}},s=(e,t=".grid",n="fitRows")=>{const i=e.querySelector(t),o=e.querySelectorAll(".btnFilter"),a=new(r())(i,{itemSelector:".element-item",layoutMode:n});c(o,a)},c=(e,t)=>{for(const n of e)n.addEventListener("click",(function(){[...e].forEach((e=>{e.classList.remove("is-checked")})),this.classList.add("is-checked"),t.arrange({filter:this.dataset.filter})}))},l=(e,t,n,i,r)=>(e-t)*(r-i)/(n-t)+i,u=(e,t,n)=>(1-n)*e+n*t,m=(e,t,n)=>e<=t?t:e>=n?n:e,h=e=>{new a(e.querySelector("nav.main-nav > ul")),new a(e.querySelector("ul.navigation"))},d=e=>e.clientHeight},9582:(e,t,n)=>{"use strict";n.d(t,{p:()=>u});var i=n(6358),r=n(2986);let o={x:0,y:0},a=o,s={x:a.x-o.x,y:a.y-o.y};window.addEventListener("mousemove",(e=>{o.x=e.clientX,o.y=e.clientY}));class c{constructor(e,t,n){this.document=n.ownerDocument,this.DOM={el:e},this.animatableProperties=t,this.DOM.textInner=this.DOM.el.querySelector(".menu__item-textinner"),this.createLayout(),this.initEvents()}createLayout(){this.DOM.reveal=this.document.createElement("div"),this.DOM.reveal.className="hover-reveal",this.DOM.revealInner=this.document.createElement("div"),this.DOM.revealInner.className="hover-reveal__inner",this.DOM.revealImage=this.document.createElement("div"),this.DOM.revealImage.className="hover-reveal__img",this.DOM.revealImage.style.backgroundImage="url('images/04_gal.jpg')",this.DOM.revealInner.appendChild(this.DOM.revealImage),this.DOM.reveal.appendChild(this.DOM.revealInner),this.DOM.el.appendChild(this.DOM.reveal)}calcBounds(){this.bounds={el:this.DOM.el.getBoundingClientRect(),reveal:this.DOM.reveal.getBoundingClientRect()}}initEvents(){this.mouseenterFn=e=>{this.showImage(),this.firstRAFCycle=!0,this.loopRender()},this.mouseleaveFn=()=>{this.stopRendering(),this.hideImage()},this.DOM.el.addEventListener("mouseenter",this.mouseenterFn),this.DOM.el.addEventListener("mouseleave",this.mouseleaveFn)}showImage(){i.ZP.killTweensOf(this.DOM.revealInner),i.ZP.killTweensOf(this.DOM.revealImage),this.tl=i.ZP.timeline({onStart:()=>{this.DOM.reveal.style.opacity=1,i.ZP.set(this.DOM.el,{zIndex:1})}}).to(this.DOM.revealInner,.2,{ease:"Sine.easeOut",startAt:{x:s.x<0?"-100%":"100%"},x:"0%"}).to(this.DOM.revealImage,.2,{ease:"Sine.easeOut",startAt:{x:s.x<0?"100%":"-100%"},x:"0%"},0)}hideImage(){i.ZP.killTweensOf(this.DOM.revealInner),i.ZP.killTweensOf(this.DOM.revealImage),this.tl=i.ZP.timeline({onStart:()=>{i.ZP.set(this.DOM.el,{zIndex:1})},onComplete:()=>{i.ZP.set(this.DOM.reveal,{opacity:0})}}).to(this.DOM.revealInner,.2,{ease:"Sine.easeOut",x:s.x<0?"100%":"-100%"}).to(this.DOM.revealImage,.2,{ease:"Sine.easeOut",x:s.x<0?"-100%":"100%"},0)}loopRender(){this.requestId||(this.requestId=requestAnimationFrame((()=>this.render())))}stopRendering(){this.requestId&&(window.cancelAnimationFrame(this.requestId),this.requestId=void 0)}render(){this.requestId=void 0,this.firstRAFCycle&&this.calcBounds();const e=(0,r.uZ)(Math.abs(a.x-o.x),0,100);s={x:a.x-o.x,y:a.y-o.y},a={x:o.x,y:o.y},this.animatableProperties.tx.current=Math.abs(o.x-this.bounds.el.left)-this.bounds.reveal.width/2,this.animatableProperties.ty.current=Math.abs(o.y-this.bounds.el.top)-this.bounds.reveal.height/2,this.animatableProperties.rotation.current=this.firstRAFCycle?0:(0,r.UI)(e,0,100,0,s.x<0?60:-60),this.animatableProperties.brightness.current=this.firstRAFCycle?1:(0,r.UI)(e,0,100,1,4),this.animatableProperties.tx.previous=this.firstRAFCycle?this.animatableProperties.tx.current:(0,r.t7)(this.animatableProperties.tx.previous,this.animatableProperties.tx.current,this.animatableProperties.tx.amt),this.animatableProperties.ty.previous=this.firstRAFCycle?this.animatableProperties.ty.current:(0,r.t7)(this.animatableProperties.ty.previous,this.animatableProperties.ty.current,this.animatableProperties.ty.amt),this.animatableProperties.rotation.previous=this.firstRAFCycle?this.animatableProperties.rotation.current:(0,r.t7)(this.animatableProperties.rotation.previous,this.animatableProperties.rotation.current,this.animatableProperties.rotation.amt),this.animatableProperties.brightness.previous=this.firstRAFCycle?this.animatableProperties.brightness.current:(0,r.t7)(this.animatableProperties.brightness.previous,this.animatableProperties.brightness.current,this.animatableProperties.brightness.amt),i.ZP.set(this.DOM.reveal,{x:this.animatableProperties.tx.previous,y:this.animatableProperties.ty.previous,rotation:this.animatableProperties.rotation.previous,filter:`brightness(${this.animatableProperties.brightness.previous})`}),this.firstRAFCycle=!1,this.loopRender()}}class l{constructor(e,t,n){this.DOM={el:e},this.DOM.menuItems=this.DOM.el.querySelectorAll(".menu__item"),this.animatableProperties={tx:{previous:0,current:0,amt:.08},ty:{previous:0,current:0,amt:.08},rotation:{previous:0,current:0,amt:.08},brightness:{previous:1,current:1,amt:.08}},this.menuItems=[],[...this.DOM.menuItems].forEach(((e,t)=>this.menuItems.push(new c(e,this.animatableProperties,n)))),this.showMenuItems()}showMenuItems(){i.ZP.to(this.menuItems.map((e=>e.DOM.textInner)),{duration:1.2,ease:"Expo.easeOut",startAt:{y:"100%"},y:0,delay:e=>.06*e})}}const u=e=>{window.matchMedia("(min-width: 768px)").matches&&((e,t)=>{const n=t.querySelector(".menu");new l(n,e,t)})([],e)}},8686:(e,t,n)=>{"use strict";n.d(t,{Z:()=>h,O:()=>m});var i=n(6358),r=n(9843),o=n(2869),a=n(1997),s=n(627),c=n(2523);class l{constructor(e,t="#lightgallery",n=".gallery-item",i=!1,r=!0,a=!1,c=500){this.showMaximizeIcon=!0,this.showZoomInOutIcons=!0,this.scale=100,this.speed=c,this.selector=n,this.loop=a,this.controls=r,this.enableDrag=i,this.galleryContainer=e.querySelector(t),this.plugins=[o.Z,s.Z]}init(){this.verifyAttributes(),(0,r.Z)(this.galleryContainer,this)}enableVideoPlugin(){this.plugins.push(c.Z)}verifyAttributes(){this.hasAttribute("navigate")&&(this.plugins=[...this.plugins,a.Z]),this.enableDrag=!this.hasAttribute("single")}hasAttribute(e){return Object.keys(this.galleryContainer.dataset).includes(e)}}const u=e=>t=>{e.forEach((e=>{e.classList.remove("hidden"),e.setAttribute("style","top :"+(t.pageY-225)+"px; left: "+(t.pageX-200)+"px")}))},m=e=>{const t=new l(e,"#lightgallery",".gallery-item",!1,!1),n=new l(e,"#carousel-lightgallery",".glide__slide",!1);t.init(),n.init()},h=e=>{const t=e.querySelector("#btnViewTransition"),n=e.querySelector("#btnCloseOverlay"),r=e.querySelector(".art-work.info"),o=[".menu-overlay#art-work-overlay",".menu-overlay#art-work-overlay > .navBefore",".menu-overlay#art-work-overlay > .nav",".menu-overlay#art-work-overlay .navigation, .menu-overlay#art-work-overlay .link, .menu-overlay#art-work-overlay .social","#art-work-overlay .img",".menu__text.cerrar"];let a=[];for(let t=1;t<6;t++)a=[...a,e.querySelector(`#img-stair-${t}`)];n.addEventListener("click",(function(){i.ZP.timeline({onComplete:()=>{e.querySelector("#art-work-overlay").style.overflow="inherit",e.ownerDocument.removeEventListener("mousemove",u(a))}}).to(o[3],{duration:1,delay:.2,opacity:"0",ease:"expo.in"}).to(r,{opacity:0,duration:.5}).to(o[2],{duration:1,marginLeft:"-100%",delay:.3,ease:"expo.in"},0).to(o[1],{duration:1,marginLeft:"-100%",delay:.5,ease:"expo.in"},0).to(o[0],{duration:1,display:"none",delay:1,ease:"expo.in"},0).to(o[4],{duration:.4,opacity:0,delay:0,ease:"expo.in"},0).to(this,{duration:.5,opacity:0,delay:0,ease:"expo.in"},0)})),t.addEventListener("click",(function(t){t.preventDefault(),a.forEach((e=>e.classList.add("hidden")));i.ZP.timeline({onComplete:()=>{i.ZP.to(o[4],{duration:.4,opacity:1}),i.ZP.to(r,{opacity:1,duration:.5}),((e,t)=>{e.querySelector("#art-work-overlay").style.overflow="hidden",e.ownerDocument.addEventListener("mousemove",u(t))})(e,a)}}).to(o[0],{duration:.1,display:"flex",ease:"expo.in"}).to(o[1],{duration:.5,marginLeft:"0",ease:"expo.in"},0).to(o[2],{duration:.8,marginLeft:"0",delay:.3,ease:"expo.in"},0).to(o[3],{duration:1,opacity:"1",delay:.5,ease:"expo.in"},0).to(o[4],{duration:.3,opacity:1,delay:1,ease:"expo.in"},0).to(n,{duration:.5,opacity:1,delay:1,ease:"expo.in"},0)}))}},5647:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});const i=e=>{if(!window.matchMedia("(min-width: 768px)").matches)return!1;const t=e.querySelector(".split.left"),n=e.querySelector(".split.right"),i=e.querySelector("#main .content");t.addEventListener("mouseenter",(e=>{i.classList.add("hover-left")})),t.addEventListener("mouseleave",(e=>{i.classList.remove("hover-left")})),n.addEventListener("mouseenter",(e=>{i.classList.add("hover-right")})),n.addEventListener("mouseleave",(e=>{i.classList.remove("hover-right")}))}},9255:(e,t,n)=>{"use strict";n.d(t,{uL:()=>s,pl:()=>l,Li:()=>a});var i=n(6358),r=n(2986);const o=e=>{document.documentElement.style.setProperty("--bcg-fill-color",e)};function a(e){e.querySelectorAll(".rg__column").forEach((e=>{e.removeEventListener("mouseleave",c)}))}const s=e=>{e.querySelectorAll(".rg__column").forEach((e=>{e.imageBlock=e.querySelector(".rg__image"),e.image=e.querySelector(".rg__image img"),e.mask=e.querySelector(".rg__image--mask"),e.text=e.querySelector(".rg__text"),e.textCopy=e.querySelector(".rg__text--copy"),e.textMask=e.querySelector(".rg__text--mask"),e.textP=e.querySelector(".rg__text--copy p"),i.ZP.set([e.imageBlock,e.textMask],{yPercent:-100}),i.ZP.set([e.mask,e.textP],{yPercent:100}),i.ZP.set(e.image,{scale:1.2}),e.addEventListener("mouseenter",c),e.addEventListener("mouseleave",c)}))};function c(e){const{imageBlock:t,mask:n,text:a,textCopy:s,textMask:c,textP:l,dataset:u}=e.target,{color:m}=u;let h=i.ZP.timeline({defaults:{duration:1.8,ease:"power4.out"}});return"mouseenter"===e.type?h.to([n,t,c,l],{yPercent:0,onStart:()=>o(m)}).to(a,{y:()=>-(0,r.FE)(s)/2},0):"mouseleave"===e.type&&h.to([n,l],{yPercent:100}).to([t,c],{yPercent:-100},0).to(a,{y:0},0),h}const l=e=>{const t=window.matchMedia("(min-width: 768px)");t.matches&&s(e),t.addEventListener("change",(t=>{if(t.matches)s(e);else{const t=e.querySelectorAll(".rg__column"),n=i.ZP.timeline();t.forEach((e=>{e.removeEventListener("mouseenter",c),e.removeEventListener("mouseleave",c);const{color:t}=e.dataset,i=e.querySelector(".rg__image"),a=e.querySelector(".rg__image--mask"),s=e.querySelector(".rg__text"),l=e.querySelector(".rg__text--copy"),u=e.querySelector(".rg__text--mask"),m=e.querySelector(".rg__text--copy p");n.to([a,i,u,m],{yPercent:0,onStart:()=>o(t)}).to(s,{y:()=>-(0,r.FE)(l)/2},0)}))}}))}},7842:(e,t,n)=>{"use strict";e.exports=n.p+"static/2fe0deac38cb2af6d9e3.mp3"},2074:(e,t,n)=>{"use strict";e.exports=n.p+"images/cc69f96bbde98abd98a5.jpg"},7059:e=>{"use strict";e.exports="#ifdef GL_ES\n  precision mediump float;\n#endif\n\nvarying vec2 vTexCoord;\nuniform float u_time;\n\nuniform sampler2D u_texture;\nuniform float u_bajo;\nuniform float u_medio;\n\nmat2 scale(vec2 _scale){\n    return mat2(_scale.x,0.0,\n                0.0,_scale.y);\n}\n\nvoid main() {\n\n\n  vec2 uv = vTexCoord;\n  uv -= vec2(0.5);\n  uv = scale(vec2(0.9)) * uv;\n  uv += vec2(0.5);\n\n  float wave_x = sin(uv.x * u_bajo + u_time) * u_medio;\n  float wave_y = sin(uv.y * u_bajo / 2.0) * u_medio;\n  vec2 d = vec2(wave_x, wave_y);\n\n  vec4 image = texture2D(u_texture, uv + d);\n\n  gl_FragColor = image;}"},6835:e=>{"use strict";e.exports="uniform mat4 projectionMatrix;\nuniform mat4 viewMatrix;\nuniform mat4 modelMatrix;\n\nattribute vec3 position;\nattribute vec2 uv;\n\nvarying vec2 vTexCoord;\n\nvoid main()\n{\n    vTexCoord = uv;\n    vec4 modelPosition = modelMatrix * vec4(position, 1.0);\n    vec4 viewPosition = viewMatrix * modelPosition;\n    vec4 projectedPosition = projectionMatrix * viewPosition;\n\n    gl_Position = projectedPosition;\n}"},1043:e=>{"use strict";e.exports="uniform float thickness;\n\nvarying vec3 vCenter;\n\nvoid main() {\n\n  vec3 afwidth = fwidth( vCenter.xyz );\n\n  vec3 edge3 = smoothstep( ( thickness - 1.0 ) * afwidth, thickness * afwidth, vCenter.xyz );\n\n  float edge = 1.0 - min( min( edge3.x, edge3.y ), edge3.z );\n\n  gl_FragColor.rgb = gl_FrontFacing ? vec3( 0.5, 0.0, 1.0 ) : vec3( 0.4, 0.4, 0.5 );\n  gl_FragColor.a = edge;\n\n}"},9144:e=>{"use strict";e.exports="attribute vec3 center;\nvarying vec3 vCenter;\n\nvoid main() {\n\n    vCenter = center;\n\n    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n}"}}]);