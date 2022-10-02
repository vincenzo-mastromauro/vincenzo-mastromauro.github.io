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
        end: () => "+=" + document.querySelector(".panel").offsetWidth,
        pin: ".container",
        pinnedContainer: ".container",
        scrub: 0.2, // Change this for a "smoother transition" effect
      },
    }
  );
});

ScrollTrigger.addEventListener("refresh", clear);
function clear() {
  if (
    document.documentElement.scrollTop < ScrollTrigger.getById("panel-0").start
  ) {
    gsap.set(allPanels, { clearProps: "xPercent" });
  }
}
