(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2888],
  {
    89743: function (e, r, n) {
      "use strict";
      n.r(r),
        n.d(r, {
          Headers: function () {
            return l;
          },
          Request: function () {
            return u;
          },
          Response: function () {
            return c;
          },
          fetch: function () {
            return a;
          },
        });
      var s = (function () {
        if ("undefined" != typeof self) return self;
        if ("undefined" != typeof window) return window;
        if (void 0 !== n.g) return n.g;
        throw Error("unable to locate global object");
      })();
      let a = s.fetch;
      r.default = s.fetch.bind(s);
      let l = s.Headers,
        u = s.Request,
        c = s.Response;
    },
    79742: function (e, r) {
      "use strict";
      (r.byteLength = function (e) {
        var r = getLens(e),
          n = r[0],
          s = r[1];
        return ((n + s) * 3) / 4 - s;
      }),
        (r.toByteArray = function (e) {
          var r,
            n,
            l = getLens(e),
            u = l[0],
            c = l[1],
            h = new a(((u + c) * 3) / 4 - c),
            d = 0,
            f = c > 0 ? u - 4 : u;
          for (n = 0; n < f; n += 4)
            (r =
              (s[e.charCodeAt(n)] << 18) |
              (s[e.charCodeAt(n + 1)] << 12) |
              (s[e.charCodeAt(n + 2)] << 6) |
              s[e.charCodeAt(n + 3)]),
              (h[d++] = (r >> 16) & 255),
              (h[d++] = (r >> 8) & 255),
              (h[d++] = 255 & r);
          return (
            2 === c &&
              ((r = (s[e.charCodeAt(n)] << 2) | (s[e.charCodeAt(n + 1)] >> 4)),
              (h[d++] = 255 & r)),
            1 === c &&
              ((r =
                (s[e.charCodeAt(n)] << 10) |
                (s[e.charCodeAt(n + 1)] << 4) |
                (s[e.charCodeAt(n + 2)] >> 2)),
              (h[d++] = (r >> 8) & 255),
              (h[d++] = 255 & r)),
            h
          );
        }),
        (r.fromByteArray = function (e) {
          for (
            var r, s = e.length, a = s % 3, l = [], u = 0, c = s - a;
            u < c;
            u += 16383
          )
            l.push(
              (function (e, r, s) {
                for (var a, l = [], u = r; u < s; u += 3)
                  l.push(
                    n[
                      ((a =
                        ((e[u] << 16) & 16711680) +
                        ((e[u + 1] << 8) & 65280) +
                        (255 & e[u + 2])) >>
                        18) &
                        63
                    ] +
                      n[(a >> 12) & 63] +
                      n[(a >> 6) & 63] +
                      n[63 & a]
                  );
                return l.join("");
              })(e, u, u + 16383 > c ? c : u + 16383)
            );
          return (
            1 === a
              ? l.push(n[(r = e[s - 1]) >> 2] + n[(r << 4) & 63] + "==")
              : 2 === a &&
                l.push(
                  n[(r = (e[s - 2] << 8) + e[s - 1]) >> 10] +
                    n[(r >> 4) & 63] +
                    n[(r << 2) & 63] +
                    "="
                ),
            l.join("")
          );
        });
      for (
        var n = [],
          s = [],
          a = "undefined" != typeof Uint8Array ? Uint8Array : Array,
          l =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
          u = 0,
          c = l.length;
        u < c;
        ++u
      )
        (n[u] = l[u]), (s[l.charCodeAt(u)] = u);
      function getLens(e) {
        var r = e.length;
        if (r % 4 > 0)
          throw Error("Invalid string. Length must be a multiple of 4");
        var n = e.indexOf("=");
        -1 === n && (n = r);
        var s = n === r ? 0 : 4 - (n % 4);
        return [n, s];
      }
      (s["-".charCodeAt(0)] = 62), (s["_".charCodeAt(0)] = 63);
    },
    48764: function (e, r, n) {
      "use strict";
      /*!
       * The buffer module from node.js, for the browser.
       *
       * @author   Feross Aboukhadijeh <https://feross.org>
       * @license  MIT
       */ let s = n(79742),
        a = n(80645),
        l =
          "function" == typeof Symbol && "function" == typeof Symbol.for
            ? Symbol.for("nodejs.util.inspect.custom")
            : null;
      function createBuffer(e) {
        if (e > 2147483647)
          throw RangeError(
            'The value "' + e + '" is invalid for option "size"'
          );
        let r = new Uint8Array(e);
        return Object.setPrototypeOf(r, Buffer.prototype), r;
      }
      function Buffer(e, r, n) {
        if ("number" == typeof e) {
          if ("string" == typeof r)
            throw TypeError(
              'The "string" argument must be of type string. Received type number'
            );
          return allocUnsafe(e);
        }
        return from(e, r, n);
      }
      function from(e, r, n) {
        if ("string" == typeof e)
          return (function (e, r) {
            if (
              (("string" != typeof r || "" === r) && (r = "utf8"),
              !Buffer.isEncoding(r))
            )
              throw TypeError("Unknown encoding: " + r);
            let n = 0 | byteLength(e, r),
              s = createBuffer(n),
              a = s.write(e, r);
            return a !== n && (s = s.slice(0, a)), s;
          })(e, r);
        if (ArrayBuffer.isView(e))
          return (function (e) {
            if (isInstance(e, Uint8Array)) {
              let r = new Uint8Array(e);
              return fromArrayBuffer(r.buffer, r.byteOffset, r.byteLength);
            }
            return fromArrayLike(e);
          })(e);
        if (null == e)
          throw TypeError(
            "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
              typeof e
          );
        if (
          isInstance(e, ArrayBuffer) ||
          (e && isInstance(e.buffer, ArrayBuffer)) ||
          ("undefined" != typeof SharedArrayBuffer &&
            (isInstance(e, SharedArrayBuffer) ||
              (e && isInstance(e.buffer, SharedArrayBuffer))))
        )
          return fromArrayBuffer(e, r, n);
        if ("number" == typeof e)
          throw TypeError(
            'The "value" argument must not be of type number. Received type number'
          );
        let s = e.valueOf && e.valueOf();
        if (null != s && s !== e) return Buffer.from(s, r, n);
        let a = (function (e) {
          var r;
          if (Buffer.isBuffer(e)) {
            let r = 0 | checked(e.length),
              n = createBuffer(r);
            return 0 === n.length || e.copy(n, 0, 0, r), n;
          }
          return void 0 !== e.length
            ? "number" != typeof e.length || (r = e.length) != r
              ? createBuffer(0)
              : fromArrayLike(e)
            : "Buffer" === e.type && Array.isArray(e.data)
            ? fromArrayLike(e.data)
            : void 0;
        })(e);
        if (a) return a;
        if (
          "undefined" != typeof Symbol &&
          null != Symbol.toPrimitive &&
          "function" == typeof e[Symbol.toPrimitive]
        )
          return Buffer.from(e[Symbol.toPrimitive]("string"), r, n);
        throw TypeError(
          "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
            typeof e
        );
      }
      function assertSize(e) {
        if ("number" != typeof e)
          throw TypeError('"size" argument must be of type number');
        if (e < 0)
          throw RangeError(
            'The value "' + e + '" is invalid for option "size"'
          );
      }
      function allocUnsafe(e) {
        return assertSize(e), createBuffer(e < 0 ? 0 : 0 | checked(e));
      }
      function fromArrayLike(e) {
        let r = e.length < 0 ? 0 : 0 | checked(e.length),
          n = createBuffer(r);
        for (let s = 0; s < r; s += 1) n[s] = 255 & e[s];
        return n;
      }
      function fromArrayBuffer(e, r, n) {
        let s;
        if (r < 0 || e.byteLength < r)
          throw RangeError('"offset" is outside of buffer bounds');
        if (e.byteLength < r + (n || 0))
          throw RangeError('"length" is outside of buffer bounds');
        return (
          Object.setPrototypeOf(
            (s =
              void 0 === r && void 0 === n
                ? new Uint8Array(e)
                : void 0 === n
                ? new Uint8Array(e, r)
                : new Uint8Array(e, r, n)),
            Buffer.prototype
          ),
          s
        );
      }
      function checked(e) {
        if (e >= 2147483647)
          throw RangeError(
            "Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes"
          );
        return 0 | e;
      }
      function byteLength(e, r) {
        if (Buffer.isBuffer(e)) return e.length;
        if (ArrayBuffer.isView(e) || isInstance(e, ArrayBuffer))
          return e.byteLength;
        if ("string" != typeof e)
          throw TypeError(
            'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
              typeof e
          );
        let n = e.length,
          s = arguments.length > 2 && !0 === arguments[2];
        if (!s && 0 === n) return 0;
        let a = !1;
        for (;;)
          switch (r) {
            case "ascii":
            case "latin1":
            case "binary":
              return n;
            case "utf8":
            case "utf-8":
              return utf8ToBytes(e).length;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return 2 * n;
            case "hex":
              return n >>> 1;
            case "base64":
              return base64ToBytes(e).length;
            default:
              if (a) return s ? -1 : utf8ToBytes(e).length;
              (r = ("" + r).toLowerCase()), (a = !0);
          }
      }
      function slowToString(e, r, n) {
        let a = !1;
        if (
          ((void 0 === r || r < 0) && (r = 0),
          r > this.length ||
            ((void 0 === n || n > this.length) && (n = this.length),
            n <= 0 || (n >>>= 0) <= (r >>>= 0)))
        )
          return "";
        for (e || (e = "utf8"); ; )
          switch (e) {
            case "hex":
              return (function (e, r, n) {
                let s = e.length;
                (!r || r < 0) && (r = 0), (!n || n < 0 || n > s) && (n = s);
                let a = "";
                for (let s = r; s < n; ++s) a += h[e[s]];
                return a;
              })(this, r, n);
            case "utf8":
            case "utf-8":
              return utf8Slice(this, r, n);
            case "ascii":
              return (function (e, r, n) {
                let s = "";
                n = Math.min(e.length, n);
                for (let a = r; a < n; ++a)
                  s += String.fromCharCode(127 & e[a]);
                return s;
              })(this, r, n);
            case "latin1":
            case "binary":
              return (function (e, r, n) {
                let s = "";
                n = Math.min(e.length, n);
                for (let a = r; a < n; ++a) s += String.fromCharCode(e[a]);
                return s;
              })(this, r, n);
            case "base64":
              var l, u;
              return (
                (l = r),
                (u = n),
                0 === l && u === this.length
                  ? s.fromByteArray(this)
                  : s.fromByteArray(this.slice(l, u))
              );
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return (function (e, r, n) {
                let s = e.slice(r, n),
                  a = "";
                for (let e = 0; e < s.length - 1; e += 2)
                  a += String.fromCharCode(s[e] + 256 * s[e + 1]);
                return a;
              })(this, r, n);
            default:
              if (a) throw TypeError("Unknown encoding: " + e);
              (e = (e + "").toLowerCase()), (a = !0);
          }
      }
      function swap(e, r, n) {
        let s = e[r];
        (e[r] = e[n]), (e[n] = s);
      }
      function bidirectionalIndexOf(e, r, n, s, a) {
        var l;
        if (0 === e.length) return -1;
        if (
          ("string" == typeof n
            ? ((s = n), (n = 0))
            : n > 2147483647
            ? (n = 2147483647)
            : n < -2147483648 && (n = -2147483648),
          (l = n = +n) != l && (n = a ? 0 : e.length - 1),
          n < 0 && (n = e.length + n),
          n >= e.length)
        ) {
          if (a) return -1;
          n = e.length - 1;
        } else if (n < 0) {
          if (!a) return -1;
          n = 0;
        }
        if (
          ("string" == typeof r && (r = Buffer.from(r, s)), Buffer.isBuffer(r))
        )
          return 0 === r.length ? -1 : arrayIndexOf(e, r, n, s, a);
        if ("number" == typeof r)
          return ((r &= 255), "function" == typeof Uint8Array.prototype.indexOf)
            ? a
              ? Uint8Array.prototype.indexOf.call(e, r, n)
              : Uint8Array.prototype.lastIndexOf.call(e, r, n)
            : arrayIndexOf(e, [r], n, s, a);
        throw TypeError("val must be string, number or Buffer");
      }
      function arrayIndexOf(e, r, n, s, a) {
        let l,
          u = 1,
          c = e.length,
          h = r.length;
        if (
          void 0 !== s &&
          ("ucs2" === (s = String(s).toLowerCase()) ||
            "ucs-2" === s ||
            "utf16le" === s ||
            "utf-16le" === s)
        ) {
          if (e.length < 2 || r.length < 2) return -1;
          (u = 2), (c /= 2), (h /= 2), (n /= 2);
        }
        function read(e, r) {
          return 1 === u ? e[r] : e.readUInt16BE(r * u);
        }
        if (a) {
          let s = -1;
          for (l = n; l < c; l++)
            if (read(e, l) === read(r, -1 === s ? 0 : l - s)) {
              if ((-1 === s && (s = l), l - s + 1 === h)) return s * u;
            } else -1 !== s && (l -= l - s), (s = -1);
        } else
          for (n + h > c && (n = c - h), l = n; l >= 0; l--) {
            let n = !0;
            for (let s = 0; s < h; s++)
              if (read(e, l + s) !== read(r, s)) {
                n = !1;
                break;
              }
            if (n) return l;
          }
        return -1;
      }
      function utf8Slice(e, r, n) {
        n = Math.min(e.length, n);
        let s = [],
          a = r;
        for (; a < n; ) {
          let r = e[a],
            l = null,
            u = r > 239 ? 4 : r > 223 ? 3 : r > 191 ? 2 : 1;
          if (a + u <= n) {
            let n, s, c, h;
            switch (u) {
              case 1:
                r < 128 && (l = r);
                break;
              case 2:
                (192 & (n = e[a + 1])) == 128 &&
                  (h = ((31 & r) << 6) | (63 & n)) > 127 &&
                  (l = h);
                break;
              case 3:
                (n = e[a + 1]),
                  (s = e[a + 2]),
                  (192 & n) == 128 &&
                    (192 & s) == 128 &&
                    (h = ((15 & r) << 12) | ((63 & n) << 6) | (63 & s)) >
                      2047 &&
                    (h < 55296 || h > 57343) &&
                    (l = h);
                break;
              case 4:
                (n = e[a + 1]),
                  (s = e[a + 2]),
                  (c = e[a + 3]),
                  (192 & n) == 128 &&
                    (192 & s) == 128 &&
                    (192 & c) == 128 &&
                    (h =
                      ((15 & r) << 18) |
                      ((63 & n) << 12) |
                      ((63 & s) << 6) |
                      (63 & c)) > 65535 &&
                    h < 1114112 &&
                    (l = h);
            }
          }
          null === l
            ? ((l = 65533), (u = 1))
            : l > 65535 &&
              ((l -= 65536),
              s.push(((l >>> 10) & 1023) | 55296),
              (l = 56320 | (1023 & l))),
            s.push(l),
            (a += u);
        }
        return (function (e) {
          let r = e.length;
          if (r <= 4096) return String.fromCharCode.apply(String, e);
          let n = "",
            s = 0;
          for (; s < r; )
            n += String.fromCharCode.apply(String, e.slice(s, (s += 4096)));
          return n;
        })(s);
      }
      function checkOffset(e, r, n) {
        if (e % 1 != 0 || e < 0) throw RangeError("offset is not uint");
        if (e + r > n)
          throw RangeError("Trying to access beyond buffer length");
      }
      function checkInt(e, r, n, s, a, l) {
        if (!Buffer.isBuffer(e))
          throw TypeError('"buffer" argument must be a Buffer instance');
        if (r > a || r < l)
          throw RangeError('"value" argument is out of bounds');
        if (n + s > e.length) throw RangeError("Index out of range");
      }
      function wrtBigUInt64LE(e, r, n, s, a) {
        checkIntBI(r, s, a, e, n, 7);
        let l = Number(r & BigInt(4294967295));
        (e[n++] = l),
          (l >>= 8),
          (e[n++] = l),
          (l >>= 8),
          (e[n++] = l),
          (l >>= 8),
          (e[n++] = l);
        let u = Number((r >> BigInt(32)) & BigInt(4294967295));
        return (
          (e[n++] = u),
          (u >>= 8),
          (e[n++] = u),
          (u >>= 8),
          (e[n++] = u),
          (u >>= 8),
          (e[n++] = u),
          n
        );
      }
      function wrtBigUInt64BE(e, r, n, s, a) {
        checkIntBI(r, s, a, e, n, 7);
        let l = Number(r & BigInt(4294967295));
        (e[n + 7] = l),
          (l >>= 8),
          (e[n + 6] = l),
          (l >>= 8),
          (e[n + 5] = l),
          (l >>= 8),
          (e[n + 4] = l);
        let u = Number((r >> BigInt(32)) & BigInt(4294967295));
        return (
          (e[n + 3] = u),
          (u >>= 8),
          (e[n + 2] = u),
          (u >>= 8),
          (e[n + 1] = u),
          (u >>= 8),
          (e[n] = u),
          n + 8
        );
      }
      function checkIEEE754(e, r, n, s, a, l) {
        if (n + s > e.length || n < 0) throw RangeError("Index out of range");
      }
      function writeFloat(e, r, n, s, l) {
        return (
          (r = +r),
          (n >>>= 0),
          l ||
            checkIEEE754(
              e,
              r,
              n,
              4,
              34028234663852886e22,
              -34028234663852886e22
            ),
          a.write(e, r, n, s, 23, 4),
          n + 4
        );
      }
      function writeDouble(e, r, n, s, l) {
        return (
          (r = +r),
          (n >>>= 0),
          l ||
            checkIEEE754(
              e,
              r,
              n,
              8,
              17976931348623157e292,
              -17976931348623157e292
            ),
          a.write(e, r, n, s, 52, 8),
          n + 8
        );
      }
      (r.lW = Buffer),
        (r.h2 = 50),
        (Buffer.TYPED_ARRAY_SUPPORT = (function () {
          try {
            let e = new Uint8Array(1),
              r = {
                foo: function () {
                  return 42;
                },
              };
            return (
              Object.setPrototypeOf(r, Uint8Array.prototype),
              Object.setPrototypeOf(e, r),
              42 === e.foo()
            );
          } catch (e) {
            return !1;
          }
        })()),
        Buffer.TYPED_ARRAY_SUPPORT ||
          "undefined" == typeof console ||
          "function" != typeof console.error ||
          console.error(
            "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
          ),
        Object.defineProperty(Buffer.prototype, "parent", {
          enumerable: !0,
          get: function () {
            if (Buffer.isBuffer(this)) return this.buffer;
          },
        }),
        Object.defineProperty(Buffer.prototype, "offset", {
          enumerable: !0,
          get: function () {
            if (Buffer.isBuffer(this)) return this.byteOffset;
          },
        }),
        (Buffer.poolSize = 8192),
        (Buffer.from = function (e, r, n) {
          return from(e, r, n);
        }),
        Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype),
        Object.setPrototypeOf(Buffer, Uint8Array),
        (Buffer.alloc = function (e, r, n) {
          return (assertSize(e), e <= 0)
            ? createBuffer(e)
            : void 0 !== r
            ? "string" == typeof n
              ? createBuffer(e).fill(r, n)
              : createBuffer(e).fill(r)
            : createBuffer(e);
        }),
        (Buffer.allocUnsafe = function (e) {
          return allocUnsafe(e);
        }),
        (Buffer.allocUnsafeSlow = function (e) {
          return allocUnsafe(e);
        }),
        (Buffer.isBuffer = function (e) {
          return null != e && !0 === e._isBuffer && e !== Buffer.prototype;
        }),
        (Buffer.compare = function (e, r) {
          if (
            (isInstance(e, Uint8Array) &&
              (e = Buffer.from(e, e.offset, e.byteLength)),
            isInstance(r, Uint8Array) &&
              (r = Buffer.from(r, r.offset, r.byteLength)),
            !Buffer.isBuffer(e) || !Buffer.isBuffer(r))
          )
            throw TypeError(
              'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
            );
          if (e === r) return 0;
          let n = e.length,
            s = r.length;
          for (let a = 0, l = Math.min(n, s); a < l; ++a)
            if (e[a] !== r[a]) {
              (n = e[a]), (s = r[a]);
              break;
            }
          return n < s ? -1 : s < n ? 1 : 0;
        }),
        (Buffer.isEncoding = function (e) {
          switch (String(e).toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "latin1":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return !0;
            default:
              return !1;
          }
        }),
        (Buffer.concat = function (e, r) {
          let n;
          if (!Array.isArray(e))
            throw TypeError('"list" argument must be an Array of Buffers');
          if (0 === e.length) return Buffer.alloc(0);
          if (void 0 === r)
            for (n = 0, r = 0; n < e.length; ++n) r += e[n].length;
          let s = Buffer.allocUnsafe(r),
            a = 0;
          for (n = 0; n < e.length; ++n) {
            let r = e[n];
            if (isInstance(r, Uint8Array))
              a + r.length > s.length
                ? (Buffer.isBuffer(r) || (r = Buffer.from(r)), r.copy(s, a))
                : Uint8Array.prototype.set.call(s, r, a);
            else if (Buffer.isBuffer(r)) r.copy(s, a);
            else throw TypeError('"list" argument must be an Array of Buffers');
            a += r.length;
          }
          return s;
        }),
        (Buffer.byteLength = byteLength),
        (Buffer.prototype._isBuffer = !0),
        (Buffer.prototype.swap16 = function () {
          let e = this.length;
          if (e % 2 != 0)
            throw RangeError("Buffer size must be a multiple of 16-bits");
          for (let r = 0; r < e; r += 2) swap(this, r, r + 1);
          return this;
        }),
        (Buffer.prototype.swap32 = function () {
          let e = this.length;
          if (e % 4 != 0)
            throw RangeError("Buffer size must be a multiple of 32-bits");
          for (let r = 0; r < e; r += 4)
            swap(this, r, r + 3), swap(this, r + 1, r + 2);
          return this;
        }),
        (Buffer.prototype.swap64 = function () {
          let e = this.length;
          if (e % 8 != 0)
            throw RangeError("Buffer size must be a multiple of 64-bits");
          for (let r = 0; r < e; r += 8)
            swap(this, r, r + 7),
              swap(this, r + 1, r + 6),
              swap(this, r + 2, r + 5),
              swap(this, r + 3, r + 4);
          return this;
        }),
        (Buffer.prototype.toString = function () {
          let e = this.length;
          return 0 === e
            ? ""
            : 0 == arguments.length
            ? utf8Slice(this, 0, e)
            : slowToString.apply(this, arguments);
        }),
        (Buffer.prototype.toLocaleString = Buffer.prototype.toString),
        (Buffer.prototype.equals = function (e) {
          if (!Buffer.isBuffer(e)) throw TypeError("Argument must be a Buffer");
          return this === e || 0 === Buffer.compare(this, e);
        }),
        (Buffer.prototype.inspect = function () {
          let e = "",
            n = r.h2;
          return (
            (e = this.toString("hex", 0, n)
              .replace(/(.{2})/g, "$1 ")
              .trim()),
            this.length > n && (e += " ... "),
            "<Buffer " + e + ">"
          );
        }),
        l && (Buffer.prototype[l] = Buffer.prototype.inspect),
        (Buffer.prototype.compare = function (e, r, n, s, a) {
          if (
            (isInstance(e, Uint8Array) &&
              (e = Buffer.from(e, e.offset, e.byteLength)),
            !Buffer.isBuffer(e))
          )
            throw TypeError(
              'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
                typeof e
            );
          if (
            (void 0 === r && (r = 0),
            void 0 === n && (n = e ? e.length : 0),
            void 0 === s && (s = 0),
            void 0 === a && (a = this.length),
            r < 0 || n > e.length || s < 0 || a > this.length)
          )
            throw RangeError("out of range index");
          if (s >= a && r >= n) return 0;
          if (s >= a) return -1;
          if (r >= n) return 1;
          if (((r >>>= 0), (n >>>= 0), (s >>>= 0), (a >>>= 0), this === e))
            return 0;
          let l = a - s,
            u = n - r,
            c = Math.min(l, u),
            h = this.slice(s, a),
            d = e.slice(r, n);
          for (let e = 0; e < c; ++e)
            if (h[e] !== d[e]) {
              (l = h[e]), (u = d[e]);
              break;
            }
          return l < u ? -1 : u < l ? 1 : 0;
        }),
        (Buffer.prototype.includes = function (e, r, n) {
          return -1 !== this.indexOf(e, r, n);
        }),
        (Buffer.prototype.indexOf = function (e, r, n) {
          return bidirectionalIndexOf(this, e, r, n, !0);
        }),
        (Buffer.prototype.lastIndexOf = function (e, r, n) {
          return bidirectionalIndexOf(this, e, r, n, !1);
        }),
        (Buffer.prototype.write = function (e, r, n, s) {
          var a, l, u, c, h, d, f, p;
          if (void 0 === r) (s = "utf8"), (n = this.length), (r = 0);
          else if (void 0 === n && "string" == typeof r)
            (s = r), (n = this.length), (r = 0);
          else if (isFinite(r))
            (r >>>= 0),
              isFinite(n)
                ? ((n >>>= 0), void 0 === s && (s = "utf8"))
                : ((s = n), (n = void 0));
          else
            throw Error(
              "Buffer.write(string, encoding, offset[, length]) is no longer supported"
            );
          let m = this.length - r;
          if (
            ((void 0 === n || n > m) && (n = m),
            (e.length > 0 && (n < 0 || r < 0)) || r > this.length)
          )
            throw RangeError("Attempt to write outside buffer bounds");
          s || (s = "utf8");
          let y = !1;
          for (;;)
            switch (s) {
              case "hex":
                return (function (e, r, n, s) {
                  let a;
                  n = Number(n) || 0;
                  let l = e.length - n;
                  s ? (s = Number(s)) > l && (s = l) : (s = l);
                  let u = r.length;
                  for (s > u / 2 && (s = u / 2), a = 0; a < s; ++a) {
                    let s = parseInt(r.substr(2 * a, 2), 16);
                    if (s != s) break;
                    e[n + a] = s;
                  }
                  return a;
                })(this, e, r, n);
              case "utf8":
              case "utf-8":
                return (
                  (a = r),
                  (l = n),
                  blitBuffer(utf8ToBytes(e, this.length - a), this, a, l)
                );
              case "ascii":
              case "latin1":
              case "binary":
                return (
                  (u = r),
                  (c = n),
                  blitBuffer(
                    (function (e) {
                      let r = [];
                      for (let n = 0; n < e.length; ++n)
                        r.push(255 & e.charCodeAt(n));
                      return r;
                    })(e),
                    this,
                    u,
                    c
                  )
                );
              case "base64":
                return (
                  (h = r), (d = n), blitBuffer(base64ToBytes(e), this, h, d)
                );
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return (
                  (f = r),
                  (p = n),
                  blitBuffer(
                    (function (e, r) {
                      let n, s;
                      let a = [];
                      for (let l = 0; l < e.length && !((r -= 2) < 0); ++l)
                        (s = (n = e.charCodeAt(l)) >> 8),
                          a.push(n % 256),
                          a.push(s);
                      return a;
                    })(e, this.length - f),
                    this,
                    f,
                    p
                  )
                );
              default:
                if (y) throw TypeError("Unknown encoding: " + s);
                (s = ("" + s).toLowerCase()), (y = !0);
            }
        }),
        (Buffer.prototype.toJSON = function () {
          return {
            type: "Buffer",
            data: Array.prototype.slice.call(this._arr || this, 0),
          };
        }),
        (Buffer.prototype.slice = function (e, r) {
          let n = this.length;
          (e = ~~e),
            (r = void 0 === r ? n : ~~r),
            e < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n),
            r < 0 ? (r += n) < 0 && (r = 0) : r > n && (r = n),
            r < e && (r = e);
          let s = this.subarray(e, r);
          return Object.setPrototypeOf(s, Buffer.prototype), s;
        }),
        (Buffer.prototype.readUintLE = Buffer.prototype.readUIntLE =
          function (e, r, n) {
            (e >>>= 0), (r >>>= 0), n || checkOffset(e, r, this.length);
            let s = this[e],
              a = 1,
              l = 0;
            for (; ++l < r && (a *= 256); ) s += this[e + l] * a;
            return s;
          }),
        (Buffer.prototype.readUintBE = Buffer.prototype.readUIntBE =
          function (e, r, n) {
            (e >>>= 0), (r >>>= 0), n || checkOffset(e, r, this.length);
            let s = this[e + --r],
              a = 1;
            for (; r > 0 && (a *= 256); ) s += this[e + --r] * a;
            return s;
          }),
        (Buffer.prototype.readUint8 = Buffer.prototype.readUInt8 =
          function (e, r) {
            return (e >>>= 0), r || checkOffset(e, 1, this.length), this[e];
          }),
        (Buffer.prototype.readUint16LE = Buffer.prototype.readUInt16LE =
          function (e, r) {
            return (
              (e >>>= 0),
              r || checkOffset(e, 2, this.length),
              this[e] | (this[e + 1] << 8)
            );
          }),
        (Buffer.prototype.readUint16BE = Buffer.prototype.readUInt16BE =
          function (e, r) {
            return (
              (e >>>= 0),
              r || checkOffset(e, 2, this.length),
              (this[e] << 8) | this[e + 1]
            );
          }),
        (Buffer.prototype.readUint32LE = Buffer.prototype.readUInt32LE =
          function (e, r) {
            return (
              (e >>>= 0),
              r || checkOffset(e, 4, this.length),
              (this[e] | (this[e + 1] << 8) | (this[e + 2] << 16)) +
                16777216 * this[e + 3]
            );
          }),
        (Buffer.prototype.readUint32BE = Buffer.prototype.readUInt32BE =
          function (e, r) {
            return (
              (e >>>= 0),
              r || checkOffset(e, 4, this.length),
              16777216 * this[e] +
                ((this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3])
            );
          }),
        (Buffer.prototype.readBigUInt64LE = defineBigIntMethod(function (e) {
          validateNumber((e >>>= 0), "offset");
          let r = this[e],
            n = this[e + 7];
          (void 0 === r || void 0 === n) && boundsError(e, this.length - 8);
          let s =
              r + 256 * this[++e] + 65536 * this[++e] + 16777216 * this[++e],
            a = this[++e] + 256 * this[++e] + 65536 * this[++e] + 16777216 * n;
          return BigInt(s) + (BigInt(a) << BigInt(32));
        })),
        (Buffer.prototype.readBigUInt64BE = defineBigIntMethod(function (e) {
          validateNumber((e >>>= 0), "offset");
          let r = this[e],
            n = this[e + 7];
          (void 0 === r || void 0 === n) && boundsError(e, this.length - 8);
          let s =
              16777216 * r + 65536 * this[++e] + 256 * this[++e] + this[++e],
            a = 16777216 * this[++e] + 65536 * this[++e] + 256 * this[++e] + n;
          return (BigInt(s) << BigInt(32)) + BigInt(a);
        })),
        (Buffer.prototype.readIntLE = function (e, r, n) {
          (e >>>= 0), (r >>>= 0), n || checkOffset(e, r, this.length);
          let s = this[e],
            a = 1,
            l = 0;
          for (; ++l < r && (a *= 256); ) s += this[e + l] * a;
          return s >= (a *= 128) && (s -= Math.pow(2, 8 * r)), s;
        }),
        (Buffer.prototype.readIntBE = function (e, r, n) {
          (e >>>= 0), (r >>>= 0), n || checkOffset(e, r, this.length);
          let s = r,
            a = 1,
            l = this[e + --s];
          for (; s > 0 && (a *= 256); ) l += this[e + --s] * a;
          return l >= (a *= 128) && (l -= Math.pow(2, 8 * r)), l;
        }),
        (Buffer.prototype.readInt8 = function (e, r) {
          return ((e >>>= 0),
          r || checkOffset(e, 1, this.length),
          128 & this[e])
            ? -((255 - this[e] + 1) * 1)
            : this[e];
        }),
        (Buffer.prototype.readInt16LE = function (e, r) {
          (e >>>= 0), r || checkOffset(e, 2, this.length);
          let n = this[e] | (this[e + 1] << 8);
          return 32768 & n ? 4294901760 | n : n;
        }),
        (Buffer.prototype.readInt16BE = function (e, r) {
          (e >>>= 0), r || checkOffset(e, 2, this.length);
          let n = this[e + 1] | (this[e] << 8);
          return 32768 & n ? 4294901760 | n : n;
        }),
        (Buffer.prototype.readInt32LE = function (e, r) {
          return (
            (e >>>= 0),
            r || checkOffset(e, 4, this.length),
            this[e] |
              (this[e + 1] << 8) |
              (this[e + 2] << 16) |
              (this[e + 3] << 24)
          );
        }),
        (Buffer.prototype.readInt32BE = function (e, r) {
          return (
            (e >>>= 0),
            r || checkOffset(e, 4, this.length),
            (this[e] << 24) |
              (this[e + 1] << 16) |
              (this[e + 2] << 8) |
              this[e + 3]
          );
        }),
        (Buffer.prototype.readBigInt64LE = defineBigIntMethod(function (e) {
          validateNumber((e >>>= 0), "offset");
          let r = this[e],
            n = this[e + 7];
          (void 0 === r || void 0 === n) && boundsError(e, this.length - 8);
          let s =
            this[e + 4] + 256 * this[e + 5] + 65536 * this[e + 6] + (n << 24);
          return (
            (BigInt(s) << BigInt(32)) +
            BigInt(
              r + 256 * this[++e] + 65536 * this[++e] + 16777216 * this[++e]
            )
          );
        })),
        (Buffer.prototype.readBigInt64BE = defineBigIntMethod(function (e) {
          validateNumber((e >>>= 0), "offset");
          let r = this[e],
            n = this[e + 7];
          (void 0 === r || void 0 === n) && boundsError(e, this.length - 8);
          let s = (r << 24) + 65536 * this[++e] + 256 * this[++e] + this[++e];
          return (
            (BigInt(s) << BigInt(32)) +
            BigInt(
              16777216 * this[++e] + 65536 * this[++e] + 256 * this[++e] + n
            )
          );
        })),
        (Buffer.prototype.readFloatLE = function (e, r) {
          return (
            (e >>>= 0),
            r || checkOffset(e, 4, this.length),
            a.read(this, e, !0, 23, 4)
          );
        }),
        (Buffer.prototype.readFloatBE = function (e, r) {
          return (
            (e >>>= 0),
            r || checkOffset(e, 4, this.length),
            a.read(this, e, !1, 23, 4)
          );
        }),
        (Buffer.prototype.readDoubleLE = function (e, r) {
          return (
            (e >>>= 0),
            r || checkOffset(e, 8, this.length),
            a.read(this, e, !0, 52, 8)
          );
        }),
        (Buffer.prototype.readDoubleBE = function (e, r) {
          return (
            (e >>>= 0),
            r || checkOffset(e, 8, this.length),
            a.read(this, e, !1, 52, 8)
          );
        }),
        (Buffer.prototype.writeUintLE = Buffer.prototype.writeUIntLE =
          function (e, r, n, s) {
            if (((e = +e), (r >>>= 0), (n >>>= 0), !s)) {
              let s = Math.pow(2, 8 * n) - 1;
              checkInt(this, e, r, n, s, 0);
            }
            let a = 1,
              l = 0;
            for (this[r] = 255 & e; ++l < n && (a *= 256); )
              this[r + l] = (e / a) & 255;
            return r + n;
          }),
        (Buffer.prototype.writeUintBE = Buffer.prototype.writeUIntBE =
          function (e, r, n, s) {
            if (((e = +e), (r >>>= 0), (n >>>= 0), !s)) {
              let s = Math.pow(2, 8 * n) - 1;
              checkInt(this, e, r, n, s, 0);
            }
            let a = n - 1,
              l = 1;
            for (this[r + a] = 255 & e; --a >= 0 && (l *= 256); )
              this[r + a] = (e / l) & 255;
            return r + n;
          }),
        (Buffer.prototype.writeUint8 = Buffer.prototype.writeUInt8 =
          function (e, r, n) {
            return (
              (e = +e),
              (r >>>= 0),
              n || checkInt(this, e, r, 1, 255, 0),
              (this[r] = 255 & e),
              r + 1
            );
          }),
        (Buffer.prototype.writeUint16LE = Buffer.prototype.writeUInt16LE =
          function (e, r, n) {
            return (
              (e = +e),
              (r >>>= 0),
              n || checkInt(this, e, r, 2, 65535, 0),
              (this[r] = 255 & e),
              (this[r + 1] = e >>> 8),
              r + 2
            );
          }),
        (Buffer.prototype.writeUint16BE = Buffer.prototype.writeUInt16BE =
          function (e, r, n) {
            return (
              (e = +e),
              (r >>>= 0),
              n || checkInt(this, e, r, 2, 65535, 0),
              (this[r] = e >>> 8),
              (this[r + 1] = 255 & e),
              r + 2
            );
          }),
        (Buffer.prototype.writeUint32LE = Buffer.prototype.writeUInt32LE =
          function (e, r, n) {
            return (
              (e = +e),
              (r >>>= 0),
              n || checkInt(this, e, r, 4, 4294967295, 0),
              (this[r + 3] = e >>> 24),
              (this[r + 2] = e >>> 16),
              (this[r + 1] = e >>> 8),
              (this[r] = 255 & e),
              r + 4
            );
          }),
        (Buffer.prototype.writeUint32BE = Buffer.prototype.writeUInt32BE =
          function (e, r, n) {
            return (
              (e = +e),
              (r >>>= 0),
              n || checkInt(this, e, r, 4, 4294967295, 0),
              (this[r] = e >>> 24),
              (this[r + 1] = e >>> 16),
              (this[r + 2] = e >>> 8),
              (this[r + 3] = 255 & e),
              r + 4
            );
          }),
        (Buffer.prototype.writeBigUInt64LE = defineBigIntMethod(function (
          e,
          r = 0
        ) {
          return wrtBigUInt64LE(
            this,
            e,
            r,
            BigInt(0),
            BigInt("0xffffffffffffffff")
          );
        })),
        (Buffer.prototype.writeBigUInt64BE = defineBigIntMethod(function (
          e,
          r = 0
        ) {
          return wrtBigUInt64BE(
            this,
            e,
            r,
            BigInt(0),
            BigInt("0xffffffffffffffff")
          );
        })),
        (Buffer.prototype.writeIntLE = function (e, r, n, s) {
          if (((e = +e), (r >>>= 0), !s)) {
            let s = Math.pow(2, 8 * n - 1);
            checkInt(this, e, r, n, s - 1, -s);
          }
          let a = 0,
            l = 1,
            u = 0;
          for (this[r] = 255 & e; ++a < n && (l *= 256); )
            e < 0 && 0 === u && 0 !== this[r + a - 1] && (u = 1),
              (this[r + a] = (((e / l) >> 0) - u) & 255);
          return r + n;
        }),
        (Buffer.prototype.writeIntBE = function (e, r, n, s) {
          if (((e = +e), (r >>>= 0), !s)) {
            let s = Math.pow(2, 8 * n - 1);
            checkInt(this, e, r, n, s - 1, -s);
          }
          let a = n - 1,
            l = 1,
            u = 0;
          for (this[r + a] = 255 & e; --a >= 0 && (l *= 256); )
            e < 0 && 0 === u && 0 !== this[r + a + 1] && (u = 1),
              (this[r + a] = (((e / l) >> 0) - u) & 255);
          return r + n;
        }),
        (Buffer.prototype.writeInt8 = function (e, r, n) {
          return (
            (e = +e),
            (r >>>= 0),
            n || checkInt(this, e, r, 1, 127, -128),
            e < 0 && (e = 255 + e + 1),
            (this[r] = 255 & e),
            r + 1
          );
        }),
        (Buffer.prototype.writeInt16LE = function (e, r, n) {
          return (
            (e = +e),
            (r >>>= 0),
            n || checkInt(this, e, r, 2, 32767, -32768),
            (this[r] = 255 & e),
            (this[r + 1] = e >>> 8),
            r + 2
          );
        }),
        (Buffer.prototype.writeInt16BE = function (e, r, n) {
          return (
            (e = +e),
            (r >>>= 0),
            n || checkInt(this, e, r, 2, 32767, -32768),
            (this[r] = e >>> 8),
            (this[r + 1] = 255 & e),
            r + 2
          );
        }),
        (Buffer.prototype.writeInt32LE = function (e, r, n) {
          return (
            (e = +e),
            (r >>>= 0),
            n || checkInt(this, e, r, 4, 2147483647, -2147483648),
            (this[r] = 255 & e),
            (this[r + 1] = e >>> 8),
            (this[r + 2] = e >>> 16),
            (this[r + 3] = e >>> 24),
            r + 4
          );
        }),
        (Buffer.prototype.writeInt32BE = function (e, r, n) {
          return (
            (e = +e),
            (r >>>= 0),
            n || checkInt(this, e, r, 4, 2147483647, -2147483648),
            e < 0 && (e = 4294967295 + e + 1),
            (this[r] = e >>> 24),
            (this[r + 1] = e >>> 16),
            (this[r + 2] = e >>> 8),
            (this[r + 3] = 255 & e),
            r + 4
          );
        }),
        (Buffer.prototype.writeBigInt64LE = defineBigIntMethod(function (
          e,
          r = 0
        ) {
          return wrtBigUInt64LE(
            this,
            e,
            r,
            -BigInt("0x8000000000000000"),
            BigInt("0x7fffffffffffffff")
          );
        })),
        (Buffer.prototype.writeBigInt64BE = defineBigIntMethod(function (
          e,
          r = 0
        ) {
          return wrtBigUInt64BE(
            this,
            e,
            r,
            -BigInt("0x8000000000000000"),
            BigInt("0x7fffffffffffffff")
          );
        })),
        (Buffer.prototype.writeFloatLE = function (e, r, n) {
          return writeFloat(this, e, r, !0, n);
        }),
        (Buffer.prototype.writeFloatBE = function (e, r, n) {
          return writeFloat(this, e, r, !1, n);
        }),
        (Buffer.prototype.writeDoubleLE = function (e, r, n) {
          return writeDouble(this, e, r, !0, n);
        }),
        (Buffer.prototype.writeDoubleBE = function (e, r, n) {
          return writeDouble(this, e, r, !1, n);
        }),
        (Buffer.prototype.copy = function (e, r, n, s) {
          if (!Buffer.isBuffer(e))
            throw TypeError("argument should be a Buffer");
          if (
            (n || (n = 0),
            s || 0 === s || (s = this.length),
            r >= e.length && (r = e.length),
            r || (r = 0),
            s > 0 && s < n && (s = n),
            s === n || 0 === e.length || 0 === this.length)
          )
            return 0;
          if (r < 0) throw RangeError("targetStart out of bounds");
          if (n < 0 || n >= this.length) throw RangeError("Index out of range");
          if (s < 0) throw RangeError("sourceEnd out of bounds");
          s > this.length && (s = this.length),
            e.length - r < s - n && (s = e.length - r + n);
          let a = s - n;
          return (
            this === e && "function" == typeof Uint8Array.prototype.copyWithin
              ? this.copyWithin(r, n, s)
              : Uint8Array.prototype.set.call(e, this.subarray(n, s), r),
            a
          );
        }),
        (Buffer.prototype.fill = function (e, r, n, s) {
          let a;
          if ("string" == typeof e) {
            if (
              ("string" == typeof r
                ? ((s = r), (r = 0), (n = this.length))
                : "string" == typeof n && ((s = n), (n = this.length)),
              void 0 !== s && "string" != typeof s)
            )
              throw TypeError("encoding must be a string");
            if ("string" == typeof s && !Buffer.isEncoding(s))
              throw TypeError("Unknown encoding: " + s);
            if (1 === e.length) {
              let r = e.charCodeAt(0);
              (("utf8" === s && r < 128) || "latin1" === s) && (e = r);
            }
          } else
            "number" == typeof e
              ? (e &= 255)
              : "boolean" == typeof e && (e = Number(e));
          if (r < 0 || this.length < r || this.length < n)
            throw RangeError("Out of range index");
          if (n <= r) return this;
          if (
            ((r >>>= 0),
            (n = void 0 === n ? this.length : n >>> 0),
            e || (e = 0),
            "number" == typeof e)
          )
            for (a = r; a < n; ++a) this[a] = e;
          else {
            let l = Buffer.isBuffer(e) ? e : Buffer.from(e, s),
              u = l.length;
            if (0 === u)
              throw TypeError(
                'The value "' + e + '" is invalid for argument "value"'
              );
            for (a = 0; a < n - r; ++a) this[a + r] = l[a % u];
          }
          return this;
        });
      let u = {};
      function E(e, r, n) {
        u[e] = class extends n {
          constructor() {
            super(),
              Object.defineProperty(this, "message", {
                value: r.apply(this, arguments),
                writable: !0,
                configurable: !0,
              }),
              (this.name = `${this.name} [${e}]`),
              this.stack,
              delete this.name;
          }
          get code() {
            return e;
          }
          set code(e) {
            Object.defineProperty(this, "code", {
              configurable: !0,
              enumerable: !0,
              value: e,
              writable: !0,
            });
          }
          toString() {
            return `${this.name} [${e}]: ${this.message}`;
          }
        };
      }
      function addNumericalSeparator(e) {
        let r = "",
          n = e.length,
          s = "-" === e[0] ? 1 : 0;
        for (; n >= s + 4; n -= 3) r = `_${e.slice(n - 3, n)}${r}`;
        return `${e.slice(0, n)}${r}`;
      }
      function checkIntBI(e, r, n, s, a, l) {
        if (e > n || e < r) {
          let s;
          let a = "bigint" == typeof r ? "n" : "";
          throw (
            ((s =
              l > 3
                ? 0 === r || r === BigInt(0)
                  ? `>= 0${a} and < 2${a} ** ${(l + 1) * 8}${a}`
                  : `>= -(2${a} ** ${(l + 1) * 8 - 1}${a}) and < 2 ** ${
                      (l + 1) * 8 - 1
                    }${a}`
                : `>= ${r}${a} and <= ${n}${a}`),
            new u.ERR_OUT_OF_RANGE("value", s, e))
          );
        }
        validateNumber(a, "offset"),
          (void 0 === s[a] || void 0 === s[a + l]) &&
            boundsError(a, s.length - (l + 1));
      }
      function validateNumber(e, r) {
        if ("number" != typeof e)
          throw new u.ERR_INVALID_ARG_TYPE(r, "number", e);
      }
      function boundsError(e, r, n) {
        if (Math.floor(e) !== e)
          throw (
            (validateNumber(e, n),
            new u.ERR_OUT_OF_RANGE(n || "offset", "an integer", e))
          );
        if (r < 0) throw new u.ERR_BUFFER_OUT_OF_BOUNDS();
        throw new u.ERR_OUT_OF_RANGE(
          n || "offset",
          `>= ${n ? 1 : 0} and <= ${r}`,
          e
        );
      }
      E(
        "ERR_BUFFER_OUT_OF_BOUNDS",
        function (e) {
          return e
            ? `${e} is outside of buffer bounds`
            : "Attempt to access memory outside buffer bounds";
        },
        RangeError
      ),
        E(
          "ERR_INVALID_ARG_TYPE",
          function (e, r) {
            return `The "${e}" argument must be of type number. Received type ${typeof r}`;
          },
          TypeError
        ),
        E(
          "ERR_OUT_OF_RANGE",
          function (e, r, n) {
            let s = `The value of "${e}" is out of range.`,
              a = n;
            return (
              Number.isInteger(n) && Math.abs(n) > 4294967296
                ? (a = addNumericalSeparator(String(n)))
                : "bigint" == typeof n &&
                  ((a = String(n)),
                  (n > BigInt(2) ** BigInt(32) ||
                    n < -(BigInt(2) ** BigInt(32))) &&
                    (a = addNumericalSeparator(a)),
                  (a += "n")),
              (s += ` It must be ${r}. Received ${a}`)
            );
          },
          RangeError
        );
      let c = /[^+/0-9A-Za-z-_]/g;
      function utf8ToBytes(e, r) {
        let n;
        r = r || 1 / 0;
        let s = e.length,
          a = null,
          l = [];
        for (let u = 0; u < s; ++u) {
          if ((n = e.charCodeAt(u)) > 55295 && n < 57344) {
            if (!a) {
              if (n > 56319 || u + 1 === s) {
                (r -= 3) > -1 && l.push(239, 191, 189);
                continue;
              }
              a = n;
              continue;
            }
            if (n < 56320) {
              (r -= 3) > -1 && l.push(239, 191, 189), (a = n);
              continue;
            }
            n = (((a - 55296) << 10) | (n - 56320)) + 65536;
          } else a && (r -= 3) > -1 && l.push(239, 191, 189);
          if (((a = null), n < 128)) {
            if ((r -= 1) < 0) break;
            l.push(n);
          } else if (n < 2048) {
            if ((r -= 2) < 0) break;
            l.push((n >> 6) | 192, (63 & n) | 128);
          } else if (n < 65536) {
            if ((r -= 3) < 0) break;
            l.push((n >> 12) | 224, ((n >> 6) & 63) | 128, (63 & n) | 128);
          } else if (n < 1114112) {
            if ((r -= 4) < 0) break;
            l.push(
              (n >> 18) | 240,
              ((n >> 12) & 63) | 128,
              ((n >> 6) & 63) | 128,
              (63 & n) | 128
            );
          } else throw Error("Invalid code point");
        }
        return l;
      }
      function base64ToBytes(e) {
        return s.toByteArray(
          (function (e) {
            if ((e = (e = e.split("=")[0]).trim().replace(c, "")).length < 2)
              return "";
            for (; e.length % 4 != 0; ) e += "=";
            return e;
          })(e)
        );
      }
      function blitBuffer(e, r, n, s) {
        let a;
        for (a = 0; a < s && !(a + n >= r.length) && !(a >= e.length); ++a)
          r[a + n] = e[a];
        return a;
      }
      function isInstance(e, r) {
        return (
          e instanceof r ||
          (null != e &&
            null != e.constructor &&
            null != e.constructor.name &&
            e.constructor.name === r.name)
        );
      }
      let h = (function () {
        let e = "0123456789abcdef",
          r = Array(256);
        for (let n = 0; n < 16; ++n) {
          let s = 16 * n;
          for (let a = 0; a < 16; ++a) r[s + a] = e[n] + e[a];
        }
        return r;
      })();
      function defineBigIntMethod(e) {
        return "undefined" == typeof BigInt ? BufferBigIntNotDefined : e;
      }
      function BufferBigIntNotDefined() {
        throw Error("BigInt not supported");
      }
    },
    21924: function (e, r, n) {
      "use strict";
      var s = n(40210),
        a = n(55559),
        l = a(s("String.prototype.indexOf"));
      e.exports = function (e, r) {
        var n = s(e, !!r);
        return "function" == typeof n && l(e, ".prototype.") > -1 ? a(n) : n;
      };
    },
    55559: function (e, r, n) {
      "use strict";
      var s = n(58612),
        a = n(40210),
        l = n(67771),
        u = n(14453),
        c = a("%Function.prototype.apply%"),
        h = a("%Function.prototype.call%"),
        d = a("%Reflect.apply%", !0) || s.call(h, c),
        f = n(24429),
        p = a("%Math.max%");
      e.exports = function (e) {
        if ("function" != typeof e) throw new u("a function is required");
        var r = d(s, h, arguments);
        return l(r, 1 + p(0, e.length - (arguments.length - 1)), !0);
      };
      var applyBind = function () {
        return d(s, c, arguments);
      };
      f
        ? f(e.exports, "apply", { value: applyBind })
        : (e.exports.apply = applyBind);
    },
    12296: function (e, r, n) {
      "use strict";
      var s = n(24429),
        a = n(33464),
        l = n(14453),
        u = n(27296);
      e.exports = function (e, r, n) {
        if (!e || ("object" != typeof e && "function" != typeof e))
          throw new l("`obj` must be an object or a function`");
        if ("string" != typeof r && "symbol" != typeof r)
          throw new l("`property` must be a string or a symbol`");
        if (
          arguments.length > 3 &&
          "boolean" != typeof arguments[3] &&
          null !== arguments[3]
        )
          throw new l(
            "`nonEnumerable`, if provided, must be a boolean or null"
          );
        if (
          arguments.length > 4 &&
          "boolean" != typeof arguments[4] &&
          null !== arguments[4]
        )
          throw new l("`nonWritable`, if provided, must be a boolean or null");
        if (
          arguments.length > 5 &&
          "boolean" != typeof arguments[5] &&
          null !== arguments[5]
        )
          throw new l(
            "`nonConfigurable`, if provided, must be a boolean or null"
          );
        if (arguments.length > 6 && "boolean" != typeof arguments[6])
          throw new l("`loose`, if provided, must be a boolean");
        var c = arguments.length > 3 ? arguments[3] : null,
          h = arguments.length > 4 ? arguments[4] : null,
          d = arguments.length > 5 ? arguments[5] : null,
          f = arguments.length > 6 && arguments[6],
          p = !!u && u(e, r);
        if (s)
          s(e, r, {
            configurable: null === d && p ? p.configurable : !d,
            enumerable: null === c && p ? p.enumerable : !c,
            value: n,
            writable: null === h && p ? p.writable : !h,
          });
        else if (!f && (c || h || d))
          throw new a(
            "This environment does not support defining a property as non-configurable, non-writable, or non-enumerable."
          );
        else e[r] = n;
      };
    },
    24429: function (e, r, n) {
      "use strict";
      var s = n(40210)("%Object.defineProperty%", !0) || !1;
      if (s)
        try {
          s({}, "a", { value: 1 });
        } catch (e) {
          s = !1;
        }
      e.exports = s;
    },
    53981: function (e) {
      "use strict";
      e.exports = EvalError;
    },
    81648: function (e) {
      "use strict";
      e.exports = Error;
    },
    24726: function (e) {
      "use strict";
      e.exports = RangeError;
    },
    26712: function (e) {
      "use strict";
      e.exports = ReferenceError;
    },
    33464: function (e) {
      "use strict";
      e.exports = SyntaxError;
    },
    14453: function (e) {
      "use strict";
      e.exports = TypeError;
    },
    43915: function (e) {
      "use strict";
      e.exports = URIError;
    },
    53346: function (e, r, n) {
      e.exports = (function () {
        "use strict";
        var e = Function.prototype.toString,
          r = Object.create,
          s = Object.defineProperty,
          a = Object.getOwnPropertyDescriptor,
          l = Object.getOwnPropertyNames,
          u = Object.getOwnPropertySymbols,
          c = Object.getPrototypeOf,
          h = Object.prototype,
          d = h.hasOwnProperty,
          f = h.propertyIsEnumerable,
          p = "function" == typeof u,
          m = "function" == typeof WeakMap,
          y = (function () {
            if (m)
              return function () {
                return new WeakMap();
              };
            var e = (function () {
              function Cache() {
                (this._keys = []), (this._values = []);
              }
              return (
                (Cache.prototype.has = function (e) {
                  return !!~this._keys.indexOf(e);
                }),
                (Cache.prototype.get = function (e) {
                  return this._values[this._keys.indexOf(e)];
                }),
                (Cache.prototype.set = function (e, r) {
                  this._keys.push(e), this._values.push(r);
                }),
                Cache
              );
            })();
            return function () {
              return new e();
            };
          })(),
          getCleanClone = function (n, s) {
            var a = n.__proto__ || c(n);
            if (!a) return r(null);
            var l = a.constructor;
            if (l === s.Object) return a === s.Object.prototype ? {} : r(a);
            if (~e.call(l).indexOf("[native code]"))
              try {
                return new l();
              } catch (e) {}
            return r(a);
          },
          getObjectCloneLoose = function (e, r, n, s) {
            var a = getCleanClone(e, r);
            for (var l in (s.set(e, a), e)) d.call(e, l) && (a[l] = n(e[l], s));
            if (p)
              for (var c = u(e), h = 0, m = c.length, y = void 0; h < m; ++h)
                (y = c[h]), f.call(e, y) && (a[y] = n(e[y], s));
            return a;
          },
          getObjectCloneStrict = function (e, r, n, c) {
            var h = getCleanClone(e, r);
            c.set(e, h);
            for (
              var d = p ? l(e).concat(u(e)) : l(e),
                f = 0,
                m = d.length,
                y = void 0,
                g = void 0;
              f < m;
              ++f
            )
              if ("callee" !== (y = d[f]) && "caller" !== y) {
                if ((g = a(e, y))) {
                  g.get || g.set || (g.value = n(e[y], c));
                  try {
                    s(h, y, g);
                  } catch (e) {
                    h[y] = g.value;
                  }
                } else h[y] = n(e[y], c);
              }
            return h;
          },
          getRegExpFlags = function (e) {
            var r = "";
            return (
              e.global && (r += "g"),
              e.ignoreCase && (r += "i"),
              e.multiline && (r += "m"),
              e.unicode && (r += "u"),
              e.sticky && (r += "y"),
              r
            );
          },
          g = Array.isArray,
          v = Object.getPrototypeOf,
          b = (function () {
            return "undefined" != typeof globalThis
              ? globalThis
              : "undefined" != typeof self
              ? self
              : "undefined" != typeof window
              ? window
              : void 0 !== n.g
              ? n.g
              : (console &&
                  console.error &&
                  console.error(
                    'Unable to locate global object, returning "this".'
                  ),
                this);
          })();
        function copy(e, r) {
          var n = !!(r && r.isStrict),
            s = (r && r.realm) || b,
            a = n ? getObjectCloneStrict : getObjectCloneLoose,
            handleCopy = function (e, r) {
              if (!e || "object" != typeof e) return e;
              if (r.has(e)) return r.get(e);
              var l,
                u = e.__proto__ || v(e),
                c = u && u.constructor;
              if (!c || c === s.Object) return a(e, s, handleCopy, r);
              if (g(e)) {
                if (n) return getObjectCloneStrict(e, s, handleCopy, r);
                (l = new c()), r.set(e, l);
                for (var h = 0, d = e.length; h < d; ++h)
                  l[h] = handleCopy(e[h], r);
                return l;
              }
              if (e instanceof s.Date) return new c(e.getTime());
              if (e instanceof s.RegExp)
                return (
                  ((l = new c(
                    e.source,
                    e.flags || getRegExpFlags(e)
                  )).lastIndex = e.lastIndex),
                  l
                );
              if (s.Map && e instanceof s.Map)
                return (
                  (l = new c()),
                  r.set(e, l),
                  e.forEach(function (e, n) {
                    l.set(n, handleCopy(e, r));
                  }),
                  l
                );
              if (s.Set && e instanceof s.Set)
                return (
                  (l = new c()),
                  r.set(e, l),
                  e.forEach(function (e) {
                    l.add(handleCopy(e, r));
                  }),
                  l
                );
              if (s.Blob && e instanceof s.Blob)
                return e.slice(0, e.size, e.type);
              if (s.Buffer && s.Buffer.isBuffer(e))
                return (
                  (l = s.Buffer.allocUnsafe
                    ? s.Buffer.allocUnsafe(e.length)
                    : new c(e.length)),
                  r.set(e, l),
                  e.copy(l),
                  l
                );
              if (s.ArrayBuffer) {
                if (s.ArrayBuffer.isView(e))
                  return (l = new c(e.buffer.slice(0))), r.set(e, l), l;
                if (e instanceof s.ArrayBuffer)
                  return (l = e.slice(0)), r.set(e, l), l;
              }
              return "function" == typeof e.then ||
                e instanceof Error ||
                (s.WeakMap && e instanceof s.WeakMap) ||
                (s.WeakSet && e instanceof s.WeakSet)
                ? e
                : a(e, s, handleCopy, r);
            };
          return handleCopy(e, y());
        }
        return (
          (copy.default = copy),
          (copy.strict = function (e, r) {
            return copy(e, { isStrict: !0, realm: r ? r.realm : void 0 });
          }),
          copy
        );
      })();
    },
    17648: function (e) {
      "use strict";
      var r = Object.prototype.toString,
        n = Math.max,
        concatty = function (e, r) {
          for (var n = [], s = 0; s < e.length; s += 1) n[s] = e[s];
          for (var a = 0; a < r.length; a += 1) n[a + e.length] = r[a];
          return n;
        },
        slicy = function (e, r) {
          for (var n = [], s = r || 0, a = 0; s < e.length; s += 1, a += 1)
            n[a] = e[s];
          return n;
        },
        joiny = function (e, r) {
          for (var n = "", s = 0; s < e.length; s += 1)
            (n += e[s]), s + 1 < e.length && (n += r);
          return n;
        };
      e.exports = function (e) {
        var s,
          a = this;
        if ("function" != typeof a || "[object Function]" !== r.apply(a))
          throw TypeError(
            "Function.prototype.bind called on incompatible " + a
          );
        for (
          var l = slicy(arguments, 1),
            u = n(0, a.length - l.length),
            c = [],
            h = 0;
          h < u;
          h++
        )
          c[h] = "$" + h;
        if (
          ((s = Function(
            "binder",
            "return function (" +
              joiny(c, ",") +
              "){ return binder.apply(this,arguments); }"
          )(function () {
            if (this instanceof s) {
              var r = a.apply(this, concatty(l, arguments));
              return Object(r) === r ? r : this;
            }
            return a.apply(e, concatty(l, arguments));
          })),
          a.prototype)
        ) {
          var Empty = function () {};
          (Empty.prototype = a.prototype),
            (s.prototype = new Empty()),
            (Empty.prototype = null);
        }
        return s;
      };
    },
    58612: function (e, r, n) {
      "use strict";
      var s = n(17648);
      e.exports = Function.prototype.bind || s;
    },
    40210: function (e, r, n) {
      "use strict";
      var s,
        a = n(81648),
        l = n(53981),
        u = n(24726),
        c = n(26712),
        h = n(33464),
        d = n(14453),
        f = n(43915),
        p = Function,
        getEvalledConstructor = function (e) {
          try {
            return p('"use strict"; return (' + e + ").constructor;")();
          } catch (e) {}
        },
        m = Object.getOwnPropertyDescriptor;
      if (m)
        try {
          m({}, "");
        } catch (e) {
          m = null;
        }
      var throwTypeError = function () {
          throw new d();
        },
        y = m
          ? (function () {
              try {
                return arguments.callee, throwTypeError;
              } catch (e) {
                try {
                  return m(arguments, "callee").get;
                } catch (e) {
                  return throwTypeError;
                }
              }
            })()
          : throwTypeError,
        g = n(41405)(),
        v = n(28185)(),
        b =
          Object.getPrototypeOf ||
          (v
            ? function (e) {
                return e.__proto__;
              }
            : null),
        w = {},
        x = "undefined" != typeof Uint8Array && b ? b(Uint8Array) : s,
        _ = {
          __proto__: null,
          "%AggregateError%":
            "undefined" == typeof AggregateError ? s : AggregateError,
          "%Array%": Array,
          "%ArrayBuffer%": "undefined" == typeof ArrayBuffer ? s : ArrayBuffer,
          "%ArrayIteratorPrototype%": g && b ? b([][Symbol.iterator]()) : s,
          "%AsyncFromSyncIteratorPrototype%": s,
          "%AsyncFunction%": w,
          "%AsyncGenerator%": w,
          "%AsyncGeneratorFunction%": w,
          "%AsyncIteratorPrototype%": w,
          "%Atomics%": "undefined" == typeof Atomics ? s : Atomics,
          "%BigInt%": "undefined" == typeof BigInt ? s : BigInt,
          "%BigInt64Array%":
            "undefined" == typeof BigInt64Array ? s : BigInt64Array,
          "%BigUint64Array%":
            "undefined" == typeof BigUint64Array ? s : BigUint64Array,
          "%Boolean%": Boolean,
          "%DataView%": "undefined" == typeof DataView ? s : DataView,
          "%Date%": Date,
          "%decodeURI%": decodeURI,
          "%decodeURIComponent%": decodeURIComponent,
          "%encodeURI%": encodeURI,
          "%encodeURIComponent%": encodeURIComponent,
          "%Error%": a,
          "%eval%": eval,
          "%EvalError%": l,
          "%Float32Array%":
            "undefined" == typeof Float32Array ? s : Float32Array,
          "%Float64Array%":
            "undefined" == typeof Float64Array ? s : Float64Array,
          "%FinalizationRegistry%":
            "undefined" == typeof FinalizationRegistry
              ? s
              : FinalizationRegistry,
          "%Function%": p,
          "%GeneratorFunction%": w,
          "%Int8Array%": "undefined" == typeof Int8Array ? s : Int8Array,
          "%Int16Array%": "undefined" == typeof Int16Array ? s : Int16Array,
          "%Int32Array%": "undefined" == typeof Int32Array ? s : Int32Array,
          "%isFinite%": isFinite,
          "%isNaN%": isNaN,
          "%IteratorPrototype%": g && b ? b(b([][Symbol.iterator]())) : s,
          "%JSON%": "object" == typeof JSON ? JSON : s,
          "%Map%": "undefined" == typeof Map ? s : Map,
          "%MapIteratorPrototype%":
            "undefined" != typeof Map && g && b
              ? b(new Map()[Symbol.iterator]())
              : s,
          "%Math%": Math,
          "%Number%": Number,
          "%Object%": Object,
          "%parseFloat%": parseFloat,
          "%parseInt%": parseInt,
          "%Promise%": "undefined" == typeof Promise ? s : Promise,
          "%Proxy%": "undefined" == typeof Proxy ? s : Proxy,
          "%RangeError%": u,
          "%ReferenceError%": c,
          "%Reflect%": "undefined" == typeof Reflect ? s : Reflect,
          "%RegExp%": RegExp,
          "%Set%": "undefined" == typeof Set ? s : Set,
          "%SetIteratorPrototype%":
            "undefined" != typeof Set && g && b
              ? b(new Set()[Symbol.iterator]())
              : s,
          "%SharedArrayBuffer%":
            "undefined" == typeof SharedArrayBuffer ? s : SharedArrayBuffer,
          "%String%": String,
          "%StringIteratorPrototype%": g && b ? b(""[Symbol.iterator]()) : s,
          "%Symbol%": g ? Symbol : s,
          "%SyntaxError%": h,
          "%ThrowTypeError%": y,
          "%TypedArray%": x,
          "%TypeError%": d,
          "%Uint8Array%": "undefined" == typeof Uint8Array ? s : Uint8Array,
          "%Uint8ClampedArray%":
            "undefined" == typeof Uint8ClampedArray ? s : Uint8ClampedArray,
          "%Uint16Array%": "undefined" == typeof Uint16Array ? s : Uint16Array,
          "%Uint32Array%": "undefined" == typeof Uint32Array ? s : Uint32Array,
          "%URIError%": f,
          "%WeakMap%": "undefined" == typeof WeakMap ? s : WeakMap,
          "%WeakRef%": "undefined" == typeof WeakRef ? s : WeakRef,
          "%WeakSet%": "undefined" == typeof WeakSet ? s : WeakSet,
        };
      if (b)
        try {
          null.error;
        } catch (e) {
          var S = b(b(e));
          _["%Error.prototype%"] = S;
        }
      var doEval = function doEval(e) {
          var r;
          if ("%AsyncFunction%" === e)
            r = getEvalledConstructor("async function () {}");
          else if ("%GeneratorFunction%" === e)
            r = getEvalledConstructor("function* () {}");
          else if ("%AsyncGeneratorFunction%" === e)
            r = getEvalledConstructor("async function* () {}");
          else if ("%AsyncGenerator%" === e) {
            var n = doEval("%AsyncGeneratorFunction%");
            n && (r = n.prototype);
          } else if ("%AsyncIteratorPrototype%" === e) {
            var s = doEval("%AsyncGenerator%");
            s && b && (r = b(s.prototype));
          }
          return (_[e] = r), r;
        },
        A = {
          __proto__: null,
          "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
          "%ArrayPrototype%": ["Array", "prototype"],
          "%ArrayProto_entries%": ["Array", "prototype", "entries"],
          "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
          "%ArrayProto_keys%": ["Array", "prototype", "keys"],
          "%ArrayProto_values%": ["Array", "prototype", "values"],
          "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
          "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
          "%AsyncGeneratorPrototype%": [
            "AsyncGeneratorFunction",
            "prototype",
            "prototype",
          ],
          "%BooleanPrototype%": ["Boolean", "prototype"],
          "%DataViewPrototype%": ["DataView", "prototype"],
          "%DatePrototype%": ["Date", "prototype"],
          "%ErrorPrototype%": ["Error", "prototype"],
          "%EvalErrorPrototype%": ["EvalError", "prototype"],
          "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
          "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
          "%FunctionPrototype%": ["Function", "prototype"],
          "%Generator%": ["GeneratorFunction", "prototype"],
          "%GeneratorPrototype%": [
            "GeneratorFunction",
            "prototype",
            "prototype",
          ],
          "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
          "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
          "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
          "%JSONParse%": ["JSON", "parse"],
          "%JSONStringify%": ["JSON", "stringify"],
          "%MapPrototype%": ["Map", "prototype"],
          "%NumberPrototype%": ["Number", "prototype"],
          "%ObjectPrototype%": ["Object", "prototype"],
          "%ObjProto_toString%": ["Object", "prototype", "toString"],
          "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
          "%PromisePrototype%": ["Promise", "prototype"],
          "%PromiseProto_then%": ["Promise", "prototype", "then"],
          "%Promise_all%": ["Promise", "all"],
          "%Promise_reject%": ["Promise", "reject"],
          "%Promise_resolve%": ["Promise", "resolve"],
          "%RangeErrorPrototype%": ["RangeError", "prototype"],
          "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
          "%RegExpPrototype%": ["RegExp", "prototype"],
          "%SetPrototype%": ["Set", "prototype"],
          "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
          "%StringPrototype%": ["String", "prototype"],
          "%SymbolPrototype%": ["Symbol", "prototype"],
          "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
          "%TypedArrayPrototype%": ["TypedArray", "prototype"],
          "%TypeErrorPrototype%": ["TypeError", "prototype"],
          "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
          "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
          "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
          "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
          "%URIErrorPrototype%": ["URIError", "prototype"],
          "%WeakMapPrototype%": ["WeakMap", "prototype"],
          "%WeakSetPrototype%": ["WeakSet", "prototype"],
        },
        T = n(58612),
        O = n(48824),
        P = T.call(Function.call, Array.prototype.concat),
        j = T.call(Function.apply, Array.prototype.splice),
        k = T.call(Function.call, String.prototype.replace),
        C = T.call(Function.call, String.prototype.slice),
        R = T.call(Function.call, RegExp.prototype.exec),
        D =
          /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
        B = /\\(\\)?/g,
        stringToPath = function (e) {
          var r = C(e, 0, 1),
            n = C(e, -1);
          if ("%" === r && "%" !== n)
            throw new h("invalid intrinsic syntax, expected closing `%`");
          if ("%" === n && "%" !== r)
            throw new h("invalid intrinsic syntax, expected opening `%`");
          var s = [];
          return (
            k(e, D, function (e, r, n, a) {
              s[s.length] = n ? k(a, B, "$1") : r || e;
            }),
            s
          );
        },
        getBaseIntrinsic = function (e, r) {
          var n,
            s = e;
          if ((O(A, s) && (s = "%" + (n = A[s])[0] + "%"), O(_, s))) {
            var a = _[s];
            if ((a === w && (a = doEval(s)), void 0 === a && !r))
              throw new d(
                "intrinsic " +
                  e +
                  " exists, but is not available. Please file an issue!"
              );
            return { alias: n, name: s, value: a };
          }
          throw new h("intrinsic " + e + " does not exist!");
        };
      e.exports = function (e, r) {
        if ("string" != typeof e || 0 === e.length)
          throw new d("intrinsic name must be a non-empty string");
        if (arguments.length > 1 && "boolean" != typeof r)
          throw new d('"allowMissing" argument must be a boolean');
        if (null === R(/^%?[^%]*%?$/, e))
          throw new h(
            "`%` may not be present anywhere but at the beginning and end of the intrinsic name"
          );
        var n = stringToPath(e),
          s = n.length > 0 ? n[0] : "",
          a = getBaseIntrinsic("%" + s + "%", r),
          l = a.name,
          u = a.value,
          c = !1,
          f = a.alias;
        f && ((s = f[0]), j(n, P([0, 1], f)));
        for (var p = 1, y = !0; p < n.length; p += 1) {
          var g = n[p],
            v = C(g, 0, 1),
            b = C(g, -1);
          if (
            ('"' === v ||
              "'" === v ||
              "`" === v ||
              '"' === b ||
              "'" === b ||
              "`" === b) &&
            v !== b
          )
            throw new h("property names with quotes must have matching quotes");
          if (
            (("constructor" !== g && y) || (c = !0),
            (s += "." + g),
            O(_, (l = "%" + s + "%")))
          )
            u = _[l];
          else if (null != u) {
            if (!(g in u)) {
              if (!r)
                throw new d(
                  "base intrinsic for " +
                    e +
                    " exists, but the property is not available."
                );
              return;
            }
            if (m && p + 1 >= n.length) {
              var w = m(u, g);
              u =
                (y = !!w) && "get" in w && !("originalValue" in w.get)
                  ? w.get
                  : u[g];
            } else (y = O(u, g)), (u = u[g]);
            y && !c && (_[l] = u);
          }
        }
        return u;
      };
    },
    27296: function (e, r, n) {
      "use strict";
      var s = n(40210)("%Object.getOwnPropertyDescriptor%", !0);
      if (s)
        try {
          s([], "length");
        } catch (e) {
          s = null;
        }
      e.exports = s;
    },
    31044: function (e, r, n) {
      "use strict";
      var s = n(24429),
        hasPropertyDescriptors = function () {
          return !!s;
        };
      (hasPropertyDescriptors.hasArrayLengthDefineBug = function () {
        if (!s) return null;
        try {
          return 1 !== s([], "length", { value: 1 }).length;
        } catch (e) {
          return !0;
        }
      }),
        (e.exports = hasPropertyDescriptors);
    },
    28185: function (e) {
      "use strict";
      var r = { __proto__: null, foo: {} },
        n = Object;
      e.exports = function () {
        return { __proto__: r }.foo === r.foo && !(r instanceof n);
      };
    },
    41405: function (e, r, n) {
      "use strict";
      var s = "undefined" != typeof Symbol && Symbol,
        a = n(55419);
      e.exports = function () {
        return (
          "function" == typeof s &&
          "function" == typeof Symbol &&
          "symbol" == typeof s("foo") &&
          "symbol" == typeof Symbol("bar") &&
          a()
        );
      };
    },
    55419: function (e) {
      "use strict";
      e.exports = function () {
        if (
          "function" != typeof Symbol ||
          "function" != typeof Object.getOwnPropertySymbols
        )
          return !1;
        if ("symbol" == typeof Symbol.iterator) return !0;
        var e = {},
          r = Symbol("test"),
          n = Object(r);
        if (
          "string" == typeof r ||
          "[object Symbol]" !== Object.prototype.toString.call(r) ||
          "[object Symbol]" !== Object.prototype.toString.call(n)
        )
          return !1;
        for (r in ((e[r] = 42), e)) return !1;
        if (
          ("function" == typeof Object.keys && 0 !== Object.keys(e).length) ||
          ("function" == typeof Object.getOwnPropertyNames &&
            0 !== Object.getOwnPropertyNames(e).length)
        )
          return !1;
        var s = Object.getOwnPropertySymbols(e);
        if (
          1 !== s.length ||
          s[0] !== r ||
          !Object.prototype.propertyIsEnumerable.call(e, r)
        )
          return !1;
        if ("function" == typeof Object.getOwnPropertyDescriptor) {
          var a = Object.getOwnPropertyDescriptor(e, r);
          if (42 !== a.value || !0 !== a.enumerable) return !1;
        }
        return !0;
      };
    },
    48824: function (e, r, n) {
      "use strict";
      var s = Function.prototype.call,
        a = Object.prototype.hasOwnProperty,
        l = n(58612);
      e.exports = l.call(s, a);
    },
    80645: function (e, r) {
      /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ (r.read =
        function (e, r, n, s, a) {
          var l,
            u,
            c = 8 * a - s - 1,
            h = (1 << c) - 1,
            d = h >> 1,
            f = -7,
            p = n ? a - 1 : 0,
            m = n ? -1 : 1,
            y = e[r + p];
          for (
            p += m, l = y & ((1 << -f) - 1), y >>= -f, f += c;
            f > 0;
            l = 256 * l + e[r + p], p += m, f -= 8
          );
          for (
            u = l & ((1 << -f) - 1), l >>= -f, f += s;
            f > 0;
            u = 256 * u + e[r + p], p += m, f -= 8
          );
          if (0 === l) l = 1 - d;
          else {
            if (l === h) return u ? NaN : (y ? -1 : 1) * (1 / 0);
            (u += Math.pow(2, s)), (l -= d);
          }
          return (y ? -1 : 1) * u * Math.pow(2, l - s);
        }),
        (r.write = function (e, r, n, s, a, l) {
          var u,
            c,
            h,
            d = 8 * l - a - 1,
            f = (1 << d) - 1,
            p = f >> 1,
            m = 23 === a ? 5960464477539062e-23 : 0,
            y = s ? 0 : l - 1,
            g = s ? 1 : -1,
            v = r < 0 || (0 === r && 1 / r < 0) ? 1 : 0;
          for (
            isNaN((r = Math.abs(r))) || r === 1 / 0
              ? ((c = isNaN(r) ? 1 : 0), (u = f))
              : ((u = Math.floor(Math.log(r) / Math.LN2)),
                r * (h = Math.pow(2, -u)) < 1 && (u--, (h *= 2)),
                u + p >= 1 ? (r += m / h) : (r += m * Math.pow(2, 1 - p)),
                r * h >= 2 && (u++, (h /= 2)),
                u + p >= f
                  ? ((c = 0), (u = f))
                  : u + p >= 1
                  ? ((c = (r * h - 1) * Math.pow(2, a)), (u += p))
                  : ((c = r * Math.pow(2, p - 1) * Math.pow(2, a)), (u = 0)));
            a >= 8;
            e[n + y] = 255 & c, y += g, c /= 256, a -= 8
          );
          for (
            u = (u << a) | c, d += a;
            d > 0;
            e[n + y] = 255 & u, y += g, u /= 256, d -= 8
          );
          e[n + y - g] |= 128 * v;
        });
    },
    64530: function (e, r) {
      (e.exports = function (e, r, n, s) {
        return JSON.stringify(e, serializer(r, s), n);
      }).getSerialize = serializer;
      function serializer(e, r) {
        var n = [],
          s = [];
        return (
          null == r &&
            (r = function (e, r) {
              return n[0] === r
                ? "[Circular ~]"
                : "[Circular ~." + s.slice(0, n.indexOf(r)).join(".") + "]";
            }),
          function (a, l) {
            if (n.length > 0) {
              var u = n.indexOf(this);
              ~u ? n.splice(u + 1) : n.push(this),
                ~u ? s.splice(u, 1 / 0, a) : s.push(a),
                ~n.indexOf(l) && (l = r.call(this, a, l));
            } else n.push(l);
            return null == e ? l : e.call(this, a, l);
          }
        );
      }
    },
    8146: function (e) {
      var r,
        n,
        s = Object.prototype,
        a = Function.prototype.toString,
        l = s.hasOwnProperty,
        u = a.call(Object),
        c = s.toString,
        h =
          ((r = Object.getPrototypeOf),
          (n = Object),
          function (e) {
            return r(n(e));
          });
      e.exports = function (e) {
        if (
          !(e && "object" == typeof e) ||
          "[object Object]" != c.call(e) ||
          (function (e) {
            var r = !1;
            if (null != e && "function" != typeof e.toString)
              try {
                r = !!(e + "");
              } catch (e) {}
            return r;
          })(e)
        )
          return !1;
        var r = h(e);
        if (null === r) return !0;
        var n = l.call(r, "constructor") && r.constructor;
        return "function" == typeof n && n instanceof n && a.call(n) == u;
      };
    },
    25751: function (e) {
      var r = Object.prototype.toString,
        n = Array.isArray;
      e.exports = function (e) {
        var s;
        return (
          "string" == typeof e ||
          (!n(e) &&
            !!(s = e) &&
            "object" == typeof s &&
            "[object String]" == r.call(e))
        );
      };
    },
    83454: function (e, r, n) {
      "use strict";
      var s, a;
      e.exports =
        (null == (s = n.g.process) ? void 0 : s.env) &&
        "object" == typeof (null == (a = n.g.process) ? void 0 : a.env)
          ? n.g.process
          : n(77663);
    },
    91118: function (e, r, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/_app",
        function () {
          return n(60358);
        },
      ]);
    },
    41846: function (e, r, n) {
      "use strict";
      n.d(r, {
        Z: function () {
          return Index;
        },
      });
      var s = n(85893),
        a = n(67294),
        l = n(41664),
        u = n.n(l),
        c = n(11163),
        h = n(38940);
      function Index(e) {
        let { tabs: r } = e,
          nbOfDays = (e) => {
            let r = new Date().getTime(),
              n = new Date(e).getTime();
            return Math.round((r - n) / 864e5);
          };
        return (0, s.jsx)("div", {
          className: "sidebar",
          children: (0, s.jsxs)("div", {
            className: "sidebar-container",
            children: [
              (0, s.jsx)(Dropdown, {
                title: "Getting Started",
                tag: "h3",
                href: "/tutorials",
                open: !0,
                tabs: [
                  { title: "Introduction", href: "/" },
                  { title: "Gallery", href: "/tutorials" },
                ],
                children: (0, s.jsx)(Dropdown, {
                  title: "Courses",
                  tag: "h4",
                  href: "/courses",
                  open: !0,
                  tabs: [
                    {
                      title: "Web Animation Course",
                      href: "/courses/web-animation-course",
                    },
                  ],
                }),
              }),
              r.map((e, r) => {
                let { title: n, animations: a } = e;
                return (0, s.jsx)(
                  Dropdown,
                  {
                    title: n,
                    tag: "h3",
                    open: !0,
                    tabs: a.map((e) => ({
                      title: e.title,
                      href: e.isArticle
                        ? "/articles/".concat(e.handle)
                        : "/tutorials/".concat(e.handle),
                      locked: !!e.course,
                      isNew: 10 >= nbOfDays(e.date),
                    })),
                  },
                  r
                );
              }),
            ],
          }),
        });
      }
      let Dropdown = (e) => {
        let { title: r, tag: n, href: l, open: d, tabs: f, children: p } = e,
          m = (0, c.useRouter)(),
          [y, g] = (0, a.useState)(m.route.includes(l) ? "dropdown-active" : d);
        return (0, s.jsxs)("div", {
          className: "dropdown",
          children: [
            (0, s.jsxs)("div", {
              onClick: () => {
                g(!y);
              },
              className: "dropdown-header",
              children: [
                (0, s.jsx)(n, { children: r }),
                (0, s.jsx)(h.E.img, {
                  variants: {
                    initial: { rotate: 0 },
                    open: { rotate: 90 },
                    closed: { rotate: 0 },
                  },
                  animate: y ? "open" : "closed",
                  src: "/medias/icons/dropdown_arrow.svg",
                }),
              ],
            }),
            (0, s.jsxs)(h.E.div, {
              variants: {
                initial: { height: "auto" },
                open: { height: "auto" },
                closed: { height: "0px" },
              },
              animate: y ? "open" : "closed",
              className: "dropdown-body",
              children: [
                f.map((e, r) =>
                  (0, s.jsxs)(
                    u(),
                    {
                      href: e.href,
                      children: [
                        (0, s.jsx)("p", {
                          className:
                            m.asPath == e.href ? "dropdown-active" : "",
                          children: e.title,
                        }),
                        e.locked &&
                          (0, s.jsx)("svg", {
                            id: "Layer_2",
                            "data-name": "Layer 2",
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 16 21",
                            children: (0, s.jsx)("g", {
                              id: "Layer_1-2",
                              "data-name": "Layer 1",
                              children: (0, s.jsx)("path", {
                                class: "cls-1",
                                d: "M2,21c-.55,0-1.02-.2-1.41-.59s-.59-.86-.59-1.41v-10c0-.55.2-1.02.59-1.41s.86-.59,1.41-.59h1v-2c0-1.38.49-2.56,1.46-3.54s2.15-1.46,3.54-1.46,2.56.49,3.54,1.46,1.46,2.15,1.46,3.54v2h1c.55,0,1.02.2,1.41.59s.59.86.59,1.41v10c0,.55-.2,1.02-.59,1.41s-.86.59-1.41.59H2ZM2,19h12v-10H2v10ZM8,16c.55,0,1.02-.2,1.41-.59s.59-.86.59-1.41-.2-1.02-.59-1.41-.86-.59-1.41-.59-1.02.2-1.41.59-.59.86-.59,1.41.2,1.02.59,1.41.86.59,1.41.59ZM5,7h6v-2c0-.83-.29-1.54-.88-2.13s-1.29-.88-2.13-.88-1.54.29-2.13.88-.88,1.29-.88,2.13v2ZM2,19v-10,10Z",
                              }),
                            }),
                          }),
                        e.isNew &&
                          (0, s.jsx)("div", {
                            className: "tag",
                            children: (0, s.jsx)("p", { children: "New" }),
                          }),
                      ],
                    },
                    r
                  )
                ),
                p,
              ],
            }),
          ],
        });
      };
    },
    3231: function (e, r, n) {
      "use strict";
      n.d(r, {
        S: function () {
          return insertEmail;
        },
      });
      let resolveFetch = (e) => {
        let r;
        return (
          (r =
            e ||
            ("undefined" == typeof fetch
              ? (...e) =>
                  Promise.resolve()
                    .then(n.bind(n, 89743))
                    .then(({ default: r }) => r(...e))
              : fetch)),
          (...e) => r(...e)
        );
      };
      let FunctionsError = class FunctionsError extends Error {
        constructor(e, r = "FunctionsError", n) {
          super(e), (this.name = r), (this.context = n);
        }
      };
      let FunctionsFetchError = class FunctionsFetchError extends FunctionsError {
        constructor(e) {
          super(
            "Failed to send a request to the Edge Function",
            "FunctionsFetchError",
            e
          );
        }
      };
      let FunctionsRelayError = class FunctionsRelayError extends FunctionsError {
        constructor(e) {
          super(
            "Relay Error invoking the Edge Function",
            "FunctionsRelayError",
            e
          );
        }
      };
      let FunctionsHttpError = class FunctionsHttpError extends FunctionsError {
        constructor(e) {
          super(
            "Edge Function returned a non-2xx status code",
            "FunctionsHttpError",
            e
          );
        }
      };
      let FunctionsClient = class FunctionsClient {
        constructor(e, { headers: r = {}, customFetch: n } = {}) {
          (this.url = e), (this.headers = r), (this.fetch = resolveFetch(n));
        }
        setAuth(e) {
          this.headers.Authorization = `Bearer ${e}`;
        }
        invoke(e, r = {}) {
          var n, s, a, l, u;
          return (
            (s = this),
            (a = void 0),
            (l = void 0),
            (u = function* () {
              try {
                let s;
                let { headers: a, method: l, body: u } = r,
                  c = {};
                u &&
                  ((a &&
                    !Object.prototype.hasOwnProperty.call(a, "Content-Type")) ||
                    !a) &&
                  (("undefined" != typeof Blob && u instanceof Blob) ||
                  u instanceof ArrayBuffer
                    ? ((c["Content-Type"] = "application/octet-stream"),
                      (s = u))
                    : "string" == typeof u
                    ? ((c["Content-Type"] = "text/plain"), (s = u))
                    : "undefined" != typeof FormData && u instanceof FormData
                    ? (s = u)
                    : ((c["Content-Type"] = "application/json"),
                      (s = JSON.stringify(u))));
                let h = yield this.fetch(`${this.url}/${e}`, {
                    method: l || "POST",
                    headers: Object.assign(
                      Object.assign(Object.assign({}, c), this.headers),
                      a
                    ),
                    body: s,
                  }).catch((e) => {
                    throw new FunctionsFetchError(e);
                  }),
                  d = h.headers.get("x-relay-error");
                if (d && "true" === d) throw new FunctionsRelayError(h);
                if (!h.ok) throw new FunctionsHttpError(h);
                let f = (
                  null !== (n = h.headers.get("Content-Type")) && void 0 !== n
                    ? n
                    : "text/plain"
                )
                  .split(";")[0]
                  .trim();
                return {
                  data:
                    "application/json" === f
                      ? yield h.json()
                      : "application/octet-stream" === f
                      ? yield h.blob()
                      : "multipart/form-data" === f
                      ? yield h.formData()
                      : yield h.text(),
                  error: null,
                };
              } catch (e) {
                return { data: null, error: e };
              }
            }),
            new (l || (l = Promise))(function (e, r) {
              function fulfilled(e) {
                try {
                  step(u.next(e));
                } catch (e) {
                  r(e);
                }
              }
              function rejected(e) {
                try {
                  step(u.throw(e));
                } catch (e) {
                  r(e);
                }
              }
              function step(r) {
                var n;
                r.done
                  ? e(r.value)
                  : ((n = r.value) instanceof l
                      ? n
                      : new l(function (e) {
                          e(n);
                        })
                    ).then(fulfilled, rejected);
              }
              step((u = u.apply(s, a || [])).next());
            })
          );
        }
      };
      var s,
        a,
        l,
        u,
        c,
        h,
        d,
        f,
        p,
        m,
        y,
        g,
        v,
        b,
        w,
        x,
        _,
        S,
        A,
        T = n(89743);
      let PostgrestError = class PostgrestError extends Error {
        constructor(e) {
          super(e.message),
            (this.name = "PostgrestError"),
            (this.details = e.details),
            (this.hint = e.hint),
            (this.code = e.code);
        }
      };
      let PostgrestBuilder = class PostgrestBuilder {
        constructor(e) {
          (this.shouldThrowOnError = !1),
            (this.method = e.method),
            (this.url = e.url),
            (this.headers = e.headers),
            (this.schema = e.schema),
            (this.body = e.body),
            (this.shouldThrowOnError = e.shouldThrowOnError),
            (this.signal = e.signal),
            (this.isMaybeSingle = e.isMaybeSingle),
            e.fetch
              ? (this.fetch = e.fetch)
              : "undefined" == typeof fetch
              ? (this.fetch = T.default)
              : (this.fetch = fetch);
        }
        throwOnError() {
          return (this.shouldThrowOnError = !0), this;
        }
        then(e, r) {
          void 0 === this.schema ||
            (["GET", "HEAD"].includes(this.method)
              ? (this.headers["Accept-Profile"] = this.schema)
              : (this.headers["Content-Profile"] = this.schema)),
            "GET" !== this.method &&
              "HEAD" !== this.method &&
              (this.headers["Content-Type"] = "application/json");
          let n = this.fetch,
            s = n(this.url.toString(), {
              method: this.method,
              headers: this.headers,
              body: JSON.stringify(this.body),
              signal: this.signal,
            }).then(async (e) => {
              var r, n, s;
              let a = null,
                l = null,
                u = null,
                c = e.status,
                h = e.statusText;
              if (e.ok) {
                if ("HEAD" !== this.method) {
                  let r = await e.text();
                  "" === r ||
                    (l =
                      "text/csv" === this.headers.Accept
                        ? r
                        : this.headers.Accept &&
                          this.headers.Accept.includes(
                            "application/vnd.pgrst.plan+text"
                          )
                        ? r
                        : JSON.parse(r));
                }
                let s =
                    null === (r = this.headers.Prefer) || void 0 === r
                      ? void 0
                      : r.match(/count=(exact|planned|estimated)/),
                  d =
                    null === (n = e.headers.get("content-range")) ||
                    void 0 === n
                      ? void 0
                      : n.split("/");
                s && d && d.length > 1 && (u = parseInt(d[1])),
                  this.isMaybeSingle &&
                    "GET" === this.method &&
                    Array.isArray(l) &&
                    (l.length > 1
                      ? ((a = {
                          code: "PGRST116",
                          details: `Results contain ${l.length} rows, application/vnd.pgrst.object+json requires 1 row`,
                          hint: null,
                          message:
                            "JSON object requested, multiple (or no) rows returned",
                        }),
                        (l = null),
                        (u = null),
                        (c = 406),
                        (h = "Not Acceptable"))
                      : (l = 1 === l.length ? l[0] : null));
              } else {
                let r = await e.text();
                try {
                  (a = JSON.parse(r)),
                    Array.isArray(a) &&
                      404 === e.status &&
                      ((l = []), (a = null), (c = 200), (h = "OK"));
                } catch (n) {
                  404 === e.status && "" === r
                    ? ((c = 204), (h = "No Content"))
                    : (a = { message: r });
                }
                if (
                  (a &&
                    this.isMaybeSingle &&
                    (null === (s = null == a ? void 0 : a.details) ||
                    void 0 === s
                      ? void 0
                      : s.includes("0 rows")) &&
                    ((a = null), (c = 200), (h = "OK")),
                  a && this.shouldThrowOnError)
                )
                  throw new PostgrestError(a);
              }
              let d = { error: a, data: l, count: u, status: c, statusText: h };
              return d;
            });
          return (
            this.shouldThrowOnError ||
              (s = s.catch((e) => {
                var r, n, s;
                return {
                  error: {
                    message: `${
                      null !== (r = null == e ? void 0 : e.name) && void 0 !== r
                        ? r
                        : "FetchError"
                    }: ${null == e ? void 0 : e.message}`,
                    details: `${
                      null !== (n = null == e ? void 0 : e.stack) &&
                      void 0 !== n
                        ? n
                        : ""
                    }`,
                    hint: "",
                    code: `${
                      null !== (s = null == e ? void 0 : e.code) && void 0 !== s
                        ? s
                        : ""
                    }`,
                  },
                  data: null,
                  count: null,
                  status: 0,
                  statusText: "",
                };
              })),
            s.then(e, r)
          );
        }
      };
      let PostgrestTransformBuilder = class PostgrestTransformBuilder extends PostgrestBuilder {
        select(e) {
          let r = !1,
            n = (null != e ? e : "*")
              .split("")
              .map((e) =>
                /\s/.test(e) && !r ? "" : ('"' === e && (r = !r), e)
              )
              .join("");
          return (
            this.url.searchParams.set("select", n),
            this.headers.Prefer && (this.headers.Prefer += ","),
            (this.headers.Prefer += "return=representation"),
            this
          );
        }
        order(
          e,
          {
            ascending: r = !0,
            nullsFirst: n,
            foreignTable: s,
            referencedTable: a = s,
          } = {}
        ) {
          let l = a ? `${a}.order` : "order",
            u = this.url.searchParams.get(l);
          return (
            this.url.searchParams.set(
              l,
              `${u ? `${u},` : ""}${e}.${r ? "asc" : "desc"}${
                void 0 === n ? "" : n ? ".nullsfirst" : ".nullslast"
              }`
            ),
            this
          );
        }
        limit(e, { foreignTable: r, referencedTable: n = r } = {}) {
          let s = void 0 === n ? "limit" : `${n}.limit`;
          return this.url.searchParams.set(s, `${e}`), this;
        }
        range(e, r, { foreignTable: n, referencedTable: s = n } = {}) {
          let a = void 0 === s ? "offset" : `${s}.offset`,
            l = void 0 === s ? "limit" : `${s}.limit`;
          return (
            this.url.searchParams.set(a, `${e}`),
            this.url.searchParams.set(l, `${r - e + 1}`),
            this
          );
        }
        abortSignal(e) {
          return (this.signal = e), this;
        }
        single() {
          return (
            (this.headers.Accept = "application/vnd.pgrst.object+json"), this
          );
        }
        maybeSingle() {
          return (
            "GET" === this.method
              ? (this.headers.Accept = "application/json")
              : (this.headers.Accept = "application/vnd.pgrst.object+json"),
            (this.isMaybeSingle = !0),
            this
          );
        }
        csv() {
          return (this.headers.Accept = "text/csv"), this;
        }
        geojson() {
          return (this.headers.Accept = "application/geo+json"), this;
        }
        explain({
          analyze: e = !1,
          verbose: r = !1,
          settings: n = !1,
          buffers: s = !1,
          wal: a = !1,
          format: l = "text",
        } = {}) {
          var u;
          let c = [
              e ? "analyze" : null,
              r ? "verbose" : null,
              n ? "settings" : null,
              s ? "buffers" : null,
              a ? "wal" : null,
            ]
              .filter(Boolean)
              .join("|"),
            h =
              null !== (u = this.headers.Accept) && void 0 !== u
                ? u
                : "application/json";
          return (
            (this.headers.Accept = `application/vnd.pgrst.plan+${l}; for="${h}"; options=${c};`),
            this
          );
        }
        rollback() {
          var e;
          return (
            (null !== (e = this.headers.Prefer) && void 0 !== e ? e : "").trim()
              .length > 0
              ? (this.headers.Prefer += ",tx=rollback")
              : (this.headers.Prefer = "tx=rollback"),
            this
          );
        }
        returns() {
          return this;
        }
      };
      let PostgrestFilterBuilder = class PostgrestFilterBuilder extends PostgrestTransformBuilder {
        eq(e, r) {
          return this.url.searchParams.append(e, `eq.${r}`), this;
        }
        neq(e, r) {
          return this.url.searchParams.append(e, `neq.${r}`), this;
        }
        gt(e, r) {
          return this.url.searchParams.append(e, `gt.${r}`), this;
        }
        gte(e, r) {
          return this.url.searchParams.append(e, `gte.${r}`), this;
        }
        lt(e, r) {
          return this.url.searchParams.append(e, `lt.${r}`), this;
        }
        lte(e, r) {
          return this.url.searchParams.append(e, `lte.${r}`), this;
        }
        like(e, r) {
          return this.url.searchParams.append(e, `like.${r}`), this;
        }
        likeAllOf(e, r) {
          return (
            this.url.searchParams.append(e, `like(all).{${r.join(",")}}`), this
          );
        }
        likeAnyOf(e, r) {
          return (
            this.url.searchParams.append(e, `like(any).{${r.join(",")}}`), this
          );
        }
        ilike(e, r) {
          return this.url.searchParams.append(e, `ilike.${r}`), this;
        }
        ilikeAllOf(e, r) {
          return (
            this.url.searchParams.append(e, `ilike(all).{${r.join(",")}}`), this
          );
        }
        ilikeAnyOf(e, r) {
          return (
            this.url.searchParams.append(e, `ilike(any).{${r.join(",")}}`), this
          );
        }
        is(e, r) {
          return this.url.searchParams.append(e, `is.${r}`), this;
        }
        in(e, r) {
          let n = r
            .map((e) =>
              "string" == typeof e && RegExp("[,()]").test(e)
                ? `"${e}"`
                : `${e}`
            )
            .join(",");
          return this.url.searchParams.append(e, `in.(${n})`), this;
        }
        contains(e, r) {
          return (
            "string" == typeof r
              ? this.url.searchParams.append(e, `cs.${r}`)
              : Array.isArray(r)
              ? this.url.searchParams.append(e, `cs.{${r.join(",")}}`)
              : this.url.searchParams.append(e, `cs.${JSON.stringify(r)}`),
            this
          );
        }
        containedBy(e, r) {
          return (
            "string" == typeof r
              ? this.url.searchParams.append(e, `cd.${r}`)
              : Array.isArray(r)
              ? this.url.searchParams.append(e, `cd.{${r.join(",")}}`)
              : this.url.searchParams.append(e, `cd.${JSON.stringify(r)}`),
            this
          );
        }
        rangeGt(e, r) {
          return this.url.searchParams.append(e, `sr.${r}`), this;
        }
        rangeGte(e, r) {
          return this.url.searchParams.append(e, `nxl.${r}`), this;
        }
        rangeLt(e, r) {
          return this.url.searchParams.append(e, `sl.${r}`), this;
        }
        rangeLte(e, r) {
          return this.url.searchParams.append(e, `nxr.${r}`), this;
        }
        rangeAdjacent(e, r) {
          return this.url.searchParams.append(e, `adj.${r}`), this;
        }
        overlaps(e, r) {
          return (
            "string" == typeof r
              ? this.url.searchParams.append(e, `ov.${r}`)
              : this.url.searchParams.append(e, `ov.{${r.join(",")}}`),
            this
          );
        }
        textSearch(e, r, { config: n, type: s } = {}) {
          let a = "";
          "plain" === s
            ? (a = "pl")
            : "phrase" === s
            ? (a = "ph")
            : "websearch" === s && (a = "w");
          let l = void 0 === n ? "" : `(${n})`;
          return this.url.searchParams.append(e, `${a}fts${l}.${r}`), this;
        }
        match(e) {
          return (
            Object.entries(e).forEach(([e, r]) => {
              this.url.searchParams.append(e, `eq.${r}`);
            }),
            this
          );
        }
        not(e, r, n) {
          return this.url.searchParams.append(e, `not.${r}.${n}`), this;
        }
        or(e, { foreignTable: r, referencedTable: n = r } = {}) {
          let s = n ? `${n}.or` : "or";
          return this.url.searchParams.append(s, `(${e})`), this;
        }
        filter(e, r, n) {
          return this.url.searchParams.append(e, `${r}.${n}`), this;
        }
      };
      let PostgrestQueryBuilder = class PostgrestQueryBuilder {
        constructor(e, { headers: r = {}, schema: n, fetch: s }) {
          (this.url = e),
            (this.headers = r),
            (this.schema = n),
            (this.fetch = s);
        }
        select(e, { head: r = !1, count: n } = {}) {
          let s = !1,
            a = (null != e ? e : "*")
              .split("")
              .map((e) =>
                /\s/.test(e) && !s ? "" : ('"' === e && (s = !s), e)
              )
              .join("");
          return (
            this.url.searchParams.set("select", a),
            n && (this.headers.Prefer = `count=${n}`),
            new PostgrestFilterBuilder({
              method: r ? "HEAD" : "GET",
              url: this.url,
              headers: this.headers,
              schema: this.schema,
              fetch: this.fetch,
              allowEmpty: !1,
            })
          );
        }
        insert(e, { count: r, defaultToNull: n = !0 } = {}) {
          let s = [];
          if (
            (this.headers.Prefer && s.push(this.headers.Prefer),
            r && s.push(`count=${r}`),
            n || s.push("missing=default"),
            (this.headers.Prefer = s.join(",")),
            Array.isArray(e))
          ) {
            let r = e.reduce((e, r) => e.concat(Object.keys(r)), []);
            if (r.length > 0) {
              let e = [...new Set(r)].map((e) => `"${e}"`);
              this.url.searchParams.set("columns", e.join(","));
            }
          }
          return new PostgrestFilterBuilder({
            method: "POST",
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            body: e,
            fetch: this.fetch,
            allowEmpty: !1,
          });
        }
        upsert(
          e,
          {
            onConflict: r,
            ignoreDuplicates: n = !1,
            count: s,
            defaultToNull: a = !0,
          } = {}
        ) {
          let l = [`resolution=${n ? "ignore" : "merge"}-duplicates`];
          if (
            (void 0 !== r && this.url.searchParams.set("on_conflict", r),
            this.headers.Prefer && l.push(this.headers.Prefer),
            s && l.push(`count=${s}`),
            a || l.push("missing=default"),
            (this.headers.Prefer = l.join(",")),
            Array.isArray(e))
          ) {
            let r = e.reduce((e, r) => e.concat(Object.keys(r)), []);
            if (r.length > 0) {
              let e = [...new Set(r)].map((e) => `"${e}"`);
              this.url.searchParams.set("columns", e.join(","));
            }
          }
          return new PostgrestFilterBuilder({
            method: "POST",
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            body: e,
            fetch: this.fetch,
            allowEmpty: !1,
          });
        }
        update(e, { count: r } = {}) {
          let n = [];
          return (
            this.headers.Prefer && n.push(this.headers.Prefer),
            r && n.push(`count=${r}`),
            (this.headers.Prefer = n.join(",")),
            new PostgrestFilterBuilder({
              method: "PATCH",
              url: this.url,
              headers: this.headers,
              schema: this.schema,
              body: e,
              fetch: this.fetch,
              allowEmpty: !1,
            })
          );
        }
        delete({ count: e } = {}) {
          let r = [];
          return (
            e && r.push(`count=${e}`),
            this.headers.Prefer && r.unshift(this.headers.Prefer),
            (this.headers.Prefer = r.join(",")),
            new PostgrestFilterBuilder({
              method: "DELETE",
              url: this.url,
              headers: this.headers,
              schema: this.schema,
              fetch: this.fetch,
              allowEmpty: !1,
            })
          );
        }
      };
      let O = { "X-Client-Info": "postgrest-js/1.9.2" };
      let PostgrestClient = class PostgrestClient {
        constructor(e, { headers: r = {}, schema: n, fetch: s } = {}) {
          (this.url = e),
            (this.headers = Object.assign(Object.assign({}, O), r)),
            (this.schemaName = n),
            (this.fetch = s);
        }
        from(e) {
          let r = new URL(`${this.url}/${e}`);
          return new PostgrestQueryBuilder(r, {
            headers: Object.assign({}, this.headers),
            schema: this.schemaName,
            fetch: this.fetch,
          });
        }
        schema(e) {
          return new PostgrestClient(this.url, {
            headers: this.headers,
            schema: e,
            fetch: this.fetch,
          });
        }
        rpc(e, r = {}, { head: n = !1, count: s } = {}) {
          let a, l;
          let u = new URL(`${this.url}/rpc/${e}`);
          n
            ? ((a = "HEAD"),
              Object.entries(r).forEach(([e, r]) => {
                u.searchParams.append(e, `${r}`);
              }))
            : ((a = "POST"), (l = r));
          let c = Object.assign({}, this.headers);
          return (
            s && (c.Prefer = `count=${s}`),
            new PostgrestFilterBuilder({
              method: a,
              url: u,
              headers: c,
              schema: this.schemaName,
              body: l,
              fetch: this.fetch,
              allowEmpty: !1,
            })
          );
        }
      };
      let P = { "X-Client-Info": "realtime-js/2.9.3" };
      ((y = s || (s = {}))[(y.connecting = 0)] = "connecting"),
        (y[(y.open = 1)] = "open"),
        (y[(y.closing = 2)] = "closing"),
        (y[(y.closed = 3)] = "closed"),
        ((g = a || (a = {})).closed = "closed"),
        (g.errored = "errored"),
        (g.joined = "joined"),
        (g.joining = "joining"),
        (g.leaving = "leaving"),
        ((v = l || (l = {})).close = "phx_close"),
        (v.error = "phx_error"),
        (v.join = "phx_join"),
        (v.reply = "phx_reply"),
        (v.leave = "phx_leave"),
        (v.access_token = "access_token"),
        ((u || (u = {})).websocket = "websocket"),
        ((b = c || (c = {})).Connecting = "connecting"),
        (b.Open = "open"),
        (b.Closing = "closing"),
        (b.Closed = "closed");
      let Timer = class Timer {
        constructor(e, r) {
          (this.callback = e),
            (this.timerCalc = r),
            (this.timer = void 0),
            (this.tries = 0),
            (this.callback = e),
            (this.timerCalc = r);
        }
        reset() {
          (this.tries = 0), clearTimeout(this.timer);
        }
        scheduleTimeout() {
          clearTimeout(this.timer),
            (this.timer = setTimeout(() => {
              (this.tries = this.tries + 1), this.callback();
            }, this.timerCalc(this.tries + 1)));
        }
      };
      let Serializer = class Serializer {
        constructor() {
          this.HEADER_LENGTH = 1;
        }
        decode(e, r) {
          return e.constructor === ArrayBuffer
            ? r(this._binaryDecode(e))
            : "string" == typeof e
            ? r(JSON.parse(e))
            : r({});
        }
        _binaryDecode(e) {
          let r = new DataView(e),
            n = new TextDecoder();
          return this._decodeBroadcast(e, r, n);
        }
        _decodeBroadcast(e, r, n) {
          let s = r.getUint8(1),
            a = r.getUint8(2),
            l = this.HEADER_LENGTH + 2,
            u = n.decode(e.slice(l, l + s));
          l += s;
          let c = n.decode(e.slice(l, l + a));
          l += a;
          let h = JSON.parse(n.decode(e.slice(l, e.byteLength)));
          return { ref: null, topic: u, event: c, payload: h };
        }
      };
      let Push = class Push {
        constructor(e, r, n = {}, s = 1e4) {
          (this.channel = e),
            (this.event = r),
            (this.payload = n),
            (this.timeout = s),
            (this.sent = !1),
            (this.timeoutTimer = void 0),
            (this.ref = ""),
            (this.receivedResp = null),
            (this.recHooks = []),
            (this.refEvent = null);
        }
        resend(e) {
          (this.timeout = e),
            this._cancelRefEvent(),
            (this.ref = ""),
            (this.refEvent = null),
            (this.receivedResp = null),
            (this.sent = !1),
            this.send();
        }
        send() {
          this._hasReceived("timeout") ||
            (this.startTimeout(),
            (this.sent = !0),
            this.channel.socket.push({
              topic: this.channel.topic,
              event: this.event,
              payload: this.payload,
              ref: this.ref,
              join_ref: this.channel._joinRef(),
            }));
        }
        updatePayload(e) {
          this.payload = Object.assign(Object.assign({}, this.payload), e);
        }
        receive(e, r) {
          var n;
          return (
            this._hasReceived(e) &&
              r(
                null === (n = this.receivedResp) || void 0 === n
                  ? void 0
                  : n.response
              ),
            this.recHooks.push({ status: e, callback: r }),
            this
          );
        }
        startTimeout() {
          this.timeoutTimer ||
            ((this.ref = this.channel.socket._makeRef()),
            (this.refEvent = this.channel._replyEventName(this.ref)),
            this.channel._on(this.refEvent, {}, (e) => {
              this._cancelRefEvent(),
                this._cancelTimeout(),
                (this.receivedResp = e),
                this._matchReceive(e);
            }),
            (this.timeoutTimer = setTimeout(() => {
              this.trigger("timeout", {});
            }, this.timeout)));
        }
        trigger(e, r) {
          this.refEvent &&
            this.channel._trigger(this.refEvent, { status: e, response: r });
        }
        destroy() {
          this._cancelRefEvent(), this._cancelTimeout();
        }
        _cancelRefEvent() {
          this.refEvent && this.channel._off(this.refEvent, {});
        }
        _cancelTimeout() {
          clearTimeout(this.timeoutTimer), (this.timeoutTimer = void 0);
        }
        _matchReceive({ status: e, response: r }) {
          this.recHooks
            .filter((r) => r.status === e)
            .forEach((e) => e.callback(r));
        }
        _hasReceived(e) {
          return this.receivedResp && this.receivedResp.status === e;
        }
      };
      ((w = h || (h = {})).SYNC = "sync"),
        (w.JOIN = "join"),
        (w.LEAVE = "leave");
      let RealtimePresence = class RealtimePresence {
        constructor(e, r) {
          (this.channel = e),
            (this.state = {}),
            (this.pendingDiffs = []),
            (this.joinRef = null),
            (this.caller = {
              onJoin: () => {},
              onLeave: () => {},
              onSync: () => {},
            });
          let n = (null == r ? void 0 : r.events) || {
            state: "presence_state",
            diff: "presence_diff",
          };
          this.channel._on(n.state, {}, (e) => {
            let { onJoin: r, onLeave: n, onSync: s } = this.caller;
            (this.joinRef = this.channel._joinRef()),
              (this.state = RealtimePresence.syncState(this.state, e, r, n)),
              this.pendingDiffs.forEach((e) => {
                this.state = RealtimePresence.syncDiff(this.state, e, r, n);
              }),
              (this.pendingDiffs = []),
              s();
          }),
            this.channel._on(n.diff, {}, (e) => {
              let { onJoin: r, onLeave: n, onSync: s } = this.caller;
              this.inPendingSyncState()
                ? this.pendingDiffs.push(e)
                : ((this.state = RealtimePresence.syncDiff(
                    this.state,
                    e,
                    r,
                    n
                  )),
                  s());
            }),
            this.onJoin((e, r, n) => {
              this.channel._trigger("presence", {
                event: "join",
                key: e,
                currentPresences: r,
                newPresences: n,
              });
            }),
            this.onLeave((e, r, n) => {
              this.channel._trigger("presence", {
                event: "leave",
                key: e,
                currentPresences: r,
                leftPresences: n,
              });
            }),
            this.onSync(() => {
              this.channel._trigger("presence", { event: "sync" });
            });
        }
        static syncState(e, r, n, s) {
          let a = this.cloneDeep(e),
            l = this.transformState(r),
            u = {},
            c = {};
          return (
            this.map(a, (e, r) => {
              l[e] || (c[e] = r);
            }),
            this.map(l, (e, r) => {
              let n = a[e];
              if (n) {
                let s = r.map((e) => e.presence_ref),
                  a = n.map((e) => e.presence_ref),
                  l = r.filter((e) => 0 > a.indexOf(e.presence_ref)),
                  h = n.filter((e) => 0 > s.indexOf(e.presence_ref));
                l.length > 0 && (u[e] = l), h.length > 0 && (c[e] = h);
              } else u[e] = r;
            }),
            this.syncDiff(a, { joins: u, leaves: c }, n, s)
          );
        }
        static syncDiff(e, r, n, s) {
          let { joins: a, leaves: l } = {
            joins: this.transformState(r.joins),
            leaves: this.transformState(r.leaves),
          };
          return (
            n || (n = () => {}),
            s || (s = () => {}),
            this.map(a, (r, s) => {
              var a;
              let l = null !== (a = e[r]) && void 0 !== a ? a : [];
              if (((e[r] = this.cloneDeep(s)), l.length > 0)) {
                let n = e[r].map((e) => e.presence_ref),
                  s = l.filter((e) => 0 > n.indexOf(e.presence_ref));
                e[r].unshift(...s);
              }
              n(r, l, s);
            }),
            this.map(l, (r, n) => {
              let a = e[r];
              if (!a) return;
              let l = n.map((e) => e.presence_ref);
              (a = a.filter((e) => 0 > l.indexOf(e.presence_ref))),
                (e[r] = a),
                s(r, a, n),
                0 === a.length && delete e[r];
            }),
            e
          );
        }
        static map(e, r) {
          return Object.getOwnPropertyNames(e).map((n) => r(n, e[n]));
        }
        static transformState(e) {
          return Object.getOwnPropertyNames((e = this.cloneDeep(e))).reduce(
            (r, n) => {
              let s = e[n];
              return (
                "metas" in s
                  ? (r[n] = s.metas.map(
                      (e) => (
                        (e.presence_ref = e.phx_ref),
                        delete e.phx_ref,
                        delete e.phx_ref_prev,
                        e
                      )
                    ))
                  : (r[n] = s),
                r
              );
            },
            {}
          );
        }
        static cloneDeep(e) {
          return JSON.parse(JSON.stringify(e));
        }
        onJoin(e) {
          this.caller.onJoin = e;
        }
        onLeave(e) {
          this.caller.onLeave = e;
        }
        onSync(e) {
          this.caller.onSync = e;
        }
        inPendingSyncState() {
          return !this.joinRef || this.joinRef !== this.channel._joinRef();
        }
      };
      ((x = d || (d = {})).abstime = "abstime"),
        (x.bool = "bool"),
        (x.date = "date"),
        (x.daterange = "daterange"),
        (x.float4 = "float4"),
        (x.float8 = "float8"),
        (x.int2 = "int2"),
        (x.int4 = "int4"),
        (x.int4range = "int4range"),
        (x.int8 = "int8"),
        (x.int8range = "int8range"),
        (x.json = "json"),
        (x.jsonb = "jsonb"),
        (x.money = "money"),
        (x.numeric = "numeric"),
        (x.oid = "oid"),
        (x.reltime = "reltime"),
        (x.text = "text"),
        (x.time = "time"),
        (x.timestamp = "timestamp"),
        (x.timestamptz = "timestamptz"),
        (x.timetz = "timetz"),
        (x.tsrange = "tsrange"),
        (x.tstzrange = "tstzrange");
      let convertChangeData = (e, r, n = {}) => {
          var s;
          let a = null !== (s = n.skipTypes) && void 0 !== s ? s : [];
          return Object.keys(r).reduce(
            (n, s) => ((n[s] = convertColumn(s, e, r, a)), n),
            {}
          );
        },
        convertColumn = (e, r, n, s) => {
          let a = r.find((r) => r.name === e),
            l = null == a ? void 0 : a.type,
            u = n[e];
          return l && !s.includes(l) ? convertCell(l, u) : noop(u);
        },
        convertCell = (e, r) => {
          if ("_" === e.charAt(0)) {
            let n = e.slice(1, e.length);
            return toArray(r, n);
          }
          switch (e) {
            case d.bool:
              return toBoolean(r);
            case d.float4:
            case d.float8:
            case d.int2:
            case d.int4:
            case d.int8:
            case d.numeric:
            case d.oid:
              return toNumber(r);
            case d.json:
            case d.jsonb:
              return toJson(r);
            case d.timestamp:
              return toTimestampString(r);
            case d.abstime:
            case d.date:
            case d.daterange:
            case d.int4range:
            case d.int8range:
            case d.money:
            case d.reltime:
            case d.text:
            case d.time:
            case d.timestamptz:
            case d.timetz:
            case d.tsrange:
            case d.tstzrange:
            default:
              return noop(r);
          }
        },
        noop = (e) => e,
        toBoolean = (e) => {
          switch (e) {
            case "t":
              return !0;
            case "f":
              return !1;
            default:
              return e;
          }
        },
        toNumber = (e) => {
          if ("string" == typeof e) {
            let r = parseFloat(e);
            if (!Number.isNaN(r)) return r;
          }
          return e;
        },
        toJson = (e) => {
          if ("string" == typeof e)
            try {
              return JSON.parse(e);
            } catch (e) {
              console.log(`JSON parse error: ${e}`);
            }
          return e;
        },
        toArray = (e, r) => {
          if ("string" != typeof e) return e;
          let n = e.length - 1,
            s = e[n],
            a = e[0];
          if ("{" === a && "}" === s) {
            let s;
            let a = e.slice(1, n);
            try {
              s = JSON.parse("[" + a + "]");
            } catch (e) {
              s = a ? a.split(",") : [];
            }
            return s.map((e) => convertCell(r, e));
          }
          return e;
        },
        toTimestampString = (e) =>
          "string" == typeof e ? e.replace(" ", "T") : e;
      ((_ = f || (f = {})).ALL = "*"),
        (_.INSERT = "INSERT"),
        (_.UPDATE = "UPDATE"),
        (_.DELETE = "DELETE"),
        ((S = p || (p = {})).BROADCAST = "broadcast"),
        (S.PRESENCE = "presence"),
        (S.POSTGRES_CHANGES = "postgres_changes"),
        ((A = m || (m = {})).SUBSCRIBED = "SUBSCRIBED"),
        (A.TIMED_OUT = "TIMED_OUT"),
        (A.CLOSED = "CLOSED"),
        (A.CHANNEL_ERROR = "CHANNEL_ERROR");
      let RealtimeChannel = class RealtimeChannel {
        constructor(e, r = { config: {} }, n) {
          (this.topic = e),
            (this.params = r),
            (this.socket = n),
            (this.bindings = {}),
            (this.state = a.closed),
            (this.joinedOnce = !1),
            (this.pushBuffer = []),
            (this.subTopic = e.replace(/^realtime:/i, "")),
            (this.params.config = Object.assign(
              { broadcast: { ack: !1, self: !1 }, presence: { key: "" } },
              r.config
            )),
            (this.timeout = this.socket.timeout),
            (this.joinPush = new Push(this, l.join, this.params, this.timeout)),
            (this.rejoinTimer = new Timer(
              () => this._rejoinUntilConnected(),
              this.socket.reconnectAfterMs
            )),
            this.joinPush.receive("ok", () => {
              (this.state = a.joined),
                this.rejoinTimer.reset(),
                this.pushBuffer.forEach((e) => e.send()),
                (this.pushBuffer = []);
            }),
            this._onClose(() => {
              this.rejoinTimer.reset(),
                this.socket.log(
                  "channel",
                  `close ${this.topic} ${this._joinRef()}`
                ),
                (this.state = a.closed),
                this.socket._remove(this);
            }),
            this._onError((e) => {
              this._isLeaving() ||
                this._isClosed() ||
                (this.socket.log("channel", `error ${this.topic}`, e),
                (this.state = a.errored),
                this.rejoinTimer.scheduleTimeout());
            }),
            this.joinPush.receive("timeout", () => {
              this._isJoining() &&
                (this.socket.log(
                  "channel",
                  `timeout ${this.topic}`,
                  this.joinPush.timeout
                ),
                (this.state = a.errored),
                this.rejoinTimer.scheduleTimeout());
            }),
            this._on(l.reply, {}, (e, r) => {
              this._trigger(this._replyEventName(r), e);
            }),
            (this.presence = new RealtimePresence(this)),
            (this.broadcastEndpointURL = this._broadcastEndpointURL());
        }
        subscribe(e, r = this.timeout) {
          var n, s;
          if (
            (this.socket.isConnected() || this.socket.connect(),
            this.joinedOnce)
          )
            throw "tried to subscribe multiple times. 'subscribe' can only be called a single time per channel instance";
          {
            let {
              config: { broadcast: a, presence: l },
            } = this.params;
            this._onError((r) => e && e("CHANNEL_ERROR", r)),
              this._onClose(() => e && e("CLOSED"));
            let u = {},
              c = {
                broadcast: a,
                presence: l,
                postgres_changes:
                  null !==
                    (s =
                      null === (n = this.bindings.postgres_changes) ||
                      void 0 === n
                        ? void 0
                        : n.map((e) => e.filter)) && void 0 !== s
                    ? s
                    : [],
              };
            this.socket.accessToken &&
              (u.access_token = this.socket.accessToken),
              this.updateJoinPayload(Object.assign({ config: c }, u)),
              (this.joinedOnce = !0),
              this._rejoin(r),
              this.joinPush
                .receive("ok", ({ postgres_changes: r }) => {
                  var n;
                  if (
                    (this.socket.accessToken &&
                      this.socket.setAuth(this.socket.accessToken),
                    void 0 === r)
                  ) {
                    e && e("SUBSCRIBED");
                    return;
                  }
                  {
                    let s = this.bindings.postgres_changes,
                      a =
                        null !== (n = null == s ? void 0 : s.length) &&
                        void 0 !== n
                          ? n
                          : 0,
                      l = [];
                    for (let n = 0; n < a; n++) {
                      let a = s[n],
                        {
                          filter: { event: u, schema: c, table: h, filter: d },
                        } = a,
                        f = r && r[n];
                      if (
                        f &&
                        f.event === u &&
                        f.schema === c &&
                        f.table === h &&
                        f.filter === d
                      )
                        l.push(
                          Object.assign(Object.assign({}, a), { id: f.id })
                        );
                      else {
                        this.unsubscribe(),
                          e &&
                            e(
                              "CHANNEL_ERROR",
                              Error(
                                "mismatch between server and client bindings for postgres changes"
                              )
                            );
                        return;
                      }
                    }
                    (this.bindings.postgres_changes = l), e && e("SUBSCRIBED");
                    return;
                  }
                })
                .receive("error", (r) => {
                  e &&
                    e(
                      "CHANNEL_ERROR",
                      Error(
                        JSON.stringify(Object.values(r).join(", ") || "error")
                      )
                    );
                })
                .receive("timeout", () => {
                  e && e("TIMED_OUT");
                });
          }
          return this;
        }
        presenceState() {
          return this.presence.state;
        }
        async track(e, r = {}) {
          return await this.send(
            { type: "presence", event: "track", payload: e },
            r.timeout || this.timeout
          );
        }
        async untrack(e = {}) {
          return await this.send({ type: "presence", event: "untrack" }, e);
        }
        on(e, r, n) {
          return this._on(e, r, n);
        }
        async send(e, r = {}) {
          var n, s;
          if (this._canPush() || "broadcast" !== e.type)
            return new Promise((n) => {
              var s, a, l;
              let u = this._push(e.type, e, r.timeout || this.timeout);
              "broadcast" !== e.type ||
                (null ===
                  (l =
                    null ===
                      (a =
                        null === (s = this.params) || void 0 === s
                          ? void 0
                          : s.config) || void 0 === a
                      ? void 0
                      : a.broadcast) || void 0 === l
                  ? void 0
                  : l.ack) ||
                n("ok"),
                u.receive("ok", () => n("ok")),
                u.receive("timeout", () => n("timed out"));
            });
          {
            let { event: a, payload: l } = e,
              u = {
                method: "POST",
                headers: {
                  apikey:
                    null !== (n = this.socket.apiKey) && void 0 !== n ? n : "",
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  messages: [{ topic: this.subTopic, event: a, payload: l }],
                }),
              };
            try {
              let e = await this._fetchWithTimeout(
                this.broadcastEndpointURL,
                u,
                null !== (s = r.timeout) && void 0 !== s ? s : this.timeout
              );
              if (e.ok) return "ok";
              return "error";
            } catch (e) {
              if ("AbortError" === e.name) return "timed out";
              return "error";
            }
          }
        }
        updateJoinPayload(e) {
          this.joinPush.updatePayload(e);
        }
        unsubscribe(e = this.timeout) {
          this.state = a.leaving;
          let onClose = () => {
            this.socket.log("channel", `leave ${this.topic}`),
              this._trigger(l.close, "leave", this._joinRef());
          };
          return (
            this.rejoinTimer.reset(),
            this.joinPush.destroy(),
            new Promise((r) => {
              let n = new Push(this, l.leave, {}, e);
              n
                .receive("ok", () => {
                  onClose(), r("ok");
                })
                .receive("timeout", () => {
                  onClose(), r("timed out");
                })
                .receive("error", () => {
                  r("error");
                }),
                n.send(),
                this._canPush() || n.trigger("ok", {});
            })
          );
        }
        _broadcastEndpointURL() {
          let e = this.socket.endPoint;
          return (
            (e = (e = e.replace(/^ws/i, "http")).replace(
              /(\/socket\/websocket|\/socket|\/websocket)\/?$/i,
              ""
            )).replace(/\/+$/, "") + "/api/broadcast"
          );
        }
        async _fetchWithTimeout(e, r, n) {
          let s = new AbortController(),
            a = setTimeout(() => s.abort(), n),
            l = await this.socket.fetch(
              e,
              Object.assign(Object.assign({}, r), { signal: s.signal })
            );
          return clearTimeout(a), l;
        }
        _push(e, r, n = this.timeout) {
          if (!this.joinedOnce)
            throw `tried to push '${e}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;
          let s = new Push(this, e, r, n);
          return (
            this._canPush()
              ? s.send()
              : (s.startTimeout(), this.pushBuffer.push(s)),
            s
          );
        }
        _onMessage(e, r, n) {
          return r;
        }
        _isMember(e) {
          return this.topic === e;
        }
        _joinRef() {
          return this.joinPush.ref;
        }
        _trigger(e, r, n) {
          var s, a;
          let u = e.toLocaleLowerCase(),
            { close: c, error: h, leave: d, join: f } = l;
          if (n && [c, h, d, f].indexOf(u) >= 0 && n !== this._joinRef())
            return;
          let p = this._onMessage(u, r, n);
          if (r && !p)
            throw "channel onMessage callbacks must return the payload, modified or unmodified";
          ["insert", "update", "delete"].includes(u)
            ? null === (s = this.bindings.postgres_changes) ||
              void 0 === s ||
              s
                .filter((e) => {
                  var r, n, s;
                  return (
                    (null === (r = e.filter) || void 0 === r
                      ? void 0
                      : r.event) === "*" ||
                    (null ===
                      (s =
                        null === (n = e.filter) || void 0 === n
                          ? void 0
                          : n.event) || void 0 === s
                      ? void 0
                      : s.toLocaleLowerCase()) === u
                  );
                })
                .map((e) => e.callback(p, n))
            : null === (a = this.bindings[u]) ||
              void 0 === a ||
              a
                .filter((e) => {
                  var n, s, a, l, c, h;
                  if (
                    !["broadcast", "presence", "postgres_changes"].includes(u)
                  )
                    return e.type.toLocaleLowerCase() === u;
                  if ("id" in e) {
                    let l = e.id,
                      u =
                        null === (n = e.filter) || void 0 === n
                          ? void 0
                          : n.event;
                    return (
                      l &&
                      (null === (s = r.ids) || void 0 === s
                        ? void 0
                        : s.includes(l)) &&
                      ("*" === u ||
                        (null == u ? void 0 : u.toLocaleLowerCase()) ===
                          (null === (a = r.data) || void 0 === a
                            ? void 0
                            : a.type.toLocaleLowerCase()))
                    );
                  }
                  {
                    let n =
                      null ===
                        (c =
                          null === (l = null == e ? void 0 : e.filter) ||
                          void 0 === l
                            ? void 0
                            : l.event) || void 0 === c
                        ? void 0
                        : c.toLocaleLowerCase();
                    return (
                      "*" === n ||
                      n ===
                        (null === (h = null == r ? void 0 : r.event) ||
                        void 0 === h
                          ? void 0
                          : h.toLocaleLowerCase())
                    );
                  }
                })
                .map((e) => {
                  if ("object" == typeof p && "ids" in p) {
                    let e = p.data,
                      {
                        schema: r,
                        table: n,
                        commit_timestamp: s,
                        type: a,
                        errors: l,
                      } = e;
                    p = Object.assign(
                      Object.assign(
                        {},
                        {
                          schema: r,
                          table: n,
                          commit_timestamp: s,
                          eventType: a,
                          new: {},
                          old: {},
                          errors: l,
                        }
                      ),
                      this._getPayloadRecords(e)
                    );
                  }
                  e.callback(p, n);
                });
        }
        _isClosed() {
          return this.state === a.closed;
        }
        _isJoined() {
          return this.state === a.joined;
        }
        _isJoining() {
          return this.state === a.joining;
        }
        _isLeaving() {
          return this.state === a.leaving;
        }
        _replyEventName(e) {
          return `chan_reply_${e}`;
        }
        _on(e, r, n) {
          let s = e.toLocaleLowerCase(),
            a = { type: s, filter: r, callback: n };
          return (
            this.bindings[s]
              ? this.bindings[s].push(a)
              : (this.bindings[s] = [a]),
            this
          );
        }
        _off(e, r) {
          let n = e.toLocaleLowerCase();
          return (
            (this.bindings[n] = this.bindings[n].filter((e) => {
              var s;
              return !(
                (null === (s = e.type) || void 0 === s
                  ? void 0
                  : s.toLocaleLowerCase()) === n &&
                RealtimeChannel.isEqual(e.filter, r)
              );
            })),
            this
          );
        }
        static isEqual(e, r) {
          if (Object.keys(e).length !== Object.keys(r).length) return !1;
          for (let n in e) if (e[n] !== r[n]) return !1;
          return !0;
        }
        _rejoinUntilConnected() {
          this.rejoinTimer.scheduleTimeout(),
            this.socket.isConnected() && this._rejoin();
        }
        _onClose(e) {
          this._on(l.close, {}, e);
        }
        _onError(e) {
          this._on(l.error, {}, (r) => e(r));
        }
        _canPush() {
          return this.socket.isConnected() && this._isJoined();
        }
        _rejoin(e = this.timeout) {
          this._isLeaving() ||
            (this.socket._leaveOpenTopic(this.topic),
            (this.state = a.joining),
            this.joinPush.resend(e));
        }
        _getPayloadRecords(e) {
          let r = { new: {}, old: {} };
          return (
            ("INSERT" === e.type || "UPDATE" === e.type) &&
              (r.new = convertChangeData(e.columns, e.record)),
            ("UPDATE" === e.type || "DELETE" === e.type) &&
              (r.old = convertChangeData(e.columns, e.old_record)),
            r
          );
        }
      };
      let RealtimeClient_noop = () => {},
        j = "undefined" != typeof WebSocket;
      let RealtimeClient = class RealtimeClient {
        constructor(e, r) {
          var s;
          (this.accessToken = null),
            (this.apiKey = null),
            (this.channels = []),
            (this.endPoint = ""),
            (this.headers = P),
            (this.params = {}),
            (this.timeout = 1e4),
            (this.heartbeatIntervalMs = 3e4),
            (this.heartbeatTimer = void 0),
            (this.pendingHeartbeatRef = null),
            (this.ref = 0),
            (this.logger = RealtimeClient_noop),
            (this.conn = null),
            (this.sendBuffer = []),
            (this.serializer = new Serializer()),
            (this.stateChangeCallbacks = {
              open: [],
              close: [],
              error: [],
              message: [],
            }),
            (this._resolveFetch = (e) => {
              let r;
              return (
                (r =
                  e ||
                  ("undefined" == typeof fetch
                    ? (...e) =>
                        Promise.resolve()
                          .then(n.bind(n, 89743))
                          .then(({ default: r }) => r(...e))
                    : fetch)),
                (...e) => r(...e)
              );
            }),
            (this.endPoint = `${e}/${u.websocket}`),
            (null == r ? void 0 : r.transport)
              ? (this.transport = r.transport)
              : (this.transport = null),
            (null == r ? void 0 : r.params) && (this.params = r.params),
            (null == r ? void 0 : r.headers) &&
              (this.headers = Object.assign(
                Object.assign({}, this.headers),
                r.headers
              )),
            (null == r ? void 0 : r.timeout) && (this.timeout = r.timeout),
            (null == r ? void 0 : r.logger) && (this.logger = r.logger),
            (null == r ? void 0 : r.heartbeatIntervalMs) &&
              (this.heartbeatIntervalMs = r.heartbeatIntervalMs);
          let a =
            null === (s = null == r ? void 0 : r.params) || void 0 === s
              ? void 0
              : s.apikey;
          a && ((this.accessToken = a), (this.apiKey = a)),
            (this.reconnectAfterMs = (null == r ? void 0 : r.reconnectAfterMs)
              ? r.reconnectAfterMs
              : (e) => [1e3, 2e3, 5e3, 1e4][e - 1] || 1e4),
            (this.encode = (null == r ? void 0 : r.encode)
              ? r.encode
              : (e, r) => r(JSON.stringify(e))),
            (this.decode = (null == r ? void 0 : r.decode)
              ? r.decode
              : this.serializer.decode.bind(this.serializer)),
            (this.reconnectTimer = new Timer(async () => {
              this.disconnect(), this.connect();
            }, this.reconnectAfterMs)),
            (this.fetch = this._resolveFetch(null == r ? void 0 : r.fetch));
        }
        connect() {
          if (!this.conn) {
            if (this.transport) {
              this.conn = new this.transport(this._endPointURL(), void 0, {
                headers: this.headers,
              });
              return;
            }
            if (j) {
              (this.conn = new WebSocket(this._endPointURL())),
                this.setupConnection();
              return;
            }
            (this.conn = new WSWebSocketDummy(this._endPointURL(), void 0, {
              close: () => {
                this.conn = null;
              },
            })),
              n
                .e(7026)
                .then(n.t.bind(n, 57026, 23))
                .then(({ default: e }) => {
                  (this.conn = new e(this._endPointURL(), void 0, {
                    headers: this.headers,
                  })),
                    this.setupConnection();
                });
          }
        }
        disconnect(e, r) {
          this.conn &&
            ((this.conn.onclose = function () {}),
            e ? this.conn.close(e, null != r ? r : "") : this.conn.close(),
            (this.conn = null),
            this.heartbeatTimer && clearInterval(this.heartbeatTimer),
            this.reconnectTimer.reset());
        }
        getChannels() {
          return this.channels;
        }
        async removeChannel(e) {
          let r = await e.unsubscribe();
          return 0 === this.channels.length && this.disconnect(), r;
        }
        async removeAllChannels() {
          let e = await Promise.all(this.channels.map((e) => e.unsubscribe()));
          return this.disconnect(), e;
        }
        log(e, r, n) {
          this.logger(e, r, n);
        }
        connectionState() {
          switch (this.conn && this.conn.readyState) {
            case s.connecting:
              return c.Connecting;
            case s.open:
              return c.Open;
            case s.closing:
              return c.Closing;
            default:
              return c.Closed;
          }
        }
        isConnected() {
          return this.connectionState() === c.Open;
        }
        channel(e, r = { config: {} }) {
          let n = new RealtimeChannel(`realtime:${e}`, r, this);
          return this.channels.push(n), n;
        }
        push(e) {
          let { topic: r, event: n, payload: s, ref: a } = e,
            callback = () => {
              this.encode(e, (e) => {
                var r;
                null === (r = this.conn) || void 0 === r || r.send(e);
              });
            };
          this.log("push", `${r} ${n} (${a})`, s),
            this.isConnected() ? callback() : this.sendBuffer.push(callback);
        }
        setAuth(e) {
          (this.accessToken = e),
            this.channels.forEach((r) => {
              e && r.updateJoinPayload({ access_token: e }),
                r.joinedOnce &&
                  r._isJoined() &&
                  r._push(l.access_token, { access_token: e });
            });
        }
        _makeRef() {
          let e = this.ref + 1;
          return (
            e === this.ref ? (this.ref = 0) : (this.ref = e),
            this.ref.toString()
          );
        }
        _leaveOpenTopic(e) {
          let r = this.channels.find(
            (r) => r.topic === e && (r._isJoined() || r._isJoining())
          );
          r &&
            (this.log("transport", `leaving duplicate topic "${e}"`),
            r.unsubscribe());
        }
        _remove(e) {
          this.channels = this.channels.filter(
            (r) => r._joinRef() !== e._joinRef()
          );
        }
        setupConnection() {
          this.conn &&
            ((this.conn.binaryType = "arraybuffer"),
            (this.conn.onopen = () => this._onConnOpen()),
            (this.conn.onerror = (e) => this._onConnError(e)),
            (this.conn.onmessage = (e) => this._onConnMessage(e)),
            (this.conn.onclose = (e) => this._onConnClose(e)));
        }
        _endPointURL() {
          return this._appendParams(
            this.endPoint,
            Object.assign({}, this.params, { vsn: "1.0.0" })
          );
        }
        _onConnMessage(e) {
          this.decode(e.data, (e) => {
            let { topic: r, event: n, payload: s, ref: a } = e;
            ((a && a === this.pendingHeartbeatRef) ||
              n === (null == s ? void 0 : s.type)) &&
              (this.pendingHeartbeatRef = null),
              this.log(
                "receive",
                `${s.status || ""} ${r} ${n} ${(a && "(" + a + ")") || ""}`,
                s
              ),
              this.channels
                .filter((e) => e._isMember(r))
                .forEach((e) => e._trigger(n, s, a)),
              this.stateChangeCallbacks.message.forEach((r) => r(e));
          });
        }
        _onConnOpen() {
          this.log("transport", `connected to ${this._endPointURL()}`),
            this._flushSendBuffer(),
            this.reconnectTimer.reset(),
            this.heartbeatTimer && clearInterval(this.heartbeatTimer),
            (this.heartbeatTimer = setInterval(
              () => this._sendHeartbeat(),
              this.heartbeatIntervalMs
            )),
            this.stateChangeCallbacks.open.forEach((e) => e());
        }
        _onConnClose(e) {
          this.log("transport", "close", e),
            this._triggerChanError(),
            this.heartbeatTimer && clearInterval(this.heartbeatTimer),
            this.reconnectTimer.scheduleTimeout(),
            this.stateChangeCallbacks.close.forEach((r) => r(e));
        }
        _onConnError(e) {
          this.log("transport", e.message),
            this._triggerChanError(),
            this.stateChangeCallbacks.error.forEach((r) => r(e));
        }
        _triggerChanError() {
          this.channels.forEach((e) => e._trigger(l.error));
        }
        _appendParams(e, r) {
          if (0 === Object.keys(r).length) return e;
          let n = e.match(/\?/) ? "&" : "?",
            s = new URLSearchParams(r);
          return `${e}${n}${s}`;
        }
        _flushSendBuffer() {
          this.isConnected() &&
            this.sendBuffer.length > 0 &&
            (this.sendBuffer.forEach((e) => e()), (this.sendBuffer = []));
        }
        _sendHeartbeat() {
          var e;
          if (this.isConnected()) {
            if (this.pendingHeartbeatRef) {
              (this.pendingHeartbeatRef = null),
                this.log(
                  "transport",
                  "heartbeat timeout. Attempting to re-establish connection"
                ),
                null === (e = this.conn) ||
                  void 0 === e ||
                  e.close(1e3, "hearbeat timeout");
              return;
            }
            (this.pendingHeartbeatRef = this._makeRef()),
              this.push({
                topic: "phoenix",
                event: "heartbeat",
                payload: {},
                ref: this.pendingHeartbeatRef,
              }),
              this.setAuth(this.accessToken);
          }
        }
      };
      let WSWebSocketDummy = class WSWebSocketDummy {
        constructor(e, r, n) {
          (this.binaryType = "arraybuffer"),
            (this.onclose = () => {}),
            (this.onerror = () => {}),
            (this.onmessage = () => {}),
            (this.onopen = () => {}),
            (this.readyState = s.connecting),
            (this.send = () => {}),
            (this.url = null),
            (this.url = e),
            (this.close = n.close);
        }
      };
      let StorageError = class StorageError extends Error {
        constructor(e) {
          super(e), (this.__isStorageError = !0), (this.name = "StorageError");
        }
      };
      function isStorageError(e) {
        return "object" == typeof e && null !== e && "__isStorageError" in e;
      }
      let StorageApiError = class StorageApiError extends StorageError {
        constructor(e, r) {
          super(e), (this.name = "StorageApiError"), (this.status = r);
        }
        toJSON() {
          return {
            name: this.name,
            message: this.message,
            status: this.status,
          };
        }
      };
      let StorageUnknownError = class StorageUnknownError extends StorageError {
        constructor(e, r) {
          super(e),
            (this.name = "StorageUnknownError"),
            (this.originalError = r);
        }
      };
      let helpers_resolveFetch = (e) => {
          let r;
          return (
            (r =
              e ||
              ("undefined" == typeof fetch
                ? (...e) =>
                    Promise.resolve()
                      .then(n.bind(n, 89743))
                      .then(({ default: r }) => r(...e))
                : fetch)),
            (...e) => r(...e)
          );
        },
        resolveResponse = () => {
          var e, r, s, a;
          return (
            (e = void 0),
            (r = void 0),
            (s = void 0),
            (a = function* () {
              return "undefined" == typeof Response
                ? (yield Promise.resolve().then(n.bind(n, 89743))).Response
                : Response;
            }),
            new (s || (s = Promise))(function (n, l) {
              function fulfilled(e) {
                try {
                  step(a.next(e));
                } catch (e) {
                  l(e);
                }
              }
              function rejected(e) {
                try {
                  step(a.throw(e));
                } catch (e) {
                  l(e);
                }
              }
              function step(e) {
                var r;
                e.done
                  ? n(e.value)
                  : ((r = e.value) instanceof s
                      ? r
                      : new s(function (e) {
                          e(r);
                        })
                    ).then(fulfilled, rejected);
              }
              step((a = a.apply(e, r || [])).next());
            })
          );
        };
      var fetch_awaiter = function (e, r, n, s) {
        return new (n || (n = Promise))(function (a, l) {
          function fulfilled(e) {
            try {
              step(s.next(e));
            } catch (e) {
              l(e);
            }
          }
          function rejected(e) {
            try {
              step(s.throw(e));
            } catch (e) {
              l(e);
            }
          }
          function step(e) {
            var r;
            e.done
              ? a(e.value)
              : ((r = e.value) instanceof n
                  ? r
                  : new n(function (e) {
                      e(r);
                    })
                ).then(fulfilled, rejected);
          }
          step((s = s.apply(e, r || [])).next());
        });
      };
      let _getErrorMessage = (e) =>
          e.msg ||
          e.message ||
          e.error_description ||
          e.error ||
          JSON.stringify(e),
        handleError = (e, r) =>
          fetch_awaiter(void 0, void 0, void 0, function* () {
            let n = yield resolveResponse();
            e instanceof n
              ? e
                  .json()
                  .then((n) => {
                    r(
                      new StorageApiError(_getErrorMessage(n), e.status || 500)
                    );
                  })
                  .catch((e) => {
                    r(new StorageUnknownError(_getErrorMessage(e), e));
                  })
              : r(new StorageUnknownError(_getErrorMessage(e), e));
          }),
        _getRequestParams = (e, r, n, s) => {
          let a = {
            method: e,
            headers: (null == r ? void 0 : r.headers) || {},
          };
          return "GET" === e
            ? a
            : ((a.headers = Object.assign(
                { "Content-Type": "application/json" },
                null == r ? void 0 : r.headers
              )),
              (a.body = JSON.stringify(s)),
              Object.assign(Object.assign({}, a), n));
        };
      function _handleRequest(e, r, n, s, a, l) {
        return fetch_awaiter(this, void 0, void 0, function* () {
          return new Promise((u, c) => {
            e(n, _getRequestParams(r, s, a, l))
              .then((e) => {
                if (!e.ok) throw e;
                return (null == s ? void 0 : s.noResolveJson) ? e : e.json();
              })
              .then((e) => u(e))
              .catch((e) => handleError(e, c));
          });
        });
      }
      function get(e, r, n, s) {
        return fetch_awaiter(this, void 0, void 0, function* () {
          return _handleRequest(e, "GET", r, n, s);
        });
      }
      function post(e, r, n, s, a) {
        return fetch_awaiter(this, void 0, void 0, function* () {
          return _handleRequest(e, "POST", r, s, a, n);
        });
      }
      function remove(e, r, n, s, a) {
        return fetch_awaiter(this, void 0, void 0, function* () {
          return _handleRequest(e, "DELETE", r, s, a, n);
        });
      }
      var StorageFileApi_awaiter = function (e, r, n, s) {
        return new (n || (n = Promise))(function (a, l) {
          function fulfilled(e) {
            try {
              step(s.next(e));
            } catch (e) {
              l(e);
            }
          }
          function rejected(e) {
            try {
              step(s.throw(e));
            } catch (e) {
              l(e);
            }
          }
          function step(e) {
            var r;
            e.done
              ? a(e.value)
              : ((r = e.value) instanceof n
                  ? r
                  : new n(function (e) {
                      e(r);
                    })
                ).then(fulfilled, rejected);
          }
          step((s = s.apply(e, r || [])).next());
        });
      };
      let k = {
          limit: 100,
          offset: 0,
          sortBy: { column: "name", order: "asc" },
        },
        C = {
          cacheControl: "3600",
          contentType: "text/plain;charset=UTF-8",
          upsert: !1,
        };
      let StorageFileApi = class StorageFileApi {
        constructor(e, r = {}, n, s) {
          (this.url = e),
            (this.headers = r),
            (this.bucketId = n),
            (this.fetch = helpers_resolveFetch(s));
        }
        uploadOrUpdate(e, r, n, s) {
          return StorageFileApi_awaiter(this, void 0, void 0, function* () {
            try {
              let a;
              let l = Object.assign(Object.assign({}, C), s),
                u = Object.assign(
                  Object.assign({}, this.headers),
                  "POST" === e && { "x-upsert": String(l.upsert) }
                );
              "undefined" != typeof Blob && n instanceof Blob
                ? ((a = new FormData()).append("cacheControl", l.cacheControl),
                  a.append("", n))
                : "undefined" != typeof FormData && n instanceof FormData
                ? (a = n).append("cacheControl", l.cacheControl)
                : ((a = n),
                  (u["cache-control"] = `max-age=${l.cacheControl}`),
                  (u["content-type"] = l.contentType));
              let c = this._removeEmptyFolders(r),
                h = this._getFinalPath(c),
                d = yield this.fetch(
                  `${this.url}/object/${h}`,
                  Object.assign(
                    { method: e, body: a, headers: u },
                    (null == l ? void 0 : l.duplex) ? { duplex: l.duplex } : {}
                  )
                ),
                f = yield d.json();
              if (d.ok)
                return {
                  data: { path: c, id: f.Id, fullPath: f.Key },
                  error: null,
                };
              return { data: null, error: f };
            } catch (e) {
              if (isStorageError(e)) return { data: null, error: e };
              throw e;
            }
          });
        }
        upload(e, r, n) {
          return StorageFileApi_awaiter(this, void 0, void 0, function* () {
            return this.uploadOrUpdate("POST", e, r, n);
          });
        }
        uploadToSignedUrl(e, r, n, s) {
          return StorageFileApi_awaiter(this, void 0, void 0, function* () {
            let a = this._removeEmptyFolders(e),
              l = this._getFinalPath(a),
              u = new URL(this.url + `/object/upload/sign/${l}`);
            u.searchParams.set("token", r);
            try {
              let e;
              let r = Object.assign({ upsert: C.upsert }, s),
                l = Object.assign(Object.assign({}, this.headers), {
                  "x-upsert": String(r.upsert),
                });
              "undefined" != typeof Blob && n instanceof Blob
                ? ((e = new FormData()).append("cacheControl", r.cacheControl),
                  e.append("", n))
                : "undefined" != typeof FormData && n instanceof FormData
                ? (e = n).append("cacheControl", r.cacheControl)
                : ((e = n),
                  (l["cache-control"] = `max-age=${r.cacheControl}`),
                  (l["content-type"] = r.contentType));
              let c = yield this.fetch(u.toString(), {
                  method: "PUT",
                  body: e,
                  headers: l,
                }),
                h = yield c.json();
              if (c.ok)
                return { data: { path: a, fullPath: h.Key }, error: null };
              return { data: null, error: h };
            } catch (e) {
              if (isStorageError(e)) return { data: null, error: e };
              throw e;
            }
          });
        }
        createSignedUploadUrl(e) {
          return StorageFileApi_awaiter(this, void 0, void 0, function* () {
            try {
              let r = this._getFinalPath(e),
                n = yield post(
                  this.fetch,
                  `${this.url}/object/upload/sign/${r}`,
                  {},
                  { headers: this.headers }
                ),
                s = new URL(this.url + n.url),
                a = s.searchParams.get("token");
              if (!a) throw new StorageError("No token returned by API");
              return {
                data: { signedUrl: s.toString(), path: e, token: a },
                error: null,
              };
            } catch (e) {
              if (isStorageError(e)) return { data: null, error: e };
              throw e;
            }
          });
        }
        update(e, r, n) {
          return StorageFileApi_awaiter(this, void 0, void 0, function* () {
            return this.uploadOrUpdate("PUT", e, r, n);
          });
        }
        move(e, r) {
          return StorageFileApi_awaiter(this, void 0, void 0, function* () {
            try {
              let n = yield post(
                this.fetch,
                `${this.url}/object/move`,
                { bucketId: this.bucketId, sourceKey: e, destinationKey: r },
                { headers: this.headers }
              );
              return { data: n, error: null };
            } catch (e) {
              if (isStorageError(e)) return { data: null, error: e };
              throw e;
            }
          });
        }
        copy(e, r) {
          return StorageFileApi_awaiter(this, void 0, void 0, function* () {
            try {
              let n = yield post(
                this.fetch,
                `${this.url}/object/copy`,
                { bucketId: this.bucketId, sourceKey: e, destinationKey: r },
                { headers: this.headers }
              );
              return { data: { path: n.Key }, error: null };
            } catch (e) {
              if (isStorageError(e)) return { data: null, error: e };
              throw e;
            }
          });
        }
        createSignedUrl(e, r, n) {
          return StorageFileApi_awaiter(this, void 0, void 0, function* () {
            try {
              let s = this._getFinalPath(e),
                a = yield post(
                  this.fetch,
                  `${this.url}/object/sign/${s}`,
                  Object.assign(
                    { expiresIn: r },
                    (null == n ? void 0 : n.transform)
                      ? { transform: n.transform }
                      : {}
                  ),
                  { headers: this.headers }
                ),
                l = (null == n ? void 0 : n.download)
                  ? `&download=${!0 === n.download ? "" : n.download}`
                  : "",
                u = encodeURI(`${this.url}${a.signedURL}${l}`);
              return { data: (a = { signedUrl: u }), error: null };
            } catch (e) {
              if (isStorageError(e)) return { data: null, error: e };
              throw e;
            }
          });
        }
        createSignedUrls(e, r, n) {
          return StorageFileApi_awaiter(this, void 0, void 0, function* () {
            try {
              let s = yield post(
                  this.fetch,
                  `${this.url}/object/sign/${this.bucketId}`,
                  { expiresIn: r, paths: e },
                  { headers: this.headers }
                ),
                a = (null == n ? void 0 : n.download)
                  ? `&download=${!0 === n.download ? "" : n.download}`
                  : "";
              return {
                data: s.map((e) =>
                  Object.assign(Object.assign({}, e), {
                    signedUrl: e.signedURL
                      ? encodeURI(`${this.url}${e.signedURL}${a}`)
                      : null,
                  })
                ),
                error: null,
              };
            } catch (e) {
              if (isStorageError(e)) return { data: null, error: e };
              throw e;
            }
          });
        }
        download(e, r) {
          return StorageFileApi_awaiter(this, void 0, void 0, function* () {
            let n = void 0 !== (null == r ? void 0 : r.transform),
              s = this.transformOptsToQueryString(
                (null == r ? void 0 : r.transform) || {}
              ),
              a = s ? `?${s}` : "";
            try {
              let r = this._getFinalPath(e),
                s = yield get(
                  this.fetch,
                  `${this.url}/${
                    n ? "render/image/authenticated" : "object"
                  }/${r}${a}`,
                  { headers: this.headers, noResolveJson: !0 }
                ),
                l = yield s.blob();
              return { data: l, error: null };
            } catch (e) {
              if (isStorageError(e)) return { data: null, error: e };
              throw e;
            }
          });
        }
        getPublicUrl(e, r) {
          let n = this._getFinalPath(e),
            s = [],
            a = (null == r ? void 0 : r.download)
              ? `download=${!0 === r.download ? "" : r.download}`
              : "";
          "" !== a && s.push(a);
          let l = void 0 !== (null == r ? void 0 : r.transform),
            u = this.transformOptsToQueryString(
              (null == r ? void 0 : r.transform) || {}
            );
          "" !== u && s.push(u);
          let c = s.join("&");
          return (
            "" !== c && (c = `?${c}`),
            {
              data: {
                publicUrl: encodeURI(
                  `${this.url}/${l ? "render/image" : "object"}/public/${n}${c}`
                ),
              },
            }
          );
        }
        remove(e) {
          return StorageFileApi_awaiter(this, void 0, void 0, function* () {
            try {
              let r = yield remove(
                this.fetch,
                `${this.url}/object/${this.bucketId}`,
                { prefixes: e },
                { headers: this.headers }
              );
              return { data: r, error: null };
            } catch (e) {
              if (isStorageError(e)) return { data: null, error: e };
              throw e;
            }
          });
        }
        list(e, r, n) {
          return StorageFileApi_awaiter(this, void 0, void 0, function* () {
            try {
              let s = Object.assign(Object.assign(Object.assign({}, k), r), {
                  prefix: e || "",
                }),
                a = yield post(
                  this.fetch,
                  `${this.url}/object/list/${this.bucketId}`,
                  s,
                  { headers: this.headers },
                  n
                );
              return { data: a, error: null };
            } catch (e) {
              if (isStorageError(e)) return { data: null, error: e };
              throw e;
            }
          });
        }
        _getFinalPath(e) {
          return `${this.bucketId}/${e}`;
        }
        _removeEmptyFolders(e) {
          return e.replace(/^\/|\/$/g, "").replace(/\/+/g, "/");
        }
        transformOptsToQueryString(e) {
          let r = [];
          return (
            e.width && r.push(`width=${e.width}`),
            e.height && r.push(`height=${e.height}`),
            e.resize && r.push(`resize=${e.resize}`),
            e.format && r.push(`format=${e.format}`),
            e.quality && r.push(`quality=${e.quality}`),
            r.join("&")
          );
        }
      };
      let R = { "X-Client-Info": "storage-js/2.5.5" };
      var StorageBucketApi_awaiter = function (e, r, n, s) {
        return new (n || (n = Promise))(function (a, l) {
          function fulfilled(e) {
            try {
              step(s.next(e));
            } catch (e) {
              l(e);
            }
          }
          function rejected(e) {
            try {
              step(s.throw(e));
            } catch (e) {
              l(e);
            }
          }
          function step(e) {
            var r;
            e.done
              ? a(e.value)
              : ((r = e.value) instanceof n
                  ? r
                  : new n(function (e) {
                      e(r);
                    })
                ).then(fulfilled, rejected);
          }
          step((s = s.apply(e, r || [])).next());
        });
      };
      let StorageBucketApi = class StorageBucketApi {
        constructor(e, r = {}, n) {
          (this.url = e),
            (this.headers = Object.assign(Object.assign({}, R), r)),
            (this.fetch = helpers_resolveFetch(n));
        }
        listBuckets() {
          return StorageBucketApi_awaiter(this, void 0, void 0, function* () {
            try {
              let e = yield get(this.fetch, `${this.url}/bucket`, {
                headers: this.headers,
              });
              return { data: e, error: null };
            } catch (e) {
              if (isStorageError(e)) return { data: null, error: e };
              throw e;
            }
          });
        }
        getBucket(e) {
          return StorageBucketApi_awaiter(this, void 0, void 0, function* () {
            try {
              let r = yield get(this.fetch, `${this.url}/bucket/${e}`, {
                headers: this.headers,
              });
              return { data: r, error: null };
            } catch (e) {
              if (isStorageError(e)) return { data: null, error: e };
              throw e;
            }
          });
        }
        createBucket(e, r = { public: !1 }) {
          return StorageBucketApi_awaiter(this, void 0, void 0, function* () {
            try {
              let n = yield post(
                this.fetch,
                `${this.url}/bucket`,
                {
                  id: e,
                  name: e,
                  public: r.public,
                  file_size_limit: r.fileSizeLimit,
                  allowed_mime_types: r.allowedMimeTypes,
                },
                { headers: this.headers }
              );
              return { data: n, error: null };
            } catch (e) {
              if (isStorageError(e)) return { data: null, error: e };
              throw e;
            }
          });
        }
        updateBucket(e, r) {
          return StorageBucketApi_awaiter(this, void 0, void 0, function* () {
            try {
              let n = yield (function (e, r, n, s, a) {
                return fetch_awaiter(this, void 0, void 0, function* () {
                  return _handleRequest(e, "PUT", r, s, void 0, n);
                });
              })(
                this.fetch,
                `${this.url}/bucket/${e}`,
                {
                  id: e,
                  name: e,
                  public: r.public,
                  file_size_limit: r.fileSizeLimit,
                  allowed_mime_types: r.allowedMimeTypes,
                },
                { headers: this.headers }
              );
              return { data: n, error: null };
            } catch (e) {
              if (isStorageError(e)) return { data: null, error: e };
              throw e;
            }
          });
        }
        emptyBucket(e) {
          return StorageBucketApi_awaiter(this, void 0, void 0, function* () {
            try {
              let r = yield post(
                this.fetch,
                `${this.url}/bucket/${e}/empty`,
                {},
                { headers: this.headers }
              );
              return { data: r, error: null };
            } catch (e) {
              if (isStorageError(e)) return { data: null, error: e };
              throw e;
            }
          });
        }
        deleteBucket(e) {
          return StorageBucketApi_awaiter(this, void 0, void 0, function* () {
            try {
              let r = yield remove(
                this.fetch,
                `${this.url}/bucket/${e}`,
                {},
                { headers: this.headers }
              );
              return { data: r, error: null };
            } catch (e) {
              if (isStorageError(e)) return { data: null, error: e };
              throw e;
            }
          });
        }
      };
      let StorageClient = class StorageClient extends StorageBucketApi {
        constructor(e, r = {}, n) {
          super(e, r, n);
        }
        from(e) {
          return new StorageFileApi(this.url, this.headers, e, this.fetch);
        }
      };
      let D = "";
      D =
        "undefined" != typeof Deno
          ? "deno"
          : "undefined" != typeof document
          ? "web"
          : "undefined" != typeof navigator &&
            "ReactNative" === navigator.product
          ? "react-native"
          : "node";
      let B = { "X-Client-Info": `supabase-js-${D}/2.39.7` },
        I = { headers: B },
        V = { schema: "public" },
        L = {
          autoRefreshToken: !0,
          persistSession: !0,
          detectSessionInUrl: !0,
          flowType: "implicit",
        },
        M = {},
        fetch_resolveFetch = (e) => {
          let r;
          return (
            (r = e || ("undefined" == typeof fetch ? T.default : fetch)),
            (...e) => r(...e)
          );
        },
        resolveHeadersConstructor = () =>
          "undefined" == typeof Headers ? T.Headers : Headers,
        fetchWithAuth = (e, r, n) => {
          let s = fetch_resolveFetch(n),
            a = resolveHeadersConstructor();
          return (n, l) => {
            var u, c, h, d;
            return (
              (u = void 0),
              (c = void 0),
              (h = void 0),
              (d = function* () {
                var u;
                let c = null !== (u = yield r()) && void 0 !== u ? u : e,
                  h = new a(null == l ? void 0 : l.headers);
                return (
                  h.has("apikey") || h.set("apikey", e),
                  h.has("Authorization") ||
                    h.set("Authorization", `Bearer ${c}`),
                  s(n, Object.assign(Object.assign({}, l), { headers: h }))
                );
              }),
              new (h || (h = Promise))(function (e, r) {
                function fulfilled(e) {
                  try {
                    step(d.next(e));
                  } catch (e) {
                    r(e);
                  }
                }
                function rejected(e) {
                  try {
                    step(d.throw(e));
                  } catch (e) {
                    r(e);
                  }
                }
                function step(r) {
                  var n;
                  r.done
                    ? e(r.value)
                    : ((n = r.value) instanceof h
                        ? n
                        : new h(function (e) {
                            e(n);
                          })
                      ).then(fulfilled, rejected);
                }
                step((d = d.apply(u, c || [])).next());
              })
            );
          };
        },
        helpers_isBrowser = () => "undefined" != typeof document,
        N = { tested: !1, writable: !1 },
        supportsLocalStorage = () => {
          if (!helpers_isBrowser()) return !1;
          try {
            if ("object" != typeof globalThis.localStorage) return !1;
          } catch (e) {
            return !1;
          }
          if (N.tested) return N.writable;
          let e = `lswt-${Math.random()}${Math.random()}`;
          try {
            globalThis.localStorage.setItem(e, e),
              globalThis.localStorage.removeItem(e),
              (N.tested = !0),
              (N.writable = !0);
          } catch (e) {
            (N.tested = !0), (N.writable = !1);
          }
          return N.writable;
        };
      function parseParametersFromURL(e) {
        let r = {},
          n = new URL(e);
        if (n.hash && "#" === n.hash[0])
          try {
            let e = new URLSearchParams(n.hash.substring(1));
            e.forEach((e, n) => {
              r[n] = e;
            });
          } catch (e) {}
        return (
          n.searchParams.forEach((e, n) => {
            r[n] = e;
          }),
          r
        );
      }
      let lib_helpers_resolveFetch = (e) => {
          let r;
          return (
            (r =
              e ||
              ("undefined" == typeof fetch
                ? (...e) =>
                    Promise.resolve()
                      .then(n.bind(n, 89743))
                      .then(({ default: r }) => r(...e))
                : fetch)),
            (...e) => r(...e)
          );
        },
        looksLikeFetchResponse = (e) =>
          "object" == typeof e &&
          null !== e &&
          "status" in e &&
          "ok" in e &&
          "json" in e &&
          "function" == typeof e.json,
        setItemAsync = async (e, r, n) => {
          await e.setItem(r, JSON.stringify(n));
        },
        getItemAsync = async (e, r) => {
          let n = await e.getItem(r);
          if (!n) return null;
          try {
            return JSON.parse(n);
          } catch (e) {
            return n;
          }
        },
        removeItemAsync = async (e, r) => {
          await e.removeItem(r);
        };
      let Deferred = class Deferred {
        constructor() {
          this.promise = new Deferred.promiseConstructor((e, r) => {
            (this.resolve = e), (this.reject = r);
          });
        }
      };
      function decodeJWTPayload(e) {
        let r = e.split(".");
        if (3 !== r.length)
          throw Error("JWT is not valid: not a JWT structure");
        if (
          !/^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}=?$|[a-z0-9_-]{2}(==)?$)$/i.test(
            r[1]
          )
        )
          throw Error("JWT is not valid: payload is not in base64url format");
        let n = r[1];
        return JSON.parse(
          (function (e) {
            let r, n, s, a, l, u, c;
            let h =
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
              d = "",
              f = 0;
            for (e = e.replace("-", "+").replace("_", "/"); f < e.length; )
              (a = h.indexOf(e.charAt(f++))),
                (l = h.indexOf(e.charAt(f++))),
                (u = h.indexOf(e.charAt(f++))),
                (c = h.indexOf(e.charAt(f++))),
                (r = (a << 2) | (l >> 4)),
                (n = ((15 & l) << 4) | (u >> 2)),
                (s = ((3 & u) << 6) | c),
                (d += String.fromCharCode(r)),
                64 != u && 0 != n && (d += String.fromCharCode(n)),
                64 != c && 0 != s && (d += String.fromCharCode(s));
            return d;
          })(n)
        );
      }
      async function sleep(e) {
        return await new Promise((r) => {
          setTimeout(() => r(null), e);
        });
      }
      function dec2hex(e) {
        return ("0" + e.toString(16)).substr(-2);
      }
      function generatePKCEVerifier() {
        let e = new Uint32Array(56);
        if ("undefined" == typeof crypto) {
          let e =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~",
            r = e.length,
            n = "";
          for (let s = 0; s < 56; s++)
            n += e.charAt(Math.floor(Math.random() * r));
          return n;
        }
        return crypto.getRandomValues(e), Array.from(e, dec2hex).join("");
      }
      async function sha256(e) {
        let r = new TextEncoder(),
          n = r.encode(e),
          s = await crypto.subtle.digest("SHA-256", n),
          a = new Uint8Array(s);
        return Array.from(a)
          .map((e) => String.fromCharCode(e))
          .join("");
      }
      async function generatePKCEChallenge(e) {
        let r =
          "undefined" != typeof crypto &&
          void 0 !== crypto.subtle &&
          "undefined" != typeof TextEncoder;
        if (!r)
          return (
            console.warn(
              "WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."
            ),
            e
          );
        let n = await sha256(e);
        return btoa(n)
          .replace(/\+/g, "-")
          .replace(/\//g, "_")
          .replace(/=+$/, "");
      }
      Deferred.promiseConstructor = Promise;
      let AuthError = class AuthError extends Error {
        constructor(e, r) {
          super(e),
            (this.__isAuthError = !0),
            (this.name = "AuthError"),
            (this.status = r);
        }
      };
      function isAuthError(e) {
        return "object" == typeof e && null !== e && "__isAuthError" in e;
      }
      let AuthApiError = class AuthApiError extends AuthError {
        constructor(e, r) {
          super(e, r), (this.name = "AuthApiError"), (this.status = r);
        }
        toJSON() {
          return {
            name: this.name,
            message: this.message,
            status: this.status,
          };
        }
      };
      let AuthUnknownError = class AuthUnknownError extends AuthError {
        constructor(e, r) {
          super(e), (this.name = "AuthUnknownError"), (this.originalError = r);
        }
      };
      let CustomAuthError = class CustomAuthError extends AuthError {
        constructor(e, r, n) {
          super(e), (this.name = r), (this.status = n);
        }
        toJSON() {
          return {
            name: this.name,
            message: this.message,
            status: this.status,
          };
        }
      };
      let AuthSessionMissingError = class AuthSessionMissingError extends CustomAuthError {
        constructor() {
          super("Auth session missing!", "AuthSessionMissingError", 400);
        }
      };
      let AuthInvalidTokenResponseError = class AuthInvalidTokenResponseError extends CustomAuthError {
        constructor() {
          super(
            "Auth session or user missing",
            "AuthInvalidTokenResponseError",
            500
          );
        }
      };
      let AuthInvalidCredentialsError = class AuthInvalidCredentialsError extends CustomAuthError {
        constructor(e) {
          super(e, "AuthInvalidCredentialsError", 400);
        }
      };
      let AuthImplicitGrantRedirectError = class AuthImplicitGrantRedirectError extends CustomAuthError {
        constructor(e, r = null) {
          super(e, "AuthImplicitGrantRedirectError", 500),
            (this.details = null),
            (this.details = r);
        }
        toJSON() {
          return {
            name: this.name,
            message: this.message,
            status: this.status,
            details: this.details,
          };
        }
      };
      let AuthPKCEGrantCodeExchangeError = class AuthPKCEGrantCodeExchangeError extends CustomAuthError {
        constructor(e, r = null) {
          super(e, "AuthPKCEGrantCodeExchangeError", 500),
            (this.details = null),
            (this.details = r);
        }
        toJSON() {
          return {
            name: this.name,
            message: this.message,
            status: this.status,
            details: this.details,
          };
        }
      };
      let AuthRetryableFetchError = class AuthRetryableFetchError extends CustomAuthError {
        constructor(e, r) {
          super(e, "AuthRetryableFetchError", r);
        }
      };
      function isAuthRetryableFetchError(e) {
        return isAuthError(e) && "AuthRetryableFetchError" === e.name;
      }
      let AuthWeakPasswordError = class AuthWeakPasswordError extends CustomAuthError {
        constructor(e, r, n) {
          super(e, "AuthWeakPasswordError", r), (this.reasons = n);
        }
      };
      var __rest = function (e, r) {
        var n = {};
        for (var s in e)
          Object.prototype.hasOwnProperty.call(e, s) &&
            0 > r.indexOf(s) &&
            (n[s] = e[s]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols)
          for (
            var a = 0, s = Object.getOwnPropertySymbols(e);
            a < s.length;
            a++
          )
            0 > r.indexOf(s[a]) &&
              Object.prototype.propertyIsEnumerable.call(e, s[a]) &&
              (n[s[a]] = e[s[a]]);
        return n;
      };
      let fetch_getErrorMessage = (e) =>
          e.msg ||
          e.message ||
          e.error_description ||
          e.error ||
          JSON.stringify(e),
        U = [502, 503, 504];
      async function fetch_handleError(e) {
        let r;
        if (!looksLikeFetchResponse(e))
          throw new AuthRetryableFetchError(fetch_getErrorMessage(e), 0);
        if (U.includes(e.status))
          throw new AuthRetryableFetchError(fetch_getErrorMessage(e), e.status);
        try {
          r = await e.json();
        } catch (e) {
          throw new AuthUnknownError(fetch_getErrorMessage(e), e);
        }
        if (
          "object" == typeof r &&
          r &&
          "object" == typeof r.weak_password &&
          r.weak_password &&
          Array.isArray(r.weak_password.reasons) &&
          r.weak_password.reasons.length &&
          r.weak_password.reasons.reduce(
            (e, r) => e && "string" == typeof r,
            !0
          )
        )
          throw new AuthWeakPasswordError(
            fetch_getErrorMessage(r),
            e.status,
            r.weak_password.reasons
          );
        throw new AuthApiError(fetch_getErrorMessage(r), e.status || 500);
      }
      let fetch_getRequestParams = (e, r, n, s) => {
        let a = { method: e, headers: (null == r ? void 0 : r.headers) || {} };
        return "GET" === e
          ? a
          : ((a.headers = Object.assign(
              { "Content-Type": "application/json;charset=UTF-8" },
              null == r ? void 0 : r.headers
            )),
            (a.body = JSON.stringify(s)),
            Object.assign(Object.assign({}, a), n));
      };
      async function _request(e, r, n, s) {
        var a;
        let l = Object.assign({}, null == s ? void 0 : s.headers);
        (null == s ? void 0 : s.jwt) && (l.Authorization = `Bearer ${s.jwt}`);
        let u =
          null !== (a = null == s ? void 0 : s.query) && void 0 !== a ? a : {};
        (null == s ? void 0 : s.redirectTo) && (u.redirect_to = s.redirectTo);
        let c = Object.keys(u).length
            ? "?" + new URLSearchParams(u).toString()
            : "",
          h = await fetch_handleRequest(
            e,
            r,
            n + c,
            { headers: l, noResolveJson: null == s ? void 0 : s.noResolveJson },
            {},
            null == s ? void 0 : s.body
          );
        return (null == s ? void 0 : s.xform)
          ? null == s
            ? void 0
            : s.xform(h)
          : { data: Object.assign({}, h), error: null };
      }
      async function fetch_handleRequest(e, r, n, s, a, l) {
        let u;
        let c = fetch_getRequestParams(r, s, a, l);
        try {
          u = await e(n, c);
        } catch (e) {
          throw (
            (console.error(e),
            new AuthRetryableFetchError(fetch_getErrorMessage(e), 0))
          );
        }
        if (
          (u.ok || (await fetch_handleError(u)),
          null == s ? void 0 : s.noResolveJson)
        )
          return u;
        try {
          return await u.json();
        } catch (e) {
          await fetch_handleError(e);
        }
      }
      function _sessionResponse(e) {
        var r;
        let n = null;
        e.access_token &&
          e.refresh_token &&
          e.expires_in &&
          ((n = Object.assign({}, e)),
          e.expires_at ||
            (n.expires_at = (function (e) {
              let r = Math.round(Date.now() / 1e3);
              return r + e;
            })(e.expires_in)));
        let s = null !== (r = e.user) && void 0 !== r ? r : e;
        return { data: { session: n, user: s }, error: null };
      }
      function _sessionResponsePassword(e) {
        let r = _sessionResponse(e);
        return (
          !r.error &&
            e.weak_password &&
            "object" == typeof e.weak_password &&
            Array.isArray(e.weak_password.reasons) &&
            e.weak_password.reasons.length &&
            e.weak_password.message &&
            "string" == typeof e.weak_password.message &&
            e.weak_password.reasons.reduce(
              (e, r) => e && "string" == typeof r,
              !0
            ) &&
            (r.data.weak_password = e.weak_password),
          r
        );
      }
      function _userResponse(e) {
        var r;
        let n = null !== (r = e.user) && void 0 !== r ? r : e;
        return { data: { user: n }, error: null };
      }
      function _ssoResponse(e) {
        return { data: e, error: null };
      }
      function _generateLinkResponse(e) {
        let {
            action_link: r,
            email_otp: n,
            hashed_token: s,
            redirect_to: a,
            verification_type: l,
          } = e,
          u = __rest(e, [
            "action_link",
            "email_otp",
            "hashed_token",
            "redirect_to",
            "verification_type",
          ]),
          c = Object.assign({}, u);
        return {
          data: {
            properties: {
              action_link: r,
              email_otp: n,
              hashed_token: s,
              redirect_to: a,
              verification_type: l,
            },
            user: c,
          },
          error: null,
        };
      }
      function _noResolveJsonResponse(e) {
        return e;
      }
      var GoTrueAdminApi_rest = function (e, r) {
        var n = {};
        for (var s in e)
          Object.prototype.hasOwnProperty.call(e, s) &&
            0 > r.indexOf(s) &&
            (n[s] = e[s]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols)
          for (
            var a = 0, s = Object.getOwnPropertySymbols(e);
            a < s.length;
            a++
          )
            0 > r.indexOf(s[a]) &&
              Object.prototype.propertyIsEnumerable.call(e, s[a]) &&
              (n[s[a]] = e[s[a]]);
        return n;
      };
      let GoTrueAdminApi_GoTrueAdminApi = class GoTrueAdminApi_GoTrueAdminApi {
        constructor({ url: e = "", headers: r = {}, fetch: n }) {
          (this.url = e),
            (this.headers = r),
            (this.fetch = lib_helpers_resolveFetch(n)),
            (this.mfa = {
              listFactors: this._listFactors.bind(this),
              deleteFactor: this._deleteFactor.bind(this),
            });
        }
        async signOut(e, r = "global") {
          try {
            return (
              await _request(
                this.fetch,
                "POST",
                `${this.url}/logout?scope=${r}`,
                { headers: this.headers, jwt: e, noResolveJson: !0 }
              ),
              { data: null, error: null }
            );
          } catch (e) {
            if (isAuthError(e)) return { data: null, error: e };
            throw e;
          }
        }
        async inviteUserByEmail(e, r = {}) {
          try {
            return await _request(this.fetch, "POST", `${this.url}/invite`, {
              body: { email: e, data: r.data },
              headers: this.headers,
              redirectTo: r.redirectTo,
              xform: _userResponse,
            });
          } catch (e) {
            if (isAuthError(e)) return { data: { user: null }, error: e };
            throw e;
          }
        }
        async generateLink(e) {
          try {
            let { options: r } = e,
              n = GoTrueAdminApi_rest(e, ["options"]),
              s = Object.assign(Object.assign({}, n), r);
            return (
              "newEmail" in n &&
                ((s.new_email = null == n ? void 0 : n.newEmail),
                delete s.newEmail),
              await _request(
                this.fetch,
                "POST",
                `${this.url}/admin/generate_link`,
                {
                  body: s,
                  headers: this.headers,
                  xform: _generateLinkResponse,
                  redirectTo: null == r ? void 0 : r.redirectTo,
                }
              )
            );
          } catch (e) {
            if (isAuthError(e))
              return { data: { properties: null, user: null }, error: e };
            throw e;
          }
        }
        async createUser(e) {
          try {
            return await _request(
              this.fetch,
              "POST",
              `${this.url}/admin/users`,
              { body: e, headers: this.headers, xform: _userResponse }
            );
          } catch (e) {
            if (isAuthError(e)) return { data: { user: null }, error: e };
            throw e;
          }
        }
        async listUsers(e) {
          var r, n, s, a, l, u, c;
          try {
            let h = { nextPage: null, lastPage: 0, total: 0 },
              d = await _request(this.fetch, "GET", `${this.url}/admin/users`, {
                headers: this.headers,
                noResolveJson: !0,
                query: {
                  page:
                    null !==
                      (n =
                        null === (r = null == e ? void 0 : e.page) ||
                        void 0 === r
                          ? void 0
                          : r.toString()) && void 0 !== n
                      ? n
                      : "",
                  per_page:
                    null !==
                      (a =
                        null === (s = null == e ? void 0 : e.perPage) ||
                        void 0 === s
                          ? void 0
                          : s.toString()) && void 0 !== a
                      ? a
                      : "",
                },
                xform: _noResolveJsonResponse,
              });
            if (d.error) throw d.error;
            let f = await d.json(),
              p =
                null !== (l = d.headers.get("x-total-count")) && void 0 !== l
                  ? l
                  : 0,
              m =
                null !==
                  (c =
                    null === (u = d.headers.get("link")) || void 0 === u
                      ? void 0
                      : u.split(",")) && void 0 !== c
                  ? c
                  : [];
            return (
              m.length > 0 &&
                (m.forEach((e) => {
                  let r = parseInt(
                      e.split(";")[0].split("=")[1].substring(0, 1)
                    ),
                    n = JSON.parse(e.split(";")[1].split("=")[1]);
                  h[`${n}Page`] = r;
                }),
                (h.total = parseInt(p))),
              { data: Object.assign(Object.assign({}, f), h), error: null }
            );
          } catch (e) {
            if (isAuthError(e)) return { data: { users: [] }, error: e };
            throw e;
          }
        }
        async getUserById(e) {
          try {
            return await _request(
              this.fetch,
              "GET",
              `${this.url}/admin/users/${e}`,
              { headers: this.headers, xform: _userResponse }
            );
          } catch (e) {
            if (isAuthError(e)) return { data: { user: null }, error: e };
            throw e;
          }
        }
        async updateUserById(e, r) {
          try {
            return await _request(
              this.fetch,
              "PUT",
              `${this.url}/admin/users/${e}`,
              { body: r, headers: this.headers, xform: _userResponse }
            );
          } catch (e) {
            if (isAuthError(e)) return { data: { user: null }, error: e };
            throw e;
          }
        }
        async deleteUser(e, r = !1) {
          try {
            return await _request(
              this.fetch,
              "DELETE",
              `${this.url}/admin/users/${e}`,
              {
                headers: this.headers,
                body: { should_soft_delete: r },
                xform: _userResponse,
              }
            );
          } catch (e) {
            if (isAuthError(e)) return { data: { user: null }, error: e };
            throw e;
          }
        }
        async _listFactors(e) {
          try {
            let { data: r, error: n } = await _request(
              this.fetch,
              "GET",
              `${this.url}/admin/users/${e.userId}/factors`,
              {
                headers: this.headers,
                xform: (e) => ({ data: { factors: e }, error: null }),
              }
            );
            return { data: r, error: n };
          } catch (e) {
            if (isAuthError(e)) return { data: null, error: e };
            throw e;
          }
        }
        async _deleteFactor(e) {
          try {
            let r = await _request(
              this.fetch,
              "DELETE",
              `${this.url}/admin/users/${e.userId}/factors/${e.id}`,
              { headers: this.headers }
            );
            return { data: r, error: null };
          } catch (e) {
            if (isAuthError(e)) return { data: null, error: e };
            throw e;
          }
        }
      };
      let $ = "0.0.0",
        q = { "X-Client-Info": `gotrue-js/${$}` },
        z = {
          getItem: (e) =>
            supportsLocalStorage() ? globalThis.localStorage.getItem(e) : null,
          setItem: (e, r) => {
            supportsLocalStorage() && globalThis.localStorage.setItem(e, r);
          },
          removeItem: (e) => {
            supportsLocalStorage() && globalThis.localStorage.removeItem(e);
          },
        };
      function memoryLocalStorageAdapter(e = {}) {
        return {
          getItem: (r) => e[r] || null,
          setItem: (r, n) => {
            e[r] = n;
          },
          removeItem: (r) => {
            delete e[r];
          },
        };
      }
      let H = {
        debug: !!(
          globalThis &&
          supportsLocalStorage() &&
          globalThis.localStorage &&
          "true" ===
            globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug")
        ),
      };
      let LockAcquireTimeoutError = class LockAcquireTimeoutError extends Error {
        constructor(e) {
          super(e), (this.isAcquireTimeout = !0);
        }
      };
      let NavigatorLockAcquireTimeoutError = class NavigatorLockAcquireTimeoutError extends LockAcquireTimeoutError {};
      async function navigatorLock(e, r, n) {
        H.debug &&
          console.log("@supabase/gotrue-js: navigatorLock: acquire lock", e, r);
        let s = new globalThis.AbortController();
        return (
          r > 0 &&
            setTimeout(() => {
              s.abort(),
                H.debug &&
                  console.log(
                    "@supabase/gotrue-js: navigatorLock acquire timed out",
                    e
                  );
            }, r),
          await globalThis.navigator.locks.request(
            e,
            0 === r
              ? { mode: "exclusive", ifAvailable: !0 }
              : { mode: "exclusive", signal: s.signal },
            async (s) => {
              if (s) {
                H.debug &&
                  console.log(
                    "@supabase/gotrue-js: navigatorLock: acquired",
                    e,
                    s.name
                  );
                try {
                  return await n();
                } finally {
                  H.debug &&
                    console.log(
                      "@supabase/gotrue-js: navigatorLock: released",
                      e,
                      s.name
                    );
                }
              } else {
                if (0 === r)
                  throw (
                    (H.debug &&
                      console.log(
                        "@supabase/gotrue-js: navigatorLock: not immediately available",
                        e
                      ),
                    new NavigatorLockAcquireTimeoutError(
                      `Acquiring an exclusive Navigator LockManager lock "${e}" immediately failed`
                    ))
                  );
                if (H.debug)
                  try {
                    let e = await globalThis.navigator.locks.query();
                    console.log(
                      "@supabase/gotrue-js: Navigator LockManager state",
                      JSON.stringify(e, null, "  ")
                    );
                  } catch (e) {
                    console.warn(
                      "@supabase/gotrue-js: Error when querying Navigator LockManager state",
                      e
                    );
                  }
                return (
                  console.warn(
                    "@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request"
                  ),
                  await n()
                );
              }
            }
          )
        );
      }
      !(function () {
        if ("object" != typeof globalThis)
          try {
            Object.defineProperty(Object.prototype, "__magic__", {
              get: function () {
                return this;
              },
              configurable: !0,
            }),
              (__magic__.globalThis = __magic__),
              delete Object.prototype.__magic__;
          } catch (e) {
            "undefined" != typeof self && (self.globalThis = self);
          }
      })();
      let W = {
        url: "http://localhost:9999",
        storageKey: "supabase.auth.token",
        autoRefreshToken: !0,
        persistSession: !0,
        detectSessionInUrl: !0,
        headers: q,
        flowType: "implicit",
        debug: !1,
      };
      async function lockNoOp(e, r, n) {
        return await n();
      }
      let GoTrueClient_GoTrueClient = class GoTrueClient_GoTrueClient {
        constructor(e) {
          var r, n;
          (this.memoryStorage = null),
            (this.stateChangeEmitters = new Map()),
            (this.autoRefreshTicker = null),
            (this.visibilityChangedCallback = null),
            (this.refreshingDeferred = null),
            (this.initializePromise = null),
            (this.detectSessionInUrl = !0),
            (this.lockAcquired = !1),
            (this.pendingInLock = []),
            (this.broadcastChannel = null),
            (this.logger = console.log),
            (this.instanceID = GoTrueClient_GoTrueClient.nextInstanceID),
            (GoTrueClient_GoTrueClient.nextInstanceID += 1),
            this.instanceID > 0 &&
              helpers_isBrowser() &&
              console.warn(
                "Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key."
              );
          let s = Object.assign(Object.assign({}, W), e);
          if (
            ((this.logDebugMessages = !!s.debug),
            "function" == typeof s.debug && (this.logger = s.debug),
            (this.persistSession = s.persistSession),
            (this.storageKey = s.storageKey),
            (this.autoRefreshToken = s.autoRefreshToken),
            (this.admin = new GoTrueAdminApi_GoTrueAdminApi({
              url: s.url,
              headers: s.headers,
              fetch: s.fetch,
            })),
            (this.url = s.url),
            (this.headers = s.headers),
            (this.fetch = lib_helpers_resolveFetch(s.fetch)),
            (this.lock = s.lock || lockNoOp),
            (this.detectSessionInUrl = s.detectSessionInUrl),
            (this.flowType = s.flowType),
            s.lock
              ? (this.lock = s.lock)
              : helpers_isBrowser() &&
                (null ===
                  (r = null == globalThis ? void 0 : globalThis.navigator) ||
                void 0 === r
                  ? void 0
                  : r.locks)
              ? (this.lock = navigatorLock)
              : (this.lock = lockNoOp),
            (this.mfa = {
              verify: this._verify.bind(this),
              enroll: this._enroll.bind(this),
              unenroll: this._unenroll.bind(this),
              challenge: this._challenge.bind(this),
              listFactors: this._listFactors.bind(this),
              challengeAndVerify: this._challengeAndVerify.bind(this),
              getAuthenticatorAssuranceLevel:
                this._getAuthenticatorAssuranceLevel.bind(this),
            }),
            this.persistSession
              ? s.storage
                ? (this.storage = s.storage)
                : supportsLocalStorage()
                ? (this.storage = z)
                : ((this.memoryStorage = {}),
                  (this.storage = memoryLocalStorageAdapter(
                    this.memoryStorage
                  )))
              : ((this.memoryStorage = {}),
                (this.storage = memoryLocalStorageAdapter(this.memoryStorage))),
            helpers_isBrowser() &&
              globalThis.BroadcastChannel &&
              this.persistSession &&
              this.storageKey)
          ) {
            try {
              this.broadcastChannel = new globalThis.BroadcastChannel(
                this.storageKey
              );
            } catch (e) {
              console.error(
                "Failed to create a new BroadcastChannel, multi-tab state changes will not be available",
                e
              );
            }
            null === (n = this.broadcastChannel) ||
              void 0 === n ||
              n.addEventListener("message", async (e) => {
                this._debug(
                  "received broadcast notification from other tab or client",
                  e
                ),
                  await this._notifyAllSubscribers(
                    e.data.event,
                    e.data.session,
                    !1
                  );
              });
          }
          this.initialize();
        }
        _debug(...e) {
          return (
            this.logDebugMessages &&
              this.logger(
                `GoTrueClient@${
                  this.instanceID
                } (${$}) ${new Date().toISOString()}`,
                ...e
              ),
            this
          );
        }
        async initialize() {
          return (
            this.initializePromise ||
              (this.initializePromise = (async () =>
                await this._acquireLock(
                  -1,
                  async () => await this._initialize()
                ))()),
            await this.initializePromise
          );
        }
        async _initialize() {
          try {
            let e = !!helpers_isBrowser() && (await this._isPKCEFlow());
            if (
              (this._debug("#_initialize()", "begin", "is PKCE flow", e),
              e || (this.detectSessionInUrl && this._isImplicitGrantFlow()))
            ) {
              let { data: r, error: n } = await this._getSessionFromURL(e);
              if (n) {
                if (
                  (this._debug(
                    "#_initialize()",
                    "error detecting session from URL",
                    n
                  ),
                  (null == n ? void 0 : n.message) ===
                    "Identity is already linked" ||
                    (null == n ? void 0 : n.message) ===
                      "Identity is already linked to another user")
                )
                  return { error: n };
                return await this._removeSession(), { error: n };
              }
              let { session: s, redirectType: a } = r;
              return (
                this._debug(
                  "#_initialize()",
                  "detected session in URL",
                  s,
                  "redirect type",
                  a
                ),
                await this._saveSession(s),
                setTimeout(async () => {
                  "recovery" === a
                    ? await this._notifyAllSubscribers("PASSWORD_RECOVERY", s)
                    : await this._notifyAllSubscribers("SIGNED_IN", s);
                }, 0),
                { error: null }
              );
            }
            return await this._recoverAndRefresh(), { error: null };
          } catch (e) {
            if (isAuthError(e)) return { error: e };
            return {
              error: new AuthUnknownError(
                "Unexpected error during initialization",
                e
              ),
            };
          } finally {
            await this._handleVisibilityChange(),
              this._debug("#_initialize()", "end");
          }
        }
        async signUp(e) {
          var r, n, s;
          try {
            let a;
            if ((await this._removeSession(), "email" in e)) {
              let { email: n, password: s, options: l } = e,
                u = null,
                c = null;
              if ("pkce" === this.flowType) {
                let e = generatePKCEVerifier();
                await setItemAsync(
                  this.storage,
                  `${this.storageKey}-code-verifier`,
                  e
                ),
                  (u = await generatePKCEChallenge(e)),
                  (c = e === u ? "plain" : "s256");
              }
              a = await _request(this.fetch, "POST", `${this.url}/signup`, {
                headers: this.headers,
                redirectTo: null == l ? void 0 : l.emailRedirectTo,
                body: {
                  email: n,
                  password: s,
                  data:
                    null !== (r = null == l ? void 0 : l.data) && void 0 !== r
                      ? r
                      : {},
                  gotrue_meta_security: {
                    captcha_token: null == l ? void 0 : l.captchaToken,
                  },
                  code_challenge: u,
                  code_challenge_method: c,
                },
                xform: _sessionResponse,
              });
            } else if ("phone" in e) {
              let { phone: r, password: l, options: u } = e;
              a = await _request(this.fetch, "POST", `${this.url}/signup`, {
                headers: this.headers,
                body: {
                  phone: r,
                  password: l,
                  data:
                    null !== (n = null == u ? void 0 : u.data) && void 0 !== n
                      ? n
                      : {},
                  channel:
                    null !== (s = null == u ? void 0 : u.channel) &&
                    void 0 !== s
                      ? s
                      : "sms",
                  gotrue_meta_security: {
                    captcha_token: null == u ? void 0 : u.captchaToken,
                  },
                },
                xform: _sessionResponse,
              });
            } else
              throw new AuthInvalidCredentialsError(
                "You must provide either an email or phone number and a password"
              );
            let { data: l, error: u } = a;
            if (u || !l)
              return { data: { user: null, session: null }, error: u };
            let c = l.session,
              h = l.user;
            return (
              l.session &&
                (await this._saveSession(l.session),
                await this._notifyAllSubscribers("SIGNED_IN", c)),
              { data: { user: h, session: c }, error: null }
            );
          } catch (e) {
            if (isAuthError(e))
              return { data: { user: null, session: null }, error: e };
            throw e;
          }
        }
        async signInWithPassword(e) {
          try {
            let r;
            if ((await this._removeSession(), "email" in e)) {
              let { email: n, password: s, options: a } = e;
              r = await _request(
                this.fetch,
                "POST",
                `${this.url}/token?grant_type=password`,
                {
                  headers: this.headers,
                  body: {
                    email: n,
                    password: s,
                    gotrue_meta_security: {
                      captcha_token: null == a ? void 0 : a.captchaToken,
                    },
                  },
                  xform: _sessionResponsePassword,
                }
              );
            } else if ("phone" in e) {
              let { phone: n, password: s, options: a } = e;
              r = await _request(
                this.fetch,
                "POST",
                `${this.url}/token?grant_type=password`,
                {
                  headers: this.headers,
                  body: {
                    phone: n,
                    password: s,
                    gotrue_meta_security: {
                      captcha_token: null == a ? void 0 : a.captchaToken,
                    },
                  },
                  xform: _sessionResponsePassword,
                }
              );
            } else
              throw new AuthInvalidCredentialsError(
                "You must provide either an email or phone number and a password"
              );
            let { data: n, error: s } = r;
            if (s) return { data: { user: null, session: null }, error: s };
            if (!n || !n.session || !n.user)
              return {
                data: { user: null, session: null },
                error: new AuthInvalidTokenResponseError(),
              };
            return (
              n.session &&
                (await this._saveSession(n.session),
                await this._notifyAllSubscribers("SIGNED_IN", n.session)),
              {
                data: Object.assign(
                  { user: n.user, session: n.session },
                  n.weak_password ? { weakPassword: n.weak_password } : null
                ),
                error: s,
              }
            );
          } catch (e) {
            if (isAuthError(e))
              return { data: { user: null, session: null }, error: e };
            throw e;
          }
        }
        async signInWithOAuth(e) {
          var r, n, s, a;
          return (
            await this._removeSession(),
            await this._handleProviderSignIn(e.provider, {
              redirectTo:
                null === (r = e.options) || void 0 === r
                  ? void 0
                  : r.redirectTo,
              scopes:
                null === (n = e.options) || void 0 === n ? void 0 : n.scopes,
              queryParams:
                null === (s = e.options) || void 0 === s
                  ? void 0
                  : s.queryParams,
              skipBrowserRedirect:
                null === (a = e.options) || void 0 === a
                  ? void 0
                  : a.skipBrowserRedirect,
            })
          );
        }
        async exchangeCodeForSession(e) {
          return (
            await this.initializePromise,
            this._acquireLock(-1, async () => this._exchangeCodeForSession(e))
          );
        }
        async _exchangeCodeForSession(e) {
          let r = await getItemAsync(
              this.storage,
              `${this.storageKey}-code-verifier`
            ),
            [n, s] = (null != r ? r : "").split("/"),
            { data: a, error: l } = await _request(
              this.fetch,
              "POST",
              `${this.url}/token?grant_type=pkce`,
              {
                headers: this.headers,
                body: { auth_code: e, code_verifier: n },
                xform: _sessionResponse,
              }
            );
          return (await removeItemAsync(
            this.storage,
            `${this.storageKey}-code-verifier`
          ),
          l)
            ? {
                data: { user: null, session: null, redirectType: null },
                error: l,
              }
            : a && a.session && a.user
            ? (a.session &&
                (await this._saveSession(a.session),
                await this._notifyAllSubscribers("SIGNED_IN", a.session)),
              {
                data: Object.assign(Object.assign({}, a), {
                  redirectType: null != s ? s : null,
                }),
                error: l,
              })
            : {
                data: { user: null, session: null, redirectType: null },
                error: new AuthInvalidTokenResponseError(),
              };
        }
        async signInWithIdToken(e) {
          await this._removeSession();
          try {
            let {
                options: r,
                provider: n,
                token: s,
                access_token: a,
                nonce: l,
              } = e,
              u = await _request(
                this.fetch,
                "POST",
                `${this.url}/token?grant_type=id_token`,
                {
                  headers: this.headers,
                  body: {
                    provider: n,
                    id_token: s,
                    access_token: a,
                    nonce: l,
                    gotrue_meta_security: {
                      captcha_token: null == r ? void 0 : r.captchaToken,
                    },
                  },
                  xform: _sessionResponse,
                }
              ),
              { data: c, error: h } = u;
            if (h) return { data: { user: null, session: null }, error: h };
            if (!c || !c.session || !c.user)
              return {
                data: { user: null, session: null },
                error: new AuthInvalidTokenResponseError(),
              };
            return (
              c.session &&
                (await this._saveSession(c.session),
                await this._notifyAllSubscribers("SIGNED_IN", c.session)),
              { data: c, error: h }
            );
          } catch (e) {
            if (isAuthError(e))
              return { data: { user: null, session: null }, error: e };
            throw e;
          }
        }
        async signInWithOtp(e) {
          var r, n, s, a, l;
          try {
            if ((await this._removeSession(), "email" in e)) {
              let { email: s, options: a } = e,
                l = null,
                u = null;
              if ("pkce" === this.flowType) {
                let e = generatePKCEVerifier();
                await setItemAsync(
                  this.storage,
                  `${this.storageKey}-code-verifier`,
                  e
                ),
                  (l = await generatePKCEChallenge(e)),
                  (u = e === l ? "plain" : "s256");
              }
              let { error: c } = await _request(
                this.fetch,
                "POST",
                `${this.url}/otp`,
                {
                  headers: this.headers,
                  body: {
                    email: s,
                    data:
                      null !== (r = null == a ? void 0 : a.data) && void 0 !== r
                        ? r
                        : {},
                    create_user:
                      null === (n = null == a ? void 0 : a.shouldCreateUser) ||
                      void 0 === n ||
                      n,
                    gotrue_meta_security: {
                      captcha_token: null == a ? void 0 : a.captchaToken,
                    },
                    code_challenge: l,
                    code_challenge_method: u,
                  },
                  redirectTo: null == a ? void 0 : a.emailRedirectTo,
                }
              );
              return { data: { user: null, session: null }, error: c };
            }
            if ("phone" in e) {
              let { phone: r, options: n } = e,
                { data: u, error: c } = await _request(
                  this.fetch,
                  "POST",
                  `${this.url}/otp`,
                  {
                    headers: this.headers,
                    body: {
                      phone: r,
                      data:
                        null !== (s = null == n ? void 0 : n.data) &&
                        void 0 !== s
                          ? s
                          : {},
                      create_user:
                        null ===
                          (a = null == n ? void 0 : n.shouldCreateUser) ||
                        void 0 === a ||
                        a,
                      gotrue_meta_security: {
                        captcha_token: null == n ? void 0 : n.captchaToken,
                      },
                      channel:
                        null !== (l = null == n ? void 0 : n.channel) &&
                        void 0 !== l
                          ? l
                          : "sms",
                    },
                  }
                );
              return {
                data: {
                  user: null,
                  session: null,
                  messageId: null == u ? void 0 : u.message_id,
                },
                error: c,
              };
            }
            throw new AuthInvalidCredentialsError(
              "You must provide either an email or phone number."
            );
          } catch (e) {
            if (isAuthError(e))
              return { data: { user: null, session: null }, error: e };
            throw e;
          }
        }
        async verifyOtp(e) {
          var r, n;
          try {
            let s, a;
            "email_change" !== e.type &&
              "phone_change" !== e.type &&
              (await this._removeSession()),
              "options" in e &&
                ((s =
                  null === (r = e.options) || void 0 === r
                    ? void 0
                    : r.redirectTo),
                (a =
                  null === (n = e.options) || void 0 === n
                    ? void 0
                    : n.captchaToken));
            let { data: l, error: u } = await _request(
              this.fetch,
              "POST",
              `${this.url}/verify`,
              {
                headers: this.headers,
                body: Object.assign(Object.assign({}, e), {
                  gotrue_meta_security: { captcha_token: a },
                }),
                redirectTo: s,
                xform: _sessionResponse,
              }
            );
            if (u) throw u;
            if (!l) throw Error("An error occurred on token verification.");
            let c = l.session,
              h = l.user;
            return (
              (null == c ? void 0 : c.access_token) &&
                (await this._saveSession(c),
                await this._notifyAllSubscribers(
                  "recovery" == e.type ? "PASSWORD_RECOVERY" : "SIGNED_IN",
                  c
                )),
              { data: { user: h, session: c }, error: null }
            );
          } catch (e) {
            if (isAuthError(e))
              return { data: { user: null, session: null }, error: e };
            throw e;
          }
        }
        async signInWithSSO(e) {
          var r, n, s;
          try {
            await this._removeSession();
            let a = null,
              l = null;
            if ("pkce" === this.flowType) {
              let e = generatePKCEVerifier();
              await setItemAsync(
                this.storage,
                `${this.storageKey}-code-verifier`,
                e
              ),
                (a = await generatePKCEChallenge(e)),
                (l = e === a ? "plain" : "s256");
            }
            return await _request(this.fetch, "POST", `${this.url}/sso`, {
              body: Object.assign(
                Object.assign(
                  Object.assign(
                    Object.assign(
                      Object.assign(
                        {},
                        "providerId" in e ? { provider_id: e.providerId } : null
                      ),
                      "domain" in e ? { domain: e.domain } : null
                    ),
                    {
                      redirect_to:
                        null !==
                          (n =
                            null === (r = e.options) || void 0 === r
                              ? void 0
                              : r.redirectTo) && void 0 !== n
                          ? n
                          : void 0,
                    }
                  ),
                  (
                    null === (s = null == e ? void 0 : e.options) ||
                    void 0 === s
                      ? void 0
                      : s.captchaToken
                  )
                    ? {
                        gotrue_meta_security: {
                          captcha_token: e.options.captchaToken,
                        },
                      }
                    : null
                ),
                {
                  skip_http_redirect: !0,
                  code_challenge: a,
                  code_challenge_method: l,
                }
              ),
              headers: this.headers,
              xform: _ssoResponse,
            });
          } catch (e) {
            if (isAuthError(e)) return { data: null, error: e };
            throw e;
          }
        }
        async reauthenticate() {
          return (
            await this.initializePromise,
            await this._acquireLock(
              -1,
              async () => await this._reauthenticate()
            )
          );
        }
        async _reauthenticate() {
          try {
            return await this._useSession(async (e) => {
              let {
                data: { session: r },
                error: n,
              } = e;
              if (n) throw n;
              if (!r) throw new AuthSessionMissingError();
              let { error: s } = await _request(
                this.fetch,
                "GET",
                `${this.url}/reauthenticate`,
                { headers: this.headers, jwt: r.access_token }
              );
              return { data: { user: null, session: null }, error: s };
            });
          } catch (e) {
            if (isAuthError(e))
              return { data: { user: null, session: null }, error: e };
            throw e;
          }
        }
        async resend(e) {
          try {
            "email_change" != e.type &&
              "phone_change" != e.type &&
              (await this._removeSession());
            let r = `${this.url}/resend`;
            if ("email" in e) {
              let { email: n, type: s, options: a } = e,
                { error: l } = await _request(this.fetch, "POST", r, {
                  headers: this.headers,
                  body: {
                    email: n,
                    type: s,
                    gotrue_meta_security: {
                      captcha_token: null == a ? void 0 : a.captchaToken,
                    },
                  },
                  redirectTo: null == a ? void 0 : a.emailRedirectTo,
                });
              return { data: { user: null, session: null }, error: l };
            }
            if ("phone" in e) {
              let { phone: n, type: s, options: a } = e,
                { data: l, error: u } = await _request(this.fetch, "POST", r, {
                  headers: this.headers,
                  body: {
                    phone: n,
                    type: s,
                    gotrue_meta_security: {
                      captcha_token: null == a ? void 0 : a.captchaToken,
                    },
                  },
                });
              return {
                data: {
                  user: null,
                  session: null,
                  messageId: null == l ? void 0 : l.message_id,
                },
                error: u,
              };
            }
            throw new AuthInvalidCredentialsError(
              "You must provide either an email or phone number and a type"
            );
          } catch (e) {
            if (isAuthError(e))
              return { data: { user: null, session: null }, error: e };
            throw e;
          }
        }
        async getSession() {
          return (
            await this.initializePromise,
            this._acquireLock(-1, async () => this._useSession(async (e) => e))
          );
        }
        async _acquireLock(e, r) {
          this._debug("#_acquireLock", "begin", e);
          try {
            if (this.lockAcquired) {
              let e = this.pendingInLock.length
                  ? this.pendingInLock[this.pendingInLock.length - 1]
                  : Promise.resolve(),
                n = (async () => (await e, await r()))();
              return (
                this.pendingInLock.push(
                  (async () => {
                    try {
                      await n;
                    } catch (e) {}
                  })()
                ),
                n
              );
            }
            return await this.lock(`lock:${this.storageKey}`, e, async () => {
              this._debug(
                "#_acquireLock",
                "lock acquired for storage key",
                this.storageKey
              );
              try {
                this.lockAcquired = !0;
                let e = r();
                for (
                  this.pendingInLock.push(
                    (async () => {
                      try {
                        await e;
                      } catch (e) {}
                    })()
                  ),
                    await e;
                  this.pendingInLock.length;

                ) {
                  let e = [...this.pendingInLock];
                  await Promise.all(e), this.pendingInLock.splice(0, e.length);
                }
                return await e;
              } finally {
                this._debug(
                  "#_acquireLock",
                  "lock released for storage key",
                  this.storageKey
                ),
                  (this.lockAcquired = !1);
              }
            });
          } finally {
            this._debug("#_acquireLock", "end");
          }
        }
        async _useSession(e) {
          this._debug("#_useSession", "begin");
          try {
            let r = await this.__loadSession();
            return await e(r);
          } finally {
            this._debug("#_useSession", "end");
          }
        }
        async __loadSession() {
          this._debug("#__loadSession()", "begin"),
            this.lockAcquired ||
              this._debug(
                "#__loadSession()",
                "used outside of an acquired lock!",
                Error().stack
              );
          try {
            let e = null,
              r = await getItemAsync(this.storage, this.storageKey);
            if (
              (this._debug("#getSession()", "session from storage", r),
              null !== r &&
                (this._isValidSession(r)
                  ? (e = r)
                  : (this._debug(
                      "#getSession()",
                      "session from storage is not valid"
                    ),
                    await this._removeSession())),
              !e)
            )
              return { data: { session: null }, error: null };
            let n = !!e.expires_at && e.expires_at <= Date.now() / 1e3;
            if (
              (this._debug(
                "#__loadSession()",
                `session has${n ? "" : " not"} expired`,
                "expires_at",
                e.expires_at
              ),
              !n)
            )
              return { data: { session: e }, error: null };
            let { session: s, error: a } = await this._callRefreshToken(
              e.refresh_token
            );
            if (a) return { data: { session: null }, error: a };
            return { data: { session: s }, error: null };
          } finally {
            this._debug("#__loadSession()", "end");
          }
        }
        async getUser(e) {
          return e
            ? await this._getUser(e)
            : (await this.initializePromise,
              this._acquireLock(-1, async () => await this._getUser()));
        }
        async _getUser(e) {
          try {
            if (e)
              return await _request(this.fetch, "GET", `${this.url}/user`, {
                headers: this.headers,
                jwt: e,
                xform: _userResponse,
              });
            return await this._useSession(async (e) => {
              var r, n;
              let { data: s, error: a } = e;
              if (a) throw a;
              return await _request(this.fetch, "GET", `${this.url}/user`, {
                headers: this.headers,
                jwt:
                  null !==
                    (n =
                      null === (r = s.session) || void 0 === r
                        ? void 0
                        : r.access_token) && void 0 !== n
                    ? n
                    : void 0,
                xform: _userResponse,
              });
            });
          } catch (e) {
            if (isAuthError(e)) return { data: { user: null }, error: e };
            throw e;
          }
        }
        async updateUser(e, r = {}) {
          return (
            await this.initializePromise,
            await this._acquireLock(
              -1,
              async () => await this._updateUser(e, r)
            )
          );
        }
        async _updateUser(e, r = {}) {
          try {
            return await this._useSession(async (n) => {
              let { data: s, error: a } = n;
              if (a) throw a;
              if (!s.session) throw new AuthSessionMissingError();
              let l = s.session,
                u = null,
                c = null;
              if ("pkce" === this.flowType && null != e.email) {
                let e = generatePKCEVerifier();
                await setItemAsync(
                  this.storage,
                  `${this.storageKey}-code-verifier`,
                  e
                ),
                  (u = await generatePKCEChallenge(e)),
                  (c = e === u ? "plain" : "s256");
              }
              let { data: h, error: d } = await _request(
                this.fetch,
                "PUT",
                `${this.url}/user`,
                {
                  headers: this.headers,
                  redirectTo: null == r ? void 0 : r.emailRedirectTo,
                  body: Object.assign(Object.assign({}, e), {
                    code_challenge: u,
                    code_challenge_method: c,
                  }),
                  jwt: l.access_token,
                  xform: _userResponse,
                }
              );
              if (d) throw d;
              return (
                (l.user = h.user),
                await this._saveSession(l),
                await this._notifyAllSubscribers("USER_UPDATED", l),
                { data: { user: l.user }, error: null }
              );
            });
          } catch (e) {
            if (isAuthError(e)) return { data: { user: null }, error: e };
            throw e;
          }
        }
        _decodeJWT(e) {
          return decodeJWTPayload(e);
        }
        async setSession(e) {
          return (
            await this.initializePromise,
            await this._acquireLock(-1, async () => await this._setSession(e))
          );
        }
        async _setSession(e) {
          try {
            if (!e.access_token || !e.refresh_token)
              throw new AuthSessionMissingError();
            let r = Date.now() / 1e3,
              n = r,
              s = !0,
              a = null,
              l = decodeJWTPayload(e.access_token);
            if ((l.exp && (s = (n = l.exp) <= r), s)) {
              let { session: r, error: n } = await this._callRefreshToken(
                e.refresh_token
              );
              if (n) return { data: { user: null, session: null }, error: n };
              if (!r)
                return { data: { user: null, session: null }, error: null };
              a = r;
            } else {
              let { data: s, error: l } = await this._getUser(e.access_token);
              if (l) throw l;
              (a = {
                access_token: e.access_token,
                refresh_token: e.refresh_token,
                user: s.user,
                token_type: "bearer",
                expires_in: n - r,
                expires_at: n,
              }),
                await this._saveSession(a),
                await this._notifyAllSubscribers("SIGNED_IN", a);
            }
            return { data: { user: a.user, session: a }, error: null };
          } catch (e) {
            if (isAuthError(e))
              return { data: { session: null, user: null }, error: e };
            throw e;
          }
        }
        async refreshSession(e) {
          return (
            await this.initializePromise,
            await this._acquireLock(
              -1,
              async () => await this._refreshSession(e)
            )
          );
        }
        async _refreshSession(e) {
          try {
            return await this._useSession(async (r) => {
              var n;
              if (!e) {
                let { data: s, error: a } = r;
                if (a) throw a;
                e = null !== (n = s.session) && void 0 !== n ? n : void 0;
              }
              if (!(null == e ? void 0 : e.refresh_token))
                throw new AuthSessionMissingError();
              let { session: s, error: a } = await this._callRefreshToken(
                e.refresh_token
              );
              return a
                ? { data: { user: null, session: null }, error: a }
                : s
                ? { data: { user: s.user, session: s }, error: null }
                : { data: { user: null, session: null }, error: null };
            });
          } catch (e) {
            if (isAuthError(e))
              return { data: { user: null, session: null }, error: e };
            throw e;
          }
        }
        async _getSessionFromURL(e) {
          try {
            if (!helpers_isBrowser())
              throw new AuthImplicitGrantRedirectError("No browser detected.");
            if ("implicit" !== this.flowType || this._isImplicitGrantFlow()) {
              if ("pkce" == this.flowType && !e)
                throw new AuthPKCEGrantCodeExchangeError(
                  "Not a valid PKCE flow url."
                );
            } else
              throw new AuthImplicitGrantRedirectError(
                "Not a valid implicit grant flow url."
              );
            let r = parseParametersFromURL(window.location.href);
            if (e) {
              if (!r.code)
                throw new AuthPKCEGrantCodeExchangeError("No code detected.");
              let { data: e, error: n } = await this._exchangeCodeForSession(
                r.code
              );
              if (n) throw n;
              let s = new URL(window.location.href);
              return (
                s.searchParams.delete("code"),
                window.history.replaceState(
                  window.history.state,
                  "",
                  s.toString()
                ),
                {
                  data: { session: e.session, redirectType: null },
                  error: null,
                }
              );
            }
            if (r.error || r.error_description || r.error_code)
              throw new AuthImplicitGrantRedirectError(
                r.error_description ||
                  "Error in URL with unspecified error_description",
                {
                  error: r.error || "unspecified_error",
                  code: r.error_code || "unspecified_code",
                }
              );
            let {
              provider_token: n,
              provider_refresh_token: s,
              access_token: a,
              refresh_token: l,
              expires_in: u,
              expires_at: c,
              token_type: h,
            } = r;
            if (!a || !u || !l || !h)
              throw new AuthImplicitGrantRedirectError(
                "No session defined in URL"
              );
            let d = Math.round(Date.now() / 1e3),
              f = parseInt(u),
              p = d + f;
            c && (p = parseInt(c));
            let m = p - d;
            1e3 * m <= 3e4 &&
              console.warn(
                `@supabase/gotrue-js: Session as retrieved from URL expires in ${m}s, should have been closer to ${f}s`
              );
            let y = p - f;
            d - y >= 120
              ? console.warn(
                  "@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale",
                  y,
                  p,
                  d
                )
              : d - y < 0 &&
                console.warn(
                  "@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clok for skew",
                  y,
                  p,
                  d
                );
            let { data: g, error: v } = await this._getUser(a);
            if (v) throw v;
            let b = {
              provider_token: n,
              provider_refresh_token: s,
              access_token: a,
              expires_in: f,
              expires_at: p,
              refresh_token: l,
              token_type: h,
              user: g.user,
            };
            return (
              (window.location.hash = ""),
              this._debug(
                "#_getSessionFromURL()",
                "clearing window.location.hash"
              ),
              { data: { session: b, redirectType: r.type }, error: null }
            );
          } catch (e) {
            if (isAuthError(e))
              return { data: { session: null, redirectType: null }, error: e };
            throw e;
          }
        }
        _isImplicitGrantFlow() {
          let e = parseParametersFromURL(window.location.href);
          return !!(
            helpers_isBrowser() &&
            (e.access_token || e.error_description)
          );
        }
        async _isPKCEFlow() {
          let e = parseParametersFromURL(window.location.href),
            r = await getItemAsync(
              this.storage,
              `${this.storageKey}-code-verifier`
            );
          return !!(e.code && r);
        }
        async signOut(e = { scope: "global" }) {
          return (
            await this.initializePromise,
            await this._acquireLock(-1, async () => await this._signOut(e))
          );
        }
        async _signOut({ scope: e } = { scope: "global" }) {
          return await this._useSession(async (r) => {
            var n;
            let { data: s, error: a } = r;
            if (a) return { error: a };
            let l =
              null === (n = s.session) || void 0 === n
                ? void 0
                : n.access_token;
            if (l) {
              let { error: r } = await this.admin.signOut(l, e);
              if (
                r &&
                !(
                  isAuthError(r) &&
                  "AuthApiError" === r.name &&
                  (404 === r.status || 401 === r.status)
                )
              )
                return { error: r };
            }
            return (
              "others" !== e &&
                (await this._removeSession(),
                await removeItemAsync(
                  this.storage,
                  `${this.storageKey}-code-verifier`
                ),
                await this._notifyAllSubscribers("SIGNED_OUT", null)),
              { error: null }
            );
          });
        }
        onAuthStateChange(e) {
          let r = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
              /[xy]/g,
              function (e) {
                let r = (16 * Math.random()) | 0;
                return ("x" == e ? r : (3 & r) | 8).toString(16);
              }
            ),
            n = {
              id: r,
              callback: e,
              unsubscribe: () => {
                this._debug(
                  "#unsubscribe()",
                  "state change callback with id removed",
                  r
                ),
                  this.stateChangeEmitters.delete(r);
              },
            };
          return (
            this._debug(
              "#onAuthStateChange()",
              "registered callback with id",
              r
            ),
            this.stateChangeEmitters.set(r, n),
            (async () => {
              await this.initializePromise,
                await this._acquireLock(-1, async () => {
                  this._emitInitialSession(r);
                });
            })(),
            { data: { subscription: n } }
          );
        }
        async _emitInitialSession(e) {
          return await this._useSession(async (r) => {
            var n, s;
            try {
              let {
                data: { session: s },
                error: a,
              } = r;
              if (a) throw a;
              await (null === (n = this.stateChangeEmitters.get(e)) ||
              void 0 === n
                ? void 0
                : n.callback("INITIAL_SESSION", s)),
                this._debug("INITIAL_SESSION", "callback id", e, "session", s);
            } catch (r) {
              await (null === (s = this.stateChangeEmitters.get(e)) ||
              void 0 === s
                ? void 0
                : s.callback("INITIAL_SESSION", null)),
                this._debug("INITIAL_SESSION", "callback id", e, "error", r),
                console.error(r);
            }
          });
        }
        async resetPasswordForEmail(e, r = {}) {
          let n = null,
            s = null;
          if ("pkce" === this.flowType) {
            let e = generatePKCEVerifier();
            await setItemAsync(
              this.storage,
              `${this.storageKey}-code-verifier`,
              `${e}/PASSWORD_RECOVERY`
            ),
              (n = await generatePKCEChallenge(e)),
              (s = e === n ? "plain" : "s256");
          }
          try {
            return await _request(this.fetch, "POST", `${this.url}/recover`, {
              body: {
                email: e,
                code_challenge: n,
                code_challenge_method: s,
                gotrue_meta_security: { captcha_token: r.captchaToken },
              },
              headers: this.headers,
              redirectTo: r.redirectTo,
            });
          } catch (e) {
            if (isAuthError(e)) return { data: null, error: e };
            throw e;
          }
        }
        async getUserIdentities() {
          var e;
          try {
            let { data: r, error: n } = await this.getUser();
            if (n) throw n;
            return {
              data: {
                identities:
                  null !== (e = r.user.identities) && void 0 !== e ? e : [],
              },
              error: null,
            };
          } catch (e) {
            if (isAuthError(e)) return { data: null, error: e };
            throw e;
          }
        }
        async linkIdentity(e) {
          var r;
          try {
            let { data: n, error: s } = await this._useSession(async (r) => {
              var n, s, a, l, u;
              let { data: c, error: h } = r;
              if (h) throw h;
              let d = await this._getUrlForProvider(
                `${this.url}/user/identities/authorize`,
                e.provider,
                {
                  redirectTo:
                    null === (n = e.options) || void 0 === n
                      ? void 0
                      : n.redirectTo,
                  scopes:
                    null === (s = e.options) || void 0 === s
                      ? void 0
                      : s.scopes,
                  queryParams:
                    null === (a = e.options) || void 0 === a
                      ? void 0
                      : a.queryParams,
                  skipBrowserRedirect: !0,
                }
              );
              return await _request(this.fetch, "GET", d, {
                headers: this.headers,
                jwt:
                  null !==
                    (u =
                      null === (l = c.session) || void 0 === l
                        ? void 0
                        : l.access_token) && void 0 !== u
                    ? u
                    : void 0,
              });
            });
            if (s) throw s;
            return (
              !helpers_isBrowser() ||
                (null === (r = e.options) || void 0 === r
                  ? void 0
                  : r.skipBrowserRedirect) ||
                window.location.assign(null == n ? void 0 : n.url),
              {
                data: { provider: e.provider, url: null == n ? void 0 : n.url },
                error: null,
              }
            );
          } catch (r) {
            if (isAuthError(r))
              return { data: { provider: e.provider, url: null }, error: r };
            throw r;
          }
        }
        async unlinkIdentity(e) {
          try {
            return await this._useSession(async (r) => {
              var n, s;
              let { data: a, error: l } = r;
              if (l) throw l;
              return await _request(
                this.fetch,
                "DELETE",
                `${this.url}/user/identities/${e.identity_id}`,
                {
                  headers: this.headers,
                  jwt:
                    null !==
                      (s =
                        null === (n = a.session) || void 0 === n
                          ? void 0
                          : n.access_token) && void 0 !== s
                      ? s
                      : void 0,
                }
              );
            });
          } catch (e) {
            if (isAuthError(e)) return { data: null, error: e };
            throw e;
          }
        }
        async _refreshAccessToken(e) {
          let r = `#_refreshAccessToken(${e.substring(0, 5)}...)`;
          this._debug(r, "begin");
          try {
            let n = Date.now();
            return await (function (e, r) {
              let n = new Promise((n, s) => {
                (async () => {
                  for (let a = 0; a < 1 / 0; a++)
                    try {
                      let s = await e(a);
                      if (!r(a, null, s)) {
                        n(s);
                        return;
                      }
                    } catch (e) {
                      if (!r(a, e)) {
                        s(e);
                        return;
                      }
                    }
                })();
              });
              return n;
            })(
              async (n) => (
                await sleep(200 * n),
                this._debug(r, "refreshing attempt", n),
                await _request(
                  this.fetch,
                  "POST",
                  `${this.url}/token?grant_type=refresh_token`,
                  {
                    body: { refresh_token: e },
                    headers: this.headers,
                    xform: _sessionResponse,
                  }
                )
              ),
              (e, r, s) =>
                s &&
                s.error &&
                isAuthRetryableFetchError(s.error) &&
                Date.now() + (e + 1) * 200 - n < 3e4
            );
          } catch (e) {
            if ((this._debug(r, "error", e), isAuthError(e)))
              return { data: { session: null, user: null }, error: e };
            throw e;
          } finally {
            this._debug(r, "end");
          }
        }
        _isValidSession(e) {
          return (
            "object" == typeof e &&
            null !== e &&
            "access_token" in e &&
            "refresh_token" in e &&
            "expires_at" in e
          );
        }
        async _handleProviderSignIn(e, r) {
          let n = await this._getUrlForProvider(`${this.url}/authorize`, e, {
            redirectTo: r.redirectTo,
            scopes: r.scopes,
            queryParams: r.queryParams,
          });
          return (
            this._debug(
              "#_handleProviderSignIn()",
              "provider",
              e,
              "options",
              r,
              "url",
              n
            ),
            helpers_isBrowser() &&
              !r.skipBrowserRedirect &&
              window.location.assign(n),
            { data: { provider: e, url: n }, error: null }
          );
        }
        async _recoverAndRefresh() {
          var e;
          let r = "#_recoverAndRefresh()";
          this._debug(r, "begin");
          try {
            let n = await getItemAsync(this.storage, this.storageKey);
            if (
              (this._debug(r, "session from storage", n),
              !this._isValidSession(n))
            ) {
              this._debug(r, "session is not valid"),
                null !== n && (await this._removeSession());
              return;
            }
            let s = Math.round(Date.now() / 1e3),
              a =
                (null !== (e = n.expires_at) && void 0 !== e ? e : 1 / 0) <
                s + 10;
            if (
              (this._debug(
                r,
                `session has${a ? "" : " not"} expired with margin of 10s`
              ),
              a)
            ) {
              if (this.autoRefreshToken && n.refresh_token) {
                let { error: e } = await this._callRefreshToken(
                  n.refresh_token
                );
                e &&
                  (console.error(e),
                  isAuthRetryableFetchError(e) ||
                    (this._debug(
                      r,
                      "refresh failed with a non-retryable error, removing the session",
                      e
                    ),
                    await this._removeSession()));
              }
            } else await this._notifyAllSubscribers("SIGNED_IN", n);
          } catch (e) {
            this._debug(r, "error", e), console.error(e);
            return;
          } finally {
            this._debug(r, "end");
          }
        }
        async _callRefreshToken(e) {
          var r, n;
          if (!e) throw new AuthSessionMissingError();
          if (this.refreshingDeferred) return this.refreshingDeferred.promise;
          let s = `#_callRefreshToken(${e.substring(0, 5)}...)`;
          this._debug(s, "begin");
          try {
            this.refreshingDeferred = new Deferred();
            let { data: r, error: n } = await this._refreshAccessToken(e);
            if (n) throw n;
            if (!r.session) throw new AuthSessionMissingError();
            await this._saveSession(r.session),
              await this._notifyAllSubscribers("TOKEN_REFRESHED", r.session);
            let s = { session: r.session, error: null };
            return this.refreshingDeferred.resolve(s), s;
          } catch (e) {
            if ((this._debug(s, "error", e), isAuthError(e))) {
              let n = { session: null, error: e };
              return (
                isAuthRetryableFetchError(e) ||
                  (await this._removeSession(),
                  await this._notifyAllSubscribers("SIGNED_OUT", null)),
                null === (r = this.refreshingDeferred) ||
                  void 0 === r ||
                  r.resolve(n),
                n
              );
            }
            throw (
              (null === (n = this.refreshingDeferred) ||
                void 0 === n ||
                n.reject(e),
              e)
            );
          } finally {
            (this.refreshingDeferred = null), this._debug(s, "end");
          }
        }
        async _notifyAllSubscribers(e, r, n = !0) {
          let s = `#_notifyAllSubscribers(${e})`;
          this._debug(s, "begin", r, `broadcast = ${n}`);
          try {
            this.broadcastChannel &&
              n &&
              this.broadcastChannel.postMessage({ event: e, session: r });
            let s = [],
              a = Array.from(this.stateChangeEmitters.values()).map(
                async (n) => {
                  try {
                    await n.callback(e, r);
                  } catch (e) {
                    s.push(e);
                  }
                }
              );
            if ((await Promise.all(a), s.length > 0)) {
              for (let e = 0; e < s.length; e += 1) console.error(s[e]);
              throw s[0];
            }
          } finally {
            this._debug(s, "end");
          }
        }
        async _saveSession(e) {
          this._debug("#_saveSession()", e),
            await setItemAsync(this.storage, this.storageKey, e);
        }
        async _removeSession() {
          this._debug("#_removeSession()"),
            await removeItemAsync(this.storage, this.storageKey);
        }
        _removeVisibilityChangedCallback() {
          this._debug("#_removeVisibilityChangedCallback()");
          let e = this.visibilityChangedCallback;
          this.visibilityChangedCallback = null;
          try {
            e &&
              helpers_isBrowser() &&
              (null == window ? void 0 : window.removeEventListener) &&
              window.removeEventListener("visibilitychange", e);
          } catch (e) {
            console.error("removing visibilitychange callback failed", e);
          }
        }
        async _startAutoRefresh() {
          await this._stopAutoRefresh(), this._debug("#_startAutoRefresh()");
          let e = setInterval(() => this._autoRefreshTokenTick(), 3e4);
          (this.autoRefreshTicker = e),
            e && "object" == typeof e && "function" == typeof e.unref
              ? e.unref()
              : "undefined" != typeof Deno &&
                "function" == typeof Deno.unrefTimer &&
                Deno.unrefTimer(e),
            setTimeout(async () => {
              await this.initializePromise, await this._autoRefreshTokenTick();
            }, 0);
        }
        async _stopAutoRefresh() {
          this._debug("#_stopAutoRefresh()");
          let e = this.autoRefreshTicker;
          (this.autoRefreshTicker = null), e && clearInterval(e);
        }
        async startAutoRefresh() {
          this._removeVisibilityChangedCallback(),
            await this._startAutoRefresh();
        }
        async stopAutoRefresh() {
          this._removeVisibilityChangedCallback(),
            await this._stopAutoRefresh();
        }
        async _autoRefreshTokenTick() {
          this._debug("#_autoRefreshTokenTick()", "begin");
          try {
            await this._acquireLock(0, async () => {
              try {
                let e = Date.now();
                try {
                  return await this._useSession(async (r) => {
                    let {
                      data: { session: n },
                    } = r;
                    if (!n || !n.refresh_token || !n.expires_at) {
                      this._debug("#_autoRefreshTokenTick()", "no session");
                      return;
                    }
                    let s = Math.floor((1e3 * n.expires_at - e) / 3e4);
                    this._debug(
                      "#_autoRefreshTokenTick()",
                      `access token expires in ${s} ticks, a tick lasts 30000ms, refresh threshold is 3 ticks`
                    ),
                      s <= 3 && (await this._callRefreshToken(n.refresh_token));
                  });
                } catch (e) {
                  console.error(
                    "Auto refresh tick failed with error. This is likely a transient error.",
                    e
                  );
                }
              } finally {
                this._debug("#_autoRefreshTokenTick()", "end");
              }
            });
          } catch (e) {
            if (e.isAcquireTimeout || e instanceof LockAcquireTimeoutError)
              this._debug("auto refresh token tick lock not available");
            else throw e;
          }
        }
        async _handleVisibilityChange() {
          if (
            (this._debug("#_handleVisibilityChange()"),
            !helpers_isBrowser() ||
              !(null == window ? void 0 : window.addEventListener))
          )
            return this.autoRefreshToken && this.startAutoRefresh(), !1;
          try {
            (this.visibilityChangedCallback = async () =>
              await this._onVisibilityChanged(!1)),
              null == window ||
                window.addEventListener(
                  "visibilitychange",
                  this.visibilityChangedCallback
                ),
              await this._onVisibilityChanged(!0);
          } catch (e) {
            console.error("_handleVisibilityChange", e);
          }
        }
        async _onVisibilityChanged(e) {
          let r = `#_onVisibilityChanged(${e})`;
          this._debug(r, "visibilityState", document.visibilityState),
            "visible" === document.visibilityState
              ? (this.autoRefreshToken && this._startAutoRefresh(),
                e ||
                  (await this.initializePromise,
                  await this._acquireLock(-1, async () => {
                    if ("visible" !== document.visibilityState) {
                      this._debug(
                        r,
                        "acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting"
                      );
                      return;
                    }
                    await this._recoverAndRefresh();
                  })))
              : "hidden" === document.visibilityState &&
                this.autoRefreshToken &&
                this._stopAutoRefresh();
        }
        async _getUrlForProvider(e, r, n) {
          let s = [`provider=${encodeURIComponent(r)}`];
          if (
            ((null == n ? void 0 : n.redirectTo) &&
              s.push(`redirect_to=${encodeURIComponent(n.redirectTo)}`),
            (null == n ? void 0 : n.scopes) &&
              s.push(`scopes=${encodeURIComponent(n.scopes)}`),
            "pkce" === this.flowType)
          ) {
            let e = generatePKCEVerifier();
            await setItemAsync(
              this.storage,
              `${this.storageKey}-code-verifier`,
              e
            );
            let r = await generatePKCEChallenge(e),
              n = e === r ? "plain" : "s256";
            this._debug(
              "PKCE",
              "code verifier",
              `${e.substring(0, 5)}...`,
              "code challenge",
              r,
              "method",
              n
            );
            let a = new URLSearchParams({
              code_challenge: `${encodeURIComponent(r)}`,
              code_challenge_method: `${encodeURIComponent(n)}`,
            });
            s.push(a.toString());
          }
          if (null == n ? void 0 : n.queryParams) {
            let e = new URLSearchParams(n.queryParams);
            s.push(e.toString());
          }
          return (
            (null == n ? void 0 : n.skipBrowserRedirect) &&
              s.push(`skip_http_redirect=${n.skipBrowserRedirect}`),
            `${e}?${s.join("&")}`
          );
        }
        async _unenroll(e) {
          try {
            return await this._useSession(async (r) => {
              var n;
              let { data: s, error: a } = r;
              return a
                ? { data: null, error: a }
                : await _request(
                    this.fetch,
                    "DELETE",
                    `${this.url}/factors/${e.factorId}`,
                    {
                      headers: this.headers,
                      jwt:
                        null === (n = null == s ? void 0 : s.session) ||
                        void 0 === n
                          ? void 0
                          : n.access_token,
                    }
                  );
            });
          } catch (e) {
            if (isAuthError(e)) return { data: null, error: e };
            throw e;
          }
        }
        async _enroll(e) {
          try {
            return await this._useSession(async (r) => {
              var n, s;
              let { data: a, error: l } = r;
              if (l) return { data: null, error: l };
              let { data: u, error: c } = await _request(
                this.fetch,
                "POST",
                `${this.url}/factors`,
                {
                  body: {
                    friendly_name: e.friendlyName,
                    factor_type: e.factorType,
                    issuer: e.issuer,
                  },
                  headers: this.headers,
                  jwt:
                    null === (n = null == a ? void 0 : a.session) ||
                    void 0 === n
                      ? void 0
                      : n.access_token,
                }
              );
              return c
                ? { data: null, error: c }
                : ((null === (s = null == u ? void 0 : u.totp) || void 0 === s
                    ? void 0
                    : s.qr_code) &&
                    (u.totp.qr_code = `data:image/svg+xml;utf-8,${u.totp.qr_code}`),
                  { data: u, error: null });
            });
          } catch (e) {
            if (isAuthError(e)) return { data: null, error: e };
            throw e;
          }
        }
        async _verify(e) {
          return this._acquireLock(-1, async () => {
            try {
              return await this._useSession(async (r) => {
                var n;
                let { data: s, error: a } = r;
                if (a) return { data: null, error: a };
                let { data: l, error: u } = await _request(
                  this.fetch,
                  "POST",
                  `${this.url}/factors/${e.factorId}/verify`,
                  {
                    body: { code: e.code, challenge_id: e.challengeId },
                    headers: this.headers,
                    jwt:
                      null === (n = null == s ? void 0 : s.session) ||
                      void 0 === n
                        ? void 0
                        : n.access_token,
                  }
                );
                return u
                  ? { data: null, error: u }
                  : (await this._saveSession(
                      Object.assign(
                        {
                          expires_at:
                            Math.round(Date.now() / 1e3) + l.expires_in,
                        },
                        l
                      )
                    ),
                    await this._notifyAllSubscribers(
                      "MFA_CHALLENGE_VERIFIED",
                      l
                    ),
                    { data: l, error: u });
              });
            } catch (e) {
              if (isAuthError(e)) return { data: null, error: e };
              throw e;
            }
          });
        }
        async _challenge(e) {
          return this._acquireLock(-1, async () => {
            try {
              return await this._useSession(async (r) => {
                var n;
                let { data: s, error: a } = r;
                return a
                  ? { data: null, error: a }
                  : await _request(
                      this.fetch,
                      "POST",
                      `${this.url}/factors/${e.factorId}/challenge`,
                      {
                        headers: this.headers,
                        jwt:
                          null === (n = null == s ? void 0 : s.session) ||
                          void 0 === n
                            ? void 0
                            : n.access_token,
                      }
                    );
              });
            } catch (e) {
              if (isAuthError(e)) return { data: null, error: e };
              throw e;
            }
          });
        }
        async _challengeAndVerify(e) {
          let { data: r, error: n } = await this._challenge({
            factorId: e.factorId,
          });
          return n
            ? { data: null, error: n }
            : await this._verify({
                factorId: e.factorId,
                challengeId: r.id,
                code: e.code,
              });
        }
        async _listFactors() {
          let {
            data: { user: e },
            error: r,
          } = await this.getUser();
          if (r) return { data: null, error: r };
          let n = (null == e ? void 0 : e.factors) || [],
            s = n.filter(
              (e) => "totp" === e.factor_type && "verified" === e.status
            );
          return { data: { all: n, totp: s }, error: null };
        }
        async _getAuthenticatorAssuranceLevel() {
          return this._acquireLock(
            -1,
            async () =>
              await this._useSession(async (e) => {
                var r, n;
                let {
                  data: { session: s },
                  error: a,
                } = e;
                if (a) return { data: null, error: a };
                if (!s)
                  return {
                    data: {
                      currentLevel: null,
                      nextLevel: null,
                      currentAuthenticationMethods: [],
                    },
                    error: null,
                  };
                let l = this._decodeJWT(s.access_token),
                  u = null;
                l.aal && (u = l.aal);
                let c = u,
                  h =
                    null !==
                      (n =
                        null === (r = s.user.factors) || void 0 === r
                          ? void 0
                          : r.filter((e) => "verified" === e.status)) &&
                    void 0 !== n
                      ? n
                      : [];
                h.length > 0 && (c = "aal2");
                let d = l.amr || [];
                return {
                  data: {
                    currentLevel: u,
                    nextLevel: c,
                    currentAuthenticationMethods: d,
                  },
                  error: null,
                };
              })
          );
        }
      };
      GoTrueClient_GoTrueClient.nextInstanceID = 0;
      let SupabaseAuthClient = class SupabaseAuthClient extends GoTrueClient_GoTrueClient {
        constructor(e) {
          super(e);
        }
      };
      let SupabaseClient = class SupabaseClient {
        constructor(e, r, n) {
          var s, a, l, u, c, h, d, f;
          if (((this.supabaseUrl = e), (this.supabaseKey = r), !e))
            throw Error("supabaseUrl is required.");
          if (!r) throw Error("supabaseKey is required.");
          let p = e.replace(/\/$/, "");
          (this.realtimeUrl = `${p}/realtime/v1`.replace(/^http/i, "ws")),
            (this.authUrl = `${p}/auth/v1`),
            (this.storageUrl = `${p}/storage/v1`),
            (this.functionsUrl = `${p}/functions/v1`);
          let m = `sb-${
              new URL(this.authUrl).hostname.split(".")[0]
            }-auth-token`,
            y = {
              db: V,
              realtime: M,
              auth: Object.assign(Object.assign({}, L), { storageKey: m }),
              global: I,
            },
            g = (function (e, r) {
              let { db: n, auth: s, realtime: a, global: l } = e,
                { db: u, auth: c, realtime: h, global: d } = r;
              return {
                db: Object.assign(Object.assign({}, u), n),
                auth: Object.assign(Object.assign({}, c), s),
                realtime: Object.assign(Object.assign({}, h), a),
                global: Object.assign(Object.assign({}, d), l),
              };
            })(null != n ? n : {}, y);
          (this.storageKey =
            null !==
              (a =
                null === (s = g.auth) || void 0 === s
                  ? void 0
                  : s.storageKey) && void 0 !== a
              ? a
              : ""),
            (this.headers =
              null !==
                (u =
                  null === (l = g.global) || void 0 === l
                    ? void 0
                    : l.headers) && void 0 !== u
                ? u
                : {}),
            (this.auth = this._initSupabaseAuthClient(
              null !== (c = g.auth) && void 0 !== c ? c : {},
              this.headers,
              null === (h = g.global) || void 0 === h ? void 0 : h.fetch
            )),
            (this.fetch = fetchWithAuth(
              r,
              this._getAccessToken.bind(this),
              null === (d = g.global) || void 0 === d ? void 0 : d.fetch
            )),
            (this.realtime = this._initRealtimeClient(
              Object.assign({ headers: this.headers }, g.realtime)
            )),
            (this.rest = new PostgrestClient(`${p}/rest/v1`, {
              headers: this.headers,
              schema: null === (f = g.db) || void 0 === f ? void 0 : f.schema,
              fetch: this.fetch,
            })),
            this._listenForAuthEvents();
        }
        get functions() {
          return new FunctionsClient(this.functionsUrl, {
            headers: this.headers,
            customFetch: this.fetch,
          });
        }
        get storage() {
          return new StorageClient(this.storageUrl, this.headers, this.fetch);
        }
        from(e) {
          return this.rest.from(e);
        }
        schema(e) {
          return this.rest.schema(e);
        }
        rpc(e, r = {}, n = {}) {
          return this.rest.rpc(e, r, n);
        }
        channel(e, r = { config: {} }) {
          return this.realtime.channel(e, r);
        }
        getChannels() {
          return this.realtime.getChannels();
        }
        removeChannel(e) {
          return this.realtime.removeChannel(e);
        }
        removeAllChannels() {
          return this.realtime.removeAllChannels();
        }
        _getAccessToken() {
          var e, r, n, s, a, l;
          return (
            (n = this),
            (s = void 0),
            (a = void 0),
            (l = function* () {
              let { data: n } = yield this.auth.getSession();
              return null !==
                (r =
                  null === (e = n.session) || void 0 === e
                    ? void 0
                    : e.access_token) && void 0 !== r
                ? r
                : null;
            }),
            new (a || (a = Promise))(function (e, r) {
              function fulfilled(e) {
                try {
                  step(l.next(e));
                } catch (e) {
                  r(e);
                }
              }
              function rejected(e) {
                try {
                  step(l.throw(e));
                } catch (e) {
                  r(e);
                }
              }
              function step(r) {
                var n;
                r.done
                  ? e(r.value)
                  : ((n = r.value) instanceof a
                      ? n
                      : new a(function (e) {
                          e(n);
                        })
                    ).then(fulfilled, rejected);
              }
              step((l = l.apply(n, s || [])).next());
            })
          );
        }
        _initSupabaseAuthClient(
          {
            autoRefreshToken: e,
            persistSession: r,
            detectSessionInUrl: n,
            storage: s,
            storageKey: a,
            flowType: l,
            debug: u,
          },
          c,
          h
        ) {
          let d = {
            Authorization: `Bearer ${this.supabaseKey}`,
            apikey: `${this.supabaseKey}`,
          };
          return new SupabaseAuthClient({
            url: this.authUrl,
            headers: Object.assign(Object.assign({}, d), c),
            storageKey: a,
            autoRefreshToken: e,
            persistSession: r,
            detectSessionInUrl: n,
            storage: s,
            flowType: l,
            debug: u,
            fetch: h,
          });
        }
        _initRealtimeClient(e) {
          return new RealtimeClient(
            this.realtimeUrl,
            Object.assign(Object.assign({}, e), {
              params: Object.assign(
                { apikey: this.supabaseKey },
                null == e ? void 0 : e.params
              ),
            })
          );
        }
        _listenForAuthEvents() {
          return this.auth.onAuthStateChange((e, r) => {
            this._handleTokenChanged(
              e,
              "CLIENT",
              null == r ? void 0 : r.access_token
            );
          });
        }
        _handleTokenChanged(e, r, n) {
          ("TOKEN_REFRESHED" === e || "SIGNED_IN" === e) &&
          this.changedAccessToken !== n
            ? (this.realtime.setAuth(null != n ? n : null),
              (this.changedAccessToken = n))
            : "SIGNED_OUT" === e &&
              (this.realtime.setAuth(this.supabaseKey),
              "STORAGE" == r && this.auth.signOut(),
              (this.changedAccessToken = void 0));
        }
      };
      let createClient = (e, r, n) => new SupabaseClient(e, r, n),
        getClient = () => {
          let e = createClient(
            "https://zlhymvoxmjepvuyswspx.supabase.co",
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpsaHltdm94bWplcHZ1eXN3c3B4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDMzNDE2NTksImV4cCI6MjAxODkxNzY1OX0.XGVe7qVkbJd1g-Bp2y5VlrnGhesMfqEyoGZ-pzMoh3E"
          );
          return e;
        },
        insertEmail = async (e) => {
          let r = getClient(),
            { data: n, error: s } = await r
              .from("Email_subscription")
              .select("email")
              .eq("email", e);
          return (console.log("error", s), n.length > 0)
            ? "already exists"
            : (await r.from("Email_subscription").insert({ email: e }),
              "success");
        };
    },
    97498: function (e, r) {
      "use strict";
      var n, s;
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (function (e, r) {
          for (var n in r)
            Object.defineProperty(e, n, { enumerable: !0, get: r[n] });
        })(r, {
          PrefetchKind: function () {
            return n;
          },
          ACTION_REFRESH: function () {
            return a;
          },
          ACTION_NAVIGATE: function () {
            return l;
          },
          ACTION_RESTORE: function () {
            return u;
          },
          ACTION_SERVER_PATCH: function () {
            return c;
          },
          ACTION_PREFETCH: function () {
            return h;
          },
          ACTION_FAST_REFRESH: function () {
            return d;
          },
          ACTION_SERVER_ACTION: function () {
            return f;
          },
        });
      let a = "refresh",
        l = "navigate",
        u = "restore",
        c = "server-patch",
        h = "prefetch",
        d = "fast-refresh",
        f = "server-action";
      ((s = n || (n = {})).AUTO = "auto"),
        (s.FULL = "full"),
        (s.TEMPORARY = "temporary"),
        ("function" == typeof r.default ||
          ("object" == typeof r.default && null !== r.default)) &&
          void 0 === r.default.__esModule &&
          (Object.defineProperty(r.default, "__esModule", { value: !0 }),
          Object.assign(r.default, r),
          (e.exports = r.default));
    },
    10030: function (e, r, n) {
      "use strict";
      function getDomainLocale(e, r, n, s) {
        return !1;
      }
      Object.defineProperty(r, "__esModule", { value: !0 }),
        Object.defineProperty(r, "getDomainLocale", {
          enumerable: !0,
          get: function () {
            return getDomainLocale;
          },
        }),
        n(22866),
        ("function" == typeof r.default ||
          ("object" == typeof r.default && null !== r.default)) &&
          void 0 === r.default.__esModule &&
          (Object.defineProperty(r.default, "__esModule", { value: !0 }),
          Object.assign(r.default, r),
          (e.exports = r.default));
    },
    23271: function (e, r, n) {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 }),
        Object.defineProperty(r, "Image", {
          enumerable: !0,
          get: function () {
            return v;
          },
        });
      let s = n(38754),
        a = n(61757),
        l = a._(n(67294)),
        u = s._(n(73935)),
        c = s._(n(79201)),
        h = n(53914),
        d = n(85494),
        f = n(30869);
      n(81905);
      let p = n(11823),
        m = s._(n(74545)),
        y = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "/_next/image",
          loader: "default",
          dangerouslyAllowSVG: !1,
          unoptimized: !1,
        };
      function handleLoading(e, r, n, s, a, l) {
        let u = null == e ? void 0 : e.src;
        if (!e || e["data-loaded-src"] === u) return;
        e["data-loaded-src"] = u;
        let c = "decode" in e ? e.decode() : Promise.resolve();
        c.catch(() => {}).then(() => {
          if (e.parentElement && e.isConnected) {
            if (("empty" !== r && a(!0), null == n ? void 0 : n.current)) {
              let r = new Event("load");
              Object.defineProperty(r, "target", { writable: !1, value: e });
              let s = !1,
                a = !1;
              n.current({
                ...r,
                nativeEvent: r,
                currentTarget: e,
                target: e,
                isDefaultPrevented: () => s,
                isPropagationStopped: () => a,
                persist: () => {},
                preventDefault: () => {
                  (s = !0), r.preventDefault();
                },
                stopPropagation: () => {
                  (a = !0), r.stopPropagation();
                },
              });
            }
            (null == s ? void 0 : s.current) && s.current(e);
          }
        });
      }
      function getDynamicProps(e) {
        let [r, n] = l.version.split("."),
          s = parseInt(r, 10),
          a = parseInt(n, 10);
        return s > 18 || (18 === s && a >= 3)
          ? { fetchPriority: e }
          : { fetchpriority: e };
      }
      let g = (0, l.forwardRef)((e, r) => {
        let {
          src: n,
          srcSet: s,
          sizes: a,
          height: u,
          width: c,
          decoding: h,
          className: d,
          style: f,
          fetchPriority: p,
          placeholder: m,
          loading: y,
          unoptimized: g,
          fill: v,
          onLoadRef: b,
          onLoadingCompleteRef: w,
          setBlurComplete: x,
          setShowAltText: _,
          onLoad: S,
          onError: A,
          ...T
        } = e;
        return l.default.createElement("img", {
          ...T,
          ...getDynamicProps(p),
          loading: y,
          width: c,
          height: u,
          decoding: h,
          "data-nimg": v ? "fill" : "1",
          className: d,
          style: f,
          sizes: a,
          srcSet: s,
          src: n,
          ref: (0, l.useCallback)(
            (e) => {
              r &&
                ("function" == typeof r
                  ? r(e)
                  : "object" == typeof r && (r.current = e)),
                e &&
                  (A && (e.src = e.src),
                  e.complete && handleLoading(e, m, b, w, x, g));
            },
            [n, m, b, w, x, A, g, r]
          ),
          onLoad: (e) => {
            let r = e.currentTarget;
            handleLoading(r, m, b, w, x, g);
          },
          onError: (e) => {
            _(!0), "empty" !== m && x(!0), A && A(e);
          },
        });
      });
      function ImagePreload(e) {
        let { isAppRouter: r, imgAttributes: n } = e,
          s = {
            as: "image",
            imageSrcSet: n.srcSet,
            imageSizes: n.sizes,
            crossOrigin: n.crossOrigin,
            referrerPolicy: n.referrerPolicy,
            ...getDynamicProps(n.fetchPriority),
          };
        return r && u.default.preload
          ? (u.default.preload(n.src, s), null)
          : l.default.createElement(
              c.default,
              null,
              l.default.createElement("link", {
                key: "__nimg-" + n.src + n.srcSet + n.sizes,
                rel: "preload",
                href: n.srcSet ? void 0 : n.src,
                ...s,
              })
            );
      }
      let v = (0, l.forwardRef)((e, r) => {
        let n = (0, l.useContext)(p.RouterContext),
          s = (0, l.useContext)(f.ImageConfigContext),
          a = (0, l.useMemo)(() => {
            let e = y || s || d.imageConfigDefault,
              r = [...e.deviceSizes, ...e.imageSizes].sort((e, r) => e - r),
              n = e.deviceSizes.sort((e, r) => e - r);
            return { ...e, allSizes: r, deviceSizes: n };
          }, [s]),
          { onLoad: u, onLoadingComplete: c } = e,
          v = (0, l.useRef)(u);
        (0, l.useEffect)(() => {
          v.current = u;
        }, [u]);
        let b = (0, l.useRef)(c);
        (0, l.useEffect)(() => {
          b.current = c;
        }, [c]);
        let [w, x] = (0, l.useState)(!1),
          [_, S] = (0, l.useState)(!1),
          { props: A, meta: T } = (0, h.getImgProps)(e, {
            defaultLoader: m.default,
            imgConf: a,
            blurComplete: w,
            showAltText: _,
          });
        return l.default.createElement(
          l.default.Fragment,
          null,
          l.default.createElement(g, {
            ...A,
            unoptimized: T.unoptimized,
            placeholder: T.placeholder,
            fill: T.fill,
            onLoadRef: v,
            onLoadingCompleteRef: b,
            setBlurComplete: x,
            setShowAltText: S,
            ref: r,
          }),
          T.priority
            ? l.default.createElement(ImagePreload, {
                isAppRouter: !n,
                imgAttributes: A,
              })
            : null
        );
      });
      ("function" == typeof r.default ||
        ("object" == typeof r.default && null !== r.default)) &&
        void 0 === r.default.__esModule &&
        (Object.defineProperty(r.default, "__esModule", { value: !0 }),
        Object.assign(r.default, r),
        (e.exports = r.default));
    },
    65170: function (e, r, n) {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 }),
        Object.defineProperty(r, "default", {
          enumerable: !0,
          get: function () {
            return x;
          },
        });
      let s = n(38754),
        a = s._(n(67294)),
        l = n(74450),
        u = n(92227),
        c = n(64364),
        h = n(10109),
        d = n(73607),
        f = n(11823),
        p = n(89031),
        m = n(40920),
        y = n(10030),
        g = n(77192),
        v = n(97498),
        b = new Set();
      function prefetch(e, r, n, s, a, l) {
        if (!l && !(0, u.isLocalURL)(r)) return;
        if (!s.bypassPrefetchedCheck) {
          let a =
              void 0 !== s.locale
                ? s.locale
                : "locale" in e
                ? e.locale
                : void 0,
            l = r + "%" + n + "%" + a;
          if (b.has(l)) return;
          b.add(l);
        }
        let c = l ? e.prefetch(r, a) : e.prefetch(r, n, s);
        Promise.resolve(c).catch((e) => {});
      }
      function formatStringOrUrl(e) {
        return "string" == typeof e ? e : (0, c.formatUrl)(e);
      }
      let w = a.default.forwardRef(function (e, r) {
          let n, s;
          let {
            href: c,
            as: b,
            children: w,
            prefetch: x = null,
            passHref: _,
            replace: S,
            shallow: A,
            scroll: T,
            locale: O,
            onClick: P,
            onMouseEnter: j,
            onTouchStart: k,
            legacyBehavior: C = !1,
            ...R
          } = e;
          (n = w),
            C &&
              ("string" == typeof n || "number" == typeof n) &&
              (n = a.default.createElement("a", null, n));
          let D = a.default.useContext(f.RouterContext),
            B = a.default.useContext(p.AppRouterContext),
            I = null != D ? D : B,
            V = !D,
            L = !1 !== x,
            M = null === x ? v.PrefetchKind.AUTO : v.PrefetchKind.FULL,
            { href: N, as: U } = a.default.useMemo(() => {
              if (!D) {
                let e = formatStringOrUrl(c);
                return { href: e, as: b ? formatStringOrUrl(b) : e };
              }
              let [e, r] = (0, l.resolveHref)(D, c, !0);
              return { href: e, as: b ? (0, l.resolveHref)(D, b) : r || e };
            }, [D, c, b]),
            $ = a.default.useRef(N),
            q = a.default.useRef(U);
          C && (s = a.default.Children.only(n));
          let z = C ? s && "object" == typeof s && s.ref : r,
            [H, W, K] = (0, m.useIntersection)({ rootMargin: "200px" }),
            G = a.default.useCallback(
              (e) => {
                (q.current !== U || $.current !== N) &&
                  (K(), (q.current = U), ($.current = N)),
                  H(e),
                  z &&
                    ("function" == typeof z
                      ? z(e)
                      : "object" == typeof z && (z.current = e));
              },
              [U, z, N, K, H]
            );
          a.default.useEffect(() => {
            I && W && L && prefetch(I, N, U, { locale: O }, { kind: M }, V);
          }, [U, N, W, O, L, null == D ? void 0 : D.locale, I, V, M]);
          let J = {
            ref: G,
            onClick(e) {
              C || "function" != typeof P || P(e),
                C &&
                  s.props &&
                  "function" == typeof s.props.onClick &&
                  s.props.onClick(e),
                I &&
                  !e.defaultPrevented &&
                  (function (e, r, n, s, l, c, h, d, f, p) {
                    let { nodeName: m } = e.currentTarget,
                      y = "A" === m.toUpperCase();
                    if (
                      y &&
                      ((function (e) {
                        let r = e.currentTarget,
                          n = r.getAttribute("target");
                        return (
                          (n && "_self" !== n) ||
                          e.metaKey ||
                          e.ctrlKey ||
                          e.shiftKey ||
                          e.altKey ||
                          (e.nativeEvent && 2 === e.nativeEvent.which)
                        );
                      })(e) ||
                        (!f && !(0, u.isLocalURL)(n)))
                    )
                      return;
                    e.preventDefault();
                    let navigate = () => {
                      let e = null == h || h;
                      "beforePopState" in r
                        ? r[l ? "replace" : "push"](n, s, {
                            shallow: c,
                            locale: d,
                            scroll: e,
                          })
                        : r[l ? "replace" : "push"](s || n, {
                            forceOptimisticNavigation: !p,
                            scroll: e,
                          });
                    };
                    f ? a.default.startTransition(navigate) : navigate();
                  })(e, I, N, U, S, A, T, O, V, L);
            },
            onMouseEnter(e) {
              C || "function" != typeof j || j(e),
                C &&
                  s.props &&
                  "function" == typeof s.props.onMouseEnter &&
                  s.props.onMouseEnter(e),
                I &&
                  (L || !V) &&
                  prefetch(
                    I,
                    N,
                    U,
                    { locale: O, priority: !0, bypassPrefetchedCheck: !0 },
                    { kind: M },
                    V
                  );
            },
            onTouchStart(e) {
              C || "function" != typeof k || k(e),
                C &&
                  s.props &&
                  "function" == typeof s.props.onTouchStart &&
                  s.props.onTouchStart(e),
                I &&
                  (L || !V) &&
                  prefetch(
                    I,
                    N,
                    U,
                    { locale: O, priority: !0, bypassPrefetchedCheck: !0 },
                    { kind: M },
                    V
                  );
            },
          };
          if ((0, h.isAbsoluteUrl)(U)) J.href = U;
          else if (!C || _ || ("a" === s.type && !("href" in s.props))) {
            let e = void 0 !== O ? O : null == D ? void 0 : D.locale,
              r =
                (null == D ? void 0 : D.isLocaleDomain) &&
                (0, y.getDomainLocale)(
                  U,
                  e,
                  null == D ? void 0 : D.locales,
                  null == D ? void 0 : D.domainLocales
                );
            J.href =
              r ||
              (0, g.addBasePath)(
                (0, d.addLocale)(U, e, null == D ? void 0 : D.defaultLocale)
              );
          }
          return C
            ? a.default.cloneElement(s, J)
            : a.default.createElement("a", { ...R, ...J }, n);
        }),
        x = w;
      ("function" == typeof r.default ||
        ("object" == typeof r.default && null !== r.default)) &&
        void 0 === r.default.__esModule &&
        (Object.defineProperty(r.default, "__esModule", { value: !0 }),
        Object.assign(r.default, r),
        (e.exports = r.default));
    },
    40920: function (e, r, n) {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 }),
        Object.defineProperty(r, "useIntersection", {
          enumerable: !0,
          get: function () {
            return useIntersection;
          },
        });
      let s = n(67294),
        a = n(63436),
        l = "function" == typeof IntersectionObserver,
        u = new Map(),
        c = [];
      function useIntersection(e) {
        let { rootRef: r, rootMargin: n, disabled: h } = e,
          d = h || !l,
          [f, p] = (0, s.useState)(!1),
          m = (0, s.useRef)(null),
          y = (0, s.useCallback)((e) => {
            m.current = e;
          }, []);
        (0, s.useEffect)(() => {
          if (l) {
            if (d || f) return;
            let e = m.current;
            if (e && e.tagName) {
              let s = (function (e, r, n) {
                let {
                  id: s,
                  observer: a,
                  elements: l,
                } = (function (e) {
                  let r;
                  let n = { root: e.root || null, margin: e.rootMargin || "" },
                    s = c.find(
                      (e) => e.root === n.root && e.margin === n.margin
                    );
                  if (s && (r = u.get(s))) return r;
                  let a = new Map(),
                    l = new IntersectionObserver((e) => {
                      e.forEach((e) => {
                        let r = a.get(e.target),
                          n = e.isIntersecting || e.intersectionRatio > 0;
                        r && n && r(n);
                      });
                    }, e);
                  return (
                    (r = { id: n, observer: l, elements: a }),
                    c.push(n),
                    u.set(n, r),
                    r
                  );
                })(n);
                return (
                  l.set(e, r),
                  a.observe(e),
                  function () {
                    if ((l.delete(e), a.unobserve(e), 0 === l.size)) {
                      a.disconnect(), u.delete(s);
                      let e = c.findIndex(
                        (e) => e.root === s.root && e.margin === s.margin
                      );
                      e > -1 && c.splice(e, 1);
                    }
                  }
                );
              })(e, (e) => e && p(e), {
                root: null == r ? void 0 : r.current,
                rootMargin: n,
              });
              return s;
            }
          } else if (!f) {
            let e = (0, a.requestIdleCallback)(() => p(!0));
            return () => (0, a.cancelIdleCallback)(e);
          }
        }, [d, n, r, f, m.current]);
        let g = (0, s.useCallback)(() => {
          p(!1);
        }, []);
        return [y, f, g];
      }
      ("function" == typeof r.default ||
        ("object" == typeof r.default && null !== r.default)) &&
        void 0 === r.default.__esModule &&
        (Object.defineProperty(r.default, "__esModule", { value: !0 }),
        Object.assign(r.default, r),
        (e.exports = r.default));
    },
    53914: function (e, r, n) {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 }),
        Object.defineProperty(r, "getImgProps", {
          enumerable: !0,
          get: function () {
            return getImgProps;
          },
        }),
        n(81905);
      let s = n(32393),
        a = n(85494);
      function isStaticRequire(e) {
        return void 0 !== e.default;
      }
      function getInt(e) {
        return void 0 === e
          ? e
          : "number" == typeof e
          ? Number.isFinite(e)
            ? e
            : NaN
          : "string" == typeof e && /^[0-9]+$/.test(e)
          ? parseInt(e, 10)
          : NaN;
      }
      function getImgProps(e, r) {
        var n;
        let l,
          u,
          c,
          {
            src: h,
            sizes: d,
            unoptimized: f = !1,
            priority: p = !1,
            loading: m,
            className: y,
            quality: g,
            width: v,
            height: b,
            fill: w = !1,
            style: x,
            onLoad: _,
            onLoadingComplete: S,
            placeholder: A = "empty",
            blurDataURL: T,
            fetchPriority: O,
            layout: P,
            objectFit: j,
            objectPosition: k,
            lazyBoundary: C,
            lazyRoot: R,
            ...D
          } = e,
          { imgConf: B, showAltText: I, blurComplete: V, defaultLoader: L } = r,
          M = B || a.imageConfigDefault;
        if ("allSizes" in M) l = M;
        else {
          let e = [...M.deviceSizes, ...M.imageSizes].sort((e, r) => e - r),
            r = M.deviceSizes.sort((e, r) => e - r);
          l = { ...M, allSizes: e, deviceSizes: r };
        }
        let N = D.loader || L;
        delete D.loader, delete D.srcSet;
        let U = "__next_img_default" in N;
        if (U) {
          if ("custom" === l.loader)
            throw Error(
              'Image with src "' +
                h +
                '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader'
            );
        } else {
          let e = N;
          N = (r) => {
            let { config: n, ...s } = r;
            return e(s);
          };
        }
        if (P) {
          "fill" === P && (w = !0);
          let e = {
            intrinsic: { maxWidth: "100%", height: "auto" },
            responsive: { width: "100%", height: "auto" },
          }[P];
          e && (x = { ...x, ...e });
          let r = { responsive: "100vw", fill: "100vw" }[P];
          r && !d && (d = r);
        }
        let $ = "",
          q = getInt(v),
          z = getInt(b);
        if (
          "object" == typeof (n = h) &&
          (isStaticRequire(n) || void 0 !== n.src)
        ) {
          let e = isStaticRequire(h) ? h.default : h;
          if (!e.src)
            throw Error(
              "An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " +
                JSON.stringify(e)
            );
          if (!e.height || !e.width)
            throw Error(
              "An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " +
                JSON.stringify(e)
            );
          if (
            ((u = e.blurWidth),
            (c = e.blurHeight),
            (T = T || e.blurDataURL),
            ($ = e.src),
            !w)
          ) {
            if (q || z) {
              if (q && !z) {
                let r = q / e.width;
                z = Math.round(e.height * r);
              } else if (!q && z) {
                let r = z / e.height;
                q = Math.round(e.width * r);
              }
            } else (q = e.width), (z = e.height);
          }
        }
        let H = !p && ("lazy" === m || void 0 === m);
        (!(h = "string" == typeof h ? h : $) ||
          h.startsWith("data:") ||
          h.startsWith("blob:")) &&
          ((f = !0), (H = !1)),
          l.unoptimized && (f = !0),
          U && h.endsWith(".svg") && !l.dangerouslyAllowSVG && (f = !0),
          p && (O = "high");
        let W = getInt(g),
          K = Object.assign(
            w
              ? {
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                  objectFit: j,
                  objectPosition: k,
                }
              : {},
            I ? {} : { color: "transparent" },
            x
          ),
          G =
            V || "empty" === A
              ? null
              : "blur" === A
              ? 'url("data:image/svg+xml;charset=utf-8,' +
                (0, s.getImageBlurSvg)({
                  widthInt: q,
                  heightInt: z,
                  blurWidth: u,
                  blurHeight: c,
                  blurDataURL: T || "",
                  objectFit: K.objectFit,
                }) +
                '")'
              : 'url("' + A + '")',
          J = G
            ? {
                backgroundSize: K.objectFit || "cover",
                backgroundPosition: K.objectPosition || "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundImage: G,
              }
            : {},
          Z = (function (e) {
            let {
              config: r,
              src: n,
              unoptimized: s,
              width: a,
              quality: l,
              sizes: u,
              loader: c,
            } = e;
            if (s) return { src: n, srcSet: void 0, sizes: void 0 };
            let { widths: h, kind: d } = (function (e, r, n) {
                let { deviceSizes: s, allSizes: a } = e;
                if (n) {
                  let e = /(^|\s)(1?\d?\d)vw/g,
                    r = [];
                  for (let s; (s = e.exec(n)); s) r.push(parseInt(s[2]));
                  if (r.length) {
                    let e = 0.01 * Math.min(...r);
                    return {
                      widths: a.filter((r) => r >= s[0] * e),
                      kind: "w",
                    };
                  }
                  return { widths: a, kind: "w" };
                }
                if ("number" != typeof r) return { widths: s, kind: "w" };
                let l = [
                  ...new Set(
                    [r, 2 * r].map(
                      (e) => a.find((r) => r >= e) || a[a.length - 1]
                    )
                  ),
                ];
                return { widths: l, kind: "x" };
              })(r, a, u),
              f = h.length - 1;
            return {
              sizes: u || "w" !== d ? u : "100vw",
              srcSet: h
                .map(
                  (e, s) =>
                    c({ config: r, src: n, quality: l, width: e }) +
                    " " +
                    ("w" === d ? e : s + 1) +
                    d
                )
                .join(", "),
              src: c({ config: r, src: n, quality: l, width: h[f] }),
            };
          })({
            config: l,
            src: h,
            unoptimized: f,
            width: q,
            quality: W,
            sizes: d,
            loader: N,
          }),
          X = {
            ...D,
            loading: H ? "lazy" : m,
            fetchPriority: O,
            width: q,
            height: z,
            decoding: "async",
            className: y,
            style: { ...K, ...J },
            sizes: Z.sizes,
            srcSet: Z.srcSet,
            src: Z.src,
          },
          Y = { unoptimized: f, priority: p, placeholder: A, fill: w };
        return { props: X, meta: Y };
      }
    },
    32393: function (e, r) {
      "use strict";
      function getImageBlurSvg(e) {
        let {
            widthInt: r,
            heightInt: n,
            blurWidth: s,
            blurHeight: a,
            blurDataURL: l,
            objectFit: u,
          } = e,
          c = s ? 40 * s : r,
          h = a ? 40 * a : n,
          d = c && h ? "viewBox='0 0 " + c + " " + h + "'" : "";
        return (
          "%3Csvg xmlns='http://www.w3.org/2000/svg' " +
          d +
          "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" +
          (d
            ? "none"
            : "contain" === u
            ? "xMidYMid"
            : "cover" === u
            ? "xMidYMid slice"
            : "none") +
          "' style='filter: url(%23b);' href='" +
          l +
          "'/%3E%3C/svg%3E"
        );
      }
      Object.defineProperty(r, "__esModule", { value: !0 }),
        Object.defineProperty(r, "getImageBlurSvg", {
          enumerable: !0,
          get: function () {
            return getImageBlurSvg;
          },
        });
    },
    645: function (e, r, n) {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (function (e, r) {
          for (var n in r)
            Object.defineProperty(e, n, { enumerable: !0, get: r[n] });
        })(r, {
          unstable_getImgProps: function () {
            return unstable_getImgProps;
          },
          default: function () {
            return h;
          },
        });
      let s = n(38754),
        a = n(53914),
        l = n(81905),
        u = n(23271),
        c = s._(n(74545)),
        unstable_getImgProps = (e) => {
          (0, l.warnOnce)(
            "Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk."
          );
          let { props: r } = (0, a.getImgProps)(e, {
            defaultLoader: c.default,
            imgConf: {
              deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
              imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
              path: "/_next/image",
              loader: "default",
              dangerouslyAllowSVG: !1,
              unoptimized: !1,
            },
          });
          for (let [e, n] of Object.entries(r)) void 0 === n && delete r[e];
          return { props: r };
        },
        h = u.Image;
    },
    74545: function (e, r) {
      "use strict";
      function defaultLoader(e) {
        let { config: r, src: n, width: s, quality: a } = e;
        return (
          r.path +
          "?url=" +
          encodeURIComponent(n) +
          "&w=" +
          s +
          "&q=" +
          (a || 75)
        );
      }
      Object.defineProperty(r, "__esModule", { value: !0 }),
        Object.defineProperty(r, "default", {
          enumerable: !0,
          get: function () {
            return n;
          },
        }),
        (defaultLoader.__next_img_default = !0);
      let n = defaultLoader;
    },
    60358: function (e, r, n) {
      "use strict";
      n.r(r),
        n.d(r, {
          default: function () {
            return _app;
          },
        });
      var s,
        a,
        l,
        u = {};
      n.r(u),
        n.d(u, {
          hasBrowserEnv: function () {
            return ed;
          },
          hasStandardBrowserEnv: function () {
            return ef;
          },
          hasStandardBrowserWebWorkerEnv: function () {
            return ep;
          },
        });
      var c = {};
      n.r(c),
        n.d(c, {
          wrapSpace: function () {
            return wrapSpace;
          },
        });
      var h = {};
      n.r(h),
        n.d(h, {
          wrapEntry: function () {
            return wrapEntry;
          },
          wrapEntryCollection: function () {
            return wrapEntryCollection;
          },
        });
      var d = {};
      n.r(d),
        n.d(d, {
          wrapAsset: function () {
            return wrapAsset;
          },
          wrapAssetCollection: function () {
            return wrapAssetCollection;
          },
        });
      var f = {};
      n.r(f),
        n.d(f, {
          wrapAssetKey: function () {
            return wrapAssetKey;
          },
        });
      var p = {};
      n.r(p),
        n.d(p, {
          wrapContentType: function () {
            return wrapContentType;
          },
          wrapContentTypeCollection: function () {
            return wrapContentTypeCollection;
          },
        });
      var m = {};
      n.r(m),
        n.d(m, {
          wrapLocale: function () {
            return wrapLocale;
          },
          wrapLocaleCollection: function () {
            return wrapLocaleCollection;
          },
        });
      var y = {};
      n.r(y),
        n.d(y, {
          wrapTag: function () {
            return wrapTag;
          },
          wrapTagCollection: function () {
            return wrapTagCollection;
          },
        });
      var g = n(85893);
      n(70415), n(89847), n(64202), n(3335);
      var v = n(67294),
        b = n(11163),
        w = n.n(b),
        x = n(25675),
        _ = n.n(x),
        S = n(41664),
        A = n.n(S),
        T = n(51526),
        O = n(38940);
      let P = (0, v.createContext)({ isDarkTheme: !1, toggleTheme: () => {} });
      function ThemeProvider(e) {
        let [r, n] = (0, v.useState)(!1),
          toggleTheme = () => {
            let e = document.querySelector(".meshDojo");
            e.setAttribute("data-theme", r ? "light" : "dark"),
              window.localStorage.setItem("isDark", String(!r)),
              (document.documentElement.style.colorScheme = r
                ? "light"
                : "dark"),
              n(!r);
          };
        return (
          (0, v.useEffect)(() => {
            let e = window.localStorage.getItem("isDark");
            e && !0 === JSON.parse(e) && toggleTheme();
          }, []),
          (0, g.jsx)(P.Provider, {
            value: { isDarkTheme: r, toggleTheme },
            children: e.children,
          })
        );
      }
      let j = {
          initial: { opacity: 0 },
          enter: {
            opacity: 0.9,
            transition: { duration: 0.2, ease: "easeOut" },
          },
          exit: { opacity: 0, transition: { duration: 0.2, ease: "easeOut" } },
        },
        k = {
          initial: { opacity: 0, scale: 0.8 },
          enter: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.2, ease: "easeOut" },
          },
          exit: {
            opacity: 0,
            scale: 0.8,
            transition: { duration: 0.2, ease: "easeOut" },
          },
        };
      function Main() {
        let [e, r] = (0, v.useState)(!1),
          [n, s] = (0, v.useState)(0),
          { isDarkTheme: a, toggleTheme: l } = (0, v.useContext)(P);
        (0, v.useEffect)(() => {
          e && r(!1),
            s(window.innerWidth),
            window.addEventListener("resize", () => {
              s(window.innerWidth);
            });
        }, [a]),
          w().events.on("routeChangeStart", () => {
            r(!1);
          });
        let manageThemeSwitch = () => {
          e
            ? (r(!1),
              setTimeout(() => {
                l();
              }, 200))
            : l();
        };
        return (0, g.jsxs)(g.Fragment, {
          children: [
            (0, g.jsx)("div", {
              className: "header",
              children: (0, g.jsxs)("div", {
                className: "headerContainer",
                children: [
                  (0, g.jsx)(A(), {
                    href: "/",
                    scroll: !1,
                    children: (0, g.jsx)("div", {
                      className: "logo",
                      children: (0, g.jsx)(_(), {
                        src: "/medias/images/mesh_dojo_gradient.png",
                        layout: "fill",
                        objectFit: "contain",
                        priority: !0,
                        sizes: 100,
                      }),
                    }),
                  }),
                  (0, g.jsxs)("div", {
                    className: "nav",
                    children: [
                      (0, g.jsxs)("div", {
                        onClick: () => {
                          r(!e);
                        },
                        className: "el",
                        children: [
                          (0, g.jsx)("svg", {
                            className: "icon",
                            xmlns: "http://www.w3.org/2000/svg",
                            height: "48",
                            viewBox: "0 96 960 960",
                            width: "28",
                            children: (0, g.jsx)("path", {
                              d: "M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z",
                            }),
                          }),
                          "                    ",
                        ],
                      }),
                      (0, g.jsx)(T.M, {
                        mode: "wait",
                        children:
                          e &&
                          (0, g.jsxs)(O.E.div, {
                            variants: k,
                            initial: "initial",
                            animate: "enter",
                            exit: "exit",
                            className: "menu",
                            children: [
                              (0, g.jsx)("div", {
                                className: "title",
                                children: (0, g.jsx)("p", {
                                  children: "Actions",
                                }),
                              }),
                              (0, g.jsxs)("div", {
                                onClick: () => {
                                  manageThemeSwitch();
                                },
                                className: "menuEl",
                                children: [
                                  a
                                    ? (0, g.jsx)("svg", {
                                        className: "icon",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "15.9",
                                        height: "44",
                                        viewBox: "0 0 44 44",
                                        children: (0, g.jsx)("path", {
                                          d: "M20.5,7.5V0h3V7.5Zm12.8,5.3-2.1-2.1,5.3-5.3,2.1,2.1Zm3.2,10.7v-3H44v3ZM20.5,44V36.5h3V44ZM10.7,12.8,5.4,7.5,7.5,5.4l5.3,5.3ZM36.6,38.6l-5.4-5.3,2.1-2,5.4,5.2ZM0,23.5v-3H7.5v3ZM7.6,38.6,5.4,36.5l5.3-5.2,1.1,1,1.1,1ZM22,34A12,12,0,0,1,10,22,12,12,0,0,1,22,10,12,12,0,0,1,34,22,12,12,0,0,1,22,34Zm0-3a8.9,8.9,0,1,0-6.4-2.6A9,9,0,0,0,22,31Z",
                                        }),
                                      })
                                    : (0, g.jsx)("svg", {
                                        className: "icon",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "15.9",
                                        height: "42.1",
                                        viewBox: "0 0 30.9 42.1",
                                        children: (0, g.jsx)("path", {
                                          d: "M22.3,42.1a22.7,22.7,0,0,1-8.6-1.6,26.3,26.3,0,0,1-7.1-4.6,21.6,21.6,0,0,1-4.8-6.7A18.5,18.5,0,0,1,0,21.1a19.2,19.2,0,0,1,1.8-8.2A22.8,22.8,0,0,1,6.6,6.2a23.8,23.8,0,0,1,7.1-4.5A22.7,22.7,0,0,1,22.3,0a21.6,21.6,0,0,1,4.6.5,27,27,0,0,1,4,1.4,27.1,27.1,0,0,0-7.5,8.3,21.4,21.4,0,0,0-2.9,10.9A21.7,21.7,0,0,0,23.4,32a25.7,25.7,0,0,0,7.5,8.2,19,19,0,0,1-4,1.4A16.6,16.6,0,0,1,22.3,42.1Zm0-3.1h2.5a28.7,28.7,0,0,1-5.4-8.4,23.6,23.6,0,0,1,0-19,30.6,30.6,0,0,1,5.4-8.5H22.3A18.9,18.9,0,0,0,8.8,8.4,16.6,16.6,0,0,0,3.1,21.1,16.6,16.6,0,0,0,8.8,33.8,19.2,19.2,0,0,0,22.3,39Z",
                                        }),
                                      }),
                                  (0, g.jsx)("p", {
                                    children: a ? "Go Light" : "Go Dark",
                                  }),
                                ],
                              }),
                              (0, g.jsx)("div", {
                                className: "title",
                                children: (0, g.jsx)("p", {
                                  children: "Navigation",
                                }),
                              }),
                              (0, g.jsx)(A(), {
                                href: "/",
                                children: (0, g.jsxs)("div", {
                                  className: "menuLink",
                                  children: [
                                    (0, g.jsx)("svg", {
                                      className: "icon",
                                      width: "14",
                                      height: "14",
                                      viewBox: "0 0 14 14",
                                      xmlns: "http://www.w3.org/2000/svg",
                                      children: (0, g.jsx)("path", {
                                        d: "M7.00016 11.6668L6.38766 11.0397L9.98975 7.43766H2.3335V6.56266H9.98975L6.38766 2.96058L7.00016 2.3335L11.6668 7.00016L7.00016 11.6668Z",
                                        fill: "#4479E2",
                                      }),
                                    }),
                                    (0, g.jsx)("p", { children: "Home" }),
                                  ],
                                }),
                              }),
                              (0, g.jsx)(A(), {
                                href: "/tutorials",
                                children: (0, g.jsxs)("div", {
                                  className: "menuLink",
                                  children: [
                                    (0, g.jsx)("svg", {
                                      className: "icon",
                                      width: "14",
                                      height: "14",
                                      viewBox: "0 0 14 14",
                                      xmlns: "http://www.w3.org/2000/svg",
                                      children: (0, g.jsx)("path", {
                                        d: "M7.00016 11.6668L6.38766 11.0397L9.98975 7.43766H2.3335V6.56266H9.98975L6.38766 2.96058L7.00016 2.3335L11.6668 7.00016L7.00016 11.6668Z",
                                        fill: "#4479E2",
                                      }),
                                    }),
                                    (0, g.jsx)("p", { children: "Tutorials" }),
                                  ],
                                }),
                              }),
                              n > 800 &&
                                (0, g.jsx)(A(), {
                                  href: "/demos",
                                  target: "_blank",
                                  children: (0, g.jsxs)("div", {
                                    className: "menuLink",
                                    children: [
                                      (0, g.jsx)("svg", {
                                        className: "icon",
                                        width: "14",
                                        height: "14",
                                        viewBox: "0 0 14 14",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: (0, g.jsx)("path", {
                                          d: "M7.00016 11.6668L6.38766 11.0397L9.98975 7.43766H2.3335V6.56266H9.98975L6.38766 2.96058L7.00016 2.3335L11.6668 7.00016L7.00016 11.6668Z",
                                          fill: "#4479E2",
                                        }),
                                      }),
                                      (0, g.jsx)("p", { children: "Demos" }),
                                    ],
                                  }),
                                }),
                              (0, g.jsx)("div", {
                                className: "title",
                                children: (0, g.jsx)("p", {
                                  children: "Socials",
                                }),
                              }),
                              (0, g.jsx)("div", {
                                onClick: () => {
                                  r(!1);
                                },
                                className: "menuEl",
                                children: (0, g.jsxs)("a", {
                                  href: "https://www.youtube.com/@olivierlarose1",
                                  target: "_blank",
                                  children: [
                                    (0, g.jsx)("svg", {
                                      className: "icon",
                                      width: "15",
                                      height: "10",
                                      viewBox: "0 0 15 10",
                                      fill: "none",
                                      xmlns: "http://www.w3.org/2000/svg",
                                      children: (0, g.jsx)("path", {
                                        d: "M14.4153 0.919511C13.8739 0.318775 12.8742 0.0737305 10.965 0.0737305H4.03481C2.08195 0.0737305 1.06534 0.334582 0.525919 0.974156C0 1.59774 0 2.51655 0 3.7882V6.21196C0 8.67556 0.624 9.92639 4.03481 9.92639H10.9651C12.6207 9.92639 13.5381 9.71016 14.1316 9.18001C14.7403 8.63636 15 7.74871 15 6.21196V3.7882C15 2.44714 14.9593 1.52291 14.4153 0.919511ZM9.63005 5.3347L6.48305 6.86978C6.41269 6.9041 6.33576 6.92113 6.25892 6.92113C6.17192 6.92113 6.08511 6.89927 6.00823 6.85583C5.86345 6.77395 5.77505 6.62749 5.77505 6.46952V3.40921C5.77505 3.2515 5.86321 3.10518 6.00769 3.02326C6.15223 2.94134 6.33198 2.93574 6.48194 3.00845L9.62894 4.53363C9.78905 4.61122 9.8896 4.76549 9.88984 4.93381C9.89003 5.10226 9.78992 5.25676 9.63005 5.3347Z",
                                      }),
                                    }),
                                    (0, g.jsx)("p", { children: "Youtube" }),
                                  ],
                                }),
                              }),
                              (0, g.jsx)("div", {
                                onClick: () => {
                                  r(!1);
                                },
                                className: "menuEl",
                                children: (0, g.jsxs)("a", {
                                  href: "https://discord.com/invite/2QPNYtazQq",
                                  target: "_blank",
                                  children: [
                                    (0, g.jsx)("svg", {
                                      className: "icon",
                                      xmlns: "http://www.w3.org/2000/svg",
                                      height: "10",
                                      viewBox: "0 -960 960 960",
                                      width: "20",
                                      fill: "none",
                                      children: (0, g.jsx)("path", {
                                        d: "M38-160v-94q0-35 18-63.5t50-42.5q73-32 131.5-46T358-420q62 0 120 14t131 46q32 14 50.5 42.5T678-254v94H38Zm700 0v-94q0-63-32-103.5T622-423q69 8 130 23.5t99 35.5q33 19 52 47t19 63v94H738ZM358-481q-66 0-108-42t-42-108q0-66 42-108t108-42q66 0 108 42t42 108q0 66-42 108t-108 42Zm360-150q0 66-42 108t-108 42q-11 0-24.5-1.5T519-488q24-25 36.5-61.5T568-631q0-45-12.5-79.5T519-774q11-3 24.5-5t24.5-2q66 0 108 42t42 108ZM98-220h520v-34q0-16-9.5-31T585-306q-72-32-121-43t-106-11q-57 0-106.5 11T130-306q-14 6-23 21t-9 31v34Zm260-321q39 0 64.5-25.5T448-631q0-39-25.5-64.5T358-721q-39 0-64.5 25.5T268-631q0 39 25.5 64.5T358-541Zm0 321Zm0-411Z",
                                      }),
                                    }),
                                    (0, g.jsx)("p", { children: "Discord" }),
                                  ],
                                }),
                              }),
                              (0, g.jsx)("div", {
                                onClick: () => {
                                  r(!1);
                                },
                                className: "menuEl",
                                children: (0, g.jsxs)("a", {
                                  href: "mailto:olivierlarose1@gmail.com",
                                  children: [
                                    (0, g.jsx)("svg", {
                                      className: "icon",
                                      width: "15",
                                      height: "13",
                                      viewBox: "0 0 15 13",
                                      fill: "none",
                                      xmlns: "http://www.w3.org/2000/svg",
                                      children: (0, g.jsx)("path", {
                                        d: "M1.479 12.1668C1.19567 12.1668 0.947754 12.0606 0.735254 11.8481C0.522754 11.6356 0.416504 11.3877 0.416504 11.1043V1.896C0.416504 1.61266 0.522754 1.36475 0.735254 1.15225C0.947754 0.939746 1.19567 0.833496 1.479 0.833496H13.5207C13.804 0.833496 14.0519 0.939746 14.2644 1.15225C14.4769 1.36475 14.5832 1.61266 14.5832 1.896V11.1043C14.5832 11.3877 14.4769 11.6356 14.2644 11.8481C14.0519 12.0606 13.804 12.1668 13.5207 12.1668H1.479ZM7.49984 6.81891L1.479 2.86995V11.1043H13.5207V2.86995L7.49984 6.81891ZM7.49984 5.75641L13.4498 1.896H1.56755L7.49984 5.75641ZM1.479 2.86995V1.896V11.1043V2.86995Z",
                                      }),
                                    }),
                                    (0, g.jsx)("p", { children: "Contact" }),
                                  ],
                                }),
                              }),
                              (0, g.jsx)("div", {
                                onClick: () => {
                                  r(!1);
                                },
                                className: "menuEl",
                                children: (0, g.jsxs)("a", {
                                  href: "https://www.olivierlarose.com/",
                                  target: "_blank",
                                  children: [
                                    (0, g.jsx)("svg", {
                                      className: "icon",
                                      xmlns: "http://www.w3.org/2000/svg",
                                      viewBox: "0 0 32.7 40.7",
                                      children: (0, g.jsx)("path", {
                                        d: "M16.4,18.2a7.2,7.2,0,0,1-7.5-7.5,7.2,7.2,0,0,1,7.5-7.5,7.2,7.2,0,0,1,7.5,7.5,7.2,7.2,0,0,1-7.5,7.5ZM.4,34.3V29.6a5.2,5.2,0,0,1,1-3.3,5.2,5.2,0,0,1,2.4-2A38.3,38.3,0,0,1,10.2,22a26.2,26.2,0,0,1,6.2-.7,22,22,0,0,1,6.2.8,36.6,36.6,0,0,1,6.3,2.2,6.5,6.5,0,0,1,2.6,2,5.8,5.8,0,0,1,.9,3.3v4.7Zm3-3h26V29.6a2.5,2.5,0,0,0-.5-1.5A2.9,2.9,0,0,0,27.8,27a21.1,21.1,0,0,0-5.9-2.1,25.5,25.5,0,0,0-11,0A20.1,20.1,0,0,0,5,27a2.3,2.3,0,0,0-1.1,1.1,2.5,2.5,0,0,0-.5,1.5Zm13-16.1A4.4,4.4,0,0,0,19.6,14a4.4,4.4,0,0,0,1.3-3.3,4.2,4.2,0,0,0-1.3-3.2,4.6,4.6,0,0,0-6.4,0,4.2,4.2,0,0,0-1.3,3.2A4.4,4.4,0,0,0,13.2,14,4.4,4.4,0,0,0,16.4,15.2Z",
                                      }),
                                    }),
                                    (0, g.jsx)("p", { children: "About" }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, g.jsx)(T.M, {
              mode: "wait",
              children:
                e &&
                (0, g.jsx)(O.E.div, {
                  onClick: () => {
                    r(!1);
                  },
                  variants: j,
                  initial: "initial",
                  animate: "enter",
                  exit: "exit",
                  className: "filter",
                }),
            }),
          ],
        });
      }
      function bind(e, r) {
        return function () {
          return e.apply(r, arguments);
        };
      }
      let { toString: C } = Object.prototype,
        { getPrototypeOf: R } = Object,
        D =
          ((s = Object.create(null)),
          (e) => {
            let r = C.call(e);
            return s[r] || (s[r] = r.slice(8, -1).toLowerCase());
          }),
        kindOfTest = (e) => ((e = e.toLowerCase()), (r) => D(r) === e),
        typeOfTest = (e) => (r) => typeof r === e,
        { isArray: B } = Array,
        I = typeOfTest("undefined"),
        V = kindOfTest("ArrayBuffer"),
        L = typeOfTest("string"),
        M = typeOfTest("function"),
        N = typeOfTest("number"),
        isObject = (e) => null !== e && "object" == typeof e,
        isPlainObject = (e) => {
          if ("object" !== D(e)) return !1;
          let r = R(e);
          return (
            (null === r ||
              r === Object.prototype ||
              null === Object.getPrototypeOf(r)) &&
            !(Symbol.toStringTag in e) &&
            !(Symbol.iterator in e)
          );
        },
        U = kindOfTest("Date"),
        $ = kindOfTest("File"),
        q = kindOfTest("Blob"),
        z = kindOfTest("FileList"),
        H = kindOfTest("URLSearchParams");
      function forEach(e, r, { allOwnKeys: n = !1 } = {}) {
        let s, a;
        if (null != e) {
          if (("object" != typeof e && (e = [e]), B(e)))
            for (s = 0, a = e.length; s < a; s++) r.call(null, e[s], s, e);
          else {
            let a;
            let l = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
              u = l.length;
            for (s = 0; s < u; s++) (a = l[s]), r.call(null, e[a], a, e);
          }
        }
      }
      function findKey(e, r) {
        let n;
        r = r.toLowerCase();
        let s = Object.keys(e),
          a = s.length;
        for (; a-- > 0; ) if (r === (n = s[a]).toLowerCase()) return n;
        return null;
      }
      let W =
          "undefined" != typeof globalThis
            ? globalThis
            : "undefined" != typeof self
            ? self
            : "undefined" != typeof window
            ? window
            : global,
        isContextDefined = (e) => !I(e) && e !== W,
        K =
          ((a = "undefined" != typeof Uint8Array && R(Uint8Array)),
          (e) => a && e instanceof a),
        G = kindOfTest("HTMLFormElement"),
        J = (
          ({ hasOwnProperty: e }) =>
          (r, n) =>
            e.call(r, n)
        )(Object.prototype),
        Z = kindOfTest("RegExp"),
        reduceDescriptors = (e, r) => {
          let n = Object.getOwnPropertyDescriptors(e),
            s = {};
          forEach(n, (n, a) => {
            let l;
            !1 !== (l = r(n, a, e)) && (s[a] = l || n);
          }),
            Object.defineProperties(e, s);
        },
        X = "abcdefghijklmnopqrstuvwxyz",
        Y = "0123456789",
        Q = { DIGIT: Y, ALPHA: X, ALPHA_DIGIT: X + X.toUpperCase() + Y },
        ee = kindOfTest("AsyncFunction");
      var et = {
        isArray: B,
        isArrayBuffer: V,
        isBuffer: function (e) {
          return (
            null !== e &&
            !I(e) &&
            null !== e.constructor &&
            !I(e.constructor) &&
            M(e.constructor.isBuffer) &&
            e.constructor.isBuffer(e)
          );
        },
        isFormData: (e) => {
          let r;
          return (
            e &&
            (("function" == typeof FormData && e instanceof FormData) ||
              (M(e.append) &&
                ("formdata" === (r = D(e)) ||
                  ("object" === r &&
                    M(e.toString) &&
                    "[object FormData]" === e.toString()))))
          );
        },
        isArrayBufferView: function (e) {
          return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView
            ? ArrayBuffer.isView(e)
            : e && e.buffer && V(e.buffer);
        },
        isString: L,
        isNumber: N,
        isBoolean: (e) => !0 === e || !1 === e,
        isObject,
        isPlainObject,
        isUndefined: I,
        isDate: U,
        isFile: $,
        isBlob: q,
        isRegExp: Z,
        isFunction: M,
        isStream: (e) => isObject(e) && M(e.pipe),
        isURLSearchParams: H,
        isTypedArray: K,
        isFileList: z,
        forEach,
        merge: function merge() {
          let { caseless: e } = (isContextDefined(this) && this) || {},
            r = {},
            assignValue = (n, s) => {
              let a = (e && findKey(r, s)) || s;
              isPlainObject(r[a]) && isPlainObject(n)
                ? (r[a] = merge(r[a], n))
                : isPlainObject(n)
                ? (r[a] = merge({}, n))
                : B(n)
                ? (r[a] = n.slice())
                : (r[a] = n);
            };
          for (let e = 0, r = arguments.length; e < r; e++)
            arguments[e] && forEach(arguments[e], assignValue);
          return r;
        },
        extend: (e, r, n, { allOwnKeys: s } = {}) => (
          forEach(
            r,
            (r, s) => {
              n && M(r) ? (e[s] = bind(r, n)) : (e[s] = r);
            },
            { allOwnKeys: s }
          ),
          e
        ),
        trim: (e) =>
          e.trim
            ? e.trim()
            : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""),
        stripBOM: (e) => (65279 === e.charCodeAt(0) && (e = e.slice(1)), e),
        inherits: (e, r, n, s) => {
          (e.prototype = Object.create(r.prototype, s)),
            (e.prototype.constructor = e),
            Object.defineProperty(e, "super", { value: r.prototype }),
            n && Object.assign(e.prototype, n);
        },
        toFlatObject: (e, r, n, s) => {
          let a, l, u;
          let c = {};
          if (((r = r || {}), null == e)) return r;
          do {
            for (l = (a = Object.getOwnPropertyNames(e)).length; l-- > 0; )
              (u = a[l]),
                (!s || s(u, e, r)) && !c[u] && ((r[u] = e[u]), (c[u] = !0));
            e = !1 !== n && R(e);
          } while (e && (!n || n(e, r)) && e !== Object.prototype);
          return r;
        },
        kindOf: D,
        kindOfTest,
        endsWith: (e, r, n) => {
          (e = String(e)),
            (void 0 === n || n > e.length) && (n = e.length),
            (n -= r.length);
          let s = e.indexOf(r, n);
          return -1 !== s && s === n;
        },
        toArray: (e) => {
          if (!e) return null;
          if (B(e)) return e;
          let r = e.length;
          if (!N(r)) return null;
          let n = Array(r);
          for (; r-- > 0; ) n[r] = e[r];
          return n;
        },
        forEachEntry: (e, r) => {
          let n;
          let s = e && e[Symbol.iterator],
            a = s.call(e);
          for (; (n = a.next()) && !n.done; ) {
            let s = n.value;
            r.call(e, s[0], s[1]);
          }
        },
        matchAll: (e, r) => {
          let n;
          let s = [];
          for (; null !== (n = e.exec(r)); ) s.push(n);
          return s;
        },
        isHTMLForm: G,
        hasOwnProperty: J,
        hasOwnProp: J,
        reduceDescriptors,
        freezeMethods: (e) => {
          reduceDescriptors(e, (r, n) => {
            if (M(e) && -1 !== ["arguments", "caller", "callee"].indexOf(n))
              return !1;
            let s = e[n];
            if (M(s)) {
              if (((r.enumerable = !1), "writable" in r)) {
                r.writable = !1;
                return;
              }
              r.set ||
                (r.set = () => {
                  throw Error("Can not rewrite read-only method '" + n + "'");
                });
            }
          });
        },
        toObjectSet: (e, r) => {
          let n = {};
          return (
            ((e) => {
              e.forEach((e) => {
                n[e] = !0;
              });
            })(B(e) ? e : String(e).split(r)),
            n
          );
        },
        toCamelCase: (e) =>
          e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (e, r, n) {
            return r.toUpperCase() + n;
          }),
        noop: () => {},
        toFiniteNumber: (e, r) => (Number.isFinite((e = +e)) ? e : r),
        findKey,
        global: W,
        isContextDefined,
        ALPHABET: Q,
        generateString: (e = 16, r = Q.ALPHA_DIGIT) => {
          let n = "",
            { length: s } = r;
          for (; e--; ) n += r[(Math.random() * s) | 0];
          return n;
        },
        isSpecCompliantForm: function (e) {
          return !!(
            e &&
            M(e.append) &&
            "FormData" === e[Symbol.toStringTag] &&
            e[Symbol.iterator]
          );
        },
        toJSONObject: (e) => {
          let r = Array(10),
            visit = (e, n) => {
              if (isObject(e)) {
                if (r.indexOf(e) >= 0) return;
                if (!("toJSON" in e)) {
                  r[n] = e;
                  let s = B(e) ? [] : {};
                  return (
                    forEach(e, (e, r) => {
                      let a = visit(e, n + 1);
                      I(a) || (s[r] = a);
                    }),
                    (r[n] = void 0),
                    s
                  );
                }
              }
              return e;
            };
          return visit(e, 0);
        },
        isAsyncFn: ee,
        isThenable: (e) =>
          e && (isObject(e) || M(e)) && M(e.then) && M(e.catch),
      };
      function AxiosError(e, r, n, s, a) {
        Error.call(this),
          Error.captureStackTrace
            ? Error.captureStackTrace(this, this.constructor)
            : (this.stack = Error().stack),
          (this.message = e),
          (this.name = "AxiosError"),
          r && (this.code = r),
          n && (this.config = n),
          s && (this.request = s),
          a && (this.response = a);
      }
      et.inherits(AxiosError, Error, {
        toJSON: function () {
          return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: et.toJSONObject(this.config),
            code: this.code,
            status:
              this.response && this.response.status
                ? this.response.status
                : null,
          };
        },
      });
      let er = AxiosError.prototype,
        en = {};
      [
        "ERR_BAD_OPTION_VALUE",
        "ERR_BAD_OPTION",
        "ECONNABORTED",
        "ETIMEDOUT",
        "ERR_NETWORK",
        "ERR_FR_TOO_MANY_REDIRECTS",
        "ERR_DEPRECATED",
        "ERR_BAD_RESPONSE",
        "ERR_BAD_REQUEST",
        "ERR_CANCELED",
        "ERR_NOT_SUPPORT",
        "ERR_INVALID_URL",
      ].forEach((e) => {
        en[e] = { value: e };
      }),
        Object.defineProperties(AxiosError, en),
        Object.defineProperty(er, "isAxiosError", { value: !0 }),
        (AxiosError.from = (e, r, n, s, a, l) => {
          let u = Object.create(er);
          return (
            et.toFlatObject(
              e,
              u,
              function (e) {
                return e !== Error.prototype;
              },
              (e) => "isAxiosError" !== e
            ),
            AxiosError.call(u, e.message, r, n, s, a),
            (u.cause = e),
            (u.name = e.name),
            l && Object.assign(u, l),
            u
          );
        });
      var ei = n(48764).lW;
      function isVisitable(e) {
        return et.isPlainObject(e) || et.isArray(e);
      }
      function removeBrackets(e) {
        return et.endsWith(e, "[]") ? e.slice(0, -2) : e;
      }
      function renderKey(e, r, n) {
        return e
          ? e
              .concat(r)
              .map(function (e, r) {
                return (e = removeBrackets(e)), !n && r ? "[" + e + "]" : e;
              })
              .join(n ? "." : "")
          : r;
      }
      let es = et.toFlatObject(et, {}, null, function (e) {
        return /^is[A-Z]/.test(e);
      });
      var helpers_toFormData = function (e, r, n) {
        if (!et.isObject(e)) throw TypeError("target must be an object");
        (r = r || new FormData()),
          (n = et.toFlatObject(
            n,
            { metaTokens: !0, dots: !1, indexes: !1 },
            !1,
            function (e, r) {
              return !et.isUndefined(r[e]);
            }
          ));
        let s = n.metaTokens,
          a = n.visitor || defaultVisitor,
          l = n.dots,
          u = n.indexes,
          c = n.Blob || ("undefined" != typeof Blob && Blob),
          h = c && et.isSpecCompliantForm(r);
        if (!et.isFunction(a)) throw TypeError("visitor must be a function");
        function convertValue(e) {
          if (null === e) return "";
          if (et.isDate(e)) return e.toISOString();
          if (!h && et.isBlob(e))
            throw new AxiosError(
              "Blob is not supported. Use a Buffer instead."
            );
          return et.isArrayBuffer(e) || et.isTypedArray(e)
            ? h && "function" == typeof Blob
              ? new Blob([e])
              : ei.from(e)
            : e;
        }
        function defaultVisitor(e, n, a) {
          let c = e;
          if (e && !a && "object" == typeof e) {
            if (et.endsWith(n, "{}"))
              (n = s ? n : n.slice(0, -2)), (e = JSON.stringify(e));
            else {
              var h;
              if (
                (et.isArray(e) &&
                  ((h = e), et.isArray(h) && !h.some(isVisitable))) ||
                ((et.isFileList(e) || et.endsWith(n, "[]")) &&
                  (c = et.toArray(e)))
              )
                return (
                  (n = removeBrackets(n)),
                  c.forEach(function (e, s) {
                    et.isUndefined(e) ||
                      null === e ||
                      r.append(
                        !0 === u
                          ? renderKey([n], s, l)
                          : null === u
                          ? n
                          : n + "[]",
                        convertValue(e)
                      );
                  }),
                  !1
                );
            }
          }
          return (
            !!isVisitable(e) ||
            (r.append(renderKey(a, n, l), convertValue(e)), !1)
          );
        }
        let d = [],
          f = Object.assign(es, { defaultVisitor, convertValue, isVisitable });
        if (!et.isObject(e)) throw TypeError("data must be an object");
        return (
          !(function build(e, n) {
            if (!et.isUndefined(e)) {
              if (-1 !== d.indexOf(e))
                throw Error("Circular reference detected in " + n.join("."));
              d.push(e),
                et.forEach(e, function (e, s) {
                  let l =
                    !(et.isUndefined(e) || null === e) &&
                    a.call(r, e, et.isString(s) ? s.trim() : s, n, f);
                  !0 === l && build(e, n ? n.concat(s) : [s]);
                }),
                d.pop();
            }
          })(e),
          r
        );
      };
      function encode(e) {
        let r = {
          "!": "%21",
          "'": "%27",
          "(": "%28",
          ")": "%29",
          "~": "%7E",
          "%20": "+",
          "%00": "\x00",
        };
        return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (e) {
          return r[e];
        });
      }
      function AxiosURLSearchParams(e, r) {
        (this._pairs = []), e && helpers_toFormData(e, this, r);
      }
      let eo = AxiosURLSearchParams.prototype;
      function buildURL_encode(e) {
        return encodeURIComponent(e)
          .replace(/%3A/gi, ":")
          .replace(/%24/g, "$")
          .replace(/%2C/gi, ",")
          .replace(/%20/g, "+")
          .replace(/%5B/gi, "[")
          .replace(/%5D/gi, "]");
      }
      function buildURL(e, r, n) {
        let s;
        if (!r) return e;
        let a = (n && n.encode) || buildURL_encode,
          l = n && n.serialize;
        if (
          (s = l
            ? l(r, n)
            : et.isURLSearchParams(r)
            ? r.toString()
            : new AxiosURLSearchParams(r, n).toString(a))
        ) {
          let r = e.indexOf("#");
          -1 !== r && (e = e.slice(0, r)),
            (e += (-1 === e.indexOf("?") ? "?" : "&") + s);
        }
        return e;
      }
      (eo.append = function (e, r) {
        this._pairs.push([e, r]);
      }),
        (eo.toString = function (e) {
          let r = e
            ? function (r) {
                return e.call(this, r, encode);
              }
            : encode;
          return this._pairs
            .map(function (e) {
              return r(e[0]) + "=" + r(e[1]);
            }, "")
            .join("&");
        });
      var ea = class {
          constructor() {
            this.handlers = [];
          }
          use(e, r, n) {
            return (
              this.handlers.push({
                fulfilled: e,
                rejected: r,
                synchronous: !!n && n.synchronous,
                runWhen: n ? n.runWhen : null,
              }),
              this.handlers.length - 1
            );
          }
          eject(e) {
            this.handlers[e] && (this.handlers[e] = null);
          }
          clear() {
            this.handlers && (this.handlers = []);
          }
          forEach(e) {
            et.forEach(this.handlers, function (r) {
              null !== r && e(r);
            });
          }
        },
        el = {
          silentJSONParsing: !0,
          forcedJSONParsing: !0,
          clarifyTimeoutError: !1,
        },
        eu =
          "undefined" != typeof URLSearchParams
            ? URLSearchParams
            : AxiosURLSearchParams,
        ec = "undefined" != typeof FormData ? FormData : null,
        eh = "undefined" != typeof Blob ? Blob : null;
      let ed = "undefined" != typeof window && "undefined" != typeof document,
        ef =
          ((l = "undefined" != typeof navigator && navigator.product),
          ed && 0 > ["ReactNative", "NativeScript", "NS"].indexOf(l)),
        ep =
          "undefined" != typeof WorkerGlobalScope &&
          self instanceof WorkerGlobalScope &&
          "function" == typeof self.importScripts;
      var em = {
          ...u,
          isBrowser: !0,
          classes: { URLSearchParams: eu, FormData: ec, Blob: eh },
          protocols: ["http", "https", "file", "blob", "url", "data"],
        },
        helpers_formDataToJSON = function (e) {
          if (et.isFormData(e) && et.isFunction(e.entries)) {
            let r = {};
            return (
              et.forEachEntry(e, (e, n) => {
                !(function buildPath(e, r, n, s) {
                  let a = e[s++];
                  if ("__proto__" === a) return !0;
                  let l = Number.isFinite(+a),
                    u = s >= e.length;
                  if (((a = !a && et.isArray(n) ? n.length : a), u))
                    return (
                      et.hasOwnProp(n, a) ? (n[a] = [n[a], r]) : (n[a] = r), !l
                    );
                  (n[a] && et.isObject(n[a])) || (n[a] = []);
                  let c = buildPath(e, r, n[a], s);
                  return (
                    c &&
                      et.isArray(n[a]) &&
                      (n[a] = (function (e) {
                        let r, n;
                        let s = {},
                          a = Object.keys(e),
                          l = a.length;
                        for (r = 0; r < l; r++) s[(n = a[r])] = e[n];
                        return s;
                      })(n[a])),
                    !l
                  );
                })(
                  et
                    .matchAll(/\w+|\[(\w*)]/g, e)
                    .map((e) => ("[]" === e[0] ? "" : e[1] || e[0])),
                  n,
                  r,
                  0
                );
              }),
              r
            );
          }
          return null;
        };
      let ey = {
        transitional: el,
        adapter: ["xhr", "http"],
        transformRequest: [
          function (e, r) {
            let n;
            let s = r.getContentType() || "",
              a = s.indexOf("application/json") > -1,
              l = et.isObject(e);
            l && et.isHTMLForm(e) && (e = new FormData(e));
            let u = et.isFormData(e);
            if (u) return a ? JSON.stringify(helpers_formDataToJSON(e)) : e;
            if (
              et.isArrayBuffer(e) ||
              et.isBuffer(e) ||
              et.isStream(e) ||
              et.isFile(e) ||
              et.isBlob(e)
            )
              return e;
            if (et.isArrayBufferView(e)) return e.buffer;
            if (et.isURLSearchParams(e))
              return (
                r.setContentType(
                  "application/x-www-form-urlencoded;charset=utf-8",
                  !1
                ),
                e.toString()
              );
            if (l) {
              if (s.indexOf("application/x-www-form-urlencoded") > -1) {
                var c, h;
                return ((c = e),
                (h = this.formSerializer),
                helpers_toFormData(
                  c,
                  new em.classes.URLSearchParams(),
                  Object.assign(
                    {
                      visitor: function (e, r, n, s) {
                        return em.isNode && et.isBuffer(e)
                          ? (this.append(r, e.toString("base64")), !1)
                          : s.defaultVisitor.apply(this, arguments);
                      },
                    },
                    h
                  )
                )).toString();
              }
              if (
                (n = et.isFileList(e)) ||
                s.indexOf("multipart/form-data") > -1
              ) {
                let r = this.env && this.env.FormData;
                return helpers_toFormData(
                  n ? { "files[]": e } : e,
                  r && new r(),
                  this.formSerializer
                );
              }
            }
            return l || a
              ? (r.setContentType("application/json", !1),
                (function (e, r, n) {
                  if (et.isString(e))
                    try {
                      return (0, JSON.parse)(e), et.trim(e);
                    } catch (e) {
                      if ("SyntaxError" !== e.name) throw e;
                    }
                  return (0, JSON.stringify)(e);
                })(e))
              : e;
          },
        ],
        transformResponse: [
          function (e) {
            let r = this.transitional || ey.transitional,
              n = r && r.forcedJSONParsing,
              s = "json" === this.responseType;
            if (e && et.isString(e) && ((n && !this.responseType) || s)) {
              let n = r && r.silentJSONParsing;
              try {
                return JSON.parse(e);
              } catch (e) {
                if (!n && s) {
                  if ("SyntaxError" === e.name)
                    throw AxiosError.from(
                      e,
                      AxiosError.ERR_BAD_RESPONSE,
                      this,
                      null,
                      this.response
                    );
                  throw e;
                }
              }
            }
            return e;
          },
        ],
        timeout: 0,
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
        maxContentLength: -1,
        maxBodyLength: -1,
        env: { FormData: em.classes.FormData, Blob: em.classes.Blob },
        validateStatus: function (e) {
          return e >= 200 && e < 300;
        },
        headers: {
          common: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": void 0,
          },
        },
      };
      et.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
        ey.headers[e] = {};
      });
      let eg = et.toObjectSet([
        "age",
        "authorization",
        "content-length",
        "content-type",
        "etag",
        "expires",
        "from",
        "host",
        "if-modified-since",
        "if-unmodified-since",
        "last-modified",
        "location",
        "max-forwards",
        "proxy-authorization",
        "referer",
        "retry-after",
        "user-agent",
      ]);
      var parseHeaders = (e) => {
        let r, n, s;
        let a = {};
        return (
          e &&
            e.split("\n").forEach(function (e) {
              (s = e.indexOf(":")),
                (r = e.substring(0, s).trim().toLowerCase()),
                (n = e.substring(s + 1).trim()),
                !r ||
                  (a[r] && eg[r]) ||
                  ("set-cookie" === r
                    ? a[r]
                      ? a[r].push(n)
                      : (a[r] = [n])
                    : (a[r] = a[r] ? a[r] + ", " + n : n));
            }),
          a
        );
      };
      let ev = Symbol("internals");
      function normalizeHeader(e) {
        return e && String(e).trim().toLowerCase();
      }
      function normalizeValue(e) {
        return !1 === e || null == e
          ? e
          : et.isArray(e)
          ? e.map(normalizeValue)
          : String(e);
      }
      let isValidHeaderName = (e) =>
        /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
      function matchHeaderValue(e, r, n, s, a) {
        if (et.isFunction(s)) return s.call(this, r, n);
        if ((a && (r = n), et.isString(r))) {
          if (et.isString(s)) return -1 !== r.indexOf(s);
          if (et.isRegExp(s)) return s.test(r);
        }
      }
      let AxiosHeaders = class AxiosHeaders {
        constructor(e) {
          e && this.set(e);
        }
        set(e, r, n) {
          let s = this;
          function setHeader(e, r, n) {
            let a = normalizeHeader(r);
            if (!a) throw Error("header name must be a non-empty string");
            let l = et.findKey(s, a);
            (l &&
              void 0 !== s[l] &&
              !0 !== n &&
              (void 0 !== n || !1 === s[l])) ||
              (s[l || r] = normalizeValue(e));
          }
          let setHeaders = (e, r) =>
            et.forEach(e, (e, n) => setHeader(e, n, r));
          return (
            et.isPlainObject(e) || e instanceof this.constructor
              ? setHeaders(e, r)
              : et.isString(e) && (e = e.trim()) && !isValidHeaderName(e)
              ? setHeaders(parseHeaders(e), r)
              : null != e && setHeader(r, e, n),
            this
          );
        }
        get(e, r) {
          if ((e = normalizeHeader(e))) {
            let n = et.findKey(this, e);
            if (n) {
              let e = this[n];
              if (!r) return e;
              if (!0 === r)
                return (function (e) {
                  let r;
                  let n = Object.create(null),
                    s = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
                  for (; (r = s.exec(e)); ) n[r[1]] = r[2];
                  return n;
                })(e);
              if (et.isFunction(r)) return r.call(this, e, n);
              if (et.isRegExp(r)) return r.exec(e);
              throw TypeError("parser must be boolean|regexp|function");
            }
          }
        }
        has(e, r) {
          if ((e = normalizeHeader(e))) {
            let n = et.findKey(this, e);
            return !!(
              n &&
              void 0 !== this[n] &&
              (!r || matchHeaderValue(this, this[n], n, r))
            );
          }
          return !1;
        }
        delete(e, r) {
          let n = this,
            s = !1;
          function deleteHeader(e) {
            if ((e = normalizeHeader(e))) {
              let a = et.findKey(n, e);
              a &&
                (!r || matchHeaderValue(n, n[a], a, r)) &&
                (delete n[a], (s = !0));
            }
          }
          return et.isArray(e) ? e.forEach(deleteHeader) : deleteHeader(e), s;
        }
        clear(e) {
          let r = Object.keys(this),
            n = r.length,
            s = !1;
          for (; n--; ) {
            let a = r[n];
            (!e || matchHeaderValue(this, this[a], a, e, !0)) &&
              (delete this[a], (s = !0));
          }
          return s;
        }
        normalize(e) {
          let r = this,
            n = {};
          return (
            et.forEach(this, (s, a) => {
              let l = et.findKey(n, a);
              if (l) {
                (r[l] = normalizeValue(s)), delete r[a];
                return;
              }
              let u = e
                ? a
                    .trim()
                    .toLowerCase()
                    .replace(
                      /([a-z\d])(\w*)/g,
                      (e, r, n) => r.toUpperCase() + n
                    )
                : String(a).trim();
              u !== a && delete r[a], (r[u] = normalizeValue(s)), (n[u] = !0);
            }),
            this
          );
        }
        concat(...e) {
          return this.constructor.concat(this, ...e);
        }
        toJSON(e) {
          let r = Object.create(null);
          return (
            et.forEach(this, (n, s) => {
              null != n &&
                !1 !== n &&
                (r[s] = e && et.isArray(n) ? n.join(", ") : n);
            }),
            r
          );
        }
        [Symbol.iterator]() {
          return Object.entries(this.toJSON())[Symbol.iterator]();
        }
        toString() {
          return Object.entries(this.toJSON())
            .map(([e, r]) => e + ": " + r)
            .join("\n");
        }
        get [Symbol.toStringTag]() {
          return "AxiosHeaders";
        }
        static from(e) {
          return e instanceof this ? e : new this(e);
        }
        static concat(e, ...r) {
          let n = new this(e);
          return r.forEach((e) => n.set(e)), n;
        }
        static accessor(e) {
          let r = (this[ev] = this[ev] = { accessors: {} }),
            n = r.accessors,
            s = this.prototype;
          function defineAccessor(e) {
            let r = normalizeHeader(e);
            n[r] ||
              (!(function (e, r) {
                let n = et.toCamelCase(" " + r);
                ["get", "set", "has"].forEach((s) => {
                  Object.defineProperty(e, s + n, {
                    value: function (e, n, a) {
                      return this[s].call(this, r, e, n, a);
                    },
                    configurable: !0,
                  });
                });
              })(s, e),
              (n[r] = !0));
          }
          return (
            et.isArray(e) ? e.forEach(defineAccessor) : defineAccessor(e), this
          );
        }
      };
      function transformData(e, r) {
        let n = this || ey,
          s = r || n,
          a = AxiosHeaders.from(s.headers),
          l = s.data;
        return (
          et.forEach(e, function (e) {
            l = e.call(n, l, a.normalize(), r ? r.status : void 0);
          }),
          a.normalize(),
          l
        );
      }
      function isCancel(e) {
        return !!(e && e.__CANCEL__);
      }
      function CanceledError(e, r, n) {
        AxiosError.call(
          this,
          null == e ? "canceled" : e,
          AxiosError.ERR_CANCELED,
          r,
          n
        ),
          (this.name = "CanceledError");
      }
      AxiosHeaders.accessor([
        "Content-Type",
        "Content-Length",
        "Accept",
        "Accept-Encoding",
        "User-Agent",
        "Authorization",
      ]),
        et.reduceDescriptors(AxiosHeaders.prototype, ({ value: e }, r) => {
          let n = r[0].toUpperCase() + r.slice(1);
          return {
            get: () => e,
            set(e) {
              this[n] = e;
            },
          };
        }),
        et.freezeMethods(AxiosHeaders),
        et.inherits(CanceledError, AxiosError, { __CANCEL__: !0 });
      var eb = em.hasStandardBrowserEnv
        ? {
            write(e, r, n, s, a, l) {
              let u = [e + "=" + encodeURIComponent(r)];
              et.isNumber(n) && u.push("expires=" + new Date(n).toGMTString()),
                et.isString(s) && u.push("path=" + s),
                et.isString(a) && u.push("domain=" + a),
                !0 === l && u.push("secure"),
                (document.cookie = u.join("; "));
            },
            read(e) {
              let r = document.cookie.match(
                RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
              );
              return r ? decodeURIComponent(r[3]) : null;
            },
            remove(e) {
              this.write(e, "", Date.now() - 864e5);
            },
          }
        : { write() {}, read: () => null, remove() {} };
      function buildFullPath(e, r) {
        return e && !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(r)
          ? r
            ? e.replace(/\/?\/$/, "") + "/" + r.replace(/^\/+/, "")
            : e
          : r;
      }
      var ew = em.hasStandardBrowserEnv
          ? (function () {
              let e;
              let r = /(msie|trident)/i.test(navigator.userAgent),
                n = document.createElement("a");
              function resolveURL(e) {
                let s = e;
                return (
                  r && (n.setAttribute("href", s), (s = n.href)),
                  n.setAttribute("href", s),
                  {
                    href: n.href,
                    protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
                    host: n.host,
                    search: n.search ? n.search.replace(/^\?/, "") : "",
                    hash: n.hash ? n.hash.replace(/^#/, "") : "",
                    hostname: n.hostname,
                    port: n.port,
                    pathname:
                      "/" === n.pathname.charAt(0)
                        ? n.pathname
                        : "/" + n.pathname,
                  }
                );
              }
              return (
                (e = resolveURL(window.location.href)),
                function (r) {
                  let n = et.isString(r) ? resolveURL(r) : r;
                  return n.protocol === e.protocol && n.host === e.host;
                }
              );
            })()
          : function () {
              return !0;
            },
        helpers_speedometer = function (e, r) {
          let n;
          e = e || 10;
          let s = Array(e),
            a = Array(e),
            l = 0,
            u = 0;
          return (
            (r = void 0 !== r ? r : 1e3),
            function (c) {
              let h = Date.now(),
                d = a[u];
              n || (n = h), (s[l] = c), (a[l] = h);
              let f = u,
                p = 0;
              for (; f !== l; ) (p += s[f++]), (f %= e);
              if (((l = (l + 1) % e) === u && (u = (u + 1) % e), h - n < r))
                return;
              let m = d && h - d;
              return m ? Math.round((1e3 * p) / m) : void 0;
            }
          );
        };
      function progressEventReducer(e, r) {
        let n = 0,
          s = helpers_speedometer(50, 250);
        return (a) => {
          let l = a.loaded,
            u = a.lengthComputable ? a.total : void 0,
            c = l - n,
            h = s(c),
            d = l <= u;
          n = l;
          let f = {
            loaded: l,
            total: u,
            progress: u ? l / u : void 0,
            bytes: c,
            rate: h || void 0,
            estimated: h && u && d ? (u - l) / h : void 0,
            event: a,
          };
          (f[r ? "download" : "upload"] = !0), e(f);
        };
      }
      let ex = "undefined" != typeof XMLHttpRequest;
      var e_ =
        ex &&
        function (e) {
          return new Promise(function (r, n) {
            let s,
              a,
              l = e.data,
              u = AxiosHeaders.from(e.headers).normalize(),
              { responseType: c, withXSRFToken: h } = e;
            function done() {
              e.cancelToken && e.cancelToken.unsubscribe(s),
                e.signal && e.signal.removeEventListener("abort", s);
            }
            if (et.isFormData(l)) {
              if (em.hasStandardBrowserEnv || em.hasStandardBrowserWebWorkerEnv)
                u.setContentType(!1);
              else if (!1 !== (a = u.getContentType())) {
                let [e, ...r] = a
                  ? a
                      .split(";")
                      .map((e) => e.trim())
                      .filter(Boolean)
                  : [];
                u.setContentType([e || "multipart/form-data", ...r].join("; "));
              }
            }
            let d = new XMLHttpRequest();
            if (e.auth) {
              let r = e.auth.username || "",
                n = e.auth.password
                  ? unescape(encodeURIComponent(e.auth.password))
                  : "";
              u.set("Authorization", "Basic " + btoa(r + ":" + n));
            }
            let f = buildFullPath(e.baseURL, e.url);
            function onloadend() {
              if (!d) return;
              let s = AxiosHeaders.from(
                  "getAllResponseHeaders" in d && d.getAllResponseHeaders()
                ),
                a =
                  c && "text" !== c && "json" !== c
                    ? d.response
                    : d.responseText,
                l = {
                  data: a,
                  status: d.status,
                  statusText: d.statusText,
                  headers: s,
                  config: e,
                  request: d,
                };
              !(function (e, r, n) {
                let s = n.config.validateStatus;
                !n.status || !s || s(n.status)
                  ? e(n)
                  : r(
                      new AxiosError(
                        "Request failed with status code " + n.status,
                        [
                          AxiosError.ERR_BAD_REQUEST,
                          AxiosError.ERR_BAD_RESPONSE,
                        ][Math.floor(n.status / 100) - 4],
                        n.config,
                        n.request,
                        n
                      )
                    );
              })(
                function (e) {
                  r(e), done();
                },
                function (e) {
                  n(e), done();
                },
                l
              ),
                (d = null);
            }
            if (
              (d.open(
                e.method.toUpperCase(),
                buildURL(f, e.params, e.paramsSerializer),
                !0
              ),
              (d.timeout = e.timeout),
              "onloadend" in d
                ? (d.onloadend = onloadend)
                : (d.onreadystatechange = function () {
                    d &&
                      4 === d.readyState &&
                      (0 !== d.status ||
                        (d.responseURL &&
                          0 === d.responseURL.indexOf("file:"))) &&
                      setTimeout(onloadend);
                  }),
              (d.onabort = function () {
                d &&
                  (n(
                    new AxiosError(
                      "Request aborted",
                      AxiosError.ECONNABORTED,
                      e,
                      d
                    )
                  ),
                  (d = null));
              }),
              (d.onerror = function () {
                n(
                  new AxiosError("Network Error", AxiosError.ERR_NETWORK, e, d)
                ),
                  (d = null);
              }),
              (d.ontimeout = function () {
                let r = e.timeout
                    ? "timeout of " + e.timeout + "ms exceeded"
                    : "timeout exceeded",
                  s = e.transitional || el;
                e.timeoutErrorMessage && (r = e.timeoutErrorMessage),
                  n(
                    new AxiosError(
                      r,
                      s.clarifyTimeoutError
                        ? AxiosError.ETIMEDOUT
                        : AxiosError.ECONNABORTED,
                      e,
                      d
                    )
                  ),
                  (d = null);
              }),
              em.hasStandardBrowserEnv &&
                (h && et.isFunction(h) && (h = h(e)), h || (!1 !== h && ew(f))))
            ) {
              let r =
                e.xsrfHeaderName &&
                e.xsrfCookieName &&
                eb.read(e.xsrfCookieName);
              r && u.set(e.xsrfHeaderName, r);
            }
            void 0 === l && u.setContentType(null),
              "setRequestHeader" in d &&
                et.forEach(u.toJSON(), function (e, r) {
                  d.setRequestHeader(r, e);
                }),
              et.isUndefined(e.withCredentials) ||
                (d.withCredentials = !!e.withCredentials),
              c && "json" !== c && (d.responseType = e.responseType),
              "function" == typeof e.onDownloadProgress &&
                d.addEventListener(
                  "progress",
                  progressEventReducer(e.onDownloadProgress, !0)
                ),
              "function" == typeof e.onUploadProgress &&
                d.upload &&
                d.upload.addEventListener(
                  "progress",
                  progressEventReducer(e.onUploadProgress)
                ),
              (e.cancelToken || e.signal) &&
                ((s = (r) => {
                  d &&
                    (n(!r || r.type ? new CanceledError(null, e, d) : r),
                    d.abort(),
                    (d = null));
                }),
                e.cancelToken && e.cancelToken.subscribe(s),
                e.signal &&
                  (e.signal.aborted
                    ? s()
                    : e.signal.addEventListener("abort", s)));
            let p = (function (e) {
              let r = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
              return (r && r[1]) || "";
            })(f);
            if (p && -1 === em.protocols.indexOf(p)) {
              n(
                new AxiosError(
                  "Unsupported protocol " + p + ":",
                  AxiosError.ERR_BAD_REQUEST,
                  e
                )
              );
              return;
            }
            d.send(l || null);
          });
        };
      let eE = { http: null, xhr: e_ };
      et.forEach(eE, (e, r) => {
        if (e) {
          try {
            Object.defineProperty(e, "name", { value: r });
          } catch (e) {}
          Object.defineProperty(e, "adapterName", { value: r });
        }
      });
      let renderReason = (e) => `- ${e}`,
        isResolvedHandle = (e) => et.isFunction(e) || null === e || !1 === e;
      var eS = {
        getAdapter: (e) => {
          let r, n;
          e = et.isArray(e) ? e : [e];
          let { length: s } = e,
            a = {};
          for (let l = 0; l < s; l++) {
            let s;
            if (
              ((n = r = e[l]),
              !isResolvedHandle(r) &&
                void 0 === (n = eE[(s = String(r)).toLowerCase()]))
            )
              throw new AxiosError(`Unknown adapter '${s}'`);
            if (n) break;
            a[s || "#" + l] = n;
          }
          if (!n) {
            let e = Object.entries(a).map(
                ([e, r]) =>
                  `adapter ${e} ` +
                  (!1 === r
                    ? "is not supported by the environment"
                    : "is not available in the build")
              ),
              r = s
                ? e.length > 1
                  ? "since :\n" + e.map(renderReason).join("\n")
                  : " " + renderReason(e[0])
                : "as no adapter specified";
            throw new AxiosError(
              "There is no suitable adapter to dispatch the request " + r,
              "ERR_NOT_SUPPORT"
            );
          }
          return n;
        },
        adapters: eE,
      };
      function throwIfCancellationRequested(e) {
        if (
          (e.cancelToken && e.cancelToken.throwIfRequested(),
          e.signal && e.signal.aborted)
        )
          throw new CanceledError(null, e);
      }
      function dispatchRequest(e) {
        throwIfCancellationRequested(e),
          (e.headers = AxiosHeaders.from(e.headers)),
          (e.data = transformData.call(e, e.transformRequest)),
          -1 !== ["post", "put", "patch"].indexOf(e.method) &&
            e.headers.setContentType("application/x-www-form-urlencoded", !1);
        let r = eS.getAdapter(e.adapter || ey.adapter);
        return r(e).then(
          function (r) {
            return (
              throwIfCancellationRequested(e),
              (r.data = transformData.call(e, e.transformResponse, r)),
              (r.headers = AxiosHeaders.from(r.headers)),
              r
            );
          },
          function (r) {
            return (
              !isCancel(r) &&
                (throwIfCancellationRequested(e),
                r &&
                  r.response &&
                  ((r.response.data = transformData.call(
                    e,
                    e.transformResponse,
                    r.response
                  )),
                  (r.response.headers = AxiosHeaders.from(
                    r.response.headers
                  )))),
              Promise.reject(r)
            );
          }
        );
      }
      let headersToObject = (e) => (e instanceof AxiosHeaders ? e.toJSON() : e);
      function mergeConfig(e, r) {
        r = r || {};
        let n = {};
        function getMergedValue(e, r, n) {
          return et.isPlainObject(e) && et.isPlainObject(r)
            ? et.merge.call({ caseless: n }, e, r)
            : et.isPlainObject(r)
            ? et.merge({}, r)
            : et.isArray(r)
            ? r.slice()
            : r;
        }
        function mergeDeepProperties(e, r, n) {
          return et.isUndefined(r)
            ? et.isUndefined(e)
              ? void 0
              : getMergedValue(void 0, e, n)
            : getMergedValue(e, r, n);
        }
        function valueFromConfig2(e, r) {
          if (!et.isUndefined(r)) return getMergedValue(void 0, r);
        }
        function defaultToConfig2(e, r) {
          return et.isUndefined(r)
            ? et.isUndefined(e)
              ? void 0
              : getMergedValue(void 0, e)
            : getMergedValue(void 0, r);
        }
        function mergeDirectKeys(n, s, a) {
          return a in r
            ? getMergedValue(n, s)
            : a in e
            ? getMergedValue(void 0, n)
            : void 0;
        }
        let s = {
          url: valueFromConfig2,
          method: valueFromConfig2,
          data: valueFromConfig2,
          baseURL: defaultToConfig2,
          transformRequest: defaultToConfig2,
          transformResponse: defaultToConfig2,
          paramsSerializer: defaultToConfig2,
          timeout: defaultToConfig2,
          timeoutMessage: defaultToConfig2,
          withCredentials: defaultToConfig2,
          withXSRFToken: defaultToConfig2,
          adapter: defaultToConfig2,
          responseType: defaultToConfig2,
          xsrfCookieName: defaultToConfig2,
          xsrfHeaderName: defaultToConfig2,
          onUploadProgress: defaultToConfig2,
          onDownloadProgress: defaultToConfig2,
          decompress: defaultToConfig2,
          maxContentLength: defaultToConfig2,
          maxBodyLength: defaultToConfig2,
          beforeRedirect: defaultToConfig2,
          transport: defaultToConfig2,
          httpAgent: defaultToConfig2,
          httpsAgent: defaultToConfig2,
          cancelToken: defaultToConfig2,
          socketPath: defaultToConfig2,
          responseEncoding: defaultToConfig2,
          validateStatus: mergeDirectKeys,
          headers: (e, r) =>
            mergeDeepProperties(headersToObject(e), headersToObject(r), !0),
        };
        return (
          et.forEach(Object.keys(Object.assign({}, e, r)), function (a) {
            let l = s[a] || mergeDeepProperties,
              u = l(e[a], r[a], a);
            (et.isUndefined(u) && l !== mergeDirectKeys) || (n[a] = u);
          }),
          n
        );
      }
      let eA = "1.6.7",
        eT = {};
      ["object", "boolean", "number", "function", "string", "symbol"].forEach(
        (e, r) => {
          eT[e] = function (n) {
            return typeof n === e || "a" + (r < 1 ? "n " : " ") + e;
          };
        }
      );
      let eO = {};
      eT.transitional = function (e, r, n) {
        function formatMessage(e, r) {
          return (
            "[Axios v" +
            eA +
            "] Transitional option '" +
            e +
            "'" +
            r +
            (n ? ". " + n : "")
          );
        }
        return (n, s, a) => {
          if (!1 === e)
            throw new AxiosError(
              formatMessage(s, " has been removed" + (r ? " in " + r : "")),
              AxiosError.ERR_DEPRECATED
            );
          return (
            r &&
              !eO[s] &&
              ((eO[s] = !0),
              console.warn(
                formatMessage(
                  s,
                  " has been deprecated since v" +
                    r +
                    " and will be removed in the near future"
                )
              )),
            !e || e(n, s, a)
          );
        };
      };
      var eP = {
        assertOptions: function (e, r, n) {
          if ("object" != typeof e)
            throw new AxiosError(
              "options must be an object",
              AxiosError.ERR_BAD_OPTION_VALUE
            );
          let s = Object.keys(e),
            a = s.length;
          for (; a-- > 0; ) {
            let l = s[a],
              u = r[l];
            if (u) {
              let r = e[l],
                n = void 0 === r || u(r, l, e);
              if (!0 !== n)
                throw new AxiosError(
                  "option " + l + " must be " + n,
                  AxiosError.ERR_BAD_OPTION_VALUE
                );
              continue;
            }
            if (!0 !== n)
              throw new AxiosError(
                "Unknown option " + l,
                AxiosError.ERR_BAD_OPTION
              );
          }
        },
        validators: eT,
      };
      let ej = eP.validators;
      let Axios = class Axios {
        constructor(e) {
          (this.defaults = e),
            (this.interceptors = { request: new ea(), response: new ea() });
        }
        async request(e, r) {
          try {
            return await this._request(e, r);
          } catch (e) {
            if (e instanceof Error) {
              let r;
              Error.captureStackTrace
                ? Error.captureStackTrace((r = {}))
                : (r = Error());
              let n = r.stack ? r.stack.replace(/^.+\n/, "") : "";
              e.stack
                ? n &&
                  !String(e.stack).endsWith(n.replace(/^.+\n.+\n/, "")) &&
                  (e.stack += "\n" + n)
                : (e.stack = n);
            }
            throw e;
          }
        }
        _request(e, r) {
          let n, s;
          "string" == typeof e ? ((r = r || {}).url = e) : (r = e || {}),
            (r = mergeConfig(this.defaults, r));
          let { transitional: a, paramsSerializer: l, headers: u } = r;
          void 0 !== a &&
            eP.assertOptions(
              a,
              {
                silentJSONParsing: ej.transitional(ej.boolean),
                forcedJSONParsing: ej.transitional(ej.boolean),
                clarifyTimeoutError: ej.transitional(ej.boolean),
              },
              !1
            ),
            null != l &&
              (et.isFunction(l)
                ? (r.paramsSerializer = { serialize: l })
                : eP.assertOptions(
                    l,
                    { encode: ej.function, serialize: ej.function },
                    !0
                  )),
            (r.method = (
              r.method ||
              this.defaults.method ||
              "get"
            ).toLowerCase());
          let c = u && et.merge(u.common, u[r.method]);
          u &&
            et.forEach(
              ["delete", "get", "head", "post", "put", "patch", "common"],
              (e) => {
                delete u[e];
              }
            ),
            (r.headers = AxiosHeaders.concat(c, u));
          let h = [],
            d = !0;
          this.interceptors.request.forEach(function (e) {
            ("function" != typeof e.runWhen || !1 !== e.runWhen(r)) &&
              ((d = d && e.synchronous), h.unshift(e.fulfilled, e.rejected));
          });
          let f = [];
          this.interceptors.response.forEach(function (e) {
            f.push(e.fulfilled, e.rejected);
          });
          let p = 0;
          if (!d) {
            let e = [dispatchRequest.bind(this), void 0];
            for (
              e.unshift.apply(e, h),
                e.push.apply(e, f),
                s = e.length,
                n = Promise.resolve(r);
              p < s;

            )
              n = n.then(e[p++], e[p++]);
            return n;
          }
          s = h.length;
          let m = r;
          for (p = 0; p < s; ) {
            let e = h[p++],
              r = h[p++];
            try {
              m = e(m);
            } catch (e) {
              r.call(this, e);
              break;
            }
          }
          try {
            n = dispatchRequest.call(this, m);
          } catch (e) {
            return Promise.reject(e);
          }
          for (p = 0, s = f.length; p < s; ) n = n.then(f[p++], f[p++]);
          return n;
        }
        getUri(e) {
          e = mergeConfig(this.defaults, e);
          let r = buildFullPath(e.baseURL, e.url);
          return buildURL(r, e.params, e.paramsSerializer);
        }
      };
      et.forEach(["delete", "get", "head", "options"], function (e) {
        Axios.prototype[e] = function (r, n) {
          return this.request(
            mergeConfig(n || {}, { method: e, url: r, data: (n || {}).data })
          );
        };
      }),
        et.forEach(["post", "put", "patch"], function (e) {
          function generateHTTPMethod(r) {
            return function (n, s, a) {
              return this.request(
                mergeConfig(a || {}, {
                  method: e,
                  headers: r ? { "Content-Type": "multipart/form-data" } : {},
                  url: n,
                  data: s,
                })
              );
            };
          }
          (Axios.prototype[e] = generateHTTPMethod()),
            (Axios.prototype[e + "Form"] = generateHTTPMethod(!0));
        });
      let CancelToken = class CancelToken {
        constructor(e) {
          let r;
          if ("function" != typeof e)
            throw TypeError("executor must be a function.");
          this.promise = new Promise(function (e) {
            r = e;
          });
          let n = this;
          this.promise.then((e) => {
            if (!n._listeners) return;
            let r = n._listeners.length;
            for (; r-- > 0; ) n._listeners[r](e);
            n._listeners = null;
          }),
            (this.promise.then = (e) => {
              let r;
              let s = new Promise((e) => {
                n.subscribe(e), (r = e);
              }).then(e);
              return (
                (s.cancel = function () {
                  n.unsubscribe(r);
                }),
                s
              );
            }),
            e(function (e, s, a) {
              n.reason ||
                ((n.reason = new CanceledError(e, s, a)), r(n.reason));
            });
        }
        throwIfRequested() {
          if (this.reason) throw this.reason;
        }
        subscribe(e) {
          if (this.reason) {
            e(this.reason);
            return;
          }
          this._listeners ? this._listeners.push(e) : (this._listeners = [e]);
        }
        unsubscribe(e) {
          if (!this._listeners) return;
          let r = this._listeners.indexOf(e);
          -1 !== r && this._listeners.splice(r, 1);
        }
        static source() {
          let e;
          let r = new CancelToken(function (r) {
            e = r;
          });
          return { token: r, cancel: e };
        }
      };
      let ek = {
        Continue: 100,
        SwitchingProtocols: 101,
        Processing: 102,
        EarlyHints: 103,
        Ok: 200,
        Created: 201,
        Accepted: 202,
        NonAuthoritativeInformation: 203,
        NoContent: 204,
        ResetContent: 205,
        PartialContent: 206,
        MultiStatus: 207,
        AlreadyReported: 208,
        ImUsed: 226,
        MultipleChoices: 300,
        MovedPermanently: 301,
        Found: 302,
        SeeOther: 303,
        NotModified: 304,
        UseProxy: 305,
        Unused: 306,
        TemporaryRedirect: 307,
        PermanentRedirect: 308,
        BadRequest: 400,
        Unauthorized: 401,
        PaymentRequired: 402,
        Forbidden: 403,
        NotFound: 404,
        MethodNotAllowed: 405,
        NotAcceptable: 406,
        ProxyAuthenticationRequired: 407,
        RequestTimeout: 408,
        Conflict: 409,
        Gone: 410,
        LengthRequired: 411,
        PreconditionFailed: 412,
        PayloadTooLarge: 413,
        UriTooLong: 414,
        UnsupportedMediaType: 415,
        RangeNotSatisfiable: 416,
        ExpectationFailed: 417,
        ImATeapot: 418,
        MisdirectedRequest: 421,
        UnprocessableEntity: 422,
        Locked: 423,
        FailedDependency: 424,
        TooEarly: 425,
        UpgradeRequired: 426,
        PreconditionRequired: 428,
        TooManyRequests: 429,
        RequestHeaderFieldsTooLarge: 431,
        UnavailableForLegalReasons: 451,
        InternalServerError: 500,
        NotImplemented: 501,
        BadGateway: 502,
        ServiceUnavailable: 503,
        GatewayTimeout: 504,
        HttpVersionNotSupported: 505,
        VariantAlsoNegotiates: 506,
        InsufficientStorage: 507,
        LoopDetected: 508,
        NotExtended: 510,
        NetworkAuthenticationRequired: 511,
      };
      Object.entries(ek).forEach(([e, r]) => {
        ek[r] = e;
      });
      let eC = (function createInstance(e) {
        let r = new Axios(e),
          n = bind(Axios.prototype.request, r);
        return (
          et.extend(n, Axios.prototype, r, { allOwnKeys: !0 }),
          et.extend(n, r, null, { allOwnKeys: !0 }),
          (n.create = function (r) {
            return createInstance(mergeConfig(e, r));
          }),
          n
        );
      })(ey);
      (eC.Axios = Axios),
        (eC.CanceledError = CanceledError),
        (eC.CancelToken = CancelToken),
        (eC.isCancel = isCancel),
        (eC.VERSION = eA),
        (eC.toFormData = helpers_toFormData),
        (eC.AxiosError = AxiosError),
        (eC.Cancel = eC.CanceledError),
        (eC.all = function (e) {
          return Promise.all(e);
        }),
        (eC.spread = function (e) {
          return function (r) {
            return e.apply(null, r);
          };
        }),
        (eC.isAxiosError = function (e) {
          return et.isObject(e) && !0 === e.isAxiosError;
        }),
        (eC.mergeConfig = mergeConfig),
        (eC.AxiosHeaders = AxiosHeaders),
        (eC.formToJSON = (e) =>
          helpers_formDataToJSON(et.isHTMLForm(e) ? new FormData(e) : e)),
        (eC.getAdapter = eS.getAdapter),
        (eC.HttpStatusCode = ek),
        (eC.default = eC);
      var eR = n(53346),
        eD = n.n(eR),
        eB = n(80129),
        eF = n.n(eB),
        eI = n(25751),
        eV = n.n(eI),
        eL = n(21501),
        eM = n.n(eL),
        eN = n(8146),
        eU = n.n(eN);
      function ownKeys(e, r) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(e);
          r &&
            (s = s.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            n.push.apply(n, s);
        }
        return n;
      }
      function _objectSpread2(e) {
        for (var r = 1; r < arguments.length; r++) {
          var n = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? ownKeys(Object(n), !0).forEach(function (r) {
                var s, a;
                (s = r),
                  (a = n[r]),
                  (s = (function (e) {
                    var r = (function (e, r) {
                      if ("object" != typeof e || null === e) return e;
                      var n = e[Symbol.toPrimitive];
                      if (void 0 !== n) {
                        var s = n.call(e, r || "default");
                        if ("object" != typeof s) return s;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      }
                      return ("string" === r ? String : Number)(e);
                    })(e, "string");
                    return "symbol" == typeof r ? r : String(r);
                  })(s)) in e
                    ? Object.defineProperty(e, s, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (e[s] = a);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : ownKeys(Object(n)).forEach(function (r) {
                Object.defineProperty(
                  e,
                  r,
                  Object.getOwnPropertyDescriptor(n, r)
                );
              });
        }
        return e;
      }
      function _typeof(e) {
        return (_typeof =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function _wrapRegExp() {
        _wrapRegExp = function (e, r) {
          return new BabelRegExp(e, void 0, r);
        };
        var e = RegExp.prototype,
          r = new WeakMap();
        function BabelRegExp(e, n, s) {
          var a = new RegExp(e, n);
          return (
            r.set(a, s || r.get(e)), _setPrototypeOf(a, BabelRegExp.prototype)
          );
        }
        function buildGroups(e, n) {
          var s = r.get(n);
          return Object.keys(s).reduce(function (r, n) {
            var a = s[n];
            if ("number" == typeof a) r[n] = e[a];
            else {
              for (var l = 0; void 0 === e[a[l]] && l + 1 < a.length; ) l++;
              r[n] = e[a[l]];
            }
            return r;
          }, Object.create(null));
        }
        return (
          (function (e, r) {
            if ("function" != typeof r && null !== r)
              throw TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(r && r.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(e, "prototype", { writable: !1 }),
              r && _setPrototypeOf(e, r);
          })(BabelRegExp, RegExp),
          (BabelRegExp.prototype.exec = function (r) {
            var n = e.exec.call(this, r);
            if (n) {
              n.groups = buildGroups(n, this);
              var s = n.indices;
              s && (s.groups = buildGroups(s, this));
            }
            return n;
          }),
          (BabelRegExp.prototype[Symbol.replace] = function (n, s) {
            if ("string" == typeof s) {
              var a = r.get(this);
              return e[Symbol.replace].call(
                this,
                n,
                s.replace(/\$<([^>]+)>/g, function (e, r) {
                  var n = a[r];
                  return "$" + (Array.isArray(n) ? n.join("$") : n);
                })
              );
            }
            if ("function" == typeof s) {
              var l = this;
              return e[Symbol.replace].call(this, n, function () {
                var e = arguments;
                return (
                  "object" != typeof e[e.length - 1] &&
                    (e = [].slice.call(e)).push(buildGroups(e, l)),
                  s.apply(this, e)
                );
              });
            }
            return e[Symbol.replace].call(this, n, s);
          }),
          _wrapRegExp.apply(this, arguments)
        );
      }
      function _setPrototypeOf(e, r) {
        return (_setPrototypeOf = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (e, r) {
              return (e.__proto__ = r), e;
            })(e, r);
      }
      function _unsupportedIterableToArray(e, r) {
        if (e) {
          if ("string" == typeof e) return _arrayLikeToArray(e, r);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          if (
            ("Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n)
          )
            return Array.from(e);
          if (
            "Arguments" === n ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          )
            return _arrayLikeToArray(e, r);
        }
      }
      function _arrayLikeToArray(e, r) {
        (null == r || r > e.length) && (r = e.length);
        for (var n = 0, s = Array(r); n < r; n++) s[n] = e[n];
        return s;
      }
      function index_es_modules_noop() {}
      n(83454);
      var e$ = _wrapRegExp(/(\d+)(%)/, { value: 1 });
      function calculateLimit(e) {
        var r =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 7,
          n = r;
        if (e$.test(e)) {
          var s,
            a = null === (s = e.match(e$)) || void 0 === s ? void 0 : s.groups;
          a && a.value && (n = Math.round(r * (parseInt(a.value) / 100)));
        }
        return Math.min(30, Math.max(1, n));
      }
      function createThrottle(e, r) {
        return (
          r("info", "Throttle request to ".concat(e, "/s")),
          eM()({ limit: e, interval: 1e3, strict: !1 })
        );
      }
      var rateLimitThrottle = function (e) {
          var r =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "auto",
            n = e.defaults.logHandler,
            s = void 0 === n ? index_es_modules_noop : n,
            a = eV()(r) ? calculateLimit(r) : calculateLimit("auto", r),
            l = createThrottle(a, s),
            u = !1,
            c = e.interceptors.request.use(
              function (e) {
                return l(function () {
                  return e;
                })();
              },
              function (e) {
                return Promise.reject(e);
              }
            ),
            h = e.interceptors.response.use(
              function (n) {
                if (
                  !u &&
                  eV()(r) &&
                  ("auto" === r || e$.test(r)) &&
                  n.headers &&
                  n.headers["x-contentful-ratelimit-second-limit"]
                ) {
                  var h = calculateLimit(
                    r,
                    parseInt(n.headers["x-contentful-ratelimit-second-limit"])
                  );
                  h !== a &&
                    (c && e.interceptors.request.eject(c),
                    (a = h),
                    (l = createThrottle(h, s)),
                    (c = e.interceptors.request.use(
                      function (e) {
                        return l(function () {
                          return e;
                        })();
                      },
                      function (e) {
                        return Promise.reject(e);
                      }
                    ))),
                    (u = !0);
                }
                return n;
              },
              function (e) {
                return Promise.reject(e);
              }
            );
          return function () {
            e.interceptors.request.eject(c), e.interceptors.response.eject(h);
          };
        },
        eq = /^(?!\w+:\/\/)([^\s:]+\.?[^\s:]+)(?::(\d+))?(?!:)$/;
      function createRequestConfig(e) {
        var r = e.query,
          n = {};
        return delete r.resolveLinks, (n.params = eD()(r)), n;
      }
      function freezeSys(e) {
        return (
          !(function deepFreeze(e) {
            var r,
              n = (function (e, r) {
                var n =
                  ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
                if (!n) {
                  if (
                    Array.isArray(e) ||
                    (n = _unsupportedIterableToArray(e))
                  ) {
                    n && (e = n);
                    var s = 0,
                      F = function () {};
                    return {
                      s: F,
                      n: function () {
                        return s >= e.length
                          ? { done: !0 }
                          : { done: !1, value: e[s++] };
                      },
                      e: function (e) {
                        throw e;
                      },
                      f: F,
                    };
                  }
                  throw TypeError(
                    "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                  );
                }
                var a,
                  l = !0,
                  u = !1;
                return {
                  s: function () {
                    n = n.call(e);
                  },
                  n: function () {
                    var e = n.next();
                    return (l = e.done), e;
                  },
                  e: function (e) {
                    (u = !0), (a = e);
                  },
                  f: function () {
                    try {
                      l || null == n.return || n.return();
                    } finally {
                      if (u) throw a;
                    }
                  },
                };
              })(Object.getOwnPropertyNames(e));
            try {
              for (n.s(); !(r = n.n()).done; ) {
                var s = e[r.value];
                s && "object" === _typeof(s) && deepFreeze(s);
              }
            } catch (e) {
              n.e(e);
            } finally {
              n.f();
            }
            return Object.freeze(e);
          })(e.sys || {}),
          e
        );
      }
      function getBrowserOS() {
        var e = window;
        if (!e) return null;
        var r = e.navigator.userAgent,
          n = e.navigator.platform;
        return -1 !== ["Macintosh", "MacIntel", "MacPPC", "Mac68K"].indexOf(n)
          ? "macOS"
          : -1 !== ["iPhone", "iPad", "iPod"].indexOf(n)
          ? "iOS"
          : -1 !== ["Win32", "Win64", "Windows", "WinCE"].indexOf(n)
          ? "Windows"
          : /Android/.test(r)
          ? "Android"
          : /Linux/.test(n)
          ? "Linux"
          : null;
      }
      function toPlainObject(e) {
        return Object.defineProperty(e, "toPlainObject", {
          enumerable: !1,
          configurable: !1,
          writable: !1,
          value: function () {
            return eD()(this);
          },
        });
      }
      function errorHandler(e) {
        var r,
          n,
          s = e.config,
          a = e.response;
        if (s && s.headers && s.headers.Authorization) {
          var l = "...".concat(s.headers.Authorization.toString().substr(-5));
          s.headers.Authorization = "Bearer ".concat(l);
        }
        if (!eU()(a) || !eU()(s)) throw e;
        var u = null == a ? void 0 : a.data,
          c = {
            status: null == a ? void 0 : a.status,
            statusText: null == a ? void 0 : a.statusText,
            message: "",
            details: {},
          };
        eU()(s) &&
          (c.request = {
            url: s.url,
            headers: s.headers,
            method: s.method,
            payloadData: s.data,
          }),
          u &&
            eU()(u) &&
            ("requestId" in u && (c.requestId = u.requestId || "UNKNOWN"),
            "message" in u && (c.message = u.message || ""),
            "details" in u && (c.details = u.details || {}),
            "sys" in u && "id" in u.sys && (r = u.sys.id));
        var h = Error();
        h.name =
          r && "Unknown" !== r
            ? r
            : ""
                .concat(null == a ? void 0 : a.status, " ")
                .concat(null == a ? void 0 : a.statusText);
        try {
          h.message = JSON.stringify(c, null, "  ");
        } catch (e) {
          h.message =
            null !== (n = null == c ? void 0 : c.message) && void 0 !== n
              ? n
              : "";
        }
        throw h;
      }
      function wrapSpace(e) {
        return freezeSys(toPlainObject(e));
      }
      var ez = n(64530),
        eH = n.n(ez);
      function mixinStringifySafe(e) {
        return Object.defineProperty(e, "stringifySafe", {
          enumerable: !1,
          configurable: !1,
          writable: !1,
          value: function () {
            let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : null,
              r =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : "";
            return eH()(this, e, r, (e, r) => ({
              sys: {
                type: "Link",
                linkType: "Entry",
                id: r.sys.id,
                circular: !0,
              },
            }));
          },
        });
      }
      var eW =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              },
        esm_slicedToArray = function (e, r) {
          if (Array.isArray(e)) return e;
          if (Symbol.iterator in Object(e))
            return (function (e, r) {
              var n = [],
                s = !0,
                a = !1,
                l = void 0;
              try {
                for (
                  var u, c = e[Symbol.iterator]();
                  !(s = (u = c.next()).done) &&
                  (n.push(u.value), !r || n.length !== r);
                  s = !0
                );
              } catch (e) {
                (a = !0), (l = e);
              } finally {
                try {
                  !s && c.return && c.return();
                } finally {
                  if (a) throw l;
                }
              }
              return n;
            })(e, r);
          throw TypeError(
            "Invalid attempt to destructure non-iterable instance"
          );
        };
      function _toConsumableArray(e) {
        if (!Array.isArray(e)) return Array.from(e);
        for (var r = 0, n = Array(e.length); r < e.length; r++) n[r] = e[r];
        return n;
      }
      var eK = {},
        lookupInEntityMap = function (e, r) {
          var n = r.entryId,
            s = r.linkType,
            a = r.spaceId,
            l = r.environmentId;
          return a && l
            ? e.get(a + "!" + l + "!" + s + "!" + n)
            : e.get(s + "!" + n);
        },
        getIdsFromUrn = function (e) {
          var r =
            /.*:spaces\/([^/]+)(?:\/environments\/([^/]+))?\/entries\/([^/]+)$/;
          if (r.test(e)) {
            var n = esm_slicedToArray(e.match(r), 4),
              s = (n[0], n[1]),
              a = n[2];
            return {
              spaceId: s,
              environmentId: void 0 === a ? "master" : a,
              entryId: n[3],
            };
          }
        },
        getResolvedLink = function (e, r) {
          var n = r.sys,
            s = n.type,
            a = n.linkType;
          if ("ResourceLink" === s) {
            var l = getIdsFromUrn(r.sys.urn),
              u = l.spaceId,
              c = l.environmentId,
              h = l.entryId;
            return (
              lookupInEntityMap(e, {
                linkType: a.split(":")[1],
                entryId: h,
                spaceId: u,
                environmentId: c,
              }) || eK
            );
          }
          return lookupInEntityMap(e, { linkType: a, entryId: r.sys.id }) || eK;
        },
        cleanUpLinks = function (e) {
          if (Array.isArray(e))
            return e.filter(function (e) {
              return e !== eK;
            });
          for (var r in e) e[r] === eK && delete e[r];
          return e;
        },
        walkMutate = function walkMutate(e, r, n, s) {
          if (r(e)) return n(e);
          if (e && (void 0 === e ? "undefined" : eW(e)) === "object") {
            for (var a in e)
              e.hasOwnProperty(a) && (e[a] = walkMutate(e[a], r, n, s));
            s && (e = cleanUpLinks(e));
          }
          return e;
        },
        normalizeLink = function (e, r, n) {
          var s = getResolvedLink(e, r);
          return s === eK ? (n ? s : r) : s;
        },
        esm = function (e, r) {
          if (((r = r || {}), !e.items)) return [];
          var n = eD()(e),
            s = Object.keys(n.includes || {}).reduce(function (r, n) {
              return [].concat(
                _toConsumableArray(r),
                _toConsumableArray(e.includes[n])
              );
            }, []),
            a = []
              .concat(_toConsumableArray(n.items), _toConsumableArray(s))
              .filter(function (e) {
                return !!e.sys;
              }),
            l = new Map(
              a.reduce(function (e, r) {
                var n,
                  s = (
                    (n = r.sys).space && n.environment
                      ? [
                          n.type + "!" + n.id,
                          n.space.sys.id +
                            "!" +
                            n.environment.sys.id +
                            "!" +
                            n.type +
                            "!" +
                            n.id,
                        ]
                      : [n.type + "!" + n.id]
                  ).map(function (e) {
                    return [e, r];
                  });
                return e.push.apply(e, _toConsumableArray(s)), e;
              }, [])
            );
          return (
            a.forEach(function (e) {
              var n,
                s = Array.isArray((n = r.itemEntryPoints))
                  ? Object.keys(e)
                      .filter(function (e) {
                        return -1 !== n.indexOf(e);
                      })
                      .reduce(function (r, n) {
                        return (r[n] = e[n]), r;
                      }, {})
                  : e;
              Object.assign(
                e,
                walkMutate(
                  s,
                  function (e) {
                    return (
                      (e && e.sys && "Link" === e.sys.type) ||
                      (e && e.sys && "ResourceLink" === e.sys.type)
                    );
                  },
                  function (e) {
                    return normalizeLink(l, e, r.removeUnresolved);
                  },
                  r.removeUnresolved
                )
              );
            }),
            n.items
          );
        };
      function wrapEntry(e) {
        return freezeSys(toPlainObject(eD()(e)));
      }
      function wrapEntryCollection(e, r) {
        let { resolveLinks: n, removeUnresolved: s } = r,
          a = mixinStringifySafe(toPlainObject(eD()(e)));
        return (
          n &&
            (a.items = esm(a, {
              removeUnresolved: s,
              itemEntryPoints: ["fields"],
            })),
          freezeSys(a)
        );
      }
      function wrapAsset(e) {
        return freezeSys(toPlainObject(eD()(e)));
      }
      function wrapAssetCollection(e) {
        return freezeSys(toPlainObject(eD()(e)));
      }
      function wrapAssetKey(e) {
        return freezeSys(toPlainObject(eD()(e)));
      }
      function wrapContentType(e) {
        return freezeSys(toPlainObject(eD()(e)));
      }
      function wrapContentTypeCollection(e) {
        return freezeSys(toPlainObject(eD()(e)));
      }
      function wrapLocale(e) {
        return freezeSys(toPlainObject(eD()(e)));
      }
      function wrapLocaleCollection(e) {
        return freezeSys(toPlainObject(eD()(e)));
      }
      function wrapTag(e) {
        return freezeSys(toPlainObject(eD()(e)));
      }
      function wrapTagCollection(e) {
        return freezeSys(toPlainObject(eD()(e)));
      }
      var eG = {
        space: c,
        entry: h,
        asset: d,
        assetKey: f,
        contentType: p,
        locale: m,
        tag: y,
      };
      function paged_sync_ownKeys(e, r) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(e);
          r &&
            (s = s.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            n.push.apply(n, s);
        }
        return n;
      }
      function _objectSpread(e) {
        for (var r = 1; r < arguments.length; r++) {
          var n = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? paged_sync_ownKeys(Object(n), !0).forEach(function (r) {
                var s, a;
                (s = r),
                  (a = n[r]),
                  (s = (function (e) {
                    var r = (function (e, r) {
                      if ("object" != typeof e || null === e) return e;
                      var n = e[Symbol.toPrimitive];
                      if (void 0 !== n) {
                        var s = n.call(e, r || "default");
                        if ("object" != typeof s) return s;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      }
                      return ("string" === r ? String : Number)(e);
                    })(e, "string");
                    return "symbol" == typeof r ? r : String(r);
                  })(s)) in e
                    ? Object.defineProperty(e, s, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (e[s] = a);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : paged_sync_ownKeys(Object(n)).forEach(function (r) {
                Object.defineProperty(
                  e,
                  r,
                  Object.getOwnPropertyDescriptor(n, r)
                );
              });
        }
        return e;
      }
      async function pagedSync(e, r) {
        let n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        if (!r || (!r.initial && !r.nextSyncToken && !r.nextPageToken))
          throw Error(
            "Please provide one of `initial`, `nextSyncToken` or `nextPageToken` parameters for syncing"
          );
        if (r && r.content_type && !r.type) r.type = "Entry";
        else if (r && r.content_type && r.type && "Entry" !== r.type)
          throw Error(
            "When using the `content_type` filter your `type` parameter cannot be different from `Entry`."
          );
        let {
            resolveLinks: s,
            removeUnresolved: a,
            paginate: l,
          } = _objectSpread(
            _objectSpread(
              {},
              { resolveLinks: !0, removeUnresolved: !1, paginate: !0 }
            ),
            n
          ),
          u = await getSyncPage(e, [], r, { paginate: l });
        s &&
          (u.items = esm(u, {
            removeUnresolved: a,
            itemEntryPoints: ["fields"],
          }));
        let c = (function (e) {
          let reducer = (e) => (r, n) => (
            n.sys.type === e && r.push(toPlainObject(n)), r
          );
          return {
            entries: e.reduce(reducer("Entry"), []),
            assets: e.reduce(reducer("Asset"), []),
            deletedEntries: e.reduce(reducer("DeletedEntry"), []),
            deletedAssets: e.reduce(reducer("DeletedAsset"), []),
          };
        })(u.items);
        return (
          u.nextSyncToken && (c.nextSyncToken = u.nextSyncToken),
          u.nextPageToken && (c.nextPageToken = u.nextPageToken),
          freezeSys(mixinStringifySafe(toPlainObject(c)))
        );
      }
      async function getSyncPage(e, r, n, s) {
        let { paginate: a } = s;
        n.nextSyncToken &&
          ((n.sync_token = n.nextSyncToken), delete n.nextSyncToken),
          n.nextPageToken &&
            ((n.sync_token = n.nextPageToken), delete n.nextPageToken),
          n.sync_token &&
            (delete n.initial,
            delete n.type,
            delete n.content_type,
            delete n.limit);
        let l = await e.get("sync", createRequestConfig({ query: n })),
          u = l.data || {};
        return ((r = r.concat(u.items || [])), u.nextPageUrl)
          ? a
            ? (delete n.initial,
              (n.sync_token = getToken(u.nextPageUrl)),
              getSyncPage(e, r, n, { paginate: a }))
            : { items: r, nextPageToken: getToken(u.nextPageUrl) }
          : u.nextSyncUrl
          ? { items: r, nextSyncToken: getToken(u.nextSyncUrl) }
          : { items: [] };
      }
      function getToken(e) {
        let r = e.split("?");
        return r.length > 0 ? r[1].replace("sync_token=", "") : "";
      }
      function normalize_select_ownKeys(e, r) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(e);
          r &&
            (s = s.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            n.push.apply(n, s);
        }
        return n;
      }
      function normalize_select_objectSpread(e) {
        for (var r = 1; r < arguments.length; r++) {
          var n = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? normalize_select_ownKeys(Object(n), !0).forEach(function (r) {
                var s, a;
                (s = r),
                  (a = n[r]),
                  (s = (function (e) {
                    var r = (function (e, r) {
                      if ("object" != typeof e || null === e) return e;
                      var n = e[Symbol.toPrimitive];
                      if (void 0 !== n) {
                        var s = n.call(e, r || "default");
                        if ("object" != typeof s) return s;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      }
                      return ("string" === r ? String : Number)(e);
                    })(e, "string");
                    return "symbol" == typeof r ? r : String(r);
                  })(s)) in e
                    ? Object.defineProperty(e, s, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (e[s] = a);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : normalize_select_ownKeys(Object(n)).forEach(function (r) {
                Object.defineProperty(
                  e,
                  r,
                  Object.getOwnPropertyDescriptor(n, r)
                );
              });
        }
        return e;
      }
      function normalizeSelect(e) {
        if (!e.select) return e;
        let r = Array.isArray(e.select)
            ? e.select
            : e.select.split(",").map((e) => e.trim()),
          n = new Set(r);
        return n.has("sys")
          ? e
          : (n.add("sys.id"),
            n.add("sys.type"),
            normalize_select_objectSpread(
              normalize_select_objectSpread({}, e),
              {},
              { select: [...n].join(",") }
            ));
      }
      let ValidationError = class ValidationError extends Error {
        constructor(e, r) {
          super(`Invalid "${e}" provided, ` + r),
            (this.name = "ValidationError");
        }
      };
      function create_contentful_api_ownKeys(e, r) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(e);
          r &&
            (s = s.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            n.push.apply(n, s);
        }
        return n;
      }
      function create_contentful_api_objectSpread(e) {
        for (var r = 1; r < arguments.length; r++) {
          var n = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? create_contentful_api_ownKeys(Object(n), !0).forEach(function (
                r
              ) {
                var s, a;
                (s = r),
                  (a = n[r]),
                  (s = (function (e) {
                    var r = (function (e, r) {
                      if ("object" != typeof e || null === e) return e;
                      var n = e[Symbol.toPrimitive];
                      if (void 0 !== n) {
                        var s = n.call(e, r || "default");
                        if ("object" != typeof s) return s;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      }
                      return ("string" === r ? String : Number)(e);
                    })(e, "string");
                    return "symbol" == typeof r ? r : String(r);
                  })(s)) in e
                    ? Object.defineProperty(e, s, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (e[s] = a);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : create_contentful_api_ownKeys(Object(n)).forEach(function (r) {
                Object.defineProperty(
                  e,
                  r,
                  Object.getOwnPropertyDescriptor(n, r)
                );
              });
        }
        return e;
      }
      function contentful_ownKeys(e, r) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(e);
          r &&
            (s = s.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable;
            })),
            n.push.apply(n, s);
        }
        return n;
      }
      function contentful_objectSpread(e) {
        for (var r = 1; r < arguments.length; r++) {
          var n = null != arguments[r] ? arguments[r] : {};
          r % 2
            ? contentful_ownKeys(Object(n), !0).forEach(function (r) {
                var s, a;
                (s = r),
                  (a = n[r]),
                  (s = (function (e) {
                    var r = (function (e, r) {
                      if ("object" != typeof e || null === e) return e;
                      var n = e[Symbol.toPrimitive];
                      if (void 0 !== n) {
                        var s = n.call(e, r || "default");
                        if ("object" != typeof s) return s;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      }
                      return ("string" === r ? String : Number)(e);
                    })(e, "string");
                    return "symbol" == typeof r ? r : String(r);
                  })(s)) in e
                    ? Object.defineProperty(e, s, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (e[s] = a);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : contentful_ownKeys(Object(n)).forEach(function (r) {
                Object.defineProperty(
                  e,
                  r,
                  Object.getOwnPropertyDescriptor(n, r)
                );
              });
        }
        return e;
      }
      async function getAnimationsHandle() {
        let e = (function (e) {
            var r;
            if (!e.accessToken)
              throw TypeError("Expected parameter accessToken");
            if (!e.space) throw TypeError("Expected parameter space");
            let n = contentful_objectSpread(
                contentful_objectSpread(
                  {},
                  {
                    resolveLinks: !0,
                    removeUnresolved: !1,
                    defaultHostname: "cdn.contentful.com",
                    environment: "master",
                  }
                ),
                e
              ),
              s = (function (e, r, n, s) {
                var a = [];
                r && a.push("app ".concat(r)),
                  n && a.push("integration ".concat(n)),
                  s && a.push("feature " + s),
                  a.push("sdk ".concat(e));
                var l = null;
                try {
                  "undefined" != typeof window &&
                  "navigator" in window &&
                  "product" in window.navigator &&
                  "ReactNative" === window.navigator.product
                    ? ((l = getBrowserOS()), a.push("platform ReactNative"))
                    : ((l = getBrowserOS()), a.push("platform browser"));
                } catch (e) {
                  l = null;
                }
                return (
                  l && a.push("os ".concat(l)),
                  "".concat(
                    a
                      .filter(function (e) {
                        return "" !== e;
                      })
                      .join("; "),
                    ";"
                  )
                );
              })("contentful.js/9.3.6", n.application, n.integration);
            n.headers = contentful_objectSpread(
              contentful_objectSpread({}, n.headers),
              {},
              {
                "Content-Type": "application/vnd.contentful.delivery.v1+json",
                "X-Contentful-User-Agent": s,
              }
            );
            let a = (function createHttpClient(e, r) {
                var n = _objectSpread2(
                  _objectSpread2(
                    {},
                    {
                      insecure: !1,
                      retryOnError: !0,
                      logHandler: function (e, r) {
                        if ("error" === e && r) {
                          var n = [r.name, r.message]
                            .filter(function (e) {
                              return e;
                            })
                            .join(" - ");
                          console.error("[error] ".concat(n)), console.error(r);
                          return;
                        }
                        console.log("[".concat(e, "] ").concat(r));
                      },
                      headers: {},
                      httpAgent: !1,
                      httpsAgent: !1,
                      timeout: 3e4,
                      throttle: 0,
                      proxy: !1,
                      basePath: "",
                      adapter: void 0,
                      maxContentLength: 1073741824,
                      maxBodyLength: 1073741824,
                    }
                  ),
                  r
                );
                if (!n.accessToken) {
                  var s = TypeError("Expected parameter accessToken");
                  throw (n.logHandler("error", s), s);
                }
                var a = n.insecure ? "http" : "https",
                  l = n.space ? "".concat(n.space, "/") : "",
                  u = n.defaultHostname,
                  c = n.insecure ? 80 : 443;
                if (n.host && eq.test(n.host)) {
                  var h = n.host.split(":");
                  if (2 === h.length) {
                    var d =
                      (function (e) {
                        if (Array.isArray(e)) return e;
                      })(h) ||
                      (function (e, r) {
                        var n =
                          null == e
                            ? null
                            : ("undefined" != typeof Symbol &&
                                e[Symbol.iterator]) ||
                              e["@@iterator"];
                        if (null != n) {
                          var s,
                            a,
                            l,
                            u,
                            c = [],
                            h = !0,
                            d = !1;
                          try {
                            if (((l = (n = n.call(e)).next), 0 === r)) {
                              if (Object(n) !== n) return;
                              h = !1;
                            } else
                              for (
                                ;
                                !(h = (s = l.call(n)).done) &&
                                (c.push(s.value), c.length !== r);
                                h = !0
                              );
                          } catch (e) {
                            (d = !0), (a = e);
                          } finally {
                            try {
                              if (
                                !h &&
                                null != n.return &&
                                ((u = n.return()), Object(u) !== u)
                              )
                                return;
                            } finally {
                              if (d) throw a;
                            }
                          }
                          return c;
                        }
                      })(h, 2) ||
                      _unsupportedIterableToArray(h, 2) ||
                      (function () {
                        throw TypeError(
                          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                        );
                      })();
                    (u = d[0]), (c = d[1]);
                  } else u = h[0];
                }
                n.basePath &&
                  (n.basePath = "/".concat(
                    n.basePath.split("/").filter(Boolean).join("/")
                  ));
                var f =
                  r.baseURL ||
                  ""
                    .concat(a, "://")
                    .concat(u, ":")
                    .concat(c)
                    .concat(n.basePath, "/spaces/")
                    .concat(l);
                n.headers.Authorization ||
                  "function" == typeof n.accessToken ||
                  (n.headers.Authorization = "Bearer " + n.accessToken);
                var p = {
                    baseURL: f,
                    headers: n.headers,
                    httpAgent: n.httpAgent,
                    httpsAgent: n.httpsAgent,
                    paramsSerializer: eF().stringify,
                    proxy: n.proxy,
                    timeout: n.timeout,
                    adapter: n.adapter,
                    maxContentLength: n.maxContentLength,
                    maxBodyLength: n.maxBodyLength,
                    logHandler: n.logHandler,
                    responseLogger: n.responseLogger,
                    requestLogger: n.requestLogger,
                    retryOnError: n.retryOnError,
                  },
                  m = e.create(p);
                return (
                  (m.httpClientParams = r),
                  (m.cloneWithNewParams = function (n) {
                    return createHttpClient(
                      e,
                      _objectSpread2(_objectSpread2({}, eD()(r)), n)
                    );
                  }),
                  n.onBeforeRequest &&
                    m.interceptors.request.use(n.onBeforeRequest),
                  "function" == typeof n.accessToken &&
                    (function (e, r) {
                      e.interceptors.request.use(function (e) {
                        return r().then(function (r) {
                          return (
                            (e.headers = _objectSpread2(
                              _objectSpread2({}, e.headers),
                              {},
                              { Authorization: "Bearer ".concat(r) }
                            )),
                            e
                          );
                        });
                      });
                    })(m, n.accessToken),
                  n.throttle && rateLimitThrottle(m, n.throttle),
                  !(function (e) {
                    var r =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : 5,
                      n = e.defaults,
                      s = n.responseLogger,
                      a = void 0 === s ? index_es_modules_noop : s,
                      l = n.requestLogger,
                      u = void 0 === l ? index_es_modules_noop : l;
                    e.interceptors.request.use(
                      function (e) {
                        return u(e), e;
                      },
                      function (e) {
                        return u(e), Promise.reject(e);
                      }
                    ),
                      e.interceptors.response.use(
                        function (e) {
                          return a(e), e;
                        },
                        function (n) {
                          var s,
                            l = n.response,
                            u = n.config;
                          if ((a(n), !u || !e.defaults.retryOnError))
                            return Promise.reject(n);
                          var c = u.attempts || 1;
                          if (c > r)
                            return (n.attempts = u.attempts), Promise.reject(n);
                          var h = null,
                            d = Math.pow(Math.SQRT2, c);
                          return (l
                            ? l.status >= 500 && l.status < 600
                              ? (h = "Server ".concat(l.status))
                              : 429 === l.status &&
                                ((h = "Rate limit"),
                                l.headers &&
                                  n.response.headers[
                                    "x-contentful-ratelimit-reset"
                                  ] &&
                                  (d =
                                    l.headers["x-contentful-ratelimit-reset"]))
                            : (h = "Connection"),
                          h)
                            ? ((d = Math.floor(
                                1e3 * d + 200 * Math.random() + 500
                              )),
                              e.defaults.logHandler(
                                "warning",
                                ""
                                  .concat(h, " error occurred. Waiting for ")
                                  .concat(d, " ms before retrying...")
                              ),
                              (u.attempts = c + 1),
                              delete u.httpAgent,
                              delete u.httpsAgent,
                              ((s = d),
                              new Promise(function (e) {
                                setTimeout(e, s);
                              })).then(function () {
                                return e(u);
                              }))
                            : Promise.reject(n);
                        }
                      );
                  })(m, n.retryLimit),
                  n.onError &&
                    m.interceptors.response.use(function (e) {
                      return e;
                    }, n.onError),
                  m
                );
              })(eC, n),
              l =
                ((r = {
                  resolveLinks: n.resolveLinks,
                  environment: n.environment,
                  removeUnresolved: n.removeUnresolved,
                  spaceBaseUrl: a.defaults.baseURL,
                  environmentBaseUrl: `${a.defaults.baseURL}environments/${n.environment}`,
                }),
                function (e) {
                  return Object.assign({}, r, e);
                });
            return (
              (a.defaults.baseURL = l().environmentBaseUrl),
              (function (e) {
                let { http: r, getGlobalOptions: n } = e,
                  { wrapSpace: s } = eG.space,
                  { wrapContentType: a, wrapContentTypeCollection: l } =
                    eG.contentType,
                  { wrapEntry: u, wrapEntryCollection: c } = eG.entry,
                  { wrapAsset: h, wrapAssetCollection: d } = eG.asset,
                  { wrapTag: f, wrapTagCollection: p } = eG.tag,
                  { wrapAssetKey: m } = eG.assetKey,
                  { wrapLocaleCollection: y } = eG.locale,
                  notFoundError = (e) => {
                    let r = Error("The resource could not be found.");
                    return (
                      (r.sys = { type: "Error", id: "NotFound" }),
                      (r.details = {
                        type: "Entry",
                        id: e,
                        environment: n().environment,
                        space: n().space,
                      }),
                      r
                    );
                  };
                function switchToEnvironment(e) {
                  e.defaults.baseURL = n().environmentBaseUrl;
                }
                return {
                  getSpace: async function () {
                    r.defaults.baseURL = n().spaceBaseUrl;
                    try {
                      let e = await r.get("/");
                      return s(e.data);
                    } catch (e) {
                      errorHandler(e);
                    }
                  },
                  getContentType: async function (e) {
                    switchToEnvironment(r);
                    try {
                      let n = await r.get(`content_types/${e}`);
                      return a(n.data);
                    } catch (e) {
                      errorHandler(e);
                    }
                  },
                  getContentTypes: async function () {
                    let e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {};
                    switchToEnvironment(r);
                    try {
                      let n = await r.get(
                        "content_types",
                        createRequestConfig({ query: e })
                      );
                      return l(n.data);
                    } catch (e) {
                      errorHandler(e);
                    }
                  },
                  getEntry: async function (e) {
                    let r =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {};
                    if (!e) throw notFoundError(e);
                    try {
                      let n = await this.getEntries(
                        create_contentful_api_objectSpread({ "sys.id": e }, r)
                      );
                      if (n.items.length > 0) return u(n.items[0]);
                      throw notFoundError(e);
                    } catch (e) {
                      errorHandler(e);
                    }
                  },
                  getEntries: async function () {
                    let e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {};
                    switchToEnvironment(r);
                    let { resolveLinks: s, removeUnresolved: a } = n(e);
                    e = normalizeSelect(e);
                    try {
                      let n = await r.get(
                        "entries",
                        createRequestConfig({ query: e })
                      );
                      return c(n.data, {
                        resolveLinks: s,
                        removeUnresolved: a,
                      });
                    } catch (e) {
                      errorHandler(e);
                    }
                  },
                  getAsset: async function (e) {
                    let n =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {};
                    switchToEnvironment(r), (n = normalizeSelect(n));
                    try {
                      let s = await r.get(
                        `assets/${e}`,
                        createRequestConfig({ query: n })
                      );
                      return h(s.data);
                    } catch (e) {
                      errorHandler(e);
                    }
                  },
                  getAssets: async function () {
                    let e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {};
                    switchToEnvironment(r), (e = normalizeSelect(e));
                    try {
                      let n = await r.get(
                        "assets",
                        createRequestConfig({ query: e })
                      );
                      return d(n.data);
                    } catch (e) {
                      errorHandler(e);
                    }
                  },
                  getTag: async function (e) {
                    switchToEnvironment(r);
                    try {
                      let n = await r.get(`tags/${e}`);
                      return f(n.data);
                    } catch (e) {
                      errorHandler(e);
                    }
                  },
                  getTags: async function () {
                    let e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {};
                    switchToEnvironment(r), (e = normalizeSelect(e));
                    try {
                      let n = await r.get(
                        "tags",
                        createRequestConfig({ query: e })
                      );
                      return p(n.data);
                    } catch (e) {
                      errorHandler(e);
                    }
                  },
                  createAssetKey: async function (e) {
                    switchToEnvironment(r);
                    try {
                      let n = Math.floor(Date.now() / 1e3),
                        s = n + 172800;
                      !(function (e, r, n) {
                        if (((n = n || {}), "number" != typeof r))
                          throw new ValidationError(
                            e,
                            `only numeric values are allowed for timestamps, provided type was "${typeof r}"`
                          );
                        if (n.maximum && r > n.maximum)
                          throw new ValidationError(
                            e,
                            `value (${r}) cannot be further in the future than expected maximum (${n.maximum})`
                          );
                        if (n.now && r < n.now)
                          throw new ValidationError(
                            e,
                            `value (${r}) cannot be in the past, current time was ${n.now}`
                          );
                      })("expiresAt", e, { maximum: s, now: n });
                      let a = await r.post("asset_keys", { expiresAt: e });
                      return m(a.data);
                    } catch (e) {
                      errorHandler(e);
                    }
                  },
                  getLocales: async function () {
                    let e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {};
                    switchToEnvironment(r);
                    try {
                      let n = await r.get(
                        "locales",
                        createRequestConfig({ query: e })
                      );
                      return y(n.data);
                    } catch (e) {
                      errorHandler(e);
                    }
                  },
                  parseEntries: function (e) {
                    let { resolveLinks: r, removeUnresolved: s } = n({});
                    return c(e, { resolveLinks: r, removeUnresolved: s });
                  },
                  sync: async function () {
                    let e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : {},
                      s =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : { paginate: !0 },
                      { resolveLinks: a, removeUnresolved: l } = n(e);
                    return (
                      switchToEnvironment(r),
                      pagedSync(
                        r,
                        e,
                        create_contentful_api_objectSpread(
                          { resolveLinks: a, removeUnresolved: l },
                          s
                        )
                      )
                    );
                  },
                };
              })({ http: a, getGlobalOptions: l })
            );
          })({
            space: "jzzgtonmw9s6",
            accessToken: "hBPNCZFzPnoEgWPm6De7WalicLVWmRmUqKOF9rLi-Ko",
          }),
          r = await e.getEntries({ content_type: "animation" }),
          n = [];
        for (let e of r.items) {
          let { title: r } = e.fields,
            s = { title: r, handle: r.replace(/ +/g, "-").toLowerCase() };
          n.push(s);
        }
        return n;
      }
      function Demo() {
        let [e, r] = (0, v.useState)([]),
          n = (0, b.useRouter)(),
          [s, a] = (0, v.useState)(null);
        (0, v.useEffect)(() => {
          a(null),
            (async () => {
              let e = await getAnimationsHandle(),
                s = [],
                l = 0;
              for (let r of e)
                s.push({ title: r.title, handle: r.handle }),
                  n.route.includes(r.handle) && a(l),
                  l++;
              r(s);
            })();
        }, [n.route]);
        let manageSelect = (e) => {
          "demos" == e.target.value
            ? n.push("/demos")
            : n.push("/demos/".concat(e.target.value));
        };
    
      }
      function Index(e) {
        let { setTheme: r, theme: n } = e,
          s = (0, b.useRouter)();
        return (0, g.jsx)(g.Fragment, {
          children: s.route.includes("demos")
            ? (0, g.jsx)(Demo, {})
            : (0, g.jsx)(Main, { setTheme: r, theme: n }),
        });
      }
      var eJ = n(97652),
        eZ = n.n(eJ),
        eX = n(47533),
        eY = n(16310);
      let eQ = eY.Ry().shape({
        email: eY
          .Z_()
          .required("An email is required.")
          .matches(
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "A valid email is required."
          ),
      });
      var e0 = n(87536),
        e1 = n(3231);
      let e2 = {
        initial: { opacity: 0, y: 5 },
        open: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.4, ease: "easeOut" },
        },
        closed: {
          opacity: 0,
          y: 5,
          transition: { duration: 0.4, ease: "easeOut" },
        },
      };
      function footer_Index() {
        let {
            setValue: e,
            handleSubmit: r,
            register: n,
            formState: { errors: s },
          } = (0, e0.cI)({ resolver: (0, eX.X)(eQ) }),
          a = (0, b.useRouter)(),
          [l, u] = (0, v.useState)({ isActive: !1, value: "" }),
          onSubmit = async (r) => {
            let n,
              { email: s } = r,
              a = await (0, e1.S)(s);
            u({
              isActive: !0,
              value: (n =
                "already exists" == a
                  ? "You're already subscribed. Thank you for your interest."
                  : "Thank you for your interest. You'll receive emails concerning the latest news."),
            }),
              e("email", ""),
              setTimeout(() => {
                u({ isActive: !1, value: n });
              }, 4e3);
          };
        return (0, g.jsx)(g.Fragment, {
          children: a.route.includes("demos")
            ? null
            : (0, g.jsxs)("div", {
                className: eZ().footer,
                children: [
                  (0, g.jsxs)("div", {
                    className: eZ().body,
                    children: [
                      (0, g.jsxs)("form", {
                        onSubmit: r(onSubmit),
                        className: eZ().subscriptionContainer,
                        children: [
                          (0, g.jsx)("h3", {
                            children:
                              "Subscribe to the newsletters to stay in touch with the latest.",
                          }),
                          (0, g.jsx)("input", {
                            ...n("email"),
                            placeholder: "example@gmail.com",
                            type: "text",
                          }),
                          (0, g.jsx)("button", {
                            className: eZ().subscribe,
                            children: (0, g.jsx)(
                              "p",
                              { children: "Subscribe" },
                              "message"
                            ),
                          }),
                          (0, g.jsx)(O.E.p, {
                            variants: e2,
                            initial: "initial",
                            animate: l.isActive || s.email ? "open" : "closed",
                            className: eZ().message,
                            children: s.email ? s.email.message : l.value,
                          }),
                          (0, g.jsx)("div", {
                            className: eZ().socials,
                            children: (0, g.jsx)(A(), {
                              href: "https://www.youtube.com/@olivierlarose1",
                              target: "_blank",
                              rel: "noopener noreferrer",
                              children: (0, g.jsx)("svg", {
                                className: eZ().icon,
                                width: "800px",
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 310 310",
                                children: (0, g.jsx)("g", {
                                  id: "XMLID_822_",
                                  children: (0, g.jsx)("path", {
                                    id: "XMLID_823_",
                                    d: "M297.917,64.645c-11.19-13.302-31.85-18.728-71.306-18.728H83.386c-40.359,0-61.369,5.776-72.517,19.938 C0,79.663,0,100.008,0,128.166v53.669c0,54.551,12.896,82.248,83.386,82.248h143.226c34.216,0,53.176-4.788,65.442-16.527 C304.633,235.518,310,215.863,310,181.835v-53.669C310,98.471,309.159,78.006,297.917,64.645z M199.021,162.41l-65.038,33.991 c-1.454,0.76-3.044,1.137-4.632,1.137c-1.798,0-3.592-0.484-5.181-1.446c-2.992-1.813-4.819-5.056-4.819-8.554v-67.764 c0-3.492,1.822-6.732,4.808-8.546c2.987-1.814,6.702-1.938,9.801-0.328l65.038,33.772c3.309,1.718,5.387,5.134,5.392,8.861 C204.394,157.263,202.325,160.684,199.021,162.41z",
                                  }),
                                }),
                              }),
                            }),
                          }),
                        ],
                      }),
                      (0, g.jsxs)("div", {
                        className: eZ().nav,
                        children: [
                          (0, g.jsx)(A(), {
                            href: "https://www.youtube.com/@olivierlarose1",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: "Tutorials",
                          }),
                          (0, g.jsx)(A(), {
                            href: "/demos",
                            target: "_blank",
                            children: "Demos",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, g.jsxs)("div", {
                    className: eZ().footerFooter,
                    children: [
                      (0, g.jsxs)("p", {
                        children: [
                          "Design system inspired by ",
                          (0, g.jsx)(A(), {
                            target: "_blank",
                            href: "https://blog.maximeheckel.com/design/",
                            children: "Maxime Heckel",
                          }),
                        ],
                      }),
                      (0, g.jsx)("p", {
                        children: "Copyright 2023 \xa9 Olivier Larose",
                      }),
                    ],
                  }),
                ],
              }),
        });
      }
      n(67844);
      var e6 = n(4298),
        e4 = n.n(e6);
      n(41846);
      var _app = function (e) {
        let { Component: r, pageProps: n, router: s } = e;
        return (0, g.jsxs)("div", {
          className: "meshDojo",
          "data-theme": "light",
          children: [
            (0, g.jsx)(e4(), {
              strategy: "afterInteractive",
              src: "https://www.googletagmanager.com/gtag/js?id=G-JC4DE08TH2",
            }),
            (0, g.jsx)(e4(), {
              id: "google-analytics",
              strategy: "afterInteractive",
              dangerouslySetInnerHTML: {
                __html:
                  "\n             window.dataLayer = window.dataLayer || [];\n             function gtag(){dataLayer.push(arguments);}\n             gtag('js', new Date());\n             gtag('config', 'G-JC4DE08TH2');\n          ",
              },
            }),
            (0, g.jsxs)(ThemeProvider, {
              children: [
                (0, g.jsx)(Index, {}),
                (0, g.jsx)(r, { ...n }, s.route),
                (0, g.jsx)(footer_Index, {}),
              ],
            }),
          ],
        });
      };
    },
    70415: function () {},
    64202: function () {},
    89847: function () {},
    3335: function () {},
    97652: function (e) {
      e.exports = {
        footer: "Footer_footer__KQx25",
        body: "Footer_body__95Yfe",
        subscriptionContainer: "Footer_subscriptionContainer__r2poK",
        subscribe: "Footer_subscribe__fnyCo",
        message: "Footer_message__j5QLw",
        socials: "Footer_socials__5gFVa",
        icon: "Footer_icon__UyyTU",
        nav: "Footer_nav__OWrOQ",
        inactive: "Footer_inactive__ofMjU",
        footerFooter: "Footer_footerFooter__2OkFB",
        messageConfirmation: "Footer_messageConfirmation__MwRfh",
        newsletterHeader: "Footer_newsletterHeader__OyTBv",
        newsletterBody: "Footer_newsletterBody__sl_j7",
      };
    },
    77663: function (e) {
      !(function () {
        var r = {
            229: function (e) {
              var r,
                n,
                s,
                a = (e.exports = {});
              function defaultSetTimout() {
                throw Error("setTimeout has not been defined");
              }
              function defaultClearTimeout() {
                throw Error("clearTimeout has not been defined");
              }
              function runTimeout(e) {
                if (r === setTimeout) return setTimeout(e, 0);
                if ((r === defaultSetTimout || !r) && setTimeout)
                  return (r = setTimeout), setTimeout(e, 0);
                try {
                  return r(e, 0);
                } catch (n) {
                  try {
                    return r.call(null, e, 0);
                  } catch (n) {
                    return r.call(this, e, 0);
                  }
                }
              }
              !(function () {
                try {
                  r =
                    "function" == typeof setTimeout
                      ? setTimeout
                      : defaultSetTimout;
                } catch (e) {
                  r = defaultSetTimout;
                }
                try {
                  n =
                    "function" == typeof clearTimeout
                      ? clearTimeout
                      : defaultClearTimeout;
                } catch (e) {
                  n = defaultClearTimeout;
                }
              })();
              var l = [],
                u = !1,
                c = -1;
              function cleanUpNextTick() {
                u &&
                  s &&
                  ((u = !1),
                  s.length ? (l = s.concat(l)) : (c = -1),
                  l.length && drainQueue());
              }
              function drainQueue() {
                if (!u) {
                  var e = runTimeout(cleanUpNextTick);
                  u = !0;
                  for (var r = l.length; r; ) {
                    for (s = l, l = []; ++c < r; ) s && s[c].run();
                    (c = -1), (r = l.length);
                  }
                  (s = null),
                    (u = !1),
                    (function (e) {
                      if (n === clearTimeout) return clearTimeout(e);
                      if ((n === defaultClearTimeout || !n) && clearTimeout)
                        return (n = clearTimeout), clearTimeout(e);
                      try {
                        n(e);
                      } catch (r) {
                        try {
                          return n.call(null, e);
                        } catch (r) {
                          return n.call(this, e);
                        }
                      }
                    })(e);
                }
              }
              function Item(e, r) {
                (this.fun = e), (this.array = r);
              }
              function noop() {}
              (a.nextTick = function (e) {
                var r = Array(arguments.length - 1);
                if (arguments.length > 1)
                  for (var n = 1; n < arguments.length; n++)
                    r[n - 1] = arguments[n];
                l.push(new Item(e, r)),
                  1 !== l.length || u || runTimeout(drainQueue);
              }),
                (Item.prototype.run = function () {
                  this.fun.apply(null, this.array);
                }),
                (a.title = "browser"),
                (a.browser = !0),
                (a.env = {}),
                (a.argv = []),
                (a.version = ""),
                (a.versions = {}),
                (a.on = noop),
                (a.addListener = noop),
                (a.once = noop),
                (a.off = noop),
                (a.removeListener = noop),
                (a.removeAllListeners = noop),
                (a.emit = noop),
                (a.prependListener = noop),
                (a.prependOnceListener = noop),
                (a.listeners = function (e) {
                  return [];
                }),
                (a.binding = function (e) {
                  throw Error("process.binding is not supported");
                }),
                (a.cwd = function () {
                  return "/";
                }),
                (a.chdir = function (e) {
                  throw Error("process.chdir is not supported");
                }),
                (a.umask = function () {
                  return 0;
                });
            },
          },
          n = {};
        function __nccwpck_require__(e) {
          var s = n[e];
          if (void 0 !== s) return s.exports;
          var a = (n[e] = { exports: {} }),
            l = !0;
          try {
            r[e](a, a.exports, __nccwpck_require__), (l = !1);
          } finally {
            l && delete n[e];
          }
          return a.exports;
        }
        __nccwpck_require__.ab = "//";
        var s = __nccwpck_require__(229);
        e.exports = s;
      })();
    },
    25675: function (e, r, n) {
      e.exports = n(645);
    },
    41664: function (e, r, n) {
      e.exports = n(65170);
    },
    11163: function (e, r, n) {
      e.exports = n(59974);
    },
    4298: function (e, r, n) {
      e.exports = n(85354);
    },
    70631: function (e, r, n) {
      var s = "function" == typeof Map && Map.prototype,
        a =
          Object.getOwnPropertyDescriptor && s
            ? Object.getOwnPropertyDescriptor(Map.prototype, "size")
            : null,
        l = s && a && "function" == typeof a.get ? a.get : null,
        u = s && Map.prototype.forEach,
        c = "function" == typeof Set && Set.prototype,
        h =
          Object.getOwnPropertyDescriptor && c
            ? Object.getOwnPropertyDescriptor(Set.prototype, "size")
            : null,
        d = c && h && "function" == typeof h.get ? h.get : null,
        f = c && Set.prototype.forEach,
        p =
          "function" == typeof WeakMap && WeakMap.prototype
            ? WeakMap.prototype.has
            : null,
        m =
          "function" == typeof WeakSet && WeakSet.prototype
            ? WeakSet.prototype.has
            : null,
        y =
          "function" == typeof WeakRef && WeakRef.prototype
            ? WeakRef.prototype.deref
            : null,
        g = Boolean.prototype.valueOf,
        v = Object.prototype.toString,
        b = Function.prototype.toString,
        w = String.prototype.match,
        x = String.prototype.slice,
        _ = String.prototype.replace,
        S = String.prototype.toUpperCase,
        A = String.prototype.toLowerCase,
        T = RegExp.prototype.test,
        O = Array.prototype.concat,
        P = Array.prototype.join,
        j = Array.prototype.slice,
        k = Math.floor,
        C = "function" == typeof BigInt ? BigInt.prototype.valueOf : null,
        R = Object.getOwnPropertySymbols,
        D =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? Symbol.prototype.toString
            : null,
        B = "function" == typeof Symbol && "object" == typeof Symbol.iterator,
        I =
          "function" == typeof Symbol &&
          Symbol.toStringTag &&
          (typeof Symbol.toStringTag === B ? "object" : "symbol")
            ? Symbol.toStringTag
            : null,
        V = Object.prototype.propertyIsEnumerable,
        L =
          ("function" == typeof Reflect
            ? Reflect.getPrototypeOf
            : Object.getPrototypeOf) ||
          ([].__proto__ === Array.prototype
            ? function (e) {
                return e.__proto__;
              }
            : null);
      function addNumericSeparator(e, r) {
        if (
          e === 1 / 0 ||
          e === -1 / 0 ||
          e != e ||
          (e && e > -1e3 && e < 1e3) ||
          T.call(/e/, r)
        )
          return r;
        var n = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
        if ("number" == typeof e) {
          var s = e < 0 ? -k(-e) : k(e);
          if (s !== e) {
            var a = String(s),
              l = x.call(r, a.length + 1);
            return (
              _.call(a, n, "$&_") +
              "." +
              _.call(_.call(l, /([0-9]{3})/g, "$&_"), /_$/, "")
            );
          }
        }
        return _.call(r, n, "$&_");
      }
      var M = n(24654),
        N = M.custom,
        U = isSymbol(N) ? N : null;
      function wrapQuotes(e, r, n) {
        var s = "double" === (n.quoteStyle || r) ? '"' : "'";
        return s + e + s;
      }
      function isArray(e) {
        return (
          "[object Array]" === toStr(e) &&
          (!I || !("object" == typeof e && I in e))
        );
      }
      function isRegExp(e) {
        return (
          "[object RegExp]" === toStr(e) &&
          (!I || !("object" == typeof e && I in e))
        );
      }
      function isSymbol(e) {
        if (B) return e && "object" == typeof e && e instanceof Symbol;
        if ("symbol" == typeof e) return !0;
        if (!e || "object" != typeof e || !D) return !1;
        try {
          return D.call(e), !0;
        } catch (e) {}
        return !1;
      }
      e.exports = function inspect_(e, r, s, a) {
        var c = r || {};
        if (
          has(c, "quoteStyle") &&
          "single" !== c.quoteStyle &&
          "double" !== c.quoteStyle
        )
          throw TypeError('option "quoteStyle" must be "single" or "double"');
        if (
          has(c, "maxStringLength") &&
          ("number" == typeof c.maxStringLength
            ? c.maxStringLength < 0 && c.maxStringLength !== 1 / 0
            : null !== c.maxStringLength)
        )
          throw TypeError(
            'option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`'
          );
        var h = !has(c, "customInspect") || c.customInspect;
        if ("boolean" != typeof h && "symbol" !== h)
          throw TypeError(
            "option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`"
          );
        if (
          has(c, "indent") &&
          null !== c.indent &&
          "	" !== c.indent &&
          !(parseInt(c.indent, 10) === c.indent && c.indent > 0)
        )
          throw TypeError(
            'option "indent" must be "\\t", an integer > 0, or `null`'
          );
        if (
          has(c, "numericSeparator") &&
          "boolean" != typeof c.numericSeparator
        )
          throw TypeError(
            'option "numericSeparator", if provided, must be `true` or `false`'
          );
        var v = c.numericSeparator;
        if (void 0 === e) return "undefined";
        if (null === e) return "null";
        if ("boolean" == typeof e) return e ? "true" : "false";
        if ("string" == typeof e)
          return (function inspectString(e, r) {
            if (e.length > r.maxStringLength) {
              var n = e.length - r.maxStringLength;
              return (
                inspectString(x.call(e, 0, r.maxStringLength), r) +
                "... " +
                n +
                " more character" +
                (n > 1 ? "s" : "")
              );
            }
            return wrapQuotes(
              _.call(_.call(e, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, lowbyte),
              "single",
              r
            );
          })(e, c);
        if ("number" == typeof e) {
          if (0 === e) return 1 / 0 / e > 0 ? "0" : "-0";
          var S = String(e);
          return v ? addNumericSeparator(e, S) : S;
        }
        if ("bigint" == typeof e) {
          var T = String(e) + "n";
          return v ? addNumericSeparator(e, T) : T;
        }
        var k = void 0 === c.depth ? 5 : c.depth;
        if ((void 0 === s && (s = 0), s >= k && k > 0 && "object" == typeof e))
          return isArray(e) ? "[Array]" : "[Object]";
        var R = (function (e, r) {
          var n;
          if ("	" === e.indent) n = "	";
          else {
            if ("number" != typeof e.indent || !(e.indent > 0)) return null;
            n = P.call(Array(e.indent + 1), " ");
          }
          return { base: n, prev: P.call(Array(r + 1), n) };
        })(c, s);
        if (void 0 === a) a = [];
        else if (indexOf(a, e) >= 0) return "[Circular]";
        function inspect(e, r, n) {
          if ((r && (a = j.call(a)).push(r), n)) {
            var l = { depth: c.depth };
            return (
              has(c, "quoteStyle") && (l.quoteStyle = c.quoteStyle),
              inspect_(e, l, s + 1, a)
            );
          }
          return inspect_(e, c, s + 1, a);
        }
        if ("function" == typeof e && !isRegExp(e)) {
          var N = (function (e) {
              if (e.name) return e.name;
              var r = w.call(b.call(e), /^function\s*([\w$]+)/);
              return r ? r[1] : null;
            })(e),
            $ = arrObjKeys(e, inspect);
          return (
            "[Function" +
            (N ? ": " + N : " (anonymous)") +
            "]" +
            ($.length > 0 ? " { " + P.call($, ", ") + " }" : "")
          );
        }
        if (isSymbol(e)) {
          var q = B
            ? _.call(String(e), /^(Symbol\(.*\))_[^)]*$/, "$1")
            : D.call(e);
          return "object" != typeof e || B ? q : markBoxed(q);
        }
        if (
          e &&
          "object" == typeof e &&
          (("undefined" != typeof HTMLElement && e instanceof HTMLElement) ||
            ("string" == typeof e.nodeName &&
              "function" == typeof e.getAttribute))
        ) {
          for (
            var z,
              H = "<" + A.call(String(e.nodeName)),
              W = e.attributes || [],
              K = 0;
            K < W.length;
            K++
          )
            H +=
              " " +
              W[K].name +
              "=" +
              wrapQuotes(
                ((z = W[K].value), _.call(String(z), /"/g, "&quot;")),
                "double",
                c
              );
          return (
            (H += ">"),
            e.childNodes && e.childNodes.length && (H += "..."),
            (H += "</" + A.call(String(e.nodeName)) + ">")
          );
        }
        if (isArray(e)) {
          if (0 === e.length) return "[]";
          var G = arrObjKeys(e, inspect);
          return R &&
            !(function (e) {
              for (var r = 0; r < e.length; r++)
                if (indexOf(e[r], "\n") >= 0) return !1;
              return !0;
            })(G)
            ? "[" + indentedJoin(G, R) + "]"
            : "[ " + P.call(G, ", ") + " ]";
        }
        if (
          "[object Error]" === toStr(e) &&
          (!I || !("object" == typeof e && I in e))
        ) {
          var J = arrObjKeys(e, inspect);
          return "cause" in Error.prototype ||
            !("cause" in e) ||
            V.call(e, "cause")
            ? 0 === J.length
              ? "[" + String(e) + "]"
              : "{ [" + String(e) + "] " + P.call(J, ", ") + " }"
            : "{ [" +
                String(e) +
                "] " +
                P.call(O.call("[cause]: " + inspect(e.cause), J), ", ") +
                " }";
        }
        if ("object" == typeof e && h) {
          if (U && "function" == typeof e[U] && M)
            return M(e, { depth: k - s });
          if ("symbol" !== h && "function" == typeof e.inspect)
            return e.inspect();
        }
        if (
          (function (e) {
            if (!l || !e || "object" != typeof e) return !1;
            try {
              l.call(e);
              try {
                d.call(e);
              } catch (e) {
                return !0;
              }
              return e instanceof Map;
            } catch (e) {}
            return !1;
          })(e)
        ) {
          var Z = [];
          return (
            u &&
              u.call(e, function (r, n) {
                Z.push(inspect(n, e, !0) + " => " + inspect(r, e));
              }),
            collectionOf("Map", l.call(e), Z, R)
          );
        }
        if (
          (function (e) {
            if (!d || !e || "object" != typeof e) return !1;
            try {
              d.call(e);
              try {
                l.call(e);
              } catch (e) {
                return !0;
              }
              return e instanceof Set;
            } catch (e) {}
            return !1;
          })(e)
        ) {
          var X = [];
          return (
            f &&
              f.call(e, function (r) {
                X.push(inspect(r, e));
              }),
            collectionOf("Set", d.call(e), X, R)
          );
        }
        if (
          (function (e) {
            if (!p || !e || "object" != typeof e) return !1;
            try {
              p.call(e, p);
              try {
                m.call(e, m);
              } catch (e) {
                return !0;
              }
              return e instanceof WeakMap;
            } catch (e) {}
            return !1;
          })(e)
        )
          return weakCollectionOf("WeakMap");
        if (
          (function (e) {
            if (!m || !e || "object" != typeof e) return !1;
            try {
              m.call(e, m);
              try {
                p.call(e, p);
              } catch (e) {
                return !0;
              }
              return e instanceof WeakSet;
            } catch (e) {}
            return !1;
          })(e)
        )
          return weakCollectionOf("WeakSet");
        if (
          (function (e) {
            if (!y || !e || "object" != typeof e) return !1;
            try {
              return y.call(e), !0;
            } catch (e) {}
            return !1;
          })(e)
        )
          return weakCollectionOf("WeakRef");
        if (
          "[object Number]" === toStr(e) &&
          (!I || !("object" == typeof e && I in e))
        )
          return markBoxed(inspect(Number(e)));
        if (
          (function (e) {
            if (!e || "object" != typeof e || !C) return !1;
            try {
              return C.call(e), !0;
            } catch (e) {}
            return !1;
          })(e)
        )
          return markBoxed(inspect(C.call(e)));
        if (
          "[object Boolean]" === toStr(e) &&
          (!I || !("object" == typeof e && I in e))
        )
          return markBoxed(g.call(e));
        if (
          "[object String]" === toStr(e) &&
          (!I || !("object" == typeof e && I in e))
        )
          return markBoxed(inspect(String(e)));
        if ("undefined" != typeof window && e === window)
          return "{ [object Window] }";
        if (e === n.g) return "{ [object globalThis] }";
        if (
          !(
            "[object Date]" === toStr(e) &&
            (!I || !("object" == typeof e && I in e))
          ) &&
          !isRegExp(e)
        ) {
          var Y = arrObjKeys(e, inspect),
            Q = L
              ? L(e) === Object.prototype
              : e instanceof Object || e.constructor === Object,
            ee = e instanceof Object ? "" : "null prototype",
            et =
              !Q && I && Object(e) === e && I in e
                ? x.call(toStr(e), 8, -1)
                : ee
                ? "Object"
                : "",
            er =
              (Q || "function" != typeof e.constructor
                ? ""
                : e.constructor.name
                ? e.constructor.name + " "
                : "") +
              (et || ee
                ? "[" + P.call(O.call([], et || [], ee || []), ": ") + "] "
                : "");
          return 0 === Y.length
            ? er + "{}"
            : R
            ? er + "{" + indentedJoin(Y, R) + "}"
            : er + "{ " + P.call(Y, ", ") + " }";
        }
        return String(e);
      };
      var $ =
        Object.prototype.hasOwnProperty ||
        function (e) {
          return e in this;
        };
      function has(e, r) {
        return $.call(e, r);
      }
      function toStr(e) {
        return v.call(e);
      }
      function indexOf(e, r) {
        if (e.indexOf) return e.indexOf(r);
        for (var n = 0, s = e.length; n < s; n++) if (e[n] === r) return n;
        return -1;
      }
      function lowbyte(e) {
        var r = e.charCodeAt(0),
          n = { 8: "b", 9: "t", 10: "n", 12: "f", 13: "r" }[r];
        return n
          ? "\\" + n
          : "\\x" + (r < 16 ? "0" : "") + S.call(r.toString(16));
      }
      function markBoxed(e) {
        return "Object(" + e + ")";
      }
      function weakCollectionOf(e) {
        return e + " { ? }";
      }
      function collectionOf(e, r, n, s) {
        return (
          e +
          " (" +
          r +
          ") {" +
          (s ? indentedJoin(n, s) : P.call(n, ", ")) +
          "}"
        );
      }
      function indentedJoin(e, r) {
        if (0 === e.length) return "";
        var n = "\n" + r.prev + r.base;
        return n + P.call(e, "," + n) + "\n" + r.prev;
      }
      function arrObjKeys(e, r) {
        var n,
          s = isArray(e),
          a = [];
        if (s) {
          a.length = e.length;
          for (var l = 0; l < e.length; l++) a[l] = has(e, l) ? r(e[l], e) : "";
        }
        var u = "function" == typeof R ? R(e) : [];
        if (B) {
          n = {};
          for (var c = 0; c < u.length; c++) n["$" + u[c]] = u[c];
        }
        for (var h in e)
          has(e, h) &&
            (!s || String(Number(h)) !== h || !(h < e.length)) &&
            ((B && n["$" + h] instanceof Symbol) ||
              (T.call(/[^\w$]/, h)
                ? a.push(r(h, e) + ": " + r(e[h], e))
                : a.push(h + ": " + r(e[h], e))));
        if ("function" == typeof R)
          for (var d = 0; d < u.length; d++)
            V.call(e, u[d]) && a.push("[" + r(u[d]) + "]: " + r(e[u[d]], e));
        return a;
      }
    },
    21501: function (e) {
      "use strict";
      let AbortError = class AbortError extends Error {
        constructor() {
          super("Throttled function aborted"), (this.name = "AbortError");
        }
      };
      (e.exports = ({ limit: e, interval: r, strict: n }) => {
        if (!Number.isFinite(e))
          throw TypeError("Expected `limit` to be a finite number");
        if (!Number.isFinite(r))
          throw TypeError("Expected `interval` to be a finite number");
        let s = new Map(),
          a = 0,
          l = 0,
          u = [],
          c = n
            ? function () {
                let n = Date.now();
                if (u.length < e) return u.push(n), 0;
                let s = u.shift() + r;
                return n >= s ? (u.push(n), 0) : (u.push(s), s - n);
              }
            : function () {
                let n = Date.now();
                return n - a > r
                  ? ((l = 1), (a = n), 0)
                  : (l < e ? l++ : ((a += r), (l = 1)), a - n);
              };
        return (e) => {
          let throttled = function (...r) {
            let n;
            return throttled.isEnabled
              ? new Promise((a, l) => {
                  (n = setTimeout(() => {
                    a(e.apply(this, r)), s.delete(n);
                  }, c())),
                    s.set(n, l);
                })
              : (async () => e.apply(this, r))();
          };
          return (
            (throttled.abort = () => {
              for (let e of s.keys())
                clearTimeout(e), s.get(e)(new AbortError());
              s.clear(), u.splice(0, u.length);
            }),
            (throttled.isEnabled = !0),
            throttled
          );
        };
      }),
        (e.exports.AbortError = AbortError);
    },
    55760: function (e) {
      "use strict";
      function Cache(e) {
        (this._maxSize = e), this.clear();
      }
      (Cache.prototype.clear = function () {
        (this._size = 0), (this._values = Object.create(null));
      }),
        (Cache.prototype.get = function (e) {
          return this._values[e];
        }),
        (Cache.prototype.set = function (e, r) {
          return (
            this._size >= this._maxSize && this.clear(),
            !(e in this._values) && this._size++,
            (this._values[e] = r)
          );
        });
      var r = /[^.^\]^[]+|(?=\[\]|\.\.)/g,
        n = /^\d+$/,
        s = /^\d/,
        a = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,
        l = /^\s*(['"]?)(.*?)(\1)\s*$/,
        u = new Cache(512),
        c = new Cache(512),
        h = new Cache(512);
      function normalizePath(e) {
        return (
          u.get(e) ||
          u.set(
            e,
            split(e).map(function (e) {
              return e.replace(l, "$2");
            })
          )
        );
      }
      function split(e) {
        return e.match(r) || [""];
      }
      function isQuoted(e) {
        return (
          "string" == typeof e && e && -1 !== ["'", '"'].indexOf(e.charAt(0))
        );
      }
      e.exports = {
        Cache: Cache,
        split: split,
        normalizePath: normalizePath,
        setter: function (e) {
          var r = normalizePath(e);
          return (
            c.get(e) ||
            c.set(e, function (e, n) {
              for (var s = 0, a = r.length, l = e; s < a - 1; ) {
                var u = r[s];
                if (
                  "__proto__" === u ||
                  "constructor" === u ||
                  "prototype" === u
                )
                  return e;
                l = l[r[s++]];
              }
              l[r[s]] = n;
            })
          );
        },
        getter: function (e, r) {
          var n = normalizePath(e);
          return (
            h.get(e) ||
            h.set(e, function (e) {
              for (var s = 0, a = n.length; s < a; ) {
                if (null == e && r) return;
                e = e[n[s++]];
              }
              return e;
            })
          );
        },
        join: function (e) {
          return e.reduce(function (e, r) {
            return (
              e +
              (isQuoted(r) || n.test(r) ? "[" + r + "]" : (e ? "." : "") + r)
            );
          }, "");
        },
        forEach: function (e, r, l) {
          !(function (e, r, l) {
            var u,
              c,
              h,
              d,
              f,
              p = e.length;
            for (h = 0; h < p; h++) {
              (c = e[h]) &&
                (!isQuoted((u = c)) &&
                  ((u.match(s) && !u.match(n)) || a.test(u)) &&
                  (c = '"' + c + '"'),
                (d = !(f = isQuoted(c)) && /^\d+$/.test(c)),
                r.call(l, c, f, d, h, e));
            }
          })(Array.isArray(e) ? e : split(e), r, l);
        },
      };
    },
    55798: function (e) {
      "use strict";
      var r = String.prototype.replace,
        n = /%20/g,
        s = { RFC1738: "RFC1738", RFC3986: "RFC3986" };
      e.exports = {
        default: s.RFC3986,
        formatters: {
          RFC1738: function (e) {
            return r.call(e, n, "+");
          },
          RFC3986: function (e) {
            return String(e);
          },
        },
        RFC1738: s.RFC1738,
        RFC3986: s.RFC3986,
      };
    },
    80129: function (e, r, n) {
      "use strict";
      var s = n(58261),
        a = n(55235),
        l = n(55798);
      e.exports = { formats: l, parse: a, stringify: s };
    },
    55235: function (e, r, n) {
      "use strict";
      var s = n(12769),
        a = Object.prototype.hasOwnProperty,
        l = Array.isArray,
        u = {
          allowDots: !1,
          allowEmptyArrays: !1,
          allowPrototypes: !1,
          allowSparse: !1,
          arrayLimit: 20,
          charset: "utf-8",
          charsetSentinel: !1,
          comma: !1,
          decodeDotInKeys: !0,
          decoder: s.decode,
          delimiter: "&",
          depth: 5,
          duplicates: "combine",
          ignoreQueryPrefix: !1,
          interpretNumericEntities: !1,
          parameterLimit: 1e3,
          parseArrays: !0,
          plainObjects: !1,
          strictNullHandling: !1,
        },
        parseArrayValue = function (e, r) {
          return e && "string" == typeof e && r.comma && e.indexOf(",") > -1
            ? e.split(",")
            : e;
        },
        parseValues = function (e, r) {
          var n = { __proto__: null },
            c = r.ignoreQueryPrefix ? e.replace(/^\?/, "") : e,
            h = r.parameterLimit === 1 / 0 ? void 0 : r.parameterLimit,
            d = c.split(r.delimiter, h),
            f = -1,
            p = r.charset;
          if (r.charsetSentinel)
            for (m = 0; m < d.length; ++m)
              0 === d[m].indexOf("utf8=") &&
                ("utf8=%E2%9C%93" === d[m]
                  ? (p = "utf-8")
                  : "utf8=%26%2310003%3B" === d[m] && (p = "iso-8859-1"),
                (f = m),
                (m = d.length));
          for (m = 0; m < d.length; ++m)
            if (m !== f) {
              var m,
                y,
                g,
                v = d[m],
                b = v.indexOf("]="),
                w = -1 === b ? v.indexOf("=") : b + 1;
              -1 === w
                ? ((y = r.decoder(v, u.decoder, p, "key")),
                  (g = r.strictNullHandling ? null : ""))
                : ((y = r.decoder(v.slice(0, w), u.decoder, p, "key")),
                  (g = s.maybeMap(
                    parseArrayValue(v.slice(w + 1), r),
                    function (e) {
                      return r.decoder(e, u.decoder, p, "value");
                    }
                  ))),
                g &&
                  r.interpretNumericEntities &&
                  "iso-8859-1" === p &&
                  (g = g.replace(/&#(\d+);/g, function (e, r) {
                    return String.fromCharCode(parseInt(r, 10));
                  })),
                v.indexOf("[]=") > -1 && (g = l(g) ? [g] : g);
              var x = a.call(n, y);
              x && "combine" === r.duplicates
                ? (n[y] = s.combine(n[y], g))
                : (x && "last" !== r.duplicates) || (n[y] = g);
            }
          return n;
        },
        parseObject = function (e, r, n, s) {
          for (
            var a = s ? r : parseArrayValue(r, n), l = e.length - 1;
            l >= 0;
            --l
          ) {
            var u,
              c = e[l];
            if ("[]" === c && n.parseArrays)
              u = n.allowEmptyArrays && "" === a ? [] : [].concat(a);
            else {
              u = n.plainObjects ? Object.create(null) : {};
              var h =
                  "[" === c.charAt(0) && "]" === c.charAt(c.length - 1)
                    ? c.slice(1, -1)
                    : c,
                d = n.decodeDotInKeys ? h.replace(/%2E/g, ".") : h,
                f = parseInt(d, 10);
              n.parseArrays || "" !== d
                ? !isNaN(f) &&
                  c !== d &&
                  String(f) === d &&
                  f >= 0 &&
                  n.parseArrays &&
                  f <= n.arrayLimit
                  ? ((u = [])[f] = a)
                  : "__proto__" !== d && (u[d] = a)
                : (u = { 0: a });
            }
            a = u;
          }
          return a;
        },
        parseKeys = function (e, r, n, s) {
          if (e) {
            var l = n.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e,
              u = /(\[[^[\]]*])/g,
              c = n.depth > 0 && /(\[[^[\]]*])/.exec(l),
              h = c ? l.slice(0, c.index) : l,
              d = [];
            if (h) {
              if (
                !n.plainObjects &&
                a.call(Object.prototype, h) &&
                !n.allowPrototypes
              )
                return;
              d.push(h);
            }
            for (
              var f = 0;
              n.depth > 0 && null !== (c = u.exec(l)) && f < n.depth;

            ) {
              if (
                ((f += 1),
                !n.plainObjects &&
                  a.call(Object.prototype, c[1].slice(1, -1)) &&
                  !n.allowPrototypes)
              )
                return;
              d.push(c[1]);
            }
            return (
              c && d.push("[" + l.slice(c.index) + "]"), parseObject(d, r, n, s)
            );
          }
        },
        normalizeParseOptions = function (e) {
          if (!e) return u;
          if (
            void 0 !== e.allowEmptyArrays &&
            "boolean" != typeof e.allowEmptyArrays
          )
            throw TypeError(
              "`allowEmptyArrays` option can only be `true` or `false`, when provided"
            );
          if (
            void 0 !== e.decodeDotInKeys &&
            "boolean" != typeof e.decodeDotInKeys
          )
            throw TypeError(
              "`decodeDotInKeys` option can only be `true` or `false`, when provided"
            );
          if (
            null !== e.decoder &&
            void 0 !== e.decoder &&
            "function" != typeof e.decoder
          )
            throw TypeError("Decoder has to be a function.");
          if (
            void 0 !== e.charset &&
            "utf-8" !== e.charset &&
            "iso-8859-1" !== e.charset
          )
            throw TypeError(
              "The charset option must be either utf-8, iso-8859-1, or undefined"
            );
          var r = void 0 === e.charset ? u.charset : e.charset,
            n = void 0 === e.duplicates ? u.duplicates : e.duplicates;
          if ("combine" !== n && "first" !== n && "last" !== n)
            throw TypeError(
              "The duplicates option must be either combine, first, or last"
            );
          return {
            allowDots:
              void 0 === e.allowDots
                ? !0 === e.decodeDotInKeys || u.allowDots
                : !!e.allowDots,
            allowEmptyArrays:
              "boolean" == typeof e.allowEmptyArrays
                ? !!e.allowEmptyArrays
                : u.allowEmptyArrays,
            allowPrototypes:
              "boolean" == typeof e.allowPrototypes
                ? e.allowPrototypes
                : u.allowPrototypes,
            allowSparse:
              "boolean" == typeof e.allowSparse ? e.allowSparse : u.allowSparse,
            arrayLimit:
              "number" == typeof e.arrayLimit ? e.arrayLimit : u.arrayLimit,
            charset: r,
            charsetSentinel:
              "boolean" == typeof e.charsetSentinel
                ? e.charsetSentinel
                : u.charsetSentinel,
            comma: "boolean" == typeof e.comma ? e.comma : u.comma,
            decodeDotInKeys:
              "boolean" == typeof e.decodeDotInKeys
                ? e.decodeDotInKeys
                : u.decodeDotInKeys,
            decoder: "function" == typeof e.decoder ? e.decoder : u.decoder,
            delimiter:
              "string" == typeof e.delimiter || s.isRegExp(e.delimiter)
                ? e.delimiter
                : u.delimiter,
            depth:
              "number" == typeof e.depth || !1 === e.depth ? +e.depth : u.depth,
            duplicates: n,
            ignoreQueryPrefix: !0 === e.ignoreQueryPrefix,
            interpretNumericEntities:
              "boolean" == typeof e.interpretNumericEntities
                ? e.interpretNumericEntities
                : u.interpretNumericEntities,
            parameterLimit:
              "number" == typeof e.parameterLimit
                ? e.parameterLimit
                : u.parameterLimit,
            parseArrays: !1 !== e.parseArrays,
            plainObjects:
              "boolean" == typeof e.plainObjects
                ? e.plainObjects
                : u.plainObjects,
            strictNullHandling:
              "boolean" == typeof e.strictNullHandling
                ? e.strictNullHandling
                : u.strictNullHandling,
          };
        };
      e.exports = function (e, r) {
        var n = normalizeParseOptions(r);
        if ("" === e || null == e)
          return n.plainObjects ? Object.create(null) : {};
        for (
          var a = "string" == typeof e ? parseValues(e, n) : e,
            l = n.plainObjects ? Object.create(null) : {},
            u = Object.keys(a),
            c = 0;
          c < u.length;
          ++c
        ) {
          var h = u[c],
            d = parseKeys(h, a[h], n, "string" == typeof e);
          l = s.merge(l, d, n);
        }
        return !0 === n.allowSparse ? l : s.compact(l);
      };
    },
    58261: function (e, r, n) {
      "use strict";
      var s = n(37478),
        a = n(12769),
        l = n(55798),
        u = Object.prototype.hasOwnProperty,
        c = {
          brackets: function (e) {
            return e + "[]";
          },
          comma: "comma",
          indices: function (e, r) {
            return e + "[" + r + "]";
          },
          repeat: function (e) {
            return e;
          },
        },
        h = Array.isArray,
        d = Array.prototype.push,
        pushToArray = function (e, r) {
          d.apply(e, h(r) ? r : [r]);
        },
        f = Date.prototype.toISOString,
        p = l.default,
        m = {
          addQueryPrefix: !1,
          allowDots: !1,
          allowEmptyArrays: !1,
          arrayFormat: "indices",
          charset: "utf-8",
          charsetSentinel: !1,
          delimiter: "&",
          encode: !0,
          encodeDotInKeys: !1,
          encoder: a.encode,
          encodeValuesOnly: !1,
          format: p,
          formatter: l.formatters[p],
          indices: !1,
          serializeDate: function (e) {
            return f.call(e);
          },
          skipNulls: !1,
          strictNullHandling: !1,
        },
        y = {},
        stringify = function stringify(
          e,
          r,
          n,
          l,
          u,
          c,
          d,
          f,
          p,
          g,
          v,
          b,
          w,
          x,
          _,
          S,
          A,
          T
        ) {
          for (
            var O, P, j = e, k = T, C = 0, R = !1;
            void 0 !== (k = k.get(y)) && !R;

          ) {
            var D = k.get(e);
            if (((C += 1), void 0 !== D)) {
              if (D === C) throw RangeError("Cyclic object value");
              R = !0;
            }
            void 0 === k.get(y) && (C = 0);
          }
          if (
            ("function" == typeof g
              ? (j = g(r, j))
              : j instanceof Date
              ? (j = w(j))
              : "comma" === n &&
                h(j) &&
                (j = a.maybeMap(j, function (e) {
                  return e instanceof Date ? w(e) : e;
                })),
            null === j)
          ) {
            if (c) return p && !S ? p(r, m.encoder, A, "key", x) : r;
            j = "";
          }
          if (
            "string" == typeof (O = j) ||
            "number" == typeof O ||
            "boolean" == typeof O ||
            "symbol" == typeof O ||
            "bigint" == typeof O ||
            a.isBuffer(j)
          )
            return p
              ? [
                  _(S ? r : p(r, m.encoder, A, "key", x)) +
                    "=" +
                    _(p(j, m.encoder, A, "value", x)),
                ]
              : [_(r) + "=" + _(String(j))];
          var B = [];
          if (void 0 === j) return B;
          if ("comma" === n && h(j))
            S && p && (j = a.maybeMap(j, p)),
              (P = [{ value: j.length > 0 ? j.join(",") || null : void 0 }]);
          else if (h(g)) P = g;
          else {
            var I = Object.keys(j);
            P = v ? I.sort(v) : I;
          }
          var V = f ? r.replace(/\./g, "%2E") : r,
            L = l && h(j) && 1 === j.length ? V + "[]" : V;
          if (u && h(j) && 0 === j.length) return L + "[]";
          for (var M = 0; M < P.length; ++M) {
            var N = P[M],
              U = "object" == typeof N && void 0 !== N.value ? N.value : j[N];
            if (!d || null !== U) {
              var $ = b && f ? N.replace(/\./g, "%2E") : N,
                q = h(j)
                  ? "function" == typeof n
                    ? n(L, $)
                    : L
                  : L + (b ? "." + $ : "[" + $ + "]");
              T.set(e, C);
              var z = s();
              z.set(y, T),
                pushToArray(
                  B,
                  stringify(
                    U,
                    q,
                    n,
                    l,
                    u,
                    c,
                    d,
                    f,
                    "comma" === n && S && h(j) ? null : p,
                    g,
                    v,
                    b,
                    w,
                    x,
                    _,
                    S,
                    A,
                    z
                  )
                );
            }
          }
          return B;
        },
        normalizeStringifyOptions = function (e) {
          if (!e) return m;
          if (
            void 0 !== e.allowEmptyArrays &&
            "boolean" != typeof e.allowEmptyArrays
          )
            throw TypeError(
              "`allowEmptyArrays` option can only be `true` or `false`, when provided"
            );
          if (
            void 0 !== e.encodeDotInKeys &&
            "boolean" != typeof e.encodeDotInKeys
          )
            throw TypeError(
              "`encodeDotInKeys` option can only be `true` or `false`, when provided"
            );
          if (
            null !== e.encoder &&
            void 0 !== e.encoder &&
            "function" != typeof e.encoder
          )
            throw TypeError("Encoder has to be a function.");
          var r,
            n = e.charset || m.charset;
          if (
            void 0 !== e.charset &&
            "utf-8" !== e.charset &&
            "iso-8859-1" !== e.charset
          )
            throw TypeError(
              "The charset option must be either utf-8, iso-8859-1, or undefined"
            );
          var s = l.default;
          if (void 0 !== e.format) {
            if (!u.call(l.formatters, e.format))
              throw TypeError("Unknown format option provided.");
            s = e.format;
          }
          var a = l.formatters[s],
            d = m.filter;
          if (
            (("function" == typeof e.filter || h(e.filter)) && (d = e.filter),
            (r =
              e.arrayFormat in c
                ? e.arrayFormat
                : "indices" in e
                ? e.indices
                  ? "indices"
                  : "repeat"
                : m.arrayFormat),
            "commaRoundTrip" in e && "boolean" != typeof e.commaRoundTrip)
          )
            throw TypeError("`commaRoundTrip` must be a boolean, or absent");
          var f =
            void 0 === e.allowDots
              ? !0 === e.encodeDotInKeys || m.allowDots
              : !!e.allowDots;
          return {
            addQueryPrefix:
              "boolean" == typeof e.addQueryPrefix
                ? e.addQueryPrefix
                : m.addQueryPrefix,
            allowDots: f,
            allowEmptyArrays:
              "boolean" == typeof e.allowEmptyArrays
                ? !!e.allowEmptyArrays
                : m.allowEmptyArrays,
            arrayFormat: r,
            charset: n,
            charsetSentinel:
              "boolean" == typeof e.charsetSentinel
                ? e.charsetSentinel
                : m.charsetSentinel,
            commaRoundTrip: e.commaRoundTrip,
            delimiter: void 0 === e.delimiter ? m.delimiter : e.delimiter,
            encode: "boolean" == typeof e.encode ? e.encode : m.encode,
            encodeDotInKeys:
              "boolean" == typeof e.encodeDotInKeys
                ? e.encodeDotInKeys
                : m.encodeDotInKeys,
            encoder: "function" == typeof e.encoder ? e.encoder : m.encoder,
            encodeValuesOnly:
              "boolean" == typeof e.encodeValuesOnly
                ? e.encodeValuesOnly
                : m.encodeValuesOnly,
            filter: d,
            format: s,
            formatter: a,
            serializeDate:
              "function" == typeof e.serializeDate
                ? e.serializeDate
                : m.serializeDate,
            skipNulls:
              "boolean" == typeof e.skipNulls ? e.skipNulls : m.skipNulls,
            sort: "function" == typeof e.sort ? e.sort : null,
            strictNullHandling:
              "boolean" == typeof e.strictNullHandling
                ? e.strictNullHandling
                : m.strictNullHandling,
          };
        };
      e.exports = function (e, r) {
        var n,
          a = e,
          l = normalizeStringifyOptions(r);
        "function" == typeof l.filter
          ? (a = (0, l.filter)("", a))
          : h(l.filter) && (n = l.filter);
        var u = [];
        if ("object" != typeof a || null === a) return "";
        var d = c[l.arrayFormat],
          f = "comma" === d && l.commaRoundTrip;
        n || (n = Object.keys(a)), l.sort && n.sort(l.sort);
        for (var p = s(), m = 0; m < n.length; ++m) {
          var y = n[m];
          (l.skipNulls && null === a[y]) ||
            pushToArray(
              u,
              stringify(
                a[y],
                y,
                d,
                f,
                l.allowEmptyArrays,
                l.strictNullHandling,
                l.skipNulls,
                l.encodeDotInKeys,
                l.encode ? l.encoder : null,
                l.filter,
                l.sort,
                l.allowDots,
                l.serializeDate,
                l.format,
                l.formatter,
                l.encodeValuesOnly,
                l.charset,
                p
              )
            );
        }
        var g = u.join(l.delimiter),
          v = !0 === l.addQueryPrefix ? "?" : "";
        return (
          l.charsetSentinel &&
            ("iso-8859-1" === l.charset
              ? (v += "utf8=%26%2310003%3B&")
              : (v += "utf8=%E2%9C%93&")),
          g.length > 0 ? v + g : ""
        );
      };
    },
    12769: function (e, r, n) {
      "use strict";
      var s = n(55798),
        a = Object.prototype.hasOwnProperty,
        l = Array.isArray,
        u = (function () {
          for (var e = [], r = 0; r < 256; ++r)
            e.push("%" + ((r < 16 ? "0" : "") + r.toString(16)).toUpperCase());
          return e;
        })(),
        compactQueue = function (e) {
          for (; e.length > 1; ) {
            var r = e.pop(),
              n = r.obj[r.prop];
            if (l(n)) {
              for (var s = [], a = 0; a < n.length; ++a)
                void 0 !== n[a] && s.push(n[a]);
              r.obj[r.prop] = s;
            }
          }
        },
        arrayToObject = function (e, r) {
          for (
            var n = r && r.plainObjects ? Object.create(null) : {}, s = 0;
            s < e.length;
            ++s
          )
            void 0 !== e[s] && (n[s] = e[s]);
          return n;
        };
      e.exports = {
        arrayToObject: arrayToObject,
        assign: function (e, r) {
          return Object.keys(r).reduce(function (e, n) {
            return (e[n] = r[n]), e;
          }, e);
        },
        combine: function (e, r) {
          return [].concat(e, r);
        },
        compact: function (e) {
          for (
            var r = [{ obj: { o: e }, prop: "o" }], n = [], s = 0;
            s < r.length;
            ++s
          )
            for (
              var a = r[s], l = a.obj[a.prop], u = Object.keys(l), c = 0;
              c < u.length;
              ++c
            ) {
              var h = u[c],
                d = l[h];
              "object" == typeof d &&
                null !== d &&
                -1 === n.indexOf(d) &&
                (r.push({ obj: l, prop: h }), n.push(d));
            }
          return compactQueue(r), e;
        },
        decode: function (e, r, n) {
          var s = e.replace(/\+/g, " ");
          if ("iso-8859-1" === n) return s.replace(/%[0-9a-f]{2}/gi, unescape);
          try {
            return decodeURIComponent(s);
          } catch (e) {
            return s;
          }
        },
        encode: function (e, r, n, a, l) {
          if (0 === e.length) return e;
          var c = e;
          if (
            ("symbol" == typeof e
              ? (c = Symbol.prototype.toString.call(e))
              : "string" != typeof e && (c = String(e)),
            "iso-8859-1" === n)
          )
            return escape(c).replace(/%u[0-9a-f]{4}/gi, function (e) {
              return "%26%23" + parseInt(e.slice(2), 16) + "%3B";
            });
          for (var h = "", d = 0; d < c.length; ++d) {
            var f = c.charCodeAt(d);
            if (
              45 === f ||
              46 === f ||
              95 === f ||
              126 === f ||
              (f >= 48 && f <= 57) ||
              (f >= 65 && f <= 90) ||
              (f >= 97 && f <= 122) ||
              (l === s.RFC1738 && (40 === f || 41 === f))
            ) {
              h += c.charAt(d);
              continue;
            }
            if (f < 128) {
              h += u[f];
              continue;
            }
            if (f < 2048) {
              h += u[192 | (f >> 6)] + u[128 | (63 & f)];
              continue;
            }
            if (f < 55296 || f >= 57344) {
              h +=
                u[224 | (f >> 12)] +
                u[128 | ((f >> 6) & 63)] +
                u[128 | (63 & f)];
              continue;
            }
            (d += 1),
              (h +=
                u[
                  240 |
                    ((f =
                      65536 +
                      (((1023 & f) << 10) | (1023 & c.charCodeAt(d)))) >>
                      18)
                ] +
                u[128 | ((f >> 12) & 63)] +
                u[128 | ((f >> 6) & 63)] +
                u[128 | (63 & f)]);
          }
          return h;
        },
        isBuffer: function (e) {
          return (
            !!e &&
            "object" == typeof e &&
            !!(
              e.constructor &&
              e.constructor.isBuffer &&
              e.constructor.isBuffer(e)
            )
          );
        },
        isRegExp: function (e) {
          return "[object RegExp]" === Object.prototype.toString.call(e);
        },
        maybeMap: function (e, r) {
          if (l(e)) {
            for (var n = [], s = 0; s < e.length; s += 1) n.push(r(e[s]));
            return n;
          }
          return r(e);
        },
        merge: function merge(e, r, n) {
          if (!r) return e;
          if ("object" != typeof r) {
            if (l(e)) e.push(r);
            else {
              if (!e || "object" != typeof e) return [e, r];
              ((n && (n.plainObjects || n.allowPrototypes)) ||
                !a.call(Object.prototype, r)) &&
                (e[r] = !0);
            }
            return e;
          }
          if (!e || "object" != typeof e) return [e].concat(r);
          var s = e;
          return (l(e) && !l(r) && (s = arrayToObject(e, n)), l(e) && l(r))
            ? (r.forEach(function (r, s) {
                if (a.call(e, s)) {
                  var l = e[s];
                  l && "object" == typeof l && r && "object" == typeof r
                    ? (e[s] = merge(l, r, n))
                    : e.push(r);
                } else e[s] = r;
              }),
              e)
            : Object.keys(r).reduce(function (e, s) {
                var l = r[s];
                return (
                  a.call(e, s) ? (e[s] = merge(e[s], l, n)) : (e[s] = l), e
                );
              }, s);
        },
      };
    },
    67771: function (e, r, n) {
      "use strict";
      var s = n(40210),
        a = n(12296),
        l = n(31044)(),
        u = n(27296),
        c = n(14453),
        h = s("%Math.floor%");
      e.exports = function (e, r) {
        if ("function" != typeof e) throw new c("`fn` is not a function");
        if ("number" != typeof r || r < 0 || r > 4294967295 || h(r) !== r)
          throw new c("`length` must be a positive 32-bit integer");
        var n = arguments.length > 2 && !!arguments[2],
          s = !0,
          d = !0;
        if ("length" in e && u) {
          var f = u(e, "length");
          f && !f.configurable && (s = !1), f && !f.writable && (d = !1);
        }
        return (
          (s || d || !n) && (l ? a(e, "length", r, !0, !0) : a(e, "length", r)),
          e
        );
      };
    },
    37478: function (e, r, n) {
      "use strict";
      var s = n(40210),
        a = n(21924),
        l = n(70631),
        u = n(14453),
        c = s("%WeakMap%", !0),
        h = s("%Map%", !0),
        d = a("WeakMap.prototype.get", !0),
        f = a("WeakMap.prototype.set", !0),
        p = a("WeakMap.prototype.has", !0),
        m = a("Map.prototype.get", !0),
        y = a("Map.prototype.set", !0),
        g = a("Map.prototype.has", !0),
        listGetNode = function (e, r) {
          for (var n, s = e; null !== (n = s.next); s = n)
            if (n.key === r)
              return (s.next = n.next), (n.next = e.next), (e.next = n), n;
        },
        listGet = function (e, r) {
          var n = listGetNode(e, r);
          return n && n.value;
        },
        listSet = function (e, r, n) {
          var s = listGetNode(e, r);
          s ? (s.value = n) : (e.next = { key: r, next: e.next, value: n });
        };
      e.exports = function () {
        var e,
          r,
          n,
          s = {
            assert: function (e) {
              if (!s.has(e))
                throw new u("Side channel does not contain " + l(e));
            },
            get: function (s) {
              if (c && s && ("object" == typeof s || "function" == typeof s)) {
                if (e) return d(e, s);
              } else if (h) {
                if (r) return m(r, s);
              } else if (n) return listGet(n, s);
            },
            has: function (s) {
              if (c && s && ("object" == typeof s || "function" == typeof s)) {
                if (e) return p(e, s);
              } else if (h) {
                if (r) return g(r, s);
              } else if (n) return !!listGetNode(n, s);
              return !1;
            },
            set: function (s, a) {
              c && s && ("object" == typeof s || "function" == typeof s)
                ? (e || (e = new c()), f(e, s, a))
                : h
                ? (r || (r = new h()), y(r, s, a))
                : (n || (n = { key: {}, next: null }), listSet(n, s, a));
            },
          };
        return s;
      };
    },
    59885: function (e) {
      let r =
          /[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g,
        words = (e) => e.match(r) || [],
        upperFirst = (e) => e[0].toUpperCase() + e.slice(1),
        join = (e, r) => words(e).join(r).toLowerCase(),
        camelCase = (e) =>
          words(e).reduce(
            (e, r) =>
              `${e}${
                e
                  ? r[0].toUpperCase() + r.slice(1).toLowerCase()
                  : r.toLowerCase()
              }`,
            ""
          );
      e.exports = {
        words,
        upperFirst,
        camelCase,
        pascalCase: (e) => upperFirst(camelCase(e)),
        snakeCase: (e) => join(e, "_"),
        kebabCase: (e) => join(e, "-"),
        sentenceCase: (e) => upperFirst(join(e, " ")),
        titleCase: (e) => words(e).map(upperFirst).join(" "),
      };
    },
    94633: function (e) {
      function toposort(e, r) {
        var n = e.length,
          s = Array(n),
          a = {},
          l = n,
          u = (function (e) {
            for (var r = new Map(), n = 0, s = e.length; n < s; n++) {
              var a = e[n];
              r.has(a[0]) || r.set(a[0], new Set()),
                r.has(a[1]) || r.set(a[1], new Set()),
                r.get(a[0]).add(a[1]);
            }
            return r;
          })(r),
          c = (function (e) {
            for (var r = new Map(), n = 0, s = e.length; n < s; n++)
              r.set(e[n], n);
            return r;
          })(e);
        for (
          r.forEach(function (e) {
            if (!c.has(e[0]) || !c.has(e[1]))
              throw Error(
                "Unknown node. There is an unknown node in the supplied edges."
              );
          });
          l--;

        )
          a[l] ||
            (function visit(e, r, l) {
              if (l.has(e)) {
                var h;
                try {
                  h = ", node was:" + JSON.stringify(e);
                } catch (e) {
                  h = "";
                }
                throw Error("Cyclic dependency" + h);
              }
              if (!c.has(e))
                throw Error(
                  "Found unknown node. Make sure to provided all involved nodes. Unknown node: " +
                    JSON.stringify(e)
                );
              if (!a[r]) {
                a[r] = !0;
                var d = u.get(e) || new Set();
                if ((r = (d = Array.from(d)).length)) {
                  l.add(e);
                  do {
                    var f = d[--r];
                    visit(f, c.get(f), l);
                  } while (r);
                  l.delete(e);
                }
                s[--n] = e;
              }
            })(e[l], l, new Set());
        return s;
      }
      (e.exports = function (e) {
        return toposort(
          (function (e) {
            for (var r = new Set(), n = 0, s = e.length; n < s; n++) {
              var a = e[n];
              r.add(a[0]), r.add(a[1]);
            }
            return Array.from(r);
          })(e),
          e
        );
      }),
        (e.exports.array = toposort);
    },
    67844: function (e, r, n) {
      "use strict";
      var s =
        (this && this.__assign) ||
        function () {
          return (s =
            Object.assign ||
            function (e) {
              for (var r, n = 1, s = arguments.length; n < s; n++)
                for (var a in (r = arguments[n]))
                  Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
              return e;
            }).apply(this, arguments);
        };
      Object.defineProperty(r, "__esModule", { value: !0 });
      var a = n(67294);
      r.default = function (e, r, n) {
        var l = a.useMemo(
            function () {
              return s(
                {
                  serializer: JSON.stringify,
                  parser: JSON.parse,
                  logger: console.log,
                  syncData: !0,
                },
                n
              );
            },
            [n]
          ),
          u = l.serializer,
          c = l.parser,
          h = l.logger,
          d = l.syncData,
          f = a.useState(function () {
            if ("undefined" == typeof window) return r;
            try {
              var n = window.localStorage.getItem(e);
              return n ? c(n) : r;
            } catch (e) {
              return h(e), r;
            }
          }),
          p = f[0],
          m = f[1];
        return (
          a.useEffect(
            function () {
              if ("undefined" != typeof window)
                try {
                  void 0 !== p
                    ? window.localStorage.setItem(e, u(p))
                    : window.localStorage.removeItem(e);
                } catch (e) {
                  h(e);
                }
            },
            [p]
          ),
          a.useEffect(
            function () {
              if (d) {
                var handleStorageChange = function (r) {
                  if (r.key === e && r.storageArea === window.localStorage)
                    try {
                      m(r.newValue ? c(r.newValue) : void 0);
                    } catch (e) {
                      h(e);
                    }
                };
                if ("undefined" != typeof window)
                  return (
                    window.addEventListener("storage", handleStorageChange),
                    function () {
                      return window.removeEventListener(
                        "storage",
                        handleStorageChange
                      );
                    }
                  );
              }
            },
            [e, d]
          ),
          [p, m]
        );
      };
    },
    16310: function (e, r, n) {
      "use strict";
      let s, a, l;
      n.d(r, {
        Ry: function () {
          return create$3;
        },
        Z_: function () {
          return create$6;
        },
      });
      var u = n(55760),
        c = n(59885),
        h = n(94633),
        d = n.n(h);
      let f = Object.prototype.toString,
        p = Error.prototype.toString,
        m = RegExp.prototype.toString,
        y = "undefined" != typeof Symbol ? Symbol.prototype.toString : () => "",
        g = /^Symbol\((.*)\)(.*)$/;
      function printSimpleValue(e, r = !1) {
        if (null == e || !0 === e || !1 === e) return "" + e;
        let n = typeof e;
        if ("number" === n)
          return e != +e ? "NaN" : 0 === e && 1 / e < 0 ? "-0" : "" + e;
        if ("string" === n) return r ? `"${e}"` : e;
        if ("function" === n)
          return "[Function " + (e.name || "anonymous") + "]";
        if ("symbol" === n) return y.call(e).replace(g, "Symbol($1)");
        let s = f.call(e).slice(8, -1);
        return "Date" === s
          ? isNaN(e.getTime())
            ? "" + e
            : e.toISOString(e)
          : "Error" === s || e instanceof Error
          ? "[" + p.call(e) + "]"
          : "RegExp" === s
          ? m.call(e)
          : null;
      }
      function printValue(e, r) {
        let n = printSimpleValue(e, r);
        return null !== n
          ? n
          : JSON.stringify(
              e,
              function (e, n) {
                let s = printSimpleValue(this[e], r);
                return null !== s ? s : n;
              },
              2
            );
      }
      function toArray(e) {
        return null == e ? [] : [].concat(e);
      }
      let v = /\$\{\s*(\w+)\s*\}/g;
      s = Symbol.toStringTag;
      let ValidationErrorNoStack = class ValidationErrorNoStack {
        constructor(e, r, n, a) {
          (this.name = void 0),
            (this.message = void 0),
            (this.value = void 0),
            (this.path = void 0),
            (this.type = void 0),
            (this.params = void 0),
            (this.errors = void 0),
            (this.inner = void 0),
            (this[s] = "Error"),
            (this.name = "ValidationError"),
            (this.value = r),
            (this.path = n),
            (this.type = a),
            (this.errors = []),
            (this.inner = []),
            toArray(e).forEach((e) => {
              if (ValidationError.isError(e)) {
                this.errors.push(...e.errors);
                let r = e.inner.length ? e.inner : [e];
                this.inner.push(...r);
              } else this.errors.push(e);
            }),
            (this.message =
              this.errors.length > 1
                ? `${this.errors.length} errors occurred`
                : this.errors[0]);
        }
      };
      (a = Symbol.hasInstance), (l = Symbol.toStringTag);
      let ValidationError = class ValidationError extends Error {
        static formatError(e, r) {
          let n = r.label || r.path || "this";
          return (n !== r.path && (r = Object.assign({}, r, { path: n })),
          "string" == typeof e)
            ? e.replace(v, (e, n) => printValue(r[n]))
            : "function" == typeof e
            ? e(r)
            : e;
        }
        static isError(e) {
          return e && "ValidationError" === e.name;
        }
        constructor(e, r, n, s, a) {
          let u = new ValidationErrorNoStack(e, r, n, s);
          if (a) return u;
          super(),
            (this.value = void 0),
            (this.path = void 0),
            (this.type = void 0),
            (this.params = void 0),
            (this.errors = []),
            (this.inner = []),
            (this[l] = "Error"),
            (this.name = u.name),
            (this.message = u.message),
            (this.type = u.type),
            (this.value = u.value),
            (this.path = u.path),
            (this.errors = u.errors),
            (this.inner = u.inner),
            Error.captureStackTrace &&
              Error.captureStackTrace(this, ValidationError);
        }
        static [a](e) {
          return (
            ValidationErrorNoStack[Symbol.hasInstance](e) ||
            super[Symbol.hasInstance](e)
          );
        }
      };
      let b = {
          default: "${path} is invalid",
          required: "${path} is a required field",
          defined: "${path} must be defined",
          notNull: "${path} cannot be null",
          oneOf: "${path} must be one of the following values: ${values}",
          notOneOf:
            "${path} must not be one of the following values: ${values}",
          notType: ({ path: e, type: r, value: n, originalValue: s }) => {
            let a =
              null != s && s !== n
                ? ` (cast from the value \`${printValue(s, !0)}\`).`
                : ".";
            return "mixed" !== r
              ? `${e} must be a \`${r}\` type, but the final value was: \`${printValue(
                  n,
                  !0
                )}\`` + a
              : `${e} must match the configured type. The validated value was: \`${printValue(
                  n,
                  !0
                )}\`` + a;
          },
        },
        w = {
          length: "${path} must be exactly ${length} characters",
          min: "${path} must be at least ${min} characters",
          max: "${path} must be at most ${max} characters",
          matches: '${path} must match the following: "${regex}"',
          email: "${path} must be a valid email",
          url: "${path} must be a valid URL",
          uuid: "${path} must be a valid UUID",
          datetime: "${path} must be a valid ISO date-time",
          datetime_precision:
            "${path} must be a valid ISO date-time with a sub-second precision of exactly ${precision} digits",
          datetime_offset:
            '${path} must be a valid ISO date-time with UTC "Z" timezone',
          trim: "${path} must be a trimmed string",
          lowercase: "${path} must be a lowercase string",
          uppercase: "${path} must be a upper case string",
        },
        x = {
          min: "${path} field must be later than ${min}",
          max: "${path} field must be at earlier than ${max}",
        },
        _ = { noUnknown: "${path} field has unspecified keys: ${unknown}" };
      Object.assign(Object.create(null), {
        mixed: b,
        string: w,
        number: {
          min: "${path} must be greater than or equal to ${min}",
          max: "${path} must be less than or equal to ${max}",
          lessThan: "${path} must be less than ${less}",
          moreThan: "${path} must be greater than ${more}",
          positive: "${path} must be a positive number",
          negative: "${path} must be a negative number",
          integer: "${path} must be an integer",
        },
        date: x,
        object: _,
        array: {
          min: "${path} field must have at least ${min} items",
          max: "${path} field must have less than or equal to ${max} items",
          length: "${path} must have ${length} items",
        },
        boolean: { isValue: "${path} field must be ${value}" },
        tuple: {
          notType: (e) => {
            let { path: r, value: n, spec: s } = e,
              a = s.types.length;
            if (Array.isArray(n)) {
              if (n.length < a)
                return `${r} tuple value has too few items, expected a length of ${a} but got ${
                  n.length
                } for value: \`${printValue(n, !0)}\``;
              if (n.length > a)
                return `${r} tuple value has too many items, expected a length of ${a} but got ${
                  n.length
                } for value: \`${printValue(n, !0)}\``;
            }
            return ValidationError.formatError(b.notType, e);
          },
        },
      });
      let isSchema = (e) => e && e.__isYupSchema__;
      let Condition = class Condition {
        static fromOptions(e, r) {
          if (!r.then && !r.otherwise)
            throw TypeError(
              "either `then:` or `otherwise:` is required for `when()` conditions"
            );
          let { is: n, then: s, otherwise: a } = r,
            l = "function" == typeof n ? n : (...e) => e.every((e) => e === n);
          return new Condition(e, (e, r) => {
            var n;
            let u = l(...e) ? s : a;
            return null != (n = null == u ? void 0 : u(r)) ? n : r;
          });
        }
        constructor(e, r) {
          (this.fn = void 0), (this.refs = e), (this.refs = e), (this.fn = r);
        }
        resolve(e, r) {
          let n = this.refs.map((e) =>
              e.getValue(
                null == r ? void 0 : r.value,
                null == r ? void 0 : r.parent,
                null == r ? void 0 : r.context
              )
            ),
            s = this.fn(n, e, r);
          if (void 0 === s || s === e) return e;
          if (!isSchema(s))
            throw TypeError("conditions must return a schema object");
          return s.resolve(r);
        }
      };
      let S = { context: "$", value: "." };
      let Reference = class Reference {
        constructor(e, r = {}) {
          if (
            ((this.key = void 0),
            (this.isContext = void 0),
            (this.isValue = void 0),
            (this.isSibling = void 0),
            (this.path = void 0),
            (this.getter = void 0),
            (this.map = void 0),
            "string" != typeof e)
          )
            throw TypeError("ref must be a string, got: " + e);
          if (((this.key = e.trim()), "" === e))
            throw TypeError("ref must be a non-empty string");
          (this.isContext = this.key[0] === S.context),
            (this.isValue = this.key[0] === S.value),
            (this.isSibling = !this.isContext && !this.isValue);
          let n = this.isContext ? S.context : this.isValue ? S.value : "";
          (this.path = this.key.slice(n.length)),
            (this.getter = this.path && (0, u.getter)(this.path, !0)),
            (this.map = r.map);
        }
        getValue(e, r, n) {
          let s = this.isContext ? n : this.isValue ? e : r;
          return (
            this.getter && (s = this.getter(s || {})),
            this.map && (s = this.map(s)),
            s
          );
        }
        cast(e, r) {
          return this.getValue(
            e,
            null == r ? void 0 : r.parent,
            null == r ? void 0 : r.context
          );
        }
        resolve() {
          return this;
        }
        describe() {
          return { type: "ref", key: this.key };
        }
        toString() {
          return `Ref(${this.key})`;
        }
        static isRef(e) {
          return e && e.__isYupRef;
        }
      };
      Reference.prototype.__isYupRef = !0;
      let isAbsent = (e) => null == e;
      function createValidation(e) {
        function validate(
          { value: r, path: n = "", options: s, originalValue: a, schema: l },
          u,
          c
        ) {
          let h;
          let { name: d, test: f, params: p, message: m, skipAbsent: y } = e,
            {
              parent: g,
              context: v,
              abortEarly: b = l.spec.abortEarly,
              disableStackTrace: w = l.spec.disableStackTrace,
            } = s;
          function resolve(e) {
            return Reference.isRef(e) ? e.getValue(r, g, v) : e;
          }
          function createError(e = {}) {
            let s = Object.assign(
              {
                value: r,
                originalValue: a,
                label: l.spec.label,
                path: e.path || n,
                spec: l.spec,
                disableStackTrace: e.disableStackTrace || w,
              },
              p,
              e.params
            );
            for (let e of Object.keys(s)) s[e] = resolve(s[e]);
            let u = new ValidationError(
              ValidationError.formatError(e.message || m, s),
              r,
              s.path,
              e.type || d,
              s.disableStackTrace
            );
            return (u.params = s), u;
          }
          let x = b ? u : c,
            _ = {
              path: n,
              parent: g,
              type: d,
              from: s.from,
              createError,
              resolve,
              options: s,
              originalValue: a,
              schema: l,
            },
            handleResult = (e) => {
              ValidationError.isError(e)
                ? x(e)
                : e
                ? c(null)
                : x(createError());
            },
            handleError = (e) => {
              ValidationError.isError(e) ? x(e) : u(e);
            },
            S = y && isAbsent(r);
          if (S) return handleResult(!0);
          try {
            var A;
            if (
              ((h = f.call(_, r, _)),
              "function" == typeof (null == (A = h) ? void 0 : A.then))
            ) {
              if (s.sync)
                throw Error(
                  `Validation test of type: "${_.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`
                );
              return Promise.resolve(h).then(handleResult, handleError);
            }
          } catch (e) {
            handleError(e);
            return;
          }
          handleResult(h);
        }
        return (validate.OPTIONS = e), validate;
      }
      let ReferenceSet = class ReferenceSet extends Set {
        describe() {
          let e = [];
          for (let r of this.values())
            e.push(Reference.isRef(r) ? r.describe() : r);
          return e;
        }
        resolveAll(e) {
          let r = [];
          for (let n of this.values()) r.push(e(n));
          return r;
        }
        clone() {
          return new ReferenceSet(this.values());
        }
        merge(e, r) {
          let n = this.clone();
          return e.forEach((e) => n.add(e)), r.forEach((e) => n.delete(e)), n;
        }
      };
      function clone(e, r = new Map()) {
        let n;
        if (isSchema(e) || !e || "object" != typeof e) return e;
        if (r.has(e)) return r.get(e);
        if (e instanceof Date) (n = new Date(e.getTime())), r.set(e, n);
        else if (e instanceof RegExp) (n = new RegExp(e)), r.set(e, n);
        else if (Array.isArray(e)) {
          (n = Array(e.length)), r.set(e, n);
          for (let s = 0; s < e.length; s++) n[s] = clone(e[s], r);
        } else if (e instanceof Map)
          for (let [s, a] of ((n = new Map()), r.set(e, n), e.entries()))
            n.set(s, clone(a, r));
        else if (e instanceof Set)
          for (let s of ((n = new Set()), r.set(e, n), e)) n.add(clone(s, r));
        else if (e instanceof Object)
          for (let [s, a] of ((n = {}), r.set(e, n), Object.entries(e)))
            n[s] = clone(a, r);
        else throw Error(`Unable to clone ${e}`);
        return n;
      }
      let Schema = class Schema {
        constructor(e) {
          (this.type = void 0),
            (this.deps = []),
            (this.tests = void 0),
            (this.transforms = void 0),
            (this.conditions = []),
            (this._mutate = void 0),
            (this.internalTests = {}),
            (this._whitelist = new ReferenceSet()),
            (this._blacklist = new ReferenceSet()),
            (this.exclusiveTests = Object.create(null)),
            (this._typeCheck = void 0),
            (this.spec = void 0),
            (this.tests = []),
            (this.transforms = []),
            this.withMutation(() => {
              this.typeError(b.notType);
            }),
            (this.type = e.type),
            (this._typeCheck = e.check),
            (this.spec = Object.assign(
              {
                strip: !1,
                strict: !1,
                abortEarly: !0,
                recursive: !0,
                disableStackTrace: !1,
                nullable: !1,
                optional: !0,
                coerce: !0,
              },
              null == e ? void 0 : e.spec
            )),
            this.withMutation((e) => {
              e.nonNullable();
            });
        }
        get _type() {
          return this.type;
        }
        clone(e) {
          if (this._mutate) return e && Object.assign(this.spec, e), this;
          let r = Object.create(Object.getPrototypeOf(this));
          return (
            (r.type = this.type),
            (r._typeCheck = this._typeCheck),
            (r._whitelist = this._whitelist.clone()),
            (r._blacklist = this._blacklist.clone()),
            (r.internalTests = Object.assign({}, this.internalTests)),
            (r.exclusiveTests = Object.assign({}, this.exclusiveTests)),
            (r.deps = [...this.deps]),
            (r.conditions = [...this.conditions]),
            (r.tests = [...this.tests]),
            (r.transforms = [...this.transforms]),
            (r.spec = clone(Object.assign({}, this.spec, e))),
            r
          );
        }
        label(e) {
          let r = this.clone();
          return (r.spec.label = e), r;
        }
        meta(...e) {
          if (0 === e.length) return this.spec.meta;
          let r = this.clone();
          return (r.spec.meta = Object.assign(r.spec.meta || {}, e[0])), r;
        }
        withMutation(e) {
          let r = this._mutate;
          this._mutate = !0;
          let n = e(this);
          return (this._mutate = r), n;
        }
        concat(e) {
          if (!e || e === this) return this;
          if (e.type !== this.type && "mixed" !== this.type)
            throw TypeError(
              `You cannot \`concat()\` schema's of different types: ${this.type} and ${e.type}`
            );
          let r = e.clone(),
            n = Object.assign({}, this.spec, r.spec);
          return (
            (r.spec = n),
            (r.internalTests = Object.assign(
              {},
              this.internalTests,
              r.internalTests
            )),
            (r._whitelist = this._whitelist.merge(e._whitelist, e._blacklist)),
            (r._blacklist = this._blacklist.merge(e._blacklist, e._whitelist)),
            (r.tests = this.tests),
            (r.exclusiveTests = this.exclusiveTests),
            r.withMutation((r) => {
              e.tests.forEach((e) => {
                r.test(e.OPTIONS);
              });
            }),
            (r.transforms = [...this.transforms, ...r.transforms]),
            r
          );
        }
        isType(e) {
          return null == e
            ? (!!this.spec.nullable && null === e) ||
                (!!this.spec.optional && void 0 === e)
            : this._typeCheck(e);
        }
        resolve(e) {
          let r = this;
          if (r.conditions.length) {
            let n = r.conditions;
            ((r = r.clone()).conditions = []),
              (r = (r = n.reduce((r, n) => n.resolve(r, e), r)).resolve(e));
          }
          return r;
        }
        resolveOptions(e) {
          var r, n, s, a;
          return Object.assign({}, e, {
            from: e.from || [],
            strict: null != (r = e.strict) ? r : this.spec.strict,
            abortEarly: null != (n = e.abortEarly) ? n : this.spec.abortEarly,
            recursive: null != (s = e.recursive) ? s : this.spec.recursive,
            disableStackTrace:
              null != (a = e.disableStackTrace)
                ? a
                : this.spec.disableStackTrace,
          });
        }
        cast(e, r = {}) {
          let n = this.resolve(Object.assign({ value: e }, r)),
            s = "ignore-optionality" === r.assert,
            a = n._cast(e, r);
          if (!1 !== r.assert && !n.isType(a)) {
            if (s && isAbsent(a)) return a;
            let l = printValue(e),
              u = printValue(a);
            throw TypeError(
              `The value of ${
                r.path || "field"
              } could not be cast to a value that satisfies the schema type: "${
                n.type
              }". 

attempted value: ${l} 
` + (u !== l ? `result of cast: ${u}` : "")
            );
          }
          return a;
        }
        _cast(e, r) {
          let n =
            void 0 === e
              ? e
              : this.transforms.reduce((r, n) => n.call(this, r, e, this), e);
          return void 0 === n && (n = this.getDefault(r)), n;
        }
        _validate(e, r = {}, n, s) {
          let {
              path: a,
              originalValue: l = e,
              strict: u = this.spec.strict,
            } = r,
            c = e;
          u || (c = this._cast(c, Object.assign({ assert: !1 }, r)));
          let h = [];
          for (let e of Object.values(this.internalTests)) e && h.push(e);
          this.runTests(
            { path: a, value: c, originalValue: l, options: r, tests: h },
            n,
            (e) => {
              if (e.length) return s(e, c);
              this.runTests(
                {
                  path: a,
                  value: c,
                  originalValue: l,
                  options: r,
                  tests: this.tests,
                },
                n,
                s
              );
            }
          );
        }
        runTests(e, r, n) {
          let s = !1,
            { tests: a, value: l, originalValue: u, path: c, options: h } = e,
            panicOnce = (e) => {
              s || ((s = !0), r(e, l));
            },
            nextOnce = (e) => {
              s || ((s = !0), n(e, l));
            },
            d = a.length,
            f = [];
          if (!d) return nextOnce([]);
          let p = {
            value: l,
            originalValue: u,
            path: c,
            options: h,
            schema: this,
          };
          for (let e = 0; e < a.length; e++) {
            let r = a[e];
            r(p, panicOnce, function (e) {
              e && (Array.isArray(e) ? f.push(...e) : f.push(e)),
                --d <= 0 && nextOnce(f);
            });
          }
        }
        asNestedTest({
          key: e,
          index: r,
          parent: n,
          parentPath: s,
          originalParent: a,
          options: l,
        }) {
          let u = null != e ? e : r;
          if (null == u)
            throw TypeError(
              "Must include `key` or `index` for nested validations"
            );
          let c = "number" == typeof u,
            h = n[u],
            d = Object.assign({}, l, {
              strict: !0,
              parent: n,
              value: h,
              originalValue: a[u],
              key: void 0,
              [c ? "index" : "key"]: u,
              path:
                c || u.includes(".")
                  ? `${s || ""}[${c ? u : `"${u}"`}]`
                  : (s ? `${s}.` : "") + e,
            });
          return (e, r, n) => this.resolve(d)._validate(h, d, r, n);
        }
        validate(e, r) {
          var n;
          let s = this.resolve(Object.assign({}, r, { value: e })),
            a =
              null != (n = null == r ? void 0 : r.disableStackTrace)
                ? n
                : s.spec.disableStackTrace;
          return new Promise((n, l) =>
            s._validate(
              e,
              r,
              (e, r) => {
                ValidationError.isError(e) && (e.value = r), l(e);
              },
              (e, r) => {
                e.length
                  ? l(new ValidationError(e, r, void 0, void 0, a))
                  : n(r);
              }
            )
          );
        }
        validateSync(e, r) {
          var n;
          let s;
          let a = this.resolve(Object.assign({}, r, { value: e })),
            l =
              null != (n = null == r ? void 0 : r.disableStackTrace)
                ? n
                : a.spec.disableStackTrace;
          return (
            a._validate(
              e,
              Object.assign({}, r, { sync: !0 }),
              (e, r) => {
                throw (ValidationError.isError(e) && (e.value = r), e);
              },
              (r, n) => {
                if (r.length)
                  throw new ValidationError(r, e, void 0, void 0, l);
                s = n;
              }
            ),
            s
          );
        }
        isValid(e, r) {
          return this.validate(e, r).then(
            () => !0,
            (e) => {
              if (ValidationError.isError(e)) return !1;
              throw e;
            }
          );
        }
        isValidSync(e, r) {
          try {
            return this.validateSync(e, r), !0;
          } catch (e) {
            if (ValidationError.isError(e)) return !1;
            throw e;
          }
        }
        _getDefault(e) {
          let r = this.spec.default;
          return null == r
            ? r
            : "function" == typeof r
            ? r.call(this, e)
            : clone(r);
        }
        getDefault(e) {
          return this.resolve(e || {})._getDefault(e);
        }
        default(e) {
          return 0 == arguments.length
            ? this._getDefault()
            : this.clone({ default: e });
        }
        strict(e = !0) {
          return this.clone({ strict: e });
        }
        nullability(e, r) {
          let n = this.clone({ nullable: e });
          return (
            (n.internalTests.nullable = createValidation({
              message: r,
              name: "nullable",
              test(e) {
                return null !== e || this.schema.spec.nullable;
              },
            })),
            n
          );
        }
        optionality(e, r) {
          let n = this.clone({ optional: e });
          return (
            (n.internalTests.optionality = createValidation({
              message: r,
              name: "optionality",
              test(e) {
                return void 0 !== e || this.schema.spec.optional;
              },
            })),
            n
          );
        }
        optional() {
          return this.optionality(!0);
        }
        defined(e = b.defined) {
          return this.optionality(!1, e);
        }
        nullable() {
          return this.nullability(!0);
        }
        nonNullable(e = b.notNull) {
          return this.nullability(!1, e);
        }
        required(e = b.required) {
          return this.clone().withMutation((r) => r.nonNullable(e).defined(e));
        }
        notRequired() {
          return this.clone().withMutation((e) => e.nullable().optional());
        }
        transform(e) {
          let r = this.clone();
          return r.transforms.push(e), r;
        }
        test(...e) {
          let r;
          if (
            (void 0 ===
              (r =
                1 === e.length
                  ? "function" == typeof e[0]
                    ? { test: e[0] }
                    : e[0]
                  : 2 === e.length
                  ? { name: e[0], test: e[1] }
                  : { name: e[0], message: e[1], test: e[2] }).message &&
              (r.message = b.default),
            "function" != typeof r.test)
          )
            throw TypeError("`test` is a required parameters");
          let n = this.clone(),
            s = createValidation(r),
            a = r.exclusive || (r.name && !0 === n.exclusiveTests[r.name]);
          if (r.exclusive && !r.name)
            throw TypeError(
              "Exclusive tests must provide a unique `name` identifying the test"
            );
          return (
            r.name && (n.exclusiveTests[r.name] = !!r.exclusive),
            (n.tests = n.tests.filter(
              (e) =>
                e.OPTIONS.name !== r.name ||
                (!a && e.OPTIONS.test !== s.OPTIONS.test)
            )),
            n.tests.push(s),
            n
          );
        }
        when(e, r) {
          Array.isArray(e) || "string" == typeof e || ((r = e), (e = "."));
          let n = this.clone(),
            s = toArray(e).map((e) => new Reference(e));
          return (
            s.forEach((e) => {
              e.isSibling && n.deps.push(e.key);
            }),
            n.conditions.push(
              "function" == typeof r
                ? new Condition(s, r)
                : Condition.fromOptions(s, r)
            ),
            n
          );
        }
        typeError(e) {
          let r = this.clone();
          return (
            (r.internalTests.typeError = createValidation({
              message: e,
              name: "typeError",
              skipAbsent: !0,
              test(e) {
                return (
                  !!this.schema._typeCheck(e) ||
                  this.createError({ params: { type: this.schema.type } })
                );
              },
            })),
            r
          );
        }
        oneOf(e, r = b.oneOf) {
          let n = this.clone();
          return (
            e.forEach((e) => {
              n._whitelist.add(e), n._blacklist.delete(e);
            }),
            (n.internalTests.whiteList = createValidation({
              message: r,
              name: "oneOf",
              skipAbsent: !0,
              test(e) {
                let r = this.schema._whitelist,
                  n = r.resolveAll(this.resolve);
                return (
                  !!n.includes(e) ||
                  this.createError({
                    params: { values: Array.from(r).join(", "), resolved: n },
                  })
                );
              },
            })),
            n
          );
        }
        notOneOf(e, r = b.notOneOf) {
          let n = this.clone();
          return (
            e.forEach((e) => {
              n._blacklist.add(e), n._whitelist.delete(e);
            }),
            (n.internalTests.blacklist = createValidation({
              message: r,
              name: "notOneOf",
              test(e) {
                let r = this.schema._blacklist,
                  n = r.resolveAll(this.resolve);
                return (
                  !n.includes(e) ||
                  this.createError({
                    params: { values: Array.from(r).join(", "), resolved: n },
                  })
                );
              },
            })),
            n
          );
        }
        strip(e = !0) {
          let r = this.clone();
          return (r.spec.strip = e), r;
        }
        describe(e) {
          let r = (e ? this.resolve(e) : this).clone(),
            { label: n, meta: s, optional: a, nullable: l } = r.spec,
            u = {
              meta: s,
              label: n,
              optional: a,
              nullable: l,
              default: r.getDefault(e),
              type: r.type,
              oneOf: r._whitelist.describe(),
              notOneOf: r._blacklist.describe(),
              tests: r.tests
                .map((e) => ({
                  name: e.OPTIONS.name,
                  params: e.OPTIONS.params,
                }))
                .filter(
                  (e, r, n) => n.findIndex((r) => r.name === e.name) === r
                ),
            };
          return u;
        }
      };
      for (let e of ((Schema.prototype.__isYupSchema__ = !0),
      ["validate", "validateSync"]))
        Schema.prototype[`${e}At`] = function (r, n, s = {}) {
          let {
            parent: a,
            parentPath: l,
            schema: c,
          } = (function (e, r, n, s = n) {
            let a, l, c;
            return r
              ? ((0, u.forEach)(r, (u, h, d) => {
                  let f = h ? u.slice(1, u.length - 1) : u,
                    p =
                      "tuple" ===
                      (e = e.resolve({ context: s, parent: a, value: n })).type,
                    m = d ? parseInt(f, 10) : 0;
                  if (e.innerType || p) {
                    if (p && !d)
                      throw Error(
                        `Yup.reach cannot implicitly index into a tuple type. the path part "${c}" must contain an index to the tuple element, e.g. "${c}[0]"`
                      );
                    if (n && m >= n.length)
                      throw Error(
                        `Yup.reach cannot resolve an array item at index: ${u}, in the path: ${r}. because there is no value at that index. `
                      );
                    (a = n),
                      (n = n && n[m]),
                      (e = p ? e.spec.types[m] : e.innerType);
                  }
                  if (!d) {
                    if (!e.fields || !e.fields[f])
                      throw Error(
                        `The schema does not contain the path: ${r}. (failed at: ${c} which is a type: "${e.type}")`
                      );
                    (a = n), (n = n && n[f]), (e = e.fields[f]);
                  }
                  (l = f), (c = h ? "[" + u + "]" : "." + u);
                }),
                { schema: e, parent: a, parentPath: l })
              : { parent: a, parentPath: r, schema: e };
          })(this, r, n, s.context);
          return c[e](a && a[l], Object.assign({}, s, { parent: a, path: r }));
        };
      for (let e of ["equals", "is"])
        Schema.prototype[e] = Schema.prototype.oneOf;
      for (let e of ["not", "nope"])
        Schema.prototype[e] = Schema.prototype.notOneOf;
      let A =
        /^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;
      function parseDateStruct(e) {
        var r, n;
        let s = A.exec(e);
        return s
          ? {
              year: toNumber(s[1]),
              month: toNumber(s[2], 1) - 1,
              day: toNumber(s[3], 1),
              hour: toNumber(s[4]),
              minute: toNumber(s[5]),
              second: toNumber(s[6]),
              millisecond: s[7] ? toNumber(s[7].substring(0, 3)) : 0,
              precision:
                null != (r = null == (n = s[7]) ? void 0 : n.length)
                  ? r
                  : void 0,
              z: s[8] || void 0,
              plusMinus: s[9] || void 0,
              hourOffset: toNumber(s[10]),
              minuteOffset: toNumber(s[11]),
            }
          : null;
      }
      function toNumber(e, r = 0) {
        return Number(e) || r;
      }
      let T =
          /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
        O =
          /^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,
        P =
          /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,
        j = RegExp(
          "^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$"
        ),
        isTrimmed = (e) => isAbsent(e) || e === e.trim(),
        k = {}.toString();
      function create$6() {
        return new StringSchema();
      }
      let StringSchema = class StringSchema extends Schema {
        constructor() {
          super({
            type: "string",
            check: (e) => (
              e instanceof String && (e = e.valueOf()), "string" == typeof e
            ),
          }),
            this.withMutation(() => {
              this.transform((e, r, n) => {
                if (!n.spec.coerce || n.isType(e) || Array.isArray(e)) return e;
                let s = null != e && e.toString ? e.toString() : e;
                return s === k ? e : s;
              });
            });
        }
        required(e) {
          return super
            .required(e)
            .withMutation((r) =>
              r.test({
                message: e || b.required,
                name: "required",
                skipAbsent: !0,
                test: (e) => !!e.length,
              })
            );
        }
        notRequired() {
          return super
            .notRequired()
            .withMutation(
              (e) => (
                (e.tests = e.tests.filter(
                  (e) => "required" !== e.OPTIONS.name
                )),
                e
              )
            );
        }
        length(e, r = w.length) {
          return this.test({
            message: r,
            name: "length",
            exclusive: !0,
            params: { length: e },
            skipAbsent: !0,
            test(r) {
              return r.length === this.resolve(e);
            },
          });
        }
        min(e, r = w.min) {
          return this.test({
            message: r,
            name: "min",
            exclusive: !0,
            params: { min: e },
            skipAbsent: !0,
            test(r) {
              return r.length >= this.resolve(e);
            },
          });
        }
        max(e, r = w.max) {
          return this.test({
            name: "max",
            exclusive: !0,
            message: r,
            params: { max: e },
            skipAbsent: !0,
            test(r) {
              return r.length <= this.resolve(e);
            },
          });
        }
        matches(e, r) {
          let n,
            s,
            a = !1;
          return (
            r &&
              ("object" == typeof r
                ? ({ excludeEmptyString: a = !1, message: n, name: s } = r)
                : (n = r)),
            this.test({
              name: s || "matches",
              message: n || w.matches,
              params: { regex: e },
              skipAbsent: !0,
              test: (r) => ("" === r && a) || -1 !== r.search(e),
            })
          );
        }
        email(e = w.email) {
          return this.matches(T, {
            name: "email",
            message: e,
            excludeEmptyString: !0,
          });
        }
        url(e = w.url) {
          return this.matches(O, {
            name: "url",
            message: e,
            excludeEmptyString: !0,
          });
        }
        uuid(e = w.uuid) {
          return this.matches(P, {
            name: "uuid",
            message: e,
            excludeEmptyString: !1,
          });
        }
        datetime(e) {
          let r,
            n,
            s = "";
          return (
            e &&
              ("object" == typeof e
                ? ({ message: s = "", allowOffset: r = !1, precision: n } = e)
                : (s = e)),
            this.matches(j, {
              name: "datetime",
              message: s || w.datetime,
              excludeEmptyString: !0,
            })
              .test({
                name: "datetime_offset",
                message: s || w.datetime_offset,
                params: { allowOffset: r },
                skipAbsent: !0,
                test: (e) => {
                  if (!e || r) return !0;
                  let n = parseDateStruct(e);
                  return !!n && !!n.z;
                },
              })
              .test({
                name: "datetime_precision",
                message: s || w.datetime_precision,
                params: { precision: n },
                skipAbsent: !0,
                test: (e) => {
                  if (!e || void 0 == n) return !0;
                  let r = parseDateStruct(e);
                  return !!r && r.precision === n;
                },
              })
          );
        }
        ensure() {
          return this.default("").transform((e) => (null === e ? "" : e));
        }
        trim(e = w.trim) {
          return this.transform((e) => (null != e ? e.trim() : e)).test({
            message: e,
            name: "trim",
            test: isTrimmed,
          });
        }
        lowercase(e = w.lowercase) {
          return this.transform((e) =>
            isAbsent(e) ? e : e.toLowerCase()
          ).test({
            message: e,
            name: "string_case",
            exclusive: !0,
            skipAbsent: !0,
            test: (e) => isAbsent(e) || e === e.toLowerCase(),
          });
        }
        uppercase(e = w.uppercase) {
          return this.transform((e) =>
            isAbsent(e) ? e : e.toUpperCase()
          ).test({
            message: e,
            name: "string_case",
            exclusive: !0,
            skipAbsent: !0,
            test: (e) => isAbsent(e) || e === e.toUpperCase(),
          });
        }
      };
      create$6.prototype = StringSchema.prototype;
      let C = new Date(""),
        isDate = (e) => "[object Date]" === Object.prototype.toString.call(e);
      function create$4() {
        return new DateSchema();
      }
      let DateSchema = class DateSchema extends Schema {
        constructor() {
          super({
            type: "date",
            check: (e) => isDate(e) && !isNaN(e.getTime()),
          }),
            this.withMutation(() => {
              this.transform((e, r, n) =>
                !n.spec.coerce || n.isType(e) || null === e
                  ? e
                  : isNaN(
                      (e = (function (e) {
                        let r = parseDateStruct(e);
                        if (!r) return Date.parse ? Date.parse(e) : Number.NaN;
                        if (void 0 === r.z && void 0 === r.plusMinus)
                          return new Date(
                            r.year,
                            r.month,
                            r.day,
                            r.hour,
                            r.minute,
                            r.second,
                            r.millisecond
                          ).valueOf();
                        let n = 0;
                        return (
                          "Z" !== r.z &&
                            void 0 !== r.plusMinus &&
                            ((n = 60 * r.hourOffset + r.minuteOffset),
                            "+" === r.plusMinus && (n = 0 - n)),
                          Date.UTC(
                            r.year,
                            r.month,
                            r.day,
                            r.hour,
                            r.minute + n,
                            r.second,
                            r.millisecond
                          )
                        );
                      })(e))
                    )
                  ? DateSchema.INVALID_DATE
                  : new Date(e)
              );
            });
        }
        prepareParam(e, r) {
          let n;
          if (Reference.isRef(e)) n = e;
          else {
            let s = this.cast(e);
            if (!this._typeCheck(s))
              throw TypeError(
                `\`${r}\` must be a Date or a value that can be \`cast()\` to a Date`
              );
            n = s;
          }
          return n;
        }
        min(e, r = x.min) {
          let n = this.prepareParam(e, "min");
          return this.test({
            message: r,
            name: "min",
            exclusive: !0,
            params: { min: e },
            skipAbsent: !0,
            test(e) {
              return e >= this.resolve(n);
            },
          });
        }
        max(e, r = x.max) {
          let n = this.prepareParam(e, "max");
          return this.test({
            message: r,
            name: "max",
            exclusive: !0,
            params: { max: e },
            skipAbsent: !0,
            test(e) {
              return e <= this.resolve(n);
            },
          });
        }
      };
      function findIndex(e, r) {
        let n = 1 / 0;
        return (
          e.some((e, s) => {
            var a;
            if (null != (a = r.path) && a.includes(e)) return (n = s), !0;
          }),
          n
        );
      }
      function sortByKeyOrder(e) {
        return (r, n) => findIndex(e, r) - findIndex(e, n);
      }
      (DateSchema.INVALID_DATE = C),
        (create$4.prototype = DateSchema.prototype),
        (create$4.INVALID_DATE = C);
      let parseJson = (e, r, n) => {
          if ("string" != typeof e) return e;
          let s = e;
          try {
            s = JSON.parse(e);
          } catch (e) {}
          return n.isType(s) ? s : e;
        },
        deepHas = (e, r) => {
          let n = [...(0, u.normalizePath)(r)];
          if (1 === n.length) return n[0] in e;
          let s = n.pop(),
            a = (0, u.getter)((0, u.join)(n), !0)(e);
          return !!(a && s in a);
        },
        isObject = (e) =>
          "[object Object]" === Object.prototype.toString.call(e),
        R = sortByKeyOrder([]);
      function create$3(e) {
        return new ObjectSchema(e);
      }
      let ObjectSchema = class ObjectSchema extends Schema {
        constructor(e) {
          super({
            type: "object",
            check: (e) => isObject(e) || "function" == typeof e,
          }),
            (this.fields = Object.create(null)),
            (this._sortErrors = R),
            (this._nodes = []),
            (this._excludedEdges = []),
            this.withMutation(() => {
              e && this.shape(e);
            });
        }
        _cast(e, r = {}) {
          var n;
          let s = super._cast(e, r);
          if (void 0 === s) return this.getDefault(r);
          if (!this._typeCheck(s)) return s;
          let a = this.fields,
            l = null != (n = r.stripUnknown) ? n : this.spec.noUnknown,
            u = [].concat(
              this._nodes,
              Object.keys(s).filter((e) => !this._nodes.includes(e))
            ),
            c = {},
            h = Object.assign({}, r, {
              parent: c,
              __validating: r.__validating || !1,
            }),
            d = !1;
          for (let e of u) {
            let n = a[e],
              u = e in s;
            if (n) {
              let a;
              let l = s[e];
              h.path = (r.path ? `${r.path}.` : "") + e;
              let u =
                  (n = n.resolve({
                    value: l,
                    context: r.context,
                    parent: c,
                  })) instanceof Schema
                    ? n.spec
                    : void 0,
                f = null == u ? void 0 : u.strict;
              if (null != u && u.strip) {
                d = d || e in s;
                continue;
              }
              void 0 !== (a = r.__validating && f ? s[e] : n.cast(s[e], h)) &&
                (c[e] = a);
            } else u && !l && (c[e] = s[e]);
            (u !== e in c || c[e] !== s[e]) && (d = !0);
          }
          return d ? c : s;
        }
        _validate(e, r = {}, n, s) {
          let {
            from: a = [],
            originalValue: l = e,
            recursive: u = this.spec.recursive,
          } = r;
          (r.from = [{ schema: this, value: l }, ...a]),
            (r.__validating = !0),
            (r.originalValue = l),
            super._validate(e, r, n, (e, a) => {
              if (!u || !isObject(a)) {
                s(e, a);
                return;
              }
              l = l || a;
              let c = [];
              for (let e of this._nodes) {
                let n = this.fields[e];
                !n ||
                  Reference.isRef(n) ||
                  c.push(
                    n.asNestedTest({
                      options: r,
                      key: e,
                      parent: a,
                      parentPath: r.path,
                      originalParent: l,
                    })
                  );
              }
              this.runTests(
                { tests: c, value: a, originalValue: l, options: r },
                n,
                (r) => {
                  s(r.sort(this._sortErrors).concat(e), a);
                }
              );
            });
        }
        clone(e) {
          let r = super.clone(e);
          return (
            (r.fields = Object.assign({}, this.fields)),
            (r._nodes = this._nodes),
            (r._excludedEdges = this._excludedEdges),
            (r._sortErrors = this._sortErrors),
            r
          );
        }
        concat(e) {
          let r = super.concat(e),
            n = r.fields;
          for (let [e, r] of Object.entries(this.fields)) {
            let s = n[e];
            n[e] = void 0 === s ? r : s;
          }
          return r.withMutation((r) =>
            r.setFields(n, [...this._excludedEdges, ...e._excludedEdges])
          );
        }
        _getDefault(e) {
          if ("default" in this.spec) return super._getDefault(e);
          if (!this._nodes.length) return;
          let r = {};
          return (
            this._nodes.forEach((n) => {
              var s;
              let a = this.fields[n],
                l = e;
              null != (s = l) &&
                s.value &&
                (l = Object.assign({}, l, {
                  parent: l.value,
                  value: l.value[n],
                })),
                (r[n] = a && "getDefault" in a ? a.getDefault(l) : void 0);
            }),
            r
          );
        }
        setFields(e, r) {
          let n = this.clone();
          return (
            (n.fields = e),
            (n._nodes = (function (e, r = []) {
              let n = [],
                s = new Set(),
                a = new Set(r.map(([e, r]) => `${e}-${r}`));
              function addNode(e, r) {
                let l = (0, u.split)(e)[0];
                s.add(l), a.has(`${r}-${l}`) || n.push([r, l]);
              }
              for (let r of Object.keys(e)) {
                let n = e[r];
                s.add(r),
                  Reference.isRef(n) && n.isSibling
                    ? addNode(n.path, r)
                    : isSchema(n) &&
                      "deps" in n &&
                      n.deps.forEach((e) => addNode(e, r));
              }
              return d().array(Array.from(s), n).reverse();
            })(e, r)),
            (n._sortErrors = sortByKeyOrder(Object.keys(e))),
            r && (n._excludedEdges = r),
            n
          );
        }
        shape(e, r = []) {
          return this.clone().withMutation((n) => {
            let s = n._excludedEdges;
            return (
              r.length &&
                (Array.isArray(r[0]) || (r = [r]),
                (s = [...n._excludedEdges, ...r])),
              n.setFields(Object.assign(n.fields, e), s)
            );
          });
        }
        partial() {
          let e = {};
          for (let [r, n] of Object.entries(this.fields))
            e[r] =
              "optional" in n && n.optional instanceof Function
                ? n.optional()
                : n;
          return this.setFields(e);
        }
        deepPartial() {
          let e = (function deepPartial(e) {
            if ("fields" in e) {
              let r = {};
              for (let [n, s] of Object.entries(e.fields))
                r[n] = deepPartial(s);
              return e.setFields(r);
            }
            if ("array" === e.type) {
              let r = e.optional();
              return r.innerType && (r.innerType = deepPartial(r.innerType)), r;
            }
            return "tuple" === e.type
              ? e.optional().clone({ types: e.spec.types.map(deepPartial) })
              : "optional" in e
              ? e.optional()
              : e;
          })(this);
          return e;
        }
        pick(e) {
          let r = {};
          for (let n of e) this.fields[n] && (r[n] = this.fields[n]);
          return this.setFields(
            r,
            this._excludedEdges.filter(
              ([r, n]) => e.includes(r) && e.includes(n)
            )
          );
        }
        omit(e) {
          let r = [];
          for (let n of Object.keys(this.fields)) e.includes(n) || r.push(n);
          return this.pick(r);
        }
        from(e, r, n) {
          let s = (0, u.getter)(e, !0);
          return this.transform((a) => {
            if (!a) return a;
            let l = a;
            return (
              deepHas(a, e) &&
                ((l = Object.assign({}, a)), n || delete l[e], (l[r] = s(a))),
              l
            );
          });
        }
        json() {
          return this.transform(parseJson);
        }
        noUnknown(e = !0, r = _.noUnknown) {
          "boolean" != typeof e && ((r = e), (e = !0));
          let n = this.test({
            name: "noUnknown",
            exclusive: !0,
            message: r,
            test(r) {
              let n;
              if (null == r) return !0;
              let s =
                ((n = Object.keys(this.schema.fields)),
                Object.keys(r).filter((e) => -1 === n.indexOf(e)));
              return (
                !e ||
                0 === s.length ||
                this.createError({ params: { unknown: s.join(", ") } })
              );
            },
          });
          return (n.spec.noUnknown = e), n;
        }
        unknown(e = !0, r = _.noUnknown) {
          return this.noUnknown(!e, r);
        }
        transformKeys(e) {
          return this.transform((r) => {
            if (!r) return r;
            let n = {};
            for (let s of Object.keys(r)) n[e(s)] = r[s];
            return n;
          });
        }
        camelCase() {
          return this.transformKeys(c.camelCase);
        }
        snakeCase() {
          return this.transformKeys(c.snakeCase);
        }
        constantCase() {
          return this.transformKeys((e) => (0, c.snakeCase)(e).toUpperCase());
        }
        describe(e) {
          let r = (e ? this.resolve(e) : this).clone(),
            n = super.describe(e);
          for (let [a, l] of ((n.fields = {}), Object.entries(r.fields))) {
            var s;
            let r = e;
            null != (s = r) &&
              s.value &&
              (r = Object.assign({}, r, {
                parent: r.value,
                value: r.value[a],
              })),
              (n.fields[a] = l.describe(r));
          }
          return n;
        }
      };
      create$3.prototype = ObjectSchema.prototype;
    },
    24654: function () {},
    47533: function (e, r, n) {
      "use strict";
      n.d(r, {
        X: function () {
          return yup_o;
        },
      });
      var s = n(87536),
        t = function (e, r, n) {
          if (e && "reportValidity" in e) {
            var a = (0, s.U2)(n, r);
            e.setCustomValidity((a && a.message) || ""), e.reportValidity();
          }
        },
        resolvers_i = function (e, r) {
          var i = function (n) {
            var s = r.fields[n];
            s && s.ref && "reportValidity" in s.ref
              ? t(s.ref, n, e)
              : s.refs &&
                s.refs.forEach(function (r) {
                  return t(r, n, e);
                });
          };
          for (var n in r.fields) i(n);
        },
        resolvers_n = function (e, r) {
          r.shouldUseNativeValidation && resolvers_i(e, r);
          var n = {};
          for (var a in e) {
            var l = (0, s.U2)(r.fields, a),
              u = Object.assign(e[a] || {}, { ref: l && l.ref });
            if (o(r.names || Object.keys(e), a)) {
              var c = Object.assign({}, (0, s.U2)(n, a));
              (0, s.t8)(c, "root", u), (0, s.t8)(n, a, c);
            } else (0, s.t8)(n, a, u);
          }
          return n;
        },
        o = function (e, r) {
          return e.some(function (e) {
            return e.startsWith(r + ".");
          });
        };
      function yup_o(e, r, n) {
        return (
          void 0 === r && (r = {}),
          void 0 === n && (n = {}),
          function (a, l, u) {
            try {
              return Promise.resolve(
                (function (s, c) {
                  try {
                    var h =
                      (r.context,
                      Promise.resolve(
                        e["sync" === n.mode ? "validateSync" : "validate"](
                          a,
                          Object.assign({ abortEarly: !1 }, r, { context: l })
                        )
                      ).then(function (e) {
                        return (
                          u.shouldUseNativeValidation && resolvers_i({}, u),
                          { values: n.raw ? a : e, errors: {} }
                        );
                      }));
                  } catch (e) {
                    return c(e);
                  }
                  return h && h.then ? h.then(void 0, c) : h;
                })(0, function (e) {
                  var r;
                  if (!e.inner) throw e;
                  return {
                    values: {},
                    errors: resolvers_n(
                      ((r =
                        !u.shouldUseNativeValidation &&
                        "all" === u.criteriaMode),
                      (e.inner || []).reduce(function (e, n) {
                        if (
                          (e[n.path] ||
                            (e[n.path] = { message: n.message, type: n.type }),
                          r)
                        ) {
                          var a = e[n.path].types,
                            l = a && a[n.type];
                          e[n.path] = (0, s.KN)(
                            n.path,
                            r,
                            e,
                            n.type,
                            l ? [].concat(l, n.message) : n.message
                          );
                        }
                        return e;
                      }, {})),
                      u
                    ),
                  };
                })
              );
            } catch (e) {
              return Promise.reject(e);
            }
          }
        );
      }
    },
    27159: function (e, r, n) {
      "use strict";
      n.d(r, {
        y: function () {
          return animateValue;
        },
      });
      var s = n(81662);
      let calcBezier = (e, r, n) =>
        (((1 - 3 * n + 3 * r) * e + (3 * n - 6 * r)) * e + 3 * r) * e;
      function cubicBezier(e, r, n, a) {
        if (e === r && n === a) return s.Z;
        let getTForX = (r) =>
          (function (e, r, n, s, a) {
            let l, u;
            let c = 0;
            do
              (l = calcBezier((u = r + (n - r) / 2), s, a) - e) > 0
                ? (n = u)
                : (r = u);
            while (Math.abs(l) > 1e-7 && ++c < 12);
            return u;
          })(r, 0, 1, e, n);
        return (e) => (0 === e || 1 === e ? e : calcBezier(getTForX(e), r, a));
      }
      let a = cubicBezier(0.42, 0, 1, 1),
        l = cubicBezier(0, 0, 0.58, 1),
        u = cubicBezier(0.42, 0, 0.58, 1);
      var c = n(43338),
        h = n(45487),
        d = n(27255),
        f = n(90415),
        p = n(75129);
      let m = cubicBezier(0.33, 1.53, 0.69, 0.99),
        y = (0, p.M)(m),
        g = (0, f.o)(y),
        v = {
          linear: s.Z,
          easeIn: a,
          easeInOut: u,
          easeOut: l,
          circIn: d.Z7,
          circInOut: d.X7,
          circOut: d.Bn,
          backIn: y,
          backInOut: g,
          backOut: m,
          anticipate: (e) =>
            (e *= 2) < 1 ? 0.5 * y(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
        },
        easingDefinitionToFunction = (e) => {
          if (Array.isArray(e)) {
            (0, h.k)(
              4 === e.length,
              "Cubic bezier arrays must contain four numerical values."
            );
            let [r, n, s, a] = e;
            return cubicBezier(r, n, s, a);
          }
          return "string" == typeof e
            ? ((0, h.k)(void 0 !== v[e], `Invalid easing type '${e}'`), v[e])
            : e;
        };
      var b = n(64606),
        w = n(60599);
      function keyframes({
        duration: e = 300,
        keyframes: r,
        times: n,
        ease: s = "easeInOut",
      }) {
        let a = (0, c.N)(s)
            ? s.map(easingDefinitionToFunction)
            : easingDefinitionToFunction(s),
          l = { done: !1, value: r[0] },
          h = (n && n.length === r.length ? n : (0, w.Y)(r)).map((r) => r * e),
          d = (0, b.s)(h, r, {
            ease: Array.isArray(a)
              ? a
              : r.map(() => a || u).splice(0, r.length - 1),
          });
        return {
          calculatedDuration: e,
          next: (r) => ((l.value = d(r)), (l.done = r >= e), l),
        };
      }
      var x = n(85086),
        _ = n(25753);
      function inertia({
        keyframes: e,
        velocity: r = 0,
        power: n = 0.8,
        timeConstant: s = 325,
        bounceDamping: a = 10,
        bounceStiffness: l = 500,
        modifyTarget: u,
        min: c,
        max: h,
        restDelta: d = 0.5,
        restSpeed: f,
      }) {
        let p, m;
        let y = e[0],
          g = { done: !1, value: y },
          isOutOfBounds = (e) =>
            (void 0 !== c && e < c) || (void 0 !== h && e > h),
          nearestBoundary = (e) =>
            void 0 === c
              ? h
              : void 0 === h
              ? c
              : Math.abs(c - e) < Math.abs(h - e)
              ? c
              : h,
          v = n * r,
          b = y + v,
          w = void 0 === u ? b : u(b);
        w !== b && (v = w - y);
        let calcDelta = (e) => -v * Math.exp(-e / s),
          calcLatest = (e) => w + calcDelta(e),
          applyFriction = (e) => {
            let r = calcDelta(e),
              n = calcLatest(e);
            (g.done = Math.abs(r) <= d), (g.value = g.done ? w : n);
          },
          checkCatchBoundary = (e) => {
            isOutOfBounds(g.value) &&
              ((p = e),
              (m = (0, x.S)({
                keyframes: [g.value, nearestBoundary(g.value)],
                velocity: (0, _.P)(calcLatest, e, g.value),
                damping: a,
                stiffness: l,
                restDelta: d,
                restSpeed: f,
              })));
          };
        return (
          checkCatchBoundary(0),
          {
            calculatedDuration: null,
            next: (e) => {
              let r = !1;
              return (m ||
                void 0 !== p ||
                ((r = !0), applyFriction(e), checkCatchBoundary(e)),
              void 0 !== p && e > p)
                ? m.next(e - p)
                : (r || applyFriction(e), g);
            },
          }
        );
      }
      var S = n(2074);
      let frameloopDriver = (e) => {
        let passTimestamp = ({ timestamp: r }) => e(r);
        return {
          start: () => S.Wi.update(passTimestamp, !0),
          stop: () => (0, S.Pn)(passTimestamp),
          now: () =>
            S.frameData.isProcessing
              ? S.frameData.timestamp
              : performance.now(),
        };
      };
      var A = n(24169),
        T = n(86917),
        O = n(42284);
      let P = {
        decay: inertia,
        inertia: inertia,
        tween: keyframes,
        keyframes: keyframes,
        spring: x.S,
      };
      function animateValue({
        autoplay: e = !0,
        delay: r = 0,
        driver: n = frameloopDriver,
        keyframes: s,
        type: a = "keyframes",
        repeat: l = 0,
        repeatDelay: u = 0,
        repeatType: c = "loop",
        onPlay: h,
        onStop: d,
        onComplete: f,
        onUpdate: p,
        ...m
      }) {
        let y,
          g,
          v,
          w,
          x,
          _ = 1,
          S = !1,
          updateFinishedPromise = () => {
            g = new Promise((e) => {
              y = e;
            });
          };
        updateFinishedPromise();
        let j = P[a] || keyframes;
        j !== keyframes &&
          "number" != typeof s[0] &&
          ((w = (0, b.s)([0, 100], s, { clamp: !1 })), (s = [0, 100]));
        let k = j({ ...m, keyframes: s });
        "mirror" === c &&
          (x = j({
            ...m,
            keyframes: [...s].reverse(),
            velocity: -(m.velocity || 0),
          }));
        let C = "idle",
          R = null,
          D = null,
          B = null;
        null === k.calculatedDuration &&
          l &&
          (k.calculatedDuration = (0, O.i)(k));
        let { calculatedDuration: I } = k,
          V = 1 / 0,
          L = 1 / 0;
        null !== I && (L = (V = I + u) * (l + 1) - u);
        let M = 0,
          tick = (e) => {
            if (null === D) return;
            _ > 0 && (D = Math.min(D, e)),
              _ < 0 && (D = Math.min(e - L / _, D)),
              (M = null !== R ? R : Math.round(e - D) * _);
            let n = M - r * (_ >= 0 ? 1 : -1),
              a = _ >= 0 ? n < 0 : n > L;
            (M = Math.max(n, 0)), "finished" === C && null === R && (M = L);
            let h = M,
              d = k;
            if (l) {
              let e = Math.min(M, L) / V,
                r = Math.floor(e),
                n = e % 1;
              !n && e >= 1 && (n = 1), 1 === n && r--, (r = Math.min(r, l + 1));
              let s = !!(r % 2);
              s &&
                ("reverse" === c
                  ? ((n = 1 - n), u && (n -= u / V))
                  : "mirror" === c && (d = x)),
                (h = (0, A.u)(0, 1, n) * V);
            }
            let f = a ? { done: !1, value: s[0] } : d.next(h);
            w && (f.value = w(f.value));
            let { done: m } = f;
            a || null === I || (m = _ >= 0 ? M >= L : M <= 0);
            let y = null === R && ("finished" === C || ("running" === C && m));
            return p && p(f.value), y && finish(), f;
          },
          stopAnimationDriver = () => {
            v && v.stop(), (v = void 0);
          },
          cancel = () => {
            (C = "idle"),
              stopAnimationDriver(),
              y(),
              updateFinishedPromise(),
              (D = B = null);
          },
          finish = () => {
            (C = "finished"), f && f(), stopAnimationDriver(), y();
          },
          play = () => {
            if (S) return;
            v || (v = n(tick));
            let e = v.now();
            h && h(),
              null !== R ? (D = e - R) : (D && "finished" !== C) || (D = e),
              "finished" === C && updateFinishedPromise(),
              (B = D),
              (R = null),
              (C = "running"),
              v.start();
          };
        e && play();
        let N = {
          then: (e, r) => g.then(e, r),
          get time() {
            return (0, T.X)(M);
          },
          set time(newTime) {
            (M = newTime = (0, T.w)(newTime)),
              null === R && v && 0 !== _
                ? (D = v.now() - newTime / _)
                : (R = newTime);
          },
          get duration() {
            let e =
              null === k.calculatedDuration
                ? (0, O.i)(k)
                : k.calculatedDuration;
            return (0, T.X)(e);
          },
          get speed() {
            return _;
          },
          set speed(newSpeed) {
            if (newSpeed === _ || !v) return;
            (_ = newSpeed), (N.time = (0, T.X)(M));
          },
          get state() {
            return C;
          },
          play,
          pause: () => {
            (C = "paused"), (R = M);
          },
          stop: () => {
            (S = !0), "idle" !== C && ((C = "idle"), d && d(), cancel());
          },
          cancel: () => {
            null !== B && tick(B), cancel();
          },
          complete: () => {
            C = "finished";
          },
          sample: (e) => ((D = 0), tick(e)),
        };
        return N;
      }
    },
    85086: function (e, r, n) {
      "use strict";
      n.d(r, {
        S: function () {
          return spring;
        },
      });
      var s = n(86917),
        a = n(25753),
        l = n(45487),
        u = n(24169);
      function calcAngularFreq(e, r) {
        return e * Math.sqrt(1 - r * r);
      }
      let c = ["duration", "bounce"],
        h = ["stiffness", "damping", "mass"];
      function isSpringType(e, r) {
        return r.some((r) => void 0 !== e[r]);
      }
      function spring({ keyframes: e, restDelta: r, restSpeed: n, ...d }) {
        let f;
        let p = e[0],
          m = e[e.length - 1],
          y = { done: !1, value: p },
          {
            stiffness: g,
            damping: v,
            mass: b,
            duration: w,
            velocity: x,
            isResolvedFromDuration: _,
          } = (function (e) {
            let r = {
              velocity: 0,
              stiffness: 100,
              damping: 10,
              mass: 1,
              isResolvedFromDuration: !1,
              ...e,
            };
            if (!isSpringType(e, h) && isSpringType(e, c)) {
              let n = (function ({
                duration: e = 800,
                bounce: r = 0.25,
                velocity: n = 0,
                mass: a = 1,
              }) {
                let c, h;
                (0, l.K)(
                  e <= (0, s.w)(10),
                  "Spring duration must be 10 seconds or less"
                );
                let d = 1 - r;
                (d = (0, u.u)(0.05, 1, d)),
                  (e = (0, u.u)(0.01, 10, (0, s.X)(e))),
                  d < 1
                    ? ((c = (r) => {
                        let s = r * d,
                          a = s * e,
                          l = calcAngularFreq(r, d);
                        return 0.001 - ((s - n) / l) * Math.exp(-a);
                      }),
                      (h = (r) => {
                        let s = r * d,
                          a = s * e,
                          l = Math.pow(d, 2) * Math.pow(r, 2) * e,
                          u = calcAngularFreq(Math.pow(r, 2), d),
                          h = -c(r) + 0.001 > 0 ? -1 : 1;
                        return (h * ((a * n + n - l) * Math.exp(-a))) / u;
                      }))
                    : ((c = (r) => {
                        let s = Math.exp(-r * e),
                          a = (r - n) * e + 1;
                        return -0.001 + s * a;
                      }),
                      (h = (r) => {
                        let s = Math.exp(-r * e),
                          a = (n - r) * (e * e);
                        return s * a;
                      }));
                let f = 5 / e,
                  p = (function (e, r, n) {
                    let s = n;
                    for (let n = 1; n < 12; n++) s -= e(s) / r(s);
                    return s;
                  })(c, h, f);
                if (((e = (0, s.w)(e)), isNaN(p)))
                  return { stiffness: 100, damping: 10, duration: e };
                {
                  let r = Math.pow(p, 2) * a;
                  return {
                    stiffness: r,
                    damping: 2 * d * Math.sqrt(a * r),
                    duration: e,
                  };
                }
              })(e);
              (r = { ...r, ...n, mass: 1 }).isResolvedFromDuration = !0;
            }
            return r;
          })({ ...d, velocity: -(0, s.X)(d.velocity || 0) }),
          S = x || 0,
          A = v / (2 * Math.sqrt(g * b)),
          T = m - p,
          O = (0, s.X)(Math.sqrt(g / b)),
          P = 5 > Math.abs(T);
        if ((n || (n = P ? 0.01 : 2), r || (r = P ? 0.005 : 0.5), A < 1)) {
          let e = calcAngularFreq(O, A);
          f = (r) => {
            let n = Math.exp(-A * O * r);
            return (
              m -
              n *
                (((S + A * O * T) / e) * Math.sin(e * r) + T * Math.cos(e * r))
            );
          };
        } else if (1 === A)
          f = (e) => m - Math.exp(-O * e) * (T + (S + O * T) * e);
        else {
          let e = O * Math.sqrt(A * A - 1);
          f = (r) => {
            let n = Math.exp(-A * O * r),
              s = Math.min(e * r, 300);
            return (
              m -
              (n * ((S + A * O * T) * Math.sinh(s) + e * T * Math.cosh(s))) / e
            );
          };
        }
        return {
          calculatedDuration: (_ && w) || null,
          next: (e) => {
            let s = f(e);
            if (_) y.done = e >= w;
            else {
              let l = S;
              0 !== e && (l = A < 1 ? (0, a.P)(f, e, s) : 0);
              let u = Math.abs(l) <= n,
                c = Math.abs(m - s) <= r;
              y.done = u && c;
            }
            return (y.value = y.done ? m : s), y;
          },
        };
      }
    },
    42284: function (e, r, n) {
      "use strict";
      n.d(r, {
        E: function () {
          return s;
        },
        i: function () {
          return calcGeneratorDuration;
        },
      });
      let s = 2e4;
      function calcGeneratorDuration(e) {
        let r = 0,
          n = e.next(r);
        for (; !n.done && r < s; ) (r += 50), (n = e.next(r));
        return r >= s ? 1 / 0 : r;
      }
    },
    25753: function (e, r, n) {
      "use strict";
      n.d(r, {
        P: function () {
          return calcGeneratorVelocity;
        },
      });
      var s = n(3038);
      function calcGeneratorVelocity(e, r, n) {
        let a = Math.max(r - 5, 0);
        return (0, s.R)(n - e(a), r - a);
      }
    },
    10177: function (e, r, n) {
      "use strict";
      n.d(r, {
        v: function () {
          return animateMotionValue;
        },
      });
      var s = n(45487),
        a = n(86917);
      let l = { current: !1 },
        isBezierDefinition = (e) => Array.isArray(e) && "number" == typeof e[0],
        cubicBezierAsString = ([e, r, n, s]) =>
          `cubic-bezier(${e}, ${r}, ${n}, ${s})`,
        u = {
          linear: "linear",
          ease: "ease",
          easeIn: "ease-in",
          easeOut: "ease-out",
          easeInOut: "ease-in-out",
          circIn: cubicBezierAsString([0, 0.65, 0.55, 1]),
          circOut: cubicBezierAsString([0.55, 0, 1, 0.45]),
          backIn: cubicBezierAsString([0.31, 0.01, 0.66, -0.59]),
          backOut: cubicBezierAsString([0.33, 1.53, 0.69, 0.99]),
        };
      var c = n(27159),
        h = n(4522),
        d = n(81662),
        f = n(2074);
      let p = (0, h.X)(() =>
          Object.hasOwnProperty.call(Element.prototype, "animate")
        ),
        m = new Set([
          "opacity",
          "clipPath",
          "filter",
          "transform",
          "backgroundColor",
        ]),
        requiresPregeneratedKeyframes = (e, r) =>
          "spring" === r.type ||
          "backgroundColor" === e ||
          !(function isWaapiSupportedEasing(e) {
            return !!(
              !e ||
              ("string" == typeof e && u[e]) ||
              isBezierDefinition(e) ||
              (Array.isArray(e) && e.every(isWaapiSupportedEasing))
            );
          })(r.ease);
      var y = n(94714);
      let g = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
        criticallyDampedSpring = (e) => ({
          type: "spring",
          stiffness: 550,
          damping: 0 === e ? 2 * Math.sqrt(550) : 30,
          restSpeed: 10,
        }),
        v = { type: "keyframes", duration: 0.8 },
        b = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
        getDefaultTransition = (e, { keyframes: r }) =>
          r.length > 2
            ? v
            : y.G.has(e)
            ? e.startsWith("scale")
              ? criticallyDampedSpring(r[1])
              : g
            : b;
      var w = n(51550);
      let isAnimatable = (e, r) =>
        "zIndex" !== e &&
        !!(
          "number" == typeof r ||
          Array.isArray(r) ||
          ("string" == typeof r &&
            (w.P.test(r) || "0" === r) &&
            !r.startsWith("url("))
        );
      var x = n(79135),
        _ = n(30681),
        S = n(31056);
      let A = { skipAnimations: !1 },
        animateMotionValue =
          (e, r, n, h = {}) =>
          (y) => {
            let g = (0, S.e)(h, e) || {},
              v = g.delay || h.delay || 0,
              { elapsed: b = 0 } = h;
            b -= (0, a.w)(v);
            let w = (function (e, r, n, s) {
                let a, l;
                let u = isAnimatable(r, n);
                a = Array.isArray(n) ? [...n] : [null, n];
                let c = void 0 !== s.from ? s.from : e.get(),
                  h = [];
                for (let e = 0; e < a.length; e++) {
                  var d;
                  null === a[e] && (a[e] = 0 === e ? c : a[e - 1]),
                    ("number" == typeof (d = a[e])
                      ? 0 === d
                      : null !== d
                      ? "none" === d || "0" === d || (0, _.W)(d)
                      : void 0) && h.push(e),
                    "string" == typeof a[e] &&
                      "none" !== a[e] &&
                      "0" !== a[e] &&
                      (l = a[e]);
                }
                if (u && h.length && l)
                  for (let e = 0; e < h.length; e++) {
                    let n = h[e];
                    a[n] = (0, x.T)(r, l);
                  }
                return a;
              })(r, e, n, g),
              T = w[0],
              O = w[w.length - 1],
              P = isAnimatable(e, T),
              j = isAnimatable(e, O);
            (0, s.K)(
              P === j,
              `You are trying to animate ${e} from "${T}" to "${O}". ${T} is not an animatable value - to enable this animation set ${T} to a value animatable to ${O} via the \`style\` property.`
            );
            let k = {
              keyframes: w,
              velocity: r.getVelocity(),
              ease: "easeOut",
              ...g,
              delay: -b,
              onUpdate: (e) => {
                r.set(e), g.onUpdate && g.onUpdate(e);
              },
              onComplete: () => {
                y(), g.onComplete && g.onComplete();
              },
            };
            if (
              ((0, S.r)(g) || (k = { ...k, ...getDefaultTransition(e, k) }),
              k.duration && (k.duration = (0, a.w)(k.duration)),
              k.repeatDelay && (k.repeatDelay = (0, a.w)(k.repeatDelay)),
              !P || !j || l.current || !1 === g.type || A.skipAnimations)
            )
              return (function ({
                keyframes: e,
                delay: r,
                onUpdate: n,
                onComplete: s,
              }) {
                let setValue = () => (
                  n && n(e[e.length - 1]),
                  s && s(),
                  {
                    time: 0,
                    speed: 1,
                    duration: 0,
                    play: d.Z,
                    pause: d.Z,
                    stop: d.Z,
                    then: (e) => (e(), Promise.resolve()),
                    cancel: d.Z,
                    complete: d.Z,
                  }
                );
                return r
                  ? (0, c.y)({
                      keyframes: [0, 1],
                      duration: 0,
                      delay: r,
                      onComplete: setValue,
                    })
                  : setValue();
              })(l.current ? { ...k, delay: 0 } : k);
            if (
              !h.isHandoff &&
              r.owner &&
              r.owner.current instanceof HTMLElement &&
              !r.owner.getProps().onUpdate
            ) {
              let n = (function (e, r, { onUpdate: n, onComplete: s, ...l }) {
                let h, y;
                let g =
                  p() &&
                  m.has(r) &&
                  !l.repeatDelay &&
                  "mirror" !== l.repeatType &&
                  0 !== l.damping &&
                  "inertia" !== l.type;
                if (!g) return !1;
                let v = !1,
                  b = !1,
                  updateFinishedPromise = () => {
                    y = new Promise((e) => {
                      h = e;
                    });
                  };
                updateFinishedPromise();
                let { keyframes: w, duration: x = 300, ease: _, times: S } = l;
                if (requiresPregeneratedKeyframes(r, l)) {
                  let e = (0, c.y)({ ...l, repeat: 0, delay: 0 }),
                    r = { done: !1, value: w[0] },
                    n = [],
                    s = 0;
                  for (; !r.done && s < 2e4; )
                    (r = e.sample(s)), n.push(r.value), (s += 10);
                  (S = void 0), (w = n), (x = s - 10), (_ = "linear");
                }
                let A = (function (
                    e,
                    r,
                    n,
                    {
                      delay: s = 0,
                      duration: a,
                      repeat: l = 0,
                      repeatType: c = "loop",
                      ease: h,
                      times: d,
                    } = {}
                  ) {
                    let f = { [r]: n };
                    d && (f.offset = d);
                    let p = (function mapEasingToNativeEasing(e) {
                      if (e)
                        return isBezierDefinition(e)
                          ? cubicBezierAsString(e)
                          : Array.isArray(e)
                          ? e.map(mapEasingToNativeEasing)
                          : u[e];
                    })(h);
                    return (
                      Array.isArray(p) && (f.easing = p),
                      e.animate(f, {
                        delay: s,
                        duration: a,
                        easing: Array.isArray(p) ? "linear" : p,
                        fill: "both",
                        iterations: l + 1,
                        direction: "reverse" === c ? "alternate" : "normal",
                      })
                    );
                  })(e.owner.current, r, w, {
                    ...l,
                    duration: x,
                    ease: _,
                    times: S,
                  }),
                  cancelAnimation = () => {
                    (b = !1), A.cancel();
                  },
                  safeCancel = () => {
                    (b = !0),
                      f.Wi.update(cancelAnimation),
                      h(),
                      updateFinishedPromise();
                  };
                return (
                  (A.onfinish = () => {
                    b ||
                      (e.set(
                        (function (e, { repeat: r, repeatType: n = "loop" }) {
                          let s =
                            r && "loop" !== n && r % 2 == 1 ? 0 : e.length - 1;
                          return e[s];
                        })(w, l)
                      ),
                      s && s(),
                      safeCancel());
                  }),
                  {
                    then: (e, r) => y.then(e, r),
                    attachTimeline: (e) => (
                      (A.timeline = e), (A.onfinish = null), d.Z
                    ),
                    get time() {
                      return (0, a.X)(A.currentTime || 0);
                    },
                    set time(newTime) {
                      A.currentTime = (0, a.w)(newTime);
                    },
                    get speed() {
                      return A.playbackRate;
                    },
                    set speed(newSpeed) {
                      A.playbackRate = newSpeed;
                    },
                    get duration() {
                      return (0, a.X)(x);
                    },
                    play: () => {
                      v || (A.play(), (0, f.Pn)(cancelAnimation));
                    },
                    pause: () => A.pause(),
                    stop: () => {
                      if (((v = !0), "idle" === A.playState)) return;
                      let { currentTime: r } = A;
                      if (r) {
                        let n = (0, c.y)({ ...l, autoplay: !1 });
                        e.setWithVelocity(
                          n.sample(r - 10).value,
                          n.sample(r).value,
                          10
                        );
                      }
                      safeCancel();
                    },
                    complete: () => {
                      b || A.finish();
                    },
                    cancel: safeCancel,
                  }
                );
              })(r, e, k);
              if (n) return n;
            }
            return (0, c.y)(k);
          };
    },
    61059: function (e, r, n) {
      "use strict";
      n.d(r, {
        D: function () {
          return animateSingleValue;
        },
      });
      var s = n(10177),
        a = n(33234),
        l = n(40406);
      function animateSingleValue(e, r, n) {
        let u = (0, l.i)(e) ? e : (0, a.BX)(e);
        return u.start((0, s.v)("", u, r, n)), u.animation;
      }
    },
    62711: function (e, r, n) {
      "use strict";
      n.d(r, {
        w: function () {
          return animateTarget;
        },
      });
      var s = n(94714),
        a = n(68588),
        l = n(10177),
        u = n(12490),
        c = n(14330),
        h = n(31056),
        d = n(2074);
      function animateTarget(
        e,
        r,
        { delay: n = 0, transitionOverride: f, type: p } = {}
      ) {
        let {
            transition: m = e.getDefaultTransition(),
            transitionEnd: y,
            ...g
          } = e.makeTargetAnimatable(r),
          v = e.getValue("willChange");
        f && (m = f);
        let b = [],
          w = p && e.animationState && e.animationState.getState()[p];
        for (let r in g) {
          let c = e.getValue(r),
            f = g[r];
          if (
            !c ||
            void 0 === f ||
            (w &&
              (function ({ protectedKeys: e, needsAnimating: r }, n) {
                let s = e.hasOwnProperty(n) && !0 !== r[n];
                return (r[n] = !1), s;
              })(w, r))
          )
            continue;
          let p = { delay: n, elapsed: 0, ...(0, h.e)(m || {}, r) };
          if (window.HandoffAppearAnimations) {
            let n = e.getProps()[a.M];
            if (n) {
              let e = window.HandoffAppearAnimations(n, r, c, d.Wi);
              null !== e && ((p.elapsed = e), (p.isHandoff = !0));
            }
          }
          let y =
            !p.isHandoff &&
            !(function (e, r) {
              let n = e.get();
              if (!Array.isArray(r)) return n !== r;
              for (let e = 0; e < r.length; e++) if (r[e] !== n) return !0;
            })(c, f);
          if (
            ("spring" === p.type && (c.getVelocity() || p.velocity) && (y = !1),
            c.animation && (y = !1),
            y)
          )
            continue;
          c.start(
            (0, l.v)(
              r,
              c,
              f,
              e.shouldReduceMotion && s.G.has(r) ? { type: !1 } : p
            )
          );
          let x = c.animation;
          (0, u.L)(v) && (v.add(r), x.then(() => v.remove(r))), b.push(x);
        }
        return (
          y &&
            Promise.all(b).then(() => {
              y && (0, c.CD)(e, y);
            }),
          b
        );
      }
    },
    68588: function (e, r, n) {
      "use strict";
      n.d(r, {
        M: function () {
          return a;
        },
      });
      var s = n(93193);
      let a = "data-" + (0, s.D)("framerAppearId");
    },
    2445: function (e, r, n) {
      "use strict";
      function isAnimationControls(e) {
        return (
          null !== e && "object" == typeof e && "function" == typeof e.start
        );
      }
      n.d(r, {
        H: function () {
          return isAnimationControls;
        },
      });
    },
    48488: function (e, r, n) {
      "use strict";
      n.d(r, {
        C: function () {
          return isKeyframesTarget;
        },
      });
      let isKeyframesTarget = (e) => Array.isArray(e);
    },
    31056: function (e, r, n) {
      "use strict";
      function isTransitionDefined({
        when: e,
        delay: r,
        delayChildren: n,
        staggerChildren: s,
        staggerDirection: a,
        repeat: l,
        repeatType: u,
        repeatDelay: c,
        from: h,
        elapsed: d,
        ...f
      }) {
        return !!Object.keys(f).length;
      }
      function getValueTransition(e, r) {
        return e[r] || e.default || e;
      }
      n.d(r, {
        e: function () {
          return getValueTransition;
        },
        r: function () {
          return isTransitionDefined;
        },
      });
    },
    51526: function (e, r, n) {
      "use strict";
      n.d(r, {
        M: function () {
          return AnimatePresence;
        },
      });
      var s = n(67294),
        a = n(58868);
      function useIsMounted() {
        let e = (0, s.useRef)(!1);
        return (
          (0, a.L)(
            () => (
              (e.current = !0),
              () => {
                e.current = !1;
              }
            ),
            []
          ),
          e
        );
      }
      var l = n(2074),
        u = n(240),
        c = n(96681);
      let PopChildMeasure = class PopChildMeasure extends s.Component {
        getSnapshotBeforeUpdate(e) {
          let r = this.props.childRef.current;
          if (r && e.isPresent && !this.props.isPresent) {
            let e = this.props.sizeRef.current;
            (e.height = r.offsetHeight || 0),
              (e.width = r.offsetWidth || 0),
              (e.top = r.offsetTop),
              (e.left = r.offsetLeft);
          }
          return null;
        }
        componentDidUpdate() {}
        render() {
          return this.props.children;
        }
      };
      function PopChild({ children: e, isPresent: r }) {
        let n = (0, s.useId)(),
          a = (0, s.useRef)(null),
          l = (0, s.useRef)({ width: 0, height: 0, top: 0, left: 0 });
        return (
          (0, s.useInsertionEffect)(() => {
            let { width: e, height: s, top: u, left: c } = l.current;
            if (r || !a.current || !e || !s) return;
            a.current.dataset.motionPopId = n;
            let h = document.createElement("style");
            return (
              document.head.appendChild(h),
              h.sheet &&
                h.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${s}px !important;
            top: ${u}px !important;
            left: ${c}px !important;
          }
        `),
              () => {
                document.head.removeChild(h);
              }
            );
          }, [r]),
          s.createElement(
            PopChildMeasure,
            { isPresent: r, childRef: a, sizeRef: l },
            s.cloneElement(e, { ref: a })
          )
        );
      }
      let PresenceChild = ({
        children: e,
        initial: r,
        isPresent: n,
        onExitComplete: a,
        custom: l,
        presenceAffectsLayout: h,
        mode: d,
      }) => {
        let f = (0, c.h)(newChildrenMap),
          p = (0, s.useId)(),
          m = (0, s.useMemo)(
            () => ({
              id: p,
              initial: r,
              isPresent: n,
              custom: l,
              onExitComplete: (e) => {
                for (let r of (f.set(e, !0), f.values())) if (!r) return;
                a && a();
              },
              register: (e) => (f.set(e, !1), () => f.delete(e)),
            }),
            h ? void 0 : [n]
          );
        return (
          (0, s.useMemo)(() => {
            f.forEach((e, r) => f.set(r, !1));
          }, [n]),
          s.useEffect(() => {
            n || f.size || !a || a();
          }, [n]),
          "popLayout" === d &&
            (e = s.createElement(PopChild, { isPresent: n }, e)),
          s.createElement(u.O.Provider, { value: m }, e)
        );
      };
      function newChildrenMap() {
        return new Map();
      }
      var h = n(25364),
        d = n(45487);
      let getChildKey = (e) => e.key || "",
        AnimatePresence = ({
          children: e,
          custom: r,
          initial: n = !0,
          onExitComplete: u,
          exitBeforeEnter: c,
          presenceAffectsLayout: f = !0,
          mode: p = "sync",
        }) => {
          var m;
          (0, d.k)(!c, "Replace exitBeforeEnter with mode='wait'");
          let y =
              (0, s.useContext)(h.p).forceRender ||
              (function () {
                let e = useIsMounted(),
                  [r, n] = (0, s.useState)(0),
                  a = (0, s.useCallback)(() => {
                    e.current && n(r + 1);
                  }, [r]),
                  u = (0, s.useCallback)(() => l.Wi.postRender(a), [a]);
                return [u, r];
              })()[0],
            g = useIsMounted(),
            v = (function (e) {
              let r = [];
              return (
                s.Children.forEach(e, (e) => {
                  (0, s.isValidElement)(e) && r.push(e);
                }),
                r
              );
            })(e),
            b = v,
            w = (0, s.useRef)(new Map()).current,
            x = (0, s.useRef)(b),
            _ = (0, s.useRef)(new Map()).current,
            S = (0, s.useRef)(!0);
          if (
            ((0, a.L)(() => {
              (S.current = !1),
                (function (e, r) {
                  e.forEach((e) => {
                    let n = getChildKey(e);
                    r.set(n, e);
                  });
                })(v, _),
                (x.current = b);
            }),
            (m = () => {
              (S.current = !0), _.clear(), w.clear();
            }),
            (0, s.useEffect)(() => () => m(), []),
            S.current)
          )
            return s.createElement(
              s.Fragment,
              null,
              b.map((e) =>
                s.createElement(
                  PresenceChild,
                  {
                    key: getChildKey(e),
                    isPresent: !0,
                    initial: !!n && void 0,
                    presenceAffectsLayout: f,
                    mode: p,
                  },
                  e
                )
              )
            );
          b = [...b];
          let A = x.current.map(getChildKey),
            T = v.map(getChildKey),
            O = A.length;
          for (let e = 0; e < O; e++) {
            let r = A[e];
            -1 !== T.indexOf(r) || w.has(r) || w.set(r, void 0);
          }
          return (
            "wait" === p && w.size && (b = []),
            w.forEach((e, n) => {
              if (-1 !== T.indexOf(n)) return;
              let a = _.get(n);
              if (!a) return;
              let l = A.indexOf(n),
                c = e;
              c ||
                ((c = s.createElement(
                  PresenceChild,
                  {
                    key: getChildKey(a),
                    isPresent: !1,
                    onExitComplete: () => {
                      w.delete(n);
                      let e = Array.from(_.keys()).filter(
                        (e) => !T.includes(e)
                      );
                      if (
                        (e.forEach((e) => _.delete(e)),
                        (x.current = v.filter((r) => {
                          let s = getChildKey(r);
                          return s === n || e.includes(s);
                        })),
                        !w.size)
                      ) {
                        if (!1 === g.current) return;
                        y(), u && u();
                      }
                    },
                    custom: r,
                    presenceAffectsLayout: f,
                    mode: p,
                  },
                  a
                )),
                w.set(n, c)),
                b.splice(l, 0, c);
            }),
            (b = b.map((e) => {
              let r = e.key;
              return w.has(r)
                ? e
                : s.createElement(
                    PresenceChild,
                    {
                      key: getChildKey(e),
                      isPresent: !0,
                      presenceAffectsLayout: f,
                      mode: p,
                    },
                    e
                  );
            })),
            s.createElement(
              s.Fragment,
              null,
              w.size ? b : b.map((e) => (0, s.cloneElement)(e))
            )
          );
        };
    },
    25364: function (e, r, n) {
      "use strict";
      n.d(r, {
        p: function () {
          return a;
        },
      });
      var s = n(67294);
      let a = (0, s.createContext)({});
    },
    16014: function (e, r, n) {
      "use strict";
      n.d(r, {
        _: function () {
          return a;
        },
      });
      var s = n(67294);
      let a = (0, s.createContext)({
        transformPagePoint: (e) => e,
        isStatic: !1,
        reducedMotion: "never",
      });
    },
    24451: function (e, r, n) {
      "use strict";
      n.d(r, {
        v: function () {
          return a;
        },
      });
      var s = n(67294);
      let a = (0, s.createContext)({});
    },
    240: function (e, r, n) {
      "use strict";
      n.d(r, {
        O: function () {
          return a;
        },
      });
      var s = n(67294);
      let a = (0, s.createContext)(null);
    },
    41705: function (e, r, n) {
      "use strict";
      n.d(r, {
        g: function () {
          return a;
        },
      });
      var s = n(67294);
      let a = (0, s.createContext)({});
    },
    27255: function (e, r, n) {
      "use strict";
      n.d(r, {
        Bn: function () {
          return l;
        },
        X7: function () {
          return u;
        },
        Z7: function () {
          return circIn;
        },
      });
      var s = n(90415),
        a = n(75129);
      let circIn = (e) => 1 - Math.sin(Math.acos(e)),
        l = (0, a.M)(circIn),
        u = (0, s.o)(circIn);
    },
    90415: function (e, r, n) {
      "use strict";
      n.d(r, {
        o: function () {
          return mirrorEasing;
        },
      });
      let mirrorEasing = (e) => (r) =>
        r <= 0.5 ? e(2 * r) / 2 : (2 - e(2 * (1 - r))) / 2;
    },
    75129: function (e, r, n) {
      "use strict";
      n.d(r, {
        M: function () {
          return reverseEasing;
        },
      });
      let reverseEasing = (e) => (r) => 1 - e(1 - r);
    },
    43338: function (e, r, n) {
      "use strict";
      n.d(r, {
        N: function () {
          return isEasingArray;
        },
      });
      let isEasingArray = (e) => Array.isArray(e) && "number" != typeof e[0];
    },
    18456: function (e, r, n) {
      "use strict";
      function addDomEvent(e, r, n, s = { passive: !0 }) {
        return e.addEventListener(r, n, s), () => e.removeEventListener(r, n);
      }
      n.d(r, {
        E: function () {
          return addDomEvent;
        },
      });
    },
    70486: function (e, r, n) {
      "use strict";
      n.d(r, {
        a: function () {
          return addPointerEvent;
        },
      });
      var s = n(18456),
        a = n(28148);
      function addPointerEvent(e, r, n, l) {
        return (0, s.E)(e, r, (0, a.s)(n), l);
      }
    },
    28148: function (e, r, n) {
      "use strict";
      n.d(r, {
        Q: function () {
          return extractEventInfo;
        },
        s: function () {
          return addPointerInfo;
        },
      });
      var s = n(9403);
      function extractEventInfo(e, r = "page") {
        return { point: { x: e[r + "X"], y: e[r + "Y"] } };
      }
      let addPointerInfo = (e) => (r) =>
        (0, s.D)(r) && e(r, extractEventInfo(r));
    },
    9403: function (e, r, n) {
      "use strict";
      n.d(r, {
        D: function () {
          return isPrimaryPointer;
        },
      });
      let isPrimaryPointer = (e) =>
        "mouse" === e.pointerType
          ? "number" != typeof e.button || e.button <= 0
          : !1 !== e.isPrimary;
    },
    2074: function (e, r, n) {
      "use strict";
      n.d(r, {
        Pn: function () {
          return u;
        },
        Wi: function () {
          return l;
        },
        frameData: function () {
          return c;
        },
        S6: function () {
          return h;
        },
      });
      var s = n(81662);
      let Queue = class Queue {
        constructor() {
          (this.order = []), (this.scheduled = new Set());
        }
        add(e) {
          if (!this.scheduled.has(e))
            return this.scheduled.add(e), this.order.push(e), !0;
        }
        remove(e) {
          let r = this.order.indexOf(e);
          -1 !== r && (this.order.splice(r, 1), this.scheduled.delete(e));
        }
        clear() {
          (this.order.length = 0), this.scheduled.clear();
        }
      };
      let a = [
          "prepare",
          "read",
          "update",
          "preRender",
          "render",
          "postRender",
        ],
        {
          schedule: l,
          cancel: u,
          state: c,
          steps: h,
        } = (function (e, r) {
          let n = !1,
            s = !0,
            l = { delta: 0, timestamp: 0, isProcessing: !1 },
            u = a.reduce(
              (e, r) => (
                (e[r] = (function (e) {
                  let r = new Queue(),
                    n = new Queue(),
                    s = 0,
                    a = !1,
                    l = !1,
                    u = new WeakSet(),
                    c = {
                      schedule: (e, l = !1, c = !1) => {
                        let h = c && a,
                          d = h ? r : n;
                        return (
                          l && u.add(e),
                          d.add(e) && h && a && (s = r.order.length),
                          e
                        );
                      },
                      cancel: (e) => {
                        n.remove(e), u.delete(e);
                      },
                      process: (h) => {
                        if (a) {
                          l = !0;
                          return;
                        }
                        if (
                          ((a = !0),
                          ([r, n] = [n, r]),
                          n.clear(),
                          (s = r.order.length))
                        )
                          for (let n = 0; n < s; n++) {
                            let s = r.order[n];
                            s(h), u.has(s) && (c.schedule(s), e());
                          }
                        (a = !1), l && ((l = !1), c.process(h));
                      },
                    };
                  return c;
                })(() => (n = !0))),
                e
              ),
              {}
            ),
            processStep = (e) => u[e].process(l),
            processBatch = () => {
              let u = performance.now();
              (n = !1),
                (l.delta = s
                  ? 1e3 / 60
                  : Math.max(Math.min(u - l.timestamp, 40), 1)),
                (l.timestamp = u),
                (l.isProcessing = !0),
                a.forEach(processStep),
                (l.isProcessing = !1),
                n && r && ((s = !1), e(processBatch));
            },
            wake = () => {
              (n = !0), (s = !0), l.isProcessing || e(processBatch);
            },
            c = a.reduce((e, r) => {
              let s = u[r];
              return (
                (e[r] = (e, r = !1, a = !1) => (
                  n || wake(), s.schedule(e, r, a)
                )),
                e
              );
            }, {});
          return {
            schedule: c,
            cancel: (e) => a.forEach((r) => u[r].cancel(e)),
            state: l,
            steps: u,
          };
        })(
          "undefined" != typeof requestAnimationFrame
            ? requestAnimationFrame
            : s.Z,
          !0
        );
    },
    37544: function (e, r, n) {
      "use strict";
      function createLock(e) {
        let r = null;
        return () =>
          null === r &&
          ((r = e),
          () => {
            r = null;
          });
      }
      n.d(r, {
        fJ: function () {
          return getGlobalLock;
        },
        gD: function () {
          return isDragActive;
        },
      });
      let s = createLock("dragHorizontal"),
        a = createLock("dragVertical");
      function getGlobalLock(e) {
        let r = !1;
        if ("y" === e) r = a();
        else if ("x" === e) r = s();
        else {
          let e = s(),
            n = a();
          e && n
            ? (r = () => {
                e(), n();
              })
            : (e && e(), n && n());
        }
        return r;
      }
      function isDragActive() {
        let e = getGlobalLock(!0);
        return !e || (e(), !1);
      }
    },
    50806: function (e, r, n) {
      "use strict";
      n.d(r, {
        L: function () {
          return Feature;
        },
      });
      let Feature = class Feature {
        constructor(e) {
          (this.isMounted = !1), (this.node = e);
        }
        update() {}
      };
    },
    49673: function (e, r, n) {
      "use strict";
      n.d(r, {
        s: function () {
          return y;
        },
      });
      var s = n(2445),
        a = n(48488);
      function shallowCompare(e, r) {
        if (!Array.isArray(r)) return !1;
        let n = r.length;
        if (n !== e.length) return !1;
        for (let s = 0; s < n; s++) if (r[s] !== e[s]) return !1;
        return !0;
      }
      var l = n(97732),
        u = n(52248),
        c = n(22963),
        h = n(62711);
      function animateVariant(e, r, n = {}) {
        let s = (0, u.x)(e, r, n.custom),
          { transition: a = e.getDefaultTransition() || {} } = s || {};
        n.transitionOverride && (a = n.transitionOverride);
        let l = s
            ? () => Promise.all((0, h.w)(e, s, n))
            : () => Promise.resolve(),
          c =
            e.variantChildren && e.variantChildren.size
              ? (s = 0) => {
                  let {
                    delayChildren: l = 0,
                    staggerChildren: u,
                    staggerDirection: c,
                  } = a;
                  return (function (e, r, n = 0, s = 0, a = 1, l) {
                    let u = [],
                      c = (e.variantChildren.size - 1) * s,
                      h = 1 === a ? (e = 0) => e * s : (e = 0) => c - e * s;
                    return (
                      Array.from(e.variantChildren)
                        .sort(sortByTreeOrder)
                        .forEach((e, s) => {
                          e.notify("AnimationStart", r),
                            u.push(
                              animateVariant(e, r, {
                                ...l,
                                delay: n + h(s),
                              }).then(() => e.notify("AnimationComplete", r))
                            );
                        }),
                      Promise.all(u)
                    );
                  })(e, r, l + s, u, c, n);
                }
              : () => Promise.resolve(),
          { when: d } = a;
        if (!d) return Promise.all([l(), c(n.delay)]);
        {
          let [e, r] = "beforeChildren" === d ? [l, c] : [c, l];
          return e().then(() => r());
        }
      }
      function sortByTreeOrder(e, r) {
        return e.sortNodePosition(r);
      }
      let d = [...c.e].reverse(),
        f = c.e.length;
      function createTypeState(e = !1) {
        return {
          isActive: e,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {},
        };
      }
      var p = n(50806);
      let AnimationFeature = class AnimationFeature extends p.L {
        constructor(e) {
          super(e),
            e.animationState ||
              (e.animationState = (function (e) {
                let animate = (r) =>
                    Promise.all(
                      r.map(({ animation: r, options: n }) =>
                        (function (e, r, n = {}) {
                          let s;
                          if (
                            (e.notify("AnimationStart", r), Array.isArray(r))
                          ) {
                            let a = r.map((r) => animateVariant(e, r, n));
                            s = Promise.all(a);
                          } else if ("string" == typeof r)
                            s = animateVariant(e, r, n);
                          else {
                            let a =
                              "function" == typeof r
                                ? (0, u.x)(e, r, n.custom)
                                : r;
                            s = Promise.all((0, h.w)(e, a, n));
                          }
                          return s.then(() => e.notify("AnimationComplete", r));
                        })(e, r, n)
                      )
                    ),
                  r = {
                    animate: createTypeState(!0),
                    whileInView: createTypeState(),
                    whileHover: createTypeState(),
                    whileTap: createTypeState(),
                    whileDrag: createTypeState(),
                    whileFocus: createTypeState(),
                    exit: createTypeState(),
                  },
                  n = !0,
                  buildResolvedTypeValues = (r, n) => {
                    let s = (0, u.x)(e, n);
                    if (s) {
                      let { transition: e, transitionEnd: n, ...a } = s;
                      r = { ...r, ...a, ...n };
                    }
                    return r;
                  };
                function animateChanges(u, c) {
                  let h = e.getProps(),
                    p = e.getVariantContext(!0) || {},
                    m = [],
                    y = new Set(),
                    g = {},
                    v = 1 / 0;
                  for (let w = 0; w < f; w++) {
                    var b;
                    let f = d[w],
                      x = r[f],
                      _ = void 0 !== h[f] ? h[f] : p[f],
                      S = (0, l.$)(_),
                      A = f === c ? x.isActive : null;
                    !1 === A && (v = w);
                    let T = _ === p[f] && _ !== h[f] && S;
                    if (
                      (T && n && e.manuallyAnimateOnMount && (T = !1),
                      (x.protectedKeys = { ...g }),
                      (!x.isActive && null === A) ||
                        (!_ && !x.prevProp) ||
                        (0, s.H)(_) ||
                        "boolean" == typeof _)
                    )
                      continue;
                    let O =
                        ((b = x.prevProp),
                        "string" == typeof _
                          ? _ !== b
                          : !!Array.isArray(_) && !shallowCompare(_, b)),
                      P =
                        O || (f === c && x.isActive && !T && S) || (w > v && S),
                      j = !1,
                      k = Array.isArray(_) ? _ : [_],
                      C = k.reduce(buildResolvedTypeValues, {});
                    !1 === A && (C = {});
                    let { prevResolvedValues: R = {} } = x,
                      D = { ...R, ...C },
                      markToAnimate = (e) => {
                        (P = !0),
                          y.has(e) && ((j = !0), y.delete(e)),
                          (x.needsAnimating[e] = !0);
                      };
                    for (let e in D) {
                      let r = C[e],
                        n = R[e];
                      if (!g.hasOwnProperty(e))
                        (
                          (0, a.C)(r) && (0, a.C)(n)
                            ? shallowCompare(r, n)
                            : r === n
                        )
                          ? void 0 !== r && y.has(e)
                            ? markToAnimate(e)
                            : (x.protectedKeys[e] = !0)
                          : void 0 !== r
                          ? markToAnimate(e)
                          : y.add(e);
                    }
                    (x.prevProp = _),
                      (x.prevResolvedValues = C),
                      x.isActive && (g = { ...g, ...C }),
                      n && e.blockInitialAnimation && (P = !1),
                      P &&
                        (!T || j) &&
                        m.push(
                          ...k.map((e) => ({
                            animation: e,
                            options: { type: f, ...u },
                          }))
                        );
                  }
                  if (y.size) {
                    let r = {};
                    y.forEach((n) => {
                      let s = e.getBaseTarget(n);
                      void 0 !== s && (r[n] = s);
                    }),
                      m.push({ animation: r });
                  }
                  let w = !!m.length;
                  return (
                    n &&
                      (!1 === h.initial || h.initial === h.animate) &&
                      !e.manuallyAnimateOnMount &&
                      (w = !1),
                    (n = !1),
                    w ? animate(m) : Promise.resolve()
                  );
                }
                return {
                  animateChanges,
                  setActive: function (n, s, a) {
                    var l;
                    if (r[n].isActive === s) return Promise.resolve();
                    null === (l = e.variantChildren) ||
                      void 0 === l ||
                      l.forEach((e) => {
                        var r;
                        return null === (r = e.animationState) || void 0 === r
                          ? void 0
                          : r.setActive(n, s);
                      }),
                      (r[n].isActive = s);
                    let u = animateChanges(a, n);
                    for (let e in r) r[e].protectedKeys = {};
                    return u;
                  },
                  setAnimateFunction: function (r) {
                    animate = r(e);
                  },
                  getState: () => r,
                };
              })(e));
        }
        updateAnimationControlsSubscription() {
          let { animate: e } = this.node.getProps();
          this.unmount(),
            (0, s.H)(e) && (this.unmount = e.subscribe(this.node));
        }
        mount() {
          this.updateAnimationControlsSubscription();
        }
        update() {
          let { animate: e } = this.node.getProps(),
            { animate: r } = this.node.prevProps || {};
          e !== r && this.updateAnimationControlsSubscription();
        }
        unmount() {}
      };
      let m = 0;
      let ExitAnimationFeature = class ExitAnimationFeature extends p.L {
        constructor() {
          super(...arguments), (this.id = m++);
        }
        update() {
          if (!this.node.presenceContext) return;
          let {
              isPresent: e,
              onExitComplete: r,
              custom: n,
            } = this.node.presenceContext,
            { isPresent: s } = this.node.prevPresenceContext || {};
          if (!this.node.animationState || e === s) return;
          let a = this.node.animationState.setActive("exit", !e, {
            custom: null != n ? n : this.node.getProps().custom,
          });
          r && !e && a.then(() => r(this.id));
        }
        mount() {
          let { register: e } = this.node.presenceContext || {};
          e && (this.unmount = e(this.id));
        }
        unmount() {}
      };
      let y = {
        animation: { Feature: AnimationFeature },
        exit: { Feature: ExitAnimationFeature },
      };
    },
    9442: function (e, r, n) {
      "use strict";
      n.d(r, {
        A: function () {
          return a;
        },
      });
      let s = {
          animation: [
            "animate",
            "variants",
            "whileHover",
            "whileTap",
            "exit",
            "whileInView",
            "whileFocus",
            "whileDrag",
          ],
          exit: ["exit"],
          drag: ["drag", "dragControls"],
          focus: ["whileFocus"],
          hover: ["whileHover", "onHoverStart", "onHoverEnd"],
          tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
          pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
          inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
          layout: ["layout", "layoutId"],
        },
        a = {};
      for (let e in s) a[e] = { isEnabled: (r) => s[e].some((e) => !!r[e]) };
    },
    49725: function (e, r, n) {
      "use strict";
      n.d(r, {
        F: function () {
          return createMotionComponent;
        },
      });
      var s = n(67294),
        a = n(16014),
        l = n(24451),
        u = n(240),
        c = n(58868);
      let h = (0, s.createContext)({ strict: !1 });
      var d = n(68588),
        f = n(51804),
        p = n(97732),
        m = n(7504);
      function variantLabelsAsDependency(e) {
        return Array.isArray(e) ? e.join(" ") : e;
      }
      var y = n(9442),
        g = n(11741),
        v = n(25364),
        b = n(41705);
      let w = Symbol.for("motionComponentSymbol");
      function createMotionComponent({
        preloadedFeatures: e,
        createVisualElement: r,
        useRender: n,
        useVisualState: x,
        Component: _,
      }) {
        e &&
          (function (e) {
            for (let r in e) y.A[r] = { ...y.A[r], ...e[r] };
          })(e);
        let S = (0, s.forwardRef)(function (y, w) {
          var S;
          let A;
          let T = {
              ...(0, s.useContext)(a._),
              ...y,
              layoutId: (function ({ layoutId: e }) {
                let r = (0, s.useContext)(v.p).id;
                return r && void 0 !== e ? r + "-" + e : e;
              })(y),
            },
            { isStatic: O } = T,
            P = (function (e) {
              let { initial: r, animate: n } = (function (e, r) {
                if ((0, m.G)(e)) {
                  let { initial: r, animate: n } = e;
                  return {
                    initial: !1 === r || (0, p.$)(r) ? r : void 0,
                    animate: (0, p.$)(n) ? n : void 0,
                  };
                }
                return !1 !== e.inherit ? r : {};
              })(e, (0, s.useContext)(l.v));
              return (0, s.useMemo)(
                () => ({ initial: r, animate: n }),
                [variantLabelsAsDependency(r), variantLabelsAsDependency(n)]
              );
            })(y),
            j = x(y, O);
          if (!O && g.j) {
            P.visualElement = (function (e, r, n, f) {
              let { visualElement: p } = (0, s.useContext)(l.v),
                m = (0, s.useContext)(h),
                y = (0, s.useContext)(u.O),
                g = (0, s.useContext)(a._).reducedMotion,
                v = (0, s.useRef)();
              (f = f || m.renderer),
                !v.current &&
                  f &&
                  (v.current = f(e, {
                    visualState: r,
                    parent: p,
                    props: n,
                    presenceContext: y,
                    blockInitialAnimation: !!y && !1 === y.initial,
                    reducedMotionConfig: g,
                  }));
              let b = v.current;
              (0, s.useInsertionEffect)(() => {
                b && b.update(n, y);
              });
              let w = (0, s.useRef)(!!(n[d.M] && !window.HandoffComplete));
              return (
                (0, c.L)(() => {
                  b &&
                    (b.render(),
                    w.current &&
                      b.animationState &&
                      b.animationState.animateChanges());
                }),
                (0, s.useEffect)(() => {
                  b &&
                    (b.updateFeatures(),
                    !w.current &&
                      b.animationState &&
                      b.animationState.animateChanges(),
                    w.current &&
                      ((w.current = !1), (window.HandoffComplete = !0)));
                }),
                b
              );
            })(_, j, T, r);
            let n = (0, s.useContext)(b.g),
              f = (0, s.useContext)(h).strict;
            P.visualElement && (A = P.visualElement.loadFeatures(T, f, e, n));
          }
          return s.createElement(
            l.v.Provider,
            { value: P },
            A && P.visualElement
              ? s.createElement(A, { visualElement: P.visualElement, ...T })
              : null,
            n(
              _,
              y,
              ((S = P.visualElement),
              (0, s.useCallback)(
                (e) => {
                  e && j.mount && j.mount(e),
                    S && (e ? S.mount(e) : S.unmount()),
                    w &&
                      ("function" == typeof w
                        ? w(e)
                        : (0, f.I)(w) && (w.current = e));
                },
                [S]
              )),
              j,
              O,
              P.visualElement
            )
          );
        });
        return (S[w] = _), S;
      }
    },
    56816: function (e, r, n) {
      "use strict";
      n.d(r, {
        j: function () {
          return isForcedMotionValue;
        },
      });
      var s = n(64561),
        a = n(94714);
      function isForcedMotionValue(e, { layout: r, layoutId: n }) {
        return (
          a.G.has(e) ||
          e.startsWith("origin") ||
          ((r || void 0 !== n) && (!!s.P[e] || "opacity" === e))
        );
      }
    },
    45180: function (e, r, n) {
      "use strict";
      n.d(r, {
        t: function () {
          return makeUseVisualState;
        },
      });
      var s = n(67294),
        a = n(2445),
        l = n(240),
        u = n(79432),
        c = n(96681),
        h = n(16399),
        d = n(24451),
        f = n(7504);
      let makeUseVisualState = (e) => (r, n) => {
        let p = (0, s.useContext)(d.v),
          m = (0, s.useContext)(l.O),
          make = () =>
            (function (
              {
                scrapeMotionValuesFromProps: e,
                createRenderState: r,
                onMount: n,
              },
              s,
              l,
              c
            ) {
              let d = {
                latestValues: (function (e, r, n, s) {
                  let l = {},
                    c = s(e, {});
                  for (let e in c) l[e] = (0, h.b)(c[e]);
                  let { initial: d, animate: p } = e,
                    m = (0, f.G)(e),
                    y = (0, f.M)(e);
                  r &&
                    y &&
                    !m &&
                    !1 !== e.inherit &&
                    (void 0 === d && (d = r.initial),
                    void 0 === p && (p = r.animate));
                  let g = !!n && !1 === n.initial;
                  g = g || !1 === d;
                  let v = g ? p : d;
                  if (v && "boolean" != typeof v && !(0, a.H)(v)) {
                    let r = Array.isArray(v) ? v : [v];
                    r.forEach((r) => {
                      let n = (0, u.o)(e, r);
                      if (!n) return;
                      let { transitionEnd: s, transition: a, ...c } = n;
                      for (let e in c) {
                        let r = c[e];
                        if (Array.isArray(r)) {
                          let e = g ? r.length - 1 : 0;
                          r = r[e];
                        }
                        null !== r && (l[e] = r);
                      }
                      for (let e in s) l[e] = s[e];
                    });
                  }
                  return l;
                })(s, l, c, e),
                renderState: r(),
              };
              return n && (d.mount = (e) => n(s, e, d)), d;
            })(e, r, p, m);
        return n ? make() : (0, c.h)(make);
      };
    },
    76117: function (e, r, n) {
      "use strict";
      function convertBoundingBoxToBox({
        top: e,
        left: r,
        right: n,
        bottom: s,
      }) {
        return { x: { min: r, max: n }, y: { min: e, max: s } };
      }
      function convertBoxToBoundingBox({ x: e, y: r }) {
        return { top: r.min, right: e.max, bottom: r.max, left: e.min };
      }
      function transformBoxPoints(e, r) {
        if (!r) return e;
        let n = r({ x: e.left, y: e.top }),
          s = r({ x: e.right, y: e.bottom });
        return { top: n.y, left: n.x, bottom: s.y, right: s.x };
      }
      n.d(r, {
        d7: function () {
          return transformBoxPoints;
        },
        i8: function () {
          return convertBoundingBoxToBox;
        },
        z2: function () {
          return convertBoxToBoundingBox;
        },
      });
    },
    16e3: function (e, r, n) {
      "use strict";
      n.d(r, {
        D2: function () {
          return transformBox;
        },
        YY: function () {
          return applyTreeDeltas;
        },
        am: function () {
          return translateAxis;
        },
        o2: function () {
          return applyBoxDelta;
        },
        q2: function () {
          return scalePoint;
        },
      });
      var s = n(80022),
        a = n(99527);
      function scalePoint(e, r, n) {
        return n + r * (e - n);
      }
      function applyPointDelta(e, r, n, s, a) {
        return void 0 !== a && (e = s + a * (e - s)), s + n * (e - s) + r;
      }
      function applyAxisDelta(e, r = 0, n = 1, s, a) {
        (e.min = applyPointDelta(e.min, r, n, s, a)),
          (e.max = applyPointDelta(e.max, r, n, s, a));
      }
      function applyBoxDelta(e, { x: r, y: n }) {
        applyAxisDelta(e.x, r.translate, r.scale, r.originPoint),
          applyAxisDelta(e.y, n.translate, n.scale, n.originPoint);
      }
      function applyTreeDeltas(e, r, n, s = !1) {
        let l, u;
        let c = n.length;
        if (c) {
          r.x = r.y = 1;
          for (let h = 0; h < c; h++) {
            u = (l = n[h]).projectionDelta;
            let c = l.instance;
            (!c || !c.style || "contents" !== c.style.display) &&
              (s &&
                l.options.layoutScroll &&
                l.scroll &&
                l !== l.root &&
                transformBox(e, {
                  x: -l.scroll.offset.x,
                  y: -l.scroll.offset.y,
                }),
              u &&
                ((r.x *= u.x.scale), (r.y *= u.y.scale), applyBoxDelta(e, u)),
              s &&
                (0, a.ud)(l.latestValues) &&
                transformBox(e, l.latestValues));
          }
          (r.x = snapToDefault(r.x)), (r.y = snapToDefault(r.y));
        }
      }
      function snapToDefault(e) {
        return Number.isInteger(e)
          ? e
          : e > 1.0000000000001 || e < 0.999999999999
          ? e
          : 1;
      }
      function translateAxis(e, r) {
        (e.min = e.min + r), (e.max = e.max + r);
      }
      function transformAxis(e, r, [n, a, l]) {
        let u = void 0 !== r[l] ? r[l] : 0.5,
          c = (0, s.C)(e.min, e.max, u);
        applyAxisDelta(e, r[n], r[a], c, r.scale);
      }
      let l = ["x", "scaleX", "originX"],
        u = ["y", "scaleY", "originY"];
      function transformBox(e, r) {
        transformAxis(e.x, r, l), transformAxis(e.y, r, u);
      }
    },
    61512: function (e, r, n) {
      "use strict";
      n.d(r, {
        dO: function () {
          return createBox;
        },
        wc: function () {
          return createDelta;
        },
      });
      let createAxisDelta = () => ({
          translate: 0,
          scale: 1,
          origin: 0,
          originPoint: 0,
        }),
        createDelta = () => ({ x: createAxisDelta(), y: createAxisDelta() }),
        createAxis = () => ({ min: 0, max: 0 }),
        createBox = () => ({ x: createAxis(), y: createAxis() });
    },
    64561: function (e, r, n) {
      "use strict";
      n.d(r, {
        B: function () {
          return addScaleCorrector;
        },
        P: function () {
          return s;
        },
      });
      let s = {};
      function addScaleCorrector(e) {
        Object.assign(s, e);
      }
    },
    99527: function (e, r, n) {
      "use strict";
      function isIdentityScale(e) {
        return void 0 === e || 1 === e;
      }
      function hasScale({ scale: e, scaleX: r, scaleY: n }) {
        return (
          !isIdentityScale(e) || !isIdentityScale(r) || !isIdentityScale(n)
        );
      }
      function hasTransform(e) {
        return (
          hasScale(e) ||
          has2DTranslate(e) ||
          e.z ||
          e.rotate ||
          e.rotateX ||
          e.rotateY
        );
      }
      function has2DTranslate(e) {
        var r, n;
        return ((r = e.x) && "0%" !== r) || ((n = e.y) && "0%" !== n);
      }
      n.d(r, {
        D_: function () {
          return has2DTranslate;
        },
        Lj: function () {
          return hasScale;
        },
        ud: function () {
          return hasTransform;
        },
      });
    },
    56460: function (e, r, n) {
      "use strict";
      n.d(r, {
        J: function () {
          return measureViewportBox;
        },
        z: function () {
          return measurePageBox;
        },
      });
      var s = n(76117),
        a = n(16e3);
      function measureViewportBox(e, r) {
        return (0, s.i8)((0, s.d7)(e.getBoundingClientRect(), r));
      }
      function measurePageBox(e, r, n) {
        let s = measureViewportBox(e, n),
          { scroll: l } = r;
        return l && ((0, a.am)(s.x, l.offset.x), (0, a.am)(s.y, l.offset.y)), s;
      }
    },
    71303: function (e, r, n) {
      "use strict";
      n.d(r, {
        l: function () {
          return VisualElement;
        },
      });
      var s = n(61512),
        a = n(51804),
        l = n(11741);
      let u = { current: null },
        c = { current: !1 };
      var h = n(21560),
        d = n(33234),
        f = n(12490),
        p = n(40406),
        m = n(94714),
        y = n(7504),
        g = n(97732),
        v = n(79432),
        b = n(9442),
        w = n(22963),
        x = n(56955),
        _ = n(2074);
      let S = Object.keys(b.A),
        A = S.length,
        T = [
          "AnimationStart",
          "AnimationComplete",
          "Update",
          "BeforeLayoutMeasure",
          "LayoutMeasure",
          "LayoutAnimationStart",
          "LayoutAnimationComplete",
        ],
        O = w.V.length;
      let VisualElement = class VisualElement {
        constructor(
          {
            parent: e,
            props: r,
            presenceContext: n,
            reducedMotionConfig: s,
            visualState: a,
          },
          l = {}
        ) {
          (this.current = null),
            (this.children = new Set()),
            (this.isVariantNode = !1),
            (this.isControllingVariants = !1),
            (this.shouldReduceMotion = null),
            (this.values = new Map()),
            (this.features = {}),
            (this.valueSubscriptions = new Map()),
            (this.prevMotionValues = {}),
            (this.events = {}),
            (this.propEventSubscriptions = {}),
            (this.notifyUpdate = () =>
              this.notify("Update", this.latestValues)),
            (this.render = () => {
              this.current &&
                (this.triggerBuild(),
                this.renderInstance(
                  this.current,
                  this.renderState,
                  this.props.style,
                  this.projection
                ));
            }),
            (this.scheduleRender = () => _.Wi.render(this.render, !1, !0));
          let { latestValues: u, renderState: c } = a;
          (this.latestValues = u),
            (this.baseTarget = { ...u }),
            (this.initialValues = r.initial ? { ...u } : {}),
            (this.renderState = c),
            (this.parent = e),
            (this.props = r),
            (this.presenceContext = n),
            (this.depth = e ? e.depth + 1 : 0),
            (this.reducedMotionConfig = s),
            (this.options = l),
            (this.isControllingVariants = (0, y.G)(r)),
            (this.isVariantNode = (0, y.M)(r)),
            this.isVariantNode && (this.variantChildren = new Set()),
            (this.manuallyAnimateOnMount = !!(e && e.current));
          let { willChange: h, ...d } = this.scrapeMotionValuesFromProps(r, {});
          for (let e in d) {
            let r = d[e];
            void 0 !== u[e] &&
              (0, p.i)(r) &&
              (r.set(u[e], !1), (0, f.L)(h) && h.add(e));
          }
        }
        scrapeMotionValuesFromProps(e, r) {
          return {};
        }
        mount(e) {
          (this.current = e),
            x.R.set(e, this),
            this.projection &&
              !this.projection.instance &&
              this.projection.mount(e),
            this.parent &&
              this.isVariantNode &&
              !this.isControllingVariants &&
              (this.removeFromVariantTree = this.parent.addVariantChild(this)),
            this.values.forEach((e, r) => this.bindToMotionValue(r, e)),
            c.current ||
              (function () {
                if (((c.current = !0), l.j)) {
                  if (window.matchMedia) {
                    let e = window.matchMedia("(prefers-reduced-motion)"),
                      setReducedMotionPreferences = () =>
                        (u.current = e.matches);
                    e.addListener(setReducedMotionPreferences),
                      setReducedMotionPreferences();
                  } else u.current = !1;
                }
              })(),
            (this.shouldReduceMotion =
              "never" !== this.reducedMotionConfig &&
              ("always" === this.reducedMotionConfig || u.current)),
            this.parent && this.parent.children.add(this),
            this.update(this.props, this.presenceContext);
        }
        unmount() {
          for (let e in (x.R.delete(this.current),
          this.projection && this.projection.unmount(),
          (0, _.Pn)(this.notifyUpdate),
          (0, _.Pn)(this.render),
          this.valueSubscriptions.forEach((e) => e()),
          this.removeFromVariantTree && this.removeFromVariantTree(),
          this.parent && this.parent.children.delete(this),
          this.events))
            this.events[e].clear();
          for (let e in this.features) this.features[e].unmount();
          this.current = null;
        }
        bindToMotionValue(e, r) {
          let n = m.G.has(e),
            s = r.on("change", (r) => {
              (this.latestValues[e] = r),
                this.props.onUpdate && _.Wi.update(this.notifyUpdate, !1, !0),
                n && this.projection && (this.projection.isTransformDirty = !0);
            }),
            a = r.on("renderRequest", this.scheduleRender);
          this.valueSubscriptions.set(e, () => {
            s(), a();
          });
        }
        sortNodePosition(e) {
          return this.current &&
            this.sortInstanceNodePosition &&
            this.type === e.type
            ? this.sortInstanceNodePosition(this.current, e.current)
            : 0;
        }
        loadFeatures({ children: e, ...r }, n, s, l) {
          let u, c;
          for (let e = 0; e < A; e++) {
            let n = S[e],
              {
                isEnabled: s,
                Feature: a,
                ProjectionNode: l,
                MeasureLayout: h,
              } = b.A[n];
            l && (u = l),
              s(r) &&
                (!this.features[n] && a && (this.features[n] = new a(this)),
                h && (c = h));
          }
          if (
            ("html" === this.type || "svg" === this.type) &&
            !this.projection &&
            u
          ) {
            this.projection = new u(
              this.latestValues,
              this.parent && this.parent.projection
            );
            let {
              layoutId: e,
              layout: n,
              drag: s,
              dragConstraints: c,
              layoutScroll: h,
              layoutRoot: d,
            } = r;
            this.projection.setOptions({
              layoutId: e,
              layout: n,
              alwaysMeasureLayout: !!s || (c && (0, a.I)(c)),
              visualElement: this,
              scheduleRender: () => this.scheduleRender(),
              animationType: "string" == typeof n ? n : "both",
              initialPromotionConfig: l,
              layoutScroll: h,
              layoutRoot: d,
            });
          }
          return c;
        }
        updateFeatures() {
          for (let e in this.features) {
            let r = this.features[e];
            r.isMounted ? r.update() : (r.mount(), (r.isMounted = !0));
          }
        }
        triggerBuild() {
          this.build(
            this.renderState,
            this.latestValues,
            this.options,
            this.props
          );
        }
        measureViewportBox() {
          return this.current
            ? this.measureInstanceViewportBox(this.current, this.props)
            : (0, s.dO)();
        }
        getStaticValue(e) {
          return this.latestValues[e];
        }
        setStaticValue(e, r) {
          this.latestValues[e] = r;
        }
        makeTargetAnimatable(e, r = !0) {
          return this.makeTargetAnimatableFromInstance(e, this.props, r);
        }
        update(e, r) {
          (e.transformTemplate || this.props.transformTemplate) &&
            this.scheduleRender(),
            (this.prevProps = this.props),
            (this.props = e),
            (this.prevPresenceContext = this.presenceContext),
            (this.presenceContext = r);
          for (let r = 0; r < T.length; r++) {
            let n = T[r];
            this.propEventSubscriptions[n] &&
              (this.propEventSubscriptions[n](),
              delete this.propEventSubscriptions[n]);
            let s = e["on" + n];
            s && (this.propEventSubscriptions[n] = this.on(n, s));
          }
          (this.prevMotionValues = (function (e, r, n) {
            let { willChange: s } = r;
            for (let a in r) {
              let l = r[a],
                u = n[a];
              if ((0, p.i)(l)) e.addValue(a, l), (0, f.L)(s) && s.add(a);
              else if ((0, p.i)(u))
                e.addValue(a, (0, d.BX)(l, { owner: e })),
                  (0, f.L)(s) && s.remove(a);
              else if (u !== l) {
                if (e.hasValue(a)) {
                  let r = e.getValue(a);
                  r.hasAnimated || r.set(l);
                } else {
                  let r = e.getStaticValue(a);
                  e.addValue(a, (0, d.BX)(void 0 !== r ? r : l, { owner: e }));
                }
              }
            }
            for (let s in n) void 0 === r[s] && e.removeValue(s);
            return r;
          })(
            this,
            this.scrapeMotionValuesFromProps(e, this.prevProps),
            this.prevMotionValues
          )),
            this.handleChildMotionValue && this.handleChildMotionValue();
        }
        getProps() {
          return this.props;
        }
        getVariant(e) {
          return this.props.variants ? this.props.variants[e] : void 0;
        }
        getDefaultTransition() {
          return this.props.transition;
        }
        getTransformPagePoint() {
          return this.props.transformPagePoint;
        }
        getClosestVariantNode() {
          return this.isVariantNode
            ? this
            : this.parent
            ? this.parent.getClosestVariantNode()
            : void 0;
        }
        getVariantContext(e = !1) {
          if (e) return this.parent ? this.parent.getVariantContext() : void 0;
          if (!this.isControllingVariants) {
            let e = (this.parent && this.parent.getVariantContext()) || {};
            return (
              void 0 !== this.props.initial && (e.initial = this.props.initial),
              e
            );
          }
          let r = {};
          for (let e = 0; e < O; e++) {
            let n = w.V[e],
              s = this.props[n];
            ((0, g.$)(s) || !1 === s) && (r[n] = s);
          }
          return r;
        }
        addVariantChild(e) {
          let r = this.getClosestVariantNode();
          if (r)
            return (
              r.variantChildren && r.variantChildren.add(e),
              () => r.variantChildren.delete(e)
            );
        }
        addValue(e, r) {
          r !== this.values.get(e) &&
            (this.removeValue(e), this.bindToMotionValue(e, r)),
            this.values.set(e, r),
            (this.latestValues[e] = r.get());
        }
        removeValue(e) {
          this.values.delete(e);
          let r = this.valueSubscriptions.get(e);
          r && (r(), this.valueSubscriptions.delete(e)),
            delete this.latestValues[e],
            this.removeValueFromRenderState(e, this.renderState);
        }
        hasValue(e) {
          return this.values.has(e);
        }
        getValue(e, r) {
          if (this.props.values && this.props.values[e])
            return this.props.values[e];
          let n = this.values.get(e);
          return (
            void 0 === n &&
              void 0 !== r &&
              ((n = (0, d.BX)(r, { owner: this })), this.addValue(e, n)),
            n
          );
        }
        readValue(e) {
          var r;
          return void 0 === this.latestValues[e] && this.current
            ? null !== (r = this.getBaseTargetFromProps(this.props, e)) &&
              void 0 !== r
              ? r
              : this.readValueFromInstance(this.current, e, this.options)
            : this.latestValues[e];
        }
        setBaseTarget(e, r) {
          this.baseTarget[e] = r;
        }
        getBaseTarget(e) {
          var r;
          let { initial: n } = this.props,
            s =
              "string" == typeof n || "object" == typeof n
                ? null === (r = (0, v.o)(this.props, n)) || void 0 === r
                  ? void 0
                  : r[e]
                : void 0;
          if (n && void 0 !== s) return s;
          let a = this.getBaseTargetFromProps(this.props, e);
          return void 0 === a || (0, p.i)(a)
            ? void 0 !== this.initialValues[e] && void 0 === s
              ? void 0
              : this.baseTarget[e]
            : a;
        }
        on(e, r) {
          return (
            this.events[e] || (this.events[e] = new h.L()),
            this.events[e].add(r)
          );
        }
        notify(e, ...r) {
          this.events[e] && this.events[e].notify(...r);
        }
      };
    },
    86808: function (e, r, n) {
      "use strict";
      n.d(r, {
        J: function () {
          return DOMVisualElement;
        },
      });
      var s = n(14330),
        a = n(45487),
        l = n(33441),
        u = n(57630);
      let c = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
      function getVariableValue(e, r, n = 1) {
        (0, a.k)(
          n <= 4,
          `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`
        );
        let [s, h] = (function (e) {
          let r = c.exec(e);
          if (!r) return [,];
          let [, n, s] = r;
          return [n, s];
        })(e);
        if (!s) return;
        let d = window.getComputedStyle(r).getPropertyValue(s);
        if (d) {
          let e = d.trim();
          return (0, l.P)(e) ? parseFloat(e) : e;
        }
        return (0, u.tm)(h) ? getVariableValue(h, r, n + 1) : h;
      }
      var h = n(48488),
        d = n(94714),
        f = n(56440),
        p = n(11741),
        m = n(61649),
        y = n(96190);
      let g = new Set([
          "width",
          "height",
          "top",
          "left",
          "right",
          "bottom",
          "x",
          "y",
          "translateX",
          "translateY",
        ]),
        isPositionalKey = (e) => g.has(e),
        hasPositionalKey = (e) => Object.keys(e).some(isPositionalKey),
        isNumOrPxType = (e) => e === m.Rx || e === y.px,
        getPosFromMatrix = (e, r) => parseFloat(e.split(", ")[r]),
        getTranslateFromMatrix =
          (e, r) =>
          (n, { transform: s }) => {
            if ("none" === s || !s) return 0;
            let a = s.match(/^matrix3d\((.+)\)$/);
            if (a) return getPosFromMatrix(a[1], r);
            {
              let r = s.match(/^matrix\((.+)\)$/);
              return r ? getPosFromMatrix(r[1], e) : 0;
            }
          },
        v = new Set(["x", "y", "z"]),
        b = d._.filter((e) => !v.has(e)),
        w = {
          width: ({ x: e }, { paddingLeft: r = "0", paddingRight: n = "0" }) =>
            e.max - e.min - parseFloat(r) - parseFloat(n),
          height: ({ y: e }, { paddingTop: r = "0", paddingBottom: n = "0" }) =>
            e.max - e.min - parseFloat(r) - parseFloat(n),
          top: (e, { top: r }) => parseFloat(r),
          left: (e, { left: r }) => parseFloat(r),
          bottom: ({ y: e }, { top: r }) => parseFloat(r) + (e.max - e.min),
          right: ({ x: e }, { left: r }) => parseFloat(r) + (e.max - e.min),
          x: getTranslateFromMatrix(4, 13),
          y: getTranslateFromMatrix(5, 14),
        };
      (w.translateX = w.x), (w.translateY = w.y);
      let convertChangedValueTypes = (e, r, n) => {
          let s = r.measureViewportBox(),
            a = r.current,
            l = getComputedStyle(a),
            { display: u } = l,
            c = {};
          "none" === u && r.setStaticValue("display", e.display || "block"),
            n.forEach((e) => {
              c[e] = w[e](s, l);
            }),
            r.render();
          let h = r.measureViewportBox();
          return (
            n.forEach((n) => {
              let s = r.getValue(n);
              s && s.jump(c[n]), (e[n] = w[n](h, l));
            }),
            e
          );
        },
        checkAndConvertChangedValueTypes = (e, r, n = {}, s = {}) => {
          (r = { ...r }), (s = { ...s });
          let l = Object.keys(r).filter(isPositionalKey),
            u = [],
            c = !1,
            d = [];
          if (
            (l.forEach((l) => {
              let p;
              let m = e.getValue(l);
              if (!e.hasValue(l)) return;
              let g = n[l],
                v = (0, f.C)(g),
                w = r[l];
              if ((0, h.C)(w)) {
                let e = w.length,
                  r = null === w[0] ? 1 : 0;
                (g = w[r]), (v = (0, f.C)(g));
                for (let n = r; n < e && null !== w[n]; n++)
                  p
                    ? (0, a.k)(
                        (0, f.C)(w[n]) === p,
                        "All keyframes must be of the same type"
                      )
                    : ((p = (0, f.C)(w[n])),
                      (0, a.k)(
                        p === v || (isNumOrPxType(v) && isNumOrPxType(p)),
                        "Keyframes must be of the same dimension as the current value"
                      ));
              } else p = (0, f.C)(w);
              if (v !== p) {
                if (isNumOrPxType(v) && isNumOrPxType(p)) {
                  let e = m.get();
                  "string" == typeof e && m.set(parseFloat(e)),
                    "string" == typeof w
                      ? (r[l] = parseFloat(w))
                      : Array.isArray(w) &&
                        p === y.px &&
                        (r[l] = w.map(parseFloat));
                } else
                  (null == v ? void 0 : v.transform) &&
                  (null == p ? void 0 : p.transform) &&
                  (0 === g || 0 === w)
                    ? 0 === g
                      ? m.set(p.transform(g))
                      : (r[l] = v.transform(w))
                    : (c ||
                        ((u = (function (e) {
                          let r = [];
                          return (
                            b.forEach((n) => {
                              let s = e.getValue(n);
                              void 0 !== s &&
                                (r.push([n, s.get()]),
                                s.set(n.startsWith("scale") ? 1 : 0));
                            }),
                            r.length && e.render(),
                            r
                          );
                        })(e)),
                        (c = !0)),
                      d.push(l),
                      (s[l] = void 0 !== s[l] ? s[l] : r[l]),
                      m.jump(w));
              }
            }),
            !d.length)
          )
            return { target: r, transitionEnd: s };
          {
            let n = d.indexOf("height") >= 0 ? window.pageYOffset : null,
              a = convertChangedValueTypes(r, e, d);
            return (
              u.length &&
                u.forEach(([r, n]) => {
                  e.getValue(r).set(n);
                }),
              e.render(),
              p.j && null !== n && window.scrollTo({ top: n }),
              { target: a, transitionEnd: s }
            );
          }
        },
        parseDomVariant = (e, r, n, s) => {
          var a, l;
          let c = (function (e, { ...r }, n) {
            let s = e.current;
            if (!(s instanceof Element)) return { target: r, transitionEnd: n };
            for (let a in (n && (n = { ...n }),
            e.values.forEach((e) => {
              let r = e.get();
              if (!(0, u.tm)(r)) return;
              let n = getVariableValue(r, s);
              n && e.set(n);
            }),
            r)) {
              let e = r[a];
              if (!(0, u.tm)(e)) continue;
              let l = getVariableValue(e, s);
              l && ((r[a] = l), n || (n = {}), void 0 === n[a] && (n[a] = e));
            }
            return { target: r, transitionEnd: n };
          })(e, r, s);
          return (
            (r = c.target),
            (s = c.transitionEnd),
            (a = r),
            (l = s),
            hasPositionalKey(a)
              ? checkAndConvertChangedValueTypes(e, a, n, l)
              : { target: a, transitionEnd: l }
          );
        };
      var x = n(71303);
      let DOMVisualElement = class DOMVisualElement extends x.l {
        sortInstanceNodePosition(e, r) {
          return 2 & e.compareDocumentPosition(r) ? 1 : -1;
        }
        getBaseTargetFromProps(e, r) {
          return e.style ? e.style[r] : void 0;
        }
        removeValueFromRenderState(e, { vars: r, style: n }) {
          delete r[e], delete n[e];
        }
        makeTargetAnimatableFromInstance(
          { transition: e, transitionEnd: r, ...n },
          { transformValues: a },
          l
        ) {
          let u = (0, s.P$)(n, e || {}, this);
          if ((a && (r && (r = a(r)), n && (n = a(n)), u && (u = a(u))), l)) {
            (0, s.GJ)(this, n, u);
            let e = parseDomVariant(this, n, u, r);
            (r = e.transitionEnd), (n = e.target);
          }
          return { transition: e, transitionEnd: r, ...n };
        }
      };
    },
    38940: function (e, r, n) {
      "use strict";
      n.d(r, {
        E: function () {
          return ej;
        },
      });
      var s = n(49725);
      let a = [
        "animate",
        "circle",
        "defs",
        "desc",
        "ellipse",
        "g",
        "image",
        "line",
        "filter",
        "marker",
        "mask",
        "metadata",
        "path",
        "pattern",
        "polygon",
        "polyline",
        "rect",
        "stop",
        "switch",
        "symbol",
        "svg",
        "text",
        "tspan",
        "use",
        "view",
      ];
      function isSVGComponent(e) {
        if ("string" != typeof e || e.includes("-"));
        else if (a.indexOf(e) > -1 || /[A-Z]/.test(e)) return !0;
        return !1;
      }
      var l = n(67294),
        u = n(56816),
        c = n(40406),
        h = n(38057);
      let createHtmlRenderState = () => ({
        style: {},
        transform: {},
        transformOrigin: {},
        vars: {},
      });
      function copyRawValuesOnly(e, r, n) {
        for (let s in r) (0, c.i)(r[s]) || (0, u.j)(s, n) || (e[s] = r[s]);
      }
      function useHTMLProps(e, r, n) {
        let s = {},
          a = (function (e, r, n) {
            let s = e.style || {},
              a = {};
            return (
              copyRawValuesOnly(a, s, e),
              Object.assign(
                a,
                (function ({ transformTemplate: e }, r, n) {
                  return (0, l.useMemo)(() => {
                    let s = createHtmlRenderState();
                    return (
                      (0, h.r)(s, r, { enableHardwareAcceleration: !n }, e),
                      Object.assign({}, s.vars, s.style)
                    );
                  }, [r]);
                })(e, r, n)
              ),
              e.transformValues ? e.transformValues(a) : a
            );
          })(e, r, n);
        return (
          e.drag &&
            !1 !== e.dragListener &&
            ((s.draggable = !1),
            (a.userSelect = a.WebkitUserSelect = a.WebkitTouchCallout = "none"),
            (a.touchAction =
              !0 === e.drag ? "none" : `pan-${"x" === e.drag ? "y" : "x"}`)),
          void 0 === e.tabIndex &&
            (e.onTap || e.onTapStart || e.whileTap) &&
            (s.tabIndex = 0),
          (s.style = a),
          s
        );
      }
      var d = n(91492),
        f = n(85415);
      let createSvgRenderState = () => ({
        ...createHtmlRenderState(),
        attrs: {},
      });
      var p = n(79854);
      function useSVGProps(e, r, n, s) {
        let a = (0, l.useMemo)(() => {
          let n = createSvgRenderState();
          return (
            (0, f.i)(
              n,
              r,
              { enableHardwareAcceleration: !1 },
              (0, p.a)(s),
              e.transformTemplate
            ),
            { ...n.attrs, style: { ...n.style } }
          );
        }, [r]);
        if (e.style) {
          let r = {};
          copyRawValuesOnly(r, e.style, e), (a.style = { ...r, ...a.style });
        }
        return a;
      }
      var m = n(68504),
        y = n(16832),
        g = n(45180),
        v = n(2074);
      let b = {
        useVisualState: (0, g.t)({
          scrapeMotionValuesFromProps: y.U,
          createRenderState: createSvgRenderState,
          onMount: (e, r, { renderState: n, latestValues: s }) => {
            v.Wi.read(() => {
              try {
                n.dimensions =
                  "function" == typeof r.getBBox
                    ? r.getBBox()
                    : r.getBoundingClientRect();
              } catch (e) {
                n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
              }
            }),
              v.Wi.render(() => {
                (0, f.i)(
                  n,
                  s,
                  { enableHardwareAcceleration: !1 },
                  (0, p.a)(r.tagName),
                  e.transformTemplate
                ),
                  (0, m.K)(r, n);
              });
          },
        }),
      };
      var w = n(50189);
      let x = {
        useVisualState: (0, g.t)({
          scrapeMotionValuesFromProps: w.U,
          createRenderState: createHtmlRenderState,
        }),
      };
      var _ = n(70486),
        S = n(83624),
        A = n(37544),
        T = n(50806);
      function addHoverEvent(e, r) {
        let n = "pointer" + (r ? "enter" : "leave"),
          s = "onHover" + (r ? "Start" : "End");
        return (0, _.a)(
          e.current,
          n,
          (n, a) => {
            if ("touch" === n.pointerType || (0, A.gD)()) return;
            let l = e.getProps();
            e.animationState &&
              l.whileHover &&
              e.animationState.setActive("whileHover", r),
              l[s] && v.Wi.update(() => l[s](n, a));
          },
          { passive: !e.getProps()[s] }
        );
      }
      let HoverGesture = class HoverGesture extends T.L {
        mount() {
          this.unmount = (0, S.z)(
            addHoverEvent(this.node, !0),
            addHoverEvent(this.node, !1)
          );
        }
        unmount() {}
      };
      var O = n(18456);
      let FocusGesture = class FocusGesture extends T.L {
        constructor() {
          super(...arguments), (this.isActive = !1);
        }
        onFocus() {
          let e = !1;
          try {
            e = this.node.current.matches(":focus-visible");
          } catch (r) {
            e = !0;
          }
          e &&
            this.node.animationState &&
            (this.node.animationState.setActive("whileFocus", !0),
            (this.isActive = !0));
        }
        onBlur() {
          this.isActive &&
            this.node.animationState &&
            (this.node.animationState.setActive("whileFocus", !1),
            (this.isActive = !1));
        }
        mount() {
          this.unmount = (0, S.z)(
            (0, O.E)(this.node.current, "focus", () => this.onFocus()),
            (0, O.E)(this.node.current, "blur", () => this.onBlur())
          );
        }
        unmount() {}
      };
      var P = n(28148);
      let isNodeOrChild = (e, r) =>
        !!r && (e === r || isNodeOrChild(e, r.parentElement));
      var j = n(81662);
      function fireSyntheticPointerEvent(e, r) {
        if (!r) return;
        let n = new PointerEvent("pointer" + e);
        r(n, (0, P.Q)(n));
      }
      let PressGesture = class PressGesture extends T.L {
        constructor() {
          super(...arguments),
            (this.removeStartListeners = j.Z),
            (this.removeEndListeners = j.Z),
            (this.removeAccessibleListeners = j.Z),
            (this.startPointerPress = (e, r) => {
              if (this.isPressing) return;
              this.removeEndListeners();
              let n = this.node.getProps(),
                s = (0, _.a)(
                  window,
                  "pointerup",
                  (e, r) => {
                    if (!this.checkPressEnd()) return;
                    let {
                      onTap: n,
                      onTapCancel: s,
                      globalTapTarget: a,
                    } = this.node.getProps();
                    v.Wi.update(() => {
                      a || isNodeOrChild(this.node.current, e.target)
                        ? n && n(e, r)
                        : s && s(e, r);
                    });
                  },
                  { passive: !(n.onTap || n.onPointerUp) }
                ),
                a = (0, _.a)(
                  window,
                  "pointercancel",
                  (e, r) => this.cancelPress(e, r),
                  { passive: !(n.onTapCancel || n.onPointerCancel) }
                );
              (this.removeEndListeners = (0, S.z)(s, a)), this.startPress(e, r);
            }),
            (this.startAccessiblePress = () => {
              let e = (0, O.E)(this.node.current, "keydown", (e) => {
                  "Enter" !== e.key ||
                    this.isPressing ||
                    (this.removeEndListeners(),
                    (this.removeEndListeners = (0, O.E)(
                      this.node.current,
                      "keyup",
                      (e) => {
                        "Enter" === e.key &&
                          this.checkPressEnd() &&
                          fireSyntheticPointerEvent("up", (e, r) => {
                            let { onTap: n } = this.node.getProps();
                            n && v.Wi.update(() => n(e, r));
                          });
                      }
                    )),
                    fireSyntheticPointerEvent("down", (e, r) => {
                      this.startPress(e, r);
                    }));
                }),
                r = (0, O.E)(this.node.current, "blur", () => {
                  this.isPressing &&
                    fireSyntheticPointerEvent("cancel", (e, r) =>
                      this.cancelPress(e, r)
                    );
                });
              this.removeAccessibleListeners = (0, S.z)(e, r);
            });
        }
        startPress(e, r) {
          this.isPressing = !0;
          let { onTapStart: n, whileTap: s } = this.node.getProps();
          s &&
            this.node.animationState &&
            this.node.animationState.setActive("whileTap", !0),
            n && v.Wi.update(() => n(e, r));
        }
        checkPressEnd() {
          this.removeEndListeners(), (this.isPressing = !1);
          let e = this.node.getProps();
          return (
            e.whileTap &&
              this.node.animationState &&
              this.node.animationState.setActive("whileTap", !1),
            !(0, A.gD)()
          );
        }
        cancelPress(e, r) {
          if (!this.checkPressEnd()) return;
          let { onTapCancel: n } = this.node.getProps();
          n && v.Wi.update(() => n(e, r));
        }
        mount() {
          let e = this.node.getProps(),
            r = (0, _.a)(
              e.globalTapTarget ? window : this.node.current,
              "pointerdown",
              this.startPointerPress,
              { passive: !(e.onTapStart || e.onPointerStart) }
            ),
            n = (0, O.E)(this.node.current, "focus", this.startAccessiblePress);
          this.removeStartListeners = (0, S.z)(r, n);
        }
        unmount() {
          this.removeStartListeners(),
            this.removeEndListeners(),
            this.removeAccessibleListeners();
        }
      };
      let k = new WeakMap(),
        C = new WeakMap(),
        fireObserverCallback = (e) => {
          let r = k.get(e.target);
          r && r(e);
        },
        fireAllObserverCallbacks = (e) => {
          e.forEach(fireObserverCallback);
        },
        R = { some: 0, all: 1 };
      let InViewFeature = class InViewFeature extends T.L {
        constructor() {
          super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
        }
        startObserver() {
          this.unmount();
          let { viewport: e = {} } = this.node.getProps(),
            { root: r, margin: n, amount: s = "some", once: a } = e,
            l = {
              root: r ? r.current : void 0,
              rootMargin: n,
              threshold: "number" == typeof s ? s : R[s],
            };
          return (function (e, r, n) {
            let s = (function ({ root: e, ...r }) {
              let n = e || document;
              C.has(n) || C.set(n, {});
              let s = C.get(n),
                a = JSON.stringify(r);
              return (
                s[a] ||
                  (s[a] = new IntersectionObserver(fireAllObserverCallbacks, {
                    root: e,
                    ...r,
                  })),
                s[a]
              );
            })(r);
            return (
              k.set(e, n),
              s.observe(e),
              () => {
                k.delete(e), s.unobserve(e);
              }
            );
          })(this.node.current, l, (e) => {
            let { isIntersecting: r } = e;
            if (
              this.isInView === r ||
              ((this.isInView = r), a && !r && this.hasEnteredView)
            )
              return;
            r && (this.hasEnteredView = !0),
              this.node.animationState &&
                this.node.animationState.setActive("whileInView", r);
            let { onViewportEnter: n, onViewportLeave: s } =
                this.node.getProps(),
              l = r ? n : s;
            l && l(e);
          });
        }
        mount() {
          this.startObserver();
        }
        update() {
          if ("undefined" == typeof IntersectionObserver) return;
          let { props: e, prevProps: r } = this.node,
            n = ["amount", "margin", "root"].some(
              (function ({ viewport: e = {} }, { viewport: r = {} } = {}) {
                return (n) => e[n] !== r[n];
              })(e, r)
            );
          n && this.startObserver();
        }
        unmount() {}
      };
      var D = n(49673),
        B = n(45487),
        I = n(86917);
      let distance = (e, r) => Math.abs(e - r);
      var V = n(9403);
      let PanSession = class PanSession {
        constructor(
          e,
          r,
          {
            transformPagePoint: n,
            contextWindow: s,
            dragSnapToOrigin: a = !1,
          } = {}
        ) {
          if (
            ((this.startEvent = null),
            (this.lastMoveEvent = null),
            (this.lastMoveEventInfo = null),
            (this.handlers = {}),
            (this.contextWindow = window),
            (this.updatePoint = () => {
              if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
              let e = getPanInfo(this.lastMoveEventInfo, this.history),
                r = null !== this.startEvent,
                n =
                  (function (e, r) {
                    let n = distance(e.x, r.x),
                      s = distance(e.y, r.y);
                    return Math.sqrt(n ** 2 + s ** 2);
                  })(e.offset, { x: 0, y: 0 }) >= 3;
              if (!r && !n) return;
              let { point: s } = e,
                { timestamp: a } = v.frameData;
              this.history.push({ ...s, timestamp: a });
              let { onStart: l, onMove: u } = this.handlers;
              r ||
                (l && l(this.lastMoveEvent, e),
                (this.startEvent = this.lastMoveEvent)),
                u && u(this.lastMoveEvent, e);
            }),
            (this.handlePointerMove = (e, r) => {
              (this.lastMoveEvent = e),
                (this.lastMoveEventInfo = transformPoint(
                  r,
                  this.transformPagePoint
                )),
                v.Wi.update(this.updatePoint, !0);
            }),
            (this.handlePointerUp = (e, r) => {
              this.end();
              let {
                onEnd: n,
                onSessionEnd: s,
                resumeAnimation: a,
              } = this.handlers;
              if (
                (this.dragSnapToOrigin && a && a(),
                !(this.lastMoveEvent && this.lastMoveEventInfo))
              )
                return;
              let l = getPanInfo(
                "pointercancel" === e.type
                  ? this.lastMoveEventInfo
                  : transformPoint(r, this.transformPagePoint),
                this.history
              );
              this.startEvent && n && n(e, l), s && s(e, l);
            }),
            !(0, V.D)(e))
          )
            return;
          (this.dragSnapToOrigin = a),
            (this.handlers = r),
            (this.transformPagePoint = n),
            (this.contextWindow = s || window);
          let l = (0, P.Q)(e),
            u = transformPoint(l, this.transformPagePoint),
            { point: c } = u,
            { timestamp: h } = v.frameData;
          this.history = [{ ...c, timestamp: h }];
          let { onSessionStart: d } = r;
          d && d(e, getPanInfo(u, this.history)),
            (this.removeListeners = (0, S.z)(
              (0, _.a)(
                this.contextWindow,
                "pointermove",
                this.handlePointerMove
              ),
              (0, _.a)(this.contextWindow, "pointerup", this.handlePointerUp),
              (0, _.a)(
                this.contextWindow,
                "pointercancel",
                this.handlePointerUp
              )
            ));
        }
        updateHandlers(e) {
          this.handlers = e;
        }
        end() {
          this.removeListeners && this.removeListeners(),
            (0, v.Pn)(this.updatePoint);
        }
      };
      function transformPoint(e, r) {
        return r ? { point: r(e.point) } : e;
      }
      function subtractPoint(e, r) {
        return { x: e.x - r.x, y: e.y - r.y };
      }
      function getPanInfo({ point: e }, r) {
        return {
          point: e,
          delta: subtractPoint(e, lastDevicePoint(r)),
          offset: subtractPoint(e, r[0]),
          velocity: (function (e, r) {
            if (e.length < 2) return { x: 0, y: 0 };
            let n = e.length - 1,
              s = null,
              a = lastDevicePoint(e);
            for (
              ;
              n >= 0 &&
              ((s = e[n]), !(a.timestamp - s.timestamp > (0, I.w)(0.1)));

            )
              n--;
            if (!s) return { x: 0, y: 0 };
            let l = (0, I.X)(a.timestamp - s.timestamp);
            if (0 === l) return { x: 0, y: 0 };
            let u = { x: (a.x - s.x) / l, y: (a.y - s.y) / l };
            return u.x === 1 / 0 && (u.x = 0), u.y === 1 / 0 && (u.y = 0), u;
          })(r, 0),
        };
      }
      function lastDevicePoint(e) {
        return e[e.length - 1];
      }
      var L = n(51804),
        M = n(23967),
        N = n(80022);
      function calcLength(e) {
        return e.max - e.min;
      }
      function isNear(e, r = 0, n = 0.01) {
        return Math.abs(e - r) <= n;
      }
      function calcAxisDelta(e, r, n, s = 0.5) {
        (e.origin = s),
          (e.originPoint = (0, N.C)(r.min, r.max, e.origin)),
          (e.scale = calcLength(n) / calcLength(r)),
          (isNear(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
          (e.translate = (0, N.C)(n.min, n.max, e.origin) - e.originPoint),
          (isNear(e.translate) || isNaN(e.translate)) && (e.translate = 0);
      }
      function calcBoxDelta(e, r, n, s) {
        calcAxisDelta(e.x, r.x, n.x, s ? s.originX : void 0),
          calcAxisDelta(e.y, r.y, n.y, s ? s.originY : void 0);
      }
      function calcRelativeAxis(e, r, n) {
        (e.min = n.min + r.min), (e.max = e.min + calcLength(r));
      }
      function calcRelativeAxisPosition(e, r, n) {
        (e.min = r.min - n.min), (e.max = e.min + calcLength(r));
      }
      function calcRelativePosition(e, r, n) {
        calcRelativeAxisPosition(e.x, r.x, n.x),
          calcRelativeAxisPosition(e.y, r.y, n.y);
      }
      var U = n(24169);
      function calcRelativeAxisConstraints(e, r, n) {
        return {
          min: void 0 !== r ? e.min + r : void 0,
          max: void 0 !== n ? e.max + n - (e.max - e.min) : void 0,
        };
      }
      function calcViewportAxisConstraints(e, r) {
        let n = r.min - e.min,
          s = r.max - e.max;
        return (
          r.max - r.min < e.max - e.min && ([n, s] = [s, n]), { min: n, max: s }
        );
      }
      function resolveAxisElastic(e, r, n) {
        return {
          min: resolvePointElastic(e, r),
          max: resolvePointElastic(e, n),
        };
      }
      function resolvePointElastic(e, r) {
        return "number" == typeof e ? e : e[r] || 0;
      }
      var $ = n(61512);
      function eachAxis(e) {
        return [e("x"), e("y")];
      }
      var q = n(56460),
        z = n(76117),
        H = n(96190),
        W = n(10177);
      let getContextWindow = ({ current: e }) =>
          e ? e.ownerDocument.defaultView : null,
        K = new WeakMap();
      let VisualElementDragControls = class VisualElementDragControls {
        constructor(e) {
          (this.openGlobalLock = null),
            (this.isDragging = !1),
            (this.currentDirection = null),
            (this.originPoint = { x: 0, y: 0 }),
            (this.constraints = !1),
            (this.hasMutatedConstraints = !1),
            (this.elastic = (0, $.dO)()),
            (this.visualElement = e);
        }
        start(e, { snapToCursor: r = !1 } = {}) {
          let { presenceContext: n } = this.visualElement;
          if (n && !1 === n.isPresent) return;
          let { dragSnapToOrigin: s } = this.getProps();
          this.panSession = new PanSession(
            e,
            {
              onSessionStart: (e) => {
                let { dragSnapToOrigin: n } = this.getProps();
                n ? this.pauseAnimation() : this.stopAnimation(),
                  r && this.snapToCursor((0, P.Q)(e, "page").point);
              },
              onStart: (e, r) => {
                let {
                  drag: n,
                  dragPropagation: s,
                  onDragStart: a,
                } = this.getProps();
                if (
                  n &&
                  !s &&
                  (this.openGlobalLock && this.openGlobalLock(),
                  (this.openGlobalLock = (0, A.fJ)(n)),
                  !this.openGlobalLock)
                )
                  return;
                (this.isDragging = !0),
                  (this.currentDirection = null),
                  this.resolveConstraints(),
                  this.visualElement.projection &&
                    ((this.visualElement.projection.isAnimationBlocked = !0),
                    (this.visualElement.projection.target = void 0)),
                  eachAxis((e) => {
                    let r = this.getAxisMotionValue(e).get() || 0;
                    if (H.aQ.test(r)) {
                      let { projection: n } = this.visualElement;
                      if (n && n.layout) {
                        let s = n.layout.layoutBox[e];
                        if (s) {
                          let e = calcLength(s);
                          r = e * (parseFloat(r) / 100);
                        }
                      }
                    }
                    this.originPoint[e] = r;
                  }),
                  a && v.Wi.update(() => a(e, r), !1, !0);
                let { animationState: l } = this.visualElement;
                l && l.setActive("whileDrag", !0);
              },
              onMove: (e, r) => {
                let {
                  dragPropagation: n,
                  dragDirectionLock: s,
                  onDirectionLock: a,
                  onDrag: l,
                } = this.getProps();
                if (!n && !this.openGlobalLock) return;
                let { offset: u } = r;
                if (s && null === this.currentDirection) {
                  (this.currentDirection = (function (e, r = 10) {
                    let n = null;
                    return (
                      Math.abs(e.y) > r
                        ? (n = "y")
                        : Math.abs(e.x) > r && (n = "x"),
                      n
                    );
                  })(u)),
                    null !== this.currentDirection &&
                      a &&
                      a(this.currentDirection);
                  return;
                }
                this.updateAxis("x", r.point, u),
                  this.updateAxis("y", r.point, u),
                  this.visualElement.render(),
                  l && l(e, r);
              },
              onSessionEnd: (e, r) => this.stop(e, r),
              resumeAnimation: () =>
                eachAxis((e) => {
                  var r;
                  return (
                    "paused" === this.getAnimationState(e) &&
                    (null === (r = this.getAxisMotionValue(e).animation) ||
                    void 0 === r
                      ? void 0
                      : r.play())
                  );
                }),
            },
            {
              transformPagePoint: this.visualElement.getTransformPagePoint(),
              dragSnapToOrigin: s,
              contextWindow: getContextWindow(this.visualElement),
            }
          );
        }
        stop(e, r) {
          let n = this.isDragging;
          if ((this.cancel(), !n)) return;
          let { velocity: s } = r;
          this.startAnimation(s);
          let { onDragEnd: a } = this.getProps();
          a && v.Wi.update(() => a(e, r));
        }
        cancel() {
          this.isDragging = !1;
          let { projection: e, animationState: r } = this.visualElement;
          e && (e.isAnimationBlocked = !1),
            this.panSession && this.panSession.end(),
            (this.panSession = void 0);
          let { dragPropagation: n } = this.getProps();
          !n &&
            this.openGlobalLock &&
            (this.openGlobalLock(), (this.openGlobalLock = null)),
            r && r.setActive("whileDrag", !1);
        }
        updateAxis(e, r, n) {
          let { drag: s } = this.getProps();
          if (!n || !shouldDrag(e, s, this.currentDirection)) return;
          let a = this.getAxisMotionValue(e),
            l = this.originPoint[e] + n[e];
          this.constraints &&
            this.constraints[e] &&
            (l = (function (e, { min: r, max: n }, s) {
              return (
                void 0 !== r && e < r
                  ? (e = s ? (0, N.C)(r, e, s.min) : Math.max(e, r))
                  : void 0 !== n &&
                    e > n &&
                    (e = s ? (0, N.C)(n, e, s.max) : Math.min(e, n)),
                e
              );
            })(l, this.constraints[e], this.elastic[e])),
            a.set(l);
        }
        resolveConstraints() {
          var e;
          let { dragConstraints: r, dragElastic: n } = this.getProps(),
            s =
              this.visualElement.projection &&
              !this.visualElement.projection.layout
                ? this.visualElement.projection.measure(!1)
                : null === (e = this.visualElement.projection) || void 0 === e
                ? void 0
                : e.layout,
            a = this.constraints;
          r && (0, L.I)(r)
            ? this.constraints ||
              (this.constraints = this.resolveRefConstraints())
            : r && s
            ? (this.constraints = (function (
                e,
                { top: r, left: n, bottom: s, right: a }
              ) {
                return {
                  x: calcRelativeAxisConstraints(e.x, n, a),
                  y: calcRelativeAxisConstraints(e.y, r, s),
                };
              })(s.layoutBox, r))
            : (this.constraints = !1),
            (this.elastic = (function (e = 0.35) {
              return (
                !1 === e ? (e = 0) : !0 === e && (e = 0.35),
                {
                  x: resolveAxisElastic(e, "left", "right"),
                  y: resolveAxisElastic(e, "top", "bottom"),
                }
              );
            })(n)),
            a !== this.constraints &&
              s &&
              this.constraints &&
              !this.hasMutatedConstraints &&
              eachAxis((e) => {
                this.getAxisMotionValue(e) &&
                  (this.constraints[e] = (function (e, r) {
                    let n = {};
                    return (
                      void 0 !== r.min && (n.min = r.min - e.min),
                      void 0 !== r.max && (n.max = r.max - e.min),
                      n
                    );
                  })(s.layoutBox[e], this.constraints[e]));
              });
        }
        resolveRefConstraints() {
          var e;
          let { dragConstraints: r, onMeasureDragConstraints: n } =
            this.getProps();
          if (!r || !(0, L.I)(r)) return !1;
          let s = r.current;
          (0, B.k)(
            null !== s,
            "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop."
          );
          let { projection: a } = this.visualElement;
          if (!a || !a.layout) return !1;
          let l = (0, q.z)(
              s,
              a.root,
              this.visualElement.getTransformPagePoint()
            ),
            u = {
              x: calcViewportAxisConstraints((e = a.layout.layoutBox).x, l.x),
              y: calcViewportAxisConstraints(e.y, l.y),
            };
          if (n) {
            let e = n((0, z.z2)(u));
            (this.hasMutatedConstraints = !!e), e && (u = (0, z.i8)(e));
          }
          return u;
        }
        startAnimation(e) {
          let {
              drag: r,
              dragMomentum: n,
              dragElastic: s,
              dragTransition: a,
              dragSnapToOrigin: l,
              onDragTransitionEnd: u,
            } = this.getProps(),
            c = this.constraints || {},
            h = eachAxis((u) => {
              if (!shouldDrag(u, r, this.currentDirection)) return;
              let h = (c && c[u]) || {};
              l && (h = { min: 0, max: 0 });
              let d = {
                type: "inertia",
                velocity: n ? e[u] : 0,
                bounceStiffness: s ? 200 : 1e6,
                bounceDamping: s ? 40 : 1e7,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...a,
                ...h,
              };
              return this.startAxisValueAnimation(u, d);
            });
          return Promise.all(h).then(u);
        }
        startAxisValueAnimation(e, r) {
          let n = this.getAxisMotionValue(e);
          return n.start((0, W.v)(e, n, 0, r));
        }
        stopAnimation() {
          eachAxis((e) => this.getAxisMotionValue(e).stop());
        }
        pauseAnimation() {
          eachAxis((e) => {
            var r;
            return null === (r = this.getAxisMotionValue(e).animation) ||
              void 0 === r
              ? void 0
              : r.pause();
          });
        }
        getAnimationState(e) {
          var r;
          return null === (r = this.getAxisMotionValue(e).animation) ||
            void 0 === r
            ? void 0
            : r.state;
        }
        getAxisMotionValue(e) {
          let r = "_drag" + e.toUpperCase(),
            n = this.visualElement.getProps(),
            s = n[r];
          return (
            s ||
            this.visualElement.getValue(
              e,
              (n.initial ? n.initial[e] : void 0) || 0
            )
          );
        }
        snapToCursor(e) {
          eachAxis((r) => {
            let { drag: n } = this.getProps();
            if (!shouldDrag(r, n, this.currentDirection)) return;
            let { projection: s } = this.visualElement,
              a = this.getAxisMotionValue(r);
            if (s && s.layout) {
              let { min: n, max: l } = s.layout.layoutBox[r];
              a.set(e[r] - (0, N.C)(n, l, 0.5));
            }
          });
        }
        scalePositionWithinConstraints() {
          if (!this.visualElement.current) return;
          let { drag: e, dragConstraints: r } = this.getProps(),
            { projection: n } = this.visualElement;
          if (!(0, L.I)(r) || !n || !this.constraints) return;
          this.stopAnimation();
          let s = { x: 0, y: 0 };
          eachAxis((e) => {
            let r = this.getAxisMotionValue(e);
            if (r) {
              let n = r.get();
              s[e] = (function (e, r) {
                let n = 0.5,
                  s = calcLength(e),
                  a = calcLength(r);
                return (
                  a > s
                    ? (n = (0, M.Y)(r.min, r.max - s, e.min))
                    : s > a && (n = (0, M.Y)(e.min, e.max - a, r.min)),
                  (0, U.u)(0, 1, n)
                );
              })({ min: n, max: n }, this.constraints[e]);
            }
          });
          let { transformTemplate: a } = this.visualElement.getProps();
          (this.visualElement.current.style.transform = a ? a({}, "") : "none"),
            n.root && n.root.updateScroll(),
            n.updateLayout(),
            this.resolveConstraints(),
            eachAxis((r) => {
              if (!shouldDrag(r, e, null)) return;
              let n = this.getAxisMotionValue(r),
                { min: a, max: l } = this.constraints[r];
              n.set((0, N.C)(a, l, s[r]));
            });
        }
        addListeners() {
          if (!this.visualElement.current) return;
          K.set(this.visualElement, this);
          let e = this.visualElement.current,
            r = (0, _.a)(e, "pointerdown", (e) => {
              let { drag: r, dragListener: n = !0 } = this.getProps();
              r && n && this.start(e);
            }),
            measureDragConstraints = () => {
              let { dragConstraints: e } = this.getProps();
              (0, L.I)(e) && (this.constraints = this.resolveRefConstraints());
            },
            { projection: n } = this.visualElement,
            s = n.addEventListener("measure", measureDragConstraints);
          n && !n.layout && (n.root && n.root.updateScroll(), n.updateLayout()),
            measureDragConstraints();
          let a = (0, O.E)(window, "resize", () =>
              this.scalePositionWithinConstraints()
            ),
            l = n.addEventListener(
              "didUpdate",
              ({ delta: e, hasLayoutChanged: r }) => {
                this.isDragging &&
                  r &&
                  (eachAxis((r) => {
                    let n = this.getAxisMotionValue(r);
                    n &&
                      ((this.originPoint[r] += e[r].translate),
                      n.set(n.get() + e[r].translate));
                  }),
                  this.visualElement.render());
              }
            );
          return () => {
            a(), r(), s(), l && l();
          };
        }
        getProps() {
          let e = this.visualElement.getProps(),
            {
              drag: r = !1,
              dragDirectionLock: n = !1,
              dragPropagation: s = !1,
              dragConstraints: a = !1,
              dragElastic: l = 0.35,
              dragMomentum: u = !0,
            } = e;
          return {
            ...e,
            drag: r,
            dragDirectionLock: n,
            dragPropagation: s,
            dragConstraints: a,
            dragElastic: l,
            dragMomentum: u,
          };
        }
      };
      function shouldDrag(e, r, n) {
        return (!0 === r || r === e) && (null === n || n === e);
      }
      let DragGesture = class DragGesture extends T.L {
        constructor(e) {
          super(e),
            (this.removeGroupControls = j.Z),
            (this.removeListeners = j.Z),
            (this.controls = new VisualElementDragControls(e));
        }
        mount() {
          let { dragControls: e } = this.node.getProps();
          e && (this.removeGroupControls = e.subscribe(this.controls)),
            (this.removeListeners = this.controls.addListeners() || j.Z);
        }
        unmount() {
          this.removeGroupControls(), this.removeListeners();
        }
      };
      let asyncHandler = (e) => (r, n) => {
        e && v.Wi.update(() => e(r, n));
      };
      let PanGesture = class PanGesture extends T.L {
        constructor() {
          super(...arguments), (this.removePointerDownListener = j.Z);
        }
        onPointerDown(e) {
          this.session = new PanSession(e, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: getContextWindow(this.node),
          });
        }
        createPanHandlers() {
          let {
            onPanSessionStart: e,
            onPanStart: r,
            onPan: n,
            onPanEnd: s,
          } = this.node.getProps();
          return {
            onSessionStart: asyncHandler(e),
            onStart: asyncHandler(r),
            onMove: n,
            onEnd: (e, r) => {
              delete this.session, s && v.Wi.update(() => s(e, r));
            },
          };
        }
        mount() {
          this.removePointerDownListener = (0, _.a)(
            this.node.current,
            "pointerdown",
            (e) => this.onPointerDown(e)
          );
        }
        update() {
          this.session && this.session.updateHandlers(this.createPanHandlers());
        }
        unmount() {
          this.removePointerDownListener(), this.session && this.session.end();
        }
      };
      var G = n(240),
        J = n(25364),
        Z = n(41705);
      let X = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
      function pixelsToPercent(e, r) {
        return r.max === r.min ? 0 : (e / (r.max - r.min)) * 100;
      }
      let Y = {
        correct: (e, r) => {
          if (!r.target) return e;
          if ("string" == typeof e) {
            if (!H.px.test(e)) return e;
            e = parseFloat(e);
          }
          let n = pixelsToPercent(e, r.target.x),
            s = pixelsToPercent(e, r.target.y);
          return `${n}% ${s}%`;
        },
      };
      var Q = n(51550),
        ee = n(64561);
      let MeasureLayoutWithContext = class MeasureLayoutWithContext extends l.Component {
        componentDidMount() {
          let {
              visualElement: e,
              layoutGroup: r,
              switchLayoutGroup: n,
              layoutId: s,
            } = this.props,
            { projection: a } = e;
          (0, ee.B)(et),
            a &&
              (r.group && r.group.add(a),
              n && n.register && s && n.register(a),
              a.root.didUpdate(),
              a.addEventListener("animationComplete", () => {
                this.safeToRemove();
              }),
              a.setOptions({
                ...a.options,
                onExitComplete: () => this.safeToRemove(),
              })),
            (X.hasEverUpdated = !0);
        }
        getSnapshotBeforeUpdate(e) {
          let {
              layoutDependency: r,
              visualElement: n,
              drag: s,
              isPresent: a,
            } = this.props,
            l = n.projection;
          return (
            l &&
              ((l.isPresent = a),
              s || e.layoutDependency !== r || void 0 === r
                ? l.willUpdate()
                : this.safeToRemove(),
              e.isPresent === a ||
                (a
                  ? l.promote()
                  : l.relegate() ||
                    v.Wi.postRender(() => {
                      let e = l.getStack();
                      (e && e.members.length) || this.safeToRemove();
                    }))),
            null
          );
        }
        componentDidUpdate() {
          let { projection: e } = this.props.visualElement;
          e &&
            (e.root.didUpdate(),
            queueMicrotask(() => {
              !e.currentAnimation && e.isLead() && this.safeToRemove();
            }));
        }
        componentWillUnmount() {
          let {
              visualElement: e,
              layoutGroup: r,
              switchLayoutGroup: n,
            } = this.props,
            { projection: s } = e;
          s &&
            (s.scheduleCheckAfterUnmount(),
            r && r.group && r.group.remove(s),
            n && n.deregister && n.deregister(s));
        }
        safeToRemove() {
          let { safeToRemove: e } = this.props;
          e && e();
        }
        render() {
          return null;
        }
      };
      function MeasureLayout(e) {
        let [r, n] = (function () {
            let e = (0, l.useContext)(G.O);
            if (null === e) return [!0, null];
            let { isPresent: r, onExitComplete: n, register: s } = e,
              a = (0, l.useId)();
            return (
              (0, l.useEffect)(() => s(a), []),
              !r && n ? [!1, () => n && n(a)] : [!0]
            );
          })(),
          s = (0, l.useContext)(J.p);
        return l.createElement(MeasureLayoutWithContext, {
          ...e,
          layoutGroup: s,
          switchLayoutGroup: (0, l.useContext)(Z.g),
          isPresent: r,
          safeToRemove: n,
        });
      }
      let et = {
        borderRadius: {
          ...Y,
          applyTo: [
            "borderTopLeftRadius",
            "borderTopRightRadius",
            "borderBottomLeftRadius",
            "borderBottomRightRadius",
          ],
        },
        borderTopLeftRadius: Y,
        borderTopRightRadius: Y,
        borderBottomLeftRadius: Y,
        borderBottomRightRadius: Y,
        boxShadow: {
          correct: (e, { treeScale: r, projectionDelta: n }) => {
            let s = Q.P.parse(e);
            if (s.length > 5) return e;
            let a = Q.P.createTransformer(e),
              l = "number" != typeof s[0] ? 1 : 0,
              u = n.x.scale * r.x,
              c = n.y.scale * r.y;
            (s[0 + l] /= u), (s[1 + l] /= c);
            let h = (0, N.C)(u, c, 0.5);
            return (
              "number" == typeof s[2 + l] && (s[2 + l] /= h),
              "number" == typeof s[3 + l] && (s[3 + l] /= h),
              a(s)
            );
          },
        },
      };
      var er = n(21560),
        en = n(27255);
      let ei = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        es = ei.length,
        asNumber = (e) => ("string" == typeof e ? parseFloat(e) : e),
        isPx = (e) => "number" == typeof e || H.px.test(e);
      function getRadius(e, r) {
        return void 0 !== e[r] ? e[r] : e.borderRadius;
      }
      let eo = compress(0, 0.5, en.Bn),
        ea = compress(0.5, 0.95, j.Z);
      function compress(e, r, n) {
        return (s) => (s < e ? 0 : s > r ? 1 : n((0, M.Y)(e, r, s)));
      }
      function copyAxisInto(e, r) {
        (e.min = r.min), (e.max = r.max);
      }
      function copyBoxInto(e, r) {
        copyAxisInto(e.x, r.x), copyAxisInto(e.y, r.y);
      }
      var el = n(16e3);
      function removePointDelta(e, r, n, s, a) {
        return (
          (e -= r),
          (e = (0, el.q2)(e, 1 / n, s)),
          void 0 !== a && (e = (0, el.q2)(e, 1 / a, s)),
          e
        );
      }
      function removeAxisTransforms(e, r, [n, s, a], l, u) {
        !(function (e, r = 0, n = 1, s = 0.5, a, l = e, u = e) {
          if (H.aQ.test(r)) {
            r = parseFloat(r);
            let e = (0, N.C)(u.min, u.max, r / 100);
            r = e - u.min;
          }
          if ("number" != typeof r) return;
          let c = (0, N.C)(l.min, l.max, s);
          e === l && (c -= r),
            (e.min = removePointDelta(e.min, r, n, c, a)),
            (e.max = removePointDelta(e.max, r, n, c, a));
        })(e, r[n], r[s], r[a], r.scale, l, u);
      }
      let eu = ["x", "scaleX", "originX"],
        ec = ["y", "scaleY", "originY"];
      function removeBoxTransforms(e, r, n, s) {
        removeAxisTransforms(e.x, r, eu, n ? n.x : void 0, s ? s.x : void 0),
          removeAxisTransforms(e.y, r, ec, n ? n.y : void 0, s ? s.y : void 0);
      }
      var eh = n(31056);
      function isAxisDeltaZero(e) {
        return 0 === e.translate && 1 === e.scale;
      }
      function isDeltaZero(e) {
        return isAxisDeltaZero(e.x) && isAxisDeltaZero(e.y);
      }
      function boxEqualsRounded(e, r) {
        return (
          Math.round(e.x.min) === Math.round(r.x.min) &&
          Math.round(e.x.max) === Math.round(r.x.max) &&
          Math.round(e.y.min) === Math.round(r.y.min) &&
          Math.round(e.y.max) === Math.round(r.y.max)
        );
      }
      function aspectRatio(e) {
        return calcLength(e.x) / calcLength(e.y);
      }
      var ed = n(10010);
      let NodeStack = class NodeStack {
        constructor() {
          this.members = [];
        }
        add(e) {
          (0, ed.y4)(this.members, e), e.scheduleRender();
        }
        remove(e) {
          if (
            ((0, ed.cl)(this.members, e),
            e === this.prevLead && (this.prevLead = void 0),
            e === this.lead)
          ) {
            let e = this.members[this.members.length - 1];
            e && this.promote(e);
          }
        }
        relegate(e) {
          let r;
          let n = this.members.findIndex((r) => e === r);
          if (0 === n) return !1;
          for (let e = n; e >= 0; e--) {
            let n = this.members[e];
            if (!1 !== n.isPresent) {
              r = n;
              break;
            }
          }
          return !!r && (this.promote(r), !0);
        }
        promote(e, r) {
          let n = this.lead;
          if (e !== n && ((this.prevLead = n), (this.lead = e), e.show(), n)) {
            n.instance && n.scheduleRender(),
              e.scheduleRender(),
              (e.resumeFrom = n),
              r && (e.resumeFrom.preserveOpacity = !0),
              n.snapshot &&
                ((e.snapshot = n.snapshot),
                (e.snapshot.latestValues =
                  n.animationValues || n.latestValues)),
              e.root && e.root.isUpdating && (e.isLayoutDirty = !0);
            let { crossfade: s } = e.options;
            !1 === s && n.hide();
          }
        }
        exitAnimationComplete() {
          this.members.forEach((e) => {
            let { options: r, resumingFrom: n } = e;
            r.onExitComplete && r.onExitComplete(),
              n && n.options.onExitComplete && n.options.onExitComplete();
          });
        }
        scheduleRender() {
          this.members.forEach((e) => {
            e.instance && e.scheduleRender(!1);
          });
        }
        removeLeadSnapshot() {
          this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
        }
      };
      function buildProjectionTransform(e, r, n) {
        let s = "",
          a = e.x.translate / r.x,
          l = e.y.translate / r.y;
        if (
          ((a || l) && (s = `translate3d(${a}px, ${l}px, 0) `),
          (1 !== r.x || 1 !== r.y) && (s += `scale(${1 / r.x}, ${1 / r.y}) `),
          n)
        ) {
          let { rotate: e, rotateX: r, rotateY: a } = n;
          e && (s += `rotate(${e}deg) `),
            r && (s += `rotateX(${r}deg) `),
            a && (s += `rotateY(${a}deg) `);
        }
        let u = e.x.scale * r.x,
          c = e.y.scale * r.y;
        return (1 !== u || 1 !== c) && (s += `scale(${u}, ${c})`), s || "none";
      }
      var ef = n(99527);
      let compareByDepth = (e, r) => e.depth - r.depth;
      let FlatTree = class FlatTree {
        constructor() {
          (this.children = []), (this.isDirty = !1);
        }
        add(e) {
          (0, ed.y4)(this.children, e), (this.isDirty = !0);
        }
        remove(e) {
          (0, ed.cl)(this.children, e), (this.isDirty = !0);
        }
        forEach(e) {
          this.isDirty && this.children.sort(compareByDepth),
            (this.isDirty = !1),
            this.children.forEach(e);
        }
      };
      var ep = n(16399),
        em = n(75194),
        ey = n(61059);
      let eg = ["", "X", "Y", "Z"],
        ev = { visibility: "hidden" },
        eb = 0,
        ew = {
          type: "projectionFrame",
          totalNodes: 0,
          resolvedTargetDeltas: 0,
          recalculatedProjection: 0,
        };
      function createProjectionNode({
        attachResizeListener: e,
        defaultParent: r,
        measureScroll: n,
        checkIsScrollRoot: s,
        resetTransform: a,
      }) {
        return class {
          constructor(e = {}, n = null == r ? void 0 : r()) {
            (this.id = eb++),
              (this.animationId = 0),
              (this.children = new Set()),
              (this.options = {}),
              (this.isTreeAnimating = !1),
              (this.isAnimationBlocked = !1),
              (this.isLayoutDirty = !1),
              (this.isProjectionDirty = !1),
              (this.isSharedProjectionDirty = !1),
              (this.isTransformDirty = !1),
              (this.updateManuallyBlocked = !1),
              (this.updateBlockedByResize = !1),
              (this.isUpdating = !1),
              (this.isSVG = !1),
              (this.needsReset = !1),
              (this.shouldResetTransform = !1),
              (this.treeScale = { x: 1, y: 1 }),
              (this.eventHandlers = new Map()),
              (this.hasTreeAnimated = !1),
              (this.updateScheduled = !1),
              (this.projectionUpdateScheduled = !1),
              (this.checkUpdateFailed = () => {
                this.isUpdating &&
                  ((this.isUpdating = !1), this.clearAllSnapshots());
              }),
              (this.updateProjection = () => {
                (this.projectionUpdateScheduled = !1),
                  (ew.totalNodes =
                    ew.resolvedTargetDeltas =
                    ew.recalculatedProjection =
                      0),
                  this.nodes.forEach(propagateDirtyNodes),
                  this.nodes.forEach(resolveTargetDelta),
                  this.nodes.forEach(calcProjection),
                  this.nodes.forEach(cleanDirtyNodes),
                  window.MotionDebug && window.MotionDebug.record(ew);
              }),
              (this.hasProjected = !1),
              (this.isVisible = !0),
              (this.animationProgress = 0),
              (this.sharedNodes = new Map()),
              (this.latestValues = e),
              (this.root = n ? n.root || n : this),
              (this.path = n ? [...n.path, n] : []),
              (this.parent = n),
              (this.depth = n ? n.depth + 1 : 0);
            for (let e = 0; e < this.path.length; e++)
              this.path[e].shouldResetTransform = !0;
            this.root === this && (this.nodes = new FlatTree());
          }
          addEventListener(e, r) {
            return (
              this.eventHandlers.has(e) ||
                this.eventHandlers.set(e, new er.L()),
              this.eventHandlers.get(e).add(r)
            );
          }
          notifyListeners(e, ...r) {
            let n = this.eventHandlers.get(e);
            n && n.notify(...r);
          }
          hasListeners(e) {
            return this.eventHandlers.has(e);
          }
          mount(r, n = this.root.hasTreeAnimated) {
            if (this.instance) return;
            (this.isSVG = (0, em.v)(r)), (this.instance = r);
            let { layoutId: s, layout: a, visualElement: l } = this.options;
            if (
              (l && !l.current && l.mount(r),
              this.root.nodes.add(this),
              this.parent && this.parent.children.add(this),
              n && (a || s) && (this.isLayoutDirty = !0),
              e)
            ) {
              let n;
              let resizeUnblockUpdate = () =>
                (this.root.updateBlockedByResize = !1);
              e(r, () => {
                (this.root.updateBlockedByResize = !0),
                  n && n(),
                  (n = (function (e, r) {
                    let n = performance.now(),
                      checkElapsed = ({ timestamp: s }) => {
                        let a = s - n;
                        a >= r && ((0, v.Pn)(checkElapsed), e(a - r));
                      };
                    return (
                      v.Wi.read(checkElapsed, !0), () => (0, v.Pn)(checkElapsed)
                    );
                  })(resizeUnblockUpdate, 250)),
                  X.hasAnimatedSinceResize &&
                    ((X.hasAnimatedSinceResize = !1),
                    this.nodes.forEach(finishAnimation));
              });
            }
            s && this.root.registerSharedNode(s, this),
              !1 !== this.options.animate &&
                l &&
                (s || a) &&
                this.addEventListener(
                  "didUpdate",
                  ({
                    delta: e,
                    hasLayoutChanged: r,
                    hasRelativeTargetChanged: n,
                    layout: s,
                  }) => {
                    if (this.isTreeAnimationBlocked()) {
                      (this.target = void 0), (this.relativeTarget = void 0);
                      return;
                    }
                    let a =
                        this.options.transition ||
                        l.getDefaultTransition() ||
                        ex,
                      {
                        onLayoutAnimationStart: u,
                        onLayoutAnimationComplete: c,
                      } = l.getProps(),
                      h =
                        !this.targetLayout ||
                        !boxEqualsRounded(this.targetLayout, s) ||
                        n,
                      d = !r && n;
                    if (
                      this.options.layoutRoot ||
                      (this.resumeFrom && this.resumeFrom.instance) ||
                      d ||
                      (r && (h || !this.currentAnimation))
                    ) {
                      this.resumeFrom &&
                        ((this.resumingFrom = this.resumeFrom),
                        (this.resumingFrom.resumingFrom = void 0)),
                        this.setAnimationOrigin(e, d);
                      let r = {
                        ...(0, eh.e)(a, "layout"),
                        onPlay: u,
                        onComplete: c,
                      };
                      (l.shouldReduceMotion || this.options.layoutRoot) &&
                        ((r.delay = 0), (r.type = !1)),
                        this.startAnimation(r);
                    } else
                      r || finishAnimation(this),
                        this.isLead() &&
                          this.options.onExitComplete &&
                          this.options.onExitComplete();
                    this.targetLayout = s;
                  }
                );
          }
          unmount() {
            this.options.layoutId && this.willUpdate(),
              this.root.nodes.remove(this);
            let e = this.getStack();
            e && e.remove(this),
              this.parent && this.parent.children.delete(this),
              (this.instance = void 0),
              (0, v.Pn)(this.updateProjection);
          }
          blockUpdate() {
            this.updateManuallyBlocked = !0;
          }
          unblockUpdate() {
            this.updateManuallyBlocked = !1;
          }
          isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize;
          }
          isTreeAnimationBlocked() {
            return (
              this.isAnimationBlocked ||
              (this.parent && this.parent.isTreeAnimationBlocked()) ||
              !1
            );
          }
          startUpdate() {
            !this.isUpdateBlocked() &&
              ((this.isUpdating = !0),
              this.nodes && this.nodes.forEach(resetRotation),
              this.animationId++);
          }
          getTransformTemplate() {
            let { visualElement: e } = this.options;
            return e && e.getProps().transformTemplate;
          }
          willUpdate(e = !0) {
            if (
              ((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())
            ) {
              this.options.onExitComplete && this.options.onExitComplete();
              return;
            }
            if (
              (this.root.isUpdating || this.root.startUpdate(),
              this.isLayoutDirty)
            )
              return;
            this.isLayoutDirty = !0;
            for (let e = 0; e < this.path.length; e++) {
              let r = this.path[e];
              (r.shouldResetTransform = !0),
                r.updateScroll("snapshot"),
                r.options.layoutRoot && r.willUpdate(!1);
            }
            let { layoutId: r, layout: n } = this.options;
            if (void 0 === r && !n) return;
            let s = this.getTransformTemplate();
            (this.prevTransformTemplateValue = s
              ? s(this.latestValues, "")
              : void 0),
              this.updateSnapshot(),
              e && this.notifyListeners("willUpdate");
          }
          update() {
            this.updateScheduled = !1;
            let e = this.isUpdateBlocked();
            if (e) {
              this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(clearMeasurements);
              return;
            }
            this.isUpdating || this.nodes.forEach(clearIsLayoutDirty),
              (this.isUpdating = !1),
              this.nodes.forEach(resetTransformStyle),
              this.nodes.forEach(updateLayout),
              this.nodes.forEach(notifyLayoutUpdate),
              this.clearAllSnapshots();
            let r = performance.now();
            (v.frameData.delta = (0, U.u)(
              0,
              1e3 / 60,
              r - v.frameData.timestamp
            )),
              (v.frameData.timestamp = r),
              (v.frameData.isProcessing = !0),
              v.S6.update.process(v.frameData),
              v.S6.preRender.process(v.frameData),
              v.S6.render.process(v.frameData),
              (v.frameData.isProcessing = !1);
          }
          didUpdate() {
            this.updateScheduled ||
              ((this.updateScheduled = !0),
              queueMicrotask(() => this.update()));
          }
          clearAllSnapshots() {
            this.nodes.forEach(clearSnapshot),
              this.sharedNodes.forEach(removeLeadSnapshots);
          }
          scheduleUpdateProjection() {
            this.projectionUpdateScheduled ||
              ((this.projectionUpdateScheduled = !0),
              v.Wi.preRender(this.updateProjection, !1, !0));
          }
          scheduleCheckAfterUnmount() {
            v.Wi.postRender(() => {
              this.isLayoutDirty
                ? this.root.didUpdate()
                : this.root.checkUpdateFailed();
            });
          }
          updateSnapshot() {
            !this.snapshot && this.instance && (this.snapshot = this.measure());
          }
          updateLayout() {
            if (
              !this.instance ||
              (this.updateScroll(),
              !(this.options.alwaysMeasureLayout && this.isLead()) &&
                !this.isLayoutDirty)
            )
              return;
            if (this.resumeFrom && !this.resumeFrom.instance)
              for (let e = 0; e < this.path.length; e++) {
                let r = this.path[e];
                r.updateScroll();
              }
            let e = this.layout;
            (this.layout = this.measure(!1)),
              (this.layoutCorrected = (0, $.dO)()),
              (this.isLayoutDirty = !1),
              (this.projectionDelta = void 0),
              this.notifyListeners("measure", this.layout.layoutBox);
            let { visualElement: r } = this.options;
            r &&
              r.notify(
                "LayoutMeasure",
                this.layout.layoutBox,
                e ? e.layoutBox : void 0
              );
          }
          updateScroll(e = "measure") {
            let r = !!(this.options.layoutScroll && this.instance);
            this.scroll &&
              this.scroll.animationId === this.root.animationId &&
              this.scroll.phase === e &&
              (r = !1),
              r &&
                (this.scroll = {
                  animationId: this.root.animationId,
                  phase: e,
                  isRoot: s(this.instance),
                  offset: n(this.instance),
                });
          }
          resetTransform() {
            if (!a) return;
            let e = this.isLayoutDirty || this.shouldResetTransform,
              r = this.projectionDelta && !isDeltaZero(this.projectionDelta),
              n = this.getTransformTemplate(),
              s = n ? n(this.latestValues, "") : void 0,
              l = s !== this.prevTransformTemplateValue;
            e &&
              (r || (0, ef.ud)(this.latestValues) || l) &&
              (a(this.instance, s),
              (this.shouldResetTransform = !1),
              this.scheduleRender());
          }
          measure(e = !0) {
            var r;
            let n = this.measurePageBox(),
              s = this.removeElementScroll(n);
            return (
              e && (s = this.removeTransform(s)),
              roundAxis((r = s).x),
              roundAxis(r.y),
              {
                animationId: this.root.animationId,
                measuredBox: n,
                layoutBox: s,
                latestValues: {},
                source: this.id,
              }
            );
          }
          measurePageBox() {
            let { visualElement: e } = this.options;
            if (!e) return (0, $.dO)();
            let r = e.measureViewportBox(),
              { scroll: n } = this.root;
            return (
              n && ((0, el.am)(r.x, n.offset.x), (0, el.am)(r.y, n.offset.y)), r
            );
          }
          removeElementScroll(e) {
            let r = (0, $.dO)();
            copyBoxInto(r, e);
            for (let n = 0; n < this.path.length; n++) {
              let s = this.path[n],
                { scroll: a, options: l } = s;
              if (s !== this.root && a && l.layoutScroll) {
                if (a.isRoot) {
                  copyBoxInto(r, e);
                  let { scroll: n } = this.root;
                  n &&
                    ((0, el.am)(r.x, -n.offset.x),
                    (0, el.am)(r.y, -n.offset.y));
                }
                (0, el.am)(r.x, a.offset.x), (0, el.am)(r.y, a.offset.y);
              }
            }
            return r;
          }
          applyTransform(e, r = !1) {
            let n = (0, $.dO)();
            copyBoxInto(n, e);
            for (let e = 0; e < this.path.length; e++) {
              let s = this.path[e];
              !r &&
                s.options.layoutScroll &&
                s.scroll &&
                s !== s.root &&
                (0, el.D2)(n, { x: -s.scroll.offset.x, y: -s.scroll.offset.y }),
                (0, ef.ud)(s.latestValues) && (0, el.D2)(n, s.latestValues);
            }
            return (
              (0, ef.ud)(this.latestValues) && (0, el.D2)(n, this.latestValues),
              n
            );
          }
          removeTransform(e) {
            let r = (0, $.dO)();
            copyBoxInto(r, e);
            for (let e = 0; e < this.path.length; e++) {
              let n = this.path[e];
              if (!n.instance || !(0, ef.ud)(n.latestValues)) continue;
              (0, ef.Lj)(n.latestValues) && n.updateSnapshot();
              let s = (0, $.dO)(),
                a = n.measurePageBox();
              copyBoxInto(s, a),
                removeBoxTransforms(
                  r,
                  n.latestValues,
                  n.snapshot ? n.snapshot.layoutBox : void 0,
                  s
                );
            }
            return (
              (0, ef.ud)(this.latestValues) &&
                removeBoxTransforms(r, this.latestValues),
              r
            );
          }
          setTargetDelta(e) {
            (this.targetDelta = e),
              this.root.scheduleUpdateProjection(),
              (this.isProjectionDirty = !0);
          }
          setOptions(e) {
            this.options = {
              ...this.options,
              ...e,
              crossfade: void 0 === e.crossfade || e.crossfade,
            };
          }
          clearMeasurements() {
            (this.scroll = void 0),
              (this.layout = void 0),
              (this.snapshot = void 0),
              (this.prevTransformTemplateValue = void 0),
              (this.targetDelta = void 0),
              (this.target = void 0),
              (this.isLayoutDirty = !1);
          }
          forceRelativeParentToResolveTarget() {
            this.relativeParent &&
              this.relativeParent.resolvedRelativeTargetAt !==
                v.frameData.timestamp &&
              this.relativeParent.resolveTargetDelta(!0);
          }
          resolveTargetDelta(e = !1) {
            var r, n, s, a;
            let l = this.getLead();
            this.isProjectionDirty ||
              (this.isProjectionDirty = l.isProjectionDirty),
              this.isTransformDirty ||
                (this.isTransformDirty = l.isTransformDirty),
              this.isSharedProjectionDirty ||
                (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
            let u = !!this.resumingFrom || this !== l,
              c = !(
                e ||
                (u && this.isSharedProjectionDirty) ||
                this.isProjectionDirty ||
                (null === (r = this.parent) || void 0 === r
                  ? void 0
                  : r.isProjectionDirty) ||
                this.attemptToResolveRelativeTarget
              );
            if (c) return;
            let { layout: h, layoutId: d } = this.options;
            if (this.layout && (h || d)) {
              if (
                ((this.resolvedRelativeTargetAt = v.frameData.timestamp),
                !this.targetDelta && !this.relativeTarget)
              ) {
                let e = this.getClosestProjectingParent();
                e && e.layout && 1 !== this.animationProgress
                  ? ((this.relativeParent = e),
                    this.forceRelativeParentToResolveTarget(),
                    (this.relativeTarget = (0, $.dO)()),
                    (this.relativeTargetOrigin = (0, $.dO)()),
                    calcRelativePosition(
                      this.relativeTargetOrigin,
                      this.layout.layoutBox,
                      e.layout.layoutBox
                    ),
                    copyBoxInto(this.relativeTarget, this.relativeTargetOrigin))
                  : (this.relativeParent = this.relativeTarget = void 0);
              }
              if (this.relativeTarget || this.targetDelta) {
                if (
                  ((this.target ||
                    ((this.target = (0, $.dO)()),
                    (this.targetWithTransforms = (0, $.dO)())),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.relativeParent &&
                    this.relativeParent.target)
                    ? (this.forceRelativeParentToResolveTarget(),
                      (n = this.target),
                      (s = this.relativeTarget),
                      (a = this.relativeParent.target),
                      calcRelativeAxis(n.x, s.x, a.x),
                      calcRelativeAxis(n.y, s.y, a.y))
                    : this.targetDelta
                    ? (this.resumingFrom
                        ? (this.target = this.applyTransform(
                            this.layout.layoutBox
                          ))
                        : copyBoxInto(this.target, this.layout.layoutBox),
                      (0, el.o2)(this.target, this.targetDelta))
                    : copyBoxInto(this.target, this.layout.layoutBox),
                  this.attemptToResolveRelativeTarget)
                ) {
                  this.attemptToResolveRelativeTarget = !1;
                  let e = this.getClosestProjectingParent();
                  e &&
                  !!e.resumingFrom == !!this.resumingFrom &&
                  !e.options.layoutScroll &&
                  e.target &&
                  1 !== this.animationProgress
                    ? ((this.relativeParent = e),
                      this.forceRelativeParentToResolveTarget(),
                      (this.relativeTarget = (0, $.dO)()),
                      (this.relativeTargetOrigin = (0, $.dO)()),
                      calcRelativePosition(
                        this.relativeTargetOrigin,
                        this.target,
                        e.target
                      ),
                      copyBoxInto(
                        this.relativeTarget,
                        this.relativeTargetOrigin
                      ))
                    : (this.relativeParent = this.relativeTarget = void 0);
                }
                ew.resolvedTargetDeltas++;
              }
            }
          }
          getClosestProjectingParent() {
            return !this.parent ||
              (0, ef.Lj)(this.parent.latestValues) ||
              (0, ef.D_)(this.parent.latestValues)
              ? void 0
              : this.parent.isProjecting()
              ? this.parent
              : this.parent.getClosestProjectingParent();
          }
          isProjecting() {
            return !!(
              (this.relativeTarget ||
                this.targetDelta ||
                this.options.layoutRoot) &&
              this.layout
            );
          }
          calcProjection() {
            var e;
            let r = this.getLead(),
              n = !!this.resumingFrom || this !== r,
              s = !0;
            if (
              ((this.isProjectionDirty ||
                (null === (e = this.parent) || void 0 === e
                  ? void 0
                  : e.isProjectionDirty)) &&
                (s = !1),
              n &&
                (this.isSharedProjectionDirty || this.isTransformDirty) &&
                (s = !1),
              this.resolvedRelativeTargetAt === v.frameData.timestamp &&
                (s = !1),
              s)
            )
              return;
            let { layout: a, layoutId: l } = this.options;
            if (
              ((this.isTreeAnimating = !!(
                (this.parent && this.parent.isTreeAnimating) ||
                this.currentAnimation ||
                this.pendingAnimation
              )),
              this.isTreeAnimating ||
                (this.targetDelta = this.relativeTarget = void 0),
              !this.layout || !(a || l))
            )
              return;
            copyBoxInto(this.layoutCorrected, this.layout.layoutBox);
            let u = this.treeScale.x,
              c = this.treeScale.y;
            (0, el.YY)(this.layoutCorrected, this.treeScale, this.path, n),
              r.layout &&
                !r.target &&
                (1 !== this.treeScale.x || 1 !== this.treeScale.y) &&
                (r.target = r.layout.layoutBox);
            let { target: h } = r;
            if (!h) {
              this.projectionTransform &&
                ((this.projectionDelta = (0, $.wc)()),
                (this.projectionTransform = "none"),
                this.scheduleRender());
              return;
            }
            this.projectionDelta ||
              ((this.projectionDelta = (0, $.wc)()),
              (this.projectionDeltaWithTransform = (0, $.wc)()));
            let d = this.projectionTransform;
            calcBoxDelta(
              this.projectionDelta,
              this.layoutCorrected,
              h,
              this.latestValues
            ),
              (this.projectionTransform = buildProjectionTransform(
                this.projectionDelta,
                this.treeScale
              )),
              (this.projectionTransform !== d ||
                this.treeScale.x !== u ||
                this.treeScale.y !== c) &&
                ((this.hasProjected = !0),
                this.scheduleRender(),
                this.notifyListeners("projectionUpdate", h)),
              ew.recalculatedProjection++;
          }
          hide() {
            this.isVisible = !1;
          }
          show() {
            this.isVisible = !0;
          }
          scheduleRender(e = !0) {
            if (
              (this.options.scheduleRender && this.options.scheduleRender(), e)
            ) {
              let e = this.getStack();
              e && e.scheduleRender();
            }
            this.resumingFrom &&
              !this.resumingFrom.instance &&
              (this.resumingFrom = void 0);
          }
          setAnimationOrigin(e, r = !1) {
            let n;
            let s = this.snapshot,
              a = s ? s.latestValues : {},
              l = { ...this.latestValues },
              u = (0, $.wc)();
            (this.relativeParent && this.relativeParent.options.layoutRoot) ||
              (this.relativeTarget = this.relativeTargetOrigin = void 0),
              (this.attemptToResolveRelativeTarget = !r);
            let c = (0, $.dO)(),
              h = s ? s.source : void 0,
              d = this.layout ? this.layout.source : void 0,
              f = h !== d,
              p = this.getStack(),
              m = !p || p.members.length <= 1,
              y = !!(
                f &&
                !m &&
                !0 === this.options.crossfade &&
                !this.path.some(hasOpacityCrossfade)
              );
            (this.animationProgress = 0),
              (this.mixTargetDelta = (r) => {
                let s = r / 1e3;
                if (
                  (mixAxisDelta(u.x, e.x, s),
                  mixAxisDelta(u.y, e.y, s),
                  this.setTargetDelta(u),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.layout &&
                    this.relativeParent &&
                    this.relativeParent.layout)
                ) {
                  var h, d, p, g;
                  calcRelativePosition(
                    c,
                    this.layout.layoutBox,
                    this.relativeParent.layout.layoutBox
                  ),
                    (p = this.relativeTarget),
                    (g = this.relativeTargetOrigin),
                    mixAxis(p.x, g.x, c.x, s),
                    mixAxis(p.y, g.y, c.y, s),
                    n &&
                      ((h = this.relativeTarget),
                      (d = n),
                      h.x.min === d.x.min &&
                        h.x.max === d.x.max &&
                        h.y.min === d.y.min &&
                        h.y.max === d.y.max) &&
                      (this.isProjectionDirty = !1),
                    n || (n = (0, $.dO)()),
                    copyBoxInto(n, this.relativeTarget);
                }
                f &&
                  ((this.animationValues = l),
                  (function (e, r, n, s, a, l) {
                    a
                      ? ((e.opacity = (0, N.C)(
                          0,
                          void 0 !== n.opacity ? n.opacity : 1,
                          eo(s)
                        )),
                        (e.opacityExit = (0, N.C)(
                          void 0 !== r.opacity ? r.opacity : 1,
                          0,
                          ea(s)
                        )))
                      : l &&
                        (e.opacity = (0, N.C)(
                          void 0 !== r.opacity ? r.opacity : 1,
                          void 0 !== n.opacity ? n.opacity : 1,
                          s
                        ));
                    for (let a = 0; a < es; a++) {
                      let l = `border${ei[a]}Radius`,
                        u = getRadius(r, l),
                        c = getRadius(n, l);
                      if (void 0 === u && void 0 === c) continue;
                      u || (u = 0), c || (c = 0);
                      let h = 0 === u || 0 === c || isPx(u) === isPx(c);
                      h
                        ? ((e[l] = Math.max(
                            (0, N.C)(asNumber(u), asNumber(c), s),
                            0
                          )),
                          (H.aQ.test(c) || H.aQ.test(u)) && (e[l] += "%"))
                        : (e[l] = c);
                    }
                    (r.rotate || n.rotate) &&
                      (e.rotate = (0, N.C)(r.rotate || 0, n.rotate || 0, s));
                  })(l, a, this.latestValues, s, y, m)),
                  this.root.scheduleUpdateProjection(),
                  this.scheduleRender(),
                  (this.animationProgress = s);
              }),
              this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
          }
          startAnimation(e) {
            this.notifyListeners("animationStart"),
              this.currentAnimation && this.currentAnimation.stop(),
              this.resumingFrom &&
                this.resumingFrom.currentAnimation &&
                this.resumingFrom.currentAnimation.stop(),
              this.pendingAnimation &&
                ((0, v.Pn)(this.pendingAnimation),
                (this.pendingAnimation = void 0)),
              (this.pendingAnimation = v.Wi.update(() => {
                (X.hasAnimatedSinceResize = !0),
                  (this.currentAnimation = (0, ey.D)(0, 1e3, {
                    ...e,
                    onUpdate: (r) => {
                      this.mixTargetDelta(r), e.onUpdate && e.onUpdate(r);
                    },
                    onComplete: () => {
                      e.onComplete && e.onComplete(), this.completeAnimation();
                    },
                  })),
                  this.resumingFrom &&
                    (this.resumingFrom.currentAnimation =
                      this.currentAnimation),
                  (this.pendingAnimation = void 0);
              }));
          }
          completeAnimation() {
            this.resumingFrom &&
              ((this.resumingFrom.currentAnimation = void 0),
              (this.resumingFrom.preserveOpacity = void 0));
            let e = this.getStack();
            e && e.exitAnimationComplete(),
              (this.resumingFrom =
                this.currentAnimation =
                this.animationValues =
                  void 0),
              this.notifyListeners("animationComplete");
          }
          finishAnimation() {
            this.currentAnimation &&
              (this.mixTargetDelta && this.mixTargetDelta(1e3),
              this.currentAnimation.stop()),
              this.completeAnimation();
          }
          applyTransformsToTarget() {
            let e = this.getLead(),
              {
                targetWithTransforms: r,
                target: n,
                layout: s,
                latestValues: a,
              } = e;
            if (r && n && s) {
              if (
                this !== e &&
                this.layout &&
                s &&
                shouldAnimatePositionOnly(
                  this.options.animationType,
                  this.layout.layoutBox,
                  s.layoutBox
                )
              ) {
                n = this.target || (0, $.dO)();
                let r = calcLength(this.layout.layoutBox.x);
                (n.x.min = e.target.x.min), (n.x.max = n.x.min + r);
                let s = calcLength(this.layout.layoutBox.y);
                (n.y.min = e.target.y.min), (n.y.max = n.y.min + s);
              }
              copyBoxInto(r, n),
                (0, el.D2)(r, a),
                calcBoxDelta(
                  this.projectionDeltaWithTransform,
                  this.layoutCorrected,
                  r,
                  a
                );
            }
          }
          registerSharedNode(e, r) {
            this.sharedNodes.has(e) || this.sharedNodes.set(e, new NodeStack());
            let n = this.sharedNodes.get(e);
            n.add(r);
            let s = r.options.initialPromotionConfig;
            r.promote({
              transition: s ? s.transition : void 0,
              preserveFollowOpacity:
                s && s.shouldPreserveFollowOpacity
                  ? s.shouldPreserveFollowOpacity(r)
                  : void 0,
            });
          }
          isLead() {
            let e = this.getStack();
            return !e || e.lead === this;
          }
          getLead() {
            var e;
            let { layoutId: r } = this.options;
            return (
              (r &&
                (null === (e = this.getStack()) || void 0 === e
                  ? void 0
                  : e.lead)) ||
              this
            );
          }
          getPrevLead() {
            var e;
            let { layoutId: r } = this.options;
            return r
              ? null === (e = this.getStack()) || void 0 === e
                ? void 0
                : e.prevLead
              : void 0;
          }
          getStack() {
            let { layoutId: e } = this.options;
            if (e) return this.root.sharedNodes.get(e);
          }
          promote({
            needsReset: e,
            transition: r,
            preserveFollowOpacity: n,
          } = {}) {
            let s = this.getStack();
            s && s.promote(this, n),
              e && ((this.projectionDelta = void 0), (this.needsReset = !0)),
              r && this.setOptions({ transition: r });
          }
          relegate() {
            let e = this.getStack();
            return !!e && e.relegate(this);
          }
          resetRotation() {
            let { visualElement: e } = this.options;
            if (!e) return;
            let r = !1,
              { latestValues: n } = e;
            if (
              ((n.rotate || n.rotateX || n.rotateY || n.rotateZ) && (r = !0),
              !r)
            )
              return;
            let s = {};
            for (let r = 0; r < eg.length; r++) {
              let a = "rotate" + eg[r];
              n[a] && ((s[a] = n[a]), e.setStaticValue(a, 0));
            }
            for (let r in (e.render(), s)) e.setStaticValue(r, s[r]);
            e.scheduleRender();
          }
          getProjectionStyles(e) {
            var r, n;
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) return ev;
            let s = { visibility: "" },
              a = this.getTransformTemplate();
            if (this.needsReset)
              return (
                (this.needsReset = !1),
                (s.opacity = ""),
                (s.pointerEvents =
                  (0, ep.b)(null == e ? void 0 : e.pointerEvents) || ""),
                (s.transform = a ? a(this.latestValues, "") : "none"),
                s
              );
            let l = this.getLead();
            if (!this.projectionDelta || !this.layout || !l.target) {
              let r = {};
              return (
                this.options.layoutId &&
                  ((r.opacity =
                    void 0 !== this.latestValues.opacity
                      ? this.latestValues.opacity
                      : 1),
                  (r.pointerEvents =
                    (0, ep.b)(null == e ? void 0 : e.pointerEvents) || "")),
                this.hasProjected &&
                  !(0, ef.ud)(this.latestValues) &&
                  ((r.transform = a ? a({}, "") : "none"),
                  (this.hasProjected = !1)),
                r
              );
            }
            let u = l.animationValues || l.latestValues;
            this.applyTransformsToTarget(),
              (s.transform = buildProjectionTransform(
                this.projectionDeltaWithTransform,
                this.treeScale,
                u
              )),
              a && (s.transform = a(u, s.transform));
            let { x: c, y: h } = this.projectionDelta;
            for (let e in ((s.transformOrigin = `${100 * c.origin}% ${
              100 * h.origin
            }% 0`),
            l.animationValues
              ? (s.opacity =
                  l === this
                    ? null !==
                        (n =
                          null !== (r = u.opacity) && void 0 !== r
                            ? r
                            : this.latestValues.opacity) && void 0 !== n
                      ? n
                      : 1
                    : this.preserveOpacity
                    ? this.latestValues.opacity
                    : u.opacityExit)
              : (s.opacity =
                  l === this
                    ? void 0 !== u.opacity
                      ? u.opacity
                      : ""
                    : void 0 !== u.opacityExit
                    ? u.opacityExit
                    : 0),
            ee.P)) {
              if (void 0 === u[e]) continue;
              let { correct: r, applyTo: n } = ee.P[e],
                a = "none" === s.transform ? u[e] : r(u[e], l);
              if (n) {
                let e = n.length;
                for (let r = 0; r < e; r++) s[n[r]] = a;
              } else s[e] = a;
            }
            return (
              this.options.layoutId &&
                (s.pointerEvents =
                  l === this
                    ? (0, ep.b)(null == e ? void 0 : e.pointerEvents) || ""
                    : "none"),
              s
            );
          }
          clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0;
          }
          resetTree() {
            this.root.nodes.forEach((e) => {
              var r;
              return null === (r = e.currentAnimation) || void 0 === r
                ? void 0
                : r.stop();
            }),
              this.root.nodes.forEach(clearMeasurements),
              this.root.sharedNodes.clear();
          }
        };
      }
      function updateLayout(e) {
        e.updateLayout();
      }
      function notifyLayoutUpdate(e) {
        var r;
        let n =
          (null === (r = e.resumeFrom) || void 0 === r ? void 0 : r.snapshot) ||
          e.snapshot;
        if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
          let { layoutBox: r, measuredBox: s } = e.layout,
            { animationType: a } = e.options,
            l = n.source !== e.layout.source;
          "size" === a
            ? eachAxis((e) => {
                let s = l ? n.measuredBox[e] : n.layoutBox[e],
                  a = calcLength(s);
                (s.min = r[e].min), (s.max = s.min + a);
              })
            : shouldAnimatePositionOnly(a, n.layoutBox, r) &&
              eachAxis((s) => {
                let a = l ? n.measuredBox[s] : n.layoutBox[s],
                  u = calcLength(r[s]);
                (a.max = a.min + u),
                  e.relativeTarget &&
                    !e.currentAnimation &&
                    ((e.isProjectionDirty = !0),
                    (e.relativeTarget[s].max = e.relativeTarget[s].min + u));
              });
          let u = (0, $.wc)();
          calcBoxDelta(u, r, n.layoutBox);
          let c = (0, $.wc)();
          l
            ? calcBoxDelta(c, e.applyTransform(s, !0), n.measuredBox)
            : calcBoxDelta(c, r, n.layoutBox);
          let h = !isDeltaZero(u),
            d = !1;
          if (!e.resumeFrom) {
            let s = e.getClosestProjectingParent();
            if (s && !s.resumeFrom) {
              let { snapshot: a, layout: l } = s;
              if (a && l) {
                let u = (0, $.dO)();
                calcRelativePosition(u, n.layoutBox, a.layoutBox);
                let c = (0, $.dO)();
                calcRelativePosition(c, r, l.layoutBox),
                  boxEqualsRounded(u, c) || (d = !0),
                  s.options.layoutRoot &&
                    ((e.relativeTarget = c),
                    (e.relativeTargetOrigin = u),
                    (e.relativeParent = s));
              }
            }
          }
          e.notifyListeners("didUpdate", {
            layout: r,
            snapshot: n,
            delta: c,
            layoutDelta: u,
            hasLayoutChanged: h,
            hasRelativeTargetChanged: d,
          });
        } else if (e.isLead()) {
          let { onExitComplete: r } = e.options;
          r && r();
        }
        e.options.transition = void 0;
      }
      function propagateDirtyNodes(e) {
        ew.totalNodes++,
          e.parent &&
            (e.isProjecting() ||
              (e.isProjectionDirty = e.parent.isProjectionDirty),
            e.isSharedProjectionDirty ||
              (e.isSharedProjectionDirty = !!(
                e.isProjectionDirty ||
                e.parent.isProjectionDirty ||
                e.parent.isSharedProjectionDirty
              )),
            e.isTransformDirty ||
              (e.isTransformDirty = e.parent.isTransformDirty));
      }
      function cleanDirtyNodes(e) {
        e.isProjectionDirty =
          e.isSharedProjectionDirty =
          e.isTransformDirty =
            !1;
      }
      function clearSnapshot(e) {
        e.clearSnapshot();
      }
      function clearMeasurements(e) {
        e.clearMeasurements();
      }
      function clearIsLayoutDirty(e) {
        e.isLayoutDirty = !1;
      }
      function resetTransformStyle(e) {
        let { visualElement: r } = e.options;
        r &&
          r.getProps().onBeforeLayoutMeasure &&
          r.notify("BeforeLayoutMeasure"),
          e.resetTransform();
      }
      function finishAnimation(e) {
        e.finishAnimation(),
          (e.targetDelta = e.relativeTarget = e.target = void 0),
          (e.isProjectionDirty = !0);
      }
      function resolveTargetDelta(e) {
        e.resolveTargetDelta();
      }
      function calcProjection(e) {
        e.calcProjection();
      }
      function resetRotation(e) {
        e.resetRotation();
      }
      function removeLeadSnapshots(e) {
        e.removeLeadSnapshot();
      }
      function mixAxisDelta(e, r, n) {
        (e.translate = (0, N.C)(r.translate, 0, n)),
          (e.scale = (0, N.C)(r.scale, 1, n)),
          (e.origin = r.origin),
          (e.originPoint = r.originPoint);
      }
      function mixAxis(e, r, n, s) {
        (e.min = (0, N.C)(r.min, n.min, s)),
          (e.max = (0, N.C)(r.max, n.max, s));
      }
      function hasOpacityCrossfade(e) {
        return e.animationValues && void 0 !== e.animationValues.opacityExit;
      }
      let ex = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
        userAgentContains = (e) =>
          "undefined" != typeof navigator &&
          navigator.userAgent.toLowerCase().includes(e),
        e_ =
          userAgentContains("applewebkit/") && !userAgentContains("chrome/")
            ? Math.round
            : j.Z;
      function roundAxis(e) {
        (e.min = e_(e.min)), (e.max = e_(e.max));
      }
      function shouldAnimatePositionOnly(e, r, n) {
        return (
          "position" === e ||
          ("preserve-aspect" === e &&
            !isNear(aspectRatio(r), aspectRatio(n), 0.2))
        );
      }
      let eE = createProjectionNode({
          attachResizeListener: (e, r) => (0, O.E)(e, "resize", r),
          measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop,
          }),
          checkIsScrollRoot: () => !0,
        }),
        eS = { current: void 0 },
        eA = createProjectionNode({
          measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
          defaultParent: () => {
            if (!eS.current) {
              let e = new eE({});
              e.mount(window),
                e.setOptions({ layoutScroll: !0 }),
                (eS.current = e);
            }
            return eS.current;
          },
          resetTransform: (e, r) => {
            e.style.transform = void 0 !== r ? r : "none";
          },
          checkIsScrollRoot: (e) =>
            "fixed" === window.getComputedStyle(e).position,
        });
      var eT = n(34547),
        eO = n(25794);
      let create_visual_element_createDomVisualElement = (e, r) =>
          isSVGComponent(e)
            ? new eO.e(r, { enableHardwareAcceleration: !1 })
            : new eT.W(r, { enableHardwareAcceleration: !0 }),
        eP = {
          ...D.s,
          inView: { Feature: InViewFeature },
          tap: { Feature: PressGesture },
          focus: { Feature: FocusGesture },
          hover: { Feature: HoverGesture },
          pan: { Feature: PanGesture },
          drag: {
            Feature: DragGesture,
            ProjectionNode: eA,
            MeasureLayout: MeasureLayout,
          },
          layout: { ProjectionNode: eA, MeasureLayout: MeasureLayout },
        },
        ej = (function (e) {
          function custom(r, n = {}) {
            return (0, s.F)(e(r, n));
          }
          if ("undefined" == typeof Proxy) return custom;
          let r = new Map();
          return new Proxy(custom, {
            get: (e, n) => (r.has(n) || r.set(n, custom(n)), r.get(n)),
          });
        })((e, r) =>
          (function (e, { forwardMotionProps: r = !1 }, n, s) {
            let a = isSVGComponent(e) ? b : x;
            return {
              ...a,
              preloadedFeatures: n,
              useRender: (function (e = !1) {
                return (r, n, s, { latestValues: a }, u) => {
                  let h = isSVGComponent(r) ? useSVGProps : useHTMLProps,
                    f = h(n, a, u, r),
                    p = (0, d.L)(n, "string" == typeof r, e),
                    m = { ...p, ...f, ref: s },
                    { children: y } = n,
                    g = (0, l.useMemo)(() => ((0, c.i)(y) ? y.get() : y), [y]);
                  return (0, l.createElement)(r, { ...m, children: g });
                };
              })(r),
              createVisualElement: s,
              Component: e,
            };
          })(e, r, eP, create_visual_element_createDomVisualElement)
        );
    },
    93193: function (e, r, n) {
      "use strict";
      n.d(r, {
        D: function () {
          return camelToDash;
        },
      });
      let camelToDash = (e) =>
        e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
    },
    91492: function (e, r, n) {
      "use strict";
      n.d(r, {
        L: function () {
          return filterProps;
        },
      });
      let s = new Set([
        "animate",
        "exit",
        "variants",
        "initial",
        "style",
        "values",
        "variants",
        "transition",
        "transformTemplate",
        "transformValues",
        "custom",
        "inherit",
        "onBeforeLayoutMeasure",
        "onAnimationStart",
        "onAnimationComplete",
        "onUpdate",
        "onDragStart",
        "onDrag",
        "onDragEnd",
        "onMeasureDragConstraints",
        "onDirectionLock",
        "onDragTransitionEnd",
        "_dragX",
        "_dragY",
        "onHoverStart",
        "onHoverEnd",
        "onViewportEnter",
        "onViewportLeave",
        "globalTapTarget",
        "ignoreStrict",
        "viewport",
      ]);
      function isValidMotionProp(e) {
        return (
          e.startsWith("while") ||
          (e.startsWith("drag") && "draggable" !== e) ||
          e.startsWith("layout") ||
          e.startsWith("onTap") ||
          e.startsWith("onPan") ||
          e.startsWith("onLayout") ||
          s.has(e)
        );
      }
      let shouldForward = (e) => !isValidMotionProp(e);
      try {
        var a;
        (a = require("@emotion/is-prop-valid").default) &&
          (shouldForward = (e) =>
            e.startsWith("on") ? !isValidMotionProp(e) : a(e));
      } catch (e) {}
      function filterProps(e, r, n) {
        let s = {};
        for (let a in e)
          ("values" !== a || "object" != typeof e.values) &&
            (shouldForward(a) ||
              (!0 === n && isValidMotionProp(a)) ||
              (!r && !isValidMotionProp(a)) ||
              (e.draggable && a.startsWith("onDrag"))) &&
            (s[a] = e[a]);
        return s;
      }
    },
    57630: function (e, r, n) {
      "use strict";
      n.d(r, {
        Xp: function () {
          return l;
        },
        f9: function () {
          return s;
        },
        tm: function () {
          return a;
        },
      });
      let checkStringStartsWith = (e) => (r) =>
          "string" == typeof r && r.startsWith(e),
        s = checkStringStartsWith("--"),
        a = checkStringStartsWith("var(--"),
        l =
          /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g;
    },
    75194: function (e, r, n) {
      "use strict";
      function isSVGElement(e) {
        return e instanceof SVGElement && "svg" !== e.tagName;
      }
      n.d(r, {
        v: function () {
          return isSVGElement;
        },
      });
    },
    79135: function (e, r, n) {
      "use strict";
      n.d(r, {
        T: function () {
          return getAnimatableNone;
        },
      });
      var s = n(51550),
        a = n(97197),
        l = n(2728);
      function getAnimatableNone(e, r) {
        let n = (0, l.A)(e);
        return (
          n !== a.h && (n = s.P),
          n.getAnimatableNone ? n.getAnimatableNone(r) : void 0
        );
      }
    },
    2728: function (e, r, n) {
      "use strict";
      n.d(r, {
        A: function () {
          return getDefaultValueType;
        },
      });
      var s = n(85385),
        a = n(97197),
        l = n(36173);
      let u = {
          ...l.j,
          color: s.$,
          backgroundColor: s.$,
          outlineColor: s.$,
          fill: s.$,
          stroke: s.$,
          borderColor: s.$,
          borderTopColor: s.$,
          borderRightColor: s.$,
          borderBottomColor: s.$,
          borderLeftColor: s.$,
          filter: a.h,
          WebkitFilter: a.h,
        },
        getDefaultValueType = (e) => u[e];
    },
    56440: function (e, r, n) {
      "use strict";
      n.d(r, {
        $: function () {
          return u;
        },
        C: function () {
          return findDimensionValueType;
        },
      });
      var s = n(61649),
        a = n(96190),
        l = n(88340);
      let u = [
          s.Rx,
          a.px,
          a.aQ,
          a.RW,
          a.vw,
          a.vh,
          { test: (e) => "auto" === e, parse: (e) => e },
        ],
        findDimensionValueType = (e) => u.find((0, l.l)(e));
    },
    36173: function (e, r, n) {
      "use strict";
      n.d(r, {
        j: function () {
          return u;
        },
      });
      var s = n(61649),
        a = n(96190);
      let l = { ...s.Rx, transform: Math.round },
        u = {
          borderWidth: a.px,
          borderTopWidth: a.px,
          borderRightWidth: a.px,
          borderBottomWidth: a.px,
          borderLeftWidth: a.px,
          borderRadius: a.px,
          radius: a.px,
          borderTopLeftRadius: a.px,
          borderTopRightRadius: a.px,
          borderBottomRightRadius: a.px,
          borderBottomLeftRadius: a.px,
          width: a.px,
          maxWidth: a.px,
          height: a.px,
          maxHeight: a.px,
          size: a.px,
          top: a.px,
          right: a.px,
          bottom: a.px,
          left: a.px,
          padding: a.px,
          paddingTop: a.px,
          paddingRight: a.px,
          paddingBottom: a.px,
          paddingLeft: a.px,
          margin: a.px,
          marginTop: a.px,
          marginRight: a.px,
          marginBottom: a.px,
          marginLeft: a.px,
          rotate: a.RW,
          rotateX: a.RW,
          rotateY: a.RW,
          rotateZ: a.RW,
          scale: s.bA,
          scaleX: s.bA,
          scaleY: s.bA,
          scaleZ: s.bA,
          skew: a.RW,
          skewX: a.RW,
          skewY: a.RW,
          distance: a.px,
          translateX: a.px,
          translateY: a.px,
          translateZ: a.px,
          x: a.px,
          y: a.px,
          z: a.px,
          perspective: a.px,
          transformPerspective: a.px,
          opacity: s.Fq,
          originX: a.$C,
          originY: a.$C,
          originZ: a.px,
          zIndex: l,
          fillOpacity: s.Fq,
          strokeOpacity: s.Fq,
          numOctaves: l,
        };
    },
    88340: function (e, r, n) {
      "use strict";
      n.d(r, {
        l: function () {
          return testValueType;
        },
      });
      let testValueType = (e) => (r) => r.test(e);
    },
    34547: function (e, r, n) {
      "use strict";
      n.d(r, {
        W: function () {
          return HTMLVisualElement;
        },
      });
      var s = n(38057),
        a = n(57630),
        l = n(94714),
        u = n(50189),
        c = n(34242),
        h = n(2728),
        d = n(56460),
        f = n(86808),
        p = n(40406);
      let HTMLVisualElement = class HTMLVisualElement extends f.J {
        constructor() {
          super(...arguments), (this.type = "html");
        }
        readValueFromInstance(e, r) {
          if (l.G.has(r)) {
            let e = (0, h.A)(r);
            return (e && e.default) || 0;
          }
          {
            let n = window.getComputedStyle(e),
              s = ((0, a.f9)(r) ? n.getPropertyValue(r) : n[r]) || 0;
            return "string" == typeof s ? s.trim() : s;
          }
        }
        measureInstanceViewportBox(e, { transformPagePoint: r }) {
          return (0, d.J)(e, r);
        }
        build(e, r, n, a) {
          (0, s.r)(e, r, n, a.transformTemplate);
        }
        scrapeMotionValuesFromProps(e, r) {
          return (0, u.U)(e, r);
        }
        handleChildMotionValue() {
          this.childSubscription &&
            (this.childSubscription(), delete this.childSubscription);
          let { children: e } = this.props;
          (0, p.i)(e) &&
            (this.childSubscription = e.on("change", (e) => {
              this.current && (this.current.textContent = `${e}`);
            }));
        }
        renderInstance(e, r, n, s) {
          (0, c.N)(e, r, n, s);
        }
      };
    },
    38057: function (e, r, n) {
      "use strict";
      n.d(r, {
        r: function () {
          return buildHTMLStyles;
        },
      });
      var s = n(94714);
      let a = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective",
        },
        l = s._.length;
      var u = n(57630);
      let getValueAsType = (e, r) =>
        r && "number" == typeof e ? r.transform(e) : e;
      var c = n(36173);
      function buildHTMLStyles(e, r, n, h) {
        let { style: d, vars: f, transform: p, transformOrigin: m } = e,
          y = !1,
          g = !1,
          v = !0;
        for (let e in r) {
          let n = r[e];
          if ((0, u.f9)(e)) {
            f[e] = n;
            continue;
          }
          let a = c.j[e],
            l = getValueAsType(n, a);
          if (s.G.has(e)) {
            if (((y = !0), (p[e] = l), !v)) continue;
            n !== (a.default || 0) && (v = !1);
          } else e.startsWith("origin") ? ((g = !0), (m[e] = l)) : (d[e] = l);
        }
        if (
          (!r.transform &&
            (y || h
              ? (d.transform = (function (
                  e,
                  {
                    enableHardwareAcceleration: r = !0,
                    allowTransformNone: n = !0,
                  },
                  u,
                  c
                ) {
                  let h = "";
                  for (let r = 0; r < l; r++) {
                    let n = s._[r];
                    if (void 0 !== e[n]) {
                      let r = a[n] || n;
                      h += `${r}(${e[n]}) `;
                    }
                  }
                  return (
                    r && !e.z && (h += "translateZ(0)"),
                    (h = h.trim()),
                    c ? (h = c(e, u ? "" : h)) : n && u && (h = "none"),
                    h
                  );
                })(e.transform, n, v, h))
              : d.transform && (d.transform = "none")),
          g)
        ) {
          let { originX: e = "50%", originY: r = "50%", originZ: n = 0 } = m;
          d.transformOrigin = `${e} ${r} ${n}`;
        }
      }
    },
    34242: function (e, r, n) {
      "use strict";
      function renderHTML(e, { style: r, vars: n }, s, a) {
        for (let l in (Object.assign(e.style, r, a && a.getProjectionStyles(s)),
        n))
          e.style.setProperty(l, n[l]);
      }
      n.d(r, {
        N: function () {
          return renderHTML;
        },
      });
    },
    50189: function (e, r, n) {
      "use strict";
      n.d(r, {
        U: function () {
          return scrapeMotionValuesFromProps;
        },
      });
      var s = n(56816),
        a = n(40406);
      function scrapeMotionValuesFromProps(e, r) {
        let { style: n } = e,
          l = {};
        for (let u in n)
          ((0, a.i)(n[u]) ||
            (r.style && (0, a.i)(r.style[u])) ||
            (0, s.j)(u, e)) &&
            (l[u] = n[u]);
        return l;
      }
    },
    94714: function (e, r, n) {
      "use strict";
      n.d(r, {
        G: function () {
          return a;
        },
        _: function () {
          return s;
        },
      });
      let s = [
          "transformPerspective",
          "x",
          "y",
          "z",
          "translateX",
          "translateY",
          "translateZ",
          "scale",
          "scaleX",
          "scaleY",
          "rotate",
          "rotateX",
          "rotateY",
          "rotateZ",
          "skew",
          "skewX",
          "skewY",
        ],
        a = new Set(s);
    },
    56955: function (e, r, n) {
      "use strict";
      n.d(r, {
        R: function () {
          return s;
        },
      });
      let s = new WeakMap();
    },
    25794: function (e, r, n) {
      "use strict";
      n.d(r, {
        e: function () {
          return SVGVisualElement;
        },
      });
      var s = n(16832),
        a = n(86808),
        l = n(85415),
        u = n(93193),
        c = n(77302),
        h = n(94714),
        d = n(68504),
        f = n(2728),
        p = n(61512),
        m = n(79854);
      let SVGVisualElement = class SVGVisualElement extends a.J {
        constructor() {
          super(...arguments), (this.type = "svg"), (this.isSVGTag = !1);
        }
        getBaseTargetFromProps(e, r) {
          return e[r];
        }
        readValueFromInstance(e, r) {
          if (h.G.has(r)) {
            let e = (0, f.A)(r);
            return (e && e.default) || 0;
          }
          return (r = c.s.has(r) ? r : (0, u.D)(r)), e.getAttribute(r);
        }
        measureInstanceViewportBox() {
          return (0, p.dO)();
        }
        scrapeMotionValuesFromProps(e, r) {
          return (0, s.U)(e, r);
        }
        build(e, r, n, s) {
          (0, l.i)(e, r, n, this.isSVGTag, s.transformTemplate);
        }
        renderInstance(e, r, n, s) {
          (0, d.K)(e, r, n, s);
        }
        mount(e) {
          (this.isSVGTag = (0, m.a)(e.tagName)), super.mount(e);
        }
      };
    },
    85415: function (e, r, n) {
      "use strict";
      n.d(r, {
        i: function () {
          return buildSVGAttrs;
        },
      });
      var s = n(38057),
        a = n(96190);
      function calcOrigin(e, r, n) {
        return "string" == typeof e ? e : a.px.transform(r + n * e);
      }
      let l = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
        u = { offset: "strokeDashoffset", array: "strokeDasharray" };
      function buildSVGAttrs(
        e,
        {
          attrX: r,
          attrY: n,
          attrScale: c,
          originX: h,
          originY: d,
          pathLength: f,
          pathSpacing: p = 1,
          pathOffset: m = 0,
          ...y
        },
        g,
        v,
        b
      ) {
        if (((0, s.r)(e, y, g, b), v)) {
          e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
          return;
        }
        (e.attrs = e.style), (e.style = {});
        let { attrs: w, style: x, dimensions: _ } = e;
        w.transform && (_ && (x.transform = w.transform), delete w.transform),
          _ &&
            (void 0 !== h || void 0 !== d || x.transform) &&
            (x.transformOrigin = (function (e, r, n) {
              let s = calcOrigin(r, e.x, e.width),
                a = calcOrigin(n, e.y, e.height);
              return `${s} ${a}`;
            })(_, void 0 !== h ? h : 0.5, void 0 !== d ? d : 0.5)),
          void 0 !== r && (w.x = r),
          void 0 !== n && (w.y = n),
          void 0 !== c && (w.scale = c),
          void 0 !== f &&
            (function (e, r, n = 1, s = 0, c = !0) {
              e.pathLength = 1;
              let h = c ? l : u;
              e[h.offset] = a.px.transform(-s);
              let d = a.px.transform(r),
                f = a.px.transform(n);
              e[h.array] = `${d} ${f}`;
            })(w, f, p, m, !1);
      }
    },
    77302: function (e, r, n) {
      "use strict";
      n.d(r, {
        s: function () {
          return s;
        },
      });
      let s = new Set([
        "baseFrequency",
        "diffuseConstant",
        "kernelMatrix",
        "kernelUnitLength",
        "keySplines",
        "keyTimes",
        "limitingConeAngle",
        "markerHeight",
        "markerWidth",
        "numOctaves",
        "targetX",
        "targetY",
        "surfaceScale",
        "specularConstant",
        "specularExponent",
        "stdDeviation",
        "tableValues",
        "viewBox",
        "gradientTransform",
        "pathLength",
        "startOffset",
        "textLength",
        "lengthAdjust",
      ]);
    },
    79854: function (e, r, n) {
      "use strict";
      n.d(r, {
        a: function () {
          return isSVGTag;
        },
      });
      let isSVGTag = (e) => "string" == typeof e && "svg" === e.toLowerCase();
    },
    68504: function (e, r, n) {
      "use strict";
      n.d(r, {
        K: function () {
          return renderSVG;
        },
      });
      var s = n(93193),
        a = n(34242),
        l = n(77302);
      function renderSVG(e, r, n, u) {
        for (let n in ((0, a.N)(e, r, void 0, u), r.attrs))
          e.setAttribute(l.s.has(n) ? n : (0, s.D)(n), r.attrs[n]);
      }
    },
    16832: function (e, r, n) {
      "use strict";
      n.d(r, {
        U: function () {
          return scrapeMotionValuesFromProps;
        },
      });
      var s = n(40406),
        a = n(50189),
        l = n(94714);
      function scrapeMotionValuesFromProps(e, r) {
        let n = (0, a.U)(e, r);
        for (let a in e)
          if ((0, s.i)(e[a]) || (0, s.i)(r[a])) {
            let r =
              -1 !== l._.indexOf(a)
                ? "attr" + a.charAt(0).toUpperCase() + a.substring(1)
                : a;
            n[r] = e[a];
          }
        return n;
      }
    },
    7504: function (e, r, n) {
      "use strict";
      n.d(r, {
        G: function () {
          return isControllingVariants;
        },
        M: function () {
          return isVariantNode;
        },
      });
      var s = n(2445),
        a = n(97732),
        l = n(22963);
      function isControllingVariants(e) {
        return (0, s.H)(e.animate) || l.V.some((r) => (0, a.$)(e[r]));
      }
      function isVariantNode(e) {
        return !!(isControllingVariants(e) || e.variants);
      }
    },
    97732: function (e, r, n) {
      "use strict";
      function isVariantLabel(e) {
        return "string" == typeof e || Array.isArray(e);
      }
      n.d(r, {
        $: function () {
          return isVariantLabel;
        },
      });
    },
    52248: function (e, r, n) {
      "use strict";
      n.d(r, {
        x: function () {
          return resolveVariant;
        },
      });
      var s = n(79432);
      function resolveVariant(e, r, n) {
        let a = e.getProps();
        return (0, s.o)(
          a,
          r,
          void 0 !== n ? n : a.custom,
          (function (e) {
            let r = {};
            return e.values.forEach((e, n) => (r[n] = e.get())), r;
          })(e),
          (function (e) {
            let r = {};
            return e.values.forEach((e, n) => (r[n] = e.getVelocity())), r;
          })(e)
        );
      }
    },
    79432: function (e, r, n) {
      "use strict";
      function resolveVariantFromProps(e, r, n, s = {}, a = {}) {
        return (
          "function" == typeof r && (r = r(void 0 !== n ? n : e.custom, s, a)),
          "string" == typeof r && (r = e.variants && e.variants[r]),
          "function" == typeof r && (r = r(void 0 !== n ? n : e.custom, s, a)),
          r
        );
      }
      n.d(r, {
        o: function () {
          return resolveVariantFromProps;
        },
      });
    },
    14330: function (e, r, n) {
      "use strict";
      n.d(r, {
        GJ: function () {
          return checkTargetForNewValues;
        },
        P$: function () {
          return getOrigin;
        },
        CD: function () {
          return setTarget;
        },
      });
      var s = n(33441),
        a = n(30681),
        l = n(8715),
        u = n(33234),
        c = n(51550),
        h = n(79135),
        d = n(85385),
        f = n(56440),
        p = n(88340);
      let m = [...f.$, d.$, c.P],
        findValueType = (e) => m.find((0, p.l)(e));
      var y = n(52248);
      function setTarget(e, r) {
        let n = (0, y.x)(e, r),
          {
            transitionEnd: s = {},
            transition: a = {},
            ...c
          } = n ? e.makeTargetAnimatable(n, !1) : {};
        for (let r in (c = { ...c, ...s })) {
          let n = (0, l.Y)(c[r]);
          e.hasValue(r) ? e.getValue(r).set(n) : e.addValue(r, (0, u.BX)(n));
        }
      }
      function checkTargetForNewValues(e, r, n) {
        var l, d;
        let f = Object.keys(r).filter((r) => !e.hasValue(r)),
          p = f.length;
        if (p)
          for (let m = 0; m < p; m++) {
            let p = f[m],
              y = r[p],
              g = null;
            Array.isArray(y) && (g = y[0]),
              null === g &&
                (g =
                  null !==
                    (d =
                      null !== (l = n[p]) && void 0 !== l
                        ? l
                        : e.readValue(p)) && void 0 !== d
                    ? d
                    : r[p]),
              null != g &&
                ("string" == typeof g && ((0, s.P)(g) || (0, a.W)(g))
                  ? (g = parseFloat(g))
                  : !findValueType(g) && c.P.test(y) && (g = (0, h.T)(p, y)),
                e.addValue(p, (0, u.BX)(g, { owner: e })),
                void 0 === n[p] && (n[p] = g),
                null !== g && e.setBaseTarget(p, g));
          }
      }
      function getOrigin(e, r, n) {
        let s = {};
        for (let a in e) {
          let e = (function (e, r) {
            if (!r) return;
            let n = r[e] || r.default || r;
            return n.from;
          })(a, r);
          if (void 0 !== e) s[a] = e;
          else {
            let e = n.getValue(a);
            e && (s[a] = e.get());
          }
        }
        return s;
      }
    },
    22963: function (e, r, n) {
      "use strict";
      n.d(r, {
        V: function () {
          return a;
        },
        e: function () {
          return s;
        },
      });
      let s = [
          "animate",
          "whileInView",
          "whileFocus",
          "whileHover",
          "whileTap",
          "whileDrag",
          "exit",
        ],
        a = ["initial", ...s];
    },
    10010: function (e, r, n) {
      "use strict";
      function addUniqueItem(e, r) {
        -1 === e.indexOf(r) && e.push(r);
      }
      function removeItem(e, r) {
        let n = e.indexOf(r);
        n > -1 && e.splice(n, 1);
      }
      n.d(r, {
        cl: function () {
          return removeItem;
        },
        y4: function () {
          return addUniqueItem;
        },
      });
    },
    24169: function (e, r, n) {
      "use strict";
      n.d(r, {
        u: function () {
          return clamp;
        },
      });
      let clamp = (e, r, n) => Math.min(Math.max(n, e), r);
    },
    45487: function (e, r, n) {
      "use strict";
      n.d(r, {
        K: function () {
          return a;
        },
        k: function () {
          return l;
        },
      });
      var s = n(81662);
      let a = s.Z,
        l = s.Z;
    },
    64606: function (e, r, n) {
      "use strict";
      n.d(r, {
        s: function () {
          return interpolate;
        },
      });
      var s = n(45487),
        a = n(85385),
        l = n(24169),
        u = n(80022);
      function hueToRgb(e, r, n) {
        return (n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6)
          ? e + (r - e) * 6 * n
          : n < 0.5
          ? r
          : n < 2 / 3
          ? e + (r - e) * (2 / 3 - n) * 6
          : e;
      }
      var c = n(26382),
        h = n(40819),
        d = n(93184);
      let mixLinearColor = (e, r, n) => {
          let s = e * e;
          return Math.sqrt(Math.max(0, n * (r * r - s) + s));
        },
        f = [c.$, h.m, d.J],
        getColorType = (e) => f.find((r) => r.test(e));
      function asRGBA(e) {
        let r = getColorType(e);
        (0, s.k)(
          !!r,
          `'${e}' is not an animatable color. Use the equivalent color code instead.`
        );
        let n = r.parse(e);
        return (
          r === d.J &&
            (n = (function ({ hue: e, saturation: r, lightness: n, alpha: s }) {
              (e /= 360), (n /= 100);
              let a = 0,
                l = 0,
                u = 0;
              if ((r /= 100)) {
                let s = n < 0.5 ? n * (1 + r) : n + r - n * r,
                  c = 2 * n - s;
                (a = hueToRgb(c, s, e + 1 / 3)),
                  (l = hueToRgb(c, s, e)),
                  (u = hueToRgb(c, s, e - 1 / 3));
              } else a = l = u = n;
              return {
                red: Math.round(255 * a),
                green: Math.round(255 * l),
                blue: Math.round(255 * u),
                alpha: s,
              };
            })(n)),
          n
        );
      }
      let mixColor = (e, r) => {
        let n = asRGBA(e),
          s = asRGBA(r),
          a = { ...n };
        return (e) => (
          (a.red = mixLinearColor(n.red, s.red, e)),
          (a.green = mixLinearColor(n.green, s.green, e)),
          (a.blue = mixLinearColor(n.blue, s.blue, e)),
          (a.alpha = (0, u.C)(n.alpha, s.alpha, e)),
          h.m.transform(a)
        );
      };
      var p = n(83624),
        m = n(51550);
      let mixImmediate = (e, r) => (n) => `${n > 0 ? r : e}`;
      function getMixer(e, r) {
        return "number" == typeof e
          ? (n) => (0, u.C)(e, r, n)
          : a.$.test(e)
          ? mixColor(e, r)
          : e.startsWith("var(")
          ? mixImmediate(e, r)
          : mixComplex(e, r);
      }
      let mixArray = (e, r) => {
          let n = [...e],
            s = n.length,
            a = e.map((e, n) => getMixer(e, r[n]));
          return (e) => {
            for (let r = 0; r < s; r++) n[r] = a[r](e);
            return n;
          };
        },
        mixObject = (e, r) => {
          let n = { ...e, ...r },
            s = {};
          for (let a in n)
            void 0 !== e[a] && void 0 !== r[a] && (s[a] = getMixer(e[a], r[a]));
          return (e) => {
            for (let r in s) n[r] = s[r](e);
            return n;
          };
        },
        mixComplex = (e, r) => {
          let n = m.P.createTransformer(r),
            a = (0, m.V)(e),
            l = (0, m.V)(r),
            u =
              a.numVars === l.numVars &&
              a.numColors === l.numColors &&
              a.numNumbers >= l.numNumbers;
          return u
            ? (0, p.z)(mixArray(a.values, l.values), n)
            : ((0, s.K)(
                !0,
                `Complex values '${e}' and '${r}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`
              ),
              mixImmediate(e, r));
        };
      var y = n(23967),
        g = n(81662);
      let mixNumber = (e, r) => (n) => (0, u.C)(e, r, n);
      function interpolate(e, r, { clamp: n = !0, ease: u, mixer: c } = {}) {
        let h = e.length;
        if (
          ((0, s.k)(
            h === r.length,
            "Both input and output ranges must be the same length"
          ),
          1 === h)
        )
          return () => r[0];
        e[0] > e[h - 1] && ((e = [...e].reverse()), (r = [...r].reverse()));
        let d = (function (e, r, n) {
            let s = [],
              l =
                n ||
                (function (e) {
                  if ("number" == typeof e);
                  else if ("string" == typeof e)
                    return a.$.test(e) ? mixColor : mixComplex;
                  else if (Array.isArray(e)) return mixArray;
                  else if ("object" == typeof e) return mixObject;
                  return mixNumber;
                })(e[0]),
              u = e.length - 1;
            for (let n = 0; n < u; n++) {
              let a = l(e[n], e[n + 1]);
              if (r) {
                let e = Array.isArray(r) ? r[n] || g.Z : r;
                a = (0, p.z)(e, a);
              }
              s.push(a);
            }
            return s;
          })(r, u, c),
          f = d.length,
          interpolator = (r) => {
            let n = 0;
            if (f > 1) for (; n < e.length - 2 && !(r < e[n + 1]); n++);
            let s = (0, y.Y)(e[n], e[n + 1], r);
            return d[n](s);
          };
        return n
          ? (r) => interpolator((0, l.u)(e[0], e[h - 1], r))
          : interpolator;
      }
    },
    11741: function (e, r, n) {
      "use strict";
      n.d(r, {
        j: function () {
          return s;
        },
      });
      let s = "undefined" != typeof document;
    },
    33441: function (e, r, n) {
      "use strict";
      n.d(r, {
        P: function () {
          return isNumericalString;
        },
      });
      let isNumericalString = (e) => /^\-?\d*\.?\d+$/.test(e);
    },
    51804: function (e, r, n) {
      "use strict";
      function isRefObject(e) {
        return (
          e &&
          "object" == typeof e &&
          Object.prototype.hasOwnProperty.call(e, "current")
        );
      }
      n.d(r, {
        I: function () {
          return isRefObject;
        },
      });
    },
    30681: function (e, r, n) {
      "use strict";
      n.d(r, {
        W: function () {
          return isZeroValueString;
        },
      });
      let isZeroValueString = (e) => /^0[^.\s]+$/.test(e);
    },
    4522: function (e, r, n) {
      "use strict";
      function memo(e) {
        let r;
        return () => (void 0 === r && (r = e()), r);
      }
      n.d(r, {
        X: function () {
          return memo;
        },
      });
    },
    80022: function (e, r, n) {
      "use strict";
      n.d(r, {
        C: function () {
          return mix;
        },
      });
      let mix = (e, r, n) => -n * e + n * r + e;
    },
    81662: function (e, r, n) {
      "use strict";
      n.d(r, {
        Z: function () {
          return noop;
        },
      });
      let noop = (e) => e;
    },
    60599: function (e, r, n) {
      "use strict";
      n.d(r, {
        Y: function () {
          return defaultOffset;
        },
      });
      var s = n(26615);
      function defaultOffset(e) {
        let r = [0];
        return (0, s.c)(r, e.length - 1), r;
      }
    },
    26615: function (e, r, n) {
      "use strict";
      n.d(r, {
        c: function () {
          return fillOffset;
        },
      });
      var s = n(80022),
        a = n(23967);
      function fillOffset(e, r) {
        let n = e[e.length - 1];
        for (let l = 1; l <= r; l++) {
          let u = (0, a.Y)(0, r, l);
          e.push((0, s.C)(n, 1, u));
        }
      }
    },
    83624: function (e, r, n) {
      "use strict";
      n.d(r, {
        z: function () {
          return pipe;
        },
      });
      let combineFunctions = (e, r) => (n) => r(e(n)),
        pipe = (...e) => e.reduce(combineFunctions);
    },
    23967: function (e, r, n) {
      "use strict";
      n.d(r, {
        Y: function () {
          return progress;
        },
      });
      let progress = (e, r, n) => {
        let s = r - e;
        return 0 === s ? 1 : (n - e) / s;
      };
    },
    8715: function (e, r, n) {
      "use strict";
      n.d(r, {
        Y: function () {
          return resolveFinalValueInKeyframes;
        },
        p: function () {
          return isCustomValue;
        },
      });
      var s = n(48488);
      let isCustomValue = (e) =>
          !!(e && "object" == typeof e && e.mix && e.toValue),
        resolveFinalValueInKeyframes = (e) =>
          (0, s.C)(e) ? e[e.length - 1] || 0 : e;
    },
    21560: function (e, r, n) {
      "use strict";
      n.d(r, {
        L: function () {
          return SubscriptionManager;
        },
      });
      var s = n(10010);
      let SubscriptionManager = class SubscriptionManager {
        constructor() {
          this.subscriptions = [];
        }
        add(e) {
          return (
            (0, s.y4)(this.subscriptions, e),
            () => (0, s.cl)(this.subscriptions, e)
          );
        }
        notify(e, r, n) {
          let s = this.subscriptions.length;
          if (s) {
            if (1 === s) this.subscriptions[0](e, r, n);
            else
              for (let a = 0; a < s; a++) {
                let s = this.subscriptions[a];
                s && s(e, r, n);
              }
          }
        }
        getSize() {
          return this.subscriptions.length;
        }
        clear() {
          this.subscriptions.length = 0;
        }
      };
    },
    86917: function (e, r, n) {
      "use strict";
      n.d(r, {
        X: function () {
          return millisecondsToSeconds;
        },
        w: function () {
          return secondsToMilliseconds;
        },
      });
      let secondsToMilliseconds = (e) => 1e3 * e,
        millisecondsToSeconds = (e) => e / 1e3;
    },
    96681: function (e, r, n) {
      "use strict";
      n.d(r, {
        h: function () {
          return useConstant;
        },
      });
      var s = n(67294);
      function useConstant(e) {
        let r = (0, s.useRef)(null);
        return null === r.current && (r.current = e()), r.current;
      }
    },
    58868: function (e, r, n) {
      "use strict";
      n.d(r, {
        L: function () {
          return l;
        },
      });
      var s = n(67294),
        a = n(11741);
      let l = a.j ? s.useLayoutEffect : s.useEffect;
    },
    3038: function (e, r, n) {
      "use strict";
      function velocityPerSecond(e, r) {
        return r ? e * (1e3 / r) : 0;
      }
      n.d(r, {
        R: function () {
          return velocityPerSecond;
        },
      });
    },
    33234: function (e, r, n) {
      "use strict";
      n.d(r, {
        BX: function () {
          return motionValue;
        },
        S1: function () {
          return u;
        },
      });
      var s = n(21560),
        a = n(3038),
        l = n(2074);
      let isFloat = (e) => !isNaN(parseFloat(e)),
        u = { current: void 0 };
      let MotionValue = class MotionValue {
        constructor(e, r = {}) {
          (this.version = "10.18.0"),
            (this.timeDelta = 0),
            (this.lastUpdated = 0),
            (this.canTrackVelocity = !1),
            (this.events = {}),
            (this.updateAndNotify = (e, r = !0) => {
              (this.prev = this.current), (this.current = e);
              let { delta: n, timestamp: s } = l.frameData;
              this.lastUpdated !== s &&
                ((this.timeDelta = n),
                (this.lastUpdated = s),
                l.Wi.postRender(this.scheduleVelocityCheck)),
                this.prev !== this.current &&
                  this.events.change &&
                  this.events.change.notify(this.current),
                this.events.velocityChange &&
                  this.events.velocityChange.notify(this.getVelocity()),
                r &&
                  this.events.renderRequest &&
                  this.events.renderRequest.notify(this.current);
            }),
            (this.scheduleVelocityCheck = () =>
              l.Wi.postRender(this.velocityCheck)),
            (this.velocityCheck = ({ timestamp: e }) => {
              e !== this.lastUpdated &&
                ((this.prev = this.current),
                this.events.velocityChange &&
                  this.events.velocityChange.notify(this.getVelocity()));
            }),
            (this.hasAnimated = !1),
            (this.prev = this.current = e),
            (this.canTrackVelocity = isFloat(this.current)),
            (this.owner = r.owner);
        }
        onChange(e) {
          return this.on("change", e);
        }
        on(e, r) {
          this.events[e] || (this.events[e] = new s.L());
          let n = this.events[e].add(r);
          return "change" === e
            ? () => {
                n(),
                  l.Wi.read(() => {
                    this.events.change.getSize() || this.stop();
                  });
              }
            : n;
        }
        clearListeners() {
          for (let e in this.events) this.events[e].clear();
        }
        attach(e, r) {
          (this.passiveEffect = e), (this.stopPassiveEffect = r);
        }
        set(e, r = !0) {
          r && this.passiveEffect
            ? this.passiveEffect(e, this.updateAndNotify)
            : this.updateAndNotify(e, r);
        }
        setWithVelocity(e, r, n) {
          this.set(r), (this.prev = e), (this.timeDelta = n);
        }
        jump(e) {
          this.updateAndNotify(e),
            (this.prev = e),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
        get() {
          return u.current && u.current.push(this), this.current;
        }
        getPrevious() {
          return this.prev;
        }
        getVelocity() {
          return this.canTrackVelocity
            ? (0, a.R)(
                parseFloat(this.current) - parseFloat(this.prev),
                this.timeDelta
              )
            : 0;
        }
        start(e) {
          return (
            this.stop(),
            new Promise((r) => {
              (this.hasAnimated = !0),
                (this.animation = e(r)),
                this.events.animationStart &&
                  this.events.animationStart.notify();
            }).then(() => {
              this.events.animationComplete &&
                this.events.animationComplete.notify(),
                this.clearAnimation();
            })
          );
        }
        stop() {
          this.animation &&
            (this.animation.stop(),
            this.events.animationCancel &&
              this.events.animationCancel.notify()),
            this.clearAnimation();
        }
        isAnimating() {
          return !!this.animation;
        }
        clearAnimation() {
          delete this.animation;
        }
        destroy() {
          this.clearListeners(),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
      };
      function motionValue(e, r) {
        return new MotionValue(e, r);
      }
    },
    26382: function (e, r, n) {
      "use strict";
      n.d(r, {
        $: function () {
          return l;
        },
      });
      var s = n(40819),
        a = n(98834);
      let l = {
        test: (0, a.i)("#"),
        parse: function (e) {
          let r = "",
            n = "",
            s = "",
            a = "";
          return (
            e.length > 5
              ? ((r = e.substring(1, 3)),
                (n = e.substring(3, 5)),
                (s = e.substring(5, 7)),
                (a = e.substring(7, 9)))
              : ((r = e.substring(1, 2)),
                (n = e.substring(2, 3)),
                (s = e.substring(3, 4)),
                (a = e.substring(4, 5)),
                (r += r),
                (n += n),
                (s += s),
                (a += a)),
            {
              red: parseInt(r, 16),
              green: parseInt(n, 16),
              blue: parseInt(s, 16),
              alpha: a ? parseInt(a, 16) / 255 : 1,
            }
          );
        },
        transform: s.m.transform,
      };
    },
    93184: function (e, r, n) {
      "use strict";
      n.d(r, {
        J: function () {
          return c;
        },
      });
      var s = n(61649),
        a = n(96190),
        l = n(36430),
        u = n(98834);
      let c = {
        test: (0, u.i)("hsl", "hue"),
        parse: (0, u.d)("hue", "saturation", "lightness"),
        transform: ({ hue: e, saturation: r, lightness: n, alpha: u = 1 }) =>
          "hsla(" +
          Math.round(e) +
          ", " +
          a.aQ.transform((0, l.Nw)(r)) +
          ", " +
          a.aQ.transform((0, l.Nw)(n)) +
          ", " +
          (0, l.Nw)(s.Fq.transform(u)) +
          ")",
      };
    },
    85385: function (e, r, n) {
      "use strict";
      n.d(r, {
        $: function () {
          return c;
        },
      });
      var s = n(36430),
        a = n(26382),
        l = n(93184),
        u = n(40819);
      let c = {
        test: (e) => u.m.test(e) || a.$.test(e) || l.J.test(e),
        parse: (e) =>
          u.m.test(e)
            ? u.m.parse(e)
            : l.J.test(e)
            ? l.J.parse(e)
            : a.$.parse(e),
        transform: (e) =>
          (0, s.HD)(e)
            ? e
            : e.hasOwnProperty("red")
            ? u.m.transform(e)
            : l.J.transform(e),
      };
    },
    40819: function (e, r, n) {
      "use strict";
      n.d(r, {
        m: function () {
          return h;
        },
      });
      var s = n(24169),
        a = n(61649),
        l = n(36430),
        u = n(98834);
      let clampRgbUnit = (e) => (0, s.u)(0, 255, e),
        c = { ...a.Rx, transform: (e) => Math.round(clampRgbUnit(e)) },
        h = {
          test: (0, u.i)("rgb", "red"),
          parse: (0, u.d)("red", "green", "blue"),
          transform: ({ red: e, green: r, blue: n, alpha: s = 1 }) =>
            "rgba(" +
            c.transform(e) +
            ", " +
            c.transform(r) +
            ", " +
            c.transform(n) +
            ", " +
            (0, l.Nw)(a.Fq.transform(s)) +
            ")",
        };
    },
    98834: function (e, r, n) {
      "use strict";
      n.d(r, {
        d: function () {
          return splitColor;
        },
        i: function () {
          return isColorString;
        },
      });
      var s = n(36430);
      let isColorString = (e, r) => (n) =>
          !!(
            ((0, s.HD)(n) && s.mj.test(n) && n.startsWith(e)) ||
            (r && Object.prototype.hasOwnProperty.call(n, r))
          ),
        splitColor = (e, r, n) => (a) => {
          if (!(0, s.HD)(a)) return a;
          let [l, u, c, h] = a.match(s.KP);
          return {
            [e]: parseFloat(l),
            [r]: parseFloat(u),
            [n]: parseFloat(c),
            alpha: void 0 !== h ? parseFloat(h) : 1,
          };
        };
    },
    97197: function (e, r, n) {
      "use strict";
      n.d(r, {
        h: function () {
          return c;
        },
      });
      var s = n(51550),
        a = n(36430);
      let l = new Set(["brightness", "contrast", "saturate", "opacity"]);
      function applyDefaultFilter(e) {
        let [r, n] = e.slice(0, -1).split("(");
        if ("drop-shadow" === r) return e;
        let [s] = n.match(a.KP) || [];
        if (!s) return e;
        let u = n.replace(s, ""),
          c = l.has(r) ? 1 : 0;
        return s !== n && (c *= 100), r + "(" + c + u + ")";
      }
      let u = /([a-z-]*)\(.*?\)/g,
        c = {
          ...s.P,
          getAnimatableNone: (e) => {
            let r = e.match(u);
            return r ? r.map(applyDefaultFilter).join(" ") : e;
          },
        };
    },
    51550: function (e, r, n) {
      "use strict";
      n.d(r, {
        P: function () {
          return p;
        },
        V: function () {
          return analyseComplexValue;
        },
      });
      var s = n(57630),
        a = n(81662),
        l = n(85385),
        u = n(61649),
        c = n(36430);
      let h = { regex: s.Xp, countKey: "Vars", token: "${v}", parse: a.Z },
        d = {
          regex: c.dA,
          countKey: "Colors",
          token: "${c}",
          parse: l.$.parse,
        },
        f = {
          regex: c.KP,
          countKey: "Numbers",
          token: "${n}",
          parse: u.Rx.parse,
        };
      function tokenise(e, { regex: r, countKey: n, token: s, parse: a }) {
        let l = e.tokenised.match(r);
        l &&
          ((e["num" + n] = l.length),
          (e.tokenised = e.tokenised.replace(r, s)),
          e.values.push(...l.map(a)));
      }
      function analyseComplexValue(e) {
        let r = e.toString(),
          n = {
            value: r,
            tokenised: r,
            values: [],
            numVars: 0,
            numColors: 0,
            numNumbers: 0,
          };
        return (
          n.value.includes("var(--") && tokenise(n, h),
          tokenise(n, d),
          tokenise(n, f),
          n
        );
      }
      function parseComplexValue(e) {
        return analyseComplexValue(e).values;
      }
      function createTransformer(e) {
        let {
            values: r,
            numColors: n,
            numVars: s,
            tokenised: a,
          } = analyseComplexValue(e),
          u = r.length;
        return (e) => {
          let r = a;
          for (let a = 0; a < u; a++)
            r =
              a < s
                ? r.replace(h.token, e[a])
                : a < s + n
                ? r.replace(d.token, l.$.transform(e[a]))
                : r.replace(f.token, (0, c.Nw)(e[a]));
          return r;
        };
      }
      let convertNumbersToZero = (e) => ("number" == typeof e ? 0 : e),
        p = {
          test: function (e) {
            var r, n;
            return (
              isNaN(e) &&
              (0, c.HD)(e) &&
              ((null === (r = e.match(c.KP)) || void 0 === r
                ? void 0
                : r.length) || 0) +
                ((null === (n = e.match(c.dA)) || void 0 === n
                  ? void 0
                  : n.length) || 0) >
                0
            );
          },
          parse: parseComplexValue,
          createTransformer,
          getAnimatableNone: function (e) {
            let r = parseComplexValue(e),
              n = createTransformer(e);
            return n(r.map(convertNumbersToZero));
          },
        };
    },
    61649: function (e, r, n) {
      "use strict";
      n.d(r, {
        Fq: function () {
          return l;
        },
        Rx: function () {
          return a;
        },
        bA: function () {
          return u;
        },
      });
      var s = n(24169);
      let a = {
          test: (e) => "number" == typeof e,
          parse: parseFloat,
          transform: (e) => e,
        },
        l = { ...a, transform: (e) => (0, s.u)(0, 1, e) },
        u = { ...a, default: 1 };
    },
    96190: function (e, r, n) {
      "use strict";
      n.d(r, {
        $C: function () {
          return d;
        },
        RW: function () {
          return a;
        },
        aQ: function () {
          return l;
        },
        px: function () {
          return u;
        },
        vh: function () {
          return c;
        },
        vw: function () {
          return h;
        },
      });
      var s = n(36430);
      let createUnitType = (e) => ({
          test: (r) =>
            (0, s.HD)(r) && r.endsWith(e) && 1 === r.split(" ").length,
          parse: parseFloat,
          transform: (r) => `${r}${e}`,
        }),
        a = createUnitType("deg"),
        l = createUnitType("%"),
        u = createUnitType("px"),
        c = createUnitType("vh"),
        h = createUnitType("vw"),
        d = {
          ...l,
          parse: (e) => l.parse(e) / 100,
          transform: (e) => l.transform(100 * e),
        };
    },
    36430: function (e, r, n) {
      "use strict";
      n.d(r, {
        HD: function () {
          return isString;
        },
        KP: function () {
          return s;
        },
        Nw: function () {
          return sanitize;
        },
        dA: function () {
          return a;
        },
        mj: function () {
          return l;
        },
      });
      let sanitize = (e) => Math.round(1e5 * e) / 1e5,
        s = /(-)?([\d]*\.?[\d])+/g,
        a =
          /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
        l =
          /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
      function isString(e) {
        return "string" == typeof e;
      }
    },
    12490: function (e, r, n) {
      "use strict";
      n.d(r, {
        L: function () {
          return isWillChangeMotionValue;
        },
      });
      var s = n(40406);
      function isWillChangeMotionValue(e) {
        return !!((0, s.i)(e) && e.add);
      }
    },
    40406: function (e, r, n) {
      "use strict";
      n.d(r, {
        i: function () {
          return isMotionValue;
        },
      });
      let isMotionValue = (e) => !!(e && e.getVelocity);
    },
    16399: function (e, r, n) {
      "use strict";
      n.d(r, {
        b: function () {
          return resolveMotionValue;
        },
      });
      var s = n(8715),
        a = n(40406);
      function resolveMotionValue(e) {
        let r = (0, a.i)(e) ? e.get() : e;
        return (0, s.p)(r) ? r.toValue() : r;
      }
    },
    87536: function (e, r, n) {
      "use strict";
      n.d(r, {
        KN: function () {
          return appendErrors;
        },
        U2: function () {
          return get;
        },
        cI: function () {
          return useForm;
        },
        t8: function () {
          return set;
        },
      });
      var s = n(67294),
        isCheckBoxInput = (e) => "checkbox" === e.type,
        isDateObject = (e) => e instanceof Date,
        isNullOrUndefined = (e) => null == e;
      let isObjectType = (e) => "object" == typeof e;
      var isObject = (e) =>
          !isNullOrUndefined(e) &&
          !Array.isArray(e) &&
          isObjectType(e) &&
          !isDateObject(e),
        getEventValue = (e) =>
          isObject(e) && e.target
            ? isCheckBoxInput(e.target)
              ? e.target.checked
              : e.target.value
            : e,
        getNodeParentName = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e,
        isNameInFieldArray = (e, r) => e.has(getNodeParentName(r)),
        isPlainObject = (e) => {
          let r = e.constructor && e.constructor.prototype;
          return isObject(r) && r.hasOwnProperty("isPrototypeOf");
        },
        a =
          "undefined" != typeof window &&
          void 0 !== window.HTMLElement &&
          "undefined" != typeof document;
      function cloneObject(e) {
        let r;
        let n = Array.isArray(e);
        if (e instanceof Date) r = new Date(e);
        else if (e instanceof Set) r = new Set(e);
        else if (
          !(
            !(a && (e instanceof Blob || e instanceof FileList)) &&
            (n || isObject(e))
          )
        )
          return e;
        else if (((r = n ? [] : {}), n || isPlainObject(e)))
          for (let n in e) e.hasOwnProperty(n) && (r[n] = cloneObject(e[n]));
        else r = e;
        return r;
      }
      var compact = (e) => (Array.isArray(e) ? e.filter(Boolean) : []),
        isUndefined = (e) => void 0 === e,
        get = (e, r, n) => {
          if (!r || !isObject(e)) return n;
          let s = compact(r.split(/[,[\].]+?/)).reduce(
            (e, r) => (isNullOrUndefined(e) ? e : e[r]),
            e
          );
          return isUndefined(s) || s === e ? (isUndefined(e[r]) ? n : e[r]) : s;
        },
        isBoolean = (e) => "boolean" == typeof e;
      let l = { BLUR: "blur", FOCUS_OUT: "focusout" },
        u = {
          onBlur: "onBlur",
          onChange: "onChange",
          onSubmit: "onSubmit",
          onTouched: "onTouched",
          all: "all",
        },
        c = {
          max: "max",
          min: "min",
          maxLength: "maxLength",
          minLength: "minLength",
          pattern: "pattern",
          required: "required",
          validate: "validate",
        };
      s.createContext(null);
      var getProxyFormState = (e, r, n, s = !0) => {
          let a = { defaultValues: r._defaultValues };
          for (let l in e)
            Object.defineProperty(a, l, {
              get: () => (
                r._proxyFormState[l] !== u.all &&
                  (r._proxyFormState[l] = !s || u.all),
                n && (n[l] = !0),
                e[l]
              ),
            });
          return a;
        },
        isEmptyObject = (e) => isObject(e) && !Object.keys(e).length,
        shouldRenderFormState = (e, r, n, s) => {
          n(e);
          let { name: a, ...l } = e;
          return (
            isEmptyObject(l) ||
            Object.keys(l).length >= Object.keys(r).length ||
            Object.keys(l).find((e) => r[e] === (!s || u.all))
          );
        },
        convertToArrayPayload = (e) => (Array.isArray(e) ? e : [e]),
        isString = (e) => "string" == typeof e,
        generateWatchOutput = (e, r, n, s, a) =>
          isString(e)
            ? (s && r.watch.add(e), get(n, e, a))
            : Array.isArray(e)
            ? e.map((e) => (s && r.watch.add(e), get(n, e)))
            : (s && (r.watchAll = !0), n),
        isKey = (e) => /^\w*$/.test(e),
        stringToPath = (e) =>
          compact(e.replace(/["|']|\]/g, "").split(/\.|\[/)),
        set = (e, r, n) => {
          let s = -1,
            a = isKey(r) ? [r] : stringToPath(r),
            l = a.length,
            u = l - 1;
          for (; ++s < l; ) {
            let r = a[s],
              l = n;
            if (s !== u) {
              let n = e[r];
              l =
                isObject(n) || Array.isArray(n)
                  ? n
                  : isNaN(+a[s + 1])
                  ? {}
                  : [];
            }
            (e[r] = l), (e = e[r]);
          }
          return e;
        },
        appendErrors = (e, r, n, s, a) =>
          r
            ? {
                ...n[e],
                types: {
                  ...(n[e] && n[e].types ? n[e].types : {}),
                  [s]: a || !0,
                },
              }
            : {},
        getValidationModes = (e) => ({
          isOnSubmit: !e || e === u.onSubmit,
          isOnBlur: e === u.onBlur,
          isOnChange: e === u.onChange,
          isOnAll: e === u.all,
          isOnTouch: e === u.onTouched,
        }),
        isWatched = (e, r, n) =>
          !n &&
          (r.watchAll ||
            r.watch.has(e) ||
            [...r.watch].some(
              (r) => e.startsWith(r) && /^\.\w+/.test(e.slice(r.length))
            ));
      let iterateFieldsByAction = (e, r, n, s) => {
        for (let a of n || Object.keys(e)) {
          let n = get(e, a);
          if (n) {
            let { _f: e, ...l } = n;
            if (e) {
              if (
                (e.refs && e.refs[0] && r(e.refs[0], a) && !s) ||
                (e.ref && r(e.ref, e.name) && !s)
              )
                break;
              iterateFieldsByAction(l, r);
            } else isObject(l) && iterateFieldsByAction(l, r);
          }
        }
      };
      var updateFieldArrayRootError = (e, r, n) => {
          let s = compact(get(e, n));
          return set(s, "root", r[n]), set(e, n, s), e;
        },
        isFileInput = (e) => "file" === e.type,
        isFunction = (e) => "function" == typeof e,
        isHTMLElement = (e) => {
          if (!a) return !1;
          let r = e ? e.ownerDocument : 0;
          return (
            e instanceof
            (r && r.defaultView ? r.defaultView.HTMLElement : HTMLElement)
          );
        },
        isMessage = (e) => isString(e),
        isRadioInput = (e) => "radio" === e.type,
        isRegex = (e) => e instanceof RegExp;
      let h = { value: !1, isValid: !1 },
        d = { value: !0, isValid: !0 };
      var getCheckboxValue = (e) => {
        if (Array.isArray(e)) {
          if (e.length > 1) {
            let r = e
              .filter((e) => e && e.checked && !e.disabled)
              .map((e) => e.value);
            return { value: r, isValid: !!r.length };
          }
          return e[0].checked && !e[0].disabled
            ? e[0].attributes && !isUndefined(e[0].attributes.value)
              ? isUndefined(e[0].value) || "" === e[0].value
                ? d
                : { value: e[0].value, isValid: !0 }
              : d
            : h;
        }
        return h;
      };
      let f = { isValid: !1, value: null };
      var getRadioValue = (e) =>
        Array.isArray(e)
          ? e.reduce(
              (e, r) =>
                r && r.checked && !r.disabled
                  ? { isValid: !0, value: r.value }
                  : e,
              f
            )
          : f;
      function getValidateError(e, r, n = "validate") {
        if (
          isMessage(e) ||
          (Array.isArray(e) && e.every(isMessage)) ||
          (isBoolean(e) && !e)
        )
          return { type: n, message: isMessage(e) ? e : "", ref: r };
      }
      var getValueAndMessage = (e) =>
          isObject(e) && !isRegex(e) ? e : { value: e, message: "" },
        validateField = async (e, r, n, s, a) => {
          let {
              ref: l,
              refs: u,
              required: h,
              maxLength: d,
              minLength: f,
              min: p,
              max: m,
              pattern: y,
              validate: g,
              name: v,
              valueAsNumber: b,
              mount: w,
              disabled: x,
            } = e._f,
            _ = get(r, v);
          if (!w || x) return {};
          let S = u ? u[0] : l,
            setCustomValidity = (e) => {
              s &&
                S.reportValidity &&
                (S.setCustomValidity(isBoolean(e) ? "" : e || ""),
                S.reportValidity());
            },
            A = {},
            T = isRadioInput(l),
            O = isCheckBoxInput(l),
            P =
              ((b || isFileInput(l)) &&
                isUndefined(l.value) &&
                isUndefined(_)) ||
              (isHTMLElement(l) && "" === l.value) ||
              "" === _ ||
              (Array.isArray(_) && !_.length),
            j = appendErrors.bind(null, v, n, A),
            getMinMaxMessage = (e, r, n, s = c.maxLength, a = c.minLength) => {
              let u = e ? r : n;
              A[v] = {
                type: e ? s : a,
                message: u,
                ref: l,
                ...j(e ? s : a, u),
              };
            };
          if (
            a
              ? !Array.isArray(_) || !_.length
              : h &&
                ((!(T || O) && (P || isNullOrUndefined(_))) ||
                  (isBoolean(_) && !_) ||
                  (O && !getCheckboxValue(u).isValid) ||
                  (T && !getRadioValue(u).isValid))
          ) {
            let { value: e, message: r } = isMessage(h)
              ? { value: !!h, message: h }
              : getValueAndMessage(h);
            if (
              e &&
              ((A[v] = {
                type: c.required,
                message: r,
                ref: S,
                ...j(c.required, r),
              }),
              !n)
            )
              return setCustomValidity(r), A;
          }
          if (!P && (!isNullOrUndefined(p) || !isNullOrUndefined(m))) {
            let e, r;
            let s = getValueAndMessage(m),
              a = getValueAndMessage(p);
            if (isNullOrUndefined(_) || isNaN(_)) {
              let n = l.valueAsDate || new Date(_),
                convertTimeToDate = (e) =>
                  new Date(new Date().toDateString() + " " + e),
                u = "time" == l.type,
                c = "week" == l.type;
              isString(s.value) &&
                _ &&
                (e = u
                  ? convertTimeToDate(_) > convertTimeToDate(s.value)
                  : c
                  ? _ > s.value
                  : n > new Date(s.value)),
                isString(a.value) &&
                  _ &&
                  (r = u
                    ? convertTimeToDate(_) < convertTimeToDate(a.value)
                    : c
                    ? _ < a.value
                    : n < new Date(a.value));
            } else {
              let n = l.valueAsNumber || (_ ? +_ : _);
              isNullOrUndefined(s.value) || (e = n > s.value),
                isNullOrUndefined(a.value) || (r = n < a.value);
            }
            if (
              (e || r) &&
              (getMinMaxMessage(!!e, s.message, a.message, c.max, c.min), !n)
            )
              return setCustomValidity(A[v].message), A;
          }
          if ((d || f) && !P && (isString(_) || (a && Array.isArray(_)))) {
            let e = getValueAndMessage(d),
              r = getValueAndMessage(f),
              s = !isNullOrUndefined(e.value) && _.length > +e.value,
              a = !isNullOrUndefined(r.value) && _.length < +r.value;
            if ((s || a) && (getMinMaxMessage(s, e.message, r.message), !n))
              return setCustomValidity(A[v].message), A;
          }
          if (y && !P && isString(_)) {
            let { value: e, message: r } = getValueAndMessage(y);
            if (
              isRegex(e) &&
              !_.match(e) &&
              ((A[v] = {
                type: c.pattern,
                message: r,
                ref: l,
                ...j(c.pattern, r),
              }),
              !n)
            )
              return setCustomValidity(r), A;
          }
          if (g) {
            if (isFunction(g)) {
              let e = await g(_, r),
                s = getValidateError(e, S);
              if (s && ((A[v] = { ...s, ...j(c.validate, s.message) }), !n))
                return setCustomValidity(s.message), A;
            } else if (isObject(g)) {
              let e = {};
              for (let s in g) {
                if (!isEmptyObject(e) && !n) break;
                let a = getValidateError(await g[s](_, r), S, s);
                a &&
                  ((e = { ...a, ...j(s, a.message) }),
                  setCustomValidity(a.message),
                  n && (A[v] = e));
              }
              if (!isEmptyObject(e) && ((A[v] = { ref: S, ...e }), !n))
                return A;
            }
          }
          return setCustomValidity(!0), A;
        };
      function unset(e, r) {
        let n = Array.isArray(r) ? r : isKey(r) ? [r] : stringToPath(r),
          s =
            1 === n.length
              ? e
              : (function (e, r) {
                  let n = r.slice(0, -1).length,
                    s = 0;
                  for (; s < n; ) e = isUndefined(e) ? s++ : e[r[s++]];
                  return e;
                })(e, n),
          a = n.length - 1,
          l = n[a];
        return (
          s && delete s[l],
          0 !== a &&
            ((isObject(s) && isEmptyObject(s)) ||
              (Array.isArray(s) &&
                (function (e) {
                  for (let r in e)
                    if (e.hasOwnProperty(r) && !isUndefined(e[r])) return !1;
                  return !0;
                })(s))) &&
            unset(e, n.slice(0, -1)),
          e
        );
      }
      var createSubject = () => {
          let e = [];
          return {
            get observers() {
              return e;
            },
            next: (r) => {
              for (let n of e) n.next && n.next(r);
            },
            subscribe: (r) => (
              e.push(r),
              {
                unsubscribe: () => {
                  e = e.filter((e) => e !== r);
                },
              }
            ),
            unsubscribe: () => {
              e = [];
            },
          };
        },
        isPrimitive = (e) => isNullOrUndefined(e) || !isObjectType(e);
      function deepEqual(e, r) {
        if (isPrimitive(e) || isPrimitive(r)) return e === r;
        if (isDateObject(e) && isDateObject(r))
          return e.getTime() === r.getTime();
        let n = Object.keys(e),
          s = Object.keys(r);
        if (n.length !== s.length) return !1;
        for (let a of n) {
          let n = e[a];
          if (!s.includes(a)) return !1;
          if ("ref" !== a) {
            let e = r[a];
            if (
              (isDateObject(n) && isDateObject(e)) ||
              (isObject(n) && isObject(e)) ||
              (Array.isArray(n) && Array.isArray(e))
                ? !deepEqual(n, e)
                : n !== e
            )
              return !1;
          }
        }
        return !0;
      }
      var isMultipleSelect = (e) => "select-multiple" === e.type,
        isRadioOrCheckbox = (e) => isRadioInput(e) || isCheckBoxInput(e),
        live = (e) => isHTMLElement(e) && e.isConnected,
        objectHasTruthyValue = (e) =>
          isObject(e) && Object.values(e).some((e) => e),
        objectHasFunction = (e) => {
          for (let r in e) if (isFunction(e[r])) return !0;
          return !1;
        };
      function markFieldsDirty(e, r = {}) {
        let n = Array.isArray(e);
        if (isObject(e) || n)
          for (let n in e)
            Array.isArray(e[n]) || (isObject(e[n]) && !objectHasFunction(e[n]))
              ? ((r[n] = Array.isArray(e[n]) ? [] : {}),
                markFieldsDirty(e[n], r[n]))
              : isNullOrUndefined(e[n]) || (r[n] = !0);
        return r;
      }
      var getDirtyFields = (e, r) =>
          (function getDirtyFieldsFromDefaultValues(e, r, n) {
            let s = Array.isArray(e);
            if (isObject(e) || s)
              for (let s in e)
                Array.isArray(e[s]) ||
                (isObject(e[s]) && !objectHasFunction(e[s]))
                  ? isUndefined(r) || isPrimitive(n[s])
                    ? (n[s] = Array.isArray(e[s])
                        ? markFieldsDirty(e[s], [])
                        : { ...markFieldsDirty(e[s]) })
                    : getDirtyFieldsFromDefaultValues(
                        e[s],
                        isNullOrUndefined(r) ? {} : r[s],
                        n[s]
                      )
                  : (n[s] = !deepEqual(e[s], r[s]));
            return n;
          })(e, r, markFieldsDirty(r)),
        getFieldValueAs = (
          e,
          { valueAsNumber: r, valueAsDate: n, setValueAs: s }
        ) =>
          isUndefined(e)
            ? e
            : r
            ? "" === e
              ? NaN
              : e
              ? +e
              : e
            : n && isString(e)
            ? new Date(e)
            : s
            ? s(e)
            : e;
      function getFieldValue(e) {
        let r = e.ref;
        return (e.refs ? e.refs.every((e) => e.disabled) : r.disabled)
          ? void 0
          : isFileInput(r)
          ? r.files
          : isRadioInput(r)
          ? getRadioValue(e.refs).value
          : isMultipleSelect(r)
          ? [...r.selectedOptions].map(({ value: e }) => e)
          : isCheckBoxInput(r)
          ? getCheckboxValue(e.refs).value
          : getFieldValueAs(isUndefined(r.value) ? e.ref.value : r.value, e);
      }
      var getResolverOptions = (e, r, n, s) => {
          let a = {};
          for (let n of e) {
            let e = get(r, n);
            e && set(a, n, e._f);
          }
          return {
            criteriaMode: n,
            names: [...e],
            fields: a,
            shouldUseNativeValidation: s,
          };
        },
        getRuleValue = (e) =>
          isUndefined(e)
            ? e
            : isRegex(e)
            ? e.source
            : isObject(e)
            ? isRegex(e.value)
              ? e.value.source
              : e.value
            : e,
        hasValidation = (e) =>
          e.mount &&
          (e.required ||
            e.min ||
            e.max ||
            e.maxLength ||
            e.minLength ||
            e.pattern ||
            e.validate);
      function schemaErrorLookup(e, r, n) {
        let s = get(e, n);
        if (s || isKey(n)) return { error: s, name: n };
        let a = n.split(".");
        for (; a.length; ) {
          let s = a.join("."),
            l = get(r, s),
            u = get(e, s);
          if (l && !Array.isArray(l) && n !== s) break;
          if (u && u.type) return { name: s, error: u };
          a.pop();
        }
        return { name: n };
      }
      var skipValidation = (e, r, n, s, a) =>
          !a.isOnAll &&
          (!n && a.isOnTouch
            ? !(r || e)
            : (n ? s.isOnBlur : a.isOnBlur)
            ? !e
            : (n ? !s.isOnChange : !a.isOnChange) || e),
        unsetEmptyArray = (e, r) => !compact(get(e, r)).length && unset(e, r);
      let p = {
        mode: u.onSubmit,
        reValidateMode: u.onChange,
        shouldFocusError: !0,
      };
      function useForm(e = {}) {
        let r = s.useRef(),
          n = s.useRef(),
          [c, h] = s.useState({
            isDirty: !1,
            isValidating: !1,
            isLoading: isFunction(e.defaultValues),
            isSubmitted: !1,
            isSubmitting: !1,
            isSubmitSuccessful: !1,
            isValid: !1,
            submitCount: 0,
            dirtyFields: {},
            touchedFields: {},
            validatingFields: {},
            errors: e.errors || {},
            disabled: e.disabled || !1,
            defaultValues: isFunction(e.defaultValues)
              ? void 0
              : e.defaultValues,
          });
        r.current ||
          (r.current = {
            ...(function (e = {}) {
              let r,
                n = { ...p, ...e },
                s = {
                  submitCount: 0,
                  isDirty: !1,
                  isLoading: isFunction(n.defaultValues),
                  isValidating: !1,
                  isSubmitted: !1,
                  isSubmitting: !1,
                  isSubmitSuccessful: !1,
                  isValid: !1,
                  touchedFields: {},
                  dirtyFields: {},
                  validatingFields: {},
                  errors: n.errors || {},
                  disabled: n.disabled || !1,
                },
                c = {},
                h =
                  ((isObject(n.defaultValues) || isObject(n.values)) &&
                    cloneObject(n.defaultValues || n.values)) ||
                  {},
                d = n.shouldUnregister ? {} : cloneObject(h),
                f = { action: !1, mount: !1, watch: !1 },
                m = {
                  mount: new Set(),
                  unMount: new Set(),
                  array: new Set(),
                  watch: new Set(),
                },
                y = 0,
                g = {
                  isDirty: !1,
                  dirtyFields: !1,
                  validatingFields: !1,
                  touchedFields: !1,
                  isValidating: !1,
                  isValid: !1,
                  errors: !1,
                },
                v = {
                  values: createSubject(),
                  array: createSubject(),
                  state: createSubject(),
                },
                b = getValidationModes(n.mode),
                w = getValidationModes(n.reValidateMode),
                x = n.criteriaMode === u.all,
                debounce = (e) => (r) => {
                  clearTimeout(y), (y = setTimeout(e, r));
                },
                _updateValid = async (e) => {
                  if (g.isValid || e) {
                    let e = n.resolver
                      ? isEmptyObject((await _executeSchema()).errors)
                      : await executeBuiltInValidation(c, !0);
                    e !== s.isValid && v.state.next({ isValid: e });
                  }
                },
                _updateIsValidating = (e, r) => {
                  (g.isValidating || g.validatingFields) &&
                    (r.forEach((r) => {
                      set(s.validatingFields, r, e);
                    }),
                    (s.isValidating = objectHasTruthyValue(s.validatingFields)),
                    v.state.next({
                      validatingFields: s.validatingFields,
                      isValidating: s.isValidating,
                    }));
                },
                updateErrors = (e, r) => {
                  set(s.errors, e, r), v.state.next({ errors: s.errors });
                },
                updateValidAndValue = (e, r, n, s) => {
                  let a = get(c, e);
                  if (a) {
                    let l = get(d, e, isUndefined(n) ? get(h, e) : n);
                    isUndefined(l) || (s && s.defaultChecked) || r
                      ? set(d, e, r ? l : getFieldValue(a._f))
                      : setFieldValue(e, l),
                      f.mount && _updateValid();
                  }
                },
                updateTouchAndDirty = (e, r, n, a, l) => {
                  let u = !1,
                    d = !1,
                    f = { name: e },
                    p = !!(get(c, e) && get(c, e)._f.disabled);
                  if (!n || a) {
                    g.isDirty &&
                      ((d = s.isDirty),
                      (s.isDirty = f.isDirty = _getDirty()),
                      (u = d !== f.isDirty));
                    let n = p || deepEqual(get(h, e), r);
                    (d = !!(!p && get(s.dirtyFields, e))),
                      n || p
                        ? unset(s.dirtyFields, e)
                        : set(s.dirtyFields, e, !0),
                      (f.dirtyFields = s.dirtyFields),
                      (u = u || (g.dirtyFields && !n !== d));
                  }
                  if (n) {
                    let r = get(s.touchedFields, e);
                    r ||
                      (set(s.touchedFields, e, n),
                      (f.touchedFields = s.touchedFields),
                      (u = u || (g.touchedFields && r !== n)));
                  }
                  return u && l && v.state.next(f), u ? f : {};
                },
                shouldRenderByError = (n, a, l, u) => {
                  let c = get(s.errors, n),
                    h = g.isValid && isBoolean(a) && s.isValid !== a;
                  if (
                    (e.delayError && l
                      ? (r = debounce(() => updateErrors(n, l)))(e.delayError)
                      : (clearTimeout(y),
                        (r = null),
                        l ? set(s.errors, n, l) : unset(s.errors, n)),
                    (l ? !deepEqual(c, l) : c) || !isEmptyObject(u) || h)
                  ) {
                    let e = {
                      ...u,
                      ...(h && isBoolean(a) ? { isValid: a } : {}),
                      errors: s.errors,
                      name: n,
                    };
                    (s = { ...s, ...e }), v.state.next(e);
                  }
                  _updateIsValidating(
                    !1,
                    Object.keys(s.validatingFields).filter((e) => e === n)
                  );
                },
                _executeSchema = async (e) =>
                  n.resolver(
                    d,
                    n.context,
                    getResolverOptions(
                      e || m.mount,
                      c,
                      n.criteriaMode,
                      n.shouldUseNativeValidation
                    )
                  ),
                executeSchemaAndUpdateState = async (e) => {
                  let { errors: r } = await _executeSchema(e);
                  if (e)
                    for (let n of e) {
                      let e = get(r, n);
                      e ? set(s.errors, n, e) : unset(s.errors, n);
                    }
                  else s.errors = r;
                  return r;
                },
                executeBuiltInValidation = async (e, r, a = { valid: !0 }) => {
                  for (let l in e) {
                    let u = e[l];
                    if (u) {
                      let { _f: e, ...l } = u;
                      if (e) {
                        let l = m.array.has(e.name),
                          c = await validateField(
                            u,
                            d,
                            x,
                            n.shouldUseNativeValidation && !r,
                            l
                          );
                        if (c[e.name] && ((a.valid = !1), r)) break;
                        r ||
                          (get(c, e.name)
                            ? l
                              ? updateFieldArrayRootError(s.errors, c, e.name)
                              : set(s.errors, e.name, c[e.name])
                            : unset(s.errors, e.name));
                      }
                      l && (await executeBuiltInValidation(l, r, a));
                    }
                  }
                  return a.valid;
                },
                _getDirty = (e, r) => (
                  e && r && set(d, e, r), !deepEqual(getValues(), h)
                ),
                _getWatch = (e, r, n) =>
                  generateWatchOutput(
                    e,
                    m,
                    {
                      ...(f.mount
                        ? d
                        : isUndefined(r)
                        ? h
                        : isString(e)
                        ? { [e]: r }
                        : r),
                    },
                    n,
                    r
                  ),
                setFieldValue = (e, r, n = {}) => {
                  let s = get(c, e),
                    a = r;
                  if (s) {
                    let n = s._f;
                    n &&
                      (n.disabled || set(d, e, getFieldValueAs(r, n)),
                      (a =
                        isHTMLElement(n.ref) && isNullOrUndefined(r) ? "" : r),
                      isMultipleSelect(n.ref)
                        ? [...n.ref.options].forEach(
                            (e) => (e.selected = a.includes(e.value))
                          )
                        : n.refs
                        ? isCheckBoxInput(n.ref)
                          ? n.refs.length > 1
                            ? n.refs.forEach(
                                (e) =>
                                  (!e.defaultChecked || !e.disabled) &&
                                  (e.checked = Array.isArray(a)
                                    ? !!a.find((r) => r === e.value)
                                    : a === e.value)
                              )
                            : n.refs[0] && (n.refs[0].checked = !!a)
                          : n.refs.forEach((e) => (e.checked = e.value === a))
                        : isFileInput(n.ref)
                        ? (n.ref.value = "")
                        : ((n.ref.value = a),
                          n.ref.type ||
                            v.values.next({ name: e, values: { ...d } })));
                  }
                  (n.shouldDirty || n.shouldTouch) &&
                    updateTouchAndDirty(e, a, n.shouldTouch, n.shouldDirty, !0),
                    n.shouldValidate && trigger(e);
                },
                setValues = (e, r, n) => {
                  for (let s in r) {
                    let a = r[s],
                      l = `${e}.${s}`,
                      u = get(c, l);
                    (!m.array.has(e) && isPrimitive(a) && (!u || u._f)) ||
                    isDateObject(a)
                      ? setFieldValue(l, a, n)
                      : setValues(l, a, n);
                  }
                },
                setValue = (e, r, n = {}) => {
                  let a = get(c, e),
                    l = m.array.has(e),
                    u = cloneObject(r);
                  set(d, e, u),
                    l
                      ? (v.array.next({ name: e, values: { ...d } }),
                        (g.isDirty || g.dirtyFields) &&
                          n.shouldDirty &&
                          v.state.next({
                            name: e,
                            dirtyFields: getDirtyFields(h, d),
                            isDirty: _getDirty(e, u),
                          }))
                      : !a || a._f || isNullOrUndefined(u)
                      ? setFieldValue(e, u, n)
                      : setValues(e, u, n),
                    isWatched(e, m) && v.state.next({ ...s }),
                    v.values.next({
                      name: f.mount ? e : void 0,
                      values: { ...d },
                    });
                },
                onChange = async (e) => {
                  let a = e.target,
                    u = a.name,
                    h = !0,
                    f = get(c, u),
                    _updateIsFieldValueUpdated = (e) => {
                      h = Number.isNaN(e) || e === get(d, u, e);
                    };
                  if (f) {
                    let p, y;
                    let _ = a.type ? getFieldValue(f._f) : getEventValue(e),
                      S = e.type === l.BLUR || e.type === l.FOCUS_OUT,
                      A =
                        (!hasValidation(f._f) &&
                          !n.resolver &&
                          !get(s.errors, u) &&
                          !f._f.deps) ||
                        skipValidation(
                          S,
                          get(s.touchedFields, u),
                          s.isSubmitted,
                          w,
                          b
                        ),
                      T = isWatched(u, m, S);
                    set(d, u, _),
                      S
                        ? (f._f.onBlur && f._f.onBlur(e), r && r(0))
                        : f._f.onChange && f._f.onChange(e);
                    let O = updateTouchAndDirty(u, _, S, !1),
                      P = !isEmptyObject(O) || T;
                    if (
                      (S ||
                        v.values.next({
                          name: u,
                          type: e.type,
                          values: { ...d },
                        }),
                      A)
                    )
                      return (
                        g.isValid && _updateValid(),
                        P && v.state.next({ name: u, ...(T ? {} : O) })
                      );
                    if (
                      (!S && T && v.state.next({ ...s }),
                      _updateIsValidating(!0, [u]),
                      n.resolver)
                    ) {
                      let { errors: e } = await _executeSchema([u]);
                      if ((_updateIsFieldValueUpdated(_), h)) {
                        let r = schemaErrorLookup(s.errors, c, u),
                          n = schemaErrorLookup(e, c, r.name || u);
                        (p = n.error), (u = n.name), (y = isEmptyObject(e));
                      }
                    } else
                      (p = (
                        await validateField(
                          f,
                          d,
                          x,
                          n.shouldUseNativeValidation
                        )
                      )[u]),
                        _updateIsFieldValueUpdated(_),
                        h &&
                          (p
                            ? (y = !1)
                            : g.isValid &&
                              (y = await executeBuiltInValidation(c, !0)));
                    h &&
                      (f._f.deps && trigger(f._f.deps),
                      shouldRenderByError(u, y, p, O));
                  }
                },
                _focusInput = (e, r) => {
                  if (get(s.errors, r) && e.focus) return e.focus(), 1;
                },
                trigger = async (e, r = {}) => {
                  let a, l;
                  let u = convertToArrayPayload(e);
                  if ((_updateIsValidating(!0, u), n.resolver)) {
                    let r = await executeSchemaAndUpdateState(
                      isUndefined(e) ? e : u
                    );
                    (a = isEmptyObject(r)),
                      (l = e ? !u.some((e) => get(r, e)) : a);
                  } else
                    e
                      ? ((l = (
                          await Promise.all(
                            u.map(async (e) => {
                              let r = get(c, e);
                              return await executeBuiltInValidation(
                                r && r._f ? { [e]: r } : r
                              );
                            })
                          )
                        ).every(Boolean)) ||
                          s.isValid) &&
                        _updateValid()
                      : (l = a = await executeBuiltInValidation(c));
                  return (
                    v.state.next({
                      ...(!isString(e) || (g.isValid && a !== s.isValid)
                        ? {}
                        : { name: e }),
                      ...(n.resolver || !e ? { isValid: a } : {}),
                      errors: s.errors,
                      isValidating: !1,
                    }),
                    r.shouldFocus &&
                      !l &&
                      iterateFieldsByAction(c, _focusInput, e ? u : m.mount),
                    l
                  );
                },
                getValues = (e) => {
                  let r = { ...h, ...(f.mount ? d : {}) };
                  return isUndefined(e)
                    ? r
                    : isString(e)
                    ? get(r, e)
                    : e.map((e) => get(r, e));
                },
                getFieldState = (e, r) => ({
                  invalid: !!get((r || s).errors, e),
                  isDirty: !!get((r || s).dirtyFields, e),
                  isTouched: !!get((r || s).touchedFields, e),
                  isValidating: !!get((r || s).validatingFields, e),
                  error: get((r || s).errors, e),
                }),
                setError = (e, r, n) => {
                  let a = (get(c, e, { _f: {} })._f || {}).ref;
                  set(s.errors, e, { ...r, ref: a }),
                    v.state.next({ name: e, errors: s.errors, isValid: !1 }),
                    n && n.shouldFocus && a && a.focus && a.focus();
                },
                unregister = (e, r = {}) => {
                  for (let a of e ? convertToArrayPayload(e) : m.mount)
                    m.mount.delete(a),
                      m.array.delete(a),
                      r.keepValue || (unset(c, a), unset(d, a)),
                      r.keepError || unset(s.errors, a),
                      r.keepDirty || unset(s.dirtyFields, a),
                      r.keepTouched || unset(s.touchedFields, a),
                      r.keepIsValidating || unset(s.validatingFields, a),
                      n.shouldUnregister || r.keepDefaultValue || unset(h, a);
                  v.values.next({ values: { ...d } }),
                    v.state.next({
                      ...s,
                      ...(r.keepDirty ? { isDirty: _getDirty() } : {}),
                    }),
                    r.keepIsValid || _updateValid();
                },
                _updateDisabledField = ({
                  disabled: e,
                  name: r,
                  field: n,
                  fields: s,
                  value: a,
                }) => {
                  if (isBoolean(e)) {
                    let l = e
                      ? void 0
                      : isUndefined(a)
                      ? getFieldValue(n ? n._f : get(s, r)._f)
                      : a;
                    set(d, r, l), updateTouchAndDirty(r, l, !1, !1, !0);
                  }
                },
                register = (e, r = {}) => {
                  let s = get(c, e),
                    a = isBoolean(r.disabled);
                  return (
                    set(c, e, {
                      ...(s || {}),
                      _f: {
                        ...(s && s._f ? s._f : { ref: { name: e } }),
                        name: e,
                        mount: !0,
                        ...r,
                      },
                    }),
                    m.mount.add(e),
                    s
                      ? _updateDisabledField({
                          field: s,
                          disabled: r.disabled,
                          name: e,
                          value: r.value,
                        })
                      : updateValidAndValue(e, !0, r.value),
                    {
                      ...(a ? { disabled: r.disabled } : {}),
                      ...(n.progressive
                        ? {
                            required: !!r.required,
                            min: getRuleValue(r.min),
                            max: getRuleValue(r.max),
                            minLength: getRuleValue(r.minLength),
                            maxLength: getRuleValue(r.maxLength),
                            pattern: getRuleValue(r.pattern),
                          }
                        : {}),
                      name: e,
                      onChange,
                      onBlur: onChange,
                      ref: (a) => {
                        if (a) {
                          register(e, r), (s = get(c, e));
                          let n =
                              (isUndefined(a.value) &&
                                a.querySelectorAll &&
                                a.querySelectorAll(
                                  "input,select,textarea"
                                )[0]) ||
                              a,
                            l = isRadioOrCheckbox(n),
                            u = s._f.refs || [];
                          (l ? u.find((e) => e === n) : n === s._f.ref) ||
                            (set(c, e, {
                              _f: {
                                ...s._f,
                                ...(l
                                  ? {
                                      refs: [
                                        ...u.filter(live),
                                        n,
                                        ...(Array.isArray(get(h, e))
                                          ? [{}]
                                          : []),
                                      ],
                                      ref: { type: n.type, name: e },
                                    }
                                  : { ref: n }),
                              },
                            }),
                            updateValidAndValue(e, !1, void 0, n));
                        } else
                          (s = get(c, e, {}))._f && (s._f.mount = !1),
                            (n.shouldUnregister || r.shouldUnregister) &&
                              !(isNameInFieldArray(m.array, e) && f.action) &&
                              m.unMount.add(e);
                      },
                    }
                  );
                },
                _focusError = () =>
                  n.shouldFocusError &&
                  iterateFieldsByAction(c, _focusInput, m.mount),
                handleSubmit = (e, r) => async (a) => {
                  let l;
                  a &&
                    (a.preventDefault && a.preventDefault(),
                    a.persist && a.persist());
                  let u = cloneObject(d);
                  if ((v.state.next({ isSubmitting: !0 }), n.resolver)) {
                    let { errors: e, values: r } = await _executeSchema();
                    (s.errors = e), (u = r);
                  } else await executeBuiltInValidation(c);
                  if ((unset(s.errors, "root"), isEmptyObject(s.errors))) {
                    v.state.next({ errors: {} });
                    try {
                      await e(u, a);
                    } catch (e) {
                      l = e;
                    }
                  } else
                    r && (await r({ ...s.errors }, a)),
                      _focusError(),
                      setTimeout(_focusError);
                  if (
                    (v.state.next({
                      isSubmitted: !0,
                      isSubmitting: !1,
                      isSubmitSuccessful: isEmptyObject(s.errors) && !l,
                      submitCount: s.submitCount + 1,
                      errors: s.errors,
                    }),
                    l)
                  )
                    throw l;
                },
                _reset = (r, n = {}) => {
                  let l = r ? cloneObject(r) : h,
                    u = cloneObject(l),
                    p = isEmptyObject(r),
                    y = p ? h : u;
                  if ((n.keepDefaultValues || (h = l), !n.keepValues)) {
                    if (n.keepDirtyValues)
                      for (let e of m.mount)
                        get(s.dirtyFields, e)
                          ? set(y, e, get(d, e))
                          : setValue(e, get(y, e));
                    else {
                      if (a && isUndefined(r))
                        for (let e of m.mount) {
                          let r = get(c, e);
                          if (r && r._f) {
                            let e = Array.isArray(r._f.refs)
                              ? r._f.refs[0]
                              : r._f.ref;
                            if (isHTMLElement(e)) {
                              let r = e.closest("form");
                              if (r) {
                                r.reset();
                                break;
                              }
                            }
                          }
                        }
                      c = {};
                    }
                    (d = e.shouldUnregister
                      ? n.keepDefaultValues
                        ? cloneObject(h)
                        : {}
                      : cloneObject(y)),
                      v.array.next({ values: { ...y } }),
                      v.values.next({ values: { ...y } });
                  }
                  (m = {
                    mount: n.keepDirtyValues ? m.mount : new Set(),
                    unMount: new Set(),
                    array: new Set(),
                    watch: new Set(),
                    watchAll: !1,
                    focus: "",
                  }),
                    (f.mount =
                      !g.isValid || !!n.keepIsValid || !!n.keepDirtyValues),
                    (f.watch = !!e.shouldUnregister),
                    v.state.next({
                      submitCount: n.keepSubmitCount ? s.submitCount : 0,
                      isDirty:
                        !p &&
                        (n.keepDirty
                          ? s.isDirty
                          : !!(n.keepDefaultValues && !deepEqual(r, h))),
                      isSubmitted: !!n.keepIsSubmitted && s.isSubmitted,
                      dirtyFields: p
                        ? []
                        : n.keepDirtyValues
                        ? n.keepDefaultValues && d
                          ? getDirtyFields(h, d)
                          : s.dirtyFields
                        : n.keepDefaultValues && r
                        ? getDirtyFields(h, r)
                        : {},
                      touchedFields: n.keepTouched ? s.touchedFields : {},
                      errors: n.keepErrors ? s.errors : {},
                      isSubmitSuccessful:
                        !!n.keepIsSubmitSuccessful && s.isSubmitSuccessful,
                      isSubmitting: !1,
                    });
                },
                reset = (e, r) => _reset(isFunction(e) ? e(d) : e, r);
              return {
                control: {
                  register,
                  unregister,
                  getFieldState,
                  handleSubmit,
                  setError,
                  _executeSchema,
                  _getWatch,
                  _getDirty,
                  _updateValid,
                  _removeUnmounted: () => {
                    for (let e of m.unMount) {
                      let r = get(c, e);
                      r &&
                        (r._f.refs
                          ? r._f.refs.every((e) => !live(e))
                          : !live(r._f.ref)) &&
                        unregister(e);
                    }
                    m.unMount = new Set();
                  },
                  _updateFieldArray: (e, r = [], n, a, l = !0, u = !0) => {
                    if (a && n) {
                      if (((f.action = !0), u && Array.isArray(get(c, e)))) {
                        let r = n(get(c, e), a.argA, a.argB);
                        l && set(c, e, r);
                      }
                      if (u && Array.isArray(get(s.errors, e))) {
                        let r = n(get(s.errors, e), a.argA, a.argB);
                        l && set(s.errors, e, r), unsetEmptyArray(s.errors, e);
                      }
                      if (
                        g.touchedFields &&
                        u &&
                        Array.isArray(get(s.touchedFields, e))
                      ) {
                        let r = n(get(s.touchedFields, e), a.argA, a.argB);
                        l && set(s.touchedFields, e, r);
                      }
                      g.dirtyFields && (s.dirtyFields = getDirtyFields(h, d)),
                        v.state.next({
                          name: e,
                          isDirty: _getDirty(e, r),
                          dirtyFields: s.dirtyFields,
                          errors: s.errors,
                          isValid: s.isValid,
                        });
                    } else set(d, e, r);
                  },
                  _updateDisabledField,
                  _getFieldArray: (r) =>
                    compact(
                      get(
                        f.mount ? d : h,
                        r,
                        e.shouldUnregister ? get(h, r, []) : []
                      )
                    ),
                  _reset,
                  _resetDefaultValues: () =>
                    isFunction(n.defaultValues) &&
                    n.defaultValues().then((e) => {
                      reset(e, n.resetOptions), v.state.next({ isLoading: !1 });
                    }),
                  _updateFormState: (e) => {
                    s = { ...s, ...e };
                  },
                  _disableForm: (e) => {
                    isBoolean(e) &&
                      (v.state.next({ disabled: e }),
                      iterateFieldsByAction(
                        c,
                        (r, n) => {
                          let s = e,
                            a = get(c, n);
                          a &&
                            isBoolean(a._f.disabled) &&
                            (s || (s = a._f.disabled)),
                            (r.disabled = s);
                        },
                        0,
                        !1
                      ));
                  },
                  _subjects: v,
                  _proxyFormState: g,
                  _setErrors: (e) => {
                    (s.errors = e),
                      v.state.next({ errors: s.errors, isValid: !1 });
                  },
                  get _fields() {
                    return c;
                  },
                  get _formValues() {
                    return d;
                  },
                  get _state() {
                    return f;
                  },
                  set _state(value) {
                    f = value;
                  },
                  get _defaultValues() {
                    return h;
                  },
                  get _names() {
                    return m;
                  },
                  set _names(value) {
                    m = value;
                  },
                  get _formState() {
                    return s;
                  },
                  set _formState(value) {
                    s = value;
                  },
                  get _options() {
                    return n;
                  },
                  set _options(value) {
                    n = { ...n, ...value };
                  },
                },
                trigger,
                register,
                handleSubmit,
                watch: (e, r) =>
                  isFunction(e)
                    ? v.values.subscribe({
                        next: (n) => e(_getWatch(void 0, r), n),
                      })
                    : _getWatch(e, r, !0),
                setValue,
                getValues,
                reset,
                resetField: (e, r = {}) => {
                  get(c, e) &&
                    (isUndefined(r.defaultValue)
                      ? setValue(e, cloneObject(get(h, e)))
                      : (setValue(e, r.defaultValue),
                        set(h, e, cloneObject(r.defaultValue))),
                    r.keepTouched || unset(s.touchedFields, e),
                    r.keepDirty ||
                      (unset(s.dirtyFields, e),
                      (s.isDirty = r.defaultValue
                        ? _getDirty(e, cloneObject(get(h, e)))
                        : _getDirty())),
                    !r.keepError &&
                      (unset(s.errors, e), g.isValid && _updateValid()),
                    v.state.next({ ...s }));
                },
                clearErrors: (e) => {
                  e &&
                    convertToArrayPayload(e).forEach((e) => unset(s.errors, e)),
                    v.state.next({ errors: e ? s.errors : {} });
                },
                unregister,
                setError,
                setFocus: (e, r = {}) => {
                  let n = get(c, e),
                    s = n && n._f;
                  if (s) {
                    let e = s.refs ? s.refs[0] : s.ref;
                    e.focus && (e.focus(), r.shouldSelect && e.select());
                  }
                },
                getFieldState,
              };
            })(e),
            formState: c,
          });
        let d = r.current.control;
        return (
          (d._options = e),
          !(function (e) {
            let r = s.useRef(e);
            (r.current = e),
              s.useEffect(() => {
                let n =
                  !e.disabled &&
                  r.current.subject &&
                  r.current.subject.subscribe({ next: r.current.next });
                return () => {
                  n && n.unsubscribe();
                };
              }, [e.disabled]);
          })({
            subject: d._subjects.state,
            next: (e) => {
              shouldRenderFormState(
                e,
                d._proxyFormState,
                d._updateFormState,
                !0
              ) && h({ ...d._formState });
            },
          }),
          s.useEffect(() => d._disableForm(e.disabled), [d, e.disabled]),
          s.useEffect(() => {
            if (d._proxyFormState.isDirty) {
              let e = d._getDirty();
              e !== c.isDirty && d._subjects.state.next({ isDirty: e });
            }
          }, [d, c.isDirty]),
          s.useEffect(() => {
            e.values && !deepEqual(e.values, n.current)
              ? (d._reset(e.values, d._options.resetOptions),
                (n.current = e.values),
                h((e) => ({ ...e })))
              : d._resetDefaultValues();
          }, [e.values, d]),
          s.useEffect(() => {
            e.errors && d._setErrors(e.errors);
          }, [e.errors, d]),
          s.useEffect(() => {
            d._state.mount || (d._updateValid(), (d._state.mount = !0)),
              d._state.watch &&
                ((d._state.watch = !1),
                d._subjects.state.next({ ...d._formState })),
              d._removeUnmounted();
          }),
          s.useEffect(() => {
            e.shouldUnregister &&
              d._subjects.values.next({ values: d._getWatch() });
          }, [e.shouldUnregister, d]),
          (r.current.formState = getProxyFormState(c, d)),
          r.current
        );
      }
    },
  },
  function (e) {
    var __webpack_exec__ = function (r) {
      return e((e.s = r));
    };
    e.O(0, [9774, 179], function () {
      return __webpack_exec__(91118), __webpack_exec__(59974);
    }),
      (_N_E = e.O());
  },
]);
