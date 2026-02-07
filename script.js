// const lenis = new Lenis({
//     lerp: 0.06,
//     wheelMultiplier: 1.1,
//     touchMultiplier: 1.2,
//     smooth: 1,
//   });
  
  
//   lenis.on("scroll", ScrollTrigger.update);
  
//   gsap.ticker.add((time) => {
//     lenis.raf(time * 1000);
//   });
  
//   gsap.ticker.lagSmoothing(0);
  

  window.addEventListener("load", () => {

    gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

    const path = document.querySelector("#wave-path");
    const ball = document.querySelector(".ball");
    const world = document.querySelector("#world");
    
    const length = path.getTotalLength();
    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;

    

gsap.timeline({
  // scrollTrigger: {
  //   trigger: "#camera-section",
  //   start: "top 0%",
  //   end: "+=2600",
  //   pin: "#camera-section",
  //   scrub: true,
  //   anticipatePin: 1
  // }
})
.to(path, {
  strokeDashoffset: 0,
  ease: "none"
}, 0)

.to(ball, {
  motionPath: {
    path: path,
    align: path,
    alignOrigin: [0.5, 0.5]
  },
  ease: "none"
}, 0)


// .to(world, {
//     yPercent: -90,
//     ease: "sine.inOut",
//     duration: 0.6,
//   }, 0.12);

})

  

