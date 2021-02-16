/*! jQuery UI - v1.12.1 - 2019-05-09
 * http://jqueryui.com
 * Includes: effect.js
 * Copyright jQuery Foundation and other contributors; Licensed MIT */

(function (t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
})(function (t) {
    t.ui = t.ui || {}, t.ui.version = "1.12.1";
    var e = "ui-effects-", i = "ui-effects-style", s = "ui-effects-animated", n = t;
    t.effects = {effect: {}}, function (t, e) {
        function i(t, e, i) {
            var s = u[e.type] || {};
            return null == t ? i || !e.def ? null : e.def : (t = s.floor ? ~~t : parseFloat(t), isNaN(t) ? e.def : s.mod ? (t + s.mod) % s.mod : 0 > t ? 0 : t > s.max ? s.max : t)
        }

        function s(i) {
            var s = h(), n = s._rgba = [];
            return i = i.toLowerCase(), f(l, function (t, o) {
                var a, r = o.re.exec(i), l = r && o.parse(r), h = o.space || "rgba";
                return l ? (a = s[h](l), s[c[h].cache] = a[c[h].cache], n = s._rgba = a._rgba, !1) : e
            }), n.length ? ("0,0,0,0" === n.join() && t.extend(n, o.transparent), s) : o[i]
        }

        function n(t, e, i) {
            return i = (i + 1) % 1, 1 > 6 * i ? t + 6 * (e - t) * i : 1 > 2 * i ? e : 2 > 3 * i ? t + 6 * (e - t) * (2 / 3 - i) : t
        }

        var o,
            a = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
            r = /^([\-+])=\s*(\d+\.?\d*)/, l = [{
                re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                parse: function (t) {
                    return [t[1], t[2], t[3], t[4]]
                }
            }, {
                re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                parse: function (t) {
                    return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]]
                }
            }, {
                re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/, parse: function (t) {
                    return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)]
                }
            }, {
                re: /#([a-f0-9])([a-f0-9])([a-f0-9])/, parse: function (t) {
                    return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)]
                }
            }, {
                re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                space: "hsla",
                parse: function (t) {
                    return [t[1], t[2] / 100, t[3] / 100, t[4]]
                }
            }], h = t.Color = function (e, i, s, n) {
                return new t.Color.fn.parse(e, i, s, n)
            }, c = {
                rgba: {
                    props: {
                        red: {idx: 0, type: "byte"},
                        green: {idx: 1, type: "byte"},
                        blue: {idx: 2, type: "byte"}
                    }
                },
                hsla: {
                    props: {
                        hue: {idx: 0, type: "degrees"},
                        saturation: {idx: 1, type: "percent"},
                        lightness: {idx: 2, type: "percent"}
                    }
                }
            }, u = {"byte": {floor: !0, max: 255}, percent: {max: 1}, degrees: {mod: 360, floor: !0}}, d = h.support = {},
            p = t("<p>")[0], f = t.each;
        p.style.cssText = "background-color:rgba(1,1,1,.5)", d.rgba = p.style.backgroundColor.indexOf("rgba") > -1, f(c, function (t, e) {
            e.cache = "_" + t, e.props.alpha = {idx: 3, type: "percent", def: 1}
        }), h.fn = t.extend(h.prototype, {
            parse: function (n, a, r, l) {
                if (n === e)return this._rgba = [null, null, null, null], this;
                (n.jquery || n.nodeType) && (n = t(n).css(a), a = e);
                var u = this, d = t.type(n), p = this._rgba = [];
                return a !== e && (n = [n, a, r, l], d = "array"), "string" === d ? this.parse(s(n) || o._default) : "array" === d ? (f(c.rgba.props, function (t, e) {
                    p[e.idx] = i(n[e.idx], e)
                }), this) : "object" === d ? (n instanceof h ? f(c, function (t, e) {
                    n[e.cache] && (u[e.cache] = n[e.cache].slice())
                }) : f(c, function (e, s) {
                    var o = s.cache;
                    f(s.props, function (t, e) {
                        if (!u[o] && s.to) {
                            if ("alpha" === t || null == n[t])return;
                            u[o] = s.to(u._rgba)
                        }
                        u[o][e.idx] = i(n[t], e, !0)
                    }), u[o] && 0 > t.inArray(null, u[o].slice(0, 3)) && (u[o][3] = 1, s.from && (u._rgba = s.from(u[o])))
                }), this) : e
            }, is: function (t) {
                var i = h(t), s = !0, n = this;
                return f(c, function (t, o) {
                    var a, r = i[o.cache];
                    return r && (a = n[o.cache] || o.to && o.to(n._rgba) || [], f(o.props, function (t, i) {
                        return null != r[i.idx] ? s = r[i.idx] === a[i.idx] : e
                    })), s
                }), s
            }, _space: function () {
                var t = [], e = this;
                return f(c, function (i, s) {
                    e[s.cache] && t.push(i)
                }), t.pop()
            }, transition: function (t, e) {
                var s = h(t), n = s._space(), o = c[n], a = 0 === this.alpha() ? h("transparent") : this,
                    r = a[o.cache] || o.to(a._rgba), l = r.slice();
                return s = s[o.cache], f(o.props, function (t, n) {
                    var o = n.idx, a = r[o], h = s[o], c = u[n.type] || {};
                    null !== h && (null === a ? l[o] = h : (c.mod && (h - a > c.mod / 2 ? a += c.mod : a - h > c.mod / 2 && (a -= c.mod)), l[o] = i((h - a) * e + a, n)))
                }), this[n](l)
            }, blend: function (e) {
                if (1 === this._rgba[3])return this;
                var i = this._rgba.slice(), s = i.pop(), n = h(e)._rgba;
                return h(t.map(i, function (t, e) {
                    return (1 - s) * n[e] + s * t
                }))
            }, toRgbaString: function () {
                var e = "rgba(", i = t.map(this._rgba, function (t, e) {
                    return null == t ? e > 2 ? 1 : 0 : t
                });
                return 1 === i[3] && (i.pop(), e = "rgb("), e + i.join() + ")"
            }, toHslaString: function () {
                var e = "hsla(", i = t.map(this.hsla(), function (t, e) {
                    return null == t && (t = e > 2 ? 1 : 0), e && 3 > e && (t = Math.round(100 * t) + "%"), t
                });
                return 1 === i[3] && (i.pop(), e = "hsl("), e + i.join() + ")"
            }, toHexString: function (e) {
                var i = this._rgba.slice(), s = i.pop();
                return e && i.push(~~(255 * s)), "#" + t.map(i, function (t) {
                    return t = (t || 0).toString(16), 1 === t.length ? "0" + t : t
                }).join("")
            }, toString: function () {
                return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
            }
        }), h.fn.parse.prototype = h.fn, c.hsla.to = function (t) {
            if (null == t[0] || null == t[1] || null == t[2])return [null, null, null, t[3]];
            var e, i, s = t[0] / 255, n = t[1] / 255, o = t[2] / 255, a = t[3], r = Math.max(s, n, o),
                l = Math.min(s, n, o), h = r - l, c = r + l, u = .5 * c;
            return e = l === r ? 0 : s === r ? 60 * (n - o) / h + 360 : n === r ? 60 * (o - s) / h + 120 : 60 * (s - n) / h + 240, i = 0 === h ? 0 : .5 >= u ? h / c : h / (2 - c), [Math.round(e) % 360, i, u, null == a ? 1 : a]
        }, c.hsla.from = function (t) {
            if (null == t[0] || null == t[1] || null == t[2])return [null, null, null, t[3]];
            var e = t[0] / 360, i = t[1], s = t[2], o = t[3], a = .5 >= s ? s * (1 + i) : s + i - s * i, r = 2 * s - a;
            return [Math.round(255 * n(r, a, e + 1 / 3)), Math.round(255 * n(r, a, e)), Math.round(255 * n(r, a, e - 1 / 3)), o]
        }, f(c, function (s, n) {
            var o = n.props, a = n.cache, l = n.to, c = n.from;
            h.fn[s] = function (s) {
                if (l && !this[a] && (this[a] = l(this._rgba)), s === e)return this[a].slice();
                var n, r = t.type(s), u = "array" === r || "object" === r ? s : arguments, d = this[a].slice();
                return f(o, function (t, e) {
                    var s = u["object" === r ? t : e.idx];
                    null == s && (s = d[e.idx]), d[e.idx] = i(s, e)
                }), c ? (n = h(c(d)), n[a] = d, n) : h(d)
            }, f(o, function (e, i) {
                h.fn[e] || (h.fn[e] = function (n) {
                    var o, a = t.type(n), l = "alpha" === e ? this._hsla ? "hsla" : "rgba" : s, h = this[l](),
                        c = h[i.idx];
                    return "undefined" === a ? c : ("function" === a && (n = n.call(this, c), a = t.type(n)), null == n && i.empty ? this : ("string" === a && (o = r.exec(n), o && (n = c + parseFloat(o[2]) * ("+" === o[1] ? 1 : -1))), h[i.idx] = n, this[l](h)))
                })
            })
        }), h.hook = function (e) {
            var i = e.split(" ");
            f(i, function (e, i) {
                t.cssHooks[i] = {
                    set: function (e, n) {
                        var o, a, r = "";
                        if ("transparent" !== n && ("string" !== t.type(n) || (o = s(n)))) {
                            if (n = h(o || n), !d.rgba && 1 !== n._rgba[3]) {
                                for (a = "backgroundColor" === i ? e.parentNode : e; ("" === r || "transparent" === r) && a && a.style;)try {
                                    r = t.css(a, "backgroundColor"), a = a.parentNode
                                } catch (l) {
                                }
                                n = n.blend(r && "transparent" !== r ? r : "_default")
                            }
                            n = n.toRgbaString()
                        }
                        try {
                            e.style[i] = n
                        } catch (l) {
                        }
                    }
                }, t.fx.step[i] = function (e) {
                    e.colorInit || (e.start = h(e.elem, i), e.end = h(e.end), e.colorInit = !0), t.cssHooks[i].set(e.elem, e.start.transition(e.end, e.pos))
                }
            })
        }, h.hook(a), t.cssHooks.borderColor = {
            expand: function (t) {
                var e = {};
                return f(["Top", "Right", "Bottom", "Left"], function (i, s) {
                    e["border" + s + "Color"] = t
                }), e
            }
        }, o = t.Color.names = {
            aqua: "#00ffff",
            black: "#000000",
            blue: "#0000ff",
            fuchsia: "#ff00ff",
            gray: "#808080",
            green: "#008000",
            lime: "#00ff00",
            maroon: "#800000",
            navy: "#000080",
            olive: "#808000",
            purple: "#800080",
            red: "#ff0000",
            silver: "#c0c0c0",
            teal: "#008080",
            white: "#ffffff",
            yellow: "#ffff00",
            transparent: [null, null, null, 0],
            _default: "#ffffff"
        }
    }(n), function () {
        function e(e) {
            var i, s,
                n = e.ownerDocument.defaultView ? e.ownerDocument.defaultView.getComputedStyle(e, null) : e.currentStyle,
                o = {};
            if (n && n.length && n[0] && n[n[0]])for (s = n.length; s--;)i = n[s], "string" == typeof n[i] && (o[t.camelCase(i)] = n[i]); else for (i in n)"string" == typeof n[i] && (o[i] = n[i]);
            return o
        }

        function i(e, i) {
            var s, n, a = {};
            for (s in i)n = i[s], e[s] !== n && (o[s] || (t.fx.step[s] || !isNaN(parseFloat(n))) && (a[s] = n));
            return a
        }

        var s = ["add", "remove", "toggle"], o = {
            border: 1,
            borderBottom: 1,
            borderColor: 1,
            borderLeft: 1,
            borderRight: 1,
            borderTop: 1,
            borderWidth: 1,
            margin: 1,
            padding: 1
        };
        t.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function (e, i) {
            t.fx.step[i] = function (t) {
                ("none" !== t.end && !t.setAttr || 1 === t.pos && !t.setAttr) && (n.style(t.elem, i, t.end), t.setAttr = !0)
            }
        }), t.fn.addBack || (t.fn.addBack = function (t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }), t.effects.animateClass = function (n, o, a, r) {
            var l = t.speed(o, a, r);
            return this.queue(function () {
                var o, a = t(this), r = a.attr("class") || "", h = l.children ? a.find("*").addBack() : a;
                h = h.map(function () {
                    var i = t(this);
                    return {el: i, start: e(this)}
                }), o = function () {
                    t.each(s, function (t, e) {
                        n[e] && a[e + "Class"](n[e])
                    })
                }, o(), h = h.map(function () {
                    return this.end = e(this.el[0]), this.diff = i(this.start, this.end), this
                }), a.attr("class", r), h = h.map(function () {
                    var e = this, i = t.Deferred(), s = t.extend({}, l, {
                        queue: !1, complete: function () {
                            i.resolve(e)
                        }
                    });
                    return this.el.animate(this.diff, s), i.promise()
                }), t.when.apply(t, h.get()).done(function () {
                    o(), t.each(arguments, function () {
                        var e = this.el;
                        t.each(this.diff, function (t) {
                            e.css(t, "")
                        })
                    }), l.complete.call(a[0])
                })
            })
        }, t.fn.extend({
            addClass: function (e) {
                return function (i, s, n, o) {
                    return s ? t.effects.animateClass.call(this, {add: i}, s, n, o) : e.apply(this, arguments)
                }
            }(t.fn.addClass), removeClass: function (e) {
                return function (i, s, n, o) {
                    return arguments.length > 1 ? t.effects.animateClass.call(this, {remove: i}, s, n, o) : e.apply(this, arguments)
                }
            }(t.fn.removeClass), toggleClass: function (e) {
                return function (i, s, n, o, a) {
                    return "boolean" == typeof s || void 0 === s ? n ? t.effects.animateClass.call(this, s ? {add: i} : {remove: i}, n, o, a) : e.apply(this, arguments) : t.effects.animateClass.call(this, {toggle: i}, s, n, o)
                }
            }(t.fn.toggleClass), switchClass: function (e, i, s, n, o) {
                return t.effects.animateClass.call(this, {add: i, remove: e}, s, n, o)
            }
        })
    }(), function () {
        function n(e, i, s, n) {
            return t.isPlainObject(e) && (i = e, e = e.effect), e = {effect: e}, null == i && (i = {}), t.isFunction(i) && (n = i, s = null, i = {}), ("number" == typeof i || t.fx.speeds[i]) && (n = s, s = i, i = {}), t.isFunction(s) && (n = s, s = null), i && t.extend(e, i), s = s || i.duration, e.duration = t.fx.off ? 0 : "number" == typeof s ? s : s in t.fx.speeds ? t.fx.speeds[s] : t.fx.speeds._default, e.complete = n || i.complete, e
        }

        function o(e) {
            return !e || "number" == typeof e || t.fx.speeds[e] ? !0 : "string" != typeof e || t.effects.effect[e] ? t.isFunction(e) ? !0 : "object" != typeof e || e.effect ? !1 : !0 : !0
        }

        function a(t, e) {
            var i = e.outerWidth(), s = e.outerHeight(),
                n = /^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/,
                o = n.exec(t) || ["", 0, i, s, 0];
            return {
                top: parseFloat(o[1]) || 0,
                right: "auto" === o[2] ? i : parseFloat(o[2]),
                bottom: "auto" === o[3] ? s : parseFloat(o[3]),
                left: parseFloat(o[4]) || 0
            }
        }

        t.expr && t.expr.filters && t.expr.filters.animated && (t.expr.filters.animated = function (e) {
            return function (i) {
                return !!t(i).data(s) || e(i)
            }
        }(t.expr.filters.animated)), t.uiBackCompat !== !1 && t.extend(t.effects, {
            save: function (t, i) {
                for (var s = 0, n = i.length; n > s; s++)null !== i[s] && t.data(e + i[s], t[0].style[i[s]])
            }, restore: function (t, i) {
                for (var s, n = 0, o = i.length; o > n; n++)null !== i[n] && (s = t.data(e + i[n]), t.css(i[n], s))
            }, setMode: function (t, e) {
                return "toggle" === e && (e = t.is(":hidden") ? "show" : "hide"), e
            }, createWrapper: function (e) {
                if (e.parent().is(".ui-effects-wrapper"))return e.parent();
                var i = {width: e.outerWidth(!0), height: e.outerHeight(!0), "float": e.css("float")},
                    s = t("<div></div>").addClass("ui-effects-wrapper").css({
                        fontSize: "100%",
                        background: "transparent",
                        border: "none",
                        margin: 0,
                        padding: 0
                    }), n = {width: e.width(), height: e.height()}, o = document.activeElement;
                try {
                    o.id
                } catch (a) {
                    o = document.body
                }
                return e.wrap(s), (e[0] === o || t.contains(e[0], o)) && t(o).trigger("focus"), s = e.parent(), "static" === e.css("position") ? (s.css({position: "relative"}), e.css({position: "relative"})) : (t.extend(i, {
                    position: e.css("position"),
                    zIndex: e.css("z-index")
                }), t.each(["top", "left", "bottom", "right"], function (t, s) {
                    i[s] = e.css(s), isNaN(parseInt(i[s], 10)) && (i[s] = "auto")
                }), e.css({
                    position: "relative",
                    top: 0,
                    left: 0,
                    right: "auto",
                    bottom: "auto"
                })), e.css(n), s.css(i).show()
            }, removeWrapper: function (e) {
                var i = document.activeElement;
                return e.parent().is(".ui-effects-wrapper") && (e.parent().replaceWith(e), (e[0] === i || t.contains(e[0], i)) && t(i).trigger("focus")), e
            }
        }), t.extend(t.effects, {
            version: "1.12.1", define: function (e, i, s) {
                return s || (s = i, i = "effect"), t.effects.effect[e] = s, t.effects.effect[e].mode = i, s
            }, scaledDimensions: function (t, e, i) {
                if (0 === e)return {height: 0, width: 0, outerHeight: 0, outerWidth: 0};
                var s = "horizontal" !== i ? (e || 100) / 100 : 1, n = "vertical" !== i ? (e || 100) / 100 : 1;
                return {
                    height: t.height() * n,
                    width: t.width() * s,
                    outerHeight: t.outerHeight() * n,
                    outerWidth: t.outerWidth() * s
                }
            }, clipToBox: function (t) {
                return {
                    width: t.clip.right - t.clip.left,
                    height: t.clip.bottom - t.clip.top,
                    left: t.clip.left,
                    top: t.clip.top
                }
            }, unshift: function (t, e, i) {
                var s = t.queue();
                e > 1 && s.splice.apply(s, [1, 0].concat(s.splice(e, i))), t.dequeue()
            }, saveStyle: function (t) {
                t.data(i, t[0].style.cssText)
            }, restoreStyle: function (t) {
                t[0].style.cssText = t.data(i) || "", t.removeData(i)
            }, mode: function (t, e) {
                var i = t.is(":hidden");
                return "toggle" === e && (e = i ? "show" : "hide"), (i ? "hide" === e : "show" === e) && (e = "none"), e
            }, getBaseline: function (t, e) {
                var i, s;
                switch (t[0]) {
                    case"top":
                        i = 0;
                        break;
                    case"middle":
                        i = .5;
                        break;
                    case"bottom":
                        i = 1;
                        break;
                    default:
                        i = t[0] / e.height
                }
                switch (t[1]) {
                    case"left":
                        s = 0;
                        break;
                    case"center":
                        s = .5;
                        break;
                    case"right":
                        s = 1;
                        break;
                    default:
                        s = t[1] / e.width
                }
                return {x: s, y: i}
            }, createPlaceholder: function (i) {
                var s, n = i.css("position"), o = i.position();
                return i.css({
                    marginTop: i.css("marginTop"),
                    marginBottom: i.css("marginBottom"),
                    marginLeft: i.css("marginLeft"),
                    marginRight: i.css("marginRight")
                }).outerWidth(i.outerWidth()).outerHeight(i.outerHeight()), /^(static|relative)/.test(n) && (n = "absolute", s = t("<" + i[0].nodeName + ">").insertAfter(i).css({
                    display: /^(inline|ruby)/.test(i.css("display")) ? "inline-block" : "block",
                    visibility: "hidden",
                    marginTop: i.css("marginTop"),
                    marginBottom: i.css("marginBottom"),
                    marginLeft: i.css("marginLeft"),
                    marginRight: i.css("marginRight"),
                    "float": i.css("float")
                }).outerWidth(i.outerWidth()).outerHeight(i.outerHeight()).addClass("ui-effects-placeholder"), i.data(e + "placeholder", s)), i.css({
                    position: n,
                    left: o.left,
                    top: o.top
                }), s
            }, removePlaceholder: function (t) {
                var i = e + "placeholder", s = t.data(i);
                s && (s.remove(), t.removeData(i))
            }, cleanUp: function (e) {
                t.effects.restoreStyle(e), t.effects.removePlaceholder(e)
            }, setTransition: function (e, i, s, n) {
                return n = n || {}, t.each(i, function (t, i) {
                    var o = e.cssUnit(i);
                    o[0] > 0 && (n[i] = o[0] * s + o[1])
                }), n
            }
        }), t.fn.extend({
            effect: function () {
                function e(e) {
                    function n() {
                        l.removeData(s), t.effects.cleanUp(l), "hide" === i.mode && l.hide(), r()
                    }

                    function r() {
                        t.isFunction(h) && h.call(l[0]), t.isFunction(e) && e()
                    }

                    var l = t(this);
                    i.mode = u.shift(), t.uiBackCompat === !1 || a ? "none" === i.mode ? (l[c](), r()) : o.call(l[0], i, n) : (l.is(":hidden") ? "hide" === c : "show" === c) ? (l[c](), r()) : o.call(l[0], i, r)
                }

                var i = n.apply(this, arguments), o = t.effects.effect[i.effect], a = o.mode, r = i.queue,
                    l = r || "fx", h = i.complete, c = i.mode, u = [], d = function (e) {
                        var i = t(this), n = t.effects.mode(i, c) || a;
                        i.data(s, !0), u.push(n), a && ("show" === n || n === a && "hide" === n) && i.show(), a && "none" === n || t.effects.saveStyle(i), t.isFunction(e) && e()
                    };
                return t.fx.off || !o ? c ? this[c](i.duration, h) : this.each(function () {
                    h && h.call(this)
                }) : r === !1 ? this.each(d).each(e) : this.queue(l, d).queue(l, e)
            }, show: function (t) {
                return function (e) {
                    if (o(e))return t.apply(this, arguments);
                    var i = n.apply(this, arguments);
                    return i.mode = "show", this.effect.call(this, i)
                }
            }(t.fn.show), hide: function (t) {
                return function (e) {
                    if (o(e))return t.apply(this, arguments);
                    var i = n.apply(this, arguments);
                    return i.mode = "hide", this.effect.call(this, i)
                }
            }(t.fn.hide), toggle: function (t) {
                return function (e) {
                    if (o(e) || "boolean" == typeof e)return t.apply(this, arguments);
                    var i = n.apply(this, arguments);
                    return i.mode = "toggle", this.effect.call(this, i)
                }
            }(t.fn.toggle), cssUnit: function (e) {
                var i = this.css(e), s = [];
                return t.each(["em", "px", "%", "pt"], function (t, e) {
                    i.indexOf(e) > 0 && (s = [parseFloat(i), e])
                }), s
            }, cssClip: function (t) {
                return t ? this.css("clip", "rect(" + t.top + "px " + t.right + "px " + t.bottom + "px " + t.left + "px)") : a(this.css("clip"), this)
            }, transfer: function (e, i) {
                var s = t(this), n = t(e.to), o = "fixed" === n.css("position"), a = t("body"),
                    r = o ? a.scrollTop() : 0, l = o ? a.scrollLeft() : 0, h = n.offset(),
                    c = {top: h.top - r, left: h.left - l, height: n.innerHeight(), width: n.innerWidth()},
                    u = s.offset(),
                    d = t("<div class='ui-effects-transfer'></div>").appendTo("body").addClass(e.className).css({
                        top: u.top - r,
                        left: u.left - l,
                        height: s.innerHeight(),
                        width: s.innerWidth(),
                        position: o ? "fixed" : "absolute"
                    }).animate(c, e.duration, e.easing, function () {
                        d.remove(), t.isFunction(i) && i()
                    })
            }
        }), t.fx.step.clip = function (e) {
            e.clipInit || (e.start = t(e.elem).cssClip(), "string" == typeof e.end && (e.end = a(e.end, e.elem)), e.clipInit = !0), t(e.elem).cssClip({
                top: e.pos * (e.end.top - e.start.top) + e.start.top,
                right: e.pos * (e.end.right - e.start.right) + e.start.right,
                bottom: e.pos * (e.end.bottom - e.start.bottom) + e.start.bottom,
                left: e.pos * (e.end.left - e.start.left) + e.start.left
            })
        }
    }(), function () {
        var e = {};
        t.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function (t, i) {
            e[i] = function (e) {
                return Math.pow(e, t + 2)
            }
        }), t.extend(e, {
            Sine: function (t) {
                return 1 - Math.cos(t * Math.PI / 2)
            }, Circ: function (t) {
                return 1 - Math.sqrt(1 - t * t)
            }, Elastic: function (t) {
                return 0 === t || 1 === t ? t : -Math.pow(2, 8 * (t - 1)) * Math.sin((80 * (t - 1) - 7.5) * Math.PI / 15)
            }, Back: function (t) {
                return t * t * (3 * t - 2)
            }, Bounce: function (t) {
                for (var e, i = 4; ((e = Math.pow(2, --i)) - 1) / 11 > t;);
                return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2)
            }
        }), t.each(e, function (e, i) {
            t.easing["easeIn" + e] = i, t.easing["easeOut" + e] = function (t) {
                return 1 - i(1 - t)
            }, t.easing["easeInOut" + e] = function (t) {
                return .5 > t ? i(2 * t) / 2 : 1 - i(-2 * t + 2) / 2
            }
        })
    }(), t.effects
});
/**
 * CsDialog - Modal dialog script in vanilla JavaScript.
 *
 * @version 27-02-2020
 * @author Floris Weijenburg <https://github.com/Code-Stars>
 */
var CsDialog = function (config) {

	this.id = 'cs-dialog-' + Date.now();

	this.cloak = null;
	this.activeDialog = null;

	this.content = '';
	this.footerText = '';

	this.config = CsUtils.mergeOptions({
		debug: false,
		cache: true,
		cloak: true,
		padding: true,
		keyboard: true,
		dialogLinks: true,
		position: 'absolute',
		closeOnCloakClick: true,
		effect: {
			fade: false
		}
	}, config);

	if (this.config.cloak) {
		this.renderCloakHtml();
	}

	if (this.config.dialogLinks) {
		this.dialogLinksHandler();
	}

	if (this.config.keyboard) {
		this.keyboardHandler();
	}
};

/**
 * Bind events to the dialog links on the page.
 */
CsDialog.prototype.dialogLinksHandler = function () {

	var elements = document.querySelectorAll('[data-cs-dialog]');

	for (var i = 0; i < elements.length; i++) {

		CsUtils.addEvent(elements[i], 'click', function (event) {
			event.preventDefault();

			var target = (event.currentTarget) ? event.currentTarget : event.srcElement;
			var type = target.getAttribute('data-cs-dialog');

			switch (type) {
				case 'partial':
					this.partialHandler(target);
					break;
				case 'hidden-element':
					this.hiddenElementHandler(target);
					break;
				case 'image':
					this.imageHandler(target);
					break;
				case 'gallery':
					this.galleryHandler(target);
					break;
			}

		}.bind(this));
	}
};

/**
 * Init keyboard actions for navigating
 * through gallery images and for closing the dialog.
 */
CsDialog.prototype.keyboardHandler = function () {
	document.onkeydown = function (e) {
		switch (e.keyCode) {
			case 37:
				this.switchImageHandler(null, 'backwards');
				break;
			case 39:
				this.switchImageHandler(null, 'forwards');
				break;
			case 27:
				this.closeDialog();
				break;
		}
	}.bind(this);
};

/**
 * Handles the 'partial' type dialogs.
 *
 * @param target {object}
 */
CsDialog.prototype.partialHandler = function (target) {
	var attributes = {
		title: target.getAttribute('data-title'),
		url: target.getAttribute('data-url')
	};

	if (attributes.url !== null && attributes.url !== '' && attributes.url !== 'javascript:' && attributes.url !== '#') {
		this.openUrl(attributes.title, attributes.url);
	}
};

/**
 * Handles the 'hidden element' type dialogs.
 *
 * @param target {object}
 */
CsDialog.prototype.hiddenElementHandler = function (target) {

	var attributes = {
		id: target.getAttribute('data-id'),
		title: target.getAttribute('data-title')
	};

	if (attributes.id !== null) {
		var hiddenContent = document.getElementById(attributes.id),
			content = document.createElement('div');

		content.appendChild(hiddenContent.firstChild.cloneNode(true));

		this.content = content.innerHTML;
		this.openDialog(attributes.title);
	}
};

/**
 * Handles the 'image' type dialogs.
 * By loading its content from an image src path.
 *
 * @param target {object}
 */
CsDialog.prototype.imageHandler = function (target) {

	var attr = {
		title: target.getAttribute('data-cs-title'),
		imageUrl: target.getAttribute('data-cs-image-url')
	};

	this.config.padding = false;

	if (attr.imageUrl !== null) {
		var image = document.createElement('img');

		image.src = attr.imageUrl;
		image.className = 'cs-dialog__img';

		this.content = image.outerHTML;
		this.openDialog(attr.title);
	}
};

/**
 * Handles the 'gallery' type dialogs.
 * By loading its content from an image src path.
 *
 * @param target {object}
 */
CsDialog.prototype.galleryHandler = function (target) {

	var attr = {
		title: target.getAttribute('data-cs-title'),
		imageUrl: target.getAttribute('data-cs-image-url'),
		index: parseInt(target.getAttribute('data-cs-index'))
	};

	// disable dialog padding
	this.config.padding = false;

	if (attr.imageUrl !== null) {
		var image = document.createElement('img');

		image.src = attr.imageUrl;
		image.className = 'cs-dialog__img';

		var container = document.createElement('div');
		container.appendChild(image);

		// get gallery items
		var gallery_items = document.querySelectorAll('[data-cs-dialog="gallery"]');
		if (gallery_items.length > 1) {

			if (attr.index < gallery_items.length) {
				var nextBtn = document.createElement('a');
				nextBtn.href = 'javascript:;';
				nextBtn.className = 'cs-dialog__nav cs-dialog__nav--next';
				nextBtn.setAttribute('data-cs-index', (attr.index + 1).toString());

				var nextIcon = document.createElement('i');
				nextIcon.className = 'fas fa-angle-right';
				nextBtn.appendChild(nextIcon);

				CsUtils.addEvent(nextBtn, 'click', function (event) {
					this.switchImageHandler(event, 1);
				}.bind(this));

				container.appendChild(nextBtn);
			}

			if (attr.index > 1) {
				var prevBtn = document.createElement('a');
				prevBtn.href = 'javascript:;';
				prevBtn.className = 'cs-dialog__nav cs-dialog__nav--previous';
				prevBtn.setAttribute('data-cs-index', (attr.index - 1).toString());

				var prevIcon = document.createElement('i');
				prevIcon.className = 'fas fa-angle-left';
				prevBtn.appendChild(prevIcon);

				CsUtils.addEvent(prevBtn, 'click', function (event) {
					this.switchImageHandler(event, -1);
				}.bind(this));

				container.appendChild(prevBtn);
			}
		}

		this.content = container;

		this.openDialog(attr.title);
	}
};

/**
 * Switch image handler.
 *
 * We only fade once to open dialog, not when switching image.
 *
 * @param event
 * @param {string=} direction
 */
CsDialog.prototype.switchImageHandler = function (event, direction) {

	var target = null,
		nextElement = null,
		galleryItems = document.querySelectorAll('[data-cs-dialog="gallery"]');

	if (event) {
		// change image based on clicked nav button
		target = (event.currentTarget) ? event.currentTarget : event.srcElement;
	} else {
		// change image based on arrow keys
		target = (direction === 'backwards') ? this.activeDialog.getElementsByClassName('cs-dialog__nav--previous')[0] : this.activeDialog.getElementsByClassName('cs-dialog__nav--next')[0];
	}

	if (!target) {
		return;
	}

	for (var i = 0; i < galleryItems.length; i++) {
		var index = galleryItems[i].getAttribute('data-cs-index');
		if (target.getAttribute('data-cs-index') === index) {
			nextElement = galleryItems[i];
		}
	}

	if (nextElement !== null) {
		var cachedFade = this.config.effect.fade;

		this.config.effect.fade = false;
		this.galleryHandler(nextElement);
		this.config.effect.fade = cachedFade;
	}
};

/**
 * Loads content or URL into a dialog.
 *
 * @param title {string}
 * @param url {string}
 * @param callback {function=}
 */
CsDialog.prototype.openUrl = function (title, url, callback) {
	var self = this;

	CsUtils.get(url).then(function (response) {

		self.content = response;
		// Re-position dialog after loading dynamic content.
		self.positionDialog();
		self.openDialog(title, callback);

	}).catch(function (err) {
		console.error(err);
	});
};

/**
 * Open dialog.
 *
 * @param title {string}
 * @param callback {function=}
 */
CsDialog.prototype.openDialog = function (title, callback) {

	var self = this;
	this.title = title;

	if (typeof Promise === 'undefined') {
		CsUtils.waitForPolyfillsToLoad(function () {
			self.openDialog(title, callback);
		});
		return;
	}

	if (!self.activeDialog) {
		self.renderDialog().then(function (dialog) {

			self.positionDialog();

			if (typeof callback === 'function')
				callback();
		});
	} else {
		self.resetContent();

		self.updateActiveDialog().then(function () {

			self.positionDialog();

			if (typeof callback === 'function') {
				callback();
			}
		});
	}
};

/**
 * Creates a new dialog DOM element.
 */
CsDialog.prototype.renderDialog = function () {

	var dialog = this.renderDialogHtml(),
		body = document.getElementsByTagName('body')[0],
		obj = this,
		delay = 0;

	if (obj.config.debug) {
		delay = 500;
	}

	body.appendChild(dialog);

	this.activeDialog = dialog;

	return Promise.all(
		[
			obj.showDialog(),
			obj.appendTitle(obj.title),
			obj.appendContent(obj.content, delay)
		]).then(function () {
		return dialog;
	});
};

/**
 * Update cached dialog element in DOM.
 */
CsDialog.prototype.updateActiveDialog = function () {

	var obj = this,
		delay = 0;

	if (obj.config.debug) {
		delay = 500;
	}

	return Promise.all(
		[
			this.showDialog(),
			obj.appendTitle(obj.title),
			obj.appendContent(obj.content, delay)
		]
	).then(function () {
		return obj.activeDialog;
	});
};

/**
 * Shows the dialog that exists in the DOM.
 * Based on the settings that were set.
 */
CsDialog.prototype.showDialog = function () {

	var dialog = this.activeDialog,
		self = this;

	return new Promise(function (resolve, reject) {

		if (self.config.cloak) {
			self.openCloak();
		}
		self.positionDialog();

		dialog.style.display = 'block';

		if (!self.config.effect.fade) {

			CsUtils.runEmbeddedJs(dialog);
			dialog.style.opacity = '1';

			resolve();
		} else {
			// settings: fade
			CsUtils.fadeIn(dialog, function () {

				CsUtils.runEmbeddedJs(dialog);

				resolve();
			});
		}
	});
};

/**
 * Positions the dialog in the center of the screen.
 * Can be changed via the settings.
 */
CsDialog.prototype.positionDialog = function () {

	var positionTop = (window.pageYOffset || document.body.scrollTop) - (document.body.clientTop || 0),
		screenHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0),
		dialog = this.activeDialog;

	CsUtils.waitForElement(dialog, function () { // first wait content to be loaded in the DOM

		var maxHeight = screenHeight - screenHeight / 10;

		dialog.style.height = 'auto';  // resets to default height
		dialog.style.overflowY = 'visible';

		if (dialog.offsetHeight > maxHeight) {
			dialog.style.overflowY = 'scroll';
			dialog.style.height = maxHeight + 'px';
		}

		if (this.config.position === 'fixed') {
			positionTop = 0;
			dialog.style.position = 'fixed';
		}

		dialog.style.top = (positionTop + screenHeight / 2 - dialog.offsetHeight / 2) + 'px';

		if (this.config.debug) {
			console.log('dialog.offsetHeight: ' + dialog.offsetHeight);
			console.log('screenHeight: ' + screenHeight);
			console.log('positionTop: ' + positionTop);
			console.log('maxHeight: ' + maxHeight);
		}

	}.bind(this));
};

/**
 * Close dialog.
 */
CsDialog.prototype.closeDialog = function () {

	var dialog = this.activeDialog || null;

	if (typeof dialog !== 'undefined') {

		this.activeDialog.style.display = 'none';

		if (!this.config.cache) {

			dialog.parentNode.removeChild(dialog);

			this.activeDialog = null;
		}
		this.closeCloak();
	}
};

/**
 * Open cloak.
 */
CsDialog.prototype.openCloak = function () {

	var screenHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight,
		document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);

	if (typeof this.cloak !== 'undefined') {
		this.cloak.setAttribute('style', 'height: ' + screenHeight + 'px');
		this.cloak.className = this.cloak.className.replace(/\bhide\b/g, '');
	}
};

/**
 * Close cloak.
 */
CsDialog.prototype.closeCloak = function () {

	if (typeof this.cloak !== 'undefined') {
		if (this.cloak.className.indexOf('hide') === -1) {
			this.cloak.className += ' hide';
		}
	}
};

/**
 * Append title to existing dialog DOM element.
 *
 * @param title {string}
 */
CsDialog.prototype.appendTitle = function (title) {
	var obj = this;

	if (typeof obj.activeDialog !== 'undefined') {

		return new Promise(function (resolve, reject) {

			var headerElement = obj.activeDialog.getElementsByClassName('cs-dialog__header')[0],
				titleElement;

			if (typeof headerElement !== 'undefined') {

				titleElement = headerElement.getElementsByClassName('cs-dialog__title')[0];
				titleElement.innerHTML = title;
				resolve();

			} else {
				reject();
			}
		});
	}
};

/**
 * Append content to existing dialog DOM element.
 *
 * @param content {string}
 * @param delay
 */
CsDialog.prototype.appendContent = function (content, delay) {
	delay = delay || 0;

	var obj = this;

	if (typeof obj.activeDialog !== 'undefined') {

		return new Promise(function (resolve, reject) {

			setTimeout(function () {
				var container = obj.activeDialog.getElementsByClassName('cs-dialog__body')[0];

				if (typeof container !== 'undefined') {
					if (typeof content === 'object') {
						container.innerHTML = '';
						container.append(content);
					} else {
						container.innerHTML = content;
					}
					resolve();
				} else {
					reject();
				}
			}, delay);
		});
	}
};

/**
 * Resets the content of a cached dialog.
 */
CsDialog.prototype.resetContent = function () {

	var obj = this;

	var container = obj.activeDialog.getElementsByClassName('cs-dialog__body')[0];
	container.innerHTML = obj.renderSpinnerHtml();
};

/**
 * Render the HTML used for the dialog's cloak effect.
 */
CsDialog.prototype.renderCloakHtml = function () {

	var cloak = document.createElement('div'),
		body = document.getElementsByTagName('body')[0];

	cloak.className = 'cs-dialog-cloak hide';
	body.insertBefore(cloak, body.firstChild);

	// close dialog via cloak trigger
	if (this.config.closeOnCloakClick) {
		CsUtils.addEvent(cloak, 'click', function (event) {
			if (event.target !== this.activeDialog) {
				this.closeDialog();
			}
		}.bind(this));
	}

	this.cloak = cloak;

	return cloak;
};

/**
 * Render the container HTML used by the dialog.
 * Content gets added later.
 *
 * @returns {Element}
 */
CsDialog.prototype.renderDialogHtml = function () {

	var container = document.createElement('div'),
		containerInner = document.createElement('div'),
		containerContent = document.createElement('div'),
		header = document.createElement('header'),
		footer = document.createElement('footer');

	var headerColumn1 = document.createElement('div'),
		headerColumn2 = document.createElement('div'),
		headerTitle = document.createElement('h2'),
		headerCloseBtn = document.createElement('a'),
		headerCloseIcon = document.createElement('i');

	container.id = this.id;
	container.className = 'cs-dialog extend hide';

	if (this.config.padding) {
		container.className += ' cs-dialog--padding';
	}

	containerInner.className = 'cs-dialog__inner';
	container.appendChild(containerInner);

	header.className = 'cs-dialog__header';
	containerInner.appendChild(header);

	headerColumn1.className = 'cs-dialog__container-master';
	header.appendChild(headerColumn1);

	headerTitle.className = 'cs-dialog__title';
	headerColumn1.appendChild(headerTitle);

	headerColumn2.className = 'cs-dialog__container-slave';
	headerColumn2.style.textAlign = 'right';
	header.appendChild(headerColumn2);

	headerCloseIcon.className = 'fas fa-times';
	headerCloseBtn.appendChild(headerCloseIcon);

	headerCloseBtn.href = 'JavaScript:;';
	headerCloseBtn.className = 'cs-dialog__close-btn';
	headerColumn2.appendChild(headerCloseBtn);

	CsUtils.addEvent(headerCloseBtn, 'click', this.closeDialog.bind(this));

	containerContent.className = 'cs-dialog__body';
	containerContent.innerHTML = this.renderSpinnerHtml();
	containerInner.appendChild(containerContent);

	if (this.footerText !== '') {
		footer.className = 'cs-dialog__footer';
		footer.innerHTML = this.footerText;
		containerInner.appendChild(footer);
	}

	return container;
};

/**
 * Set footer text.
 *
 * @param text {string}
 */
CsDialog.prototype.setFooterText = function (text) {
	this.footerText = text;
};

/**
 * Load spinner HTML.
 *
 * @returns {string}
 */
CsDialog.prototype.renderSpinnerHtml = function () {
	return '<svg class="cs-dialog__spinner" viewBox="0 0 100 100" width="50" height="50"> ' +
		'<circle cx="50" cy="50" r="42" transform="rotate(-90,50,50)" />' +
		'</svg>';
};

/**
 * Opens dialog with given title and content.
 *
 * @param {string} title
 * @param {string} content
 * @param {function=} callback
 */
CsDialog.prototype.openWithContent = function (title, content, callback) {
	this.openDialog(title, function () {
		this.appendContent(content).then(function (response) {
			if (typeof callback === 'function') {
				callback();
			}
		});
	}.bind(this));
};

/**
 * CsUtils object.
 */
var CsUtils = {};

/**
 * Checks if the current browser is Internet Explorer.
 *
 * @returns {boolean}
 */
CsUtils.isIe = function () {
    return window.navigator.userAgent.indexOf("MSIE ") > 0
        || !!navigator.userAgent.match(/Trident.*rv\:11\./);
};

/**
 * Checks if the DOM is ready.
 *
 * @param callback {function}
 */
CsUtils.isDomReady = function (callback) {
    /in/.test(document.readyState) ? setTimeout(function () {
        CsUtils.isDomReady(callback);
    }, 10) : callback()
};

/**
 * Load polyfill if Promise object is not supported
 * as soon as the head tag is loaded.
 */
CsUtils.loadPolyFills = function () {
    if (typeof Promise === 'undefined' && document.getElementById('script-promise-polyfill') === null) {

        CsUtils.waitForElement(document.getElementsByTagName('head')[0], function (head) {
            var script = document.createElement("script");

            script.type = 'text/javascript';
            script.src = 'https://cdn.jsdelivr.net' +
                '/npm/promise-polyfill@8/dist/polyfill.min.js';
            script.id = 'script-promise-polyfill';

            head.insertBefore(script, head.firstChild);
        });
    }
};

/**
 * Wait for poly fill to load.
 *
 * @param callback {function}
 */
CsUtils.waitForPolyfillsToLoad = function (callback) {
    if (typeof Promise === 'undefined') {
        CsUtils.loadPolyFills();
        console.info('Waiting for Promise polyfill to load...');

        setTimeout(function () {
            CsUtils.waitForPolyfillsToLoad(callback);
        }.bind(this), 50);

    } else {
        callback();
    }
};

/**
 * Add event.
 *
 * @param obj {object}
 * @param type {string}
 * @param fn {function}
 */
CsUtils.addEvent = function (obj, type, fn) {

    if (obj.attachEvent) {
        obj['e' + type + fn] = fn;
        obj[type + fn] = function () {
            obj['e' + type + fn](window.event);
        };
        obj.attachEvent('on' + type, obj[type + fn]);
    } else
        obj.addEventListener(type, fn, false);
};

/**
 * Performs a GET HTTP-request.
 *
 * @param url {string}
 */
CsUtils.get = function (url) {

    var requestPromise = new Promise(function (resolve, reject) {

        var req = new XMLHttpRequest();
        req.open('GET', url);
        req.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

        req.onload = function () {
            if (req.status === 200) {
                resolve(req.response);
            } else {
                reject(Error(req.statusText));
            }
        };

        req.send();
    });

    return Promise.all([requestPromise]).then(function (results) {
        return results[0];
    });
};

/**
 * Wait for element.
 *
 * @param element
 * @param callback
 */
CsUtils.waitForElement = function (element, callback) {
    var ticks = setInterval(function () {
        if (element) {
            clearInterval(ticks);
            callback(element);
        }
    }, 10);
};

/**
 * Fade's an element in.
 *
 * @param el {Element}
 * @param callback {function}
 */
CsUtils.fadeIn = function (el, callback) {

    el.style.opacity = 0;

    var tick = function () {
        el.style.opacity = +el.style.opacity + 0.05;

        if (+el.style.opacity < 1) {
            (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16)
        } else {
            if (typeof callback === 'function')
                callback();
        }
    };
    tick();
};

/**
 * Merge objects.
 *
 * @param obj1 {object}
 * @param obj2 {object}
 *
 * @returns {{}}
 */
CsUtils.mergeOptions = function (obj1, obj2) {
    var obj3 = {};

    for (var attrName in obj1) {
        if (obj1.hasOwnProperty(attrName)) {
            obj3[attrName] = obj1[attrName];
        }
    }
    for (var attrName2 in obj2) {
        if (obj2.hasOwnProperty(attrName2)) {
            obj3[attrName2] = obj2[attrName2];
        }
    }
    return obj3;
};

/**
 * Run Javascript that is embedded in the dialog.
 *
 * @param {Element} container
 */
CsUtils.runEmbeddedJs = function (container) {
    if (typeof container !== 'undefined') {

        var scripts = container.getElementsByTagName('script');

        for (var i = 0; i < scripts.length; i++) {
            eval(scripts[i].text);
        }
    }
};
/* BG Srcset 1.0 */
(function () {
    'use strict';

    var BgSrcset = function () {

        this.called = false;
        this.callonce = true;
        this.compat();
    };

    BgSrcset.prototype.init = function (target, callback) {
        //retina bool
        this.retina = window.devicePixelRatio > 1;

        //storage for our elements
        this.elements = [];

        //global onload callback for imagery
        this.callback = typeof callback === 'function' ? callback : function () {
        };

        //window width, for responsive handling
        this.curwidth = this.getWidth();

        //get our input and turn it into an element list of some sort
        var elems = this.gather(target);

        //parse the element input
        for (var i = 0, l = elems.length; i < l; i++) {
            this.parse(elems[i]);
        }

        this.set();
        this.resize();
    };

    /* -----------* /
     Fix compatibility issues*
     *only down to IE8
     / *----------- */

    BgSrcset.prototype.compat = function () {
        var d = document;
        /* check for getElementsByClassName */
        if (typeof d.getElementsByClassName !== 'function') {
            d.getElementsByClassName = function (str) {
                return d.querySelectorAll('.' + str);
            };
        }

        /* check for .trim() */
        if (!String.prototype.trim) {
            String.prototype.trim = function () {
                return this.replace(/^\s+|\s+$/g, '');
            };
        }

        /*------------------------* /
         Check for Event Listener
         / *------*/
        if (!d.addEventListener) {
            this.addEvent = function (elem, evName, fn) {
                elem.attachEvent('on' + evName, function (e) {
                    fn(e || window.event);
                });
            };
        }

    };

    /* -----------* /
     Gather elements
     / *----------- */
    BgSrcset.prototype.gather = function (target) {
        var autotypes = ['HTMLCollection', 'NodeList'];
        var e = target;
        var type = (e.nodeType) ? 'Object' : Object.prototype.toString.call(e).replace(/^\[object |\]$/g, '');

        var func = 'parse' + type;

        if (autotypes.indexOf(type) > -1) {
            return e;
        }

        if (this[func]) {
            return this[func](e);
        }

        return [];
    };

    BgSrcset.prototype.parseObject = function (target) {
        return (target.nodeType) ? [target] : [];
    };

    BgSrcset.prototype.parseArray = function (target) {
        return target;
    };

    BgSrcset.prototype.parseString = function (target) {

        var d = document;
        var e = target.trim();
        var sel = e[0];
        var elems = [];

        switch (true) {
            /* class */
            case sel === '.':
                elems = d.getElementsByClassName(e.substring(1));
                break;
            /* id */
            case sel === '#':
                elems.push(d.getElementById(e.substring(1)));
                break;
            /* tag */
            case /^[a-zA-Z]+$/.test(e):
                elems = d.getElementsByTagName(e);
                break;
            /* unknown */
            default:
                elems = [];
        }

        return elems;
    };

    /* -----------* /
     Parse datasrc
     / *----------- */
    BgSrcset.prototype.parse = function (obj) {
        //our data to parase
        var bgss = obj.getAttribute('data-bg-srcset');
        /* exit if no attribute */
        if (attr === null) {
            return false;
        }

        /* create new element object */
        this.elements.push({});

        /* split up sets */
        var set = bgss.split(',');
        var attr = '';
        var curelem = this.elements[this.elements.length - 1];


        curelem.node = obj;
        curelem.srcset = [];

        /* loop through sets to define breakpoints */
        for (var i = 0, l = set.length; i < l; i++) {
            curelem.srcset.push({});
            attr = set[i].trim();
            var attrs = attr.split(' ');
            var a;
            var e;
            var t;
            /* since we can't know the order of the values, starting another loop */
            for (var attrc = 0, attrl = attrs.length; attrc < attrl; attrc++) {
                a = attrs[attrc];
                e = curelem.srcset[i]; //current attribute
                t = a.length - 1;
                switch (true) {
                    case a.trim() === "":
                        //in case of extra white spaces
                        continue;
                    case a[t] !== 'w' && a[a.length - 1] !== 'x':
                        e.src = a;
                        break;
                    case a[t] === 'w':
                        e.width = parseInt(a.slice(0, -1));
                        break;
                    case a[t] === 'x':
                        e.retina = ( parseInt(a.slice(0, -1)) > 1);
                        break;
                }
                if (!e.width) {
                    e.width = Number.POSITIVE_INFINITY;
                } //set to the top
                if (!e.retina) {
                    e.retina = false;
                }
            }
        }
    };

    /* -----------* /
     Set image
     / *----------- */
    BgSrcset.prototype.set = function () {
        for (var i = 0, l = this.elements.length; i < l; i++) {
            this.setSingle(i);
        }
    };

    BgSrcset.prototype.setSingle = function (id) {
        var width = 0,
            elem = this.elements[id],
            comparray = [],
            best = 0,
            _this = this;

        width = this.getWidth(); //elem.node.offsetWidth;

        elem.srcset = elem.srcset.sort(dynamicSort("width"));

        for (var i = 0, l = elem.srcset.length; i < l; i++) {
            if (elem.srcset[i].width < width) {
                continue;
            }
            comparray.push(elem.srcset[i]);
        }
        if (comparray.length === 0) {
            comparray.push(elem.srcset[elem.srcset.length - 1]);
        }

        best = comparray[0];

        if (comparray.length > 1 && comparray[0].width === comparray[1].width) {
            best = (comparray[0].retina !== this.retina) ? comparray[1] : comparray[0];
        }

        if (best.src !== undefined && best.src !== 'null') {
            var img = new Image();
            var done = false;

            img.onload = img.onreadystatechange = function () {
                if (!done && (!this.readyState ||
                    this.readyState === "loaded" || this.readyState === "complete")) {
                    done = true;

                    elem.node.style.backgroundImage = "url('" + best.src + "')";

                    /* only fire the callback on initial load, not resize events */
                    if (!_this.called) {

                        _this.callback(elem);
                        _this.called = _this.callonce;

                    }

                }

            };

            img.src = best.src;
        } else {
            elem.node.style.backgroundImage = "";
        }


    };

    /* -----------* /
     Handle Resize
     / *----------- */
    BgSrcset.prototype.resize = function () {
        var _this = this,
            resizeTimer = setTimeout(function () {
            }, 0);

        this.addEvent(window, 'resize', function () {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(function () {
                var w = _this.getWidth();
                if (w !== _this.curwidth) {
                    _this.curwidth = w;
                    _this.set();
                }
            }, 250);
        });
    };

    BgSrcset.prototype.addEvent = function (elem, evName, fn) {
        elem.addEventListener(evName, fn, false);
    };

    BgSrcset.prototype.getWidth = function () {
        var w, d, e, g;
        w = window;
        d = document;
        e = d.documentElement;
        g = d.getElementsByTagName('body')[0];

        return w.innerWidth || e.clientWidth || g.clientWidth;
    };

    function dynamicSort(property) {
        var sortOrder = 1;
        if (property[0] === "-") {
            sortOrder = -1;
            property = property.substr(1);
        }
        return function (a, b) {
            var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
            return result * sortOrder;
        };
    }

    window.BgSrcset = BgSrcset;
})();

/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.8.0
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
/* global window, document, define, jQuery, setInterval, clearInterval */
;(function(factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports !== 'undefined') {
        module.exports = factory(require('jquery'));
    } else {
        factory(jQuery);
    }

}(function($) {
    'use strict';
    var Slick = window.Slick || {};

    Slick = (function() {

        var instanceUid = 0;

        function Slick(element, settings) {

            var _ = this, dataSettings;

            _.defaults = {
                accessibility: true,
                adaptiveHeight: false,
                appendArrows: $(element),
                appendDots: $(element),
                arrows: true,
                asNavFor: null,
                prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                autoplay: false,
                autoplaySpeed: 3000,
                centerMode: false,
                centerPadding: '50px',
                cssEase: 'ease',
                customPaging: function(slider, i) {
                    return $('<button type="button" />').text(i + 1);
                },
                dots: false,
                dotsClass: 'slick-dots',
                draggable: true,
                easing: 'linear',
                edgeFriction: 0.35,
                fade: false,
                focusOnSelect: false,
                focusOnChange: false,
                infinite: true,
                initialSlide: 0,
                lazyLoad: 'ondemand',
                mobileFirst: false,
                pauseOnHover: true,
                pauseOnFocus: true,
                pauseOnDotsHover: false,
                respondTo: 'window',
                responsive: null,
                rows: 1,
                rtl: false,
                slide: '',
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: true,
                swipeToSlide: false,
                touchMove: true,
                touchThreshold: 5,
                useCSS: true,
                useTransform: true,
                variableWidth: false,
                vertical: false,
                verticalSwiping: false,
                waitForAnimate: true,
                zIndex: 1000
            };

            _.initials = {
                animating: false,
                dragging: false,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                scrolling: false,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: false,
                slideOffset: 0,
                swipeLeft: null,
                swiping: false,
                $list: null,
                touchObject: {},
                transformsEnabled: false,
                unslicked: false
            };

            $.extend(_, _.initials);

            _.activeBreakpoint = null;
            _.animType = null;
            _.animProp = null;
            _.breakpoints = [];
            _.breakpointSettings = [];
            _.cssTransitions = false;
            _.focussed = false;
            _.interrupted = false;
            _.hidden = 'hidden';
            _.paused = true;
            _.positionProp = null;
            _.respondTo = null;
            _.rowCount = 1;
            _.shouldClick = true;
            _.$slider = $(element);
            _.$slidesCache = null;
            _.transformType = null;
            _.transitionType = null;
            _.visibilityChange = 'visibilitychange';
            _.windowWidth = 0;
            _.windowTimer = null;

            dataSettings = $(element).data('slick') || {};

            _.options = $.extend({}, _.defaults, settings, dataSettings);

            _.currentSlide = _.options.initialSlide;

            _.originalSettings = _.options;

            if (typeof document.mozHidden !== 'undefined') {
                _.hidden = 'mozHidden';
                _.visibilityChange = 'mozvisibilitychange';
            } else if (typeof document.webkitHidden !== 'undefined') {
                _.hidden = 'webkitHidden';
                _.visibilityChange = 'webkitvisibilitychange';
            }

            _.autoPlay = $.proxy(_.autoPlay, _);
            _.autoPlayClear = $.proxy(_.autoPlayClear, _);
            _.autoPlayIterator = $.proxy(_.autoPlayIterator, _);
            _.changeSlide = $.proxy(_.changeSlide, _);
            _.clickHandler = $.proxy(_.clickHandler, _);
            _.selectHandler = $.proxy(_.selectHandler, _);
            _.setPosition = $.proxy(_.setPosition, _);
            _.swipeHandler = $.proxy(_.swipeHandler, _);
            _.dragHandler = $.proxy(_.dragHandler, _);
            _.keyHandler = $.proxy(_.keyHandler, _);

            _.instanceUid = instanceUid++;

            // A simple way to check for HTML strings
            // Strict HTML recognition (must start with <)
            // Extracted from jQuery v1.11 source
            _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;


            _.registerBreakpoints();
            _.init(true);

        }

        return Slick;

    }());

    Slick.prototype.activateADA = function() {
        var _ = this;

        _.$slideTrack.find('.slick-active').attr({
            'aria-hidden': 'false'
        }).find('a, input, button, select').attr({
            'tabindex': '0'
        });

    };

    Slick.prototype.addSlide = Slick.prototype.slickAdd = function(markup, index, addBefore) {

        var _ = this;

        if (typeof(index) === 'boolean') {
            addBefore = index;
            index = null;
        } else if (index < 0 || (index >= _.slideCount)) {
            return false;
        }

        _.unload();

        if (typeof(index) === 'number') {
            if (index === 0 && _.$slides.length === 0) {
                $(markup).appendTo(_.$slideTrack);
            } else if (addBefore) {
                $(markup).insertBefore(_.$slides.eq(index));
            } else {
                $(markup).insertAfter(_.$slides.eq(index));
            }
        } else {
            if (addBefore === true) {
                $(markup).prependTo(_.$slideTrack);
            } else {
                $(markup).appendTo(_.$slideTrack);
            }
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slides.each(function(index, element) {
            $(element).attr('data-slick-index', index);
        });

        _.$slidesCache = _.$slides;

        _.reinit();

    };

    Slick.prototype.animateHeight = function() {
        var _ = this;
        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.animate({
                height: targetHeight
            }, _.options.speed);
        }
    };

    Slick.prototype.animateSlide = function(targetLeft, callback) {

        var animProps = {},
            _ = this;

        _.animateHeight();

        if (_.options.rtl === true && _.options.vertical === false) {
            targetLeft = -targetLeft;
        }
        if (_.transformsEnabled === false) {
            if (_.options.vertical === false) {
                _.$slideTrack.animate({
                    left: targetLeft
                }, _.options.speed, _.options.easing, callback);
            } else {
                _.$slideTrack.animate({
                    top: targetLeft
                }, _.options.speed, _.options.easing, callback);
            }

        } else {

            if (_.cssTransitions === false) {
                if (_.options.rtl === true) {
                    _.currentLeft = -(_.currentLeft);
                }
                $({
                    animStart: _.currentLeft
                }).animate({
                    animStart: targetLeft
                }, {
                    duration: _.options.speed,
                    easing: _.options.easing,
                    step: function(now) {
                        now = Math.ceil(now);
                        if (_.options.vertical === false) {
                            animProps[_.animType] = 'translate(' +
                                now + 'px, 0px)';
                            _.$slideTrack.css(animProps);
                        } else {
                            animProps[_.animType] = 'translate(0px,' +
                                now + 'px)';
                            _.$slideTrack.css(animProps);
                        }
                    },
                    complete: function() {
                        if (callback) {
                            callback.call();
                        }
                    }
                });

            } else {

                _.applyTransition();
                targetLeft = Math.ceil(targetLeft);

                if (_.options.vertical === false) {
                    animProps[_.animType] = 'translate3d(' + targetLeft + 'px, 0px, 0px)';
                } else {
                    animProps[_.animType] = 'translate3d(0px,' + targetLeft + 'px, 0px)';
                }
                _.$slideTrack.css(animProps);

                if (callback) {
                    setTimeout(function() {

                        _.disableTransition();

                        callback.call();
                    }, _.options.speed);
                }

            }

        }

    };

    Slick.prototype.getNavTarget = function() {

        var _ = this,
            asNavFor = _.options.asNavFor;

        if ( asNavFor && asNavFor !== null ) {
            asNavFor = $(asNavFor).not(_.$slider);
        }

        return asNavFor;

    };

    Slick.prototype.asNavFor = function(index) {

        var _ = this,
            asNavFor = _.getNavTarget();

        if ( asNavFor !== null && typeof asNavFor === 'object' ) {
            asNavFor.each(function() {
                var target = $(this).slick('getSlick');
                if(!target.unslicked) {
                    target.slideHandler(index, true);
                }
            });
        }

    };

    Slick.prototype.applyTransition = function(slide) {

        var _ = this,
            transition = {};

        if (_.options.fade === false) {
            transition[_.transitionType] = _.transformType + ' ' + _.options.speed + 'ms ' + _.options.cssEase;
        } else {
            transition[_.transitionType] = 'opacity ' + _.options.speed + 'ms ' + _.options.cssEase;
        }

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }

    };

    Slick.prototype.autoPlay = function() {

        var _ = this;

        _.autoPlayClear();

        if ( _.slideCount > _.options.slidesToShow ) {
            _.autoPlayTimer = setInterval( _.autoPlayIterator, _.options.autoplaySpeed );
        }

    };

    Slick.prototype.autoPlayClear = function() {

        var _ = this;

        if (_.autoPlayTimer) {
            clearInterval(_.autoPlayTimer);
        }

    };

    Slick.prototype.autoPlayIterator = function() {

        var _ = this,
            slideTo = _.currentSlide + _.options.slidesToScroll;

        if ( !_.paused && !_.interrupted && !_.focussed ) {

            if ( _.options.infinite === false ) {

                if ( _.direction === 1 && ( _.currentSlide + 1 ) === ( _.slideCount - 1 )) {
                    _.direction = 0;
                }

                else if ( _.direction === 0 ) {

                    slideTo = _.currentSlide - _.options.slidesToScroll;

                    if ( _.currentSlide - 1 === 0 ) {
                        _.direction = 1;
                    }

                }

            }

            _.slideHandler( slideTo );

        }

    };

    Slick.prototype.buildArrows = function() {

        var _ = this;

        if (_.options.arrows === true ) {

            _.$prevArrow = $(_.options.prevArrow).addClass('slick-arrow');
            _.$nextArrow = $(_.options.nextArrow).addClass('slick-arrow');

            if( _.slideCount > _.options.slidesToShow ) {

                _.$prevArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');
                _.$nextArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');

                if (_.htmlExpr.test(_.options.prevArrow)) {
                    _.$prevArrow.prependTo(_.options.appendArrows);
                }

                if (_.htmlExpr.test(_.options.nextArrow)) {
                    _.$nextArrow.appendTo(_.options.appendArrows);
                }

                if (_.options.infinite !== true) {
                    _.$prevArrow
                        .addClass('slick-disabled')
                        .attr('aria-disabled', 'true');
                }

            } else {

                _.$prevArrow.add( _.$nextArrow )

                    .addClass('slick-hidden')
                    .attr({
                        'aria-disabled': 'true',
                        'tabindex': '-1'
                    });

            }

        }

    };

    Slick.prototype.buildDots = function() {

        var _ = this,
            i, dot;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$slider.addClass('slick-dotted');

            dot = $('<ul />').addClass(_.options.dotsClass);

            for (i = 0; i <= _.getDotCount(); i += 1) {
                dot.append($('<li />').append(_.options.customPaging.call(this, _, i)));
            }

            _.$dots = dot.appendTo(_.options.appendDots);

            _.$dots.find('li').first().addClass('slick-active');

        }

    };

    Slick.prototype.buildOut = function() {

        var _ = this;

        _.$slides =
            _.$slider
                .children( _.options.slide + ':not(.slick-cloned)')
                .addClass('slick-slide');

        _.slideCount = _.$slides.length;

        _.$slides.each(function(index, element) {
            $(element)
                .attr('data-slick-index', index)
                .data('originalStyling', $(element).attr('style') || '');
        });

        _.$slider.addClass('slick-slider');

        _.$slideTrack = (_.slideCount === 0) ?
            $('<div class="slick-track"/>').appendTo(_.$slider) :
            _.$slides.wrapAll('<div class="slick-track"/>').parent();

        _.$list = _.$slideTrack.wrap(
            '<div class="slick-list"/>').parent();
        _.$slideTrack.css('opacity', 0);

        if (_.options.centerMode === true || _.options.swipeToSlide === true) {
            _.options.slidesToScroll = 1;
        }

        $('img[data-lazy]', _.$slider).not('[src]').addClass('slick-loading');

        _.setupInfinite();

        _.buildArrows();

        _.buildDots();

        _.updateDots();


        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

        if (_.options.draggable === true) {
            _.$list.addClass('draggable');
        }

    };

    Slick.prototype.buildRows = function() {

        var _ = this, a, b, c, newSlides, numOfSlides, originalSlides,slidesPerSection;

        newSlides = document.createDocumentFragment();
        originalSlides = _.$slider.children();

        if(_.options.rows > 0) {

            slidesPerSection = _.options.slidesPerRow * _.options.rows;
            numOfSlides = Math.ceil(
                originalSlides.length / slidesPerSection
            );

            for(a = 0; a < numOfSlides; a++){
                var slide = document.createElement('div');
                for(b = 0; b < _.options.rows; b++) {
                    var row = document.createElement('div');
                    for(c = 0; c < _.options.slidesPerRow; c++) {
                        var target = (a * slidesPerSection + ((b * _.options.slidesPerRow) + c));
                        if (originalSlides.get(target)) {
                            row.appendChild(originalSlides.get(target));
                        }
                    }
                    slide.appendChild(row);
                }
                newSlides.appendChild(slide);
            }

            _.$slider.empty().append(newSlides);
            _.$slider.children().children().children()
                .css({
                    'width':(100 / _.options.slidesPerRow) + '%',
                    'display': 'inline-block'
                });

        }

    };

    Slick.prototype.checkResponsive = function(initial, forceUpdate) {

        var _ = this,
            breakpoint, targetBreakpoint, respondToWidth, triggerBreakpoint = false;
        var sliderWidth = _.$slider.width();
        var windowWidth = window.innerWidth || $(window).width();

        if (_.respondTo === 'window') {
            respondToWidth = windowWidth;
        } else if (_.respondTo === 'slider') {
            respondToWidth = sliderWidth;
        } else if (_.respondTo === 'min') {
            respondToWidth = Math.min(windowWidth, sliderWidth);
        }

        if ( _.options.responsive &&
            _.options.responsive.length &&
            _.options.responsive !== null) {

            targetBreakpoint = null;

            for (breakpoint in _.breakpoints) {
                if (_.breakpoints.hasOwnProperty(breakpoint)) {
                    if (_.originalSettings.mobileFirst === false) {
                        if (respondToWidth < _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    } else {
                        if (respondToWidth > _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    }
                }
            }

            if (targetBreakpoint !== null) {
                if (_.activeBreakpoint !== null) {
                    if (targetBreakpoint !== _.activeBreakpoint || forceUpdate) {
                        _.activeBreakpoint =
                            targetBreakpoint;
                        if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                            _.unslick(targetBreakpoint);
                        } else {
                            _.options = $.extend({}, _.originalSettings,
                                _.breakpointSettings[
                                    targetBreakpoint]);
                            if (initial === true) {
                                _.currentSlide = _.options.initialSlide;
                            }
                            _.refresh(initial);
                        }
                        triggerBreakpoint = targetBreakpoint;
                    }
                } else {
                    _.activeBreakpoint = targetBreakpoint;
                    if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                        _.unslick(targetBreakpoint);
                    } else {
                        _.options = $.extend({}, _.originalSettings,
                            _.breakpointSettings[
                                targetBreakpoint]);
                        if (initial === true) {
                            _.currentSlide = _.options.initialSlide;
                        }
                        _.refresh(initial);
                    }
                    triggerBreakpoint = targetBreakpoint;
                }
            } else {
                if (_.activeBreakpoint !== null) {
                    _.activeBreakpoint = null;
                    _.options = _.originalSettings;
                    if (initial === true) {
                        _.currentSlide = _.options.initialSlide;
                    }
                    _.refresh(initial);
                    triggerBreakpoint = targetBreakpoint;
                }
            }

            // only trigger breakpoints during an actual break. not on initialize.
            if( !initial && triggerBreakpoint !== false ) {
                _.$slider.trigger('breakpoint', [_, triggerBreakpoint]);
            }
        }

    };

    Slick.prototype.changeSlide = function(event, dontAnimate) {

        var _ = this,
            $target = $(event.currentTarget),
            indexOffset, slideOffset, unevenOffset;

        // If target is a link, prevent default action.
        if($target.is('a')) {
            event.preventDefault();
        }

        // If target is not the <li> element (ie: a child), find the <li>.
        if(!$target.is('li')) {
            $target = $target.closest('li');
        }

        unevenOffset = (_.slideCount % _.options.slidesToScroll !== 0);
        indexOffset = unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll;

        switch (event.data.message) {

            case 'previous':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide - slideOffset, false, dontAnimate);
                }
                break;

            case 'next':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide + slideOffset, false, dontAnimate);
                }
                break;

            case 'index':
                var index = event.data.index === 0 ? 0 :
                    event.data.index || $target.index() * _.options.slidesToScroll;

                _.slideHandler(_.checkNavigable(index), false, dontAnimate);
                $target.children().trigger('focus');
                break;

            default:
                return;
        }

    };

    Slick.prototype.checkNavigable = function(index) {

        var _ = this,
            navigables, prevNavigable;

        navigables = _.getNavigableIndexes();
        prevNavigable = 0;
        if (index > navigables[navigables.length - 1]) {
            index = navigables[navigables.length - 1];
        } else {
            for (var n in navigables) {
                if (index < navigables[n]) {
                    index = prevNavigable;
                    break;
                }
                prevNavigable = navigables[n];
            }
        }

        return index;
    };

    Slick.prototype.cleanUpEvents = function() {

        var _ = this;

        if (_.options.dots && _.$dots !== null) {

            $('li', _.$dots)
                .off('click.slick', _.changeSlide)
                .off('mouseenter.slick', $.proxy(_.interrupt, _, true))
                .off('mouseleave.slick', $.proxy(_.interrupt, _, false));

            if (_.options.accessibility === true) {
                _.$dots.off('keydown.slick', _.keyHandler);
            }
        }

        _.$slider.off('focus.slick blur.slick');

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow && _.$prevArrow.off('click.slick', _.changeSlide);
            _.$nextArrow && _.$nextArrow.off('click.slick', _.changeSlide);

            if (_.options.accessibility === true) {
                _.$prevArrow && _.$prevArrow.off('keydown.slick', _.keyHandler);
                _.$nextArrow && _.$nextArrow.off('keydown.slick', _.keyHandler);
            }
        }

        _.$list.off('touchstart.slick mousedown.slick', _.swipeHandler);
        _.$list.off('touchmove.slick mousemove.slick', _.swipeHandler);
        _.$list.off('touchend.slick mouseup.slick', _.swipeHandler);
        _.$list.off('touchcancel.slick mouseleave.slick', _.swipeHandler);

        _.$list.off('click.slick', _.clickHandler);

        $(document).off(_.visibilityChange, _.visibility);

        _.cleanUpSlideEvents();

        if (_.options.accessibility === true) {
            _.$list.off('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().off('click.slick', _.selectHandler);
        }

        $(window).off('orientationchange.slick.slick-' + _.instanceUid, _.orientationChange);

        $(window).off('resize.slick.slick-' + _.instanceUid, _.resize);

        $('[draggable!=true]', _.$slideTrack).off('dragstart', _.preventDefault);

        $(window).off('load.slick.slick-' + _.instanceUid, _.setPosition);

    };

    Slick.prototype.cleanUpSlideEvents = function() {

        var _ = this;

        _.$list.off('mouseenter.slick', $.proxy(_.interrupt, _, true));
        _.$list.off('mouseleave.slick', $.proxy(_.interrupt, _, false));

    };

    Slick.prototype.cleanUpRows = function() {

        var _ = this, originalSlides;

        if(_.options.rows > 0) {
            originalSlides = _.$slides.children().children();
            originalSlides.removeAttr('style');
            _.$slider.empty().append(originalSlides);
        }

    };

    Slick.prototype.clickHandler = function(event) {

        var _ = this;

        if (_.shouldClick === false) {
            event.stopImmediatePropagation();
            event.stopPropagation();
            event.preventDefault();
        }

    };

    Slick.prototype.destroy = function(refresh) {

        var _ = this;

        _.autoPlayClear();

        _.touchObject = {};

        _.cleanUpEvents();

        $('.slick-cloned', _.$slider).detach();

        if (_.$dots) {
            _.$dots.remove();
        }

        if ( _.$prevArrow && _.$prevArrow.length ) {

            _.$prevArrow
                .removeClass('slick-disabled slick-arrow slick-hidden')
                .removeAttr('aria-hidden aria-disabled tabindex')
                .css('display','');

            if ( _.htmlExpr.test( _.options.prevArrow )) {
                _.$prevArrow.remove();
            }
        }

        if ( _.$nextArrow && _.$nextArrow.length ) {

            _.$nextArrow
                .removeClass('slick-disabled slick-arrow slick-hidden')
                .removeAttr('aria-hidden aria-disabled tabindex')
                .css('display','');

            if ( _.htmlExpr.test( _.options.nextArrow )) {
                _.$nextArrow.remove();
            }
        }


        if (_.$slides) {

            _.$slides
                .removeClass('slick-slide slick-active slick-center slick-visible slick-current')
                .removeAttr('aria-hidden')
                .removeAttr('data-slick-index')
                .each(function(){
                    $(this).attr('style', $(this).data('originalStyling'));
                });

            _.$slideTrack.children(this.options.slide).detach();

            _.$slideTrack.detach();

            _.$list.detach();

            _.$slider.append(_.$slides);
        }

        _.cleanUpRows();

        _.$slider.removeClass('slick-slider');
        _.$slider.removeClass('slick-initialized');
        _.$slider.removeClass('slick-dotted');

        _.unslicked = true;

        if(!refresh) {
            _.$slider.trigger('destroy', [_]);
        }

    };

    Slick.prototype.disableTransition = function(slide) {

        var _ = this,
            transition = {};

        transition[_.transitionType] = '';

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }

    };

    Slick.prototype.fadeSlide = function(slideIndex, callback) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).css({
                zIndex: _.options.zIndex
            });

            _.$slides.eq(slideIndex).animate({
                opacity: 1
            }, _.options.speed, _.options.easing, callback);

        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 1,
                zIndex: _.options.zIndex
            });

            if (callback) {
                setTimeout(function() {

                    _.disableTransition(slideIndex);

                    callback.call();
                }, _.options.speed);
            }

        }

    };

    Slick.prototype.fadeSlideOut = function(slideIndex) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).animate({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            }, _.options.speed, _.options.easing);

        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            });

        }

    };

    Slick.prototype.filterSlides = Slick.prototype.slickFilter = function(filter) {

        var _ = this;

        if (filter !== null) {

            _.$slidesCache = _.$slides;

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.filter(filter).appendTo(_.$slideTrack);

            _.reinit();

        }

    };

    Slick.prototype.focusHandler = function() {

        var _ = this;

        _.$slider
            .off('focus.slick blur.slick')
            .on('focus.slick blur.slick', '*', function(event) {

            event.stopImmediatePropagation();
            var $sf = $(this);

            setTimeout(function() {

                if( _.options.pauseOnFocus ) {
                    _.focussed = $sf.is(':focus');
                    _.autoPlay();
                }

            }, 0);

        });
    };

    Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function() {

        var _ = this;
        return _.currentSlide;

    };

    Slick.prototype.getDotCount = function() {

        var _ = this;

        var breakPoint = 0;
        var counter = 0;
        var pagerQty = 0;

        if (_.options.infinite === true) {
            if (_.slideCount <= _.options.slidesToShow) {
                 ++pagerQty;
            } else {
                while (breakPoint < _.slideCount) {
                    ++pagerQty;
                    breakPoint = counter + _.options.slidesToScroll;
                    counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
                }
            }
        } else if (_.options.centerMode === true) {
            pagerQty = _.slideCount;
        } else if(!_.options.asNavFor) {
            pagerQty = 1 + Math.ceil((_.slideCount - _.options.slidesToShow) / _.options.slidesToScroll);
        }else {
            while (breakPoint < _.slideCount) {
                ++pagerQty;
                breakPoint = counter + _.options.slidesToScroll;
                counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
            }
        }

        return pagerQty - 1;

    };

    Slick.prototype.getLeft = function(slideIndex) {

        var _ = this,
            targetLeft,
            verticalHeight,
            verticalOffset = 0,
            targetSlide,
            coef;

        _.slideOffset = 0;
        verticalHeight = _.$slides.first().outerHeight(true);

        if (_.options.infinite === true) {
            if (_.slideCount > _.options.slidesToShow) {
                _.slideOffset = (_.slideWidth * _.options.slidesToShow) * -1;
                coef = -1

                if (_.options.vertical === true && _.options.centerMode === true) {
                    if (_.options.slidesToShow === 2) {
                        coef = -1.5;
                    } else if (_.options.slidesToShow === 1) {
                        coef = -2
                    }
                }
                verticalOffset = (verticalHeight * _.options.slidesToShow) * coef;
            }
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow) {
                    if (slideIndex > _.slideCount) {
                        _.slideOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth) * -1;
                        verticalOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight) * -1;
                    } else {
                        _.slideOffset = ((_.slideCount % _.options.slidesToScroll) * _.slideWidth) * -1;
                        verticalOffset = ((_.slideCount % _.options.slidesToScroll) * verticalHeight) * -1;
                    }
                }
            }
        } else {
            if (slideIndex + _.options.slidesToShow > _.slideCount) {
                _.slideOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * _.slideWidth;
                verticalOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * verticalHeight;
            }
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.slideOffset = 0;
            verticalOffset = 0;
        }

        if (_.options.centerMode === true && _.slideCount <= _.options.slidesToShow) {
            _.slideOffset = ((_.slideWidth * Math.floor(_.options.slidesToShow)) / 2) - ((_.slideWidth * _.slideCount) / 2);
        } else if (_.options.centerMode === true && _.options.infinite === true) {
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth;
        } else if (_.options.centerMode === true) {
            _.slideOffset = 0;
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2);
        }

        if (_.options.vertical === false) {
            targetLeft = ((slideIndex * _.slideWidth) * -1) + _.slideOffset;
        } else {
            targetLeft = ((slideIndex * verticalHeight) * -1) + verticalOffset;
        }

        if (_.options.variableWidth === true) {

            if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
            } else {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow);
            }

            if (_.options.rtl === true) {
                if (targetSlide[0]) {
                    targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                } else {
                    targetLeft =  0;
                }
            } else {
                targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
            }

            if (_.options.centerMode === true) {
                if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
                } else {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow + 1);
                }

                if (_.options.rtl === true) {
                    if (targetSlide[0]) {
                        targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                    } else {
                        targetLeft =  0;
                    }
                } else {
                    targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
                }

                targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2;
            }
        }

        return targetLeft;

    };

    Slick.prototype.getOption = Slick.prototype.slickGetOption = function(option) {

        var _ = this;

        return _.options[option];

    };

    Slick.prototype.getNavigableIndexes = function() {

        var _ = this,
            breakPoint = 0,
            counter = 0,
            indexes = [],
            max;

        if (_.options.infinite === false) {
            max = _.slideCount;
        } else {
            breakPoint = _.options.slidesToScroll * -1;
            counter = _.options.slidesToScroll * -1;
            max = _.slideCount * 2;
        }

        while (breakPoint < max) {
            indexes.push(breakPoint);
            breakPoint = counter + _.options.slidesToScroll;
            counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
        }

        return indexes;

    };

    Slick.prototype.getSlick = function() {

        return this;

    };

    Slick.prototype.getSlideCount = function() {

        var _ = this,
            slidesTraversed, swipedSlide, centerOffset;

        centerOffset = _.options.centerMode === true ? _.slideWidth * Math.floor(_.options.slidesToShow / 2) : 0;

        if (_.options.swipeToSlide === true) {
            _.$slideTrack.find('.slick-slide').each(function(index, slide) {
                if (slide.offsetLeft - centerOffset + ($(slide).outerWidth() / 2) > (_.swipeLeft * -1)) {
                    swipedSlide = slide;
                    return false;
                }
            });

            slidesTraversed = Math.abs($(swipedSlide).attr('data-slick-index') - _.currentSlide) || 1;

            return slidesTraversed;

        } else {
            return _.options.slidesToScroll;
        }

    };

    Slick.prototype.goTo = Slick.prototype.slickGoTo = function(slide, dontAnimate) {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'index',
                index: parseInt(slide)
            }
        }, dontAnimate);

    };

    Slick.prototype.init = function(creation) {

        var _ = this;

        if (!$(_.$slider).hasClass('slick-initialized')) {

            $(_.$slider).addClass('slick-initialized');

            _.buildRows();
            _.buildOut();
            _.setProps();
            _.startLoad();
            _.loadSlider();
            _.initializeEvents();
            _.updateArrows();
            _.updateDots();
            _.checkResponsive(true);
            _.focusHandler();

        }

        if (creation) {
            _.$slider.trigger('init', [_]);
        }

        if (_.options.accessibility === true) {
            _.initADA();
        }

        if ( _.options.autoplay ) {

            _.paused = false;
            _.autoPlay();

        }

    };

    Slick.prototype.initADA = function() {
        var _ = this,
                numDotGroups = Math.ceil(_.slideCount / _.options.slidesToShow),
                tabControlIndexes = _.getNavigableIndexes().filter(function(val) {
                    return (val >= 0) && (val < _.slideCount);
                });

        _.$slides.add(_.$slideTrack.find('.slick-cloned')).attr({
            'aria-hidden': 'true',
            'tabindex': '-1'
        }).find('a, input, button, select').attr({
            'tabindex': '-1'
        });

        if (_.$dots !== null) {
            _.$slides.not(_.$slideTrack.find('.slick-cloned')).each(function(i) {
                var slideControlIndex = tabControlIndexes.indexOf(i);

                $(this).attr({
                    'role': 'tabpanel',
                    'id': 'slick-slide' + _.instanceUid + i,
                    'tabindex': -1
                });

                if (slideControlIndex !== -1) {
                   var ariaButtonControl = 'slick-slide-control' + _.instanceUid + slideControlIndex
                   if ($('#' + ariaButtonControl).length) {
                     $(this).attr({
                         'aria-describedby': ariaButtonControl
                     });
                   }
                }
            });

            _.$dots.attr('role', 'tablist').find('li').each(function(i) {
                var mappedSlideIndex = tabControlIndexes[i];

                $(this).attr({
                    'role': 'presentation'
                });

                $(this).find('button').first().attr({
                    'role': 'tab',
                    'id': 'slick-slide-control' + _.instanceUid + i,
                    'aria-controls': 'slick-slide' + _.instanceUid + mappedSlideIndex,
                    'aria-label': (i + 1) + ' of ' + numDotGroups,
                    'aria-selected': null,
                    'tabindex': '-1'
                });

            }).eq(_.currentSlide).find('button').attr({
                'aria-selected': 'true',
                'tabindex': '0'
            }).end();
        }

        for (var i=_.currentSlide, max=i+_.options.slidesToShow; i < max; i++) {
          if (_.options.focusOnChange) {
            _.$slides.eq(i).attr({'tabindex': '0'});
          } else {
            _.$slides.eq(i).removeAttr('tabindex');
          }
        }

        _.activateADA();

    };

    Slick.prototype.initArrowEvents = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow
               .off('click.slick')
               .on('click.slick', {
                    message: 'previous'
               }, _.changeSlide);
            _.$nextArrow
               .off('click.slick')
               .on('click.slick', {
                    message: 'next'
               }, _.changeSlide);

            if (_.options.accessibility === true) {
                _.$prevArrow.on('keydown.slick', _.keyHandler);
                _.$nextArrow.on('keydown.slick', _.keyHandler);
            }
        }

    };

    Slick.prototype.initDotEvents = function() {

        var _ = this;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
            $('li', _.$dots).on('click.slick', {
                message: 'index'
            }, _.changeSlide);

            if (_.options.accessibility === true) {
                _.$dots.on('keydown.slick', _.keyHandler);
            }
        }

        if (_.options.dots === true && _.options.pauseOnDotsHover === true && _.slideCount > _.options.slidesToShow) {

            $('li', _.$dots)
                .on('mouseenter.slick', $.proxy(_.interrupt, _, true))
                .on('mouseleave.slick', $.proxy(_.interrupt, _, false));

        }

    };

    Slick.prototype.initSlideEvents = function() {

        var _ = this;

        if ( _.options.pauseOnHover ) {

            _.$list.on('mouseenter.slick', $.proxy(_.interrupt, _, true));
            _.$list.on('mouseleave.slick', $.proxy(_.interrupt, _, false));

        }

    };

    Slick.prototype.initializeEvents = function() {

        var _ = this;

        _.initArrowEvents();

        _.initDotEvents();
        _.initSlideEvents();

        _.$list.on('touchstart.slick mousedown.slick', {
            action: 'start'
        }, _.swipeHandler);
        _.$list.on('touchmove.slick mousemove.slick', {
            action: 'move'
        }, _.swipeHandler);
        _.$list.on('touchend.slick mouseup.slick', {
            action: 'end'
        }, _.swipeHandler);
        _.$list.on('touchcancel.slick mouseleave.slick', {
            action: 'end'
        }, _.swipeHandler);

        _.$list.on('click.slick', _.clickHandler);

        $(document).on(_.visibilityChange, $.proxy(_.visibility, _));

        if (_.options.accessibility === true) {
            _.$list.on('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        $(window).on('orientationchange.slick.slick-' + _.instanceUid, $.proxy(_.orientationChange, _));

        $(window).on('resize.slick.slick-' + _.instanceUid, $.proxy(_.resize, _));

        $('[draggable!=true]', _.$slideTrack).on('dragstart', _.preventDefault);

        $(window).on('load.slick.slick-' + _.instanceUid, _.setPosition);
        $(_.setPosition);

    };

    Slick.prototype.initUI = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.show();
            _.$nextArrow.show();

        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.show();

        }

    };

    Slick.prototype.keyHandler = function(event) {

        var _ = this;
         //Dont slide if the cursor is inside the form fields and arrow keys are pressed
        if(!event.target.tagName.match('TEXTAREA|INPUT|SELECT')) {
            if (event.keyCode === 37 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'next' :  'previous'
                    }
                });
            } else if (event.keyCode === 39 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'previous' : 'next'
                    }
                });
            }
        }

    };

    Slick.prototype.lazyLoad = function() {

        var _ = this,
            loadRange, cloneRange, rangeStart, rangeEnd;

        function loadImages(imagesScope) {

            $('img[data-lazy]', imagesScope).each(function() {

                var image = $(this),
                    imageSource = $(this).attr('data-lazy'),
                    imageSrcSet = $(this).attr('data-srcset'),
                    imageSizes  = $(this).attr('data-sizes') || _.$slider.attr('data-sizes'),
                    imageToLoad = document.createElement('img');

                imageToLoad.onload = function() {

                    image
                        .animate({ opacity: 0 }, 100, function() {

                            if (imageSrcSet) {
                                image
                                    .attr('srcset', imageSrcSet );

                                if (imageSizes) {
                                    image
                                        .attr('sizes', imageSizes );
                                }
                            }

                            image
                                .attr('src', imageSource)
                                .animate({ opacity: 1 }, 200, function() {
                                    image
                                        .removeAttr('data-lazy data-srcset data-sizes')
                                        .removeClass('slick-loading');
                                });
                            _.$slider.trigger('lazyLoaded', [_, image, imageSource]);
                        });

                };

                imageToLoad.onerror = function() {

                    image
                        .removeAttr( 'data-lazy' )
                        .removeClass( 'slick-loading' )
                        .addClass( 'slick-lazyload-error' );

                    _.$slider.trigger('lazyLoadError', [ _, image, imageSource ]);

                };

                imageToLoad.src = imageSource;

            });

        }

        if (_.options.centerMode === true) {
            if (_.options.infinite === true) {
                rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1);
                rangeEnd = rangeStart + _.options.slidesToShow + 2;
            } else {
                rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow / 2 + 1));
                rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide;
            }
        } else {
            rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide;
            rangeEnd = Math.ceil(rangeStart + _.options.slidesToShow);
            if (_.options.fade === true) {
                if (rangeStart > 0) rangeStart--;
                if (rangeEnd <= _.slideCount) rangeEnd++;
            }
        }

        loadRange = _.$slider.find('.slick-slide').slice(rangeStart, rangeEnd);

        if (_.options.lazyLoad === 'anticipated') {
            var prevSlide = rangeStart - 1,
                nextSlide = rangeEnd,
                $slides = _.$slider.find('.slick-slide');

            for (var i = 0; i < _.options.slidesToScroll; i++) {
                if (prevSlide < 0) prevSlide = _.slideCount - 1;
                loadRange = loadRange.add($slides.eq(prevSlide));
                loadRange = loadRange.add($slides.eq(nextSlide));
                prevSlide--;
                nextSlide++;
            }
        }

        loadImages(loadRange);

        if (_.slideCount <= _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-slide');
            loadImages(cloneRange);
        } else
        if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-cloned').slice(0, _.options.slidesToShow);
            loadImages(cloneRange);
        } else if (_.currentSlide === 0) {
            cloneRange = _.$slider.find('.slick-cloned').slice(_.options.slidesToShow * -1);
            loadImages(cloneRange);
        }

    };

    Slick.prototype.loadSlider = function() {

        var _ = this;

        _.setPosition();

        _.$slideTrack.css({
            opacity: 1
        });

        _.$slider.removeClass('slick-loading');

        _.initUI();

        if (_.options.lazyLoad === 'progressive') {
            _.progressiveLazyLoad();
        }

    };

    Slick.prototype.next = Slick.prototype.slickNext = function() {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'next'
            }
        });

    };

    Slick.prototype.orientationChange = function() {

        var _ = this;

        _.checkResponsive();
        _.setPosition();

    };

    Slick.prototype.pause = Slick.prototype.slickPause = function() {

        var _ = this;

        _.autoPlayClear();
        _.paused = true;

    };

    Slick.prototype.play = Slick.prototype.slickPlay = function() {

        var _ = this;

        _.autoPlay();
        _.options.autoplay = true;
        _.paused = false;
        _.focussed = false;
        _.interrupted = false;

    };

    Slick.prototype.postSlide = function(index) {

        var _ = this;

        if( !_.unslicked ) {

            _.$slider.trigger('afterChange', [_, index]);

            _.animating = false;

            if (_.slideCount > _.options.slidesToShow) {
                _.setPosition();
            }

            _.swipeLeft = null;

            if ( _.options.autoplay ) {
                _.autoPlay();
            }

            if (_.options.accessibility === true) {
                _.initADA();

                if (_.options.focusOnChange) {
                    var $currentSlide = $(_.$slides.get(_.currentSlide));
                    $currentSlide.attr('tabindex', 0).focus();
                }
            }

        }

    };

    Slick.prototype.prev = Slick.prototype.slickPrev = function() {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'previous'
            }
        });

    };

    Slick.prototype.preventDefault = function(event) {

        event.preventDefault();

    };

    Slick.prototype.progressiveLazyLoad = function( tryCount ) {

        tryCount = tryCount || 1;

        var _ = this,
            $imgsToLoad = $( 'img[data-lazy]', _.$slider ),
            image,
            imageSource,
            imageSrcSet,
            imageSizes,
            imageToLoad;

        if ( $imgsToLoad.length ) {

            image = $imgsToLoad.first();
            imageSource = image.attr('data-lazy');
            imageSrcSet = image.attr('data-srcset');
            imageSizes  = image.attr('data-sizes') || _.$slider.attr('data-sizes');
            imageToLoad = document.createElement('img');

            imageToLoad.onload = function() {

                if (imageSrcSet) {
                    image
                        .attr('srcset', imageSrcSet );

                    if (imageSizes) {
                        image
                            .attr('sizes', imageSizes );
                    }
                }

                image
                    .attr( 'src', imageSource )
                    .removeAttr('data-lazy data-srcset data-sizes')
                    .removeClass('slick-loading');

                if ( _.options.adaptiveHeight === true ) {
                    _.setPosition();
                }

                _.$slider.trigger('lazyLoaded', [ _, image, imageSource ]);
                _.progressiveLazyLoad();

            };

            imageToLoad.onerror = function() {

                if ( tryCount < 3 ) {

                    /**
                     * try to load the image 3 times,
                     * leave a slight delay so we don't get
                     * servers blocking the request.
                     */
                    setTimeout( function() {
                        _.progressiveLazyLoad( tryCount + 1 );
                    }, 500 );

                } else {

                    image
                        .removeAttr( 'data-lazy' )
                        .removeClass( 'slick-loading' )
                        .addClass( 'slick-lazyload-error' );

                    _.$slider.trigger('lazyLoadError', [ _, image, imageSource ]);

                    _.progressiveLazyLoad();

                }

            };

            imageToLoad.src = imageSource;

        } else {

            _.$slider.trigger('allImagesLoaded', [ _ ]);

        }

    };

    Slick.prototype.refresh = function( initializing ) {

        var _ = this, currentSlide, lastVisibleIndex;

        lastVisibleIndex = _.slideCount - _.options.slidesToShow;

        // in non-infinite sliders, we don't want to go past the
        // last visible index.
        if( !_.options.infinite && ( _.currentSlide > lastVisibleIndex )) {
            _.currentSlide = lastVisibleIndex;
        }

        // if less slides than to show, go to start.
        if ( _.slideCount <= _.options.slidesToShow ) {
            _.currentSlide = 0;

        }

        currentSlide = _.currentSlide;

        _.destroy(true);

        $.extend(_, _.initials, { currentSlide: currentSlide });

        _.init();

        if( !initializing ) {

            _.changeSlide({
                data: {
                    message: 'index',
                    index: currentSlide
                }
            }, false);

        }

    };

    Slick.prototype.registerBreakpoints = function() {

        var _ = this, breakpoint, currentBreakpoint, l,
            responsiveSettings = _.options.responsive || null;

        if ( $.type(responsiveSettings) === 'array' && responsiveSettings.length ) {

            _.respondTo = _.options.respondTo || 'window';

            for ( breakpoint in responsiveSettings ) {

                l = _.breakpoints.length-1;

                if (responsiveSettings.hasOwnProperty(breakpoint)) {
                    currentBreakpoint = responsiveSettings[breakpoint].breakpoint;

                    // loop through the breakpoints and cut out any existing
                    // ones with the same breakpoint number, we don't want dupes.
                    while( l >= 0 ) {
                        if( _.breakpoints[l] && _.breakpoints[l] === currentBreakpoint ) {
                            _.breakpoints.splice(l,1);
                        }
                        l--;
                    }

                    _.breakpoints.push(currentBreakpoint);
                    _.breakpointSettings[currentBreakpoint] = responsiveSettings[breakpoint].settings;

                }

            }

            _.breakpoints.sort(function(a, b) {
                return ( _.options.mobileFirst ) ? a-b : b-a;
            });

        }

    };

    Slick.prototype.reinit = function() {

        var _ = this;

        _.$slides =
            _.$slideTrack
                .children(_.options.slide)
                .addClass('slick-slide');

        _.slideCount = _.$slides.length;

        if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) {
            _.currentSlide = _.currentSlide - _.options.slidesToScroll;
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.currentSlide = 0;
        }

        _.registerBreakpoints();

        _.setProps();
        _.setupInfinite();
        _.buildArrows();
        _.updateArrows();
        _.initArrowEvents();
        _.buildDots();
        _.updateDots();
        _.initDotEvents();
        _.cleanUpSlideEvents();
        _.initSlideEvents();

        _.checkResponsive(false, true);

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

        _.setPosition();
        _.focusHandler();

        _.paused = !_.options.autoplay;
        _.autoPlay();

        _.$slider.trigger('reInit', [_]);

    };

    Slick.prototype.resize = function() {

        var _ = this;

        if ($(window).width() !== _.windowWidth) {
            clearTimeout(_.windowDelay);
            _.windowDelay = window.setTimeout(function() {
                _.windowWidth = $(window).width();
                _.checkResponsive();
                if( !_.unslicked ) { _.setPosition(); }
            }, 50);
        }
    };

    Slick.prototype.removeSlide = Slick.prototype.slickRemove = function(index, removeBefore, removeAll) {

        var _ = this;

        if (typeof(index) === 'boolean') {
            removeBefore = index;
            index = removeBefore === true ? 0 : _.slideCount - 1;
        } else {
            index = removeBefore === true ? --index : index;
        }

        if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) {
            return false;
        }

        _.unload();

        if (removeAll === true) {
            _.$slideTrack.children().remove();
        } else {
            _.$slideTrack.children(this.options.slide).eq(index).remove();
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slidesCache = _.$slides;

        _.reinit();

    };

    Slick.prototype.setCSS = function(position) {

        var _ = this,
            positionProps = {},
            x, y;

        if (_.options.rtl === true) {
            position = -position;
        }
        x = _.positionProp == 'left' ? Math.ceil(position) + 'px' : '0px';
        y = _.positionProp == 'top' ? Math.ceil(position) + 'px' : '0px';

        positionProps[_.positionProp] = position;

        if (_.transformsEnabled === false) {
            _.$slideTrack.css(positionProps);
        } else {
            positionProps = {};
            if (_.cssTransitions === false) {
                positionProps[_.animType] = 'translate(' + x + ', ' + y + ')';
                _.$slideTrack.css(positionProps);
            } else {
                positionProps[_.animType] = 'translate3d(' + x + ', ' + y + ', 0px)';
                _.$slideTrack.css(positionProps);
            }
        }

    };

    Slick.prototype.setDimensions = function() {

        var _ = this;

        if (_.options.vertical === false) {
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: ('0px ' + _.options.centerPadding)
                });
            }
        } else {
            _.$list.height(_.$slides.first().outerHeight(true) * _.options.slidesToShow);
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: (_.options.centerPadding + ' 0px')
                });
            }
        }

        _.listWidth = _.$list.width();
        _.listHeight = _.$list.height();


        if (_.options.vertical === false && _.options.variableWidth === false) {
            _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);
            _.$slideTrack.width(Math.ceil((_.slideWidth * _.$slideTrack.children('.slick-slide').length)));

        } else if (_.options.variableWidth === true) {
            _.$slideTrack.width(5000 * _.slideCount);
        } else {
            _.slideWidth = Math.ceil(_.listWidth);
            _.$slideTrack.height(Math.ceil((_.$slides.first().outerHeight(true) * _.$slideTrack.children('.slick-slide').length)));
        }

        var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width();
        if (_.options.variableWidth === false) _.$slideTrack.children('.slick-slide').width(_.slideWidth - offset);

    };

    Slick.prototype.setFade = function() {

        var _ = this,
            targetLeft;

        _.$slides.each(function(index, element) {
            targetLeft = (_.slideWidth * index) * -1;
            if (_.options.rtl === true) {
                $(element).css({
                    position: 'relative',
                    right: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            } else {
                $(element).css({
                    position: 'relative',
                    left: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            }
        });

        _.$slides.eq(_.currentSlide).css({
            zIndex: _.options.zIndex - 1,
            opacity: 1
        });

    };

    Slick.prototype.setHeight = function() {

        var _ = this;

        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.css('height', targetHeight);
        }

    };

    Slick.prototype.setOption =
    Slick.prototype.slickSetOption = function() {

        /**
         * accepts arguments in format of:
         *
         *  - for changing a single option's value:
         *     .slick("setOption", option, value, refresh )
         *
         *  - for changing a set of responsive options:
         *     .slick("setOption", 'responsive', [{}, ...], refresh )
         *
         *  - for updating multiple values at once (not responsive)
         *     .slick("setOption", { 'option': value, ... }, refresh )
         */

        var _ = this, l, item, option, value, refresh = false, type;

        if( $.type( arguments[0] ) === 'object' ) {

            option =  arguments[0];
            refresh = arguments[1];
            type = 'multiple';

        } else if ( $.type( arguments[0] ) === 'string' ) {

            option =  arguments[0];
            value = arguments[1];
            refresh = arguments[2];

            if ( arguments[0] === 'responsive' && $.type( arguments[1] ) === 'array' ) {

                type = 'responsive';

            } else if ( typeof arguments[1] !== 'undefined' ) {

                type = 'single';

            }

        }

        if ( type === 'single' ) {

            _.options[option] = value;


        } else if ( type === 'multiple' ) {

            $.each( option , function( opt, val ) {

                _.options[opt] = val;

            });


        } else if ( type === 'responsive' ) {

            for ( item in value ) {

                if( $.type( _.options.responsive ) !== 'array' ) {

                    _.options.responsive = [ value[item] ];

                } else {

                    l = _.options.responsive.length-1;

                    // loop through the responsive object and splice out duplicates.
                    while( l >= 0 ) {

                        if( _.options.responsive[l].breakpoint === value[item].breakpoint ) {

                            _.options.responsive.splice(l,1);

                        }

                        l--;

                    }

                    _.options.responsive.push( value[item] );

                }

            }

        }

        if ( refresh ) {

            _.unload();
            _.reinit();

        }

    };

    Slick.prototype.setPosition = function() {

        var _ = this;

        _.setDimensions();

        _.setHeight();

        if (_.options.fade === false) {
            _.setCSS(_.getLeft(_.currentSlide));
        } else {
            _.setFade();
        }

        _.$slider.trigger('setPosition', [_]);

    };

    Slick.prototype.setProps = function() {

        var _ = this,
            bodyStyle = document.body.style;

        _.positionProp = _.options.vertical === true ? 'top' : 'left';

        if (_.positionProp === 'top') {
            _.$slider.addClass('slick-vertical');
        } else {
            _.$slider.removeClass('slick-vertical');
        }

        if (bodyStyle.WebkitTransition !== undefined ||
            bodyStyle.MozTransition !== undefined ||
            bodyStyle.msTransition !== undefined) {
            if (_.options.useCSS === true) {
                _.cssTransitions = true;
            }
        }

        if ( _.options.fade ) {
            if ( typeof _.options.zIndex === 'number' ) {
                if( _.options.zIndex < 3 ) {
                    _.options.zIndex = 3;
                }
            } else {
                _.options.zIndex = _.defaults.zIndex;
            }
        }

        if (bodyStyle.OTransform !== undefined) {
            _.animType = 'OTransform';
            _.transformType = '-o-transform';
            _.transitionType = 'OTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.MozTransform !== undefined) {
            _.animType = 'MozTransform';
            _.transformType = '-moz-transform';
            _.transitionType = 'MozTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.MozPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.webkitTransform !== undefined) {
            _.animType = 'webkitTransform';
            _.transformType = '-webkit-transform';
            _.transitionType = 'webkitTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.msTransform !== undefined) {
            _.animType = 'msTransform';
            _.transformType = '-ms-transform';
            _.transitionType = 'msTransition';
            if (bodyStyle.msTransform === undefined) _.animType = false;
        }
        if (bodyStyle.transform !== undefined && _.animType !== false) {
            _.animType = 'transform';
            _.transformType = 'transform';
            _.transitionType = 'transition';
        }
        _.transformsEnabled = _.options.useTransform && (_.animType !== null && _.animType !== false);
    };


    Slick.prototype.setSlideClasses = function(index) {

        var _ = this,
            centerOffset, allSlides, indexOffset, remainder;

        allSlides = _.$slider
            .find('.slick-slide')
            .removeClass('slick-active slick-center slick-current')
            .attr('aria-hidden', 'true');

        _.$slides
            .eq(index)
            .addClass('slick-current');

        if (_.options.centerMode === true) {

            var evenCoef = _.options.slidesToShow % 2 === 0 ? 1 : 0;

            centerOffset = Math.floor(_.options.slidesToShow / 2);

            if (_.options.infinite === true) {

                if (index >= centerOffset && index <= (_.slideCount - 1) - centerOffset) {
                    _.$slides
                        .slice(index - centerOffset + evenCoef, index + centerOffset + 1)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                } else {

                    indexOffset = _.options.slidesToShow + index;
                    allSlides
                        .slice(indexOffset - centerOffset + 1 + evenCoef, indexOffset + centerOffset + 2)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                }

                if (index === 0) {

                    allSlides
                        .eq(allSlides.length - 1 - _.options.slidesToShow)
                        .addClass('slick-center');

                } else if (index === _.slideCount - 1) {

                    allSlides
                        .eq(_.options.slidesToShow)
                        .addClass('slick-center');

                }

            }

            _.$slides
                .eq(index)
                .addClass('slick-center');

        } else {

            if (index >= 0 && index <= (_.slideCount - _.options.slidesToShow)) {

                _.$slides
                    .slice(index, index + _.options.slidesToShow)
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false');

            } else if (allSlides.length <= _.options.slidesToShow) {

                allSlides
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false');

            } else {

                remainder = _.slideCount % _.options.slidesToShow;
                indexOffset = _.options.infinite === true ? _.options.slidesToShow + index : index;

                if (_.options.slidesToShow == _.options.slidesToScroll && (_.slideCount - index) < _.options.slidesToShow) {

                    allSlides
                        .slice(indexOffset - (_.options.slidesToShow - remainder), indexOffset + remainder)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                } else {

                    allSlides
                        .slice(indexOffset, indexOffset + _.options.slidesToShow)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                }

            }

        }

        if (_.options.lazyLoad === 'ondemand' || _.options.lazyLoad === 'anticipated') {
            _.lazyLoad();
        }
    };

    Slick.prototype.setupInfinite = function() {

        var _ = this,
            i, slideIndex, infiniteCount;

        if (_.options.fade === true) {
            _.options.centerMode = false;
        }

        if (_.options.infinite === true && _.options.fade === false) {

            slideIndex = null;

            if (_.slideCount > _.options.slidesToShow) {

                if (_.options.centerMode === true) {
                    infiniteCount = _.options.slidesToShow + 1;
                } else {
                    infiniteCount = _.options.slidesToShow;
                }

                for (i = _.slideCount; i > (_.slideCount -
                        infiniteCount); i -= 1) {
                    slideIndex = i - 1;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-slick-index', slideIndex - _.slideCount)
                        .prependTo(_.$slideTrack).addClass('slick-cloned');
                }
                for (i = 0; i < infiniteCount  + _.slideCount; i += 1) {
                    slideIndex = i;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-slick-index', slideIndex + _.slideCount)
                        .appendTo(_.$slideTrack).addClass('slick-cloned');
                }
                _.$slideTrack.find('.slick-cloned').find('[id]').each(function() {
                    $(this).attr('id', '');
                });

            }

        }

    };

    Slick.prototype.interrupt = function( toggle ) {

        var _ = this;

        if( !toggle ) {
            _.autoPlay();
        }
        _.interrupted = toggle;

    };

    Slick.prototype.selectHandler = function(event) {

        var _ = this;

        var targetElement =
            $(event.target).is('.slick-slide') ?
                $(event.target) :
                $(event.target).parents('.slick-slide');

        var index = parseInt(targetElement.attr('data-slick-index'));

        if (!index) index = 0;

        if (_.slideCount <= _.options.slidesToShow) {

            _.slideHandler(index, false, true);
            return;

        }

        _.slideHandler(index);

    };

    Slick.prototype.slideHandler = function(index, sync, dontAnimate) {

        var targetSlide, animSlide, oldSlide, slideLeft, targetLeft = null,
            _ = this, navTarget;

        sync = sync || false;

        if (_.animating === true && _.options.waitForAnimate === true) {
            return;
        }

        if (_.options.fade === true && _.currentSlide === index) {
            return;
        }

        if (sync === false) {
            _.asNavFor(index);
        }

        targetSlide = index;
        targetLeft = _.getLeft(targetSlide);
        slideLeft = _.getLeft(_.currentSlide);

        _.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft;

        if (_.options.infinite === false && _.options.centerMode === false && (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        } else if (_.options.infinite === false && _.options.centerMode === true && (index < 0 || index > (_.slideCount - _.options.slidesToScroll))) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        }

        if ( _.options.autoplay ) {
            clearInterval(_.autoPlayTimer);
        }

        if (targetSlide < 0) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = _.slideCount - (_.slideCount % _.options.slidesToScroll);
            } else {
                animSlide = _.slideCount + targetSlide;
            }
        } else if (targetSlide >= _.slideCount) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = 0;
            } else {
                animSlide = targetSlide - _.slideCount;
            }
        } else {
            animSlide = targetSlide;
        }

        _.animating = true;

        _.$slider.trigger('beforeChange', [_, _.currentSlide, animSlide]);

        oldSlide = _.currentSlide;
        _.currentSlide = animSlide;

        _.setSlideClasses(_.currentSlide);

        if ( _.options.asNavFor ) {

            navTarget = _.getNavTarget();
            navTarget = navTarget.slick('getSlick');

            if ( navTarget.slideCount <= navTarget.options.slidesToShow ) {
                navTarget.setSlideClasses(_.currentSlide);
            }

        }

        _.updateDots();
        _.updateArrows();

        if (_.options.fade === true) {
            if (dontAnimate !== true) {

                _.fadeSlideOut(oldSlide);

                _.fadeSlide(animSlide, function() {
                    _.postSlide(animSlide);
                });

            } else {
                _.postSlide(animSlide);
            }
            _.animateHeight();
            return;
        }

        if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
            _.animateSlide(targetLeft, function() {
                _.postSlide(animSlide);
            });
        } else {
            _.postSlide(animSlide);
        }

    };

    Slick.prototype.startLoad = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.hide();
            _.$nextArrow.hide();

        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.hide();

        }

        _.$slider.addClass('slick-loading');

    };

    Slick.prototype.swipeDirection = function() {

        var xDist, yDist, r, swipeAngle, _ = this;

        xDist = _.touchObject.startX - _.touchObject.curX;
        yDist = _.touchObject.startY - _.touchObject.curY;
        r = Math.atan2(yDist, xDist);

        swipeAngle = Math.round(r * 180 / Math.PI);
        if (swipeAngle < 0) {
            swipeAngle = 360 - Math.abs(swipeAngle);
        }

        if ((swipeAngle <= 45) && (swipeAngle >= 0)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle <= 360) && (swipeAngle >= 315)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle >= 135) && (swipeAngle <= 225)) {
            return (_.options.rtl === false ? 'right' : 'left');
        }
        if (_.options.verticalSwiping === true) {
            if ((swipeAngle >= 35) && (swipeAngle <= 135)) {
                return 'down';
            } else {
                return 'up';
            }
        }

        return 'vertical';

    };

    Slick.prototype.swipeEnd = function(event) {

        var _ = this,
            slideCount,
            direction;

        _.dragging = false;
        _.swiping = false;

        if (_.scrolling) {
            _.scrolling = false;
            return false;
        }

        _.interrupted = false;
        _.shouldClick = ( _.touchObject.swipeLength > 10 ) ? false : true;

        if ( _.touchObject.curX === undefined ) {
            return false;
        }

        if ( _.touchObject.edgeHit === true ) {
            _.$slider.trigger('edge', [_, _.swipeDirection() ]);
        }

        if ( _.touchObject.swipeLength >= _.touchObject.minSwipe ) {

            direction = _.swipeDirection();

            switch ( direction ) {

                case 'left':
                case 'down':

                    slideCount =
                        _.options.swipeToSlide ?
                            _.checkNavigable( _.currentSlide + _.getSlideCount() ) :
                            _.currentSlide + _.getSlideCount();

                    _.currentDirection = 0;

                    break;

                case 'right':
                case 'up':

                    slideCount =
                        _.options.swipeToSlide ?
                            _.checkNavigable( _.currentSlide - _.getSlideCount() ) :
                            _.currentSlide - _.getSlideCount();

                    _.currentDirection = 1;

                    break;

                default:


            }

            if( direction != 'vertical' ) {

                _.slideHandler( slideCount );
                _.touchObject = {};
                _.$slider.trigger('swipe', [_, direction ]);

            }

        } else {

            if ( _.touchObject.startX !== _.touchObject.curX ) {

                _.slideHandler( _.currentSlide );
                _.touchObject = {};

            }

        }

    };

    Slick.prototype.swipeHandler = function(event) {

        var _ = this;

        if ((_.options.swipe === false) || ('ontouchend' in document && _.options.swipe === false)) {
            return;
        } else if (_.options.draggable === false && event.type.indexOf('mouse') !== -1) {
            return;
        }

        _.touchObject.fingerCount = event.originalEvent && event.originalEvent.touches !== undefined ?
            event.originalEvent.touches.length : 1;

        _.touchObject.minSwipe = _.listWidth / _.options
            .touchThreshold;

        if (_.options.verticalSwiping === true) {
            _.touchObject.minSwipe = _.listHeight / _.options
                .touchThreshold;
        }

        switch (event.data.action) {

            case 'start':
                _.swipeStart(event);
                break;

            case 'move':
                _.swipeMove(event);
                break;

            case 'end':
                _.swipeEnd(event);
                break;

        }

    };

    Slick.prototype.swipeMove = function(event) {

        var _ = this,
            edgeWasHit = false,
            curLeft, swipeDirection, swipeLength, positionOffset, touches, verticalSwipeLength;

        touches = event.originalEvent !== undefined ? event.originalEvent.touches : null;

        if (!_.dragging || _.scrolling || touches && touches.length !== 1) {
            return false;
        }

        curLeft = _.getLeft(_.currentSlide);

        _.touchObject.curX = touches !== undefined ? touches[0].pageX : event.clientX;
        _.touchObject.curY = touches !== undefined ? touches[0].pageY : event.clientY;

        _.touchObject.swipeLength = Math.round(Math.sqrt(
            Math.pow(_.touchObject.curX - _.touchObject.startX, 2)));

        verticalSwipeLength = Math.round(Math.sqrt(
            Math.pow(_.touchObject.curY - _.touchObject.startY, 2)));

        if (!_.options.verticalSwiping && !_.swiping && verticalSwipeLength > 4) {
            _.scrolling = true;
            return false;
        }

        if (_.options.verticalSwiping === true) {
            _.touchObject.swipeLength = verticalSwipeLength;
        }

        swipeDirection = _.swipeDirection();

        if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) {
            _.swiping = true;
            event.preventDefault();
        }

        positionOffset = (_.options.rtl === false ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1);
        if (_.options.verticalSwiping === true) {
            positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1;
        }


        swipeLength = _.touchObject.swipeLength;

        _.touchObject.edgeHit = false;

        if (_.options.infinite === false) {
            if ((_.currentSlide === 0 && swipeDirection === 'right') || (_.currentSlide >= _.getDotCount() && swipeDirection === 'left')) {
                swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;
                _.touchObject.edgeHit = true;
            }
        }

        if (_.options.vertical === false) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        } else {
            _.swipeLeft = curLeft + (swipeLength * (_.$list.height() / _.listWidth)) * positionOffset;
        }
        if (_.options.verticalSwiping === true) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        }

        if (_.options.fade === true || _.options.touchMove === false) {
            return false;
        }

        if (_.animating === true) {
            _.swipeLeft = null;
            return false;
        }

        _.setCSS(_.swipeLeft);

    };

    Slick.prototype.swipeStart = function(event) {

        var _ = this,
            touches;

        _.interrupted = true;

        if (_.touchObject.fingerCount !== 1 || _.slideCount <= _.options.slidesToShow) {
            _.touchObject = {};
            return false;
        }

        if (event.originalEvent !== undefined && event.originalEvent.touches !== undefined) {
            touches = event.originalEvent.touches[0];
        }

        _.touchObject.startX = _.touchObject.curX = touches !== undefined ? touches.pageX : event.clientX;
        _.touchObject.startY = _.touchObject.curY = touches !== undefined ? touches.pageY : event.clientY;

        _.dragging = true;

    };

    Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function() {

        var _ = this;

        if (_.$slidesCache !== null) {

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.appendTo(_.$slideTrack);

            _.reinit();

        }

    };

    Slick.prototype.unload = function() {

        var _ = this;

        $('.slick-cloned', _.$slider).remove();

        if (_.$dots) {
            _.$dots.remove();
        }

        if (_.$prevArrow && _.htmlExpr.test(_.options.prevArrow)) {
            _.$prevArrow.remove();
        }

        if (_.$nextArrow && _.htmlExpr.test(_.options.nextArrow)) {
            _.$nextArrow.remove();
        }

        _.$slides
            .removeClass('slick-slide slick-active slick-visible slick-current')
            .attr('aria-hidden', 'true')
            .css('width', '');

    };

    Slick.prototype.unslick = function(fromBreakpoint) {

        var _ = this;
        _.$slider.trigger('unslick', [_, fromBreakpoint]);
        _.destroy();

    };

    Slick.prototype.updateArrows = function() {

        var _ = this,
            centerOffset;

        centerOffset = Math.floor(_.options.slidesToShow / 2);

        if ( _.options.arrows === true &&
            _.slideCount > _.options.slidesToShow &&
            !_.options.infinite ) {

            _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
            _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            if (_.currentSlide === 0) {

                _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow && _.options.centerMode === false) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            } else if (_.currentSlide >= _.slideCount - 1 && _.options.centerMode === true) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            }

        }

    };

    Slick.prototype.updateDots = function() {

        var _ = this;

        if (_.$dots !== null) {

            _.$dots
                .find('li')
                    .removeClass('slick-active')
                    .end();

            _.$dots
                .find('li')
                .eq(Math.floor(_.currentSlide / _.options.slidesToScroll))
                .addClass('slick-active');

        }

    };

    Slick.prototype.visibility = function() {

        var _ = this;

        if ( _.options.autoplay ) {

            if ( document[_.hidden] ) {

                _.interrupted = true;

            } else {

                _.interrupted = false;

            }

        }

    };

    $.fn.slick = function() {
        var _ = this,
            opt = arguments[0],
            args = Array.prototype.slice.call(arguments, 1),
            l = _.length,
            i,
            ret;
        for (i = 0; i < l; i++) {
            if (typeof opt == 'object' || typeof opt == 'undefined')
                _[i].slick = new Slick(_[i], opt);
            else
                ret = _[i].slick[opt].apply(_[i].slick, args);
            if (typeof ret != 'undefined') return ret;
        }
        return _;
    };

}));

/*!
 * parallax.js v1.5.0 (http://pixelcog.github.io/parallax.js/)
 * @copyright 2016 PixelCog, Inc.
 * @license MIT (https://github.com/pixelcog/parallax.js/blob/master/LICENSE)
 */

;(function ( $, window, document, undefined ) {

  // Polyfill for requestAnimationFrame
  // via: https://gist.github.com/paulirish/1579671

  (function() {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
      window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
      window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame)
      window.requestAnimationFrame = function(callback) {
        var currTime = new Date().getTime();
        var timeToCall = Math.max(0, 16 - (currTime - lastTime));
        var id = window.setTimeout(function() { callback(currTime + timeToCall); },
          timeToCall);
        lastTime = currTime + timeToCall;
        return id;
      };

    if (!window.cancelAnimationFrame)
      window.cancelAnimationFrame = function(id) {
        clearTimeout(id);
      };
  }());


  // Parallax Constructor

  function Parallax(element, options) {
    var self = this;

    if (typeof options == 'object') {
      delete options.refresh;
      delete options.render;
      $.extend(this, options);
    }

    this.$element = $(element);

    if (!this.imageSrc && this.$element.is('img')) {
      this.imageSrc = this.$element.attr('src');
    }

    var positions = (this.position + '').toLowerCase().match(/\S+/g) || [];

    if (positions.length < 1) {
      positions.push('center');
    }
    if (positions.length == 1) {
      positions.push(positions[0]);
    }

    if (positions[0] == 'top' || positions[0] == 'bottom' || positions[1] == 'left' || positions[1] == 'right') {
      positions = [positions[1], positions[0]];
    }

    if (this.positionX !== undefined) positions[0] = this.positionX.toLowerCase();
    if (this.positionY !== undefined) positions[1] = this.positionY.toLowerCase();

    self.positionX = positions[0];
    self.positionY = positions[1];

    if (this.positionX != 'left' && this.positionX != 'right') {
      if (isNaN(parseInt(this.positionX))) {
        this.positionX = 'center';
      } else {
        this.positionX = parseInt(this.positionX);
      }
    }

    if (this.positionY != 'top' && this.positionY != 'bottom') {
      if (isNaN(parseInt(this.positionY))) {
        this.positionY = 'center';
      } else {
        this.positionY = parseInt(this.positionY);
      }
    }

    this.position =
      this.positionX + (isNaN(this.positionX)? '' : 'px') + ' ' +
      this.positionY + (isNaN(this.positionY)? '' : 'px');

    if (navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
      if (this.imageSrc && this.iosFix && !this.$element.is('img')) {
        this.$element.css({
          backgroundImage: 'url(' + this.imageSrc + ')',
          backgroundSize: 'cover',
          backgroundPosition: this.position
        });
      }
      return this;
    }

    if (navigator.userAgent.match(/(Android)/)) {
      if (this.imageSrc && this.androidFix && !this.$element.is('img')) {
        this.$element.css({
          backgroundImage: 'url(' + this.imageSrc + ')',
          backgroundSize: 'cover',
          backgroundPosition: this.position
        });
      }
      return this;
    }

    this.$mirror = $('<div />').prependTo(this.mirrorContainer);

    var slider = this.$element.find('>.parallax-slider');
    var sliderExisted = false;

    if (slider.length == 0)
      this.$slider = $('<img />').prependTo(this.$mirror);
    else {
      this.$slider = slider.prependTo(this.$mirror)
      sliderExisted = true;
    }

    this.$mirror.addClass('parallax-mirror').css({
      visibility: 'hidden',
      zIndex: this.zIndex,
      position: 'fixed',
      top: 0,
      left: 0,
      overflow: 'hidden'
    });

    this.$slider.addClass('parallax-slider').one('load', function() {
      if (!self.naturalHeight || !self.naturalWidth) {
        self.naturalHeight = this.naturalHeight || this.height || 1;
        self.naturalWidth  = this.naturalWidth  || this.width  || 1;
      }
      self.aspectRatio = self.naturalWidth / self.naturalHeight;

      Parallax.isSetup || Parallax.setup();
      Parallax.sliders.push(self);
      Parallax.isFresh = false;
      Parallax.requestRender();
    });

    if (!sliderExisted)
      this.$slider[0].src = this.imageSrc;

    if (this.naturalHeight && this.naturalWidth || this.$slider[0].complete || slider.length > 0) {
      this.$slider.trigger('load');
    }

  }


  // Parallax Instance Methods

  $.extend(Parallax.prototype, {
    speed:    0.2,
    bleed:    0,
    zIndex:   -100,
    iosFix:   true,
    androidFix: true,
    position: 'center',
    overScrollFix: false,
    mirrorContainer: 'body',

    refresh: function() {
      this.boxWidth        = this.$element.outerWidth();
      this.boxHeight       = this.$element.outerHeight() + this.bleed * 2;
      this.boxOffsetTop    = this.$element.offset().top - this.bleed;
      this.boxOffsetLeft   = this.$element.offset().left;
      this.boxOffsetBottom = this.boxOffsetTop + this.boxHeight;

      var winHeight = Parallax.winHeight;
      var docHeight = Parallax.docHeight;
      var maxOffset = Math.min(this.boxOffsetTop, docHeight - winHeight);
      var minOffset = Math.max(this.boxOffsetTop + this.boxHeight - winHeight, 0);
      var imageHeightMin = this.boxHeight + (maxOffset - minOffset) * (1 - this.speed) | 0;
      var imageOffsetMin = (this.boxOffsetTop - maxOffset) * (1 - this.speed) | 0;
      var margin;

      if (imageHeightMin * this.aspectRatio >= this.boxWidth) {
        this.imageWidth    = imageHeightMin * this.aspectRatio | 0;
        this.imageHeight   = imageHeightMin;
        this.offsetBaseTop = imageOffsetMin;

        margin = this.imageWidth - this.boxWidth;

        if (this.positionX == 'left') {
          this.offsetLeft = 0;
        } else if (this.positionX == 'right') {
          this.offsetLeft = - margin;
        } else if (!isNaN(this.positionX)) {
          this.offsetLeft = Math.max(this.positionX, - margin);
        } else {
          this.offsetLeft = - margin / 2 | 0;
        }
      } else {
        this.imageWidth    = this.boxWidth;
        this.imageHeight   = this.boxWidth / this.aspectRatio | 0;
        this.offsetLeft    = 0;

        margin = this.imageHeight - imageHeightMin;

        if (this.positionY == 'top') {
          this.offsetBaseTop = imageOffsetMin;
        } else if (this.positionY == 'bottom') {
          this.offsetBaseTop = imageOffsetMin - margin;
        } else if (!isNaN(this.positionY)) {
          this.offsetBaseTop = imageOffsetMin + Math.max(this.positionY, - margin);
        } else {
          this.offsetBaseTop = imageOffsetMin - margin / 2 | 0;
        }
      }
    },

    render: function() {
      var scrollTop    = Parallax.scrollTop;
      var scrollLeft   = Parallax.scrollLeft;
      var overScroll   = this.overScrollFix ? Parallax.overScroll : 0;
      var scrollBottom = scrollTop + Parallax.winHeight;

      if (this.boxOffsetBottom > scrollTop && this.boxOffsetTop <= scrollBottom) {
        this.visibility = 'visible';
        this.mirrorTop = this.boxOffsetTop  - scrollTop;
        this.mirrorLeft = this.boxOffsetLeft - scrollLeft;
        this.offsetTop = this.offsetBaseTop - this.mirrorTop * (1 - this.speed);
      } else {
        this.visibility = 'hidden';
      }

      this.$mirror.css({
        transform: 'translate3d('+this.mirrorLeft+'px, '+(this.mirrorTop - overScroll)+'px, 0px)',
        visibility: this.visibility,
        height: this.boxHeight,
        width: this.boxWidth
      });

      this.$slider.css({
        transform: 'translate3d('+this.offsetLeft+'px, '+this.offsetTop+'px, 0px)',
        position: 'absolute',
        height: this.imageHeight,
        width: this.imageWidth,
        maxWidth: 'none'
      });
    }
  });


  // Parallax Static Methods

  $.extend(Parallax, {
    scrollTop:    0,
    scrollLeft:   0,
    winHeight:    0,
    winWidth:     0,
    docHeight:    1 << 30,
    docWidth:     1 << 30,
    sliders:      [],
    isReady:      false,
    isFresh:      false,
    isBusy:       false,

    setup: function() {
      if (this.isReady) return;

      var self = this;

      var $doc = $(document), $win = $(window);

      var loadDimensions = function() {
        Parallax.winHeight = $win.height();
        Parallax.winWidth  = $win.width();
        Parallax.docHeight = $doc.height();
        Parallax.docWidth  = $doc.width();
      };

      var loadScrollPosition = function() {
        var winScrollTop  = $win.scrollTop();
        var scrollTopMax  = Parallax.docHeight - Parallax.winHeight;
        var scrollLeftMax = Parallax.docWidth  - Parallax.winWidth;
        Parallax.scrollTop  = Math.max(0, Math.min(scrollTopMax,  winScrollTop));
        Parallax.scrollLeft = Math.max(0, Math.min(scrollLeftMax, $win.scrollLeft()));
        Parallax.overScroll = Math.max(winScrollTop - scrollTopMax, Math.min(winScrollTop, 0));
      };

      $win.on('resize.px.parallax load.px.parallax', function() {
          loadDimensions();
          self.refresh();
          Parallax.isFresh = false;
          Parallax.requestRender();
        })
        .on('scroll.px.parallax load.px.parallax', function() {
          loadScrollPosition();
          Parallax.requestRender();
        });

      loadDimensions();
      loadScrollPosition();

      this.isReady = true;

      var lastPosition = -1;

      function frameLoop() {
        if (lastPosition == window.pageYOffset) {   // Avoid overcalculations
          window.requestAnimationFrame(frameLoop);
          return false;
        } else lastPosition = window.pageYOffset;

        self.render();
        window.requestAnimationFrame(frameLoop);
      }

      frameLoop();
    },

    configure: function(options) {
      if (typeof options == 'object') {
        delete options.refresh;
        delete options.render;
        $.extend(this.prototype, options);
      }
    },

    refresh: function() {
      $.each(this.sliders, function(){ this.refresh(); });
      this.isFresh = true;
    },

    render: function() {
      this.isFresh || this.refresh();
      $.each(this.sliders, function(){ this.render(); });
    },

    requestRender: function() {
      var self = this;
      self.render();
      self.isBusy = false;
    },
    destroy: function(el){
      var i,
          parallaxElement = $(el).data('px.parallax');
      parallaxElement.$mirror.remove();
      for(i=0; i < this.sliders.length; i+=1){
        if(this.sliders[i] == parallaxElement){
          this.sliders.splice(i, 1);
        }
      }
      $(el).data('px.parallax', false);
      if(this.sliders.length === 0){
        $(window).off('scroll.px.parallax resize.px.parallax load.px.parallax');
        this.isReady = false;
        Parallax.isSetup = false;
      }
    }
  });


  // Parallax Plugin Definition

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this);
      var options = typeof option == 'object' && option;

      if (this == window || this == document || $this.is('body')) {
        Parallax.configure(options);
      }
      else if (!$this.data('px.parallax')) {
        options = $.extend({}, $this.data(), options);
        $this.data('px.parallax', new Parallax(this, options));
      }
      else if (typeof option == 'object')
      {
        $.extend($this.data('px.parallax'), options);
      }
      if (typeof option == 'string') {
        if(option == 'destroy'){
            Parallax.destroy(this);
        }else{
          Parallax[option]();
        }
      }
    });
  }

  var old = $.fn.parallax;

  $.fn.parallax             = Plugin;
  $.fn.parallax.Constructor = Parallax;


  // Parallax No Conflict

  $.fn.parallax.noConflict = function () {
    $.fn.parallax = old;
    return this;
  };


  // Parallax Data-API

  $( function () { 
    $('[data-parallax="scroll"]').parallax(); 
  });

}(jQuery, window, document));

/*!
 * Parsley.js
 * Version 2.9.1 - built Tue, Apr 30th 2019, 1:56 am
 * http://parsleyjs.org
 * Guillaume Potier - <guillaume@wisembly.com>
 * Marc-Andre Lafortune - <petroselinum@marc-andre.ca>
 * MIT Licensed
 */

// The source code below is generated by babel as
// Parsley is written in ECMAScript 6
//

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('jquery')) :
        typeof define === 'function' && define.amd ? define(['jquery'], factory) :
            (global.parsley = factory(global.jQuery));
}(this, (function ($) { 'use strict';

    function _typeof(obj) {
        if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
            _typeof = function (obj) {
                return typeof obj;
            };
        } else {
            _typeof = function (obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            };
        }

        return _typeof(obj);
    }

    function _extends() {
        _extends = Object.assign || function (target) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = arguments[i];

                    for (var key in source) {
                        if (Object.prototype.hasOwnProperty.call(source, key)) {
                            target[key] = source[key];
                        }
                    }
                }

                return target;
            };

        return _extends.apply(this, arguments);
    }

    function _slicedToArray(arr, i) {
        return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
    }

    function _toConsumableArray(arr) {
        return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
    }

    function _arrayWithoutHoles(arr) {
        if (Array.isArray(arr)) {
            for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

            return arr2;
        }
    }

    function _arrayWithHoles(arr) {
        if (Array.isArray(arr)) return arr;
    }

    function _iterableToArray(iter) {
        if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
    }

    function _iterableToArrayLimit(arr, i) {
        var _arr = [];
        var _n = true;
        var _d = false;
        var _e = undefined;

        try {
            for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                _arr.push(_s.value);

                if (i && _arr.length === i) break;
            }
        } catch (err) {
            _d = true;
            _e = err;
        } finally {
            try {
                if (!_n && _i["return"] != null) _i["return"]();
            } finally {
                if (_d) throw _e;
            }
        }

        return _arr;
    }

    function _nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance");
    }

    function _nonIterableRest() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }

    var globalID = 1;
    var pastWarnings = {};
    var Utils = {
        // Parsley DOM-API
        // returns object from dom attributes and values
        attr: function attr(element, namespace, obj) {
            var i;
            var attribute;
            var attributes;
            var regex = new RegExp('^' + namespace, 'i');
            if ('undefined' === typeof obj) obj = {};else {
                // Clear all own properties. This won't affect prototype's values
                for (i in obj) {
                    if (obj.hasOwnProperty(i)) delete obj[i];
                }
            }
            if (!element) return obj;
            attributes = element.attributes;

            for (i = attributes.length; i--;) {
                attribute = attributes[i];

                if (attribute && attribute.specified && regex.test(attribute.name)) {
                    obj[this.camelize(attribute.name.slice(namespace.length))] = this.deserializeValue(attribute.value);
                }
            }

            return obj;
        },
        checkAttr: function checkAttr(element, namespace, _checkAttr) {
            return element.hasAttribute(namespace + _checkAttr);
        },
        setAttr: function setAttr(element, namespace, attr, value) {
            element.setAttribute(this.dasherize(namespace + attr), String(value));
        },
        getType: function getType(element) {
            return element.getAttribute('type') || 'text';
        },
        generateID: function generateID() {
            return '' + globalID++;
        },

        /** Third party functions **/
        deserializeValue: function deserializeValue(value) {
            var num;

            try {
                return value ? value == "true" || (value == "false" ? false : value == "null" ? null : !isNaN(num = Number(value)) ? num : /^[\[\{]/.test(value) ? JSON.parse(value) : value) : value;
            } catch (e) {
                return value;
            }
        },
        // Zepto camelize function
        camelize: function camelize(str) {
            return str.replace(/-+(.)?/g, function (match, chr) {
                return chr ? chr.toUpperCase() : '';
            });
        },
        // Zepto dasherize function
        dasherize: function dasherize(str) {
            return str.replace(/::/g, '/').replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2').replace(/([a-z\d])([A-Z])/g, '$1_$2').replace(/_/g, '-').toLowerCase();
        },
        warn: function warn() {
            var _window$console;

            if (window.console && 'function' === typeof window.console.warn) (_window$console = window.console).warn.apply(_window$console, arguments);
        },
        warnOnce: function warnOnce(msg) {
            if (!pastWarnings[msg]) {
                pastWarnings[msg] = true;
                this.warn.apply(this, arguments);
            }
        },
        _resetWarnings: function _resetWarnings() {
            pastWarnings = {};
        },
        trimString: function trimString(string) {
            return string.replace(/^\s+|\s+$/g, '');
        },
        parse: {
            date: function date(string) {
                var parsed = string.match(/^(\d{4,})-(\d\d)-(\d\d)$/);
                if (!parsed) return null;

                var _parsed$map = parsed.map(function (x) {
                        return parseInt(x, 10);
                    }),
                    _parsed$map2 = _slicedToArray(_parsed$map, 4),
                    _ = _parsed$map2[0],
                    year = _parsed$map2[1],
                    month = _parsed$map2[2],
                    day = _parsed$map2[3];

                var date = new Date(year, month - 1, day);
                if (date.getFullYear() !== year || date.getMonth() + 1 !== month || date.getDate() !== day) return null;
                return date;
            },
            string: function string(_string) {
                return _string;
            },
            integer: function integer(string) {
                if (isNaN(string)) return null;
                return parseInt(string, 10);
            },
            number: function number(string) {
                if (isNaN(string)) throw null;
                return parseFloat(string);
            },
            'boolean': function _boolean(string) {
                return !/^\s*false\s*$/i.test(string);
            },
            object: function object(string) {
                return Utils.deserializeValue(string);
            },
            regexp: function regexp(_regexp) {
                var flags = ''; // Test if RegExp is literal, if not, nothing to be done, otherwise, we need to isolate flags and pattern

                if (/^\/.*\/(?:[gimy]*)$/.test(_regexp)) {
                    // Replace the regexp literal string with the first match group: ([gimy]*)
                    // If no flag is present, this will be a blank string
                    flags = _regexp.replace(/.*\/([gimy]*)$/, '$1'); // Again, replace the regexp literal string with the first match group:
                    // everything excluding the opening and closing slashes and the flags

                    _regexp = _regexp.replace(new RegExp('^/(.*?)/' + flags + '$'), '$1');
                } else {
                    // Anchor regexp:
                    _regexp = '^' + _regexp + '$';
                }

                return new RegExp(_regexp, flags);
            }
        },
        parseRequirement: function parseRequirement(requirementType, string) {
            var converter = this.parse[requirementType || 'string'];
            if (!converter) throw 'Unknown requirement specification: "' + requirementType + '"';
            var converted = converter(string);
            if (converted === null) throw "Requirement is not a ".concat(requirementType, ": \"").concat(string, "\"");
            return converted;
        },
        namespaceEvents: function namespaceEvents(events, namespace) {
            events = this.trimString(events || '').split(/\s+/);
            if (!events[0]) return '';
            return $.map(events, function (evt) {
                return "".concat(evt, ".").concat(namespace);
            }).join(' ');
        },
        difference: function difference(array, remove) {
            // This is O(N^2), should be optimized
            var result = [];
            $.each(array, function (_, elem) {
                if (remove.indexOf(elem) == -1) result.push(elem);
            });
            return result;
        },
        // Alter-ego to native Promise.all, but for jQuery
        all: function all(promises) {
            // jQuery treats $.when() and $.when(singlePromise) differently; let's avoid that and add spurious elements
            return $.when.apply($, _toConsumableArray(promises).concat([42, 42]));
        },
        // Object.create polyfill, see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create#Polyfill
        objectCreate: Object.create || function () {
            var Object = function Object() {};

            return function (prototype) {
                if (arguments.length > 1) {
                    throw Error('Second argument not supported');
                }

                if (_typeof(prototype) != 'object') {
                    throw TypeError('Argument must be an object');
                }

                Object.prototype = prototype;
                var result = new Object();
                Object.prototype = null;
                return result;
            };
        }(),
        _SubmitSelector: 'input[type="submit"], button:submit'
    };

    // All these options could be overriden and specified directly in DOM using
    // `data-parsley-` default DOM-API
    // eg: `inputs` can be set in DOM using `data-parsley-inputs="input, textarea"`
    // eg: `data-parsley-stop-on-first-failing-constraint="false"`
    var Defaults = {
        // ### General
        // Default data-namespace for DOM API
        namespace: 'data-parsley-',
        // Supported inputs by default
        inputs: 'input, textarea, select',
        // Excluded inputs by default
        excluded: 'input[type=button], input[type=submit], input[type=reset], input[type=hidden]',
        // Stop validating field on highest priority failing constraint
        priorityEnabled: true,
        // ### Field only
        // identifier used to group together inputs (e.g. radio buttons...)
        multiple: null,
        // identifier (or array of identifiers) used to validate only a select group of inputs
        group: null,
        // ### UI
        // Enable\Disable error messages
        uiEnabled: true,
        // Key events threshold before validation
        validationThreshold: 3,
        // Focused field on form validation error. 'first'|'last'|'none'
        focus: 'first',
        // event(s) that will trigger validation before first failure. eg: `input`...
        trigger: false,
        // event(s) that will trigger validation after first failure.
        triggerAfterFailure: 'input',
        // Class that would be added on every failing validation Parsley field
        errorClass: 'parsley-error',
        // Same for success validation
        successClass: 'parsley-success',
        // Return the `$element` that will receive these above success or error classes
        // Could also be (and given directly from DOM) a valid selector like `'#div'`
        classHandler: function classHandler(Field) {},
        // Return the `$element` where errors will be appended
        // Could also be (and given directly from DOM) a valid selector like `'#div'`
        errorsContainer: function errorsContainer(Field) {},
        // ul elem that would receive errors' list
        errorsWrapper: '<ul class="parsley-errors-list"></ul>',
        // li elem that would receive error message
        errorTemplate: '<li></li>'
    };

    var Base = function Base() {
        this.__id__ = Utils.generateID();
    };

    Base.prototype = {
        asyncSupport: true,
        // Deprecated
        _pipeAccordingToValidationResult: function _pipeAccordingToValidationResult() {
            var _this = this;

            var pipe = function pipe() {
                var r = $.Deferred();
                if (true !== _this.validationResult) r.reject();
                return r.resolve().promise();
            };

            return [pipe, pipe];
        },
        actualizeOptions: function actualizeOptions() {
            Utils.attr(this.element, this.options.namespace, this.domOptions);
            if (this.parent && this.parent.actualizeOptions) this.parent.actualizeOptions();
            return this;
        },
        _resetOptions: function _resetOptions(initOptions) {
            this.domOptions = Utils.objectCreate(this.parent.options);
            this.options = Utils.objectCreate(this.domOptions); // Shallow copy of ownProperties of initOptions:

            for (var i in initOptions) {
                if (initOptions.hasOwnProperty(i)) this.options[i] = initOptions[i];
            }

            this.actualizeOptions();
        },
        _listeners: null,
        // Register a callback for the given event name
        // Callback is called with context as the first argument and the `this`
        // The context is the current parsley instance, or window.Parsley if global
        // A return value of `false` will interrupt the calls
        on: function on(name, fn) {
            this._listeners = this._listeners || {};
            var queue = this._listeners[name] = this._listeners[name] || [];
            queue.push(fn);
            return this;
        },
        // Deprecated. Use `on` instead
        subscribe: function subscribe(name, fn) {
            $.listenTo(this, name.toLowerCase(), fn);
        },
        // Unregister a callback (or all if none is given) for the given event name
        off: function off(name, fn) {
            var queue = this._listeners && this._listeners[name];

            if (queue) {
                if (!fn) {
                    delete this._listeners[name];
                } else {
                    for (var i = queue.length; i--;) {
                        if (queue[i] === fn) queue.splice(i, 1);
                    }
                }
            }

            return this;
        },
        // Deprecated. Use `off`
        unsubscribe: function unsubscribe(name, fn) {
            $.unsubscribeTo(this, name.toLowerCase());
        },
        // Trigger an event of the given name
        // A return value of `false` interrupts the callback chain
        // Returns false if execution was interrupted
        trigger: function trigger(name, target, extraArg) {
            target = target || this;
            var queue = this._listeners && this._listeners[name];
            var result;

            if (queue) {
                for (var i = queue.length; i--;) {
                    result = queue[i].call(target, target, extraArg);
                    if (result === false) return result;
                }
            }

            if (this.parent) {
                return this.parent.trigger(name, target, extraArg);
            }

            return true;
        },
        asyncIsValid: function asyncIsValid(group, force) {
            Utils.warnOnce("asyncIsValid is deprecated; please use whenValid instead");
            return this.whenValid({
                group: group,
                force: force
            });
        },
        _findRelated: function _findRelated() {
            return this.options.multiple ? $(this.parent.element.querySelectorAll("[".concat(this.options.namespace, "multiple=\"").concat(this.options.multiple, "\"]"))) : this.$element;
        }
    };

    var convertArrayRequirement = function convertArrayRequirement(string, length) {
        var m = string.match(/^\s*\[(.*)\]\s*$/);
        if (!m) throw 'Requirement is not an array: "' + string + '"';
        var values = m[1].split(',').map(Utils.trimString);
        if (values.length !== length) throw 'Requirement has ' + values.length + ' values when ' + length + ' are needed';
        return values;
    };

    var convertExtraOptionRequirement = function convertExtraOptionRequirement(requirementSpec, string, extraOptionReader) {
        var main = null;
        var extra = {};

        for (var key in requirementSpec) {
            if (key) {
                var value = extraOptionReader(key);
                if ('string' === typeof value) value = Utils.parseRequirement(requirementSpec[key], value);
                extra[key] = value;
            } else {
                main = Utils.parseRequirement(requirementSpec[key], string);
            }
        }

        return [main, extra];
    }; // A Validator needs to implement the methods `validate` and `parseRequirements`


    var Validator = function Validator(spec) {
        $.extend(true, this, spec);
    };

    Validator.prototype = {
        // Returns `true` iff the given `value` is valid according the given requirements.
        validate: function validate(value, requirementFirstArg) {
            if (this.fn) {
                // Legacy style validator
                if (arguments.length > 3) // If more args then value, requirement, instance...
                    requirementFirstArg = [].slice.call(arguments, 1, -1); // Skip first arg (value) and last (instance), combining the rest

                return this.fn(value, requirementFirstArg);
            }

            if (Array.isArray(value)) {
                if (!this.validateMultiple) throw 'Validator `' + this.name + '` does not handle multiple values';
                return this.validateMultiple.apply(this, arguments);
            } else {
                var instance = arguments[arguments.length - 1];

                if (this.validateDate && instance._isDateInput()) {
                    arguments[0] = Utils.parse.date(arguments[0]);
                    if (arguments[0] === null) return false;
                    return this.validateDate.apply(this, arguments);
                }

                if (this.validateNumber) {
                    if (!value) // Builtin validators all accept empty strings, except `required` of course
                        return true;
                    if (isNaN(value)) return false;
                    arguments[0] = parseFloat(arguments[0]);
                    return this.validateNumber.apply(this, arguments);
                }

                if (this.validateString) {
                    return this.validateString.apply(this, arguments);
                }

                throw 'Validator `' + this.name + '` only handles multiple values';
            }
        },
        // Parses `requirements` into an array of arguments,
        // according to `this.requirementType`
        parseRequirements: function parseRequirements(requirements, extraOptionReader) {
            if ('string' !== typeof requirements) {
                // Assume requirement already parsed
                // but make sure we return an array
                return Array.isArray(requirements) ? requirements : [requirements];
            }

            var type = this.requirementType;

            if (Array.isArray(type)) {
                var values = convertArrayRequirement(requirements, type.length);

                for (var i = 0; i < values.length; i++) {
                    values[i] = Utils.parseRequirement(type[i], values[i]);
                }

                return values;
            } else if ($.isPlainObject(type)) {
                return convertExtraOptionRequirement(type, requirements, extraOptionReader);
            } else {
                return [Utils.parseRequirement(type, requirements)];
            }
        },
        // Defaults:
        requirementType: 'string',
        priority: 2
    };

    var ValidatorRegistry = function ValidatorRegistry(validators, catalog) {
        this.__class__ = 'ValidatorRegistry'; // Default Parsley locale is en

        this.locale = 'en';
        this.init(validators || {}, catalog || {});
    };

    var typeTesters = {
        email: /^((([a-zA-Z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-zA-Z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/,
        // Follow https://www.w3.org/TR/html5/infrastructure.html#floating-point-numbers
        number: /^-?(\d*\.)?\d+(e[-+]?\d+)?$/i,
        integer: /^-?\d+$/,
        digits: /^\d+$/,
        alphanum: /^\w+$/i,
        date: {
            test: function test(value) {
                return Utils.parse.date(value) !== null;
            }
        },
        url: new RegExp("^" + // protocol identifier
            "(?:(?:https?|ftp)://)?" + // ** mod: make scheme optional
            // user:pass authentication
            "(?:\\S+(?::\\S*)?@)?" + "(?:" + // IP address exclusion
            // private & local networks
            // "(?!(?:10|127)(?:\\.\\d{1,3}){3})" +   // ** mod: allow local networks
            // "(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})" +  // ** mod: allow local networks
            // "(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})" +  // ** mod: allow local networks
            // IP address dotted notation octets
            // excludes loopback network 0.0.0.0
            // excludes reserved space >= 224.0.0.0
            // excludes network & broacast addresses
            // (first & last IP address of each class)
            "(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])" + "(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}" + "(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))" + "|" + // host name
            "(?:(?:[a-zA-Z\\u00a1-\\uffff0-9]-*)*[a-zA-Z\\u00a1-\\uffff0-9]+)" + // domain name
            "(?:\\.(?:[a-zA-Z\\u00a1-\\uffff0-9]-*)*[a-zA-Z\\u00a1-\\uffff0-9]+)*" + // TLD identifier
            "(?:\\.(?:[a-zA-Z\\u00a1-\\uffff]{2,}))" + ")" + // port number
            "(?::\\d{2,5})?" + // resource path
            "(?:/\\S*)?" + "$")
    };
    typeTesters.range = typeTesters.number; // See http://stackoverflow.com/a/10454560/8279

    var decimalPlaces = function decimalPlaces(num) {
        var match = ('' + num).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);

        if (!match) {
            return 0;
        }

        return Math.max(0, // Number of digits right of decimal point.
            (match[1] ? match[1].length : 0) - ( // Adjust for scientific notation.
                match[2] ? +match[2] : 0));
    }; // parseArguments('number', ['1', '2']) => [1, 2]


    var parseArguments = function parseArguments(type, args) {
        return args.map(Utils.parse[type]);
    }; // operatorToValidator returns a validating function for an operator function, applied to the given type


    var operatorToValidator = function operatorToValidator(type, operator) {
        return function (value) {
            for (var _len = arguments.length, requirementsAndInput = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                requirementsAndInput[_key - 1] = arguments[_key];
            }

            requirementsAndInput.pop(); // Get rid of `input` argument

            return operator.apply(void 0, [value].concat(_toConsumableArray(parseArguments(type, requirementsAndInput))));
        };
    };

    var comparisonOperator = function comparisonOperator(operator) {
        return {
            validateDate: operatorToValidator('date', operator),
            validateNumber: operatorToValidator('number', operator),
            requirementType: operator.length <= 2 ? 'string' : ['string', 'string'],
            // Support operators with a 1 or 2 requirement(s)
            priority: 30
        };
    };

    ValidatorRegistry.prototype = {
        init: function init(validators, catalog) {
            this.catalog = catalog; // Copy prototype's validators:

            this.validators = _extends({}, this.validators);

            for (var name in validators) {
                this.addValidator(name, validators[name].fn, validators[name].priority);
            }

            window.Parsley.trigger('parsley:validator:init');
        },
        // Set new messages locale if we have dictionary loaded in ParsleyConfig.i18n
        setLocale: function setLocale(locale) {
            if ('undefined' === typeof this.catalog[locale]) throw new Error(locale + ' is not available in the catalog');
            this.locale = locale;
            return this;
        },
        // Add a new messages catalog for a given locale. Set locale for this catalog if set === `true`
        addCatalog: function addCatalog(locale, messages, set) {
            if ('object' === _typeof(messages)) this.catalog[locale] = messages;
            if (true === set) return this.setLocale(locale);
            return this;
        },
        // Add a specific message for a given constraint in a given locale
        addMessage: function addMessage(locale, name, message) {
            if ('undefined' === typeof this.catalog[locale]) this.catalog[locale] = {};
            this.catalog[locale][name] = message;
            return this;
        },
        // Add messages for a given locale
        addMessages: function addMessages(locale, nameMessageObject) {
            for (var name in nameMessageObject) {
                this.addMessage(locale, name, nameMessageObject[name]);
            }

            return this;
        },
        // Add a new validator
        //
        //    addValidator('custom', {
        //        requirementType: ['integer', 'integer'],
        //        validateString: function(value, from, to) {},
        //        priority: 22,
        //        messages: {
        //          en: "Hey, that's no good",
        //          fr: "Aye aye, pas bon du tout",
        //        }
        //    })
        //
        // Old API was addValidator(name, function, priority)
        //
        addValidator: function addValidator(name, arg1, arg2) {
            if (this.validators[name]) Utils.warn('Validator "' + name + '" is already defined.');else if (Defaults.hasOwnProperty(name)) {
                Utils.warn('"' + name + '" is a restricted keyword and is not a valid validator name.');
                return;
            }
            return this._setValidator.apply(this, arguments);
        },
        hasValidator: function hasValidator(name) {
            return !!this.validators[name];
        },
        updateValidator: function updateValidator(name, arg1, arg2) {
            if (!this.validators[name]) {
                Utils.warn('Validator "' + name + '" is not already defined.');
                return this.addValidator.apply(this, arguments);
            }

            return this._setValidator.apply(this, arguments);
        },
        removeValidator: function removeValidator(name) {
            if (!this.validators[name]) Utils.warn('Validator "' + name + '" is not defined.');
            delete this.validators[name];
            return this;
        },
        _setValidator: function _setValidator(name, validator, priority) {
            if ('object' !== _typeof(validator)) {
                // Old style validator, with `fn` and `priority`
                validator = {
                    fn: validator,
                    priority: priority
                };
            }

            if (!validator.validate) {
                validator = new Validator(validator);
            }

            this.validators[name] = validator;

            for (var locale in validator.messages || {}) {
                this.addMessage(locale, name, validator.messages[locale]);
            }

            return this;
        },
        getErrorMessage: function getErrorMessage(constraint) {
            var message; // Type constraints are a bit different, we have to match their requirements too to find right error message

            if ('type' === constraint.name) {
                var typeMessages = this.catalog[this.locale][constraint.name] || {};
                message = typeMessages[constraint.requirements];
            } else message = this.formatMessage(this.catalog[this.locale][constraint.name], constraint.requirements);

            return message || this.catalog[this.locale].defaultMessage || this.catalog.en.defaultMessage;
        },
        // Kind of light `sprintf()` implementation
        formatMessage: function formatMessage(string, parameters) {
            if ('object' === _typeof(parameters)) {
                for (var i in parameters) {
                    string = this.formatMessage(string, parameters[i]);
                }

                return string;
            }

            return 'string' === typeof string ? string.replace(/%s/i, parameters) : '';
        },
        // Here is the Parsley default validators list.
        // A validator is an object with the following key values:
        //  - priority: an integer
        //  - requirement: 'string' (default), 'integer', 'number', 'regexp' or an Array of these
        //  - validateString, validateMultiple, validateNumber: functions returning `true`, `false` or a promise
        // Alternatively, a validator can be a function that returns such an object
        //
        validators: {
            notblank: {
                validateString: function validateString(value) {
                    return /\S/.test(value);
                },
                priority: 2
            },
            required: {
                validateMultiple: function validateMultiple(values) {
                    return values.length > 0;
                },
                validateString: function validateString(value) {
                    return /\S/.test(value);
                },
                priority: 512
            },
            type: {
                validateString: function validateString(value, type) {
                    var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
                        _ref$step = _ref.step,
                        step = _ref$step === void 0 ? 'any' : _ref$step,
                        _ref$base = _ref.base,
                        base = _ref$base === void 0 ? 0 : _ref$base;

                    var tester = typeTesters[type];

                    if (!tester) {
                        throw new Error('validator type `' + type + '` is not supported');
                    }

                    if (!value) return true; // Builtin validators all accept empty strings, except `required` of course

                    if (!tester.test(value)) return false;

                    if ('number' === type) {
                        if (!/^any$/i.test(step || '')) {
                            var nb = Number(value);
                            var decimals = Math.max(decimalPlaces(step), decimalPlaces(base));
                            if (decimalPlaces(nb) > decimals) // Value can't have too many decimals
                                return false; // Be careful of rounding errors by using integers.

                            var toInt = function toInt(f) {
                                return Math.round(f * Math.pow(10, decimals));
                            };

                            if ((toInt(nb) - toInt(base)) % toInt(step) != 0) return false;
                        }
                    }

                    return true;
                },
                requirementType: {
                    '': 'string',
                    step: 'string',
                    base: 'number'
                },
                priority: 256
            },
            pattern: {
                validateString: function validateString(value, regexp) {
                    if (!value) return true; // Builtin validators all accept empty strings, except `required` of course

                    return regexp.test(value);
                },
                requirementType: 'regexp',
                priority: 64
            },
            minlength: {
                validateString: function validateString(value, requirement) {
                    if (!value) return true; // Builtin validators all accept empty strings, except `required` of course

                    return value.length >= requirement;
                },
                requirementType: 'integer',
                priority: 30
            },
            maxlength: {
                validateString: function validateString(value, requirement) {
                    return value.length <= requirement;
                },
                requirementType: 'integer',
                priority: 30
            },
            length: {
                validateString: function validateString(value, min, max) {
                    if (!value) return true; // Builtin validators all accept empty strings, except `required` of course

                    return value.length >= min && value.length <= max;
                },
                requirementType: ['integer', 'integer'],
                priority: 30
            },
            mincheck: {
                validateMultiple: function validateMultiple(values, requirement) {
                    return values.length >= requirement;
                },
                requirementType: 'integer',
                priority: 30
            },
            maxcheck: {
                validateMultiple: function validateMultiple(values, requirement) {
                    return values.length <= requirement;
                },
                requirementType: 'integer',
                priority: 30
            },
            check: {
                validateMultiple: function validateMultiple(values, min, max) {
                    return values.length >= min && values.length <= max;
                },
                requirementType: ['integer', 'integer'],
                priority: 30
            },
            min: comparisonOperator(function (value, requirement) {
                return value >= requirement;
            }),
            max: comparisonOperator(function (value, requirement) {
                return value <= requirement;
            }),
            range: comparisonOperator(function (value, min, max) {
                return value >= min && value <= max;
            }),
            equalto: {
                validateString: function validateString(value, refOrValue) {
                    if (!value) return true; // Builtin validators all accept empty strings, except `required` of course

                    var $reference = $(refOrValue);
                    if ($reference.length) return value === $reference.val();else return value === refOrValue;
                },
                priority: 256
            },
            euvatin: {
                validateString: function validateString(value, refOrValue) {
                    if (!value) {
                        return true; // Builtin validators all accept empty strings, except `required` of course
                    }

                    var re = /^[A-Z][A-Z][A-Za-z0-9 -]{2,}$/;
                    return re.test(value);
                },
                priority: 30
            }
        }
    };

    var UI = {};

    var diffResults = function diffResults(newResult, oldResult, deep) {
        var added = [];
        var kept = [];

        for (var i = 0; i < newResult.length; i++) {
            var found = false;

            for (var j = 0; j < oldResult.length; j++) {
                if (newResult[i].assert.name === oldResult[j].assert.name) {
                    found = true;
                    break;
                }
            }

            if (found) kept.push(newResult[i]);else added.push(newResult[i]);
        }

        return {
            kept: kept,
            added: added,
            removed: !deep ? diffResults(oldResult, newResult, true).added : []
        };
    };

    UI.Form = {
        _actualizeTriggers: function _actualizeTriggers() {
            var _this = this;

            this.$element.on('submit.Parsley', function (evt) {
                _this.onSubmitValidate(evt);
            });
            this.$element.on('click.Parsley', Utils._SubmitSelector, function (evt) {
                _this.onSubmitButton(evt);
            }); // UI could be disabled

            if (false === this.options.uiEnabled) return;
            this.element.setAttribute('novalidate', '');
        },
        focus: function focus() {
            this._focusedField = null;
            if (true === this.validationResult || 'none' === this.options.focus) return null;

            for (var i = 0; i < this.fields.length; i++) {
                var field = this.fields[i];

                if (true !== field.validationResult && field.validationResult.length > 0 && 'undefined' === typeof field.options.noFocus) {
                    this._focusedField = field.$element;
                    if ('first' === this.options.focus) break;
                }
            }

            if (null === this._focusedField) return null;
            return this._focusedField.focus();
        },
        _destroyUI: function _destroyUI() {
            // Reset all event listeners
            this.$element.off('.Parsley');
        }
    };
    UI.Field = {
        _reflowUI: function _reflowUI() {
            this._buildUI(); // If this field doesn't have an active UI don't bother doing something


            if (!this._ui) return; // Diff between two validation results

            var diff = diffResults(this.validationResult, this._ui.lastValidationResult); // Then store current validation result for next reflow

            this._ui.lastValidationResult = this.validationResult; // Handle valid / invalid / none field class

            this._manageStatusClass(); // Add, remove, updated errors messages


            this._manageErrorsMessages(diff); // Triggers impl


            this._actualizeTriggers(); // If field is not valid for the first time, bind keyup trigger to ease UX and quickly inform user


            if ((diff.kept.length || diff.added.length) && !this._failedOnce) {
                this._failedOnce = true;

                this._actualizeTriggers();
            }
        },
        // Returns an array of field's error message(s)
        getErrorsMessages: function getErrorsMessages() {
            // No error message, field is valid
            if (true === this.validationResult) return [];
            var messages = [];

            for (var i = 0; i < this.validationResult.length; i++) {
                messages.push(this.validationResult[i].errorMessage || this._getErrorMessage(this.validationResult[i].assert));
            }

            return messages;
        },
        // It's a goal of Parsley that this method is no longer required [#1073]
        addError: function addError(name) {
            var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
                message = _ref.message,
                assert = _ref.assert,
                _ref$updateClass = _ref.updateClass,
                updateClass = _ref$updateClass === void 0 ? true : _ref$updateClass;

            this._buildUI();

            this._addError(name, {
                message: message,
                assert: assert
            });

            if (updateClass) this._errorClass();
        },
        // It's a goal of Parsley that this method is no longer required [#1073]
        updateError: function updateError(name) {
            var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
                message = _ref2.message,
                assert = _ref2.assert,
                _ref2$updateClass = _ref2.updateClass,
                updateClass = _ref2$updateClass === void 0 ? true : _ref2$updateClass;

            this._buildUI();

            this._updateError(name, {
                message: message,
                assert: assert
            });

            if (updateClass) this._errorClass();
        },
        // It's a goal of Parsley that this method is no longer required [#1073]
        removeError: function removeError(name) {
            var _ref3 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
                _ref3$updateClass = _ref3.updateClass,
                updateClass = _ref3$updateClass === void 0 ? true : _ref3$updateClass;

            this._buildUI();

            this._removeError(name); // edge case possible here: remove a standard Parsley error that is still failing in this.validationResult
            // but highly improbable cuz' manually removing a well Parsley handled error makes no sense.


            if (updateClass) this._manageStatusClass();
        },
        _manageStatusClass: function _manageStatusClass() {
            if (this.hasConstraints() && this.needsValidation() && true === this.validationResult) this._successClass();else if (this.validationResult.length > 0) this._errorClass();else this._resetClass();
        },
        _manageErrorsMessages: function _manageErrorsMessages(diff) {
            if ('undefined' !== typeof this.options.errorsMessagesDisabled) return; // Case where we have errorMessage option that configure an unique field error message, regardless failing validators

            if ('undefined' !== typeof this.options.errorMessage) {
                if (diff.added.length || diff.kept.length) {
                    this._insertErrorWrapper();

                    if (0 === this._ui.$errorsWrapper.find('.parsley-custom-error-message').length) this._ui.$errorsWrapper.append($(this.options.errorTemplate).addClass('parsley-custom-error-message'));
                    return this._ui.$errorsWrapper.addClass('filled').find('.parsley-custom-error-message').html(this.options.errorMessage);
                }

                return this._ui.$errorsWrapper.removeClass('filled').find('.parsley-custom-error-message').remove();
            } // Show, hide, update failing constraints messages


            for (var i = 0; i < diff.removed.length; i++) {
                this._removeError(diff.removed[i].assert.name);
            }

            for (i = 0; i < diff.added.length; i++) {
                this._addError(diff.added[i].assert.name, {
                    message: diff.added[i].errorMessage,
                    assert: diff.added[i].assert
                });
            }

            for (i = 0; i < diff.kept.length; i++) {
                this._updateError(diff.kept[i].assert.name, {
                    message: diff.kept[i].errorMessage,
                    assert: diff.kept[i].assert
                });
            }
        },
        _addError: function _addError(name, _ref4) {
            var message = _ref4.message,
                assert = _ref4.assert;

            this._insertErrorWrapper();

            this._ui.$errorClassHandler.attr('aria-describedby', this._ui.errorsWrapperId);

            this._ui.$errorsWrapper.addClass('filled').append($(this.options.errorTemplate).addClass('parsley-' + name).html(message || this._getErrorMessage(assert)));
        },
        _updateError: function _updateError(name, _ref5) {
            var message = _ref5.message,
                assert = _ref5.assert;

            this._ui.$errorsWrapper.addClass('filled').find('.parsley-' + name).html(message || this._getErrorMessage(assert));
        },
        _removeError: function _removeError(name) {
            this._ui.$errorClassHandler.removeAttr('aria-describedby');

            this._ui.$errorsWrapper.removeClass('filled').find('.parsley-' + name).remove();
        },
        _getErrorMessage: function _getErrorMessage(constraint) {
            var customConstraintErrorMessage = constraint.name + 'Message';
            if ('undefined' !== typeof this.options[customConstraintErrorMessage]) return window.Parsley.formatMessage(this.options[customConstraintErrorMessage], constraint.requirements);
            return window.Parsley.getErrorMessage(constraint);
        },
        _buildUI: function _buildUI() {
            // UI could be already built or disabled
            if (this._ui || false === this.options.uiEnabled) return;
            var _ui = {}; // Give field its Parsley id in DOM

            this.element.setAttribute(this.options.namespace + 'id', this.__id__);
            /** Generate important UI elements and store them in this **/
            // $errorClassHandler is the $element that woul have parsley-error and parsley-success classes

            _ui.$errorClassHandler = this._manageClassHandler(); // $errorsWrapper is a div that would contain the various field errors, it will be appended into $errorsContainer

            _ui.errorsWrapperId = 'parsley-id-' + (this.options.multiple ? 'multiple-' + this.options.multiple : this.__id__);
            _ui.$errorsWrapper = $(this.options.errorsWrapper).attr('id', _ui.errorsWrapperId); // ValidationResult UI storage to detect what have changed bwt two validations, and update DOM accordingly

            _ui.lastValidationResult = [];
            _ui.validationInformationVisible = false; // Store it in this for later

            this._ui = _ui;
        },
        // Determine which element will have `parsley-error` and `parsley-success` classes
        _manageClassHandler: function _manageClassHandler() {
            // Class handled could also be determined by function given in Parsley options
            if ('string' === typeof this.options.classHandler && $(this.options.classHandler).length) return $(this.options.classHandler); // Class handled could also be determined by function given in Parsley options

            var $handlerFunction = this.options.classHandler; // It might also be the function name of a global function

            if ('string' === typeof this.options.classHandler && 'function' === typeof window[this.options.classHandler]) $handlerFunction = window[this.options.classHandler];

            if ('function' === typeof $handlerFunction) {
                var $handler = $handlerFunction.call(this, this); // If this function returned a valid existing DOM element, go for it

                if ('undefined' !== typeof $handler && $handler.length) return $handler;
            } else if ('object' === _typeof($handlerFunction) && $handlerFunction instanceof jQuery && $handlerFunction.length) {
                return $handlerFunction;
            } else if ($handlerFunction) {
                Utils.warn('The class handler `' + $handlerFunction + '` does not exist in DOM nor as a global JS function');
            }

            return this._inputHolder();
        },
        _inputHolder: function _inputHolder() {
            // if simple element (input, texatrea, select...) it will perfectly host the classes and precede the error container
            if (!this.options.multiple || this.element.nodeName === 'SELECT') return this.$element; // But if multiple element (radio, checkbox), that would be their parent

            return this.$element.parent();
        },
        _insertErrorWrapper: function _insertErrorWrapper() {
            var $errorsContainer = this.options.errorsContainer; // Nothing to do if already inserted

            if (0 !== this._ui.$errorsWrapper.parent().length) return this._ui.$errorsWrapper.parent();

            if ('string' === typeof $errorsContainer) {
                if ($($errorsContainer).length) return $($errorsContainer).append(this._ui.$errorsWrapper);else if ('function' === typeof window[$errorsContainer]) $errorsContainer = window[$errorsContainer];else Utils.warn('The errors container `' + $errorsContainer + '` does not exist in DOM nor as a global JS function');
            }

            if ('function' === typeof $errorsContainer) $errorsContainer = $errorsContainer.call(this, this);
            if ('object' === _typeof($errorsContainer) && $errorsContainer.length) return $errorsContainer.append(this._ui.$errorsWrapper);
            return this._inputHolder().after(this._ui.$errorsWrapper);
        },
        _actualizeTriggers: function _actualizeTriggers() {
            var _this2 = this;

            var $toBind = this._findRelated();

            var trigger; // Remove Parsley events already bound on this field

            $toBind.off('.Parsley');
            if (this._failedOnce) $toBind.on(Utils.namespaceEvents(this.options.triggerAfterFailure, 'Parsley'), function () {
                _this2._validateIfNeeded();
            });else if (trigger = Utils.namespaceEvents(this.options.trigger, 'Parsley')) {
                $toBind.on(trigger, function (event) {
                    _this2._validateIfNeeded(event);
                });
            }
        },
        _validateIfNeeded: function _validateIfNeeded(event) {
            var _this3 = this;

            // For keyup, keypress, keydown, input... events that could be a little bit obstrusive
            // do not validate if val length < min threshold on first validation. Once field have been validated once and info
            // about success or failure have been displayed, always validate with this trigger to reflect every yalidation change.
            if (event && /key|input/.test(event.type)) if (!(this._ui && this._ui.validationInformationVisible) && this.getValue().length <= this.options.validationThreshold) return;

            if (this.options.debounce) {
                window.clearTimeout(this._debounced);
                this._debounced = window.setTimeout(function () {
                    return _this3.validate();
                }, this.options.debounce);
            } else this.validate();
        },
        _resetUI: function _resetUI() {
            // Reset all event listeners
            this._failedOnce = false;

            this._actualizeTriggers(); // Nothing to do if UI never initialized for this field


            if ('undefined' === typeof this._ui) return; // Reset all errors' li

            this._ui.$errorsWrapper.removeClass('filled').children().remove(); // Reset validation class


            this._resetClass(); // Reset validation flags and last validation result


            this._ui.lastValidationResult = [];
            this._ui.validationInformationVisible = false;
        },
        _destroyUI: function _destroyUI() {
            this._resetUI();

            if ('undefined' !== typeof this._ui) this._ui.$errorsWrapper.remove();
            delete this._ui;
        },
        _successClass: function _successClass() {
            this._ui.validationInformationVisible = true;

            this._ui.$errorClassHandler.removeClass(this.options.errorClass).addClass(this.options.successClass);
        },
        _errorClass: function _errorClass() {
            this._ui.validationInformationVisible = true;

            this._ui.$errorClassHandler.removeClass(this.options.successClass).addClass(this.options.errorClass);
        },
        _resetClass: function _resetClass() {
            this._ui.$errorClassHandler.removeClass(this.options.successClass).removeClass(this.options.errorClass);
        }
    };

    var Form = function Form(element, domOptions, options) {
        this.__class__ = 'Form';
        this.element = element;
        this.$element = $(element);
        this.domOptions = domOptions;
        this.options = options;
        this.parent = window.Parsley;
        this.fields = [];
        this.validationResult = null;
    };

    var statusMapping = {
        pending: null,
        resolved: true,
        rejected: false
    };
    Form.prototype = {
        onSubmitValidate: function onSubmitValidate(event) {
            var _this = this;

            // This is a Parsley generated submit event, do not validate, do not prevent, simply exit and keep normal behavior
            if (true === event.parsley) return; // If we didn't come here through a submit button, use the first one in the form

            var submitSource = this._submitSource || this.$element.find(Utils._SubmitSelector)[0];
            this._submitSource = null;
            this.$element.find('.parsley-synthetic-submit-button').prop('disabled', true);
            if (submitSource && null !== submitSource.getAttribute('formnovalidate')) return;
            window.Parsley._remoteCache = {};
            var promise = this.whenValidate({
                event: event
            });

            if ('resolved' === promise.state() && false !== this._trigger('submit')) ; else {
                // Rejected or pending: cancel this submit
                event.stopImmediatePropagation();
                event.preventDefault();
                if ('pending' === promise.state()) promise.done(function () {
                    _this._submit(submitSource);
                });
            }
        },
        onSubmitButton: function onSubmitButton(event) {
            this._submitSource = event.currentTarget;
        },
        // internal
        // _submit submits the form, this time without going through the validations.
        // Care must be taken to "fake" the actual submit button being clicked.
        _submit: function _submit(submitSource) {
            if (false === this._trigger('submit')) return; // Add submit button's data

            if (submitSource) {
                var $synthetic = this.$element.find('.parsley-synthetic-submit-button').prop('disabled', false);
                if (0 === $synthetic.length) $synthetic = $('<input class="parsley-synthetic-submit-button" type="hidden">').appendTo(this.$element);
                $synthetic.attr({
                    name: submitSource.getAttribute('name'),
                    value: submitSource.getAttribute('value')
                });
            }

            this.$element.trigger(_extends($.Event('submit'), {
                parsley: true
            }));
        },
        // Performs validation on fields while triggering events.
        // @returns `true` if all validations succeeds, `false`
        // if a failure is immediately detected, or `null`
        // if dependant on a promise.
        // Consider using `whenValidate` instead.
        validate: function validate(options) {
            if (arguments.length >= 1 && !$.isPlainObject(options)) {
                Utils.warnOnce('Calling validate on a parsley form without passing arguments as an object is deprecated.');

                var _arguments = Array.prototype.slice.call(arguments),
                    group = _arguments[0],
                    force = _arguments[1],
                    event = _arguments[2];

                options = {
                    group: group,
                    force: force,
                    event: event
                };
            }

            return statusMapping[this.whenValidate(options).state()];
        },
        whenValidate: function whenValidate() {
            var _this2 = this,
                _Utils$all$done$fail$;

            var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                group = _ref.group,
                force = _ref.force,
                event = _ref.event;

            this.submitEvent = event;

            if (event) {
                this.submitEvent = _extends({}, event, {
                    preventDefault: function preventDefault() {
                        Utils.warnOnce("Using `this.submitEvent.preventDefault()` is deprecated; instead, call `this.validationResult = false`");
                        _this2.validationResult = false;
                    }
                });
            }

            this.validationResult = true; // fire validate event to eventually modify things before every validation

            this._trigger('validate'); // Refresh form DOM options and form's fields that could have changed


            this._refreshFields();

            var promises = this._withoutReactualizingFormOptions(function () {
                return $.map(_this2.fields, function (field) {
                    return field.whenValidate({
                        force: force,
                        group: group
                    });
                });
            });

            return (_Utils$all$done$fail$ = Utils.all(promises).done(function () {
                _this2._trigger('success');
            }).fail(function () {
                _this2.validationResult = false;

                _this2.focus();

                _this2._trigger('error');
            }).always(function () {
                _this2._trigger('validated');
            })).pipe.apply(_Utils$all$done$fail$, _toConsumableArray(this._pipeAccordingToValidationResult()));
        },
        // Iterate over refreshed fields, and stop on first failure.
        // Returns `true` if all fields are valid, `false` if a failure is detected
        // or `null` if the result depends on an unresolved promise.
        // Prefer using `whenValid` instead.
        isValid: function isValid(options) {
            if (arguments.length >= 1 && !$.isPlainObject(options)) {
                Utils.warnOnce('Calling isValid on a parsley form without passing arguments as an object is deprecated.');

                var _arguments2 = Array.prototype.slice.call(arguments),
                    group = _arguments2[0],
                    force = _arguments2[1];

                options = {
                    group: group,
                    force: force
                };
            }

            return statusMapping[this.whenValid(options).state()];
        },
        // Iterate over refreshed fields and validate them.
        // Returns a promise.
        // A validation that immediately fails will interrupt the validations.
        whenValid: function whenValid() {
            var _this3 = this;

            var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                group = _ref2.group,
                force = _ref2.force;

            this._refreshFields();

            var promises = this._withoutReactualizingFormOptions(function () {
                return $.map(_this3.fields, function (field) {
                    return field.whenValid({
                        group: group,
                        force: force
                    });
                });
            });

            return Utils.all(promises);
        },
        refresh: function refresh() {
            this._refreshFields();

            return this;
        },
        // Reset UI
        reset: function reset() {
            // Form case: emit a reset event for each field
            for (var i = 0; i < this.fields.length; i++) {
                this.fields[i].reset();
            }

            this._trigger('reset');
        },
        // Destroy Parsley instance (+ UI)
        destroy: function destroy() {
            // Field case: emit destroy event to clean UI and then destroy stored instance
            this._destroyUI(); // Form case: destroy all its fields and then destroy stored instance


            for (var i = 0; i < this.fields.length; i++) {
                this.fields[i].destroy();
            }

            this.$element.removeData('Parsley');

            this._trigger('destroy');
        },
        _refreshFields: function _refreshFields() {
            return this.actualizeOptions()._bindFields();
        },
        _bindFields: function _bindFields() {
            var _this4 = this;

            var oldFields = this.fields;
            this.fields = [];
            this.fieldsMappedById = {};

            this._withoutReactualizingFormOptions(function () {
                _this4.$element.find(_this4.options.inputs).not(_this4.options.excluded).not("[".concat(_this4.options.namespace, "excluded=true]")).each(function (_, element) {
                    var fieldInstance = new window.Parsley.Factory(element, {}, _this4); // Only add valid and not excluded `Field` and `FieldMultiple` children

                    if ('Field' === fieldInstance.__class__ || 'FieldMultiple' === fieldInstance.__class__) {
                        var uniqueId = fieldInstance.__class__ + '-' + fieldInstance.__id__;

                        if ('undefined' === typeof _this4.fieldsMappedById[uniqueId]) {
                            _this4.fieldsMappedById[uniqueId] = fieldInstance;

                            _this4.fields.push(fieldInstance);
                        }
                    }
                });

                $.each(Utils.difference(oldFields, _this4.fields), function (_, field) {
                    field.reset();
                });
            });

            return this;
        },
        // Internal only.
        // Looping on a form's fields to do validation or similar
        // will trigger reactualizing options on all of them, which
        // in turn will reactualize the form's options.
        // To avoid calling actualizeOptions so many times on the form
        // for nothing, _withoutReactualizingFormOptions temporarily disables
        // the method actualizeOptions on this form while `fn` is called.
        _withoutReactualizingFormOptions: function _withoutReactualizingFormOptions(fn) {
            var oldActualizeOptions = this.actualizeOptions;

            this.actualizeOptions = function () {
                return this;
            };

            var result = fn();
            this.actualizeOptions = oldActualizeOptions;
            return result;
        },
        // Internal only.
        // Shortcut to trigger an event
        // Returns true iff event is not interrupted and default not prevented.
        _trigger: function _trigger(eventName) {
            return this.trigger('form:' + eventName);
        }
    };

    var Constraint = function Constraint(parsleyField, name, requirements, priority, isDomConstraint) {
        var validatorSpec = window.Parsley._validatorRegistry.validators[name];
        var validator = new Validator(validatorSpec);
        priority = priority || parsleyField.options[name + 'Priority'] || validator.priority;
        isDomConstraint = true === isDomConstraint;

        _extends(this, {
            validator: validator,
            name: name,
            requirements: requirements,
            priority: priority,
            isDomConstraint: isDomConstraint
        });

        this._parseRequirements(parsleyField.options);
    };

    var capitalize = function capitalize(str) {
        var cap = str[0].toUpperCase();
        return cap + str.slice(1);
    };

    Constraint.prototype = {
        validate: function validate(value, instance) {
            var _this$validator;

            return (_this$validator = this.validator).validate.apply(_this$validator, [value].concat(_toConsumableArray(this.requirementList), [instance]));
        },
        _parseRequirements: function _parseRequirements(options) {
            var _this = this;

            this.requirementList = this.validator.parseRequirements(this.requirements, function (key) {
                return options[_this.name + capitalize(key)];
            });
        }
    };

    var Field = function Field(field, domOptions, options, parsleyFormInstance) {
        this.__class__ = 'Field';
        this.element = field;
        this.$element = $(field); // Set parent if we have one

        if ('undefined' !== typeof parsleyFormInstance) {
            this.parent = parsleyFormInstance;
        }

        this.options = options;
        this.domOptions = domOptions; // Initialize some properties

        this.constraints = [];
        this.constraintsByName = {};
        this.validationResult = true; // Bind constraints

        this._bindConstraints();
    };

    var statusMapping$1 = {
        pending: null,
        resolved: true,
        rejected: false
    };
    Field.prototype = {
        // # Public API
        // Validate field and trigger some events for mainly `UI`
        // @returns `true`, an array of the validators that failed, or
        // `null` if validation is not finished. Prefer using whenValidate
        validate: function validate(options) {
            if (arguments.length >= 1 && !$.isPlainObject(options)) {
                Utils.warnOnce('Calling validate on a parsley field without passing arguments as an object is deprecated.');
                options = {
                    options: options
                };
            }

            var promise = this.whenValidate(options);
            if (!promise) // If excluded with `group` option
                return true;

            switch (promise.state()) {
                case 'pending':
                    return null;

                case 'resolved':
                    return true;

                case 'rejected':
                    return this.validationResult;
            }
        },
        // Validate field and trigger some events for mainly `UI`
        // @returns a promise that succeeds only when all validations do
        // or `undefined` if field is not in the given `group`.
        whenValidate: function whenValidate() {
            var _this$whenValid$alway,
                _this = this;

            var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                force = _ref.force,
                group = _ref.group;

            // do not validate a field if not the same as given validation group
            this.refresh();
            if (group && !this._isInGroup(group)) return;
            this.value = this.getValue(); // Field Validate event. `this.value` could be altered for custom needs

            this._trigger('validate');

            return (_this$whenValid$alway = this.whenValid({
                force: force,
                value: this.value,
                _refreshed: true
            }).always(function () {
                _this._reflowUI();
            }).done(function () {
                _this._trigger('success');
            }).fail(function () {
                _this._trigger('error');
            }).always(function () {
                _this._trigger('validated');
            })).pipe.apply(_this$whenValid$alway, _toConsumableArray(this._pipeAccordingToValidationResult()));
        },
        hasConstraints: function hasConstraints() {
            return 0 !== this.constraints.length;
        },
        // An empty optional field does not need validation
        needsValidation: function needsValidation(value) {
            if ('undefined' === typeof value) value = this.getValue(); // If a field is empty and not required, it is valid
            // Except if `data-parsley-validate-if-empty` explicitely added, useful for some custom validators

            if (!value.length && !this._isRequired() && 'undefined' === typeof this.options.validateIfEmpty) return false;
            return true;
        },
        _isInGroup: function _isInGroup(group) {
            if (Array.isArray(this.options.group)) return -1 !== $.inArray(group, this.options.group);
            return this.options.group === group;
        },
        // Just validate field. Do not trigger any event.
        // Returns `true` iff all constraints pass, `false` if there are failures,
        // or `null` if the result can not be determined yet (depends on a promise)
        // See also `whenValid`.
        isValid: function isValid(options) {
            if (arguments.length >= 1 && !$.isPlainObject(options)) {
                Utils.warnOnce('Calling isValid on a parsley field without passing arguments as an object is deprecated.');

                var _arguments = Array.prototype.slice.call(arguments),
                    force = _arguments[0],
                    value = _arguments[1];

                options = {
                    force: force,
                    value: value
                };
            }

            var promise = this.whenValid(options);
            if (!promise) // Excluded via `group`
                return true;
            return statusMapping$1[promise.state()];
        },
        // Just validate field. Do not trigger any event.
        // @returns a promise that succeeds only when all validations do
        // or `undefined` if the field is not in the given `group`.
        // The argument `force` will force validation of empty fields.
        // If a `value` is given, it will be validated instead of the value of the input.
        whenValid: function whenValid() {
            var _this2 = this;

            var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                _ref2$force = _ref2.force,
                force = _ref2$force === void 0 ? false : _ref2$force,
                value = _ref2.value,
                group = _ref2.group,
                _refreshed = _ref2._refreshed;

            // Recompute options and rebind constraints to have latest changes
            if (!_refreshed) this.refresh(); // do not validate a field if not the same as given validation group

            if (group && !this._isInGroup(group)) return;
            this.validationResult = true; // A field without constraint is valid

            if (!this.hasConstraints()) return $.when(); // Value could be passed as argument, needed to add more power to 'field:validate'

            if ('undefined' === typeof value || null === value) value = this.getValue();
            if (!this.needsValidation(value) && true !== force) return $.when();

            var groupedConstraints = this._getGroupedConstraints();

            var promises = [];
            $.each(groupedConstraints, function (_, constraints) {
                // Process one group of constraints at a time, we validate the constraints
                // and combine the promises together.
                var promise = Utils.all($.map(constraints, function (constraint) {
                    return _this2._validateConstraint(value, constraint);
                }));
                promises.push(promise);
                if (promise.state() === 'rejected') return false; // Interrupt processing if a group has already failed
            });
            return Utils.all(promises);
        },
        // @returns a promise
        _validateConstraint: function _validateConstraint(value, constraint) {
            var _this3 = this;

            var result = constraint.validate(value, this); // Map false to a failed promise

            if (false === result) result = $.Deferred().reject(); // Make sure we return a promise and that we record failures

            return Utils.all([result]).fail(function (errorMessage) {
                if (!(_this3.validationResult instanceof Array)) _this3.validationResult = [];

                _this3.validationResult.push({
                    assert: constraint,
                    errorMessage: 'string' === typeof errorMessage && errorMessage
                });
            });
        },
        // @returns Parsley field computed value that could be overrided or configured in DOM
        getValue: function getValue() {
            var value; // Value could be overriden in DOM or with explicit options

            if ('function' === typeof this.options.value) value = this.options.value(this);else if ('undefined' !== typeof this.options.value) value = this.options.value;else value = this.$element.val(); // Handle wrong DOM or configurations

            if ('undefined' === typeof value || null === value) return '';
            return this._handleWhitespace(value);
        },
        // Reset UI
        reset: function reset() {
            this._resetUI();

            return this._trigger('reset');
        },
        // Destroy Parsley instance (+ UI)
        destroy: function destroy() {
            // Field case: emit destroy event to clean UI and then destroy stored instance
            this._destroyUI();

            this.$element.removeData('Parsley');
            this.$element.removeData('FieldMultiple');

            this._trigger('destroy');
        },
        // Actualize options and rebind constraints
        refresh: function refresh() {
            this._refreshConstraints();

            return this;
        },
        _refreshConstraints: function _refreshConstraints() {
            return this.actualizeOptions()._bindConstraints();
        },
        refreshConstraints: function refreshConstraints() {
            Utils.warnOnce("Parsley's refreshConstraints is deprecated. Please use refresh");
            return this.refresh();
        },

        /**
         * Add a new constraint to a field
         *
         * @param {String}   name
         * @param {Mixed}    requirements      optional
         * @param {Number}   priority          optional
         * @param {Boolean}  isDomConstraint   optional
         */
        addConstraint: function addConstraint(name, requirements, priority, isDomConstraint) {
            if (window.Parsley._validatorRegistry.validators[name]) {
                var constraint = new Constraint(this, name, requirements, priority, isDomConstraint); // if constraint already exist, delete it and push new version

                if ('undefined' !== this.constraintsByName[constraint.name]) this.removeConstraint(constraint.name);
                this.constraints.push(constraint);
                this.constraintsByName[constraint.name] = constraint;
            }

            return this;
        },
        // Remove a constraint
        removeConstraint: function removeConstraint(name) {
            for (var i = 0; i < this.constraints.length; i++) {
                if (name === this.constraints[i].name) {
                    this.constraints.splice(i, 1);
                    break;
                }
            }

            delete this.constraintsByName[name];
            return this;
        },
        // Update a constraint (Remove + re-add)
        updateConstraint: function updateConstraint(name, parameters, priority) {
            return this.removeConstraint(name).addConstraint(name, parameters, priority);
        },
        // # Internals
        // Internal only.
        // Bind constraints from config + options + DOM
        _bindConstraints: function _bindConstraints() {
            var constraints = [];
            var constraintsByName = {}; // clean all existing DOM constraints to only keep javascript user constraints

            for (var i = 0; i < this.constraints.length; i++) {
                if (false === this.constraints[i].isDomConstraint) {
                    constraints.push(this.constraints[i]);
                    constraintsByName[this.constraints[i].name] = this.constraints[i];
                }
            }

            this.constraints = constraints;
            this.constraintsByName = constraintsByName; // then re-add Parsley DOM-API constraints

            for (var name in this.options) {
                this.addConstraint(name, this.options[name], undefined, true);
            } // finally, bind special HTML5 constraints


            return this._bindHtml5Constraints();
        },
        // Internal only.
        // Bind specific HTML5 constraints to be HTML5 compliant
        _bindHtml5Constraints: function _bindHtml5Constraints() {
            // html5 required
            if (null !== this.element.getAttribute('required')) this.addConstraint('required', true, undefined, true); // html5 pattern

            if (null !== this.element.getAttribute('pattern')) this.addConstraint('pattern', this.element.getAttribute('pattern'), undefined, true); // range

            var min = this.element.getAttribute('min');
            var max = this.element.getAttribute('max');
            if (null !== min && null !== max) this.addConstraint('range', [min, max], undefined, true); // HTML5 min
            else if (null !== min) this.addConstraint('min', min, undefined, true); // HTML5 max
            else if (null !== max) this.addConstraint('max', max, undefined, true); // length

            if (null !== this.element.getAttribute('minlength') && null !== this.element.getAttribute('maxlength')) this.addConstraint('length', [this.element.getAttribute('minlength'), this.element.getAttribute('maxlength')], undefined, true); // HTML5 minlength
            else if (null !== this.element.getAttribute('minlength')) this.addConstraint('minlength', this.element.getAttribute('minlength'), undefined, true); // HTML5 maxlength
            else if (null !== this.element.getAttribute('maxlength')) this.addConstraint('maxlength', this.element.getAttribute('maxlength'), undefined, true); // html5 types

            var type = Utils.getType(this.element); // Small special case here for HTML5 number: integer validator if step attribute is undefined or an integer value, number otherwise

            if ('number' === type) {
                return this.addConstraint('type', ['number', {
                    step: this.element.getAttribute('step') || '1',
                    base: min || this.element.getAttribute('value')
                }], undefined, true); // Regular other HTML5 supported types
            } else if (/^(email|url|range|date)$/i.test(type)) {
                return this.addConstraint('type', type, undefined, true);
            }

            return this;
        },
        // Internal only.
        // Field is required if have required constraint without `false` value
        _isRequired: function _isRequired() {
            if ('undefined' === typeof this.constraintsByName.required) return false;
            return false !== this.constraintsByName.required.requirements;
        },
        // Internal only.
        // Shortcut to trigger an event
        _trigger: function _trigger(eventName) {
            return this.trigger('field:' + eventName);
        },
        // Internal only
        // Handles whitespace in a value
        // Use `data-parsley-whitespace="squish"` to auto squish input value
        // Use `data-parsley-whitespace="trim"` to auto trim input value
        _handleWhitespace: function _handleWhitespace(value) {
            if (true === this.options.trimValue) Utils.warnOnce('data-parsley-trim-value="true" is deprecated, please use data-parsley-whitespace="trim"');
            if ('squish' === this.options.whitespace) value = value.replace(/\s{2,}/g, ' ');
            if ('trim' === this.options.whitespace || 'squish' === this.options.whitespace || true === this.options.trimValue) value = Utils.trimString(value);
            return value;
        },
        _isDateInput: function _isDateInput() {
            var c = this.constraintsByName.type;
            return c && c.requirements === 'date';
        },
        // Internal only.
        // Returns the constraints, grouped by descending priority.
        // The result is thus an array of arrays of constraints.
        _getGroupedConstraints: function _getGroupedConstraints() {
            if (false === this.options.priorityEnabled) return [this.constraints];
            var groupedConstraints = [];
            var index = {}; // Create array unique of priorities

            for (var i = 0; i < this.constraints.length; i++) {
                var p = this.constraints[i].priority;
                if (!index[p]) groupedConstraints.push(index[p] = []);
                index[p].push(this.constraints[i]);
            } // Sort them by priority DESC


            groupedConstraints.sort(function (a, b) {
                return b[0].priority - a[0].priority;
            });
            return groupedConstraints;
        }
    };

    var Multiple = function Multiple() {
        this.__class__ = 'FieldMultiple';
    };

    Multiple.prototype = {
        // Add new `$element` sibling for multiple field
        addElement: function addElement($element) {
            this.$elements.push($element);
            return this;
        },
        // See `Field._refreshConstraints()`
        _refreshConstraints: function _refreshConstraints() {
            var fieldConstraints;
            this.constraints = []; // Select multiple special treatment

            if (this.element.nodeName === 'SELECT') {
                this.actualizeOptions()._bindConstraints();

                return this;
            } // Gather all constraints for each input in the multiple group


            for (var i = 0; i < this.$elements.length; i++) {
                // Check if element have not been dynamically removed since last binding
                if (!$('html').has(this.$elements[i]).length) {
                    this.$elements.splice(i, 1);
                    continue;
                }

                fieldConstraints = this.$elements[i].data('FieldMultiple')._refreshConstraints().constraints;

                for (var j = 0; j < fieldConstraints.length; j++) {
                    this.addConstraint(fieldConstraints[j].name, fieldConstraints[j].requirements, fieldConstraints[j].priority, fieldConstraints[j].isDomConstraint);
                }
            }

            return this;
        },
        // See `Field.getValue()`
        getValue: function getValue() {
            // Value could be overriden in DOM
            if ('function' === typeof this.options.value) return this.options.value(this);else if ('undefined' !== typeof this.options.value) return this.options.value; // Radio input case

            if (this.element.nodeName === 'INPUT') {
                var type = Utils.getType(this.element);
                if (type === 'radio') return this._findRelated().filter(':checked').val() || ''; // checkbox input case

                if (type === 'checkbox') {
                    var values = [];

                    this._findRelated().filter(':checked').each(function () {
                        values.push($(this).val());
                    });

                    return values;
                }
            } // Select multiple case


            if (this.element.nodeName === 'SELECT' && null === this.$element.val()) return []; // Default case that should never happen

            return this.$element.val();
        },
        _init: function _init() {
            this.$elements = [this.$element];
            return this;
        }
    };

    var Factory = function Factory(element, options, parsleyFormInstance) {
        this.element = element;
        this.$element = $(element); // If the element has already been bound, returns its saved Parsley instance

        var savedparsleyFormInstance = this.$element.data('Parsley');

        if (savedparsleyFormInstance) {
            // If the saved instance has been bound without a Form parent and there is one given in this call, add it
            if ('undefined' !== typeof parsleyFormInstance && savedparsleyFormInstance.parent === window.Parsley) {
                savedparsleyFormInstance.parent = parsleyFormInstance;

                savedparsleyFormInstance._resetOptions(savedparsleyFormInstance.options);
            }

            if ('object' === _typeof(options)) {
                _extends(savedparsleyFormInstance.options, options);
            }

            return savedparsleyFormInstance;
        } // Parsley must be instantiated with a DOM element or jQuery $element


        if (!this.$element.length) throw new Error('You must bind Parsley on an existing element.');
        if ('undefined' !== typeof parsleyFormInstance && 'Form' !== parsleyFormInstance.__class__) throw new Error('Parent instance must be a Form instance');
        this.parent = parsleyFormInstance || window.Parsley;
        return this.init(options);
    };

    Factory.prototype = {
        init: function init(options) {
            this.__class__ = 'Parsley';
            this.__version__ = '2.9.1';
            this.__id__ = Utils.generateID(); // Pre-compute options

            this._resetOptions(options); // A Form instance is obviously a `<form>` element but also every node that is not an input and has the `data-parsley-validate` attribute


            if (this.element.nodeName === 'FORM' || Utils.checkAttr(this.element, this.options.namespace, 'validate') && !this.$element.is(this.options.inputs)) return this.bind('parsleyForm'); // Every other element is bound as a `Field` or `FieldMultiple`

            return this.isMultiple() ? this.handleMultiple() : this.bind('parsleyField');
        },
        isMultiple: function isMultiple() {
            var type = Utils.getType(this.element);
            return type === 'radio' || type === 'checkbox' || this.element.nodeName === 'SELECT' && null !== this.element.getAttribute('multiple');
        },
        // Multiples fields are a real nightmare :(
        // Maybe some refactoring would be appreciated here...
        handleMultiple: function handleMultiple() {
            var _this = this;

            var name;
            var parsleyMultipleInstance; // Handle multiple name

            this.options.multiple = this.options.multiple || (name = this.element.getAttribute('name')) || this.element.getAttribute('id'); // Special select multiple input

            if (this.element.nodeName === 'SELECT' && null !== this.element.getAttribute('multiple')) {
                this.options.multiple = this.options.multiple || this.__id__;
                return this.bind('parsleyFieldMultiple'); // Else for radio / checkboxes, we need a `name` or `data-parsley-multiple` to properly bind it
            } else if (!this.options.multiple) {
                Utils.warn('To be bound by Parsley, a radio, a checkbox and a multiple select input must have either a name or a multiple option.', this.$element);
                return this;
            } // Remove special chars


            this.options.multiple = this.options.multiple.replace(/(:|\.|\[|\]|\{|\}|\$)/g, ''); // Add proper `data-parsley-multiple` to siblings if we have a valid multiple name

            if (name) {
                $('input[name="' + name + '"]').each(function (i, input) {
                    var type = Utils.getType(input);
                    if (type === 'radio' || type === 'checkbox') input.setAttribute(_this.options.namespace + 'multiple', _this.options.multiple);
                });
            } // Check here if we don't already have a related multiple instance saved


            var $previouslyRelated = this._findRelated();

            for (var i = 0; i < $previouslyRelated.length; i++) {
                parsleyMultipleInstance = $($previouslyRelated.get(i)).data('Parsley');

                if ('undefined' !== typeof parsleyMultipleInstance) {
                    if (!this.$element.data('FieldMultiple')) {
                        parsleyMultipleInstance.addElement(this.$element);
                    }

                    break;
                }
            } // Create a secret Field instance for every multiple field. It will be stored in `data('FieldMultiple')`
            // And will be useful later to access classic `Field` stuff while being in a `FieldMultiple` instance


            this.bind('parsleyField', true);
            return parsleyMultipleInstance || this.bind('parsleyFieldMultiple');
        },
        // Return proper `Form`, `Field` or `FieldMultiple`
        bind: function bind(type, doNotStore) {
            var parsleyInstance;

            switch (type) {
                case 'parsleyForm':
                    parsleyInstance = $.extend(new Form(this.element, this.domOptions, this.options), new Base(), window.ParsleyExtend)._bindFields();
                    break;

                case 'parsleyField':
                    parsleyInstance = $.extend(new Field(this.element, this.domOptions, this.options, this.parent), new Base(), window.ParsleyExtend);
                    break;

                case 'parsleyFieldMultiple':
                    parsleyInstance = $.extend(new Field(this.element, this.domOptions, this.options, this.parent), new Multiple(), new Base(), window.ParsleyExtend)._init();
                    break;

                default:
                    throw new Error(type + 'is not a supported Parsley type');
            }

            if (this.options.multiple) Utils.setAttr(this.element, this.options.namespace, 'multiple', this.options.multiple);

            if ('undefined' !== typeof doNotStore) {
                this.$element.data('FieldMultiple', parsleyInstance);
                return parsleyInstance;
            } // Store the freshly bound instance in a DOM element for later access using jQuery `data()`


            this.$element.data('Parsley', parsleyInstance); // Tell the world we have a new Form or Field instance!

            parsleyInstance._actualizeTriggers();

            parsleyInstance._trigger('init');

            return parsleyInstance;
        }
    };

    var vernums = $.fn.jquery.split('.');

    if (parseInt(vernums[0]) <= 1 && parseInt(vernums[1]) < 8) {
        throw "The loaded version of jQuery is too old. Please upgrade to 1.8.x or better.";
    }

    if (!vernums.forEach) {
        Utils.warn('Parsley requires ES5 to run properly. Please include https://github.com/es-shims/es5-shim');
    } // Inherit `on`, `off` & `trigger` to Parsley:


    var Parsley = _extends(new Base(), {
        element: document,
        $element: $(document),
        actualizeOptions: null,
        _resetOptions: null,
        Factory: Factory,
        version: '2.9.1'
    }); // Supplement Field and Form with Base
    // This way, the constructors will have access to those methods


    _extends(Field.prototype, UI.Field, Base.prototype);

    _extends(Form.prototype, UI.Form, Base.prototype); // Inherit actualizeOptions and _resetOptions:


    _extends(Factory.prototype, Base.prototype); // ### jQuery API
    // `$('.elem').parsley(options)` or `$('.elem').psly(options)`


    $.fn.parsley = $.fn.psly = function (options) {
        if (this.length > 1) {
            var instances = [];
            this.each(function () {
                instances.push($(this).parsley(options));
            });
            return instances;
        } // Return undefined if applied to non existing DOM element


        if (this.length == 0) {
            return;
        }

        return new Factory(this[0], options);
    }; // ### Field and Form extension
    // Ensure the extension is now defined if it wasn't previously


    if ('undefined' === typeof window.ParsleyExtend) window.ParsleyExtend = {}; // ### Parsley config
    // Inherit from ParsleyDefault, and copy over any existing values

    Parsley.options = _extends(Utils.objectCreate(Defaults), window.ParsleyConfig);
    window.ParsleyConfig = Parsley.options; // Old way of accessing global options
    // ### Globals

    window.Parsley = window.psly = Parsley;
    Parsley.Utils = Utils;
    window.ParsleyUtils = {};
    $.each(Utils, function (key, value) {
        if ('function' === typeof value) {
            window.ParsleyUtils[key] = function () {
                Utils.warnOnce('Accessing `window.ParsleyUtils` is deprecated. Use `window.Parsley.Utils` instead.');
                return Utils[key].apply(Utils, arguments);
            };
        }
    }); // ### Define methods that forward to the registry, and deprecate all access except through window.Parsley

    var registry = window.Parsley._validatorRegistry = new ValidatorRegistry(window.ParsleyConfig.validators, window.ParsleyConfig.i18n);
    window.ParsleyValidator = {};
    $.each('setLocale addCatalog addMessage addMessages getErrorMessage formatMessage addValidator updateValidator removeValidator hasValidator'.split(' '), function (i, method) {
        window.Parsley[method] = function () {
            return registry[method].apply(registry, arguments);
        };

        window.ParsleyValidator[method] = function () {
            var _window$Parsley;

            Utils.warnOnce("Accessing the method '".concat(method, "' through Validator is deprecated. Simply call 'window.Parsley.").concat(method, "(...)'"));
            return (_window$Parsley = window.Parsley)[method].apply(_window$Parsley, arguments);
        };
    }); // ### UI
    // Deprecated global object

    window.Parsley.UI = UI;
    window.ParsleyUI = {
        removeError: function removeError(instance, name, doNotUpdateClass) {
            var updateClass = true !== doNotUpdateClass;
            Utils.warnOnce("Accessing UI is deprecated. Call 'removeError' on the instance directly. Please comment in issue 1073 as to your need to call this method.");
            return instance.removeError(name, {
                updateClass: updateClass
            });
        },
        getErrorsMessages: function getErrorsMessages(instance) {
            Utils.warnOnce("Accessing UI is deprecated. Call 'getErrorsMessages' on the instance directly.");
            return instance.getErrorsMessages();
        }
    };
    $.each('addError updateError'.split(' '), function (i, method) {
        window.ParsleyUI[method] = function (instance, name, message, assert, doNotUpdateClass) {
            var updateClass = true !== doNotUpdateClass;
            Utils.warnOnce("Accessing UI is deprecated. Call '".concat(method, "' on the instance directly. Please comment in issue 1073 as to your need to call this method."));
            return instance[method](name, {
                message: message,
                assert: assert,
                updateClass: updateClass
            });
        };
    }); // ### PARSLEY auto-binding
    // Prevent it by setting `ParsleyConfig.autoBind` to `false`

    if (false !== window.ParsleyConfig.autoBind) {
        $(function () {
            // Works only on `data-parsley-validate`.
            if ($('[data-parsley-validate]').length) $('[data-parsley-validate]').parsley();
        });
    }

    var o = $({});

    var deprecated = function deprecated() {
        Utils.warnOnce("Parsley's pubsub module is deprecated; use the 'on' and 'off' methods on parsley instances or window.Parsley");
    }; // Returns an event handler that calls `fn` with the arguments it expects


    function adapt(fn, context) {
        // Store to allow unbinding
        if (!fn.parsleyAdaptedCallback) {
            fn.parsleyAdaptedCallback = function () {
                var args = Array.prototype.slice.call(arguments, 0);
                args.unshift(this);
                fn.apply(context || o, args);
            };
        }

        return fn.parsleyAdaptedCallback;
    }

    var eventPrefix = 'parsley:'; // Converts 'parsley:form:validate' into 'form:validate'

    function eventName(name) {
        if (name.lastIndexOf(eventPrefix, 0) === 0) return name.substr(eventPrefix.length);
        return name;
    } // $.listen is deprecated. Use Parsley.on instead.


    $.listen = function (name, callback) {
        var context;
        deprecated();

        if ('object' === _typeof(arguments[1]) && 'function' === typeof arguments[2]) {
            context = arguments[1];
            callback = arguments[2];
        }

        if ('function' !== typeof callback) throw new Error('Wrong parameters');
        window.Parsley.on(eventName(name), adapt(callback, context));
    };

    $.listenTo = function (instance, name, fn) {
        deprecated();
        if (!(instance instanceof Field) && !(instance instanceof Form)) throw new Error('Must give Parsley instance');
        if ('string' !== typeof name || 'function' !== typeof fn) throw new Error('Wrong parameters');
        instance.on(eventName(name), adapt(fn));
    };

    $.unsubscribe = function (name, fn) {
        deprecated();
        if ('string' !== typeof name || 'function' !== typeof fn) throw new Error('Wrong arguments');
        window.Parsley.off(eventName(name), fn.parsleyAdaptedCallback);
    };

    $.unsubscribeTo = function (instance, name) {
        deprecated();
        if (!(instance instanceof Field) && !(instance instanceof Form)) throw new Error('Must give Parsley instance');
        instance.off(eventName(name));
    };

    $.unsubscribeAll = function (name) {
        deprecated();
        window.Parsley.off(eventName(name));
        $('form,input,textarea,select').each(function () {
            var instance = $(this).data('Parsley');

            if (instance) {
                instance.off(eventName(name));
            }
        });
    }; // $.emit is deprecated. Use jQuery events instead.


    $.emit = function (name, instance) {
        var _instance;

        deprecated();
        var instanceGiven = instance instanceof Field || instance instanceof Form;
        var args = Array.prototype.slice.call(arguments, instanceGiven ? 2 : 1);
        args.unshift(eventName(name));

        if (!instanceGiven) {
            instance = window.Parsley;
        }

        (_instance = instance).trigger.apply(_instance, _toConsumableArray(args));
    };

    $.extend(true, Parsley, {
        asyncValidators: {
            'default': {
                fn: function fn(xhr) {
                    // By default, only status 2xx are deemed successful.
                    // Note: we use status instead of state() because responses with status 200
                    // but invalid messages (e.g. an empty body for content type set to JSON) will
                    // result in state() === 'rejected'.
                    return xhr.status >= 200 && xhr.status < 300;
                },
                url: false
            },
            reverse: {
                fn: function fn(xhr) {
                    // If reverse option is set, a failing ajax request is considered successful
                    return xhr.status < 200 || xhr.status >= 300;
                },
                url: false
            }
        },
        addAsyncValidator: function addAsyncValidator(name, fn, url, options) {
            Parsley.asyncValidators[name] = {
                fn: fn,
                url: url || false,
                options: options || {}
            };
            return this;
        }
    });
    Parsley.addValidator('remote', {
        requirementType: {
            '': 'string',
            'validator': 'string',
            'reverse': 'boolean',
            'options': 'object'
        },
        validateString: function validateString(value, url, options, instance) {
            var data = {};
            var ajaxOptions;
            var csr;
            var validator = options.validator || (true === options.reverse ? 'reverse' : 'default');
            if ('undefined' === typeof Parsley.asyncValidators[validator]) throw new Error('Calling an undefined async validator: `' + validator + '`');
            url = Parsley.asyncValidators[validator].url || url; // Fill current value

            if (url.indexOf('{value}') > -1) {
                url = url.replace('{value}', encodeURIComponent(value));
            } else {
                data[instance.element.getAttribute('name') || instance.element.getAttribute('id')] = value;
            } // Merge options passed in from the function with the ones in the attribute


            var remoteOptions = $.extend(true, options.options || {}, Parsley.asyncValidators[validator].options); // All `$.ajax(options)` could be overridden or extended directly from DOM in `data-parsley-remote-options`

            ajaxOptions = $.extend(true, {}, {
                url: url,
                data: data,
                type: 'GET'
            }, remoteOptions); // Generate store key based on ajax options

            instance.trigger('field:ajaxoptions', instance, ajaxOptions);
            csr = $.param(ajaxOptions); // Initialise querry cache

            if ('undefined' === typeof Parsley._remoteCache) Parsley._remoteCache = {}; // Try to retrieve stored xhr

            var xhr = Parsley._remoteCache[csr] = Parsley._remoteCache[csr] || $.ajax(ajaxOptions);

            var handleXhr = function handleXhr() {
                var result = Parsley.asyncValidators[validator].fn.call(instance, xhr, url, options);
                if (!result) // Map falsy results to rejected promise
                    result = $.Deferred().reject();
                return $.when(result);
            };

            return xhr.then(handleXhr, handleXhr);
        },
        priority: -1
    });
    Parsley.on('form:submit', function () {
        Parsley._remoteCache = {};
    });

    Base.prototype.addAsyncValidator = function () {
        Utils.warnOnce('Accessing the method `addAsyncValidator` through an instance is deprecated. Simply call `Parsley.addAsyncValidator(...)`');
        return Parsley.addAsyncValidator.apply(Parsley, arguments);
    };

    // This is included with the Parsley library itself,
    Parsley.addMessages('en', {
        defaultMessage: "This value seems to be invalid.",
        type: {
            email: "This value should be a valid email.",
            url: "This value should be a valid url.",
            number: "This value should be a valid number.",
            integer: "This value should be a valid integer.",
            digits: "This value should be digits.",
            alphanum: "This value should be alphanumeric."
        },
        notblank: "This value should not be blank.",
        required: "This value is required.",
        pattern: "This value seems to be invalid.",
        min: "This value should be greater than or equal to %s.",
        max: "This value should be lower than or equal to %s.",
        range: "This value should be between %s and %s.",
        minlength: "This value is too short. It should have %s characters or more.",
        maxlength: "This value is too long. It should have %s characters or fewer.",
        length: "This value length is invalid. It should be between %s and %s characters long.",
        mincheck: "You must select at least %s choices.",
        maxcheck: "You must select %s choices or fewer.",
        check: "You must select between %s and %s choices.",
        equalto: "This value should be the same.",
        euvatin: "It's not a valid VAT Identification Number."
    });
    Parsley.setLocale('en');

    function InputEvent() {
        var _this = this;

        var globals = window || global; // Slightly odd way construct our object. This way methods are force bound.
        // Used to test for duplicate library.

        _extends(this, {
            // For browsers that do not support isTrusted, assumes event is native.
            isNativeEvent: function isNativeEvent(evt) {
                return evt.originalEvent && evt.originalEvent.isTrusted !== false;
            },
            fakeInputEvent: function fakeInputEvent(evt) {
                if (_this.isNativeEvent(evt)) {
                    $(evt.target).trigger('input');
                }
            },
            misbehaves: function misbehaves(evt) {
                if (_this.isNativeEvent(evt)) {
                    _this.behavesOk(evt);

                    $(document).on('change.inputevent', evt.data.selector, _this.fakeInputEvent);

                    _this.fakeInputEvent(evt);
                }
            },
            behavesOk: function behavesOk(evt) {
                if (_this.isNativeEvent(evt)) {
                    $(document) // Simply unbinds the testing handler
                        .off('input.inputevent', evt.data.selector, _this.behavesOk).off('change.inputevent', evt.data.selector, _this.misbehaves);
                }
            },
            // Bind the testing handlers
            install: function install() {
                if (globals.inputEventPatched) {
                    return;
                }

                globals.inputEventPatched = '0.0.3';
                var _arr = ['select', 'input[type="checkbox"]', 'input[type="radio"]', 'input[type="file"]'];

                for (var _i = 0; _i < _arr.length; _i++) {
                    var selector = _arr[_i];
                    $(document).on('input.inputevent', selector, {
                        selector: selector
                    }, _this.behavesOk).on('change.inputevent', selector, {
                        selector: selector
                    }, _this.misbehaves);
                }
            },
            uninstall: function uninstall() {
                delete globals.inputEventPatched;
                $(document).off('.inputevent');
            }
        });
    }
    var inputevent = new InputEvent();

    inputevent.install();

    return Parsley;

})));
//# sourceMappingURL=parsley.js.map
// Validation errors messages for Parsley
// Load this after Parsley

Parsley.addMessages('nl', {
  defaultMessage: "Deze waarde lijkt onjuist.",
  type: {
    email:        "Dit lijkt geen geldig e-mail adres te zijn.",
    url:          "Dit lijkt geen geldige URL te zijn.",
    number:       "Deze waarde moet een nummer zijn.",
    integer:      "Deze waarde moet een nummer zijn.",
    digits:       "Deze waarde moet numeriek zijn.",
    alphanum:     "Deze waarde moet alfanumeriek zijn."
  },
  notblank:       "Deze waarde mag niet leeg zijn.",
  required:       "Dit veld is verplicht.",
  pattern:        "Deze waarde lijkt onjuist te zijn.",
  min:            "Deze waarde mag niet lager zijn dan %s.",
  max:            "Deze waarde mag niet groter zijn dan %s.",
  range:          "Deze waarde moet tussen %s en %s liggen.",
  minlength:      "Deze tekst is te kort. Deze moet uit minimaal %s karakters bestaan.",
  maxlength:      "Deze waarde is te lang. Deze mag maximaal %s karakters lang zijn.",
  length:         "Deze waarde moet tussen %s en %s karakters lang zijn.",
  equalto:        "Deze waardes moeten identiek zijn."
});

Parsley.setLocale('nl');

//# sourceMappingURL=vendor.js.map
