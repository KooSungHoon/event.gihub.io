"use strict";
(self.webpackChunkfrontend_template = self.webpackChunkfrontend_template || []).push([
    [826], {
        876: (e, t, s) => {
            var i = s(634);
            class n {
                constructor() {
                    var e, t, s;
                    s = () => {
                        window.pageYOffset < 100 ? this.header.classList.remove("scroll") : this.header.classList.add("scroll")
                    }, (t = "onScroll") in(e = this) ? Object.defineProperty(e, t, {
                        value: s,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = s, this.header = document.querySelector(".header"), this.city_info = document.querySelector(".city-info"), this.target = document.querySelector(".target_blur"), window.addEventListener("scroll", this.onScroll, i.Z.isPassive), this.targetScroll = this.target.getBoundingClientRect().top + window.pageYOffset, i.Z.Dispatcher.addEventListener("DeviceChange", (() => {
                        this.targetScroll = this.target.getBoundingClientRect().top + window.pageYOffset
                    }))
                }
            }
            window.addEventListener("DOMContentLoaded", (() => {
                new n
            }))
        },
        634: (e, t, s) => {
            function i(e, t, s) {
                return t in e ? Object.defineProperty(e, t, {
                    value: s,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = s, e
            }
            s.d(t, {
                Z: () => r
            });

            function n(e, t, s) {
                return t in e ? Object.defineProperty(e, t, {
                    value: s,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = s, e
            }
            class r {
                static get isPassive() {
                    return !!r.HAS_PASSIVE && {
                        passive: !0
                    }
                }
            }
            n(r, "IS_SP", !1), n(r, "Dispatcher", new class {
                constructor() {
                    i(this, "listeners", void 0), i(this, "addEventListener", ((e, t) => {
                        null == this.listeners[e] && (this.listeners[e] = []), this.listeners[e].push(t)
                    })), i(this, "removeEventListener", ((e, t) => {
                        if (t) {
                            const s = this.listeners[e],
                                i = s.length;
                            for (let e = 0; e < i; e += 1) {
                                s[e] === t && s.splice(e, 1)
                            }
                        } else this.listeners[e] && (this.listeners[e] = null)
                    })), i(this, "dispatchEvent", ((e, t) => {
                        void 0 === t && (t = null);
                        const s = this.listeners[e];
                        if (null != s)
                            for (let e = 0, i = s.length; e < i; e += 1) {
                                const i = s[e];
                                if (i) {
                                    i({
                                        target: this,
                                        data: t
                                    })
                                }
                            }
                    })), this.listeners = {}
                }
            }), n(r, "HAS_PASSIVE", !1), n(r, "log", (e => {
                0
            })), n(r, "dir", (e => {
                0
            })), n(r, "warn", (e => {
                0
            })), n(r, "getQueryAsObject", (() => {
                const e = {},
                    t = location.search.split(/[?&]/);
                for (let s = 0, i = t.length; s < i; ++s) {
                    const i = t[s].split("="),
                        n = decodeURI(i[0]),
                        r = decodeURI(i[1]);
                    n && (e[n] = r)
                }
                return e
            }));
            try {
                const e = () => {},
                    t = Object.defineProperty({}, "passive", {
                        get: () => (r.HAS_PASSIVE = !0, !0)
                    });
                window.addEventListener("test", e, t), window.removeEventListener("test", e)
            } catch (e) {
                r.HAS_PASSIVE = !1
            }
        }
    },
    e => {
        var t;
        t = 876, e(e.s = t)
    }
]);