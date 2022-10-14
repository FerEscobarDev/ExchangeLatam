import { resolveComponent, mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { A as AppLayout } from "./AppLayout.8882d74f.mjs";
import { Link } from "@inertiajs/inertia-vue3";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.43be4956.mjs";
import "./ResponsiveNavLink.105dcaab.mjs";
import "./logoweb.e431fb6b.mjs";
import "./NavLink.67838388.mjs";
import "@fortawesome/vue-fontawesome";
import "@fortawesome/fontawesome-svg-core";
import "@fortawesome/free-solid-svg-icons";
import "@fortawesome/free-brands-svg-icons";
const _sfc_main = {
  props: ["account"],
  components: {
    AppLayout,
    Link
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Link = resolveComponent("Link");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "rounded-lg bg-slate-200 text-dark-brand p-4 w-80 flex flex-col items-start mx-auto" }, _attrs))}><span class="font-semibold">${ssrInterpolate($props.account.user.name + " " + $props.account.user.lastname)}</span><span class="flex"><span class="text-sm text-gray-600 mr-1">Documento: </span><span class="text-sm font-semibold text-dark-brand">${ssrInterpolate($props.account.user.data_user.doc_num)}</span></span><span class="flex"><span class="text-sm text-gray-600 mr-1">Banco: </span><span class="text-sm font-semibold text-dark-brand">${ssrInterpolate($props.account.bank.name)}</span></span><span class="flex"><span class="text-sm text-gray-600 mr-1">Cuenta: </span><span class="text-sm font-semibold text-dark-brand">${ssrInterpolate($props.account.number)}</span></span><span class="flex mb-2"><span class="text-sm text-gray-600 mr-1">Tipo de Cuenta: </span><span class="text-sm font-semibold text-dark-brand">${ssrInterpolate($props.account.type)}</span></span><div class="max-w-max mx-auto mt-2">`);
  _push(ssrRenderComponent(_component_Link, {
    href: _ctx.route("accounts.create.user"),
    class: "inline-flex items-center px-4 py-2 bg-dark-brand border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Cambiar `);
      } else {
        return [
          createTextVNode(" Cambiar ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Accounts/Partials/AccountsList.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const AccountsList = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  AccountsList as default
};
