$(function(){function y(){container=e.get(0),n=new THREE.PerspectiveCamera(75,a/f,1,5e3),n.position.z=1e3,r=new THREE.Scene;var o=function(t,n,i){for(var o=0;o<t;o++){s=new THREE.Particle(new THREE.ParticleBasicMaterial({map:new THREE.Texture(w(n)),blending:THREE.AdditiveBlending}));var u=i*(Math.random()*2+1),a=i*Math.random();E(s,a,u,n),r.add(s)}};o(p,h,1e4),o(v,d,5e3),i=new THREE.CanvasRenderer,i.setSize(a,f),i.sortElements=!1,i.setClearColorHex(2539973,1),container.appendChild(i.domElement),g&&(t=new Stats,t.domElement.style.position="absolute",t.domElement.style.top="0px",container.appendChild(t.domElement)),document.addEventListener("mousemove",S,!1),window.addEventListener("resize",b,!1)}function b(){a=window.innerWidth,l=a/2,c=f/2,n.aspect=a/f,n.updateProjectionMatrix(),i.setSize(a,f)}function w(e){var t=Math.random(),n=document.createElement("canvas"),r=t*e+m,i=n.width=r,s=n.height=r,o=r/2,u=o,a=n.getContext("2d"),f=a.createRadialGradient(u,o,0,u,o,u),l=function(){return parseInt(Math.random()*255,10)},c=function(e){var n=parseInt((1-t)*(1-t)*70,10);return""+l()+",100%,"+n+"%"},h=function(e,t){return"hsla("+e+","+t+")"},p=c(r);return f.addColorStop(0,h(p,1)),f.addColorStop(.2,h(p,.5)),f.addColorStop(.4,h(p,.2)),f.addColorStop(1,h(p,0)),a.fillStyle=f,a.fillRect(0,0,i,s),n}function E(e,t,n,r){var e=this instanceof THREE.Particle?this:e,t=t!==undefined?t:0,i=n,s=r>10?20:1;e.position.x=(Math.random()*a-l)*3,e.position.y=(Math.random()*f-c)*3,e.position.z=0,e.material.opacity=0,e.scale.x=e.scale.y=s;var o=n*(r>10?4:3);(new TWEEN.Tween(e.position)).delay(t).to({x:Math.random()*a*2-a,y:Math.random()*f*2-f,z:Math.random()*4e3-2e3},o).start();var u=(new TWEEN.Tween(e.material)).delay(t).to({opacity:.6},i),h=(new TWEEN.Tween(e.material)).to({opacity:.01},n).onComplete(function(){E(e,t,n,r)});return u.chain(h),u.start(),e}function S(e){o=e.clientX-l,u=e.clientY-c}function x(e){e.touches.length==1&&(e.preventDefault(),o=e.touches[0].pageX-l,u=e.touches[0].pageY-c)}function T(e){e.touches.length==1&&(e.preventDefault(),o=e.touches[0].pageX-l,u=e.touches[0].pageY-c)}function N(){setTimeout(function(){requestAnimationFrame(N)},40),C(),g&&t.update()}function C(){TWEEN.update(),n.position.x+=(o/3-n.position.x)*.01,n.position.y+=(-u/3-n.position.y)*.01,n.lookAt(r.position),i.render(r,n)}var e=$("#particles"),t,n,r,i,s,o=0,u=0,a=window.innerWidth,f=e.height(),l=a/2,c=f/2,h=100,p=20,d=1,v=50,m=32,g=!1;y(),N()}),$("img.svg").each(function(){var e=$(this),t=e.attr("id"),n=e.attr("class"),r=e.attr("src");$.get(r,function(r){var i=$(r).find("svg");typeof t!="undefined"&&(i=i.attr("id",t)),typeof n!="undefined"&&(i=i.attr("class",n+" replaced-svg")),i=i.removeAttr("xmlns:a"),e.replaceWith(i)})}),function(){$(function(){var e;return $(window).smartresize(function(t){return e()}),e=function(){var e;return e=$(".row").width(),$(".pop").each(function(t,n){var r,i;i=$(this),r=$($(this).data("source")).html(),i.data("content",r);if(e<768)return i.data("placement","bottom")})},$(".pop").on("mouseenter",function(e){var t;return $(".pop").not(this).popover("destroy"),t={html:!0,animation:!0},$(this).popover(t).popover("show")}),$(".pop").on("mouseleave",function(e){return $(this).popover("destroy")}),e()})}.call(this);