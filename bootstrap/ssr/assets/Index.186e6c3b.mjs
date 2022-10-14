import { defineComponent, resolveComponent, mergeProps, withCtx, createTextVNode, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, createCommentVNode, useSSRContext } from "vue";
import { A as AppLayout } from "./AppLayout.8882d74f.mjs";
import { Link } from "@inertiajs/inertia-vue3";
import { P as Pagination } from "./Pagination.c197a55d.mjs";
import { ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.43be4956.mjs";
import "./ResponsiveNavLink.105dcaab.mjs";
import "./logoweb.e431fb6b.mjs";
import "./NavLink.67838388.mjs";
import "@fortawesome/vue-fontawesome";
import "@fortawesome/fontawesome-svg-core";
import "@fortawesome/free-solid-svg-icons";
import "@fortawesome/free-brands-svg-icons";
const _sfc_main = defineComponent({
  components: {
    AppLayout,
    Link,
    Pagination
  },
  props: {
    transactions: Object,
    accounts: Object,
    exchange: Array
  },
  methods: {
    dateFormat(date) {
      let dateNew = new Date(date);
      const months = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
      let formatted_date = dateNew.getDate() + "-" + months[dateNew.getMonth()] + "-" + dateNew.getFullYear();
      return formatted_date;
    },
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
  const _component_pagination = resolveComponent("pagination");
  _push(ssrRenderComponent(_component_app_layout, mergeProps({ title: "Wallet Exchange" }, _attrs), {
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
        _push2(`Wallet Exchange </h2>`);
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
            createTextVNode("Wallet Exchange ")
          ])
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="py-6 w-full"${_scopeId}><div class="flex mx-auto lg:mr-4"${_scopeId}><div class="container mx-auto sm:px-6 lg:px-8"${_scopeId}><div class="bg-white overflow-hidden shadow-xl sm:rounded-lg"${_scopeId}><div class="w-full py-2 px-6 h-20 mx-auto flex justify-evenly items-center"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Link, {
          href: _ctx.route("users.createWalletExchangeDeposit"),
          class: "inline-flex items-center px-4 py-2 bg-dark-brand border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Comprar Saldo De Skrill `);
            } else {
              return [
                createTextVNode(" Comprar Saldo De Skrill ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_Link, {
          href: _ctx.route("users.createWalletExchangeWithdrawal"),
          class: "inline-flex items-center px-4 py-2 bg-dark-brand border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Vender Tu Saldo Skrill `);
            } else {
              return [
                createTextVNode(" Vender Tu Saldo Skrill ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div><div class="flex flex-col"${_scopeId}><div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8"${_scopeId}><div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"${_scopeId}><div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"${_scopeId}><table class="min-w-full divide-y divide-gray-200"${_scopeId}><thead class="bg-gray-50"${_scopeId}><tr${_scopeId}><th scope="col" class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"${_scopeId}> Billetera </th><th scope="col" class="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"${_scopeId}> Tipo </th><th scope="col" class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"${_scopeId}> Monto USD </th><th scope="col" class="hidden md:table-cell px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"${_scopeId}> Monto COP </th><th scope="col" class="hidden md:table-cell px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"${_scopeId}> Total </th><th scope="col" class="hidden md:table-cell px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"${_scopeId}> Fecha Solicitud </th><th scope="col" class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"${_scopeId}> Estado </th><th scope="col" class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"${_scopeId}> Acciones </th></tr></thead>`);
        if (_ctx.transactions.data[0]) {
          _push2(`<tbody class="bg-white divide-y divide-gray-200"${_scopeId}><!--[-->`);
          ssrRenderList(_ctx.transactions.data, (transaction) => {
            _push2(`<tr class="odd:bg-white even:bg-gray-50"${_scopeId}><td class="${ssrRenderClass([{ "text-rose-800": transaction.transactionable.wallet.id === 1, "text-green-600": transaction.transactionable.wallet.id === 2 }, "text-center font-semibold px-6 py-4 whitespace-nowrap text-sm"])}"${_scopeId}>${ssrInterpolate(transaction.transactionable.wallet.name)}</td><td class="${ssrRenderClass([{ "text-blue-brand-gradient2": transaction.type === 1, "text-red-400": transaction.type === 0, "text-green-400": transaction.type === 2, "text-purple-400": transaction.type === 3 }, "px-4 py-4 text-center whitespace-nowrap text-sm"])}"${_scopeId}>${ssrInterpolate(_ctx.transactionType(transaction))}</td><td class="text-center px-6 py-4 whitespace-nowrap text-sm text-gray-500"${_scopeId}>${ssrInterpolate(transaction.amount_usd.toLocaleString())}</td><td class="text-center hidden md:table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-500"${_scopeId}>${ssrInterpolate(transaction.amount_cop.toLocaleString())}</td><td class="text-center hidden md:table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-500"${_scopeId}>${ssrInterpolate(transaction.total.toLocaleString())}</td><td class="text-center hidden md:table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-500"${_scopeId}>${ssrInterpolate(_ctx.dateFormat(transaction.application_date))}</td><td class="${ssrRenderClass([{ "text-green-500": transaction.status === "Realizado", "text-red-500": transaction.status === "Cancelado", "text-orange-500": transaction.status === "Pendiente" }, "text-center px-6 py-4 whitespace-nowrap text-sm text-gray-500"])}"${_scopeId}>${ssrInterpolate(transaction.status)}</td><td class="text-center px-6 py-4 whitespace-nowrap text-sm font-medium"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Link, {
              href: _ctx.route("users.showWalletExchange", transaction.id),
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
          _push2(`<tbody class="bg-white divide-y divide-gray-200"${_scopeId}><tr${_scopeId}><td class="px-6 py-4 w-full text-base text-gray-500 text-center" colspan="7"${_scopeId}>No tienes transacciones</td></tr></tbody>`);
        }
        _push2(`</table>`);
        if (_ctx.transactions.data[0]) {
          _push2(ssrRenderComponent(_component_pagination, { paginating: _ctx.transactions }, null, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div></div></div></div></div></div></div></div>`);
      } else {
        return [
          createVNode("div", { class: "py-6 w-full" }, [
            createVNode("div", { class: "flex mx-auto lg:mr-4" }, [
              createVNode("div", { class: "container mx-auto sm:px-6 lg:px-8" }, [
                createVNode("div", { class: "bg-white overflow-hidden shadow-xl sm:rounded-lg" }, [
                  createVNode("div", { class: "w-full py-2 px-6 h-20 mx-auto flex justify-evenly items-center" }, [
                    createVNode(_component_Link, {
                      href: _ctx.route("users.createWalletExchangeDeposit"),
                      class: "inline-flex items-center px-4 py-2 bg-dark-brand border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Comprar Saldo De Skrill ")
                      ]),
                      _: 1
                    }, 8, ["href"]),
                    createVNode(_component_Link, {
                      href: _ctx.route("users.createWalletExchangeWithdrawal"),
                      class: "inline-flex items-center px-4 py-2 bg-dark-brand border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Vender Tu Saldo Skrill ")
                      ]),
                      _: 1
                    }, 8, ["href"])
                  ]),
                  createVNode("div", { class: "flex flex-col" }, [
                    createVNode("div", { class: "-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8" }, [
                      createVNode("div", { class: "py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8" }, [
                        createVNode("div", { class: "shadow overflow-hidden border-b border-gray-200 sm:rounded-lg" }, [
                          createVNode("table", { class: "min-w-full divide-y divide-gray-200" }, [
                            createVNode("thead", { class: "bg-gray-50" }, [
                              createVNode("tr", null, [
                                createVNode("th", {
                                  scope: "col",
                                  class: "px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                                }, " Billetera "),
                                createVNode("th", {
                                  scope: "col",
                                  class: "px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                                }, " Tipo "),
                                createVNode("th", {
                                  scope: "col",
                                  class: "px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                                }, " Monto USD "),
                                createVNode("th", {
                                  scope: "col",
                                  class: "hidden md:table-cell px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                                }, " Monto COP "),
                                createVNode("th", {
                                  scope: "col",
                                  class: "hidden md:table-cell px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                                }, " Total "),
                                createVNode("th", {
                                  scope: "col",
                                  class: "hidden md:table-cell px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                                }, " Fecha Solicitud "),
                                createVNode("th", {
                                  scope: "col",
                                  class: "px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                                }, " Estado "),
                                createVNode("th", {
                                  scope: "col",
                                  class: "px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                                }, " Acciones ")
                              ])
                            ]),
                            _ctx.transactions.data[0] ? (openBlock(), createBlock("tbody", {
                              key: 0,
                              class: "bg-white divide-y divide-gray-200"
                            }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(_ctx.transactions.data, (transaction) => {
                                return openBlock(), createBlock("tr", {
                                  key: transaction.id,
                                  class: "odd:bg-white even:bg-gray-50"
                                }, [
                                  createVNode("td", {
                                    class: [{ "text-rose-800": transaction.transactionable.wallet.id === 1, "text-green-600": transaction.transactionable.wallet.id === 2 }, "text-center font-semibold px-6 py-4 whitespace-nowrap text-sm"]
                                  }, toDisplayString(transaction.transactionable.wallet.name), 3),
                                  createVNode("td", {
                                    class: [{ "text-blue-brand-gradient2": transaction.type === 1, "text-red-400": transaction.type === 0, "text-green-400": transaction.type === 2, "text-purple-400": transaction.type === 3 }, "px-4 py-4 text-center whitespace-nowrap text-sm"]
                                  }, toDisplayString(_ctx.transactionType(transaction)), 3),
                                  createVNode("td", { class: "text-center px-6 py-4 whitespace-nowrap text-sm text-gray-500" }, toDisplayString(transaction.amount_usd.toLocaleString()), 1),
                                  createVNode("td", { class: "text-center hidden md:table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-500" }, toDisplayString(transaction.amount_cop.toLocaleString()), 1),
                                  createVNode("td", { class: "text-center hidden md:table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-500" }, toDisplayString(transaction.total.toLocaleString()), 1),
                                  createVNode("td", { class: "text-center hidden md:table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-500" }, toDisplayString(_ctx.dateFormat(transaction.application_date)), 1),
                                  createVNode("td", {
                                    class: [{ "text-green-500": transaction.status === "Realizado", "text-red-500": transaction.status === "Cancelado", "text-orange-500": transaction.status === "Pendiente" }, "text-center px-6 py-4 whitespace-nowrap text-sm text-gray-500"]
                                  }, toDisplayString(transaction.status), 3),
                                  createVNode("td", { class: "text-center px-6 py-4 whitespace-nowrap text-sm font-medium" }, [
                                    createVNode(_component_Link, {
                                      href: _ctx.route("users.showWalletExchange", transaction.id),
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
                                }, "No tienes transacciones")
                              ])
                            ]))
                          ]),
                          _ctx.transactions.data[0] ? (openBlock(), createBlock(_component_pagination, {
                            key: 0,
                            paginating: _ctx.transactions
                          }, null, 8, ["paginating"])) : createCommentVNode("", true)
                        ])
                      ])
                    ])
                  ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/WalletExchange/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Index as default
};
