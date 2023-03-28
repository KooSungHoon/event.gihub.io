var damp = 0.06;
gsap.registerPlugin(ScrollTrigger);



gsap.to(".kakao", { duration: 5, width: '100%', ease: 'none', delay: 0});
var sec1 = gsap.timeline();
sec1.to(".msg1", {duration: 0.5, opacity: 1, padding: 0, ease: 'none', delay: 1});
sec1.to(".msg1 p", {duration: 0, opacity: 0, ease: 'none', delay: 2});
sec1.to(".msg2", {duration: 0.5, opacity: 1, padding: 0, ease: 'none', delay: 2});
sec1.to(".kakao", {duration: 1, top: '-100vh', ease: 'power4.out', delay: 3});
sec1.call(function() {
    const scroller = document.querySelector('.scroller');
    const bodyScrollBar = Scrollbar.init(scroller, {damping: damp, delegateTo: document, alwaysShowTracks: false});
    ScrollTrigger.scrollerProxy(".scroller", {
    scrollTop(value) {
        if (arguments.length) {
            bodyScrollBar.scrollTop = value;
        }
        return bodyScrollBar.scrollTop;
    }
    });
    bodyScrollBar.addListener(ScrollTrigger.update);
    ScrollTrigger.defaults({scroller: scroller});
});

