import { defineComponent, resolveComponent, mergeProps, withCtx, createTextVNode, createVNode, withModifiers, openBlock, createBlock, createCommentVNode, toDisplayString, useSSRContext } from "vue";
import { A as AppLayout } from "./AppLayout.8882d74f.mjs";
import { _ as _sfc_main$1 } from "./Button.feee2cab.mjs";
import { _ as _sfc_main$6 } from "./SecondaryButton.987206fe.mjs";
import { _ as _sfc_main$2 } from "./Input.c38a320e.mjs";
import { _ as _sfc_main$3 } from "./InputError.bc94ef1e.mjs";
import { _ as _sfc_main$4 } from "./Label.ceceda67.mjs";
import { J as JetSelect } from "./Select.c3ee249a.mjs";
import CalculateSellBalance from "./CalculateSellBalance.f37b453b.mjs";
import { _ as _sfc_main$5 } from "./DialogModal.04a42090.mjs";
import { Link } from "@inertiajs/inertia-vue3";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.43be4956.mjs";
import "./ResponsiveNavLink.105dcaab.mjs";
import "./logoweb.e431fb6b.mjs";
import "./NavLink.67838388.mjs";
import "@fortawesome/vue-fontawesome";
import "@fortawesome/fontawesome-svg-core";
import "@fortawesome/free-solid-svg-icons";
import "@fortawesome/free-brands-svg-icons";
import "@headlessui/vue";
import "@heroicons/vue/solid";
import "./Modal.688f150f.mjs";
const _sfc_main = defineComponent({
  components: {
    AppLayout,
    JetButton: _sfc_main$1,
    JetInput: _sfc_main$2,
    JetInputError: _sfc_main$3,
    JetLabel: _sfc_main$4,
    JetSelect,
    CalculateSellBalance,
    DialogModal: _sfc_main$5,
    Link,
    SecondaryButton: _sfc_main$6
  },
  props: [
    "exchange",
    "account",
    "wallets",
    "walletAccount",
    "dataUser"
  ],
  data() {
    return {
      form: this.$inertia.form({
        wallet: this.wallets[0],
        amount_usd: 10
      }),
      formWallet: this.$inertia.form({
        wallet: this.wallets[0],
        email: null,
        mobil: null
      }),
      show: this.issetWallet ? false : true
    };
  },
  setup(props) {
    const amount_cop = 0;
    const issetWallet = props.walletAccount.length > 0 ? true : false;
    return {
      amount_cop,
      issetWallet
    };
  },
  methods: {
    submit() {
      this.form.post(this.route("users.storeWalletExchangeWithdrawal"));
    },
    walletStore() {
      this.formWallet.post(this.route("users.storeWalletAccount"), {
        onSuccess: () => (this.closeModal(), this.issetWallet = true)
      });
    },
    closeModal() {
      this.show = false;
    },
    showModal() {
      this.show = true;
    }
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_app_layout = resolveComponent("app-layout");
  const _component_Link = resolveComponent("Link");
  const _component_DialogModal = resolveComponent("DialogModal");
  const _component_jet_label = resolveComponent("jet-label");
  const _component_jet_input = resolveComponent("jet-input");
  const _component_jet_input_error = resolveComponent("jet-input-error");
  const _component_jet_button = resolveComponent("jet-button");
  const _component_SecondaryButton = resolveComponent("SecondaryButton");
  const _component_jet_select = resolveComponent("jet-select");
  const _component_CalculateSellBalance = resolveComponent("CalculateSellBalance");
  _push(ssrRenderComponent(_component_app_layout, mergeProps({ title: "Vender Saldo" }, _attrs), {
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
        _push2(`Solicitud Venta Saldo De Skrill </h2>`);
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
            createTextVNode("Solicitud Venta Saldo De Skrill ")
          ])
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="py-6 w-full"${_scopeId}><div class="flex mx-auto lg:mr-4"${_scopeId}><div class="container mx-auto sm:px-6 lg:px-8"${_scopeId}><div class="bg-white overflow-hidden shadow-xl sm:rounded-lg"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_DialogModal, {
          show: _ctx.show,
          onClose: _ctx.closeModal
        }, {
          title: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Registra tu cuenta de Skrill `);
            } else {
              return [
                createTextVNode(" Registra tu cuenta de Skrill ")
              ];
            }
          }),
          content: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<form class="grid grid-cols-8"${_scopeId2}><div class="col-span-6 col-start-2 mt-4"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_jet_label, {
                for: "email",
                value: "Email registrado en Skrill"
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_jet_input, {
                id: "email",
                type: "email",
                class: "mt-1 block w-full",
                modelValue: _ctx.formWallet.email,
                "onUpdate:modelValue": ($event) => _ctx.formWallet.email = $event
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_jet_input_error, {
                message: _ctx.formWallet.errors.email,
                class: "mt-2"
              }, null, _parent3, _scopeId2));
              _push3(`</div><div class="col-span-6 col-start-2 mt-2"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_jet_label, {
                for: "mobil",
                value: "Celular registrado en Skrill"
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_jet_input, {
                id: "mobil",
                type: "tel",
                class: "mt-1 block w-full",
                modelValue: _ctx.formWallet.mobil,
                "onUpdate:modelValue": ($event) => _ctx.formWallet.mobil = $event
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_jet_input_error, {
                message: _ctx.formWallet.errors.mobil,
                class: "mt-2"
              }, null, _parent3, _scopeId2));
              _push3(`</div>\` <div class="col-span-6 col-start-2 mt-4"${_scopeId2}><ul class="list-disc"${_scopeId2}><li${_scopeId2}><span class="text-sm text-blue-brand-gradient1 font-semibold text-center"${_scopeId2}> Es necesario registrar tu cuenta de Skrill para poder realizar una solicitud de compra de saldo. </span></li><li${_scopeId2}><span class="text-sm text-blue-brand-gradient1 font-semibold text-center"${_scopeId2}> La cuenta que registres debe estar a tu nombre, de lo contrario se pueden reversar las operaciones con posibles sobrecostos operativos que debes asumir. </span></li></ul></div><div class="col-span-8 flex justify-center items-center mt-4"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_jet_button, {
                class: ["mx-auto mb-4 max-w-max", { "opacity-25": _ctx.formWallet.processing }]
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` Registrar `);
                  } else {
                    return [
                      createTextVNode(" Registrar ")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div></form>`);
            } else {
              return [
                createVNode("form", {
                  onSubmit: withModifiers(_ctx.walletStore, ["prevent"]),
                  class: "grid grid-cols-8"
                }, [
                  createVNode("div", { class: "col-span-6 col-start-2 mt-4" }, [
                    createVNode(_component_jet_label, {
                      for: "email",
                      value: "Email registrado en Skrill"
                    }),
                    createVNode(_component_jet_input, {
                      id: "email",
                      type: "email",
                      class: "mt-1 block w-full",
                      modelValue: _ctx.formWallet.email,
                      "onUpdate:modelValue": ($event) => _ctx.formWallet.email = $event
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_component_jet_input_error, {
                      message: _ctx.formWallet.errors.email,
                      class: "mt-2"
                    }, null, 8, ["message"])
                  ]),
                  createVNode("div", { class: "col-span-6 col-start-2 mt-2" }, [
                    createVNode(_component_jet_label, {
                      for: "mobil",
                      value: "Celular registrado en Skrill"
                    }),
                    createVNode(_component_jet_input, {
                      id: "mobil",
                      type: "tel",
                      class: "mt-1 block w-full",
                      modelValue: _ctx.formWallet.mobil,
                      "onUpdate:modelValue": ($event) => _ctx.formWallet.mobil = $event
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_component_jet_input_error, {
                      message: _ctx.formWallet.errors.mobil,
                      class: "mt-2"
                    }, null, 8, ["message"])
                  ]),
                  createTextVNode("` "),
                  createVNode("div", { class: "col-span-6 col-start-2 mt-4" }, [
                    createVNode("ul", { class: "list-disc" }, [
                      createVNode("li", null, [
                        createVNode("span", { class: "text-sm text-blue-brand-gradient1 font-semibold text-center" }, " Es necesario registrar tu cuenta de Skrill para poder realizar una solicitud de compra de saldo. ")
                      ]),
                      createVNode("li", null, [
                        createVNode("span", { class: "text-sm text-blue-brand-gradient1 font-semibold text-center" }, " La cuenta que registres debe estar a tu nombre, de lo contrario se pueden reversar las operaciones con posibles sobrecostos operativos que debes asumir. ")
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "col-span-8 flex justify-center items-center mt-4" }, [
                    createVNode(_component_jet_button, {
                      class: ["mx-auto mb-4 max-w-max", { "opacity-25": _ctx.formWallet.processing }]
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Registrar ")
                      ]),
                      _: 1
                    }, 8, ["class"])
                  ])
                ], 40, ["onSubmit"])
              ];
            }
          }),
          footer: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_SecondaryButton, { onClick: _ctx.closeModal }, {
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
                createVNode(_component_SecondaryButton, { onClick: _ctx.closeModal }, {
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
        _push2(`<div class="grid grid-cols-12 p-4"${_scopeId}>`);
        if (!_ctx.issetWallet) {
          _push2(`<div class="col-span-12 flex justify-center items-center p-4"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_jet_button, {
            onClick: _ctx.showModal,
            class: "mx-auto"
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(` Registrar Cuenta Skrill `);
              } else {
                return [
                  createTextVNode(" Registrar Cuenta Skrill ")
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
          _push2(`</div>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`<div class="col-span-12 flex justify-center items-center p-4"${_scopeId}><div class="rounded-lg bg-slate-200 text-dark-brand p-4 w-auto flex flex-col items-start mx-auto"${_scopeId}><span class="text-sm text-gray-600 font-semibold"${_scopeId}>El pago ser\xE1 realizado a la siguiente cuenta bancaria registrada.</span><span class="font-semibold"${_scopeId}>${ssrInterpolate(_ctx.account[0].user.name + " " + _ctx.account[0].user.lastname)}</span><span class="flex"${_scopeId}><span class="text-sm text-gray-600 mr-1"${_scopeId}>Documento: </span><span class="text-sm font-semibold text-dark-brand"${_scopeId}>${ssrInterpolate(_ctx.account[0].user.data_user.doc_num)}</span></span><span class="flex"${_scopeId}><span class="text-sm text-gray-600 mr-1"${_scopeId}>Banco: </span><span class="text-sm font-semibold text-dark-brand"${_scopeId}>${ssrInterpolate(_ctx.account[0].bank.name)}</span></span><span class="flex"${_scopeId}><span class="text-sm text-gray-600 mr-1"${_scopeId}>Cuenta: </span><span class="text-sm font-semibold text-dark-brand"${_scopeId}>${ssrInterpolate(_ctx.account[0].number)}</span></span><span class="flex mb-2"${_scopeId}><span class="text-sm text-gray-600 mr-1"${_scopeId}>Tipo de Cuenta: </span><span class="text-sm font-semibold text-dark-brand"${_scopeId}>${ssrInterpolate(_ctx.account[0].type)}</span></span><div class="max-w-max mx-auto mt-2"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Link, {
          href: _ctx.route("accounts.create.user"),
          class: "inline-flex items-center px-4 py-2 bg-dark-brand border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Cambiar `);
            } else {
              return [
                createTextVNode(" Cambiar ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div></div></div><div class="col-span-12 md:col-start-2 md:col-span-10 p-4"${_scopeId}><form${_scopeId}><div class="grid grid-cols-6 gap-1"${_scopeId}><div class="col-span-6 md:col-span-3"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_select, {
          selectable: _ctx.wallets,
          selected: _ctx.form.wallet,
          modelValue: _ctx.form.wallet,
          "onUpdate:modelValue": ($event) => _ctx.form.wallet = $event
        }, {
          title: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Wallet `);
            } else {
              return [
                createTextVNode(" Wallet ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_jet_input_error, {
          message: _ctx.form.errors.wallet,
          class: "mt-2"
        }, null, _parent2, _scopeId));
        _push2(`</div><div class="col-span-6 md:col-span-3"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_label, {
          for: "amount_usd",
          value: "Monto USD"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_jet_input, {
          id: "amount_usd",
          type: "number",
          step: "0.01",
          class: "mt-1 block w-full",
          modelValue: _ctx.form.amount_usd,
          "onUpdate:modelValue": ($event) => _ctx.form.amount_usd = $event
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_jet_input_error, {
          message: _ctx.form.errors.amount_usd,
          class: "mt-2"
        }, null, _parent2, _scopeId));
        _push2(`</div><div class="col-span-6"${_scopeId}>`);
        if (_ctx.issetWallet) {
          _push2(ssrRenderComponent(_component_CalculateSellBalance, {
            amountUsd: _ctx.form.amount_usd,
            amountCop: _ctx.amount_cop,
            dollarPrice: _ctx.exchange[0].dollar_sell,
            walletVip: _ctx.walletAccount[0].vip,
            user: _ctx.$page.props.user
          }, null, _parent2, _scopeId));
        } else {
          _push2(ssrRenderComponent(_component_CalculateSellBalance, {
            amountUsd: _ctx.form.amount_usd,
            amountCop: _ctx.amount_cop,
            dollarPrice: _ctx.exchange[0].dollar_sell,
            walletVip: 0,
            user: _ctx.$page.props.user
          }, null, _parent2, _scopeId));
        }
        _push2(`</div></div><div class="grid grid-cols-1 items-center mt-4"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_button, {
          class: ["mx-auto mb-4 max-w-max", { "opacity-25": _ctx.form.processing }]
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Solicitar `);
            } else {
              return [
                createTextVNode(" Solicitar ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div></form></div></div></div></div></div></div>`);
      } else {
        return [
          createVNode("div", { class: "py-6 w-full" }, [
            createVNode("div", { class: "flex mx-auto lg:mr-4" }, [
              createVNode("div", { class: "container mx-auto sm:px-6 lg:px-8" }, [
                createVNode("div", { class: "bg-white overflow-hidden shadow-xl sm:rounded-lg" }, [
                  createVNode(_component_DialogModal, {
                    show: _ctx.show,
                    onClose: _ctx.closeModal
                  }, {
                    title: withCtx(() => [
                      createTextVNode(" Registra tu cuenta de Skrill ")
                    ]),
                    content: withCtx(() => [
                      createVNode("form", {
                        onSubmit: withModifiers(_ctx.walletStore, ["prevent"]),
                        class: "grid grid-cols-8"
                      }, [
                        createVNode("div", { class: "col-span-6 col-start-2 mt-4" }, [
                          createVNode(_component_jet_label, {
                            for: "email",
                            value: "Email registrado en Skrill"
                          }),
                          createVNode(_component_jet_input, {
                            id: "email",
                            type: "email",
                            class: "mt-1 block w-full",
                            modelValue: _ctx.formWallet.email,
                            "onUpdate:modelValue": ($event) => _ctx.formWallet.email = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(_component_jet_input_error, {
                            message: _ctx.formWallet.errors.email,
                            class: "mt-2"
                          }, null, 8, ["message"])
                        ]),
                        createVNode("div", { class: "col-span-6 col-start-2 mt-2" }, [
                          createVNode(_component_jet_label, {
                            for: "mobil",
                            value: "Celular registrado en Skrill"
                          }),
                          createVNode(_component_jet_input, {
                            id: "mobil",
                            type: "tel",
                            class: "mt-1 block w-full",
                            modelValue: _ctx.formWallet.mobil,
                            "onUpdate:modelValue": ($event) => _ctx.formWallet.mobil = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(_component_jet_input_error, {
                            message: _ctx.formWallet.errors.mobil,
                            class: "mt-2"
                          }, null, 8, ["message"])
                        ]),
                        createTextVNode("` "),
                        createVNode("div", { class: "col-span-6 col-start-2 mt-4" }, [
                          createVNode("ul", { class: "list-disc" }, [
                            createVNode("li", null, [
                              createVNode("span", { class: "text-sm text-blue-brand-gradient1 font-semibold text-center" }, " Es necesario registrar tu cuenta de Skrill para poder realizar una solicitud de compra de saldo. ")
                            ]),
                            createVNode("li", null, [
                              createVNode("span", { class: "text-sm text-blue-brand-gradient1 font-semibold text-center" }, " La cuenta que registres debe estar a tu nombre, de lo contrario se pueden reversar las operaciones con posibles sobrecostos operativos que debes asumir. ")
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "col-span-8 flex justify-center items-center mt-4" }, [
                          createVNode(_component_jet_button, {
                            class: ["mx-auto mb-4 max-w-max", { "opacity-25": _ctx.formWallet.processing }]
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Registrar ")
                            ]),
                            _: 1
                          }, 8, ["class"])
                        ])
                      ], 40, ["onSubmit"])
                    ]),
                    footer: withCtx(() => [
                      createVNode(_component_SecondaryButton, { onClick: _ctx.closeModal }, {
                        default: withCtx(() => [
                          createTextVNode(" Cerrar ")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ]),
                    _: 1
                  }, 8, ["show", "onClose"]),
                  createVNode("div", { class: "grid grid-cols-12 p-4" }, [
                    !_ctx.issetWallet ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "col-span-12 flex justify-center items-center p-4"
                    }, [
                      createVNode(_component_jet_button, {
                        onClick: _ctx.showModal,
                        class: "mx-auto"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Registrar Cuenta Skrill ")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ])) : createCommentVNode("", true),
                    createVNode("div", { class: "col-span-12 flex justify-center items-center p-4" }, [
                      createVNode("div", { class: "rounded-lg bg-slate-200 text-dark-brand p-4 w-auto flex flex-col items-start mx-auto" }, [
                        createVNode("span", { class: "text-sm text-gray-600 font-semibold" }, "El pago ser\xE1 realizado a la siguiente cuenta bancaria registrada."),
                        createVNode("span", { class: "font-semibold" }, toDisplayString(_ctx.account[0].user.name + " " + _ctx.account[0].user.lastname), 1),
                        createVNode("span", { class: "flex" }, [
                          createVNode("span", { class: "text-sm text-gray-600 mr-1" }, "Documento: "),
                          createVNode("span", { class: "text-sm font-semibold text-dark-brand" }, toDisplayString(_ctx.account[0].user.data_user.doc_num), 1)
                        ]),
                        createVNode("span", { class: "flex" }, [
                          createVNode("span", { class: "text-sm text-gray-600 mr-1" }, "Banco: "),
                          createVNode("span", { class: "text-sm font-semibold text-dark-brand" }, toDisplayString(_ctx.account[0].bank.name), 1)
                        ]),
                        createVNode("span", { class: "flex" }, [
                          createVNode("span", { class: "text-sm text-gray-600 mr-1" }, "Cuenta: "),
                          createVNode("span", { class: "text-sm font-semibold text-dark-brand" }, toDisplayString(_ctx.account[0].number), 1)
                        ]),
                        createVNode("span", { class: "flex mb-2" }, [
                          createVNode("span", { class: "text-sm text-gray-600 mr-1" }, "Tipo de Cuenta: "),
                          createVNode("span", { class: "text-sm font-semibold text-dark-brand" }, toDisplayString(_ctx.account[0].type), 1)
                        ]),
                        createVNode("div", { class: "max-w-max mx-auto mt-2" }, [
                          createVNode(_component_Link, {
                            href: _ctx.route("accounts.create.user"),
                            class: "inline-flex items-center px-4 py-2 bg-dark-brand border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Cambiar ")
                            ]),
                            _: 1
                          }, 8, ["href"])
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "col-span-12 md:col-start-2 md:col-span-10 p-4" }, [
                      createVNode("form", {
                        onSubmit: withModifiers(_ctx.submit, ["prevent"])
                      }, [
                        createVNode("div", { class: "grid grid-cols-6 gap-1" }, [
                          createVNode("div", { class: "col-span-6 md:col-span-3" }, [
                            createVNode(_component_jet_select, {
                              selectable: _ctx.wallets,
                              selected: _ctx.form.wallet,
                              modelValue: _ctx.form.wallet,
                              "onUpdate:modelValue": ($event) => _ctx.form.wallet = $event
                            }, {
                              title: withCtx(() => [
                                createTextVNode(" Wallet ")
                              ]),
                              _: 1
                            }, 8, ["selectable", "selected", "modelValue", "onUpdate:modelValue"]),
                            createVNode(_component_jet_input_error, {
                              message: _ctx.form.errors.wallet,
                              class: "mt-2"
                            }, null, 8, ["message"])
                          ]),
                          createVNode("div", { class: "col-span-6 md:col-span-3" }, [
                            createVNode(_component_jet_label, {
                              for: "amount_usd",
                              value: "Monto USD"
                            }),
                            createVNode(_component_jet_input, {
                              id: "amount_usd",
                              type: "number",
                              step: "0.01",
                              class: "mt-1 block w-full",
                              modelValue: _ctx.form.amount_usd,
                              "onUpdate:modelValue": ($event) => _ctx.form.amount_usd = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_component_jet_input_error, {
                              message: _ctx.form.errors.amount_usd,
                              class: "mt-2"
                            }, null, 8, ["message"])
                          ]),
                          createVNode("div", { class: "col-span-6" }, [
                            _ctx.issetWallet ? (openBlock(), createBlock(_component_CalculateSellBalance, {
                              key: 0,
                              amountUsd: _ctx.form.amount_usd,
                              amountCop: _ctx.amount_cop,
                              dollarPrice: _ctx.exchange[0].dollar_sell,
                              walletVip: _ctx.walletAccount[0].vip,
                              user: _ctx.$page.props.user
                            }, null, 8, ["amountUsd", "amountCop", "dollarPrice", "walletVip", "user"])) : (openBlock(), createBlock(_component_CalculateSellBalance, {
                              key: 1,
                              amountUsd: _ctx.form.amount_usd,
                              amountCop: _ctx.amount_cop,
                              dollarPrice: _ctx.exchange[0].dollar_sell,
                              walletVip: 0,
                              user: _ctx.$page.props.user
                            }, null, 8, ["amountUsd", "amountCop", "dollarPrice", "user"]))
                          ])
                        ]),
                        createVNode("div", { class: "grid grid-cols-1 items-center mt-4" }, [
                          createVNode(_component_jet_button, {
                            class: ["mx-auto mb-4 max-w-max", { "opacity-25": _ctx.form.processing }]
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Solicitar ")
                            ]),
                            _: 1
                          }, 8, ["class"])
                        ])
                      ], 40, ["onSubmit"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/WalletExchange/CreateWithdrawalWallet.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CreateWithdrawalWallet = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  CreateWithdrawalWallet as default
};
