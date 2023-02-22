import { defineComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.43be4956.mjs";
const _sfc_main = defineComponent({
  computed: {
    errors() {
      return this.$page.props.errors;
    },
    hasErrors() {
      return Object.keys(this.errors).length > 0;
    }
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  if (_ctx.hasErrors) {
    _push(`<div${ssrRenderAttrs(_attrs)}><div class="font-medium text-red-600">\xA1Vaya! Algo sali\xF3 mal.</div><ul class="mt-3 list-disc list-inside text-sm text-red-600"><!--[-->`);
    ssrRenderList(_ctx.errors, (error, key) => {
      _push(`<li>${ssrInterpolate(error)}</li>`);
    });
    _push(`<!--]--></ul></div>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ValidationErrors.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const JetValidationErrors = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  JetValidationErrors as J
};
