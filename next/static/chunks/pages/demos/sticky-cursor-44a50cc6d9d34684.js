(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8045],
  {
    72547: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/demos/sticky-cursor",
        function () {
          return n(70083);
        },
      ]);
    },
    70083: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return Home;
          },
        });
      var r = n(85893),
        s = n(84649),
        a = n.n(s),
        u = n(67294),
        o = n(38940),
        i = n(4960),
        c = n(4002),
        l = n(24213),
        m = n(24368);
      function Home() {
        let e = (0, u.useRef)(null);
        return (0, r.jsxs)("main", {
          className: a().main,
          children: [
            (0, r.jsx)(f, { ref: e }),
            (0, r.jsx)(StickyCursor, { stickyElement: e }),
          ],
        });
      }
      let f = (0, u.forwardRef)(function (e, t) {
        return (0,
        r.jsx)("div", { className: a().header, children: (0, r.jsx)(Magnetic, { children: (0, r.jsx)("div", { className: a().burger, children: (0, r.jsx)("div", { ref: t, className: a().bounds }) }) }) });
      });
      function Magnetic(e) {
        let { children: t } = e,
          n = (0, u.useRef)(null),
          [s, a] = (0, u.useState)({ x: 0, y: 0 }),
          { x: i, y: c } = s;
        return (0, r.jsx)(o.E.div, {
          style: { position: "relative" },
          ref: n,
          onMouseMove: (e) => {
            let { clientX: t, clientY: r } = e,
              {
                height: s,
                width: u,
                left: o,
                top: i,
              } = n.current.getBoundingClientRect();
            a({ x: 0.1 * (t - (o + u / 2)), y: 0.1 * (r - (i + s / 2)) });
          },
          onMouseLeave: () => {
            a({ x: 0, y: 0 });
          },
          animate: { x: i, y: c },
          transition: { type: "spring", stiffness: 350, damping: 5, mass: 0.5 },
          children: t,
        });
      }
      function StickyCursor(e) {
        let { stickyElement: t } = e,
          [n, s] = (0, u.useState)(!1),
          f = (0, u.useRef)(null),
          d = n ? 60 : 15,
          y = { x: (0, i.c)(0), y: (0, i.c)(0) },
          v = { x: (0, i.c)(1), y: (0, i.c)(1) },
          x = { damping: 20, stiffness: 300, mass: 0.5 },
          g = { x: (0, c.q)(y.x, x), y: (0, c.q)(y.y, x) },
          rotate = (e, t, n) => {
            let r = Math.atan2(n.y, n.x);
            (0, l.j)(
              f.current,
              { rotate: "".concat(r, "rad") },
              { duration: 0 }
            );
          },
          manageMouseMove = (e) => {
            let { clientX: r, clientY: s } = e,
              {
                left: a,
                top: u,
                height: o,
                width: i,
              } = t.current.getBoundingClientRect(),
              c = { x: a + i / 2, y: u + o / 2 };
            if (n) {
              let e = { x: r - c.x, y: s - c.y };
              rotate(r, s, e);
              let t = Math.max(Math.abs(e.x), Math.abs(e.y)),
                n = (0, m.v)(t, [0, o / 2], [1, 1.3]),
                a = (0, m.v)(t, [0, i / 2], [1, 0.8]);
              v.x.set(n),
                v.y.set(a),
                y.x.set(c.x - d / 2 + 0.1 * e.x),
                y.y.set(c.y - d / 2 + 0.1 * e.y);
            } else y.x.set(r - d / 2), y.y.set(s - d / 2);
          },
          manageMouseOver = (e) => {
            s(!0);
          },
          manageMouseLeave = (e) => {
            s(!1),
              (0, l.j)(
                f.current,
                { scaleX: 1, scaleY: 1 },
                { duration: 0.1 },
                { type: "spring" }
              );
          };
        return (
          (0, u.useEffect)(
            () => (
              t.current.addEventListener("mouseenter", manageMouseOver),
              t.current.addEventListener("mouseleave", manageMouseLeave),
              window.addEventListener("mousemove", manageMouseMove),
              () => {
                t.current.removeEventListener("mouseenter", manageMouseOver),
                  t.current.removeEventListener("mouseleave", manageMouseLeave),
                  window.removeEventListener("mousemove", manageMouseMove);
              }
            ),
            [n]
          ),
          (0, r.jsx)("div", {
            className: a().cursorContainer,
            children: (0, r.jsx)(o.E.div, {
              transformTemplate: (e) => {
                let { rotate: t, scaleX: n, scaleY: r } = e;
                return "rotate("
                  .concat(t, ") scaleX(")
                  .concat(n, ") scaleY(")
                  .concat(r, ")");
              },
              style: { left: g.x, top: g.y, scaleX: v.x, scaleY: v.y },
              animate: { width: d, height: d },
              className: a().cursor,
              ref: f,
            }),
          })
        );
      }
    },
    84649: function (e) {
      e.exports = {
        main: "style_main__QSuL8",
        header: "style_header__VCnws",
        burger: "style_burger__vKbNL",
        bounds: "style_bounds__3BONX",
        cursor: "style_cursor__EmEV3",
      };
    },
    24368: function (e, t, n) {
      "use strict";
      n.d(t, {
        v: function () {
          return transform;
        },
      });
      var r = n(64606);
      let isCustomValueType = (e) => e && "object" == typeof e && e.mix,
        getMixer = (e) => (isCustomValueType(e) ? e.mix : void 0);
      function transform(...e) {
        let t = !Array.isArray(e[0]),
          n = t ? 0 : -1,
          s = e[0 + n],
          a = e[1 + n],
          u = e[2 + n],
          o = e[3 + n],
          i = (0, r.s)(a, u, { mixer: getMixer(u[0]), ...o });
        return t ? i(s) : i;
      }
    },
    4960: function (e, t, n) {
      "use strict";
      n.d(t, {
        c: function () {
          return useMotionValue;
        },
      });
      var r = n(67294),
        s = n(33234),
        a = n(16014),
        u = n(96681);
      function useMotionValue(e) {
        let t = (0, u.h)(() => (0, s.BX)(e)),
          { isStatic: n } = (0, r.useContext)(a._);
        if (n) {
          let [, n] = (0, r.useState)(e);
          (0, r.useEffect)(() => t.on("change", n), []);
        }
        return t;
      }
    },
    4002: function (e, t, n) {
      "use strict";
      n.d(t, {
        q: function () {
          return useSpring;
        },
      });
      var r = n(67294),
        s = n(40406),
        a = n(4960),
        u = n(16014),
        o = n(58868),
        i = n(27159),
        c = n(86917),
        l = n(2074);
      function useSpring(e, t = {}) {
        let { isStatic: n } = (0, r.useContext)(u._),
          m = (0, r.useRef)(null),
          f = (0, a.c)((0, s.i)(e) ? e.get() : e),
          stopAnimation = () => {
            m.current && m.current.stop();
          };
        return (
          (0, r.useInsertionEffect)(
            () =>
              f.attach((e, r) => {
                if (n) return r(e);
                if (
                  (stopAnimation(),
                  (m.current = (0, i.y)({
                    keyframes: [f.get(), e],
                    velocity: f.getVelocity(),
                    type: "spring",
                    restDelta: 0.001,
                    restSpeed: 0.01,
                    ...t,
                    onUpdate: r,
                  })),
                  !l.frameData.isProcessing)
                ) {
                  let e = performance.now() - l.frameData.timestamp;
                  e < 30 && (m.current.time = (0, c.X)(e));
                }
                return f.get();
              }, stopAnimation),
            [JSON.stringify(t)]
          ),
          (0, o.L)(() => {
            if ((0, s.i)(e)) return e.on("change", (e) => f.set(parseFloat(e)));
          }, [f]),
          f
        );
      }
    },
  },
  function (e) {
    e.O(0, [4213, 9774, 2888, 179], function () {
      return e((e.s = 72547));
    }),
      (_N_E = e.O());
  },
]);
