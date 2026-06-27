let path = `M 30 144 Q 700 144 1430 144`

let finalPath = `M 30 144 Q 700 144 1430 144`

let string = document.querySelector("#string")
string.addEventListener("mousemove", function(dets){
    path = `M 30 144 Q ${dets.x} ${dets.y} 1430 144`
    gsap.to("svg path",{
        attr:{d:path},
        duration:0.3,
        ease:"power3.out"
    })
})
string.addEventListener("mouseleave", function(){
    gsap.to("svg path", {
        attr:{d:finalPath},
        duration:1.5,
        ease:"elastic.out(1,0.2)"
    })
})