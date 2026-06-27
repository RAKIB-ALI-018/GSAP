let menu = document.querySelector("#nav i")
let cross = document.querySelector("#sidebar i")

let tl = gsap.timeline();

tl.to("#sidebar",{
    right:0, 
    duration:0.6
})
tl.from("#sidebar h2",{
    x:150,
    opacity:0,
    duration:0.7,
    stagger:0.3,

})

tl.from("#sidebar i", {
    opacity:0,
    duration:0.6
})

tl.pause()

menu.addEventListener("click", function(){
    tl.play()
})

cross.addEventListener("click", function(){
    tl.reverse()
})