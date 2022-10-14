import { defineComponent, resolveComponent, mergeProps, withCtx, createTextVNode, createVNode, openBlock, createBlock, toDisplayString, createCommentVNode, withDirectives, vShow, withModifiers, useSSRContext } from "vue";
import { A as AppLayout } from "./AppLayout.8882d74f.mjs";
import { Link } from "@inertiajs/inertia-vue3";
import { _ as _sfc_main$1 } from "./DialogModal.04a42090.mjs";
import { _ as _sfc_main$3 } from "./Button.feee2cab.mjs";
import { _ as _sfc_main$2 } from "./SecondaryButton.987206fe.mjs";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { ssrRenderComponent, ssrRenderClass, ssrInterpolate, ssrRenderAttr, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.43be4956.mjs";
import "./ResponsiveNavLink.105dcaab.mjs";
import "./logoweb.e431fb6b.mjs";
import "./NavLink.67838388.mjs";
import "@fortawesome/free-brands-svg-icons";
import "./Modal.688f150f.mjs";
library.add(faUpload);
const _sfc_main = defineComponent({
  components: {
    AppLayout,
    Link,
    JetDialogModal: _sfc_main$1,
    JetSecondaryButton: _sfc_main$2,
    JetButton: _sfc_main$3,
    FontAwesomeIcon
  },
  props: ["transaction", "voucher"],
  data() {
    return {
      voucherShow: false,
      voucherExist: this.voucher === null ? true : false,
      form: this.$inertia.form({
        _method: "PUT",
        voucherUp: null
      }),
      voucherPreview: null
    };
  },
  methods: {
    dateFormat(date) {
      let dateNew = new Date(date);
      const months = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
      let formatted_date = dateNew.getDate() + "-" + months[dateNew.getMonth()] + "-" + dateNew.getFullYear();
      return formatted_date;
    },
    showVoucher() {
      this.voucherShow = true;
    },
    closeModal() {
      this.voucherShow = false;
    },
    submit() {
      if (this.$refs.voucherUp) {
        this.form.voucherUp = this.$refs.voucherUp.files[0];
      }
      this.form.post(this.route("users.voucherUpWalletExchange", this.transaction.id), {
        onSuccess: () => this.clearFileInput()
      });
    },
    selectFile() {
      this.$refs.voucherUp.click();
    },
    updateVoucherPreview() {
      const voucherc = this.$refs.voucherUp.files[0];
      if (this.voucher)
        ;
      if (!voucherc)
        return;
      const reader = new FileReader();
      reader.onload = (e) => {
        this.voucherPreview = e.target.result;
      };
      reader.readAsDataURL(voucherc);
    },
    clearFileInput() {
      var _a;
      if ((_a = this.$refs.voucherUp) == null ? void 0 : _a.value) {
        this.$refs.voucherUp.value = null;
        this.voucherExist = false;
        this.voucherPreview = null;
      }
    }
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_app_layout = resolveComponent("app-layout");
  const _component_Link = resolveComponent("Link");
  const _component_jet_button = resolveComponent("jet-button");
  const _component_jet_dialog_modal = resolveComponent("jet-dialog-modal");
  const _component_jet_secondary_button = resolveComponent("jet-secondary-button");
  const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
  _push(ssrRenderComponent(_component_app_layout, mergeProps({ title: "Detalle del dep\xF3sito" }, _attrs), {
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
          href: _ctx.route("users.indexWalletExchange"),
          class: "text-blue-brand-gradient1 font-semibold hover:text-blue-brand"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Wallet Exchange/`);
            } else {
              return [
                createTextVNode("Wallet Exchange/")
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
              href: _ctx.route("users.indexWalletExchange"),
              class: "text-blue-brand-gradient1 font-semibold hover:text-blue-brand"
            }, {
              default: withCtx(() => [
                createTextVNode("Wallet Exchange/")
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
        _push2(`<div class="py-6 w-full"${_scopeId}><div class="flex mx-auto lg:mr-4"${_scopeId}><div class="container mx-auto sm:px-6 lg:px-8"${_scopeId}><div class="bg-white shadow-xl sm:rounded-lg flex flex-col"${_scopeId}><div class="grid grid-cols-6 p-4 mx-auto w-full xl:w-4/5 mt-5 h-min"${_scopeId}><div class="col-span-6 md:col-span-3 flex flex-col justify-between items-center"${_scopeId}><h2 class="text-lg text-dark-brand font-semibold mb-2"${_scopeId}> Detalles de la transacci\xF3n </h2><div class="rounded-lg text-dark-brand w-80 flex flex-col items-start"${_scopeId}><span class="flex justify-between items-center w-full"${_scopeId}><span class="text-sm text-gray-600 mr-2"${_scopeId}>Wallet: </span><span class="${ssrRenderClass([{ "text-rose-800": _ctx.transaction.transactionable.wallet.id === 1, "text-green-500": _ctx.transaction.transactionable.wallet.id === 2 }, "text-sm font-semibold"])}"${_scopeId}>${ssrInterpolate(_ctx.transaction.transactionable.wallet.name)}</span></span><span class="flex justify-between items-center w-full"${_scopeId}><span class="text-sm text-gray-600 mr-2"${_scopeId}>Cuenta: </span><span class="text-sm font-semibold text-dark-brand"${_scopeId}>${ssrInterpolate(_ctx.transaction.transactionable.email)}</span></span><span class="flex justify-between items-center w-full"${_scopeId}><span class="text-sm text-gray-600 mr-2"${_scopeId}>Fecha de solicitud: </span><span class="text-sm font-semibold text-dark-brand"${_scopeId}>${ssrInterpolate(_ctx.dateFormat(_ctx.transaction.application_date))}</span></span>`);
        if (_ctx.transaction.completed_date) {
          _push2(`<span class="flex justify-between items-center w-full"${_scopeId}><span class="text-sm text-gray-600 mr-2"${_scopeId}>Fecha de finalizaci\xF3n: </span><span class="text-sm font-semibold text-dark-brand"${_scopeId}>${ssrInterpolate(_ctx.dateFormat(_ctx.transaction.completed_date))}</span></span>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div></div><div class="col-span-6 md:col-span-3 flex flex-col justify-between items-center mt-5 md:mt-0"${_scopeId}>`);
        if (_ctx.transaction.comment) {
          _push2(`<h2 class="text-lg text-dark-brand font-semibold mb-2"${_scopeId}>Comentarios</h2>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`<div class="rounded-lg text-dark-brand w-80 flex flex-col items-start"${_scopeId}><span class="flex items-center w-full"${_scopeId}><span class="text-sm text-gray-600 font-semibold"${_scopeId}>${ssrInterpolate(_ctx.transaction.comment)}</span></span></div></div></div><hr scope class="mx-auto w-4/5 border-0 h-[0.5px] bg-gradient-to-r from-slate-300 via-blue-brand to-slate-300 my-2"${_scopeId}><div class="grid grid-cols-6 p-4 mx-auto w-full xl:w-4/5 h-min"${_scopeId}><div class="col-span-6 md:col-span-3 flex flex-col justify-between items-center"${_scopeId}><h2 class="text-lg text-dark-brand font-semibold mb-2"${_scopeId}>Detalles de pago</h2><div class="rounded-lg text-dark-brand w-80 flex flex-col items-center pb-3"${_scopeId}>`);
        if (_ctx.transaction.type === 2) {
          _push2(`<span class="flex justify-between items-center w-full"${_scopeId}><span class="text-sm text-gray-600 mr-1"${_scopeId}>Debes realizar el pago a la siguiente cuenta bancaria por medio de transferencia o consignaci\xF3n:</span></span>`);
        } else {
          _push2(`<span class="flex justify-between items-center w-full"${_scopeId}><span class="text-sm text-gray-600 mr-1"${_scopeId}>Debes transferir el monto que deseas vender a la siguiente cuenta de Skrill:</span></span>`);
        }
        _push2(`</div>`);
        if (_ctx.transaction.type === 2) {
          _push2(`<div class="rounded-lg bg-slate-200 text-dark-brand p-4 w-80 flex flex-col items-start"${_scopeId}>`);
          if (_ctx.transaction.account_id !== 3) {
            _push2(`<span class="flex"${_scopeId}><span class="text-sm text-gray-600 mr-1"${_scopeId}>Gerente: </span><span class="text-sm font-semibold text-dark-brand"${_scopeId}>Fernando Escobar Bermudez</span></span>`);
          } else {
            _push2(`<span class="font-semibold"${_scopeId}>ExchangeLatam SAS</span>`);
          }
          if (_ctx.transaction.account_id !== 3) {
            _push2(`<span class="flex"${_scopeId}><span class="text-sm text-gray-600 mr-1"${_scopeId}>C\xE9dula: </span><span class="text-sm font-semibold text-dark-brand"${_scopeId}>1.111.198.204</span></span>`);
          } else {
            _push2(`<span class="flex"${_scopeId}><span class="text-sm text-gray-600 mr-1"${_scopeId}>NIT: </span><span class="text-sm font-semibold text-dark-brand"${_scopeId}>901.422.406</span></span>`);
          }
          _push2(`<span class="flex"${_scopeId}><span class="text-sm text-gray-600 mr-1"${_scopeId}>Banco: </span><span class="text-sm font-semibold text-dark-brand"${_scopeId}>${ssrInterpolate(_ctx.transaction.account.bank.name)}</span></span><span class="flex"${_scopeId}><span class="text-sm text-gray-600 mr-1"${_scopeId}>Cuenta: </span><span class="text-sm font-semibold text-dark-brand"${_scopeId}>${ssrInterpolate(_ctx.transaction.account.number)}</span></span><span class="flex mb-2"${_scopeId}><span class="text-sm text-gray-600 mr-1"${_scopeId}>Tipo de Cuenta: </span><span class="text-sm font-semibold text-dark-brand"${_scopeId}>${ssrInterpolate(_ctx.transaction.account.type)}</span></span>`);
          if (_ctx.transaction.status === "Realizado") {
            _push2(`<span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 mx-auto"${_scopeId}> Pago Realizado </span>`);
          } else if (_ctx.transaction.status === "Pendiente") {
            _push2(`<span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-orange-100 text-orange-800 mx-auto"${_scopeId}> Procesando ... </span>`);
          } else if (_ctx.transaction.status === "Cancelado") {
            _push2(`<span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-orange-100 text-orange-800 mx-auto"${_scopeId}> Transacci\xF3n Rechazada </span>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(`</div>`);
        } else {
          _push2(`<div class="rounded-lg bg-slate-200 text-dark-brand p-4 w-80 flex flex-col items-start"${_scopeId}><span class="flex"${_scopeId}><span class="text-sm text-gray-600 mr-1"${_scopeId}>Wallet: </span><span class="text-sm font-semibold text-dark-brand"${_scopeId}>Skrill</span></span><span class="flex"${_scopeId}><span class="text-sm text-gray-600 mr-1"${_scopeId}>Cuenta: </span><span class="text-sm font-semibold text-dark-brand"${_scopeId}>admin@exchangelatam.com</span></span></div>`);
        }
        if (_ctx.transaction.type === 3) {
          _push2(`<div class="rounded-lg bg-slate-200 text-dark-brand p-4 w-80 flex flex-col items-start mt-4"${_scopeId}>`);
          if (_ctx.transaction.account_id !== 3) {
            _push2(`<span class="flex"${_scopeId}><span class="text-sm text-gray-600 mr-1"${_scopeId}>Una vez realices la transferencia desde tu cuenta de skrill registrada haremos el pago a tu cuenta bancaria:</span></span>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(`<span class="flex"${_scopeId}><span class="text-sm text-gray-600 mr-1"${_scopeId}>Banco: </span><span class="text-sm font-semibold text-dark-brand"${_scopeId}>${ssrInterpolate(_ctx.transaction.account.bank.name)}</span></span><span class="flex"${_scopeId}><span class="text-sm text-gray-600 mr-1"${_scopeId}>Cuenta: </span><span class="text-sm font-semibold text-dark-brand"${_scopeId}>${ssrInterpolate(_ctx.transaction.account.number)}</span></span><span class="flex mb-2"${_scopeId}><span class="text-sm text-gray-600 mr-1"${_scopeId}>Tipo de Cuenta: </span><span class="text-sm font-semibold text-dark-brand"${_scopeId}>${ssrInterpolate(_ctx.transaction.account.type)}</span></span>`);
          if (_ctx.transaction.status === "Realizado") {
            _push2(`<span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 mx-auto"${_scopeId}> Pago Realizado </span>`);
          } else if (_ctx.transaction.status === "Pendiente") {
            _push2(`<span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-orange-100 text-orange-800 mx-auto"${_scopeId}> Procesando ... </span>`);
          } else if (_ctx.transaction.status === "Cancelado") {
            _push2(`<span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-orange-100 text-orange-800 mx-auto"${_scopeId}> Transacci\xF3n Rechazada </span>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(`</div>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div><div class="col-span-6 md:col-span-3 flex flex-col justify-start items-center mt-5 md:mt-0"${_scopeId}><h2 class="text-lg text-dark-brand font-semibold mb-2"${_scopeId}>Resumen de la transacci\xF3n</h2><div class="rounded-lg text-dark-brand w-80 flex flex-col items-center"${_scopeId}><span class="flex justify-between items-center w-full"${_scopeId}><span class="text-sm text-gray-600 mr-1"${_scopeId}>Monto USD: </span><span class="font-semibold text-dark-brand"${_scopeId}>$ ${ssrInterpolate(_ctx.transaction.amount_usd.toLocaleString())}</span></span><span class="flex justify-between items-center w-full"${_scopeId}><span class="text-sm text-gray-600 mr-1"${_scopeId}>Monto COP: </span><span class="font-semibold text-dark-brand"${_scopeId}>$ ${ssrInterpolate(_ctx.transaction.amount_cop.toLocaleString())}</span></span><span class="flex justify-between items-center w-full"${_scopeId}><span class="text-sm text-gray-600 mr-1"${_scopeId}>Impuesto 4x1000: </span><span class="font-semibold text-dark-brand"${_scopeId}>$ ${ssrInterpolate(_ctx.transaction.cuatro_por_mil.toLocaleString())}</span></span><span class="flex justify-between items-center w-full"${_scopeId}><span class="text-sm text-gray-600 mr-1"${_scopeId}>Comisi\xF3n: </span><span class="font-semibold text-dark-brand"${_scopeId}>$ ${ssrInterpolate(_ctx.transaction.comission.toLocaleString())}</span></span><span class="flex justify-between items-center w-full"${_scopeId}><span class="text-sm text-gray-600 mr-1"${_scopeId}>Impuesto IVA: </span><span class="font-semibold text-dark-brand"${_scopeId}>$ ${ssrInterpolate(_ctx.transaction.iva.toLocaleString())}</span></span><span class="flex justify-between items-center w-full"${_scopeId}><span class="text-sm text-gray-600 mr-1"${_scopeId}>Descuento VIP: </span><span class="font-semibold text-dark-brand"${_scopeId}>$ ${ssrInterpolate(_ctx.transaction.rebate.toLocaleString())}</span></span><div class="mx-auto w-4/5 border-0 h-[1px] bg-gradient-to-r from-slate-300 via-blue-brand to-slate-300 my-5"${_scopeId}></div><span class="flex justify-between items-center w-full"${_scopeId}><span class="text-base text-dark-brand mr-1"${_scopeId}>Total a pagar COP: </span><span class="font-semibold text-dark-brand"${_scopeId}>$ ${ssrInterpolate(_ctx.transaction.total.toLocaleString())}</span></span></div></div></div><div class="mx-auto w-4/5 border-0 h-[1px] bg-gradient-to-r from-slate-300 via-blue-brand to-slate-300 my-2"${_scopeId}></div><div class="grid grid-cols-6 p-4 mx-auto w-full xl:w-4/5 h-min"${_scopeId}>`);
        if (!_ctx.voucherExist && _ctx.transaction.type != 3) {
          _push2(`<div class="col-span-6 flex flex-col justify-between items-center mb-5"${_scopeId}>`);
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
          _push2(`</div>`);
        } else if (_ctx.voucherExist && _ctx.transaction.type != 3) {
          _push2(`<div class="col-span-6 mb-5"${_scopeId}><div class="mb-4" style="${ssrRenderStyle(_ctx.voucherPreview ? null : { display: "none" })}"${_scopeId}><span class="block rounded-lg w-32 h-36 bg-cover bg-no-repeat bg-center mx-auto" style="${ssrRenderStyle("background-image: url('" + _ctx.voucherPreview + "');")}"${_scopeId}></span>`);
          if (_ctx.voucherPreview) {
            _push2(`<span class="block rounded-lg w-full sm:w-auto mx-auto text-gray-500 text-sm text-center"${_scopeId}>${ssrInterpolate(_ctx.$refs.voucherUp.files[0].name)}</span>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(`</div><form class="flex flex-col justify-between items-center"${_scopeId}><input type="file" class="hidden"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_jet_secondary_button, {
            onClick: _ctx.selectFile,
            class: "mx-auto mb-4"
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(ssrRenderComponent(_component_font_awesome_icon, {
                  class: "mr-2",
                  icon: ["fas", "upload"],
                  size: "sm"
                }, null, _parent3, _scopeId2));
                _push3(` `);
                if (_ctx.voucherPreview) {
                  _push3(`<span${_scopeId2}>Cambiar</span>`);
                } else {
                  _push3(`<span${_scopeId2}>Seleccione archivo</span>`);
                }
              } else {
                return [
                  createVNode(_component_font_awesome_icon, {
                    class: "mr-2",
                    icon: ["fas", "upload"],
                    size: "sm"
                  }),
                  createTextVNode(),
                  _ctx.voucherPreview ? (openBlock(), createBlock("span", { key: 0 }, "Cambiar")) : (openBlock(), createBlock("span", { key: 1 }, "Seleccione archivo"))
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
          _push2(ssrRenderComponent(_component_jet_button, {
            class: { "opacity-25": _ctx.form.processing },
            disabled: _ctx.form.processing
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(` Enviar `);
              } else {
                return [
                  createTextVNode(" Enviar ")
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
          _push2(`</form></div>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`<div class="col-span-6 flex flex-col justify-between items-center mt-5 md:mt-0 mb-5"${_scopeId}><h2 class="text-lg text-dark-brand font-semibold mb-2"${_scopeId}>Aviso</h2><div class="rounded-lg text-dark-brand w-3/4 flex flex-col items-start"${_scopeId}><span class="flex items-center w-full"${_scopeId}>`);
        if (_ctx.transaction.type === 3) {
          _push2(`<ul class="list-disc"${_scopeId}><li${_scopeId}><span class="text-sm text-orange-700 font-semibold text-center"${_scopeId}> Realiza la transferencia a la cuenta de Skrill que se muestra en &quot;Detalles de pago&quot;. </span></li><li${_scopeId}><span class="text-sm text-orange-700 font-semibold text-center"${_scopeId}> Realiza la transferencia antes de la media noche antes del vencimiento de la solicitud. </span></li><li${_scopeId}><span class="text-sm text-orange-700 font-semibold text-center"${_scopeId}> Una vez se confirme la recepci\xF3n de la transferencia a la cuenta de Skrill se realizar\xE1 el pago a tu cuenta bancaria registrada. </span></li></ul>`);
        } else {
          _push2(`<ul class="list-disc"${_scopeId}><li${_scopeId}><span class="text-sm text-orange-700 font-semibold text-center"${_scopeId}> Realiza el pago por transferencia o consignaci\xF3n a la cuenta bancaria que se muestra en &quot;Detalles de pago&quot;. </span></li><li${_scopeId}><span class="text-sm text-orange-700 font-semibold text-center"${_scopeId}> Sube el comprobante de la transacci\xF3n seleccionando el archivo y presionando el bot\xF3n &quot;Enviar&quot;. </span></li><li${_scopeId}><span class="text-sm text-orange-700 font-semibold text-center"${_scopeId}> Si consignas en oficina bancaria o cajero electr\xF3nico fuera del departamento del Tolima debes realizarla libre de comisi\xF3n de consignaci\xF3n nacional la cual puedes consultar al cajero. </span></li></ul>`);
        }
        _push2(`</span></div></div></div></div></div></div></div>`);
      } else {
        return [
          createVNode("div", { class: "py-6 w-full" }, [
            createVNode("div", { class: "flex mx-auto lg:mr-4" }, [
              createVNode("div", { class: "container mx-auto sm:px-6 lg:px-8" }, [
                createVNode("div", { class: "bg-white shadow-xl sm:rounded-lg flex flex-col" }, [
                  createVNode("div", { class: "grid grid-cols-6 p-4 mx-auto w-full xl:w-4/5 mt-5 h-min" }, [
                    createVNode("div", { class: "col-span-6 md:col-span-3 flex flex-col justify-between items-center" }, [
                      createVNode("h2", { class: "text-lg text-dark-brand font-semibold mb-2" }, " Detalles de la transacci\xF3n "),
                      createVNode("div", { class: "rounded-lg text-dark-brand w-80 flex flex-col items-start" }, [
                        createVNode("span", { class: "flex justify-between items-center w-full" }, [
                          createVNode("span", { class: "text-sm text-gray-600 mr-2" }, "Wallet: "),
                          createVNode("span", {
                            class: [{ "text-rose-800": _ctx.transaction.transactionable.wallet.id === 1, "text-green-500": _ctx.transaction.transactionable.wallet.id === 2 }, "text-sm font-semibold"]
                          }, toDisplayString(_ctx.transaction.transactionable.wallet.name), 3)
                        ]),
                        createVNode("span", { class: "flex justify-between items-center w-full" }, [
                          createVNode("span", { class: "text-sm text-gray-600 mr-2" }, "Cuenta: "),
                          createVNode("span", { class: "text-sm font-semibold text-dark-brand" }, toDisplayString(_ctx.transaction.transactionable.email), 1)
                        ]),
                        createVNode("span", { class: "flex justify-between items-center w-full" }, [
                          createVNode("span", { class: "text-sm text-gray-600 mr-2" }, "Fecha de solicitud: "),
                          createVNode("span", { class: "text-sm font-semibold text-dark-brand" }, toDisplayString(_ctx.dateFormat(_ctx.transaction.application_date)), 1)
                        ]),
                        _ctx.transaction.completed_date ? (openBlock(), createBlock("span", {
                          key: 0,
                          class: "flex justify-between items-center w-full"
                        }, [
                          createVNode("span", { class: "text-sm text-gray-600 mr-2" }, "Fecha de finalizaci\xF3n: "),
                          createVNode("span", { class: "text-sm font-semibold text-dark-brand" }, toDisplayString(_ctx.dateFormat(_ctx.transaction.completed_date)), 1)
                        ])) : createCommentVNode("", true)
                      ])
                    ]),
                    createVNode("div", { class: "col-span-6 md:col-span-3 flex flex-col justify-between items-center mt-5 md:mt-0" }, [
                      _ctx.transaction.comment ? (openBlock(), createBlock("h2", {
                        key: 0,
                        class: "text-lg text-dark-brand font-semibold mb-2"
                      }, "Comentarios")) : createCommentVNode("", true),
                      createVNode("div", { class: "rounded-lg text-dark-brand w-80 flex flex-col items-start" }, [
                        createVNode("span", { class: "flex items-center w-full" }, [
                          createVNode("span", { class: "text-sm text-gray-600 font-semibold" }, toDisplayString(_ctx.transaction.comment), 1)
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
                      createVNode("div", { class: "rounded-lg text-dark-brand w-80 flex flex-col items-center pb-3" }, [
                        _ctx.transaction.type === 2 ? (openBlock(), createBlock("span", {
                          key: 0,
                          class: "flex justify-between items-center w-full"
                        }, [
                          createVNode("span", { class: "text-sm text-gray-600 mr-1" }, "Debes realizar el pago a la siguiente cuenta bancaria por medio de transferencia o consignaci\xF3n:")
                        ])) : (openBlock(), createBlock("span", {
                          key: 1,
                          class: "flex justify-between items-center w-full"
                        }, [
                          createVNode("span", { class: "text-sm text-gray-600 mr-1" }, "Debes transferir el monto que deseas vender a la siguiente cuenta de Skrill:")
                        ]))
                      ]),
                      _ctx.transaction.type === 2 ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "rounded-lg bg-slate-200 text-dark-brand p-4 w-80 flex flex-col items-start"
                      }, [
                        _ctx.transaction.account_id !== 3 ? (openBlock(), createBlock("span", {
                          key: 0,
                          class: "flex"
                        }, [
                          createVNode("span", { class: "text-sm text-gray-600 mr-1" }, "Gerente: "),
                          createVNode("span", { class: "text-sm font-semibold text-dark-brand" }, "Fernando Escobar Bermudez")
                        ])) : (openBlock(), createBlock("span", {
                          key: 1,
                          class: "font-semibold"
                        }, "ExchangeLatam SAS")),
                        _ctx.transaction.account_id !== 3 ? (openBlock(), createBlock("span", {
                          key: 2,
                          class: "flex"
                        }, [
                          createVNode("span", { class: "text-sm text-gray-600 mr-1" }, "C\xE9dula: "),
                          createVNode("span", { class: "text-sm font-semibold text-dark-brand" }, "1.111.198.204")
                        ])) : (openBlock(), createBlock("span", {
                          key: 3,
                          class: "flex"
                        }, [
                          createVNode("span", { class: "text-sm text-gray-600 mr-1" }, "NIT: "),
                          createVNode("span", { class: "text-sm font-semibold text-dark-brand" }, "901.422.406")
                        ])),
                        createVNode("span", { class: "flex" }, [
                          createVNode("span", { class: "text-sm text-gray-600 mr-1" }, "Banco: "),
                          createVNode("span", { class: "text-sm font-semibold text-dark-brand" }, toDisplayString(_ctx.transaction.account.bank.name), 1)
                        ]),
                        createVNode("span", { class: "flex" }, [
                          createVNode("span", { class: "text-sm text-gray-600 mr-1" }, "Cuenta: "),
                          createVNode("span", { class: "text-sm font-semibold text-dark-brand" }, toDisplayString(_ctx.transaction.account.number), 1)
                        ]),
                        createVNode("span", { class: "flex mb-2" }, [
                          createVNode("span", { class: "text-sm text-gray-600 mr-1" }, "Tipo de Cuenta: "),
                          createVNode("span", { class: "text-sm font-semibold text-dark-brand" }, toDisplayString(_ctx.transaction.account.type), 1)
                        ]),
                        _ctx.transaction.status === "Realizado" ? (openBlock(), createBlock("span", {
                          key: 4,
                          class: "px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 mx-auto"
                        }, " Pago Realizado ")) : _ctx.transaction.status === "Pendiente" ? (openBlock(), createBlock("span", {
                          key: 5,
                          class: "px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-orange-100 text-orange-800 mx-auto"
                        }, " Procesando ... ")) : _ctx.transaction.status === "Cancelado" ? (openBlock(), createBlock("span", {
                          key: 6,
                          class: "px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-orange-100 text-orange-800 mx-auto"
                        }, " Transacci\xF3n Rechazada ")) : createCommentVNode("", true)
                      ])) : (openBlock(), createBlock("div", {
                        key: 1,
                        class: "rounded-lg bg-slate-200 text-dark-brand p-4 w-80 flex flex-col items-start"
                      }, [
                        createVNode("span", { class: "flex" }, [
                          createVNode("span", { class: "text-sm text-gray-600 mr-1" }, "Wallet: "),
                          createVNode("span", { class: "text-sm font-semibold text-dark-brand" }, "Skrill")
                        ]),
                        createVNode("span", { class: "flex" }, [
                          createVNode("span", { class: "text-sm text-gray-600 mr-1" }, "Cuenta: "),
                          createVNode("span", { class: "text-sm font-semibold text-dark-brand" }, "admin@exchangelatam.com")
                        ])
                      ])),
                      _ctx.transaction.type === 3 ? (openBlock(), createBlock("div", {
                        key: 2,
                        class: "rounded-lg bg-slate-200 text-dark-brand p-4 w-80 flex flex-col items-start mt-4"
                      }, [
                        _ctx.transaction.account_id !== 3 ? (openBlock(), createBlock("span", {
                          key: 0,
                          class: "flex"
                        }, [
                          createVNode("span", { class: "text-sm text-gray-600 mr-1" }, "Una vez realices la transferencia desde tu cuenta de skrill registrada haremos el pago a tu cuenta bancaria:")
                        ])) : createCommentVNode("", true),
                        createVNode("span", { class: "flex" }, [
                          createVNode("span", { class: "text-sm text-gray-600 mr-1" }, "Banco: "),
                          createVNode("span", { class: "text-sm font-semibold text-dark-brand" }, toDisplayString(_ctx.transaction.account.bank.name), 1)
                        ]),
                        createVNode("span", { class: "flex" }, [
                          createVNode("span", { class: "text-sm text-gray-600 mr-1" }, "Cuenta: "),
                          createVNode("span", { class: "text-sm font-semibold text-dark-brand" }, toDisplayString(_ctx.transaction.account.number), 1)
                        ]),
                        createVNode("span", { class: "flex mb-2" }, [
                          createVNode("span", { class: "text-sm text-gray-600 mr-1" }, "Tipo de Cuenta: "),
                          createVNode("span", { class: "text-sm font-semibold text-dark-brand" }, toDisplayString(_ctx.transaction.account.type), 1)
                        ]),
                        _ctx.transaction.status === "Realizado" ? (openBlock(), createBlock("span", {
                          key: 1,
                          class: "px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 mx-auto"
                        }, " Pago Realizado ")) : _ctx.transaction.status === "Pendiente" ? (openBlock(), createBlock("span", {
                          key: 2,
                          class: "px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-orange-100 text-orange-800 mx-auto"
                        }, " Procesando ... ")) : _ctx.transaction.status === "Cancelado" ? (openBlock(), createBlock("span", {
                          key: 3,
                          class: "px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-orange-100 text-orange-800 mx-auto"
                        }, " Transacci\xF3n Rechazada ")) : createCommentVNode("", true)
                      ])) : createCommentVNode("", true)
                    ]),
                    createVNode("div", { class: "col-span-6 md:col-span-3 flex flex-col justify-start items-center mt-5 md:mt-0" }, [
                      createVNode("h2", { class: "text-lg text-dark-brand font-semibold mb-2" }, "Resumen de la transacci\xF3n"),
                      createVNode("div", { class: "rounded-lg text-dark-brand w-80 flex flex-col items-center" }, [
                        createVNode("span", { class: "flex justify-between items-center w-full" }, [
                          createVNode("span", { class: "text-sm text-gray-600 mr-1" }, "Monto USD: "),
                          createVNode("span", { class: "font-semibold text-dark-brand" }, "$ " + toDisplayString(_ctx.transaction.amount_usd.toLocaleString()), 1)
                        ]),
                        createVNode("span", { class: "flex justify-between items-center w-full" }, [
                          createVNode("span", { class: "text-sm text-gray-600 mr-1" }, "Monto COP: "),
                          createVNode("span", { class: "font-semibold text-dark-brand" }, "$ " + toDisplayString(_ctx.transaction.amount_cop.toLocaleString()), 1)
                        ]),
                        createVNode("span", { class: "flex justify-between items-center w-full" }, [
                          createVNode("span", { class: "text-sm text-gray-600 mr-1" }, "Impuesto 4x1000: "),
                          createVNode("span", { class: "font-semibold text-dark-brand" }, "$ " + toDisplayString(_ctx.transaction.cuatro_por_mil.toLocaleString()), 1)
                        ]),
                        createVNode("span", { class: "flex justify-between items-center w-full" }, [
                          createVNode("span", { class: "text-sm text-gray-600 mr-1" }, "Comisi\xF3n: "),
                          createVNode("span", { class: "font-semibold text-dark-brand" }, "$ " + toDisplayString(_ctx.transaction.comission.toLocaleString()), 1)
                        ]),
                        createVNode("span", { class: "flex justify-between items-center w-full" }, [
                          createVNode("span", { class: "text-sm text-gray-600 mr-1" }, "Impuesto IVA: "),
                          createVNode("span", { class: "font-semibold text-dark-brand" }, "$ " + toDisplayString(_ctx.transaction.iva.toLocaleString()), 1)
                        ]),
                        createVNode("span", { class: "flex justify-between items-center w-full" }, [
                          createVNode("span", { class: "text-sm text-gray-600 mr-1" }, "Descuento VIP: "),
                          createVNode("span", { class: "font-semibold text-dark-brand" }, "$ " + toDisplayString(_ctx.transaction.rebate.toLocaleString()), 1)
                        ]),
                        createVNode("div", { class: "mx-auto w-4/5 border-0 h-[1px] bg-gradient-to-r from-slate-300 via-blue-brand to-slate-300 my-5" }),
                        createVNode("span", { class: "flex justify-between items-center w-full" }, [
                          createVNode("span", { class: "text-base text-dark-brand mr-1" }, "Total a pagar COP: "),
                          createVNode("span", { class: "font-semibold text-dark-brand" }, "$ " + toDisplayString(_ctx.transaction.total.toLocaleString()), 1)
                        ])
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "mx-auto w-4/5 border-0 h-[1px] bg-gradient-to-r from-slate-300 via-blue-brand to-slate-300 my-2" }),
                  createVNode("div", { class: "grid grid-cols-6 p-4 mx-auto w-full xl:w-4/5 h-min" }, [
                    !_ctx.voucherExist && _ctx.transaction.type != 3 ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "col-span-6 flex flex-col justify-between items-center mb-5"
                    }, [
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
                    ])) : _ctx.voucherExist && _ctx.transaction.type != 3 ? (openBlock(), createBlock("div", {
                      key: 1,
                      class: "col-span-6 mb-5"
                    }, [
                      withDirectives(createVNode("div", { class: "mb-4" }, [
                        createVNode("span", {
                          class: "block rounded-lg w-32 h-36 bg-cover bg-no-repeat bg-center mx-auto",
                          style: "background-image: url('" + _ctx.voucherPreview + "');"
                        }, null, 4),
                        _ctx.voucherPreview ? (openBlock(), createBlock("span", {
                          key: 0,
                          class: "block rounded-lg w-full sm:w-auto mx-auto text-gray-500 text-sm text-center"
                        }, toDisplayString(_ctx.$refs.voucherUp.files[0].name), 1)) : createCommentVNode("", true)
                      ], 512), [
                        [vShow, _ctx.voucherPreview]
                      ]),
                      createVNode("form", {
                        onSubmit: withModifiers(_ctx.submit, ["prevent"]),
                        class: "flex flex-col justify-between items-center"
                      }, [
                        createVNode("input", {
                          type: "file",
                          class: "hidden",
                          ref: "voucherUp",
                          onChange: _ctx.updateVoucherPreview
                        }, null, 40, ["onChange"]),
                        createVNode(_component_jet_secondary_button, {
                          onClick: withModifiers(_ctx.selectFile, ["prevent"]),
                          class: "mx-auto mb-4"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_font_awesome_icon, {
                              class: "mr-2",
                              icon: ["fas", "upload"],
                              size: "sm"
                            }),
                            createTextVNode(),
                            _ctx.voucherPreview ? (openBlock(), createBlock("span", { key: 0 }, "Cambiar")) : (openBlock(), createBlock("span", { key: 1 }, "Seleccione archivo"))
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        createVNode(_component_jet_button, {
                          class: { "opacity-25": _ctx.form.processing },
                          disabled: _ctx.form.processing
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Enviar ")
                          ]),
                          _: 1
                        }, 8, ["class", "disabled"])
                      ], 40, ["onSubmit"])
                    ])) : createCommentVNode("", true),
                    createVNode("div", { class: "col-span-6 flex flex-col justify-between items-center mt-5 md:mt-0 mb-5" }, [
                      createVNode("h2", { class: "text-lg text-dark-brand font-semibold mb-2" }, "Aviso"),
                      createVNode("div", { class: "rounded-lg text-dark-brand w-3/4 flex flex-col items-start" }, [
                        createVNode("span", { class: "flex items-center w-full" }, [
                          _ctx.transaction.type === 3 ? (openBlock(), createBlock("ul", {
                            key: 0,
                            class: "list-disc"
                          }, [
                            createVNode("li", null, [
                              createVNode("span", { class: "text-sm text-orange-700 font-semibold text-center" }, ' Realiza la transferencia a la cuenta de Skrill que se muestra en "Detalles de pago". ')
                            ]),
                            createVNode("li", null, [
                              createVNode("span", { class: "text-sm text-orange-700 font-semibold text-center" }, " Realiza la transferencia antes de la media noche antes del vencimiento de la solicitud. ")
                            ]),
                            createVNode("li", null, [
                              createVNode("span", { class: "text-sm text-orange-700 font-semibold text-center" }, " Una vez se confirme la recepci\xF3n de la transferencia a la cuenta de Skrill se realizar\xE1 el pago a tu cuenta bancaria registrada. ")
                            ])
                          ])) : (openBlock(), createBlock("ul", {
                            key: 1,
                            class: "list-disc"
                          }, [
                            createVNode("li", null, [
                              createVNode("span", { class: "text-sm text-orange-700 font-semibold text-center" }, ' Realiza el pago por transferencia o consignaci\xF3n a la cuenta bancaria que se muestra en "Detalles de pago". ')
                            ]),
                            createVNode("li", null, [
                              createVNode("span", { class: "text-sm text-orange-700 font-semibold text-center" }, ' Sube el comprobante de la transacci\xF3n seleccionando el archivo y presionando el bot\xF3n "Enviar". ')
                            ]),
                            createVNode("li", null, [
                              createVNode("span", { class: "text-sm text-orange-700 font-semibold text-center" }, " Si consignas en oficina bancaria o cajero electr\xF3nico fuera del departamento del Tolima debes realizarla libre de comisi\xF3n de consignaci\xF3n nacional la cual puedes consultar al cajero. ")
                            ])
                          ]))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/WalletExchange/Show.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Show = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Show as default
};
