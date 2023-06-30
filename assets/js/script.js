var swiper = new Swiper(".mySwiper", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: "#frecciaDx",
      prevEl: "#frecciaSx",
    },
});

gsap.from('.header', {duration: 1, y: '-100%', ease: 'bounce'})
gsap.from('.nav', {duration: 1, opacity: 0, delay: 1, stagger: .10})

gsap.from('.primoContainer', {duration: 4, opacity: 0, delay: 1})
gsap.from('.social', {duration: 3, opacity: 0,})
gsap.from('.secondoContainer', {duration: 2, left: '-500px', ease: 'circ',})
gsap.from('.secondoContainer', {duration: 2, opacity: 0, delay: 1, stagger: .10})
gsap.from('.parteSliders', {duration: 4, opacity: 0})
gsap.fromTo('#frecciaDx',{opacity: 0, scale: 0, rotation: 720}, {duration:1, delay: 2, opacity: 1, scale: 1, rotation: 0})
gsap.fromTo('#frecciaSx',{opacity: 0, scale: 0, rotation: 720}, {duration:1, delay: 2, opacity: 1, scale: 1, rotation: 180})
gsap.from('.numeriPagina', {duration: 3, x: '130px', ease: 'bounce'})

// For more information, see greensock.com/docs/v3/Plugins/ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

gsap . fromTo ( ".sezioneFuoco .popular" , { 
    scrollTrigger : ".sezioneFuoco h2" , // avvia l'animazione quando ".box" entra nel viewport (una volta) 
    opacity : 0,
},{
    scrollTrigger : ".sezioneFuoco .popular" , // avvia l'animazione quando ".box" entra nel viewport (una volta) 
    duration: 2, opacity : 1, delay: 0.5
});
gsap . fromTo ( ".sezioneFuoco img" , { 
    scrollTrigger : ".sezioneFuoco h2" , // avvia l'animazione quando ".box" entra nel viewport (una volta) 
    opacity : 0, scale: 0
},{
    scrollTrigger : ".sezioneFuoco img" , // avvia l'animazione quando ".box" entra nel viewport (una volta) 
    duration: 2, opacity: 1, scale : 1, stagger: .20
});
gsap . fromTo ( ".sezioneFuoco .descrizione" , { 
    scrollTrigger : ".sezioneFuoco h2" , // avvia l'animazione quando ".box" entra nel viewport (una volta) 
    opacity : 0, scale: 0, rotation: 1080
},{
    scrollTrigger : ".sezioneFuoco .descrizione" , // avvia l'animazione quando ".box" entra nel viewport (una volta) 
    duration: 2, opacity: 1, scale : 1,rotation: 0 , stagger: .20
});
gsap . fromTo ( ".sezioneScarpe .titolo" , { 
    scrollTrigger : ".sezioneFuoco h2" , // avvia l'animazione quando ".box" entra nel viewport (una volta) 
    opacity : 0, scale: 0, x: '500px'
},{
    scrollTrigger : ".sezioneFuoco .descrizione" , // avvia l'animazione quando ".box" entra nel viewport (una volta) 
    duration: 2, opacity: 1, scale : 1,x: '0' ,
});
gsap . fromTo ( ".sezioneScarpe img" , { 
    scrollTrigger : ".sezioneFuoco h2" , // avvia l'animazione quando ".box" entra nel viewport (una volta) 
    opacity : 0, scale: 0,
},{
    scrollTrigger : ".sezioneFuoco img" , // avvia l'animazione quando ".box" entra nel viewport (una volta) 
    duration: 4, opacity: 1, scale : 1, delay: 2,
});
gsap . fromTo ( ".sezioneScarpe .descrizioneScarpe span" , { 
    scrollTrigger : ".sezioneFuoco h2" , // avvia l'animazione quando ".box" entra nel viewport (una volta) 
    opacity : 0,
},{
    scrollTrigger : ".sezioneFuoco .descrizioneScarpe span" , // avvia l'animazione quando ".box" entra nel viewport (una volta) 
    duration: 4, opacity: 1, delay: 4,
});
gsap . fromTo ( ".sezioneScarpe .descrizioneScarpe h3" , { 
    scrollTrigger : ".sezioneFuoco h2" , // avvia l'animazione quando ".box" entra nel viewport (una volta) 
    opacity : 0,
},{
    scrollTrigger : ".sezioneFuoco .descrizioneScarpe h3" , // avvia l'animazione quando ".box" entra nel viewport (una volta) 
    duration: 4, opacity: 1, delay: 4.2,
});
gsap . fromTo ( ".sezioneScarpe .descrizioneScarpe p" , { 
    scrollTrigger : ".sezioneFuoco h2" , // avvia l'animazione quando ".box" entra nel viewport (una volta) 
    opacity : 0,
},{
    scrollTrigger : ".sezioneFuoco .descrizioneScarpe p" , // avvia l'animazione quando ".box" entra nel viewport (una volta) 
    duration: 4, opacity: 1, delay: 4.5,
});
gsap . fromTo ( ".sezioneScarpe .descrizioneScarpe .findOutMore" , { 
    scrollTrigger : ".sezioneFuoco h2" , // avvia l'animazione quando ".box" entra nel viewport (una volta) 
    opacity : 0,
},{
    scrollTrigger : ".sezioneFuoco .descrizioneScarpe .findOutMore" , // avvia l'animazione quando ".box" entra nel viewport (una volta) 
    duration: 4, opacity: 1, delay: 4.6,
});

gsap . fromTo ( ".quartoContenitore .primoDiv" , { 
    scrollTrigger : ".quartoContenitore .primoDiv" , // avvia l'animazione quando ".box" entra nel viewport (una volta) 
    opacity : 0, x: '-400px', scale: 0
},{
    scrollTrigger : ".quartoContenitore .primoDiv" , // avvia l'animazione quando ".box" entra nel viewport (una volta) 
    duration: 2, opacity: 1, x: '0', scale: 1
});
gsap . fromTo ( ".quartoContenitore .secondoDiv" , { 
    scrollTrigger : ".quartoContenitore .secondoDiv" , // avvia l'animazione quando ".box" entra nel viewport (una volta) 
    opacity : 0, y: '-500px', scale: 0
},{
    scrollTrigger : ".quartoContenitore .secondoDiv" , // avvia l'animazione quando ".box" entra nel viewport (una volta) 
    duration: 2, opacity: 1, y: '0', scale: 1, delay: 2
});
gsap . fromTo ( ".quartoContenitore .terzoDiv" , { 
    scrollTrigger : ".quartoContenitore .terzoDiv" , // avvia l'animazione quando ".box" entra nel viewport (una volta) 
    opacity : 0, x: '500px', scale: 0
},{
    scrollTrigger : ".quartoContenitore .terzoDiv" , // avvia l'animazione quando ".box" entra nel viewport (una volta) 
    duration: 2, opacity: 1, x: '0', scale: 1, delay: 2
});
gsap . fromTo ( ".quartoContenitore .terzoDiv .text" , { 
    scrollTrigger : ".quartoContenitore .terzoDiv .text" , // avvia l'animazione quando ".box" entra nel viewport (una volta) 
    opacity : 0,
},{
    scrollTrigger : ".quartoContenitore .terzoDiv .text" , // avvia l'animazione quando ".box" entra nel viewport (una volta) 
    duration: 2, opacity: 1, delay: 3,
});

gsap . fromTo ( ".quintoContenitore .title" , { 
    scrollTrigger : ".quintoContenitore .title" , // avvia l'animazione quando ".box" entra nel viewport (una volta) 
    opacity : 0, x: '-400px'
},{
    scrollTrigger : ".quintoContenitore .title" , // avvia l'animazione quando ".box" entra nel viewport (una volta) 
    duration: 2, opacity: 1, x: '0' 
});
gsap . fromTo ( ".quintoContenitore .immagineTenda" , { 
    scrollTrigger : ".quintoContenitore .immagineTenda" , // avvia l'animazione quando ".box" entra nel viewport (una volta) 
    opacity : 0, x: '2000px'
},{
    scrollTrigger : ".quintoContenitore .immagineTenda" , // avvia l'animazione quando ".box" entra nel viewport (una volta) 
    duration: 2, opacity: 1, x: '0' 
});
gsap . fromTo ( ".quintoContenitore .textBottomLeft" , { 
    scrollTrigger : ".quintoContenitore .textBottomLeft" , // avvia l'animazione quando ".box" entra nel viewport (una volta) 
    opacity : 0, scale : 0,
},{
    scrollTrigger : ".quintoContenitore .textBottomLeft" , // avvia l'animazione quando ".box" entra nel viewport (una volta) 
    duration: 2, opacity: 1, scale: 1, delay: 1
});
gsap . fromTo ( ".quintoContenitore .numeretti" , { 
    scrollTrigger : ".quintoContenitore .numeretti" , // avvia l'animazione quando ".box" entra nel viewport (una volta) 
    opacity : 0, scale: 0
},{
    scrollTrigger : ".quintoContenitore .numeretti" , // avvia l'animazione quando ".box" entra nel viewport (una volta) 
    duration: 2, opacity: 1, scale: 1, delay: 1
});
gsap.fromTo('.quintoContenitore #frecciaDx',{
    scrollTrigger : ".quintoContenitore #frecciaDx" , // avvia l'animazione quando ".box" entra nel viewport (una volta)
    opacity: 0, scale: 0, rotation: 720
},{
    scrollTrigger : ".quintoContenitore #frecciaDx" , // avvia l'animazione quando ".box" entra nel viewport (una volta)
    duration:2, opacity: 1, scale: 1, rotation: 0, delay: 2
});
gsap.fromTo('.quintoContenitore #frecciaSx',{
    scrollTrigger : ".quintoContenitore #frecciaSx" , // avvia l'animazione quando ".box" entra nel viewport (una volta)
    opacity: 0, scale: 0, rotation: 720
},{
    scrollTrigger : ".quintoContenitore #frecciaSx" , // avvia l'animazione quando ".box" entra nel viewport (una volta)
    duration:2, opacity: 1, scale: 1, rotation: 180, delay: 2
});

gsap . fromTo ( ".sestoContenitore .tendaNotte" , { 
    scrollTrigger : ".sestoContenitore .textVicinoImmagini .findOutMore" , // avvia l'animazione quando ".box" entra nel viewport (una volta) 
    opacity : 0, x: '-700px'
},{
    scrollTrigger : ".sestoContenitore .textVicinoImmagini .findOutMore" , // avvia l'animazione quando ".box" entra nel viewport (una volta) 
    duration: 3, opacity: 1, x: '0'
});
gsap . fromTo ( ".sestoContenitore .pentolino" , { 
    scrollTrigger : ".sestoContenitore .textVicinoImmagini .findOutMore" , // avvia l'animazione quando ".box" entra nel viewport (una volta) 
    opacity : 0, x: '-1400px',
},{
    scrollTrigger : ".sestoContenitore .textVicinoImmagini .findOutMore" , // avvia l'animazione quando ".box" entra nel viewport (una volta) 
    duration: 2, opacity: 1, x: '0', 
});
gsap . fromTo ( ".sestoContenitore .textVicinoImmagini" , { 
    scrollTrigger : ".sestoContenitore .textVicinoImmagini .findOutMore" , // avvia l'animazione quando ".box" entra nel viewport (una volta) 
    opacity : 0, x: '600px',
},{
    scrollTrigger : ".sestoContenitore .textVicinoImmagini .findOutMore" , // avvia l'animazione quando ".box" entra nel viewport (una volta) 
    duration: 2, opacity: 1, x: '0', delay: 1
});
gsap . fromTo ( ".sestoContenitore #freccia" , { 
    scrollTrigger : ".sestoContenitore .textVicinoImmagini .findOutMore" , // avvia l'animazione quando ".box" entra nel viewport (una volta) 
    opacity : 0, scale: 0,
},{
    scrollTrigger : ".sestoContenitore .textVicinoImmagini .findOutMore" , // avvia l'animazione quando ".box" entra nel viewport (una volta) 
    duration: 2, opacity: 1, scale: 1, delay: 1
});


gsap . fromTo ( ".settimoContenitore" , { 
    scrollTrigger : ".settimoContenitore .logoFooter" , // avvia l'animazione quando ".box" entra nel viewport (una volta) 
    opacity : 0,
},{
    scrollTrigger : ".settimoContenitore .logoFooter" , // avvia l'animazione quando ".box" entra nel viewport (una volta) 
    duration: 3, opacity: 1,
});
gsap . fromTo ( ".settimoContenitore .logoFooter" , { 
    scrollTrigger : ".settimoContenitore .logoFooter" , // avvia l'animazione quando ".box" entra nel viewport (una volta) 
    opacity : 0, scale: 0, rotation: 720
},{
    scrollTrigger : ".settimoContenitore .logoFooter" , // avvia l'animazione quando ".box" entra nel viewport (una volta) 
    duration: 3, opacity: 1, scale: 1, rotation: 0, delay:1
});
gsap . fromTo ( ".settimoContenitoreInterno .links" , { 
    scrollTrigger : ".settimoContenitoreInterno .links" , // avvia l'animazione quando ".box" entra nel viewport (una volta) 
    opacity : 0, 
},{
    scrollTrigger : ".settimoContenitoreInterno .links" , // avvia l'animazione quando ".box" entra nel viewport (una volta) 
    duration: 4, opacity: 1, delay: 1, stagger: .20
});


// gsap.from('.header', {duration: 1, y: '-100%', ease: 'bounce'})
// gsap.from('.nav', {duration: 1, opacity: 0, delay: 1, stagger: .10})
