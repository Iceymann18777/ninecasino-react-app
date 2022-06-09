if (window.___jsObject && !window.___hasInjected/* && (window.location ? window.location.href : '') !== 'about:blank'*/) {
  (function (frameId) {
    let isPure = !0, upperTag = function (e) {
      return 1 === e.nodeType ? e.tagName.toUpperCase() : "HS-NODE"
    };
    try {
      const findElementsInfo = function (e) {
        var t = $JSON.stringify(e, (e, t) => "function" == typeof t ? t.toString() : t), n = elementCache[t];
        return null == n && (n = findElementsInfoNoCache(e), elementCache[t] = n), n
      };
      let $from;
      window.___hasInjected = !0, window.___injectVersion = "1.48", function () {
        const e = Array.from;
        $from = function () {
          return e.apply(Array, arguments)
        }
      }(), window.close = function () {
      };
      const $JSON = {parse: JSON.parse, stringify: void 0};
      window.___$JSON = $JSON, function () {
        "use strict";
        let e, t, n, i,
          r = /[\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;

        function o(e) {
          return r.lastIndex = 0, r.test(e) ? '"' + e.replace(r, function (e) {
            const t = n[e];
            return "string" == typeof t ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
          }) + '"' : '"' + e + '"'
        }

        n = {
          "\b": "\\b",
          "\t": "\\t",
          "\n": "\\n",
          "\f": "\\f",
          "\r": "\\r",
          '"': '\\"',
          "\\": "\\\\"
        }, $JSON.stringify = function (n, r, a) {
          let s;
          if (e = "", t = "", "number" == typeof a) for (s = 0; s < a; s += 1) t += " "; else "string" == typeof a && (t = a);
          if (i = r, r && "function" != typeof r && ("object" != typeof r || "number" != typeof r.length)) throw new Error("JSON.stringify");
          return function n(r, a) {
            let s, d, l, c, u, f = e, _ = a[r];
            switch ("function" == typeof i && (_ = i.call(a, r, _)), typeof _) {
              case"string":
                return o(_);
              case"number":
                return isFinite(_) ? String(_) : "null";
              case"boolean":
                return String(_);
              case"object":
                if (!_) return "null";
                if (e += t, u = [], "[object Array]" === Object.prototype.toString.apply(_)) {
                  for (c = _.length, s = 0; s < c; s += 1) u[s] = n(s, _) || "null";
                  return l = 0 === u.length ? "[]" : e ? "[\n" + e + u.join(",\n" + e) + "\n" + f + "]" : "[" + u.join(",") + "]", e = f, l
                }
                if (i && "object" == typeof i) for (c = i.length, s = 0; s < c; s += 1) "string" == typeof i[s] && (l = n(d = i[s], _)) && u.push(o(d) + (e ? ": " : ":") + l); else for (d in _) Object.prototype.hasOwnProperty.call(_, d) && (l = n(d, _)) && u.push(o(d) + (e ? ": " : ":") + l);
                return l = 0 === u.length ? "{}" : e ? "{\n" + e + u.join(",\n" + e) + "\n" + f + "}" : "{" + u.join(",") + "}", e = f, l
            }
          }("", {"": n})
        }
      }();

      class e {
        static stringify(e) {
          return $JSON.stringify(e)
        }

        static parse(e) {
          return $JSON.parse(e)
        }
      }

      const select = function* (e, t) {
        for (let n of e) yield t(n)
      };
      !function () {
        const e = window.XMLHttpRequest.prototype.open, t = window.XMLHttpRequest.prototype.send;
        window.XMLHttpRequest.prototype.open = function () {
          return this.___async = !(arguments.length > 2) || arguments[2], this.___url = arguments[1], e.apply(this, arguments)
        }, window.XMLHttpRequest.prototype.send = function () {
          if (this.___async) {
            const e = arguments;
            ___jsObject.needsAdvance();
            let n = ___jsObject.preventIdle(0, "Request: " + this.___url);
            this.addEventListener("loadend", function () {
              ___jsObject.allowIdle(n)
            }), t.apply(this, e)
          } else t.apply(this, arguments)
        }
      }();
      const oldFetch = window.fetch;
      window.fetch = async function () {
        let e = null;
        try {
          return e = ___jsObject.preventIdle(0, "Fetch"), await oldFetch.apply(this, arguments)
        } finally {
          null !== e && ___jsObject.allowIdle(e)
        }
      }, function () {
        function e(e) {
          const t = ___jsObject.preventIdle(0, "Waiting for element to load: " + e.tagName);
          let n = function () {
            e.removeEventListener("load", n), e.removeEventListener("error", n), ___jsObject.allowIdle(t)
          };
          e.addEventListener("load", n), e.addEventListener("error", n)
        }

        const t = Object.getOwnPropertyDescriptor(HTMLScriptElement.prototype, "src");
        Object.defineProperty(HTMLScriptElement.prototype, "src", {
          get: function () {
            return t.get.call(this)
          }, set: function (n) {
            n && document.contains(this) && e(this), t.set.call(this, n)
          }
        });
        const n = Node.prototype.appendChild;
        Node.prototype.appendChild = function (t) {
          return t.tagName && "SCRIPT" === upperTag(t) && t.src && e(t), n.apply(this, arguments)
        }
      }(), function () {
        let e = "none";
        window.addEventListener("beforeunload", function () {
          "none" === e && (e = ___jsObject.preventIdle(0, "beforeunload"))
        }), window.addEventListener("unload", function () {
          "none" !== e && ___jsObject.allowIdle(e)
        })
      }();
      let ignoreClassName = "_n4waStD3fu5G", isIgnoreClass = function (e) {
        return 1 === e.nodeType && e.classList.contains(ignoreClassName)
      }, isObjectEmpty = function (e) {
        for (const t in e) if (e.hasOwnProperty(t)) return !1;
        return !0
      }, getFrameDocument = function (e) {
        try {
          return e.contentDocument
        } catch (e) {
          return null
        }
      }, getFrameDocumentElement = function (e) {
        const t = getFrameDocument(e);
        return t ? t.documentElement : null
      }, getChildren = function (e, t) {
        return "IFRAME" === upperTag(e) && (e = getFrameDocumentElement(e)), e ? t ? e.children : e.childNodes : []
      }, allWeightedKindMatches = function* (e, t, n) {
        const i = getChildren(e, n.isElement);
        if (i && i.length) for (var r = 0, o = i.length; r < o; r++) {
          const a = i[r];
          window.___isWeightedKindMatch(a, n) ? yield a : t.has(a) || (yield* allWeightedKindMatches(a, t, n))
        }
      }, allKindMatches = function (e, t, n) {
        return allWeightedKindMatches(e, t, window.___makeWeightedKind(n))
      }, EMPTY_SET = new Set, allKindMatchesInfo = function (e, t) {
        const n = [], i = window.___makeWeightedKind(t);
        for (var r of allWeightedKindMatches(e.element, e.negatives, i)) {
          const o = new Set(allWeightedKindMatches(r, EMPTY_SET, i));
          n.push({element: r, negatives: o})
        }
        return n
      }, elementCache = {};
      window.___namedKinds = {};
      const findElementInfo = function (e) {
        if (null === e) return {element: document.documentElement, negatives: EMPTY_SET};
        var t = e.index, n = findElementsInfo(e.partial);
        if (t < 0 || t >= n.length) throw new Error(`Selector index was out of range. Indexed: ${$JSON.stringify(e)}.`);
        return n[t]
      }, cssMatchesInfo = function (e, t) {
        for (var n = [], i = e.querySelectorAll(t), r = 0, o = i.length; r < o; r++) n.push({
          element: i[r],
          negatives: EMPTY_SET
        });
        return n
      }, xPathMatchesInfo = function (e) {
        let t = [], n = document.evaluate(e, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
        for (let e = 0, i = n.snapshotLength; e < i; ++e) t.push({element: n.snapshotItem(e), negatives: EMPTY_SET});
        return t
      }, findFromScript = function (e, t) {
        var n = t(e, window.___global, null);
        return n instanceof Node ? [{element: n, negatives: EMPTY_SET}] : n ? $from(n).map(function (e) {
          return {element: e, negatives: EMPTY_SET}
        }) : []
      }, findElementsInfoNoCache = function (e) {
        switch (e.type) {
          case"named":
            return allKindMatchesInfo(findElementInfo(e.parent), window.___namedKinds[e.value]);
          case"kind":
            return allKindMatchesInfo(findElementInfo(e.parent), e.value);
          case"path":
            return [{element: window.___fromPath(e.value, findElementInfo(e.parent).element), negatives: EMPTY_SET}];
          case"css":
            return cssMatchesInfo(findElementInfo(e.parent).element, e.value);
          case"xpath":
            return xPathMatchesInfo(e.value);
          case"top":
            return [{element: window.___fromPath(window.___topElementPath || ""), negatives: EMPTY_SET}];
          case"script":
            return findFromScript(findElementInfo(e.parent).element, e.value);
          default:
            throw new Error("Unexpected partial selector type.")
        }
      };
      window.___findElement = function (e) {
        return findElementInfo(e).element
      }, window.___findElements = function (e) {
        for (var t = [], n = findElementsInfo(e), i = 0, r = n.length; i < r; i++) t.push(n[i].element);
        return t
      }, window.___clearElementCache = function () {
        elementCache = {}
      }, function () {
        window.___extractors = {}, window.___extract = function (e, t) {
          try {
            const n = window.___extractors[e](t, window.___global);
            if (null != n) return n
          } catch (e) {
            return e.message
          }
          return null
        };
        window.___extractCacheFromKind = function (e, t, n) {
          return function (e, t, n) {
            const i = [], r = new Set(t), o = new Set;
            for (var a of n(e || window.___global.topElement, r)) {
              const s = window.___extractCache(a);
              s["^"] = $JSON.stringify($from(select(n(a, o), e => window.___getPath(e)))), i.push(s)
            }
            return i
          }(e, t, (e, t) => allKindMatches(e, t, n))
        }, window.___extractCaches = function (e) {
          const t = [];
          for (var n of e) t.push(window.___extractCache(n));
          return t
        }, window.___extractCache = function (e) {
          const t = {};
          for (var n in window.___extractors) window.___extractors.hasOwnProperty(n) && !window.___extractors[n].noCache && (t[n] = window.___extract(n, e));
          return t
        }
      }(), function () {
        window.___gatherers = {}, window.___makeRelatedGatherer = function (e, t) {
          return function (n, i) {
            const r = t(n);
            return r ? window.___gatherers[e](r, i) : {}
          }
        }, window.___gather = function (e, t) {
          try {
            const n = window.___gatherers[e](t, window.___global);
            switch (typeof n) {
              case"object":
                return n || {};
              case"number":
              case"boolean":
              case"string":
                return {val: n};
              default:
                return {error: "Type not supported: " + typeof n}
            }
          } catch (e) {
            return {error: e.message}
          }
        };
        const e = function (e, t, n) {
          if (window.___gatherers.hasOwnProperty(e)) {
            const i = t[e], r = window.___gather(e, n);
            for (var o in i) if (i.hasOwnProperty(o) && (!r.hasOwnProperty(o) || r[o] !== i[o])) return !1
          }
          return !0
        }, t = function (e, t, n) {
          let i = 0;
          if (window.___gatherers.hasOwnProperty(e)) {
            const r = t.kind[e], o = window.___gather(e, n);
            for (var a of Object.keys(r)) o.hasOwnProperty(a) && o[a] === r[a].value || (i += r[a].weight)
          }
          return i
        };
        window.___isWeightedKindMatch = function (e, n) {
          if (isIgnoreClass(e)) return !1;
          let i = 0;
          for (var r of Object.keys(n.kind)) if ((i += t(r, n, e)) > n.maxDeviation) return !1;
          return !0
        }, window.___isKindMatch = function (t, n) {
          if (isIgnoreClass(t)) return !1;
          for (var i in n) if (n.hasOwnProperty(i) && !e(i, n, t)) return !1;
          return !0
        }, window.___getElementsByKind = function (e, t) {
          const n = [];
          for (var i of allKindMatches(e || window.___global.topElement, new Set, t)) n.push(i);
          return n
        }, window.___getElementKind = function (e) {
          const t = {};
          for (var n in window.___gatherers) if (window.___gatherers.hasOwnProperty(n)) {
            const i = window.___gather(n, e);
            isObjectEmpty(i) || (t[n] = i)
          }
          return t
        }, window.___intersectKinds = function (e, t) {
          if (!e || !t) return null;
          var n = {};
          for (var i in e) if (e.hasOwnProperty(i) && t.hasOwnProperty(i)) {
            var r = e[i], o = t[i], a = {};
            for (var s in r) r.hasOwnProperty(s) && o.hasOwnProperty(s) && r[s] === o[s] && (a[s] = r[s]);
            isObjectEmpty(a) || (n[i] = a)
          }
          return n
        };
        var n = function (e, t) {
          var n = Object.assign({}, e);
          return n._tolerance = {val: t}, window.___getElementsByKind(document.body, n).length
        };
        window.___addSelectionToKind = function (e, t) {
          var n = window.___selection.getElements();
          for (var r of n) e = i(e, r, t);
          return e
        };
        var i = function (e, t, n) {
          var i = function (e, t, n) {
            var i = window.___getElementKind(t);
            try {
              if (n && window.___getKindSimilarity(e, i) < .1) {
                var r = [];
                t.parentElement && (r.push(t.parentElement), t.parentElement.parentElement && r.push(t.parentElement.parentElement));
                var o = getChildren(t);
                if (o) for (var a of o) {
                  r.push(a);
                  var s = getChildren(a);
                  if (s) for (var d of s) r.push(d)
                }
                var l = r.map(t => {
                  var n = window.___getElementKind(t);
                  return {element: t, kind: n, similarity: ___getKindSimilarity(e, n)}
                }).filter(e => e.similarity >= MIN_RATIO);
                if (l.length > 0) return l.reduce((e, t) => e.similarity > t.similarity ? e : t)
              }
            } catch (e) {
            }
            return {element: t, kind: i}
          }(e, t, n);
          return window.___intersectKinds(e, i.kind)
        };
        window.___createKind = function (e, t, r) {
          var o = e.length;
          if (0 === o) return null;
          for (var a = window.___getElementKind(e[0]), s = 1; s < o; s++) a = i(a, e[s], r);
          if (2 === t || 1 === t && 1 === o) {
            for (var d = n(a, 0), l = .044; l > .003 && n(a, l) !== d;) l *= .5;
            a._tolerance = {val: l}
          }
          return a
        }
      }(), function () {
        function e(e) {
          function t(e, t) {
            this.element = e, this.isUserAdded = t, this.children = []
          }

          var n = new Map, i = new t(null, !1), r = function (e, o) {
            var a;
            return n.has(e) ? (a = n.get(e), o && (a.isUserAdded = !0)) : (a = new t(e, o), e.parentElement ? r(e.parentElement, !1).children.push(a) : i.children.push(a), n.set(e, a)), a
          }, o = function* (e) {
            for (let t of e.children) t.isUserAdded && (yield t), yield* o(t)
          }, a = function* (e) {
            for (let t of e.children) t.isUserAdded && 0 === t.children.length ? yield t : yield* a(t)
          };
          if (this.addItem = function (e) {
            return r(e, !0)
          }, this.addItems = function (e) {
            for (let t of e) this.addItem(t)
          }, this.allUserItemsFrom = function* (e) {
            if (n.has(e)) for (var t of o(n.get(e))) yield t.element
          }, this.allUserItems = function* () {
            for (var e of o(i)) yield e.element
          }, this.allUserLeaves = function* (e) {
            for (let e of a(i)) yield e.element
          }, e) for (let t of e) this.addItem(t)
        }

        function t(e, t) {
          for (let n of e) if (t(n)) return !0;
          return !1
        }

        function n(e, t) {
          for (let n of e) if (t(n)) return n;
          throw new Error("No item found.")
        }

        function* i(e) {
          for (; e;) yield e, e = e.parentElement
        }

        function r(r) {
          var o = new Set(r), a = new e(r), s = new e;
          for (let e of $from(r)) {
            o.delete(e);
            let r = n(i(e), function (e) {
              return !e.parentElement || t(a.allUserItemsFrom(e.parentElement), function (e) {
                return o.has(e)
              })
            });
            s.addItem(r), o.add(e)
          }
          return s.allUserLeaves()
        }

        window.___createListKind = function (e) {
          if (e.length < 2) return null;
          var t = $from(r(e));
          if (t.length < 2) return null;
          for (var n = window.___getElementKind(t[0]), i = 1; i < t.length; i++) n = window.___intersectKinds(n, window.___getElementKind(t[i]));
          return n
        }, window.___selectCurrentFloors = function () {
          var e = $from(r(window.___selection.getElements()));
          ___selection.selectElements(e)
        }
      }(), function () {
        if (!window.___overlayInjected) {
          window.___overlayInjected = !0;
          var e = !1, t = !1, n = null, i = null, r = null, o = null, a = null, s = null, d = null, l = null, c = null,
            u = null, f = function () {
              if (c) {
                var e = window.___fromPath(l || "");
                l && e ? y(c, v(e)) : E(c)
              }
            }, _ = function (e) {
              try {
                if ("hidden" !== e.style.visibility && !e.classList.contains(ignoreClassName)) {
                  var t = e.ownerDocument.defaultView.getComputedStyle(e)["z-index"];
                  if (t && "auto" !== t) {
                    var n = parseInt(t);
                    n >= 2147483640 && function (e, t, n) {
                      try {
                        e.md928sdy4tqo || (e.md928sdy4tqo = []), null === e.getAttribute("style") && (e.md928sdy4tqo.___wasNull = !0);
                        var i = e.style[t];
                        e.md928sdy4tqo.push(() => e.style[t] = i), e.style[t] = n
                      } catch (e) {
                      }
                    }(e, "z-index", (n - 8).toString())
                  }
                }
              } catch (e) {
              }
              for (var i of getChildren(e, !0)) _(i)
            }, h = function (e) {
              try {
                !function (e) {
                  try {
                    if (e.md928sdy4tqo) {
                      for (; e.md928sdy4tqo.length;) e.md928sdy4tqo.pop()();
                      e.md928sdy4tqo.___wasNull && !e.getAttribute("style") && e.removeAttribute("style"), delete e.md928sdy4tqo
                    }
                  } catch (e) {
                  }
                }(e)
              } catch (e) {
              }
              for (var t of getChildren(e, !0)) h(t)
            };
          Object.defineProperty(window, "___topElementPath", {
            get: function () {
              return l
            }, set: function (e) {
              l = e, f()
            }
          });
          var m = function () {
            w.followElements(), f()
          }, w = new function () {
            var e = !1, t = 0, n = new Map, d = null, l = function () {
              return e ? "visible" : "hidden"
            }, c = function () {
              0 === t && window.___selection.onSelectionChanged && window.___selection.onSelectionChanged()
            };
            Object.defineProperty(this, "ignoredClass", {
              get: function () {
                return ignoreClassName
              }
            }), Object.defineProperty(this, "className", {
              get: function () {
                return "_yMm5Rfp3icM2"
              }
            }), Object.defineProperty(this, "length", {
              get: function () {
                return n.size
              }
            }), Object.defineProperty(this, "visible", {
              get: function () {
                return e
              }, set: function (t) {
                if (t !== e) for (var i of (e = !!t, n.values())) i.style.visibility = l()
              }
            }), Object.defineProperty(this, "highlightedElement", {
              get: () => d, set: e => {
                if (e) {
                  var t = v(e);
                  y(i, t), r.style.visibility = "visible", o.textContent = upperTag(e).toLowerCase(), e.id ? a.textContent = "#" + e.id : a.textContent = "", s.textContent = $from(e.classList || []).map(e => "." + e).join("");
                  var n = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
                  r.style.left = Math.min(t.left, n + document.documentElement.clientWidth - r.scrollWidth) + "px", t.top - r.offsetHeight < document.body.scrollTop ? r.style.top = t.top + t.height + "px" : r.style.top = t.top - r.offsetHeight + "px"
                } else r.style.visibility = "hidden", E(i);
                d = e
              }
            }), this.selectKind = function (e) {
              var t = ___getElementsByKind(null, e);
              if (this.selectElements(t), 0 == t.length) {
                var n = ___getExpandedKind(document.body, e, new Set);
                if (n) return ___getElementsByKind(null, n).length > 0
              }
              return !1
            }, this.selectExpandedKind = function (e, t = !1) {
              var n = ___getExpandedKind(document.body, e, new Set, t);
              n && this.selectKind(n)
            }, this.getElements = function () {
              return $from(n.keys())
            }, this.contains = function (e) {
              return n.has(e)
            }, this.makeChanges = function (e) {
              t++;
              try {
                e.apply(this)
              } finally {
                t--, c()
              }
            }, this.followElements = function () {
              for (var e of n) y(e[1], v(e[0]))
            }, this.add = function (e) {
              if (this.contains(e)) return !1;
              var t = document.createElement("div");
              return t.classList.add(ignoreClassName), t.classList.add("_yMm5Rfp3icM2"), t.style.visibility = l(), y(t, v(e)), document.documentElement.appendChild(t), n.set(e, t), c(), !0
            }, this.remove = function (e) {
              if (this.contains(e)) {
                var t = n.get(e);
                return document.documentElement.removeChild(t), n.delete(e), c(), !0
              }
              return !1
            }, this.clear = function () {
              n.size > 0 && this.makeChanges(function () {
                for (var e = this.getElements(), t = 0, n = e.length; t < n; t++) this.remove(e[t])
              })
            }, this.selectElements = function (e) {
              this.makeChanges(function () {
                this.clear();
                for (var t = 0, n = e.length; t < n; t++) this.add(e[t])
              })
            }, this.expandSelection = function () {
              var e = document.body, t = this.getElements();
              if (t.length > 0) {
                var n = ___getExpandedKind(e, ___createKind(t), new Set(t));
                n && this.selectElements(___getElementsByKind(e, n))
              }
            }, this.createSelectorAndSelect = function () {
              var e = ___createKind(this.getElements());
              e && this.selectElements(___getElementsByKind(document.body, e))
            }, this.toggleHighlighted = function () {
              var e = this.highlightedElement;
              e && (this.contains(e) ? this.remove(e) : this.add(e))
            }, this.expandHighlighted = function () {
              var e = this.highlightedElement;
              e && (this.contains(e) ? this.expandSelection() : (this.add(e), this.createSelectorAndSelect()))
            }, this.selectHighlighted = function () {
              var e = this.highlightedElement;
              e && this.makeChanges(function () {
                this.clear(), this.add(e)
              })
            }
          }, g = function (e) {
            var t;
            if (1 === e.nodeType) t = e.getBoundingClientRect(); else {
              var n = document.createRange();
              n.selectNode(e), t = n.getBoundingClientRect(), n.detach && n.detach()
            }
            return t
          }, p = function (e) {
            var t = g(e);
            if (e.ownerDocument !== document && e.ownerDocument.defaultView.frameElement) {
              var n = p(e.ownerDocument.defaultView.frameElement);
              return {top: n.top + t.top, left: n.left + t.left, width: t.width, height: t.height}
            }
            return t
          }, v = function (e) {
            var t = p(e);
            return {
              top: t.top + window.pageYOffset,
              left: t.left + window.pageXOffset,
              width: t.width,
              height: t.height
            }
          }, y = function (e, t) {
            e.style.left = t.left + "px", e.style.top = t.top + "px", e.style.width = t.width + "px", e.style.height = t.height + "px"
          }, E = function (e) {
            y(e, {top: -100, left: -100, width: 0, height: 0})
          }, x = function (e, t, n, i) {
            for (var r, o, a = e.elementsFromPoint(t, n), s = 0, d = a.length; s < d; s++) {
              var l = a[s];
              if (!isIgnoreClass(l)) {
                if ("IFRAME" === upperTag(l)) {
                  var c = getFrameDocument(l);
                  if (c) {
                    var u = l.getBoundingClientRect(), f = t - u.left, _ = n - u.top, h = x(c, f, _, i);
                    if (h) return h
                  }
                } else if (i && l.childNodes.length > 1 && l.childNodes.length !== l.children.length) for (var m = g(l), w = 0, p = l.childNodes.length; w < p; w++) {
                  var v = l.childNodes[w];
                  if (3 === v.nodeType) {
                    var y = g(v);
                    if ((v.data || "").trim() && ((r = {
                      x: t,
                      y: n
                    }).x > (o = y).left && r.y > o.top && r.x < o.left + o.width && r.y < o.top + o.height) && (y.width !== m.width || y.height !== m.height)) return v
                  }
                }
                return l
              }
            }
            return null
          }, b = function (e, t, n, i) {
            for (var r = -1, o = null, a = [], s = (a = t.tag && t.tag.val ? "HS-NODE" !== t.tag.val ? e.getElementsByTagName(t.tag.val) : function (e) {
              for (var t, n = [], i = document.createTreeWalker(e, NodeFilter.SHOW_TEXT, null, !1); t = i.nextNode();) n.push(t);
              return n
            }(e) : e.getElementsByTagName("*")).length; s--;) {
              var d = a[s];
              if (!isHidden(d) && !n.has(d)) {
                var l = ___getKindSimilarity(___getElementKind(d), t);
                l > r && (r = l, o = d)
              }
            }
            if (r >= i) return ___intersectKinds(___getElementKind(o), t)
          };
          window.___getExpandedKind = function (e, t, n, i = !1) {
            return b(e, t, n, i ? 0 : MIN_RATIO)
          }, window.___selectCurrentList = function () {
            var e, t = ___selection.getElements();
            if (t.length) {
              if (1 === t.length) {
                var n = document.body, i = ___getExpandedKind(n, ___createKind(t), new Set(t));
                i && (t = ___getElementsByKind(n, i))
              }
              e = ___createListKind(t)
            } else e = window.___detectListKind();
            e && ___selection.selectElements(___getElementsByKind(n, e))
          };
          var S = function (e) {
            if (t && e.ctrlKey) switch (e.keyCode) {
              case 37:
                return window.___preview.selectParents(), e.preventDefault(), !1;
              case 38:
                return window.___preview.selectPreviousSiblings(), e.preventDefault(), !1;
              case 39:
                return window.___preview.selectFirstChildren(), e.preventDefault(), !1;
              case 40:
                return window.___preview.selectNextSiblings(), e.preventDefault(), !1
            }
          }, T = function (e) {
            if (t) {
              var n = e.pageX - window.pageXOffset, i = e.pageY - window.pageYOffset, r = x(document, n, i, !e.altKey);
              ___selection.highlightedElement = r
            }
          }, O = function (e) {
            t && (___selection.highlightedElement = null)
          }, C = function (e) {
            t && 0 === e.button && ___selection.highlightedElement && (e.ctrlKey ? ___selection.toggleHighlighted() : e.shiftKey ? (e.preventDefault(), ___selection.expandHighlighted()) : ___selection.selectHighlighted())
          };
          Object.defineProperty(window, "___selection", {
            get: function () {
              return w
            }
          }), Object.defineProperty(window, "___selecting", {
            get: function () {
              return t
            }, set: function (l) {
              if (l !== t) {
                if (t = l) {
                  if (!e) {
                    e = !0;
                    var f = document.createElement("style");
                    n = document.createElement("div"), i = document.createElement("div"), r = document.createElement("div"), d = document.createElement("div"), o = document.createElement("span"), a = document.createElement("span"), s = document.createElement("span"), c = document.createElement("div"), window.___overlayDiv = n, n.id = "overlayDiv", i.id = "mouseDiv", r.id = "htmlDiv", o.id = "tagNameSpan", a.id = "idSpan", s.id = "classSpan", d.id = "selectionFooter", c.id = "topElementDiv", n.classList.add(ignoreClassName), i.classList.add(ignoreClassName), r.classList.add(ignoreClassName), o.classList.add(ignoreClassName), a.classList.add(ignoreClassName), s.classList.add(ignoreClassName), d.classList.add(ignoreClassName), c.classList.add(ignoreClassName), r.appendChild(o), r.appendChild(a), r.appendChild(s);
                    var g = "";
                    g += "#overlayDiv\t{ position: fixed; top: 0px; left: 0px; width: 100%; height: 100%; z-index:2147483640; background-color: #A09690; opacity: 0.25 }", g += "#mouseDiv { position: absolute; top: 0px; left: 0px; width: 0px; height: 0px; z-index: 2147483641; background-color: #43B; opacity: 0.5; }", g += "." + w.className + " { box-sizing: content-box; position: absolute; top: 0px; left: 0px; width: 0px; height: 0px; z-index: 2147483642; border: 3px solid #6600ff; border-radius: 3px 3px 3px 3px; margin-top: -3px; margin-left: -3px }", g += "#topElementDiv { box-sizing: content-box; position: absolute; top: 0px; left: 0px; width: 0px; height: 0px; z-index: 2147483643; border: 3px solid #ff6600; border-radius: 3px 3px 3px 3px; margin-top: -3px; margin-left: -3px }", g += "#htmlDiv { display: inline-block; position: absolute; top: 0px; left: -500px; z-index: 2147483643; background-color: #333740; font: 12px Consolas; padding-right: 8px; padding-left: 8px; padding-top: 3px; padding-bottom: 3px; }", g += "#tagNameSpan { color: #ee78e6 }", g += "#idSpan { color: #ffab66 }", g += "#classSpan { color: #88c8ef }", g += "#selectionFooter { left: -500px; animation:footerMessage 0.5s 1; animation-fill-mode: forwards; animation-delay:2s; display: inline-block; position: fixed; bottom:0%; background-color: #333740; color: #FFF; font: 12px Consolas; padding-right: 8px; padding-left: 8px; padding-top: 3px; padding-bottom: 3px }", g += "@keyframes footerMessage { from {opacity :1;} to {opacity :0;} }", f.textContent = g, document.head.appendChild(f), document.documentElement.appendChild(d), document.documentElement.appendChild(n), document.documentElement.appendChild(i), document.documentElement.appendChild(r), document.documentElement.appendChild(c)
                  }
                  document.addEventListener("keydown", S), document.addEventListener("mousemove", T), document.addEventListener("mouseleave", O), document.addEventListener("mousedown", C), n.style.visibility = "visible", i.style.visibility = "visible", d.style.visibility = "visible", c.style.visibility = "visible", w.visible = !0, null === u && (u = setInterval(() => m(), 500)), window.addEventListener("resize", m), m(), setTimeout(() => _(document.documentElement), 1)
                } else document.removeEventListener("keydown", S), document.removeEventListener("mousemove", T), document.removeEventListener("mouseleave", O), document.removeEventListener("mousedown", C), E(i), n.style.visibility = "hidden", i.style.visibility = "hidden", r.style.visibility = "hidden", d.style.visibility = "hidden", c.style.visibility = "hidden", w.visible = !1, window.removeEventListener("resize", m), null !== u && (clearInterval(u), u = null), setTimeout(() => h(document.documentElement), 1);
                window.___selection.onSelectingChanged && window.___selection.onSelectingChanged()
              }
            }
          });
          var j = function (e, t) {
            if (e === t) return "";
            for (var n = e.parentElement ? {
              parent: e.parentElement,
              siblings: e.parentElement.childNodes
            } : {
              parent: e.ownerDocument.defaultView.frameElement,
              siblings: [e]
            }, i = n.siblings.length, r = 0; r < i; r++) if (e === n.siblings[r]) return j(n.parent, t) + "/" + r;
            throw new Error("Unexpected error getting path.")
          };
          window.___getPath = function (e, t) {
            return j(e, t || window.document.documentElement)
          }, window.___getPaths = function (e, t) {
            for (var n = [], i = 0, r = e.length; i < r; i++) n.push(window.___getPath(e[i], t));
            return n
          }, window.___fromPath = function (e, t) {
            var n = e.split("/"), i = t || window.document.documentElement;
            if (n.length < 2) return i;
            for (var r = 1; r < n.length; r++) {
              var o = parseInt(n[r]), a = "IFRAME" === upperTag(i) ? [i.contentDocument.documentElement] : i.childNodes;
              if (!(o < a.length)) return null;
              i = a[o]
            }
            return i
          }, window.___fromPaths = function (e, t) {
            for (var n = [], i = 0, r = e.length; i < r; i++) {
              var o = window.___fromPath(e[i], t);
              o && n.push(o)
            }
            return n
          }
        }
      }(), window.___getElementsByXPath = function (e) {
        let t = [], n = document.evaluate(e, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
        for (let e = 0, i = n.snapshotLength; e < i; ++e) t.push(n.snapshotItem(e));
        return t
      }, function () {
        window.___transforms = {};
        let e = function (e) {
          switch (typeof e) {
            case"object":
              return null === e ? "null" : void 0 === e ? "undefined" : $JSON.stringify(e);
            default:
              return "" + e
          }
        }, t = function () {
          var t = function () {
            let t = ___selection.getElements(), n = {}, i = {}, r = {}, o = t.length;
            for (var a in window.___extractors) if (window.___extractors.hasOwnProperty(a) && window.___extractors[a].visible) {
              let e = [];
              n[a] = e;
              for (let n = 0; n < o; n++) e.push("" + ___extract(a, t[n]))
            }
            for (var a in window.___gatherers) if (window.___gatherers.hasOwnProperty(a) && window.___gatherers[a].visible) {
              let n = [];
              i[a] = n;
              for (let i = 0; i < o; i++) try {
                var s = window.___gatherers[a](t[i], window.___global);
                n.push(e(s))
              } catch (e) {
                n.push(e.message)
              }
            }
            for (var d of Object.keys(window.___transforms)) {
              var l = window.___transforms[d];
              if (window.___extractors.hasOwnProperty(l)) {
                let e = [];
                r[d] = e;
                for (let n = 0; n < o; n++) e.push("" + ___extract(l, t[n]))
              }
            }
            return {elementCount: t.length, extractors: n, filters: i, transforms: r}
          }();
          ___jsObject.notifyPreviewChanged(frameId, t.elementCount, $JSON.stringify(t.extractors), $JSON.stringify(t.filters), $JSON.stringify(t.transforms))
        }, n = function () {
          ___jsObject.notifySelectingChanged(frameId, window.___selecting)
        };
        ___selection.onSelectionChanged = function () {
          t()
        }, ___selection.onSelectingChanged = function () {
          n()
        }, window.___preview = {};
        let i = function (e) {
          for (var t = ___selection.getElements(), n = new Set, i = 0, r = t.length; i < r; i++) {
            var o = e(t[i]);
            o && n.add(o)
          }
          ___selection.selectElements($from(n))
        };
        window.___preview.selectParents = (() => i(e => e.parentElement)), window.___preview.selectFirstChildren = (() => i(e => e.firstChild)), window.___preview.selectPreviousSiblings = (() => i(e => e.previousSibling)), window.___preview.selectNextSiblings = (() => i(e => e.nextSibling)), window.___preview.notifyPreviewChanged = (() => t()), n(), window.___extractors = {}, window.___gatherers = {}, window.___namedKinds = {}, window.addEventListener("unload", function (e) {
          ___selection.clear()
        })
      }(), window.___textTags = new Set, window.___textTags.add("I"), window.___textTags.add("B"), window.___textTags.add("BIG"), window.___textTags.add("SMALL"), window.___textTags.add("EM"), window.___textTags.add("STRONG"), window.___textTags.add("ADDRESS"), window.___textTags.add("SPAN"), window.___textTags.add("P"), window.___textTags.add("H1"), window.___textTags.add("H2"), window.___textTags.add("H3"), window.___textTags.add("H4"), window.___textTags.add("H5"), window.___textTags.add("H6"), window.___textTags.add("DT"), window.___textTags.add("DD"), window.___textTags.add("LI"), window.___textTags.add("LABEL"), window.___textTags.add("TD"), window.___textTags.add("TH"), window.___textTags.add("TITLE"), window.___textTags.add("TIME");
      var MIN_RATIO = .78, isHidden = function (e, t = !1) {
        if (1 !== e.nodeType && (e = e.parentElement), null === e.offsetParent) return !0;
        if (t) return !1;
        var n = e.getBoundingClientRect();
        return n.bottom <= 0 || n.right <= 0
      };
      !function () {
        var t = 5, n = 9, i = 1100, r = new Set, o = 300, a = 200, s = 500, d = 50, l = 3;
        r.add("HS-NODE"), r.add("HTML"), r.add("HEAD"), r.add("BODY"), r.add("BUTTON"), r.add("AREA"), r.add("AUDIO"), r.add("BR"), r.add("NOSCRIPT"), r.add("SCRIPT"), r.add("STYLE"), r.add("TITLE"), r.add("META"), r.add("LINK");
        var c = function (e, t) {
          var n = new Map;
          for (var i of e) t.has(i[0]) ? n.set(i[0], (i[1] + t.get(i[0])) / 2) : n.set(i[0], .7 * i[1]);
          for (var i of t) n.has(i[0]) || n.set(i[0], .7 * i[1]);
          return n
        }, u = function (e, t, n) {
          var i = function (t, n) {
            if (t && (t = t.trim())) {
              var i = e.get(t) || -1;
              e.set(t, Math.max(i, n))
            }
          };
          "ADDRESS" === upperTag(t) && i("address", n);
          var r = function (e) {
            var t = function (e) {
              if (e && "TD" === upperTag(e)) {
                for (var t = 0; e = e.previousElementSibling;) t += e.colSpan || 1;
                return t
              }
              return -1
            }(e);
            if (-1 !== t) {
              for (; e && "TABLE" !== upperTag(e);) e = e.parentElement;
              if (e && "TABLE" === upperTag(e)) {
                var n = e.querySelectorAll("th,td"), i = 0, r = null;
                for (var o of n) {
                  if (i > t) return (r.innerText || "").trim();
                  r = o, i += o.colSpan || 1
                }
              }
            }
            return null
          }(t);
          if (r && i(r, .9 * n), t.getAttribute("itemprop") && i(t.getAttribute("itemprop"), .8 * n), t.previousElementSibling && t.previousElementSibling.innerText) {
            var o = t.previousElementSibling.innerText.trim();
            o && ":" == o[o.length - 1] && i(o, .7 * n)
          }
          var a = /^\s*\d{1,10} ([A-Za-z]{3,12}s)\s*$/;
          for (var s of (t.innerText && a.test(t.innerText) && i(a.exec(t.innerText)[1], .6 * n), t.getAttribute("id") && i(t.getAttribute("id"), .5 * n), t.classList)) {
            i(s, n * (.4 + .1 / document.getElementsByClassName(s).length))
          }
        }, f = function (e) {
          var t = new Map;
          return u(t, e, 1), e.parentElement && (u(t, e.parentElement, .9), e.parentElement.parentElement && u(t, e.parentElement.parentElement, .8)), t
        }, _ = function (e, t) {
          var n = e.getBoundingClientRect(), i = 0;
          return t || (i -= Math.abs(n.left - o) / 10, i -= Math.abs(n.top - a) / 10), i -= Math.abs(n.width - s) / 10, i -= Math.abs(n.height - d) / 10, i -= Math.abs((e.innerText || "").length - 32)
        }, h = function (e) {
          for (var t = "", n = 0, i = e.childNodes.length; n < i; n++) {
            var r = e.childNodes[n];
            r.nodeType === l && r.textContent && (t += r.textContent.trim().toLowerCase())
          }
          return t
        }, m = function (e) {
          var o = function (e) {
            var o = [], a = function (e) {
              for (var t = 0, n = e.children.length; t < n; t++) {
                var i = e.children[t];
                o.push(i), a(i)
              }
            }, s = function (e, o) {
              if (!e) return !1;
              if (isHidden(e, o)) return !1;
              if (r.has(upperTag(e))) return !1;
              var a = e.getBoundingClientRect();
              return !(a.width < t || a.height < n || a.height > i || !e.innerText || e.innerText.length > 512 || function (e) {
                var t = 0;
                for (var n of e.querySelectorAll("*")) if (++t > 12) return !0;
                return !1
              }(e))
            };
            a(e);
            for (var d = e != document.documentElement && e != document.body, l = [], c = 0, u = o.length; c < u; c++) {
              var f = o[c];
              s(f, d) && l.push({index: c, element: f})
            }
            return l
          }(e), a = [], s = e != document.documentElement && e != document.body;
          if (o.length > 256) {
            var d = [];
            for (var l of o) d.push({item: l, score: _(l.element, s)});
            o = [], d.sort((e, t) => t.score - e.score);
            for (var c = 0; c < 256; c++) o.push(d[c].item)
          }
          for (var u of o) a.push({
            kind: window.___getElementKind(u.element),
            cache: h(u.element),
            ids: f(u.element),
            samples: 1,
            score: _(u.element, s),
            index: u.index
          });
          return a
        }, w = {
          childrenLen: .7,
          colIndex: .7,
          prevText: .7,
          text: .7,
          classes: .91,
          names: .75,
          tag3: 1,
          id: .98,
          class: .73,
          color: 1,
          visible: 1,
          classes3: .81,
          header: .9,
          class2: .87,
          font: 1,
          classes2: .95,
          id1: .91,
          id3: .88,
          tag: 1,
          tag1: 1,
          indexes: .86,
          class1: .87,
          classes1: .95,
          tag2: 1,
          class3: .9,
          id2: .91
        }, g = function (e, t = .7) {
          return "_" === e[0] ? 0 : (window.___gatherers[e] || {}).score || (w.hasOwnProperty(e) ? w[e] : t)
        }, p = null;
        window.___makeWeightedKind = function (e) {
          var t = {kind: {}};
          t.isElement = e.tag && e.tag.val && "HS-NODE" !== e.tag.val;
          var n = 0;
          for (var i of Object.keys(e)) {
            var r = g(i, 10);
            if (r) for (var o of (t.kind[i] = {}, Object.keys(e[i]))) t.kind[i][o] = {}, t.kind[i][o].value = e[i][o], t.kind[i][o].weight = r, n += r
          }
          var a = e._tolerance ? e._tolerance.val : 0;
          return t.maxDeviation = a * n, t
        };
        var v = function (e, t) {
          var n = 0, i = 0;
          for (var r of Object.keys(e)) {
            if (t.hasOwnProperty(r)) {
              var o = e[r], a = t[r], s = Object.keys(o), d = 0;
              for (var l of s) a.hasOwnProperty(l) && o[l] === a[l] && d++;
              i += g(r) * d / s.length
            }
            n += g(r)
          }
          return i / n
        };
        window.___getKindSimilarity = function (e, t) {
          return e.tag && e.tag.val && t.tag && t.tag.val && e.tag.val !== t.tag.val ? 0 : (v(e, t) + v(t, e)) / 2
        };
        var y = function (e, t) {
          for (var n = -1, i = -1, r = 0; r < t.length; r++) {
            var o = ___getKindSimilarity(e.kind, t[r].kind);
            o >= i && (i = o, n = r)
          }
          return i >= MIN_RATIO ? {index: n, ratio: i} : null
        }, E = function (e, t) {
          for (var n = new Map, i = [], r = 0; r < t.length; r++) {
            var o = y(t[r], e), a = !0;
            if (o) {
              var s = n.get(o.index);
              (!s || o.ratio > s.ratio) && (n.set(o.index, {index: r, ratio: o.ratio}), a = !1)
            }
            a && i.push(r)
          }
          var d, l, u = [];
          for (var f of n) {
            var _ = e[f[0]], h = t[f[1].index];
            u.push({
              kind: window.___intersectKinds(_.kind, h.kind),
              cache: (d = _.cache, l = h.cache, "j*y%@^*f" === d || "j*y%@^*f" === l ? "j*y%@^*f" : d !== l ? "j*y%@^*f" : d),
              ids: c(_.ids, h.ids),
              samples: _.samples + h.samples,
              score: (_.score + h.score) / 2,
              index: (_.index + h.index) / 2
            })
          }
          for (let t = 0; t < e.length; t++) n.has(t) || u.push(e[t]);
          for (let e of i) u.push(t[e]);
          return u
        }, x = function (e) {
          var t = -1, n = "";
          for (var i of e) i[1] > t && (t = i[1], n = i[0]);
          return n
        }, b = function (e) {
          var t = new Map;
          for (var n of e) t.set(n[0], n[1]);
          return t
        }, S = function (e) {
          var t = [];
          for (var n of e) t.push({
            kind: n.kind,
            cache: n.cache,
            ids: b(n.ids),
            samples: n.samples,
            score: n.score,
            index: n.index
          });
          return t
        };
        window.___generator = {
          getElements: function (t) {
            return function (t) {
              var n = [];
              for (var i of t) n.push({
                kind: i.kind,
                cache: i.cache,
                ids: $from(i.ids),
                samples: i.samples,
                score: i.score,
                index: i.index
              });
              return e.stringify(n)
            }(m(t))
          }, resolve: function (t) {
            var n = [];
            for (var i of t) n.push(S(i));
            var r = function (e) {
              for (var t = e[0], n = 1; n < e.length; n++) t = E(t, e[n]);
              var i = [];
              for (var r of t) r.samples >= 3 && "j*y%@^*f" === r.cache && i.push({
                kind: r.kind,
                identifier: x(r.ids),
                score: r.score,
                index: r.index
              });
              i.length > 20 && (i.sort((e, t) => t.score - e.score), i.splice(20));
              for (var o = function () {
                for (var e = 1 - .05 * i.length / 20, t = {
                  i: -1,
                  j: -1,
                  score: -1
                }, n = 0; n < i.length; n++) for (var r = n + 1; r < i.length; r++) {
                  var o = ___getKindSimilarity(i[n].kind, i[r].kind);
                  o > t.score && (t = {i: n, j: r, score: o})
                }
                if (t.score > e) {
                  var a = i[t.i], s = i[t.j];
                  return a.kind = ___intersectKinds(a.kind, s.kind), a.score = (a.score + s.score) / 2, a.index = (a.index + s.index) / 2, i.splice(t.j, 1), !0
                }
                return !1
              }; o();) ;
              return i.sort((e, t) => e.index - t.index), i
            }(n), o = [];
            for (var a of r) o.push({kind: e.stringify(a.kind), identifier: (a.identifier || "").substring(0, 32)});
            return e.stringify(o)
          }
        }, function () {
          function e(e, t) {
            var n = t(document.body), i = e.map(e => t(e)).reduce((e, t) => e + t, 0);
            return 0 == n ? 1 : i / n
          }

          function o(e) {
            if (!e) return !1;
            if (isHidden(e)) return !1;
            if (r.has(upperTag(e))) return !1;
            var o = e.getBoundingClientRect();
            return !(o.width < t || o.height < n || o.height > i) && !!e.innerText
          }

          var a, s, d = {
            text: function (t) {
              return e(t, e => (e.innerText || "").replace(/\s/g, "").length)
            }, size: function (t) {
              return e(t, e => {
                var t = e.getBoundingClientRect();
                return t.width * t.height
              })
            }, homogeneity: function (e) {
              var t = function (e, t) {
                return 1 / (Math.abs(e - t) + 1)
              }, n = e.map(e => e.getBoundingClientRect()).map(e => ({
                max: e,
                min: e
              })).reduce((e, t) => ({
                max: {
                  top: Math.max(e.max.top, t.max.top),
                  left: Math.max(e.max.left, t.max.left),
                  width: Math.max(e.max.width, t.max.width),
                  height: Math.max(e.max.height, t.max.height)
                },
                min: {
                  top: Math.min(e.min.top, t.min.top),
                  left: Math.min(e.min.left, t.min.left),
                  width: Math.min(e.min.width, t.min.width),
                  height: Math.min(e.min.height, t.min.height)
                }
              }));
              return (t(n.min.width, n.max.width) + t(n.min.height, n.max.height) + t(n.min.left, n.max.left) + t(n.min.top, n.max.top)) / 4
            }, verticality: function (e) {
              var t, n, i = e.map(e => e.getBoundingClientRect()).map(e => ({
                max: e.left,
                min: e.left
              })).reduce((e, t) => ({max: Math.max(e.max, t.max), min: Math.min(e.min, t.min)}));
              return t = i.min, n = i.max, 1 / (Math.abs(t - n) + 1)
            }, count: function (e) {
              return 1 - 1 / e.length
            }, kind: function (e) {
              return function (e) {
                var t = 0;
                for (var n of Object.keys(e)) t += g(n);
                if (null === p) {
                  var i = 0;
                  for (var r of Object.keys(window.___gatherers)) i += g(r);
                  p = i
                }
                return t / p
              }(___createKind(e))
            }
          }, l = {
            text: {average: .7305295, error: .1480683},
            size: {average: .4300347, error: .1718888},
            homogeneity: {average: .5059761, error: .1232522},
            count: {average: .940307, error: .0320191},
            kind: {average: .8045201, error: .0343202},
            verticality: {average: .8751416, error: .6303443}
          };

          function c(e) {
            return $from(Object.keys(d)).map(t => (1 - Math.abs(d[t](e) - l[t].average)) * l[t].weight).reduce((e, t) => e + t) / l.weight
          }

          function u(e, t) {
            return ___getElementsByKind(document.body, t).filter(e => 1 === e.nodeType)
          }

          a = $from(Object.keys(l)).map(e => l[e]), s = a.map(e => e.error).reduce((e, t) => Math.min(e, t)), a.forEach(e => e.weight = s / e.error), l.weight = a.map(e => e.weight).reduce((e, t) => e + t), window.___detectListKind = function (e = 42) {
            var t, n, i = {kind: null, score: -1}, r = new Set, a = new Set, s = function (e, t, n) {
              if (t < 1 || n < 1) return [];
              for (var i = function () {
                var e = 1 - Math.sqrt(1 - Math.random());
                return Math.random() > .5 ? e : -e
              }, r = Math.sqrt(t * n / e), o = [], a = r / 2; a < t; a += r) for (var s = r / 2; s < n; s += r) o.push({
                x: a + i() * r / 4,
                y: s + i() * r / 4
              });
              return o
            }(e, window.innerWidth, window.innerHeight), d = window.___selecting;
            for (var l of (window.___selecting = !1, s)) {
              var f = document.elementFromPoint(l.x, l.y);
              if (f && !r.has(f) && o(f)) {
                r.add(f);
                var _ = ___getExpandedKind(document.body, ___createKind([f]), new Set([f]));
                if (_) {
                  var h = $JSON.stringify(_);
                  if (!a.has(h)) {
                    a.add(h);
                    var m = (t = _, void 0, n = u(document.body, t), ___createListKind(n));
                    if (m) {
                      var w = c(u(document.body, m));
                      w > i.score && (i = {kind: m, score: w})
                    }
                  }
                }
              }
            }
            return window.___selecting = d, i.kind
          }
        }()
      }(), window.___evaluate = function (e, t, n, i) {
        let r = function (e, t) {
          if (t instanceof Node) {
            let n = window.___getPath(t);
            return "element" === e ? n : {element: n}
          }
          return t
        }, o = e => {
          if (void 0 === e) return "null";
          var t = $JSON.stringify(e, r);
          if (null == t) throw new Error(`This is null. ${typeof e} | ${e}`);
          return t
        };
        window.___global.recur = !1;
        let a = t(window.___findElement(e), window.___global, n);
        return null != a && "function" == typeof a.then ? (a.then(e => ___jsObject.setAsyncResponse(i, o(e)), e => ___jsObject.failAsyncResponse(i, (null != e ? e.message || e.toString() : "") || "Unknown promise error.")), "promise") : window.___global.recur ? " " + o(a) : o(a)
      }, function () {
        function e(e) {
          switch (upperTag(e)) {
            case"INPUT":
              switch ((e.getAttribute("type") || "").toLowerCase()) {
                case"email":
                case"number":
                case"password":
                case"search":
                case"tel":
                case"text":
                case"url":
                case"datetime":
                  return 1;
                case"checkbox":
                case"radio":
                  return 2;
                default:
                  return 0
              }
            case"TEXTAREA":
              return 1;
            case"SELECT":
              return 3;
            default:
              return 0
          }
        }

        let t = {detectInputType: t => e(t)};
        t.setInputValue = ((n, i) => (function (n, i) {
          t.focusFrame(), n.dispatchEvent(new FocusEvent("focus")), [e => e.value = i, e => e.value = i, e => {
            !!parseInt(i) !== e.checked && e.click()
          }, e => {
            var t = $from(e.querySelectorAll("option")),
              n = t.find(e => e.value === i) || t.find(e => e.innerText === i);
            if (n) e.value = n.value; else {
              var r = parseInt(i);
              !isNaN(r) && r >= 0 && r < t.length && (e.value = t[r].value)
            }
          }][e(n)](n), n.dispatchEvent(new Event("input", {bubbles: !0})), n.dispatchEvent(new Event("change", {bubbles: !0})), n.dispatchEvent(new FocusEvent("blur"))
        })(n, i)), t.getElementPath = ((e, t) => window.___getPath(e, t)), t.getElementByPath = ((e, t) => window.___fromPath(e, t)), t.getElementsBySelector = ((e, t) => window.___getElementsByKind(t, e)), t.submitForm = (e => (function (e) {
          var t = e.querySelector('input[type="submit"], button[type="submit"], button:not([type])');
          if (t) t.click(); else {
            var n = e.querySelector("input:enabled[type=text],input:enabled[type=password],input:enabled[type=email],input:enabled[type=search],input:enabled[type=tel],input:enabled[type=url]"),
              i = !1;
            if (n) {
              n.focus();
              try {
                ___jsObject.pressKey(frameId, 13), i = !0
              } catch (e) {
              }
            }
            if (!i) {
              var r = document.createElement("button");
              e.appendChild(r), r.click();
              try {
                e.removeChild(r)
              } catch (e) {
              }
            }
          }
          ___jsObject.preventIdle(200, "Form Submit")
        })(e)), t.frameId = frameId, t.focusFrame = (() => ___jsObject.focusFrame(frameId)), t.getSelector = (e => ___namedKinds[e]), t.log = ((e, t, n) => {
          const i = "string" == typeof e ? e : $JSON.stringify(e);
          ___jsObject.log(i, null != t ? t : 0, !!n)
        }), t.webRequest = function (e, t, n, i, r, o) {
          var a = null != i && "string" != typeof i;
          a && (i = function (e) {
            for (var t = "", n = new Uint8Array(e), i = n.byteLength, r = 0; r < i; r++) t += String.fromCharCode(n[r]);
            return window.btoa(t)
          }(i));
          var s = window.___jsObject.webRequest(e, t, null == n ? null : $JSON.stringify(n), a, i, r, !!o),
            d = $JSON.parse(s);
          return {
            headers: d.headers, response: o ? function (e) {
              for (var t = window.atob(e), n = t.length, i = new Uint8Array(new ArrayBuffer(n)), r = 0; r < n; r++) i[r] = t.charCodeAt(r);
              return i
            }(d.response) : d.response
          }
        }, Object.defineProperty(t, "topElement", {
          get: function () {
            return window.___fromPath(window.___topElementPath || "")
          }
        }), window.___global = t
      }();
      var userAgent = ___jsObject.getUserAgent();
      userAgent && Object.defineProperty(window.navigator, "userAgent", {get: () => userAgent})
    } finally {
      isPure = !1
    }
  })(55834574856);
  (function () {
    if (window.___hasInjected) {
      window.___extractors = {};
      window.___gatherers = {};
      window.___namedKinds = {};
      (function () {
      })();
      window.___preview.notifyPreviewChanged();
    }
  })();
}
