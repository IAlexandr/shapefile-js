!function (t, e) {
    'function' == typeof define && define.amd ? define(e) : 'undefined' != typeof module ? module.exports = e() : t.shp = e();
}(this, function () {
    var requirejs, ___forBrowserify___, define;
    return function (t) {
        function e(t, e) {
            return M.call(t, e);
        }
        function i(t, e) {
            var i, s, r, a, n, h, o, u, l, f, c = e && e.split('/'), p = m.map, d = p && p['*'] || {};
            if (t && '.' === t.charAt(0))
                if (e) {
                    for (c = c.slice(0, c.length - 1), t = c.concat(t.split('/')), u = 0; u < t.length; u += 1)
                        if (f = t[u], '.' === f)
                            t.splice(u, 1), u -= 1;
                        else if ('..' === f) {
                            if (1 === u && ('..' === t[2] || '..' === t[0]))
                                break;
                            u > 0 && (t.splice(u - 1, 2), u -= 2);
                        }
                    t = t.join('/');
                } else
                    0 === t.indexOf('./') && (t = t.substring(2));
            if ((c || d) && p) {
                for (i = t.split('/'), u = i.length; u > 0; u -= 1) {
                    if (s = i.slice(0, u).join('/'), c)
                        for (l = c.length; l > 0; l -= 1)
                            if (r = p[c.slice(0, l).join('/')], r && (r = r[s])) {
                                a = r, n = u;
                                break;
                            }
                    if (a)
                        break;
                    !h && d && d[s] && (h = d[s], o = u);
                }
                !a && h && (a = h, n = o), a && (i.splice(0, n, a), t = i.join('/'));
            }
            return t;
        }
        function s(e, i) {
            return function () {
                return l.apply(t, g.call(arguments, 0).concat([
                    e,
                    i
                ]));
            };
        }
        function r(t) {
            return function (e) {
                return i(e, t);
            };
        }
        function a(t) {
            return function (e) {
                p[t] = e;
            };
        }
        function n(i) {
            if (e(d, i)) {
                var s = d[i];
                delete d[i], y[i] = !0, u.apply(t, s);
            }
            if (!e(p, i) && !e(y, i))
                throw new Error('No ' + i);
            return p[i];
        }
        function h(t) {
            var e, i = t ? t.indexOf('!') : -1;
            return i > -1 && (e = t.substring(0, i), t = t.substring(i + 1, t.length)), [
                e,
                t
            ];
        }
        function o(t) {
            return function () {
                return m && m.config && m.config[t] || {};
            };
        }
        var u, l, f, c, p = {}, d = {}, m = {}, y = {}, M = Object.prototype.hasOwnProperty, g = [].slice;
        f = function (t, e) {
            var s, a = h(t), o = a[0];
            return t = a[1], o && (o = i(o, e), s = n(o)), o ? t = s && s.normalize ? s.normalize(t, r(e)) : i(t, e) : (t = i(t, e), a = h(t), o = a[0], t = a[1], o && (s = n(o))), {
                f: o ? o + '!' + t : t,
                n: t,
                pr: o,
                p: s
            };
        }, c = {
            ___forBrowserify___: function (t) {
                return s(t);
            },
            exports: function (t) {
                var e = p[t];
                return 'undefined' != typeof e ? e : p[t] = {};
            },
            module: function (t) {
                return {
                    id: t,
                    uri: '',
                    exports: p[t],
                    config: o(t)
                };
            }
        }, u = function (i, r, h, o) {
            var u, l, m, M, g, _, b = [];
            if (o = o || i, 'function' == typeof h) {
                for (r = !r.length && h.length ? [
                        'require',
                        'exports',
                        'module'
                    ] : r, g = 0; g < r.length; g += 1)
                    if (M = f(r[g], o), l = M.f, 'require' === l)
                        b[g] = c.___forBrowserify___(i);
                    else if ('exports' === l)
                        b[g] = c.exports(i), _ = !0;
                    else if ('module' === l)
                        u = b[g] = c.module(i);
                    else if (e(p, l) || e(d, l) || e(y, l))
                        b[g] = n(l);
                    else {
                        if (!M.p)
                            throw new Error(i + ' missing ' + l);
                        M.p.load(M.n, s(o, !0), a(l), {}), b[g] = p[l];
                    }
                m = h.apply(p[i], b), i && (u && u.exports !== t && u.exports !== p[i] ? p[i] = u.exports : m === t && _ || (p[i] = m));
            } else
                i && (p[i] = h);
        }, requirejs = ___forBrowserify___ = l = function (e, i, s, r, a) {
            return 'string' == typeof e ? c[e] ? c[e](i) : n(f(e, i).f) : (e.splice || (m = e, i.splice ? (e = i, i = s, s = null) : e = t), i = i || function () {
            }, 'function' == typeof s && (s = r, r = a), r ? u(t, e, i, s) : setTimeout(function () {
                u(t, e, i, s);
            }, 4), l);
        }, l.config = function (t) {
            return m = t, m.deps && l(m.deps, m.callback), l;
        }, requirejs._defined = p, define = function (t, i, s) {
            i.splice || (s = i, i = []), e(p, t) || e(d, t) || (d[t] = [
                t,
                i,
                s
            ]);
        }, define.amd = { jQuery: !0 };
    }(), define('node_modules/almond/almond', function () {
    }), define('proj4/mgrs', [
        'require',
        'exports',
        'module'
    ], function (t, e) {
        function i(t) {
            return t * (Math.PI / 180);
        }
        function s(t) {
            return 180 * (t / Math.PI);
        }
        function r(t) {
            var e, s, r, a, h, o, u, l, f, c = t.lat, p = t.lon, d = 6378137, m = 0.00669438, y = 0.9996, M = i(c), g = i(p);
            f = Math.floor((p + 180) / 6) + 1, 180 === p && (f = 60), c >= 56 && 64 > c && p >= 3 && 12 > p && (f = 32), c >= 72 && 84 > c && (p >= 0 && 9 > p ? f = 31 : p >= 9 && 21 > p ? f = 33 : p >= 21 && 33 > p ? f = 35 : p >= 33 && 42 > p && (f = 37)), e = 6 * (f - 1) - 180 + 3, l = i(e), s = m / (1 - m), r = d / Math.sqrt(1 - m * Math.sin(M) * Math.sin(M)), a = Math.tan(M) * Math.tan(M), h = s * Math.cos(M) * Math.cos(M), o = Math.cos(M) * (g - l), u = d * ((1 - m / 4 - 3 * m * m / 64 - 5 * m * m * m / 256) * M - (3 * m / 8 + 3 * m * m / 32 + 45 * m * m * m / 1024) * Math.sin(2 * M) + (15 * m * m / 256 + 45 * m * m * m / 1024) * Math.sin(4 * M) - 35 * m * m * m / 3072 * Math.sin(6 * M));
            var _ = y * r * (o + (1 - a + h) * o * o * o / 6 + (5 - 18 * a + a * a + 72 * h - 58 * s) * o * o * o * o * o / 120) + 500000, b = y * (u + r * Math.tan(M) * (o * o / 2 + (5 - a + 9 * h + 4 * h * h) * o * o * o * o / 24 + (61 - 58 * a + a * a + 600 * h - 330 * s) * o * o * o * o * o * o / 720));
            return 0 > c && (b += 10000000), {
                northing: Math.round(b),
                easting: Math.round(_),
                zoneNumber: f,
                zoneLetter: n(c)
            };
        }
        function a(t) {
            var e = t.northing, i = t.easting, r = t.zoneLetter, n = t.zoneNumber;
            if (0 > n || n > 60)
                return null;
            var h, o, u, l, f, c, p, d, m, y, M = 0.9996, g = 6378137, _ = 0.00669438, b = (1 - Math.sqrt(1 - _)) / (1 + Math.sqrt(1 - _)), v = i - 500000, j = e;
            'N' > r && (j -= 10000000), d = 6 * (n - 1) - 180 + 3, h = _ / (1 - _), p = j / M, m = p / (g * (1 - _ / 4 - 3 * _ * _ / 64 - 5 * _ * _ * _ / 256)), y = m + (3 * b / 2 - 27 * b * b * b / 32) * Math.sin(2 * m) + (21 * b * b / 16 - 55 * b * b * b * b / 32) * Math.sin(4 * m) + 151 * b * b * b / 96 * Math.sin(6 * m), o = g / Math.sqrt(1 - _ * Math.sin(y) * Math.sin(y)), u = Math.tan(y) * Math.tan(y), l = h * Math.cos(y) * Math.cos(y), f = g * (1 - _) / Math.pow(1 - _ * Math.sin(y) * Math.sin(y), 1.5), c = v / (o * M);
            var x = y - o * Math.tan(y) / f * (c * c / 2 - (5 + 3 * u + 10 * l - 4 * l * l - 9 * h) * c * c * c * c / 24 + (61 + 90 * u + 298 * l + 45 * u * u - 252 * h - 3 * l * l) * c * c * c * c * c * c / 720);
            x = s(x);
            var A = (c - (1 + 2 * u + l) * c * c * c / 6 + (5 - 2 * l + 28 * u - 3 * l * l + 8 * h + 24 * u * u) * c * c * c * c * c / 120) / Math.cos(y);
            A = d + s(A);
            var C;
            if (t.accuracy) {
                var w = a({
                        northing: t.northing + t.accuracy,
                        easting: t.easting + t.accuracy,
                        zoneLetter: t.zoneLetter,
                        zoneNumber: t.zoneNumber
                    });
                C = {
                    top: w.lat,
                    right: w.lon,
                    bottom: x,
                    left: A
                };
            } else
                C = {
                    lat: x,
                    lon: A
                };
            return C;
        }
        function n(t) {
            var e = 'Z';
            return 84 >= t && t >= 72 ? e = 'X' : 72 > t && t >= 64 ? e = 'W' : 64 > t && t >= 56 ? e = 'V' : 56 > t && t >= 48 ? e = 'U' : 48 > t && t >= 40 ? e = 'T' : 40 > t && t >= 32 ? e = 'S' : 32 > t && t >= 24 ? e = 'R' : 24 > t && t >= 16 ? e = 'Q' : 16 > t && t >= 8 ? e = 'P' : 8 > t && t >= 0 ? e = 'N' : 0 > t && t >= -8 ? e = 'M' : -8 > t && t >= -16 ? e = 'L' : -16 > t && t >= -24 ? e = 'K' : -24 > t && t >= -32 ? e = 'J' : -32 > t && t >= -40 ? e = 'H' : -40 > t && t >= -48 ? e = 'G' : -48 > t && t >= -56 ? e = 'F' : -56 > t && t >= -64 ? e = 'E' : -64 > t && t >= -72 ? e = 'D' : -72 > t && t >= -80 && (e = 'C'), e;
        }
        function h(t, e) {
            var i = '' + t.easting, s = '' + t.northing;
            return t.zoneNumber + t.zoneLetter + o(t.easting, t.northing, t.zoneNumber) + i.substr(i.length - 5, e) + s.substr(s.length - 5, e);
        }
        function o(t, e, i) {
            var s = u(i), r = Math.floor(t / 100000), a = Math.floor(e / 100000) % 20;
            return l(r, a, s);
        }
        function u(t) {
            var e = t % m;
            return 0 === e && (e = m), e;
        }
        function l(t, e, i) {
            var s = i - 1, r = y.charCodeAt(s), a = M.charCodeAt(s), n = r + t - 1, h = a + e, o = !1;
            n > j && (n = n - j + g - 1, o = !0), (n === _ || _ > r && n > _ || (n > _ || _ > r) && o) && n++, (n === b || b > r && n > b || (n > b || b > r) && o) && (n++, n === _ && n++), n > j && (n = n - j + g - 1), h > v ? (h = h - v + g - 1, o = !0) : o = !1, (h === _ || _ > a && h > _ || (h > _ || _ > a) && o) && h++, (h === b || b > a && h > b || (h > b || b > a) && o) && (h++, h === _ && h++), h > v && (h = h - v + g - 1);
            var u = String.fromCharCode(n) + String.fromCharCode(h);
            return u;
        }
        function f(t) {
            if (t && 0 === t.length)
                throw 'MGRSPoint coverting from nothing';
            for (var e, i = t.length, s = null, r = '', a = 0; !/[A-Z]/.test(e = t.charAt(a));) {
                if (a >= 2)
                    throw 'MGRSPoint bad conversion from: ' + t;
                r += e, a++;
            }
            var n = parseInt(r, 10);
            if (0 === a || a + 3 > i)
                throw 'MGRSPoint bad conversion from: ' + t;
            var h = t.charAt(a++);
            if ('A' >= h || 'B' === h || 'Y' === h || h >= 'Z' || 'I' === h || 'O' === h)
                throw 'MGRSPoint zone letter ' + h + ' not handled: ' + t;
            s = t.substring(a, a += 2);
            for (var o = u(n), l = c(s.charAt(0), o), f = p(s.charAt(1), o); f < d(h);)
                f += 2000000;
            var m = i - a;
            if (0 !== m % 2)
                throw 'MGRSPoint has to have an even number \nof digits after the zone letter and two 100km letters - front \nhalf for easting meters, second half for \nnorthing meters' + t;
            var y, M, g, _, b, v = m / 2, j = 0, x = 0;
            return v > 0 && (y = 100000 / Math.pow(10, v), M = t.substring(a, a + v), j = parseFloat(M) * y, g = t.substring(a + v), x = parseFloat(g) * y), _ = j + l, b = x + f, {
                easting: _,
                northing: b,
                zoneLetter: h,
                zoneNumber: n,
                accuracy: y
            };
        }
        function c(t, e) {
            for (var i = y.charCodeAt(e - 1), s = 100000, r = !1; i !== t.charCodeAt(0);) {
                if (i++, i === _ && i++, i === b && i++, i > j) {
                    if (r)
                        throw 'Bad character: ' + t;
                    i = g, r = !0;
                }
                s += 100000;
            }
            return s;
        }
        function p(t, e) {
            if (t > 'V')
                throw 'MGRSPoint given invalid Northing ' + t;
            for (var i = M.charCodeAt(e - 1), s = 0, r = !1; i !== t.charCodeAt(0);) {
                if (i++, i === _ && i++, i === b && i++, i > v) {
                    if (r)
                        throw 'Bad character: ' + t;
                    i = g, r = !0;
                }
                s += 100000;
            }
            return s;
        }
        function d(t) {
            var e;
            switch (t) {
            case 'C':
                e = 1100000;
                break;
            case 'D':
                e = 2000000;
                break;
            case 'E':
                e = 2800000;
                break;
            case 'F':
                e = 3700000;
                break;
            case 'G':
                e = 4600000;
                break;
            case 'H':
                e = 5500000;
                break;
            case 'J':
                e = 6400000;
                break;
            case 'K':
                e = 7300000;
                break;
            case 'L':
                e = 8200000;
                break;
            case 'M':
                e = 9100000;
                break;
            case 'N':
                e = 0;
                break;
            case 'P':
                e = 800000;
                break;
            case 'Q':
                e = 1700000;
                break;
            case 'R':
                e = 2600000;
                break;
            case 'S':
                e = 3500000;
                break;
            case 'T':
                e = 4400000;
                break;
            case 'U':
                e = 5300000;
                break;
            case 'V':
                e = 6200000;
                break;
            case 'W':
                e = 7000000;
                break;
            case 'X':
                e = 7900000;
                break;
            default:
                e = -1;
            }
            if (e >= 0)
                return e;
            throw 'Invalid zone letter: ' + t;
        }
        var m = 6, y = 'AJSAJS', M = 'AFAFAF', g = 65, _ = 73, b = 79, v = 86, j = 90;
        e.forward = function (t, e) {
            return e = e || 5, h(r({
                lat: t.lat,
                lon: t.lon
            }), e);
        }, e.inverse = function (t) {
            var e = a(f(t.toUpperCase()));
            return [
                e.left,
                e.bottom,
                e.right,
                e.top
            ];
        };
    }), define('proj4/Point', [
        'require',
        'proj4/mgrs'
    ], function (t) {
        function e(t, i, s) {
            if (!(this instanceof e))
                return new e(t, i, s);
            if ('object' == typeof t)
                this.x = t[0], this.y = t[1], this.z = t[2] || 0;
            else if ('string' == typeof t && 'undefined' == typeof i) {
                var r = t.split(',');
                this.x = parseFloat(r[0]), this.y = parseFloat(r[1]), this.z = parseFloat(r[2]) || 0;
            } else
                this.x = t, this.y = i, this.z = s || 0;
            this.clone = function () {
                return new e(this.x, this.y, this.z);
            }, this.toString = function () {
                return 'x=' + this.x + ',y=' + this.y;
            }, this.toShortString = function () {
                return this.x + ', ' + this.y;
            };
        }
        var i = t('proj4/mgrs');
        return e.fromMGRS = function (t) {
            var s = i.inverse(t);
            return new e((s[2] + s[0]) / 2, (s[3] + s[1]) / 2);
        }, e.prototype.toMGRS = function (t) {
            return i.forward({
                lon: this.x,
                lat: this.y
            }, t);
        }, e;
    }), define('proj4/extend', [], function () {
        return function (t, e) {
            t = t || {};
            var i, s;
            if (!e)
                return t;
            for (s in e)
                i = e[s], void 0 !== i && (t[s] = i);
            return t;
        };
    }), define('proj4/common', [], function () {
        var t = {
                PI: 3.141592653589793,
                HALF_PI: 1.5707963267948966,
                TWO_PI: 6.283185307179586,
                FORTPI: 0.7853981633974483,
                R2D: 57.29577951308232,
                D2R: 0.017453292519943295,
                SEC_TO_RAD: 0.00000484813681109536,
                EPSLN: 1e-10,
                MAX_ITER: 20,
                COS_67P5: 0.3826834323650898,
                AD_C: 1.0026,
                PJD_UNKNOWN: 0,
                PJD_3PARAM: 1,
                PJD_7PARAM: 2,
                PJD_GRIDSHIFT: 3,
                PJD_WGS84: 4,
                PJD_NODATUM: 5,
                SRS_WGS84_SEMIMAJOR: 6378137,
                SRS_WGS84_ESQUARED: 0.006694379990141316,
                SIXTH: 0.16666666666666666,
                RA4: 0.04722222222222222,
                RA6: 0.022156084656084655,
                RV4: 0.06944444444444445,
                RV6: 0.04243827160493827,
                msfnz: function (t, e, i) {
                    var s = t * e;
                    return i / Math.sqrt(1 - s * s);
                },
                tsfnz: function (t, e, i) {
                    var s = t * i, r = 0.5 * t;
                    return s = Math.pow((1 - s) / (1 + s), r), Math.tan(0.5 * (this.HALF_PI - e)) / s;
                },
                phi2z: function (t, e) {
                    for (var i, s, r = 0.5 * t, a = this.HALF_PI - 2 * Math.atan(e), n = 0; 15 >= n; n++)
                        if (i = t * Math.sin(a), s = this.HALF_PI - 2 * Math.atan(e * Math.pow((1 - i) / (1 + i), r)) - a, a += s, Math.abs(s) <= 1e-10)
                            return a;
                    return -9999;
                },
                qsfnz: function (t, e) {
                    var i;
                    return t > 1e-7 ? (i = t * e, (1 - t * t) * (e / (1 - i * i) - 0.5 / t * Math.log((1 - i) / (1 + i)))) : 2 * e;
                },
                iqsfnz: function (e, i) {
                    var s = 1 - (1 - e * e) / (2 * e) * Math.log((1 - e) / (1 + e));
                    if (Math.abs(Math.abs(i) - s) < 0.000001)
                        return 0 > i ? -1 * t.HALF_PI : t.HALF_PI;
                    for (var r, a, n, h, o = Math.asin(0.5 * i), u = 0; 30 > u; u++)
                        if (a = Math.sin(o), n = Math.cos(o), h = e * a, r = Math.pow(1 - h * h, 2) / (2 * n) * (i / (1 - e * e) - a / (1 - h * h) + 0.5 / e * Math.log((1 - h) / (1 + h))), o += r, Math.abs(r) <= 1e-10)
                            return o;
                    return 0 / 0;
                },
                asinz: function (t) {
                    return Math.abs(t) > 1 && (t = t > 1 ? 1 : -1), Math.asin(t);
                },
                e0fn: function (t) {
                    return 1 - 0.25 * t * (1 + t / 16 * (3 + 1.25 * t));
                },
                e1fn: function (t) {
                    return 0.375 * t * (1 + 0.25 * t * (1 + 0.46875 * t));
                },
                e2fn: function (t) {
                    return 0.05859375 * t * t * (1 + 0.75 * t);
                },
                e3fn: function (t) {
                    return t * t * t * (35 / 3072);
                },
                mlfn: function (t, e, i, s, r) {
                    return t * r - e * Math.sin(2 * r) + i * Math.sin(4 * r) - s * Math.sin(6 * r);
                },
                imlfn: function (t, e, i, s, r) {
                    var a, n;
                    a = t / e;
                    for (var h = 0; 15 > h; h++)
                        if (n = (t - (e * a - i * Math.sin(2 * a) + s * Math.sin(4 * a) - r * Math.sin(6 * a))) / (e - 2 * i * Math.cos(2 * a) + 4 * s * Math.cos(4 * a) - 6 * r * Math.cos(6 * a)), a += n, Math.abs(n) <= 1e-10)
                            return a;
                    return 0 / 0;
                },
                srat: function (t, e) {
                    return Math.pow((1 - t) / (1 + t), e);
                },
                sign: function (t) {
                    return 0 > t ? -1 : 1;
                },
                adjust_lon: function (t) {
                    return t = Math.abs(t) < this.PI ? t : t - this.sign(t) * this.TWO_PI;
                },
                adjust_lat: function (t) {
                    return t = Math.abs(t) < this.HALF_PI ? t : t - this.sign(t) * this.PI;
                },
                latiso: function (t, e, i) {
                    if (Math.abs(e) > this.HALF_PI)
                        return Number.NaN;
                    if (e === this.HALF_PI)
                        return Number.POSITIVE_INFINITY;
                    if (e === -1 * this.HALF_PI)
                        return Number.NEGATIVE_INFINITY;
                    var s = t * i;
                    return Math.log(Math.tan((this.HALF_PI + e) / 2)) + t * Math.log((1 - s) / (1 + s)) / 2;
                },
                fL: function (t, e) {
                    return 2 * Math.atan(t * Math.exp(e)) - this.HALF_PI;
                },
                invlatiso: function (t, e) {
                    var i = this.fL(1, e), s = 0, r = 0;
                    do
                        s = i, r = t * Math.sin(s), i = this.fL(Math.exp(t * Math.log((1 + r) / (1 - r)) / 2), e);
                    while (Math.abs(i - s) > 1e-12);
                    return i;
                },
                sinh: function (t) {
                    var e = Math.exp(t);
                    return e = (e - 1 / e) / 2;
                },
                cosh: function (t) {
                    var e = Math.exp(t);
                    return e = (e + 1 / e) / 2;
                },
                tanh: function (t) {
                    var e = Math.exp(t);
                    return e = (e - 1 / e) / (e + 1 / e);
                },
                asinh: function (t) {
                    var e = t >= 0 ? 1 : -1;
                    return e * Math.log(Math.abs(t) + Math.sqrt(t * t + 1));
                },
                acosh: function (t) {
                    return 2 * Math.log(Math.sqrt((t + 1) / 2) + Math.sqrt((t - 1) / 2));
                },
                atanh: function (t) {
                    return Math.log((t - 1) / (t + 1)) / 2;
                },
                gN: function (t, e, i) {
                    var s = e * i;
                    return t / Math.sqrt(1 - s * s);
                },
                pj_enfn: function (t) {
                    var e = [];
                    e[0] = this.C00 - t * (this.C02 + t * (this.C04 + t * (this.C06 + t * this.C08))), e[1] = t * (this.C22 - t * (this.C04 + t * (this.C06 + t * this.C08)));
                    var i = t * t;
                    return e[2] = i * (this.C44 - t * (this.C46 + t * this.C48)), i *= t, e[3] = i * (this.C66 - t * this.C68), e[4] = i * t * this.C88, e;
                },
                pj_mlfn: function (t, e, i, s) {
                    return i *= e, e *= e, s[0] * t - i * (s[1] + e * (s[2] + e * (s[3] + e * s[4])));
                },
                pj_inv_mlfn: function (e, i, s) {
                    for (var r = 1 / (1 - i), a = e, n = t.MAX_ITER; n; --n) {
                        var h = Math.sin(a), o = 1 - i * h * h;
                        if (o = (this.pj_mlfn(a, h, Math.cos(a), s) - e) * o * Math.sqrt(o) * r, a -= o, Math.abs(o) < t.EPSLN)
                            return a;
                    }
                    return a;
                },
                nad_intr: function (t, e) {
                    var i, s = {
                            x: (t.x - 1e-7) / e.del[0],
                            y: (t.y - 1e-7) / e.del[1]
                        }, r = {
                            x: Math.floor(s.x),
                            y: Math.floor(s.y)
                        }, a = {
                            x: s.x - 1 * r.x,
                            y: s.y - 1 * r.y
                        }, n = {
                            x: Number.NaN,
                            y: Number.NaN
                        };
                    if (r.x < 0) {
                        if (!(-1 === r.x && a.x > 0.99999999999))
                            return n;
                        r.x++, a.x = 0;
                    } else if (i = r.x + 1, i >= e.lim[0]) {
                        if (!(i === e.lim[0] && a.x < 1e-11))
                            return n;
                        r.x--, a.x = 1;
                    }
                    if (r.y < 0) {
                        if (!(-1 === r.y && a.y > 0.99999999999))
                            return n;
                        r.y++, a.y = 0;
                    } else if (i = r.y + 1, i >= e.lim[1]) {
                        if (!(i === e.lim[1] && a.y < 1e-11))
                            return n;
                        r.y++, a.y = 1;
                    }
                    i = r.y * e.lim[0] + r.x;
                    var h = {
                            x: e.cvs[i][0],
                            y: e.cvs[i][1]
                        };
                    i++;
                    var o = {
                            x: e.cvs[i][0],
                            y: e.cvs[i][1]
                        };
                    i += e.lim[0];
                    var u = {
                            x: e.cvs[i][0],
                            y: e.cvs[i][1]
                        };
                    i--;
                    var l = {
                            x: e.cvs[i][0],
                            y: e.cvs[i][1]
                        }, f = a.x * a.y, c = a.x * (1 - a.y), p = (1 - a.x) * (1 - a.y), d = (1 - a.x) * a.y;
                    return n.x = p * h.x + c * o.x + d * l.x + f * u.x, n.y = p * h.y + c * o.y + d * l.y + f * u.y, n;
                },
                nad_cvt: function (e, i, s) {
                    var r = {
                            x: Number.NaN,
                            y: Number.NaN
                        };
                    if (isNaN(e.x))
                        return r;
                    var a = {
                            x: e.x,
                            y: e.y
                        };
                    a.x -= s.ll[0], a.y -= s.ll[1], a.x = t.adjust_lon(a.x - t.PI) + t.PI;
                    var n = t.nad_intr(a, s);
                    if (i) {
                        if (isNaN(n.x))
                            return r;
                        n.x = a.x + n.x, n.y = a.y - n.y;
                        var h, o, u = 9, l = 1e-12;
                        do {
                            if (o = t.nad_intr(n, s), isNaN(o.x)) {
                                this.reportError('Inverse grid shift iteration failed, presumably at grid edge.  Using first approximation.');
                                break;
                            }
                            h = {
                                x: n.x - o.x - a.x,
                                y: n.y + o.y - a.y
                            }, n.x -= h.x, n.y -= h.y;
                        } while (u-- && Math.abs(h.x) > l && Math.abs(h.y) > l);
                        if (0 > u)
                            return this.reportError('Inverse grid shift iterator failed to converge.'), r;
                        r.x = t.adjust_lon(n.x + s.ll[0]), r.y = n.y + s.ll[1];
                    } else
                        isNaN(n.x) || (r.x = e.x - n.x, r.y = e.y + n.y);
                    return r;
                },
                C00: 1,
                C02: 0.25,
                C04: 0.046875,
                C06: 0.01953125,
                C08: 0.01068115234375,
                C22: 0.75,
                C44: 0.46875,
                C46: 0.013020833333333334,
                C48: 0.007120768229166667,
                C66: 0.3645833333333333,
                C68: 0.005696614583333333,
                C88: 0.3076171875
            };
        return t;
    }), define('proj4/global', [], function () {
        return function (t) {
            t('WGS84', '+title=WGS 84 (long/lat) +proj=longlat +ellps=WGS84 +datum=WGS84 +units=degrees'), t('EPSG:4326', '+title=WGS 84 (long/lat) +proj=longlat +ellps=WGS84 +datum=WGS84 +units=degrees'), t('EPSG:4269', '+title=NAD83 (long/lat) +proj=longlat +a=6378137.0 +b=6356752.31414036 +ellps=GRS80 +datum=NAD83 +units=degrees'), t('EPSG:3857', '+title=WGS 84 / Pseudo-Mercator +proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +no_defs'), t['EPSG:3785'] = t['EPSG:3857'], t.GOOGLE = t['EPSG:3857'], t['EPSG:900913'] = t['EPSG:3857'], t['EPSG:102113'] = t['EPSG:3857'];
        };
    }), define('proj4/constants', [], function () {
        var t = {};
        return t.PrimeMeridian = {
            greenwich: 0,
            lisbon: -9.131906111111,
            paris: 2.337229166667,
            bogota: -74.080916666667,
            madrid: -3.687938888889,
            rome: 12.452333333333,
            bern: 7.439583333333,
            jakarta: 106.807719444444,
            ferro: -17.666666666667,
            brussels: 4.367975,
            stockholm: 18.058277777778,
            athens: 23.7163375,
            oslo: 10.722916666667
        }, t.Ellipsoid = {
            MERIT: {
                a: 6378137,
                rf: 298.257,
                ellipseName: 'MERIT 1983'
            },
            SGS85: {
                a: 6378136,
                rf: 298.257,
                ellipseName: 'Soviet Geodetic System 85'
            },
            GRS80: {
                a: 6378137,
                rf: 298.257222101,
                ellipseName: 'GRS 1980(IUGG, 1980)'
            },
            IAU76: {
                a: 6378140,
                rf: 298.257,
                ellipseName: 'IAU 1976'
            },
            airy: {
                a: 6377563.396,
                b: 6356256.91,
                ellipseName: 'Airy 1830'
            },
            'APL4.': {
                a: 6378137,
                rf: 298.25,
                ellipseName: 'Appl. Physics. 1965'
            },
            NWL9D: {
                a: 6378145,
                rf: 298.25,
                ellipseName: 'Naval Weapons Lab., 1965'
            },
            mod_airy: {
                a: 6377340.189,
                b: 6356034.446,
                ellipseName: 'Modified Airy'
            },
            andrae: {
                a: 6377104.43,
                rf: 300,
                ellipseName: 'Andrae 1876 (Den., Iclnd.)'
            },
            aust_SA: {
                a: 6378160,
                rf: 298.25,
                ellipseName: 'Australian Natl & S. Amer. 1969'
            },
            GRS67: {
                a: 6378160,
                rf: 298.247167427,
                ellipseName: 'GRS 67(IUGG 1967)'
            },
            bessel: {
                a: 6377397.155,
                rf: 299.1528128,
                ellipseName: 'Bessel 1841'
            },
            bess_nam: {
                a: 6377483.865,
                rf: 299.1528128,
                ellipseName: 'Bessel 1841 (Namibia)'
            },
            clrk66: {
                a: 6378206.4,
                b: 6356583.8,
                ellipseName: 'Clarke 1866'
            },
            clrk80: {
                a: 6378249.145,
                rf: 293.4663,
                ellipseName: 'Clarke 1880 mod.'
            },
            clrk58: {
                a: 6378293.645208759,
                rf: 294.2606763692654,
                ellipseName: 'Clarke 1858'
            },
            CPM: {
                a: 6375738.7,
                rf: 334.29,
                ellipseName: 'Comm. des Poids et Mesures 1799'
            },
            delmbr: {
                a: 6376428,
                rf: 311.5,
                ellipseName: 'Delambre 1810 (Belgium)'
            },
            engelis: {
                a: 6378136.05,
                rf: 298.2566,
                ellipseName: 'Engelis 1985'
            },
            evrst30: {
                a: 6377276.345,
                rf: 300.8017,
                ellipseName: 'Everest 1830'
            },
            evrst48: {
                a: 6377304.063,
                rf: 300.8017,
                ellipseName: 'Everest 1948'
            },
            evrst56: {
                a: 6377301.243,
                rf: 300.8017,
                ellipseName: 'Everest 1956'
            },
            evrst69: {
                a: 6377295.664,
                rf: 300.8017,
                ellipseName: 'Everest 1969'
            },
            evrstSS: {
                a: 6377298.556,
                rf: 300.8017,
                ellipseName: 'Everest (Sabah & Sarawak)'
            },
            fschr60: {
                a: 6378166,
                rf: 298.3,
                ellipseName: 'Fischer (Mercury Datum) 1960'
            },
            fschr60m: {
                a: 6378155,
                rf: 298.3,
                ellipseName: 'Fischer 1960'
            },
            fschr68: {
                a: 6378150,
                rf: 298.3,
                ellipseName: 'Fischer 1968'
            },
            helmert: {
                a: 6378200,
                rf: 298.3,
                ellipseName: 'Helmert 1906'
            },
            hough: {
                a: 6378270,
                rf: 297,
                ellipseName: 'Hough'
            },
            intl: {
                a: 6378388,
                rf: 297,
                ellipseName: 'International 1909 (Hayford)'
            },
            kaula: {
                a: 6378163,
                rf: 298.24,
                ellipseName: 'Kaula 1961'
            },
            lerch: {
                a: 6378139,
                rf: 298.257,
                ellipseName: 'Lerch 1979'
            },
            mprts: {
                a: 6397300,
                rf: 191,
                ellipseName: 'Maupertius 1738'
            },
            new_intl: {
                a: 6378157.5,
                b: 6356772.2,
                ellipseName: 'New International 1967'
            },
            plessis: {
                a: 6376523,
                rf: 6355863,
                ellipseName: 'Plessis 1817 (France)'
            },
            krass: {
                a: 6378245,
                rf: 298.3,
                ellipseName: 'Krassovsky, 1942'
            },
            SEasia: {
                a: 6378155,
                b: 6356773.3205,
                ellipseName: 'Southeast Asia'
            },
            walbeck: {
                a: 6376896,
                b: 6355834.8467,
                ellipseName: 'Walbeck'
            },
            WGS60: {
                a: 6378165,
                rf: 298.3,
                ellipseName: 'WGS 60'
            },
            WGS66: {
                a: 6378145,
                rf: 298.25,
                ellipseName: 'WGS 66'
            },
            WGS72: {
                a: 6378135,
                rf: 298.26,
                ellipseName: 'WGS 72'
            },
            WGS84: {
                a: 6378137,
                rf: 298.257223563,
                ellipseName: 'WGS 84'
            },
            sphere: {
                a: 6370997,
                b: 6370997,
                ellipseName: 'Normal Sphere (r=6370997)'
            }
        }, t.Datum = {
            wgs84: {
                towgs84: '0,0,0',
                ellipse: 'WGS84',
                datumName: 'WGS84'
            },
            ch1903: {
                towgs84: '674.374,15.056,405.346',
                ellipse: 'bessel',
                datumName: 'swiss'
            },
            ggrs87: {
                towgs84: '-199.87,74.79,246.62',
                ellipse: 'GRS80',
                datumName: 'Greek_Geodetic_Reference_System_1987'
            },
            nad83: {
                towgs84: '0,0,0',
                ellipse: 'GRS80',
                datumName: 'North_American_Datum_1983'
            },
            nad27: {
                nadgrids: '@conus,@alaska,@ntv2_0.gsb,@ntv1_can.dat',
                ellipse: 'clrk66',
                datumName: 'North_American_Datum_1927'
            },
            potsdam: {
                towgs84: '606.0,23.0,413.0',
                ellipse: 'bessel',
                datumName: 'Potsdam Rauenberg 1950 DHDN'
            },
            carthage: {
                towgs84: '-263.0,6.0,431.0',
                ellipse: 'clark80',
                datumName: 'Carthage 1934 Tunisia'
            },
            hermannskogel: {
                towgs84: '653.0,-212.0,449.0',
                ellipse: 'bessel',
                datumName: 'Hermannskogel'
            },
            ire65: {
                towgs84: '482.530,-130.596,564.557,-1.042,-0.214,-0.631,8.15',
                ellipse: 'mod_airy',
                datumName: 'Ireland 1965'
            },
            rassadiran: {
                towgs84: '-133.63,-157.5,-158.62',
                ellipse: 'intl',
                datumName: 'Rassadiran'
            },
            nzgd49: {
                towgs84: '59.47,-5.04,187.44,0.47,-0.1,1.024,-4.5993',
                ellipse: 'intl',
                datumName: 'New Zealand Geodetic Datum 1949'
            },
            osgb36: {
                towgs84: '446.448,-125.157,542.060,0.1502,0.2470,0.8421,-20.4894',
                ellipse: 'airy',
                datumName: 'Airy 1830'
            },
            s_jtsk: {
                towgs84: '589,76,480',
                ellipse: 'bessel',
                datumName: 'S-JTSK (Ferro)'
            },
            beduaram: {
                towgs84: '-106,-87,188',
                ellipse: 'clrk80',
                datumName: 'Beduaram'
            },
            gunung_segara: {
                towgs84: '-403,684,41',
                ellipse: 'bessel',
                datumName: 'Gunung Segara Jakarta'
            }
        }, t.Datum.OSB36 = t.Datum.OSGB36, t.wktProjections = {
            'Lambert Tangential Conformal Conic Projection': 'lcc',
            Lambert_Conformal_Conic: 'lcc',
            Lambert_Conformal_Conic_2SP: 'lcc',
            Mercator: 'merc',
            'Popular Visualisation Pseudo Mercator': 'merc',
            Mercator_1SP: 'merc',
            Transverse_Mercator: 'tmerc',
            'Transverse Mercator': 'tmerc',
            'Lambert Azimuthal Equal Area': 'laea',
            'Universal Transverse Mercator System': 'utm',
            Hotine_Oblique_Mercator: 'omerc',
            'Hotine Oblique Mercator': 'omerc',
            Hotine_Oblique_Mercator_Azimuth_Natural_Origin: 'omerc',
            Hotine_Oblique_Mercator_Azimuth_Center: 'omerc',
            Van_der_Grinten_I: 'vandg',
            VanDerGrinten: 'vandg',
            Stereographic_North_Pole: 'sterea',
            Oblique_Stereographic: 'sterea',
            Polar_Stereographic: 'sterea',
            Polyconic: 'poly',
            New_Zealand_Map_Grid: 'nzmg',
            Miller_Cylindrical: 'mill',
            Krovak: 'krovak',
            Equirectangular: 'eqc',
            Equidistant_Cylindrical: 'eqc',
            Cassini: 'cass',
            Cassini_Soldner: 'cass',
            Azimuthal_Equidistant: 'aeqd',
            Albers_Conic_Equal_Area: 'aea',
            Albers: 'aea',
            Mollweide: 'moll',
            Lambert_Azimuthal_Equal_Area: 'laea',
            Sinusoidal: 'sinu',
            Equidistant_Conic: 'eqdc',
            Mercator_Auxiliary_Sphere: 'merc'
        }, t.grids = {
            'null': {
                ll: [
                    -3.14159265,
                    -1.57079633
                ],
                del: [
                    3.14159265,
                    1.57079633
                ],
                lim: [
                    3,
                    3
                ],
                count: 9,
                cvs: [
                    [
                        0,
                        0
                    ],
                    [
                        0,
                        0
                    ],
                    [
                        0,
                        0
                    ],
                    [
                        0,
                        0
                    ],
                    [
                        0,
                        0
                    ],
                    [
                        0,
                        0
                    ],
                    [
                        0,
                        0
                    ],
                    [
                        0,
                        0
                    ],
                    [
                        0,
                        0
                    ]
                ]
            }
        }, t;
    }), define('proj4/projString', [
        'require',
        'proj4/common',
        'proj4/constants'
    ], function (t) {
        var e = t('proj4/common'), i = t('proj4/constants');
        return function (t) {
            var s = {}, r = {};
            t.split('+').map(function (t) {
                return t.trim();
            }).filter(function (t) {
                return t;
            }).forEach(function (t) {
                var e = t.split('=');
                '@null' !== e[1] && (e.push(!0), r[e[0].toLowerCase()] = e[1]);
            });
            var a, n, h, o = {
                    proj: 'projName',
                    datum: 'datumCode',
                    rf: function (t) {
                        s.rf = parseFloat(t, 10);
                    },
                    lat_0: function (t) {
                        s.lat0 = t * e.D2R;
                    },
                    lat_1: function (t) {
                        s.lat1 = t * e.D2R;
                    },
                    lat_2: function (t) {
                        s.lat2 = t * e.D2R;
                    },
                    lat_ts: function (t) {
                        s.lat_ts = t * e.D2R;
                    },
                    lon_0: function (t) {
                        s.long0 = t * e.D2R;
                    },
                    lon_1: function (t) {
                        s.long1 = t * e.D2R;
                    },
                    lon_2: function (t) {
                        s.long2 = t * e.D2R;
                    },
                    alpha: function (t) {
                        s.alpha = parseFloat(t) * e.D2R;
                    },
                    lonc: function (t) {
                        s.longc = t * e.D2R;
                    },
                    x_0: function (t) {
                        s.x0 = parseFloat(t, 10);
                    },
                    y_0: function (t) {
                        s.y0 = parseFloat(t, 10);
                    },
                    k_0: function (t) {
                        s.k0 = parseFloat(t, 10);
                    },
                    k: function (t) {
                        s.k0 = parseFloat(t, 10);
                    },
                    r_a: function () {
                        s.R_A = !0;
                    },
                    zone: function (t) {
                        s.zone = parseInt(t, 10);
                    },
                    south: function () {
                        s.utmSouth = !0;
                    },
                    towgs84: function (t) {
                        s.datum_params = t.split(',').map(function (t) {
                            return parseFloat(t, 10);
                        });
                    },
                    to_meter: function (t) {
                        s.to_meter = parseFloat(t, 10);
                    },
                    from_greenwich: function (t) {
                        s.from_greenwich = t * e.D2R;
                    },
                    pm: function (t) {
                        s.from_greenwich = (i.PrimeMeridian[t] ? i.PrimeMeridian[t] : parseFloat(t, 10)) * e.D2R;
                    },
                    axis: function (t) {
                        var e = 'ewnsud';
                        3 === t.length && -1 !== e.indexOf(t.substr(0, 1)) && -1 !== e.indexOf(t.substr(1, 1)) && -1 !== e.indexOf(t.substr(2, 1)) && (s.axis = t);
                    }
                };
            for (a in r)
                n = r[a], a in o ? (h = o[a], 'function' == typeof h ? h(n) : s[h] = n) : s[a] = n;
            return s;
        };
    }), define('proj4/wkt', [
        'require',
        'proj4/common',
        'proj4/constants',
        'proj4/extend'
    ], function (t) {
        function e(t, e, s) {
            t[e] = s.map(function (t) {
                var e = {};
                return i(t, e), e;
            }).reduce(function (t, e) {
                return o(t, e);
            }, {});
        }
        function i(t, s) {
            var r;
            return Array.isArray(t) ? (r = t.shift(), 'PARAMETER' === r && (r = t.shift()), 1 === t.length ? Array.isArray(t[0]) ? (s[r] = {}, i(t[0], s[r])) : s[r] = t[0] : t.length ? 'TOWGS84' === r ? s[r] = t : (s[r] = {}, [
                'UNIT',
                'PRIMEM',
                'VERT_DATUM'
            ].indexOf(r) > -1 ? (s[r] = {
                name: t[0].toLowerCase(),
                convert: t[1]
            }, 3 === t.length && (s[r].auth = t[2])) : 'SPHEROID' === r ? (s[r] = {
                name: t[0],
                a: t[1],
                rf: t[2]
            }, 4 === t.length && (s[r].auth = t[3])) : [
                'GEOGCS',
                'GEOCCS',
                'DATUM',
                'VERT_CS',
                'COMPD_CS',
                'LOCAL_CS',
                'FITTED_CS',
                'LOCAL_DATUM'
            ].indexOf(r) > -1 ? (t[0] = [
                'name',
                t[0]
            ], e(s, r, t)) : t.every(function (t) {
                return Array.isArray(t);
            }) ? e(s, r, t) : i(t, s[r])) : s[r] = !0, void 0) : (s[t] = !0, void 0);
        }
        function s(t, e) {
            var i = e[0], s = e[1];
            !(i in t) && s in t && (t[i] = t[s], 3 === e.length && (t[i] = e[2](t[i])));
        }
        function r(t) {
            return t * n.D2R;
        }
        function a(t) {
            function e(e) {
                var i = t.to_meter || 1;
                return parseFloat(e, 10) * i;
            }
            'GEOGCS' === t.type ? t.projName = 'longlat' : 'LOCAL_CS' === t.type ? (t.projName = 'identity', t.local = !0) : t.projName = 'object' == typeof t.PROJECTION ? h.wktProjections[Object.keys(t.PROJECTION)[0]] : h.wktProjections[t.PROJECTION], t.UNIT && (t.units = t.UNIT.name.toLowerCase(), 'metre' === t.units && (t.units = 'meter'), t.UNIT.convert && (t.to_meter = parseFloat(t.UNIT.convert, 10))), t.GEOGCS && (t.datumCode = t.GEOGCS.DATUM ? t.GEOGCS.DATUM.name.toLowerCase() : t.GEOGCS.name.toLowerCase(), 'd_' === t.datumCode.slice(0, 2) && (t.datumCode = t.datumCode.slice(2)), ('new_zealand_geodetic_datum_1949' === t.datumCode || 'new_zealand_1949' === t.datumCode) && (t.datumCode = 'nzgd49'), 'wgs_1984' === t.datumCode && ('Mercator_Auxiliary_Sphere' === t.PROJECTION && (t.sphere = !0), t.datumCode = 'wgs84'), '_ferro' === t.datumCode.slice(-6) && (t.datumCode = t.datumCode.slice(0, -6)), '_jakarta' === t.datumCode.slice(-8) && (t.datumCode = t.datumCode.slice(0, -8)), t.GEOGCS.DATUM && t.GEOGCS.DATUM.SPHEROID && (t.ellps = t.GEOGCS.DATUM.SPHEROID.name.replace('_19', '').replace(/[Cc]larke\_18/, 'clrk'), 'international' === t.ellps.toLowerCase().slice(0, 13) && (t.ellps = 'intl'), t.a = t.GEOGCS.DATUM.SPHEROID.a, t.rf = parseFloat(t.GEOGCS.DATUM.SPHEROID.rf, 10))), t.b && !isFinite(t.b) && (t.b = t.a);
            var i = function (e) {
                    return s(t, e);
                }, a = [
                    [
                        'standard_parallel_1',
                        'Standard_Parallel_1'
                    ],
                    [
                        'standard_parallel_2',
                        'Standard_Parallel_2'
                    ],
                    [
                        'false_easting',
                        'False_Easting'
                    ],
                    [
                        'false_northing',
                        'False_Northing'
                    ],
                    [
                        'central_meridian',
                        'Central_Meridian'
                    ],
                    [
                        'latitude_of_origin',
                        'Latitude_Of_Origin'
                    ],
                    [
                        'scale_factor',
                        'Scale_Factor'
                    ],
                    [
                        'k0',
                        'scale_factor'
                    ],
                    [
                        'latitude_of_center',
                        'Latitude_of_center'
                    ],
                    [
                        'lat0',
                        'latitude_of_center',
                        r
                    ],
                    [
                        'longitude_of_center',
                        'Longitude_Of_Center'
                    ],
                    [
                        'longc',
                        'longitude_of_center',
                        r
                    ],
                    [
                        'x0',
                        'false_easting',
                        e
                    ],
                    [
                        'y0',
                        'false_northing',
                        e
                    ],
                    [
                        'long0',
                        'central_meridian',
                        r
                    ],
                    [
                        'lat0',
                        'latitude_of_origin',
                        r
                    ],
                    [
                        'lat0',
                        'standard_parallel_1',
                        r
                    ],
                    [
                        'lat1',
                        'standard_parallel_1',
                        r
                    ],
                    [
                        'lat2',
                        'standard_parallel_2',
                        r
                    ],
                    [
                        'alpha',
                        'azimuth',
                        r
                    ],
                    [
                        'srsCode',
                        'name'
                    ]
                ];
            a.forEach(i), t.long0 || !t.longc || 'Albers_Conic_Equal_Area' !== t.PROJECTION && 'Lambert_Azimuthal_Equal_Area' !== t.PROJECTION || (t.long0 = t.longc);
        }
        var n = t('proj4/common'), h = t('proj4/constants'), o = t('proj4/extend');
        return function (t, e) {
            var s = JSON.parse((',' + t).replace(/\s*\,\s*([A-Z_0-9]+?)(\[)/g, ',["$1",').slice(1).replace(/\s*\,\s*([A-Z_0-9]+?)\]/g, ',"$1"]')), r = s.shift(), n = s.shift();
            s.unshift([
                'name',
                n
            ]), s.unshift([
                'type',
                r
            ]), s.unshift('output');
            var h = {};
            return i(s, h), a(h.output), o(e, h.output);
        };
    }), define('proj4/defs', [
        'require',
        'proj4/global',
        'proj4/projString',
        'proj4/wkt'
    ], function (t) {
        function e(t) {
            var i = this;
            if (2 === arguments.length)
                e[t] = '+' === arguments[1][0] ? s(arguments[1]) : r(arguments[1]);
            else if (1 === arguments.length)
                return Array.isArray(t) ? t.map(function (t) {
                    Array.isArray(t) ? e.apply(i, t) : e(t);
                }) : ('string' == typeof t || ('EPSG' in t ? e['EPSG:' + t.EPSG] = t : 'ESRI' in t ? e['ESRI:' + t.ESRI] = t : 'IAU2000' in t ? e['IAU2000:' + t.IAU2000] = t : console.log(t)), void 0);
        }
        var i = t('proj4/global'), s = t('proj4/projString'), r = t('proj4/wkt');
        return i(e), e;
    }), define('proj4/datum', [
        'require',
        'proj4/common'
    ], function (t) {
        var e = t('proj4/common'), i = function (t) {
                if (!(this instanceof i))
                    return new i(t);
                if (this.datum_type = e.PJD_WGS84, t) {
                    if (t.datumCode && 'none' === t.datumCode && (this.datum_type = e.PJD_NODATUM), t.datum_params) {
                        for (var s = 0; s < t.datum_params.length; s++)
                            t.datum_params[s] = parseFloat(t.datum_params[s]);
                        (0 !== t.datum_params[0] || 0 !== t.datum_params[1] || 0 !== t.datum_params[2]) && (this.datum_type = e.PJD_3PARAM), t.datum_params.length > 3 && (0 !== t.datum_params[3] || 0 !== t.datum_params[4] || 0 !== t.datum_params[5] || 0 !== t.datum_params[6]) && (this.datum_type = e.PJD_7PARAM, t.datum_params[3] *= e.SEC_TO_RAD, t.datum_params[4] *= e.SEC_TO_RAD, t.datum_params[5] *= e.SEC_TO_RAD, t.datum_params[6] = t.datum_params[6] / 1000000 + 1);
                    }
                    this.datum_type = t.grids ? e.PJD_GRIDSHIFT : this.datum_type, this.a = t.a, this.b = t.b, this.es = t.es, this.ep2 = t.ep2, this.datum_params = t.datum_params, this.datum_type === e.PJD_GRIDSHIFT && (this.grids = t.grids);
                }
            };
        return i.prototype = {
            compare_datums: function (t) {
                return this.datum_type !== t.datum_type ? !1 : this.a !== t.a || Math.abs(this.es - t.es) > 5e-11 ? !1 : this.datum_type === e.PJD_3PARAM ? this.datum_params[0] === t.datum_params[0] && this.datum_params[1] === t.datum_params[1] && this.datum_params[2] === t.datum_params[2] : this.datum_type === e.PJD_7PARAM ? this.datum_params[0] === t.datum_params[0] && this.datum_params[1] === t.datum_params[1] && this.datum_params[2] === t.datum_params[2] && this.datum_params[3] === t.datum_params[3] && this.datum_params[4] === t.datum_params[4] && this.datum_params[5] === t.datum_params[5] && this.datum_params[6] === t.datum_params[6] : this.datum_type === e.PJD_GRIDSHIFT || t.datum_type === e.PJD_GRIDSHIFT ? this.nadgrids === t.nadgrids : !0;
            },
            geodetic_to_geocentric: function (t) {
                var i, s, r, a, n, h, o, u = t.x, l = t.y, f = t.z ? t.z : 0, c = 0;
                if (l < -e.HALF_PI && l > -1.001 * e.HALF_PI)
                    l = -e.HALF_PI;
                else if (l > e.HALF_PI && l < 1.001 * e.HALF_PI)
                    l = e.HALF_PI;
                else if (l < -e.HALF_PI || l > e.HALF_PI)
                    return null;
                return u > e.PI && (u -= 2 * e.PI), n = Math.sin(l), o = Math.cos(l), h = n * n, a = this.a / Math.sqrt(1 - this.es * h), i = (a + f) * o * Math.cos(u), s = (a + f) * o * Math.sin(u), r = (a * (1 - this.es) + f) * n, t.x = i, t.y = s, t.z = r, c;
            },
            geocentric_to_geodetic: function (t) {
                var i, s, r, a, n, h, o, u, l, f, c, p, d, m, y, M, g, _ = 1e-12, b = _ * _, v = 30, j = t.x, x = t.y, A = t.z ? t.z : 0;
                if (d = !1, i = Math.sqrt(j * j + x * x), s = Math.sqrt(j * j + x * x + A * A), i / this.a < _) {
                    if (d = !0, y = 0, s / this.a < _)
                        return M = e.HALF_PI, g = -this.b, void 0;
                } else
                    y = Math.atan2(x, j);
                r = A / s, a = i / s, n = 1 / Math.sqrt(1 - this.es * (2 - this.es) * a * a), u = a * (1 - this.es) * n, l = r * n, m = 0;
                do
                    m++, o = this.a / Math.sqrt(1 - this.es * l * l), g = i * u + A * l - o * (1 - this.es * l * l), h = this.es * o / (o + g), n = 1 / Math.sqrt(1 - h * (2 - h) * a * a), f = a * (1 - h) * n, c = r * n, p = c * u - f * l, u = f, l = c;
                while (p * p > b && v > m);
                return M = Math.atan(c / Math.abs(f)), t.x = y, t.y = M, t.z = g, t;
            },
            geocentric_to_geodetic_noniter: function (t) {
                var i, s, r, a, n, h, o, u, l, f, c, p, d, m, y, M, g, _ = t.x, b = t.y, v = t.z ? t.z : 0;
                if (_ = parseFloat(_), b = parseFloat(b), v = parseFloat(v), g = !1, 0 !== _)
                    i = Math.atan2(b, _);
                else if (b > 0)
                    i = e.HALF_PI;
                else if (0 > b)
                    i = -e.HALF_PI;
                else if (g = !0, i = 0, v > 0)
                    s = e.HALF_PI;
                else {
                    if (!(0 > v))
                        return s = e.HALF_PI, r = -this.b, void 0;
                    s = -e.HALF_PI;
                }
                return n = _ * _ + b * b, a = Math.sqrt(n), h = v * e.AD_C, u = Math.sqrt(h * h + n), f = h / u, p = a / u, c = f * f * f, o = v + this.b * this.ep2 * c, M = a - this.a * this.es * p * p * p, l = Math.sqrt(o * o + M * M), d = o / l, m = M / l, y = this.a / Math.sqrt(1 - this.es * d * d), r = m >= e.COS_67P5 ? a / m - y : m <= -e.COS_67P5 ? a / -m - y : v / d + y * (this.es - 1), g === !1 && (s = Math.atan(d / m)), t.x = i, t.y = s, t.z = r, t;
            },
            geocentric_to_wgs84: function (t) {
                if (this.datum_type === e.PJD_3PARAM)
                    t.x += this.datum_params[0], t.y += this.datum_params[1], t.z += this.datum_params[2];
                else if (this.datum_type === e.PJD_7PARAM) {
                    var i = this.datum_params[0], s = this.datum_params[1], r = this.datum_params[2], a = this.datum_params[3], n = this.datum_params[4], h = this.datum_params[5], o = this.datum_params[6], u = o * (t.x - h * t.y + n * t.z) + i, l = o * (h * t.x + t.y - a * t.z) + s, f = o * (-n * t.x + a * t.y + t.z) + r;
                    t.x = u, t.y = l, t.z = f;
                }
            },
            geocentric_from_wgs84: function (t) {
                if (this.datum_type === e.PJD_3PARAM)
                    t.x -= this.datum_params[0], t.y -= this.datum_params[1], t.z -= this.datum_params[2];
                else if (this.datum_type === e.PJD_7PARAM) {
                    var i = this.datum_params[0], s = this.datum_params[1], r = this.datum_params[2], a = this.datum_params[3], n = this.datum_params[4], h = this.datum_params[5], o = this.datum_params[6], u = (t.x - i) / o, l = (t.y - s) / o, f = (t.z - r) / o;
                    t.x = u + h * l - n * f, t.y = -h * u + l + a * f, t.z = n * u - a * l + f;
                }
            }
        }, i;
    }), define('proj4/projCode/longlat', [
        'require',
        'exports',
        'module'
    ], function (t, e) {
        function i(t) {
            return t;
        }
        e.init = function () {
        }, e.forward = i, e.inverse = i;
    }), define('proj4/projCode/tmerc', [
        'require',
        'proj4/common'
    ], function (t) {
        var e = t('proj4/common');
        return {
            init: function () {
                this.e0 = e.e0fn(this.es), this.e1 = e.e1fn(this.es), this.e2 = e.e2fn(this.es), this.e3 = e.e3fn(this.es), this.ml0 = this.a * e.mlfn(this.e0, this.e1, this.e2, this.e3, this.lat0);
            },
            forward: function (t) {
                var i, s, r, a = t.x, n = t.y, h = e.adjust_lon(a - this.long0), o = Math.sin(n), u = Math.cos(n);
                if (this.sphere) {
                    var l = u * Math.sin(h);
                    if (Math.abs(Math.abs(l) - 1) < 1e-10)
                        return 93;
                    s = 0.5 * this.a * this.k0 * Math.log((1 + l) / (1 - l)), i = Math.acos(u * Math.cos(h) / Math.sqrt(1 - l * l)), 0 > n && (i = -i), r = this.a * this.k0 * (i - this.lat0);
                } else {
                    var f = u * h, c = Math.pow(f, 2), p = this.ep2 * Math.pow(u, 2), d = Math.tan(n), m = Math.pow(d, 2);
                    i = 1 - this.es * Math.pow(o, 2);
                    var y = this.a / Math.sqrt(i), M = this.a * e.mlfn(this.e0, this.e1, this.e2, this.e3, n);
                    s = this.k0 * y * f * (1 + c / 6 * (1 - m + p + c / 20 * (5 - 18 * m + Math.pow(m, 2) + 72 * p - 58 * this.ep2))) + this.x0, r = this.k0 * (M - this.ml0 + y * d * c * (0.5 + c / 24 * (5 - m + 9 * p + 4 * Math.pow(p, 2) + c / 30 * (61 - 58 * m + Math.pow(m, 2) + 600 * p - 330 * this.ep2)))) + this.y0;
                }
                return t.x = s, t.y = r, t;
            },
            inverse: function (t) {
                var i, s, r, a, n, h, o = 6;
                if (this.sphere) {
                    var u = Math.exp(t.x / (this.a * this.k0)), l = 0.5 * (u - 1 / u), f = this.lat0 + t.y / (this.a * this.k0), c = Math.cos(f);
                    i = Math.sqrt((1 - c * c) / (1 + l * l)), n = e.asinz(i), 0 > f && (n = -n), h = 0 === l && 0 === c ? this.long0 : e.adjust_lon(Math.atan2(l, c) + this.long0);
                } else {
                    var p = t.x - this.x0, d = t.y - this.y0;
                    for (i = (this.ml0 + d / this.k0) / this.a, s = i, a = 0; !0 && (r = (i + this.e1 * Math.sin(2 * s) - this.e2 * Math.sin(4 * s) + this.e3 * Math.sin(6 * s)) / this.e0 - s, s += r, !(Math.abs(r) <= e.EPSLN)); a++)
                        if (a >= o)
                            return 95;
                    if (Math.abs(s) < e.HALF_PI) {
                        var m = Math.sin(s), y = Math.cos(s), M = Math.tan(s), g = this.ep2 * Math.pow(y, 2), _ = Math.pow(g, 2), b = Math.pow(M, 2), v = Math.pow(b, 2);
                        i = 1 - this.es * Math.pow(m, 2);
                        var j = this.a / Math.sqrt(i), x = j * (1 - this.es) / i, A = p / (j * this.k0), C = Math.pow(A, 2);
                        n = s - j * M * C / x * (0.5 - C / 24 * (5 + 3 * b + 10 * g - 4 * _ - 9 * this.ep2 - C / 30 * (61 + 90 * b + 298 * g + 45 * v - 252 * this.ep2 - 3 * _))), h = e.adjust_lon(this.long0 + A * (1 - C / 6 * (1 + 2 * b + g - C / 20 * (5 - 2 * g + 28 * b - 3 * _ + 8 * this.ep2 + 24 * v))) / y);
                    } else
                        n = e.HALF_PI * e.sign(d), h = this.long0;
                }
                return t.x = h, t.y = n, t;
            }
        };
    }), define('proj4/projCode/utm', [
        'require',
        'proj4/common',
        'proj4/projCode/tmerc'
    ], function (t) {
        var e = t('proj4/common'), i = t('proj4/projCode/tmerc');
        return {
            dependsOn: 'tmerc',
            init: function () {
                this.zone && (this.lat0 = 0, this.long0 = (6 * Math.abs(this.zone) - 183) * e.D2R, this.x0 = 500000, this.y0 = this.utmSouth ? 10000000 : 0, this.k0 = 0.9996, i.init.apply(this), this.forward = i.forward, this.inverse = i.inverse);
            }
        };
    }), define('proj4/projCode/gauss', [
        'require',
        'proj4/common'
    ], function (t) {
        var e = t('proj4/common');
        return {
            init: function () {
                var t = Math.sin(this.lat0), i = Math.cos(this.lat0);
                i *= i, this.rc = Math.sqrt(1 - this.es) / (1 - this.es * t * t), this.C = Math.sqrt(1 + this.es * i * i / (1 - this.es)), this.phic0 = Math.asin(t / this.C), this.ratexp = 0.5 * this.C * this.e, this.K = Math.tan(0.5 * this.phic0 + e.FORTPI) / (Math.pow(Math.tan(0.5 * this.lat0 + e.FORTPI), this.C) * e.srat(this.e * t, this.ratexp));
            },
            forward: function (t) {
                var i = t.x, s = t.y;
                return t.y = 2 * Math.atan(this.K * Math.pow(Math.tan(0.5 * s + e.FORTPI), this.C) * e.srat(this.e * Math.sin(s), this.ratexp)) - e.HALF_PI, t.x = this.C * i, t;
            },
            inverse: function (t) {
                for (var i = 1e-14, s = t.x / this.C, r = t.y, a = Math.pow(Math.tan(0.5 * r + e.FORTPI) / this.K, 1 / this.C), n = e.MAX_ITER; n > 0 && (r = 2 * Math.atan(a * e.srat(this.e * Math.sin(t.y), -0.5 * this.e)) - e.HALF_PI, !(Math.abs(r - t.y) < i)); --n)
                    t.y = r;
                return n ? (t.x = s, t.y = r, t) : null;
            }
        };
    }), define('proj4/projCode/sterea', [
        'require',
        'proj4/common',
        'proj4/projCode/gauss'
    ], function (t) {
        var e = t('proj4/common'), i = t('proj4/projCode/gauss');
        return {
            init: function () {
                i.init.apply(this), this.rc && (this.sinc0 = Math.sin(this.phic0), this.cosc0 = Math.cos(this.phic0), this.R2 = 2 * this.rc, this.title || (this.title = 'Oblique Stereographic Alternative'));
            },
            forward: function (t) {
                var s, r, a, n;
                return t.x = e.adjust_lon(t.x - this.long0), i.forward.apply(this, [t]), s = Math.sin(t.y), r = Math.cos(t.y), a = Math.cos(t.x), n = this.k0 * this.R2 / (1 + this.sinc0 * s + this.cosc0 * r * a), t.x = n * r * Math.sin(t.x), t.y = n * (this.cosc0 * s - this.sinc0 * r * a), t.x = this.a * t.x + this.x0, t.y = this.a * t.y + this.y0, t;
            },
            inverse: function (t) {
                var s, r, a, n, h;
                if (t.x = (t.x - this.x0) / this.a, t.y = (t.y - this.y0) / this.a, t.x /= this.k0, t.y /= this.k0, h = Math.sqrt(t.x * t.x + t.y * t.y)) {
                    var o = 2 * Math.atan2(h, this.R2);
                    s = Math.sin(o), r = Math.cos(o), n = Math.asin(r * this.sinc0 + t.y * s * this.cosc0 / h), a = Math.atan2(t.x * s, h * this.cosc0 * r - t.y * this.sinc0 * s);
                } else
                    n = this.phic0, a = 0;
                return t.x = a, t.y = n, i.inverse.apply(this, [t]), t.x = e.adjust_lon(t.x + this.long0), t;
            }
        };
    }), define('proj4/projCode/somerc', [], function () {
        return {
            init: function () {
                var t = this.lat0;
                this.lambda0 = this.long0;
                var e = Math.sin(t), i = this.a, s = this.rf, r = 1 / s, a = 2 * r - Math.pow(r, 2), n = this.e = Math.sqrt(a);
                this.R = this.k0 * i * Math.sqrt(1 - a) / (1 - a * Math.pow(e, 2)), this.alpha = Math.sqrt(1 + a / (1 - a) * Math.pow(Math.cos(t), 4)), this.b0 = Math.asin(e / this.alpha);
                var h = Math.log(Math.tan(Math.PI / 4 + this.b0 / 2)), o = Math.log(Math.tan(Math.PI / 4 + t / 2)), u = Math.log((1 + n * e) / (1 - n * e));
                this.K = h - this.alpha * o + this.alpha * n / 2 * u;
            },
            forward: function (t) {
                var e = Math.log(Math.tan(Math.PI / 4 - t.y / 2)), i = this.e / 2 * Math.log((1 + this.e * Math.sin(t.y)) / (1 - this.e * Math.sin(t.y))), s = -this.alpha * (e + i) + this.K, r = 2 * (Math.atan(Math.exp(s)) - Math.PI / 4), a = this.alpha * (t.x - this.lambda0), n = Math.atan(Math.sin(a) / (Math.sin(this.b0) * Math.tan(r) + Math.cos(this.b0) * Math.cos(a))), h = Math.asin(Math.cos(this.b0) * Math.sin(r) - Math.sin(this.b0) * Math.cos(r) * Math.cos(a));
                return t.y = this.R / 2 * Math.log((1 + Math.sin(h)) / (1 - Math.sin(h))) + this.y0, t.x = this.R * n + this.x0, t;
            },
            inverse: function (t) {
                for (var e = t.x - this.x0, i = t.y - this.y0, s = e / this.R, r = 2 * (Math.atan(Math.exp(i / this.R)) - Math.PI / 4), a = Math.asin(Math.cos(this.b0) * Math.sin(r) + Math.sin(this.b0) * Math.cos(r) * Math.cos(s)), n = Math.atan(Math.sin(s) / (Math.cos(this.b0) * Math.cos(s) - Math.sin(this.b0) * Math.tan(r))), h = this.lambda0 + n / this.alpha, o = 0, u = a, l = -1000, f = 0; Math.abs(u - l) > 1e-7;) {
                    if (++f > 20)
                        return;
                    o = 1 / this.alpha * (Math.log(Math.tan(Math.PI / 4 + a / 2)) - this.K) + this.e * Math.log(Math.tan(Math.PI / 4 + Math.asin(this.e * Math.sin(u)) / 2)), l = u, u = 2 * Math.atan(Math.exp(o)) - Math.PI / 2;
                }
                return t.x = h, t.y = u, t;
            }
        };
    }), define('proj4/projCode/omerc', [
        'require',
        'proj4/common'
    ], function (t) {
        var e = t('proj4/common');
        return {
            init: function () {
                this.no_off = this.no_off || !1, this.no_rot = this.no_rot || !1, isNaN(this.k0) && (this.k0 = 1);
                var t = Math.sin(this.lat0), i = Math.cos(this.lat0), s = this.e * t;
                this.bl = Math.sqrt(1 + this.es / (1 - this.es) * Math.pow(i, 4)), this.al = this.a * this.bl * this.k0 * Math.sqrt(1 - this.es) / (1 - s * s);
                var r = e.tsfnz(this.e, this.lat0, t), a = this.bl / i * Math.sqrt((1 - this.es) / (1 - s * s));
                1 > a * a && (a = 1);
                var n, h;
                if (isNaN(this.longc)) {
                    var o = e.tsfnz(this.e, this.lat1, Math.sin(this.lat1)), u = e.tsfnz(this.e, this.lat2, Math.sin(this.lat2));
                    this.el = this.lat0 >= 0 ? (a + Math.sqrt(a * a - 1)) * Math.pow(r, this.bl) : (a - Math.sqrt(a * a - 1)) * Math.pow(r, this.bl);
                    var l = Math.pow(o, this.bl), f = Math.pow(u, this.bl);
                    n = this.el / l, h = 0.5 * (n - 1 / n);
                    var c = (this.el * this.el - f * l) / (this.el * this.el + f * l), p = (f - l) / (f + l), d = e.adjust_lon(this.long1 - this.long2);
                    this.long0 = 0.5 * (this.long1 + this.long2) - Math.atan(c * Math.tan(0.5 * this.bl * d) / p) / this.bl, this.long0 = e.adjust_lon(this.long0);
                    var m = e.adjust_lon(this.long1 - this.long0);
                    this.gamma0 = Math.atan(Math.sin(this.bl * m) / h), this.alpha = Math.asin(a * Math.sin(this.gamma0));
                } else
                    n = this.lat0 >= 0 ? a + Math.sqrt(a * a - 1) : a - Math.sqrt(a * a - 1), this.el = n * Math.pow(r, this.bl), h = 0.5 * (n - 1 / n), this.gamma0 = Math.asin(Math.sin(this.alpha) / a), this.long0 = this.longc - Math.asin(h * Math.tan(this.gamma0)) / this.bl;
                this.uc = this.no_off ? 0 : this.lat0 >= 0 ? this.al / this.bl * Math.atan2(Math.sqrt(a * a - 1), Math.cos(this.alpha)) : -1 * this.al / this.bl * Math.atan2(Math.sqrt(a * a - 1), Math.cos(this.alpha));
            },
            forward: function (t) {
                var i, s, r, a = t.x, n = t.y, h = e.adjust_lon(a - this.long0);
                if (Math.abs(Math.abs(n) - e.HALF_PI) <= e.EPSLN)
                    r = n > 0 ? -1 : 1, s = this.al / this.bl * Math.log(Math.tan(e.FORTPI + 0.5 * r * this.gamma0)), i = -1 * r * e.HALF_PI * this.al / this.bl;
                else {
                    var o = e.tsfnz(this.e, n, Math.sin(n)), u = this.el / Math.pow(o, this.bl), l = 0.5 * (u - 1 / u), f = 0.5 * (u + 1 / u), c = Math.sin(this.bl * h), p = (l * Math.sin(this.gamma0) - c * Math.cos(this.gamma0)) / f;
                    s = Math.abs(Math.abs(p) - 1) <= e.EPSLN ? Number.POSITIVE_INFINITY : 0.5 * this.al * Math.log((1 - p) / (1 + p)) / this.bl, i = Math.abs(Math.cos(this.bl * h)) <= e.EPSLN ? this.al * this.bl * h : this.al * Math.atan2(l * Math.cos(this.gamma0) + c * Math.sin(this.gamma0), Math.cos(this.bl * h)) / this.bl;
                }
                return this.no_rot ? (t.x = this.x0 + i, t.y = this.y0 + s) : (i -= this.uc, t.x = this.x0 + s * Math.cos(this.alpha) + i * Math.sin(this.alpha), t.y = this.y0 + i * Math.cos(this.alpha) - s * Math.sin(this.alpha)), t;
            },
            inverse: function (t) {
                var i, s;
                this.no_rot ? (s = t.y - this.y0, i = t.x - this.x0) : (s = (t.x - this.x0) * Math.cos(this.alpha) - (t.y - this.y0) * Math.sin(this.alpha), i = (t.y - this.y0) * Math.cos(this.alpha) + (t.x - this.x0) * Math.sin(this.alpha), i += this.uc);
                var r = Math.exp(-1 * this.bl * s / this.al), a = 0.5 * (r - 1 / r), n = 0.5 * (r + 1 / r), h = Math.sin(this.bl * i / this.al), o = (h * Math.cos(this.gamma0) + a * Math.sin(this.gamma0)) / n, u = Math.pow(this.el / Math.sqrt((1 + o) / (1 - o)), 1 / this.bl);
                return Math.abs(o - 1) < e.EPSLN ? (t.x = this.long0, t.y = e.HALF_PI) : Math.abs(o + 1) < e.EPSLN ? (t.x = this.long0, t.y = -1 * e.HALF_PI) : (t.y = e.phi2z(this.e, u), t.x = e.adjust_lon(this.long0 - Math.atan2(a * Math.cos(this.gamma0) - h * Math.sin(this.gamma0), Math.cos(this.bl * i / this.al)) / this.bl)), t;
            }
        };
    }), define('proj4/projCode/lcc', [
        'require',
        'proj4/common'
    ], function (t) {
        var e = t('proj4/common');
        return {
            init: function () {
                if (this.lat2 || (this.lat2 = this.lat1), this.k0 || (this.k0 = 1), !(Math.abs(this.lat1 + this.lat2) < e.EPSLN)) {
                    var t = this.b / this.a;
                    this.e = Math.sqrt(1 - t * t);
                    var i = Math.sin(this.lat1), s = Math.cos(this.lat1), r = e.msfnz(this.e, i, s), a = e.tsfnz(this.e, this.lat1, i), n = Math.sin(this.lat2), h = Math.cos(this.lat2), o = e.msfnz(this.e, n, h), u = e.tsfnz(this.e, this.lat2, n), l = e.tsfnz(this.e, this.lat0, Math.sin(this.lat0));
                    this.ns = Math.abs(this.lat1 - this.lat2) > e.EPSLN ? Math.log(r / o) / Math.log(a / u) : i, isNaN(this.ns) && (this.ns = i), this.f0 = r / (this.ns * Math.pow(a, this.ns)), this.rh = this.a * this.f0 * Math.pow(l, this.ns), this.title || (this.title = 'Lambert Conformal Conic');
                }
            },
            forward: function (t) {
                var i = t.x, s = t.y;
                Math.abs(2 * Math.abs(s) - e.PI) <= e.EPSLN && (s = e.sign(s) * (e.HALF_PI - 2 * e.EPSLN));
                var r, a, n = Math.abs(Math.abs(s) - e.HALF_PI);
                if (n > e.EPSLN)
                    r = e.tsfnz(this.e, s, Math.sin(s)), a = this.a * this.f0 * Math.pow(r, this.ns);
                else {
                    if (n = s * this.ns, 0 >= n)
                        return null;
                    a = 0;
                }
                var h = this.ns * e.adjust_lon(i - this.long0);
                return t.x = this.k0 * a * Math.sin(h) + this.x0, t.y = this.k0 * (this.rh - a * Math.cos(h)) + this.y0, t;
            },
            inverse: function (t) {
                var i, s, r, a, n, h = (t.x - this.x0) / this.k0, o = this.rh - (t.y - this.y0) / this.k0;
                this.ns > 0 ? (i = Math.sqrt(h * h + o * o), s = 1) : (i = -Math.sqrt(h * h + o * o), s = -1);
                var u = 0;
                if (0 !== i && (u = Math.atan2(s * h, s * o)), 0 !== i || this.ns > 0) {
                    if (s = 1 / this.ns, r = Math.pow(i / (this.a * this.f0), s), a = e.phi2z(this.e, r), -9999 === a)
                        return null;
                } else
                    a = -e.HALF_PI;
                return n = e.adjust_lon(u / this.ns + this.long0), t.x = n, t.y = a, t;
            }
        };
    }), define('proj4/projCode/krovak', [
        'require',
        'proj4/common'
    ], function (t) {
        var e = t('proj4/common');
        return {
            init: function () {
                this.a = 6377397.155, this.es = 0.006674372230614, this.e = Math.sqrt(this.es), this.lat0 || (this.lat0 = 0.863937979737193), this.long0 || (this.long0 = 0.4334234309119251), this.k0 || (this.k0 = 0.9999), this.s45 = 0.785398163397448, this.s90 = 2 * this.s45, this.fi0 = this.lat0, this.e2 = this.es, this.e = Math.sqrt(this.e2), this.alfa = Math.sqrt(1 + this.e2 * Math.pow(Math.cos(this.fi0), 4) / (1 - this.e2)), this.uq = 1.04216856380474, this.u0 = Math.asin(Math.sin(this.fi0) / this.alfa), this.g = Math.pow((1 + this.e * Math.sin(this.fi0)) / (1 - this.e * Math.sin(this.fi0)), this.alfa * this.e / 2), this.k = Math.tan(this.u0 / 2 + this.s45) / Math.pow(Math.tan(this.fi0 / 2 + this.s45), this.alfa) * this.g, this.k1 = this.k0, this.n0 = this.a * Math.sqrt(1 - this.e2) / (1 - this.e2 * Math.pow(Math.sin(this.fi0), 2)), this.s0 = 1.37008346281555, this.n = Math.sin(this.s0), this.ro0 = this.k1 * this.n0 / Math.tan(this.s0), this.ad = this.s90 - this.uq;
            },
            forward: function (t) {
                var i, s, r, a, n, h, o, u = t.x, l = t.y, f = e.adjust_lon(u - this.long0);
                return i = Math.pow((1 + this.e * Math.sin(l)) / (1 - this.e * Math.sin(l)), this.alfa * this.e / 2), s = 2 * (Math.atan(this.k * Math.pow(Math.tan(l / 2 + this.s45), this.alfa) / i) - this.s45), r = -f * this.alfa, a = Math.asin(Math.cos(this.ad) * Math.sin(s) + Math.sin(this.ad) * Math.cos(s) * Math.cos(r)), n = Math.asin(Math.cos(s) * Math.sin(r) / Math.cos(a)), h = this.n * n, o = this.ro0 * Math.pow(Math.tan(this.s0 / 2 + this.s45), this.n) / Math.pow(Math.tan(a / 2 + this.s45), this.n), t.y = o * Math.cos(h) / 1, t.x = o * Math.sin(h) / 1, this.czech || (t.y *= -1, t.x *= -1), t;
            },
            inverse: function (t) {
                var e, i, s, r, a, n, h, o, u = t.x;
                t.x = t.y, t.y = u, this.czech || (t.y *= -1, t.x *= -1), n = Math.sqrt(t.x * t.x + t.y * t.y), a = Math.atan2(t.y, t.x), r = a / Math.sin(this.s0), s = 2 * (Math.atan(Math.pow(this.ro0 / n, 1 / this.n) * Math.tan(this.s0 / 2 + this.s45)) - this.s45), e = Math.asin(Math.cos(this.ad) * Math.sin(s) - Math.sin(this.ad) * Math.cos(s) * Math.cos(r)), i = Math.asin(Math.cos(s) * Math.sin(r) / Math.cos(e)), t.x = this.long0 - i / this.alfa, h = e, o = 0;
                var l = 0;
                do
                    t.y = 2 * (Math.atan(Math.pow(this.k, -1 / this.alfa) * Math.pow(Math.tan(e / 2 + this.s45), 1 / this.alfa) * Math.pow((1 + this.e * Math.sin(h)) / (1 - this.e * Math.sin(h)), this.e / 2)) - this.s45), Math.abs(h - t.y) < 1e-10 && (o = 1), h = t.y, l += 1;
                while (0 === o && 15 > l);
                return l >= 15 ? null : t;
            }
        };
    }), define('proj4/projCode/cass', [
        'require',
        'proj4/common'
    ], function (t) {
        var e = t('proj4/common');
        return {
            init: function () {
                this.sphere || (this.e0 = e.e0fn(this.es), this.e1 = e.e1fn(this.es), this.e2 = e.e2fn(this.es), this.e3 = e.e3fn(this.es), this.ml0 = this.a * e.mlfn(this.e0, this.e1, this.e2, this.e3, this.lat0));
            },
            forward: function (t) {
                var i, s, r = t.x, a = t.y;
                if (r = e.adjust_lon(r - this.long0), this.sphere)
                    i = this.a * Math.asin(Math.cos(a) * Math.sin(r)), s = this.a * (Math.atan2(Math.tan(a), Math.cos(r)) - this.lat0);
                else {
                    var n = Math.sin(a), h = Math.cos(a), o = e.gN(this.a, this.e, n), u = Math.tan(a) * Math.tan(a), l = r * Math.cos(a), f = l * l, c = this.es * h * h / (1 - this.es), p = this.a * e.mlfn(this.e0, this.e1, this.e2, this.e3, a);
                    i = o * l * (1 - f * u * (1 / 6 - (8 - u + 8 * c) * f / 120)), s = p - this.ml0 + o * n / h * f * (0.5 + (5 - u + 6 * c) * f / 24);
                }
                return t.x = i + this.x0, t.y = s + this.y0, t;
            },
            inverse: function (t) {
                t.x -= this.x0, t.y -= this.y0;
                var i, s, r = t.x / this.a, a = t.y / this.a;
                if (this.sphere) {
                    var n = a + this.lat0;
                    i = Math.asin(Math.sin(n) * Math.cos(r)), s = Math.atan2(Math.tan(r), Math.cos(n));
                } else {
                    var h = this.ml0 / this.a + a, o = e.imlfn(h, this.e0, this.e1, this.e2, this.e3);
                    if (Math.abs(Math.abs(o) - e.HALF_PI) <= e.EPSLN)
                        return t.x = this.long0, t.y = e.HALF_PI, 0 > a && (t.y *= -1), t;
                    var u = e.gN(this.a, this.e, Math.sin(o)), l = u * u * u / this.a / this.a * (1 - this.es), f = Math.pow(Math.tan(o), 2), c = r * this.a / u, p = c * c;
                    i = o - u * Math.tan(o) / l * c * c * (0.5 - (1 + 3 * f) * c * c / 24), s = c * (1 - p * (f / 3 + (1 + 3 * f) * f * p / 15)) / Math.cos(o);
                }
                return t.x = e.adjust_lon(s + this.long0), t.y = e.adjust_lat(i), t;
            }
        };
    }), define('proj4/projCode/laea', [
        'require',
        'proj4/common'
    ], function (t) {
        var e = t('proj4/common');
        return {
            S_POLE: 1,
            N_POLE: 2,
            EQUIT: 3,
            OBLIQ: 4,
            init: function () {
                var t = Math.abs(this.lat0);
                if (this.mode = Math.abs(t - e.HALF_PI) < e.EPSLN ? this.lat0 < 0 ? this.S_POLE : this.N_POLE : Math.abs(t) < e.EPSLN ? this.EQUIT : this.OBLIQ, this.es > 0) {
                    var i;
                    switch (this.qp = e.qsfnz(this.e, 1), this.mmf = 0.5 / (1 - this.es), this.apa = this.authset(this.es), this.mode) {
                    case this.N_POLE:
                        this.dd = 1;
                        break;
                    case this.S_POLE:
                        this.dd = 1;
                        break;
                    case this.EQUIT:
                        this.rq = Math.sqrt(0.5 * this.qp), this.dd = 1 / this.rq, this.xmf = 1, this.ymf = 0.5 * this.qp;
                        break;
                    case this.OBLIQ:
                        this.rq = Math.sqrt(0.5 * this.qp), i = Math.sin(this.lat0), this.sinb1 = e.qsfnz(this.e, i) / this.qp, this.cosb1 = Math.sqrt(1 - this.sinb1 * this.sinb1), this.dd = Math.cos(this.lat0) / (Math.sqrt(1 - this.es * i * i) * this.rq * this.cosb1), this.ymf = (this.xmf = this.rq) / this.dd, this.xmf *= this.dd;
                    }
                } else
                    this.mode === this.OBLIQ && (this.sinph0 = Math.sin(this.lat0), this.cosph0 = Math.cos(this.lat0));
            },
            forward: function (t) {
                var i, s, r, a, n, h, o, u, l, f, c = t.x, p = t.y;
                if (c = e.adjust_lon(c - this.long0), this.sphere) {
                    if (n = Math.sin(p), f = Math.cos(p), r = Math.cos(c), this.mode === this.OBLIQ || this.mode === this.EQUIT) {
                        if (s = this.mode === this.EQUIT ? 1 + f * r : 1 + this.sinph0 * n + this.cosph0 * f * r, s <= e.EPSLN)
                            return null;
                        s = Math.sqrt(2 / s), i = s * f * Math.sin(c), s *= this.mode === this.EQUIT ? n : this.cosph0 * n - this.sinph0 * f * r;
                    } else if (this.mode === this.N_POLE || this.mode === this.S_POLE) {
                        if (this.mode === this.N_POLE && (r = -r), Math.abs(p + this.phi0) < e.EPSLN)
                            return null;
                        s = e.FORTPI - 0.5 * p, s = 2 * (this.mode === this.S_POLE ? Math.cos(s) : Math.sin(s)), i = s * Math.sin(c), s *= r;
                    }
                } else {
                    switch (o = 0, u = 0, l = 0, r = Math.cos(c), a = Math.sin(c), n = Math.sin(p), h = e.qsfnz(this.e, n), (this.mode === this.OBLIQ || this.mode === this.EQUIT) && (o = h / this.qp, u = Math.sqrt(1 - o * o)), this.mode) {
                    case this.OBLIQ:
                        l = 1 + this.sinb1 * o + this.cosb1 * u * r;
                        break;
                    case this.EQUIT:
                        l = 1 + u * r;
                        break;
                    case this.N_POLE:
                        l = e.HALF_PI + p, h = this.qp - h;
                        break;
                    case this.S_POLE:
                        l = p - e.HALF_PI, h = this.qp + h;
                    }
                    if (Math.abs(l) < e.EPSLN)
                        return null;
                    switch (this.mode) {
                    case this.OBLIQ:
                    case this.EQUIT:
                        l = Math.sqrt(2 / l), s = this.mode === this.OBLIQ ? this.ymf * l * (this.cosb1 * o - this.sinb1 * u * r) : (l = Math.sqrt(2 / (1 + u * r))) * o * this.ymf, i = this.xmf * l * u * a;
                        break;
                    case this.N_POLE:
                    case this.S_POLE:
                        h >= 0 ? (i = (l = Math.sqrt(h)) * a, s = r * (this.mode === this.S_POLE ? l : -l)) : i = s = 0;
                    }
                }
                return t.x = this.a * i + this.x0, t.y = this.a * s + this.y0, t;
            },
            inverse: function (t) {
                t.x -= this.x0, t.y -= this.y0;
                var i, s, r, a, n, h, o, u = t.x / this.a, l = t.y / this.a;
                if (this.sphere) {
                    var f, c = 0, p = 0;
                    if (f = Math.sqrt(u * u + l * l), s = 0.5 * f, s > 1)
                        return null;
                    switch (s = 2 * Math.asin(s), (this.mode === this.OBLIQ || this.mode === this.EQUIT) && (p = Math.sin(s), c = Math.cos(s)), this.mode) {
                    case this.EQUIT:
                        s = Math.abs(f) <= e.EPSLN ? 0 : Math.asin(l * p / f), u *= p, l = c * f;
                        break;
                    case this.OBLIQ:
                        s = Math.abs(f) <= e.EPSLN ? this.phi0 : Math.asin(c * this.sinph0 + l * p * this.cosph0 / f), u *= p * this.cosph0, l = (c - Math.sin(s) * this.sinph0) * f;
                        break;
                    case this.N_POLE:
                        l = -l, s = e.HALF_PI - s;
                        break;
                    case this.S_POLE:
                        s -= e.HALF_PI;
                    }
                    i = 0 !== l || this.mode !== this.EQUIT && this.mode !== this.OBLIQ ? Math.atan2(u, l) : 0;
                } else {
                    if (o = 0, this.mode === this.OBLIQ || this.mode === this.EQUIT) {
                        if (u /= this.dd, l *= this.dd, h = Math.sqrt(u * u + l * l), h < e.EPSLN)
                            return t.x = 0, t.y = this.phi0, t;
                        a = 2 * Math.asin(0.5 * h / this.rq), r = Math.cos(a), u *= a = Math.sin(a), this.mode === this.OBLIQ ? (o = r * this.sinb1 + l * a * this.cosb1 / h, n = this.qp * o, l = h * this.cosb1 * r - l * this.sinb1 * a) : (o = l * a / h, n = this.qp * o, l = h * r);
                    } else if (this.mode === this.N_POLE || this.mode === this.S_POLE) {
                        if (this.mode === this.N_POLE && (l = -l), n = u * u + l * l, !n)
                            return t.x = 0, t.y = this.phi0, t;
                        o = 1 - n / this.qp, this.mode === this.S_POLE && (o = -o);
                    }
                    i = Math.atan2(u, l), s = this.authlat(Math.asin(o), this.apa);
                }
                return t.x = e.adjust_lon(this.long0 + i), t.y = s, t;
            },
            P00: 0.3333333333333333,
            P01: 0.17222222222222222,
            P02: 0.10257936507936508,
            P10: 0.06388888888888888,
            P11: 0.0664021164021164,
            P20: 0.016415012942191543,
            authset: function (t) {
                var e, i = [];
                return i[0] = t * this.P00, e = t * t, i[0] += e * this.P01, i[1] = e * this.P10, e *= t, i[0] += e * this.P02, i[1] += e * this.P11, i[2] = e * this.P20, i;
            },
            authlat: function (t, e) {
                var i = t + t;
                return t + e[0] * Math.sin(i) + e[1] * Math.sin(i + i) + e[2] * Math.sin(i + i + i);
            }
        };
    }), define('proj4/projCode/merc', [
        'require',
        'proj4/common'
    ], function (t) {
        var e = t('proj4/common');
        return {
            init: function () {
                var t = this.b / this.a;
                this.es = 1 - t * t, this.e = Math.sqrt(this.es), this.lat_ts ? this.k0 = this.sphere ? Math.cos(this.lat_ts) : e.msfnz(this.e, Math.sin(this.lat_ts), Math.cos(this.lat_ts)) : this.k0 || (this.k0 = this.k ? this.k : 1);
            },
            forward: function (t) {
                var i = t.x, s = t.y;
                if (s * e.R2D > 90 && s * e.R2D < -90 && i * e.R2D > 180 && i * e.R2D < -180)
                    return null;
                var r, a;
                if (Math.abs(Math.abs(s) - e.HALF_PI) <= e.EPSLN)
                    return null;
                if (this.sphere)
                    r = this.x0 + this.a * this.k0 * e.adjust_lon(i - this.long0), a = this.y0 + this.a * this.k0 * Math.log(Math.tan(e.FORTPI + 0.5 * s));
                else {
                    var n = Math.sin(s), h = e.tsfnz(this.e, s, n);
                    r = this.x0 + this.a * this.k0 * e.adjust_lon(i - this.long0), a = this.y0 - this.a * this.k0 * Math.log(h);
                }
                return t.x = r, t.y = a, t;
            },
            inverse: function (t) {
                var i, s, r = t.x - this.x0, a = t.y - this.y0;
                if (this.sphere)
                    s = e.HALF_PI - 2 * Math.atan(Math.exp(-a / (this.a * this.k0)));
                else {
                    var n = Math.exp(-a / (this.a * this.k0));
                    if (s = e.phi2z(this.e, n), -9999 === s)
                        return null;
                }
                return i = e.adjust_lon(this.long0 + r / (this.a * this.k0)), t.x = i, t.y = s, t;
            }
        };
    }), define('proj4/projCode/aea', [
        'require',
        'proj4/common'
    ], function (t) {
        var e = t('proj4/common');
        return {
            init: function () {
                Math.abs(this.lat1 + this.lat2) < e.EPSLN || (this.temp = this.b / this.a, this.es = 1 - Math.pow(this.temp, 2), this.e3 = Math.sqrt(this.es), this.sin_po = Math.sin(this.lat1), this.cos_po = Math.cos(this.lat1), this.t1 = this.sin_po, this.con = this.sin_po, this.ms1 = e.msfnz(this.e3, this.sin_po, this.cos_po), this.qs1 = e.qsfnz(this.e3, this.sin_po, this.cos_po), this.sin_po = Math.sin(this.lat2), this.cos_po = Math.cos(this.lat2), this.t2 = this.sin_po, this.ms2 = e.msfnz(this.e3, this.sin_po, this.cos_po), this.qs2 = e.qsfnz(this.e3, this.sin_po, this.cos_po), this.sin_po = Math.sin(this.lat0), this.cos_po = Math.cos(this.lat0), this.t3 = this.sin_po, this.qs0 = e.qsfnz(this.e3, this.sin_po, this.cos_po), this.ns0 = Math.abs(this.lat1 - this.lat2) > e.EPSLN ? (this.ms1 * this.ms1 - this.ms2 * this.ms2) / (this.qs2 - this.qs1) : this.con, this.c = this.ms1 * this.ms1 + this.ns0 * this.qs1, this.rh = this.a * Math.sqrt(this.c - this.ns0 * this.qs0) / this.ns0);
            },
            forward: function (t) {
                var i = t.x, s = t.y;
                this.sin_phi = Math.sin(s), this.cos_phi = Math.cos(s);
                var r = e.qsfnz(this.e3, this.sin_phi, this.cos_phi), a = this.a * Math.sqrt(this.c - this.ns0 * r) / this.ns0, n = this.ns0 * e.adjust_lon(i - this.long0), h = a * Math.sin(n) + this.x0, o = this.rh - a * Math.cos(n) + this.y0;
                return t.x = h, t.y = o, t;
            },
            inverse: function (t) {
                var i, s, r, a, n, h;
                return t.x -= this.x0, t.y = this.rh - t.y + this.y0, this.ns0 >= 0 ? (i = Math.sqrt(t.x * t.x + t.y * t.y), r = 1) : (i = -Math.sqrt(t.x * t.x + t.y * t.y), r = -1), a = 0, 0 !== i && (a = Math.atan2(r * t.x, r * t.y)), r = i * this.ns0 / this.a, this.sphere ? h = Math.asin((this.c - r * r) / (2 * this.ns0)) : (s = (this.c - r * r) / this.ns0, h = this.phi1z(this.e3, s)), n = e.adjust_lon(a / this.ns0 + this.long0), t.x = n, t.y = h, t;
            },
            phi1z: function (t, i) {
                var s, r, a, n, h, o = e.asinz(0.5 * i);
                if (t < e.EPSLN)
                    return o;
                for (var u = t * t, l = 1; 25 >= l; l++)
                    if (s = Math.sin(o), r = Math.cos(o), a = t * s, n = 1 - a * a, h = 0.5 * n * n / r * (i / (1 - u) - s / n + 0.5 / t * Math.log((1 - a) / (1 + a))), o += h, Math.abs(h) <= 1e-7)
                        return o;
                return null;
            }
        };
    }), define('proj4/projCode/gnom', [
        'require',
        'proj4/common'
    ], function (t) {
        var e = t('proj4/common');
        return {
            init: function () {
                this.sin_p14 = Math.sin(this.lat0), this.cos_p14 = Math.cos(this.lat0), this.infinity_dist = 1000 * this.a, this.rc = 1;
            },
            forward: function (t) {
                var i, s, r, a, n, h, o, u, l = t.x, f = t.y;
                return r = e.adjust_lon(l - this.long0), i = Math.sin(f), s = Math.cos(f), a = Math.cos(r), h = this.sin_p14 * i + this.cos_p14 * s * a, n = 1, h > 0 || Math.abs(h) <= e.EPSLN ? (o = this.x0 + this.a * n * s * Math.sin(r) / h, u = this.y0 + this.a * n * (this.cos_p14 * i - this.sin_p14 * s * a) / h) : (o = this.x0 + this.infinity_dist * s * Math.sin(r), u = this.y0 + this.infinity_dist * (this.cos_p14 * i - this.sin_p14 * s * a)), t.x = o, t.y = u, t;
            },
            inverse: function (t) {
                var i, s, r, a, n, h;
                return t.x = (t.x - this.x0) / this.a, t.y = (t.y - this.y0) / this.a, t.x /= this.k0, t.y /= this.k0, (i = Math.sqrt(t.x * t.x + t.y * t.y)) ? (a = Math.atan2(i, this.rc), s = Math.sin(a), r = Math.cos(a), h = e.asinz(r * this.sin_p14 + t.y * s * this.cos_p14 / i), n = Math.atan2(t.x * s, i * this.cos_p14 * r - t.y * this.sin_p14 * s), n = e.adjust_lon(this.long0 + n)) : (h = this.phic0, n = 0), t.x = n, t.y = h, t;
            }
        };
    }), define('proj4/projCode/cea', [
        'require',
        'proj4/common'
    ], function (t) {
        var e = t('proj4/common');
        return {
            init: function () {
                this.sphere || (this.k0 = e.msfnz(this.e, Math.sin(this.lat_ts), Math.cos(this.lat_ts)));
            },
            forward: function (t) {
                var i, s, r = t.x, a = t.y, n = e.adjust_lon(r - this.long0);
                if (this.sphere)
                    i = this.x0 + this.a * n * Math.cos(this.lat_ts), s = this.y0 + this.a * Math.sin(a) / Math.cos(this.lat_ts);
                else {
                    var h = e.qsfnz(this.e, Math.sin(a));
                    i = this.x0 + this.a * this.k0 * n, s = this.y0 + 0.5 * this.a * h / this.k0;
                }
                return t.x = i, t.y = s, t;
            },
            inverse: function (t) {
                t.x -= this.x0, t.y -= this.y0;
                var i, s;
                return this.sphere ? (i = e.adjust_lon(this.long0 + t.x / this.a / Math.cos(this.lat_ts)), s = Math.asin(t.y / this.a * Math.cos(this.lat_ts))) : (s = e.iqsfnz(this.e, 2 * t.y * this.k0 / this.a), i = e.adjust_lon(this.long0 + t.x / (this.a * this.k0))), t.x = i, t.y = s, t;
            }
        };
    }), define('proj4/projCode/eqc', [
        'require',
        'proj4/common'
    ], function (t) {
        var e = t('proj4/common');
        return {
            init: function () {
                this.x0 = this.x0 || 0, this.y0 = this.y0 || 0, this.lat0 = this.lat0 || 0, this.long0 = this.long0 || 0, this.lat_ts = this.lat_t || 0, this.title = this.title || 'Equidistant Cylindrical (Plate Carre)', this.rc = Math.cos(this.lat_ts);
            },
            forward: function (t) {
                var i = t.x, s = t.y, r = e.adjust_lon(i - this.long0), a = e.adjust_lat(s - this.lat0);
                return t.x = this.x0 + this.a * r * this.rc, t.y = this.y0 + this.a * a, t;
            },
            inverse: function (t) {
                var i = t.x, s = t.y;
                return t.x = e.adjust_lon(this.long0 + (i - this.x0) / (this.a * this.rc)), t.y = e.adjust_lat(this.lat0 + (s - this.y0) / this.a), t;
            }
        };
    }), define('proj4/projCode/poly', [
        'require',
        'proj4/common'
    ], function (t) {
        var e = t('proj4/common');
        return {
            init: function () {
                this.temp = this.b / this.a, this.es = 1 - Math.pow(this.temp, 2), this.e = Math.sqrt(this.es), this.e0 = e.e0fn(this.es), this.e1 = e.e1fn(this.es), this.e2 = e.e2fn(this.es), this.e3 = e.e3fn(this.es), this.ml0 = this.a * e.mlfn(this.e0, this.e1, this.e2, this.e3, this.lat0);
            },
            forward: function (t) {
                var i, s, r, a = t.x, n = t.y, h = e.adjust_lon(a - this.long0);
                if (r = h * Math.sin(n), this.sphere)
                    Math.abs(n) <= e.EPSLN ? (i = this.a * h, s = -1 * this.a * this.lat0) : (i = this.a * Math.sin(r) / Math.tan(n), s = this.a * (e.adjust_lat(n - this.lat0) + (1 - Math.cos(r)) / Math.tan(n)));
                else if (Math.abs(n) <= e.EPSLN)
                    i = this.a * h, s = -1 * this.ml0;
                else {
                    var o = e.gN(this.a, this.e, Math.sin(n)) / Math.tan(n);
                    i = o * Math.sin(r), s = this.a * e.mlfn(this.e0, this.e1, this.e2, this.e3, n) - this.ml0 + o * (1 - Math.cos(r));
                }
                return t.x = i + this.x0, t.y = s + this.y0, t;
            },
            inverse: function (t) {
                var i, s, r, a, n, h, o, u, l;
                if (r = t.x - this.x0, a = t.y - this.y0, this.sphere)
                    if (Math.abs(a + this.a * this.lat0) <= e.EPSLN)
                        i = e.adjust_lon(r / this.a + this.long0), s = 0;
                    else {
                        h = this.lat0 + a / this.a, o = r * r / this.a / this.a + h * h, u = h;
                        var f;
                        for (n = e.MAX_ITER; n; --n)
                            if (f = Math.tan(u), l = -1 * (h * (u * f + 1) - u - 0.5 * (u * u + o) * f) / ((u - h) / f - 1), u += l, Math.abs(l) <= e.EPSLN) {
                                s = u;
                                break;
                            }
                        i = e.adjust_lon(this.long0 + Math.asin(r * Math.tan(u) / this.a) / Math.sin(s));
                    }
                else if (Math.abs(a + this.ml0) <= e.EPSLN)
                    s = 0, i = e.adjust_lon(this.long0 + r / this.a);
                else {
                    h = (this.ml0 + a) / this.a, o = r * r / this.a / this.a + h * h, u = h;
                    var c, p, d, m, y;
                    for (n = e.MAX_ITER; n; --n)
                        if (y = this.e * Math.sin(u), c = Math.sqrt(1 - y * y) * Math.tan(u), p = this.a * e.mlfn(this.e0, this.e1, this.e2, this.e3, u), d = this.e0 - 2 * this.e1 * Math.cos(2 * u) + 4 * this.e2 * Math.cos(4 * u) - 6 * this.e3 * Math.cos(6 * u), m = p / this.a, l = (h * (c * m + 1) - m - 0.5 * c * (m * m + o)) / (this.es * Math.sin(2 * u) * (m * m + o - 2 * h * m) / (4 * c) + (h - m) * (c * d - 2 / Math.sin(2 * u)) - d), u -= l, Math.abs(l) <= e.EPSLN) {
                            s = u;
                            break;
                        }
                    c = Math.sqrt(1 - this.es * Math.pow(Math.sin(s), 2)) * Math.tan(s), i = e.adjust_lon(this.long0 + Math.asin(r * c / this.a) / Math.sin(s));
                }
                return t.x = i, t.y = s, t;
            }
        };
    }), define('proj4/projCode/nzmg', [
        'require',
        'proj4/common'
    ], function (t) {
        var e = t('proj4/common');
        return {
            iterations: 1,
            init: function () {
                this.A = [], this.A[1] = 0.6399175073, this.A[2] = -0.1358797613, this.A[3] = 0.063294409, this.A[4] = -0.02526853, this.A[5] = 0.0117879, this.A[6] = -0.0055161, this.A[7] = 0.0026906, this.A[8] = -0.001333, this.A[9] = 0.00067, this.A[10] = -0.00034, this.B_re = [], this.B_im = [], this.B_re[1] = 0.7557853228, this.B_im[1] = 0, this.B_re[2] = 0.249204646, this.B_im[2] = 0.003371507, this.B_re[3] = -0.001541739, this.B_im[3] = 0.04105856, this.B_re[4] = -0.10162907, this.B_im[4] = 0.01727609, this.B_re[5] = -0.26623489, this.B_im[5] = -0.36249218, this.B_re[6] = -0.6870983, this.B_im[6] = -1.1651967, this.C_re = [], this.C_im = [], this.C_re[1] = 1.3231270439, this.C_im[1] = 0, this.C_re[2] = -0.577245789, this.C_im[2] = -0.007809598, this.C_re[3] = 0.508307513, this.C_im[3] = -0.112208952, this.C_re[4] = -0.15094762, this.C_im[4] = 0.18200602, this.C_re[5] = 1.01418179, this.C_im[5] = 1.64497696, this.C_re[6] = 1.9660549, this.C_im[6] = 2.5127645, this.D = [], this.D[1] = 1.5627014243, this.D[2] = 0.5185406398, this.D[3] = -0.03333098, this.D[4] = -0.1052906, this.D[5] = -0.0368594, this.D[6] = 0.007317, this.D[7] = 0.0122, this.D[8] = 0.00394, this.D[9] = -0.0013;
            },
            forward: function (t) {
                var i, s = t.x, r = t.y, a = r - this.lat0, n = s - this.long0, h = 0.00001 * (a / e.SEC_TO_RAD), o = n, u = 1, l = 0;
                for (i = 1; 10 >= i; i++)
                    u *= h, l += this.A[i] * u;
                var f, c, p = l, d = o, m = 1, y = 0, M = 0, g = 0;
                for (i = 1; 6 >= i; i++)
                    f = m * p - y * d, c = y * p + m * d, m = f, y = c, M = M + this.B_re[i] * m - this.B_im[i] * y, g = g + this.B_im[i] * m + this.B_re[i] * y;
                return t.x = g * this.a + this.x0, t.y = M * this.a + this.y0, t;
            },
            inverse: function (t) {
                var i, s, r, a = t.x, n = t.y, h = a - this.x0, o = n - this.y0, u = o / this.a, l = h / this.a, f = 1, c = 0, p = 0, d = 0;
                for (i = 1; 6 >= i; i++)
                    s = f * u - c * l, r = c * u + f * l, f = s, c = r, p = p + this.C_re[i] * f - this.C_im[i] * c, d = d + this.C_im[i] * f + this.C_re[i] * c;
                for (var m = 0; m < this.iterations; m++) {
                    var y, M, g = p, _ = d, b = u, v = l;
                    for (i = 2; 6 >= i; i++)
                        y = g * p - _ * d, M = _ * p + g * d, g = y, _ = M, b += (i - 1) * (this.B_re[i] * g - this.B_im[i] * _), v += (i - 1) * (this.B_im[i] * g + this.B_re[i] * _);
                    g = 1, _ = 0;
                    var j = this.B_re[1], x = this.B_im[1];
                    for (i = 2; 6 >= i; i++)
                        y = g * p - _ * d, M = _ * p + g * d, g = y, _ = M, j += i * (this.B_re[i] * g - this.B_im[i] * _), x += i * (this.B_im[i] * g + this.B_re[i] * _);
                    var A = j * j + x * x;
                    p = (b * j + v * x) / A, d = (v * j - b * x) / A;
                }
                var C = p, w = d, S = 1, I = 0;
                for (i = 1; 9 >= i; i++)
                    S *= C, I += this.D[i] * S;
                var P = this.lat0 + 100000 * I * e.SEC_TO_RAD, E = this.long0 + w;
                return t.x = E, t.y = P, t;
            }
        };
    }), define('proj4/projCode/mill', [
        'require',
        'proj4/common'
    ], function (t) {
        var e = t('proj4/common');
        return {
            init: function () {
            },
            forward: function (t) {
                var i = t.x, s = t.y, r = e.adjust_lon(i - this.long0), a = this.x0 + this.a * r, n = this.y0 + 1.25 * this.a * Math.log(Math.tan(e.PI / 4 + s / 2.5));
                return t.x = a, t.y = n, t;
            },
            inverse: function (t) {
                t.x -= this.x0, t.y -= this.y0;
                var i = e.adjust_lon(this.long0 + t.x / this.a), s = 2.5 * (Math.atan(Math.exp(0.8 * t.y / this.a)) - e.PI / 4);
                return t.x = i, t.y = s, t;
            }
        };
    }), define('proj4/projCode/sinu', [
        'require',
        'proj4/common'
    ], function (t) {
        var e = t('proj4/common');
        return {
            init: function () {
                this.sphere ? (this.n = 1, this.m = 0, this.es = 0, this.C_y = Math.sqrt((this.m + 1) / this.n), this.C_x = this.C_y / (this.m + 1)) : this.en = e.pj_enfn(this.es);
            },
            forward: function (t) {
                var i, s, r = t.x, a = t.y;
                if (r = e.adjust_lon(r - this.long0), this.sphere) {
                    if (this.m)
                        for (var n = this.n * Math.sin(a), h = e.MAX_ITER; h; --h) {
                            var o = (this.m * a + Math.sin(a) - n) / (this.m + Math.cos(a));
                            if (a -= o, Math.abs(o) < e.EPSLN)
                                break;
                        }
                    else
                        a = 1 !== this.n ? Math.asin(this.n * Math.sin(a)) : a;
                    i = this.a * this.C_x * r * (this.m + Math.cos(a)), s = this.a * this.C_y * a;
                } else {
                    var u = Math.sin(a), l = Math.cos(a);
                    s = this.a * e.pj_mlfn(a, u, l, this.en), i = this.a * r * l / Math.sqrt(1 - this.es * u * u);
                }
                return t.x = i, t.y = s, t;
            },
            inverse: function (t) {
                var i, s, r;
                if (t.x -= this.x0, t.y -= this.y0, i = t.y / this.a, this.sphere)
                    t.y /= this.C_y, i = this.m ? Math.asin((this.m * t.y + Math.sin(t.y)) / this.n) : 1 !== this.n ? Math.asin(Math.sin(t.y) / this.n) : t.y, r = t.x / (this.C_x * (this.m + Math.cos(t.y)));
                else {
                    i = e.pj_inv_mlfn(t.y / this.a, this.es, this.en);
                    var a = Math.abs(i);
                    a < e.HALF_PI ? (a = Math.sin(i), s = this.long0 + t.x * Math.sqrt(1 - this.es * a * a) / (this.a * Math.cos(i)), r = e.adjust_lon(s)) : a - e.EPSLN < e.HALF_PI && (r = this.long0);
                }
                return t.x = r, t.y = i, t;
            }
        };
    }), define('proj4/projCode/moll', [
        'require',
        'proj4/common'
    ], function (t) {
        var e = t('proj4/common');
        return {
            init: function () {
            },
            forward: function (t) {
                for (var i = t.x, s = t.y, r = e.adjust_lon(i - this.long0), a = s, n = e.PI * Math.sin(s), h = 0; !0; h++) {
                    var o = -(a + Math.sin(a) - n) / (1 + Math.cos(a));
                    if (a += o, Math.abs(o) < e.EPSLN)
                        break;
                }
                a /= 2, e.PI / 2 - Math.abs(s) < e.EPSLN && (r = 0);
                var u = 0.900316316158 * this.a * r * Math.cos(a) + this.x0, l = 1.4142135623731 * this.a * Math.sin(a) + this.y0;
                return t.x = u, t.y = l, t;
            },
            inverse: function (t) {
                var i, s;
                t.x -= this.x0, t.y -= this.y0, s = t.y / (1.4142135623731 * this.a), Math.abs(s) > 0.999999999999 && (s = 0.999999999999), i = Math.asin(s);
                var r = e.adjust_lon(this.long0 + t.x / (0.900316316158 * this.a * Math.cos(i)));
                r < -e.PI && (r = -e.PI), r > e.PI && (r = e.PI), s = (2 * i + Math.sin(2 * i)) / e.PI, Math.abs(s) > 1 && (s = 1);
                var a = Math.asin(s);
                return t.x = r, t.y = a, t;
            }
        };
    }), define('proj4/projCode/eqdc', [
        'require',
        'proj4/common'
    ], function (t) {
        var e = t('proj4/common');
        return {
            init: function () {
                return Math.abs(this.lat1 + this.lat2) < e.EPSLN ? (e.reportError('eqdc:init: Equal Latitudes'), void 0) : (this.lat2 = this.lat2 || this.lat1, this.temp = this.b / this.a, this.es = 1 - Math.pow(this.temp, 2), this.e = Math.sqrt(this.es), this.e0 = e.e0fn(this.es), this.e1 = e.e1fn(this.es), this.e2 = e.e2fn(this.es), this.e3 = e.e3fn(this.es), this.sinphi = Math.sin(this.lat1), this.cosphi = Math.cos(this.lat1), this.ms1 = e.msfnz(this.e, this.sinphi, this.cosphi), this.ml1 = e.mlfn(this.e0, this.e1, this.e2, this.e3, this.lat1), Math.abs(this.lat1 - this.lat2) < e.EPSLN ? this.ns = this.sinphi : (this.sinphi = Math.sin(this.lat2), this.cosphi = Math.cos(this.lat2), this.ms2 = e.msfnz(this.e, this.sinphi, this.cosphi), this.ml2 = e.mlfn(this.e0, this.e1, this.e2, this.e3, this.lat2), this.ns = (this.ms1 - this.ms2) / (this.ml2 - this.ml1)), this.g = this.ml1 + this.ms1 / this.ns, this.ml0 = e.mlfn(this.e0, this.e1, this.e2, this.e3, this.lat0), this.rh = this.a * (this.g - this.ml0), void 0);
            },
            forward: function (t) {
                var i, s = t.x, r = t.y;
                if (this.sphere)
                    i = this.a * (this.g - r);
                else {
                    var a = e.mlfn(this.e0, this.e1, this.e2, this.e3, r);
                    i = this.a * (this.g - a);
                }
                var n = this.ns * e.adjust_lon(s - this.long0), h = this.x0 + i * Math.sin(n), o = this.y0 + this.rh - i * Math.cos(n);
                return t.x = h, t.y = o, t;
            },
            inverse: function (t) {
                t.x -= this.x0, t.y = this.rh - t.y + this.y0;
                var i, s, r, a;
                this.ns >= 0 ? (s = Math.sqrt(t.x * t.x + t.y * t.y), i = 1) : (s = -Math.sqrt(t.x * t.x + t.y * t.y), i = -1);
                var n = 0;
                if (0 !== s && (n = Math.atan2(i * t.x, i * t.y)), this.sphere)
                    return a = e.adjust_lon(this.long0 + n / this.ns), r = e.adjust_lat(this.g - s / this.a), t.x = a, t.y = r, t;
                var h = this.g - s / this.a;
                return r = e.imlfn(h, this.e0, this.e1, this.e2, this.e3), a = e.adjust_lon(this.long0 + n / this.ns), t.x = a, t.y = r, t;
            }
        };
    }), define('proj4/projCode/vandg', [
        'require',
        'proj4/common'
    ], function (t) {
        var e = t('proj4/common');
        return {
            init: function () {
                this.R = this.a;
            },
            forward: function (t) {
                var i, s, r = t.x, a = t.y, n = e.adjust_lon(r - this.long0);
                Math.abs(a) <= e.EPSLN && (i = this.x0 + this.R * n, s = this.y0);
                var h = e.asinz(2 * Math.abs(a / e.PI));
                (Math.abs(n) <= e.EPSLN || Math.abs(Math.abs(a) - e.HALF_PI) <= e.EPSLN) && (i = this.x0, s = a >= 0 ? this.y0 + e.PI * this.R * Math.tan(0.5 * h) : this.y0 + e.PI * this.R * -Math.tan(0.5 * h));
                var o = 0.5 * Math.abs(e.PI / n - n / e.PI), u = o * o, l = Math.sin(h), f = Math.cos(h), c = f / (l + f - 1), p = c * c, d = c * (2 / l - 1), m = d * d, y = e.PI * this.R * (o * (c - m) + Math.sqrt(u * (c - m) * (c - m) - (m + u) * (p - m))) / (m + u);
                0 > n && (y = -y), i = this.x0 + y;
                var M = u + c;
                return y = e.PI * this.R * (d * M - o * Math.sqrt((m + u) * (u + 1) - M * M)) / (m + u), s = a >= 0 ? this.y0 + y : this.y0 - y, t.x = i, t.y = s, t;
            },
            inverse: function (t) {
                var i, s, r, a, n, h, o, u, l, f, c, p, d;
                return t.x -= this.x0, t.y -= this.y0, c = e.PI * this.R, r = t.x / c, a = t.y / c, n = r * r + a * a, h = -Math.abs(a) * (1 + n), o = h - 2 * a * a + r * r, u = -2 * h + 1 + 2 * a * a + n * n, d = a * a / u + (2 * o * o * o / u / u / u - 9 * h * o / u / u) / 27, l = (h - o * o / 3 / u) / u, f = 2 * Math.sqrt(-l / 3), c = 3 * d / l / f, Math.abs(c) > 1 && (c = c >= 0 ? 1 : -1), p = Math.acos(c) / 3, s = t.y >= 0 ? (-f * Math.cos(p + e.PI / 3) - o / 3 / u) * e.PI : -(-f * Math.cos(p + e.PI / 3) - o / 3 / u) * e.PI, i = Math.abs(r) < e.EPSLN ? this.long0 : e.adjust_lon(this.long0 + e.PI * (n - 1 + Math.sqrt(1 + 2 * (r * r - a * a) + n * n)) / 2 / r), t.x = i, t.y = s, t;
            }
        };
    }), define('proj4/projCode/aeqd', [
        'require',
        'proj4/common'
    ], function (t) {
        var e = t('proj4/common');
        return {
            init: function () {
                this.sin_p12 = Math.sin(this.lat0), this.cos_p12 = Math.cos(this.lat0);
            },
            forward: function (t) {
                var i, s, r, a, n, h, o, u, l, f, c, p, d, m, y, M, g, _, b, v, j, x, A, C = t.x, w = t.y, S = Math.sin(t.y), I = Math.cos(t.y), P = e.adjust_lon(C - this.long0);
                return this.sphere ? Math.abs(this.sin_p12 - 1) <= e.EPSLN ? (t.x = this.x0 + this.a * (e.HALF_PI - w) * Math.sin(P), t.y = this.y0 - this.a * (e.HALF_PI - w) * Math.cos(P), t) : Math.abs(this.sin_p12 + 1) <= e.EPSLN ? (t.x = this.x0 + this.a * (e.HALF_PI + w) * Math.sin(P), t.y = this.y0 + this.a * (e.HALF_PI + w) * Math.cos(P), t) : (_ = this.sin_p12 * S + this.cos_p12 * I * Math.cos(P), M = Math.acos(_), g = M / Math.sin(M), t.x = this.x0 + this.a * g * I * Math.sin(P), t.y = this.y0 + this.a * g * (this.cos_p12 * S - this.sin_p12 * I * Math.cos(P)), t) : (i = e.e0fn(this.es), s = e.e1fn(this.es), r = e.e2fn(this.es), a = e.e3fn(this.es), Math.abs(this.sin_p12 - 1) <= e.EPSLN ? (n = this.a * e.mlfn(i, s, r, a, e.HALF_PI), h = this.a * e.mlfn(i, s, r, a, w), t.x = this.x0 + (n - h) * Math.sin(P), t.y = this.y0 - (n - h) * Math.cos(P), t) : Math.abs(this.sin_p12 + 1) <= e.EPSLN ? (n = this.a * e.mlfn(i, s, r, a, e.HALF_PI), h = this.a * e.mlfn(i, s, r, a, w), t.x = this.x0 + (n + h) * Math.sin(P), t.y = this.y0 + (n + h) * Math.cos(P), t) : (o = S / I, u = e.gN(this.a, this.e, this.sin_p12), l = e.gN(this.a, this.e, S), f = Math.atan((1 - this.es) * o + this.es * u * this.sin_p12 / (l * I)), c = Math.atan2(Math.sin(P), this.cos_p12 * Math.tan(f) - this.sin_p12 * Math.cos(P)), b = 0 === c ? Math.asin(this.cos_p12 * Math.sin(f) - this.sin_p12 * Math.cos(f)) : Math.abs(Math.abs(c) - e.PI) <= e.EPSLN ? -Math.asin(this.cos_p12 * Math.sin(f) - this.sin_p12 * Math.cos(f)) : Math.asin(Math.sin(P) * Math.cos(f) / Math.sin(c)), p = this.e * this.sin_p12 / Math.sqrt(1 - this.es), d = this.e * this.cos_p12 * Math.cos(c) / Math.sqrt(1 - this.es), m = p * d, y = d * d, v = b * b, j = v * b, x = j * b, A = x * b, M = u * b * (1 - v * y * (1 - y) / 6 + j / 8 * m * (1 - 2 * y) + x / 120 * (y * (4 - 7 * y) - 3 * p * p * (1 - 7 * y)) - A / 48 * m), t.x = this.x0 + M * Math.sin(c), t.y = this.y0 + M * Math.cos(c), t));
            },
            inverse: function (t) {
                t.x -= this.x0, t.y -= this.y0;
                var i, s, r, a, n, h, o, u, l, f, c, p, d, m, y, M, g, _, b, v, j, x, A;
                if (this.sphere) {
                    if (i = Math.sqrt(t.x * t.x + t.y * t.y), i > 2 * e.HALF_PI * this.a)
                        return;
                    return s = i / this.a, r = Math.sin(s), a = Math.cos(s), n = this.long0, Math.abs(i) <= e.EPSLN ? h = this.lat0 : (h = e.asinz(a * this.sin_p12 + t.y * r * this.cos_p12 / i), o = Math.abs(this.lat0) - e.HALF_PI, n = Math.abs(o) <= e.EPSLN ? this.lat0 >= 0 ? e.adjust_lon(this.long0 + Math.atan2(t.x, -t.y)) : e.adjust_lon(this.long0 - Math.atan2(-t.x, t.y)) : e.adjust_lon(this.long0 + Math.atan2(t.x * r, i * this.cos_p12 * a - t.y * this.sin_p12 * r))), t.x = n, t.y = h, t;
                }
                return u = e.e0fn(this.es), l = e.e1fn(this.es), f = e.e2fn(this.es), c = e.e3fn(this.es), Math.abs(this.sin_p12 - 1) <= e.EPSLN ? (p = this.a * e.mlfn(u, l, f, c, e.HALF_PI), i = Math.sqrt(t.x * t.x + t.y * t.y), d = p - i, h = e.imlfn(d / this.a, u, l, f, c), n = e.adjust_lon(this.long0 + Math.atan2(t.x, -1 * t.y)), t.x = n, t.y = h, t) : Math.abs(this.sin_p12 + 1) <= e.EPSLN ? (p = this.a * e.mlfn(u, l, f, c, e.HALF_PI), i = Math.sqrt(t.x * t.x + t.y * t.y), d = i - p, h = e.imlfn(d / this.a, u, l, f, c), n = e.adjust_lon(this.long0 + Math.atan2(t.x, t.y)), t.x = n, t.y = h, t) : (i = Math.sqrt(t.x * t.x + t.y * t.y), M = Math.atan2(t.x, t.y), m = e.gN(this.a, this.e, this.sin_p12), g = Math.cos(M), _ = this.e * this.cos_p12 * g, b = -_ * _ / (1 - this.es), v = 3 * this.es * (1 - b) * this.sin_p12 * this.cos_p12 * g / (1 - this.es), j = i / m, x = j - b * (1 + b) * Math.pow(j, 3) / 6 - v * (1 + 3 * b) * Math.pow(j, 4) / 24, A = 1 - b * x * x / 2 - j * x * x * x / 6, y = Math.asin(this.sin_p12 * Math.cos(x) + this.cos_p12 * Math.sin(x) * g), n = e.adjust_lon(this.long0 + Math.asin(Math.sin(M) * Math.sin(x) / Math.cos(y))), h = Math.atan((1 - this.es * A * this.sin_p12 / Math.sin(y)) * Math.tan(y) / (1 - this.es)), t.x = n, t.y = h, t);
            }
        };
    }), define('proj4/projections', [
        'require',
        'exports',
        'module',
        'proj4/projCode/longlat',
        'proj4/projCode/tmerc',
        'proj4/projCode/utm',
        'proj4/projCode/sterea',
        'proj4/projCode/somerc',
        'proj4/projCode/omerc',
        'proj4/projCode/lcc',
        'proj4/projCode/krovak',
        'proj4/projCode/cass',
        'proj4/projCode/laea',
        'proj4/projCode/merc',
        'proj4/projCode/aea',
        'proj4/projCode/gnom',
        'proj4/projCode/cea',
        'proj4/projCode/eqc',
        'proj4/projCode/poly',
        'proj4/projCode/nzmg',
        'proj4/projCode/mill',
        'proj4/projCode/sinu',
        'proj4/projCode/moll',
        'proj4/projCode/eqdc',
        'proj4/projCode/vandg',
        'proj4/projCode/aeqd',
        'proj4/projCode/longlat'
    ], function (t, e) {
        e.longlat = t('proj4/projCode/longlat'), e.identity = e.longlat, e.tmerc = t('proj4/projCode/tmerc'), e.utm = t('proj4/projCode/utm'), e.sterea = t('proj4/projCode/sterea'), e.somerc = t('proj4/projCode/somerc'), e.omerc = t('proj4/projCode/omerc'), e.lcc = t('proj4/projCode/lcc'), e.krovak = t('proj4/projCode/krovak'), e.cass = t('proj4/projCode/cass'), e.laea = t('proj4/projCode/laea'), e.merc = t('proj4/projCode/merc'), e.aea = t('proj4/projCode/aea'), e.gnom = t('proj4/projCode/gnom'), e.cea = t('proj4/projCode/cea'), e.eqc = t('proj4/projCode/eqc'), e.poly = t('proj4/projCode/poly'), e.nzmg = t('proj4/projCode/nzmg'), e.mill = t('proj4/projCode/mill'), e.sinu = t('proj4/projCode/sinu'), e.moll = t('proj4/projCode/moll'), e.eqdc = t('proj4/projCode/eqdc'), e.vandg = t('proj4/projCode/vandg'), e.aeqd = t('proj4/projCode/aeqd'), e.longlat = t('proj4/projCode/longlat'), e.identity = e.longlat;
    }), define('proj4/Proj', [
        'require',
        'proj4/extend',
        'proj4/common',
        'proj4/defs',
        'proj4/constants',
        'proj4/datum',
        'proj4/projections',
        'proj4/wkt',
        'proj4/projString'
    ], function (t) {
        var e = t('proj4/extend'), i = t('proj4/common'), s = t('proj4/defs'), r = t('proj4/constants'), a = t('proj4/datum'), n = t('proj4/projections'), h = t('proj4/wkt'), o = t('proj4/projString'), u = function l(t) {
                if (!(this instanceof l))
                    return new l(t);
                this.srsCodeInput = t;
                var i;
                'string' == typeof t ? t in s ? (this.deriveConstants(s[t]), e(this, s[t])) : t.indexOf('GEOGCS') >= 0 || t.indexOf('GEOCCS') >= 0 || t.indexOf('PROJCS') >= 0 || t.indexOf('LOCAL_CS') >= 0 ? (i = h(t), this.deriveConstants(i), e(this, i)) : '+' === t[0] && (i = o(t), this.deriveConstants(i), e(this, i)) : (this.deriveConstants(t), e(this, t)), this.initTransforms(this.projName);
            };
        return u.prototype = {
            initTransforms: function (t) {
                if (!(t in u.projections))
                    throw 'unknown projection ' + t;
                e(this, u.projections[t]), this.init();
            },
            deriveConstants: function (t) {
                if (t.nadgrids && 0 === t.nadgrids.length && (t.nadgrids = null), t.nadgrids) {
                    t.grids = t.nadgrids.split(',');
                    var s = null, n = t.grids.length;
                    if (n > 0)
                        for (var h = 0; n > h; h++) {
                            s = t.grids[h];
                            var o = s.split('@');
                            '' !== o[o.length - 1] && (t.grids[h] = {
                                mandatory: 1 === o.length,
                                name: o[o.length - 1],
                                grid: r.grids[o[o.length - 1]]
                            }, t.grids[h].mandatory && !t.grids[h].grid);
                        }
                }
                if (t.datumCode && 'none' !== t.datumCode) {
                    var u = r.Datum[t.datumCode];
                    u && (t.datum_params = u.towgs84 ? u.towgs84.split(',') : null, t.ellps = u.ellipse, t.datumName = u.datumName ? u.datumName : t.datumCode);
                }
                if (!t.a) {
                    var l = r.Ellipsoid[t.ellps] ? r.Ellipsoid[t.ellps] : r.Ellipsoid.WGS84;
                    e(t, l);
                }
                t.rf && !t.b && (t.b = (1 - 1 / t.rf) * t.a), (0 === t.rf || Math.abs(t.a - t.b) < i.EPSLN) && (t.sphere = !0, t.b = t.a), t.a2 = t.a * t.a, t.b2 = t.b * t.b, t.es = (t.a2 - t.b2) / t.a2, t.e = Math.sqrt(t.es), t.R_A && (t.a *= 1 - t.es * (i.SIXTH + t.es * (i.RA4 + t.es * i.RA6)), t.a2 = t.a * t.a, t.b2 = t.b * t.b, t.es = 0), t.ep2 = (t.a2 - t.b2) / t.b2, t.k0 || (t.k0 = 1), t.axis || (t.axis = 'enu'), t.datum = a(t);
            }
        }, u.projections = n, u;
    }), define('proj4/datum_transform', [
        'require',
        'proj4/common'
    ], function (t) {
        var e = t('proj4/common');
        return function (t, i, s) {
            function r(t) {
                return t === e.PJD_3PARAM || t === e.PJD_7PARAM;
            }
            var a, n, h;
            if (t.compare_datums(i))
                return s;
            if (t.datum_type === e.PJD_NODATUM || i.datum_type === e.PJD_NODATUM)
                return s;
            var o = t.a, u = t.es, l = i.a, f = i.es, c = t.datum_type;
            if (c === e.PJD_GRIDSHIFT)
                if (0 === this.apply_gridshift(t, 0, s))
                    t.a = e.SRS_WGS84_SEMIMAJOR, t.es = e.SRS_WGS84_ESQUARED;
                else {
                    if (!t.datum_params)
                        return t.a = o, t.es = t.es, s;
                    for (a = 1, n = 0, h = t.datum_params.length; h > n; n++)
                        a *= t.datum_params[n];
                    if (0 === a)
                        return t.a = o, t.es = t.es, s;
                    c = t.datum_params.length > 3 ? e.PJD_7PARAM : e.PJD_3PARAM;
                }
            return i.datum_type === e.PJD_GRIDSHIFT && (i.a = e.SRS_WGS84_SEMIMAJOR, i.es = e.SRS_WGS84_ESQUARED), (t.es !== i.es || t.a !== i.a || r(c) || r(i.datum_type)) && (t.geodetic_to_geocentric(s), r(t.datum_type) && t.geocentric_to_wgs84(s), r(i.datum_type) && i.geocentric_from_wgs84(s), i.geocentric_to_geodetic(s)), i.datum_type === e.PJD_GRIDSHIFT && this.apply_gridshift(i, 1, s), t.a = o, t.es = u, i.a = l, i.es = f, s;
        };
    }), define('proj4/adjust_axis', [], function () {
        return function (t, e, i) {
            var s, r, a, n = i.x, h = i.y, o = i.z || 0;
            for (a = 0; 3 > a; a++)
                if (!e || 2 !== a || void 0 !== i.z)
                    switch (0 === a ? (s = n, r = 'x') : 1 === a ? (s = h, r = 'y') : (s = o, r = 'z'), t.axis[a]) {
                    case 'e':
                        i[r] = s;
                        break;
                    case 'w':
                        i[r] = -s;
                        break;
                    case 'n':
                        i[r] = s;
                        break;
                    case 's':
                        i[r] = -s;
                        break;
                    case 'u':
                        void 0 !== i[r] && (i.z = s);
                        break;
                    case 'd':
                        void 0 !== i[r] && (i.z = -s);
                        break;
                    default:
                        return null;
                    }
            return i;
        };
    }), define('proj4/transform', [
        'require',
        'proj4/common',
        'proj4/datum_transform',
        'proj4/adjust_axis',
        'proj4/Proj'
    ], function (t) {
        var e = t('proj4/common'), i = t('proj4/datum_transform'), s = t('proj4/adjust_axis'), r = t('proj4/Proj');
        return function (t, a, n) {
            function h(t, i) {
                return (t.datum.datum_type === e.PJD_3PARAM || t.datum.datum_type === e.PJD_7PARAM) && 'WGS84' !== i.datumCode;
            }
            var o;
            return t.datum && a.datum && (h(t, a) || h(a, t)) && (o = new r('WGS84'), this.transform(t, o, n), t = o), 'enu' !== t.axis && s(t, !1, n), 'longlat' === t.projName ? (n.x *= e.D2R, n.y *= e.D2R) : (t.to_meter && (n.x *= t.to_meter, n.y *= t.to_meter), t.inverse(n)), t.from_greenwich && (n.x += t.from_greenwich), n = i(t.datum, a.datum, n), a.from_greenwich && (n.x -= a.from_greenwich), 'longlat' === a.projName ? (n.x *= e.R2D, n.y *= e.R2D) : (a.forward(n), a.to_meter && (n.x /= a.to_meter, n.y /= a.to_meter)), 'enu' !== a.axis && s(a, !0, n), n;
        };
    }), define('proj4/core', [
        'require',
        'proj4/Point',
        'proj4/Proj',
        'proj4/transform'
    ], function (t) {
        var e = t('proj4/Point'), i = t('proj4/Proj'), s = t('proj4/transform'), r = i('WGS84');
        return function (t, a, n) {
            var h = function (i, r, n) {
                var h;
                return Array.isArray(n) ? (h = s(i, r, e(n)), 3 === n.length ? [
                    h.x,
                    h.y,
                    h.z
                ] : [
                    h.x,
                    h.y
                ]) : s(t, a, n);
            };
            return t = t instanceof i ? t : i(t), 'undefined' == typeof a ? (a = t, t = r) : 'string' == typeof a ? a = i(a) : 'x' in a || Array.isArray(a) ? (n = a, a = t, t = r) : a = a instanceof i ? a : i(a), n ? h(t, a, n) : {
                forward: function (e) {
                    return h(t, a, e);
                },
                inverse: function (e) {
                    return h(a, t, e);
                }
            };
        };
    }), define('proj4', [
        'require',
        'proj4/core',
        'proj4/Proj',
        'proj4/Point',
        'proj4/defs',
        'proj4/transform',
        'proj4/mgrs'
    ], function (t) {
        var e = t('proj4/core');
        return e.defaultDatum = 'WGS84', e.Proj = t('proj4/Proj'), e.WGS84 = new e.Proj('WGS84'), e.Point = t('proj4/Point'), e.defs = t('proj4/defs'), e.transform = t('proj4/transform'), e.mgrs = t('proj4/mgrs'), e;
    }), define('jszip/support', [
        'require',
        'exports',
        'module'
    ], function (t, e) {
        if (e.base64 = !0, e.array = !0, e.string = !0, e.arraybuffer = 'undefined' != typeof ArrayBuffer && 'undefined' != typeof Uint8Array, e.nodebuffer = 'undefined' != typeof Buffer, e.uint8array = 'undefined' != typeof Uint8Array, 'undefined' == typeof ArrayBuffer)
            e.blob = !1;
        else {
            var i = new ArrayBuffer(0);
            try {
                e.blob = 0 === new Blob([i], { type: 'application/zip' }).size;
            } catch (s) {
                try {
                    var r = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder, a = new r();
                    a.append(i), e.blob = 0 === a.getBlob('application/zip').size;
                } catch (s) {
                    e.blob = !1;
                }
            }
        }
    }), define('jszip/flate/inflate', [], function () {
        var t = {};
        return function () {
            !function () {
                function t(t, e) {
                    var i = t.split('.'), s = h;
                    !(i[0] in s) && s.execScript && s.execScript('var ' + i[0]);
                    for (var r; i.length && (r = i.shift());)
                        i.length || e === n ? s = s[r] ? s[r] : s[r] = {} : s[r] = e;
                }
                function e(t) {
                    var e, i, s, r, a, n, h, u, l, f = t.length, c = 0, p = Number.POSITIVE_INFINITY;
                    for (u = 0; f > u; ++u)
                        t[u] > c && (c = t[u]), t[u] < p && (p = t[u]);
                    for (e = 1 << c, i = new (o ? Uint32Array : Array)(e), s = 1, r = 0, a = 2; c >= s;) {
                        for (u = 0; f > u; ++u)
                            if (t[u] === s) {
                                for (n = 0, h = r, l = 0; s > l; ++l)
                                    n = n << 1 | 1 & h, h >>= 1;
                                for (l = n; e > l; l += a)
                                    i[l] = s << 16 | u;
                                ++r;
                            }
                        ++s, r <<= 1, a <<= 1;
                    }
                    return [
                        i,
                        c,
                        p
                    ];
                }
                function i(t, e) {
                    switch (this.g = [], this.h = 32768, this.c = this.f = this.d = this.k = 0, this.input = o ? new Uint8Array(t) : t, this.l = !1, this.i = l, this.p = !1, (e || !(e = {})) && (e.index && (this.d = e.index), e.bufferSize && (this.h = e.bufferSize), e.bufferType && (this.i = e.bufferType), e.resize && (this.p = e.resize)), this.i) {
                    case u:
                        this.a = 32768, this.b = new (o ? Uint8Array : Array)(32768 + this.h + 258);
                        break;
                    case l:
                        this.a = 0, this.b = new (o ? Uint8Array : Array)(this.h), this.e = this.u, this.m = this.r, this.j = this.s;
                        break;
                    default:
                        throw Error('invalid inflate mode');
                    }
                }
                function s(t, e) {
                    for (var i, s = t.f, r = t.c, a = t.input, h = t.d; e > r;) {
                        if (i = a[h++], i === n)
                            throw Error('input buffer is broken');
                        s |= i << r, r += 8;
                    }
                    return i = s & (1 << e) - 1, t.f = s >>> e, t.c = r - e, t.d = h, i;
                }
                function r(t, e) {
                    for (var i, s, r, a = t.f, h = t.c, o = t.input, u = t.d, l = e[0], f = e[1]; f > h && (i = o[u++], i !== n);)
                        a |= i << h, h += 8;
                    return s = l[a & (1 << f) - 1], r = s >>> 16, t.f = a >> r, t.c = h - r, t.d = u, 65535 & s;
                }
                function a(t) {
                    function i(t, e, i) {
                        var a, n, h, o;
                        for (o = 0; t > o;)
                            switch (a = r(this, e)) {
                            case 16:
                                for (h = 3 + s(this, 2); h--;)
                                    i[o++] = n;
                                break;
                            case 17:
                                for (h = 3 + s(this, 3); h--;)
                                    i[o++] = 0;
                                n = 0;
                                break;
                            case 18:
                                for (h = 11 + s(this, 7); h--;)
                                    i[o++] = 0;
                                n = 0;
                                break;
                            default:
                                n = i[o++] = a;
                            }
                        return i;
                    }
                    var a, n, h, u, l = s(t, 5) + 257, f = s(t, 5) + 1, c = s(t, 4) + 4, p = new (o ? Uint8Array : Array)(d.length);
                    for (u = 0; c > u; ++u)
                        p[d[u]] = s(t, 3);
                    a = e(p), n = new (o ? Uint8Array : Array)(l), h = new (o ? Uint8Array : Array)(f), t.j(e(i.call(t, l, a, n)), e(i.call(t, f, a, h)));
                }
                var n = void 0, h = this, o = 'undefined' != typeof Uint8Array && 'undefined' != typeof Uint16Array && 'undefined' != typeof Uint32Array, u = 0, l = 1;
                i.prototype.t = function () {
                    for (; !this.l;) {
                        var t = s(this, 3);
                        switch (1 & t && (this.l = !0), t >>>= 1) {
                        case 0:
                            var e = this.input, i = this.d, r = this.b, h = this.a, f = n, c = n, p = n, d = r.length, m = n;
                            if (this.c = this.f = 0, f = e[i++], f === n)
                                throw Error('invalid uncompressed block header: LEN (first byte)');
                            if (c = f, f = e[i++], f === n)
                                throw Error('invalid uncompressed block header: LEN (second byte)');
                            if (c |= f << 8, f = e[i++], f === n)
                                throw Error('invalid uncompressed block header: NLEN (first byte)');
                            if (p = f, f = e[i++], f === n)
                                throw Error('invalid uncompressed block header: NLEN (second byte)');
                            if (p |= f << 8, c === ~p)
                                throw Error('invalid uncompressed block header: length verify');
                            if (i + c > e.length)
                                throw Error('input buffer is broken');
                            switch (this.i) {
                            case u:
                                for (; h + c > r.length;) {
                                    if (m = d - h, c -= m, o)
                                        r.set(e.subarray(i, i + m), h), h += m, i += m;
                                    else
                                        for (; m--;)
                                            r[h++] = e[i++];
                                    this.a = h, r = this.e(), h = this.a;
                                }
                                break;
                            case l:
                                for (; h + c > r.length;)
                                    r = this.e({ o: 2 });
                                break;
                            default:
                                throw Error('invalid inflate mode');
                            }
                            if (o)
                                r.set(e.subarray(i, i + c), h), h += c, i += c;
                            else
                                for (; c--;)
                                    r[h++] = e[i++];
                            this.d = i, this.a = h, this.b = r;
                            break;
                        case 1:
                            this.j(w, I);
                            break;
                        case 2:
                            a(this);
                            break;
                        default:
                            throw Error('unknown BTYPE: ' + t);
                        }
                    }
                    return this.m();
                };
                var f, c, p = [
                        16,
                        17,
                        18,
                        0,
                        8,
                        7,
                        9,
                        6,
                        10,
                        5,
                        11,
                        4,
                        12,
                        3,
                        13,
                        2,
                        14,
                        1,
                        15
                    ], d = o ? new Uint16Array(p) : p, m = [
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9,
                        10,
                        11,
                        13,
                        15,
                        17,
                        19,
                        23,
                        27,
                        31,
                        35,
                        43,
                        51,
                        59,
                        67,
                        83,
                        99,
                        115,
                        131,
                        163,
                        195,
                        227,
                        258,
                        258,
                        258
                    ], y = o ? new Uint16Array(m) : m, M = [
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        0,
                        1,
                        1,
                        1,
                        1,
                        2,
                        2,
                        2,
                        2,
                        3,
                        3,
                        3,
                        3,
                        4,
                        4,
                        4,
                        4,
                        5,
                        5,
                        5,
                        5,
                        0,
                        0,
                        0
                    ], g = o ? new Uint8Array(M) : M, _ = [
                        1,
                        2,
                        3,
                        4,
                        5,
                        7,
                        9,
                        13,
                        17,
                        25,
                        33,
                        49,
                        65,
                        97,
                        129,
                        193,
                        257,
                        385,
                        513,
                        769,
                        1025,
                        1537,
                        2049,
                        3073,
                        4097,
                        6145,
                        8193,
                        12289,
                        16385,
                        24577
                    ], b = o ? new Uint16Array(_) : _, v = [
                        0,
                        0,
                        0,
                        0,
                        1,
                        1,
                        2,
                        2,
                        3,
                        3,
                        4,
                        4,
                        5,
                        5,
                        6,
                        6,
                        7,
                        7,
                        8,
                        8,
                        9,
                        9,
                        10,
                        10,
                        11,
                        11,
                        12,
                        12,
                        13,
                        13
                    ], j = o ? new Uint8Array(v) : v, x = new (o ? Uint8Array : Array)(288);
                for (f = 0, c = x.length; c > f; ++f)
                    x[f] = 143 >= f ? 8 : 255 >= f ? 9 : 279 >= f ? 7 : 8;
                var A, C, w = e(x), S = new (o ? Uint8Array : Array)(30);
                for (A = 0, C = S.length; C > A; ++A)
                    S[A] = 5;
                var I = e(S);
                i.prototype.j = function (t, e) {
                    var i = this.b, a = this.a;
                    this.n = t;
                    for (var n, h, o, u, l = i.length - 258; 256 !== (n = r(this, t));)
                        if (256 > n)
                            a >= l && (this.a = a, i = this.e(), a = this.a), i[a++] = n;
                        else
                            for (h = n - 257, u = y[h], 0 < g[h] && (u += s(this, g[h])), n = r(this, e), o = b[n], 0 < j[n] && (o += s(this, j[n])), a >= l && (this.a = a, i = this.e(), a = this.a); u--;)
                                i[a] = i[a++ - o];
                    for (; 8 <= this.c;)
                        this.c -= 8, this.d--;
                    this.a = a;
                }, i.prototype.s = function (t, e) {
                    var i = this.b, a = this.a;
                    this.n = t;
                    for (var n, h, o, u, l = i.length; 256 !== (n = r(this, t));)
                        if (256 > n)
                            a >= l && (i = this.e(), l = i.length), i[a++] = n;
                        else
                            for (h = n - 257, u = y[h], 0 < g[h] && (u += s(this, g[h])), n = r(this, e), o = b[n], 0 < j[n] && (o += s(this, j[n])), a + u > l && (i = this.e(), l = i.length); u--;)
                                i[a] = i[a++ - o];
                    for (; 8 <= this.c;)
                        this.c -= 8, this.d--;
                    this.a = a;
                }, i.prototype.e = function () {
                    var t, e, i = new (o ? Uint8Array : Array)(this.a - 32768), s = this.a - 32768, r = this.b;
                    if (o)
                        i.set(r.subarray(32768, i.length));
                    else
                        for (t = 0, e = i.length; e > t; ++t)
                            i[t] = r[t + 32768];
                    if (this.g.push(i), this.k += i.length, o)
                        r.set(r.subarray(s, s + 32768));
                    else
                        for (t = 0; 32768 > t; ++t)
                            r[t] = r[s + t];
                    return this.a = 32768, r;
                }, i.prototype.u = function (t) {
                    var e, i, s, r, a = 0 | this.input.length / this.d + 1, n = this.input, h = this.b;
                    return t && ('number' == typeof t.o && (a = t.o), 'number' == typeof t.q && (a += t.q)), 2 > a ? (i = (n.length - this.d) / this.n[2], r = 0 | 258 * (i / 2), s = r < h.length ? h.length + r : h.length << 1) : s = h.length * a, o ? (e = new Uint8Array(s), e.set(h)) : e = h, this.b = e;
                }, i.prototype.m = function () {
                    var t, e, i, s, r, a = 0, n = this.b, h = this.g, u = new (o ? Uint8Array : Array)(this.k + (this.a - 32768));
                    if (0 === h.length)
                        return o ? this.b.subarray(32768, this.a) : this.b.slice(32768, this.a);
                    for (e = 0, i = h.length; i > e; ++e)
                        for (t = h[e], s = 0, r = t.length; r > s; ++s)
                            u[a++] = t[s];
                    for (e = 32768, i = this.a; i > e; ++e)
                        u[a++] = n[e];
                    return this.g = [], this.buffer = u;
                }, i.prototype.r = function () {
                    var t, e = this.a;
                    return o ? this.p ? (t = new Uint8Array(e), t.set(this.b.subarray(0, e))) : t = this.b.subarray(0, e) : (this.b.length > e && (this.b.length = e), t = this.b), this.buffer = t;
                }, t('Zlib.RawInflate', i), t('Zlib.RawInflate.prototype.decompress', i.prototype.t);
                var P, E, k, N, z = {
                        ADAPTIVE: l,
                        BLOCK: u
                    };
                if (Object.keys)
                    P = Object.keys(z);
                else
                    for (E in P = [], k = 0, z)
                        P[k++] = E;
                for (k = 0, N = P.length; N > k; ++k)
                    E = P[k], t('Zlib.RawInflate.BufferType.' + E, z[E]);
            }.call(this);
        }.call(t), function (e) {
            var i = new t.Zlib.RawInflate(new Uint8Array(e));
            return i.decompress();
        };
    }), define('jszip/flate/deflate', [], function () {
        var t = {};
        return function () {
            !function () {
                function t(t, e) {
                    var i = t.split('.'), s = p;
                    !(i[0] in s) && s.execScript && s.execScript('var ' + i[0]);
                    for (var r; i.length && (r = i.shift());)
                        i.length || e === f ? s = s[r] ? s[r] : s[r] = {} : s[r] = e;
                }
                function e(t, e) {
                    if (this.index = 'number' == typeof e ? e : 0, this.d = 0, this.buffer = t instanceof (d ? Uint8Array : Array) ? t : new (d ? Uint8Array : Array)(32768), 2 * this.buffer.length <= this.index)
                        throw Error('invalid index');
                    this.buffer.length <= this.index && i(this);
                }
                function i(t) {
                    var e, i = t.buffer, s = i.length, r = new (d ? Uint8Array : Array)(s << 1);
                    if (d)
                        r.set(i);
                    else
                        for (e = 0; s > e; ++e)
                            r[e] = i[e];
                    return t.buffer = r;
                }
                function s(t) {
                    this.buffer = new (d ? Uint16Array : Array)(2 * t), this.length = 0;
                }
                function r(t, e) {
                    this.e = j, this.f = 0, this.input = d && t instanceof Array ? new Uint8Array(t) : t, this.c = 0, e && (e.lazy && (this.f = e.lazy), 'number' == typeof e.compressionType && (this.e = e.compressionType), e.outputBuffer && (this.b = d && e.outputBuffer instanceof Array ? new Uint8Array(e.outputBuffer) : e.outputBuffer), 'number' == typeof e.outputIndex && (this.c = e.outputIndex)), this.b || (this.b = new (d ? Uint8Array : Array)(32768));
                }
                function a(t, e) {
                    this.length = t, this.g = e;
                }
                function n(t, e) {
                    function i(t, e) {
                        var i, s = t.g, r = [], a = 0;
                        i = C[t.length], r[a++] = 65535 & i, r[a++] = 255 & i >> 16, r[a++] = i >> 24;
                        var n;
                        switch (c) {
                        case 1 === s:
                            n = [
                                0,
                                s - 1,
                                0
                            ];
                            break;
                        case 2 === s:
                            n = [
                                1,
                                s - 2,
                                0
                            ];
                            break;
                        case 3 === s:
                            n = [
                                2,
                                s - 3,
                                0
                            ];
                            break;
                        case 4 === s:
                            n = [
                                3,
                                s - 4,
                                0
                            ];
                            break;
                        case 6 >= s:
                            n = [
                                4,
                                s - 5,
                                1
                            ];
                            break;
                        case 8 >= s:
                            n = [
                                5,
                                s - 7,
                                1
                            ];
                            break;
                        case 12 >= s:
                            n = [
                                6,
                                s - 9,
                                2
                            ];
                            break;
                        case 16 >= s:
                            n = [
                                7,
                                s - 13,
                                2
                            ];
                            break;
                        case 24 >= s:
                            n = [
                                8,
                                s - 17,
                                3
                            ];
                            break;
                        case 32 >= s:
                            n = [
                                9,
                                s - 25,
                                3
                            ];
                            break;
                        case 48 >= s:
                            n = [
                                10,
                                s - 33,
                                4
                            ];
                            break;
                        case 64 >= s:
                            n = [
                                11,
                                s - 49,
                                4
                            ];
                            break;
                        case 96 >= s:
                            n = [
                                12,
                                s - 65,
                                5
                            ];
                            break;
                        case 128 >= s:
                            n = [
                                13,
                                s - 97,
                                5
                            ];
                            break;
                        case 192 >= s:
                            n = [
                                14,
                                s - 129,
                                6
                            ];
                            break;
                        case 256 >= s:
                            n = [
                                15,
                                s - 193,
                                6
                            ];
                            break;
                        case 384 >= s:
                            n = [
                                16,
                                s - 257,
                                7
                            ];
                            break;
                        case 512 >= s:
                            n = [
                                17,
                                s - 385,
                                7
                            ];
                            break;
                        case 768 >= s:
                            n = [
                                18,
                                s - 513,
                                8
                            ];
                            break;
                        case 1024 >= s:
                            n = [
                                19,
                                s - 769,
                                8
                            ];
                            break;
                        case 1536 >= s:
                            n = [
                                20,
                                s - 1025,
                                9
                            ];
                            break;
                        case 2048 >= s:
                            n = [
                                21,
                                s - 1537,
                                9
                            ];
                            break;
                        case 3072 >= s:
                            n = [
                                22,
                                s - 2049,
                                10
                            ];
                            break;
                        case 4096 >= s:
                            n = [
                                23,
                                s - 3073,
                                10
                            ];
                            break;
                        case 6144 >= s:
                            n = [
                                24,
                                s - 4097,
                                11
                            ];
                            break;
                        case 8192 >= s:
                            n = [
                                25,
                                s - 6145,
                                11
                            ];
                            break;
                        case 12288 >= s:
                            n = [
                                26,
                                s - 8193,
                                12
                            ];
                            break;
                        case 16384 >= s:
                            n = [
                                27,
                                s - 12289,
                                12
                            ];
                            break;
                        case 24576 >= s:
                            n = [
                                28,
                                s - 16385,
                                13
                            ];
                            break;
                        case 32768 >= s:
                            n = [
                                29,
                                s - 24577,
                                13
                            ];
                            break;
                        default:
                            throw 'invalid distance';
                        }
                        i = n, r[a++] = i[0], r[a++] = i[1], r[a++] = i[2];
                        var h, o;
                        for (h = 0, o = r.length; o > h; ++h)
                            M[g++] = r[h];
                        b[r[0]]++, v[r[3]]++, _ = t.length + e - 1, p = null;
                    }
                    var s, r, a, n, o, u, l, p, m, y = {}, M = d ? new Uint16Array(2 * e.length) : [], g = 0, _ = 0, b = new (d ? Uint32Array : Array)(286), v = new (d ? Uint32Array : Array)(30), j = t.f;
                    if (!d) {
                        for (a = 0; 285 >= a;)
                            b[a++] = 0;
                        for (a = 0; 29 >= a;)
                            v[a++] = 0;
                    }
                    for (b[256] = 1, s = 0, r = e.length; r > s; ++s) {
                        for (a = o = 0, n = 3; n > a && s + a !== r; ++a)
                            o = o << 8 | e[s + a];
                        if (y[o] === f && (y[o] = []), u = y[o], !(0 < _--)) {
                            for (; 0 < u.length && 32768 < s - u[0];)
                                u.shift();
                            if (s + 3 >= r) {
                                for (p && i(p, -1), a = 0, n = r - s; n > a; ++a)
                                    m = e[s + a], M[g++] = m, ++b[m];
                                break;
                            }
                            0 < u.length ? (l = h(e, s, u), p ? p.length < l.length ? (m = e[s - 1], M[g++] = m, ++b[m], i(l, 0)) : i(p, -1) : l.length < j ? p = l : i(l, 0)) : p ? i(p, -1) : (m = e[s], M[g++] = m, ++b[m]);
                        }
                        u.push(s);
                    }
                    return M[g++] = 256, b[256]++, t.j = b, t.i = v, d ? M.subarray(0, g) : M;
                }
                function h(t, e, i) {
                    var s, r, n, h, o, u, l = 0, f = t.length;
                    h = 0, u = i.length;
                    t:
                        for (; u > h; h++) {
                            if (s = i[u - h - 1], n = 3, l > 3) {
                                for (o = l; o > 3; o--)
                                    if (t[s + o - 1] !== t[e + o - 1])
                                        continue t;
                                n = l;
                            }
                            for (; 258 > n && f > e + n && t[s + n] === t[e + n];)
                                ++n;
                            if (n > l && (r = s, l = n), 258 === n)
                                break;
                        }
                    return new a(l, e - r);
                }
                function o(t, e) {
                    var i, r, a, n, h, o = t.length, l = new s(572), f = new (d ? Uint8Array : Array)(o);
                    if (!d)
                        for (n = 0; o > n; n++)
                            f[n] = 0;
                    for (n = 0; o > n; ++n)
                        0 < t[n] && l.push(n, t[n]);
                    if (i = Array(l.length / 2), r = new (d ? Uint32Array : Array)(l.length / 2), 1 === i.length)
                        return f[l.pop().index] = 1, f;
                    for (n = 0, h = l.length / 2; h > n; ++n)
                        i[n] = l.pop(), r[n] = i[n].value;
                    for (a = u(r, r.length, e), n = 0, h = i.length; h > n; ++n)
                        f[i[n].index] = a[n];
                    return f;
                }
                function u(t, e, i) {
                    function s(t) {
                        var i = p[t][m[t]];
                        i === e ? (s(t + 1), s(t + 1)) : --f[i], ++m[t];
                    }
                    var r, a, n, h, o, u = new (d ? Uint16Array : Array)(i), l = new (d ? Uint8Array : Array)(i), f = new (d ? Uint8Array : Array)(e), c = Array(i), p = Array(i), m = Array(i), y = (1 << i) - e, M = 1 << i - 1;
                    for (u[i - 1] = e, a = 0; i > a; ++a)
                        M > y ? l[a] = 0 : (l[a] = 1, y -= M), y <<= 1, u[i - 2 - a] = (0 | u[i - 1 - a] / 2) + e;
                    for (u[0] = l[0], c[0] = Array(u[0]), p[0] = Array(u[0]), a = 1; i > a; ++a)
                        u[a] > 2 * u[a - 1] + l[a] && (u[a] = 2 * u[a - 1] + l[a]), c[a] = Array(u[a]), p[a] = Array(u[a]);
                    for (r = 0; e > r; ++r)
                        f[r] = i;
                    for (n = 0; n < u[i - 1]; ++n)
                        c[i - 1][n] = t[n], p[i - 1][n] = n;
                    for (r = 0; i > r; ++r)
                        m[r] = 0;
                    for (1 === l[i - 1] && (--f[0], ++m[i - 1]), a = i - 2; a >= 0; --a) {
                        for (h = r = 0, o = m[a + 1], n = 0; n < u[a]; n++)
                            h = c[a + 1][o] + c[a + 1][o + 1], h > t[r] ? (c[a][n] = h, p[a][n] = e, o += 2) : (c[a][n] = t[r], p[a][n] = r, ++r);
                        m[a] = 0, 1 === l[a] && s(a);
                    }
                    return f;
                }
                function l(t) {
                    var e, i, s, r, a = new (d ? Uint16Array : Array)(t.length), n = [], h = [], o = 0;
                    for (e = 0, i = t.length; i > e; e++)
                        n[t[e]] = (0 | n[t[e]]) + 1;
                    for (e = 1, i = 16; i >= e; e++)
                        h[e] = o, o += 0 | n[e], o <<= 1;
                    for (e = 0, i = t.length; i > e; e++)
                        for (o = h[t[e]], h[t[e]] += 1, s = a[e] = 0, r = t[e]; r > s; s++)
                            a[e] = a[e] << 1 | 1 & o, o >>>= 1;
                    return a;
                }
                var f = void 0, c = !0, p = this, d = 'undefined' != typeof Uint8Array && 'undefined' != typeof Uint16Array && 'undefined' != typeof Uint32Array;
                e.prototype.a = function (t, e, s) {
                    var r, a = this.buffer, n = this.index, h = this.d, o = a[n];
                    if (s && e > 1 && (t = e > 8 ? (b[255 & t] << 24 | b[255 & t >>> 8] << 16 | b[255 & t >>> 16] << 8 | b[255 & t >>> 24]) >> 32 - e : b[t] >> 8 - e), 8 > e + h)
                        o = o << e | t, h += e;
                    else
                        for (r = 0; e > r; ++r)
                            o = o << 1 | 1 & t >> e - r - 1, 8 === ++h && (h = 0, a[n++] = b[o], o = 0, n === a.length && (a = i(this)));
                    a[n] = o, this.buffer = a, this.d = h, this.index = n;
                }, e.prototype.finish = function () {
                    var t, e = this.buffer, i = this.index;
                    return 0 < this.d && (e[i] <<= 8 - this.d, e[i] = b[e[i]], i++), d ? t = e.subarray(0, i) : (e.length = i, t = e), t;
                };
                var m, y = new (d ? Uint8Array : Array)(256);
                for (m = 0; 256 > m; ++m) {
                    for (var M = m, g = M, _ = 7, M = M >>> 1; M; M >>>= 1)
                        g <<= 1, g |= 1 & M, --_;
                    y[m] = (255 & g << _) >>> 0;
                }
                var b = y;
                s.prototype.getParent = function (t) {
                    return 2 * (0 | (t - 2) / 4);
                }, s.prototype.push = function (t, e) {
                    var i, s, r, a = this.buffer;
                    for (i = this.length, a[this.length++] = e, a[this.length++] = t; i > 0 && (s = this.getParent(i), a[i] > a[s]);)
                        r = a[i], a[i] = a[s], a[s] = r, r = a[i + 1], a[i + 1] = a[s + 1], a[s + 1] = r, i = s;
                    return this.length;
                }, s.prototype.pop = function () {
                    var t, e, i, s, r, a = this.buffer;
                    for (e = a[0], t = a[1], this.length -= 2, a[0] = a[this.length], a[1] = a[this.length + 1], r = 0; (s = 2 * r + 2, !(s >= this.length)) && (s + 2 < this.length && a[s + 2] > a[s] && (s += 2), a[s] > a[r]);)
                        i = a[r], a[r] = a[s], a[s] = i, i = a[r + 1], a[r + 1] = a[s + 1], a[s + 1] = i, r = s;
                    return {
                        index: t,
                        value: e,
                        length: this.length
                    };
                };
                var v, j = 2, x = [];
                for (v = 0; 288 > v; v++)
                    switch (c) {
                    case 143 >= v:
                        x.push([
                            v + 48,
                            8
                        ]);
                        break;
                    case 255 >= v:
                        x.push([
                            v - 144 + 400,
                            9
                        ]);
                        break;
                    case 279 >= v:
                        x.push([
                            v - 256 + 0,
                            7
                        ]);
                        break;
                    case 287 >= v:
                        x.push([
                            v - 280 + 192,
                            8
                        ]);
                        break;
                    default:
                        throw 'invalid literal: ' + v;
                    }
                r.prototype.h = function () {
                    var t, i, s, r, a = this.input;
                    switch (this.e) {
                    case 0:
                        for (s = 0, r = a.length; r > s;) {
                            i = d ? a.subarray(s, s + 65535) : a.slice(s, s + 65535), s += i.length;
                            var h = i, u = s === r, p = f, m = f, y = f, M = f, g = f, _ = this.b, b = this.c;
                            if (d) {
                                for (_ = new Uint8Array(this.b.buffer); _.length <= b + h.length + 5;)
                                    _ = new Uint8Array(_.length << 1);
                                _.set(this.b);
                            }
                            if (p = u ? 1 : 0, _[b++] = 0 | p, m = h.length, y = 65535 & ~m + 65536, _[b++] = 255 & m, _[b++] = 255 & m >>> 8, _[b++] = 255 & y, _[b++] = 255 & y >>> 8, d)
                                _.set(h, b), b += h.length, _ = _.subarray(0, b);
                            else {
                                for (M = 0, g = h.length; g > M; ++M)
                                    _[b++] = h[M];
                                _.length = b;
                            }
                            this.c = b, this.b = _;
                        }
                        break;
                    case 1:
                        var v = new e(d ? new Uint8Array(this.b.buffer) : this.b, this.c);
                        v.a(1, 1, c), v.a(1, 2, c);
                        var A, C, w, S = n(this, a);
                        for (A = 0, C = S.length; C > A; A++)
                            if (w = S[A], e.prototype.a.apply(v, x[w]), w > 256)
                                v.a(S[++A], S[++A], c), v.a(S[++A], 5), v.a(S[++A], S[++A], c);
                            else if (256 === w)
                                break;
                        this.b = v.finish(), this.c = this.b.length;
                        break;
                    case j:
                        var I, P, E, k, N, z, L, O, R, T, q, D, F, U, B, G = new e(d ? new Uint8Array(this.b.buffer) : this.b, this.c), H = [
                                16,
                                17,
                                18,
                                0,
                                8,
                                7,
                                9,
                                6,
                                10,
                                5,
                                11,
                                4,
                                12,
                                3,
                                13,
                                2,
                                14,
                                1,
                                15
                            ], J = Array(19);
                        for (I = j, G.a(1, 1, c), G.a(I, 2, c), P = n(this, a), z = o(this.j, 15), L = l(z), O = o(this.i, 7), R = l(O), E = 286; E > 257 && 0 === z[E - 1]; E--);
                        for (k = 30; k > 1 && 0 === O[k - 1]; k--);
                        var W, Z, Q, V, X, K, Y = E, $ = k, te = new (d ? Uint32Array : Array)(Y + $), ee = new (d ? Uint32Array : Array)(316), ie = new (d ? Uint8Array : Array)(19);
                        for (W = Z = 0; Y > W; W++)
                            te[Z++] = z[W];
                        for (W = 0; $ > W; W++)
                            te[Z++] = O[W];
                        if (!d)
                            for (W = 0, V = ie.length; V > W; ++W)
                                ie[W] = 0;
                        for (W = X = 0, V = te.length; V > W; W += Z) {
                            for (Z = 1; V > W + Z && te[W + Z] === te[W]; ++Z);
                            if (Q = Z, 0 === te[W])
                                if (3 > Q)
                                    for (; 0 < Q--;)
                                        ee[X++] = 0, ie[0]++;
                                else
                                    for (; Q > 0;)
                                        K = 138 > Q ? Q : 138, K > Q - 3 && Q > K && (K = Q - 3), 10 >= K ? (ee[X++] = 17, ee[X++] = K - 3, ie[17]++) : (ee[X++] = 18, ee[X++] = K - 11, ie[18]++), Q -= K;
                            else if (ee[X++] = te[W], ie[te[W]]++, Q--, 3 > Q)
                                for (; 0 < Q--;)
                                    ee[X++] = te[W], ie[te[W]]++;
                            else
                                for (; Q > 0;)
                                    K = 6 > Q ? Q : 6, K > Q - 3 && Q > K && (K = Q - 3), ee[X++] = 16, ee[X++] = K - 3, ie[16]++, Q -= K;
                        }
                        for (t = d ? ee.subarray(0, X) : ee.slice(0, X), T = o(ie, 7), U = 0; 19 > U; U++)
                            J[U] = T[H[U]];
                        for (N = 19; N > 4 && 0 === J[N - 1]; N--);
                        for (q = l(T), G.a(E - 257, 5, c), G.a(k - 1, 5, c), G.a(N - 4, 4, c), U = 0; N > U; U++)
                            G.a(J[U], 3, c);
                        for (U = 0, B = t.length; B > U; U++)
                            if (D = t[U], G.a(q[D], T[D], c), D >= 16) {
                                switch (U++, D) {
                                case 16:
                                    F = 2;
                                    break;
                                case 17:
                                    F = 3;
                                    break;
                                case 18:
                                    F = 7;
                                    break;
                                default:
                                    throw 'invalid code: ' + D;
                                }
                                G.a(t[U], F, c);
                            }
                        var se, re, ae, ne, he, oe, ue, le, fe = [
                                L,
                                z
                            ], ce = [
                                R,
                                O
                            ];
                        for (he = fe[0], oe = fe[1], ue = ce[0], le = ce[1], se = 0, re = P.length; re > se; ++se)
                            if (ae = P[se], G.a(he[ae], oe[ae], c), ae > 256)
                                G.a(P[++se], P[++se], c), ne = P[++se], G.a(ue[ne], le[ne], c), G.a(P[++se], P[++se], c);
                            else if (256 === ae)
                                break;
                        this.b = G.finish(), this.c = this.b.length;
                        break;
                    default:
                        throw 'invalid compression type';
                    }
                    return this.b;
                };
                var A = function () {
                        function t(t) {
                            switch (c) {
                            case 3 === t:
                                return [
                                    257,
                                    t - 3,
                                    0
                                ];
                            case 4 === t:
                                return [
                                    258,
                                    t - 4,
                                    0
                                ];
                            case 5 === t:
                                return [
                                    259,
                                    t - 5,
                                    0
                                ];
                            case 6 === t:
                                return [
                                    260,
                                    t - 6,
                                    0
                                ];
                            case 7 === t:
                                return [
                                    261,
                                    t - 7,
                                    0
                                ];
                            case 8 === t:
                                return [
                                    262,
                                    t - 8,
                                    0
                                ];
                            case 9 === t:
                                return [
                                    263,
                                    t - 9,
                                    0
                                ];
                            case 10 === t:
                                return [
                                    264,
                                    t - 10,
                                    0
                                ];
                            case 12 >= t:
                                return [
                                    265,
                                    t - 11,
                                    1
                                ];
                            case 14 >= t:
                                return [
                                    266,
                                    t - 13,
                                    1
                                ];
                            case 16 >= t:
                                return [
                                    267,
                                    t - 15,
                                    1
                                ];
                            case 18 >= t:
                                return [
                                    268,
                                    t - 17,
                                    1
                                ];
                            case 22 >= t:
                                return [
                                    269,
                                    t - 19,
                                    2
                                ];
                            case 26 >= t:
                                return [
                                    270,
                                    t - 23,
                                    2
                                ];
                            case 30 >= t:
                                return [
                                    271,
                                    t - 27,
                                    2
                                ];
                            case 34 >= t:
                                return [
                                    272,
                                    t - 31,
                                    2
                                ];
                            case 42 >= t:
                                return [
                                    273,
                                    t - 35,
                                    3
                                ];
                            case 50 >= t:
                                return [
                                    274,
                                    t - 43,
                                    3
                                ];
                            case 58 >= t:
                                return [
                                    275,
                                    t - 51,
                                    3
                                ];
                            case 66 >= t:
                                return [
                                    276,
                                    t - 59,
                                    3
                                ];
                            case 82 >= t:
                                return [
                                    277,
                                    t - 67,
                                    4
                                ];
                            case 98 >= t:
                                return [
                                    278,
                                    t - 83,
                                    4
                                ];
                            case 114 >= t:
                                return [
                                    279,
                                    t - 99,
                                    4
                                ];
                            case 130 >= t:
                                return [
                                    280,
                                    t - 115,
                                    4
                                ];
                            case 162 >= t:
                                return [
                                    281,
                                    t - 131,
                                    5
                                ];
                            case 194 >= t:
                                return [
                                    282,
                                    t - 163,
                                    5
                                ];
                            case 226 >= t:
                                return [
                                    283,
                                    t - 195,
                                    5
                                ];
                            case 257 >= t:
                                return [
                                    284,
                                    t - 227,
                                    5
                                ];
                            case 258 === t:
                                return [
                                    285,
                                    t - 258,
                                    0
                                ];
                            default:
                                throw 'invalid length: ' + t;
                            }
                        }
                        var e, i, s = [];
                        for (e = 3; 258 >= e; e++)
                            i = t(e), s[e] = i[2] << 24 | i[1] << 16 | i[0];
                        return s;
                    }(), C = d ? new Uint32Array(A) : A;
                t('Zlib.RawDeflate', r), t('Zlib.RawDeflate.prototype.compress', r.prototype.h);
                var w, S, I, P, E = {
                        NONE: 0,
                        FIXED: 1,
                        DYNAMIC: j
                    };
                if (Object.keys)
                    w = Object.keys(E);
                else
                    for (S in w = [], I = 0, E)
                        w[I++] = S;
                for (I = 0, P = w.length; P > I; ++I)
                    S = w[I], t('Zlib.RawDeflate.CompressionType.' + S, E[S]);
            }.call(this);
        }.call(t), function (e) {
            var i = new t.Zlib.RawDeflate(e);
            return i.compress();
        };
    }), define('jszip/flate/main', [
        'require',
        'exports',
        'module',
        'jszip/flate/inflate',
        'jszip/flate/deflate'
    ], function (t, e) {
        var i = 'undefined' != typeof Uint8Array && 'undefined' != typeof Uint16Array && 'undefined' != typeof Uint32Array;
        e.magic = '\b\0', e.uncompress = t('jszip/flate/inflate'), e.uncompressInputType = i ? 'uint8array' : 'array', e.compress = t('jszip/flate/deflate'), e.compressInputType = i ? 'uint8array' : 'array';
    }), define('jszip/compressions', [
        'require',
        'jszip/flate/main'
    ], function (t) {
        return {
            STORE: {
                magic: '\0\0',
                compress: function (t) {
                    return t;
                },
                uncompress: function (t) {
                    return t;
                },
                compressInputType: null,
                uncompressInputType: null
            },
            DEFLATE: t('jszip/flate/main')
        };
    }), define('jszip/utils', [
        'require',
        'exports',
        'module',
        'jszip/support',
        'jszip/compressions'
    ], function (t, e) {
        function i(t) {
            return t;
        }
        function s(t, e) {
            for (var i = 0; i < t.length; ++i)
                e[i] = 255 & t.charCodeAt(i);
            return e;
        }
        function r(t) {
            for (var i = 65536, s = [], r = t.length, a = e.getTypeOf(t), n = 0; r > n && i > 1;)
                try {
                    'array' === a || 'nodebuffer' === a ? s.push(String.fromCharCode.apply(null, t.slice(n, Math.max(n + i, r)))) : s.push(String.fromCharCode.apply(null, t.subarray(n, n + i))), n += i;
                } catch (h) {
                    i = Math.floor(i / 2);
                }
            return s.join('');
        }
        function a(t, e) {
            for (var i = 0; i < t.length; i++)
                e[i] = t[i];
            return e;
        }
        var n = t('jszip/support'), h = t('jszip/compressions');
        e.string2binary = function (t) {
            for (var e = '', i = 0; i < t.length; i++)
                e += String.fromCharCode(255 & t.charCodeAt(i));
            return e;
        }, e.string2Uint8Array = function (t) {
            return e.transformTo('uint8array', t);
        }, e.uint8Array2String = function (t) {
            return e.transformTo('string', t);
        }, e.string2Blob = function (t) {
            var i = e.transformTo('arraybuffer', t);
            return e.arrayBuffer2Blob(i);
        }, e.arrayBuffer2Blob = function (t) {
            e.checkSupport('blob');
            try {
                return new Blob([t], { type: 'application/zip' });
            } catch (i) {
                try {
                    var s = new (window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder)();
                    return s.append(t), s.getBlob('application/zip');
                } catch (i) {
                    throw new Error('Bug : can\'t construct the Blob.');
                }
            }
        };
        var o = {};
        o.string = {
            string: i,
            array: function (t) {
                return s(t, new Array(t.length));
            },
            arraybuffer: function (t) {
                return o.string.uint8array(t).buffer;
            },
            uint8array: function (t) {
                return s(t, new Uint8Array(t.length));
            },
            nodebuffer: function (t) {
                return s(t, new Buffer(t.length));
            }
        }, o.array = {
            string: r,
            array: i,
            arraybuffer: function (t) {
                return new Uint8Array(t).buffer;
            },
            uint8array: function (t) {
                return new Uint8Array(t);
            },
            nodebuffer: function (t) {
                return new Buffer(t);
            }
        }, o.arraybuffer = {
            string: function (t) {
                return r(new Uint8Array(t));
            },
            array: function (t) {
                return a(new Uint8Array(t), new Array(t.byteLength));
            },
            arraybuffer: i,
            uint8array: function (t) {
                return new Uint8Array(t);
            },
            nodebuffer: function (t) {
                return new Buffer(new Uint8Array(t));
            }
        }, o.uint8array = {
            string: r,
            array: function (t) {
                return a(t, new Array(t.length));
            },
            arraybuffer: function (t) {
                return t.buffer;
            },
            uint8array: i,
            nodebuffer: function (t) {
                return new Buffer(t);
            }
        }, o.nodebuffer = {
            string: r,
            array: function (t) {
                return a(t, new Array(t.length));
            },
            arraybuffer: function (t) {
                return o.nodebuffer.uint8array(t).buffer;
            },
            uint8array: function (t) {
                return a(t, new Uint8Array(t.length));
            },
            nodebuffer: i
        }, e.transformTo = function (t, i) {
            if (i || (i = ''), !t)
                return i;
            e.checkSupport(t);
            var s = e.getTypeOf(i), r = o[s][t](i);
            return r;
        }, e.getTypeOf = function (t) {
            return 'string' == typeof t ? 'string' : t instanceof Array ? 'array' : n.nodebuffer && Buffer.isBuffer(t) ? 'nodebuffer' : n.uint8array && t instanceof Uint8Array ? 'uint8array' : n.arraybuffer && t instanceof ArrayBuffer ? 'arraybuffer' : void 0;
        }, e.checkSupport = function (t) {
            var e = n[t.toLowerCase()];
            if (!e)
                throw new Error(t + ' is not supported by this browser');
        }, e.MAX_VALUE_16BITS = 65535, e.MAX_VALUE_32BITS = -1, e.pretty = function (t) {
            var e, i, s = '';
            for (i = 0; i < (t || '').length; i++)
                e = t.charCodeAt(i), s += '\\x' + (16 > e ? '0' : '') + e.toString(16).toUpperCase();
            return s;
        }, e.findCompression = function (t) {
            for (var e in h)
                if (h.hasOwnProperty(e) && h[e].magic === t)
                    return h[e];
            return null;
        };
    }), define('jszip/signature', [], function () {
        return {
            LOCAL_FILE_HEADER: 'PK\x03\x04',
            CENTRAL_FILE_HEADER: 'PK\x01\x02',
            CENTRAL_DIRECTORY_END: 'PK\x05\x06',
            ZIP64_CENTRAL_DIRECTORY_LOCATOR: 'PK\x06\x07',
            ZIP64_CENTRAL_DIRECTORY_END: 'PK\x06\x06',
            DATA_DESCRIPTOR: 'PK\x07\b'
        };
    }), define('jszip/defaults', [], function () {
        return {
            base64: !1,
            binary: !1,
            dir: !1,
            date: null,
            compression: null
        };
    }), define('jszip/base64', [], function () {
        var t = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
        return {
            encode: function (e) {
                for (var i, s, r, a, n, h, o, u = '', l = 0; l < e.length;)
                    i = e.charCodeAt(l++), s = e.charCodeAt(l++), r = e.charCodeAt(l++), a = i >> 2, n = (3 & i) << 4 | s >> 4, h = (15 & s) << 2 | r >> 6, o = 63 & r, isNaN(s) ? h = o = 64 : isNaN(r) && (o = 64), u = u + t.charAt(a) + t.charAt(n) + t.charAt(h) + t.charAt(o);
                return u;
            },
            decode: function (e) {
                var i, s, r, a, n, h, o, u = '', l = 0;
                for (e = e.replace(/[^A-Za-z0-9\+\/\=]/g, ''); l < e.length;)
                    a = t.indexOf(e.charAt(l++)), n = t.indexOf(e.charAt(l++)), h = t.indexOf(e.charAt(l++)), o = t.indexOf(e.charAt(l++)), i = a << 2 | n >> 4, s = (15 & n) << 4 | h >> 2, r = (3 & h) << 6 | o, u += String.fromCharCode(i), 64 != h && (u += String.fromCharCode(s)), 64 != o && (u += String.fromCharCode(r));
                return u;
            }
        };
    }), define('jszip/compressedObject', [], function () {
        return CompressedObject = function () {
            this.compressedSize = 0, this.uncompressedSize = 0, this.crc32 = 0, this.compressionMethod = null, this.compressedContent = null;
        }, CompressedObject.prototype = {
            getContent: function () {
                return null;
            },
            getCompressedContent: function () {
                return null;
            }
        }, CompressedObject;
    }), define('jszip/object', [
        'require',
        'jszip/support',
        'jszip/utils',
        'jszip/signature',
        'jszip/defaults',
        'jszip/base64',
        'jszip/compressions',
        'jszip/compressedObject'
    ], function (t) {
        var e = t('jszip/support'), i = t('jszip/utils'), s = t('jszip/signature'), r = t('jszip/defaults'), a = t('jszip/base64'), n = t('jszip/compressions'), h = t('jszip/compressedObject'), o = function (t) {
                if (t._data instanceof h && (t._data = t._data.getContent(), t.options.binary = !0, t.options.base64 = !1, 'uint8array' === i.getTypeOf(t._data))) {
                    var e = t._data;
                    t._data = new Uint8Array(e.length), 0 !== e.length && t._data.set(e, 0);
                }
                return t._data;
            }, u = function (t) {
                var s = o(t), r = i.getTypeOf(s);
                if ('string' === r) {
                    if (!t.options.binary) {
                        if (e.uint8array && 'function' == typeof TextEncoder)
                            return TextEncoder('utf-8').encode(s);
                        if (e.nodebuffer)
                            return new Buffer(s, 'utf-8');
                    }
                    return t.asBinary();
                }
                return s;
            }, l = function (t) {
                var e = o(this);
                return null === e || 'undefined' == typeof e ? '' : (this.options.base64 && (e = a.decode(e)), e = t && this.options.binary ? j.utf8decode(e) : i.transformTo('string', e), t || this.options.binary || (e = j.utf8encode(e)), e);
            }, f = function (t, e, i) {
                this.name = t, this._data = e, this.options = i;
            };
        f.prototype = {
            asText: function () {
                return l.call(this, !0);
            },
            asBinary: function () {
                return l.call(this, !1);
            },
            asNodeBuffer: function () {
                var t = u(this);
                return i.transformTo('nodebuffer', t);
            },
            asUint8Array: function () {
                var t = u(this);
                return i.transformTo('uint8array', t);
            },
            asArrayBuffer: function () {
                return this.asUint8Array().buffer;
            }
        };
        var c = function (t, e) {
                var i, s = '';
                for (i = 0; e > i; i++)
                    s += String.fromCharCode(255 & t), t >>>= 8;
                return s;
            }, p = function () {
                var t, e, i = {};
                for (t = 0; t < arguments.length; t++)
                    for (e in arguments[t])
                        arguments[t].hasOwnProperty(e) && 'undefined' == typeof i[e] && (i[e] = arguments[t][e]);
                return i;
            }, d = function (t) {
                return t = t || {}, t.base64 === !0 && null == t.binary && (t.binary = !0), t = p(t, r), t.date = t.date || new Date(), null !== t.compression && (t.compression = t.compression.toUpperCase()), t;
            }, m = function (t, e, s) {
                var r = y(t), a = i.getTypeOf(e);
                if (r && M.call(this, r), s = d(s), s.dir || null === e || 'undefined' == typeof e)
                    s.base64 = !1, s.binary = !1, e = null;
                else if ('string' === a)
                    s.binary && !s.base64 && s.optimizedBinaryString !== !0 && (e = i.string2binary(e));
                else {
                    if (s.base64 = !1, s.binary = !0, !(a || e instanceof h))
                        throw new Error('The data of \'' + t + '\' is in an unsupported format !');
                    'arraybuffer' === a && (e = i.transformTo('uint8array', e));
                }
                return this.files[t] = new f(t, e, s);
            }, y = function (t) {
                '/' == t.slice(-1) && (t = t.substring(0, t.length - 1));
                var e = t.lastIndexOf('/');
                return e > 0 ? t.substring(0, e) : '';
            }, M = function (t) {
                return '/' != t.slice(-1) && (t += '/'), this.files[t] || m.call(this, t, null, { dir: !0 }), this.files[t];
            }, g = function (t, e) {
                var s, r = new h();
                return t._data instanceof h ? (r.uncompressedSize = t._data.uncompressedSize, r.crc32 = t._data.crc32, 0 === r.uncompressedSize || t.options.dir ? (e = n.STORE, r.compressedContent = '', r.crc32 = 0) : t._data.compressionMethod === e.magic ? r.compressedContent = t._data.getCompressedContent() : (s = t._data.getContent(), r.compressedContent = e.compress(i.transformTo(e.compressInputType, s)))) : (s = u(t), (!s || 0 === s.length || t.options.dir) && (e = n.STORE, s = ''), r.uncompressedSize = s.length, r.crc32 = this.crc32(s), r.compressedContent = e.compress(i.transformTo(e.compressInputType, s))), r.compressedSize = r.compressedContent.length, r.compressionMethod = e.magic, r;
            }, _ = function (t, e, i, r) {
                var a, n, h = (i.compressedContent, this.utf8encode(e.name)), o = h !== e.name, u = e.options;
                a = u.date.getHours(), a <<= 6, a |= u.date.getMinutes(), a <<= 5, a |= u.date.getSeconds() / 2, n = u.date.getFullYear() - 1980, n <<= 4, n |= u.date.getMonth() + 1, n <<= 5, n |= u.date.getDate();
                var l = '';
                l += '\n\0', l += o ? '\0\b' : '\0\0', l += i.compressionMethod, l += c(a, 2), l += c(n, 2), l += c(i.crc32, 4), l += c(i.compressedSize, 4), l += c(i.uncompressedSize, 4), l += c(h.length, 2), l += '\0\0';
                var f = s.LOCAL_FILE_HEADER + l + h, p = s.CENTRAL_FILE_HEADER + '\x14\0' + l + '\0\0' + '\0\0' + '\0\0' + (e.options.dir === !0 ? '\x10\0\0\0' : '\0\0\0\0') + c(r, 4) + h;
                return {
                    fileRecord: f,
                    dirRecord: p,
                    compressedObject: i
                };
            }, b = function () {
                this.data = [];
            };
        b.prototype = {
            append: function (t) {
                t = i.transformTo('string', t), this.data.push(t);
            },
            finalize: function () {
                return this.data.join('');
            }
        };
        var v = function (t) {
            this.data = new Uint8Array(t), this.index = 0;
        };
        v.prototype = {
            append: function (t) {
                0 !== t.length && (t = i.transformTo('uint8array', t), this.data.set(t, this.index), this.index += t.length);
            },
            finalize: function () {
                return this.data;
            }
        };
        var j = {
                load: function () {
                    throw new Error('Load method is not defined. Is the file jszip-load.js included ?');
                },
                filter: function (t) {
                    var e, i, s, r, a = [];
                    for (e in this.files)
                        this.files.hasOwnProperty(e) && (s = this.files[e], r = new f(s.name, s._data, p(s.options)), i = e.slice(this.root.length, e.length), e.slice(0, this.root.length) === this.root && t(i, r) && a.push(r));
                    return a;
                },
                file: function (t, e, i) {
                    if (1 === arguments.length) {
                        if (t instanceof RegExp) {
                            var s = t;
                            return this.filter(function (t, e) {
                                return !e.options.dir && s.test(t);
                            });
                        }
                        return this.filter(function (e, i) {
                            return !i.options.dir && e === t;
                        })[0] || null;
                    }
                    return t = this.root + t, m.call(this, t, e, i), this;
                },
                folder: function (t) {
                    if (!t)
                        return this;
                    if (t instanceof RegExp)
                        return this.filter(function (e, i) {
                            return i.options.dir && t.test(e);
                        });
                    var e = this.root + t, i = M.call(this, e), s = this.clone();
                    return s.root = i.name, s;
                },
                remove: function (t) {
                    t = this.root + t;
                    var e = this.files[t];
                    if (e || ('/' != t.slice(-1) && (t += '/'), e = this.files[t]), e)
                        if (e.options.dir)
                            for (var i = this.filter(function (e, i) {
                                        return i.name.slice(0, t.length) === t;
                                    }), s = 0; s < i.length; s++)
                                delete this.files[i[s].name];
                        else
                            delete this.files[t];
                    return this;
                },
                generate: function (t) {
                    t = p(t || {}, {
                        base64: !0,
                        compression: 'STORE',
                        type: 'base64'
                    }), i.checkSupport(t.type);
                    var e, r, h = [], o = 0, u = 0;
                    for (var l in this.files)
                        if (this.files.hasOwnProperty(l)) {
                            var f = this.files[l], d = f.options.compression || t.compression.toUpperCase(), m = n[d];
                            if (!m)
                                throw new Error(d + ' is not a valid compression method !');
                            var y = g.call(this, f, m), M = _.call(this, l, f, y, o);
                            o += M.fileRecord.length + y.compressedSize, u += M.dirRecord.length, h.push(M);
                        }
                    var j = '';
                    switch (j = s.CENTRAL_DIRECTORY_END + '\0\0' + '\0\0' + c(h.length, 2) + c(h.length, 2) + c(u, 4) + c(o, 4) + '\0\0', t.type.toLowerCase()) {
                    case 'uint8array':
                    case 'arraybuffer':
                    case 'blob':
                    case 'nodebuffer':
                        e = new v(o + u + j.length);
                        break;
                    case 'base64':
                    default:
                        e = new b(o + u + j.length);
                    }
                    for (r = 0; r < h.length; r++)
                        e.append(h[r].fileRecord), e.append(h[r].compressedObject.compressedContent);
                    for (r = 0; r < h.length; r++)
                        e.append(h[r].dirRecord);
                    e.append(j);
                    var x = e.finalize();
                    switch (t.type.toLowerCase()) {
                    case 'uint8array':
                    case 'arraybuffer':
                    case 'nodebuffer':
                        return i.transformTo(t.type.toLowerCase(), x);
                    case 'blob':
                        return i.arrayBuffer2Blob(i.transformTo('arraybuffer', x));
                    case 'base64':
                        return t.base64 ? a.encode(x) : x;
                    default:
                        return x;
                    }
                },
                crc32: function (t, e) {
                    if ('undefined' == typeof t || !t.length)
                        return 0;
                    var s = 'string' !== i.getTypeOf(t), r = [
                            0,
                            1996959894,
                            3993919788,
                            2567524794,
                            124634137,
                            1886057615,
                            3915621685,
                            2657392035,
                            249268274,
                            2044508324,
                            3772115230,
                            2547177864,
                            162941995,
                            2125561021,
                            3887607047,
                            2428444049,
                            498536548,
                            1789927666,
                            4089016648,
                            2227061214,
                            450548861,
                            1843258603,
                            4107580753,
                            2211677639,
                            325883990,
                            1684777152,
                            4251122042,
                            2321926636,
                            335633487,
                            1661365465,
                            4195302755,
                            2366115317,
                            997073096,
                            1281953886,
                            3579855332,
                            2724688242,
                            1006888145,
                            1258607687,
                            3524101629,
                            2768942443,
                            901097722,
                            1119000684,
                            3686517206,
                            2898065728,
                            853044451,
                            1172266101,
                            3705015759,
                            2882616665,
                            651767980,
                            1373503546,
                            3369554304,
                            3218104598,
                            565507253,
                            1454621731,
                            3485111705,
                            3099436303,
                            671266974,
                            1594198024,
                            3322730930,
                            2970347812,
                            795835527,
                            1483230225,
                            3244367275,
                            3060149565,
                            1994146192,
                            31158534,
                            2563907772,
                            4023717930,
                            1907459465,
                            112637215,
                            2680153253,
                            3904427059,
                            2013776290,
                            251722036,
                            2517215374,
                            3775830040,
                            2137656763,
                            141376813,
                            2439277719,
                            3865271297,
                            1802195444,
                            476864866,
                            2238001368,
                            4066508878,
                            1812370925,
                            453092731,
                            2181625025,
                            4111451223,
                            1706088902,
                            314042704,
                            2344532202,
                            4240017532,
                            1658658271,
                            366619977,
                            2362670323,
                            4224994405,
                            1303535960,
                            984961486,
                            2747007092,
                            3569037538,
                            1256170817,
                            1037604311,
                            2765210733,
                            3554079995,
                            1131014506,
                            879679996,
                            2909243462,
                            3663771856,
                            1141124467,
                            855842277,
                            2852801631,
                            3708648649,
                            1342533948,
                            654459306,
                            3188396048,
                            3373015174,
                            1466479909,
                            544179635,
                            3110523913,
                            3462522015,
                            1591671054,
                            702138776,
                            2966460450,
                            3352799412,
                            1504918807,
                            783551873,
                            3082640443,
                            3233442989,
                            3988292384,
                            2596254646,
                            62317068,
                            1957810842,
                            3939845945,
                            2647816111,
                            81470997,
                            1943803523,
                            3814918930,
                            2489596804,
                            225274430,
                            2053790376,
                            3826175755,
                            2466906013,
                            167816743,
                            2097651377,
                            4027552580,
                            2265490386,
                            503444072,
                            1762050814,
                            4150417245,
                            2154129355,
                            426522225,
                            1852507879,
                            4275313526,
                            2312317920,
                            282753626,
                            1742555852,
                            4189708143,
                            2394877945,
                            397917763,
                            1622183637,
                            3604390888,
                            2714866558,
                            953729732,
                            1340076626,
                            3518719985,
                            2797360999,
                            1068828381,
                            1219638859,
                            3624741850,
                            2936675148,
                            906185462,
                            1090812512,
                            3747672003,
                            2825379669,
                            829329135,
                            1181335161,
                            3412177804,
                            3160834842,
                            628085408,
                            1382605366,
                            3423369109,
                            3138078467,
                            570562233,
                            1426400815,
                            3317316542,
                            2998733608,
                            733239954,
                            1555261956,
                            3268935591,
                            3050360625,
                            752459403,
                            1541320221,
                            2607071920,
                            3965973030,
                            1969922972,
                            40735498,
                            2617837225,
                            3943577151,
                            1913087877,
                            83908371,
                            2512341634,
                            3803740692,
                            2075208622,
                            213261112,
                            2463272603,
                            3855990285,
                            2094854071,
                            198958881,
                            2262029012,
                            4057260610,
                            1759359992,
                            534414190,
                            2176718541,
                            4139329115,
                            1873836001,
                            414664567,
                            2282248934,
                            4279200368,
                            1711684554,
                            285281116,
                            2405801727,
                            4167216745,
                            1634467795,
                            376229701,
                            2685067896,
                            3608007406,
                            1308918612,
                            956543938,
                            2808555105,
                            3495958263,
                            1231636301,
                            1047427035,
                            2932959818,
                            3654703836,
                            1088359270,
                            936918000,
                            2847714899,
                            3736837829,
                            1202900863,
                            817233897,
                            3183342108,
                            3401237130,
                            1404277552,
                            615818150,
                            3134207493,
                            3453421203,
                            1423857449,
                            601450431,
                            3009837614,
                            3294710456,
                            1567103746,
                            711928724,
                            3020668471,
                            3272380065,
                            1510334235,
                            755167117
                        ];
                    'undefined' == typeof e && (e = 0);
                    var a = 0, n = 0, h = 0;
                    e = -1 ^ e;
                    for (var o = 0, u = t.length; u > o; o++)
                        h = s ? t[o] : t.charCodeAt(o), n = 255 & (e ^ h), a = r[n], e = e >>> 8 ^ a;
                    return -1 ^ e;
                },
                utf8encode: function (t) {
                    if (e.uint8array && 'function' == typeof TextEncoder) {
                        var s = TextEncoder('utf-8').encode(t);
                        return i.transformTo('string', s);
                    }
                    if (e.nodebuffer)
                        return i.transformTo('string', new Buffer(t, 'utf-8'));
                    for (var r = [], a = 0, n = 0; n < t.length; n++) {
                        var h = t.charCodeAt(n);
                        128 > h ? r[a++] = String.fromCharCode(h) : h > 127 && 2048 > h ? (r[a++] = String.fromCharCode(192 | h >> 6), r[a++] = String.fromCharCode(128 | 63 & h)) : (r[a++] = String.fromCharCode(224 | h >> 12), r[a++] = String.fromCharCode(128 | 63 & h >> 6), r[a++] = String.fromCharCode(128 | 63 & h));
                    }
                    return r.join('');
                },
                utf8decode: function (t) {
                    var s = [], r = 0, a = i.getTypeOf(t), n = 'string' !== a, h = 0, o = 0, u = 0, l = 0;
                    if (e.uint8array && 'function' == typeof TextDecoder)
                        return TextDecoder('utf-8').decode(i.transformTo('uint8array', t));
                    if (e.nodebuffer)
                        return i.transformTo('nodebuffer', t).toString('utf-8');
                    for (; h < t.length;)
                        o = n ? t[h] : t.charCodeAt(h), 128 > o ? (s[r++] = String.fromCharCode(o), h++) : o > 191 && 224 > o ? (u = n ? t[h + 1] : t.charCodeAt(h + 1), s[r++] = String.fromCharCode((31 & o) << 6 | 63 & u), h += 2) : (u = n ? t[h + 1] : t.charCodeAt(h + 1), l = n ? t[h + 2] : t.charCodeAt(h + 2), s[r++] = String.fromCharCode((15 & o) << 12 | (63 & u) << 6 | 63 & l), h += 3);
                    return s.join('');
                }
            };
        return j;
    }), define('jszip/dataReader', [
        'require',
        'jszip/utils'
    ], function (t) {
        function e() {
            this.data = null, this.length = 0, this.index = 0;
        }
        var i = t('jszip/utils');
        return e.prototype = {
            checkOffset: function (t) {
                this.checkIndex(this.index + t);
            },
            checkIndex: function (t) {
                if (this.length < t || 0 > t)
                    throw new Error('End of data reached (data length = ' + this.length + ', asked index = ' + t + '). Corrupted zip ?');
            },
            setIndex: function (t) {
                this.checkIndex(t), this.index = t;
            },
            skip: function (t) {
                this.setIndex(this.index + t);
            },
            byteAt: function () {
            },
            readInt: function (t) {
                var e, i = 0;
                for (this.checkOffset(t), e = this.index + t - 1; e >= this.index; e--)
                    i = (i << 8) + this.byteAt(e);
                return this.index += t, i;
            },
            readString: function (t) {
                return i.transformTo('string', this.readData(t));
            },
            readData: function () {
            },
            lastIndexOfSignature: function () {
            },
            readDate: function () {
                var t = this.readInt(4);
                return new Date((127 & t >> 25) + 1980, (15 & t >> 21) - 1, 31 & t >> 16, 31 & t >> 11, 63 & t >> 5, (31 & t) << 1);
            }
        }, e;
    }), define('jszip/stringReader', [
        'require',
        'jszip/dataReader',
        'jszip/utils'
    ], function (t) {
        function e(t, e) {
            this.data = t, e || (this.data = s.string2binary(this.data)), this.length = this.data.length, this.index = 0;
        }
        var i = t('jszip/dataReader'), s = t('jszip/utils');
        return e.prototype = new i(), e.prototype.byteAt = function (t) {
            return this.data.charCodeAt(t);
        }, e.prototype.lastIndexOfSignature = function (t) {
            return this.data.lastIndexOf(t);
        }, e.prototype.readData = function (t) {
            this.checkOffset(t);
            var e = this.data.slice(this.index, this.index + t);
            return this.index += t, e;
        }, e;
    }), define('jszip/uint8ArrayReader', [
        'require',
        'jszip/dataReader'
    ], function (t) {
        function e(t) {
            t && (this.data = t, this.length = this.data.length, this.index = 0);
        }
        var i = t('jszip/dataReader');
        return e.prototype = new i(), e.prototype.byteAt = function (t) {
            return this.data[t];
        }, e.prototype.lastIndexOfSignature = function (t) {
            for (var e = t.charCodeAt(0), i = t.charCodeAt(1), s = t.charCodeAt(2), r = t.charCodeAt(3), a = this.length - 4; a >= 0; --a)
                if (this.data[a] === e && this.data[a + 1] === i && this.data[a + 2] === s && this.data[a + 3] === r)
                    return a;
            return -1;
        }, e.prototype.readData = function (t) {
            this.checkOffset(t);
            var e = this.data.subarray(this.index, this.index + t);
            return this.index += t, e;
        }, e;
    }), define('jszip/nodeBufferReader', [
        'require',
        'jszip/uint8ArrayReader'
    ], function (t) {
        function e(t) {
            this.data = t, this.length = this.data.length, this.index = 0;
        }
        var i = t('jszip/uint8ArrayReader');
        return e.prototype = new i(), e.prototype.readData = function (t) {
            this.checkOffset(t);
            var e = this.data.slice(this.index, this.index + t);
            return this.index += t, e;
        }, e;
    }), define('jszip/zipEntry', [
        'require',
        'jszip/stringReader',
        'jszip/utils',
        'jszip/compressedObject',
        'jszip/object'
    ], function (t) {
        function e(t, e) {
            this.options = t, this.loadOptions = e;
        }
        var i = t('jszip/stringReader'), s = t('jszip/utils'), r = t('jszip/compressedObject'), a = t('jszip/object');
        return e.prototype = {
            isEncrypted: function () {
                return 1 === (1 & this.bitFlag);
            },
            useUTF8: function () {
                return 2048 === (2048 & this.bitFlag);
            },
            prepareCompressedContent: function (t, e, i) {
                return function () {
                    var s = t.index;
                    t.setIndex(e);
                    var r = t.readData(i);
                    return t.setIndex(s), r;
                };
            },
            prepareContent: function (t, e, i, r, a) {
                return function () {
                    var t = s.transformTo(r.uncompressInputType, this.getCompressedContent()), e = r.uncompress(t);
                    if (e.length !== a)
                        throw new Error('Bug : uncompressed data size mismatch');
                    return e;
                };
            },
            readLocalPart: function (t) {
                var e, i;
                if (t.skip(22), this.fileNameLength = t.readInt(2), i = t.readInt(2), this.fileName = t.readString(this.fileNameLength), t.skip(i), -1 == this.compressedSize || -1 == this.uncompressedSize)
                    throw new Error('Bug or corrupted zip : didn\'t get enough informations from the central directory (compressedSize == -1 || uncompressedSize == -1)');
                if (e = s.findCompression(this.compressionMethod), null === e)
                    throw new Error('Corrupted zip : compression ' + s.pretty(this.compressionMethod) + ' unknown (inner file : ' + this.fileName + ')');
                if (this.decompressed = new r(), this.decompressed.compressedSize = this.compressedSize, this.decompressed.uncompressedSize = this.uncompressedSize, this.decompressed.crc32 = this.crc32, this.decompressed.compressionMethod = this.compressionMethod, this.decompressed.getCompressedContent = this.prepareCompressedContent(t, t.index, this.compressedSize, e), this.decompressed.getContent = this.prepareContent(t, t.index, this.compressedSize, e, this.uncompressedSize), this.loadOptions.checkCRC32 && (this.decompressed = s.transformTo('string', this.decompressed.getContent()), a.crc32(this.decompressed) !== this.crc32))
                    throw new Error('Corrupted zip : CRC32 mismatch');
            },
            readCentralPart: function (t) {
                if (this.versionMadeBy = t.readString(2), this.versionNeeded = t.readInt(2), this.bitFlag = t.readInt(2), this.compressionMethod = t.readString(2), this.date = t.readDate(), this.crc32 = t.readInt(4), this.compressedSize = t.readInt(4), this.uncompressedSize = t.readInt(4), this.fileNameLength = t.readInt(2), this.extraFieldsLength = t.readInt(2), this.fileCommentLength = t.readInt(2), this.diskNumberStart = t.readInt(2), this.internalFileAttributes = t.readInt(2), this.externalFileAttributes = t.readInt(4), this.localHeaderOffset = t.readInt(4), this.isEncrypted())
                    throw new Error('Encrypted zip are not supported');
                this.fileName = t.readString(this.fileNameLength), this.readExtraFields(t), this.parseZIP64ExtraField(t), this.fileComment = t.readString(this.fileCommentLength), this.dir = 16 & this.externalFileAttributes ? !0 : !1;
            },
            parseZIP64ExtraField: function () {
                if (this.extraFields[1]) {
                    var t = new i(this.extraFields[1].value);
                    this.uncompressedSize === s.MAX_VALUE_32BITS && (this.uncompressedSize = t.readInt(8)), this.compressedSize === s.MAX_VALUE_32BITS && (this.compressedSize = t.readInt(8)), this.localHeaderOffset === s.MAX_VALUE_32BITS && (this.localHeaderOffset = t.readInt(8)), this.diskNumberStart === s.MAX_VALUE_32BITS && (this.diskNumberStart = t.readInt(4));
                }
            },
            readExtraFields: function (t) {
                var e, i, s, r = t.index;
                for (this.extraFields = this.extraFields || {}; t.index < r + this.extraFieldsLength;)
                    e = t.readInt(2), i = t.readInt(2), s = t.readString(i), this.extraFields[e] = {
                        id: e,
                        length: i,
                        value: s
                    };
            },
            handleUTF8: function () {
                this.useUTF8() && (this.fileName = a.utf8decode(this.fileName), this.fileComment = a.utf8decode(this.fileComment));
            }
        }, e;
    }), define('jszip/zipEntries', [
        'require',
        'jszip/stringReader',
        'jszip/nodeBufferReader',
        'jszip/uint8ArrayReader',
        'jszip/utils',
        'jszip/signature',
        'jszip/zipEntry',
        'jszip/support'
    ], function (t) {
        function e(t, e) {
            this.files = [], this.loadOptions = e, t && this.load(t);
        }
        var i = t('jszip/stringReader'), s = t('jszip/nodeBufferReader'), r = t('jszip/uint8ArrayReader'), a = t('jszip/utils'), n = t('jszip/signature'), h = t('jszip/zipEntry'), o = t('jszip/support');
        return e.prototype = {
            checkSignature: function (t) {
                var e = this.reader.readString(4);
                if (e !== t)
                    throw new Error('Corrupted zip or bug : unexpected signature (' + a.pretty(e) + ', expected ' + a.pretty(t) + ')');
            },
            readBlockEndOfCentral: function () {
                this.diskNumber = this.reader.readInt(2), this.diskWithCentralDirStart = this.reader.readInt(2), this.centralDirRecordsOnThisDisk = this.reader.readInt(2), this.centralDirRecords = this.reader.readInt(2), this.centralDirSize = this.reader.readInt(4), this.centralDirOffset = this.reader.readInt(4), this.zipCommentLength = this.reader.readInt(2), this.zipComment = this.reader.readString(this.zipCommentLength);
            },
            readBlockZip64EndOfCentral: function () {
                this.zip64EndOfCentralSize = this.reader.readInt(8), this.versionMadeBy = this.reader.readString(2), this.versionNeeded = this.reader.readInt(2), this.diskNumber = this.reader.readInt(4), this.diskWithCentralDirStart = this.reader.readInt(4), this.centralDirRecordsOnThisDisk = this.reader.readInt(8), this.centralDirRecords = this.reader.readInt(8), this.centralDirSize = this.reader.readInt(8), this.centralDirOffset = this.reader.readInt(8), this.zip64ExtensibleData = {};
                for (var t, e, i, s = this.zip64EndOfCentralSize - 44, r = 0; s > r;)
                    t = this.reader.readInt(2), e = this.reader.readInt(4), i = this.reader.readString(e), this.zip64ExtensibleData[t] = {
                        id: t,
                        length: e,
                        value: i
                    };
            },
            readBlockZip64EndOfCentralLocator: function () {
                if (this.diskWithZip64CentralDirStart = this.reader.readInt(4), this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8), this.disksCount = this.reader.readInt(4), this.disksCount > 1)
                    throw new Error('Multi-volumes zip are not supported');
            },
            readLocalFiles: function () {
                var t, e;
                for (t = 0; t < this.files.length; t++)
                    e = this.files[t], this.reader.setIndex(e.localHeaderOffset), this.checkSignature(n.LOCAL_FILE_HEADER), e.readLocalPart(this.reader), e.handleUTF8();
            },
            readCentralDir: function () {
                var t;
                for (this.reader.setIndex(this.centralDirOffset); this.reader.readString(4) === n.CENTRAL_FILE_HEADER;)
                    t = new h({ zip64: this.zip64 }, this.loadOptions), t.readCentralPart(this.reader), this.files.push(t);
            },
            readEndOfCentral: function () {
                var t = this.reader.lastIndexOfSignature(n.CENTRAL_DIRECTORY_END);
                if (-1 === t)
                    throw new Error('Corrupted zip : can\'t find end of central directory');
                if (this.reader.setIndex(t), this.checkSignature(n.CENTRAL_DIRECTORY_END), this.readBlockEndOfCentral(), this.diskNumber === a.MAX_VALUE_16BITS || this.diskWithCentralDirStart === a.MAX_VALUE_16BITS || this.centralDirRecordsOnThisDisk === a.MAX_VALUE_16BITS || this.centralDirRecords === a.MAX_VALUE_16BITS || this.centralDirSize === a.MAX_VALUE_32BITS || this.centralDirOffset === a.MAX_VALUE_32BITS) {
                    if (this.zip64 = !0, t = this.reader.lastIndexOfSignature(n.ZIP64_CENTRAL_DIRECTORY_LOCATOR), -1 === t)
                        throw new Error('Corrupted zip : can\'t find the ZIP64 end of central directory locator');
                    this.reader.setIndex(t), this.checkSignature(n.ZIP64_CENTRAL_DIRECTORY_LOCATOR), this.readBlockZip64EndOfCentralLocator(), this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir), this.checkSignature(n.ZIP64_CENTRAL_DIRECTORY_END), this.readBlockZip64EndOfCentral();
                }
            },
            prepareReader: function (t) {
                var e = a.getTypeOf(t);
                this.reader = 'string' !== e || o.uint8array ? 'nodebuffer' === e ? new s(t) : new r(a.transformTo('uint8array', t)) : new i(t, this.loadOptions.optimizedBinaryString);
            },
            load: function (t) {
                this.prepareReader(t), this.readEndOfCentral(), this.readCentralDir(), this.readLocalFiles();
            }
        }, e;
    }), define('jszip/load', [
        'require',
        'jszip/base64',
        'jszip/zipEntries'
    ], function (t) {
        var e = t('jszip/base64'), i = t('jszip/zipEntries');
        return function (t, s) {
            var r, a, n, h;
            for (s = s || {}, s.base64 && (t = e.decode(t)), a = new i(t, s), r = a.files, n = 0; n < r.length; n++)
                h = r[n], this.file(h.fileName, h.decompressed, {
                    binary: !0,
                    optimizedBinaryString: !0,
                    date: h.date,
                    dir: h.dir
                });
            return this;
        };
    }), define('jszip', [
        'require',
        'jszip/object',
        'jszip/load',
        'jszip/support',
        'jszip/utils',
        'jszip/base64',
        'jszip/compressions'
    ], function (t) {
        var e = function (t, e) {
            this.files = {}, this.root = '', t && this.load(t, e);
        };
        return e.prototype = t('jszip/object'), e.prototype.clone = function () {
            var t = new e();
            for (var i in this)
                'function' != typeof this[i] && (t[i] = this[i]);
            return t;
        }, e.prototype.load = t('jszip/load'), e.support = t('jszip/support'), e.utils = t('jszip/utils'), e.base64 = t('jszip/base64'), e.compressions = t('jszip/compressions'), e;
    }), define('shp/unzip', ['jszip'], function (t) {
        return function (e) {
            var i = new t(e), s = i.file(/.+/), r = {};
            return s.forEach(function (t) {
                'shp' === t.name.slice(-3).toLowerCase() || 'dbf' === t.name.slice(-3).toLowerCase() ? (r[t.name] = t.asText(), r[t.name] = t.asArrayBuffer()) : r[t.name] = t.asText();
            }), r;
        };
    }), function (global, undefined) {
        function canUseNextTick() {
            return 'object' == typeof process && '[object process]' === Object.prototype.toString.call(process);
        }
        function canUseMessageChannel() {
            return !!global.MessageChannel;
        }
        function canUsePostMessage() {
            if (!global.postMessage || global.importScripts)
                return !1;
            var t = !0, e = global.onmessage;
            return global.onmessage = function () {
                t = !1;
            }, global.postMessage('', '*'), global.onmessage = e, t;
        }
        function canUseReadyStateChange() {
            return 'document' in global && 'onreadystatechange' in global.document.createElement('script');
        }
        function installNextTickImplementation(t) {
            t.setImmediate = function () {
                var t = tasks.addFromSetImmediateArguments(arguments);
                return process.nextTick(function () {
                    tasks.runIfPresent(t);
                }), t;
            };
        }
        function installMessageChannelImplementation(t) {
            var e = new global.MessageChannel();
            e.port1.onmessage = function (t) {
                var e = t.data;
                tasks.runIfPresent(e);
            }, t.setImmediate = function () {
                var t = tasks.addFromSetImmediateArguments(arguments);
                return e.port2.postMessage(t), t;
            };
        }
        function installPostMessageImplementation(t) {
            function e(t, e) {
                return 'string' == typeof t && t.substring(0, e.length) === e;
            }
            function i(t) {
                if (t.source === global && e(t.data, s)) {
                    var i = t.data.substring(s.length);
                    tasks.runIfPresent(i);
                }
            }
            var s = 'com.bn.NobleJS.setImmediate' + Math.random();
            global.addEventListener ? global.addEventListener('message', i, !1) : global.attachEvent('onmessage', i), t.setImmediate = function () {
                var t = tasks.addFromSetImmediateArguments(arguments);
                return global.postMessage(s + t, '*'), t;
            };
        }
        function installReadyStateChangeImplementation(t) {
            t.setImmediate = function () {
                var t = tasks.addFromSetImmediateArguments(arguments), e = global.document.createElement('script');
                return e.onreadystatechange = function () {
                    tasks.runIfPresent(t), e.onreadystatechange = null, e.parentNode.removeChild(e), e = null;
                }, global.document.documentElement.appendChild(e), t;
            };
        }
        function installSetTimeoutImplementation(t) {
            t.setImmediate = function () {
                var t = tasks.addFromSetImmediateArguments(arguments);
                return global.setTimeout(function () {
                    tasks.runIfPresent(t);
                }, 0), t;
            };
        }
        var tasks = function () {
                function Task(t, e) {
                    this.handler = t, this.args = e;
                }
                Task.prototype.run = function () {
                    if ('function' == typeof this.handler)
                        this.handler.apply(undefined, this.args);
                    else {
                        var scriptSource = '' + this.handler;
                        eval(scriptSource);
                    }
                };
                var nextHandle = 1, tasksByHandle = {}, currentlyRunningATask = !1;
                return {
                    addFromSetImmediateArguments: function (t) {
                        var e = t[0], i = Array.prototype.slice.call(t, 1), s = new Task(e, i), r = nextHandle++;
                        return tasksByHandle[r] = s, r;
                    },
                    runIfPresent: function (t) {
                        if (currentlyRunningATask)
                            global.setTimeout(function () {
                                tasks.runIfPresent(t);
                            }, 0);
                        else {
                            var e = tasksByHandle[t];
                            if (e) {
                                currentlyRunningATask = !0;
                                try {
                                    e.run();
                                } finally {
                                    delete tasksByHandle[t], currentlyRunningATask = !1;
                                }
                            }
                        }
                    },
                    remove: function (t) {
                        delete tasksByHandle[t];
                    }
                };
            }();
        if (!global.setImmediate) {
            var attachTo = 'function' == typeof Object.getPrototypeOf && 'setTimeout' in Object.getPrototypeOf(global) ? Object.getPrototypeOf(global) : global;
            canUseNextTick() ? installNextTickImplementation(attachTo) : canUsePostMessage() ? installPostMessageImplementation(attachTo) : canUseMessageChannel() ? installMessageChannelImplementation(attachTo) : canUseReadyStateChange() ? installReadyStateChangeImplementation(attachTo) : installSetTimeoutImplementation(attachTo), attachTo.clearImmediate = tasks.remove;
        }
    }('object' == typeof global && global ? global : this), define('shp/lie', [], function () {
        function t() {
            function t() {
                this.then = function (t, e) {
                    return a(t, e);
                };
            }
            var a = function (t, h, o) {
                    var u;
                    if (t !== a)
                        return u = e(), a.queue.push({
                            deferred: u,
                            resolve: t,
                            reject: h
                        }), u.promise;
                    for (var l, f, c, p = h ? 'resolve' : 'reject', d = 0, m = a.queue.length; m > d; d++)
                        l = a.queue[d], f = l.deferred, c = l[p], typeof c !== r ? f[p](o) : s(c, o, f);
                    a = i(n, o, h);
                }, n = new t();
            this.promise = n, a.queue = [], this.resolve = function (t) {
                a.queue && a(a, !0, t);
            }, this.fulfill = this.resolve, this.reject = function (t) {
                a.queue && a(a, !1, t);
            };
        }
        function e() {
            return new t();
        }
        function i(t, i, a) {
            return function (n, h) {
                var o, u = a ? n : h;
                return typeof u !== r ? t : (s(u, i, o = e()), o.promise);
            };
        }
        function s(t, e, i) {
            setImmediate(function () {
                var s;
                try {
                    s = t(e), s && typeof s.then === r ? s.then(i.resolve, i.reject) : i.resolve(s);
                } catch (a) {
                    i.reject(a);
                }
            });
        }
        var r = 'function';
        return e.resolve = function (t) {
            var e = {};
            return e.then = i(e, t, !0), e;
        }, e.reject = function (t) {
            var e = {};
            return e.then = i(e, t, !1), e;
        }, e.all = function (t) {
            var i = e(), s = t.length, r = 0, a = [], n = function (t) {
                    return function (e) {
                        a[t] = e, r++, r === s && i.resolve(a);
                    };
                };
            return t.forEach(function (t, e) {
                t.then(n(e), function (t) {
                    i.reject(t);
                });
            }), i.promise;
        }, e;
    }), define('shp/binaryajax', ['./lie'], function (t) {
        return function (e) {
            var i = t(), s = e.slice(-3), r = new XMLHttpRequest();
            return r.open('GET', e, !0), 'prj' !== s && (r.responseType = 'arraybuffer'), r.addEventListener('load', function () {
                return r.status > 399 ? 'prj' === s ? i.resolve(!1) : i.reject(r.status) : (i.resolve(r.response), void 0);
            }, !1), r.send(), i.promise;
        };
    }), define('shp/parseShp', [], function () {
        function t(t) {
            for (var e, i, s = 0, r = 1, a = t.length; a > r;)
                e = i || t[0], i = t[r], s += (i[0] - e[0]) * (i[1] + e[1]), r++;
            return s > 0;
        }
        function e(e, i) {
            return t(i) || !e.length ? e.push([i]) : e[e.length - 1].push(i), e;
        }
        function i(t, e) {
            return {
                type: 'Point',
                coordinates: e(t, 0)
            };
        }
        function s(t, e) {
            var s = i(t, e);
            return s.coordinates.push(e(t, 16)), s;
        }
        function r(t, e, i, s) {
            for (var r = [], a = 0; i > a;)
                r.push(s(t, e)), e += 16, a++;
            return r;
        }
        function a(t, e, i, s) {
            for (var r = 0; i > r;)
                s[r].push(t.getFloat64(e, !0)), r++, e += 8;
            return s;
        }
        function n(t, e, i, s, a, n) {
            for (var h, o, u = [], l = 0, f = 0; s > l;)
                l++, i += 4, h = f, f = l === s ? a : t.getInt32(i, !0), o = f - h, o && (u.push(r(t, e, o, n)), e += o << 4);
            return u;
        }
        function h(t, e, i, s) {
            for (var r = 0; i > r;)
                s[r] = a(t, e, s[r].length, s[r]), e += s[r].length << 3, r++;
            return s;
        }
        function o(t, e) {
            var i = {};
            i.bbox = [
                t.getFloat64(0, !0),
                t.getFloat64(8, !0),
                t.getFloat64(16, !0),
                t.getFloat64(24, !0)
            ];
            var s = t.getInt32(32, !0), a = 36;
            return 1 === s ? (i.type = 'Point', i.coordinates = e(t, a)) : (i.type = 'MultiPoint', i.coordinates = r(t, a, s, e)), i;
        }
        function u(t, e) {
            var i, s = o(t, e);
            if ('Point' === s.type)
                return s.coordinates.push(t.getFloat64(72, !0)), s;
            i = s.coordinates.length;
            var r = 56 + (i << 4);
            return s.coordinates = a(t, r, i, s.coordinates), s;
        }
        function l(t, e) {
            var i = {};
            i.bbox = [
                t.getFloat64(0, !0),
                t.getFloat64(8, !0),
                t.getFloat64(16, !0),
                t.getFloat64(24, !0)
            ];
            var s, a, h = t.getInt32(32, !0), o = t.getInt32(36, !0);
            return 1 === h ? (i.type = 'LineString', s = 44, i.coordinates = r(t, s, o, e)) : (i.type = 'MultiLineString', s = 40 + (h << 2), a = 40, i.coordinates = n(t, s, a, h, o, e)), i;
        }
        function f(t, e) {
            var i = l(t, e), s = i.coordinates.length, r = 60 + (s << 4);
            return 'LineString' === i.type ? (i.coordinates = a(t, r, s, i.coordinates), i) : (i.coordinates = h(t, r, s, i.coordinates), i);
        }
        function c(t) {
            return 'LineString' === t.type ? (t.type = 'Polygon', t.coordinates = [t.coordinates], t) : (t.coordinates = t.coordinates.reduce(e, []), 1 === t.coordinates.length ? (t.type = 'Polygon', t.coordinates = t.coordinates[0], t) : (t.type = 'MultiPolygon', t));
        }
        function p(t, e) {
            return c(l(t, e));
        }
        function d(t, e) {
            return c(f(t, e));
        }
        function m(t, e) {
            if (t > 20 && (t -= 20), !(t in g))
                return console.log('I don\'t know that shp type'), function () {
                    return function () {
                    };
                };
            var i = g[t], s = y(e);
            return function (t) {
                return i(t, s);
            };
        }
        function y(t) {
            return t ? function (e, i) {
                return t.inverse([
                    e.getFloat64(i, !0),
                    e.getFloat64(i + 8, !0)
                ]);
            } : function (t, e) {
                return [
                    t.getFloat64(e, !0),
                    t.getFloat64(e + 8, !0)
                ];
            };
        }
        var M = function (t) {
                var e = new DataView(t, 0, 100);
                return {
                    length: e.getInt32(24, !1),
                    version: e.getInt32(28, !0),
                    shpCode: e.getInt32(32, !0),
                    bbox: [
                        e.getFloat64(36, !0),
                        e.getFloat64(44, !0),
                        e.getFloat64(52, !0),
                        e.getFloat64(52, !0)
                    ]
                };
            }, g = {
                1: i,
                3: l,
                5: p,
                8: o,
                11: s,
                13: f,
                15: d,
                18: u
            }, _ = function (t, e) {
                var i = new DataView(t, e, 12), s = i.getInt32(4, !1) << 1, r = new DataView(t, e + 12, s - 4);
                return {
                    id: i.getInt32(0, !1),
                    len: s,
                    data: r,
                    type: i.getInt32(8, !0)
                };
            }, b = function (t, e) {
                for (var i, s = 100, r = t.byteLength, a = []; r > s;)
                    i = _(t, s), s += 8, s += i.len, i.type && a.push(e(i.data));
                return a;
            };
        return function (t, e) {
            var i = M(t);
            return b(t, m(i.shpCode, e));
        };
    }), define('shp/parseDbf', [], function () {
        function t(t) {
            var e = new DataView(t), i = {};
            return i.lastUpdated = new Date(e.getUint8(1, !0) + 1900, e.getUint8(2, !0), e.getUint8(3, !0)), i.records = e.getUint32(4, !0), i.headerLen = e.getUint16(8, !0), i.recLen = e.getUint16(10, !0), i;
        }
        function e(t) {
            for (var e = new DataView(t), i = [], s = 32;;) {
                if (i.push({
                        name: String.fromCharCode.apply(this, new Uint8Array(t, s, 10)).replace(/\0|\s+$/g, ''),
                        dataType: String.fromCharCode(e.getUint8(s + 11)),
                        len: e.getUint8(s + 16),
                        decimal: e.getUint8(s + 17)
                    }), 13 === e.getUint8(s + 32))
                    break;
                s += 32;
            }
            return i;
        }
        function i(t, e, i) {
            for (var r, a, n = {}, h = 0, o = i.length; o > h;)
                a = i[h], r = s(t, e, a.len, a.dataType), e += a.len, 'undefined' != typeof r && (n[a.name] = r), h++;
            return n;
        }
        var s = function (t, e, i, s) {
            var r = new Uint8Array(t, e, i), a = String.fromCharCode.apply(this, r).replace(/\0|\s+$/g, '');
            return 'N' === s ? parseFloat(a, 10) : 'D' === s ? new Date(a.slice(0, 4), parseInt(a.slice(4, 6), 10) - 1, a.slice(6, 8)) : a;
        };
        return function (s) {
            var r = e(s), a = t(s), n = (r.length + 1 << 5) + 2, h = a.recLen, o = a.records;
            new DataView(s);
            for (var u = []; o;)
                u.push(i(s, n, r)), n += h, o--;
            return u;
        };
    }), define('shp', [
        'require',
        'proj4',
        'shp/unzip',
        'shp/binaryajax',
        'shp/parseShp',
        'shp/parseDbf',
        'shp/lie'
    ], function (t) {
        function e(t, i) {
            return e.getShapefile(t, i);
        }
        function i(t, i) {
            return a(t).then(function (t) {
                return e.parseZip(t, i);
            });
        }
        var s = t('proj4'), r = t('shp/unzip'), a = t('shp/binaryajax'), n = t('shp/parseShp'), h = t('shp/parseDbf'), o = t('shp/lie');
        return e.combine = function (t) {
            var e = {};
            e.type = 'FeatureCollection', e.features = [];
            for (var i = 0, s = t[0].length; s > i;)
                e.features.push({
                    type: 'Feature',
                    geometry: t[0][i],
                    properties: t[1][i]
                }), i++;
            return e;
        }, e.parseZip = function (t, i) {
            var a, o = r(t), u = [];
            i = i || [];
            for (a in o)
                'shp' === a.slice(-3).toLowerCase() ? u.push(a.slice(0, -4)) : 'dbf' === a.slice(-3).toLowerCase() ? o[a] = h(o[a]) : 'prj' === a.slice(-3).toLowerCase() ? o[a] = s(o[a]) : ('json' === a.slice(-4).toLowerCase() || i.indexOf(a.split('.').pop()) > -1) && u.push(a);
            var l = u.map(function (t) {
                    var s;
                    return 'json' === t.slice(-4).toLowerCase() ? (s = JSON.parse(o[t]), s.fileName = t.slice(0, t.lastIndexOf('.'))) : i.indexOf(t.slice(t.lastIndexOf('.') + 1)) > -1 ? (s = o[t], s.fileName = t) : (s = e.combine([
                        n(o[t + '.shp'], o[t + '.prj']),
                        o[t + '.dbf']
                    ]), s.fileName = t), s;
                });
            return 1 === l.length ? l[0] : l;
        }, e.getShapefile = function (t, r) {
            return 'string' == typeof t ? '.zip' === t.slice(-4) ? i(t, r) : o.all([
                o.all([
                    a(t + '.shp'),
                    a(t + '.prj')
                ]).then(function (t) {
                    return n(t[0], t[1] ? s(t[1]) : !1);
                }),
                a(t + '.dbf').then(h)
            ]).then(e.combine) : o.resolve(e.parseZip(t));
        }, e.deferred = o, e;
    }), ___forBrowserify___('shp');
});