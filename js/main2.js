
function play() {
    (document.getElementById("touch").style.display = "none"), document.getElementById("bgm").play(),init();;
    $('.kakao').hide();
}

function init() {
    const t = { val: 0 };
    let o,
        e = 0;
    gsap.utils.toArray(".col").forEach((o, r) => {
        const i = o.childNodes;
        i.forEach((t) => {
            var e = t.cloneNode(!0);
            o.appendChild(e);
        }),
            i.forEach((o) => {
                let i = o.parentElement.clientHeight,
                    a = r % 2 != 0 ? "+=" : "-=";
                gsap.to(o, {
                    y: a + Number(i / 2),
                    duration: 20,
                    repeat: -1,
                    ease: "none",
                    modifiers: { y: gsap.utils.unitize((o) => ("+=" == a ? ((e += t.val), (o = (parseFloat(o) - e) % (0.5 * i))) : ((e += t.val), (o = (parseFloat(o) + e) % -Number(0.5 * i))), o)) },
                });
            });
    });
    ScrollTrigger.create({
        trigger: "section",
        start: "top 50%",
        end: "bottom 50%",
        onUpdate: function (e) {
            const r = e.getVelocity();
            r > 0 && (o && o.kill(), (t.val = -r / 2e3), (o = gsap.to(t, { val: 0 }))), r < 0 && (o && o.kill(), (t.val = -r / 3e3), (o = gsap.to(t, { val: 0 })));
        },
    });
}
gsap.registerPlugin(ScrollTrigger);
const scroller = document.querySelector(".scroller"),
    bodyScrollBar = Scrollbar.init(scroller, { damping: 0.05, delegateTo: document, alwaysShowTracks: !1 });

ScrollTrigger.scrollerProxy(".scroller", {
    scrollTop(t) {
        return arguments.length && (bodyScrollBar.scrollTop = t), bodyScrollBar.scrollTop;
    },
}),
    bodyScrollBar.addListener(ScrollTrigger.update),
    ScrollTrigger.defaults({ scroller: scroller });


    function yesLogic() {
        $('.section8 .history').hide();
        $('.section8 .choice').show();
    }