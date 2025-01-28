gsap.from("#page2 p",{
    duration:2,
    x: -30
})
gsap.to("#page2 p",{
    transform:"translate(150%)",
    duration:2,
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        markers:false,
        start:"top 0%",
        end:"top 100%",
        duration:5,
        scrub:5,
        pin:true,
    },
})

gsap.from("#page1 h1",{
    opacity:0,
    y:60,
    duration:2,
    delay:1,
})
gsap.to("#page1 h1",{
scale:1
})

gsap.from("#page3 h1",{
    opacity:0,
    scale:0,
    y:-40,
    scrollTrigger:{
        trigger:"#page3",
        scroller:"body",
        markers:false,
        start:"top 0%",
        end:"top 100%",
        scrub:5,
        pin:true,
    },
})