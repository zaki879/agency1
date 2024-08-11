(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9204],
  {
    48610: function (e, n, i) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/demos/curved-menu",
        function () {
          return i(37831);
        },
      ]);
    },
    37831: function (e, n, i) {
      "use strict";
      i.r(n),
        i.d(n, {
          default: function () {
            return Index;
          },
        });
      var t = i(85893),
        a = i(94887),
        r = i.n(a),
        s = i(67294),
        c = i(51526),
        o = i(38940);
      let d = [
          { title: "Home", href: "/" },
          { title: "Work", href: "/work" },
          { title: "About", href: "/about" },
          { title: "Contact", href: "/contact" },
        ],
        l = {
          initial: { x: "calc(100% + 100px)" },
          enter: {
            x: "0",
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
          },
          exit: {
            x: "calc(100% + 100px)",
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
          },
        },
        u = {
          initial: { x: 80 },
          enter: (e) => ({
            x: 0,
            transition: {
              duration: 0.8,
              ease: [0.76, 0, 0.24, 1],
              delay: 0.05 * e,
            },
          }),
          exit: (e) => ({
            x: 80,
            transition: {
              duration: 0.8,
              ease: [0.76, 0, 0.24, 1],
              delay: 0.05 * e,
            },
          }),
        },
        _ = {
          open: { scale: 1, transition: { duration: 0.3 } },
          closed: { scale: 0, transition: { duration: 0.4 } },
        };
      
      // Global variable to control the toggle state
      let toggleState = false;
      
  // curved-menu module (inside the function Index)
function Index() {
  let [toggleState, setToggleState] = (0, s.useState)(true);

  // Function to toggle the menu state
  function toggleMenu() {
    setToggleState(!toggleState);
  }

  // Expose the toggleMenu function to the global scope
  window.toggleMenu = toggleMenu;

  return (0, t.jsxs)(t.Fragment, {
    children: [
      (0, t.jsx)("div", {
        className: r().main,
        children: (0, t.jsx)("div", {
          className: r().curvedHeader,
          children: (0, t.jsx)("div", {
            onClick: () => {
              toggleMenu();
            },
            className: r().button,
            children: (0, t.jsx)("div", {
              className:""
                
                .concat(toggleState ? r().burgerActive : ""),
            }),
          }),
        }),
      }),
      (0, t.jsx)(c.M, {
        mode: "wait",
        children: toggleState && (0, t.jsx)(Nav, {}),
      }),
    ],
  });
}

      function Nav() {
        let [e, n] = (0, s.useState)(0);
        return (0, t.jsxs)(o.E.div, {
          variants: l,
          initial: "initial",
          animate: "enter",
          exit: "exit",
          className: r().curvedMenu,
          children: [
            (0, t.jsxs)("div", {
              className: r().body,
              children: [
                (0, t.jsxs)("div", {
                  onMouseLeave: () => {
                    n(e);
                  },
                  className: r().nav,
                  children: [
                    (0, t.jsx)("div", {
                      className: r().header,
                      children: (0, t.jsx)("p", { children: "Navigation" }),
                    }),
                    d.map((i, a) =>
                      (0, t.jsx)(
                        MenuLink,
                        {
                          data: { ...i, index: a },
                          isActive: e == i.href,
                          setSelectedIndicator: n,
                        },
                        a
                      )
                    ),
                  ],
                }),
                (0, t.jsx)(Footer, {}),
              ],
            }),
            (0, t.jsx)(Curve, {}),
          ],
        });
      }
      
      function MenuLink(e) {
        let { data: n, isActive: i, setSelectedIndicator: a } = e,
          { title: s, href: c, index: d } = n;
        return (0, t.jsxs)(o.E.div, {
          className: r().link,
          onMouseEnter: () => {
            a(d);
          },
          custom: d,
          variants: u,
          initial: "initial",
          animate: "enter",
          exit: "exit",
          children: [
            (0, t.jsx)(o.E.div, {
              variants: _,
              animate: i ? "open" : "closed",
              className: r().indicator,
            }),
            (0, t.jsx)("a", { children: s }),
          ],
        });
      }
      
      function Footer() {
        return (0, t.jsxs)("div", {
          className: r().footer,
          children: [],
        });
      }
      
      function Curve() {
        let e = "M100 0 L200 0 L200 "
            .concat(window.innerHeight, " L100 ")
            .concat(window.innerHeight, " Q-100 ")
            .concat(window.innerHeight / 2, " 100 0"),
          n = "M100 0 L200 0 L200 "
            .concat(window.innerHeight, " L100 ")
            .concat(window.innerHeight, " Q100 ")
            .concat(window.innerHeight / 2, " 100 0");
        return (0, t.jsx)("svg", {
          className: r().svgCurve,
          children: (0, t.jsx)(o.E.path, {
            variants: {
              initial: { d: e },
              enter: {
                d: n,
                transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
              },
              exit: {
                d: e,
                transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
              },
            },
            initial: "initial",
            animate: "enter",
            exit: "exit",
          }),
        });
      }
    },
    94887: function (e) {
      e.exports = {
        curvedHeader: "style_curvedHeader__lwohA",
     
        burger: "style_burger__YPeB9",
        burgerActive: "style_burgerActive__SXsG1",
        curvedMenu: "style_curvedMenu__IyfE2",
        body: "style_body__nj5FN",
        nav: "style_nav__YlOQi",
        header: "style_header__PNY9p",
        link: "style_link__bNtTR",
        indicator: "style_indicator__i7rk_",
        footer: "style_footer__y5g7G",
        svgCurve: "style_svgCurve__6arGl",
      };
    },
  },
  function (e) {
    e.O(0, [9774, 2888, 179], function () {
      return e((e.s = 48610));
    }),
      (_N_E = e.O());
  },
]);
