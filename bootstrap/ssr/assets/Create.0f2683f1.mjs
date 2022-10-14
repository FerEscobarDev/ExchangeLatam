import { defineComponent, resolveComponent, mergeProps, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { A as AppLayout } from "./AppLayout.8882d74f.mjs";
import AccountForm from "./AccountForm.59886142.mjs";
import { Link } from "@inertiajs/inertia-vue3";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.43be4956.mjs";
import "./ResponsiveNavLink.105dcaab.mjs";
import "./logoweb.e431fb6b.mjs";
import "./NavLink.67838388.mjs";
import "@fortawesome/vue-fontawesome";
import "@fortawesome/fontawesome-svg-core";
import "@fortawesome/free-solid-svg-icons";
import "@fortawesome/free-brands-svg-icons";
import "./Button.feee2cab.mjs";
import "./Form.a498045b.mjs";
import "./Input.c38a320e.mjs";
import "./InputError.bc94ef1e.mjs";
import "./Label.ceceda67.mjs";
import "./ActionMessage.1772107a.mjs";
import "./SecondaryButton.987206fe.mjs";
import "./Select.c3ee249a.mjs";
import "@headlessui/vue";
import "@heroicons/vue/solid";
const _sfc_main = defineComponent({
  props: ["bank", "banks", "account"],
  components: {
    AppLayout,
    AccountForm,
    Link
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_app_layout = resolveComponent("app-layout");
  const _component_Link = resolveComponent("Link");
  const _component_account_form = resolveComponent("account-form");
  _push(ssrRenderComponent(_component_app_layout, mergeProps({ title: "Perfil" }, _attrs), {
    header: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h2 class="font-semibold text-xl text-gray-700 leading-tight"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Link, {
          href: _ctx.route("dashboard"),
          class: "text-blue-brand-gradient1 font-semibold hover:text-blue-brand"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Dashboard/`);
            } else {
              return [
                createTextVNode("Dashboard/")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_Link, {
          href: _ctx.route("accounts.index.user"),
          class: "text-blue-brand-gradient1 font-semibold hover:text-blue-brand"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Datos bancarios/`);
            } else {
              return [
                createTextVNode("Datos bancarios/")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`Registro cuenta bancaria </h2>`);
      } else {
        return [
          createVNode("h2", { class: "font-semibold text-xl text-gray-700 leading-tight" }, [
            createVNode(_component_Link, {
              href: _ctx.route("dashboard"),
              class: "text-blue-brand-gradient1 font-semibold hover:text-blue-brand"
            }, {
              default: withCtx(() => [
                createTextVNode("Dashboard/")
              ]),
              _: 1
            }, 8, ["href"]),
            createVNode(_component_Link, {
              href: _ctx.route("accounts.index.user"),
              class: "text-blue-brand-gradient1 font-semibold hover:text-blue-brand"
            }, {
              default: withCtx(() => [
                createTextVNode("Datos bancarios/")
              ]),
              _: 1
            }, 8, ["href"]),
            createTextVNode("Registro cuenta bancaria ")
          ])
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="py-6 w-full"${_scopeId}><div class="flex mx-auto lg:mr-4"${_scopeId}><div class="container mx-auto sm:px-6 lg:px-8"${_scopeId}><div class="bg-white shadow-xl sm:rounded-lg p-8 overflow-visible"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_account_form, {
          bank: _ctx.bank,
          banks: _ctx.banks,
          account: _ctx.account
        }, null, _parent2, _scopeId));
        _push2(`<p class="text-lg md:text-xl text-black/40 font-medium text-center my-5"${_scopeId}> La cuenta bancaria que registres en ExchangeLatam debe estar a tu nombre y ser\xE1 donde recibir\xE1s los fondos de los retiros que realices desde tu broker. </p></div></div></div></div>`);
      } else {
        return [
          createVNode("div", { class: "py-6 w-full" }, [
            createVNode("div", { class: "flex mx-auto lg:mr-4" }, [
              createVNode("div", { class: "container mx-auto sm:px-6 lg:px-8" }, [
                createVNode("div", { class: "bg-white shadow-xl sm:rounded-lg p-8 overflow-visible" }, [
                  createVNode(_component_account_form, {
                    bank: _ctx.bank,
                    banks: _ctx.banks,
                    account: _ctx.account
                  }, null, 8, ["bank", "banks", "account"]),
                  createVNode("p", { class: "text-lg md:text-xl text-black/40 font-medium text-center my-5" }, " La cuenta bancaria que registres en ExchangeLatam debe estar a tu nombre y ser\xE1 donde recibir\xE1s los fondos de los retiros que realices desde tu broker. ")
                ])
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Accounts/Create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Create = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Create as default
};
