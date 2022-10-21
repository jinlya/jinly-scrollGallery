gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.defaults({
    markers: false
})

// shrinking moving logo
$('.section.is--hero').each(function (index) {
    console.log(this)
    let triggerElement = $(this);
    let targetElement = $('.nav_logo-contain');

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: triggerElement,
            start: "top top",
            end: "bottom top",
            scrub: 1,
        }
    })

    tl.from(targetElement, {
        width: "100%",
        fontSize: '4em',
        y: '-90%',
        duration: 1,
    })
})

// push down text
$('.header_text-move').each(function (index) {
    console.log(this)
    let triggerElement = $(this);
    let targetElement = $(this);

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: triggerElement,
            start: "-100 top",
            end: "bottom+500 top",
            scrub: 1,
        }
    })

    tl.to(targetElement, {
        y: '120%',
        duration: 1,
    })
})

//sticy circle
$('.sticky-circle-wrap').each(function (index) {
    let triggerElement = $(this);
    let targetElement = $('.sticky-circle_element');

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: triggerElement,
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
        }
    })
    tl.fromTo(targetElement,
        {
            width: '20em',
            height: '20em',
            borderRadius: '50%',
            duration: 1,
        },
        {
            width: '100vw',
            height: '100vh',
            borderRadius: '0em',
            duration: 1,
        })
})

// dark to light background
$('.sticky-circle-wrap').each(function (index) {
    let triggerElement = $(this);
    let targetElement = $('body, .section.is--nav');
    let targetElement2 = $('.nav-top');

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: triggerElement,
            start: "top top",
            end: "bottom bottom",
            scrub: 3,
        }
    })
    tl.fromTo(targetElement,
        {
            backgroundColor: "#2e2a27",
            color: "#e8e2da",
            // color: '#5E9ABF',
            // background: '#142B59',
            duration: 1,
        },
        {
            backgroundColor: "#e8e2da",
            color: "#2e2a27",
            // background: '#5E9ABF',
            // color: '#142B59',
            duration: 1,
        });

    tl.to(targetElement2, {
        borderBottom: "1px solid #2e2a27",
        duration: 1,
    })
})

// light to dark background
// $('.grid_wrapper:nth-child(odd)').each(function (index) {
//     let triggerElement = $(this);
//     let targetElement = $('body, .section.is--nav');
//     let targetElement2 = $('.nav-top');

//     let tl = gsap.timeline({
//         scrollTrigger: {
//             trigger: triggerElement,
//             start: "top top",
//             end: "bottom bottom",
//             scrub: 3,
//         }
//     })
//     tl.fromTo(targetElement,
//         {
//             backgroundColor: "#e8e2da",
//             color: "#2e2a27",
//             duration: 1,
//         },
//         {
//             backgroundColor: "#2e2a27",
//             color: "#e8e2da",

//             duration: 1,
//         });

//     tl.to(targetElement2, {
//         borderBottom: "1px solid #e8e2da",
//         duration: 1,
//     })
// })

//grid title change 
$('.grid_text-item').eq(0).addClass('is--active');

$('.grid_wrapper').each(function (index) {
    let triggerElement = $(this);
    let myIndex = $(this).index();
    console.log(myIndex);
    let targetElement = $('.grid_text-item').eq(myIndex);
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: triggerElement,
            start: "top bottom",
            end: "bottom bottom",
            onEnter: () => {
                $('.grid_text-item').removeClass('is--active');
                targetElement.addClass('is--active');
            },
            onEnterBack: () => {
                $('.grid_text-item').removeClass('is--active');
                targetElement.addClass('is--active');
            },
        }
    })
})

// grid item move 1
$('.grid_item:nth-child(3n+1)').each(function (index) {
    console.log(this)
    let triggerElement = $(this);
    let targetElement = $(this);

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: triggerElement,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
        }
    })

    tl.to(targetElement, {
        y: '-30%',
        duration: 1,
    })
})

// grid item move 2
$('.grid_item:nth-child(3n+2)').each(function (index) {
    console.log(this)
    let triggerElement = $(this);
    let targetElement = $(this);

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: triggerElement,
            start: "top bottom",
            end: "bottom top",
            scrub: 2,
        }
    })

    tl.to(targetElement, {
        y: '-50%',
        duration: 1,
    })
})

// grid item move 3
$('.grid_item:nth-child(3n+3)').each(function (index) {
    console.log(this)
    let triggerElement = $(this);
    let targetElement = $(this);

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: triggerElement,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
        }
    })

    tl.to(targetElement, {
        y: '-70%',
        duration: 1,
    })
})