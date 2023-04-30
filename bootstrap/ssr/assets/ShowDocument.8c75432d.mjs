import { defineComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.43be4956.mjs";
const _sfc_main = defineComponent({
  props: {
    verification: Object
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-8 gap-4 p-5" }, _attrs))}><h2 class="col-span-8 text-center text-2xl font-semibold text-dark-brand">Documento Cargado</h2><div class="col-span-8 md:col-span-4 min-h-fit rounded-lg p-2 shadow-xl shadow-gray-400 relative">`);
  if (_ctx.verification !== null) {
    _push(`<img class="object-cover h-full w-full rounded-md"${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/storage/" + _ctx.verification.front)} alt="Frontal">`);
  } else {
    _push(`<span>No se han cargado documentos</span>`);
  }
  _push(`</div><div class="col-span-8 md:col-span-4 min-h-fit rounded-lg p-2 shadow-xl shadow-gray-400 relative">`);
  if (_ctx.verification !== null) {
    _push(`<img class="object-cover h-full w-full rounded-md"${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/storage/" + _ctx.verification.back)} alt="Trasera">`);
  } else {
    _push(`<span>No se han cargado documentos</span>`);
  }
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Verifications/Partials/ShowDocument.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ShowDocument = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  ShowDocument as default
};
