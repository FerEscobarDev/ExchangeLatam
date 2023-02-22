import { defineComponent, resolveComponent, mergeProps, withCtx, createTextVNode, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createCommentVNode, useSSRContext } from "vue";
import { A as AppLayoutAdmin } from "./AppLayoutAdmin.60b59efd.mjs";
import { Link } from "@inertiajs/inertia-vue3";
import { P as Pagination } from "./Pagination.34de1776.mjs";
import dayjs from "dayjs";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass } from "vue/server-renderer";
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
    AppLayoutAdmin,
    Link,
    Pagination
  },
  props: {
    deposits: Object,
    accounts: Object,
    exchange: Array
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
  const _component_app_layout_admin = resolveComponent("app-layout-admin");
  const _component_Link = resolveComponent("Link");
  const _component_pagination = resolveComponent("pagination");
  _push(ssrRenderComponent(_component_app_layout_admin, mergeProps({ title: "Dep\xF3sitos" }, _attrs), {
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
        _push2(`Listado de dep\xF3sitos </h2>`);
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
            createTextVNode("Listado de dep\xF3sitos ")
          ])
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="py-6 w-full"${_scopeId}><div class="flex mx-auto lg:mr-4"${_scopeId}><div class="container mx-auto sm:px-6 lg:px-8"${_scopeId}><div class="overflow-hidden shadow-xl sm:rounded-lg"${_scopeId}><div class="flex flex-col"${_scopeId}><div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8"${_scopeId}><div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"${_scopeId}><div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"${_scopeId}><table class="min-w-full divide-y divide-gray-200"${_scopeId}><thead class="bg-gray-50"${_scopeId}><tr${_scopeId}><th scope="col" class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"${_scopeId}> Id </th><th scope="col" class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"${_scopeId}> Usuario </th><th scope="col" class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"${_scopeId}> Broker </th><th scope="col" class="hidden md:table-cell px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"${_scopeId}> Cuenta Trading </th><th scope="col" class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"${_scopeId}> Monto USD </th><th scope="col" class="hidden md:table-cell px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"${_scopeId}> Monto COP </th><th scope="col" class="hidden md:table-cell px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"${_scopeId}> Total </th><th scope="col" class="hidden md:table-cell px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"${_scopeId}> Fecha Solicitud </th><th scope="col" class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"${_scopeId}> Estado </th><th scope="col" class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"${_scopeId}> Acciones </th></tr></thead>`);
        if (_ctx.deposits.data[0]) {
          _push2(`<tbody class="bg-white divide-y divide-gray-200"${_scopeId}><!--[-->`);
          ssrRenderList(_ctx.deposits.data, (deposit) => {
            _push2(`<tr class="odd:bg-white even:bg-gray-50"${_scopeId}><td class="text-center font-semibold px-6 py-4 whitespace-nowrap text-sm"${_scopeId}>${ssrInterpolate(deposit.id)}</td><td class="text-center px-6 py-4 whitespace-nowrap text-sm font-medium"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Link, {
              href: _ctx.route("admin.userShow", deposit.user_id),
              class: "text-indigo-600 hover:text-indigo-900"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(deposit.user.name)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(deposit.user.name), 1)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`</td><td class="${ssrRenderClass([{ "text-green-500": deposit.transactionable.broker.id === 1, "text-blue-800": deposit.transactionable.broker.id === 2 }, "text-center font-semibold px-6 py-4 whitespace-nowrap text-sm"])}"${_scopeId}>${ssrInterpolate(deposit.transactionable.broker.name)}</td><td class="text-center hidden md:table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-500"${_scopeId}>${ssrInterpolate(deposit.transactionable.id === 1 ? "No disponible" : deposit.transactionable.number)}</td><td class="text-center px-6 py-4 whitespace-nowrap text-sm text-gray-500"${_scopeId}>${ssrInterpolate(deposit.amount_usd.toLocaleString())}</td><td class="text-center hidden md:table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-500"${_scopeId}>${ssrInterpolate(deposit.amount_cop.toLocaleString())}</td><td class="text-center hidden md:table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-500"${_scopeId}>${ssrInterpolate(deposit.total.toLocaleString())}</td><td class="text-center hidden md:table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-500"${_scopeId}>${ssrInterpolate(_ctx.dateFormat(deposit.application_date))}</td><td class="${ssrRenderClass([{ "text-green-500": deposit.status === "Realizado", "text-red-500": deposit.status === "Cancelado", "text-orange-500": deposit.status === "Pendiente" }, "text-center px-6 py-4 whitespace-nowrap text-sm text-gray-500"])}"${_scopeId}>${ssrInterpolate(deposit.status)}</td><td class="text-center px-6 py-4 whitespace-nowrap text-sm font-medium"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Link, {
              href: _ctx.route("admin.depositShow", deposit.id),
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
        if (_ctx.deposits.data[0]) {
          _push2(ssrRenderComponent(_component_pagination, { paginating: _ctx.deposits }, null, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div></div></div></div></div></div></div></div>`);
      } else {
        return [
          createVNode("div", { class: "py-6 w-full" }, [
            createVNode("div", { class: "flex mx-auto lg:mr-4" }, [
              createVNode("div", { class: "container mx-auto sm:px-6 lg:px-8" }, [
                createVNode("div", { class: "overflow-hidden shadow-xl sm:rounded-lg" }, [
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
                                }, " Id "),
                                createVNode("th", {
                                  scope: "col",
                                  class: "px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                                }, " Usuario "),
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
                            _ctx.deposits.data[0] ? (openBlock(), createBlock("tbody", {
                              key: 0,
                              class: "bg-white divide-y divide-gray-200"
                            }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(_ctx.deposits.data, (deposit) => {
                                return openBlock(), createBlock("tr", {
                                  key: deposit.id,
                                  class: "odd:bg-white even:bg-gray-50"
                                }, [
                                  createVNode("td", { class: "text-center font-semibold px-6 py-4 whitespace-nowrap text-sm" }, toDisplayString(deposit.id), 1),
                                  createVNode("td", { class: "text-center px-6 py-4 whitespace-nowrap text-sm font-medium" }, [
                                    createVNode(_component_Link, {
                                      href: _ctx.route("admin.userShow", deposit.user_id),
                                      class: "text-indigo-600 hover:text-indigo-900"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(deposit.user.name), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["href"])
                                  ]),
                                  createVNode("td", {
                                    class: [{ "text-green-500": deposit.transactionable.broker.id === 1, "text-blue-800": deposit.transactionable.broker.id === 2 }, "text-center font-semibold px-6 py-4 whitespace-nowrap text-sm"]
                                  }, toDisplayString(deposit.transactionable.broker.name), 3),
                                  createVNode("td", { class: "text-center hidden md:table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-500" }, toDisplayString(deposit.transactionable.id === 1 ? "No disponible" : deposit.transactionable.number), 1),
                                  createVNode("td", { class: "text-center px-6 py-4 whitespace-nowrap text-sm text-gray-500" }, toDisplayString(deposit.amount_usd.toLocaleString()), 1),
                                  createVNode("td", { class: "text-center hidden md:table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-500" }, toDisplayString(deposit.amount_cop.toLocaleString()), 1),
                                  createVNode("td", { class: "text-center hidden md:table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-500" }, toDisplayString(deposit.total.toLocaleString()), 1),
                                  createVNode("td", { class: "text-center hidden md:table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-500" }, toDisplayString(_ctx.dateFormat(deposit.application_date)), 1),
                                  createVNode("td", {
                                    class: [{ "text-green-500": deposit.status === "Realizado", "text-red-500": deposit.status === "Cancelado", "text-orange-500": deposit.status === "Pendiente" }, "text-center px-6 py-4 whitespace-nowrap text-sm text-gray-500"]
                                  }, toDisplayString(deposit.status), 3),
                                  createVNode("td", { class: "text-center px-6 py-4 whitespace-nowrap text-sm font-medium" }, [
                                    createVNode(_component_Link, {
                                      href: _ctx.route("admin.depositShow", deposit.id),
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
                          _ctx.deposits.data[0] ? (openBlock(), createBlock(_component_pagination, {
                            key: 0,
                            paginating: _ctx.deposits
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Deposits/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Index as default
};
