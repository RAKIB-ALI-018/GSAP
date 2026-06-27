// gsap.registerPlugin(ScrollTrigger); // ← ye add kar sabse pehle

gsap.from("#page1 h1", {
    opacity: 0,
    y: 30,
    duration: 1,
    delay: 0.7,
    stagger: 0.5
});

gsap.to("#page2 h1", {
    transform: "translateX(-180%)",
    scrollTrigger: {
        trigger: "#page2",
        scroller: "body",
        start: "top 0%",
        end: "top -200%",
        scrub: 3,
        pin: true,
        
        
    }
});

gsap.from("#page3 h1", {
    x: -1000,
    scrollTrigger: {
        trigger: "#page3 h1",
        scroller: "body",
        start: "top 90%",
        end: "top 10%",
        scrub: 3,
        
        
    }
});
gsap.from("#page3 h2", {
    x: 1000,
    scrollTrigger: {
        trigger: "#page3 h2",
        scroller: "body",
        start: "top 90%",
        end: "top 10%",
        scrub: 3,
        
    }
});