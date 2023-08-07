const tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#background",
    start: "top top",
    scrub: 1,
  },
});

const elem = document.querySelectorAll(".parallax").forEach((elem) => {
  const depth = elem.dataset.depth;
  const shifting = -(depth * (elem.offsetHeight * 1.1));
  console.log(shifting);
  tl.to(
    elem,
    {
      y: shifting,
      ease: "none",
    },
    0
  ).to(
    "#overlay",
    {
      opacity: 0,
      ease: "none",
    },
    0
  );
});

const tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#content",
    start: "top center",
    toggleActions: "play pause resume reverse",
  },
});

tl2
  .from(".blocks", {
    stagger: 0.3,
    opacity: 0,
    delay: 0.1,
    duration: 1,
    ease: "Expo.easeInOut",
  })
  .from(".blocks .img", {
    stagger: 0.1,
    opacity: 0,
    duration: 1.5,
    ease: "Expo.easeInOut",
  })
  .from("#content p", {
    y: 10,
    opacity: 0,
    duration: 1.5,
    ease: "Expo.easeInOut",
  });
