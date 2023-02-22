import { defineComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.43be4956.mjs";
const _sfc_main = defineComponent({
  emits: ["submitted"],
  computed: {
    hasActions() {
      return !!this.$slots.actions;
    }
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<form${ssrRenderAttrs(_attrs)}><div class="${ssrRenderClass([_ctx.hasActions ? "sm:rounded-tl-md sm:rounded-tr-md" : "sm:rounded-md", "px-4 py-5"])}"><div class="grid grid-cols-6 gap-2">`);
  ssrRenderSlot(_ctx.$slots, "form", {}, null, _push, _parent);
  _push(`</div></div>`);
  if (_ctx.hasActions) {
    _push(`<div class="flex items-center justify-end px-4 py-3 bg-gray-50 text-right sm:px-6 shadow sm:rounded-bl-md sm:rounded-br-md">`);
    ssrRenderSlot(_ctx.$slots, "actions", {}, null, _push, _parent);
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</form>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Form.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const JetForm = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  JetForm as J
};
