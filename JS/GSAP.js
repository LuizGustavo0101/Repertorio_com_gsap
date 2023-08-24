gsap.to(".card1", {
    scrollTrigger:".card1",
    delay:.7,
    scale:(1.1),
    duration:.5,
});

gsap.to(".card2", {
    scrollTrigger:".card2",
    delay:.8,
    scale:(1.1),
    duration:.5,
});

gsap.to(".card3", {
    scrollTrigger:".card3",
    delay:.9,
    scale:(1.1),
    duration:.5,
});

gsap.to(".card4", {
    scrollTrigger:".card4",
    delay:1,
    scale:(1.1),
    duration:.5,
});

// clicavel
function correr(){
    gsap.to(".run1", {
        xPercent:"+=1900",
        duration:1,
    })

    gsap.to(".run2", {
        xPercent:"+=1900",
        duration:2,
    })

    gsap.to(".run3", {
        xPercent:"+=1900",
        delay:.5,
        duration:1.5,
    })

    gsap.to(".box", {
        xPercent:"-=1900",
        delay:2.5,
    })
}

let tl = gsap.timeline()

tl.to(".bola1", {y:-40, duration:1, repeat:-1, yoyo: true, ease: "easeOut"}, 0);
tl.to(".bola2", {y:-40, duration:1, repeat:-1, delay:0.1, yoyo: true, ease: "easeOut"}, "<");
tl.to(".bola3", {y:-40, duration:1, repeat:-1, delay:0.15, yoyo: true, ease: "easeOut"}, "<");
tl.to(".bola4", {y:-40, duration:1, repeat:-1, delay:0.2, yoyo: true, ease: "easeOut"}, "<");
tl.to(".bola5", {y:-40, duration:1, repeat:-1, delay:0.2, yoyo: true, ease: "easeOut"}, "<");


function donwload(){
    var imagem = document.querySelector(".img");
    var palavra = document.querySelector(".palavra");
    var progresso = document.querySelector(".carge");
    var button = document.querySelector(".button");
    var completo = document.querySelector("#completo");

    button.classList.add("diminuir");

    let tl = gsap.timeline();

    tl.to(palavra, {xPercent:+300, duration:.3,});
    tl.to(imagem, {scale:(1.1), duration:.1, ease:"easeIn",});
    tl.to(imagem, {
        scale:(0), 
        duration:.4, 
        ease:"easeIn", 
        onComplete: () => progresso.classList.remove("carge")
    });

    let porcentagem = -20;
    const interval = setInterval(() =>{
        porcentagem += 1;
        progresso.textContent = `${porcentagem}%`;

        if(porcentagem >= 100){
            clearInterval(interval);
        }
    }, 40);

    tl.to(".carge", {
        delay:5, 
        scale:(0), 
        onComplete:() => completo.style.display = 'block',
    });

    tl.fromTo("#completo", {scale:(0)}, {duration:.4, scale:(1),});
}