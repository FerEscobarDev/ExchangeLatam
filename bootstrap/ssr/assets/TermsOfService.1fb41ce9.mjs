import { defineComponent, resolveComponent, useSSRContext } from "vue";
import { Head } from "@inertiajs/inertia-vue3";
import { _ as _sfc_main$1 } from "./AuthenticationCardLogo.6fd411c3.mjs";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.43be4956.mjs";
import "./logoweb.e431fb6b.mjs";
const _sfc_main = defineComponent({
  props: ["terms"],
  components: {
    Head,
    JetAuthenticationCardLogo: _sfc_main$1
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_jet_authentication_card_logo = resolveComponent("jet-authentication-card-logo");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Head, { title: "Terms of Service" }, null, _parent));
  _push(`<div class="font-sans text-gray-900 antialiased"><div class="pt-4 bg-gradient-to-t from-blue-brand to-dark-brand"><div class="min-h-screen flex flex-col items-center pt-6 sm:pt-0"><div>`);
  _push(ssrRenderComponent(_component_jet_authentication_card_logo, null, null, _parent));
  _push(`</div><div class="w-full sm:max-w-4xl mt-6 p-6 bg-white shadow-md overflow-hidden sm:rounded-lg prose">${_ctx.terms}</div></div></div></div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/TermsOfService.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TermsOfService = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  TermsOfService as default
};
