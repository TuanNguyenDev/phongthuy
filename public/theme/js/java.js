﻿var msgTransfers = "Quý khách vui lòng chọn hình thức chuyển khoản";
var msgRemoveCartItem = "Bạn muốn xóa sản phẩm này";
var msgRemoveAddress = "Qúy khách muốn xóa địa chỉ này";
var msgRemoveAll = "Quý khách muốn xóa tất cả giỏ hàng";
var msgCancelOrder = "Bạn có chắc chắn muốn hủy đơn hàng này";
var msgDialog = "Thông báo";
var msgSizeandColor = "Vui lòng chọn màu sắc hoặc kích cỡ";
var msgColor = "Vui lòng chọn màu trước";
var msgOutofStock = "Sản phẩm tạm thời hết hàng";
var msgSignin = "Đăng nhập để thực hiện chức năng này";
var msgWishlisted = "Đã yêu thích";
var msgAddToCartSuccess = "Đã thêm sản phẩm vào giỏ hàng";
var msgOrderSuccess = "Bạn đã đặt hàng thành công";
var msgClose = "Đóng";
var msgViewCart = "Xem giỏ hàng";
var msgSizeColorProduct = "Bạn chưa chọn màu sắc hoặc size hoặc sản phẩm tạm thời đang hết hàng ";
var msgContactLater = "Liên hệ sau";
var msgStarRate = "Quý khách vui lòng chọn đánh giá (số sao)";
var msgRateProduct = "Đánh giá sản phẩm";
var msgSearchProduct = "Tìm kiếm sản phẩm bạn muốn mua tại đây";
var msgSelectBank = "Vui lòng chọn ngân hàng bạn sẽ thanh toán";
var msgSelected = "Bạn đã chọn";
var msgAccept = "Đồng ý";
var msgCancel = "Hủy";
var msgAnotherAction = "Xin vui lòng xóa khỏi giỏ hàng hoặc mua các sản phẩm khác";
var msgDiscountCode = "Mã giảm giá không chính xác";
var msgChoosePaymentMethod = "Bạn chưa chọn hình thức thanh toán";
var txtTitle = "Quý khách vui lòng nhập tiêu đề nhận xét cho sản phẩm này";
var txtComment = "Quý khách vui lòng bình luận cho sản phẩm (Tối thiểu 30 ký tự)";
var txtDigitComment = " ký tự";
var txtCoupon = "Mã giảm giá";
var txtOutofStock = "Hết hàng";
var txtAuthor = "Tác giả";
var txtPublishingHouse = "Nhà xuất bản";
var txtProvider = "Nơi phát hành";
var txtCart = "Giỏ hàng";
var txtCheckout = "Thanh toán";
var txtInCategory = " trong danh mục";
var txtPrice = "Giá";
var txtNextLabel = "Tiếp";
var txtPrevLabel = "Sau";
var txtSkipLabel = "Bỏ qua";
var txtDoneLabel = "Xong";
var txtBuyer = " người mua ";
var txtAcept = "Chắc chắn rồi";
var txtDenied = "Không, tôi nhầm";
var txtBaoKimAccount = "Tài khoản Bảo Kim";
var txtBalanceMoney = "Số dư tiền thưởng";
var txtHour = "Giờ";
var txtMinute = "Phút";
var txtSeconds = "Giây";
var txtQuickView = "Xem nhanh";
var txtContinueShop = "Tiếp tục mua hàng";;
(function(e, undefined) {
	var t, n, r = typeof undefined,
		i = e.location,
		o = e.document,
		s = o.documentElement,
		a = e.jQuery,
		u = e.$,
		l = {},
		c = [],
		p = "2.0.3",
		f = c.concat,
		h = c.push,
		d = c.slice,
		g = c.indexOf,
		m = l.toString,
		y = l.hasOwnProperty,
		v = p.trim,
		x = function(e, n) {
			return new x.fn.init(e, n, t)
		},
		b = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
		w = /\S+/g,
		T = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
		C = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
		k = /^-ms-/,
		N = /-([\da-z])/gi,
		E = function(e, t) {
			return t.toUpperCase()
		},
		S = function() {
			o.removeEventListener("DOMContentLoaded", S, !1), e.removeEventListener("load", S, !1), x.ready()
		};
	x.fn = x.prototype = {
		jquery: p,
		constructor: x,
		init: function(e, t, n) {
			var r, i;
			if (!e) return this;
			if ("string" == typeof e) {
				if (r = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : T.exec(e), !r || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
				if (r[1]) {
					if (t = t instanceof x ? t[0] : t, x.merge(this, x.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : o, !0)), C.test(r[1]) && x.isPlainObject(t))
						for (r in t) x.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
					return this
				}
				return i = o.getElementById(r[2]), i && i.parentNode && (this.length = 1, this[0] = i), this.context = o, this.selector = e, this
			}
			return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : x.isFunction(e) ? n.ready(e) : (e.selector !== undefined && (this.selector = e.selector, this.context = e.context), x.makeArray(e, this))
		},
		selector: "",
		length: 0,
		toArray: function() {
			return d.call(this)
		},
		get: function(e) {
			return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
		},
		pushStack: function(e) {
			var t = x.merge(this.constructor(), e);
			return t.prevObject = this, t.context = this.context, t
		},
		each: function(e, t) {
			return x.each(this, e, t)
		},
		ready: function(e) {
			return x.ready.promise().done(e), this
		},
		slice: function() {
			return this.pushStack(d.apply(this, arguments))
		},
		first: function() {
			return this.eq(0)
		},
		last: function() {
			return this.eq(-1)
		},
		eq: function(e) {
			var t = this.length,
				n = +e + (0 > e ? t : 0);
			return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
		},
		map: function(e) {
			return this.pushStack(x.map(this, function(t, n) {
				return e.call(t, n, t)
			}))
		},
		end: function() {
			return this.prevObject || this.constructor(null)
		},
		push: h,
		sort: [].sort,
		splice: [].splice
	}, x.fn.init.prototype = x.fn, x.extend = x.fn.extend = function() {
		var e, t, n, r, i, o, s = arguments[0] || {},
			a = 1,
			u = arguments.length,
			l = !1;
		for ("boolean" == typeof s && (l = s, s = arguments[1] || {}, a = 2), "object" == typeof s || x.isFunction(s) || (s = {}), u === a && (s = this, --a); u > a; a++)
			if (null != (e = arguments[a]))
				for (t in e) n = s[t], r = e[t], s !== r && (l && r && (x.isPlainObject(r) || (i = x.isArray(r))) ? (i ? (i = !1, o = n && x.isArray(n) ? n : []) : o = n && x.isPlainObject(n) ? n : {}, s[t] = x.extend(l, o, r)) : r !== undefined && (s[t] = r));
		return s
	}, x.extend({
		expando: "jQuery" + (p + Math.random()).replace(/\D/g, ""),
		noConflict: function(t) {
			return e.$ === x && (e.$ = u), t && e.jQuery === x && (e.jQuery = a), x
		},
		isReady: !1,
		readyWait: 1,
		holdReady: function(e) {
			e ? x.readyWait++ : x.ready(!0)
		},
		ready: function(e) {
			(e === !0 ? --x.readyWait : x.isReady) || (x.isReady = !0, e !== !0 && --x.readyWait > 0 || (n.resolveWith(o, [x]), x.fn.trigger && x(o).trigger("ready").off("ready")))
		},
		isFunction: function(e) {
			return "function" === x.type(e)
		},
		isArray: Array.isArray,
		isWindow: function(e) {
			return null != e && e === e.window
		},
		isNumeric: function(e) {
			return !isNaN(parseFloat(e)) && isFinite(e)
		},
		type: function(e) {
			return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[m.call(e)] || "object" : typeof e
		},
		isPlainObject: function(e) {
			if ("object" !== x.type(e) || e.nodeType || x.isWindow(e)) return !1;
			try {
				if (e.constructor && !y.call(e.constructor.prototype, "isPrototypeOf")) return !1
			} catch (t) {
				return !1
			}
			return !0
		},
		isEmptyObject: function(e) {
			var t;
			for (t in e) return !1;
			return !0
		},
		error: function(e) {
			throw Error(e)
		},
		parseHTML: function(e, t, n) {
			if (!e || "string" != typeof e) return null;
			"boolean" == typeof t && (n = t, t = !1), t = t || o;
			var r = C.exec(e),
				i = !n && [];
			return r ? [t.createElement(r[1])] : (r = x.buildFragment([e], t, i), i && x(i).remove(), x.merge([], r.childNodes))
		},
		parseJSON: JSON.parse,
		parseXML: function(e) {
			var t, n;
			if (!e || "string" != typeof e) return null;
			try {
				n = new DOMParser, t = n.parseFromString(e, "text/xml")
			} catch (r) {
				t = undefined
			}
			return (!t || t.getElementsByTagName("parsererror").length) && x.error("Invalid XML: " + e), t
		},
		noop: function() {},
		globalEval: function(e) {
			var t, n = eval;
			e = x.trim(e), e && (1 === e.indexOf("use strict") ? (t = o.createElement("script"), t.text = e, o.head.appendChild(t).parentNode.removeChild(t)) : n(e))
		},
		camelCase: function(e) {
			return e.replace(k, "ms-").replace(N, E)
		},
		nodeName: function(e, t) {
			return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
		},
		each: function(e, t, n) {
			var r, i = 0,
				o = e.length,
				s = j(e);
			if (n) {
				if (s) {
					for (; o > i; i++)
						if (r = t.apply(e[i], n), r === !1) break
				} else
					for (i in e)
						if (r = t.apply(e[i], n), r === !1) break
			} else if (s) {
				for (; o > i; i++)
					if (r = t.call(e[i], i, e[i]), r === !1) break
			} else
				for (i in e)
					if (r = t.call(e[i], i, e[i]), r === !1) break; return e
		},
		trim: function(e) {
			return null == e ? "" : v.call(e)
		},
		makeArray: function(e, t) {
			var n = t || [];
			return null != e && (j(Object(e)) ? x.merge(n, "string" == typeof e ? [e] : e) : h.call(n, e)), n
		},
		inArray: function(e, t, n) {
			return null == t ? -1 : g.call(t, e, n)
		},
		merge: function(e, t) {
			var n = t.length,
				r = e.length,
				i = 0;
			if ("number" == typeof n)
				for (; n > i; i++) e[r++] = t[i];
			else
				while (t[i] !== undefined) e[r++] = t[i++];
			return e.length = r, e
		},
		grep: function(e, t, n) {
			var r, i = [],
				o = 0,
				s = e.length;
			for (n = !!n; s > o; o++) r = !!t(e[o], o), n !== r && i.push(e[o]);
			return i
		},
		map: function(e, t, n) {
			var r, i = 0,
				o = e.length,
				s = j(e),
				a = [];
			if (s)
				for (; o > i; i++) r = t(e[i], i, n), null != r && (a[a.length] = r);
			else
				for (i in e) r = t(e[i], i, n), null != r && (a[a.length] = r);
			return f.apply([], a)
		},
		guid: 1,
		proxy: function(e, t) {
			var n, r, i;
			return "string" == typeof t && (n = e[t], t = e, e = n), x.isFunction(e) ? (r = d.call(arguments, 2), i = function() {
				return e.apply(t || this, r.concat(d.call(arguments)))
			}, i.guid = e.guid = e.guid || x.guid++, i) : undefined
		},
		access: function(e, t, n, r, i, o, s) {
			var a = 0,
				u = e.length,
				l = null == n;
			if ("object" === x.type(n)) {
				i = !0;
				for (a in n) x.access(e, t, a, n[a], !0, o, s)
			} else if (r !== undefined && (i = !0, x.isFunction(r) || (s = !0), l && (s ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
					return l.call(x(e), n)
				})), t))
				for (; u > a; a++) t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
			return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
		},
		now: Date.now,
		swap: function(e, t, n, r) {
			var i, o, s = {};
			for (o in t) s[o] = e.style[o], e.style[o] = t[o];
			i = n.apply(e, r || []);
			for (o in t) e.style[o] = s[o];
			return i
		}
	}), x.ready.promise = function(t) {
		return n || (n = x.Deferred(), "complete" === o.readyState ? setTimeout(x.ready) : (o.addEventListener("DOMContentLoaded", S, !1), e.addEventListener("load", S, !1))), n.promise(t)
	}, x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
		l["[object " + t + "]"] = t.toLowerCase()
	});

	function j(e) {
		var t = e.length,
			n = x.type(e);
		return x.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)
	}
	t = x(o),
		function(e, undefined) {
			var t, n, r, i, o, s, a, u, l, c, p, f, h, d, g, m, y, v = "sizzle" + -new Date,
				b = e.document,
				w = 0,
				T = 0,
				C = st(),
				k = st(),
				N = st(),
				E = !1,
				S = function(e, t) {
					return e === t ? (E = !0, 0) : 0
				},
				j = typeof undefined,
				D = 1 << 31,
				A = {}.hasOwnProperty,
				L = [],
				q = L.pop,
				H = L.push,
				O = L.push,
				F = L.slice,
				P = L.indexOf || function(e) {
					var t = 0,
						n = this.length;
					for (; n > t; t++)
						if (this[t] === e) return t;
					return -1
				},
				R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
				M = "[\\x20\\t\\r\\n\\f]",
				W = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
				$ = W.replace("w", "w#"),
				B = "\\[" + M + "*(" + W + ")" + M + "*(?:([*^$|!~]?=)" + M + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + $ + ")|)|)" + M + "*\\]",
				I = ":(" + W + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + B.replace(3, 8) + ")*)|.*)\\)|)",
				z = RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
				_ = RegExp("^" + M + "*," + M + "*"),
				X = RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
				U = RegExp(M + "*[+~]"),
				Y = RegExp("=" + M + "*([^\\]'\"]*)" + M + "*\\]", "g"),
				V = RegExp(I),
				G = RegExp("^" + $ + "$"),
				J = {
					ID: RegExp("^#(" + W + ")"),
					CLASS: RegExp("^\\.(" + W + ")"),
					TAG: RegExp("^(" + W.replace("w", "w*") + ")"),
					ATTR: RegExp("^" + B),
					PSEUDO: RegExp("^" + I),
					CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
					bool: RegExp("^(?:" + R + ")$", "i"),
					needsContext: RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
				},
				Q = /^[^{]+\{\s*\[native \w/,
				K = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
				Z = /^(?:input|select|textarea|button)$/i,
				et = /^h\d$/i,
				tt = /'|\\/g,
				nt = RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
				rt = function(e, t, n) {
					var r = "0x" + t - 65536;
					return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(55296 | r >> 10, 56320 | 1023 & r)
				};
			try {
				O.apply(L = F.call(b.childNodes), b.childNodes), L[b.childNodes.length].nodeType
			} catch (it) {
				O = {
					apply: L.length ? function(e, t) {
						H.apply(e, F.call(t))
					} : function(e, t) {
						var n = e.length,
							r = 0;
						while (e[n++] = t[r++]);
						e.length = n - 1
					}
				}
			}

			function ot(e, t, r, i) {
				var o, s, a, u, l, f, g, m, x, w;
				if ((t ? t.ownerDocument || t : b) !== p && c(t), t = t || p, r = r || [], !e || "string" != typeof e) return r;
				if (1 !== (u = t.nodeType) && 9 !== u) return [];
				if (h && !i) {
					if (o = K.exec(e))
						if (a = o[1]) {
							if (9 === u) {
								if (s = t.getElementById(a), !s || !s.parentNode) return r;
								if (s.id === a) return r.push(s), r
							} else if (t.ownerDocument && (s = t.ownerDocument.getElementById(a)) && y(t, s) && s.id === a) return r.push(s), r
						} else {
							if (o[2]) return O.apply(r, t.getElementsByTagName(e)), r;
							if ((a = o[3]) && n.getElementsByClassName && t.getElementsByClassName) return O.apply(r, t.getElementsByClassName(a)), r
						}
					if (n.qsa && (!d || !d.test(e))) {
						if (m = g = v, x = t, w = 9 === u && e, 1 === u && "object" !== t.nodeName.toLowerCase()) {
							f = gt(e), (g = t.getAttribute("id")) ? m = g.replace(tt, "\\$&") : t.setAttribute("id", m), m = "[id='" + m + "'] ", l = f.length;
							while (l--) f[l] = m + mt(f[l]);
							x = U.test(e) && t.parentNode || t, w = f.join(",")
						}
						if (w) try {
							return O.apply(r, x.querySelectorAll(w)), r
						} catch (T) {} finally {
							g || t.removeAttribute("id")
						}
					}
				}
				return kt(e.replace(z, "$1"), t, r, i)
			}

			function st() {
				var e = [];

				function t(n, r) {
					return e.push(n += " ") > i.cacheLength && delete t[e.shift()], t[n] = r
				}
				return t
			}

			function at(e) {
				return e[v] = !0, e
			}

			function ut(e) {
				var t = p.createElement("div");
				try {
					return !!e(t)
				} catch (n) {
					return !1
				} finally {
					t.parentNode && t.parentNode.removeChild(t), t = null
				}
			}

			function lt(e, t) {
				var n = e.split("|"),
					r = e.length;
				while (r--) i.attrHandle[n[r]] = t
			}

			function ct(e, t) {
				var n = t && e,
					r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || D) - (~e.sourceIndex || D);
				if (r) return r;
				if (n)
					while (n = n.nextSibling)
						if (n === t) return -1;
				return e ? 1 : -1
			}

			function pt(e) {
				return function(t) {
					var n = t.nodeName.toLowerCase();
					return "input" === n && t.type === e
				}
			}

			function ft(e) {
				return function(t) {
					var n = t.nodeName.toLowerCase();
					return ("input" === n || "button" === n) && t.type === e
				}
			}

			function ht(e) {
				return at(function(t) {
					return t = +t, at(function(n, r) {
						var i, o = e([], n.length, t),
							s = o.length;
						while (s--) n[i = o[s]] && (n[i] = !(r[i] = n[i]))
					})
				})
			}
			s = ot.isXML = function(e) {
				var t = e && (e.ownerDocument || e).documentElement;
				return t ? "HTML" !== t.nodeName : !1
			}, n = ot.support = {}, c = ot.setDocument = function(e) {
				var t = e ? e.ownerDocument || e : b,
					r = t.defaultView;
				return t !== p && 9 === t.nodeType && t.documentElement ? (p = t, f = t.documentElement, h = !s(t), r && r.attachEvent && r !== r.top && r.attachEvent("onbeforeunload", function() {
					c()
				}), n.attributes = ut(function(e) {
					return e.className = "i", !e.getAttribute("className")
				}), n.getElementsByTagName = ut(function(e) {
					return e.appendChild(t.createComment("")), !e.getElementsByTagName("*").length
				}), n.getElementsByClassName = ut(function(e) {
					return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
				}), n.getById = ut(function(e) {
					return f.appendChild(e).id = v, !t.getElementsByName || !t.getElementsByName(v).length
				}), n.getById ? (i.find.ID = function(e, t) {
					if (typeof t.getElementById !== j && h) {
						var n = t.getElementById(e);
						return n && n.parentNode ? [n] : []
					}
				}, i.filter.ID = function(e) {
					var t = e.replace(nt, rt);
					return function(e) {
						return e.getAttribute("id") === t
					}
				}) : (delete i.find.ID, i.filter.ID = function(e) {
					var t = e.replace(nt, rt);
					return function(e) {
						var n = typeof e.getAttributeNode !== j && e.getAttributeNode("id");
						return n && n.value === t
					}
				}), i.find.TAG = n.getElementsByTagName ? function(e, t) {
					return typeof t.getElementsByTagName !== j ? t.getElementsByTagName(e) : undefined
				} : function(e, t) {
					var n, r = [],
						i = 0,
						o = t.getElementsByTagName(e);
					if ("*" === e) {
						while (n = o[i++]) 1 === n.nodeType && r.push(n);
						return r
					}
					return o
				}, i.find.CLASS = n.getElementsByClassName && function(e, t) {
					return typeof t.getElementsByClassName !== j && h ? t.getElementsByClassName(e) : undefined
				}, g = [], d = [], (n.qsa = Q.test(t.querySelectorAll)) && (ut(function(e) {
					e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || d.push("\\[" + M + "*(?:value|" + R + ")"), e.querySelectorAll(":checked").length || d.push(":checked")
				}), ut(function(e) {
					var n = t.createElement("input");
					n.setAttribute("type", "hidden"), e.appendChild(n).setAttribute("t", ""), e.querySelectorAll("[t^='']").length && d.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll(":enabled").length || d.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), d.push(",.*:")
				})), (n.matchesSelector = Q.test(m = f.webkitMatchesSelector || f.mozMatchesSelector || f.oMatchesSelector || f.msMatchesSelector)) && ut(function(e) {
					n.disconnectedMatch = m.call(e, "div"), m.call(e, "[s!='']:x"), g.push("!=", I)
				}), d = d.length && RegExp(d.join("|")), g = g.length && RegExp(g.join("|")), y = Q.test(f.contains) || f.compareDocumentPosition ? function(e, t) {
					var n = 9 === e.nodeType ? e.documentElement : e,
						r = t && t.parentNode;
					return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
				} : function(e, t) {
					if (t)
						while (t = t.parentNode)
							if (t === e) return !0;
					return !1
				}, S = f.compareDocumentPosition ? function(e, r) {
					if (e === r) return E = !0, 0;
					var i = r.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(r);
					return i ? 1 & i || !n.sortDetached && r.compareDocumentPosition(e) === i ? e === t || y(b, e) ? -1 : r === t || y(b, r) ? 1 : l ? P.call(l, e) - P.call(l, r) : 0 : 4 & i ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
				} : function(e, n) {
					var r, i = 0,
						o = e.parentNode,
						s = n.parentNode,
						a = [e],
						u = [n];
					if (e === n) return E = !0, 0;
					if (!o || !s) return e === t ? -1 : n === t ? 1 : o ? -1 : s ? 1 : l ? P.call(l, e) - P.call(l, n) : 0;
					if (o === s) return ct(e, n);
					r = e;
					while (r = r.parentNode) a.unshift(r);
					r = n;
					while (r = r.parentNode) u.unshift(r);
					while (a[i] === u[i]) i++;
					return i ? ct(a[i], u[i]) : a[i] === b ? -1 : u[i] === b ? 1 : 0
				}, t) : p
			}, ot.matches = function(e, t) {
				return ot(e, null, null, t)
			}, ot.matchesSelector = function(e, t) {
				if ((e.ownerDocument || e) !== p && c(e), t = t.replace(Y, "='$1']"), !(!n.matchesSelector || !h || g && g.test(t) || d && d.test(t))) try {
					var r = m.call(e, t);
					if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
				} catch (i) {}
				return ot(t, p, null, [e]).length > 0
			}, ot.contains = function(e, t) {
				return (e.ownerDocument || e) !== p && c(e), y(e, t)
			}, ot.attr = function(e, t) {
				(e.ownerDocument || e) !== p && c(e);
				var r = i.attrHandle[t.toLowerCase()],
					o = r && A.call(i.attrHandle, t.toLowerCase()) ? r(e, t, !h) : undefined;
				return o === undefined ? n.attributes || !h ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null : o
			}, ot.error = function(e) {
				throw Error("Syntax error, unrecognized expression: " + e)
			}, ot.uniqueSort = function(e) {
				var t, r = [],
					i = 0,
					o = 0;
				if (E = !n.detectDuplicates, l = !n.sortStable && e.slice(0), e.sort(S), E) {
					while (t = e[o++]) t === e[o] && (i = r.push(o));
					while (i--) e.splice(r[i], 1)
				}
				return e
			}, o = ot.getText = function(e) {
				var t, n = "",
					r = 0,
					i = e.nodeType;
				if (i) {
					if (1 === i || 9 === i || 11 === i) {
						if ("string" == typeof e.textContent) return e.textContent;
						for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
					} else if (3 === i || 4 === i) return e.nodeValue
				} else
					for (; t = e[r]; r++) n += o(t);
				return n
			}, i = ot.selectors = {
				cacheLength: 50,
				createPseudo: at,
				match: J,
				attrHandle: {},
				find: {},
				relative: {
					">": {
						dir: "parentNode",
						first: !0
					},
					" ": {
						dir: "parentNode"
					},
					"+": {
						dir: "previousSibling",
						first: !0
					},
					"~": {
						dir: "previousSibling"
					}
				},
				preFilter: {
					ATTR: function(e) {
						return e[1] = e[1].replace(nt, rt), e[3] = (e[4] || e[5] || "").replace(nt, rt), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
					},
					CHILD: function(e) {
						return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ot.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ot.error(e[0]), e
					},
					PSEUDO: function(e) {
						var t, n = !e[5] && e[2];
						return J.CHILD.test(e[0]) ? null : (e[3] && e[4] !== undefined ? e[2] = e[4] : n && V.test(n) && (t = gt(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
					}
				},
				filter: {
					TAG: function(e) {
						var t = e.replace(nt, rt).toLowerCase();
						return "*" === e ? function() {
							return !0
						} : function(e) {
							return e.nodeName && e.nodeName.toLowerCase() === t
						}
					},
					CLASS: function(e) {
						var t = C[e + " "];
						return t || (t = RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && C(e, function(e) {
							return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== j && e.getAttribute("class") || "")
						})
					},
					ATTR: function(e, t, n) {
						return function(r) {
							var i = ot.attr(r, e);
							return null == i ? "!=" === t : t ? (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i + " ").indexOf(n) > -1 : "|=" === t ? i === n || i.slice(0, n.length + 1) === n + "-" : !1) : !0
						}
					},
					CHILD: function(e, t, n, r, i) {
						var o = "nth" !== e.slice(0, 3),
							s = "last" !== e.slice(-4),
							a = "of-type" === t;
						return 1 === r && 0 === i ? function(e) {
							return !!e.parentNode
						} : function(t, n, u) {
							var l, c, p, f, h, d, g = o !== s ? "nextSibling" : "previousSibling",
								m = t.parentNode,
								y = a && t.nodeName.toLowerCase(),
								x = !u && !a;
							if (m) {
								if (o) {
									while (g) {
										p = t;
										while (p = p[g])
											if (a ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) return !1;
										d = g = "only" === e && !d && "nextSibling"
									}
									return !0
								}
								if (d = [s ? m.firstChild : m.lastChild], s && x) {
									c = m[v] || (m[v] = {}), l = c[e] || [], h = l[0] === w && l[1], f = l[0] === w && l[2], p = h && m.childNodes[h];
									while (p = ++h && p && p[g] || (f = h = 0) || d.pop())
										if (1 === p.nodeType && ++f && p === t) {
											c[e] = [w, h, f];
											break
										}
								} else if (x && (l = (t[v] || (t[v] = {}))[e]) && l[0] === w) f = l[1];
								else
									while (p = ++h && p && p[g] || (f = h = 0) || d.pop())
										if ((a ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) && ++f && (x && ((p[v] || (p[v] = {}))[e] = [w, f]), p === t)) break; return f -= i, f === r || 0 === f % r && f / r >= 0
							}
						}
					},
					PSEUDO: function(e, t) {
						var n, r = i.pseudos[e] || i.setFilters[e.toLowerCase()] || ot.error("unsupported pseudo: " + e);
						return r[v] ? r(t) : r.length > 1 ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? at(function(e, n) {
							var i, o = r(e, t),
								s = o.length;
							while (s--) i = P.call(e, o[s]), e[i] = !(n[i] = o[s])
						}) : function(e) {
							return r(e, 0, n)
						}) : r
					}
				},
				pseudos: {
					not: at(function(e) {
						var t = [],
							n = [],
							r = a(e.replace(z, "$1"));
						return r[v] ? at(function(e, t, n, i) {
							var o, s = r(e, null, i, []),
								a = e.length;
							while (a--)(o = s[a]) && (e[a] = !(t[a] = o))
						}) : function(e, i, o) {
							return t[0] = e, r(t, null, o, n), !n.pop()
						}
					}),
					has: at(function(e) {
						return function(t) {
							return ot(e, t).length > 0
						}
					}),
					contains: at(function(e) {
						return function(t) {
							return (t.textContent || t.innerText || o(t)).indexOf(e) > -1
						}
					}),
					lang: at(function(e) {
						return G.test(e || "") || ot.error("unsupported lang: " + e), e = e.replace(nt, rt).toLowerCase(),
							function(t) {
								var n;
								do
									if (n = h ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
								while ((t = t.parentNode) && 1 === t.nodeType);
								return !1
							}
					}),
					target: function(t) {
						var n = e.location && e.location.hash;
						return n && n.slice(1) === t.id
					},
					root: function(e) {
						return e === f
					},
					focus: function(e) {
						return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
					},
					enabled: function(e) {
						return e.disabled === !1
					},
					disabled: function(e) {
						return e.disabled === !0
					},
					checked: function(e) {
						var t = e.nodeName.toLowerCase();
						return "input" === t && !!e.checked || "option" === t && !!e.selected
					},
					selected: function(e) {
						return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
					},
					empty: function(e) {
						for (e = e.firstChild; e; e = e.nextSibling)
							if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return !1;
						return !0
					},
					parent: function(e) {
						return !i.pseudos.empty(e)
					},
					header: function(e) {
						return et.test(e.nodeName)
					},
					input: function(e) {
						return Z.test(e.nodeName)
					},
					button: function(e) {
						var t = e.nodeName.toLowerCase();
						return "input" === t && "button" === e.type || "button" === t
					},
					text: function(e) {
						var t;
						return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
					},
					first: ht(function() {
						return [0]
					}),
					last: ht(function(e, t) {
						return [t - 1]
					}),
					eq: ht(function(e, t, n) {
						return [0 > n ? n + t : n]
					}),
					even: ht(function(e, t) {
						var n = 0;
						for (; t > n; n += 2) e.push(n);
						return e
					}),
					odd: ht(function(e, t) {
						var n = 1;
						for (; t > n; n += 2) e.push(n);
						return e
					}),
					lt: ht(function(e, t, n) {
						var r = 0 > n ? n + t : n;
						for (; --r >= 0;) e.push(r);
						return e
					}),
					gt: ht(function(e, t, n) {
						var r = 0 > n ? n + t : n;
						for (; t > ++r;) e.push(r);
						return e
					})
				}
			}, i.pseudos.nth = i.pseudos.eq;
			for (t in {
					radio: !0,
					checkbox: !0,
					file: !0,
					password: !0,
					image: !0
				}) i.pseudos[t] = pt(t);
			for (t in {
					submit: !0,
					reset: !0
				}) i.pseudos[t] = ft(t);

			function dt() {}
			dt.prototype = i.filters = i.pseudos, i.setFilters = new dt;

			function gt(e, t) {
				var n, r, o, s, a, u, l, c = k[e + " "];
				if (c) return t ? 0 : c.slice(0);
				a = e, u = [], l = i.preFilter;
				while (a) {
					(!n || (r = _.exec(a))) && (r && (a = a.slice(r[0].length) || a), u.push(o = [])), n = !1, (r = X.exec(a)) && (n = r.shift(), o.push({
						value: n,
						type: r[0].replace(z, " ")
					}), a = a.slice(n.length));
					for (s in i.filter) !(r = J[s].exec(a)) || l[s] && !(r = l[s](r)) || (n = r.shift(), o.push({
						value: n,
						type: s,
						matches: r
					}), a = a.slice(n.length));
					if (!n) break
				}
				return t ? a.length : a ? ot.error(e) : k(e, u).slice(0)
			}

			function mt(e) {
				var t = 0,
					n = e.length,
					r = "";
				for (; n > t; t++) r += e[t].value;
				return r
			}

			function yt(e, t, n) {
				var i = t.dir,
					o = n && "parentNode" === i,
					s = T++;
				return t.first ? function(t, n, r) {
					while (t = t[i])
						if (1 === t.nodeType || o) return e(t, n, r)
				} : function(t, n, a) {
					var u, l, c, p = w + " " + s;
					if (a) {
						while (t = t[i])
							if ((1 === t.nodeType || o) && e(t, n, a)) return !0
					} else
						while (t = t[i])
							if (1 === t.nodeType || o)
								if (c = t[v] || (t[v] = {}), (l = c[i]) && l[0] === p) {
									if ((u = l[1]) === !0 || u === r) return u === !0
								} else if (l = c[i] = [p], l[1] = e(t, n, a) || r, l[1] === !0) return !0
				}
			}

			function vt(e) {
				return e.length > 1 ? function(t, n, r) {
					var i = e.length;
					while (i--)
						if (!e[i](t, n, r)) return !1;
					return !0
				} : e[0]
			}

			function xt(e, t, n, r, i) {
				var o, s = [],
					a = 0,
					u = e.length,
					l = null != t;
				for (; u > a; a++)(o = e[a]) && (!n || n(o, r, i)) && (s.push(o), l && t.push(a));
				return s
			}

			function bt(e, t, n, r, i, o) {
				return r && !r[v] && (r = bt(r)), i && !i[v] && (i = bt(i, o)), at(function(o, s, a, u) {
					var l, c, p, f = [],
						h = [],
						d = s.length,
						g = o || Ct(t || "*", a.nodeType ? [a] : a, []),
						m = !e || !o && t ? g : xt(g, f, e, a, u),
						y = n ? i || (o ? e : d || r) ? [] : s : m;
					if (n && n(m, y, a, u), r) {
						l = xt(y, h), r(l, [], a, u), c = l.length;
						while (c--)(p = l[c]) && (y[h[c]] = !(m[h[c]] = p))
					}
					if (o) {
						if (i || e) {
							if (i) {
								l = [], c = y.length;
								while (c--)(p = y[c]) && l.push(m[c] = p);
								i(null, y = [], l, u)
							}
							c = y.length;
							while (c--)(p = y[c]) && (l = i ? P.call(o, p) : f[c]) > -1 && (o[l] = !(s[l] = p))
						}
					} else y = xt(y === s ? y.splice(d, y.length) : y), i ? i(null, s, y, u) : O.apply(s, y)
				})
			}

			function wt(e) {
				var t, n, r, o = e.length,
					s = i.relative[e[0].type],
					a = s || i.relative[" "],
					l = s ? 1 : 0,
					c = yt(function(e) {
						return e === t
					}, a, !0),
					p = yt(function(e) {
						return P.call(t, e) > -1
					}, a, !0),
					f = [function(e, n, r) {
						return !s && (r || n !== u) || ((t = n).nodeType ? c(e, n, r) : p(e, n, r))
					}];
				for (; o > l; l++)
					if (n = i.relative[e[l].type]) f = [yt(vt(f), n)];
					else {
						if (n = i.filter[e[l].type].apply(null, e[l].matches), n[v]) {
							for (r = ++l; o > r; r++)
								if (i.relative[e[r].type]) break;
							return bt(l > 1 && vt(f), l > 1 && mt(e.slice(0, l - 1).concat({
								value: " " === e[l - 2].type ? "*" : ""
							})).replace(z, "$1"), n, r > l && wt(e.slice(l, r)), o > r && wt(e = e.slice(r)), o > r && mt(e))
						}
						f.push(n)
					}
				return vt(f)
			}

			function Tt(e, t) {
				var n = 0,
					o = t.length > 0,
					s = e.length > 0,
					a = function(a, l, c, f, h) {
						var d, g, m, y = [],
							v = 0,
							x = "0",
							b = a && [],
							T = null != h,
							C = u,
							k = a || s && i.find.TAG("*", h && l.parentNode || l),
							N = w += null == C ? 1 : Math.random() || .1;
						for (T && (u = l !== p && l, r = n); null != (d = k[x]); x++) {
							if (s && d) {
								g = 0;
								while (m = e[g++])
									if (m(d, l, c)) {
										f.push(d);
										break
									}
								T && (w = N, r = ++n)
							}
							o && ((d = !m && d) && v--, a && b.push(d))
						}
						if (v += x, o && x !== v) {
							g = 0;
							while (m = t[g++]) m(b, y, l, c);
							if (a) {
								if (v > 0)
									while (x--) b[x] || y[x] || (y[x] = q.call(f));
								y = xt(y)
							}
							O.apply(f, y), T && !a && y.length > 0 && v + t.length > 1 && ot.uniqueSort(f)
						}
						return T && (w = N, u = C), b
					};
				return o ? at(a) : a
			}
			a = ot.compile = function(e, t) {
				var n, r = [],
					i = [],
					o = N[e + " "];
				if (!o) {
					t || (t = gt(e)), n = t.length;
					while (n--) o = wt(t[n]), o[v] ? r.push(o) : i.push(o);
					o = N(e, Tt(i, r))
				}
				return o
			};

			function Ct(e, t, n) {
				var r = 0,
					i = t.length;
				for (; i > r; r++) ot(e, t[r], n);
				return n
			}

			function kt(e, t, r, o) {
				var s, u, l, c, p, f = gt(e);
				if (!o && 1 === f.length) {
					if (u = f[0] = f[0].slice(0), u.length > 2 && "ID" === (l = u[0]).type && n.getById && 9 === t.nodeType && h && i.relative[u[1].type]) {
						if (t = (i.find.ID(l.matches[0].replace(nt, rt), t) || [])[0], !t) return r;
						e = e.slice(u.shift().value.length)
					}
					s = J.needsContext.test(e) ? 0 : u.length;
					while (s--) {
						if (l = u[s], i.relative[c = l.type]) break;
						if ((p = i.find[c]) && (o = p(l.matches[0].replace(nt, rt), U.test(u[0].type) && t.parentNode || t))) {
							if (u.splice(s, 1), e = o.length && mt(u), !e) return O.apply(r, o), r;
							break
						}
					}
				}
				return a(e, f)(o, t, !h, r, U.test(e)), r
			}
			n.sortStable = v.split("").sort(S).join("") === v, n.detectDuplicates = E, c(), n.sortDetached = ut(function(e) {
				return 1 & e.compareDocumentPosition(p.createElement("div"))
			}), ut(function(e) {
				return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
			}) || lt("type|href|height|width", function(e, t, n) {
				return n ? undefined : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
			}), n.attributes && ut(function(e) {
				return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
			}) || lt("value", function(e, t, n) {
				return n || "input" !== e.nodeName.toLowerCase() ? undefined : e.defaultValue
			}), ut(function(e) {
				return null == e.getAttribute("disabled")
			}) || lt(R, function(e, t, n) {
				var r;
				return n ? undefined : (r = e.getAttributeNode(t)) && r.specified ? r.value : e[t] === !0 ? t.toLowerCase() : null
			}), x.find = ot, x.expr = ot.selectors, x.expr[":"] = x.expr.pseudos, x.unique = ot.uniqueSort, x.text = ot.getText, x.isXMLDoc = ot.isXML, x.contains = ot.contains
		}(e);
	var D = {};

	function A(e) {
		var t = D[e] = {};
		return x.each(e.match(w) || [], function(e, n) {
			t[n] = !0
		}), t
	}
	x.Callbacks = function(e) {
		e = "string" == typeof e ? D[e] || A(e) : x.extend({}, e);
		var t, n, r, i, o, s, a = [],
			u = !e.once && [],
			l = function(p) {
				for (t = e.memory && p, n = !0, s = i || 0, i = 0, o = a.length, r = !0; a && o > s; s++)
					if (a[s].apply(p[0], p[1]) === !1 && e.stopOnFalse) {
						t = !1;
						break
					}
				r = !1, a && (u ? u.length && l(u.shift()) : t ? a = [] : c.disable())
			},
			c = {
				add: function() {
					if (a) {
						var n = a.length;
						(function s(t) {
							x.each(t, function(t, n) {
								var r = x.type(n);
								"function" === r ? e.unique && c.has(n) || a.push(n) : n && n.length && "string" !== r && s(n)
							})
						})(arguments), r ? o = a.length : t && (i = n, l(t))
					}
					return this
				},
				remove: function() {
					return a && x.each(arguments, function(e, t) {
						var n;
						while ((n = x.inArray(t, a, n)) > -1) a.splice(n, 1), r && (o >= n && o--, s >= n && s--)
					}), this
				},
				has: function(e) {
					return e ? x.inArray(e, a) > -1 : !(!a || !a.length)
				},
				empty: function() {
					return a = [], o = 0, this
				},
				disable: function() {
					return a = u = t = undefined, this
				},
				disabled: function() {
					return !a
				},
				lock: function() {
					return u = undefined, t || c.disable(), this
				},
				locked: function() {
					return !u
				},
				fireWith: function(e, t) {
					return !a || n && !u || (t = t || [], t = [e, t.slice ? t.slice() : t], r ? u.push(t) : l(t)), this
				},
				fire: function() {
					return c.fireWith(this, arguments), this
				},
				fired: function() {
					return !!n
				}
			};
		return c
	}, x.extend({
		Deferred: function(e) {
			var t = [
					["resolve", "done", x.Callbacks("once memory"), "resolved"],
					["reject", "fail", x.Callbacks("once memory"), "rejected"],
					["notify", "progress", x.Callbacks("memory")]
				],
				n = "pending",
				r = {
					state: function() {
						return n
					},
					always: function() {
						return i.done(arguments).fail(arguments), this
					},
					then: function() {
						var e = arguments;
						return x.Deferred(function(n) {
							x.each(t, function(t, o) {
								var s = o[0],
									a = x.isFunction(e[t]) && e[t];
								i[o[1]](function() {
									var e = a && a.apply(this, arguments);
									e && x.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[s + "With"](this === r ? n.promise() : this, a ? [e] : arguments)
								})
							}), e = null
						}).promise()
					},
					promise: function(e) {
						return null != e ? x.extend(e, r) : r
					}
				},
				i = {};
			return r.pipe = r.then, x.each(t, function(e, o) {
				var s = o[2],
					a = o[3];
				r[o[1]] = s.add, a && s.add(function() {
					n = a
				}, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function() {
					return i[o[0] + "With"](this === i ? r : this, arguments), this
				}, i[o[0] + "With"] = s.fireWith
			}), r.promise(i), e && e.call(i, i), i
		},
		when: function(e) {
			var t = 0,
				n = d.call(arguments),
				r = n.length,
				i = 1 !== r || e && x.isFunction(e.promise) ? r : 0,
				o = 1 === i ? e : x.Deferred(),
				s = function(e, t, n) {
					return function(r) {
						t[e] = this, n[e] = arguments.length > 1 ? d.call(arguments) : r, n === a ? o.notifyWith(t, n) : --i || o.resolveWith(t, n)
					}
				},
				a, u, l;
			if (r > 1)
				for (a = Array(r), u = Array(r), l = Array(r); r > t; t++) n[t] && x.isFunction(n[t].promise) ? n[t].promise().done(s(t, l, n)).fail(o.reject).progress(s(t, u, a)) : --i;
			return i || o.resolveWith(l, n), o.promise()
		}
	}), x.support = function(t) {
		var n = o.createElement("input"),
			r = o.createDocumentFragment(),
			i = o.createElement("div"),
			s = o.createElement("select"),
			a = s.appendChild(o.createElement("option"));
		return n.type ? (n.type = "checkbox", t.checkOn = "" !== n.value, t.optSelected = a.selected, t.reliableMarginRight = !0, t.boxSizingReliable = !0, t.pixelPosition = !1, n.checked = !0, t.noCloneChecked = n.cloneNode(!0).checked, s.disabled = !0, t.optDisabled = !a.disabled, n = o.createElement("input"), n.value = "t", n.type = "radio", t.radioValue = "t" === n.value, n.setAttribute("checked", "t"), n.setAttribute("name", "t"), r.appendChild(n), t.checkClone = r.cloneNode(!0).cloneNode(!0).lastChild.checked, t.focusinBubbles = "onfocusin" in e, i.style.backgroundClip = "content-box", i.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === i.style.backgroundClip, x(function() {
			var n, r, s = "padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box",
				a = o.getElementsByTagName("body")[0];
			a && (n = o.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", a.appendChild(n).appendChild(i), i.innerHTML = "", i.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%", x.swap(a, null != a.style.zoom ? {
				zoom: 1
			} : {}, function() {
				t.boxSizing = 4 === i.offsetWidth
			}), e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(i, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(i, null) || {
				width: "4px"
			}).width, r = i.appendChild(o.createElement("div")), r.style.cssText = i.style.cssText = s, r.style.marginRight = r.style.width = "0", i.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), a.removeChild(n))
		}), t) : t
	}({});
	var L, q, H = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
		O = /([A-Z])/g;

	function F() {
		Object.defineProperty(this.cache = {}, 0, {
			get: function() {
				return {}
			}
		}), this.expando = x.expando + Math.random()
	}
	F.uid = 1, F.accepts = function(e) {
		return e.nodeType ? 1 === e.nodeType || 9 === e.nodeType : !0
	}, F.prototype = {
		key: function(e) {
			if (!F.accepts(e)) return 0;
			var t = {},
				n = e[this.expando];
			if (!n) {
				n = F.uid++;
				try {
					t[this.expando] = {
						value: n
					}, Object.defineProperties(e, t)
				} catch (r) {
					t[this.expando] = n, x.extend(e, t)
				}
			}
			return this.cache[n] || (this.cache[n] = {}), n
		},
		set: function(e, t, n) {
			var r, i = this.key(e),
				o = this.cache[i];
			if ("string" == typeof t) o[t] = n;
			else if (x.isEmptyObject(o)) x.extend(this.cache[i], t);
			else
				for (r in t) o[r] = t[r];
			return o
		},
		get: function(e, t) {
			var n = this.cache[this.key(e)];
			return t === undefined ? n : n[t]
		},
		access: function(e, t, n) {
			var r;
			return t === undefined || t && "string" == typeof t && n === undefined ? (r = this.get(e, t), r !== undefined ? r : this.get(e, x.camelCase(t))) : (this.set(e, t, n), n !== undefined ? n : t)
		},
		remove: function(e, t) {
			var n, r, i, o = this.key(e),
				s = this.cache[o];
			if (t === undefined) this.cache[o] = {};
			else {
				x.isArray(t) ? r = t.concat(t.map(x.camelCase)) : (i = x.camelCase(t), t in s ? r = [t, i] : (r = i, r = r in s ? [r] : r.match(w) || [])), n = r.length;
				while (n--) delete s[r[n]]
			}
		},
		hasData: function(e) {
			return !x.isEmptyObject(this.cache[e[this.expando]] || {})
		},
		discard: function(e) {
			e[this.expando] && delete this.cache[e[this.expando]]
		}
	}, L = new F, q = new F, x.extend({
		acceptData: F.accepts,
		hasData: function(e) {
			return L.hasData(e) || q.hasData(e)
		},
		data: function(e, t, n) {
			return L.access(e, t, n)
		},
		removeData: function(e, t) {
			L.remove(e, t)
		},
		_data: function(e, t, n) {
			return q.access(e, t, n)
		},
		_removeData: function(e, t) {
			q.remove(e, t)
		}
	}), x.fn.extend({
		data: function(e, t) {
			var n, r, i = this[0],
				o = 0,
				s = null;
			if (e === undefined) {
				if (this.length && (s = L.get(i), 1 === i.nodeType && !q.get(i, "hasDataAttrs"))) {
					for (n = i.attributes; n.length > o; o++) r = n[o].name, 0 === r.indexOf("data-") && (r = x.camelCase(r.slice(5)), P(i, r, s[r]));
					q.set(i, "hasDataAttrs", !0)
				}
				return s
			}
			return "object" == typeof e ? this.each(function() {
				L.set(this, e)
			}) : x.access(this, function(t) {
				var n, r = x.camelCase(e);
				if (i && t === undefined) {
					if (n = L.get(i, e), n !== undefined) return n;
					if (n = L.get(i, r), n !== undefined) return n;
					if (n = P(i, r, undefined), n !== undefined) return n
				} else this.each(function() {
					var n = L.get(this, r);
					L.set(this, r, t), -1 !== e.indexOf("-") && n !== undefined && L.set(this, e, t)
				})
			}, null, t, arguments.length > 1, null, !0)
		},
		removeData: function(e) {
			return this.each(function() {
				L.remove(this, e)
			})
		}
	});

	function P(e, t, n) {
		var r;
		if (n === undefined && 1 === e.nodeType)
			if (r = "data-" + t.replace(O, "-$1").toLowerCase(), n = e.getAttribute(r), "string" == typeof n) {
				try {
					n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : H.test(n) ? JSON.parse(n) : n
				} catch (i) {}
				L.set(e, t, n)
			} else n = undefined;
		return n
	}
	x.extend({
		queue: function(e, t, n) {
			var r;
			return e ? (t = (t || "fx") + "queue", r = q.get(e, t), n && (!r || x.isArray(n) ? r = q.access(e, t, x.makeArray(n)) : r.push(n)), r || []) : undefined
		},
		dequeue: function(e, t) {
			t = t || "fx";
			var n = x.queue(e, t),
				r = n.length,
				i = n.shift(),
				o = x._queueHooks(e, t),
				s = function() {
					x.dequeue(e, t)
				};
			"inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, s, o)), !r && o && o.empty.fire()
		},
		_queueHooks: function(e, t) {
			var n = t + "queueHooks";
			return q.get(e, n) || q.access(e, n, {
				empty: x.Callbacks("once memory").add(function() {
					q.remove(e, [t + "queue", n])
				})
			})
		}
	}), x.fn.extend({
		queue: function(e, t) {
			var n = 2;
			return "string" != typeof e && (t = e, e = "fx", n--), n > arguments.length ? x.queue(this[0], e) : t === undefined ? this : this.each(function() {
				var n = x.queue(this, e, t);
				x._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && x.dequeue(this, e)
			})
		},
		dequeue: function(e) {
			return this.each(function() {
				x.dequeue(this, e)
			})
		},
		delay: function(e, t) {
			return e = x.fx ? x.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
				var r = setTimeout(t, e);
				n.stop = function() {
					clearTimeout(r)
				}
			})
		},
		clearQueue: function(e) {
			return this.queue(e || "fx", [])
		},
		promise: function(e, t) {
			var n, r = 1,
				i = x.Deferred(),
				o = this,
				s = this.length,
				a = function() {
					--r || i.resolveWith(o, [o])
				};
			"string" != typeof e && (t = e, e = undefined), e = e || "fx";
			while (s--) n = q.get(o[s], e + "queueHooks"), n && n.empty && (r++, n.empty.add(a));
			return a(), i.promise(t)
		}
	});
	var R, M, W = /[\t\r\n\f]/g,
		$ = /\r/g,
		B = /^(?:input|select|textarea|button)$/i;
	x.fn.extend({
		attr: function(e, t) {
			return x.access(this, x.attr, e, t, arguments.length > 1)
		},
		removeAttr: function(e) {
			return this.each(function() {
				x.removeAttr(this, e)
			})
		},
		prop: function(e, t) {
			return x.access(this, x.prop, e, t, arguments.length > 1)
		},
		removeProp: function(e) {
			return this.each(function() {
				delete this[x.propFix[e] || e]
			})
		},
		addClass: function(e) {
			var t, n, r, i, o, s = 0,
				a = this.length,
				u = "string" == typeof e && e;
			if (x.isFunction(e)) return this.each(function(t) {
				x(this).addClass(e.call(this, t, this.className))
			});
			if (u)
				for (t = (e || "").match(w) || []; a > s; s++)
					if (n = this[s], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(W, " ") : " ")) {
						o = 0;
						while (i = t[o++]) 0 > r.indexOf(" " + i + " ") && (r += i + " ");
						n.className = x.trim(r)
					}
			return this
		},
		removeClass: function(e) {
			var t, n, r, i, o, s = 0,
				a = this.length,
				u = 0 === arguments.length || "string" == typeof e && e;
			if (x.isFunction(e)) return this.each(function(t) {
				x(this).removeClass(e.call(this, t, this.className))
			});
			if (u)
				for (t = (e || "").match(w) || []; a > s; s++)
					if (n = this[s], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(W, " ") : "")) {
						o = 0;
						while (i = t[o++])
							while (r.indexOf(" " + i + " ") >= 0) r = r.replace(" " + i + " ", " ");
						n.className = e ? x.trim(r) : ""
					}
			return this
		},
		toggleClass: function(e, t) {
			var n = typeof e;
			return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : x.isFunction(e) ? this.each(function(n) {
				x(this).toggleClass(e.call(this, n, this.className, t), t)
			}) : this.each(function() {
				if ("string" === n) {
					var t, i = 0,
						o = x(this),
						s = e.match(w) || [];
					while (t = s[i++]) o.hasClass(t) ? o.removeClass(t) : o.addClass(t)
				} else(n === r || "boolean" === n) && (this.className && q.set(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : q.get(this, "__className__") || "")
			})
		},
		hasClass: function(e) {
			var t = " " + e + " ",
				n = 0,
				r = this.length;
			for (; r > n; n++)
				if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(W, " ").indexOf(t) >= 0) return !0;
			return !1
		},
		val: function(e) {
			var t, n, r, i = this[0]; {
				if (arguments.length) return r = x.isFunction(e), this.each(function(n) {
					var i;
					1 === this.nodeType && (i = r ? e.call(this, n, x(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : x.isArray(i) && (i = x.map(i, function(e) {
						return null == e ? "" : e + ""
					})), t = x.valHooks[this.type] || x.valHooks[this.nodeName.toLowerCase()], t && "set" in t && t.set(this, i, "value") !== undefined || (this.value = i))
				});
				if (i) return t = x.valHooks[i.type] || x.valHooks[i.nodeName.toLowerCase()], t && "get" in t && (n = t.get(i, "value")) !== undefined ? n : (n = i.value, "string" == typeof n ? n.replace($, "") : null == n ? "" : n)
			}
		}
	}), x.extend({
		valHooks: {
			option: {
				get: function(e) {
					var t = e.attributes.value;
					return !t || t.specified ? e.value : e.text
				}
			},
			select: {
				get: function(e) {
					var t, n, r = e.options,
						i = e.selectedIndex,
						o = "select-one" === e.type || 0 > i,
						s = o ? null : [],
						a = o ? i + 1 : r.length,
						u = 0 > i ? a : o ? i : 0;
					for (; a > u; u++)
						if (n = r[u], !(!n.selected && u !== i || (x.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && x.nodeName(n.parentNode, "optgroup"))) {
							if (t = x(n).val(), o) return t;
							s.push(t)
						}
					return s
				},
				set: function(e, t) {
					var n, r, i = e.options,
						o = x.makeArray(t),
						s = i.length;
					while (s--) r = i[s], (r.selected = x.inArray(x(r).val(), o) >= 0) && (n = !0);
					return n || (e.selectedIndex = -1), o
				}
			}
		},
		attr: function(e, t, n) {
			var i, o, s = e.nodeType;
			if (e && 3 !== s && 8 !== s && 2 !== s) return typeof e.getAttribute === r ? x.prop(e, t, n) : (1 === s && x.isXMLDoc(e) || (t = t.toLowerCase(), i = x.attrHooks[t] || (x.expr.match.bool.test(t) ? M : R)), n === undefined ? i && "get" in i && null !== (o = i.get(e, t)) ? o : (o = x.find.attr(e, t), null == o ? undefined : o) : null !== n ? i && "set" in i && (o = i.set(e, n, t)) !== undefined ? o : (e.setAttribute(t, n + ""), n) : (x.removeAttr(e, t), undefined))
		},
		removeAttr: function(e, t) {
			var n, r, i = 0,
				o = t && t.match(w);
			if (o && 1 === e.nodeType)
				while (n = o[i++]) r = x.propFix[n] || n, x.expr.match.bool.test(n) && (e[r] = !1), e.removeAttribute(n)
		},
		attrHooks: {
			type: {
				set: function(e, t) {
					if (!x.support.radioValue && "radio" === t && x.nodeName(e, "input")) {
						var n = e.value;
						return e.setAttribute("type", t), n && (e.value = n), t
					}
				}
			}
		},
		propFix: {
			"for": "htmlFor",
			"class": "className"
		},
		prop: function(e, t, n) {
			var r, i, o, s = e.nodeType;
			if (e && 3 !== s && 8 !== s && 2 !== s) return o = 1 !== s || !x.isXMLDoc(e), o && (t = x.propFix[t] || t, i = x.propHooks[t]), n !== undefined ? i && "set" in i && (r = i.set(e, n, t)) !== undefined ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
		},
		propHooks: {
			tabIndex: {
				get: function(e) {
					return e.hasAttribute("tabindex") || B.test(e.nodeName) || e.href ? e.tabIndex : -1
				}
			}
		}
	}), M = {
		set: function(e, t, n) {
			return t === !1 ? x.removeAttr(e, n) : e.setAttribute(n, n), n
		}
	}, x.each(x.expr.match.bool.source.match(/\w+/g), function(e, t) {
		var n = x.expr.attrHandle[t] || x.find.attr;
		x.expr.attrHandle[t] = function(e, t, r) {
			var i = x.expr.attrHandle[t],
				o = r ? undefined : (x.expr.attrHandle[t] = undefined) != n(e, t, r) ? t.toLowerCase() : null;
			return x.expr.attrHandle[t] = i, o
		}
	}), x.support.optSelected || (x.propHooks.selected = {
		get: function(e) {
			var t = e.parentNode;
			return t && t.parentNode && t.parentNode.selectedIndex, null
		}
	}), x.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
		x.propFix[this.toLowerCase()] = this
	}), x.each(["radio", "checkbox"], function() {
		x.valHooks[this] = {
			set: function(e, t) {
				return x.isArray(t) ? e.checked = x.inArray(x(e).val(), t) >= 0 : undefined
			}
		}, x.support.checkOn || (x.valHooks[this].get = function(e) {
			return null === e.getAttribute("value") ? "on" : e.value
		})
	});
	var I = /^key/,
		z = /^(?:mouse|contextmenu)|click/,
		_ = /^(?:focusinfocus|focusoutblur)$/,
		X = /^([^.]*)(?:\.(.+)|)$/;

	function U() {
		return !0
	}

	function Y() {
		return !1
	}

	function V() {
		try {
			return o.activeElement
		} catch (e) {}
	}
	x.event = {
		global: {},
		add: function(e, t, n, i, o) {
			var s, a, u, l, c, p, f, h, d, g, m, y = q.get(e);
			if (y) {
				n.handler && (s = n, n = s.handler, o = s.selector), n.guid || (n.guid = x.guid++), (l = y.events) || (l = y.events = {}), (a = y.handle) || (a = y.handle = function(e) {
					return typeof x === r || e && x.event.triggered === e.type ? undefined : x.event.dispatch.apply(a.elem, arguments)
				}, a.elem = e), t = (t || "").match(w) || [""], c = t.length;
				while (c--) u = X.exec(t[c]) || [], d = m = u[1], g = (u[2] || "").split(".").sort(), d && (f = x.event.special[d] || {}, d = (o ? f.delegateType : f.bindType) || d, f = x.event.special[d] || {}, p = x.extend({
					type: d,
					origType: m,
					data: i,
					handler: n,
					guid: n.guid,
					selector: o,
					needsContext: o && x.expr.match.needsContext.test(o),
					namespace: g.join(".")
				}, s), (h = l[d]) || (h = l[d] = [], h.delegateCount = 0, f.setup && f.setup.call(e, i, g, a) !== !1 || e.addEventListener && e.addEventListener(d, a, !1)), f.add && (f.add.call(e, p), p.handler.guid || (p.handler.guid = n.guid)), o ? h.splice(h.delegateCount++, 0, p) : h.push(p), x.event.global[d] = !0);
				e = null
			}
		},
		remove: function(e, t, n, r, i) {
			var o, s, a, u, l, c, p, f, h, d, g, m = q.hasData(e) && q.get(e);
			if (m && (u = m.events)) {
				t = (t || "").match(w) || [""], l = t.length;
				while (l--)
					if (a = X.exec(t[l]) || [], h = g = a[1], d = (a[2] || "").split(".").sort(), h) {
						p = x.event.special[h] || {}, h = (r ? p.delegateType : p.bindType) || h, f = u[h] || [], a = a[2] && RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = f.length;
						while (o--) c = f[o], !i && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (f.splice(o, 1), c.selector && f.delegateCount--, p.remove && p.remove.call(e, c));
						s && !f.length && (p.teardown && p.teardown.call(e, d, m.handle) !== !1 || x.removeEvent(e, h, m.handle), delete u[h])
					} else
						for (h in u) x.event.remove(e, h + t[l], n, r, !0);
				x.isEmptyObject(u) && (delete m.handle, q.remove(e, "events"))
			}
		},
		trigger: function(t, n, r, i) {
			var s, a, u, l, c, p, f, h = [r || o],
				d = y.call(t, "type") ? t.type : t,
				g = y.call(t, "namespace") ? t.namespace.split(".") : [];
			if (a = u = r = r || o, 3 !== r.nodeType && 8 !== r.nodeType && !_.test(d + x.event.triggered) && (d.indexOf(".") >= 0 && (g = d.split("."), d = g.shift(), g.sort()), c = 0 > d.indexOf(":") && "on" + d, t = t[x.expando] ? t : new x.Event(d, "object" == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = g.join("."), t.namespace_re = t.namespace ? RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = undefined, t.target || (t.target = r), n = null == n ? [t] : x.makeArray(n, [t]), f = x.event.special[d] || {}, i || !f.trigger || f.trigger.apply(r, n) !== !1)) {
				if (!i && !f.noBubble && !x.isWindow(r)) {
					for (l = f.delegateType || d, _.test(l + d) || (a = a.parentNode); a; a = a.parentNode) h.push(a), u = a;
					u === (r.ownerDocument || o) && h.push(u.defaultView || u.parentWindow || e)
				}
				s = 0;
				while ((a = h[s++]) && !t.isPropagationStopped()) t.type = s > 1 ? l : f.bindType || d, p = (q.get(a, "events") || {})[t.type] && q.get(a, "handle"), p && p.apply(a, n), p = c && a[c], p && x.acceptData(a) && p.apply && p.apply(a, n) === !1 && t.preventDefault();
				return t.type = d, i || t.isDefaultPrevented() || f._default && f._default.apply(h.pop(), n) !== !1 || !x.acceptData(r) || c && x.isFunction(r[d]) && !x.isWindow(r) && (u = r[c], u && (r[c] = null), x.event.triggered = d, r[d](), x.event.triggered = undefined, u && (r[c] = u)), t.result
			}
		},
		dispatch: function(e) {
			e = x.event.fix(e);
			var t, n, r, i, o, s = [],
				a = d.call(arguments),
				u = (q.get(this, "events") || {})[e.type] || [],
				l = x.event.special[e.type] || {};
			if (a[0] = e, e.delegateTarget = this, !l.preDispatch || l.preDispatch.call(this, e) !== !1) {
				s = x.event.handlers.call(this, e, u), t = 0;
				while ((i = s[t++]) && !e.isPropagationStopped()) {
					e.currentTarget = i.elem, n = 0;
					while ((o = i.handlers[n++]) && !e.isImmediatePropagationStopped())(!e.namespace_re || e.namespace_re.test(o.namespace)) && (e.handleObj = o, e.data = o.data, r = ((x.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, a), r !== undefined && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()))
				}
				return l.postDispatch && l.postDispatch.call(this, e), e.result
			}
		},
		handlers: function(e, t) {
			var n, r, i, o, s = [],
				a = t.delegateCount,
				u = e.target;
			if (a && u.nodeType && (!e.button || "click" !== e.type))
				for (; u !== this; u = u.parentNode || this)
					if (u.disabled !== !0 || "click" !== e.type) {
						for (r = [], n = 0; a > n; n++) o = t[n], i = o.selector + " ", r[i] === undefined && (r[i] = o.needsContext ? x(i, this).index(u) >= 0 : x.find(i, this, null, [u]).length), r[i] && r.push(o);
						r.length && s.push({
							elem: u,
							handlers: r
						})
					}
			return t.length > a && s.push({
				elem: this,
				handlers: t.slice(a)
			}), s
		},
		props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
		fixHooks: {},
		keyHooks: {
			props: "char charCode key keyCode".split(" "),
			filter: function(e, t) {
				return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
			}
		},
		mouseHooks: {
			props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
			filter: function(e, t) {
				var n, r, i, s = t.button;
				return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || o, r = n.documentElement, i = n.body, e.pageX = t.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)), e.which || s === undefined || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e
			}
		},
		fix: function(e) {
			if (e[x.expando]) return e;
			var t, n, r, i = e.type,
				s = e,
				a = this.fixHooks[i];
			a || (this.fixHooks[i] = a = z.test(i) ? this.mouseHooks : I.test(i) ? this.keyHooks : {}), r = a.props ? this.props.concat(a.props) : this.props, e = new x.Event(s), t = r.length;
			while (t--) n = r[t], e[n] = s[n];
			return e.target || (e.target = o), 3 === e.target.nodeType && (e.target = e.target.parentNode), a.filter ? a.filter(e, s) : e
		},
		special: {
			load: {
				noBubble: !0
			},
			focus: {
				trigger: function() {
					return this !== V() && this.focus ? (this.focus(), !1) : undefined
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					return this === V() && this.blur ? (this.blur(), !1) : undefined
				},
				delegateType: "focusout"
			},
			click: {
				trigger: function() {
					return "checkbox" === this.type && this.click && x.nodeName(this, "input") ? (this.click(), !1) : undefined
				},
				_default: function(e) {
					return x.nodeName(e.target, "a")
				}
			},
			beforeunload: {
				postDispatch: function(e) {
					e.result !== undefined && (e.originalEvent.returnValue = e.result)
				}
			}
		},
		simulate: function(e, t, n, r) {
			var i = x.extend(new x.Event, n, {
				type: e,
				isSimulated: !0,
				originalEvent: {}
			});
			r ? x.event.trigger(i, null, t) : x.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
		}
	}, x.removeEvent = function(e, t, n) {
		e.removeEventListener && e.removeEventListener(t, n, !1)
	}, x.Event = function(e, t) {
		return this instanceof x.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.getPreventDefault && e.getPreventDefault() ? U : Y) : this.type = e, t && x.extend(this, t), this.timeStamp = e && e.timeStamp || x.now(), this[x.expando] = !0, undefined) : new x.Event(e, t)
	}, x.Event.prototype = {
		isDefaultPrevented: Y,
		isPropagationStopped: Y,
		isImmediatePropagationStopped: Y,
		preventDefault: function() {
			var e = this.originalEvent;
			this.isDefaultPrevented = U, e && e.preventDefault && e.preventDefault()
		},
		stopPropagation: function() {
			var e = this.originalEvent;
			this.isPropagationStopped = U, e && e.stopPropagation && e.stopPropagation()
		},
		stopImmediatePropagation: function() {
			this.isImmediatePropagationStopped = U, this.stopPropagation()
		}
	}, x.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout"
	}, function(e, t) {
		x.event.special[e] = {
			delegateType: t,
			bindType: t,
			handle: function(e) {
				var n, r = this,
					i = e.relatedTarget,
					o = e.handleObj;
				return (!i || i !== r && !x.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
			}
		}
	}), x.support.focusinBubbles || x.each({
		focus: "focusin",
		blur: "focusout"
	}, function(e, t) {
		var n = 0,
			r = function(e) {
				x.event.simulate(t, e.target, x.event.fix(e), !0)
			};
		x.event.special[t] = {
			setup: function() {
				0 === n++ && o.addEventListener(e, r, !0)
			},
			teardown: function() {
				0 === --n && o.removeEventListener(e, r, !0)
			}
		}
	}), x.fn.extend({
		on: function(e, t, n, r, i) {
			var o, s;
			if ("object" == typeof e) {
				"string" != typeof t && (n = n || t, t = undefined);
				for (s in e) this.on(s, t, n, e[s], i);
				return this
			}
			if (null == n && null == r ? (r = t, n = t = undefined) : null == r && ("string" == typeof t ? (r = n, n = undefined) : (r = n, n = t, t = undefined)), r === !1) r = Y;
			else if (!r) return this;
			return 1 === i && (o = r, r = function(e) {
				return x().off(e), o.apply(this, arguments)
			}, r.guid = o.guid || (o.guid = x.guid++)), this.each(function() {
				x.event.add(this, e, r, n, t)
			})
		},
		one: function(e, t, n, r) {
			return this.on(e, t, n, r, 1)
		},
		off: function(e, t, n) {
			var r, i;
			if (e && e.preventDefault && e.handleObj) return r = e.handleObj, x(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
			if ("object" == typeof e) {
				for (i in e) this.off(i, t, e[i]);
				return this
			}
			return (t === !1 || "function" == typeof t) && (n = t, t = undefined), n === !1 && (n = Y), this.each(function() {
				x.event.remove(this, e, n, t)
			})
		},
		trigger: function(e, t) {
			return this.each(function() {
				x.event.trigger(e, t, this)
			})
		},
		triggerHandler: function(e, t) {
			var n = this[0];
			return n ? x.event.trigger(e, t, n, !0) : undefined
		}
	});
	var G = /^.[^:#\[\.,]*$/,
		J = /^(?:parents|prev(?:Until|All))/,
		Q = x.expr.match.needsContext,
		K = {
			children: !0,
			contents: !0,
			next: !0,
			prev: !0
		};
	x.fn.extend({
		find: function(e) {
			var t, n = [],
				r = this,
				i = r.length;
			if ("string" != typeof e) return this.pushStack(x(e).filter(function() {
				for (t = 0; i > t; t++)
					if (x.contains(r[t], this)) return !0
			}));
			for (t = 0; i > t; t++) x.find(e, r[t], n);
			return n = this.pushStack(i > 1 ? x.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
		},
		has: function(e) {
			var t = x(e, this),
				n = t.length;
			return this.filter(function() {
				var e = 0;
				for (; n > e; e++)
					if (x.contains(this, t[e])) return !0
			})
		},
		not: function(e) {
			return this.pushStack(et(this, e || [], !0))
		},
		filter: function(e) {
			return this.pushStack(et(this, e || [], !1))
		},
		is: function(e) {
			return !!et(this, "string" == typeof e && Q.test(e) ? x(e) : e || [], !1).length
		},
		closest: function(e, t) {
			var n, r = 0,
				i = this.length,
				o = [],
				s = Q.test(e) || "string" != typeof e ? x(e, t || this.context) : 0;
			for (; i > r; r++)
				for (n = this[r]; n && n !== t; n = n.parentNode)
					if (11 > n.nodeType && (s ? s.index(n) > -1 : 1 === n.nodeType && x.find.matchesSelector(n, e))) {
						n = o.push(n);
						break
					}
			return this.pushStack(o.length > 1 ? x.unique(o) : o)
		},
		index: function(e) {
			return e ? "string" == typeof e ? g.call(x(e), this[0]) : g.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
		},
		add: function(e, t) {
			var n = "string" == typeof e ? x(e, t) : x.makeArray(e && e.nodeType ? [e] : e),
				r = x.merge(this.get(), n);
			return this.pushStack(x.unique(r))
		},
		addBack: function(e) {
			return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
		}
	});

	function Z(e, t) {
		while ((e = e[t]) && 1 !== e.nodeType);
		return e
	}
	x.each({
		parent: function(e) {
			var t = e.parentNode;
			return t && 11 !== t.nodeType ? t : null
		},
		parents: function(e) {
			return x.dir(e, "parentNode")
		},
		parentsUntil: function(e, t, n) {
			return x.dir(e, "parentNode", n)
		},
		next: function(e) {
			return Z(e, "nextSibling")
		},
		prev: function(e) {
			return Z(e, "previousSibling")
		},
		nextAll: function(e) {
			return x.dir(e, "nextSibling")
		},
		prevAll: function(e) {
			return x.dir(e, "previousSibling")
		},
		nextUntil: function(e, t, n) {
			return x.dir(e, "nextSibling", n)
		},
		prevUntil: function(e, t, n) {
			return x.dir(e, "previousSibling", n)
		},
		siblings: function(e) {
			return x.sibling((e.parentNode || {}).firstChild, e)
		},
		children: function(e) {
			return x.sibling(e.firstChild)
		},
		contents: function(e) {
			return e.contentDocument || x.merge([], e.childNodes)
		}
	}, function(e, t) {
		x.fn[e] = function(n, r) {
			var i = x.map(this, t, n);
			return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = x.filter(r, i)), this.length > 1 && (K[e] || x.unique(i), J.test(e) && i.reverse()), this.pushStack(i)
		}
	}), x.extend({
		filter: function(e, t, n) {
			var r = t[0];
			return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? x.find.matchesSelector(r, e) ? [r] : [] : x.find.matches(e, x.grep(t, function(e) {
				return 1 === e.nodeType
			}))
		},
		dir: function(e, t, n) {
			var r = [],
				i = n !== undefined;
			while ((e = e[t]) && 9 !== e.nodeType)
				if (1 === e.nodeType) {
					if (i && x(e).is(n)) break;
					r.push(e)
				}
			return r
		},
		sibling: function(e, t) {
			var n = [];
			for (; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
			return n
		}
	});

	function et(e, t, n) {
		if (x.isFunction(t)) return x.grep(e, function(e, r) {
			return !!t.call(e, r, e) !== n
		});
		if (t.nodeType) return x.grep(e, function(e) {
			return e === t !== n
		});
		if ("string" == typeof t) {
			if (G.test(t)) return x.filter(t, e, n);
			t = x.filter(t, e)
		}
		return x.grep(e, function(e) {
			return g.call(t, e) >= 0 !== n
		})
	}
	var tt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
		nt = /<([\w:]+)/,
		rt = /<|&#?\w+;/,
		it = /<(?:script|style|link)/i,
		ot = /^(?:checkbox|radio)$/i,
		st = /checked\s*(?:[^=]|=\s*.checked.)/i,
		at = /^$|\/(?:java|ecma)script/i,
		ut = /^true\/(.*)/,
		lt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
		ct = {
			option: [1, "<select multiple='multiple'>", "</select>"],
			thead: [1, "<table>", "</table>"],
			col: [2, "<table><colgroup>", "</colgroup></table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
			_default: [0, "", ""]
		};
	ct.optgroup = ct.option, ct.tbody = ct.tfoot = ct.colgroup = ct.caption = ct.thead, ct.th = ct.td, x.fn.extend({
		text: function(e) {
			return x.access(this, function(e) {
				return e === undefined ? x.text(this) : this.empty().append((this[0] && this[0].ownerDocument || o).createTextNode(e))
			}, null, e, arguments.length)
		},
		append: function() {
			return this.domManip(arguments, function(e) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var t = pt(this, e);
					t.appendChild(e)
				}
			})
		},
		prepend: function() {
			return this.domManip(arguments, function(e) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var t = pt(this, e);
					t.insertBefore(e, t.firstChild)
				}
			})
		},
		before: function() {
			return this.domManip(arguments, function(e) {
				this.parentNode && this.parentNode.insertBefore(e, this)
			})
		},
		after: function() {
			return this.domManip(arguments, function(e) {
				this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
			})
		},
		remove: function(e, t) {
			var n, r = e ? x.filter(e, this) : this,
				i = 0;
			for (; null != (n = r[i]); i++) t || 1 !== n.nodeType || x.cleanData(mt(n)), n.parentNode && (t && x.contains(n.ownerDocument, n) && dt(mt(n, "script")), n.parentNode.removeChild(n));
			return this
		},
		empty: function() {
			var e, t = 0;
			for (; null != (e = this[t]); t++) 1 === e.nodeType && (x.cleanData(mt(e, !1)), e.textContent = "");
			return this
		},
		clone: function(e, t) {
			return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
				return x.clone(this, e, t)
			})
		},
		html: function(e) {
			return x.access(this, function(e) {
				var t = this[0] || {},
					n = 0,
					r = this.length;
				if (e === undefined && 1 === t.nodeType) return t.innerHTML;
				if ("string" == typeof e && !it.test(e) && !ct[(nt.exec(e) || ["", ""])[1].toLowerCase()]) {
					e = e.replace(tt, "<$1></$2>");
					try {
						for (; r > n; n++) t = this[n] || {}, 1 === t.nodeType && (x.cleanData(mt(t, !1)), t.innerHTML = e);
						t = 0
					} catch (i) {}
				}
				t && this.empty().append(e)
			}, null, e, arguments.length)
		},
		replaceWith: function() {
			var e = x.map(this, function(e) {
					return [e.nextSibling, e.parentNode]
				}),
				t = 0;
			return this.domManip(arguments, function(n) {
				var r = e[t++],
					i = e[t++];
				i && (r && r.parentNode !== i && (r = this.nextSibling), x(this).remove(), i.insertBefore(n, r))
			}, !0), t ? this : this.remove()
		},
		detach: function(e) {
			return this.remove(e, !0)
		},
		domManip: function(e, t, n) {
			e = f.apply([], e);
			var r, i, o, s, a, u, l = 0,
				c = this.length,
				p = this,
				h = c - 1,
				d = e[0],
				g = x.isFunction(d);
			if (g || !(1 >= c || "string" != typeof d || x.support.checkClone) && st.test(d)) return this.each(function(r) {
				var i = p.eq(r);
				g && (e[0] = d.call(this, r, i.html())), i.domManip(e, t, n)
			});
			if (c && (r = x.buildFragment(e, this[0].ownerDocument, !1, !n && this), i = r.firstChild, 1 === r.childNodes.length && (r = i), i)) {
				for (o = x.map(mt(r, "script"), ft), s = o.length; c > l; l++) a = r, l !== h && (a = x.clone(a, !0, !0), s && x.merge(o, mt(a, "script"))), t.call(this[l], a, l);
				if (s)
					for (u = o[o.length - 1].ownerDocument, x.map(o, ht), l = 0; s > l; l++) a = o[l], at.test(a.type || "") && !q.access(a, "globalEval") && x.contains(u, a) && (a.src ? x._evalUrl(a.src) : x.globalEval(a.textContent.replace(lt, "")))
			}
			return this
		}
	}), x.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function(e, t) {
		x.fn[e] = function(e) {
			var n, r = [],
				i = x(e),
				o = i.length - 1,
				s = 0;
			for (; o >= s; s++) n = s === o ? this : this.clone(!0), x(i[s])[t](n), h.apply(r, n.get());
			return this.pushStack(r)
		}
	}), x.extend({
		clone: function(e, t, n) {
			var r, i, o, s, a = e.cloneNode(!0),
				u = x.contains(e.ownerDocument, e);
			if (!(x.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || x.isXMLDoc(e)))
				for (s = mt(a), o = mt(e), r = 0, i = o.length; i > r; r++) yt(o[r], s[r]);
			if (t)
				if (n)
					for (o = o || mt(e), s = s || mt(a), r = 0, i = o.length; i > r; r++) gt(o[r], s[r]);
				else gt(e, a);
			return s = mt(a, "script"), s.length > 0 && dt(s, !u && mt(e, "script")), a
		},
		buildFragment: function(e, t, n, r) {
			var i, o, s, a, u, l, c = 0,
				p = e.length,
				f = t.createDocumentFragment(),
				h = [];
			for (; p > c; c++)
				if (i = e[c], i || 0 === i)
					if ("object" === x.type(i)) x.merge(h, i.nodeType ? [i] : i);
					else if (rt.test(i)) {
				o = o || f.appendChild(t.createElement("div")), s = (nt.exec(i) || ["", ""])[1].toLowerCase(), a = ct[s] || ct._default, o.innerHTML = a[1] + i.replace(tt, "<$1></$2>") + a[2], l = a[0];
				while (l--) o = o.lastChild;
				x.merge(h, o.childNodes), o = f.firstChild, o.textContent = ""
			} else h.push(t.createTextNode(i));
			f.textContent = "", c = 0;
			while (i = h[c++])
				if ((!r || -1 === x.inArray(i, r)) && (u = x.contains(i.ownerDocument, i), o = mt(f.appendChild(i), "script"), u && dt(o), n)) {
					l = 0;
					while (i = o[l++]) at.test(i.type || "") && n.push(i)
				}
			return f
		},
		cleanData: function(e) {
			var t, n, r, i, o, s, a = x.event.special,
				u = 0;
			for (;
				(n = e[u]) !== undefined; u++) {
				if (F.accepts(n) && (o = n[q.expando], o && (t = q.cache[o]))) {
					if (r = Object.keys(t.events || {}), r.length)
						for (s = 0;
							(i = r[s]) !== undefined; s++) a[i] ? x.event.remove(n, i) : x.removeEvent(n, i, t.handle);
					q.cache[o] && delete q.cache[o]
				}
				delete L.cache[n[L.expando]]
			}
		},
		_evalUrl: function(e) {
			return x.ajax({
				url: e,
				type: "GET",
				dataType: "script",
				async: !1,
				global: !1,
				"throws": !0
			})
		}
	});

	function pt(e, t) {
		return x.nodeName(e, "table") && x.nodeName(1 === t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
	}

	function ft(e) {
		return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
	}

	function ht(e) {
		var t = ut.exec(e.type);
		return t ? e.type = t[1] : e.removeAttribute("type"), e
	}

	function dt(e, t) {
		var n = e.length,
			r = 0;
		for (; n > r; r++) q.set(e[r], "globalEval", !t || q.get(t[r], "globalEval"))
	}

	function gt(e, t) {
		var n, r, i, o, s, a, u, l;
		if (1 === t.nodeType) {
			if (q.hasData(e) && (o = q.access(e), s = q.set(t, o), l = o.events)) {
				delete s.handle, s.events = {};
				for (i in l)
					for (n = 0, r = l[i].length; r > n; n++) x.event.add(t, i, l[i][n])
			}
			L.hasData(e) && (a = L.access(e), u = x.extend({}, a), L.set(t, u))
		}
	}

	function mt(e, t) {
		var n = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
		return t === undefined || t && x.nodeName(e, t) ? x.merge([e], n) : n
	}

	function yt(e, t) {
		var n = t.nodeName.toLowerCase();
		"input" === n && ot.test(e.type) ? t.checked = e.checked : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
	}
	x.fn.extend({
		wrapAll: function(e) {
			var t;
			return x.isFunction(e) ? this.each(function(t) {
				x(this).wrapAll(e.call(this, t))
			}) : (this[0] && (t = x(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
				var e = this;
				while (e.firstElementChild) e = e.firstElementChild;
				return e
			}).append(this)), this)
		},
		wrapInner: function(e) {
			return x.isFunction(e) ? this.each(function(t) {
				x(this).wrapInner(e.call(this, t))
			}) : this.each(function() {
				var t = x(this),
					n = t.contents();
				n.length ? n.wrapAll(e) : t.append(e)
			})
		},
		wrap: function(e) {
			var t = x.isFunction(e);
			return this.each(function(n) {
				x(this).wrapAll(t ? e.call(this, n) : e)
			})
		},
		unwrap: function() {
			return this.parent().each(function() {
				x.nodeName(this, "body") || x(this).replaceWith(this.childNodes)
			}).end()
		}
	});
	var vt, xt, bt = /^(none|table(?!-c[ea]).+)/,
		wt = /^margin/,
		Tt = RegExp("^(" + b + ")(.*)$", "i"),
		Ct = RegExp("^(" + b + ")(?!px)[a-z%]+$", "i"),
		kt = RegExp("^([+-])=(" + b + ")", "i"),
		Nt = {
			BODY: "block"
		},
		Et = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		},
		St = {
			letterSpacing: 0,
			fontWeight: 400
		},
		jt = ["Top", "Right", "Bottom", "Left"],
		Dt = ["Webkit", "O", "Moz", "ms"];

	function At(e, t) {
		if (t in e) return t;
		var n = t.charAt(0).toUpperCase() + t.slice(1),
			r = t,
			i = Dt.length;
		while (i--)
			if (t = Dt[i] + n, t in e) return t;
		return r
	}

	function Lt(e, t) {
		return e = t || e, "none" === x.css(e, "display") || !x.contains(e.ownerDocument, e)
	}

	function qt(t) {
		return e.getComputedStyle(t, null)
	}

	function Ht(e, t) {
		var n, r, i, o = [],
			s = 0,
			a = e.length;
		for (; a > s; s++) r = e[s], r.style && (o[s] = q.get(r, "olddisplay"), n = r.style.display, t ? (o[s] || "none" !== n || (r.style.display = ""), "" === r.style.display && Lt(r) && (o[s] = q.access(r, "olddisplay", Rt(r.nodeName)))) : o[s] || (i = Lt(r), (n && "none" !== n || !i) && q.set(r, "olddisplay", i ? n : x.css(r, "display"))));
		for (s = 0; a > s; s++) r = e[s], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[s] || "" : "none"));
		return e
	}
	x.fn.extend({
		css: function(e, t) {
			return x.access(this, function(e, t, n) {
				var r, i, o = {},
					s = 0;
				if (x.isArray(t)) {
					for (r = qt(e), i = t.length; i > s; s++) o[t[s]] = x.css(e, t[s], !1, r);
					return o
				}
				return n !== undefined ? x.style(e, t, n) : x.css(e, t)
			}, e, t, arguments.length > 1)
		},
		show: function() {
			return Ht(this, !0)
		},
		hide: function() {
			return Ht(this)
		},
		toggle: function(e) {
			return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
				Lt(this) ? x(this).show() : x(this).hide()
			})
		}
	}), x.extend({
		cssHooks: {
			opacity: {
				get: function(e, t) {
					if (t) {
						var n = vt(e, "opacity");
						return "" === n ? "1" : n
					}
				}
			}
		},
		cssNumber: {
			columnCount: !0,
			fillOpacity: !0,
			fontWeight: !0,
			lineHeight: !0,
			opacity: !0,
			order: !0,
			orphans: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0
		},
		cssProps: {
			"float": "cssFloat"
		},
		style: function(e, t, n, r) {
			if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
				var i, o, s, a = x.camelCase(t),
					u = e.style;
				return t = x.cssProps[a] || (x.cssProps[a] = At(u, a)), s = x.cssHooks[t] || x.cssHooks[a], n === undefined ? s && "get" in s && (i = s.get(e, !1, r)) !== undefined ? i : u[t] : (o = typeof n, "string" === o && (i = kt.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(x.css(e, t)), o = "number"), null == n || "number" === o && isNaN(n) || ("number" !== o || x.cssNumber[a] || (n += "px"), x.support.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), s && "set" in s && (n = s.set(e, n, r)) === undefined || (u[t] = n)), undefined)
			}
		},
		css: function(e, t, n, r) {
			var i, o, s, a = x.camelCase(t);
			return t = x.cssProps[a] || (x.cssProps[a] = At(e.style, a)), s = x.cssHooks[t] || x.cssHooks[a], s && "get" in s && (i = s.get(e, !0, n)), i === undefined && (i = vt(e, t, r)), "normal" === i && t in St && (i = St[t]), "" === n || n ? (o = parseFloat(i), n === !0 || x.isNumeric(o) ? o || 0 : i) : i
		}
	}), vt = function(e, t, n) {
		var r, i, o, s = n || qt(e),
			a = s ? s.getPropertyValue(t) || s[t] : undefined,
			u = e.style;
		return s && ("" !== a || x.contains(e.ownerDocument, e) || (a = x.style(e, t)), Ct.test(a) && wt.test(t) && (r = u.width, i = u.minWidth, o = u.maxWidth, u.minWidth = u.maxWidth = u.width = a, a = s.width, u.width = r, u.minWidth = i, u.maxWidth = o)), a
	};

	function Ot(e, t, n) {
		var r = Tt.exec(t);
		return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
	}

	function Ft(e, t, n, r, i) {
		var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0,
			s = 0;
		for (; 4 > o; o += 2) "margin" === n && (s += x.css(e, n + jt[o], !0, i)), r ? ("content" === n && (s -= x.css(e, "padding" + jt[o], !0, i)), "margin" !== n && (s -= x.css(e, "border" + jt[o] + "Width", !0, i))) : (s += x.css(e, "padding" + jt[o], !0, i), "padding" !== n && (s += x.css(e, "border" + jt[o] + "Width", !0, i)));
		return s
	}

	function Pt(e, t, n) {
		var r = !0,
			i = "width" === t ? e.offsetWidth : e.offsetHeight,
			o = qt(e),
			s = x.support.boxSizing && "border-box" === x.css(e, "boxSizing", !1, o);
		if (0 >= i || null == i) {
			if (i = vt(e, t, o), (0 > i || null == i) && (i = e.style[t]), Ct.test(i)) return i;
			r = s && (x.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0
		}
		return i + Ft(e, t, n || (s ? "border" : "content"), r, o) + "px"
	}

	function Rt(e) {
		var t = o,
			n = Nt[e];
		return n || (n = Mt(e, t), "none" !== n && n || (xt = (xt || x("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (xt[0].contentWindow || xt[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = Mt(e, t), xt.detach()), Nt[e] = n), n
	}

	function Mt(e, t) {
		var n = x(t.createElement(e)).appendTo(t.body),
			r = x.css(n[0], "display");
		return n.remove(), r
	}
	x.each(["height", "width"], function(e, t) {
		x.cssHooks[t] = {
			get: function(e, n, r) {
				return n ? 0 === e.offsetWidth && bt.test(x.css(e, "display")) ? x.swap(e, Et, function() {
					return Pt(e, t, r)
				}) : Pt(e, t, r) : undefined
			},
			set: function(e, n, r) {
				var i = r && qt(e);
				return Ot(e, n, r ? Ft(e, t, r, x.support.boxSizing && "border-box" === x.css(e, "boxSizing", !1, i), i) : 0)
			}
		}
	}), x(function() {
		x.support.reliableMarginRight || (x.cssHooks.marginRight = {
			get: function(e, t) {
				return t ? x.swap(e, {
					display: "inline-block"
				}, vt, [e, "marginRight"]) : undefined
			}
		}), !x.support.pixelPosition && x.fn.position && x.each(["top", "left"], function(e, t) {
			x.cssHooks[t] = {
				get: function(e, n) {
					return n ? (n = vt(e, t), Ct.test(n) ? x(e).position()[t] + "px" : n) : undefined
				}
			}
		})
	}), x.expr && x.expr.filters && (x.expr.filters.hidden = function(e) {
		return 0 >= e.offsetWidth && 0 >= e.offsetHeight
	}, x.expr.filters.visible = function(e) {
		return !x.expr.filters.hidden(e)
	}), x.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function(e, t) {
		x.cssHooks[e + t] = {
			expand: function(n) {
				var r = 0,
					i = {},
					o = "string" == typeof n ? n.split(" ") : [n];
				for (; 4 > r; r++) i[e + jt[r] + t] = o[r] || o[r - 2] || o[0];
				return i
			}
		}, wt.test(e) || (x.cssHooks[e + t].set = Ot)
	});
	var Wt = /%20/g,
		$t = /\[\]$/,
		Bt = /\r?\n/g,
		It = /^(?:submit|button|image|reset|file)$/i,
		zt = /^(?:input|select|textarea|keygen)/i;
	x.fn.extend({
		serialize: function() {
			return x.param(this.serializeArray())
		},
		serializeArray: function() {
			return this.map(function() {
				var e = x.prop(this, "elements");
				return e ? x.makeArray(e) : this
			}).filter(function() {
				var e = this.type;
				return this.name && !x(this).is(":disabled") && zt.test(this.nodeName) && !It.test(e) && (this.checked || !ot.test(e))
			}).map(function(e, t) {
				var n = x(this).val();
				return null == n ? null : x.isArray(n) ? x.map(n, function(e) {
					return {
						name: t.name,
						value: e.replace(Bt, "\r\n")
					}
				}) : {
					name: t.name,
					value: n.replace(Bt, "\r\n")
				}
			}).get()
		}
	}), x.param = function(e, t) {
		var n, r = [],
			i = function(e, t) {
				t = x.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
			};
		if (t === undefined && (t = x.ajaxSettings && x.ajaxSettings.traditional), x.isArray(e) || e.jquery && !x.isPlainObject(e)) x.each(e, function() {
			i(this.name, this.value)
		});
		else
			for (n in e) _t(n, e[n], t, i);
		return r.join("&").replace(Wt, "+")
	};

	function _t(e, t, n, r) {
		var i;
		if (x.isArray(t)) x.each(t, function(t, i) {
			n || $t.test(e) ? r(e, i) : _t(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
		});
		else if (n || "object" !== x.type(t)) r(e, t);
		else
			for (i in t) _t(e + "[" + i + "]", t[i], n, r)
	}
	x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
		x.fn[t] = function(e, n) {
			return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
		}
	}), x.fn.extend({
		hover: function(e, t) {
			return this.mouseenter(e).mouseleave(t || e)
		},
		bind: function(e, t, n) {
			return this.on(e, null, t, n)
		},
		unbind: function(e, t) {
			return this.off(e, null, t)
		},
		delegate: function(e, t, n, r) {
			return this.on(t, e, n, r)
		},
		undelegate: function(e, t, n) {
			return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
		}
	});
	var Xt, Ut, Yt = x.now(),
		Vt = /\?/,
		Gt = /#.*$/,
		Jt = /([?&])_=[^&]*/,
		Qt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
		Kt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		Zt = /^(?:GET|HEAD)$/,
		en = /^\/\//,
		tn = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
		nn = x.fn.load,
		rn = {},
		on = {},
		sn = "*/".concat("*");
	try {
		Ut = i.href
	} catch (an) {
		Ut = o.createElement("a"), Ut.href = "", Ut = Ut.href
	}
	Xt = tn.exec(Ut.toLowerCase()) || [];

	function un(e) {
		return function(t, n) {
			"string" != typeof t && (n = t, t = "*");
			var r, i = 0,
				o = t.toLowerCase().match(w) || [];
			if (x.isFunction(n))
				while (r = o[i++]) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
		}
	}

	function ln(e, t, n, r) {
		var i = {},
			o = e === on;

		function s(a) {
			var u;
			return i[a] = !0, x.each(e[a] || [], function(e, a) {
				var l = a(t, n, r);
				return "string" != typeof l || o || i[l] ? o ? !(u = l) : undefined : (t.dataTypes.unshift(l), s(l), !1)
			}), u
		}
		return s(t.dataTypes[0]) || !i["*"] && s("*")
	}

	function cn(e, t) {
		var n, r, i = x.ajaxSettings.flatOptions || {};
		for (n in t) t[n] !== undefined && ((i[n] ? e : r || (r = {}))[n] = t[n]);
		return r && x.extend(!0, e, r), e
	}
	x.fn.load = function(e, t, n) {
		if ("string" != typeof e && nn) return nn.apply(this, arguments);
		var r, i, o, s = this,
			a = e.indexOf(" ");
		return a >= 0 && (r = e.slice(a), e = e.slice(0, a)), x.isFunction(t) ? (n = t, t = undefined) : t && "object" == typeof t && (i = "POST"), s.length > 0 && x.ajax({
			url: e,
			type: i,
			dataType: "html",
			data: t
		}).done(function(e) {
			o = arguments, s.html(r ? x("<div>").append(x.parseHTML(e)).find(r) : e)
		}).complete(n && function(e, t) {
			s.each(n, o || [e.responseText, t, e])
		}), this
	}, x.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
		x.fn[t] = function(e) {
			return this.on(t, e)
		}
	}), x.extend({
		active: 0,
		lastModified: {},
		etag: {},
		ajaxSettings: {
			url: Ut,
			type: "GET",
			isLocal: Kt.test(Xt[1]),
			global: !0,
			processData: !0,
			async: !0,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			accepts: {
				"*": sn,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
			contents: {
				xml: /xml/,
				html: /html/,
				json: /json/
			},
			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},
			converters: {
				"* text": String,
				"text html": !0,
				"text json": x.parseJSON,
				"text xml": x.parseXML
			},
			flatOptions: {
				url: !0,
				context: !0
			}
		},
		ajaxSetup: function(e, t) {
			return t ? cn(cn(e, x.ajaxSettings), t) : cn(x.ajaxSettings, e)
		},
		ajaxPrefilter: un(rn),
		ajaxTransport: un(on),
		ajax: function(e, t) {
			"object" == typeof e && (t = e, e = undefined), t = t || {};
			var n, r, i, o, s, a, u, l, c = x.ajaxSetup({}, t),
				p = c.context || c,
				f = c.context && (p.nodeType || p.jquery) ? x(p) : x.event,
				h = x.Deferred(),
				d = x.Callbacks("once memory"),
				g = c.statusCode || {},
				m = {},
				y = {},
				v = 0,
				b = "canceled",
				T = {
					readyState: 0,
					getResponseHeader: function(e) {
						var t;
						if (2 === v) {
							if (!o) {
								o = {};
								while (t = Qt.exec(i)) o[t[1].toLowerCase()] = t[2]
							}
							t = o[e.toLowerCase()]
						}
						return null == t ? null : t
					},
					getAllResponseHeaders: function() {
						return 2 === v ? i : null
					},
					setRequestHeader: function(e, t) {
						var n = e.toLowerCase();
						return v || (e = y[n] = y[n] || e, m[e] = t), this
					},
					overrideMimeType: function(e) {
						return v || (c.mimeType = e), this
					},
					statusCode: function(e) {
						var t;
						if (e)
							if (2 > v)
								for (t in e) g[t] = [g[t], e[t]];
							else T.always(e[T.status]);
						return this
					},
					abort: function(e) {
						var t = e || b;
						return n && n.abort(t), k(0, t), this
					}
				};
			if (h.promise(T).complete = d.add, T.success = T.done, T.error = T.fail, c.url = ((e || c.url || Ut) + "").replace(Gt, "").replace(en, Xt[1] + "//"), c.type = t.method || t.type || c.method || c.type, c.dataTypes = x.trim(c.dataType || "*").toLowerCase().match(w) || [""], null == c.crossDomain && (a = tn.exec(c.url.toLowerCase()), c.crossDomain = !(!a || a[1] === Xt[1] && a[2] === Xt[2] && (a[3] || ("http:" === a[1] ? "80" : "443")) === (Xt[3] || ("http:" === Xt[1] ? "80" : "443")))), c.data && c.processData && "string" != typeof c.data && (c.data = x.param(c.data, c.traditional)), ln(rn, c, t, T), 2 === v) return T;
			u = c.global, u && 0 === x.active++ && x.event.trigger("ajaxStart"), c.type = c.type.toUpperCase(), c.hasContent = !Zt.test(c.type), r = c.url, c.hasContent || (c.data && (r = c.url += (Vt.test(r) ? "&" : "?") + c.data, delete c.data), c.cache === !1 && (c.url = Jt.test(r) ? r.replace(Jt, "$1_=" + Yt++) : r + (Vt.test(r) ? "&" : "?") + "_=" + Yt++)), c.ifModified && (x.lastModified[r] && T.setRequestHeader("If-Modified-Since", x.lastModified[r]), x.etag[r] && T.setRequestHeader("If-None-Match", x.etag[r])), (c.data && c.hasContent && c.contentType !== !1 || t.contentType) && T.setRequestHeader("Content-Type", c.contentType), T.setRequestHeader("Accept", c.dataTypes[0] && c.accepts[c.dataTypes[0]] ? c.accepts[c.dataTypes[0]] + ("*" !== c.dataTypes[0] ? ", " + sn + "; q=0.01" : "") : c.accepts["*"]);
			for (l in c.headers) T.setRequestHeader(l, c.headers[l]);
			if (c.beforeSend && (c.beforeSend.call(p, T, c) === !1 || 2 === v)) return T.abort();
			b = "abort";
			for (l in {
					success: 1,
					error: 1,
					complete: 1
				}) T[l](c[l]);
			if (n = ln(on, c, t, T)) {
				T.readyState = 1, u && f.trigger("ajaxSend", [T, c]), c.async && c.timeout > 0 && (s = setTimeout(function() {
					T.abort("timeout")
				}, c.timeout));
				try {
					v = 1, n.send(m, k)
				} catch (C) {
					if (!(2 > v)) throw C;
					k(-1, C)
				}
			} else k(-1, "No Transport");

			function k(e, t, o, a) {
				var l, m, y, b, w, C = t;
				2 !== v && (v = 2, s && clearTimeout(s), n = undefined, i = a || "", T.readyState = e > 0 ? 4 : 0, l = e >= 200 && 300 > e || 304 === e, o && (b = pn(c, T, o)), b = fn(c, b, T, l), l ? (c.ifModified && (w = T.getResponseHeader("Last-Modified"), w && (x.lastModified[r] = w), w = T.getResponseHeader("etag"), w && (x.etag[r] = w)), 204 === e || "HEAD" === c.type ? C = "nocontent" : 304 === e ? C = "notmodified" : (C = b.state, m = b.data, y = b.error, l = !y)) : (y = C, (e || !C) && (C = "error", 0 > e && (e = 0))), T.status = e, T.statusText = (t || C) + "", l ? h.resolveWith(p, [m, C, T]) : h.rejectWith(p, [T, C, y]), T.statusCode(g), g = undefined, u && f.trigger(l ? "ajaxSuccess" : "ajaxError", [T, c, l ? m : y]), d.fireWith(p, [T, C]), u && (f.trigger("ajaxComplete", [T, c]), --x.active || x.event.trigger("ajaxStop")))
			}
			return T
		},
		getJSON: function(e, t, n) {
			return x.get(e, t, n, "json")
		},
		getScript: function(e, t) {
			return x.get(e, undefined, t, "script")
		}
	}), x.each(["get", "post"], function(e, t) {
		x[t] = function(e, n, r, i) {
			return x.isFunction(n) && (i = i || r, r = n, n = undefined), x.ajax({
				url: e,
				type: t,
				dataType: i,
				data: n,
				success: r
			})
		}
	});

	function pn(e, t, n) {
		var r, i, o, s, a = e.contents,
			u = e.dataTypes;
		while ("*" === u[0]) u.shift(), r === undefined && (r = e.mimeType || t.getResponseHeader("Content-Type"));
		if (r)
			for (i in a)
				if (a[i] && a[i].test(r)) {
					u.unshift(i);
					break
				}
		if (u[0] in n) o = u[0];
		else {
			for (i in n) {
				if (!u[0] || e.converters[i + " " + u[0]]) {
					o = i;
					break
				}
				s || (s = i)
			}
			o = o || s
		}
		return o ? (o !== u[0] && u.unshift(o), n[o]) : undefined
	}

	function fn(e, t, n, r) {
		var i, o, s, a, u, l = {},
			c = e.dataTypes.slice();
		if (c[1])
			for (s in e.converters) l[s.toLowerCase()] = e.converters[s];
		o = c.shift();
		while (o)
			if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
				if ("*" === o) o = u;
				else if ("*" !== u && u !== o) {
			if (s = l[u + " " + o] || l["* " + o], !s)
				for (i in l)
					if (a = i.split(" "), a[1] === o && (s = l[u + " " + a[0]] || l["* " + a[0]])) {
						s === !0 ? s = l[i] : l[i] !== !0 && (o = a[0], c.unshift(a[1]));
						break
					}
			if (s !== !0)
				if (s && e["throws"]) t = s(t);
				else try {
					t = s(t)
				} catch (p) {
					return {
						state: "parsererror",
						error: s ? p : "No conversion from " + u + " to " + o
					}
				}
		}
		return {
			state: "success",
			data: t
		}
	}
	x.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /(?:java|ecma)script/
		},
		converters: {
			"text script": function(e) {
				return x.globalEval(e), e
			}
		}
	}), x.ajaxPrefilter("script", function(e) {
		e.cache === undefined && (e.cache = !1), e.crossDomain && (e.type = "GET")
	}), x.ajaxTransport("script", function(e) {
		if (e.crossDomain) {
			var t, n;
			return {
				send: function(r, i) {
					t = x("<script>").prop({
						async: !0,
						charset: e.scriptCharset,
						src: e.url
					}).on("load error", n = function(e) {
						t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type)
					}), o.head.appendChild(t[0])
				},
				abort: function() {
					n && n()
				}
			}
		}
	});
	var hn = [],
		dn = /(=)\?(?=&|$)|\?\?/;
	x.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function() {
			var e = hn.pop() || x.expando + "_" + Yt++;
			return this[e] = !0, e
		}
	}), x.ajaxPrefilter("json jsonp", function(t, n, r) {
		var i, o, s, a = t.jsonp !== !1 && (dn.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && dn.test(t.data) && "data");
		return a || "jsonp" === t.dataTypes[0] ? (i = t.jsonpCallback = x.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(dn, "$1" + i) : t.jsonp !== !1 && (t.url += (Vt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function() {
			return s || x.error(i + " was not called"), s[0]
		}, t.dataTypes[0] = "json", o = e[i], e[i] = function() {
			s = arguments
		}, r.always(function() {
			e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, hn.push(i)), s && x.isFunction(o) && o(s[0]), s = o = undefined
		}), "script") : undefined
	}), x.ajaxSettings.xhr = function() {
		try {
			return new XMLHttpRequest
		} catch (e) {}
	};
	var gn = x.ajaxSettings.xhr(),
		mn = {
			0: 200,
			1223: 204
		},
		yn = 0,
		vn = {};
	e.ActiveXObject && x(e).on("unload", function() {
		for (var e in vn) vn[e]();
		vn = undefined
	}), x.support.cors = !!gn && "withCredentials" in gn, x.support.ajax = gn = !!gn, x.ajaxTransport(function(e) {
		var t;
		return x.support.cors || gn && !e.crossDomain ? {
			send: function(n, r) {
				var i, o, s = e.xhr();
				if (s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
					for (i in e.xhrFields) s[i] = e.xhrFields[i];
				e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
				for (i in n) s.setRequestHeader(i, n[i]);
				t = function(e) {
					return function() {
						t && (delete vn[o], t = s.onload = s.onerror = null, "abort" === e ? s.abort() : "error" === e ? r(s.status || 404, s.statusText) : r(mn[s.status] || s.status, s.statusText, "string" == typeof s.responseText ? {
							text: s.responseText
						} : undefined, s.getAllResponseHeaders()))
					}
				}, s.onload = t(), s.onerror = t("error"), t = vn[o = yn++] = t("abort"), s.send(e.hasContent && e.data || null)
			},
			abort: function() {
				t && t()
			}
		} : undefined
	});
	var xn, bn, wn = /^(?:toggle|show|hide)$/,
		Tn = RegExp("^(?:([+-])=|)(" + b + ")([a-z%]*)$", "i"),
		Cn = /queueHooks$/,
		kn = [An],
		Nn = {
			"*": [function(e, t) {
				var n = this.createTween(e, t),
					r = n.cur(),
					i = Tn.exec(t),
					o = i && i[3] || (x.cssNumber[e] ? "" : "px"),
					s = (x.cssNumber[e] || "px" !== o && +r) && Tn.exec(x.css(n.elem, e)),
					a = 1,
					u = 20;
				if (s && s[3] !== o) {
					o = o || s[3], i = i || [], s = +r || 1;
					do a = a || ".5", s /= a, x.style(n.elem, e, s + o); while (a !== (a = n.cur() / r) && 1 !== a && --u)
				}
				return i && (s = n.start = +s || +r || 0, n.unit = o, n.end = i[1] ? s + (i[1] + 1) * i[2] : +i[2]), n
			}]
		};

	function En() {
		return setTimeout(function() {
			xn = undefined
		}), xn = x.now()
	}

	function Sn(e, t, n) {
		var r, i = (Nn[t] || []).concat(Nn["*"]),
			o = 0,
			s = i.length;
		for (; s > o; o++)
			if (r = i[o].call(n, t, e)) return r
	}

	function jn(e, t, n) {
		var r, i, o = 0,
			s = kn.length,
			a = x.Deferred().always(function() {
				delete u.elem
			}),
			u = function() {
				if (i) return !1;
				var t = xn || En(),
					n = Math.max(0, l.startTime + l.duration - t),
					r = n / l.duration || 0,
					o = 1 - r,
					s = 0,
					u = l.tweens.length;
				for (; u > s; s++) l.tweens[s].run(o);
				return a.notifyWith(e, [l, o, n]), 1 > o && u ? n : (a.resolveWith(e, [l]), !1)
			},
			l = a.promise({
				elem: e,
				props: x.extend({}, t),
				opts: x.extend(!0, {
					specialEasing: {}
				}, n),
				originalProperties: t,
				originalOptions: n,
				startTime: xn || En(),
				duration: n.duration,
				tweens: [],
				createTween: function(t, n) {
					var r = x.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
					return l.tweens.push(r), r
				},
				stop: function(t) {
					var n = 0,
						r = t ? l.tweens.length : 0;
					if (i) return this;
					for (i = !0; r > n; n++) l.tweens[n].run(1);
					return t ? a.resolveWith(e, [l, t]) : a.rejectWith(e, [l, t]), this
				}
			}),
			c = l.props;
		for (Dn(c, l.opts.specialEasing); s > o; o++)
			if (r = kn[o].call(l, e, c, l.opts)) return r;
		return x.map(c, Sn, l), x.isFunction(l.opts.start) && l.opts.start.call(e, l), x.fx.timer(x.extend(u, {
			elem: e,
			anim: l,
			queue: l.opts.queue
		})), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
	}

	function Dn(e, t) {
		var n, r, i, o, s;
		for (n in e)
			if (r = x.camelCase(n), i = t[r], o = e[n], x.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), s = x.cssHooks[r], s && "expand" in s) {
				o = s.expand(o), delete e[r];
				for (n in o) n in e || (e[n] = o[n], t[n] = i)
			} else t[r] = i
	}
	x.Animation = x.extend(jn, {
		tweener: function(e, t) {
			x.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
			var n, r = 0,
				i = e.length;
			for (; i > r; r++) n = e[r], Nn[n] = Nn[n] || [], Nn[n].unshift(t)
		},
		prefilter: function(e, t) {
			t ? kn.unshift(e) : kn.push(e)
		}
	});

	function An(e, t, n) {
		var r, i, o, s, a, u, l = this,
			c = {},
			p = e.style,
			f = e.nodeType && Lt(e),
			h = q.get(e, "fxshow");
		n.queue || (a = x._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, u = a.empty.fire, a.empty.fire = function() {
			a.unqueued || u()
		}), a.unqueued++, l.always(function() {
			l.always(function() {
				a.unqueued--, x.queue(e, "fx").length || a.empty.fire()
			})
		})), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], "inline" === x.css(e, "display") && "none" === x.css(e, "float") && (p.display = "inline-block")), n.overflow && (p.overflow = "hidden", l.always(function() {
			p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
		}));
		for (r in t)
			if (i = t[r], wn.exec(i)) {
				if (delete t[r], o = o || "toggle" === i, i === (f ? "hide" : "show")) {
					if ("show" !== i || !h || h[r] === undefined) continue;
					f = !0
				}
				c[r] = h && h[r] || x.style(e, r)
			}
		if (!x.isEmptyObject(c)) {
			h ? "hidden" in h && (f = h.hidden) : h = q.access(e, "fxshow", {}), o && (h.hidden = !f), f ? x(e).show() : l.done(function() {
				x(e).hide()
			}), l.done(function() {
				var t;
				q.remove(e, "fxshow");
				for (t in c) x.style(e, t, c[t])
			});
			for (r in c) s = Sn(f ? h[r] : 0, r, l), r in h || (h[r] = s.start, f && (s.end = s.start, s.start = "width" === r || "height" === r ? 1 : 0))
		}
	}

	function Ln(e, t, n, r, i) {
		return new Ln.prototype.init(e, t, n, r, i)
	}
	x.Tween = Ln, Ln.prototype = {
		constructor: Ln,
		init: function(e, t, n, r, i, o) {
			this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (x.cssNumber[n] ? "" : "px")
		},
		cur: function() {
			var e = Ln.propHooks[this.prop];
			return e && e.get ? e.get(this) : Ln.propHooks._default.get(this)
		},
		run: function(e) {
			var t, n = Ln.propHooks[this.prop];
			return this.pos = t = this.options.duration ? x.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Ln.propHooks._default.set(this), this
		}
	}, Ln.prototype.init.prototype = Ln.prototype, Ln.propHooks = {
		_default: {
			get: function(e) {
				var t;
				return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = x.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
			},
			set: function(e) {
				x.fx.step[e.prop] ? x.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[x.cssProps[e.prop]] || x.cssHooks[e.prop]) ? x.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
			}
		}
	}, Ln.propHooks.scrollTop = Ln.propHooks.scrollLeft = {
		set: function(e) {
			e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
		}
	}, x.each(["toggle", "show", "hide"], function(e, t) {
		var n = x.fn[t];
		x.fn[t] = function(e, r, i) {
			return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(qn(t, !0), e, r, i)
		}
	}), x.fn.extend({
		fadeTo: function(e, t, n, r) {
			return this.filter(Lt).css("opacity", 0).show().end().animate({
				opacity: t
			}, e, n, r)
		},
		animate: function(e, t, n, r) {
			var i = x.isEmptyObject(e),
				o = x.speed(t, n, r),
				s = function() {
					var t = jn(this, x.extend({}, e), o);
					(i || q.get(this, "finish")) && t.stop(!0)
				};
			return s.finish = s, i || o.queue === !1 ? this.each(s) : this.queue(o.queue, s)
		},
		stop: function(e, t, n) {
			var r = function(e) {
				var t = e.stop;
				delete e.stop, t(n)
			};
			return "string" != typeof e && (n = t, t = e, e = undefined), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
				var t = !0,
					i = null != e && e + "queueHooks",
					o = x.timers,
					s = q.get(this);
				if (i) s[i] && s[i].stop && r(s[i]);
				else
					for (i in s) s[i] && s[i].stop && Cn.test(i) && r(s[i]);
				for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
				(t || !n) && x.dequeue(this, e)
			})
		},
		finish: function(e) {
			return e !== !1 && (e = e || "fx"), this.each(function() {
				var t, n = q.get(this),
					r = n[e + "queue"],
					i = n[e + "queueHooks"],
					o = x.timers,
					s = r ? r.length : 0;
				for (n.finish = !0, x.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
				for (t = 0; s > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
				delete n.finish
			})
		}
	});

	function qn(e, t) {
		var n, r = {
				height: e
			},
			i = 0;
		for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = jt[i], r["margin" + n] = r["padding" + n] = e;
		return t && (r.opacity = r.width = e), r
	}
	x.each({
		slideDown: qn("show"),
		slideUp: qn("hide"),
		slideToggle: qn("toggle"),
		fadeIn: {
			opacity: "show"
		},
		fadeOut: {
			opacity: "hide"
		},
		fadeToggle: {
			opacity: "toggle"
		}
	}, function(e, t) {
		x.fn[e] = function(e, n, r) {
			return this.animate(t, e, n, r)
		}
	}), x.speed = function(e, t, n) {
		var r = e && "object" == typeof e ? x.extend({}, e) : {
			complete: n || !n && t || x.isFunction(e) && e,
			duration: e,
			easing: n && t || t && !x.isFunction(t) && t
		};
		return r.duration = x.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in x.fx.speeds ? x.fx.speeds[r.duration] : x.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
			x.isFunction(r.old) && r.old.call(this), r.queue && x.dequeue(this, r.queue)
		}, r
	}, x.easing = {
		linear: function(e) {
			return e
		},
		swing: function(e) {
			return .5 - Math.cos(e * Math.PI) / 2
		}
	}, x.timers = [], x.fx = Ln.prototype.init, x.fx.tick = function() {
		var e, t = x.timers,
			n = 0;
		for (xn = x.now(); t.length > n; n++) e = t[n], e() || t[n] !== e || t.splice(n--, 1);
		t.length || x.fx.stop(), xn = undefined
	}, x.fx.timer = function(e) {
		e() && x.timers.push(e) && x.fx.start()
	}, x.fx.interval = 13, x.fx.start = function() {
		bn || (bn = setInterval(x.fx.tick, x.fx.interval))
	}, x.fx.stop = function() {
		clearInterval(bn), bn = null
	}, x.fx.speeds = {
		slow: 600,
		fast: 200,
		_default: 400
	}, x.fx.step = {}, x.expr && x.expr.filters && (x.expr.filters.animated = function(e) {
		return x.grep(x.timers, function(t) {
			return e === t.elem
		}).length
	}), x.fn.offset = function(e) {
		if (arguments.length) return e === undefined ? this : this.each(function(t) {
			x.offset.setOffset(this, e, t)
		});
		var t, n, i = this[0],
			o = {
				top: 0,
				left: 0
			},
			s = i && i.ownerDocument;
		if (s) return t = s.documentElement, x.contains(t, i) ? (typeof i.getBoundingClientRect !== r && (o = i.getBoundingClientRect()), n = Hn(s), {
			top: o.top + n.pageYOffset - t.clientTop,
			left: o.left + n.pageXOffset - t.clientLeft
		}) : o
	}, x.offset = {
		setOffset: function(e, t, n) {
			var r, i, o, s, a, u, l, c = x.css(e, "position"),
				p = x(e),
				f = {};
			"static" === c && (e.style.position = "relative"), a = p.offset(), o = x.css(e, "top"), u = x.css(e, "left"), l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1, l ? (r = p.position(), s = r.top, i = r.left) : (s = parseFloat(o) || 0, i = parseFloat(u) || 0), x.isFunction(t) && (t = t.call(e, n, a)), null != t.top && (f.top = t.top - a.top + s), null != t.left && (f.left = t.left - a.left + i), "using" in t ? t.using.call(e, f) : p.css(f)
		}
	}, x.fn.extend({
		position: function() {
			if (this[0]) {
				var e, t, n = this[0],
					r = {
						top: 0,
						left: 0
					};
				return "fixed" === x.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), x.nodeName(e[0], "html") || (r = e.offset()), r.top += x.css(e[0], "borderTopWidth", !0), r.left += x.css(e[0], "borderLeftWidth", !0)), {
					top: t.top - r.top - x.css(n, "marginTop", !0),
					left: t.left - r.left - x.css(n, "marginLeft", !0)
				}
			}
		},
		offsetParent: function() {
			return this.map(function() {
				var e = this.offsetParent || s;
				while (e && !x.nodeName(e, "html") && "static" === x.css(e, "position")) e = e.offsetParent;
				return e || s
			})
		}
	}), x.each({
		scrollLeft: "pageXOffset",
		scrollTop: "pageYOffset"
	}, function(t, n) {
		var r = "pageYOffset" === n;
		x.fn[t] = function(i) {
			return x.access(this, function(t, i, o) {
				var s = Hn(t);
				return o === undefined ? s ? s[n] : t[i] : (s ? s.scrollTo(r ? e.pageXOffset : o, r ? o : e.pageYOffset) : t[i] = o, undefined)
			}, t, i, arguments.length, null)
		}
	});

	function Hn(e) {
		return x.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
	}
	x.each({
		Height: "height",
		Width: "width"
	}, function(e, t) {
		x.each({
			padding: "inner" + e,
			content: t,
			"": "outer" + e
		}, function(n, r) {
			x.fn[r] = function(r, i) {
				var o = arguments.length && (n || "boolean" != typeof r),
					s = n || (r === !0 || i === !0 ? "margin" : "border");
				return x.access(this, function(t, n, r) {
					var i;
					return x.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : r === undefined ? x.css(t, n, s) : x.style(t, n, r, s)
				}, t, o ? r : undefined, o, null)
			}
		})
	}), x.fn.size = function() {
		return this.length
	}, x.fn.andSelf = x.fn.addBack, "object" == typeof module && module && "object" == typeof module.exports ? module.exports = x : "function" == typeof define && define.amd && define("jquery", [], function() {
		return x
	}), "object" == typeof e && "object" == typeof e.document && (e.jQuery = e.$ = x)
})(window);
;
/*	
 * jQuery mmenu v5.2.0
 * @requires jQuery 1.7.0 or later
 *
 * mmenu.frebsite.nl
 *	
 * Copyright (c) Fred Heusschen
 * www.frebsite.nl
 *
 * Licensed under the MIT license:
 * http://en.wikipedia.org/wiki/MIT_License
 */
! function(e) {
	function t() {
		e[n].glbl || (r = {
			$wndw: e(window),
			$html: e("html"),
			$body: e("body")
		}, a = {}, i = {}, l = {}, e.each([a, i, l], function(e, t) {
			t.add = function(e) {
				e = e.split(" ");
				for (var n = 0, s = e.length; s > n; n++) t[e[n]] = t.mm(e[n])
			}
		}), a.mm = function(e) {
			return "mm-" + e
		}, a.add("wrapper menu vertical panel nopanel current highest opened subopened navbar hasnavbar title btn prev next first last listview nolistview selected divider spacer hidden fullsubopen"), a.umm = function(e) {
			return "mm-" == e.slice(0, 3) && (e = e.slice(3)), e
		}, i.mm = function(e) {
			return "mm-" + e
		}, i.add("parent sub"), l.mm = function(e) {
			return e + ".mm"
		}, l.add("transitionend webkitTransitionEnd mousedown mouseup touchstart touchmove touchend click keydown"), e[n]._c = a, e[n]._d = i, e[n]._e = l, e[n].glbl = r)
	}
	var n = "mmenu",
		s = "5.2.0";
	if (!e[n]) {
		e[n] = function(e, t, n) {
			this.$menu = e, this._api = ["bind", "init", "update", "setSelected", "getInstance", "openPanel", "closePanel", "closeAllPanels"], this.opts = t, this.conf = n, this.vars = {}, this.cbck = {}, "function" == typeof this.___deprecated && this.___deprecated(), this._initMenu(), this._initAnchors();
			var s = this.$menu.children(this.conf.panelNodetype);
			return this._initAddons(), this.init(s), "function" == typeof this.___debug && this.___debug(), this
		}, e[n].version = s, e[n].addons = {}, e[n].uniqueId = 0, e[n].defaults = {
			extensions: [],
			navbar: {
				title: "Menu",
				titleLink: "panel"
			},
			onClick: {
				setSelected: !0
			},
			slidingSubmenus: !0
		}, e[n].configuration = {
			classNames: {
				panel: "Panel",
				vertical: "Vertical",
				selected: "Selected",
				divider: "Divider",
				spacer: "Spacer"
			},
			clone: !1,
			openingInterval: 25,
			panelNodetype: "ul, ol, div",
			transitionDuration: 400
		}, e[n].prototype = {
			init: function(e) {
				e = e.not("." + a.nopanel), e = this._initPanels(e), this.trigger("init", e), this.trigger("update")
			},
			update: function() {
				this.trigger("update")
			},
			setSelected: function(e) {
				this.$menu.find("." + a.listview).children().removeClass(a.selected), e.addClass(a.selected), this.trigger("setSelected", e)
			},
			openPanel: function(t) {
				var n = t.parent();
				if (n.hasClass(a.vertical)) {
					var s = n.parents("." + a.subopened);
					if (s.length) return this.openPanel(s.first());
					n.addClass(a.opened)
				} else {
					if (t.hasClass(a.current)) return;
					var i = e(this.$menu).children("." + a.panel),
						l = i.filter("." + a.current);
					i.removeClass(a.highest).removeClass(a.current).not(t).not(l).not("." + a.vertical).addClass(a.hidden), t.hasClass(a.opened) ? l.addClass(a.highest).removeClass(a.opened).removeClass(a.subopened) : (t.addClass(a.highest), l.addClass(a.subopened)), t.removeClass(a.hidden).addClass(a.current), setTimeout(function() {
						t.removeClass(a.subopened).addClass(a.opened)
					}, this.conf.openingInterval)
				}
				this.trigger("openPanel", t)
			},
			closePanel: function(e) {
				var t = e.parent();
				t.hasClass(a.vertical) && (t.removeClass(a.opened), this.trigger("closePanel", e))
			},
			closeAllPanels: function() {
				this.$menu.find("." + a.listview).children().removeClass(a.selected).filter("." + a.vertical).removeClass(a.opened);
				var e = this.$menu.children("." + a.panel),
					t = e.first();
				this.$menu.children("." + a.panel).not(t).removeClass(a.subopened).removeClass(a.opened).removeClass(a.current).removeClass(a.highest).addClass(a.hidden), this.openPanel(t)
			},
			togglePanel: function(e) {
				var t = e.parent();
				t.hasClass(a.vertical) && this[t.hasClass(a.opened) ? "closePanel" : "openPanel"](e)
			},
			getInstance: function() {
				return this
			},
			bind: function(e, t) {
				this.cbck[e] = this.cbck[e] || [], this.cbck[e].push(t)
			},
			trigger: function() {
				var e = this,
					t = Array.prototype.slice.call(arguments),
					n = t.shift();
				if (this.cbck[n])
					for (var s = 0, a = this.cbck[n].length; a > s; s++) this.cbck[n][s].apply(e, t)
			},
			_initMenu: function() {
				this.opts.offCanvas && this.conf.clone && (this.$menu = this.$menu.clone(!0), this.$menu.add(this.$menu.find("[id]")).filter("[id]").each(function() {
					e(this).attr("id", a.mm(e(this).attr("id")))
				})), this.$menu.contents().each(function() {
					3 == e(this)[0].nodeType && e(this).remove()
				}), this.$menu.parent().addClass(a.wrapper);
				var t = [a.menu];
				this.opts.slidingSubmenus || t.push(a.vertical), this.opts.extensions = this.opts.extensions.length ? "mm-" + this.opts.extensions.join(" mm-") : "", this.opts.extensions && t.push(this.opts.extensions), this.$menu.addClass(t.join(" "))
			},
			_initPanels: function(t) {
				var n = this;
				this.__findAddBack(t, "ul, ol").not("." + a.nolistview).addClass(a.listview);
				var s = this.__findAddBack(t, "." + a.listview).children();
				this.__refactorClass(s, this.conf.classNames.selected, "selected"), this.__refactorClass(s, this.conf.classNames.divider, "divider"), this.__refactorClass(s, this.conf.classNames.spacer, "spacer"), this.__refactorClass(this.__findAddBack(t, "." + this.conf.classNames.panel), this.conf.classNames.panel, "panel");
				var l = e(),
					r = t.add(t.find("." + a.panel)).add(this.__findAddBack(t, "." + a.listview).children().children(this.conf.panelNodetype)).not("." + a.nopanel);
				this.__refactorClass(r, this.conf.classNames.vertical, "vertical"), this.opts.slidingSubmenus || r.addClass(a.vertical), r.each(function() {
					var t = e(this),
						s = t;
					t.is("ul, ol") ? (t.wrap('<div class="' + a.panel + '" />'), s = t.parent()) : s.addClass(a.panel);
					var i = t.attr("id");
					t.removeAttr("id"), s.attr("id", i || n.__getUniqueId()), t.hasClass(a.vertical) && (t.removeClass(n.conf.classNames.vertical), s.add(s.parent()).addClass(a.vertical)), l = l.add(s);
					var r = s.children().first(),
						d = s.children().last();
					r.is("." + a.listview) && r.addClass(a.first), d.is("." + a.listview) && d.addClass(a.last)
				});
				var d = e("." + a.panel, this.$menu);
				l.each(function() {
					var t = e(this),
						s = t.parent(),
						l = s.children("a, span").first();
					if (s.is("." + a.menu) || (s.data(i.sub, t), t.data(i.parent, s)), !s.children("." + a.next).length && s.parent().is("." + a.listview)) {
						var r = t.attr("id"),
							d = e('<a class="' + a.next + '" href="#' + r + '" data-target="#' + r + '" />').insertBefore(l);
						l.is("span") && d.addClass(a.fullsubopen)
					}
					if (!t.children("." + a.navbar).length && !s.hasClass(a.vertical)) {
						if (s.parent().is("." + a.listview)) var s = s.closest("." + a.panel);
						else var l = s.closest("." + a.panel).find('a[href="#' + t.attr("id") + '"]').first(),
							s = l.closest("." + a.panel);
						var o = e('<div class="' + a.navbar + '" />');
						if (s.length) {
							var r = s.attr("id");
							switch (n.opts.navbar.titleLink) {
								case "anchor":
									_url = l.attr("href");
									break;
								case "panel":
								case "parent":
									_url = "#" + r;
									break;
								case "none":
								default:
									_url = !1
							}
							o.append('<a class="' + a.btn + " " + a.prev + '" href="#' + r + '" data-target="#' + r + '"></a>').append('<a class="' + a.title + '"' + (_url ? ' href="' + _url + '"' : "") + ">" + l.text() + "</a>").prependTo(t), t.addClass(a.hasnavbar)
						} else n.opts.navbar.title && (o.append('<a class="' + a.title + '">' + n.opts.navbar.title + "</a>").prependTo(t), t.addClass(a.hasnavbar))
					}
				});
				var o = this.__findAddBack(t, "." + a.listview).children("." + a.selected).removeClass(a.selected).last().addClass(a.selected);
				o.add(o.parentsUntil("." + a.menu, "li")).filter("." + a.vertical).addClass(a.opened).end().not("." + a.vertical).each(function() {
					e(this).parentsUntil("." + a.menu, "." + a.panel).not("." + a.vertical).first().addClass(a.opened).parentsUntil("." + a.menu, "." + a.panel).not("." + a.vertical).first().addClass(a.opened).addClass(a.subopened)
				}), o.children("." + a.panel).not("." + a.vertical).addClass(a.opened).parentsUntil("." + a.menu, "." + a.panel).not("." + a.vertical).first().addClass(a.opened).addClass(a.subopened);
				var c = d.filter("." + a.opened);
				return c.length || (c = l.first()), c.addClass(a.opened).last().addClass(a.current), l.not("." + a.vertical).not(c.last()).addClass(a.hidden).end().appendTo(this.$menu), l
			},
			_initAnchors: function() {
				var t = this;
				r.$body.on(l.click + "-oncanvas", "a[href]", function(s) {
					var i = e(this),
						l = !1,
						d = t.$menu.find(i).length;
					for (var o in e[n].addons)
						if (l = e[n].addons[o].clickAnchor.call(t, i, d)) break;
					if (!l && d) {
						var c = i.attr("href");
						if (c.length > 1 && "#" == c.slice(0, 1)) {
							var h = e(c, t.$menu);
							h.is("." + a.panel) && (l = !0, t[i.parent().hasClass(a.vertical) ? "togglePanel" : "openPanel"](h))
						}
					}
					if (l && s.preventDefault(), !l && d && i.is("." + a.listview + " > li > a") && !i.is('[rel="external"]') && !i.is('[target="_blank"]')) {
						t.__valueOrFn(t.opts.onClick.setSelected, i) && t.setSelected(e(s.target).parent());
						var u = t.__valueOrFn(t.opts.onClick.preventDefault, i, "#" == c.slice(0, 1));
						u && s.preventDefault(), t.__valueOrFn(t.opts.onClick.blockUI, i, !u) && r.$html.addClass(a.blocking), t.__valueOrFn(t.opts.onClick.close, i, u) && t.close()
					}
				})
			},
			_initAddons: function() {
				for (var t in e[n].addons) e[n].addons[t].add.call(this), e[n].addons[t].add = function() {};
				for (var t in e[n].addons) e[n].addons[t].setup.call(this)
			},
			__api: function() {
				var t = this,
					n = {};
				return e.each(this._api, function() {
					var e = this;
					n[e] = function() {
						var s = t[e].apply(t, arguments);
						return "undefined" == typeof s ? n : s
					}
				}), n
			},
			__valueOrFn: function(e, t, n) {
				return "function" == typeof e ? e.call(t[0]) : "undefined" == typeof e && "undefined" != typeof n ? n : e
			},
			__refactorClass: function(e, t, n) {
				return e.filter("." + t).removeClass(t).addClass(a[n])
			},
			__findAddBack: function(e, t) {
				return e.find(t).add(e.filter(t))
			},
			__filterListItems: function(e) {
				return e.not("." + a.divider).not("." + a.hidden)
			},
			__transitionend: function(e, t, n) {
				var s = !1,
					a = function() {
						s || t.call(e[0]), s = !0
					};
				e.one(l.transitionend, a), e.one(l.webkitTransitionEnd, a), setTimeout(a, 1.1 * n)
			},
			__getUniqueId: function() {
				return a.mm(e[n].uniqueId++)
			}
		}, e.fn[n] = function(s, a) {
			return t(), s = e.extend(!0, {}, e[n].defaults, s), a = e.extend(!0, {}, e[n].configuration, a), this.each(function() {
				var t = e(this);
				if (!t.data(n)) {
					var i = new e[n](t, s, a);
					t.data(n, i.__api())
				}
			})
		}, e[n].support = {
			touch: "ontouchstart" in window || navigator.msMaxTouchPoints
		};
		var a, i, l, r
	}
}(jQuery);
/*	
 * jQuery mmenu offCanvas addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
! function(t) {
	var e = "mmenu",
		o = "offCanvas";
	t[e].addons[o] = {
		setup: function() {
			if (this.opts[o]) {
				var n = this.opts[o],
					i = this.conf[o];
				a = t[e].glbl, this._api = t.merge(this._api, ["open", "close", "setPage"]), ("top" == n.position || "bottom" == n.position) && (n.zposition = "front"), "string" != typeof i.pageSelector && (i.pageSelector = "> " + i.pageNodetype), a.$allMenus = (a.$allMenus || t()).add(this.$menu), this.vars.opened = !1;
				var r = [s.offcanvas];
				"left" != n.position && r.push(s.mm(n.position)), "back" != n.zposition && r.push(s.mm(n.zposition)), this.$menu.addClass(r.join(" ")).parent().removeClass(s.wrapper), this.setPage(a.$page), this._initBlocker(), this["_initWindow_" + o](), this.$menu[i.menuInjectMethod + "To"](i.menuWrapperSelector)
			}
		},
		add: function() {
			s = t[e]._c, n = t[e]._d, i = t[e]._e, s.add("offcanvas slideout modal background opening blocker page"), n.add("style"), i.add("resize")
		},
		clickAnchor: function(t) {
			if (!this.opts[o]) return !1;
			var e = this.$menu.attr("id");
			if (e && e.length && (this.conf.clone && (e = s.umm(e)), t.is('[href="#' + e + '"]'))) return this.open(), !0;
			if (a.$page) {
				var e = a.$page.first().attr("id");
				return e && e.length && t.is('[href="#' + e + '"]') ? (this.close(), !0) : !1
			}
		}
	}, t[e].defaults[o] = {
		position: "left",
		zposition: "back",
		modal: !1,
		moveBackground: !0
	}, t[e].configuration[o] = {
		pageNodetype: "div",
		pageSelector: null,
		wrapPageIfNeeded: !0,
		menuWrapperSelector: "body",
		menuInjectMethod: "prepend"
	}, t[e].prototype.open = function() {
		if (!this.vars.opened) {
			var t = this;
			this._openSetup(), setTimeout(function() {
				t._openFinish()
			}, this.conf.openingInterval), this.trigger("open")
		}
	}, t[e].prototype._openSetup = function() {
		var e = this;
		this.closeAllOthers(), a.$page.each(function() {
			t(this).data(n.style, t(this).attr("style") || "")
		}), a.$wndw.trigger(i.resize + "-offcanvas", [!0]);
		var r = [s.opened];
		this.opts[o].modal && r.push(s.modal), this.opts[o].moveBackground && r.push(s.background), "left" != this.opts[o].position && r.push(s.mm(this.opts[o].position)), "back" != this.opts[o].zposition && r.push(s.mm(this.opts[o].zposition)), this.opts.extensions && r.push(this.opts.extensions), a.$html.addClass(r.join(" ")), setTimeout(function() {
			e.vars.opened = !0
		}, this.conf.openingInterval), this.$menu.addClass(s.current + " " + s.opened)
	}, t[e].prototype._openFinish = function() {
		var t = this;
		this.__transitionend(a.$page.first(), function() {
			t.trigger("opened")
		}, this.conf.transitionDuration), a.$html.addClass(s.opening), this.trigger("opening")
	}, t[e].prototype.close = function() {
		if (this.vars.opened) {
			var e = this;
			this.__transitionend(a.$page.first(), function() {
				e.$menu.removeClass(s.current).removeClass(s.opened), a.$html.removeClass(s.opened).removeClass(s.modal).removeClass(s.background).removeClass(s.mm(e.opts[o].position)).removeClass(s.mm(e.opts[o].zposition)), e.opts.extensions && a.$html.removeClass(e.opts.extensions), a.$page.each(function() {
					t(this).attr("style", t(this).data(n.style))
				}), e.vars.opened = !1, e.trigger("closed")
			}, this.conf.transitionDuration), a.$html.removeClass(s.opening), this.trigger("close"), this.trigger("closing")
		}
	}, t[e].prototype.closeAllOthers = function() {
		a.$allMenus.not(this.$menu).each(function() {
			var o = t(this).data(e);
			o && o.close && o.close()
		})
	}, t[e].prototype.setPage = function(e) {
		var n = this,
			i = this.conf[o];
		e && e.length || (e = a.$body.find(i.pageSelector), e.length > 1 && i.wrapPageIfNeeded && (e = e.wrapAll("<" + this.conf[o].pageNodetype + " />").parent())), e.each(function() {
			t(this).attr("id", t(this).attr("id") || n.__getUniqueId())
		}), e.addClass(s.page + " " + s.slideout), a.$page = e, this.trigger("setPage", e)
	}, t[e].prototype["_initWindow_" + o] = function() {
		a.$wndw.off(i.keydown + "-offcanvas").on(i.keydown + "-offcanvas", function(t) {
			return a.$html.hasClass(s.opened) && 9 == t.keyCode ? (t.preventDefault(), !1) : void 0
		});
		var t = 0;
		a.$wndw.off(i.resize + "-offcanvas").on(i.resize + "-offcanvas", function(e, o) {
			if (1 == a.$page.length && (o || a.$html.hasClass(s.opened))) {
				var n = a.$wndw.height();
				(o || n != t) && (t = n, a.$page.css("minHeight", n))
			}
		})
	}, t[e].prototype._initBlocker = function() {
		var e = this;
		a.$blck || (a.$blck = t('<div id="' + s.blocker + '" class="' + s.slideout + '" />')), a.$blck.appendTo(a.$body).off(i.touchstart + "-offcanvas " + i.touchmove + "-offcanvas").on(i.touchstart + "-offcanvas " + i.touchmove + "-offcanvas", function(t) {
			t.preventDefault(), t.stopPropagation(), a.$blck.trigger(i.mousedown + "-offcanvas")
		}).off(i.mousedown + "-offcanvas").on(i.mousedown + "-offcanvas", function(t) {
			t.preventDefault(), a.$html.hasClass(s.modal) || (e.closeAllOthers(), e.close())
		})
	};
	var s, n, i, a
}(jQuery);;
(function(e, t) {
	function i(t, i) {
		var a, n, r, o = t.nodeName.toLowerCase();
		return "area" === o ? (a = t.parentNode, n = a.name, t.href && n && "map" === a.nodeName.toLowerCase() ? (r = e("img[usemap=#" + n + "]")[0], !!r && s(r)) : !1) : (/input|select|textarea|button|object/.test(o) ? !t.disabled : "a" === o ? t.href || i : i) && s(t)
	}

	function s(t) {
		return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function() {
			return "hidden" === e.css(this, "visibility")
		}).length
	}
	var a = 0,
		n = /^ui-id-\d+$/;
	e.ui = e.ui || {}, e.extend(e.ui, {
		version: "1.10.3",
		keyCode: {
			BACKSPACE: 8,
			COMMA: 188,
			DELETE: 46,
			DOWN: 40,
			END: 35,
			ENTER: 13,
			ESCAPE: 27,
			HOME: 36,
			LEFT: 37,
			NUMPAD_ADD: 107,
			NUMPAD_DECIMAL: 110,
			NUMPAD_DIVIDE: 111,
			NUMPAD_ENTER: 108,
			NUMPAD_MULTIPLY: 106,
			NUMPAD_SUBTRACT: 109,
			PAGE_DOWN: 34,
			PAGE_UP: 33,
			PERIOD: 190,
			RIGHT: 39,
			SPACE: 32,
			TAB: 9,
			UP: 38
		}
	}), e.fn.extend({
		focus: function(t) {
			return function(i, s) {
				return "number" == typeof i ? this.each(function() {
					var t = this;
					setTimeout(function() {
						e(t).focus(), s && s.call(t)
					}, i)
				}) : t.apply(this, arguments)
			}
		}(e.fn.focus),
		scrollParent: function() {
			var t;
			return t = e.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function() {
				return /(relative|absolute|fixed)/.test(e.css(this, "position")) && /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
			}).eq(0) : this.parents().filter(function() {
				return /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
			}).eq(0), /fixed/.test(this.css("position")) || !t.length ? e(document) : t
		},
		zIndex: function(i) {
			if (i !== t) return this.css("zIndex", i);
			if (this.length)
				for (var s, a, n = e(this[0]); n.length && n[0] !== document;) {
					if (s = n.css("position"), ("absolute" === s || "relative" === s || "fixed" === s) && (a = parseInt(n.css("zIndex"), 10), !isNaN(a) && 0 !== a)) return a;
					n = n.parent()
				}
			return 0
		},
		uniqueId: function() {
			return this.each(function() {
				this.id || (this.id = "ui-id-" + ++a)
			})
		},
		removeUniqueId: function() {
			return this.each(function() {
				n.test(this.id) && e(this).removeAttr("id")
			})
		}
	}), e.extend(e.expr[":"], {
		data: e.expr.createPseudo ? e.expr.createPseudo(function(t) {
			return function(i) {
				return !!e.data(i, t)
			}
		}) : function(t, i, s) {
			return !!e.data(t, s[3])
		},
		focusable: function(t) {
			return i(t, !isNaN(e.attr(t, "tabindex")))
		},
		tabbable: function(t) {
			var s = e.attr(t, "tabindex"),
				a = isNaN(s);
			return (a || s >= 0) && i(t, !a)
		}
	}), e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"], function(i, s) {
		function a(t, i, s, a) {
			return e.each(n, function() {
				i -= parseFloat(e.css(t, "padding" + this)) || 0, s && (i -= parseFloat(e.css(t, "border" + this + "Width")) || 0), a && (i -= parseFloat(e.css(t, "margin" + this)) || 0)
			}), i
		}
		var n = "Width" === s ? ["Left", "Right"] : ["Top", "Bottom"],
			r = s.toLowerCase(),
			o = {
				innerWidth: e.fn.innerWidth,
				innerHeight: e.fn.innerHeight,
				outerWidth: e.fn.outerWidth,
				outerHeight: e.fn.outerHeight
			};
		e.fn["inner" + s] = function(i) {
			return i === t ? o["inner" + s].call(this) : this.each(function() {
				e(this).css(r, a(this, i) + "px")
			})
		}, e.fn["outer" + s] = function(t, i) {
			return "number" != typeof t ? o["outer" + s].call(this, t) : this.each(function() {
				e(this).css(r, a(this, t, !0, i) + "px")
			})
		}
	}), e.fn.addBack || (e.fn.addBack = function(e) {
		return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
	}), e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = function(t) {
		return function(i) {
			return arguments.length ? t.call(this, e.camelCase(i)) : t.call(this)
		}
	}(e.fn.removeData)), e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), e.support.selectstart = "onselectstart" in document.createElement("div"), e.fn.extend({
		disableSelection: function() {
			return this.bind((e.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(e) {
				e.preventDefault()
			})
		},
		enableSelection: function() {
			return this.unbind(".ui-disableSelection")
		}
	}), e.extend(e.ui, {
		plugin: {
			add: function(t, i, s) {
				var a, n = e.ui[t].prototype;
				for (a in s) n.plugins[a] = n.plugins[a] || [], n.plugins[a].push([i, s[a]])
			},
			call: function(e, t, i) {
				var s, a = e.plugins[t];
				if (a && e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType)
					for (s = 0; a.length > s; s++) e.options[a[s][0]] && a[s][1].apply(e.element, i)
			}
		},
		hasScroll: function(t, i) {
			if ("hidden" === e(t).css("overflow")) return !1;
			var s = i && "left" === i ? "scrollLeft" : "scrollTop",
				a = !1;
			return t[s] > 0 ? !0 : (t[s] = 1, a = t[s] > 0, t[s] = 0, a)
		}
	})
})(jQuery);
(function(e, t) {
	var i = 0,
		s = Array.prototype.slice,
		n = e.cleanData;
	e.cleanData = function(t) {
		for (var i, s = 0; null != (i = t[s]); s++) try {
			e(i).triggerHandler("remove")
		} catch (a) {}
		n(t)
	}, e.widget = function(i, s, n) {
		var a, r, o, h, l = {},
			u = i.split(".")[0];
		i = i.split(".")[1], a = u + "-" + i, n || (n = s, s = e.Widget), e.expr[":"][a.toLowerCase()] = function(t) {
			return !!e.data(t, a)
		}, e[u] = e[u] || {}, r = e[u][i], o = e[u][i] = function(e, i) {
			return this._createWidget ? (arguments.length && this._createWidget(e, i), t) : new o(e, i)
		}, e.extend(o, r, {
			version: n.version,
			_proto: e.extend({}, n),
			_childConstructors: []
		}), h = new s, h.options = e.widget.extend({}, h.options), e.each(n, function(i, n) {
			return e.isFunction(n) ? (l[i] = function() {
				var e = function() {
						return s.prototype[i].apply(this, arguments)
					},
					t = function(e) {
						return s.prototype[i].apply(this, e)
					};
				return function() {
					var i, s = this._super,
						a = this._superApply;
					return this._super = e, this._superApply = t, i = n.apply(this, arguments), this._super = s, this._superApply = a, i
				}
			}(), t) : (l[i] = n, t)
		}), o.prototype = e.widget.extend(h, {
			widgetEventPrefix: r ? h.widgetEventPrefix : i
		}, l, {
			constructor: o,
			namespace: u,
			widgetName: i,
			widgetFullName: a
		}), r ? (e.each(r._childConstructors, function(t, i) {
			var s = i.prototype;
			e.widget(s.namespace + "." + s.widgetName, o, i._proto)
		}), delete r._childConstructors) : s._childConstructors.push(o), e.widget.bridge(i, o)
	}, e.widget.extend = function(i) {
		for (var n, a, r = s.call(arguments, 1), o = 0, h = r.length; h > o; o++)
			for (n in r[o]) a = r[o][n], r[o].hasOwnProperty(n) && a !== t && (i[n] = e.isPlainObject(a) ? e.isPlainObject(i[n]) ? e.widget.extend({}, i[n], a) : e.widget.extend({}, a) : a);
		return i
	}, e.widget.bridge = function(i, n) {
		var a = n.prototype.widgetFullName || i;
		e.fn[i] = function(r) {
			var o = "string" == typeof r,
				h = s.call(arguments, 1),
				l = this;
			return r = !o && h.length ? e.widget.extend.apply(null, [r].concat(h)) : r, o ? this.each(function() {
				var s, n = e.data(this, a);
				return n ? e.isFunction(n[r]) && "_" !== r.charAt(0) ? (s = n[r].apply(n, h), s !== n && s !== t ? (l = s && s.jquery ? l.pushStack(s.get()) : s, !1) : t) : e.error("no such method '" + r + "' for " + i + " widget instance") : e.error("cannot call methods on " + i + " prior to initialization; " + "attempted to call method '" + r + "'")
			}) : this.each(function() {
				var t = e.data(this, a);
				t ? t.option(r || {})._init() : e.data(this, a, new n(r, this))
			}), l
		}
	}, e.Widget = function() {}, e.Widget._childConstructors = [], e.Widget.prototype = {
		widgetName: "widget",
		widgetEventPrefix: "",
		defaultElement: "<div>",
		options: {
			disabled: !1,
			create: null
		},
		_createWidget: function(t, s) {
			s = e(s || this.defaultElement || this)[0], this.element = e(s), this.uuid = i++, this.eventNamespace = "." + this.widgetName + this.uuid, this.options = e.widget.extend({}, this.options, this._getCreateOptions(), t), this.bindings = e(), this.hoverable = e(), this.focusable = e(), s !== this && (e.data(s, this.widgetFullName, this), this._on(!0, this.element, {
				remove: function(e) {
					e.target === s && this.destroy()
				}
			}), this.document = e(s.style ? s.ownerDocument : s.document || s), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
		},
		_getCreateOptions: e.noop,
		_getCreateEventData: e.noop,
		_create: e.noop,
		_init: e.noop,
		destroy: function() {
			this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled " + "ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
		},
		_destroy: e.noop,
		widget: function() {
			return this.element
		},
		option: function(i, s) {
			var n, a, r, o = i;
			if (0 === arguments.length) return e.widget.extend({}, this.options);
			if ("string" == typeof i)
				if (o = {}, n = i.split("."), i = n.shift(), n.length) {
					for (a = o[i] = e.widget.extend({}, this.options[i]), r = 0; n.length - 1 > r; r++) a[n[r]] = a[n[r]] || {}, a = a[n[r]];
					if (i = n.pop(), s === t) return a[i] === t ? null : a[i];
					a[i] = s
				} else {
					if (s === t) return this.options[i] === t ? null : this.options[i];
					o[i] = s
				}
			return this._setOptions(o), this
		},
		_setOptions: function(e) {
			var t;
			for (t in e) this._setOption(t, e[t]);
			return this
		},
		_setOption: function(e, t) {
			return this.options[e] = t, "disabled" === e && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!t).attr("aria-disabled", t), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")), this
		},
		enable: function() {
			return this._setOption("disabled", !1)
		},
		disable: function() {
			return this._setOption("disabled", !0)
		},
		_on: function(i, s, n) {
			var a, r = this;
			"boolean" != typeof i && (n = s, s = i, i = !1), n ? (s = a = e(s), this.bindings = this.bindings.add(s)) : (n = s, s = this.element, a = this.widget()), e.each(n, function(n, o) {
				function h() {
					return i || r.options.disabled !== !0 && !e(this).hasClass("ui-state-disabled") ? ("string" == typeof o ? r[o] : o).apply(r, arguments) : t
				}
				"string" != typeof o && (h.guid = o.guid = o.guid || h.guid || e.guid++);
				var l = n.match(/^(\w+)\s*(.*)$/),
					u = l[1] + r.eventNamespace,
					c = l[2];
				c ? a.delegate(c, u, h) : s.bind(u, h)
			})
		},
		_off: function(e, t) {
			t = (t || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.unbind(t).undelegate(t)
		},
		_delay: function(e, t) {
			function i() {
				return ("string" == typeof e ? s[e] : e).apply(s, arguments)
			}
			var s = this;
			return setTimeout(i, t || 0)
		},
		_hoverable: function(t) {
			this.hoverable = this.hoverable.add(t), this._on(t, {
				mouseenter: function(t) {
					e(t.currentTarget).addClass("ui-state-hover")
				},
				mouseleave: function(t) {
					e(t.currentTarget).removeClass("ui-state-hover")
				}
			})
		},
		_focusable: function(t) {
			this.focusable = this.focusable.add(t), this._on(t, {
				focusin: function(t) {
					e(t.currentTarget).addClass("ui-state-focus")
				},
				focusout: function(t) {
					e(t.currentTarget).removeClass("ui-state-focus")
				}
			})
		},
		_trigger: function(t, i, s) {
			var n, a, r = this.options[t];
			if (s = s || {}, i = e.Event(i), i.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), i.target = this.element[0], a = i.originalEvent)
				for (n in a) n in i || (i[n] = a[n]);
			return this.element.trigger(i, s), !(e.isFunction(r) && r.apply(this.element[0], [i].concat(s)) === !1 || i.isDefaultPrevented())
		}
	}, e.each({
		show: "fadeIn",
		hide: "fadeOut"
	}, function(t, i) {
		e.Widget.prototype["_" + t] = function(s, n, a) {
			"string" == typeof n && (n = {
				effect: n
			});
			var r, o = n ? n === !0 || "number" == typeof n ? i : n.effect || i : t;
			n = n || {}, "number" == typeof n && (n = {
				duration: n
			}), r = !e.isEmptyObject(n), n.complete = a, n.delay && s.delay(n.delay), r && e.effects && e.effects.effect[o] ? s[t](n) : o !== t && s[o] ? s[o](n.duration, n.easing, a) : s.queue(function(i) {
				e(this)[t](), a && a.call(s[0]), i()
			})
		}
	})
})(jQuery);
(function(e) {
	var t = !1;
	e(document).mouseup(function() {
		t = !1
	}), e.widget("ui.mouse", {
		version: "1.10.3",
		options: {
			cancel: "input,textarea,button,select,option",
			distance: 1,
			delay: 0
		},
		_mouseInit: function() {
			var t = this;
			this.element.bind("mousedown." + this.widgetName, function(e) {
				return t._mouseDown(e)
			}).bind("click." + this.widgetName, function(i) {
				return !0 === e.data(i.target, t.widgetName + ".preventClickEvent") ? (e.removeData(i.target, t.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1) : undefined
			}), this.started = !1
		},
		_mouseDestroy: function() {
			this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && e(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
		},
		_mouseDown: function(i) {
			if (!t) {
				this._mouseStarted && this._mouseUp(i), this._mouseDownEvent = i;
				var s = this,
					n = 1 === i.which,
					a = "string" == typeof this.options.cancel && i.target.nodeName ? e(i.target).closest(this.options.cancel).length : !1;
				return n && !a && this._mouseCapture(i) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
					s.mouseDelayMet = !0
				}, this.options.delay)), this._mouseDistanceMet(i) && this._mouseDelayMet(i) && (this._mouseStarted = this._mouseStart(i) !== !1, !this._mouseStarted) ? (i.preventDefault(), !0) : (!0 === e.data(i.target, this.widgetName + ".preventClickEvent") && e.removeData(i.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(e) {
					return s._mouseMove(e)
				}, this._mouseUpDelegate = function(e) {
					return s._mouseUp(e)
				}, e(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), i.preventDefault(), t = !0, !0)) : !0
			}
		},
		_mouseMove: function(t) {
			return e.ui.ie && (!document.documentMode || 9 > document.documentMode) && !t.button ? this._mouseUp(t) : this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1, this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted)
		},
		_mouseUp: function(t) {
			return e(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, t.target === this._mouseDownEvent.target && e.data(t.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(t)), !1
		},
		_mouseDistanceMet: function(e) {
			return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance
		},
		_mouseDelayMet: function() {
			return this.mouseDelayMet
		},
		_mouseStart: function() {},
		_mouseDrag: function() {},
		_mouseStop: function() {},
		_mouseCapture: function() {
			return !0
		}
	})
})(jQuery);
(function(t, e) {
	function i(t, e, i) {
		return [parseFloat(t[0]) * (p.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (p.test(t[1]) ? i / 100 : 1)]
	}

	function s(e, i) {
		return parseInt(t.css(e, i), 10) || 0
	}

	function n(e) {
		var i = e[0];
		return 9 === i.nodeType ? {
			width: e.width(),
			height: e.height(),
			offset: {
				top: 0,
				left: 0
			}
		} : t.isWindow(i) ? {
			width: e.width(),
			height: e.height(),
			offset: {
				top: e.scrollTop(),
				left: e.scrollLeft()
			}
		} : i.preventDefault ? {
			width: 0,
			height: 0,
			offset: {
				top: i.pageY,
				left: i.pageX
			}
		} : {
			width: e.outerWidth(),
			height: e.outerHeight(),
			offset: e.offset()
		}
	}
	t.ui = t.ui || {};
	var a, o = Math.max,
		r = Math.abs,
		h = Math.round,
		l = /left|center|right/,
		c = /top|center|bottom/,
		u = /[\+\-]\d+(\.[\d]+)?%?/,
		d = /^\w+/,
		p = /%$/,
		f = t.fn.position;
	t.position = {
			scrollbarWidth: function() {
				if (a !== e) return a;
				var i, s, n = t("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
					o = n.children()[0];
				return t("body").append(n), i = o.offsetWidth, n.css("overflow", "scroll"), s = o.offsetWidth, i === s && (s = n[0].clientWidth), n.remove(), a = i - s
			},
			getScrollInfo: function(e) {
				var i = e.isWindow ? "" : e.element.css("overflow-x"),
					s = e.isWindow ? "" : e.element.css("overflow-y"),
					n = "scroll" === i || "auto" === i && e.width < e.element[0].scrollWidth,
					a = "scroll" === s || "auto" === s && e.height < e.element[0].scrollHeight;
				return {
					width: a ? t.position.scrollbarWidth() : 0,
					height: n ? t.position.scrollbarWidth() : 0
				}
			},
			getWithinInfo: function(e) {
				var i = t(e || window),
					s = t.isWindow(i[0]);
				return {
					element: i,
					isWindow: s,
					offset: i.offset() || {
						left: 0,
						top: 0
					},
					scrollLeft: i.scrollLeft(),
					scrollTop: i.scrollTop(),
					width: s ? i.width() : i.outerWidth(),
					height: s ? i.height() : i.outerHeight()
				}
			}
		}, t.fn.position = function(e) {
			if (!e || !e.of) return f.apply(this, arguments);
			e = t.extend({}, e);
			var a, p, m, g, v, b, _ = t(e.of),
				y = t.position.getWithinInfo(e.within),
				w = t.position.getScrollInfo(y),
				x = (e.collision || "flip").split(" "),
				k = {};
			return b = n(_), _[0].preventDefault && (e.at = "left top"), p = b.width, m = b.height, g = b.offset, v = t.extend({}, g), t.each(["my", "at"], function() {
				var t, i, s = (e[this] || "").split(" ");
				1 === s.length && (s = l.test(s[0]) ? s.concat(["center"]) : c.test(s[0]) ? ["center"].concat(s) : ["center", "center"]), s[0] = l.test(s[0]) ? s[0] : "center", s[1] = c.test(s[1]) ? s[1] : "center", t = u.exec(s[0]), i = u.exec(s[1]), k[this] = [t ? t[0] : 0, i ? i[0] : 0], e[this] = [d.exec(s[0])[0], d.exec(s[1])[0]]
			}), 1 === x.length && (x[1] = x[0]), "right" === e.at[0] ? v.left += p : "center" === e.at[0] && (v.left += p / 2), "bottom" === e.at[1] ? v.top += m : "center" === e.at[1] && (v.top += m / 2), a = i(k.at, p, m), v.left += a[0], v.top += a[1], this.each(function() {
				var n, l, c = t(this),
					u = c.outerWidth(),
					d = c.outerHeight(),
					f = s(this, "marginLeft"),
					b = s(this, "marginTop"),
					D = u + f + s(this, "marginRight") + w.width,
					T = d + b + s(this, "marginBottom") + w.height,
					C = t.extend({}, v),
					M = i(k.my, c.outerWidth(), c.outerHeight());
				"right" === e.my[0] ? C.left -= u : "center" === e.my[0] && (C.left -= u / 2), "bottom" === e.my[1] ? C.top -= d : "center" === e.my[1] && (C.top -= d / 2), C.left += M[0], C.top += M[1], t.support.offsetFractions || (C.left = h(C.left), C.top = h(C.top)), n = {
					marginLeft: f,
					marginTop: b
				}, t.each(["left", "top"], function(i, s) {
					t.ui.position[x[i]] && t.ui.position[x[i]][s](C, {
						targetWidth: p,
						targetHeight: m,
						elemWidth: u,
						elemHeight: d,
						collisionPosition: n,
						collisionWidth: D,
						collisionHeight: T,
						offset: [a[0] + M[0], a[1] + M[1]],
						my: e.my,
						at: e.at,
						within: y,
						elem: c
					})
				}), e.using && (l = function(t) {
					var i = g.left - C.left,
						s = i + p - u,
						n = g.top - C.top,
						a = n + m - d,
						h = {
							target: {
								element: _,
								left: g.left,
								top: g.top,
								width: p,
								height: m
							},
							element: {
								element: c,
								left: C.left,
								top: C.top,
								width: u,
								height: d
							},
							horizontal: 0 > s ? "left" : i > 0 ? "right" : "center",
							vertical: 0 > a ? "top" : n > 0 ? "bottom" : "middle"
						};
					u > p && p > r(i + s) && (h.horizontal = "center"), d > m && m > r(n + a) && (h.vertical = "middle"), h.important = o(r(i), r(s)) > o(r(n), r(a)) ? "horizontal" : "vertical", e.using.call(this, t, h)
				}), c.offset(t.extend(C, {
					using: l
				}))
			})
		}, t.ui.position = {
			fit: {
				left: function(t, e) {
					var i, s = e.within,
						n = s.isWindow ? s.scrollLeft : s.offset.left,
						a = s.width,
						r = t.left - e.collisionPosition.marginLeft,
						h = n - r,
						l = r + e.collisionWidth - a - n;
					e.collisionWidth > a ? h > 0 && 0 >= l ? (i = t.left + h + e.collisionWidth - a - n, t.left += h - i) : t.left = l > 0 && 0 >= h ? n : h > l ? n + a - e.collisionWidth : n : h > 0 ? t.left += h : l > 0 ? t.left -= l : t.left = o(t.left - r, t.left)
				},
				top: function(t, e) {
					var i, s = e.within,
						n = s.isWindow ? s.scrollTop : s.offset.top,
						a = e.within.height,
						r = t.top - e.collisionPosition.marginTop,
						h = n - r,
						l = r + e.collisionHeight - a - n;
					e.collisionHeight > a ? h > 0 && 0 >= l ? (i = t.top + h + e.collisionHeight - a - n, t.top += h - i) : t.top = l > 0 && 0 >= h ? n : h > l ? n + a - e.collisionHeight : n : h > 0 ? t.top += h : l > 0 ? t.top -= l : t.top = o(t.top - r, t.top)
				}
			},
			flip: {
				left: function(t, e) {
					var i, s, n = e.within,
						a = n.offset.left + n.scrollLeft,
						o = n.width,
						h = n.isWindow ? n.scrollLeft : n.offset.left,
						l = t.left - e.collisionPosition.marginLeft,
						c = l - h,
						u = l + e.collisionWidth - o - h,
						d = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0,
						p = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0,
						f = -2 * e.offset[0];
					0 > c ? (i = t.left + d + p + f + e.collisionWidth - o - a, (0 > i || r(c) > i) && (t.left += d + p + f)) : u > 0 && (s = t.left - e.collisionPosition.marginLeft + d + p + f - h, (s > 0 || u > r(s)) && (t.left += d + p + f))
				},
				top: function(t, e) {
					var i, s, n = e.within,
						a = n.offset.top + n.scrollTop,
						o = n.height,
						h = n.isWindow ? n.scrollTop : n.offset.top,
						l = t.top - e.collisionPosition.marginTop,
						c = l - h,
						u = l + e.collisionHeight - o - h,
						d = "top" === e.my[1],
						p = d ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0,
						f = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0,
						m = -2 * e.offset[1];
					0 > c ? (s = t.top + p + f + m + e.collisionHeight - o - a, t.top + p + f + m > c && (0 > s || r(c) > s) && (t.top += p + f + m)) : u > 0 && (i = t.top - e.collisionPosition.marginTop + p + f + m - h, t.top + p + f + m > u && (i > 0 || u > r(i)) && (t.top += p + f + m))
				}
			},
			flipfit: {
				left: function() {
					t.ui.position.flip.left.apply(this, arguments), t.ui.position.fit.left.apply(this, arguments)
				},
				top: function() {
					t.ui.position.flip.top.apply(this, arguments), t.ui.position.fit.top.apply(this, arguments)
				}
			}
		},
		function() {
			var e, i, s, n, a, o = document.getElementsByTagName("body")[0],
				r = document.createElement("div");
			e = document.createElement(o ? "div" : "body"), s = {
				visibility: "hidden",
				width: 0,
				height: 0,
				border: 0,
				margin: 0,
				background: "none"
			}, o && t.extend(s, {
				position: "absolute",
				left: "-1000px",
				top: "-1000px"
			});
			for (a in s) e.style[a] = s[a];
			e.appendChild(r), i = o || document.documentElement, i.insertBefore(e, i.firstChild), r.style.cssText = "position: absolute; left: 10.7432222px;", n = t(r).offset().left, t.support.offsetFractions = n > 10 && 11 > n, e.innerHTML = "", i.removeChild(e)
		}()
})(jQuery);
(function(e) {
	e.widget("ui.draggable", e.ui.mouse, {
		version: "1.10.3",
		widgetEventPrefix: "drag",
		options: {
			addClasses: !0,
			appendTo: "parent",
			axis: !1,
			connectToSortable: !1,
			containment: !1,
			cursor: "auto",
			cursorAt: !1,
			grid: !1,
			handle: !1,
			helper: "original",
			iframeFix: !1,
			opacity: !1,
			refreshPositions: !1,
			revert: !1,
			revertDuration: 500,
			scope: "default",
			scroll: !0,
			scrollSensitivity: 20,
			scrollSpeed: 20,
			snap: !1,
			snapMode: "both",
			snapTolerance: 20,
			stack: !1,
			zIndex: !1,
			drag: null,
			start: null,
			stop: null
		},
		_create: function() {
			"original" !== this.options.helper || /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative"), this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), this._mouseInit()
		},
		_destroy: function() {
			this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._mouseDestroy()
		},
		_mouseCapture: function(t) {
			var i = this.options;
			return this.helper || i.disabled || e(t.target).closest(".ui-resizable-handle").length > 0 ? !1 : (this.handle = this._getHandle(t), this.handle ? (e(i.iframeFix === !0 ? "iframe" : i.iframeFix).each(function() {
				e("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({
					width: this.offsetWidth + "px",
					height: this.offsetHeight + "px",
					position: "absolute",
					opacity: "0.001",
					zIndex: 1e3
				}).css(e(this).offset()).appendTo("body")
			}), !0) : !1)
		},
		_mouseStart: function(t) {
			var i = this.options;
			return this.helper = this._createHelper(t), this.helper.addClass("ui-draggable-dragging"), this._cacheHelperProportions(), e.ui.ddmanager && (e.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(), this.offsetParent = this.helper.offsetParent(), this.offsetParentCssPosition = this.offsetParent.css("position"), this.offset = this.positionAbs = this.element.offset(), this.offset = {
				top: this.offset.top - this.margins.top,
				left: this.offset.left - this.margins.left
			}, this.offset.scroll = !1, e.extend(this.offset, {
				click: {
					left: t.pageX - this.offset.left,
					top: t.pageY - this.offset.top
				},
				parent: this._getParentOffset(),
				relative: this._getRelativeOffset()
			}), this.originalPosition = this.position = this._generatePosition(t), this.originalPageX = t.pageX, this.originalPageY = t.pageY, i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt), this._setContainment(), this._trigger("start", t) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), e.ui.ddmanager && !i.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t), this._mouseDrag(t, !0), e.ui.ddmanager && e.ui.ddmanager.dragStart(this, t), !0)
		},
		_mouseDrag: function(t, i) {
			if ("fixed" === this.offsetParentCssPosition && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(t), this.positionAbs = this._convertPositionTo("absolute"), !i) {
				var s = this._uiHash();
				if (this._trigger("drag", t, s) === !1) return this._mouseUp({}), !1;
				this.position = s.position
			}
			return this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), e.ui.ddmanager && e.ui.ddmanager.drag(this, t), !1
		},
		_mouseStop: function(t) {
			var i = this,
				s = !1;
			return e.ui.ddmanager && !this.options.dropBehaviour && (s = e.ui.ddmanager.drop(this, t)), this.dropped && (s = this.dropped, this.dropped = !1), "original" !== this.options.helper || e.contains(this.element[0].ownerDocument, this.element[0]) ? ("invalid" === this.options.revert && !s || "valid" === this.options.revert && s || this.options.revert === !0 || e.isFunction(this.options.revert) && this.options.revert.call(this.element, s) ? e(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
				i._trigger("stop", t) !== !1 && i._clear()
			}) : this._trigger("stop", t) !== !1 && this._clear(), !1) : !1
		},
		_mouseUp: function(t) {
			return e("div.ui-draggable-iframeFix").each(function() {
				this.parentNode.removeChild(this)
			}), e.ui.ddmanager && e.ui.ddmanager.dragStop(this, t), e.ui.mouse.prototype._mouseUp.call(this, t)
		},
		cancel: function() {
			return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this
		},
		_getHandle: function(t) {
			return this.options.handle ? !!e(t.target).closest(this.element.find(this.options.handle)).length : !0
		},
		_createHelper: function(t) {
			var i = this.options,
				s = e.isFunction(i.helper) ? e(i.helper.apply(this.element[0], [t])) : "clone" === i.helper ? this.element.clone().removeAttr("id") : this.element;
			return s.parents("body").length || s.appendTo("parent" === i.appendTo ? this.element[0].parentNode : i.appendTo), s[0] === this.element[0] || /(fixed|absolute)/.test(s.css("position")) || s.css("position", "absolute"), s
		},
		_adjustOffsetFromHelper: function(t) {
			"string" == typeof t && (t = t.split(" ")), e.isArray(t) && (t = {
				left: +t[0],
				top: +t[1] || 0
			}), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
		},
		_getParentOffset: function() {
			var t = this.offsetParent.offset();
			return "absolute" === this.cssPosition && this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && e.ui.ie) && (t = {
				top: 0,
				left: 0
			}), {
				top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
				left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
			}
		},
		_getRelativeOffset: function() {
			if ("relative" === this.cssPosition) {
				var e = this.element.position();
				return {
					top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
					left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
				}
			}
			return {
				top: 0,
				left: 0
			}
		},
		_cacheMargins: function() {
			this.margins = {
				left: parseInt(this.element.css("marginLeft"), 10) || 0,
				top: parseInt(this.element.css("marginTop"), 10) || 0,
				right: parseInt(this.element.css("marginRight"), 10) || 0,
				bottom: parseInt(this.element.css("marginBottom"), 10) || 0
			}
		},
		_cacheHelperProportions: function() {
			this.helperProportions = {
				width: this.helper.outerWidth(),
				height: this.helper.outerHeight()
			}
		},
		_setContainment: function() {
			var t, i, s, n = this.options;
			return n.containment ? "window" === n.containment ? (this.containment = [e(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, e(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, e(window).scrollLeft() + e(window).width() - this.helperProportions.width - this.margins.left, e(window).scrollTop() + (e(window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top], undefined) : "document" === n.containment ? (this.containment = [0, 0, e(document).width() - this.helperProportions.width - this.margins.left, (e(document).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top], undefined) : n.containment.constructor === Array ? (this.containment = n.containment, undefined) : ("parent" === n.containment && (n.containment = this.helper[0].parentNode), i = e(n.containment), s = i[0], s && (t = "hidden" !== i.css("overflow"), this.containment = [(parseInt(i.css("borderLeftWidth"), 10) || 0) + (parseInt(i.css("paddingLeft"), 10) || 0), (parseInt(i.css("borderTopWidth"), 10) || 0) + (parseInt(i.css("paddingTop"), 10) || 0), (t ? Math.max(s.scrollWidth, s.offsetWidth) : s.offsetWidth) - (parseInt(i.css("borderRightWidth"), 10) || 0) - (parseInt(i.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (t ? Math.max(s.scrollHeight, s.offsetHeight) : s.offsetHeight) - (parseInt(i.css("borderBottomWidth"), 10) || 0) - (parseInt(i.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relative_container = i), undefined) : (this.containment = null, undefined)
		},
		_convertPositionTo: function(t, i) {
			i || (i = this.position);
			var s = "absolute" === t ? 1 : -1,
				n = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent;
			return this.offset.scroll || (this.offset.scroll = {
				top: n.scrollTop(),
				left: n.scrollLeft()
			}), {
				top: i.top + this.offset.relative.top * s + this.offset.parent.top * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : this.offset.scroll.top) * s,
				left: i.left + this.offset.relative.left * s + this.offset.parent.left * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : this.offset.scroll.left) * s
			}
		},
		_generatePosition: function(t) {
			var i, s, n, a, o = this.options,
				r = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
				h = t.pageX,
				l = t.pageY;
			return this.offset.scroll || (this.offset.scroll = {
				top: r.scrollTop(),
				left: r.scrollLeft()
			}), this.originalPosition && (this.containment && (this.relative_container ? (s = this.relative_container.offset(), i = [this.containment[0] + s.left, this.containment[1] + s.top, this.containment[2] + s.left, this.containment[3] + s.top]) : i = this.containment, t.pageX - this.offset.click.left < i[0] && (h = i[0] + this.offset.click.left), t.pageY - this.offset.click.top < i[1] && (l = i[1] + this.offset.click.top), t.pageX - this.offset.click.left > i[2] && (h = i[2] + this.offset.click.left), t.pageY - this.offset.click.top > i[3] && (l = i[3] + this.offset.click.top)), o.grid && (n = o.grid[1] ? this.originalPageY + Math.round((l - this.originalPageY) / o.grid[1]) * o.grid[1] : this.originalPageY, l = i ? n - this.offset.click.top >= i[1] || n - this.offset.click.top > i[3] ? n : n - this.offset.click.top >= i[1] ? n - o.grid[1] : n + o.grid[1] : n, a = o.grid[0] ? this.originalPageX + Math.round((h - this.originalPageX) / o.grid[0]) * o.grid[0] : this.originalPageX, h = i ? a - this.offset.click.left >= i[0] || a - this.offset.click.left > i[2] ? a : a - this.offset.click.left >= i[0] ? a - o.grid[0] : a + o.grid[0] : a)), {
				top: l - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : this.offset.scroll.top),
				left: h - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : this.offset.scroll.left)
			}
		},
		_clear: function() {
			this.helper.removeClass("ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1
		},
		_trigger: function(t, i, s) {
			return s = s || this._uiHash(), e.ui.plugin.call(this, t, [i, s]), "drag" === t && (this.positionAbs = this._convertPositionTo("absolute")), e.Widget.prototype._trigger.call(this, t, i, s)
		},
		plugins: {},
		_uiHash: function() {
			return {
				helper: this.helper,
				position: this.position,
				originalPosition: this.originalPosition,
				offset: this.positionAbs
			}
		}
	}), e.ui.plugin.add("draggable", "connectToSortable", {
		start: function(t, i) {
			var s = e(this).data("ui-draggable"),
				n = s.options,
				a = e.extend({}, i, {
					item: s.element
				});
			s.sortables = [], e(n.connectToSortable).each(function() {
				var i = e.data(this, "ui-sortable");
				i && !i.options.disabled && (s.sortables.push({
					instance: i,
					shouldRevert: i.options.revert
				}), i.refreshPositions(), i._trigger("activate", t, a))
			})
		},
		stop: function(t, i) {
			var s = e(this).data("ui-draggable"),
				n = e.extend({}, i, {
					item: s.element
				});
			e.each(s.sortables, function() {
				this.instance.isOver ? (this.instance.isOver = 0, s.cancelHelperRemoval = !0, this.instance.cancelHelperRemoval = !1, this.shouldRevert && (this.instance.options.revert = this.shouldRevert), this.instance._mouseStop(t), this.instance.options.helper = this.instance.options._helper, "original" === s.options.helper && this.instance.currentItem.css({
					top: "auto",
					left: "auto"
				})) : (this.instance.cancelHelperRemoval = !1, this.instance._trigger("deactivate", t, n))
			})
		},
		drag: function(t, i) {
			var s = e(this).data("ui-draggable"),
				n = this;
			e.each(s.sortables, function() {
				var a = !1,
					o = this;
				this.instance.positionAbs = s.positionAbs, this.instance.helperProportions = s.helperProportions, this.instance.offset.click = s.offset.click, this.instance._intersectsWith(this.instance.containerCache) && (a = !0, e.each(s.sortables, function() {
					return this.instance.positionAbs = s.positionAbs, this.instance.helperProportions = s.helperProportions, this.instance.offset.click = s.offset.click, this !== o && this.instance._intersectsWith(this.instance.containerCache) && e.contains(o.instance.element[0], this.instance.element[0]) && (a = !1), a
				})), a ? (this.instance.isOver || (this.instance.isOver = 1, this.instance.currentItem = e(n).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item", !0), this.instance.options._helper = this.instance.options.helper, this.instance.options.helper = function() {
					return i.helper[0]
				}, t.target = this.instance.currentItem[0], this.instance._mouseCapture(t, !0), this.instance._mouseStart(t, !0, !0), this.instance.offset.click.top = s.offset.click.top, this.instance.offset.click.left = s.offset.click.left, this.instance.offset.parent.left -= s.offset.parent.left - this.instance.offset.parent.left, this.instance.offset.parent.top -= s.offset.parent.top - this.instance.offset.parent.top, s._trigger("toSortable", t), s.dropped = this.instance.element, s.currentItem = s.element, this.instance.fromOutside = s), this.instance.currentItem && this.instance._mouseDrag(t)) : this.instance.isOver && (this.instance.isOver = 0, this.instance.cancelHelperRemoval = !0, this.instance.options.revert = !1, this.instance._trigger("out", t, this.instance._uiHash(this.instance)), this.instance._mouseStop(t, !0), this.instance.options.helper = this.instance.options._helper, this.instance.currentItem.remove(), this.instance.placeholder && this.instance.placeholder.remove(), s._trigger("fromSortable", t), s.dropped = !1)
			})
		}
	}), e.ui.plugin.add("draggable", "cursor", {
		start: function() {
			var t = e("body"),
				i = e(this).data("ui-draggable").options;
			t.css("cursor") && (i._cursor = t.css("cursor")), t.css("cursor", i.cursor)
		},
		stop: function() {
			var t = e(this).data("ui-draggable").options;
			t._cursor && e("body").css("cursor", t._cursor)
		}
	}), e.ui.plugin.add("draggable", "opacity", {
		start: function(t, i) {
			var s = e(i.helper),
				n = e(this).data("ui-draggable").options;
			s.css("opacity") && (n._opacity = s.css("opacity")), s.css("opacity", n.opacity)
		},
		stop: function(t, i) {
			var s = e(this).data("ui-draggable").options;
			s._opacity && e(i.helper).css("opacity", s._opacity)
		}
	}), e.ui.plugin.add("draggable", "scroll", {
		start: function() {
			var t = e(this).data("ui-draggable");
			t.scrollParent[0] !== document && "HTML" !== t.scrollParent[0].tagName && (t.overflowOffset = t.scrollParent.offset())
		},
		drag: function(t) {
			var i = e(this).data("ui-draggable"),
				s = i.options,
				n = !1;
			i.scrollParent[0] !== document && "HTML" !== i.scrollParent[0].tagName ? (s.axis && "x" === s.axis || (i.overflowOffset.top + i.scrollParent[0].offsetHeight - t.pageY < s.scrollSensitivity ? i.scrollParent[0].scrollTop = n = i.scrollParent[0].scrollTop + s.scrollSpeed : t.pageY - i.overflowOffset.top < s.scrollSensitivity && (i.scrollParent[0].scrollTop = n = i.scrollParent[0].scrollTop - s.scrollSpeed)), s.axis && "y" === s.axis || (i.overflowOffset.left + i.scrollParent[0].offsetWidth - t.pageX < s.scrollSensitivity ? i.scrollParent[0].scrollLeft = n = i.scrollParent[0].scrollLeft + s.scrollSpeed : t.pageX - i.overflowOffset.left < s.scrollSensitivity && (i.scrollParent[0].scrollLeft = n = i.scrollParent[0].scrollLeft - s.scrollSpeed))) : (s.axis && "x" === s.axis || (t.pageY - e(document).scrollTop() < s.scrollSensitivity ? n = e(document).scrollTop(e(document).scrollTop() - s.scrollSpeed) : e(window).height() - (t.pageY - e(document).scrollTop()) < s.scrollSensitivity && (n = e(document).scrollTop(e(document).scrollTop() + s.scrollSpeed))), s.axis && "y" === s.axis || (t.pageX - e(document).scrollLeft() < s.scrollSensitivity ? n = e(document).scrollLeft(e(document).scrollLeft() - s.scrollSpeed) : e(window).width() - (t.pageX - e(document).scrollLeft()) < s.scrollSensitivity && (n = e(document).scrollLeft(e(document).scrollLeft() + s.scrollSpeed)))), n !== !1 && e.ui.ddmanager && !s.dropBehaviour && e.ui.ddmanager.prepareOffsets(i, t)
		}
	}), e.ui.plugin.add("draggable", "snap", {
		start: function() {
			var t = e(this).data("ui-draggable"),
				i = t.options;
			t.snapElements = [], e(i.snap.constructor !== String ? i.snap.items || ":data(ui-draggable)" : i.snap).each(function() {
				var i = e(this),
					s = i.offset();
				this !== t.element[0] && t.snapElements.push({
					item: this,
					width: i.outerWidth(),
					height: i.outerHeight(),
					top: s.top,
					left: s.left
				})
			})
		},
		drag: function(t, i) {
			var s, n, a, o, r, h, l, u, c, d, p = e(this).data("ui-draggable"),
				f = p.options,
				m = f.snapTolerance,
				g = i.offset.left,
				v = g + p.helperProportions.width,
				b = i.offset.top,
				y = b + p.helperProportions.height;
			for (c = p.snapElements.length - 1; c >= 0; c--) r = p.snapElements[c].left, h = r + p.snapElements[c].width, l = p.snapElements[c].top, u = l + p.snapElements[c].height, r - m > v || g > h + m || l - m > y || b > u + m || !e.contains(p.snapElements[c].item.ownerDocument, p.snapElements[c].item) ? (p.snapElements[c].snapping && p.options.snap.release && p.options.snap.release.call(p.element, t, e.extend(p._uiHash(), {
				snapItem: p.snapElements[c].item
			})), p.snapElements[c].snapping = !1) : ("inner" !== f.snapMode && (s = m >= Math.abs(l - y), n = m >= Math.abs(u - b), a = m >= Math.abs(r - v), o = m >= Math.abs(h - g), s && (i.position.top = p._convertPositionTo("relative", {
				top: l - p.helperProportions.height,
				left: 0
			}).top - p.margins.top), n && (i.position.top = p._convertPositionTo("relative", {
				top: u,
				left: 0
			}).top - p.margins.top), a && (i.position.left = p._convertPositionTo("relative", {
				top: 0,
				left: r - p.helperProportions.width
			}).left - p.margins.left), o && (i.position.left = p._convertPositionTo("relative", {
				top: 0,
				left: h
			}).left - p.margins.left)), d = s || n || a || o, "outer" !== f.snapMode && (s = m >= Math.abs(l - b), n = m >= Math.abs(u - y), a = m >= Math.abs(r - g), o = m >= Math.abs(h - v), s && (i.position.top = p._convertPositionTo("relative", {
				top: l,
				left: 0
			}).top - p.margins.top), n && (i.position.top = p._convertPositionTo("relative", {
				top: u - p.helperProportions.height,
				left: 0
			}).top - p.margins.top), a && (i.position.left = p._convertPositionTo("relative", {
				top: 0,
				left: r
			}).left - p.margins.left), o && (i.position.left = p._convertPositionTo("relative", {
				top: 0,
				left: h - p.helperProportions.width
			}).left - p.margins.left)), !p.snapElements[c].snapping && (s || n || a || o || d) && p.options.snap.snap && p.options.snap.snap.call(p.element, t, e.extend(p._uiHash(), {
				snapItem: p.snapElements[c].item
			})), p.snapElements[c].snapping = s || n || a || o || d)
		}
	}), e.ui.plugin.add("draggable", "stack", {
		start: function() {
			var t, i = this.data("ui-draggable").options,
				s = e.makeArray(e(i.stack)).sort(function(t, i) {
					return (parseInt(e(t).css("zIndex"), 10) || 0) - (parseInt(e(i).css("zIndex"), 10) || 0)
				});
			s.length && (t = parseInt(e(s[0]).css("zIndex"), 10) || 0, e(s).each(function(i) {
				e(this).css("zIndex", t + i)
			}), this.css("zIndex", t + s.length))
		}
	}), e.ui.plugin.add("draggable", "zIndex", {
		start: function(t, i) {
			var s = e(i.helper),
				n = e(this).data("ui-draggable").options;
			s.css("zIndex") && (n._zIndex = s.css("zIndex")), s.css("zIndex", n.zIndex)
		},
		stop: function(t, i) {
			var s = e(this).data("ui-draggable").options;
			s._zIndex && e(i.helper).css("zIndex", s._zIndex)
		}
	})
})(jQuery);
(function(e) {
	function t(e, t, i) {
		return e > t && t + i > e
	}
	e.widget("ui.droppable", {
		version: "1.10.3",
		widgetEventPrefix: "drop",
		options: {
			accept: "*",
			activeClass: !1,
			addClasses: !0,
			greedy: !1,
			hoverClass: !1,
			scope: "default",
			tolerance: "intersect",
			activate: null,
			deactivate: null,
			drop: null,
			out: null,
			over: null
		},
		_create: function() {
			var t = this.options,
				i = t.accept;
			this.isover = !1, this.isout = !0, this.accept = e.isFunction(i) ? i : function(e) {
				return e.is(i)
			}, this.proportions = {
				width: this.element[0].offsetWidth,
				height: this.element[0].offsetHeight
			}, e.ui.ddmanager.droppables[t.scope] = e.ui.ddmanager.droppables[t.scope] || [], e.ui.ddmanager.droppables[t.scope].push(this), t.addClasses && this.element.addClass("ui-droppable")
		},
		_destroy: function() {
			for (var t = 0, i = e.ui.ddmanager.droppables[this.options.scope]; i.length > t; t++) i[t] === this && i.splice(t, 1);
			this.element.removeClass("ui-droppable ui-droppable-disabled")
		},
		_setOption: function(t, i) {
			"accept" === t && (this.accept = e.isFunction(i) ? i : function(e) {
				return e.is(i)
			}), e.Widget.prototype._setOption.apply(this, arguments)
		},
		_activate: function(t) {
			var i = e.ui.ddmanager.current;
			this.options.activeClass && this.element.addClass(this.options.activeClass), i && this._trigger("activate", t, this.ui(i))
		},
		_deactivate: function(t) {
			var i = e.ui.ddmanager.current;
			this.options.activeClass && this.element.removeClass(this.options.activeClass), i && this._trigger("deactivate", t, this.ui(i))
		},
		_over: function(t) {
			var i = e.ui.ddmanager.current;
			i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass), this._trigger("over", t, this.ui(i)))
		},
		_out: function(t) {
			var i = e.ui.ddmanager.current;
			i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("out", t, this.ui(i)))
		},
		_drop: function(t, i) {
			var s = i || e.ui.ddmanager.current,
				n = !1;
			return s && (s.currentItem || s.element)[0] !== this.element[0] ? (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function() {
				var t = e.data(this, "ui-droppable");
				return t.options.greedy && !t.options.disabled && t.options.scope === s.options.scope && t.accept.call(t.element[0], s.currentItem || s.element) && e.ui.intersect(s, e.extend(t, {
					offset: t.element.offset()
				}), t.options.tolerance) ? (n = !0, !1) : undefined
			}), n ? !1 : this.accept.call(this.element[0], s.currentItem || s.element) ? (this.options.activeClass && this.element.removeClass(this.options.activeClass), this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("drop", t, this.ui(s)), this.element) : !1) : !1
		},
		ui: function(e) {
			return {
				draggable: e.currentItem || e.element,
				helper: e.helper,
				position: e.position,
				offset: e.positionAbs
			}
		}
	}), e.ui.intersect = function(e, i, s) {
		if (!i.offset) return !1;
		var n, a, o = (e.positionAbs || e.position.absolute).left,
			r = o + e.helperProportions.width,
			h = (e.positionAbs || e.position.absolute).top,
			l = h + e.helperProportions.height,
			u = i.offset.left,
			c = u + i.proportions.width,
			d = i.offset.top,
			p = d + i.proportions.height;
		switch (s) {
			case "fit":
				return o >= u && c >= r && h >= d && p >= l;
			case "intersect":
				return o + e.helperProportions.width / 2 > u && c > r - e.helperProportions.width / 2 && h + e.helperProportions.height / 2 > d && p > l - e.helperProportions.height / 2;
			case "pointer":
				return n = (e.positionAbs || e.position.absolute).left + (e.clickOffset || e.offset.click).left, a = (e.positionAbs || e.position.absolute).top + (e.clickOffset || e.offset.click).top, t(a, d, i.proportions.height) && t(n, u, i.proportions.width);
			case "touch":
				return (h >= d && p >= h || l >= d && p >= l || d > h && l > p) && (o >= u && c >= o || r >= u && c >= r || u > o && r > c);
			default:
				return !1
		}
	}, e.ui.ddmanager = {
		current: null,
		droppables: {
			"default": []
		},
		prepareOffsets: function(t, i) {
			var s, n, a = e.ui.ddmanager.droppables[t.options.scope] || [],
				o = i ? i.type : null,
				r = (t.currentItem || t.element).find(":data(ui-droppable)").addBack();
			e: for (s = 0; a.length > s; s++)
				if (!(a[s].options.disabled || t && !a[s].accept.call(a[s].element[0], t.currentItem || t.element))) {
					for (n = 0; r.length > n; n++)
						if (r[n] === a[s].element[0]) {
							a[s].proportions.height = 0;
							continue e
						}
					a[s].visible = "none" !== a[s].element.css("display"), a[s].visible && ("mousedown" === o && a[s]._activate.call(a[s], i), a[s].offset = a[s].element.offset(), a[s].proportions = {
						width: a[s].element[0].offsetWidth,
						height: a[s].element[0].offsetHeight
					})
				}
		},
		drop: function(t, i) {
			var s = !1;
			return e.each((e.ui.ddmanager.droppables[t.options.scope] || []).slice(), function() {
				this.options && (!this.options.disabled && this.visible && e.ui.intersect(t, this, this.options.tolerance) && (s = this._drop.call(this, i) || s), !this.options.disabled && this.visible && this.accept.call(this.element[0], t.currentItem || t.element) && (this.isout = !0, this.isover = !1, this._deactivate.call(this, i)))
			}), s
		},
		dragStart: function(t, i) {
			t.element.parentsUntil("body").bind("scroll.droppable", function() {
				t.options.refreshPositions || e.ui.ddmanager.prepareOffsets(t, i)
			})
		},
		drag: function(t, i) {
			t.options.refreshPositions && e.ui.ddmanager.prepareOffsets(t, i), e.each(e.ui.ddmanager.droppables[t.options.scope] || [], function() {
				if (!this.options.disabled && !this.greedyChild && this.visible) {
					var s, n, a, o = e.ui.intersect(t, this, this.options.tolerance),
						r = !o && this.isover ? "isout" : o && !this.isover ? "isover" : null;
					r && (this.options.greedy && (n = this.options.scope, a = this.element.parents(":data(ui-droppable)").filter(function() {
						return e.data(this, "ui-droppable").options.scope === n
					}), a.length && (s = e.data(a[0], "ui-droppable"), s.greedyChild = "isover" === r)), s && "isover" === r && (s.isover = !1, s.isout = !0, s._out.call(s, i)), this[r] = !0, this["isout" === r ? "isover" : "isout"] = !1, this["isover" === r ? "_over" : "_out"].call(this, i), s && "isout" === r && (s.isout = !1, s.isover = !0, s._over.call(s, i)))
				}
			})
		},
		dragStop: function(t, i) {
			t.element.parentsUntil("body").unbind("scroll.droppable"), t.options.refreshPositions || e.ui.ddmanager.prepareOffsets(t, i)
		}
	}
})(jQuery);
(function(e) {
	function t(e) {
		return parseInt(e, 10) || 0
	}

	function i(e) {
		return !isNaN(parseInt(e, 10))
	}
	e.widget("ui.resizable", e.ui.mouse, {
		version: "1.10.3",
		widgetEventPrefix: "resize",
		options: {
			alsoResize: !1,
			animate: !1,
			animateDuration: "slow",
			animateEasing: "swing",
			aspectRatio: !1,
			autoHide: !1,
			containment: !1,
			ghost: !1,
			grid: !1,
			handles: "e,s,se",
			helper: !1,
			maxHeight: null,
			maxWidth: null,
			minHeight: 10,
			minWidth: 10,
			zIndex: 90,
			resize: null,
			start: null,
			stop: null
		},
		_create: function() {
			var t, i, s, n, a, o = this,
				r = this.options;
			if (this.element.addClass("ui-resizable"), e.extend(this, {
					_aspectRatio: !!r.aspectRatio,
					aspectRatio: r.aspectRatio,
					originalElement: this.element,
					_proportionallyResizeElements: [],
					_helper: r.helper || r.ghost || r.animate ? r.helper || "ui-resizable-helper" : null
				}), this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i) && (this.element.wrap(e("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
					position: this.element.css("position"),
					width: this.element.outerWidth(),
					height: this.element.outerHeight(),
					top: this.element.css("top"),
					left: this.element.css("left")
				})), this.element = this.element.parent().data("ui-resizable", this.element.data("ui-resizable")), this.elementIsWrapper = !0, this.element.css({
					marginLeft: this.originalElement.css("marginLeft"),
					marginTop: this.originalElement.css("marginTop"),
					marginRight: this.originalElement.css("marginRight"),
					marginBottom: this.originalElement.css("marginBottom")
				}), this.originalElement.css({
					marginLeft: 0,
					marginTop: 0,
					marginRight: 0,
					marginBottom: 0
				}), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
					position: "static",
					zoom: 1,
					display: "block"
				})), this.originalElement.css({
					margin: this.originalElement.css("margin")
				}), this._proportionallyResize()), this.handles = r.handles || (e(".ui-resizable-handle", this.element).length ? {
					n: ".ui-resizable-n",
					e: ".ui-resizable-e",
					s: ".ui-resizable-s",
					w: ".ui-resizable-w",
					se: ".ui-resizable-se",
					sw: ".ui-resizable-sw",
					ne: ".ui-resizable-ne",
					nw: ".ui-resizable-nw"
				} : "e,s,se"), this.handles.constructor === String)
				for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), t = this.handles.split(","), this.handles = {}, i = 0; t.length > i; i++) s = e.trim(t[i]), a = "ui-resizable-" + s, n = e("<div class='ui-resizable-handle " + a + "'></div>"), n.css({
					zIndex: r.zIndex
				}), "se" === s && n.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), this.handles[s] = ".ui-resizable-" + s, this.element.append(n);
			this._renderAxis = function(t) {
				var i, s, n, a;
				t = t || this.element;
				for (i in this.handles) this.handles[i].constructor === String && (this.handles[i] = e(this.handles[i], this.element).show()), this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i) && (s = e(this.handles[i], this.element), a = /sw|ne|nw|se|n|s/.test(i) ? s.outerHeight() : s.outerWidth(), n = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join(""), t.css(n, a), this._proportionallyResize()), e(this.handles[i]).length
			}, this._renderAxis(this.element), this._handles = e(".ui-resizable-handle", this.element).disableSelection(), this._handles.mouseover(function() {
				o.resizing || (this.className && (n = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), o.axis = n && n[1] ? n[1] : "se")
			}), r.autoHide && (this._handles.hide(), e(this.element).addClass("ui-resizable-autohide").mouseenter(function() {
				r.disabled || (e(this).removeClass("ui-resizable-autohide"), o._handles.show())
			}).mouseleave(function() {
				r.disabled || o.resizing || (e(this).addClass("ui-resizable-autohide"), o._handles.hide())
			})), this._mouseInit()
		},
		_destroy: function() {
			this._mouseDestroy();
			var t, i = function(t) {
				e(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
			};
			return this.elementIsWrapper && (i(this.element), t = this.element, this.originalElement.css({
				position: t.css("position"),
				width: t.outerWidth(),
				height: t.outerHeight(),
				top: t.css("top"),
				left: t.css("left")
			}).insertAfter(t), t.remove()), this.originalElement.css("resize", this.originalResizeStyle), i(this.originalElement), this
		},
		_mouseCapture: function(t) {
			var i, s, n = !1;
			for (i in this.handles) s = e(this.handles[i])[0], (s === t.target || e.contains(s, t.target)) && (n = !0);
			return !this.options.disabled && n
		},
		_mouseStart: function(i) {
			var s, n, a, o = this.options,
				r = this.element.position(),
				h = this.element;
			return this.resizing = !0, /absolute/.test(h.css("position")) ? h.css({
				position: "absolute",
				top: h.css("top"),
				left: h.css("left")
			}) : h.is(".ui-draggable") && h.css({
				position: "absolute",
				top: r.top,
				left: r.left
			}), this._renderProxy(), s = t(this.helper.css("left")), n = t(this.helper.css("top")), o.containment && (s += e(o.containment).scrollLeft() || 0, n += e(o.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
				left: s,
				top: n
			}, this.size = this._helper ? {
				width: h.outerWidth(),
				height: h.outerHeight()
			} : {
				width: h.width(),
				height: h.height()
			}, this.originalSize = this._helper ? {
				width: h.outerWidth(),
				height: h.outerHeight()
			} : {
				width: h.width(),
				height: h.height()
			}, this.originalPosition = {
				left: s,
				top: n
			}, this.sizeDiff = {
				width: h.outerWidth() - h.width(),
				height: h.outerHeight() - h.height()
			}, this.originalMousePosition = {
				left: i.pageX,
				top: i.pageY
			}, this.aspectRatio = "number" == typeof o.aspectRatio ? o.aspectRatio : this.originalSize.width / this.originalSize.height || 1, a = e(".ui-resizable-" + this.axis).css("cursor"), e("body").css("cursor", "auto" === a ? this.axis + "-resize" : a), h.addClass("ui-resizable-resizing"), this._propagate("start", i), !0
		},
		_mouseDrag: function(t) {
			var i, s = this.helper,
				n = {},
				a = this.originalMousePosition,
				o = this.axis,
				r = this.position.top,
				h = this.position.left,
				l = this.size.width,
				u = this.size.height,
				c = t.pageX - a.left || 0,
				d = t.pageY - a.top || 0,
				p = this._change[o];
			return p ? (i = p.apply(this, [t, c, d]), this._updateVirtualBoundaries(t.shiftKey), (this._aspectRatio || t.shiftKey) && (i = this._updateRatio(i, t)), i = this._respectSize(i, t), this._updateCache(i), this._propagate("resize", t), this.position.top !== r && (n.top = this.position.top + "px"), this.position.left !== h && (n.left = this.position.left + "px"), this.size.width !== l && (n.width = this.size.width + "px"), this.size.height !== u && (n.height = this.size.height + "px"), s.css(n), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), e.isEmptyObject(n) || this._trigger("resize", t, this.ui()), !1) : !1
		},
		_mouseStop: function(t) {
			this.resizing = !1;
			var i, s, n, a, o, r, h, l = this.options,
				u = this;
			return this._helper && (i = this._proportionallyResizeElements, s = i.length && /textarea/i.test(i[0].nodeName), n = s && e.ui.hasScroll(i[0], "left") ? 0 : u.sizeDiff.height, a = s ? 0 : u.sizeDiff.width, o = {
				width: u.helper.width() - a,
				height: u.helper.height() - n
			}, r = parseInt(u.element.css("left"), 10) + (u.position.left - u.originalPosition.left) || null, h = parseInt(u.element.css("top"), 10) + (u.position.top - u.originalPosition.top) || null, l.animate || this.element.css(e.extend(o, {
				top: h,
				left: r
			})), u.helper.height(u.size.height), u.helper.width(u.size.width), this._helper && !l.animate && this._proportionallyResize()), e("body").css("cursor", "auto"), this.element.removeClass("ui-resizable-resizing"), this._propagate("stop", t), this._helper && this.helper.remove(), !1
		},
		_updateVirtualBoundaries: function(e) {
			var t, s, n, a, o, r = this.options;
			o = {
				minWidth: i(r.minWidth) ? r.minWidth : 0,
				maxWidth: i(r.maxWidth) ? r.maxWidth : 1 / 0,
				minHeight: i(r.minHeight) ? r.minHeight : 0,
				maxHeight: i(r.maxHeight) ? r.maxHeight : 1 / 0
			}, (this._aspectRatio || e) && (t = o.minHeight * this.aspectRatio, n = o.minWidth / this.aspectRatio, s = o.maxHeight * this.aspectRatio, a = o.maxWidth / this.aspectRatio, t > o.minWidth && (o.minWidth = t), n > o.minHeight && (o.minHeight = n), o.maxWidth > s && (o.maxWidth = s), o.maxHeight > a && (o.maxHeight = a)), this._vBoundaries = o
		},
		_updateCache: function(e) {
			this.offset = this.helper.offset(), i(e.left) && (this.position.left = e.left), i(e.top) && (this.position.top = e.top), i(e.height) && (this.size.height = e.height), i(e.width) && (this.size.width = e.width)
		},
		_updateRatio: function(e) {
			var t = this.position,
				s = this.size,
				n = this.axis;
			return i(e.height) ? e.width = e.height * this.aspectRatio : i(e.width) && (e.height = e.width / this.aspectRatio), "sw" === n && (e.left = t.left + (s.width - e.width), e.top = null), "nw" === n && (e.top = t.top + (s.height - e.height), e.left = t.left + (s.width - e.width)), e
		},
		_respectSize: function(e) {
			var t = this._vBoundaries,
				s = this.axis,
				n = i(e.width) && t.maxWidth && t.maxWidth < e.width,
				a = i(e.height) && t.maxHeight && t.maxHeight < e.height,
				o = i(e.width) && t.minWidth && t.minWidth > e.width,
				r = i(e.height) && t.minHeight && t.minHeight > e.height,
				h = this.originalPosition.left + this.originalSize.width,
				l = this.position.top + this.size.height,
				u = /sw|nw|w/.test(s),
				c = /nw|ne|n/.test(s);
			return o && (e.width = t.minWidth), r && (e.height = t.minHeight), n && (e.width = t.maxWidth), a && (e.height = t.maxHeight), o && u && (e.left = h - t.minWidth), n && u && (e.left = h - t.maxWidth), r && c && (e.top = l - t.minHeight), a && c && (e.top = l - t.maxHeight), e.width || e.height || e.left || !e.top ? e.width || e.height || e.top || !e.left || (e.left = null) : e.top = null, e
		},
		_proportionallyResize: function() {
			if (this._proportionallyResizeElements.length) {
				var e, t, i, s, n, a = this.helper || this.element;
				for (e = 0; this._proportionallyResizeElements.length > e; e++) {
					if (n = this._proportionallyResizeElements[e], !this.borderDif)
						for (this.borderDif = [], i = [n.css("borderTopWidth"), n.css("borderRightWidth"), n.css("borderBottomWidth"), n.css("borderLeftWidth")], s = [n.css("paddingTop"), n.css("paddingRight"), n.css("paddingBottom"), n.css("paddingLeft")], t = 0; i.length > t; t++) this.borderDif[t] = (parseInt(i[t], 10) || 0) + (parseInt(s[t], 10) || 0);
					n.css({
						height: a.height() - this.borderDif[0] - this.borderDif[2] || 0,
						width: a.width() - this.borderDif[1] - this.borderDif[3] || 0
					})
				}
			}
		},
		_renderProxy: function() {
			var t = this.element,
				i = this.options;
			this.elementOffset = t.offset(), this._helper ? (this.helper = this.helper || e("<div style='overflow:hidden;'></div>"), this.helper.addClass(this._helper).css({
				width: this.element.outerWidth() - 1,
				height: this.element.outerHeight() - 1,
				position: "absolute",
				left: this.elementOffset.left + "px",
				top: this.elementOffset.top + "px",
				zIndex: ++i.zIndex
			}), this.helper.appendTo("body").disableSelection()) : this.helper = this.element
		},
		_change: {
			e: function(e, t) {
				return {
					width: this.originalSize.width + t
				}
			},
			w: function(e, t) {
				var i = this.originalSize,
					s = this.originalPosition;
				return {
					left: s.left + t,
					width: i.width - t
				}
			},
			n: function(e, t, i) {
				var s = this.originalSize,
					n = this.originalPosition;
				return {
					top: n.top + i,
					height: s.height - i
				}
			},
			s: function(e, t, i) {
				return {
					height: this.originalSize.height + i
				}
			},
			se: function(t, i, s) {
				return e.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [t, i, s]))
			},
			sw: function(t, i, s) {
				return e.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [t, i, s]))
			},
			ne: function(t, i, s) {
				return e.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [t, i, s]))
			},
			nw: function(t, i, s) {
				return e.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [t, i, s]))
			}
		},
		_propagate: function(t, i) {
			e.ui.plugin.call(this, t, [i, this.ui()]), "resize" !== t && this._trigger(t, i, this.ui())
		},
		plugins: {},
		ui: function() {
			return {
				originalElement: this.originalElement,
				element: this.element,
				helper: this.helper,
				position: this.position,
				size: this.size,
				originalSize: this.originalSize,
				originalPosition: this.originalPosition
			}
		}
	}), e.ui.plugin.add("resizable", "animate", {
		stop: function(t) {
			var i = e(this).data("ui-resizable"),
				s = i.options,
				n = i._proportionallyResizeElements,
				a = n.length && /textarea/i.test(n[0].nodeName),
				o = a && e.ui.hasScroll(n[0], "left") ? 0 : i.sizeDiff.height,
				r = a ? 0 : i.sizeDiff.width,
				h = {
					width: i.size.width - r,
					height: i.size.height - o
				},
				l = parseInt(i.element.css("left"), 10) + (i.position.left - i.originalPosition.left) || null,
				u = parseInt(i.element.css("top"), 10) + (i.position.top - i.originalPosition.top) || null;
			i.element.animate(e.extend(h, u && l ? {
				top: u,
				left: l
			} : {}), {
				duration: s.animateDuration,
				easing: s.animateEasing,
				step: function() {
					var s = {
						width: parseInt(i.element.css("width"), 10),
						height: parseInt(i.element.css("height"), 10),
						top: parseInt(i.element.css("top"), 10),
						left: parseInt(i.element.css("left"), 10)
					};
					n && n.length && e(n[0]).css({
						width: s.width,
						height: s.height
					}), i._updateCache(s), i._propagate("resize", t)
				}
			})
		}
	}), e.ui.plugin.add("resizable", "containment", {
		start: function() {
			var i, s, n, a, o, r, h, l = e(this).data("ui-resizable"),
				u = l.options,
				c = l.element,
				d = u.containment,
				p = d instanceof e ? d.get(0) : /parent/.test(d) ? c.parent().get(0) : d;
			p && (l.containerElement = e(p), /document/.test(d) || d === document ? (l.containerOffset = {
				left: 0,
				top: 0
			}, l.containerPosition = {
				left: 0,
				top: 0
			}, l.parentData = {
				element: e(document),
				left: 0,
				top: 0,
				width: e(document).width(),
				height: e(document).height() || document.body.parentNode.scrollHeight
			}) : (i = e(p), s = [], e(["Top", "Right", "Left", "Bottom"]).each(function(e, n) {
				s[e] = t(i.css("padding" + n))
			}), l.containerOffset = i.offset(), l.containerPosition = i.position(), l.containerSize = {
				height: i.innerHeight() - s[3],
				width: i.innerWidth() - s[1]
			}, n = l.containerOffset, a = l.containerSize.height, o = l.containerSize.width, r = e.ui.hasScroll(p, "left") ? p.scrollWidth : o, h = e.ui.hasScroll(p) ? p.scrollHeight : a, l.parentData = {
				element: p,
				left: n.left,
				top: n.top,
				width: r,
				height: h
			}))
		},
		resize: function(t) {
			var i, s, n, a, o = e(this).data("ui-resizable"),
				r = o.options,
				h = o.containerOffset,
				l = o.position,
				u = o._aspectRatio || t.shiftKey,
				c = {
					top: 0,
					left: 0
				},
				d = o.containerElement;
			d[0] !== document && /static/.test(d.css("position")) && (c = h), l.left < (o._helper ? h.left : 0) && (o.size.width = o.size.width + (o._helper ? o.position.left - h.left : o.position.left - c.left), u && (o.size.height = o.size.width / o.aspectRatio), o.position.left = r.helper ? h.left : 0), l.top < (o._helper ? h.top : 0) && (o.size.height = o.size.height + (o._helper ? o.position.top - h.top : o.position.top), u && (o.size.width = o.size.height * o.aspectRatio), o.position.top = o._helper ? h.top : 0), o.offset.left = o.parentData.left + o.position.left, o.offset.top = o.parentData.top + o.position.top, i = Math.abs((o._helper ? o.offset.left - c.left : o.offset.left - c.left) + o.sizeDiff.width), s = Math.abs((o._helper ? o.offset.top - c.top : o.offset.top - h.top) + o.sizeDiff.height), n = o.containerElement.get(0) === o.element.parent().get(0), a = /relative|absolute/.test(o.containerElement.css("position")), n && a && (i -= o.parentData.left), i + o.size.width >= o.parentData.width && (o.size.width = o.parentData.width - i, u && (o.size.height = o.size.width / o.aspectRatio)), s + o.size.height >= o.parentData.height && (o.size.height = o.parentData.height - s, u && (o.size.width = o.size.height * o.aspectRatio))
		},
		stop: function() {
			var t = e(this).data("ui-resizable"),
				i = t.options,
				s = t.containerOffset,
				n = t.containerPosition,
				a = t.containerElement,
				o = e(t.helper),
				r = o.offset(),
				h = o.outerWidth() - t.sizeDiff.width,
				l = o.outerHeight() - t.sizeDiff.height;
			t._helper && !i.animate && /relative/.test(a.css("position")) && e(this).css({
				left: r.left - n.left - s.left,
				width: h,
				height: l
			}), t._helper && !i.animate && /static/.test(a.css("position")) && e(this).css({
				left: r.left - n.left - s.left,
				width: h,
				height: l
			})
		}
	}), e.ui.plugin.add("resizable", "alsoResize", {
		start: function() {
			var t = e(this).data("ui-resizable"),
				i = t.options,
				s = function(t) {
					e(t).each(function() {
						var t = e(this);
						t.data("ui-resizable-alsoresize", {
							width: parseInt(t.width(), 10),
							height: parseInt(t.height(), 10),
							left: parseInt(t.css("left"), 10),
							top: parseInt(t.css("top"), 10)
						})
					})
				};
			"object" != typeof i.alsoResize || i.alsoResize.parentNode ? s(i.alsoResize) : i.alsoResize.length ? (i.alsoResize = i.alsoResize[0], s(i.alsoResize)) : e.each(i.alsoResize, function(e) {
				s(e)
			})
		},
		resize: function(t, i) {
			var s = e(this).data("ui-resizable"),
				n = s.options,
				a = s.originalSize,
				o = s.originalPosition,
				r = {
					height: s.size.height - a.height || 0,
					width: s.size.width - a.width || 0,
					top: s.position.top - o.top || 0,
					left: s.position.left - o.left || 0
				},
				h = function(t, s) {
					e(t).each(function() {
						var t = e(this),
							n = e(this).data("ui-resizable-alsoresize"),
							a = {},
							o = s && s.length ? s : t.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
						e.each(o, function(e, t) {
							var i = (n[t] || 0) + (r[t] || 0);
							i && i >= 0 && (a[t] = i || null)
						}), t.css(a)
					})
				};
			"object" != typeof n.alsoResize || n.alsoResize.nodeType ? h(n.alsoResize) : e.each(n.alsoResize, function(e, t) {
				h(e, t)
			})
		},
		stop: function() {
			e(this).removeData("resizable-alsoresize")
		}
	}), e.ui.plugin.add("resizable", "ghost", {
		start: function() {
			var t = e(this).data("ui-resizable"),
				i = t.options,
				s = t.size;
			t.ghost = t.originalElement.clone(), t.ghost.css({
				opacity: .25,
				display: "block",
				position: "relative",
				height: s.height,
				width: s.width,
				margin: 0,
				left: 0,
				top: 0
			}).addClass("ui-resizable-ghost").addClass("string" == typeof i.ghost ? i.ghost : ""), t.ghost.appendTo(t.helper)
		},
		resize: function() {
			var t = e(this).data("ui-resizable");
			t.ghost && t.ghost.css({
				position: "relative",
				height: t.size.height,
				width: t.size.width
			})
		},
		stop: function() {
			var t = e(this).data("ui-resizable");
			t.ghost && t.helper && t.helper.get(0).removeChild(t.ghost.get(0))
		}
	}), e.ui.plugin.add("resizable", "grid", {
		resize: function() {
			var t = e(this).data("ui-resizable"),
				i = t.options,
				s = t.size,
				n = t.originalSize,
				a = t.originalPosition,
				o = t.axis,
				r = "number" == typeof i.grid ? [i.grid, i.grid] : i.grid,
				h = r[0] || 1,
				l = r[1] || 1,
				u = Math.round((s.width - n.width) / h) * h,
				c = Math.round((s.height - n.height) / l) * l,
				d = n.width + u,
				p = n.height + c,
				f = i.maxWidth && d > i.maxWidth,
				m = i.maxHeight && p > i.maxHeight,
				g = i.minWidth && i.minWidth > d,
				v = i.minHeight && i.minHeight > p;
			i.grid = r, g && (d += h), v && (p += l), f && (d -= h), m && (p -= l), /^(se|s|e)$/.test(o) ? (t.size.width = d, t.size.height = p) : /^(ne)$/.test(o) ? (t.size.width = d, t.size.height = p, t.position.top = a.top - c) : /^(sw)$/.test(o) ? (t.size.width = d, t.size.height = p, t.position.left = a.left - u) : (t.size.width = d, t.size.height = p, t.position.top = a.top - c, t.position.left = a.left - u)
		}
	})
})(jQuery);
(function(e) {
	e.widget("ui.selectable", e.ui.mouse, {
		version: "1.10.3",
		options: {
			appendTo: "body",
			autoRefresh: !0,
			distance: 0,
			filter: "*",
			tolerance: "touch",
			selected: null,
			selecting: null,
			start: null,
			stop: null,
			unselected: null,
			unselecting: null
		},
		_create: function() {
			var t, i = this;
			this.element.addClass("ui-selectable"), this.dragged = !1, this.refresh = function() {
				t = e(i.options.filter, i.element[0]), t.addClass("ui-selectee"), t.each(function() {
					var t = e(this),
						i = t.offset();
					e.data(this, "selectable-item", {
						element: this,
						$element: t,
						left: i.left,
						top: i.top,
						right: i.left + t.outerWidth(),
						bottom: i.top + t.outerHeight(),
						startselected: !1,
						selected: t.hasClass("ui-selected"),
						selecting: t.hasClass("ui-selecting"),
						unselecting: t.hasClass("ui-unselecting")
					})
				})
			}, this.refresh(), this.selectees = t.addClass("ui-selectee"), this._mouseInit(), this.helper = e("<div class='ui-selectable-helper'></div>")
		},
		_destroy: function() {
			this.selectees.removeClass("ui-selectee").removeData("selectable-item"), this.element.removeClass("ui-selectable ui-selectable-disabled"), this._mouseDestroy()
		},
		_mouseStart: function(t) {
			var i = this,
				s = this.options;
			this.opos = [t.pageX, t.pageY], this.options.disabled || (this.selectees = e(s.filter, this.element[0]), this._trigger("start", t), e(s.appendTo).append(this.helper), this.helper.css({
				left: t.pageX,
				top: t.pageY,
				width: 0,
				height: 0
			}), s.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function() {
				var s = e.data(this, "selectable-item");
				s.startselected = !0, t.metaKey || t.ctrlKey || (s.$element.removeClass("ui-selected"), s.selected = !1, s.$element.addClass("ui-unselecting"), s.unselecting = !0, i._trigger("unselecting", t, {
					unselecting: s.element
				}))
			}), e(t.target).parents().addBack().each(function() {
				var s, n = e.data(this, "selectable-item");
				return n ? (s = !t.metaKey && !t.ctrlKey || !n.$element.hasClass("ui-selected"), n.$element.removeClass(s ? "ui-unselecting" : "ui-selected").addClass(s ? "ui-selecting" : "ui-unselecting"), n.unselecting = !s, n.selecting = s, n.selected = s, s ? i._trigger("selecting", t, {
					selecting: n.element
				}) : i._trigger("unselecting", t, {
					unselecting: n.element
				}), !1) : undefined
			}))
		},
		_mouseDrag: function(t) {
			if (this.dragged = !0, !this.options.disabled) {
				var i, s = this,
					n = this.options,
					a = this.opos[0],
					o = this.opos[1],
					r = t.pageX,
					h = t.pageY;
				return a > r && (i = r, r = a, a = i), o > h && (i = h, h = o, o = i), this.helper.css({
					left: a,
					top: o,
					width: r - a,
					height: h - o
				}), this.selectees.each(function() {
					var i = e.data(this, "selectable-item"),
						l = !1;
					i && i.element !== s.element[0] && ("touch" === n.tolerance ? l = !(i.left > r || a > i.right || i.top > h || o > i.bottom) : "fit" === n.tolerance && (l = i.left > a && r > i.right && i.top > o && h > i.bottom), l ? (i.selected && (i.$element.removeClass("ui-selected"), i.selected = !1), i.unselecting && (i.$element.removeClass("ui-unselecting"), i.unselecting = !1), i.selecting || (i.$element.addClass("ui-selecting"), i.selecting = !0, s._trigger("selecting", t, {
						selecting: i.element
					}))) : (i.selecting && ((t.metaKey || t.ctrlKey) && i.startselected ? (i.$element.removeClass("ui-selecting"), i.selecting = !1, i.$element.addClass("ui-selected"), i.selected = !0) : (i.$element.removeClass("ui-selecting"), i.selecting = !1, i.startselected && (i.$element.addClass("ui-unselecting"), i.unselecting = !0), s._trigger("unselecting", t, {
						unselecting: i.element
					}))), i.selected && (t.metaKey || t.ctrlKey || i.startselected || (i.$element.removeClass("ui-selected"), i.selected = !1, i.$element.addClass("ui-unselecting"), i.unselecting = !0, s._trigger("unselecting", t, {
						unselecting: i.element
					})))))
				}), !1
			}
		},
		_mouseStop: function(t) {
			var i = this;
			return this.dragged = !1, e(".ui-unselecting", this.element[0]).each(function() {
				var s = e.data(this, "selectable-item");
				s.$element.removeClass("ui-unselecting"), s.unselecting = !1, s.startselected = !1, i._trigger("unselected", t, {
					unselected: s.element
				})
			}), e(".ui-selecting", this.element[0]).each(function() {
				var s = e.data(this, "selectable-item");
				s.$element.removeClass("ui-selecting").addClass("ui-selected"), s.selecting = !1, s.selected = !0, s.startselected = !0, i._trigger("selected", t, {
					selected: s.element
				})
			}), this._trigger("stop", t), this.helper.remove(), !1
		}
	})
})(jQuery);
(function(t) {
	function e(t, e, i) {
		return t > e && e + i > t
	}

	function i(t) {
		return /left|right/.test(t.css("float")) || /inline|table-cell/.test(t.css("display"))
	}
	t.widget("ui.sortable", t.ui.mouse, {
		version: "1.10.3",
		widgetEventPrefix: "sort",
		ready: !1,
		options: {
			appendTo: "parent",
			axis: !1,
			connectWith: !1,
			containment: !1,
			cursor: "auto",
			cursorAt: !1,
			dropOnEmpty: !0,
			forcePlaceholderSize: !1,
			forceHelperSize: !1,
			grid: !1,
			handle: !1,
			helper: "original",
			items: "> *",
			opacity: !1,
			placeholder: !1,
			revert: !1,
			scroll: !0,
			scrollSensitivity: 20,
			scrollSpeed: 20,
			scope: "default",
			tolerance: "intersect",
			zIndex: 1e3,
			activate: null,
			beforeStop: null,
			change: null,
			deactivate: null,
			out: null,
			over: null,
			receive: null,
			remove: null,
			sort: null,
			start: null,
			stop: null,
			update: null
		},
		_create: function() {
			var t = this.options;
			this.containerCache = {}, this.element.addClass("ui-sortable"), this.refresh(), this.floating = this.items.length ? "x" === t.axis || i(this.items[0].item) : !1, this.offset = this.element.offset(), this._mouseInit(), this.ready = !0
		},
		_destroy: function() {
			this.element.removeClass("ui-sortable ui-sortable-disabled"), this._mouseDestroy();
			for (var t = this.items.length - 1; t >= 0; t--) this.items[t].item.removeData(this.widgetName + "-item");
			return this
		},
		_setOption: function(e, i) {
			"disabled" === e ? (this.options[e] = i, this.widget().toggleClass("ui-sortable-disabled", !!i)) : t.Widget.prototype._setOption.apply(this, arguments)
		},
		_mouseCapture: function(e, i) {
			var s = null,
				n = !1,
				a = this;
			return this.reverting ? !1 : this.options.disabled || "static" === this.options.type ? !1 : (this._refreshItems(e), t(e.target).parents().each(function() {
				return t.data(this, a.widgetName + "-item") === a ? (s = t(this), !1) : undefined
			}), t.data(e.target, a.widgetName + "-item") === a && (s = t(e.target)), s ? !this.options.handle || i || (t(this.options.handle, s).find("*").addBack().each(function() {
				this === e.target && (n = !0)
			}), n) ? (this.currentItem = s, this._removeCurrentsFromItems(), !0) : !1 : !1)
		},
		_mouseStart: function(e, i, s) {
			var n, a, o = this.options;
			if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(e), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
					top: this.offset.top - this.margins.top,
					left: this.offset.left - this.margins.left
				}, t.extend(this.offset, {
					click: {
						left: e.pageX - this.offset.left,
						top: e.pageY - this.offset.top
					},
					parent: this._getParentOffset(),
					relative: this._getRelativeOffset()
				}), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(e), this.originalPageX = e.pageX, this.originalPageY = e.pageY, o.cursorAt && this._adjustOffsetFromHelper(o.cursorAt), this.domPosition = {
					prev: this.currentItem.prev()[0],
					parent: this.currentItem.parent()[0]
				}, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), o.containment && this._setContainment(), o.cursor && "auto" !== o.cursor && (a = this.document.find("body"), this.storedCursor = a.css("cursor"), a.css("cursor", o.cursor), this.storedStylesheet = t("<style>*{ cursor: " + o.cursor + " !important; }</style>").appendTo(a)), o.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", o.opacity)), o.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", o.zIndex)), this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", e, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !s)
				for (n = this.containers.length - 1; n >= 0; n--) this.containers[n]._trigger("activate", e, this._uiHash(this));
			return t.ui.ddmanager && (t.ui.ddmanager.current = this), t.ui.ddmanager && !o.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(e), !0
		},
		_mouseDrag: function(e) {
			var i, s, n, a, o = this.options,
				r = !1;
			for (this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - e.pageY < o.scrollSensitivity ? this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop + o.scrollSpeed : e.pageY - this.overflowOffset.top < o.scrollSensitivity && (this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop - o.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - e.pageX < o.scrollSensitivity ? this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft + o.scrollSpeed : e.pageX - this.overflowOffset.left < o.scrollSensitivity && (this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft - o.scrollSpeed)) : (e.pageY - t(document).scrollTop() < o.scrollSensitivity ? r = t(document).scrollTop(t(document).scrollTop() - o.scrollSpeed) : t(window).height() - (e.pageY - t(document).scrollTop()) < o.scrollSensitivity && (r = t(document).scrollTop(t(document).scrollTop() + o.scrollSpeed)), e.pageX - t(document).scrollLeft() < o.scrollSensitivity ? r = t(document).scrollLeft(t(document).scrollLeft() - o.scrollSpeed) : t(window).width() - (e.pageX - t(document).scrollLeft()) < o.scrollSensitivity && (r = t(document).scrollLeft(t(document).scrollLeft() + o.scrollSpeed))), r !== !1 && t.ui.ddmanager && !o.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), i = this.items.length - 1; i >= 0; i--)
				if (s = this.items[i], n = s.item[0], a = this._intersectsWithPointer(s), a && s.instance === this.currentContainer && n !== this.currentItem[0] && this.placeholder[1 === a ? "next" : "prev"]()[0] !== n && !t.contains(this.placeholder[0], n) && ("semi-dynamic" === this.options.type ? !t.contains(this.element[0], n) : !0)) {
					if (this.direction = 1 === a ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(s)) break;
					this._rearrange(e, s), this._trigger("change", e, this._uiHash());
					break
				}
			return this._contactContainers(e), t.ui.ddmanager && t.ui.ddmanager.drag(this, e), this._trigger("sort", e, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
		},
		_mouseStop: function(e, i) {
			if (e) {
				if (t.ui.ddmanager && !this.options.dropBehaviour && t.ui.ddmanager.drop(this, e), this.options.revert) {
					var s = this,
						n = this.placeholder.offset(),
						a = this.options.axis,
						o = {};
					a && "x" !== a || (o.left = n.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollLeft)), a && "y" !== a || (o.top = n.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollTop)), this.reverting = !0, t(this.helper).animate(o, parseInt(this.options.revert, 10) || 500, function() {
						s._clear(e)
					})
				} else this._clear(e, i);
				return !1
			}
		},
		cancel: function() {
			if (this.dragging) {
				this._mouseUp({
					target: null
				}), "original" === this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
				for (var e = this.containers.length - 1; e >= 0; e--) this.containers[e]._trigger("deactivate", null, this._uiHash(this)), this.containers[e].containerCache.over && (this.containers[e]._trigger("out", null, this._uiHash(this)), this.containers[e].containerCache.over = 0)
			}
			return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), t.extend(this, {
				helper: null,
				dragging: !1,
				reverting: !1,
				_noFinalSort: null
			}), this.domPosition.prev ? t(this.domPosition.prev).after(this.currentItem) : t(this.domPosition.parent).prepend(this.currentItem)), this
		},
		serialize: function(e) {
			var i = this._getItemsAsjQuery(e && e.connected),
				s = [];
			return e = e || {}, t(i).each(function() {
				var i = (t(e.item || this).attr(e.attribute || "id") || "").match(e.expression || /(.+)[\-=_](.+)/);
				i && s.push((e.key || i[1] + "[]") + "=" + (e.key && e.expression ? i[1] : i[2]))
			}), !s.length && e.key && s.push(e.key + "="), s.join("&")
		},
		toArray: function(e) {
			var i = this._getItemsAsjQuery(e && e.connected),
				s = [];
			return e = e || {}, i.each(function() {
				s.push(t(e.item || this).attr(e.attribute || "id") || "")
			}), s
		},
		_intersectsWith: function(t) {
			var e = this.positionAbs.left,
				i = e + this.helperProportions.width,
				s = this.positionAbs.top,
				n = s + this.helperProportions.height,
				a = t.left,
				o = a + t.width,
				r = t.top,
				h = r + t.height,
				l = this.offset.click.top,
				c = this.offset.click.left,
				u = "x" === this.options.axis || s + l > r && h > s + l,
				d = "y" === this.options.axis || e + c > a && o > e + c,
				p = u && d;
			return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > t[this.floating ? "width" : "height"] ? p : e + this.helperProportions.width / 2 > a && o > i - this.helperProportions.width / 2 && s + this.helperProportions.height / 2 > r && h > n - this.helperProportions.height / 2
		},
		_intersectsWithPointer: function(t) {
			var i = "x" === this.options.axis || e(this.positionAbs.top + this.offset.click.top, t.top, t.height),
				s = "y" === this.options.axis || e(this.positionAbs.left + this.offset.click.left, t.left, t.width),
				n = i && s,
				a = this._getDragVerticalDirection(),
				o = this._getDragHorizontalDirection();
			return n ? this.floating ? o && "right" === o || "down" === a ? 2 : 1 : a && ("down" === a ? 2 : 1) : !1
		},
		_intersectsWithSides: function(t) {
			var i = e(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height),
				s = e(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width),
				n = this._getDragVerticalDirection(),
				a = this._getDragHorizontalDirection();
			return this.floating && a ? "right" === a && s || "left" === a && !s : n && ("down" === n && i || "up" === n && !i)
		},
		_getDragVerticalDirection: function() {
			var t = this.positionAbs.top - this.lastPositionAbs.top;
			return 0 !== t && (t > 0 ? "down" : "up")
		},
		_getDragHorizontalDirection: function() {
			var t = this.positionAbs.left - this.lastPositionAbs.left;
			return 0 !== t && (t > 0 ? "right" : "left")
		},
		refresh: function(t) {
			return this._refreshItems(t), this.refreshPositions(), this
		},
		_connectWith: function() {
			var t = this.options;
			return t.connectWith.constructor === String ? [t.connectWith] : t.connectWith
		},
		_getItemsAsjQuery: function(e) {
			var i, s, n, a, o = [],
				r = [],
				h = this._connectWith();
			if (h && e)
				for (i = h.length - 1; i >= 0; i--)
					for (n = t(h[i]), s = n.length - 1; s >= 0; s--) a = t.data(n[s], this.widgetFullName), a && a !== this && !a.options.disabled && r.push([t.isFunction(a.options.items) ? a.options.items.call(a.element) : t(a.options.items, a.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), a]);
			for (r.push([t.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
					options: this.options,
					item: this.currentItem
				}) : t(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), i = r.length - 1; i >= 0; i--) r[i][0].each(function() {
				o.push(this)
			});
			return t(o)
		},
		_removeCurrentsFromItems: function() {
			var e = this.currentItem.find(":data(" + this.widgetName + "-item)");
			this.items = t.grep(this.items, function(t) {
				for (var i = 0; e.length > i; i++)
					if (e[i] === t.item[0]) return !1;
				return !0
			})
		},
		_refreshItems: function(e) {
			this.items = [], this.containers = [this];
			var i, s, n, a, o, r, h, l, c = this.items,
				u = [
					[t.isFunction(this.options.items) ? this.options.items.call(this.element[0], e, {
						item: this.currentItem
					}) : t(this.options.items, this.element), this]
				],
				d = this._connectWith();
			if (d && this.ready)
				for (i = d.length - 1; i >= 0; i--)
					for (n = t(d[i]), s = n.length - 1; s >= 0; s--) a = t.data(n[s], this.widgetFullName), a && a !== this && !a.options.disabled && (u.push([t.isFunction(a.options.items) ? a.options.items.call(a.element[0], e, {
						item: this.currentItem
					}) : t(a.options.items, a.element), a]), this.containers.push(a));
			for (i = u.length - 1; i >= 0; i--)
				for (o = u[i][1], r = u[i][0], s = 0, l = r.length; l > s; s++) h = t(r[s]), h.data(this.widgetName + "-item", o), c.push({
					item: h,
					instance: o,
					width: 0,
					height: 0,
					left: 0,
					top: 0
				})
		},
		refreshPositions: function(e) {
			this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
			var i, s, n, a;
			for (i = this.items.length - 1; i >= 0; i--) s = this.items[i], s.instance !== this.currentContainer && this.currentContainer && s.item[0] !== this.currentItem[0] || (n = this.options.toleranceElement ? t(this.options.toleranceElement, s.item) : s.item, e || (s.width = n.outerWidth(), s.height = n.outerHeight()), a = n.offset(), s.left = a.left, s.top = a.top);
			if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
			else
				for (i = this.containers.length - 1; i >= 0; i--) a = this.containers[i].element.offset(), this.containers[i].containerCache.left = a.left, this.containers[i].containerCache.top = a.top, this.containers[i].containerCache.width = this.containers[i].element.outerWidth(), this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
			return this
		},
		_createPlaceholder: function(e) {
			e = e || this;
			var i, s = e.options;
			s.placeholder && s.placeholder.constructor !== String || (i = s.placeholder, s.placeholder = {
				element: function() {
					var s = e.currentItem[0].nodeName.toLowerCase(),
						n = t("<" + s + ">", e.document[0]).addClass(i || e.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper");
					return "tr" === s ? e.currentItem.children().each(function() {
						t("<td>&#160;</td>", e.document[0]).attr("colspan", t(this).attr("colspan") || 1).appendTo(n)
					}) : "img" === s && n.attr("src", e.currentItem.attr("src")), i || n.css("visibility", "hidden"), n
				},
				update: function(t, n) {
					(!i || s.forcePlaceholderSize) && (n.height() || n.height(e.currentItem.innerHeight() - parseInt(e.currentItem.css("paddingTop") || 0, 10) - parseInt(e.currentItem.css("paddingBottom") || 0, 10)), n.width() || n.width(e.currentItem.innerWidth() - parseInt(e.currentItem.css("paddingLeft") || 0, 10) - parseInt(e.currentItem.css("paddingRight") || 0, 10)))
				}
			}), e.placeholder = t(s.placeholder.element.call(e.element, e.currentItem)), e.currentItem.after(e.placeholder), s.placeholder.update(e, e.placeholder)
		},
		_contactContainers: function(s) {
			var n, a, o, r, h, l, c, u, d, p, f = null,
				m = null;
			for (n = this.containers.length - 1; n >= 0; n--)
				if (!t.contains(this.currentItem[0], this.containers[n].element[0]))
					if (this._intersectsWith(this.containers[n].containerCache)) {
						if (f && t.contains(this.containers[n].element[0], f.element[0])) continue;
						f = this.containers[n], m = n
					} else this.containers[n].containerCache.over && (this.containers[n]._trigger("out", s, this._uiHash(this)), this.containers[n].containerCache.over = 0);
			if (f)
				if (1 === this.containers.length) this.containers[m].containerCache.over || (this.containers[m]._trigger("over", s, this._uiHash(this)), this.containers[m].containerCache.over = 1);
				else {
					for (o = 1e4, r = null, p = f.floating || i(this.currentItem), h = p ? "left" : "top", l = p ? "width" : "height", c = this.positionAbs[h] + this.offset.click[h], a = this.items.length - 1; a >= 0; a--) t.contains(this.containers[m].element[0], this.items[a].item[0]) && this.items[a].item[0] !== this.currentItem[0] && (!p || e(this.positionAbs.top + this.offset.click.top, this.items[a].top, this.items[a].height)) && (u = this.items[a].item.offset()[h], d = !1, Math.abs(u - c) > Math.abs(u + this.items[a][l] - c) && (d = !0, u += this.items[a][l]), o > Math.abs(u - c) && (o = Math.abs(u - c), r = this.items[a], this.direction = d ? "up" : "down"));
					if (!r && !this.options.dropOnEmpty) return;
					if (this.currentContainer === this.containers[m]) return;
					r ? this._rearrange(s, r, null, !0) : this._rearrange(s, null, this.containers[m].element, !0), this._trigger("change", s, this._uiHash()), this.containers[m]._trigger("change", s, this._uiHash(this)), this.currentContainer = this.containers[m], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[m]._trigger("over", s, this._uiHash(this)), this.containers[m].containerCache.over = 1
				}
		},
		_createHelper: function(e) {
			var i = this.options,
				s = t.isFunction(i.helper) ? t(i.helper.apply(this.element[0], [e, this.currentItem])) : "clone" === i.helper ? this.currentItem.clone() : this.currentItem;
			return s.parents("body").length || t("parent" !== i.appendTo ? i.appendTo : this.currentItem[0].parentNode)[0].appendChild(s[0]), s[0] === this.currentItem[0] && (this._storedCSS = {
				width: this.currentItem[0].style.width,
				height: this.currentItem[0].style.height,
				position: this.currentItem.css("position"),
				top: this.currentItem.css("top"),
				left: this.currentItem.css("left")
			}), (!s[0].style.width || i.forceHelperSize) && s.width(this.currentItem.width()), (!s[0].style.height || i.forceHelperSize) && s.height(this.currentItem.height()), s
		},
		_adjustOffsetFromHelper: function(e) {
			"string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {
				left: +e[0],
				top: +e[1] || 0
			}), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
		},
		_getParentOffset: function() {
			this.offsetParent = this.helper.offsetParent();
			var e = this.offsetParent.offset();
			return "absolute" === this.cssPosition && this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && t.ui.ie) && (e = {
				top: 0,
				left: 0
			}), {
				top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
				left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
			}
		},
		_getRelativeOffset: function() {
			if ("relative" === this.cssPosition) {
				var t = this.currentItem.position();
				return {
					top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
					left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
				}
			}
			return {
				top: 0,
				left: 0
			}
		},
		_cacheMargins: function() {
			this.margins = {
				left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
				top: parseInt(this.currentItem.css("marginTop"), 10) || 0
			}
		},
		_cacheHelperProportions: function() {
			this.helperProportions = {
				width: this.helper.outerWidth(),
				height: this.helper.outerHeight()
			}
		},
		_setContainment: function() {
			var e, i, s, n = this.options;
			"parent" === n.containment && (n.containment = this.helper[0].parentNode), ("document" === n.containment || "window" === n.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, t("document" === n.containment ? document : window).width() - this.helperProportions.width - this.margins.left, (t("document" === n.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(n.containment) || (e = t(n.containment)[0], i = t(n.containment).offset(), s = "hidden" !== t(e).css("overflow"), this.containment = [i.left + (parseInt(t(e).css("borderLeftWidth"), 10) || 0) + (parseInt(t(e).css("paddingLeft"), 10) || 0) - this.margins.left, i.top + (parseInt(t(e).css("borderTopWidth"), 10) || 0) + (parseInt(t(e).css("paddingTop"), 10) || 0) - this.margins.top, i.left + (s ? Math.max(e.scrollWidth, e.offsetWidth) : e.offsetWidth) - (parseInt(t(e).css("borderLeftWidth"), 10) || 0) - (parseInt(t(e).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, i.top + (s ? Math.max(e.scrollHeight, e.offsetHeight) : e.offsetHeight) - (parseInt(t(e).css("borderTopWidth"), 10) || 0) - (parseInt(t(e).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
		},
		_convertPositionTo: function(e, i) {
			i || (i = this.position);
			var s = "absolute" === e ? 1 : -1,
				n = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
				a = /(html|body)/i.test(n[0].tagName);
			return {
				top: i.top + this.offset.relative.top * s + this.offset.parent.top * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : a ? 0 : n.scrollTop()) * s,
				left: i.left + this.offset.relative.left * s + this.offset.parent.left * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : a ? 0 : n.scrollLeft()) * s
			}
		},
		_generatePosition: function(e) {
			var i, s, n = this.options,
				a = e.pageX,
				o = e.pageY,
				r = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
				h = /(html|body)/i.test(r[0].tagName);
			return "relative" !== this.cssPosition || this.scrollParent[0] !== document && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (e.pageX - this.offset.click.left < this.containment[0] && (a = this.containment[0] + this.offset.click.left), e.pageY - this.offset.click.top < this.containment[1] && (o = this.containment[1] + this.offset.click.top), e.pageX - this.offset.click.left > this.containment[2] && (a = this.containment[2] + this.offset.click.left), e.pageY - this.offset.click.top > this.containment[3] && (o = this.containment[3] + this.offset.click.top)), n.grid && (i = this.originalPageY + Math.round((o - this.originalPageY) / n.grid[1]) * n.grid[1], o = this.containment ? i - this.offset.click.top >= this.containment[1] && i - this.offset.click.top <= this.containment[3] ? i : i - this.offset.click.top >= this.containment[1] ? i - n.grid[1] : i + n.grid[1] : i, s = this.originalPageX + Math.round((a - this.originalPageX) / n.grid[0]) * n.grid[0], a = this.containment ? s - this.offset.click.left >= this.containment[0] && s - this.offset.click.left <= this.containment[2] ? s : s - this.offset.click.left >= this.containment[0] ? s - n.grid[0] : s + n.grid[0] : s)), {
				top: o - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : h ? 0 : r.scrollTop()),
				left: a - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : h ? 0 : r.scrollLeft())
			}
		},
		_rearrange: function(t, e, i, s) {
			i ? i[0].appendChild(this.placeholder[0]) : e.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? e.item[0] : e.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
			var n = this.counter;
			this._delay(function() {
				n === this.counter && this.refreshPositions(!s)
			})
		},
		_clear: function(t, e) {
			this.reverting = !1;
			var i, s = [];
			if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
				for (i in this._storedCSS)("auto" === this._storedCSS[i] || "static" === this._storedCSS[i]) && (this._storedCSS[i] = "");
				this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
			} else this.currentItem.show();
			for (this.fromOutside && !e && s.push(function(t) {
					this._trigger("receive", t, this._uiHash(this.fromOutside))
				}), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || e || s.push(function(t) {
					this._trigger("update", t, this._uiHash())
				}), this !== this.currentContainer && (e || (s.push(function(t) {
					this._trigger("remove", t, this._uiHash())
				}), s.push(function(t) {
					return function(e) {
						t._trigger("receive", e, this._uiHash(this))
					}
				}.call(this, this.currentContainer)), s.push(function(t) {
					return function(e) {
						t._trigger("update", e, this._uiHash(this))
					}
				}.call(this, this.currentContainer)))), i = this.containers.length - 1; i >= 0; i--) e || s.push(function(t) {
				return function(e) {
					t._trigger("deactivate", e, this._uiHash(this))
				}
			}.call(this, this.containers[i])), this.containers[i].containerCache.over && (s.push(function(t) {
				return function(e) {
					t._trigger("out", e, this._uiHash(this))
				}
			}.call(this, this.containers[i])), this.containers[i].containerCache.over = 0);
			if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, this.cancelHelperRemoval) {
				if (!e) {
					for (this._trigger("beforeStop", t, this._uiHash()), i = 0; s.length > i; i++) s[i].call(this, t);
					this._trigger("stop", t, this._uiHash())
				}
				return this.fromOutside = !1, !1
			}
			if (e || this._trigger("beforeStop", t, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null, !e) {
				for (i = 0; s.length > i; i++) s[i].call(this, t);
				this._trigger("stop", t, this._uiHash())
			}
			return this.fromOutside = !1, !0
		},
		_trigger: function() {
			t.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
		},
		_uiHash: function(e) {
			var i = e || this;
			return {
				helper: i.helper,
				placeholder: i.placeholder || t([]),
				position: i.position,
				originalPosition: i.originalPosition,
				offset: i.positionAbs,
				item: i.currentItem,
				sender: e ? e.element : null
			}
		}
	})
})(jQuery);
(function(t) {
	var e = 0,
		i = {},
		s = {};
	i.height = i.paddingTop = i.paddingBottom = i.borderTopWidth = i.borderBottomWidth = "hide", s.height = s.paddingTop = s.paddingBottom = s.borderTopWidth = s.borderBottomWidth = "show", t.widget("ui.accordion", {
		version: "1.10.3",
		options: {
			active: 0,
			animate: {},
			collapsible: !1,
			event: "click",
			header: "> li > :first-child,> :not(li):even",
			heightStyle: "auto",
			icons: {
				activeHeader: "ui-icon-triangle-1-s",
				header: "ui-icon-triangle-1-e"
			},
			activate: null,
			beforeActivate: null
		},
		_create: function() {
			var e = this.options;
			this.prevShow = this.prevHide = t(), this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role", "tablist"), e.collapsible || e.active !== !1 && null != e.active || (e.active = 0), this._processPanels(), 0 > e.active && (e.active += this.headers.length), this._refresh()
		},
		_getCreateEventData: function() {
			return {
				header: this.active,
				panel: this.active.length ? this.active.next() : t(),
				content: this.active.length ? this.active.next() : t()
			}
		},
		_createIcons: function() {
			var e = this.options.icons;
			e && (t("<span>").addClass("ui-accordion-header-icon ui-icon " + e.header).prependTo(this.headers), this.active.children(".ui-accordion-header-icon").removeClass(e.header).addClass(e.activeHeader), this.headers.addClass("ui-accordion-icons"))
		},
		_destroyIcons: function() {
			this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()
		},
		_destroy: function() {
			var t;
			this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"), this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").each(function() {
				/^ui-accordion/.test(this.id) && this.removeAttribute("id")
			}), this._destroyIcons(), t = this.headers.next().css("display", "").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").each(function() {
				/^ui-accordion/.test(this.id) && this.removeAttribute("id")
			}), "content" !== this.options.heightStyle && t.css("height", "")
		},
		_setOption: function(t, e) {
			return "active" === t ? (this._activate(e), undefined) : ("event" === t && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(e)), this._super(t, e), "collapsible" !== t || e || this.options.active !== !1 || this._activate(0), "icons" === t && (this._destroyIcons(), e && this._createIcons()), "disabled" === t && this.headers.add(this.headers.next()).toggleClass("ui-state-disabled", !!e), undefined)
		},
		_keydown: function(e) {
			if (!e.altKey && !e.ctrlKey) {
				var i = t.ui.keyCode,
					s = this.headers.length,
					n = this.headers.index(e.target),
					a = !1;
				switch (e.keyCode) {
					case i.RIGHT:
					case i.DOWN:
						a = this.headers[(n + 1) % s];
						break;
					case i.LEFT:
					case i.UP:
						a = this.headers[(n - 1 + s) % s];
						break;
					case i.SPACE:
					case i.ENTER:
						this._eventHandler(e);
						break;
					case i.HOME:
						a = this.headers[0];
						break;
					case i.END:
						a = this.headers[s - 1]
				}
				a && (t(e.target).attr("tabIndex", -1), t(a).attr("tabIndex", 0), a.focus(), e.preventDefault())
			}
		},
		_panelKeyDown: function(e) {
			e.keyCode === t.ui.keyCode.UP && e.ctrlKey && t(e.currentTarget).prev().focus()
		},
		refresh: function() {
			var e = this.options;
			this._processPanels(), e.active === !1 && e.collapsible === !0 || !this.headers.length ? (e.active = !1, this.active = t()) : e.active === !1 ? this._activate(0) : this.active.length && !t.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (e.active = !1, this.active = t()) : this._activate(Math.max(0, e.active - 1)) : e.active = this.headers.index(this.active), this._destroyIcons(), this._refresh()
		},
		_processPanels: function() {
			this.headers = this.element.find(this.options.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all"), this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide()
		},
		_refresh: function() {
			var i, s = this.options,
				n = s.heightStyle,
				a = this.element.parent(),
				o = this.accordionId = "ui-accordion-" + (this.element.attr("id") || ++e);
			this.active = this._findActive(s.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all"), this.active.next().addClass("ui-accordion-content-active").show(), this.headers.attr("role", "tab").each(function(e) {
				var i = t(this),
					s = i.attr("id"),
					n = i.next(),
					a = n.attr("id");
				s || (s = o + "-header-" + e, i.attr("id", s)), a || (a = o + "-panel-" + e, n.attr("id", a)), i.attr("aria-controls", a), n.attr("aria-labelledby", s)
			}).next().attr("role", "tabpanel"), this.headers.not(this.active).attr({
				"aria-selected": "false",
				tabIndex: -1
			}).next().attr({
				"aria-expanded": "false",
				"aria-hidden": "true"
			}).hide(), this.active.length ? this.active.attr({
				"aria-selected": "true",
				tabIndex: 0
			}).next().attr({
				"aria-expanded": "true",
				"aria-hidden": "false"
			}) : this.headers.eq(0).attr("tabIndex", 0), this._createIcons(), this._setupEvents(s.event), "fill" === n ? (i = a.height(), this.element.siblings(":visible").each(function() {
				var e = t(this),
					s = e.css("position");
				"absolute" !== s && "fixed" !== s && (i -= e.outerHeight(!0))
			}), this.headers.each(function() {
				i -= t(this).outerHeight(!0)
			}), this.headers.next().each(function() {
				t(this).height(Math.max(0, i - t(this).innerHeight() + t(this).height()))
			}).css("overflow", "auto")) : "auto" === n && (i = 0, this.headers.next().each(function() {
				i = Math.max(i, t(this).css("height", "").height())
			}).height(i))
		},
		_activate: function(e) {
			var i = this._findActive(e)[0];
			i !== this.active[0] && (i = i || this.active[0], this._eventHandler({
				target: i,
				currentTarget: i,
				preventDefault: t.noop
			}))
		},
		_findActive: function(e) {
			return "number" == typeof e ? this.headers.eq(e) : t()
		},
		_setupEvents: function(e) {
			var i = {
				keydown: "_keydown"
			};
			e && t.each(e.split(" "), function(t, e) {
				i[e] = "_eventHandler"
			}), this._off(this.headers.add(this.headers.next())), this._on(this.headers, i), this._on(this.headers.next(), {
				keydown: "_panelKeyDown"
			}), this._hoverable(this.headers), this._focusable(this.headers)
		},
		_eventHandler: function(e) {
			var i = this.options,
				s = this.active,
				n = t(e.currentTarget),
				a = n[0] === s[0],
				o = a && i.collapsible,
				r = o ? t() : n.next(),
				h = s.next(),
				l = {
					oldHeader: s,
					oldPanel: h,
					newHeader: o ? t() : n,
					newPanel: r
				};
			e.preventDefault(), a && !i.collapsible || this._trigger("beforeActivate", e, l) === !1 || (i.active = o ? !1 : this.headers.index(n), this.active = a ? t() : n, this._toggle(l), s.removeClass("ui-accordion-header-active ui-state-active"), i.icons && s.children(".ui-accordion-header-icon").removeClass(i.icons.activeHeader).addClass(i.icons.header), a || (n.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"), i.icons && n.children(".ui-accordion-header-icon").removeClass(i.icons.header).addClass(i.icons.activeHeader), n.next().addClass("ui-accordion-content-active")))
		},
		_toggle: function(e) {
			var i = e.newPanel,
				s = this.prevShow.length ? this.prevShow : e.oldPanel;
			this.prevShow.add(this.prevHide).stop(!0, !0), this.prevShow = i, this.prevHide = s, this.options.animate ? this._animate(i, s, e) : (s.hide(), i.show(), this._toggleComplete(e)), s.attr({
				"aria-expanded": "false",
				"aria-hidden": "true"
			}), s.prev().attr("aria-selected", "false"), i.length && s.length ? s.prev().attr("tabIndex", -1) : i.length && this.headers.filter(function() {
				return 0 === t(this).attr("tabIndex")
			}).attr("tabIndex", -1), i.attr({
				"aria-expanded": "true",
				"aria-hidden": "false"
			}).prev().attr({
				"aria-selected": "true",
				tabIndex: 0
			})
		},
		_animate: function(t, e, n) {
			var a, o, r, h = this,
				l = 0,
				c = t.length && (!e.length || t.index() < e.index()),
				u = this.options.animate || {},
				d = c && u.down || u,
				p = function() {
					h._toggleComplete(n)
				};
			return "number" == typeof d && (r = d), "string" == typeof d && (o = d), o = o || d.easing || u.easing, r = r || d.duration || u.duration, e.length ? t.length ? (a = t.show().outerHeight(), e.animate(i, {
				duration: r,
				easing: o,
				step: function(t, e) {
					e.now = Math.round(t)
				}
			}), t.hide().animate(s, {
				duration: r,
				easing: o,
				complete: p,
				step: function(t, i) {
					i.now = Math.round(t), "height" !== i.prop ? l += i.now : "content" !== h.options.heightStyle && (i.now = Math.round(a - e.outerHeight() - l), l = 0)
				}
			}), undefined) : e.animate(i, r, o, p) : t.animate(s, r, o, p)
		},
		_toggleComplete: function(t) {
			var e = t.oldPanel;
			e.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"), e.length && (e.parent()[0].className = e.parent()[0].className), this._trigger("activate", null, t)
		}
	})
})(jQuery);
(function(t) {
	var e = 0;
	t.widget("ui.autocomplete", {
		version: "1.10.3",
		defaultElement: "<input>",
		options: {
			appendTo: null,
			autoFocus: !1,
			delay: 300,
			minLength: 1,
			position: {
				my: "left top",
				at: "left bottom",
				collision: "none"
			},
			source: null,
			change: null,
			close: null,
			focus: null,
			open: null,
			response: null,
			search: null,
			select: null
		},
		pending: 0,
		_create: function() {
			var e, i, s, n = this.element[0].nodeName.toLowerCase(),
				a = "textarea" === n,
				o = "input" === n;
			this.isMultiLine = a ? !0 : o ? !1 : this.element.prop("isContentEditable"), this.valueMethod = this.element[a || o ? "val" : "text"], this.isNewMenu = !0, this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off"), this._on(this.element, {
				keydown: function(n) {
					if (this.element.prop("readOnly")) return e = !0, s = !0, i = !0, undefined;
					e = !1, s = !1, i = !1;
					var a = t.ui.keyCode;
					switch (n.keyCode) {
						case a.PAGE_UP:
							e = !0, this._move("previousPage", n);
							break;
						case a.PAGE_DOWN:
							e = !0, this._move("nextPage", n);
							break;
						case a.UP:
							e = !0, this._keyEvent("previous", n);
							break;
						case a.DOWN:
							e = !0, this._keyEvent("next", n);
							break;
						case a.ENTER:
						case a.NUMPAD_ENTER:
							this.menu.active && (e = !0, n.preventDefault(), this.menu.select(n));
							break;
						case a.TAB:
							this.menu.active && this.menu.select(n);
							break;
						case a.ESCAPE:
							this.menu.element.is(":visible") && (this._value(this.term), this.close(n), n.preventDefault());
							break;
						default:
							i = !0, this._searchTimeout(n)
					}
				},
				keypress: function(s) {
					if (e) return e = !1, (!this.isMultiLine || this.menu.element.is(":visible")) && s.preventDefault(), undefined;
					if (!i) {
						var n = t.ui.keyCode;
						switch (s.keyCode) {
							case n.PAGE_UP:
								this._move("previousPage", s);
								break;
							case n.PAGE_DOWN:
								this._move("nextPage", s);
								break;
							case n.UP:
								this._keyEvent("previous", s);
								break;
							case n.DOWN:
								this._keyEvent("next", s)
						}
					}
				},
				input: function(t) {
					return s ? (s = !1, t.preventDefault(), undefined) : (this._searchTimeout(t), undefined)
				},
				focus: function() {
					this.selectedItem = null, this.previous = this._value()
				},
				blur: function(t) {
					return this.cancelBlur ? (delete this.cancelBlur, undefined) : (clearTimeout(this.searching), this.close(t), this._change(t), undefined)
				}
			}), this._initSource(), this.menu = t("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({
				role: null
			}).hide().data("ui-menu"), this._on(this.menu.element, {
				mousedown: function(e) {
					e.preventDefault(), this.cancelBlur = !0, this._delay(function() {
						delete this.cancelBlur
					});
					var i = this.menu.element[0];
					t(e.target).closest(".ui-menu-item").length || this._delay(function() {
						var e = this;
						this.document.one("mousedown", function(s) {
							s.target === e.element[0] || s.target === i || t.contains(i, s.target) || e.close()
						})
					})
				},
				menufocus: function(e, i) {
					if (this.isNewMenu && (this.isNewMenu = !1, e.originalEvent && /^mouse/.test(e.originalEvent.type))) return this.menu.blur(), this.document.one("mousemove", function() {
						t(e.target).trigger(e.originalEvent)
					}), undefined;
					var s = i.item.data("ui-autocomplete-item");
					!1 !== this._trigger("focus", e, {
						item: s
					}) ? e.originalEvent && /^key/.test(e.originalEvent.type) && this._value(s.value) : this.liveRegion.text(s.value)
				},
				menuselect: function(t, e) {
					var i = e.item.data("ui-autocomplete-item"),
						s = this.previous;
					this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = s, this._delay(function() {
						this.previous = s, this.selectedItem = i
					})), !1 !== this._trigger("select", t, {
						item: i
					}) && this._value(i.value), this.term = this._value(), this.close(t), this.selectedItem = i
				}
			}), this.liveRegion = t("<span>", {
				role: "status",
				"aria-live": "polite"
			}).addClass("ui-helper-hidden-accessible").insertBefore(this.element), this._on(this.window, {
				beforeunload: function() {
					this.element.removeAttr("autocomplete")
				}
			})
		},
		_destroy: function() {
			clearTimeout(this.searching), this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove()
		},
		_setOption: function(t, e) {
			this._super(t, e), "source" === t && this._initSource(), "appendTo" === t && this.menu.element.appendTo(this._appendTo()), "disabled" === t && e && this.xhr && this.xhr.abort()
		},
		_appendTo: function() {
			var e = this.options.appendTo;
			return e && (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)), e || (e = this.element.closest(".ui-front")), e.length || (e = this.document[0].body), e
		},
		_initSource: function() {
			var e, i, s = this;
			t.isArray(this.options.source) ? (e = this.options.source, this.source = function(i, s) {
				s(t.ui.autocomplete.filter(e, i.term))
			}) : "string" == typeof this.options.source ? (i = this.options.source, this.source = function(e, n) {
				s.xhr && s.xhr.abort(), s.xhr = t.ajax({
					url: i,
					data: e,
					dataType: "json",
					success: function(t) {
						n(t)
					},
					error: function() {
						n([])
					}
				})
			}) : this.source = this.options.source
		},
		_searchTimeout: function(t) {
			clearTimeout(this.searching), this.searching = this._delay(function() {
				this.term !== this._value() && (this.selectedItem = null, this.search(null, t))
			}, this.options.delay)
		},
		search: function(t, e) {
			return t = null != t ? t : this._value(), this.term = this._value(), t.length < this.options.minLength ? this.close(e) : this._trigger("search", e) !== !1 ? this._search(t) : undefined
		},
		_search: function(t) {
			this.pending++, this.element.addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({
				term: t
			}, this._response())
		},
		_response: function() {
			var t = this,
				i = ++e;
			return function(s) {
				i === e && t.__response(s), t.pending--, t.pending || t.element.removeClass("ui-autocomplete-loading")
			}
		},
		__response: function(t) {
			t && (t = this._normalize(t)), this._trigger("response", null, {
				content: t
			}), !this.options.disabled && t && t.length && !this.cancelSearch ? (this._suggest(t), this._trigger("open")) : this._close()
		},
		close: function(t) {
			this.cancelSearch = !0, this._close(t)
		},
		_close: function(t) {
			this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", t))
		},
		_change: function(t) {
			this.previous !== this._value() && this._trigger("change", t, {
				item: this.selectedItem
			})
		},
		_normalize: function(e) {
			return e.length && e[0].label && e[0].value ? e : t.map(e, function(e) {
				return "string" == typeof e ? {
					label: e,
					value: e
				} : t.extend({
					label: e.label || e.value,
					value: e.value || e.label
				}, e)
			})
		},
		_suggest: function(e) {
			var i = this.menu.element.empty();
			this._renderMenu(i, e), this.isNewMenu = !0, this.menu.refresh(), i.show(), this._resizeMenu(), i.position(t.extend({
				of: this.element
			}, this.options.position)), this.options.autoFocus && this.menu.next()
		},
		_resizeMenu: function() {
			var t = this.menu.element;
			t.outerWidth(Math.max(t.width("").outerWidth() + 1, this.element.outerWidth()))
		},
		_renderMenu: function(e, i) {
			var s = this;
			t.each(i, function(t, i) {
				s._renderItemData(e, i)
			})
		},
		_renderItemData: function(t, e) {
			return this._renderItem(t, e).data("ui-autocomplete-item", e)
		},
		_renderItem: function(e, i) {
			return t("<li>").append(t("<a>").text(i.label)).appendTo(e)
		},
		_move: function(t, e) {
			return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(t) || this.menu.isLastItem() && /^next/.test(t) ? (this._value(this.term), this.menu.blur(), undefined) : (this.menu[t](e), undefined) : (this.search(null, e), undefined)
		},
		widget: function() {
			return this.menu.element
		},
		_value: function() {
			return this.valueMethod.apply(this.element, arguments)
		},
		_keyEvent: function(t, e) {
			(!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(t, e), e.preventDefault())
		}
	}), t.extend(t.ui.autocomplete, {
		escapeRegex: function(t) {
			return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
		},
		filter: function(e, i) {
			var s = RegExp(t.ui.autocomplete.escapeRegex(i), "i");
			return t.grep(e, function(t) {
				return s.test(t.label || t.value || t)
			})
		}
	}), t.widget("ui.autocomplete", t.ui.autocomplete, {
		options: {
			messages: {
				noResults: "No search results.",
				results: function(t) {
					return t + (t > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
				}
			}
		},
		__response: function(t) {
			var e;
			this._superApply(arguments), this.options.disabled || this.cancelSearch || (e = t && t.length ? this.options.messages.results(t.length) : this.options.messages.noResults, this.liveRegion.text(e))
		}
	})
})(jQuery);
(function(t) {
	var e, i, s, n, a = "ui-button ui-widget ui-state-default ui-corner-all",
		o = "ui-state-hover ui-state-active ",
		r = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",
		h = function() {
			var e = t(this);
			setTimeout(function() {
				e.find(":ui-button").button("refresh")
			}, 1)
		},
		l = function(e) {
			var i = e.name,
				s = e.form,
				n = t([]);
			return i && (i = i.replace(/'/g, "\\'"), n = s ? t(s).find("[name='" + i + "']") : t("[name='" + i + "']", e.ownerDocument).filter(function() {
				return !this.form
			})), n
		};
	t.widget("ui.button", {
		version: "1.10.3",
		defaultElement: "<button>",
		options: {
			disabled: null,
			text: !0,
			label: null,
			icons: {
				primary: null,
				secondary: null
			}
		},
		_create: function() {
			this.element.closest("form").unbind("reset" + this.eventNamespace).bind("reset" + this.eventNamespace, h), "boolean" != typeof this.options.disabled ? this.options.disabled = !!this.element.prop("disabled") : this.element.prop("disabled", this.options.disabled), this._determineButtonType(), this.hasTitle = !!this.buttonElement.attr("title");
			var o = this,
				r = this.options,
				c = "checkbox" === this.type || "radio" === this.type,
				u = c ? "" : "ui-state-active",
				d = "ui-state-focus";
			null === r.label && (r.label = "input" === this.type ? this.buttonElement.val() : this.buttonElement.html()), this._hoverable(this.buttonElement), this.buttonElement.addClass(a).attr("role", "button").bind("mouseenter" + this.eventNamespace, function() {
				r.disabled || this === e && t(this).addClass("ui-state-active")
			}).bind("mouseleave" + this.eventNamespace, function() {
				r.disabled || t(this).removeClass(u)
			}).bind("click" + this.eventNamespace, function(t) {
				r.disabled && (t.preventDefault(), t.stopImmediatePropagation())
			}), this.element.bind("focus" + this.eventNamespace, function() {
				o.buttonElement.addClass(d)
			}).bind("blur" + this.eventNamespace, function() {
				o.buttonElement.removeClass(d)
			}), c && (this.element.bind("change" + this.eventNamespace, function() {
				n || o.refresh()
			}), this.buttonElement.bind("mousedown" + this.eventNamespace, function(t) {
				r.disabled || (n = !1, i = t.pageX, s = t.pageY)
			}).bind("mouseup" + this.eventNamespace, function(t) {
				r.disabled || (i !== t.pageX || s !== t.pageY) && (n = !0)
			})), "checkbox" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function() {
				return r.disabled || n ? !1 : undefined
			}) : "radio" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function() {
				if (r.disabled || n) return !1;
				t(this).addClass("ui-state-active"), o.buttonElement.attr("aria-pressed", "true");
				var e = o.element[0];
				l(e).not(e).map(function() {
					return t(this).button("widget")[0]
				}).removeClass("ui-state-active").attr("aria-pressed", "false")
			}) : (this.buttonElement.bind("mousedown" + this.eventNamespace, function() {
				return r.disabled ? !1 : (t(this).addClass("ui-state-active"), e = this, o.document.one("mouseup", function() {
					e = null
				}), undefined)
			}).bind("mouseup" + this.eventNamespace, function() {
				return r.disabled ? !1 : (t(this).removeClass("ui-state-active"), undefined)
			}).bind("keydown" + this.eventNamespace, function(e) {
				return r.disabled ? !1 : ((e.keyCode === t.ui.keyCode.SPACE || e.keyCode === t.ui.keyCode.ENTER) && t(this).addClass("ui-state-active"), undefined)
			}).bind("keyup" + this.eventNamespace + " blur" + this.eventNamespace, function() {
				t(this).removeClass("ui-state-active")
			}), this.buttonElement.is("a") && this.buttonElement.keyup(function(e) {
				e.keyCode === t.ui.keyCode.SPACE && t(this).click()
			})), this._setOption("disabled", r.disabled), this._resetButton()
		},
		_determineButtonType: function() {
			var t, e, i;
			this.type = this.element.is("[type=checkbox]") ? "checkbox" : this.element.is("[type=radio]") ? "radio" : this.element.is("input") ? "input" : "button", "checkbox" === this.type || "radio" === this.type ? (t = this.element.parents().last(), e = "label[for='" + this.element.attr("id") + "']", this.buttonElement = t.find(e), this.buttonElement.length || (t = t.length ? t.siblings() : this.element.siblings(), this.buttonElement = t.filter(e), this.buttonElement.length || (this.buttonElement = t.find(e))), this.element.addClass("ui-helper-hidden-accessible"), i = this.element.is(":checked"), i && this.buttonElement.addClass("ui-state-active"), this.buttonElement.prop("aria-pressed", i)) : this.buttonElement = this.element
		},
		widget: function() {
			return this.buttonElement
		},
		_destroy: function() {
			this.element.removeClass("ui-helper-hidden-accessible"), this.buttonElement.removeClass(a + " " + o + " " + r).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()), this.hasTitle || this.buttonElement.removeAttr("title")
		},
		_setOption: function(t, e) {
			return this._super(t, e), "disabled" === t ? (e ? this.element.prop("disabled", !0) : this.element.prop("disabled", !1), undefined) : (this._resetButton(), undefined)
		},
		refresh: function() {
			var e = this.element.is("input, button") ? this.element.is(":disabled") : this.element.hasClass("ui-button-disabled");
			e !== this.options.disabled && this._setOption("disabled", e), "radio" === this.type ? l(this.element[0]).each(function() {
				t(this).is(":checked") ? t(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true") : t(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false")
			}) : "checkbox" === this.type && (this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true") : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false"))
		},
		_resetButton: function() {
			if ("input" === this.type) return this.options.label && this.element.val(this.options.label), undefined;
			var e = this.buttonElement.removeClass(r),
				i = t("<span></span>", this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(e.empty()).text(),
				s = this.options.icons,
				n = s.primary && s.secondary,
				a = [];
			s.primary || s.secondary ? (this.options.text && a.push("ui-button-text-icon" + (n ? "s" : s.primary ? "-primary" : "-secondary")), s.primary && e.prepend("<span class='ui-button-icon-primary ui-icon " + s.primary + "'></span>"), s.secondary && e.append("<span class='ui-button-icon-secondary ui-icon " + s.secondary + "'></span>"), this.options.text || (a.push(n ? "ui-button-icons-only" : "ui-button-icon-only"), this.hasTitle || e.attr("title", t.trim(i)))) : a.push("ui-button-text-only"), e.addClass(a.join(" "))
		}
	}), t.widget("ui.buttonset", {
		version: "1.10.3",
		options: {
			items: "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"
		},
		_create: function() {
			this.element.addClass("ui-buttonset")
		},
		_init: function() {
			this.refresh()
		},
		_setOption: function(t, e) {
			"disabled" === t && this.buttons.button("option", t, e), this._super(t, e)
		},
		refresh: function() {
			var e = "rtl" === this.element.css("direction");
			this.buttons = this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function() {
				return t(this).button("widget")[0]
			}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(e ? "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(e ? "ui-corner-left" : "ui-corner-right").end().end()
		},
		_destroy: function() {
			this.element.removeClass("ui-buttonset"), this.buttons.map(function() {
				return t(this).button("widget")[0]
			}).removeClass("ui-corner-left ui-corner-right").end().button("destroy")
		}
	})
})(jQuery);
(function(t, e) {
	function i() {
		this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
			closeText: "Done",
			prevText: "Prev",
			nextText: "Next",
			currentText: "Today",
			monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
			monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
			dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
			dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
			dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
			weekHeader: "Wk",
			dateFormat: "mm/dd/yy",
			firstDay: 0,
			isRTL: !1,
			showMonthAfterYear: !1,
			yearSuffix: ""
		}, this._defaults = {
			showOn: "focus",
			showAnim: "fadeIn",
			showOptions: {},
			defaultDate: null,
			appendText: "",
			buttonText: "...",
			buttonImage: "",
			buttonImageOnly: !1,
			hideIfNoPrevNext: !1,
			navigationAsDateFormat: !1,
			gotoCurrent: !1,
			changeMonth: !1,
			changeYear: !1,
			yearRange: "c-10:c+10",
			showOtherMonths: !1,
			selectOtherMonths: !1,
			showWeek: !1,
			calculateWeek: this.iso8601Week,
			shortYearCutoff: "+10",
			minDate: null,
			maxDate: null,
			duration: "fast",
			beforeShowDay: null,
			beforeShow: null,
			onSelect: null,
			onChangeMonthYear: null,
			onClose: null,
			numberOfMonths: 1,
			showCurrentAtPos: 0,
			stepMonths: 1,
			stepBigMonths: 12,
			altField: "",
			altFormat: "",
			constrainInput: !0,
			showButtonPanel: !1,
			autoSize: !1,
			disabled: !1
		}, t.extend(this._defaults, this.regional[""]), this.dpDiv = s(t("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
	}

	function s(e) {
		var i = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
		return e.delegate(i, "mouseout", function() {
			t(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && t(this).removeClass("ui-datepicker-next-hover")
		}).delegate(i, "mouseover", function() {
			t.datepicker._isDisabledDatepicker(a.inline ? e.parent()[0] : a.input[0]) || (t(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), t(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && t(this).addClass("ui-datepicker-next-hover"))
		})
	}

	function n(e, i) {
		t.extend(e, i);
		for (var s in i) null == i[s] && (e[s] = i[s]);
		return e
	}
	t.extend(t.ui, {
		datepicker: {
			version: "1.10.3"
		}
	});
	var a, r = "datepicker";
	t.extend(i.prototype, {
		markerClassName: "hasDatepicker",
		maxRows: 4,
		_widgetDatepicker: function() {
			return this.dpDiv
		},
		setDefaults: function(t) {
			return n(this._defaults, t || {}), this
		},
		_attachDatepicker: function(e, i) {
			var s, n, a;
			s = e.nodeName.toLowerCase(), n = "div" === s || "span" === s, e.id || (this.uuid += 1, e.id = "dp" + this.uuid), a = this._newInst(t(e), n), a.settings = t.extend({}, i || {}), "input" === s ? this._connectDatepicker(e, a) : n && this._inlineDatepicker(e, a)
		},
		_newInst: function(e, i) {
			var n = e[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
			return {
				id: n,
				input: e,
				selectedDay: 0,
				selectedMonth: 0,
				selectedYear: 0,
				drawMonth: 0,
				drawYear: 0,
				inline: i,
				dpDiv: i ? s(t("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
			}
		},
		_connectDatepicker: function(e, i) {
			var s = t(e);
			i.append = t([]), i.trigger = t([]), s.hasClass(this.markerClassName) || (this._attachments(s, i), s.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp), this._autoSize(i), t.data(e, r, i), i.settings.disabled && this._disableDatepicker(e))
		},
		_attachments: function(e, i) {
			var s, n, a, r = this._get(i, "appendText"),
				o = this._get(i, "isRTL");
			i.append && i.append.remove(), r && (i.append = t("<span class='" + this._appendClass + "'>" + r + "</span>"), e[o ? "before" : "after"](i.append)), e.unbind("focus", this._showDatepicker), i.trigger && i.trigger.remove(), s = this._get(i, "showOn"), ("focus" === s || "both" === s) && e.focus(this._showDatepicker), ("button" === s || "both" === s) && (n = this._get(i, "buttonText"), a = this._get(i, "buttonImage"), i.trigger = t(this._get(i, "buttonImageOnly") ? t("<img/>").addClass(this._triggerClass).attr({
				src: a,
				alt: n,
				title: n
			}) : t("<button type='button'></button>").addClass(this._triggerClass).html(a ? t("<img/>").attr({
				src: a,
				alt: n,
				title: n
			}) : n)), e[o ? "before" : "after"](i.trigger), i.trigger.click(function() {
				return t.datepicker._datepickerShowing && t.datepicker._lastInput === e[0] ? t.datepicker._hideDatepicker() : t.datepicker._datepickerShowing && t.datepicker._lastInput !== e[0] ? (t.datepicker._hideDatepicker(), t.datepicker._showDatepicker(e[0])) : t.datepicker._showDatepicker(e[0]), !1
			}))
		},
		_autoSize: function(t) {
			if (this._get(t, "autoSize") && !t.inline) {
				var e, i, s, n, a = new Date(2009, 11, 20),
					r = this._get(t, "dateFormat");
				r.match(/[DM]/) && (e = function(t) {
					for (i = 0, s = 0, n = 0; t.length > n; n++) t[n].length > i && (i = t[n].length, s = n);
					return s
				}, a.setMonth(e(this._get(t, r.match(/MM/) ? "monthNames" : "monthNamesShort"))), a.setDate(e(this._get(t, r.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - a.getDay())), t.input.attr("size", this._formatDate(t, a).length)
			}
		},
		_inlineDatepicker: function(e, i) {
			var s = t(e);
			s.hasClass(this.markerClassName) || (s.addClass(this.markerClassName).append(i.dpDiv), t.data(e, r, i), this._setDate(i, this._getDefaultDate(i), !0), this._updateDatepicker(i), this._updateAlternate(i), i.settings.disabled && this._disableDatepicker(e), i.dpDiv.css("display", "block"))
		},
		_dialogDatepicker: function(e, i, s, a, o) {
			var h, l, c, u, d, p = this._dialogInst;
			return p || (this.uuid += 1, h = "dp" + this.uuid, this._dialogInput = t("<input type='text' id='" + h + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.keydown(this._doKeyDown), t("body").append(this._dialogInput), p = this._dialogInst = this._newInst(this._dialogInput, !1), p.settings = {}, t.data(this._dialogInput[0], r, p)), n(p.settings, a || {}), i = i && i.constructor === Date ? this._formatDate(p, i) : i, this._dialogInput.val(i), this._pos = o ? o.length ? o : [o.pageX, o.pageY] : null, this._pos || (l = document.documentElement.clientWidth, c = document.documentElement.clientHeight, u = document.documentElement.scrollLeft || document.body.scrollLeft, d = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [l / 2 - 100 + u, c / 2 - 150 + d]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), p.settings.onSelect = s, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), t.blockUI && t.blockUI(this.dpDiv), t.data(this._dialogInput[0], r, p), this
		},
		_destroyDatepicker: function(e) {
			var i, s = t(e),
				n = t.data(e, r);
			s.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), t.removeData(e, r), "input" === i ? (n.append.remove(), n.trigger.remove(), s.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : ("div" === i || "span" === i) && s.removeClass(this.markerClassName).empty())
		},
		_enableDatepicker: function(e) {
			var i, s, n = t(e),
				a = t.data(e, r);
			n.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), "input" === i ? (e.disabled = !1, a.trigger.filter("button").each(function() {
				this.disabled = !1
			}).end().filter("img").css({
				opacity: "1.0",
				cursor: ""
			})) : ("div" === i || "span" === i) && (s = n.children("." + this._inlineClass), s.children().removeClass("ui-state-disabled"), s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = t.map(this._disabledInputs, function(t) {
				return t === e ? null : t
			}))
		},
		_disableDatepicker: function(e) {
			var i, s, n = t(e),
				a = t.data(e, r);
			n.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), "input" === i ? (e.disabled = !0, a.trigger.filter("button").each(function() {
				this.disabled = !0
			}).end().filter("img").css({
				opacity: "0.5",
				cursor: "default"
			})) : ("div" === i || "span" === i) && (s = n.children("." + this._inlineClass), s.children().addClass("ui-state-disabled"), s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = t.map(this._disabledInputs, function(t) {
				return t === e ? null : t
			}), this._disabledInputs[this._disabledInputs.length] = e)
		},
		_isDisabledDatepicker: function(t) {
			if (!t) return !1;
			for (var e = 0; this._disabledInputs.length > e; e++)
				if (this._disabledInputs[e] === t) return !0;
			return !1
		},
		_getInst: function(e) {
			try {
				return t.data(e, r)
			} catch (i) {
				throw "Missing instance data for this datepicker"
			}
		},
		_optionDatepicker: function(i, s, a) {
			var r, o, h, l, c = this._getInst(i);
			return 2 === arguments.length && "string" == typeof s ? "defaults" === s ? t.extend({}, t.datepicker._defaults) : c ? "all" === s ? t.extend({}, c.settings) : this._get(c, s) : null : (r = s || {}, "string" == typeof s && (r = {}, r[s] = a), c && (this._curInst === c && this._hideDatepicker(), o = this._getDateDatepicker(i, !0), h = this._getMinMaxDate(c, "min"), l = this._getMinMaxDate(c, "max"), n(c.settings, r), null !== h && r.dateFormat !== e && r.minDate === e && (c.settings.minDate = this._formatDate(c, h)), null !== l && r.dateFormat !== e && r.maxDate === e && (c.settings.maxDate = this._formatDate(c, l)), "disabled" in r && (r.disabled ? this._disableDatepicker(i) : this._enableDatepicker(i)), this._attachments(t(i), c), this._autoSize(c), this._setDate(c, o), this._updateAlternate(c), this._updateDatepicker(c)), e)
		},
		_changeDatepicker: function(t, e, i) {
			this._optionDatepicker(t, e, i)
		},
		_refreshDatepicker: function(t) {
			var e = this._getInst(t);
			e && this._updateDatepicker(e)
		},
		_setDateDatepicker: function(t, e) {
			var i = this._getInst(t);
			i && (this._setDate(i, e), this._updateDatepicker(i), this._updateAlternate(i))
		},
		_getDateDatepicker: function(t, e) {
			var i = this._getInst(t);
			return i && !i.inline && this._setDateFromField(i, e), i ? this._getDate(i) : null
		},
		_doKeyDown: function(e) {
			var i, s, n, a = t.datepicker._getInst(e.target),
				r = !0,
				o = a.dpDiv.is(".ui-datepicker-rtl");
			if (a._keyEvent = !0, t.datepicker._datepickerShowing) switch (e.keyCode) {
				case 9:
					t.datepicker._hideDatepicker(), r = !1;
					break;
				case 13:
					return n = t("td." + t.datepicker._dayOverClass + ":not(." + t.datepicker._currentClass + ")", a.dpDiv), n[0] && t.datepicker._selectDay(e.target, a.selectedMonth, a.selectedYear, n[0]), i = t.datepicker._get(a, "onSelect"), i ? (s = t.datepicker._formatDate(a), i.apply(a.input ? a.input[0] : null, [s, a])) : t.datepicker._hideDatepicker(), !1;
				case 27:
					t.datepicker._hideDatepicker();
					break;
				case 33:
					t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(a, "stepBigMonths") : -t.datepicker._get(a, "stepMonths"), "M");
					break;
				case 34:
					t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(a, "stepBigMonths") : +t.datepicker._get(a, "stepMonths"), "M");
					break;
				case 35:
					(e.ctrlKey || e.metaKey) && t.datepicker._clearDate(e.target), r = e.ctrlKey || e.metaKey;
					break;
				case 36:
					(e.ctrlKey || e.metaKey) && t.datepicker._gotoToday(e.target), r = e.ctrlKey || e.metaKey;
					break;
				case 37:
					(e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, o ? 1 : -1, "D"), r = e.ctrlKey || e.metaKey, e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(a, "stepBigMonths") : -t.datepicker._get(a, "stepMonths"), "M");
					break;
				case 38:
					(e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, -7, "D"), r = e.ctrlKey || e.metaKey;
					break;
				case 39:
					(e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, o ? -1 : 1, "D"), r = e.ctrlKey || e.metaKey, e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(a, "stepBigMonths") : +t.datepicker._get(a, "stepMonths"), "M");
					break;
				case 40:
					(e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, 7, "D"), r = e.ctrlKey || e.metaKey;
					break;
				default:
					r = !1
			} else 36 === e.keyCode && e.ctrlKey ? t.datepicker._showDatepicker(this) : r = !1;
			r && (e.preventDefault(), e.stopPropagation())
		},
		_doKeyPress: function(i) {
			var s, n, a = t.datepicker._getInst(i.target);
			return t.datepicker._get(a, "constrainInput") ? (s = t.datepicker._possibleChars(t.datepicker._get(a, "dateFormat")), n = String.fromCharCode(null == i.charCode ? i.keyCode : i.charCode), i.ctrlKey || i.metaKey || " " > n || !s || s.indexOf(n) > -1) : e
		},
		_doKeyUp: function(e) {
			var i, s = t.datepicker._getInst(e.target);
			if (s.input.val() !== s.lastVal) try {
				i = t.datepicker.parseDate(t.datepicker._get(s, "dateFormat"), s.input ? s.input.val() : null, t.datepicker._getFormatConfig(s)), i && (t.datepicker._setDateFromField(s), t.datepicker._updateAlternate(s), t.datepicker._updateDatepicker(s))
			} catch (n) {}
			return !0
		},
		_showDatepicker: function(e) {
			if (e = e.target || e, "input" !== e.nodeName.toLowerCase() && (e = t("input", e.parentNode)[0]), !t.datepicker._isDisabledDatepicker(e) && t.datepicker._lastInput !== e) {
				var i, s, a, r, o, h, l;
				i = t.datepicker._getInst(e), t.datepicker._curInst && t.datepicker._curInst !== i && (t.datepicker._curInst.dpDiv.stop(!0, !0), i && t.datepicker._datepickerShowing && t.datepicker._hideDatepicker(t.datepicker._curInst.input[0])), s = t.datepicker._get(i, "beforeShow"), a = s ? s.apply(e, [e, i]) : {}, a !== !1 && (n(i.settings, a), i.lastVal = null, t.datepicker._lastInput = e, t.datepicker._setDateFromField(i), t.datepicker._inDialog && (e.value = ""), t.datepicker._pos || (t.datepicker._pos = t.datepicker._findPos(e), t.datepicker._pos[1] += e.offsetHeight), r = !1, t(e).parents().each(function() {
					return r |= "fixed" === t(this).css("position"), !r
				}), o = {
					left: t.datepicker._pos[0],
					top: t.datepicker._pos[1]
				}, t.datepicker._pos = null, i.dpDiv.empty(), i.dpDiv.css({
					position: "absolute",
					display: "block",
					top: "-1000px"
				}), t.datepicker._updateDatepicker(i), o = t.datepicker._checkOffset(i, o, r), i.dpDiv.css({
					position: t.datepicker._inDialog && t.blockUI ? "static" : r ? "fixed" : "absolute",
					display: "none",
					left: o.left + "px",
					top: o.top + "px"
				}), i.inline || (h = t.datepicker._get(i, "showAnim"), l = t.datepicker._get(i, "duration"), i.dpDiv.zIndex(t(e).zIndex() + 1), t.datepicker._datepickerShowing = !0, t.effects && t.effects.effect[h] ? i.dpDiv.show(h, t.datepicker._get(i, "showOptions"), l) : i.dpDiv[h || "show"](h ? l : null), t.datepicker._shouldFocusInput(i) && i.input.focus(), t.datepicker._curInst = i))
			}
		},
		_updateDatepicker: function(e) {
			this.maxRows = 4, a = e, e.dpDiv.empty().append(this._generateHTML(e)), this._attachHandlers(e), e.dpDiv.find("." + this._dayOverClass + " a").mouseover();
			var i, s = this._getNumberOfMonths(e),
				n = s[1],
				r = 17;
			e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), n > 1 && e.dpDiv.addClass("ui-datepicker-multi-" + n).css("width", r * n + "em"), e.dpDiv[(1 !== s[0] || 1 !== s[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), e.dpDiv[(this._get(e, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), e === t.datepicker._curInst && t.datepicker._datepickerShowing && t.datepicker._shouldFocusInput(e) && e.input.focus(), e.yearshtml && (i = e.yearshtml, setTimeout(function() {
				i === e.yearshtml && e.yearshtml && e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml), i = e.yearshtml = null
			}, 0))
		},
		_shouldFocusInput: function(t) {
			return t.input && t.input.is(":visible") && !t.input.is(":disabled") && !t.input.is(":focus")
		},
		_checkOffset: function(e, i, s) {
			var n = e.dpDiv.outerWidth(),
				a = e.dpDiv.outerHeight(),
				r = e.input ? e.input.outerWidth() : 0,
				o = e.input ? e.input.outerHeight() : 0,
				h = document.documentElement.clientWidth + (s ? 0 : t(document).scrollLeft()),
				l = document.documentElement.clientHeight + (s ? 0 : t(document).scrollTop());
			return i.left -= this._get(e, "isRTL") ? n - r : 0, i.left -= s && i.left === e.input.offset().left ? t(document).scrollLeft() : 0, i.top -= s && i.top === e.input.offset().top + o ? t(document).scrollTop() : 0, i.left -= Math.min(i.left, i.left + n > h && h > n ? Math.abs(i.left + n - h) : 0), i.top -= Math.min(i.top, i.top + a > l && l > a ? Math.abs(a + o) : 0), i
		},
		_findPos: function(e) {
			for (var i, s = this._getInst(e), n = this._get(s, "isRTL"); e && ("hidden" === e.type || 1 !== e.nodeType || t.expr.filters.hidden(e));) e = e[n ? "previousSibling" : "nextSibling"];
			return i = t(e).offset(), [i.left, i.top]
		},
		_hideDatepicker: function(e) {
			var i, s, n, a, o = this._curInst;
			!o || e && o !== t.data(e, r) || this._datepickerShowing && (i = this._get(o, "showAnim"), s = this._get(o, "duration"), n = function() {
				t.datepicker._tidyDialog(o)
			}, t.effects && (t.effects.effect[i] || t.effects[i]) ? o.dpDiv.hide(i, t.datepicker._get(o, "showOptions"), s, n) : o.dpDiv["slideDown" === i ? "slideUp" : "fadeIn" === i ? "fadeOut" : "hide"](i ? s : null, n), i || n(), this._datepickerShowing = !1, a = this._get(o, "onClose"), a && a.apply(o.input ? o.input[0] : null, [o.input ? o.input.val() : "", o]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
				position: "absolute",
				left: "0",
				top: "-100px"
			}), t.blockUI && (t.unblockUI(), t("body").append(this.dpDiv))), this._inDialog = !1)
		},
		_tidyDialog: function(t) {
			t.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
		},
		_checkExternalClick: function(e) {
			if (t.datepicker._curInst) {
				var i = t(e.target),
					s = t.datepicker._getInst(i[0]);
				(i[0].id !== t.datepicker._mainDivId && 0 === i.parents("#" + t.datepicker._mainDivId).length && !i.hasClass(t.datepicker.markerClassName) && !i.closest("." + t.datepicker._triggerClass).length && t.datepicker._datepickerShowing && (!t.datepicker._inDialog || !t.blockUI) || i.hasClass(t.datepicker.markerClassName) && t.datepicker._curInst !== s) && t.datepicker._hideDatepicker()
			}
		},
		_adjustDate: function(e, i, s) {
			var n = t(e),
				a = this._getInst(n[0]);
			this._isDisabledDatepicker(n[0]) || (this._adjustInstDate(a, i + ("M" === s ? this._get(a, "showCurrentAtPos") : 0), s), this._updateDatepicker(a))
		},
		_gotoToday: function(e) {
			var i, s = t(e),
				n = this._getInst(s[0]);
			this._get(n, "gotoCurrent") && n.currentDay ? (n.selectedDay = n.currentDay, n.drawMonth = n.selectedMonth = n.currentMonth, n.drawYear = n.selectedYear = n.currentYear) : (i = new Date, n.selectedDay = i.getDate(), n.drawMonth = n.selectedMonth = i.getMonth(), n.drawYear = n.selectedYear = i.getFullYear()), this._notifyChange(n), this._adjustDate(s)
		},
		_selectMonthYear: function(e, i, s) {
			var n = t(e),
				a = this._getInst(n[0]);
			a["selected" + ("M" === s ? "Month" : "Year")] = a["draw" + ("M" === s ? "Month" : "Year")] = parseInt(i.options[i.selectedIndex].value, 10), this._notifyChange(a), this._adjustDate(n)
		},
		_selectDay: function(e, i, s, n) {
			var a, r = t(e);
			t(n).hasClass(this._unselectableClass) || this._isDisabledDatepicker(r[0]) || (a = this._getInst(r[0]), a.selectedDay = a.currentDay = t("a", n).html(), a.selectedMonth = a.currentMonth = i, a.selectedYear = a.currentYear = s, this._selectDate(e, this._formatDate(a, a.currentDay, a.currentMonth, a.currentYear)))
		},
		_clearDate: function(e) {
			var i = t(e);
			this._selectDate(i, "")
		},
		_selectDate: function(e, i) {
			var s, n = t(e),
				a = this._getInst(n[0]);
			i = null != i ? i : this._formatDate(a), a.input && a.input.val(i), this._updateAlternate(a), s = this._get(a, "onSelect"), s ? s.apply(a.input ? a.input[0] : null, [i, a]) : a.input && a.input.trigger("change"), a.inline ? this._updateDatepicker(a) : (this._hideDatepicker(), this._lastInput = a.input[0], "object" != typeof a.input[0] && a.input.focus(), this._lastInput = null)
		},
		_updateAlternate: function(e) {
			var i, s, n, a = this._get(e, "altField");
			a && (i = this._get(e, "altFormat") || this._get(e, "dateFormat"), s = this._getDate(e), n = this.formatDate(i, s, this._getFormatConfig(e)), t(a).each(function() {
				t(this).val(n)
			}))
		},
		noWeekends: function(t) {
			var e = t.getDay();
			return [e > 0 && 6 > e, ""]
		},
		iso8601Week: function(t) {
			var e, i = new Date(t.getTime());
			return i.setDate(i.getDate() + 4 - (i.getDay() || 7)), e = i.getTime(), i.setMonth(0), i.setDate(1), Math.floor(Math.round((e - i) / 864e5) / 7) + 1
		},
		parseDate: function(i, s, n) {
			if (null == i || null == s) throw "Invalid arguments";
			if (s = "object" == typeof s ? "" + s : s + "", "" === s) return null;
			var a, r, o, h, l = 0,
				c = (n ? n.shortYearCutoff : null) || this._defaults.shortYearCutoff,
				u = "string" != typeof c ? c : (new Date).getFullYear() % 100 + parseInt(c, 10),
				d = (n ? n.dayNamesShort : null) || this._defaults.dayNamesShort,
				p = (n ? n.dayNames : null) || this._defaults.dayNames,
				f = (n ? n.monthNamesShort : null) || this._defaults.monthNamesShort,
				m = (n ? n.monthNames : null) || this._defaults.monthNames,
				g = -1,
				v = -1,
				_ = -1,
				b = -1,
				y = !1,
				x = function(t) {
					var e = i.length > a + 1 && i.charAt(a + 1) === t;
					return e && a++, e
				},
				k = function(t) {
					var e = x(t),
						i = "@" === t ? 14 : "!" === t ? 20 : "y" === t && e ? 4 : "o" === t ? 3 : 2,
						n = RegExp("^\\d{1," + i + "}"),
						a = s.substring(l).match(n);
					if (!a) throw "Missing number at position " + l;
					return l += a[0].length, parseInt(a[0], 10)
				},
				w = function(i, n, a) {
					var r = -1,
						o = t.map(x(i) ? a : n, function(t, e) {
							return [
								[e, t]
							]
						}).sort(function(t, e) {
							return -(t[1].length - e[1].length)
						});
					if (t.each(o, function(t, i) {
							var n = i[1];
							return s.substr(l, n.length).toLowerCase() === n.toLowerCase() ? (r = i[0], l += n.length, !1) : e
						}), -1 !== r) return r + 1;
					throw "Unknown name at position " + l
				},
				D = function() {
					if (s.charAt(l) !== i.charAt(a)) throw "Unexpected literal at position " + l;
					l++
				};
			for (a = 0; i.length > a; a++)
				if (y) "'" !== i.charAt(a) || x("'") ? D() : y = !1;
				else switch (i.charAt(a)) {
					case "d":
						_ = k("d");
						break;
					case "D":
						w("D", d, p);
						break;
					case "o":
						b = k("o");
						break;
					case "m":
						v = k("m");
						break;
					case "M":
						v = w("M", f, m);
						break;
					case "y":
						g = k("y");
						break;
					case "@":
						h = new Date(k("@")), g = h.getFullYear(), v = h.getMonth() + 1, _ = h.getDate();
						break;
					case "!":
						h = new Date((k("!") - this._ticksTo1970) / 1e4), g = h.getFullYear(), v = h.getMonth() + 1, _ = h.getDate();
						break;
					case "'":
						x("'") ? D() : y = !0;
						break;
					default:
						D()
				}
				if (s.length > l && (o = s.substr(l), !/^\s+/.test(o))) throw "Extra/unparsed characters found in date: " + o;
			if (-1 === g ? g = (new Date).getFullYear() : 100 > g && (g += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (u >= g ? 0 : -100)), b > -1)
				for (v = 1, _ = b;;) {
					if (r = this._getDaysInMonth(g, v - 1), r >= _) break;
					v++, _ -= r
				}
			if (h = this._daylightSavingAdjust(new Date(g, v - 1, _)), h.getFullYear() !== g || h.getMonth() + 1 !== v || h.getDate() !== _) throw "Invalid date";
			return h
		},
		ATOM: "yy-mm-dd",
		COOKIE: "D, dd M yy",
		ISO_8601: "yy-mm-dd",
		RFC_822: "D, d M y",
		RFC_850: "DD, dd-M-y",
		RFC_1036: "D, d M y",
		RFC_1123: "D, d M yy",
		RFC_2822: "D, d M yy",
		RSS: "D, d M y",
		TICKS: "!",
		TIMESTAMP: "@",
		W3C: "yy-mm-dd",
		_ticksTo1970: 1e7 * 60 * 60 * 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)),
		formatDate: function(t, e, i) {
			if (!e) return "";
			var s, n = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
				a = (i ? i.dayNames : null) || this._defaults.dayNames,
				r = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
				o = (i ? i.monthNames : null) || this._defaults.monthNames,
				h = function(e) {
					var i = t.length > s + 1 && t.charAt(s + 1) === e;
					return i && s++, i
				},
				l = function(t, e, i) {
					var s = "" + e;
					if (h(t))
						for (; i > s.length;) s = "0" + s;
					return s
				},
				c = function(t, e, i, s) {
					return h(t) ? s[e] : i[e]
				},
				u = "",
				d = !1;
			if (e)
				for (s = 0; t.length > s; s++)
					if (d) "'" !== t.charAt(s) || h("'") ? u += t.charAt(s) : d = !1;
					else switch (t.charAt(s)) {
						case "d":
							u += l("d", e.getDate(), 2);
							break;
						case "D":
							u += c("D", e.getDay(), n, a);
							break;
						case "o":
							u += l("o", Math.round((new Date(e.getFullYear(), e.getMonth(), e.getDate()).getTime() - new Date(e.getFullYear(), 0, 0).getTime()) / 864e5), 3);
							break;
						case "m":
							u += l("m", e.getMonth() + 1, 2);
							break;
						case "M":
							u += c("M", e.getMonth(), r, o);
							break;
						case "y":
							u += h("y") ? e.getFullYear() : (10 > e.getYear() % 100 ? "0" : "") + e.getYear() % 100;
							break;
						case "@":
							u += e.getTime();
							break;
						case "!":
							u += 1e4 * e.getTime() + this._ticksTo1970;
							break;
						case "'":
							h("'") ? u += "'" : d = !0;
							break;
						default:
							u += t.charAt(s)
					}
					return u
		},
		_possibleChars: function(t) {
			var e, i = "",
				s = !1,
				n = function(i) {
					var s = t.length > e + 1 && t.charAt(e + 1) === i;
					return s && e++, s
				};
			for (e = 0; t.length > e; e++)
				if (s) "'" !== t.charAt(e) || n("'") ? i += t.charAt(e) : s = !1;
				else switch (t.charAt(e)) {
					case "d":
					case "m":
					case "y":
					case "@":
						i += "0123456789";
						break;
					case "D":
					case "M":
						return null;
					case "'":
						n("'") ? i += "'" : s = !0;
						break;
					default:
						i += t.charAt(e)
				}
				return i
		},
		_get: function(t, i) {
			return t.settings[i] !== e ? t.settings[i] : this._defaults[i]
		},
		_setDateFromField: function(t, e) {
			if (t.input.val() !== t.lastVal) {
				var i = this._get(t, "dateFormat"),
					s = t.lastVal = t.input ? t.input.val() : null,
					n = this._getDefaultDate(t),
					a = n,
					r = this._getFormatConfig(t);
				try {
					a = this.parseDate(i, s, r) || n
				} catch (o) {
					s = e ? "" : s
				}
				t.selectedDay = a.getDate(), t.drawMonth = t.selectedMonth = a.getMonth(), t.drawYear = t.selectedYear = a.getFullYear(), t.currentDay = s ? a.getDate() : 0, t.currentMonth = s ? a.getMonth() : 0, t.currentYear = s ? a.getFullYear() : 0, this._adjustInstDate(t)
			}
		},
		_getDefaultDate: function(t) {
			return this._restrictMinMax(t, this._determineDate(t, this._get(t, "defaultDate"), new Date))
		},
		_determineDate: function(e, i, s) {
			var n = function(t) {
					var e = new Date;
					return e.setDate(e.getDate() + t), e
				},
				a = function(i) {
					try {
						return t.datepicker.parseDate(t.datepicker._get(e, "dateFormat"), i, t.datepicker._getFormatConfig(e))
					} catch (s) {}
					for (var n = (i.toLowerCase().match(/^c/) ? t.datepicker._getDate(e) : null) || new Date, a = n.getFullYear(), r = n.getMonth(), o = n.getDate(), h = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, l = h.exec(i); l;) {
						switch (l[2] || "d") {
							case "d":
							case "D":
								o += parseInt(l[1], 10);
								break;
							case "w":
							case "W":
								o += 7 * parseInt(l[1], 10);
								break;
							case "m":
							case "M":
								r += parseInt(l[1], 10), o = Math.min(o, t.datepicker._getDaysInMonth(a, r));
								break;
							case "y":
							case "Y":
								a += parseInt(l[1], 10), o = Math.min(o, t.datepicker._getDaysInMonth(a, r))
						}
						l = h.exec(i)
					}
					return new Date(a, r, o)
				},
				r = null == i || "" === i ? s : "string" == typeof i ? a(i) : "number" == typeof i ? isNaN(i) ? s : n(i) : new Date(i.getTime());
			return r = r && "Invalid Date" == "" + r ? s : r, r && (r.setHours(0), r.setMinutes(0), r.setSeconds(0), r.setMilliseconds(0)), this._daylightSavingAdjust(r)
		},
		_daylightSavingAdjust: function(t) {
			return t ? (t.setHours(t.getHours() > 12 ? t.getHours() + 2 : 0), t) : null
		},
		_setDate: function(t, e, i) {
			var s = !e,
				n = t.selectedMonth,
				a = t.selectedYear,
				r = this._restrictMinMax(t, this._determineDate(t, e, new Date));
			t.selectedDay = t.currentDay = r.getDate(), t.drawMonth = t.selectedMonth = t.currentMonth = r.getMonth(), t.drawYear = t.selectedYear = t.currentYear = r.getFullYear(), n === t.selectedMonth && a === t.selectedYear || i || this._notifyChange(t), this._adjustInstDate(t), t.input && t.input.val(s ? "" : this._formatDate(t))
		},
		_getDate: function(t) {
			var e = !t.currentYear || t.input && "" === t.input.val() ? null : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
			return e
		},
		_attachHandlers: function(e) {
			var i = this._get(e, "stepMonths"),
				s = "#" + e.id.replace(/\\\\/g, "\\");
			e.dpDiv.find("[data-handler]").map(function() {
				var e = {
					prev: function() {
						t.datepicker._adjustDate(s, -i, "M")
					},
					next: function() {
						t.datepicker._adjustDate(s, +i, "M")
					},
					hide: function() {
						t.datepicker._hideDatepicker()
					},
					today: function() {
						t.datepicker._gotoToday(s)
					},
					selectDay: function() {
						return t.datepicker._selectDay(s, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
					},
					selectMonth: function() {
						return t.datepicker._selectMonthYear(s, this, "M"), !1
					},
					selectYear: function() {
						return t.datepicker._selectMonthYear(s, this, "Y"), !1
					}
				};
				t(this).bind(this.getAttribute("data-event"), e[this.getAttribute("data-handler")])
			})
		},
		_generateHTML: function(t) {
			var e, i, s, n, a, r, o, h, l, c, u, d, p, f, m, g, v, _, b, y, x, k, w, D, T, C, M, S, N, I, P, A, z, H, E, F, O, W, j, R = new Date,
				L = this._daylightSavingAdjust(new Date(R.getFullYear(), R.getMonth(), R.getDate())),
				Y = this._get(t, "isRTL"),
				B = this._get(t, "showButtonPanel"),
				J = this._get(t, "hideIfNoPrevNext"),
				K = this._get(t, "navigationAsDateFormat"),
				Q = this._getNumberOfMonths(t),
				V = this._get(t, "showCurrentAtPos"),
				U = this._get(t, "stepMonths"),
				q = 1 !== Q[0] || 1 !== Q[1],
				X = this._daylightSavingAdjust(t.currentDay ? new Date(t.currentYear, t.currentMonth, t.currentDay) : new Date(9999, 9, 9)),
				G = this._getMinMaxDate(t, "min"),
				$ = this._getMinMaxDate(t, "max"),
				Z = t.drawMonth - V,
				te = t.drawYear;
			if (0 > Z && (Z += 12, te--), $)
				for (e = this._daylightSavingAdjust(new Date($.getFullYear(), $.getMonth() - Q[0] * Q[1] + 1, $.getDate())), e = G && G > e ? G : e; this._daylightSavingAdjust(new Date(te, Z, 1)) > e;) Z--, 0 > Z && (Z = 11, te--);
			for (t.drawMonth = Z, t.drawYear = te, i = this._get(t, "prevText"), i = K ? this.formatDate(i, this._daylightSavingAdjust(new Date(te, Z - U, 1)), this._getFormatConfig(t)) : i, s = this._canAdjustMonth(t, -1, te, Z) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "e" : "w") + "'>" + i + "</span></a>" : J ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "e" : "w") + "'>" + i + "</span></a>", n = this._get(t, "nextText"), n = K ? this.formatDate(n, this._daylightSavingAdjust(new Date(te, Z + U, 1)), this._getFormatConfig(t)) : n, a = this._canAdjustMonth(t, 1, te, Z) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "w" : "e") + "'>" + n + "</span></a>" : J ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "w" : "e") + "'>" + n + "</span></a>", r = this._get(t, "currentText"), o = this._get(t, "gotoCurrent") && t.currentDay ? X : L, r = K ? this.formatDate(r, o, this._getFormatConfig(t)) : r, h = t.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(t, "closeText") + "</button>", l = B ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (Y ? h : "") + (this._isInRange(t, o) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + r + "</button>" : "") + (Y ? "" : h) + "</div>" : "", c = parseInt(this._get(t, "firstDay"), 10), c = isNaN(c) ? 0 : c, u = this._get(t, "showWeek"), d = this._get(t, "dayNames"), p = this._get(t, "dayNamesMin"), f = this._get(t, "monthNames"), m = this._get(t, "monthNamesShort"), g = this._get(t, "beforeShowDay"), v = this._get(t, "showOtherMonths"), _ = this._get(t, "selectOtherMonths"), b = this._getDefaultDate(t), y = "", k = 0; Q[0] > k; k++) {
				for (w = "", this.maxRows = 4, D = 0; Q[1] > D; D++) {
					if (T = this._daylightSavingAdjust(new Date(te, Z, t.selectedDay)), C = " ui-corner-all", M = "", q) {
						if (M += "<div class='ui-datepicker-group", Q[1] > 1) switch (D) {
							case 0:
								M += " ui-datepicker-group-first", C = " ui-corner-" + (Y ? "right" : "left");
								break;
							case Q[1] - 1:
								M += " ui-datepicker-group-last", C = " ui-corner-" + (Y ? "left" : "right");
								break;
							default:
								M += " ui-datepicker-group-middle", C = ""
						}
						M += "'>"
					}
					for (M += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + C + "'>" + (/all|left/.test(C) && 0 === k ? Y ? a : s : "") + (/all|right/.test(C) && 0 === k ? Y ? s : a : "") + this._generateMonthYearHeader(t, Z, te, G, $, k > 0 || D > 0, f, m) + "</div><table class='ui-datepicker-calendar'><thead>" + "<tr>", S = u ? "<th class='ui-datepicker-week-col'>" + this._get(t, "weekHeader") + "</th>" : "", x = 0; 7 > x; x++) N = (x + c) % 7, S += "<th" + ((x + c + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + ">" + "<span title='" + d[N] + "'>" + p[N] + "</span></th>";
					for (M += S + "</tr></thead><tbody>", I = this._getDaysInMonth(te, Z), te === t.selectedYear && Z === t.selectedMonth && (t.selectedDay = Math.min(t.selectedDay, I)), P = (this._getFirstDayOfMonth(te, Z) - c + 7) % 7, A = Math.ceil((P + I) / 7), z = q ? this.maxRows > A ? this.maxRows : A : A, this.maxRows = z, H = this._daylightSavingAdjust(new Date(te, Z, 1 - P)), E = 0; z > E; E++) {
						for (M += "<tr>", F = u ? "<td class='ui-datepicker-week-col'>" + this._get(t, "calculateWeek")(H) + "</td>" : "", x = 0; 7 > x; x++) O = g ? g.apply(t.input ? t.input[0] : null, [H]) : [!0, ""], W = H.getMonth() !== Z, j = W && !_ || !O[0] || G && G > H || $ && H > $, F += "<td class='" + ((x + c + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (W ? " ui-datepicker-other-month" : "") + (H.getTime() === T.getTime() && Z === t.selectedMonth && t._keyEvent || b.getTime() === H.getTime() && b.getTime() === T.getTime() ? " " + this._dayOverClass : "") + (j ? " " + this._unselectableClass + " ui-state-disabled" : "") + (W && !v ? "" : " " + O[1] + (H.getTime() === X.getTime() ? " " + this._currentClass : "") + (H.getTime() === L.getTime() ? " ui-datepicker-today" : "")) + "'" + (W && !v || !O[2] ? "" : " title='" + O[2].replace(/'/g, "&#39;") + "'") + (j ? "" : " data-handler='selectDay' data-event='click' data-month='" + H.getMonth() + "' data-year='" + H.getFullYear() + "'") + ">" + (W && !v ? "&#xa0;" : j ? "<span class='ui-state-default'>" + H.getDate() + "</span>" : "<a class='ui-state-default" + (H.getTime() === L.getTime() ? " ui-state-highlight" : "") + (H.getTime() === X.getTime() ? " ui-state-active" : "") + (W ? " ui-priority-secondary" : "") + "' href='#'>" + H.getDate() + "</a>") + "</td>", H.setDate(H.getDate() + 1), H = this._daylightSavingAdjust(H);
						M += F + "</tr>"
					}
					Z++, Z > 11 && (Z = 0, te++), M += "</tbody></table>" + (q ? "</div>" + (Q[0] > 0 && D === Q[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""), w += M
				}
				y += w
			}
			return y += l, t._keyEvent = !1, y
		},
		_generateMonthYearHeader: function(t, e, i, s, n, a, r, o) {
			var h, l, c, u, d, p, f, m, g = this._get(t, "changeMonth"),
				v = this._get(t, "changeYear"),
				_ = this._get(t, "showMonthAfterYear"),
				b = "<div class='ui-datepicker-title'>",
				y = "";
			if (a || !g) y += "<span class='ui-datepicker-month'>" + r[e] + "</span>";
			else {
				for (h = s && s.getFullYear() === i, l = n && n.getFullYear() === i, y += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", c = 0; 12 > c; c++)(!h || c >= s.getMonth()) && (!l || n.getMonth() >= c) && (y += "<option value='" + c + "'" + (c === e ? " selected='selected'" : "") + ">" + o[c] + "</option>");
				y += "</select>"
			}
			if (_ || (b += y + (!a && g && v ? "" : "&#xa0;")), !t.yearshtml)
				if (t.yearshtml = "", a || !v) b += "<span class='ui-datepicker-year'>" + i + "</span>";
				else {
					for (u = this._get(t, "yearRange").split(":"), d = (new Date).getFullYear(), p = function(t) {
							var e = t.match(/c[+\-].*/) ? i + parseInt(t.substring(1), 10) : t.match(/[+\-].*/) ? d + parseInt(t, 10) : parseInt(t, 10);
							return isNaN(e) ? d : e
						}, f = p(u[0]), m = Math.max(f, p(u[1] || "")), f = s ? Math.max(f, s.getFullYear()) : f, m = n ? Math.min(m, n.getFullYear()) : m, t.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; m >= f; f++) t.yearshtml += "<option value='" + f + "'" + (f === i ? " selected='selected'" : "") + ">" + f + "</option>";
					t.yearshtml += "</select>", b += t.yearshtml, t.yearshtml = null
				}
			return b += this._get(t, "yearSuffix"), _ && (b += (!a && g && v ? "" : "&#xa0;") + y), b += "</div>"
		},
		_adjustInstDate: function(t, e, i) {
			var s = t.drawYear + ("Y" === i ? e : 0),
				n = t.drawMonth + ("M" === i ? e : 0),
				a = Math.min(t.selectedDay, this._getDaysInMonth(s, n)) + ("D" === i ? e : 0),
				r = this._restrictMinMax(t, this._daylightSavingAdjust(new Date(s, n, a)));
			t.selectedDay = r.getDate(), t.drawMonth = t.selectedMonth = r.getMonth(), t.drawYear = t.selectedYear = r.getFullYear(), ("M" === i || "Y" === i) && this._notifyChange(t)
		},
		_restrictMinMax: function(t, e) {
			var i = this._getMinMaxDate(t, "min"),
				s = this._getMinMaxDate(t, "max"),
				n = i && i > e ? i : e;
			return s && n > s ? s : n
		},
		_notifyChange: function(t) {
			var e = this._get(t, "onChangeMonthYear");
			e && e.apply(t.input ? t.input[0] : null, [t.selectedYear, t.selectedMonth + 1, t])
		},
		_getNumberOfMonths: function(t) {
			var e = this._get(t, "numberOfMonths");
			return null == e ? [1, 1] : "number" == typeof e ? [1, e] : e
		},
		_getMinMaxDate: function(t, e) {
			return this._determineDate(t, this._get(t, e + "Date"), null)
		},
		_getDaysInMonth: function(t, e) {
			return 32 - this._daylightSavingAdjust(new Date(t, e, 32)).getDate()
		},
		_getFirstDayOfMonth: function(t, e) {
			return new Date(t, e, 1).getDay()
		},
		_canAdjustMonth: function(t, e, i, s) {
			var n = this._getNumberOfMonths(t),
				a = this._daylightSavingAdjust(new Date(i, s + (0 > e ? e : n[0] * n[1]), 1));
			return 0 > e && a.setDate(this._getDaysInMonth(a.getFullYear(), a.getMonth())), this._isInRange(t, a)
		},
		_isInRange: function(t, e) {
			var i, s, n = this._getMinMaxDate(t, "min"),
				a = this._getMinMaxDate(t, "max"),
				r = null,
				o = null,
				h = this._get(t, "yearRange");
			return h && (i = h.split(":"), s = (new Date).getFullYear(), r = parseInt(i[0], 10), o = parseInt(i[1], 10), i[0].match(/[+\-].*/) && (r += s), i[1].match(/[+\-].*/) && (o += s)), (!n || e.getTime() >= n.getTime()) && (!a || e.getTime() <= a.getTime()) && (!r || e.getFullYear() >= r) && (!o || o >= e.getFullYear())
		},
		_getFormatConfig: function(t) {
			var e = this._get(t, "shortYearCutoff");
			return e = "string" != typeof e ? e : (new Date).getFullYear() % 100 + parseInt(e, 10), {
				shortYearCutoff: e,
				dayNamesShort: this._get(t, "dayNamesShort"),
				dayNames: this._get(t, "dayNames"),
				monthNamesShort: this._get(t, "monthNamesShort"),
				monthNames: this._get(t, "monthNames")
			}
		},
		_formatDate: function(t, e, i, s) {
			e || (t.currentDay = t.selectedDay, t.currentMonth = t.selectedMonth, t.currentYear = t.selectedYear);
			var n = e ? "object" == typeof e ? e : this._daylightSavingAdjust(new Date(s, i, e)) : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
			return this.formatDate(this._get(t, "dateFormat"), n, this._getFormatConfig(t))
		}
	}), t.fn.datepicker = function(e) {
		if (!this.length) return this;
		t.datepicker.initialized || (t(document).mousedown(t.datepicker._checkExternalClick), t.datepicker.initialized = !0), 0 === t("#" + t.datepicker._mainDivId).length && t("body").append(t.datepicker.dpDiv);
		var i = Array.prototype.slice.call(arguments, 1);
		return "string" != typeof e || "isDisabled" !== e && "getDate" !== e && "widget" !== e ? "option" === e && 2 === arguments.length && "string" == typeof arguments[1] ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i)) : this.each(function() {
			"string" == typeof e ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this].concat(i)) : t.datepicker._attachDatepicker(this, e)
		}) : t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i))
	}, t.datepicker = new i, t.datepicker.initialized = !1, t.datepicker.uuid = (new Date).getTime(), t.datepicker.version = "1.10.3"
})(jQuery);
(function(t) {
	var e = {
			buttons: !0,
			height: !0,
			maxHeight: !0,
			maxWidth: !0,
			minHeight: !0,
			minWidth: !0,
			width: !0
		},
		i = {
			maxHeight: !0,
			maxWidth: !0,
			minHeight: !0,
			minWidth: !0
		};
	t.widget("ui.dialog", {
		version: "1.10.3",
		options: {
			appendTo: "body",
			autoOpen: !0,
			buttons: [],
			closeOnEscape: !0,
			closeText: "close",
			dialogClass: "",
			draggable: !0,
			hide: null,
			height: "auto",
			maxHeight: null,
			maxWidth: null,
			minHeight: 150,
			minWidth: 150,
			modal: !1,
			position: {
				my: "center",
				at: "center",
				of: window,
				collision: "fit",
				using: function(e) {
					var i = t(this).css(e).offset().top;
					0 > i && t(this).css("top", e.top - i)
				}
			},
			resizable: !0,
			show: null,
			title: null,
			width: 300,
			beforeClose: null,
			close: null,
			drag: null,
			dragStart: null,
			dragStop: null,
			focus: null,
			open: null,
			resize: null,
			resizeStart: null,
			resizeStop: null
		},
		_create: function() {
			this.originalCss = {
				display: this.element[0].style.display,
				width: this.element[0].style.width,
				minHeight: this.element[0].style.minHeight,
				maxHeight: this.element[0].style.maxHeight,
				height: this.element[0].style.height
			}, this.originalPosition = {
				parent: this.element.parent(),
				index: this.element.parent().children().index(this.element)
			}, this.originalTitle = this.element.attr("title"), this.options.title = this.options.title || this.originalTitle, this._createWrapper(), this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog), this._createTitlebar(), this._createButtonPane(), this.options.draggable && t.fn.draggable && this._makeDraggable(), this.options.resizable && t.fn.resizable && this._makeResizable(), this._isOpen = !1
		},
		_init: function() {
			this.options.autoOpen && this.open()
		},
		_appendTo: function() {
			var e = this.options.appendTo;
			return e && (e.jquery || e.nodeType) ? t(e) : this.document.find(e || "body").eq(0)
		},
		_destroy: function() {
			var t, e = this.originalPosition;
			this._destroyOverlay(), this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach(), this.uiDialog.stop(!0, !0).remove(), this.originalTitle && this.element.attr("title", this.originalTitle), t = e.parent.children().eq(e.index), t.length && t[0] !== this.element[0] ? t.before(this.element) : e.parent.append(this.element)
		},
		widget: function() {
			return this.uiDialog
		},
		disable: t.noop,
		enable: t.noop,
		close: function(e) {
			var i = this;
			this._isOpen && this._trigger("beforeClose", e) !== !1 && (this._isOpen = !1, this._destroyOverlay(), this.opener.filter(":focusable").focus().length || t(this.document[0].activeElement).blur(), this._hide(this.uiDialog, this.options.hide, function() {
				i._trigger("close", e)
			}))
		},
		isOpen: function() {
			return this._isOpen
		},
		moveToTop: function() {
			this._moveToTop()
		},
		_moveToTop: function(t, e) {
			var i = !!this.uiDialog.nextAll(":visible").insertBefore(this.uiDialog).length;
			return i && !e && this._trigger("focus", t), i
		},
		open: function() {
			var e = this;
			return this._isOpen ? (this._moveToTop() && this._focusTabbable(), undefined) : (this._isOpen = !0, this.opener = t(this.document[0].activeElement), this._size(), this._position(), this._createOverlay(), this._moveToTop(null, !0), this._show(this.uiDialog, this.options.show, function() {
				e._focusTabbable(), e._trigger("focus")
			}), this._trigger("open"), undefined)
		},
		_focusTabbable: function() {
			var t = this.element.find("[autofocus]");
			t.length || (t = this.element.find(":tabbable")), t.length || (t = this.uiDialogButtonPane.find(":tabbable")), t.length || (t = this.uiDialogTitlebarClose.filter(":tabbable")), t.length || (t = this.uiDialog), t.eq(0).focus()
		},
		_keepFocus: function(e) {
			function i() {
				var e = this.document[0].activeElement,
					i = this.uiDialog[0] === e || t.contains(this.uiDialog[0], e);
				i || this._focusTabbable()
			}
			e.preventDefault(), i.call(this), this._delay(i)
		},
		_createWrapper: function() {
			this.uiDialog = t("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front " + this.options.dialogClass).hide().attr({
				tabIndex: -1,
				role: "dialog"
			}).appendTo(this._appendTo()), this._on(this.uiDialog, {
				keydown: function(e) {
					if (this.options.closeOnEscape && !e.isDefaultPrevented() && e.keyCode && e.keyCode === t.ui.keyCode.ESCAPE) return e.preventDefault(), this.close(e), undefined;
					if (e.keyCode === t.ui.keyCode.TAB) {
						var i = this.uiDialog.find(":tabbable"),
							s = i.filter(":first"),
							n = i.filter(":last");
						e.target !== n[0] && e.target !== this.uiDialog[0] || e.shiftKey ? e.target !== s[0] && e.target !== this.uiDialog[0] || !e.shiftKey || (n.focus(1), e.preventDefault()) : (s.focus(1), e.preventDefault())
					}
				},
				mousedown: function(t) {
					this._moveToTop(t) && this._focusTabbable()
				}
			}), this.element.find("[aria-describedby]").length || this.uiDialog.attr({
				"aria-describedby": this.element.uniqueId().attr("id")
			})
		},
		_createTitlebar: function() {
			var e;
			this.uiDialogTitlebar = t("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog), this._on(this.uiDialogTitlebar, {
				mousedown: function(e) {
					t(e.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.focus()
				}
			}), this.uiDialogTitlebarClose = t("<button></button>").button({
				label: this.options.closeText,
				icons: {
					primary: "ui-icon-closethick"
				},
				text: !1
			}).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar), this._on(this.uiDialogTitlebarClose, {
				click: function(t) {
					t.preventDefault(), this.close(t)
				}
			}), e = t("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar), this._title(e), this.uiDialog.attr({
				"aria-labelledby": e.attr("id")
			})
		},
		_title: function(t) {
			this.options.title || t.html("&#160;"), t.text(this.options.title)
		},
		_createButtonPane: function() {
			this.uiDialogButtonPane = t("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"), this.uiButtonSet = t("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane), this._createButtons()
		},
		_createButtons: function() {
			var e = this,
				i = this.options.buttons;
			return this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), t.isEmptyObject(i) || t.isArray(i) && !i.length ? (this.uiDialog.removeClass("ui-dialog-buttons"), undefined) : (t.each(i, function(i, s) {
				var n, a;
				s = t.isFunction(s) ? {
					click: s,
					text: i
				} : s, s = t.extend({
					type: "button"
				}, s), n = s.click, s.click = function() {
					n.apply(e.element[0], arguments)
				}, a = {
					icons: s.icons,
					text: s.showText
				}, delete s.icons, delete s.showText, t("<button></button>", s).button(a).appendTo(e.uiButtonSet)
			}), this.uiDialog.addClass("ui-dialog-buttons"), this.uiDialogButtonPane.appendTo(this.uiDialog), undefined)
		},
		_makeDraggable: function() {
			function e(t) {
				return {
					position: t.position,
					offset: t.offset
				}
			}
			var i = this,
				s = this.options;
			this.uiDialog.draggable({
				cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
				handle: ".ui-dialog-titlebar",
				containment: "document",
				start: function(s, n) {
					t(this).addClass("ui-dialog-dragging"), i._blockFrames(), i._trigger("dragStart", s, e(n))
				},
				drag: function(t, s) {
					i._trigger("drag", t, e(s))
				},
				stop: function(n, a) {
					s.position = [a.position.left - i.document.scrollLeft(), a.position.top - i.document.scrollTop()], t(this).removeClass("ui-dialog-dragging"), i._unblockFrames(), i._trigger("dragStop", n, e(a))
				}
			})
		},
		_makeResizable: function() {
			function e(t) {
				return {
					originalPosition: t.originalPosition,
					originalSize: t.originalSize,
					position: t.position,
					size: t.size
				}
			}
			var i = this,
				s = this.options,
				n = s.resizable,
				a = this.uiDialog.css("position"),
				o = "string" == typeof n ? n : "n,e,s,w,se,sw,ne,nw";
			this.uiDialog.resizable({
				cancel: ".ui-dialog-content",
				containment: "document",
				alsoResize: this.element,
				maxWidth: s.maxWidth,
				maxHeight: s.maxHeight,
				minWidth: s.minWidth,
				minHeight: this._minHeight(),
				handles: o,
				start: function(s, n) {
					t(this).addClass("ui-dialog-resizing"), i._blockFrames(), i._trigger("resizeStart", s, e(n))
				},
				resize: function(t, s) {
					i._trigger("resize", t, e(s))
				},
				stop: function(n, a) {
					s.height = t(this).height(), s.width = t(this).width(), t(this).removeClass("ui-dialog-resizing"), i._unblockFrames(), i._trigger("resizeStop", n, e(a))
				}
			}).css("position", a)
		},
		_minHeight: function() {
			var t = this.options;
			return "auto" === t.height ? t.minHeight : Math.min(t.minHeight, t.height)
		},
		_position: function() {
			var t = this.uiDialog.is(":visible");
			t || this.uiDialog.show(), this.uiDialog.position(this.options.position), t || this.uiDialog.hide()
		},
		_setOptions: function(s) {
			var n = this,
				a = !1,
				o = {};
			t.each(s, function(t, s) {
				n._setOption(t, s), t in e && (a = !0), t in i && (o[t] = s)
			}), a && (this._size(), this._position()), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", o)
		},
		_setOption: function(t, e) {
			var i, s, n = this.uiDialog;
			"dialogClass" === t && n.removeClass(this.options.dialogClass).addClass(e), "disabled" !== t && (this._super(t, e), "appendTo" === t && this.uiDialog.appendTo(this._appendTo()), "buttons" === t && this._createButtons(), "closeText" === t && this.uiDialogTitlebarClose.button({
				label: "" + e
			}), "draggable" === t && (i = n.is(":data(ui-draggable)"), i && !e && n.draggable("destroy"), !i && e && this._makeDraggable()), "position" === t && this._position(), "resizable" === t && (s = n.is(":data(ui-resizable)"), s && !e && n.resizable("destroy"), s && "string" == typeof e && n.resizable("option", "handles", e), s || e === !1 || this._makeResizable()), "title" === t && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))
		},
		_size: function() {
			var t, e, i, s = this.options;
			this.element.show().css({
				width: "auto",
				minHeight: 0,
				maxHeight: "none",
				height: 0
			}), s.minWidth > s.width && (s.width = s.minWidth), t = this.uiDialog.css({
				height: "auto",
				width: s.width
			}).outerHeight(), e = Math.max(0, s.minHeight - t), i = "number" == typeof s.maxHeight ? Math.max(0, s.maxHeight - t) : "none", "auto" === s.height ? this.element.css({
				minHeight: e,
				maxHeight: i,
				height: "auto"
			}) : this.element.height(Math.max(0, s.height - t)), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
		},
		_blockFrames: function() {
			this.iframeBlocks = this.document.find("iframe").map(function() {
				var e = t(this);
				return t("<div>").css({
					position: "absolute",
					width: e.outerWidth(),
					height: e.outerHeight()
				}).appendTo(e.parent()).offset(e.offset())[0]
			})
		},
		_unblockFrames: function() {
			this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
		},
		_allowInteraction: function(e) {
			return t(e.target).closest(".ui-dialog").length ? !0 : !!t(e.target).closest(".ui-datepicker").length
		},
		_createOverlay: function() {
			if (this.options.modal) {
				var e = this,
					i = this.widgetFullName;
				t.ui.dialog.overlayInstances || this._delay(function() {
					t.ui.dialog.overlayInstances && this.document.bind("focusin.dialog", function(s) {
						e._allowInteraction(s) || (s.preventDefault(), t(".ui-dialog:visible:last .ui-dialog-content").data(i)._focusTabbable())
					})
				}), this.overlay = t("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo()), this._on(this.overlay, {
					mousedown: "_keepFocus"
				}), t.ui.dialog.overlayInstances++
			}
		},
		_destroyOverlay: function() {
			this.options.modal && this.overlay && (t.ui.dialog.overlayInstances--, t.ui.dialog.overlayInstances || this.document.unbind("focusin.dialog"), this.overlay.remove(), this.overlay = null)
		}
	}), t.ui.dialog.overlayInstances = 0, t.uiBackCompat !== !1 && t.widget("ui.dialog", t.ui.dialog, {
		_position: function() {
			var e, i = this.options.position,
				s = [],
				n = [0, 0];
			i ? (("string" == typeof i || "object" == typeof i && "0" in i) && (s = i.split ? i.split(" ") : [i[0], i[1]], 1 === s.length && (s[1] = s[0]), t.each(["left", "top"], function(t, e) {
				+s[t] === s[t] && (n[t] = s[t], s[t] = e)
			}), i = {
				my: s[0] + (0 > n[0] ? n[0] : "+" + n[0]) + " " + s[1] + (0 > n[1] ? n[1] : "+" + n[1]),
				at: s.join(" ")
			}), i = t.extend({}, t.ui.dialog.prototype.options.position, i)) : i = t.ui.dialog.prototype.options.position, e = this.uiDialog.is(":visible"), e || this.uiDialog.show(), this.uiDialog.position(i), e || this.uiDialog.hide()
		}
	})
})(jQuery);
(function(t) {
	t.widget("ui.menu", {
		version: "1.10.3",
		defaultElement: "<ul>",
		delay: 300,
		options: {
			icons: {
				submenu: "ui-icon-carat-1-e"
			},
			menus: "ul",
			position: {
				my: "left top",
				at: "right top"
			},
			role: "menu",
			blur: null,
			focus: null,
			select: null
		},
		_create: function() {
			this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({
				role: this.options.role,
				tabIndex: 0
			}).bind("click" + this.eventNamespace, t.proxy(function(t) {
				this.options.disabled && t.preventDefault()
			}, this)), this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true"), this._on({
				"mousedown .ui-menu-item > a": function(t) {
					t.preventDefault()
				},
				"click .ui-state-disabled > a": function(t) {
					t.preventDefault()
				},
				"click .ui-menu-item:has(a)": function(e) {
					var i = t(e.target).closest(".ui-menu-item");
					!this.mouseHandled && i.not(".ui-state-disabled").length && (this.mouseHandled = !0, this.select(e), i.has(".ui-menu").length ? this.expand(e) : this.element.is(":focus") || (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
				},
				"mouseenter .ui-menu-item": function(e) {
					var i = t(e.currentTarget);
					i.siblings().children(".ui-state-active").removeClass("ui-state-active"), this.focus(e, i)
				},
				mouseleave: "collapseAll",
				"mouseleave .ui-menu": "collapseAll",
				focus: function(t, e) {
					var i = this.active || this.element.children(".ui-menu-item").eq(0);
					e || this.focus(t, i)
				},
				blur: function(e) {
					this._delay(function() {
						t.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(e)
					})
				},
				keydown: "_keydown"
			}), this.refresh(), this._on(this.document, {
				click: function(e) {
					t(e.target).closest(".ui-menu").length || this.collapseAll(e), this.mouseHandled = !1
				}
			})
		},
		_destroy: function() {
			this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(), this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function() {
				var e = t(this);
				e.data("ui-menu-submenu-carat") && e.remove()
			}), this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
		},
		_keydown: function(e) {
			function i(t) {
				return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
			}
			var s, n, a, o, r, h = !0;
			switch (e.keyCode) {
				case t.ui.keyCode.PAGE_UP:
					this.previousPage(e);
					break;
				case t.ui.keyCode.PAGE_DOWN:
					this.nextPage(e);
					break;
				case t.ui.keyCode.HOME:
					this._move("first", "first", e);
					break;
				case t.ui.keyCode.END:
					this._move("last", "last", e);
					break;
				case t.ui.keyCode.UP:
					this.previous(e);
					break;
				case t.ui.keyCode.DOWN:
					this.next(e);
					break;
				case t.ui.keyCode.LEFT:
					this.collapse(e);
					break;
				case t.ui.keyCode.RIGHT:
					this.active && !this.active.is(".ui-state-disabled") && this.expand(e);
					break;
				case t.ui.keyCode.ENTER:
				case t.ui.keyCode.SPACE:
					this._activate(e);
					break;
				case t.ui.keyCode.ESCAPE:
					this.collapse(e);
					break;
				default:
					h = !1, n = this.previousFilter || "", a = String.fromCharCode(e.keyCode), o = !1, clearTimeout(this.filterTimer), a === n ? o = !0 : a = n + a, r = RegExp("^" + i(a), "i"), s = this.activeMenu.children(".ui-menu-item").filter(function() {
						return r.test(t(this).children("a").text())
					}), s = o && -1 !== s.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : s, s.length || (a = String.fromCharCode(e.keyCode), r = RegExp("^" + i(a), "i"), s = this.activeMenu.children(".ui-menu-item").filter(function() {
						return r.test(t(this).children("a").text())
					})), s.length ? (this.focus(e, s), s.length > 1 ? (this.previousFilter = a, this.filterTimer = this._delay(function() {
						delete this.previousFilter
					}, 1e3)) : delete this.previousFilter) : delete this.previousFilter
			}
			h && e.preventDefault()
		},
		_activate: function(t) {
			this.active.is(".ui-state-disabled") || (this.active.children("a[aria-haspopup='true']").length ? this.expand(t) : this.select(t))
		},
		refresh: function() {
			var e, i = this.options.icons.submenu,
				s = this.element.find(this.options.menus);
			s.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({
				role: this.options.role,
				"aria-hidden": "true",
				"aria-expanded": "false"
			}).each(function() {
				var e = t(this),
					s = e.prev("a"),
					n = t("<span>").addClass("ui-menu-icon ui-icon " + i).data("ui-menu-submenu-carat", !0);
				s.attr("aria-haspopup", "true").prepend(n), e.attr("aria-labelledby", s.attr("id"))
			}), e = s.add(this.element), e.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role", "presentation").children("a").uniqueId().addClass("ui-corner-all").attr({
				tabIndex: -1,
				role: this._itemRole()
			}), e.children(":not(.ui-menu-item)").each(function() {
				var e = t(this);
				/[^\-\u2014\u2013\s]/.test(e.text()) || e.addClass("ui-widget-content ui-menu-divider")
			}), e.children(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !t.contains(this.element[0], this.active[0]) && this.blur()
		},
		_itemRole: function() {
			return {
				menu: "menuitem",
				listbox: "option"
			}[this.options.role]
		},
		_setOption: function(t, e) {
			"icons" === t && this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(e.submenu), this._super(t, e)
		},
		focus: function(t, e) {
			var i, s;
			this.blur(t, t && "focus" === t.type), this._scrollIntoView(e), this.active = e.first(), s = this.active.children("a").addClass("ui-state-focus"), this.options.role && this.element.attr("aria-activedescendant", s.attr("id")), this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active"), t && "keydown" === t.type ? this._close() : this.timer = this._delay(function() {
				this._close()
			}, this.delay), i = e.children(".ui-menu"), i.length && /^mouse/.test(t.type) && this._startOpening(i), this.activeMenu = e.parent(), this._trigger("focus", t, {
				item: e
			})
		},
		_scrollIntoView: function(e) {
			var i, s, n, a, o, r;
			this._hasScroll() && (i = parseFloat(t.css(this.activeMenu[0], "borderTopWidth")) || 0, s = parseFloat(t.css(this.activeMenu[0], "paddingTop")) || 0, n = e.offset().top - this.activeMenu.offset().top - i - s, a = this.activeMenu.scrollTop(), o = this.activeMenu.height(), r = e.height(), 0 > n ? this.activeMenu.scrollTop(a + n) : n + r > o && this.activeMenu.scrollTop(a + n - o + r))
		},
		blur: function(t, e) {
			e || clearTimeout(this.timer), this.active && (this.active.children("a").removeClass("ui-state-focus"), this.active = null, this._trigger("blur", t, {
				item: this.active
			}))
		},
		_startOpening: function(t) {
			clearTimeout(this.timer), "true" === t.attr("aria-hidden") && (this.timer = this._delay(function() {
				this._close(), this._open(t)
			}, this.delay))
		},
		_open: function(e) {
			var i = t.extend({
				of: this.active
			}, this.options.position);
			clearTimeout(this.timer), this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden", "true"), e.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(i)
		},
		collapseAll: function(e, i) {
			clearTimeout(this.timer), this.timer = this._delay(function() {
				var s = i ? this.element : t(e && e.target).closest(this.element.find(".ui-menu"));
				s.length || (s = this.element), this._close(s), this.blur(e), this.activeMenu = s
			}, this.delay)
		},
		_close: function(t) {
			t || (t = this.active ? this.active.parent() : this.element), t.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find("a.ui-state-active").removeClass("ui-state-active")
		},
		collapse: function(t) {
			var e = this.active && this.active.parent().closest(".ui-menu-item", this.element);
			e && e.length && (this._close(), this.focus(t, e))
		},
		expand: function(t) {
			var e = this.active && this.active.children(".ui-menu ").children(".ui-menu-item").first();
			e && e.length && (this._open(e.parent()), this._delay(function() {
				this.focus(t, e)
			}))
		},
		next: function(t) {
			this._move("next", "first", t)
		},
		previous: function(t) {
			this._move("prev", "last", t)
		},
		isFirstItem: function() {
			return this.active && !this.active.prevAll(".ui-menu-item").length
		},
		isLastItem: function() {
			return this.active && !this.active.nextAll(".ui-menu-item").length
		},
		_move: function(t, e, i) {
			var s;
			this.active && (s = "first" === t || "last" === t ? this.active["first" === t ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[t + "All"](".ui-menu-item").eq(0)), s && s.length && this.active || (s = this.activeMenu.children(".ui-menu-item")[e]()), this.focus(i, s)
		},
		nextPage: function(e) {
			var i, s, n;
			return this.active ? (this.isLastItem() || (this._hasScroll() ? (s = this.active.offset().top, n = this.element.height(), this.active.nextAll(".ui-menu-item").each(function() {
				return i = t(this), 0 > i.offset().top - s - n
			}), this.focus(e, i)) : this.focus(e, this.activeMenu.children(".ui-menu-item")[this.active ? "last" : "first"]())), undefined) : (this.next(e), undefined)
		},
		previousPage: function(e) {
			var i, s, n;
			return this.active ? (this.isFirstItem() || (this._hasScroll() ? (s = this.active.offset().top, n = this.element.height(), this.active.prevAll(".ui-menu-item").each(function() {
				return i = t(this), i.offset().top - s + n > 0
			}), this.focus(e, i)) : this.focus(e, this.activeMenu.children(".ui-menu-item").first())), undefined) : (this.next(e), undefined)
		},
		_hasScroll: function() {
			return this.element.outerHeight() < this.element.prop("scrollHeight")
		},
		select: function(e) {
			this.active = this.active || t(e.target).closest(".ui-menu-item");
			var i = {
				item: this.active
			};
			this.active.has(".ui-menu").length || this.collapseAll(e, !0), this._trigger("select", e, i)
		}
	})
})(jQuery);
(function(t, e) {
	t.widget("ui.progressbar", {
		version: "1.10.3",
		options: {
			max: 100,
			value: 0,
			change: null,
			complete: null
		},
		min: 0,
		_create: function() {
			this.oldValue = this.options.value = this._constrainedValue(), this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({
				role: "progressbar",
				"aria-valuemin": this.min
			}), this.valueDiv = t("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element), this._refreshValue()
		},
		_destroy: function() {
			this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.valueDiv.remove()
		},
		value: function(t) {
			return t === e ? this.options.value : (this.options.value = this._constrainedValue(t), this._refreshValue(), e)
		},
		_constrainedValue: function(t) {
			return t === e && (t = this.options.value), this.indeterminate = t === !1, "number" != typeof t && (t = 0), this.indeterminate ? !1 : Math.min(this.options.max, Math.max(this.min, t))
		},
		_setOptions: function(t) {
			var e = t.value;
			delete t.value, this._super(t), this.options.value = this._constrainedValue(e), this._refreshValue()
		},
		_setOption: function(t, e) {
			"max" === t && (e = Math.max(this.min, e)), this._super(t, e)
		},
		_percentage: function() {
			return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min)
		},
		_refreshValue: function() {
			var e = this.options.value,
				i = this._percentage();
			this.valueDiv.toggle(this.indeterminate || e > this.min).toggleClass("ui-corner-right", e === this.options.max).width(i.toFixed(0) + "%"), this.element.toggleClass("ui-progressbar-indeterminate", this.indeterminate), this.indeterminate ? (this.element.removeAttr("aria-valuenow"), this.overlayDiv || (this.overlayDiv = t("<div class='ui-progressbar-overlay'></div>").appendTo(this.valueDiv))) : (this.element.attr({
				"aria-valuemax": this.options.max,
				"aria-valuenow": e
			}), this.overlayDiv && (this.overlayDiv.remove(), this.overlayDiv = null)), this.oldValue !== e && (this.oldValue = e, this._trigger("change")), e === this.options.max && this._trigger("complete")
		}
	})
})(jQuery);
(function(t) {
	var e = 5;
	t.widget("ui.slider", t.ui.mouse, {
		version: "1.10.3",
		widgetEventPrefix: "slide",
		options: {
			animate: !1,
			distance: 0,
			max: 100,
			min: 0,
			orientation: "horizontal",
			range: !1,
			step: 1,
			value: 0,
			values: null,
			change: null,
			slide: null,
			start: null,
			stop: null
		},
		_create: function() {
			this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget" + " ui-widget-content" + " ui-corner-all"), this._refresh(), this._setOption("disabled", this.options.disabled), this._animateOff = !1
		},
		_refresh: function() {
			this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue()
		},
		_createHandles: function() {
			var e, i, s = this.options,
				n = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),
				a = "<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",
				o = [];
			for (i = s.values && s.values.length || 1, n.length > i && (n.slice(i).remove(), n = n.slice(0, i)), e = n.length; i > e; e++) o.push(a);
			this.handles = n.add(t(o.join("")).appendTo(this.element)), this.handle = this.handles.eq(0), this.handles.each(function(e) {
				t(this).data("ui-slider-handle-index", e)
			})
		},
		_createRange: function() {
			var e = this.options,
				i = "";
			e.range ? (e.range === !0 && (e.values ? e.values.length && 2 !== e.values.length ? e.values = [e.values[0], e.values[0]] : t.isArray(e.values) && (e.values = e.values.slice(0)) : e.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({
				left: "",
				bottom: ""
			}) : (this.range = t("<div></div>").appendTo(this.element), i = "ui-slider-range ui-widget-header ui-corner-all"), this.range.addClass(i + ("min" === e.range || "max" === e.range ? " ui-slider-range-" + e.range : ""))) : this.range = t([])
		},
		_setupEvents: function() {
			var t = this.handles.add(this.range).filter("a");
			this._off(t), this._on(t, this._handleEvents), this._hoverable(t), this._focusable(t)
		},
		_destroy: function() {
			this.handles.remove(), this.range.remove(), this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"), this._mouseDestroy()
		},
		_mouseCapture: function(e) {
			var i, s, n, a, o, r, h, l, u = this,
				c = this.options;
			return c.disabled ? !1 : (this.elementSize = {
				width: this.element.outerWidth(),
				height: this.element.outerHeight()
			}, this.elementOffset = this.element.offset(), i = {
				x: e.pageX,
				y: e.pageY
			}, s = this._normValueFromMouse(i), n = this._valueMax() - this._valueMin() + 1, this.handles.each(function(e) {
				var i = Math.abs(s - u.values(e));
				(n > i || n === i && (e === u._lastChangedValue || u.values(e) === c.min)) && (n = i, a = t(this), o = e)
			}), r = this._start(e, o), r === !1 ? !1 : (this._mouseSliding = !0, this._handleIndex = o, a.addClass("ui-state-active").focus(), h = a.offset(), l = !t(e.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = l ? {
				left: 0,
				top: 0
			} : {
				left: e.pageX - h.left - a.width() / 2,
				top: e.pageY - h.top - a.height() / 2 - (parseInt(a.css("borderTopWidth"), 10) || 0) - (parseInt(a.css("borderBottomWidth"), 10) || 0) + (parseInt(a.css("marginTop"), 10) || 0)
			}, this.handles.hasClass("ui-state-hover") || this._slide(e, o, s), this._animateOff = !0, !0))
		},
		_mouseStart: function() {
			return !0
		},
		_mouseDrag: function(t) {
			var e = {
					x: t.pageX,
					y: t.pageY
				},
				i = this._normValueFromMouse(e);
			return this._slide(t, this._handleIndex, i), !1
		},
		_mouseStop: function(t) {
			return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(t, this._handleIndex), this._change(t, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1
		},
		_detectOrientation: function() {
			this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
		},
		_normValueFromMouse: function(t) {
			var e, i, s, n, a;
			return "horizontal" === this.orientation ? (e = this.elementSize.width, i = t.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (e = this.elementSize.height, i = t.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), s = i / e, s > 1 && (s = 1), 0 > s && (s = 0), "vertical" === this.orientation && (s = 1 - s), n = this._valueMax() - this._valueMin(), a = this._valueMin() + s * n, this._trimAlignValue(a)
		},
		_start: function(t, e) {
			var i = {
				handle: this.handles[e],
				value: this.value()
			};
			return this.options.values && this.options.values.length && (i.value = this.values(e), i.values = this.values()), this._trigger("start", t, i)
		},
		_slide: function(t, e, i) {
			var s, n, a;
			this.options.values && this.options.values.length ? (s = this.values(e ? 0 : 1), 2 === this.options.values.length && this.options.range === !0 && (0 === e && i > s || 1 === e && s > i) && (i = s), i !== this.values(e) && (n = this.values(), n[e] = i, a = this._trigger("slide", t, {
				handle: this.handles[e],
				value: i,
				values: n
			}), s = this.values(e ? 0 : 1), a !== !1 && this.values(e, i, !0))) : i !== this.value() && (a = this._trigger("slide", t, {
				handle: this.handles[e],
				value: i
			}), a !== !1 && this.value(i))
		},
		_stop: function(t, e) {
			var i = {
				handle: this.handles[e],
				value: this.value()
			};
			this.options.values && this.options.values.length && (i.value = this.values(e), i.values = this.values()), this._trigger("stop", t, i)
		},
		_change: function(t, e) {
			if (!this._keySliding && !this._mouseSliding) {
				var i = {
					handle: this.handles[e],
					value: this.value()
				};
				this.options.values && this.options.values.length && (i.value = this.values(e), i.values = this.values()), this._lastChangedValue = e, this._trigger("change", t, i)
			}
		},
		value: function(t) {
			return arguments.length ? (this.options.value = this._trimAlignValue(t), this._refreshValue(), this._change(null, 0), undefined) : this._value()
		},
		values: function(e, i) {
			var s, n, a;
			if (arguments.length > 1) return this.options.values[e] = this._trimAlignValue(i), this._refreshValue(), this._change(null, e), undefined;
			if (!arguments.length) return this._values();
			if (!t.isArray(arguments[0])) return this.options.values && this.options.values.length ? this._values(e) : this.value();
			for (s = this.options.values, n = arguments[0], a = 0; s.length > a; a += 1) s[a] = this._trimAlignValue(n[a]), this._change(null, a);
			this._refreshValue()
		},
		_setOption: function(e, i) {
			var s, n = 0;
			switch ("range" === e && this.options.range === !0 && ("min" === i ? (this.options.value = this._values(0), this.options.values = null) : "max" === i && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), t.isArray(this.options.values) && (n = this.options.values.length), t.Widget.prototype._setOption.apply(this, arguments), e) {
				case "orientation":
					this._detectOrientation(), this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation), this._refreshValue();
					break;
				case "value":
					this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
					break;
				case "values":
					for (this._animateOff = !0, this._refreshValue(), s = 0; n > s; s += 1) this._change(null, s);
					this._animateOff = !1;
					break;
				case "min":
				case "max":
					this._animateOff = !0, this._refreshValue(), this._animateOff = !1;
					break;
				case "range":
					this._animateOff = !0, this._refresh(), this._animateOff = !1
			}
		},
		_value: function() {
			var t = this.options.value;
			return t = this._trimAlignValue(t)
		},
		_values: function(t) {
			var e, i, s;
			if (arguments.length) return e = this.options.values[t], e = this._trimAlignValue(e);
			if (this.options.values && this.options.values.length) {
				for (i = this.options.values.slice(), s = 0; i.length > s; s += 1) i[s] = this._trimAlignValue(i[s]);
				return i
			}
			return []
		},
		_trimAlignValue: function(t) {
			if (this._valueMin() >= t) return this._valueMin();
			if (t >= this._valueMax()) return this._valueMax();
			var e = this.options.step > 0 ? this.options.step : 1,
				i = (t - this._valueMin()) % e,
				s = t - i;
			return 2 * Math.abs(i) >= e && (s += i > 0 ? e : -e), parseFloat(s.toFixed(5))
		},
		_valueMin: function() {
			return this.options.min
		},
		_valueMax: function() {
			return this.options.max
		},
		_refreshValue: function() {
			var e, i, s, n, a, o = this.options.range,
				r = this.options,
				h = this,
				l = this._animateOff ? !1 : r.animate,
				u = {};
			this.options.values && this.options.values.length ? this.handles.each(function(s) {
				i = 100 * ((h.values(s) - h._valueMin()) / (h._valueMax() - h._valueMin())), u["horizontal" === h.orientation ? "left" : "bottom"] = i + "%", t(this).stop(1, 1)[l ? "animate" : "css"](u, r.animate), h.options.range === !0 && ("horizontal" === h.orientation ? (0 === s && h.range.stop(1, 1)[l ? "animate" : "css"]({
					left: i + "%"
				}, r.animate), 1 === s && h.range[l ? "animate" : "css"]({
					width: i - e + "%"
				}, {
					queue: !1,
					duration: r.animate
				})) : (0 === s && h.range.stop(1, 1)[l ? "animate" : "css"]({
					bottom: i + "%"
				}, r.animate), 1 === s && h.range[l ? "animate" : "css"]({
					height: i - e + "%"
				}, {
					queue: !1,
					duration: r.animate
				}))), e = i
			}) : (s = this.value(), n = this._valueMin(), a = this._valueMax(), i = a !== n ? 100 * ((s - n) / (a - n)) : 0, u["horizontal" === this.orientation ? "left" : "bottom"] = i + "%", this.handle.stop(1, 1)[l ? "animate" : "css"](u, r.animate), "min" === o && "horizontal" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({
				width: i + "%"
			}, r.animate), "max" === o && "horizontal" === this.orientation && this.range[l ? "animate" : "css"]({
				width: 100 - i + "%"
			}, {
				queue: !1,
				duration: r.animate
			}), "min" === o && "vertical" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({
				height: i + "%"
			}, r.animate), "max" === o && "vertical" === this.orientation && this.range[l ? "animate" : "css"]({
				height: 100 - i + "%"
			}, {
				queue: !1,
				duration: r.animate
			}))
		},
		_handleEvents: {
			keydown: function(i) {
				var s, n, a, o, r = t(i.target).data("ui-slider-handle-index");
				switch (i.keyCode) {
					case t.ui.keyCode.HOME:
					case t.ui.keyCode.END:
					case t.ui.keyCode.PAGE_UP:
					case t.ui.keyCode.PAGE_DOWN:
					case t.ui.keyCode.UP:
					case t.ui.keyCode.RIGHT:
					case t.ui.keyCode.DOWN:
					case t.ui.keyCode.LEFT:
						if (i.preventDefault(), !this._keySliding && (this._keySliding = !0, t(i.target).addClass("ui-state-active"), s = this._start(i, r), s === !1)) return
				}
				switch (o = this.options.step, n = a = this.options.values && this.options.values.length ? this.values(r) : this.value(), i.keyCode) {
					case t.ui.keyCode.HOME:
						a = this._valueMin();
						break;
					case t.ui.keyCode.END:
						a = this._valueMax();
						break;
					case t.ui.keyCode.PAGE_UP:
						a = this._trimAlignValue(n + (this._valueMax() - this._valueMin()) / e);
						break;
					case t.ui.keyCode.PAGE_DOWN:
						a = this._trimAlignValue(n - (this._valueMax() - this._valueMin()) / e);
						break;
					case t.ui.keyCode.UP:
					case t.ui.keyCode.RIGHT:
						if (n === this._valueMax()) return;
						a = this._trimAlignValue(n + o);
						break;
					case t.ui.keyCode.DOWN:
					case t.ui.keyCode.LEFT:
						if (n === this._valueMin()) return;
						a = this._trimAlignValue(n - o)
				}
				this._slide(i, r, a)
			},
			click: function(t) {
				t.preventDefault()
			},
			keyup: function(e) {
				var i = t(e.target).data("ui-slider-handle-index");
				this._keySliding && (this._keySliding = !1, this._stop(e, i), this._change(e, i), t(e.target).removeClass("ui-state-active"))
			}
		}
	})
})(jQuery);
(function(t) {
	function e(t) {
		return function() {
			var e = this.element.val();
			t.apply(this, arguments), this._refresh(), e !== this.element.val() && this._trigger("change")
		}
	}
	t.widget("ui.spinner", {
		version: "1.10.3",
		defaultElement: "<input>",
		widgetEventPrefix: "spin",
		options: {
			culture: null,
			icons: {
				down: "ui-icon-triangle-1-s",
				up: "ui-icon-triangle-1-n"
			},
			incremental: !0,
			max: null,
			min: null,
			numberFormat: null,
			page: 10,
			step: 1,
			change: null,
			spin: null,
			start: null,
			stop: null
		},
		_create: function() {
			this._setOption("max", this.options.max), this._setOption("min", this.options.min), this._setOption("step", this.options.step), this._value(this.element.val(), !0), this._draw(), this._on(this._events), this._refresh(), this._on(this.window, {
				beforeunload: function() {
					this.element.removeAttr("autocomplete")
				}
			})
		},
		_getCreateOptions: function() {
			var e = {},
				i = this.element;
			return t.each(["min", "max", "step"], function(t, s) {
				var n = i.attr(s);
				void 0 !== n && n.length && (e[s] = n)
			}), e
		},
		_events: {
			keydown: function(t) {
				this._start(t) && this._keydown(t) && t.preventDefault()
			},
			keyup: "_stop",
			focus: function() {
				this.previous = this.element.val()
			},
			blur: function(t) {
				return this.cancelBlur ? (delete this.cancelBlur, void 0) : (this._stop(), this._refresh(), this.previous !== this.element.val() && this._trigger("change", t), void 0)
			},
			mousewheel: function(t, e) {
				if (e) {
					if (!this.spinning && !this._start(t)) return !1;
					this._spin((e > 0 ? 1 : -1) * this.options.step, t), clearTimeout(this.mousewheelTimer), this.mousewheelTimer = this._delay(function() {
						this.spinning && this._stop(t)
					}, 100), t.preventDefault()
				}
			},
			"mousedown .ui-spinner-button": function(e) {
				function i() {
					var t = this.element[0] === this.document[0].activeElement;
					t || (this.element.focus(), this.previous = s, this._delay(function() {
						this.previous = s
					}))
				}
				var s;
				s = this.element[0] === this.document[0].activeElement ? this.previous : this.element.val(), e.preventDefault(), i.call(this), this.cancelBlur = !0, this._delay(function() {
					delete this.cancelBlur, i.call(this)
				}), this._start(e) !== !1 && this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e)
			},
			"mouseup .ui-spinner-button": "_stop",
			"mouseenter .ui-spinner-button": function(e) {
				return t(e.currentTarget).hasClass("ui-state-active") ? this._start(e) === !1 ? !1 : (this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e), void 0) : void 0
			},
			"mouseleave .ui-spinner-button": "_stop"
		},
		_draw: function() {
			var t = this.uiSpinner = this.element.addClass("ui-spinner-input").attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());
			this.element.attr("role", "spinbutton"), this.buttons = t.find(".ui-spinner-button").attr("tabIndex", -1).button().removeClass("ui-corner-all"), this.buttons.height() > Math.ceil(.5 * t.height()) && t.height() > 0 && t.height(t.height()), this.options.disabled && this.disable()
		},
		_keydown: function(e) {
			var i = this.options,
				s = t.ui.keyCode;
			switch (e.keyCode) {
				case s.UP:
					return this._repeat(null, 1, e), !0;
				case s.DOWN:
					return this._repeat(null, -1, e), !0;
				case s.PAGE_UP:
					return this._repeat(null, i.page, e), !0;
				case s.PAGE_DOWN:
					return this._repeat(null, -i.page, e), !0
			}
			return !1
		},
		_uiSpinnerHtml: function() {
			return "<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>"
		},
		_buttonHtml: function() {
			return "<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon " + this.options.icons.up + "'>&#9650;</span>" + "</a>" + "<a class='ui-spinner-button ui-spinner-down ui-corner-br'>" + "<span class='ui-icon " + this.options.icons.down + "'>&#9660;</span>" + "</a>"
		},
		_start: function(t) {
			return this.spinning || this._trigger("start", t) !== !1 ? (this.counter || (this.counter = 1), this.spinning = !0, !0) : !1
		},
		_repeat: function(t, e, i) {
			t = t || 500, clearTimeout(this.timer), this.timer = this._delay(function() {
				this._repeat(40, e, i)
			}, t), this._spin(e * this.options.step, i)
		},
		_spin: function(t, e) {
			var i = this.value() || 0;
			this.counter || (this.counter = 1), i = this._adjustValue(i + t * this._increment(this.counter)), this.spinning && this._trigger("spin", e, {
				value: i
			}) === !1 || (this._value(i), this.counter++)
		},
		_increment: function(e) {
			var i = this.options.incremental;
			return i ? t.isFunction(i) ? i(e) : Math.floor(e * e * e / 5e4 - e * e / 500 + 17 * e / 200 + 1) : 1
		},
		_precision: function() {
			var t = this._precisionOf(this.options.step);
			return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t
		},
		_precisionOf: function(t) {
			var e = "" + t,
				i = e.indexOf(".");
			return -1 === i ? 0 : e.length - i - 1
		},
		_adjustValue: function(t) {
			var e, i, s = this.options;
			return e = null !== s.min ? s.min : 0, i = t - e, i = Math.round(i / s.step) * s.step, t = e + i, t = parseFloat(t.toFixed(this._precision())), null !== s.max && t > s.max ? s.max : null !== s.min && s.min > t ? s.min : t
		},
		_stop: function(t) {
			this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), this.counter = 0, this.spinning = !1, this._trigger("stop", t))
		},
		_setOption: function(t, e) {
			if ("culture" === t || "numberFormat" === t) {
				var i = this._parse(this.element.val());
				return this.options[t] = e, this.element.val(this._format(i)), void 0
			}("max" === t || "min" === t || "step" === t) && "string" == typeof e && (e = this._parse(e)), "icons" === t && (this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(e.up), this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(e.down)), this._super(t, e), "disabled" === t && (e ? (this.element.prop("disabled", !0), this.buttons.button("disable")) : (this.element.prop("disabled", !1), this.buttons.button("enable")))
		},
		_setOptions: e(function(t) {
			this._super(t), this._value(this.element.val())
		}),
		_parse: function(t) {
			return "string" == typeof t && "" !== t && (t = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(t, 10, this.options.culture) : +t), "" === t || isNaN(t) ? null : t
		},
		_format: function(t) {
			return "" === t ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(t, this.options.numberFormat, this.options.culture) : t
		},
		_refresh: function() {
			this.element.attr({
				"aria-valuemin": this.options.min,
				"aria-valuemax": this.options.max,
				"aria-valuenow": this._parse(this.element.val())
			})
		},
		_value: function(t, e) {
			var i;
			"" !== t && (i = this._parse(t), null !== i && (e || (i = this._adjustValue(i)), t = this._format(i))), this.element.val(t), this._refresh()
		},
		_destroy: function() {
			this.element.removeClass("ui-spinner-input").prop("disabled", !1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.uiSpinner.replaceWith(this.element)
		},
		stepUp: e(function(t) {
			this._stepUp(t)
		}),
		_stepUp: function(t) {
			this._start() && (this._spin((t || 1) * this.options.step), this._stop())
		},
		stepDown: e(function(t) {
			this._stepDown(t)
		}),
		_stepDown: function(t) {
			this._start() && (this._spin((t || 1) * -this.options.step), this._stop())
		},
		pageUp: e(function(t) {
			this._stepUp((t || 1) * this.options.page)
		}),
		pageDown: e(function(t) {
			this._stepDown((t || 1) * this.options.page)
		}),
		value: function(t) {
			return arguments.length ? (e(this._value).call(this, t), void 0) : this._parse(this.element.val())
		},
		widget: function() {
			return this.uiSpinner
		}
	})
})(jQuery);
(function(t, e) {
	function i() {
		return ++n
	}

	function s(t) {
		return t.hash.length > 1 && decodeURIComponent(t.href.replace(a, "")) === decodeURIComponent(location.href.replace(a, ""))
	}
	var n = 0,
		a = /#.*$/;
	t.widget("ui.tabs", {
		version: "1.10.3",
		delay: 300,
		options: {
			active: null,
			collapsible: !1,
			event: "click",
			heightStyle: "content",
			hide: null,
			show: null,
			activate: null,
			beforeActivate: null,
			beforeLoad: null,
			load: null
		},
		_create: function() {
			var e = this,
				i = this.options;
			this.running = !1, this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible", i.collapsible).delegate(".ui-tabs-nav > li", "mousedown" + this.eventNamespace, function(e) {
				t(this).is(".ui-state-disabled") && e.preventDefault()
			}).delegate(".ui-tabs-anchor", "focus" + this.eventNamespace, function() {
				t(this).closest("li").is(".ui-state-disabled") && this.blur()
			}), this._processTabs(), i.active = this._initialActive(), t.isArray(i.disabled) && (i.disabled = t.unique(i.disabled.concat(t.map(this.tabs.filter(".ui-state-disabled"), function(t) {
				return e.tabs.index(t)
			}))).sort()), this.active = this.options.active !== !1 && this.anchors.length ? this._findActive(i.active) : t(), this._refresh(), this.active.length && this.load(i.active)
		},
		_initialActive: function() {
			var i = this.options.active,
				s = this.options.collapsible,
				n = location.hash.substring(1);
			return null === i && (n && this.tabs.each(function(s, a) {
				return t(a).attr("aria-controls") === n ? (i = s, !1) : e
			}), null === i && (i = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), (null === i || -1 === i) && (i = this.tabs.length ? 0 : !1)), i !== !1 && (i = this.tabs.index(this.tabs.eq(i)), -1 === i && (i = s ? !1 : 0)), !s && i === !1 && this.anchors.length && (i = 0), i
		},
		_getCreateEventData: function() {
			return {
				tab: this.active,
				panel: this.active.length ? this._getPanelForTab(this.active) : t()
			}
		},
		_tabKeydown: function(i) {
			var s = t(this.document[0].activeElement).closest("li"),
				n = this.tabs.index(s),
				a = !0;
			if (!this._handlePageNav(i)) {
				switch (i.keyCode) {
					case t.ui.keyCode.RIGHT:
					case t.ui.keyCode.DOWN:
						n++;
						break;
					case t.ui.keyCode.UP:
					case t.ui.keyCode.LEFT:
						a = !1, n--;
						break;
					case t.ui.keyCode.END:
						n = this.anchors.length - 1;
						break;
					case t.ui.keyCode.HOME:
						n = 0;
						break;
					case t.ui.keyCode.SPACE:
						return i.preventDefault(), clearTimeout(this.activating), this._activate(n), e;
					case t.ui.keyCode.ENTER:
						return i.preventDefault(), clearTimeout(this.activating), this._activate(n === this.options.active ? !1 : n), e;
					default:
						return
				}
				i.preventDefault(), clearTimeout(this.activating), n = this._focusNextTab(n, a), i.ctrlKey || (s.attr("aria-selected", "false"), this.tabs.eq(n).attr("aria-selected", "true"), this.activating = this._delay(function() {
					this.option("active", n)
				}, this.delay))
			}
		},
		_panelKeydown: function(e) {
			this._handlePageNav(e) || e.ctrlKey && e.keyCode === t.ui.keyCode.UP && (e.preventDefault(), this.active.focus())
		},
		_handlePageNav: function(i) {
			return i.altKey && i.keyCode === t.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : i.altKey && i.keyCode === t.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : e
		},
		_findNextTab: function(e, i) {
			function s() {
				return e > n && (e = 0), 0 > e && (e = n), e
			}
			for (var n = this.tabs.length - 1; - 1 !== t.inArray(s(), this.options.disabled);) e = i ? e + 1 : e - 1;
			return e
		},
		_focusNextTab: function(t, e) {
			return t = this._findNextTab(t, e), this.tabs.eq(t).focus(), t
		},
		_setOption: function(t, i) {
			return "active" === t ? (this._activate(i), e) : "disabled" === t ? (this._setupDisabled(i), e) : (this._super(t, i), "collapsible" === t && (this.element.toggleClass("ui-tabs-collapsible", i), i || this.options.active !== !1 || this._activate(0)), "event" === t && this._setupEvents(i), "heightStyle" === t && this._setupHeightStyle(i), e)
		},
		_tabId: function(t) {
			return t.attr("aria-controls") || "ui-tabs-" + i()
		},
		_sanitizeSelector: function(t) {
			return t ? t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
		},
		refresh: function() {
			var e = this.options,
				i = this.tablist.children(":has(a[href])");
			e.disabled = t.map(i.filter(".ui-state-disabled"), function(t) {
				return i.index(t)
			}), this._processTabs(), e.active !== !1 && this.anchors.length ? this.active.length && !t.contains(this.tablist[0], this.active[0]) ? this.tabs.length === e.disabled.length ? (e.active = !1, this.active = t()) : this._activate(this._findNextTab(Math.max(0, e.active - 1), !1)) : e.active = this.tabs.index(this.active) : (e.active = !1, this.active = t()), this._refresh()
		},
		_refresh: function() {
			this._setupDisabled(this.options.disabled), this._setupEvents(this.options.event), this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({
				"aria-selected": "false",
				tabIndex: -1
			}), this.panels.not(this._getPanelForTab(this.active)).hide().attr({
				"aria-expanded": "false",
				"aria-hidden": "true"
			}), this.active.length ? (this.active.addClass("ui-tabs-active ui-state-active").attr({
				"aria-selected": "true",
				tabIndex: 0
			}), this._getPanelForTab(this.active).show().attr({
				"aria-expanded": "true",
				"aria-hidden": "false"
			})) : this.tabs.eq(0).attr("tabIndex", 0)
		},
		_processTabs: function() {
			var e = this;
			this.tablist = this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role", "tablist"), this.tabs = this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({
				role: "tab",
				tabIndex: -1
			}), this.anchors = this.tabs.map(function() {
				return t("a", this)[0]
			}).addClass("ui-tabs-anchor").attr({
				role: "presentation",
				tabIndex: -1
			}), this.panels = t(), this.anchors.each(function(i, n) {
				var a, o, r, h = t(n).uniqueId().attr("id"),
					l = t(n).closest("li"),
					u = l.attr("aria-controls");
				s(n) ? (a = n.hash, o = e.element.find(e._sanitizeSelector(a))) : (r = e._tabId(l), a = "#" + r, o = e.element.find(a), o.length || (o = e._createPanel(r), o.insertAfter(e.panels[i - 1] || e.tablist)), o.attr("aria-live", "polite")), o.length && (e.panels = e.panels.add(o)), u && l.data("ui-tabs-aria-controls", u), l.attr({
					"aria-controls": a.substring(1),
					"aria-labelledby": h
				}), o.attr("aria-labelledby", h)
			}), this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role", "tabpanel")
		},
		_getList: function() {
			return this.element.find("ol,ul").eq(0)
		},
		_createPanel: function(e) {
			return t("<div>").attr("id", e).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", !0)
		},
		_setupDisabled: function(e) {
			t.isArray(e) && (e.length ? e.length === this.anchors.length && (e = !0) : e = !1);
			for (var i, s = 0; i = this.tabs[s]; s++) e === !0 || -1 !== t.inArray(s, e) ? t(i).addClass("ui-state-disabled").attr("aria-disabled", "true") : t(i).removeClass("ui-state-disabled").removeAttr("aria-disabled");
			this.options.disabled = e
		},
		_setupEvents: function(e) {
			var i = {
				click: function(t) {
					t.preventDefault()
				}
			};
			e && t.each(e.split(" "), function(t, e) {
				i[e] = "_eventHandler"
			}), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(this.anchors, i), this._on(this.tabs, {
				keydown: "_tabKeydown"
			}), this._on(this.panels, {
				keydown: "_panelKeydown"
			}), this._focusable(this.tabs), this._hoverable(this.tabs)
		},
		_setupHeightStyle: function(e) {
			var i, s = this.element.parent();
			"fill" === e ? (i = s.height(), i -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function() {
				var e = t(this),
					s = e.css("position");
				"absolute" !== s && "fixed" !== s && (i -= e.outerHeight(!0))
			}), this.element.children().not(this.panels).each(function() {
				i -= t(this).outerHeight(!0)
			}), this.panels.each(function() {
				t(this).height(Math.max(0, i - t(this).innerHeight() + t(this).height()))
			}).css("overflow", "auto")) : "auto" === e && (i = 0, this.panels.each(function() {
				i = Math.max(i, t(this).height("").height())
			}).height(i))
		},
		_eventHandler: function(e) {
			var i = this.options,
				s = this.active,
				n = t(e.currentTarget),
				a = n.closest("li"),
				o = a[0] === s[0],
				r = o && i.collapsible,
				h = r ? t() : this._getPanelForTab(a),
				l = s.length ? this._getPanelForTab(s) : t(),
				u = {
					oldTab: s,
					oldPanel: l,
					newTab: r ? t() : a,
					newPanel: h
				};
			e.preventDefault(), a.hasClass("ui-state-disabled") || a.hasClass("ui-tabs-loading") || this.running || o && !i.collapsible || this._trigger("beforeActivate", e, u) === !1 || (i.active = r ? !1 : this.tabs.index(a), this.active = o ? t() : a, this.xhr && this.xhr.abort(), l.length || h.length || t.error("jQuery UI Tabs: Mismatching fragment identifier."), h.length && this.load(this.tabs.index(a), e), this._toggle(e, u))
		},
		_toggle: function(e, i) {
			function s() {
				a.running = !1, a._trigger("activate", e, i)
			}

			function n() {
				i.newTab.closest("li").addClass("ui-tabs-active ui-state-active"), o.length && a.options.show ? a._show(o, a.options.show, s) : (o.show(), s())
			}
			var a = this,
				o = i.newPanel,
				r = i.oldPanel;
			this.running = !0, r.length && this.options.hide ? this._hide(r, this.options.hide, function() {
				i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), n()
			}) : (i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), r.hide(), n()), r.attr({
				"aria-expanded": "false",
				"aria-hidden": "true"
			}), i.oldTab.attr("aria-selected", "false"), o.length && r.length ? i.oldTab.attr("tabIndex", -1) : o.length && this.tabs.filter(function() {
				return 0 === t(this).attr("tabIndex")
			}).attr("tabIndex", -1), o.attr({
				"aria-expanded": "true",
				"aria-hidden": "false"
			}), i.newTab.attr({
				"aria-selected": "true",
				tabIndex: 0
			})
		},
		_activate: function(e) {
			var i, s = this._findActive(e);
			s[0] !== this.active[0] && (s.length || (s = this.active), i = s.find(".ui-tabs-anchor")[0], this._eventHandler({
				target: i,
				currentTarget: i,
				preventDefault: t.noop
			}))
		},
		_findActive: function(e) {
			return e === !1 ? t() : this.tabs.eq(e)
		},
		_getIndex: function(t) {
			return "string" == typeof t && (t = this.anchors.index(this.anchors.filter("[href$='" + t + "']"))), t
		},
		_destroy: function() {
			this.xhr && this.xhr.abort(), this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"), this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"), this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(), this.tabs.add(this.panels).each(function() {
				t.data(this, "ui-tabs-destroy") ? t(this).remove() : t(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")
			}), this.tabs.each(function() {
				var e = t(this),
					i = e.data("ui-tabs-aria-controls");
				i ? e.attr("aria-controls", i).removeData("ui-tabs-aria-controls") : e.removeAttr("aria-controls")
			}), this.panels.show(), "content" !== this.options.heightStyle && this.panels.css("height", "")
		},
		enable: function(i) {
			var s = this.options.disabled;
			s !== !1 && (i === e ? s = !1 : (i = this._getIndex(i), s = t.isArray(s) ? t.map(s, function(t) {
				return t !== i ? t : null
			}) : t.map(this.tabs, function(t, e) {
				return e !== i ? e : null
			})), this._setupDisabled(s))
		},
		disable: function(i) {
			var s = this.options.disabled;
			if (s !== !0) {
				if (i === e) s = !0;
				else {
					if (i = this._getIndex(i), -1 !== t.inArray(i, s)) return;
					s = t.isArray(s) ? t.merge([i], s).sort() : [i]
				}
				this._setupDisabled(s)
			}
		},
		load: function(e, i) {
			e = this._getIndex(e);
			var n = this,
				a = this.tabs.eq(e),
				o = a.find(".ui-tabs-anchor"),
				r = this._getPanelForTab(a),
				h = {
					tab: a,
					panel: r
				};
			s(o[0]) || (this.xhr = t.ajax(this._ajaxSettings(o, i, h)), this.xhr && "canceled" !== this.xhr.statusText && (a.addClass("ui-tabs-loading"), r.attr("aria-busy", "true"), this.xhr.success(function(t) {
				setTimeout(function() {
					r.html(t), n._trigger("load", i, h)
				}, 1)
			}).complete(function(t, e) {
				setTimeout(function() {
					"abort" === e && n.panels.stop(!1, !0), a.removeClass("ui-tabs-loading"), r.removeAttr("aria-busy"), t === n.xhr && delete n.xhr
				}, 1)
			})))
		},
		_ajaxSettings: function(e, i, s) {
			var n = this;
			return {
				url: e.attr("href"),
				beforeSend: function(e, a) {
					return n._trigger("beforeLoad", i, t.extend({
						jqXHR: e,
						ajaxSettings: a
					}, s))
				}
			}
		},
		_getPanelForTab: function(e) {
			var i = t(e).attr("aria-controls");
			return this.element.find(this._sanitizeSelector("#" + i))
		}
	})
})(jQuery);
(function(t) {
	function e(e, i) {
		var s = (e.attr("aria-describedby") || "").split(/\s+/);
		s.push(i), e.data("ui-tooltip-id", i).attr("aria-describedby", t.trim(s.join(" ")))
	}

	function i(e) {
		var i = e.data("ui-tooltip-id"),
			s = (e.attr("aria-describedby") || "").split(/\s+/),
			n = t.inArray(i, s); - 1 !== n && s.splice(n, 1), e.removeData("ui-tooltip-id"), s = t.trim(s.join(" ")), s ? e.attr("aria-describedby", s) : e.removeAttr("aria-describedby")
	}
	var s = 0;
	t.widget("ui.tooltip", {
		version: "1.10.3",
		options: {
			content: function() {
				var e = t(this).attr("title") || "";
				return t("<a>").text(e).html()
			},
			hide: !0,
			items: "[title]:not([disabled])",
			position: {
				my: "left top+15",
				at: "left bottom",
				collision: "flipfit flip"
			},
			show: !0,
			tooltipClass: null,
			track: !1,
			close: null,
			open: null
		},
		_create: function() {
			this._on({
				mouseover: "open",
				focusin: "open"
			}), this.tooltips = {}, this.parents = {}, this.options.disabled && this._disable()
		},
		_setOption: function(e, i) {
			var s = this;
			return "disabled" === e ? (this[i ? "_disable" : "_enable"](), this.options[e] = i, void 0) : (this._super(e, i), "content" === e && t.each(this.tooltips, function(t, e) {
				s._updateContent(e)
			}), void 0)
		},
		_disable: function() {
			var e = this;
			t.each(this.tooltips, function(i, s) {
				var n = t.Event("blur");
				n.target = n.currentTarget = s[0], e.close(n, !0)
			}), this.element.find(this.options.items).addBack().each(function() {
				var e = t(this);
				e.is("[title]") && e.data("ui-tooltip-title", e.attr("title")).attr("title", "")
			})
		},
		_enable: function() {
			this.element.find(this.options.items).addBack().each(function() {
				var e = t(this);
				e.data("ui-tooltip-title") && e.attr("title", e.data("ui-tooltip-title"))
			})
		},
		open: function(e) {
			var i = this,
				s = t(e ? e.target : this.element).closest(this.options.items);
			s.length && !s.data("ui-tooltip-id") && (s.attr("title") && s.data("ui-tooltip-title", s.attr("title")), s.data("ui-tooltip-open", !0), e && "mouseover" === e.type && s.parents().each(function() {
				var e, s = t(this);
				s.data("ui-tooltip-open") && (e = t.Event("blur"), e.target = e.currentTarget = this, i.close(e, !0)), s.attr("title") && (s.uniqueId(), i.parents[this.id] = {
					element: this,
					title: s.attr("title")
				}, s.attr("title", ""))
			}), this._updateContent(s, e))
		},
		_updateContent: function(t, e) {
			var i, s = this.options.content,
				n = this,
				a = e ? e.type : null;
			return "string" == typeof s ? this._open(e, t, s) : (i = s.call(t[0], function(i) {
				t.data("ui-tooltip-open") && n._delay(function() {
					e && (e.type = a), this._open(e, t, i)
				})
			}), i && this._open(e, t, i), void 0)
		},
		_open: function(i, s, n) {
			function a(t) {
				l.of = t, o.is(":hidden") || o.position(l)
			}
			var o, r, h, l = t.extend({}, this.options.position);
			if (n) {
				if (o = this._find(s), o.length) return o.find(".ui-tooltip-content").html(n), void 0;
				s.is("[title]") && (i && "mouseover" === i.type ? s.attr("title", "") : s.removeAttr("title")), o = this._tooltip(s), e(s, o.attr("id")), o.find(".ui-tooltip-content").html(n), this.options.track && i && /^mouse/.test(i.type) ? (this._on(this.document, {
					mousemove: a
				}), a(i)) : o.position(t.extend({
					of: s
				}, this.options.position)), o.hide(), this._show(o, this.options.show), this.options.show && this.options.show.delay && (h = this.delayedShow = setInterval(function() {
					o.is(":visible") && (a(l.of), clearInterval(h))
				}, t.fx.interval)), this._trigger("open", i, {
					tooltip: o
				}), r = {
					keyup: function(e) {
						if (e.keyCode === t.ui.keyCode.ESCAPE) {
							var i = t.Event(e);
							i.currentTarget = s[0], this.close(i, !0)
						}
					},
					remove: function() {
						this._removeTooltip(o)
					}
				}, i && "mouseover" !== i.type || (r.mouseleave = "close"), i && "focusin" !== i.type || (r.focusout = "close"), this._on(!0, s, r)
			}
		},
		close: function(e) {
			var s = this,
				n = t(e ? e.currentTarget : this.element),
				a = this._find(n);
			this.closing || (clearInterval(this.delayedShow), n.data("ui-tooltip-title") && n.attr("title", n.data("ui-tooltip-title")), i(n), a.stop(!0), this._hide(a, this.options.hide, function() {
				s._removeTooltip(t(this))
			}), n.removeData("ui-tooltip-open"), this._off(n, "mouseleave focusout keyup"), n[0] !== this.element[0] && this._off(n, "remove"), this._off(this.document, "mousemove"), e && "mouseleave" === e.type && t.each(this.parents, function(e, i) {
				t(i.element).attr("title", i.title), delete s.parents[e]
			}), this.closing = !0, this._trigger("close", e, {
				tooltip: a
			}), this.closing = !1)
		},
		_tooltip: function(e) {
			var i = "ui-tooltip-" + s++,
				n = t("<div>").attr({
					id: i,
					role: "tooltip"
				}).addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content " + (this.options.tooltipClass || ""));
			return t("<div>").addClass("ui-tooltip-content").appendTo(n), n.appendTo(this.document[0].body), this.tooltips[i] = e, n
		},
		_find: function(e) {
			var i = e.data("ui-tooltip-id");
			return i ? t("#" + i) : t()
		},
		_removeTooltip: function(t) {
			t.remove(), delete this.tooltips[t.attr("id")]
		},
		_destroy: function() {
			var e = this;
			t.each(this.tooltips, function(i, s) {
				var n = t.Event("blur");
				n.target = n.currentTarget = s[0], e.close(n, !0), t("#" + i).remove(), s.data("ui-tooltip-title") && (s.attr("title", s.data("ui-tooltip-title")), s.removeData("ui-tooltip-title"))
			})
		}
	})
})(jQuery);
(function(t, e) {
	var i = "ui-effects-";
	t.effects = {
			effect: {}
		},
		function(t, e) {
			function i(t, e, i) {
				var s = u[e.type] || {};
				return null == t ? i || !e.def ? null : e.def : (t = s.floor ? ~~t : parseFloat(t), isNaN(t) ? e.def : s.mod ? (t + s.mod) % s.mod : 0 > t ? 0 : t > s.max ? s.max : t)
			}

			function s(i) {
				var s = l(),
					n = s._rgba = [];
				return i = i.toLowerCase(), f(h, function(t, a) {
					var o, r = a.re.exec(i),
						h = r && a.parse(r),
						l = a.space || "rgba";
					return h ? (o = s[l](h), s[c[l].cache] = o[c[l].cache], n = s._rgba = o._rgba, !1) : e
				}), n.length ? ("0,0,0,0" === n.join() && t.extend(n, a.transparent), s) : a[i]
			}

			function n(t, e, i) {
				return i = (i + 1) % 1, 1 > 6 * i ? t + 6 * (e - t) * i : 1 > 2 * i ? e : 2 > 3 * i ? t + 6 * (e - t) * (2 / 3 - i) : t
			}
			var a, o = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
				r = /^([\-+])=\s*(\d+\.?\d*)/,
				h = [{
					re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
					parse: function(t) {
						return [t[1], t[2], t[3], t[4]]
					}
				}, {
					re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
					parse: function(t) {
						return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]]
					}
				}, {
					re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
					parse: function(t) {
						return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)]
					}
				}, {
					re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
					parse: function(t) {
						return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)]
					}
				}, {
					re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
					space: "hsla",
					parse: function(t) {
						return [t[1], t[2] / 100, t[3] / 100, t[4]]
					}
				}],
				l = t.Color = function(e, i, s, n) {
					return new t.Color.fn.parse(e, i, s, n)
				},
				c = {
					rgba: {
						props: {
							red: {
								idx: 0,
								type: "byte"
							},
							green: {
								idx: 1,
								type: "byte"
							},
							blue: {
								idx: 2,
								type: "byte"
							}
						}
					},
					hsla: {
						props: {
							hue: {
								idx: 0,
								type: "degrees"
							},
							saturation: {
								idx: 1,
								type: "percent"
							},
							lightness: {
								idx: 2,
								type: "percent"
							}
						}
					}
				},
				u = {
					"byte": {
						floor: !0,
						max: 255
					},
					percent: {
						max: 1
					},
					degrees: {
						mod: 360,
						floor: !0
					}
				},
				d = l.support = {},
				p = t("<p>")[0],
				f = t.each;
			p.style.cssText = "background-color:rgba(1,1,1,.5)", d.rgba = p.style.backgroundColor.indexOf("rgba") > -1, f(c, function(t, e) {
				e.cache = "_" + t, e.props.alpha = {
					idx: 3,
					type: "percent",
					def: 1
				}
			}), l.fn = t.extend(l.prototype, {
				parse: function(n, o, r, h) {
					if (n === e) return this._rgba = [null, null, null, null], this;
					(n.jquery || n.nodeType) && (n = t(n).css(o), o = e);
					var u = this,
						d = t.type(n),
						p = this._rgba = [];
					return o !== e && (n = [n, o, r, h], d = "array"), "string" === d ? this.parse(s(n) || a._default) : "array" === d ? (f(c.rgba.props, function(t, e) {
						p[e.idx] = i(n[e.idx], e)
					}), this) : "object" === d ? (n instanceof l ? f(c, function(t, e) {
						n[e.cache] && (u[e.cache] = n[e.cache].slice())
					}) : f(c, function(e, s) {
						var a = s.cache;
						f(s.props, function(t, e) {
							if (!u[a] && s.to) {
								if ("alpha" === t || null == n[t]) return;
								u[a] = s.to(u._rgba)
							}
							u[a][e.idx] = i(n[t], e, !0)
						}), u[a] && 0 > t.inArray(null, u[a].slice(0, 3)) && (u[a][3] = 1, s.from && (u._rgba = s.from(u[a])))
					}), this) : e
				},
				is: function(t) {
					var i = l(t),
						s = !0,
						n = this;
					return f(c, function(t, a) {
						var o, r = i[a.cache];
						return r && (o = n[a.cache] || a.to && a.to(n._rgba) || [], f(a.props, function(t, i) {
							return null != r[i.idx] ? s = r[i.idx] === o[i.idx] : e
						})), s
					}), s
				},
				_space: function() {
					var t = [],
						e = this;
					return f(c, function(i, s) {
						e[s.cache] && t.push(i)
					}), t.pop()
				},
				transition: function(t, e) {
					var s = l(t),
						n = s._space(),
						a = c[n],
						o = 0 === this.alpha() ? l("transparent") : this,
						r = o[a.cache] || a.to(o._rgba),
						h = r.slice();
					return s = s[a.cache], f(a.props, function(t, n) {
						var a = n.idx,
							o = r[a],
							l = s[a],
							c = u[n.type] || {};
						null !== l && (null === o ? h[a] = l : (c.mod && (l - o > c.mod / 2 ? o += c.mod : o - l > c.mod / 2 && (o -= c.mod)), h[a] = i((l - o) * e + o, n)))
					}), this[n](h)
				},
				blend: function(e) {
					if (1 === this._rgba[3]) return this;
					var i = this._rgba.slice(),
						s = i.pop(),
						n = l(e)._rgba;
					return l(t.map(i, function(t, e) {
						return (1 - s) * n[e] + s * t
					}))
				},
				toRgbaString: function() {
					var e = "rgba(",
						i = t.map(this._rgba, function(t, e) {
							return null == t ? e > 2 ? 1 : 0 : t
						});
					return 1 === i[3] && (i.pop(), e = "rgb("), e + i.join() + ")"
				},
				toHslaString: function() {
					var e = "hsla(",
						i = t.map(this.hsla(), function(t, e) {
							return null == t && (t = e > 2 ? 1 : 0), e && 3 > e && (t = Math.round(100 * t) + "%"), t
						});
					return 1 === i[3] && (i.pop(), e = "hsl("), e + i.join() + ")"
				},
				toHexString: function(e) {
					var i = this._rgba.slice(),
						s = i.pop();
					return e && i.push(~~(255 * s)), "#" + t.map(i, function(t) {
						return t = (t || 0).toString(16), 1 === t.length ? "0" + t : t
					}).join("")
				},
				toString: function() {
					return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
				}
			}), l.fn.parse.prototype = l.fn, c.hsla.to = function(t) {
				if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
				var e, i, s = t[0] / 255,
					n = t[1] / 255,
					a = t[2] / 255,
					o = t[3],
					r = Math.max(s, n, a),
					h = Math.min(s, n, a),
					l = r - h,
					c = r + h,
					u = .5 * c;
				return e = h === r ? 0 : s === r ? 60 * (n - a) / l + 360 : n === r ? 60 * (a - s) / l + 120 : 60 * (s - n) / l + 240, i = 0 === l ? 0 : .5 >= u ? l / c : l / (2 - c), [Math.round(e) % 360, i, u, null == o ? 1 : o]
			}, c.hsla.from = function(t) {
				if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
				var e = t[0] / 360,
					i = t[1],
					s = t[2],
					a = t[3],
					o = .5 >= s ? s * (1 + i) : s + i - s * i,
					r = 2 * s - o;
				return [Math.round(255 * n(r, o, e + 1 / 3)), Math.round(255 * n(r, o, e)), Math.round(255 * n(r, o, e - 1 / 3)), a]
			}, f(c, function(s, n) {
				var a = n.props,
					o = n.cache,
					h = n.to,
					c = n.from;
				l.fn[s] = function(s) {
					if (h && !this[o] && (this[o] = h(this._rgba)), s === e) return this[o].slice();
					var n, r = t.type(s),
						u = "array" === r || "object" === r ? s : arguments,
						d = this[o].slice();
					return f(a, function(t, e) {
						var s = u["object" === r ? t : e.idx];
						null == s && (s = d[e.idx]), d[e.idx] = i(s, e)
					}), c ? (n = l(c(d)), n[o] = d, n) : l(d)
				}, f(a, function(e, i) {
					l.fn[e] || (l.fn[e] = function(n) {
						var a, o = t.type(n),
							h = "alpha" === e ? this._hsla ? "hsla" : "rgba" : s,
							l = this[h](),
							c = l[i.idx];
						return "undefined" === o ? c : ("function" === o && (n = n.call(this, c), o = t.type(n)), null == n && i.empty ? this : ("string" === o && (a = r.exec(n), a && (n = c + parseFloat(a[2]) * ("+" === a[1] ? 1 : -1))), l[i.idx] = n, this[h](l)))
					})
				})
			}), l.hook = function(e) {
				var i = e.split(" ");
				f(i, function(e, i) {
					t.cssHooks[i] = {
						set: function(e, n) {
							var a, o, r = "";
							if ("transparent" !== n && ("string" !== t.type(n) || (a = s(n)))) {
								if (n = l(a || n), !d.rgba && 1 !== n._rgba[3]) {
									for (o = "backgroundColor" === i ? e.parentNode : e;
										("" === r || "transparent" === r) && o && o.style;) try {
										r = t.css(o, "backgroundColor"), o = o.parentNode
									} catch (h) {}
									n = n.blend(r && "transparent" !== r ? r : "_default")
								}
								n = n.toRgbaString()
							}
							try {
								e.style[i] = n
							} catch (h) {}
						}
					}, t.fx.step[i] = function(e) {
						e.colorInit || (e.start = l(e.elem, i), e.end = l(e.end), e.colorInit = !0), t.cssHooks[i].set(e.elem, e.start.transition(e.end, e.pos))
					}
				})
			}, l.hook(o), t.cssHooks.borderColor = {
				expand: function(t) {
					var e = {};
					return f(["Top", "Right", "Bottom", "Left"], function(i, s) {
						e["border" + s + "Color"] = t
					}), e
				}
			}, a = t.Color.names = {
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
		}(jQuery),
		function() {
			function i(e) {
				var i, s, n = e.ownerDocument.defaultView ? e.ownerDocument.defaultView.getComputedStyle(e, null) : e.currentStyle,
					a = {};
				if (n && n.length && n[0] && n[n[0]])
					for (s = n.length; s--;) i = n[s], "string" == typeof n[i] && (a[t.camelCase(i)] = n[i]);
				else
					for (i in n) "string" == typeof n[i] && (a[i] = n[i]);
				return a
			}

			function s(e, i) {
				var s, n, o = {};
				for (s in i) n = i[s], e[s] !== n && (a[s] || (t.fx.step[s] || !isNaN(parseFloat(n))) && (o[s] = n));
				return o
			}
			var n = ["add", "remove", "toggle"],
				a = {
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
			t.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(e, i) {
				t.fx.step[i] = function(t) {
					("none" !== t.end && !t.setAttr || 1 === t.pos && !t.setAttr) && (jQuery.style(t.elem, i, t.end), t.setAttr = !0)
				}
			}), t.fn.addBack || (t.fn.addBack = function(t) {
				return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
			}), t.effects.animateClass = function(e, a, o, r) {
				var h = t.speed(a, o, r);
				return this.queue(function() {
					var a, o = t(this),
						r = o.attr("class") || "",
						l = h.children ? o.find("*").addBack() : o;
					l = l.map(function() {
						var e = t(this);
						return {
							el: e,
							start: i(this)
						}
					}), a = function() {
						t.each(n, function(t, i) {
							e[i] && o[i + "Class"](e[i])
						})
					}, a(), l = l.map(function() {
						return this.end = i(this.el[0]), this.diff = s(this.start, this.end), this
					}), o.attr("class", r), l = l.map(function() {
						var e = this,
							i = t.Deferred(),
							s = t.extend({}, h, {
								queue: !1,
								complete: function() {
									i.resolve(e)
								}
							});
						return this.el.animate(this.diff, s), i.promise()
					}), t.when.apply(t, l.get()).done(function() {
						a(), t.each(arguments, function() {
							var e = this.el;
							t.each(this.diff, function(t) {
								e.css(t, "")
							})
						}), h.complete.call(o[0])
					})
				})
			}, t.fn.extend({
				addClass: function(e) {
					return function(i, s, n, a) {
						return s ? t.effects.animateClass.call(this, {
							add: i
						}, s, n, a) : e.apply(this, arguments)
					}
				}(t.fn.addClass),
				removeClass: function(e) {
					return function(i, s, n, a) {
						return arguments.length > 1 ? t.effects.animateClass.call(this, {
							remove: i
						}, s, n, a) : e.apply(this, arguments)
					}
				}(t.fn.removeClass),
				toggleClass: function(i) {
					return function(s, n, a, o, r) {
						return "boolean" == typeof n || n === e ? a ? t.effects.animateClass.call(this, n ? {
							add: s
						} : {
							remove: s
						}, a, o, r) : i.apply(this, arguments) : t.effects.animateClass.call(this, {
							toggle: s
						}, n, a, o)
					}
				}(t.fn.toggleClass),
				switchClass: function(e, i, s, n, a) {
					return t.effects.animateClass.call(this, {
						add: i,
						remove: e
					}, s, n, a)
				}
			})
		}(),
		function() {
			function s(e, i, s, n) {
				return t.isPlainObject(e) && (i = e, e = e.effect), e = {
					effect: e
				}, null == i && (i = {}), t.isFunction(i) && (n = i, s = null, i = {}), ("number" == typeof i || t.fx.speeds[i]) && (n = s, s = i, i = {}), t.isFunction(s) && (n = s, s = null), i && t.extend(e, i), s = s || i.duration, e.duration = t.fx.off ? 0 : "number" == typeof s ? s : s in t.fx.speeds ? t.fx.speeds[s] : t.fx.speeds._default, e.complete = n || i.complete, e
			}

			function n(e) {
				return !e || "number" == typeof e || t.fx.speeds[e] ? !0 : "string" != typeof e || t.effects.effect[e] ? t.isFunction(e) ? !0 : "object" != typeof e || e.effect ? !1 : !0 : !0
			}
			t.extend(t.effects, {
				version: "1.10.3",
				save: function(t, e) {
					for (var s = 0; e.length > s; s++) null !== e[s] && t.data(i + e[s], t[0].style[e[s]])
				},
				restore: function(t, s) {
					var n, a;
					for (a = 0; s.length > a; a++) null !== s[a] && (n = t.data(i + s[a]), n === e && (n = ""), t.css(s[a], n))
				},
				setMode: function(t, e) {
					return "toggle" === e && (e = t.is(":hidden") ? "show" : "hide"), e
				},
				getBaseline: function(t, e) {
					var i, s;
					switch (t[0]) {
						case "top":
							i = 0;
							break;
						case "middle":
							i = .5;
							break;
						case "bottom":
							i = 1;
							break;
						default:
							i = t[0] / e.height
					}
					switch (t[1]) {
						case "left":
							s = 0;
							break;
						case "center":
							s = .5;
							break;
						case "right":
							s = 1;
							break;
						default:
							s = t[1] / e.width
					}
					return {
						x: s,
						y: i
					}
				},
				createWrapper: function(e) {
					if (e.parent().is(".ui-effects-wrapper")) return e.parent();
					var i = {
							width: e.outerWidth(!0),
							height: e.outerHeight(!0),
							"float": e.css("float")
						},
						s = t("<div></div>").addClass("ui-effects-wrapper").css({
							fontSize: "100%",
							background: "transparent",
							border: "none",
							margin: 0,
							padding: 0
						}),
						n = {
							width: e.width(),
							height: e.height()
						},
						a = document.activeElement;
					try {
						a.id
					} catch (o) {
						a = document.body
					}
					return e.wrap(s), (e[0] === a || t.contains(e[0], a)) && t(a).focus(), s = e.parent(), "static" === e.css("position") ? (s.css({
						position: "relative"
					}), e.css({
						position: "relative"
					})) : (t.extend(i, {
						position: e.css("position"),
						zIndex: e.css("z-index")
					}), t.each(["top", "left", "bottom", "right"], function(t, s) {
						i[s] = e.css(s), isNaN(parseInt(i[s], 10)) && (i[s] = "auto")
					}), e.css({
						position: "relative",
						top: 0,
						left: 0,
						right: "auto",
						bottom: "auto"
					})), e.css(n), s.css(i).show()
				},
				removeWrapper: function(e) {
					var i = document.activeElement;
					return e.parent().is(".ui-effects-wrapper") && (e.parent().replaceWith(e), (e[0] === i || t.contains(e[0], i)) && t(i).focus()), e
				},
				setTransition: function(e, i, s, n) {
					return n = n || {}, t.each(i, function(t, i) {
						var a = e.cssUnit(i);
						a[0] > 0 && (n[i] = a[0] * s + a[1])
					}), n
				}
			}), t.fn.extend({
				effect: function() {
					function e(e) {
						function s() {
							t.isFunction(a) && a.call(n[0]), t.isFunction(e) && e()
						}
						var n = t(this),
							a = i.complete,
							r = i.mode;
						(n.is(":hidden") ? "hide" === r : "show" === r) ? (n[r](), s()) : o.call(n[0], i, s)
					}
					var i = s.apply(this, arguments),
						n = i.mode,
						a = i.queue,
						o = t.effects.effect[i.effect];
					return t.fx.off || !o ? n ? this[n](i.duration, i.complete) : this.each(function() {
						i.complete && i.complete.call(this)
					}) : a === !1 ? this.each(e) : this.queue(a || "fx", e)
				},
				show: function(t) {
					return function(e) {
						if (n(e)) return t.apply(this, arguments);
						var i = s.apply(this, arguments);
						return i.mode = "show", this.effect.call(this, i)
					}
				}(t.fn.show),
				hide: function(t) {
					return function(e) {
						if (n(e)) return t.apply(this, arguments);
						var i = s.apply(this, arguments);
						return i.mode = "hide", this.effect.call(this, i)
					}
				}(t.fn.hide),
				toggle: function(t) {
					return function(e) {
						if (n(e) || "boolean" == typeof e) return t.apply(this, arguments);
						var i = s.apply(this, arguments);
						return i.mode = "toggle", this.effect.call(this, i)
					}
				}(t.fn.toggle),
				cssUnit: function(e) {
					var i = this.css(e),
						s = [];
					return t.each(["em", "px", "%", "pt"], function(t, e) {
						i.indexOf(e) > 0 && (s = [parseFloat(i), e])
					}), s
				}
			})
		}(),
		function() {
			var e = {};
			t.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(t, i) {
				e[i] = function(e) {
					return Math.pow(e, t + 2)
				}
			}), t.extend(e, {
				Sine: function(t) {
					return 1 - Math.cos(t * Math.PI / 2)
				},
				Circ: function(t) {
					return 1 - Math.sqrt(1 - t * t)
				},
				Elastic: function(t) {
					return 0 === t || 1 === t ? t : -Math.pow(2, 8 * (t - 1)) * Math.sin((80 * (t - 1) - 7.5) * Math.PI / 15)
				},
				Back: function(t) {
					return t * t * (3 * t - 2)
				},
				Bounce: function(t) {
					for (var e, i = 4;
						((e = Math.pow(2, --i)) - 1) / 11 > t;);
					return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2)
				}
			}), t.each(e, function(e, i) {
				t.easing["easeIn" + e] = i, t.easing["easeOut" + e] = function(t) {
					return 1 - i(1 - t)
				}, t.easing["easeInOut" + e] = function(t) {
					return .5 > t ? i(2 * t) / 2 : 1 - i(-2 * t + 2) / 2
				}
			})
		}()
})(jQuery);
(function(t) {
	var e = /up|down|vertical/,
		i = /up|left|vertical|horizontal/;
	t.effects.effect.blind = function(s, n) {
		var a, o, r, h = t(this),
			l = ["position", "top", "bottom", "left", "right", "height", "width"],
			c = t.effects.setMode(h, s.mode || "hide"),
			u = s.direction || "up",
			d = e.test(u),
			p = d ? "height" : "width",
			f = d ? "top" : "left",
			m = i.test(u),
			g = {},
			v = "show" === c;
		h.parent().is(".ui-effects-wrapper") ? t.effects.save(h.parent(), l) : t.effects.save(h, l), h.show(), a = t.effects.createWrapper(h).css({
			overflow: "hidden"
		}), o = a[p](), r = parseFloat(a.css(f)) || 0, g[p] = v ? o : 0, m || (h.css(d ? "bottom" : "right", 0).css(d ? "top" : "left", "auto").css({
			position: "absolute"
		}), g[f] = v ? r : o + r), v && (a.css(p, 0), m || a.css(f, r + o)), a.animate(g, {
			duration: s.duration,
			easing: s.easing,
			queue: !1,
			complete: function() {
				"hide" === c && h.hide(), t.effects.restore(h, l), t.effects.removeWrapper(h), n()
			}
		})
	}
})(jQuery);
(function(t) {
	t.effects.effect.bounce = function(e, i) {
		var s, n, a, o = t(this),
			r = ["position", "top", "bottom", "left", "right", "height", "width"],
			h = t.effects.setMode(o, e.mode || "effect"),
			l = "hide" === h,
			c = "show" === h,
			u = e.direction || "up",
			d = e.distance,
			p = e.times || 5,
			f = 2 * p + (c || l ? 1 : 0),
			m = e.duration / f,
			g = e.easing,
			v = "up" === u || "down" === u ? "top" : "left",
			_ = "up" === u || "left" === u,
			b = o.queue(),
			y = b.length;
		for ((c || l) && r.push("opacity"), t.effects.save(o, r), o.show(), t.effects.createWrapper(o), d || (d = o["top" === v ? "outerHeight" : "outerWidth"]() / 3), c && (a = {
				opacity: 1
			}, a[v] = 0, o.css("opacity", 0).css(v, _ ? 2 * -d : 2 * d).animate(a, m, g)), l && (d /= Math.pow(2, p - 1)), a = {}, a[v] = 0, s = 0; p > s; s++) n = {}, n[v] = (_ ? "-=" : "+=") + d, o.animate(n, m, g).animate(a, m, g), d = l ? 2 * d : d / 2;
		l && (n = {
			opacity: 0
		}, n[v] = (_ ? "-=" : "+=") + d, o.animate(n, m, g)), o.queue(function() {
			l && o.hide(), t.effects.restore(o, r), t.effects.removeWrapper(o), i()
		}), y > 1 && b.splice.apply(b, [1, 0].concat(b.splice(y, f + 1))), o.dequeue()
	}
})(jQuery);
(function(t) {
	t.effects.effect.clip = function(e, i) {
		var s, n, a, o = t(this),
			r = ["position", "top", "bottom", "left", "right", "height", "width"],
			h = t.effects.setMode(o, e.mode || "hide"),
			l = "show" === h,
			c = e.direction || "vertical",
			u = "vertical" === c,
			d = u ? "height" : "width",
			p = u ? "top" : "left",
			f = {};
		t.effects.save(o, r), o.show(), s = t.effects.createWrapper(o).css({
			overflow: "hidden"
		}), n = "IMG" === o[0].tagName ? s : o, a = n[d](), l && (n.css(d, 0), n.css(p, a / 2)), f[d] = l ? a : 0, f[p] = l ? 0 : a / 2, n.animate(f, {
			queue: !1,
			duration: e.duration,
			easing: e.easing,
			complete: function() {
				l || o.hide(), t.effects.restore(o, r), t.effects.removeWrapper(o), i()
			}
		})
	}
})(jQuery);
(function(t) {
	t.effects.effect.drop = function(e, i) {
		var s, n = t(this),
			a = ["position", "top", "bottom", "left", "right", "opacity", "height", "width"],
			o = t.effects.setMode(n, e.mode || "hide"),
			r = "show" === o,
			h = e.direction || "left",
			l = "up" === h || "down" === h ? "top" : "left",
			c = "up" === h || "left" === h ? "pos" : "neg",
			u = {
				opacity: r ? 1 : 0
			};
		t.effects.save(n, a), n.show(), t.effects.createWrapper(n), s = e.distance || n["top" === l ? "outerHeight" : "outerWidth"](!0) / 2, r && n.css("opacity", 0).css(l, "pos" === c ? -s : s), u[l] = (r ? "pos" === c ? "+=" : "-=" : "pos" === c ? "-=" : "+=") + s, n.animate(u, {
			queue: !1,
			duration: e.duration,
			easing: e.easing,
			complete: function() {
				"hide" === o && n.hide(), t.effects.restore(n, a), t.effects.removeWrapper(n), i()
			}
		})
	}
})(jQuery);
(function(t) {
	t.effects.effect.explode = function(e, i) {
		function s() {
			b.push(this), b.length === u * d && n()
		}

		function n() {
			p.css({
				visibility: "visible"
			}), t(b).remove(), m || p.hide(), i()
		}
		var a, o, r, h, l, c, u = e.pieces ? Math.round(Math.sqrt(e.pieces)) : 3,
			d = u,
			p = t(this),
			f = t.effects.setMode(p, e.mode || "hide"),
			m = "show" === f,
			g = p.show().css("visibility", "hidden").offset(),
			v = Math.ceil(p.outerWidth() / d),
			_ = Math.ceil(p.outerHeight() / u),
			b = [];
		for (a = 0; u > a; a++)
			for (h = g.top + a * _, c = a - (u - 1) / 2, o = 0; d > o; o++) r = g.left + o * v, l = o - (d - 1) / 2, p.clone().appendTo("body").wrap("<div></div>").css({
				position: "absolute",
				visibility: "visible",
				left: -o * v,
				top: -a * _
			}).parent().addClass("ui-effects-explode").css({
				position: "absolute",
				overflow: "hidden",
				width: v,
				height: _,
				left: r + (m ? l * v : 0),
				top: h + (m ? c * _ : 0),
				opacity: m ? 0 : 1
			}).animate({
				left: r + (m ? 0 : l * v),
				top: h + (m ? 0 : c * _),
				opacity: m ? 1 : 0
			}, e.duration || 500, e.easing, s)
	}
})(jQuery);
(function(t) {
	t.effects.effect.fade = function(e, i) {
		var s = t(this),
			n = t.effects.setMode(s, e.mode || "toggle");
		s.animate({
			opacity: n
		}, {
			queue: !1,
			duration: e.duration,
			easing: e.easing,
			complete: i
		})
	}
})(jQuery);
(function(t) {
	t.effects.effect.fold = function(e, i) {
		var s, n, a = t(this),
			o = ["position", "top", "bottom", "left", "right", "height", "width"],
			r = t.effects.setMode(a, e.mode || "hide"),
			h = "show" === r,
			l = "hide" === r,
			c = e.size || 15,
			u = /([0-9]+)%/.exec(c),
			d = !!e.horizFirst,
			p = h !== d,
			f = p ? ["width", "height"] : ["height", "width"],
			m = e.duration / 2,
			g = {},
			v = {};
		t.effects.save(a, o), a.show(), s = t.effects.createWrapper(a).css({
			overflow: "hidden"
		}), n = p ? [s.width(), s.height()] : [s.height(), s.width()], u && (c = parseInt(u[1], 10) / 100 * n[l ? 0 : 1]), h && s.css(d ? {
			height: 0,
			width: c
		} : {
			height: c,
			width: 0
		}), g[f[0]] = h ? n[0] : c, v[f[1]] = h ? n[1] : 0, s.animate(g, m, e.easing).animate(v, m, e.easing, function() {
			l && a.hide(), t.effects.restore(a, o), t.effects.removeWrapper(a), i()
		})
	}
})(jQuery);
(function(t) {
	t.effects.effect.highlight = function(e, i) {
		var s = t(this),
			n = ["backgroundImage", "backgroundColor", "opacity"],
			a = t.effects.setMode(s, e.mode || "show"),
			o = {
				backgroundColor: s.css("backgroundColor")
			};
		"hide" === a && (o.opacity = 0), t.effects.save(s, n), s.show().css({
			backgroundImage: "none",
			backgroundColor: e.color || "#ffff99"
		}).animate(o, {
			queue: !1,
			duration: e.duration,
			easing: e.easing,
			complete: function() {
				"hide" === a && s.hide(), t.effects.restore(s, n), i()
			}
		})
	}
})(jQuery);
(function(t) {
	t.effects.effect.pulsate = function(e, i) {
		var s, n = t(this),
			a = t.effects.setMode(n, e.mode || "show"),
			o = "show" === a,
			r = "hide" === a,
			h = o || "hide" === a,
			l = 2 * (e.times || 5) + (h ? 1 : 0),
			c = e.duration / l,
			u = 0,
			d = n.queue(),
			p = d.length;
		for ((o || !n.is(":visible")) && (n.css("opacity", 0).show(), u = 1), s = 1; l > s; s++) n.animate({
			opacity: u
		}, c, e.easing), u = 1 - u;
		n.animate({
			opacity: u
		}, c, e.easing), n.queue(function() {
			r && n.hide(), i()
		}), p > 1 && d.splice.apply(d, [1, 0].concat(d.splice(p, l + 1))), n.dequeue()
	}
})(jQuery);
(function(t) {
	t.effects.effect.puff = function(e, i) {
		var s = t(this),
			n = t.effects.setMode(s, e.mode || "hide"),
			a = "hide" === n,
			o = parseInt(e.percent, 10) || 150,
			r = o / 100,
			h = {
				height: s.height(),
				width: s.width(),
				outerHeight: s.outerHeight(),
				outerWidth: s.outerWidth()
			};
		t.extend(e, {
			effect: "scale",
			queue: !1,
			fade: !0,
			mode: n,
			complete: i,
			percent: a ? o : 100,
			from: a ? h : {
				height: h.height * r,
				width: h.width * r,
				outerHeight: h.outerHeight * r,
				outerWidth: h.outerWidth * r
			}
		}), s.effect(e)
	}, t.effects.effect.scale = function(e, i) {
		var s = t(this),
			n = t.extend(!0, {}, e),
			a = t.effects.setMode(s, e.mode || "effect"),
			o = parseInt(e.percent, 10) || (0 === parseInt(e.percent, 10) ? 0 : "hide" === a ? 0 : 100),
			r = e.direction || "both",
			h = e.origin,
			l = {
				height: s.height(),
				width: s.width(),
				outerHeight: s.outerHeight(),
				outerWidth: s.outerWidth()
			},
			c = {
				y: "horizontal" !== r ? o / 100 : 1,
				x: "vertical" !== r ? o / 100 : 1
			};
		n.effect = "size", n.queue = !1, n.complete = i, "effect" !== a && (n.origin = h || ["middle", "center"], n.restore = !0), n.from = e.from || ("show" === a ? {
			height: 0,
			width: 0,
			outerHeight: 0,
			outerWidth: 0
		} : l), n.to = {
			height: l.height * c.y,
			width: l.width * c.x,
			outerHeight: l.outerHeight * c.y,
			outerWidth: l.outerWidth * c.x
		}, n.fade && ("show" === a && (n.from.opacity = 0, n.to.opacity = 1), "hide" === a && (n.from.opacity = 1, n.to.opacity = 0)), s.effect(n)
	}, t.effects.effect.size = function(e, i) {
		var s, n, a, o = t(this),
			r = ["position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity"],
			h = ["position", "top", "bottom", "left", "right", "overflow", "opacity"],
			l = ["width", "height", "overflow"],
			c = ["fontSize"],
			u = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
			d = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
			p = t.effects.setMode(o, e.mode || "effect"),
			f = e.restore || "effect" !== p,
			m = e.scale || "both",
			g = e.origin || ["middle", "center"],
			v = o.css("position"),
			_ = f ? r : h,
			b = {
				height: 0,
				width: 0,
				outerHeight: 0,
				outerWidth: 0
			};
		"show" === p && o.show(), s = {
			height: o.height(),
			width: o.width(),
			outerHeight: o.outerHeight(),
			outerWidth: o.outerWidth()
		}, "toggle" === e.mode && "show" === p ? (o.from = e.to || b, o.to = e.from || s) : (o.from = e.from || ("show" === p ? b : s), o.to = e.to || ("hide" === p ? b : s)), a = {
			from: {
				y: o.from.height / s.height,
				x: o.from.width / s.width
			},
			to: {
				y: o.to.height / s.height,
				x: o.to.width / s.width
			}
		}, ("box" === m || "both" === m) && (a.from.y !== a.to.y && (_ = _.concat(u), o.from = t.effects.setTransition(o, u, a.from.y, o.from), o.to = t.effects.setTransition(o, u, a.to.y, o.to)), a.from.x !== a.to.x && (_ = _.concat(d), o.from = t.effects.setTransition(o, d, a.from.x, o.from), o.to = t.effects.setTransition(o, d, a.to.x, o.to))), ("content" === m || "both" === m) && a.from.y !== a.to.y && (_ = _.concat(c).concat(l), o.from = t.effects.setTransition(o, c, a.from.y, o.from), o.to = t.effects.setTransition(o, c, a.to.y, o.to)), t.effects.save(o, _), o.show(), t.effects.createWrapper(o), o.css("overflow", "hidden").css(o.from), g && (n = t.effects.getBaseline(g, s), o.from.top = (s.outerHeight - o.outerHeight()) * n.y, o.from.left = (s.outerWidth - o.outerWidth()) * n.x, o.to.top = (s.outerHeight - o.to.outerHeight) * n.y, o.to.left = (s.outerWidth - o.to.outerWidth) * n.x), o.css(o.from), ("content" === m || "both" === m) && (u = u.concat(["marginTop", "marginBottom"]).concat(c), d = d.concat(["marginLeft", "marginRight"]), l = r.concat(u).concat(d), o.find("*[width]").each(function() {
			var i = t(this),
				s = {
					height: i.height(),
					width: i.width(),
					outerHeight: i.outerHeight(),
					outerWidth: i.outerWidth()
				};
			f && t.effects.save(i, l), i.from = {
				height: s.height * a.from.y,
				width: s.width * a.from.x,
				outerHeight: s.outerHeight * a.from.y,
				outerWidth: s.outerWidth * a.from.x
			}, i.to = {
				height: s.height * a.to.y,
				width: s.width * a.to.x,
				outerHeight: s.height * a.to.y,
				outerWidth: s.width * a.to.x
			}, a.from.y !== a.to.y && (i.from = t.effects.setTransition(i, u, a.from.y, i.from), i.to = t.effects.setTransition(i, u, a.to.y, i.to)), a.from.x !== a.to.x && (i.from = t.effects.setTransition(i, d, a.from.x, i.from), i.to = t.effects.setTransition(i, d, a.to.x, i.to)), i.css(i.from), i.animate(i.to, e.duration, e.easing, function() {
				f && t.effects.restore(i, l)
			})
		})), o.animate(o.to, {
			queue: !1,
			duration: e.duration,
			easing: e.easing,
			complete: function() {
				0 === o.to.opacity && o.css("opacity", o.from.opacity), "hide" === p && o.hide(), t.effects.restore(o, _), f || ("static" === v ? o.css({
					position: "relative",
					top: o.to.top,
					left: o.to.left
				}) : t.each(["top", "left"], function(t, e) {
					o.css(e, function(e, i) {
						var s = parseInt(i, 10),
							n = t ? o.to.left : o.to.top;
						return "auto" === i ? n + "px" : s + n + "px"
					})
				})), t.effects.removeWrapper(o), i()
			}
		})
	}
})(jQuery);
(function(t) {
	t.effects.effect.shake = function(e, i) {
		var s, n = t(this),
			a = ["position", "top", "bottom", "left", "right", "height", "width"],
			o = t.effects.setMode(n, e.mode || "effect"),
			r = e.direction || "left",
			h = e.distance || 20,
			l = e.times || 3,
			c = 2 * l + 1,
			u = Math.round(e.duration / c),
			d = "up" === r || "down" === r ? "top" : "left",
			p = "up" === r || "left" === r,
			f = {},
			m = {},
			g = {},
			v = n.queue(),
			_ = v.length;
		for (t.effects.save(n, a), n.show(), t.effects.createWrapper(n), f[d] = (p ? "-=" : "+=") + h, m[d] = (p ? "+=" : "-=") + 2 * h, g[d] = (p ? "-=" : "+=") + 2 * h, n.animate(f, u, e.easing), s = 1; l > s; s++) n.animate(m, u, e.easing).animate(g, u, e.easing);
		n.animate(m, u, e.easing).animate(f, u / 2, e.easing).queue(function() {
			"hide" === o && n.hide(), t.effects.restore(n, a), t.effects.removeWrapper(n), i()
		}), _ > 1 && v.splice.apply(v, [1, 0].concat(v.splice(_, c + 1))), n.dequeue()
	}
})(jQuery);
(function(t) {
	t.effects.effect.slide = function(e, i) {
		var s, n = t(this),
			a = ["position", "top", "bottom", "left", "right", "width", "height"],
			o = t.effects.setMode(n, e.mode || "show"),
			r = "show" === o,
			h = e.direction || "left",
			l = "up" === h || "down" === h ? "top" : "left",
			c = "up" === h || "left" === h,
			u = {};
		t.effects.save(n, a), n.show(), s = e.distance || n["top" === l ? "outerHeight" : "outerWidth"](!0), t.effects.createWrapper(n).css({
			overflow: "hidden"
		}), r && n.css(l, c ? isNaN(s) ? "-" + s : -s : s), u[l] = (r ? c ? "+=" : "-=" : c ? "-=" : "+=") + s, n.animate(u, {
			queue: !1,
			duration: e.duration,
			easing: e.easing,
			complete: function() {
				"hide" === o && n.hide(), t.effects.restore(n, a), t.effects.removeWrapper(n), i()
			}
		})
	}
})(jQuery);
(function(t) {
	t.effects.effect.transfer = function(e, i) {
		var s = t(this),
			n = t(e.to),
			a = "fixed" === n.css("position"),
			o = t("body"),
			r = a ? o.scrollTop() : 0,
			h = a ? o.scrollLeft() : 0,
			l = n.offset(),
			c = {
				top: l.top - r,
				left: l.left - h,
				height: n.innerHeight(),
				width: n.innerWidth()
			},
			u = s.offset(),
			d = t("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(e.className).css({
				top: u.top - r,
				left: u.left - h,
				height: s.innerHeight(),
				width: s.innerWidth(),
				position: a ? "fixed" : "absolute"
			}).animate(c, e.duration, e.easing, function() {
				d.remove(), i()
			})
	}
})(jQuery);;
jQuery.cookie = function(key, value, options) {
	if (arguments.length > 1 && (value === null || typeof value !== "object")) {
		options = jQuery.extend({}, options);
		if (value === null) {
			options.expires = -1;
		}
		if (typeof options.expires === 'number') {
			var days = options.expires,
				t = options.expires = new Date();
			t.setDate(t.getDate() + days);
		}
		return (document.cookie = [encodeURIComponent(key), '=', options.raw ? String(value) : encodeURIComponent(String(value)), options.expires ? '; expires=' + options.expires.toUTCString() : '', options.path ? '; path=' + options.path : '', options.domain ? '; domain=' + options.domain : '', options.secure ? '; secure' : ''].join(''));
	}
	options = value || {};
	var result, decode = options.raw ? function(s) {
		return s;
	} : decodeURIComponent;
	return (result = new RegExp('(?:^|; )' + encodeURIComponent(key) + '=([^;]*)').exec(document.cookie)) ? decode(result[1]) : null;
};;
/**
 * bootstrap.js v3.0.0 by @fat and @mdo
 * Copyright 2013 Twitter Inc.
 * http://www.apache.org/licenses/LICENSE-2.0
 */
if (!jQuery) throw new Error("Bootstrap requires jQuery"); + function(a) {
	"use strict";

	function b() {
		var a = document.createElement("bootstrap"),
			b = {
				WebkitTransition: "webkitTransitionEnd",
				MozTransition: "transitionend",
				OTransition: "oTransitionEnd otransitionend",
				transition: "transitionend"
			};
		for (var c in b)
			if (void 0 !== a.style[c]) return {
				end: b[c]
			}
	}
	a.fn.emulateTransitionEnd = function(b) {
		var c = !1,
			d = this;
		a(this).one(a.support.transition.end, function() {
			c = !0
		});
		var e = function() {
			c || a(d).trigger(a.support.transition.end)
		};
		return setTimeout(e, b), this
	}, a(function() {
		a.support.transition = b()
	})
}(window.jQuery), + function(a) {
	"use strict";
	var b = '[data-dismiss="alert"]',
		c = function(c) {
			a(c).on("click", b, this.close)
		};
	c.prototype.close = function(b) {
		function c() {
			f.trigger("closed.bs.alert").remove()
		}
		var d = a(this),
			e = d.attr("data-target");
		e || (e = d.attr("href"), e = e && e.replace(/.*(?=#[^\s]*$)/, ""));
		var f = a(e);
		b && b.preventDefault(), f.length || (f = d.hasClass("alert") ? d : d.parent()), f.trigger(b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (f.removeClass("in"), a.support.transition && f.hasClass("fade") ? f.one(a.support.transition.end, c).emulateTransitionEnd(150) : c())
	};
	var d = a.fn.alert;
	a.fn.alert = function(b) {
		return this.each(function() {
			var d = a(this),
				e = d.data("bs.alert");
			e || d.data("bs.alert", e = new c(this)), "string" == typeof b && e[b].call(d)
		})
	}, a.fn.alert.Constructor = c, a.fn.alert.noConflict = function() {
		return a.fn.alert = d, this
	}, a(document).on("click.bs.alert.data-api", b, c.prototype.close)
}(window.jQuery), + function(a) {
	"use strict";
	var b = function(c, d) {
		this.$element = a(c), this.options = a.extend({}, b.DEFAULTS, d)
	};
	b.DEFAULTS = {
		loadingText: "loading..."
	}, b.prototype.setState = function(a) {
		var b = "disabled",
			c = this.$element,
			d = c.is("input") ? "val" : "html",
			e = c.data();
		a += "Text", e.resetText || c.data("resetText", c[d]()), c[d](e[a] || this.options[a]), setTimeout(function() {
			"loadingText" == a ? c.addClass(b).attr(b, b) : c.removeClass(b).removeAttr(b)
		}, 0)
	}, b.prototype.toggle = function() {
		var a = this.$element.closest('[data-toggle="buttons"]');
		if (a.length) {
			var b = this.$element.find("input").prop("checked", !this.$element.hasClass("active"));
			"radio" === b.prop("type") && a.find(".active").removeClass("active")
		}
		this.$element.toggleClass("active")
	};
	var c = a.fn.button;
	a.fn.button = function(c) {
		return this.each(function() {
			var d = a(this),
				e = d.data("button"),
				f = "object" == typeof c && c;
			e || d.data("bs.button", e = new b(this, f)), "toggle" == c ? e.toggle() : c && e.setState(c)
		})
	}, a.fn.button.Constructor = b, a.fn.button.noConflict = function() {
		return a.fn.button = c, this
	}, a(document).on("click.bs.button.data-api", "[data-toggle^=button]", function(b) {
		var c = a(b.target);
		c.hasClass("btn") || (c = c.closest(".btn")), c.button("toggle"), b.preventDefault()
	})
}(window.jQuery), + function(a) {
	"use strict";
	var b = function(b, c) {
		this.$element = a(b), this.$indicators = this.$element.find(".carousel-indicators"), this.options = c, this.paused = this.sliding = this.interval = this.$active = this.$items = null, "hover" == this.options.pause && this.$element.on("mouseenter", a.proxy(this.pause, this)).on("mouseleave", a.proxy(this.cycle, this))
	};
	b.DEFAULTS = {
		interval: 5e3,
		pause: "hover"
	}, b.prototype.cycle = function(b) {
		return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this
	}, b.prototype.getActiveIndex = function() {
		return this.$active = this.$element.find(".item.active"), this.$items = this.$active.parent().children(), this.$items.index(this.$active)
	}, b.prototype.to = function(b) {
		var c = this,
			d = this.getActiveIndex();
		return b > this.$items.length - 1 || 0 > b ? void 0 : this.sliding ? this.$element.one("slid", function() {
			c.to(b)
		}) : d == b ? this.pause().cycle() : this.slide(b > d ? "next" : "prev", a(this.$items[b]))
	}, b.prototype.pause = function(b) {
		return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition.end && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
	}, b.prototype.next = function() {
		return this.sliding ? void 0 : this.slide("next")
	}, b.prototype.prev = function() {
		return this.sliding ? void 0 : this.slide("prev")
	}, b.prototype.slide = function(b, c) {
		var d = this.$element.find(".item.active"),
			e = c || d[b](),
			f = this.interval,
			g = "next" == b ? "left" : "right",
			h = "next" == b ? "first" : "last",
			i = this;
		this.sliding = !0, f && this.pause(), e = e.length ? e : this.$element.find(".item")[h]();
		var j = a.Event("slide.bs.carousel", {
			relatedTarget: e[0],
			direction: g
		});
		if (!e.hasClass("active")) {
			if (this.$indicators.length && (this.$indicators.find(".active").removeClass("active"), this.$element.one("slid", function() {
					var b = a(i.$indicators.children()[i.getActiveIndex()]);
					b && b.addClass("active")
				})), a.support.transition && this.$element.hasClass("slide")) {
				if (this.$element.trigger(j), j.isDefaultPrevented()) return;
				e.addClass(b), e[0].offsetWidth, d.addClass(g), e.addClass(g), d.one(a.support.transition.end, function() {
					e.removeClass([b, g].join(" ")).addClass("active"), d.removeClass(["active", g].join(" ")), i.sliding = !1, setTimeout(function() {
						i.$element.trigger("slid")
					}, 0)
				}).emulateTransitionEnd(600)
			} else {
				if (this.$element.trigger(j), j.isDefaultPrevented()) return;
				d.removeClass("active"), e.addClass("active"), this.sliding = !1, this.$element.trigger("slid")
			}
			return f && this.cycle(), this
		}
	};
	var c = a.fn.carousel;
	a.fn.carousel = function(c) {
		return this.each(function() {
			var d = a(this),
				e = d.data("bs.carousel"),
				f = a.extend({}, b.DEFAULTS, d.data(), "object" == typeof c && c),
				g = "string" == typeof c ? c : f.slide;
			e || d.data("bs.carousel", e = new b(this, f)), "number" == typeof c ? e.to(c) : g ? e[g]() : f.interval && e.pause().cycle()
		})
	}, a.fn.carousel.Constructor = b, a.fn.carousel.noConflict = function() {
		return a.fn.carousel = c, this
	}, a(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", function(b) {
		var c, d = a(this),
			e = a(d.attr("data-target") || (c = d.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "")),
			f = a.extend({}, e.data(), d.data()),
			g = d.attr("data-slide-to");
		g && (f.interval = !1), e.carousel(f), (g = d.attr("data-slide-to")) && e.data("bs.carousel").to(g), b.preventDefault()
	}), a(window).on("load", function() {
		a('[data-ride="carousel"]').each(function() {
			var b = a(this);
			b.carousel(b.data())
		})
	})
}(window.jQuery), + function(a) {
	"use strict";
	var b = function(c, d) {
		this.$element = a(c), this.options = a.extend({}, b.DEFAULTS, d), this.transitioning = null, this.options.parent && (this.$parent = a(this.options.parent)), this.options.toggle && this.toggle()
	};
	b.DEFAULTS = {
		toggle: !0
	}, b.prototype.dimension = function() {
		var a = this.$element.hasClass("width");
		return a ? "width" : "height"
	}, b.prototype.show = function() {
		if (!this.transitioning && !this.$element.hasClass("in")) {
			var b = a.Event("show.bs.collapse");
			if (this.$element.trigger(b), !b.isDefaultPrevented()) {
				var c = this.$parent && this.$parent.find("> .accordion-group > .in");
				if (c && c.length) {
					var d = c.data("bs.collapse");
					if (d && d.transitioning) return;
					c.collapse("hide"), d || c.data("bs.collapse", null)
				}
				var e = this.dimension();
				this.$element.removeClass("collapse").addClass("collapsing")[e](0), this.transitioning = 1;
				var f = function() {
					this.$element.removeClass("collapsing").addClass("in")[e]("auto"), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
				};
				if (!a.support.transition) return f.call(this);
				var g = a.camelCase(["scroll", e].join("-"));
				this.$element.one(a.support.transition.end, a.proxy(f, this)).emulateTransitionEnd(350)[e](this.$element[0][g])
			}
		}
	}, b.prototype.hide = function() {
		if (!this.transitioning && this.$element.hasClass("in")) {
			var b = a.Event("hide.bs.collapse");
			if (this.$element.trigger(b), !b.isDefaultPrevented()) {
				var c = this.dimension();
				this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"), this.transitioning = 1;
				var d = function() {
					this.transitioning = 0, this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")
				};
				return a.support.transition ? (this.$element[c](0).one(a.support.transition.end, a.proxy(d, this)).emulateTransitionEnd(350), void 0) : d.call(this)
			}
		}
	}, b.prototype.toggle = function() {
		this[this.$element.hasClass("in") ? "hide" : "show"]()
	};
	var c = a.fn.collapse;
	a.fn.collapse = function(c) {
		return this.each(function() {
			var d = a(this),
				e = d.data("bs.collapse"),
				f = a.extend({}, b.DEFAULTS, d.data(), "object" == typeof c && c);
			e || d.data("bs.collapse", e = new b(this, f)), "string" == typeof c && e[c]()
		})
	}, a.fn.collapse.Constructor = b, a.fn.collapse.noConflict = function() {
		return a.fn.collapse = c, this
	}, a(document).on("click.bs.collapse.data-api", "[data-toggle=collapse]", function(b) {
		var c, d = a(this),
			e = d.attr("data-target") || b.preventDefault() || (c = d.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, ""),
			f = a(e),
			g = f.data("bs.collapse"),
			h = g ? "toggle" : d.data(),
			i = d.attr("data-parent"),
			j = i && a(i);
		g && g.transitioning || (j && j.find("[data-toggle=collapse][data-parent=" + i + "]").not(d).addClass("collapsed"), d[f.hasClass("in") ? "addClass" : "removeClass"]("collapsed")), f.collapse(h)
	})
}(window.jQuery), + function(a) {
	"use strict";

	function b() {
		a(d).remove(), a(e).each(function(b) {
			var d = c(a(this));
			d.hasClass("open") && (d.trigger(b = a.Event("hide.bs.dropdown")), b.isDefaultPrevented() || d.removeClass("open").trigger("hidden.bs.dropdown"))
		})
	}

	function c(b) {
		var c = b.attr("data-target");
		c || (c = b.attr("href"), c = c && /#/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));
		var d = c && a(c);
		return d && d.length ? d : b.parent()
	}
	var d = ".dropdown-backdrop",
		e = "[data-toggle=dropdown]",
		f = function(b) {
			a(b).on("click.bs.dropdown", this.toggle)
		};
	f.prototype.toggle = function(d) {
		var e = a(this);
		if (!e.is(".disabled, :disabled")) {
			var f = c(e),
				g = f.hasClass("open");
			if (b(), !g) {
				if ("disable-ontouchstart" in document.documentElement && a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click", b), f.trigger(d = a.Event("show.bs.dropdown")), d.isDefaultPrevented()) return;
				f.toggleClass("open").trigger("shown.bs.dropdown")
			}
			return e.focus(), !1
		}
	}, f.prototype.keydown = function(b) {
		if (/(38|40|27)/.test(b.keyCode)) {
			var d = a(this);
			if (b.preventDefault(), b.stopPropagation(), !d.is(".disabled, :disabled")) {
				var f = c(d),
					g = f.hasClass("open");
				if (!g || g && 27 == b.keyCode) return 27 == b.which && f.find(e).focus(), d.click();
				var h = a("[role=menu] li:not(.divider):visible a", f);
				if (h.length) {
					var i = h.index(h.filter(":focus"));
					38 == b.keyCode && i > 0 && i--, 40 == b.keyCode && i < h.length - 1 && i++, ~i || (i = 0), h.eq(i).focus()
				}
			}
		}
	};
	var g = a.fn.dropdown;
	a.fn.dropdown = function(b) {
		return this.each(function() {
			var c = a(this),
				d = c.data("dropdown");
			d || c.data("dropdown", d = new f(this)), "string" == typeof b && d[b].call(c)
		})
	}, a.fn.dropdown.Constructor = f, a.fn.dropdown.noConflict = function() {
		return a.fn.dropdown = g, this
	}, a(document).on("click.bs.dropdown.data-api", b).on("click.bs.dropdown.data-api", ".dropdown form", function(a) {
		a.stopPropagation()
	}).on("click.bs.dropdown.data-api", e, f.prototype.toggle).on("keydown.bs.dropdown.data-api", e + ", [role=menu]", f.prototype.keydown)
}(window.jQuery), + function(a) {
	"use strict";
	var b = function(b, c) {
		this.options = c, this.$element = a(b).on("click.dismiss.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.$backdrop = this.isShown = null, this.options.remote && this.$element.find(".modal-body").load(this.options.remote)
	};
	b.DEFAULTS = {
		backdrop: !0,
		keyboard: !0,
		show: !0
	}, b.prototype.toggle = function() {
		return this[this.isShown ? "hide" : "show"]()
	}, b.prototype.show = function() {
		var b = this,
			c = a.Event("show.bs.modal");
		this.$element.trigger(c), this.isShown || c.isDefaultPrevented() || (this.isShown = !0, this.escape(), this.backdrop(function() {
			var c = a.support.transition && b.$element.hasClass("fade");
			b.$element.parent().length || b.$element.appendTo(document.body), b.$element.show(), c && b.$element[0].offsetWidth, b.$element.addClass("in").attr("aria-hidden", !1), b.enforceFocus(), c ? b.$element.one(a.support.transition.end, function() {
				b.$element.focus().trigger("shown.bs.modal")
			}).emulateTransitionEnd(300) : b.$element.focus().trigger("shown.bs.modal")
		}))
	}, b.prototype.hide = function(b) {
		b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0), a.support.transition && this.$element.hasClass("fade") ? this.$element.one(a.support.transition.end, a.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal())
	}, b.prototype.enforceFocus = function() {
		a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function(a) {
			this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.focus()
		}, this))
	}, b.prototype.escape = function() {
		this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.bs.modal", a.proxy(function(a) {
			27 == a.which && this.hide()
		}, this)) : this.isShown || this.$element.off("keyup.dismiss.bs.modal")
	}, b.prototype.hideModal = function() {
		var a = this;
		this.$element.hide(), this.backdrop(function() {
			a.removeBackdrop(), a.$element.trigger("hidden.bs.modal")
		})
	}, b.prototype.removeBackdrop = function() {
		this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
	}, b.prototype.backdrop = function(b) {
		var c = this.$element.hasClass("fade") ? "fade" : "";
		if (this.isShown && this.options.backdrop) {
			var d = a.support.transition && c;
			if (this.$backdrop = a('<div class="modal-backdrop ' + c + '" />').appendTo(document.body), this.$element.on("click", a.proxy(function(a) {
					a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this))
				}, this)), d && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b) return;
			d ? this.$backdrop.one(a.support.transition.end, b).emulateTransitionEnd(150) : b()
		} else !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one(a.support.transition.end, b).emulateTransitionEnd(150) : b()) : b && b()
	};
	var c = a.fn.modal;
	a.fn.modal = function(c) {
		return this.each(function() {
			var d = a(this),
				e = d.data("bs.modal"),
				f = a.extend({}, b.DEFAULTS, d.data(), "object" == typeof c && c);
			e || d.data("bs.modal", e = new b(this, f)), "string" == typeof c ? e[c]() : f.show && e.show()
		})
	}, a.fn.modal.Constructor = b, a.fn.modal.noConflict = function() {
		return a.fn.modal = c, this
	}, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(b) {
		var c = a(this),
			d = c.attr("href"),
			e = a(c.attr("data-target") || d && d.replace(/.*(?=#[^\s]+$)/, "")),
			f = e.data("modal") ? "toggle" : a.extend({
				remote: !/#/.test(d) && d
			}, e.data(), c.data());
		b.preventDefault(), e.modal(f).one("hide", function() {
			c.is(":visible") && c.focus()
		})
	}), a(function() {
		var b = a(document.body).on("shown.bs.modal", ".modal", function() {
			b.addClass("modal-open")
		}).on("hidden.bs.modal", ".modal", function() {
			b.removeClass("modal-open")
		})
	})
}(window.jQuery), + function(a) {
	"use strict";
	var b = function(a, b) {
		this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, this.init("tooltip", a, b)
	};
	b.DEFAULTS = {
		animation: !0,
		placement: "top",
		selector: !1,
		template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
		trigger: "hover focus",
		title: "",
		delay: 0,
		html: !1,
		container: !1
	}, b.prototype.init = function(b, c, d) {
		this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d);
		for (var e = this.options.trigger.split(" "), f = e.length; f--;) {
			var g = e[f];
			if ("click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this));
			else if ("manual" != g) {
				var h = "hover" == g ? "mouseenter" : "focus",
					i = "hover" == g ? "mouseleave" : "blur";
				this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this))
			}
		}
		this.options.selector ? this._options = a.extend({}, this.options, {
			trigger: "manual",
			selector: ""
		}) : this.fixTitle()
	}, b.prototype.getDefaults = function() {
		return b.DEFAULTS
	}, b.prototype.getOptions = function(b) {
		return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = {
			show: b.delay,
			hide: b.delay
		}), b
	}, b.prototype.enter = function(b) {
		var c = this.getDefaults(),
			d = {};
		this._options && a.each(this._options, function(a, b) {
			c[a] != b && (d[a] = b)
		});
		var e = b instanceof this.constructor ? b : a(b.currentTarget)[this.type](d).data("bs." + this.type);
		return clearTimeout(e.timeout), e.options.delay && e.options.delay.show ? (e.hoverState = "in", e.timeout = setTimeout(function() {
			"in" == e.hoverState && e.show()
		}, e.options.delay.show), void 0) : e.show()
	}, b.prototype.leave = function(b) {
		var c = b instanceof this.constructor ? b : a(b.currentTarget)[this.type](this._options).data("bs." + this.type);
		return clearTimeout(c.timeout), c.options.delay && c.options.delay.hide ? (c.hoverState = "out", c.timeout = setTimeout(function() {
			"out" == c.hoverState && c.hide()
		}, c.options.delay.hide), void 0) : c.hide()
	}, b.prototype.show = function() {
		var b = a.Event("show.bs." + this.type);
		if (this.hasContent() && this.enabled) {
			if (this.$element.trigger(b), b.isDefaultPrevented()) return;
			var c = this.tip();
			this.setContent(), this.options.animation && c.addClass("fade");
			var d = "function" == typeof this.options.placement ? this.options.placement.call(this, c[0], this.$element[0]) : this.options.placement,
				e = /\s?auto?\s?/i,
				f = e.test(d);
			f && (d = d.replace(e, "") || "top"), c.detach().css({
				top: 0,
				left: 0,
				display: "block"
			}).addClass(d), this.options.container ? c.appendTo(this.options.container) : c.insertAfter(this.$element);
			var g = this.getPosition(),
				h = c[0].offsetWidth,
				i = c[0].offsetHeight;
			if (f) {
				var j = this.$element.parent(),
					k = d,
					l = document.documentElement.scrollTop || document.body.scrollTop,
					m = "body" == this.options.container ? window.innerWidth : j.outerWidth(),
					n = "body" == this.options.container ? window.innerHeight : j.outerHeight(),
					o = "body" == this.options.container ? 0 : j.offset().left;
				d = "bottom" == d && g.top + g.height + i - l > n ? "top" : "top" == d && g.top - l - i < 0 ? "bottom" : "right" == d && g.right + h > m ? "left" : "left" == d && g.left - h < o ? "right" : d, c.removeClass(k).addClass(d)
			}
			var p = "bottom" == d ? {
				top: g.top + g.height,
				left: g.left + g.width / 2 - h / 2
			} : "top" == d ? {
				top: g.top - i,
				left: g.left + g.width / 2 - h / 2
			} : "left" == d ? {
				top: g.top + g.height / 2 - i / 2,
				left: g.left - h
			} : {
				top: g.top + g.height / 2 - i / 2,
				left: g.left + g.width
			};
			this.applyPlacement(p, d), this.$element.trigger("shown.bs." + this.type)
		}
	}, b.prototype.applyPlacement = function(a, b) {
		var c, d = this.tip(),
			e = d[0].offsetWidth,
			f = d[0].offsetHeight;
		a.top = a.top + parseInt(d.css("margin-top"), 10), a.left = a.left + parseInt(d.css("margin-left"), 10), d.offset(a).addClass("in");
		var g = d[0].offsetWidth,
			h = d[0].offsetHeight;
		if ("top" == b && h != f && (c = !0, a.top = a.top + f - h), "bottom" == b || "top" == b) {
			var i = 0;
			a.left < 0 && (i = -2 * a.left, a.left = 0, d.offset(a), g = d[0].offsetWidth, h = d[0].offsetHeight), this.replaceArrow(i - e + g, g, "left")
		} else this.replaceArrow(h - f, h, "top");
		c && d.offset(a)
	}, b.prototype.replaceArrow = function(a, b, c) {
		this.arrow().css(c, a ? 50 * (1 - a / b) + "%" : "")
	}, b.prototype.setContent = function() {
		var a = this.tip(),
			b = this.getTitle();
		a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right")
	}, b.prototype.hide = function() {
		var b = this.tip(),
			c = a.Event("hide.bs." + this.type);
		return this.$element.trigger(c), c.isDefaultPrevented() ? void 0 : (b.removeClass("in"), a.support.transition && this.$tip.hasClass("fade") ? b.one(a.support.transition.end, b.detach).emulateTransitionEnd(150) : b.detach(), this.$element.trigger("hidden.bs." + this.type), this)
	}, b.prototype.fixTitle = function() {
		var a = this.$element;
		(a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "")
	}, b.prototype.hasContent = function() {
		return this.getTitle()
	}, b.prototype.getPosition = function() {
		var b = this.$element[0];
		return a.extend({}, "function" == typeof b.getBoundingClientRect ? b.getBoundingClientRect() : {
			width: b.offsetWidth,
			height: b.offsetHeight
		}, this.$element.offset())
	}, b.prototype.getTitle = function() {
		var a, b = this.$element,
			c = this.options;
		return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title)
	}, b.prototype.tip = function() {
		return this.$tip = this.$tip || a(this.options.template)
	}, b.prototype.arrow = function() {
		return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
	}, b.prototype.validate = function() {
		this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
	}, b.prototype.enable = function() {
		this.enabled = !0
	}, b.prototype.disable = function() {
		this.enabled = !1
	}, b.prototype.toggleEnabled = function() {
		this.enabled = !this.enabled
	}, b.prototype.toggle = function(b) {
		var c = b ? a(b.currentTarget)[this.type](this._options).data("bs." + this.type) : this;
		c.tip().hasClass("in") ? c.leave(c) : c.enter(c)
	}, b.prototype.destroy = function() {
		this.hide().$element.off("." + this.type).removeData("bs." + this.type)
	};
	var c = a.fn.tooltip;
	a.fn.tooltip = function(c) {
		return this.each(function() {
			var d = a(this),
				e = d.data("bs.tooltip"),
				f = "object" == typeof c && c;
			e || d.data("bs.tooltip", e = new b(this, f)), "string" == typeof c && e[c]()
		})
	}, a.fn.tooltip.Constructor = b, a.fn.tooltip.noConflict = function() {
		return a.fn.tooltip = c, this
	}
}(window.jQuery), + function(a) {
	"use strict";
	var b = function(a, b) {
		this.init("popover", a, b)
	};
	if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");
	b.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
		placement: "right",
		trigger: "click",
		content: "",
		template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
	}), b.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), b.prototype.constructor = b, b.prototype.getDefaults = function() {
		return b.DEFAULTS
	}, b.prototype.setContent = function() {
		var a = this.tip(),
			b = this.getTitle(),
			c = this.getContent();
		a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content")[this.options.html ? "html" : "text"](c), a.removeClass("fade top bottom left right in"), a.find(".popover-title:empty").hide()
	}, b.prototype.hasContent = function() {
		return this.getTitle() || this.getContent()
	}, b.prototype.getContent = function() {
		var a = this.$element,
			b = this.options;
		return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content)
	}, b.prototype.tip = function() {
		return this.$tip || (this.$tip = a(this.options.template)), this.$tip
	}, b.prototype.destroy = function() {
		this.hide().$element.off("." + this.type).removeData(this.type)
	};
	var c = a.fn.popover;
	a.fn.popover = function(c) {
		return this.each(function() {
			var d = a(this),
				e = d.data("bs.popover"),
				f = "object" == typeof c && c;
			e || d.data("bs.popover", e = new b(this, f)), "string" == typeof c && e[c]()
		})
	}, a.fn.popover.Constructor = b, a.fn.popover.noConflict = function() {
		return a.fn.popover = c, this
	}
}(window.jQuery), + function(a) {
	"use strict";

	function b(c, d) {
		var e, f = a.proxy(this.process, this);
		this.$element = a(c).is("body") ? a(window) : a(c), this.$body = a("body"), this.$scrollElement = this.$element.on("scroll.bs.scroll-spy.data-api", f), this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || (e = a(c).attr("href")) && e.replace(/.*(?=#[^\s]+$)/, "") || "") + " .nav li > a", this.offsets = a([]), this.targets = a([]), this.activeTarget = null, this.refresh(), this.process()
	}
	b.DEFAULTS = {
		offset: 10
	}, b.prototype.refresh = function() {
		var b = this.$element[0] == window ? "offset" : "position";
		this.offsets = a([]), this.targets = a([]);
		var c = this;
		this.$body.find(this.selector).map(function() {
			var d = a(this),
				e = d.data("target") || d.attr("href"),
				f = /^#\w/.test(e) && a(e);
			return f && f.length && [
				[f[b]().top + (!a.isWindow(c.$scrollElement.get(0)) && c.$scrollElement.scrollTop()), e]
			] || null
		}).sort(function(a, b) {
			return a[0] - b[0]
		}).each(function() {
			c.offsets.push(this[0]), c.targets.push(this[1])
		})
	}, b.prototype.process = function() {
		var a, b = this.$scrollElement.scrollTop() + this.options.offset,
			c = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight,
			d = c - this.$scrollElement.height(),
			e = this.offsets,
			f = this.targets,
			g = this.activeTarget;
		if (b >= d) return g != (a = f.last()[0]) && this.activate(a);
		for (a = e.length; a--;) g != f[a] && b >= e[a] && (!e[a + 1] || b <= e[a + 1]) && this.activate(f[a])
	}, b.prototype.activate = function(b) {
		this.activeTarget = b, a(this.selector).parents(".active").removeClass("active");
		var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]',
			d = a(c).parents("li").addClass("active");
		d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), d.trigger("activate")
	};
	var c = a.fn.scrollspy;
	a.fn.scrollspy = function(c) {
		return this.each(function() {
			var d = a(this),
				e = d.data("bs.scrollspy"),
				f = "object" == typeof c && c;
			e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]()
		})
	}, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function() {
		return a.fn.scrollspy = c, this
	}, a(window).on("load", function() {
		a('[data-spy="scroll"]').each(function() {
			var b = a(this);
			b.scrollspy(b.data())
		})
	})
}(window.jQuery), + function(a) {
	"use strict";
	var b = function(b) {
		this.element = a(b)
	};
	b.prototype.show = function() {
		var b = this.element,
			c = b.closest("ul:not(.dropdown-menu)"),
			d = b.attr("data-target");
		if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) {
			var e = c.find(".active:last a")[0],
				f = a.Event("show.bs.tab", {
					relatedTarget: e
				});
			if (b.trigger(f), !f.isDefaultPrevented()) {
				var g = a(d);
				this.activate(b.parent("li"), c), this.activate(g, g.parent(), function() {
					b.trigger({
						type: "shown.bs.tab",
						relatedTarget: e
					})
				})
			}
		}
	}, b.prototype.activate = function(b, c, d) {
		function e() {
			f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), b.addClass("active"), g ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu") && b.closest("li.dropdown").addClass("active"), d && d()
		}
		var f = c.find("> .active"),
			g = d && a.support.transition && f.hasClass("fade");
		g ? f.one(a.support.transition.end, e).emulateTransitionEnd(150) : e(), f.removeClass("in")
	};
	var c = a.fn.tab;
	a.fn.tab = function(c) {
		return this.each(function() {
			var d = a(this),
				e = d.data("bs.tab");
			e || d.data("bs.tab", e = new b(this)), "string" == typeof c && e[c]()
		})
	}, a.fn.tab.Constructor = b, a.fn.tab.noConflict = function() {
		return a.fn.tab = c, this
	}, a(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function(b) {
		b.preventDefault(), a(this).tab("show")
	})
}(window.jQuery), + function(a) {
	"use strict";
	var b = function(c, d) {
		this.options = a.extend({}, b.DEFAULTS, d), this.$window = a(window).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), this.$element = a(c), this.affixed = this.unpin = null, this.checkPosition()
	};
	b.RESET = "affix affix-top affix-bottom", b.DEFAULTS = {
		offset: 0
	}, b.prototype.checkPositionWithEventLoop = function() {
		setTimeout(a.proxy(this.checkPosition, this), 1)
	}, b.prototype.checkPosition = function() {
		if (this.$element.is(":visible")) {
			var c = a(document).height(),
				d = this.$window.scrollTop(),
				e = this.$element.offset(),
				f = this.options.offset,
				g = f.top,
				h = f.bottom;
			"object" != typeof f && (h = g = f), "function" == typeof g && (g = f.top()), "function" == typeof h && (h = f.bottom());
			var i = null != this.unpin && d + this.unpin <= e.top ? !1 : null != h && e.top + this.$element.height() >= c - h ? "bottom" : null != g && g >= d ? "top" : !1;
			this.affixed !== i && (this.unpin && this.$element.css("top", ""), this.affixed = i, this.unpin = "bottom" == i ? e.top - d : null, this.$element.removeClass(b.RESET).addClass("affix" + (i ? "-" + i : "")), "bottom" == i && this.$element.offset({
				top: document.body.offsetHeight - h - this.$element.height()
			}))
		}
	};
	var c = a.fn.affix;
	a.fn.affix = function(c) {
		return this.each(function() {
			var d = a(this),
				e = d.data("bs.affix"),
				f = "object" == typeof c && c;
			e || d.data("bs.affix", e = new b(this, f)), "string" == typeof c && e[c]()
		})
	}, a.fn.affix.Constructor = b, a.fn.affix.noConflict = function() {
		return a.fn.affix = c, this
	}, a(window).on("load", function() {
		a('[data-spy="affix"]').each(function() {
			var b = a(this),
				c = b.data();
			c.offset = c.offset || {}, c.offsetBottom && (c.offset.bottom = c.offsetBottom), c.offsetTop && (c.offset.top = c.offsetTop), b.affix(c)
		})
	})
}(window.jQuery);;
(function(r, G, f, v) {
	var J = f("html"),
		n = f(r),
		p = f(G),
		b = f.fancybox = function() {
			b.open.apply(this, arguments)
		},
		I = navigator.userAgent.match(/msie/i),
		B = null,
		s = G.createTouch !== v,
		t = function(a) {
			return a && a.hasOwnProperty && a instanceof f
		},
		q = function(a) {
			return a && "string" === f.type(a)
		},
		E = function(a) {
			return q(a) && 0 < a.indexOf("%")
		},
		l = function(a, d) {
			var e = parseInt(a, 10) || 0;
			d && E(a) && (e *= b.getViewport()[d] / 100);
			return Math.ceil(e)
		},
		w = function(a, b) {
			return l(a, b) + "px"
		};
	f.extend(b, {
		version: "2.1.5",
		defaults: {
			padding: 15,
			margin: 20,
			width: 800,
			height: 600,
			minWidth: 100,
			minHeight: 100,
			maxWidth: 9999,
			maxHeight: 9999,
			pixelRatio: 1,
			autoSize: !0,
			autoHeight: !1,
			autoWidth: !1,
			autoResize: !0,
			autoCenter: !s,
			fitToView: !0,
			aspectRatio: !1,
			topRatio: 0.5,
			leftRatio: 0.5,
			scrolling: "auto",
			wrapCSS: "",
			arrows: !0,
			closeBtn: !0,
			closeClick: !1,
			nextClick: !1,
			mouseWheel: !0,
			autoPlay: !1,
			playSpeed: 3E3,
			preload: 3,
			modal: !1,
			loop: !0,
			ajax: {
				dataType: "html",
				headers: {
					"X-fancyBox": !0
				}
			},
			iframe: {
				scrolling: "auto",
				preload: !0
			},
			swf: {
				wmode: "transparent",
				allowfullscreen: "true",
				allowscriptaccess: "always"
			},
			keys: {
				next: {
					13: "left",
					34: "up",
					39: "left",
					40: "up"
				},
				prev: {
					8: "right",
					33: "down",
					37: "right",
					38: "down"
				},
				close: [27],
				play: [32],
				toggle: [70]
			},
			direction: {
				next: "left",
				prev: "right"
			},
			scrollOutside: !0,
			index: 0,
			type: null,
			href: null,
			content: null,
			title: null,
			tpl: {
				wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
				image: '<img class="fancybox-image" src="{href}" alt="" />',
				iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' +
					(I ? ' allowtransparency="true"' : "") + "></iframe>",
				error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
				closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
				next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
				prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
			},
			openEffect: "fade",
			openSpeed: 250,
			openEasing: "swing",
			openOpacity: !0,
			openMethod: "zoomIn",
			closeEffect: "fade",
			closeSpeed: 250,
			closeEasing: "swing",
			closeOpacity: !0,
			closeMethod: "zoomOut",
			nextEffect: "elastic",
			nextSpeed: 250,
			nextEasing: "swing",
			nextMethod: "changeIn",
			prevEffect: "elastic",
			prevSpeed: 250,
			prevEasing: "swing",
			prevMethod: "changeOut",
			helpers: {
				overlay: !0,
				title: !0
			},
			onCancel: f.noop,
			beforeLoad: f.noop,
			afterLoad: f.noop,
			beforeShow: f.noop,
			afterShow: f.noop,
			beforeChange: f.noop,
			beforeClose: f.noop,
			afterClose: f.noop
		},
		group: {},
		opts: {},
		previous: null,
		coming: null,
		current: null,
		isActive: !1,
		isOpen: !1,
		isOpened: !1,
		wrap: null,
		skin: null,
		outer: null,
		inner: null,
		player: {
			timer: null,
			isActive: !1
		},
		ajaxLoad: null,
		imgPreload: null,
		transitions: {},
		helpers: {},
		open: function(a, d) {
			if (a && (f.isPlainObject(d) || (d = {}), !1 !== b.close(!0))) return f.isArray(a) || (a = t(a) ? f(a).get() : [a]), f.each(a, function(e, c) {
				var k = {},
					g, h, j, m, l;
				"object" === f.type(c) && (c.nodeType && (c = f(c)), t(c) ? (k = {
					href: c.data("fancybox-href") || c.attr("href"),
					title: c.data("fancybox-title") || c.attr("title"),
					isDom: !0,
					element: c
				}, f.metadata && f.extend(!0, k, c.metadata())) : k = c);
				g = d.href || k.href || (q(c) ? c : null);
				h = d.title !== v ? d.title : k.title || "";
				m = (j = d.content || k.content) ? "html" : d.type || k.type;
				!m && k.isDom && (m = c.data("fancybox-type"), m || (m = (m = c.prop("class").match(/fancybox\.(\w+)/)) ? m[1] : null));
				q(g) && (m || (b.isImage(g) ? m = "image" : b.isSWF(g) ? m = "swf" : "#" === g.charAt(0) ? m = "inline" : q(c) && (m = "html", j = c)), "ajax" === m && (l = g.split(/\s+/, 2), g = l.shift(), l = l.shift()));
				j || ("inline" === m ? g ? j = f(q(g) ? g.replace(/.*(?=#[^\s]+$)/, "") : g) : k.isDom && (j = c) : "html" === m ? j = g : !m && (!g && k.isDom) && (m = "inline", j = c));
				f.extend(k, {
					href: g,
					type: m,
					content: j,
					title: h,
					selector: l
				});
				a[e] = k
			}), b.opts = f.extend(!0, {}, b.defaults, d), d.keys !== v && (b.opts.keys = d.keys ? f.extend({}, b.defaults.keys, d.keys) : !1), b.group = a, b._start(b.opts.index)
		},
		cancel: function() {
			var a = b.coming;
			a && !1 !== b.trigger("onCancel") && (b.hideLoading(), b.ajaxLoad && b.ajaxLoad.abort(), b.ajaxLoad = null, b.imgPreload && (b.imgPreload.onload = b.imgPreload.onerror = null), a.wrap && a.wrap.stop(!0, !0).trigger("onReset").remove(), b.coming = null, b.current || b._afterZoomOut(a))
		},
		close: function(a) {
			b.cancel();
			!1 !== b.trigger("beforeClose") && (b.unbindEvents(), b.isActive && (!b.isOpen || !0 === a ? (f(".fancybox-wrap").stop(!0).trigger("onReset").remove(), b._afterZoomOut()) : (b.isOpen = b.isOpened = !1, b.isClosing = !0, f(".fancybox-item, .fancybox-nav").remove(), b.wrap.stop(!0, !0).removeClass("fancybox-opened"), b.transitions[b.current.closeMethod]())))
		},
		play: function(a) {
			var d = function() {
					clearTimeout(b.player.timer)
				},
				e = function() {
					d();
					b.current && b.player.isActive && (b.player.timer = setTimeout(b.next, b.current.playSpeed))
				},
				c = function() {
					d();
					p.unbind(".player");
					b.player.isActive = !1;
					b.trigger("onPlayEnd")
				};
			if (!0 === a || !b.player.isActive && !1 !== a) {
				if (b.current && (b.current.loop || b.current.index < b.group.length - 1)) b.player.isActive = !0, p.bind({
					"onCancel.player beforeClose.player": c,
					"onUpdate.player": e,
					"beforeLoad.player": d
				}), e(), b.trigger("onPlayStart")
			} else c()
		},
		next: function(a) {
			var d = b.current;
			d && (q(a) || (a = d.direction.next), b.jumpto(d.index + 1, a, "next"))
		},
		prev: function(a) {
			var d = b.current;
			d && (q(a) || (a = d.direction.prev), b.jumpto(d.index - 1, a, "prev"))
		},
		jumpto: function(a, d, e) {
			var c = b.current;
			c && (a = l(a), b.direction = d || c.direction[a >= c.index ? "next" : "prev"], b.router = e || "jumpto", c.loop && (0 > a && (a = c.group.length + a % c.group.length), a %= c.group.length), c.group[a] !== v && (b.cancel(), b._start(a)))
		},
		reposition: function(a, d) {
			var e = b.current,
				c = e ? e.wrap : null,
				k;
			c && (k = b._getPosition(d), a && "scroll" === a.type ? (delete k.position, c.stop(!0, !0).animate(k, 200)) : (c.css(k), e.pos = f.extend({}, e.dim, k)))
		},
		update: function(a) {
			var d = a && a.type,
				e = !d || "orientationchange" === d;
			e && (clearTimeout(B), B = null);
			b.isOpen && !B && (B = setTimeout(function() {
				var c = b.current;
				c && !b.isClosing && (b.wrap.removeClass("fancybox-tmp"), (e || "load" === d || "resize" === d && c.autoResize) && b._setDimension(), "scroll" === d && c.canShrink || b.reposition(a), b.trigger("onUpdate"), B = null)
			}, e && !s ? 0 : 300))
		},
		toggle: function(a) {
			b.isOpen && (b.current.fitToView = "boolean" === f.type(a) ? a : !b.current.fitToView, s && (b.wrap.removeAttr("style").addClass("fancybox-tmp"), b.trigger("onUpdate")), b.update())
		},
		hideLoading: function() {
			p.unbind(".loading");
			f("#fancybox-loading").remove()
		},
		showLoading: function() {
			var a, d;
			b.hideLoading();
			a = f('<div id="fancybox-loading"><div></div></div>').click(b.cancel).appendTo("body");
			p.bind("keydown.loading", function(a) {
				if (27 === (a.which || a.keyCode)) a.preventDefault(), b.cancel()
			});
			b.defaults.fixed || (d = b.getViewport(), a.css({
				position: "absolute",
				top: 0.5 * d.h + d.y,
				left: 0.5 * d.w + d.x
			}))
		},
		getViewport: function() {
			var a = b.current && b.current.locked || !1,
				d = {
					x: n.scrollLeft(),
					y: n.scrollTop()
				};
			a ? (d.w = a[0].clientWidth, d.h = a[0].clientHeight) : (d.w = s && r.innerWidth ? r.innerWidth : n.width(), d.h = s && r.innerHeight ? r.innerHeight : n.height());
			return d
		},
		unbindEvents: function() {
			b.wrap && t(b.wrap) && b.wrap.unbind(".fb");
			p.unbind(".fb");
			n.unbind(".fb")
		},
		bindEvents: function() {
			var a = b.current,
				d;
			a && (n.bind("orientationchange.fb" + (s ? "" : " resize.fb") + (a.autoCenter && !a.locked ? " scroll.fb" : ""), b.update), (d = a.keys) && p.bind("keydown.fb", function(e) {
				var c = e.which || e.keyCode,
					k = e.target || e.srcElement;
				if (27 === c && b.coming) return !1;
				!e.ctrlKey && (!e.altKey && !e.shiftKey && !e.metaKey && (!k || !k.type && !f(k).is("[contenteditable]"))) && f.each(d, function(d, k) {
					if (1 < a.group.length && k[c] !== v) return b[d](k[c]), e.preventDefault(), !1;
					if (-1 < f.inArray(c, k)) return b[d](), e.preventDefault(), !1
				})
			}), f.fn.mousewheel && a.mouseWheel && b.wrap.bind("mousewheel.fb", function(d, c, k, g) {
				for (var h = f(d.target || null), j = !1; h.length && !j && !h.is(".fancybox-skin") && !h.is(".fancybox-wrap");) j = h[0] && !(h[0].style.overflow && "hidden" === h[0].style.overflow) && (h[0].clientWidth && h[0].scrollWidth > h[0].clientWidth || h[0].clientHeight && h[0].scrollHeight > h[0].clientHeight), h = f(h).parent();
				if (0 !== c && !j && 1 < b.group.length && !a.canShrink) {
					if (0 < g || 0 < k) b.prev(0 < g ? "down" : "left");
					else if (0 > g || 0 > k) b.next(0 > g ? "up" : "right");
					d.preventDefault()
				}
			}))
		},
		trigger: function(a, d) {
			var e, c = d || b.coming || b.current;
			if (c) {
				f.isFunction(c[a]) && (e = c[a].apply(c, Array.prototype.slice.call(arguments, 1)));
				if (!1 === e) return !1;
				c.helpers && f.each(c.helpers, function(d, e) {
					if (e && b.helpers[d] && f.isFunction(b.helpers[d][a])) b.helpers[d][a](f.extend(!0, {}, b.helpers[d].defaults, e), c)
				});
				p.trigger(a)
			}
		},
		isImage: function(a) {
			return q(a) && a.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)
		},
		isSWF: function(a) {
			return q(a) && a.match(/\.(swf)((\?|#).*)?$/i)
		},
		_start: function(a) {
			var d = {},
				e, c;
			a = l(a);
			e = b.group[a] || null;
			if (!e) return !1;
			d = f.extend(!0, {}, b.opts, e);
			e = d.margin;
			c = d.padding;
			"number" === f.type(e) && (d.margin = [e, e, e, e]);
			"number" === f.type(c) && (d.padding = [c, c, c, c]);
			d.modal && f.extend(!0, d, {
				closeBtn: !1,
				closeClick: !1,
				nextClick: !1,
				arrows: !1,
				mouseWheel: !1,
				keys: null,
				helpers: {
					overlay: {
						closeClick: !1
					}
				}
			});
			d.autoSize && (d.autoWidth = d.autoHeight = !0);
			"auto" === d.width && (d.autoWidth = !0);
			"auto" === d.height && (d.autoHeight = !0);
			d.group = b.group;
			d.index = a;
			b.coming = d;
			if (!1 === b.trigger("beforeLoad")) b.coming = null;
			else {
				c = d.type;
				e = d.href;
				if (!c) return b.coming = null, b.current && b.router && "jumpto" !== b.router ? (b.current.index = a, b[b.router](b.direction)) : !1;
				b.isActive = !0;
				if ("image" === c || "swf" === c) d.autoHeight = d.autoWidth = !1, d.scrolling = "visible";
				"image" === c && (d.aspectRatio = !0);
				"iframe" === c && s && (d.scrolling = "scroll");
				d.wrap = f(d.tpl.wrap).addClass("fancybox-" + (s ? "mobile" : "desktop") + " fancybox-type-" + c + " fancybox-tmp " + d.wrapCSS).appendTo(d.parent || "body");
				f.extend(d, {
					skin: f(".fancybox-skin", d.wrap),
					outer: f(".fancybox-outer", d.wrap),
					inner: f(".fancybox-inner", d.wrap)
				});
				f.each(["Top", "Right", "Bottom", "Left"], function(a, b) {
					d.skin.css("padding" + b, w(d.padding[a]))
				});
				b.trigger("onReady");
				if ("inline" === c || "html" === c) {
					if (!d.content || !d.content.length) return b._error("content")
				} else if (!e) return b._error("href");
				"image" === c ? b._loadImage() : "ajax" === c ? b._loadAjax() : "iframe" === c ? b._loadIframe() : b._afterLoad()
			}
		},
		_error: function(a) {
			f.extend(b.coming, {
				type: "html",
				autoWidth: !0,
				autoHeight: !0,
				minWidth: 0,
				minHeight: 0,
				scrolling: "no",
				hasError: a,
				content: b.coming.tpl.error
			});
			b._afterLoad()
		},
		_loadImage: function() {
			var a = b.imgPreload = new Image;
			a.onload = function() {
				this.onload = this.onerror = null;
				b.coming.width = this.width / b.opts.pixelRatio;
				b.coming.height = this.height / b.opts.pixelRatio;
				b._afterLoad()
			};
			a.onerror = function() {
				this.onload = this.onerror = null;
				b._error("image")
			};
			a.src = b.coming.href;
			!0 !== a.complete && b.showLoading()
		},
		_loadAjax: function() {
			var a = b.coming;
			b.showLoading();
			b.ajaxLoad = f.ajax(f.extend({}, a.ajax, {
				url: a.href,
				error: function(a, e) {
					b.coming && "abort" !== e ? b._error("ajax", a) : b.hideLoading()
				},
				success: function(d, e) {
					"success" === e && (a.content = d, b._afterLoad())
				}
			}))
		},
		_loadIframe: function() {
			var a = b.coming,
				d = f(a.tpl.iframe.replace(/\{rnd\}/g, (new Date).getTime())).attr("scrolling", s ? "auto" : a.iframe.scrolling).attr("src", a.href);
			f(a.wrap).bind("onReset", function() {
				try {
					f(this).find("iframe").hide().attr("src", "//about:blank").end().empty()
				} catch (a) {}
			});
			a.iframe.preload && (b.showLoading(), d.one("load", function() {
				f(this).data("ready", 1);
				s || f(this).bind("load.fb", b.update);
				f(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show();
				b._afterLoad()
			}));
			a.content = d.appendTo(a.inner);
			a.iframe.preload || b._afterLoad()
		},
		_preloadImages: function() {
			var a = b.group,
				d = b.current,
				e = a.length,
				c = d.preload ? Math.min(d.preload, e - 1) : 0,
				f, g;
			for (g = 1; g <= c; g += 1) f = a[(d.index + g) % e], "image" === f.type && f.href && ((new Image).src = f.href)
		},
		_afterLoad: function() {
			var a = b.coming,
				d = b.current,
				e, c, k, g, h;
			b.hideLoading();
			if (a && !1 !== b.isActive)
				if (!1 === b.trigger("afterLoad", a, d)) a.wrap.stop(!0).trigger("onReset").remove(), b.coming = null;
				else {
					d && (b.trigger("beforeChange", d), d.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove());
					b.unbindEvents();
					e = a.content;
					c = a.type;
					k = a.scrolling;
					f.extend(b, {
						wrap: a.wrap,
						skin: a.skin,
						outer: a.outer,
						inner: a.inner,
						current: a,
						previous: d
					});
					g = a.href;
					switch (c) {
						case "inline":
						case "ajax":
						case "html":
							a.selector ? e = f("<div>").html(e).find(a.selector) : t(e) && (e.data("fancybox-placeholder") || e.data("fancybox-placeholder", f('<div class="fancybox-placeholder"></div>').insertAfter(e).hide()), e = e.show().detach(), a.wrap.bind("onReset", function() {
								f(this).find(e).length && e.hide().replaceAll(e.data("fancybox-placeholder")).data("fancybox-placeholder", !1)
							}));
							break;
						case "image":
							e = a.tpl.image.replace("{href}", g);
							break;
						case "swf":
							e = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + g + '"></param>', h = "", f.each(a.swf, function(a, b) {
								e += '<param name="' + a + '" value="' + b + '"></param>';
								h += " " + a + '="' + b + '"'
							}), e += '<embed src="' + g + '" type="application/x-shockwave-flash" width="100%" height="100%"' + h + "></embed></object>"
					}(!t(e) || !e.parent().is(a.inner)) && a.inner.append(e);
					b.trigger("beforeShow");
					a.inner.css("overflow", "yes" === k ? "scroll" : "no" === k ? "hidden" : k);
					b._setDimension();
					b.reposition();
					b.isOpen = !1;
					b.coming = null;
					b.bindEvents();
					if (b.isOpened) {
						if (d.prevMethod) b.transitions[d.prevMethod]()
					} else f(".fancybox-wrap").not(a.wrap).stop(!0).trigger("onReset").remove();
					b.transitions[b.isOpened ? a.nextMethod : a.openMethod]();
					b._preloadImages()
				}
		},
		_setDimension: function() {
			var a = b.getViewport(),
				d = 0,
				e = !1,
				c = !1,
				e = b.wrap,
				k = b.skin,
				g = b.inner,
				h = b.current,
				c = h.width,
				j = h.height,
				m = h.minWidth,
				u = h.minHeight,
				n = h.maxWidth,
				p = h.maxHeight,
				s = h.scrolling,
				q = h.scrollOutside ? h.scrollbarWidth : 0,
				x = h.margin,
				y = l(x[1] + x[3]),
				r = l(x[0] + x[2]),
				v, z, t, C, A, F, B, D, H;
			e.add(k).add(g).width("auto").height("auto").removeClass("fancybox-tmp");
			x = l(k.outerWidth(!0) - k.width());
			v = l(k.outerHeight(!0) - k.height());
			z = y + x;
			t = r + v;
			C = E(c) ? (a.w - z) * l(c) / 100 : c;
			A = E(j) ? (a.h - t) * l(j) / 100 : j;
			if ("iframe" === h.type) {
				if (H = h.content, h.autoHeight && 1 === H.data("ready")) try {
					H[0].contentWindow.document.location && (g.width(C).height(9999), F = H.contents().find("body"), q && F.css("overflow-x", "hidden"), A = F.outerHeight(!0))
				} catch (G) {}
			} else if (h.autoWidth || h.autoHeight) g.addClass("fancybox-tmp"), h.autoWidth || g.width(C), h.autoHeight || g.height(A), h.autoWidth && (C = g.width()), h.autoHeight && (A = g.height()), g.removeClass("fancybox-tmp");
			c = l(C);
			j = l(A);
			D = C / A;
			m = l(E(m) ? l(m, "w") - z : m);
			n = l(E(n) ? l(n, "w") - z : n);
			u = l(E(u) ? l(u, "h") - t : u);
			p = l(E(p) ? l(p, "h") - t : p);
			F = n;
			B = p;
			h.fitToView && (n = Math.min(a.w - z, n), p = Math.min(a.h - t, p));
			z = a.w - y;
			r = a.h - r;
			h.aspectRatio ? (c > n && (c = n, j = l(c / D)), j > p && (j = p, c = l(j * D)), c < m && (c = m, j = l(c / D)), j < u && (j = u, c = l(j * D))) : (c = Math.max(m, Math.min(c, n)), h.autoHeight && "iframe" !== h.type && (g.width(c), j = g.height()), j = Math.max(u, Math.min(j, p)));
			if (h.fitToView)
				if (g.width(c).height(j), e.width(c + x), a = e.width(), y = e.height(), h.aspectRatio)
					for (;
						(a > z || y > r) && (c > m && j > u) && !(19 < d++);) j = Math.max(u, Math.min(p, j - 10)), c = l(j * D), c < m && (c = m, j = l(c / D)), c > n && (c = n, j = l(c / D)), g.width(c).height(j), e.width(c + x), a = e.width(), y = e.height();
				else c = Math.max(m, Math.min(c, c - (a - z))), j = Math.max(u, Math.min(j, j - (y - r)));
			q && ("auto" === s && j < A && c + x + q < z) && (c += q);
			g.width(c).height(j);
			e.width(c + x);
			a = e.width();
			y = e.height();
			e = (a > z || y > r) && c > m && j > u;
			c = h.aspectRatio ? c < F && j < B && c < C && j < A : (c < F || j < B) && (c < C || j < A);
			f.extend(h, {
				dim: {
					width: w(a),
					height: w(y)
				},
				origWidth: C,
				origHeight: A,
				canShrink: e,
				canExpand: c,
				wPadding: x,
				hPadding: v,
				wrapSpace: y - k.outerHeight(!0),
				skinSpace: k.height() - j
			});
			!H && (h.autoHeight && j > u && j < p && !c) && g.height("auto")
		},
		_getPosition: function(a) {
			var d = b.current,
				e = b.getViewport(),
				c = d.margin,
				f = b.wrap.width() + c[1] + c[3],
				g = b.wrap.height() + c[0] + c[2],
				c = {
					position: "absolute",
					top: c[0],
					left: c[3]
				};
			d.autoCenter && d.fixed && !a && g <= e.h && f <= e.w ? c.position = "fixed" : d.locked || (c.top += e.y, c.left += e.x);
			c.top = w(Math.max(c.top, c.top + (e.h - g) * d.topRatio));
			c.left = w(Math.max(c.left, c.left + (e.w - f) * d.leftRatio));
			return c
		},
		_afterZoomIn: function() {
			var a = b.current;
			a && (b.isOpen = b.isOpened = !0, b.wrap.css("overflow", "visible").addClass("fancybox-opened"), b.update(), (a.closeClick || a.nextClick && 1 < b.group.length) && b.inner.css("cursor", "pointer").bind("click.fb", function(d) {
				!f(d.target).is("a") && !f(d.target).parent().is("a") && (d.preventDefault(), b[a.closeClick ? "close" : "next"]())
			}), a.closeBtn && f(a.tpl.closeBtn).appendTo(b.skin).bind("click.fb", function(a) {
				a.preventDefault();
				b.close()
			}), a.arrows && 1 < b.group.length && ((a.loop || 0 < a.index) && f(a.tpl.prev).appendTo(b.outer).bind("click.fb", b.prev), (a.loop || a.index < b.group.length - 1) && f(a.tpl.next).appendTo(b.outer).bind("click.fb", b.next)), b.trigger("afterShow"), !a.loop && a.index === a.group.length - 1 ? b.play(!1) : b.opts.autoPlay && !b.player.isActive && (b.opts.autoPlay = !1, b.play()))
		},
		_afterZoomOut: function(a) {
			a = a || b.current;
			f(".fancybox-wrap").trigger("onReset").remove();
			f.extend(b, {
				group: {},
				opts: {},
				router: !1,
				current: null,
				isActive: !1,
				isOpened: !1,
				isOpen: !1,
				isClosing: !1,
				wrap: null,
				skin: null,
				outer: null,
				inner: null
			});
			b.trigger("afterClose", a)
		}
	});
	b.transitions = {
		getOrigPosition: function() {
			var a = b.current,
				d = a.element,
				e = a.orig,
				c = {},
				f = 50,
				g = 50,
				h = a.hPadding,
				j = a.wPadding,
				m = b.getViewport();
			!e && (a.isDom && d.is(":visible")) && (e = d.find("img:first"), e.length || (e = d));
			t(e) ? (c = e.offset(), e.is("img") && (f = e.outerWidth(), g = e.outerHeight())) : (c.top = m.y + (m.h - g) * a.topRatio, c.left = m.x + (m.w - f) * a.leftRatio);
			if ("fixed" === b.wrap.css("position") || a.locked) c.top -= m.y, c.left -= m.x;
			return c = {
				top: w(c.top - h * a.topRatio),
				left: w(c.left - j * a.leftRatio),
				width: w(f + j),
				height: w(g + h)
			}
		},
		step: function(a, d) {
			var e, c, f = d.prop;
			c = b.current;
			var g = c.wrapSpace,
				h = c.skinSpace;
			if ("width" === f || "height" === f) e = d.end === d.start ? 1 : (a - d.start) / (d.end - d.start), b.isClosing && (e = 1 - e), c = "width" === f ? c.wPadding : c.hPadding, c = a - c, b.skin[f](l("width" === f ? c : c - g * e)), b.inner[f](l("width" === f ? c : c - g * e - h * e))
		},
		zoomIn: function() {
			var a = b.current,
				d = a.pos,
				e = a.openEffect,
				c = "elastic" === e,
				k = f.extend({
					opacity: 1
				}, d);
			delete k.position;
			c ? (d = this.getOrigPosition(), a.openOpacity && (d.opacity = 0.1)) : "fade" === e && (d.opacity = 0.1);
			b.wrap.css(d).animate(k, {
				duration: "none" === e ? 0 : a.openSpeed,
				easing: a.openEasing,
				step: c ? this.step : null,
				complete: b._afterZoomIn
			})
		},
		zoomOut: function() {
			var a = b.current,
				d = a.closeEffect,
				e = "elastic" === d,
				c = {
					opacity: 0.1
				};
			e && (c = this.getOrigPosition(), a.closeOpacity && (c.opacity = 0.1));
			b.wrap.animate(c, {
				duration: "none" === d ? 0 : a.closeSpeed,
				easing: a.closeEasing,
				step: e ? this.step : null,
				complete: b._afterZoomOut
			})
		},
		changeIn: function() {
			var a = b.current,
				d = a.nextEffect,
				e = a.pos,
				c = {
					opacity: 1
				},
				f = b.direction,
				g;
			e.opacity = 0.1;
			"elastic" === d && (g = "down" === f || "up" === f ? "top" : "left", "down" === f || "right" === f ? (e[g] = w(l(e[g]) - 200), c[g] = "+=200px") : (e[g] = w(l(e[g]) + 200), c[g] = "-=200px"));
			"none" === d ? b._afterZoomIn() : b.wrap.css(e).animate(c, {
				duration: a.nextSpeed,
				easing: a.nextEasing,
				complete: b._afterZoomIn
			})
		},
		changeOut: function() {
			var a = b.previous,
				d = a.prevEffect,
				e = {
					opacity: 0.1
				},
				c = b.direction;
			"elastic" === d && (e["down" === c || "up" === c ? "top" : "left"] = ("up" === c || "left" === c ? "-" : "+") + "=200px");
			a.wrap.animate(e, {
				duration: "none" === d ? 0 : a.prevSpeed,
				easing: a.prevEasing,
				complete: function() {
					f(this).trigger("onReset").remove()
				}
			})
		}
	};
	b.helpers.overlay = {
		defaults: {
			closeClick: !0,
			speedOut: 200,
			showEarly: !0,
			css: {},
			locked: !s,
			fixed: !0
		},
		overlay: null,
		fixed: !1,
		el: f("html"),
		create: function(a) {
			a = f.extend({}, this.defaults, a);
			this.overlay && this.close();
			this.overlay = f('<div class="fancybox-overlay"></div>').appendTo(b.coming ? b.coming.parent : a.parent);
			this.fixed = !1;
			a.fixed && b.defaults.fixed && (this.overlay.addClass("fancybox-overlay-fixed"), this.fixed = !0)
		},
		open: function(a) {
			var d = this;
			a = f.extend({}, this.defaults, a);
			this.overlay ? this.overlay.unbind(".overlay").width("auto").height("auto") : this.create(a);
			this.fixed || (n.bind("resize.overlay", f.proxy(this.update, this)), this.update());
			a.closeClick && this.overlay.bind("click.overlay", function(a) {
				if (f(a.target).hasClass("fancybox-overlay")) return b.isActive ? b.close() : d.close(), !1
			});
			this.overlay.css(a.css).show()
		},
		close: function() {
			var a, b;
			n.unbind("resize.overlay");
			this.el.hasClass("fancybox-lock") && (f(".fancybox-margin").removeClass("fancybox-margin"), a = n.scrollTop(), b = n.scrollLeft(), this.el.removeClass("fancybox-lock"), n.scrollTop(a).scrollLeft(b));
			f(".fancybox-overlay").remove().hide();
			f.extend(this, {
				overlay: null,
				fixed: !1
			})
		},
		update: function() {
			var a = "100%",
				b;
			this.overlay.width(a).height("100%");
			I ? (b = Math.max(G.documentElement.offsetWidth, G.body.offsetWidth), p.width() > b && (a = p.width())) : p.width() > n.width() && (a = p.width());
			this.overlay.width(a).height(p.height())
		},
		onReady: function(a, b) {
			var e = this.overlay;
			f(".fancybox-overlay").stop(!0, !0);
			e || this.create(a);
			a.locked && (this.fixed && b.fixed) && (e || (this.margin = p.height() > n.height() ? f("html").css("margin-right").replace("px", "") : !1), b.locked = this.overlay.append(b.wrap), b.fixed = !1);
			!0 === a.showEarly && this.beforeShow.apply(this, arguments)
		},
		beforeShow: function(a, b) {
			var e, c;
			b.locked && (!1 !== this.margin && (f("*").filter(function() {
				return "fixed" === f(this).css("position") && !f(this).hasClass("fancybox-overlay") && !f(this).hasClass("fancybox-wrap")
			}).addClass("fancybox-margin"), this.el.addClass("fancybox-margin")), e = n.scrollTop(), c = n.scrollLeft(), this.el.addClass("fancybox-lock"), n.scrollTop(e).scrollLeft(c));
			this.open(a)
		},
		onUpdate: function() {
			this.fixed || this.update()
		},
		afterClose: function(a) {
			this.overlay && !b.coming && this.overlay.fadeOut(a.speedOut, f.proxy(this.close, this))
		}
	};
	b.helpers.title = {
		defaults: {
			type: "float",
			position: "bottom"
		},
		beforeShow: function(a) {
			var d = b.current,
				e = d.title,
				c = a.type;
			f.isFunction(e) && (e = e.call(d.element, d));
			if (q(e) && "" !== f.trim(e)) {
				d = f('<div class="fancybox-title fancybox-title-' + c + '-wrap">' + e + "</div>");
				switch (c) {
					case "inside":
						c = b.skin;
						break;
					case "outside":
						c = b.wrap;
						break;
					case "over":
						c = b.inner;
						break;
					default:
						c = b.skin, d.appendTo("body"), I && d.width(d.width()), d.wrapInner('<span class="child"></span>'), b.current.margin[2] += Math.abs(l(d.css("margin-bottom")))
				}
				d["top" === a.position ? "prependTo" : "appendTo"](c)
			}
		}
	};
	f.fn.fancybox = function(a) {
		var d, e = f(this),
			c = this.selector || "",
			k = function(g) {
				var h = f(this).blur(),
					j = d,
					k, l;
				!g.ctrlKey && (!g.altKey && !g.shiftKey && !g.metaKey) && !h.is(".fancybox-wrap") && (k = a.groupAttr || "data-fancybox-group", l = h.attr(k), l || (k = "rel", l = h.get(0)[k]), l && ("" !== l && "nofollow" !== l) && (h = c.length ? f(c) : e, h = h.filter("[" + k + '="' + l + '"]'), j = h.index(this)), a.index = j, !1 !== b.open(h, a) && g.preventDefault())
			};
		a = a || {};
		d = a.index || 0;
		!c || !1 === a.live ? e.unbind("click.fb-start").bind("click.fb-start", k) : p.undelegate(c, "click.fb-start").delegate(c + ":not('.fancybox-item, .fancybox-nav')", "click.fb-start", k);
		this.filter("[data-fancybox-start=1]").trigger("click");
		return this
	};
	p.ready(function() {
		var a, d;
		f.scrollbarWidth === v && (f.scrollbarWidth = function() {
			var a = f('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),
				b = a.children(),
				b = b.innerWidth() - b.height(99).innerWidth();
			a.remove();
			return b
		});
		if (f.support.fixedPosition === v) {
			a = f.support;
			d = f('<div style="position:fixed;top:20px;"></div>').appendTo("body");
			var e = 20 === d[0].offsetTop || 15 === d[0].offsetTop;
			d.remove();
			a.fixedPosition = e
		}
		f.extend(b.defaults, {
			scrollbarWidth: f.scrollbarWidth(),
			fixed: f.support.fixedPosition,
			parent: f("body")
		});
		a = f(r).width();
		J.addClass("fancybox-lock-test");
		d = f(r).width();
		J.removeClass("fancybox-lock-test");
		f("<style type='text/css'>.fancybox-margin{margin-right:" + (d - a) + "px;}</style>").appendTo("head")
	})
})(window, document, jQuery);;
(function($) {
	function sc_setScroll(a, b, c) {
		return "transition" == c.transition && "swing" == b && (b = "ease"), {
			anims: [],
			duration: a,
			orgDuration: a,
			easing: b,
			startTime: getTime()
		}
	}

	function sc_startScroll(a, b) {
		for (var c = 0, d = a.anims.length; d > c; c++) {
			var e = a.anims[c];
			e && e[0][b.transition](e[1], a.duration, a.easing, e[2])
		}
	}

	function sc_stopScroll(a, b) {
		is_boolean(b) || (b = !0), is_object(a.pre) && sc_stopScroll(a.pre, b);
		for (var c = 0, d = a.anims.length; d > c; c++) {
			var e = a.anims[c];
			e[0].stop(!0), b && (e[0].css(e[1]), is_function(e[2]) && e[2]())
		}
		is_object(a.post) && sc_stopScroll(a.post, b)
	}

	function sc_afterScroll(a, b, c) {
		switch (b && b.remove(), c.fx) {
			case "fade":
			case "crossfade":
			case "cover-fade":
			case "uncover-fade":
				a.css("opacity", 1), a.css("filter", "")
		}
	}

	function sc_fireCallbacks(a, b, c, d, e) {
		if (b[c] && b[c].call(a, d), e[c].length)
			for (var f = 0, g = e[c].length; g > f; f++) e[c][f].call(a, d);
		return []
	}

	function sc_fireQueue(a, b, c) {
		return b.length && (a.trigger(cf_e(b[0][0], c), b[0][1]), b.shift()), b
	}

	function sc_hideHiddenItems(a) {
		a.each(function() {
			var a = $(this);
			a.data("_cfs_isHidden", a.is(":hidden")).hide()
		})
	}

	function sc_showHiddenItems(a) {
		a && a.each(function() {
			var a = $(this);
			a.data("_cfs_isHidden") || a.show()
		})
	}

	function sc_clearTimers(a) {
		return a.auto && clearTimeout(a.auto), a.progress && clearInterval(a.progress), a
	}

	function sc_mapCallbackArguments(a, b, c, d, e, f, g) {
		return {
			width: g.width,
			height: g.height,
			items: {
				old: a,
				skipped: b,
				visible: c
			},
			scroll: {
				items: d,
				direction: e,
				duration: f
			}
		}
	}

	function sc_getDuration(a, b, c, d) {
		var e = a.duration;
		return "none" == a.fx ? 0 : ("auto" == e ? e = b.scroll.duration / b.scroll.items * c : 10 > e && (e = d / e), 1 > e ? 0 : ("fade" == a.fx && (e /= 2), Math.round(e)))
	}

	function nv_showNavi(a, b, c) {
		var d = is_number(a.items.minimum) ? a.items.minimum : a.items.visible + 1;
		if ("show" == b || "hide" == b) var e = b;
		else if (d > b) {
			debug(c, "Not enough items (" + b + " total, " + d + " needed): Hiding navigation.");
			var e = "hide"
		} else var e = "show";
		var f = "show" == e ? "removeClass" : "addClass",
			g = cf_c("hidden", c);
		a.auto.button && a.auto.button[e]()[f](g), a.prev.button && a.prev.button[e]()[f](g), a.next.button && a.next.button[e]()[f](g), a.pagination.container && a.pagination.container[e]()[f](g)
	}

	function nv_enableNavi(a, b, c) {
		if (!a.circular && !a.infinite) {
			var d = "removeClass" == b || "addClass" == b ? b : !1,
				e = cf_c("disabled", c);
			if (a.auto.button && d && a.auto.button[d](e), a.prev.button) {
				var f = d || 0 == b ? "addClass" : "removeClass";
				a.prev.button[f](e)
			}
			if (a.next.button) {
				var f = d || b == a.items.visible ? "addClass" : "removeClass";
				a.next.button[f](e)
			}
		}
	}

	function go_getObject(a, b) {
		return is_function(b) ? b = b.call(a) : is_undefined(b) && (b = {}), b
	}

	function go_getItemsObject(a, b) {
		return b = go_getObject(a, b), is_number(b) ? b = {
			visible: b
		} : "variable" == b ? b = {
			visible: b,
			width: b,
			height: b
		} : is_object(b) || (b = {}), b
	}

	function go_getScrollObject(a, b) {
		return b = go_getObject(a, b), is_number(b) ? b = 50 >= b ? {
			items: b
		} : {
			duration: b
		} : is_string(b) ? b = {
			easing: b
		} : is_object(b) || (b = {}), b
	}

	function go_getNaviObject(a, b) {
		if (b = go_getObject(a, b), is_string(b)) {
			var c = cf_getKeyCode(b);
			b = -1 == c ? $(b) : c
		}
		return b
	}

	function go_getAutoObject(a, b) {
		return b = go_getNaviObject(a, b), is_jquery(b) ? b = {
			button: b
		} : is_boolean(b) ? b = {
			play: b
		} : is_number(b) && (b = {
			timeoutDuration: b
		}), b.progress && (is_string(b.progress) || is_jquery(b.progress)) && (b.progress = {
			bar: b.progress
		}), b
	}

	function go_complementAutoObject(a, b) {
		return is_function(b.button) && (b.button = b.button.call(a)), is_string(b.button) && (b.button = $(b.button)), is_boolean(b.play) || (b.play = !0), is_number(b.delay) || (b.delay = 0), is_undefined(b.pauseOnEvent) && (b.pauseOnEvent = !0), is_boolean(b.pauseOnResize) || (b.pauseOnResize = !0), is_number(b.timeoutDuration) || (b.timeoutDuration = 10 > b.duration ? 2500 : 5 * b.duration), b.progress && (is_function(b.progress.bar) && (b.progress.bar = b.progress.bar.call(a)), is_string(b.progress.bar) && (b.progress.bar = $(b.progress.bar)), b.progress.bar ? (is_function(b.progress.updater) || (b.progress.updater = $.fn.carouFredSel.progressbarUpdater), is_number(b.progress.interval) || (b.progress.interval = 50)) : b.progress = !1), b
	}

	function go_getPrevNextObject(a, b) {
		return b = go_getNaviObject(a, b), is_jquery(b) ? b = {
			button: b
		} : is_number(b) && (b = {
			key: b
		}), b
	}

	function go_complementPrevNextObject(a, b) {
		return is_function(b.button) && (b.button = b.button.call(a)), is_string(b.button) && (b.button = $(b.button)), is_string(b.key) && (b.key = cf_getKeyCode(b.key)), b
	}

	function go_getPaginationObject(a, b) {
		return b = go_getNaviObject(a, b), is_jquery(b) ? b = {
			container: b
		} : is_boolean(b) && (b = {
			keys: b
		}), b
	}

	function go_complementPaginationObject(a, b) {
		return is_function(b.container) && (b.container = b.container.call(a)), is_string(b.container) && (b.container = $(b.container)), is_number(b.items) || (b.items = !1), is_boolean(b.keys) || (b.keys = !1), is_function(b.anchorBuilder) || is_false(b.anchorBuilder) || (b.anchorBuilder = $.fn.carouFredSel.pageAnchorBuilder), is_number(b.deviation) || (b.deviation = 0), b
	}

	function go_getSwipeObject(a, b) {
		return is_function(b) && (b = b.call(a)), is_undefined(b) && (b = {
			onTouch: !1
		}), is_true(b) ? b = {
			onTouch: b
		} : is_number(b) && (b = {
			items: b
		}), b
	}

	function go_complementSwipeObject(a, b) {
		return is_boolean(b.onTouch) || (b.onTouch = !0), is_boolean(b.onMouse) || (b.onMouse = !1), is_object(b.options) || (b.options = {}), is_boolean(b.options.triggerOnTouchEnd) || (b.options.triggerOnTouchEnd = !1), b
	}

	function go_getMousewheelObject(a, b) {
		return is_function(b) && (b = b.call(a)), is_true(b) ? b = {} : is_number(b) ? b = {
			items: b
		} : is_undefined(b) && (b = !1), b
	}

	function go_complementMousewheelObject(a, b) {
		return b
	}

	function gn_getItemIndex(a, b, c, d, e) {
		if (is_string(a) && (a = $(a, e)), is_object(a) && (a = $(a, e)), is_jquery(a) ? (a = e.children().index(a), is_boolean(c) || (c = !1)) : is_boolean(c) || (c = !0), is_number(a) || (a = 0), is_number(b) || (b = 0), c && (a += d.first), a += b, d.total > 0) {
			for (; a >= d.total;) a -= d.total;
			for (; 0 > a;) a += d.total
		}
		return a
	}

	function gn_getVisibleItemsPrev(a, b, c) {
		for (var d = 0, e = 0, f = c; f >= 0; f--) {
			var g = a.eq(f);
			if (d += g.is(":visible") ? g[b.d.outerWidth](!0) : 0, d > b.maxDimension) return e;
			0 == f && (f = a.length), e++
		}
	}

	function gn_getVisibleItemsPrevFilter(a, b, c) {
		return gn_getItemsPrevFilter(a, b.items.filter, b.items.visibleConf.org, c)
	}

	function gn_getScrollItemsPrevFilter(a, b, c, d) {
		return gn_getItemsPrevFilter(a, b.items.filter, d, c)
	}

	function gn_getItemsPrevFilter(a, b, c, d) {
		for (var e = 0, f = 0, g = d, h = a.length; g >= 0; g--) {
			if (f++, f == h) return f;
			var i = a.eq(g);
			if (i.is(b) && (e++, e == c)) return f;
			0 == g && (g = h)
		}
	}

	function gn_getVisibleOrg(a, b) {
		return b.items.visibleConf.org || a.children().slice(0, b.items.visible).filter(b.items.filter).length
	}

	function gn_getVisibleItemsNext(a, b, c) {
		for (var d = 0, e = 0, f = c, g = a.length - 1; g >= f; f++) {
			var h = a.eq(f);
			if (d += h.is(":visible") ? h[b.d.outerWidth](!0) : 0, d > b.maxDimension) return e;
			if (e++, e == g + 1) return e;
			f == g && (f = -1)
		}
	}

	function gn_getVisibleItemsNextTestCircular(a, b, c, d) {
		var e = gn_getVisibleItemsNext(a, b, c);
		return b.circular || c + e > d && (e = d - c), e
	}

	function gn_getVisibleItemsNextFilter(a, b, c) {
		return gn_getItemsNextFilter(a, b.items.filter, b.items.visibleConf.org, c, b.circular)
	}

	function gn_getScrollItemsNextFilter(a, b, c, d) {
		return gn_getItemsNextFilter(a, b.items.filter, d + 1, c, b.circular) - 1
	}

	function gn_getItemsNextFilter(a, b, c, d) {
		for (var f = 0, g = 0, h = d, i = a.length - 1; i >= h; h++) {
			if (g++, g >= i) return g;
			var j = a.eq(h);
			if (j.is(b) && (f++, f == c)) return g;
			h == i && (h = -1)
		}
	}

	function gi_getCurrentItems(a, b) {
		return a.slice(0, b.items.visible)
	}

	function gi_getOldItemsPrev(a, b, c) {
		return a.slice(c, b.items.visibleConf.old + c)
	}

	function gi_getNewItemsPrev(a, b) {
		return a.slice(0, b.items.visible)
	}

	function gi_getOldItemsNext(a, b) {
		return a.slice(0, b.items.visibleConf.old)
	}

	function gi_getNewItemsNext(a, b, c) {
		return a.slice(c, b.items.visible + c)
	}

	function sz_storeMargin(a, b, c) {
		b.usePadding && (is_string(c) || (c = "_cfs_origCssMargin"), a.each(function() {
			var a = $(this),
				d = parseInt(a.css(b.d.marginRight), 10);
			is_number(d) || (d = 0), a.data(c, d)
		}))
	}

	function sz_resetMargin(a, b, c) {
		if (b.usePadding) {
			var d = is_boolean(c) ? c : !1;
			is_number(c) || (c = 0), sz_storeMargin(a, b, "_cfs_tempCssMargin"), a.each(function() {
				var a = $(this);
				a.css(b.d.marginRight, d ? a.data("_cfs_tempCssMargin") : c + a.data("_cfs_origCssMargin"))
			})
		}
	}

	function sz_storeOrigCss(a) {
		a.each(function() {
			var a = $(this);
			a.data("_cfs_origCss", a.attr("style") || "")
		})
	}

	function sz_restoreOrigCss(a) {
		a.each(function() {
			var a = $(this);
			a.attr("style", a.data("_cfs_origCss") || "")
		})
	}

	function sz_setResponsiveSizes(a, b) {
		var d = (a.items.visible, a.items[a.d.width]),
			e = a[a.d.height],
			f = is_percentage(e);
		b.each(function() {
			var b = $(this),
				c = d - ms_getPaddingBorderMargin(b, a, "Width");
			b[a.d.width](c), f && b[a.d.height](ms_getPercentage(c, e))
		})
	}

	function sz_setSizes(a, b) {
		var c = a.parent(),
			d = a.children(),
			e = gi_getCurrentItems(d, b),
			f = cf_mapWrapperSizes(ms_getSizes(e, b, !0), b, !1);
		if (c.css(f), b.usePadding) {
			var g = b.padding,
				h = g[b.d[1]];
			b.align && 0 > h && (h = 0);
			var i = e.last();
			i.css(b.d.marginRight, i.data("_cfs_origCssMargin") + h), a.css(b.d.top, g[b.d[0]]), a.css(b.d.left, g[b.d[3]])
		}
		return a.css(b.d.width, f[b.d.width] + 2 * ms_getTotalSize(d, b, "width")), a.css(b.d.height, ms_getLargestSize(d, b, "height")), f
	}

	function ms_getSizes(a, b, c) {
		return [ms_getTotalSize(a, b, "width", c), ms_getLargestSize(a, b, "height", c)]
	}

	function ms_getLargestSize(a, b, c, d) {
		return is_boolean(d) || (d = !1), is_number(b[b.d[c]]) && d ? b[b.d[c]] : is_number(b.items[b.d[c]]) ? b.items[b.d[c]] : (c = c.toLowerCase().indexOf("width") > -1 ? "outerWidth" : "outerHeight", ms_getTrueLargestSize(a, b, c))
	}

	function ms_getTrueLargestSize(a, b, c) {
		for (var d = 0, e = 0, f = a.length; f > e; e++) {
			var g = a.eq(e),
				h = g.is(":visible") ? g[b.d[c]](!0) : 0;
			h > d && (d = h)
		}
		return d
	}

	function ms_getTotalSize(a, b, c, d) {
		if (is_boolean(d) || (d = !1), is_number(b[b.d[c]]) && d) return b[b.d[c]];
		if (is_number(b.items[b.d[c]])) return b.items[b.d[c]] * a.length;
		for (var e = c.toLowerCase().indexOf("width") > -1 ? "outerWidth" : "outerHeight", f = 0, g = 0, h = a.length; h > g; g++) {
			var i = a.eq(g);
			f += i.is(":visible") ? i[b.d[e]](!0) : 0
		}
		return f
	}

	function ms_getParentSize(a, b, c) {
		var d = a.is(":visible");
		d && a.hide();
		var e = a.parent()[b.d[c]]();
		return d && a.show(), e
	}

	function ms_getMaxDimension(a, b) {
		return is_number(a[a.d.width]) ? a[a.d.width] : b
	}

	function ms_hasVariableSizes(a, b, c) {
		for (var d = !1, e = !1, f = 0, g = a.length; g > f; f++) {
			var h = a.eq(f),
				i = h.is(":visible") ? h[b.d[c]](!0) : 0;
			d === !1 ? d = i : d != i && (e = !0), 0 == d && (e = !0)
		}
		return e
	}

	function ms_getPaddingBorderMargin(a, b, c) {
		return a[b.d["outer" + c]](!0) - a[b.d[c.toLowerCase()]]()
	}

	function ms_getPercentage(a, b) {
		if (is_percentage(b)) {
			if (b = parseInt(b.slice(0, -1), 10), !is_number(b)) return a;
			a *= b / 100
		}
		return a
	}

	function cf_e(a, b, c, d, e) {
		return is_boolean(c) || (c = !0), is_boolean(d) || (d = !0), is_boolean(e) || (e = !1), c && (a = b.events.prefix + a), d && (a = a + "." + b.events.namespace), d && e && (a += b.serialNumber), a
	}

	function cf_c(a, b) {
		return is_string(b.classnames[a]) ? b.classnames[a] : a
	}

	function cf_mapWrapperSizes(a, b, c) {
		is_boolean(c) || (c = !0);
		var d = b.usePadding && c ? b.padding : [0, 0, 0, 0],
			e = {};
		return e[b.d.width] = a[0] + d[1] + d[3], e[b.d.height] = a[1] + d[0] + d[2], e
	}

	function cf_sortParams(a, b) {
		for (var c = [], d = 0, e = a.length; e > d; d++)
			for (var f = 0, g = b.length; g > f; f++)
				if (b[f].indexOf(typeof a[d]) > -1 && is_undefined(c[f])) {
					c[f] = a[d];
					break
				}
		return c
	}

	function cf_getPadding(a) {
		if (is_undefined(a)) return [0, 0, 0, 0];
		if (is_number(a)) return [a, a, a, a];
		if (is_string(a) && (a = a.split("px").join("").split("em").join("").split(" ")), !is_array(a)) return [0, 0, 0, 0];
		for (var b = 0; 4 > b; b++) a[b] = parseInt(a[b], 10);
		switch (a.length) {
			case 0:
				return [0, 0, 0, 0];
			case 1:
				return [a[0], a[0], a[0], a[0]];
			case 2:
				return [a[0], a[1], a[0], a[1]];
			case 3:
				return [a[0], a[1], a[2], a[1]];
			default:
				return [a[0], a[1], a[2], a[3]]
		}
	}

	function cf_getAlignPadding(a, b) {
		var c = is_number(b[b.d.width]) ? Math.ceil(b[b.d.width] - ms_getTotalSize(a, b, "width")) : 0;
		switch (b.align) {
			case "left":
				return [0, c];
			case "right":
				return [c, 0];
			case "center":
			default:
				return [Math.ceil(c / 2), Math.floor(c / 2)]
		}
	}

	function cf_getDimensions(a) {
		for (var b = [
				["width", "innerWidth", "outerWidth", "height", "innerHeight", "outerHeight", "left", "top", "marginRight", 0, 1, 2, 3],
				["height", "innerHeight", "outerHeight", "width", "innerWidth", "outerWidth", "top", "left", "marginBottom", 3, 2, 1, 0]
			], c = b[0].length, d = "right" == a.direction || "left" == a.direction ? 0 : 1, e = {}, f = 0; c > f; f++) e[b[0][f]] = b[d][f];
		return e
	}

	function cf_getAdjust(a, b, c, d) {
		var e = a;
		if (is_function(c)) e = c.call(d, e);
		else if (is_string(c)) {
			var f = c.split("+"),
				g = c.split("-");
			if (g.length > f.length) var h = !0,
				i = g[0],
				j = g[1];
			else var h = !1,
				i = f[0],
				j = f[1];
			switch (i) {
				case "even":
					e = 1 == a % 2 ? a - 1 : a;
					break;
				case "odd":
					e = 0 == a % 2 ? a - 1 : a;
					break;
				default:
					e = a
			}
			j = parseInt(j, 10), is_number(j) && (h && (j = -j), e += j)
		}
		return (!is_number(e) || 1 > e) && (e = 1), e
	}

	function cf_getItemsAdjust(a, b, c, d) {
		return cf_getItemAdjustMinMax(cf_getAdjust(a, b, c, d), b.items.visibleConf)
	}

	function cf_getItemAdjustMinMax(a, b) {
		return is_number(b.min) && b.min > a && (a = b.min), is_number(b.max) && a > b.max && (a = b.max), 1 > a && (a = 1), a
	}

	function cf_getSynchArr(a) {
		is_array(a) || (a = [
			[a]
		]), is_array(a[0]) || (a = [a]);
		for (var b = 0, c = a.length; c > b; b++) is_string(a[b][0]) && (a[b][0] = $(a[b][0])), is_boolean(a[b][1]) || (a[b][1] = !0), is_boolean(a[b][2]) || (a[b][2] = !0), is_number(a[b][3]) || (a[b][3] = 0);
		return a
	}

	function cf_getKeyCode(a) {
		return "right" == a ? 39 : "left" == a ? 37 : "up" == a ? 38 : "down" == a ? 40 : -1
	}

	function cf_setCookie(a, b, c) {
		if (a) {
			var d = b.triggerHandler(cf_e("currentPosition", c));
			$.fn.carouFredSel.cookie.set(a, d)
		}
	}

	function cf_getCookie(a) {
		var b = $.fn.carouFredSel.cookie.get(a);
		return "" == b ? 0 : b
	}

	function in_mapCss(a, b) {
		for (var c = {}, d = 0, e = b.length; e > d; d++) c[b[d]] = a.css(b[d]);
		return c
	}

	function in_complementItems(a, b, c, d) {
		return is_object(a.visibleConf) || (a.visibleConf = {}), is_object(a.sizesConf) || (a.sizesConf = {}), 0 == a.start && is_number(d) && (a.start = d), is_object(a.visible) ? (a.visibleConf.min = a.visible.min, a.visibleConf.max = a.visible.max, a.visible = !1) : is_string(a.visible) ? ("variable" == a.visible ? a.visibleConf.variable = !0 : a.visibleConf.adjust = a.visible, a.visible = !1) : is_function(a.visible) && (a.visibleConf.adjust = a.visible, a.visible = !1), is_string(a.filter) || (a.filter = c.filter(":hidden").length > 0 ? ":visible" : "*"), a[b.d.width] || (b.responsive ? (debug(!0, "Set a " + b.d.width + " for the items!"), a[b.d.width] = ms_getTrueLargestSize(c, b, "outerWidth")) : a[b.d.width] = ms_hasVariableSizes(c, b, "outerWidth") ? "variable" : c[b.d.outerWidth](!0)), a[b.d.height] || (a[b.d.height] = ms_hasVariableSizes(c, b, "outerHeight") ? "variable" : c[b.d.outerHeight](!0)), a.sizesConf.width = a.width, a.sizesConf.height = a.height, a
	}

	function in_complementVisibleItems(a, b) {
		return "variable" == a.items[a.d.width] && (a.items.visibleConf.variable = !0), a.items.visibleConf.variable || (is_number(a[a.d.width]) ? a.items.visible = Math.floor(a[a.d.width] / a.items[a.d.width]) : (a.items.visible = Math.floor(b / a.items[a.d.width]), a[a.d.width] = a.items.visible * a.items[a.d.width], a.items.visibleConf.adjust || (a.align = !1)), ("Infinity" == a.items.visible || 1 > a.items.visible) && (debug(!0, 'Not a valid number of visible items: Set to "variable".'), a.items.visibleConf.variable = !0)), a
	}

	function in_complementPrimarySize(a, b, c) {
		return "auto" == a && (a = ms_getTrueLargestSize(c, b, "outerWidth")), a
	}

	function in_complementSecondarySize(a, b, c) {
		return "auto" == a && (a = ms_getTrueLargestSize(c, b, "outerHeight")), a || (a = b.items[b.d.height]), a
	}

	function in_getAlignPadding(a, b) {
		var c = cf_getAlignPadding(gi_getCurrentItems(b, a), a);
		return a.padding[a.d[1]] = c[1], a.padding[a.d[3]] = c[0], a
	}

	function in_getResponsiveValues(a, b) {
		var d = cf_getItemAdjustMinMax(Math.ceil(a[a.d.width] / a.items[a.d.width]), a.items.visibleConf);
		d > b.length && (d = b.length);
		var e = Math.floor(a[a.d.width] / d);
		return a.items.visible = d, a.items[a.d.width] = e, a[a.d.width] = d * e, a
	}

	function bt_pauseOnHoverConfig(a) {
		if (is_string(a)) var b = a.indexOf("immediate") > -1 ? !0 : !1,
			c = a.indexOf("resume") > -1 ? !0 : !1;
		else var b = c = !1;
		return [b, c]
	}

	function bt_mousesheelNumber(a) {
		return is_number(a) ? a : null
	}

	function is_null(a) {
		return null === a
	}

	function is_undefined(a) {
		return is_null(a) || a === void 0 || "" === a || "undefined" === a
	}

	function is_array(a) {
		return a instanceof Array
	}

	function is_jquery(a) {
		return a instanceof jQuery
	}

	function is_object(a) {
		return (a instanceof Object || "object" == typeof a) && !is_null(a) && !is_jquery(a) && !is_array(a) && !is_function(a)
	}

	function is_number(a) {
		return (a instanceof Number || "number" == typeof a) && !isNaN(a)
	}

	function is_string(a) {
		return (a instanceof String || "string" == typeof a) && !is_undefined(a) && !is_true(a) && !is_false(a)
	}

	function is_function(a) {
		return a instanceof Function || "function" == typeof a
	}

	function is_boolean(a) {
		return a instanceof Boolean || "boolean" == typeof a || is_true(a) || is_false(a)
	}

	function is_true(a) {
		return a === !0 || "true" === a
	}

	function is_false(a) {
		return a === !1 || "false" === a
	}

	function is_percentage(a) {
		return is_string(a) && "%" == a.slice(-1)
	}

	function getTime() {
		return (new Date).getTime()
	}

	function deprecated(a, b) {
		debug(!0, a + " is DEPRECATED, support for it will be removed. Use " + b + " instead.")
	}

	function debug(a, b) {
		if (!is_undefined(window.console) && !is_undefined(window.console.log)) {
			if (is_object(a)) {
				var c = " (" + a.selector + ")";
				a = a.debug
			} else var c = "";
			if (!a) return !1;
			b = is_string(b) ? "carouFredSel" + c + ": " + b : ["carouFredSel" + c + ":", b], window.console.log(b)
		}
		return !1
	}
	$.fn.carouFredSel || ($.fn.caroufredsel = $.fn.carouFredSel = function(options, configs) {
		if (0 == this.length) return debug(!0, 'No element found for "' + this.selector + '".'), this;
		if (this.length > 1) return this.each(function() {
			$(this).carouFredSel(options, configs)
		});
		var $cfs = this,
			$tt0 = this[0],
			starting_position = !1;
		$cfs.data("_cfs_isCarousel") && (starting_position = $cfs.triggerHandler("_cfs_triggerEvent", "currentPosition"), $cfs.trigger("_cfs_triggerEvent", ["destroy", !0]));
		var FN = {};
		FN._init = function(a, b, c) {
			a = go_getObject($tt0, a), a.items = go_getItemsObject($tt0, a.items), a.scroll = go_getScrollObject($tt0, a.scroll), a.auto = go_getAutoObject($tt0, a.auto), a.prev = go_getPrevNextObject($tt0, a.prev), a.next = go_getPrevNextObject($tt0, a.next), a.pagination = go_getPaginationObject($tt0, a.pagination), a.swipe = go_getSwipeObject($tt0, a.swipe), a.mousewheel = go_getMousewheelObject($tt0, a.mousewheel), b && (opts_orig = $.extend(!0, {}, $.fn.carouFredSel.defaults, a)), opts = $.extend(!0, {}, $.fn.carouFredSel.defaults, a), opts.d = cf_getDimensions(opts), crsl.direction = "up" == opts.direction || "left" == opts.direction ? "next" : "prev";
			var d = $cfs.children(),
				e = ms_getParentSize($wrp, opts, "width");
			if (is_true(opts.cookie) && (opts.cookie = "caroufredsel_cookie_" + conf.serialNumber), opts.maxDimension = ms_getMaxDimension(opts, e), opts.items = in_complementItems(opts.items, opts, d, c), opts[opts.d.width] = in_complementPrimarySize(opts[opts.d.width], opts, d), opts[opts.d.height] = in_complementSecondarySize(opts[opts.d.height], opts, d), opts.responsive && (is_percentage(opts[opts.d.width]) || (opts[opts.d.width] = "100%")), is_percentage(opts[opts.d.width]) && (crsl.upDateOnWindowResize = !0, crsl.primarySizePercentage = opts[opts.d.width], opts[opts.d.width] = ms_getPercentage(e, crsl.primarySizePercentage), opts.items.visible || (opts.items.visibleConf.variable = !0)), opts.responsive ? (opts.usePadding = !1, opts.padding = [0, 0, 0, 0], opts.align = !1, opts.items.visibleConf.variable = !1) : (opts.items.visible || (opts = in_complementVisibleItems(opts, e)), opts[opts.d.width] || (!opts.items.visibleConf.variable && is_number(opts.items[opts.d.width]) && "*" == opts.items.filter ? (opts[opts.d.width] = opts.items.visible * opts.items[opts.d.width], opts.align = !1) : opts[opts.d.width] = "variable"), is_undefined(opts.align) && (opts.align = is_number(opts[opts.d.width]) ? "center" : !1), opts.items.visibleConf.variable && (opts.items.visible = gn_getVisibleItemsNext(d, opts, 0))), "*" == opts.items.filter || opts.items.visibleConf.variable || (opts.items.visibleConf.org = opts.items.visible, opts.items.visible = gn_getVisibleItemsNextFilter(d, opts, 0)), opts.items.visible = cf_getItemsAdjust(opts.items.visible, opts, opts.items.visibleConf.adjust, $tt0), opts.items.visibleConf.old = opts.items.visible, opts.responsive) opts.items.visibleConf.min || (opts.items.visibleConf.min = opts.items.visible), opts.items.visibleConf.max || (opts.items.visibleConf.max = opts.items.visible), opts = in_getResponsiveValues(opts, d, e);
			else switch (opts.padding = cf_getPadding(opts.padding), "top" == opts.align ? opts.align = "left" : "bottom" == opts.align && (opts.align = "right"), opts.align) {
				case "center":
				case "left":
				case "right":
					"variable" != opts[opts.d.width] && (opts = in_getAlignPadding(opts, d), opts.usePadding = !0);
					break;
				default:
					opts.align = !1, opts.usePadding = 0 == opts.padding[0] && 0 == opts.padding[1] && 0 == opts.padding[2] && 0 == opts.padding[3] ? !1 : !0
			}
			is_number(opts.scroll.duration) || (opts.scroll.duration = 500), is_undefined(opts.scroll.items) && (opts.scroll.items = opts.responsive || opts.items.visibleConf.variable || "*" != opts.items.filter ? "visible" : opts.items.visible), opts.auto = $.extend(!0, {}, opts.scroll, opts.auto), opts.prev = $.extend(!0, {}, opts.scroll, opts.prev), opts.next = $.extend(!0, {}, opts.scroll, opts.next), opts.pagination = $.extend(!0, {}, opts.scroll, opts.pagination), opts.auto = go_complementAutoObject($tt0, opts.auto), opts.prev = go_complementPrevNextObject($tt0, opts.prev), opts.next = go_complementPrevNextObject($tt0, opts.next), opts.pagination = go_complementPaginationObject($tt0, opts.pagination), opts.swipe = go_complementSwipeObject($tt0, opts.swipe), opts.mousewheel = go_complementMousewheelObject($tt0, opts.mousewheel), opts.synchronise && (opts.synchronise = cf_getSynchArr(opts.synchronise)), opts.auto.onPauseStart && (opts.auto.onTimeoutStart = opts.auto.onPauseStart, deprecated("auto.onPauseStart", "auto.onTimeoutStart")), opts.auto.onPausePause && (opts.auto.onTimeoutPause = opts.auto.onPausePause, deprecated("auto.onPausePause", "auto.onTimeoutPause")), opts.auto.onPauseEnd && (opts.auto.onTimeoutEnd = opts.auto.onPauseEnd, deprecated("auto.onPauseEnd", "auto.onTimeoutEnd")), opts.auto.pauseDuration && (opts.auto.timeoutDuration = opts.auto.pauseDuration, deprecated("auto.pauseDuration", "auto.timeoutDuration"))
		}, FN._build = function() {
			$cfs.data("_cfs_isCarousel", !0);
			var a = $cfs.children(),
				b = in_mapCss($cfs, ["textAlign", "float", "position", "top", "right", "bottom", "left", "zIndex", "width", "height", "marginTop", "marginRight", "marginBottom", "marginLeft"]),
				c = "relative";
			switch (b.position) {
				case "absolute":
				case "fixed":
					c = b.position
			}
			"parent" == conf.wrapper ? sz_storeOrigCss($wrp) : $wrp.css(b), $wrp.css({
				overflow: "hidden",
				position: c
			}), sz_storeOrigCss($cfs), $cfs.data("_cfs_origCssZindex", b.zIndex), $cfs.css({
				textAlign: "left",
				"float": "none",
				position: "absolute",
				top: 0,
				right: "auto",
				bottom: "auto",
				left: 0,
				marginTop: 0,
				marginRight: 0,
				marginBottom: 0,
				marginLeft: 0
			}), sz_storeMargin(a, opts), sz_storeOrigCss(a), opts.responsive && sz_setResponsiveSizes(opts, a)
		}, FN._bind_events = function() {
			FN._unbind_events(), $cfs.bind(cf_e("stop", conf), function(a, b) {
				return a.stopPropagation(), crsl.isStopped || opts.auto.button && opts.auto.button.addClass(cf_c("stopped", conf)), crsl.isStopped = !0, opts.auto.play && (opts.auto.play = !1, $cfs.trigger(cf_e("pause", conf), b)), !0
			}), $cfs.bind(cf_e("finish", conf), function(a) {
				return a.stopPropagation(), crsl.isScrolling && sc_stopScroll(scrl), !0
			}), $cfs.bind(cf_e("pause", conf), function(a, b, c) {
				if (a.stopPropagation(), tmrs = sc_clearTimers(tmrs), b && crsl.isScrolling) {
					scrl.isStopped = !0;
					var d = getTime() - scrl.startTime;
					scrl.duration -= d, scrl.pre && (scrl.pre.duration -= d), scrl.post && (scrl.post.duration -= d), sc_stopScroll(scrl, !1)
				}
				if (crsl.isPaused || crsl.isScrolling || c && (tmrs.timePassed += getTime() - tmrs.startTime), crsl.isPaused || opts.auto.button && opts.auto.button.addClass(cf_c("paused", conf)), crsl.isPaused = !0, opts.auto.onTimeoutPause) {
					var e = opts.auto.timeoutDuration - tmrs.timePassed,
						f = 100 - Math.ceil(100 * e / opts.auto.timeoutDuration);
					opts.auto.onTimeoutPause.call($tt0, f, e)
				}
				return !0
			}), $cfs.bind(cf_e("play", conf), function(a, b, c, d) {
				a.stopPropagation(), tmrs = sc_clearTimers(tmrs);
				var e = [b, c, d],
					f = ["string", "number", "boolean"],
					g = cf_sortParams(e, f);
				if (b = g[0], c = g[1], d = g[2], "prev" != b && "next" != b && (b = crsl.direction), is_number(c) || (c = 0), is_boolean(d) || (d = !1), d && (crsl.isStopped = !1, opts.auto.play = !0), !opts.auto.play) return a.stopImmediatePropagation(), debug(conf, "Carousel stopped: Not scrolling.");
				crsl.isPaused && opts.auto.button && (opts.auto.button.removeClass(cf_c("stopped", conf)), opts.auto.button.removeClass(cf_c("paused", conf))), crsl.isPaused = !1, tmrs.startTime = getTime();
				var h = opts.auto.timeoutDuration + c;
				return dur2 = h - tmrs.timePassed, perc = 100 - Math.ceil(100 * dur2 / h), opts.auto.progress && (tmrs.progress = setInterval(function() {
					var a = getTime() - tmrs.startTime + tmrs.timePassed,
						b = Math.ceil(100 * a / h);
					opts.auto.progress.updater.call(opts.auto.progress.bar[0], b)
				}, opts.auto.progress.interval)), tmrs.auto = setTimeout(function() {
					opts.auto.progress && opts.auto.progress.updater.call(opts.auto.progress.bar[0], 100), opts.auto.onTimeoutEnd && opts.auto.onTimeoutEnd.call($tt0, perc, dur2), crsl.isScrolling ? $cfs.trigger(cf_e("play", conf), b) : $cfs.trigger(cf_e(b, conf), opts.auto)
				}, dur2), opts.auto.onTimeoutStart && opts.auto.onTimeoutStart.call($tt0, perc, dur2), !0
			}), $cfs.bind(cf_e("resume", conf), function(a) {
				return a.stopPropagation(), scrl.isStopped ? (scrl.isStopped = !1, crsl.isPaused = !1, crsl.isScrolling = !0, scrl.startTime = getTime(), sc_startScroll(scrl, conf)) : $cfs.trigger(cf_e("play", conf)), !0
			}), $cfs.bind(cf_e("prev", conf) + " " + cf_e("next", conf), function(a, b, c, d, e) {
				if (a.stopPropagation(), crsl.isStopped || $cfs.is(":hidden")) return a.stopImmediatePropagation(), debug(conf, "Carousel stopped or hidden: Not scrolling.");
				var f = is_number(opts.items.minimum) ? opts.items.minimum : opts.items.visible + 1;
				if (f > itms.total) return a.stopImmediatePropagation(), debug(conf, "Not enough items (" + itms.total + " total, " + f + " needed): Not scrolling.");
				var g = [b, c, d, e],
					h = ["object", "number/string", "function", "boolean"],
					i = cf_sortParams(g, h);
				b = i[0], c = i[1], d = i[2], e = i[3];
				var j = a.type.slice(conf.events.prefix.length);
				if (is_object(b) || (b = {}), is_function(d) && (b.onAfter = d), is_boolean(e) && (b.queue = e), b = $.extend(!0, {}, opts[j], b), b.conditions && !b.conditions.call($tt0, j)) return a.stopImmediatePropagation(), debug(conf, 'Callback "conditions" returned false.');
				if (!is_number(c)) {
					if ("*" != opts.items.filter) c = "visible";
					else
						for (var k = [c, b.items, opts[j].items], i = 0, l = k.length; l > i; i++)
							if (is_number(k[i]) || "page" == k[i] || "visible" == k[i]) {
								c = k[i];
								break
							} switch (c) {
						case "page":
							return a.stopImmediatePropagation(), $cfs.triggerHandler(cf_e(j + "Page", conf), [b, d]);
						case "visible":
							opts.items.visibleConf.variable || "*" != opts.items.filter || (c = opts.items.visible)
					}
				}
				if (scrl.isStopped) return $cfs.trigger(cf_e("resume", conf)), $cfs.trigger(cf_e("queue", conf), [j, [b, c, d]]), a.stopImmediatePropagation(), debug(conf, "Carousel resumed scrolling.");
				if (b.duration > 0 && crsl.isScrolling) return b.queue && ("last" == b.queue && (queu = []), ("first" != b.queue || 0 == queu.length) && $cfs.trigger(cf_e("queue", conf), [j, [b, c, d]])), a.stopImmediatePropagation(), debug(conf, "Carousel currently scrolling.");
				if (tmrs.timePassed = 0, $cfs.trigger(cf_e("slide_" + j, conf), [b, c]), opts.synchronise)
					for (var m = opts.synchronise, n = [b, c], o = 0, l = m.length; l > o; o++) {
						var p = j;
						m[o][2] || (p = "prev" == p ? "next" : "prev"), m[o][1] || (n[0] = m[o][0].triggerHandler("_cfs_triggerEvent", ["configuration", p])), n[1] = c + m[o][3], m[o][0].trigger("_cfs_triggerEvent", ["slide_" + p, n])
					}
				return !0
			}), $cfs.bind(cf_e("slide_prev", conf), function(a, b, c) {
				a.stopPropagation();
				var d = $cfs.children();
				if (!opts.circular && 0 == itms.first) return opts.infinite && $cfs.trigger(cf_e("next", conf), itms.total - 1), a.stopImmediatePropagation();
				if (sz_resetMargin(d, opts), !is_number(c)) {
					if (opts.items.visibleConf.variable) c = gn_getVisibleItemsPrev(d, opts, itms.total - 1);
					else if ("*" != opts.items.filter) {
						var e = is_number(b.items) ? b.items : gn_getVisibleOrg($cfs, opts);
						c = gn_getScrollItemsPrevFilter(d, opts, itms.total - 1, e)
					} else c = opts.items.visible;
					c = cf_getAdjust(c, opts, b.items, $tt0)
				}
				if (opts.circular || itms.total - c < itms.first && (c = itms.total - itms.first), opts.items.visibleConf.old = opts.items.visible, opts.items.visibleConf.variable) {
					var f = cf_getItemsAdjust(gn_getVisibleItemsNext(d, opts, itms.total - c), opts, opts.items.visibleConf.adjust, $tt0);
					f >= opts.items.visible + c && itms.total > c && (c++, f = cf_getItemsAdjust(gn_getVisibleItemsNext(d, opts, itms.total - c), opts, opts.items.visibleConf.adjust, $tt0)), opts.items.visible = f
				} else if ("*" != opts.items.filter) {
					var f = gn_getVisibleItemsNextFilter(d, opts, itms.total - c);
					opts.items.visible = cf_getItemsAdjust(f, opts, opts.items.visibleConf.adjust, $tt0)
				}
				if (sz_resetMargin(d, opts, !0), 0 == c) return a.stopImmediatePropagation(), debug(conf, "0 items to scroll: Not scrolling.");
				for (debug(conf, "Scrolling " + c + " items backward."), itms.first += c; itms.first >= itms.total;) itms.first -= itms.total;
				opts.circular || (0 == itms.first && b.onEnd && b.onEnd.call($tt0, "prev"), opts.infinite || nv_enableNavi(opts, itms.first, conf)), $cfs.children().slice(itms.total - c, itms.total).prependTo($cfs), itms.total < opts.items.visible + c && $cfs.children().slice(0, opts.items.visible + c - itms.total).clone(!0).appendTo($cfs);
				var d = $cfs.children(),
					g = gi_getOldItemsPrev(d, opts, c),
					h = gi_getNewItemsPrev(d, opts),
					i = d.eq(c - 1),
					j = g.last(),
					k = h.last();
				sz_resetMargin(d, opts);
				var l = 0,
					m = 0;
				if (opts.align) {
					var n = cf_getAlignPadding(h, opts);
					l = n[0], m = n[1]
				}
				var o = 0 > l ? opts.padding[opts.d[3]] : 0,
					p = !1,
					q = $();
				if (c > opts.items.visible && (q = d.slice(opts.items.visibleConf.old, c), "directscroll" == b.fx)) {
					var r = opts.items[opts.d.width];
					p = q, i = k, sc_hideHiddenItems(p), opts.items[opts.d.width] = "variable"
				}
				var s = !1,
					t = ms_getTotalSize(d.slice(0, c), opts, "width"),
					u = cf_mapWrapperSizes(ms_getSizes(h, opts, !0), opts, !opts.usePadding),
					v = 0,
					w = {},
					x = {},
					y = {},
					z = {},
					A = {},
					B = {},
					C = {},
					D = sc_getDuration(b, opts, c, t);
				switch (b.fx) {
					case "cover":
					case "cover-fade":
						v = ms_getTotalSize(d.slice(0, opts.items.visible), opts, "width")
				}
				p && (opts.items[opts.d.width] = r), sz_resetMargin(d, opts, !0), m >= 0 && sz_resetMargin(j, opts, opts.padding[opts.d[1]]), l >= 0 && sz_resetMargin(i, opts, opts.padding[opts.d[3]]), opts.align && (opts.padding[opts.d[1]] = m, opts.padding[opts.d[3]] = l), B[opts.d.left] = -(t - o), C[opts.d.left] = -(v - o), x[opts.d.left] = u[opts.d.width];
				var E = function() {},
					F = function() {},
					G = function() {},
					H = function() {},
					I = function() {},
					J = function() {},
					K = function() {},
					L = function() {},
					M = function() {},
					N = function() {},
					O = function() {};
				switch (b.fx) {
					case "crossfade":
					case "cover":
					case "cover-fade":
					case "uncover":
					case "uncover-fade":
						s = $cfs.clone(!0).appendTo($wrp)
				}
				switch (b.fx) {
					case "crossfade":
					case "uncover":
					case "uncover-fade":
						s.children().slice(0, c).remove(), s.children().slice(opts.items.visibleConf.old).remove();
						break;
					case "cover":
					case "cover-fade":
						s.children().slice(opts.items.visible).remove(), s.css(C)
				}
				if ($cfs.css(B), scrl = sc_setScroll(D, b.easing, conf), w[opts.d.left] = opts.usePadding ? opts.padding[opts.d[3]] : 0, ("variable" == opts[opts.d.width] || "variable" == opts[opts.d.height]) && (E = function() {
						$wrp.css(u)
					}, F = function() {
						scrl.anims.push([$wrp, u])
					}), opts.usePadding) {
					switch (k.not(i).length && (y[opts.d.marginRight] = i.data("_cfs_origCssMargin"), 0 > l ? i.css(y) : (K = function() {
						i.css(y)
					}, L = function() {
						scrl.anims.push([i, y])
					})), b.fx) {
						case "cover":
						case "cover-fade":
							s.children().eq(c - 1).css(y)
					}
					k.not(j).length && (z[opts.d.marginRight] = j.data("_cfs_origCssMargin"), G = function() {
						j.css(z)
					}, H = function() {
						scrl.anims.push([j, z])
					}), m >= 0 && (A[opts.d.marginRight] = k.data("_cfs_origCssMargin") + opts.padding[opts.d[1]], I = function() {
						k.css(A)
					}, J = function() {
						scrl.anims.push([k, A])
					})
				}
				O = function() {
					$cfs.css(w)
				};
				var P = opts.items.visible + c - itms.total;
				N = function() {
					if (P > 0 && ($cfs.children().slice(itms.total).remove(), g = $($cfs.children().slice(itms.total - (opts.items.visible - P)).get().concat($cfs.children().slice(0, P).get()))), sc_showHiddenItems(p), opts.usePadding) {
						var a = $cfs.children().eq(opts.items.visible + c - 1);
						a.css(opts.d.marginRight, a.data("_cfs_origCssMargin"))
					}
				};
				var Q = sc_mapCallbackArguments(g, q, h, c, "prev", D, u);
				switch (M = function() {
					sc_afterScroll($cfs, s, b), crsl.isScrolling = !1, clbk.onAfter = sc_fireCallbacks($tt0, b, "onAfter", Q, clbk), queu = sc_fireQueue($cfs, queu, conf), crsl.isPaused || $cfs.trigger(cf_e("play", conf))
				}, crsl.isScrolling = !0, tmrs = sc_clearTimers(tmrs), clbk.onBefore = sc_fireCallbacks($tt0, b, "onBefore", Q, clbk), b.fx) {
					case "none":
						$cfs.css(w), E(), G(), I(), K(), O(), N(), M();
						break;
					case "fade":
						scrl.anims.push([$cfs, {
							opacity: 0
						}, function() {
							E(), G(), I(), K(), O(), N(), scrl = sc_setScroll(D, b.easing, conf), scrl.anims.push([$cfs, {
								opacity: 1
							}, M]), sc_startScroll(scrl, conf)
						}]);
						break;
					case "crossfade":
						$cfs.css({
							opacity: 0
						}), scrl.anims.push([s, {
							opacity: 0
						}]), scrl.anims.push([$cfs, {
							opacity: 1
						}, M]), F(), G(), I(), K(), O(), N();
						break;
					case "cover":
						scrl.anims.push([s, w, function() {
							G(), I(), K(), O(), N(), M()
						}]), F();
						break;
					case "cover-fade":
						scrl.anims.push([$cfs, {
							opacity: 0
						}]), scrl.anims.push([s, w, function() {
							G(), I(), K(), O(), N(), M()
						}]), F();
						break;
					case "uncover":
						scrl.anims.push([s, x, M]), F(), G(), I(), K(), O(), N();
						break;
					case "uncover-fade":
						$cfs.css({
							opacity: 0
						}), scrl.anims.push([$cfs, {
							opacity: 1
						}]), scrl.anims.push([s, x, M]), F(), G(), I(), K(), O(), N();
						break;
					default:
						scrl.anims.push([$cfs, w, function() {
							N(), M()
						}]), F(), H(), J(), L()
				}
				return sc_startScroll(scrl, conf), cf_setCookie(opts.cookie, $cfs, conf), $cfs.trigger(cf_e("updatePageStatus", conf), [!1, u]), !0
			}), $cfs.bind(cf_e("slide_next", conf), function(a, b, c) {
				a.stopPropagation();
				var d = $cfs.children();
				if (!opts.circular && itms.first == opts.items.visible) return opts.infinite && $cfs.trigger(cf_e("prev", conf), itms.total - 1), a.stopImmediatePropagation();
				if (sz_resetMargin(d, opts), !is_number(c)) {
					if ("*" != opts.items.filter) {
						var e = is_number(b.items) ? b.items : gn_getVisibleOrg($cfs, opts);
						c = gn_getScrollItemsNextFilter(d, opts, 0, e)
					} else c = opts.items.visible;
					c = cf_getAdjust(c, opts, b.items, $tt0)
				}
				var f = 0 == itms.first ? itms.total : itms.first;
				if (!opts.circular) {
					if (opts.items.visibleConf.variable) var g = gn_getVisibleItemsNext(d, opts, c),
						e = gn_getVisibleItemsPrev(d, opts, f - 1);
					else var g = opts.items.visible,
						e = opts.items.visible;
					c + g > f && (c = f - e)
				}
				if (opts.items.visibleConf.old = opts.items.visible, opts.items.visibleConf.variable) {
					for (var g = cf_getItemsAdjust(gn_getVisibleItemsNextTestCircular(d, opts, c, f), opts, opts.items.visibleConf.adjust, $tt0); opts.items.visible - c >= g && itms.total > c;) c++, g = cf_getItemsAdjust(gn_getVisibleItemsNextTestCircular(d, opts, c, f), opts, opts.items.visibleConf.adjust, $tt0);
					opts.items.visible = g
				} else if ("*" != opts.items.filter) {
					var g = gn_getVisibleItemsNextFilter(d, opts, c);
					opts.items.visible = cf_getItemsAdjust(g, opts, opts.items.visibleConf.adjust, $tt0)
				}
				if (sz_resetMargin(d, opts, !0), 0 == c) return a.stopImmediatePropagation(), debug(conf, "0 items to scroll: Not scrolling.");
				for (debug(conf, "Scrolling " + c + " items forward."), itms.first -= c; 0 > itms.first;) itms.first += itms.total;
				opts.circular || (itms.first == opts.items.visible && b.onEnd && b.onEnd.call($tt0, "next"), opts.infinite || nv_enableNavi(opts, itms.first, conf)), itms.total < opts.items.visible + c && $cfs.children().slice(0, opts.items.visible + c - itms.total).clone(!0).appendTo($cfs);
				var d = $cfs.children(),
					h = gi_getOldItemsNext(d, opts),
					i = gi_getNewItemsNext(d, opts, c),
					j = d.eq(c - 1),
					k = h.last(),
					l = i.last();
				sz_resetMargin(d, opts);
				var m = 0,
					n = 0;
				if (opts.align) {
					var o = cf_getAlignPadding(i, opts);
					m = o[0], n = o[1]
				}
				var p = !1,
					q = $();
				if (c > opts.items.visibleConf.old && (q = d.slice(opts.items.visibleConf.old, c), "directscroll" == b.fx)) {
					var r = opts.items[opts.d.width];
					p = q, j = k, sc_hideHiddenItems(p), opts.items[opts.d.width] = "variable"
				}
				var s = !1,
					t = ms_getTotalSize(d.slice(0, c), opts, "width"),
					u = cf_mapWrapperSizes(ms_getSizes(i, opts, !0), opts, !opts.usePadding),
					v = 0,
					w = {},
					x = {},
					y = {},
					z = {},
					A = {},
					B = sc_getDuration(b, opts, c, t);
				switch (b.fx) {
					case "uncover":
					case "uncover-fade":
						v = ms_getTotalSize(d.slice(0, opts.items.visibleConf.old), opts, "width")
				}
				p && (opts.items[opts.d.width] = r), opts.align && 0 > opts.padding[opts.d[1]] && (opts.padding[opts.d[1]] = 0), sz_resetMargin(d, opts, !0), sz_resetMargin(k, opts, opts.padding[opts.d[1]]), opts.align && (opts.padding[opts.d[1]] = n, opts.padding[opts.d[3]] = m), A[opts.d.left] = opts.usePadding ? opts.padding[opts.d[3]] : 0;
				var C = function() {},
					D = function() {},
					E = function() {},
					F = function() {},
					G = function() {},
					H = function() {},
					I = function() {},
					J = function() {},
					K = function() {};
				switch (b.fx) {
					case "crossfade":
					case "cover":
					case "cover-fade":
					case "uncover":
					case "uncover-fade":
						s = $cfs.clone(!0).appendTo($wrp), s.children().slice(opts.items.visibleConf.old).remove()
				}
				switch (b.fx) {
					case "crossfade":
					case "cover":
					case "cover-fade":
						$cfs.css("zIndex", 1), s.css("zIndex", 0)
				}
				if (scrl = sc_setScroll(B, b.easing, conf), w[opts.d.left] = -t, x[opts.d.left] = -v, 0 > m && (w[opts.d.left] += m), ("variable" == opts[opts.d.width] || "variable" == opts[opts.d.height]) && (C = function() {
						$wrp.css(u)
					}, D = function() {
						scrl.anims.push([$wrp, u])
					}), opts.usePadding) {
					var L = l.data("_cfs_origCssMargin");
					n >= 0 && (L += opts.padding[opts.d[1]]), l.css(opts.d.marginRight, L), j.not(k).length && (z[opts.d.marginRight] = k.data("_cfs_origCssMargin")), E = function() {
						k.css(z)
					}, F = function() {
						scrl.anims.push([k, z])
					};
					var M = j.data("_cfs_origCssMargin");
					m > 0 && (M += opts.padding[opts.d[3]]), y[opts.d.marginRight] = M, G = function() {
						j.css(y)
					}, H = function() {
						scrl.anims.push([j, y])
					}
				}
				K = function() {
					$cfs.css(A)
				};
				var N = opts.items.visible + c - itms.total;
				J = function() {
					N > 0 && $cfs.children().slice(itms.total).remove();
					var a = $cfs.children().slice(0, c).appendTo($cfs).last();
					if (N > 0 && (i = gi_getCurrentItems(d, opts)), sc_showHiddenItems(p), opts.usePadding) {
						if (itms.total < opts.items.visible + c) {
							var b = $cfs.children().eq(opts.items.visible - 1);
							b.css(opts.d.marginRight, b.data("_cfs_origCssMargin") + opts.padding[opts.d[1]])
						}
						a.css(opts.d.marginRight, a.data("_cfs_origCssMargin"))
					}
				};
				var O = sc_mapCallbackArguments(h, q, i, c, "next", B, u);
				switch (I = function() {
					$cfs.css("zIndex", $cfs.data("_cfs_origCssZindex")), sc_afterScroll($cfs, s, b), crsl.isScrolling = !1, clbk.onAfter = sc_fireCallbacks($tt0, b, "onAfter", O, clbk), queu = sc_fireQueue($cfs, queu, conf), crsl.isPaused || $cfs.trigger(cf_e("play", conf))
				}, crsl.isScrolling = !0, tmrs = sc_clearTimers(tmrs), clbk.onBefore = sc_fireCallbacks($tt0, b, "onBefore", O, clbk), b.fx) {
					case "none":
						$cfs.css(w), C(), E(), G(), K(), J(), I();
						break;
					case "fade":
						scrl.anims.push([$cfs, {
							opacity: 0
						}, function() {
							C(), E(), G(), K(), J(), scrl = sc_setScroll(B, b.easing, conf), scrl.anims.push([$cfs, {
								opacity: 1
							}, I]), sc_startScroll(scrl, conf)
						}]);
						break;
					case "crossfade":
						$cfs.css({
							opacity: 0
						}), scrl.anims.push([s, {
							opacity: 0
						}]), scrl.anims.push([$cfs, {
							opacity: 1
						}, I]), D(), E(), G(), K(), J();
						break;
					case "cover":
						$cfs.css(opts.d.left, $wrp[opts.d.width]()), scrl.anims.push([$cfs, A, I]), D(), E(), G(), J();
						break;
					case "cover-fade":
						$cfs.css(opts.d.left, $wrp[opts.d.width]()), scrl.anims.push([s, {
							opacity: 0
						}]), scrl.anims.push([$cfs, A, I]), D(), E(), G(), J();
						break;
					case "uncover":
						scrl.anims.push([s, x, I]), D(), E(), G(), K(), J();
						break;
					case "uncover-fade":
						$cfs.css({
							opacity: 0
						}), scrl.anims.push([$cfs, {
							opacity: 1
						}]), scrl.anims.push([s, x, I]), D(), E(), G(), K(), J();
						break;
					default:
						scrl.anims.push([$cfs, w, function() {
							K(), J(), I()
						}]), D(), F(), H()
				}
				return sc_startScroll(scrl, conf), cf_setCookie(opts.cookie, $cfs, conf), $cfs.trigger(cf_e("updatePageStatus", conf), [!1, u]), !0
			}), $cfs.bind(cf_e("slideTo", conf), function(a, b, c, d, e, f, g) {
				a.stopPropagation();
				var h = [b, c, d, e, f, g],
					i = ["string/number/object", "number", "boolean", "object", "string", "function"],
					j = cf_sortParams(h, i);
				return e = j[3], f = j[4], g = j[5], b = gn_getItemIndex(j[0], j[1], j[2], itms, $cfs), 0 == b ? !1 : (is_object(e) || (e = !1), "prev" != f && "next" != f && (f = opts.circular ? itms.total / 2 >= b ? "next" : "prev" : 0 == itms.first || itms.first > b ? "next" : "prev"), "prev" == f && (b = itms.total - b), $cfs.trigger(cf_e(f, conf), [e, b, g]), !0)
			}), $cfs.bind(cf_e("prevPage", conf), function(a, b, c) {
				a.stopPropagation();
				var d = $cfs.triggerHandler(cf_e("currentPage", conf));
				return $cfs.triggerHandler(cf_e("slideToPage", conf), [d - 1, b, "prev", c])
			}), $cfs.bind(cf_e("nextPage", conf), function(a, b, c) {
				a.stopPropagation();
				var d = $cfs.triggerHandler(cf_e("currentPage", conf));
				return $cfs.triggerHandler(cf_e("slideToPage", conf), [d + 1, b, "next", c])
			}), $cfs.bind(cf_e("slideToPage", conf), function(a, b, c, d, e) {
				a.stopPropagation(), is_number(b) || (b = $cfs.triggerHandler(cf_e("currentPage", conf)));
				var f = opts.pagination.items || opts.items.visible,
					g = Math.ceil(itms.total / f) - 1;
				return 0 > b && (b = g), b > g && (b = 0), $cfs.triggerHandler(cf_e("slideTo", conf), [b * f, 0, !0, c, d, e])
			}), $cfs.bind(cf_e("jumpToStart", conf), function(a, b) {
				if (a.stopPropagation(), b = b ? gn_getItemIndex(b, 0, !0, itms, $cfs) : 0, b += itms.first, 0 != b) {
					if (itms.total > 0)
						for (; b > itms.total;) b -= itms.total;
					$cfs.prepend($cfs.children().slice(b, itms.total))
				}
				return !0
			}), $cfs.bind(cf_e("synchronise", conf), function(a, b) {
				if (a.stopPropagation(), b) b = cf_getSynchArr(b);
				else {
					if (!opts.synchronise) return debug(conf, "No carousel to synchronise.");
					b = opts.synchronise
				}
				for (var c = $cfs.triggerHandler(cf_e("currentPosition", conf)), d = !0, e = 0, f = b.length; f > e; e++) b[e][0].triggerHandler(cf_e("slideTo", conf), [c, b[e][3], !0]) || (d = !1);
				return d
			}), $cfs.bind(cf_e("queue", conf), function(a, b, c) {
				return a.stopPropagation(), is_function(b) ? b.call($tt0, queu) : is_array(b) ? queu = b : is_undefined(b) || queu.push([b, c]), queu
			}), $cfs.bind(cf_e("insertItem", conf), function(a, b, c, d, e) {
				a.stopPropagation();
				var f = [b, c, d, e],
					g = ["string/object", "string/number/object", "boolean", "number"],
					h = cf_sortParams(f, g);
				if (b = h[0], c = h[1], d = h[2], e = h[3], is_object(b) && !is_jquery(b) ? b = $(b) : is_string(b) && (b = $(b)), !is_jquery(b) || 0 == b.length) return debug(conf, "Not a valid object.");
				is_undefined(c) && (c = "end"), sz_storeMargin(b, opts), sz_storeOrigCss(b);
				var i = c,
					j = "before";
				"end" == c ? d ? (0 == itms.first ? (c = itms.total - 1, j = "after") : (c = itms.first, itms.first += b.length), 0 > c && (c = 0)) : (c = itms.total - 1, j = "after") : c = gn_getItemIndex(c, e, d, itms, $cfs);
				var k = $cfs.children().eq(c);
				return k.length ? k[j](b) : (debug(conf, "Correct insert-position not found! Appending item to the end."), $cfs.append(b)), "end" == i || d || itms.first > c && (itms.first += b.length), itms.total = $cfs.children().length, itms.first >= itms.total && (itms.first -= itms.total), $cfs.trigger(cf_e("updateSizes", conf)), $cfs.trigger(cf_e("linkAnchors", conf)), !0
			}), $cfs.bind(cf_e("removeItem", conf), function(a, b, c, d) {
				a.stopPropagation();
				var e = [b, c, d],
					f = ["string/number/object", "boolean", "number"],
					g = cf_sortParams(e, f);
				if (b = g[0], c = g[1], d = g[2], b instanceof $ && b.length > 1) return i = $(), b.each(function() {
					var e = $cfs.trigger(cf_e("removeItem", conf), [$(this), c, d]);
					e && (i = i.add(e))
				}), i;
				if (is_undefined(b) || "end" == b) i = $cfs.children().last();
				else {
					b = gn_getItemIndex(b, d, c, itms, $cfs);
					var i = $cfs.children().eq(b);
					i.length && itms.first > b && (itms.first -= i.length)
				}
				return i && i.length && (i.detach(), itms.total = $cfs.children().length, $cfs.trigger(cf_e("updateSizes", conf))), i
			}), $cfs.bind(cf_e("onBefore", conf) + " " + cf_e("onAfter", conf), function(a, b) {
				a.stopPropagation();
				var c = a.type.slice(conf.events.prefix.length);
				return is_array(b) && (clbk[c] = b), is_function(b) && clbk[c].push(b), clbk[c]
			}), $cfs.bind(cf_e("currentPosition", conf), function(a, b) {
				if (a.stopPropagation(), 0 == itms.first) var c = 0;
				else var c = itms.total - itms.first;
				return is_function(b) && b.call($tt0, c), c
			}), $cfs.bind(cf_e("currentPage", conf), function(a, b) {
				a.stopPropagation();
				var e, c = opts.pagination.items || opts.items.visible,
					d = Math.ceil(itms.total / c - 1);
				return e = 0 == itms.first ? 0 : itms.first < itms.total % c ? 0 : itms.first != c || opts.circular ? Math.round((itms.total - itms.first) / c) : d, 0 > e && (e = 0), e > d && (e = d), is_function(b) && b.call($tt0, e), e
			}), $cfs.bind(cf_e("currentVisible", conf), function(a, b) {
				a.stopPropagation();
				var c = gi_getCurrentItems($cfs.children(), opts);
				return is_function(b) && b.call($tt0, c), c
			}), $cfs.bind(cf_e("slice", conf), function(a, b, c, d) {
				if (a.stopPropagation(), 0 == itms.total) return !1;
				var e = [b, c, d],
					f = ["number", "number", "function"],
					g = cf_sortParams(e, f);
				if (b = is_number(g[0]) ? g[0] : 0, c = is_number(g[1]) ? g[1] : itms.total, d = g[2], b += itms.first, c += itms.first, items.total > 0) {
					for (; b > itms.total;) b -= itms.total;
					for (; c > itms.total;) c -= itms.total;
					for (; 0 > b;) b += itms.total;
					for (; 0 > c;) c += itms.total
				}
				var i, h = $cfs.children();
				return i = c > b ? h.slice(b, c) : $(h.slice(b, itms.total).get().concat(h.slice(0, c).get())), is_function(d) && d.call($tt0, i), i
			}), $cfs.bind(cf_e("isPaused", conf) + " " + cf_e("isStopped", conf) + " " + cf_e("isScrolling", conf), function(a, b) {
				a.stopPropagation();
				var c = a.type.slice(conf.events.prefix.length),
					d = crsl[c];
				return is_function(b) && b.call($tt0, d), d
			}), $cfs.bind(cf_e("configuration", conf), function(e, a, b, c) {
				e.stopPropagation();
				var reInit = !1;
				if (is_function(a)) a.call($tt0, opts);
				else if (is_object(a)) opts_orig = $.extend(!0, {}, opts_orig, a), b !== !1 ? reInit = !0 : opts = $.extend(!0, {}, opts, a);
				else if (!is_undefined(a))
					if (is_function(b)) {
						var val = eval("opts." + a);
						is_undefined(val) && (val = ""), b.call($tt0, val)
					} else {
						if (is_undefined(b)) return eval("opts." + a);
						"boolean" != typeof c && (c = !0), eval("opts_orig." + a + " = b"), c !== !1 ? reInit = !0 : eval("opts." + a + " = b")
					}
				if (reInit) {
					sz_resetMargin($cfs.children(), opts), FN._init(opts_orig), FN._bind_buttons();
					var sz = sz_setSizes($cfs, opts);
					$cfs.trigger(cf_e("updatePageStatus", conf), [!0, sz])
				}
				return opts
			}), $cfs.bind(cf_e("linkAnchors", conf), function(a, b, c) {
				return a.stopPropagation(), is_undefined(b) ? b = $("body") : is_string(b) && (b = $(b)), is_jquery(b) && 0 != b.length ? (is_string(c) || (c = "a.caroufredsel"), b.find(c).each(function() {
					var a = this.hash || "";
					a.length > 0 && -1 != $cfs.children().index($(a)) && $(this).unbind("click").click(function(b) {
						b.preventDefault(), $cfs.trigger(cf_e("slideTo", conf), a)
					})
				}), !0) : debug(conf, "Not a valid object.")
			}), $cfs.bind(cf_e("updatePageStatus", conf), function(a, b) {
				if (a.stopPropagation(), opts.pagination.container) {
					var d = opts.pagination.items || opts.items.visible,
						e = Math.ceil(itms.total / d);
					b && (opts.pagination.anchorBuilder && (opts.pagination.container.children().remove(), opts.pagination.container.each(function() {
						for (var a = 0; e > a; a++) {
							var b = $cfs.children().eq(gn_getItemIndex(a * d, 0, !0, itms, $cfs));
							$(this).append(opts.pagination.anchorBuilder.call(b[0], a + 1))
						}
					})), opts.pagination.container.each(function() {
						$(this).children().unbind(opts.pagination.event).each(function(a) {
							$(this).bind(opts.pagination.event, function(b) {
								b.preventDefault(), $cfs.trigger(cf_e("slideTo", conf), [a * d, -opts.pagination.deviation, !0, opts.pagination])
							})
						})
					}));
					var f = $cfs.triggerHandler(cf_e("currentPage", conf)) + opts.pagination.deviation;
					return f >= e && (f = 0), 0 > f && (f = e - 1), opts.pagination.container.each(function() {
						$(this).children().removeClass(cf_c("selected", conf)).eq(f).addClass(cf_c("selected", conf))
					}), !0
				}
			}), $cfs.bind(cf_e("updateSizes", conf), function() {
				var b = opts.items.visible,
					c = $cfs.children(),
					d = ms_getParentSize($wrp, opts, "width");
				if (itms.total = c.length, crsl.primarySizePercentage ? (opts.maxDimension = d, opts[opts.d.width] = ms_getPercentage(d, crsl.primarySizePercentage)) : opts.maxDimension = ms_getMaxDimension(opts, d), opts.responsive ? (opts.items.width = opts.items.sizesConf.width, opts.items.height = opts.items.sizesConf.height, opts = in_getResponsiveValues(opts, c, d), b = opts.items.visible, sz_setResponsiveSizes(opts, c)) : opts.items.visibleConf.variable ? b = gn_getVisibleItemsNext(c, opts, 0) : "*" != opts.items.filter && (b = gn_getVisibleItemsNextFilter(c, opts, 0)), !opts.circular && 0 != itms.first && b > itms.first) {
					if (opts.items.visibleConf.variable) var e = gn_getVisibleItemsPrev(c, opts, itms.first) - itms.first;
					else if ("*" != opts.items.filter) var e = gn_getVisibleItemsPrevFilter(c, opts, itms.first) - itms.first;
					else var e = opts.items.visible - itms.first;
					debug(conf, "Preventing non-circular: sliding " + e + " items backward."), $cfs.trigger(cf_e("prev", conf), e)
				}
				opts.items.visible = cf_getItemsAdjust(b, opts, opts.items.visibleConf.adjust, $tt0), opts.items.visibleConf.old = opts.items.visible, opts = in_getAlignPadding(opts, c);
				var f = sz_setSizes($cfs, opts);
				return $cfs.trigger(cf_e("updatePageStatus", conf), [!0, f]), nv_showNavi(opts, itms.total, conf), nv_enableNavi(opts, itms.first, conf), f
			}), $cfs.bind(cf_e("destroy", conf), function(a, b) {
				return a.stopPropagation(), tmrs = sc_clearTimers(tmrs), $cfs.data("_cfs_isCarousel", !1), $cfs.trigger(cf_e("finish", conf)), b && $cfs.trigger(cf_e("jumpToStart", conf)), sz_restoreOrigCss($cfs.children()), sz_restoreOrigCss($cfs), FN._unbind_events(), FN._unbind_buttons(), "parent" == conf.wrapper ? sz_restoreOrigCss($wrp) : $wrp.replaceWith($cfs), !0
			}), $cfs.bind(cf_e("debug", conf), function() {
				return debug(conf, "Carousel width: " + opts.width), debug(conf, "Carousel height: " + opts.height), debug(conf, "Item widths: " + opts.items.width), debug(conf, "Item heights: " + opts.items.height), debug(conf, "Number of items visible: " + opts.items.visible), opts.auto.play && debug(conf, "Number of items scrolled automatically: " + opts.auto.items), opts.prev.button && debug(conf, "Number of items scrolled backward: " + opts.prev.items), opts.next.button && debug(conf, "Number of items scrolled forward: " + opts.next.items), conf.debug
			}), $cfs.bind("_cfs_triggerEvent", function(a, b, c) {
				return a.stopPropagation(), $cfs.triggerHandler(cf_e(b, conf), c)
			})
		}, FN._unbind_events = function() {
			$cfs.unbind(cf_e("", conf)), $cfs.unbind(cf_e("", conf, !1)), $cfs.unbind("_cfs_triggerEvent")
		}, FN._bind_buttons = function() {
			if (FN._unbind_buttons(), nv_showNavi(opts, itms.total, conf), nv_enableNavi(opts, itms.first, conf), opts.auto.pauseOnHover) {
				var a = bt_pauseOnHoverConfig(opts.auto.pauseOnHover);
				$wrp.bind(cf_e("mouseenter", conf, !1), function() {
					$cfs.trigger(cf_e("pause", conf), a)
				}).bind(cf_e("mouseleave", conf, !1), function() {
					$cfs.trigger(cf_e("resume", conf))
				})
			}
			if (opts.auto.button && opts.auto.button.bind(cf_e(opts.auto.event, conf, !1), function(a) {
					a.preventDefault();
					var b = !1,
						c = null;
					crsl.isPaused ? b = "play" : opts.auto.pauseOnEvent && (b = "pause", c = bt_pauseOnHoverConfig(opts.auto.pauseOnEvent)), b && $cfs.trigger(cf_e(b, conf), c)
				}), opts.prev.button && (opts.prev.button.bind(cf_e(opts.prev.event, conf, !1), function(a) {
					a.preventDefault(), $cfs.trigger(cf_e("prev", conf))
				}), opts.prev.pauseOnHover)) {
				var a = bt_pauseOnHoverConfig(opts.prev.pauseOnHover);
				opts.prev.button.bind(cf_e("mouseenter", conf, !1), function() {
					$cfs.trigger(cf_e("pause", conf), a)
				}).bind(cf_e("mouseleave", conf, !1), function() {
					$cfs.trigger(cf_e("resume", conf))
				})
			}
			if (opts.next.button && (opts.next.button.bind(cf_e(opts.next.event, conf, !1), function(a) {
					a.preventDefault(), $cfs.trigger(cf_e("next", conf))
				}), opts.next.pauseOnHover)) {
				var a = bt_pauseOnHoverConfig(opts.next.pauseOnHover);
				opts.next.button.bind(cf_e("mouseenter", conf, !1), function() {
					$cfs.trigger(cf_e("pause", conf), a)
				}).bind(cf_e("mouseleave", conf, !1), function() {
					$cfs.trigger(cf_e("resume", conf))
				})
			}
			if (opts.pagination.container && opts.pagination.pauseOnHover) {
				var a = bt_pauseOnHoverConfig(opts.pagination.pauseOnHover);
				opts.pagination.container.bind(cf_e("mouseenter", conf, !1), function() {
					$cfs.trigger(cf_e("pause", conf), a)
				}).bind(cf_e("mouseleave", conf, !1), function() {
					$cfs.trigger(cf_e("resume", conf))
				})
			}
			if ((opts.prev.key || opts.next.key) && $(document).bind(cf_e("keyup", conf, !1, !0, !0), function(a) {
					var b = a.keyCode;
					b == opts.next.key && (a.preventDefault(), $cfs.trigger(cf_e("next", conf))), b == opts.prev.key && (a.preventDefault(), $cfs.trigger(cf_e("prev", conf)))
				}), opts.pagination.keys && $(document).bind(cf_e("keyup", conf, !1, !0, !0), function(a) {
					var b = a.keyCode;
					b >= 49 && 58 > b && (b = (b - 49) * opts.items.visible, itms.total >= b && (a.preventDefault(), $cfs.trigger(cf_e("slideTo", conf), [b, 0, !0, opts.pagination])))
				}), $.fn.swipe) {
				var b = "ontouchstart" in window;
				if (b && opts.swipe.onTouch || !b && opts.swipe.onMouse) {
					var c = $.extend(!0, {}, opts.prev, opts.swipe),
						d = $.extend(!0, {}, opts.next, opts.swipe),
						e = function() {
							$cfs.trigger(cf_e("prev", conf), [c])
						},
						f = function() {
							$cfs.trigger(cf_e("next", conf), [d])
						};
					switch (opts.direction) {
						case "up":
						case "down":
							opts.swipe.options.swipeUp = f, opts.swipe.options.swipeDown = e;
							break;
						default:
							opts.swipe.options.swipeLeft = f, opts.swipe.options.swipeRight = e
					}
					crsl.swipe && $cfs.swipe("destroy"), $wrp.swipe(opts.swipe.options), $wrp.css("cursor", "move"), crsl.swipe = !0
				}
			}
			if ($.fn.mousewheel && opts.mousewheel) {
				var g = $.extend(!0, {}, opts.prev, opts.mousewheel),
					h = $.extend(!0, {}, opts.next, opts.mousewheel);
				crsl.mousewheel && $wrp.unbind(cf_e("mousewheel", conf, !1)), $wrp.bind(cf_e("mousewheel", conf, !1), function(a, b) {
					a.preventDefault(), b > 0 ? $cfs.trigger(cf_e("prev", conf), [g]) : $cfs.trigger(cf_e("next", conf), [h])
				}), crsl.mousewheel = !0
			}
			if (opts.auto.play && $cfs.trigger(cf_e("play", conf), opts.auto.delay), crsl.upDateOnWindowResize) {
				var i = function() {
						$cfs.trigger(cf_e("finish", conf)), opts.auto.pauseOnResize && !crsl.isPaused && $cfs.trigger(cf_e("play", conf)), sz_resetMargin($cfs.children(), opts), $cfs.trigger(cf_e("updateSizes", conf))
					},
					j = $(window),
					k = null;
				if ($.debounce && "debounce" == conf.onWindowResize) k = $.debounce(200, i);
				else if ($.throttle && "throttle" == conf.onWindowResize) k = $.throttle(300, i);
				else {
					var l = 0,
						m = 0;
					k = function() {
						var a = j.width(),
							b = j.height();
						(a != l || b != m) && (i(), l = a, m = b)
					}
				}
				j.bind(cf_e("resize", conf, !1, !0, !0), k)
			}
		}, FN._unbind_buttons = function() {
			var b = (cf_e("", conf), cf_e("", conf, !1));
			ns3 = cf_e("", conf, !1, !0, !0), $(document).unbind(ns3), $(window).unbind(ns3), $wrp.unbind(b), opts.auto.button && opts.auto.button.unbind(b), opts.prev.button && opts.prev.button.unbind(b), opts.next.button && opts.next.button.unbind(b), opts.pagination.container && (opts.pagination.container.unbind(b), opts.pagination.anchorBuilder && opts.pagination.container.children().remove()), crsl.swipe && ($cfs.swipe("destroy"), $wrp.css("cursor", "default"), crsl.swipe = !1), crsl.mousewheel && (crsl.mousewheel = !1), nv_showNavi(opts, "hide", conf), nv_enableNavi(opts, "removeClass", conf)
		}, is_boolean(configs) && (configs = {
			debug: configs
		});
		var crsl = {
				direction: "next",
				isPaused: !0,
				isScrolling: !1,
				isStopped: !1,
				mousewheel: !1,
				swipe: !1
			},
			itms = {
				total: $cfs.children().length,
				first: 0
			},
			tmrs = {
				auto: null,
				progress: null,
				startTime: getTime(),
				timePassed: 0
			},
			scrl = {
				isStopped: !1,
				duration: 0,
				startTime: 0,
				easing: "",
				anims: []
			},
			clbk = {
				onBefore: [],
				onAfter: []
			},
			queu = [],
			conf = $.extend(!0, {}, $.fn.carouFredSel.configs, configs),
			opts = {},
			opts_orig = $.extend(!0, {}, options),
			$wrp = "parent" == conf.wrapper ? $cfs.parent() : $cfs.wrap("<" + conf.wrapper.element + ' class="' + conf.wrapper.classname + '" />').parent();
		if (conf.selector = $cfs.selector, conf.serialNumber = $.fn.carouFredSel.serialNumber++, conf.transition = conf.transition && $.fn.transition ? "transition" : "animate", FN._init(opts_orig, !0, starting_position), FN._build(), FN._bind_events(), FN._bind_buttons(), is_array(opts.items.start)) var start_arr = opts.items.start;
		else {
			var start_arr = [];
			0 != opts.items.start && start_arr.push(opts.items.start)
		}
		if (opts.cookie && start_arr.unshift(parseInt(cf_getCookie(opts.cookie), 10)), start_arr.length > 0)
			for (var a = 0, l = start_arr.length; l > a; a++) {
				var s = start_arr[a];
				if (0 != s) {
					if (s === !0) {
						if (s = window.location.hash, 1 > s.length) continue
					} else "random" === s && (s = Math.floor(Math.random() * itms.total));
					if ($cfs.triggerHandler(cf_e("slideTo", conf), [s, 0, !0, {
							fx: "none"
						}])) break
				}
			}
		var siz = sz_setSizes($cfs, opts),
			itm = gi_getCurrentItems($cfs.children(), opts);
		return opts.onCreate && opts.onCreate.call($tt0, {
			width: siz.width,
			height: siz.height,
			items: itm
		}), $cfs.trigger(cf_e("updatePageStatus", conf), [!0, siz]), $cfs.trigger(cf_e("linkAnchors", conf)), conf.debug && $cfs.trigger(cf_e("debug", conf)), $cfs
	}, $.fn.carouFredSel.serialNumber = 1, $.fn.carouFredSel.defaults = {
		synchronise: !1,
		infinite: !0,
		circular: !0,
		responsive: !1,
		direction: "left",
		items: {
			start: 0
		},
		scroll: {
			easing: "swing",
			duration: 500,
			pauseOnHover: !1,
			event: "click",
			queue: !1
		}
	}, $.fn.carouFredSel.configs = {
		debug: !1,
		transition: !1,
		onWindowResize: "throttle",
		events: {
			prefix: "",
			namespace: "cfs"
		},
		wrapper: {
			element: "div",
			classname: "caroufredsel_wrapper"
		},
		classnames: {}
	}, $.fn.carouFredSel.pageAnchorBuilder = function(a) {
		return '<a href="#"><span>' + a + "</span></a>"
	}, $.fn.carouFredSel.progressbarUpdater = function(a) {
		$(this).css("width", a + "%")
	}, $.fn.carouFredSel.cookie = {
		get: function(a) {
			a += "=";
			for (var b = document.cookie.split(";"), c = 0, d = b.length; d > c; c++) {
				for (var e = b[c];
					" " == e.charAt(0);) e = e.slice(1);
				if (0 == e.indexOf(a)) return e.slice(a.length)
			}
			return 0
		},
		set: function(a, b, c) {
			var d = "";
			if (c) {
				var e = new Date;
				e.setTime(e.getTime() + 1e3 * 60 * 60 * 24 * c), d = "; expires=" + e.toGMTString()
			}
			document.cookie = a + "=" + b + d + "; path=/"
		},
		remove: function(a) {
			$.fn.carouFredSel.cookie.set(a, "", -1)
		}
	}, $.extend($.easing, {
		quadratic: function(a) {
			var b = a * a;
			return a * (-b * a + 4 * b - 6 * a + 4)
		},
		cubic: function(a) {
			return a * (4 * a * a - 9 * a + 6)
		},
		elastic: function(a) {
			var b = a * a;
			return a * (33 * b * b - 106 * b * a + 126 * b - 67 * a + 15)
		}
	}))
})(jQuery);;
(function($) {
	$.fn.extend({
		nextUntil: function(expr) {
			var match = [];
			this.each(function() {
				for (var i = this.nextSibling; i; i = i.nextSibling) {
					if (i.nodeType != 1) continue;
					match.push(i);
				}
			});
			return this.pushStack(match);
		},
		Accordion: function(settings) {
			settings = $.extend({}, $.Accordion.defaults, {
				header: $(':first-child', this)
			}, settings);
			var container = this,
				active = settings.active ? $(settings.active, this) : settings.active === false ? $("<div>") : $(settings.header, this).eq(0),
				running = 0;
			container.find(settings.header).not(active || "").nextUntil(settings.header).hide();
			active.addClass(settings.selectedClass);

			function clickHandler(event) {
				var clicked = $(event.target);
				if (clicked.parents(settings.header).length) {
					while (!clicked.is(settings.header)) {
						clicked = clicked.parent();
					}
				}
				var clickedActive = clicked[0] == active[0];
				if (running || (settings.alwaysOpen && clickedActive) || !clicked.is(settings.header))
					return;
				active.toggleClass(settings.selectedClass);
				if (!clickedActive) {
					clicked.addClass(settings.selectedClass);
				}
				var toShow = clicked.nextUntil(settings.header),
					toHide = active.nextUntil(settings.header),
					data = [clicked, active, toShow, toHide];
				active = clickedActive ? $([]) : clicked;
				running = toHide.size() + toShow.size();
				var finished = function(cancel) {
					running = cancel ? 0 : --running;
					if (running)
						return;
					container.trigger("change", data);
				};
				if (settings.animated) {
					if (!settings.alwaysOpen && clickedActive) {
						toShow.slideToggle(settings.showSpeed);
						finished(true);
					} else {
						toHide.filter(":hidden").each(finished).end().filter(":visible").slideUp(settings.hideSpeed, finished);
						toShow.slideDown(settings.showSpeed, finished);
					}
				} else {
					if (!settings.alwaysOpen && clickedActive) {
						toShow.toggle();
					} else {
						toHide.hide();
						toShow.show();
					}
					finished(true);
				}
				return false;
			};

			function activateHandlder(event, index) {
				clickHandler({
					target: $(settings.header, this)[index]
				});
			};
			return container.bind(settings.event, clickHandler).bind("activate", activateHandlder);
		},
		activate: function(index) {
			return this.trigger('activate', [index || 0]);
		}
	});
	$.Accordion = {};
	$.extend($.Accordion, {
		defaults: {
			selectedClass: "selected",
			showSpeed: 'slow',
			hideSpeed: 'fast',
			alwaysOpen: true,
			animated: true,
			event: "click"
		},
		setDefaults: function(settings) {
			$.extend($.Accordion.defaults, settings);
		}
	});
})(jQuery);;
(function(n) {
	"use strict";

	function i(n, t) {
		if (this.createTextRange) {
			var i = this.createTextRange();
			i.collapse(!0);
			i.moveStart("character", n);
			i.moveEnd("character", t - n);
			i.select()
		} else this.setSelectionRange && (this.focus(), this.setSelectionRange(n, t))
	}

	function r(n) {
		var u = this.value.length,
			t, i, r, f;
		return (n = n.toLowerCase() == "start" ? "Start" : "End", document.selection) ? (t = document.selection.createRange(), i = t.duplicate(), i.expand("textedit"), i.setEndPoint("EndToEnd", t), r = i.text.length - t.text.length, f = r + t.text.length, n == "Start" ? r : f) : (typeof this["selection" + n] != "undefined" && (u = this["selection" + n]), u)
	}
	var u = {
			codes: {
				46: 127,
				188: 44,
				109: 45,
				190: 46,
				191: 47,
				192: 96,
				220: 92,
				222: 39,
				221: 93,
				219: 91,
				173: 45,
				187: 61,
				186: 59,
				189: 45,
				110: 46
			},
			shifts: {
				96: "~",
				49: "!",
				50: "@",
				51: "#",
				52: "$",
				53: "%",
				54: "^",
				55: "&",
				56: "*",
				57: "(",
				48: ")",
				45: "_",
				61: "+",
				91: "{",
				93: "}",
				92: "|",
				59: ":",
				39: '"',
				44: "<",
				46: ">",
				47: "?"
			}
		},
		f, t;
	n.fn.number = function(t, f, e, o) {
		o = typeof o == "undefined" ? "," : o;
		e = typeof e == "undefined" ? "." : e;
		f = typeof f == "undefined" ? 0 : f;
		var s = "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4),
			h = new RegExp("[^" + s + "0-9]", "g"),
			c = new RegExp(s, "g");
		return t === !0 ? this.is("input:text") ? this.on({
			"keydown.format": function(t) {
				var w = n(this),
					c = w.data("numFormat"),
					l = t.keyCode ? t.keyCode : t.which,
					a = "",
					s = r.apply(this, ["start"]),
					y = r.apply(this, ["end"]),
					p = "",
					v = !1,
					h;
				if (u.codes.hasOwnProperty(l) && (l = u.codes[l]), !t.shiftKey && l >= 65 && l <= 90 ? l += 32 : !t.shiftKey && l >= 69 && l <= 105 ? l -= 48 : t.shiftKey && u.shifts.hasOwnProperty(l) && (a = u.shifts[l]), a == "" && (a = String.fromCharCode(l)), l != 8 && l != 45 && l != 127 && a != e && !a.match(/[0-9]/)) return (h = t.keyCode ? t.keyCode : t.which, h == 46 || h == 8 || h == 127 || h == 9 || h == 27 || h == 13 || (h == 65 || h == 82 || h == 80 || h == 83 || h == 70 || h == 72 || h == 66 || h == 74 || h == 84 || h == 90 || h == 61 || h == 173 || h == 48) && (t.ctrlKey || t.metaKey) === !0 || (h == 86 || h == 67 || h == 88) && (t.ctrlKey || t.metaKey) === !0 || h >= 35 && h <= 39 || h >= 112 && h <= 123) ? void 0 : (t.preventDefault(), !1);
				if (s == 0 && y == this.value.length || w.val() == 0 ? l == 8 ? (s = y = 1, this.value = "", c.init = f > 0 ? -1 : 0, c.c = f > 0 ? -(f + 1) : 0, i.apply(this, [0, 0])) : a == e ? (s = y = 1, this.value = "0" + e + new Array(f + 1).join("0"), c.init = f > 0 ? 1 : 0, c.c = f > 0 ? -(f + 1) : 0) : l == 45 ? (s = y = 2, this.value = "-0" + e + new Array(f + 1).join("0"), c.init = f > 0 ? 1 : 0, c.c = f > 0 ? -(f + 1) : 0, i.apply(this, [2, 2])) : (c.init = f > 0 ? -1 : 0, c.c = f > 0 ? -f : 0) : c.c = y - this.value.length, c.isPartialSelection = s == y ? !1 : !0, f > 0 && a == e && s == this.value.length - f - 1) c.c++, c.init = Math.max(0, c.init), t.preventDefault(), v = this.value.length + c.c;
				else if (l == 45 && (s != 0 || this.value.indexOf("-") == 0)) t.preventDefault();
				else if (a == e) c.init = Math.max(0, c.init), t.preventDefault();
				else if (f > 0 && l == 127 && s == this.value.length - f - 1) t.preventDefault();
				else if (f > 0 && l == 8 && s == this.value.length - f) t.preventDefault(), c.c--, v = this.value.length + c.c;
				else if (f > 0 && l == 127 && s > this.value.length - f - 1) {
					if (this.value === "") return;
					this.value.slice(s, s + 1) != "0" && (p = this.value.slice(0, s) + "0" + this.value.slice(s + 1), w.val(p));
					t.preventDefault();
					v = this.value.length + c.c
				} else if (f > 0 && l == 8 && s > this.value.length - f) {
					if (this.value === "") return;
					this.value.slice(s - 1, s) != "0" && (p = this.value.slice(0, s - 1) + "0" + this.value.slice(s), w.val(p));
					t.preventDefault();
					c.c--;
					v = this.value.length + c.c
				} else l == 127 && this.value.slice(s, s + 1) == o ? t.preventDefault() : l == 8 && this.value.slice(s - 1, s) == o ? (t.preventDefault(), c.c--, v = this.value.length + c.c) : f > 0 && s == y && this.value.length > f + 1 && s > this.value.length - f - 1 && isFinite(+a) && !t.metaKey && !t.ctrlKey && !t.altKey && a.length === 1 && (p = y === this.value.length ? this.value.slice(0, s - 1) : this.value.slice(0, s) + this.value.slice(s + 1), this.value = p, v = s);
				v !== !1 && i.apply(this, [v, v]);
				w.data("numFormat", c)
			},
			"keyup.format": function(t) {
				var o = n(this),
					u = o.data("numFormat"),
					e = t.keyCode ? t.keyCode : t.which,
					h = r.apply(this, ["start"]),
					c = r.apply(this, ["end"]),
					s;
				(h === 0 && c === 0 && (e === 189 || e === 109) && (o.val("-" + o.val()), h = 1, u.c = 1 - this.value.length, u.init = 1, o.data("numFormat", u), s = this.value.length + u.c, i.apply(this, [s, s])), this.value === "" || (e < 48 || e > 57) && (e < 96 || e > 105) && e !== 8 && e !== 46 && e !== 110) || (o.val(o.val()), f > 0 && (u.init < 1 ? (h = this.value.length - f - (u.init < 0 ? 1 : 0), u.c = h - this.value.length, u.init = 1, o.data("numFormat", u)) : h > this.value.length - f && e != 8 && (u.c++, o.data("numFormat", u))), e != 46 || u.isPartialSelection || (u.c++, o.data("numFormat", u)), s = this.value.length + u.c, i.apply(this, [s, s]))
			},
			"paste.format": function(t) {
				var u = n(this),
					i = t.originalEvent,
					r = null;
				return window.clipboardData && window.clipboardData.getData ? r = window.clipboardData.getData("Text") : i.clipboardData && i.clipboardData.getData && (r = i.clipboardData.getData("text/plain")), u.val(r), t.preventDefault(), !1
			}
		}).each(function() {
			var t = n(this).data("numFormat", {
				c: -(f + 1),
				decimals: f,
				thousands_sep: o,
				dec_point: e,
				regex_dec_num: h,
				regex_dec: c,
				init: this.value.indexOf(".") ? !0 : !1
			});
			this.value !== "" && t.val(t.val())
		}) : this.each(function() {
			var t = n(this),
				i = +t.text().replace(h, "").replace(c, ".");
			t.number(isFinite(i) ? +i : 0, f, e, o)
		}) : this.text(n.number.apply(window, arguments))
	};
	f = null;
	t = null;
	n.isPlainObject(n.valHooks.text) ? (n.isFunction(n.valHooks.text.get) && (f = n.valHooks.text.get), n.isFunction(n.valHooks.text.set) && (t = n.valHooks.text.set)) : n.valHooks.text = {};
	n.valHooks.text.get = function(t) {
		var u = n(t),
			i, r = u.data("numFormat");
		return r ? t.value === "" ? "" : (i = +t.value.replace(r.regex_dec_num, "").replace(r.regex_dec, "."), (t.value.indexOf("-") === 0 ? "-" : "") + (isFinite(i) ? i : 0)) : n.isFunction(f) ? f(t) : undefined
	};
	n.valHooks.text.set = function(i, r) {
		var e = n(i),
			u = e.data("numFormat"),
			f;
		return u ? (f = n.number(r, u.decimals, u.dec_point, u.thousands_sep), n.isFunction(t) ? t(i, f) : i.value = f) : n.isFunction(t) ? t(i, r) : undefined
	};
	n.number = function(n, t, i, r) {
		var f, e;
		r = typeof r == "undefined" ? "," : r;
		i = typeof i == "undefined" ? "." : i;
		t = isFinite(+t) ? Math.abs(t) : 0;
		f = "\\u" + ("0000" + i.charCodeAt(0).toString(16)).slice(-4);
		e = "\\u" + ("0000" + r.charCodeAt(0).toString(16)).slice(-4);
		n = (n + "").replace(".", i).replace(new RegExp(e, "g"), "").replace(new RegExp(f, "g"), ".").replace(new RegExp("[^0-9+-Ee.]", "g"), "");
		var o = isFinite(+n) ? +n : 0,
			u = "",
			s = function(n, t) {
				return "" + (+(Math.round(("" + n).indexOf("e") > 0 ? n : n + "e+" + t) + "e-" + t))
			};
		return u = (t ? s(o, t) : "" + Math.round(o)).split("."), u[0].length > 3 && (u[0] = u[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, r)), (u[1] || "").length < t && (u[1] = u[1] || "", u[1] += new Array(t - u[1].length + 1).join("0")), u.join(i)
	}
})(jQuery);
//# sourceMappingURL=jquery.number.min.js.map
;
(function($) {
	"use strict";
	var methods = {
		init: function(options) {
			var form = this;
			if (!form.data('jqv') || form.data('jqv') == null) {
				options = methods._saveOptions(form, options);
				$(document).on("click", ".formError", function() {
					$(this).fadeOut(150, function() {
						$(this).parent('.formErrorOuter').remove();
						$(this).remove();
					});
				});
			}
			return this;
		},
		attach: function(userOptions) {
			var form = this;
			var options;
			if (userOptions)
				options = methods._saveOptions(form, userOptions);
			else
				options = form.data('jqv');
			options.validateAttribute = (form.find("[data-validation-engine*=validate]").length) ? "data-validation-engine" : "class";
			if (options.binded) {
				form.on(options.validationEventTrigger, "[" + options.validateAttribute + "*=validate]:not([type=checkbox]):not([type=radio]):not(.datepicker)", methods._onFieldEvent);
				form.on("click", "[" + options.validateAttribute + "*=validate][type=checkbox],[" + options.validateAttribute + "*=validate][type=radio]", methods._onFieldEvent);
				form.on(options.validationEventTrigger, "[" + options.validateAttribute + "*=validate][class*=datepicker]", {
					"delay": 300
				}, methods._onFieldEvent);
			}
			if (options.autoPositionUpdate) {
				$(window).bind("resize", {
					"noAnimation": true,
					"formElem": form
				}, methods.updatePromptsPosition);
			}
			form.on("click", "a[data-validation-engine-skip], a[class*='validate-skip'], button[data-validation-engine-skip], button[class*='validate-skip'], input[data-validation-engine-skip], input[class*='validate-skip']", methods._submitButtonClick);
			form.removeData('jqv_submitButton');
			form.on("submit", methods._onSubmitEvent);
			return this;
		},
		detach: function() {
			var form = this;
			var options = form.data('jqv');
			form.find("[" + options.validateAttribute + "*=validate]").not("[type=checkbox]").off(options.validationEventTrigger, methods._onFieldEvent);
			form.find("[" + options.validateAttribute + "*=validate][type=checkbox],[class*=validate][type=radio]").off("click", methods._onFieldEvent);
			form.off("submit", methods._onSubmitEvent);
			form.removeData('jqv');
			form.off("click", "a[data-validation-engine-skip], a[class*='validate-skip'], button[data-validation-engine-skip], button[class*='validate-skip'], input[data-validation-engine-skip], input[class*='validate-skip']", methods._submitButtonClick);
			form.removeData('jqv_submitButton');
			if (options.autoPositionUpdate)
				$(window).off("resize", methods.updatePromptsPosition);
			return this;
		},
		validate: function() {
			var element = $(this);
			var valid = null;
			if (element.is("form") || element.hasClass("validationEngineContainer")) {
				if (element.hasClass('validating')) {
					return false;
				} else {
					element.addClass('validating');
					var options = element.data('jqv');
					var valid = methods._validateFields(this);
					setTimeout(function() {
						element.removeClass('validating');
					}, 100);
					if (valid && options.onSuccess) {
						options.onSuccess();
					} else if (!valid && options.onFailure) {
						options.onFailure();
					}
				}
			} else if (element.is('form') || element.hasClass('validationEngineContainer')) {
				element.removeClass('validating');
			} else {
				var form = element.closest('form, .validationEngineContainer'),
					options = (form.data('jqv')) ? form.data('jqv') : $.validationEngine.defaults,
					valid = methods._validateField(element, options);
				if (valid && options.onFieldSuccess)
					options.onFieldSuccess();
				else if (options.onFieldFailure && options.InvalidFields.length > 0) {
					options.onFieldFailure();
				}
			}
			if (options.onValidationComplete) {
				return !!options.onValidationComplete(form, valid);
			}
			return valid;
		},
		updatePromptsPosition: function(event) {
			if (event && this == window) {
				var form = event.data.formElem;
				var noAnimation = event.data.noAnimation;
			} else
				var form = $(this.closest('form, .validationEngineContainer'));
			var options = form.data('jqv');
			form.find('[' + options.validateAttribute + '*=validate]').not(":disabled").each(function() {
				var field = $(this);
				if (options.prettySelect && field.is(":hidden"))
					field = form.find("#" + options.usePrefix + field.attr('id') + options.useSuffix);
				var prompt = methods._getPrompt(field);
				var promptText = $(prompt).find(".formErrorContent").html();
				if (prompt)
					methods._updatePrompt(field, $(prompt), promptText, undefined, false, options, noAnimation);
			});
			return this;
		},
		showPrompt: function(promptText, type, promptPosition, showArrow) {
			var form = this.closest('form, .validationEngineContainer');
			var options = form.data('jqv');
			if (!options)
				options = methods._saveOptions(this, options);
			if (promptPosition)
				options.promptPosition = promptPosition;
			options.showArrow = showArrow == true;
			methods._showPrompt(this, promptText, type, false, options);
			return this;
		},
		hide: function() {
			var form = $(this).closest('form, .validationEngineContainer');
			var options = form.data('jqv');
			var fadeDuration = (options && options.fadeDuration) ? options.fadeDuration : 0.3;
			var closingtag;
			if ($(this).is("form") || $(this).hasClass("validationEngineContainer")) {
				closingtag = "parentForm" + methods._getClassName($(this).attr("id"));
			} else {
				closingtag = methods._getClassName($(this).attr("id")) + "formError";
			}
			$('.' + closingtag).fadeTo(fadeDuration, 0.3, function() {
				$(this).parent('.formErrorOuter').remove();
				$(this).remove();
			});
			return this;
		},
		hideAll: function() {
			var form = this;
			var options = form.data('jqv');
			var duration = options ? options.fadeDuration : 300;
			$('.formError').fadeTo(duration, 300, function() {
				$(this).parent('.formErrorOuter').remove();
				$(this).remove();
			});
			return this;
		},
		_onFieldEvent: function(event) {
			var field = $(this);
			var form = field.closest('form, .validationEngineContainer');
			var options = form.data('jqv');
			options.eventTrigger = "field";
			window.setTimeout(function() {
				methods._validateField(field, options);
				if (options.InvalidFields.length == 0 && options.onFieldSuccess) {
					options.onFieldSuccess();
				} else if (options.InvalidFields.length > 0 && options.onFieldFailure) {
					options.onFieldFailure();
				}
			}, (event.data) ? event.data.delay : 0);
		},
		_onSubmitEvent: function() {
			var form = $(this);
			var options = form.data('jqv');
			if (form.data("jqv_submitButton")) {
				var submitButton = $("#" + form.data("jqv_submitButton"));
				if (submitButton) {
					if (submitButton.length > 0) {
						if (submitButton.hasClass("validate-skip") || submitButton.attr("data-validation-engine-skip") == "true")
							return true;
					}
				}
			}
			options.eventTrigger = "submit";
			var r = methods._validateFields(form);
			if (r && options.ajaxFormValidation) {
				methods._validateFormWithAjax(form, options);
				return false;
			}
			if (options.onValidationComplete) {
				return !!options.onValidationComplete(form, r);
			}
			return r;
		},
		_checkAjaxStatus: function(options) {
			var status = true;
			$.each(options.ajaxValidCache, function(key, value) {
				if (!value) {
					status = false;
					return false;
				}
			});
			return status;
		},
		_checkAjaxFieldStatus: function(fieldid, options) {
			return options.ajaxValidCache[fieldid] == true;
		},
		_validateFields: function(form) {
			var options = form.data('jqv');
			var errorFound = false;
			form.trigger("jqv.form.validating");
			var first_err = null;
			form.find('[' + options.validateAttribute + '*=validate]').not(":disabled").each(function() {
				var field = $(this);
				var names = [];
				if ($.inArray(field.attr('name'), names) < 0) {
					errorFound |= methods._validateField(field, options);
					if (errorFound && first_err == null)
						if (field.is(":hidden") && options.prettySelect)
							first_err = field = form.find("#" + options.usePrefix + methods._jqSelector(field.attr('id')) + options.useSuffix);
						else {
							if (field.data('jqv-prompt-at') instanceof jQuery) {
								field = field.data('jqv-prompt-at');
							} else if (field.data('jqv-prompt-at')) {
								field = $(field.data('jqv-prompt-at'));
							}
							first_err = field;
						}
					if (options.doNotShowAllErrosOnSubmit)
						return false;
					names.push(field.attr('name'));
					if (options.showOneMessage == true && errorFound) {
						return false;
					}
				}
			});
			form.trigger("jqv.form.result", [errorFound]);
			if (errorFound) {
				if (options.scroll) {
					var destination = first_err.offset().top;
					var fixleft = first_err.offset().left;
					var positionType = options.promptPosition;
					if (typeof(positionType) == 'string' && positionType.indexOf(":") != -1)
						positionType = positionType.substring(0, positionType.indexOf(":"));
					if (positionType != "bottomRight" && positionType != "bottomLeft") {
						var prompt_err = methods._getPrompt(first_err);
						if (prompt_err) {
							destination = prompt_err.offset().top;
						}
					}
					if (options.scrollOffset) {
						destination -= options.scrollOffset;
					}
					if (options.isOverflown) {
						var overflowDIV = $(options.overflownDIV);
						if (!overflowDIV.length) return false;
						var scrollContainerScroll = overflowDIV.scrollTop();
						var scrollContainerPos = -parseInt(overflowDIV.offset().top);
						destination += scrollContainerScroll + scrollContainerPos - 5;
						var scrollContainer = $(options.overflownDIV + ":not(:animated)");
						scrollContainer.animate({
							scrollTop: destination
						}, 1100, function() {
							if (options.focusFirstField) first_err.focus();
						});
					} else {
						$("html, body").animate({
							scrollTop: destination
						}, 1100, function() {
							if (options.focusFirstField) first_err.focus();
						});
						$("html, body").animate({
							scrollLeft: fixleft
						}, 1100)
					}
				} else if (options.focusFirstField)
					first_err.focus();
				return false;
			}
			return true;
		},
		_validateFormWithAjax: function(form, options) {
			var data = form.serialize();
			var type = (options.ajaxFormValidationMethod) ? options.ajaxFormValidationMethod : "GET";
			var url = (options.ajaxFormValidationURL) ? options.ajaxFormValidationURL : form.attr("action");
			var dataType = (options.dataType) ? options.dataType : "json";
			$.ajax({
				type: type,
				url: url,
				cache: false,
				dataType: dataType,
				data: data,
				form: form,
				methods: methods,
				options: options,
				beforeSend: function() {
					return options.onBeforeAjaxFormValidation(form, options);
				},
				error: function(data, transport) {
					if (options.onFailure) {
						options.onFailure(data, transport);
					} else {
						methods._ajaxError(data, transport);
					}
				},
				success: function(json) {
					if ((dataType == "json") && (json !== true)) {
						var errorInForm = false;
						for (var i = 0; i < json.length; i++) {
							var value = json[i];
							var errorFieldId = value[0];
							var errorField = $($("#" + errorFieldId)[0]);
							if (errorField.length == 1) {
								var msg = value[2];
								if (value[1] == true) {
									if (msg == "" || !msg) {
										methods._closePrompt(errorField);
									} else {
										if (options.allrules[msg]) {
											var txt = options.allrules[msg].alertTextOk;
											if (txt)
												msg = txt;
										}
										if (options.showPrompts) methods._showPrompt(errorField, msg, "pass", false, options, true);
									}
								} else {
									errorInForm |= true;
									if (options.allrules[msg]) {
										var txt = options.allrules[msg].alertText;
										if (txt)
											msg = txt;
									}
									if (options.showPrompts) methods._showPrompt(errorField, msg, "", false, options, true);
								}
							}
						}
						options.onAjaxFormComplete(!errorInForm, form, json, options);
					} else
						options.onAjaxFormComplete(true, form, json, options);
				}
			});
		},
		_validateField: function(field, options, skipAjaxValidation) {
			if (!field.attr("id")) {
				field.attr("id", "form-validation-field-" + $.validationEngine.fieldIdCounter);
				++$.validationEngine.fieldIdCounter;
			}
			if (!options.validateNonVisibleFields && (field.is(":hidden") && !options.prettySelect || field.parent().is(":hidden")))
				return false;
			var rulesParsing = field.attr(options.validateAttribute);
			var getRules = /validate\[(.*)\]/.exec(rulesParsing);
			if (!getRules)
				return false;
			var str = getRules[1];
			var rules = str.split(/\[|,|\]/);
			var isAjaxValidator = false;
			var fieldName = field.attr("name");
			var promptText = "";
			var promptType = "";
			var required = false;
			var limitErrors = false;
			options.isError = false;
			options.showArrow = true;
			if (options.maxErrorsPerField > 0) {
				limitErrors = true;
			}
			var form = $(field.closest("form, .validationEngineContainer"));
			for (var i = 0; i < rules.length; i++) {
				rules[i] = rules[i].replace(" ", "");
				if (rules[i] === '') {
					delete rules[i];
				}
			}
			for (var i = 0, field_errors = 0; i < rules.length; i++) {
				if (limitErrors && field_errors >= options.maxErrorsPerField) {
					if (!required) {
						var have_required = $.inArray('required', rules);
						required = (have_required != -1 && have_required >= i);
					}
					break;
				}
				var errorMsg = undefined;
				switch (rules[i]) {
					case "required":
						required = true;
						errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._required);
						break;
					case "custom":
						errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._custom);
						break;
					case "groupRequired":
						var classGroup = "[" + options.validateAttribute + "*=" + rules[i + 1] + "]";
						var firstOfGroup = form.find(classGroup).eq(0);
						if (firstOfGroup[0] != field[0]) {
							methods._validateField(firstOfGroup, options, skipAjaxValidation);
							options.showArrow = true;
						}
						errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._groupRequired);
						if (errorMsg) required = true;
						options.showArrow = false;
						break;
					case "ajax":
						errorMsg = methods._ajax(field, rules, i, options);
						if (errorMsg) {
							promptType = "load";
						}
						break;
					case "minSize":
						errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._minSize);
						break;
					case "maxSize":
						errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._maxSize);
						break;
					case "min":
						errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._min);
						break;
					case "max":
						errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._max);
						break;
					case "past":
						errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._past);
						break;
					case "future":
						errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._future);
						break;
					case "dateRange":
						var classGroup = "[" + options.validateAttribute + "*=" + rules[i + 1] + "]";
						options.firstOfGroup = form.find(classGroup).eq(0);
						options.secondOfGroup = form.find(classGroup).eq(1);
						if (options.firstOfGroup[0].value || options.secondOfGroup[0].value) {
							errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._dateRange);
						}
						if (errorMsg) required = true;
						options.showArrow = false;
						break;
					case "dateTimeRange":
						var classGroup = "[" + options.validateAttribute + "*=" + rules[i + 1] + "]";
						options.firstOfGroup = form.find(classGroup).eq(0);
						options.secondOfGroup = form.find(classGroup).eq(1);
						if (options.firstOfGroup[0].value || options.secondOfGroup[0].value) {
							errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._dateTimeRange);
						}
						if (errorMsg) required = true;
						options.showArrow = false;
						break;
					case "maxCheckbox":
						field = $(form.find("input[name='" + fieldName + "']"));
						errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._maxCheckbox);
						break;
					case "minCheckbox":
						field = $(form.find("input[name='" + fieldName + "']"));
						errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._minCheckbox);
						break;
					case "equals":
						errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._equals);
						break;
					case "funcCall":
						errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._funcCall);
						break;
					case "creditCard":
						errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._creditCard);
						break;
					case "condRequired":
						errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._condRequired);
						if (errorMsg !== undefined) {
							required = true;
						}
						break;
					default:
				}
				var end_validation = false;
				if (typeof errorMsg == "object") {
					switch (errorMsg.status) {
						case "_break":
							end_validation = true;
							break;
						case "_error":
							errorMsg = errorMsg.message;
							break;
						case "_error_no_prompt":
							return true;
							break;
						default:
							break;
					}
				}
				if (end_validation) {
					break;
				}
				if (typeof errorMsg == 'string') {
					promptText += errorMsg + "<br/>";
					options.isError = true;
					field_errors++;
				}
			}
			if (!required && !(field.val()) && field.val().length < 1 && rules.indexOf("equals") < 0) options.isError = false;
			var fieldType = field.prop("type");
			var positionType = field.data("promptPosition") || options.promptPosition;
			if ((fieldType == "radio" || fieldType == "checkbox") && form.find("input[name='" + fieldName + "']").size() > 1) {
				if (positionType === 'inline') {
					field = $(form.find("input[name='" + fieldName + "'][type!=hidden]:last"));
				} else {
					field = $(form.find("input[name='" + fieldName + "'][type!=hidden]:first"));
				}
				options.showArrow = false;
			}
			if (field.is(":hidden") && options.prettySelect) {
				field = form.find("#" + options.usePrefix + methods._jqSelector(field.attr('id')) + options.useSuffix);
			}
			if (options.isError && options.showPrompts) {
				methods._showPrompt(field, promptText, promptType, false, options);
			} else {
				if (!isAjaxValidator) methods._closePrompt(field);
			}
			if (!isAjaxValidator) {
				field.trigger("jqv.field.result", [field, options.isError, promptText]);
			}
			var errindex = $.inArray(field[0], options.InvalidFields);
			if (errindex == -1) {
				if (options.isError)
					options.InvalidFields.push(field[0]);
			} else if (!options.isError) {
				options.InvalidFields.splice(errindex, 1);
			}
			methods._handleStatusCssClasses(field, options);
			if (options.isError && options.onFieldFailure)
				options.onFieldFailure(field);
			if (!options.isError && options.onFieldSuccess)
				options.onFieldSuccess(field);
			return options.isError;
		},
		_handleStatusCssClasses: function(field, options) {
			if (options.addSuccessCssClassToField)
				field.removeClass(options.addSuccessCssClassToField);
			if (options.addFailureCssClassToField)
				field.removeClass(options.addFailureCssClassToField);
			if (options.addSuccessCssClassToField && !options.isError)
				field.addClass(options.addSuccessCssClassToField);
			if (options.addFailureCssClassToField && options.isError)
				field.addClass(options.addFailureCssClassToField);
		},
		_getErrorMessage: function(form, field, rule, rules, i, options, originalValidationMethod) {
			var rule_index = jQuery.inArray(rule, rules);
			if (rule === "custom" || rule === "funcCall") {
				var custom_validation_type = rules[rule_index + 1];
				rule = rule + "[" + custom_validation_type + "]";
				delete(rules[rule_index]);
			}
			var alteredRule = rule;
			var element_classes = (field.attr("data-validation-engine")) ? field.attr("data-validation-engine") : field.attr("class");
			var element_classes_array = element_classes.split(" ");
			var errorMsg;
			if (rule == "future" || rule == "past" || rule == "maxCheckbox" || rule == "minCheckbox") {
				errorMsg = originalValidationMethod(form, field, rules, i, options);
			} else {
				errorMsg = originalValidationMethod(field, rules, i, options);
			}
			if (errorMsg != undefined) {
				var custom_message = methods._getCustomErrorMessage($(field), element_classes_array, alteredRule, options);
				if (custom_message) errorMsg = custom_message;
			}
			return errorMsg;
		},
		_getCustomErrorMessage: function(field, classes, rule, options) {
			var custom_message = false;
			var validityProp = /^custom\[.*\]$/.test(rule) ? methods._validityProp["custom"] : methods._validityProp[rule];
			if (validityProp != undefined) {
				custom_message = field.attr("data-errormessage-" + validityProp);
				if (custom_message != undefined)
					return custom_message;
			}
			custom_message = field.attr("data-errormessage");
			if (custom_message != undefined)
				return custom_message;
			var id = '#' + field.attr("id");
			if (typeof options.custom_error_messages[id] != "undefined" && typeof options.custom_error_messages[id][rule] != "undefined") {
				custom_message = options.custom_error_messages[id][rule]['message'];
			} else if (classes.length > 0) {
				for (var i = 0; i < classes.length && classes.length > 0; i++) {
					var element_class = "." + classes[i];
					if (typeof options.custom_error_messages[element_class] != "undefined" && typeof options.custom_error_messages[element_class][rule] != "undefined") {
						custom_message = options.custom_error_messages[element_class][rule]['message'];
						break;
					}
				}
			}
			if (!custom_message && typeof options.custom_error_messages[rule] != "undefined" && typeof options.custom_error_messages[rule]['message'] != "undefined") {
				custom_message = options.custom_error_messages[rule]['message'];
			}
			return custom_message;
		},
		_validityProp: {
			"required": "value-missing",
			"custom": "custom-error",
			"groupRequired": "value-missing",
			"ajax": "custom-error",
			"minSize": "range-underflow",
			"maxSize": "range-overflow",
			"min": "range-underflow",
			"max": "range-overflow",
			"past": "type-mismatch",
			"future": "type-mismatch",
			"dateRange": "type-mismatch",
			"dateTimeRange": "type-mismatch",
			"maxCheckbox": "range-overflow",
			"minCheckbox": "range-underflow",
			"equals": "pattern-mismatch",
			"funcCall": "custom-error",
			"creditCard": "pattern-mismatch",
			"condRequired": "value-missing"
		},
		_required: function(field, rules, i, options, condRequired) {
			switch (field.prop("type")) {
				case "text":
				case "password":
				case "textarea":
				case "file":
				case "select-one":
				case "select-multiple":
				default:
					var field_val = $.trim(field.val());
					var dv_placeholder = $.trim(field.attr("data-validation-placeholder"));
					var placeholder = $.trim(field.attr("placeholder"));
					if ((!field_val) || (dv_placeholder && field_val == dv_placeholder) || (placeholder && field_val == placeholder)) {
						return options.allrules[rules[i]].alertText;
					}
					break;
				case "radio":
				case "checkbox":
					if (condRequired) {
						if (!field.attr('checked')) {
							return options.allrules[rules[i]].alertTextCheckboxMultiple;
						}
						break;
					}
					var form = field.closest("form, .validationEngineContainer");
					var name = field.attr("name");
					if (form.find("input[name='" + name + "']:checked").size() == 0) {
						if (form.find("input[name='" + name + "']:visible").size() == 1)
							return options.allrules[rules[i]].alertTextCheckboxe;
						else
							return options.allrules[rules[i]].alertTextCheckboxMultiple;
					}
					break;
			}
		},
		_groupRequired: function(field, rules, i, options) {
			var classGroup = "[" + options.validateAttribute + "*=" + rules[i + 1] + "]";
			var isValid = false;
			field.closest("form, .validationEngineContainer").find(classGroup).each(function() {
				if (!methods._required($(this), rules, i, options)) {
					isValid = true;
					return false;
				}
			});
			if (!isValid) {
				return options.allrules[rules[i]].alertText;
			}
		},
		_custom: function(field, rules, i, options) {
			var customRule = rules[i + 1];
			var rule = options.allrules[customRule];
			var fn;
			if (!rule) {
				alert("jqv:custom rule not found - " + customRule);
				return;
			}
			if (rule["regex"]) {
				var ex = rule.regex;
				if (!ex) {
					alert("jqv:custom regex not found - " + customRule);
					return;
				}
				var pattern = new RegExp(ex);
				if (!pattern.test(field.val())) return options.allrules[customRule].alertText;
			} else if (rule["func"]) {
				fn = rule["func"];
				if (typeof(fn) !== "function") {
					alert("jqv:custom parameter 'function' is no function - " + customRule);
					return;
				}
				if (!fn(field, rules, i, options))
					return options.allrules[customRule].alertText;
			} else {
				alert("jqv:custom type not allowed " + customRule);
				return;
			}
		},
		_funcCall: function(field, rules, i, options) {
			var functionName = rules[i + 1];
			var fn;
			if (functionName.indexOf('.') > -1) {
				var namespaces = functionName.split('.');
				var scope = window;
				while (namespaces.length) {
					scope = scope[namespaces.shift()];
				}
				fn = scope;
			} else
				fn = window[functionName] || options.customFunctions[functionName];
			if (typeof(fn) == 'function')
				return fn(field, rules, i, options);
		},
		_equals: function(field, rules, i, options) {
			var equalsField = rules[i + 1];
			if (field.val() != $("#" + equalsField).val())
				return options.allrules.equals.alertText;
		},
		_maxSize: function(field, rules, i, options) {
			var max = rules[i + 1];
			var len = field.val().length;
			if (len > max) {
				var rule = options.allrules.maxSize;
				return rule.alertText + max + rule.alertText2;
			}
		},
		_minSize: function(field, rules, i, options) {
			var min = rules[i + 1];
			var len = field.val().length;
			if (len < min) {
				var rule = options.allrules.minSize;
				return rule.alertText + min + rule.alertText2;
			}
		},
		_min: function(field, rules, i, options) {
			var min = parseFloat(rules[i + 1]);
			var len = parseFloat(field.val());
			if (len < min) {
				var rule = options.allrules.min;
				if (rule.alertText2) return rule.alertText + min + rule.alertText2;
				return rule.alertText + min;
			}
		},
		_max: function(field, rules, i, options) {
			var max = parseFloat(rules[i + 1]);
			var len = parseFloat(field.val());
			if (len > max) {
				var rule = options.allrules.max;
				if (rule.alertText2) return rule.alertText + max + rule.alertText2;
				return rule.alertText + max;
			}
		},
		_past: function(form, field, rules, i, options) {
			var p = rules[i + 1];
			var fieldAlt = $(form.find("*[name='" + p.replace(/^#+/, '') + "']"));
			var pdate;
			if (p.toLowerCase() == "now") {
				pdate = new Date();
			} else if (undefined != fieldAlt.val()) {
				if (fieldAlt.is(":disabled"))
					return;
				pdate = methods._parseDate(fieldAlt.val());
			} else {
				pdate = methods._parseDate(p);
			}
			var vdate = methods._parseDate(field.val());
			if (vdate > pdate) {
				var rule = options.allrules.past;
				if (rule.alertText2) return rule.alertText + methods._dateToString(pdate) + rule.alertText2;
				return rule.alertText + methods._dateToString(pdate);
			}
		},
		_future: function(form, field, rules, i, options) {
			var p = rules[i + 1];
			var fieldAlt = $(form.find("*[name='" + p.replace(/^#+/, '') + "']"));
			var pdate;
			if (p.toLowerCase() == "now") {
				pdate = new Date();
			} else if (undefined != fieldAlt.val()) {
				if (fieldAlt.is(":disabled"))
					return;
				pdate = methods._parseDate(fieldAlt.val());
			} else {
				pdate = methods._parseDate(p);
			}
			var vdate = methods._parseDate(field.val());
			if (vdate < pdate) {
				var rule = options.allrules.future;
				if (rule.alertText2)
					return rule.alertText + methods._dateToString(pdate) + rule.alertText2;
				return rule.alertText + methods._dateToString(pdate);
			}
		},
		_isDate: function(value) {
			var dateRegEx = new RegExp(/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$|^(?:(?:(?:0?[13578]|1[02])(\/|-)31)|(?:(?:0?[1,3-9]|1[0-2])(\/|-)(?:29|30)))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(?:(?:0?[1-9]|1[0-2])(\/|-)(?:0?[1-9]|1\d|2[0-8]))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(0?2(\/|-)29)(\/|-)(?:(?:0[48]00|[13579][26]00|[2468][048]00)|(?:\d\d)?(?:0[48]|[2468][048]|[13579][26]))$/);
			return dateRegEx.test(value);
		},
		_isDateTime: function(value) {
			var dateTimeRegEx = new RegExp(/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])\s+(1[012]|0?[1-9]){1}:(0?[1-5]|[0-6][0-9]){1}:(0?[0-6]|[0-6][0-9]){1}\s+(am|pm|AM|PM){1}$|^(?:(?:(?:0?[13578]|1[02])(\/|-)31)|(?:(?:0?[1,3-9]|1[0-2])(\/|-)(?:29|30)))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^((1[012]|0?[1-9]){1}\/(0?[1-9]|[12][0-9]|3[01]){1}\/\d{2,4}\s+(1[012]|0?[1-9]){1}:(0?[1-5]|[0-6][0-9]){1}:(0?[0-6]|[0-6][0-9]){1}\s+(am|pm|AM|PM){1})$/);
			return dateTimeRegEx.test(value);
		},
		_dateCompare: function(start, end) {
			return (new Date(start.toString()) < new Date(end.toString()));
		},
		_dateRange: function(field, rules, i, options) {
			if ((!options.firstOfGroup[0].value && options.secondOfGroup[0].value) || (options.firstOfGroup[0].value && !options.secondOfGroup[0].value)) {
				return options.allrules[rules[i]].alertText + options.allrules[rules[i]].alertText2;
			}
			if (!methods._isDate(options.firstOfGroup[0].value) || !methods._isDate(options.secondOfGroup[0].value)) {
				return options.allrules[rules[i]].alertText + options.allrules[rules[i]].alertText2;
			}
			if (!methods._dateCompare(options.firstOfGroup[0].value, options.secondOfGroup[0].value)) {
				return options.allrules[rules[i]].alertText + options.allrules[rules[i]].alertText2;
			}
		},
		_dateTimeRange: function(field, rules, i, options) {
			if ((!options.firstOfGroup[0].value && options.secondOfGroup[0].value) || (options.firstOfGroup[0].value && !options.secondOfGroup[0].value)) {
				return options.allrules[rules[i]].alertText + options.allrules[rules[i]].alertText2;
			}
			if (!methods._isDateTime(options.firstOfGroup[0].value) || !methods._isDateTime(options.secondOfGroup[0].value)) {
				return options.allrules[rules[i]].alertText + options.allrules[rules[i]].alertText2;
			}
			if (!methods._dateCompare(options.firstOfGroup[0].value, options.secondOfGroup[0].value)) {
				return options.allrules[rules[i]].alertText + options.allrules[rules[i]].alertText2;
			}
		},
		_maxCheckbox: function(form, field, rules, i, options) {
			var nbCheck = rules[i + 1];
			var groupname = field.attr("name");
			var groupSize = form.find("input[name='" + groupname + "']:checked").size();
			if (groupSize > nbCheck) {
				options.showArrow = false;
				if (options.allrules.maxCheckbox.alertText2)
					return options.allrules.maxCheckbox.alertText + " " + nbCheck + " " + options.allrules.maxCheckbox.alertText2;
				return options.allrules.maxCheckbox.alertText;
			}
		},
		_minCheckbox: function(form, field, rules, i, options) {
			var nbCheck = rules[i + 1];
			var groupname = field.attr("name");
			var groupSize = form.find("input[name='" + groupname + "']:checked").size();
			if (groupSize < nbCheck) {
				options.showArrow = false;
				return options.allrules.minCheckbox.alertText + " " + nbCheck + " " + options.allrules.minCheckbox.alertText2;
			}
		},
		_creditCard: function(field, rules, i, options) {
			var valid = false,
				cardNumber = field.val().replace(/ +/g, '').replace(/-+/g, '');
			var numDigits = cardNumber.length;
			if (numDigits >= 14 && numDigits <= 16 && parseInt(cardNumber) > 0) {
				var sum = 0,
					i = numDigits - 1,
					pos = 1,
					digit, luhn = new String();
				do {
					digit = parseInt(cardNumber.charAt(i));
					luhn += (pos++ % 2 == 0) ? digit * 2 : digit;
				} while (--i >= 0)
				for (i = 0; i < luhn.length; i++) {
					sum += parseInt(luhn.charAt(i));
				}
				valid = sum % 10 == 0;
			}
			if (!valid) return options.allrules.creditCard.alertText;
		},
		_ajax: function(field, rules, i, options) {
			var errorSelector = rules[i + 1];
			var rule = options.allrules[errorSelector];
			var extraData = rule.extraData;
			var extraDataDynamic = rule.extraDataDynamic;
			var data = {
				"fieldId": field.attr("id"),
				"fieldValue": field.val()
			};
			if (typeof extraData === "object") {
				$.extend(data, extraData);
			} else if (typeof extraData === "string") {
				var tempData = extraData.split("&");
				for (var i = 0; i < tempData.length; i++) {
					var values = tempData[i].split("=");
					if (values[0] && values[0]) {
						data[values[0]] = values[1];
					}
				}
			}
			if (extraDataDynamic) {
				var tmpData = [];
				var domIds = String(extraDataDynamic).split(",");
				for (var i = 0; i < domIds.length; i++) {
					var id = domIds[i];
					if ($(id).length) {
						var inputValue = field.closest("form, .validationEngineContainer").find(id).val();
						var keyValue = id.replace('#', '') + '=' + escape(inputValue);
						data[id.replace('#', '')] = inputValue;
					}
				}
			}
			if (options.eventTrigger == "field") {
				delete(options.ajaxValidCache[field.attr("id")]);
			}
			if (!options.isError && !methods._checkAjaxFieldStatus(field.attr("id"), options)) {
				$.ajax({
					type: options.ajaxFormValidationMethod,
					url: rule.url,
					cache: false,
					dataType: "json",
					data: data,
					field: field,
					rule: rule,
					methods: methods,
					options: options,
					beforeSend: function() {},
					error: function(data, transport) {
						if (options.onFailure) {
							options.onFailure(data, transport);
						} else {
							methods._ajaxError(data, transport);
						}
					},
					success: function(json) {
						var errorFieldId = json[0];
						var errorField = $("#" + errorFieldId).eq(0);
						if (errorField.length == 1) {
							var status = json[1];
							var msg = json[2];
							if (!status) {
								options.ajaxValidCache[errorFieldId] = false;
								options.isError = true;
								if (msg) {
									if (options.allrules[msg]) {
										var txt = options.allrules[msg].alertText;
										if (txt) {
											msg = txt;
										}
									}
								} else
									msg = rule.alertText;
								if (options.showPrompts) methods._showPrompt(errorField, msg, "", true, options);
							} else {
								options.ajaxValidCache[errorFieldId] = true;
								if (msg) {
									if (options.allrules[msg]) {
										var txt = options.allrules[msg].alertTextOk;
										if (txt) {
											msg = txt;
										}
									}
								} else
									msg = rule.alertTextOk;
								if (options.showPrompts) {
									if (msg)
										methods._showPrompt(errorField, msg, "pass", true, options);
									else
										methods._closePrompt(errorField);
								}
								if (options.eventTrigger == "submit")
									field.closest("form").submit();
							}
						}
						errorField.trigger("jqv.field.result", [errorField, options.isError, msg]);
					}
				});
				return rule.alertTextLoad;
			}
		},
		_ajaxError: function(data, transport) {
			if (data.status == 0 && transport == null)
				alert("The page is not served from a server! ajax call failed");
			else if (typeof console != "undefined")
				console.log("Ajax error: " + data.status + " " + transport);
		},
		_dateToString: function(date) {
			return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
		},
		_parseDate: function(d) {
			var dateParts = d.split("-");
			if (dateParts == d)
				dateParts = d.split("index.html");
			if (dateParts == d) {
				dateParts = d.split(".");
				return new Date(dateParts[2], (dateParts[1] - 1), dateParts[0]);
			}
			return new Date(dateParts[0], (dateParts[1] - 1), dateParts[2]);
		},
		_showPrompt: function(field, promptText, type, ajaxed, options, ajaxform) {
			if (field.data('jqv-prompt-at') instanceof jQuery) {
				field = field.data('jqv-prompt-at');
			} else if (field.data('jqv-prompt-at')) {
				field = $(field.data('jqv-prompt-at'));
			}
			var prompt = methods._getPrompt(field);
			if (ajaxform) prompt = false;
			if ($.trim(promptText)) {
				if (prompt)
					methods._updatePrompt(field, prompt, promptText, type, ajaxed, options);
				else
					methods._buildPrompt(field, promptText, type, ajaxed, options);
			}
		},
		_buildPrompt: function(field, promptText, type, ajaxed, options) {
			var prompt = $('<div>');
			prompt.addClass(methods._getClassName(field.attr("id")) + "formError");
			prompt.addClass("parentForm" + methods._getClassName(field.closest('form, .validationEngineContainer').attr("id")));
			prompt.addClass("formError");
			switch (type) {
				case "pass":
					prompt.addClass("greenPopup");
					break;
				case "load":
					prompt.addClass("blackPopup");
					break;
				default:
			}
			if (ajaxed)
				prompt.addClass("ajaxed");
			var promptContent = $('<div>').addClass("formErrorContent").html(promptText).appendTo(prompt);
			var positionType = field.data("promptPosition") || options.promptPosition;
			if (options.showArrow) {
				var arrow = $('<div>').addClass("formErrorArrow");
				if (typeof(positionType) == 'string') {
					var pos = positionType.indexOf(":");
					if (pos != -1)
						positionType = positionType.substring(0, pos);
				}
				switch (positionType) {
					case "bottomLeft":
					case "bottomRight":
						prompt.find(".formErrorContent").before(arrow);
						arrow.addClass("formErrorArrowBottom").html('<div class="line1"><!-- --></div><div class="line2"><!-- --></div><div class="line3"><!-- --></div><div class="line4"><!-- --></div><div class="line5"><!-- --></div><div class="line6"><!-- --></div><div class="line7"><!-- --></div><div class="line8"><!-- --></div><div class="line9"><!-- --></div><div class="line10"><!-- --></div>');
						break;
					case "topLeft":
					case "topRight":
						arrow.html('<div class="line10"><!-- --></div><div class="line9"><!-- --></div><div class="line8"><!-- --></div><div class="line7"><!-- --></div><div class="line6"><!-- --></div><div class="line5"><!-- --></div><div class="line4"><!-- --></div><div class="line3"><!-- --></div><div class="line2"><!-- --></div><div class="line1"><!-- --></div>');
						prompt.append(arrow);
						break;
				}
			}
			if (options.addPromptClass)
				prompt.addClass(options.addPromptClass);
			var requiredOverride = field.attr('data-required-class');
			if (requiredOverride !== undefined) {
				prompt.addClass(requiredOverride);
			} else {
				if (options.prettySelect) {
					if ($('#' + field.attr('id')).next().is('select')) {
						var prettyOverrideClass = $('#' + field.attr('id').substr(options.usePrefix.length).substring(options.useSuffix.length)).attr('data-required-class');
						if (prettyOverrideClass !== undefined) {
							prompt.addClass(prettyOverrideClass);
						}
					}
				}
			}
			prompt.css({
				"opacity": 0
			});
			if (positionType === 'inline') {
				prompt.addClass("inline");
				if (typeof field.attr('data-prompt-target') !== 'undefined' && $('#' + field.attr('data-prompt-target')).length > 0) {
					prompt.appendTo($('#' + field.attr('data-prompt-target')));
				} else {
					field.after(prompt);
				}
			} else {
				field.before(prompt);
			}
			var pos = methods._calculatePosition(field, prompt, options);
			prompt.css({
				'position': positionType === 'inline' ? 'relative' : 'absolute',
				"top": pos.callerTopPosition,
				"left": pos.callerleftPosition,
				"marginTop": pos.marginTopSize,
				"opacity": 0
			}).data("callerField", field);
			if (options.autoHidePrompt) {
				setTimeout(function() {
					prompt.animate({
						"opacity": 0
					}, function() {
						prompt.closest('.formErrorOuter').remove();
						prompt.remove();
					});
				}, options.autoHideDelay);
			}
			return prompt.animate({
				"opacity": 0.87
			});
		},
		_updatePrompt: function(field, prompt, promptText, type, ajaxed, options, noAnimation) {
			if (prompt) {
				if (typeof type !== "undefined") {
					if (type == "pass")
						prompt.addClass("greenPopup");
					else
						prompt.removeClass("greenPopup");
					if (type == "load")
						prompt.addClass("blackPopup");
					else
						prompt.removeClass("blackPopup");
				}
				if (ajaxed)
					prompt.addClass("ajaxed");
				else
					prompt.removeClass("ajaxed");
				prompt.find(".formErrorContent").html(promptText);
				var pos = methods._calculatePosition(field, prompt, options);
				var css = {
					"top": pos.callerTopPosition,
					"left": pos.callerleftPosition,
					"marginTop": pos.marginTopSize
				};
				if (noAnimation)
					prompt.css(css);
				else
					prompt.animate(css);
			}
		},
		_closePrompt: function(field) {
			var prompt = methods._getPrompt(field);
			if (prompt)
				prompt.fadeTo("fast", 0, function() {
					prompt.parent('.formErrorOuter').remove();
					prompt.remove();
				});
		},
		closePrompt: function(field) {
			return methods._closePrompt(field);
		},
		_getPrompt: function(field) {
			var formId = $(field).closest('form, .validationEngineContainer').attr('id');
			var className = methods._getClassName(field.attr("id")) + "formError";
			var match = $("." + methods._escapeExpression(className) + '.parentForm' + methods._getClassName(formId))[0];
			if (match)
				return $(match);
		},
		_escapeExpression: function(selector) {
			return selector.replace(/([#;&,\.\+\*\~':"\!\^$\[\]\(\)=>\|])/g, "\\$1");
		},
		isRTL: function(field) {
			var $document = $(document);
			var $body = $('body');
			var rtl = (field && field.hasClass('rtl')) || (field && (field.attr('dir') || '').toLowerCase() === 'rtl') || $document.hasClass('rtl') || ($document.attr('dir') || '').toLowerCase() === 'rtl' || $body.hasClass('rtl') || ($body.attr('dir') || '').toLowerCase() === 'rtl';
			return Boolean(rtl);
		},
		_calculatePosition: function(field, promptElmt, options) {
			var promptTopPosition, promptleftPosition, marginTopSize;
			var fieldWidth = field.width();
			var fieldLeft = field.position().left;
			var fieldTop = field.position().top;
			var fieldHeight = field.height();
			var promptHeight = promptElmt.height();
			promptTopPosition = promptleftPosition = 0;
			marginTopSize = -promptHeight;
			var positionType = field.data("promptPosition") || options.promptPosition;
			var shift1 = "";
			var shift2 = "";
			var shiftX = 0;
			var shiftY = 0;
			if (typeof(positionType) == 'string') {
				if (positionType.indexOf(":") != -1) {
					shift1 = positionType.substring(positionType.indexOf(":") + 1);
					positionType = positionType.substring(0, positionType.indexOf(":"));
					if (shift1.indexOf(",") != -1) {
						shift2 = shift1.substring(shift1.indexOf(",") + 1);
						shift1 = shift1.substring(0, shift1.indexOf(","));
						shiftY = parseInt(shift2);
						if (isNaN(shiftY)) shiftY = 0;
					};
					shiftX = parseInt(shift1);
					if (isNaN(shift1)) shift1 = 0;
				};
			};
			switch (positionType) {
				default:
					case "topRight":
					promptleftPosition += fieldLeft + fieldWidth - 30;promptTopPosition += fieldTop;
				break;
				case "topLeft":
						promptTopPosition += fieldTop;promptleftPosition += fieldLeft;
					break;
				case "centerRight":
						promptTopPosition = fieldTop + 4;marginTopSize = 0;promptleftPosition = fieldLeft + field.outerWidth(true) + 5;
					break;
				case "centerLeft":
						promptleftPosition = fieldLeft - (promptElmt.width() + 2);promptTopPosition = fieldTop + 4;marginTopSize = 0;
					break;
				case "bottomLeft":
						promptTopPosition = fieldTop + field.height() + 5;marginTopSize = 0;promptleftPosition = fieldLeft;
					break;
				case "bottomRight":
						promptleftPosition = fieldLeft + fieldWidth - 30;promptTopPosition = fieldTop + field.height() + 5;marginTopSize = 0;
					break;
				case "inline":
						promptleftPosition = 0;promptTopPosition = 0;marginTopSize = 0;
			};
			promptleftPosition += shiftX;
			promptTopPosition += shiftY;
			return {
				"callerTopPosition": promptTopPosition + "px",
				"callerleftPosition": promptleftPosition + "px",
				"marginTopSize": marginTopSize + "px"
			};
		},
		_saveOptions: function(form, options) {
			if ($.validationEngineLanguage)
				var allRules = $.validationEngineLanguage.allRules;
			else
				$.error("jQuery.validationEngine rules are not loaded, plz add localization files to the page");
			$.validationEngine.defaults.allrules = allRules;
			var userOptions = $.extend(true, {}, $.validationEngine.defaults, options);
			form.data('jqv', userOptions);
			return userOptions;
		},
		_getClassName: function(className) {
			if (className)
				return className.replace(/:/g, "_").replace(/\./g, "_");
		},
		_jqSelector: function(str) {
			return str.replace(/([;&,\.\+\*\~':"\!\^#$%@\[\]\(\)=>\|])/g, '\\$1');
		},
		_condRequired: function(field, rules, i, options) {
			var idx, dependingField;
			for (idx = (i + 1); idx < rules.length; idx++) {
				dependingField = jQuery("#" + rules[idx]).first();
				if (dependingField.length && methods._required(dependingField, ["required"], 0, options, true) == undefined) {
					return methods._required(field, ["required"], 0, options);
				}
			}
		},
		_submitButtonClick: function(event) {
			var button = $(this);
			var form = button.closest('form, .validationEngineContainer');
			form.data("jqv_submitButton", button.attr("id"));
		}
	};
	$.fn.validationEngine = function(method) {
		var form = $(this);
		if (!form[0]) return form;
		if (typeof(method) == 'string' && method.charAt(0) != '_' && methods[method]) {
			if (method != "showPrompt" && method != "hide" && method != "hideAll")
				methods.init.apply(form);
			return methods[method].apply(form, Array.prototype.slice.call(arguments, 1));
		} else if (typeof method == 'object' || !method) {
			methods.init.apply(form, arguments);
			return methods.attach.apply(form);
		} else {
			$.error('Method ' + method + ' does not exist in jQuery.validationEngine');
		}
	};
	$.validationEngine = {
		fieldIdCounter: 0,
		defaults: {
			validationEventTrigger: "blur",
			scroll: true,
			focusFirstField: true,
			showPrompts: true,
			validateNonVisibleFields: false,
			promptPosition: "topRight",
			bindMethod: "bind",
			inlineAjax: false,
			ajaxFormValidation: false,
			ajaxFormValidationURL: false,
			ajaxFormValidationMethod: 'get',
			onAjaxFormComplete: $.noop,
			onBeforeAjaxFormValidation: $.noop,
			onValidationComplete: false,
			doNotShowAllErrosOnSubmit: false,
			custom_error_messages: {},
			binded: true,
			showArrow: true,
			isError: false,
			maxErrorsPerField: false,
			ajaxValidCache: {},
			autoPositionUpdate: false,
			InvalidFields: [],
			onFieldSuccess: false,
			onFieldFailure: false,
			onSuccess: false,
			onFailure: false,
			validateAttribute: "class",
			addSuccessCssClassToField: "",
			addFailureCssClassToField: "",
			autoHidePrompt: false,
			autoHideDelay: 10000,
			fadeDuration: 0.3,
			prettySelect: false,
			addPromptClass: "",
			usePrefix: "",
			useSuffix: "",
			showOneMessage: false
		}
	};
	$(function() {
		$.validationEngine.defaults.promptPosition = methods.isRTL() ? 'topLeft' : "topRight"
	});
})(jQuery);;
(function($) {
	$.fn.validationEngineLanguage = function() {};
	$.validationEngineLanguage = {
		newLang: function() {
			$.validationEngineLanguage.allRules = {
				"required": {
					"regex": "none",
					"alertText": "* Trường này bắt buộc",
					"alertTextCheckboxMultiple": "* Vui lòng chọn một tùy chọn",
					"alertTextCheckboxe": "* Checkbox này bắt buộc",
					"alertTextDateRange": "* Cả hai trường ngày tháng đều bắt buộc"
				},
				"requiredInFunction": {
					"func": function(field, rules, i, options) {
						return (field.val() == "test") ? true : false;
					},
					"alertText": "* Giá trị của trường phải là test"
				},
				"dateRange": {
					"regex": "none",
					"alertText": "* Không đúng ",
					"alertText2": "Khoảng ngày tháng"
				},
				"dateTimeRange": {
					"regex": "none",
					"alertText": "* Không đúng ",
					"alertText2": "Khoảng thời gian"
				},
				"minSize": {
					"regex": "none",
					"alertText": "* Tối thiểu ",
					"alertText2": " số ký tự được cho phép"
				},
				"maxSize": {
					"regex": "none",
					"alertText": "* Tối đa ",
					"alertText2": " số ký tự được cho phép"
				},
				"groupRequired": {
					"regex": "none",
					"alertText": "* Bạn phải điền một trong những trường sau"
				},
				"min": {
					"regex": "none",
					"alertText": "* Giá trị nhỏ nhất là "
				},
				"max": {
					"regex": "none",
					"alertText": "* Giá trị lớn nhất là "
				},
				"past": {
					"regex": "none",
					"alertText": "* Ngày kéo dài tới "
				},
				"future": {
					"regex": "none",
					"alertText": "* Ngày đã qua "
				},
				"maxCheckbox": {
					"regex": "none",
					"alertText": "* Tối đa ",
					"alertText2": " số tùy chọn được cho phép"
				},
				"minCheckbox": {
					"regex": "none",
					"alertText": "* Vui lòng chọn ",
					"alertText2": " các tùy chọn"
				},
				"equals": {
					"regex": "none",
					"alertText": "* Giá trị các trường không giống nhau"
				},
				"creditCard": {
					"regex": "none",
					"alertText": "* Số thẻ tín dụng sai"
				},
				"phone": {
					"regex": /^([\+][0-9]{1,3}[\ \.\-])?([\(]{1}[0-9]{2,6}[\)])?([0-9\ \.\-\/]{3,20})((x|ext|extension)[\ ]?[0-9]{1,4})?$/,
					"alertText": "* Số điện thoại sai"
				},
				"email": {
					"regex": /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
					"alertText": "* Địa chỉ thư điện tử sai"
				},
				"integer": {
					"regex": /^[\-\+]?\d+$/,
					"alertText": "* Không đúng là số nguyên"
				},
				"number": {
					"regex": /^[\-\+]?((([0-9]{1,3})([,][0-9]{3})*)|([0-9]+))?([\.]([0-9]+))?$/,
					"alertText": "* Không đúng là số thập phân"
				},
				"date": {
					"regex": /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/,
					"alertText": "* Ngày sai, phải có định dạng YYYY-MM-DD"
				},
				"ipv4": {
					"regex": /^((([01]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))[.]){3}(([0-1]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))$/,
					"alertText": "* Địa chỉ IP sai"
				},
				"url": {
					"regex": /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,
					"alertText": "* URL sai"
				},
				"onlyNumberSp": {
					"regex": /^[0-9\ ]+$/,
					"alertText": "* Chỉ điền số"
				},
				"onlyLetterSp": {
					"regex": /^[a-zA-Z\ \']+$/,
					"alertText": "* Chỉ điền chữ"
				},
				"onlyLetterNumber": {
					"regex": /^[0-9a-zA-Z]+$/,
					"alertText": "* Không được chứa ký tự đặc biệt"
				},
				"ajaxUserCall": {
					"url": "ajaxValidateFieldUser",
					"extraData": "name=eric",
					"alertText": "* Tên này được dùng",
					"alertTextLoad": "* Đang xác nhận, vui lòng chờ"
				},
				"ajaxUserCallPhp": {
					"url": "phpajax/ajaxValidateFieldUser.php",
					"extraData": "name=eric",
					"alertTextOk": "* Tên người dùng này có thể dùng được",
					"alertText": "* Tên người dùng này đã được sử dụng",
					"alertTextLoad": "* Đang xác nhận, vui lòng chờ"
				},
				"ajaxNameCall": {
					"url": "ajaxValidateFieldName",
					"alertText": "* Tên này được dùng",
					"alertTextOk": "* Tên này có thể dùng",
					"alertTextLoad": "* Đang xác nhận, vui lòng chờ"
				},
				"ajaxNameCallPhp": {
					"url": "phpajax/ajaxValidateFieldName.php",
					"alertText": "* Tên này được dùng",
					"alertTextLoad": "* Đang xác nhận, vui lòng chờ"
				},
				"validate2fields": {
					"alertText": "* Vui lòng nhập vào HELLO"
				},
				"dateFormat": {
					"regex": /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$|^(?:(?:(?:0?[13578]|1[02])(\/|-)31)|(?:(?:0?[1,3-9]|1[0-2])(\/|-)(?:29|30)))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(?:(?:0?[1-9]|1[0-2])(\/|-)(?:0?[1-9]|1\d|2[0-8]))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(0?2(\/|-)29)(\/|-)(?:(?:0[48]00|[13579][26]00|[2468][048]00)|(?:\d\d)?(?:0[48]|[2468][048]|[13579][26]))$/,
					"alertText": "* Ngày sai"
				},
				"dateTimeFormat": {
					"regex": /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])\s+(1[012]|0?[1-9]){1}:(0?[1-5]|[0-6][0-9]){1}:(0?[0-6]|[0-6][0-9]){1}\s+(am|pm|AM|PM){1}$|^(?:(?:(?:0?[13578]|1[02])(\/|-)31)|(?:(?:0?[1,3-9]|1[0-2])(\/|-)(?:29|30)))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^((1[012]|0?[1-9]){1}\/(0?[1-9]|[12][0-9]|3[01]){1}\/\d{2,4}\s+(1[012]|0?[1-9]){1}:(0?[1-5]|[0-6][0-9]){1}:(0?[0-6]|[0-6][0-9]){1}\s+(am|pm|AM|PM){1})$/,
					"alertText": "* Ngày sai hoặc định dạng ngày sai",
					"alertText2": "Định dạng đúng là: ",
					"alertText3": "mm/dd/yyyy hh:mm:ss AM|PM hay ",
					"alertText4": "yyyy-mm-dd hh:mm:ss AM|PM"
				}
			};
		}
	};
	$.validationEngineLanguage.newLang();
})(jQuery);;

function inIframe() {
	try {
		return window.self !== window.top;
	} catch (e) {
		return true;
	}
}

function addToCart(products, mode, callback) {
	$.ajax({
		type: 'POST',
		url: '/cart/add',
		data: {
			'products': products,
			'mode': mode
		},
		timeout: 500,
		success: function(rs) {
			callback(rs);
		}
	});
}

function addToBook(products, mode, callback) {
	$.ajax({
		type: 'POST',
		url: '/cart/addbook',
		data: {
			'products': products,
			'mode': mode
		},
		timeout: 500,
		success: function(rs) {
			callback(rs);
		}
	});
}

function addToBaseCart(options) {
	$.post('/carts/add', {
		'products': options.products,
		'mode': options.mode
	}, function(rs) {
		options.onSuccess(rs);
	}, 'json');
}

function flyfly(options) {
	var position = options.position,
		itemDrag = options.iDrag,
		effect = options.effect;
	if (!effect) {
		effect = 'easeOutExpo';
	}
	if (itemDrag && position) {
		var itemClone = itemDrag.clone().offset({
			top: itemDrag.offset().top,
			left: itemDrag.offset().left
		}).css({
			'opacity': '0.5',
			'position': 'absolute',
			'height': itemDrag.width(),
			'width': itemDrag.height(),
			'z-index': '999'
		}).appendTo($('body')).animate({
			'top': position.offset().top + 5,
			'left': position.offset().left + 5,
			'width': position.width() - 10,
			'height': position.height() - 10
		}, 1000, effect);
		itemClone.animate({
			'width': 0,
			'height': 0
		}, function() {
			$(this).detach();
		});
	}
}

function removeCart(id, redirect, callback) {
	if (!id) {
		$.post('/cart/remove', function(rs) {
			if (redirect) {
				window.location.reload();
			}
			callback(rs);
		}, 'json');
	} else {
		$.post('/cart/remove', {
			'psId': id
		}, function(rs) {
			if (redirect) {
				window.location.reload();
			}
			callback(rs);
		}, 'json');
	}
}

function removeBook(id, redirect, callback) {
	if (!id) {
		$.post('/cart/removebook', function(rs) {
			if (redirect) {
				window.location.reload();
			}
			callback(rs);
		}, 'json');
	} else {
		$.post('/cart/removebook', {
			'psId': id
		}, function(rs) {
			if (redirect) {
				window.location.reload();
			}
			callback(rs);
		}, 'json');
	}
}

function removeBaseCart(options) {
	if (!options.id) {
		$.post('/carts/remove', function(rs) {
			if (options.redirect) {
				document.location.href = document.URL;
			}
			options.onSuccess(rs);
		}, 'json');
	} else {
		$.post('/carts/remove', {
			'psId': options.id
		}, function(rs) {
			if (options.redirect) {
				document.location.href = document.URL;
			}
			options.onSuccess(rs);
		}, 'json');
	}
}

function calculateShipFee(options) {
	$.post('/order/caculateshipfee', {
		'toCity': options.toCity,
		'toDistrict': options.toDistrict
	}, function(rs) {
		options.onSuccess(rs);
	}, 'json');
}

function addFilter(param, value, mode) {
	var path = window.location.pathname,
		pr = window.location.search,
		params = {};
	parse_str(pr.replace('?', ''), params);
	if (isset(params[param]) && params[param] && mode == 1) {
		var values = explode(',', params[param]);
		if (!in_array(value, values)) {
			values.push(value);
			params[param] = implode(',', values);
		}
	} else if (value.length) {
		params[param] = value;
	}
	$.each(params, function(pKey, pVal) {
		params[pKey] = pKey + '=' + pVal;
	});
	if (mode == 3) {
		return path + '?' + implode('&', params);
	}
	window.history.pushState(null, null, path + '?' + implode('&', params));
}

function removeFilter(param, value) {
	var path = window.location.pathname,
		pr = window.location.search,
		params = {};
	parse_str(pr.replace('?', ''), params);
	if (isset(params[param]) && params[param]) {
		var values = explode(',', params[param]);
		if (isset(value)) {
			if (in_array(value, values)) {
				params[param] = implode(',', array_diff(values, [value]));
			}
		} else {
			delete params[param];
		}
	} else if (value.length) {
		params[param] = value;
	}
	$.each(params, function(pKey, pVal) {
		if (pVal) {
			params[pKey] = pKey + '=' + pVal;
		} else {
			delete params[pKey];
		}
	});
	window.history.pushState(null, null, path + '?' + implode('&', params));
}

function checkInventory(ps, callback) {
	$.post('/product/checkinventory', {
		'ps': ps
	}, function(rs) {
		callback(rs);
	}, 'json');
}

function getallchildimg(ps, callback) {
	$.post('/product/getallchildimg', {
		'ps': ps
	}, function(rs) {
		callback(rs);
	}, 'json');
}

function buyProductNumber(options) {
	$.post('/product/totalcustomerbuyproduct', {
		'productIds': options.productIds
	}, function(rs) {
		options.onSuccess(rs);
	}, 'json');
}

function getBrandTags(ps, callback) {
	$.post('/product/getbrandtag', {
		'ps': ps
	}, function(rs) {
		callback(rs);
	}, 'json');
}

function loadView(viewName, data, delay, callback) {
	if (!data) {
		data = '';
	}
	delay = parseInt(delay);
	if (delay > 0) {
		setTimeout(function() {
			$.post('/loadview?v=' + viewName, {
				'variable': data
			}, function(rs) {
				callback(rs);
			});
		}, delay);
	} else {
		$.post('/loadview?v=' + viewName, {
			'variable': data
		}, function(rs) {
			callback(rs);
		});
	}
}

function ajaxLoadView(options) {
	if (!options.data) {
		options.data = '';
	}
	if (!options.delay) {
		options.delay = 0;
	} else {
		options.delay = parseInt(options.delay);
	}
	if (!options.params) {
		options.params = '';
	}
	setTimeout(function() {
		$.post('/loadview?v=' + options.view + options.params, {
			'variable': options.data
		}, function(rs) {
			options.onSuccess(rs);
		});
	}, options.delay);
}
var visits = {
	trackingAction: function(element) {
		element.click(function(e) {
			e.stopPropagation();
			var t = $(this),
				page = '',
				item = '',
				section = '',
				element = '',
				type = '';
			if (t.attr('data-t-page')) {
				page = t.attr('data-t-page');
			}
			if (t.attr('data-t-i')) {
				item = t.attr('data-t-i');
			}
			if (t.attr('data-t-sec')) {
				section = t.attr('data-t-sec');
			}
			if (t.attr('data-t-uie')) {
				element = t.attr('data-t-uie');
			}
			if (t.attr('data-t-type')) {
				type = t.attr('data-t-type');
			}
			if (type == 'ac') {} else {
				setCookie('tracking', '{"page":"' + page + '","item":"' + item + '","section":"' + section + '","element":"' + element + '"}', 0);
			}
		});
	}
};
var Address = {
	load: function(cId, dId) {
		var c = cId ? cId : '#cityId';
		var d = dId ? dId : '#districtId';
		$(c).change(function() {
			if ($(this).val() && $(d).length) {
				Address.getDistricts($(this).val(), d);
			}
		});
	},
	getCities: function(cId) {
		var c = cId ? cId : '#cityId';
		$.post('/address/address/loadcities', {}, function(rp) {
			Address.updateDistrict(cId, rp, 0);
		}, 'json');
	},
	getDistricts: function(cid, dId, sel) {
		$.post('/address/district/load?cityId=' + cid, {}, function(rp) {
			Address.updateDistrict(dId, rp, sel);
		}, 'json');
	},
	updateDistrict: function(id, d, sel) {
		if ($(id).length) {
			var options = "";
			for (var i in d) {
				if (sel == i) {
					options += "<option selected value='" + i + "'>" + d[i] + "</option>";
				} else {
					options += "<option value='" + i + "'>" + d[i] + "</option>";
				}
			}
			if (!$(id).find('option:first').val()) {
				options = "<option value=''>" + $(id).find('option:first').text() + "</option>" + options;
			}
			$(id).html(options);
		}
	}
};

function setCookie(name, value, time, path) {
	var expires;
	if (time && time > 0) {
		var date = new Date();
		date.setTime(date.getTime() + (parseInt(time) * 1000));
		expires = "; expires=" + date.toGMTString();
	} else {
		expires = "";
	}
	if (!path) {
		path = 'index.html';
	}
	document.cookie = escape(name) + "=" + escape(value) + expires + "; path=" + path;
}

function getCookie(name) {
	var nameEQ = escape(name) + "=";
	var ca = document.cookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) === ' ') c = c.substring(1, c.length);
		if (c.indexOf(nameEQ) === 0) return unescape(c.substring(nameEQ.length, c.length));
	}
	return null;
}

function parse_str(str, array) {
	var strArr = String(str).replace(/^&/, '').replace(/&$/, '').split('&'),
		sal = strArr.length,
		i, j, ct, p, lastObj, obj, lastIter, undef, chr, tmp, key, value, postLeftBracketPos, keys, keysLen, fixStr = function(str) {
			return decodeURIComponent(str.replace(/\+/g, '%20'));
		};
	if (!array) {
		array = this.window;
	}
	for (i = 0; i < sal; i++) {
		tmp = strArr[i].split('=');
		key = fixStr(tmp[0]);
		value = (tmp.length < 2) ? '' : fixStr(tmp[1]);
		while (key.charAt(0) === ' ') {
			key = key.slice(1);
		}
		if (key.indexOf('\x00') > -1) {
			key = key.slice(0, key.indexOf('\x00'));
		}
		if (key && key.charAt(0) !== '[') {
			keys = [];
			postLeftBracketPos = 0;
			for (j = 0; j < key.length; j++) {
				if (key.charAt(j) === '[' && !postLeftBracketPos) {
					postLeftBracketPos = j + 1;
				} else if (key.charAt(j) === ']') {
					if (postLeftBracketPos) {
						if (!keys.length) {
							keys.push(key.slice(0, postLeftBracketPos - 1));
						}
						keys.push(key.substr(postLeftBracketPos, j - postLeftBracketPos));
						postLeftBracketPos = 0;
						if (key.charAt(j + 1) !== '[') {
							break;
						}
					}
				}
			}
			if (!keys.length) {
				keys = [key];
			}
			for (j = 0; j < keys[0].length; j++) {
				chr = keys[0].charAt(j);
				if (chr === ' ' || chr === '.' || chr === '[') {
					keys[0] = keys[0].substr(0, j) + '_' + keys[0].substr(j + 1);
				}
				if (chr === '[') {
					break;
				}
			}
			obj = array;
			for (j = 0, keysLen = keys.length; j < keysLen; j++) {
				key = keys[j].replace(/^['"]/, '').replace(/['"]$/, '');
				lastIter = j !== keys.length - 1;
				lastObj = obj;
				if ((key !== '' && key !== ' ') || j === 0) {
					if (obj[key] === undef) {
						obj[key] = {};
					}
					obj = obj[key];
				} else {
					ct = -1;
					for (p in obj) {
						if (obj.hasOwnProperty(p)) {
							if (+p > ct && p.match(/^\d+$/g)) {
								ct = +p;
							}
						}
					}
					key = ct + 1;
				}
			}
			lastObj[key] = value;
		}
	}
}

function isset() {
	var a = arguments,
		l = a.length,
		i = 0,
		undef;
	if (l === 0) {
		throw new Error('Empty isset');
	}
	while (i !== l) {
		if (a[i] === undef || a[i] === null) {
			return false;
		}
		i++;
	}
	return true;
}

function explode(delimiter, string, limit) {
	if (arguments.length < 2 || typeof delimiter === 'undefined' || typeof string === 'undefined') return null;
	if (delimiter === '' || delimiter === false || delimiter === null) return false;
	if (typeof delimiter === 'function' || typeof delimiter === 'object' || typeof string === 'function' || typeof string === 'object') {
		return {
			0: ''
		};
	}
	if (delimiter === true) delimiter = '1';
	delimiter += '';
	string += '';
	var s = string.split(delimiter);
	if (typeof limit === 'undefined') return s;
	if (limit === 0) limit = 1;
	if (limit > 0) {
		if (limit >= s.length) return s;
		return s.slice(0, limit - 1).concat([s.slice(limit - 1).join(delimiter)]);
	}
	if (-limit >= s.length) return [];
	s.splice(s.length + limit);
	return s;
}

function implode(glue, pieces) {
	var i = '',
		retVal = '',
		tGlue = '';
	if (arguments.length === 1) {
		pieces = glue;
		glue = '';
	}
	if (typeof pieces === 'object') {
		if (Object.prototype.toString.call(pieces) === '[object Array]') {
			return pieces.join(glue);
		}
		for (i in pieces) {
			retVal += tGlue + pieces[i];
			tGlue = glue;
		}
		return retVal;
	}
	return pieces;
}

function in_array(needle, haystack, argStrict) {
	var key = '',
		strict = !!argStrict;
	if (strict) {
		for (key in haystack) {
			if (haystack[key] === needle) {
				return true;
			}
		}
	} else {
		for (key in haystack) {
			if (haystack[key] == needle) {
				return true;
			}
		}
	}
	return false;
}

function array_diff(arr1) {
	var retArr = {},
		argl = arguments.length,
		k1 = '',
		i = 1,
		k = '',
		arr = {};
	arr1keys: for (k1 in arr1) {
		for (i = 1; i < argl; i++) {
			arr = arguments[i];
			for (k in arr) {
				if (arr[k] === arr1[k1]) {
					continue arr1keys;
				}
			}
			retArr[k1] = arr1[k1];
		}
	}
	return retArr;
}

function json_encode(mixed_val) {
	var retVal, json = this.window.JSON;
	try {
		if (typeof json === 'object' && typeof json.stringify === 'function') {
			retVal = json.stringify(mixed_val);
			if (retVal === undefined) {
				throw new SyntaxError('json_encode');
			}
			return retVal;
		}
		var value = mixed_val;
		var quote = function(string) {
			var escapable = /[\\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
			var meta = {
				'\b': '\\b',
				'\t': '\\t',
				'\n': '\\n',
				'\f': '\\f',
				'\r': '\\r',
				'"': '\\"',
				'\\': '\\\\'
			};
			escapable.lastIndex = 0;
			return escapable.test(string) ? '"' + string.replace(escapable, function(a) {
				var c = meta[a];
				return typeof c === 'string' ? c : '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
			}) + '"' : '"' + string + '"';
		};
		var str = function(key, holder) {
			var gap = '';
			var indent = '    ';
			var i = 0;
			var k = '';
			var v = '';
			var length = 0;
			var mind = gap;
			var partial = [];
			var value = holder[key];
			if (value && typeof value === 'object' && typeof value.toJSON === 'function') {
				value = value.toJSON(key);
			}
			switch (typeof value) {
				case 'string':
					return quote(value);
				case 'number':
					return isFinite(value) ? String(value) : 'null';
				case 'boolean':
				case 'null':
					return String(value);
				case 'object':
					if (!value) {
						return 'null';
					}
					if ((this.PHPJS_Resource && value instanceof this.PHPJS_Resource) || (window.PHPJS_Resource && value instanceof window.PHPJS_Resource)) {
						throw new SyntaxError('json_encode');
					}
					gap += indent;
					partial = [];
					if (Object.prototype.toString.apply(value) === '[object Array]') {
						length = value.length;
						for (i = 0; i < length; i += 1) {
							partial[i] = str(i, value) || 'null';
						}
						v = partial.length === 0 ? '[]' : gap ? '[\n' + gap + partial.join(',\n' + gap) + '\n' + mind + ']' : '[' + partial.join(',') + ']';
						gap = mind;
						return v;
					}
					for (k in value) {
						if (Object.hasOwnProperty.call(value, k)) {
							v = str(k, value);
							if (v) {
								partial.push(quote(k) + (gap ? ': ' : ':') + v);
							}
						}
					}
					v = partial.length === 0 ? '{}' : gap ? '{\n' + gap + partial.join(',\n' + gap) + '\n' + mind + '}' : '{' + partial.join(',') + '}';
					gap = mind;
					return v;
				case 'undefined':
				case 'function':
				default:
					throw new SyntaxError('json_encode');
			}
		};
		return str('', {
			'': value
		});
	} catch (err) {
		if (!(err instanceof SyntaxError)) {
			throw new Error('Unexpected error type in json_encode()');
		}
		this.php_js = this.php_js || {};
		this.php_js.last_error_json = 4;
		return null;
	}
}

function json_decode(str_json) {
	var json = this.window.JSON;
	if (typeof json === 'object' && typeof json.parse === 'function') {
		try {
			return json.parse(str_json);
		} catch (err) {
			if (!(err instanceof SyntaxError)) {
				throw new Error('Unexpected error type in json_decode()');
			}
			this.php_js = this.php_js || {};
			this.php_js.last_error_json = 4;
			return null;
		}
	}
	var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
	var j;
	var text = str_json;
	cx.lastIndex = 0;
	if (cx.test(text)) {
		text = text.replace(cx, function(a) {
			return '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
		});
	}
	if ((/^[\],:{}\s]*$/).test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {
		j = eval('(' + text + ')');
		return j;
	}
	this.php_js = this.php_js || {};
	this.php_js.last_error_json = 4;
	return null;
}

function base64_decode(data) {
	var b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
	var o1, o2, o3, h1, h2, h3, h4, bits, i = 0,
		ac = 0,
		dec = '',
		tmp_arr = [];
	if (!data) {
		return data;
	}
	data += '';
	do {
		h1 = b64.indexOf(data.charAt(i++));
		h2 = b64.indexOf(data.charAt(i++));
		h3 = b64.indexOf(data.charAt(i++));
		h4 = b64.indexOf(data.charAt(i++));
		bits = h1 << 18 | h2 << 12 | h3 << 6 | h4;
		o1 = bits >> 16 & 0xff;
		o2 = bits >> 8 & 0xff;
		o3 = bits & 0xff;
		if (h3 == 64) {
			tmp_arr[ac++] = String.fromCharCode(o1);
		} else if (h4 == 64) {
			tmp_arr[ac++] = String.fromCharCode(o1, o2);
		} else {
			tmp_arr[ac++] = String.fromCharCode(o1, o2, o3);
		}
	} while (i < data.length);
	dec = tmp_arr.join('');
	return dec.replace(/\0+$/, '');
}

function base64_encode(data) {
	var b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
	var o1, o2, o3, h1, h2, h3, h4, bits, i = 0,
		ac = 0,
		enc = '',
		tmp_arr = [];
	if (!data) {
		return data;
	}
	do {
		o1 = data.charCodeAt(i++);
		o2 = data.charCodeAt(i++);
		o3 = data.charCodeAt(i++);
		bits = o1 << 16 | o2 << 8 | o3;
		h1 = bits >> 18 & 0x3f;
		h2 = bits >> 12 & 0x3f;
		h3 = bits >> 6 & 0x3f;
		h4 = bits & 0x3f;
		tmp_arr[ac++] = b64.charAt(h1) + b64.charAt(h2) + b64.charAt(h3) + b64.charAt(h4);
	} while (i < data.length);
	enc = tmp_arr.join('');
	var r = data.length % 3;
	return (r ? enc.slice(0, r - 3) : enc) + '==='.slice(r || 3);
};
$(function() {
	Address.load('#cityId', '#districtId');
	$('.btn-quickview').click(function(event) {
		event.preventDefault();
		quickview($(this).attr('rel'));
	});
	$("#ct-news table").wrap("<div class='table-responsive'></div>");
	$('.addCart').click(function() {
		var msg = $('#dMsg');
		var products = [],
			ps = {};
		ps['id'] = parseInt($(this).attr('selId'));
		ps['quantity'] = 1;
		products.push(ps);
		addToCart(products, 1, function(rs) {
			if (rs.status == 1) {
				window.location.href = '/cart';
			} else {
				msg.html(rs.messages);
				msg.dialog({
					title: msgDialog,
					modal: true,
					show: 'scale',
					buttons: [{
						text: "Ok",
						click: function() {
							$(this).dialog("close");
						}
					}]
				});
			}
		});
	});
	if ($('#popupHome.cookie').length) {
		$.fancybox({
			fitToView: false,
			content: $('#popupHome'),
			padding: 0,
			autoSize: true,
		});
	}
	$('#showPopup').fancybox({
		fitToView: false,
		padding: 0,
		content: $('#popupHome'),
		autoSize: true,
	});
	$(".pagination .links").find(".paging-next").addClass('fa fa-forward');
	$(".pagination .links").find(".paging-last").addClass('fa fa-fast-forward');
	$(".pagination .links").find(".paging-first").addClass('fa fa-fast-backward');
	$(".pagination .links").find(".paging-previous").addClass('fa fa-backward');
	$('.btnSubscribe').click(function(e) {
		e.preventDefault();
		$.post('/newsletter/subscribe', {
			'mail': $('#subscribe').val()
		}, function(rs) {
			if (rs.code) {
				$('#subscribe').val('');
			}
			alert(rs.message);
		});
	});
	$("#pav-categorymenu ul").addClass("box-category list");
	$("#pav-categorymenu li.active span.head").addClass("selected");
	if ($('#pav-categorymenu').attr('storeId') != '6594') {
		$('#pav-categorymenu ul').Accordion({
			active: 'span.selected',
			header: 'span.head',
			alwaysOpen: false,
			animated: true,
			showSpeed: 400,
			hideSpeed: 800,
			event: 'click'
		});
	}
	$('.setFav').click(function() {
		var url = '/wishlist/add?psId=' + $(this).attr('rel');
		$.post(url, function(rs) {
			if (rs.code == 1) {
				alert(rs.message);
			} else {
				alert(rs.message);
			}
		}, 'json');
	});
	$('.removeFav').click(function(e) {
		e.preventDefault();
		if (confirm(msgRemoveCartItem + ' ?') == true) {
			$.post('/wishlist/remove?psId=' + $(this).attr('data-id'), function(rs) {
				if (rs.code == 1) {
					document.location.href = '/wishlist/view';
				} else {
					alert(rs.message);
				}
			}, 'json');
		}
	});
	$('.crBrand').carouFredSel({
		responsive: true,
		width: 145,
		items: 10,
		scroll: {
			items: 1,
			duration: 500
		},
		auto: true,
		prev: "#prev",
		next: "#next"
	});
	$('.slideBnct21').carouFredSel({
		height: 165,
		responsive: true,
		direction: "right",
		items: {
			visible: 1,
			width: 366,
			height: 165
		},
		scroll: {
			items: 1,
			duration: 2000
		},
		auto: {
			timeoutDuration: 4000
		}
	});
	$('.slideBnct22').carouFredSel({
		responsive: true,
		width: '100%',
		scroll: {
			fx: 'crossfade',
		},
		pagination: ".btslide",
		auto: {
			timeoutDuration: 6000,
			pauseOnHover: 'resume',
		}
	});
	$('.slideproduct').carouFredSel({

		responsive: true,
		direction: "right",
		items: {
			visible: 4,
		},
		scroll: {
			items: 1,
			duration: 2000
		},
		auto: {
			timeoutDuration: 4000,
			pauseOnHover: 'resume',
		},
		prev: "#prev",
		next: "#next"
	
	});
	var store = $('.storeId').val();
	if (store == 7491) {
		var ps = [];
		$('.inventory').each(function() {
			var t = $(this);
			ps.push({
				storeId: t.attr('data-storeId'),
				id: t.attr('id')
			});
		});
		if (ps.length) {
			checkInventory(ps, function(rs) {
				if (rs.inventories != "") {
					console.log(rs.inventories);
					$.each(rs.inventories, function(key, vl) {
						console.log(key, vl);
						if (vl <= 0) {
							$('#' + key + '.inventory').html("Hàng nhận Order");
						} else {
							$('#' + key + '.inventory').html('Còn hàng');
						}
					});
				}
			});
		}
		$('.slideBnct23').carouFredSel({
			responsive: true,
			width: '100%',
			items: {
				visible: 1,
				height: 250
			},
			scroll: {
				fx: 'crossfade'
			},
			pagination: ".btslide",
			auto: {
				timeoutDuration: 5000
			}
		});
	}
	$('#toggleMenuLnk').click(function() {
		$('#menu').toggle('fast');
	});
	$('.slideBnct2').carouFredSel({
		height: 335,
		responsive: true,
		items: {
			visible: 1,
			width: 366,
			height: 355
		},
		scroll: {
			items: 1,
			duration: 2000
		},
		auto: {
			timeoutDuration: 3000
		}
	});
	$('.slide1').carouFredSel({
		height: 500,
		width: 750,
		responsive: true,
		items: 1,
		scroll: {
			items: 1,
			duration: 1000
		},
		auto: {
			timeoutDuration: 5000
		},
		prev: "#prevSlide",
		next: "#nextSlide",
		pagination: ".pgSlideImg"
	});
	$('.slideBnhd').carouFredSel({
		width: '100%',
		height: 90,
		items: 1,
		direction: "up",
		scroll: {
			items: 1,
			duration: 3000
		},
		auto: {
			timeoutDuration: 4000
		}
	});
	$('.delOrderBtn').click(function(e) {
		e.preventDefault();
		var msg = $('#dMsg');
		msg.html('<p>' + msgCancelOrder + ' ?</p>');
		msg.dialog({
			title: msgDialog,
			modal: true,
			show: 'scale',
			buttons: [{
				text: "Ok",
				click: function() {
					$.post('/orders/cancel', {
						id: $('.delOrderBtn').attr('data-id')
					}, function(rs) {
						window.location.reload();
					}, 'json');
				}
			}, {
				text: "Cancel",
				click: function() {
					$(this).dialog("close");
				}
			}]
		});
	});
	$('#tabs a').tabs();
	$(window).scroll(function() {
		if ($(this).scrollTop() != 0) {
			$('#btTop').fadeIn();
		} else {
			$('#btTop').fadeOut();
		}
	});
	$('#btTop').click(function() {
		$('body,html').animate({
			scrollTop: 0
		}, 800);
	});
});

function quickview(id) {
	$.post('/product/q' + id, function(rs) {
		$.fancybox({
			content: rs,
			padding: [20, 55, 20, 55],
			fitToView: false,
			wrapCSS: 'fancybox-qv',
			helpers: {
				overlay: {
					css: {
						'background': 'rgba(158, 158, 158, 0.5)'
					}
				}
			},
			afterShow: function() {
				$('#qvImg').carouFredSel({
					items: 1,
					scroll: {
						items: 1,
						duration: 400
					},
					auto: false,
					prev: "#prevQv",
					next: "#nextQv"
				});
				$.getScript('/tp/T0101/js/common1.js');
				$.getScript('/tp/T0101/js/proview.js');
			}
		});
	});
}

function display(view) {
	if (view == 'list') {
		$('.product-grid').attr('class', 'product-list');
		$('.products-block .product-block').each(function(index, element) {
			$(element).parent().addClass("col-fullwidth");
		});
		$('.display').html('<span style="float: left; line-height: 33px; margin-right: 10px;">Display:</span><a class="list active"><span class="glyphicon glyphicon-align-justify"></span><em>List</em></a><a class="grid"  onclick="display(\'grid\');"><span class="glyphicon glyphicon-th"></span><em>Grid</em></a>');
	} else {
		$('.product-list').attr('class', 'product-grid');
		$('.products-block  .product-block').each(function(index, element) {
			$(element).parent().removeClass("col-fullwidth");
		});
		$('.display').html('<span style="float: left; line-height: 33px; margin-right: 10px;">Display:</span><a class="list" onclick="display(\'list\');"><span class="glyphicon glyphicon-align-justify"></span><em>List</em></a><a class="grid active"><span class="glyphicon glyphicon-th"></span><em>Grid</em></a>');
	}
}
$(document).ready(function() {
	$('.list li ul').hide().removeClass('list1');
	if ($('#pav-categorymenu').attr('storeId') != '6594') {
		$(".list li").hover(function() {
			$('ul', this).stop().slideDown(200);
		}, function() {
			$('ul', this).stop().slideUp(700);
		});
	} else {
		$('ul.pav-category > li > a').click(function() {
			$('ul.pav-category li').removeClass('active');
			$(this).closest('li').addClass('active');
			var checkElement = $(this).next().next();
			if ((checkElement.is('ul')) && (checkElement.is(':visible'))) {
				$(this).closest('li').removeClass('active');
				checkElement.slideUp('normal');
			}
			if ((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
				$('ul.pav-category ul:visible').slideUp('normal');
				checkElement.slideDown('normal');
			}
			if ($(this).closest('li').find('ul').children().length == 0) {
				return true;
			} else {
				return false;
			}
		});
	}
});;
var SidebarMenuEffects = (function() {
	function hasParentClass(e, classname) {
		if (e === document) return false;
		if (classie.has(e, classname)) {
			return true;
		}
		return e.parentNode && hasParentClass(e.parentNode, classname);
	}

	function mobilecheck() {
		var check = false;
		(function(a) {
			if (/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true
		})(navigator.userAgent || navigator.vendor || window.opera);
		return check;
	}

	function init() {
		$(document).ready(function() {
			var $mcontent = $('#pav-mainnav .navbar .navbar-nav');
			var $btn = $("#pav-mainnav .navbar-toggle");
			var effect = 5;
			var $offcmenu = $('<nav id="menu-offcanvas" class="offcanvas-menu offcanvas-effect-' + effect + ' hidden-lg"><div class="menu-offcanvas-inner"></div></nav>');
			$(".menu-offcanvas-inner", $offcmenu).append($mcontent.clone());
			$("body").append($offcmenu);
			$(".navbar-nav", $offcmenu).removeClass("navbar-nav").removeClass("nav").addClass("menu-offcanvas-content");
			var eventtype = mobilecheck() ? 'touchstart' : 'click';
			$($btn).bind(eventtype, function(e) {
				$("#offcanvas-container").toggleClass("offcanvas-menu-open").addClass("offcanvas-effect-" + effect);
				$("#page").bind(eventtype, function() {
					$("#offcanvas-container").toggleClass("offcanvas-menu-open");
					$("#page").unbind(eventtype);
				});
				e.stopPropagation();
				return false;
			});
		});
	}
	init();
})();
$(document).ready(function() {
	if ($("#columns").hasClass("offcanvas-siderbars")) {
		$('.offcanvas-sidebars-buttons button').hide();
		$(".sidebar").parent().parent().find("section").addClass("main-column");
		$(".sidebar").each(function() {
			$('[data-for="' + $(this).attr("id") + '"]').show();
			$(this).parent().attr("id", "oc-" + $(this).attr("id")).addClass("offcanvas-sidebar");
		});
		$(".offcanvas-sidebars-buttons button").bind("click", function() {
			if ($(this).data("for") == "column-right") {
				$(".offcanvas-siderbars").removeClass("column-left-active");
			} else {
				$(".offcanvas-siderbars").removeClass("column-right-active");
			}
			$(".offcanvas-siderbars").toggleClass($(this).data("for") + "-active");
			$("#oc-" + $(this).data("for")).toggleClass("canvas-show");
		});
	}
});
$(window).ready(function() {
	$(document.body).on('click', '#pav-mainnav [data-toggle="dropdown"], #menu-offcanvas [data-toggle="dropdown"]', function() {
		if (!$(this).parent().hasClass('open') && this.href && this.href != '#') {
			window.location.href = this.href;
		}
	});
	$('[data-toggle="tooltip"]').tooltip();
	$(".quantity-adder .add-action").click(function() {
		if ($(this).hasClass('add-up')) {
			$("[name=quantity]", '.quantity-adder').val(parseInt($("[name=quantity]", '.quantity-adder').val()) + 1);
		} else {
			if (parseInt($("[name=quantity]", '.quantity-adder').val()) > 1) {
				$("input", '.quantity-adder').val(parseInt($("[name=quantity]", '.quantity-adder').val()) - 1);
			}
		}
	});
	$("#image-additional a").click(function(e) {
		$("#image").parent('a').attr('href', $(this).data('zoom-image'));
		e.preventDefault();
	});
});
$(document).ready(function() {});
