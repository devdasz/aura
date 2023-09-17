var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
var scaleValue = 4;
switch (true) {
    case viewportWidth > 850:
        scaleValue = 10;
        break;
    case viewportWidth > 550:
        scaleValue = 6;
        break;
  
    default:
        scaleValue = 4;
        break;
}
console.log(viewportWidth);
ScrollTrigger.create({
    animation: gsap.from(
        ".logo", {
        y: "50vh",
        // x:"50vw",
        scale: scaleValue,
        yPercent: -50,
        // xPercent:-50
        opacity: 0.5

    }
    ),
    scrub: 1,
    trigger: ".content",
    start: "top 80%",
    endTrigger: ".content",
    end: "top 10%",
    // markers: true,
});
ScrollTrigger.create({
    animation: gsap.from(
        "#shine-moon-h1", {
        // y: "50vh",
        // x:"50vw",
        // scale: scaleValue,
        // yPercent: -50,
        xPercent:-120,
        // opacity: 0.5

    }
    ),
    scrub: 2,
    trigger: ".content",
    start: "top 20%",
    endTrigger: ".content",
    end: "top 20%",
    // markers: true,
});
ScrollTrigger.create({
    animation: gsap.from(
        "#shine-moon-p", {
        // y: "50vh",
        // x:"50vw",
        // scale: scaleValue,
        // yPercent: -50,
        xPercent:-110,
        // opacity: 0.5

    }
    ),
    scrub: 2,
    trigger: ".content",
    start: "top 10%",
    endTrigger: ".content",
    end: "top 10%",
    // markers: true,
});

ScrollTrigger.create({
    animation: gsap.from(
        "#crisis", {
        // y: "50vh",
        // x:"50vw",
        // scale: scaleValue,
        yPercent: 50,
        // xPercent:-110,
        opacity: 0.0

    }
    ),
    scrub: 2,
    trigger: "#crisis-section",
    start: "top 60%",
    endTrigger: "#crisis-section",
    end: "top 60%",
    // markers: true,
});
ScrollTrigger.create({
    animation: gsap.from(
        "#challenge-text", {
        // y: "50vh",
        // x:"50vw",
        // scale: scaleValue,
        yPercent: 50,
        // xPercent:-110,
        opacity: 0.0

    }
    ),
    scrub: 5,
    trigger: "#challenge",
    start: "top 40%",
    endTrigger: "#challenge",
    end: "top 40%",
    // markers: true,
});
ScrollTrigger.create({
    animation: gsap.from(
        "#challenge-img1", {
        // y: "50vh",
        // x:"50vw",
        // scale: scaleValue,
        yPercent: 5,
        // xPercent:-110,
        // opacity: 0.5

    }
    ),
    scrub: 5,
    trigger: "#challenge",
    start: "top 40%",
    endTrigger: "#challenge",
    end: "top 40%",
    // markers: true,
});
ScrollTrigger.create({
    animation: gsap.from(
        "#challenge-img2", {
        // y: "50vh",
        // x:"50vw",
        // scale: scaleValue,
        yPercent: -5,
        // xPercent:-110,
        // opacity: 0.5

    }
    ),
    scrub: 5,
    trigger: "#challenge",
    start: "top 40%",
    endTrigger: "#challenge",
    end: "top 40%",
    // markers: true,
});
ScrollTrigger.create({
    animation: gsap.from(
        "#what-are-we", {
        // y: "50vh",
        // x:"50vw",
        // scale: scaleValue,
        yPercent: 50,
        // xPercent:-110,
        opacity: 0.0

    }
    ),
    scrub: 2,
    trigger: "#what-are-we-section",
    start: "top 60%",
    endTrigger: "#what-are-we-section",
    end: "top 60%",
    // markers: true,
});    

ScrollTrigger.create({
    animation: gsap.from(
        "#products_services_1_text", {
        // y: "50vh",
        // x:"50vw",
        // scale: scaleValue,
        yPercent: 50,
        // xPercent:-110,
        opacity: 0.0

    }
    ),
    scrub: 2,
    trigger: "#products_services_1",
    start: "top 60%",
    endTrigger: "#products_services_1",
    end: "top 60%",
    // markers: true,
});  
ScrollTrigger.create({
    animation: gsap.from(
        "#products_services_2_text", {
        // y: "50vh",
        // x:"50vw",
        // scale: scaleValue,
        yPercent: 50,
        // xPercent:-110,
        opacity: 0.0

    }
    ),
    scrub: 2,
    trigger: "#products_services_2",
    start: "top 60%",
    endTrigger: "#products_services_2",
    end: "top 60%",
    // markers: true,
});  
ScrollTrigger.create({
    animation: gsap.from(
        "#products_services_3_text", {
        // y: "50vh",
        // x:"50vw",
        // scale: scaleValue,
        yPercent: 50,
        // xPercent:-110,
        opacity: 0.0

    }
    ),
    scrub: 2,
    trigger: "#products_services_3",
    start: "top 60%",
    endTrigger: "#products_services_3",
    end: "top 60%",
    // markers: true,
}); 