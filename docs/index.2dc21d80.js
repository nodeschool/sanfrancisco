function e(e, n, t, r) {
  Object.defineProperty(e, n, {
    get: t,
    set: r,
    enumerable: !0,
    configurable: !0,
  });
}
function n(e) {
  return e && e.__esModule ? e.default : e;
}
var t =
    "undefined" != typeof globalThis
      ? globalThis
      : "undefined" != typeof self
      ? self
      : "undefined" != typeof window
      ? window
      : "undefined" != typeof global
      ? global
      : {},
  r = {},
  l = {},
  a = t.parcelRequire0255;
null == a &&
  (((a = function (e) {
    if (e in r) return r[e].exports;
    if (e in l) {
      var n = l[e];
      delete l[e];
      var t = { id: e, exports: {} };
      return (r[e] = t), n.call(t.exports, t, t.exports), t.exports;
    }
    var a = new Error("Cannot find module '" + e + "'");
    throw ((a.code = "MODULE_NOT_FOUND"), a);
  }).register = function (e, n) {
    l[e] = n;
  }),
  (t.parcelRequire0255 = a)),
  a.register("27Lyk", function (n, t) {
    var r, l;
    e(
      n.exports,
      "register",
      () => r,
      (e) => (r = e)
    ),
      e(
        n.exports,
        "resolve",
        () => l,
        (e) => (l = e)
      );
    var a = {};
    (r = function (e) {
      for (var n = Object.keys(e), t = 0; t < n.length; t++) a[n[t]] = e[n[t]];
    }),
      (l = function (e) {
        var n = a[e];
        if (null == n) throw new Error("Could not resolve bundle with id " + e);
        return n;
      });
  }),
  a.register("1b2ls", function (n, t) {
    var r, l, o;
    e(
      n.exports,
      "Fragment",
      () => r,
      (e) => (r = e)
    ),
      e(
        n.exports,
        "jsx",
        () => l,
        (e) => (l = e)
      ),
      e(
        n.exports,
        "jsxs",
        () => o,
        (e) => (o = e)
      );
    var i = a("acw62"),
      u = Symbol.for("react.element"),
      s = Symbol.for("react.fragment"),
      c = Object.prototype.hasOwnProperty,
      f =
        i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
      d = { key: !0, ref: !0, __self: !0, __source: !0 };
    function p(e, n, t) {
      var r,
        l = {},
        a = null,
        o = null;
      for (r in (void 0 !== t && (a = "" + t),
      void 0 !== n.key && (a = "" + n.key),
      void 0 !== n.ref && (o = n.ref),
      n))
        c.call(n, r) && !d.hasOwnProperty(r) && (l[r] = n[r]);
      if (e && e.defaultProps)
        for (r in (n = e.defaultProps)) void 0 === l[r] && (l[r] = n[r]);
      return {
        $$typeof: u,
        type: e,
        key: a,
        ref: o,
        props: l,
        _owner: f.current,
      };
    }
    (r = s), (l = p), (o = p);
  }),
  a.register("acw62", function (e, n) {
    e.exports = a("2pUnB");
  }),
  a.register("2pUnB", function (n, t) {
    var r,
      l,
      a,
      o,
      i,
      u,
      s,
      c,
      f,
      d,
      p,
      h,
      m,
      g,
      v,
      y,
      b,
      w,
      k,
      x,
      S,
      _,
      E,
      N,
      C,
      P,
      z,
      j,
      L,
      T,
      F,
      R,
      M,
      O,
      I;
    e(
      n.exports,
      "Children",
      () => r,
      (e) => (r = e)
    ),
      e(
        n.exports,
        "Component",
        () => l,
        (e) => (l = e)
      ),
      e(
        n.exports,
        "Fragment",
        () => a,
        (e) => (a = e)
      ),
      e(
        n.exports,
        "Profiler",
        () => o,
        (e) => (o = e)
      ),
      e(
        n.exports,
        "PureComponent",
        () => i,
        (e) => (i = e)
      ),
      e(
        n.exports,
        "StrictMode",
        () => u,
        (e) => (u = e)
      ),
      e(
        n.exports,
        "Suspense",
        () => s,
        (e) => (s = e)
      ),
      e(
        n.exports,
        "__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED",
        () => c,
        (e) => (c = e)
      ),
      e(
        n.exports,
        "cloneElement",
        () => f,
        (e) => (f = e)
      ),
      e(
        n.exports,
        "createContext",
        () => d,
        (e) => (d = e)
      ),
      e(
        n.exports,
        "createElement",
        () => p,
        (e) => (p = e)
      ),
      e(
        n.exports,
        "createFactory",
        () => h,
        (e) => (h = e)
      ),
      e(
        n.exports,
        "createRef",
        () => m,
        (e) => (m = e)
      ),
      e(
        n.exports,
        "forwardRef",
        () => g,
        (e) => (g = e)
      ),
      e(
        n.exports,
        "isValidElement",
        () => v,
        (e) => (v = e)
      ),
      e(
        n.exports,
        "lazy",
        () => y,
        (e) => (y = e)
      ),
      e(
        n.exports,
        "memo",
        () => b,
        (e) => (b = e)
      ),
      e(
        n.exports,
        "startTransition",
        () => w,
        (e) => (w = e)
      ),
      e(
        n.exports,
        "unstable_act",
        () => k,
        (e) => (k = e)
      ),
      e(
        n.exports,
        "useCallback",
        () => x,
        (e) => (x = e)
      ),
      e(
        n.exports,
        "useContext",
        () => S,
        (e) => (S = e)
      ),
      e(
        n.exports,
        "useDebugValue",
        () => _,
        (e) => (_ = e)
      ),
      e(
        n.exports,
        "useDeferredValue",
        () => E,
        (e) => (E = e)
      ),
      e(
        n.exports,
        "useEffect",
        () => N,
        (e) => (N = e)
      ),
      e(
        n.exports,
        "useId",
        () => C,
        (e) => (C = e)
      ),
      e(
        n.exports,
        "useImperativeHandle",
        () => P,
        (e) => (P = e)
      ),
      e(
        n.exports,
        "useInsertionEffect",
        () => z,
        (e) => (z = e)
      ),
      e(
        n.exports,
        "useLayoutEffect",
        () => j,
        (e) => (j = e)
      ),
      e(
        n.exports,
        "useMemo",
        () => L,
        (e) => (L = e)
      ),
      e(
        n.exports,
        "useReducer",
        () => T,
        (e) => (T = e)
      ),
      e(
        n.exports,
        "useRef",
        () => F,
        (e) => (F = e)
      ),
      e(
        n.exports,
        "useState",
        () => R,
        (e) => (R = e)
      ),
      e(
        n.exports,
        "useSyncExternalStore",
        () => M,
        (e) => (M = e)
      ),
      e(
        n.exports,
        "useTransition",
        () => O,
        (e) => (O = e)
      ),
      e(
        n.exports,
        "version",
        () => I,
        (e) => (I = e)
      );
    var D = Symbol.for("react.element"),
      U = Symbol.for("react.portal"),
      A = Symbol.for("react.fragment"),
      W = Symbol.for("react.strict_mode"),
      q = Symbol.for("react.profiler"),
      $ = Symbol.for("react.provider"),
      H = Symbol.for("react.context"),
      V = Symbol.for("react.forward_ref"),
      B = Symbol.for("react.suspense"),
      Q = Symbol.for("react.memo"),
      K = Symbol.for("react.lazy"),
      Y = Symbol.iterator;
    var X = {
        isMounted: function () {
          return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
      },
      G = Object.assign,
      J = {};
    function Z(e, n, t) {
      (this.props = e),
        (this.context = n),
        (this.refs = J),
        (this.updater = t || X);
    }
    function ee() {}
    function ne(e, n, t) {
      (this.props = e),
        (this.context = n),
        (this.refs = J),
        (this.updater = t || X);
    }
    (Z.prototype.isReactComponent = {}),
      (Z.prototype.setState = function (e, n) {
        if ("object" != typeof e && "function" != typeof e && null != e)
          throw Error(
            "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
          );
        this.updater.enqueueSetState(this, e, n, "setState");
      }),
      (Z.prototype.forceUpdate = function (e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
      }),
      (ee.prototype = Z.prototype);
    var te = (ne.prototype = new ee());
    (te.constructor = ne), G(te, Z.prototype), (te.isPureReactComponent = !0);
    var re = Array.isArray,
      le = Object.prototype.hasOwnProperty,
      ae = { current: null },
      oe = { key: !0, ref: !0, __self: !0, __source: !0 };
    function ie(e, n, t) {
      var r,
        l = {},
        a = null,
        o = null;
      if (null != n)
        for (r in (void 0 !== n.ref && (o = n.ref),
        void 0 !== n.key && (a = "" + n.key),
        n))
          le.call(n, r) && !oe.hasOwnProperty(r) && (l[r] = n[r]);
      var i = arguments.length - 2;
      if (1 === i) l.children = t;
      else if (1 < i) {
        for (var u = Array(i), s = 0; s < i; s++) u[s] = arguments[s + 2];
        l.children = u;
      }
      if (e && e.defaultProps)
        for (r in (i = e.defaultProps)) void 0 === l[r] && (l[r] = i[r]);
      return {
        $$typeof: D,
        type: e,
        key: a,
        ref: o,
        props: l,
        _owner: ae.current,
      };
    }
    function ue(e) {
      return "object" == typeof e && null !== e && e.$$typeof === D;
    }
    var se = /\/+/g;
    function ce(e, n) {
      return "object" == typeof e && null !== e && null != e.key
        ? (function (e) {
            var n = { "=": "=0", ":": "=2" };
            return (
              "$" +
              e.replace(/[=:]/g, function (e) {
                return n[e];
              })
            );
          })("" + e.key)
        : n.toString(36);
    }
    function fe(e, n, t, r, l) {
      var a = typeof e;
      ("undefined" !== a && "boolean" !== a) || (e = null);
      var o,
        i = !1;
      if (null === e) i = !0;
      else
        switch (a) {
          case "string":
          case "number":
            i = !0;
            break;
          case "object":
            switch (e.$$typeof) {
              case D:
              case U:
                i = !0;
            }
        }
      if (i)
        return (
          (l = l((i = e))),
          (e = "" === r ? "." + ce(i, 0) : r),
          re(l)
            ? ((t = ""),
              null != e && (t = e.replace(se, "$&/") + "/"),
              fe(l, n, t, "", function (e) {
                return e;
              }))
            : null != l &&
              (ue(l) &&
                (l = (function (e, n) {
                  return {
                    $$typeof: D,
                    type: e.type,
                    key: n,
                    ref: e.ref,
                    props: e.props,
                    _owner: e._owner,
                  };
                })(
                  l,
                  t +
                    (!l.key || (i && i.key === l.key)
                      ? ""
                      : ("" + l.key).replace(se, "$&/") + "/") +
                    e
                )),
              n.push(l)),
          1
        );
      if (((i = 0), (r = "" === r ? "." : r + ":"), re(e)))
        for (var u = 0; u < e.length; u++) {
          var s = r + ce((a = e[u]), u);
          i += fe(a, n, t, s, l);
        }
      else if (
        "function" ==
        typeof (s =
          null === (o = e) || "object" != typeof o
            ? null
            : "function" == typeof (o = (Y && o[Y]) || o["@@iterator"])
            ? o
            : null)
      )
        for (e = s.call(e), u = 0; !(a = e.next()).done; )
          i += fe((a = a.value), n, t, (s = r + ce(a, u++)), l);
      else if ("object" === a)
        throw (
          ((n = String(e)),
          Error(
            "Objects are not valid as a React child (found: " +
              ("[object Object]" === n
                ? "object with keys {" + Object.keys(e).join(", ") + "}"
                : n) +
              "). If you meant to render a collection of children, use an array instead."
          ))
        );
      return i;
    }
    function de(e, n, t) {
      if (null == e) return e;
      var r = [],
        l = 0;
      return (
        fe(e, r, "", "", function (e) {
          return n.call(t, e, l++);
        }),
        r
      );
    }
    function pe(e) {
      if (-1 === e._status) {
        var n = e._result;
        (n = n()).then(
          function (n) {
            (0 !== e._status && -1 !== e._status) ||
              ((e._status = 1), (e._result = n));
          },
          function (n) {
            (0 !== e._status && -1 !== e._status) ||
              ((e._status = 2), (e._result = n));
          }
        ),
          -1 === e._status && ((e._status = 0), (e._result = n));
      }
      if (1 === e._status) return e._result.default;
      throw e._result;
    }
    var he = { current: null },
      me = { transition: null };
    (r = {
      map: de,
      forEach: function (e, n, t) {
        de(
          e,
          function () {
            n.apply(this, arguments);
          },
          t
        );
      },
      count: function (e) {
        var n = 0;
        return (
          de(e, function () {
            n++;
          }),
          n
        );
      },
      toArray: function (e) {
        return (
          de(e, function (e) {
            return e;
          }) || []
        );
      },
      only: function (e) {
        if (!ue(e))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return e;
      },
    }),
      (l = Z),
      (a = A),
      (o = q),
      (i = ne),
      (u = W),
      (s = B),
      (c = {
        ReactCurrentDispatcher: he,
        ReactCurrentBatchConfig: me,
        ReactCurrentOwner: ae,
      }),
      (f = function (e, n, t) {
        if (null == e)
          throw Error(
            "React.cloneElement(...): The argument must be a React element, but you passed " +
              e +
              "."
          );
        var r = G({}, e.props),
          l = e.key,
          a = e.ref,
          o = e._owner;
        if (null != n) {
          if (
            (void 0 !== n.ref && ((a = n.ref), (o = ae.current)),
            void 0 !== n.key && (l = "" + n.key),
            e.type && e.type.defaultProps)
          )
            var i = e.type.defaultProps;
          for (u in n)
            le.call(n, u) &&
              !oe.hasOwnProperty(u) &&
              (r[u] = void 0 === n[u] && void 0 !== i ? i[u] : n[u]);
        }
        var u = arguments.length - 2;
        if (1 === u) r.children = t;
        else if (1 < u) {
          i = Array(u);
          for (var s = 0; s < u; s++) i[s] = arguments[s + 2];
          r.children = i;
        }
        return {
          $$typeof: D,
          type: e.type,
          key: l,
          ref: a,
          props: r,
          _owner: o,
        };
      }),
      (d = function (e) {
        return (
          ((e = {
            $$typeof: H,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null,
          }).Provider = { $$typeof: $, _context: e }),
          (e.Consumer = e)
        );
      }),
      (p = ie),
      (h = function (e) {
        var n = ie.bind(null, e);
        return (n.type = e), n;
      }),
      (m = function () {
        return { current: null };
      }),
      (g = function (e) {
        return { $$typeof: V, render: e };
      }),
      (v = ue),
      (y = function (e) {
        return {
          $$typeof: K,
          _payload: { _status: -1, _result: e },
          _init: pe,
        };
      }),
      (b = function (e, n) {
        return { $$typeof: Q, type: e, compare: void 0 === n ? null : n };
      }),
      (w = function (e) {
        var n = me.transition;
        me.transition = {};
        try {
          e();
        } finally {
          me.transition = n;
        }
      }),
      (k = function () {
        throw Error("act(...) is not supported in production builds of React.");
      }),
      (x = function (e, n) {
        return he.current.useCallback(e, n);
      }),
      (S = function (e) {
        return he.current.useContext(e);
      }),
      (_ = function () {}),
      (E = function (e) {
        return he.current.useDeferredValue(e);
      }),
      (N = function (e, n) {
        return he.current.useEffect(e, n);
      }),
      (C = function () {
        return he.current.useId();
      }),
      (P = function (e, n, t) {
        return he.current.useImperativeHandle(e, n, t);
      }),
      (z = function (e, n) {
        return he.current.useInsertionEffect(e, n);
      }),
      (j = function (e, n) {
        return he.current.useLayoutEffect(e, n);
      }),
      (L = function (e, n) {
        return he.current.useMemo(e, n);
      }),
      (T = function (e, n, t) {
        return he.current.useReducer(e, n, t);
      }),
      (F = function (e) {
        return he.current.useRef(e);
      }),
      (R = function (e) {
        return he.current.useState(e);
      }),
      (M = function (e, n, t) {
        return he.current.useSyncExternalStore(e, n, t);
      }),
      (O = function () {
        return he.current.useTransition();
      }),
      (I = "18.1.0");
  }),
  a.register("Xw6Mv", function (n, t) {
    var r, l, o, i, u, s, c, f, d, p, h, m;
    e(
      n.exports,
      "__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED",
      () => r,
      (e) => (r = e)
    ),
      e(
        n.exports,
        "createPortal",
        () => l,
        (e) => (l = e)
      ),
      e(
        n.exports,
        "createRoot",
        () => o,
        (e) => (o = e)
      ),
      e(
        n.exports,
        "findDOMNode",
        () => i,
        (e) => (i = e)
      ),
      e(
        n.exports,
        "flushSync",
        () => u,
        (e) => (u = e)
      ),
      e(
        n.exports,
        "hydrate",
        () => s,
        (e) => (s = e)
      ),
      e(
        n.exports,
        "hydrateRoot",
        () => c,
        (e) => (c = e)
      ),
      e(
        n.exports,
        "render",
        () => f,
        (e) => (f = e)
      ),
      e(
        n.exports,
        "unmountComponentAtNode",
        () => d,
        (e) => (d = e)
      ),
      e(
        n.exports,
        "unstable_batchedUpdates",
        () => p,
        (e) => (p = e)
      ),
      e(
        n.exports,
        "unstable_renderSubtreeIntoContainer",
        () => h,
        (e) => (h = e)
      ),
      e(
        n.exports,
        "version",
        () => m,
        (e) => (m = e)
      );
    var g = a("acw62"),
      v = a("fO90s");
    function y(e) {
      for (
        var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
          t = 1;
        t < arguments.length;
        t++
      )
        n += "&args[]=" + encodeURIComponent(arguments[t]);
      return (
        "Minified React error #" +
        e +
        "; visit " +
        n +
        " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
      );
    }
    var b = new Set(),
      w = {};
    function k(e, n) {
      x(e, n), x(e + "Capture", n);
    }
    function x(e, n) {
      for (w[e] = n, e = 0; e < n.length; e++) b.add(n[e]);
    }
    var S = !(
        "undefined" == typeof window ||
        void 0 === window.document ||
        void 0 === window.document.createElement
      ),
      _ = Object.prototype.hasOwnProperty,
      E =
        /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
      N = {},
      C = {};
    function P(e, n, t, r, l, a, o) {
      (this.acceptsBooleans = 2 === n || 3 === n || 4 === n),
        (this.attributeName = r),
        (this.attributeNamespace = l),
        (this.mustUseProperty = t),
        (this.propertyName = e),
        (this.type = n),
        (this.sanitizeURL = a),
        (this.removeEmptyString = o);
    }
    var z = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
      .split(" ")
      .forEach(function (e) {
        z[e] = new P(e, 0, !1, e, null, !1, !1);
      }),
      [
        ["acceptCharset", "accept-charset"],
        ["className", "class"],
        ["htmlFor", "for"],
        ["httpEquiv", "http-equiv"],
      ].forEach(function (e) {
        var n = e[0];
        z[n] = new P(n, 1, !1, e[1], null, !1, !1);
      }),
      ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (
        e
      ) {
        z[e] = new P(e, 2, !1, e.toLowerCase(), null, !1, !1);
      }),
      [
        "autoReverse",
        "externalResourcesRequired",
        "focusable",
        "preserveAlpha",
      ].forEach(function (e) {
        z[e] = new P(e, 2, !1, e, null, !1, !1);
      }),
      "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
        .split(" ")
        .forEach(function (e) {
          z[e] = new P(e, 3, !1, e.toLowerCase(), null, !1, !1);
        }),
      ["checked", "multiple", "muted", "selected"].forEach(function (e) {
        z[e] = new P(e, 3, !0, e, null, !1, !1);
      }),
      ["capture", "download"].forEach(function (e) {
        z[e] = new P(e, 4, !1, e, null, !1, !1);
      }),
      ["cols", "rows", "size", "span"].forEach(function (e) {
        z[e] = new P(e, 6, !1, e, null, !1, !1);
      }),
      ["rowSpan", "start"].forEach(function (e) {
        z[e] = new P(e, 5, !1, e.toLowerCase(), null, !1, !1);
      });
    var j = /[\-:]([a-z])/g;
    function L(e) {
      return e[1].toUpperCase();
    }
    function T(e, n, t, r) {
      var l = z.hasOwnProperty(n) ? z[n] : null;
      (null !== l
        ? 0 !== l.type
        : r ||
          !(2 < n.length) ||
          ("o" !== n[0] && "O" !== n[0]) ||
          ("n" !== n[1] && "N" !== n[1])) &&
        ((function (e, n, t, r) {
          if (
            null == n ||
            (function (e, n, t, r) {
              if (null !== t && 0 === t.type) return !1;
              switch (typeof n) {
                case "function":
                case "symbol":
                  return !0;
                case "boolean":
                  return (
                    !r &&
                    (null !== t
                      ? !t.acceptsBooleans
                      : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                        "aria-" !== e)
                  );
                default:
                  return !1;
              }
            })(e, n, t, r)
          )
            return !0;
          if (r) return !1;
          if (null !== t)
            switch (t.type) {
              case 3:
                return !n;
              case 4:
                return !1 === n;
              case 5:
                return isNaN(n);
              case 6:
                return isNaN(n) || 1 > n;
            }
          return !1;
        })(n, t, l, r) && (t = null),
        r || null === l
          ? (function (e) {
              return (
                !!_.call(C, e) ||
                (!_.call(N, e) && (E.test(e) ? (C[e] = !0) : ((N[e] = !0), !1)))
              );
            })(n) &&
            (null === t ? e.removeAttribute(n) : e.setAttribute(n, "" + t))
          : l.mustUseProperty
          ? (e[l.propertyName] = null === t ? 3 !== l.type && "" : t)
          : ((n = l.attributeName),
            (r = l.attributeNamespace),
            null === t
              ? e.removeAttribute(n)
              : ((t =
                  3 === (l = l.type) || (4 === l && !0 === t) ? "" : "" + t),
                r ? e.setAttributeNS(r, n, t) : e.setAttribute(n, t))));
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
      .split(" ")
      .forEach(function (e) {
        var n = e.replace(j, L);
        z[n] = new P(n, 1, !1, e, null, !1, !1);
      }),
      "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
        .split(" ")
        .forEach(function (e) {
          var n = e.replace(j, L);
          z[n] = new P(n, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
        }),
      ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
        var n = e.replace(j, L);
        z[n] = new P(
          n,
          1,
          !1,
          e,
          "http://www.w3.org/XML/1998/namespace",
          !1,
          !1
        );
      }),
      ["tabIndex", "crossOrigin"].forEach(function (e) {
        z[e] = new P(e, 1, !1, e.toLowerCase(), null, !1, !1);
      }),
      (z.xlinkHref = new P(
        "xlinkHref",
        1,
        !1,
        "xlink:href",
        "http://www.w3.org/1999/xlink",
        !0,
        !1
      )),
      ["src", "href", "action", "formAction"].forEach(function (e) {
        z[e] = new P(e, 1, !1, e.toLowerCase(), null, !0, !0);
      });
    var F = g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
      R = Symbol.for("react.element"),
      M = Symbol.for("react.portal"),
      O = Symbol.for("react.fragment"),
      I = Symbol.for("react.strict_mode"),
      D = Symbol.for("react.profiler"),
      U = Symbol.for("react.provider"),
      A = Symbol.for("react.context"),
      W = Symbol.for("react.forward_ref"),
      q = Symbol.for("react.suspense"),
      $ = Symbol.for("react.suspense_list"),
      H = Symbol.for("react.memo"),
      V = Symbol.for("react.lazy");
    Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
    var B = Symbol.for("react.offscreen");
    Symbol.for("react.legacy_hidden"),
      Symbol.for("react.cache"),
      Symbol.for("react.tracing_marker");
    var Q = Symbol.iterator;
    function K(e) {
      return null === e || "object" != typeof e
        ? null
        : "function" == typeof (e = (Q && e[Q]) || e["@@iterator"])
        ? e
        : null;
    }
    var Y,
      X = Object.assign;
    function G(e) {
      if (void 0 === Y)
        try {
          throw Error();
        } catch (e) {
          var n = e.stack.trim().match(/\n( *(at )?)/);
          Y = (n && n[1]) || "";
        }
      return "\n" + Y + e;
    }
    var J = !1;
    function Z(e, n) {
      if (!e || J) return "";
      J = !0;
      var t = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        if (n)
          if (
            ((n = function () {
              throw Error();
            }),
            Object.defineProperty(n.prototype, "props", {
              set: function () {
                throw Error();
              },
            }),
            "object" == typeof Reflect && Reflect.construct)
          ) {
            try {
              Reflect.construct(n, []);
            } catch (e) {
              var r = e;
            }
            Reflect.construct(e, [], n);
          } else {
            try {
              n.call();
            } catch (e) {
              r = e;
            }
            e.call(n.prototype);
          }
        else {
          try {
            throw Error();
          } catch (e) {
            r = e;
          }
          e();
        }
      } catch (n) {
        if (n && r && "string" == typeof n.stack) {
          for (
            var l = n.stack.split("\n"),
              a = r.stack.split("\n"),
              o = l.length - 1,
              i = a.length - 1;
            1 <= o && 0 <= i && l[o] !== a[i];

          )
            i--;
          for (; 1 <= o && 0 <= i; o--, i--)
            if (l[o] !== a[i]) {
              if (1 !== o || 1 !== i)
                do {
                  if ((o--, 0 > --i || l[o] !== a[i])) {
                    var u = "\n" + l[o].replace(" at new ", " at ");
                    return (
                      e.displayName &&
                        u.includes("<anonymous>") &&
                        (u = u.replace("<anonymous>", e.displayName)),
                      u
                    );
                  }
                } while (1 <= o && 0 <= i);
              break;
            }
        }
      } finally {
        (J = !1), (Error.prepareStackTrace = t);
      }
      return (e = e ? e.displayName || e.name : "") ? G(e) : "";
    }
    function ee(e) {
      switch (e.tag) {
        case 5:
          return G(e.type);
        case 16:
          return G("Lazy");
        case 13:
          return G("Suspense");
        case 19:
          return G("SuspenseList");
        case 0:
        case 2:
        case 15:
          return (e = Z(e.type, !1));
        case 11:
          return (e = Z(e.type.render, !1));
        case 1:
          return (e = Z(e.type, !0));
        default:
          return "";
      }
    }
    function ne(e) {
      if (null == e) return null;
      if ("function" == typeof e) return e.displayName || e.name || null;
      if ("string" == typeof e) return e;
      switch (e) {
        case O:
          return "Fragment";
        case M:
          return "Portal";
        case D:
          return "Profiler";
        case I:
          return "StrictMode";
        case q:
          return "Suspense";
        case $:
          return "SuspenseList";
      }
      if ("object" == typeof e)
        switch (e.$$typeof) {
          case A:
            return (e.displayName || "Context") + ".Consumer";
          case U:
            return (e._context.displayName || "Context") + ".Provider";
          case W:
            var n = e.render;
            return (
              (e = e.displayName) ||
                (e =
                  "" !== (e = n.displayName || n.name || "")
                    ? "ForwardRef(" + e + ")"
                    : "ForwardRef"),
              e
            );
          case H:
            return null !== (n = e.displayName || null)
              ? n
              : ne(e.type) || "Memo";
          case V:
            (n = e._payload), (e = e._init);
            try {
              return ne(e(n));
            } catch (e) {}
        }
      return null;
    }
    function te(e) {
      var n = e.type;
      switch (e.tag) {
        case 24:
          return "Cache";
        case 9:
          return (n.displayName || "Context") + ".Consumer";
        case 10:
          return (n._context.displayName || "Context") + ".Provider";
        case 18:
          return "DehydratedFragment";
        case 11:
          return (
            (e = (e = n.render).displayName || e.name || ""),
            n.displayName || ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef")
          );
        case 7:
          return "Fragment";
        case 5:
          return n;
        case 4:
          return "Portal";
        case 3:
          return "Root";
        case 6:
          return "Text";
        case 16:
          return ne(n);
        case 8:
          return n === I ? "StrictMode" : "Mode";
        case 22:
          return "Offscreen";
        case 12:
          return "Profiler";
        case 21:
          return "Scope";
        case 13:
          return "Suspense";
        case 19:
          return "SuspenseList";
        case 25:
          return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
          if ("function" == typeof n) return n.displayName || n.name || null;
          if ("string" == typeof n) return n;
      }
      return null;
    }
    function re(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
        case "object":
          return e;
        default:
          return "";
      }
    }
    function le(e) {
      var n = e.type;
      return (
        (e = e.nodeName) &&
        "input" === e.toLowerCase() &&
        ("checkbox" === n || "radio" === n)
      );
    }
    function ae(e) {
      e._valueTracker ||
        (e._valueTracker = (function (e) {
          var n = le(e) ? "checked" : "value",
            t = Object.getOwnPropertyDescriptor(e.constructor.prototype, n),
            r = "" + e[n];
          if (
            !e.hasOwnProperty(n) &&
            void 0 !== t &&
            "function" == typeof t.get &&
            "function" == typeof t.set
          ) {
            var l = t.get,
              a = t.set;
            return (
              Object.defineProperty(e, n, {
                configurable: !0,
                get: function () {
                  return l.call(this);
                },
                set: function (e) {
                  (r = "" + e), a.call(this, e);
                },
              }),
              Object.defineProperty(e, n, { enumerable: t.enumerable }),
              {
                getValue: function () {
                  return r;
                },
                setValue: function (e) {
                  r = "" + e;
                },
                stopTracking: function () {
                  (e._valueTracker = null), delete e[n];
                },
              }
            );
          }
        })(e));
    }
    function oe(e) {
      if (!e) return !1;
      var n = e._valueTracker;
      if (!n) return !0;
      var t = n.getValue(),
        r = "";
      return (
        e && (r = le(e) ? (e.checked ? "true" : "false") : e.value),
        (e = r) !== t && (n.setValue(e), !0)
      );
    }
    function ie(e) {
      if (
        void 0 ===
        (e = e || ("undefined" != typeof document ? document : void 0))
      )
        return null;
      try {
        return e.activeElement || e.body;
      } catch (n) {
        return e.body;
      }
    }
    function ue(e, n) {
      var t = n.checked;
      return X({}, n, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: null != t ? t : e._wrapperState.initialChecked,
      });
    }
    function se(e, n) {
      var t = null == n.defaultValue ? "" : n.defaultValue,
        r = null != n.checked ? n.checked : n.defaultChecked;
      (t = re(null != n.value ? n.value : t)),
        (e._wrapperState = {
          initialChecked: r,
          initialValue: t,
          controlled:
            "checkbox" === n.type || "radio" === n.type
              ? null != n.checked
              : null != n.value,
        });
    }
    function ce(e, n) {
      null != (n = n.checked) && T(e, "checked", n, !1);
    }
    function fe(e, n) {
      ce(e, n);
      var t = re(n.value),
        r = n.type;
      if (null != t)
        "number" === r
          ? ((0 === t && "" === e.value) || e.value != t) && (e.value = "" + t)
          : e.value !== "" + t && (e.value = "" + t);
      else if ("submit" === r || "reset" === r)
        return void e.removeAttribute("value");
      n.hasOwnProperty("value")
        ? pe(e, n.type, t)
        : n.hasOwnProperty("defaultValue") && pe(e, n.type, re(n.defaultValue)),
        null == n.checked &&
          null != n.defaultChecked &&
          (e.defaultChecked = !!n.defaultChecked);
    }
    function de(e, n, t) {
      if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
        var r = n.type;
        if (
          !(
            ("submit" !== r && "reset" !== r) ||
            (void 0 !== n.value && null !== n.value)
          )
        )
          return;
        (n = "" + e._wrapperState.initialValue),
          t || n === e.value || (e.value = n),
          (e.defaultValue = n);
      }
      "" !== (t = e.name) && (e.name = ""),
        (e.defaultChecked = !!e._wrapperState.initialChecked),
        "" !== t && (e.name = t);
    }
    function pe(e, n, t) {
      ("number" === n && ie(e.ownerDocument) === e) ||
        (null == t
          ? (e.defaultValue = "" + e._wrapperState.initialValue)
          : e.defaultValue !== "" + t && (e.defaultValue = "" + t));
    }
    var he = Array.isArray;
    function me(e, n, t, r) {
      if (((e = e.options), n)) {
        n = {};
        for (var l = 0; l < t.length; l++) n["$" + t[l]] = !0;
        for (t = 0; t < e.length; t++)
          (l = n.hasOwnProperty("$" + e[t].value)),
            e[t].selected !== l && (e[t].selected = l),
            l && r && (e[t].defaultSelected = !0);
      } else {
        for (t = "" + re(t), n = null, l = 0; l < e.length; l++) {
          if (e[l].value === t)
            return (
              (e[l].selected = !0), void (r && (e[l].defaultSelected = !0))
            );
          null !== n || e[l].disabled || (n = e[l]);
        }
        null !== n && (n.selected = !0);
      }
    }
    function ge(e, n) {
      if (null != n.dangerouslySetInnerHTML) throw Error(y(91));
      return X({}, n, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue,
      });
    }
    function ve(e, n) {
      var t = n.value;
      if (null == t) {
        if (((t = n.children), (n = n.defaultValue), null != t)) {
          if (null != n) throw Error(y(92));
          if (he(t)) {
            if (1 < t.length) throw Error(y(93));
            t = t[0];
          }
          n = t;
        }
        null == n && (n = ""), (t = n);
      }
      e._wrapperState = { initialValue: re(t) };
    }
    function ye(e, n) {
      var t = re(n.value),
        r = re(n.defaultValue);
      null != t &&
        ((t = "" + t) !== e.value && (e.value = t),
        null == n.defaultValue && e.defaultValue !== t && (e.defaultValue = t)),
        null != r && (e.defaultValue = "" + r);
    }
    function be(e) {
      var n = e.textContent;
      n === e._wrapperState.initialValue &&
        "" !== n &&
        null !== n &&
        (e.value = n);
    }
    function we(e) {
      switch (e) {
        case "svg":
          return "http://www.w3.org/2000/svg";
        case "math":
          return "http://www.w3.org/1998/Math/MathML";
        default:
          return "http://www.w3.org/1999/xhtml";
      }
    }
    function ke(e, n) {
      return null == e || "http://www.w3.org/1999/xhtml" === e
        ? we(n)
        : "http://www.w3.org/2000/svg" === e && "foreignObject" === n
        ? "http://www.w3.org/1999/xhtml"
        : e;
    }
    var xe,
      Se,
      _e =
        ((Se = function (e, n) {
          if (
            "http://www.w3.org/2000/svg" !== e.namespaceURI ||
            "innerHTML" in e
          )
            e.innerHTML = n;
          else {
            for (
              (xe = xe || document.createElement("div")).innerHTML =
                "<svg>" + n.valueOf().toString() + "</svg>",
                n = xe.firstChild;
              e.firstChild;

            )
              e.removeChild(e.firstChild);
            for (; n.firstChild; ) e.appendChild(n.firstChild);
          }
        }),
        "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction
          ? function (e, n, t, r) {
              MSApp.execUnsafeLocalFunction(function () {
                return Se(e, n);
              });
            }
          : Se);
    function Ee(e, n) {
      if (n) {
        var t = e.firstChild;
        if (t && t === e.lastChild && 3 === t.nodeType)
          return void (t.nodeValue = n);
      }
      e.textContent = n;
    }
    var Ne = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0,
      },
      Ce = ["Webkit", "ms", "Moz", "O"];
    function Pe(e, n, t) {
      return null == n || "boolean" == typeof n || "" === n
        ? ""
        : t ||
          "number" != typeof n ||
          0 === n ||
          (Ne.hasOwnProperty(e) && Ne[e])
        ? ("" + n).trim()
        : n + "px";
    }
    function ze(e, n) {
      for (var t in ((e = e.style), n))
        if (n.hasOwnProperty(t)) {
          var r = 0 === t.indexOf("--"),
            l = Pe(t, n[t], r);
          "float" === t && (t = "cssFloat"),
            r ? e.setProperty(t, l) : (e[t] = l);
        }
    }
    Object.keys(Ne).forEach(function (e) {
      Ce.forEach(function (n) {
        (n = n + e.charAt(0).toUpperCase() + e.substring(1)), (Ne[n] = Ne[e]);
      });
    });
    var je = X(
      { menuitem: !0 },
      {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0,
      }
    );
    function Le(e, n) {
      if (n) {
        if (je[e] && (null != n.children || null != n.dangerouslySetInnerHTML))
          throw Error(y(137, e));
        if (null != n.dangerouslySetInnerHTML) {
          if (null != n.children) throw Error(y(60));
          if (
            "object" != typeof n.dangerouslySetInnerHTML ||
            !("__html" in n.dangerouslySetInnerHTML)
          )
            throw Error(y(61));
        }
        if (null != n.style && "object" != typeof n.style) throw Error(y(62));
      }
    }
    function Te(e, n) {
      if (-1 === e.indexOf("-")) return "string" == typeof n.is;
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var Fe = null;
    function Re(e) {
      return (
        (e = e.target || e.srcElement || window).correspondingUseElement &&
          (e = e.correspondingUseElement),
        3 === e.nodeType ? e.parentNode : e
      );
    }
    var Me = null,
      Oe = null,
      Ie = null;
    function De(e) {
      if ((e = zl(e))) {
        if ("function" != typeof Me) throw Error(y(280));
        var n = e.stateNode;
        n && ((n = Ll(n)), Me(e.stateNode, e.type, n));
      }
    }
    function Ue(e) {
      Oe ? (Ie ? Ie.push(e) : (Ie = [e])) : (Oe = e);
    }
    function Ae() {
      if (Oe) {
        var e = Oe,
          n = Ie;
        if (((Ie = Oe = null), De(e), n))
          for (e = 0; e < n.length; e++) De(n[e]);
      }
    }
    function We(e, n) {
      return e(n);
    }
    function qe() {}
    var $e = !1;
    function He(e, n, t) {
      if ($e) return e(n, t);
      $e = !0;
      try {
        return We(e, n, t);
      } finally {
        ($e = !1), (null !== Oe || null !== Ie) && (qe(), Ae());
      }
    }
    function Ve(e, n) {
      var t = e.stateNode;
      if (null === t) return null;
      var r = Ll(t);
      if (null === r) return null;
      t = r[n];
      e: switch (n) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (r = !r.disabled) ||
            (r = !(
              "button" === (e = e.type) ||
              "input" === e ||
              "select" === e ||
              "textarea" === e
            )),
            (e = !r);
          break e;
        default:
          e = !1;
      }
      if (e) return null;
      if (t && "function" != typeof t) throw Error(y(231, n, typeof t));
      return t;
    }
    var Be = !1;
    if (S)
      try {
        var Qe = {};
        Object.defineProperty(Qe, "passive", {
          get: function () {
            Be = !0;
          },
        }),
          window.addEventListener("test", Qe, Qe),
          window.removeEventListener("test", Qe, Qe);
      } catch (Se) {
        Be = !1;
      }
    function Ke(e, n, t, r, l, a, o, i, u) {
      var s = Array.prototype.slice.call(arguments, 3);
      try {
        n.apply(t, s);
      } catch (e) {
        this.onError(e);
      }
    }
    var Ye = !1,
      Xe = null,
      Ge = !1,
      Je = null,
      Ze = {
        onError: function (e) {
          (Ye = !0), (Xe = e);
        },
      };
    function en(e, n, t, r, l, a, o, i, u) {
      (Ye = !1), (Xe = null), Ke.apply(Ze, arguments);
    }
    function nn(e) {
      var n = e,
        t = e;
      if (e.alternate) for (; n.return; ) n = n.return;
      else {
        e = n;
        do {
          0 != (4098 & (n = e).flags) && (t = n.return), (e = n.return);
        } while (e);
      }
      return 3 === n.tag ? t : null;
    }
    function tn(e) {
      if (13 === e.tag) {
        var n = e.memoizedState;
        if (
          (null === n && null !== (e = e.alternate) && (n = e.memoizedState),
          null !== n)
        )
          return n.dehydrated;
      }
      return null;
    }
    function rn(e) {
      if (nn(e) !== e) throw Error(y(188));
    }
    function ln(e) {
      return (
        (e = (function (e) {
          var n = e.alternate;
          if (!n) {
            if (null === (n = nn(e))) throw Error(y(188));
            return n !== e ? null : e;
          }
          for (var t = e, r = n; ; ) {
            var l = t.return;
            if (null === l) break;
            var a = l.alternate;
            if (null === a) {
              if (null !== (r = l.return)) {
                t = r;
                continue;
              }
              break;
            }
            if (l.child === a.child) {
              for (a = l.child; a; ) {
                if (a === t) return rn(l), e;
                if (a === r) return rn(l), n;
                a = a.sibling;
              }
              throw Error(y(188));
            }
            if (t.return !== r.return) (t = l), (r = a);
            else {
              for (var o = !1, i = l.child; i; ) {
                if (i === t) {
                  (o = !0), (t = l), (r = a);
                  break;
                }
                if (i === r) {
                  (o = !0), (r = l), (t = a);
                  break;
                }
                i = i.sibling;
              }
              if (!o) {
                for (i = a.child; i; ) {
                  if (i === t) {
                    (o = !0), (t = a), (r = l);
                    break;
                  }
                  if (i === r) {
                    (o = !0), (r = a), (t = l);
                    break;
                  }
                  i = i.sibling;
                }
                if (!o) throw Error(y(189));
              }
            }
            if (t.alternate !== r) throw Error(y(190));
          }
          if (3 !== t.tag) throw Error(y(188));
          return t.stateNode.current === t ? e : n;
        })(e)),
        null !== e ? an(e) : null
      );
    }
    function an(e) {
      if (5 === e.tag || 6 === e.tag) return e;
      for (e = e.child; null !== e; ) {
        var n = an(e);
        if (null !== n) return n;
        e = e.sibling;
      }
      return null;
    }
    var on = v.unstable_scheduleCallback,
      un = v.unstable_cancelCallback,
      sn = v.unstable_shouldYield,
      cn = v.unstable_requestPaint,
      fn = v.unstable_now,
      dn = v.unstable_getCurrentPriorityLevel,
      pn = v.unstable_ImmediatePriority,
      hn = v.unstable_UserBlockingPriority,
      mn = v.unstable_NormalPriority,
      gn = v.unstable_LowPriority,
      vn = v.unstable_IdlePriority,
      yn = null,
      bn = null;
    var wn = Math.clz32
        ? Math.clz32
        : function (e) {
            return 0 === (e >>>= 0) ? 32 : (31 - ((kn(e) / xn) | 0)) | 0;
          },
      kn = Math.log,
      xn = Math.LN2;
    var Sn = 64,
      _n = 4194304;
    function En(e) {
      switch (e & -e) {
        case 1:
          return 1;
        case 2:
          return 2;
        case 4:
          return 4;
        case 8:
          return 8;
        case 16:
          return 16;
        case 32:
          return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return 4194240 & e;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          return 130023424 & e;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 1073741824;
        default:
          return e;
      }
    }
    function Nn(e, n) {
      var t = e.pendingLanes;
      if (0 === t) return 0;
      var r = 0,
        l = e.suspendedLanes,
        a = e.pingedLanes,
        o = 268435455 & t;
      if (0 !== o) {
        var i = o & ~l;
        0 !== i ? (r = En(i)) : 0 !== (a &= o) && (r = En(a));
      } else 0 !== (o = t & ~l) ? (r = En(o)) : 0 !== a && (r = En(a));
      if (0 === r) return 0;
      if (
        0 !== n &&
        n !== r &&
        0 == (n & l) &&
        ((l = r & -r) >= (a = n & -n) || (16 === l && 0 != (4194240 & a)))
      )
        return n;
      if ((0 != (4 & r) && (r |= 16 & t), 0 !== (n = e.entangledLanes)))
        for (e = e.entanglements, n &= r; 0 < n; )
          (l = 1 << (t = 31 - wn(n))), (r |= e[t]), (n &= ~l);
      return r;
    }
    function Cn(e, n) {
      switch (e) {
        case 1:
        case 2:
        case 4:
          return n + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return n + 5e3;
        default:
          return -1;
      }
    }
    function Pn(e) {
      return 0 !== (e = -1073741825 & e.pendingLanes)
        ? e
        : 1073741824 & e
        ? 1073741824
        : 0;
    }
    function zn() {
      var e = Sn;
      return 0 == (4194240 & (Sn <<= 1)) && (Sn = 64), e;
    }
    function jn(e) {
      for (var n = [], t = 0; 31 > t; t++) n.push(e);
      return n;
    }
    function Ln(e, n, t) {
      (e.pendingLanes |= n),
        536870912 !== n && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
        ((e = e.eventTimes)[(n = 31 - wn(n))] = t);
    }
    function Tn(e, n) {
      var t = (e.entangledLanes |= n);
      for (e = e.entanglements; t; ) {
        var r = 31 - wn(t),
          l = 1 << r;
        (l & n) | (e[r] & n) && (e[r] |= n), (t &= ~l);
      }
    }
    var Fn = 0;
    function Rn(e) {
      return 1 < (e &= -e)
        ? 4 < e
          ? 0 != (268435455 & e)
            ? 16
            : 536870912
          : 4
        : 1;
    }
    var Mn,
      On,
      In,
      Dn,
      Un,
      An = !1,
      Wn = [],
      qn = null,
      $n = null,
      Hn = null,
      Vn = new Map(),
      Bn = new Map(),
      Qn = [],
      Kn =
        "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
          " "
        );
    function Yn(e, n) {
      switch (e) {
        case "focusin":
        case "focusout":
          qn = null;
          break;
        case "dragenter":
        case "dragleave":
          $n = null;
          break;
        case "mouseover":
        case "mouseout":
          Hn = null;
          break;
        case "pointerover":
        case "pointerout":
          Vn.delete(n.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          Bn.delete(n.pointerId);
      }
    }
    function Xn(e, n, t, r, l, a) {
      return null === e || e.nativeEvent !== a
        ? ((e = {
            blockedOn: n,
            domEventName: t,
            eventSystemFlags: r,
            nativeEvent: a,
            targetContainers: [l],
          }),
          null !== n && null !== (n = zl(n)) && On(n),
          e)
        : ((e.eventSystemFlags |= r),
          (n = e.targetContainers),
          null !== l && -1 === n.indexOf(l) && n.push(l),
          e);
    }
    function Gn(e) {
      var n = Pl(e.target);
      if (null !== n) {
        var t = nn(n);
        if (null !== t)
          if (13 === (n = t.tag)) {
            if (null !== (n = tn(t)))
              return (
                (e.blockedOn = n),
                void Un(e.priority, function () {
                  In(t);
                })
              );
          } else if (3 === n && t.stateNode.current.memoizedState.isDehydrated)
            return void (e.blockedOn =
              3 === t.tag ? t.stateNode.containerInfo : null);
      }
      e.blockedOn = null;
    }
    function Jn(e) {
      if (null !== e.blockedOn) return !1;
      for (var n = e.targetContainers; 0 < n.length; ) {
        var t = st(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
        if (null !== t)
          return null !== (n = zl(t)) && On(n), (e.blockedOn = t), !1;
        var r = new (t = e.nativeEvent).constructor(t.type, t);
        (Fe = r), t.target.dispatchEvent(r), (Fe = null), n.shift();
      }
      return !0;
    }
    function Zn(e, n, t) {
      Jn(e) && t.delete(n);
    }
    function et() {
      (An = !1),
        null !== qn && Jn(qn) && (qn = null),
        null !== $n && Jn($n) && ($n = null),
        null !== Hn && Jn(Hn) && (Hn = null),
        Vn.forEach(Zn),
        Bn.forEach(Zn);
    }
    function nt(e, n) {
      e.blockedOn === n &&
        ((e.blockedOn = null),
        An ||
          ((An = !0),
          v.unstable_scheduleCallback(v.unstable_NormalPriority, et)));
    }
    function tt(e) {
      function n(n) {
        return nt(n, e);
      }
      if (0 < Wn.length) {
        nt(Wn[0], e);
        for (var t = 1; t < Wn.length; t++) {
          var r = Wn[t];
          r.blockedOn === e && (r.blockedOn = null);
        }
      }
      for (
        null !== qn && nt(qn, e),
          null !== $n && nt($n, e),
          null !== Hn && nt(Hn, e),
          Vn.forEach(n),
          Bn.forEach(n),
          t = 0;
        t < Qn.length;
        t++
      )
        (r = Qn[t]).blockedOn === e && (r.blockedOn = null);
      for (; 0 < Qn.length && null === (t = Qn[0]).blockedOn; )
        Gn(t), null === t.blockedOn && Qn.shift();
    }
    var rt = F.ReactCurrentBatchConfig,
      lt = !0;
    function at(e, n, t, r) {
      var l = Fn,
        a = rt.transition;
      rt.transition = null;
      try {
        (Fn = 1), it(e, n, t, r);
      } finally {
        (Fn = l), (rt.transition = a);
      }
    }
    function ot(e, n, t, r) {
      var l = Fn,
        a = rt.transition;
      rt.transition = null;
      try {
        (Fn = 4), it(e, n, t, r);
      } finally {
        (Fn = l), (rt.transition = a);
      }
    }
    function it(e, n, t, r) {
      if (lt) {
        var l = st(e, n, t, r);
        if (null === l) el(e, n, r, ut, t), Yn(e, r);
        else if (
          (function (e, n, t, r, l) {
            switch (n) {
              case "focusin":
                return (qn = Xn(qn, e, n, t, r, l)), !0;
              case "dragenter":
                return ($n = Xn($n, e, n, t, r, l)), !0;
              case "mouseover":
                return (Hn = Xn(Hn, e, n, t, r, l)), !0;
              case "pointerover":
                var a = l.pointerId;
                return Vn.set(a, Xn(Vn.get(a) || null, e, n, t, r, l)), !0;
              case "gotpointercapture":
                return (
                  (a = l.pointerId),
                  Bn.set(a, Xn(Bn.get(a) || null, e, n, t, r, l)),
                  !0
                );
            }
            return !1;
          })(l, e, n, t, r)
        )
          r.stopPropagation();
        else if ((Yn(e, r), 4 & n && -1 < Kn.indexOf(e))) {
          for (; null !== l; ) {
            var a = zl(l);
            if (
              (null !== a && Mn(a),
              null === (a = st(e, n, t, r)) && el(e, n, r, ut, t),
              a === l)
            )
              break;
            l = a;
          }
          null !== l && r.stopPropagation();
        } else el(e, n, r, null, t);
      }
    }
    var ut = null;
    function st(e, n, t, r) {
      if (((ut = null), null !== (e = Pl((e = Re(r))))))
        if (null === (n = nn(e))) e = null;
        else if (13 === (t = n.tag)) {
          if (null !== (e = tn(n))) return e;
          e = null;
        } else if (3 === t) {
          if (n.stateNode.current.memoizedState.isDehydrated)
            return 3 === n.tag ? n.stateNode.containerInfo : null;
          e = null;
        } else n !== e && (e = null);
      return (ut = e), null;
    }
    function ct(e) {
      switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return 4;
        case "message":
          switch (dn()) {
            case pn:
              return 1;
            case hn:
              return 4;
            case mn:
            case gn:
              return 16;
            case vn:
              return 536870912;
            default:
              return 16;
          }
        default:
          return 16;
      }
    }
    var ft = null,
      dt = null,
      pt = null;
    function ht() {
      if (pt) return pt;
      var e,
        n,
        t = dt,
        r = t.length,
        l = "value" in ft ? ft.value : ft.textContent,
        a = l.length;
      for (e = 0; e < r && t[e] === l[e]; e++);
      var o = r - e;
      for (n = 1; n <= o && t[r - n] === l[a - n]; n++);
      return (pt = l.slice(e, 1 < n ? 1 - n : void 0));
    }
    function mt(e) {
      var n = e.keyCode;
      return (
        "charCode" in e
          ? 0 === (e = e.charCode) && 13 === n && (e = 13)
          : (e = n),
        10 === e && (e = 13),
        32 <= e || 13 === e ? e : 0
      );
    }
    function gt() {
      return !0;
    }
    function vt() {
      return !1;
    }
    function yt(e) {
      function n(n, t, r, l, a) {
        for (var o in ((this._reactName = n),
        (this._targetInst = r),
        (this.type = t),
        (this.nativeEvent = l),
        (this.target = a),
        (this.currentTarget = null),
        e))
          e.hasOwnProperty(o) && ((n = e[o]), (this[o] = n ? n(l) : l[o]));
        return (
          (this.isDefaultPrevented = (
            null != l.defaultPrevented
              ? l.defaultPrevented
              : !1 === l.returnValue
          )
            ? gt
            : vt),
          (this.isPropagationStopped = vt),
          this
        );
      }
      return (
        X(n.prototype, {
          preventDefault: function () {
            this.defaultPrevented = !0;
            var e = this.nativeEvent;
            e &&
              (e.preventDefault
                ? e.preventDefault()
                : "unknown" != typeof e.returnValue && (e.returnValue = !1),
              (this.isDefaultPrevented = gt));
          },
          stopPropagation: function () {
            var e = this.nativeEvent;
            e &&
              (e.stopPropagation
                ? e.stopPropagation()
                : "unknown" != typeof e.cancelBubble && (e.cancelBubble = !0),
              (this.isPropagationStopped = gt));
          },
          persist: function () {},
          isPersistent: gt,
        }),
        n
      );
    }
    var bt,
      wt,
      kt,
      xt = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
          return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0,
      },
      St = yt(xt),
      _t = X({}, xt, { view: 0, detail: 0 }),
      Et = yt(_t),
      Nt = X({}, _t, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: It,
        button: 0,
        buttons: 0,
        relatedTarget: function (e) {
          return void 0 === e.relatedTarget
            ? e.fromElement === e.srcElement
              ? e.toElement
              : e.fromElement
            : e.relatedTarget;
        },
        movementX: function (e) {
          return "movementX" in e
            ? e.movementX
            : (e !== kt &&
                (kt && "mousemove" === e.type
                  ? ((bt = e.screenX - kt.screenX),
                    (wt = e.screenY - kt.screenY))
                  : (wt = bt = 0),
                (kt = e)),
              bt);
        },
        movementY: function (e) {
          return "movementY" in e ? e.movementY : wt;
        },
      }),
      Ct = yt(Nt),
      Pt = yt(X({}, Nt, { dataTransfer: 0 })),
      zt = yt(X({}, _t, { relatedTarget: 0 })),
      jt = yt(
        X({}, xt, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
      ),
      Lt = yt(
        X({}, xt, {
          clipboardData: function (e) {
            return "clipboardData" in e
              ? e.clipboardData
              : window.clipboardData;
          },
        })
      ),
      Tt = yt(X({}, xt, { data: 0 })),
      Ft = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified",
      },
      Rt = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta",
      },
      Mt = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey",
      };
    function Ot(e) {
      var n = this.nativeEvent;
      return n.getModifierState
        ? n.getModifierState(e)
        : !!(e = Mt[e]) && !!n[e];
    }
    function It() {
      return Ot;
    }
    var Dt = yt(
        X({}, _t, {
          key: function (e) {
            if (e.key) {
              var n = Ft[e.key] || e.key;
              if ("Unidentified" !== n) return n;
            }
            return "keypress" === e.type
              ? 13 === (e = mt(e))
                ? "Enter"
                : String.fromCharCode(e)
              : "keydown" === e.type || "keyup" === e.type
              ? Rt[e.keyCode] || "Unidentified"
              : "";
          },
          code: 0,
          location: 0,
          ctrlKey: 0,
          shiftKey: 0,
          altKey: 0,
          metaKey: 0,
          repeat: 0,
          locale: 0,
          getModifierState: It,
          charCode: function (e) {
            return "keypress" === e.type ? mt(e) : 0;
          },
          keyCode: function (e) {
            return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
          },
          which: function (e) {
            return "keypress" === e.type
              ? mt(e)
              : "keydown" === e.type || "keyup" === e.type
              ? e.keyCode
              : 0;
          },
        })
      ),
      Ut = yt(
        X({}, Nt, {
          pointerId: 0,
          width: 0,
          height: 0,
          pressure: 0,
          tangentialPressure: 0,
          tiltX: 0,
          tiltY: 0,
          twist: 0,
          pointerType: 0,
          isPrimary: 0,
        })
      ),
      At = yt(
        X({}, _t, {
          touches: 0,
          targetTouches: 0,
          changedTouches: 0,
          altKey: 0,
          metaKey: 0,
          ctrlKey: 0,
          shiftKey: 0,
          getModifierState: It,
        })
      ),
      Wt = yt(X({}, xt, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })),
      qt = yt(
        X({}, Nt, {
          deltaX: function (e) {
            return "deltaX" in e
              ? e.deltaX
              : "wheelDeltaX" in e
              ? -e.wheelDeltaX
              : 0;
          },
          deltaY: function (e) {
            return "deltaY" in e
              ? e.deltaY
              : "wheelDeltaY" in e
              ? -e.wheelDeltaY
              : "wheelDelta" in e
              ? -e.wheelDelta
              : 0;
          },
          deltaZ: 0,
          deltaMode: 0,
        })
      ),
      $t = [9, 13, 27, 32],
      Ht = S && "CompositionEvent" in window,
      Vt = null;
    S && "documentMode" in document && (Vt = document.documentMode);
    var Bt = S && "TextEvent" in window && !Vt,
      Qt = S && (!Ht || (Vt && 8 < Vt && 11 >= Vt)),
      Kt = String.fromCharCode(32),
      Yt = !1;
    function Xt(e, n) {
      switch (e) {
        case "keyup":
          return -1 !== $t.indexOf(n.keyCode);
        case "keydown":
          return 229 !== n.keyCode;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function Gt(e) {
      return "object" == typeof (e = e.detail) && "data" in e ? e.data : null;
    }
    var Jt = !1;
    var Zt = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0,
    };
    function er(e) {
      var n = e && e.nodeName && e.nodeName.toLowerCase();
      return "input" === n ? !!Zt[e.type] : "textarea" === n;
    }
    function nr(e, n, t, r) {
      Ue(r),
        0 < (n = tl(n, "onChange")).length &&
          ((t = new St("onChange", "change", null, t, r)),
          e.push({ event: t, listeners: n }));
    }
    var tr = null,
      rr = null;
    function lr(e) {
      Kr(e, 0);
    }
    function ar(e) {
      if (oe(jl(e))) return e;
    }
    function or(e, n) {
      if ("change" === e) return n;
    }
    var ir = !1;
    if (S) {
      var ur;
      if (S) {
        var sr = "oninput" in document;
        if (!sr) {
          var cr = document.createElement("div");
          cr.setAttribute("oninput", "return;"),
            (sr = "function" == typeof cr.oninput);
        }
        ur = sr;
      } else ur = !1;
      ir = ur && (!document.documentMode || 9 < document.documentMode);
    }
    function fr() {
      tr && (tr.detachEvent("onpropertychange", dr), (rr = tr = null));
    }
    function dr(e) {
      if ("value" === e.propertyName && ar(rr)) {
        var n = [];
        nr(n, rr, e, Re(e)), He(lr, n);
      }
    }
    function pr(e, n, t) {
      "focusin" === e
        ? (fr(), (rr = t), (tr = n).attachEvent("onpropertychange", dr))
        : "focusout" === e && fr();
    }
    function hr(e) {
      if ("selectionchange" === e || "keyup" === e || "keydown" === e)
        return ar(rr);
    }
    function mr(e, n) {
      if ("click" === e) return ar(n);
    }
    function gr(e, n) {
      if ("input" === e || "change" === e) return ar(n);
    }
    var vr =
      "function" == typeof Object.is
        ? Object.is
        : function (e, n) {
            return (
              (e === n && (0 !== e || 1 / e == 1 / n)) || (e != e && n != n)
            );
          };
    function yr(e, n) {
      if (vr(e, n)) return !0;
      if (
        "object" != typeof e ||
        null === e ||
        "object" != typeof n ||
        null === n
      )
        return !1;
      var t = Object.keys(e),
        r = Object.keys(n);
      if (t.length !== r.length) return !1;
      for (r = 0; r < t.length; r++) {
        var l = t[r];
        if (!_.call(n, l) || !vr(e[l], n[l])) return !1;
      }
      return !0;
    }
    function br(e) {
      for (; e && e.firstChild; ) e = e.firstChild;
      return e;
    }
    function wr(e, n) {
      var t,
        r = br(e);
      for (e = 0; r; ) {
        if (3 === r.nodeType) {
          if (((t = e + r.textContent.length), e <= n && t >= n))
            return { node: r, offset: n - e };
          e = t;
        }
        e: {
          for (; r; ) {
            if (r.nextSibling) {
              r = r.nextSibling;
              break e;
            }
            r = r.parentNode;
          }
          r = void 0;
        }
        r = br(r);
      }
    }
    function kr(e, n) {
      return (
        !(!e || !n) &&
        (e === n ||
          ((!e || 3 !== e.nodeType) &&
            (n && 3 === n.nodeType
              ? kr(e, n.parentNode)
              : "contains" in e
              ? e.contains(n)
              : !!e.compareDocumentPosition &&
                !!(16 & e.compareDocumentPosition(n)))))
      );
    }
    function xr() {
      for (var e = window, n = ie(); n instanceof e.HTMLIFrameElement; ) {
        try {
          var t = "string" == typeof n.contentWindow.location.href;
        } catch (e) {
          t = !1;
        }
        if (!t) break;
        n = ie((e = n.contentWindow).document);
      }
      return n;
    }
    function Sr(e) {
      var n = e && e.nodeName && e.nodeName.toLowerCase();
      return (
        n &&
        (("input" === n &&
          ("text" === e.type ||
            "search" === e.type ||
            "tel" === e.type ||
            "url" === e.type ||
            "password" === e.type)) ||
          "textarea" === n ||
          "true" === e.contentEditable)
      );
    }
    function _r(e) {
      var n = xr(),
        t = e.focusedElem,
        r = e.selectionRange;
      if (
        n !== t &&
        t &&
        t.ownerDocument &&
        kr(t.ownerDocument.documentElement, t)
      ) {
        if (null !== r && Sr(t))
          if (
            ((n = r.start),
            void 0 === (e = r.end) && (e = n),
            "selectionStart" in t)
          )
            (t.selectionStart = n),
              (t.selectionEnd = Math.min(e, t.value.length));
          else if (
            (e = ((n = t.ownerDocument || document) && n.defaultView) || window)
              .getSelection
          ) {
            e = e.getSelection();
            var l = t.textContent.length,
              a = Math.min(r.start, l);
            (r = void 0 === r.end ? a : Math.min(r.end, l)),
              !e.extend && a > r && ((l = r), (r = a), (a = l)),
              (l = wr(t, a));
            var o = wr(t, r);
            l &&
              o &&
              (1 !== e.rangeCount ||
                e.anchorNode !== l.node ||
                e.anchorOffset !== l.offset ||
                e.focusNode !== o.node ||
                e.focusOffset !== o.offset) &&
              ((n = n.createRange()).setStart(l.node, l.offset),
              e.removeAllRanges(),
              a > r
                ? (e.addRange(n), e.extend(o.node, o.offset))
                : (n.setEnd(o.node, o.offset), e.addRange(n)));
          }
        for (n = [], e = t; (e = e.parentNode); )
          1 === e.nodeType &&
            n.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
        for (
          "function" == typeof t.focus && t.focus(), t = 0;
          t < n.length;
          t++
        )
          ((e = n[t]).element.scrollLeft = e.left),
            (e.element.scrollTop = e.top);
      }
    }
    var Er = S && "documentMode" in document && 11 >= document.documentMode,
      Nr = null,
      Cr = null,
      Pr = null,
      zr = !1;
    function jr(e, n, t) {
      var r =
        t.window === t ? t.document : 9 === t.nodeType ? t : t.ownerDocument;
      zr ||
        null == Nr ||
        Nr !== ie(r) ||
        ("selectionStart" in (r = Nr) && Sr(r)
          ? (r = { start: r.selectionStart, end: r.selectionEnd })
          : (r = {
              anchorNode: (r = (
                (r.ownerDocument && r.ownerDocument.defaultView) ||
                window
              ).getSelection()).anchorNode,
              anchorOffset: r.anchorOffset,
              focusNode: r.focusNode,
              focusOffset: r.focusOffset,
            }),
        (Pr && yr(Pr, r)) ||
          ((Pr = r),
          0 < (r = tl(Cr, "onSelect")).length &&
            ((n = new St("onSelect", "select", null, n, t)),
            e.push({ event: n, listeners: r }),
            (n.target = Nr))));
    }
    function Lr(e, n) {
      var t = {};
      return (
        (t[e.toLowerCase()] = n.toLowerCase()),
        (t["Webkit" + e] = "webkit" + n),
        (t["Moz" + e] = "moz" + n),
        t
      );
    }
    var Tr = {
        animationend: Lr("Animation", "AnimationEnd"),
        animationiteration: Lr("Animation", "AnimationIteration"),
        animationstart: Lr("Animation", "AnimationStart"),
        transitionend: Lr("Transition", "TransitionEnd"),
      },
      Fr = {},
      Rr = {};
    function Mr(e) {
      if (Fr[e]) return Fr[e];
      if (!Tr[e]) return e;
      var n,
        t = Tr[e];
      for (n in t) if (t.hasOwnProperty(n) && n in Rr) return (Fr[e] = t[n]);
      return e;
    }
    S &&
      ((Rr = document.createElement("div").style),
      "AnimationEvent" in window ||
        (delete Tr.animationend.animation,
        delete Tr.animationiteration.animation,
        delete Tr.animationstart.animation),
      "TransitionEvent" in window || delete Tr.transitionend.transition);
    var Or = Mr("animationend"),
      Ir = Mr("animationiteration"),
      Dr = Mr("animationstart"),
      Ur = Mr("transitionend"),
      Ar = new Map(),
      Wr =
        "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
          " "
        );
    function qr(e, n) {
      Ar.set(e, n), k(n, [e]);
    }
    for (var $r = 0; $r < Wr.length; $r++) {
      var Hr = Wr[$r];
      qr(Hr.toLowerCase(), "on" + (Hr[0].toUpperCase() + Hr.slice(1)));
    }
    qr(Or, "onAnimationEnd"),
      qr(Ir, "onAnimationIteration"),
      qr(Dr, "onAnimationStart"),
      qr("dblclick", "onDoubleClick"),
      qr("focusin", "onFocus"),
      qr("focusout", "onBlur"),
      qr(Ur, "onTransitionEnd"),
      x("onMouseEnter", ["mouseout", "mouseover"]),
      x("onMouseLeave", ["mouseout", "mouseover"]),
      x("onPointerEnter", ["pointerout", "pointerover"]),
      x("onPointerLeave", ["pointerout", "pointerover"]),
      k(
        "onChange",
        "change click focusin focusout input keydown keyup selectionchange".split(
          " "
        )
      ),
      k(
        "onSelect",
        "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
          " "
        )
      ),
      k("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
      k(
        "onCompositionEnd",
        "compositionend focusout keydown keypress keyup mousedown".split(" ")
      ),
      k(
        "onCompositionStart",
        "compositionstart focusout keydown keypress keyup mousedown".split(" ")
      ),
      k(
        "onCompositionUpdate",
        "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
      );
    var Vr =
        "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
          " "
        ),
      Br = new Set(
        "cancel close invalid load scroll toggle".split(" ").concat(Vr)
      );
    function Qr(e, n, t) {
      var r = e.type || "unknown-event";
      (e.currentTarget = t),
        (function (e, n, t, r, l, a, o, i, u) {
          if ((en.apply(this, arguments), Ye)) {
            if (!Ye) throw Error(y(198));
            var s = Xe;
            (Ye = !1), (Xe = null), Ge || ((Ge = !0), (Je = s));
          }
        })(r, n, void 0, e),
        (e.currentTarget = null);
    }
    function Kr(e, n) {
      n = 0 != (4 & n);
      for (var t = 0; t < e.length; t++) {
        var r = e[t],
          l = r.event;
        r = r.listeners;
        e: {
          var a = void 0;
          if (n)
            for (var o = r.length - 1; 0 <= o; o--) {
              var i = r[o],
                u = i.instance,
                s = i.currentTarget;
              if (((i = i.listener), u !== a && l.isPropagationStopped()))
                break e;
              Qr(l, i, s), (a = u);
            }
          else
            for (o = 0; o < r.length; o++) {
              if (
                ((u = (i = r[o]).instance),
                (s = i.currentTarget),
                (i = i.listener),
                u !== a && l.isPropagationStopped())
              )
                break e;
              Qr(l, i, s), (a = u);
            }
        }
      }
      if (Ge) throw ((e = Je), (Ge = !1), (Je = null), e);
    }
    function Yr(e, n) {
      var t = n[El];
      void 0 === t && (t = n[El] = new Set());
      var r = e + "__bubble";
      t.has(r) || (Zr(n, e, 2, !1), t.add(r));
    }
    function Xr(e, n, t) {
      var r = 0;
      n && (r |= 4), Zr(t, e, r, n);
    }
    var Gr = "_reactListening" + Math.random().toString(36).slice(2);
    function Jr(e) {
      if (!e[Gr]) {
        (e[Gr] = !0),
          b.forEach(function (n) {
            "selectionchange" !== n &&
              (Br.has(n) || Xr(n, !1, e), Xr(n, !0, e));
          });
        var n = 9 === e.nodeType ? e : e.ownerDocument;
        null === n || n[Gr] || ((n[Gr] = !0), Xr("selectionchange", !1, n));
      }
    }
    function Zr(e, n, t, r) {
      switch (ct(n)) {
        case 1:
          var l = at;
          break;
        case 4:
          l = ot;
          break;
        default:
          l = it;
      }
      (t = l.bind(null, n, t, e)),
        (l = void 0),
        !Be ||
          ("touchstart" !== n && "touchmove" !== n && "wheel" !== n) ||
          (l = !0),
        r
          ? void 0 !== l
            ? e.addEventListener(n, t, { capture: !0, passive: l })
            : e.addEventListener(n, t, !0)
          : void 0 !== l
          ? e.addEventListener(n, t, { passive: l })
          : e.addEventListener(n, t, !1);
    }
    function el(e, n, t, r, l) {
      var a = r;
      if (0 == (1 & n) && 0 == (2 & n) && null !== r)
        e: for (;;) {
          if (null === r) return;
          var o = r.tag;
          if (3 === o || 4 === o) {
            var i = r.stateNode.containerInfo;
            if (i === l || (8 === i.nodeType && i.parentNode === l)) break;
            if (4 === o)
              for (o = r.return; null !== o; ) {
                var u = o.tag;
                if (
                  (3 === u || 4 === u) &&
                  ((u = o.stateNode.containerInfo) === l ||
                    (8 === u.nodeType && u.parentNode === l))
                )
                  return;
                o = o.return;
              }
            for (; null !== i; ) {
              if (null === (o = Pl(i))) return;
              if (5 === (u = o.tag) || 6 === u) {
                r = a = o;
                continue e;
              }
              i = i.parentNode;
            }
          }
          r = r.return;
        }
      He(function () {
        var r = a,
          l = Re(t),
          o = [];
        e: {
          var i = Ar.get(e);
          if (void 0 !== i) {
            var u = St,
              s = e;
            switch (e) {
              case "keypress":
                if (0 === mt(t)) break e;
              case "keydown":
              case "keyup":
                u = Dt;
                break;
              case "focusin":
                (s = "focus"), (u = zt);
                break;
              case "focusout":
                (s = "blur"), (u = zt);
                break;
              case "beforeblur":
              case "afterblur":
                u = zt;
                break;
              case "click":
                if (2 === t.button) break e;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                u = Ct;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                u = Pt;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                u = At;
                break;
              case Or:
              case Ir:
              case Dr:
                u = jt;
                break;
              case Ur:
                u = Wt;
                break;
              case "scroll":
                u = Et;
                break;
              case "wheel":
                u = qt;
                break;
              case "copy":
              case "cut":
              case "paste":
                u = Lt;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                u = Ut;
            }
            var c = 0 != (4 & n),
              f = !c && "scroll" === e,
              d = c ? (null !== i ? i + "Capture" : null) : i;
            c = [];
            for (var p, h = r; null !== h; ) {
              var m = (p = h).stateNode;
              if (
                (5 === p.tag &&
                  null !== m &&
                  ((p = m),
                  null !== d && null != (m = Ve(h, d)) && c.push(nl(h, m, p))),
                f)
              )
                break;
              h = h.return;
            }
            0 < c.length &&
              ((i = new u(i, s, null, t, l)),
              o.push({ event: i, listeners: c }));
          }
        }
        if (0 == (7 & n)) {
          if (
            ((u = "mouseout" === e || "pointerout" === e),
            (!(i = "mouseover" === e || "pointerover" === e) ||
              t === Fe ||
              !(s = t.relatedTarget || t.fromElement) ||
              (!Pl(s) && !s[_l])) &&
              (u || i) &&
              ((i =
                l.window === l
                  ? l
                  : (i = l.ownerDocument)
                  ? i.defaultView || i.parentWindow
                  : window),
              u
                ? ((u = r),
                  null !==
                    (s = (s = t.relatedTarget || t.toElement) ? Pl(s) : null) &&
                    (s !== (f = nn(s)) || (5 !== s.tag && 6 !== s.tag)) &&
                    (s = null))
                : ((u = null), (s = r)),
              u !== s))
          ) {
            if (
              ((c = Ct),
              (m = "onMouseLeave"),
              (d = "onMouseEnter"),
              (h = "mouse"),
              ("pointerout" !== e && "pointerover" !== e) ||
                ((c = Ut),
                (m = "onPointerLeave"),
                (d = "onPointerEnter"),
                (h = "pointer")),
              (f = null == u ? i : jl(u)),
              (p = null == s ? i : jl(s)),
              ((i = new c(m, h + "leave", u, t, l)).target = f),
              (i.relatedTarget = p),
              (m = null),
              Pl(l) === r &&
                (((c = new c(d, h + "enter", s, t, l)).target = p),
                (c.relatedTarget = f),
                (m = c)),
              (f = m),
              u && s)
            )
              e: {
                for (d = s, h = 0, p = c = u; p; p = rl(p)) h++;
                for (p = 0, m = d; m; m = rl(m)) p++;
                for (; 0 < h - p; ) (c = rl(c)), h--;
                for (; 0 < p - h; ) (d = rl(d)), p--;
                for (; h--; ) {
                  if (c === d || (null !== d && c === d.alternate)) break e;
                  (c = rl(c)), (d = rl(d));
                }
                c = null;
              }
            else c = null;
            null !== u && ll(o, i, u, c, !1),
              null !== s && null !== f && ll(o, f, s, c, !0);
          }
          if (
            "select" ===
              (u =
                (i = r ? jl(r) : window).nodeName &&
                i.nodeName.toLowerCase()) ||
            ("input" === u && "file" === i.type)
          )
            var g = or;
          else if (er(i))
            if (ir) g = gr;
            else {
              g = hr;
              var v = pr;
            }
          else
            (u = i.nodeName) &&
              "input" === u.toLowerCase() &&
              ("checkbox" === i.type || "radio" === i.type) &&
              (g = mr);
          switch (
            (g && (g = g(e, r))
              ? nr(o, g, t, l)
              : (v && v(e, i, r),
                "focusout" === e &&
                  (v = i._wrapperState) &&
                  v.controlled &&
                  "number" === i.type &&
                  pe(i, "number", i.value)),
            (v = r ? jl(r) : window),
            e)
          ) {
            case "focusin":
              (er(v) || "true" === v.contentEditable) &&
                ((Nr = v), (Cr = r), (Pr = null));
              break;
            case "focusout":
              Pr = Cr = Nr = null;
              break;
            case "mousedown":
              zr = !0;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              (zr = !1), jr(o, t, l);
              break;
            case "selectionchange":
              if (Er) break;
            case "keydown":
            case "keyup":
              jr(o, t, l);
          }
          var y;
          if (Ht)
            e: {
              switch (e) {
                case "compositionstart":
                  var b = "onCompositionStart";
                  break e;
                case "compositionend":
                  b = "onCompositionEnd";
                  break e;
                case "compositionupdate":
                  b = "onCompositionUpdate";
                  break e;
              }
              b = void 0;
            }
          else
            Jt
              ? Xt(e, t) && (b = "onCompositionEnd")
              : "keydown" === e &&
                229 === t.keyCode &&
                (b = "onCompositionStart");
          b &&
            (Qt &&
              "ko" !== t.locale &&
              (Jt || "onCompositionStart" !== b
                ? "onCompositionEnd" === b && Jt && (y = ht())
                : ((dt = "value" in (ft = l) ? ft.value : ft.textContent),
                  (Jt = !0))),
            0 < (v = tl(r, b)).length &&
              ((b = new Tt(b, e, null, t, l)),
              o.push({ event: b, listeners: v }),
              y ? (b.data = y) : null !== (y = Gt(t)) && (b.data = y))),
            (y = Bt
              ? (function (e, n) {
                  switch (e) {
                    case "compositionend":
                      return Gt(n);
                    case "keypress":
                      return 32 !== n.which ? null : ((Yt = !0), Kt);
                    case "textInput":
                      return (e = n.data) === Kt && Yt ? null : e;
                    default:
                      return null;
                  }
                })(e, t)
              : (function (e, n) {
                  if (Jt)
                    return "compositionend" === e || (!Ht && Xt(e, n))
                      ? ((e = ht()), (pt = dt = ft = null), (Jt = !1), e)
                      : null;
                  switch (e) {
                    case "paste":
                    default:
                      return null;
                    case "keypress":
                      if (
                        !(n.ctrlKey || n.altKey || n.metaKey) ||
                        (n.ctrlKey && n.altKey)
                      ) {
                        if (n.char && 1 < n.char.length) return n.char;
                        if (n.which) return String.fromCharCode(n.which);
                      }
                      return null;
                    case "compositionend":
                      return Qt && "ko" !== n.locale ? null : n.data;
                  }
                })(e, t)) &&
              0 < (r = tl(r, "onBeforeInput")).length &&
              ((l = new Tt("onBeforeInput", "beforeinput", null, t, l)),
              o.push({ event: l, listeners: r }),
              (l.data = y));
        }
        Kr(o, n);
      });
    }
    function nl(e, n, t) {
      return { instance: e, listener: n, currentTarget: t };
    }
    function tl(e, n) {
      for (var t = n + "Capture", r = []; null !== e; ) {
        var l = e,
          a = l.stateNode;
        5 === l.tag &&
          null !== a &&
          ((l = a),
          null != (a = Ve(e, t)) && r.unshift(nl(e, a, l)),
          null != (a = Ve(e, n)) && r.push(nl(e, a, l))),
          (e = e.return);
      }
      return r;
    }
    function rl(e) {
      if (null === e) return null;
      do {
        e = e.return;
      } while (e && 5 !== e.tag);
      return e || null;
    }
    function ll(e, n, t, r, l) {
      for (var a = n._reactName, o = []; null !== t && t !== r; ) {
        var i = t,
          u = i.alternate,
          s = i.stateNode;
        if (null !== u && u === r) break;
        5 === i.tag &&
          null !== s &&
          ((i = s),
          l
            ? null != (u = Ve(t, a)) && o.unshift(nl(t, u, i))
            : l || (null != (u = Ve(t, a)) && o.push(nl(t, u, i)))),
          (t = t.return);
      }
      0 !== o.length && e.push({ event: n, listeners: o });
    }
    var al = /\r\n?/g,
      ol = /\u0000|\uFFFD/g;
    function il(e) {
      return ("string" == typeof e ? e : "" + e)
        .replace(al, "\n")
        .replace(ol, "");
    }
    function ul(e, n, t) {
      if (((n = il(n)), il(e) !== n && t)) throw Error(y(425));
    }
    function sl() {}
    var cl = null,
      fl = null;
    function dl(e, n) {
      return (
        "textarea" === e ||
        "noscript" === e ||
        "string" == typeof n.children ||
        "number" == typeof n.children ||
        ("object" == typeof n.dangerouslySetInnerHTML &&
          null !== n.dangerouslySetInnerHTML &&
          null != n.dangerouslySetInnerHTML.__html)
      );
    }
    var pl = "function" == typeof setTimeout ? setTimeout : void 0,
      hl = "function" == typeof clearTimeout ? clearTimeout : void 0,
      ml = "function" == typeof Promise ? Promise : void 0,
      gl =
        "function" == typeof queueMicrotask
          ? queueMicrotask
          : void 0 !== ml
          ? function (e) {
              return ml.resolve(null).then(e).catch(vl);
            }
          : pl;
    function vl(e) {
      setTimeout(function () {
        throw e;
      });
    }
    function yl(e, n) {
      var t = n,
        r = 0;
      do {
        var l = t.nextSibling;
        if ((e.removeChild(t), l && 8 === l.nodeType))
          if ("/$" === (t = l.data)) {
            if (0 === r) return e.removeChild(l), void tt(n);
            r--;
          } else ("$" !== t && "$?" !== t && "$!" !== t) || r++;
        t = l;
      } while (t);
      tt(n);
    }
    function bl(e) {
      for (; null != e; e = e.nextSibling) {
        var n = e.nodeType;
        if (1 === n || 3 === n) break;
        if (8 === n) {
          if ("$" === (n = e.data) || "$!" === n || "$?" === n) break;
          if ("/$" === n) return null;
        }
      }
      return e;
    }
    function wl(e) {
      e = e.previousSibling;
      for (var n = 0; e; ) {
        if (8 === e.nodeType) {
          var t = e.data;
          if ("$" === t || "$!" === t || "$?" === t) {
            if (0 === n) return e;
            n--;
          } else "/$" === t && n++;
        }
        e = e.previousSibling;
      }
      return null;
    }
    var kl = Math.random().toString(36).slice(2),
      xl = "__reactFiber$" + kl,
      Sl = "__reactProps$" + kl,
      _l = "__reactContainer$" + kl,
      El = "__reactEvents$" + kl,
      Nl = "__reactListeners$" + kl,
      Cl = "__reactHandles$" + kl;
    function Pl(e) {
      var n = e[xl];
      if (n) return n;
      for (var t = e.parentNode; t; ) {
        if ((n = t[_l] || t[xl])) {
          if (
            ((t = n.alternate),
            null !== n.child || (null !== t && null !== t.child))
          )
            for (e = wl(e); null !== e; ) {
              if ((t = e[xl])) return t;
              e = wl(e);
            }
          return n;
        }
        t = (e = t).parentNode;
      }
      return null;
    }
    function zl(e) {
      return !(e = e[xl] || e[_l]) ||
        (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
        ? null
        : e;
    }
    function jl(e) {
      if (5 === e.tag || 6 === e.tag) return e.stateNode;
      throw Error(y(33));
    }
    function Ll(e) {
      return e[Sl] || null;
    }
    var Tl = [],
      Fl = -1;
    function Rl(e) {
      return { current: e };
    }
    function Ml(e) {
      0 > Fl || ((e.current = Tl[Fl]), (Tl[Fl] = null), Fl--);
    }
    function Ol(e, n) {
      Fl++, (Tl[Fl] = e.current), (e.current = n);
    }
    var Il = {},
      Dl = Rl(Il),
      Ul = Rl(!1),
      Al = Il;
    function Wl(e, n) {
      var t = e.type.contextTypes;
      if (!t) return Il;
      var r = e.stateNode;
      if (r && r.__reactInternalMemoizedUnmaskedChildContext === n)
        return r.__reactInternalMemoizedMaskedChildContext;
      var l,
        a = {};
      for (l in t) a[l] = n[l];
      return (
        r &&
          (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = n),
          (e.__reactInternalMemoizedMaskedChildContext = a)),
        a
      );
    }
    function ql(e) {
      return null != (e = e.childContextTypes);
    }
    function $l() {
      Ml(Ul), Ml(Dl);
    }
    function Hl(e, n, t) {
      if (Dl.current !== Il) throw Error(y(168));
      Ol(Dl, n), Ol(Ul, t);
    }
    function Vl(e, n, t) {
      var r = e.stateNode;
      if (((n = n.childContextTypes), "function" != typeof r.getChildContext))
        return t;
      for (var l in (r = r.getChildContext()))
        if (!(l in n)) throw Error(y(108, te(e) || "Unknown", l));
      return X({}, t, r);
    }
    function Bl(e) {
      return (
        (e =
          ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
          Il),
        (Al = Dl.current),
        Ol(Dl, e),
        Ol(Ul, Ul.current),
        !0
      );
    }
    function Ql(e, n, t) {
      var r = e.stateNode;
      if (!r) throw Error(y(169));
      t
        ? ((e = Vl(e, n, Al)),
          (r.__reactInternalMemoizedMergedChildContext = e),
          Ml(Ul),
          Ml(Dl),
          Ol(Dl, e))
        : Ml(Ul),
        Ol(Ul, t);
    }
    var Kl = null,
      Yl = !1,
      Xl = !1;
    function Gl(e) {
      null === Kl ? (Kl = [e]) : Kl.push(e);
    }
    function Jl() {
      if (!Xl && null !== Kl) {
        Xl = !0;
        var e = 0,
          n = Fn;
        try {
          var t = Kl;
          for (Fn = 1; e < t.length; e++) {
            var r = t[e];
            do {
              r = r(!0);
            } while (null !== r);
          }
          (Kl = null), (Yl = !1);
        } catch (n) {
          throw (null !== Kl && (Kl = Kl.slice(e + 1)), on(pn, Jl), n);
        } finally {
          (Fn = n), (Xl = !1);
        }
      }
      return null;
    }
    var Zl = F.ReactCurrentBatchConfig;
    function ea(e, n) {
      if (e && e.defaultProps) {
        for (var t in ((n = X({}, n)), (e = e.defaultProps)))
          void 0 === n[t] && (n[t] = e[t]);
        return n;
      }
      return n;
    }
    var na = Rl(null),
      ta = null,
      ra = null,
      la = null;
    function aa() {
      la = ra = ta = null;
    }
    function oa(e) {
      var n = na.current;
      Ml(na), (e._currentValue = n);
    }
    function ia(e, n, t) {
      for (; null !== e; ) {
        var r = e.alternate;
        if (
          ((e.childLanes & n) !== n
            ? ((e.childLanes |= n), null !== r && (r.childLanes |= n))
            : null !== r && (r.childLanes & n) !== n && (r.childLanes |= n),
          e === t)
        )
          break;
        e = e.return;
      }
    }
    function ua(e, n) {
      (ta = e),
        (la = ra = null),
        null !== (e = e.dependencies) &&
          null !== e.firstContext &&
          (0 != (e.lanes & n) && (Li = !0), (e.firstContext = null));
    }
    function sa(e) {
      var n = e._currentValue;
      if (la !== e)
        if (((e = { context: e, memoizedValue: n, next: null }), null === ra)) {
          if (null === ta) throw Error(y(308));
          (ra = e), (ta.dependencies = { lanes: 0, firstContext: e });
        } else ra = ra.next = e;
      return n;
    }
    var ca = null,
      fa = !1;
    function da(e) {
      e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, interleaved: null, lanes: 0 },
        effects: null,
      };
    }
    function pa(e, n) {
      (e = e.updateQueue),
        n.updateQueue === e &&
          (n.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            effects: e.effects,
          });
    }
    function ha(e, n) {
      return {
        eventTime: e,
        lane: n,
        tag: 0,
        payload: null,
        callback: null,
        next: null,
      };
    }
    function ma(e, n) {
      var t = e.updateQueue;
      null !== t &&
        ((t = t.shared),
        fs(e)
          ? (null === (e = t.interleaved)
              ? ((n.next = n), null === ca ? (ca = [t]) : ca.push(t))
              : ((n.next = e.next), (e.next = n)),
            (t.interleaved = n))
          : (null === (e = t.pending)
              ? (n.next = n)
              : ((n.next = e.next), (e.next = n)),
            (t.pending = n)));
    }
    function ga(e, n, t) {
      if (
        null !== (n = n.updateQueue) &&
        ((n = n.shared), 0 != (4194240 & t))
      ) {
        var r = n.lanes;
        (t |= r &= e.pendingLanes), (n.lanes = t), Tn(e, t);
      }
    }
    function va(e, n) {
      var t = e.updateQueue,
        r = e.alternate;
      if (null !== r && t === (r = r.updateQueue)) {
        var l = null,
          a = null;
        if (null !== (t = t.firstBaseUpdate)) {
          do {
            var o = {
              eventTime: t.eventTime,
              lane: t.lane,
              tag: t.tag,
              payload: t.payload,
              callback: t.callback,
              next: null,
            };
            null === a ? (l = a = o) : (a = a.next = o), (t = t.next);
          } while (null !== t);
          null === a ? (l = a = n) : (a = a.next = n);
        } else l = a = n;
        return (
          (t = {
            baseState: r.baseState,
            firstBaseUpdate: l,
            lastBaseUpdate: a,
            shared: r.shared,
            effects: r.effects,
          }),
          void (e.updateQueue = t)
        );
      }
      null === (e = t.lastBaseUpdate) ? (t.firstBaseUpdate = n) : (e.next = n),
        (t.lastBaseUpdate = n);
    }
    function ya(e, n, t, r) {
      var l = e.updateQueue;
      fa = !1;
      var a = l.firstBaseUpdate,
        o = l.lastBaseUpdate,
        i = l.shared.pending;
      if (null !== i) {
        l.shared.pending = null;
        var u = i,
          s = u.next;
        (u.next = null), null === o ? (a = s) : (o.next = s), (o = u);
        var c = e.alternate;
        null !== c &&
          (i = (c = c.updateQueue).lastBaseUpdate) !== o &&
          (null === i ? (c.firstBaseUpdate = s) : (i.next = s),
          (c.lastBaseUpdate = u));
      }
      if (null !== a) {
        var f = l.baseState;
        for (o = 0, c = s = u = null, i = a; ; ) {
          var d = i.lane,
            p = i.eventTime;
          if ((r & d) === d) {
            null !== c &&
              (c = c.next =
                {
                  eventTime: p,
                  lane: 0,
                  tag: i.tag,
                  payload: i.payload,
                  callback: i.callback,
                  next: null,
                });
            e: {
              var h = e,
                m = i;
              switch (((d = n), (p = t), m.tag)) {
                case 1:
                  if ("function" == typeof (h = m.payload)) {
                    f = h.call(p, f, d);
                    break e;
                  }
                  f = h;
                  break e;
                case 3:
                  h.flags = (-65537 & h.flags) | 128;
                case 0:
                  if (
                    null ==
                    (d =
                      "function" == typeof (h = m.payload)
                        ? h.call(p, f, d)
                        : h)
                  )
                    break e;
                  f = X({}, f, d);
                  break e;
                case 2:
                  fa = !0;
              }
            }
            null !== i.callback &&
              0 !== i.lane &&
              ((e.flags |= 64),
              null === (d = l.effects) ? (l.effects = [i]) : d.push(i));
          } else
            (p = {
              eventTime: p,
              lane: d,
              tag: i.tag,
              payload: i.payload,
              callback: i.callback,
              next: null,
            }),
              null === c ? ((s = c = p), (u = f)) : (c = c.next = p),
              (o |= d);
          if (null === (i = i.next)) {
            if (null === (i = l.shared.pending)) break;
            (i = (d = i).next),
              (d.next = null),
              (l.lastBaseUpdate = d),
              (l.shared.pending = null);
          }
        }
        if (
          (null === c && (u = f),
          (l.baseState = u),
          (l.firstBaseUpdate = s),
          (l.lastBaseUpdate = c),
          null !== (n = l.shared.interleaved))
        ) {
          l = n;
          do {
            (o |= l.lane), (l = l.next);
          } while (l !== n);
        } else null === a && (l.shared.lanes = 0);
        ($u |= o), (e.lanes = o), (e.memoizedState = f);
      }
    }
    function ba(e, n, t) {
      if (((e = n.effects), (n.effects = null), null !== e))
        for (n = 0; n < e.length; n++) {
          var r = e[n],
            l = r.callback;
          if (null !== l) {
            if (((r.callback = null), (r = t), "function" != typeof l))
              throw Error(y(191, l));
            l.call(r);
          }
        }
    }
    var wa = new g.Component().refs;
    function ka(e, n, t, r) {
      (t = null == (t = t(r, (n = e.memoizedState))) ? n : X({}, n, t)),
        (e.memoizedState = t),
        0 === e.lanes && (e.updateQueue.baseState = t);
    }
    var xa = {
      isMounted: function (e) {
        return !!(e = e._reactInternals) && nn(e) === e;
      },
      enqueueSetState: function (e, n, t) {
        e = e._reactInternals;
        var r = is(),
          l = us(e),
          a = ha(r, l);
        (a.payload = n),
          null != t && (a.callback = t),
          ma(e, a),
          null !== (n = ss(e, l, r)) && ga(n, e, l);
      },
      enqueueReplaceState: function (e, n, t) {
        e = e._reactInternals;
        var r = is(),
          l = us(e),
          a = ha(r, l);
        (a.tag = 1),
          (a.payload = n),
          null != t && (a.callback = t),
          ma(e, a),
          null !== (n = ss(e, l, r)) && ga(n, e, l);
      },
      enqueueForceUpdate: function (e, n) {
        e = e._reactInternals;
        var t = is(),
          r = us(e),
          l = ha(t, r);
        (l.tag = 2),
          null != n && (l.callback = n),
          ma(e, l),
          null !== (n = ss(e, r, t)) && ga(n, e, r);
      },
    };
    function Sa(e, n, t, r, l, a, o) {
      return "function" == typeof (e = e.stateNode).shouldComponentUpdate
        ? e.shouldComponentUpdate(r, a, o)
        : !n.prototype ||
            !n.prototype.isPureReactComponent ||
            !yr(t, r) ||
            !yr(l, a);
    }
    function _a(e, n, t) {
      var r = !1,
        l = Il,
        a = n.contextType;
      return (
        "object" == typeof a && null !== a
          ? (a = sa(a))
          : ((l = ql(n) ? Al : Dl.current),
            (a = (r = null != (r = n.contextTypes)) ? Wl(e, l) : Il)),
        (n = new n(t, a)),
        (e.memoizedState =
          null !== n.state && void 0 !== n.state ? n.state : null),
        (n.updater = xa),
        (e.stateNode = n),
        (n._reactInternals = e),
        r &&
          (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = l),
          (e.__reactInternalMemoizedMaskedChildContext = a)),
        n
      );
    }
    function Ea(e, n, t, r) {
      (e = n.state),
        "function" == typeof n.componentWillReceiveProps &&
          n.componentWillReceiveProps(t, r),
        "function" == typeof n.UNSAFE_componentWillReceiveProps &&
          n.UNSAFE_componentWillReceiveProps(t, r),
        n.state !== e && xa.enqueueReplaceState(n, n.state, null);
    }
    function Na(e, n, t, r) {
      var l = e.stateNode;
      (l.props = t), (l.state = e.memoizedState), (l.refs = wa), da(e);
      var a = n.contextType;
      "object" == typeof a && null !== a
        ? (l.context = sa(a))
        : ((a = ql(n) ? Al : Dl.current), (l.context = Wl(e, a))),
        (l.state = e.memoizedState),
        "function" == typeof (a = n.getDerivedStateFromProps) &&
          (ka(e, n, a, t), (l.state = e.memoizedState)),
        "function" == typeof n.getDerivedStateFromProps ||
          "function" == typeof l.getSnapshotBeforeUpdate ||
          ("function" != typeof l.UNSAFE_componentWillMount &&
            "function" != typeof l.componentWillMount) ||
          ((n = l.state),
          "function" == typeof l.componentWillMount && l.componentWillMount(),
          "function" == typeof l.UNSAFE_componentWillMount &&
            l.UNSAFE_componentWillMount(),
          n !== l.state && xa.enqueueReplaceState(l, l.state, null),
          ya(e, t, l, r),
          (l.state = e.memoizedState)),
        "function" == typeof l.componentDidMount && (e.flags |= 4194308);
    }
    var Ca = [],
      Pa = 0,
      za = null,
      ja = 0,
      La = [],
      Ta = 0,
      Fa = null,
      Ra = 1,
      Ma = "";
    function Oa(e, n) {
      (Ca[Pa++] = ja), (Ca[Pa++] = za), (za = e), (ja = n);
    }
    function Ia(e, n, t) {
      (La[Ta++] = Ra), (La[Ta++] = Ma), (La[Ta++] = Fa), (Fa = e);
      var r = Ra;
      e = Ma;
      var l = 32 - wn(r) - 1;
      (r &= ~(1 << l)), (t += 1);
      var a = 32 - wn(n) + l;
      if (30 < a) {
        var o = l - (l % 5);
        (a = (r & ((1 << o) - 1)).toString(32)),
          (r >>= o),
          (l -= o),
          (Ra = (1 << (32 - wn(n) + l)) | (t << l) | r),
          (Ma = a + e);
      } else (Ra = (1 << a) | (t << l) | r), (Ma = e);
    }
    function Da(e) {
      null !== e.return && (Oa(e, 1), Ia(e, 1, 0));
    }
    function Ua(e) {
      for (; e === za; )
        (za = Ca[--Pa]), (Ca[Pa] = null), (ja = Ca[--Pa]), (Ca[Pa] = null);
      for (; e === Fa; )
        (Fa = La[--Ta]),
          (La[Ta] = null),
          (Ma = La[--Ta]),
          (La[Ta] = null),
          (Ra = La[--Ta]),
          (La[Ta] = null);
    }
    var Aa = null,
      Wa = null,
      qa = !1,
      $a = null;
    function Ha(e, n) {
      var t = As(5, null, null, 0);
      (t.elementType = "DELETED"),
        (t.stateNode = n),
        (t.return = e),
        null === (n = e.deletions)
          ? ((e.deletions = [t]), (e.flags |= 16))
          : n.push(t);
    }
    function Va(e, n) {
      switch (e.tag) {
        case 5:
          var t = e.type;
          return (
            null !==
              (n =
                1 !== n.nodeType || t.toLowerCase() !== n.nodeName.toLowerCase()
                  ? null
                  : n) &&
            ((e.stateNode = n), (Aa = e), (Wa = bl(n.firstChild)), !0)
          );
        case 6:
          return (
            null !==
              (n = "" === e.pendingProps || 3 !== n.nodeType ? null : n) &&
            ((e.stateNode = n), (Aa = e), (Wa = null), !0)
          );
        case 13:
          return (
            null !== (n = 8 !== n.nodeType ? null : n) &&
            ((t = null !== Fa ? { id: Ra, overflow: Ma } : null),
            (e.memoizedState = {
              dehydrated: n,
              treeContext: t,
              retryLane: 1073741824,
            }),
            ((t = As(18, null, null, 0)).stateNode = n),
            (t.return = e),
            (e.child = t),
            (Aa = e),
            (Wa = null),
            !0)
          );
        default:
          return !1;
      }
    }
    function Ba(e) {
      return 0 != (1 & e.mode) && 0 == (128 & e.flags);
    }
    function Qa(e) {
      if (qa) {
        var n = Wa;
        if (n) {
          var t = n;
          if (!Va(e, n)) {
            if (Ba(e)) throw Error(y(418));
            n = bl(t.nextSibling);
            var r = Aa;
            n && Va(e, n)
              ? Ha(r, t)
              : ((e.flags = (-4097 & e.flags) | 2), (qa = !1), (Aa = e));
          }
        } else {
          if (Ba(e)) throw Error(y(418));
          (e.flags = (-4097 & e.flags) | 2), (qa = !1), (Aa = e);
        }
      }
    }
    function Ka(e) {
      for (
        e = e.return;
        null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

      )
        e = e.return;
      Aa = e;
    }
    function Ya(e) {
      if (e !== Aa) return !1;
      if (!qa) return Ka(e), (qa = !0), !1;
      var n;
      if (
        ((n = 3 !== e.tag) &&
          !(n = 5 !== e.tag) &&
          (n =
            "head" !== (n = e.type) &&
            "body" !== n &&
            !dl(e.type, e.memoizedProps)),
        n && (n = Wa))
      ) {
        if (Ba(e)) {
          for (e = Wa; e; ) e = bl(e.nextSibling);
          throw Error(y(418));
        }
        for (; n; ) Ha(e, n), (n = bl(n.nextSibling));
      }
      if ((Ka(e), 13 === e.tag)) {
        if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
          throw Error(y(317));
        e: {
          for (e = e.nextSibling, n = 0; e; ) {
            if (8 === e.nodeType) {
              var t = e.data;
              if ("/$" === t) {
                if (0 === n) {
                  Wa = bl(e.nextSibling);
                  break e;
                }
                n--;
              } else ("$" !== t && "$!" !== t && "$?" !== t) || n++;
            }
            e = e.nextSibling;
          }
          Wa = null;
        }
      } else Wa = Aa ? bl(e.stateNode.nextSibling) : null;
      return !0;
    }
    function Xa() {
      (Wa = Aa = null), (qa = !1);
    }
    function Ga(e) {
      null === $a ? ($a = [e]) : $a.push(e);
    }
    function Ja(e, n, t) {
      if (
        null !== (e = t.ref) &&
        "function" != typeof e &&
        "object" != typeof e
      ) {
        if (t._owner) {
          if ((t = t._owner)) {
            if (1 !== t.tag) throw Error(y(309));
            var r = t.stateNode;
          }
          if (!r) throw Error(y(147, e));
          var l = r,
            a = "" + e;
          return null !== n &&
            null !== n.ref &&
            "function" == typeof n.ref &&
            n.ref._stringRef === a
            ? n.ref
            : (((n = function (e) {
                var n = l.refs;
                n === wa && (n = l.refs = {}),
                  null === e ? delete n[a] : (n[a] = e);
              })._stringRef = a),
              n);
        }
        if ("string" != typeof e) throw Error(y(284));
        if (!t._owner) throw Error(y(290, e));
      }
      return e;
    }
    function Za(e, n) {
      throw (
        ((e = Object.prototype.toString.call(n)),
        Error(
          y(
            31,
            "[object Object]" === e
              ? "object with keys {" + Object.keys(n).join(", ") + "}"
              : e
          )
        ))
      );
    }
    function eo(e) {
      return (0, e._init)(e._payload);
    }
    function no(e) {
      function n(n, t) {
        if (e) {
          var r = n.deletions;
          null === r ? ((n.deletions = [t]), (n.flags |= 16)) : r.push(t);
        }
      }
      function t(t, r) {
        if (!e) return null;
        for (; null !== r; ) n(t, r), (r = r.sibling);
        return null;
      }
      function r(e, n) {
        for (e = new Map(); null !== n; )
          null !== n.key ? e.set(n.key, n) : e.set(n.index, n), (n = n.sibling);
        return e;
      }
      function l(e, n) {
        return ((e = qs(e, n)).index = 0), (e.sibling = null), e;
      }
      function a(n, t, r) {
        return (
          (n.index = r),
          e
            ? null !== (r = n.alternate)
              ? (r = r.index) < t
                ? ((n.flags |= 2), t)
                : r
              : ((n.flags |= 2), t)
            : ((n.flags |= 1048576), t)
        );
      }
      function o(n) {
        return e && null === n.alternate && (n.flags |= 2), n;
      }
      function i(e, n, t, r) {
        return null === n || 6 !== n.tag
          ? (((n = Bs(t, e.mode, r)).return = e), n)
          : (((n = l(n, t)).return = e), n);
      }
      function u(e, n, t, r) {
        var a = t.type;
        return a === O
          ? c(e, n, t.props.children, r, t.key)
          : null !== n &&
            (n.elementType === a ||
              ("object" == typeof a &&
                null !== a &&
                a.$$typeof === V &&
                eo(a) === n.type))
          ? (((r = l(n, t.props)).ref = Ja(e, n, t)), (r.return = e), r)
          : (((r = $s(t.type, t.key, t.props, null, e.mode, r)).ref = Ja(
              e,
              n,
              t
            )),
            (r.return = e),
            r);
      }
      function s(e, n, t, r) {
        return null === n ||
          4 !== n.tag ||
          n.stateNode.containerInfo !== t.containerInfo ||
          n.stateNode.implementation !== t.implementation
          ? (((n = Qs(t, e.mode, r)).return = e), n)
          : (((n = l(n, t.children || [])).return = e), n);
      }
      function c(e, n, t, r, a) {
        return null === n || 7 !== n.tag
          ? (((n = Hs(t, e.mode, r, a)).return = e), n)
          : (((n = l(n, t)).return = e), n);
      }
      function f(e, n, t) {
        if (("string" == typeof n && "" !== n) || "number" == typeof n)
          return ((n = Bs("" + n, e.mode, t)).return = e), n;
        if ("object" == typeof n && null !== n) {
          switch (n.$$typeof) {
            case R:
              return (
                ((t = $s(n.type, n.key, n.props, null, e.mode, t)).ref = Ja(
                  e,
                  null,
                  n
                )),
                (t.return = e),
                t
              );
            case M:
              return ((n = Qs(n, e.mode, t)).return = e), n;
            case V:
              return f(e, (0, n._init)(n._payload), t);
          }
          if (he(n) || K(n))
            return ((n = Hs(n, e.mode, t, null)).return = e), n;
          Za(e, n);
        }
        return null;
      }
      function d(e, n, t, r) {
        var l = null !== n ? n.key : null;
        if (("string" == typeof t && "" !== t) || "number" == typeof t)
          return null !== l ? null : i(e, n, "" + t, r);
        if ("object" == typeof t && null !== t) {
          switch (t.$$typeof) {
            case R:
              return t.key === l ? u(e, n, t, r) : null;
            case M:
              return t.key === l ? s(e, n, t, r) : null;
            case V:
              return d(e, n, (l = t._init)(t._payload), r);
          }
          if (he(t) || K(t)) return null !== l ? null : c(e, n, t, r, null);
          Za(e, t);
        }
        return null;
      }
      function p(e, n, t, r, l) {
        if (("string" == typeof r && "" !== r) || "number" == typeof r)
          return i(n, (e = e.get(t) || null), "" + r, l);
        if ("object" == typeof r && null !== r) {
          switch (r.$$typeof) {
            case R:
              return u(
                n,
                (e = e.get(null === r.key ? t : r.key) || null),
                r,
                l
              );
            case M:
              return s(
                n,
                (e = e.get(null === r.key ? t : r.key) || null),
                r,
                l
              );
            case V:
              return p(e, n, t, (0, r._init)(r._payload), l);
          }
          if (he(r) || K(r)) return c(n, (e = e.get(t) || null), r, l, null);
          Za(n, r);
        }
        return null;
      }
      return function i(u, s, c, h) {
        if (
          ("object" == typeof c &&
            null !== c &&
            c.type === O &&
            null === c.key &&
            (c = c.props.children),
          "object" == typeof c && null !== c)
        ) {
          switch (c.$$typeof) {
            case R:
              e: {
                for (var m = c.key, g = s; null !== g; ) {
                  if (g.key === m) {
                    if ((m = c.type) === O) {
                      if (7 === g.tag) {
                        t(u, g.sibling),
                          ((s = l(g, c.props.children)).return = u),
                          (u = s);
                        break e;
                      }
                    } else if (
                      g.elementType === m ||
                      ("object" == typeof m &&
                        null !== m &&
                        m.$$typeof === V &&
                        eo(m) === g.type)
                    ) {
                      t(u, g.sibling),
                        ((s = l(g, c.props)).ref = Ja(u, g, c)),
                        (s.return = u),
                        (u = s);
                      break e;
                    }
                    t(u, g);
                    break;
                  }
                  n(u, g), (g = g.sibling);
                }
                c.type === O
                  ? (((s = Hs(c.props.children, u.mode, h, c.key)).return = u),
                    (u = s))
                  : (((h = $s(c.type, c.key, c.props, null, u.mode, h)).ref =
                      Ja(u, s, c)),
                    (h.return = u),
                    (u = h));
              }
              return o(u);
            case M:
              e: {
                for (g = c.key; null !== s; ) {
                  if (s.key === g) {
                    if (
                      4 === s.tag &&
                      s.stateNode.containerInfo === c.containerInfo &&
                      s.stateNode.implementation === c.implementation
                    ) {
                      t(u, s.sibling),
                        ((s = l(s, c.children || [])).return = u),
                        (u = s);
                      break e;
                    }
                    t(u, s);
                    break;
                  }
                  n(u, s), (s = s.sibling);
                }
                ((s = Qs(c, u.mode, h)).return = u), (u = s);
              }
              return o(u);
            case V:
              return i(u, s, (g = c._init)(c._payload), h);
          }
          if (he(c))
            return (function (l, o, i, u) {
              for (
                var s = null, c = null, h = o, m = (o = 0), g = null;
                null !== h && m < i.length;
                m++
              ) {
                h.index > m ? ((g = h), (h = null)) : (g = h.sibling);
                var v = d(l, h, i[m], u);
                if (null === v) {
                  null === h && (h = g);
                  break;
                }
                e && h && null === v.alternate && n(l, h),
                  (o = a(v, o, m)),
                  null === c ? (s = v) : (c.sibling = v),
                  (c = v),
                  (h = g);
              }
              if (m === i.length) return t(l, h), qa && Oa(l, m), s;
              if (null === h) {
                for (; m < i.length; m++)
                  null !== (h = f(l, i[m], u)) &&
                    ((o = a(h, o, m)),
                    null === c ? (s = h) : (c.sibling = h),
                    (c = h));
                return qa && Oa(l, m), s;
              }
              for (h = r(l, h); m < i.length; m++)
                null !== (g = p(h, l, m, i[m], u)) &&
                  (e &&
                    null !== g.alternate &&
                    h.delete(null === g.key ? m : g.key),
                  (o = a(g, o, m)),
                  null === c ? (s = g) : (c.sibling = g),
                  (c = g));
              return (
                e &&
                  h.forEach(function (e) {
                    return n(l, e);
                  }),
                qa && Oa(l, m),
                s
              );
            })(u, s, c, h);
          if (K(c))
            return (function (l, o, i, u) {
              var s = K(i);
              if ("function" != typeof s) throw Error(y(150));
              if (null == (i = s.call(i))) throw Error(y(151));
              for (
                var c = (s = null), h = o, m = (o = 0), g = null, v = i.next();
                null !== h && !v.done;
                m++, v = i.next()
              ) {
                h.index > m ? ((g = h), (h = null)) : (g = h.sibling);
                var b = d(l, h, v.value, u);
                if (null === b) {
                  null === h && (h = g);
                  break;
                }
                e && h && null === b.alternate && n(l, h),
                  (o = a(b, o, m)),
                  null === c ? (s = b) : (c.sibling = b),
                  (c = b),
                  (h = g);
              }
              if (v.done) return t(l, h), qa && Oa(l, m), s;
              if (null === h) {
                for (; !v.done; m++, v = i.next())
                  null !== (v = f(l, v.value, u)) &&
                    ((o = a(v, o, m)),
                    null === c ? (s = v) : (c.sibling = v),
                    (c = v));
                return qa && Oa(l, m), s;
              }
              for (h = r(l, h); !v.done; m++, v = i.next())
                null !== (v = p(h, l, m, v.value, u)) &&
                  (e &&
                    null !== v.alternate &&
                    h.delete(null === v.key ? m : v.key),
                  (o = a(v, o, m)),
                  null === c ? (s = v) : (c.sibling = v),
                  (c = v));
              return (
                e &&
                  h.forEach(function (e) {
                    return n(l, e);
                  }),
                qa && Oa(l, m),
                s
              );
            })(u, s, c, h);
          Za(u, c);
        }
        return ("string" == typeof c && "" !== c) || "number" == typeof c
          ? ((c = "" + c),
            null !== s && 6 === s.tag
              ? (t(u, s.sibling), ((s = l(s, c)).return = u), (u = s))
              : (t(u, s), ((s = Bs(c, u.mode, h)).return = u), (u = s)),
            o(u))
          : t(u, s);
      };
    }
    var to = no(!0),
      ro = no(!1),
      lo = {},
      ao = Rl(lo),
      oo = Rl(lo),
      io = Rl(lo);
    function uo(e) {
      if (e === lo) throw Error(y(174));
      return e;
    }
    function so(e, n) {
      switch ((Ol(io, n), Ol(oo, e), Ol(ao, lo), (e = n.nodeType))) {
        case 9:
        case 11:
          n = (n = n.documentElement) ? n.namespaceURI : ke(null, "");
          break;
        default:
          n = ke(
            (n = (e = 8 === e ? n.parentNode : n).namespaceURI || null),
            (e = e.tagName)
          );
      }
      Ml(ao), Ol(ao, n);
    }
    function co() {
      Ml(ao), Ml(oo), Ml(io);
    }
    function fo(e) {
      uo(io.current);
      var n = uo(ao.current),
        t = ke(n, e.type);
      n !== t && (Ol(oo, e), Ol(ao, t));
    }
    function po(e) {
      oo.current === e && (Ml(ao), Ml(oo));
    }
    var ho = Rl(0);
    function mo(e) {
      for (var n = e; null !== n; ) {
        if (13 === n.tag) {
          var t = n.memoizedState;
          if (
            null !== t &&
            (null === (t = t.dehydrated) || "$?" === t.data || "$!" === t.data)
          )
            return n;
        } else if (19 === n.tag && void 0 !== n.memoizedProps.revealOrder) {
          if (0 != (128 & n.flags)) return n;
        } else if (null !== n.child) {
          (n.child.return = n), (n = n.child);
          continue;
        }
        if (n === e) break;
        for (; null === n.sibling; ) {
          if (null === n.return || n.return === e) return null;
          n = n.return;
        }
        (n.sibling.return = n.return), (n = n.sibling);
      }
      return null;
    }
    var go = [];
    function vo() {
      for (var e = 0; e < go.length; e++)
        go[e]._workInProgressVersionPrimary = null;
      go.length = 0;
    }
    var yo = F.ReactCurrentDispatcher,
      bo = F.ReactCurrentBatchConfig,
      wo = 0,
      ko = null,
      xo = null,
      So = null,
      _o = !1,
      Eo = !1,
      No = 0,
      Co = 0;
    function Po() {
      throw Error(y(321));
    }
    function zo(e, n) {
      if (null === n) return !1;
      for (var t = 0; t < n.length && t < e.length; t++)
        if (!vr(e[t], n[t])) return !1;
      return !0;
    }
    function jo(e, n, t, r, l, a) {
      if (
        ((wo = a),
        (ko = n),
        (n.memoizedState = null),
        (n.updateQueue = null),
        (n.lanes = 0),
        (yo.current = null === e || null === e.memoizedState ? pi : hi),
        (e = t(r, l)),
        Eo)
      ) {
        a = 0;
        do {
          if (((Eo = !1), (No = 0), 25 <= a)) throw Error(y(301));
          (a += 1),
            (So = xo = null),
            (n.updateQueue = null),
            (yo.current = mi),
            (e = t(r, l));
        } while (Eo);
      }
      if (
        ((yo.current = di),
        (n = null !== xo && null !== xo.next),
        (wo = 0),
        (So = xo = ko = null),
        (_o = !1),
        n)
      )
        throw Error(y(300));
      return e;
    }
    function Lo() {
      var e = 0 !== No;
      return (No = 0), e;
    }
    function To() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null,
      };
      return null === So ? (ko.memoizedState = So = e) : (So = So.next = e), So;
    }
    function Fo() {
      if (null === xo) {
        var e = ko.alternate;
        e = null !== e ? e.memoizedState : null;
      } else e = xo.next;
      var n = null === So ? ko.memoizedState : So.next;
      if (null !== n) (So = n), (xo = e);
      else {
        if (null === e) throw Error(y(310));
        (e = {
          memoizedState: (xo = e).memoizedState,
          baseState: xo.baseState,
          baseQueue: xo.baseQueue,
          queue: xo.queue,
          next: null,
        }),
          null === So ? (ko.memoizedState = So = e) : (So = So.next = e);
      }
      return So;
    }
    function Ro(e, n) {
      return "function" == typeof n ? n(e) : n;
    }
    function Mo(e) {
      var n = Fo(),
        t = n.queue;
      if (null === t) throw Error(y(311));
      t.lastRenderedReducer = e;
      var r = xo,
        l = r.baseQueue,
        a = t.pending;
      if (null !== a) {
        if (null !== l) {
          var o = l.next;
          (l.next = a.next), (a.next = o);
        }
        (r.baseQueue = l = a), (t.pending = null);
      }
      if (null !== l) {
        (a = l.next), (r = r.baseState);
        var i = (o = null),
          u = null,
          s = a;
        do {
          var c = s.lane;
          if ((wo & c) === c)
            null !== u &&
              (u = u.next =
                {
                  lane: 0,
                  action: s.action,
                  hasEagerState: s.hasEagerState,
                  eagerState: s.eagerState,
                  next: null,
                }),
              (r = s.hasEagerState ? s.eagerState : e(r, s.action));
          else {
            var f = {
              lane: c,
              action: s.action,
              hasEagerState: s.hasEagerState,
              eagerState: s.eagerState,
              next: null,
            };
            null === u ? ((i = u = f), (o = r)) : (u = u.next = f),
              (ko.lanes |= c),
              ($u |= c);
          }
          s = s.next;
        } while (null !== s && s !== a);
        null === u ? (o = r) : (u.next = i),
          vr(r, n.memoizedState) || (Li = !0),
          (n.memoizedState = r),
          (n.baseState = o),
          (n.baseQueue = u),
          (t.lastRenderedState = r);
      }
      if (null !== (e = t.interleaved)) {
        l = e;
        do {
          (a = l.lane), (ko.lanes |= a), ($u |= a), (l = l.next);
        } while (l !== e);
      } else null === l && (t.lanes = 0);
      return [n.memoizedState, t.dispatch];
    }
    function Oo(e) {
      var n = Fo(),
        t = n.queue;
      if (null === t) throw Error(y(311));
      t.lastRenderedReducer = e;
      var r = t.dispatch,
        l = t.pending,
        a = n.memoizedState;
      if (null !== l) {
        t.pending = null;
        var o = (l = l.next);
        do {
          (a = e(a, o.action)), (o = o.next);
        } while (o !== l);
        vr(a, n.memoizedState) || (Li = !0),
          (n.memoizedState = a),
          null === n.baseQueue && (n.baseState = a),
          (t.lastRenderedState = a);
      }
      return [a, r];
    }
    function Io() {}
    function Do(e, n) {
      var t = ko,
        r = Fo(),
        l = n(),
        a = !vr(r.memoizedState, l);
      if (
        (a && ((r.memoizedState = l), (Li = !0)),
        (r = r.queue),
        Yo(Wo.bind(null, t, r, e), [e]),
        r.getSnapshot !== n || a || (null !== So && 1 & So.memoizedState.tag))
      ) {
        if (
          ((t.flags |= 2048),
          Ho(9, Ao.bind(null, t, r, l, n), void 0, null),
          null === Ou)
        )
          throw Error(y(349));
        0 != (30 & wo) || Uo(t, n, l);
      }
      return l;
    }
    function Uo(e, n, t) {
      (e.flags |= 16384),
        (e = { getSnapshot: n, value: t }),
        null === (n = ko.updateQueue)
          ? ((n = { lastEffect: null, stores: null }),
            (ko.updateQueue = n),
            (n.stores = [e]))
          : null === (t = n.stores)
          ? (n.stores = [e])
          : t.push(e);
    }
    function Ao(e, n, t, r) {
      (n.value = t), (n.getSnapshot = r), qo(n) && ss(e, 1, -1);
    }
    function Wo(e, n, t) {
      return t(function () {
        qo(n) && ss(e, 1, -1);
      });
    }
    function qo(e) {
      var n = e.getSnapshot;
      e = e.value;
      try {
        var t = n();
        return !vr(e, t);
      } catch (e) {
        return !0;
      }
    }
    function $o(e) {
      var n = To();
      return (
        "function" == typeof e && (e = e()),
        (n.memoizedState = n.baseState = e),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Ro,
          lastRenderedState: e,
        }),
        (n.queue = e),
        (e = e.dispatch = ii.bind(null, ko, e)),
        [n.memoizedState, e]
      );
    }
    function Ho(e, n, t, r) {
      return (
        (e = { tag: e, create: n, destroy: t, deps: r, next: null }),
        null === (n = ko.updateQueue)
          ? ((n = { lastEffect: null, stores: null }),
            (ko.updateQueue = n),
            (n.lastEffect = e.next = e))
          : null === (t = n.lastEffect)
          ? (n.lastEffect = e.next = e)
          : ((r = t.next), (t.next = e), (e.next = r), (n.lastEffect = e)),
        e
      );
    }
    function Vo() {
      return Fo().memoizedState;
    }
    function Bo(e, n, t, r) {
      var l = To();
      (ko.flags |= e),
        (l.memoizedState = Ho(1 | n, t, void 0, void 0 === r ? null : r));
    }
    function Qo(e, n, t, r) {
      var l = Fo();
      r = void 0 === r ? null : r;
      var a = void 0;
      if (null !== xo) {
        var o = xo.memoizedState;
        if (((a = o.destroy), null !== r && zo(r, o.deps)))
          return void (l.memoizedState = Ho(n, t, a, r));
      }
      (ko.flags |= e), (l.memoizedState = Ho(1 | n, t, a, r));
    }
    function Ko(e, n) {
      return Bo(8390656, 8, e, n);
    }
    function Yo(e, n) {
      return Qo(2048, 8, e, n);
    }
    function Xo(e, n) {
      return Qo(4, 2, e, n);
    }
    function Go(e, n) {
      return Qo(4, 4, e, n);
    }
    function Jo(e, n) {
      return "function" == typeof n
        ? ((e = e()),
          n(e),
          function () {
            n(null);
          })
        : null != n
        ? ((e = e()),
          (n.current = e),
          function () {
            n.current = null;
          })
        : void 0;
    }
    function Zo(e, n, t) {
      return (
        (t = null != t ? t.concat([e]) : null), Qo(4, 4, Jo.bind(null, n, e), t)
      );
    }
    function ei() {}
    function ni(e, n) {
      var t = Fo();
      n = void 0 === n ? null : n;
      var r = t.memoizedState;
      return null !== r && null !== n && zo(n, r[1])
        ? r[0]
        : ((t.memoizedState = [e, n]), e);
    }
    function ti(e, n) {
      var t = Fo();
      n = void 0 === n ? null : n;
      var r = t.memoizedState;
      return null !== r && null !== n && zo(n, r[1])
        ? r[0]
        : ((e = e()), (t.memoizedState = [e, n]), e);
    }
    function ri(e, n, t) {
      return 0 == (21 & wo)
        ? (e.baseState && ((e.baseState = !1), (Li = !0)),
          (e.memoizedState = t))
        : (vr(t, n) ||
            ((t = zn()), (ko.lanes |= t), ($u |= t), (e.baseState = !0)),
          n);
    }
    function li(e, n) {
      var t = Fn;
      (Fn = 0 !== t && 4 > t ? t : 4), e(!0);
      var r = bo.transition;
      bo.transition = {};
      try {
        e(!1), n();
      } finally {
        (Fn = t), (bo.transition = r);
      }
    }
    function ai() {
      return Fo().memoizedState;
    }
    function oi(e, n, t) {
      var r = us(e);
      (t = {
        lane: r,
        action: t,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
        ui(e)
          ? si(n, t)
          : (ci(e, n, t), null !== (e = ss(e, r, (t = is()))) && fi(e, n, r));
    }
    function ii(e, n, t) {
      var r = us(e),
        l = {
          lane: r,
          action: t,
          hasEagerState: !1,
          eagerState: null,
          next: null,
        };
      if (ui(e)) si(n, l);
      else {
        ci(e, n, l);
        var a = e.alternate;
        if (
          0 === e.lanes &&
          (null === a || 0 === a.lanes) &&
          null !== (a = n.lastRenderedReducer)
        )
          try {
            var o = n.lastRenderedState,
              i = a(o, t);
            if (((l.hasEagerState = !0), (l.eagerState = i), vr(i, o))) return;
          } catch (e) {}
        null !== (e = ss(e, r, (t = is()))) && fi(e, n, r);
      }
    }
    function ui(e) {
      var n = e.alternate;
      return e === ko || (null !== n && n === ko);
    }
    function si(e, n) {
      Eo = _o = !0;
      var t = e.pending;
      null === t ? (n.next = n) : ((n.next = t.next), (t.next = n)),
        (e.pending = n);
    }
    function ci(e, n, t) {
      fs(e)
        ? (null === (e = n.interleaved)
            ? ((t.next = t), null === ca ? (ca = [n]) : ca.push(n))
            : ((t.next = e.next), (e.next = t)),
          (n.interleaved = t))
        : (null === (e = n.pending)
            ? (t.next = t)
            : ((t.next = e.next), (e.next = t)),
          (n.pending = t));
    }
    function fi(e, n, t) {
      if (0 != (4194240 & t)) {
        var r = n.lanes;
        (t |= r &= e.pendingLanes), (n.lanes = t), Tn(e, t);
      }
    }
    var di = {
        readContext: sa,
        useCallback: Po,
        useContext: Po,
        useEffect: Po,
        useImperativeHandle: Po,
        useInsertionEffect: Po,
        useLayoutEffect: Po,
        useMemo: Po,
        useReducer: Po,
        useRef: Po,
        useState: Po,
        useDebugValue: Po,
        useDeferredValue: Po,
        useTransition: Po,
        useMutableSource: Po,
        useSyncExternalStore: Po,
        useId: Po,
        unstable_isNewReconciler: !1,
      },
      pi = {
        readContext: sa,
        useCallback: function (e, n) {
          return (To().memoizedState = [e, void 0 === n ? null : n]), e;
        },
        useContext: sa,
        useEffect: Ko,
        useImperativeHandle: function (e, n, t) {
          return (
            (t = null != t ? t.concat([e]) : null),
            Bo(4194308, 4, Jo.bind(null, n, e), t)
          );
        },
        useLayoutEffect: function (e, n) {
          return Bo(4194308, 4, e, n);
        },
        useInsertionEffect: function (e, n) {
          return Bo(4, 2, e, n);
        },
        useMemo: function (e, n) {
          var t = To();
          return (
            (n = void 0 === n ? null : n),
            (e = e()),
            (t.memoizedState = [e, n]),
            e
          );
        },
        useReducer: function (e, n, t) {
          var r = To();
          return (
            (n = void 0 !== t ? t(n) : n),
            (r.memoizedState = r.baseState = n),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: e,
              lastRenderedState: n,
            }),
            (r.queue = e),
            (e = e.dispatch = oi.bind(null, ko, e)),
            [r.memoizedState, e]
          );
        },
        useRef: function (e) {
          return (e = { current: e }), (To().memoizedState = e);
        },
        useState: $o,
        useDebugValue: ei,
        useDeferredValue: function (e) {
          return (To().memoizedState = e);
        },
        useTransition: function () {
          var e = $o(!1),
            n = e[0];
          return (e = li.bind(null, e[1])), (To().memoizedState = e), [n, e];
        },
        useMutableSource: function () {},
        useSyncExternalStore: function (e, n, t) {
          var r = ko,
            l = To();
          if (qa) {
            if (void 0 === t) throw Error(y(407));
            t = t();
          } else {
            if (((t = n()), null === Ou)) throw Error(y(349));
            0 != (30 & wo) || Uo(r, n, t);
          }
          l.memoizedState = t;
          var a = { value: t, getSnapshot: n };
          return (
            (l.queue = a),
            Ko(Wo.bind(null, r, a, e), [e]),
            (r.flags |= 2048),
            Ho(9, Ao.bind(null, r, a, t, n), void 0, null),
            t
          );
        },
        useId: function () {
          var e = To(),
            n = Ou.identifierPrefix;
          if (qa) {
            var t = Ma;
            (n =
              ":" +
              n +
              "R" +
              (t = (Ra & ~(1 << (32 - wn(Ra) - 1))).toString(32) + t)),
              0 < (t = No++) && (n += "H" + t.toString(32)),
              (n += ":");
          } else n = ":" + n + "r" + (t = Co++).toString(32) + ":";
          return (e.memoizedState = n);
        },
        unstable_isNewReconciler: !1,
      },
      hi = {
        readContext: sa,
        useCallback: ni,
        useContext: sa,
        useEffect: Yo,
        useImperativeHandle: Zo,
        useInsertionEffect: Xo,
        useLayoutEffect: Go,
        useMemo: ti,
        useReducer: Mo,
        useRef: Vo,
        useState: function () {
          return Mo(Ro);
        },
        useDebugValue: ei,
        useDeferredValue: function (e) {
          return ri(Fo(), xo.memoizedState, e);
        },
        useTransition: function () {
          return [Mo(Ro)[0], Fo().memoizedState];
        },
        useMutableSource: Io,
        useSyncExternalStore: Do,
        useId: ai,
        unstable_isNewReconciler: !1,
      },
      mi = {
        readContext: sa,
        useCallback: ni,
        useContext: sa,
        useEffect: Yo,
        useImperativeHandle: Zo,
        useInsertionEffect: Xo,
        useLayoutEffect: Go,
        useMemo: ti,
        useReducer: Oo,
        useRef: Vo,
        useState: function () {
          return Oo(Ro);
        },
        useDebugValue: ei,
        useDeferredValue: function (e) {
          var n = Fo();
          return null === xo
            ? (n.memoizedState = e)
            : ri(n, xo.memoizedState, e);
        },
        useTransition: function () {
          return [Oo(Ro)[0], Fo().memoizedState];
        },
        useMutableSource: Io,
        useSyncExternalStore: Do,
        useId: ai,
        unstable_isNewReconciler: !1,
      };
    function gi(e, n) {
      try {
        var t = "",
          r = n;
        do {
          (t += ee(r)), (r = r.return);
        } while (r);
        var l = t;
      } catch (e) {
        l = "\nError generating stack: " + e.message + "\n" + e.stack;
      }
      return { value: e, source: n, stack: l };
    }
    function vi(e, n) {
      try {
        console.error(n.value);
      } catch (e) {
        setTimeout(function () {
          throw e;
        });
      }
    }
    var yi,
      bi,
      wi,
      ki = "function" == typeof WeakMap ? WeakMap : Map;
    function xi(e, n, t) {
      ((t = ha(-1, t)).tag = 3), (t.payload = { element: null });
      var r = n.value;
      return (
        (t.callback = function () {
          Gu || ((Gu = !0), (Ju = r)), vi(0, n);
        }),
        t
      );
    }
    function Si(e, n, t) {
      (t = ha(-1, t)).tag = 3;
      var r = e.type.getDerivedStateFromError;
      if ("function" == typeof r) {
        var l = n.value;
        (t.payload = function () {
          return r(l);
        }),
          (t.callback = function () {
            vi(0, n);
          });
      }
      var a = e.stateNode;
      return (
        null !== a &&
          "function" == typeof a.componentDidCatch &&
          (t.callback = function () {
            vi(0, n),
              "function" != typeof r &&
                (null === Zu ? (Zu = new Set([this])) : Zu.add(this));
            var e = n.stack;
            this.componentDidCatch(n.value, {
              componentStack: null !== e ? e : "",
            });
          }),
        t
      );
    }
    function _i(e, n, t) {
      var r = e.pingCache;
      if (null === r) {
        r = e.pingCache = new ki();
        var l = new Set();
        r.set(n, l);
      } else void 0 === (l = r.get(n)) && ((l = new Set()), r.set(n, l));
      l.has(t) || (l.add(t), (e = Rs.bind(null, e, n, t)), n.then(e, e));
    }
    function Ei(e) {
      do {
        var n;
        if (
          ((n = 13 === e.tag) &&
            (n = null === (n = e.memoizedState) || null !== n.dehydrated),
          n)
        )
          return e;
        e = e.return;
      } while (null !== e);
      return null;
    }
    function Ni(e, n, t, r, l) {
      return 0 == (1 & e.mode)
        ? (e === n
            ? (e.flags |= 65536)
            : ((e.flags |= 128),
              (t.flags |= 131072),
              (t.flags &= -52805),
              1 === t.tag &&
                (null === t.alternate
                  ? (t.tag = 17)
                  : (((n = ha(-1, 1)).tag = 2), ma(t, n))),
              (t.lanes |= 1)),
          e)
        : ((e.flags |= 65536), (e.lanes = l), e);
    }
    function Ci(e, n) {
      if (!qa)
        switch (e.tailMode) {
          case "hidden":
            n = e.tail;
            for (var t = null; null !== n; )
              null !== n.alternate && (t = n), (n = n.sibling);
            null === t ? (e.tail = null) : (t.sibling = null);
            break;
          case "collapsed":
            t = e.tail;
            for (var r = null; null !== t; )
              null !== t.alternate && (r = t), (t = t.sibling);
            null === r
              ? n || null === e.tail
                ? (e.tail = null)
                : (e.tail.sibling = null)
              : (r.sibling = null);
        }
    }
    function Pi(e) {
      var n = null !== e.alternate && e.alternate.child === e.child,
        t = 0,
        r = 0;
      if (n)
        for (var l = e.child; null !== l; )
          (t |= l.lanes | l.childLanes),
            (r |= 14680064 & l.subtreeFlags),
            (r |= 14680064 & l.flags),
            (l.return = e),
            (l = l.sibling);
      else
        for (l = e.child; null !== l; )
          (t |= l.lanes | l.childLanes),
            (r |= l.subtreeFlags),
            (r |= l.flags),
            (l.return = e),
            (l = l.sibling);
      return (e.subtreeFlags |= r), (e.childLanes = t), n;
    }
    function zi(e, n, t) {
      var r = n.pendingProps;
      switch ((Ua(n), n.tag)) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return Pi(n), null;
        case 1:
        case 17:
          return ql(n.type) && $l(), Pi(n), null;
        case 3:
          return (
            (r = n.stateNode),
            co(),
            Ml(Ul),
            Ml(Dl),
            vo(),
            r.pendingContext &&
              ((r.context = r.pendingContext), (r.pendingContext = null)),
            (null !== e && null !== e.child) ||
              (Ya(n)
                ? (n.flags |= 4)
                : null === e ||
                  (e.memoizedState.isDehydrated && 0 == (256 & n.flags)) ||
                  ((n.flags |= 1024), null !== $a && (ms($a), ($a = null)))),
            Pi(n),
            null
          );
        case 5:
          po(n);
          var l = uo(io.current);
          if (((t = n.type), null !== e && null != n.stateNode))
            bi(e, n, t, r),
              e.ref !== n.ref && ((n.flags |= 512), (n.flags |= 2097152));
          else {
            if (!r) {
              if (null === n.stateNode) throw Error(y(166));
              return Pi(n), null;
            }
            if (((e = uo(ao.current)), Ya(n))) {
              (r = n.stateNode), (t = n.type);
              var a = n.memoizedProps;
              switch (((r[xl] = n), (r[Sl] = a), (e = 0 != (1 & n.mode)), t)) {
                case "dialog":
                  Yr("cancel", r), Yr("close", r);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Yr("load", r);
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < Vr.length; l++) Yr(Vr[l], r);
                  break;
                case "source":
                  Yr("error", r);
                  break;
                case "img":
                case "image":
                case "link":
                  Yr("error", r), Yr("load", r);
                  break;
                case "details":
                  Yr("toggle", r);
                  break;
                case "input":
                  se(r, a), Yr("invalid", r);
                  break;
                case "select":
                  (r._wrapperState = { wasMultiple: !!a.multiple }),
                    Yr("invalid", r);
                  break;
                case "textarea":
                  ve(r, a), Yr("invalid", r);
              }
              for (var o in (Le(t, a), (l = null), a))
                if (a.hasOwnProperty(o)) {
                  var i = a[o];
                  "children" === o
                    ? "string" == typeof i
                      ? r.textContent !== i &&
                        (!0 !== a.suppressHydrationWarning &&
                          ul(r.textContent, i, e),
                        (l = ["children", i]))
                      : "number" == typeof i &&
                        r.textContent !== "" + i &&
                        (!0 !== a.suppressHydrationWarning &&
                          ul(r.textContent, i, e),
                        (l = ["children", "" + i]))
                    : w.hasOwnProperty(o) &&
                      null != i &&
                      "onScroll" === o &&
                      Yr("scroll", r);
                }
              switch (t) {
                case "input":
                  ae(r), de(r, a, !0);
                  break;
                case "textarea":
                  ae(r), be(r);
                  break;
                case "select":
                case "option":
                  break;
                default:
                  "function" == typeof a.onClick && (r.onclick = sl);
              }
              (r = l), (n.updateQueue = r), null !== r && (n.flags |= 4);
            } else {
              (o = 9 === l.nodeType ? l : l.ownerDocument),
                "http://www.w3.org/1999/xhtml" === e && (e = we(t)),
                "http://www.w3.org/1999/xhtml" === e
                  ? "script" === t
                    ? (((e = o.createElement("div")).innerHTML =
                        "<script></script>"),
                      (e = e.removeChild(e.firstChild)))
                    : "string" == typeof r.is
                    ? (e = o.createElement(t, { is: r.is }))
                    : ((e = o.createElement(t)),
                      "select" === t &&
                        ((o = e),
                        r.multiple
                          ? (o.multiple = !0)
                          : r.size && (o.size = r.size)))
                  : (e = o.createElementNS(e, t)),
                (e[xl] = n),
                (e[Sl] = r),
                yi(e, n),
                (n.stateNode = e);
              e: {
                switch (((o = Te(t, r)), t)) {
                  case "dialog":
                    Yr("cancel", e), Yr("close", e), (l = r);
                    break;
                  case "iframe":
                  case "object":
                  case "embed":
                    Yr("load", e), (l = r);
                    break;
                  case "video":
                  case "audio":
                    for (l = 0; l < Vr.length; l++) Yr(Vr[l], e);
                    l = r;
                    break;
                  case "source":
                    Yr("error", e), (l = r);
                    break;
                  case "img":
                  case "image":
                  case "link":
                    Yr("error", e), Yr("load", e), (l = r);
                    break;
                  case "details":
                    Yr("toggle", e), (l = r);
                    break;
                  case "input":
                    se(e, r), (l = ue(e, r)), Yr("invalid", e);
                    break;
                  case "option":
                  default:
                    l = r;
                    break;
                  case "select":
                    (e._wrapperState = { wasMultiple: !!r.multiple }),
                      (l = X({}, r, { value: void 0 })),
                      Yr("invalid", e);
                    break;
                  case "textarea":
                    ve(e, r), (l = ge(e, r)), Yr("invalid", e);
                }
                for (a in (Le(t, l), (i = l)))
                  if (i.hasOwnProperty(a)) {
                    var u = i[a];
                    "style" === a
                      ? ze(e, u)
                      : "dangerouslySetInnerHTML" === a
                      ? null != (u = u ? u.__html : void 0) && _e(e, u)
                      : "children" === a
                      ? "string" == typeof u
                        ? ("textarea" !== t || "" !== u) && Ee(e, u)
                        : "number" == typeof u && Ee(e, "" + u)
                      : "suppressContentEditableWarning" !== a &&
                        "suppressHydrationWarning" !== a &&
                        "autoFocus" !== a &&
                        (w.hasOwnProperty(a)
                          ? null != u && "onScroll" === a && Yr("scroll", e)
                          : null != u && T(e, a, u, o));
                  }
                switch (t) {
                  case "input":
                    ae(e), de(e, r, !1);
                    break;
                  case "textarea":
                    ae(e), be(e);
                    break;
                  case "option":
                    null != r.value &&
                      e.setAttribute("value", "" + re(r.value));
                    break;
                  case "select":
                    (e.multiple = !!r.multiple),
                      null != (a = r.value)
                        ? me(e, !!r.multiple, a, !1)
                        : null != r.defaultValue &&
                          me(e, !!r.multiple, r.defaultValue, !0);
                    break;
                  default:
                    "function" == typeof l.onClick && (e.onclick = sl);
                }
                switch (t) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    r = !!r.autoFocus;
                    break e;
                  case "img":
                    r = !0;
                    break e;
                  default:
                    r = !1;
                }
              }
              r && (n.flags |= 4);
            }
            null !== n.ref && ((n.flags |= 512), (n.flags |= 2097152));
          }
          return Pi(n), null;
        case 6:
          if (e && null != n.stateNode) wi(0, n, e.memoizedProps, r);
          else {
            if ("string" != typeof r && null === n.stateNode)
              throw Error(y(166));
            if (((t = uo(io.current)), uo(ao.current), Ya(n))) {
              if (
                ((r = n.stateNode),
                (t = n.memoizedProps),
                (r[xl] = n),
                (a = r.nodeValue !== t) && null !== (e = Aa))
              )
                switch (e.tag) {
                  case 3:
                    ul(r.nodeValue, t, 0 != (1 & e.mode));
                    break;
                  case 5:
                    !0 !== e.memoizedProps.suppressHydrationWarning &&
                      ul(r.nodeValue, t, 0 != (1 & e.mode));
                }
              a && (n.flags |= 4);
            } else
              ((r = (9 === t.nodeType ? t : t.ownerDocument).createTextNode(r))[
                xl
              ] = n),
                (n.stateNode = r);
          }
          return Pi(n), null;
        case 13:
          if (
            (Ml(ho),
            (r = n.memoizedState),
            qa && null !== Wa && 0 != (1 & n.mode) && 0 == (128 & n.flags))
          ) {
            for (r = Wa; r; ) r = bl(r.nextSibling);
            return Xa(), (n.flags |= 98560), n;
          }
          if (null !== r && null !== r.dehydrated) {
            if (((r = Ya(n)), null === e)) {
              if (!r) throw Error(y(318));
              if (!(r = null !== (r = n.memoizedState) ? r.dehydrated : null))
                throw Error(y(317));
              r[xl] = n;
            } else
              Xa(),
                0 == (128 & n.flags) && (n.memoizedState = null),
                (n.flags |= 4);
            return Pi(n), null;
          }
          return (
            null !== $a && (ms($a), ($a = null)),
            0 != (128 & n.flags)
              ? ((n.lanes = t), n)
              : ((r = null !== r),
                (t = !1),
                null === e ? Ya(n) : (t = null !== e.memoizedState),
                r !== t &&
                  r &&
                  ((n.child.flags |= 8192),
                  0 != (1 & n.mode) &&
                    (null === e || 0 != (1 & ho.current)
                      ? 0 === Wu && (Wu = 3)
                      : _s())),
                null !== n.updateQueue && (n.flags |= 4),
                Pi(n),
                null)
          );
        case 4:
          return co(), null === e && Jr(n.stateNode.containerInfo), Pi(n), null;
        case 10:
          return oa(n.type._context), Pi(n), null;
        case 19:
          if ((Ml(ho), null === (a = n.memoizedState))) return Pi(n), null;
          if (((r = 0 != (128 & n.flags)), null === (o = a.rendering)))
            if (r) Ci(a, !1);
            else {
              if (0 !== Wu || (null !== e && 0 != (128 & e.flags)))
                for (e = n.child; null !== e; ) {
                  if (null !== (o = mo(e))) {
                    for (
                      n.flags |= 128,
                        Ci(a, !1),
                        null !== (r = o.updateQueue) &&
                          ((n.updateQueue = r), (n.flags |= 4)),
                        n.subtreeFlags = 0,
                        r = t,
                        t = n.child;
                      null !== t;

                    )
                      (e = r),
                        ((a = t).flags &= 14680066),
                        null === (o = a.alternate)
                          ? ((a.childLanes = 0),
                            (a.lanes = e),
                            (a.child = null),
                            (a.subtreeFlags = 0),
                            (a.memoizedProps = null),
                            (a.memoizedState = null),
                            (a.updateQueue = null),
                            (a.dependencies = null),
                            (a.stateNode = null))
                          : ((a.childLanes = o.childLanes),
                            (a.lanes = o.lanes),
                            (a.child = o.child),
                            (a.subtreeFlags = 0),
                            (a.deletions = null),
                            (a.memoizedProps = o.memoizedProps),
                            (a.memoizedState = o.memoizedState),
                            (a.updateQueue = o.updateQueue),
                            (a.type = o.type),
                            (e = o.dependencies),
                            (a.dependencies =
                              null === e
                                ? null
                                : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext,
                                  })),
                        (t = t.sibling);
                    return Ol(ho, (1 & ho.current) | 2), n.child;
                  }
                  e = e.sibling;
                }
              null !== a.tail &&
                fn() > Yu &&
                ((n.flags |= 128), (r = !0), Ci(a, !1), (n.lanes = 4194304));
            }
          else {
            if (!r)
              if (null !== (e = mo(o))) {
                if (
                  ((n.flags |= 128),
                  (r = !0),
                  null !== (t = e.updateQueue) &&
                    ((n.updateQueue = t), (n.flags |= 4)),
                  Ci(a, !0),
                  null === a.tail &&
                    "hidden" === a.tailMode &&
                    !o.alternate &&
                    !qa)
                )
                  return Pi(n), null;
              } else
                2 * fn() - a.renderingStartTime > Yu &&
                  1073741824 !== t &&
                  ((n.flags |= 128), (r = !0), Ci(a, !1), (n.lanes = 4194304));
            a.isBackwards
              ? ((o.sibling = n.child), (n.child = o))
              : (null !== (t = a.last) ? (t.sibling = o) : (n.child = o),
                (a.last = o));
          }
          return null !== a.tail
            ? ((n = a.tail),
              (a.rendering = n),
              (a.tail = n.sibling),
              (a.renderingStartTime = fn()),
              (n.sibling = null),
              (t = ho.current),
              Ol(ho, r ? (1 & t) | 2 : 1 & t),
              n)
            : (Pi(n), null);
        case 22:
        case 23:
          return (
            ws(),
            (r = null !== n.memoizedState),
            null !== e && (null !== e.memoizedState) !== r && (n.flags |= 8192),
            r && 0 != (1 & n.mode)
              ? 0 != (1073741824 & Uu) &&
                (Pi(n), 6 & n.subtreeFlags && (n.flags |= 8192))
              : Pi(n),
            null
          );
        case 24:
        case 25:
          return null;
      }
      throw Error(y(156, n.tag));
    }
    (yi = function (e, n) {
      for (var t = n.child; null !== t; ) {
        if (5 === t.tag || 6 === t.tag) e.appendChild(t.stateNode);
        else if (4 !== t.tag && null !== t.child) {
          (t.child.return = t), (t = t.child);
          continue;
        }
        if (t === n) break;
        for (; null === t.sibling; ) {
          if (null === t.return || t.return === n) return;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }),
      (bi = function (e, n, t, r) {
        var l = e.memoizedProps;
        if (l !== r) {
          (e = n.stateNode), uo(ao.current);
          var a,
            o = null;
          switch (t) {
            case "input":
              (l = ue(e, l)), (r = ue(e, r)), (o = []);
              break;
            case "select":
              (l = X({}, l, { value: void 0 })),
                (r = X({}, r, { value: void 0 })),
                (o = []);
              break;
            case "textarea":
              (l = ge(e, l)), (r = ge(e, r)), (o = []);
              break;
            default:
              "function" != typeof l.onClick &&
                "function" == typeof r.onClick &&
                (e.onclick = sl);
          }
          for (s in (Le(t, r), (t = null), l))
            if (!r.hasOwnProperty(s) && l.hasOwnProperty(s) && null != l[s])
              if ("style" === s) {
                var i = l[s];
                for (a in i)
                  i.hasOwnProperty(a) && (t || (t = {}), (t[a] = ""));
              } else
                "dangerouslySetInnerHTML" !== s &&
                  "children" !== s &&
                  "suppressContentEditableWarning" !== s &&
                  "suppressHydrationWarning" !== s &&
                  "autoFocus" !== s &&
                  (w.hasOwnProperty(s)
                    ? o || (o = [])
                    : (o = o || []).push(s, null));
          for (s in r) {
            var u = r[s];
            if (
              ((i = null != l ? l[s] : void 0),
              r.hasOwnProperty(s) && u !== i && (null != u || null != i))
            )
              if ("style" === s)
                if (i) {
                  for (a in i)
                    !i.hasOwnProperty(a) ||
                      (u && u.hasOwnProperty(a)) ||
                      (t || (t = {}), (t[a] = ""));
                  for (a in u)
                    u.hasOwnProperty(a) &&
                      i[a] !== u[a] &&
                      (t || (t = {}), (t[a] = u[a]));
                } else t || (o || (o = []), o.push(s, t)), (t = u);
              else
                "dangerouslySetInnerHTML" === s
                  ? ((u = u ? u.__html : void 0),
                    (i = i ? i.__html : void 0),
                    null != u && i !== u && (o = o || []).push(s, u))
                  : "children" === s
                  ? ("string" != typeof u && "number" != typeof u) ||
                    (o = o || []).push(s, "" + u)
                  : "suppressContentEditableWarning" !== s &&
                    "suppressHydrationWarning" !== s &&
                    (w.hasOwnProperty(s)
                      ? (null != u && "onScroll" === s && Yr("scroll", e),
                        o || i === u || (o = []))
                      : (o = o || []).push(s, u));
          }
          t && (o = o || []).push("style", t);
          var s = o;
          (n.updateQueue = s) && (n.flags |= 4);
        }
      }),
      (wi = function (e, n, t, r) {
        t !== r && (n.flags |= 4);
      });
    var ji = F.ReactCurrentOwner,
      Li = !1;
    function Ti(e, n, t, r) {
      n.child = null === e ? ro(n, null, t, r) : to(n, e.child, t, r);
    }
    function Fi(e, n, t, r, l) {
      t = t.render;
      var a = n.ref;
      return (
        ua(n, l),
        (r = jo(e, n, t, r, a, l)),
        (t = Lo()),
        null === e || Li
          ? (qa && t && Da(n), (n.flags |= 1), Ti(e, n, r, l), n.child)
          : ((n.updateQueue = e.updateQueue),
            (n.flags &= -2053),
            (e.lanes &= ~l),
            eu(e, n, l))
      );
    }
    function Ri(e, n, t, r, l) {
      if (null === e) {
        var a = t.type;
        return "function" != typeof a ||
          Ws(a) ||
          void 0 !== a.defaultProps ||
          null !== t.compare ||
          void 0 !== t.defaultProps
          ? (((e = $s(t.type, null, r, n, n.mode, l)).ref = n.ref),
            (e.return = n),
            (n.child = e))
          : ((n.tag = 15), (n.type = a), Mi(e, n, a, r, l));
      }
      if (((a = e.child), 0 == (e.lanes & l))) {
        var o = a.memoizedProps;
        if ((t = null !== (t = t.compare) ? t : yr)(o, r) && e.ref === n.ref)
          return eu(e, n, l);
      }
      return (
        (n.flags |= 1),
        ((e = qs(a, r)).ref = n.ref),
        (e.return = n),
        (n.child = e)
      );
    }
    function Mi(e, n, t, r, l) {
      if (null !== e) {
        var a = e.memoizedProps;
        if (yr(a, r) && e.ref === n.ref) {
          if (((Li = !1), (n.pendingProps = r = a), 0 == (e.lanes & l)))
            return (n.lanes = e.lanes), eu(e, n, l);
          0 != (131072 & e.flags) && (Li = !0);
        }
      }
      return Di(e, n, t, r, l);
    }
    function Oi(e, n, t) {
      var r = n.pendingProps,
        l = r.children,
        a = null !== e ? e.memoizedState : null;
      if ("hidden" === r.mode)
        if (0 == (1 & n.mode))
          (n.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null,
          }),
            Ol(Au, Uu),
            (Uu |= t);
        else {
          if (0 == (1073741824 & t))
            return (
              (e = null !== a ? a.baseLanes | t : t),
              (n.lanes = n.childLanes = 1073741824),
              (n.memoizedState = {
                baseLanes: e,
                cachePool: null,
                transitions: null,
              }),
              (n.updateQueue = null),
              Ol(Au, Uu),
              (Uu |= e),
              null
            );
          (n.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null,
          }),
            (r = null !== a ? a.baseLanes : t),
            Ol(Au, Uu),
            (Uu |= r);
        }
      else
        null !== a
          ? ((r = a.baseLanes | t), (n.memoizedState = null))
          : (r = t),
          Ol(Au, Uu),
          (Uu |= r);
      return Ti(e, n, l, t), n.child;
    }
    function Ii(e, n) {
      var t = n.ref;
      ((null === e && null !== t) || (null !== e && e.ref !== t)) &&
        ((n.flags |= 512), (n.flags |= 2097152));
    }
    function Di(e, n, t, r, l) {
      var a = ql(t) ? Al : Dl.current;
      return (
        (a = Wl(n, a)),
        ua(n, l),
        (t = jo(e, n, t, r, a, l)),
        (r = Lo()),
        null === e || Li
          ? (qa && r && Da(n), (n.flags |= 1), Ti(e, n, t, l), n.child)
          : ((n.updateQueue = e.updateQueue),
            (n.flags &= -2053),
            (e.lanes &= ~l),
            eu(e, n, l))
      );
    }
    function Ui(e, n, t, r, l) {
      if (ql(t)) {
        var a = !0;
        Bl(n);
      } else a = !1;
      if ((ua(n, l), null === n.stateNode))
        null !== e &&
          ((e.alternate = null), (n.alternate = null), (n.flags |= 2)),
          _a(n, t, r),
          Na(n, t, r, l),
          (r = !0);
      else if (null === e) {
        var o = n.stateNode,
          i = n.memoizedProps;
        o.props = i;
        var u = o.context,
          s = t.contextType;
        "object" == typeof s && null !== s
          ? (s = sa(s))
          : (s = Wl(n, (s = ql(t) ? Al : Dl.current)));
        var c = t.getDerivedStateFromProps,
          f =
            "function" == typeof c ||
            "function" == typeof o.getSnapshotBeforeUpdate;
        f ||
          ("function" != typeof o.UNSAFE_componentWillReceiveProps &&
            "function" != typeof o.componentWillReceiveProps) ||
          ((i !== r || u !== s) && Ea(n, o, r, s)),
          (fa = !1);
        var d = n.memoizedState;
        (o.state = d),
          ya(n, r, o, l),
          (u = n.memoizedState),
          i !== r || d !== u || Ul.current || fa
            ? ("function" == typeof c &&
                (ka(n, t, c, r), (u = n.memoizedState)),
              (i = fa || Sa(n, t, i, r, d, u, s))
                ? (f ||
                    ("function" != typeof o.UNSAFE_componentWillMount &&
                      "function" != typeof o.componentWillMount) ||
                    ("function" == typeof o.componentWillMount &&
                      o.componentWillMount(),
                    "function" == typeof o.UNSAFE_componentWillMount &&
                      o.UNSAFE_componentWillMount()),
                  "function" == typeof o.componentDidMount &&
                    (n.flags |= 4194308))
                : ("function" == typeof o.componentDidMount &&
                    (n.flags |= 4194308),
                  (n.memoizedProps = r),
                  (n.memoizedState = u)),
              (o.props = r),
              (o.state = u),
              (o.context = s),
              (r = i))
            : ("function" == typeof o.componentDidMount && (n.flags |= 4194308),
              (r = !1));
      } else {
        (o = n.stateNode),
          pa(e, n),
          (i = n.memoizedProps),
          (s = n.type === n.elementType ? i : ea(n.type, i)),
          (o.props = s),
          (f = n.pendingProps),
          (d = o.context),
          "object" == typeof (u = t.contextType) && null !== u
            ? (u = sa(u))
            : (u = Wl(n, (u = ql(t) ? Al : Dl.current)));
        var p = t.getDerivedStateFromProps;
        (c =
          "function" == typeof p ||
          "function" == typeof o.getSnapshotBeforeUpdate) ||
          ("function" != typeof o.UNSAFE_componentWillReceiveProps &&
            "function" != typeof o.componentWillReceiveProps) ||
          ((i !== f || d !== u) && Ea(n, o, r, u)),
          (fa = !1),
          (d = n.memoizedState),
          (o.state = d),
          ya(n, r, o, l);
        var h = n.memoizedState;
        i !== f || d !== h || Ul.current || fa
          ? ("function" == typeof p && (ka(n, t, p, r), (h = n.memoizedState)),
            (s = fa || Sa(n, t, s, r, d, h, u) || !1)
              ? (c ||
                  ("function" != typeof o.UNSAFE_componentWillUpdate &&
                    "function" != typeof o.componentWillUpdate) ||
                  ("function" == typeof o.componentWillUpdate &&
                    o.componentWillUpdate(r, h, u),
                  "function" == typeof o.UNSAFE_componentWillUpdate &&
                    o.UNSAFE_componentWillUpdate(r, h, u)),
                "function" == typeof o.componentDidUpdate && (n.flags |= 4),
                "function" == typeof o.getSnapshotBeforeUpdate &&
                  (n.flags |= 1024))
              : ("function" != typeof o.componentDidUpdate ||
                  (i === e.memoizedProps && d === e.memoizedState) ||
                  (n.flags |= 4),
                "function" != typeof o.getSnapshotBeforeUpdate ||
                  (i === e.memoizedProps && d === e.memoizedState) ||
                  (n.flags |= 1024),
                (n.memoizedProps = r),
                (n.memoizedState = h)),
            (o.props = r),
            (o.state = h),
            (o.context = u),
            (r = s))
          : ("function" != typeof o.componentDidUpdate ||
              (i === e.memoizedProps && d === e.memoizedState) ||
              (n.flags |= 4),
            "function" != typeof o.getSnapshotBeforeUpdate ||
              (i === e.memoizedProps && d === e.memoizedState) ||
              (n.flags |= 1024),
            (r = !1));
      }
      return Ai(e, n, t, r, a, l);
    }
    function Ai(e, n, t, r, l, a) {
      Ii(e, n);
      var o = 0 != (128 & n.flags);
      if (!r && !o) return l && Ql(n, t, !1), eu(e, n, a);
      (r = n.stateNode), (ji.current = n);
      var i =
        o && "function" != typeof t.getDerivedStateFromError
          ? null
          : r.render();
      return (
        (n.flags |= 1),
        null !== e && o
          ? ((n.child = to(n, e.child, null, a)), (n.child = to(n, null, i, a)))
          : Ti(e, n, i, a),
        (n.memoizedState = r.state),
        l && Ql(n, t, !0),
        n.child
      );
    }
    function Wi(e) {
      var n = e.stateNode;
      n.pendingContext
        ? Hl(0, n.pendingContext, n.pendingContext !== n.context)
        : n.context && Hl(0, n.context, !1),
        so(e, n.containerInfo);
    }
    function qi(e, n, t, r, l) {
      return Xa(), Ga(l), (n.flags |= 256), Ti(e, n, t, r), n.child;
    }
    var $i = { dehydrated: null, treeContext: null, retryLane: 0 };
    function Hi(e) {
      return { baseLanes: e, cachePool: null, transitions: null };
    }
    function Vi(e, n) {
      return {
        baseLanes: e.baseLanes | n,
        cachePool: null,
        transitions: e.transitions,
      };
    }
    function Bi(e, n, t) {
      var r,
        l = n.pendingProps,
        a = ho.current,
        o = !1,
        i = 0 != (128 & n.flags);
      if (
        ((r = i) ||
          (r = (null === e || null !== e.memoizedState) && 0 != (2 & a)),
        r
          ? ((o = !0), (n.flags &= -129))
          : (null !== e && null === e.memoizedState) || (a |= 1),
        Ol(ho, 1 & a),
        null === e)
      )
        return (
          Qa(n),
          null !== (e = n.memoizedState) && null !== (e = e.dehydrated)
            ? (0 == (1 & n.mode)
                ? (n.lanes = 1)
                : "$!" === e.data
                ? (n.lanes = 8)
                : (n.lanes = 1073741824),
              null)
            : ((a = l.children),
              (e = l.fallback),
              o
                ? ((l = n.mode),
                  (o = n.child),
                  (a = { mode: "hidden", children: a }),
                  0 == (1 & l) && null !== o
                    ? ((o.childLanes = 0), (o.pendingProps = a))
                    : (o = Vs(a, l, 0, null)),
                  (e = Hs(e, l, t, null)),
                  (o.return = n),
                  (e.return = n),
                  (o.sibling = e),
                  (n.child = o),
                  (n.child.memoizedState = Hi(t)),
                  (n.memoizedState = $i),
                  e)
                : Qi(n, a))
        );
      if (null !== (a = e.memoizedState)) {
        if (null !== (r = a.dehydrated)) {
          if (i)
            return 256 & n.flags
              ? ((n.flags &= -257), Xi(e, n, t, Error(y(422))))
              : null !== n.memoizedState
              ? ((n.child = e.child), (n.flags |= 128), null)
              : ((o = l.fallback),
                (a = n.mode),
                (l = Vs({ mode: "visible", children: l.children }, a, 0, null)),
                ((o = Hs(o, a, t, null)).flags |= 2),
                (l.return = n),
                (o.return = n),
                (l.sibling = o),
                (n.child = l),
                0 != (1 & n.mode) && to(n, e.child, null, t),
                (n.child.memoizedState = Hi(t)),
                (n.memoizedState = $i),
                o);
          if (0 == (1 & n.mode)) n = Xi(e, n, t, null);
          else if ("$!" === r.data) n = Xi(e, n, t, Error(y(419)));
          else if (((l = 0 != (t & e.childLanes)), Li || l)) {
            if (null !== (l = Ou)) {
              switch (t & -t) {
                case 4:
                  o = 2;
                  break;
                case 16:
                  o = 8;
                  break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                  o = 32;
                  break;
                case 536870912:
                  o = 268435456;
                  break;
                default:
                  o = 0;
              }
              0 !== (l = 0 != (o & (l.suspendedLanes | t)) ? 0 : o) &&
                l !== a.retryLane &&
                ((a.retryLane = l), ss(e, l, -1));
            }
            _s(), (n = Xi(e, n, t, Error(y(421))));
          } else
            "$?" === r.data
              ? ((n.flags |= 128),
                (n.child = e.child),
                (n = Os.bind(null, e)),
                (r._reactRetry = n),
                (n = null))
              : ((t = a.treeContext),
                (Wa = bl(r.nextSibling)),
                (Aa = n),
                (qa = !0),
                ($a = null),
                null !== t &&
                  ((La[Ta++] = Ra),
                  (La[Ta++] = Ma),
                  (La[Ta++] = Fa),
                  (Ra = t.id),
                  (Ma = t.overflow),
                  (Fa = n)),
                ((n = Qi(n, n.pendingProps.children)).flags |= 4096));
          return n;
        }
        return o
          ? ((l = Yi(e, n, l.children, l.fallback, t)),
            (o = n.child),
            (a = e.child.memoizedState),
            (o.memoizedState = null === a ? Hi(t) : Vi(a, t)),
            (o.childLanes = e.childLanes & ~t),
            (n.memoizedState = $i),
            l)
          : ((t = Ki(e, n, l.children, t)), (n.memoizedState = null), t);
      }
      return o
        ? ((l = Yi(e, n, l.children, l.fallback, t)),
          (o = n.child),
          (a = e.child.memoizedState),
          (o.memoizedState = null === a ? Hi(t) : Vi(a, t)),
          (o.childLanes = e.childLanes & ~t),
          (n.memoizedState = $i),
          l)
        : ((t = Ki(e, n, l.children, t)), (n.memoizedState = null), t);
    }
    function Qi(e, n) {
      return (
        ((n = Vs({ mode: "visible", children: n }, e.mode, 0, null)).return =
          e),
        (e.child = n)
      );
    }
    function Ki(e, n, t, r) {
      var l = e.child;
      return (
        (e = l.sibling),
        (t = qs(l, { mode: "visible", children: t })),
        0 == (1 & n.mode) && (t.lanes = r),
        (t.return = n),
        (t.sibling = null),
        null !== e &&
          (null === (r = n.deletions)
            ? ((n.deletions = [e]), (n.flags |= 16))
            : r.push(e)),
        (n.child = t)
      );
    }
    function Yi(e, n, t, r, l) {
      var a = n.mode,
        o = (e = e.child).sibling,
        i = { mode: "hidden", children: t };
      return (
        0 == (1 & a) && n.child !== e
          ? (((t = n.child).childLanes = 0),
            (t.pendingProps = i),
            (n.deletions = null))
          : ((t = qs(e, i)).subtreeFlags = 14680064 & e.subtreeFlags),
        null !== o ? (r = qs(o, r)) : ((r = Hs(r, a, l, null)).flags |= 2),
        (r.return = n),
        (t.return = n),
        (t.sibling = r),
        (n.child = t),
        r
      );
    }
    function Xi(e, n, t, r) {
      return (
        null !== r && Ga(r),
        to(n, e.child, null, t),
        ((e = Qi(n, n.pendingProps.children)).flags |= 2),
        (n.memoizedState = null),
        e
      );
    }
    function Gi(e, n, t) {
      e.lanes |= n;
      var r = e.alternate;
      null !== r && (r.lanes |= n), ia(e.return, n, t);
    }
    function Ji(e, n, t, r, l) {
      var a = e.memoizedState;
      null === a
        ? (e.memoizedState = {
            isBackwards: n,
            rendering: null,
            renderingStartTime: 0,
            last: r,
            tail: t,
            tailMode: l,
          })
        : ((a.isBackwards = n),
          (a.rendering = null),
          (a.renderingStartTime = 0),
          (a.last = r),
          (a.tail = t),
          (a.tailMode = l));
    }
    function Zi(e, n, t) {
      var r = n.pendingProps,
        l = r.revealOrder,
        a = r.tail;
      if ((Ti(e, n, r.children, t), 0 != (2 & (r = ho.current))))
        (r = (1 & r) | 2), (n.flags |= 128);
      else {
        if (null !== e && 0 != (128 & e.flags))
          e: for (e = n.child; null !== e; ) {
            if (13 === e.tag) null !== e.memoizedState && Gi(e, t, n);
            else if (19 === e.tag) Gi(e, t, n);
            else if (null !== e.child) {
              (e.child.return = e), (e = e.child);
              continue;
            }
            if (e === n) break e;
            for (; null === e.sibling; ) {
              if (null === e.return || e.return === n) break e;
              e = e.return;
            }
            (e.sibling.return = e.return), (e = e.sibling);
          }
        r &= 1;
      }
      if ((Ol(ho, r), 0 == (1 & n.mode))) n.memoizedState = null;
      else
        switch (l) {
          case "forwards":
            for (t = n.child, l = null; null !== t; )
              null !== (e = t.alternate) && null === mo(e) && (l = t),
                (t = t.sibling);
            null === (t = l)
              ? ((l = n.child), (n.child = null))
              : ((l = t.sibling), (t.sibling = null)),
              Ji(n, !1, l, t, a);
            break;
          case "backwards":
            for (t = null, l = n.child, n.child = null; null !== l; ) {
              if (null !== (e = l.alternate) && null === mo(e)) {
                n.child = l;
                break;
              }
              (e = l.sibling), (l.sibling = t), (t = l), (l = e);
            }
            Ji(n, !0, t, null, a);
            break;
          case "together":
            Ji(n, !1, null, null, void 0);
            break;
          default:
            n.memoizedState = null;
        }
      return n.child;
    }
    function eu(e, n, t) {
      if (
        (null !== e && (n.dependencies = e.dependencies),
        ($u |= n.lanes),
        0 == (t & n.childLanes))
      )
        return null;
      if (null !== e && n.child !== e.child) throw Error(y(153));
      if (null !== n.child) {
        for (
          t = qs((e = n.child), e.pendingProps), n.child = t, t.return = n;
          null !== e.sibling;

        )
          (e = e.sibling), ((t = t.sibling = qs(e, e.pendingProps)).return = n);
        t.sibling = null;
      }
      return n.child;
    }
    function nu(e, n) {
      switch ((Ua(n), n.tag)) {
        case 1:
          return (
            ql(n.type) && $l(),
            65536 & (e = n.flags) ? ((n.flags = (-65537 & e) | 128), n) : null
          );
        case 3:
          return (
            co(),
            Ml(Ul),
            Ml(Dl),
            vo(),
            0 != (65536 & (e = n.flags)) && 0 == (128 & e)
              ? ((n.flags = (-65537 & e) | 128), n)
              : null
          );
        case 5:
          return po(n), null;
        case 13:
          if (
            (Ml(ho), null !== (e = n.memoizedState) && null !== e.dehydrated)
          ) {
            if (null === n.alternate) throw Error(y(340));
            Xa();
          }
          return 65536 & (e = n.flags)
            ? ((n.flags = (-65537 & e) | 128), n)
            : null;
        case 19:
          return Ml(ho), null;
        case 4:
          return co(), null;
        case 10:
          return oa(n.type._context), null;
        case 22:
        case 23:
          return ws(), null;
        default:
          return null;
      }
    }
    var tu = !1,
      ru = !1,
      lu = "function" == typeof WeakSet ? WeakSet : Set,
      au = null;
    function ou(e, n) {
      var t = e.ref;
      if (null !== t)
        if ("function" == typeof t)
          try {
            t(null);
          } catch (t) {
            Fs(e, n, t);
          }
        else t.current = null;
    }
    function iu(e, n, t) {
      try {
        t();
      } catch (t) {
        Fs(e, n, t);
      }
    }
    var uu = !1;
    function su(e, n, t) {
      var r = n.updateQueue;
      if (null !== (r = null !== r ? r.lastEffect : null)) {
        var l = (r = r.next);
        do {
          if ((l.tag & e) === e) {
            var a = l.destroy;
            (l.destroy = void 0), void 0 !== a && iu(n, t, a);
          }
          l = l.next;
        } while (l !== r);
      }
    }
    function cu(e, n) {
      if (null !== (n = null !== (n = n.updateQueue) ? n.lastEffect : null)) {
        var t = (n = n.next);
        do {
          if ((t.tag & e) === e) {
            var r = t.create;
            t.destroy = r();
          }
          t = t.next;
        } while (t !== n);
      }
    }
    function fu(e) {
      var n = e.ref;
      if (null !== n) {
        var t = e.stateNode;
        e.tag, (e = t), "function" == typeof n ? n(e) : (n.current = e);
      }
    }
    function du(e) {
      var n = e.alternate;
      null !== n && ((e.alternate = null), du(n)),
        (e.child = null),
        (e.deletions = null),
        (e.sibling = null),
        5 === e.tag &&
          null !== (n = e.stateNode) &&
          (delete n[xl],
          delete n[Sl],
          delete n[El],
          delete n[Nl],
          delete n[Cl]),
        (e.stateNode = null),
        (e.return = null),
        (e.dependencies = null),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.pendingProps = null),
        (e.stateNode = null),
        (e.updateQueue = null);
    }
    function pu(e) {
      return 5 === e.tag || 3 === e.tag || 4 === e.tag;
    }
    function hu(e) {
      e: for (;;) {
        for (; null === e.sibling; ) {
          if (null === e.return || pu(e.return)) return null;
          e = e.return;
        }
        for (
          e.sibling.return = e.return, e = e.sibling;
          5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

        ) {
          if (2 & e.flags) continue e;
          if (null === e.child || 4 === e.tag) continue e;
          (e.child.return = e), (e = e.child);
        }
        if (!(2 & e.flags)) return e.stateNode;
      }
    }
    function mu(e, n, t) {
      var r = e.tag;
      if (5 === r || 6 === r)
        (e = e.stateNode),
          n
            ? 8 === t.nodeType
              ? t.parentNode.insertBefore(e, n)
              : t.insertBefore(e, n)
            : (8 === t.nodeType
                ? (n = t.parentNode).insertBefore(e, t)
                : (n = t).appendChild(e),
              null != (t = t._reactRootContainer) ||
                null !== n.onclick ||
                (n.onclick = sl));
      else if (4 !== r && null !== (e = e.child))
        for (mu(e, n, t), e = e.sibling; null !== e; )
          mu(e, n, t), (e = e.sibling);
    }
    function gu(e, n, t) {
      var r = e.tag;
      if (5 === r || 6 === r)
        (e = e.stateNode), n ? t.insertBefore(e, n) : t.appendChild(e);
      else if (4 !== r && null !== (e = e.child))
        for (gu(e, n, t), e = e.sibling; null !== e; )
          gu(e, n, t), (e = e.sibling);
    }
    var vu = null,
      yu = !1;
    function bu(e, n, t) {
      for (t = t.child; null !== t; ) wu(e, n, t), (t = t.sibling);
    }
    function wu(e, n, t) {
      if (bn && "function" == typeof bn.onCommitFiberUnmount)
        try {
          bn.onCommitFiberUnmount(yn, t);
        } catch (e) {}
      switch (t.tag) {
        case 5:
          ru || ou(t, n);
        case 6:
          var r = vu,
            l = yu;
          (vu = null),
            bu(e, n, t),
            (yu = l),
            null !== (vu = r) &&
              (yu
                ? ((e = vu),
                  (t = t.stateNode),
                  8 === e.nodeType
                    ? e.parentNode.removeChild(t)
                    : e.removeChild(t))
                : vu.removeChild(t.stateNode));
          break;
        case 18:
          null !== vu &&
            (yu
              ? ((e = vu),
                (t = t.stateNode),
                8 === e.nodeType
                  ? yl(e.parentNode, t)
                  : 1 === e.nodeType && yl(e, t),
                tt(e))
              : yl(vu, t.stateNode));
          break;
        case 4:
          (r = vu),
            (l = yu),
            (vu = t.stateNode.containerInfo),
            (yu = !0),
            bu(e, n, t),
            (vu = r),
            (yu = l);
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          if (
            !ru &&
            null !== (r = t.updateQueue) &&
            null !== (r = r.lastEffect)
          ) {
            l = r = r.next;
            do {
              var a = l,
                o = a.destroy;
              (a = a.tag),
                void 0 !== o && (0 != (2 & a) || 0 != (4 & a)) && iu(t, n, o),
                (l = l.next);
            } while (l !== r);
          }
          bu(e, n, t);
          break;
        case 1:
          if (
            !ru &&
            (ou(t, n),
            "function" == typeof (r = t.stateNode).componentWillUnmount)
          )
            try {
              (r.props = t.memoizedProps),
                (r.state = t.memoizedState),
                r.componentWillUnmount();
            } catch (e) {
              Fs(t, n, e);
            }
          bu(e, n, t);
          break;
        case 21:
          bu(e, n, t);
          break;
        case 22:
          1 & t.mode
            ? ((ru = (r = ru) || null !== t.memoizedState),
              bu(e, n, t),
              (ru = r))
            : bu(e, n, t);
          break;
        default:
          bu(e, n, t);
      }
    }
    function ku(e) {
      var n = e.updateQueue;
      if (null !== n) {
        e.updateQueue = null;
        var t = e.stateNode;
        null === t && (t = e.stateNode = new lu()),
          n.forEach(function (n) {
            var r = Is.bind(null, e, n);
            t.has(n) || (t.add(n), n.then(r, r));
          });
      }
    }
    function xu(e, n) {
      var t = n.deletions;
      if (null !== t)
        for (var r = 0; r < t.length; r++) {
          var l = t[r];
          try {
            var a = e,
              o = n,
              i = o;
            e: for (; null !== i; ) {
              switch (i.tag) {
                case 5:
                  (vu = i.stateNode), (yu = !1);
                  break e;
                case 3:
                case 4:
                  (vu = i.stateNode.containerInfo), (yu = !0);
                  break e;
              }
              i = i.return;
            }
            if (null === vu) throw Error(y(160));
            wu(a, o, l), (vu = null), (yu = !1);
            var u = l.alternate;
            null !== u && (u.return = null), (l.return = null);
          } catch (e) {
            Fs(l, n, e);
          }
        }
      if (12854 & n.subtreeFlags)
        for (n = n.child; null !== n; ) Su(n, e), (n = n.sibling);
    }
    function Su(e, n) {
      var t = e.alternate,
        r = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          if ((xu(n, e), _u(e), 4 & r)) {
            try {
              su(3, e, e.return), cu(3, e);
            } catch (n) {
              Fs(e, e.return, n);
            }
            try {
              su(5, e, e.return);
            } catch (n) {
              Fs(e, e.return, n);
            }
          }
          break;
        case 1:
          xu(n, e), _u(e), 512 & r && null !== t && ou(t, t.return);
          break;
        case 5:
          if (
            (xu(n, e),
            _u(e),
            512 & r && null !== t && ou(t, t.return),
            32 & e.flags)
          ) {
            var l = e.stateNode;
            try {
              Ee(l, "");
            } catch (n) {
              Fs(e, e.return, n);
            }
          }
          if (4 & r && null != (l = e.stateNode)) {
            var a = e.memoizedProps,
              o = null !== t ? t.memoizedProps : a,
              i = e.type,
              u = e.updateQueue;
            if (((e.updateQueue = null), null !== u))
              try {
                "input" === i &&
                  "radio" === a.type &&
                  null != a.name &&
                  ce(l, a),
                  Te(i, o);
                var s = Te(i, a);
                for (o = 0; o < u.length; o += 2) {
                  var c = u[o],
                    f = u[o + 1];
                  "style" === c
                    ? ze(l, f)
                    : "dangerouslySetInnerHTML" === c
                    ? _e(l, f)
                    : "children" === c
                    ? Ee(l, f)
                    : T(l, c, f, s);
                }
                switch (i) {
                  case "input":
                    fe(l, a);
                    break;
                  case "textarea":
                    ye(l, a);
                    break;
                  case "select":
                    var d = l._wrapperState.wasMultiple;
                    l._wrapperState.wasMultiple = !!a.multiple;
                    var p = a.value;
                    null != p
                      ? me(l, !!a.multiple, p, !1)
                      : d !== !!a.multiple &&
                        (null != a.defaultValue
                          ? me(l, !!a.multiple, a.defaultValue, !0)
                          : me(l, !!a.multiple, a.multiple ? [] : "", !1));
                }
                l[Sl] = a;
              } catch (n) {
                Fs(e, e.return, n);
              }
          }
          break;
        case 6:
          if ((xu(n, e), _u(e), 4 & r)) {
            if (null === e.stateNode) throw Error(y(162));
            (s = e.stateNode), (c = e.memoizedProps);
            try {
              s.nodeValue = c;
            } catch (n) {
              Fs(e, e.return, n);
            }
          }
          break;
        case 3:
          if (
            (xu(n, e),
            _u(e),
            4 & r && null !== t && t.memoizedState.isDehydrated)
          )
            try {
              tt(n.containerInfo);
            } catch (n) {
              Fs(e, e.return, n);
            }
          break;
        case 4:
        default:
          xu(n, e), _u(e);
          break;
        case 13:
          xu(n, e),
            _u(e),
            8192 & (s = e.child).flags &&
              null !== s.memoizedState &&
              (null === s.alternate || null === s.alternate.memoizedState) &&
              (Ku = fn()),
            4 & r && ku(e);
          break;
        case 22:
          if (
            ((s = null !== t && null !== t.memoizedState),
            1 & e.mode ? ((ru = (c = ru) || s), xu(n, e), (ru = c)) : xu(n, e),
            _u(e),
            8192 & r)
          ) {
            c = null !== e.memoizedState;
            e: for (f = null, d = e; ; ) {
              if (5 === d.tag) {
                if (null === f) {
                  f = d;
                  try {
                    (l = d.stateNode),
                      c
                        ? "function" == typeof (a = l.style).setProperty
                          ? a.setProperty("display", "none", "important")
                          : (a.display = "none")
                        : ((i = d.stateNode),
                          (o =
                            null != (u = d.memoizedProps.style) &&
                            u.hasOwnProperty("display")
                              ? u.display
                              : null),
                          (i.style.display = Pe("display", o)));
                  } catch (n) {
                    Fs(e, e.return, n);
                  }
                }
              } else if (6 === d.tag) {
                if (null === f)
                  try {
                    d.stateNode.nodeValue = c ? "" : d.memoizedProps;
                  } catch (n) {
                    Fs(e, e.return, n);
                  }
              } else if (
                ((22 !== d.tag && 23 !== d.tag) ||
                  null === d.memoizedState ||
                  d === e) &&
                null !== d.child
              ) {
                (d.child.return = d), (d = d.child);
                continue;
              }
              if (d === e) break e;
              for (; null === d.sibling; ) {
                if (null === d.return || d.return === e) break e;
                f === d && (f = null), (d = d.return);
              }
              f === d && (f = null),
                (d.sibling.return = d.return),
                (d = d.sibling);
            }
            if (c && !s && 0 != (1 & e.mode))
              for (au = e, e = e.child; null !== e; ) {
                for (s = au = e; null !== au; ) {
                  switch (((f = (c = au).child), c.tag)) {
                    case 0:
                    case 11:
                    case 14:
                    case 15:
                      su(4, c, c.return);
                      break;
                    case 1:
                      if (
                        (ou(c, c.return),
                        "function" ==
                          typeof (a = c.stateNode).componentWillUnmount)
                      ) {
                        (d = c), (p = c.return);
                        try {
                          (l = d),
                            (a.props = l.memoizedProps),
                            (a.state = l.memoizedState),
                            a.componentWillUnmount();
                        } catch (e) {
                          Fs(d, p, e);
                        }
                      }
                      break;
                    case 5:
                      ou(c, c.return);
                      break;
                    case 22:
                      if (null !== c.memoizedState) {
                        Pu(s);
                        continue;
                      }
                  }
                  null !== f ? ((f.return = c), (au = f)) : Pu(s);
                }
                e = e.sibling;
              }
          }
          break;
        case 19:
          xu(n, e), _u(e), 4 & r && ku(e);
        case 21:
      }
    }
    function _u(e) {
      var n = e.flags;
      if (2 & n) {
        try {
          e: {
            for (var t = e.return; null !== t; ) {
              if (pu(t)) {
                var r = t;
                break e;
              }
              t = t.return;
            }
            throw Error(y(160));
          }
          switch (r.tag) {
            case 5:
              var l = r.stateNode;
              32 & r.flags && (Ee(l, ""), (r.flags &= -33)), gu(e, hu(e), l);
              break;
            case 3:
            case 4:
              var a = r.stateNode.containerInfo;
              mu(e, hu(e), a);
              break;
            default:
              throw Error(y(161));
          }
        } catch (n) {
          Fs(e, e.return, n);
        }
        e.flags &= -3;
      }
      4096 & n && (e.flags &= -4097);
    }
    function Eu(e, n, t) {
      (au = e), Nu(e, n, t);
    }
    function Nu(e, n, t) {
      for (var r = 0 != (1 & e.mode); null !== au; ) {
        var l = au,
          a = l.child;
        if (22 === l.tag && r) {
          var o = null !== l.memoizedState || tu;
          if (!o) {
            var i = l.alternate,
              u = (null !== i && null !== i.memoizedState) || ru;
            i = tu;
            var s = ru;
            if (((tu = o), (ru = u) && !s))
              for (au = l; null !== au; )
                (u = (o = au).child),
                  22 === o.tag && null !== o.memoizedState
                    ? zu(l)
                    : null !== u
                    ? ((u.return = o), (au = u))
                    : zu(l);
            for (; null !== a; ) (au = a), Nu(a, n, t), (a = a.sibling);
            (au = l), (tu = i), (ru = s);
          }
          Cu(e);
        } else
          0 != (8772 & l.subtreeFlags) && null !== a
            ? ((a.return = l), (au = a))
            : Cu(e);
      }
    }
    function Cu(e) {
      for (; null !== au; ) {
        var n = au;
        if (0 != (8772 & n.flags)) {
          var t = n.alternate;
          try {
            if (0 != (8772 & n.flags))
              switch (n.tag) {
                case 0:
                case 11:
                case 15:
                  ru || cu(5, n);
                  break;
                case 1:
                  var r = n.stateNode;
                  if (4 & n.flags && !ru)
                    if (null === t) r.componentDidMount();
                    else {
                      var l =
                        n.elementType === n.type
                          ? t.memoizedProps
                          : ea(n.type, t.memoizedProps);
                      r.componentDidUpdate(
                        l,
                        t.memoizedState,
                        r.__reactInternalSnapshotBeforeUpdate
                      );
                    }
                  var a = n.updateQueue;
                  null !== a && ba(n, a, r);
                  break;
                case 3:
                  var o = n.updateQueue;
                  if (null !== o) {
                    if (((t = null), null !== n.child))
                      switch (n.child.tag) {
                        case 5:
                        case 1:
                          t = n.child.stateNode;
                      }
                    ba(n, o, t);
                  }
                  break;
                case 5:
                  var i = n.stateNode;
                  if (null === t && 4 & n.flags) {
                    t = i;
                    var u = n.memoizedProps;
                    switch (n.type) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        u.autoFocus && t.focus();
                        break;
                      case "img":
                        u.src && (t.src = u.src);
                    }
                  }
                  break;
                case 6:
                case 4:
                case 12:
                case 19:
                case 17:
                case 21:
                case 22:
                case 23:
                  break;
                case 13:
                  if (null === n.memoizedState) {
                    var s = n.alternate;
                    if (null !== s) {
                      var c = s.memoizedState;
                      if (null !== c) {
                        var f = c.dehydrated;
                        null !== f && tt(f);
                      }
                    }
                  }
                  break;
                default:
                  throw Error(y(163));
              }
            ru || (512 & n.flags && fu(n));
          } catch (e) {
            Fs(n, n.return, e);
          }
        }
        if (n === e) {
          au = null;
          break;
        }
        if (null !== (t = n.sibling)) {
          (t.return = n.return), (au = t);
          break;
        }
        au = n.return;
      }
    }
    function Pu(e) {
      for (; null !== au; ) {
        var n = au;
        if (n === e) {
          au = null;
          break;
        }
        var t = n.sibling;
        if (null !== t) {
          (t.return = n.return), (au = t);
          break;
        }
        au = n.return;
      }
    }
    function zu(e) {
      for (; null !== au; ) {
        var n = au;
        try {
          switch (n.tag) {
            case 0:
            case 11:
            case 15:
              var t = n.return;
              try {
                cu(4, n);
              } catch (e) {
                Fs(n, t, e);
              }
              break;
            case 1:
              var r = n.stateNode;
              if ("function" == typeof r.componentDidMount) {
                var l = n.return;
                try {
                  r.componentDidMount();
                } catch (e) {
                  Fs(n, l, e);
                }
              }
              var a = n.return;
              try {
                fu(n);
              } catch (e) {
                Fs(n, a, e);
              }
              break;
            case 5:
              var o = n.return;
              try {
                fu(n);
              } catch (e) {
                Fs(n, o, e);
              }
          }
        } catch (e) {
          Fs(n, n.return, e);
        }
        if (n === e) {
          au = null;
          break;
        }
        var i = n.sibling;
        if (null !== i) {
          (i.return = n.return), (au = i);
          break;
        }
        au = n.return;
      }
    }
    var ju,
      Lu = Math.ceil,
      Tu = F.ReactCurrentDispatcher,
      Fu = F.ReactCurrentOwner,
      Ru = F.ReactCurrentBatchConfig,
      Mu = 0,
      Ou = null,
      Iu = null,
      Du = 0,
      Uu = 0,
      Au = Rl(0),
      Wu = 0,
      qu = null,
      $u = 0,
      Hu = 0,
      Vu = 0,
      Bu = null,
      Qu = null,
      Ku = 0,
      Yu = 1 / 0,
      Xu = null,
      Gu = !1,
      Ju = null,
      Zu = null,
      es = !1,
      ns = null,
      ts = 0,
      rs = 0,
      ls = null,
      as = -1,
      os = 0;
    function is() {
      return 0 != (6 & Mu) ? fn() : -1 !== as ? as : (as = fn());
    }
    function us(e) {
      return 0 == (1 & e.mode)
        ? 1
        : 0 != (2 & Mu) && 0 !== Du
        ? Du & -Du
        : null !== Zl.transition
        ? (0 === os && (os = zn()), os)
        : 0 !== (e = Fn)
        ? e
        : (e = void 0 === (e = window.event) ? 16 : ct(e.type));
    }
    function ss(e, n, t) {
      if (50 < rs) throw ((rs = 0), (ls = null), Error(y(185)));
      var r = cs(e, n);
      return null === r
        ? null
        : (Ln(r, n, t),
          (0 != (2 & Mu) && r === Ou) ||
            (r === Ou && (0 == (2 & Mu) && (Hu |= n), 4 === Wu && gs(r, Du)),
            ds(r, t),
            1 === n &&
              0 === Mu &&
              0 == (1 & e.mode) &&
              ((Yu = fn() + 500), Yl && Jl())),
          r);
    }
    function cs(e, n) {
      e.lanes |= n;
      var t = e.alternate;
      for (null !== t && (t.lanes |= n), t = e, e = e.return; null !== e; )
        (e.childLanes |= n),
          null !== (t = e.alternate) && (t.childLanes |= n),
          (t = e),
          (e = e.return);
      return 3 === t.tag ? t.stateNode : null;
    }
    function fs(e) {
      return (null !== Ou || null !== ca) && 0 != (1 & e.mode) && 0 == (2 & Mu);
    }
    function ds(e, n) {
      var t = e.callbackNode;
      !(function (e, n) {
        for (
          var t = e.suspendedLanes,
            r = e.pingedLanes,
            l = e.expirationTimes,
            a = e.pendingLanes;
          0 < a;

        ) {
          var o = 31 - wn(a),
            i = 1 << o,
            u = l[o];
          -1 === u
            ? (0 != (i & t) && 0 == (i & r)) || (l[o] = Cn(i, n))
            : u <= n && (e.expiredLanes |= i),
            (a &= ~i);
        }
      })(e, n);
      var r,
        l = Nn(e, e === Ou ? Du : 0);
      if (0 === l)
        null !== t && un(t), (e.callbackNode = null), (e.callbackPriority = 0);
      else if (((n = l & -l), e.callbackPriority !== n)) {
        if ((null != t && un(t), 1 === n))
          0 === e.tag
            ? ((r = vs.bind(null, e)), (Yl = !0), Gl(r))
            : Gl(vs.bind(null, e)),
            gl(function () {
              0 === Mu && Jl();
            }),
            (t = null);
        else {
          switch (Rn(l)) {
            case 1:
              t = pn;
              break;
            case 4:
              t = hn;
              break;
            case 16:
            default:
              t = mn;
              break;
            case 536870912:
              t = vn;
          }
          t = Ds(t, ps.bind(null, e));
        }
        (e.callbackPriority = n), (e.callbackNode = t);
      }
    }
    function ps(e, n) {
      if (((as = -1), (os = 0), 0 != (6 & Mu))) throw Error(y(327));
      var t = e.callbackNode;
      if (Ls() && e.callbackNode !== t) return null;
      var r = Nn(e, e === Ou ? Du : 0);
      if (0 === r) return null;
      if (0 != (30 & r) || 0 != (r & e.expiredLanes) || n) n = Es(e, r);
      else {
        n = r;
        var l = Mu;
        Mu |= 2;
        var a = Ss();
        for (
          (Ou === e && Du === n) || ((Xu = null), (Yu = fn() + 500), ks(e, n));
          ;

        )
          try {
            Cs();
            break;
          } catch (n) {
            xs(e, n);
          }
        aa(),
          (Tu.current = a),
          (Mu = l),
          null !== Iu ? (n = 0) : ((Ou = null), (Du = 0), (n = Wu));
      }
      if (0 !== n) {
        if (
          (2 === n && 0 !== (l = Pn(e)) && ((r = l), (n = hs(e, l))), 1 === n)
        )
          throw ((t = qu), ks(e, 0), gs(e, r), ds(e, fn()), t);
        if (6 === n) gs(e, r);
        else {
          if (
            ((l = e.current.alternate),
            0 == (30 & r) &&
              !(function (e) {
                for (var n = e; ; ) {
                  if (16384 & n.flags) {
                    var t = n.updateQueue;
                    if (null !== t && null !== (t = t.stores))
                      for (var r = 0; r < t.length; r++) {
                        var l = t[r],
                          a = l.getSnapshot;
                        l = l.value;
                        try {
                          if (!vr(a(), l)) return !1;
                        } catch (e) {
                          return !1;
                        }
                      }
                  }
                  if (((t = n.child), 16384 & n.subtreeFlags && null !== t))
                    (t.return = n), (n = t);
                  else {
                    if (n === e) break;
                    for (; null === n.sibling; ) {
                      if (null === n.return || n.return === e) return !0;
                      n = n.return;
                    }
                    (n.sibling.return = n.return), (n = n.sibling);
                  }
                }
                return !0;
              })(l) &&
              (2 === (n = Es(e, r)) &&
                0 !== (a = Pn(e)) &&
                ((r = a), (n = hs(e, a))),
              1 === n))
          )
            throw ((t = qu), ks(e, 0), gs(e, r), ds(e, fn()), t);
          switch (((e.finishedWork = l), (e.finishedLanes = r), n)) {
            case 0:
            case 1:
              throw Error(y(345));
            case 2:
            case 5:
              js(e, Qu, Xu);
              break;
            case 3:
              if (
                (gs(e, r), (130023424 & r) === r && 10 < (n = Ku + 500 - fn()))
              ) {
                if (0 !== Nn(e, 0)) break;
                if (((l = e.suspendedLanes) & r) !== r) {
                  is(), (e.pingedLanes |= e.suspendedLanes & l);
                  break;
                }
                e.timeoutHandle = pl(js.bind(null, e, Qu, Xu), n);
                break;
              }
              js(e, Qu, Xu);
              break;
            case 4:
              if ((gs(e, r), (4194240 & r) === r)) break;
              for (n = e.eventTimes, l = -1; 0 < r; ) {
                var o = 31 - wn(r);
                (a = 1 << o), (o = n[o]) > l && (l = o), (r &= ~a);
              }
              if (
                ((r = l),
                10 <
                  (r =
                    (120 > (r = fn() - r)
                      ? 120
                      : 480 > r
                      ? 480
                      : 1080 > r
                      ? 1080
                      : 1920 > r
                      ? 1920
                      : 3e3 > r
                      ? 3e3
                      : 4320 > r
                      ? 4320
                      : 1960 * Lu(r / 1960)) - r))
              ) {
                e.timeoutHandle = pl(js.bind(null, e, Qu, Xu), r);
                break;
              }
              js(e, Qu, Xu);
              break;
            default:
              throw Error(y(329));
          }
        }
      }
      return ds(e, fn()), e.callbackNode === t ? ps.bind(null, e) : null;
    }
    function hs(e, n) {
      var t = Bu;
      return (
        e.current.memoizedState.isDehydrated && (ks(e, n).flags |= 256),
        2 !== (e = Es(e, n)) && ((n = Qu), (Qu = t), null !== n && ms(n)),
        e
      );
    }
    function ms(e) {
      null === Qu ? (Qu = e) : Qu.push.apply(Qu, e);
    }
    function gs(e, n) {
      for (
        n &= ~Vu,
          n &= ~Hu,
          e.suspendedLanes |= n,
          e.pingedLanes &= ~n,
          e = e.expirationTimes;
        0 < n;

      ) {
        var t = 31 - wn(n),
          r = 1 << t;
        (e[t] = -1), (n &= ~r);
      }
    }
    function vs(e) {
      if (0 != (6 & Mu)) throw Error(y(327));
      Ls();
      var n = Nn(e, 0);
      if (0 == (1 & n)) return ds(e, fn()), null;
      var t = Es(e, n);
      if (0 !== e.tag && 2 === t) {
        var r = Pn(e);
        0 !== r && ((n = r), (t = hs(e, r)));
      }
      if (1 === t) throw ((t = qu), ks(e, 0), gs(e, n), ds(e, fn()), t);
      if (6 === t) throw Error(y(345));
      return (
        (e.finishedWork = e.current.alternate),
        (e.finishedLanes = n),
        js(e, Qu, Xu),
        ds(e, fn()),
        null
      );
    }
    function ys(e, n) {
      var t = Mu;
      Mu |= 1;
      try {
        return e(n);
      } finally {
        0 === (Mu = t) && ((Yu = fn() + 500), Yl && Jl());
      }
    }
    function bs(e) {
      null !== ns && 0 === ns.tag && 0 == (6 & Mu) && Ls();
      var n = Mu;
      Mu |= 1;
      var t = Ru.transition,
        r = Fn;
      try {
        if (((Ru.transition = null), (Fn = 1), e)) return e();
      } finally {
        (Fn = r), (Ru.transition = t), 0 == (6 & (Mu = n)) && Jl();
      }
    }
    function ws() {
      (Uu = Au.current), Ml(Au);
    }
    function ks(e, n) {
      (e.finishedWork = null), (e.finishedLanes = 0);
      var t = e.timeoutHandle;
      if ((-1 !== t && ((e.timeoutHandle = -1), hl(t)), null !== Iu))
        for (t = Iu.return; null !== t; ) {
          var r = t;
          switch ((Ua(r), r.tag)) {
            case 1:
              null != (r = r.type.childContextTypes) && $l();
              break;
            case 3:
              co(), Ml(Ul), Ml(Dl), vo();
              break;
            case 5:
              po(r);
              break;
            case 4:
              co();
              break;
            case 13:
            case 19:
              Ml(ho);
              break;
            case 10:
              oa(r.type._context);
              break;
            case 22:
            case 23:
              ws();
          }
          t = t.return;
        }
      if (
        ((Ou = e),
        (Iu = e = qs(e.current, null)),
        (Du = Uu = n),
        (Wu = 0),
        (qu = null),
        (Vu = Hu = $u = 0),
        (Qu = Bu = null),
        null !== ca)
      ) {
        for (n = 0; n < ca.length; n++)
          if (null !== (r = (t = ca[n]).interleaved)) {
            t.interleaved = null;
            var l = r.next,
              a = t.pending;
            if (null !== a) {
              var o = a.next;
              (a.next = l), (r.next = o);
            }
            t.pending = r;
          }
        ca = null;
      }
      return e;
    }
    function xs(e, n) {
      for (;;) {
        var t = Iu;
        try {
          if ((aa(), (yo.current = di), _o)) {
            for (var r = ko.memoizedState; null !== r; ) {
              var l = r.queue;
              null !== l && (l.pending = null), (r = r.next);
            }
            _o = !1;
          }
          if (
            ((wo = 0),
            (So = xo = ko = null),
            (Eo = !1),
            (No = 0),
            (Fu.current = null),
            null === t || null === t.return)
          ) {
            (Wu = 1), (qu = n), (Iu = null);
            break;
          }
          e: {
            var a = e,
              o = t.return,
              i = t,
              u = n;
            if (
              ((n = Du),
              (i.flags |= 32768),
              null !== u && "object" == typeof u && "function" == typeof u.then)
            ) {
              var s = u,
                c = i,
                f = c.tag;
              if (0 == (1 & c.mode) && (0 === f || 11 === f || 15 === f)) {
                var d = c.alternate;
                d
                  ? ((c.updateQueue = d.updateQueue),
                    (c.memoizedState = d.memoizedState),
                    (c.lanes = d.lanes))
                  : ((c.updateQueue = null), (c.memoizedState = null));
              }
              var p = Ei(o);
              if (null !== p) {
                (p.flags &= -257),
                  Ni(p, o, i, 0, n),
                  1 & p.mode && _i(a, s, n),
                  (u = s);
                var h = (n = p).updateQueue;
                if (null === h) {
                  var m = new Set();
                  m.add(u), (n.updateQueue = m);
                } else h.add(u);
                break e;
              }
              if (0 == (1 & n)) {
                _i(a, s, n), _s();
                break e;
              }
              u = Error(y(426));
            } else if (qa && 1 & i.mode) {
              var g = Ei(o);
              if (null !== g) {
                0 == (65536 & g.flags) && (g.flags |= 256),
                  Ni(g, o, i, 0, n),
                  Ga(u);
                break e;
              }
            }
            (a = u),
              4 !== Wu && (Wu = 2),
              null === Bu ? (Bu = [a]) : Bu.push(a),
              (u = gi(u, i)),
              (i = o);
            do {
              switch (i.tag) {
                case 3:
                  (i.flags |= 65536),
                    (n &= -n),
                    (i.lanes |= n),
                    va(i, xi(0, u, n));
                  break e;
                case 1:
                  a = u;
                  var v = i.type,
                    b = i.stateNode;
                  if (
                    0 == (128 & i.flags) &&
                    ("function" == typeof v.getDerivedStateFromError ||
                      (null !== b &&
                        "function" == typeof b.componentDidCatch &&
                        (null === Zu || !Zu.has(b))))
                  ) {
                    (i.flags |= 65536),
                      (n &= -n),
                      (i.lanes |= n),
                      va(i, Si(i, a, n));
                    break e;
                  }
              }
              i = i.return;
            } while (null !== i);
          }
          zs(t);
        } catch (e) {
          (n = e), Iu === t && null !== t && (Iu = t = t.return);
          continue;
        }
        break;
      }
    }
    function Ss() {
      var e = Tu.current;
      return (Tu.current = di), null === e ? di : e;
    }
    function _s() {
      (0 !== Wu && 3 !== Wu && 2 !== Wu) || (Wu = 4),
        null === Ou ||
          (0 == (268435455 & $u) && 0 == (268435455 & Hu)) ||
          gs(Ou, Du);
    }
    function Es(e, n) {
      var t = Mu;
      Mu |= 2;
      var r = Ss();
      for ((Ou === e && Du === n) || ((Xu = null), ks(e, n)); ; )
        try {
          Ns();
          break;
        } catch (n) {
          xs(e, n);
        }
      if ((aa(), (Mu = t), (Tu.current = r), null !== Iu)) throw Error(y(261));
      return (Ou = null), (Du = 0), Wu;
    }
    function Ns() {
      for (; null !== Iu; ) Ps(Iu);
    }
    function Cs() {
      for (; null !== Iu && !sn(); ) Ps(Iu);
    }
    function Ps(e) {
      var n = ju(e.alternate, e, Uu);
      (e.memoizedProps = e.pendingProps),
        null === n ? zs(e) : (Iu = n),
        (Fu.current = null);
    }
    function zs(e) {
      var n = e;
      do {
        var t = n.alternate;
        if (((e = n.return), 0 == (32768 & n.flags))) {
          if (null !== (t = zi(t, n, Uu))) return void (Iu = t);
        } else {
          if (null !== (t = nu(t, n))) return (t.flags &= 32767), void (Iu = t);
          if (null === e) return (Wu = 6), void (Iu = null);
          (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
        }
        if (null !== (n = n.sibling)) return void (Iu = n);
        Iu = n = e;
      } while (null !== n);
      0 === Wu && (Wu = 5);
    }
    function js(e, n, t) {
      var r = Fn,
        l = Ru.transition;
      try {
        (Ru.transition = null),
          (Fn = 1),
          (function (e, n, t, r) {
            do {
              Ls();
            } while (null !== ns);
            if (0 != (6 & Mu)) throw Error(y(327));
            t = e.finishedWork;
            var l = e.finishedLanes;
            if (null === t) return null;
            if (
              ((e.finishedWork = null), (e.finishedLanes = 0), t === e.current)
            )
              throw Error(y(177));
            (e.callbackNode = null), (e.callbackPriority = 0);
            var a = t.lanes | t.childLanes;
            if (
              ((function (e, n) {
                var t = e.pendingLanes & ~n;
                (e.pendingLanes = n),
                  (e.suspendedLanes = 0),
                  (e.pingedLanes = 0),
                  (e.expiredLanes &= n),
                  (e.mutableReadLanes &= n),
                  (e.entangledLanes &= n),
                  (n = e.entanglements);
                var r = e.eventTimes;
                for (e = e.expirationTimes; 0 < t; ) {
                  var l = 31 - wn(t),
                    a = 1 << l;
                  (n[l] = 0), (r[l] = -1), (e[l] = -1), (t &= ~a);
                }
              })(e, a),
              e === Ou && ((Iu = Ou = null), (Du = 0)),
              (0 == (2064 & t.subtreeFlags) && 0 == (2064 & t.flags)) ||
                es ||
                ((es = !0),
                Ds(mn, function () {
                  return Ls(), null;
                })),
              (a = 0 != (15990 & t.flags)),
              0 != (15990 & t.subtreeFlags) || a)
            ) {
              (a = Ru.transition), (Ru.transition = null);
              var o = Fn;
              Fn = 1;
              var i = Mu;
              (Mu |= 4),
                (Fu.current = null),
                (function (e, n) {
                  if (((cl = lt), Sr((e = xr())))) {
                    if ("selectionStart" in e)
                      var t = { start: e.selectionStart, end: e.selectionEnd };
                    else
                      e: {
                        var r =
                          (t =
                            ((t = e.ownerDocument) && t.defaultView) || window)
                            .getSelection && t.getSelection();
                        if (r && 0 !== r.rangeCount) {
                          t = r.anchorNode;
                          var l = r.anchorOffset,
                            a = r.focusNode;
                          r = r.focusOffset;
                          try {
                            t.nodeType, a.nodeType;
                          } catch (e) {
                            t = null;
                            break e;
                          }
                          var o = 0,
                            i = -1,
                            u = -1,
                            s = 0,
                            c = 0,
                            f = e,
                            d = null;
                          n: for (;;) {
                            for (
                              var p;
                              f !== t ||
                                (0 !== l && 3 !== f.nodeType) ||
                                (i = o + l),
                                f !== a ||
                                  (0 !== r && 3 !== f.nodeType) ||
                                  (u = o + r),
                                3 === f.nodeType && (o += f.nodeValue.length),
                                null !== (p = f.firstChild);

                            )
                              (d = f), (f = p);
                            for (;;) {
                              if (f === e) break n;
                              if (
                                (d === t && ++s === l && (i = o),
                                d === a && ++c === r && (u = o),
                                null !== (p = f.nextSibling))
                              )
                                break;
                              d = (f = d).parentNode;
                            }
                            f = p;
                          }
                          t =
                            -1 === i || -1 === u ? null : { start: i, end: u };
                        } else t = null;
                      }
                    t = t || { start: 0, end: 0 };
                  } else t = null;
                  for (
                    fl = { focusedElem: e, selectionRange: t }, lt = !1, au = n;
                    null !== au;

                  )
                    if (
                      ((e = (n = au).child),
                      0 != (1028 & n.subtreeFlags) && null !== e)
                    )
                      (e.return = n), (au = e);
                    else
                      for (; null !== au; ) {
                        n = au;
                        try {
                          var h = n.alternate;
                          if (0 != (1024 & n.flags))
                            switch (n.tag) {
                              case 0:
                              case 11:
                              case 15:
                              case 5:
                              case 6:
                              case 4:
                              case 17:
                                break;
                              case 1:
                                if (null !== h) {
                                  var m = h.memoizedProps,
                                    g = h.memoizedState,
                                    v = n.stateNode,
                                    b = v.getSnapshotBeforeUpdate(
                                      n.elementType === n.type
                                        ? m
                                        : ea(n.type, m),
                                      g
                                    );
                                  v.__reactInternalSnapshotBeforeUpdate = b;
                                }
                                break;
                              case 3:
                                var w = n.stateNode.containerInfo;
                                if (1 === w.nodeType) w.textContent = "";
                                else if (9 === w.nodeType) {
                                  var k = w.body;
                                  null != k && (k.textContent = "");
                                }
                                break;
                              default:
                                throw Error(y(163));
                            }
                        } catch (e) {
                          Fs(n, n.return, e);
                        }
                        if (null !== (e = n.sibling)) {
                          (e.return = n.return), (au = e);
                          break;
                        }
                        au = n.return;
                      }
                  (h = uu), (uu = !1);
                })(e, t),
                Su(t, e),
                _r(fl),
                (lt = !!cl),
                (fl = cl = null),
                (e.current = t),
                Eu(t, e, l),
                cn(),
                (Mu = i),
                (Fn = o),
                (Ru.transition = a);
            } else e.current = t;
            if (
              (es && ((es = !1), (ns = e), (ts = l)),
              0 === (a = e.pendingLanes) && (Zu = null),
              (function (e) {
                if (bn && "function" == typeof bn.onCommitFiberRoot)
                  try {
                    bn.onCommitFiberRoot(
                      yn,
                      e,
                      void 0,
                      128 == (128 & e.current.flags)
                    );
                  } catch (e) {}
              })(t.stateNode),
              ds(e, fn()),
              null !== n)
            )
              for (r = e.onRecoverableError, t = 0; t < n.length; t++) r(n[t]);
            if (Gu) throw ((Gu = !1), (e = Ju), (Ju = null), e);
            0 != (1 & ts) && 0 !== e.tag && Ls(),
              0 != (1 & (a = e.pendingLanes))
                ? e === ls
                  ? rs++
                  : ((rs = 0), (ls = e))
                : (rs = 0),
              Jl();
          })(e, n, t, r);
      } finally {
        (Ru.transition = l), (Fn = r);
      }
      return null;
    }
    function Ls() {
      if (null !== ns) {
        var e = Rn(ts),
          n = Ru.transition,
          t = Fn;
        try {
          if (((Ru.transition = null), (Fn = 16 > e ? 16 : e), null === ns))
            var r = !1;
          else {
            if (((e = ns), (ns = null), (ts = 0), 0 != (6 & Mu)))
              throw Error(y(331));
            var l = Mu;
            for (Mu |= 4, au = e.current; null !== au; ) {
              var a = au,
                o = a.child;
              if (0 != (16 & au.flags)) {
                var i = a.deletions;
                if (null !== i) {
                  for (var u = 0; u < i.length; u++) {
                    var s = i[u];
                    for (au = s; null !== au; ) {
                      var c = au;
                      switch (c.tag) {
                        case 0:
                        case 11:
                        case 15:
                          su(8, c, a);
                      }
                      var f = c.child;
                      if (null !== f) (f.return = c), (au = f);
                      else
                        for (; null !== au; ) {
                          var d = (c = au).sibling,
                            p = c.return;
                          if ((du(c), c === s)) {
                            au = null;
                            break;
                          }
                          if (null !== d) {
                            (d.return = p), (au = d);
                            break;
                          }
                          au = p;
                        }
                    }
                  }
                  var h = a.alternate;
                  if (null !== h) {
                    var m = h.child;
                    if (null !== m) {
                      h.child = null;
                      do {
                        var g = m.sibling;
                        (m.sibling = null), (m = g);
                      } while (null !== m);
                    }
                  }
                  au = a;
                }
              }
              if (0 != (2064 & a.subtreeFlags) && null !== o)
                (o.return = a), (au = o);
              else
                e: for (; null !== au; ) {
                  if (0 != (2048 & (a = au).flags))
                    switch (a.tag) {
                      case 0:
                      case 11:
                      case 15:
                        su(9, a, a.return);
                    }
                  var v = a.sibling;
                  if (null !== v) {
                    (v.return = a.return), (au = v);
                    break e;
                  }
                  au = a.return;
                }
            }
            var b = e.current;
            for (au = b; null !== au; ) {
              var w = (o = au).child;
              if (0 != (2064 & o.subtreeFlags) && null !== w)
                (w.return = o), (au = w);
              else
                e: for (o = b; null !== au; ) {
                  if (0 != (2048 & (i = au).flags))
                    try {
                      switch (i.tag) {
                        case 0:
                        case 11:
                        case 15:
                          cu(9, i);
                      }
                    } catch (e) {
                      Fs(i, i.return, e);
                    }
                  if (i === o) {
                    au = null;
                    break e;
                  }
                  var k = i.sibling;
                  if (null !== k) {
                    (k.return = i.return), (au = k);
                    break e;
                  }
                  au = i.return;
                }
            }
            if (
              ((Mu = l),
              Jl(),
              bn && "function" == typeof bn.onPostCommitFiberRoot)
            )
              try {
                bn.onPostCommitFiberRoot(yn, e);
              } catch (e) {}
            r = !0;
          }
          return r;
        } finally {
          (Fn = t), (Ru.transition = n);
        }
      }
      return !1;
    }
    function Ts(e, n, t) {
      ma(e, (n = xi(0, (n = gi(t, n)), 1))),
        (n = is()),
        null !== (e = cs(e, 1)) && (Ln(e, 1, n), ds(e, n));
    }
    function Fs(e, n, t) {
      if (3 === e.tag) Ts(e, e, t);
      else
        for (; null !== n; ) {
          if (3 === n.tag) {
            Ts(n, e, t);
            break;
          }
          if (1 === n.tag) {
            var r = n.stateNode;
            if (
              "function" == typeof n.type.getDerivedStateFromError ||
              ("function" == typeof r.componentDidCatch &&
                (null === Zu || !Zu.has(r)))
            ) {
              ma(n, (e = Si(n, (e = gi(t, e)), 1))),
                (e = is()),
                null !== (n = cs(n, 1)) && (Ln(n, 1, e), ds(n, e));
              break;
            }
          }
          n = n.return;
        }
    }
    function Rs(e, n, t) {
      var r = e.pingCache;
      null !== r && r.delete(n),
        (n = is()),
        (e.pingedLanes |= e.suspendedLanes & t),
        Ou === e &&
          (Du & t) === t &&
          (4 === Wu || (3 === Wu && (130023424 & Du) === Du && 500 > fn() - Ku)
            ? ks(e, 0)
            : (Vu |= t)),
        ds(e, n);
    }
    function Ms(e, n) {
      0 === n &&
        (0 == (1 & e.mode)
          ? (n = 1)
          : ((n = _n), 0 == (130023424 & (_n <<= 1)) && (_n = 4194304)));
      var t = is();
      null !== (e = cs(e, n)) && (Ln(e, n, t), ds(e, t));
    }
    function Os(e) {
      var n = e.memoizedState,
        t = 0;
      null !== n && (t = n.retryLane), Ms(e, t);
    }
    function Is(e, n) {
      var t = 0;
      switch (e.tag) {
        case 13:
          var r = e.stateNode,
            l = e.memoizedState;
          null !== l && (t = l.retryLane);
          break;
        case 19:
          r = e.stateNode;
          break;
        default:
          throw Error(y(314));
      }
      null !== r && r.delete(n), Ms(e, t);
    }
    function Ds(e, n) {
      return on(e, n);
    }
    function Us(e, n, t, r) {
      (this.tag = e),
        (this.key = t),
        (this.sibling =
          this.child =
          this.return =
          this.stateNode =
          this.type =
          this.elementType =
            null),
        (this.index = 0),
        (this.ref = null),
        (this.pendingProps = n),
        (this.dependencies =
          this.memoizedState =
          this.updateQueue =
          this.memoizedProps =
            null),
        (this.mode = r),
        (this.subtreeFlags = this.flags = 0),
        (this.deletions = null),
        (this.childLanes = this.lanes = 0),
        (this.alternate = null);
    }
    function As(e, n, t, r) {
      return new Us(e, n, t, r);
    }
    function Ws(e) {
      return !(!(e = e.prototype) || !e.isReactComponent);
    }
    function qs(e, n) {
      var t = e.alternate;
      return (
        null === t
          ? (((t = As(e.tag, n, e.key, e.mode)).elementType = e.elementType),
            (t.type = e.type),
            (t.stateNode = e.stateNode),
            (t.alternate = e),
            (e.alternate = t))
          : ((t.pendingProps = n),
            (t.type = e.type),
            (t.flags = 0),
            (t.subtreeFlags = 0),
            (t.deletions = null)),
        (t.flags = 14680064 & e.flags),
        (t.childLanes = e.childLanes),
        (t.lanes = e.lanes),
        (t.child = e.child),
        (t.memoizedProps = e.memoizedProps),
        (t.memoizedState = e.memoizedState),
        (t.updateQueue = e.updateQueue),
        (n = e.dependencies),
        (t.dependencies =
          null === n ? null : { lanes: n.lanes, firstContext: n.firstContext }),
        (t.sibling = e.sibling),
        (t.index = e.index),
        (t.ref = e.ref),
        t
      );
    }
    function $s(e, n, t, r, l, a) {
      var o = 2;
      if (((r = e), "function" == typeof e)) Ws(e) && (o = 1);
      else if ("string" == typeof e) o = 5;
      else
        e: switch (e) {
          case O:
            return Hs(t.children, l, a, n);
          case I:
            (o = 8), (l |= 8);
            break;
          case D:
            return (
              ((e = As(12, t, n, 2 | l)).elementType = D), (e.lanes = a), e
            );
          case q:
            return ((e = As(13, t, n, l)).elementType = q), (e.lanes = a), e;
          case $:
            return ((e = As(19, t, n, l)).elementType = $), (e.lanes = a), e;
          case B:
            return Vs(t, l, a, n);
          default:
            if ("object" == typeof e && null !== e)
              switch (e.$$typeof) {
                case U:
                  o = 10;
                  break e;
                case A:
                  o = 9;
                  break e;
                case W:
                  o = 11;
                  break e;
                case H:
                  o = 14;
                  break e;
                case V:
                  (o = 16), (r = null);
                  break e;
              }
            throw Error(y(130, null == e ? e : typeof e, ""));
        }
      return (
        ((n = As(o, t, n, l)).elementType = e), (n.type = r), (n.lanes = a), n
      );
    }
    function Hs(e, n, t, r) {
      return ((e = As(7, e, r, n)).lanes = t), e;
    }
    function Vs(e, n, t, r) {
      return (
        ((e = As(22, e, r, n)).elementType = B),
        (e.lanes = t),
        (e.stateNode = {}),
        e
      );
    }
    function Bs(e, n, t) {
      return ((e = As(6, e, null, n)).lanes = t), e;
    }
    function Qs(e, n, t) {
      return (
        ((n = As(4, null !== e.children ? e.children : [], e.key, n)).lanes =
          t),
        (n.stateNode = {
          containerInfo: e.containerInfo,
          pendingChildren: null,
          implementation: e.implementation,
        }),
        n
      );
    }
    function Ks(e, n, t, r, l) {
      (this.tag = n),
        (this.containerInfo = e),
        (this.finishedWork =
          this.pingCache =
          this.current =
          this.pendingChildren =
            null),
        (this.timeoutHandle = -1),
        (this.callbackNode = this.pendingContext = this.context = null),
        (this.callbackPriority = 0),
        (this.eventTimes = jn(0)),
        (this.expirationTimes = jn(-1)),
        (this.entangledLanes =
          this.finishedLanes =
          this.mutableReadLanes =
          this.expiredLanes =
          this.pingedLanes =
          this.suspendedLanes =
          this.pendingLanes =
            0),
        (this.entanglements = jn(0)),
        (this.identifierPrefix = r),
        (this.onRecoverableError = l),
        (this.mutableSourceEagerHydrationData = null);
    }
    function Ys(e, n, t, r, l, a, o, i, u) {
      return (
        (e = new Ks(e, n, t, i, u)),
        1 === n ? ((n = 1), !0 === a && (n |= 8)) : (n = 0),
        (a = As(3, null, null, n)),
        (e.current = a),
        (a.stateNode = e),
        (a.memoizedState = {
          element: r,
          isDehydrated: t,
          cache: null,
          transitions: null,
          pendingSuspenseBoundaries: null,
        }),
        da(a),
        e
      );
    }
    function Xs(e, n, t) {
      var r =
        3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
      return {
        $$typeof: M,
        key: null == r ? null : "" + r,
        children: e,
        containerInfo: n,
        implementation: t,
      };
    }
    function Gs(e) {
      if (!e) return Il;
      e: {
        if (nn((e = e._reactInternals)) !== e || 1 !== e.tag)
          throw Error(y(170));
        var n = e;
        do {
          switch (n.tag) {
            case 3:
              n = n.stateNode.context;
              break e;
            case 1:
              if (ql(n.type)) {
                n = n.stateNode.__reactInternalMemoizedMergedChildContext;
                break e;
              }
          }
          n = n.return;
        } while (null !== n);
        throw Error(y(171));
      }
      if (1 === e.tag) {
        var t = e.type;
        if (ql(t)) return Vl(e, t, n);
      }
      return n;
    }
    function Js(e, n, t, r, l, a, o, i, u) {
      return (
        ((e = Ys(t, r, !0, e, 0, a, 0, i, u)).context = Gs(null)),
        (t = e.current),
        ((a = ha((r = is()), (l = us(t)))).callback = null != n ? n : null),
        ma(t, a),
        (e.current.lanes = l),
        Ln(e, l, r),
        ds(e, r),
        e
      );
    }
    function Zs(e, n, t, r) {
      var l = n.current,
        a = is(),
        o = us(l);
      return (
        (t = Gs(t)),
        null === n.context ? (n.context = t) : (n.pendingContext = t),
        ((n = ha(a, o)).payload = { element: e }),
        null !== (r = void 0 === r ? null : r) && (n.callback = r),
        ma(l, n),
        null !== (e = ss(l, o, a)) && ga(e, l, o),
        o
      );
    }
    function ec(e) {
      return (e = e.current).child ? (e.child.tag, e.child.stateNode) : null;
    }
    function nc(e, n) {
      if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
        var t = e.retryLane;
        e.retryLane = 0 !== t && t < n ? t : n;
      }
    }
    function tc(e, n) {
      nc(e, n), (e = e.alternate) && nc(e, n);
    }
    ju = function (e, n, t) {
      if (null !== e)
        if (e.memoizedProps !== n.pendingProps || Ul.current) Li = !0;
        else {
          if (0 == (e.lanes & t) && 0 == (128 & n.flags))
            return (
              (Li = !1),
              (function (e, n, t) {
                switch (n.tag) {
                  case 3:
                    Wi(n), Xa();
                    break;
                  case 5:
                    fo(n);
                    break;
                  case 1:
                    ql(n.type) && Bl(n);
                    break;
                  case 4:
                    so(n, n.stateNode.containerInfo);
                    break;
                  case 10:
                    var r = n.type._context,
                      l = n.memoizedProps.value;
                    Ol(na, r._currentValue), (r._currentValue = l);
                    break;
                  case 13:
                    if (null !== (r = n.memoizedState))
                      return null !== r.dehydrated
                        ? (Ol(ho, 1 & ho.current), (n.flags |= 128), null)
                        : 0 != (t & n.child.childLanes)
                        ? Bi(e, n, t)
                        : (Ol(ho, 1 & ho.current),
                          null !== (e = eu(e, n, t)) ? e.sibling : null);
                    Ol(ho, 1 & ho.current);
                    break;
                  case 19:
                    if (((r = 0 != (t & n.childLanes)), 0 != (128 & e.flags))) {
                      if (r) return Zi(e, n, t);
                      n.flags |= 128;
                    }
                    if (
                      (null !== (l = n.memoizedState) &&
                        ((l.rendering = null),
                        (l.tail = null),
                        (l.lastEffect = null)),
                      Ol(ho, ho.current),
                      r)
                    )
                      break;
                    return null;
                  case 22:
                  case 23:
                    return (n.lanes = 0), Oi(e, n, t);
                }
                return eu(e, n, t);
              })(e, n, t)
            );
          Li = 0 != (131072 & e.flags);
        }
      else (Li = !1), qa && 0 != (1048576 & n.flags) && Ia(n, ja, n.index);
      switch (((n.lanes = 0), n.tag)) {
        case 2:
          var r = n.type;
          null !== e &&
            ((e.alternate = null), (n.alternate = null), (n.flags |= 2)),
            (e = n.pendingProps);
          var l = Wl(n, Dl.current);
          ua(n, t), (l = jo(null, n, r, e, l, t));
          var a = Lo();
          return (
            (n.flags |= 1),
            "object" == typeof l &&
            null !== l &&
            "function" == typeof l.render &&
            void 0 === l.$$typeof
              ? ((n.tag = 1),
                (n.memoizedState = null),
                (n.updateQueue = null),
                ql(r) ? ((a = !0), Bl(n)) : (a = !1),
                (n.memoizedState =
                  null !== l.state && void 0 !== l.state ? l.state : null),
                da(n),
                (l.updater = xa),
                (n.stateNode = l),
                (l._reactInternals = n),
                Na(n, r, e, t),
                (n = Ai(null, n, r, !0, a, t)))
              : ((n.tag = 0),
                qa && a && Da(n),
                Ti(null, n, l, t),
                (n = n.child)),
            n
          );
        case 16:
          r = n.elementType;
          e: {
            switch (
              (null !== e &&
                ((e.alternate = null), (n.alternate = null), (n.flags |= 2)),
              (e = n.pendingProps),
              (r = (l = r._init)(r._payload)),
              (n.type = r),
              (l = n.tag =
                (function (e) {
                  if ("function" == typeof e) return Ws(e) ? 1 : 0;
                  if (null != e) {
                    if ((e = e.$$typeof) === W) return 11;
                    if (e === H) return 14;
                  }
                  return 2;
                })(r)),
              (e = ea(r, e)),
              l)
            ) {
              case 0:
                n = Di(null, n, r, e, t);
                break e;
              case 1:
                n = Ui(null, n, r, e, t);
                break e;
              case 11:
                n = Fi(null, n, r, e, t);
                break e;
              case 14:
                n = Ri(null, n, r, ea(r.type, e), t);
                break e;
            }
            throw Error(y(306, r, ""));
          }
          return n;
        case 0:
          return (
            (r = n.type),
            (l = n.pendingProps),
            Di(e, n, r, (l = n.elementType === r ? l : ea(r, l)), t)
          );
        case 1:
          return (
            (r = n.type),
            (l = n.pendingProps),
            Ui(e, n, r, (l = n.elementType === r ? l : ea(r, l)), t)
          );
        case 3:
          e: {
            if ((Wi(n), null === e)) throw Error(y(387));
            (r = n.pendingProps),
              (l = (a = n.memoizedState).element),
              pa(e, n),
              ya(n, r, null, t);
            var o = n.memoizedState;
            if (((r = o.element), a.isDehydrated)) {
              if (
                ((a = {
                  element: r,
                  isDehydrated: !1,
                  cache: o.cache,
                  pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                  transitions: o.transitions,
                }),
                (n.updateQueue.baseState = a),
                (n.memoizedState = a),
                256 & n.flags)
              ) {
                n = qi(e, n, r, t, (l = Error(y(423))));
                break e;
              }
              if (r !== l) {
                n = qi(e, n, r, t, (l = Error(y(424))));
                break e;
              }
              for (
                Wa = bl(n.stateNode.containerInfo.firstChild),
                  Aa = n,
                  qa = !0,
                  $a = null,
                  t = ro(n, null, r, t),
                  n.child = t;
                t;

              )
                (t.flags = (-3 & t.flags) | 4096), (t = t.sibling);
            } else {
              if ((Xa(), r === l)) {
                n = eu(e, n, t);
                break e;
              }
              Ti(e, n, r, t);
            }
            n = n.child;
          }
          return n;
        case 5:
          return (
            fo(n),
            null === e && Qa(n),
            (r = n.type),
            (l = n.pendingProps),
            (a = null !== e ? e.memoizedProps : null),
            (o = l.children),
            dl(r, l) ? (o = null) : null !== a && dl(r, a) && (n.flags |= 32),
            Ii(e, n),
            Ti(e, n, o, t),
            n.child
          );
        case 6:
          return null === e && Qa(n), null;
        case 13:
          return Bi(e, n, t);
        case 4:
          return (
            so(n, n.stateNode.containerInfo),
            (r = n.pendingProps),
            null === e ? (n.child = to(n, null, r, t)) : Ti(e, n, r, t),
            n.child
          );
        case 11:
          return (
            (r = n.type),
            (l = n.pendingProps),
            Fi(e, n, r, (l = n.elementType === r ? l : ea(r, l)), t)
          );
        case 7:
          return Ti(e, n, n.pendingProps, t), n.child;
        case 8:
        case 12:
          return Ti(e, n, n.pendingProps.children, t), n.child;
        case 10:
          e: {
            if (
              ((r = n.type._context),
              (l = n.pendingProps),
              (a = n.memoizedProps),
              (o = l.value),
              Ol(na, r._currentValue),
              (r._currentValue = o),
              null !== a)
            )
              if (vr(a.value, o)) {
                if (a.children === l.children && !Ul.current) {
                  n = eu(e, n, t);
                  break e;
                }
              } else
                for (null !== (a = n.child) && (a.return = n); null !== a; ) {
                  var i = a.dependencies;
                  if (null !== i) {
                    o = a.child;
                    for (var u = i.firstContext; null !== u; ) {
                      if (u.context === r) {
                        if (1 === a.tag) {
                          (u = ha(-1, t & -t)).tag = 2;
                          var s = a.updateQueue;
                          if (null !== s) {
                            var c = (s = s.shared).pending;
                            null === c
                              ? (u.next = u)
                              : ((u.next = c.next), (c.next = u)),
                              (s.pending = u);
                          }
                        }
                        (a.lanes |= t),
                          null !== (u = a.alternate) && (u.lanes |= t),
                          ia(a.return, t, n),
                          (i.lanes |= t);
                        break;
                      }
                      u = u.next;
                    }
                  } else if (10 === a.tag)
                    o = a.type === n.type ? null : a.child;
                  else if (18 === a.tag) {
                    if (null === (o = a.return)) throw Error(y(341));
                    (o.lanes |= t),
                      null !== (i = o.alternate) && (i.lanes |= t),
                      ia(o, t, n),
                      (o = a.sibling);
                  } else o = a.child;
                  if (null !== o) o.return = a;
                  else
                    for (o = a; null !== o; ) {
                      if (o === n) {
                        o = null;
                        break;
                      }
                      if (null !== (a = o.sibling)) {
                        (a.return = o.return), (o = a);
                        break;
                      }
                      o = o.return;
                    }
                  a = o;
                }
            Ti(e, n, l.children, t), (n = n.child);
          }
          return n;
        case 9:
          return (
            (l = n.type),
            (r = n.pendingProps.children),
            ua(n, t),
            (r = r((l = sa(l)))),
            (n.flags |= 1),
            Ti(e, n, r, t),
            n.child
          );
        case 14:
          return (
            (l = ea((r = n.type), n.pendingProps)),
            Ri(e, n, r, (l = ea(r.type, l)), t)
          );
        case 15:
          return Mi(e, n, n.type, n.pendingProps, t);
        case 17:
          return (
            (r = n.type),
            (l = n.pendingProps),
            (l = n.elementType === r ? l : ea(r, l)),
            null !== e &&
              ((e.alternate = null), (n.alternate = null), (n.flags |= 2)),
            (n.tag = 1),
            ql(r) ? ((e = !0), Bl(n)) : (e = !1),
            ua(n, t),
            _a(n, r, l),
            Na(n, r, l, t),
            Ai(null, n, r, !0, e, t)
          );
        case 19:
          return Zi(e, n, t);
        case 22:
          return Oi(e, n, t);
      }
      throw Error(y(156, n.tag));
    };
    var rc =
      "function" == typeof reportError
        ? reportError
        : function (e) {
            console.error(e);
          };
    function lc(e) {
      this._internalRoot = e;
    }
    function ac(e) {
      this._internalRoot = e;
    }
    function oc(e) {
      return !(
        !e ||
        (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
      );
    }
    function ic(e) {
      return !(
        !e ||
        (1 !== e.nodeType &&
          9 !== e.nodeType &&
          11 !== e.nodeType &&
          (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue))
      );
    }
    function uc() {}
    function sc(e, n, t, r, l) {
      var a = t._reactRootContainer;
      if (a) {
        var o = a;
        if ("function" == typeof l) {
          var i = l;
          l = function () {
            var e = ec(o);
            i.call(e);
          };
        }
        Zs(n, o, e, l);
      } else
        o = (function (e, n, t, r, l) {
          if (l) {
            if ("function" == typeof r) {
              var a = r;
              r = function () {
                var e = ec(o);
                a.call(e);
              };
            }
            var o = Js(n, r, e, 0, null, !1, 0, "", uc);
            return (
              (e._reactRootContainer = o),
              (e[_l] = o.current),
              Jr(8 === e.nodeType ? e.parentNode : e),
              bs(),
              o
            );
          }
          for (; (l = e.lastChild); ) e.removeChild(l);
          if ("function" == typeof r) {
            var i = r;
            r = function () {
              var e = ec(u);
              i.call(e);
            };
          }
          var u = Ys(e, 0, !1, null, 0, !1, 0, "", uc);
          return (
            (e._reactRootContainer = u),
            (e[_l] = u.current),
            Jr(8 === e.nodeType ? e.parentNode : e),
            bs(function () {
              Zs(n, u, t, r);
            }),
            u
          );
        })(t, n, e, l, r);
      return ec(o);
    }
    (ac.prototype.render = lc.prototype.render =
      function (e) {
        var n = this._internalRoot;
        if (null === n) throw Error(y(409));
        Zs(e, n, null, null);
      }),
      (ac.prototype.unmount = lc.prototype.unmount =
        function () {
          var e = this._internalRoot;
          if (null !== e) {
            this._internalRoot = null;
            var n = e.containerInfo;
            bs(function () {
              Zs(null, e, null, null);
            }),
              (n[_l] = null);
          }
        }),
      (ac.prototype.unstable_scheduleHydration = function (e) {
        if (e) {
          var n = Dn();
          e = { blockedOn: null, target: e, priority: n };
          for (var t = 0; t < Qn.length && 0 !== n && n < Qn[t].priority; t++);
          Qn.splice(t, 0, e), 0 === t && Gn(e);
        }
      }),
      (Mn = function (e) {
        switch (e.tag) {
          case 3:
            var n = e.stateNode;
            if (n.current.memoizedState.isDehydrated) {
              var t = En(n.pendingLanes);
              0 !== t &&
                (Tn(n, 1 | t),
                ds(n, fn()),
                0 == (6 & Mu) && ((Yu = fn() + 500), Jl()));
            }
            break;
          case 13:
            var r = is();
            bs(function () {
              return ss(e, 1, r);
            }),
              tc(e, 1);
        }
      }),
      (On = function (e) {
        13 === e.tag && (ss(e, 134217728, is()), tc(e, 134217728));
      }),
      (In = function (e) {
        if (13 === e.tag) {
          var n = is(),
            t = us(e);
          ss(e, t, n), tc(e, t);
        }
      }),
      (Dn = function () {
        return Fn;
      }),
      (Un = function (e, n) {
        var t = Fn;
        try {
          return (Fn = e), n();
        } finally {
          Fn = t;
        }
      }),
      (Me = function (e, n, t) {
        switch (n) {
          case "input":
            if ((fe(e, t), (n = t.name), "radio" === t.type && null != n)) {
              for (t = e; t.parentNode; ) t = t.parentNode;
              for (
                t = t.querySelectorAll(
                  "input[name=" + JSON.stringify("" + n) + '][type="radio"]'
                ),
                  n = 0;
                n < t.length;
                n++
              ) {
                var r = t[n];
                if (r !== e && r.form === e.form) {
                  var l = Ll(r);
                  if (!l) throw Error(y(90));
                  oe(r), fe(r, l);
                }
              }
            }
            break;
          case "textarea":
            ye(e, t);
            break;
          case "select":
            null != (n = t.value) && me(e, !!t.multiple, n, !1);
        }
      }),
      (We = ys),
      (qe = bs);
    var cc = { usingClientEntryPoint: !1, Events: [zl, jl, Ll, Ue, Ae, ys] },
      fc = {
        findFiberByHostInstance: Pl,
        bundleType: 0,
        version: "18.1.0",
        rendererPackageName: "react-dom",
      },
      dc = {
        bundleType: fc.bundleType,
        version: fc.version,
        rendererPackageName: fc.rendererPackageName,
        rendererConfig: fc.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: F.ReactCurrentDispatcher,
        findHostInstanceByFiber: function (e) {
          return null === (e = ln(e)) ? null : e.stateNode;
        },
        findFiberByHostInstance:
          fc.findFiberByHostInstance ||
          function () {
            return null;
          },
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.1.0-next-22edb9f77-20220426",
      };
    if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
      var pc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!pc.isDisabled && pc.supportsFiber)
        try {
          (yn = pc.inject(dc)), (bn = pc);
        } catch (Se) {}
    }
    (r = cc),
      (l = function (e, n) {
        var t =
          2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
        if (!oc(n)) throw Error(y(200));
        return Xs(e, n, null, t);
      }),
      (o = function (e, n) {
        if (!oc(e)) throw Error(y(299));
        var t = !1,
          r = "",
          l = rc;
        return (
          null != n &&
            (!0 === n.unstable_strictMode && (t = !0),
            void 0 !== n.identifierPrefix && (r = n.identifierPrefix),
            void 0 !== n.onRecoverableError && (l = n.onRecoverableError)),
          (n = Ys(e, 1, !1, null, 0, t, 0, r, l)),
          (e[_l] = n.current),
          Jr(8 === e.nodeType ? e.parentNode : e),
          new lc(n)
        );
      }),
      (i = function (e) {
        if (null == e) return null;
        if (1 === e.nodeType) return e;
        var n = e._reactInternals;
        if (void 0 === n) {
          if ("function" == typeof e.render) throw Error(y(188));
          throw ((e = Object.keys(e).join(",")), Error(y(268, e)));
        }
        return (e = null === (e = ln(n)) ? null : e.stateNode);
      }),
      (u = function (e) {
        return bs(e);
      }),
      (s = function (e, n, t) {
        if (!ic(n)) throw Error(y(200));
        return sc(null, e, n, !0, t);
      }),
      (c = function (e, n, t) {
        if (!oc(e)) throw Error(y(405));
        var r = (null != t && t.hydratedSources) || null,
          l = !1,
          a = "",
          o = rc;
        if (
          (null != t &&
            (!0 === t.unstable_strictMode && (l = !0),
            void 0 !== t.identifierPrefix && (a = t.identifierPrefix),
            void 0 !== t.onRecoverableError && (o = t.onRecoverableError)),
          (n = Js(n, null, e, 1, null != t ? t : null, l, 0, a, o)),
          (e[_l] = n.current),
          Jr(e),
          r)
        )
          for (e = 0; e < r.length; e++)
            (l = (l = (t = r[e])._getVersion)(t._source)),
              null == n.mutableSourceEagerHydrationData
                ? (n.mutableSourceEagerHydrationData = [t, l])
                : n.mutableSourceEagerHydrationData.push(t, l);
        return new ac(n);
      }),
      (f = function (e, n, t) {
        if (!ic(n)) throw Error(y(200));
        return sc(null, e, n, !1, t);
      }),
      (d = function (e) {
        if (!ic(e)) throw Error(y(40));
        return (
          !!e._reactRootContainer &&
          (bs(function () {
            sc(null, null, e, !1, function () {
              (e._reactRootContainer = null), (e[_l] = null);
            });
          }),
          !0)
        );
      }),
      (p = ys),
      (h = function (e, n, t, r) {
        if (!ic(t)) throw Error(y(200));
        if (null == e || void 0 === e._reactInternals) throw Error(y(38));
        return sc(e, n, t, !1, r);
      }),
      (m = "18.1.0-next-22edb9f77-20220426");
  }),
  a.register("fO90s", function (e, n) {
    e.exports = a("gcnCG");
  }),
  a.register("gcnCG", function (n, t) {
    var r, l, a, o, i, u, s, c, f, d, p, h, m, g, v, y, b, w, k;
    function x(e, n) {
      var t = e.length;
      e.push(n);
      e: for (; 0 < t; ) {
        var r = (t - 1) >>> 1,
          l = e[r];
        if (!(0 < E(l, n))) break e;
        (e[r] = n), (e[t] = l), (t = r);
      }
    }
    function S(e) {
      return 0 === e.length ? null : e[0];
    }
    function _(e) {
      if (0 === e.length) return null;
      var n = e[0],
        t = e.pop();
      if (t !== n) {
        e[0] = t;
        e: for (var r = 0, l = e.length, a = l >>> 1; r < a; ) {
          var o = 2 * (r + 1) - 1,
            i = e[o],
            u = o + 1,
            s = e[u];
          if (0 > E(i, t))
            u < l && 0 > E(s, i)
              ? ((e[r] = s), (e[u] = t), (r = u))
              : ((e[r] = i), (e[o] = t), (r = o));
          else {
            if (!(u < l && 0 > E(s, t))) break e;
            (e[r] = s), (e[u] = t), (r = u);
          }
        }
      }
      return n;
    }
    function E(e, n) {
      var t = e.sortIndex - n.sortIndex;
      return 0 !== t ? t : e.id - n.id;
    }
    if (
      (e(
        n.exports,
        "unstable_now",
        () => r,
        (e) => (r = e)
      ),
      e(
        n.exports,
        "unstable_IdlePriority",
        () => l,
        (e) => (l = e)
      ),
      e(
        n.exports,
        "unstable_ImmediatePriority",
        () => a,
        (e) => (a = e)
      ),
      e(
        n.exports,
        "unstable_LowPriority",
        () => o,
        (e) => (o = e)
      ),
      e(
        n.exports,
        "unstable_NormalPriority",
        () => i,
        (e) => (i = e)
      ),
      e(
        n.exports,
        "unstable_Profiling",
        () => u,
        (e) => (u = e)
      ),
      e(
        n.exports,
        "unstable_UserBlockingPriority",
        () => s,
        (e) => (s = e)
      ),
      e(
        n.exports,
        "unstable_cancelCallback",
        () => c,
        (e) => (c = e)
      ),
      e(
        n.exports,
        "unstable_continueExecution",
        () => f,
        (e) => (f = e)
      ),
      e(
        n.exports,
        "unstable_forceFrameRate",
        () => d,
        (e) => (d = e)
      ),
      e(
        n.exports,
        "unstable_getCurrentPriorityLevel",
        () => p,
        (e) => (p = e)
      ),
      e(
        n.exports,
        "unstable_getFirstCallbackNode",
        () => h,
        (e) => (h = e)
      ),
      e(
        n.exports,
        "unstable_next",
        () => m,
        (e) => (m = e)
      ),
      e(
        n.exports,
        "unstable_pauseExecution",
        () => g,
        (e) => (g = e)
      ),
      e(
        n.exports,
        "unstable_requestPaint",
        () => v,
        (e) => (v = e)
      ),
      e(
        n.exports,
        "unstable_runWithPriority",
        () => y,
        (e) => (y = e)
      ),
      e(
        n.exports,
        "unstable_scheduleCallback",
        () => b,
        (e) => (b = e)
      ),
      e(
        n.exports,
        "unstable_shouldYield",
        () => w,
        (e) => (w = e)
      ),
      e(
        n.exports,
        "unstable_wrapCallback",
        () => k,
        (e) => (k = e)
      ),
      "object" == typeof performance && "function" == typeof performance.now)
    ) {
      var N = performance;
      r = function () {
        return N.now();
      };
    } else {
      var C = Date,
        P = C.now();
      r = function () {
        return C.now() - P;
      };
    }
    var z = [],
      j = [],
      L = 1,
      T = null,
      F = 3,
      R = !1,
      M = !1,
      O = !1,
      I = "function" == typeof setTimeout ? setTimeout : null,
      D = "function" == typeof clearTimeout ? clearTimeout : null,
      U = "undefined" != typeof setImmediate ? setImmediate : null;
    function A(e) {
      for (var n = S(j); null !== n; ) {
        if (null === n.callback) _(j);
        else {
          if (!(n.startTime <= e)) break;
          _(j), (n.sortIndex = n.expirationTime), x(z, n);
        }
        n = S(j);
      }
    }
    function W(e) {
      if (((O = !1), A(e), !M))
        if (null !== S(z)) (M = !0), Z(q);
        else {
          var n = S(j);
          null !== n && ee(W, n.startTime - e);
        }
    }
    function q(e, n) {
      (M = !1), O && ((O = !1), D(B), (B = -1)), (R = !0);
      var t = F;
      try {
        for (
          A(n), T = S(z);
          null !== T && (!(T.expirationTime > n) || (e && !Y()));

        ) {
          var l = T.callback;
          if ("function" == typeof l) {
            (T.callback = null), (F = T.priorityLevel);
            var a = l(T.expirationTime <= n);
            (n = r()),
              "function" == typeof a ? (T.callback = a) : T === S(z) && _(z),
              A(n);
          } else _(z);
          T = S(z);
        }
        if (null !== T) var o = !0;
        else {
          var i = S(j);
          null !== i && ee(W, i.startTime - n), (o = !1);
        }
        return o;
      } finally {
        (T = null), (F = t), (R = !1);
      }
    }
    "undefined" != typeof navigator &&
      void 0 !== navigator.scheduling &&
      void 0 !== navigator.scheduling.isInputPending &&
      navigator.scheduling.isInputPending.bind(navigator.scheduling);
    var $,
      H = !1,
      V = null,
      B = -1,
      Q = 5,
      K = -1;
    function Y() {
      return !(r() - K < Q);
    }
    function X() {
      if (null !== V) {
        var e = r();
        K = e;
        var n = !0;
        try {
          n = V(!0, e);
        } finally {
          n ? $() : ((H = !1), (V = null));
        }
      } else H = !1;
    }
    if ("function" == typeof U)
      $ = function () {
        U(X);
      };
    else if ("undefined" != typeof MessageChannel) {
      var G = new MessageChannel(),
        J = G.port2;
      (G.port1.onmessage = X),
        ($ = function () {
          J.postMessage(null);
        });
    } else
      $ = function () {
        I(X, 0);
      };
    function Z(e) {
      (V = e), H || ((H = !0), $());
    }
    function ee(e, n) {
      B = I(function () {
        e(r());
      }, n);
    }
    (l = 5),
      (a = 1),
      (o = 4),
      (i = 3),
      (u = null),
      (s = 2),
      (c = function (e) {
        e.callback = null;
      }),
      (f = function () {
        M || R || ((M = !0), Z(q));
      }),
      (d = function (e) {
        0 > e || 125 < e
          ? console.error(
              "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
            )
          : (Q = 0 < e ? Math.floor(1e3 / e) : 5);
      }),
      (p = function () {
        return F;
      }),
      (h = function () {
        return S(z);
      }),
      (m = function (e) {
        switch (F) {
          case 1:
          case 2:
          case 3:
            var n = 3;
            break;
          default:
            n = F;
        }
        var t = F;
        F = n;
        try {
          return e();
        } finally {
          F = t;
        }
      }),
      (g = function () {}),
      (v = function () {}),
      (y = function (e, n) {
        switch (e) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            e = 3;
        }
        var t = F;
        F = e;
        try {
          return n();
        } finally {
          F = t;
        }
      }),
      (b = function (e, n, t) {
        var l = r();
        switch (
          ("object" == typeof t && null !== t
            ? (t = "number" == typeof (t = t.delay) && 0 < t ? l + t : l)
            : (t = l),
          e)
        ) {
          case 1:
            var a = -1;
            break;
          case 2:
            a = 250;
            break;
          case 5:
            a = 1073741823;
            break;
          case 4:
            a = 1e4;
            break;
          default:
            a = 5e3;
        }
        return (
          (e = {
            id: L++,
            callback: n,
            priorityLevel: e,
            startTime: t,
            expirationTime: (a = t + a),
            sortIndex: -1,
          }),
          t > l
            ? ((e.sortIndex = t),
              x(j, e),
              null === S(z) &&
                e === S(j) &&
                (O ? (D(B), (B = -1)) : (O = !0), ee(W, t - l)))
            : ((e.sortIndex = a), x(z, e), M || R || ((M = !0), Z(q))),
          e
        );
      }),
      (w = Y),
      (k = function (e) {
        var n = F;
        return function () {
          var t = F;
          F = n;
          try {
            return e.apply(this, arguments);
          } finally {
            F = t;
          }
        };
      });
  }),
  a("27Lyk").register(
    JSON.parse(
      '{"6qxZM":"index.2dc21d80.js","jkw1y":"nodeschool-sf-hexagon.a368f037.svg"}'
    )
  );
var o, i;
(o = a("1b2ls")), a("acw62");
var u;
!(function e() {
  if (
    "undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
    "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
    } catch (e) {
      console.error(e);
    }
})(),
  (i = (u = a("Xw6Mv")).createRoot),
  u.hydrateRoot;
var s;
s = new URL(a("27Lyk").resolve("jkw1y"), import.meta.url).toString();
var c = ({ event: e }) => {
  const {
    dayOfTheWeek: t,
    date: r,
    time: l,
    address: a,
    addressUrlSafe: i,
    mentorsUrl: u,
    ticketsUrl: c,
  } = e;
  return o.jsxs("header", {
    id: "header",
    className: "header",
    children: [
      o.jsx("a", {
        className: "nodeschool-sf-love",
        href: "https://nodeschool.io/oakland",
        children: o.jsx("strong", {
          className: "strong--alt",
          children: "We ❤️ NodeSchool Oakland!",
        }),
      }),
      o.jsxs("div", {
        className: "header__content section__content",
        children: [
          o.jsxs("div", {
            className: "header__identification",
            children: [
              o.jsx("img", {
                id: "logo",
                className: "header__logo",
                alt: "NodeSchool SF Logo",
                src: n(s),
              }),
              o.jsxs("div", {
                className: "header__logo-text",
                children: [
                  o.jsx("div", {
                    className: "header__logo-text__nodeschool",
                    children: "NodeSchool",
                  }),
                  o.jsx("div", {
                    className: "header__logo-text__sf",
                    children: "San Francisco",
                  }),
                ],
              }),
              o.jsxs("nav", {
                className: "header__social-links",
                children: [
                  o.jsx("a", {
                    href: "https://twitter.com/nodeschoolsf",
                    children: o.jsx("i", { className: "fab fa-twitter" }),
                  }),
                  " ",
                  o.jsx("a", {
                    href: "https://github.com/nodeschool/sanfrancisco",
                    children: o.jsx("i", { className: "fab fa-github" }),
                  }),
                  " ",
                  o.jsx("a", {
                    href: "https://youtube.com/NodeSchoolSF",
                    children: o.jsx("i", { className: "fab fa-youtube" }),
                  }),
                  " ",
                  o.jsx("a", {
                    href: "https://discord.gg/2NS3MSxZa8",
                    children: o.jsx("i", { className: "fab fa-discord" }),
                  }),
                  " ",
                  o.jsx("a", {
                    href: "https://meetup.com/sfnodeschool/",
                    children: o.jsx("i", { className: "fab fa-meetup" }),
                  }),
                ],
              }),
            ],
          }),
          o.jsxs("div", {
            className: "header__introduction",
            children: [
              o.jsx("h1", {
                className: "header__introduction__heading",
                children: "We Help You Learn JavaScript",
              }),
              o.jsxs("p", {
                className: "header__introduction__body",
                children: [
                  o.jsx("strong", { children: "NodeSchool SF" }),
                  " is a monthly meetup dedicated to helping people learn JavaScript. We help people of all skill levels–from beginners to experts–discover what is possible with JavaScript. Bring yourself, your computer, and the desire to learn to our next event!",
                ],
              }),
            ],
          }),
          o.jsxs("div", {
            className: "next-event",
            children: [
              o.jsxs("div", {
                className: "next-event__description",
                children: [
                  o.jsxs("h2", {
                    className: "next-event__heading",
                    children: ["Our Next Event is on ", r],
                  }),
                  o.jsxs("ul", {
                    className: "next-event__info",
                    children: [
                      o.jsxs("li", {
                        className: "next-event__info__item",
                        children: [
                          o.jsx("strong", {
                            className: "strong--alt",
                            children: "When?",
                          }),
                          " ",
                          t,
                          ",",
                          " ",
                          r,
                          " from ",
                          l,
                        ],
                      }),
                      o.jsxs("li", {
                        className: "next-event__info__item",
                        children: [
                          o.jsx("strong", {
                            className: "strong--alt",
                            children: "Where?",
                          }),
                          " ",
                          a,
                          " -",
                          " ",
                          o.jsxs("span", {
                            children: [
                              "[",
                              o.jsx("a", {
                                href: `http://maps.google.com/?q=${i}`,
                                children: "map",
                              }),
                              "]",
                            ],
                          }),
                        ],
                      }),
                      o.jsxs("li", {
                        className: "next-event__info__item",
                        children: [
                          o.jsx("strong", {
                            className: "strong--alt",
                            children: "What?",
                          }),
                          " Learning, mentoring, JS bffs, and pizza 🍕",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              o.jsxs("nav", {
                className: "next-event__links",
                children: [
                  o.jsxs("a", {
                    className:
                      "next-event__links__learner next-event__links__link button",
                    href: c,
                    children: ["Sign up as a Learner", " "],
                  }),
                  o.jsx("a", {
                    className:
                      "next-event__links__mentor next-event__links__link button",
                    href: u,
                    children: "Sign up as a Mentor",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
};
var f = () =>
  o.jsx("section", {
    id: "focused-session",
    className: "focused section hidden",
    children: o.jsxs("div", {
      className: "focused__content section__content",
      children: [
        o.jsx("h2", {
          className: "focused__heading",
          children: "Upcoming Focused Session",
        }),
        o.jsx("h3", {
          className: "focused__subheading",
          children: "An intro to using SQL databases to build web apps",
        }),
        o.jsxs("p", {
          children: [
            "Kevin Qi (",
            o.jsx("a", {
              href: "https://twitter.com/kevinsqi",
              children: "@kevinsqi",
            }),
            ") will be talking about how to use a relational database like PostgreSQL or MySQL to store data for web apps. Using a hypothetical e-commerce site as a working example, he will cover:",
          ],
        }),
        o.jsxs("ul", {
          children: [
            o.jsx("li", {
              children:
                "Designing tables and relationships between them (primary and foreign keys, one-to-many and many-to-many relationships)",
            }),
            o.jsx("li", {
              children:
                "Creating those tables and inserting data (CREATE TABLE, INSERT)",
            }),
            o.jsx("li", {
              children:
                "Querying them to fetch data for your app (SELECT, JOINs).",
            }),
          ],
        }),
        o.jsx("p", {
          children:
            "After covering relational database concepts with raw SQL, he will briefly go over how to work with SQL databases in a Node.js app using the Knex.js library.",
        }),
      ],
    }),
  });
var d = () =>
  o.jsx("section", {
    id: "faq",
    className: "faq section",
    children: o.jsxs("div", {
      className: "faq__content section__content",
      children: [
        o.jsx("h2", {
          className: "faq__heading",
          children: "Frequently Asked Questions",
        }),
        o.jsxs("dl", {
          className: "faq__questions",
          children: [
            o.jsx("dt", {
              className: "faq__question",
              children: o.jsx("h4", {
                className: "faq__subheading",
                children: "What is the status of NodeSchoolSF?",
              }),
            }),
            o.jsx("dd", {
              className: "faq__answer",
              children:
                "We're back! 🎉 - At the moment, we are hosting live events in a limited capacity according to safety and health guidelines from the city and the venues. For more details, please check the event page linked above.",
            }),
            o.jsx("dt", {
              className: "faq__question",
              children: o.jsx("h4", {
                className: "faq__subheading",
                children: "What do I need to bring?",
              }),
            }),
            o.jsx("dd", {
              className: "faq__answer",
              children:
                "Bring a laptop, a desire to learn, and all your friendship!",
            }),
            o.jsx("dt", {
              className: "faq__question",
              children: o.jsx("h4", {
                className: "faq__subheading",
                children: "Who organizes this event?",
              }),
            }),
            o.jsxs("dd", {
              className: "faq__answer",
              children: [
                "Fernando Larrañaga (",
                o.jsx("a", {
                  href: "https://twitter.com/xabadu",
                  children: "@xabadu",
                }),
                "), and Thomas Hunter II (",
                o.jsx("a", {
                  href: "https://twitter.com/tlhunter",
                  children: "@tlhunter",
                }),
                ") run the SF chapter.",
              ],
            }),
            o.jsx("dt", {
              className: "faq__question",
              children: o.jsx("h4", {
                className: "faq__subheading",
                children: "What actually happens at a NodeSchool SF event?",
              }),
            }),
            o.jsxs("dd", {
              className: "faq__answer",
              children: [
                "NodeSchool SF events are an opportunity to hang out with other learners and mentors in a low stress, encouraging environment. Instead of the usual follow-along, presentation-driven workshops, learners can either work on self-paced",
                " ",
                o.jsx("a", {
                  href: "https://nodeschool.io/",
                  children: "workshoppers",
                }),
                " or hack on their own side projects. There is not a structured “curriculum” which must be followed.",
                o.jsx("br", {}),
                o.jsx("br", {}),
                "A typical event follows this schedule:",
                o.jsxs("ul", {
                  className: "schedule",
                  children: [
                    o.jsxs("li", {
                      className: "schedule__item",
                      children: [
                        o.jsx("strong", { children: "1:00" }),
                        " - Doors open",
                      ],
                    }),
                    o.jsxs("li", {
                      className: "schedule__item",
                      children: [
                        o.jsx("strong", { children: "1:15" }),
                        " - Introduction and opening announcements",
                      ],
                    }),
                    o.jsxs("li", {
                      className: "schedule__item",
                      children: [
                        o.jsx("strong", { children: "1:30-5:00" }),
                        " - Learning/mentoring",
                      ],
                    }),
                    o.jsxs("li", {
                      className: "schedule__item",
                      children: [
                        o.jsx("strong", { children: "3:00ish" }),
                        " - Pizza! 🍕",
                      ],
                    }),
                    o.jsxs("li", {
                      className: "schedule__item",
                      children: [
                        o.jsx("strong", { children: "5:00" }),
                        " - Event ends",
                      ],
                    }),
                  ],
                }),
              ],
            }),
            o.jsx("dt", {
              className: "faq__question",
              children: o.jsx("h4", {
                className: "faq__subheading",
                children: "What is a Focused Session?",
              }),
            }),
            o.jsx("dd", {
              className: "faq__answer",
              children:
                "Focused Sessions happen during our NodeSchool events. While our general event is free-form and self-directed, our Focused Sessions are more of a lecture-style format led by a mentor on special topics. We don't always have Focused Sessions, so keep an eye on our website and Twitter for announcements!",
            }),
            o.jsx("dt", {
              className: "faq__question",
              children: o.jsx("h4", {
                className: "faq__subheading",
                children: "How much does it cost to attend?",
              }),
            }),
            o.jsxs("dd", {
              className: "faq__answer",
              children: [
                "NodeSchool SF is ",
                o.jsx("strong", { children: "free" }),
                "! And",
                " ",
                o.jsx("a", {
                  href: "https://github.com/nodeschool/sanfrancisco",
                  children: "open source",
                }),
                "!",
              ],
            }),
            o.jsx("dt", {
              className: "faq__question",
              children: o.jsx("h4", {
                className: "faq__subheading",
                children: "How do I become a mentor?",
              }),
            }),
            o.jsxs("dd", {
              className: "faq__answer",
              children: [
                "We're always looking for people to volunteer to be mentors! We ask that prospective mentors:",
                o.jsxs("ul", {
                  children: [
                    o.jsxs("li", {
                      children: [
                        "Have already completed the",
                        " ",
                        o.jsx("a", {
                          href: "http://nodeschool.io/#workshopper-list",
                          children: "core NodeSchool workshoppers",
                        }),
                        " ",
                        "before the event.",
                      ],
                    }),
                    o.jsx("ul", {
                      children: o.jsx("li", {
                        children:
                          "Having also completed some elective workshoppers is a great bonus.",
                      }),
                    }),
                    o.jsxs("li", {
                      children: [
                        "Review the",
                        " ",
                        o.jsx("a", {
                          href: "https://github.com/nodeschool/organizers/wiki/Event-Mentor-Best-Practices",
                          children: "Mentor Best Practices",
                        }),
                        " ",
                        "wiki page.",
                      ],
                    }),
                    o.jsx("li", {
                      children:
                        "Arrive 30 minutes early (12:30p) so we can get setup and have our mentor meeting.",
                    }),
                    o.jsxs("li", {
                      children: [
                        "Sign up on",
                        " ",
                        o.jsx("a", {
                          href: "https://github.com/nodeschool/sanfrancisco/issues/297",
                          children: "the event's GitHub issue",
                        }),
                        "!",
                      ],
                    }),
                  ],
                }),
              ],
            }),
            o.jsx("dt", {
              className: "faq__question",
              children: o.jsx("h4", {
                className: "faq__subheading",
                children: "How do I sponsor an event?",
              }),
            }),
            o.jsxs("dd", {
              className: "faq__answer",
              children: [
                "We are always looking for more locations to host a NodeSchool event! These are a great way to get many beginner and intermediate level Node.js engineers, as well as advanced mentors, in your office. We are looking for the following criteria when it comes to hosts:",
                o.jsxs("ul", {
                  children: [
                    o.jsxs("li", {
                      children: [
                        "The ability to provide a space from 1:00 to 5:00 on a",
                        " ",
                        o.jsx("strong", { children: "Saturday" }),
                        ".",
                      ],
                    }),
                    o.jsx("li", {
                      children: "Comfortable seating for up to 50 people.",
                    }),
                    o.jsx("li", {
                      children:
                        "Cover the cost of food, which can range from $300 to $500 per event.",
                    }),
                    o.jsx("li", {
                      children:
                        "A company representative who will be willing to say a few words about your company.",
                    }),
                  ],
                }),
                "If you'd like to offer us a hosting location please tell us about your space via",
                " ",
                o.jsx("a", {
                  href: "https://github.com/nodeschool/sanfrancisco/issues/new",
                  children: "Github Issue",
                }),
                ".",
              ],
            }),
            o.jsx("dt", {
              className: "faq__question",
              children: o.jsx("h4", {
                className: "faq__subheading",
                children: "More questions?",
              }),
            }),
            o.jsxs("dd", {
              className: "faq__answer",
              children: [
                o.jsx("a", {
                  href: "https://github.com/nodeschool/sanfrancisco/issues",
                  children: "File an issue at our GitHub repo",
                }),
                " ",
                "and we'll answer as soon as possible.",
              ],
            }),
          ],
        }),
      ],
    }),
  });
var p = () =>
  o.jsx("section", {
    id: "code-of-conduct",
    className: "code-of-conduct section",
    children: o.jsxs("div", {
      className: "code-of-conduct__content section__content",
      children: [
        o.jsx("h2", { children: "Code of Conduct" }),
        o.jsxs("p", {
          children: [
            o.jsx("strong", { children: "NodeSchool SF" }),
            " is dedicated to providing a harassment-free event experience for everyone, regardless of gender, gender identity and expression, age, sexual orientation, disability, physical appearance, body size, race, ethnicity, religion (or lack thereof), or technology choices. We do not tolerate harassment of event participants in any form. Sexual language and imagery is not appropriate for any event venue, including talks, workshops, parties, Twitter and other online media. Event participants violating these rules may be sanctioned or expelled from the event at the discretion of the event organisers.",
          ],
        }),
        o.jsx("h3", {
          children: o.jsx("strong", { children: "NodeSchool SF" }),
        }),
        o.jsx("p", { children: "Organizers:" }),
        o.jsxs("ul", {
          children: [
            o.jsxs("li", {
              children: [
                "Fernando Larrañaga (",
                o.jsx("a", {
                  href: "https://twitter.com/xabadu",
                  children: "@xabadu",
                }),
                ")",
              ],
            }),
            o.jsxs("li", {
              children: [
                "Thomas Hunter II (",
                o.jsx("a", {
                  href: "https://twitter.com/tlhunter",
                  children: "@tlhunter",
                }),
                ")",
              ],
            }),
          ],
        }),
        o.jsx("p", { children: "Emeritus Organizers:" }),
        o.jsxs("ul", {
          children: [
            o.jsxs("li", {
              children: [
                "Reza Akhavan (",
                o.jsx("a", {
                  href: "https://twitter.com/jedireza",
                  children: "@jedireza",
                }),
                ")",
              ],
            }),
            o.jsxs("li", {
              children: [
                "Lydia Kats (",
                o.jsx("a", {
                  href: "https://twitter.com/llkats",
                  children: "@llkats",
                }),
                ")",
              ],
            }),
            o.jsxs("li", {
              children: [
                "Bryan Hughes (",
                o.jsx("a", {
                  href: "https://twitter.com/nebrius",
                  children: "@nebrius",
                }),
                ")",
              ],
            }),
          ],
        }),
        o.jsx("p", {
          children: o.jsx("strong", {
            children:
              "If you have questions or feedback about this Code of Conduct please contact one of the organizers.",
          }),
        }),
        o.jsxs("p", {
          children: [
            "The organizers of the above community adhere to the",
            " ",
            o.jsx("a", {
              href: "http://jsconf.com/codeofconduct.html",
              children: "JSConf Code of Conduct",
            }),
            ".",
          ],
        }),
      ],
    }),
  });
var h,
  m = () =>
    o.jsx("footer", {
      id: "attribution",
      className: "attribution section",
      children: o.jsxs("ul", {
        children: [
          o.jsxs("li", {
            children: [
              "Website gratefully forked from the",
              " ",
              o.jsx("a", {
                href: "https://nodeschool.io/oakland/",
                children: "fine folks at NodeSchool Oakland",
              }),
              ".",
            ],
          }),
          o.jsxs("li", {
            children: [
              "Fonts hosted by",
              " ",
              o.jsx("a", {
                href: "https://fonts.google.com/selection?selection.family=Montserrat|Raleway",
                children: "Google Fonts",
              }),
              ".",
            ],
          }),
        ],
      }),
    });
h = JSON.parse(
  '{"dayOfTheWeek":"Saturday","date":"May 21st","time":"1-5PM","address":"Microsoft Reactor, 680 Folsom St, Suite 145, San Francisco, CA 94107","addressUrlSafe":"680+Folsom+St,+San+Francisco,+CA+94107","mentorsUrl":"https://github.com/nodeschool/sanfrancisco/issues/297","ticketsUrl":"https://www.meetup.com/sfnodeschool/events/285872034"}'
);
const g = () =>
  o.jsxs("div", {
    className: "site",
    children: [
      o.jsx(c, { event: n(h) }),
      o.jsx(f, {}),
      o.jsx(d, {}),
      o.jsx(p, {}),
      o.jsx(m, {}),
    ],
  });
i(document.querySelector("#root")).render(o.jsx(g, {}));
//# sourceMappingURL=index.2dc21d80.js.map
