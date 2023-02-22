import { defineComponent, resolveComponent, mergeProps, withCtx, createVNode, createTextVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, createCommentVNode, useSSRContext } from "vue";
import { A as AppLayout } from "./AppLayout.ea9195d2.mjs";
import { Link } from "@inertiajs/inertia-vue3";
import { CheckIcon } from "@heroicons/vue/solid";
import { ClockIcon } from "@heroicons/vue/outline";
import { ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.43be4956.mjs";
import "./ResponsiveNavLink.105dcaab.mjs";
import "./logoweb.e431fb6b.mjs";
import "./NavLink.e5cf4d5a.mjs";
import "@fortawesome/vue-fontawesome";
import "@fortawesome/fontawesome-svg-core";
import "@fortawesome/free-solid-svg-icons";
import "@fortawesome/free-brands-svg-icons";
const _sfc_main = defineComponent({
  components: {
    AppLayout,
    CheckIcon,
    ClockIcon,
    Link
  },
  props: ["transactions", "accounts", "requirement_user"],
  methods: {
    transactionType(transaction) {
      if (transaction.type === 0) {
        return "Retiro";
      } else if (transaction.type === 1) {
        return "Dep\xF3sito";
      } else if (transaction.type === 2) {
        return "Compra de saldo";
      } else if (transaction.type === 3) {
        return "Venta de saldo";
      }
    }
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_app_layout = resolveComponent("app-layout");
  const _component_Link = resolveComponent("Link");
  const _component_CheckIcon = resolveComponent("CheckIcon");
  const _component_ClockIcon = resolveComponent("ClockIcon");
  _push(ssrRenderComponent(_component_app_layout, mergeProps({ title: "Dashboard" }, _attrs), {
    header: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h2 class="font-semibold text-xl text-gray-700 leading-tight"${_scopeId}> Dashboard </h2>`);
      } else {
        return [
          createVNode("h2", { class: "font-semibold text-xl text-gray-700 leading-tight" }, " Dashboard ")
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        if (_ctx.$page.props.user.requirement_user.verified === 2 && _ctx.$page.props.user.accounts[0] && _ctx.transactions[0]) {
          _push2(`<div class="px-3 py-5 md:p-6 lg:mr-4 max-w-full flex flex-col shadow border border-gray-200 sm:rounded-lg bg-white"${_scopeId}><div class="flex justify-center items-center mb-6"${_scopeId}><h1 class="text-3xl text-black/75 font-semibold text-center"${_scopeId}>\xDAltimas Transacciones</h1></div><div class="min-w-full overflow-auto border border-gray-200 rounded-lg"${_scopeId}><table class="min-w-full divide-y divide-gray-200"${_scopeId}><thead class="bg-gray-50"${_scopeId}><tr${_scopeId}><th scope="col" class="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"${_scopeId}> Tipo </th><th scope="col" class="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"${_scopeId}> Company </th><th scope="col" class="hidden md:block px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"${_scopeId}> Cuenta </th><th scope="col" class="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"${_scopeId}> Monto USD </th><th scope="col" class="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"${_scopeId}> Estado </th></tr></thead>`);
          if (_ctx.transactions[0]) {
            _push2(`<tbody class="bg-white divide-y divide-gray-200"${_scopeId}><!--[-->`);
            ssrRenderList(_ctx.transactions, (transaction) => {
              _push2(`<tr${_scopeId}><td class="${ssrRenderClass([{ "text-blue-brand-gradient2": transaction.type === 1, "text-red-400": transaction.type === 0, "text-green-400": transaction.type === 2, "text-purple-400": transaction.type === 3 }, "px-4 py-4 text-center whitespace-nowrap text-sm"])}"${_scopeId}>${ssrInterpolate(_ctx.transactionType(transaction))}</td>`);
              if (transaction.type < 2) {
                _push2(`<td class="${ssrRenderClass([{ "text-green-500": transaction.transactionable.broker_id === 1, "text-blue-800": transaction.transactionable.broker_id === 2 }, "px-4 py-4 text-center whitespace-nowrap text-sm text-gray-500 font-semibold"])}"${_scopeId}>${ssrInterpolate(transaction.transactionable.broker_id === 1 ? "FBS" : "Pepperstone")}</td>`);
              } else {
                _push2(`<!---->`);
              }
              if (transaction.type > 1) {
                _push2(`<td class="${ssrRenderClass([{ "text-rose-800": transaction.transactionable.wallet_id === 1, "text-green-500": transaction.transactionable.wallet_id === 2 }, "px-4 py-4 text-center whitespace-nowrap text-sm text-gray-500 font-semibold"])}"${_scopeId}>${ssrInterpolate(transaction.transactionable.wallet_id === 1 ? "Skrill" : "Neteller")}</td>`);
              } else {
                _push2(`<!---->`);
              }
              if (transaction.type < 2) {
                _push2(`<td class="hidden md:block px-4 py-4 text-center whitespace-nowrap text-sm text-gray-500"${_scopeId}>${ssrInterpolate(transaction.transactionable.id === 1 ? "No disponible" : transaction.transactionable.number)}</td>`);
              } else {
                _push2(`<!---->`);
              }
              if (transaction.type > 1) {
                _push2(`<td class="hidden md:block px-4 py-4 text-center whitespace-nowrap text-sm text-gray-500"${_scopeId}>${ssrInterpolate(transaction.transactionable.email)}</td>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<td class="px-4 py-4 text-center whitespace-nowrap text-sm text-gray-500"${_scopeId}>${ssrInterpolate(transaction.amount_usd)}</td><td class="${ssrRenderClass([{ "text-green-500": transaction.status === "Realizado", "text-red-500": transaction.status === "Cancelado", "text-orange-500": transaction.status === "Pendiente" }, "px-4 py-4 text-center whitespace-nowrap text-sm text-gray-500"])}"${_scopeId}>${ssrInterpolate(transaction.status)}</td></tr>`);
            });
            _push2(`<!--]--></tbody>`);
          } else {
            _push2(`<tbody class="bg-white divide-y divide-gray-200"${_scopeId}><tr${_scopeId}><td class="px-6 py-4 w-full text-base text-gray-500 text-center" colspan="4"${_scopeId}>No tienes transacciones</td></tr></tbody>`);
          }
          _push2(`</table></div></div>`);
        } else {
          _push2(`<div class="px-3 py-5 md:p-6 lg:mr-4 max-w-full flex flex-col shadow border border-gray-200 sm:rounded-lg bg-white"${_scopeId}><div class="flex flex-col justify-center items-center mb-6"${_scopeId}><h1 class="text-3xl text-black/75 font-semibold p-3 text-center"${_scopeId}>Primeros pasos</h1><p class="text-lg md:text-xl text-black/40 font-medium px-4 md:px-8 text-justify mb-5"${_scopeId}> Gracias por registrarte en ExchangeLatam, debes realizar los siguientes pasos para poder hacer uso de nuestros servicios de dep\xF3sitos y retiros: </p></div><div class="grid grid-cols-5 w-full my-5"${_scopeId}><div class="col-span-5 lg:col-start-2 lg:col-span-3 grid grid-cols-10 lg:grid-cols-5 gap-y-3"${_scopeId}><div class="col-span-2 lg:col-span-1 flex justify-center items-center text-center"${_scopeId}><div class="${ssrRenderClass([{ "bg-slate-200 border-2 border-blue-brand text-dark-brand": _ctx.$page.props.user.requirement_user.info_ok === 0, "bg-gradient-to-t from-blue-brand-gradient1 to-blue-brand-gradient2 border-blue-brand text-white border-none": _ctx.$page.props.user.requirement_user.info_ok === 1 }, "w-12 h-12 rounded-full relative flex justify-center items-center text-center text-3xl"])}"${_scopeId}> 1 </div></div><div class="col-span-5 lg:col-span-3 flex justify-start items-center"${_scopeId}><span class="text-lg md:text-xl text-black/40 font-medium"${_scopeId}>Completar tu informaci\xF3n personal</span></div><div class="col-span-3 lg:col-span-1 flex justify-center items-center text-center"${_scopeId}>`);
          if (_ctx.$page.props.user.requirement_user.info_ok !== 1) {
            _push2(ssrRenderComponent(_component_Link, {
              href: _ctx.route("user.edit"),
              class: "inline-flex items-center px-2 py-1 bg-dark-brand border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Completar `);
                } else {
                  return [
                    createTextVNode(" Completar ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            _push2(`<span class="text-blue-brand inline-flex items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_CheckIcon, {
              class: "h-10 w-10",
              "aria-hidden": "true"
            }, null, _parent2, _scopeId));
            _push2(`</span>`);
          }
          _push2(`</div><div class="col-span-2 lg:col-span-1 flex justify-center items-center text-center"${_scopeId}><div class="${ssrRenderClass([{ "bg-slate-200 border-2 border-blue-brand text-dark-brand": _ctx.$page.props.user.requirement_user.verified !== 2, "bg-gradient-to-t from-blue-brand-gradient1 to-blue-brand-gradient2 border-blue-brand text-white border-none": _ctx.$page.props.user.requirement_user.verified === 2 }, "w-12 h-12 rounded-full relative flex justify-center items-center text-center text-3xl"])}"${_scopeId}> 2 </div></div><div class="col-span-5 lg:col-span-3 flex justify-start items-center"${_scopeId}><span class="text-lg md:text-xl text-black/40 font-medium"${_scopeId}>Verifica tu cuenta</span></div><div class="col-span-3 lg:col-span-1 flex justify-center items-center text-center"${_scopeId}>`);
          if (_ctx.$page.props.user.requirement_user.verified === 0) {
            _push2(ssrRenderComponent(_component_Link, {
              href: _ctx.route("verification.create"),
              class: "inline-flex items-center px-2 py-1 bg-dark-brand border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Verificar `);
                } else {
                  return [
                    createTextVNode(" Verificar ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else if (_ctx.$page.props.user.requirement_user.verified === 1) {
            _push2(`<span class="text-orange-500 inline-flex items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_ClockIcon, {
              class: "h-10 w-10",
              "aria-hidden": "true"
            }, null, _parent2, _scopeId));
            _push2(`</span>`);
          } else {
            _push2(`<span class="text-blue-brand inline-flex items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_CheckIcon, {
              class: "h-10 w-10",
              "aria-hidden": "true"
            }, null, _parent2, _scopeId));
            _push2(`</span>`);
          }
          _push2(`</div><div class="col-span-2 lg:col-span-1 flex justify-center items-center text-center"${_scopeId}><div class="${ssrRenderClass([{ "bg-slate-200 border-2 border-blue-brand text-dark-brand": _ctx.$page.props.user.accounts[0] == null, "bg-gradient-to-t from-blue-brand-gradient1 to-blue-brand-gradient2 border-blue-brand text-white border-none": _ctx.$page.props.user.accounts[0] }, "w-12 h-12 rounded-full relative flex justify-center items-center text-center text-3xl"])}"${_scopeId}> 3 </div></div><div class="col-span-5 lg:col-span-3 flex justify-start items-center"${_scopeId}><span class="text-lg md:text-xl text-black/40 font-medium"${_scopeId}>Registrar cuenta bancaria para retiros</span></div><div class="col-span-3 lg:col-span-1 flex justify-center items-center text-center"${_scopeId}>`);
          if (_ctx.$page.props.user.accounts[0] == null) {
            _push2(ssrRenderComponent(_component_Link, {
              href: _ctx.route("accounts.create.user"),
              class: "inline-flex items-center px-2 py-1 bg-dark-brand border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Registrar `);
                } else {
                  return [
                    createTextVNode(" Registrar ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            _push2(`<span class="text-blue-brand inline-flex items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_CheckIcon, {
              class: "h-10 w-10",
              "aria-hidden": "true"
            }, null, _parent2, _scopeId));
            _push2(`</span>`);
          }
          _push2(`</div></div></div>`);
          if (_ctx.$page.props.user.requirement_user.verified === 2 && _ctx.$page.props.user.accounts[0]) {
            _push2(`<p class="text-lg md:text-xl text-blue-brand font-medium pt-2 text-center md:px-8 my-6"${_scopeId}> Tu cuenta est\xE1 lista, ya puedes realizar tus transacciones con ExchangeLatam </p>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(`</div>`);
        }
      } else {
        return [
          _ctx.$page.props.user.requirement_user.verified === 2 && _ctx.$page.props.user.accounts[0] && _ctx.transactions[0] ? (openBlock(), createBlock("div", {
            key: 0,
            class: "px-3 py-5 md:p-6 lg:mr-4 max-w-full flex flex-col shadow border border-gray-200 sm:rounded-lg bg-white"
          }, [
            createVNode("div", { class: "flex justify-center items-center mb-6" }, [
              createVNode("h1", { class: "text-3xl text-black/75 font-semibold text-center" }, "\xDAltimas Transacciones")
            ]),
            createVNode("div", { class: "min-w-full overflow-auto border border-gray-200 rounded-lg" }, [
              createVNode("table", { class: "min-w-full divide-y divide-gray-200" }, [
                createVNode("thead", { class: "bg-gray-50" }, [
                  createVNode("tr", null, [
                    createVNode("th", {
                      scope: "col",
                      class: "px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                    }, " Tipo "),
                    createVNode("th", {
                      scope: "col",
                      class: "px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                    }, " Company "),
                    createVNode("th", {
                      scope: "col",
                      class: "hidden md:block px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                    }, " Cuenta "),
                    createVNode("th", {
                      scope: "col",
                      class: "px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                    }, " Monto USD "),
                    createVNode("th", {
                      scope: "col",
                      class: "px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                    }, " Estado ")
                  ])
                ]),
                _ctx.transactions[0] ? (openBlock(), createBlock("tbody", {
                  key: 0,
                  class: "bg-white divide-y divide-gray-200"
                }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(_ctx.transactions, (transaction) => {
                    return openBlock(), createBlock("tr", {
                      key: transaction.id
                    }, [
                      createVNode("td", {
                        class: [{ "text-blue-brand-gradient2": transaction.type === 1, "text-red-400": transaction.type === 0, "text-green-400": transaction.type === 2, "text-purple-400": transaction.type === 3 }, "px-4 py-4 text-center whitespace-nowrap text-sm"]
                      }, toDisplayString(_ctx.transactionType(transaction)), 3),
                      transaction.type < 2 ? (openBlock(), createBlock("td", {
                        key: 0,
                        class: [{ "text-green-500": transaction.transactionable.broker_id === 1, "text-blue-800": transaction.transactionable.broker_id === 2 }, "px-4 py-4 text-center whitespace-nowrap text-sm text-gray-500 font-semibold"]
                      }, toDisplayString(transaction.transactionable.broker_id === 1 ? "FBS" : "Pepperstone"), 3)) : createCommentVNode("", true),
                      transaction.type > 1 ? (openBlock(), createBlock("td", {
                        key: 1,
                        class: [{ "text-rose-800": transaction.transactionable.wallet_id === 1, "text-green-500": transaction.transactionable.wallet_id === 2 }, "px-4 py-4 text-center whitespace-nowrap text-sm text-gray-500 font-semibold"]
                      }, toDisplayString(transaction.transactionable.wallet_id === 1 ? "Skrill" : "Neteller"), 3)) : createCommentVNode("", true),
                      transaction.type < 2 ? (openBlock(), createBlock("td", {
                        key: 2,
                        class: "hidden md:block px-4 py-4 text-center whitespace-nowrap text-sm text-gray-500"
                      }, toDisplayString(transaction.transactionable.id === 1 ? "No disponible" : transaction.transactionable.number), 1)) : createCommentVNode("", true),
                      transaction.type > 1 ? (openBlock(), createBlock("td", {
                        key: 3,
                        class: "hidden md:block px-4 py-4 text-center whitespace-nowrap text-sm text-gray-500"
                      }, toDisplayString(transaction.transactionable.email), 1)) : createCommentVNode("", true),
                      createVNode("td", { class: "px-4 py-4 text-center whitespace-nowrap text-sm text-gray-500" }, toDisplayString(transaction.amount_usd), 1),
                      createVNode("td", {
                        class: [{ "text-green-500": transaction.status === "Realizado", "text-red-500": transaction.status === "Cancelado", "text-orange-500": transaction.status === "Pendiente" }, "px-4 py-4 text-center whitespace-nowrap text-sm text-gray-500"]
                      }, toDisplayString(transaction.status), 3)
                    ]);
                  }), 128))
                ])) : (openBlock(), createBlock("tbody", {
                  key: 1,
                  class: "bg-white divide-y divide-gray-200"
                }, [
                  createVNode("tr", null, [
                    createVNode("td", {
                      class: "px-6 py-4 w-full text-base text-gray-500 text-center",
                      colspan: "4"
                    }, "No tienes transacciones")
                  ])
                ]))
              ])
            ])
          ])) : (openBlock(), createBlock("div", {
            key: 1,
            class: "px-3 py-5 md:p-6 lg:mr-4 max-w-full flex flex-col shadow border border-gray-200 sm:rounded-lg bg-white"
          }, [
            createVNode("div", { class: "flex flex-col justify-center items-center mb-6" }, [
              createVNode("h1", { class: "text-3xl text-black/75 font-semibold p-3 text-center" }, "Primeros pasos"),
              createVNode("p", { class: "text-lg md:text-xl text-black/40 font-medium px-4 md:px-8 text-justify mb-5" }, " Gracias por registrarte en ExchangeLatam, debes realizar los siguientes pasos para poder hacer uso de nuestros servicios de dep\xF3sitos y retiros: ")
            ]),
            createVNode("div", { class: "grid grid-cols-5 w-full my-5" }, [
              createVNode("div", { class: "col-span-5 lg:col-start-2 lg:col-span-3 grid grid-cols-10 lg:grid-cols-5 gap-y-3" }, [
                createVNode("div", { class: "col-span-2 lg:col-span-1 flex justify-center items-center text-center" }, [
                  createVNode("div", {
                    class: [{ "bg-slate-200 border-2 border-blue-brand text-dark-brand": _ctx.$page.props.user.requirement_user.info_ok === 0, "bg-gradient-to-t from-blue-brand-gradient1 to-blue-brand-gradient2 border-blue-brand text-white border-none": _ctx.$page.props.user.requirement_user.info_ok === 1 }, "w-12 h-12 rounded-full relative flex justify-center items-center text-center text-3xl"]
                  }, " 1 ", 2)
                ]),
                createVNode("div", { class: "col-span-5 lg:col-span-3 flex justify-start items-center" }, [
                  createVNode("span", { class: "text-lg md:text-xl text-black/40 font-medium" }, "Completar tu informaci\xF3n personal")
                ]),
                createVNode("div", { class: "col-span-3 lg:col-span-1 flex justify-center items-center text-center" }, [
                  _ctx.$page.props.user.requirement_user.info_ok !== 1 ? (openBlock(), createBlock(_component_Link, {
                    key: 0,
                    href: _ctx.route("user.edit"),
                    class: "inline-flex items-center px-2 py-1 bg-dark-brand border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Completar ")
                    ]),
                    _: 1
                  }, 8, ["href"])) : (openBlock(), createBlock("span", {
                    key: 1,
                    class: "text-blue-brand inline-flex items-center"
                  }, [
                    createVNode(_component_CheckIcon, {
                      class: "h-10 w-10",
                      "aria-hidden": "true"
                    })
                  ]))
                ]),
                createVNode("div", { class: "col-span-2 lg:col-span-1 flex justify-center items-center text-center" }, [
                  createVNode("div", {
                    class: [{ "bg-slate-200 border-2 border-blue-brand text-dark-brand": _ctx.$page.props.user.requirement_user.verified !== 2, "bg-gradient-to-t from-blue-brand-gradient1 to-blue-brand-gradient2 border-blue-brand text-white border-none": _ctx.$page.props.user.requirement_user.verified === 2 }, "w-12 h-12 rounded-full relative flex justify-center items-center text-center text-3xl"]
                  }, " 2 ", 2)
                ]),
                createVNode("div", { class: "col-span-5 lg:col-span-3 flex justify-start items-center" }, [
                  createVNode("span", { class: "text-lg md:text-xl text-black/40 font-medium" }, "Verifica tu cuenta")
                ]),
                createVNode("div", { class: "col-span-3 lg:col-span-1 flex justify-center items-center text-center" }, [
                  _ctx.$page.props.user.requirement_user.verified === 0 ? (openBlock(), createBlock(_component_Link, {
                    key: 0,
                    href: _ctx.route("verification.create"),
                    class: "inline-flex items-center px-2 py-1 bg-dark-brand border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Verificar ")
                    ]),
                    _: 1
                  }, 8, ["href"])) : _ctx.$page.props.user.requirement_user.verified === 1 ? (openBlock(), createBlock("span", {
                    key: 1,
                    class: "text-orange-500 inline-flex items-center"
                  }, [
                    createVNode(_component_ClockIcon, {
                      class: "h-10 w-10",
                      "aria-hidden": "true"
                    })
                  ])) : (openBlock(), createBlock("span", {
                    key: 2,
                    class: "text-blue-brand inline-flex items-center"
                  }, [
                    createVNode(_component_CheckIcon, {
                      class: "h-10 w-10",
                      "aria-hidden": "true"
                    })
                  ]))
                ]),
                createVNode("div", { class: "col-span-2 lg:col-span-1 flex justify-center items-center text-center" }, [
                  createVNode("div", {
                    class: [{ "bg-slate-200 border-2 border-blue-brand text-dark-brand": _ctx.$page.props.user.accounts[0] == null, "bg-gradient-to-t from-blue-brand-gradient1 to-blue-brand-gradient2 border-blue-brand text-white border-none": _ctx.$page.props.user.accounts[0] }, "w-12 h-12 rounded-full relative flex justify-center items-center text-center text-3xl"]
                  }, " 3 ", 2)
                ]),
                createVNode("div", { class: "col-span-5 lg:col-span-3 flex justify-start items-center" }, [
                  createVNode("span", { class: "text-lg md:text-xl text-black/40 font-medium" }, "Registrar cuenta bancaria para retiros")
                ]),
                createVNode("div", { class: "col-span-3 lg:col-span-1 flex justify-center items-center text-center" }, [
                  _ctx.$page.props.user.accounts[0] == null ? (openBlock(), createBlock(_component_Link, {
                    key: 0,
                    href: _ctx.route("accounts.create.user"),
                    class: "inline-flex items-center px-2 py-1 bg-dark-brand border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Registrar ")
                    ]),
                    _: 1
                  }, 8, ["href"])) : (openBlock(), createBlock("span", {
                    key: 1,
                    class: "text-blue-brand inline-flex items-center"
                  }, [
                    createVNode(_component_CheckIcon, {
                      class: "h-10 w-10",
                      "aria-hidden": "true"
                    })
                  ]))
                ])
              ])
            ]),
            _ctx.$page.props.user.requirement_user.verified === 2 && _ctx.$page.props.user.accounts[0] ? (openBlock(), createBlock("p", {
              key: 0,
              class: "text-lg md:text-xl text-blue-brand font-medium pt-2 text-center md:px-8 my-6"
            }, " Tu cuenta est\xE1 lista, ya puedes realizar tus transacciones con ExchangeLatam ")) : createCommentVNode("", true)
          ]))
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Dash/Dashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Dashboard = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Dashboard as default
};
