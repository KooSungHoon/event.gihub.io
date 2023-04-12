// var audio = new Audio('etc/LoveBlossom.mp3');
// audio.play();

gsap.registerPlugin(ScrollTrigger);
// Setup smooth scroll
const scroller = document.querySelector('.scroller');
const bodyScrollBar = Scrollbar.init(scroller, {damping: 0.07, delegateTo: document, alwaysShowTracks: false });
ScrollTrigger.scrollerProxy(".scroller", {
scrollTop(value) {
    if (arguments.length) {
    bodyScrollBar.scrollTop = value;
    }
    return bodyScrollBar.scrollTop;
}
});
bodyScrollBar.addListener(ScrollTrigger.update);
ScrollTrigger.defaults({ scroller: scroller });


gsap.to(".kakao", { duration: 5, width: '100%', ease: 'none', delay: 0});
var sec1 = gsap.timeline();
sec1.to(".msg1", {duration: 0.5, opacity: 1, padding: 0, ease: 'none', delay: 1});
sec1.to(".msg1 p", {duration: 0, opacity: 0, ease: 'none', delay: 2});
sec1.to(".msg2", {duration: 0.5, opacity: 1, padding: 0, ease: 'none', delay: 2});
sec1.to(".kakao", {duration: 1, top: '-100vh', ease: 'power4.out', delay: 3});



const additionalY = { val: 0 };
let additionalYAnim;
let offset = 0;
const cols = gsap.utils.toArray(".col");

cols.forEach((col, i) => {
  const images = col.childNodes;

  // DUPLICATE IMAGES FOR LOOP
  images.forEach((image) => {
    var clone = image.cloneNode(true);
    col.appendChild(clone);
  });

  // SET ANIMATION
  images.forEach((item) => {
    let columnHeight = item.parentElement.clientHeight;
    let direction = i % 2 !== 0 ? "+=" : "-="; // Change direction for odd columns

    gsap.to(item, {
      y: direction + Number(columnHeight / 2),
      duration: 20,
      repeat: -1,
      ease: "none",
      modifiers: {
        y: gsap.utils.unitize((y) => {
          if (direction == "+=") {
            offset += additionalY.val;
            y = (parseFloat(y) - offset) % (columnHeight * 0.5);
          } else {
            offset += additionalY.val;
            y = (parseFloat(y) + offset) % -Number(columnHeight * 0.5);
          }
          return y;
        })
      }
    });
  });
});

const imagesScrollerTrigger = ScrollTrigger.create({
  trigger: "section",
  start: "top 50%",
  end: "bottom 50%",
  onUpdate: function (self) {
    const velocity = self.getVelocity();
    if (velocity > 0) {
      if (additionalYAnim) additionalYAnim.kill();
      additionalY.val = -velocity / 2000;
      additionalYAnim = gsap.to(additionalY, { val: 0 });
    }
    if (velocity < 0) {
      if (additionalYAnim) additionalYAnim.kill();
      additionalY.val = -velocity / 3000;
      additionalYAnim = gsap.to(additionalY, { val: 0 });
    }
  }
});



// about us
const sec2 = gsap.timeline({
    scrollTrigger: { 
        trigger : ".section4",
        scrub: true,
        pin: true,
        start: "top top",
        markers:true,
        end: "+=11520"         
    }
});
sec2.to(".text_about", {yPercent: -250, duration: 5}, "a");
sec2.to(".text_us", {yPercent: 250, duration: 5}, "a");
sec2.to(".box_01",{opacity:1, duration: 4});
sec2.to(".t1",{opacity: 1, duration: 8});
sec2.to(".history_box img",{opacity: 0, duration: 8});
sec2.to(".t2",{opacity: 1, duration: 8});
sec2.to(".history_box img",{opacity: 0, duration: 8});
sec2.to(".t3",{opacity: 1, duration: 8});
sec2.to(".history_box img",{opacity: 0, duration: 8});
sec2.to(".t4",{opacity: 1, duration: 8});

const sec2_2 = gsap.timeline({
  scrollTrigger: { 
      trigger : ".section4",
      scrub: true,
      // pin: true,
      start: "top top",
      markers:true,
      end: "+=11520"         
  }
});
sec2_2.to(".section4", {'background-position': '0 -11544', duration: 5});

if (document.querySelector('.gsap-marker-scroller-start')) {		
    const markers = gsap.utils.toArray('[class *= "gsap-marker"]');	

    bodyScrollBar.addListener(({ offset }) => {  
        gsap.set(markers, { marginTop: -offset.y})
    });
}

