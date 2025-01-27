//from intital to final
gsap.to("#box1",{
    x:500,
    duration:2,
    delay:1,
    rotate:360,
    backgroundColor:"yellow",
    borderRadius:"50%",
    scale:"0.5",
    repeat:-1,
    yoyo:true
})

//from final to inital
gsap.from("#box2",{
    x:300,
    y:200,
    duration:2,
    delay:1,
    rotate:360,
    borderRadius:"50%",
    backgroundColor:"green-yellow",
    repeat:-1,
    yoyo:true
})
gsap.to("#box2",{
    backgroundColor:"green",
    scale:"0.5",
})

gsap.from("h1",{
    opacity:0,
    duration: 1,
    y:30,
    dealy:1,
    stagger:-1,
    repeat:-1,
    yoyo:true
})