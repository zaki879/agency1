(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4088],
  {
    9008: function (e, t, n) {
      e.exports = n(79201);
    },
    27087: function (e, t, n) {
      "use strict";
      n.d(t, {
        ZP: function () {
          return S;
        },
        lG: function () {
          return v;
        },
      });
      /**
       * Prism: Lightweight, robust, elegant syntax highlighting
       *
       * @license MIT <https://opensource.org/licenses/MIT>
       * @author Lea Verou <https://lea.verou.me>
       * @namespace
       * @public
       */ var a,
        r,
        i,
        s,
        o,
        l,
        u,
        c,
        d,
        p,
        g,
        f,
        h,
        m,
        b,
        y = (function () {
          var e = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,
            t = 0,
            n = {},
            a = {
              util: {
                encode: function encode(e) {
                  return e instanceof Token
                    ? new Token(e.type, encode(e.content), e.alias)
                    : Array.isArray(e)
                    ? e.map(encode)
                    : e
                        .replace(/&/g, "&amp;")
                        .replace(/</g, "&lt;")
                        .replace(/\u00a0/g, " ");
                },
                type: function (e) {
                  return Object.prototype.toString.call(e).slice(8, -1);
                },
                objId: function (e) {
                  return (
                    e.__id || Object.defineProperty(e, "__id", { value: ++t }),
                    e.__id
                  );
                },
                clone: function deepClone(e, t) {
                  var n, r;
                  switch (((t = t || {}), a.util.type(e))) {
                    case "Object":
                      if (t[(r = a.util.objId(e))]) return t[r];
                      for (var i in ((n = {}), (t[r] = n), e))
                        e.hasOwnProperty(i) && (n[i] = deepClone(e[i], t));
                      return n;
                    case "Array":
                      if (t[(r = a.util.objId(e))]) return t[r];
                      return (
                        (n = []),
                        (t[r] = n),
                        e.forEach(function (e, a) {
                          n[a] = deepClone(e, t);
                        }),
                        n
                      );
                    default:
                      return e;
                  }
                },
                getLanguage: function (t) {
                  for (; t; ) {
                    var n = e.exec(t.className);
                    if (n) return n[1].toLowerCase();
                    t = t.parentElement;
                  }
                  return "none";
                },
                setLanguage: function (t, n) {
                  (t.className = t.className.replace(RegExp(e, "gi"), "")),
                    t.classList.add("language-" + n);
                },
                isActive: function (e, t, n) {
                  for (var a = "no-" + t; e; ) {
                    var r = e.classList;
                    if (r.contains(t)) return !0;
                    if (r.contains(a)) return !1;
                    e = e.parentElement;
                  }
                  return !!n;
                },
              },
              languages: {
                plain: n,
                plaintext: n,
                text: n,
                txt: n,
                extend: function (e, t) {
                  var n = a.util.clone(a.languages[e]);
                  for (var r in t) n[r] = t[r];
                  return n;
                },
                insertBefore: function (e, t, n, r) {
                  var i = (r = r || a.languages)[e],
                    s = {};
                  for (var o in i)
                    if (i.hasOwnProperty(o)) {
                      if (o == t)
                        for (var l in n) n.hasOwnProperty(l) && (s[l] = n[l]);
                      n.hasOwnProperty(o) || (s[o] = i[o]);
                    }
                  var u = r[e];
                  return (
                    (r[e] = s),
                    a.languages.DFS(a.languages, function (t, n) {
                      n === u && t != e && (this[t] = s);
                    }),
                    s
                  );
                },
                DFS: function DFS(e, t, n, r) {
                  r = r || {};
                  var i = a.util.objId;
                  for (var s in e)
                    if (e.hasOwnProperty(s)) {
                      t.call(e, s, e[s], n || s);
                      var o = e[s],
                        l = a.util.type(o);
                      "Object" !== l || r[i(o)]
                        ? "Array" !== l ||
                          r[i(o)] ||
                          ((r[i(o)] = !0), DFS(o, t, s, r))
                        : ((r[i(o)] = !0), DFS(o, t, null, r));
                    }
                },
              },
              plugins: {},
              highlight: function (e, t, n) {
                var r = { code: e, grammar: t, language: n };
                return (
                  a.hooks.run("before-tokenize", r),
                  (r.tokens = a.tokenize(r.code, r.grammar)),
                  a.hooks.run("after-tokenize", r),
                  Token.stringify(a.util.encode(r.tokens), r.language)
                );
              },
              tokenize: function (e, t) {
                var n = t.rest;
                if (n) {
                  for (var r in n) t[r] = n[r];
                  delete t.rest;
                }
                var i = new LinkedList();
                return (
                  addAfter(i, i.head, e),
                  (function matchGrammar(e, t, n, r, i, s) {
                    for (var o in n)
                      if (n.hasOwnProperty(o) && n[o]) {
                        var l = n[o];
                        l = Array.isArray(l) ? l : [l];
                        for (var u = 0; u < l.length; ++u) {
                          if (s && s.cause == o + "," + u) return;
                          var c = l[u],
                            d = c.inside,
                            p = !!c.lookbehind,
                            g = !!c.greedy,
                            f = c.alias;
                          if (g && !c.pattern.global) {
                            var h = c.pattern.toString().match(/[imsuy]*$/)[0];
                            c.pattern = RegExp(c.pattern.source, h + "g");
                          }
                          for (
                            var m = c.pattern || c, b = r.next, y = i;
                            b !== t.tail && (!s || !(y >= s.reach));
                            y += b.value.length, b = b.next
                          ) {
                            var k,
                              v = b.value;
                            if (t.length > e.length) return;
                            if (!(v instanceof Token)) {
                              var w = 1;
                              if (g) {
                                if (
                                  !(k = matchPattern(m, y, e, p)) ||
                                  k.index >= e.length
                                )
                                  break;
                                var S = k.index,
                                  E = k.index + k[0].length,
                                  A = y;
                                for (A += b.value.length; S >= A; )
                                  A += (b = b.next).value.length;
                                if (
                                  ((A -= b.value.length),
                                  (y = A),
                                  b.value instanceof Token)
                                )
                                  continue;
                                for (
                                  var x = b;
                                  x !== t.tail &&
                                  (A < E || "string" == typeof x.value);
                                  x = x.next
                                )
                                  w++, (A += x.value.length);
                                w--, (v = e.slice(y, A)), (k.index -= y);
                              } else if (!(k = matchPattern(m, 0, v, p)))
                                continue;
                              var S = k.index,
                                T = k[0],
                                F = v.slice(0, S),
                                _ = v.slice(S + T.length),
                                O = y + v.length;
                              s && O > s.reach && (s.reach = O);
                              var R = b.prev;
                              if (
                                (F &&
                                  ((R = addAfter(t, R, F)), (y += F.length)),
                                (function (e, t, n) {
                                  for (
                                    var a = t.next, r = 0;
                                    r < n && a !== e.tail;
                                    r++
                                  )
                                    a = a.next;
                                  (t.next = a), (a.prev = t), (e.length -= r);
                                })(t, R, w),
                                (b = addAfter(
                                  t,
                                  R,
                                  new Token(o, d ? a.tokenize(T, d) : T, f, T)
                                )),
                                _ && addAfter(t, b, _),
                                w > 1)
                              ) {
                                var I = { cause: o + "," + u, reach: O };
                                matchGrammar(e, t, n, b.prev, y, I),
                                  s && I.reach > s.reach && (s.reach = I.reach);
                              }
                            }
                          }
                        }
                      }
                  })(e, i, t, i.head, 0),
                  (function (e) {
                    for (var t = [], n = e.head.next; n !== e.tail; )
                      t.push(n.value), (n = n.next);
                    return t;
                  })(i)
                );
              },
              hooks: {
                all: {},
                add: function (e, t) {
                  var n = a.hooks.all;
                  (n[e] = n[e] || []), n[e].push(t);
                },
                run: function (e, t) {
                  var n = a.hooks.all[e];
                  if (n && n.length) for (var r, i = 0; (r = n[i++]); ) r(t);
                },
              },
              Token: Token,
            };
          function Token(e, t, n, a) {
            (this.type = e),
              (this.content = t),
              (this.alias = n),
              (this.length = 0 | (a || "").length);
          }
          function matchPattern(e, t, n, a) {
            e.lastIndex = t;
            var r = e.exec(n);
            if (r && a && r[1]) {
              var i = r[1].length;
              (r.index += i), (r[0] = r[0].slice(i));
            }
            return r;
          }
          function LinkedList() {
            var e = { value: null, prev: null, next: null },
              t = { value: null, prev: e, next: null };
            (e.next = t), (this.head = e), (this.tail = t), (this.length = 0);
          }
          function addAfter(e, t, n) {
            var a = t.next,
              r = { value: n, prev: t, next: a };
            return (t.next = r), (a.prev = r), e.length++, r;
          }
          return (
            (Token.stringify = function stringify(e, t) {
              if ("string" == typeof e) return e;
              if (Array.isArray(e)) {
                var n = "";
                return (
                  e.forEach(function (e) {
                    n += stringify(e, t);
                  }),
                  n
                );
              }
              var r = {
                  type: e.type,
                  content: stringify(e.content, t),
                  tag: "span",
                  classes: ["token", e.type],
                  attributes: {},
                  language: t,
                },
                i = e.alias;
              i &&
                (Array.isArray(i)
                  ? Array.prototype.push.apply(r.classes, i)
                  : r.classes.push(i)),
                a.hooks.run("wrap", r);
              var s = "";
              for (var o in r.attributes)
                s +=
                  " " +
                  o +
                  '="' +
                  (r.attributes[o] || "").replace(/"/g, "&quot;") +
                  '"';
              return (
                "<" +
                r.tag +
                ' class="' +
                r.classes.join(" ") +
                '"' +
                s +
                ">" +
                r.content +
                "</" +
                r.tag +
                ">"
              );
            }),
            a
          );
        })();
      (y.default = y),
        (y.languages.markup = {
          comment: { pattern: /<!--(?:(?!<!--)[\s\S])*?-->/, greedy: !0 },
          prolog: { pattern: /<\?[\s\S]+?\?>/, greedy: !0 },
          doctype: {
            pattern:
              /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
            greedy: !0,
            inside: {
              "internal-subset": {
                pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
                lookbehind: !0,
                greedy: !0,
                inside: null,
              },
              string: { pattern: /"[^"]*"|'[^']*'/, greedy: !0 },
              punctuation: /^<!|>$|[[\]]/,
              "doctype-tag": /^DOCTYPE/i,
              name: /[^\s<>'"]+/,
            },
          },
          cdata: { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, greedy: !0 },
          tag: {
            pattern:
              /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
            greedy: !0,
            inside: {
              tag: {
                pattern: /^<\/?[^\s>\/]+/,
                inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ },
              },
              "special-attr": [],
              "attr-value": {
                pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
                inside: {
                  punctuation: [{ pattern: /^=/, alias: "attr-equals" }, /"|'/],
                },
              },
              punctuation: /\/?>/,
              "attr-name": {
                pattern: /[^\s>\/]+/,
                inside: { namespace: /^[^\s>\/:]+:/ },
              },
            },
          },
          entity: [
            { pattern: /&[\da-z]{1,8};/i, alias: "named-entity" },
            /&#x?[\da-f]{1,8};/i,
          ],
        }),
        (y.languages.markup.tag.inside["attr-value"].inside.entity =
          y.languages.markup.entity),
        (y.languages.markup.doctype.inside["internal-subset"].inside =
          y.languages.markup),
        y.hooks.add("wrap", function (e) {
          "entity" === e.type &&
            (e.attributes.title = e.content.replace(/&amp;/, "&"));
        }),
        Object.defineProperty(y.languages.markup.tag, "addInlined", {
          value: function (e, t) {
            var n = {};
            (n["language-" + t] = {
              pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
              lookbehind: !0,
              inside: y.languages[t],
            }),
              (n.cdata = /^<!\[CDATA\[|\]\]>$/i);
            var a = {
              "included-cdata": {
                pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
                inside: n,
              },
            };
            a["language-" + t] = { pattern: /[\s\S]+/, inside: y.languages[t] };
            var r = {};
            (r[e] = {
              pattern: RegExp(
                /(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(
                  /__/g,
                  function () {
                    return e;
                  }
                ),
                "i"
              ),
              lookbehind: !0,
              greedy: !0,
              inside: a,
            }),
              y.languages.insertBefore("markup", "cdata", r);
          },
        }),
        Object.defineProperty(y.languages.markup.tag, "addAttribute", {
          value: function (e, t) {
            y.languages.markup.tag.inside["special-attr"].push({
              pattern: RegExp(
                /(^|["'\s])/.source +
                  "(?:" +
                  e +
                  ")" +
                  /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,
                "i"
              ),
              lookbehind: !0,
              inside: {
                "attr-name": /^[^\s=]+/,
                "attr-value": {
                  pattern: /=[\s\S]+/,
                  inside: {
                    value: {
                      pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                      lookbehind: !0,
                      alias: [t, "language-" + t],
                      inside: y.languages[t],
                    },
                    punctuation: [
                      { pattern: /^=/, alias: "attr-equals" },
                      /"|'/,
                    ],
                  },
                },
              },
            });
          },
        }),
        (y.languages.html = y.languages.markup),
        (y.languages.mathml = y.languages.markup),
        (y.languages.svg = y.languages.markup),
        (y.languages.xml = y.languages.extend("markup", {})),
        (y.languages.ssml = y.languages.xml),
        (y.languages.atom = y.languages.xml),
        (y.languages.rss = y.languages.xml),
        (function (e) {
          var t =
              "\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",
            n = {
              pattern: /(^(["']?)\w+\2)[ \t]+\S.*/,
              lookbehind: !0,
              alias: "punctuation",
              inside: null,
            },
            a = {
              bash: n,
              environment: { pattern: RegExp("\\$" + t), alias: "constant" },
              variable: [
                {
                  pattern: /\$?\(\([\s\S]+?\)\)/,
                  greedy: !0,
                  inside: {
                    variable: [
                      { pattern: /(^\$\(\([\s\S]+)\)\)/, lookbehind: !0 },
                      /^\$\(\(/,
                    ],
                    number:
                      /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,
                    operator:
                      /--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,
                    punctuation: /\(\(?|\)\)?|,|;/,
                  },
                },
                {
                  pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,
                  greedy: !0,
                  inside: { variable: /^\$\(|^`|\)$|`$/ },
                },
                {
                  pattern: /\$\{[^}]+\}/,
                  greedy: !0,
                  inside: {
                    operator: /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,
                    punctuation: /[\[\]]/,
                    environment: {
                      pattern: RegExp("(\\{)" + t),
                      lookbehind: !0,
                      alias: "constant",
                    },
                  },
                },
                /\$(?:\w+|[#?*!@$])/,
              ],
              entity:
                /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/,
            };
          (e.languages.bash = {
            shebang: { pattern: /^#!\s*\/.*/, alias: "important" },
            comment: { pattern: /(^|[^"{\\$])#.*/, lookbehind: !0 },
            "function-name": [
              {
                pattern: /(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,
                lookbehind: !0,
                alias: "function",
              },
              { pattern: /\b[\w-]+(?=\s*\(\s*\)\s*\{)/, alias: "function" },
            ],
            "for-or-select": {
              pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/,
              alias: "variable",
              lookbehind: !0,
            },
            "assign-left": {
              pattern: /(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,
              inside: {
                environment: {
                  pattern: RegExp("(^|[\\s;|&]|[<>]\\()" + t),
                  lookbehind: !0,
                  alias: "constant",
                },
              },
              alias: "variable",
              lookbehind: !0,
            },
            string: [
              {
                pattern: /((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,
                lookbehind: !0,
                greedy: !0,
                inside: a,
              },
              {
                pattern:
                  /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,
                lookbehind: !0,
                greedy: !0,
                inside: { bash: n },
              },
              {
                pattern:
                  /(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,
                lookbehind: !0,
                greedy: !0,
                inside: a,
              },
              { pattern: /(^|[^$\\])'[^']*'/, lookbehind: !0, greedy: !0 },
              {
                pattern: /\$'(?:[^'\\]|\\[\s\S])*'/,
                greedy: !0,
                inside: { entity: a.entity },
              },
            ],
            environment: { pattern: RegExp("\\$?" + t), alias: "constant" },
            variable: a.variable,
            function: {
              pattern:
                /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,
              lookbehind: !0,
            },
            keyword: {
              pattern:
                /(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,
              lookbehind: !0,
            },
            builtin: {
              pattern:
                /(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,
              lookbehind: !0,
              alias: "class-name",
            },
            boolean: {
              pattern: /(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,
              lookbehind: !0,
            },
            "file-descriptor": { pattern: /\B&\d\b/, alias: "important" },
            operator: {
              pattern:
                /\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,
              inside: {
                "file-descriptor": { pattern: /^\d/, alias: "important" },
              },
            },
            punctuation: /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,
            number: {
              pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,
              lookbehind: !0,
            },
          }),
            (n.inside = e.languages.bash);
          for (
            var r = [
                "comment",
                "function-name",
                "for-or-select",
                "assign-left",
                "string",
                "environment",
                "function",
                "keyword",
                "builtin",
                "boolean",
                "file-descriptor",
                "operator",
                "punctuation",
                "number",
              ],
              i = a.variable[1].inside,
              s = 0;
            s < r.length;
            s++
          )
            i[r[s]] = e.languages.bash[r[s]];
          e.languages.shell = e.languages.bash;
        })(y),
        (y.languages.clike = {
          comment: [
            {
              pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
              lookbehind: !0,
              greedy: !0,
            },
            { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 },
          ],
          string: {
            pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
            greedy: !0,
          },
          "class-name": {
            pattern:
              /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
            lookbehind: !0,
            inside: { punctuation: /[.\\]/ },
          },
          keyword:
            /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
          boolean: /\b(?:false|true)\b/,
          function: /\b\w+(?=\()/,
          number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
          operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
          punctuation: /[{}[\];(),.:]/,
        }),
        (y.languages.c = y.languages.extend("clike", {
          comment: {
            pattern:
              /\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,
            greedy: !0,
          },
          string: {
            pattern: /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
            greedy: !0,
          },
          "class-name": {
            pattern:
              /(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,
            lookbehind: !0,
          },
          keyword:
            /\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,
          function: /\b[a-z_]\w*(?=\s*\()/i,
          number:
            /(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,
          operator: />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/,
        })),
        y.languages.insertBefore("c", "string", {
          char: {
            pattern: /'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/,
            greedy: !0,
          },
        }),
        y.languages.insertBefore("c", "string", {
          macro: {
            pattern:
              /(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,
            lookbehind: !0,
            greedy: !0,
            alias: "property",
            inside: {
              string: [
                { pattern: /^(#\s*include\s*)<[^>]+>/, lookbehind: !0 },
                y.languages.c.string,
              ],
              char: y.languages.c.char,
              comment: y.languages.c.comment,
              "macro-name": [
                { pattern: /(^#\s*define\s+)\w+\b(?!\()/i, lookbehind: !0 },
                {
                  pattern: /(^#\s*define\s+)\w+\b(?=\()/i,
                  lookbehind: !0,
                  alias: "function",
                },
              ],
              directive: {
                pattern: /^(#\s*)[a-z]+/,
                lookbehind: !0,
                alias: "keyword",
              },
              "directive-hash": /^#/,
              punctuation: /##|\\(?=[\r\n])/,
              expression: { pattern: /\S[\s\S]*/, inside: y.languages.c },
            },
          },
        }),
        y.languages.insertBefore("c", "function", {
          constant:
            /\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/,
        }),
        delete y.languages.c.boolean,
        (a =
          /\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/),
        (r = /\b(?!<keyword>)\w+(?:\s*\.\s*\w+)*\b/.source.replace(
          /<keyword>/g,
          function () {
            return a.source;
          }
        )),
        (y.languages.cpp = y.languages.extend("c", {
          "class-name": [
            {
              pattern: RegExp(
                /(\b(?:class|concept|enum|struct|typename)\s+)(?!<keyword>)\w+/.source.replace(
                  /<keyword>/g,
                  function () {
                    return a.source;
                  }
                )
              ),
              lookbehind: !0,
            },
            /\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/,
            /\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i,
            /\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/,
          ],
          keyword: a,
          number: {
            pattern:
              /(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,
            greedy: !0,
          },
          operator:
            />>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,
          boolean: /\b(?:false|true)\b/,
        })),
        y.languages.insertBefore("cpp", "string", {
          module: {
            pattern: RegExp(
              /(\b(?:import|module)\s+)/.source +
                "(?:" +
                /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|<[^<>\r\n]*>/.source +
                "|" +
                /<mod-name>(?:\s*:\s*<mod-name>)?|:\s*<mod-name>/.source.replace(
                  /<mod-name>/g,
                  function () {
                    return r;
                  }
                ) +
                ")"
            ),
            lookbehind: !0,
            greedy: !0,
            inside: {
              string: /^[<"][\s\S]+/,
              operator: /:/,
              punctuation: /\./,
            },
          },
          "raw-string": {
            pattern: /R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,
            alias: "string",
            greedy: !0,
          },
        }),
        y.languages.insertBefore("cpp", "keyword", {
          "generic-function": {
            pattern:
              /\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i,
            inside: {
              function: /^\w+/,
              generic: {
                pattern: /<[\s\S]+/,
                alias: "class-name",
                inside: y.languages.cpp,
              },
            },
          },
        }),
        y.languages.insertBefore("cpp", "operator", {
          "double-colon": { pattern: /::/, alias: "punctuation" },
        }),
        y.languages.insertBefore("cpp", "class-name", {
          "base-clause": {
            pattern:
              /(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,
            lookbehind: !0,
            greedy: !0,
            inside: y.languages.extend("cpp", {}),
          },
        }),
        y.languages.insertBefore(
          "inside",
          "double-colon",
          { "class-name": /\b[a-z_]\w*\b(?!\s*::)/i },
          y.languages.cpp["base-clause"]
        ),
        (i =
          /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/),
        (y.languages.css = {
          comment: /\/\*[\s\S]*?\*\//,
          atrule: {
            pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
            inside: {
              rule: /^@[\w-]+/,
              "selector-function-argument": {
                pattern:
                  /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
                lookbehind: !0,
                alias: "selector",
              },
              keyword: {
                pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
                lookbehind: !0,
              },
            },
          },
          url: {
            pattern: RegExp(
              "\\burl\\((?:" +
                i.source +
                "|" +
                /(?:[^\\\r\n()"']|\\[\s\S])*/.source +
                ")\\)",
              "i"
            ),
            greedy: !0,
            inside: {
              function: /^url/i,
              punctuation: /^\(|\)$/,
              string: { pattern: RegExp("^" + i.source + "$"), alias: "url" },
            },
          },
          selector: {
            pattern: RegExp(
              "(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|" +
                i.source +
                ")*(?=\\s*\\{)"
            ),
            lookbehind: !0,
          },
          string: { pattern: i, greedy: !0 },
          property: {
            pattern:
              /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
            lookbehind: !0,
          },
          important: /!important\b/i,
          function: {
            pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
            lookbehind: !0,
          },
          punctuation: /[(){};:,]/,
        }),
        (y.languages.css.atrule.inside.rest = y.languages.css),
        (s = y.languages.markup) &&
          (s.tag.addInlined("style", "css"),
          s.tag.addAttribute("style", "css")),
        (function (e) {
          var t,
            n = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
          (e.languages.css.selector = {
            pattern: e.languages.css.selector.pattern,
            lookbehind: !0,
            inside: (t = {
              "pseudo-element":
                /:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,
              "pseudo-class": /:[-\w]+/,
              class: /\.[-\w]+/,
              id: /#[-\w]+/,
              attribute: {
                pattern: RegExp("\\[(?:[^[\\]\"']|" + n.source + ")*\\]"),
                greedy: !0,
                inside: {
                  punctuation: /^\[|\]$/,
                  "case-sensitivity": {
                    pattern: /(\s)[si]$/i,
                    lookbehind: !0,
                    alias: "keyword",
                  },
                  namespace: {
                    pattern: /^(\s*)(?:(?!\s)[-*\w\xA0-\uFFFF])*\|(?!=)/,
                    lookbehind: !0,
                    inside: { punctuation: /\|$/ },
                  },
                  "attr-name": {
                    pattern: /^(\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+/,
                    lookbehind: !0,
                  },
                  "attr-value": [
                    n,
                    {
                      pattern: /(=\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+(?=\s*$)/,
                      lookbehind: !0,
                    },
                  ],
                  operator: /[|~*^$]?=/,
                },
              },
              "n-th": [
                {
                  pattern: /(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,
                  lookbehind: !0,
                  inside: { number: /[\dn]+/, operator: /[+-]/ },
                },
                { pattern: /(\(\s*)(?:even|odd)(?=\s*\))/i, lookbehind: !0 },
              ],
              combinator: />|\+|~|\|\|/,
              punctuation: /[(),]/,
            }),
          }),
            (e.languages.css.atrule.inside[
              "selector-function-argument"
            ].inside = t),
            e.languages.insertBefore("css", "property", {
              variable: {
                pattern:
                  /(^|[^-\w\xA0-\uFFFF])--(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*/i,
                lookbehind: !0,
              },
            });
          var a = { pattern: /(\b\d+)(?:%|[a-z]+(?![\w-]))/, lookbehind: !0 },
            r = {
              pattern: /(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,
              lookbehind: !0,
            };
          e.languages.insertBefore("css", "function", {
            operator: { pattern: /(\s)[+\-*\/](?=\s)/, lookbehind: !0 },
            hexcode: { pattern: /\B#[\da-f]{3,8}\b/i, alias: "color" },
            color: [
              {
                pattern:
                  /(^|[^\w-])(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)(?![\w-])/i,
                lookbehind: !0,
              },
              {
                pattern:
                  /\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,
                inside: {
                  unit: a,
                  number: r,
                  function: /[\w-]+(?=\()/,
                  punctuation: /[(),]/,
                },
              },
            ],
            entity: /\\[\da-f]{1,8}/i,
            unit: a,
            number: r,
          });
        })(y),
        (y.languages.javascript = y.languages.extend("clike", {
          "class-name": [
            y.languages.clike["class-name"],
            {
              pattern:
                /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
              lookbehind: !0,
            },
          ],
          keyword: [
            { pattern: /((?:^|\})\s*)catch\b/, lookbehind: !0 },
            {
              pattern:
                /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
              lookbehind: !0,
            },
          ],
          function:
            /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
          number: {
            pattern: RegExp(
              /(^|[^\w$])/.source +
                "(?:" +
                (/NaN|Infinity/.source +
                  "|" +
                  /0[bB][01]+(?:_[01]+)*n?/.source +
                  "|" +
                  /0[oO][0-7]+(?:_[0-7]+)*n?/.source +
                  "|" +
                  /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source +
                  "|") +
                /\d+(?:_\d+)*n/.source +
                "|" +
                /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/
                  .source +
                ")" +
                /(?![\w$])/.source
            ),
            lookbehind: !0,
          },
          operator:
            /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/,
        })),
        (y.languages.javascript["class-name"][0].pattern =
          /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/),
        y.languages.insertBefore("javascript", "keyword", {
          regex: {
            pattern:
              /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
            lookbehind: !0,
            greedy: !0,
            inside: {
              "regex-source": {
                pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
                lookbehind: !0,
                alias: "language-regex",
                inside: y.languages.regex,
              },
              "regex-delimiter": /^\/|\/$/,
              "regex-flags": /^[a-z]+$/,
            },
          },
          "function-variable": {
            pattern:
              /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
            alias: "function",
          },
          parameter: [
            {
              pattern:
                /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
              lookbehind: !0,
              inside: y.languages.javascript,
            },
            {
              pattern:
                /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
              lookbehind: !0,
              inside: y.languages.javascript,
            },
            {
              pattern:
                /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
              lookbehind: !0,
              inside: y.languages.javascript,
            },
            {
              pattern:
                /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
              lookbehind: !0,
              inside: y.languages.javascript,
            },
          ],
          constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/,
        }),
        y.languages.insertBefore("javascript", "string", {
          hashbang: { pattern: /^#!.*/, greedy: !0, alias: "comment" },
          "template-string": {
            pattern:
              /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
            greedy: !0,
            inside: {
              "template-punctuation": { pattern: /^`|`$/, alias: "string" },
              interpolation: {
                pattern:
                  /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
                lookbehind: !0,
                inside: {
                  "interpolation-punctuation": {
                    pattern: /^\$\{|\}$/,
                    alias: "punctuation",
                  },
                  rest: y.languages.javascript,
                },
              },
              string: /[\s\S]+/,
            },
          },
          "string-property": {
            pattern:
              /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
            lookbehind: !0,
            greedy: !0,
            alias: "property",
          },
        }),
        y.languages.insertBefore("javascript", "operator", {
          "literal-property": {
            pattern:
              /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
            lookbehind: !0,
            alias: "property",
          },
        }),
        y.languages.markup &&
          (y.languages.markup.tag.addInlined("script", "javascript"),
          y.languages.markup.tag.addAttribute(
            /on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/
              .source,
            "javascript"
          )),
        (y.languages.js = y.languages.javascript),
        (o = /#(?!\{).+/),
        (l = { pattern: /#\{[^}]+\}/, alias: "variable" }),
        (y.languages.coffeescript = y.languages.extend("javascript", {
          comment: o,
          string: [
            { pattern: /'(?:\\[\s\S]|[^\\'])*'/, greedy: !0 },
            {
              pattern: /"(?:\\[\s\S]|[^\\"])*"/,
              greedy: !0,
              inside: { interpolation: l },
            },
          ],
          keyword:
            /\b(?:and|break|by|catch|class|continue|debugger|delete|do|each|else|extend|extends|false|finally|for|if|in|instanceof|is|isnt|let|loop|namespace|new|no|not|null|of|off|on|or|own|return|super|switch|then|this|throw|true|try|typeof|undefined|unless|until|when|while|window|with|yes|yield)\b/,
          "class-member": { pattern: /@(?!\d)\w+/, alias: "variable" },
        })),
        y.languages.insertBefore("coffeescript", "comment", {
          "multiline-comment": { pattern: /###[\s\S]+?###/, alias: "comment" },
          "block-regex": {
            pattern: /\/{3}[\s\S]*?\/{3}/,
            alias: "regex",
            inside: { comment: o, interpolation: l },
          },
        }),
        y.languages.insertBefore("coffeescript", "string", {
          "inline-javascript": {
            pattern: /`(?:\\[\s\S]|[^\\`])*`/,
            inside: {
              delimiter: { pattern: /^`|`$/, alias: "punctuation" },
              script: {
                pattern: /[\s\S]+/,
                alias: "language-javascript",
                inside: y.languages.javascript,
              },
            },
          },
          "multiline-string": [
            { pattern: /'''[\s\S]*?'''/, greedy: !0, alias: "string" },
            {
              pattern: /"""[\s\S]*?"""/,
              greedy: !0,
              alias: "string",
              inside: { interpolation: l },
            },
          ],
        }),
        y.languages.insertBefore("coffeescript", "keyword", {
          property: /(?!\d)\w+(?=\s*:(?!:))/,
        }),
        delete y.languages.coffeescript["template-string"],
        (y.languages.coffee = y.languages.coffeescript),
        (function (e) {
          var t = /[*&][^\s[\]{},]+/,
            n =
              /!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,
            a =
              "(?:" +
              n.source +
              "(?:[ 	]+" +
              t.source +
              ")?|" +
              t.source +
              "(?:[ 	]+" +
              n.source +
              ")?)",
            r =
              /(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(
                /<PLAIN>/g,
                function () {
                  return /[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/
                    .source;
                }
              ),
            i = /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;
          function createValuePattern(e, t) {
            return (
              (t = (t || "").replace(/m/g, "") + "m"),
              RegExp(
                /([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source
                  .replace(/<<prop>>/g, function () {
                    return a;
                  })
                  .replace(/<<value>>/g, function () {
                    return e;
                  }),
                t
              )
            );
          }
          (e.languages.yaml = {
            scalar: {
              pattern: RegExp(
                /([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(
                  /<<prop>>/g,
                  function () {
                    return a;
                  }
                )
              ),
              lookbehind: !0,
              alias: "string",
            },
            comment: /#.*/,
            key: {
              pattern: RegExp(
                /((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source
                  .replace(/<<prop>>/g, function () {
                    return a;
                  })
                  .replace(/<<key>>/g, function () {
                    return "(?:" + r + "|" + i + ")";
                  })
              ),
              lookbehind: !0,
              greedy: !0,
              alias: "atrule",
            },
            directive: {
              pattern: /(^[ \t]*)%.+/m,
              lookbehind: !0,
              alias: "important",
            },
            datetime: {
              pattern: createValuePattern(
                /\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/
                  .source
              ),
              lookbehind: !0,
              alias: "number",
            },
            boolean: {
              pattern: createValuePattern(/false|true/.source, "i"),
              lookbehind: !0,
              alias: "important",
            },
            null: {
              pattern: createValuePattern(/null|~/.source, "i"),
              lookbehind: !0,
              alias: "important",
            },
            string: {
              pattern: createValuePattern(i),
              lookbehind: !0,
              greedy: !0,
            },
            number: {
              pattern: createValuePattern(
                /[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/
                  .source,
                "i"
              ),
              lookbehind: !0,
            },
            tag: n,
            important: t,
            punctuation: /---|[:[\]{}\-,|>?]|\.\.\./,
          }),
            (e.languages.yml = e.languages.yaml);
        })(y),
        (function (e) {
          var t = /(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;
          function createInline(e) {
            return (
              (e = e.replace(/<inner>/g, function () {
                return t;
              })),
              RegExp(/((?:^|[^\\])(?:\\{2})*)/.source + "(?:" + e + ")")
            );
          }
          var n = /(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/
              .source,
            a = /\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(
              /__/g,
              function () {
                return n;
              }
            ),
            r =
              /\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/
                .source;
          (e.languages.markdown = e.languages.extend("markup", {})),
            e.languages.insertBefore("markdown", "prolog", {
              "front-matter-block": {
                pattern: /(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,
                lookbehind: !0,
                greedy: !0,
                inside: {
                  punctuation: /^---|---$/,
                  "front-matter": {
                    pattern: /\S+(?:\s+\S+)*/,
                    alias: ["yaml", "language-yaml"],
                    inside: e.languages.yaml,
                  },
                },
              },
              blockquote: { pattern: /^>(?:[\t ]*>)*/m, alias: "punctuation" },
              table: {
                pattern: RegExp("^" + a + r + "(?:" + a + ")*", "m"),
                inside: {
                  "table-data-rows": {
                    pattern: RegExp("^(" + a + r + ")(?:" + a + ")*$"),
                    lookbehind: !0,
                    inside: {
                      "table-data": {
                        pattern: RegExp(n),
                        inside: e.languages.markdown,
                      },
                      punctuation: /\|/,
                    },
                  },
                  "table-line": {
                    pattern: RegExp("^(" + a + ")" + r + "$"),
                    lookbehind: !0,
                    inside: { punctuation: /\||:?-{3,}:?/ },
                  },
                  "table-header-row": {
                    pattern: RegExp("^" + a + "$"),
                    inside: {
                      "table-header": {
                        pattern: RegExp(n),
                        alias: "important",
                        inside: e.languages.markdown,
                      },
                      punctuation: /\|/,
                    },
                  },
                },
              },
              code: [
                {
                  pattern:
                    /((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,
                  lookbehind: !0,
                  alias: "keyword",
                },
                {
                  pattern: /^```[\s\S]*?^```$/m,
                  greedy: !0,
                  inside: {
                    "code-block": {
                      pattern:
                        /^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,
                      lookbehind: !0,
                    },
                    "code-language": { pattern: /^(```).+/, lookbehind: !0 },
                    punctuation: /```/,
                  },
                },
              ],
              title: [
                {
                  pattern: /\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,
                  alias: "important",
                  inside: { punctuation: /==+$|--+$/ },
                },
                {
                  pattern: /(^\s*)#.+/m,
                  lookbehind: !0,
                  alias: "important",
                  inside: { punctuation: /^#+|#+$/ },
                },
              ],
              hr: {
                pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,
                lookbehind: !0,
                alias: "punctuation",
              },
              list: {
                pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
                lookbehind: !0,
                alias: "punctuation",
              },
              "url-reference": {
                pattern:
                  /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
                inside: {
                  variable: { pattern: /^(!?\[)[^\]]+/, lookbehind: !0 },
                  string:
                    /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
                  punctuation: /^[\[\]!:]|[<>]/,
                },
                alias: "url",
              },
              bold: {
                pattern: createInline(
                  /\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/
                    .source
                ),
                lookbehind: !0,
                greedy: !0,
                inside: {
                  content: {
                    pattern: /(^..)[\s\S]+(?=..$)/,
                    lookbehind: !0,
                    inside: {},
                  },
                  punctuation: /\*\*|__/,
                },
              },
              italic: {
                pattern: createInline(
                  /\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/
                    .source
                ),
                lookbehind: !0,
                greedy: !0,
                inside: {
                  content: {
                    pattern: /(^.)[\s\S]+(?=.$)/,
                    lookbehind: !0,
                    inside: {},
                  },
                  punctuation: /[*_]/,
                },
              },
              strike: {
                pattern: createInline(/(~~?)(?:(?!~)<inner>)+\2/.source),
                lookbehind: !0,
                greedy: !0,
                inside: {
                  content: {
                    pattern: /(^~~?)[\s\S]+(?=\1$)/,
                    lookbehind: !0,
                    inside: {},
                  },
                  punctuation: /~~?/,
                },
              },
              "code-snippet": {
                pattern:
                  /(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,
                lookbehind: !0,
                greedy: !0,
                alias: ["code", "keyword"],
              },
              url: {
                pattern: createInline(
                  /!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/
                    .source
                ),
                lookbehind: !0,
                greedy: !0,
                inside: {
                  operator: /^!/,
                  content: {
                    pattern: /(^\[)[^\]]+(?=\])/,
                    lookbehind: !0,
                    inside: {},
                  },
                  variable: {
                    pattern: /(^\][ \t]?\[)[^\]]+(?=\]$)/,
                    lookbehind: !0,
                  },
                  url: { pattern: /(^\]\()[^\s)]+/, lookbehind: !0 },
                  string: {
                    pattern: /(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,
                    lookbehind: !0,
                  },
                },
              },
            }),
            ["url", "bold", "italic", "strike"].forEach(function (t) {
              ["url", "bold", "italic", "strike", "code-snippet"].forEach(
                function (n) {
                  t !== n &&
                    (e.languages.markdown[t].inside.content.inside[n] =
                      e.languages.markdown[n]);
                }
              );
            }),
            e.hooks.add("after-tokenize", function (e) {
              ("markdown" === e.language || "md" === e.language) &&
                (function walkTokens(e) {
                  if (e && "string" != typeof e)
                    for (var t = 0, n = e.length; t < n; t++) {
                      var a = e[t];
                      if ("code" !== a.type) {
                        walkTokens(a.content);
                        continue;
                      }
                      var r = a.content[1],
                        i = a.content[3];
                      if (
                        r &&
                        i &&
                        "code-language" === r.type &&
                        "code-block" === i.type &&
                        "string" == typeof r.content
                      ) {
                        var s = r.content
                            .replace(/\b#/g, "sharp")
                            .replace(/\b\+\+/g, "pp"),
                          o =
                            "language-" +
                            (s = (/[a-z][\w-]*/i.exec(s) || [
                              "",
                            ])[0].toLowerCase());
                        i.alias
                          ? "string" == typeof i.alias
                            ? (i.alias = [i.alias, o])
                            : i.alias.push(o)
                          : (i.alias = [o]);
                      }
                    }
                })(e.tokens);
            }),
            e.hooks.add("wrap", function (t) {
              if ("code-block" === t.type) {
                for (var n, a = "", r = 0, l = t.classes.length; r < l; r++) {
                  var u = t.classes[r],
                    c = /language-(.+)/.exec(u);
                  if (c) {
                    a = c[1];
                    break;
                  }
                }
                var d = e.languages[a];
                if (d)
                  t.content = e.highlight(
                    t.content
                      .replace(i, "")
                      .replace(
                        /&(\w{1,8}|#x?[\da-f]{1,8});/gi,
                        function (e, t) {
                          return "#" === (t = t.toLowerCase())[0]
                            ? o(
                                "x" === t[1]
                                  ? parseInt(t.slice(2), 16)
                                  : Number(t.slice(1))
                              )
                            : s[t] || e;
                        }
                      ),
                    d,
                    a
                  );
                else if (a && "none" !== a && e.plugins.autoloader) {
                  var p =
                    "md-" +
                    new Date().valueOf() +
                    "-" +
                    Math.floor(1e16 * Math.random());
                  (t.attributes.id = p),
                    e.plugins.autoloader.loadLanguages(a, function () {
                      var t = document.getElementById(p);
                      t &&
                        (t.innerHTML = e.highlight(
                          t.textContent,
                          e.languages[a],
                          a
                        ));
                    });
                }
              }
            });
          var i = RegExp(e.languages.markup.tag.pattern.source, "gi"),
            s = { amp: "&", lt: "<", gt: ">", quot: '"' },
            o = String.fromCodePoint || String.fromCharCode;
          e.languages.md = e.languages.markdown;
        })(y),
        (y.languages.graphql = {
          comment: /#.*/,
          description: {
            pattern:
              /(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i,
            greedy: !0,
            alias: "string",
            inside: {
              "language-markdown": {
                pattern: /(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/,
                lookbehind: !0,
                inside: y.languages.markdown,
              },
            },
          },
          string: {
            pattern: /"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/,
            greedy: !0,
          },
          number: /(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
          boolean: /\b(?:false|true)\b/,
          variable: /\$[a-z_]\w*/i,
          directive: { pattern: /@[a-z_]\w*/i, alias: "function" },
          "attr-name": {
            pattern:
              /\b[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i,
            greedy: !0,
          },
          "atom-input": { pattern: /\b[A-Z]\w*Input\b/, alias: "class-name" },
          scalar: /\b(?:Boolean|Float|ID|Int|String)\b/,
          constant: /\b[A-Z][A-Z_\d]*\b/,
          "class-name": {
            pattern:
              /(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*|:\s*|\[)[A-Z_]\w*/,
            lookbehind: !0,
          },
          fragment: {
            pattern: /(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/,
            lookbehind: !0,
            alias: "function",
          },
          "definition-mutation": {
            pattern: /(\bmutation\s+)[a-zA-Z_]\w*/,
            lookbehind: !0,
            alias: "function",
          },
          "definition-query": {
            pattern: /(\bquery\s+)[a-zA-Z_]\w*/,
            lookbehind: !0,
            alias: "function",
          },
          keyword:
            /\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/,
          operator: /[!=|&]|\.{3}/,
          "property-query": /\w+(?=\s*\()/,
          object: /\w+(?=\s*\{)/,
          punctuation: /[!(){}\[\]:=,]/,
          property: /\w+/,
        }),
        y.hooks.add("after-tokenize", function (e) {
          if ("graphql" === e.language)
            for (
              var t = e.tokens.filter(function (e) {
                  return (
                    "string" != typeof e &&
                    "comment" !== e.type &&
                    "scalar" !== e.type
                  );
                }),
                n = 0;
              n < t.length;

            ) {
              var a = t[n++];
              if ("keyword" === a.type && "mutation" === a.content) {
                var r = [];
                if (
                  isTokenType(["definition-mutation", "punctuation"]) &&
                  "(" === t[n + 1].content
                ) {
                  n += 2;
                  var i = findClosingBracket(/^\($/, /^\)$/);
                  if (-1 === i) continue;
                  for (; n < i; n++) {
                    var s = t[n + 0];
                    "variable" === s.type &&
                      (addAlias(s, "variable-input"), r.push(s.content));
                  }
                  n = i + 1;
                }
                if (
                  isTokenType(["punctuation", "property-query"]) &&
                  "{" === t[n + 0].content &&
                  (addAlias(t[++n + 0], "property-mutation"), r.length > 0)
                ) {
                  var o = findClosingBracket(/^\{$/, /^\}$/);
                  if (-1 === o) continue;
                  for (var l = n; l < o; l++) {
                    var u = t[l];
                    "variable" === u.type &&
                      r.indexOf(u.content) >= 0 &&
                      addAlias(u, "variable-input");
                  }
                }
              }
            }
          function isTokenType(e, a) {
            a = a || 0;
            for (var r = 0; r < e.length; r++) {
              var i = t[n + (r + a)];
              if (!i || i.type !== e[r]) return !1;
            }
            return !0;
          }
          function findClosingBracket(e, a) {
            for (var r = 1, i = n; i < t.length; i++) {
              var s = t[i],
                o = s.content;
              if ("punctuation" === s.type && "string" == typeof o) {
                if (e.test(o)) r++;
                else if (a.test(o) && 0 == --r) return i;
              }
            }
            return -1;
          }
          function addAlias(e, t) {
            var n = e.alias;
            n ? Array.isArray(n) || (e.alias = n = [n]) : (e.alias = n = []),
              n.push(t);
          }
        }),
        (y.languages.sql = {
          comment: {
            pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,
            lookbehind: !0,
          },
          variable: [
            { pattern: /@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/, greedy: !0 },
            /@[\w.$]+/,
          ],
          string: {
            pattern: /(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,
            greedy: !0,
            lookbehind: !0,
          },
          identifier: {
            pattern: /(^|[^@\\])`(?:\\[\s\S]|[^`\\]|``)*`/,
            greedy: !0,
            lookbehind: !0,
            inside: { punctuation: /^`|`$/ },
          },
          function:
            /\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,
          keyword:
            /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:COL|_INSERT)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:ING|S)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,
          boolean: /\b(?:FALSE|NULL|TRUE)\b/i,
          number: /\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,
          operator:
            /[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|DIV|ILIKE|IN|IS|LIKE|NOT|OR|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,
          punctuation: /[;[\]()`,.]/,
        }),
        (function (e) {
          var t = e.languages.javascript["template-string"],
            n = t.pattern.source,
            a = t.inside.interpolation,
            r = a.inside["interpolation-punctuation"],
            i = a.pattern.source;
          function createTemplate(t, a) {
            if (e.languages[t])
              return {
                pattern: RegExp("((?:" + a + ")\\s*)" + n),
                lookbehind: !0,
                greedy: !0,
                inside: {
                  "template-punctuation": { pattern: /^`|`$/, alias: "string" },
                  "embedded-code": { pattern: /[\s\S]+/, alias: t },
                },
              };
          }
          function tokenizeWithHooks(t, n, a) {
            var r = { code: t, grammar: n, language: a };
            return (
              e.hooks.run("before-tokenize", r),
              (r.tokens = e.tokenize(r.code, r.grammar)),
              e.hooks.run("after-tokenize", r),
              r.tokens
            );
          }
          e.languages.javascript["template-string"] = [
            createTemplate(
              "css",
              /\b(?:styled(?:\([^)]*\))?(?:\s*\.\s*\w+(?:\([^)]*\))*)*|css(?:\s*\.\s*(?:global|resolve))?|createGlobalStyle|keyframes)/
                .source
            ),
            createTemplate(
              "html",
              /\bhtml|\.\s*(?:inner|outer)HTML\s*\+?=/.source
            ),
            createTemplate("svg", /\bsvg/.source),
            createTemplate("markdown", /\b(?:markdown|md)/.source),
            createTemplate(
              "graphql",
              /\b(?:gql|graphql(?:\s*\.\s*experimental)?)/.source
            ),
            createTemplate("sql", /\bsql/.source),
            t,
          ].filter(Boolean);
          var s = {
            javascript: !0,
            js: !0,
            typescript: !0,
            ts: !0,
            jsx: !0,
            tsx: !0,
          };
          e.hooks.add("after-tokenize", function (t) {
            t.language in s &&
              (function findTemplateStrings(t) {
                for (var n = 0, s = t.length; n < s; n++) {
                  var o = t[n];
                  if ("string" != typeof o) {
                    var l = o.content;
                    if (!Array.isArray(l)) {
                      "string" != typeof l && findTemplateStrings([l]);
                      continue;
                    }
                    if ("template-string" === o.type) {
                      var u = l[1];
                      if (
                        3 === l.length &&
                        "string" != typeof u &&
                        "embedded-code" === u.type
                      ) {
                        var c = (function stringContent(e) {
                            return "string" == typeof e
                              ? e
                              : Array.isArray(e)
                              ? e.map(stringContent).join("")
                              : stringContent(e.content);
                          })(u),
                          d = u.alias,
                          p = Array.isArray(d) ? d[0] : d,
                          g = e.languages[p];
                        if (!g) continue;
                        l[1] = (function (t, n, s) {
                          var o = e.tokenize(t, {
                              interpolation: {
                                pattern: RegExp(i),
                                lookbehind: !0,
                              },
                            }),
                            l = 0,
                            u = {},
                            c = tokenizeWithHooks(
                              o
                                .map(function (e) {
                                  if ("string" == typeof e) return e;
                                  for (
                                    var n, a, r = e.content;
                                    -1 !==
                                    t.indexOf(
                                      ((n = l++),
                                      (a =
                                        "___" +
                                        s.toUpperCase() +
                                        "_" +
                                        n +
                                        "___"))
                                    );

                                  );
                                  return (u[a] = r), a;
                                })
                                .join(""),
                              n,
                              s
                            ),
                            d = Object.keys(u);
                          return (
                            (l = 0),
                            (function walkTokens(t) {
                              for (var n = 0; n < t.length; n++) {
                                if (l >= d.length) return;
                                var i = t[n];
                                if (
                                  "string" == typeof i ||
                                  "string" == typeof i.content
                                ) {
                                  var s = d[l],
                                    o = "string" == typeof i ? i : i.content,
                                    c = o.indexOf(s);
                                  if (-1 !== c) {
                                    ++l;
                                    var p = o.substring(0, c),
                                      g = (function (t) {
                                        var n = {};
                                        n["interpolation-punctuation"] = r;
                                        var i = e.tokenize(t, n);
                                        if (3 === i.length) {
                                          var s = [1, 1];
                                          s.push.apply(
                                            s,
                                            tokenizeWithHooks(
                                              i[1],
                                              e.languages.javascript,
                                              "javascript"
                                            )
                                          ),
                                            i.splice.apply(i, s);
                                        }
                                        return new e.Token(
                                          "interpolation",
                                          i,
                                          a.alias,
                                          t
                                        );
                                      })(u[s]),
                                      f = o.substring(c + s.length),
                                      h = [];
                                    if ((p && h.push(p), h.push(g), f)) {
                                      var m = [f];
                                      walkTokens(m), h.push.apply(h, m);
                                    }
                                    "string" == typeof i
                                      ? (t.splice.apply(t, [n, 1].concat(h)),
                                        (n += h.length - 1))
                                      : (i.content = h);
                                  }
                                } else {
                                  var b = i.content;
                                  Array.isArray(b)
                                    ? walkTokens(b)
                                    : walkTokens([b]);
                                }
                              }
                            })(c),
                            new e.Token(s, c, "language-" + s, t)
                          );
                        })(c, g, p);
                      }
                    } else findTemplateStrings(l);
                  }
                }
              })(t.tokens);
          });
        })(y),
        (y.languages.typescript = y.languages.extend("javascript", {
          "class-name": {
            pattern:
              /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
            lookbehind: !0,
            greedy: !0,
            inside: null,
          },
          builtin:
            /\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/,
        })),
        y.languages.typescript.keyword.push(
          /\b(?:abstract|declare|is|keyof|readonly|require)\b/,
          /\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,
          /\btype\b(?=\s*(?:[\{*]|$))/
        ),
        delete y.languages.typescript.parameter,
        delete y.languages.typescript["literal-property"],
        (u = y.languages.extend("typescript", {})),
        delete u["class-name"],
        (y.languages.typescript["class-name"].inside = u),
        y.languages.insertBefore("typescript", "function", {
          decorator: {
            pattern: /@[$\w\xA0-\uFFFF]+/,
            inside: {
              at: { pattern: /^@/, alias: "operator" },
              function: /^[\s\S]+/,
            },
          },
          "generic-function": {
            pattern:
              /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,
            greedy: !0,
            inside: {
              function:
                /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,
              generic: { pattern: /<[\s\S]+/, alias: "class-name", inside: u },
            },
          },
        }),
        (y.languages.ts = y.languages.typescript),
        (function (e) {
          function withId(e, t) {
            return RegExp(
              e.replace(/<ID>/g, function () {
                return /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/
                  .source;
              }),
              t
            );
          }
          e.languages.insertBefore("javascript", "function-variable", {
            "method-variable": {
              pattern: RegExp(
                "(\\.\\s*)" +
                  e.languages.javascript["function-variable"].pattern.source
              ),
              lookbehind: !0,
              alias: [
                "function-variable",
                "method",
                "function",
                "property-access",
              ],
            },
          }),
            e.languages.insertBefore("javascript", "function", {
              method: {
                pattern: RegExp(
                  "(\\.\\s*)" + e.languages.javascript.function.source
                ),
                lookbehind: !0,
                alias: ["function", "property-access"],
              },
            }),
            e.languages.insertBefore("javascript", "constant", {
              "known-class-name": [
                {
                  pattern:
                    /\b(?:(?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|(?:Weak)?(?:Map|Set)|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|WebAssembly)\b/,
                  alias: "class-name",
                },
                { pattern: /\b(?:[A-Z]\w*)Error\b/, alias: "class-name" },
              ],
            }),
            e.languages.insertBefore("javascript", "keyword", {
              imports: {
                pattern: withId(
                  /(\bimport\b\s*)(?:<ID>(?:\s*,\s*(?:\*\s*as\s+<ID>|\{[^{}]*\}))?|\*\s*as\s+<ID>|\{[^{}]*\})(?=\s*\bfrom\b)/
                    .source
                ),
                lookbehind: !0,
                inside: e.languages.javascript,
              },
              exports: {
                pattern: withId(
                  /(\bexport\b\s*)(?:\*(?:\s*as\s+<ID>)?(?=\s*\bfrom\b)|\{[^{}]*\})/
                    .source
                ),
                lookbehind: !0,
                inside: e.languages.javascript,
              },
            }),
            e.languages.javascript.keyword.unshift(
              {
                pattern: /\b(?:as|default|export|from|import)\b/,
                alias: "module",
              },
              {
                pattern:
                  /\b(?:await|break|catch|continue|do|else|finally|for|if|return|switch|throw|try|while|yield)\b/,
                alias: "control-flow",
              },
              { pattern: /\bnull\b/, alias: ["null", "nil"] },
              { pattern: /\bundefined\b/, alias: "nil" }
            ),
            e.languages.insertBefore("javascript", "operator", {
              spread: { pattern: /\.{3}/, alias: "operator" },
              arrow: { pattern: /=>/, alias: "operator" },
            }),
            e.languages.insertBefore("javascript", "punctuation", {
              "property-access": {
                pattern: withId(/(\.\s*)#?<ID>/.source),
                lookbehind: !0,
              },
              "maybe-class-name": {
                pattern: /(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/,
                lookbehind: !0,
              },
              dom: {
                pattern:
                  /\b(?:document|(?:local|session)Storage|location|navigator|performance|window)\b/,
                alias: "variable",
              },
              console: { pattern: /\bconsole(?=\s*\.)/, alias: "class-name" },
            });
          for (
            var t = [
                "function",
                "function-variable",
                "method",
                "method-variable",
                "property-access",
              ],
              n = 0;
            n < t.length;
            n++
          ) {
            var a = t[n],
              r = e.languages.javascript[a];
            "RegExp" === e.util.type(r) &&
              (r = e.languages.javascript[a] = { pattern: r });
            var i = r.inside || {};
            (r.inside = i), (i["maybe-class-name"] = /^[A-Z][\s\S]*/);
          }
        })(y),
        (function (e) {
          var t = e.util.clone(e.languages.javascript),
            n = /(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,
            a = /(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,
            r = /(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;
          function re(e, t) {
            return RegExp(
              (e = e
                .replace(/<S>/g, function () {
                  return n;
                })
                .replace(/<BRACES>/g, function () {
                  return a;
                })
                .replace(/<SPREAD>/g, function () {
                  return r;
                })),
              t
            );
          }
          (r = re(r).source),
            (e.languages.jsx = e.languages.extend("markup", t)),
            (e.languages.jsx.tag.pattern = re(
              /<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/
                .source
            )),
            (e.languages.jsx.tag.inside.tag.pattern = /^<\/?[^\s>\/]*/),
            (e.languages.jsx.tag.inside["attr-value"].pattern =
              /=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/),
            (e.languages.jsx.tag.inside.tag.inside["class-name"] =
              /^[A-Z]\w*(?:\.[A-Z]\w*)*$/),
            (e.languages.jsx.tag.inside.comment = t.comment),
            e.languages.insertBefore(
              "inside",
              "attr-name",
              {
                spread: {
                  pattern: re(/<SPREAD>/.source),
                  inside: e.languages.jsx,
                },
              },
              e.languages.jsx.tag
            ),
            e.languages.insertBefore(
              "inside",
              "special-attr",
              {
                script: {
                  pattern: re(/=<BRACES>/.source),
                  alias: "language-javascript",
                  inside: {
                    "script-punctuation": {
                      pattern: /^=(?=\{)/,
                      alias: "punctuation",
                    },
                    rest: e.languages.jsx,
                  },
                },
              },
              e.languages.jsx.tag
            );
          var stringifyToken = function (e) {
              return e
                ? "string" == typeof e
                  ? e
                  : "string" == typeof e.content
                  ? e.content
                  : e.content.map(stringifyToken).join("")
                : "";
            },
            walkTokens = function (t) {
              for (var n = [], a = 0; a < t.length; a++) {
                var r = t[a],
                  i = !1;
                if (
                  ("string" != typeof r &&
                    ("tag" === r.type &&
                    r.content[0] &&
                    "tag" === r.content[0].type
                      ? "</" === r.content[0].content[0].content
                        ? n.length > 0 &&
                          n[n.length - 1].tagName ===
                            stringifyToken(r.content[0].content[1]) &&
                          n.pop()
                        : "/>" === r.content[r.content.length - 1].content ||
                          n.push({
                            tagName: stringifyToken(r.content[0].content[1]),
                            openedBraces: 0,
                          })
                      : n.length > 0 &&
                        "punctuation" === r.type &&
                        "{" === r.content
                      ? n[n.length - 1].openedBraces++
                      : n.length > 0 &&
                        n[n.length - 1].openedBraces > 0 &&
                        "punctuation" === r.type &&
                        "}" === r.content
                      ? n[n.length - 1].openedBraces--
                      : (i = !0)),
                  (i || "string" == typeof r) &&
                    n.length > 0 &&
                    0 === n[n.length - 1].openedBraces)
                ) {
                  var s = stringifyToken(r);
                  a < t.length - 1 &&
                    ("string" == typeof t[a + 1] ||
                      "plain-text" === t[a + 1].type) &&
                    ((s += stringifyToken(t[a + 1])), t.splice(a + 1, 1)),
                    a > 0 &&
                      ("string" == typeof t[a - 1] ||
                        "plain-text" === t[a - 1].type) &&
                      ((s = stringifyToken(t[a - 1]) + s),
                      t.splice(a - 1, 1),
                      a--),
                    (t[a] = new e.Token("plain-text", s, null, s));
                }
                r.content &&
                  "string" != typeof r.content &&
                  walkTokens(r.content);
              }
            };
          e.hooks.add("after-tokenize", function (e) {
            ("jsx" === e.language || "tsx" === e.language) &&
              walkTokens(e.tokens);
          });
        })(y),
        (y.languages.diff = {
          coord: [/^(?:\*{3}|-{3}|\+{3}).*$/m, /^@@.*@@$/m, /^\d.*$/m],
        }),
        Object.keys(
          (c = {
            "deleted-sign": "-",
            "deleted-arrow": "<",
            "inserted-sign": "+",
            "inserted-arrow": ">",
            unchanged: " ",
            diff: "!",
          })
        ).forEach(function (e) {
          var t = c[e],
            n = [];
          /^\w+$/.test(e) || n.push(/\w+/.exec(e)[0]),
            "diff" === e && n.push("bold"),
            (y.languages.diff[e] = {
              pattern: RegExp(
                "^(?:[" + t + "].*(?:\r\n?|\n|(?![\\s\\S])))+",
                "m"
              ),
              alias: n,
              inside: {
                line: {
                  pattern: /(.)(?=[\s\S]).*(?:\r\n?|\n)?/,
                  lookbehind: !0,
                },
                prefix: { pattern: /[\s\S]/, alias: /\w+/.exec(e)[0] },
              },
            });
        }),
        Object.defineProperty(y.languages.diff, "PREFIXES", { value: c }),
        (y.languages.git = {
          comment: /^#.*/m,
          deleted: /^[-–].*/m,
          inserted: /^\+.*/m,
          string: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,
          command: {
            pattern: /^.*\$ git .*$/m,
            inside: { parameter: /\s--?\w+/ },
          },
          coord: /^@@.*@@$/m,
          "commit-sha1": /^commit \w{40}$/m,
        }),
        (y.languages.go = y.languages.extend("clike", {
          string: {
            pattern: /(^|[^\\])"(?:\\.|[^"\\\r\n])*"|`[^`]*`/,
            lookbehind: !0,
            greedy: !0,
          },
          keyword:
            /\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,
          boolean: /\b(?:_|false|iota|nil|true)\b/,
          number: [
            /\b0(?:b[01_]+|o[0-7_]+)i?\b/i,
            /\b0x(?:[a-f\d_]+(?:\.[a-f\d_]*)?|\.[a-f\d_]+)(?:p[+-]?\d+(?:_\d+)*)?i?(?!\w)/i,
            /(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?[\d_]+)?i?(?!\w)/i,
          ],
          operator:
            /[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,
          builtin:
            /\b(?:append|bool|byte|cap|close|complex|complex(?:64|128)|copy|delete|error|float(?:32|64)|u?int(?:8|16|32|64)?|imag|len|make|new|panic|print(?:ln)?|real|recover|rune|string|uintptr)\b/,
        })),
        y.languages.insertBefore("go", "string", {
          char: { pattern: /'(?:\\.|[^'\\\r\n]){0,10}'/, greedy: !0 },
        }),
        delete y.languages.go["class-name"],
        (function (e) {
          function getPlaceholder(e, t) {
            return "___" + e.toUpperCase() + t + "___";
          }
          Object.defineProperties((e.languages["markup-templating"] = {}), {
            buildPlaceholders: {
              value: function (t, n, a, r) {
                if (t.language === n) {
                  var i = (t.tokenStack = []);
                  (t.code = t.code.replace(a, function (e) {
                    if ("function" == typeof r && !r(e)) return e;
                    for (
                      var a, s = i.length;
                      -1 !== t.code.indexOf((a = getPlaceholder(n, s)));

                    )
                      ++s;
                    return (i[s] = e), a;
                  })),
                    (t.grammar = e.languages.markup);
                }
              },
            },
            tokenizePlaceholders: {
              value: function (t, n) {
                if (t.language === n && t.tokenStack) {
                  t.grammar = e.languages[n];
                  var a = 0,
                    r = Object.keys(t.tokenStack);
                  !(function walkTokens(i) {
                    for (var s = 0; s < i.length && !(a >= r.length); s++) {
                      var o = i[s];
                      if (
                        "string" == typeof o ||
                        (o.content && "string" == typeof o.content)
                      ) {
                        var l = r[a],
                          u = t.tokenStack[l],
                          c = "string" == typeof o ? o : o.content,
                          d = getPlaceholder(n, l),
                          p = c.indexOf(d);
                        if (p > -1) {
                          ++a;
                          var g = c.substring(0, p),
                            f = new e.Token(
                              n,
                              e.tokenize(u, t.grammar),
                              "language-" + n,
                              u
                            ),
                            h = c.substring(p + d.length),
                            m = [];
                          g && m.push.apply(m, walkTokens([g])),
                            m.push(f),
                            h && m.push.apply(m, walkTokens([h])),
                            "string" == typeof o
                              ? i.splice.apply(i, [s, 1].concat(m))
                              : (o.content = m);
                        }
                      } else o.content && walkTokens(o.content);
                    }
                    return i;
                  })(t.tokens);
                }
              },
            },
          });
        })(y),
        (y.languages.handlebars = {
          comment: /\{\{![\s\S]*?\}\}/,
          delimiter: { pattern: /^\{\{\{?|\}\}\}?$/, alias: "punctuation" },
          string: /(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,
          number:
            /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee][+-]?\d+)?/,
          boolean: /\b(?:false|true)\b/,
          block: {
            pattern: /^(\s*(?:~\s*)?)[#\/]\S+?(?=\s*(?:~\s*)?$|\s)/,
            lookbehind: !0,
            alias: "keyword",
          },
          brackets: {
            pattern: /\[[^\]]+\]/,
            inside: { punctuation: /\[|\]/, variable: /[\s\S]+/ },
          },
          punctuation: /[!"#%&':()*+,.\/;<=>@\[\\\]^`{|}~]/,
          variable: /[^!"#%&'()*+,\/;<=>@\[\\\]^`{|}~\s]+/,
        }),
        y.hooks.add("before-tokenize", function (e) {
          y.languages["markup-templating"].buildPlaceholders(
            e,
            "handlebars",
            /\{\{\{[\s\S]+?\}\}\}|\{\{[\s\S]+?\}\}/g
          );
        }),
        y.hooks.add("after-tokenize", function (e) {
          y.languages["markup-templating"].tokenizePlaceholders(
            e,
            "handlebars"
          );
        }),
        (y.languages.hbs = y.languages.handlebars),
        (y.languages.json = {
          property: {
            pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,
            lookbehind: !0,
            greedy: !0,
          },
          string: {
            pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
            lookbehind: !0,
            greedy: !0,
          },
          comment: { pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/, greedy: !0 },
          number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
          punctuation: /[{}[\],]/,
          operator: /:/,
          boolean: /\b(?:false|true)\b/,
          null: { pattern: /\bnull\b/, alias: "keyword" },
        }),
        (y.languages.webmanifest = y.languages.json),
        (y.languages.less = y.languages.extend("css", {
          comment: [
            /\/\*[\s\S]*?\*\//,
            { pattern: /(^|[^\\])\/\/.*/, lookbehind: !0 },
          ],
          atrule: {
            pattern:
              /@[\w-](?:\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};\s]|\s+(?!\s))*?(?=\s*\{)/,
            inside: { punctuation: /[:()]/ },
          },
          selector: {
            pattern:
              /(?:@\{[\w-]+\}|[^{};\s@])(?:@\{[\w-]+\}|\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};@\s]|\s+(?!\s))*?(?=\s*\{)/,
            inside: { variable: /@+[\w-]+/ },
          },
          property: /(?:@\{[\w-]+\}|[\w-])+(?:\+_?)?(?=\s*:)/,
          operator: /[+\-*\/]/,
        })),
        y.languages.insertBefore("less", "property", {
          variable: [
            { pattern: /@[\w-]+\s*:/, inside: { punctuation: /:/ } },
            /@@?[\w-]+/,
          ],
          "mixin-usage": {
            pattern: /([{;]\s*)[.#](?!\d)[\w-].*?(?=[(;])/,
            lookbehind: !0,
            alias: "function",
          },
        }),
        (y.languages.makefile = {
          comment: {
            pattern: /(^|[^\\])#(?:\\(?:\r\n|[\s\S])|[^\\\r\n])*/,
            lookbehind: !0,
          },
          string: {
            pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
            greedy: !0,
          },
          "builtin-target": {
            pattern: /\.[A-Z][^:#=\s]+(?=\s*:(?!=))/,
            alias: "builtin",
          },
          target: {
            pattern: /^(?:[^:=\s]|[ \t]+(?![\s:]))+(?=\s*:(?!=))/m,
            alias: "symbol",
            inside: { variable: /\$+(?:(?!\$)[^(){}:#=\s]+|(?=[({]))/ },
          },
          variable: /\$+(?:(?!\$)[^(){}:#=\s]+|\([@*%<^+?][DF]\)|(?=[({]))/,
          keyword:
            /-include\b|\b(?:define|else|endef|endif|export|ifn?def|ifn?eq|include|override|private|sinclude|undefine|unexport|vpath)\b/,
          function: {
            pattern:
              /(\()(?:abspath|addsuffix|and|basename|call|dir|error|eval|file|filter(?:-out)?|findstring|firstword|flavor|foreach|guile|if|info|join|lastword|load|notdir|or|origin|patsubst|realpath|shell|sort|strip|subst|suffix|value|warning|wildcard|word(?:list|s)?)(?=[ \t])/,
            lookbehind: !0,
          },
          operator: /(?:::|[?:+!])?=|[|@]/,
          punctuation: /[:;(){}]/,
        }),
        (y.languages.objectivec = y.languages.extend("c", {
          string: {
            pattern: /@?"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
            greedy: !0,
          },
          keyword:
            /\b(?:asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|in|inline|int|long|register|return|self|short|signed|sizeof|static|struct|super|switch|typedef|typeof|union|unsigned|void|volatile|while)\b|(?:@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/,
          operator: /-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/,
        })),
        delete y.languages.objectivec["class-name"],
        (y.languages.objc = y.languages.objectivec),
        (y.languages.ocaml = {
          comment: { pattern: /\(\*[\s\S]*?\*\)/, greedy: !0 },
          char: {
            pattern: /'(?:[^\\\r\n']|\\(?:.|[ox]?[0-9a-f]{1,3}))'/i,
            greedy: !0,
          },
          string: [
            { pattern: /"(?:\\(?:[\s\S]|\r\n)|[^\\\r\n"])*"/, greedy: !0 },
            { pattern: /\{([a-z_]*)\|[\s\S]*?\|\1\}/, greedy: !0 },
          ],
          number: [
            /\b(?:0b[01][01_]*|0o[0-7][0-7_]*)\b/i,
            /\b0x[a-f0-9][a-f0-9_]*(?:\.[a-f0-9_]*)?(?:p[+-]?\d[\d_]*)?(?!\w)/i,
            /\b\d[\d_]*(?:\.[\d_]*)?(?:e[+-]?\d[\d_]*)?(?!\w)/i,
          ],
          directive: { pattern: /\B#\w+/, alias: "property" },
          label: { pattern: /\B~\w+/, alias: "property" },
          "type-variable": { pattern: /\B'\w+/, alias: "function" },
          variant: { pattern: /`\w+/, alias: "symbol" },
          keyword:
            /\b(?:as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|match|method|module|mutable|new|nonrec|object|of|open|private|rec|sig|struct|then|to|try|type|val|value|virtual|when|where|while|with)\b/,
          boolean: /\b(?:false|true)\b/,
          "operator-like-punctuation": {
            pattern: /\[[<>|]|[>|]\]|\{<|>\}/,
            alias: "punctuation",
          },
          operator:
            /\.[.~]|:[=>]|[=<>@^|&+\-*\/$%!?~][!$%&*+\-.\/:<=>?@^|~]*|\b(?:and|asr|land|lor|lsl|lsr|lxor|mod|or)\b/,
          punctuation: /;;|::|[(){}\[\].,:;#]|\b_\b/,
        }),
        (y.languages.python = {
          comment: { pattern: /(^|[^\\])#.*/, lookbehind: !0, greedy: !0 },
          "string-interpolation": {
            pattern:
              /(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,
            greedy: !0,
            inside: {
              interpolation: {
                pattern:
                  /((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,
                lookbehind: !0,
                inside: {
                  "format-spec": {
                    pattern: /(:)[^:(){}]+(?=\}$)/,
                    lookbehind: !0,
                  },
                  "conversion-option": {
                    pattern: /![sra](?=[:}]$)/,
                    alias: "punctuation",
                  },
                  rest: null,
                },
              },
              string: /[\s\S]+/,
            },
          },
          "triple-quoted-string": {
            pattern: /(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,
            greedy: !0,
            alias: "string",
          },
          string: {
            pattern: /(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,
            greedy: !0,
          },
          function: {
            pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,
            lookbehind: !0,
          },
          "class-name": { pattern: /(\bclass\s+)\w+/i, lookbehind: !0 },
          decorator: {
            pattern: /(^[\t ]*)@\w+(?:\.\w+)*/m,
            lookbehind: !0,
            alias: ["annotation", "punctuation"],
            inside: { punctuation: /\./ },
          },
          keyword:
            /\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,
          builtin:
            /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,
          boolean: /\b(?:False|None|True)\b/,
          number:
            /\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,
          operator: /[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
          punctuation: /[{}[\];(),.:]/,
        }),
        (y.languages.python[
          "string-interpolation"
        ].inside.interpolation.inside.rest = y.languages.python),
        (y.languages.py = y.languages.python),
        (y.languages.reason = y.languages.extend("clike", {
          string: {
            pattern: /"(?:\\(?:\r\n|[\s\S])|[^\\\r\n"])*"/,
            greedy: !0,
          },
          "class-name": /\b[A-Z]\w*/,
          keyword:
            /\b(?:and|as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|method|module|mutable|new|nonrec|object|of|open|or|private|rec|sig|struct|switch|then|to|try|type|val|virtual|when|while|with)\b/,
          operator:
            /\.{3}|:[:=]|\|>|->|=(?:==?|>)?|<=?|>=?|[|^?'#!~`]|[+\-*\/]\.?|\b(?:asr|land|lor|lsl|lsr|lxor|mod)\b/,
        })),
        y.languages.insertBefore("reason", "class-name", {
          char: {
            pattern:
              /'(?:\\x[\da-f]{2}|\\o[0-3][0-7][0-7]|\\\d{3}|\\.|[^'\\\r\n])'/,
            greedy: !0,
          },
          constructor: /\b[A-Z]\w*\b(?!\s*\.)/,
          label: { pattern: /\b[a-z]\w*(?=::)/, alias: "symbol" },
        }),
        delete y.languages.reason.function,
        (y.languages.sass = y.languages.extend("css", {
          comment: {
            pattern: /^([ \t]*)\/[\/*].*(?:(?:\r?\n|\r)\1[ \t].+)*/m,
            lookbehind: !0,
            greedy: !0,
          },
        })),
        y.languages.insertBefore("sass", "atrule", {
          "atrule-line": {
            pattern: /^(?:[ \t]*)[@+=].+/m,
            greedy: !0,
            inside: { atrule: /(?:@[\w-]+|[+=])/ },
          },
        }),
        delete y.languages.sass.atrule,
        (d = /\$[-\w]+|#\{\$[-\w]+\}/),
        (p = [
          /[+*\/%]|[=!]=|<=?|>=?|\b(?:and|not|or)\b/,
          { pattern: /(\s)-(?=\s)/, lookbehind: !0 },
        ]),
        y.languages.insertBefore("sass", "property", {
          "variable-line": {
            pattern: /^[ \t]*\$.+/m,
            greedy: !0,
            inside: { punctuation: /:/, variable: d, operator: p },
          },
          "property-line": {
            pattern: /^[ \t]*(?:[^:\s]+ *:.*|:[^:\s].*)/m,
            greedy: !0,
            inside: {
              property: [
                /[^:\s]+(?=\s*:)/,
                { pattern: /(:)[^:\s]+/, lookbehind: !0 },
              ],
              punctuation: /:/,
              variable: d,
              operator: p,
              important: y.languages.sass.important,
            },
          },
        }),
        delete y.languages.sass.property,
        delete y.languages.sass.important,
        y.languages.insertBefore("sass", "punctuation", {
          selector: {
            pattern:
              /^([ \t]*)\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*(?:,(?:\r?\n|\r)\1[ \t]+\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*)*/m,
            lookbehind: !0,
            greedy: !0,
          },
        }),
        (y.languages.scss = y.languages.extend("css", {
          comment: {
            pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
            lookbehind: !0,
          },
          atrule: {
            pattern: /@[\w-](?:\([^()]+\)|[^()\s]|\s+(?!\s))*?(?=\s+[{;])/,
            inside: { rule: /@[\w-]+/ },
          },
          url: /(?:[-a-z]+-)?url(?=\()/i,
          selector: {
            pattern:
              /(?=\S)[^@;{}()]?(?:[^@;{}()\s]|\s+(?!\s)|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}][^:{}]*[:{][^}]))/,
            inside: {
              parent: { pattern: /&/, alias: "important" },
              placeholder: /%[-\w]+/,
              variable: /\$[-\w]+|#\{\$[-\w]+\}/,
            },
          },
          property: {
            pattern: /(?:[-\w]|\$[-\w]|#\{\$[-\w]+\})+(?=\s*:)/,
            inside: { variable: /\$[-\w]+|#\{\$[-\w]+\}/ },
          },
        })),
        y.languages.insertBefore("scss", "atrule", {
          keyword: [
            /@(?:content|debug|each|else(?: if)?|extend|for|forward|function|if|import|include|mixin|return|use|warn|while)\b/i,
            { pattern: /( )(?:from|through)(?= )/, lookbehind: !0 },
          ],
        }),
        y.languages.insertBefore("scss", "important", {
          variable: /\$[-\w]+|#\{\$[-\w]+\}/,
        }),
        y.languages.insertBefore("scss", "function", {
          "module-modifier": {
            pattern: /\b(?:as|hide|show|with)\b/i,
            alias: "keyword",
          },
          placeholder: { pattern: /%[-\w]+/, alias: "selector" },
          statement: {
            pattern: /\B!(?:default|optional)\b/i,
            alias: "keyword",
          },
          boolean: /\b(?:false|true)\b/,
          null: { pattern: /\bnull\b/, alias: "keyword" },
          operator: {
            pattern: /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|not|or)(?=\s)/,
            lookbehind: !0,
          },
        }),
        (y.languages.scss.atrule.inside.rest = y.languages.scss),
        ((h = {
          comment: {
            pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
            lookbehind: !0,
          },
          url: { pattern: /\burl\((["']?).*?\1\)/i, greedy: !0 },
          string: {
            pattern: /("|')(?:(?!\1)[^\\\r\n]|\\(?:\r\n|[\s\S]))*\1/,
            greedy: !0,
          },
          interpolation: null,
          func: null,
          important: /\B!(?:important|optional)\b/i,
          keyword: {
            pattern: /(^|\s+)(?:(?:else|for|if|return|unless)(?=\s|$)|@[\w-]+)/,
            lookbehind: !0,
          },
          hexcode: /#[\da-f]{3,6}/i,
          color: [
            /\b(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)\b/i,
            {
              pattern:
                /\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,
              inside: {
                unit: (g = { pattern: /(\b\d+)(?:%|[a-z]+)/, lookbehind: !0 }),
                number: (f = {
                  pattern: /(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,
                  lookbehind: !0,
                }),
                function: /[\w-]+(?=\()/,
                punctuation: /[(),]/,
              },
            },
          ],
          entity: /\\[\da-f]{1,8}/i,
          unit: g,
          boolean: /\b(?:false|true)\b/,
          operator: [
            /~|[+!\/%<>?=]=?|[-:]=|\*[*=]?|\.{2,3}|&&|\|\||\B-\B|\b(?:and|in|is(?: a| defined| not|nt)?|not|or)\b/,
          ],
          number: f,
          punctuation: /[{}()\[\];:,]/,
        }).interpolation = {
          pattern: /\{[^\r\n}:]+\}/,
          alias: "variable",
          inside: {
            delimiter: { pattern: /^\{|\}$/, alias: "punctuation" },
            rest: h,
          },
        }),
        (h.func = {
          pattern: /[\w-]+\([^)]*\).*/,
          inside: { function: /^[^(]+/, rest: h },
        }),
        (y.languages.stylus = {
          "atrule-declaration": {
            pattern: /(^[ \t]*)@.+/m,
            lookbehind: !0,
            inside: { atrule: /^@[\w-]+/, rest: h },
          },
          "variable-declaration": {
            pattern: /(^[ \t]*)[\w$-]+\s*.?=[ \t]*(?:\{[^{}]*\}|\S.*|$)/m,
            lookbehind: !0,
            inside: { variable: /^\S+/, rest: h },
          },
          statement: {
            pattern: /(^[ \t]*)(?:else|for|if|return|unless)[ \t].+/m,
            lookbehind: !0,
            inside: { keyword: /^\S+/, rest: h },
          },
          "property-declaration": {
            pattern:
              /((?:^|\{)([ \t]*))(?:[\w-]|\{[^}\r\n]+\})+(?:\s*:\s*|[ \t]+)(?!\s)[^{\r\n]*(?:;|[^{\r\n,]$(?!(?:\r?\n|\r)(?:\{|\2[ \t])))/m,
            lookbehind: !0,
            inside: {
              property: {
                pattern: /^[^\s:]+/,
                inside: { interpolation: h.interpolation },
              },
              rest: h,
            },
          },
          selector: {
            pattern:
              /(^[ \t]*)(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\)|(?![\w-]))|\{[^}\r\n]+\})+)(?:(?:\r?\n|\r)(?:\1(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\)|(?![\w-]))|\{[^}\r\n]+\})+)))*(?:,$|\{|(?=(?:\r?\n|\r)(?:\{|\1[ \t])))/m,
            lookbehind: !0,
            inside: {
              interpolation: h.interpolation,
              comment: h.comment,
              punctuation: /[{},]/,
            },
          },
          func: h.func,
          string: h.string,
          comment: {
            pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
            lookbehind: !0,
            greedy: !0,
          },
          interpolation: h.interpolation,
          punctuation: /[{}()\[\];:.]/,
        }),
        (m = y.util.clone(y.languages.typescript)),
        (y.languages.tsx = y.languages.extend("jsx", m)),
        delete y.languages.tsx.parameter,
        delete y.languages.tsx["literal-property"],
        ((b = y.languages.tsx.tag).pattern = RegExp(
          /(^|[^\w$]|(?=<\/))/.source + "(?:" + b.pattern.source + ")",
          b.pattern.flags
        )),
        (b.lookbehind = !0),
        (y.languages.wasm = {
          comment: [/\(;[\s\S]*?;\)/, { pattern: /;;.*/, greedy: !0 }],
          string: { pattern: /"(?:\\[\s\S]|[^"\\])*"/, greedy: !0 },
          keyword: [
            { pattern: /\b(?:align|offset)=/, inside: { operator: /=/ } },
            {
              pattern:
                /\b(?:(?:f32|f64|i32|i64)(?:\.(?:abs|add|and|ceil|clz|const|convert_[su]\/i(?:32|64)|copysign|ctz|demote\/f64|div(?:_[su])?|eqz?|extend_[su]\/i32|floor|ge(?:_[su])?|gt(?:_[su])?|le(?:_[su])?|load(?:(?:8|16|32)_[su])?|lt(?:_[su])?|max|min|mul|neg?|nearest|or|popcnt|promote\/f32|reinterpret\/[fi](?:32|64)|rem_[su]|rot[lr]|shl|shr_[su]|sqrt|store(?:8|16|32)?|sub|trunc(?:_[su]\/f(?:32|64))?|wrap\/i64|xor))?|memory\.(?:grow|size))\b/,
              inside: { punctuation: /\./ },
            },
            /\b(?:anyfunc|block|br(?:_if|_table)?|call(?:_indirect)?|data|drop|elem|else|end|export|func|get_(?:global|local)|global|if|import|local|loop|memory|module|mut|nop|offset|param|result|return|select|set_(?:global|local)|start|table|tee_local|then|type|unreachable)\b/,
          ],
          variable: /\$[\w!#$%&'*+\-./:<=>?@\\^`|~]+/,
          number:
            /[+-]?\b(?:\d(?:_?\d)*(?:\.\d(?:_?\d)*)?(?:[eE][+-]?\d(?:_?\d)*)?|0x[\da-fA-F](?:_?[\da-fA-F])*(?:\.[\da-fA-F](?:_?[\da-fA-D])*)?(?:[pP][+-]?\d(?:_?\d)*)?)\b|\binf\b|\bnan(?::0x[\da-fA-F](?:_?[\da-fA-D])*)?\b/,
          punctuation: /[()]/,
        });
      var k = n(67294),
        v = {
          Prism: y,
          theme: {
            plain: { backgroundColor: "#2a2734", color: "#9a86fd" },
            styles: [
              {
                types: ["comment", "prolog", "doctype", "cdata", "punctuation"],
                style: { color: "#6c6783" },
              },
              { types: ["namespace"], style: { opacity: 0.7 } },
              {
                types: ["tag", "operator", "number"],
                style: { color: "#e09142" },
              },
              { types: ["property", "function"], style: { color: "#9a86fd" } },
              {
                types: ["tag-id", "selector", "atrule-id"],
                style: { color: "#eeebff" },
              },
              { types: ["attr-name"], style: { color: "#c4b9fe" } },
              {
                types: [
                  "boolean",
                  "string",
                  "entity",
                  "url",
                  "attr-value",
                  "keyword",
                  "control",
                  "directive",
                  "unit",
                  "statement",
                  "regex",
                  "atrule",
                  "placeholder",
                  "variable",
                ],
                style: { color: "#ffcc99" },
              },
              {
                types: ["deleted"],
                style: { textDecorationLine: "line-through" },
              },
              {
                types: ["inserted"],
                style: { textDecorationLine: "underline" },
              },
              { types: ["italic"], style: { fontStyle: "italic" } },
              { types: ["important", "bold"], style: { fontWeight: "bold" } },
              { types: ["important"], style: { color: "#c4b9fe" } },
            ],
          },
        };
      function _defineProperty(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function _extends() {
        return (_extends =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var a in n)
                Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
            }
            return e;
          }).apply(this, arguments);
      }
      var w = /\r\n|\r|\n/,
        normalizeEmptyLines = function (e) {
          0 === e.length
            ? e.push({ types: ["plain"], content: "\n", empty: !0 })
            : 1 === e.length &&
              "" === e[0].content &&
              ((e[0].content = "\n"), (e[0].empty = !0));
        },
        appendTypes = function (e, t) {
          var n = e.length;
          return n > 0 && e[n - 1] === t ? e : e.concat(t);
        },
        normalizeTokens = function (e) {
          for (
            var t = [[]],
              n = [e],
              a = [0],
              r = [e.length],
              i = 0,
              s = 0,
              o = [],
              l = [o];
            s > -1;

          ) {
            for (; (i = a[s]++) < r[s]; ) {
              var u = void 0,
                c = t[s],
                d = n[s][i];
              if (
                ("string" == typeof d
                  ? ((c = s > 0 ? c : ["plain"]), (u = d))
                  : ((c = appendTypes(c, d.type)),
                    d.alias && (c = appendTypes(c, d.alias)),
                    (u = d.content)),
                "string" != typeof u)
              ) {
                s++, t.push(c), n.push(u), a.push(0), r.push(u.length);
                continue;
              }
              var p = u.split(w),
                g = p.length;
              o.push({ types: c, content: p[0] });
              for (var f = 1; f < g; f++)
                normalizeEmptyLines(o),
                  l.push((o = [])),
                  o.push({ types: c, content: p[f] });
            }
            s--, t.pop(), n.pop(), a.pop(), r.pop();
          }
          return normalizeEmptyLines(o), l;
        },
        themeToDict = function (e, t) {
          var n = e.plain,
            a = Object.create(null),
            r = e.styles.reduce(function (e, n) {
              var a = n.languages,
                r = n.style;
              return (
                (a && !a.includes(t)) ||
                  n.types.forEach(function (t) {
                    var n = _extends({}, e[t], r);
                    e[t] = n;
                  }),
                e
              );
            }, a);
          return (
            (r.root = n),
            (r.plain = _extends({}, n, { backgroundColor: null })),
            r
          );
        };
      function objectWithoutProperties(e, t) {
        var n = {};
        for (var a in e)
          Object.prototype.hasOwnProperty.call(e, a) &&
            -1 === t.indexOf(a) &&
            (n[a] = e[a]);
        return n;
      }
      var S = (function (e) {
        function Highlight() {
          for (var t = this, n = [], a = arguments.length; a--; )
            n[a] = arguments[a];
          e.apply(this, n),
            _defineProperty(this, "getThemeDict", function (e) {
              if (
                void 0 !== t.themeDict &&
                e.theme === t.prevTheme &&
                e.language === t.prevLanguage
              )
                return t.themeDict;
              (t.prevTheme = e.theme), (t.prevLanguage = e.language);
              var n = e.theme ? themeToDict(e.theme, e.language) : void 0;
              return (t.themeDict = n);
            }),
            _defineProperty(this, "getLineProps", function (e) {
              var n = e.key,
                a = e.className,
                r = e.style,
                i = objectWithoutProperties(e, [
                  "key",
                  "className",
                  "style",
                  "line",
                ]),
                s = _extends({}, i, {
                  className: "token-line",
                  style: void 0,
                  key: void 0,
                }),
                o = t.getThemeDict(t.props);
              return (
                void 0 !== o && (s.style = o.plain),
                void 0 !== r &&
                  (s.style = void 0 !== s.style ? _extends({}, s.style, r) : r),
                void 0 !== n && (s.key = n),
                a && (s.className += " " + a),
                s
              );
            }),
            _defineProperty(this, "getStyleForToken", function (e) {
              var n = e.types,
                a = e.empty,
                r = n.length,
                i = t.getThemeDict(t.props);
              if (void 0 !== i) {
                if (1 === r && "plain" === n[0])
                  return a ? { display: "inline-block" } : void 0;
                if (1 === r && !a) return i[n[0]];
                var s = n.map(function (e) {
                  return i[e];
                });
                return Object.assign.apply(
                  Object,
                  [a ? { display: "inline-block" } : {}].concat(s)
                );
              }
            }),
            _defineProperty(this, "getTokenProps", function (e) {
              var n = e.key,
                a = e.className,
                r = e.style,
                i = e.token,
                s = objectWithoutProperties(e, [
                  "key",
                  "className",
                  "style",
                  "token",
                ]),
                o = _extends({}, s, {
                  className: "token " + i.types.join(" "),
                  children: i.content,
                  style: t.getStyleForToken(i),
                  key: void 0,
                });
              return (
                void 0 !== r &&
                  (o.style = void 0 !== o.style ? _extends({}, o.style, r) : r),
                void 0 !== n && (o.key = n),
                a && (o.className += " " + a),
                o
              );
            }),
            _defineProperty(this, "tokenize", function (e, t, n, a) {
              var r = { code: t, grammar: n, language: a, tokens: [] };
              e.hooks.run("before-tokenize", r);
              var i = (r.tokens = e.tokenize(r.code, r.grammar, r.language));
              return e.hooks.run("after-tokenize", r), i;
            });
        }
        return (
          e && (Highlight.__proto__ = e),
          (Highlight.prototype = Object.create(e && e.prototype)),
          (Highlight.prototype.constructor = Highlight),
          (Highlight.prototype.render = function () {
            var e = this.props,
              t = e.Prism,
              n = e.language,
              a = e.code,
              r = e.children,
              i = this.getThemeDict(this.props),
              s = t.languages[n];
            return r({
              tokens: normalizeTokens(
                void 0 !== s ? this.tokenize(t, a, s, n) : [a]
              ),
              className: "prism-code language-" + n,
              style: void 0 !== i ? i.root : {},
              getLineProps: this.getLineProps,
              getTokenProps: this.getTokenProps,
            });
          }),
          Highlight
        );
      })(k.Component);
    },
    62356: function () {
      !(function (e) {
        var t = e.util.clone(e.languages.javascript),
          n = /(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,
          a = /(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,
          r = /(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;
        function re(e, t) {
          return RegExp(
            (e = e
              .replace(/<S>/g, function () {
                return n;
              })
              .replace(/<BRACES>/g, function () {
                return a;
              })
              .replace(/<SPREAD>/g, function () {
                return r;
              })),
            t
          );
        }
        (r = re(r).source),
          (e.languages.jsx = e.languages.extend("markup", t)),
          (e.languages.jsx.tag.pattern = re(
            /<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/
              .source
          )),
          (e.languages.jsx.tag.inside.tag.pattern = /^<\/?[^\s>\/]*/),
          (e.languages.jsx.tag.inside["attr-value"].pattern =
            /=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/),
          (e.languages.jsx.tag.inside.tag.inside["class-name"] =
            /^[A-Z]\w*(?:\.[A-Z]\w*)*$/),
          (e.languages.jsx.tag.inside.comment = t.comment),
          e.languages.insertBefore(
            "inside",
            "attr-name",
            {
              spread: {
                pattern: re(/<SPREAD>/.source),
                inside: e.languages.jsx,
              },
            },
            e.languages.jsx.tag
          ),
          e.languages.insertBefore(
            "inside",
            "special-attr",
            {
              script: {
                pattern: re(/=<BRACES>/.source),
                alias: "language-javascript",
                inside: {
                  "script-punctuation": {
                    pattern: /^=(?=\{)/,
                    alias: "punctuation",
                  },
                  rest: e.languages.jsx,
                },
              },
            },
            e.languages.jsx.tag
          );
        var stringifyToken = function (e) {
            return e
              ? "string" == typeof e
                ? e
                : "string" == typeof e.content
                ? e.content
                : e.content.map(stringifyToken).join("")
              : "";
          },
          walkTokens = function (t) {
            for (var n = [], a = 0; a < t.length; a++) {
              var r = t[a],
                i = !1;
              if (
                ("string" != typeof r &&
                  ("tag" === r.type &&
                  r.content[0] &&
                  "tag" === r.content[0].type
                    ? "</" === r.content[0].content[0].content
                      ? n.length > 0 &&
                        n[n.length - 1].tagName ===
                          stringifyToken(r.content[0].content[1]) &&
                        n.pop()
                      : "/>" === r.content[r.content.length - 1].content ||
                        n.push({
                          tagName: stringifyToken(r.content[0].content[1]),
                          openedBraces: 0,
                        })
                    : n.length > 0 &&
                      "punctuation" === r.type &&
                      "{" === r.content
                    ? n[n.length - 1].openedBraces++
                    : n.length > 0 &&
                      n[n.length - 1].openedBraces > 0 &&
                      "punctuation" === r.type &&
                      "}" === r.content
                    ? n[n.length - 1].openedBraces--
                    : (i = !0)),
                (i || "string" == typeof r) &&
                  n.length > 0 &&
                  0 === n[n.length - 1].openedBraces)
              ) {
                var s = stringifyToken(r);
                a < t.length - 1 &&
                  ("string" == typeof t[a + 1] ||
                    "plain-text" === t[a + 1].type) &&
                  ((s += stringifyToken(t[a + 1])), t.splice(a + 1, 1)),
                  a > 0 &&
                    ("string" == typeof t[a - 1] ||
                      "plain-text" === t[a - 1].type) &&
                    ((s = stringifyToken(t[a - 1]) + s),
                    t.splice(a - 1, 1),
                    a--),
                  (t[a] = new e.Token("plain-text", s, null, s));
              }
              r.content &&
                "string" != typeof r.content &&
                walkTokens(r.content);
            }
          };
        e.hooks.add("after-tokenize", function (e) {
          ("jsx" === e.language || "tsx" === e.language) &&
            walkTokens(e.tokens);
        });
      })(Prism);
    },
    98759: function () {
      !(function () {
        if ("undefined" != typeof Prism && "undefined" != typeof document) {
          var e = "line-numbers",
            t = /\n(?!$)/g,
            n = (Prism.plugins.lineNumbers = {
              getLine: function (t, n) {
                if ("PRE" === t.tagName && t.classList.contains(e)) {
                  var a = t.querySelector(".line-numbers-rows");
                  if (a) {
                    var r = parseInt(t.getAttribute("data-start"), 10) || 1,
                      i = r + (a.children.length - 1);
                    n < r && (n = r), n > i && (n = i);
                    var s = n - r;
                    return a.children[s];
                  }
                }
              },
              resize: function (e) {
                resizeElements([e]);
              },
              assumeViewportIndependence: !0,
            }),
            a = void 0;
          window.addEventListener("resize", function () {
            (n.assumeViewportIndependence && a === window.innerWidth) ||
              ((a = window.innerWidth),
              resizeElements(
                Array.prototype.slice.call(
                  document.querySelectorAll("pre." + e)
                )
              ));
          }),
            Prism.hooks.add("complete", function (n) {
              if (n.code) {
                var a,
                  r = n.element,
                  i = r.parentNode;
                if (
                  !(
                    !i ||
                    !/pre/i.test(i.nodeName) ||
                    r.querySelector(".line-numbers-rows")
                  ) &&
                  Prism.util.isActive(r, e)
                ) {
                  r.classList.remove(e), i.classList.add(e);
                  var s = n.code.match(t),
                    o = Array((s ? s.length + 1 : 1) + 1).join("<span></span>");
                  (a = document.createElement("span")).setAttribute(
                    "aria-hidden",
                    "true"
                  ),
                    (a.className = "line-numbers-rows"),
                    (a.innerHTML = o),
                    i.hasAttribute("data-start") &&
                      (i.style.counterReset =
                        "linenumber " +
                        (parseInt(i.getAttribute("data-start"), 10) - 1)),
                    n.element.appendChild(a),
                    resizeElements([i]),
                    Prism.hooks.run("line-numbers", n);
                }
              }
            }),
            Prism.hooks.add("line-numbers", function (e) {
              (e.plugins = e.plugins || {}), (e.plugins.lineNumbers = !0);
            });
        }
        function resizeElements(e) {
          if (
            0 !=
            (e = e.filter(function (e) {
              var t = (
                e
                  ? window.getComputedStyle
                    ? getComputedStyle(e)
                    : e.currentStyle || null
                  : null
              )["white-space"];
              return "pre-wrap" === t || "pre-line" === t;
            })).length
          ) {
            var n = e
              .map(function (e) {
                var n = e.querySelector("code"),
                  a = e.querySelector(".line-numbers-rows");
                if (n && a) {
                  var r = e.querySelector(".line-numbers-sizer"),
                    i = n.textContent.split(t);
                  r ||
                    (((r = document.createElement("span")).className =
                      "line-numbers-sizer"),
                    n.appendChild(r)),
                    (r.innerHTML = "0"),
                    (r.style.display = "block");
                  var s = r.getBoundingClientRect().height;
                  return (
                    (r.innerHTML = ""),
                    {
                      element: e,
                      lines: i,
                      lineHeights: [],
                      oneLinerHeight: s,
                      sizer: r,
                    }
                  );
                }
              })
              .filter(Boolean);
            n.forEach(function (e) {
              var t = e.sizer,
                n = e.lines,
                a = e.lineHeights,
                r = e.oneLinerHeight;
              (a[n.length - 1] = void 0),
                n.forEach(function (e, n) {
                  if (e && e.length > 1) {
                    var i = t.appendChild(document.createElement("span"));
                    (i.style.display = "block"), (i.textContent = e);
                  } else a[n] = r;
                });
            }),
              n.forEach(function (e) {
                for (
                  var t = e.sizer, n = e.lineHeights, a = 0, r = 0;
                  r < n.length;
                  r++
                )
                  void 0 === n[r] &&
                    (n[r] = t.children[a++].getBoundingClientRect().height);
              }),
              n.forEach(function (e) {
                var t = e.sizer,
                  n = e.element.querySelector(".line-numbers-rows");
                (t.style.display = "none"),
                  (t.innerHTML = ""),
                  e.lineHeights.forEach(function (e, t) {
                    n.children[t].style.height = e + "px";
                  });
              });
          }
        }
      })();
    },
    15660: function (e, t, n) {
      /**
       * Prism: Lightweight, robust, elegant syntax highlighting
       *
       * @license MIT <https://opensource.org/licenses/MIT>
       * @author Lea Verou <https://lea.verou.me>
       * @namespace
       * @public
       */ var a,
        r,
        i = (function (e) {
          var t = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,
            n = 0,
            a = {},
            r = {
              manual: e.Prism && e.Prism.manual,
              disableWorkerMessageHandler:
                e.Prism && e.Prism.disableWorkerMessageHandler,
              util: {
                encode: function encode(e) {
                  return e instanceof Token
                    ? new Token(e.type, encode(e.content), e.alias)
                    : Array.isArray(e)
                    ? e.map(encode)
                    : e
                        .replace(/&/g, "&amp;")
                        .replace(/</g, "&lt;")
                        .replace(/\u00a0/g, " ");
                },
                type: function (e) {
                  return Object.prototype.toString.call(e).slice(8, -1);
                },
                objId: function (e) {
                  return (
                    e.__id || Object.defineProperty(e, "__id", { value: ++n }),
                    e.__id
                  );
                },
                clone: function deepClone(e, t) {
                  var n, a;
                  switch (((t = t || {}), r.util.type(e))) {
                    case "Object":
                      if (t[(a = r.util.objId(e))]) return t[a];
                      for (var i in ((n = {}), (t[a] = n), e))
                        e.hasOwnProperty(i) && (n[i] = deepClone(e[i], t));
                      return n;
                    case "Array":
                      if (t[(a = r.util.objId(e))]) return t[a];
                      return (
                        (n = []),
                        (t[a] = n),
                        e.forEach(function (e, a) {
                          n[a] = deepClone(e, t);
                        }),
                        n
                      );
                    default:
                      return e;
                  }
                },
                getLanguage: function (e) {
                  for (; e; ) {
                    var n = t.exec(e.className);
                    if (n) return n[1].toLowerCase();
                    e = e.parentElement;
                  }
                  return "none";
                },
                setLanguage: function (e, n) {
                  (e.className = e.className.replace(RegExp(t, "gi"), "")),
                    e.classList.add("language-" + n);
                },
                currentScript: function () {
                  if ("undefined" == typeof document) return null;
                  if ("currentScript" in document)
                    return document.currentScript;
                  try {
                    throw Error();
                  } catch (a) {
                    var e = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(
                      a.stack
                    ) || [])[1];
                    if (e) {
                      var t = document.getElementsByTagName("script");
                      for (var n in t) if (t[n].src == e) return t[n];
                    }
                    return null;
                  }
                },
                isActive: function (e, t, n) {
                  for (var a = "no-" + t; e; ) {
                    var r = e.classList;
                    if (r.contains(t)) return !0;
                    if (r.contains(a)) return !1;
                    e = e.parentElement;
                  }
                  return !!n;
                },
              },
              languages: {
                plain: a,
                plaintext: a,
                text: a,
                txt: a,
                extend: function (e, t) {
                  var n = r.util.clone(r.languages[e]);
                  for (var a in t) n[a] = t[a];
                  return n;
                },
                insertBefore: function (e, t, n, a) {
                  var i = (a = a || r.languages)[e],
                    s = {};
                  for (var o in i)
                    if (i.hasOwnProperty(o)) {
                      if (o == t)
                        for (var l in n) n.hasOwnProperty(l) && (s[l] = n[l]);
                      n.hasOwnProperty(o) || (s[o] = i[o]);
                    }
                  var u = a[e];
                  return (
                    (a[e] = s),
                    r.languages.DFS(r.languages, function (t, n) {
                      n === u && t != e && (this[t] = s);
                    }),
                    s
                  );
                },
                DFS: function DFS(e, t, n, a) {
                  a = a || {};
                  var i = r.util.objId;
                  for (var s in e)
                    if (e.hasOwnProperty(s)) {
                      t.call(e, s, e[s], n || s);
                      var o = e[s],
                        l = r.util.type(o);
                      "Object" !== l || a[i(o)]
                        ? "Array" !== l ||
                          a[i(o)] ||
                          ((a[i(o)] = !0), DFS(o, t, s, a))
                        : ((a[i(o)] = !0), DFS(o, t, null, a));
                    }
                },
              },
              plugins: {},
              highlightAll: function (e, t) {
                r.highlightAllUnder(document, e, t);
              },
              highlightAllUnder: function (e, t, n) {
                var a = {
                  callback: n,
                  container: e,
                  selector:
                    'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code',
                };
                r.hooks.run("before-highlightall", a),
                  (a.elements = Array.prototype.slice.apply(
                    a.container.querySelectorAll(a.selector)
                  )),
                  r.hooks.run("before-all-elements-highlight", a);
                for (var i, s = 0; (i = a.elements[s++]); )
                  r.highlightElement(i, !0 === t, a.callback);
              },
              highlightElement: function (t, n, a) {
                var i = r.util.getLanguage(t),
                  s = r.languages[i];
                r.util.setLanguage(t, i);
                var o = t.parentElement;
                o &&
                  "pre" === o.nodeName.toLowerCase() &&
                  r.util.setLanguage(o, i);
                var l = t.textContent,
                  u = { element: t, language: i, grammar: s, code: l };
                function insertHighlightedCode(e) {
                  (u.highlightedCode = e),
                    r.hooks.run("before-insert", u),
                    (u.element.innerHTML = u.highlightedCode),
                    r.hooks.run("after-highlight", u),
                    r.hooks.run("complete", u),
                    a && a.call(u.element);
                }
                if (
                  (r.hooks.run("before-sanity-check", u),
                  (o = u.element.parentElement) &&
                    "pre" === o.nodeName.toLowerCase() &&
                    !o.hasAttribute("tabindex") &&
                    o.setAttribute("tabindex", "0"),
                  !u.code)
                ) {
                  r.hooks.run("complete", u), a && a.call(u.element);
                  return;
                }
                if ((r.hooks.run("before-highlight", u), !u.grammar)) {
                  insertHighlightedCode(r.util.encode(u.code));
                  return;
                }
                if (n && e.Worker) {
                  var c = new Worker(r.filename);
                  (c.onmessage = function (e) {
                    insertHighlightedCode(e.data);
                  }),
                    c.postMessage(
                      JSON.stringify({
                        language: u.language,
                        code: u.code,
                        immediateClose: !0,
                      })
                    );
                } else
                  insertHighlightedCode(
                    r.highlight(u.code, u.grammar, u.language)
                  );
              },
              highlight: function (e, t, n) {
                var a = { code: e, grammar: t, language: n };
                if ((r.hooks.run("before-tokenize", a), !a.grammar))
                  throw Error(
                    'The language "' + a.language + '" has no grammar.'
                  );
                return (
                  (a.tokens = r.tokenize(a.code, a.grammar)),
                  r.hooks.run("after-tokenize", a),
                  Token.stringify(r.util.encode(a.tokens), a.language)
                );
              },
              tokenize: function (e, t) {
                var n = t.rest;
                if (n) {
                  for (var a in n) t[a] = n[a];
                  delete t.rest;
                }
                var i = new LinkedList();
                return (
                  addAfter(i, i.head, e),
                  (function matchGrammar(e, t, n, a, i, s) {
                    for (var o in n)
                      if (n.hasOwnProperty(o) && n[o]) {
                        var l = n[o];
                        l = Array.isArray(l) ? l : [l];
                        for (var u = 0; u < l.length; ++u) {
                          if (s && s.cause == o + "," + u) return;
                          var c = l[u],
                            d = c.inside,
                            p = !!c.lookbehind,
                            g = !!c.greedy,
                            f = c.alias;
                          if (g && !c.pattern.global) {
                            var h = c.pattern.toString().match(/[imsuy]*$/)[0];
                            c.pattern = RegExp(c.pattern.source, h + "g");
                          }
                          for (
                            var m = c.pattern || c, b = a.next, y = i;
                            b !== t.tail && (!s || !(y >= s.reach));
                            y += b.value.length, b = b.next
                          ) {
                            var k,
                              v = b.value;
                            if (t.length > e.length) return;
                            if (!(v instanceof Token)) {
                              var w = 1;
                              if (g) {
                                if (
                                  !(k = matchPattern(m, y, e, p)) ||
                                  k.index >= e.length
                                )
                                  break;
                                var S = k.index,
                                  E = k.index + k[0].length,
                                  A = y;
                                for (A += b.value.length; S >= A; )
                                  A += (b = b.next).value.length;
                                if (
                                  ((A -= b.value.length),
                                  (y = A),
                                  b.value instanceof Token)
                                )
                                  continue;
                                for (
                                  var x = b;
                                  x !== t.tail &&
                                  (A < E || "string" == typeof x.value);
                                  x = x.next
                                )
                                  w++, (A += x.value.length);
                                w--, (v = e.slice(y, A)), (k.index -= y);
                              } else if (!(k = matchPattern(m, 0, v, p)))
                                continue;
                              var S = k.index,
                                T = k[0],
                                F = v.slice(0, S),
                                _ = v.slice(S + T.length),
                                O = y + v.length;
                              s && O > s.reach && (s.reach = O);
                              var R = b.prev;
                              if (
                                (F &&
                                  ((R = addAfter(t, R, F)), (y += F.length)),
                                (function (e, t, n) {
                                  for (
                                    var a = t.next, r = 0;
                                    r < n && a !== e.tail;
                                    r++
                                  )
                                    a = a.next;
                                  (t.next = a), (a.prev = t), (e.length -= r);
                                })(t, R, w),
                                (b = addAfter(
                                  t,
                                  R,
                                  new Token(o, d ? r.tokenize(T, d) : T, f, T)
                                )),
                                _ && addAfter(t, b, _),
                                w > 1)
                              ) {
                                var I = { cause: o + "," + u, reach: O };
                                matchGrammar(e, t, n, b.prev, y, I),
                                  s && I.reach > s.reach && (s.reach = I.reach);
                              }
                            }
                          }
                        }
                      }
                  })(e, i, t, i.head, 0),
                  (function (e) {
                    for (var t = [], n = e.head.next; n !== e.tail; )
                      t.push(n.value), (n = n.next);
                    return t;
                  })(i)
                );
              },
              hooks: {
                all: {},
                add: function (e, t) {
                  var n = r.hooks.all;
                  (n[e] = n[e] || []), n[e].push(t);
                },
                run: function (e, t) {
                  var n = r.hooks.all[e];
                  if (n && n.length) for (var a, i = 0; (a = n[i++]); ) a(t);
                },
              },
              Token: Token,
            };
          function Token(e, t, n, a) {
            (this.type = e),
              (this.content = t),
              (this.alias = n),
              (this.length = 0 | (a || "").length);
          }
          function matchPattern(e, t, n, a) {
            e.lastIndex = t;
            var r = e.exec(n);
            if (r && a && r[1]) {
              var i = r[1].length;
              (r.index += i), (r[0] = r[0].slice(i));
            }
            return r;
          }
          function LinkedList() {
            var e = { value: null, prev: null, next: null },
              t = { value: null, prev: e, next: null };
            (e.next = t), (this.head = e), (this.tail = t), (this.length = 0);
          }
          function addAfter(e, t, n) {
            var a = t.next,
              r = { value: n, prev: t, next: a };
            return (t.next = r), (a.prev = r), e.length++, r;
          }
          if (
            ((e.Prism = r),
            (Token.stringify = function stringify(e, t) {
              if ("string" == typeof e) return e;
              if (Array.isArray(e)) {
                var n = "";
                return (
                  e.forEach(function (e) {
                    n += stringify(e, t);
                  }),
                  n
                );
              }
              var a = {
                  type: e.type,
                  content: stringify(e.content, t),
                  tag: "span",
                  classes: ["token", e.type],
                  attributes: {},
                  language: t,
                },
                i = e.alias;
              i &&
                (Array.isArray(i)
                  ? Array.prototype.push.apply(a.classes, i)
                  : a.classes.push(i)),
                r.hooks.run("wrap", a);
              var s = "";
              for (var o in a.attributes)
                s +=
                  " " +
                  o +
                  '="' +
                  (a.attributes[o] || "").replace(/"/g, "&quot;") +
                  '"';
              return (
                "<" +
                a.tag +
                ' class="' +
                a.classes.join(" ") +
                '"' +
                s +
                ">" +
                a.content +
                "</" +
                a.tag +
                ">"
              );
            }),
            !e.document)
          )
            return (
              e.addEventListener &&
                (r.disableWorkerMessageHandler ||
                  e.addEventListener(
                    "message",
                    function (t) {
                      var n = JSON.parse(t.data),
                        a = n.language,
                        i = n.code,
                        s = n.immediateClose;
                      e.postMessage(r.highlight(i, r.languages[a], a)),
                        s && e.close();
                    },
                    !1
                  )),
              r
            );
          var i = r.util.currentScript();
          function highlightAutomaticallyCallback() {
            r.manual || r.highlightAll();
          }
          if (
            (i &&
              ((r.filename = i.src),
              i.hasAttribute("data-manual") && (r.manual = !0)),
            !r.manual)
          ) {
            var s = document.readyState;
            "loading" === s || ("interactive" === s && i && i.defer)
              ? document.addEventListener(
                  "DOMContentLoaded",
                  highlightAutomaticallyCallback
                )
              : window.requestAnimationFrame
              ? window.requestAnimationFrame(highlightAutomaticallyCallback)
              : window.setTimeout(highlightAutomaticallyCallback, 16);
          }
          return r;
        })(
          "undefined" != typeof window
            ? window
            : "undefined" != typeof WorkerGlobalScope &&
              self instanceof WorkerGlobalScope
            ? self
            : {}
        );
      e.exports && (e.exports = i),
        void 0 !== n.g && (n.g.Prism = i),
        (i.languages.markup = {
          comment: { pattern: /<!--(?:(?!<!--)[\s\S])*?-->/, greedy: !0 },
          prolog: { pattern: /<\?[\s\S]+?\?>/, greedy: !0 },
          doctype: {
            pattern:
              /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
            greedy: !0,
            inside: {
              "internal-subset": {
                pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
                lookbehind: !0,
                greedy: !0,
                inside: null,
              },
              string: { pattern: /"[^"]*"|'[^']*'/, greedy: !0 },
              punctuation: /^<!|>$|[[\]]/,
              "doctype-tag": /^DOCTYPE/i,
              name: /[^\s<>'"]+/,
            },
          },
          cdata: { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, greedy: !0 },
          tag: {
            pattern:
              /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
            greedy: !0,
            inside: {
              tag: {
                pattern: /^<\/?[^\s>\/]+/,
                inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ },
              },
              "special-attr": [],
              "attr-value": {
                pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
                inside: {
                  punctuation: [
                    { pattern: /^=/, alias: "attr-equals" },
                    { pattern: /^(\s*)["']|["']$/, lookbehind: !0 },
                  ],
                },
              },
              punctuation: /\/?>/,
              "attr-name": {
                pattern: /[^\s>\/]+/,
                inside: { namespace: /^[^\s>\/:]+:/ },
              },
            },
          },
          entity: [
            { pattern: /&[\da-z]{1,8};/i, alias: "named-entity" },
            /&#x?[\da-f]{1,8};/i,
          ],
        }),
        (i.languages.markup.tag.inside["attr-value"].inside.entity =
          i.languages.markup.entity),
        (i.languages.markup.doctype.inside["internal-subset"].inside =
          i.languages.markup),
        i.hooks.add("wrap", function (e) {
          "entity" === e.type &&
            (e.attributes.title = e.content.replace(/&amp;/, "&"));
        }),
        Object.defineProperty(i.languages.markup.tag, "addInlined", {
          value: function (e, t) {
            var n = {};
            (n["language-" + t] = {
              pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
              lookbehind: !0,
              inside: i.languages[t],
            }),
              (n.cdata = /^<!\[CDATA\[|\]\]>$/i);
            var a = {
              "included-cdata": {
                pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
                inside: n,
              },
            };
            a["language-" + t] = { pattern: /[\s\S]+/, inside: i.languages[t] };
            var r = {};
            (r[e] = {
              pattern: RegExp(
                /(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(
                  /__/g,
                  function () {
                    return e;
                  }
                ),
                "i"
              ),
              lookbehind: !0,
              greedy: !0,
              inside: a,
            }),
              i.languages.insertBefore("markup", "cdata", r);
          },
        }),
        Object.defineProperty(i.languages.markup.tag, "addAttribute", {
          value: function (e, t) {
            i.languages.markup.tag.inside["special-attr"].push({
              pattern: RegExp(
                /(^|["'\s])/.source +
                  "(?:" +
                  e +
                  ")" +
                  /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,
                "i"
              ),
              lookbehind: !0,
              inside: {
                "attr-name": /^[^\s=]+/,
                "attr-value": {
                  pattern: /=[\s\S]+/,
                  inside: {
                    value: {
                      pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                      lookbehind: !0,
                      alias: [t, "language-" + t],
                      inside: i.languages[t],
                    },
                    punctuation: [
                      { pattern: /^=/, alias: "attr-equals" },
                      /"|'/,
                    ],
                  },
                },
              },
            });
          },
        }),
        (i.languages.html = i.languages.markup),
        (i.languages.mathml = i.languages.markup),
        (i.languages.svg = i.languages.markup),
        (i.languages.xml = i.languages.extend("markup", {})),
        (i.languages.ssml = i.languages.xml),
        (i.languages.atom = i.languages.xml),
        (i.languages.rss = i.languages.xml),
        (a =
          /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/),
        (i.languages.css = {
          comment: /\/\*[\s\S]*?\*\//,
          atrule: {
            pattern: RegExp(
              "@[\\w-](?:" +
                /[^;{\s"']|\s+(?!\s)/.source +
                "|" +
                a.source +
                ")*?" +
                /(?:;|(?=\s*\{))/.source
            ),
            inside: {
              rule: /^@[\w-]+/,
              "selector-function-argument": {
                pattern:
                  /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
                lookbehind: !0,
                alias: "selector",
              },
              keyword: {
                pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
                lookbehind: !0,
              },
            },
          },
          url: {
            pattern: RegExp(
              "\\burl\\((?:" +
                a.source +
                "|" +
                /(?:[^\\\r\n()"']|\\[\s\S])*/.source +
                ")\\)",
              "i"
            ),
            greedy: !0,
            inside: {
              function: /^url/i,
              punctuation: /^\(|\)$/,
              string: { pattern: RegExp("^" + a.source + "$"), alias: "url" },
            },
          },
          selector: {
            pattern: RegExp(
              "(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|" +
                a.source +
                ")*(?=\\s*\\{)"
            ),
            lookbehind: !0,
          },
          string: { pattern: a, greedy: !0 },
          property: {
            pattern:
              /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
            lookbehind: !0,
          },
          important: /!important\b/i,
          function: {
            pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
            lookbehind: !0,
          },
          punctuation: /[(){};:,]/,
        }),
        (i.languages.css.atrule.inside.rest = i.languages.css),
        (r = i.languages.markup) &&
          (r.tag.addInlined("style", "css"),
          r.tag.addAttribute("style", "css")),
        (i.languages.clike = {
          comment: [
            {
              pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
              lookbehind: !0,
              greedy: !0,
            },
            { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 },
          ],
          string: {
            pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
            greedy: !0,
          },
          "class-name": {
            pattern:
              /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
            lookbehind: !0,
            inside: { punctuation: /[.\\]/ },
          },
          keyword:
            /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
          boolean: /\b(?:false|true)\b/,
          function: /\b\w+(?=\()/,
          number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
          operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
          punctuation: /[{}[\];(),.:]/,
        }),
        (i.languages.javascript = i.languages.extend("clike", {
          "class-name": [
            i.languages.clike["class-name"],
            {
              pattern:
                /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
              lookbehind: !0,
            },
          ],
          keyword: [
            { pattern: /((?:^|\})\s*)catch\b/, lookbehind: !0 },
            {
              pattern:
                /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
              lookbehind: !0,
            },
          ],
          function:
            /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
          number: {
            pattern: RegExp(
              /(^|[^\w$])/.source +
                "(?:" +
                (/NaN|Infinity/.source +
                  "|" +
                  /0[bB][01]+(?:_[01]+)*n?/.source +
                  "|" +
                  /0[oO][0-7]+(?:_[0-7]+)*n?/.source +
                  "|" +
                  /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source +
                  "|") +
                /\d+(?:_\d+)*n/.source +
                "|" +
                /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/
                  .source +
                ")" +
                /(?![\w$])/.source
            ),
            lookbehind: !0,
          },
          operator:
            /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/,
        })),
        (i.languages.javascript["class-name"][0].pattern =
          /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/),
        i.languages.insertBefore("javascript", "keyword", {
          regex: {
            pattern: RegExp(
              /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source +
                /\//.source +
                "(?:" +
                /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/
                  .source +
                "|" +
                /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/
                  .source +
                ")" +
                /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/
                  .source
            ),
            lookbehind: !0,
            greedy: !0,
            inside: {
              "regex-source": {
                pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
                lookbehind: !0,
                alias: "language-regex",
                inside: i.languages.regex,
              },
              "regex-delimiter": /^\/|\/$/,
              "regex-flags": /^[a-z]+$/,
            },
          },
          "function-variable": {
            pattern:
              /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
            alias: "function",
          },
          parameter: [
            {
              pattern:
                /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
              lookbehind: !0,
              inside: i.languages.javascript,
            },
            {
              pattern:
                /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
              lookbehind: !0,
              inside: i.languages.javascript,
            },
            {
              pattern:
                /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
              lookbehind: !0,
              inside: i.languages.javascript,
            },
            {
              pattern:
                /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
              lookbehind: !0,
              inside: i.languages.javascript,
            },
          ],
          constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/,
        }),
        i.languages.insertBefore("javascript", "string", {
          hashbang: { pattern: /^#!.*/, greedy: !0, alias: "comment" },
          "template-string": {
            pattern:
              /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
            greedy: !0,
            inside: {
              "template-punctuation": { pattern: /^`|`$/, alias: "string" },
              interpolation: {
                pattern:
                  /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
                lookbehind: !0,
                inside: {
                  "interpolation-punctuation": {
                    pattern: /^\$\{|\}$/,
                    alias: "punctuation",
                  },
                  rest: i.languages.javascript,
                },
              },
              string: /[\s\S]+/,
            },
          },
          "string-property": {
            pattern:
              /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
            lookbehind: !0,
            greedy: !0,
            alias: "property",
          },
        }),
        i.languages.insertBefore("javascript", "operator", {
          "literal-property": {
            pattern:
              /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
            lookbehind: !0,
            alias: "property",
          },
        }),
        i.languages.markup &&
          (i.languages.markup.tag.addInlined("script", "javascript"),
          i.languages.markup.tag.addAttribute(
            /on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/
              .source,
            "javascript"
          )),
        (i.languages.js = i.languages.javascript),
        (function () {
          if (void 0 !== i && "undefined" != typeof document) {
            Element.prototype.matches ||
              (Element.prototype.matches =
                Element.prototype.msMatchesSelector ||
                Element.prototype.webkitMatchesSelector);
            var e = {
                js: "javascript",
                py: "python",
                rb: "ruby",
                ps1: "powershell",
                psm1: "powershell",
                sh: "bash",
                bat: "batch",
                h: "c",
                tex: "latex",
              },
              t = "data-src-status",
              n = "loading",
              a = "loaded",
              r =
                "pre[data-src]:not([" +
                t +
                '="' +
                a +
                '"]):not([' +
                t +
                '="' +
                n +
                '"])';
            i.hooks.add("before-highlightall", function (e) {
              e.selector += ", " + r;
            }),
              i.hooks.add("before-sanity-check", function (s) {
                var o = s.element;
                if (o.matches(r)) {
                  (s.code = ""), o.setAttribute(t, n);
                  var l,
                    u,
                    c,
                    d = o.appendChild(document.createElement("CODE"));
                  d.textContent = "Loading…";
                  var p = o.getAttribute("data-src"),
                    g = s.language;
                  if ("none" === g) {
                    var f = (/\.(\w+)$/.exec(p) || [, "none"])[1];
                    g = e[f] || f;
                  }
                  i.util.setLanguage(d, g), i.util.setLanguage(o, g);
                  var h = i.plugins.autoloader;
                  h && h.loadLanguages(g),
                    (l = function (e) {
                      o.setAttribute(t, a);
                      var n = (function (e) {
                        var t = /^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(
                          e || ""
                        );
                        if (t) {
                          var n = Number(t[1]),
                            a = t[2],
                            r = t[3];
                          return a
                            ? r
                              ? [n, Number(r)]
                              : [n, void 0]
                            : [n, n];
                        }
                      })(o.getAttribute("data-range"));
                      if (n) {
                        var r = e.split(/\r\n?|\n/g),
                          s = n[0],
                          l = null == n[1] ? r.length : n[1];
                        s < 0 && (s += r.length),
                          (s = Math.max(0, Math.min(s - 1, r.length))),
                          l < 0 && (l += r.length),
                          (l = Math.max(0, Math.min(l, r.length))),
                          (e = r.slice(s, l).join("\n")),
                          o.hasAttribute("data-start") ||
                            o.setAttribute("data-start", String(s + 1));
                      }
                      (d.textContent = e), i.highlightElement(d);
                    }),
                    (u = function (e) {
                      o.setAttribute(t, "failed"), (d.textContent = e);
                    }),
                    (c = new XMLHttpRequest()).open("GET", p, !0),
                    (c.onreadystatechange = function () {
                      4 == c.readyState &&
                        (c.status < 400 && c.responseText
                          ? l(c.responseText)
                          : c.status >= 400
                          ? u(
                              "✖ Error " +
                                c.status +
                                " while fetching file: " +
                                c.statusText
                            )
                          : u("✖ Error: File does not exist or is empty"));
                    }),
                    c.send(null);
                }
              }),
              (i.plugins.fileHighlight = {
                highlight: function (e) {
                  for (
                    var t, n = (e || document).querySelectorAll(r), a = 0;
                    (t = n[a++]);

                  )
                    i.highlightElement(t);
                },
              });
            var s = !1;
            i.fileHighlight = function () {
              s ||
                (console.warn(
                  "Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."
                ),
                (s = !0)),
                i.plugins.fileHighlight.highlight.apply(this, arguments);
            };
          }
        })();
    },
    96747: function (e, t, n) {
      "use strict";
      var a =
          (this && this.__assign) ||
          function () {
            return (a =
              Object.assign ||
              function (e) {
                for (var t, n = 1, a = arguments.length; n < a; n++)
                  for (var r in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e;
              }).apply(this, arguments);
          },
        r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, n, a) {
                void 0 === a && (a = n);
                var r = Object.getOwnPropertyDescriptor(t, n);
                (!r ||
                  ("get" in r
                    ? !t.__esModule
                    : r.writable || r.configurable)) &&
                  (r = {
                    enumerable: !0,
                    get: function () {
                      return t[n];
                    },
                  }),
                  Object.defineProperty(e, a, r);
              }
            : function (e, t, n, a) {
                void 0 === a && (a = n), (e[a] = t[n]);
              }),
        i =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (e, t) {
                Object.defineProperty(e, "default", {
                  enumerable: !0,
                  value: t,
                });
              }
            : function (e, t) {
                e.default = t;
              }),
        s =
          (this && this.__importStar) ||
          function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var n in e)
                "default" !== n &&
                  Object.prototype.hasOwnProperty.call(e, n) &&
                  r(t, e, n);
            return i(t, e), t;
          },
        o =
          (this && this.__rest) ||
          function (e, t) {
            var n = {};
            for (var a in e)
              Object.prototype.hasOwnProperty.call(e, a) &&
                0 > t.indexOf(a) &&
                (n[a] = e[a]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols)
              for (
                var r = 0, a = Object.getOwnPropertySymbols(e);
                r < a.length;
                r++
              )
                0 > t.indexOf(a[r]) &&
                  Object.prototype.propertyIsEnumerable.call(e, a[r]) &&
                  (n[a[r]] = e[a[r]]);
            return n;
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var l = s(n(67294)),
        u = n(96657),
        c = n(60010),
        d = n(4333),
        p = (0, c.createAnimation)(
          "BarLoader",
          "0% {left: -35%;right: 100%} 60% {left: 100%;right: -90%} 100% {left: 100%;right: -90%}",
          "long"
        ),
        g = (0, c.createAnimation)(
          "BarLoader",
          "0% {left: -200%;right: 100%} 60% {left: 107%;right: -8%} 100% {left: 107%;right: -8%}",
          "short"
        );
      t.default = function (e) {
        var t = e.loading,
          n = e.color,
          r = void 0 === n ? "#000000" : n,
          i = e.speedMultiplier,
          s = void 0 === i ? 1 : i,
          c = e.cssOverride,
          f = e.height,
          h = void 0 === f ? 4 : f,
          m = e.width,
          b = o(e, [
            "loading",
            "color",
            "speedMultiplier",
            "cssOverride",
            "height",
            "width",
          ]),
          y = a(
            {
              display: "inherit",
              position: "relative",
              width: (0, u.cssValue)(void 0 === m ? 100 : m),
              height: (0, u.cssValue)(h),
              overflow: "hidden",
              backgroundColor: (0, d.calculateRgba)(r, 0.2),
              backgroundClip: "padding-box",
            },
            void 0 === c ? {} : c
          ),
          style = function (e) {
            return {
              position: "absolute",
              height: (0, u.cssValue)(h),
              overflow: "hidden",
              backgroundColor: r,
              backgroundClip: "padding-box",
              display: "block",
              borderRadius: 2,
              willChange: "left, right",
              animationFillMode: "forwards",
              animation: ""
                .concat(1 === e ? p : g, " ")
                .concat(2.1 / s, "s ")
                .concat(2 === e ? "".concat(1.15 / s, "s") : "", " ")
                .concat(
                  1 === e
                    ? "cubic-bezier(0.65, 0.815, 0.735, 0.395)"
                    : "cubic-bezier(0.165, 0.84, 0.44, 1)",
                  " infinite"
                ),
            };
          };
        return void 0 === t || t
          ? l.createElement(
              "span",
              a({ style: y }, b),
              l.createElement("span", { style: style(1) }),
              l.createElement("span", { style: style(2) })
            )
          : null;
      };
    },
    60010: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.createAnimation = void 0),
        (t.createAnimation = function (e, t, n) {
          var a = "react-spinners-".concat(e, "-").concat(n);
          if ("undefined" == typeof window || !window.document) return a;
          var r = document.createElement("style");
          document.head.appendChild(r);
          var i = r.sheet,
            s = "\n    @keyframes "
              .concat(a, " {\n      ")
              .concat(t, "\n    }\n  ");
          return i && i.insertRule(s, 0), a;
        });
    },
    4333: function (e, t) {
      "use strict";
      var n, a;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.calculateRgba = void 0),
        ((n = a || (a = {})).maroon = "#800000"),
        (n.red = "#FF0000"),
        (n.orange = "#FFA500"),
        (n.yellow = "#FFFF00"),
        (n.olive = "#808000"),
        (n.green = "#008000"),
        (n.purple = "#800080"),
        (n.fuchsia = "#FF00FF"),
        (n.lime = "#00FF00"),
        (n.teal = "#008080"),
        (n.aqua = "#00FFFF"),
        (n.blue = "#0000FF"),
        (n.navy = "#000080"),
        (n.black = "#000000"),
        (n.gray = "#808080"),
        (n.silver = "#C0C0C0"),
        (n.white = "#FFFFFF"),
        (t.calculateRgba = function (e, t) {
          if (
            (Object.keys(a).includes(e) && (e = a[e]),
            "#" === e[0] && (e = e.slice(1)),
            3 === e.length)
          ) {
            var n = "";
            e.split("").forEach(function (e) {
              n += e + e;
            }),
              (e = n);
          }
          var r = (e.match(/.{2}/g) || [])
            .map(function (e) {
              return parseInt(e, 16);
            })
            .join(", ");
          return "rgba(".concat(r, ", ").concat(t, ")");
        });
    },
    96657: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.cssValue = t.parseLengthAndUnit = void 0);
      var n = {
        cm: !0,
        mm: !0,
        in: !0,
        px: !0,
        pt: !0,
        pc: !0,
        em: !0,
        ex: !0,
        ch: !0,
        rem: !0,
        vw: !0,
        vh: !0,
        vmin: !0,
        vmax: !0,
        "%": !0,
      };
      function parseLengthAndUnit(e) {
        if ("number" == typeof e) return { value: e, unit: "px" };
        var t,
          a = (e.match(/^[0-9.]*/) || "").toString();
        t = a.includes(".") ? parseFloat(a) : parseInt(a, 10);
        var r = (e.match(/[^0-9]*$/) || "").toString();
        return n[r]
          ? { value: t, unit: r }
          : (console.warn(
              "React Spinners: "
                .concat(e, " is not a valid css value. Defaulting to ")
                .concat(t, "px.")
            ),
            { value: t, unit: "px" });
      }
      (t.parseLengthAndUnit = parseLengthAndUnit),
        (t.cssValue = function (e) {
          var t = parseLengthAndUnit(e);
          return "".concat(t.value).concat(t.unit);
        });
    },
    42708: function (e, t, n) {
      "use strict";
      n.d(t, {
        YD: function () {
          return useInView;
        },
      });
      var a = n(67294),
        r = Object.defineProperty,
        i = new Map(),
        s = new WeakMap(),
        o = 0,
        l = void 0;
      function useInView({
        threshold: e,
        delay: t,
        trackVisibility: n,
        rootMargin: r,
        root: u,
        triggerOnce: c,
        skip: d,
        initialInView: p,
        fallbackInView: g,
        onChange: f,
      } = {}) {
        var h;
        let [m, b] = a.useState(null),
          y = a.useRef(),
          [k, v] = a.useState({ inView: !!p, entry: void 0 });
        (y.current = f),
          a.useEffect(() => {
            let a;
            if (!d && m)
              return (
                (a = (function (e, t, n = {}, a = l) {
                  if (void 0 === window.IntersectionObserver && void 0 !== a) {
                    let r = e.getBoundingClientRect();
                    return (
                      t(a, {
                        isIntersecting: a,
                        target: e,
                        intersectionRatio:
                          "number" == typeof n.threshold ? n.threshold : 0,
                        time: 0,
                        boundingClientRect: r,
                        intersectionRect: r,
                        rootBounds: r,
                      }),
                      () => {}
                    );
                  }
                  let {
                      id: r,
                      observer: u,
                      elements: c,
                    } = (function (e) {
                      let t = Object.keys(e)
                          .sort()
                          .filter((t) => void 0 !== e[t])
                          .map((t) => {
                            var n;
                            return `${t}_${
                              "root" === t
                                ? (n = e.root)
                                  ? (s.has(n) ||
                                      ((o += 1), s.set(n, o.toString())),
                                    s.get(n))
                                  : "0"
                                : e[t]
                            }`;
                          })
                          .toString(),
                        n = i.get(t);
                      if (!n) {
                        let a;
                        let r = new Map(),
                          s = new IntersectionObserver((t) => {
                            t.forEach((t) => {
                              var n;
                              let i =
                                t.isIntersecting &&
                                a.some((e) => t.intersectionRatio >= e);
                              e.trackVisibility &&
                                void 0 === t.isVisible &&
                                (t.isVisible = i),
                                null == (n = r.get(t.target)) ||
                                  n.forEach((e) => {
                                    e(i, t);
                                  });
                            });
                          }, e);
                        (a =
                          s.thresholds ||
                          (Array.isArray(e.threshold)
                            ? e.threshold
                            : [e.threshold || 0])),
                          (n = { id: t, observer: s, elements: r }),
                          i.set(t, n);
                      }
                      return n;
                    })(n),
                    d = c.get(e) || [];
                  return (
                    c.has(e) || c.set(e, d),
                    d.push(t),
                    u.observe(e),
                    function () {
                      d.splice(d.indexOf(t), 1),
                        0 === d.length && (c.delete(e), u.unobserve(e)),
                        0 === c.size && (u.disconnect(), i.delete(r));
                    }
                  );
                })(
                  m,
                  (e, t) => {
                    v({ inView: e, entry: t }),
                      y.current && y.current(e, t),
                      t.isIntersecting && c && a && (a(), (a = void 0));
                  },
                  {
                    root: u,
                    rootMargin: r,
                    threshold: e,
                    trackVisibility: n,
                    delay: t,
                  },
                  g
                )),
                () => {
                  a && a();
                }
              );
          }, [Array.isArray(e) ? e.toString() : e, m, u, r, c, d, n, g, t]);
        let w = null == (h = k.entry) ? void 0 : h.target,
          S = a.useRef();
        m ||
          !w ||
          c ||
          d ||
          S.current === w ||
          ((S.current = w), v({ inView: !!p, entry: void 0 }));
        let E = [b, k.inView, k.entry];
        return (E.ref = E[0]), (E.inView = E[1]), (E.entry = E[2]), E;
      }
      a.Component;
    },
  },
]);
