import { defineComponent, resolveComponent, mergeProps, withCtx, createTextVNode, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createCommentVNode, useSSRContext } from "vue";
import { A as AppLayoutAdmin } from "./AppLayoutAdmin.8e91ebaa.mjs";
import { Link } from "@inertiajs/inertia-vue3";
import { P as Pagination } from "./Pagination.34de1776.mjs";
import { _ as _sfc_main$1 } from "./Button.feee2cab.mjs";
import { J as JetForm } from "./Form.e2d7b3ed.mjs";
import { _ as _sfc_main$2 } from "./Label.ceceda67.mjs";
import { _ as _sfc_main$3 } from "./Input.c38a320e.mjs";
import { _ as _sfc_main$4 } from "./InputError.bc94ef1e.mjs";
import { J as JetSelect } from "./Select.c13c9df3.mjs";
import "dayjs";
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.43be4956.mjs";
import "./ResponsiveNavLink.105dcaab.mjs";
import "./logoweb.e431fb6b.mjs";
import "./NavLink.e5cf4d5a.mjs";
import "@fortawesome/vue-fontawesome";
import "@fortawesome/fontawesome-svg-core";
import "@fortawesome/free-solid-svg-icons";
import "@fortawesome/free-brands-svg-icons";
import "@headlessui/vue";
import "@heroicons/vue/solid";
const _sfc_main = defineComponent({
  components: {
    AppLayoutAdmin,
    Link,
    Pagination,
    Button: _sfc_main$1,
    Form: JetForm,
    Label: _sfc_main$2,
    Input: _sfc_main$3,
    InputError: _sfc_main$4,
    Select: JetSelect
  },
  props: {
    tradingAccounts: Object,
    client: Object
  },
  setup() {
    let status = [
      {
        id: 0,
        name: "No"
      },
      {
        id: 1,
        name: "Si"
      }
    ];
    return {
      status
    };
  },
  data() {
    return {
      form: this.$inertia.form({
        user_id: this.client.id,
        broker_id: 1,
        number: null,
        vip: this.status[1]
      })
    };
  },
  methods: {
    vip(accountVip) {
      if (accountVip === 1) {
        return "SI";
      }
      return "NO";
    },
    submit() {
      this.form.transform((data) => ({
        ...data,
        vip: data.vip.id
      })).post(route("admin.userTradingAccountStore"), {
        errorBag: "admin.userTradingAccountStore",
        preserveScroll: true,
        onSuccess: () => this.form.reset("number")
      });
    }
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_app_layout_admin = resolveComponent("app-layout-admin");
  const _component_Link = resolveComponent("Link");
  const _component_Form = resolveComponent("Form");
  const _component_Label = resolveComponent("Label");
  const _component_Input = resolveComponent("Input");
  const _component_InputError = resolveComponent("InputError");
  const _component_Select = resolveComponent("Select");
  const _component_Button = resolveComponent("Button");
  const _component_pagination = resolveComponent("pagination");
  _push(ssrRenderComponent(_component_app_layout_admin, mergeProps({ title: "Trading Accounts" }, _attrs), {
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
          href: _ctx.route("admin.userShow", _ctx.client.id),
          class: "text-blue-brand-gradient1 font-semibold hover:text-blue-brand"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Perfil Usuario/`);
            } else {
              return [
                createTextVNode("Perfil Usuario/")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(` Trading Accounts </h2>`);
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
              href: _ctx.route("admin.userShow", _ctx.client.id),
              class: "text-blue-brand-gradient1 font-semibold hover:text-blue-brand"
            }, {
              default: withCtx(() => [
                createTextVNode("Perfil Usuario/")
              ]),
              _: 1
            }, 8, ["href"]),
            createTextVNode(" Trading Accounts ")
          ])
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="px-3 pt-5 md:pt-6 mb-4 lg:mr-4 max-w-full flex flex-col shadow border border-gray-200 sm:rounded-lg bg-white"${_scopeId}><div class="flex items-center justify-center mb-5"${_scopeId}>`);
        if (_ctx.client.picture) {
          _push2(`<div${_scopeId}><div${_scopeId}><img${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/storage/" + _ctx.client.picture)} class="rounded-full h-28 w-28 object-cover"${_scopeId}></div></div>`);
        } else {
          _push2(`<div${_scopeId}><div${_scopeId}><img${ssrRenderAttr("src", _ctx.client.profile_photo_url)}${ssrRenderAttr("alt", _ctx.client.name)} class="rounded-full h-28 w-28 object-cover"${_scopeId}></div></div>`);
        }
        _push2(`<div class="flex flex-col ml-5"${_scopeId}><span class="text-xl md:text-2xl text-black/75 font-semibold"${_scopeId}>${ssrInterpolate(_ctx.client.name + " " + _ctx.client.lastname)}</span><span class="text-black/50 font-medium"${_scopeId}>Trading Accounts</span></div></div><div class="flex justify-end items-center mb-6"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Form, {
          onSubmitted: _ctx.submit,
          class: "w-1/2"
        }, {
          form: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="col-span-3 md:col-span-2"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_Label, {
                for: "number",
                value: "N\xFAmero"
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_Input, {
                id: "number",
                type: "number",
                class: "mt-1 block w-full",
                modelValue: _ctx.form.number,
                "onUpdate:modelValue": ($event) => _ctx.form.number = $event
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_InputError, {
                message: _ctx.form.errors.number,
                class: "mt-2"
              }, null, _parent3, _scopeId2));
              _push3(`</div><div class="col-span-3 md:col-span-2"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_Select, {
                selectable: _ctx.status,
                selected: _ctx.form.vip,
                modelValue: _ctx.form.vip,
                "onUpdate:modelValue": ($event) => _ctx.form.vip = $event
              }, {
                title: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` VIP `);
                  } else {
                    return [
                      createTextVNode(" VIP ")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_InputError, {
                message: _ctx.form.errors.vip,
                class: "mt-2"
              }, null, _parent3, _scopeId2));
              _push3(`</div><div class="col-span-6 md:col-span-2 flex justify-center items-end"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_Button, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` Registrar Cuenta `);
                  } else {
                    return [
                      createTextVNode(" Registrar Cuenta ")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div>`);
            } else {
              return [
                createVNode("div", { class: "col-span-3 md:col-span-2" }, [
                  createVNode(_component_Label, {
                    for: "number",
                    value: "N\xFAmero"
                  }),
                  createVNode(_component_Input, {
                    id: "number",
                    type: "number",
                    class: "mt-1 block w-full",
                    modelValue: _ctx.form.number,
                    "onUpdate:modelValue": ($event) => _ctx.form.number = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_component_InputError, {
                    message: _ctx.form.errors.number,
                    class: "mt-2"
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "col-span-3 md:col-span-2" }, [
                  createVNode(_component_Select, {
                    selectable: _ctx.status,
                    selected: _ctx.form.vip,
                    modelValue: _ctx.form.vip,
                    "onUpdate:modelValue": ($event) => _ctx.form.vip = $event
                  }, {
                    title: withCtx(() => [
                      createTextVNode(" VIP ")
                    ]),
                    _: 1
                  }, 8, ["selectable", "selected", "modelValue", "onUpdate:modelValue"]),
                  createVNode(_component_InputError, {
                    message: _ctx.form.errors.vip,
                    class: "mt-2"
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "col-span-6 md:col-span-2 flex justify-center items-end" }, [
                  createVNode(_component_Button, null, {
                    default: withCtx(() => [
                      createTextVNode(" Registrar Cuenta ")
                    ]),
                    _: 1
                  })
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div><div class="min-w-full overflow-auto border border-gray-200 rounded-lg"${_scopeId}><table class="min-w-full divide-y divide-gray-200"${_scopeId}><thead class="bg-gray-50"${_scopeId}><tr${_scopeId}><th scope="col" class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"${_scopeId}> Id </th><th scope="col" class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"${_scopeId}> Usuario </th><th scope="col" class="hidden md:table-cell px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"${_scopeId}> N\xFAmero </th><th scope="col" class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"${_scopeId}> VIP </th><th scope="col" class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"${_scopeId}> Acciones </th></tr></thead>`);
        if (_ctx.tradingAccounts.data[0]) {
          _push2(`<tbody class="bg-white divide-y divide-gray-200"${_scopeId}><!--[-->`);
          ssrRenderList(_ctx.tradingAccounts.data, (tradingAccount) => {
            _push2(`<tr class="odd:bg-white even:bg-gray-50"${_scopeId}><td class="text-center font-semibold px-6 py-4 whitespace-nowrap text-sm"${_scopeId}>${ssrInterpolate(tradingAccount.id)}</td><td class="text-center px-6 py-4 whitespace-nowrap text-sm font-medium"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Link, {
              href: _ctx.route("admin.userShow", tradingAccount.user_id),
              class: "text-indigo-600 hover:text-indigo-900"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(tradingAccount.user.name)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(tradingAccount.user.name), 1)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`</td><td class="px-4 py-4 text-center whitespace-nowrap text-sm text-gray-500"${_scopeId}>${ssrInterpolate(tradingAccount.number)}</td><td class="text-center px-6 py-4 whitespace-nowrap text-sm text-gray-500"${_scopeId}>${ssrInterpolate(_ctx.vip(tradingAccount.vip))}</td><td class="text-center px-6 py-4 whitespace-nowrap text-sm font-medium"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Link, {
              href: _ctx.route("admin.showWalletExchange", tradingAccount.id),
              class: "text-indigo-600 hover:text-indigo-900"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Ver detalles `);
                } else {
                  return [
                    createTextVNode(" Ver detalles ")
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`</td></tr>`);
          });
          _push2(`<!--]--></tbody>`);
        } else {
          _push2(`<tbody class="bg-white divide-y divide-gray-200"${_scopeId}><tr${_scopeId}><td class="px-6 py-4 w-full text-base text-gray-500 text-center" colspan="7"${_scopeId}>No tiene cuentas de trading</td></tr></tbody>`);
        }
        _push2(`</table></div><div class="mt-2"${_scopeId}>`);
        if (_ctx.tradingAccounts.data[0]) {
          _push2(ssrRenderComponent(_component_pagination, {
            class: "border-none",
            paginating: _ctx.tradingAccounts
          }, null, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div></div>`);
      } else {
        return [
          createVNode("div", { class: "px-3 pt-5 md:pt-6 mb-4 lg:mr-4 max-w-full flex flex-col shadow border border-gray-200 sm:rounded-lg bg-white" }, [
            createVNode("div", { class: "flex items-center justify-center mb-5" }, [
              _ctx.client.picture ? (openBlock(), createBlock("div", { key: 0 }, [
                createVNode("div", null, [
                  createVNode("img", {
                    src: _ctx.$page.props.ziggy.url + "/storage/" + _ctx.client.picture,
                    class: "rounded-full h-28 w-28 object-cover"
                  }, null, 8, ["src"])
                ])
              ])) : (openBlock(), createBlock("div", { key: 1 }, [
                createVNode("div", null, [
                  createVNode("img", {
                    src: _ctx.client.profile_photo_url,
                    alt: _ctx.client.name,
                    class: "rounded-full h-28 w-28 object-cover"
                  }, null, 8, ["src", "alt"])
                ])
              ])),
              createVNode("div", { class: "flex flex-col ml-5" }, [
                createVNode("span", { class: "text-xl md:text-2xl text-black/75 font-semibold" }, toDisplayString(_ctx.client.name + " " + _ctx.client.lastname), 1),
                createVNode("span", { class: "text-black/50 font-medium" }, "Trading Accounts")
              ])
            ]),
            createVNode("div", { class: "flex justify-end items-center mb-6" }, [
              createVNode(_component_Form, {
                onSubmitted: _ctx.submit,
                class: "w-1/2"
              }, {
                form: withCtx(() => [
                  createVNode("div", { class: "col-span-3 md:col-span-2" }, [
                    createVNode(_component_Label, {
                      for: "number",
                      value: "N\xFAmero"
                    }),
                    createVNode(_component_Input, {
                      id: "number",
                      type: "number",
                      class: "mt-1 block w-full",
                      modelValue: _ctx.form.number,
                      "onUpdate:modelValue": ($event) => _ctx.form.number = $event
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_component_InputError, {
                      message: _ctx.form.errors.number,
                      class: "mt-2"
                    }, null, 8, ["message"])
                  ]),
                  createVNode("div", { class: "col-span-3 md:col-span-2" }, [
                    createVNode(_component_Select, {
                      selectable: _ctx.status,
                      selected: _ctx.form.vip,
                      modelValue: _ctx.form.vip,
                      "onUpdate:modelValue": ($event) => _ctx.form.vip = $event
                    }, {
                      title: withCtx(() => [
                        createTextVNode(" VIP ")
                      ]),
                      _: 1
                    }, 8, ["selectable", "selected", "modelValue", "onUpdate:modelValue"]),
                    createVNode(_component_InputError, {
                      message: _ctx.form.errors.vip,
                      class: "mt-2"
                    }, null, 8, ["message"])
                  ]),
                  createVNode("div", { class: "col-span-6 md:col-span-2 flex justify-center items-end" }, [
                    createVNode(_component_Button, null, {
                      default: withCtx(() => [
                        createTextVNode(" Registrar Cuenta ")
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _: 1
              }, 8, ["onSubmitted"])
            ]),
            createVNode("div", { class: "min-w-full overflow-auto border border-gray-200 rounded-lg" }, [
              createVNode("table", { class: "min-w-full divide-y divide-gray-200" }, [
                createVNode("thead", { class: "bg-gray-50" }, [
                  createVNode("tr", null, [
                    createVNode("th", {
                      scope: "col",
                      class: "px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                    }, " Id "),
                    createVNode("th", {
                      scope: "col",
                      class: "px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                    }, " Usuario "),
                    createVNode("th", {
                      scope: "col",
                      class: "hidden md:table-cell px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                    }, " N\xFAmero "),
                    createVNode("th", {
                      scope: "col",
                      class: "px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                    }, " VIP "),
                    createVNode("th", {
                      scope: "col",
                      class: "px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                    }, " Acciones ")
                  ])
                ]),
                _ctx.tradingAccounts.data[0] ? (openBlock(), createBlock("tbody", {
                  key: 0,
                  class: "bg-white divide-y divide-gray-200"
                }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(_ctx.tradingAccounts.data, (tradingAccount) => {
                    return openBlock(), createBlock("tr", {
                      key: tradingAccount.id,
                      class: "odd:bg-white even:bg-gray-50"
                    }, [
                      createVNode("td", { class: "text-center font-semibold px-6 py-4 whitespace-nowrap text-sm" }, toDisplayString(tradingAccount.id), 1),
                      createVNode("td", { class: "text-center px-6 py-4 whitespace-nowrap text-sm font-medium" }, [
                        createVNode(_component_Link, {
                          href: _ctx.route("admin.userShow", tradingAccount.user_id),
                          class: "text-indigo-600 hover:text-indigo-900"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(tradingAccount.user.name), 1)
                          ]),
                          _: 2
                        }, 1032, ["href"])
                      ]),
                      createVNode("td", { class: "px-4 py-4 text-center whitespace-nowrap text-sm text-gray-500" }, toDisplayString(tradingAccount.number), 1),
                      createVNode("td", { class: "text-center px-6 py-4 whitespace-nowrap text-sm text-gray-500" }, toDisplayString(_ctx.vip(tradingAccount.vip)), 1),
                      createVNode("td", { class: "text-center px-6 py-4 whitespace-nowrap text-sm font-medium" }, [
                        createVNode(_component_Link, {
                          href: _ctx.route("admin.showWalletExchange", tradingAccount.id),
                          class: "text-indigo-600 hover:text-indigo-900"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Ver detalles ")
                          ]),
                          _: 2
                        }, 1032, ["href"])
                      ])
                    ]);
                  }), 128))
                ])) : (openBlock(), createBlock("tbody", {
                  key: 1,
                  class: "bg-white divide-y divide-gray-200"
                }, [
                  createVNode("tr", null, [
                    createVNode("td", {
                      class: "px-6 py-4 w-full text-base text-gray-500 text-center",
                      colspan: "7"
                    }, "No tiene cuentas de trading")
                  ])
                ]))
              ])
            ]),
            createVNode("div", { class: "mt-2" }, [
              _ctx.tradingAccounts.data[0] ? (openBlock(), createBlock(_component_pagination, {
                key: 0,
                class: "border-none",
                paginating: _ctx.tradingAccounts
              }, null, 8, ["paginating"])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/TradingAccounts/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Index as default
};
