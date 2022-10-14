import { defineComponent, resolveComponent, mergeProps, withCtx, createTextVNode, createVNode, openBlock, createBlock, createCommentVNode, useSSRContext } from "vue";
import { A as AppLayout } from "./AppLayout.8882d74f.mjs";
import AccountsList from "./AccountsList.4e3808ac.mjs";
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
const _sfc_main = defineComponent({
  props: ["account"],
  components: {
    AppLayout,
    AccountsList,
    Link
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_app_layout = resolveComponent("app-layout");
  const _component_Link = resolveComponent("Link");
  const _component_accounts_list = resolveComponent("accounts-list");
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
        _push2(`Datos bancarios </h2>`);
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
            createTextVNode("Datos bancarios ")
          ])
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="py-6 w-full"${_scopeId}><div class="flex mx-auto lg:mr-4"${_scopeId}><div class="container mx-auto sm:px-6 lg:px-8"${_scopeId}><div class="bg-white overflow-hidden shadow-xl sm:rounded-lg p-8"${_scopeId}><h1 class="text-2xl text-black/75 font-semibold text-center mb-4"${_scopeId}>Cuenta Bancaria</h1>`);
        if (_ctx.account == null) {
          _push2(`<p class="text-lg md:text-xl text-black/40 font-medium text-justify my-5"${_scopeId}> La cuenta bancaria que registres en ExchangeLatam debe estar a tu nombre y ser\xE1 donde recibir\xE1s los fondos de los retiros que realices desde tu broker. </p>`);
        } else {
          _push2(`<!---->`);
        }
        if (_ctx.account) {
          _push2(ssrRenderComponent(_component_accounts_list, { account: _ctx.account }, null, _parent2, _scopeId));
        } else {
          _push2(`<div class="max-w-max mx-auto"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_Link, {
            href: _ctx.route("accounts.create.user"),
            class: "inline-flex items-center px-4 py-2 bg-dark-brand border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition"
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(` Registrar Cuenta Bancaria `);
              } else {
                return [
                  createTextVNode(" Registrar Cuenta Bancaria ")
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
          _push2(`</div>`);
        }
        _push2(`</div></div></div></div>`);
      } else {
        return [
          createVNode("div", { class: "py-6 w-full" }, [
            createVNode("div", { class: "flex mx-auto lg:mr-4" }, [
              createVNode("div", { class: "container mx-auto sm:px-6 lg:px-8" }, [
                createVNode("div", { class: "bg-white overflow-hidden shadow-xl sm:rounded-lg p-8" }, [
                  createVNode("h1", { class: "text-2xl text-black/75 font-semibold text-center mb-4" }, "Cuenta Bancaria"),
                  _ctx.account == null ? (openBlock(), createBlock("p", {
                    key: 0,
                    class: "text-lg md:text-xl text-black/40 font-medium text-justify my-5"
                  }, " La cuenta bancaria que registres en ExchangeLatam debe estar a tu nombre y ser\xE1 donde recibir\xE1s los fondos de los retiros que realices desde tu broker. ")) : createCommentVNode("", true),
                  _ctx.account ? (openBlock(), createBlock(_component_accounts_list, {
                    key: 1,
                    account: _ctx.account
                  }, null, 8, ["account"])) : (openBlock(), createBlock("div", {
                    key: 2,
                    class: "max-w-max mx-auto"
                  }, [
                    createVNode(_component_Link, {
                      href: _ctx.route("accounts.create.user"),
                      class: "inline-flex items-center px-4 py-2 bg-dark-brand border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Registrar Cuenta Bancaria ")
                      ]),
                      _: 1
                    }, 8, ["href"])
                  ]))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Accounts/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Index as default
};
