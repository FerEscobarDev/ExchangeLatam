import { defineComponent, resolveComponent, mergeProps, withCtx, createTextVNode, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createCommentVNode, useSSRContext } from "vue";
import { A as AppLayout } from "./AppLayout.ea9195d2.mjs";
import { Link } from "@inertiajs/inertia-vue3";
import { P as Pagination } from "./Pagination.34de1776.mjs";
import dayjs from "dayjs";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass } from "vue/server-renderer";
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
    Link,
    Pagination
  },
  props: {
    withdrawals: Object,
    exchange: Number
  },
  methods: {
    dateFormat(date) {
      let dateNew = dayjs(date, "YYYY-MM-DD");
      const months = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
      let formatted_date = dateNew.$D + "-" + months[dateNew.$M] + "-" + dateNew.$y;
      return formatted_date;
    }
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_app_layout = resolveComponent("app-layout");
  const _component_Link = resolveComponent("Link");
  const _component_pagination = resolveComponent("pagination");
  _push(ssrRenderComponent(_component_app_layout, mergeProps({ title: "Retiros" }, _attrs), {
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
        _push2(`Retiros de Broker </h2>`);
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
            createTextVNode("Retiros de Broker ")
          ])
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="px-3 pt-5 md:pt-6 mb-4 lg:mr-4 max-w-full flex flex-col shadow border border-gray-200 sm:rounded-lg bg-white"${_scopeId}><div class="flex justify-end items-center mb-6"${_scopeId}><div class="bg-white/40 drop-shadow-md shadow-xl hover:drop-shadow-lg hover:shadow-2xl sm:rounded-lg w-72 h-28 mx-auto flex justify-between items-center"${_scopeId}><div class="flex flex-col items-center text-center p-3"${_scopeId}><span class="text-lg text-dark-brand font-semibold"${_scopeId}>Tasa de cambio para retiros hoy: </span><span class="text-xl text-blue-brand-gradient1 hover:transition-all hover:text-2xl font-semibold"${_scopeId}>${ssrInterpolate(_ctx.exchange)}</span></div></div></div><div class="min-w-full overflow-auto border border-gray-200 rounded-lg"${_scopeId}><table class="min-w-full divide-y divide-gray-200"${_scopeId}><thead class="bg-gray-50"${_scopeId}><tr${_scopeId}><th scope="col" class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"${_scopeId}> Broker </th><th scope="col" class="hidden md:table-cell px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"${_scopeId}> Cuenta Trading </th><th scope="col" class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"${_scopeId}> Monto USD </th><th scope="col" class="hidden md:table-cell px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"${_scopeId}> Monto COP </th><th scope="col" class="hidden md:table-cell px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"${_scopeId}> Total </th><th scope="col" class="hidden md:table-cell px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"${_scopeId}> Fecha L\xEDmite </th><th scope="col" class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"${_scopeId}> Estado </th><th scope="col" class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"${_scopeId}> Acciones </th></tr></thead>`);
        if (_ctx.withdrawals.data[0]) {
          _push2(`<tbody class="bg-white divide-y divide-gray-200"${_scopeId}><!--[-->`);
          ssrRenderList(_ctx.withdrawals.data, (withdrawal) => {
            _push2(`<tr class="odd:bg-white even:bg-gray-50"${_scopeId}><td class="${ssrRenderClass([{ "text-green-500": withdrawal.transactionable.broker.id === 1, "text-blue-800": withdrawal.transactionable.broker.id === 2 }, "text-center font-semibold px-6 py-4 whitespace-nowrap text-sm"])}"${_scopeId}>${ssrInterpolate(withdrawal.transactionable.broker.name)}</td><td class="text-center hidden md:table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-500"${_scopeId}>${ssrInterpolate(withdrawal.transactionable.id === 1 ? "No disponible" : withdrawal.transactionable.number)}</td><td class="text-center px-6 py-4 whitespace-nowrap text-sm text-gray-500"${_scopeId}>${ssrInterpolate(withdrawal.amount_usd.toLocaleString())}</td><td class="text-center hidden md:table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-500"${_scopeId}>${ssrInterpolate(withdrawal.amount_cop.toLocaleString())}</td><td class="text-center hidden md:table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-500"${_scopeId}>${ssrInterpolate(withdrawal.total.toLocaleString())}</td><td class="text-center hidden md:table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-500"${_scopeId}>${ssrInterpolate(_ctx.dateFormat(withdrawal.expiration_date))}</td><td class="${ssrRenderClass([{ "text-green-500": withdrawal.status === "Realizado", "text-red-500": withdrawal.status === "Cancelado", "text-orange-500": withdrawal.status === "Pendiente" }, "text-center px-6 py-4 whitespace-nowrap text-sm text-gray-500"])}"${_scopeId}>${ssrInterpolate(withdrawal.status)}</td><td class="text-center px-6 py-4 whitespace-nowrap text-sm font-medium"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Link, {
              href: _ctx.route("withdrawal.show", withdrawal.id),
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
          _push2(`<tbody class="bg-white divide-y divide-gray-200"${_scopeId}><tr${_scopeId}><td class="px-6 py-4 w-full text-base text-gray-500 text-center" colspan="8"${_scopeId}>No tienes transacciones</td></tr></tbody>`);
        }
        _push2(`</table></div><div class="mt-2"${_scopeId}>`);
        if (_ctx.withdrawals.data[0]) {
          _push2(ssrRenderComponent(_component_pagination, {
            class: "border-none",
            paginating: _ctx.withdrawals
          }, null, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div></div>`);
      } else {
        return [
          createVNode("div", { class: "px-3 pt-5 md:pt-6 mb-4 lg:mr-4 max-w-full flex flex-col shadow border border-gray-200 sm:rounded-lg bg-white" }, [
            createVNode("div", { class: "flex justify-end items-center mb-6" }, [
              createVNode("div", { class: "bg-white/40 drop-shadow-md shadow-xl hover:drop-shadow-lg hover:shadow-2xl sm:rounded-lg w-72 h-28 mx-auto flex justify-between items-center" }, [
                createVNode("div", { class: "flex flex-col items-center text-center p-3" }, [
                  createVNode("span", { class: "text-lg text-dark-brand font-semibold" }, "Tasa de cambio para retiros hoy: "),
                  createVNode("span", { class: "text-xl text-blue-brand-gradient1 hover:transition-all hover:text-2xl font-semibold" }, toDisplayString(_ctx.exchange), 1)
                ])
              ])
            ]),
            createVNode("div", { class: "min-w-full overflow-auto border border-gray-200 rounded-lg" }, [
              createVNode("table", { class: "min-w-full divide-y divide-gray-200" }, [
                createVNode("thead", { class: "bg-gray-50" }, [
                  createVNode("tr", null, [
                    createVNode("th", {
                      scope: "col",
                      class: "px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                    }, " Broker "),
                    createVNode("th", {
                      scope: "col",
                      class: "hidden md:table-cell px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                    }, " Cuenta Trading "),
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
                    }, " Fecha L\xEDmite "),
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
                _ctx.withdrawals.data[0] ? (openBlock(), createBlock("tbody", {
                  key: 0,
                  class: "bg-white divide-y divide-gray-200"
                }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(_ctx.withdrawals.data, (withdrawal) => {
                    return openBlock(), createBlock("tr", {
                      key: withdrawal.id,
                      class: "odd:bg-white even:bg-gray-50"
                    }, [
                      createVNode("td", {
                        class: [{ "text-green-500": withdrawal.transactionable.broker.id === 1, "text-blue-800": withdrawal.transactionable.broker.id === 2 }, "text-center font-semibold px-6 py-4 whitespace-nowrap text-sm"]
                      }, toDisplayString(withdrawal.transactionable.broker.name), 3),
                      createVNode("td", { class: "text-center hidden md:table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-500" }, toDisplayString(withdrawal.transactionable.id === 1 ? "No disponible" : withdrawal.transactionable.number), 1),
                      createVNode("td", { class: "text-center px-6 py-4 whitespace-nowrap text-sm text-gray-500" }, toDisplayString(withdrawal.amount_usd.toLocaleString()), 1),
                      createVNode("td", { class: "text-center hidden md:table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-500" }, toDisplayString(withdrawal.amount_cop.toLocaleString()), 1),
                      createVNode("td", { class: "text-center hidden md:table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-500" }, toDisplayString(withdrawal.total.toLocaleString()), 1),
                      createVNode("td", { class: "text-center hidden md:table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-500" }, toDisplayString(_ctx.dateFormat(withdrawal.expiration_date)), 1),
                      createVNode("td", {
                        class: [{ "text-green-500": withdrawal.status === "Realizado", "text-red-500": withdrawal.status === "Cancelado", "text-orange-500": withdrawal.status === "Pendiente" }, "text-center px-6 py-4 whitespace-nowrap text-sm text-gray-500"]
                      }, toDisplayString(withdrawal.status), 3),
                      createVNode("td", { class: "text-center px-6 py-4 whitespace-nowrap text-sm font-medium" }, [
                        createVNode(_component_Link, {
                          href: _ctx.route("withdrawal.show", withdrawal.id),
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
                      colspan: "8"
                    }, "No tienes transacciones")
                  ])
                ]))
              ])
            ]),
            createVNode("div", { class: "mt-2" }, [
              _ctx.withdrawals.data[0] ? (openBlock(), createBlock(_component_pagination, {
                key: 0,
                class: "border-none",
                paginating: _ctx.withdrawals
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Withdrawals/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Index as default
};
