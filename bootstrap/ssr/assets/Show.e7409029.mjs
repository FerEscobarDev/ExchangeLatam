import { defineComponent, resolveComponent, mergeProps, withCtx, createTextVNode, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, useSSRContext } from "vue";
import { A as AppLayout } from "./AppLayout.ea9195d2.mjs";
import { Link } from "@inertiajs/inertia-vue3";
import { _ as _sfc_main$1 } from "./DialogModal.04a42090.mjs";
import { _ as _sfc_main$3 } from "./Button.feee2cab.mjs";
import { _ as _sfc_main$2 } from "./SecondaryButton.987206fe.mjs";
import dayjs from "dayjs";
import { ssrRenderComponent, ssrRenderClass, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.43be4956.mjs";
import "./ResponsiveNavLink.105dcaab.mjs";
import "./logoweb.e431fb6b.mjs";
import "./NavLink.e5cf4d5a.mjs";
import "@fortawesome/vue-fontawesome";
import "@fortawesome/fontawesome-svg-core";
import "@fortawesome/free-solid-svg-icons";
import "@fortawesome/free-brands-svg-icons";
import "./Modal.688f150f.mjs";
const _sfc_main = defineComponent({
  components: {
    AppLayout,
    Link,
    JetDialogModal: _sfc_main$1,
    JetSecondaryButton: _sfc_main$2,
    JetButton: _sfc_main$3
  },
  props: {
    withdrawal: Object,
    voucher: String
  },
  methods: {
    dateFormat(date) {
      let dateNew = dayjs(date, "YYYY-MM-DD");
      const months = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
      let formatted_date = dateNew.$D + "-" + months[dateNew.$M] + "-" + dateNew.$y;
      return formatted_date;
    },
    showVoucher() {
      this.voucherShow = true;
    },
    closeModal() {
      this.voucherShow = false;
    }
  },
  data() {
    return {
      voucherShow: false,
      voucherExist: this.voucher === null ? true : false
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_app_layout = resolveComponent("app-layout");
  const _component_Link = resolveComponent("Link");
  const _component_jet_button = resolveComponent("jet-button");
  const _component_jet_dialog_modal = resolveComponent("jet-dialog-modal");
  const _component_jet_secondary_button = resolveComponent("jet-secondary-button");
  _push(ssrRenderComponent(_component_app_layout, mergeProps({ title: "Detalle del retiro" }, _attrs), {
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
          href: _ctx.route("users.withdrawals"),
          class: "text-blue-brand-gradient1 font-semibold hover:text-blue-brand"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Retiros de FBS/`);
            } else {
              return [
                createTextVNode("Retiros de FBS/")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`Vista Detallada </h2>`);
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
              href: _ctx.route("users.withdrawals"),
              class: "text-blue-brand-gradient1 font-semibold hover:text-blue-brand"
            }, {
              default: withCtx(() => [
                createTextVNode("Retiros de FBS/")
              ]),
              _: 1
            }, 8, ["href"]),
            createTextVNode("Vista Detallada ")
          ])
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="px-3 pt-5 md:pt-6 mb-4 lg:mr-4 max-w-full flex flex-col shadow border border-gray-200 sm:rounded-lg bg-white"${_scopeId}><div class="grid grid-cols-6 p-4 mx-auto w-full xl:w-4/5 mt-5 h-min"${_scopeId}><div class="col-span-6 md:col-span-3 flex flex-col justify-between items-center"${_scopeId}><h2 class="text-lg text-dark-brand font-semibold mb-2"${_scopeId}> Detalles de la transacci\xF3n </h2><div class="rounded-lg text-dark-brand w-80 flex flex-col items-start"${_scopeId}><span class="flex justify-between items-center w-full"${_scopeId}><span class="text-sm text-gray-600 mr-2"${_scopeId}>Broker: </span><span class="${ssrRenderClass([{ "text-green-500": _ctx.withdrawal.transactionable.broker.id === 1, "text-blue-800": _ctx.withdrawal.transactionable.broker.id === 2 }, "text-sm font-semibold"])}"${_scopeId}>${ssrInterpolate(_ctx.withdrawal.transactionable.broker.name)}</span></span><span class="flex justify-between items-center w-full"${_scopeId}><span class="text-sm text-gray-600 mr-2"${_scopeId}>Cuenta de trading: </span><span class="text-sm font-semibold text-dark-brand"${_scopeId}>${ssrInterpolate(_ctx.withdrawal.transactionable.id === 1 ? "No disponible" : _ctx.withdrawal.transactionable.number)}</span></span><span class="flex justify-between items-center w-full"${_scopeId}><span class="text-sm text-gray-600 mr-2"${_scopeId}>Fecha de aprobaci\xF3n: </span><span class="text-sm font-semibold text-dark-brand"${_scopeId}>${ssrInterpolate(_ctx.dateFormat(_ctx.withdrawal.application_date))}</span></span><span class="flex justify-between items-center w-full"${_scopeId}><span class="text-sm text-gray-600 mr-2"${_scopeId}>Fecha l\xEDmite de pago: </span><span class="text-sm font-semibold text-dark-brand"${_scopeId}>${ssrInterpolate(_ctx.dateFormat(_ctx.withdrawal.expiration_date))}</span></span>`);
        if (_ctx.withdrawal.completed_date) {
          _push2(`<span class="flex justify-between items-center w-full"${_scopeId}><span class="text-sm text-gray-600 mr-2"${_scopeId}>Fecha de finalizaci\xF3n: </span><span class="text-sm font-semibold text-dark-brand"${_scopeId}>${ssrInterpolate(_ctx.dateFormat(_ctx.withdrawal.completed_date))}</span></span>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div></div><div class="col-span-6 md:col-span-3 flex flex-col justify-between items-center mt-5 md:mt-0"${_scopeId}>`);
        if (_ctx.withdrawal.comment) {
          _push2(`<h2 class="text-lg text-dark-brand font-semibold mb-2"${_scopeId}>Comentarios</h2>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`<div class="rounded-lg text-dark-brand w-80 flex flex-col items-start"${_scopeId}><span class="flex items-center w-full"${_scopeId}><span class="text-sm text-gray-600 font-semibold"${_scopeId}>${ssrInterpolate(_ctx.withdrawal.comment)}</span></span></div></div></div><hr scope class="mx-auto w-4/5 border-0 h-[0.5px] bg-gradient-to-r from-slate-300 via-blue-brand to-slate-300 my-2"${_scopeId}><div class="grid grid-cols-6 p-4 mx-auto w-full xl:w-4/5 h-min"${_scopeId}><div class="col-span-6 md:col-span-3 flex flex-col justify-between items-center"${_scopeId}><h2 class="text-lg text-dark-brand font-semibold mb-2"${_scopeId}>Detalles de pago</h2>`);
        if (_ctx.withdrawal.account.number === "000000000") {
          _push2(`<div class="rounded-lg bg-slate-200 text-dark-brand p-4 w-80 flex flex-col items-start"${_scopeId}><span class="text-sm text-gray-600 font-semibold mb-2"${_scopeId}>Los detalles de la cuenta bancaria de este pago no est\xE1n disponibles, por favor revisa el comprobante.</span>`);
          if (_ctx.withdrawal.status === "Realizado") {
            _push2(`<span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 mx-auto"${_scopeId}> Pago Realizado </span>`);
          } else if (_ctx.withdrawal.status === "Pendiente") {
            _push2(`<span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-orange-100 text-orange-800 mx-auto"${_scopeId}> En Progreso ... </span>`);
          } else if (_ctx.withdrawal.status === "Cancelado") {
            _push2(`<span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-orange-100 text-orange-800 mx-auto"${_scopeId}> Transacci\xF3n Rechazada </span>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(`</div>`);
        } else {
          _push2(`<div class="rounded-lg bg-slate-200 text-dark-brand p-4 w-80 flex flex-col items-start"${_scopeId}><span class="font-semibold"${_scopeId}>${ssrInterpolate(_ctx.$page.props.user.name.split(" ", 1) + " " + _ctx.$page.props.user.lastname.split(" ", 1))}</span><span class="flex"${_scopeId}><span class="text-sm text-gray-600 mr-1"${_scopeId}>Documento: </span><span class="text-sm font-semibold text-dark-brand"${_scopeId}>${ssrInterpolate(_ctx.$page.props.user.doc_num)}</span></span><span class="flex"${_scopeId}><span class="text-sm text-gray-600 mr-1"${_scopeId}>Banco: </span><span class="text-sm font-semibold text-dark-brand"${_scopeId}>${ssrInterpolate(_ctx.withdrawal.account.bank.name)}</span></span><span class="flex"${_scopeId}><span class="text-sm text-gray-600 mr-1"${_scopeId}>Cuenta: </span><span class="text-sm font-semibold text-dark-brand"${_scopeId}>${ssrInterpolate(_ctx.withdrawal.account.number)}</span></span><span class="flex mb-2"${_scopeId}><span class="text-sm text-gray-600 mr-1"${_scopeId}>Tipo de Cuenta: </span><span class="text-sm font-semibold text-dark-brand"${_scopeId}>${ssrInterpolate(_ctx.withdrawal.account.type)}</span></span>`);
          if (_ctx.withdrawal.status === "Realizado") {
            _push2(`<span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 mx-auto"${_scopeId}> Pago Realizado </span>`);
          } else if (_ctx.withdrawal.status === "Pendiente") {
            _push2(`<span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-orange-100 text-orange-800 mx-auto"${_scopeId}> Procesando ... </span>`);
          } else if (_ctx.withdrawal.status === "Cancelado") {
            _push2(`<span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-orange-100 text-orange-800 mx-auto"${_scopeId}> Transacci\xF3n Rechazada </span>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(`</div>`);
        }
        _push2(`</div><div class="col-span-6 md:col-span-3 flex flex-col justify-between items-center mt-5 md:mt-0"${_scopeId}><h2 class="text-lg text-dark-brand font-semibold mb-2"${_scopeId}>Resumen de la transacci\xF3n</h2><div class="rounded-lg text-dark-brand w-80 flex flex-col items-center"${_scopeId}><span class="flex justify-between items-center w-full"${_scopeId}><span class="text-sm text-gray-600 mr-1"${_scopeId}>Monto USD: </span><span class="font-semibold text-dark-brand"${_scopeId}>$ ${ssrInterpolate(_ctx.withdrawal.amount_usd.toLocaleString())}</span></span><span class="flex justify-between items-center w-full"${_scopeId}><span class="text-sm text-gray-600 mr-1"${_scopeId}>Monto COP: </span><span class="font-semibold text-dark-brand"${_scopeId}>$ ${ssrInterpolate(_ctx.withdrawal.amount_cop.toLocaleString())}</span></span><span class="flex justify-between items-center w-full"${_scopeId}><span class="text-sm text-gray-600 mr-1"${_scopeId}>Impuesto 4x1000: </span><span class="font-semibold text-dark-brand"${_scopeId}>$ ${ssrInterpolate(_ctx.withdrawal.cuatro_por_mil.toLocaleString())}</span></span><span class="flex justify-between items-center w-full"${_scopeId}><span class="text-sm text-gray-600 mr-1"${_scopeId}>Comisi\xF3n: </span><span class="font-semibold text-dark-brand"${_scopeId}>$ ${ssrInterpolate(_ctx.withdrawal.comission.toLocaleString())}</span></span><span class="flex justify-between items-center w-full"${_scopeId}><span class="text-sm text-gray-600 mr-1"${_scopeId}>Impuesto IVA: </span><span class="font-semibold text-dark-brand"${_scopeId}>$ ${ssrInterpolate(_ctx.withdrawal.iva.toLocaleString())}</span></span><span class="flex justify-between items-center w-full"${_scopeId}><span class="text-sm text-gray-600 mr-1"${_scopeId}>Total a recibir COP: </span><span class="font-semibold text-dark-brand"${_scopeId}>$ ${ssrInterpolate(_ctx.withdrawal.total.toLocaleString())}</span></span></div></div></div><div class="flex flex-col md:flex-row justify-between items-center p-4 mx-auto w-4/5 mb-5 h-min"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_button, {
          onClick: _ctx.showVoucher,
          class: "mx-auto",
          disabled: _ctx.voucherExist
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Ver Comprobante `);
            } else {
              return [
                createTextVNode(" Ver Comprobante ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_jet_dialog_modal, {
          show: _ctx.voucherShow,
          onClose: _ctx.closeModal
        }, {
          title: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Comprobante de transferencia `);
            } else {
              return [
                createTextVNode(" Comprobante de transferencia ")
              ];
            }
          }),
          content: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<img${ssrRenderAttr("src", _ctx.voucher)} alt="No se pudo cargar el comprobante"${_scopeId2}>`);
            } else {
              return [
                createVNode("img", {
                  src: _ctx.voucher,
                  alt: "No se pudo cargar el comprobante"
                }, null, 8, ["src"])
              ];
            }
          }),
          footer: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_jet_secondary_button, { onClick: _ctx.closeModal }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` Cerrar `);
                  } else {
                    return [
                      createTextVNode(" Cerrar ")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_jet_secondary_button, { onClick: _ctx.closeModal }, {
                  default: withCtx(() => [
                    createTextVNode(" Cerrar ")
                  ]),
                  _: 1
                }, 8, ["onClick"])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div></div>`);
      } else {
        return [
          createVNode("div", { class: "px-3 pt-5 md:pt-6 mb-4 lg:mr-4 max-w-full flex flex-col shadow border border-gray-200 sm:rounded-lg bg-white" }, [
            createVNode("div", { class: "grid grid-cols-6 p-4 mx-auto w-full xl:w-4/5 mt-5 h-min" }, [
              createVNode("div", { class: "col-span-6 md:col-span-3 flex flex-col justify-between items-center" }, [
                createVNode("h2", { class: "text-lg text-dark-brand font-semibold mb-2" }, " Detalles de la transacci\xF3n "),
                createVNode("div", { class: "rounded-lg text-dark-brand w-80 flex flex-col items-start" }, [
                  createVNode("span", { class: "flex justify-between items-center w-full" }, [
                    createVNode("span", { class: "text-sm text-gray-600 mr-2" }, "Broker: "),
                    createVNode("span", {
                      class: [{ "text-green-500": _ctx.withdrawal.transactionable.broker.id === 1, "text-blue-800": _ctx.withdrawal.transactionable.broker.id === 2 }, "text-sm font-semibold"]
                    }, toDisplayString(_ctx.withdrawal.transactionable.broker.name), 3)
                  ]),
                  createVNode("span", { class: "flex justify-between items-center w-full" }, [
                    createVNode("span", { class: "text-sm text-gray-600 mr-2" }, "Cuenta de trading: "),
                    createVNode("span", { class: "text-sm font-semibold text-dark-brand" }, toDisplayString(_ctx.withdrawal.transactionable.id === 1 ? "No disponible" : _ctx.withdrawal.transactionable.number), 1)
                  ]),
                  createVNode("span", { class: "flex justify-between items-center w-full" }, [
                    createVNode("span", { class: "text-sm text-gray-600 mr-2" }, "Fecha de aprobaci\xF3n: "),
                    createVNode("span", { class: "text-sm font-semibold text-dark-brand" }, toDisplayString(_ctx.dateFormat(_ctx.withdrawal.application_date)), 1)
                  ]),
                  createVNode("span", { class: "flex justify-between items-center w-full" }, [
                    createVNode("span", { class: "text-sm text-gray-600 mr-2" }, "Fecha l\xEDmite de pago: "),
                    createVNode("span", { class: "text-sm font-semibold text-dark-brand" }, toDisplayString(_ctx.dateFormat(_ctx.withdrawal.expiration_date)), 1)
                  ]),
                  _ctx.withdrawal.completed_date ? (openBlock(), createBlock("span", {
                    key: 0,
                    class: "flex justify-between items-center w-full"
                  }, [
                    createVNode("span", { class: "text-sm text-gray-600 mr-2" }, "Fecha de finalizaci\xF3n: "),
                    createVNode("span", { class: "text-sm font-semibold text-dark-brand" }, toDisplayString(_ctx.dateFormat(_ctx.withdrawal.completed_date)), 1)
                  ])) : createCommentVNode("", true)
                ])
              ]),
              createVNode("div", { class: "col-span-6 md:col-span-3 flex flex-col justify-between items-center mt-5 md:mt-0" }, [
                _ctx.withdrawal.comment ? (openBlock(), createBlock("h2", {
                  key: 0,
                  class: "text-lg text-dark-brand font-semibold mb-2"
                }, "Comentarios")) : createCommentVNode("", true),
                createVNode("div", { class: "rounded-lg text-dark-brand w-80 flex flex-col items-start" }, [
                  createVNode("span", { class: "flex items-center w-full" }, [
                    createVNode("span", { class: "text-sm text-gray-600 font-semibold" }, toDisplayString(_ctx.withdrawal.comment), 1)
                  ])
                ])
              ])
            ]),
            createVNode("hr", {
              scope: "",
              class: "mx-auto w-4/5 border-0 h-[0.5px] bg-gradient-to-r from-slate-300 via-blue-brand to-slate-300 my-2"
            }),
            createVNode("div", { class: "grid grid-cols-6 p-4 mx-auto w-full xl:w-4/5 h-min" }, [
              createVNode("div", { class: "col-span-6 md:col-span-3 flex flex-col justify-between items-center" }, [
                createVNode("h2", { class: "text-lg text-dark-brand font-semibold mb-2" }, "Detalles de pago"),
                _ctx.withdrawal.account.number === "000000000" ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "rounded-lg bg-slate-200 text-dark-brand p-4 w-80 flex flex-col items-start"
                }, [
                  createVNode("span", { class: "text-sm text-gray-600 font-semibold mb-2" }, "Los detalles de la cuenta bancaria de este pago no est\xE1n disponibles, por favor revisa el comprobante."),
                  _ctx.withdrawal.status === "Realizado" ? (openBlock(), createBlock("span", {
                    key: 0,
                    class: "px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 mx-auto"
                  }, " Pago Realizado ")) : _ctx.withdrawal.status === "Pendiente" ? (openBlock(), createBlock("span", {
                    key: 1,
                    class: "px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-orange-100 text-orange-800 mx-auto"
                  }, " En Progreso ... ")) : _ctx.withdrawal.status === "Cancelado" ? (openBlock(), createBlock("span", {
                    key: 2,
                    class: "px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-orange-100 text-orange-800 mx-auto"
                  }, " Transacci\xF3n Rechazada ")) : createCommentVNode("", true)
                ])) : (openBlock(), createBlock("div", {
                  key: 1,
                  class: "rounded-lg bg-slate-200 text-dark-brand p-4 w-80 flex flex-col items-start"
                }, [
                  createVNode("span", { class: "font-semibold" }, toDisplayString(_ctx.$page.props.user.name.split(" ", 1) + " " + _ctx.$page.props.user.lastname.split(" ", 1)), 1),
                  createVNode("span", { class: "flex" }, [
                    createVNode("span", { class: "text-sm text-gray-600 mr-1" }, "Documento: "),
                    createVNode("span", { class: "text-sm font-semibold text-dark-brand" }, toDisplayString(_ctx.$page.props.user.doc_num), 1)
                  ]),
                  createVNode("span", { class: "flex" }, [
                    createVNode("span", { class: "text-sm text-gray-600 mr-1" }, "Banco: "),
                    createVNode("span", { class: "text-sm font-semibold text-dark-brand" }, toDisplayString(_ctx.withdrawal.account.bank.name), 1)
                  ]),
                  createVNode("span", { class: "flex" }, [
                    createVNode("span", { class: "text-sm text-gray-600 mr-1" }, "Cuenta: "),
                    createVNode("span", { class: "text-sm font-semibold text-dark-brand" }, toDisplayString(_ctx.withdrawal.account.number), 1)
                  ]),
                  createVNode("span", { class: "flex mb-2" }, [
                    createVNode("span", { class: "text-sm text-gray-600 mr-1" }, "Tipo de Cuenta: "),
                    createVNode("span", { class: "text-sm font-semibold text-dark-brand" }, toDisplayString(_ctx.withdrawal.account.type), 1)
                  ]),
                  _ctx.withdrawal.status === "Realizado" ? (openBlock(), createBlock("span", {
                    key: 0,
                    class: "px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 mx-auto"
                  }, " Pago Realizado ")) : _ctx.withdrawal.status === "Pendiente" ? (openBlock(), createBlock("span", {
                    key: 1,
                    class: "px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-orange-100 text-orange-800 mx-auto"
                  }, " Procesando ... ")) : _ctx.withdrawal.status === "Cancelado" ? (openBlock(), createBlock("span", {
                    key: 2,
                    class: "px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-orange-100 text-orange-800 mx-auto"
                  }, " Transacci\xF3n Rechazada ")) : createCommentVNode("", true)
                ]))
              ]),
              createVNode("div", { class: "col-span-6 md:col-span-3 flex flex-col justify-between items-center mt-5 md:mt-0" }, [
                createVNode("h2", { class: "text-lg text-dark-brand font-semibold mb-2" }, "Resumen de la transacci\xF3n"),
                createVNode("div", { class: "rounded-lg text-dark-brand w-80 flex flex-col items-center" }, [
                  createVNode("span", { class: "flex justify-between items-center w-full" }, [
                    createVNode("span", { class: "text-sm text-gray-600 mr-1" }, "Monto USD: "),
                    createVNode("span", { class: "font-semibold text-dark-brand" }, "$ " + toDisplayString(_ctx.withdrawal.amount_usd.toLocaleString()), 1)
                  ]),
                  createVNode("span", { class: "flex justify-between items-center w-full" }, [
                    createVNode("span", { class: "text-sm text-gray-600 mr-1" }, "Monto COP: "),
                    createVNode("span", { class: "font-semibold text-dark-brand" }, "$ " + toDisplayString(_ctx.withdrawal.amount_cop.toLocaleString()), 1)
                  ]),
                  createVNode("span", { class: "flex justify-between items-center w-full" }, [
                    createVNode("span", { class: "text-sm text-gray-600 mr-1" }, "Impuesto 4x1000: "),
                    createVNode("span", { class: "font-semibold text-dark-brand" }, "$ " + toDisplayString(_ctx.withdrawal.cuatro_por_mil.toLocaleString()), 1)
                  ]),
                  createVNode("span", { class: "flex justify-between items-center w-full" }, [
                    createVNode("span", { class: "text-sm text-gray-600 mr-1" }, "Comisi\xF3n: "),
                    createVNode("span", { class: "font-semibold text-dark-brand" }, "$ " + toDisplayString(_ctx.withdrawal.comission.toLocaleString()), 1)
                  ]),
                  createVNode("span", { class: "flex justify-between items-center w-full" }, [
                    createVNode("span", { class: "text-sm text-gray-600 mr-1" }, "Impuesto IVA: "),
                    createVNode("span", { class: "font-semibold text-dark-brand" }, "$ " + toDisplayString(_ctx.withdrawal.iva.toLocaleString()), 1)
                  ]),
                  createVNode("span", { class: "flex justify-between items-center w-full" }, [
                    createVNode("span", { class: "text-sm text-gray-600 mr-1" }, "Total a recibir COP: "),
                    createVNode("span", { class: "font-semibold text-dark-brand" }, "$ " + toDisplayString(_ctx.withdrawal.total.toLocaleString()), 1)
                  ])
                ])
              ])
            ]),
            createVNode("div", { class: "flex flex-col md:flex-row justify-between items-center p-4 mx-auto w-4/5 mb-5 h-min" }, [
              createVNode(_component_jet_button, {
                onClick: _ctx.showVoucher,
                class: "mx-auto",
                disabled: _ctx.voucherExist
              }, {
                default: withCtx(() => [
                  createTextVNode(" Ver Comprobante ")
                ]),
                _: 1
              }, 8, ["onClick", "disabled"]),
              createVNode(_component_jet_dialog_modal, {
                show: _ctx.voucherShow,
                onClose: _ctx.closeModal
              }, {
                title: withCtx(() => [
                  createTextVNode(" Comprobante de transferencia ")
                ]),
                content: withCtx(() => [
                  createVNode("img", {
                    src: _ctx.voucher,
                    alt: "No se pudo cargar el comprobante"
                  }, null, 8, ["src"])
                ]),
                footer: withCtx(() => [
                  createVNode(_component_jet_secondary_button, { onClick: _ctx.closeModal }, {
                    default: withCtx(() => [
                      createTextVNode(" Cerrar ")
                    ]),
                    _: 1
                  }, 8, ["onClick"])
                ]),
                _: 1
              }, 8, ["show", "onClose"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Withdrawals/Show.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Show = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Show as default
};
