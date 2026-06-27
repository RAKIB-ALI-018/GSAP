let h1 = document.querySelector(" h1")
let h1Text = h1.textContent

let splittedText = h1Text.split("");
let halfVal = splittedText.length/2;

let clutter = ""

splittedText.forEach(function(elem, idx){
    if(idx<halfVal){
        clutter+=`<span class="left">${elem}</span>`
    }else{
        clutter+=`<span class="right">${elem}</span>`

    }
})

h1.innerHTML = clutter

gsap.from("h1 .left", {
    y:80,
    duration:0.6,
    delay:0.5,
    stagger:0.1,
    opacity:0
})

gsap.from("h1 .right", {
    y:80,
    duration:0.6,
    delay:0.5,
    stagger:-0.1,
    opacity:0
})