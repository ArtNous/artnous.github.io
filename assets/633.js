(self.webpackChunkbarba_starter_template=self.webpackChunkbarba_starter_template||[]).push([[633],{6633:(e,t,n)=>{"use strict";var i=n(9069),o=n.n(i),r=n(2212),a=n(7564),s=n.n(a),l=n(6358),c=n(7082),u=n(6107),m=n(1122),h=n(2986),d=n(9582);n(9144),n(1043);class v extends r.Tme{constructor(e,t,n,i,o){super(),this.material=new r.vBJ({color:i});for(let i=0;i<2+n;i++){const a=e+(t-e)*(i/(1+n)),s=new r.o8S(a,a+o,64);s.translate(0,e-a-e,0);const l=new r.Kj0(s,this.material);this.add(l)}}}class p extends r.Tme{constructor(e,t,n,i){super(),this.nulo_int=new r.Tme,this.circulo_ext=new v(e,2*e/3,t,n,i),this.circulo_int=new v(2*e/3,e/3,t,n,i),this.add(this.nulo_int),this.add(this.circulo_ext),this.nulo_int.position.y=e/3,this.circulo_ext.position.y=e,this.circulo_int.position.y=2*e/3,this.nulo_int.rotation.z=Math.PI,this.nulo_int.add(this.circulo_int)}}const y=p;var g=n(6835),f=n(2065),x=n(2074);let w,_,b,P;w=window.innerWidth<1e3?1:2;class S{constructor(e){this.canvas=e,this.renderer=new r.CP7({canvas:this.canvas,alpha:!0}),this.width=this.canvas.clientWidth,this.height=this.canvas.clientHeight,this.camara=new r.iKG(this.width/-2,this.width/2,this.height/2,this.height/-2,-1e3,1e3),this.scene=new r.xsS,this.renderer.setSize(this.width,this.height,!1),this.camara.aspect=this.width/this.height,this.camara.updateProjectionMatrix(),this.resizeRendererToDisplaySize()}resizeRendererToDisplaySize(){const e=this.canvas.clientWidth,t=this.canvas.clientHeight;(this.canvas.width!==e||this.canvas.height!==t)&&(this.renderer.setSize(e,t,!1),this.camara.left=e/-2,this.camara.right=e/2,this.camara.top=t/2,this.camara.bottom=t/-2,this.camara.updateProjectionMatrix())}render(){this.resizeRendererToDisplaySize(),this.renderer.render(this.scene,this.camara)}}class q extends S{constructor(e){super(e);const t=this.width<this.height?this.width:this.height,n=7799039;this.volumen1=new y(.6*t,32,n,w),this.volumen1.position.x=-this.width/2,this.volumen1.position.y=-this.height/2,this.scene.add(this.volumen1),this.volumen2=new y(.6*t,32,n,w),this.volumen2.position.x=this.width/2,this.volumen2.position.y=this.height/2,this.scene.add(this.volumen2);const i=(new r.dpR).load(x);i.minFilter=r.wem,this.material=new r.FIo({vertexShader:g,fragmentShader:f,uniforms:{u_resolution:{value:new r.FM8},u_tResolution:{value:new r.FM8},u_texture:{value:i},u_time:{value:0},u_bass:{value:0},u_tremble:{value:0},u_mid:{value:0}}}),this.plano=new r._12(this.width,this.height),this.fondo=new r.Kj0(this.plano,this.material),this.fondo.position.z=-1,this.scene.add(this.fondo),this.incremento={z:.003},this.pico=!0}animar(e,t){const n=r.M8C.mapLinear(e[1],0,255,10,15),i=r.M8C.mapLinear(e[15],0,255,0,.1);let o=r.M8C.mapLinear(e[15],0,255,0,4);o=r.M8C.damp(0,o,.7,.1);const a=r.M8C.mapLinear(Math.sin(.2*t),-1,1,.3,-.3)+o;this.volumen1.circulo_int.children.forEach(((e,t,n)=>{const i=t/(n.length-1);e.scale.set(1+a*i,1+a*i,1)})),this.volumen2.circulo_int.children.forEach(((e,t,n)=>{const i=t/(n.length-1);e.scale.set(1+a*i,1+a*i,1)})),this.material.uniforms.u_time.value=t,this.material.uniforms.u_bass.value=n,this.material.uniforms.u_mid.value=i,this.volumen1.position.x=this.camara.left,this.volumen2.position.x=this.camara.right,this.volumen1.rotation.z+=this.incremento.z,this.volumen2.rotation.z-=this.incremento.z,this.render()}}class L extends S{constructor(e){super(e);const t=this.width<this.height?this.width:this.height,n=11184810;this.volumen1=new y(.4*t,32,n,w),this.volumen2=new y(.4*t,32,n,w),this.volumen1.position.x=.5*-this.width,this.volumen1.position.y=-.3*-this.height,this.volumen2.position.x=-.5*-this.width,this.volumen2.position.y=.3*-this.height,this.scene.add(this.volumen1),this.scene.add(this.volumen2)}animar(e){this.volumen1.position.x=this.camara.left,this.volumen2.position.x=this.camara.right,this.volumen1.rotation.z=e,this.volumen2.rotation.z=e,this.render()}}class M extends S{constructor(e,t,n){super(e);const i=this.width<this.height?this.width:this.height;this.volumen=new y(.5*i,32,7799039,w),this.volumen.position.x=this.width*t,this.volumen.position.y=this.height*n,this.scene.add(this.volumen),this.incremento={z:0},this.pico=!0}animar(e){this.volumen.rotation.z=e,this.render()}}class E extends S{constructor(e){super(e),this.target=new r.FM8,this.mouse=new r.FM8,this.canvas=e}actualizar(e,t){this.mouse.set(e,t)}mirar(){const e=this.canvas.getBoundingClientRect(),t=new r.FM8((e.left+e.right)/2,(e.top+e.bottom)/2);this.target.lerp(this.mouse,.07);const n=.21-Math.atan2(this.target.x-t.x,this.target.y-t.y);this.canvas.style.transform=`rotateZ(${n}rad)`}}function k(e,t){const n=e.querySelectorAll(".barra"),i=e.querySelector(".img");P=new E(i),window.addEventListener("mousemove",(function(e){P.actualizar(e.pageX,e.pageY)}),!1),function e(i){const o=t.getFrequencyData();P.mirar(),function(e,t){const n=r.M8C.mapLinear(r.M8C.smoothstep(e[1],200,255),0,1,0,10),i=r.M8C.mapLinear(r.M8C.smoothstep(e[10],50,200),0,1,0,10),o=r.M8C.mapLinear(r.M8C.smoothstep(e[20],0,100),0,1,0,10);t[0].style.height=`${n+4}px`,t[1].style.height=`${i+4}px`,t[2].style.height=`${o+4}px`}(o,n),requestAnimationFrame(e)}()}function A(e,t=".internal"){const n=e.querySelector(t),i=new L(n);!function e(t){i.animar(1e-4*t),requestAnimationFrame(e)}()}var O=n(791);var Z=n(8686),C=n(9255),I=n(5647);l.ZP.registerPlugin(c.i);let D=new r.SJI,T=new r.BbS(D);(new r.mTL).load(O,(function(e){T.setBuffer(e),T.setLoop(!0),T.setVolume(.9),function(){l.ZP.set(Y,{autoAlpha:1}),l.ZP.set(G,{scaleY:.005,transformOrigin:"bottom"});const e=l.ZP.to(W,{paused:!0,scaleX:0,ease:"none",transformOrigin:"right"});let t,n=0;const i=N("#main"),o=s()(i);function r(n){l.ZP.to(e,{progress:n/t,duration:.3,ease:"power1.out"})}t=o.images.length,r(0),o.on("progress",(function(){n++,r(n)})),o.on("done",(function(){l.ZP.set(W,{autoAlpha:0,onComplete:U})}))}()}));const F=new r.kqm(T,256);function R(){const e=document.querySelector("#sound");T.isPlaying?(T.pause(),e.querySelector("h6").innerText="Sound OFF"):(e.querySelector("h6").innerText="Sound ON",T.play())}let z,B;const N=e=>document.querySelector(e),j=e=>document.querySelectorAll(e);let V=j(".portfolio__categories a"),H=N(".portfolio__image--l"),$=N(".portfolio__image--l .image_inside");const Y=N(".loader"),G=N(".loader .inner"),W=N(".loader .progress"),X=N(".loader__mask");function K(e){localStorage.setItem("visitado",!0),R();const t=l.ZP.timeline({defaults:{duration:2,ease:"power1.inOut"}});t.to("#toma1",{autoAlpha:0}),t.to("#toma2",{autoAlpha:1,repeat:1,yoyo:!0}),t.to("#toma3",{autoAlpha:1,repeat:1,yoyo:!0}),t.to(".telon",{autoAlpha:0}),t.play()}function U(){N("body").classList.remove("is-loading"),o().hooks.before((()=>{N("html").classList.add("is-transitioning")})),o().hooks.after((()=>{N("html").classList.remove("is-transitioning")})),o().hooks.beforeEnter((()=>{window.scrollTo(0,0)})),o().init({views:[{namespace:"index",afterEnter({next:e}){J(e.container),Q(e.container),ee(e.container),re(e.container),e.container,new m.Z(".home",{type:"carousel",autoplay:4e3,focusAt:"center",startAt:0,perView:2,breakpoints:{1200:{perView:2,focusAt:1},800:{perView:1}}}).mount(),oe(e.container)}},{namespace:"online-gallery",afterEnter({next:e,current:t}){var n;window.localStorage.getItem("visitado")?T.isPlaying||R():(e.container.querySelector("#play-btn").addEventListener("click",K,!1),e.container.querySelector(".telon").style.display="block"),J(e.container),Q(e.container),ee(e.container),re(e.container),n=e.container,l.ZP.utils.toArray(n.querySelectorAll(".links a")).forEach((e=>{const t=e.getAttribute("href");e.addEventListener("click",(e=>{e.preventDefault(),z.scrollIntoView(N(t),{damping:.07,offsetTop:0})}))}));window.matchMedia("(min-width: 768px)").matches&&(e=>{const t=e.querySelectorAll(".box.image"),n=e.ownerDocument.createElement("img");n.id="activity-image-container",e.querySelector("#image-container").prepend(n),t.length&&t.forEach((t=>{t.addEventListener("mouseenter",(t=>{const i=t.currentTarget,o=i.dataset.img,r=i.dataset.text;n.src=o,e.querySelector("#image-text").innerHTML=r})),t.addEventListener("mouseleave",(()=>{e.querySelector("#activity-image-container").src="",e.querySelector("#image-text").innerHTML=""}))}))})(e.container),(0,C.pl)(e.container),function(e,t){const n=e.querySelector(".welcome"),i=new q(n),o=e.querySelector(".canvas_artistas");_=new M(o,-.5,-.3);const r=e.querySelector(".canvas_fundaciones");b=new M(r,-.5,.3);const a=e.querySelector(".news"),s=new L(a);!function e(n){const o=t.getFrequencyData();i.animar(o,.004*n),_.animar(3e-4*n),b.animar(3e-4*n),s.animar(1e-4*n),requestAnimationFrame(e)}()}(e.container,F),null===t.container&&(k(document,F),document.querySelector("#sound").addEventListener("click",R,!1)),document.querySelector(".canvas").className="canvas img"}},{namespace:"artists",beforeEnter({next:e,current:t}){J(e.container),Q(e.container),ee(e.container),(0,C.uL)(e.container),re(e.container),oe(e.container),(0,h.NZ)(e.container),(0,d.p)(e.container),function(e,t){const n=e.querySelector(".artist"),i=new M(n,.5,.3);!function e(n){t.getFrequencyData(),i.animar(3e-4*n),requestAnimationFrame(e)}()}(e.container,F),null===t.container&&(k(document,F),document.querySelector("#sound").addEventListener("click",R,!1)),document.querySelector(".canvas").className="canvas img-2"}},{namespace:"art-work",beforeEnter({next:e,current:t}){J(e.container),Q(e.container),ee(e.container),(0,C.uL)(e.container),re(e.container),oe(e.container),(0,Z.Z)(e.container),(0,Z.O)(e.container),ae(e.container),A(e.container),A(e.container,".internal-2"),null===t.container&&(k(document,F),document.querySelector("#sound").addEventListener("click",R,!1)),document.querySelector(".canvas").className="canvas img"}},{namespace:"non-profit",beforeEnter({next:e,current:t}){J(e.container),Q(e.container),ee(e.container),(0,C.uL)(e.container),re(e.container),oe(e.container),(0,I.Z)(e.container),function(e){const t=e.querySelector(".canvas-left"),n=new M(t,.5,.5),i=e.querySelector(".canvas-right"),o=new M(i,-.5,-.5);!function e(t){n.animar(3e-4*t),o.animar(3e-4*t),requestAnimationFrame(e)}()}(e.container),null===t.container&&(k(document,F),document.querySelector("#sound").addEventListener("click",R,!1)),document.querySelector(".canvas").className="canvas img-2"}},{namespace:"activities_internal",beforeEnter({next:e,current:t}){J(e.container),Q(e.container),ee(e.container),(0,C.uL)(e.container),re(e.container),oe(e.container),A(e.container),null===t.container&&(k(document,F),document.querySelector("#sound").addEventListener("click",R,!1))}},{namespace:"activities-all",beforeEnter({next:e,current:t}){J(e.container),Q(e.container),ee(e.container),(0,C.uL)(e.container),re(e.container),oe(e.container),(0,h.NZ)(e.container),A(e.container),null===t.container&&(k(document,F),document.querySelector("#sound").addEventListener("click",R,!1))}},{namespace:"faxxi",beforeEnter({next:e}){(0,h.gT)(e.container),J(e.container),Q(e.container),ee(e.container),oe(e.container),e.container,l.ZP.utils.toArray(".with-parallax2").forEach((e=>{const t=e.querySelector(".bg");l.ZP.to(t,{yPercent:40,ease:"none",scrollTrigger:{trigger:".with-parallax2",start:"top bottom",scrub:!0}})})),re(e.container),ae(e.container)}},{namespace:"anteriores",beforeEnter({next:e}){var t;(0,h.gT)(e.container),J(e.container),Q(e.container),ee(e.container),t=e.container,V=t.querySelectorAll(".portfolio__categories a"),$=t.querySelectorAll(".portfolio__image--l .image_inside"),H=t.querySelector(".portfolio__image--l"),V.forEach((e=>{e.addEventListener("mouseenter",te),e.addEventListener("mouseleave",te),e.addEventListener("mousemove",ne)})),re(e.container)}},{namespace:"contacto",beforeEnter({next:e}){(0,h.gT)(e.container),J(e.container),Q(e.container),ee(e.container),re(e.container)}},{namespace:"resultados",beforeEnter({next:e}){J(e.container),Q(e.container),ee(e.container),re(e.container)}},{namespace:"interna",beforeEnter({next:e}){(0,h.gT)(e.container),J(e.container),Q(e.container),ee(e.container),re(e.container)}},{namespace:"prensa",beforeEnter({next:e}){(0,h.gT)(e.container),J(e.container),Q(e.container),ee(e.container),(0,C.uL)(e.container),re(e.container)}}],transitions:[{name:"onliGallery-artistas",from:{namespace:["online-gallery"]},to:{namespace:["artists"]},leave:({current:e})=>(e=>{z.scrollTo(0,window.innerHeight,2e3),(0,C.Li)(e);const t=e.querySelector("#left"),n=e.querySelector("#right"),i=e.querySelector("header"),o=t.querySelector("a"),r=_.volumen,a=l.ZP.timeline({defaults:{duration:2,ease:"power1.inOut"}});return a.to(t,{flex:"0 1 100%",padding:0}),a.to(n,{flex:"0 1 0%",padding:0},0),a.to("#right",{padding:0},0),a.to(o,{x:"-50%"},.5),a.to(".rg__text",{autoAlpha:0},0),a.to(r.position,{x:.5*window.innerWidth,y:.3*window.innerHeight},0),a.to(i,{y:-100,autoAlpha:0},0),a})(e.container),enter:({next:e})=>(e=>{const t=e.querySelector("main"),n=l.ZP.timeline({defaults:{duration:1,ease:"power1.inOut"}});return n.from(t,{autoAlpha:0,y:500},0),n.from("header",{autoAlpha:0,y:100},0),n})(e.container)},{name:"onliGallery-fundaciones",from:{custom:({trigger:e})=>e.classList&&e.classList.contains("galTofun")},to:{namespace:["non-profit"]},leave:({current:e})=>(e=>{z.scrollTo(0,window.innerHeight,2e3),(0,C.Li)(e);const t=e.querySelector("#left"),n=e.querySelector("#right"),i=e.querySelector("header"),o=t.querySelector("a"),r=b.volumen,a=l.ZP.timeline({defaults:{duration:2,ease:"power1.inOut"}});return a.to(t,{flex:"0 1 0%",padding:0}),a.to(n,{flex:"0 1 100%",padding:0},0),a.to("#left",{padding:0},0),a.to(o,{x:"-50%"},.5),a.to(r.position,{x:.25*window.innerWidth,y:.5*window.innerHeight},0),a.to(i,{y:-100,autoAlpha:0},0),a})(e.container),enter:({next:e})=>(e=>{const t=e.querySelector("main"),n=l.ZP.timeline({defaults:{duration:2,ease:"power1.inOut"}});return n.from(t,{autoAlpha:0},0),n})(e.container)},{name:"general",once(){!function(){const e=l.ZP.timeline({id:"tlLoaderIn",defaults:{duration:1.1,ease:"power2.out"}}),t=N(".loader__image img"),n=N(".loader__image--mask"),i=N(".loader__title--mask:nth-child(1) span"),o=N(".loader__title--mask:nth-child(2) span"),r=N(".loader__title--mask:nth-child(3) span"),a=j(".loader__title--mask"),s=N(".loader__content");e.set(s,{autoAlpha:1}).to(G,{scaleY:1,transformOrigin:"bottom",ease:"power1.inOut"}).addLabel("revealImage").from(n,{yPercent:100},"revealImage-=0.6").from(t,{yPercent:-80},"revealImage-=0.6").from([i,o,r],{yPercent:100,stagger:.1},"revealImage-=0.4");const c=l.ZP.timeline({id:"tlLoaderOut",defaults:{duration:1.2,ease:"power2.inOut"},delay:1});c.to(a,{yPercent:-500,stagger:.2},0).to([Y,s],{yPercent:-100},.2).from("#main",{y:150},.2);l.ZP.timeline().add(e).add(c)}()},async leave({current:e}){await function(){const e=l.ZP.timeline({defaults:{duration:.8,ease:"power1.inOut"}});return e.set(G,{autoAlpha:0}).fromTo(Y,{yPercent:-100},{yPercent:0}).fromTo(X,{yPercent:80},{yPercent:0},0),e}()},enter({next:e}){!function(){const e=l.ZP.timeline({defaults:{duration:.8,ease:"power1.inOut"}});e.to(Y,{yPercent:100}).to(X,{yPercent:-80},0)}()}}]})}function J(e){z=u.Z.init(e.querySelector("#viewport"),{damping:.07}),z.track.xAxis.element.remove(),c.i.scrollerProxy(e.ownerDocument.body,{scrollTop(e){return arguments.length&&(z.scrollTop=e),z.scrollTop}}),z.addListener(c.i.update),window.bodyScrollBar=z}function Q(e){const t=l.ZP.utils.toArray(e.querySelectorAll(".main-nav a")),n=l.ZP.utils.toArray(e.querySelectorAll(".main-nav a")).reverse(),i=l.ZP.utils.toArray(e.querySelectorAll(".navigation "));function o(e){const i=1===e,o=i?t:n;return l.ZP.to(o,{duration:.5,stagger:.05,autoAlpha:()=>i?0:1,y:()=>i?20:0,ease:"power4.out"})}t.forEach((e=>{e.addEventListener("mouseleave",(()=>{e.classList.add("animate-out")})),e.ontransitionend=function(){e.classList.remove("animate-out")}})),i.forEach((e=>{e.addEventListener("mouseleave",(()=>{e.classList.add("animate-out")})),e.ontransitionend=function(){e.classList.remove("animate-out")}})),B=c.i.create({trigger:e.querySelector("#main"),start:"top top",end:"100000",toggleClass:{targets:"body",className:"has-scrolled"},onEnter:({direction:e})=>o(e),onLeaveBack:({direction:e})=>o(e)}),B.scroll(0)}function ee(){c.i.create({trigger:"article",start:"top top",end:"bottom bottom-=100",toggleClass:{targets:"body",className:"has-scrolled-home"}})}function te(e){if("mouseenter"===e.type){const{color:t,imagelarge:n}=e.target.dataset,i=Array.from(V).filter((t=>t!==e.target));l.ZP.timeline({onStart:()=>(0,h.updateBodyColor)(t)}).set($,{backgroundImage:`url(${n})`}).to(H,{autoAlpha:1}).to(i,{color:"#000",autoAlpha:.2},0).to(e.target,{color:"#000",autoAlpha:1},0)}else if("mouseleave"===e.type){l.ZP.timeline({onStart:()=>(0,h.updateBodyColor)("#ACB7AE")}).to(H,{autoAlpha:0}).to(V,{color:"#000000",autoAlpha:1},0)}}function ne(e){const{clientY:t}=e;l.ZP.to(H,{duration:1.2,y:ie(t)/3,ease:"power3.out"})}function ie(e){return-(N(".portfolio__categories").clientHeight-e)}function oe(){l.ZP.utils.toArray(".with-parallax").forEach((e=>{const t=e.querySelector(".bg");l.ZP.to(t,{yPercent:40,ease:"none",scrollTrigger:{trigger:".with-parallax",start:"top bottom",scrub:!0}})}))}function re(e){const t=e.querySelector(".burger");t.addEventListener("click",(function(){this.classList.toggle("animating"),this.classList.toggle("active");const e=l.ZP.timeline({onComplete:()=>t.classList.toggle("animating")}),n=[".menu-overlay:not(#art-work-overlay)",".menu-overlay:not(#art-work-overlay) > .navBefore",".menu-overlay:not(#art-work-overlay) > .nav",".menu-overlay:not(#art-work-overlay) .navigation, .menu-overlay:not(#art-work-overlay) .link, .menu-overlay:not(#art-work-overlay) .social, .menu-overlay:not(#art-work-overlay) .navigation-2, .menu-overlay:not(#art-work-overlay) #logo-overlay, .menu-overlay:not(#art-work-overlay) #circle-overlay"];this.classList.contains("active")?(document.querySelector(".canvas")&&document.querySelector(".canvas").classList.add("img-2"),e.to(n[0],{duration:.1,display:"flex",ease:"expo.in"}).to(n[1],{duration:.5,marginLeft:"0",ease:"expo.in"},0).to(n[2],{duration:.8,marginLeft:"0",delay:.3,ease:"expo.in"},0).to(n[3],{duration:1,opacity:"1",delay:.5,ease:"expo.in"},0)):(document.querySelector(".canvas").classList.contains("img")&&document.querySelector(".canvas").classList.remove("img-2"),e.to(n[3],{duration:1,delay:.2,opacity:"0",ease:"expo.in"}).to(n[2],{duration:1,marginLeft:"100%",delay:.3,ease:"expo.in"},0).to(n[1],{duration:1,marginLeft:"100%",delay:.5,ease:"expo.in"},0).to(n[0],{duration:1,display:"none",delay:1,ease:"expo.in"},0))}))}function ae(){new m.Z(".testimonial",{type:"carousel",startAt:0,perView:1,dragThreshold:!1,swipeThreshold:!1}).mount()}},2986:(e,t,n)=>{"use strict";n.d(t,{gT:()=>h,uZ:()=>m,FE:()=>d,NZ:()=>s,t7:()=>u,UI:()=>c});var i=n(3391),o=n.n(i);const r=[{href:"index.html",text:"Inicio"},{href:"faxxi.html",text:"Que es Faxxi"},{href:"online_gallery.html",text:"Galeria Online",dataset:{"data-barba-prevent":"all"}},{href:"anteriores.html",text:"Versiones Anteriores"},{href:"prensa.html",text:"Prensa"},{href:"contacto.html",text:"Contacto"}];const a=class{constructor(e){this.dom=e,this.buildMenu()}getMenuItem(e){const{text:t,href:n}=e,i=document.createElement("li"),o=document.createElement("a");return o.text=t,o.href=n,i.appendChild(o),i}buildMenu(){r.forEach((e=>{const t=this.getMenuItem(e);this.dom.appendChild(t)}))}},s=(e,t=".grid",n="fitRows")=>{const i=e.querySelector(t),r=e.querySelectorAll(".btnFilter"),a=new(o())(i,{itemSelector:".element-item",layoutMode:n});l(r,a)},l=(e,t)=>{for(const n of e)n.addEventListener("click",(function(){[...e].forEach((e=>{e.classList.remove("is-checked")})),this.classList.add("is-checked"),t.arrange({filter:this.dataset.filter})}))},c=(e,t,n,i,o)=>(e-t)*(o-i)/(n-t)+i,u=(e,t,n)=>(1-n)*e+n*t,m=(e,t,n)=>e<=t?t:e>=n?n:e,h=e=>{new a(e.querySelector("nav.main-nav > ul")),new a(e.querySelector("ul.navigation"))},d=e=>e.clientHeight},9582:(e,t,n)=>{"use strict";n.d(t,{p:()=>u});var i=n(6358),o=n(2986);let r={x:0,y:0},a=r,s={x:a.x-r.x,y:a.y-r.y};window.addEventListener("mousemove",(e=>{r.x=e.clientX,r.y=e.clientY}));class l{constructor(e,t,n){this.document=n.ownerDocument,this.DOM={el:e},this.animatableProperties=t,this.DOM.textInner=this.DOM.el.querySelector(".menu__item-textinner"),this.createLayout(),this.initEvents()}createLayout(){if(this.DOM.reveal=this.document.createElement("div"),this.DOM.reveal.className="hover-reveal",this.DOM.revealInner=this.document.createElement("div"),this.DOM.revealInner.className="hover-reveal__inner",Object.keys(this.DOM.el.dataset).includes("img")){const e=this.DOM.el.dataset.img;this.DOM.revealImage=this.document.createElement("div"),this.DOM.revealImage.className="hover-reveal__img",this.DOM.revealImage.style.backgroundImage=`url('${e}')`,this.DOM.revealInner.appendChild(this.DOM.revealImage)}this.DOM.reveal.appendChild(this.DOM.revealInner),this.DOM.el.appendChild(this.DOM.reveal)}calcBounds(){this.bounds={el:this.DOM.el.getBoundingClientRect(),reveal:this.DOM.reveal.getBoundingClientRect()}}initEvents(){this.mouseenterFn=e=>{this.showImage(),this.firstRAFCycle=!0,this.loopRender()},this.mouseleaveFn=()=>{this.stopRendering(),this.hideImage()},this.DOM.el.addEventListener("mouseenter",this.mouseenterFn),this.DOM.el.addEventListener("mouseleave",this.mouseleaveFn)}showImage(){i.ZP.killTweensOf(this.DOM.revealInner),i.ZP.killTweensOf(this.DOM.revealImage),this.tl=i.ZP.timeline({onStart:()=>{this.DOM.reveal.style.opacity=1,i.ZP.set(this.DOM.el,{zIndex:1})}}).to(this.DOM.revealInner,.2,{ease:"Sine.easeOut",startAt:{x:s.x<0?"-100%":"100%"},x:"0%"}).to(this.DOM.revealImage,.2,{ease:"Sine.easeOut",startAt:{x:s.x<0?"100%":"-100%"},x:"0%"},0)}hideImage(){i.ZP.killTweensOf(this.DOM.revealInner),i.ZP.killTweensOf(this.DOM.revealImage),this.tl=i.ZP.timeline({onStart:()=>{i.ZP.set(this.DOM.el,{zIndex:1})},onComplete:()=>{i.ZP.set(this.DOM.reveal,{opacity:0})}}).to(this.DOM.revealInner,.2,{ease:"Sine.easeOut",x:s.x<0?"100%":"-100%"}).to(this.DOM.revealImage,.2,{ease:"Sine.easeOut",x:s.x<0?"-100%":"100%"},0)}loopRender(){this.requestId||(this.requestId=requestAnimationFrame((()=>this.render())))}stopRendering(){this.requestId&&(window.cancelAnimationFrame(this.requestId),this.requestId=void 0)}render(){this.requestId=void 0,this.firstRAFCycle&&this.calcBounds();const e=(0,o.uZ)(Math.abs(a.x-r.x),0,100);s={x:a.x-r.x,y:a.y-r.y},a={x:r.x,y:r.y},this.animatableProperties.tx.current=Math.abs(r.x-this.bounds.el.left)-this.bounds.reveal.width/2,this.animatableProperties.ty.current=Math.abs(r.y-this.bounds.el.top)-this.bounds.reveal.height/2,this.animatableProperties.rotation.current=this.firstRAFCycle?0:(0,o.UI)(e,0,100,0,s.x<0?60:-60),this.animatableProperties.brightness.current=this.firstRAFCycle?1:(0,o.UI)(e,0,100,1,4),this.animatableProperties.tx.previous=this.firstRAFCycle?this.animatableProperties.tx.current:(0,o.t7)(this.animatableProperties.tx.previous,this.animatableProperties.tx.current,this.animatableProperties.tx.amt),this.animatableProperties.ty.previous=this.firstRAFCycle?this.animatableProperties.ty.current:(0,o.t7)(this.animatableProperties.ty.previous,this.animatableProperties.ty.current,this.animatableProperties.ty.amt),this.animatableProperties.rotation.previous=this.firstRAFCycle?this.animatableProperties.rotation.current:(0,o.t7)(this.animatableProperties.rotation.previous,this.animatableProperties.rotation.current,this.animatableProperties.rotation.amt),this.animatableProperties.brightness.previous=this.firstRAFCycle?this.animatableProperties.brightness.current:(0,o.t7)(this.animatableProperties.brightness.previous,this.animatableProperties.brightness.current,this.animatableProperties.brightness.amt),i.ZP.set(this.DOM.reveal,{x:this.animatableProperties.tx.previous,y:this.animatableProperties.ty.previous,rotation:this.animatableProperties.rotation.previous,filter:`brightness(${this.animatableProperties.brightness.previous})`}),this.firstRAFCycle=!1,this.loopRender()}}class c{constructor(e,t,n){this.DOM={el:e},this.DOM.menuItems=this.DOM.el.querySelectorAll(".menu__item"),this.animatableProperties={tx:{previous:0,current:0,amt:.08},ty:{previous:0,current:0,amt:.08},rotation:{previous:0,current:0,amt:.08},brightness:{previous:1,current:1,amt:.08}},this.menuItems=[],[...this.DOM.menuItems].forEach(((e,t)=>this.menuItems.push(new l(e,this.animatableProperties,n)))),this.showMenuItems()}showMenuItems(){i.ZP.to(this.menuItems.map((e=>e.DOM.textInner)),{duration:1.2,ease:"Expo.easeOut",startAt:{y:"100%"},y:0,delay:e=>.06*e})}}const u=e=>{window.matchMedia("(min-width: 768px)").matches&&((e,t)=>{const n=t.querySelector(".menu");new c(n,e,t)})([],e)}},8686:(e,t,n)=>{"use strict";n.d(t,{Z:()=>h,O:()=>m});var i=n(6358),o=n(9843),r=n(2869),a=n(1997),s=n(627),l=n(2523);class c{constructor(e,t="#lightgallery",n=".gallery-item",i=!1,o=!0,a=!1,l=500){this.counter=!1,this.download=!1,this.showMaximizeIcon=!1,this.showZoomInOutIcons=!1,this.scale=100,this.speed=l,this.selector=n,this.loop=a,this.controls=o,this.enableDrag=i,this.galleryContainer=e.querySelector(t),this.plugins=[r.Z,s.Z]}init(){this.verifyAttributes(),(0,o.Z)(this.galleryContainer,this)}enableVideoPlugin(){this.plugins.push(l.Z),this.youTubePlayerParams={modestbranding:1,showinfo:0,controls:1}}verifyAttributes(){this.hasAttribute("navigate")&&(this.plugins=[...this.plugins,a.Z]),this.enableDrag=!this.hasAttribute("single")}hasAttribute(e){return Object.keys(this.galleryContainer.dataset).includes(e)}}const u=e=>t=>{e.forEach((e=>{e.classList.remove("hidden"),e.setAttribute("style","top :"+(t.pageY-225)+"px; left: "+(t.pageX-200)+"px")}))},m=e=>{const t=new c(e,"#lightgallery",".gallery-item",!1,!1),n=new c(e,"#carousel-lightgallery",".glide__slide",!1);t.enableVideoPlugin(),t.init(),n.enableVideoPlugin(),n.init()},h=e=>{const t=e.querySelector("#btnViewTransition"),n=e.querySelector("#btnCloseOverlay"),o=e.querySelector(".art-work.info"),r=[".menu-overlay#art-work-overlay",".menu-overlay#art-work-overlay > .navBefore",".menu-overlay#art-work-overlay > .nav",".menu-overlay#art-work-overlay .navigation, .menu-overlay#art-work-overlay .link, .menu-overlay#art-work-overlay .social","#art-work-overlay .img",".menu__text.cerrar"];let a=[];for(let t=1;t<6;t++)a=[...a,e.querySelector(`#img-stair-${t}`)];n.addEventListener("click",(function(){i.ZP.timeline({onComplete:()=>{e.querySelector("#art-work-overlay").style.overflow="inherit",e.ownerDocument.removeEventListener("mousemove",u(a))}}).to(r[3],{duration:1,delay:.2,opacity:"0",ease:"expo.in"}).to(o,{opacity:0,duration:.5}).to(r[2],{duration:1,marginLeft:"-100%",delay:.3,ease:"expo.in"},0).to(r[1],{duration:1,marginLeft:"-100%",delay:.5,ease:"expo.in"},0).to(r[0],{duration:1,display:"none",delay:1,ease:"expo.in"},0).to(r[4],{duration:.4,opacity:0,delay:0,ease:"expo.in"},0).to(this,{duration:.5,opacity:0,delay:0,ease:"expo.in"},0)})),t.addEventListener("click",(function(t){t.preventDefault(),a.forEach((e=>e.classList.add("hidden")));i.ZP.timeline({onComplete:()=>{i.ZP.to(r[4],{duration:.4,opacity:1}),i.ZP.to(o,{opacity:1,duration:.5}),((e,t)=>{e.querySelector("#art-work-overlay").style.overflow="hidden",e.ownerDocument.addEventListener("mousemove",u(t))})(e,a)}}).to(r[0],{duration:.1,display:"flex",ease:"expo.in"}).to(r[1],{duration:.5,marginLeft:"0",ease:"expo.in"},0).to(r[2],{duration:.8,marginLeft:"0",delay:.3,ease:"expo.in"},0).to(r[3],{duration:1,opacity:"1",delay:.5,ease:"expo.in"},0).to(r[4],{duration:.3,opacity:1,delay:1,ease:"expo.in"},0).to(n,{duration:.5,opacity:1,delay:1,ease:"expo.in"},0)}))}},5647:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});const i=e=>{if(!window.matchMedia("(min-width: 768px)").matches)return!1;const t=e.querySelector(".split.left"),n=e.querySelector(".split.right"),i=e.querySelector("#main .content");t.addEventListener("mouseenter",(e=>{i.classList.add("hover-left")})),t.addEventListener("mouseleave",(e=>{i.classList.remove("hover-left")})),n.addEventListener("mouseenter",(e=>{i.classList.add("hover-right")})),n.addEventListener("mouseleave",(e=>{i.classList.remove("hover-right")}))}},9255:(e,t,n)=>{"use strict";n.d(t,{uL:()=>s,pl:()=>c,Li:()=>a});var i=n(6358),o=n(2986);const r=e=>{document.documentElement.style.setProperty("--bcg-fill-color",e)};function a(e){e.querySelectorAll(".rg__column").forEach((e=>{e.removeEventListener("mouseleave",l)}))}const s=e=>{e.querySelectorAll(".rg__column").forEach((e=>{e.imageBlock=e.querySelector(".rg__image"),e.image=e.querySelector(".rg__image img"),e.mask=e.querySelector(".rg__image--mask"),e.text=e.querySelector(".rg__text"),e.textCopy=e.querySelector(".rg__text--copy"),e.textMask=e.querySelector(".rg__text--mask"),e.textP=e.querySelector(".rg__text--copy p"),i.ZP.set([e.imageBlock,e.textMask],{yPercent:-100}),i.ZP.set([e.mask,e.textP],{yPercent:100}),i.ZP.set(e.image,{scale:1.2}),e.addEventListener("mouseenter",l),e.addEventListener("mouseleave",l)}))};function l(e){const{imageBlock:t,mask:n,text:a,textCopy:s,textMask:l,textP:c,dataset:u}=e.target,{color:m}=u;let h=i.ZP.timeline({defaults:{duration:1.8,ease:"power4.out"}});return"mouseenter"===e.type?h.to([n,t,l,c],{yPercent:0,onStart:()=>r(m)}).to(a,{y:()=>-(0,o.FE)(s)/2},0):"mouseleave"===e.type&&h.to([n,c],{yPercent:100}).to([t,l],{yPercent:-100},0).to(a,{y:0},0),h}const c=e=>{const t=window.matchMedia("(min-width: 768px)");t.matches&&s(e),t.addEventListener("change",(t=>{if(t.matches)s(e);else{const t=e.querySelectorAll(".rg__column"),n=i.ZP.timeline();t.forEach((e=>{e.removeEventListener("mouseenter",l),e.removeEventListener("mouseleave",l);const{color:t}=e.dataset,i=e.querySelector(".rg__image"),a=e.querySelector(".rg__image--mask"),s=e.querySelector(".rg__text"),c=e.querySelector(".rg__text--copy"),u=e.querySelector(".rg__text--mask"),m=e.querySelector(".rg__text--copy p");n.to([a,i,u,m],{yPercent:0,onStart:()=>r(t)}).to(s,{y:()=>-(0,o.FE)(c)/2},0)}))}}))}},791:(e,t,n)=>{"use strict";e.exports=n.p+"static/2fe0deac38cb2af6d9e3.mp3"},2074:(e,t,n)=>{"use strict";e.exports=n.p+"images/cc69f96bbde98abd98a5.jpg"},2065:e=>{"use strict";e.exports="#ifdef GL_ES\n  precision mediump float;\n#endif\n\nvarying vec2 vTexCoord;\nuniform vec2 u_resolution;\nuniform sampler2D u_texture;\nuniform float u_time;\nuniform vec2 u_tResolution;\nuniform float u_bass;\nuniform float u_tremble;\nuniform float u_mid;\n\nmat2 scale(vec2 _scale){\n    return mat2(_scale.x,0.0,\n                0.0,_scale.y);\n}\n\nvoid main() {\n  vec2 ratio = vec2(\n    min((u_resolution.x / u_resolution.y) / (u_tResolution.x / u_tResolution.y), 1.0),\n    min((u_resolution.y / u_resolution.x) / (u_tResolution.y / u_tResolution.x), 1.0)\n  );\n\n  vec2 uv = vec2(\n    vTexCoord.x * ratio.x + (1.0 - ratio.x) * 0.5,\n    vTexCoord.y * ratio.y + (1.0 - ratio.y) * 0.5\n  );\n\n  uv.y = 1.0 - uv.y;\n\n  uv -= vec2(0.5);\n  uv = scale(vec2(0.92)) * uv;\n  uv += vec2(0.5);\n\n  float wave   = sin(uv.y * u_bass + u_time) * u_mid;\n  vec2 d = vec2(wave);\n  vec4 image   = texture2D(u_texture, uv + d);\n\n  gl_FragColor = image;\n}"},6835:e=>{"use strict";e.exports="uniform mat4 projectionMatrix;\nuniform mat4 viewMatrix;\nuniform mat4 modelMatrix;\n\nattribute vec3 position;\nattribute vec2 uv;\n\nvarying vec2 vTexCoord;\n\nvoid main()\n{\n    vTexCoord = uv;\n    vec4 modelPosition = modelMatrix * vec4(position, 1.0);\n    vec4 viewPosition = viewMatrix * modelPosition;\n    vec4 projectedPosition = projectionMatrix * viewPosition;\n\n    gl_Position = projectedPosition;\n}"},1043:e=>{"use strict";e.exports="uniform float thickness;\n\nvarying vec3 vCenter;\n\nvoid main() {\n\n  vec3 afwidth = fwidth( vCenter.xyz );\n\n  vec3 edge3 = smoothstep( ( thickness - 1.0 ) * afwidth, thickness * afwidth, vCenter.xyz );\n\n  float edge = 1.0 - min( min( edge3.x, edge3.y ), edge3.z );\n\n  gl_FragColor.rgb = gl_FrontFacing ? vec3( 0.5, 0.0, 1.0 ) : vec3( 0.4, 0.4, 0.5 );\n  gl_FragColor.a = edge;\n\n}"},9144:e=>{"use strict";e.exports="attribute vec3 center;\nvarying vec3 vCenter;\n\nvoid main() {\n\n    vCenter = center;\n\n    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n}"}}]);