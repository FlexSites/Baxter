(function(Q, X, t) {
    "use strict";
    function x(b) {
        return function() {
            var a = arguments[0], c, a = "[" + (b ? b + ":" : "") + a + "] http://errors.angularjs.org/1.2.23/" + (b ? b + "/" : "") + a;
            for (c = 1; c < arguments.length; c++) a = a + (1 == c ? "?" : "&") + "p" + (c - 1) + "=" + encodeURIComponent("function" == typeof arguments[c] ? arguments[c].toString().replace(/ \{[\s\S]*$/, "") : "undefined" == typeof arguments[c] ? "undefined" : "string" != typeof arguments[c] ? JSON.stringify(arguments[c]) : arguments[c]);
            return Error(a);
        };
    }
    function fb(b) {
        if (null == b || Fa(b)) return !1;
        var a = b.length;
        return 1 === b.nodeType && a ? !0 : z(b) || H(b) || 0 === a || "number" === typeof a && 0 < a && a - 1 in b;
    }
    function r(b, a, c) {
        var d;
        if (b) if (P(b)) for (d in b) "prototype" == d || ("length" == d || "name" == d || b.hasOwnProperty && !b.hasOwnProperty(d)) || a.call(c, b[d], d); else if (H(b) || fb(b)) for (d = 0; d < b.length; d++) a.call(c, b[d], d); else if (b.forEach && b.forEach !== r) b.forEach(a, c); else for (d in b) b.hasOwnProperty(d) && a.call(c, b[d], d);
        return b;
    }
    function Zb(b) {
        var a = [], c;
        for (c in b) b.hasOwnProperty(c) && a.push(c);
        return a.sort();
    }
    function Tc(b, a, c) {
        for (var d = Zb(b), e = 0; e < d.length; e++) a.call(c, b[d[e]], d[e]);
        return d;
    }
    function $b(b) {
        return function(a, c) {
            b(c, a);
        };
    }
    function gb() {
        for (var b = la.length, a; b; ) {
            b--;
            a = la[b].charCodeAt(0);
            if (57 == a) return la[b] = "A", la.join("");
            if (90 == a) la[b] = "0"; else return la[b] = String.fromCharCode(a + 1), la.join("");
        }
        la.unshift("0");
        return la.join("");
    }
    function ac(b, a) {
        a ? b.$$hashKey = a : delete b.$$hashKey;
    }
    function B(b) {
        var a = b.$$hashKey;
        r(arguments, function(a) {
            a !== b && r(a, function(a, c) {
                b[c] = a;
            });
        });
        ac(b, a);
        return b;
    }
    function Z(b) {
        return parseInt(b, 10);
    }
    function bc(b, a) {
        return B(new (B(function() {}, {
            prototype: b
        }))(), a);
    }
    function y() {}
    function Ga(b) {
        return b;
    }
    function $(b) {
        return function() {
            return b;
        };
    }
    function D(b) {
        return "undefined" === typeof b;
    }
    function A(b) {
        return "undefined" !== typeof b;
    }
    function T(b) {
        return null != b && "object" === typeof b;
    }
    function z(b) {
        return "string" === typeof b;
    }
    function Ab(b) {
        return "number" === typeof b;
    }
    function sa(b) {
        return "[object Date]" === ya.call(b);
    }
    function P(b) {
        return "function" === typeof b;
    }
    function hb(b) {
        return "[object RegExp]" === ya.call(b);
    }
    function Fa(b) {
        return b && b.document && b.location && b.alert && b.setInterval;
    }
    function Uc(b) {
        return !(!b || !(b.nodeName || b.prop && b.attr && b.find));
    }
    function Vc(b, a, c) {
        var d = [];
        r(b, function(b, f, g) {
            d.push(a.call(c, b, f, g));
        });
        return d;
    }
    function Qa(b, a) {
        if (b.indexOf) return b.indexOf(a);
        for (var c = 0; c < b.length; c++) if (a === b[c]) return c;
        return -1;
    }
    function Ra(b, a) {
        var c = Qa(b, a);
        0 <= c && b.splice(c, 1);
        return a;
    }
    function Ha(b, a, c, d) {
        if (Fa(b) || b && b.$evalAsync && b.$watch) throw Sa("cpws");
        if (a) {
            if (b === a) throw Sa("cpi");
            c = c || [];
            d = d || [];
            if (T(b)) {
                var e = Qa(c, b);
                if (-1 !== e) return d[e];
                c.push(b);
                d.push(a);
            }
            if (H(b)) for (var f = a.length = 0; f < b.length; f++) e = Ha(b[f], null, c, d), 
            T(b[f]) && (c.push(b[f]), d.push(e)), a.push(e); else {
                var g = a.$$hashKey;
                H(a) ? a.length = 0 : r(a, function(b, c) {
                    delete a[c];
                });
                for (f in b) e = Ha(b[f], null, c, d), T(b[f]) && (c.push(b[f]), d.push(e)), a[f] = e;
                ac(a, g);
            }
        } else if (a = b) H(b) ? a = Ha(b, [], c, d) : sa(b) ? a = new Date(b.getTime()) : hb(b) ? (a = RegExp(b.source, b.toString().match(/[^\/]*$/)[0]), 
        a.lastIndex = b.lastIndex) : T(b) && (a = Ha(b, {}, c, d));
        return a;
    }
    function ga(b, a) {
        if (H(b)) {
            a = a || [];
            for (var c = 0; c < b.length; c++) a[c] = b[c];
        } else if (T(b)) for (c in a = a || {}, b) !ib.call(b, c) || "$" === c.charAt(0) && "$" === c.charAt(1) || (a[c] = b[c]);
        return a || b;
    }
    function za(b, a) {
        if (b === a) return !0;
        if (null === b || null === a) return !1;
        if (b !== b && a !== a) return !0;
        var c = typeof b, d;
        if (c == typeof a && "object" == c) if (H(b)) {
            if (!H(a)) return !1;
            if ((c = b.length) == a.length) {
                for (d = 0; d < c; d++) if (!za(b[d], a[d])) return !1;
                return !0;
            }
        } else {
            if (sa(b)) return sa(a) ? isNaN(b.getTime()) && isNaN(a.getTime()) || b.getTime() === a.getTime() : !1;
            if (hb(b) && hb(a)) return b.toString() == a.toString();
            if (b && b.$evalAsync && b.$watch || a && a.$evalAsync && a.$watch || Fa(b) || Fa(a) || H(a)) return !1;
            c = {};
            for (d in b) if ("$" !== d.charAt(0) && !P(b[d])) {
                if (!za(b[d], a[d])) return !1;
                c[d] = !0;
            }
            for (d in a) if (!c.hasOwnProperty(d) && "$" !== d.charAt(0) && a[d] !== t && !P(a[d])) return !1;
            return !0;
        }
        return !1;
    }
    function Bb(b, a) {
        var c = 2 < arguments.length ? Aa.call(arguments, 2) : [];
        return !P(a) || a instanceof RegExp ? a : c.length ? function() {
            return arguments.length ? a.apply(b, c.concat(Aa.call(arguments, 0))) : a.apply(b, c);
        } : function() {
            return arguments.length ? a.apply(b, arguments) : a.call(b);
        };
    }
    function Wc(b, a) {
        var c = a;
        "string" === typeof b && "$" === b.charAt(0) ? c = t : Fa(a) ? c = "$WINDOW" : a && X === a ? c = "$DOCUMENT" : a && (a.$evalAsync && a.$watch) && (c = "$SCOPE");
        return c;
    }
    function ta(b, a) {
        return "undefined" === typeof b ? t : JSON.stringify(b, Wc, a ? "  " : null);
    }
    function cc(b) {
        return z(b) ? JSON.parse(b) : b;
    }
    function Ta(b) {
        "function" === typeof b ? b = !0 : b && 0 !== b.length ? (b = N("" + b), b = !("f" == b || "0" == b || "false" == b || "no" == b || "n" == b || "[]" == b)) : b = !1;
        return b;
    }
    function ha(b) {
        b = u(b).clone();
        try {
            b.empty();
        } catch (a) {}
        var c = u("<div>").append(b).html();
        try {
            return 3 === b[0].nodeType ? N(c) : c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function(a, b) {
                return "<" + N(b);
            });
        } catch (d) {
            return N(c);
        }
    }
    function dc(b) {
        try {
            return decodeURIComponent(b);
        } catch (a) {}
    }
    function ec(b) {
        var a = {}, c, d;
        r((b || "").split("&"), function(b) {
            b && (c = b.replace(/\+/g, "%20").split("="), d = dc(c[0]), A(d) && (b = A(c[1]) ? dc(c[1]) : !0, 
            ib.call(a, d) ? H(a[d]) ? a[d].push(b) : a[d] = [ a[d], b ] : a[d] = b));
        });
        return a;
    }
    function Cb(b) {
        var a = [];
        r(b, function(b, d) {
            H(b) ? r(b, function(b) {
                a.push(Ba(d, !0) + (!0 === b ? "" : "=" + Ba(b, !0)));
            }) : a.push(Ba(d, !0) + (!0 === b ? "" : "=" + Ba(b, !0)));
        });
        return a.length ? a.join("&") : "";
    }
    function jb(b) {
        return Ba(b, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+");
    }
    function Ba(b, a) {
        return encodeURIComponent(b).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, a ? "%20" : "+");
    }
    function Xc(b, a) {
        function c(a) {
            a && d.push(a);
        }
        var d = [ b ], e, f, g = [ "ng:app", "ng-app", "x-ng-app", "data-ng-app" ], k = /\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;
        r(g, function(a) {
            g[a] = !0;
            c(X.getElementById(a));
            a = a.replace(":", "\\:");
            b.querySelectorAll && (r(b.querySelectorAll("." + a), c), r(b.querySelectorAll("." + a + "\\:"), c), 
            r(b.querySelectorAll("[" + a + "]"), c));
        });
        r(d, function(a) {
            if (!e) {
                var b = k.exec(" " + a.className + " ");
                b ? (e = a, f = (b[2] || "").replace(/\s+/g, ",")) : r(a.attributes, function(b) {
                    !e && g[b.name] && (e = a, f = b.value);
                });
            }
        });
        e && a(e, f ? [ f ] : []);
    }
    function fc(b, a) {
        var c = function() {
            b = u(b);
            if (b.injector()) {
                var c = b[0] === X ? "document" : ha(b);
                throw Sa("btstrpd", c.replace(/</, "&lt;").replace(/>/, "&gt;"));
            }
            a = a || [];
            a.unshift([ "$provide", function(a) {
                a.value("$rootElement", b);
            } ]);
            a.unshift("ng");
            c = gc(a);
            c.invoke([ "$rootScope", "$rootElement", "$compile", "$injector", "$animate", function(a, b, c, d, e) {
                a.$apply(function() {
                    b.data("$injector", d);
                    c(b)(a);
                });
            } ]);
            return c;
        }, d = /^NG_DEFER_BOOTSTRAP!/;
        if (Q && !d.test(Q.name)) return c();
        Q.name = Q.name.replace(d, "");
        Ua.resumeBootstrap = function(b) {
            r(b, function(b) {
                a.push(b);
            });
            c();
        };
    }
    function kb(b, a) {
        a = a || "_";
        return b.replace(Yc, function(b, d) {
            return (d ? a : "") + b.toLowerCase();
        });
    }
    function Db(b, a, c) {
        if (!b) throw Sa("areq", a || "?", c || "required");
        return b;
    }
    function Va(b, a, c) {
        c && H(b) && (b = b[b.length - 1]);
        Db(P(b), a, "not a function, got " + (b && "object" === typeof b ? b.constructor.name || "Object" : typeof b));
        return b;
    }
    function Ca(b, a) {
        if ("hasOwnProperty" === b) throw Sa("badname", a);
    }
    function hc(b, a, c) {
        if (!a) return b;
        a = a.split(".");
        for (var d, e = b, f = a.length, g = 0; g < f; g++) d = a[g], b && (b = (e = b)[d]);
        return !c && P(b) ? Bb(e, b) : b;
    }
    function Eb(b) {
        var a = b[0];
        b = b[b.length - 1];
        if (a === b) return u(a);
        var c = [ a ];
        do {
            a = a.nextSibling;
            if (!a) break;
            c.push(a);
        } while (a !== b);
        return u(c);
    }
    function Zc(b) {
        var a = x("$injector"), c = x("ng");
        b = b.angular || (b.angular = {});
        b.$$minErr = b.$$minErr || x;
        return b.module || (b.module = function() {
            var b = {};
            return function(e, f, g) {
                if ("hasOwnProperty" === e) throw c("badname", "module");
                f && b.hasOwnProperty(e) && (b[e] = null);
                return b[e] || (b[e] = function() {
                    function b(a, d, e) {
                        return function() {
                            c[e || "push"]([ a, d, arguments ]);
                            return n;
                        };
                    }
                    if (!f) throw a("nomod", e);
                    var c = [], d = [], l = b("$injector", "invoke"), n = {
                        _invokeQueue: c,
                        _runBlocks: d,
                        requires: f,
                        name: e,
                        provider: b("$provide", "provider"),
                        factory: b("$provide", "factory"),
                        service: b("$provide", "service"),
                        value: b("$provide", "value"),
                        constant: b("$provide", "constant", "unshift"),
                        animation: b("$animateProvider", "register"),
                        filter: b("$filterProvider", "register"),
                        controller: b("$controllerProvider", "register"),
                        directive: b("$compileProvider", "directive"),
                        config: l,
                        run: function(a) {
                            d.push(a);
                            return this;
                        }
                    };
                    g && l(g);
                    return n;
                }());
            };
        }());
    }
    function $c(b) {
        B(b, {
            bootstrap: fc,
            copy: Ha,
            extend: B,
            equals: za,
            element: u,
            forEach: r,
            injector: gc,
            noop: y,
            bind: Bb,
            toJson: ta,
            fromJson: cc,
            identity: Ga,
            isUndefined: D,
            isDefined: A,
            isString: z,
            isFunction: P,
            isObject: T,
            isNumber: Ab,
            isElement: Uc,
            isArray: H,
            version: ad,
            isDate: sa,
            lowercase: N,
            uppercase: Ia,
            callbacks: {
                counter: 0
            },
            $$minErr: x,
            $$csp: Wa
        });
        Xa = Zc(Q);
        try {
            Xa("ngLocale");
        } catch (a) {
            Xa("ngLocale", []).provider("$locale", bd);
        }
        Xa("ng", [ "ngLocale" ], [ "$provide", function(a) {
            a.provider({
                $$sanitizeUri: cd
            });
            a.provider("$compile", ic).directive({
                a: dd,
                input: jc,
                textarea: jc,
                form: ed,
                script: fd,
                select: gd,
                style: hd,
                option: id,
                ngBind: jd,
                ngBindHtml: kd,
                ngBindTemplate: ld,
                ngClass: md,
                ngClassEven: nd,
                ngClassOdd: od,
                ngCloak: pd,
                ngController: qd,
                ngForm: rd,
                ngHide: sd,
                ngIf: td,
                ngInclude: ud,
                ngInit: vd,
                ngNonBindable: wd,
                ngPluralize: xd,
                ngRepeat: yd,
                ngShow: zd,
                ngStyle: Ad,
                ngSwitch: Bd,
                ngSwitchWhen: Cd,
                ngSwitchDefault: Dd,
                ngOptions: Ed,
                ngTransclude: Fd,
                ngModel: Gd,
                ngList: Hd,
                ngChange: Id,
                required: kc,
                ngRequired: kc,
                ngValue: Jd
            }).directive({
                ngInclude: Kd
            }).directive(Fb).directive(lc);
            a.provider({
                $anchorScroll: Ld,
                $animate: Md,
                $browser: Nd,
                $cacheFactory: Od,
                $controller: Pd,
                $document: Qd,
                $exceptionHandler: Rd,
                $filter: mc,
                $interpolate: Sd,
                $interval: Td,
                $http: Ud,
                $httpBackend: Vd,
                $location: Wd,
                $log: Xd,
                $parse: Yd,
                $rootScope: Zd,
                $q: $d,
                $sce: ae,
                $sceDelegate: be,
                $sniffer: ce,
                $templateCache: de,
                $timeout: ee,
                $window: fe,
                $$rAF: ge,
                $$asyncCallback: he
            });
        } ]);
    }
    function Ya(b) {
        return b.replace(ie, function(a, b, d, e) {
            return e ? d.toUpperCase() : d;
        }).replace(je, "Moz$1");
    }
    function Gb(b, a, c, d) {
        function e(b) {
            var e = c && b ? [ this.filter(b) ] : [ this ], m = a, h, l, n, p, q, s;
            if (!d || null != b) for (;e.length; ) for (h = e.shift(), l = 0, n = h.length; l < n; l++) for (p = u(h[l]), 
            m ? p.triggerHandler("$destroy") : m = !m, q = 0, p = (s = p.children()).length; q < p; q++) e.push(Da(s[q]));
            return f.apply(this, arguments);
        }
        var f = Da.fn[b], f = f.$original || f;
        e.$original = f;
        Da.fn[b] = e;
    }
    function S(b) {
        if (b instanceof S) return b;
        z(b) && (b = aa(b));
        if (!(this instanceof S)) {
            if (z(b) && "<" != b.charAt(0)) throw Hb("nosel");
            return new S(b);
        }
        if (z(b)) {
            var a = b;
            b = X;
            var c;
            if (c = ke.exec(a)) b = [ b.createElement(c[1]) ]; else {
                var d = b, e;
                b = d.createDocumentFragment();
                c = [];
                if (Ib.test(a)) {
                    d = b.appendChild(d.createElement("div"));
                    e = (le.exec(a) || [ "", "" ])[1].toLowerCase();
                    e = ba[e] || ba._default;
                    d.innerHTML = "<div>&#160;</div>" + e[1] + a.replace(me, "<$1></$2>") + e[2];
                    d.removeChild(d.firstChild);
                    for (a = e[0]; a--; ) d = d.lastChild;
                    a = 0;
                    for (e = d.childNodes.length; a < e; ++a) c.push(d.childNodes[a]);
                    d = b.firstChild;
                    d.textContent = "";
                } else c.push(d.createTextNode(a));
                b.textContent = "";
                b.innerHTML = "";
                b = c;
            }
            Jb(this, b);
            u(X.createDocumentFragment()).append(this);
        } else Jb(this, b);
    }
    function Kb(b) {
        return b.cloneNode(!0);
    }
    function Ja(b) {
        Lb(b);
        var a = 0;
        for (b = b.childNodes || []; a < b.length; a++) Ja(b[a]);
    }
    function nc(b, a, c, d) {
        if (A(d)) throw Hb("offargs");
        var e = ma(b, "events");
        ma(b, "handle") && (D(a) ? r(e, function(a, c) {
            Za(b, c, a);
            delete e[c];
        }) : r(a.split(" "), function(a) {
            D(c) ? (Za(b, a, e[a]), delete e[a]) : Ra(e[a] || [], c);
        }));
    }
    function Lb(b, a) {
        var c = b.ng339, d = $a[c];
        d && (a ? delete $a[c].data[a] : (d.handle && (d.events.$destroy && d.handle({}, "$destroy"), 
        nc(b)), delete $a[c], b.ng339 = t));
    }
    function ma(b, a, c) {
        var d = b.ng339, d = $a[d || -1];
        if (A(c)) d || (b.ng339 = d = ++ne, d = $a[d] = {}), d[a] = c; else return d && d[a];
    }
    function Mb(b, a, c) {
        var d = ma(b, "data"), e = A(c), f = !e && A(a), g = f && !T(a);
        d || g || ma(b, "data", d = {});
        if (e) d[a] = c; else if (f) {
            if (g) return d && d[a];
            B(d, a);
        } else return d;
    }
    function Nb(b, a) {
        return b.getAttribute ? -1 < (" " + (b.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + a + " ") : !1;
    }
    function lb(b, a) {
        a && b.setAttribute && r(a.split(" "), function(a) {
            b.setAttribute("class", aa((" " + (b.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + aa(a) + " ", " ")));
        });
    }
    function mb(b, a) {
        if (a && b.setAttribute) {
            var c = (" " + (b.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");
            r(a.split(" "), function(a) {
                a = aa(a);
                -1 === c.indexOf(" " + a + " ") && (c += a + " ");
            });
            b.setAttribute("class", aa(c));
        }
    }
    function Jb(b, a) {
        if (a) {
            a = a.nodeName || !A(a.length) || Fa(a) ? [ a ] : a;
            for (var c = 0; c < a.length; c++) b.push(a[c]);
        }
    }
    function oc(b, a) {
        return nb(b, "$" + (a || "ngController") + "Controller");
    }
    function nb(b, a, c) {
        9 == b.nodeType && (b = b.documentElement);
        for (a = H(a) ? a : [ a ]; b; ) {
            for (var d = 0, e = a.length; d < e; d++) if ((c = u.data(b, a[d])) !== t) return c;
            b = b.parentNode || 11 === b.nodeType && b.host;
        }
    }
    function pc(b) {
        for (var a = 0, c = b.childNodes; a < c.length; a++) Ja(c[a]);
        for (;b.firstChild; ) b.removeChild(b.firstChild);
    }
    function qc(b, a) {
        var c = ob[a.toLowerCase()];
        return c && rc[b.nodeName] && c;
    }
    function oe(b, a) {
        var c = function(c, e) {
            c.preventDefault || (c.preventDefault = function() {
                c.returnValue = !1;
            });
            c.stopPropagation || (c.stopPropagation = function() {
                c.cancelBubble = !0;
            });
            c.target || (c.target = c.srcElement || X);
            if (D(c.defaultPrevented)) {
                var f = c.preventDefault;
                c.preventDefault = function() {
                    c.defaultPrevented = !0;
                    f.call(c);
                };
                c.defaultPrevented = !1;
            }
            c.isDefaultPrevented = function() {
                return c.defaultPrevented || !1 === c.returnValue;
            };
            var g = ga(a[e || c.type] || []);
            r(g, function(a) {
                a.call(b, c);
            });
            8 >= R ? (c.preventDefault = null, c.stopPropagation = null, c.isDefaultPrevented = null) : (delete c.preventDefault, 
            delete c.stopPropagation, delete c.isDefaultPrevented);
        };
        c.elem = b;
        return c;
    }
    function Ka(b, a) {
        var c = typeof b, d;
        "function" == c || "object" == c && null !== b ? "function" == typeof (d = b.$$hashKey) ? d = b.$$hashKey() : d === t && (d = b.$$hashKey = (a || gb)()) : d = b;
        return c + ":" + d;
    }
    function ab(b, a) {
        if (a) {
            var c = 0;
            this.nextUid = function() {
                return ++c;
            };
        }
        r(b, this.put, this);
    }
    function sc(b) {
        var a, c;
        "function" === typeof b ? (a = b.$inject) || (a = [], b.length && (c = b.toString().replace(pe, ""), 
        c = c.match(qe), r(c[1].split(re), function(b) {
            b.replace(se, function(b, c, d) {
                a.push(d);
            });
        })), b.$inject = a) : H(b) ? (c = b.length - 1, Va(b[c], "fn"), a = b.slice(0, c)) : Va(b, "fn", !0);
        return a;
    }
    function gc(b) {
        function a(a) {
            return function(b, c) {
                if (T(b)) r(b, $b(a)); else return a(b, c);
            };
        }
        function c(a, b) {
            Ca(a, "service");
            if (P(b) || H(b)) b = n.instantiate(b);
            if (!b.$get) throw bb("pget", a);
            return l[a + k] = b;
        }
        function d(a, b) {
            return c(a, {
                $get: b
            });
        }
        function e(a) {
            var b = [], c, d, f, k;
            r(a, function(a) {
                if (!h.get(a)) {
                    h.put(a, !0);
                    try {
                        if (z(a)) for (c = Xa(a), b = b.concat(e(c.requires)).concat(c._runBlocks), d = c._invokeQueue, 
                        f = 0, k = d.length; f < k; f++) {
                            var g = d[f], m = n.get(g[0]);
                            m[g[1]].apply(m, g[2]);
                        } else P(a) ? b.push(n.invoke(a)) : H(a) ? b.push(n.invoke(a)) : Va(a, "module");
                    } catch (l) {
                        throw H(a) && (a = a[a.length - 1]), l.message && (l.stack && -1 == l.stack.indexOf(l.message)) && (l = l.message + "\n" + l.stack), 
                        bb("modulerr", a, l.stack || l.message || l);
                    }
                }
            });
            return b;
        }
        function f(a, b) {
            function c(d) {
                if (a.hasOwnProperty(d)) {
                    if (a[d] === g) throw bb("cdep", d + " <- " + m.join(" <- "));
                    return a[d];
                }
                try {
                    return m.unshift(d), a[d] = g, a[d] = b(d);
                } catch (e) {
                    throw a[d] === g && delete a[d], e;
                } finally {
                    m.shift();
                }
            }
            function d(a, b, e) {
                var f = [], k = sc(a), g, m, h;
                m = 0;
                for (g = k.length; m < g; m++) {
                    h = k[m];
                    if ("string" !== typeof h) throw bb("itkn", h);
                    f.push(e && e.hasOwnProperty(h) ? e[h] : c(h));
                }
                H(a) && (a = a[g]);
                return a.apply(b, f);
            }
            return {
                invoke: d,
                instantiate: function(a, b) {
                    var c = function() {}, e;
                    c.prototype = (H(a) ? a[a.length - 1] : a).prototype;
                    c = new c();
                    e = d(a, c, b);
                    return T(e) || P(e) ? e : c;
                },
                get: c,
                annotate: sc,
                has: function(b) {
                    return l.hasOwnProperty(b + k) || a.hasOwnProperty(b);
                }
            };
        }
        var g = {}, k = "Provider", m = [], h = new ab([], !0), l = {
            $provide: {
                provider: a(c),
                factory: a(d),
                service: a(function(a, b) {
                    return d(a, [ "$injector", function(a) {
                        return a.instantiate(b);
                    } ]);
                }),
                value: a(function(a, b) {
                    return d(a, $(b));
                }),
                constant: a(function(a, b) {
                    Ca(a, "constant");
                    l[a] = b;
                    p[a] = b;
                }),
                decorator: function(a, b) {
                    var c = n.get(a + k), d = c.$get;
                    c.$get = function() {
                        var a = q.invoke(d, c);
                        return q.invoke(b, null, {
                            $delegate: a
                        });
                    };
                }
            }
        }, n = l.$injector = f(l, function() {
            throw bb("unpr", m.join(" <- "));
        }), p = {}, q = p.$injector = f(p, function(a) {
            a = n.get(a + k);
            return q.invoke(a.$get, a);
        });
        r(e(b), function(a) {
            q.invoke(a || y);
        });
        return q;
    }
    function Ld() {
        var b = !0;
        this.disableAutoScrolling = function() {
            b = !1;
        };
        this.$get = [ "$window", "$location", "$rootScope", function(a, c, d) {
            function e(a) {
                var b = null;
                r(a, function(a) {
                    b || "a" !== N(a.nodeName) || (b = a);
                });
                return b;
            }
            function f() {
                var b = c.hash(), d;
                b ? (d = g.getElementById(b)) ? d.scrollIntoView() : (d = e(g.getElementsByName(b))) ? d.scrollIntoView() : "top" === b && a.scrollTo(0, 0) : a.scrollTo(0, 0);
            }
            var g = a.document;
            b && d.$watch(function() {
                return c.hash();
            }, function() {
                d.$evalAsync(f);
            });
            return f;
        } ];
    }
    function he() {
        this.$get = [ "$$rAF", "$timeout", function(b, a) {
            return b.supported ? function(a) {
                return b(a);
            } : function(b) {
                return a(b, 0, !1);
            };
        } ];
    }
    function te(b, a, c, d) {
        function e(a) {
            try {
                a.apply(null, Aa.call(arguments, 1));
            } finally {
                if (s--, 0 === s) for (;L.length; ) try {
                    L.pop()();
                } catch (b) {
                    c.error(b);
                }
            }
        }
        function f(a, b) {
            (function ca() {
                r(v, function(a) {
                    a();
                });
                C = b(ca, a);
            })();
        }
        function g() {
            w = null;
            O != k.url() && (O = k.url(), r(da, function(a) {
                a(k.url());
            }));
        }
        var k = this, m = a[0], h = b.location, l = b.history, n = b.setTimeout, p = b.clearTimeout, q = {};
        k.isMock = !1;
        var s = 0, L = [];
        k.$$completeOutstandingRequest = e;
        k.$$incOutstandingRequestCount = function() {
            s++;
        };
        k.notifyWhenNoOutstandingRequests = function(a) {
            r(v, function(a) {
                a();
            });
            0 === s ? a() : L.push(a);
        };
        var v = [], C;
        k.addPollFn = function(a) {
            D(C) && f(100, n);
            v.push(a);
            return a;
        };
        var O = h.href, I = a.find("base"), w = null;
        k.url = function(a, c) {
            h !== b.location && (h = b.location);
            l !== b.history && (l = b.history);
            if (a) {
                if (O != a) return O = a, d.history ? c ? l.replaceState(null, "", a) : (l.pushState(null, "", a), 
                I.attr("href", I.attr("href"))) : (w = a, c ? h.replace(a) : h.href = a), k;
            } else return w || h.href.replace(/%27/g, "'");
        };
        var da = [], K = !1;
        k.onUrlChange = function(a) {
            if (!K) {
                if (d.history) u(b).on("popstate", g);
                if (d.hashchange) u(b).on("hashchange", g); else k.addPollFn(g);
                K = !0;
            }
            da.push(a);
            return a;
        };
        k.baseHref = function() {
            var a = I.attr("href");
            return a ? a.replace(/^(https?\:)?\/\/[^\/]*/, "") : "";
        };
        var W = {}, ea = "", J = k.baseHref();
        k.cookies = function(a, b) {
            var d, e, f, k;
            if (a) b === t ? m.cookie = escape(a) + "=;path=" + J + ";expires=Thu, 01 Jan 1970 00:00:00 GMT" : z(b) && (d = (m.cookie = escape(a) + "=" + escape(b) + ";path=" + J).length + 1, 
            4096 < d && c.warn("Cookie '" + a + "' possibly not set or overflowed because it was too large (" + d + " > 4096 bytes)!")); else {
                if (m.cookie !== ea) for (ea = m.cookie, d = ea.split("; "), W = {}, f = 0; f < d.length; f++) e = d[f], 
                k = e.indexOf("="), 0 < k && (a = unescape(e.substring(0, k)), W[a] === t && (W[a] = unescape(e.substring(k + 1))));
                return W;
            }
        };
        k.defer = function(a, b) {
            var c;
            s++;
            c = n(function() {
                delete q[c];
                e(a);
            }, b || 0);
            q[c] = !0;
            return c;
        };
        k.defer.cancel = function(a) {
            return q[a] ? (delete q[a], p(a), e(y), !0) : !1;
        };
    }
    function Nd() {
        this.$get = [ "$window", "$log", "$sniffer", "$document", function(b, a, c, d) {
            return new te(b, d, a, c);
        } ];
    }
    function Od() {
        this.$get = function() {
            function b(b, d) {
                function e(a) {
                    a != n && (p ? p == a && (p = a.n) : p = a, f(a.n, a.p), f(a, n), n = a, n.n = null);
                }
                function f(a, b) {
                    a != b && (a && (a.p = b), b && (b.n = a));
                }
                if (b in a) throw x("$cacheFactory")("iid", b);
                var g = 0, k = B({}, d, {
                    id: b
                }), m = {}, h = d && d.capacity || Number.MAX_VALUE, l = {}, n = null, p = null;
                return a[b] = {
                    put: function(a, b) {
                        if (h < Number.MAX_VALUE) {
                            var c = l[a] || (l[a] = {
                                key: a
                            });
                            e(c);
                        }
                        if (!D(b)) return a in m || g++, m[a] = b, g > h && this.remove(p.key), b;
                    },
                    get: function(a) {
                        if (h < Number.MAX_VALUE) {
                            var b = l[a];
                            if (!b) return;
                            e(b);
                        }
                        return m[a];
                    },
                    remove: function(a) {
                        if (h < Number.MAX_VALUE) {
                            var b = l[a];
                            if (!b) return;
                            b == n && (n = b.p);
                            b == p && (p = b.n);
                            f(b.n, b.p);
                            delete l[a];
                        }
                        delete m[a];
                        g--;
                    },
                    removeAll: function() {
                        m = {};
                        g = 0;
                        l = {};
                        n = p = null;
                    },
                    destroy: function() {
                        l = k = m = null;
                        delete a[b];
                    },
                    info: function() {
                        return B({}, k, {
                            size: g
                        });
                    }
                };
            }
            var a = {};
            b.info = function() {
                var b = {};
                r(a, function(a, e) {
                    b[e] = a.info();
                });
                return b;
            };
            b.get = function(b) {
                return a[b];
            };
            return b;
        };
    }
    function de() {
        this.$get = [ "$cacheFactory", function(b) {
            return b("templates");
        } ];
    }
    function ic(b, a) {
        var c = {}, d = "Directive", e = /^\s*directive\:\s*([\d\w_\-]+)\s+(.*)$/, f = /(([\d\w_\-]+)(?:\:([^;]+))?;?)/, g = /^(on[a-z]+|formaction)$/;
        this.directive = function m(a, e) {
            Ca(a, "directive");
            z(a) ? (Db(e, "directiveFactory"), c.hasOwnProperty(a) || (c[a] = [], b.factory(a + d, [ "$injector", "$exceptionHandler", function(b, d) {
                var e = [];
                r(c[a], function(c, f) {
                    try {
                        var g = b.invoke(c);
                        P(g) ? g = {
                            compile: $(g)
                        } : !g.compile && g.link && (g.compile = $(g.link));
                        g.priority = g.priority || 0;
                        g.index = f;
                        g.name = g.name || a;
                        g.require = g.require || g.controller && g.name;
                        g.restrict = g.restrict || "A";
                        e.push(g);
                    } catch (m) {
                        d(m);
                    }
                });
                return e;
            } ])), c[a].push(e)) : r(a, $b(m));
            return this;
        };
        this.aHrefSanitizationWhitelist = function(b) {
            return A(b) ? (a.aHrefSanitizationWhitelist(b), this) : a.aHrefSanitizationWhitelist();
        };
        this.imgSrcSanitizationWhitelist = function(b) {
            return A(b) ? (a.imgSrcSanitizationWhitelist(b), this) : a.imgSrcSanitizationWhitelist();
        };
        this.$get = [ "$injector", "$interpolate", "$exceptionHandler", "$http", "$templateCache", "$parse", "$controller", "$rootScope", "$document", "$sce", "$animate", "$$sanitizeUri", function(a, b, l, n, p, q, s, L, v, C, O, I) {
            function w(a, b, c, d, e) {
                a instanceof u || (a = u(a));
                r(a, function(b, c) {
                    3 == b.nodeType && b.nodeValue.match(/\S+/) && (a[c] = u(b).wrap("<span></span>").parent()[0]);
                });
                var f = K(a, b, a, c, d, e);
                da(a, "ng-scope");
                return function(b, c, d, e) {
                    Db(b, "scope");
                    var g = c ? La.clone.call(a) : a;
                    r(d, function(a, b) {
                        g.data("$" + b + "Controller", a);
                    });
                    d = 0;
                    for (var m = g.length; d < m; d++) {
                        var h = g[d].nodeType;
                        1 !== h && 9 !== h || g.eq(d).data("$scope", b);
                    }
                    c && c(g, b);
                    f && f(b, g, g, e);
                    return g;
                };
            }
            function da(a, b) {
                try {
                    a.addClass(b);
                } catch (c) {}
            }
            function K(a, b, c, d, e, f) {
                function g(a, c, d, e) {
                    var f, h, l, q, n, p, s;
                    f = c.length;
                    var M = Array(f);
                    for (q = 0; q < f; q++) M[q] = c[q];
                    p = q = 0;
                    for (n = m.length; q < n; p++) h = M[p], c = m[q++], f = m[q++], c ? (c.scope ? (l = a.$new(), 
                    u.data(h, "$scope", l)) : l = a, s = c.transcludeOnThisElement ? W(a, c.transclude, e) : !c.templateOnThisElement && e ? e : !e && b ? W(a, b) : null, 
                    c(f, l, h, d, s)) : f && f(a, h.childNodes, t, e);
                }
                for (var m = [], h, l, q, n, p = 0; p < a.length; p++) h = new Ob(), l = ea(a[p], [], h, 0 === p ? d : t, e), 
                (f = l.length ? F(l, a[p], h, b, c, null, [], [], f) : null) && f.scope && da(h.$$element, "ng-scope"), 
                h = f && f.terminal || !(q = a[p].childNodes) || !q.length ? null : K(q, f ? (f.transcludeOnThisElement || !f.templateOnThisElement) && f.transclude : b), 
                m.push(f, h), n = n || f || h, f = null;
                return n ? g : null;
            }
            function W(a, b, c) {
                return function(d, e, f) {
                    var g = !1;
                    d || (d = a.$new(), g = d.$$transcluded = !0);
                    e = b(d, e, f, c);
                    if (g) e.on("$destroy", function() {
                        d.$destroy();
                    });
                    return e;
                };
            }
            function ea(a, b, c, d, g) {
                var h = c.$attr, m;
                switch (a.nodeType) {
                  case 1:
                    ca(b, na(Ma(a).toLowerCase()), "E", d, g);
                    for (var l, q, n, p = a.attributes, s = 0, L = p && p.length; s < L; s++) {
                        var C = !1, O = !1;
                        l = p[s];
                        if (!R || 8 <= R || l.specified) {
                            m = l.name;
                            q = aa(l.value);
                            l = na(m);
                            if (n = V.test(l)) m = kb(l.substr(6), "-");
                            var v = l.replace(/(Start|End)$/, "");
                            l === v + "Start" && (C = m, O = m.substr(0, m.length - 5) + "end", m = m.substr(0, m.length - 6));
                            l = na(m.toLowerCase());
                            h[l] = m;
                            if (n || !c.hasOwnProperty(l)) c[l] = q, qc(a, l) && (c[l] = !0);
                            Q(a, b, q, l);
                            ca(b, l, "A", d, g, C, O);
                        }
                    }
                    a = a.className;
                    if (z(a) && "" !== a) for (;m = f.exec(a); ) l = na(m[2]), ca(b, l, "C", d, g) && (c[l] = aa(m[3])), 
                    a = a.substr(m.index + m[0].length);
                    break;

                  case 3:
                    x(b, a.nodeValue);
                    break;

                  case 8:
                    try {
                        if (m = e.exec(a.nodeValue)) l = na(m[1]), ca(b, l, "M", d, g) && (c[l] = aa(m[2]));
                    } catch (w) {}
                }
                b.sort(D);
                return b;
            }
            function J(a, b, c) {
                var d = [], e = 0;
                if (b && a.hasAttribute && a.hasAttribute(b)) {
                    do {
                        if (!a) throw ia("uterdir", b, c);
                        1 == a.nodeType && (a.hasAttribute(b) && e++, a.hasAttribute(c) && e--);
                        d.push(a);
                        a = a.nextSibling;
                    } while (0 < e);
                } else d.push(a);
                return u(d);
            }
            function E(a, b, c) {
                return function(d, e, f, g, m) {
                    e = J(e[0], b, c);
                    return a(d, e, f, g, m);
                };
            }
            function F(a, c, d, e, f, g, m, n, p) {
                function L(a, b, c, d) {
                    if (a) {
                        c && (a = E(a, c, d));
                        a.require = G.require;
                        a.directiveName = oa;
                        if (K === G || G.$$isolateScope) a = tc(a, {
                            isolateScope: !0
                        });
                        m.push(a);
                    }
                    if (b) {
                        c && (b = E(b, c, d));
                        b.require = G.require;
                        b.directiveName = oa;
                        if (K === G || G.$$isolateScope) b = tc(b, {
                            isolateScope: !0
                        });
                        n.push(b);
                    }
                }
                function C(a, b, c, d) {
                    var e, f = "data", g = !1;
                    if (z(b)) {
                        for (;"^" == (e = b.charAt(0)) || "?" == e; ) b = b.substr(1), "^" == e && (f = "inheritedData"), 
                        g = g || "?" == e;
                        e = null;
                        d && "data" === f && (e = d[b]);
                        e = e || c[f]("$" + b + "Controller");
                        if (!e && !g) throw ia("ctreq", b, a);
                    } else H(b) && (e = [], r(b, function(b) {
                        e.push(C(a, b, c, d));
                    }));
                    return e;
                }
                function O(a, e, f, g, p) {
                    function L(a, b) {
                        var c;
                        2 > arguments.length && (b = a, a = t);
                        Ea && (c = ea);
                        return p(a, b, c);
                    }
                    var v, M, w, I, E, J, ea = {}, qb;
                    v = c === f ? d : ga(d, new Ob(u(f), d.$attr));
                    M = v.$$element;
                    if (K) {
                        var Na = /^\s*([@=&])(\??)\s*(\w*)\s*$/;
                        J = e.$new(!0);
                        !F || F !== K && F !== K.$$originalDirective ? M.data("$isolateScopeNoTemplate", J) : M.data("$isolateScope", J);
                        da(M, "ng-isolate-scope");
                        r(K.scope, function(a, c) {
                            var d = a.match(Na) || [], f = d[3] || c, g = "?" == d[2], d = d[1], m, l, n, p;
                            J.$$isolateBindings[c] = d + f;
                            switch (d) {
                              case "@":
                                v.$observe(f, function(a) {
                                    J[c] = a;
                                });
                                v.$$observers[f].$$scope = e;
                                v[f] && (J[c] = b(v[f])(e));
                                break;

                              case "=":
                                if (g && !v[f]) break;
                                l = q(v[f]);
                                p = l.literal ? za : function(a, b) {
                                    return a === b || a !== a && b !== b;
                                };
                                n = l.assign || function() {
                                    m = J[c] = l(e);
                                    throw ia("nonassign", v[f], K.name);
                                };
                                m = J[c] = l(e);
                                J.$watch(function() {
                                    var a = l(e);
                                    p(a, J[c]) || (p(a, m) ? n(e, a = J[c]) : J[c] = a);
                                    return m = a;
                                }, null, l.literal);
                                break;

                              case "&":
                                l = q(v[f]);
                                J[c] = function(a) {
                                    return l(e, a);
                                };
                                break;

                              default:
                                throw ia("iscp", K.name, c, a);
                            }
                        });
                    }
                    qb = p && L;
                    W && r(W, function(a) {
                        var b = {
                            $scope: a === K || a.$$isolateScope ? J : e,
                            $element: M,
                            $attrs: v,
                            $transclude: qb
                        }, c;
                        E = a.controller;
                        "@" == E && (E = v[a.name]);
                        c = s(E, b);
                        ea[a.name] = c;
                        Ea || M.data("$" + a.name + "Controller", c);
                        a.controllerAs && (b.$scope[a.controllerAs] = c);
                    });
                    g = 0;
                    for (w = m.length; g < w; g++) try {
                        I = m[g], I(I.isolateScope ? J : e, M, v, I.require && C(I.directiveName, I.require, M, ea), qb);
                    } catch (ca) {
                        l(ca, ha(M));
                    }
                    g = e;
                    K && (K.template || null === K.templateUrl) && (g = J);
                    a && a(g, f.childNodes, t, p);
                    for (g = n.length - 1; 0 <= g; g--) try {
                        I = n[g], I(I.isolateScope ? J : e, M, v, I.require && C(I.directiveName, I.require, M, ea), qb);
                    } catch (pb) {
                        l(pb, ha(M));
                    }
                }
                p = p || {};
                for (var v = -Number.MAX_VALUE, I, W = p.controllerDirectives, K = p.newIsolateScopeDirective, F = p.templateDirective, ca = p.nonTlbTranscludeDirective, D = !1, B = !1, Ea = p.hasElementTranscludeDirective, x = d.$$element = u(c), G, oa, U, S = e, R, Q = 0, pa = a.length; Q < pa; Q++) {
                    G = a[Q];
                    var V = G.$$start, Y = G.$$end;
                    V && (x = J(c, V, Y));
                    U = t;
                    if (v > G.priority) break;
                    if (U = G.scope) I = I || G, G.templateUrl || (N("new/isolated scope", K, G, x), 
                    T(U) && (K = G));
                    oa = G.name;
                    !G.templateUrl && G.controller && (U = G.controller, W = W || {}, N("'" + oa + "' controller", W[oa], G, x), 
                    W[oa] = G);
                    if (U = G.transclude) D = !0, G.$$tlb || (N("transclusion", ca, G, x), ca = G), 
                    "element" == U ? (Ea = !0, v = G.priority, U = x, x = d.$$element = u(X.createComment(" " + oa + ": " + d[oa] + " ")), 
                    c = x[0], Na(f, Aa.call(U, 0), c), S = w(U, e, v, g && g.name, {
                        nonTlbTranscludeDirective: ca
                    })) : (U = u(Kb(c)).contents(), x.empty(), S = w(U, e));
                    if (G.template) if (B = !0, N("template", F, G, x), F = G, U = P(G.template) ? G.template(x, d) : G.template, 
                    U = Z(U), G.replace) {
                        g = G;
                        U = Ib.test(U) ? u(aa(U)) : [];
                        c = U[0];
                        if (1 != U.length || 1 !== c.nodeType) throw ia("tplrt", oa, "");
                        Na(f, x, c);
                        pa = {
                            $attr: {}
                        };
                        U = ea(c, [], pa);
                        var $ = a.splice(Q + 1, a.length - (Q + 1));
                        K && pb(U);
                        a = a.concat(U).concat($);
                        A(d, pa);
                        pa = a.length;
                    } else x.html(U);
                    if (G.templateUrl) B = !0, N("template", F, G, x), F = G, G.replace && (g = G), 
                    O = y(a.splice(Q, a.length - Q), x, d, f, D && S, m, n, {
                        controllerDirectives: W,
                        newIsolateScopeDirective: K,
                        templateDirective: F,
                        nonTlbTranscludeDirective: ca
                    }), pa = a.length; else if (G.compile) try {
                        R = G.compile(x, d, S), P(R) ? L(null, R, V, Y) : R && L(R.pre, R.post, V, Y);
                    } catch (ba) {
                        l(ba, ha(x));
                    }
                    G.terminal && (O.terminal = !0, v = Math.max(v, G.priority));
                }
                O.scope = I && !0 === I.scope;
                O.transcludeOnThisElement = D;
                O.templateOnThisElement = B;
                O.transclude = S;
                p.hasElementTranscludeDirective = Ea;
                return O;
            }
            function pb(a) {
                for (var b = 0, c = a.length; b < c; b++) a[b] = bc(a[b], {
                    $$isolateScope: !0
                });
            }
            function ca(b, e, f, g, h, q, n) {
                if (e === h) return null;
                h = null;
                if (c.hasOwnProperty(e)) {
                    var p;
                    e = a.get(e + d);
                    for (var s = 0, v = e.length; s < v; s++) try {
                        p = e[s], (g === t || g > p.priority) && -1 != p.restrict.indexOf(f) && (q && (p = bc(p, {
                            $$start: q,
                            $$end: n
                        })), b.push(p), h = p);
                    } catch (L) {
                        l(L);
                    }
                }
                return h;
            }
            function A(a, b) {
                var c = b.$attr, d = a.$attr, e = a.$$element;
                r(a, function(d, e) {
                    "$" != e.charAt(0) && (b[e] && b[e] !== d && (d += ("style" === e ? ";" : " ") + b[e]), 
                    a.$set(e, d, !0, c[e]));
                });
                r(b, function(b, f) {
                    "class" == f ? (da(e, b), a["class"] = (a["class"] ? a["class"] + " " : "") + b) : "style" == f ? (e.attr("style", e.attr("style") + ";" + b), 
                    a.style = (a.style ? a.style + ";" : "") + b) : "$" == f.charAt(0) || a.hasOwnProperty(f) || (a[f] = b, 
                    d[f] = c[f]);
                });
            }
            function y(a, b, c, d, e, f, g, m) {
                var h = [], l, q, s = b[0], v = a.shift(), L = B({}, v, {
                    templateUrl: null,
                    transclude: null,
                    replace: null,
                    $$originalDirective: v
                }), O = P(v.templateUrl) ? v.templateUrl(b, c) : v.templateUrl;
                b.empty();
                n.get(C.getTrustedResourceUrl(O), {
                    cache: p
                }).success(function(n) {
                    var p, C;
                    n = Z(n);
                    if (v.replace) {
                        n = Ib.test(n) ? u(aa(n)) : [];
                        p = n[0];
                        if (1 != n.length || 1 !== p.nodeType) throw ia("tplrt", v.name, O);
                        n = {
                            $attr: {}
                        };
                        Na(d, b, p);
                        var w = ea(p, [], n);
                        T(v.scope) && pb(w);
                        a = w.concat(a);
                        A(c, n);
                    } else p = s, b.html(n);
                    a.unshift(L);
                    l = F(a, p, c, e, b, v, f, g, m);
                    r(d, function(a, c) {
                        a == p && (d[c] = b[0]);
                    });
                    for (q = K(b[0].childNodes, e); h.length; ) {
                        n = h.shift();
                        C = h.shift();
                        var I = h.shift(), E = h.shift(), w = b[0];
                        if (C !== s) {
                            var J = C.className;
                            m.hasElementTranscludeDirective && v.replace || (w = Kb(p));
                            Na(I, u(C), w);
                            da(u(w), J);
                        }
                        C = l.transcludeOnThisElement ? W(n, l.transclude, E) : E;
                        l(q, n, w, d, C);
                    }
                    h = null;
                }).error(function(a, b, c, d) {
                    throw ia("tpload", d.url);
                });
                return function(a, b, c, d, e) {
                    a = e;
                    h ? (h.push(b), h.push(c), h.push(d), h.push(a)) : (l.transcludeOnThisElement && (a = W(b, l.transclude, e)), 
                    l(q, b, c, d, a));
                };
            }
            function D(a, b) {
                var c = b.priority - a.priority;
                return 0 !== c ? c : a.name !== b.name ? a.name < b.name ? -1 : 1 : a.index - b.index;
            }
            function N(a, b, c, d) {
                if (b) throw ia("multidir", b.name, c.name, a, ha(d));
            }
            function x(a, c) {
                var d = b(c, !0);
                d && a.push({
                    priority: 0,
                    compile: function(a) {
                        var b = a.parent().length;
                        b && da(a.parent(), "ng-binding");
                        return function(a, c) {
                            var e = c.parent(), f = e.data("$binding") || [];
                            f.push(d);
                            e.data("$binding", f);
                            b || da(e, "ng-binding");
                            a.$watch(d, function(a) {
                                c[0].nodeValue = a;
                            });
                        };
                    }
                });
            }
            function S(a, b) {
                if ("srcdoc" == b) return C.HTML;
                var c = Ma(a);
                if ("xlinkHref" == b || "FORM" == c && "action" == b || "IMG" != c && ("src" == b || "ngSrc" == b)) return C.RESOURCE_URL;
            }
            function Q(a, c, d, e) {
                var f = b(d, !0);
                if (f) {
                    if ("multiple" === e && "SELECT" === Ma(a)) throw ia("selmulti", ha(a));
                    c.push({
                        priority: 100,
                        compile: function() {
                            return {
                                pre: function(c, d, m) {
                                    d = m.$$observers || (m.$$observers = {});
                                    if (g.test(e)) throw ia("nodomevents");
                                    if (f = b(m[e], !0, S(a, e))) m[e] = f(c), (d[e] || (d[e] = [])).$$inter = !0, (m.$$observers && m.$$observers[e].$$scope || c).$watch(f, function(a, b) {
                                        "class" === e && a != b ? m.$updateClass(a, b) : m.$set(e, a);
                                    });
                                }
                            };
                        }
                    });
                }
            }
            function Na(a, b, c) {
                var d = b[0], e = b.length, f = d.parentNode, g, m;
                if (a) for (g = 0, m = a.length; g < m; g++) if (a[g] == d) {
                    a[g++] = c;
                    m = g + e - 1;
                    for (var h = a.length; g < h; g++, m++) m < h ? a[g] = a[m] : delete a[g];
                    a.length -= e - 1;
                    break;
                }
                f && f.replaceChild(c, d);
                a = X.createDocumentFragment();
                a.appendChild(d);
                c[u.expando] = d[u.expando];
                d = 1;
                for (e = b.length; d < e; d++) f = b[d], u(f).remove(), a.appendChild(f), delete b[d];
                b[0] = c;
                b.length = 1;
            }
            function tc(a, b) {
                return B(function() {
                    return a.apply(null, arguments);
                }, a, b);
            }
            var Ob = function(a, b) {
                this.$$element = a;
                this.$attr = b || {};
            };
            Ob.prototype = {
                $normalize: na,
                $addClass: function(a) {
                    a && 0 < a.length && O.addClass(this.$$element, a);
                },
                $removeClass: function(a) {
                    a && 0 < a.length && O.removeClass(this.$$element, a);
                },
                $updateClass: function(a, b) {
                    var c = uc(a, b), d = uc(b, a);
                    0 === c.length ? O.removeClass(this.$$element, d) : 0 === d.length ? O.addClass(this.$$element, c) : O.setClass(this.$$element, c, d);
                },
                $set: function(a, b, c, d) {
                    var e = qc(this.$$element[0], a);
                    e && (this.$$element.prop(a, b), d = e);
                    this[a] = b;
                    d ? this.$attr[a] = d : (d = this.$attr[a]) || (this.$attr[a] = d = kb(a, "-"));
                    e = Ma(this.$$element);
                    if ("A" === e && "href" === a || "IMG" === e && "src" === a) this[a] = b = I(b, "src" === a);
                    !1 !== c && (null === b || b === t ? this.$$element.removeAttr(d) : this.$$element.attr(d, b));
                    (c = this.$$observers) && r(c[a], function(a) {
                        try {
                            a(b);
                        } catch (c) {
                            l(c);
                        }
                    });
                },
                $observe: function(a, b) {
                    var c = this, d = c.$$observers || (c.$$observers = {}), e = d[a] || (d[a] = []);
                    e.push(b);
                    L.$evalAsync(function() {
                        e.$$inter || b(c[a]);
                    });
                    return b;
                }
            };
            var pa = b.startSymbol(), Ea = b.endSymbol(), Z = "{{" == pa || "}}" == Ea ? Ga : function(a) {
                return a.replace(/\{\{/g, pa).replace(/}}/g, Ea);
            }, V = /^ngAttr[A-Z]/;
            return w;
        } ];
    }
    function na(b) {
        return Ya(b.replace(ue, ""));
    }
    function uc(b, a) {
        var c = "", d = b.split(/\s+/), e = a.split(/\s+/), f = 0;
        a: for (;f < d.length; f++) {
            for (var g = d[f], k = 0; k < e.length; k++) if (g == e[k]) continue a;
            c += (0 < c.length ? " " : "") + g;
        }
        return c;
    }
    function Pd() {
        var b = {}, a = /^(\S+)(\s+as\s+(\w+))?$/;
        this.register = function(a, d) {
            Ca(a, "controller");
            T(a) ? B(b, a) : b[a] = d;
        };
        this.$get = [ "$injector", "$window", function(c, d) {
            return function(e, f) {
                var g, k, m;
                z(e) && (g = e.match(a), k = g[1], m = g[3], e = b.hasOwnProperty(k) ? b[k] : hc(f.$scope, k, !0) || hc(d, k, !0), 
                Va(e, k, !0));
                g = c.instantiate(e, f);
                if (m) {
                    if (!f || "object" !== typeof f.$scope) throw x("$controller")("noscp", k || e.name, m);
                    f.$scope[m] = g;
                }
                return g;
            };
        } ];
    }
    function Qd() {
        this.$get = [ "$window", function(b) {
            return u(b.document);
        } ];
    }
    function Rd() {
        this.$get = [ "$log", function(b) {
            return function(a, c) {
                b.error.apply(b, arguments);
            };
        } ];
    }
    function vc(b) {
        var a = {}, c, d, e;
        if (!b) return a;
        r(b.split("\n"), function(b) {
            e = b.indexOf(":");
            c = N(aa(b.substr(0, e)));
            d = aa(b.substr(e + 1));
            c && (a[c] = a[c] ? a[c] + ", " + d : d);
        });
        return a;
    }
    function wc(b) {
        var a = T(b) ? b : t;
        return function(c) {
            a || (a = vc(b));
            return c ? a[N(c)] || null : a;
        };
    }
    function xc(b, a, c) {
        if (P(c)) return c(b, a);
        r(c, function(c) {
            b = c(b, a);
        });
        return b;
    }
    function Ud() {
        var b = /^\s*(\[|\{[^\{])/, a = /[\}\]]\s*$/, c = /^\)\]\}',?\n/, d = {
            "Content-Type": "application/json;charset=utf-8"
        }, e = this.defaults = {
            transformResponse: [ function(d) {
                z(d) && (d = d.replace(c, ""), b.test(d) && a.test(d) && (d = cc(d)));
                return d;
            } ],
            transformRequest: [ function(a) {
                return T(a) && "[object File]" !== ya.call(a) && "[object Blob]" !== ya.call(a) ? ta(a) : a;
            } ],
            headers: {
                common: {
                    Accept: "application/json, text/plain, */*"
                },
                post: ga(d),
                put: ga(d),
                patch: ga(d)
            },
            xsrfCookieName: "XSRF-TOKEN",
            xsrfHeaderName: "X-XSRF-TOKEN"
        }, f = this.interceptors = [], g = this.responseInterceptors = [];
        this.$get = [ "$httpBackend", "$browser", "$cacheFactory", "$rootScope", "$q", "$injector", function(a, b, c, d, n, p) {
            function q(a) {
                function b(a) {
                    var d = B({}, a, {
                        data: xc(a.data, a.headers, c.transformResponse)
                    });
                    return 200 <= a.status && 300 > a.status ? d : n.reject(d);
                }
                var c = {
                    method: "get",
                    transformRequest: e.transformRequest,
                    transformResponse: e.transformResponse
                }, d = function(a) {
                    var b = e.headers, c = B({}, a.headers), d, f, b = B({}, b.common, b[N(a.method)]);
                    a: for (d in b) {
                        a = N(d);
                        for (f in c) if (N(f) === a) continue a;
                        c[d] = b[d];
                    }
                    (function(a) {
                        var b;
                        r(a, function(c, d) {
                            P(c) && (b = c(), null != b ? a[d] = b : delete a[d]);
                        });
                    })(c);
                    return c;
                }(a);
                B(c, a);
                c.headers = d;
                c.method = Ia(c.method);
                var f = [ function(a) {
                    d = a.headers;
                    var c = xc(a.data, wc(d), a.transformRequest);
                    D(c) && r(d, function(a, b) {
                        "content-type" === N(b) && delete d[b];
                    });
                    D(a.withCredentials) && !D(e.withCredentials) && (a.withCredentials = e.withCredentials);
                    return s(a, c, d).then(b, b);
                }, t ], g = n.when(c);
                for (r(C, function(a) {
                    (a.request || a.requestError) && f.unshift(a.request, a.requestError);
                    (a.response || a.responseError) && f.push(a.response, a.responseError);
                }); f.length; ) {
                    a = f.shift();
                    var m = f.shift(), g = g.then(a, m);
                }
                g.success = function(a) {
                    g.then(function(b) {
                        a(b.data, b.status, b.headers, c);
                    });
                    return g;
                };
                g.error = function(a) {
                    g.then(null, function(b) {
                        a(b.data, b.status, b.headers, c);
                    });
                    return g;
                };
                return g;
            }
            function s(c, f, g) {
                function h(a, b, c, e) {
                    E && (200 <= a && 300 > a ? E.put(u, [ a, b, vc(c), e ]) : E.remove(u));
                    p(b, a, c, e);
                    d.$$phase || d.$apply();
                }
                function p(a, b, d, e) {
                    b = Math.max(b, 0);
                    (200 <= b && 300 > b ? C.resolve : C.reject)({
                        data: a,
                        status: b,
                        headers: wc(d),
                        config: c,
                        statusText: e
                    });
                }
                function s() {
                    var a = Qa(q.pendingRequests, c);
                    -1 !== a && q.pendingRequests.splice(a, 1);
                }
                var C = n.defer(), r = C.promise, E, F, u = L(c.url, c.params);
                q.pendingRequests.push(c);
                r.then(s, s);
                !c.cache && !e.cache || (!1 === c.cache || "GET" !== c.method && "JSONP" !== c.method) || (E = T(c.cache) ? c.cache : T(e.cache) ? e.cache : v);
                if (E) if (F = E.get(u), A(F)) {
                    if (F && P(F.then)) return F.then(s, s), F;
                    H(F) ? p(F[1], F[0], ga(F[2]), F[3]) : p(F, 200, {}, "OK");
                } else E.put(u, r);
                D(F) && ((F = Pb(c.url) ? b.cookies()[c.xsrfCookieName || e.xsrfCookieName] : t) && (g[c.xsrfHeaderName || e.xsrfHeaderName] = F), 
                a(c.method, u, f, h, g, c.timeout, c.withCredentials, c.responseType));
                return r;
            }
            function L(a, b) {
                if (!b) return a;
                var c = [];
                Tc(b, function(a, b) {
                    null === a || D(a) || (H(a) || (a = [ a ]), r(a, function(a) {
                        T(a) && (sa(a) ? a = a.toISOString() : T(a) && (a = ta(a)));
                        c.push(Ba(b) + "=" + Ba(a));
                    }));
                });
                0 < c.length && (a += (-1 == a.indexOf("?") ? "?" : "&") + c.join("&"));
                return a;
            }
            var v = c("$http"), C = [];
            r(f, function(a) {
                C.unshift(z(a) ? p.get(a) : p.invoke(a));
            });
            r(g, function(a, b) {
                var c = z(a) ? p.get(a) : p.invoke(a);
                C.splice(b, 0, {
                    response: function(a) {
                        return c(n.when(a));
                    },
                    responseError: function(a) {
                        return c(n.reject(a));
                    }
                });
            });
            q.pendingRequests = [];
            (function(a) {
                r(arguments, function(a) {
                    q[a] = function(b, c) {
                        return q(B(c || {}, {
                            method: a,
                            url: b
                        }));
                    };
                });
            })("get", "delete", "head", "jsonp");
            (function(a) {
                r(arguments, function(a) {
                    q[a] = function(b, c, d) {
                        return q(B(d || {}, {
                            method: a,
                            url: b,
                            data: c
                        }));
                    };
                });
            })("post", "put");
            q.defaults = e;
            return q;
        } ];
    }
    function ve(b) {
        if (8 >= R && (!b.match(/^(get|post|head|put|delete|options)$/i) || !Q.XMLHttpRequest)) return new Q.ActiveXObject("Microsoft.XMLHTTP");
        if (Q.XMLHttpRequest) return new Q.XMLHttpRequest();
        throw x("$httpBackend")("noxhr");
    }
    function Vd() {
        this.$get = [ "$browser", "$window", "$document", function(b, a, c) {
            return we(b, ve, b.defer, a.angular.callbacks, c[0]);
        } ];
    }
    function we(b, a, c, d, e) {
        function f(a, b, c) {
            var f = e.createElement("script"), g = null;
            f.type = "text/javascript";
            f.src = a;
            f.async = !0;
            g = function(a) {
                Za(f, "load", g);
                Za(f, "error", g);
                e.body.removeChild(f);
                f = null;
                var k = -1, s = "unknown";
                a && ("load" !== a.type || d[b].called || (a = {
                    type: "error"
                }), s = a.type, k = "error" === a.type ? 404 : 200);
                c && c(k, s);
            };
            rb(f, "load", g);
            rb(f, "error", g);
            8 >= R && (f.onreadystatechange = function() {
                z(f.readyState) && /loaded|complete/.test(f.readyState) && (f.onreadystatechange = null, 
                g({
                    type: "load"
                }));
            });
            e.body.appendChild(f);
            return g;
        }
        var g = -1;
        return function(e, m, h, l, n, p, q, s) {
            function L() {
                C = g;
                I && I();
                w && w.abort();
            }
            function v(a, d, e, f, g) {
                K && c.cancel(K);
                I = w = null;
                0 === d && (d = e ? 200 : "file" == ua(m).protocol ? 404 : 0);
                a(1223 === d ? 204 : d, e, f, g || "");
                b.$$completeOutstandingRequest(y);
            }
            var C;
            b.$$incOutstandingRequestCount();
            m = m || b.url();
            if ("jsonp" == N(e)) {
                var O = "_" + (d.counter++).toString(36);
                d[O] = function(a) {
                    d[O].data = a;
                    d[O].called = !0;
                };
                var I = f(m.replace("JSON_CALLBACK", "angular.callbacks." + O), O, function(a, b) {
                    v(l, a, d[O].data, "", b);
                    d[O] = y;
                });
            } else {
                var w = a(e);
                w.open(e, m, !0);
                r(n, function(a, b) {
                    A(a) && w.setRequestHeader(b, a);
                });
                w.onreadystatechange = function() {
                    if (w && 4 == w.readyState) {
                        var a = null, b = null, c = "";
                        C !== g && (a = w.getAllResponseHeaders(), b = "response" in w ? w.response : w.responseText);
                        C === g && 10 > R || (c = w.statusText);
                        v(l, C || w.status, b, a, c);
                    }
                };
                q && (w.withCredentials = !0);
                if (s) try {
                    w.responseType = s;
                } catch (da) {
                    if ("json" !== s) throw da;
                }
                w.send(h || null);
            }
            if (0 < p) var K = c(L, p); else p && P(p.then) && p.then(L);
        };
    }
    function Sd() {
        var b = "{{", a = "}}";
        this.startSymbol = function(a) {
            return a ? (b = a, this) : b;
        };
        this.endSymbol = function(b) {
            return b ? (a = b, this) : a;
        };
        this.$get = [ "$parse", "$exceptionHandler", "$sce", function(c, d, e) {
            function f(f, h, l) {
                for (var n, p, q = 0, s = [], L = f.length, v = !1, C = []; q < L; ) -1 != (n = f.indexOf(b, q)) && -1 != (p = f.indexOf(a, n + g)) ? (q != n && s.push(f.substring(q, n)), 
                s.push(q = c(v = f.substring(n + g, p))), q.exp = v, q = p + k, v = !0) : (q != L && s.push(f.substring(q)), 
                q = L);
                (L = s.length) || (s.push(""), L = 1);
                if (l && 1 < s.length) throw yc("noconcat", f);
                if (!h || v) return C.length = L, q = function(a) {
                    try {
                        for (var b = 0, c = L, g; b < c; b++) {
                            if ("function" == typeof (g = s[b])) if (g = g(a), g = l ? e.getTrusted(l, g) : e.valueOf(g), 
                            null == g) g = ""; else switch (typeof g) {
                              case "string":
                                break;

                              case "number":
                                g = "" + g;
                                break;

                              default:
                                g = ta(g);
                            }
                            C[b] = g;
                        }
                        return C.join("");
                    } catch (k) {
                        a = yc("interr", f, k.toString()), d(a);
                    }
                }, q.exp = f, q.parts = s, q;
            }
            var g = b.length, k = a.length;
            f.startSymbol = function() {
                return b;
            };
            f.endSymbol = function() {
                return a;
            };
            return f;
        } ];
    }
    function Td() {
        this.$get = [ "$rootScope", "$window", "$q", function(b, a, c) {
            function d(d, g, k, m) {
                var h = a.setInterval, l = a.clearInterval, n = c.defer(), p = n.promise, q = 0, s = A(m) && !m;
                k = A(k) ? k : 0;
                p.then(null, null, d);
                p.$$intervalId = h(function() {
                    n.notify(q++);
                    0 < k && q >= k && (n.resolve(q), l(p.$$intervalId), delete e[p.$$intervalId]);
                    s || b.$apply();
                }, g);
                e[p.$$intervalId] = n;
                return p;
            }
            var e = {};
            d.cancel = function(b) {
                return b && b.$$intervalId in e ? (e[b.$$intervalId].reject("canceled"), a.clearInterval(b.$$intervalId), 
                delete e[b.$$intervalId], !0) : !1;
            };
            return d;
        } ];
    }
    function bd() {
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
                pluralCat: function(b) {
                    return 1 === b ? "one" : "other";
                }
            };
        };
    }
    function Qb(b) {
        b = b.split("/");
        for (var a = b.length; a--; ) b[a] = jb(b[a]);
        return b.join("/");
    }
    function zc(b, a, c) {
        b = ua(b, c);
        a.$$protocol = b.protocol;
        a.$$host = b.hostname;
        a.$$port = Z(b.port) || xe[b.protocol] || null;
    }
    function Ac(b, a, c) {
        var d = "/" !== b.charAt(0);
        d && (b = "/" + b);
        b = ua(b, c);
        a.$$path = decodeURIComponent(d && "/" === b.pathname.charAt(0) ? b.pathname.substring(1) : b.pathname);
        a.$$search = ec(b.search);
        a.$$hash = decodeURIComponent(b.hash);
        a.$$path && "/" != a.$$path.charAt(0) && (a.$$path = "/" + a.$$path);
    }
    function qa(b, a) {
        if (0 === a.indexOf(b)) return a.substr(b.length);
    }
    function cb(b) {
        var a = b.indexOf("#");
        return -1 == a ? b : b.substr(0, a);
    }
    function Rb(b) {
        return b.substr(0, cb(b).lastIndexOf("/") + 1);
    }
    function Bc(b, a) {
        this.$$html5 = !0;
        a = a || "";
        var c = Rb(b);
        zc(b, this, b);
        this.$$parse = function(a) {
            var e = qa(c, a);
            if (!z(e)) throw Sb("ipthprfx", a, c);
            Ac(e, this, b);
            this.$$path || (this.$$path = "/");
            this.$$compose();
        };
        this.$$compose = function() {
            var a = Cb(this.$$search), b = this.$$hash ? "#" + jb(this.$$hash) : "";
            this.$$url = Qb(this.$$path) + (a ? "?" + a : "") + b;
            this.$$absUrl = c + this.$$url.substr(1);
        };
        this.$$rewrite = function(d) {
            var e;
            if ((e = qa(b, d)) !== t) return d = e, (e = qa(a, e)) !== t ? c + (qa("/", e) || e) : b + d;
            if ((e = qa(c, d)) !== t) return c + e;
            if (c == d + "/") return c;
        };
    }
    function Tb(b, a) {
        var c = Rb(b);
        zc(b, this, b);
        this.$$parse = function(d) {
            var e = qa(b, d) || qa(c, d), e = "#" == e.charAt(0) ? qa(a, e) : this.$$html5 ? e : "";
            if (!z(e)) throw Sb("ihshprfx", d, a);
            Ac(e, this, b);
            d = this.$$path;
            var f = /^\/[A-Z]:(\/.*)/;
            0 === e.indexOf(b) && (e = e.replace(b, ""));
            f.exec(e) || (d = (e = f.exec(d)) ? e[1] : d);
            this.$$path = d;
            this.$$compose();
        };
        this.$$compose = function() {
            var c = Cb(this.$$search), e = this.$$hash ? "#" + jb(this.$$hash) : "";
            this.$$url = Qb(this.$$path) + (c ? "?" + c : "") + e;
            this.$$absUrl = b + (this.$$url ? a + this.$$url : "");
        };
        this.$$rewrite = function(a) {
            if (cb(b) == cb(a)) return a;
        };
    }
    function Ub(b, a) {
        this.$$html5 = !0;
        Tb.apply(this, arguments);
        var c = Rb(b);
        this.$$rewrite = function(d) {
            var e;
            if (b == cb(d)) return d;
            if (e = qa(c, d)) return b + a + e;
            if (c === d + "/") return c;
        };
        this.$$compose = function() {
            var c = Cb(this.$$search), e = this.$$hash ? "#" + jb(this.$$hash) : "";
            this.$$url = Qb(this.$$path) + (c ? "?" + c : "") + e;
            this.$$absUrl = b + a + this.$$url;
        };
    }
    function sb(b) {
        return function() {
            return this[b];
        };
    }
    function Cc(b, a) {
        return function(c) {
            if (D(c)) return this[b];
            this[b] = a(c);
            this.$$compose();
            return this;
        };
    }
    function Wd() {
        var b = "", a = !1;
        this.hashPrefix = function(a) {
            return A(a) ? (b = a, this) : b;
        };
        this.html5Mode = function(b) {
            return A(b) ? (a = b, this) : a;
        };
        this.$get = [ "$rootScope", "$browser", "$sniffer", "$rootElement", function(c, d, e, f) {
            function g(a) {
                c.$broadcast("$locationChangeSuccess", k.absUrl(), a);
            }
            var k, m, h = d.baseHref(), l = d.url(), n;
            a ? (n = l.substring(0, l.indexOf("/", l.indexOf("//") + 2)) + (h || "/"), m = e.history ? Bc : Ub) : (n = cb(l), 
            m = Tb);
            k = new m(n, "#" + b);
            k.$$parse(k.$$rewrite(l));
            var p = /^\s*(javascript|mailto):/i;
            f.on("click", function(a) {
                if (!a.ctrlKey && !a.metaKey && 2 != a.which) {
                    for (var e = u(a.target); "a" !== N(e[0].nodeName); ) if (e[0] === f[0] || !(e = e.parent())[0]) return;
                    var g = e.prop("href");
                    T(g) && "[object SVGAnimatedString]" === g.toString() && (g = ua(g.animVal).href);
                    if (!p.test(g)) {
                        if (m === Ub) {
                            var h = e.attr("href") || e.attr("xlink:href");
                            if (h && 0 > h.indexOf("://")) if (g = "#" + b, "/" == h[0]) g = n + g + h; else if ("#" == h[0]) g = n + g + (k.path() || "/") + h; else {
                                var l = k.path().split("/"), h = h.split("/");
                                2 !== l.length || l[1] || (l.length = 1);
                                for (var q = 0; q < h.length; q++) "." != h[q] && (".." == h[q] ? l.pop() : h[q].length && l.push(h[q]));
                                g = n + g + l.join("/");
                            }
                        }
                        l = k.$$rewrite(g);
                        g && (!e.attr("target") && l && !a.isDefaultPrevented()) && (a.preventDefault(), 
                        l != d.url() && (k.$$parse(l), c.$apply(), Q.angular["ff-684208-preventDefault"] = !0));
                    }
                }
            });
            k.absUrl() != l && d.url(k.absUrl(), !0);
            d.onUrlChange(function(a) {
                k.absUrl() != a && (c.$evalAsync(function() {
                    var b = k.absUrl();
                    k.$$parse(a);
                    c.$broadcast("$locationChangeStart", a, b).defaultPrevented ? (k.$$parse(b), d.url(b)) : g(b);
                }), c.$$phase || c.$digest());
            });
            var q = 0;
            c.$watch(function() {
                var a = d.url(), b = k.$$replace;
                q && a == k.absUrl() || (q++, c.$evalAsync(function() {
                    c.$broadcast("$locationChangeStart", k.absUrl(), a).defaultPrevented ? k.$$parse(a) : (d.url(k.absUrl(), b), 
                    g(a));
                }));
                k.$$replace = !1;
                return q;
            });
            return k;
        } ];
    }
    function Xd() {
        var b = !0, a = this;
        this.debugEnabled = function(a) {
            return A(a) ? (b = a, this) : b;
        };
        this.$get = [ "$window", function(c) {
            function d(a) {
                a instanceof Error && (a.stack ? a = a.message && -1 === a.stack.indexOf(a.message) ? "Error: " + a.message + "\n" + a.stack : a.stack : a.sourceURL && (a = a.message + "\n" + a.sourceURL + ":" + a.line));
                return a;
            }
            function e(a) {
                var b = c.console || {}, e = b[a] || b.log || y;
                a = !1;
                try {
                    a = !!e.apply;
                } catch (m) {}
                return a ? function() {
                    var a = [];
                    r(arguments, function(b) {
                        a.push(d(b));
                    });
                    return e.apply(b, a);
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
                        b && c.apply(a, arguments);
                    };
                }()
            };
        } ];
    }
    function ja(b, a) {
        if ("__defineGetter__" === b || "__defineSetter__" === b || "__lookupGetter__" === b || "__lookupSetter__" === b || "__proto__" === b) throw ka("isecfld", a);
        return b;
    }
    function Oa(b, a) {
        if (b) {
            if (b.constructor === b) throw ka("isecfn", a);
            if (b.document && b.location && b.alert && b.setInterval) throw ka("isecwindow", a);
            if (b.children && (b.nodeName || b.prop && b.attr && b.find)) throw ka("isecdom", a);
            if (b === Object) throw ka("isecobj", a);
        }
        return b;
    }
    function tb(b, a, c, d, e) {
        e = e || {};
        a = a.split(".");
        for (var f, g = 0; 1 < a.length; g++) {
            f = ja(a.shift(), d);
            var k = b[f];
            k || (k = {}, b[f] = k);
            b = k;
            b.then && e.unwrapPromises && (va(d), "$$v" in b || function(a) {
                a.then(function(b) {
                    a.$$v = b;
                });
            }(b), b.$$v === t && (b.$$v = {}), b = b.$$v);
        }
        f = ja(a.shift(), d);
        Oa(b, d);
        Oa(b[f], d);
        return b[f] = c;
    }
    function Dc(b, a, c, d, e, f, g) {
        ja(b, f);
        ja(a, f);
        ja(c, f);
        ja(d, f);
        ja(e, f);
        return g.unwrapPromises ? function(g, m) {
            var h = m && m.hasOwnProperty(b) ? m : g, l;
            if (null == h) return h;
            (h = h[b]) && h.then && (va(f), "$$v" in h || (l = h, l.$$v = t, l.then(function(a) {
                l.$$v = a;
            })), h = h.$$v);
            if (!a) return h;
            if (null == h) return t;
            (h = h[a]) && h.then && (va(f), "$$v" in h || (l = h, l.$$v = t, l.then(function(a) {
                l.$$v = a;
            })), h = h.$$v);
            if (!c) return h;
            if (null == h) return t;
            (h = h[c]) && h.then && (va(f), "$$v" in h || (l = h, l.$$v = t, l.then(function(a) {
                l.$$v = a;
            })), h = h.$$v);
            if (!d) return h;
            if (null == h) return t;
            (h = h[d]) && h.then && (va(f), "$$v" in h || (l = h, l.$$v = t, l.then(function(a) {
                l.$$v = a;
            })), h = h.$$v);
            if (!e) return h;
            if (null == h) return t;
            (h = h[e]) && h.then && (va(f), "$$v" in h || (l = h, l.$$v = t, l.then(function(a) {
                l.$$v = a;
            })), h = h.$$v);
            return h;
        } : function(f, g) {
            var h = g && g.hasOwnProperty(b) ? g : f;
            if (null == h) return h;
            h = h[b];
            if (!a) return h;
            if (null == h) return t;
            h = h[a];
            if (!c) return h;
            if (null == h) return t;
            h = h[c];
            if (!d) return h;
            if (null == h) return t;
            h = h[d];
            return e ? null == h ? t : h = h[e] : h;
        };
    }
    function Ec(b, a, c) {
        if (Vb.hasOwnProperty(b)) return Vb[b];
        var d = b.split("."), e = d.length, f;
        if (a.csp) f = 6 > e ? Dc(d[0], d[1], d[2], d[3], d[4], c, a) : function(b, f) {
            var g = 0, k;
            do k = Dc(d[g++], d[g++], d[g++], d[g++], d[g++], c, a)(b, f), f = t, b = k; while (g < e);
            return k;
        }; else {
            var g = "var p;\n";
            r(d, function(b, d) {
                ja(b, c);
                g += "if(s == null) return undefined;\ns=" + (d ? "s" : '((k&&k.hasOwnProperty("' + b + '"))?k:s)') + '["' + b + '"];\n' + (a.unwrapPromises ? 'if (s && s.then) {\n pw("' + c.replace(/(["\r\n])/g, "\\$1") + '");\n if (!("$$v" in s)) {\n p=s;\n p.$$v = undefined;\n p.then(function(v) {p.$$v=v;});\n}\n s=s.$$v\n}\n' : "");
            });
            var g = g + "return s;", k = new Function("s", "k", "pw", g);
            k.toString = $(g);
            f = a.unwrapPromises ? function(a, b) {
                return k(a, b, va);
            } : k;
        }
        "hasOwnProperty" !== b && (Vb[b] = f);
        return f;
    }
    function Yd() {
        var b = {}, a = {
            csp: !1,
            unwrapPromises: !1,
            logPromiseWarnings: !0
        };
        this.unwrapPromises = function(b) {
            return A(b) ? (a.unwrapPromises = !!b, this) : a.unwrapPromises;
        };
        this.logPromiseWarnings = function(b) {
            return A(b) ? (a.logPromiseWarnings = b, this) : a.logPromiseWarnings;
        };
        this.$get = [ "$filter", "$sniffer", "$log", function(c, d, e) {
            a.csp = d.csp;
            va = function(b) {
                a.logPromiseWarnings && !Fc.hasOwnProperty(b) && (Fc[b] = !0, e.warn("[$parse] Promise found in the expression `" + b + "`. Automatic unwrapping of promises in Angular expressions is deprecated."));
            };
            return function(d) {
                var e;
                switch (typeof d) {
                  case "string":
                    if (b.hasOwnProperty(d)) return b[d];
                    e = new Wb(a);
                    e = new db(e, c, a).parse(d);
                    "hasOwnProperty" !== d && (b[d] = e);
                    return e;

                  case "function":
                    return d;

                  default:
                    return y;
                }
            };
        } ];
    }
    function $d() {
        this.$get = [ "$rootScope", "$exceptionHandler", function(b, a) {
            return ye(function(a) {
                b.$evalAsync(a);
            }, a);
        } ];
    }
    function ye(b, a) {
        function c(a) {
            return a;
        }
        function d(a) {
            return g(a);
        }
        var e = function() {
            var g = [], h, l;
            return l = {
                resolve: function(a) {
                    if (g) {
                        var c = g;
                        g = t;
                        h = f(a);
                        c.length && b(function() {
                            for (var a, b = 0, d = c.length; b < d; b++) a = c[b], h.then(a[0], a[1], a[2]);
                        });
                    }
                },
                reject: function(a) {
                    l.resolve(k(a));
                },
                notify: function(a) {
                    if (g) {
                        var c = g;
                        g.length && b(function() {
                            for (var b, d = 0, e = c.length; d < e; d++) b = c[d], b[2](a);
                        });
                    }
                },
                promise: {
                    then: function(b, f, k) {
                        var l = e(), L = function(d) {
                            try {
                                l.resolve((P(b) ? b : c)(d));
                            } catch (e) {
                                l.reject(e), a(e);
                            }
                        }, v = function(b) {
                            try {
                                l.resolve((P(f) ? f : d)(b));
                            } catch (c) {
                                l.reject(c), a(c);
                            }
                        }, C = function(b) {
                            try {
                                l.notify((P(k) ? k : c)(b));
                            } catch (d) {
                                a(d);
                            }
                        };
                        g ? g.push([ L, v, C ]) : h.then(L, v, C);
                        return l.promise;
                    },
                    "catch": function(a) {
                        return this.then(null, a);
                    },
                    "finally": function(a) {
                        function b(a, c) {
                            var d = e();
                            c ? d.resolve(a) : d.reject(a);
                            return d.promise;
                        }
                        function d(e, f) {
                            var g = null;
                            try {
                                g = (a || c)();
                            } catch (k) {
                                return b(k, !1);
                            }
                            return g && P(g.then) ? g.then(function() {
                                return b(e, f);
                            }, function(a) {
                                return b(a, !1);
                            }) : b(e, f);
                        }
                        return this.then(function(a) {
                            return d(a, !0);
                        }, function(a) {
                            return d(a, !1);
                        });
                    }
                }
            };
        }, f = function(a) {
            return a && P(a.then) ? a : {
                then: function(c) {
                    var d = e();
                    b(function() {
                        d.resolve(c(a));
                    });
                    return d.promise;
                }
            };
        }, g = function(a) {
            var b = e();
            b.reject(a);
            return b.promise;
        }, k = function(c) {
            return {
                then: function(f, g) {
                    var k = e();
                    b(function() {
                        try {
                            k.resolve((P(g) ? g : d)(c));
                        } catch (b) {
                            k.reject(b), a(b);
                        }
                    });
                    return k.promise;
                }
            };
        };
        return {
            defer: e,
            reject: g,
            when: function(k, h, l, n) {
                var p = e(), q, s = function(b) {
                    try {
                        return (P(h) ? h : c)(b);
                    } catch (d) {
                        return a(d), g(d);
                    }
                }, L = function(b) {
                    try {
                        return (P(l) ? l : d)(b);
                    } catch (c) {
                        return a(c), g(c);
                    }
                }, v = function(b) {
                    try {
                        return (P(n) ? n : c)(b);
                    } catch (d) {
                        a(d);
                    }
                };
                b(function() {
                    f(k).then(function(a) {
                        q || (q = !0, p.resolve(f(a).then(s, L, v)));
                    }, function(a) {
                        q || (q = !0, p.resolve(L(a)));
                    }, function(a) {
                        q || p.notify(v(a));
                    });
                });
                return p.promise;
            },
            all: function(a) {
                var b = e(), c = 0, d = H(a) ? [] : {};
                r(a, function(a, e) {
                    c++;
                    f(a).then(function(a) {
                        d.hasOwnProperty(e) || (d[e] = a, --c || b.resolve(d));
                    }, function(a) {
                        d.hasOwnProperty(e) || b.reject(a);
                    });
                });
                0 === c && b.resolve(d);
                return b.promise;
            }
        };
    }
    function ge() {
        this.$get = [ "$window", "$timeout", function(b, a) {
            var c = b.requestAnimationFrame || b.webkitRequestAnimationFrame || b.mozRequestAnimationFrame, d = b.cancelAnimationFrame || b.webkitCancelAnimationFrame || b.mozCancelAnimationFrame || b.webkitCancelRequestAnimationFrame, e = !!c, f = e ? function(a) {
                var b = c(a);
                return function() {
                    d(b);
                };
            } : function(b) {
                var c = a(b, 16.66, !1);
                return function() {
                    a.cancel(c);
                };
            };
            f.supported = e;
            return f;
        } ];
    }
    function Zd() {
        var b = 10, a = x("$rootScope"), c = null;
        this.digestTtl = function(a) {
            arguments.length && (b = a);
            return b;
        };
        this.$get = [ "$injector", "$exceptionHandler", "$parse", "$browser", function(d, e, f, g) {
            function k() {
                this.$id = gb();
                this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null;
                this["this"] = this.$root = this;
                this.$$destroyed = !1;
                this.$$asyncQueue = [];
                this.$$postDigestQueue = [];
                this.$$listeners = {};
                this.$$listenerCount = {};
                this.$$isolateBindings = {};
            }
            function m(b) {
                if (p.$$phase) throw a("inprog", p.$$phase);
                p.$$phase = b;
            }
            function h(a, b) {
                var c = f(a);
                Va(c, b);
                return c;
            }
            function l(a, b, c) {
                do a.$$listenerCount[c] -= b, 0 === a.$$listenerCount[c] && delete a.$$listenerCount[c]; while (a = a.$parent);
            }
            function n() {}
            k.prototype = {
                constructor: k,
                $new: function(a) {
                    a ? (a = new k(), a.$root = this.$root, a.$$asyncQueue = this.$$asyncQueue, a.$$postDigestQueue = this.$$postDigestQueue) : (this.$$childScopeClass || (this.$$childScopeClass = function() {
                        this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null;
                        this.$$listeners = {};
                        this.$$listenerCount = {};
                        this.$id = gb();
                        this.$$childScopeClass = null;
                    }, this.$$childScopeClass.prototype = this), a = new this.$$childScopeClass());
                    a["this"] = a;
                    a.$parent = this;
                    a.$$prevSibling = this.$$childTail;
                    this.$$childHead ? this.$$childTail = this.$$childTail.$$nextSibling = a : this.$$childHead = this.$$childTail = a;
                    return a;
                },
                $watch: function(a, b, d) {
                    var e = h(a, "watch"), f = this.$$watchers, g = {
                        fn: b,
                        last: n,
                        get: e,
                        exp: a,
                        eq: !!d
                    };
                    c = null;
                    if (!P(b)) {
                        var k = h(b || y, "listener");
                        g.fn = function(a, b, c) {
                            k(c);
                        };
                    }
                    if ("string" == typeof a && e.constant) {
                        var m = g.fn;
                        g.fn = function(a, b, c) {
                            m.call(this, a, b, c);
                            Ra(f, g);
                        };
                    }
                    f || (f = this.$$watchers = []);
                    f.unshift(g);
                    return function() {
                        Ra(f, g);
                        c = null;
                    };
                },
                $watchCollection: function(a, b) {
                    var c = this, d, e, g, k = 1 < b.length, h = 0, m = f(a), l = [], p = {}, n = !0, r = 0;
                    return this.$watch(function() {
                        d = m(c);
                        var a, b, f;
                        if (T(d)) if (fb(d)) for (e !== l && (e = l, r = e.length = 0, h++), a = d.length, 
                        r !== a && (h++, e.length = r = a), b = 0; b < a; b++) f = e[b] !== e[b] && d[b] !== d[b], 
                        f || e[b] === d[b] || (h++, e[b] = d[b]); else {
                            e !== p && (e = p = {}, r = 0, h++);
                            a = 0;
                            for (b in d) d.hasOwnProperty(b) && (a++, e.hasOwnProperty(b) ? (f = e[b] !== e[b] && d[b] !== d[b], 
                            f || e[b] === d[b] || (h++, e[b] = d[b])) : (r++, e[b] = d[b], h++));
                            if (r > a) for (b in h++, e) e.hasOwnProperty(b) && !d.hasOwnProperty(b) && (r--, 
                            delete e[b]);
                        } else e !== d && (e = d, h++);
                        return h;
                    }, function() {
                        n ? (n = !1, b(d, d, c)) : b(d, g, c);
                        if (k) if (T(d)) if (fb(d)) {
                            g = Array(d.length);
                            for (var a = 0; a < d.length; a++) g[a] = d[a];
                        } else for (a in g = {}, d) ib.call(d, a) && (g[a] = d[a]); else g = d;
                    });
                },
                $digest: function() {
                    var d, f, g, k, h = this.$$asyncQueue, l = this.$$postDigestQueue, r, w, t = b, K, W = [], u, J, E;
                    m("$digest");
                    c = null;
                    do {
                        w = !1;
                        for (K = this; h.length; ) {
                            try {
                                E = h.shift(), E.scope.$eval(E.expression);
                            } catch (F) {
                                p.$$phase = null, e(F);
                            }
                            c = null;
                        }
                        a: do {
                            if (k = K.$$watchers) for (r = k.length; r--; ) try {
                                if (d = k[r]) if ((f = d.get(K)) !== (g = d.last) && !(d.eq ? za(f, g) : "number" === typeof f && "number" === typeof g && isNaN(f) && isNaN(g))) w = !0, 
                                c = d, d.last = d.eq ? Ha(f, null) : f, d.fn(f, g === n ? f : g, K), 5 > t && (u = 4 - t, 
                                W[u] || (W[u] = []), J = P(d.exp) ? "fn: " + (d.exp.name || d.exp.toString()) : d.exp, 
                                J += "; newVal: " + ta(f) + "; oldVal: " + ta(g), W[u].push(J)); else if (d === c) {
                                    w = !1;
                                    break a;
                                }
                            } catch (A) {
                                p.$$phase = null, e(A);
                            }
                            if (!(k = K.$$childHead || K !== this && K.$$nextSibling)) for (;K !== this && !(k = K.$$nextSibling); ) K = K.$parent;
                        } while (K = k);
                        if ((w || h.length) && !t--) throw p.$$phase = null, a("infdig", b, ta(W));
                    } while (w || h.length);
                    for (p.$$phase = null; l.length; ) try {
                        l.shift()();
                    } catch (x) {
                        e(x);
                    }
                },
                $destroy: function() {
                    if (!this.$$destroyed) {
                        var a = this.$parent;
                        this.$broadcast("$destroy");
                        this.$$destroyed = !0;
                        this !== p && (r(this.$$listenerCount, Bb(null, l, this)), a.$$childHead == this && (a.$$childHead = this.$$nextSibling), 
                        a.$$childTail == this && (a.$$childTail = this.$$prevSibling), this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling), 
                        this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling), this.$parent = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = this.$root = null, 
                        this.$$listeners = {}, this.$$watchers = this.$$asyncQueue = this.$$postDigestQueue = [], 
                        this.$destroy = this.$digest = this.$apply = y, this.$on = this.$watch = function() {
                            return y;
                        });
                    }
                },
                $eval: function(a, b) {
                    return f(a)(this, b);
                },
                $evalAsync: function(a) {
                    p.$$phase || p.$$asyncQueue.length || g.defer(function() {
                        p.$$asyncQueue.length && p.$digest();
                    });
                    this.$$asyncQueue.push({
                        scope: this,
                        expression: a
                    });
                },
                $$postDigest: function(a) {
                    this.$$postDigestQueue.push(a);
                },
                $apply: function(a) {
                    try {
                        return m("$apply"), this.$eval(a);
                    } catch (b) {
                        e(b);
                    } finally {
                        p.$$phase = null;
                        try {
                            p.$digest();
                        } catch (c) {
                            throw e(c), c;
                        }
                    }
                },
                $on: function(a, b) {
                    var c = this.$$listeners[a];
                    c || (this.$$listeners[a] = c = []);
                    c.push(b);
                    var d = this;
                    do d.$$listenerCount[a] || (d.$$listenerCount[a] = 0), d.$$listenerCount[a]++; while (d = d.$parent);
                    var e = this;
                    return function() {
                        c[Qa(c, b)] = null;
                        l(e, 1, a);
                    };
                },
                $emit: function(a, b) {
                    var c = [], d, f = this, g = !1, k = {
                        name: a,
                        targetScope: f,
                        stopPropagation: function() {
                            g = !0;
                        },
                        preventDefault: function() {
                            k.defaultPrevented = !0;
                        },
                        defaultPrevented: !1
                    }, h = [ k ].concat(Aa.call(arguments, 1)), m, l;
                    do {
                        d = f.$$listeners[a] || c;
                        k.currentScope = f;
                        m = 0;
                        for (l = d.length; m < l; m++) if (d[m]) try {
                            d[m].apply(null, h);
                        } catch (p) {
                            e(p);
                        } else d.splice(m, 1), m--, l--;
                        if (g) break;
                        f = f.$parent;
                    } while (f);
                    return k;
                },
                $broadcast: function(a, b) {
                    for (var c = this, d = this, f = {
                        name: a,
                        targetScope: this,
                        preventDefault: function() {
                            f.defaultPrevented = !0;
                        },
                        defaultPrevented: !1
                    }, g = [ f ].concat(Aa.call(arguments, 1)), k, h; c = d; ) {
                        f.currentScope = c;
                        d = c.$$listeners[a] || [];
                        k = 0;
                        for (h = d.length; k < h; k++) if (d[k]) try {
                            d[k].apply(null, g);
                        } catch (m) {
                            e(m);
                        } else d.splice(k, 1), k--, h--;
                        if (!(d = c.$$listenerCount[a] && c.$$childHead || c !== this && c.$$nextSibling)) for (;c !== this && !(d = c.$$nextSibling); ) c = c.$parent;
                    }
                    return f;
                }
            };
            var p = new k();
            return p;
        } ];
    }
    function cd() {
        var b = /^\s*(https?|ftp|mailto|tel|file):/, a = /^\s*((https?|ftp|file):|data:image\/)/;
        this.aHrefSanitizationWhitelist = function(a) {
            return A(a) ? (b = a, this) : b;
        };
        this.imgSrcSanitizationWhitelist = function(b) {
            return A(b) ? (a = b, this) : a;
        };
        this.$get = function() {
            return function(c, d) {
                var e = d ? a : b, f;
                if (!R || 8 <= R) if (f = ua(c).href, "" !== f && !f.match(e)) return "unsafe:" + f;
                return c;
            };
        };
    }
    function ze(b) {
        if ("self" === b) return b;
        if (z(b)) {
            if (-1 < b.indexOf("***")) throw wa("iwcard", b);
            b = b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08").replace("\\*\\*", ".*").replace("\\*", "[^:/.?&;]*");
            return RegExp("^" + b + "$");
        }
        if (hb(b)) return RegExp("^" + b.source + "$");
        throw wa("imatcher");
    }
    function Gc(b) {
        var a = [];
        A(b) && r(b, function(b) {
            a.push(ze(b));
        });
        return a;
    }
    function be() {
        this.SCE_CONTEXTS = fa;
        var b = [ "self" ], a = [];
        this.resourceUrlWhitelist = function(a) {
            arguments.length && (b = Gc(a));
            return b;
        };
        this.resourceUrlBlacklist = function(b) {
            arguments.length && (a = Gc(b));
            return a;
        };
        this.$get = [ "$injector", function(c) {
            function d(a) {
                var b = function(a) {
                    this.$$unwrapTrustedValue = function() {
                        return a;
                    };
                };
                a && (b.prototype = new a());
                b.prototype.valueOf = function() {
                    return this.$$unwrapTrustedValue();
                };
                b.prototype.toString = function() {
                    return this.$$unwrapTrustedValue().toString();
                };
                return b;
            }
            var e = function(a) {
                throw wa("unsafe");
            };
            c.has("$sanitize") && (e = c.get("$sanitize"));
            var f = d(), g = {};
            g[fa.HTML] = d(f);
            g[fa.CSS] = d(f);
            g[fa.URL] = d(f);
            g[fa.JS] = d(f);
            g[fa.RESOURCE_URL] = d(g[fa.URL]);
            return {
                trustAs: function(a, b) {
                    var c = g.hasOwnProperty(a) ? g[a] : null;
                    if (!c) throw wa("icontext", a, b);
                    if (null === b || b === t || "" === b) return b;
                    if ("string" !== typeof b) throw wa("itype", a);
                    return new c(b);
                },
                getTrusted: function(c, d) {
                    if (null === d || d === t || "" === d) return d;
                    var f = g.hasOwnProperty(c) ? g[c] : null;
                    if (f && d instanceof f) return d.$$unwrapTrustedValue();
                    if (c === fa.RESOURCE_URL) {
                        var f = ua(d.toString()), l, n, p = !1;
                        l = 0;
                        for (n = b.length; l < n; l++) if ("self" === b[l] ? Pb(f) : b[l].exec(f.href)) {
                            p = !0;
                            break;
                        }
                        if (p) for (l = 0, n = a.length; l < n; l++) if ("self" === a[l] ? Pb(f) : a[l].exec(f.href)) {
                            p = !1;
                            break;
                        }
                        if (p) return d;
                        throw wa("insecurl", d.toString());
                    }
                    if (c === fa.HTML) return e(d);
                    throw wa("unsafe");
                },
                valueOf: function(a) {
                    return a instanceof f ? a.$$unwrapTrustedValue() : a;
                }
            };
        } ];
    }
    function ae() {
        var b = !0;
        this.enabled = function(a) {
            arguments.length && (b = !!a);
            return b;
        };
        this.$get = [ "$parse", "$sniffer", "$sceDelegate", function(a, c, d) {
            if (b && c.msie && 8 > c.msieDocumentMode) throw wa("iequirks");
            var e = ga(fa);
            e.isEnabled = function() {
                return b;
            };
            e.trustAs = d.trustAs;
            e.getTrusted = d.getTrusted;
            e.valueOf = d.valueOf;
            b || (e.trustAs = e.getTrusted = function(a, b) {
                return b;
            }, e.valueOf = Ga);
            e.parseAs = function(b, c) {
                var d = a(c);
                return d.literal && d.constant ? d : function(a, c) {
                    return e.getTrusted(b, d(a, c));
                };
            };
            var f = e.parseAs, g = e.getTrusted, k = e.trustAs;
            r(fa, function(a, b) {
                var c = N(b);
                e[Ya("parse_as_" + c)] = function(b) {
                    return f(a, b);
                };
                e[Ya("get_trusted_" + c)] = function(b) {
                    return g(a, b);
                };
                e[Ya("trust_as_" + c)] = function(b) {
                    return k(a, b);
                };
            });
            return e;
        } ];
    }
    function ce() {
        this.$get = [ "$window", "$document", function(b, a) {
            var c = {}, d = Z((/android (\d+)/.exec(N((b.navigator || {}).userAgent)) || [])[1]), e = /Boxee/i.test((b.navigator || {}).userAgent), f = a[0] || {}, g = f.documentMode, k, m = /^(Moz|webkit|O|ms)(?=[A-Z])/, h = f.body && f.body.style, l = !1, n = !1;
            if (h) {
                for (var p in h) if (l = m.exec(p)) {
                    k = l[0];
                    k = k.substr(0, 1).toUpperCase() + k.substr(1);
                    break;
                }
                k || (k = "WebkitOpacity" in h && "webkit");
                l = !!("transition" in h || k + "Transition" in h);
                n = !!("animation" in h || k + "Animation" in h);
                !d || l && n || (l = z(f.body.style.webkitTransition), n = z(f.body.style.webkitAnimation));
            }
            return {
                history: !(!b.history || !b.history.pushState || 4 > d || e),
                hashchange: "onhashchange" in b && (!g || 7 < g),
                hasEvent: function(a) {
                    if ("input" == a && 9 == R) return !1;
                    if (D(c[a])) {
                        var b = f.createElement("div");
                        c[a] = "on" + a in b;
                    }
                    return c[a];
                },
                csp: Wa(),
                vendorPrefix: k,
                transitions: l,
                animations: n,
                android: d,
                msie: R,
                msieDocumentMode: g
            };
        } ];
    }
    function ee() {
        this.$get = [ "$rootScope", "$browser", "$q", "$exceptionHandler", function(b, a, c, d) {
            function e(e, k, m) {
                var h = c.defer(), l = h.promise, n = A(m) && !m;
                k = a.defer(function() {
                    try {
                        h.resolve(e());
                    } catch (a) {
                        h.reject(a), d(a);
                    } finally {
                        delete f[l.$$timeoutId];
                    }
                    n || b.$apply();
                }, k);
                l.$$timeoutId = k;
                f[k] = h;
                return l;
            }
            var f = {};
            e.cancel = function(b) {
                return b && b.$$timeoutId in f ? (f[b.$$timeoutId].reject("canceled"), delete f[b.$$timeoutId], 
                a.defer.cancel(b.$$timeoutId)) : !1;
            };
            return e;
        } ];
    }
    function ua(b, a) {
        var c = b;
        R && (V.setAttribute("href", c), c = V.href);
        V.setAttribute("href", c);
        return {
            href: V.href,
            protocol: V.protocol ? V.protocol.replace(/:$/, "") : "",
            host: V.host,
            search: V.search ? V.search.replace(/^\?/, "") : "",
            hash: V.hash ? V.hash.replace(/^#/, "") : "",
            hostname: V.hostname,
            port: V.port,
            pathname: "/" === V.pathname.charAt(0) ? V.pathname : "/" + V.pathname
        };
    }
    function Pb(b) {
        b = z(b) ? ua(b) : b;
        return b.protocol === Hc.protocol && b.host === Hc.host;
    }
    function fe() {
        this.$get = $(Q);
    }
    function mc(b) {
        function a(d, e) {
            if (T(d)) {
                var f = {};
                r(d, function(b, c) {
                    f[c] = a(c, b);
                });
                return f;
            }
            return b.factory(d + c, e);
        }
        var c = "Filter";
        this.register = a;
        this.$get = [ "$injector", function(a) {
            return function(b) {
                return a.get(b + c);
            };
        } ];
        a("currency", Ic);
        a("date", Jc);
        a("filter", Ae);
        a("json", Be);
        a("limitTo", Ce);
        a("lowercase", De);
        a("number", Kc);
        a("orderBy", Lc);
        a("uppercase", Ee);
    }
    function Ae() {
        return function(b, a, c) {
            if (!H(b)) return b;
            var d = typeof c, e = [];
            e.check = function(a) {
                for (var b = 0; b < e.length; b++) if (!e[b](a)) return !1;
                return !0;
            };
            "function" !== d && (c = "boolean" === d && c ? function(a, b) {
                return Ua.equals(a, b);
            } : function(a, b) {
                if (a && b && "object" === typeof a && "object" === typeof b) {
                    for (var d in a) if ("$" !== d.charAt(0) && ib.call(a, d) && c(a[d], b[d])) return !0;
                    return !1;
                }
                b = ("" + b).toLowerCase();
                return -1 < ("" + a).toLowerCase().indexOf(b);
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
            switch (typeof a) {
              case "boolean":
              case "number":
              case "string":
                a = {
                    $: a
                };

              case "object":
                for (var g in a) (function(b) {
                    "undefined" !== typeof a[b] && e.push(function(c) {
                        return f("$" == b ? c : c && c[b], a[b]);
                    });
                })(g);
                break;

              case "function":
                e.push(a);
                break;

              default:
                return b;
            }
            d = [];
            for (g = 0; g < b.length; g++) {
                var k = b[g];
                e.check(k) && d.push(k);
            }
            return d;
        };
    }
    function Ic(b) {
        var a = b.NUMBER_FORMATS;
        return function(b, d) {
            D(d) && (d = a.CURRENCY_SYM);
            return Mc(b, a.PATTERNS[1], a.GROUP_SEP, a.DECIMAL_SEP, 2).replace(/\u00A4/g, d);
        };
    }
    function Kc(b) {
        var a = b.NUMBER_FORMATS;
        return function(b, d) {
            return Mc(b, a.PATTERNS[0], a.GROUP_SEP, a.DECIMAL_SEP, d);
        };
    }
    function Mc(b, a, c, d, e) {
        if (null == b || !isFinite(b) || T(b)) return "";
        var f = 0 > b;
        b = Math.abs(b);
        var g = b + "", k = "", m = [], h = !1;
        if (-1 !== g.indexOf("e")) {
            var l = g.match(/([\d\.]+)e(-?)(\d+)/);
            l && "-" == l[2] && l[3] > e + 1 ? (g = "0", b = 0) : (k = g, h = !0);
        }
        if (h) 0 < e && (-1 < b && 1 > b) && (k = b.toFixed(e)); else {
            g = (g.split(Nc)[1] || "").length;
            D(e) && (e = Math.min(Math.max(a.minFrac, g), a.maxFrac));
            b = +(Math.round(+(b.toString() + "e" + e)).toString() + "e" + -e);
            b = ("" + b).split(Nc);
            g = b[0];
            b = b[1] || "";
            var l = 0, n = a.lgSize, p = a.gSize;
            if (g.length >= n + p) for (l = g.length - n, h = 0; h < l; h++) 0 === (l - h) % p && 0 !== h && (k += c), 
            k += g.charAt(h);
            for (h = l; h < g.length; h++) 0 === (g.length - h) % n && 0 !== h && (k += c), 
            k += g.charAt(h);
            for (;b.length < e; ) b += "0";
            e && "0" !== e && (k += d + b.substr(0, e));
        }
        m.push(f ? a.negPre : a.posPre);
        m.push(k);
        m.push(f ? a.negSuf : a.posSuf);
        return m.join("");
    }
    function Xb(b, a, c) {
        var d = "";
        0 > b && (d = "-", b = -b);
        for (b = "" + b; b.length < a; ) b = "0" + b;
        c && (b = b.substr(b.length - a));
        return d + b;
    }
    function Y(b, a, c, d) {
        c = c || 0;
        return function(e) {
            e = e["get" + b]();
            if (0 < c || e > -c) e += c;
            0 === e && -12 == c && (e = 12);
            return Xb(e, a, d);
        };
    }
    function ub(b, a) {
        return function(c, d) {
            var e = c["get" + b](), f = Ia(a ? "SHORT" + b : b);
            return d[f][e];
        };
    }
    function Jc(b) {
        function a(a) {
            var b;
            if (b = a.match(c)) {
                a = new Date(0);
                var f = 0, g = 0, k = b[8] ? a.setUTCFullYear : a.setFullYear, m = b[8] ? a.setUTCHours : a.setHours;
                b[9] && (f = Z(b[9] + b[10]), g = Z(b[9] + b[11]));
                k.call(a, Z(b[1]), Z(b[2]) - 1, Z(b[3]));
                f = Z(b[4] || 0) - f;
                g = Z(b[5] || 0) - g;
                k = Z(b[6] || 0);
                b = Math.round(1e3 * parseFloat("0." + (b[7] || 0)));
                m.call(a, f, g, k, b);
            }
            return a;
        }
        var c = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
        return function(c, e) {
            var f = "", g = [], k, m;
            e = e || "mediumDate";
            e = b.DATETIME_FORMATS[e] || e;
            z(c) && (c = Fe.test(c) ? Z(c) : a(c));
            Ab(c) && (c = new Date(c));
            if (!sa(c)) return c;
            for (;e; ) (m = Ge.exec(e)) ? (g = g.concat(Aa.call(m, 1)), e = g.pop()) : (g.push(e), 
            e = null);
            r(g, function(a) {
                k = He[a];
                f += k ? k(c, b.DATETIME_FORMATS) : a.replace(/(^'|'$)/g, "").replace(/''/g, "'");
            });
            return f;
        };
    }
    function Be() {
        return function(b) {
            return ta(b, !0);
        };
    }
    function Ce() {
        return function(b, a) {
            if (!H(b) && !z(b)) return b;
            a = Infinity === Math.abs(Number(a)) ? Number(a) : Z(a);
            if (z(b)) return a ? 0 <= a ? b.slice(0, a) : b.slice(a, b.length) : "";
            var c = [], d, e;
            a > b.length ? a = b.length : a < -b.length && (a = -b.length);
            0 < a ? (d = 0, e = a) : (d = b.length + a, e = b.length);
            for (;d < e; d++) c.push(b[d]);
            return c;
        };
    }
    function Lc(b) {
        return function(a, c, d) {
            function e(a, b) {
                return Ta(b) ? function(b, c) {
                    return a(c, b);
                } : a;
            }
            function f(a, b) {
                var c = typeof a, d = typeof b;
                return c == d ? (sa(a) && sa(b) && (a = a.valueOf(), b = b.valueOf()), "string" == c && (a = a.toLowerCase(), 
                b = b.toLowerCase()), a === b ? 0 : a < b ? -1 : 1) : c < d ? -1 : 1;
            }
            if (!H(a) || !c) return a;
            c = H(c) ? c : [ c ];
            c = Vc(c, function(a) {
                var c = !1, d = a || Ga;
                if (z(a)) {
                    if ("+" == a.charAt(0) || "-" == a.charAt(0)) c = "-" == a.charAt(0), a = a.substring(1);
                    d = b(a);
                    if (d.constant) {
                        var g = d();
                        return e(function(a, b) {
                            return f(a[g], b[g]);
                        }, c);
                    }
                }
                return e(function(a, b) {
                    return f(d(a), d(b));
                }, c);
            });
            for (var g = [], k = 0; k < a.length; k++) g.push(a[k]);
            return g.sort(e(function(a, b) {
                for (var d = 0; d < c.length; d++) {
                    var e = c[d](a, b);
                    if (0 !== e) return e;
                }
                return 0;
            }, d));
        };
    }
    function xa(b) {
        P(b) && (b = {
            link: b
        });
        b.restrict = b.restrict || "AC";
        return $(b);
    }
    function Oc(b, a, c, d) {
        function e(a, c) {
            c = c ? "-" + kb(c, "-") : "";
            d.removeClass(b, (a ? vb : wb) + c);
            d.addClass(b, (a ? wb : vb) + c);
        }
        var f = this, g = b.parent().controller("form") || xb, k = 0, m = f.$error = {}, h = [];
        f.$name = a.name || a.ngForm;
        f.$dirty = !1;
        f.$pristine = !0;
        f.$valid = !0;
        f.$invalid = !1;
        g.$addControl(f);
        b.addClass(Pa);
        e(!0);
        f.$addControl = function(a) {
            Ca(a.$name, "input");
            h.push(a);
            a.$name && (f[a.$name] = a);
        };
        f.$removeControl = function(a) {
            a.$name && f[a.$name] === a && delete f[a.$name];
            r(m, function(b, c) {
                f.$setValidity(c, !0, a);
            });
            Ra(h, a);
        };
        f.$setValidity = function(a, b, c) {
            var d = m[a];
            if (b) d && (Ra(d, c), d.length || (k--, k || (e(b), f.$valid = !0, f.$invalid = !1), 
            m[a] = !1, e(!0, a), g.$setValidity(a, !0, f))); else {
                k || e(b);
                if (d) {
                    if (-1 != Qa(d, c)) return;
                } else m[a] = d = [], k++, e(!1, a), g.$setValidity(a, !1, f);
                d.push(c);
                f.$valid = !1;
                f.$invalid = !0;
            }
        };
        f.$setDirty = function() {
            d.removeClass(b, Pa);
            d.addClass(b, yb);
            f.$dirty = !0;
            f.$pristine = !1;
            g.$setDirty();
        };
        f.$setPristine = function() {
            d.removeClass(b, yb);
            d.addClass(b, Pa);
            f.$dirty = !1;
            f.$pristine = !0;
            r(h, function(a) {
                a.$setPristine();
            });
        };
    }
    function ra(b, a, c, d) {
        b.$setValidity(a, c);
        return c ? d : t;
    }
    function Pc(b, a) {
        var c, d;
        if (a) for (c = 0; c < a.length; ++c) if (d = a[c], b[d]) return !0;
        return !1;
    }
    function Ie(b, a, c, d, e) {
        T(e) && (b.$$hasNativeValidators = !0, b.$parsers.push(function(f) {
            if (b.$error[a] || Pc(e, d) || !Pc(e, c)) return f;
            b.$setValidity(a, !1);
        }));
    }
    function zb(b, a, c, d, e, f) {
        var g = a.prop(Je), k = a[0].placeholder, m = {}, h = N(a[0].type);
        d.$$validityState = g;
        if (!e.android) {
            var l = !1;
            a.on("compositionstart", function(a) {
                l = !0;
            });
            a.on("compositionend", function() {
                l = !1;
                n();
            });
        }
        var n = function(e) {
            if (!l) {
                var f = a.val();
                if (R && "input" === (e || m).type && a[0].placeholder !== k) k = a[0].placeholder; else if ("password" !== h && Ta(c.ngTrim || "T") && (f = aa(f)), 
                e = g && d.$$hasNativeValidators, d.$viewValue !== f || "" === f && e) b.$$phase ? d.$setViewValue(f) : b.$apply(function() {
                    d.$setViewValue(f);
                });
            }
        };
        if (e.hasEvent("input")) a.on("input", n); else {
            var p, q = function() {
                p || (p = f.defer(function() {
                    n();
                    p = null;
                }));
            };
            a.on("keydown", function(a) {
                a = a.keyCode;
                91 === a || (15 < a && 19 > a || 37 <= a && 40 >= a) || q();
            });
            if (e.hasEvent("paste")) a.on("paste cut", q);
        }
        a.on("change", n);
        d.$render = function() {
            a.val(d.$isEmpty(d.$viewValue) ? "" : d.$viewValue);
        };
        var s = c.ngPattern;
        s && ((e = s.match(/^\/(.*)\/([gim]*)$/)) ? (s = RegExp(e[1], e[2]), e = function(a) {
            return ra(d, "pattern", d.$isEmpty(a) || s.test(a), a);
        }) : e = function(c) {
            var e = b.$eval(s);
            if (!e || !e.test) throw x("ngPattern")("noregexp", s, e, ha(a));
            return ra(d, "pattern", d.$isEmpty(c) || e.test(c), c);
        }, d.$formatters.push(e), d.$parsers.push(e));
        if (c.ngMinlength) {
            var r = Z(c.ngMinlength);
            e = function(a) {
                return ra(d, "minlength", d.$isEmpty(a) || a.length >= r, a);
            };
            d.$parsers.push(e);
            d.$formatters.push(e);
        }
        if (c.ngMaxlength) {
            var v = Z(c.ngMaxlength);
            e = function(a) {
                return ra(d, "maxlength", d.$isEmpty(a) || a.length <= v, a);
            };
            d.$parsers.push(e);
            d.$formatters.push(e);
        }
    }
    function Yb(b, a) {
        b = "ngClass" + b;
        return [ "$animate", function(c) {
            function d(a, b) {
                var c = [], d = 0;
                a: for (;d < a.length; d++) {
                    for (var e = a[d], l = 0; l < b.length; l++) if (e == b[l]) continue a;
                    c.push(e);
                }
                return c;
            }
            function e(a) {
                if (!H(a)) {
                    if (z(a)) return a.split(" ");
                    if (T(a)) {
                        var b = [];
                        r(a, function(a, c) {
                            a && (b = b.concat(c.split(" ")));
                        });
                        return b;
                    }
                }
                return a;
            }
            return {
                restrict: "AC",
                link: function(f, g, k) {
                    function m(a, b) {
                        var c = g.data("$classCounts") || {}, d = [];
                        r(a, function(a) {
                            if (0 < b || c[a]) c[a] = (c[a] || 0) + b, c[a] === +(0 < b) && d.push(a);
                        });
                        g.data("$classCounts", c);
                        return d.join(" ");
                    }
                    function h(b) {
                        if (!0 === a || f.$index % 2 === a) {
                            var h = e(b || []);
                            if (!l) {
                                var q = m(h, 1);
                                k.$addClass(q);
                            } else if (!za(b, l)) {
                                var s = e(l), q = d(h, s), h = d(s, h), h = m(h, -1), q = m(q, 1);
                                0 === q.length ? c.removeClass(g, h) : 0 === h.length ? c.addClass(g, q) : c.setClass(g, q, h);
                            }
                        }
                        l = ga(b);
                    }
                    var l;
                    f.$watch(k[b], h, !0);
                    k.$observe("class", function(a) {
                        h(f.$eval(k[b]));
                    });
                    "ngClass" !== b && f.$watch("$index", function(c, d) {
                        var g = c & 1;
                        if (g !== (d & 1)) {
                            var h = e(f.$eval(k[b]));
                            g === a ? (g = m(h, 1), k.$addClass(g)) : (g = m(h, -1), k.$removeClass(g));
                        }
                    });
                }
            };
        } ];
    }
    var Je = "validity", N = function(b) {
        return z(b) ? b.toLowerCase() : b;
    }, ib = Object.prototype.hasOwnProperty, Ia = function(b) {
        return z(b) ? b.toUpperCase() : b;
    }, R, u, Da, Aa = [].slice, Ke = [].push, ya = Object.prototype.toString, Sa = x("ng"), Ua = Q.angular || (Q.angular = {}), Xa, Ma, la = [ "0", "0", "0" ];
    R = Z((/msie (\d+)/.exec(N(navigator.userAgent)) || [])[1]);
    isNaN(R) && (R = Z((/trident\/.*; rv:(\d+)/.exec(N(navigator.userAgent)) || [])[1]));
    y.$inject = [];
    Ga.$inject = [];
    var H = function() {
        return P(Array.isArray) ? Array.isArray : function(b) {
            return "[object Array]" === ya.call(b);
        };
    }(), aa = function() {
        return String.prototype.trim ? function(b) {
            return z(b) ? b.trim() : b;
        } : function(b) {
            return z(b) ? b.replace(/^\s\s*/, "").replace(/\s\s*$/, "") : b;
        };
    }();
    Ma = 9 > R ? function(b) {
        b = b.nodeName ? b : b[0];
        return b.scopeName && "HTML" != b.scopeName ? Ia(b.scopeName + ":" + b.nodeName) : b.nodeName;
    } : function(b) {
        return b.nodeName ? b.nodeName : b[0].nodeName;
    };
    var Wa = function() {
        if (A(Wa.isActive_)) return Wa.isActive_;
        var b = !(!X.querySelector("[ng-csp]") && !X.querySelector("[data-ng-csp]"));
        if (!b) try {
            new Function("");
        } catch (a) {
            b = !0;
        }
        return Wa.isActive_ = b;
    }, Yc = /[A-Z]/g, ad = {
        full: "1.2.23",
        major: 1,
        minor: 2,
        dot: 23,
        codeName: "superficial-malady"
    };
    S.expando = "ng339";
    var $a = S.cache = {}, ne = 1, rb = Q.document.addEventListener ? function(b, a, c) {
        b.addEventListener(a, c, !1);
    } : function(b, a, c) {
        b.attachEvent("on" + a, c);
    }, Za = Q.document.removeEventListener ? function(b, a, c) {
        b.removeEventListener(a, c, !1);
    } : function(b, a, c) {
        b.detachEvent("on" + a, c);
    };
    S._data = function(b) {
        return this.cache[b[this.expando]] || {};
    };
    var ie = /([\:\-\_]+(.))/g, je = /^moz([A-Z])/, Hb = x("jqLite"), ke = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, Ib = /<|&#?\w+;/, le = /<([\w:]+)/, me = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, ba = {
        option: [ 1, '<select multiple="multiple">', "</select>" ],
        thead: [ 1, "<table>", "</table>" ],
        col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
        tr: [ 2, "<table><tbody>", "</tbody></table>" ],
        td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
        _default: [ 0, "", "" ]
    };
    ba.optgroup = ba.option;
    ba.tbody = ba.tfoot = ba.colgroup = ba.caption = ba.thead;
    ba.th = ba.td;
    var La = S.prototype = {
        ready: function(b) {
            function a() {
                c || (c = !0, b());
            }
            var c = !1;
            "complete" === X.readyState ? setTimeout(a) : (this.on("DOMContentLoaded", a), S(Q).on("load", a));
        },
        toString: function() {
            var b = [];
            r(this, function(a) {
                b.push("" + a);
            });
            return "[" + b.join(", ") + "]";
        },
        eq: function(b) {
            return 0 <= b ? u(this[b]) : u(this[this.length + b]);
        },
        length: 0,
        push: Ke,
        sort: [].sort,
        splice: [].splice
    }, ob = {};
    r("multiple selected checked disabled readOnly required open".split(" "), function(b) {
        ob[N(b)] = b;
    });
    var rc = {};
    r("input select option textarea button form details".split(" "), function(b) {
        rc[Ia(b)] = !0;
    });
    r({
        data: Mb,
        removeData: Lb
    }, function(b, a) {
        S[a] = b;
    });
    r({
        data: Mb,
        inheritedData: nb,
        scope: function(b) {
            return u.data(b, "$scope") || nb(b.parentNode || b, [ "$isolateScope", "$scope" ]);
        },
        isolateScope: function(b) {
            return u.data(b, "$isolateScope") || u.data(b, "$isolateScopeNoTemplate");
        },
        controller: oc,
        injector: function(b) {
            return nb(b, "$injector");
        },
        removeAttr: function(b, a) {
            b.removeAttribute(a);
        },
        hasClass: Nb,
        css: function(b, a, c) {
            a = Ya(a);
            if (A(c)) b.style[a] = c; else {
                var d;
                8 >= R && (d = b.currentStyle && b.currentStyle[a], "" === d && (d = "auto"));
                d = d || b.style[a];
                8 >= R && (d = "" === d ? t : d);
                return d;
            }
        },
        attr: function(b, a, c) {
            var d = N(a);
            if (ob[d]) if (A(c)) c ? (b[a] = !0, b.setAttribute(a, d)) : (b[a] = !1, b.removeAttribute(d)); else return b[a] || (b.attributes.getNamedItem(a) || y).specified ? d : t; else if (A(c)) b.setAttribute(a, c); else if (b.getAttribute) return b = b.getAttribute(a, 2), 
            null === b ? t : b;
        },
        prop: function(b, a, c) {
            if (A(c)) b[a] = c; else return b[a];
        },
        text: function() {
            function b(b, d) {
                var e = a[b.nodeType];
                if (D(d)) return e ? b[e] : "";
                b[e] = d;
            }
            var a = [];
            9 > R ? (a[1] = "innerText", a[3] = "nodeValue") : a[1] = a[3] = "textContent";
            b.$dv = "";
            return b;
        }(),
        val: function(b, a) {
            if (D(a)) {
                if ("SELECT" === Ma(b) && b.multiple) {
                    var c = [];
                    r(b.options, function(a) {
                        a.selected && c.push(a.value || a.text);
                    });
                    return 0 === c.length ? null : c;
                }
                return b.value;
            }
            b.value = a;
        },
        html: function(b, a) {
            if (D(a)) return b.innerHTML;
            for (var c = 0, d = b.childNodes; c < d.length; c++) Ja(d[c]);
            b.innerHTML = a;
        },
        empty: pc
    }, function(b, a) {
        S.prototype[a] = function(a, d) {
            var e, f, g = this.length;
            if (b !== pc && (2 == b.length && b !== Nb && b !== oc ? a : d) === t) {
                if (T(a)) {
                    for (e = 0; e < g; e++) if (b === Mb) b(this[e], a); else for (f in a) b(this[e], f, a[f]);
                    return this;
                }
                e = b.$dv;
                g = e === t ? Math.min(g, 1) : g;
                for (f = 0; f < g; f++) {
                    var k = b(this[f], a, d);
                    e = e ? e + k : k;
                }
                return e;
            }
            for (e = 0; e < g; e++) b(this[e], a, d);
            return this;
        };
    });
    r({
        removeData: Lb,
        dealoc: Ja,
        on: function a(c, d, e, f) {
            if (A(f)) throw Hb("onargs");
            var g = ma(c, "events"), k = ma(c, "handle");
            g || ma(c, "events", g = {});
            k || ma(c, "handle", k = oe(c, g));
            r(d.split(" "), function(d) {
                var f = g[d];
                if (!f) {
                    if ("mouseenter" == d || "mouseleave" == d) {
                        var l = X.body.contains || X.body.compareDocumentPosition ? function(a, c) {
                            var d = 9 === a.nodeType ? a.documentElement : a, e = c && c.parentNode;
                            return a === e || !!(e && 1 === e.nodeType && (d.contains ? d.contains(e) : a.compareDocumentPosition && a.compareDocumentPosition(e) & 16));
                        } : function(a, c) {
                            if (c) for (;c = c.parentNode; ) if (c === a) return !0;
                            return !1;
                        };
                        g[d] = [];
                        a(c, {
                            mouseleave: "mouseout",
                            mouseenter: "mouseover"
                        }[d], function(a) {
                            var c = a.relatedTarget;
                            c && (c === this || l(this, c)) || k(a, d);
                        });
                    } else rb(c, d, k), g[d] = [];
                    f = g[d];
                }
                f.push(e);
            });
        },
        off: nc,
        one: function(a, c, d) {
            a = u(a);
            a.on(c, function f() {
                a.off(c, d);
                a.off(c, f);
            });
            a.on(c, d);
        },
        replaceWith: function(a, c) {
            var d, e = a.parentNode;
            Ja(a);
            r(new S(c), function(c) {
                d ? e.insertBefore(c, d.nextSibling) : e.replaceChild(c, a);
                d = c;
            });
        },
        children: function(a) {
            var c = [];
            r(a.childNodes, function(a) {
                1 === a.nodeType && c.push(a);
            });
            return c;
        },
        contents: function(a) {
            return a.contentDocument || a.childNodes || [];
        },
        append: function(a, c) {
            r(new S(c), function(c) {
                1 !== a.nodeType && 11 !== a.nodeType || a.appendChild(c);
            });
        },
        prepend: function(a, c) {
            if (1 === a.nodeType) {
                var d = a.firstChild;
                r(new S(c), function(c) {
                    a.insertBefore(c, d);
                });
            }
        },
        wrap: function(a, c) {
            c = u(c)[0];
            var d = a.parentNode;
            d && d.replaceChild(c, a);
            c.appendChild(a);
        },
        remove: function(a) {
            Ja(a);
            var c = a.parentNode;
            c && c.removeChild(a);
        },
        after: function(a, c) {
            var d = a, e = a.parentNode;
            r(new S(c), function(a) {
                e.insertBefore(a, d.nextSibling);
                d = a;
            });
        },
        addClass: mb,
        removeClass: lb,
        toggleClass: function(a, c, d) {
            c && r(c.split(" "), function(c) {
                var f = d;
                D(f) && (f = !Nb(a, c));
                (f ? mb : lb)(a, c);
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
        find: function(a, c) {
            return a.getElementsByTagName ? a.getElementsByTagName(c) : [];
        },
        clone: Kb,
        triggerHandler: function(a, c, d) {
            var e, f;
            e = c.type || c;
            var g = (ma(a, "events") || {})[e];
            g && (e = {
                preventDefault: function() {
                    this.defaultPrevented = !0;
                },
                isDefaultPrevented: function() {
                    return !0 === this.defaultPrevented;
                },
                stopPropagation: y,
                type: e,
                target: a
            }, c.type && (e = B(e, c)), c = ga(g), f = d ? [ e ].concat(d) : [ e ], r(c, function(c) {
                c.apply(a, f);
            }));
        }
    }, function(a, c) {
        S.prototype[c] = function(c, e, f) {
            for (var g, k = 0; k < this.length; k++) D(g) ? (g = a(this[k], c, e, f), A(g) && (g = u(g))) : Jb(g, a(this[k], c, e, f));
            return A(g) ? g : this;
        };
        S.prototype.bind = S.prototype.on;
        S.prototype.unbind = S.prototype.off;
    });
    ab.prototype = {
        put: function(a, c) {
            this[Ka(a, this.nextUid)] = c;
        },
        get: function(a) {
            return this[Ka(a, this.nextUid)];
        },
        remove: function(a) {
            var c = this[a = Ka(a, this.nextUid)];
            delete this[a];
            return c;
        }
    };
    var qe = /^function\s*[^\(]*\(\s*([^\)]*)\)/m, re = /,/, se = /^\s*(_?)(\S+?)\1\s*$/, pe = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm, bb = x("$injector"), Le = x("$animate"), Md = [ "$provide", function(a) {
        this.$$selectors = {};
        this.register = function(c, d) {
            var e = c + "-animation";
            if (c && "." != c.charAt(0)) throw Le("notcsel", c);
            this.$$selectors[c.substr(1)] = e;
            a.factory(e, d);
        };
        this.classNameFilter = function(a) {
            1 === arguments.length && (this.$$classNameFilter = a instanceof RegExp ? a : null);
            return this.$$classNameFilter;
        };
        this.$get = [ "$timeout", "$$asyncCallback", function(a, d) {
            return {
                enter: function(a, c, g, k) {
                    g ? g.after(a) : (c && c[0] || (c = g.parent()), c.append(a));
                    k && d(k);
                },
                leave: function(a, c) {
                    a.remove();
                    c && d(c);
                },
                move: function(a, c, d, k) {
                    this.enter(a, c, d, k);
                },
                addClass: function(a, c, g) {
                    c = z(c) ? c : H(c) ? c.join(" ") : "";
                    r(a, function(a) {
                        mb(a, c);
                    });
                    g && d(g);
                },
                removeClass: function(a, c, g) {
                    c = z(c) ? c : H(c) ? c.join(" ") : "";
                    r(a, function(a) {
                        lb(a, c);
                    });
                    g && d(g);
                },
                setClass: function(a, c, g, k) {
                    r(a, function(a) {
                        mb(a, c);
                        lb(a, g);
                    });
                    k && d(k);
                },
                enabled: y
            };
        } ];
    } ], ia = x("$compile");
    ic.$inject = [ "$provide", "$$sanitizeUriProvider" ];
    var ue = /^(x[\:\-_]|data[\:\-_])/i, yc = x("$interpolate"), Me = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/, xe = {
        http: 80,
        https: 443,
        ftp: 21
    }, Sb = x("$location");
    Ub.prototype = Tb.prototype = Bc.prototype = {
        $$html5: !1,
        $$replace: !1,
        absUrl: sb("$$absUrl"),
        url: function(a, c) {
            if (D(a)) return this.$$url;
            var d = Me.exec(a);
            d[1] && this.path(decodeURIComponent(d[1]));
            (d[2] || d[1]) && this.search(d[3] || "");
            this.hash(d[5] || "", c);
            return this;
        },
        protocol: sb("$$protocol"),
        host: sb("$$host"),
        port: sb("$$port"),
        path: Cc("$$path", function(a) {
            return "/" == a.charAt(0) ? a : "/" + a;
        }),
        search: function(a, c) {
            switch (arguments.length) {
              case 0:
                return this.$$search;

              case 1:
                if (z(a)) this.$$search = ec(a); else if (T(a)) r(a, function(c, e) {
                    null == c && delete a[e];
                }), this.$$search = a; else throw Sb("isrcharg");
                break;

              default:
                D(c) || null === c ? delete this.$$search[a] : this.$$search[a] = c;
            }
            this.$$compose();
            return this;
        },
        hash: Cc("$$hash", Ga),
        replace: function() {
            this.$$replace = !0;
            return this;
        }
    };
    var ka = x("$parse"), Fc = {}, va, Ne = Function.prototype.call, Oe = Function.prototype.apply, Qc = Function.prototype.bind, eb = {
        "null": function() {
            return null;
        },
        "true": function() {
            return !0;
        },
        "false": function() {
            return !1;
        },
        undefined: y,
        "+": function(a, c, d, e) {
            d = d(a, c);
            e = e(a, c);
            return A(d) ? A(e) ? d + e : d : A(e) ? e : t;
        },
        "-": function(a, c, d, e) {
            d = d(a, c);
            e = e(a, c);
            return (A(d) ? d : 0) - (A(e) ? e : 0);
        },
        "*": function(a, c, d, e) {
            return d(a, c) * e(a, c);
        },
        "/": function(a, c, d, e) {
            return d(a, c) / e(a, c);
        },
        "%": function(a, c, d, e) {
            return d(a, c) % e(a, c);
        },
        "^": function(a, c, d, e) {
            return d(a, c) ^ e(a, c);
        },
        "=": y,
        "===": function(a, c, d, e) {
            return d(a, c) === e(a, c);
        },
        "!==": function(a, c, d, e) {
            return d(a, c) !== e(a, c);
        },
        "==": function(a, c, d, e) {
            return d(a, c) == e(a, c);
        },
        "!=": function(a, c, d, e) {
            return d(a, c) != e(a, c);
        },
        "<": function(a, c, d, e) {
            return d(a, c) < e(a, c);
        },
        ">": function(a, c, d, e) {
            return d(a, c) > e(a, c);
        },
        "<=": function(a, c, d, e) {
            return d(a, c) <= e(a, c);
        },
        ">=": function(a, c, d, e) {
            return d(a, c) >= e(a, c);
        },
        "&&": function(a, c, d, e) {
            return d(a, c) && e(a, c);
        },
        "||": function(a, c, d, e) {
            return d(a, c) || e(a, c);
        },
        "&": function(a, c, d, e) {
            return d(a, c) & e(a, c);
        },
        "|": function(a, c, d, e) {
            return e(a, c)(a, c, d(a, c));
        },
        "!": function(a, c, d) {
            return !d(a, c);
        }
    }, Pe = {
        n: "\n",
        f: "\f",
        r: "\r",
        t: "	",
        v: "",
        "'": "'",
        '"': '"'
    }, Wb = function(a) {
        this.options = a;
    };
    Wb.prototype = {
        constructor: Wb,
        lex: function(a) {
            this.text = a;
            this.index = 0;
            this.ch = t;
            this.lastCh = ":";
            for (this.tokens = []; this.index < this.text.length; ) {
                this.ch = this.text.charAt(this.index);
                if (this.is("\"'")) this.readString(this.ch); else if (this.isNumber(this.ch) || this.is(".") && this.isNumber(this.peek())) this.readNumber(); else if (this.isIdent(this.ch)) this.readIdent(); else if (this.is("(){}[].,;:?")) this.tokens.push({
                    index: this.index,
                    text: this.ch
                }), this.index++; else if (this.isWhitespace(this.ch)) {
                    this.index++;
                    continue;
                } else {
                    a = this.ch + this.peek();
                    var c = a + this.peek(2), d = eb[this.ch], e = eb[a], f = eb[c];
                    f ? (this.tokens.push({
                        index: this.index,
                        text: c,
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
            a = a || 1;
            return this.index + a < this.text.length ? this.text.charAt(this.index + a) : !1;
        },
        isNumber: function(a) {
            return "0" <= a && "9" >= a;
        },
        isWhitespace: function(a) {
            return " " === a || "\r" === a || "	" === a || "\n" === a || "" === a || " " === a;
        },
        isIdent: function(a) {
            return "a" <= a && "z" >= a || "A" <= a && "Z" >= a || "_" === a || "$" === a;
        },
        isExpOperator: function(a) {
            return "-" === a || "+" === a || this.isNumber(a);
        },
        throwError: function(a, c, d) {
            d = d || this.index;
            c = A(c) ? "s " + c + "-" + this.index + " [" + this.text.substring(c, d) + "]" : " " + d;
            throw ka("lexerr", a, c, this.text);
        },
        readNumber: function() {
            for (var a = "", c = this.index; this.index < this.text.length; ) {
                var d = N(this.text.charAt(this.index));
                if ("." == d || this.isNumber(d)) a += d; else {
                    var e = this.peek();
                    if ("e" == d && this.isExpOperator(e)) a += d; else if (this.isExpOperator(d) && e && this.isNumber(e) && "e" == a.charAt(a.length - 1)) a += d; else if (!this.isExpOperator(d) || e && this.isNumber(e) || "e" != a.charAt(a.length - 1)) break; else this.throwError("Invalid exponent");
                }
                this.index++;
            }
            a *= 1;
            this.tokens.push({
                index: c,
                text: a,
                literal: !0,
                constant: !0,
                fn: function() {
                    return a;
                }
            });
        },
        readIdent: function() {
            for (var a = this, c = "", d = this.index, e, f, g, k; this.index < this.text.length; ) {
                k = this.text.charAt(this.index);
                if ("." === k || this.isIdent(k) || this.isNumber(k)) "." === k && (e = this.index), 
                c += k; else break;
                this.index++;
            }
            if (e) for (f = this.index; f < this.text.length; ) {
                k = this.text.charAt(f);
                if ("(" === k) {
                    g = c.substr(e - d + 1);
                    c = c.substr(0, e - d);
                    this.index = f;
                    break;
                }
                if (this.isWhitespace(k)) f++; else break;
            }
            d = {
                index: d,
                text: c
            };
            if (eb.hasOwnProperty(c)) d.fn = eb[c], d.literal = !0, d.constant = !0; else {
                var m = Ec(c, this.options, this.text);
                d.fn = B(function(a, c) {
                    return m(a, c);
                }, {
                    assign: function(d, e) {
                        return tb(d, c, e, a.text, a.options);
                    }
                });
            }
            this.tokens.push(d);
            g && (this.tokens.push({
                index: e,
                text: "."
            }), this.tokens.push({
                index: e + 1,
                text: g
            }));
        },
        readString: function(a) {
            var c = this.index;
            this.index++;
            for (var d = "", e = a, f = !1; this.index < this.text.length; ) {
                var g = this.text.charAt(this.index), e = e + g;
                if (f) "u" === g ? (f = this.text.substring(this.index + 1, this.index + 5), f.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + f + "]"), 
                this.index += 4, d += String.fromCharCode(parseInt(f, 16))) : d += Pe[g] || g, f = !1; else if ("\\" === g) f = !0; else {
                    if (g === a) {
                        this.index++;
                        this.tokens.push({
                            index: c,
                            text: e,
                            string: d,
                            literal: !0,
                            constant: !0,
                            fn: function() {
                                return d;
                            }
                        });
                        return;
                    }
                    d += g;
                }
                this.index++;
            }
            this.throwError("Unterminated quote", c);
        }
    };
    var db = function(a, c, d) {
        this.lexer = a;
        this.$filter = c;
        this.options = d;
    };
    db.ZERO = B(function() {
        return 0;
    }, {
        constant: !0
    });
    db.prototype = {
        constructor: db,
        parse: function(a) {
            this.text = a;
            this.tokens = this.lexer.lex(a);
            a = this.statements();
            0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]);
            a.literal = !!a.literal;
            a.constant = !!a.constant;
            return a;
        },
        primary: function() {
            var a;
            if (this.expect("(")) a = this.filterChain(), this.consume(")"); else if (this.expect("[")) a = this.arrayDeclaration(); else if (this.expect("{")) a = this.object(); else {
                var c = this.expect();
                (a = c.fn) || this.throwError("not a primary expression", c);
                a.literal = !!c.literal;
                a.constant = !!c.constant;
            }
            for (var d; c = this.expect("(", "[", "."); ) "(" === c.text ? (a = this.functionCall(a, d), 
            d = null) : "[" === c.text ? (d = a, a = this.objectIndex(a)) : "." === c.text ? (d = a, 
            a = this.fieldAccess(a)) : this.throwError("IMPOSSIBLE");
            return a;
        },
        throwError: function(a, c) {
            throw ka("syntax", c.text, a, c.index + 1, this.text, this.text.substring(c.index));
        },
        peekToken: function() {
            if (0 === this.tokens.length) throw ka("ueoe", this.text);
            return this.tokens[0];
        },
        peek: function(a, c, d, e) {
            if (0 < this.tokens.length) {
                var f = this.tokens[0], g = f.text;
                if (g === a || g === c || g === d || g === e || !(a || c || d || e)) return f;
            }
            return !1;
        },
        expect: function(a, c, d, e) {
            return (a = this.peek(a, c, d, e)) ? (this.tokens.shift(), a) : !1;
        },
        consume: function(a) {
            this.expect(a) || this.throwError("is unexpected, expecting [" + a + "]", this.peek());
        },
        unaryFn: function(a, c) {
            return B(function(d, e) {
                return a(d, e, c);
            }, {
                constant: c.constant
            });
        },
        ternaryFn: function(a, c, d) {
            return B(function(e, f) {
                return a(e, f) ? c(e, f) : d(e, f);
            }, {
                constant: a.constant && c.constant && d.constant
            });
        },
        binaryFn: function(a, c, d) {
            return B(function(e, f) {
                return c(e, f, a, d);
            }, {
                constant: a.constant && d.constant
            });
        },
        statements: function() {
            for (var a = []; ;) if (0 < this.tokens.length && !this.peek("}", ")", ";", "]") && a.push(this.filterChain()), 
            !this.expect(";")) return 1 === a.length ? a[0] : function(c, d) {
                for (var e, f = 0; f < a.length; f++) {
                    var g = a[f];
                    g && (e = g(c, d));
                }
                return e;
            };
        },
        filterChain: function() {
            for (var a = this.expression(), c; ;) if (c = this.expect("|")) a = this.binaryFn(a, c.fn, this.filter()); else return a;
        },
        filter: function() {
            for (var a = this.expect(), c = this.$filter(a.text), d = []; ;) if (a = this.expect(":")) d.push(this.expression()); else {
                var e = function(a, e, k) {
                    k = [ k ];
                    for (var m = 0; m < d.length; m++) k.push(d[m](a, e));
                    return c.apply(a, k);
                };
                return function() {
                    return e;
                };
            }
        },
        expression: function() {
            return this.assignment();
        },
        assignment: function() {
            var a = this.ternary(), c, d;
            return (d = this.expect("=")) ? (a.assign || this.throwError("implies assignment but [" + this.text.substring(0, d.index) + "] can not be assigned to", d), 
            c = this.ternary(), function(d, f) {
                return a.assign(d, c(d, f), f);
            }) : a;
        },
        ternary: function() {
            var a = this.logicalOR(), c, d;
            if (this.expect("?")) {
                c = this.assignment();
                if (d = this.expect(":")) return this.ternaryFn(a, c, this.assignment());
                this.throwError("expected :", d);
            } else return a;
        },
        logicalOR: function() {
            for (var a = this.logicalAND(), c; ;) if (c = this.expect("||")) a = this.binaryFn(a, c.fn, this.logicalAND()); else return a;
        },
        logicalAND: function() {
            var a = this.equality(), c;
            if (c = this.expect("&&")) a = this.binaryFn(a, c.fn, this.logicalAND());
            return a;
        },
        equality: function() {
            var a = this.relational(), c;
            if (c = this.expect("==", "!=", "===", "!==")) a = this.binaryFn(a, c.fn, this.equality());
            return a;
        },
        relational: function() {
            var a = this.additive(), c;
            if (c = this.expect("<", ">", "<=", ">=")) a = this.binaryFn(a, c.fn, this.relational());
            return a;
        },
        additive: function() {
            for (var a = this.multiplicative(), c; c = this.expect("+", "-"); ) a = this.binaryFn(a, c.fn, this.multiplicative());
            return a;
        },
        multiplicative: function() {
            for (var a = this.unary(), c; c = this.expect("*", "/", "%"); ) a = this.binaryFn(a, c.fn, this.unary());
            return a;
        },
        unary: function() {
            var a;
            return this.expect("+") ? this.primary() : (a = this.expect("-")) ? this.binaryFn(db.ZERO, a.fn, this.unary()) : (a = this.expect("!")) ? this.unaryFn(a.fn, this.unary()) : this.primary();
        },
        fieldAccess: function(a) {
            var c = this, d = this.expect().text, e = Ec(d, this.options, this.text);
            return B(function(c, d, k) {
                return e(k || a(c, d));
            }, {
                assign: function(e, g, k) {
                    (k = a(e, k)) || a.assign(e, k = {});
                    return tb(k, d, g, c.text, c.options);
                }
            });
        },
        objectIndex: function(a) {
            var c = this, d = this.expression();
            this.consume("]");
            return B(function(e, f) {
                var g = a(e, f), k = d(e, f), m;
                ja(k, c.text);
                if (!g) return t;
                (g = Oa(g[k], c.text)) && (g.then && c.options.unwrapPromises) && (m = g, "$$v" in g || (m.$$v = t, 
                m.then(function(a) {
                    m.$$v = a;
                })), g = g.$$v);
                return g;
            }, {
                assign: function(e, f, g) {
                    var k = ja(d(e, g), c.text);
                    (g = Oa(a(e, g), c.text)) || a.assign(e, g = {});
                    return g[k] = f;
                }
            });
        },
        functionCall: function(a, c) {
            var d = [];
            if (")" !== this.peekToken().text) {
                do d.push(this.expression()); while (this.expect(","));
            }
            this.consume(")");
            var e = this;
            return function(f, g) {
                for (var k = [], m = c ? c(f, g) : f, h = 0; h < d.length; h++) k.push(d[h](f, g));
                h = a(f, g, m) || y;
                Oa(m, e.text);
                var l = e.text;
                if (h) {
                    if (h.constructor === h) throw ka("isecfn", l);
                    if (h === Ne || h === Oe || Qc && h === Qc) throw ka("isecff", l);
                }
                k = h.apply ? h.apply(m, k) : h(k[0], k[1], k[2], k[3], k[4]);
                return Oa(k, e.text);
            };
        },
        arrayDeclaration: function() {
            var a = [], c = !0;
            if ("]" !== this.peekToken().text) {
                do {
                    if (this.peek("]")) break;
                    var d = this.expression();
                    a.push(d);
                    d.constant || (c = !1);
                } while (this.expect(","));
            }
            this.consume("]");
            return B(function(c, d) {
                for (var g = [], k = 0; k < a.length; k++) g.push(a[k](c, d));
                return g;
            }, {
                literal: !0,
                constant: c
            });
        },
        object: function() {
            var a = [], c = !0;
            if ("}" !== this.peekToken().text) {
                do {
                    if (this.peek("}")) break;
                    var d = this.expect(), d = d.string || d.text;
                    this.consume(":");
                    var e = this.expression();
                    a.push({
                        key: d,
                        value: e
                    });
                    e.constant || (c = !1);
                } while (this.expect(","));
            }
            this.consume("}");
            return B(function(c, d) {
                for (var e = {}, m = 0; m < a.length; m++) {
                    var h = a[m];
                    e[h.key] = h.value(c, d);
                }
                return e;
            }, {
                literal: !0,
                constant: c
            });
        }
    };
    var Vb = {}, wa = x("$sce"), fa = {
        HTML: "html",
        CSS: "css",
        URL: "url",
        RESOURCE_URL: "resourceUrl",
        JS: "js"
    }, V = X.createElement("a"), Hc = ua(Q.location.href, !0);
    mc.$inject = [ "$provide" ];
    Ic.$inject = [ "$locale" ];
    Kc.$inject = [ "$locale" ];
    var Nc = ".", He = {
        yyyy: Y("FullYear", 4),
        yy: Y("FullYear", 2, 0, !0),
        y: Y("FullYear", 1),
        MMMM: ub("Month"),
        MMM: ub("Month", !0),
        MM: Y("Month", 2, 1),
        M: Y("Month", 1, 1),
        dd: Y("Date", 2),
        d: Y("Date", 1),
        HH: Y("Hours", 2),
        H: Y("Hours", 1),
        hh: Y("Hours", 2, -12),
        h: Y("Hours", 1, -12),
        mm: Y("Minutes", 2),
        m: Y("Minutes", 1),
        ss: Y("Seconds", 2),
        s: Y("Seconds", 1),
        sss: Y("Milliseconds", 3),
        EEEE: ub("Day"),
        EEE: ub("Day", !0),
        a: function(a, c) {
            return 12 > a.getHours() ? c.AMPMS[0] : c.AMPMS[1];
        },
        Z: function(a) {
            a = -1 * a.getTimezoneOffset();
            return a = (0 <= a ? "+" : "") + (Xb(Math[0 < a ? "floor" : "ceil"](a / 60), 2) + Xb(Math.abs(a % 60), 2));
        }
    }, Ge = /((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/, Fe = /^\-?\d+$/;
    Jc.$inject = [ "$locale" ];
    var De = $(N), Ee = $(Ia);
    Lc.$inject = [ "$parse" ];
    var dd = $({
        restrict: "E",
        compile: function(a, c) {
            8 >= R && (c.href || c.name || c.$set("href", ""), a.append(X.createComment("IE fix")));
            if (!c.href && !c.xlinkHref && !c.name) return function(a, c) {
                var f = "[object SVGAnimatedString]" === ya.call(c.prop("href")) ? "xlink:href" : "href";
                c.on("click", function(a) {
                    c.attr(f) || a.preventDefault();
                });
            };
        }
    }), Fb = {};
    r(ob, function(a, c) {
        if ("multiple" != a) {
            var d = na("ng-" + c);
            Fb[d] = function() {
                return {
                    priority: 100,
                    link: function(a, f, g) {
                        a.$watch(g[d], function(a) {
                            g.$set(c, !!a);
                        });
                    }
                };
            };
        }
    });
    r([ "src", "srcset", "href" ], function(a) {
        var c = na("ng-" + a);
        Fb[c] = function() {
            return {
                priority: 99,
                link: function(d, e, f) {
                    var g = a, k = a;
                    "href" === a && "[object SVGAnimatedString]" === ya.call(e.prop("href")) && (k = "xlinkHref", 
                    f.$attr[k] = "xlink:href", g = null);
                    f.$observe(c, function(c) {
                        c ? (f.$set(k, c), R && g && e.prop(g, f[k])) : "href" === a && f.$set(k, null);
                    });
                }
            };
        };
    });
    var xb = {
        $addControl: y,
        $removeControl: y,
        $setValidity: y,
        $setDirty: y,
        $setPristine: y
    };
    Oc.$inject = [ "$element", "$attrs", "$scope", "$animate" ];
    var Rc = function(a) {
        return [ "$timeout", function(c) {
            return {
                name: "form",
                restrict: a ? "EAC" : "E",
                controller: Oc,
                compile: function() {
                    return {
                        pre: function(a, e, f, g) {
                            if (!f.action) {
                                var k = function(a) {
                                    a.preventDefault ? a.preventDefault() : a.returnValue = !1;
                                };
                                rb(e[0], "submit", k);
                                e.on("$destroy", function() {
                                    c(function() {
                                        Za(e[0], "submit", k);
                                    }, 0, !1);
                                });
                            }
                            var m = e.parent().controller("form"), h = f.name || f.ngForm;
                            h && tb(a, h, g, h);
                            if (m) e.on("$destroy", function() {
                                m.$removeControl(g);
                                h && tb(a, h, t, h);
                                B(g, xb);
                            });
                        }
                    };
                }
            };
        } ];
    }, ed = Rc(), rd = Rc(!0), Qe = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/, Re = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i, Se = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/, Sc = {
        text: zb,
        number: function(a, c, d, e, f, g) {
            zb(a, c, d, e, f, g);
            e.$parsers.push(function(a) {
                var c = e.$isEmpty(a);
                if (c || Se.test(a)) return e.$setValidity("number", !0), "" === a ? null : c ? a : parseFloat(a);
                e.$setValidity("number", !1);
                return t;
            });
            Ie(e, "number", Te, null, e.$$validityState);
            e.$formatters.push(function(a) {
                return e.$isEmpty(a) ? "" : "" + a;
            });
            d.min && (a = function(a) {
                var c = parseFloat(d.min);
                return ra(e, "min", e.$isEmpty(a) || a >= c, a);
            }, e.$parsers.push(a), e.$formatters.push(a));
            d.max && (a = function(a) {
                var c = parseFloat(d.max);
                return ra(e, "max", e.$isEmpty(a) || a <= c, a);
            }, e.$parsers.push(a), e.$formatters.push(a));
            e.$formatters.push(function(a) {
                return ra(e, "number", e.$isEmpty(a) || Ab(a), a);
            });
        },
        url: function(a, c, d, e, f, g) {
            zb(a, c, d, e, f, g);
            a = function(a) {
                return ra(e, "url", e.$isEmpty(a) || Qe.test(a), a);
            };
            e.$formatters.push(a);
            e.$parsers.push(a);
        },
        email: function(a, c, d, e, f, g) {
            zb(a, c, d, e, f, g);
            a = function(a) {
                return ra(e, "email", e.$isEmpty(a) || Re.test(a), a);
            };
            e.$formatters.push(a);
            e.$parsers.push(a);
        },
        radio: function(a, c, d, e) {
            D(d.name) && c.attr("name", gb());
            c.on("click", function() {
                c[0].checked && a.$apply(function() {
                    e.$setViewValue(d.value);
                });
            });
            e.$render = function() {
                c[0].checked = d.value == e.$viewValue;
            };
            d.$observe("value", e.$render);
        },
        checkbox: function(a, c, d, e) {
            var f = d.ngTrueValue, g = d.ngFalseValue;
            z(f) || (f = !0);
            z(g) || (g = !1);
            c.on("click", function() {
                a.$apply(function() {
                    e.$setViewValue(c[0].checked);
                });
            });
            e.$render = function() {
                c[0].checked = e.$viewValue;
            };
            e.$isEmpty = function(a) {
                return a !== f;
            };
            e.$formatters.push(function(a) {
                return a === f;
            });
            e.$parsers.push(function(a) {
                return a ? f : g;
            });
        },
        hidden: y,
        button: y,
        submit: y,
        reset: y,
        file: y
    }, Te = [ "badInput" ], jc = [ "$browser", "$sniffer", function(a, c) {
        return {
            restrict: "E",
            require: "?ngModel",
            link: function(d, e, f, g) {
                g && (Sc[N(f.type)] || Sc.text)(d, e, f, g, c, a);
            }
        };
    } ], wb = "ng-valid", vb = "ng-invalid", Pa = "ng-pristine", yb = "ng-dirty", Ue = [ "$scope", "$exceptionHandler", "$attrs", "$element", "$parse", "$animate", function(a, c, d, e, f, g) {
        function k(a, c) {
            c = c ? "-" + kb(c, "-") : "";
            g.removeClass(e, (a ? vb : wb) + c);
            g.addClass(e, (a ? wb : vb) + c);
        }
        this.$modelValue = this.$viewValue = Number.NaN;
        this.$parsers = [];
        this.$formatters = [];
        this.$viewChangeListeners = [];
        this.$pristine = !0;
        this.$dirty = !1;
        this.$valid = !0;
        this.$invalid = !1;
        this.$name = d.name;
        var m = f(d.ngModel), h = m.assign;
        if (!h) throw x("ngModel")("nonassign", d.ngModel, ha(e));
        this.$render = y;
        this.$isEmpty = function(a) {
            return D(a) || "" === a || null === a || a !== a;
        };
        var l = e.inheritedData("$formController") || xb, n = 0, p = this.$error = {};
        e.addClass(Pa);
        k(!0);
        this.$setValidity = function(a, c) {
            p[a] !== !c && (c ? (p[a] && n--, n || (k(!0), this.$valid = !0, this.$invalid = !1)) : (k(!1), 
            this.$invalid = !0, this.$valid = !1, n++), p[a] = !c, k(c, a), l.$setValidity(a, c, this));
        };
        this.$setPristine = function() {
            this.$dirty = !1;
            this.$pristine = !0;
            g.removeClass(e, yb);
            g.addClass(e, Pa);
        };
        this.$setViewValue = function(d) {
            this.$viewValue = d;
            this.$pristine && (this.$dirty = !0, this.$pristine = !1, g.removeClass(e, Pa), 
            g.addClass(e, yb), l.$setDirty());
            r(this.$parsers, function(a) {
                d = a(d);
            });
            this.$modelValue !== d && (this.$modelValue = d, h(a, d), r(this.$viewChangeListeners, function(a) {
                try {
                    a();
                } catch (d) {
                    c(d);
                }
            }));
        };
        var q = this;
        a.$watch(function() {
            var c = m(a);
            if (q.$modelValue !== c) {
                var d = q.$formatters, e = d.length;
                for (q.$modelValue = c; e--; ) c = d[e](c);
                q.$viewValue !== c && (q.$viewValue = c, q.$render());
            }
            return c;
        });
    } ], Gd = function() {
        return {
            require: [ "ngModel", "^?form" ],
            controller: Ue,
            link: function(a, c, d, e) {
                var f = e[0], g = e[1] || xb;
                g.$addControl(f);
                a.$on("$destroy", function() {
                    g.$removeControl(f);
                });
            }
        };
    }, Id = $({
        require: "ngModel",
        link: function(a, c, d, e) {
            e.$viewChangeListeners.push(function() {
                a.$eval(d.ngChange);
            });
        }
    }), kc = function() {
        return {
            require: "?ngModel",
            link: function(a, c, d, e) {
                if (e) {
                    d.required = !0;
                    var f = function(a) {
                        if (d.required && e.$isEmpty(a)) e.$setValidity("required", !1); else return e.$setValidity("required", !0), 
                        a;
                    };
                    e.$formatters.push(f);
                    e.$parsers.unshift(f);
                    d.$observe("required", function() {
                        f(e.$viewValue);
                    });
                }
            }
        };
    }, Hd = function() {
        return {
            require: "ngModel",
            link: function(a, c, d, e) {
                var f = (a = /\/(.*)\//.exec(d.ngList)) && RegExp(a[1]) || d.ngList || ",";
                e.$parsers.push(function(a) {
                    if (!D(a)) {
                        var c = [];
                        a && r(a.split(f), function(a) {
                            a && c.push(aa(a));
                        });
                        return c;
                    }
                });
                e.$formatters.push(function(a) {
                    return H(a) ? a.join(", ") : t;
                });
                e.$isEmpty = function(a) {
                    return !a || !a.length;
                };
            }
        };
    }, Ve = /^(true|false|\d+)$/, Jd = function() {
        return {
            priority: 100,
            compile: function(a, c) {
                return Ve.test(c.ngValue) ? function(a, c, f) {
                    f.$set("value", a.$eval(f.ngValue));
                } : function(a, c, f) {
                    a.$watch(f.ngValue, function(a) {
                        f.$set("value", a);
                    });
                };
            }
        };
    }, jd = xa({
        compile: function(a) {
            a.addClass("ng-binding");
            return function(a, d, e) {
                d.data("$binding", e.ngBind);
                a.$watch(e.ngBind, function(a) {
                    d.text(a == t ? "" : a);
                });
            };
        }
    }), ld = [ "$interpolate", function(a) {
        return function(c, d, e) {
            c = a(d.attr(e.$attr.ngBindTemplate));
            d.addClass("ng-binding").data("$binding", c);
            e.$observe("ngBindTemplate", function(a) {
                d.text(a);
            });
        };
    } ], kd = [ "$sce", "$parse", function(a, c) {
        return {
            compile: function(d) {
                d.addClass("ng-binding");
                return function(d, f, g) {
                    f.data("$binding", g.ngBindHtml);
                    var k = c(g.ngBindHtml);
                    d.$watch(function() {
                        return (k(d) || "").toString();
                    }, function(c) {
                        f.html(a.getTrustedHtml(k(d)) || "");
                    });
                };
            }
        };
    } ], md = Yb("", !0), od = Yb("Odd", 0), nd = Yb("Even", 1), pd = xa({
        compile: function(a, c) {
            c.$set("ngCloak", t);
            a.removeClass("ng-cloak");
        }
    }), qd = [ function() {
        return {
            scope: !0,
            controller: "@",
            priority: 500
        };
    } ], lc = {};
    r("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function(a) {
        var c = na("ng-" + a);
        lc[c] = [ "$parse", function(d) {
            return {
                compile: function(e, f) {
                    var g = d(f[c]);
                    return function(c, d) {
                        d.on(N(a), function(a) {
                            c.$apply(function() {
                                g(c, {
                                    $event: a
                                });
                            });
                        });
                    };
                }
            };
        } ];
    });
    var td = [ "$animate", function(a) {
        return {
            transclude: "element",
            priority: 600,
            terminal: !0,
            restrict: "A",
            $$tlb: !0,
            link: function(c, d, e, f, g) {
                var k, m, h;
                c.$watch(e.ngIf, function(f) {
                    Ta(f) ? m || (m = c.$new(), g(m, function(c) {
                        c[c.length++] = X.createComment(" end ngIf: " + e.ngIf + " ");
                        k = {
                            clone: c
                        };
                        a.enter(c, d.parent(), d);
                    })) : (h && (h.remove(), h = null), m && (m.$destroy(), m = null), k && (h = Eb(k.clone), 
                    a.leave(h, function() {
                        h = null;
                    }), k = null));
                });
            }
        };
    } ], ud = [ "$http", "$templateCache", "$anchorScroll", "$animate", "$sce", function(a, c, d, e, f) {
        return {
            restrict: "ECA",
            priority: 400,
            terminal: !0,
            transclude: "element",
            controller: Ua.noop,
            compile: function(g, k) {
                var m = k.ngInclude || k.src, h = k.onload || "", l = k.autoscroll;
                return function(g, k, q, r, L) {
                    var v = 0, t, u, I, w = function() {
                        u && (u.remove(), u = null);
                        t && (t.$destroy(), t = null);
                        I && (e.leave(I, function() {
                            u = null;
                        }), u = I, I = null);
                    };
                    g.$watch(f.parseAsResourceUrl(m), function(f) {
                        var m = function() {
                            !A(l) || l && !g.$eval(l) || d();
                        }, q = ++v;
                        f ? (a.get(f, {
                            cache: c
                        }).success(function(a) {
                            if (q === v) {
                                var c = g.$new();
                                r.template = a;
                                a = L(c, function(a) {
                                    w();
                                    e.enter(a, null, k, m);
                                });
                                t = c;
                                I = a;
                                t.$emit("$includeContentLoaded");
                                g.$eval(h);
                            }
                        }).error(function() {
                            q === v && w();
                        }), g.$emit("$includeContentRequested")) : (w(), r.template = null);
                    });
                };
            }
        };
    } ], Kd = [ "$compile", function(a) {
        return {
            restrict: "ECA",
            priority: -400,
            require: "ngInclude",
            link: function(c, d, e, f) {
                d.html(f.template);
                a(d.contents())(c);
            }
        };
    } ], vd = xa({
        priority: 450,
        compile: function() {
            return {
                pre: function(a, c, d) {
                    a.$eval(d.ngInit);
                }
            };
        }
    }), wd = xa({
        terminal: !0,
        priority: 1e3
    }), xd = [ "$locale", "$interpolate", function(a, c) {
        var d = /{}/g;
        return {
            restrict: "EA",
            link: function(e, f, g) {
                var k = g.count, m = g.$attr.when && f.attr(g.$attr.when), h = g.offset || 0, l = e.$eval(m) || {}, n = {}, p = c.startSymbol(), q = c.endSymbol(), s = /^when(Minus)?(.+)$/;
                r(g, function(a, c) {
                    s.test(c) && (l[N(c.replace("when", "").replace("Minus", "-"))] = f.attr(g.$attr[c]));
                });
                r(l, function(a, e) {
                    n[e] = c(a.replace(d, p + k + "-" + h + q));
                });
                e.$watch(function() {
                    var c = parseFloat(e.$eval(k));
                    if (isNaN(c)) return "";
                    c in l || (c = a.pluralCat(c - h));
                    return n[c](e, f, !0);
                }, function(a) {
                    f.text(a);
                });
            }
        };
    } ], yd = [ "$parse", "$animate", function(a, c) {
        var d = x("ngRepeat");
        return {
            transclude: "element",
            priority: 1e3,
            terminal: !0,
            $$tlb: !0,
            link: function(e, f, g, k, m) {
                var h = g.ngRepeat, l = h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?\s*$/), n, p, q, s, t, v, C = {
                    $id: Ka
                };
                if (!l) throw d("iexp", h);
                g = l[1];
                k = l[2];
                (l = l[3]) ? (n = a(l), p = function(a, c, d) {
                    v && (C[v] = a);
                    C[t] = c;
                    C.$index = d;
                    return n(e, C);
                }) : (q = function(a, c) {
                    return Ka(c);
                }, s = function(a) {
                    return a;
                });
                l = g.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/);
                if (!l) throw d("iidexp", g);
                t = l[3] || l[1];
                v = l[2];
                var A = {};
                e.$watchCollection(k, function(a) {
                    var g, k, l = f[0], n, C = {}, J, E, F, x, z, y, H = [];
                    if (fb(a)) z = a, n = p || q; else {
                        n = p || s;
                        z = [];
                        for (F in a) a.hasOwnProperty(F) && "$" != F.charAt(0) && z.push(F);
                        z.sort();
                    }
                    J = z.length;
                    k = H.length = z.length;
                    for (g = 0; g < k; g++) if (F = a === z ? g : z[g], x = a[F], x = n(F, x, g), Ca(x, "`track by` id"), 
                    A.hasOwnProperty(x)) y = A[x], delete A[x], C[x] = y, H[g] = y; else {
                        if (C.hasOwnProperty(x)) throw r(H, function(a) {
                            a && a.scope && (A[a.id] = a);
                        }), d("dupes", h, x);
                        H[g] = {
                            id: x
                        };
                        C[x] = !1;
                    }
                    for (F in A) A.hasOwnProperty(F) && (y = A[F], g = Eb(y.clone), c.leave(g), r(g, function(a) {
                        a.$$NG_REMOVED = !0;
                    }), y.scope.$destroy());
                    g = 0;
                    for (k = z.length; g < k; g++) {
                        F = a === z ? g : z[g];
                        x = a[F];
                        y = H[g];
                        H[g - 1] && (l = H[g - 1].clone[H[g - 1].clone.length - 1]);
                        if (y.scope) {
                            E = y.scope;
                            n = l;
                            do n = n.nextSibling; while (n && n.$$NG_REMOVED);
                            y.clone[0] != n && c.move(Eb(y.clone), null, u(l));
                            l = y.clone[y.clone.length - 1];
                        } else E = e.$new();
                        E[t] = x;
                        v && (E[v] = F);
                        E.$index = g;
                        E.$first = 0 === g;
                        E.$last = g === J - 1;
                        E.$middle = !(E.$first || E.$last);
                        E.$odd = !(E.$even = 0 === (g & 1));
                        y.scope || m(E, function(a) {
                            a[a.length++] = X.createComment(" end ngRepeat: " + h + " ");
                            c.enter(a, null, u(l));
                            l = a;
                            y.scope = E;
                            y.clone = a;
                            C[y.id] = y;
                        });
                    }
                    A = C;
                });
            }
        };
    } ], zd = [ "$animate", function(a) {
        return function(c, d, e) {
            c.$watch(e.ngShow, function(c) {
                a[Ta(c) ? "removeClass" : "addClass"](d, "ng-hide");
            });
        };
    } ], sd = [ "$animate", function(a) {
        return function(c, d, e) {
            c.$watch(e.ngHide, function(c) {
                a[Ta(c) ? "addClass" : "removeClass"](d, "ng-hide");
            });
        };
    } ], Ad = xa(function(a, c, d) {
        a.$watch(d.ngStyle, function(a, d) {
            d && a !== d && r(d, function(a, d) {
                c.css(d, "");
            });
            a && c.css(a);
        }, !0);
    }), Bd = [ "$animate", function(a) {
        return {
            restrict: "EA",
            require: "ngSwitch",
            controller: [ "$scope", function() {
                this.cases = {};
            } ],
            link: function(c, d, e, f) {
                var g = [], k = [], m = [], h = [];
                c.$watch(e.ngSwitch || e.on, function(d) {
                    var n, p;
                    n = 0;
                    for (p = m.length; n < p; ++n) m[n].remove();
                    n = m.length = 0;
                    for (p = h.length; n < p; ++n) {
                        var q = k[n];
                        h[n].$destroy();
                        m[n] = q;
                        a.leave(q, function() {
                            m.splice(n, 1);
                        });
                    }
                    k.length = 0;
                    h.length = 0;
                    if (g = f.cases["!" + d] || f.cases["?"]) c.$eval(e.change), r(g, function(d) {
                        var e = c.$new();
                        h.push(e);
                        d.transclude(e, function(c) {
                            var e = d.element;
                            k.push(c);
                            a.enter(c, e.parent(), e);
                        });
                    });
                });
            }
        };
    } ], Cd = xa({
        transclude: "element",
        priority: 800,
        require: "^ngSwitch",
        link: function(a, c, d, e, f) {
            e.cases["!" + d.ngSwitchWhen] = e.cases["!" + d.ngSwitchWhen] || [];
            e.cases["!" + d.ngSwitchWhen].push({
                transclude: f,
                element: c
            });
        }
    }), Dd = xa({
        transclude: "element",
        priority: 800,
        require: "^ngSwitch",
        link: function(a, c, d, e, f) {
            e.cases["?"] = e.cases["?"] || [];
            e.cases["?"].push({
                transclude: f,
                element: c
            });
        }
    }), Fd = xa({
        link: function(a, c, d, e, f) {
            if (!f) throw x("ngTransclude")("orphan", ha(c));
            f(function(a) {
                c.empty();
                c.append(a);
            });
        }
    }), fd = [ "$templateCache", function(a) {
        return {
            restrict: "E",
            terminal: !0,
            compile: function(c, d) {
                "text/ng-template" == d.type && a.put(d.id, c[0].text);
            }
        };
    } ], We = x("ngOptions"), Ed = $({
        terminal: !0
    }), gd = [ "$compile", "$parse", function(a, c) {
        var d = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/, e = {
            $setViewValue: y
        };
        return {
            restrict: "E",
            require: [ "select", "?ngModel" ],
            controller: [ "$element", "$scope", "$attrs", function(a, c, d) {
                var m = this, h = {}, l = e, n;
                m.databound = d.ngModel;
                m.init = function(a, c, d) {
                    l = a;
                    n = d;
                };
                m.addOption = function(c) {
                    Ca(c, '"option value"');
                    h[c] = !0;
                    l.$viewValue == c && (a.val(c), n.parent() && n.remove());
                };
                m.removeOption = function(a) {
                    this.hasOption(a) && (delete h[a], l.$viewValue == a && this.renderUnknownOption(a));
                };
                m.renderUnknownOption = function(c) {
                    c = "? " + Ka(c) + " ?";
                    n.val(c);
                    a.prepend(n);
                    a.val(c);
                    n.prop("selected", !0);
                };
                m.hasOption = function(a) {
                    return h.hasOwnProperty(a);
                };
                c.$on("$destroy", function() {
                    m.renderUnknownOption = y;
                });
            } ],
            link: function(e, g, k, m) {
                function h(a, c, d, e) {
                    d.$render = function() {
                        var a = d.$viewValue;
                        e.hasOption(a) ? (z.parent() && z.remove(), c.val(a), "" === a && v.prop("selected", !0)) : D(a) && v ? c.val("") : e.renderUnknownOption(a);
                    };
                    c.on("change", function() {
                        a.$apply(function() {
                            z.parent() && z.remove();
                            d.$setViewValue(c.val());
                        });
                    });
                }
                function l(a, c, d) {
                    var e;
                    d.$render = function() {
                        var a = new ab(d.$viewValue);
                        r(c.find("option"), function(c) {
                            c.selected = A(a.get(c.value));
                        });
                    };
                    a.$watch(function() {
                        za(e, d.$viewValue) || (e = ga(d.$viewValue), d.$render());
                    });
                    c.on("change", function() {
                        a.$apply(function() {
                            var a = [];
                            r(c.find("option"), function(c) {
                                c.selected && a.push(c.value);
                            });
                            d.$setViewValue(a);
                        });
                    });
                }
                function n(e, f, g) {
                    function k() {
                        var a = {
                            "": []
                        }, c = [ "" ], d, h, s, t, w;
                        s = g.$modelValue;
                        t = v(e) || [];
                        var E = n ? Zb(t) : t, I, M, B;
                        M = {};
                        B = !1;
                        if (q) if (h = g.$modelValue, u && H(h)) for (B = new ab([]), d = {}, w = 0; w < h.length; w++) d[m] = h[w], 
                        B.put(u(e, d), h[w]); else B = new ab(h);
                        w = B;
                        var D, J;
                        for (B = 0; I = E.length, B < I; B++) {
                            h = B;
                            if (n) {
                                h = E[B];
                                if ("$" === h.charAt(0)) continue;
                                M[n] = h;
                            }
                            M[m] = t[h];
                            d = p(e, M) || "";
                            (h = a[d]) || (h = a[d] = [], c.push(d));
                            q ? d = A(w.remove(u ? u(e, M) : r(e, M))) : (u ? (d = {}, d[m] = s, d = u(e, d) === u(e, M)) : d = s === r(e, M), 
                            w = w || d);
                            D = l(e, M);
                            D = A(D) ? D : "";
                            h.push({
                                id: u ? u(e, M) : n ? E[B] : B,
                                label: D,
                                selected: d
                            });
                        }
                        q || (x || null === s ? a[""].unshift({
                            id: "",
                            label: "",
                            selected: !w
                        }) : w || a[""].unshift({
                            id: "?",
                            label: "",
                            selected: !0
                        }));
                        M = 0;
                        for (E = c.length; M < E; M++) {
                            d = c[M];
                            h = a[d];
                            z.length <= M ? (s = {
                                element: y.clone().attr("label", d),
                                label: h.label
                            }, t = [ s ], z.push(t), f.append(s.element)) : (t = z[M], s = t[0], s.label != d && s.element.attr("label", s.label = d));
                            D = null;
                            B = 0;
                            for (I = h.length; B < I; B++) d = h[B], (w = t[B + 1]) ? (D = w.element, w.label !== d.label && D.text(w.label = d.label), 
                            w.id !== d.id && D.val(w.id = d.id), D[0].selected !== d.selected && (D.prop("selected", w.selected = d.selected), 
                            R && D.prop("selected", w.selected))) : ("" === d.id && x ? J = x : (J = C.clone()).val(d.id).prop("selected", d.selected).attr("selected", d.selected).text(d.label), 
                            t.push({
                                element: J,
                                label: d.label,
                                id: d.id,
                                selected: d.selected
                            }), D ? D.after(J) : s.element.append(J), D = J);
                            for (B++; t.length > B; ) t.pop().element.remove();
                        }
                        for (;z.length > M; ) z.pop()[0].element.remove();
                    }
                    var h;
                    if (!(h = s.match(d))) throw We("iexp", s, ha(f));
                    var l = c(h[2] || h[1]), m = h[4] || h[6], n = h[5], p = c(h[3] || ""), r = c(h[2] ? h[1] : m), v = c(h[7]), u = h[8] ? c(h[8]) : null, z = [ [ {
                        element: f,
                        label: ""
                    } ] ];
                    x && (a(x)(e), x.removeClass("ng-scope"), x.remove());
                    f.empty();
                    f.on("change", function() {
                        e.$apply(function() {
                            var a, c = v(e) || [], d = {}, h, l, p, s, w, x, y;
                            if (q) for (l = [], s = 0, x = z.length; s < x; s++) for (a = z[s], p = 1, w = a.length; p < w; p++) {
                                if ((h = a[p].element)[0].selected) {
                                    h = h.val();
                                    n && (d[n] = h);
                                    if (u) for (y = 0; y < c.length && (d[m] = c[y], u(e, d) != h); y++) ; else d[m] = c[h];
                                    l.push(r(e, d));
                                }
                            } else if (h = f.val(), "?" == h) l = t; else if ("" === h) l = null; else if (u) for (y = 0; y < c.length; y++) {
                                if (d[m] = c[y], u(e, d) == h) {
                                    l = r(e, d);
                                    break;
                                }
                            } else d[m] = c[h], n && (d[n] = h), l = r(e, d);
                            g.$setViewValue(l);
                            k();
                        });
                    });
                    g.$render = k;
                    e.$watchCollection(v, k);
                    q && e.$watchCollection(function() {
                        return g.$modelValue;
                    }, k);
                }
                if (m[1]) {
                    var p = m[0];
                    m = m[1];
                    var q = k.multiple, s = k.ngOptions, x = !1, v, C = u(X.createElement("option")), y = u(X.createElement("optgroup")), z = C.clone();
                    k = 0;
                    for (var w = g.children(), B = w.length; k < B; k++) if ("" === w[k].value) {
                        v = x = w.eq(k);
                        break;
                    }
                    p.init(m, x, z);
                    q && (m.$isEmpty = function(a) {
                        return !a || 0 === a.length;
                    });
                    s ? n(e, g, m) : q ? l(e, g, m) : h(e, g, m, p);
                }
            }
        };
    } ], id = [ "$interpolate", function(a) {
        var c = {
            addOption: y,
            removeOption: y
        };
        return {
            restrict: "E",
            priority: 100,
            compile: function(d, e) {
                if (D(e.value)) {
                    var f = a(d.text(), !0);
                    f || e.$set("value", d.text());
                }
                return function(a, d, e) {
                    var h = d.parent(), l = h.data("$selectController") || h.parent().data("$selectController");
                    l && l.databound ? d.prop("selected", !1) : l = c;
                    f ? a.$watch(f, function(a, c) {
                        e.$set("value", a);
                        a !== c && l.removeOption(c);
                        l.addOption(a);
                    }) : l.addOption(e.value);
                    d.on("$destroy", function() {
                        l.removeOption(e.value);
                    });
                };
            }
        };
    } ], hd = $({
        restrict: "E",
        terminal: !0
    });
    Q.angular.bootstrap ? console.log("WARNING: Tried to load angular more than once.") : ((Da = Q.jQuery) && Da.fn.on ? (u = Da, 
    B(Da.fn, {
        scope: La.scope,
        isolateScope: La.isolateScope,
        controller: La.controller,
        injector: La.injector,
        inheritedData: La.inheritedData
    }), Gb("remove", !0, !0, !1), Gb("empty", !1, !1, !1), Gb("html", !1, !1, !0)) : u = S, 
    Ua.element = u, $c(Ua), u(X).ready(function() {
        Xc(X, fc);
    }));
})(window, document);

!window.angular.$$csp() && window.angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide{display:none !important;}ng\\:form{display:block;}.ng-animate-block-transitions{transition:0s all!important;-webkit-transition:0s all!important;}.ng-hide-add-active,.ng-hide-remove{display:block!important;}</style>');

(function(n, e, A) {
    "use strict";
    function x(s, g, h) {
        return {
            restrict: "ECA",
            terminal: !0,
            priority: 400,
            transclude: "element",
            link: function(a, c, b, f, w) {
                function y() {
                    p && (p.remove(), p = null);
                    k && (k.$destroy(), k = null);
                    l && (h.leave(l, function() {
                        p = null;
                    }), p = l, l = null);
                }
                function v() {
                    var b = s.current && s.current.locals;
                    if (e.isDefined(b && b.$template)) {
                        var b = a.$new(), d = s.current;
                        l = w(b, function(d) {
                            h.enter(d, null, l || c, function() {
                                !e.isDefined(t) || t && !a.$eval(t) || g();
                            });
                            y();
                        });
                        k = d.scope = b;
                        k.$emit("$viewContentLoaded");
                        k.$eval(u);
                    } else y();
                }
                var k, l, p, t = b.autoscroll, u = b.onload || "";
                a.$on("$routeChangeSuccess", v);
                v();
            }
        };
    }
    function z(e, g, h) {
        return {
            restrict: "ECA",
            priority: -400,
            link: function(a, c) {
                var b = h.current, f = b.locals;
                c.html(f.$template);
                var w = e(c.contents());
                b.controller && (f.$scope = a, f = g(b.controller, f), b.controllerAs && (a[b.controllerAs] = f), 
                c.data("$ngControllerController", f), c.children().data("$ngControllerController", f));
                w(a);
            }
        };
    }
    n = e.module("ngRoute", [ "ng" ]).provider("$route", function() {
        function s(a, c) {
            return e.extend(new (e.extend(function() {}, {
                prototype: a
            }))(), c);
        }
        function g(a, e) {
            var b = e.caseInsensitiveMatch, f = {
                originalPath: a,
                regexp: a
            }, h = f.keys = [];
            a = a.replace(/([().])/g, "\\$1").replace(/(\/)?:(\w+)([\?\*])?/g, function(a, e, b, c) {
                a = "?" === c ? c : null;
                c = "*" === c ? c : null;
                h.push({
                    name: b,
                    optional: !!a
                });
                e = e || "";
                return "" + (a ? "" : e) + "(?:" + (a ? e : "") + (c && "(.+?)" || "([^/]+)") + (a || "") + ")" + (a || "");
            }).replace(/([\/$\*])/g, "\\$1");
            f.regexp = RegExp("^" + a + "$", b ? "i" : "");
            return f;
        }
        var h = {};
        this.when = function(a, c) {
            h[a] = e.extend({
                reloadOnSearch: !0
            }, c, a && g(a, c));
            if (a) {
                var b = "/" == a[a.length - 1] ? a.substr(0, a.length - 1) : a + "/";
                h[b] = e.extend({
                    redirectTo: a
                }, g(b, c));
            }
            return this;
        };
        this.otherwise = function(a) {
            this.when(null, a);
            return this;
        };
        this.$get = [ "$rootScope", "$location", "$routeParams", "$q", "$injector", "$http", "$templateCache", "$sce", function(a, c, b, f, g, n, v, k) {
            function l() {
                var d = p(), m = r.current;
                if (d && m && d.$$route === m.$$route && e.equals(d.pathParams, m.pathParams) && !d.reloadOnSearch && !u) m.params = d.params, 
                e.copy(m.params, b), a.$broadcast("$routeUpdate", m); else if (d || m) u = !1, a.$broadcast("$routeChangeStart", d, m), 
                (r.current = d) && d.redirectTo && (e.isString(d.redirectTo) ? c.path(t(d.redirectTo, d.params)).search(d.params).replace() : c.url(d.redirectTo(d.pathParams, c.path(), c.search())).replace()), 
                f.when(d).then(function() {
                    if (d) {
                        var a = e.extend({}, d.resolve), c, b;
                        e.forEach(a, function(d, c) {
                            a[c] = e.isString(d) ? g.get(d) : g.invoke(d);
                        });
                        e.isDefined(c = d.template) ? e.isFunction(c) && (c = c(d.params)) : e.isDefined(b = d.templateUrl) && (e.isFunction(b) && (b = b(d.params)), 
                        b = k.getTrustedResourceUrl(b), e.isDefined(b) && (d.loadedTemplateUrl = b, c = n.get(b, {
                            cache: v
                        }).then(function(a) {
                            return a.data;
                        })));
                        e.isDefined(c) && (a.$template = c);
                        return f.all(a);
                    }
                }).then(function(c) {
                    d == r.current && (d && (d.locals = c, e.copy(d.params, b)), a.$broadcast("$routeChangeSuccess", d, m));
                }, function(c) {
                    d == r.current && a.$broadcast("$routeChangeError", d, m, c);
                });
            }
            function p() {
                var a, b;
                e.forEach(h, function(f, h) {
                    var q;
                    if (q = !b) {
                        var g = c.path();
                        q = f.keys;
                        var l = {};
                        if (f.regexp) if (g = f.regexp.exec(g)) {
                            for (var k = 1, p = g.length; k < p; ++k) {
                                var n = q[k - 1], r = g[k];
                                n && r && (l[n.name] = r);
                            }
                            q = l;
                        } else q = null; else q = null;
                        q = a = q;
                    }
                    q && (b = s(f, {
                        params: e.extend({}, c.search(), a),
                        pathParams: a
                    }), b.$$route = f);
                });
                return b || h[null] && s(h[null], {
                    params: {},
                    pathParams: {}
                });
            }
            function t(a, c) {
                var b = [];
                e.forEach((a || "").split(":"), function(a, d) {
                    if (0 === d) b.push(a); else {
                        var e = a.match(/(\w+)(.*)/), f = e[1];
                        b.push(c[f]);
                        b.push(e[2] || "");
                        delete c[f];
                    }
                });
                return b.join("");
            }
            var u = !1, r = {
                routes: h,
                reload: function() {
                    u = !0;
                    a.$evalAsync(l);
                }
            };
            a.$on("$locationChangeSuccess", l);
            return r;
        } ];
    });
    n.provider("$routeParams", function() {
        this.$get = function() {
            return {};
        };
    });
    n.directive("ngView", x);
    n.directive("ngView", z);
    x.$inject = [ "$route", "$anchorScroll", "$animate" ];
    z.$inject = [ "$compile", "$controller", "$route" ];
})(window, window.angular);

(function(H, a, A) {
    "use strict";
    function D(p, g) {
        g = g || {};
        a.forEach(g, function(a, c) {
            delete g[c];
        });
        for (var c in p) !p.hasOwnProperty(c) || "$" === c.charAt(0) && "$" === c.charAt(1) || (g[c] = p[c]);
        return g;
    }
    var v = a.$$minErr("$resource"), C = /^(\.[a-zA-Z_$][0-9a-zA-Z_$]*)+$/;
    a.module("ngResource", [ "ng" ]).factory("$resource", [ "$http", "$q", function(p, g) {
        function c(a, c) {
            this.template = a;
            this.defaults = c || {};
            this.urlParams = {};
        }
        function t(n, w, l) {
            function r(h, d) {
                var e = {};
                d = x({}, w, d);
                s(d, function(b, d) {
                    u(b) && (b = b());
                    var k;
                    if (b && b.charAt && "@" == b.charAt(0)) {
                        k = h;
                        var a = b.substr(1);
                        if (null == a || "" === a || "hasOwnProperty" === a || !C.test("." + a)) throw v("badmember", a);
                        for (var a = a.split("."), f = 0, c = a.length; f < c && k !== A; f++) {
                            var g = a[f];
                            k = null !== k ? k[g] : A;
                        }
                    } else k = b;
                    e[d] = k;
                });
                return e;
            }
            function e(a) {
                return a.resource;
            }
            function f(a) {
                D(a || {}, this);
            }
            var F = new c(n);
            l = x({}, B, l);
            s(l, function(h, d) {
                var c = /^(POST|PUT|PATCH)$/i.test(h.method);
                f[d] = function(b, d, k, w) {
                    var q = {}, n, l, y;
                    switch (arguments.length) {
                      case 4:
                        y = w, l = k;

                      case 3:
                      case 2:
                        if (u(d)) {
                            if (u(b)) {
                                l = b;
                                y = d;
                                break;
                            }
                            l = d;
                            y = k;
                        } else {
                            q = b;
                            n = d;
                            l = k;
                            break;
                        }

                      case 1:
                        u(b) ? l = b : c ? n = b : q = b;
                        break;

                      case 0:
                        break;

                      default:
                        throw v("badargs", arguments.length);
                    }
                    var t = this instanceof f, m = t ? n : h.isArray ? [] : new f(n), z = {}, B = h.interceptor && h.interceptor.response || e, C = h.interceptor && h.interceptor.responseError || A;
                    s(h, function(a, b) {
                        "params" != b && ("isArray" != b && "interceptor" != b) && (z[b] = G(a));
                    });
                    c && (z.data = n);
                    F.setUrlParams(z, x({}, r(n, h.params || {}), q), h.url);
                    q = p(z).then(function(b) {
                        var d = b.data, k = m.$promise;
                        if (d) {
                            if (a.isArray(d) !== !!h.isArray) throw v("badcfg", h.isArray ? "array" : "object", a.isArray(d) ? "array" : "object");
                            h.isArray ? (m.length = 0, s(d, function(b) {
                                "object" === typeof b ? m.push(new f(b)) : m.push(b);
                            })) : (D(d, m), m.$promise = k);
                        }
                        m.$resolved = !0;
                        b.resource = m;
                        return b;
                    }, function(b) {
                        m.$resolved = !0;
                        (y || E)(b);
                        return g.reject(b);
                    });
                    q = q.then(function(b) {
                        var a = B(b);
                        (l || E)(a, b.headers);
                        return a;
                    }, C);
                    return t ? q : (m.$promise = q, m.$resolved = !1, m);
                };
                f.prototype["$" + d] = function(b, a, k) {
                    u(b) && (k = a, a = b, b = {});
                    b = f[d].call(this, b, this, a, k);
                    return b.$promise || b;
                };
            });
            f.bind = function(a) {
                return t(n, x({}, w, a), l);
            };
            return f;
        }
        var B = {
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
        }, E = a.noop, s = a.forEach, x = a.extend, G = a.copy, u = a.isFunction;
        c.prototype = {
            setUrlParams: function(c, g, l) {
                var r = this, e = l || r.template, f, p, h = r.urlParams = {};
                s(e.split(/\W/), function(a) {
                    if ("hasOwnProperty" === a) throw v("badname");
                    !/^\d+$/.test(a) && (a && RegExp("(^|[^\\\\]):" + a + "(\\W|$)").test(e)) && (h[a] = !0);
                });
                e = e.replace(/\\:/g, ":");
                g = g || {};
                s(r.urlParams, function(d, c) {
                    f = g.hasOwnProperty(c) ? g[c] : r.defaults[c];
                    a.isDefined(f) && null !== f ? (p = encodeURIComponent(f).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "%20").replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+"), 
                    e = e.replace(RegExp(":" + c + "(\\W|$)", "g"), function(a, c) {
                        return p + c;
                    })) : e = e.replace(RegExp("(/?):" + c + "(\\W|$)", "g"), function(a, c, d) {
                        return "/" == d.charAt(0) ? d : c + d;
                    });
                });
                e = e.replace(/\/+$/, "") || "/";
                e = e.replace(/\/\.(?=\w+($|\?))/, ".");
                c.url = e.replace(/\/\\\./, "/.");
                s(g, function(a, e) {
                    r.urlParams[e] || (c.params = c.params || {}, c.params[e] = a);
                });
            }
        };
        return t;
    } ]);
})(window, window.angular);

(function() {
    function n(n, t, e) {
        e = (e || 0) - 1;
        for (var r = n ? n.length : 0; ++e < r; ) if (n[e] === t) return e;
        return -1;
    }
    function t(t, e) {
        var r = typeof e;
        if (t = t.l, "boolean" == r || null == e) return t[e] ? 0 : -1;
        "number" != r && "string" != r && (r = "object");
        var u = "number" == r ? e : m + e;
        return t = (t = t[r]) && t[u], "object" == r ? t && -1 < n(t, e) ? 0 : -1 : t ? 0 : -1;
    }
    function e(n) {
        var t = this.l, e = typeof n;
        if ("boolean" == e || null == n) t[n] = true; else {
            "number" != e && "string" != e && (e = "object");
            var r = "number" == e ? n : m + n, t = t[e] || (t[e] = {});
            "object" == e ? (t[r] || (t[r] = [])).push(n) : t[r] = true;
        }
    }
    function r(n) {
        return n.charCodeAt(0);
    }
    function u(n, t) {
        for (var e = n.m, r = t.m, u = -1, o = e.length; ++u < o; ) {
            var i = e[u], a = r[u];
            if (i !== a) {
                if (i > a || typeof i == "undefined") return 1;
                if (i < a || typeof a == "undefined") return -1;
            }
        }
        return n.n - t.n;
    }
    function o(n) {
        var t = -1, r = n.length, u = n[0], o = n[r / 2 | 0], i = n[r - 1];
        if (u && typeof u == "object" && o && typeof o == "object" && i && typeof i == "object") return false;
        for (u = f(), u["false"] = u["null"] = u["true"] = u.undefined = false, o = f(), 
        o.k = n, o.l = u, o.push = e; ++t < r; ) o.push(n[t]);
        return o;
    }
    function i(n) {
        return "\\" + U[n];
    }
    function a() {
        return h.pop() || [];
    }
    function f() {
        return g.pop() || {
            k: null,
            l: null,
            m: null,
            "false": false,
            n: 0,
            "null": false,
            number: null,
            object: null,
            push: null,
            string: null,
            "true": false,
            undefined: false,
            o: null
        };
    }
    function l(n) {
        n.length = 0, h.length < _ && h.push(n);
    }
    function c(n) {
        var t = n.l;
        t && c(t), n.k = n.l = n.m = n.object = n.number = n.string = n.o = null, g.length < _ && g.push(n);
    }
    function p(n, t, e) {
        t || (t = 0), typeof e == "undefined" && (e = n ? n.length : 0);
        var r = -1;
        e = e - t || 0;
        for (var u = Array(0 > e ? 0 : e); ++r < e; ) u[r] = n[t + r];
        return u;
    }
    function s(e) {
        function h(n, t, e) {
            if (!n || !V[typeof n]) return n;
            t = t && typeof e == "undefined" ? t : tt(t, e, 3);
            for (var r = -1, u = V[typeof n] && Fe(n), o = u ? u.length : 0; ++r < o && (e = u[r], 
            false !== t(n[e], e, n)); ) ;
            return n;
        }
        function g(n, t, e) {
            var r;
            if (!n || !V[typeof n]) return n;
            t = t && typeof e == "undefined" ? t : tt(t, e, 3);
            for (r in n) if (false === t(n[r], r, n)) break;
            return n;
        }
        function _(n, t, e) {
            var r, u = n, o = u;
            if (!u) return o;
            for (var i = arguments, a = 0, f = typeof e == "number" ? 2 : i.length; ++a < f; ) if ((u = i[a]) && V[typeof u]) for (var l = -1, c = V[typeof u] && Fe(u), p = c ? c.length : 0; ++l < p; ) r = c[l], 
            "undefined" == typeof o[r] && (o[r] = u[r]);
            return o;
        }
        function U(n, t, e) {
            var r, u = n, o = u;
            if (!u) return o;
            var i = arguments, a = 0, f = typeof e == "number" ? 2 : i.length;
            if (3 < f && "function" == typeof i[f - 2]) var l = tt(i[--f - 1], i[f--], 2); else 2 < f && "function" == typeof i[f - 1] && (l = i[--f]);
            for (;++a < f; ) if ((u = i[a]) && V[typeof u]) for (var c = -1, p = V[typeof u] && Fe(u), s = p ? p.length : 0; ++c < s; ) r = p[c], 
            o[r] = l ? l(o[r], u[r]) : u[r];
            return o;
        }
        function H(n) {
            var t, e = [];
            if (!n || !V[typeof n]) return e;
            for (t in n) me.call(n, t) && e.push(t);
            return e;
        }
        function J(n) {
            return n && typeof n == "object" && !Te(n) && me.call(n, "__wrapped__") ? n : new Q(n);
        }
        function Q(n, t) {
            this.__chain__ = !!t, this.__wrapped__ = n;
        }
        function X(n) {
            function t() {
                if (r) {
                    var n = p(r);
                    be.apply(n, arguments);
                }
                if (this instanceof t) {
                    var o = nt(e.prototype), n = e.apply(o, n || arguments);
                    return wt(n) ? n : o;
                }
                return e.apply(u, n || arguments);
            }
            var e = n[0], r = n[2], u = n[4];
            return $e(t, n), t;
        }
        function Z(n, t, e, r, u) {
            if (e) {
                var o = e(n);
                if (typeof o != "undefined") return o;
            }
            if (!wt(n)) return n;
            var i = ce.call(n);
            if (!K[i]) return n;
            var f = Ae[i];
            switch (i) {
              case T:
              case F:
                return new f(+n);

              case W:
              case P:
                return new f(n);

              case z:
                return o = f(n.source, C.exec(n)), o.lastIndex = n.lastIndex, o;
            }
            if (i = Te(n), t) {
                var c = !r;
                r || (r = a()), u || (u = a());
                for (var s = r.length; s--; ) if (r[s] == n) return u[s];
                o = i ? f(n.length) : {};
            } else o = i ? p(n) : U({}, n);
            return i && (me.call(n, "index") && (o.index = n.index), me.call(n, "input") && (o.input = n.input)), 
            t ? (r.push(n), u.push(o), (i ? St : h)(n, function(n, i) {
                o[i] = Z(n, t, e, r, u);
            }), c && (l(r), l(u)), o) : o;
        }
        function nt(n) {
            return wt(n) ? ke(n) : {};
        }
        function tt(n, t, e) {
            if (typeof n != "function") return Ut;
            if (typeof t == "undefined" || !("prototype" in n)) return n;
            var r = n.__bindData__;
            if (typeof r == "undefined" && (De.funcNames && (r = !n.name), r = r || !De.funcDecomp, 
            !r)) {
                var u = ge.call(n);
                De.funcNames || (r = !O.test(u)), r || (r = E.test(u), $e(n, r));
            }
            if (false === r || true !== r && 1 & r[1]) return n;
            switch (e) {
              case 1:
                return function(e) {
                    return n.call(t, e);
                };

              case 2:
                return function(e, r) {
                    return n.call(t, e, r);
                };

              case 3:
                return function(e, r, u) {
                    return n.call(t, e, r, u);
                };

              case 4:
                return function(e, r, u, o) {
                    return n.call(t, e, r, u, o);
                };
            }
            return Mt(n, t);
        }
        function et(n) {
            function t() {
                var n = f ? i : this;
                if (u) {
                    var h = p(u);
                    be.apply(h, arguments);
                }
                return (o || c) && (h || (h = p(arguments)), o && be.apply(h, o), c && h.length < a) ? (r |= 16, 
                et([ e, s ? r : -4 & r, h, null, i, a ])) : (h || (h = arguments), l && (e = n[v]), 
                this instanceof t ? (n = nt(e.prototype), h = e.apply(n, h), wt(h) ? h : n) : e.apply(n, h));
            }
            var e = n[0], r = n[1], u = n[2], o = n[3], i = n[4], a = n[5], f = 1 & r, l = 2 & r, c = 4 & r, s = 8 & r, v = e;
            return $e(t, n), t;
        }
        function rt(e, r) {
            var u = -1, i = st(), a = e ? e.length : 0, f = a >= b && i === n, l = [];
            if (f) {
                var p = o(r);
                p ? (i = t, r = p) : f = false;
            }
            for (;++u < a; ) p = e[u], 0 > i(r, p) && l.push(p);
            return f && c(r), l;
        }
        function ut(n, t, e, r) {
            r = (r || 0) - 1;
            for (var u = n ? n.length : 0, o = []; ++r < u; ) {
                var i = n[r];
                if (i && typeof i == "object" && typeof i.length == "number" && (Te(i) || yt(i))) {
                    t || (i = ut(i, t, e));
                    var a = -1, f = i.length, l = o.length;
                    for (o.length += f; ++a < f; ) o[l++] = i[a];
                } else e || o.push(i);
            }
            return o;
        }
        function ot(n, t, e, r, u, o) {
            if (e) {
                var i = e(n, t);
                if (typeof i != "undefined") return !!i;
            }
            if (n === t) return 0 !== n || 1 / n == 1 / t;
            if (n === n && !(n && V[typeof n] || t && V[typeof t])) return false;
            if (null == n || null == t) return n === t;
            var f = ce.call(n), c = ce.call(t);
            if (f == D && (f = q), c == D && (c = q), f != c) return false;
            switch (f) {
              case T:
              case F:
                return +n == +t;

              case W:
                return n != +n ? t != +t : 0 == n ? 1 / n == 1 / t : n == +t;

              case z:
              case P:
                return n == oe(t);
            }
            if (c = f == $, !c) {
                var p = me.call(n, "__wrapped__"), s = me.call(t, "__wrapped__");
                if (p || s) return ot(p ? n.__wrapped__ : n, s ? t.__wrapped__ : t, e, r, u, o);
                if (f != q) return false;
                if (f = n.constructor, p = t.constructor, f != p && !(dt(f) && f instanceof f && dt(p) && p instanceof p) && "constructor" in n && "constructor" in t) return false;
            }
            for (f = !u, u || (u = a()), o || (o = a()), p = u.length; p--; ) if (u[p] == n) return o[p] == t;
            var v = 0, i = true;
            if (u.push(n), o.push(t), c) {
                if (p = n.length, v = t.length, (i = v == p) || r) for (;v--; ) if (c = p, s = t[v], 
                r) for (;c-- && !(i = ot(n[c], s, e, r, u, o)); ) ; else if (!(i = ot(n[v], s, e, r, u, o))) break;
            } else g(t, function(t, a, f) {
                return me.call(f, a) ? (v++, i = me.call(n, a) && ot(n[a], t, e, r, u, o)) : void 0;
            }), i && !r && g(n, function(n, t, e) {
                return me.call(e, t) ? i = -1 < --v : void 0;
            });
            return u.pop(), o.pop(), f && (l(u), l(o)), i;
        }
        function it(n, t, e, r, u) {
            (Te(t) ? St : h)(t, function(t, o) {
                var i, a, f = t, l = n[o];
                if (t && ((a = Te(t)) || Pe(t))) {
                    for (f = r.length; f--; ) if (i = r[f] == t) {
                        l = u[f];
                        break;
                    }
                    if (!i) {
                        var c;
                        e && (f = e(l, t), c = typeof f != "undefined") && (l = f), c || (l = a ? Te(l) ? l : [] : Pe(l) ? l : {}), 
                        r.push(t), u.push(l), c || it(l, t, e, r, u);
                    }
                } else e && (f = e(l, t), typeof f == "undefined" && (f = t)), typeof f != "undefined" && (l = f);
                n[o] = l;
            });
        }
        function at(n, t) {
            return n + he(Re() * (t - n + 1));
        }
        function ft(e, r, u) {
            var i = -1, f = st(), p = e ? e.length : 0, s = [], v = !r && p >= b && f === n, h = u || v ? a() : s;
            for (v && (h = o(h), f = t); ++i < p; ) {
                var g = e[i], y = u ? u(g, i, e) : g;
                (r ? !i || h[h.length - 1] !== y : 0 > f(h, y)) && ((u || v) && h.push(y), s.push(g));
            }
            return v ? (l(h.k), c(h)) : u && l(h), s;
        }
        function lt(n) {
            return function(t, e, r) {
                var u = {};
                e = J.createCallback(e, r, 3), r = -1;
                var o = t ? t.length : 0;
                if (typeof o == "number") for (;++r < o; ) {
                    var i = t[r];
                    n(u, i, e(i, r, t), t);
                } else h(t, function(t, r, o) {
                    n(u, t, e(t, r, o), o);
                });
                return u;
            };
        }
        function ct(n, t, e, r, u, o) {
            var i = 1 & t, a = 4 & t, f = 16 & t, l = 32 & t;
            if (!(2 & t || dt(n))) throw new ie();
            f && !e.length && (t &= -17, f = e = false), l && !r.length && (t &= -33, l = r = false);
            var c = n && n.__bindData__;
            return c && true !== c ? (c = p(c), c[2] && (c[2] = p(c[2])), c[3] && (c[3] = p(c[3])), 
            !i || 1 & c[1] || (c[4] = u), !i && 1 & c[1] && (t |= 8), !a || 4 & c[1] || (c[5] = o), 
            f && be.apply(c[2] || (c[2] = []), e), l && we.apply(c[3] || (c[3] = []), r), c[1] |= t, 
            ct.apply(null, c)) : (1 == t || 17 === t ? X : et)([ n, t, e, r, u, o ]);
        }
        function pt(n) {
            return Be[n];
        }
        function st() {
            var t = (t = J.indexOf) === Wt ? n : t;
            return t;
        }
        function vt(n) {
            return typeof n == "function" && pe.test(n);
        }
        function ht(n) {
            var t, e;
            return n && ce.call(n) == q && (t = n.constructor, !dt(t) || t instanceof t) ? (g(n, function(n, t) {
                e = t;
            }), typeof e == "undefined" || me.call(n, e)) : false;
        }
        function gt(n) {
            return We[n];
        }
        function yt(n) {
            return n && typeof n == "object" && typeof n.length == "number" && ce.call(n) == D || false;
        }
        function mt(n, t, e) {
            var r = Fe(n), u = r.length;
            for (t = tt(t, e, 3); u-- && (e = r[u], false !== t(n[e], e, n)); ) ;
            return n;
        }
        function bt(n) {
            var t = [];
            return g(n, function(n, e) {
                dt(n) && t.push(e);
            }), t.sort();
        }
        function _t(n) {
            for (var t = -1, e = Fe(n), r = e.length, u = {}; ++t < r; ) {
                var o = e[t];
                u[n[o]] = o;
            }
            return u;
        }
        function dt(n) {
            return typeof n == "function";
        }
        function wt(n) {
            return !(!n || !V[typeof n]);
        }
        function jt(n) {
            return typeof n == "number" || n && typeof n == "object" && ce.call(n) == W || false;
        }
        function kt(n) {
            return typeof n == "string" || n && typeof n == "object" && ce.call(n) == P || false;
        }
        function xt(n) {
            for (var t = -1, e = Fe(n), r = e.length, u = Xt(r); ++t < r; ) u[t] = n[e[t]];
            return u;
        }
        function Ct(n, t, e) {
            var r = -1, u = st(), o = n ? n.length : 0, i = false;
            return e = (0 > e ? Ie(0, o + e) : e) || 0, Te(n) ? i = -1 < u(n, t, e) : typeof o == "number" ? i = -1 < (kt(n) ? n.indexOf(t, e) : u(n, t, e)) : h(n, function(n) {
                return ++r < e ? void 0 : !(i = n === t);
            }), i;
        }
        function Ot(n, t, e) {
            var r = true;
            t = J.createCallback(t, e, 3), e = -1;
            var u = n ? n.length : 0;
            if (typeof u == "number") for (;++e < u && (r = !!t(n[e], e, n)); ) ; else h(n, function(n, e, u) {
                return r = !!t(n, e, u);
            });
            return r;
        }
        function Nt(n, t, e) {
            var r = [];
            t = J.createCallback(t, e, 3), e = -1;
            var u = n ? n.length : 0;
            if (typeof u == "number") for (;++e < u; ) {
                var o = n[e];
                t(o, e, n) && r.push(o);
            } else h(n, function(n, e, u) {
                t(n, e, u) && r.push(n);
            });
            return r;
        }
        function It(n, t, e) {
            t = J.createCallback(t, e, 3), e = -1;
            var r = n ? n.length : 0;
            if (typeof r != "number") {
                var u;
                return h(n, function(n, e, r) {
                    return t(n, e, r) ? (u = n, false) : void 0;
                }), u;
            }
            for (;++e < r; ) {
                var o = n[e];
                if (t(o, e, n)) return o;
            }
        }
        function St(n, t, e) {
            var r = -1, u = n ? n.length : 0;
            if (t = t && typeof e == "undefined" ? t : tt(t, e, 3), typeof u == "number") for (;++r < u && false !== t(n[r], r, n); ) ; else h(n, t);
            return n;
        }
        function Et(n, t, e) {
            var r = n ? n.length : 0;
            if (t = t && typeof e == "undefined" ? t : tt(t, e, 3), typeof r == "number") for (;r-- && false !== t(n[r], r, n); ) ; else {
                var u = Fe(n), r = u.length;
                h(n, function(n, e, o) {
                    return e = u ? u[--r] : --r, t(o[e], e, o);
                });
            }
            return n;
        }
        function Rt(n, t, e) {
            var r = -1, u = n ? n.length : 0;
            if (t = J.createCallback(t, e, 3), typeof u == "number") for (var o = Xt(u); ++r < u; ) o[r] = t(n[r], r, n); else o = [], 
            h(n, function(n, e, u) {
                o[++r] = t(n, e, u);
            });
            return o;
        }
        function At(n, t, e) {
            var u = -1 / 0, o = u;
            if (typeof t != "function" && e && e[t] === n && (t = null), null == t && Te(n)) {
                e = -1;
                for (var i = n.length; ++e < i; ) {
                    var a = n[e];
                    a > o && (o = a);
                }
            } else t = null == t && kt(n) ? r : J.createCallback(t, e, 3), St(n, function(n, e, r) {
                e = t(n, e, r), e > u && (u = e, o = n);
            });
            return o;
        }
        function Dt(n, t, e, r) {
            if (!n) return e;
            var u = 3 > arguments.length;
            t = J.createCallback(t, r, 4);
            var o = -1, i = n.length;
            if (typeof i == "number") for (u && (e = n[++o]); ++o < i; ) e = t(e, n[o], o, n); else h(n, function(n, r, o) {
                e = u ? (u = false, n) : t(e, n, r, o);
            });
            return e;
        }
        function $t(n, t, e, r) {
            var u = 3 > arguments.length;
            return t = J.createCallback(t, r, 4), Et(n, function(n, r, o) {
                e = u ? (u = false, n) : t(e, n, r, o);
            }), e;
        }
        function Tt(n) {
            var t = -1, e = n ? n.length : 0, r = Xt(typeof e == "number" ? e : 0);
            return St(n, function(n) {
                var e = at(0, ++t);
                r[t] = r[e], r[e] = n;
            }), r;
        }
        function Ft(n, t, e) {
            var r;
            t = J.createCallback(t, e, 3), e = -1;
            var u = n ? n.length : 0;
            if (typeof u == "number") for (;++e < u && !(r = t(n[e], e, n)); ) ; else h(n, function(n, e, u) {
                return !(r = t(n, e, u));
            });
            return !!r;
        }
        function Bt(n, t, e) {
            var r = 0, u = n ? n.length : 0;
            if (typeof t != "number" && null != t) {
                var o = -1;
                for (t = J.createCallback(t, e, 3); ++o < u && t(n[o], o, n); ) r++;
            } else if (r = t, null == r || e) return n ? n[0] : v;
            return p(n, 0, Se(Ie(0, r), u));
        }
        function Wt(t, e, r) {
            if (typeof r == "number") {
                var u = t ? t.length : 0;
                r = 0 > r ? Ie(0, u + r) : r || 0;
            } else if (r) return r = zt(t, e), t[r] === e ? r : -1;
            return n(t, e, r);
        }
        function qt(n, t, e) {
            if (typeof t != "number" && null != t) {
                var r = 0, u = -1, o = n ? n.length : 0;
                for (t = J.createCallback(t, e, 3); ++u < o && t(n[u], u, n); ) r++;
            } else r = null == t || e ? 1 : Ie(0, t);
            return p(n, r);
        }
        function zt(n, t, e, r) {
            var u = 0, o = n ? n.length : u;
            for (e = e ? J.createCallback(e, r, 1) : Ut, t = e(t); u < o; ) r = u + o >>> 1, 
            e(n[r]) < t ? u = r + 1 : o = r;
            return u;
        }
        function Pt(n, t, e, r) {
            return typeof t != "boolean" && null != t && (r = e, e = typeof t != "function" && r && r[t] === n ? null : t, 
            t = false), null != e && (e = J.createCallback(e, r, 3)), ft(n, t, e);
        }
        function Kt() {
            for (var n = 1 < arguments.length ? arguments : arguments[0], t = -1, e = n ? At(Ve(n, "length")) : 0, r = Xt(0 > e ? 0 : e); ++t < e; ) r[t] = Ve(n, t);
            return r;
        }
        function Lt(n, t) {
            var e = -1, r = n ? n.length : 0, u = {};
            for (t || !r || Te(n[0]) || (t = []); ++e < r; ) {
                var o = n[e];
                t ? u[o] = t[e] : o && (u[o[0]] = o[1]);
            }
            return u;
        }
        function Mt(n, t) {
            return 2 < arguments.length ? ct(n, 17, p(arguments, 2), null, t) : ct(n, 1, null, null, t);
        }
        function Vt(n, t, e) {
            function r() {
                c && ve(c), i = c = p = v, (g || h !== t) && (s = Ue(), a = n.apply(l, o), c || i || (o = l = null));
            }
            function u() {
                var e = t - (Ue() - f);
                0 < e ? c = _e(u, e) : (i && ve(i), e = p, i = c = p = v, e && (s = Ue(), a = n.apply(l, o), 
                c || i || (o = l = null)));
            }
            var o, i, a, f, l, c, p, s = 0, h = false, g = true;
            if (!dt(n)) throw new ie();
            if (t = Ie(0, t) || 0, true === e) var y = true, g = false; else wt(e) && (y = e.leading, 
            h = "maxWait" in e && (Ie(t, e.maxWait) || 0), g = "trailing" in e ? e.trailing : g);
            return function() {
                if (o = arguments, f = Ue(), l = this, p = g && (c || !y), false === h) var e = y && !c; else {
                    i || y || (s = f);
                    var v = h - (f - s), m = 0 >= v;
                    m ? (i && (i = ve(i)), s = f, a = n.apply(l, o)) : i || (i = _e(r, v));
                }
                return m && c ? c = ve(c) : c || t === h || (c = _e(u, t)), e && (m = true, a = n.apply(l, o)), 
                !m || c || i || (o = l = null), a;
            };
        }
        function Ut(n) {
            return n;
        }
        function Gt(n, t, e) {
            var r = true, u = t && bt(t);
            t && (e || u.length) || (null == e && (e = t), o = Q, t = n, n = J, u = bt(t)), 
            false === e ? r = false : wt(e) && "chain" in e && (r = e.chain);
            var o = n, i = dt(o);
            St(u, function(e) {
                var u = n[e] = t[e];
                i && (o.prototype[e] = function() {
                    var t = this.__chain__, e = this.__wrapped__, i = [ e ];
                    if (be.apply(i, arguments), i = u.apply(n, i), r || t) {
                        if (e === i && wt(i)) return this;
                        i = new o(i), i.__chain__ = t;
                    }
                    return i;
                });
            });
        }
        function Ht() {}
        function Jt(n) {
            return function(t) {
                return t[n];
            };
        }
        function Qt() {
            return this.__wrapped__;
        }
        e = e ? Y.defaults(G.Object(), e, Y.pick(G, A)) : G;
        var Xt = e.Array, Yt = e.Boolean, Zt = e.Date, ne = e.Function, te = e.Math, ee = e.Number, re = e.Object, ue = e.RegExp, oe = e.String, ie = e.TypeError, ae = [], fe = re.prototype, le = e._, ce = fe.toString, pe = ue("^" + oe(ce).replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/toString| for [^\]]+/g, ".*?") + "$"), se = te.ceil, ve = e.clearTimeout, he = te.floor, ge = ne.prototype.toString, ye = vt(ye = re.getPrototypeOf) && ye, me = fe.hasOwnProperty, be = ae.push, _e = e.setTimeout, de = ae.splice, we = ae.unshift, je = function() {
            try {
                var n = {}, t = vt(t = re.defineProperty) && t, e = t(n, n, n) && t;
            } catch (r) {}
            return e;
        }(), ke = vt(ke = re.create) && ke, xe = vt(xe = Xt.isArray) && xe, Ce = e.isFinite, Oe = e.isNaN, Ne = vt(Ne = re.keys) && Ne, Ie = te.max, Se = te.min, Ee = e.parseInt, Re = te.random, Ae = {};
        Ae[$] = Xt, Ae[T] = Yt, Ae[F] = Zt, Ae[B] = ne, Ae[q] = re, Ae[W] = ee, Ae[z] = ue, 
        Ae[P] = oe, Q.prototype = J.prototype;
        var De = J.support = {};
        De.funcDecomp = !vt(e.a) && E.test(s), De.funcNames = typeof ne.name == "string", 
        J.templateSettings = {
            escape: /<%-([\s\S]+?)%>/g,
            evaluate: /<%([\s\S]+?)%>/g,
            interpolate: N,
            variable: "",
            imports: {
                _: J
            }
        }, ke || (nt = function() {
            function n() {}
            return function(t) {
                if (wt(t)) {
                    n.prototype = t;
                    var r = new n();
                    n.prototype = null;
                }
                return r || e.Object();
            };
        }());
        var $e = je ? function(n, t) {
            M.value = t, je(n, "__bindData__", M);
        } : Ht, Te = xe || function(n) {
            return n && typeof n == "object" && typeof n.length == "number" && ce.call(n) == $ || false;
        }, Fe = Ne ? function(n) {
            return wt(n) ? Ne(n) : [];
        } : H, Be = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        }, We = _t(Be), qe = ue("(" + Fe(We).join("|") + ")", "g"), ze = ue("[" + Fe(Be).join("") + "]", "g"), Pe = ye ? function(n) {
            if (!n || ce.call(n) != q) return false;
            var t = n.valueOf, e = vt(t) && (e = ye(t)) && ye(e);
            return e ? n == e || ye(n) == e : ht(n);
        } : ht, Ke = lt(function(n, t, e) {
            me.call(n, e) ? n[e]++ : n[e] = 1;
        }), Le = lt(function(n, t, e) {
            (me.call(n, e) ? n[e] : n[e] = []).push(t);
        }), Me = lt(function(n, t, e) {
            n[e] = t;
        }), Ve = Rt, Ue = vt(Ue = Zt.now) && Ue || function() {
            return new Zt().getTime();
        }, Ge = 8 == Ee(d + "08") ? Ee : function(n, t) {
            return Ee(kt(n) ? n.replace(I, "") : n, t || 0);
        };
        return J.after = function(n, t) {
            if (!dt(t)) throw new ie();
            return function() {
                return 1 > --n ? t.apply(this, arguments) : void 0;
            };
        }, J.assign = U, J.at = function(n) {
            for (var t = arguments, e = -1, r = ut(t, true, false, 1), t = t[2] && t[2][t[1]] === n ? 1 : r.length, u = Xt(t); ++e < t; ) u[e] = n[r[e]];
            return u;
        }, J.bind = Mt, J.bindAll = function(n) {
            for (var t = 1 < arguments.length ? ut(arguments, true, false, 1) : bt(n), e = -1, r = t.length; ++e < r; ) {
                var u = t[e];
                n[u] = ct(n[u], 1, null, null, n);
            }
            return n;
        }, J.bindKey = function(n, t) {
            return 2 < arguments.length ? ct(t, 19, p(arguments, 2), null, n) : ct(t, 3, null, null, n);
        }, J.chain = function(n) {
            return n = new Q(n), n.__chain__ = true, n;
        }, J.compact = function(n) {
            for (var t = -1, e = n ? n.length : 0, r = []; ++t < e; ) {
                var u = n[t];
                u && r.push(u);
            }
            return r;
        }, J.compose = function() {
            for (var n = arguments, t = n.length; t--; ) if (!dt(n[t])) throw new ie();
            return function() {
                for (var t = arguments, e = n.length; e--; ) t = [ n[e].apply(this, t) ];
                return t[0];
            };
        }, J.constant = function(n) {
            return function() {
                return n;
            };
        }, J.countBy = Ke, J.create = function(n, t) {
            var e = nt(n);
            return t ? U(e, t) : e;
        }, J.createCallback = function(n, t, e) {
            var r = typeof n;
            if (null == n || "function" == r) return tt(n, t, e);
            if ("object" != r) return Jt(n);
            var u = Fe(n), o = u[0], i = n[o];
            return 1 != u.length || i !== i || wt(i) ? function(t) {
                for (var e = u.length, r = false; e-- && (r = ot(t[u[e]], n[u[e]], null, true)); ) ;
                return r;
            } : function(n) {
                return n = n[o], i === n && (0 !== i || 1 / i == 1 / n);
            };
        }, J.curry = function(n, t) {
            return t = typeof t == "number" ? t : +t || n.length, ct(n, 4, null, null, null, t);
        }, J.debounce = Vt, J.defaults = _, J.defer = function(n) {
            if (!dt(n)) throw new ie();
            var t = p(arguments, 1);
            return _e(function() {
                n.apply(v, t);
            }, 1);
        }, J.delay = function(n, t) {
            if (!dt(n)) throw new ie();
            var e = p(arguments, 2);
            return _e(function() {
                n.apply(v, e);
            }, t);
        }, J.difference = function(n) {
            return rt(n, ut(arguments, true, true, 1));
        }, J.filter = Nt, J.flatten = function(n, t, e, r) {
            return typeof t != "boolean" && null != t && (r = e, e = typeof t != "function" && r && r[t] === n ? null : t, 
            t = false), null != e && (n = Rt(n, e, r)), ut(n, t);
        }, J.forEach = St, J.forEachRight = Et, J.forIn = g, J.forInRight = function(n, t, e) {
            var r = [];
            g(n, function(n, t) {
                r.push(t, n);
            });
            var u = r.length;
            for (t = tt(t, e, 3); u-- && false !== t(r[u--], r[u], n); ) ;
            return n;
        }, J.forOwn = h, J.forOwnRight = mt, J.functions = bt, J.groupBy = Le, J.indexBy = Me, 
        J.initial = function(n, t, e) {
            var r = 0, u = n ? n.length : 0;
            if (typeof t != "number" && null != t) {
                var o = u;
                for (t = J.createCallback(t, e, 3); o-- && t(n[o], o, n); ) r++;
            } else r = null == t || e ? 1 : t || r;
            return p(n, 0, Se(Ie(0, u - r), u));
        }, J.intersection = function() {
            for (var e = [], r = -1, u = arguments.length, i = a(), f = st(), p = f === n, s = a(); ++r < u; ) {
                var v = arguments[r];
                (Te(v) || yt(v)) && (e.push(v), i.push(p && v.length >= b && o(r ? e[r] : s)));
            }
            var p = e[0], h = -1, g = p ? p.length : 0, y = [];
            n: for (;++h < g; ) {
                var m = i[0], v = p[h];
                if (0 > (m ? t(m, v) : f(s, v))) {
                    for (r = u, (m || s).push(v); --r; ) if (m = i[r], 0 > (m ? t(m, v) : f(e[r], v))) continue n;
                    y.push(v);
                }
            }
            for (;u--; ) (m = i[u]) && c(m);
            return l(i), l(s), y;
        }, J.invert = _t, J.invoke = function(n, t) {
            var e = p(arguments, 2), r = -1, u = typeof t == "function", o = n ? n.length : 0, i = Xt(typeof o == "number" ? o : 0);
            return St(n, function(n) {
                i[++r] = (u ? t : n[t]).apply(n, e);
            }), i;
        }, J.keys = Fe, J.map = Rt, J.mapValues = function(n, t, e) {
            var r = {};
            return t = J.createCallback(t, e, 3), h(n, function(n, e, u) {
                r[e] = t(n, e, u);
            }), r;
        }, J.max = At, J.memoize = function(n, t) {
            function e() {
                var r = e.cache, u = t ? t.apply(this, arguments) : m + arguments[0];
                return me.call(r, u) ? r[u] : r[u] = n.apply(this, arguments);
            }
            if (!dt(n)) throw new ie();
            return e.cache = {}, e;
        }, J.merge = function(n) {
            var t = arguments, e = 2;
            if (!wt(n)) return n;
            if ("number" != typeof t[2] && (e = t.length), 3 < e && "function" == typeof t[e - 2]) var r = tt(t[--e - 1], t[e--], 2); else 2 < e && "function" == typeof t[e - 1] && (r = t[--e]);
            for (var t = p(arguments, 1, e), u = -1, o = a(), i = a(); ++u < e; ) it(n, t[u], r, o, i);
            return l(o), l(i), n;
        }, J.min = function(n, t, e) {
            var u = 1 / 0, o = u;
            if (typeof t != "function" && e && e[t] === n && (t = null), null == t && Te(n)) {
                e = -1;
                for (var i = n.length; ++e < i; ) {
                    var a = n[e];
                    a < o && (o = a);
                }
            } else t = null == t && kt(n) ? r : J.createCallback(t, e, 3), St(n, function(n, e, r) {
                e = t(n, e, r), e < u && (u = e, o = n);
            });
            return o;
        }, J.omit = function(n, t, e) {
            var r = {};
            if (typeof t != "function") {
                var u = [];
                g(n, function(n, t) {
                    u.push(t);
                });
                for (var u = rt(u, ut(arguments, true, false, 1)), o = -1, i = u.length; ++o < i; ) {
                    var a = u[o];
                    r[a] = n[a];
                }
            } else t = J.createCallback(t, e, 3), g(n, function(n, e, u) {
                t(n, e, u) || (r[e] = n);
            });
            return r;
        }, J.once = function(n) {
            var t, e;
            if (!dt(n)) throw new ie();
            return function() {
                return t ? e : (t = true, e = n.apply(this, arguments), n = null, e);
            };
        }, J.pairs = function(n) {
            for (var t = -1, e = Fe(n), r = e.length, u = Xt(r); ++t < r; ) {
                var o = e[t];
                u[t] = [ o, n[o] ];
            }
            return u;
        }, J.partial = function(n) {
            return ct(n, 16, p(arguments, 1));
        }, J.partialRight = function(n) {
            return ct(n, 32, null, p(arguments, 1));
        }, J.pick = function(n, t, e) {
            var r = {};
            if (typeof t != "function") for (var u = -1, o = ut(arguments, true, false, 1), i = wt(n) ? o.length : 0; ++u < i; ) {
                var a = o[u];
                a in n && (r[a] = n[a]);
            } else t = J.createCallback(t, e, 3), g(n, function(n, e, u) {
                t(n, e, u) && (r[e] = n);
            });
            return r;
        }, J.pluck = Ve, J.property = Jt, J.pull = function(n) {
            for (var t = arguments, e = 0, r = t.length, u = n ? n.length : 0; ++e < r; ) for (var o = -1, i = t[e]; ++o < u; ) n[o] === i && (de.call(n, o--, 1), 
            u--);
            return n;
        }, J.range = function(n, t, e) {
            n = +n || 0, e = typeof e == "number" ? e : +e || 1, null == t && (t = n, n = 0);
            var r = -1;
            t = Ie(0, se((t - n) / (e || 1)));
            for (var u = Xt(t); ++r < t; ) u[r] = n, n += e;
            return u;
        }, J.reject = function(n, t, e) {
            return t = J.createCallback(t, e, 3), Nt(n, function(n, e, r) {
                return !t(n, e, r);
            });
        }, J.remove = function(n, t, e) {
            var r = -1, u = n ? n.length : 0, o = [];
            for (t = J.createCallback(t, e, 3); ++r < u; ) e = n[r], t(e, r, n) && (o.push(e), 
            de.call(n, r--, 1), u--);
            return o;
        }, J.rest = qt, J.shuffle = Tt, J.sortBy = function(n, t, e) {
            var r = -1, o = Te(t), i = n ? n.length : 0, p = Xt(typeof i == "number" ? i : 0);
            for (o || (t = J.createCallback(t, e, 3)), St(n, function(n, e, u) {
                var i = p[++r] = f();
                o ? i.m = Rt(t, function(t) {
                    return n[t];
                }) : (i.m = a())[0] = t(n, e, u), i.n = r, i.o = n;
            }), i = p.length, p.sort(u); i--; ) n = p[i], p[i] = n.o, o || l(n.m), c(n);
            return p;
        }, J.tap = function(n, t) {
            return t(n), n;
        }, J.throttle = function(n, t, e) {
            var r = true, u = true;
            if (!dt(n)) throw new ie();
            return false === e ? r = false : wt(e) && (r = "leading" in e ? e.leading : r, u = "trailing" in e ? e.trailing : u), 
            L.leading = r, L.maxWait = t, L.trailing = u, Vt(n, t, L);
        }, J.times = function(n, t, e) {
            n = -1 < (n = +n) ? n : 0;
            var r = -1, u = Xt(n);
            for (t = tt(t, e, 1); ++r < n; ) u[r] = t(r);
            return u;
        }, J.toArray = function(n) {
            return n && typeof n.length == "number" ? p(n) : xt(n);
        }, J.transform = function(n, t, e, r) {
            var u = Te(n);
            if (null == e) if (u) e = []; else {
                var o = n && n.constructor;
                e = nt(o && o.prototype);
            }
            return t && (t = J.createCallback(t, r, 4), (u ? St : h)(n, function(n, r, u) {
                return t(e, n, r, u);
            })), e;
        }, J.union = function() {
            return ft(ut(arguments, true, true));
        }, J.uniq = Pt, J.values = xt, J.where = Nt, J.without = function(n) {
            return rt(n, p(arguments, 1));
        }, J.wrap = function(n, t) {
            return ct(t, 16, [ n ]);
        }, J.xor = function() {
            for (var n = -1, t = arguments.length; ++n < t; ) {
                var e = arguments[n];
                if (Te(e) || yt(e)) var r = r ? ft(rt(r, e).concat(rt(e, r))) : e;
            }
            return r || [];
        }, J.zip = Kt, J.zipObject = Lt, J.collect = Rt, J.drop = qt, J.each = St, J.eachRight = Et, 
        J.extend = U, J.methods = bt, J.object = Lt, J.select = Nt, J.tail = qt, J.unique = Pt, 
        J.unzip = Kt, Gt(J), J.clone = function(n, t, e, r) {
            return typeof t != "boolean" && null != t && (r = e, e = t, t = false), Z(n, t, typeof e == "function" && tt(e, r, 1));
        }, J.cloneDeep = function(n, t, e) {
            return Z(n, true, typeof t == "function" && tt(t, e, 1));
        }, J.contains = Ct, J.escape = function(n) {
            return null == n ? "" : oe(n).replace(ze, pt);
        }, J.every = Ot, J.find = It, J.findIndex = function(n, t, e) {
            var r = -1, u = n ? n.length : 0;
            for (t = J.createCallback(t, e, 3); ++r < u; ) if (t(n[r], r, n)) return r;
            return -1;
        }, J.findKey = function(n, t, e) {
            var r;
            return t = J.createCallback(t, e, 3), h(n, function(n, e, u) {
                return t(n, e, u) ? (r = e, false) : void 0;
            }), r;
        }, J.findLast = function(n, t, e) {
            var r;
            return t = J.createCallback(t, e, 3), Et(n, function(n, e, u) {
                return t(n, e, u) ? (r = n, false) : void 0;
            }), r;
        }, J.findLastIndex = function(n, t, e) {
            var r = n ? n.length : 0;
            for (t = J.createCallback(t, e, 3); r--; ) if (t(n[r], r, n)) return r;
            return -1;
        }, J.findLastKey = function(n, t, e) {
            var r;
            return t = J.createCallback(t, e, 3), mt(n, function(n, e, u) {
                return t(n, e, u) ? (r = e, false) : void 0;
            }), r;
        }, J.has = function(n, t) {
            return n ? me.call(n, t) : false;
        }, J.identity = Ut, J.indexOf = Wt, J.isArguments = yt, J.isArray = Te, J.isBoolean = function(n) {
            return true === n || false === n || n && typeof n == "object" && ce.call(n) == T || false;
        }, J.isDate = function(n) {
            return n && typeof n == "object" && ce.call(n) == F || false;
        }, J.isElement = function(n) {
            return n && 1 === n.nodeType || false;
        }, J.isEmpty = function(n) {
            var t = true;
            if (!n) return t;
            var e = ce.call(n), r = n.length;
            return e == $ || e == P || e == D || e == q && typeof r == "number" && dt(n.splice) ? !r : (h(n, function() {
                return t = false;
            }), t);
        }, J.isEqual = function(n, t, e, r) {
            return ot(n, t, typeof e == "function" && tt(e, r, 2));
        }, J.isFinite = function(n) {
            return Ce(n) && !Oe(parseFloat(n));
        }, J.isFunction = dt, J.isNaN = function(n) {
            return jt(n) && n != +n;
        }, J.isNull = function(n) {
            return null === n;
        }, J.isNumber = jt, J.isObject = wt, J.isPlainObject = Pe, J.isRegExp = function(n) {
            return n && typeof n == "object" && ce.call(n) == z || false;
        }, J.isString = kt, J.isUndefined = function(n) {
            return typeof n == "undefined";
        }, J.lastIndexOf = function(n, t, e) {
            var r = n ? n.length : 0;
            for (typeof e == "number" && (r = (0 > e ? Ie(0, r + e) : Se(e, r - 1)) + 1); r--; ) if (n[r] === t) return r;
            return -1;
        }, J.mixin = Gt, J.noConflict = function() {
            return e._ = le, this;
        }, J.noop = Ht, J.now = Ue, J.parseInt = Ge, J.random = function(n, t, e) {
            var r = null == n, u = null == t;
            return null == e && (typeof n == "boolean" && u ? (e = n, n = 1) : u || typeof t != "boolean" || (e = t, 
            u = true)), r && u && (t = 1), n = +n || 0, u ? (t = n, n = 0) : t = +t || 0, e || n % 1 || t % 1 ? (e = Re(), 
            Se(n + e * (t - n + parseFloat("1e-" + ((e + "").length - 1))), t)) : at(n, t);
        }, J.reduce = Dt, J.reduceRight = $t, J.result = function(n, t) {
            if (n) {
                var e = n[t];
                return dt(e) ? n[t]() : e;
            }
        }, J.runInContext = s, J.size = function(n) {
            var t = n ? n.length : 0;
            return typeof t == "number" ? t : Fe(n).length;
        }, J.some = Ft, J.sortedIndex = zt, J.template = function(n, t, e) {
            var r = J.templateSettings;
            n = oe(n || ""), e = _({}, e, r);
            var u, o = _({}, e.imports, r.imports), r = Fe(o), o = xt(o), a = 0, f = e.interpolate || S, l = "__p+='", f = ue((e.escape || S).source + "|" + f.source + "|" + (f === N ? x : S).source + "|" + (e.evaluate || S).source + "|$", "g");
            n.replace(f, function(t, e, r, o, f, c) {
                return r || (r = o), l += n.slice(a, c).replace(R, i), e && (l += "'+__e(" + e + ")+'"), 
                f && (u = true, l += "';" + f + ";\n__p+='"), r && (l += "'+((__t=(" + r + "))==null?'':__t)+'"), 
                a = c + t.length, t;
            }), l += "';", f = e = e.variable, f || (e = "obj", l = "with(" + e + "){" + l + "}"), 
            l = (u ? l.replace(w, "") : l).replace(j, "$1").replace(k, "$1;"), l = "function(" + e + "){" + (f ? "" : e + "||(" + e + "={});") + "var __t,__p='',__e=_.escape" + (u ? ",__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}" : ";") + l + "return __p}";
            try {
                var c = ne(r, "return " + l).apply(v, o);
            } catch (p) {
                throw p.source = l, p;
            }
            return t ? c(t) : (c.source = l, c);
        }, J.unescape = function(n) {
            return null == n ? "" : oe(n).replace(qe, gt);
        }, J.uniqueId = function(n) {
            var t = ++y;
            return oe(null == n ? "" : n) + t;
        }, J.all = Ot, J.any = Ft, J.detect = It, J.findWhere = It, J.foldl = Dt, J.foldr = $t, 
        J.include = Ct, J.inject = Dt, Gt(function() {
            var n = {};
            return h(J, function(t, e) {
                J.prototype[e] || (n[e] = t);
            }), n;
        }(), false), J.first = Bt, J.last = function(n, t, e) {
            var r = 0, u = n ? n.length : 0;
            if (typeof t != "number" && null != t) {
                var o = u;
                for (t = J.createCallback(t, e, 3); o-- && t(n[o], o, n); ) r++;
            } else if (r = t, null == r || e) return n ? n[u - 1] : v;
            return p(n, Ie(0, u - r));
        }, J.sample = function(n, t, e) {
            return n && typeof n.length != "number" && (n = xt(n)), null == t || e ? n ? n[at(0, n.length - 1)] : v : (n = Tt(n), 
            n.length = Se(Ie(0, t), n.length), n);
        }, J.take = Bt, J.head = Bt, h(J, function(n, t) {
            var e = "sample" !== t;
            J.prototype[t] || (J.prototype[t] = function(t, r) {
                var u = this.__chain__, o = n(this.__wrapped__, t, r);
                return u || null != t && (!r || e && typeof t == "function") ? new Q(o, u) : o;
            });
        }), J.VERSION = "2.4.1", J.prototype.chain = function() {
            return this.__chain__ = true, this;
        }, J.prototype.toString = function() {
            return oe(this.__wrapped__);
        }, J.prototype.value = Qt, J.prototype.valueOf = Qt, St([ "join", "pop", "shift" ], function(n) {
            var t = ae[n];
            J.prototype[n] = function() {
                var n = this.__chain__, e = t.apply(this.__wrapped__, arguments);
                return n ? new Q(e, n) : e;
            };
        }), St([ "push", "reverse", "sort", "unshift" ], function(n) {
            var t = ae[n];
            J.prototype[n] = function() {
                return t.apply(this.__wrapped__, arguments), this;
            };
        }), St([ "concat", "slice", "splice" ], function(n) {
            var t = ae[n];
            J.prototype[n] = function() {
                return new Q(t.apply(this.__wrapped__, arguments), this.__chain__);
            };
        }), J;
    }
    var v, h = [], g = [], y = 0, m = +new Date() + "", b = 75, _ = 40, d = " 	\f ﻿\n\r\u2028\u2029 ᠎             　", w = /\b__p\+='';/g, j = /\b(__p\+=)''\+/g, k = /(__e\(.*?\)|\b__t\))\+'';/g, x = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, C = /\w*$/, O = /^\s*function[ \n\r\t]+\w/, N = /<%=([\s\S]+?)%>/g, I = RegExp("^[" + d + "]*0+(?=.$)"), S = /($^)/, E = /\bthis\b/, R = /['\n\r\t\u2028\u2029\\]/g, A = "Array Boolean Date Function Math Number Object RegExp String _ attachEvent clearTimeout isFinite isNaN parseInt setTimeout".split(" "), D = "[object Arguments]", $ = "[object Array]", T = "[object Boolean]", F = "[object Date]", B = "[object Function]", W = "[object Number]", q = "[object Object]", z = "[object RegExp]", P = "[object String]", K = {};
    K[B] = false, K[D] = K[$] = K[T] = K[F] = K[W] = K[q] = K[z] = K[P] = true;
    var L = {
        leading: false,
        maxWait: 0,
        trailing: false
    }, M = {
        configurable: false,
        enumerable: false,
        value: null,
        writable: false
    }, V = {
        "boolean": false,
        "function": true,
        object: true,
        number: false,
        string: false,
        undefined: false
    }, U = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "	": "t",
        "\u2028": "u2028",
        "\u2029": "u2029"
    }, G = V[typeof window] && window || this, H = V[typeof exports] && exports && !exports.nodeType && exports, J = V[typeof module] && module && !module.nodeType && module, Q = J && J.exports === H && H, X = V[typeof global] && global;
    !X || X.global !== X && X.window !== X || (G = X);
    var Y = s();
    typeof define == "function" && typeof define.amd == "object" && define.amd ? (G._ = Y, 
    define(function() {
        return Y;
    })) : H && J ? Q ? (J.exports = Y)._ = Y : H._ = Y : G._ = Y;
}).call(this);

var config = {
    host: "stevesoelberg.com",
    title: "Steve Soelberg: Stand-up Comedian & the voice of Ragnar",
    description: "Steve Soelberg: Stand-up Comedian, & the voice of Ragnar",
    type: "comedian",
    entertainerId: "53d1db2b562cdbef37fe0a48",
    styles: [ "http://fonts.googleapis.com/css?family=Pacifico" ],
    scripts: [ "//ajax.googleapis.com/ajax/libs/angularjs/1.2.9/angular.min.js", "/ng/angular-route.js", "/ng/global.js" ],
    aliases: [ "steve.omniorders.com" ],
    analytics: "UA-42233857-2",
    smtpTransport: {
        service: "Gmail",
        auth: {
            user: "stevesoelberg@gmail.com",
            pass: "dubrbdulbvqwqicq"
        }
    }
};

function itemPromise($q, $route, Model) {
    var id = $route.current.params.id;
    console.log("hit item promise", id);
    if (id) {
        var obj = Model.get({
            id: id
        }, function() {
            console.log(obj);
        });
        return obj.$promise;
    } else {
        var deferred = $q.defer();
        deferred.resolve(new Model());
        return deferred.promise;
    }
}

var app = angular.module("comedian", [ "ngResource", "ngRoute" ]).config([ "$routeProvider", "$locationProvider", "$httpProvider", function($routeProvider, $locationProvider, $httpProvider) {
    $httpProvider.interceptors.push("AdminInterceptor");
    $httpProvider.defaults.withCredentials = true;
    angular.forEach([ {
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
        controller: "ListController",
        resolve: {
            items: [ "User", function(User) {
                var users = User.query(function() {
                    console.log(users);
                });
                return users.$promise;
            } ]
        }
    }, {
        url: "/admin/user/:id?",
        templateUrl: "/html/admin/userAddEdit.html",
        title: "Edit User",
        controller: "UserController"
    }, {
        url: "/profile",
        templateUrl: "/html/profile/addEdit.html",
        title: "Edit Profile",
        controller: "EntertainerController",
        resolve: {
            entertainer: [ "$q", "$route", "Entertainer", function($q, $route, Entertainer) {
                var obj = Entertainer.get(function() {
                    console.log(obj);
                });
                return obj.$promise;
            } ]
        }
    }, {
        url: "/media",
        templateUrl: "/html/media/list.html",
        title: "Edit Media",
        controller: "ListController",
        resolve: {
            items: [ "Medium", function(Medium) {
                var media = Medium.query(function() {
                    console.log(media);
                });
                return media.$promise;
            } ]
        }
    }, {
        url: "/medium/:id?",
        templateUrl: "/html/media/addEdit.html",
        title: "Edit Medium",
        controller: "MediumController",
        resolve: {
            medium: [ "$q", "$route", "Medium", itemPromise ]
        }
    }, {
        url: "/events",
        templateUrl: "/html/event/list.html",
        title: "Event List",
        controller: "ListController",
        resolve: {
            items: [ "Event", function(Event) {
                var events = Event.query();
                return events.$promise;
            } ]
        }
    }, {
        url: "/event/:id?",
        templateUrl: "/html/event/addEdit.html",
        title: "Edit Event",
        controller: "EventController",
        resolve: {
            event: [ "$q", "$route", "Event", itemPromise ]
        }
    }, {
        url: "/venue/:id?",
        templateUrl: "/html/venue/addEdit.html",
        title: "Edit Venue",
        controller: "VenueController",
        resolve: {
            venue: [ "$q", "$route", "Venue", itemPromise ]
        }
    } ], function(route) {
        var url = route.url;
        delete route.url;
        if (!route.controller) route.controller = "AdminController";
        $routeProvider.when(url, route);
    });
    $routeProvider.otherwise({
        templateUrl: "/html/home.html",
        title: "Page not found"
    });
    $locationProvider.html5Mode(true);
} ]).factory("User", [ "$resource", function($resource) {
    return $resource("http://api.comedian.io/users/:id"), {
        id: "@id"
    };
} ]).factory("Event", [ "$resource", function($resource) {
    return $resource("http://api.comedian.io/events/:id", {
        id: "@id"
    });
} ]).factory("Venue", [ "$resource", function($resource) {
    return $resource("http://api.comedian.io/venues/:id", {
        id: "@id"
    });
} ]).factory("Medium", [ "$resource", function($resource) {
    return $resource("http://api.comedian.io/media/:id", {
        id: "@id"
    });
} ]).factory("Entertainer", [ "$resource", function($resource) {
    return $resource("http://api.comedian.io/entertainers/53d1db2b562cdbef37fe0a48");
} ]).controller("ListController", [ "$http", "$scope", "$routeParams", "items", function($http, $scope, $routeParams, items) {
    $http.get("http://api.comedian.io/auth").success(function() {
        console.log("success", arguments);
    }).error(function() {
        console.log("error", arguments);
    });
    $scope.items = items;
} ]);

_.each([ "User", "Venue", "Medium", "Entertainer" ], function(ctrl) {
    app.controller(ctrl + "Controller", [ "$scope", "$location", ctrl, ctrl.toLowerCase(), function($scope, $location, Item, item) {
        console.log("hit controller", ctrl);
        $scope[ctrl.toLowerCase()] = item;
        console.log(ctrl.toLowerCase(), $scope[ctrl.toLowerCase()]);
        $scope.save = function() {
            console.log("Saving %s", $scope[ctrl.toLowerCase()]);
            $scope[ctrl.toLowerCase()].$save(function() {
                console.log("Saved", arguments);
                $location.path("/" + (ctrl == "Medium" ? "media" : ctrl.toLowerCase() + "s"));
            });
        };
    } ]);
});

function pluralize(str) {
    if (str.slice(-3) == "ium") {
        str = str.substr(0, str.length - 3) + "ia";
    } else {
        str += "s";
    }
    return str;
}

function parseDate(str) {
    var m = str.match(/^(\d{1,2})\/(\d{2})\/(\d{2})\s(\d{1,2}):(\d{2}) ([AP]M)$/);
    console.log("parse match", m);
    var month = m[1];
    var day = m[2];
    var year = m[3];
    var hour = m[4];
    var minute = m[5];
    var AM_PM = m[6];
    console.log("AM_PM", AM_PM, hour);
    hour = AM_PM == "PM" ? (parseInt(hour) + 12).toString() : hour;
    console.log("hour", hour);
    var fin = [ "20", year, "-", month, "-", day, "T", hour, ":", minute, ":00" ];
    console.log(fin.join(""));
    return fin.join("");
}

app.controller("EventController", [ "$scope", "$filter", "Venue", "event", function($scope, $filter, Venue, event) {
    $scope.event = _.defaults(event, {
        _name: "",
        showtimes: [],
        isRecurring: false,
        _type: "general",
        price: 0,
        venue: {},
        _description: "",
        _facebook: "",
        link: "",
        _video: "",
        _heroes: []
    });
    $scope.getVenues = function(val) {
        console.log("vlah2");
        var venues = Venue.query(function() {
            venues.push({
                name: "New Venue"
            });
        });
        return venues.$promise;
    };
    $scope.addShow = function() {
        $scope.event.showtimes.push({
            date: $filter("date")(new Date(), "MM/dd/yy"),
            time: $filter("date")(new Date(), "hh:mm a")
        });
    };
    $scope.save = function() {
        _.each($scope.event.showtimes, function(showtime, i) {
            $scope.event.showtimes[i].datetime = parseDate(showtime.date + " " + showtime.time);
        });
        console.log("Saving event", $scope.event);
        $scope.event.$save(function() {
            console.log("Saved", arguments);
        }, function(error) {});
    };
} ]);

app.controller("AdminController", [ "$rootScope", "$scope", "$http", function($rootScope, $scope, $http) {} ]).controller("Login", [ "$scope", "$http", function($scope, $http) {
    console.log("Login controller used");
    $scope.login = function(type) {
        console.log("clicked login", type);
        $http.get("/auth/" + type).success(function(data) {
            console.log("Auth data", data);
        });
    };
} ]).controller("EmailList", [ "$scope", "$http", function($scope, $http) {
    $scope.subscriber = {
        email: "",
        zip: "",
        name: ""
    };
    var that = this;
    this.submitted = false;
    $scope.saveData = function() {
        console.log("Hey", this.subscriber);
        $http.post("/mail", $scope.subscriber).success(function(data) {
            that.submitted = true;
            that.message = data.message;
        });
    };
} ]).controller("ContactForm", [ "$scope", "$http", function($scope, $http) {
    $scope.contact = {
        name: "",
        phone: "",
        email: "",
        message: ""
    };
    this.submitted = false;
    var that = this;
    $scope.saveData = function() {
        $http.post("/mail/send", $scope.contact).success(function(data) {
            that.submitted = true;
            that.message = data.message;
        });
    };
} ]).run([ "$location", "$rootScope", "Auth", function($location, $rootScope, Auth) {
    $rootScope.$on("$routeChangeSuccess", function(event, current, previous) {
        if (current) {
            document.title = current.$$route.title;
            $rootScope.bgClass = current.$$route.bgClass;
        }
    });
    $rootScope.$on("$routeChangeError", function(event, current, previous, rejection) {
        if (rejection.redirect) {
            $location.path(rejection.redirect);
        }
    });
} ]).factory("Auth", function($q, $http) {
    var _user = {};
    return {
        getUser: function() {
            var deferred = $q.defer();
            if (_user.loggedIn === true) {
                console.log("Local cache");
                deferred.resolve(_user);
            } else {
                $http.get("http://api.comedian.io/auth").success(function(user) {
                    console.log("Hit server");
                    if (user.loggedIn) {
                        _user = user;
                        deferred.resolve(user);
                    } else {
                        deferred.reject({
                            redirect: "/login"
                        });
                    }
                });
            }
            return deferred.promise;
        },
        setUser: function(aUser) {
            user = aUser;
        },
        isLoggedIn: function() {
            return user ? user : false;
        }
    };
}).factory("AdminInterceptor", [ "$location", "$q", function($location, $q) {
    return {
        request: function(config) {
            console.log("request", config);
            return config;
        },
        requestError: function(rejection) {
            console.log("request error", config);
            return $q.reject(rejection);
        },
        response: function(response) {
            console.log("response", response);
            return response;
        },
        responseError: function(rejection) {
            console.log("response error", rejection);
            if (rejection.status === 401) {
                console.log("Unauthorized. Redirecting...");
                $location.path("/login");
            }
            return $q.reject(rejection);
        }
    };
} ]);