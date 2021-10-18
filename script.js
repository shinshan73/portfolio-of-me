const tl = gsap.timeline({ defaults: { ease: "power1.out" } });


tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1.5");
tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 0.5 });
tl.fromTo(".big-text", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");

const animText = document.querySelector('h2');

new Typewriter( animText, {
    loop: true,
})


.typeString('Kevin x Code')
.pauseFor(1200)
.deleteChars(4)
.typeString('<span style="color : #FF785B"> HTML </span>')
.pauseFor(300)
.deleteChars(5)
.typeString('<span style="color : #47B5FF"> CSS </span>')
.pauseFor(300)
.deleteChars(4)
.typeString('<span style="color : #F3FF38"> Javascript </span>')
.start()