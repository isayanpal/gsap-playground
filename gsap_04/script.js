var main = document.querySelector("#main");
var cursor = document.querySelector("#cursor");
var image = document.querySelector("#image")

main.addEventListener("mousemove",function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        duration:0.3,
    })
})

image.addEventListener("mouseenter",function(){
    cursor.innerHTML = "View"
    gsap.to(cursor,{
        scale:3,
        backgroundColor:"#ffffff7c"
    })
})
image.addEventListener("mouseleave",function(){
    cursor.innerHTML = ""
    gsap.to(cursor,{
        scale:1,
        backgroundColor:"white"
    })
})