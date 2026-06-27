let main = document.querySelector("#main")
let cursor = document.querySelector("#cursor")
let imageDiv = document.querySelector("#image")

main.addEventListener("mousemove", function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        duration:0.7,
        ease: "power3.out"
    })
})

imageDiv.addEventListener("mouseenter", function(){
    cursor.innerHTML="View More"
    gsap.to(cursor,{
        scale:3
    })
})

imageDiv.addEventListener("mouseleave", function(){
    cursor.innerHTML=""
    gsap.to(cursor,{
        scale:1
    })
})

