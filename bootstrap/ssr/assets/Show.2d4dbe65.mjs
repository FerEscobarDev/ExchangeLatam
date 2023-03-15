import { defineComponent, resolveComponent, mergeProps, withCtx, createTextVNode, createVNode, openBlock, createBlock, withModifiers, withDirectives, vModelText, toDisplayString, createCommentVNode, vShow, useSSRContext } from "vue";
import { A as AppLayoutAdmin } from "./AppLayoutAdmin.8e91ebaa.mjs";
import { Link } from "@inertiajs/inertia-vue3";
import { _ as _sfc_main$1 } from "./DialogModal.04a42090.mjs";
import { _ as _sfc_main$3 } from "./Button.feee2cab.mjs";
import { _ as _sfc_main$2 } from "./SecondaryButton.987206fe.mjs";
import { _ as _sfc_main$4 } from "./DangerButton.2ed2ad18.mjs";
import { _ as _sfc_main$5 } from "./InputError.bc94ef1e.mjs";
import { J as JetSelect } from "./Select.c13c9df3.mjs";
import { _ as _sfc_main$6 } from "./Label.ceceda67.mjs";
import { _ as _sfc_main$7 } from "./ConfirmationModal.956871cf.mjs";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import dayjs from "dayjs";
import { ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderAttr, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.43be4956.mjs";
import "./ResponsiveNavLink.105dcaab.mjs";
import "./logoweb.e431fb6b.mjs";
import "./NavLink.e5cf4d5a.mjs";
import "@fortawesome/free-brands-svg-icons";
import "./Modal.688f150f.mjs";
import "@headlessui/vue";
import "@heroicons/vue/solid";
library.add(faUpload);
const _sfc_main = defineComponent({
  components: {
    AppLayoutAdmin,
    Link,
    JetDialogModal: _sfc_main$1,
    JetSecondaryButton: _sfc_main$2,
    JetButton: _sfc_main$3,
    DangerButton: _sfc_main$4,
    FontAwesomeIcon,
    InputError: _sfc_main$5,
    Select: JetSelect,
    Label: _sfc_main$6,
    ConfirmationModal: _sfc_main$7
  },
  props: {
    transaction: Object,
    voucher: String
  },
  setup(props) {
    const status = [
      {
        id: 1,
        name: "Pendiente"
      },
      {
        id: 2,
        name: "Realizado"
      },
      {
        id: 3,
        name: "Cancelado"
      },
      {
        id: 4,
        name: "Procesando"
      }
    ];
    return {
      status
    };
  },
  data() {
    return {
      voucherShow: false,
      voucherExist: this.voucher === null ? true : false,
      form: this.$inertia.form({
        _method: "PUT",
        voucherUp: null
      }),
      formStatus: this.$inertia.form({
        _method: "PUT",
        status: this.status[0],
        comments: null
      }),
      formDelete: this.$inertia.form({
        _method: "delete"
      }),
      voucherPreview: null,
      statusChange: false,
      delete: false
    };
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
    },
    changeStatus() {
      if (this.statusChange) {
        this.statusChange = false;
      } else {
        this.statusChange = true;
      }
    },
    deleteTransaction() {
      if (this.delete) {
        this.delete = false;
      } else {
        this.delete = true;
      }
    },
    submit() {
      if (this.$refs.voucherUp) {
        this.form.voucherUp = this.$refs.voucherUp.files[0];
      }
      this.form.post(this.route("admin.voucherUpWalletExchange", this.transaction.id), {
        onSuccess: () => this.clearFileInput()
      });
    },
    submitDelete() {
      this.formDelete.post(this.route("admin.destroyWalletExchange", this.transaction.id));
    },
    submitStatus() {
      this.formStatus.post(this.route("admin.statusWalletExchange", this.transaction.id), {
        onSuccess: () => this.changeStatus()
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
  const _component_AppLayoutAdmin = resolveComponent("AppLayoutAdmin");
  const _component_Link = resolveComponent("Link");
  const _component_jet_button = resolveComponent("jet-button");
  const _component_jet_dialog_modal = resolveComponent("jet-dialog-modal");
  const _component_jet_secondary_button = resolveComponent("jet-secondary-button");
  const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
  const _component_input_error = resolveComponent("input-error");
  const _component_Select = resolveComponent("Select");
  const _component_Label = resolveComponent("Label");
  const _component_DangerButton = resolveComponent("DangerButton");
  const _component_ConfirmationModal = resolveComponent("ConfirmationModal");
  _push(ssrRenderComponent(_component_AppLayoutAdmin, mergeProps({ title: "Detalle del dep\xF3sito" }, _attrs), {
    header: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h2 class="font-semibold text-xl text-gray-700 leading-tight"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Link, {
          href: _ctx.route("admin.dashboard"),
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
          href: _ctx.route("admin.userShow", _ctx.transaction.user_id),
          class: "text-blue-brand-gradient1 font-semibold hover:text-blue-brand"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Perfil del Usuario/`);
            } else {
              return [
                createTextVNode("Perfil del Usuario/")
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
              href: _ctx.route("admin.dashboard"),
              class: "text-blue-brand-gradient1 font-semibold hover:text-blue-brand"
            }, {
              default: withCtx(() => [
                createTextVNode("Dashboard/")
              ]),
              _: 1
            }, 8, ["href"]),
            createVNode(_component_Link, {
              href: _ctx.route("admin.userShow", _ctx.transaction.user_id),
              class: "text-blue-brand-gradient1 font-semibold hover:text-blue-brand"
            }, {
              default: withCtx(() => [
                createTextVNode("Perfil del Usuario/")
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
        _push2(`<div class="py-6 w-full"${_scopeId}><div class="flex mx-auto lg:mr-4"${_scopeId}><div class="container mx-auto sm:px-6 lg:px-8"${_scopeId}><div class="bg-white shadow-xl sm:rounded-lg flex flex-col"${_scopeId}><div class="grid grid-cols-6 p-4 mx-auto w-full xl:w-4/5 mt-5 h-min"${_scopeId}><div class="col-span-6 md:col-span-3 flex flex-col justify-between items-center"${_scopeId}><h2 class="text-lg text-dark-brand font-semibold mb-2"${_scopeId}> Detalles de la transacci\xF3n </h2><div class="rounded-lg text-dark-brand w-80 flex flex-col items-start"${_scopeId}><span class="flex justify-between items-center w-full"${_scopeId}><span class="text-sm text-gray-600 mr-2"${_scopeId}>Cliente: </span><span class="text-md font-semibold text-dark-brand"${_scopeId}>${ssrInterpolate(_ctx.transaction.user.name + " " + _ctx.transaction.user.lastname)}</span></span><span class="flex justify-between items-center w-full"${_scopeId}><span class="text-sm text-gray-600 mr-2"${_scopeId}>Tipo: </span><span class="text-sm font-semibold"${_scopeId}>${ssrInterpolate(_ctx.transactionType(_ctx.transaction))}</span></span><span class="flex justify-between items-center w-full"${_scopeId}><span class="text-sm text-gray-600 mr-2"${_scopeId}>Wallet: </span><span class="${ssrRenderClass([{ "text-rose-800": _ctx.transaction.transactionable.wallet.id === 1, "text-green-500": _ctx.transaction.transactionable.wallet.id === 2 }, "text-sm font-semibold"])}"${_scopeId}>${ssrInterpolate(_ctx.transaction.transactionable.wallet.name)}</span></span><span class="flex justify-between items-center w-full"${_scopeId}><span class="text-sm text-gray-600 mr-2"${_scopeId}>Cuenta: </span><span class="text-sm font-semibold text-dark-brand"${_scopeId}>${ssrInterpolate(_ctx.transaction.transactionable.email)}</span></span><span class="flex justify-between items-center w-full"${_scopeId}><span class="text-sm text-gray-600 mr-2"${_scopeId}>Fecha de solicitud: </span><span class="text-sm font-semibold text-dark-brand"${_scopeId}>${ssrInterpolate(_ctx.dateFormat(_ctx.transaction.application_date))}</span></span>`);
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
          _push2(`<span class="flex justify-between items-center w-full"${_scopeId}><span class="text-sm text-gray-600 mr-1"${_scopeId}>Confirma que el cliente haya realizado el pago a la cuenta bancaria:</span></span>`);
        } else {
          _push2(`<span class="flex justify-between items-center w-full"${_scopeId}><span class="text-sm text-gray-600 mr-1"${_scopeId}>Confirma que el cliente haya realizado el pago a la cuenta Skrill:</span></span>`);
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
            _push2(`<span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 mx-auto"${_scopeId}> Transacci\xF3n Realizada </span>`);
          } else if (_ctx.transaction.status === "Pendiente") {
            _push2(`<span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-orange-100 text-orange-700 mx-auto"${_scopeId}> Pago Pendiente </span>`);
          } else if (_ctx.transaction.status === "Cancelado") {
            _push2(`<span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-orange-100 text-red-700 mx-auto"${_scopeId}> Transacci\xF3n Rechazada </span>`);
          } else if (_ctx.transaction.status === "Procesando") {
            _push2(`<span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-orange-100 text-orange-600 mx-auto"${_scopeId}> Procesando... </span>`);
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
            _push2(`<span class="flex"${_scopeId}><span class="text-sm text-gray-600 mr-1"${_scopeId}>Realiza el pago a esta cuenta bancaria:</span></span>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(`<span class="flex"${_scopeId}><span class="text-sm text-gray-600 mr-1"${_scopeId}>Banco: </span><span class="text-sm font-semibold text-dark-brand"${_scopeId}>${ssrInterpolate(_ctx.transaction.account.bank.name)}</span></span><span class="flex"${_scopeId}><span class="text-sm text-gray-600 mr-1"${_scopeId}>Cuenta: </span><span class="text-sm font-semibold text-dark-brand"${_scopeId}>${ssrInterpolate(_ctx.transaction.account.number)}</span></span><span class="flex mb-2"${_scopeId}><span class="text-sm text-gray-600 mr-1"${_scopeId}>Tipo de Cuenta: </span><span class="text-sm font-semibold text-dark-brand"${_scopeId}>${ssrInterpolate(_ctx.transaction.account.type)}</span></span>`);
          if (_ctx.transaction.status === "Realizado") {
            _push2(`<span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 mx-auto"${_scopeId}> Transacci\xF3n Realizada </span>`);
          } else if (_ctx.transaction.status === "Pendiente") {
            _push2(`<span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-orange-100 text-orange-700 mx-auto"${_scopeId}> Pago Pendiente </span>`);
          } else if (_ctx.transaction.status === "Cancelado") {
            _push2(`<span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-orange-100 text-red-700 mx-auto"${_scopeId}> Transacci\xF3n Rechazada </span>`);
          } else if (_ctx.transaction.status === "Procesando") {
            _push2(`<span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-orange-100 text-orange-600 mx-auto"${_scopeId}> Procesando... </span>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(`</div>`);
        } else {
          _push2(`<!---->`);
        }
        if (!_ctx.voucherExist) {
          _push2(`<div class="flex flex-col justify-between items-center mt-5"${_scopeId}>`);
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
        } else {
          _push2(`<div class="mt-5"${_scopeId}><div class="mb-4" style="${ssrRenderStyle(_ctx.voucherPreview ? null : { display: "none" })}"${_scopeId}><span class="block rounded-lg w-32 h-36 bg-cover bg-no-repeat bg-center mx-auto" style="${ssrRenderStyle("background-image: url('" + _ctx.voucherPreview + "');")}"${_scopeId}></span>`);
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
          _push2(`</form>`);
          _push2(ssrRenderComponent(_component_input_error, {
            message: _ctx.form.errors.voucherUp,
            class: "mt-2"
          }, null, _parent2, _scopeId));
          _push2(`</div>`);
        }
        _push2(`</div><div class="col-span-6 md:col-span-3 flex flex-col justify-start items-center mt-5 md:mt-0"${_scopeId}><h2 class="text-lg text-dark-brand font-semibold mb-2"${_scopeId}>Resumen de la transacci\xF3n</h2><div class="rounded-lg text-dark-brand w-80 flex flex-col items-center"${_scopeId}><span class="flex justify-between items-center w-full"${_scopeId}><span class="text-sm text-gray-600 mr-1"${_scopeId}>Monto USD: </span><span class="font-semibold text-dark-brand"${_scopeId}>$ ${ssrInterpolate(_ctx.transaction.amount_usd.toLocaleString())}</span></span><span class="flex justify-between items-center w-full"${_scopeId}><span class="text-sm text-gray-600 mr-1"${_scopeId}>Monto COP: </span><span class="font-semibold text-dark-brand"${_scopeId}>$ ${ssrInterpolate(_ctx.transaction.amount_cop.toLocaleString())}</span></span><span class="flex justify-between items-center w-full"${_scopeId}><span class="text-sm text-gray-600 mr-1"${_scopeId}>Impuesto 4x1000: </span><span class="font-semibold text-dark-brand"${_scopeId}>$ ${ssrInterpolate(_ctx.transaction.cuatro_por_mil.toLocaleString())}</span></span><span class="flex justify-between items-center w-full"${_scopeId}><span class="text-sm text-gray-600 mr-1"${_scopeId}>Comisi\xF3n: </span><span class="font-semibold text-dark-brand"${_scopeId}>$ ${ssrInterpolate(_ctx.transaction.comission.toLocaleString())}</span></span><span class="flex justify-between items-center w-full"${_scopeId}><span class="text-sm text-gray-600 mr-1"${_scopeId}>Impuesto IVA: </span><span class="font-semibold text-dark-brand"${_scopeId}>$ ${ssrInterpolate(_ctx.transaction.iva.toLocaleString())}</span></span><span class="flex justify-between items-center w-full"${_scopeId}><span class="text-sm text-gray-600 mr-1"${_scopeId}>Descuento VIP: </span><span class="font-semibold text-dark-brand"${_scopeId}>$ ${ssrInterpolate(_ctx.transaction.rebate.toLocaleString())}</span></span><div class="mx-auto w-4/5 border-0 h-[1px] bg-gradient-to-r from-slate-300 via-blue-brand to-slate-300 my-5"${_scopeId}></div><span class="flex justify-between items-center w-full"${_scopeId}><span class="text-base text-dark-brand mr-1"${_scopeId}>Total a pagar COP: </span><span class="font-semibold text-dark-brand"${_scopeId}>$ ${ssrInterpolate(_ctx.transaction.total.toLocaleString())}</span></span></div></div></div><div class="mx-auto w-4/5 border-0 h-[1px] bg-gradient-to-r from-slate-300 via-blue-brand to-slate-300 my-2"${_scopeId}></div><div class="grid grid-cols-6 p-4 mx-auto w-full xl:w-4/5 h-min"${_scopeId}><div class="col-span-3 flex flex-col justify-between items-center mb-5"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_button, {
          onClick: _ctx.changeStatus,
          class: "mx-auto"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Cambiar estado `);
            } else {
              return [
                createTextVNode(" Cambiar estado ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_jet_dialog_modal, {
          show: _ctx.statusChange,
          onClose: _ctx.changeStatus
        }, {
          title: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Cambiar estado de la transacci\xF3n `);
            } else {
              return [
                createTextVNode(" Cambiar estado de la transacci\xF3n ")
              ];
            }
          }),
          content: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<form${_scopeId2}><div class="my-2"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_Select, {
                selectable: _ctx.status,
                selected: _ctx.formStatus.status,
                modelValue: _ctx.formStatus.status,
                "onUpdate:modelValue": ($event) => _ctx.formStatus.status = $event
              }, {
                title: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` Cambio de estado `);
                  } else {
                    return [
                      createTextVNode(" Cambio de estado ")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div><div class="my-2 mt-3"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_Label, {
                for: "comments",
                value: "Comentarios"
              }, null, _parent3, _scopeId2));
              _push3(`<textarea class="w-full text-gray-600 border-dark-brand focus:border-blue-brand focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm" name="comments" id="comments" rows="2" placeholder="Escribe un comentario"${_scopeId2}>${ssrInterpolate(_ctx.formStatus.comments)}</textarea></div><div class="w-full"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_jet_button, {
                class: [{ "opacity-25": _ctx.formStatus.processing }, "mr-4 mx-auto"],
                disabled: _ctx.formStatus.processing
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` Cambiar `);
                  } else {
                    return [
                      createTextVNode(" Cambiar ")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div></form>`);
            } else {
              return [
                createVNode("form", {
                  onSubmit: withModifiers(_ctx.submitStatus, ["prevent"])
                }, [
                  createVNode("div", { class: "my-2" }, [
                    createVNode(_component_Select, {
                      selectable: _ctx.status,
                      selected: _ctx.formStatus.status,
                      modelValue: _ctx.formStatus.status,
                      "onUpdate:modelValue": ($event) => _ctx.formStatus.status = $event
                    }, {
                      title: withCtx(() => [
                        createTextVNode(" Cambio de estado ")
                      ]),
                      _: 1
                    }, 8, ["selectable", "selected", "modelValue", "onUpdate:modelValue"])
                  ]),
                  createVNode("div", { class: "my-2 mt-3" }, [
                    createVNode(_component_Label, {
                      for: "comments",
                      value: "Comentarios"
                    }),
                    withDirectives(createVNode("textarea", {
                      class: "w-full text-gray-600 border-dark-brand focus:border-blue-brand focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm",
                      name: "comments",
                      id: "comments",
                      rows: "2",
                      placeholder: "Escribe un comentario",
                      "onUpdate:modelValue": ($event) => _ctx.formStatus.comments = $event
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelText, _ctx.formStatus.comments]
                    ])
                  ]),
                  createVNode("div", { class: "w-full" }, [
                    createVNode(_component_jet_button, {
                      class: [{ "opacity-25": _ctx.formStatus.processing }, "mr-4 mx-auto"],
                      disabled: _ctx.formStatus.processing
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Cambiar ")
                      ]),
                      _: 1
                    }, 8, ["class", "disabled"])
                  ])
                ], 40, ["onSubmit"])
              ];
            }
          }),
          footer: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_jet_secondary_button, { onClick: _ctx.changeStatus }, {
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
                createVNode(_component_jet_secondary_button, { onClick: _ctx.changeStatus }, {
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
        _push2(`</div><div class="col-span-3 flex flex-col justify-between items-center mb-5"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_DangerButton, {
          onClick: _ctx.deleteTransaction,
          class: "mx-auto"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Eliminar `);
            } else {
              return [
                createTextVNode(" Eliminar ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_ConfirmationModal, {
          show: _ctx.delete,
          onClose: _ctx.deleteTransaction
        }, {
          title: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Eliminar transacci\xF3n `);
            } else {
              return [
                createTextVNode(" Eliminar transacci\xF3n ")
              ];
            }
          }),
          content: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` \xBFSeguro que quieres eliminar esta transacci\xF3n? `);
            } else {
              return [
                createTextVNode(" \xBFSeguro que quieres eliminar esta transacci\xF3n? ")
              ];
            }
          }),
          footer: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<form class="mr-4"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_DangerButton, {
                class: { "opacity-25": _ctx.formDelete.processing },
                disabled: _ctx.formDelete.processing
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` Eliminar `);
                  } else {
                    return [
                      createTextVNode(" Eliminar ")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</form>`);
              _push3(ssrRenderComponent(_component_jet_secondary_button, { onClick: _ctx.deleteTransaction }, {
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
                createVNode("form", {
                  onSubmit: withModifiers(_ctx.submitDelete, ["prevent"]),
                  class: "mr-4"
                }, [
                  createVNode(_component_DangerButton, {
                    class: { "opacity-25": _ctx.formDelete.processing },
                    disabled: _ctx.formDelete.processing
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Eliminar ")
                    ]),
                    _: 1
                  }, 8, ["class", "disabled"])
                ], 40, ["onSubmit"]),
                createVNode(_component_jet_secondary_button, { onClick: _ctx.deleteTransaction }, {
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
        _push2(`</div></div></div></div></div></div>`);
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
                          createVNode("span", { class: "text-sm text-gray-600 mr-2" }, "Cliente: "),
                          createVNode("span", { class: "text-md font-semibold text-dark-brand" }, toDisplayString(_ctx.transaction.user.name + " " + _ctx.transaction.user.lastname), 1)
                        ]),
                        createVNode("span", { class: "flex justify-between items-center w-full" }, [
                          createVNode("span", { class: "text-sm text-gray-600 mr-2" }, "Tipo: "),
                          createVNode("span", { class: "text-sm font-semibold" }, toDisplayString(_ctx.transactionType(_ctx.transaction)), 1)
                        ]),
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
                          createVNode("span", { class: "text-sm text-gray-600 mr-1" }, "Confirma que el cliente haya realizado el pago a la cuenta bancaria:")
                        ])) : (openBlock(), createBlock("span", {
                          key: 1,
                          class: "flex justify-between items-center w-full"
                        }, [
                          createVNode("span", { class: "text-sm text-gray-600 mr-1" }, "Confirma que el cliente haya realizado el pago a la cuenta Skrill:")
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
                        }, " Transacci\xF3n Realizada ")) : _ctx.transaction.status === "Pendiente" ? (openBlock(), createBlock("span", {
                          key: 5,
                          class: "px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-orange-100 text-orange-700 mx-auto"
                        }, " Pago Pendiente ")) : _ctx.transaction.status === "Cancelado" ? (openBlock(), createBlock("span", {
                          key: 6,
                          class: "px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-orange-100 text-red-700 mx-auto"
                        }, " Transacci\xF3n Rechazada ")) : _ctx.transaction.status === "Procesando" ? (openBlock(), createBlock("span", {
                          key: 7,
                          class: "px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-orange-100 text-orange-600 mx-auto"
                        }, " Procesando... ")) : createCommentVNode("", true)
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
                          createVNode("span", { class: "text-sm text-gray-600 mr-1" }, "Realiza el pago a esta cuenta bancaria:")
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
                        }, " Transacci\xF3n Realizada ")) : _ctx.transaction.status === "Pendiente" ? (openBlock(), createBlock("span", {
                          key: 2,
                          class: "px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-orange-100 text-orange-700 mx-auto"
                        }, " Pago Pendiente ")) : _ctx.transaction.status === "Cancelado" ? (openBlock(), createBlock("span", {
                          key: 3,
                          class: "px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-orange-100 text-red-700 mx-auto"
                        }, " Transacci\xF3n Rechazada ")) : _ctx.transaction.status === "Procesando" ? (openBlock(), createBlock("span", {
                          key: 4,
                          class: "px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-orange-100 text-orange-600 mx-auto"
                        }, " Procesando... ")) : createCommentVNode("", true)
                      ])) : createCommentVNode("", true),
                      !_ctx.voucherExist ? (openBlock(), createBlock("div", {
                        key: 3,
                        class: "flex flex-col justify-between items-center mt-5"
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
                      ])) : (openBlock(), createBlock("div", {
                        key: 4,
                        class: "mt-5"
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
                        ], 40, ["onSubmit"]),
                        createVNode(_component_input_error, {
                          message: _ctx.form.errors.voucherUp,
                          class: "mt-2"
                        }, null, 8, ["message"])
                      ]))
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
                    createVNode("div", { class: "col-span-3 flex flex-col justify-between items-center mb-5" }, [
                      createVNode(_component_jet_button, {
                        onClick: _ctx.changeStatus,
                        class: "mx-auto"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Cambiar estado ")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(_component_jet_dialog_modal, {
                        show: _ctx.statusChange,
                        onClose: _ctx.changeStatus
                      }, {
                        title: withCtx(() => [
                          createTextVNode(" Cambiar estado de la transacci\xF3n ")
                        ]),
                        content: withCtx(() => [
                          createVNode("form", {
                            onSubmit: withModifiers(_ctx.submitStatus, ["prevent"])
                          }, [
                            createVNode("div", { class: "my-2" }, [
                              createVNode(_component_Select, {
                                selectable: _ctx.status,
                                selected: _ctx.formStatus.status,
                                modelValue: _ctx.formStatus.status,
                                "onUpdate:modelValue": ($event) => _ctx.formStatus.status = $event
                              }, {
                                title: withCtx(() => [
                                  createTextVNode(" Cambio de estado ")
                                ]),
                                _: 1
                              }, 8, ["selectable", "selected", "modelValue", "onUpdate:modelValue"])
                            ]),
                            createVNode("div", { class: "my-2 mt-3" }, [
                              createVNode(_component_Label, {
                                for: "comments",
                                value: "Comentarios"
                              }),
                              withDirectives(createVNode("textarea", {
                                class: "w-full text-gray-600 border-dark-brand focus:border-blue-brand focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm",
                                name: "comments",
                                id: "comments",
                                rows: "2",
                                placeholder: "Escribe un comentario",
                                "onUpdate:modelValue": ($event) => _ctx.formStatus.comments = $event
                              }, null, 8, ["onUpdate:modelValue"]), [
                                [vModelText, _ctx.formStatus.comments]
                              ])
                            ]),
                            createVNode("div", { class: "w-full" }, [
                              createVNode(_component_jet_button, {
                                class: [{ "opacity-25": _ctx.formStatus.processing }, "mr-4 mx-auto"],
                                disabled: _ctx.formStatus.processing
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Cambiar ")
                                ]),
                                _: 1
                              }, 8, ["class", "disabled"])
                            ])
                          ], 40, ["onSubmit"])
                        ]),
                        footer: withCtx(() => [
                          createVNode(_component_jet_secondary_button, { onClick: _ctx.changeStatus }, {
                            default: withCtx(() => [
                              createTextVNode(" Cerrar ")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ]),
                        _: 1
                      }, 8, ["show", "onClose"])
                    ]),
                    createVNode("div", { class: "col-span-3 flex flex-col justify-between items-center mb-5" }, [
                      createVNode(_component_DangerButton, {
                        onClick: _ctx.deleteTransaction,
                        class: "mx-auto"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Eliminar ")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(_component_ConfirmationModal, {
                        show: _ctx.delete,
                        onClose: _ctx.deleteTransaction
                      }, {
                        title: withCtx(() => [
                          createTextVNode(" Eliminar transacci\xF3n ")
                        ]),
                        content: withCtx(() => [
                          createTextVNode(" \xBFSeguro que quieres eliminar esta transacci\xF3n? ")
                        ]),
                        footer: withCtx(() => [
                          createVNode("form", {
                            onSubmit: withModifiers(_ctx.submitDelete, ["prevent"]),
                            class: "mr-4"
                          }, [
                            createVNode(_component_DangerButton, {
                              class: { "opacity-25": _ctx.formDelete.processing },
                              disabled: _ctx.formDelete.processing
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Eliminar ")
                              ]),
                              _: 1
                            }, 8, ["class", "disabled"])
                          ], 40, ["onSubmit"]),
                          createVNode(_component_jet_secondary_button, { onClick: _ctx.deleteTransaction }, {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/WalletExchange/Show.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Show = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Show as default
};
