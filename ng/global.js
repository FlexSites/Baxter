function itemPromise(a, b, c) {
    var d = b.current.params.id;
    if (console.log("hit item promise", d), d) {
        var e = c.get({
            id: d
        }, function() {
            console.log(e);
        });
        return e.$promise;
    }
    var f = a.defer();
    return f.resolve(new c()), f.promise;
}

function pluralize(a) {
    return "ium" == a.slice(-3) ? a = a.substr(0, a.length - 3) + "ia" : a += "s", a;
}

function parseDate(a) {
    var b = a.match(/^(\d{1,2})\/(\d{2})\/(\d{2})\s(\d{1,2}):(\d{2}) ([AP]M)$/);
    console.log("parse match", b);
    var c = b[1], d = b[2], e = b[3], f = b[4], g = b[5], h = b[6];
    console.log("AM_PM", h, f), f = "PM" == h ? (parseInt(f) + 12).toString() : f, console.log("hour", f);
    var i = [ "20", e, "-", c, "-", d, "T", f, ":", g, ":00" ];
    return console.log(i.join("")), i.join("");
}

!function(a, b, c) {
    "use strict";
    function d(a) {
        return function() {
            var b, c = arguments[0], c = "[" + (a ? a + ":" : "") + c + "] http://errors.angularjs.org/1.2.23/" + (a ? a + "/" : "") + c;
            for (b = 1; b < arguments.length; b++) c = c + (1 == b ? "?" : "&") + "p" + (b - 1) + "=" + encodeURIComponent("function" == typeof arguments[b] ? arguments[b].toString().replace(/ \{[\s\S]*$/, "") : "undefined" == typeof arguments[b] ? "undefined" : "string" != typeof arguments[b] ? JSON.stringify(arguments[b]) : arguments[b]);
            return Error(c);
        };
    }
    function e(a) {
        if (null == a || z(a)) return !1;
        var b = a.length;
        return 1 === a.nodeType && b ? !0 : u(a) || dd(a) || 0 === b || "number" == typeof b && b > 0 && b - 1 in a;
    }
    function f(a, b, c) {
        var d;
        if (a) if (x(a)) for (d in a) "prototype" == d || "length" == d || "name" == d || a.hasOwnProperty && !a.hasOwnProperty(d) || b.call(c, a[d], d); else if (dd(a) || e(a)) for (d = 0; d < a.length; d++) b.call(c, a[d], d); else if (a.forEach && a.forEach !== f) a.forEach(b, c); else for (d in a) a.hasOwnProperty(d) && b.call(c, a[d], d);
        return a;
    }
    function g(a) {
        var b, c = [];
        for (b in a) a.hasOwnProperty(b) && c.push(b);
        return c.sort();
    }
    function h(a, b, c) {
        for (var d = g(a), e = 0; e < d.length; e++) b.call(c, a[d[e]], d[e]);
        return d;
    }
    function i(a) {
        return function(b, c) {
            a(c, b);
        };
    }
    function j() {
        for (var a, b = cd.length; b; ) {
            if (b--, a = cd[b].charCodeAt(0), 57 == a) return cd[b] = "A", cd.join("");
            if (90 != a) return cd[b] = String.fromCharCode(a + 1), cd.join("");
            cd[b] = "0";
        }
        return cd.unshift("0"), cd.join("");
    }
    function k(a, b) {
        b ? a.$$hashKey = b : delete a.$$hashKey;
    }
    function l(a) {
        var b = a.$$hashKey;
        return f(arguments, function(b) {
            b !== a && f(b, function(b, c) {
                a[c] = b;
            });
        }), k(a, b), a;
    }
    function m(a) {
        return parseInt(a, 10);
    }
    function n(a, b) {
        return l(new (l(function() {}, {
            prototype: a
        }))(), b);
    }
    function o() {}
    function p(a) {
        return a;
    }
    function q(a) {
        return function() {
            return a;
        };
    }
    function r(a) {
        return "undefined" == typeof a;
    }
    function s(a) {
        return "undefined" != typeof a;
    }
    function t(a) {
        return null != a && "object" == typeof a;
    }
    function u(a) {
        return "string" == typeof a;
    }
    function v(a) {
        return "number" == typeof a;
    }
    function w(a) {
        return "[object Date]" === _c.call(a);
    }
    function x(a) {
        return "function" == typeof a;
    }
    function y(a) {
        return "[object RegExp]" === _c.call(a);
    }
    function z(a) {
        return a && a.document && a.location && a.alert && a.setInterval;
    }
    function A(a) {
        return !(!a || !(a.nodeName || a.prop && a.attr && a.find));
    }
    function B(a, b, c) {
        var d = [];
        return f(a, function(a, e, f) {
            d.push(b.call(c, a, e, f));
        }), d;
    }
    function C(a, b) {
        if (a.indexOf) return a.indexOf(b);
        for (var c = 0; c < a.length; c++) if (b === a[c]) return c;
        return -1;
    }
    function D(a, b) {
        var c = C(a, b);
        return c >= 0 && a.splice(c, 1), b;
    }
    function E(a, b, c, d) {
        if (z(a) || a && a.$evalAsync && a.$watch) throw ad("cpws");
        if (b) {
            if (a === b) throw ad("cpi");
            if (c = c || [], d = d || [], t(a)) {
                var e = C(c, a);
                if (-1 !== e) return d[e];
                c.push(a), d.push(b);
            }
            if (dd(a)) for (var g = b.length = 0; g < a.length; g++) e = E(a[g], null, c, d), 
            t(a[g]) && (c.push(a[g]), d.push(e)), b.push(e); else {
                var h = b.$$hashKey;
                dd(b) ? b.length = 0 : f(b, function(a, c) {
                    delete b[c];
                });
                for (g in a) e = E(a[g], null, c, d), t(a[g]) && (c.push(a[g]), d.push(e)), b[g] = e;
                k(b, h);
            }
        } else (b = a) && (dd(a) ? b = E(a, [], c, d) : w(a) ? b = new Date(a.getTime()) : y(a) ? (b = RegExp(a.source, a.toString().match(/[^\/]*$/)[0]), 
        b.lastIndex = a.lastIndex) : t(a) && (b = E(a, {}, c, d)));
        return b;
    }
    function F(a, b) {
        if (dd(a)) {
            b = b || [];
            for (var c = 0; c < a.length; c++) b[c] = a[c];
        } else if (t(a)) for (c in b = b || {}, a) !Xc.call(a, c) || "$" === c.charAt(0) && "$" === c.charAt(1) || (b[c] = a[c]);
        return b || a;
    }
    function G(a, b) {
        if (a === b) return !0;
        if (null === a || null === b) return !1;
        if (a !== a && b !== b) return !0;
        var d, e = typeof a;
        if (e == typeof b && "object" == e) {
            if (!dd(a)) {
                if (w(a)) return w(b) ? isNaN(a.getTime()) && isNaN(b.getTime()) || a.getTime() === b.getTime() : !1;
                if (y(a) && y(b)) return a.toString() == b.toString();
                if (a && a.$evalAsync && a.$watch || b && b.$evalAsync && b.$watch || z(a) || z(b) || dd(b)) return !1;
                e = {};
                for (d in a) if ("$" !== d.charAt(0) && !x(a[d])) {
                    if (!G(a[d], b[d])) return !1;
                    e[d] = !0;
                }
                for (d in b) if (!e.hasOwnProperty(d) && "$" !== d.charAt(0) && b[d] !== c && !x(b[d])) return !1;
                return !0;
            }
            if (!dd(b)) return !1;
            if ((e = a.length) == b.length) {
                for (d = 0; e > d; d++) if (!G(a[d], b[d])) return !1;
                return !0;
            }
        }
        return !1;
    }
    function H(a, b) {
        var c = 2 < arguments.length ? Zc.call(arguments, 2) : [];
        return !x(b) || b instanceof RegExp ? b : c.length ? function() {
            return arguments.length ? b.apply(a, c.concat(Zc.call(arguments, 0))) : b.apply(a, c);
        } : function() {
            return arguments.length ? b.apply(a, arguments) : b.call(a);
        };
    }
    function I(a, d) {
        var e = d;
        return "string" == typeof a && "$" === a.charAt(0) ? e = c : z(d) ? e = "$WINDOW" : d && b === d ? e = "$DOCUMENT" : d && d.$evalAsync && d.$watch && (e = "$SCOPE"), 
        e;
    }
    function J(a, b) {
        return "undefined" == typeof a ? c : JSON.stringify(a, I, b ? "  " : null);
    }
    function K(a) {
        return u(a) ? JSON.parse(a) : a;
    }
    function L(a) {
        return "function" == typeof a ? a = !0 : a && 0 !== a.length ? (a = Wc("" + a), 
        a = !("f" == a || "0" == a || "false" == a || "no" == a || "n" == a || "[]" == a)) : a = !1, 
        a;
    }
    function M(a) {
        a = Rc(a).clone();
        try {
            a.empty();
        } catch (b) {}
        var c = Rc("<div>").append(a).html();
        try {
            return 3 === a[0].nodeType ? Wc(c) : c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function(a, b) {
                return "<" + Wc(b);
            });
        } catch (d) {
            return Wc(c);
        }
    }
    function N(a) {
        try {
            return decodeURIComponent(a);
        } catch (b) {}
    }
    function O(a) {
        var b, c, d = {};
        return f((a || "").split("&"), function(a) {
            a && (b = a.replace(/\+/g, "%20").split("="), c = N(b[0]), s(c) && (a = s(b[1]) ? N(b[1]) : !0, 
            Xc.call(d, c) ? dd(d[c]) ? d[c].push(a) : d[c] = [ d[c], a ] : d[c] = a));
        }), d;
    }
    function P(a) {
        var b = [];
        return f(a, function(a, c) {
            dd(a) ? f(a, function(a) {
                b.push(R(c, !0) + (!0 === a ? "" : "=" + R(a, !0)));
            }) : b.push(R(c, !0) + (!0 === a ? "" : "=" + R(a, !0)));
        }), b.length ? b.join("&") : "";
    }
    function Q(a) {
        return R(a, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+");
    }
    function R(a, b) {
        return encodeURIComponent(a).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, b ? "%20" : "+");
    }
    function S(a, c) {
        function d(a) {
            a && h.push(a);
        }
        var e, g, h = [ a ], i = [ "ng:app", "ng-app", "x-ng-app", "data-ng-app" ], j = /\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;
        f(i, function(c) {
            i[c] = !0, d(b.getElementById(c)), c = c.replace(":", "\\:"), a.querySelectorAll && (f(a.querySelectorAll("." + c), d), 
            f(a.querySelectorAll("." + c + "\\:"), d), f(a.querySelectorAll("[" + c + "]"), d));
        }), f(h, function(a) {
            if (!e) {
                var b = j.exec(" " + a.className + " ");
                b ? (e = a, g = (b[2] || "").replace(/\s+/g, ",")) : f(a.attributes, function(b) {
                    !e && i[b.name] && (e = a, g = b.value);
                });
            }
        }), e && c(e, g ? [ g ] : []);
    }
    function T(c, d) {
        var e = function() {
            if (c = Rc(c), c.injector()) {
                var a = c[0] === b ? "document" : M(c);
                throw ad("btstrpd", a.replace(/</, "&lt;").replace(/>/, "&gt;"));
            }
            return d = d || [], d.unshift([ "$provide", function(a) {
                a.value("$rootElement", c);
            } ]), d.unshift("ng"), a = vb(d), a.invoke([ "$rootScope", "$rootElement", "$compile", "$injector", "$animate", function(a, b, c, d) {
                a.$apply(function() {
                    b.data("$injector", d), c(b)(a);
                });
            } ]), a;
        }, g = /^NG_DEFER_BOOTSTRAP!/;
        return a && !g.test(a.name) ? e() : (a.name = a.name.replace(g, ""), void (bd.resumeBootstrap = function(a) {
            f(a, function(a) {
                d.push(a);
            }), e();
        }));
    }
    function U(a, b) {
        return b = b || "_", a.replace(gd, function(a, c) {
            return (c ? b : "") + a.toLowerCase();
        });
    }
    function V(a, b, c) {
        if (!a) throw ad("areq", b || "?", c || "required");
        return a;
    }
    function W(a, b, c) {
        return c && dd(a) && (a = a[a.length - 1]), V(x(a), b, "not a function, got " + (a && "object" == typeof a ? a.constructor.name || "Object" : typeof a)), 
        a;
    }
    function X(a, b) {
        if ("hasOwnProperty" === a) throw ad("badname", b);
    }
    function Y(a, b, c) {
        if (!b) return a;
        b = b.split(".");
        for (var d, e = a, f = b.length, g = 0; f > g; g++) d = b[g], a && (a = (e = a)[d]);
        return !c && x(a) ? H(e, a) : a;
    }
    function Z(a) {
        var b = a[0];
        if (a = a[a.length - 1], b === a) return Rc(b);
        var c = [ b ];
        do {
            if (b = b.nextSibling, !b) break;
            c.push(b);
        } while (b !== a);
        return Rc(c);
    }
    function $(a) {
        var b = d("$injector"), c = d("ng");
        return a = a.angular || (a.angular = {}), a.$$minErr = a.$$minErr || d, a.module || (a.module = function() {
            var a = {};
            return function(d, e, f) {
                if ("hasOwnProperty" === d) throw c("badname", "module");
                return e && a.hasOwnProperty(d) && (a[d] = null), a[d] || (a[d] = function() {
                    function a(a, b, d) {
                        return function() {
                            return c[d || "push"]([ a, b, arguments ]), i;
                        };
                    }
                    if (!e) throw b("nomod", d);
                    var c = [], g = [], h = a("$injector", "invoke"), i = {
                        _invokeQueue: c,
                        _runBlocks: g,
                        requires: e,
                        name: d,
                        provider: a("$provide", "provider"),
                        factory: a("$provide", "factory"),
                        service: a("$provide", "service"),
                        value: a("$provide", "value"),
                        constant: a("$provide", "constant", "unshift"),
                        animation: a("$animateProvider", "register"),
                        filter: a("$filterProvider", "register"),
                        controller: a("$controllerProvider", "register"),
                        directive: a("$compileProvider", "directive"),
                        config: h,
                        run: function(a) {
                            return g.push(a), this;
                        }
                    };
                    return f && h(f), i;
                }());
            };
        }());
    }
    function _(b) {
        l(b, {
            bootstrap: T,
            copy: E,
            extend: l,
            equals: G,
            element: Rc,
            forEach: f,
            injector: vb,
            noop: o,
            bind: H,
            toJson: J,
            fromJson: K,
            identity: p,
            isUndefined: r,
            isDefined: s,
            isString: u,
            isFunction: x,
            isObject: t,
            isNumber: v,
            isElement: A,
            isArray: dd,
            version: hd,
            isDate: w,
            lowercase: Wc,
            uppercase: Yc,
            callbacks: {
                counter: 0
            },
            $$minErr: d,
            $$csp: fd
        }), Tc = $(a);
        try {
            Tc("ngLocale");
        } catch (c) {
            Tc("ngLocale", []).provider("$locale", Rb);
        }
        Tc("ng", [ "ngLocale" ], [ "$provide", function(a) {
            a.provider({
                $$sanitizeUri: nc
            }), a.provider("$compile", Cb).directive({
                a: de,
                input: oe,
                textarea: oe,
                form: he,
                script: Xe,
                select: $e,
                style: af,
                option: _e,
                ngBind: Ae,
                ngBindHtml: Ce,
                ngBindTemplate: Be,
                ngClass: De,
                ngClassEven: Fe,
                ngClassOdd: Ee,
                ngCloak: Ge,
                ngController: He,
                ngForm: ie,
                ngHide: Re,
                ngIf: Je,
                ngInclude: Ke,
                ngInit: Me,
                ngNonBindable: Ne,
                ngPluralize: Oe,
                ngRepeat: Pe,
                ngShow: Qe,
                ngStyle: Se,
                ngSwitch: Te,
                ngSwitchWhen: Ue,
                ngSwitchDefault: Ve,
                ngOptions: Ze,
                ngTransclude: We,
                ngModel: ue,
                ngList: xe,
                ngChange: ve,
                required: we,
                ngRequired: we,
                ngValue: ze
            }).directive({
                ngInclude: Le
            }).directive(ee).directive(Ie), a.provider({
                $anchorScroll: wb,
                $animate: Dd,
                $browser: zb,
                $cacheFactory: Ab,
                $controller: Fb,
                $document: Gb,
                $exceptionHandler: Hb,
                $filter: xc,
                $interpolate: Pb,
                $interval: Qb,
                $http: Lb,
                $httpBackend: Nb,
                $location: bc,
                $log: cc,
                $parse: ic,
                $rootScope: mc,
                $q: jc,
                $sce: rc,
                $sceDelegate: qc,
                $sniffer: sc,
                $templateCache: Bb,
                $timeout: tc,
                $window: wc,
                $$rAF: lc,
                $$asyncCallback: xb
            });
        } ]);
    }
    function ab(a) {
        return a.replace(md, function(a, b, c, d) {
            return d ? c.toUpperCase() : c;
        }).replace(nd, "Moz$1");
    }
    function bb(a, b, c, d) {
        function e(a) {
            var e, g, h, i, j, k, l = c && a ? [ this.filter(a) ] : [ this ], m = b;
            if (!d || null != a) for (;l.length; ) for (e = l.shift(), g = 0, h = e.length; h > g; g++) for (i = Rc(e[g]), 
            m ? i.triggerHandler("$destroy") : m = !m, j = 0, i = (k = i.children()).length; i > j; j++) l.push(Sc(k[j]));
            return f.apply(this, arguments);
        }
        var f = Sc.fn[a], f = f.$original || f;
        e.$original = f, Sc.fn[a] = e;
    }
    function cb(a) {
        if (a instanceof cb) return a;
        if (u(a) && (a = ed(a)), !(this instanceof cb)) {
            if (u(a) && "<" != a.charAt(0)) throw od("nosel");
            return new cb(a);
        }
        if (u(a)) {
            var c = a;
            a = b;
            var d;
            if (d = pd.exec(c)) a = [ a.createElement(d[1]) ]; else {
                var e, f = a;
                if (a = f.createDocumentFragment(), d = [], qd.test(c)) {
                    for (f = a.appendChild(f.createElement("div")), e = (rd.exec(c) || [ "", "" ])[1].toLowerCase(), 
                    e = td[e] || td._default, f.innerHTML = "<div>&#160;</div>" + e[1] + c.replace(sd, "<$1></$2>") + e[2], 
                    f.removeChild(f.firstChild), c = e[0]; c--; ) f = f.lastChild;
                    for (c = 0, e = f.childNodes.length; e > c; ++c) d.push(f.childNodes[c]);
                    f = a.firstChild, f.textContent = "";
                } else d.push(f.createTextNode(c));
                a.textContent = "", a.innerHTML = "", a = d;
            }
            mb(this, a), Rc(b.createDocumentFragment()).append(this);
        } else mb(this, a);
    }
    function db(a) {
        return a.cloneNode(!0);
    }
    function eb(a) {
        gb(a);
        var b = 0;
        for (a = a.childNodes || []; b < a.length; b++) eb(a[b]);
    }
    function fb(a, b, c, d) {
        if (s(d)) throw od("offargs");
        var e = hb(a, "events");
        hb(a, "handle") && (r(b) ? f(e, function(b, c) {
            ld(a, c, b), delete e[c];
        }) : f(b.split(" "), function(b) {
            r(c) ? (ld(a, b, e[b]), delete e[b]) : D(e[b] || [], c);
        }));
    }
    function gb(a, b) {
        var d = a.ng339, e = id[d];
        e && (b ? delete id[d].data[b] : (e.handle && (e.events.$destroy && e.handle({}, "$destroy"), 
        fb(a)), delete id[d], a.ng339 = c));
    }
    function hb(a, b, c) {
        var d = a.ng339, d = id[d || -1];
        return s(c) ? (d || (a.ng339 = d = ++jd, d = id[d] = {}), void (d[b] = c)) : d && d[b];
    }
    function ib(a, b, c) {
        var d = hb(a, "data"), e = s(c), f = !e && s(b), g = f && !t(b);
        if (d || g || hb(a, "data", d = {}), e) d[b] = c; else {
            if (!f) return d;
            if (g) return d && d[b];
            l(d, b);
        }
    }
    function jb(a, b) {
        return a.getAttribute ? -1 < (" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + b + " ") : !1;
    }
    function kb(a, b) {
        b && a.setAttribute && f(b.split(" "), function(b) {
            a.setAttribute("class", ed((" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + ed(b) + " ", " ")));
        });
    }
    function lb(a, b) {
        if (b && a.setAttribute) {
            var c = (" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");
            f(b.split(" "), function(a) {
                a = ed(a), -1 === c.indexOf(" " + a + " ") && (c += a + " ");
            }), a.setAttribute("class", ed(c));
        }
    }
    function mb(a, b) {
        if (b) {
            b = b.nodeName || !s(b.length) || z(b) ? [ b ] : b;
            for (var c = 0; c < b.length; c++) a.push(b[c]);
        }
    }
    function nb(a, b) {
        return ob(a, "$" + (b || "ngController") + "Controller");
    }
    function ob(a, b, d) {
        for (9 == a.nodeType && (a = a.documentElement), b = dd(b) ? b : [ b ]; a; ) {
            for (var e = 0, f = b.length; f > e; e++) if ((d = Rc.data(a, b[e])) !== c) return d;
            a = a.parentNode || 11 === a.nodeType && a.host;
        }
    }
    function pb(a) {
        for (var b = 0, c = a.childNodes; b < c.length; b++) eb(c[b]);
        for (;a.firstChild; ) a.removeChild(a.firstChild);
    }
    function qb(a, b) {
        var c = vd[b.toLowerCase()];
        return c && wd[a.nodeName] && c;
    }
    function rb(a, c) {
        var d = function(d, e) {
            if (d.preventDefault || (d.preventDefault = function() {
                d.returnValue = !1;
            }), d.stopPropagation || (d.stopPropagation = function() {
                d.cancelBubble = !0;
            }), d.target || (d.target = d.srcElement || b), r(d.defaultPrevented)) {
                var g = d.preventDefault;
                d.preventDefault = function() {
                    d.defaultPrevented = !0, g.call(d);
                }, d.defaultPrevented = !1;
            }
            d.isDefaultPrevented = function() {
                return d.defaultPrevented || !1 === d.returnValue;
            };
            var h = F(c[e || d.type] || []);
            f(h, function(b) {
                b.call(a, d);
            }), 8 >= Qc ? (d.preventDefault = null, d.stopPropagation = null, d.isDefaultPrevented = null) : (delete d.preventDefault, 
            delete d.stopPropagation, delete d.isDefaultPrevented);
        };
        return d.elem = a, d;
    }
    function sb(a, b) {
        var d, e = typeof a;
        return "function" == e || "object" == e && null !== a ? "function" == typeof (d = a.$$hashKey) ? d = a.$$hashKey() : d === c && (d = a.$$hashKey = (b || j)()) : d = a, 
        e + ":" + d;
    }
    function tb(a, b) {
        if (b) {
            var c = 0;
            this.nextUid = function() {
                return ++c;
            };
        }
        f(a, this.put, this);
    }
    function ub(a) {
        var b, c;
        return "function" == typeof a ? (b = a.$inject) || (b = [], a.length && (c = a.toString().replace(Ad, ""), 
        c = c.match(xd), f(c[1].split(yd), function(a) {
            a.replace(zd, function(a, c, d) {
                b.push(d);
            });
        })), a.$inject = b) : dd(a) ? (c = a.length - 1, W(a[c], "fn"), b = a.slice(0, c)) : W(a, "fn", !0), 
        b;
    }
    function vb(a) {
        function b(a) {
            return function(b, c) {
                return t(b) ? void f(b, i(a)) : a(b, c);
            };
        }
        function c(a, b) {
            if (X(a, "service"), (x(b) || dd(b)) && (b = n.instantiate(b)), !b.$get) throw Bd("pget", a);
            return m[a + j] = b;
        }
        function d(a, b) {
            return c(a, {
                $get: b
            });
        }
        function e(a) {
            var b, c, d, g, h = [];
            return f(a, function(a) {
                if (!l.get(a)) {
                    l.put(a, !0);
                    try {
                        if (u(a)) for (b = Tc(a), h = h.concat(e(b.requires)).concat(b._runBlocks), c = b._invokeQueue, 
                        d = 0, g = c.length; g > d; d++) {
                            var f = c[d], i = n.get(f[0]);
                            i[f[1]].apply(i, f[2]);
                        } else x(a) ? h.push(n.invoke(a)) : dd(a) ? h.push(n.invoke(a)) : W(a, "module");
                    } catch (j) {
                        throw dd(a) && (a = a[a.length - 1]), j.message && j.stack && -1 == j.stack.indexOf(j.message) && (j = j.message + "\n" + j.stack), 
                        Bd("modulerr", a, j.stack || j.message || j);
                    }
                }
            }), h;
        }
        function g(a, b) {
            function c(c) {
                if (a.hasOwnProperty(c)) {
                    if (a[c] === h) throw Bd("cdep", c + " <- " + k.join(" <- "));
                    return a[c];
                }
                try {
                    return k.unshift(c), a[c] = h, a[c] = b(c);
                } catch (d) {
                    throw a[c] === h && delete a[c], d;
                } finally {
                    k.shift();
                }
            }
            function d(a, b, d) {
                var e, f, g, h = [], i = ub(a);
                for (f = 0, e = i.length; e > f; f++) {
                    if (g = i[f], "string" != typeof g) throw Bd("itkn", g);
                    h.push(d && d.hasOwnProperty(g) ? d[g] : c(g));
                }
                return dd(a) && (a = a[e]), a.apply(b, h);
            }
            return {
                invoke: d,
                instantiate: function(a, b) {
                    var c, e = function() {};
                    return e.prototype = (dd(a) ? a[a.length - 1] : a).prototype, e = new e(), c = d(a, e, b), 
                    t(c) || x(c) ? c : e;
                },
                get: c,
                annotate: ub,
                has: function(b) {
                    return m.hasOwnProperty(b + j) || a.hasOwnProperty(b);
                }
            };
        }
        var h = {}, j = "Provider", k = [], l = new tb([], !0), m = {
            $provide: {
                provider: b(c),
                factory: b(d),
                service: b(function(a, b) {
                    return d(a, [ "$injector", function(a) {
                        return a.instantiate(b);
                    } ]);
                }),
                value: b(function(a, b) {
                    return d(a, q(b));
                }),
                constant: b(function(a, b) {
                    X(a, "constant"), m[a] = b, p[a] = b;
                }),
                decorator: function(a, b) {
                    var c = n.get(a + j), d = c.$get;
                    c.$get = function() {
                        var a = r.invoke(d, c);
                        return r.invoke(b, null, {
                            $delegate: a
                        });
                    };
                }
            }
        }, n = m.$injector = g(m, function() {
            throw Bd("unpr", k.join(" <- "));
        }), p = {}, r = p.$injector = g(p, function(a) {
            return a = n.get(a + j), r.invoke(a.$get, a);
        });
        return f(e(a), function(a) {
            r.invoke(a || o);
        }), r;
    }
    function wb() {
        var a = !0;
        this.disableAutoScrolling = function() {
            a = !1;
        }, this.$get = [ "$window", "$location", "$rootScope", function(b, c, d) {
            function e(a) {
                var b = null;
                return f(a, function(a) {
                    b || "a" !== Wc(a.nodeName) || (b = a);
                }), b;
            }
            function g() {
                var a, d = c.hash();
                d ? (a = h.getElementById(d)) ? a.scrollIntoView() : (a = e(h.getElementsByName(d))) ? a.scrollIntoView() : "top" === d && b.scrollTo(0, 0) : b.scrollTo(0, 0);
            }
            var h = b.document;
            return a && d.$watch(function() {
                return c.hash();
            }, function() {
                d.$evalAsync(g);
            }), g;
        } ];
    }
    function xb() {
        this.$get = [ "$$rAF", "$timeout", function(a, b) {
            return a.supported ? function(b) {
                return a(b);
            } : function(a) {
                return b(a, 0, !1);
            };
        } ];
    }
    function yb(a, b, d, e) {
        function g(a) {
            try {
                a.apply(null, Zc.call(arguments, 1));
            } finally {
                if (s--, 0 === s) for (;t.length; ) try {
                    t.pop()();
                } catch (b) {
                    d.error(b);
                }
            }
        }
        function h(a, b) {
            !function c() {
                f(w, function(a) {
                    a();
                }), v = b(c, a);
            }();
        }
        function i() {
            z = null, x != j.url() && (x = j.url(), f(A, function(a) {
                a(j.url());
            }));
        }
        var j = this, k = b[0], l = a.location, m = a.history, n = a.setTimeout, p = a.clearTimeout, q = {};
        j.isMock = !1;
        var s = 0, t = [];
        j.$$completeOutstandingRequest = g, j.$$incOutstandingRequestCount = function() {
            s++;
        }, j.notifyWhenNoOutstandingRequests = function(a) {
            f(w, function(a) {
                a();
            }), 0 === s ? a() : t.push(a);
        };
        var v, w = [];
        j.addPollFn = function(a) {
            return r(v) && h(100, n), w.push(a), a;
        };
        var x = l.href, y = b.find("base"), z = null;
        j.url = function(b, c) {
            return l !== a.location && (l = a.location), m !== a.history && (m = a.history), 
            b ? x != b ? (x = b, e.history ? c ? m.replaceState(null, "", b) : (m.pushState(null, "", b), 
            y.attr("href", y.attr("href"))) : (z = b, c ? l.replace(b) : l.href = b), j) : void 0 : z || l.href.replace(/%27/g, "'");
        };
        var A = [], B = !1;
        j.onUrlChange = function(b) {
            return B || (e.history && Rc(a).on("popstate", i), e.hashchange ? Rc(a).on("hashchange", i) : j.addPollFn(i), 
            B = !0), A.push(b), b;
        }, j.baseHref = function() {
            var a = y.attr("href");
            return a ? a.replace(/^(https?\:)?\/\/[^\/]*/, "") : "";
        };
        var C = {}, D = "", E = j.baseHref();
        j.cookies = function(a, b) {
            var e, f, g, h;
            if (!a) {
                if (k.cookie !== D) for (D = k.cookie, e = D.split("; "), C = {}, g = 0; g < e.length; g++) f = e[g], 
                h = f.indexOf("="), h > 0 && (a = unescape(f.substring(0, h)), C[a] === c && (C[a] = unescape(f.substring(h + 1))));
                return C;
            }
            b === c ? k.cookie = escape(a) + "=;path=" + E + ";expires=Thu, 01 Jan 1970 00:00:00 GMT" : u(b) && (e = (k.cookie = escape(a) + "=" + escape(b) + ";path=" + E).length + 1, 
            e > 4096 && d.warn("Cookie '" + a + "' possibly not set or overflowed because it was too large (" + e + " > 4096 bytes)!"));
        }, j.defer = function(a, b) {
            var c;
            return s++, c = n(function() {
                delete q[c], g(a);
            }, b || 0), q[c] = !0, c;
        }, j.defer.cancel = function(a) {
            return q[a] ? (delete q[a], p(a), g(o), !0) : !1;
        };
    }
    function zb() {
        this.$get = [ "$window", "$log", "$sniffer", "$document", function(a, b, c, d) {
            return new yb(a, d, b, c);
        } ];
    }
    function Ab() {
        this.$get = function() {
            function a(a, c) {
                function e(a) {
                    a != m && (n ? n == a && (n = a.n) : n = a, f(a.n, a.p), f(a, m), m = a, m.n = null);
                }
                function f(a, b) {
                    a != b && (a && (a.p = b), b && (b.n = a));
                }
                if (a in b) throw d("$cacheFactory")("iid", a);
                var g = 0, h = l({}, c, {
                    id: a
                }), i = {}, j = c && c.capacity || Number.MAX_VALUE, k = {}, m = null, n = null;
                return b[a] = {
                    put: function(a, b) {
                        if (j < Number.MAX_VALUE) {
                            var c = k[a] || (k[a] = {
                                key: a
                            });
                            e(c);
                        }
                        return r(b) ? void 0 : (a in i || g++, i[a] = b, g > j && this.remove(n.key), b);
                    },
                    get: function(a) {
                        if (j < Number.MAX_VALUE) {
                            var b = k[a];
                            if (!b) return;
                            e(b);
                        }
                        return i[a];
                    },
                    remove: function(a) {
                        if (j < Number.MAX_VALUE) {
                            var b = k[a];
                            if (!b) return;
                            b == m && (m = b.p), b == n && (n = b.n), f(b.n, b.p), delete k[a];
                        }
                        delete i[a], g--;
                    },
                    removeAll: function() {
                        i = {}, g = 0, k = {}, m = n = null;
                    },
                    destroy: function() {
                        k = h = i = null, delete b[a];
                    },
                    info: function() {
                        return l({}, h, {
                            size: g
                        });
                    }
                };
            }
            var b = {};
            return a.info = function() {
                var a = {};
                return f(b, function(b, c) {
                    a[c] = b.info();
                }), a;
            }, a.get = function(a) {
                return b[a];
            }, a;
        };
    }
    function Bb() {
        this.$get = [ "$cacheFactory", function(a) {
            return a("templates");
        } ];
    }
    function Cb(a, d) {
        var e = {}, g = "Directive", h = /^\s*directive\:\s*([\d\w_\-]+)\s+(.*)$/, j = /(([\d\w_\-]+)(?:\:([^;]+))?;?)/, k = /^(on[a-z]+|formaction)$/;
        this.directive = function m(b, c) {
            return X(b, "directive"), u(b) ? (V(c, "directiveFactory"), e.hasOwnProperty(b) || (e[b] = [], 
            a.factory(b + g, [ "$injector", "$exceptionHandler", function(a, c) {
                var d = [];
                return f(e[b], function(e, f) {
                    try {
                        var g = a.invoke(e);
                        x(g) ? g = {
                            compile: q(g)
                        } : !g.compile && g.link && (g.compile = q(g.link)), g.priority = g.priority || 0, 
                        g.index = f, g.name = g.name || b, g.require = g.require || g.controller && g.name, 
                        g.restrict = g.restrict || "A", d.push(g);
                    } catch (h) {
                        c(h);
                    }
                }), d;
            } ])), e[b].push(c)) : f(b, i(m)), this;
        }, this.aHrefSanitizationWhitelist = function(a) {
            return s(a) ? (d.aHrefSanitizationWhitelist(a), this) : d.aHrefSanitizationWhitelist();
        }, this.imgSrcSanitizationWhitelist = function(a) {
            return s(a) ? (d.imgSrcSanitizationWhitelist(a), this) : d.imgSrcSanitizationWhitelist();
        }, this.$get = [ "$injector", "$interpolate", "$exceptionHandler", "$http", "$templateCache", "$parse", "$controller", "$rootScope", "$document", "$sce", "$animate", "$$sanitizeUri", function(a, d, i, m, o, q, r, s, v, w, y, z) {
            function A(a, b, c, d, e) {
                a instanceof Rc || (a = Rc(a)), f(a, function(b, c) {
                    3 == b.nodeType && b.nodeValue.match(/\S+/) && (a[c] = Rc(b).wrap("<span></span>").parent()[0]);
                });
                var g = C(a, b, a, c, d, e);
                return B(a, "ng-scope"), function(b, c, d, e) {
                    V(b, "scope");
                    var h = c ? ud.clone.call(a) : a;
                    f(d, function(a, b) {
                        h.data("$" + b + "Controller", a);
                    }), d = 0;
                    for (var i = h.length; i > d; d++) {
                        var j = h[d].nodeType;
                        1 !== j && 9 !== j || h.eq(d).data("$scope", b);
                    }
                    return c && c(h, b), g && g(b, h, h, e), h;
                };
            }
            function B(a, b) {
                try {
                    a.addClass(b);
                } catch (c) {}
            }
            function C(a, b, d, e, f, g) {
                function h(a, d, e, f) {
                    var g, h, i, j, k, l, n;
                    g = d.length;
                    var o = Array(g);
                    for (j = 0; g > j; j++) o[j] = d[j];
                    for (l = j = 0, k = m.length; k > j; l++) h = o[l], d = m[j++], g = m[j++], d ? (d.scope ? (i = a.$new(), 
                    Rc.data(h, "$scope", i)) : i = a, n = d.transcludeOnThisElement ? D(a, d.transclude, f) : !d.templateOnThisElement && f ? f : !f && b ? D(a, b) : null, 
                    d(g, i, h, e, n)) : g && g(a, h.childNodes, c, f);
                }
                for (var i, j, k, l, m = [], n = 0; n < a.length; n++) i = new Y(), j = E(a[n], [], i, 0 === n ? e : c, f), 
                (g = j.length ? J(j, a[n], i, b, d, null, [], [], g) : null) && g.scope && B(i.$$element, "ng-scope"), 
                i = g && g.terminal || !(k = a[n].childNodes) || !k.length ? null : C(k, g ? (g.transcludeOnThisElement || !g.templateOnThisElement) && g.transclude : b), 
                m.push(g, i), l = l || g || i, g = null;
                return l ? h : null;
            }
            function D(a, b, c) {
                return function(d, e, f) {
                    var g = !1;
                    return d || (d = a.$new(), g = d.$$transcluded = !0), e = b(d, e, f, c), g && e.on("$destroy", function() {
                        d.$destroy();
                    }), e;
                };
            }
            function E(a, b, c, d, e) {
                var f, g = c.$attr;
                switch (a.nodeType) {
                  case 1:
                    L(b, Db(Uc(a).toLowerCase()), "E", d, e);
                    for (var i, k, l, m = a.attributes, n = 0, o = m && m.length; o > n; n++) {
                        var p = !1, q = !1;
                        if (i = m[n], !Qc || Qc >= 8 || i.specified) {
                            f = i.name, k = ed(i.value), i = Db(f), (l = ab.test(i)) && (f = U(i.substr(6), "-"));
                            var r = i.replace(/(Start|End)$/, "");
                            i === r + "Start" && (p = f, q = f.substr(0, f.length - 5) + "end", f = f.substr(0, f.length - 6)), 
                            i = Db(f.toLowerCase()), g[i] = f, (l || !c.hasOwnProperty(i)) && (c[i] = k, qb(a, i) && (c[i] = !0)), 
                            T(a, b, k, i), L(b, i, "A", d, e, p, q);
                        }
                    }
                    if (a = a.className, u(a) && "" !== a) for (;f = j.exec(a); ) i = Db(f[2]), L(b, i, "C", d, e) && (c[i] = ed(f[3])), 
                    a = a.substr(f.index + f[0].length);
                    break;

                  case 3:
                    R(b, a.nodeValue);
                    break;

                  case 8:
                    try {
                        (f = h.exec(a.nodeValue)) && (i = Db(f[1]), L(b, i, "M", d, e) && (c[i] = ed(f[2])));
                    } catch (s) {}
                }
                return b.sort(P), b;
            }
            function H(a, b, c) {
                var d = [], e = 0;
                if (b && a.hasAttribute && a.hasAttribute(b)) {
                    do {
                        if (!a) throw Ed("uterdir", b, c);
                        1 == a.nodeType && (a.hasAttribute(b) && e++, a.hasAttribute(c) && e--), d.push(a), 
                        a = a.nextSibling;
                    } while (e > 0);
                } else d.push(a);
                return Rc(d);
            }
            function I(a, b, c) {
                return function(d, e, f, g, h) {
                    return e = H(e[0], b, c), a(d, e, f, g, h);
                };
            }
            function J(a, e, g, h, j, k, l, m, n) {
                function o(a, b, c, d) {
                    a && (c && (a = I(a, c, d)), a.require = w.require, a.directiveName = y, (L === w || w.$$isolateScope) && (a = X(a, {
                        isolateScope: !0
                    })), l.push(a)), b && (c && (b = I(b, c, d)), b.require = w.require, b.directiveName = y, 
                    (L === w || w.$$isolateScope) && (b = X(b, {
                        isolateScope: !0
                    })), m.push(b));
                }
                function p(a, b, c, d) {
                    var e, g = "data", h = !1;
                    if (u(b)) {
                        for (;"^" == (e = b.charAt(0)) || "?" == e; ) b = b.substr(1), "^" == e && (g = "inheritedData"), 
                        h = h || "?" == e;
                        if (e = null, d && "data" === g && (e = d[b]), e = e || c[g]("$" + b + "Controller"), 
                        !e && !h) throw Ed("ctreq", b, a);
                    } else dd(b) && (e = [], f(b, function(b) {
                        e.push(p(a, b, c, d));
                    }));
                    return e;
                }
                function s(a, b, h, j, k) {
                    function n(a, b) {
                        var d;
                        return 2 > arguments.length && (b = a, a = c), U && (d = y), k(a, b, d);
                    }
                    var o, s, t, u, v, w, x, y = {};
                    if (o = e === h ? g : F(g, new Y(Rc(h), g.$attr)), s = o.$$element, L) {
                        var z = /^\s*([@=&])(\??)\s*(\w*)\s*$/;
                        w = b.$new(!0), !P || P !== L && P !== L.$$originalDirective ? s.data("$isolateScopeNoTemplate", w) : s.data("$isolateScope", w), 
                        B(s, "ng-isolate-scope"), f(L.scope, function(a, c) {
                            var e, f, g, h, i = a.match(z) || [], j = i[3] || c, k = "?" == i[2], i = i[1];
                            switch (w.$$isolateBindings[c] = i + j, i) {
                              case "@":
                                o.$observe(j, function(a) {
                                    w[c] = a;
                                }), o.$$observers[j].$$scope = b, o[j] && (w[c] = d(o[j])(b));
                                break;

                              case "=":
                                if (k && !o[j]) break;
                                f = q(o[j]), h = f.literal ? G : function(a, b) {
                                    return a === b || a !== a && b !== b;
                                }, g = f.assign || function() {
                                    throw e = w[c] = f(b), Ed("nonassign", o[j], L.name);
                                }, e = w[c] = f(b), w.$watch(function() {
                                    var a = f(b);
                                    return h(a, w[c]) || (h(a, e) ? g(b, a = w[c]) : w[c] = a), e = a;
                                }, null, f.literal);
                                break;

                              case "&":
                                f = q(o[j]), w[c] = function(a) {
                                    return f(b, a);
                                };
                                break;

                              default:
                                throw Ed("iscp", L.name, c, a);
                            }
                        });
                    }
                    for (x = k && n, J && f(J, function(a) {
                        var c, d = {
                            $scope: a === L || a.$$isolateScope ? w : b,
                            $element: s,
                            $attrs: o,
                            $transclude: x
                        };
                        v = a.controller, "@" == v && (v = o[a.name]), c = r(v, d), y[a.name] = c, U || s.data("$" + a.name + "Controller", c), 
                        a.controllerAs && (d.$scope[a.controllerAs] = c);
                    }), j = 0, t = l.length; t > j; j++) try {
                        (u = l[j])(u.isolateScope ? w : b, s, o, u.require && p(u.directiveName, u.require, s, y), x);
                    } catch (A) {
                        i(A, M(s));
                    }
                    for (j = b, L && (L.template || null === L.templateUrl) && (j = w), a && a(j, h.childNodes, c, k), 
                    j = m.length - 1; j >= 0; j--) try {
                        (u = m[j])(u.isolateScope ? w : b, s, o, u.require && p(u.directiveName, u.require, s, y), x);
                    } catch (C) {
                        i(C, M(s));
                    }
                }
                n = n || {};
                for (var v, w, y, z, C, D = -Number.MAX_VALUE, J = n.controllerDirectives, L = n.newIsolateScopeDirective, P = n.templateDirective, R = n.nonTlbTranscludeDirective, S = !1, T = !1, U = n.hasElementTranscludeDirective, V = g.$$element = Rc(e), Z = h, $ = 0, ab = a.length; ab > $; $++) {
                    w = a[$];
                    var bb = w.$$start, cb = w.$$end;
                    if (bb && (V = H(e, bb, cb)), z = c, D > w.priority) break;
                    if ((z = w.scope) && (v = v || w, w.templateUrl || (Q("new/isolated scope", L, w, V), 
                    t(z) && (L = w))), y = w.name, !w.templateUrl && w.controller && (z = w.controller, 
                    J = J || {}, Q("'" + y + "' controller", J[y], w, V), J[y] = w), (z = w.transclude) && (S = !0, 
                    w.$$tlb || (Q("transclusion", R, w, V), R = w), "element" == z ? (U = !0, D = w.priority, 
                    z = V, V = g.$$element = Rc(b.createComment(" " + y + ": " + g[y] + " ")), e = V[0], 
                    W(j, Zc.call(z, 0), e), Z = A(z, h, D, k && k.name, {
                        nonTlbTranscludeDirective: R
                    })) : (z = Rc(db(e)).contents(), V.empty(), Z = A(z, h))), w.template) if (T = !0, 
                    Q("template", P, w, V), P = w, z = x(w.template) ? w.template(V, g) : w.template, 
                    z = _(z), w.replace) {
                        if (k = w, z = qd.test(z) ? Rc(ed(z)) : [], e = z[0], 1 != z.length || 1 !== e.nodeType) throw Ed("tplrt", y, "");
                        W(j, V, e), ab = {
                            $attr: {}
                        }, z = E(e, [], ab);
                        var eb = a.splice($ + 1, a.length - ($ + 1));
                        L && K(z), a = a.concat(z).concat(eb), N(g, ab), ab = a.length;
                    } else V.html(z);
                    if (w.templateUrl) T = !0, Q("template", P, w, V), P = w, w.replace && (k = w), 
                    s = O(a.splice($, a.length - $), V, g, j, S && Z, l, m, {
                        controllerDirectives: J,
                        newIsolateScopeDirective: L,
                        templateDirective: P,
                        nonTlbTranscludeDirective: R
                    }), ab = a.length; else if (w.compile) try {
                        C = w.compile(V, g, Z), x(C) ? o(null, C, bb, cb) : C && o(C.pre, C.post, bb, cb);
                    } catch (fb) {
                        i(fb, M(V));
                    }
                    w.terminal && (s.terminal = !0, D = Math.max(D, w.priority));
                }
                return s.scope = v && !0 === v.scope, s.transcludeOnThisElement = S, s.templateOnThisElement = T, 
                s.transclude = Z, n.hasElementTranscludeDirective = U, s;
            }
            function K(a) {
                for (var b = 0, c = a.length; c > b; b++) a[b] = n(a[b], {
                    $$isolateScope: !0
                });
            }
            function L(b, d, f, h, j, k, l) {
                if (d === j) return null;
                if (j = null, e.hasOwnProperty(d)) {
                    var m;
                    d = a.get(d + g);
                    for (var o = 0, p = d.length; p > o; o++) try {
                        m = d[o], (h === c || h > m.priority) && -1 != m.restrict.indexOf(f) && (k && (m = n(m, {
                            $$start: k,
                            $$end: l
                        })), b.push(m), j = m);
                    } catch (q) {
                        i(q);
                    }
                }
                return j;
            }
            function N(a, b) {
                var c = b.$attr, d = a.$attr, e = a.$$element;
                f(a, function(d, e) {
                    "$" != e.charAt(0) && (b[e] && b[e] !== d && (d += ("style" === e ? ";" : " ") + b[e]), 
                    a.$set(e, d, !0, c[e]));
                }), f(b, function(b, f) {
                    "class" == f ? (B(e, b), a["class"] = (a["class"] ? a["class"] + " " : "") + b) : "style" == f ? (e.attr("style", e.attr("style") + ";" + b), 
                    a.style = (a.style ? a.style + ";" : "") + b) : "$" == f.charAt(0) || a.hasOwnProperty(f) || (a[f] = b, 
                    d[f] = c[f]);
                });
            }
            function O(a, b, c, d, e, g, h, i) {
                var j, k, n = [], p = b[0], q = a.shift(), r = l({}, q, {
                    templateUrl: null,
                    transclude: null,
                    replace: null,
                    $$originalDirective: q
                }), s = x(q.templateUrl) ? q.templateUrl(b, c) : q.templateUrl;
                return b.empty(), m.get(w.getTrustedResourceUrl(s), {
                    cache: o
                }).success(function(l) {
                    var m, o;
                    if (l = _(l), q.replace) {
                        if (l = qd.test(l) ? Rc(ed(l)) : [], m = l[0], 1 != l.length || 1 !== m.nodeType) throw Ed("tplrt", q.name, s);
                        l = {
                            $attr: {}
                        }, W(d, b, m);
                        var u = E(m, [], l);
                        t(q.scope) && K(u), a = u.concat(a), N(c, l);
                    } else m = p, b.html(l);
                    for (a.unshift(r), j = J(a, m, c, e, b, q, g, h, i), f(d, function(a, c) {
                        a == m && (d[c] = b[0]);
                    }), k = C(b[0].childNodes, e); n.length; ) {
                        l = n.shift(), o = n.shift();
                        var v = n.shift(), w = n.shift(), u = b[0];
                        if (o !== p) {
                            var x = o.className;
                            i.hasElementTranscludeDirective && q.replace || (u = db(m)), W(v, Rc(o), u), B(Rc(u), x);
                        }
                        o = j.transcludeOnThisElement ? D(l, j.transclude, w) : w, j(k, l, u, d, o);
                    }
                    n = null;
                }).error(function(a, b, c, d) {
                    throw Ed("tpload", d.url);
                }), function(a, b, c, d, e) {
                    a = e, n ? (n.push(b), n.push(c), n.push(d), n.push(a)) : (j.transcludeOnThisElement && (a = D(b, j.transclude, e)), 
                    j(k, b, c, d, a));
                };
            }
            function P(a, b) {
                var c = b.priority - a.priority;
                return 0 !== c ? c : a.name !== b.name ? a.name < b.name ? -1 : 1 : a.index - b.index;
            }
            function Q(a, b, c, d) {
                if (b) throw Ed("multidir", b.name, c.name, a, M(d));
            }
            function R(a, b) {
                var c = d(b, !0);
                c && a.push({
                    priority: 0,
                    compile: function(a) {
                        var b = a.parent().length;
                        return b && B(a.parent(), "ng-binding"), function(a, d) {
                            var e = d.parent(), f = e.data("$binding") || [];
                            f.push(c), e.data("$binding", f), b || B(e, "ng-binding"), a.$watch(c, function(a) {
                                d[0].nodeValue = a;
                            });
                        };
                    }
                });
            }
            function S(a, b) {
                if ("srcdoc" == b) return w.HTML;
                var c = Uc(a);
                return "xlinkHref" == b || "FORM" == c && "action" == b || "IMG" != c && ("src" == b || "ngSrc" == b) ? w.RESOURCE_URL : void 0;
            }
            function T(a, b, c, e) {
                var f = d(c, !0);
                if (f) {
                    if ("multiple" === e && "SELECT" === Uc(a)) throw Ed("selmulti", M(a));
                    b.push({
                        priority: 100,
                        compile: function() {
                            return {
                                pre: function(b, c, g) {
                                    if (c = g.$$observers || (g.$$observers = {}), k.test(e)) throw Ed("nodomevents");
                                    (f = d(g[e], !0, S(a, e))) && (g[e] = f(b), (c[e] || (c[e] = [])).$$inter = !0, 
                                    (g.$$observers && g.$$observers[e].$$scope || b).$watch(f, function(a, b) {
                                        "class" === e && a != b ? g.$updateClass(a, b) : g.$set(e, a);
                                    }));
                                }
                            };
                        }
                    });
                }
            }
            function W(a, c, d) {
                var e, f, g = c[0], h = c.length, i = g.parentNode;
                if (a) for (e = 0, f = a.length; f > e; e++) if (a[e] == g) {
                    a[e++] = d, f = e + h - 1;
                    for (var j = a.length; j > e; e++, f++) j > f ? a[e] = a[f] : delete a[e];
                    a.length -= h - 1;
                    break;
                }
                for (i && i.replaceChild(d, g), a = b.createDocumentFragment(), a.appendChild(g), 
                d[Rc.expando] = g[Rc.expando], g = 1, h = c.length; h > g; g++) i = c[g], Rc(i).remove(), 
                a.appendChild(i), delete c[g];
                c[0] = d, c.length = 1;
            }
            function X(a, b) {
                return l(function() {
                    return a.apply(null, arguments);
                }, a, b);
            }
            var Y = function(a, b) {
                this.$$element = a, this.$attr = b || {};
            };
            Y.prototype = {
                $normalize: Db,
                $addClass: function(a) {
                    a && 0 < a.length && y.addClass(this.$$element, a);
                },
                $removeClass: function(a) {
                    a && 0 < a.length && y.removeClass(this.$$element, a);
                },
                $updateClass: function(a, b) {
                    var c = Eb(a, b), d = Eb(b, a);
                    0 === c.length ? y.removeClass(this.$$element, d) : 0 === d.length ? y.addClass(this.$$element, c) : y.setClass(this.$$element, c, d);
                },
                $set: function(a, b, d, e) {
                    var g = qb(this.$$element[0], a);
                    g && (this.$$element.prop(a, b), e = g), this[a] = b, e ? this.$attr[a] = e : (e = this.$attr[a]) || (this.$attr[a] = e = U(a, "-")), 
                    g = Uc(this.$$element), ("A" === g && "href" === a || "IMG" === g && "src" === a) && (this[a] = b = z(b, "src" === a)), 
                    !1 !== d && (null === b || b === c ? this.$$element.removeAttr(e) : this.$$element.attr(e, b)), 
                    (d = this.$$observers) && f(d[a], function(a) {
                        try {
                            a(b);
                        } catch (c) {
                            i(c);
                        }
                    });
                },
                $observe: function(a, b) {
                    var c = this, d = c.$$observers || (c.$$observers = {}), e = d[a] || (d[a] = []);
                    return e.push(b), s.$evalAsync(function() {
                        e.$$inter || b(c[a]);
                    }), b;
                }
            };
            var Z = d.startSymbol(), $ = d.endSymbol(), _ = "{{" == Z || "}}" == $ ? p : function(a) {
                return a.replace(/\{\{/g, Z).replace(/}}/g, $);
            }, ab = /^ngAttr[A-Z]/;
            return A;
        } ];
    }
    function Db(a) {
        return ab(a.replace(Fd, ""));
    }
    function Eb(a, b) {
        var c = "", d = a.split(/\s+/), e = b.split(/\s+/), f = 0;
        a: for (;f < d.length; f++) {
            for (var g = d[f], h = 0; h < e.length; h++) if (g == e[h]) continue a;
            c += (0 < c.length ? " " : "") + g;
        }
        return c;
    }
    function Fb() {
        var a = {}, b = /^(\S+)(\s+as\s+(\w+))?$/;
        this.register = function(b, c) {
            X(b, "controller"), t(b) ? l(a, b) : a[b] = c;
        }, this.$get = [ "$injector", "$window", function(c, e) {
            return function(f, g) {
                var h, i, j;
                if (u(f) && (h = f.match(b), i = h[1], j = h[3], f = a.hasOwnProperty(i) ? a[i] : Y(g.$scope, i, !0) || Y(e, i, !0), 
                W(f, i, !0)), h = c.instantiate(f, g), j) {
                    if (!g || "object" != typeof g.$scope) throw d("$controller")("noscp", i || f.name, j);
                    g.$scope[j] = h;
                }
                return h;
            };
        } ];
    }
    function Gb() {
        this.$get = [ "$window", function(a) {
            return Rc(a.document);
        } ];
    }
    function Hb() {
        this.$get = [ "$log", function(a) {
            return function() {
                a.error.apply(a, arguments);
            };
        } ];
    }
    function Ib(a) {
        var b, c, d, e = {};
        return a ? (f(a.split("\n"), function(a) {
            d = a.indexOf(":"), b = Wc(ed(a.substr(0, d))), c = ed(a.substr(d + 1)), b && (e[b] = e[b] ? e[b] + ", " + c : c);
        }), e) : e;
    }
    function Jb(a) {
        var b = t(a) ? a : c;
        return function(c) {
            return b || (b = Ib(a)), c ? b[Wc(c)] || null : b;
        };
    }
    function Kb(a, b, c) {
        return x(c) ? c(a, b) : (f(c, function(c) {
            a = c(a, b);
        }), a);
    }
    function Lb() {
        var a = /^\s*(\[|\{[^\{])/, b = /[\}\]]\s*$/, d = /^\)\]\}',?\n/, e = {
            "Content-Type": "application/json;charset=utf-8"
        }, g = this.defaults = {
            transformResponse: [ function(c) {
                return u(c) && (c = c.replace(d, ""), a.test(c) && b.test(c) && (c = K(c))), c;
            } ],
            transformRequest: [ function(a) {
                return t(a) && "[object File]" !== _c.call(a) && "[object Blob]" !== _c.call(a) ? J(a) : a;
            } ],
            headers: {
                common: {
                    Accept: "application/json, text/plain, */*"
                },
                post: F(e),
                put: F(e),
                patch: F(e)
            },
            xsrfCookieName: "XSRF-TOKEN",
            xsrfHeaderName: "X-XSRF-TOKEN"
        }, i = this.interceptors = [], j = this.responseInterceptors = [];
        this.$get = [ "$httpBackend", "$browser", "$cacheFactory", "$rootScope", "$q", "$injector", function(a, b, d, e, k, m) {
            function n(a) {
                function b(a) {
                    var b = l({}, a, {
                        data: Kb(a.data, a.headers, d.transformResponse)
                    });
                    return 200 <= a.status && 300 > a.status ? b : k.reject(b);
                }
                var d = {
                    method: "get",
                    transformRequest: g.transformRequest,
                    transformResponse: g.transformResponse
                }, e = function(a) {
                    var b, c, d = g.headers, e = l({}, a.headers), d = l({}, d.common, d[Wc(a.method)]);
                    a: for (b in d) {
                        a = Wc(b);
                        for (c in e) if (Wc(c) === a) continue a;
                        e[b] = d[b];
                    }
                    return function(a) {
                        var b;
                        f(a, function(c, d) {
                            x(c) && (b = c(), null != b ? a[d] = b : delete a[d]);
                        });
                    }(e), e;
                }(a);
                l(d, a), d.headers = e, d.method = Yc(d.method);
                var h = [ function(a) {
                    e = a.headers;
                    var c = Kb(a.data, Jb(e), a.transformRequest);
                    return r(c) && f(e, function(a, b) {
                        "content-type" === Wc(b) && delete e[b];
                    }), r(a.withCredentials) && !r(g.withCredentials) && (a.withCredentials = g.withCredentials), 
                    o(a, c, e).then(b, b);
                }, c ], i = k.when(d);
                for (f(v, function(a) {
                    (a.request || a.requestError) && h.unshift(a.request, a.requestError), (a.response || a.responseError) && h.push(a.response, a.responseError);
                }); h.length; ) {
                    a = h.shift();
                    var j = h.shift(), i = i.then(a, j);
                }
                return i.success = function(a) {
                    return i.then(function(b) {
                        a(b.data, b.status, b.headers, d);
                    }), i;
                }, i.error = function(a) {
                    return i.then(null, function(b) {
                        a(b.data, b.status, b.headers, d);
                    }), i;
                }, i;
            }
            function o(d, f, h) {
                function i(a, b, c, d) {
                    m && (a >= 200 && 300 > a ? m.put(w, [ a, b, Ib(c), d ]) : m.remove(w)), j(b, a, c, d), 
                    e.$$phase || e.$apply();
                }
                function j(a, b, c, e) {
                    b = Math.max(b, 0), (b >= 200 && 300 > b ? u.resolve : u.reject)({
                        data: a,
                        status: b,
                        headers: Jb(c),
                        config: d,
                        statusText: e
                    });
                }
                function l() {
                    var a = C(n.pendingRequests, d);
                    -1 !== a && n.pendingRequests.splice(a, 1);
                }
                var m, o, u = k.defer(), v = u.promise, w = p(d.url, d.params);
                if (n.pendingRequests.push(d), v.then(l, l), !d.cache && !g.cache || !1 === d.cache || "GET" !== d.method && "JSONP" !== d.method || (m = t(d.cache) ? d.cache : t(g.cache) ? g.cache : q), 
                m) if (o = m.get(w), s(o)) {
                    if (o && x(o.then)) return o.then(l, l), o;
                    dd(o) ? j(o[1], o[0], F(o[2]), o[3]) : j(o, 200, {}, "OK");
                } else m.put(w, v);
                return r(o) && ((o = vc(d.url) ? b.cookies()[d.xsrfCookieName || g.xsrfCookieName] : c) && (h[d.xsrfHeaderName || g.xsrfHeaderName] = o), 
                a(d.method, w, f, i, h, d.timeout, d.withCredentials, d.responseType)), v;
            }
            function p(a, b) {
                if (!b) return a;
                var c = [];
                return h(b, function(a, b) {
                    null === a || r(a) || (dd(a) || (a = [ a ]), f(a, function(a) {
                        t(a) && (w(a) ? a = a.toISOString() : t(a) && (a = J(a))), c.push(R(b) + "=" + R(a));
                    }));
                }), 0 < c.length && (a += (-1 == a.indexOf("?") ? "?" : "&") + c.join("&")), a;
            }
            var q = d("$http"), v = [];
            return f(i, function(a) {
                v.unshift(u(a) ? m.get(a) : m.invoke(a));
            }), f(j, function(a, b) {
                var c = u(a) ? m.get(a) : m.invoke(a);
                v.splice(b, 0, {
                    response: function(a) {
                        return c(k.when(a));
                    },
                    responseError: function(a) {
                        return c(k.reject(a));
                    }
                });
            }), n.pendingRequests = [], function() {
                f(arguments, function(a) {
                    n[a] = function(b, c) {
                        return n(l(c || {}, {
                            method: a,
                            url: b
                        }));
                    };
                });
            }("get", "delete", "head", "jsonp"), function() {
                f(arguments, function(a) {
                    n[a] = function(b, c, d) {
                        return n(l(d || {}, {
                            method: a,
                            url: b,
                            data: c
                        }));
                    };
                });
            }("post", "put"), n.defaults = g, n;
        } ];
    }
    function Mb(b) {
        if (8 >= Qc && (!b.match(/^(get|post|head|put|delete|options)$/i) || !a.XMLHttpRequest)) return new a.ActiveXObject("Microsoft.XMLHTTP");
        if (a.XMLHttpRequest) return new a.XMLHttpRequest();
        throw d("$httpBackend")("noxhr");
    }
    function Nb() {
        this.$get = [ "$browser", "$window", "$document", function(a, b, c) {
            return Ob(a, Mb, a.defer, b.angular.callbacks, c[0]);
        } ];
    }
    function Ob(a, b, c, d, e) {
        function g(a, b, c) {
            var f = e.createElement("script"), g = null;
            return f.type = "text/javascript", f.src = a, f.async = !0, g = function(a) {
                ld(f, "load", g), ld(f, "error", g), e.body.removeChild(f), f = null;
                var h = -1, i = "unknown";
                a && ("load" !== a.type || d[b].called || (a = {
                    type: "error"
                }), i = a.type, h = "error" === a.type ? 404 : 200), c && c(h, i);
            }, kd(f, "load", g), kd(f, "error", g), 8 >= Qc && (f.onreadystatechange = function() {
                u(f.readyState) && /loaded|complete/.test(f.readyState) && (f.onreadystatechange = null, 
                g({
                    type: "load"
                }));
            }), e.body.appendChild(f), g;
        }
        var h = -1;
        return function(e, i, j, k, l, m, n, p) {
            function q() {
                t = h, v && v(), w && w.abort();
            }
            function r(b, d, e, f, g) {
                z && c.cancel(z), v = w = null, 0 === d && (d = e ? 200 : "file" == uc(i).protocol ? 404 : 0), 
                b(1223 === d ? 204 : d, e, f, g || ""), a.$$completeOutstandingRequest(o);
            }
            var t;
            if (a.$$incOutstandingRequestCount(), i = i || a.url(), "jsonp" == Wc(e)) {
                var u = "_" + (d.counter++).toString(36);
                d[u] = function(a) {
                    d[u].data = a, d[u].called = !0;
                };
                var v = g(i.replace("JSON_CALLBACK", "angular.callbacks." + u), u, function(a, b) {
                    r(k, a, d[u].data, "", b), d[u] = o;
                });
            } else {
                var w = b(e);
                if (w.open(e, i, !0), f(l, function(a, b) {
                    s(a) && w.setRequestHeader(b, a);
                }), w.onreadystatechange = function() {
                    if (w && 4 == w.readyState) {
                        var a = null, b = null, c = "";
                        t !== h && (a = w.getAllResponseHeaders(), b = "response" in w ? w.response : w.responseText), 
                        t === h && 10 > Qc || (c = w.statusText), r(k, t || w.status, b, a, c);
                    }
                }, n && (w.withCredentials = !0), p) try {
                    w.responseType = p;
                } catch (y) {
                    if ("json" !== p) throw y;
                }
                w.send(j || null);
            }
            if (m > 0) var z = c(q, m); else m && x(m.then) && m.then(q);
        };
    }
    function Pb() {
        var a = "{{", b = "}}";
        this.startSymbol = function(b) {
            return b ? (a = b, this) : a;
        }, this.endSymbol = function(a) {
            return a ? (b = a, this) : b;
        }, this.$get = [ "$parse", "$exceptionHandler", "$sce", function(c, d, e) {
            function f(f, i, j) {
                for (var k, l, m = 0, n = [], o = f.length, p = !1, q = []; o > m; ) -1 != (k = f.indexOf(a, m)) && -1 != (l = f.indexOf(b, k + g)) ? (m != k && n.push(f.substring(m, k)), 
                n.push(m = c(p = f.substring(k + g, l))), m.exp = p, m = l + h, p = !0) : (m != o && n.push(f.substring(m)), 
                m = o);
                if ((o = n.length) || (n.push(""), o = 1), j && 1 < n.length) throw Gd("noconcat", f);
                return !i || p ? (q.length = o, m = function(a) {
                    try {
                        for (var b, c = 0, g = o; g > c; c++) {
                            if ("function" == typeof (b = n[c])) if (b = b(a), b = j ? e.getTrusted(j, b) : e.valueOf(b), 
                            null == b) b = ""; else switch (typeof b) {
                              case "string":
                                break;

                              case "number":
                                b = "" + b;
                                break;

                              default:
                                b = J(b);
                            }
                            q[c] = b;
                        }
                        return q.join("");
                    } catch (h) {
                        a = Gd("interr", f, h.toString()), d(a);
                    }
                }, m.exp = f, m.parts = n, m) : void 0;
            }
            var g = a.length, h = b.length;
            return f.startSymbol = function() {
                return a;
            }, f.endSymbol = function() {
                return b;
            }, f;
        } ];
    }
    function Qb() {
        this.$get = [ "$rootScope", "$window", "$q", function(a, b, c) {
            function d(d, f, g, h) {
                var i = b.setInterval, j = b.clearInterval, k = c.defer(), l = k.promise, m = 0, n = s(h) && !h;
                return g = s(g) ? g : 0, l.then(null, null, d), l.$$intervalId = i(function() {
                    k.notify(m++), g > 0 && m >= g && (k.resolve(m), j(l.$$intervalId), delete e[l.$$intervalId]), 
                    n || a.$apply();
                }, f), e[l.$$intervalId] = k, l;
            }
            var e = {};
            return d.cancel = function(a) {
                return a && a.$$intervalId in e ? (e[a.$$intervalId].reject("canceled"), b.clearInterval(a.$$intervalId), 
                delete e[a.$$intervalId], !0) : !1;
            }, d;
        } ];
    }
    function Rb() {
        this.$get = function() {
            return {
                id: "en-us",
                NUMBER_FORMATS: {
                    DECIMAL_SEP: ".",
                    GROUP_SEP: ",",
                    PATTERNS: [ {
                        minInt: 1,
                        minFrac: 0,
                        maxFrac: 3,
                        posPre: "",
                        posSuf: "",
                        negPre: "-",
                        negSuf: "",
                        gSize: 3,
                        lgSize: 3
                    }, {
                        minInt: 1,
                        minFrac: 2,
                        maxFrac: 2,
                        posPre: "¤",
                        posSuf: "",
                        negPre: "(¤",
                        negSuf: ")",
                        gSize: 3,
                        lgSize: 3
                    } ],
                    CURRENCY_SYM: "$"
                },
                DATETIME_FORMATS: {
                    MONTH: "January February March April May June July August September October November December".split(" "),
                    SHORTMONTH: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
                    DAY: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
                    SHORTDAY: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
                    AMPMS: [ "AM", "PM" ],
                    medium: "MMM d, y h:mm:ss a",
                    "short": "M/d/yy h:mm a",
                    fullDate: "EEEE, MMMM d, y",
                    longDate: "MMMM d, y",
                    mediumDate: "MMM d, y",
                    shortDate: "M/d/yy",
                    mediumTime: "h:mm:ss a",
                    shortTime: "h:mm a"
                },
                pluralCat: function(a) {
                    return 1 === a ? "one" : "other";
                }
            };
        };
    }
    function Sb(a) {
        a = a.split("/");
        for (var b = a.length; b--; ) a[b] = Q(a[b]);
        return a.join("/");
    }
    function Tb(a, b, c) {
        a = uc(a, c), b.$$protocol = a.protocol, b.$$host = a.hostname, b.$$port = m(a.port) || Id[a.protocol] || null;
    }
    function Ub(a, b, c) {
        var d = "/" !== a.charAt(0);
        d && (a = "/" + a), a = uc(a, c), b.$$path = decodeURIComponent(d && "/" === a.pathname.charAt(0) ? a.pathname.substring(1) : a.pathname), 
        b.$$search = O(a.search), b.$$hash = decodeURIComponent(a.hash), b.$$path && "/" != b.$$path.charAt(0) && (b.$$path = "/" + b.$$path);
    }
    function Vb(a, b) {
        return 0 === b.indexOf(a) ? b.substr(a.length) : void 0;
    }
    function Wb(a) {
        var b = a.indexOf("#");
        return -1 == b ? a : a.substr(0, b);
    }
    function Xb(a) {
        return a.substr(0, Wb(a).lastIndexOf("/") + 1);
    }
    function Yb(a, b) {
        this.$$html5 = !0, b = b || "";
        var d = Xb(a);
        Tb(a, this, a), this.$$parse = function(b) {
            var c = Vb(d, b);
            if (!u(c)) throw Jd("ipthprfx", b, d);
            Ub(c, this, a), this.$$path || (this.$$path = "/"), this.$$compose();
        }, this.$$compose = function() {
            var a = P(this.$$search), b = this.$$hash ? "#" + Q(this.$$hash) : "";
            this.$$url = Sb(this.$$path) + (a ? "?" + a : "") + b, this.$$absUrl = d + this.$$url.substr(1);
        }, this.$$rewrite = function(e) {
            var f;
            return (f = Vb(a, e)) !== c ? (e = f, (f = Vb(b, f)) !== c ? d + (Vb("/", f) || f) : a + e) : (f = Vb(d, e)) !== c ? d + f : d == e + "/" ? d : void 0;
        };
    }
    function Zb(a, b) {
        var c = Xb(a);
        Tb(a, this, a), this.$$parse = function(d) {
            var e = Vb(a, d) || Vb(c, d), e = "#" == e.charAt(0) ? Vb(b, e) : this.$$html5 ? e : "";
            if (!u(e)) throw Jd("ihshprfx", d, b);
            Ub(e, this, a), d = this.$$path;
            var f = /^\/[A-Z]:(\/.*)/;
            0 === e.indexOf(a) && (e = e.replace(a, "")), f.exec(e) || (d = (e = f.exec(d)) ? e[1] : d), 
            this.$$path = d, this.$$compose();
        }, this.$$compose = function() {
            var c = P(this.$$search), d = this.$$hash ? "#" + Q(this.$$hash) : "";
            this.$$url = Sb(this.$$path) + (c ? "?" + c : "") + d, this.$$absUrl = a + (this.$$url ? b + this.$$url : "");
        }, this.$$rewrite = function(b) {
            return Wb(a) == Wb(b) ? b : void 0;
        };
    }
    function $b(a, b) {
        this.$$html5 = !0, Zb.apply(this, arguments);
        var c = Xb(a);
        this.$$rewrite = function(d) {
            var e;
            return a == Wb(d) ? d : (e = Vb(c, d)) ? a + b + e : c === d + "/" ? c : void 0;
        }, this.$$compose = function() {
            var c = P(this.$$search), d = this.$$hash ? "#" + Q(this.$$hash) : "";
            this.$$url = Sb(this.$$path) + (c ? "?" + c : "") + d, this.$$absUrl = a + b + this.$$url;
        };
    }
    function _b(a) {
        return function() {
            return this[a];
        };
    }
    function ac(a, b) {
        return function(c) {
            return r(c) ? this[a] : (this[a] = b(c), this.$$compose(), this);
        };
    }
    function bc() {
        var b = "", c = !1;
        this.hashPrefix = function(a) {
            return s(a) ? (b = a, this) : b;
        }, this.html5Mode = function(a) {
            return s(a) ? (c = a, this) : c;
        }, this.$get = [ "$rootScope", "$browser", "$sniffer", "$rootElement", function(d, e, f, g) {
            function h(a) {
                d.$broadcast("$locationChangeSuccess", i.absUrl(), a);
            }
            var i, j, k, l = e.baseHref(), m = e.url();
            c ? (k = m.substring(0, m.indexOf("/", m.indexOf("//") + 2)) + (l || "/"), j = f.history ? Yb : $b) : (k = Wb(m), 
            j = Zb), i = new j(k, "#" + b), i.$$parse(i.$$rewrite(m));
            var n = /^\s*(javascript|mailto):/i;
            g.on("click", function(c) {
                if (!c.ctrlKey && !c.metaKey && 2 != c.which) {
                    for (var f = Rc(c.target); "a" !== Wc(f[0].nodeName); ) if (f[0] === g[0] || !(f = f.parent())[0]) return;
                    var h = f.prop("href");
                    if (t(h) && "[object SVGAnimatedString]" === h.toString() && (h = uc(h.animVal).href), 
                    !n.test(h)) {
                        if (j === $b) {
                            var l = f.attr("href") || f.attr("xlink:href");
                            if (l && 0 > l.indexOf("://")) if (h = "#" + b, "/" == l[0]) h = k + h + l; else if ("#" == l[0]) h = k + h + (i.path() || "/") + l; else {
                                var m = i.path().split("/"), l = l.split("/");
                                2 !== m.length || m[1] || (m.length = 1);
                                for (var o = 0; o < l.length; o++) "." != l[o] && (".." == l[o] ? m.pop() : l[o].length && m.push(l[o]));
                                h = k + h + m.join("/");
                            }
                        }
                        m = i.$$rewrite(h), h && !f.attr("target") && m && !c.isDefaultPrevented() && (c.preventDefault(), 
                        m != e.url() && (i.$$parse(m), d.$apply(), a.angular["ff-684208-preventDefault"] = !0));
                    }
                }
            }), i.absUrl() != m && e.url(i.absUrl(), !0), e.onUrlChange(function(a) {
                i.absUrl() != a && (d.$evalAsync(function() {
                    var b = i.absUrl();
                    i.$$parse(a), d.$broadcast("$locationChangeStart", a, b).defaultPrevented ? (i.$$parse(b), 
                    e.url(b)) : h(b);
                }), d.$$phase || d.$digest());
            });
            var o = 0;
            return d.$watch(function() {
                var a = e.url(), b = i.$$replace;
                return o && a == i.absUrl() || (o++, d.$evalAsync(function() {
                    d.$broadcast("$locationChangeStart", i.absUrl(), a).defaultPrevented ? i.$$parse(a) : (e.url(i.absUrl(), b), 
                    h(a));
                })), i.$$replace = !1, o;
            }), i;
        } ];
    }
    function cc() {
        var a = !0, b = this;
        this.debugEnabled = function(b) {
            return s(b) ? (a = b, this) : a;
        }, this.$get = [ "$window", function(c) {
            function d(a) {
                return a instanceof Error && (a.stack ? a = a.message && -1 === a.stack.indexOf(a.message) ? "Error: " + a.message + "\n" + a.stack : a.stack : a.sourceURL && (a = a.message + "\n" + a.sourceURL + ":" + a.line)), 
                a;
            }
            function e(a) {
                var b = c.console || {}, e = b[a] || b.log || o;
                a = !1;
                try {
                    a = !!e.apply;
                } catch (g) {}
                return a ? function() {
                    var a = [];
                    return f(arguments, function(b) {
                        a.push(d(b));
                    }), e.apply(b, a);
                } : function(a, b) {
                    e(a, null == b ? "" : b);
                };
            }
            return {
                log: e("log"),
                info: e("info"),
                warn: e("warn"),
                error: e("error"),
                debug: function() {
                    var c = e("debug");
                    return function() {
                        a && c.apply(b, arguments);
                    };
                }()
            };
        } ];
    }
    function dc(a, b) {
        if ("__defineGetter__" === a || "__defineSetter__" === a || "__lookupGetter__" === a || "__lookupSetter__" === a || "__proto__" === a) throw Ld("isecfld", b);
        return a;
    }
    function ec(a, b) {
        if (a) {
            if (a.constructor === a) throw Ld("isecfn", b);
            if (a.document && a.location && a.alert && a.setInterval) throw Ld("isecwindow", b);
            if (a.children && (a.nodeName || a.prop && a.attr && a.find)) throw Ld("isecdom", b);
            if (a === Object) throw Ld("isecobj", b);
        }
        return a;
    }
    function fc(a, b, d, e, f) {
        f = f || {}, b = b.split(".");
        for (var g, h = 0; 1 < b.length; h++) {
            g = dc(b.shift(), e);
            var i = a[g];
            i || (i = {}, a[g] = i), a = i, a.then && f.unwrapPromises && (Kd(e), "$$v" in a || function(a) {
                a.then(function(b) {
                    a.$$v = b;
                });
            }(a), a.$$v === c && (a.$$v = {}), a = a.$$v);
        }
        return g = dc(b.shift(), e), ec(a, e), ec(a[g], e), a[g] = d;
    }
    function gc(a, b, d, e, f, g, h) {
        return dc(a, g), dc(b, g), dc(d, g), dc(e, g), dc(f, g), h.unwrapPromises ? function(h, i) {
            var j, k = i && i.hasOwnProperty(a) ? i : h;
            return null == k ? k : ((k = k[a]) && k.then && (Kd(g), "$$v" in k || (j = k, j.$$v = c, 
            j.then(function(a) {
                j.$$v = a;
            })), k = k.$$v), b ? null == k ? c : ((k = k[b]) && k.then && (Kd(g), "$$v" in k || (j = k, 
            j.$$v = c, j.then(function(a) {
                j.$$v = a;
            })), k = k.$$v), d ? null == k ? c : ((k = k[d]) && k.then && (Kd(g), "$$v" in k || (j = k, 
            j.$$v = c, j.then(function(a) {
                j.$$v = a;
            })), k = k.$$v), e ? null == k ? c : ((k = k[e]) && k.then && (Kd(g), "$$v" in k || (j = k, 
            j.$$v = c, j.then(function(a) {
                j.$$v = a;
            })), k = k.$$v), f ? null == k ? c : ((k = k[f]) && k.then && (Kd(g), "$$v" in k || (j = k, 
            j.$$v = c, j.then(function(a) {
                j.$$v = a;
            })), k = k.$$v), k) : k) : k) : k) : k);
        } : function(g, h) {
            var i = h && h.hasOwnProperty(a) ? h : g;
            return null == i ? i : (i = i[a], b ? null == i ? c : (i = i[b], d ? null == i ? c : (i = i[d], 
            e ? null == i ? c : (i = i[e], f ? null == i ? c : i = i[f] : i) : i) : i) : i);
        };
    }
    function hc(a, b, d) {
        if (Ud.hasOwnProperty(a)) return Ud[a];
        var e, g = a.split("."), h = g.length;
        if (b.csp) e = 6 > h ? gc(g[0], g[1], g[2], g[3], g[4], d, b) : function(a, e) {
            var f, i = 0;
            do f = gc(g[i++], g[i++], g[i++], g[i++], g[i++], d, b)(a, e), e = c, a = f; while (h > i);
            return f;
        }; else {
            var i = "var p;\n";
            f(g, function(a, c) {
                dc(a, d), i += "if(s == null) return undefined;\ns=" + (c ? "s" : '((k&&k.hasOwnProperty("' + a + '"))?k:s)') + '["' + a + '"];\n' + (b.unwrapPromises ? 'if (s && s.then) {\n pw("' + d.replace(/(["\r\n])/g, "\\$1") + '");\n if (!("$$v" in s)) {\n p=s;\n p.$$v = undefined;\n p.then(function(v) {p.$$v=v;});\n}\n s=s.$$v\n}\n' : "");
            });
            var i = i + "return s;", j = new Function("s", "k", "pw", i);
            j.toString = q(i), e = b.unwrapPromises ? function(a, b) {
                return j(a, b, Kd);
            } : j;
        }
        return "hasOwnProperty" !== a && (Ud[a] = e), e;
    }
    function ic() {
        var a = {}, b = {
            csp: !1,
            unwrapPromises: !1,
            logPromiseWarnings: !0
        };
        this.unwrapPromises = function(a) {
            return s(a) ? (b.unwrapPromises = !!a, this) : b.unwrapPromises;
        }, this.logPromiseWarnings = function(a) {
            return s(a) ? (b.logPromiseWarnings = a, this) : b.logPromiseWarnings;
        }, this.$get = [ "$filter", "$sniffer", "$log", function(c, d, e) {
            return b.csp = d.csp, Kd = function(a) {
                b.logPromiseWarnings && !Md.hasOwnProperty(a) && (Md[a] = !0, e.warn("[$parse] Promise found in the expression `" + a + "`. Automatic unwrapping of promises in Angular expressions is deprecated."));
            }, function(d) {
                var e;
                switch (typeof d) {
                  case "string":
                    return a.hasOwnProperty(d) ? a[d] : (e = new Sd(b), e = new Td(e, c, b).parse(d), 
                    "hasOwnProperty" !== d && (a[d] = e), e);

                  case "function":
                    return d;

                  default:
                    return o;
                }
            };
        } ];
    }
    function jc() {
        this.$get = [ "$rootScope", "$exceptionHandler", function(a, b) {
            return kc(function(b) {
                a.$evalAsync(b);
            }, b);
        } ];
    }
    function kc(a, b) {
        function d(a) {
            return a;
        }
        function e(a) {
            return i(a);
        }
        var g = function() {
            var f, i, k = [];
            return i = {
                resolve: function(b) {
                    if (k) {
                        var d = k;
                        k = c, f = h(b), d.length && a(function() {
                            for (var a, b = 0, c = d.length; c > b; b++) a = d[b], f.then(a[0], a[1], a[2]);
                        });
                    }
                },
                reject: function(a) {
                    i.resolve(j(a));
                },
                notify: function(b) {
                    if (k) {
                        var c = k;
                        k.length && a(function() {
                            for (var a, d = 0, e = c.length; e > d; d++) a = c[d], a[2](b);
                        });
                    }
                },
                promise: {
                    then: function(a, c, h) {
                        var i = g(), j = function(c) {
                            try {
                                i.resolve((x(a) ? a : d)(c));
                            } catch (e) {
                                i.reject(e), b(e);
                            }
                        }, l = function(a) {
                            try {
                                i.resolve((x(c) ? c : e)(a));
                            } catch (d) {
                                i.reject(d), b(d);
                            }
                        }, m = function(a) {
                            try {
                                i.notify((x(h) ? h : d)(a));
                            } catch (c) {
                                b(c);
                            }
                        };
                        return k ? k.push([ j, l, m ]) : f.then(j, l, m), i.promise;
                    },
                    "catch": function(a) {
                        return this.then(null, a);
                    },
                    "finally": function(a) {
                        function b(a, b) {
                            var c = g();
                            return b ? c.resolve(a) : c.reject(a), c.promise;
                        }
                        function c(c, e) {
                            var f = null;
                            try {
                                f = (a || d)();
                            } catch (g) {
                                return b(g, !1);
                            }
                            return f && x(f.then) ? f.then(function() {
                                return b(c, e);
                            }, function(a) {
                                return b(a, !1);
                            }) : b(c, e);
                        }
                        return this.then(function(a) {
                            return c(a, !0);
                        }, function(a) {
                            return c(a, !1);
                        });
                    }
                }
            };
        }, h = function(b) {
            return b && x(b.then) ? b : {
                then: function(c) {
                    var d = g();
                    return a(function() {
                        d.resolve(c(b));
                    }), d.promise;
                }
            };
        }, i = function(a) {
            var b = g();
            return b.reject(a), b.promise;
        }, j = function(c) {
            return {
                then: function(d, f) {
                    var h = g();
                    return a(function() {
                        try {
                            h.resolve((x(f) ? f : e)(c));
                        } catch (a) {
                            h.reject(a), b(a);
                        }
                    }), h.promise;
                }
            };
        };
        return {
            defer: g,
            reject: i,
            when: function(c, f, j, k) {
                var l, m = g(), n = function(a) {
                    try {
                        return (x(f) ? f : d)(a);
                    } catch (c) {
                        return b(c), i(c);
                    }
                }, o = function(a) {
                    try {
                        return (x(j) ? j : e)(a);
                    } catch (c) {
                        return b(c), i(c);
                    }
                }, p = function(a) {
                    try {
                        return (x(k) ? k : d)(a);
                    } catch (c) {
                        b(c);
                    }
                };
                return a(function() {
                    h(c).then(function(a) {
                        l || (l = !0, m.resolve(h(a).then(n, o, p)));
                    }, function(a) {
                        l || (l = !0, m.resolve(o(a)));
                    }, function(a) {
                        l || m.notify(p(a));
                    });
                }), m.promise;
            },
            all: function(a) {
                var b = g(), c = 0, d = dd(a) ? [] : {};
                return f(a, function(a, e) {
                    c++, h(a).then(function(a) {
                        d.hasOwnProperty(e) || (d[e] = a, --c || b.resolve(d));
                    }, function(a) {
                        d.hasOwnProperty(e) || b.reject(a);
                    });
                }), 0 === c && b.resolve(d), b.promise;
            }
        };
    }
    function lc() {
        this.$get = [ "$window", "$timeout", function(a, b) {
            var c = a.requestAnimationFrame || a.webkitRequestAnimationFrame || a.mozRequestAnimationFrame, d = a.cancelAnimationFrame || a.webkitCancelAnimationFrame || a.mozCancelAnimationFrame || a.webkitCancelRequestAnimationFrame, e = !!c, f = e ? function(a) {
                var b = c(a);
                return function() {
                    d(b);
                };
            } : function(a) {
                var c = b(a, 16.66, !1);
                return function() {
                    b.cancel(c);
                };
            };
            return f.supported = e, f;
        } ];
    }
    function mc() {
        var a = 10, b = d("$rootScope"), c = null;
        this.digestTtl = function(b) {
            return arguments.length && (a = b), a;
        }, this.$get = [ "$injector", "$exceptionHandler", "$parse", "$browser", function(d, g, h, i) {
            function k() {
                this.$id = j(), this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null, 
                this["this"] = this.$root = this, this.$$destroyed = !1, this.$$asyncQueue = [], 
                this.$$postDigestQueue = [], this.$$listeners = {}, this.$$listenerCount = {}, this.$$isolateBindings = {};
            }
            function l(a) {
                if (q.$$phase) throw b("inprog", q.$$phase);
                q.$$phase = a;
            }
            function m(a, b) {
                var c = h(a);
                return W(c, b), c;
            }
            function n(a, b, c) {
                do a.$$listenerCount[c] -= b, 0 === a.$$listenerCount[c] && delete a.$$listenerCount[c]; while (a = a.$parent);
            }
            function p() {}
            k.prototype = {
                constructor: k,
                $new: function(a) {
                    return a ? (a = new k(), a.$root = this.$root, a.$$asyncQueue = this.$$asyncQueue, 
                    a.$$postDigestQueue = this.$$postDigestQueue) : (this.$$childScopeClass || (this.$$childScopeClass = function() {
                        this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null, 
                        this.$$listeners = {}, this.$$listenerCount = {}, this.$id = j(), this.$$childScopeClass = null;
                    }, this.$$childScopeClass.prototype = this), a = new this.$$childScopeClass()), 
                    a["this"] = a, a.$parent = this, a.$$prevSibling = this.$$childTail, this.$$childHead ? this.$$childTail = this.$$childTail.$$nextSibling = a : this.$$childHead = this.$$childTail = a, 
                    a;
                },
                $watch: function(a, b, d) {
                    var e = m(a, "watch"), f = this.$$watchers, g = {
                        fn: b,
                        last: p,
                        get: e,
                        exp: a,
                        eq: !!d
                    };
                    if (c = null, !x(b)) {
                        var h = m(b || o, "listener");
                        g.fn = function(a, b, c) {
                            h(c);
                        };
                    }
                    if ("string" == typeof a && e.constant) {
                        var i = g.fn;
                        g.fn = function(a, b, c) {
                            i.call(this, a, b, c), D(f, g);
                        };
                    }
                    return f || (f = this.$$watchers = []), f.unshift(g), function() {
                        D(f, g), c = null;
                    };
                },
                $watchCollection: function(a, b) {
                    var c, d, f, g = this, i = 1 < b.length, j = 0, k = h(a), l = [], m = {}, n = !0, o = 0;
                    return this.$watch(function() {
                        c = k(g);
                        var a, b, f;
                        if (t(c)) if (e(c)) for (d !== l && (d = l, o = d.length = 0, j++), a = c.length, 
                        o !== a && (j++, d.length = o = a), b = 0; a > b; b++) f = d[b] !== d[b] && c[b] !== c[b], 
                        f || d[b] === c[b] || (j++, d[b] = c[b]); else {
                            d !== m && (d = m = {}, o = 0, j++), a = 0;
                            for (b in c) c.hasOwnProperty(b) && (a++, d.hasOwnProperty(b) ? (f = d[b] !== d[b] && c[b] !== c[b], 
                            f || d[b] === c[b] || (j++, d[b] = c[b])) : (o++, d[b] = c[b], j++));
                            if (o > a) for (b in j++, d) d.hasOwnProperty(b) && !c.hasOwnProperty(b) && (o--, 
                            delete d[b]);
                        } else d !== c && (d = c, j++);
                        return j;
                    }, function() {
                        if (n ? (n = !1, b(c, c, g)) : b(c, f, g), i) if (t(c)) if (e(c)) {
                            f = Array(c.length);
                            for (var a = 0; a < c.length; a++) f[a] = c[a];
                        } else for (a in f = {}, c) Xc.call(c, a) && (f[a] = c[a]); else f = c;
                    });
                },
                $digest: function() {
                    var d, e, f, h, i, j, k, m, n, o, r = this.$$asyncQueue, s = this.$$postDigestQueue, t = a, u = [];
                    l("$digest"), c = null;
                    do {
                        for (j = !1, k = this; r.length; ) {
                            try {
                                o = r.shift(), o.scope.$eval(o.expression);
                            } catch (v) {
                                q.$$phase = null, g(v);
                            }
                            c = null;
                        }
                        a: do {
                            if (h = k.$$watchers) for (i = h.length; i--; ) try {
                                if (d = h[i]) if ((e = d.get(k)) === (f = d.last) || (d.eq ? G(e, f) : "number" == typeof e && "number" == typeof f && isNaN(e) && isNaN(f))) {
                                    if (d === c) {
                                        j = !1;
                                        break a;
                                    }
                                } else j = !0, c = d, d.last = d.eq ? E(e, null) : e, d.fn(e, f === p ? e : f, k), 
                                5 > t && (m = 4 - t, u[m] || (u[m] = []), n = x(d.exp) ? "fn: " + (d.exp.name || d.exp.toString()) : d.exp, 
                                n += "; newVal: " + J(e) + "; oldVal: " + J(f), u[m].push(n));
                            } catch (w) {
                                q.$$phase = null, g(w);
                            }
                            if (!(h = k.$$childHead || k !== this && k.$$nextSibling)) for (;k !== this && !(h = k.$$nextSibling); ) k = k.$parent;
                        } while (k = h);
                        if ((j || r.length) && !t--) throw q.$$phase = null, b("infdig", a, J(u));
                    } while (j || r.length);
                    for (q.$$phase = null; s.length; ) try {
                        s.shift()();
                    } catch (y) {
                        g(y);
                    }
                },
                $destroy: function() {
                    if (!this.$$destroyed) {
                        var a = this.$parent;
                        this.$broadcast("$destroy"), this.$$destroyed = !0, this !== q && (f(this.$$listenerCount, H(null, n, this)), 
                        a.$$childHead == this && (a.$$childHead = this.$$nextSibling), a.$$childTail == this && (a.$$childTail = this.$$prevSibling), 
                        this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling), this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling), 
                        this.$parent = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = this.$root = null, 
                        this.$$listeners = {}, this.$$watchers = this.$$asyncQueue = this.$$postDigestQueue = [], 
                        this.$destroy = this.$digest = this.$apply = o, this.$on = this.$watch = function() {
                            return o;
                        });
                    }
                },
                $eval: function(a, b) {
                    return h(a)(this, b);
                },
                $evalAsync: function(a) {
                    q.$$phase || q.$$asyncQueue.length || i.defer(function() {
                        q.$$asyncQueue.length && q.$digest();
                    }), this.$$asyncQueue.push({
                        scope: this,
                        expression: a
                    });
                },
                $$postDigest: function(a) {
                    this.$$postDigestQueue.push(a);
                },
                $apply: function(a) {
                    try {
                        return l("$apply"), this.$eval(a);
                    } catch (b) {
                        g(b);
                    } finally {
                        q.$$phase = null;
                        try {
                            q.$digest();
                        } catch (c) {
                            throw g(c), c;
                        }
                    }
                },
                $on: function(a, b) {
                    var c = this.$$listeners[a];
                    c || (this.$$listeners[a] = c = []), c.push(b);
                    var d = this;
                    do d.$$listenerCount[a] || (d.$$listenerCount[a] = 0), d.$$listenerCount[a]++; while (d = d.$parent);
                    var e = this;
                    return function() {
                        c[C(c, b)] = null, n(e, 1, a);
                    };
                },
                $emit: function(a) {
                    var b, c, d, e = [], f = this, h = !1, i = {
                        name: a,
                        targetScope: f,
                        stopPropagation: function() {
                            h = !0;
                        },
                        preventDefault: function() {
                            i.defaultPrevented = !0;
                        },
                        defaultPrevented: !1
                    }, j = [ i ].concat(Zc.call(arguments, 1));
                    do {
                        for (b = f.$$listeners[a] || e, i.currentScope = f, c = 0, d = b.length; d > c; c++) if (b[c]) try {
                            b[c].apply(null, j);
                        } catch (k) {
                            g(k);
                        } else b.splice(c, 1), c--, d--;
                        if (h) break;
                        f = f.$parent;
                    } while (f);
                    return i;
                },
                $broadcast: function(a) {
                    for (var b, c, d = this, e = this, f = {
                        name: a,
                        targetScope: this,
                        preventDefault: function() {
                            f.defaultPrevented = !0;
                        },
                        defaultPrevented: !1
                    }, h = [ f ].concat(Zc.call(arguments, 1)); d = e; ) {
                        for (f.currentScope = d, e = d.$$listeners[a] || [], b = 0, c = e.length; c > b; b++) if (e[b]) try {
                            e[b].apply(null, h);
                        } catch (i) {
                            g(i);
                        } else e.splice(b, 1), b--, c--;
                        if (!(e = d.$$listenerCount[a] && d.$$childHead || d !== this && d.$$nextSibling)) for (;d !== this && !(e = d.$$nextSibling); ) d = d.$parent;
                    }
                    return f;
                }
            };
            var q = new k();
            return q;
        } ];
    }
    function nc() {
        var a = /^\s*(https?|ftp|mailto|tel|file):/, b = /^\s*((https?|ftp|file):|data:image\/)/;
        this.aHrefSanitizationWhitelist = function(b) {
            return s(b) ? (a = b, this) : a;
        }, this.imgSrcSanitizationWhitelist = function(a) {
            return s(a) ? (b = a, this) : b;
        }, this.$get = function() {
            return function(c, d) {
                var e, f = d ? b : a;
                return Qc && !(Qc >= 8) || (e = uc(c).href, "" === e || e.match(f)) ? c : "unsafe:" + e;
            };
        };
    }
    function oc(a) {
        if ("self" === a) return a;
        if (u(a)) {
            if (-1 < a.indexOf("***")) throw Vd("iwcard", a);
            return a = a.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08").replace("\\*\\*", ".*").replace("\\*", "[^:/.?&;]*"), 
            RegExp("^" + a + "$");
        }
        if (y(a)) return RegExp("^" + a.source + "$");
        throw Vd("imatcher");
    }
    function pc(a) {
        var b = [];
        return s(a) && f(a, function(a) {
            b.push(oc(a));
        }), b;
    }
    function qc() {
        this.SCE_CONTEXTS = Wd;
        var a = [ "self" ], b = [];
        this.resourceUrlWhitelist = function(b) {
            return arguments.length && (a = pc(b)), a;
        }, this.resourceUrlBlacklist = function(a) {
            return arguments.length && (b = pc(a)), b;
        }, this.$get = [ "$injector", function(d) {
            function e(a) {
                var b = function(a) {
                    this.$$unwrapTrustedValue = function() {
                        return a;
                    };
                };
                return a && (b.prototype = new a()), b.prototype.valueOf = function() {
                    return this.$$unwrapTrustedValue();
                }, b.prototype.toString = function() {
                    return this.$$unwrapTrustedValue().toString();
                }, b;
            }
            var f = function() {
                throw Vd("unsafe");
            };
            d.has("$sanitize") && (f = d.get("$sanitize"));
            var g = e(), h = {};
            return h[Wd.HTML] = e(g), h[Wd.CSS] = e(g), h[Wd.URL] = e(g), h[Wd.JS] = e(g), h[Wd.RESOURCE_URL] = e(h[Wd.URL]), 
            {
                trustAs: function(a, b) {
                    var d = h.hasOwnProperty(a) ? h[a] : null;
                    if (!d) throw Vd("icontext", a, b);
                    if (null === b || b === c || "" === b) return b;
                    if ("string" != typeof b) throw Vd("itype", a);
                    return new d(b);
                },
                getTrusted: function(d, e) {
                    if (null === e || e === c || "" === e) return e;
                    var g = h.hasOwnProperty(d) ? h[d] : null;
                    if (g && e instanceof g) return e.$$unwrapTrustedValue();
                    if (d === Wd.RESOURCE_URL) {
                        var i, j, g = uc(e.toString()), k = !1;
                        for (i = 0, j = a.length; j > i; i++) if ("self" === a[i] ? vc(g) : a[i].exec(g.href)) {
                            k = !0;
                            break;
                        }
                        if (k) for (i = 0, j = b.length; j > i; i++) if ("self" === b[i] ? vc(g) : b[i].exec(g.href)) {
                            k = !1;
                            break;
                        }
                        if (k) return e;
                        throw Vd("insecurl", e.toString());
                    }
                    if (d === Wd.HTML) return f(e);
                    throw Vd("unsafe");
                },
                valueOf: function(a) {
                    return a instanceof g ? a.$$unwrapTrustedValue() : a;
                }
            };
        } ];
    }
    function rc() {
        var a = !0;
        this.enabled = function(b) {
            return arguments.length && (a = !!b), a;
        }, this.$get = [ "$parse", "$sniffer", "$sceDelegate", function(b, c, d) {
            if (a && c.msie && 8 > c.msieDocumentMode) throw Vd("iequirks");
            var e = F(Wd);
            e.isEnabled = function() {
                return a;
            }, e.trustAs = d.trustAs, e.getTrusted = d.getTrusted, e.valueOf = d.valueOf, a || (e.trustAs = e.getTrusted = function(a, b) {
                return b;
            }, e.valueOf = p), e.parseAs = function(a, c) {
                var d = b(c);
                return d.literal && d.constant ? d : function(b, c) {
                    return e.getTrusted(a, d(b, c));
                };
            };
            var g = e.parseAs, h = e.getTrusted, i = e.trustAs;
            return f(Wd, function(a, b) {
                var c = Wc(b);
                e[ab("parse_as_" + c)] = function(b) {
                    return g(a, b);
                }, e[ab("get_trusted_" + c)] = function(b) {
                    return h(a, b);
                }, e[ab("trust_as_" + c)] = function(b) {
                    return i(a, b);
                };
            }), e;
        } ];
    }
    function sc() {
        this.$get = [ "$window", "$document", function(a, b) {
            var c, d = {}, e = m((/android (\d+)/.exec(Wc((a.navigator || {}).userAgent)) || [])[1]), f = /Boxee/i.test((a.navigator || {}).userAgent), g = b[0] || {}, h = g.documentMode, i = /^(Moz|webkit|O|ms)(?=[A-Z])/, j = g.body && g.body.style, k = !1, l = !1;
            if (j) {
                for (var n in j) if (k = i.exec(n)) {
                    c = k[0], c = c.substr(0, 1).toUpperCase() + c.substr(1);
                    break;
                }
                c || (c = "WebkitOpacity" in j && "webkit"), k = !!("transition" in j || c + "Transition" in j), 
                l = !!("animation" in j || c + "Animation" in j), !e || k && l || (k = u(g.body.style.webkitTransition), 
                l = u(g.body.style.webkitAnimation));
            }
            return {
                history: !(!a.history || !a.history.pushState || 4 > e || f),
                hashchange: "onhashchange" in a && (!h || h > 7),
                hasEvent: function(a) {
                    if ("input" == a && 9 == Qc) return !1;
                    if (r(d[a])) {
                        var b = g.createElement("div");
                        d[a] = "on" + a in b;
                    }
                    return d[a];
                },
                csp: fd(),
                vendorPrefix: c,
                transitions: k,
                animations: l,
                android: e,
                msie: Qc,
                msieDocumentMode: h
            };
        } ];
    }
    function tc() {
        this.$get = [ "$rootScope", "$browser", "$q", "$exceptionHandler", function(a, b, c, d) {
            function e(e, g, h) {
                var i = c.defer(), j = i.promise, k = s(h) && !h;
                return g = b.defer(function() {
                    try {
                        i.resolve(e());
                    } catch (b) {
                        i.reject(b), d(b);
                    } finally {
                        delete f[j.$$timeoutId];
                    }
                    k || a.$apply();
                }, g), j.$$timeoutId = g, f[g] = i, j;
            }
            var f = {};
            return e.cancel = function(a) {
                return a && a.$$timeoutId in f ? (f[a.$$timeoutId].reject("canceled"), delete f[a.$$timeoutId], 
                b.defer.cancel(a.$$timeoutId)) : !1;
            }, e;
        } ];
    }
    function uc(a) {
        var b = a;
        return Qc && (Xd.setAttribute("href", b), b = Xd.href), Xd.setAttribute("href", b), 
        {
            href: Xd.href,
            protocol: Xd.protocol ? Xd.protocol.replace(/:$/, "") : "",
            host: Xd.host,
            search: Xd.search ? Xd.search.replace(/^\?/, "") : "",
            hash: Xd.hash ? Xd.hash.replace(/^#/, "") : "",
            hostname: Xd.hostname,
            port: Xd.port,
            pathname: "/" === Xd.pathname.charAt(0) ? Xd.pathname : "/" + Xd.pathname
        };
    }
    function vc(a) {
        return a = u(a) ? uc(a) : a, a.protocol === Yd.protocol && a.host === Yd.host;
    }
    function wc() {
        this.$get = q(a);
    }
    function xc(a) {
        function b(d, e) {
            if (t(d)) {
                var g = {};
                return f(d, function(a, c) {
                    g[c] = b(c, a);
                }), g;
            }
            return a.factory(d + c, e);
        }
        var c = "Filter";
        this.register = b, this.$get = [ "$injector", function(a) {
            return function(b) {
                return a.get(b + c);
            };
        } ], b("currency", zc), b("date", Fc), b("filter", yc), b("json", Gc), b("limitTo", Hc), 
        b("lowercase", be), b("number", Ac), b("orderBy", Ic), b("uppercase", ce);
    }
    function yc() {
        return function(a, b, c) {
            if (!dd(a)) return a;
            var d = typeof c, e = [];
            e.check = function(a) {
                for (var b = 0; b < e.length; b++) if (!e[b](a)) return !1;
                return !0;
            }, "function" !== d && (c = "boolean" === d && c ? function(a, b) {
                return bd.equals(a, b);
            } : function(a, b) {
                if (a && b && "object" == typeof a && "object" == typeof b) {
                    for (var d in a) if ("$" !== d.charAt(0) && Xc.call(a, d) && c(a[d], b[d])) return !0;
                    return !1;
                }
                return b = ("" + b).toLowerCase(), -1 < ("" + a).toLowerCase().indexOf(b);
            });
            var f = function(a, b) {
                if ("string" == typeof b && "!" === b.charAt(0)) return !f(a, b.substr(1));
                switch (typeof a) {
                  case "boolean":
                  case "number":
                  case "string":
                    return c(a, b);

                  case "object":
                    switch (typeof b) {
                      case "object":
                        return c(a, b);

                      default:
                        for (var d in a) if ("$" !== d.charAt(0) && f(a[d], b)) return !0;
                    }
                    return !1;

                  case "array":
                    for (d = 0; d < a.length; d++) if (f(a[d], b)) return !0;
                    return !1;

                  default:
                    return !1;
                }
            };
            switch (typeof b) {
              case "boolean":
              case "number":
              case "string":
                b = {
                    $: b
                };

              case "object":
                for (var g in b) (function(a) {
                    "undefined" != typeof b[a] && e.push(function(c) {
                        return f("$" == a ? c : c && c[a], b[a]);
                    });
                })(g);
                break;

              case "function":
                e.push(b);
                break;

              default:
                return a;
            }
            for (d = [], g = 0; g < a.length; g++) {
                var h = a[g];
                e.check(h) && d.push(h);
            }
            return d;
        };
    }
    function zc(a) {
        var b = a.NUMBER_FORMATS;
        return function(a, c) {
            return r(c) && (c = b.CURRENCY_SYM), Bc(a, b.PATTERNS[1], b.GROUP_SEP, b.DECIMAL_SEP, 2).replace(/\u00A4/g, c);
        };
    }
    function Ac(a) {
        var b = a.NUMBER_FORMATS;
        return function(a, c) {
            return Bc(a, b.PATTERNS[0], b.GROUP_SEP, b.DECIMAL_SEP, c);
        };
    }
    function Bc(a, b, c, d, e) {
        if (null == a || !isFinite(a) || t(a)) return "";
        var f = 0 > a;
        a = Math.abs(a);
        var g = a + "", h = "", i = [], j = !1;
        if (-1 !== g.indexOf("e")) {
            var k = g.match(/([\d\.]+)e(-?)(\d+)/);
            k && "-" == k[2] && k[3] > e + 1 ? (g = "0", a = 0) : (h = g, j = !0);
        }
        if (j) e > 0 && a > -1 && 1 > a && (h = a.toFixed(e)); else {
            g = (g.split(Zd)[1] || "").length, r(e) && (e = Math.min(Math.max(b.minFrac, g), b.maxFrac)), 
            a = +(Math.round(+(a.toString() + "e" + e)).toString() + "e" + -e), a = ("" + a).split(Zd), 
            g = a[0], a = a[1] || "";
            var k = 0, l = b.lgSize, m = b.gSize;
            if (g.length >= l + m) for (k = g.length - l, j = 0; k > j; j++) 0 === (k - j) % m && 0 !== j && (h += c), 
            h += g.charAt(j);
            for (j = k; j < g.length; j++) 0 === (g.length - j) % l && 0 !== j && (h += c), 
            h += g.charAt(j);
            for (;a.length < e; ) a += "0";
            e && "0" !== e && (h += d + a.substr(0, e));
        }
        return i.push(f ? b.negPre : b.posPre), i.push(h), i.push(f ? b.negSuf : b.posSuf), 
        i.join("");
    }
    function Cc(a, b, c) {
        var d = "";
        for (0 > a && (d = "-", a = -a), a = "" + a; a.length < b; ) a = "0" + a;
        return c && (a = a.substr(a.length - b)), d + a;
    }
    function Dc(a, b, c, d) {
        return c = c || 0, function(e) {
            return e = e["get" + a](), (c > 0 || e > -c) && (e += c), 0 === e && -12 == c && (e = 12), 
            Cc(e, b, d);
        };
    }
    function Ec(a, b) {
        return function(c, d) {
            var e = c["get" + a](), f = Yc(b ? "SHORT" + a : a);
            return d[f][e];
        };
    }
    function Fc(a) {
        function b(a) {
            var b;
            if (b = a.match(c)) {
                a = new Date(0);
                var d = 0, e = 0, f = b[8] ? a.setUTCFullYear : a.setFullYear, g = b[8] ? a.setUTCHours : a.setHours;
                b[9] && (d = m(b[9] + b[10]), e = m(b[9] + b[11])), f.call(a, m(b[1]), m(b[2]) - 1, m(b[3])), 
                d = m(b[4] || 0) - d, e = m(b[5] || 0) - e, f = m(b[6] || 0), b = Math.round(1e3 * parseFloat("0." + (b[7] || 0))), 
                g.call(a, d, e, f, b);
            }
            return a;
        }
        var c = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
        return function(c, d) {
            var e, g, h = "", i = [];
            if (d = d || "mediumDate", d = a.DATETIME_FORMATS[d] || d, u(c) && (c = ae.test(c) ? m(c) : b(c)), 
            v(c) && (c = new Date(c)), !w(c)) return c;
            for (;d; ) (g = _d.exec(d)) ? (i = i.concat(Zc.call(g, 1)), d = i.pop()) : (i.push(d), 
            d = null);
            return f(i, function(b) {
                e = $d[b], h += e ? e(c, a.DATETIME_FORMATS) : b.replace(/(^'|'$)/g, "").replace(/''/g, "'");
            }), h;
        };
    }
    function Gc() {
        return function(a) {
            return J(a, !0);
        };
    }
    function Hc() {
        return function(a, b) {
            if (!dd(a) && !u(a)) return a;
            if (b = 1 / 0 === Math.abs(Number(b)) ? Number(b) : m(b), u(a)) return b ? b >= 0 ? a.slice(0, b) : a.slice(b, a.length) : "";
            var c, d, e = [];
            for (b > a.length ? b = a.length : b < -a.length && (b = -a.length), b > 0 ? (c = 0, 
            d = b) : (c = a.length + b, d = a.length); d > c; c++) e.push(a[c]);
            return e;
        };
    }
    function Ic(a) {
        return function(b, c, d) {
            function e(a, b) {
                return L(b) ? function(b, c) {
                    return a(c, b);
                } : a;
            }
            function f(a, b) {
                var c = typeof a, d = typeof b;
                return c == d ? (w(a) && w(b) && (a = a.valueOf(), b = b.valueOf()), "string" == c && (a = a.toLowerCase(), 
                b = b.toLowerCase()), a === b ? 0 : b > a ? -1 : 1) : d > c ? -1 : 1;
            }
            if (!dd(b) || !c) return b;
            c = dd(c) ? c : [ c ], c = B(c, function(b) {
                var c = !1, d = b || p;
                if (u(b) && (("+" == b.charAt(0) || "-" == b.charAt(0)) && (c = "-" == b.charAt(0), 
                b = b.substring(1)), d = a(b), d.constant)) {
                    var g = d();
                    return e(function(a, b) {
                        return f(a[g], b[g]);
                    }, c);
                }
                return e(function(a, b) {
                    return f(d(a), d(b));
                }, c);
            });
            for (var g = [], h = 0; h < b.length; h++) g.push(b[h]);
            return g.sort(e(function(a, b) {
                for (var d = 0; d < c.length; d++) {
                    var e = c[d](a, b);
                    if (0 !== e) return e;
                }
                return 0;
            }, d));
        };
    }
    function Jc(a) {
        return x(a) && (a = {
            link: a
        }), a.restrict = a.restrict || "AC", q(a);
    }
    function Kc(a, b, c, d) {
        function e(b, c) {
            c = c ? "-" + U(c, "-") : "", d.removeClass(a, (b ? qe : pe) + c), d.addClass(a, (b ? pe : qe) + c);
        }
        var g = this, h = a.parent().controller("form") || fe, i = 0, j = g.$error = {}, k = [];
        g.$name = b.name || b.ngForm, g.$dirty = !1, g.$pristine = !0, g.$valid = !0, g.$invalid = !1, 
        h.$addControl(g), a.addClass(re), e(!0), g.$addControl = function(a) {
            X(a.$name, "input"), k.push(a), a.$name && (g[a.$name] = a);
        }, g.$removeControl = function(a) {
            a.$name && g[a.$name] === a && delete g[a.$name], f(j, function(b, c) {
                g.$setValidity(c, !0, a);
            }), D(k, a);
        }, g.$setValidity = function(a, b, c) {
            var d = j[a];
            if (b) d && (D(d, c), d.length || (i--, i || (e(b), g.$valid = !0, g.$invalid = !1), 
            j[a] = !1, e(!0, a), h.$setValidity(a, !0, g))); else {
                if (i || e(b), d) {
                    if (-1 != C(d, c)) return;
                } else j[a] = d = [], i++, e(!1, a), h.$setValidity(a, !1, g);
                d.push(c), g.$valid = !1, g.$invalid = !0;
            }
        }, g.$setDirty = function() {
            d.removeClass(a, re), d.addClass(a, se), g.$dirty = !0, g.$pristine = !1, h.$setDirty();
        }, g.$setPristine = function() {
            d.removeClass(a, se), d.addClass(a, re), g.$dirty = !1, g.$pristine = !0, f(k, function(a) {
                a.$setPristine();
            });
        };
    }
    function Lc(a, b, d, e) {
        return a.$setValidity(b, d), d ? e : c;
    }
    function Mc(a, b) {
        var c, d;
        if (b) for (c = 0; c < b.length; ++c) if (d = b[c], a[d]) return !0;
        return !1;
    }
    function Nc(a, b, c, d, e) {
        t(e) && (a.$$hasNativeValidators = !0, a.$parsers.push(function(f) {
            return a.$error[b] || Mc(e, d) || !Mc(e, c) ? f : void a.$setValidity(b, !1);
        }));
    }
    function Oc(a, b, c, e, f, g) {
        var h = b.prop(Vc), i = b[0].placeholder, j = {}, k = Wc(b[0].type);
        if (e.$$validityState = h, !f.android) {
            var l = !1;
            b.on("compositionstart", function() {
                l = !0;
            }), b.on("compositionend", function() {
                l = !1, n();
            });
        }
        var n = function(d) {
            if (!l) {
                var f = b.val();
                Qc && "input" === (d || j).type && b[0].placeholder !== i ? i = b[0].placeholder : ("password" !== k && L(c.ngTrim || "T") && (f = ed(f)), 
                d = h && e.$$hasNativeValidators, (e.$viewValue !== f || "" === f && d) && (a.$$phase ? e.$setViewValue(f) : a.$apply(function() {
                    e.$setViewValue(f);
                })));
            }
        };
        if (f.hasEvent("input")) b.on("input", n); else {
            var o, p = function() {
                o || (o = g.defer(function() {
                    n(), o = null;
                }));
            };
            b.on("keydown", function(a) {
                a = a.keyCode, 91 === a || a > 15 && 19 > a || a >= 37 && 40 >= a || p();
            }), f.hasEvent("paste") && b.on("paste cut", p);
        }
        b.on("change", n), e.$render = function() {
            b.val(e.$isEmpty(e.$viewValue) ? "" : e.$viewValue);
        };
        var q = c.ngPattern;
        if (q && ((f = q.match(/^\/(.*)\/([gim]*)$/)) ? (q = RegExp(f[1], f[2]), f = function(a) {
            return Lc(e, "pattern", e.$isEmpty(a) || q.test(a), a);
        }) : f = function(c) {
            var f = a.$eval(q);
            if (!f || !f.test) throw d("ngPattern")("noregexp", q, f, M(b));
            return Lc(e, "pattern", e.$isEmpty(c) || f.test(c), c);
        }, e.$formatters.push(f), e.$parsers.push(f)), c.ngMinlength) {
            var r = m(c.ngMinlength);
            f = function(a) {
                return Lc(e, "minlength", e.$isEmpty(a) || a.length >= r, a);
            }, e.$parsers.push(f), e.$formatters.push(f);
        }
        if (c.ngMaxlength) {
            var s = m(c.ngMaxlength);
            f = function(a) {
                return Lc(e, "maxlength", e.$isEmpty(a) || a.length <= s, a);
            }, e.$parsers.push(f), e.$formatters.push(f);
        }
    }
    function Pc(a, b) {
        return a = "ngClass" + a, [ "$animate", function(c) {
            function d(a, b) {
                var c = [], d = 0;
                a: for (;d < a.length; d++) {
                    for (var e = a[d], f = 0; f < b.length; f++) if (e == b[f]) continue a;
                    c.push(e);
                }
                return c;
            }
            function e(a) {
                if (!dd(a)) {
                    if (u(a)) return a.split(" ");
                    if (t(a)) {
                        var b = [];
                        return f(a, function(a, c) {
                            a && (b = b.concat(c.split(" ")));
                        }), b;
                    }
                }
                return a;
            }
            return {
                restrict: "AC",
                link: function(g, h, i) {
                    function j(a, b) {
                        var c = h.data("$classCounts") || {}, d = [];
                        return f(a, function(a) {
                            (b > 0 || c[a]) && (c[a] = (c[a] || 0) + b, c[a] === +(b > 0) && d.push(a));
                        }), h.data("$classCounts", c), d.join(" ");
                    }
                    function k(a) {
                        if (!0 === b || g.$index % 2 === b) {
                            var f = e(a || []);
                            if (l) {
                                if (!G(a, l)) {
                                    var k = e(l), m = d(f, k), f = d(k, f), f = j(f, -1), m = j(m, 1);
                                    0 === m.length ? c.removeClass(h, f) : 0 === f.length ? c.addClass(h, m) : c.setClass(h, m, f);
                                }
                            } else {
                                var m = j(f, 1);
                                i.$addClass(m);
                            }
                        }
                        l = F(a);
                    }
                    var l;
                    g.$watch(i[a], k, !0), i.$observe("class", function() {
                        k(g.$eval(i[a]));
                    }), "ngClass" !== a && g.$watch("$index", function(c, d) {
                        var f = 1 & c;
                        if (f !== (1 & d)) {
                            var h = e(g.$eval(i[a]));
                            f === b ? (f = j(h, 1), i.$addClass(f)) : (f = j(h, -1), i.$removeClass(f));
                        }
                    });
                }
            };
        } ];
    }
    var Qc, Rc, Sc, Tc, Uc, Vc = "validity", Wc = function(a) {
        return u(a) ? a.toLowerCase() : a;
    }, Xc = Object.prototype.hasOwnProperty, Yc = function(a) {
        return u(a) ? a.toUpperCase() : a;
    }, Zc = [].slice, $c = [].push, _c = Object.prototype.toString, ad = d("ng"), bd = a.angular || (a.angular = {}), cd = [ "0", "0", "0" ];
    Qc = m((/msie (\d+)/.exec(Wc(navigator.userAgent)) || [])[1]), isNaN(Qc) && (Qc = m((/trident\/.*; rv:(\d+)/.exec(Wc(navigator.userAgent)) || [])[1])), 
    o.$inject = [], p.$inject = [];
    var dd = function() {
        return x(Array.isArray) ? Array.isArray : function(a) {
            return "[object Array]" === _c.call(a);
        };
    }(), ed = function() {
        return String.prototype.trim ? function(a) {
            return u(a) ? a.trim() : a;
        } : function(a) {
            return u(a) ? a.replace(/^\s\s*/, "").replace(/\s\s*$/, "") : a;
        };
    }();
    Uc = 9 > Qc ? function(a) {
        return a = a.nodeName ? a : a[0], a.scopeName && "HTML" != a.scopeName ? Yc(a.scopeName + ":" + a.nodeName) : a.nodeName;
    } : function(a) {
        return a.nodeName ? a.nodeName : a[0].nodeName;
    };
    var fd = function() {
        if (s(fd.isActive_)) return fd.isActive_;
        var a = !(!b.querySelector("[ng-csp]") && !b.querySelector("[data-ng-csp]"));
        if (!a) try {
            new Function("");
        } catch (c) {
            a = !0;
        }
        return fd.isActive_ = a;
    }, gd = /[A-Z]/g, hd = {
        full: "1.2.23",
        major: 1,
        minor: 2,
        dot: 23,
        codeName: "superficial-malady"
    };
    cb.expando = "ng339";
    var id = cb.cache = {}, jd = 1, kd = a.document.addEventListener ? function(a, b, c) {
        a.addEventListener(b, c, !1);
    } : function(a, b, c) {
        a.attachEvent("on" + b, c);
    }, ld = a.document.removeEventListener ? function(a, b, c) {
        a.removeEventListener(b, c, !1);
    } : function(a, b, c) {
        a.detachEvent("on" + b, c);
    };
    cb._data = function(a) {
        return this.cache[a[this.expando]] || {};
    };
    var md = /([\:\-\_]+(.))/g, nd = /^moz([A-Z])/, od = d("jqLite"), pd = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, qd = /<|&#?\w+;/, rd = /<([\w:]+)/, sd = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, td = {
        option: [ 1, '<select multiple="multiple">', "</select>" ],
        thead: [ 1, "<table>", "</table>" ],
        col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
        tr: [ 2, "<table><tbody>", "</tbody></table>" ],
        td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
        _default: [ 0, "", "" ]
    };
    td.optgroup = td.option, td.tbody = td.tfoot = td.colgroup = td.caption = td.thead, 
    td.th = td.td;
    var ud = cb.prototype = {
        ready: function(c) {
            function d() {
                e || (e = !0, c());
            }
            var e = !1;
            "complete" === b.readyState ? setTimeout(d) : (this.on("DOMContentLoaded", d), cb(a).on("load", d));
        },
        toString: function() {
            var a = [];
            return f(this, function(b) {
                a.push("" + b);
            }), "[" + a.join(", ") + "]";
        },
        eq: function(a) {
            return Rc(a >= 0 ? this[a] : this[this.length + a]);
        },
        length: 0,
        push: $c,
        sort: [].sort,
        splice: [].splice
    }, vd = {};
    f("multiple selected checked disabled readOnly required open".split(" "), function(a) {
        vd[Wc(a)] = a;
    });
    var wd = {};
    f("input select option textarea button form details".split(" "), function(a) {
        wd[Yc(a)] = !0;
    }), f({
        data: ib,
        removeData: gb
    }, function(a, b) {
        cb[b] = a;
    }), f({
        data: ib,
        inheritedData: ob,
        scope: function(a) {
            return Rc.data(a, "$scope") || ob(a.parentNode || a, [ "$isolateScope", "$scope" ]);
        },
        isolateScope: function(a) {
            return Rc.data(a, "$isolateScope") || Rc.data(a, "$isolateScopeNoTemplate");
        },
        controller: nb,
        injector: function(a) {
            return ob(a, "$injector");
        },
        removeAttr: function(a, b) {
            a.removeAttribute(b);
        },
        hasClass: jb,
        css: function(a, b, d) {
            if (b = ab(b), !s(d)) {
                var e;
                return 8 >= Qc && (e = a.currentStyle && a.currentStyle[b], "" === e && (e = "auto")), 
                e = e || a.style[b], 8 >= Qc && (e = "" === e ? c : e), e;
            }
            a.style[b] = d;
        },
        attr: function(a, b, d) {
            var e = Wc(b);
            if (vd[e]) {
                if (!s(d)) return a[b] || (a.attributes.getNamedItem(b) || o).specified ? e : c;
                d ? (a[b] = !0, a.setAttribute(b, e)) : (a[b] = !1, a.removeAttribute(e));
            } else if (s(d)) a.setAttribute(b, d); else if (a.getAttribute) return a = a.getAttribute(b, 2), 
            null === a ? c : a;
        },
        prop: function(a, b, c) {
            return s(c) ? void (a[b] = c) : a[b];
        },
        text: function() {
            function a(a, c) {
                var d = b[a.nodeType];
                return r(c) ? d ? a[d] : "" : void (a[d] = c);
            }
            var b = [];
            return 9 > Qc ? (b[1] = "innerText", b[3] = "nodeValue") : b[1] = b[3] = "textContent", 
            a.$dv = "", a;
        }(),
        val: function(a, b) {
            if (r(b)) {
                if ("SELECT" === Uc(a) && a.multiple) {
                    var c = [];
                    return f(a.options, function(a) {
                        a.selected && c.push(a.value || a.text);
                    }), 0 === c.length ? null : c;
                }
                return a.value;
            }
            a.value = b;
        },
        html: function(a, b) {
            if (r(b)) return a.innerHTML;
            for (var c = 0, d = a.childNodes; c < d.length; c++) eb(d[c]);
            a.innerHTML = b;
        },
        empty: pb
    }, function(a, b) {
        cb.prototype[b] = function(b, d) {
            var e, f, g = this.length;
            if (a !== pb && (2 == a.length && a !== jb && a !== nb ? b : d) === c) {
                if (t(b)) {
                    for (e = 0; g > e; e++) if (a === ib) a(this[e], b); else for (f in b) a(this[e], f, b[f]);
                    return this;
                }
                for (e = a.$dv, g = e === c ? Math.min(g, 1) : g, f = 0; g > f; f++) {
                    var h = a(this[f], b, d);
                    e = e ? e + h : h;
                }
                return e;
            }
            for (e = 0; g > e; e++) a(this[e], b, d);
            return this;
        };
    }), f({
        removeData: gb,
        dealoc: eb,
        on: function bf(a, c, d, e) {
            if (s(e)) throw od("onargs");
            var g = hb(a, "events"), h = hb(a, "handle");
            g || hb(a, "events", g = {}), h || hb(a, "handle", h = rb(a, g)), f(c.split(" "), function(c) {
                var e = g[c];
                if (!e) {
                    if ("mouseenter" == c || "mouseleave" == c) {
                        var f = b.body.contains || b.body.compareDocumentPosition ? function(a, b) {
                            var c = 9 === a.nodeType ? a.documentElement : a, d = b && b.parentNode;
                            return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
                        } : function(a, b) {
                            if (b) for (;b = b.parentNode; ) if (b === a) return !0;
                            return !1;
                        };
                        g[c] = [], bf(a, {
                            mouseleave: "mouseout",
                            mouseenter: "mouseover"
                        }[c], function(a) {
                            var b = a.relatedTarget;
                            b && (b === this || f(this, b)) || h(a, c);
                        });
                    } else kd(a, c, h), g[c] = [];
                    e = g[c];
                }
                e.push(d);
            });
        },
        off: fb,
        one: function(a, b, c) {
            a = Rc(a), a.on(b, function d() {
                a.off(b, c), a.off(b, d);
            }), a.on(b, c);
        },
        replaceWith: function(a, b) {
            var c, d = a.parentNode;
            eb(a), f(new cb(b), function(b) {
                c ? d.insertBefore(b, c.nextSibling) : d.replaceChild(b, a), c = b;
            });
        },
        children: function(a) {
            var b = [];
            return f(a.childNodes, function(a) {
                1 === a.nodeType && b.push(a);
            }), b;
        },
        contents: function(a) {
            return a.contentDocument || a.childNodes || [];
        },
        append: function(a, b) {
            f(new cb(b), function(b) {
                1 !== a.nodeType && 11 !== a.nodeType || a.appendChild(b);
            });
        },
        prepend: function(a, b) {
            if (1 === a.nodeType) {
                var c = a.firstChild;
                f(new cb(b), function(b) {
                    a.insertBefore(b, c);
                });
            }
        },
        wrap: function(a, b) {
            b = Rc(b)[0];
            var c = a.parentNode;
            c && c.replaceChild(b, a), b.appendChild(a);
        },
        remove: function(a) {
            eb(a);
            var b = a.parentNode;
            b && b.removeChild(a);
        },
        after: function(a, b) {
            var c = a, d = a.parentNode;
            f(new cb(b), function(a) {
                d.insertBefore(a, c.nextSibling), c = a;
            });
        },
        addClass: lb,
        removeClass: kb,
        toggleClass: function(a, b, c) {
            b && f(b.split(" "), function(b) {
                var d = c;
                r(d) && (d = !jb(a, b)), (d ? lb : kb)(a, b);
            });
        },
        parent: function(a) {
            return (a = a.parentNode) && 11 !== a.nodeType ? a : null;
        },
        next: function(a) {
            if (a.nextElementSibling) return a.nextElementSibling;
            for (a = a.nextSibling; null != a && 1 !== a.nodeType; ) a = a.nextSibling;
            return a;
        },
        find: function(a, b) {
            return a.getElementsByTagName ? a.getElementsByTagName(b) : [];
        },
        clone: db,
        triggerHandler: function(a, b, c) {
            var d, e;
            d = b.type || b;
            var g = (hb(a, "events") || {})[d];
            g && (d = {
                preventDefault: function() {
                    this.defaultPrevented = !0;
                },
                isDefaultPrevented: function() {
                    return !0 === this.defaultPrevented;
                },
                stopPropagation: o,
                type: d,
                target: a
            }, b.type && (d = l(d, b)), b = F(g), e = c ? [ d ].concat(c) : [ d ], f(b, function(b) {
                b.apply(a, e);
            }));
        }
    }, function(a, b) {
        cb.prototype[b] = function(b, c, d) {
            for (var e, f = 0; f < this.length; f++) r(e) ? (e = a(this[f], b, c, d), s(e) && (e = Rc(e))) : mb(e, a(this[f], b, c, d));
            return s(e) ? e : this;
        }, cb.prototype.bind = cb.prototype.on, cb.prototype.unbind = cb.prototype.off;
    }), tb.prototype = {
        put: function(a, b) {
            this[sb(a, this.nextUid)] = b;
        },
        get: function(a) {
            return this[sb(a, this.nextUid)];
        },
        remove: function(a) {
            var b = this[a = sb(a, this.nextUid)];
            return delete this[a], b;
        }
    };
    var xd = /^function\s*[^\(]*\(\s*([^\)]*)\)/m, yd = /,/, zd = /^\s*(_?)(\S+?)\1\s*$/, Ad = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm, Bd = d("$injector"), Cd = d("$animate"), Dd = [ "$provide", function(a) {
        this.$$selectors = {}, this.register = function(b, c) {
            var d = b + "-animation";
            if (b && "." != b.charAt(0)) throw Cd("notcsel", b);
            this.$$selectors[b.substr(1)] = d, a.factory(d, c);
        }, this.classNameFilter = function(a) {
            return 1 === arguments.length && (this.$$classNameFilter = a instanceof RegExp ? a : null), 
            this.$$classNameFilter;
        }, this.$get = [ "$timeout", "$$asyncCallback", function(a, b) {
            return {
                enter: function(a, c, d, e) {
                    d ? d.after(a) : (c && c[0] || (c = d.parent()), c.append(a)), e && b(e);
                },
                leave: function(a, c) {
                    a.remove(), c && b(c);
                },
                move: function(a, b, c, d) {
                    this.enter(a, b, c, d);
                },
                addClass: function(a, c, d) {
                    c = u(c) ? c : dd(c) ? c.join(" ") : "", f(a, function(a) {
                        lb(a, c);
                    }), d && b(d);
                },
                removeClass: function(a, c, d) {
                    c = u(c) ? c : dd(c) ? c.join(" ") : "", f(a, function(a) {
                        kb(a, c);
                    }), d && b(d);
                },
                setClass: function(a, c, d, e) {
                    f(a, function(a) {
                        lb(a, c), kb(a, d);
                    }), e && b(e);
                },
                enabled: o
            };
        } ];
    } ], Ed = d("$compile");
    Cb.$inject = [ "$provide", "$$sanitizeUriProvider" ];
    var Fd = /^(x[\:\-_]|data[\:\-_])/i, Gd = d("$interpolate"), Hd = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/, Id = {
        http: 80,
        https: 443,
        ftp: 21
    }, Jd = d("$location");
    $b.prototype = Zb.prototype = Yb.prototype = {
        $$html5: !1,
        $$replace: !1,
        absUrl: _b("$$absUrl"),
        url: function(a, b) {
            if (r(a)) return this.$$url;
            var c = Hd.exec(a);
            return c[1] && this.path(decodeURIComponent(c[1])), (c[2] || c[1]) && this.search(c[3] || ""), 
            this.hash(c[5] || "", b), this;
        },
        protocol: _b("$$protocol"),
        host: _b("$$host"),
        port: _b("$$port"),
        path: ac("$$path", function(a) {
            return "/" == a.charAt(0) ? a : "/" + a;
        }),
        search: function(a, b) {
            switch (arguments.length) {
              case 0:
                return this.$$search;

              case 1:
                if (u(a)) this.$$search = O(a); else {
                    if (!t(a)) throw Jd("isrcharg");
                    f(a, function(b, c) {
                        null == b && delete a[c];
                    }), this.$$search = a;
                }
                break;

              default:
                r(b) || null === b ? delete this.$$search[a] : this.$$search[a] = b;
            }
            return this.$$compose(), this;
        },
        hash: ac("$$hash", p),
        replace: function() {
            return this.$$replace = !0, this;
        }
    };
    var Kd, Ld = d("$parse"), Md = {}, Nd = Function.prototype.call, Od = Function.prototype.apply, Pd = Function.prototype.bind, Qd = {
        "null": function() {
            return null;
        },
        "true": function() {
            return !0;
        },
        "false": function() {
            return !1;
        },
        undefined: o,
        "+": function(a, b, d, e) {
            return d = d(a, b), e = e(a, b), s(d) ? s(e) ? d + e : d : s(e) ? e : c;
        },
        "-": function(a, b, c, d) {
            return c = c(a, b), d = d(a, b), (s(c) ? c : 0) - (s(d) ? d : 0);
        },
        "*": function(a, b, c, d) {
            return c(a, b) * d(a, b);
        },
        "/": function(a, b, c, d) {
            return c(a, b) / d(a, b);
        },
        "%": function(a, b, c, d) {
            return c(a, b) % d(a, b);
        },
        "^": function(a, b, c, d) {
            return c(a, b) ^ d(a, b);
        },
        "=": o,
        "===": function(a, b, c, d) {
            return c(a, b) === d(a, b);
        },
        "!==": function(a, b, c, d) {
            return c(a, b) !== d(a, b);
        },
        "==": function(a, b, c, d) {
            return c(a, b) == d(a, b);
        },
        "!=": function(a, b, c, d) {
            return c(a, b) != d(a, b);
        },
        "<": function(a, b, c, d) {
            return c(a, b) < d(a, b);
        },
        ">": function(a, b, c, d) {
            return c(a, b) > d(a, b);
        },
        "<=": function(a, b, c, d) {
            return c(a, b) <= d(a, b);
        },
        ">=": function(a, b, c, d) {
            return c(a, b) >= d(a, b);
        },
        "&&": function(a, b, c, d) {
            return c(a, b) && d(a, b);
        },
        "||": function(a, b, c, d) {
            return c(a, b) || d(a, b);
        },
        "&": function(a, b, c, d) {
            return c(a, b) & d(a, b);
        },
        "|": function(a, b, c, d) {
            return d(a, b)(a, b, c(a, b));
        },
        "!": function(a, b, c) {
            return !c(a, b);
        }
    }, Rd = {
        n: "\n",
        f: "\f",
        r: "\r",
        t: "	",
        v: "",
        "'": "'",
        '"': '"'
    }, Sd = function(a) {
        this.options = a;
    };
    Sd.prototype = {
        constructor: Sd,
        lex: function(a) {
            for (this.text = a, this.index = 0, this.ch = c, this.lastCh = ":", this.tokens = []; this.index < this.text.length; ) {
                if (this.ch = this.text.charAt(this.index), this.is("\"'")) this.readString(this.ch); else if (this.isNumber(this.ch) || this.is(".") && this.isNumber(this.peek())) this.readNumber(); else if (this.isIdent(this.ch)) this.readIdent(); else if (this.is("(){}[].,;:?")) this.tokens.push({
                    index: this.index,
                    text: this.ch
                }), this.index++; else {
                    if (this.isWhitespace(this.ch)) {
                        this.index++;
                        continue;
                    }
                    a = this.ch + this.peek();
                    var b = a + this.peek(2), d = Qd[this.ch], e = Qd[a], f = Qd[b];
                    f ? (this.tokens.push({
                        index: this.index,
                        text: b,
                        fn: f
                    }), this.index += 3) : e ? (this.tokens.push({
                        index: this.index,
                        text: a,
                        fn: e
                    }), this.index += 2) : d ? (this.tokens.push({
                        index: this.index,
                        text: this.ch,
                        fn: d
                    }), this.index += 1) : this.throwError("Unexpected next character ", this.index, this.index + 1);
                }
                this.lastCh = this.ch;
            }
            return this.tokens;
        },
        is: function(a) {
            return -1 !== a.indexOf(this.ch);
        },
        was: function(a) {
            return -1 !== a.indexOf(this.lastCh);
        },
        peek: function(a) {
            return a = a || 1, this.index + a < this.text.length ? this.text.charAt(this.index + a) : !1;
        },
        isNumber: function(a) {
            return a >= "0" && "9" >= a;
        },
        isWhitespace: function(a) {
            return " " === a || "\r" === a || "	" === a || "\n" === a || "" === a || " " === a;
        },
        isIdent: function(a) {
            return a >= "a" && "z" >= a || a >= "A" && "Z" >= a || "_" === a || "$" === a;
        },
        isExpOperator: function(a) {
            return "-" === a || "+" === a || this.isNumber(a);
        },
        throwError: function(a, b, c) {
            throw c = c || this.index, b = s(b) ? "s " + b + "-" + this.index + " [" + this.text.substring(b, c) + "]" : " " + c, 
            Ld("lexerr", a, b, this.text);
        },
        readNumber: function() {
            for (var a = "", b = this.index; this.index < this.text.length; ) {
                var c = Wc(this.text.charAt(this.index));
                if ("." == c || this.isNumber(c)) a += c; else {
                    var d = this.peek();
                    if ("e" == c && this.isExpOperator(d)) a += c; else if (this.isExpOperator(c) && d && this.isNumber(d) && "e" == a.charAt(a.length - 1)) a += c; else {
                        if (!this.isExpOperator(c) || d && this.isNumber(d) || "e" != a.charAt(a.length - 1)) break;
                        this.throwError("Invalid exponent");
                    }
                }
                this.index++;
            }
            a *= 1, this.tokens.push({
                index: b,
                text: a,
                literal: !0,
                constant: !0,
                fn: function() {
                    return a;
                }
            });
        },
        readIdent: function() {
            for (var a, b, c, d, e = this, f = "", g = this.index; this.index < this.text.length && (d = this.text.charAt(this.index), 
            "." === d || this.isIdent(d) || this.isNumber(d)); ) "." === d && (a = this.index), 
            f += d, this.index++;
            if (a) for (b = this.index; b < this.text.length; ) {
                if (d = this.text.charAt(b), "(" === d) {
                    c = f.substr(a - g + 1), f = f.substr(0, a - g), this.index = b;
                    break;
                }
                if (!this.isWhitespace(d)) break;
                b++;
            }
            if (g = {
                index: g,
                text: f
            }, Qd.hasOwnProperty(f)) g.fn = Qd[f], g.literal = !0, g.constant = !0; else {
                var h = hc(f, this.options, this.text);
                g.fn = l(function(a, b) {
                    return h(a, b);
                }, {
                    assign: function(a, b) {
                        return fc(a, f, b, e.text, e.options);
                    }
                });
            }
            this.tokens.push(g), c && (this.tokens.push({
                index: a,
                text: "."
            }), this.tokens.push({
                index: a + 1,
                text: c
            }));
        },
        readString: function(a) {
            var b = this.index;
            this.index++;
            for (var c = "", d = a, e = !1; this.index < this.text.length; ) {
                var f = this.text.charAt(this.index), d = d + f;
                if (e) "u" === f ? (e = this.text.substring(this.index + 1, this.index + 5), e.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + e + "]"), 
                this.index += 4, c += String.fromCharCode(parseInt(e, 16))) : c += Rd[f] || f, e = !1; else if ("\\" === f) e = !0; else {
                    if (f === a) return this.index++, void this.tokens.push({
                        index: b,
                        text: d,
                        string: c,
                        literal: !0,
                        constant: !0,
                        fn: function() {
                            return c;
                        }
                    });
                    c += f;
                }
                this.index++;
            }
            this.throwError("Unterminated quote", b);
        }
    };
    var Td = function(a, b, c) {
        this.lexer = a, this.$filter = b, this.options = c;
    };
    Td.ZERO = l(function() {
        return 0;
    }, {
        constant: !0
    }), Td.prototype = {
        constructor: Td,
        parse: function(a) {
            return this.text = a, this.tokens = this.lexer.lex(a), a = this.statements(), 0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]), 
            a.literal = !!a.literal, a.constant = !!a.constant, a;
        },
        primary: function() {
            var a;
            if (this.expect("(")) a = this.filterChain(), this.consume(")"); else if (this.expect("[")) a = this.arrayDeclaration(); else if (this.expect("{")) a = this.object(); else {
                var b = this.expect();
                (a = b.fn) || this.throwError("not a primary expression", b), a.literal = !!b.literal, 
                a.constant = !!b.constant;
            }
            for (var c; b = this.expect("(", "[", "."); ) "(" === b.text ? (a = this.functionCall(a, c), 
            c = null) : "[" === b.text ? (c = a, a = this.objectIndex(a)) : "." === b.text ? (c = a, 
            a = this.fieldAccess(a)) : this.throwError("IMPOSSIBLE");
            return a;
        },
        throwError: function(a, b) {
            throw Ld("syntax", b.text, a, b.index + 1, this.text, this.text.substring(b.index));
        },
        peekToken: function() {
            if (0 === this.tokens.length) throw Ld("ueoe", this.text);
            return this.tokens[0];
        },
        peek: function(a, b, c, d) {
            if (0 < this.tokens.length) {
                var e = this.tokens[0], f = e.text;
                if (f === a || f === b || f === c || f === d || !(a || b || c || d)) return e;
            }
            return !1;
        },
        expect: function(a, b, c, d) {
            return (a = this.peek(a, b, c, d)) ? (this.tokens.shift(), a) : !1;
        },
        consume: function(a) {
            this.expect(a) || this.throwError("is unexpected, expecting [" + a + "]", this.peek());
        },
        unaryFn: function(a, b) {
            return l(function(c, d) {
                return a(c, d, b);
            }, {
                constant: b.constant
            });
        },
        ternaryFn: function(a, b, c) {
            return l(function(d, e) {
                return a(d, e) ? b(d, e) : c(d, e);
            }, {
                constant: a.constant && b.constant && c.constant
            });
        },
        binaryFn: function(a, b, c) {
            return l(function(d, e) {
                return b(d, e, a, c);
            }, {
                constant: a.constant && c.constant
            });
        },
        statements: function() {
            for (var a = []; ;) if (0 < this.tokens.length && !this.peek("}", ")", ";", "]") && a.push(this.filterChain()), 
            !this.expect(";")) return 1 === a.length ? a[0] : function(b, c) {
                for (var d, e = 0; e < a.length; e++) {
                    var f = a[e];
                    f && (d = f(b, c));
                }
                return d;
            };
        },
        filterChain: function() {
            for (var a, b = this.expression(); ;) {
                if (!(a = this.expect("|"))) return b;
                b = this.binaryFn(b, a.fn, this.filter());
            }
        },
        filter: function() {
            for (var a = this.expect(), b = this.$filter(a.text), c = []; ;) {
                if (!(a = this.expect(":"))) {
                    var d = function(a, d, e) {
                        e = [ e ];
                        for (var f = 0; f < c.length; f++) e.push(c[f](a, d));
                        return b.apply(a, e);
                    };
                    return function() {
                        return d;
                    };
                }
                c.push(this.expression());
            }
        },
        expression: function() {
            return this.assignment();
        },
        assignment: function() {
            var a, b, c = this.ternary();
            return (b = this.expect("=")) ? (c.assign || this.throwError("implies assignment but [" + this.text.substring(0, b.index) + "] can not be assigned to", b), 
            a = this.ternary(), function(b, d) {
                return c.assign(b, a(b, d), d);
            }) : c;
        },
        ternary: function() {
            var a, b, c = this.logicalOR();
            return this.expect("?") ? (a = this.assignment(), (b = this.expect(":")) ? this.ternaryFn(c, a, this.assignment()) : void this.throwError("expected :", b)) : c;
        },
        logicalOR: function() {
            for (var a, b = this.logicalAND(); ;) {
                if (!(a = this.expect("||"))) return b;
                b = this.binaryFn(b, a.fn, this.logicalAND());
            }
        },
        logicalAND: function() {
            var a, b = this.equality();
            return (a = this.expect("&&")) && (b = this.binaryFn(b, a.fn, this.logicalAND())), 
            b;
        },
        equality: function() {
            var a, b = this.relational();
            return (a = this.expect("==", "!=", "===", "!==")) && (b = this.binaryFn(b, a.fn, this.equality())), 
            b;
        },
        relational: function() {
            var a, b = this.additive();
            return (a = this.expect("<", ">", "<=", ">=")) && (b = this.binaryFn(b, a.fn, this.relational())), 
            b;
        },
        additive: function() {
            for (var a, b = this.multiplicative(); a = this.expect("+", "-"); ) b = this.binaryFn(b, a.fn, this.multiplicative());
            return b;
        },
        multiplicative: function() {
            for (var a, b = this.unary(); a = this.expect("*", "/", "%"); ) b = this.binaryFn(b, a.fn, this.unary());
            return b;
        },
        unary: function() {
            var a;
            return this.expect("+") ? this.primary() : (a = this.expect("-")) ? this.binaryFn(Td.ZERO, a.fn, this.unary()) : (a = this.expect("!")) ? this.unaryFn(a.fn, this.unary()) : this.primary();
        },
        fieldAccess: function(a) {
            var b = this, c = this.expect().text, d = hc(c, this.options, this.text);
            return l(function(b, c, e) {
                return d(e || a(b, c));
            }, {
                assign: function(d, e, f) {
                    return (f = a(d, f)) || a.assign(d, f = {}), fc(f, c, e, b.text, b.options);
                }
            });
        },
        objectIndex: function(a) {
            var b = this, d = this.expression();
            return this.consume("]"), l(function(e, f) {
                var g, h = a(e, f), i = d(e, f);
                return dc(i, b.text), h ? ((h = ec(h[i], b.text)) && h.then && b.options.unwrapPromises && (g = h, 
                "$$v" in h || (g.$$v = c, g.then(function(a) {
                    g.$$v = a;
                })), h = h.$$v), h) : c;
            }, {
                assign: function(c, e, f) {
                    var g = dc(d(c, f), b.text);
                    return (f = ec(a(c, f), b.text)) || a.assign(c, f = {}), f[g] = e;
                }
            });
        },
        functionCall: function(a, b) {
            var c = [];
            if (")" !== this.peekToken().text) do c.push(this.expression()); while (this.expect(","));
            this.consume(")");
            var d = this;
            return function(e, f) {
                for (var g = [], h = b ? b(e, f) : e, i = 0; i < c.length; i++) g.push(c[i](e, f));
                i = a(e, f, h) || o, ec(h, d.text);
                var j = d.text;
                if (i) {
                    if (i.constructor === i) throw Ld("isecfn", j);
                    if (i === Nd || i === Od || Pd && i === Pd) throw Ld("isecff", j);
                }
                return g = i.apply ? i.apply(h, g) : i(g[0], g[1], g[2], g[3], g[4]), ec(g, d.text);
            };
        },
        arrayDeclaration: function() {
            var a = [], b = !0;
            if ("]" !== this.peekToken().text) do {
                if (this.peek("]")) break;
                var c = this.expression();
                a.push(c), c.constant || (b = !1);
            } while (this.expect(","));
            return this.consume("]"), l(function(b, c) {
                for (var d = [], e = 0; e < a.length; e++) d.push(a[e](b, c));
                return d;
            }, {
                literal: !0,
                constant: b
            });
        },
        object: function() {
            var a = [], b = !0;
            if ("}" !== this.peekToken().text) do {
                if (this.peek("}")) break;
                var c = this.expect(), c = c.string || c.text;
                this.consume(":");
                var d = this.expression();
                a.push({
                    key: c,
                    value: d
                }), d.constant || (b = !1);
            } while (this.expect(","));
            return this.consume("}"), l(function(b, c) {
                for (var d = {}, e = 0; e < a.length; e++) {
                    var f = a[e];
                    d[f.key] = f.value(b, c);
                }
                return d;
            }, {
                literal: !0,
                constant: b
            });
        }
    };
    var Ud = {}, Vd = d("$sce"), Wd = {
        HTML: "html",
        CSS: "css",
        URL: "url",
        RESOURCE_URL: "resourceUrl",
        JS: "js"
    }, Xd = b.createElement("a"), Yd = uc(a.location.href, !0);
    xc.$inject = [ "$provide" ], zc.$inject = [ "$locale" ], Ac.$inject = [ "$locale" ];
    var Zd = ".", $d = {
        yyyy: Dc("FullYear", 4),
        yy: Dc("FullYear", 2, 0, !0),
        y: Dc("FullYear", 1),
        MMMM: Ec("Month"),
        MMM: Ec("Month", !0),
        MM: Dc("Month", 2, 1),
        M: Dc("Month", 1, 1),
        dd: Dc("Date", 2),
        d: Dc("Date", 1),
        HH: Dc("Hours", 2),
        H: Dc("Hours", 1),
        hh: Dc("Hours", 2, -12),
        h: Dc("Hours", 1, -12),
        mm: Dc("Minutes", 2),
        m: Dc("Minutes", 1),
        ss: Dc("Seconds", 2),
        s: Dc("Seconds", 1),
        sss: Dc("Milliseconds", 3),
        EEEE: Ec("Day"),
        EEE: Ec("Day", !0),
        a: function(a, b) {
            return 12 > a.getHours() ? b.AMPMS[0] : b.AMPMS[1];
        },
        Z: function(a) {
            return a = -1 * a.getTimezoneOffset(), a = (a >= 0 ? "+" : "") + (Cc(Math[a > 0 ? "floor" : "ceil"](a / 60), 2) + Cc(Math.abs(a % 60), 2));
        }
    }, _d = /((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/, ae = /^\-?\d+$/;
    Fc.$inject = [ "$locale" ];
    var be = q(Wc), ce = q(Yc);
    Ic.$inject = [ "$parse" ];
    var de = q({
        restrict: "E",
        compile: function(a, c) {
            return 8 >= Qc && (c.href || c.name || c.$set("href", ""), a.append(b.createComment("IE fix"))), 
            c.href || c.xlinkHref || c.name ? void 0 : function(a, b) {
                var c = "[object SVGAnimatedString]" === _c.call(b.prop("href")) ? "xlink:href" : "href";
                b.on("click", function(a) {
                    b.attr(c) || a.preventDefault();
                });
            };
        }
    }), ee = {};
    f(vd, function(a, b) {
        if ("multiple" != a) {
            var c = Db("ng-" + b);
            ee[c] = function() {
                return {
                    priority: 100,
                    link: function(a, d, e) {
                        a.$watch(e[c], function(a) {
                            e.$set(b, !!a);
                        });
                    }
                };
            };
        }
    }), f([ "src", "srcset", "href" ], function(a) {
        var b = Db("ng-" + a);
        ee[b] = function() {
            return {
                priority: 99,
                link: function(c, d, e) {
                    var f = a, g = a;
                    "href" === a && "[object SVGAnimatedString]" === _c.call(d.prop("href")) && (g = "xlinkHref", 
                    e.$attr[g] = "xlink:href", f = null), e.$observe(b, function(b) {
                        b ? (e.$set(g, b), Qc && f && d.prop(f, e[g])) : "href" === a && e.$set(g, null);
                    });
                }
            };
        };
    });
    var fe = {
        $addControl: o,
        $removeControl: o,
        $setValidity: o,
        $setDirty: o,
        $setPristine: o
    };
    Kc.$inject = [ "$element", "$attrs", "$scope", "$animate" ];
    var ge = function(a) {
        return [ "$timeout", function(b) {
            return {
                name: "form",
                restrict: a ? "EAC" : "E",
                controller: Kc,
                compile: function() {
                    return {
                        pre: function(a, d, e, f) {
                            if (!e.action) {
                                var g = function(a) {
                                    a.preventDefault ? a.preventDefault() : a.returnValue = !1;
                                };
                                kd(d[0], "submit", g), d.on("$destroy", function() {
                                    b(function() {
                                        ld(d[0], "submit", g);
                                    }, 0, !1);
                                });
                            }
                            var h = d.parent().controller("form"), i = e.name || e.ngForm;
                            i && fc(a, i, f, i), h && d.on("$destroy", function() {
                                h.$removeControl(f), i && fc(a, i, c, i), l(f, fe);
                            });
                        }
                    };
                }
            };
        } ];
    }, he = ge(), ie = ge(!0), je = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/, ke = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i, le = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/, me = {
        text: Oc,
        number: function(a, b, d, e, f, g) {
            Oc(a, b, d, e, f, g), e.$parsers.push(function(a) {
                var b = e.$isEmpty(a);
                return b || le.test(a) ? (e.$setValidity("number", !0), "" === a ? null : b ? a : parseFloat(a)) : (e.$setValidity("number", !1), 
                c);
            }), Nc(e, "number", ne, null, e.$$validityState), e.$formatters.push(function(a) {
                return e.$isEmpty(a) ? "" : "" + a;
            }), d.min && (a = function(a) {
                var b = parseFloat(d.min);
                return Lc(e, "min", e.$isEmpty(a) || a >= b, a);
            }, e.$parsers.push(a), e.$formatters.push(a)), d.max && (a = function(a) {
                var b = parseFloat(d.max);
                return Lc(e, "max", e.$isEmpty(a) || b >= a, a);
            }, e.$parsers.push(a), e.$formatters.push(a)), e.$formatters.push(function(a) {
                return Lc(e, "number", e.$isEmpty(a) || v(a), a);
            });
        },
        url: function(a, b, c, d, e, f) {
            Oc(a, b, c, d, e, f), a = function(a) {
                return Lc(d, "url", d.$isEmpty(a) || je.test(a), a);
            }, d.$formatters.push(a), d.$parsers.push(a);
        },
        email: function(a, b, c, d, e, f) {
            Oc(a, b, c, d, e, f), a = function(a) {
                return Lc(d, "email", d.$isEmpty(a) || ke.test(a), a);
            }, d.$formatters.push(a), d.$parsers.push(a);
        },
        radio: function(a, b, c, d) {
            r(c.name) && b.attr("name", j()), b.on("click", function() {
                b[0].checked && a.$apply(function() {
                    d.$setViewValue(c.value);
                });
            }), d.$render = function() {
                b[0].checked = c.value == d.$viewValue;
            }, c.$observe("value", d.$render);
        },
        checkbox: function(a, b, c, d) {
            var e = c.ngTrueValue, f = c.ngFalseValue;
            u(e) || (e = !0), u(f) || (f = !1), b.on("click", function() {
                a.$apply(function() {
                    d.$setViewValue(b[0].checked);
                });
            }), d.$render = function() {
                b[0].checked = d.$viewValue;
            }, d.$isEmpty = function(a) {
                return a !== e;
            }, d.$formatters.push(function(a) {
                return a === e;
            }), d.$parsers.push(function(a) {
                return a ? e : f;
            });
        },
        hidden: o,
        button: o,
        submit: o,
        reset: o,
        file: o
    }, ne = [ "badInput" ], oe = [ "$browser", "$sniffer", function(a, b) {
        return {
            restrict: "E",
            require: "?ngModel",
            link: function(c, d, e, f) {
                f && (me[Wc(e.type)] || me.text)(c, d, e, f, b, a);
            }
        };
    } ], pe = "ng-valid", qe = "ng-invalid", re = "ng-pristine", se = "ng-dirty", te = [ "$scope", "$exceptionHandler", "$attrs", "$element", "$parse", "$animate", function(a, b, c, e, g, h) {
        function i(a, b) {
            b = b ? "-" + U(b, "-") : "", h.removeClass(e, (a ? qe : pe) + b), h.addClass(e, (a ? pe : qe) + b);
        }
        this.$modelValue = this.$viewValue = Number.NaN, this.$parsers = [], this.$formatters = [], 
        this.$viewChangeListeners = [], this.$pristine = !0, this.$dirty = !1, this.$valid = !0, 
        this.$invalid = !1, this.$name = c.name;
        var j = g(c.ngModel), k = j.assign;
        if (!k) throw d("ngModel")("nonassign", c.ngModel, M(e));
        this.$render = o, this.$isEmpty = function(a) {
            return r(a) || "" === a || null === a || a !== a;
        };
        var l = e.inheritedData("$formController") || fe, m = 0, n = this.$error = {};
        e.addClass(re), i(!0), this.$setValidity = function(a, b) {
            n[a] !== !b && (b ? (n[a] && m--, m || (i(!0), this.$valid = !0, this.$invalid = !1)) : (i(!1), 
            this.$invalid = !0, this.$valid = !1, m++), n[a] = !b, i(b, a), l.$setValidity(a, b, this));
        }, this.$setPristine = function() {
            this.$dirty = !1, this.$pristine = !0, h.removeClass(e, se), h.addClass(e, re);
        }, this.$setViewValue = function(c) {
            this.$viewValue = c, this.$pristine && (this.$dirty = !0, this.$pristine = !1, h.removeClass(e, re), 
            h.addClass(e, se), l.$setDirty()), f(this.$parsers, function(a) {
                c = a(c);
            }), this.$modelValue !== c && (this.$modelValue = c, k(a, c), f(this.$viewChangeListeners, function(a) {
                try {
                    a();
                } catch (c) {
                    b(c);
                }
            }));
        };
        var p = this;
        a.$watch(function() {
            var b = j(a);
            if (p.$modelValue !== b) {
                var c = p.$formatters, d = c.length;
                for (p.$modelValue = b; d--; ) b = c[d](b);
                p.$viewValue !== b && (p.$viewValue = b, p.$render());
            }
            return b;
        });
    } ], ue = function() {
        return {
            require: [ "ngModel", "^?form" ],
            controller: te,
            link: function(a, b, c, d) {
                var e = d[0], f = d[1] || fe;
                f.$addControl(e), a.$on("$destroy", function() {
                    f.$removeControl(e);
                });
            }
        };
    }, ve = q({
        require: "ngModel",
        link: function(a, b, c, d) {
            d.$viewChangeListeners.push(function() {
                a.$eval(c.ngChange);
            });
        }
    }), we = function() {
        return {
            require: "?ngModel",
            link: function(a, b, c, d) {
                if (d) {
                    c.required = !0;
                    var e = function(a) {
                        return c.required && d.$isEmpty(a) ? void d.$setValidity("required", !1) : (d.$setValidity("required", !0), 
                        a);
                    };
                    d.$formatters.push(e), d.$parsers.unshift(e), c.$observe("required", function() {
                        e(d.$viewValue);
                    });
                }
            }
        };
    }, xe = function() {
        return {
            require: "ngModel",
            link: function(a, b, d, e) {
                var g = (a = /\/(.*)\//.exec(d.ngList)) && RegExp(a[1]) || d.ngList || ",";
                e.$parsers.push(function(a) {
                    if (!r(a)) {
                        var b = [];
                        return a && f(a.split(g), function(a) {
                            a && b.push(ed(a));
                        }), b;
                    }
                }), e.$formatters.push(function(a) {
                    return dd(a) ? a.join(", ") : c;
                }), e.$isEmpty = function(a) {
                    return !a || !a.length;
                };
            }
        };
    }, ye = /^(true|false|\d+)$/, ze = function() {
        return {
            priority: 100,
            compile: function(a, b) {
                return ye.test(b.ngValue) ? function(a, b, c) {
                    c.$set("value", a.$eval(c.ngValue));
                } : function(a, b, c) {
                    a.$watch(c.ngValue, function(a) {
                        c.$set("value", a);
                    });
                };
            }
        };
    }, Ae = Jc({
        compile: function(a) {
            return a.addClass("ng-binding"), function(a, b, d) {
                b.data("$binding", d.ngBind), a.$watch(d.ngBind, function(a) {
                    b.text(a == c ? "" : a);
                });
            };
        }
    }), Be = [ "$interpolate", function(a) {
        return function(b, c, d) {
            b = a(c.attr(d.$attr.ngBindTemplate)), c.addClass("ng-binding").data("$binding", b), 
            d.$observe("ngBindTemplate", function(a) {
                c.text(a);
            });
        };
    } ], Ce = [ "$sce", "$parse", function(a, b) {
        return {
            compile: function(c) {
                return c.addClass("ng-binding"), function(c, d, e) {
                    d.data("$binding", e.ngBindHtml);
                    var f = b(e.ngBindHtml);
                    c.$watch(function() {
                        return (f(c) || "").toString();
                    }, function() {
                        d.html(a.getTrustedHtml(f(c)) || "");
                    });
                };
            }
        };
    } ], De = Pc("", !0), Ee = Pc("Odd", 0), Fe = Pc("Even", 1), Ge = Jc({
        compile: function(a, b) {
            b.$set("ngCloak", c), a.removeClass("ng-cloak");
        }
    }), He = [ function() {
        return {
            scope: !0,
            controller: "@",
            priority: 500
        };
    } ], Ie = {};
    f("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function(a) {
        var b = Db("ng-" + a);
        Ie[b] = [ "$parse", function(c) {
            return {
                compile: function(d, e) {
                    var f = c(e[b]);
                    return function(b, c) {
                        c.on(Wc(a), function(a) {
                            b.$apply(function() {
                                f(b, {
                                    $event: a
                                });
                            });
                        });
                    };
                }
            };
        } ];
    });
    var Je = [ "$animate", function(a) {
        return {
            transclude: "element",
            priority: 600,
            terminal: !0,
            restrict: "A",
            $$tlb: !0,
            link: function(c, d, e, f, g) {
                var h, i, j;
                c.$watch(e.ngIf, function(f) {
                    L(f) ? i || (i = c.$new(), g(i, function(c) {
                        c[c.length++] = b.createComment(" end ngIf: " + e.ngIf + " "), h = {
                            clone: c
                        }, a.enter(c, d.parent(), d);
                    })) : (j && (j.remove(), j = null), i && (i.$destroy(), i = null), h && (j = Z(h.clone), 
                    a.leave(j, function() {
                        j = null;
                    }), h = null));
                });
            }
        };
    } ], Ke = [ "$http", "$templateCache", "$anchorScroll", "$animate", "$sce", function(a, b, c, d, e) {
        return {
            restrict: "ECA",
            priority: 400,
            terminal: !0,
            transclude: "element",
            controller: bd.noop,
            compile: function(f, g) {
                var h = g.ngInclude || g.src, i = g.onload || "", j = g.autoscroll;
                return function(f, g, k, l, m) {
                    var n, o, p, q = 0, r = function() {
                        o && (o.remove(), o = null), n && (n.$destroy(), n = null), p && (d.leave(p, function() {
                            o = null;
                        }), o = p, p = null);
                    };
                    f.$watch(e.parseAsResourceUrl(h), function(e) {
                        var h = function() {
                            !s(j) || j && !f.$eval(j) || c();
                        }, k = ++q;
                        e ? (a.get(e, {
                            cache: b
                        }).success(function(a) {
                            if (k === q) {
                                var b = f.$new();
                                l.template = a, a = m(b, function(a) {
                                    r(), d.enter(a, null, g, h);
                                }), n = b, p = a, n.$emit("$includeContentLoaded"), f.$eval(i);
                            }
                        }).error(function() {
                            k === q && r();
                        }), f.$emit("$includeContentRequested")) : (r(), l.template = null);
                    });
                };
            }
        };
    } ], Le = [ "$compile", function(a) {
        return {
            restrict: "ECA",
            priority: -400,
            require: "ngInclude",
            link: function(b, c, d, e) {
                c.html(e.template), a(c.contents())(b);
            }
        };
    } ], Me = Jc({
        priority: 450,
        compile: function() {
            return {
                pre: function(a, b, c) {
                    a.$eval(c.ngInit);
                }
            };
        }
    }), Ne = Jc({
        terminal: !0,
        priority: 1e3
    }), Oe = [ "$locale", "$interpolate", function(a, b) {
        var c = /{}/g;
        return {
            restrict: "EA",
            link: function(d, e, g) {
                var h = g.count, i = g.$attr.when && e.attr(g.$attr.when), j = g.offset || 0, k = d.$eval(i) || {}, l = {}, m = b.startSymbol(), n = b.endSymbol(), o = /^when(Minus)?(.+)$/;
                f(g, function(a, b) {
                    o.test(b) && (k[Wc(b.replace("when", "").replace("Minus", "-"))] = e.attr(g.$attr[b]));
                }), f(k, function(a, d) {
                    l[d] = b(a.replace(c, m + h + "-" + j + n));
                }), d.$watch(function() {
                    var b = parseFloat(d.$eval(h));
                    return isNaN(b) ? "" : (b in k || (b = a.pluralCat(b - j)), l[b](d, e, !0));
                }, function(a) {
                    e.text(a);
                });
            }
        };
    } ], Pe = [ "$parse", "$animate", function(a, c) {
        var g = d("ngRepeat");
        return {
            transclude: "element",
            priority: 1e3,
            terminal: !0,
            $$tlb: !0,
            link: function(d, h, i, j, k) {
                var l, m, n, o, p, q, r = i.ngRepeat, s = r.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?\s*$/), t = {
                    $id: sb
                };
                if (!s) throw g("iexp", r);
                if (i = s[1], j = s[2], (s = s[3]) ? (l = a(s), m = function(a, b, c) {
                    return q && (t[q] = a), t[p] = b, t.$index = c, l(d, t);
                }) : (n = function(a, b) {
                    return sb(b);
                }, o = function(a) {
                    return a;
                }), s = i.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/), !s) throw g("iidexp", i);
                p = s[3] || s[1], q = s[2];
                var u = {};
                d.$watchCollection(j, function(a) {
                    var i, j, l, s, t, v, w, x, y, z = h[0], A = {}, B = [];
                    if (e(a)) x = a, l = m || n; else {
                        l = m || o, x = [];
                        for (v in a) a.hasOwnProperty(v) && "$" != v.charAt(0) && x.push(v);
                        x.sort();
                    }
                    for (s = x.length, j = B.length = x.length, i = 0; j > i; i++) if (v = a === x ? i : x[i], 
                    w = a[v], w = l(v, w, i), X(w, "`track by` id"), u.hasOwnProperty(w)) y = u[w], 
                    delete u[w], A[w] = y, B[i] = y; else {
                        if (A.hasOwnProperty(w)) throw f(B, function(a) {
                            a && a.scope && (u[a.id] = a);
                        }), g("dupes", r, w);
                        B[i] = {
                            id: w
                        }, A[w] = !1;
                    }
                    for (v in u) u.hasOwnProperty(v) && (y = u[v], i = Z(y.clone), c.leave(i), f(i, function(a) {
                        a.$$NG_REMOVED = !0;
                    }), y.scope.$destroy());
                    for (i = 0, j = x.length; j > i; i++) {
                        if (v = a === x ? i : x[i], w = a[v], y = B[i], B[i - 1] && (z = B[i - 1].clone[B[i - 1].clone.length - 1]), 
                        y.scope) {
                            t = y.scope, l = z;
                            do l = l.nextSibling; while (l && l.$$NG_REMOVED);
                            y.clone[0] != l && c.move(Z(y.clone), null, Rc(z)), z = y.clone[y.clone.length - 1];
                        } else t = d.$new();
                        t[p] = w, q && (t[q] = v), t.$index = i, t.$first = 0 === i, t.$last = i === s - 1, 
                        t.$middle = !(t.$first || t.$last), t.$odd = !(t.$even = 0 === (1 & i)), y.scope || k(t, function(a) {
                            a[a.length++] = b.createComment(" end ngRepeat: " + r + " "), c.enter(a, null, Rc(z)), 
                            z = a, y.scope = t, y.clone = a, A[y.id] = y;
                        });
                    }
                    u = A;
                });
            }
        };
    } ], Qe = [ "$animate", function(a) {
        return function(b, c, d) {
            b.$watch(d.ngShow, function(b) {
                a[L(b) ? "removeClass" : "addClass"](c, "ng-hide");
            });
        };
    } ], Re = [ "$animate", function(a) {
        return function(b, c, d) {
            b.$watch(d.ngHide, function(b) {
                a[L(b) ? "addClass" : "removeClass"](c, "ng-hide");
            });
        };
    } ], Se = Jc(function(a, b, c) {
        a.$watch(c.ngStyle, function(a, c) {
            c && a !== c && f(c, function(a, c) {
                b.css(c, "");
            }), a && b.css(a);
        }, !0);
    }), Te = [ "$animate", function(a) {
        return {
            restrict: "EA",
            require: "ngSwitch",
            controller: [ "$scope", function() {
                this.cases = {};
            } ],
            link: function(b, c, d, e) {
                var g = [], h = [], i = [], j = [];
                b.$watch(d.ngSwitch || d.on, function(c) {
                    var k, l;
                    for (k = 0, l = i.length; l > k; ++k) i[k].remove();
                    for (k = i.length = 0, l = j.length; l > k; ++k) {
                        var m = h[k];
                        j[k].$destroy(), i[k] = m, a.leave(m, function() {
                            i.splice(k, 1);
                        });
                    }
                    h.length = 0, j.length = 0, (g = e.cases["!" + c] || e.cases["?"]) && (b.$eval(d.change), 
                    f(g, function(c) {
                        var d = b.$new();
                        j.push(d), c.transclude(d, function(b) {
                            var d = c.element;
                            h.push(b), a.enter(b, d.parent(), d);
                        });
                    }));
                });
            }
        };
    } ], Ue = Jc({
        transclude: "element",
        priority: 800,
        require: "^ngSwitch",
        link: function(a, b, c, d, e) {
            d.cases["!" + c.ngSwitchWhen] = d.cases["!" + c.ngSwitchWhen] || [], d.cases["!" + c.ngSwitchWhen].push({
                transclude: e,
                element: b
            });
        }
    }), Ve = Jc({
        transclude: "element",
        priority: 800,
        require: "^ngSwitch",
        link: function(a, b, c, d, e) {
            d.cases["?"] = d.cases["?"] || [], d.cases["?"].push({
                transclude: e,
                element: b
            });
        }
    }), We = Jc({
        link: function(a, b, c, e, f) {
            if (!f) throw d("ngTransclude")("orphan", M(b));
            f(function(a) {
                b.empty(), b.append(a);
            });
        }
    }), Xe = [ "$templateCache", function(a) {
        return {
            restrict: "E",
            terminal: !0,
            compile: function(b, c) {
                "text/ng-template" == c.type && a.put(c.id, b[0].text);
            }
        };
    } ], Ye = d("ngOptions"), Ze = q({
        terminal: !0
    }), $e = [ "$compile", "$parse", function(a, d) {
        var e = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/, h = {
            $setViewValue: o
        };
        return {
            restrict: "E",
            require: [ "select", "?ngModel" ],
            controller: [ "$element", "$scope", "$attrs", function(a, b, c) {
                var d, e = this, f = {}, g = h;
                e.databound = c.ngModel, e.init = function(a, b, c) {
                    g = a, d = c;
                }, e.addOption = function(b) {
                    X(b, '"option value"'), f[b] = !0, g.$viewValue == b && (a.val(b), d.parent() && d.remove());
                }, e.removeOption = function(a) {
                    this.hasOption(a) && (delete f[a], g.$viewValue == a && this.renderUnknownOption(a));
                }, e.renderUnknownOption = function(b) {
                    b = "? " + sb(b) + " ?", d.val(b), a.prepend(d), a.val(b), d.prop("selected", !0);
                }, e.hasOption = function(a) {
                    return f.hasOwnProperty(a);
                }, b.$on("$destroy", function() {
                    e.renderUnknownOption = o;
                });
            } ],
            link: function(h, i, j, k) {
                function l(a, b, c, d) {
                    c.$render = function() {
                        var a = c.$viewValue;
                        d.hasOption(a) ? (x.parent() && x.remove(), b.val(a), "" === a && p.prop("selected", !0)) : r(a) && p ? b.val("") : d.renderUnknownOption(a);
                    }, b.on("change", function() {
                        a.$apply(function() {
                            x.parent() && x.remove(), c.$setViewValue(b.val());
                        });
                    });
                }
                function m(a, b, c) {
                    var d;
                    c.$render = function() {
                        var a = new tb(c.$viewValue);
                        f(b.find("option"), function(b) {
                            b.selected = s(a.get(b.value));
                        });
                    }, a.$watch(function() {
                        G(d, c.$viewValue) || (d = F(c.$viewValue), c.$render());
                    }), b.on("change", function() {
                        a.$apply(function() {
                            var a = [];
                            f(b.find("option"), function(b) {
                                b.selected && a.push(b.value);
                            }), c.$setViewValue(a);
                        });
                    });
                }
                function n(b, f, h) {
                    function i() {
                        var a, c, d, e, i, j = {
                            "": []
                        }, t = [ "" ];
                        d = h.$modelValue, e = p(b) || [];
                        var y, z, A, B = m ? g(e) : e;
                        if (z = {}, A = !1, q) if (c = h.$modelValue, r && dd(c)) for (A = new tb([]), a = {}, 
                        i = 0; i < c.length; i++) a[l] = c[i], A.put(r(b, a), c[i]); else A = new tb(c);
                        i = A;
                        var C, D;
                        for (A = 0; y = B.length, y > A; A++) {
                            if (c = A, m) {
                                if (c = B[A], "$" === c.charAt(0)) continue;
                                z[m] = c;
                            }
                            z[l] = e[c], a = n(b, z) || "", (c = j[a]) || (c = j[a] = [], t.push(a)), q ? a = s(i.remove(r ? r(b, z) : o(b, z))) : (r ? (a = {}, 
                            a[l] = d, a = r(b, a) === r(b, z)) : a = d === o(b, z), i = i || a), C = k(b, z), 
                            C = s(C) ? C : "", c.push({
                                id: r ? r(b, z) : m ? B[A] : A,
                                label: C,
                                selected: a
                            });
                        }
                        for (q || (u || null === d ? j[""].unshift({
                            id: "",
                            label: "",
                            selected: !i
                        }) : i || j[""].unshift({
                            id: "?",
                            label: "",
                            selected: !0
                        })), z = 0, B = t.length; B > z; z++) {
                            for (a = t[z], c = j[a], x.length <= z ? (d = {
                                element: w.clone().attr("label", a),
                                label: c.label
                            }, e = [ d ], x.push(e), f.append(d.element)) : (e = x[z], d = e[0], d.label != a && d.element.attr("label", d.label = a)), 
                            C = null, A = 0, y = c.length; y > A; A++) a = c[A], (i = e[A + 1]) ? (C = i.element, 
                            i.label !== a.label && C.text(i.label = a.label), i.id !== a.id && C.val(i.id = a.id), 
                            C[0].selected !== a.selected && (C.prop("selected", i.selected = a.selected), Qc && C.prop("selected", i.selected))) : ("" === a.id && u ? D = u : (D = v.clone()).val(a.id).prop("selected", a.selected).attr("selected", a.selected).text(a.label), 
                            e.push({
                                element: D,
                                label: a.label,
                                id: a.id,
                                selected: a.selected
                            }), C ? C.after(D) : d.element.append(D), C = D);
                            for (A++; e.length > A; ) e.pop().element.remove();
                        }
                        for (;x.length > z; ) x.pop()[0].element.remove();
                    }
                    var j;
                    if (!(j = t.match(e))) throw Ye("iexp", t, M(f));
                    var k = d(j[2] || j[1]), l = j[4] || j[6], m = j[5], n = d(j[3] || ""), o = d(j[2] ? j[1] : l), p = d(j[7]), r = j[8] ? d(j[8]) : null, x = [ [ {
                        element: f,
                        label: ""
                    } ] ];
                    u && (a(u)(b), u.removeClass("ng-scope"), u.remove()), f.empty(), f.on("change", function() {
                        b.$apply(function() {
                            var a, d, e, g, j, k, n, s, t = p(b) || [], u = {};
                            if (q) {
                                for (e = [], j = 0, n = x.length; n > j; j++) for (a = x[j], g = 1, k = a.length; k > g; g++) if ((d = a[g].element)[0].selected) {
                                    if (d = d.val(), m && (u[m] = d), r) for (s = 0; s < t.length && (u[l] = t[s], r(b, u) != d); s++) ; else u[l] = t[d];
                                    e.push(o(b, u));
                                }
                            } else if (d = f.val(), "?" == d) e = c; else if ("" === d) e = null; else if (r) {
                                for (s = 0; s < t.length; s++) if (u[l] = t[s], r(b, u) == d) {
                                    e = o(b, u);
                                    break;
                                }
                            } else u[l] = t[d], m && (u[m] = d), e = o(b, u);
                            h.$setViewValue(e), i();
                        });
                    }), h.$render = i, b.$watchCollection(p, i), q && b.$watchCollection(function() {
                        return h.$modelValue;
                    }, i);
                }
                if (k[1]) {
                    var o = k[0];
                    k = k[1];
                    var p, q = j.multiple, t = j.ngOptions, u = !1, v = Rc(b.createElement("option")), w = Rc(b.createElement("optgroup")), x = v.clone();
                    j = 0;
                    for (var y = i.children(), z = y.length; z > j; j++) if ("" === y[j].value) {
                        p = u = y.eq(j);
                        break;
                    }
                    o.init(k, u, x), q && (k.$isEmpty = function(a) {
                        return !a || 0 === a.length;
                    }), t ? n(h, i, k) : q ? m(h, i, k) : l(h, i, k, o);
                }
            }
        };
    } ], _e = [ "$interpolate", function(a) {
        var b = {
            addOption: o,
            removeOption: o
        };
        return {
            restrict: "E",
            priority: 100,
            compile: function(c, d) {
                if (r(d.value)) {
                    var e = a(c.text(), !0);
                    e || d.$set("value", c.text());
                }
                return function(a, c, d) {
                    var f = c.parent(), g = f.data("$selectController") || f.parent().data("$selectController");
                    g && g.databound ? c.prop("selected", !1) : g = b, e ? a.$watch(e, function(a, b) {
                        d.$set("value", a), a !== b && g.removeOption(b), g.addOption(a);
                    }) : g.addOption(d.value), c.on("$destroy", function() {
                        g.removeOption(d.value);
                    });
                };
            }
        };
    } ], af = q({
        restrict: "E",
        terminal: !0
    });
    a.angular.bootstrap ? console.log("WARNING: Tried to load angular more than once.") : ((Sc = a.jQuery) && Sc.fn.on ? (Rc = Sc, 
    l(Sc.fn, {
        scope: ud.scope,
        isolateScope: ud.isolateScope,
        controller: ud.controller,
        injector: ud.injector,
        inheritedData: ud.inheritedData
    }), bb("remove", !0, !0, !1), bb("empty", !1, !1, !1), bb("html", !1, !1, !0)) : Rc = cb, 
    bd.element = Rc, _(bd), Rc(b).ready(function() {
        S(b, T);
    }));
}(window, document), !window.angular.$$csp() && window.angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide{display:none !important;}ng\\:form{display:block;}.ng-animate-block-transitions{transition:0s all!important;-webkit-transition:0s all!important;}.ng-hide-add-active,.ng-hide-remove{display:block!important;}</style>'), 
function(a, b) {
    "use strict";
    function c(a, c, d) {
        return {
            restrict: "ECA",
            terminal: !0,
            priority: 400,
            transclude: "element",
            link: function(e, f, g, h, i) {
                function j() {
                    n && (n.remove(), n = null), l && (l.$destroy(), l = null), m && (d.leave(m, function() {
                        n = null;
                    }), n = m, m = null);
                }
                function k() {
                    var g = a.current && a.current.locals;
                    if (b.isDefined(g && g.$template)) {
                        var g = e.$new(), h = a.current;
                        m = i(g, function(a) {
                            d.enter(a, null, m || f, function() {
                                !b.isDefined(o) || o && !e.$eval(o) || c();
                            }), j();
                        }), l = h.scope = g, l.$emit("$viewContentLoaded"), l.$eval(p);
                    } else j();
                }
                var l, m, n, o = g.autoscroll, p = g.onload || "";
                e.$on("$routeChangeSuccess", k), k();
            }
        };
    }
    function d(a, b, c) {
        return {
            restrict: "ECA",
            priority: -400,
            link: function(d, e) {
                var f = c.current, g = f.locals;
                e.html(g.$template);
                var h = a(e.contents());
                f.controller && (g.$scope = d, g = b(f.controller, g), f.controllerAs && (d[f.controllerAs] = g), 
                e.data("$ngControllerController", g), e.children().data("$ngControllerController", g)), 
                h(d);
            }
        };
    }
    a = b.module("ngRoute", [ "ng" ]).provider("$route", function() {
        function a(a, c) {
            return b.extend(new (b.extend(function() {}, {
                prototype: a
            }))(), c);
        }
        function c(a, b) {
            var c = b.caseInsensitiveMatch, d = {
                originalPath: a,
                regexp: a
            }, e = d.keys = [];
            return a = a.replace(/([().])/g, "\\$1").replace(/(\/)?:(\w+)([\?\*])?/g, function(a, b, c, d) {
                return a = "?" === d ? d : null, d = "*" === d ? d : null, e.push({
                    name: c,
                    optional: !!a
                }), b = b || "", "" + (a ? "" : b) + "(?:" + (a ? b : "") + (d && "(.+?)" || "([^/]+)") + (a || "") + ")" + (a || "");
            }).replace(/([\/$\*])/g, "\\$1"), d.regexp = RegExp("^" + a + "$", c ? "i" : ""), 
            d;
        }
        var d = {};
        this.when = function(a, e) {
            if (d[a] = b.extend({
                reloadOnSearch: !0
            }, e, a && c(a, e)), a) {
                var f = "/" == a[a.length - 1] ? a.substr(0, a.length - 1) : a + "/";
                d[f] = b.extend({
                    redirectTo: a
                }, c(f, e));
            }
            return this;
        }, this.otherwise = function(a) {
            return this.when(null, a), this;
        }, this.$get = [ "$rootScope", "$location", "$routeParams", "$q", "$injector", "$http", "$templateCache", "$sce", function(c, e, f, g, h, i, j, k) {
            function l() {
                var a = m(), d = p.current;
                a && d && a.$$route === d.$$route && b.equals(a.pathParams, d.pathParams) && !a.reloadOnSearch && !o ? (d.params = a.params, 
                b.copy(d.params, f), c.$broadcast("$routeUpdate", d)) : (a || d) && (o = !1, c.$broadcast("$routeChangeStart", a, d), 
                (p.current = a) && a.redirectTo && (b.isString(a.redirectTo) ? e.path(n(a.redirectTo, a.params)).search(a.params).replace() : e.url(a.redirectTo(a.pathParams, e.path(), e.search())).replace()), 
                g.when(a).then(function() {
                    if (a) {
                        var c, d, e = b.extend({}, a.resolve);
                        return b.forEach(e, function(a, c) {
                            e[c] = b.isString(a) ? h.get(a) : h.invoke(a);
                        }), b.isDefined(c = a.template) ? b.isFunction(c) && (c = c(a.params)) : b.isDefined(d = a.templateUrl) && (b.isFunction(d) && (d = d(a.params)), 
                        d = k.getTrustedResourceUrl(d), b.isDefined(d) && (a.loadedTemplateUrl = d, c = i.get(d, {
                            cache: j
                        }).then(function(a) {
                            return a.data;
                        }))), b.isDefined(c) && (e.$template = c), g.all(e);
                    }
                }).then(function(e) {
                    a == p.current && (a && (a.locals = e, b.copy(a.params, f)), c.$broadcast("$routeChangeSuccess", a, d));
                }, function(b) {
                    a == p.current && c.$broadcast("$routeChangeError", a, d, b);
                }));
            }
            function m() {
                var c, f;
                return b.forEach(d, function(d) {
                    var g;
                    if (g = !f) {
                        var h = e.path();
                        g = d.keys;
                        var i = {};
                        if (d.regexp) if (h = d.regexp.exec(h)) {
                            for (var j = 1, k = h.length; k > j; ++j) {
                                var l = g[j - 1], m = h[j];
                                l && m && (i[l.name] = m);
                            }
                            g = i;
                        } else g = null; else g = null;
                        g = c = g;
                    }
                    g && (f = a(d, {
                        params: b.extend({}, e.search(), c),
                        pathParams: c
                    }), f.$$route = d);
                }), f || d[null] && a(d[null], {
                    params: {},
                    pathParams: {}
                });
            }
            function n(a, c) {
                var d = [];
                return b.forEach((a || "").split(":"), function(a, b) {
                    if (0 === b) d.push(a); else {
                        var e = a.match(/(\w+)(.*)/), f = e[1];
                        d.push(c[f]), d.push(e[2] || ""), delete c[f];
                    }
                }), d.join("");
            }
            var o = !1, p = {
                routes: d,
                reload: function() {
                    o = !0, c.$evalAsync(l);
                }
            };
            return c.$on("$locationChangeSuccess", l), p;
        } ];
    }), a.provider("$routeParams", function() {
        this.$get = function() {
            return {};
        };
    }), a.directive("ngView", c), a.directive("ngView", d), c.$inject = [ "$route", "$anchorScroll", "$animate" ], 
    d.$inject = [ "$compile", "$controller", "$route" ];
}(window, window.angular), function(a, b, c) {
    "use strict";
    function d(a, c) {
        c = c || {}, b.forEach(c, function(a, b) {
            delete c[b];
        });
        for (var d in a) !a.hasOwnProperty(d) || "$" === d.charAt(0) && "$" === d.charAt(1) || (c[d] = a[d]);
        return c;
    }
    var e = b.$$minErr("$resource"), f = /^(\.[a-zA-Z_$][0-9a-zA-Z_$]*)+$/;
    b.module("ngResource", [ "ng" ]).factory("$resource", [ "$http", "$q", function(a, g) {
        function h(a, b) {
            this.template = a, this.defaults = b || {}, this.urlParams = {};
        }
        function i(p, q, r) {
            function s(a, b) {
                var d = {};
                return b = m({}, q, b), l(b, function(b, g) {
                    o(b) && (b = b());
                    var h;
                    if (b && b.charAt && "@" == b.charAt(0)) {
                        h = a;
                        var i = b.substr(1);
                        if (null == i || "" === i || "hasOwnProperty" === i || !f.test("." + i)) throw e("badmember", i);
                        for (var i = i.split("."), j = 0, k = i.length; k > j && h !== c; j++) {
                            var l = i[j];
                            h = null !== h ? h[l] : c;
                        }
                    } else h = b;
                    d[g] = h;
                }), d;
            }
            function t(a) {
                return a.resource;
            }
            function u(a) {
                d(a || {}, this);
            }
            var v = new h(p);
            return r = m({}, j, r), l(r, function(f, h) {
                var i = /^(POST|PUT|PATCH)$/i.test(f.method);
                u[h] = function(h, j, p, q) {
                    var r, w, x, y = {};
                    switch (arguments.length) {
                      case 4:
                        x = q, w = p;

                      case 3:
                      case 2:
                        if (!o(j)) {
                            y = h, r = j, w = p;
                            break;
                        }
                        if (o(h)) {
                            w = h, x = j;
                            break;
                        }
                        w = j, x = p;

                      case 1:
                        o(h) ? w = h : i ? r = h : y = h;
                        break;

                      case 0:
                        break;

                      default:
                        throw e("badargs", arguments.length);
                    }
                    var z = this instanceof u, A = z ? r : f.isArray ? [] : new u(r), B = {}, C = f.interceptor && f.interceptor.response || t, D = f.interceptor && f.interceptor.responseError || c;
                    return l(f, function(a, b) {
                        "params" != b && "isArray" != b && "interceptor" != b && (B[b] = n(a));
                    }), i && (B.data = r), v.setUrlParams(B, m({}, s(r, f.params || {}), y), f.url), 
                    y = a(B).then(function(a) {
                        var c = a.data, g = A.$promise;
                        if (c) {
                            if (b.isArray(c) !== !!f.isArray) throw e("badcfg", f.isArray ? "array" : "object", b.isArray(c) ? "array" : "object");
                            f.isArray ? (A.length = 0, l(c, function(a) {
                                A.push("object" == typeof a ? new u(a) : a);
                            })) : (d(c, A), A.$promise = g);
                        }
                        return A.$resolved = !0, a.resource = A, a;
                    }, function(a) {
                        return A.$resolved = !0, (x || k)(a), g.reject(a);
                    }), y = y.then(function(a) {
                        var b = C(a);
                        return (w || k)(b, a.headers), b;
                    }, D), z ? y : (A.$promise = y, A.$resolved = !1, A);
                }, u.prototype["$" + h] = function(a, b, c) {
                    return o(a) && (c = b, b = a, a = {}), a = u[h].call(this, a, this, b, c), a.$promise || a;
                };
            }), u.bind = function(a) {
                return i(p, m({}, q, a), r);
            }, u;
        }
        var j = {
            get: {
                method: "GET"
            },
            save: {
                method: "POST"
            },
            query: {
                method: "GET",
                isArray: !0
            },
            remove: {
                method: "DELETE"
            },
            "delete": {
                method: "DELETE"
            }
        }, k = b.noop, l = b.forEach, m = b.extend, n = b.copy, o = b.isFunction;
        return h.prototype = {
            setUrlParams: function(a, c, d) {
                var f, g, h = this, i = d || h.template, j = h.urlParams = {};
                l(i.split(/\W/), function(a) {
                    if ("hasOwnProperty" === a) throw e("badname");
                    !/^\d+$/.test(a) && a && RegExp("(^|[^\\\\]):" + a + "(\\W|$)").test(i) && (j[a] = !0);
                }), i = i.replace(/\\:/g, ":"), c = c || {}, l(h.urlParams, function(a, d) {
                    f = c.hasOwnProperty(d) ? c[d] : h.defaults[d], b.isDefined(f) && null !== f ? (g = encodeURIComponent(f).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "%20").replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+"), 
                    i = i.replace(RegExp(":" + d + "(\\W|$)", "g"), function(a, b) {
                        return g + b;
                    })) : i = i.replace(RegExp("(/?):" + d + "(\\W|$)", "g"), function(a, b, c) {
                        return "/" == c.charAt(0) ? c : b + c;
                    });
                }), i = i.replace(/\/+$/, "") || "/", i = i.replace(/\/\.(?=\w+($|\?))/, "."), a.url = i.replace(/\/\\\./, "/."), 
                l(c, function(b, c) {
                    h.urlParams[c] || (a.params = a.params || {}, a.params[c] = b);
                });
            }
        }, i;
    } ]);
}(window, window.angular);

var resolutions = {
    "/users": {
        items: [ "User", function(a) {
            var b = a.query(function() {
                console.log(b);
            });
            return b.$promise;
        } ]
    },
    "/profile": {
        entertainer: [ "$q", "$route", "Entertainer", function(a, b, c) {
            var d = c.get(function() {
                console.log(d);
            });
            return d.$promise;
        } ]
    },
    "/media": {
        items: [ "Medium", function(a) {
            var b = a.query(function() {
                console.log(b);
            });
            return b.$promise;
        } ]
    },
    "/medium/:id?": {
        medium: [ "$q", "$route", "Medium", itemPromise ]
    },
    "/events": {
        items: [ "Event", function(a) {
            var b = a.query();
            return b.$promise;
        } ]
    },
    "/event/:id?": {
        event: [ "$q", "$route", "Event", itemPromise ]
    },
    "/venue/:id?": {
        venue: [ "$q", "$route", "Venue", itemPromise ]
    }
};

angular.module("interceptors", []).factory("authInterceptor", [ "$q", "$location", function(a, b) {
    return {
        response: function(b) {
            return 401 === b.status && console.log("Response 401"), b || a.when(b);
        },
        responseError: function(c) {
            return 401 === c.status && (console.log("Response Error 401", c), b.path("/login").search("returnTo", b.path())), 
            a.reject(c);
        }
    };
} ]);

var app = angular.module("app", [ "ngResource", "ngRoute", "interceptors" ]).config([ "$routeProvider", "$locationProvider", "$httpProvider", function(a, b, c) {
    c.defaults.withCredentials = !0, angular.forEach([ {
        url: "/",
        templateUrl: "/html/home.html",
        title: "Site Admin"
    }, {
        url: "/login",
        templateUrl: "/html/login.html",
        title: "Comedian Login"
    }, {
        url: "/users",
        templateUrl: "/html/user/list.html",
        title: "User List",
        controller: "ListController"
    }, {
        url: "/admin/user/:id?",
        templateUrl: "/html/admin/userAddEdit.html",
        title: "Edit User",
        controller: "UserController"
    }, {
        url: "/profile",
        templateUrl: "/html/profile/addEdit.html",
        title: "Edit Profile",
        controller: "EntertainerController"
    }, {
        url: "/media",
        templateUrl: "/html/media/list.html",
        title: "Edit Media",
        controller: "ListController"
    }, {
        url: "/medium/:id?",
        templateUrl: "/html/media/addEdit.html",
        title: "Edit Medium",
        controller: "MediumController"
    }, {
        url: "/events",
        templateUrl: "/html/event/list.html",
        title: "Event List",
        controller: "ListController"
    }, {
        url: "/event/:id?",
        templateUrl: "/html/event/addEdit.html",
        title: "Edit Event",
        controller: "EventController"
    }, {
        url: "/venue/:id?",
        templateUrl: "/html/venue/addEdit.html",
        title: "Edit Venue",
        controller: "VenueController"
    } ], function(b) {
        var c = b.url;
        delete b.url, resolutions[c] && (b.resolve = resolutions[c]), b.controller || (b.controller = "AdminController"), 
        a.when(c, b);
    }), a.otherwise({
        templateUrl: "/html/home.html",
        title: "Page not found"
    }), b.html5Mode(!0);
} ]).run([ "$rootScope", "$location", function(a, b) {
    a.host = b.hostname;
} ]).config([ "$httpProvider", function(a) {
    a.interceptors.push("authInterceptor");
} ]).factory("User", [ "$resource", function(a) {
    return a("http://localapi.comedian.io/users/:id"), {
        id: "@id"
    };
} ]).factory("Event", [ "$resource", function(a) {
    return a("http://localapi.comedian.io/events/:id", {
        id: "@id"
    });
} ]).factory("Venue", [ "$resource", function(a) {
    return a("http://localapi.comedian.io/venues/:id", {
        id: "@id"
    });
} ]).factory("Medium", [ "$resource", function(a) {
    return a("http://localapi.comedian.io/media/:id", {
        id: "@id"
    });
} ]).factory("Entertainer", [ "$resource", function(a) {
    return a("http://localapi.comedian.io/entertainers/53d1db2b562cdbef37fe0a48");
} ]).controller("ListController", [ "$http", "$scope", "$routeParams", "items", function(a, b, c, d) {
    a.get("http://localapi.comedian.io/auth").success(function() {
        console.log("success", arguments);
    }).error(function() {
        console.log("error", arguments);
    }), b.items = d;
} ]);

_.each([ "User", "Venue", "Medium", "Entertainer" ], function(a) {
    app.controller(a + "Controller", [ "$scope", "$location", a, a.toLowerCase(), function(b, c, d, e) {
        console.log("hit controller", a), b[a.toLowerCase()] = e, console.log(a.toLowerCase(), b[a.toLowerCase()]), 
        b.save = function() {
            console.log("Saving %s", b[a.toLowerCase()]), b[a.toLowerCase()].$save(function() {
                console.log("Saved", arguments), c.path("/" + ("Medium" == a ? "media" : a.toLowerCase() + "s"));
            });
        };
    } ]);
}), app.controller("EventController", [ "$scope", "$filter", "Venue", "event", function(a, b, c, d) {
    a.event = _.defaults(d, {
        _name: "",
        showtimes: [],
        isRecurring: !1,
        _type: "general",
        price: 0,
        venue: {},
        _description: "",
        _facebook: "",
        link: "",
        _video: "",
        _heroes: []
    }), a.getVenues = function() {
        console.log("vlah2");
        var a = c.query(function() {
            a.push({
                name: "New Venue"
            });
        });
        return a.$promise;
    }, a.addShow = function() {
        a.event.showtimes.push({
            date: b("date")(new Date(), "MM/dd/yy"),
            time: b("date")(new Date(), "hh:mm a")
        });
    }, a.save = function() {
        _.each(a.event.showtimes, function(b, c) {
            a.event.showtimes[c].datetime = parseDate(b.date + " " + b.time);
        }), console.log("Saving event", a.event), a.event.$save(function() {
            console.log("Saved", arguments);
        }, function() {});
    };
} ]), app.controller("AdminController", [ "$rootScope", "$scope", "$http", function() {} ]).controller("Login", [ "$scope", "$http", function(a, b) {
    console.log("Login controller used"), a.login = function(a) {
        console.log("clicked login", a), b.get("/auth/" + a).success(function(a) {
            console.log("Auth data", a);
        });
    };
} ]).controller("EmailList", [ "$scope", "$http", function(a, b) {
    a.subscriber = {
        email: "",
        zip: "",
        name: ""
    };
    var c = this;
    this.submitted = !1, a.saveData = function() {
        console.log("Hey", this.subscriber), b.post("/mail", a.subscriber).success(function(a) {
            c.submitted = !0, c.message = a.message;
        });
    };
} ]).controller("ContactForm", [ "$scope", "$http", function(a, b) {
    a.contact = {
        name: "",
        phone: "",
        email: "",
        message: ""
    }, this.submitted = !1;
    var c = this;
    a.saveData = function() {
        b.post("/mail/send", a.contact).success(function(a) {
            c.submitted = !0, c.message = a.message;
        });
    };
} ]).run([ "$location", "$rootScope", "Auth", function(a, b) {
    b.$on("$routeChangeSuccess", function(a, c) {
        c && (document.title = c.$$route.title, b.bgClass = c.$$route.bgClass);
    }), b.$on("$routeChangeError", function(b, c, d, e) {
        e.redirect && a.path(e.redirect);
    });
} ]).factory("Auth", function(a, b) {
    var c = {};
    return {
        getUser: function() {
            var d = a.defer();
            return c.loggedIn === !0 ? (console.log("Local cache"), d.resolve(c)) : b.get("http://localapi.comedian.io/auth").success(function(a) {
                console.log("Hit server"), a.loggedIn ? (c = a, d.resolve(a)) : d.reject({
                    redirect: "/login"
                });
            }), d.promise;
        },
        setUser: function(a) {
            user = a;
        },
        isLoggedIn: function() {
            return user ? user : !1;
        }
    };
}).factory("AdminInterceptor", [ "$location", "$q", function(a, b) {
    return {
        request: function(a) {
            return console.log("request", a), a;
        },
        requestError: function(a) {
            return console.log("request error", config), b.reject(a);
        },
        response: function(a) {
            return console.log("response", a), a;
        },
        responseError: function(c) {
            return console.log("response error", c), 401 === c.status && (console.log("Unauthorized. Redirecting..."), 
            a.path("/login")), b.reject(c);
        }
    };
} ]);