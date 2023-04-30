import { defineComponent, useSSRContext, mergeProps, ref, onMounted, onUnmounted, resolveComponent, withCtx, renderSlot, computed, unref } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrInterpolate, ssrRenderSlot, ssrRenderStyle, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.43be4956.mjs";
import { Link } from "@inertiajs/inertia-vue3";
const _sfc_main$4 = defineComponent({
  data() {
    return {
      show: true
    };
  },
  computed: {
    style() {
      var _a, _b;
      if ((_a = this.$page.props.flash) == null ? void 0 : _a.success) {
        return "success";
      } else if ((_b = this.$page.props.flash) == null ? void 0 : _b.error) {
        return "danger";
      }
    },
    message() {
      var _a, _b, _c, _d;
      if ((_a = this.$page.props.flash) == null ? void 0 : _a.success) {
        return (_b = this.$page.props.flash) == null ? void 0 : _b.success;
      } else if ((_c = this.$page.props.flash) == null ? void 0 : _c.error) {
        return (_d = this.$page.props.flash) == null ? void 0 : _d.error;
      } else {
        return "";
      }
    }
  }
});
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "mb-4 mr-4" }, _attrs))}>`);
  if (_ctx.show && _ctx.message) {
    _push(`<div class="${ssrRenderClass([{ "bg-blue-brand-gradient1": _ctx.style == "success", "bg-red-700": _ctx.style == "danger" }, "rounded-lg"])}"><div class="max-w-screen-xl mx-auto py-2 px-3 sm:px-6 lg:px-8"><div class="flex items-center justify-between flex-wrap"><div class="w-0 flex-1 flex items-center min-w-0"><span class="${ssrRenderClass([{ "bg-blue-brand-complement": _ctx.style == "success", "bg-red-600": _ctx.style == "danger" }, "flex p-2 rounded-lg"])}">`);
    if (_ctx.style == "success") {
      _push(`<svg class="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`);
    } else {
      _push(`<!---->`);
    }
    if (_ctx.style == "danger") {
      _push(`<svg class="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</span><p class="ml-3 font-medium text-sm text-white">${ssrInterpolate(_ctx.message)}</p></div><div class="flex-shrink-0 sm:ml-3"><button type="button" class="${ssrRenderClass([{ "hover:bg-blue-brand-complement focus:bg-blue-brand-complement": _ctx.style == "success", "hover:bg-red-600 focus:bg-red-600": _ctx.style == "danger" }, "-mr-1 flex p-2 rounded-md focus:outline-none sm:-mr-2 transition"])}" aria-label="Dismiss"><svg class="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div></div></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Banner.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const JetBanner = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$3 = defineComponent({
  props: {
    align: {
      default: "right"
    },
    width: {
      default: "full"
    },
    contentClasses: {
      default: () => ["py-1", "bg-transparent"]
    },
    openSide: Boolean
  },
  setup(props) {
    let open = ref(props.openSide);
    const closeOnEscape = (e) => {
      if (open.value && e.keyCode === 27) {
        open.value = false;
      }
    };
    onMounted(() => document.addEventListener("keydown", closeOnEscape));
    onUnmounted(() => document.removeEventListener("keydown", closeOnEscape));
    return {
      open
    };
  },
  computed: {
    widthClass() {
      return {
        "full": "w-full"
      }[this.width.toString()];
    },
    alignmentClasses() {
      if (this.align === "left") {
        return "origin-top-left left-0";
      } else if (this.align === "right") {
        return "origin-top-right right-0";
      } else if (this.align === "center") {
        return "origin-top";
      }
    }
  }
});
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative w-full" }, _attrs))}><div class="${ssrRenderClass([{ " bg-gradient-to-t from-blue-brand-gradient1 to-blue-brand-gradient2 hover:bg-blue-brand": _ctx.open }, "flex justify-between items-center p-2 rounded-lg hover:bg-white/20 hover:text-gray-300"])}">`);
  ssrRenderSlot(_ctx.$slots, "trigger", {}, null, _push, _parent);
  _push(`</div><div style="${ssrRenderStyle([
    _ctx.open ? null : { display: "none" },
    { "display": "none" }
  ])}" class="${ssrRenderClass([[_ctx.widthClass, _ctx.alignmentClasses], "mt-2"])}"><div class="${ssrRenderClass([_ctx.contentClasses, "bg-transparent"])}">`);
  ssrRenderSlot(_ctx.$slots, "content", {}, null, _push, _parent);
  _push(`</div></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/DropdownSidebar.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const JetDropdownSidebar = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$2 = defineComponent({
  components: {
    Link
  },
  props: ["href", "as", "active"],
  computed: {
    classes() {
      return this.active ? "bg-white/20" : "text-gray-300";
    }
  }
});
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Link = resolveComponent("Link");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  if (_ctx.as == "button") {
    _push(`<button type="submit" class="block my-2 w-full px-4 py-2 text-base leading-5 text-gray-400 text-left rounded-lg hover:text-gray-300 hover:bg-white/20 focus:outline-none focus:bg-white/20 transition">`);
    ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
    _push(`</button>`);
  } else if (_ctx.as == "a") {
    _push(`<a${ssrRenderAttr("href", _ctx.href)} class="block my-2 px-4 py-2 text-base leading-5 text-gray-400 rounded-lg hover:text-gray-300 hover:bg-white/20 focus:outline-none focus:bg-white/20 transition">`);
    ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
    _push(`</a>`);
  } else {
    _push(ssrRenderComponent(_component_Link, {
      href: _ctx.href,
      class: [_ctx.classes, "block my-2 px-4 py-2 text-base leading-5 text-gray-400 rounded-lg hover:text-gray-300 hover:bg-white/20 focus:outline-none focus:bg-white/20 transition"]
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
        } else {
          return [
            renderSlot(_ctx.$slots, "default")
          ];
        }
      }),
      _: 3
    }, _parent));
  }
  _push(`</div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/DropdownLinkSidebar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const JetDropdownLinkSidebar = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = defineComponent({
  components: {
    Link
  },
  props: ["href", "active"],
  computed: {
    classes() {
      return this.active ? "flex  items-center p-2 rounded-lg bg-gradient-to-t from-blue-brand-gradient1 to-blue-brand-gradient2 hover:bg-blue-brand text-gray-300 my-2" : "flex  items-center p-2 rounded-lg hover:bg-white/20 text-gray-300 my-2";
    }
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Link = resolveComponent("Link");
  _push(ssrRenderComponent(_component_Link, mergeProps({
    href: _ctx.href,
    class: _ctx.classes
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
      } else {
        return [
          renderSlot(_ctx.$slots, "default")
        ];
      }
    }),
    _: 3
  }, _parent));
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/NavLinkSidebar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const JetNavLinkSidebar = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "NavLink",
  __ssrInlineRender: true,
  props: {
    href: String,
    active: Boolean
  },
  setup(__props) {
    const props = __props;
    const classes = computed(() => {
      return props.active ? "inline-flex items-center px-1 pt-1 border-b-2 border-indigo-400 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition" : "inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition";
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Link), mergeProps({
        href: __props.href,
        class: unref(classes)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/NavLink.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  JetBanner as J,
  _sfc_main as _,
  JetDropdownSidebar as a,
  JetDropdownLinkSidebar as b,
  JetNavLinkSidebar as c
};
