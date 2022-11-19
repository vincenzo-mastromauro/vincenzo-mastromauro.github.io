gsap.registerPlugin(ScrollTrigger);

const allPanels = gsap.utils.toArray(".panel");
const triggerPanels = gsap.utils.toArray(".panel:not(.last)");

triggerPanels.forEach(function (panel, i) {
  gsap.fromTo(
    allPanels,
    { xPercent: -(100 * i) },
    {
      xPercent: -(100 * (i + 1)),
      immediateRender: false,
      ease: "none",

      scrollTrigger: {
        trigger: panel,
        id: "panel-" + i,

        start: () => "bottom bottom",
        end: () => "+=" + window.innerWidth,

        pin: ".wrapper",
        pinnedContainer: ".wrapper",

        scrub: true,

        onEnter: function () {
          console.log("enter tween " + (i + 1));
        },
        onLeave: function () {
          console.log("leave tween " + (i + 1));
        },
        onEnterBack: function () {
          console.log("enterBack tween " + (i + 1));
        },
        onLeaveBack: function () {
          console.log("leaveBack tween " + (i + 1));
        },
      },
    }
  );
});

ScrollTrigger.addEventListener("refresh", clear);

function clear() {
  if (document.documentElement.scrollTop < ScrollTrigger.getById("panel-0").start) {
    gsap.set(allPanels, { clearProps: "xPercent" });
  }
}
