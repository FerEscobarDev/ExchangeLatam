import { mergeProps, useSSRContext, defineComponent, resolveComponent, withCtx, createTextVNode, createVNode, withModifiers } from "vue";
import { A as AppLayout } from "./AppLayout.8882d74f.mjs";
import { _ as _sfc_main$2 } from "./Button.feee2cab.mjs";
import { _ as _sfc_main$3 } from "./Input.c38a320e.mjs";
import { _ as _sfc_main$4 } from "./InputError.bc94ef1e.mjs";
import { _ as _sfc_main$5 } from "./Label.ceceda67.mjs";
import { J as JetSelect } from "./Select.c3ee249a.mjs";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.43be4956.mjs";
import { Link } from "@inertiajs/inertia-vue3";
import "./ResponsiveNavLink.105dcaab.mjs";
import "./logoweb.e431fb6b.mjs";
import "./NavLink.67838388.mjs";
import "@fortawesome/vue-fontawesome";
import "@fortawesome/fontawesome-svg-core";
import "@fortawesome/free-solid-svg-icons";
import "@fortawesome/free-brands-svg-icons";
import "@headlessui/vue";
import "@heroicons/vue/solid";
const _sfc_main$1 = {
  props: ["amountUsd", "dollarPrice", "amountCop", "tradingVip", "user"],
  methods: {
    usdFormat(amountUsd) {
      if (amountUsd === "") {
        amountUsd = 0;
      }
      return parseFloat(amountUsd).toFixed(2);
    },
    copAmount(amountCop, dollarPrice, amountUsd) {
      if (amountCop > 0) {
        return amountCop.toFixed(2);
      } else {
        return (parseFloat(amountUsd) * parseInt(dollarPrice)).toFixed(2);
      }
    },
    comission(amountCop) {
      return (amountCop * 0.015 / 1.19).toFixed(2);
    },
    valIva(comission) {
      return (comission * 0.19).toFixed(2);
    },
    vipRebate(amountUsd, comission, vip) {
      let rebateVip = 0;
      if (vip === "yes" || this.tradingVip) {
        if (amountUsd >= 500) {
          rebateVip = comission;
        } else {
          rebateVip = 0;
        }
      } else {
        rebateVip = 0;
      }
      return parseFloat(rebateVip).toFixed(2);
    },
    total(amountCop, dollarPrice, amountUsd, vip) {
      let comission;
      let iva;
      let rebateVip;
      let total;
      if (amountCop > 0) {
        amountCop = 0;
      } else {
        amountCop = parseFloat(amountUsd) * parseInt(dollarPrice);
      }
      comission = parseFloat(amountCop * 0.015 / 1.19);
      iva = parseFloat(comission * 0.19);
      if (vip === "yes" || this.tradingVip) {
        if (amountUsd >= 500) {
          rebateVip = comission;
        } else {
          rebateVip = 0;
        }
      } else {
        rebateVip = 0;
      }
      total = amountCop + comission + iva - rebateVip;
      return total.toFixed(2);
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col justify-between items-center mt-5 w-full" }, _attrs))}><div class="rounded-lg text-dark-brand w-80 flex flex-col items-center"><span class="flex justify-between items-center w-full mt-2"><span class="text-sm text-gray-600 mr-1">Dep\xF3sito USD: </span><span class="font-semibold text-dark-brand">$ ${ssrInterpolate($options.usdFormat($props.amountUsd))}</span></span><span class="flex justify-between items-center w-full"><span class="text-sm text-gray-600 mr-1">Monto COP: </span><span class="font-semibold text-dark-brand">$ ${ssrInterpolate($options.copAmount($props.amountCop, $props.dollarPrice, $options.usdFormat($props.amountUsd)))}</span></span><span class="flex justify-between items-center w-full"><span class="text-sm text-gray-600 mr-1">Comisi\xF3n: </span><span class="font-semibold text-dark-brand">$ ${ssrInterpolate($options.comission($options.copAmount($props.amountCop, $props.dollarPrice, $options.usdFormat($props.amountUsd))))}</span></span><span class="flex justify-between items-center w-full"><span class="text-sm text-gray-600 mr-1">Impuesto IVA: </span><span class="font-semibold text-dark-brand">$ ${ssrInterpolate($options.valIva($options.comission($options.copAmount($props.amountCop, $props.dollarPrice, $options.usdFormat($props.amountUsd)))))}</span></span><span class="flex justify-between items-center w-full"><span class="text-sm text-gray-600 mr-1">Descuento VIP: </span><span class="font-semibold text-dark-brand">$ ${ssrInterpolate($options.vipRebate($props.amountUsd, $options.comission($options.copAmount($props.amountCop, $props.dollarPrice, $options.usdFormat($props.amountUsd))), $props.user.data_user.vip))}</span></span><span class="flex justify-between items-center w-full"><span class="text-sm text-gray-600 mr-1">Total a pagar COP: </span><span class="font-semibold text-dark-brand">$ ${ssrInterpolate($options.total($props.amountCop, $props.dollarPrice, $options.usdFormat($props.amountUsd), $props.user.data_user.vip))}</span></span><h2 class="text-lg text-dark-brand font-semibold mt-2">Recibes en Broker $${ssrInterpolate($options.usdFormat($props.amountUsd))} USD</h2></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/CalculateDeposit.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const JetCalculateDeposit = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = defineComponent({
  components: {
    AppLayout,
    JetButton: _sfc_main$2,
    JetInput: _sfc_main$3,
    JetInputError: _sfc_main$4,
    JetLabel: _sfc_main$5,
    JetSelect,
    JetCalculateDeposit,
    Link
  },
  props: [
    "exchange",
    "accounts",
    "brokers",
    "tradingAccounts",
    "dataUser"
  ],
  data() {
    return {
      form: this.$inertia.form({
        broker: this.brokers[0],
        tradingAccount: null,
        amount_usd: 10,
        account: this.accounts[0]
      })
    };
  },
  setup() {
    const amount_cop = 0;
    return {
      amount_cop
    };
  },
  methods: {
    submit() {
      this.form.post(this.route("deposit.store"));
    }
  },
  computed: {
    tradingAccountVip() {
      let vip = false;
      if (this.tradingAccounts[0] && this.form.tradingAccount) {
        this.tradingAccounts.forEach((element) => {
          if (this.form.tradingAccount === element.number) {
            if (this.form.broker.id === element.broker_id) {
              if (element.vip === 1) {
                console.log("Si es cuenta VIP");
                return vip = true;
              }
            }
          }
        });
      }
      return vip;
    }
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_app_layout = resolveComponent("app-layout");
  const _component_Link = resolveComponent("Link");
  const _component_jet_select = resolveComponent("jet-select");
  const _component_jet_label = resolveComponent("jet-label");
  const _component_jet_input = resolveComponent("jet-input");
  const _component_jet_input_error = resolveComponent("jet-input-error");
  const _component_jet_calculate_deposit = resolveComponent("jet-calculate-deposit");
  const _component_jet_button = resolveComponent("jet-button");
  _push(ssrRenderComponent(_component_app_layout, mergeProps({ title: "Solicitud de dep\xF3sito" }, _attrs), {
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
          href: _ctx.route("users.deposits"),
          class: "text-blue-brand-gradient1 font-semibold hover:text-blue-brand"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Dep\xF3sitos a broker/`);
            } else {
              return [
                createTextVNode("Dep\xF3sitos a broker/")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`Solicitud de dep\xF3sito </h2>`);
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
              href: _ctx.route("users.deposits"),
              class: "text-blue-brand-gradient1 font-semibold hover:text-blue-brand"
            }, {
              default: withCtx(() => [
                createTextVNode("Dep\xF3sitos a broker/")
              ]),
              _: 1
            }, 8, ["href"]),
            createTextVNode("Solicitud de dep\xF3sito ")
          ])
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="py-6 w-full"${_scopeId}><div class="flex mx-auto lg:mr-4"${_scopeId}><div class="container mx-auto sm:px-6 lg:px-8"${_scopeId}><div class="bg-white overflow-hidden shadow-xl sm:rounded-lg"${_scopeId}><div class="grid grid-cols-12 p-4"${_scopeId}><div class="col-span-12 flex justify-center items-center p-4"${_scopeId}><div class="h-16 w-32 shadow-lg bg-dark-brand rounded-l-lg border border-gray-300 flex items-center justify-center"${_scopeId}><span class="text-white font-semibold text-lg"${_scopeId}>USD</span></div><div class="h-16 w-32 shadow-lg bg-opacity-10 bg-dark-brand hover:bg-opacity-20 hover:shadow-xl rounded-r-lg border border-gray-300 flex items-center justify-center transition"${_scopeId}><span class="text-dark-brand font-semibold text-lg"${_scopeId}>COP</span></div></div><div class="col-span-12 md:col-start-2 md:col-span-10 p-4"${_scopeId}><form${_scopeId}><div class="grid grid-cols-8 gap-1"${_scopeId}><div class="col-span-8 md:col-span-4 xl:col-span-2"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_select, {
          selectable: _ctx.brokers,
          selected: _ctx.form.broker,
          modelValue: _ctx.form.broker,
          "onUpdate:modelValue": ($event) => _ctx.form.broker = $event
        }, {
          title: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Broker `);
            } else {
              return [
                createTextVNode(" Broker ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div><div class="col-span-8 md:col-span-4 xl:col-span-2"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_label, {
          for: "tradingAccount",
          value: "Cuenta Broker"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_jet_input, {
          id: "tradingAccount",
          type: "number",
          class: "mt-1 block w-full",
          modelValue: _ctx.form.tradingAccount,
          "onUpdate:modelValue": ($event) => _ctx.form.tradingAccount = $event
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_jet_input_error, {
          message: _ctx.form.errors.tradingAccount,
          class: "mt-2"
        }, null, _parent2, _scopeId));
        _push2(`</div><div class="col-span-8 md:col-span-4 xl:col-span-2"${_scopeId}>`);
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
        _push2(`</div><div class="col-span-8 md:col-span-4 xl:col-span-2"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_select, {
          selectable: _ctx.accounts,
          selected: _ctx.form.account,
          modelValue: _ctx.form.account,
          "onUpdate:modelValue": ($event) => _ctx.form.account = $event
        }, {
          title: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Seleccione el banco `);
            } else {
              return [
                createTextVNode(" Seleccione el banco ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div><div class="col-span-8 lg:col-start-3 lg:col-span-4"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_calculate_deposit, {
          amountUsd: _ctx.form.amount_usd,
          amountCop: _ctx.amount_cop,
          dollarPrice: _ctx.exchange,
          tradingVip: _ctx.tradingAccountVip,
          user: _ctx.$page.props.user
        }, null, _parent2, _scopeId));
        _push2(`</div></div><div class="grid grid-cols-1 items-center mt-4"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_button, {
          class: ["mx-auto mb-4 max-w-max", { "opacity-25": _ctx.form.processing }],
          disabled: false
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
                  createVNode("div", { class: "grid grid-cols-12 p-4" }, [
                    createVNode("div", { class: "col-span-12 flex justify-center items-center p-4" }, [
                      createVNode("div", { class: "h-16 w-32 shadow-lg bg-dark-brand rounded-l-lg border border-gray-300 flex items-center justify-center" }, [
                        createVNode("span", { class: "text-white font-semibold text-lg" }, "USD")
                      ]),
                      createVNode("div", { class: "h-16 w-32 shadow-lg bg-opacity-10 bg-dark-brand hover:bg-opacity-20 hover:shadow-xl rounded-r-lg border border-gray-300 flex items-center justify-center transition" }, [
                        createVNode("span", { class: "text-dark-brand font-semibold text-lg" }, "COP")
                      ])
                    ]),
                    createVNode("div", { class: "col-span-12 md:col-start-2 md:col-span-10 p-4" }, [
                      createVNode("form", {
                        onSubmit: withModifiers(_ctx.submit, ["prevent"])
                      }, [
                        createVNode("div", { class: "grid grid-cols-8 gap-1" }, [
                          createVNode("div", { class: "col-span-8 md:col-span-4 xl:col-span-2" }, [
                            createVNode(_component_jet_select, {
                              selectable: _ctx.brokers,
                              selected: _ctx.form.broker,
                              modelValue: _ctx.form.broker,
                              "onUpdate:modelValue": ($event) => _ctx.form.broker = $event
                            }, {
                              title: withCtx(() => [
                                createTextVNode(" Broker ")
                              ]),
                              _: 1
                            }, 8, ["selectable", "selected", "modelValue", "onUpdate:modelValue"])
                          ]),
                          createVNode("div", { class: "col-span-8 md:col-span-4 xl:col-span-2" }, [
                            createVNode(_component_jet_label, {
                              for: "tradingAccount",
                              value: "Cuenta Broker"
                            }),
                            createVNode(_component_jet_input, {
                              id: "tradingAccount",
                              type: "number",
                              class: "mt-1 block w-full",
                              modelValue: _ctx.form.tradingAccount,
                              "onUpdate:modelValue": ($event) => _ctx.form.tradingAccount = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_component_jet_input_error, {
                              message: _ctx.form.errors.tradingAccount,
                              class: "mt-2"
                            }, null, 8, ["message"])
                          ]),
                          createVNode("div", { class: "col-span-8 md:col-span-4 xl:col-span-2" }, [
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
                          createVNode("div", { class: "col-span-8 md:col-span-4 xl:col-span-2" }, [
                            createVNode(_component_jet_select, {
                              selectable: _ctx.accounts,
                              selected: _ctx.form.account,
                              modelValue: _ctx.form.account,
                              "onUpdate:modelValue": ($event) => _ctx.form.account = $event
                            }, {
                              title: withCtx(() => [
                                createTextVNode(" Seleccione el banco ")
                              ]),
                              _: 1
                            }, 8, ["selectable", "selected", "modelValue", "onUpdate:modelValue"])
                          ]),
                          createVNode("div", { class: "col-span-8 lg:col-start-3 lg:col-span-4" }, [
                            createVNode(_component_jet_calculate_deposit, {
                              amountUsd: _ctx.form.amount_usd,
                              amountCop: _ctx.amount_cop,
                              dollarPrice: _ctx.exchange,
                              tradingVip: _ctx.tradingAccountVip,
                              user: _ctx.$page.props.user
                            }, null, 8, ["amountUsd", "amountCop", "dollarPrice", "tradingVip", "user"])
                          ])
                        ]),
                        createVNode("div", { class: "grid grid-cols-1 items-center mt-4" }, [
                          createVNode(_component_jet_button, {
                            class: ["mx-auto mb-4 max-w-max", { "opacity-25": _ctx.form.processing }],
                            disabled: false
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Deposits/Create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Create = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Create as default
};
