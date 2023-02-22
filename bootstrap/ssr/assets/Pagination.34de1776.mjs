import { Link } from "@inertiajs/inertia-vue3";
import { resolveComponent, mergeProps, withCtx, openBlock, createBlock, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.43be4956.mjs";
const _sfc_main = {
  components: {
    Link
  },
  props: {
    paginating: Object
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Link = resolveComponent("Link");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6" }, _attrs))}><div class="${ssrRenderClass([{ "justify-center": $props.paginating.links.length <= 3, "justify-between": $props.paginating.links.length > 3 }, "flex-1 flex items-center sm:hidden"])}">`);
  if ($props.paginating.links.length > 3) {
    _push(ssrRenderComponent(_component_Link, {
      href: $props.paginating.prev_page_url,
      class: "relative flex justify-center items-center h-8 w-8 text-center rounded-full border border-gray-300 bg-white text-sm font-semibold text-gray-500 hover:bg-gray-50"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"${_scopeId}><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"${_scopeId}></path></svg>`);
        } else {
          return [
            (openBlock(), createBlock("svg", {
              class: "w-5 h-5",
              fill: "currentColor",
              viewBox: "0 0 20 20"
            }, [
              createVNode("path", {
                "fill-rule": "evenodd",
                d: "M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z",
                "clip-rule": "evenodd"
              })
            ]))
          ];
        }
      }),
      _: 1
    }, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`<div><p class="text-sm text-gray-700"> P\xE1gina ${ssrInterpolate(" ")} <span class="font-medium">${ssrInterpolate($props.paginating.current_page)}</span> ${ssrInterpolate(" ")} de ${ssrInterpolate(" ")} <span class="font-medium">${ssrInterpolate($props.paginating.last_page)}</span></p></div>`);
  if ($props.paginating.links.length > 3) {
    _push(ssrRenderComponent(_component_Link, {
      href: $props.paginating.next_page_url,
      class: "relative flex justify-center items-center h-8 w-8 text-center rounded-full border border-gray-300 bg-white text-sm font-semibold text-gray-500 hover:bg-gray-50"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"${_scopeId}><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"${_scopeId}></path></svg>`);
        } else {
          return [
            (openBlock(), createBlock("svg", {
              class: "w-5 h-5",
              fill: "currentColor",
              viewBox: "0 0 20 20"
            }, [
              createVNode("path", {
                "fill-rule": "evenodd",
                d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",
                "clip-rule": "evenodd"
              })
            ]))
          ];
        }
      }),
      _: 1
    }, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`</div><div class="hidden sm:flex-col sm:flex sm:items-center sm:justify-center mx-auto"><div class="pb-2"><p class="text-sm text-gray-700"> Mostrando ${ssrInterpolate(" ")} <span class="font-medium">${ssrInterpolate($props.paginating.from)}</span> ${ssrInterpolate(" ")} a ${ssrInterpolate(" ")} <span class="font-medium">${ssrInterpolate($props.paginating.to)}</span> ${ssrInterpolate(" ")} de ${ssrInterpolate(" ")} <span class="font-medium">${ssrInterpolate($props.paginating.total)}</span> ${ssrInterpolate(" ")} resultados </p></div>`);
  if ($props.paginating.links.length > 3) {
    _push(`<div><nav class="relative z-0 inline-flex rounded-md space-x-1"${ssrRenderAttr("aria-label", `page-${$props.paginating.current_page}`)}>`);
    _push(ssrRenderComponent(_component_Link, {
      href: $props.paginating.prev_page_url,
      class: "relative flex justify-center items-center h-8 w-8 text-center rounded-full border border-gray-300 bg-white text-sm font-semibold text-gray-500 hover:bg-gray-50"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<span class="sr-only"${_scopeId}>Previous</span><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"${_scopeId}><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"${_scopeId}></path></svg>`);
        } else {
          return [
            createVNode("span", { class: "sr-only" }, "Previous"),
            (openBlock(), createBlock("svg", {
              class: "w-5 h-5",
              fill: "currentColor",
              viewBox: "0 0 20 20"
            }, [
              createVNode("path", {
                "fill-rule": "evenodd",
                d: "M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z",
                "clip-rule": "evenodd"
              })
            ]))
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`<!--[-->`);
    ssrRenderList($props.paginating.links, (link, key) => {
      _push(`<span>`);
      if (key > 0 && key < 14 && key <= $props.paginating.last_page) {
        _push(ssrRenderComponent(_component_Link, {
          key: `link-${key}`,
          href: link.url,
          class: ["bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative flex justify-center items-center h-8 w-8 text-center border text-sm font-medium rounded-full", { "z-10 bg-gradient-to-t from-blue-brand-gradient1 to-blue-brand-gradient2 border-blue-brand text-white": link.active }]
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</span>`);
    });
    _push(`<!--]-->`);
    _push(ssrRenderComponent(_component_Link, {
      href: $props.paginating.next_page_url,
      class: "relative flex justify-center items-center h-8 w-8 text-center rounded-full border border-gray-300 bg-white text-sm font-semibold text-gray-500 hover:bg-gray-50"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<span class="sr-only"${_scopeId}>Next</span><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"${_scopeId}><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"${_scopeId}></path></svg>`);
        } else {
          return [
            createVNode("span", { class: "sr-only" }, "Next"),
            (openBlock(), createBlock("svg", {
              class: "w-5 h-5",
              fill: "currentColor",
              viewBox: "0 0 20 20"
            }, [
              createVNode("path", {
                "fill-rule": "evenodd",
                d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",
                "clip-rule": "evenodd"
              })
            ]))
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</nav></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Pagination.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Pagination = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Pagination as P
};
