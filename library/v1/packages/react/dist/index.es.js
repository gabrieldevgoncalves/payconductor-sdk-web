var q = Object.defineProperty;
var $ = (e, n, t) => n in e ? q(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t;
var S = (e, n, t) => $(e, typeof n != "symbol" ? n + "" : n, t);
import { jsx as D, jsxs as W } from "react/jsx-runtime";
import { useState as T, useEffect as K, useRef as J } from "react";
const Y = "https://iframe.payconductor.ai/v1", j = "http://localhost:5175/v1", X = 3e5, Z = "600px";
var Q = /* @__PURE__ */ ((e) => (e.Pix = "Pix", e.CreditCard = "CreditCard", e.DebitCard = "DebitCard", e.BankSlip = "BankSlip", e.Crypto = "Crypto", e.ApplePay = "ApplePay", e.NuPay = "NuPay", e.PicPay = "PicPay", e.AmazonPay = "AmazonPay", e.SepaDebit = "SepaDebit", e.GooglePay = "GooglePay", e))(Q || {}), ee = /* @__PURE__ */ ((e) => (e.Grid = "grid", e.Vertical = "vertical", e.Horizontal = "horizontal", e))(ee || {}), te = /* @__PURE__ */ ((e) => (e.Succeeded = "succeeded", e.Pending = "pending", e.Failed = "failed", e))(te || {}), ne = /* @__PURE__ */ ((e) => (e.ThreeDsAwaitingChallenge = "ThreeDsAwaitingChallenge", e))(ne || {}), ae = /* @__PURE__ */ ((e) => (e.Authenticated = "Authenticated", e.NotAuthenticated = "NotAuthenticated", e.NeedChallenge = "NeedChallenge", e))(ae || {}), ie = /* @__PURE__ */ ((e) => (e.Pending = "Pending", e.Authenticated = "Authenticated", e.Failed = "Failed", e.NotEnrolled = "NotEnrolled", e))(ie || {}), G = /* @__PURE__ */ ((e) => (e.Cpf = "Cpf", e.Cnpj = "Cnpj", e))(G || {}), M = /* @__PURE__ */ ((e) => (e.Asaas = "Asaas", e.Sandbox = "Sandbox", e.SandboxSplit = "SandboxSplit", e.MercadoPago = "MercadoPago", e.NuPay = "NuPay", e.PicPay = "PicPay", e.Woovi = "Woovi", e.EfiBank = "EfiBank", e.BrasPag = "BrasPag", e.PagarMe = "PagarMe", e.BancoDoBrasil = "BancoDoBrasil", e.PagSeguro = "PagSeguro", e.Ebanx = "Ebanx", e.OnlyUp = "OnlyUp", e.Barte = "Barte", e.BarteSplit = "BarteSplit", e.PagSmileA55 = "PagSmileA55", e.Avantti = "Avantti", e.MonsterGateway = "MonsterGateway", e.SAC = "SAC", e.Lyra = "Lyra", e))(M || {}), re = /* @__PURE__ */ ((e) => (e.Visa = "Visa", e.Mastercard = "Mastercard", e.AmericanExpress = "AmericanExpress", e.DinersClub = "DinersClub", e.Discover = "Discover", e.JCB = "JCB", e.UnionPay = "UnionPay", e.Maestro = "Maestro", e.Mir = "Mir", e.Elo = "Elo", e.Hiper = "Hiper", e.Hipercard = "Hipercard", e.Verve = "Verve", e.Unknown = "Unknown", e))(re || {}), N = /* @__PURE__ */ ((e) => (e.Production = "Production", e.Sandbox = "Sandbox", e))(N || {}), oe = /* @__PURE__ */ ((e) => (e.USD = "USD", e.EUR = "EUR", e.BRL = "BRL", e.ARS = "ARS", e.CAD = "CAD", e.COP = "COP", e.GBP = "GBP", e.JPY = "JPY", e.MXN = "MXN", e.MZN = "MZN", e.CNY = "CNY", e.SAR = "SAR", e.ETH = "ETH", e.BNB = "BNB", e.BTC = "BTC", e.USDT = "USDT", e.USDC = "USDC", e.DOGE = "DOGE", e.SOL = "SOL", e))(oe || {}), se = /* @__PURE__ */ ((e) => (e.Android = "android", e.IOS = "ios", e.Web = "web", e.Chrome = "chrome", e.Safari = "safari", e))(se || {}), de = /* @__PURE__ */ ((e) => (e.Padding = "padding", e.Radius = "radius", e.Color = "color", e.Background = "background", e.Shadow = "shadow", e))(de || {}), I = /* @__PURE__ */ ((e) => (e.Init = "Init", e.Config = "Config", e.Update = "Update", e.ConfirmPayment = "ConfirmPayment", e.Validate = "Validate", e.Reset = "Reset", e))(I || {}), A = /* @__PURE__ */ ((e) => (e.Ready = "Ready", e.Error = "Error", e.CheckoutSessionCreated = "CheckoutSessionCreated", e.PaymentComplete = "PaymentComplete", e.PaymentFailed = "PaymentFailed", e.PaymentPending = "PaymentPending", e.ValidationError = "ValidationError", e.PaymentMethodSelected = "PaymentMethodSelected", e.Resize = "Resize", e.ThreeDSChallenge = "ThreeDSChallenge", e.ThreeDSComplete = "ThreeDSComplete", e.ThreeDSFailed = "ThreeDSFailed", e))(A || {}), ce = /* @__PURE__ */ ((e) => (e.InvalidClient = "InvalidClient", e.InvalidToken = "InvalidToken", e.NetworkError = "NetworkError", e.IframeNotReady = "IframeNotReady", e.PaymentDeclined = "PaymentDeclined", e.ValidationError = "ValidationError", e.Timeout = "Timeout", e))(ce || {});
const Xe = {
  primaryColor: "#0066ff",
  secondaryColor: "#5a6b7c",
  backgroundColor: "transparent",
  surfaceColor: "#f8fafc",
  textColor: "#0f172a",
  textSecondaryColor: "#64748b",
  errorColor: "#ef4444",
  successColor: "#22c55e",
  warningColor: "#f59e0b",
  borderColor: "#e2e8f0",
  disabledColor: "#cbd5e1",
  fontFamily: '"Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  fontSize: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem"
  },
  fontWeight: {
    normal: 400,
    medium: 500,
    bold: 600
  },
  lineHeight: "1.5",
  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px"
  },
  borderRadius: "8px",
  borderWidth: "1px",
  boxShadow: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
  boxShadowHover: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
  inputBackground: "#ffffff",
  inputBorderColor: "#cbd5e1",
  inputBorderRadius: "8px",
  inputHeight: "44px",
  inputPadding: "12px 16px",
  buttonHeight: "48px",
  buttonPadding: "16px 24px",
  buttonBorderRadius: "8px",
  transitionDuration: "0.2s",
  transitionTimingFunction: "ease"
}, le = typeof window < "u" && (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") && !window.location.search.includes("production"), ue = le ? j : Y, me = [j, Y], z = Z, he = X, P = {
  INIT: I.Init,
  CONFIG: I.Config,
  UPDATE: I.Update,
  CONFIRM_PAYMENT: I.ConfirmPayment,
  VALIDATE: I.Validate,
  RESET: I.Reset,
  READY: A.Ready,
  ERROR: A.Error,
  PAYMENT_COMPLETE: A.PaymentComplete,
  PAYMENT_FAILED: A.PaymentFailed,
  PAYMENT_PENDING: A.PaymentPending,
  VALIDATION_ERROR: A.ValidationError,
  PAYMENT_METHOD_SELECTED: A.PaymentMethodSelected,
  RESIZE: A.Resize
}, Ze = {
  INVALID_CLIENT: "InvalidClient",
  INVALID_TOKEN: "InvalidToken",
  NETWORK_ERROR: "NetworkError",
  IFRAME_NOT_READY: "IframeNotReady",
  PAYMENT_DECLINED: "PaymentDeclined",
  VALIDATION_ERROR: "ValidationError",
  TIMEOUT: "Timeout"
}, H = "payconductor-skeleton-style", fe = `
	@keyframes payconductor-shimmer {
	  0% { background-position: -200% 0; }
	  100% { background-position: 200% 0; }
	}
	.payconductor-skeleton {
	  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
	  background-size: 200% 100%;
	  animation: payconductor-shimmer 1.5s infinite linear;
	  border-radius: 4px;
	  width: 100%;
	}
`;
function ye(e) {
  const n = new URLSearchParams({
    publicKey: e.publicKey
  });
  return `${ue}?${n.toString()}`;
}
function we() {
  return crypto.randomUUID();
}
function Ee(e, n) {
  return n.some((t) => {
    try {
      return new URL(t).origin === e;
    } catch {
      return t === e;
    }
  });
}
function F() {
  return /* @__PURE__ */ new Map();
}
function _(e, n, t, a) {
  return new Promise((i, o) => {
    if (!e || !("contentWindow" in e)) {
      o(new Error("Iframe not defined"));
      return;
    }
    if (!(e != null && e.contentWindow)) {
      o(new Error("Iframe not ready"));
      return;
    }
    if (!n) {
      o(new Error("Pending requests not initialized"));
      return;
    }
    const d = we();
    n.set(d, {
      resolve: i,
      reject: o
    }), e.contentWindow.postMessage({
      type: t,
      data: a,
      requestId: d
    }, "*"), setTimeout(() => {
      n != null && n.has(d) && (n.delete(d), o(new Error("Request timeout")));
    }, he);
  });
}
function ge(e, n, t) {
  return _(e, n, P.CONFIRM_PAYMENT, t);
}
async function Pe(e, n, t) {
  return await ge(e, n, {
    orderId: t.orderId
  });
}
function be(e, n, t) {
  return _(e, n, P.VALIDATE, t);
}
function Ce(e, n) {
  return _(e, n, P.RESET);
}
function pe(e, n, t) {
  return _(e, n, P.CONFIG, t);
}
function Se(e, n, t) {
  return _(e, n, P.INIT, t);
}
function ve(e, n, t, a, i, o, d, s, r, c, g, w) {
  const h = e.data, {
    requestId: f,
    type: u,
    data: E,
    error: p
  } = h;
  if (u === P.READY) {
    if (a == null || a(), f && (n != null && n.has(f))) {
      const {
        resolve: v
      } = n.get(f);
      n.delete(f), v(E);
    }
    return;
  }
  if (Ee(e.origin, me)) {
    if (f && n && n.has(f)) {
      const {
        resolve: v,
        reject: U
      } = n.get(f);
      n.delete(f), p ? U(new Error(String(p.message))) : v(E);
      return;
    }
    if (u === P.ERROR) {
      t((p == null ? void 0 : p.message) || "Unknown error"), i == null || i(new Error(String(p == null ? void 0 : p.message)));
      return;
    }
    if (u === P.PAYMENT_COMPLETE) {
      E && typeof E == "object" && "status" in E && (o == null || o(E));
      return;
    }
    if (u === P.PAYMENT_FAILED) {
      E && typeof E == "object" && "status" in E && (d == null || d(E));
      return;
    }
    if (u === P.PAYMENT_PENDING) {
      E && typeof E == "object" && "status" in E && (s == null || s(E));
      return;
    }
    if (u === P.PAYMENT_METHOD_SELECTED) {
      E && typeof E == "object" && "paymentMethod" in E && (r == null || r(E.paymentMethod));
      return;
    }
    if (u !== P.RESIZE) {
      if (u === A.ThreeDSChallenge) {
        c == null || c();
        return;
      }
      if (u === A.ThreeDSComplete) {
        g == null || g();
        return;
      }
      if (u === A.ThreeDSFailed) {
        w == null || w();
        return;
      }
    }
  }
}
function Qe(e) {
  const [n, t] = T(
    () => !1
  ), [a, i] = T(() => null), [o, d] = T(
    () => ""
  ), [s, r] = T(() => null);
  return K(() => {
    const c = (...m) => {
      e.debug && console.log("[PayConductor]", ...m);
    }, g = ye({
      publicKey: e.publicKey
    });
    d(g), t(!0);
    const w = F();
    let h = !1;
    c("init", e.publicKey), c("iframeUrl", g);
    const f = () => {
      var b, l;
      const m = (l = (b = window.PayConductor) == null ? void 0 : b.frame) == null ? void 0 : l.iframe;
      if (m) {
        if (m instanceof HTMLIFrameElement) return m;
        if (typeof m == "object" && m !== null) {
          const y = m;
          if ("current" in y && y.current instanceof HTMLIFrameElement)
            return y.current;
          if ("value" in y && y.value instanceof HTMLIFrameElement)
            return y.value;
        }
        return m;
      }
      return document.querySelector(
        ".payconductor-element iframe"
      ) ?? void 0;
    }, u = {
      get iframe() {
        return document.querySelector(
          ".payconductor-element iframe"
        ) ?? null;
      },
      set iframe(m) {
      },
      iframeUrl: g,
      error: null
    }, E = {
      publicKey: e.publicKey,
      theme: e.theme,
      locale: e.locale,
      paymentMethods: e.paymentMethods,
      defaultPaymentMethod: e.defaultPaymentMethod
    }, p = {
      confirmPayment: (m) => {
        var l;
        c("→ CONFIRM_PAYMENT", {
          orderId: m.orderId
        });
        const b = f();
        return b != null && b.contentWindow && b.contentWindow.postMessage(
          {
            type: P.CONFIG,
            data: {
              publicKey: e.publicKey,
              orderId: m.orderId,
              theme: e.theme,
              locale: e.locale,
              paymentMethods: e.paymentMethods,
              defaultPaymentMethod: e.defaultPaymentMethod,
              showPaymentButtons: e.showPaymentButtons,
              nuPayConfig: e.nuPayConfig
            }
          },
          "*"
        ), E.orderId = m.orderId, (l = window.PayConductor) != null && l.config && (window.PayConductor.config.orderId = m.orderId), Pe(b, w, m);
      },
      validate: (m) => (c("→ VALIDATE", m), be(f(), w, m)),
      reset: () => (c("→ RESET"), Ce(f(), w)),
      getSelectedPaymentMethod: () => s
    };
    window.PayConductor = {
      frame: u,
      config: E,
      api: p,
      selectedPaymentMethod: s
    }, c("registered"), window.dispatchEvent(
      new CustomEvent("payconductor:registered", {
        detail: window.PayConductor
      })
    );
    const v = async () => {
      if (!h) {
        const m = f();
        if (!m) {
          c("→ CONFIG skipped: iframe not found");
          return;
        }
        h = !0, c("→ CONFIG", {
          theme: e.theme,
          locale: e.locale,
          paymentMethods: e.paymentMethods,
          defaultPaymentMethod: e.defaultPaymentMethod,
          showPaymentButtons: e.showPaymentButtons
        }), pe(m, w, {
          theme: e.theme,
          locale: e.locale,
          paymentMethods: e.paymentMethods,
          defaultPaymentMethod: e.defaultPaymentMethod,
          showPaymentButtons: e.showPaymentButtons,
          nuPayConfig: e.nuPayConfig
        });
      }
    }, U = (m) => {
      var b;
      (b = m.data) != null && b.type && c("←", m.data.type, m.data.data ?? ""), ve(
        m,
        w,
        (l) => {
          var y;
          i(l), u.error = l, (y = window.PayConductor) != null && y.frame && (window.PayConductor.frame.error = l);
        },
        () => {
          var l;
          (l = e.onReady) == null || l.call(e), v();
        },
        (l) => {
          var y;
          (y = e.onError) == null || y.call(e, l);
        },
        (l) => {
          var y;
          (y = e.onPaymentComplete) == null || y.call(e, l);
        },
        (l) => {
          var y;
          (y = e.onPaymentFailed) == null || y.call(e, l);
        },
        (l) => {
          var y;
          (y = e.onPaymentPending) == null || y.call(e, l);
        },
        (l) => {
          var y;
          r(l), window.PayConductor && (window.PayConductor.selectedPaymentMethod = l), (y = e.onPaymentMethodSelected) == null || y.call(e, l);
        },
        () => {
          var l;
          (l = e.onThreeDSChallenge) == null || l.call(e);
        },
        () => {
          var l;
          (l = e.onThreeDSComplete) == null || l.call(e);
        },
        () => {
          var l;
          (l = e.onThreeDSFailed) == null || l.call(e);
        }
      );
    };
    window.addEventListener("message", U);
    const V = () => {
      var b, l, y;
      const m = f();
      if (!m) return !1;
      try {
        if ((((b = m.contentDocument) == null ? void 0 : b.readyState) ?? ((y = (l = m.contentWindow) == null ? void 0 : l.document) == null ? void 0 : y.readyState)) === "complete")
          return v(), !0;
      } catch {
      }
      return !1;
    }, B = () => {
      if (V()) return;
      const m = f();
      if (m) {
        m.addEventListener("load", () => v(), {
          once: !0
        });
        return;
      }
      setTimeout(B, 50);
    };
    B();
  }, []), /* @__PURE__ */ D(
    "div",
    {
      className: "payconductor",
      id: "payconductor",
      style: {
        display: "contents"
      },
      children: e.children
    }
  );
}
function et(e) {
  const n = J(null), [t, a] = T(() => ""), [i, o] = T(() => !1), [d, s] = T(() => "");
  return K(() => {
    if (typeof document < "u" && !document.getElementById(H)) {
      const h = document.createElement("style");
      h.id = H, h.textContent = fe, document.head.appendChild(h);
    }
    const r = (h) => {
      h != null && h.frame && (a(h.frame.iframeUrl || ""), o(!0), console.log("init", {
        PayConductor: window.PayConductor
      }));
    }, c = typeof window < "u" ? window.PayConductor : null;
    if (c)
      r(c);
    else {
      const h = (f) => {
        r(f.detail), window.removeEventListener("payconductor:registered", h);
      };
      window.addEventListener("payconductor:registered", h);
    }
    let g = !1;
    const w = (h) => {
      var f, u, E, p;
      if (((f = h.data) == null ? void 0 : f.type) === P.RESIZE && ((E = (u = h.data) == null ? void 0 : u.data) != null && E.height) && s(h.data.data.height + "px"), ((p = h.data) == null ? void 0 : p.type) === P.READY && e.height && !g) {
        g = !0;
        const v = document.querySelector(
          ".payconductor-element iframe"
        );
        v != null && v.contentWindow && v.contentWindow.postMessage(
          {
            type: P.CONFIG,
            data: {
              height: e.height
            },
            requestId: "element-height"
          },
          "*"
        );
      }
    };
    return window.addEventListener("message", w), () => window.removeEventListener("message", w);
  }, []), /* @__PURE__ */ W(
    "div",
    {
      className: "payconductor-element",
      style: {
        width: "100%"
      },
      children: [
        i ? null : /* @__PURE__ */ D(
          "div",
          {
            className: "payconductor-skeleton",
            style: {
              height: e.height || z
            }
          }
        ),
        i && t ? /* @__PURE__ */ D(
          "iframe",
          {
            allow: "payment",
            title: "PayConductor",
            ref: n,
            src: t,
            style: {
              width: "100%",
              height: e.height || d || z,
              border: "none"
            }
          }
        ) : null
      ]
    }
  );
}
function tt(e) {
  const [n, t] = T(() => !1);
  return K(() => {
    const a = () => {
      t(!0);
    }, i = () => {
      t(!1);
    };
    return window.addEventListener("payconductor:3ds:show", a), window.addEventListener("payconductor:3ds:hide", i), typeof window < "u" && (window.PayConductor3DS = {
      container: () => document.getElementById("payconductor-3ds-container"),
      show: a,
      hide: i
    }, window.dispatchEvent(new CustomEvent("payconductor:3ds:registered"))), () => {
      window.removeEventListener("payconductor:3ds:show", a), window.removeEventListener("payconductor:3ds:hide", i), window.PayConductor3DS = null;
    };
  }, []), /* @__PURE__ */ D(
    "div",
    {
      className: "payconductor-three-ds",
      id: "payconductor-3ds-container",
      style: {
        width: "100%",
        display: n ? "block" : "none",
        minHeight: n ? e.height || "600px" : "0"
      }
    }
  );
}
function nt() {
  const e = typeof window < "u" ? window.PayConductor : null, n = e != null && e.config ? {
    publicKey: e.config.publicKey,
    orderId: e.config.orderId,
    theme: e.config.theme,
    locale: e.config.locale
  } : {}, t = e != null && e.frame ? {
    iframe: e.frame.iframe,
    error: e.frame.error
  } : {
    iframe: null,
    error: null
  };
  return {
    ...n,
    ...t
  };
}
function L(e) {
  var n;
  if ((n = e == null ? void 0 : e.frame) != null && n.iframe) {
    const t = e.frame.iframe;
    if (t instanceof HTMLIFrameElement) return t;
    if (t && typeof t == "object") {
      if ("current" in t) {
        const a = t.current;
        if (a instanceof HTMLIFrameElement) return a;
      }
      if ("value" in t) {
        const a = t.value;
        if (a instanceof HTMLIFrameElement) return a;
      }
    }
  }
  return document.querySelector(".payconductor-element iframe") ?? null;
}
function at() {
  const e = () => typeof window < "u" ? window.PayConductor : null, n = (t, a) => {
    const i = e();
    if (!i) return;
    const o = L(i);
    o != null && o.contentWindow && o.contentWindow.postMessage({
      type: t,
      data: a
    }, "*");
  };
  return {
    init: async (t) => {
      const a = L(e()), i = F();
      return Se(a || void 0, i, t);
    },
    confirmPayment: async (t) => {
      if (!t.orderId)
        throw new Error("Order ID is required");
      const a = e();
      if (!(a != null && a.api)) throw new Error("PayConductor not initialized");
      return a.api.confirmPayment(t);
    },
    validate: (t) => {
      const a = e();
      return a ? a.api.validate(t) : Promise.resolve(!1);
    },
    reset: () => {
      const t = e();
      return t ? t.api.reset() : Promise.resolve();
    },
    getSelectedPaymentMethod: () => {
      var t;
      return ((t = e()) == null ? void 0 : t.selectedPaymentMethod) ?? null;
    },
    updateConfig: (t) => {
      var i;
      const a = (i = e()) == null ? void 0 : i.config;
      n(P.CONFIG, {
        publicKey: a == null ? void 0 : a.publicKey,
        orderId: a == null ? void 0 : a.orderId,
        theme: t.theme ?? (a == null ? void 0 : a.theme),
        locale: t.locale ?? (a == null ? void 0 : a.locale),
        paymentMethods: t.paymentMethods ?? (a == null ? void 0 : a.paymentMethods)
      });
    },
    updateOrderId: (t) => {
      var i;
      const a = (i = e()) == null ? void 0 : i.config;
      n(P.CONFIG, {
        publicKey: a == null ? void 0 : a.publicKey,
        orderId: t,
        theme: a == null ? void 0 : a.theme,
        locale: a == null ? void 0 : a.locale,
        paymentMethods: a == null ? void 0 : a.paymentMethods
      });
    },
    update: (t) => {
      n(P.UPDATE, t);
    },
    submit: async () => {
      const t = L(e()), a = F();
      try {
        return await _(t || void 0, a, P.CONFIRM_PAYMENT, {}), {
          paymentMethod: void 0
        };
      } catch (i) {
        return {
          error: {
            message: i instanceof Error ? i.message : "Payment failed",
            code: "payment_error",
            type: "payment_error"
          }
        };
      }
    }
  };
}
var C = /* @__PURE__ */ ((e) => (e.Success = "Success", e.Failed = "Failed", e.Timeout = "Timeout", e))(C || {}), R = /* @__PURE__ */ ((e) => (e.Authenticated = "Y", e.Attempted = "A", e.ChallengeRequired = "C", e.NotAuthenticated = "N", e.Unavailable = "U", e.Rejected = "R", e.InformationOnly = "I", e))(R || {});
class k {
  constructor(n, t) {
    S(this, "overlay", null);
    S(this, "modalContent", null);
    this.data = n, this.options = t;
  }
  fail(n, t = {}) {
    var i, o;
    const a = new Error(n);
    return (o = (i = this.options).onError) == null || o.call(i, a), {
      ...t,
      status: "Failed",
      error: a
    };
  }
  //#region Modal
  showModal() {
    return this.injectStyles(), this.overlay = document.createElement("div"), this.overlay.id = "payconductor-3ds-overlay", this.modalContent = document.createElement("div"), this.modalContent.id = "payconductor-3ds-modal", this.overlay.appendChild(this.modalContent), document.body.appendChild(this.overlay), this.modalContent;
  }
  closeModal() {
    this.overlay && (this.overlay.remove(), this.overlay = null, this.modalContent = null);
  }
  resolveContainer() {
    return this.modalContent ?? this.showModal();
  }
  injectStyles() {
    if (document.getElementById("payconductor-3ds-styles")) return;
    const n = document.createElement("style");
    n.id = "payconductor-3ds-styles", n.textContent = `
			#payconductor-3ds-overlay {
				position: fixed;
				inset: 0;
				z-index: 99999;
				display: flex;
				align-items: center;
				justify-content: center;
				background: rgba(0, 0, 0, 0.6);
			}
			#payconductor-3ds-modal {
				width: 500px;
				max-width: 95vw;
				min-height: 600px;
				border-radius: 8px;
				overflow: hidden;
				background: #fff;
			}
			#payconductor-3ds-modal iframe {
				width: 100%;
				height: 600px;
				border: none;
				display: block;
			}
			@media only screen and (max-width: 600px) {
				#payconductor-3ds-modal {
					width: 100vw;
					max-width: 100vw;
					min-height: 440px;
					border-radius: 0;
				}
				#payconductor-3ds-modal iframe {
					height: 440px;
				}
			}
		`, document.head.appendChild(n);
  }
  //#endregion
}
const Ae = 5 * 60 * 1e3;
class Te extends k {
  constructor() {
    super(...arguments);
    S(this, "iframe", null);
    S(this, "messageListener", null);
    S(this, "timeoutId", null);
  }
  async authenticate() {
    const {
      threeDsUrl: t,
      creq: a
    } = this.data;
    if (!t || !a)
      return this.fail("Missing threeDsUrl or creq");
    const i = this.resolveContainer();
    return new Promise((o) => {
      var c;
      this.iframe = document.createElement("iframe"), this.iframe.name = "payconductor-3ds-challenge", this.iframe.id = "payconductor-3ds-challenge", i.appendChild(this.iframe), this.messageListener = (g) => {
        var w, h, f;
        ((w = g.data) == null ? void 0 : w.status) === "COMPLETE" && (this.cleanup(), (f = (h = this.options).onComplete) == null || f.call(h), o({
          status: C.Success
        }));
      }, window.addEventListener("message", this.messageListener), this.timeoutId = setTimeout(() => {
        var g, w;
        this.cleanup(), (w = (g = this.options).onTimeout) == null || w.call(g), o({
          status: C.Timeout
        });
      }, this.options.timeoutMs ?? Ae);
      const d = (c = this.iframe.contentWindow) == null ? void 0 : c.document;
      if (!d) {
        this.cleanup(), o(this.fail("Cannot access iframe document"));
        return;
      }
      const s = d.createElement("form");
      s.name = "threeDsChallengeForm", s.setAttribute("target", "payconductor-3ds-challenge"), s.setAttribute("method", "post"), s.setAttribute("action", t);
      const r = d.createElement("input");
      r.setAttribute("type", "hidden"), r.setAttribute("name", "creq"), r.setAttribute("value", a), s.appendChild(r), this.iframe.appendChild(s), s.submit();
    });
  }
  cleanup() {
    this.timeoutId && (clearTimeout(this.timeoutId), this.timeoutId = null), this.messageListener && (window.removeEventListener("message", this.messageListener), this.messageListener = null), this.iframe && (this.iframe.remove(), this.iframe = null), this.closeModal();
  }
}
const O = /* @__PURE__ */ new Map();
function x(e) {
  const n = O.get(e);
  if (n) return n;
  const t = new Promise((a, i) => {
    if (document.querySelector(`script[src="${e}"]`)) {
      a();
      return;
    }
    const o = document.createElement("script");
    o.src = e, o.async = !0, o.onload = () => a(), o.onerror = () => {
      O.delete(e), i(new Error(`Failed to load script: ${e}`));
    }, (document.head || document.body).appendChild(o);
  });
  return O.set(e, t), t;
}
const Ie = "https://static.payzen.lat/static/js/authenticate-client/V1.0/kr-authenticate.umd.js", Me = 10 * 60 * 1e3;
class _e extends k {
  constructor() {
    super(...arguments);
    S(this, "timeoutId", null);
  }
  async authenticate() {
    const {
      operationUrl: t,
      publicKey: a
    } = this.data;
    if (!t || !a)
      return this.fail("Missing operationUrl or publicKey");
    try {
      await x(Ie);
    } catch {
      return this.fail("Failed to load 3DS SDK");
    }
    const i = window.KrAuthenticate;
    return i ? new Promise((o) => {
      this.timeoutId = setTimeout(() => {
        var s, r;
        this.cleanup(), (r = (s = this.options).onTimeout) == null || r.call(s), o({
          status: C.Timeout
        });
      }, this.options.timeoutMs ?? Me), new i(a).authenticate(t, () => {
        var s, r;
        this.cleanup(), (r = (s = this.options).onComplete) == null || r.call(s), o({
          status: C.Success
        });
      });
    }) : this.fail("KrAuthenticate not available");
  }
  cleanup() {
    this.timeoutId && (clearTimeout(this.timeoutId), this.timeoutId = null);
  }
}
const Ne = {
  [N.Production]: "https://3ds-nx-js.stone.com.br/live/v2/3ds2.min.js",
  [N.Sandbox]: "https://3ds-nx-js.stone.com.br/test/v2/3ds2.min.js"
}, Re = 5 * 60 * 1e3;
function De() {
  const e = window.innerWidth;
  return e <= 480 ? "01" : e <= 768 ? "02" : e <= 1024 ? "03" : "04";
}
class ke extends k {
  constructor() {
    super(...arguments);
    S(this, "timeoutId", null);
    S(this, "methodContainer", null);
  }
  async authenticate() {
    const {
      authToken: t,
      card: a
    } = this.data;
    if (!t) return this.fail("Missing authToken for PagarMe 3DS");
    if (!a) return this.fail("Missing card data for PagarMe 3DS");
    const i = this.data.environment ?? N.Production;
    try {
      await x(Ne[i]);
    } catch {
      return this.fail("Failed to load Stone 3DS SDK");
    }
    const o = window.TDS;
    if (!o) return this.fail("Stone TDS SDK not available");
    const d = this.resolveContainer();
    return this.methodContainer = document.createElement("div"), this.methodContainer.style.display = "none", document.body.appendChild(this.methodContainer), new Promise((s) => {
      this.timeoutId = setTimeout(() => {
        var r, c;
        this.cleanup(), (c = (r = this.options).onTimeout) == null || c.call(r), s({
          status: C.Timeout
        });
      }, this.options.timeoutMs ?? Re), o.init({
        token: t,
        tds_method_container_element: this.methodContainer,
        challenge_container_element: d,
        use_default_challenge_iframe_style: !0,
        challenge_window_size: De()
      }, this.buildOrderData()).then((r) => {
        var h, f;
        if (this.cleanup(), !(r != null && r.length)) {
          s(this.fail("PagarMe 3DS returned no response"));
          return;
        }
        const c = r[0], g = Object.values(R).find((u) => u === c.trans_status), w = {
          transStatus: g,
          providerTransactionId: c.tds_server_trans_id,
          challengeCanceled: c.challenge_canceled
        };
        if (c.challenge_canceled) {
          s(this.fail("3DS challenge canceled by user", w));
          return;
        }
        g === R.Authenticated || g === R.Attempted ? ((f = (h = this.options).onComplete) == null || f.call(h), s({
          ...w,
          status: C.Success,
          dsTransactionId: c.tds_server_trans_id
        })) : s(this.fail(`3DS failed with status: ${c.trans_status}`, w));
      }).catch((r) => {
        this.cleanup(), s(this.fail(r instanceof Error ? r.message : "PagarMe 3DS failed"));
      });
    });
  }
  cleanup() {
    this.timeoutId && (clearTimeout(this.timeoutId), this.timeoutId = null), this.methodContainer && (this.methodContainer.remove(), this.methodContainer = null), this.closeModal();
  }
  buildOrderData() {
    var d;
    const {
      card: t,
      customer: a,
      amount: i,
      billingAddress: o
    } = this.data;
    return {
      payments: [{
        payment_method: "credit_card",
        credit_card: {
          card: {
            number: t == null ? void 0 : t.number,
            holder_name: t == null ? void 0 : t.holderName,
            exp_month: Number(t == null ? void 0 : t.expMonth),
            exp_year: Number(t == null ? void 0 : t.expYear),
            billing_address: o ? {
              country: o.country,
              state: o.state,
              city: o.city,
              zip_code: o.zipCode,
              line_1: `${o.number}, ${o.street}${o.district ? `, ${o.district}` : ""}`,
              line_2: o.complement ?? ""
            } : void 0
          }
        },
        amount: i
      }],
      ...a ? {
        customer: {
          name: a.name,
          email: a.email,
          ...a.document ? {
            document: a.document
          } : {},
          ...(d = a.phones) != null && d.length ? {
            phones: Object.fromEntries(a.phones.map((s) => [s.type === "HOME" ? "home_phone" : "mobile_phone", {
              country_code: s.countryCode,
              area_code: s.areaCode,
              number: s.number
            }]))
          } : {}
        }
      } : {}
    };
  }
}
const xe = "https://assets.pagseguro.com.br/checkout-sdk-js/rc/dist/browser/pagseguro.min.js";
class Ue extends k {
  async authenticate() {
    var w, h, f;
    const {
      authToken: n,
      card: t,
      customer: a,
      amount: i,
      currency: o,
      billingAddress: d
    } = this.data;
    if (!n) return this.fail("Missing authToken (session) for PagSeguro 3DS");
    if (!t) return this.fail("Missing card data for PagSeguro 3DS");
    if (!a) return this.fail("Missing customer data for PagSeguro 3DS");
    if (!i) return this.fail("Missing amount for PagSeguro 3DS");
    if (!d) return this.fail("Missing billingAddress for PagSeguro 3DS");
    const s = this.data.environment === N.Sandbox ? "SANDBOX" : "PROD";
    try {
      await x(xe);
    } catch {
      return this.fail("Failed to load PagSeguro SDK");
    }
    const r = window.PagSeguro;
    if (!r) return this.fail("PagSeguro SDK not available");
    r.setUp({
      session: n,
      env: s
    });
    const c = ((w = a.phones) == null ? void 0 : w.map((u) => ({
      country: u.countryCode,
      area: u.areaCode,
      number: u.number,
      type: u.type ?? "MOBILE"
    }))) ?? [{
      country: "55",
      area: "11",
      number: "999999999",
      type: "MOBILE"
    }];
    c.some((u) => u.type === "MOBILE") || (c[0].type = "MOBILE");
    try {
      const u = await r.authenticate3DS({
        data: {
          customer: {
            name: a.name,
            email: a.email,
            phones: c
          },
          paymentMethod: {
            type: this.data.installments === 0 ? "DEBIT_CARD" : "CREDIT_CARD",
            installments: this.data.installments ?? 1,
            card: {
              number: t.number,
              expMonth: t.expMonth,
              expYear: t.expYear,
              holder: {
                name: t.holderName
              }
            }
          },
          amount: {
            value: i,
            currency: o ?? "BRL"
          },
          billingAddress: {
            street: d.street,
            number: d.number,
            complement: d.complement,
            regionCode: d.state,
            country: d.country.length === 2 ? this.toAlpha3(d.country) : d.country,
            city: d.city,
            postalCode: d.zipCode.replace(/\D/g, "")
          },
          dataOnly: !1
        }
      });
      return u.status === "AUTH_FLOW_COMPLETED" || u.status === "AUTH_NOT_SUPPORTED" ? ((f = (h = this.options).onComplete) == null || f.call(h), {
        status: C.Success,
        dsTransactionId: u.id
      }) : u.status === "CHANGE_PAYMENT_METHOD" ? this.fail("PagSeguro requires a different payment method") : {
        status: C.Success,
        dsTransactionId: u.id
      };
    } catch (u) {
      return this.fail(u instanceof Error ? u.message : "PagSeguro 3DS failed");
    }
  }
  cleanup() {
  }
  toAlpha3(n) {
    return {
      BR: "BRA",
      US: "USA",
      AR: "ARG",
      CL: "CHL",
      CO: "COL",
      MX: "MEX",
      PE: "PER",
      UY: "URY"
    }[n.toUpperCase()] ?? n;
  }
}
const Le = {
  // Agnostic providers
  [M.Lyra]: _e,
  // Acquirer-specific providers
  [M.MercadoPago]: Te,
  [M.PagarMe]: ke,
  [M.PagSeguro]: Ue
};
class Oe extends Error {
  constructor(n, t) {
    super(n), this.title = t, this.name = "PayConductorThreeDSApiError";
  }
}
class Fe {
  constructor(n) {
    this.publicKey = n;
  }
  async completeManualChallenge(n, t) {
    const a = await fetch(`${this.baseUrl}/three-ds/complete/${n}`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({
        providerTransactionId: t
      })
    });
    a.ok || await this.parseResponseError("Failed to complete native 3DS challenge", a);
  }
  async parseResponseError(n, t) {
    var i, o, d, s;
    let a = "";
    try {
      const r = await t.json();
      r != null && r.message ? a = r.message : (i = r == null ? void 0 : r.error) != null && i.message ? a = r.error : (d = (o = r == null ? void 0 : r.error) == null ? void 0 : o.value) != null && d.message ? a = r.error.value.message : (s = r == null ? void 0 : r.value) != null && s.message ? a = r.value.message : a = JSON.stringify(r);
    } catch {
    }
    throw new Oe(a, n);
  }
  get baseUrl() {
    return typeof window < "u" && window.location.href.includes("localhost") ? "http://localhost:3000/api/v1/sdk" : "https://payconductor.ai/api/v1/sdk";
  }
  get headers() {
    return {
      Authorization: `Basic ${btoa(`${this.publicKey}:x`)}`,
      "Content-Type": "application/json"
    };
  }
}
const Ke = [M.PagSeguro];
class Be {
  constructor(n) {
    S(this, "data");
    S(this, "provider", null);
    this.data = n;
  }
  get needsChallenge() {
    return this.data.status === "NeedChallenge" || this.data.statusDetail === "ThreeDsAwaitingChallenge";
  }
  get acquirer() {
    return this.data.acquirer;
  }
  async authenticate(n) {
    if (!this.needsChallenge)
      return {
        status: C.Success
      };
    const {
      acquirer: t
    } = this.data;
    if (!t)
      return {
        status: C.Failed,
        error: new Error("Missing 3DS acquirer")
      };
    const a = Le[t];
    if (!a)
      return {
        status: C.Failed,
        error: new Error(`Unsupported 3DS provider: ${t}`)
      };
    const i = {
      ...n,
      threeDSecure: this.data
    };
    this.provider = new a(this.data, i);
    const o = await this.provider.authenticate();
    return o.status === C.Success && o.dsTransactionId && Ke.includes(t) && this.data.orderId && this.data.publicKey && await new Fe(this.data.publicKey).completeManualChallenge(this.data.orderId, o.dsTransactionId), o;
  }
  destroy() {
    this.provider && (this.provider.cleanup(), this.provider = null);
  }
}
function it(e) {
  let n = null;
  return {
    handleChallenge: async (i) => {
      var s;
      if (!(i.status === "NeedChallenge" || i.statusDetail === "ThreeDsAwaitingChallenge"))
        return {
          status: C.Success
        };
      (s = e == null ? void 0 : e.onChallenge) == null || s.call(e), n = new Be(i);
      const d = await n.authenticate({
        onComplete: e == null ? void 0 : e.onComplete,
        onError: e == null ? void 0 : e.onError,
        onTimeout: e == null ? void 0 : e.onTimeout
      });
      return n.destroy(), n = null, d;
    },
    destroy: () => {
      n == null || n.destroy(), n = null;
    }
  };
}
class ze extends Error {
  constructor(n, t) {
    super(n), this.title = t, this.name = "PayConductorTokenizerApiError";
  }
}
class He {
  constructor(n) {
    this.publicKey = n;
  }
  async getSettings() {
    const n = await fetch(`${this.baseUrl}/card-tokenization/settings`, {
      method: "GET",
      headers: this.headers
    });
    return n.ok || await this.parseResponseError("Failed to fetch settings", n), await n.json();
  }
  async createToken(n) {
    const t = await fetch(`${this.baseUrl}/card-tokenization/tokenize`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify(n)
    });
    return t.ok || await this.parseResponseError("Failed to generate token", t), await t.json();
  }
  async saveTokens(n, t, a) {
    const i = await fetch(`${this.baseUrl}/card-tokenization/save-tokens/${t}/${a}`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify(n)
    });
    i.ok || await this.parseResponseError("Failed to save tokens", i);
  }
  async parseResponseError(n, t) {
    var i, o, d, s;
    let a = "";
    try {
      const r = await t.json();
      r != null && r.message ? a = r.message : (i = r == null ? void 0 : r.error) != null && i.message ? a = r.error : (d = (o = r == null ? void 0 : r.error) == null ? void 0 : o.value) != null && d.message ? a = r.error.value.message : (s = r == null ? void 0 : r.value) != null && s.message ? a = r.value.message : a = JSON.stringify(r);
    } catch {
    }
    throw new ze(a, n);
  }
  get baseUrl() {
    return typeof window < "u" && window.location.href.includes("localhost") ? "http://localhost:3000/api/v1/sdk" : "https://payconductor.ai/api/v1/sdk";
  }
  get headers() {
    return {
      Authorization: `Basic ${btoa(`${this.publicKey}:x`)}`,
      "Content-Type": "application/json"
    };
  }
}
class Ye {
  constructor(n) {
    this.input = n;
  }
}
class je extends Ye {
  constructor() {
    super(...arguments);
    S(this, "scriptUrl", "https://sdk.mercadopago.com/js/v2");
  }
  async tokenize() {
    if (!("publicKey" in this.input.setting))
      throw new Error("MercadoPago public key is missing in settings");
    if (!this.input.customer.documentNumber)
      throw new Error("Customer document number is required for tokenization");
    const t = window.MercadoPago;
    if (!t) throw new Error("MercadoPago SDK not available");
    const a = new t(this.input.setting.publicKey), {
      expiration: i,
      cvv: o,
      number: d,
      holderName: s
    } = this.input.card;
    return (await a.createCardToken({
      cardExpirationMonth: String(i.month),
      cardExpirationYear: String(i.year),
      cardholderName: s,
      cardNumber: d,
      securityCode: o,
      identificationType: this.input.customer.documentType === G.Cpf ? "CPF" : "CNPJ",
      identificationNumber: this.input.customer.documentNumber
    })).id;
  }
}
const Ge = {
  [M.MercadoPago]: je
};
class Ve {
  constructor(n) {
    S(this, "api");
    this.publicKey = n, this.api = new He(this.publicKey);
  }
  async tokenizeCard(n) {
    this.validateCard(n);
    const {
      customerId: t,
      token: a
    } = await this.api.createToken({
      card: n.card,
      customer: n.customer,
      saveCard: !1
    }), {
      settings: i
    } = await this.api.getSettings(), d = (await Promise.all(i.map(async (s) => {
      const r = Ge[s.key];
      if (!r) return null;
      const c = new r({
        ...n,
        setting: s.settings
      });
      return await x(c.scriptUrl), {
        token: await c.tokenize(),
        integrationId: s.integrationId,
        providerKey: s.key
      };
    }))).filter((s) => s !== null);
    return d.length > 0 && await this.api.saveTokens(d, t, a), a;
  }
  validateCard(n) {
    const {
      number: t,
      cvv: a,
      expiration: i,
      holderName: o
    } = n.card;
    if (!t || !a || !(i != null && i.month) || !(i != null && i.year) || !o)
      throw new Error("Invalid card data");
  }
}
function rt(e) {
  const n = new Ve(e.publicKey);
  return {
    tokenizeCard: async (a) => {
      var i, o;
      try {
        const d = await n.tokenizeCard(a);
        return (i = e.onSuccess) == null || i.call(e, d), d;
      } catch (d) {
        const s = d instanceof Error ? d : new Error("Tokenization failed");
        return (o = e.onError) == null || o.call(e, s), null;
      }
    }
  };
}
export {
  me as ALLOWED_ORIGINS,
  re as CardBrand,
  ne as ChargeStatusDetail,
  oe as CurrencyType,
  se as DeviceType,
  G as DocumentType,
  Ze as ERROR_CODES,
  ce as ErrorCode,
  ue as IFRAME_BASE_URL,
  z as IFRAME_DEFAULT_HEIGHT_VALUE,
  A as IncomingMessage,
  de as InputStyleKey,
  M as IntegrationProvider,
  N as OrganizationEnvironment,
  I as OutgoingMessage,
  P as POST_MESSAGES,
  Qe as PayConductor,
  Be as PayConductor3DSSDK,
  et as PayConductorCheckoutElement,
  tt as PayConductorThreeDSElement,
  Ve as PayConductorTokenizerSDK,
  Q as PaymentMethod,
  ee as PaymentMethodLayout,
  te as PaymentStatus,
  he as REQUEST_TIMEOUT,
  fe as SKELETON_CSS,
  H as SKELETON_STYLE_ID,
  ie as ThreeDSResultStatus,
  R as ThreeDSTransStatus,
  C as ThreeDSecureResultStatus,
  ae as ThreeDsAuthenticationStatus,
  ye as buildIframeUrl,
  Qe as default,
  Xe as defaultTheme,
  we as generateRequestId,
  Ee as isValidOrigin,
  x as loadScript,
  nt as usePayConductor,
  at as usePayconductorElement,
  it as useThreeDS,
  rt as useTokenizer
};
//# sourceMappingURL=index.es.js.map
