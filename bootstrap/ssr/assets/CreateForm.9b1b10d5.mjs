import { mergeProps, useSSRContext, defineComponent, resolveComponent, withCtx, createTextVNode, createVNode } from "vue";
import { _ as _sfc_main$2 } from "./Button.feee2cab.mjs";
import { J as JetForm } from "./Form.e2d7b3ed.mjs";
import { _ as _sfc_main$3 } from "./Input.c38a320e.mjs";
import { _ as _sfc_main$4 } from "./InputError.bc94ef1e.mjs";
import { _ as _sfc_main$5 } from "./Label.ceceda67.mjs";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.43be4956.mjs";
import dayjs from "dayjs";
const _sfc_main$1 = {
  props: ["amountUsd", "dollarPrice"],
  methods: {
    usdFormat() {
      if (this.amountUsd === "") {
        this.amountUsd = 0;
      }
      return parseFloat(this.amountUsd).toFixed(2);
    },
    copAmount() {
      let amount_cop = this.dollarPrice * this.usdFormat();
      return parseFloat(amount_cop).toFixed(2);
    },
    total() {
      let total = this.copAmount();
      return parseFloat(total).toFixed(2);
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col justify-between items-center mt-5 w-full" }, _attrs))}><div class="rounded-lg text-dark-brand w-80 flex flex-col items-center"><span class="flex justify-between items-center w-full mt-2"><span class="text-sm text-gray-600 mr-1">Retiro USD: </span><span class="font-semibold text-dark-brand">$ ${ssrInterpolate($options.usdFormat())}</span></span><span class="flex justify-between items-center w-full"><span class="text-sm text-gray-600 mr-1">Tasa de cambio: </span><span class="font-semibold text-dark-brand">$ ${ssrInterpolate($props.dollarPrice)}</span></span><span class="flex justify-between items-center w-full"><span class="text-sm text-gray-600 mr-1">Monto COP: </span><span class="font-semibold text-dark-brand">$ ${ssrInterpolate($options.copAmount())}</span></span><h2 class="text-lg text-dark-brand font-semibold mt-2">Total a pagar: $${ssrInterpolate($options.total())} COP</h2></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/CalculateWithdrawal.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const CalculateWithdrawal = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = defineComponent({
  components: {
    JetButton: _sfc_main$2,
    JetForm,
    JetInput: _sfc_main$3,
    JetInputError: _sfc_main$4,
    JetLabel: _sfc_main$5,
    CalculateWithdrawal
  },
  props: {
    account: Object,
    dollarPrice: Number
  },
  setup(props) {
    const dateNow = dayjs().format("YYYY-MM-DDTHH:mm");
    return {
      dateNow
    };
  },
  data() {
    return {
      form: this.$inertia.form({
        tradingAccount: this.account.number,
        amount_usd: 0,
        application_date: this.dateNow,
        tradingAccount_id: this.account.id,
        user_id: this.account.user.id
      })
    };
  },
  methods: {
    withdrawalStore() {
      this.form.post(route("admin.storeWithdrawal"), {
        preserveScroll: true
      });
    }
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_jet_form = resolveComponent("jet-form");
  const _component_jet_label = resolveComponent("jet-label");
  const _component_jet_input = resolveComponent("jet-input");
  const _component_jet_input_error = resolveComponent("jet-input-error");
  const _component_jet_button = resolveComponent("jet-button");
  const _component_CalculateWithdrawal = resolveComponent("CalculateWithdrawal");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_jet_form, { onSubmitted: _ctx.withdrawalStore }, {
    form: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="col-span-6 md:col-span-2"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_label, {
          for: "tradingAccount",
          value: "Tradding Account"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_jet_input, {
          id: "traddingAccount",
          type: "text",
          class: "mt-1 block w-full",
          modelValue: _ctx.form.tradingAccount,
          "onUpdate:modelValue": ($event) => _ctx.form.tradingAccount = $event
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_jet_input_error, {
          message: _ctx.form.errors.tradingAccount,
          class: "mt-2"
        }, null, _parent2, _scopeId));
        _push2(`</div><div class="col-span-6 md:col-span-2"${_scopeId}>`);
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
        _push2(`</div><div class="col-span-6 md:col-span-2"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_label, {
          for: "application_date",
          value: "Fecha Aprobaci\xF3n"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_jet_input, {
          id: "application_date",
          type: "datetime-local",
          class: "mt-1 block w-full",
          modelValue: _ctx.form.application_date,
          "onUpdate:modelValue": ($event) => _ctx.form.application_date = $event
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_jet_input_error, {
          message: _ctx.form.errors.application_date,
          class: "mt-2"
        }, null, _parent2, _scopeId));
        _push2(`</div><div class="col-span-6"${_scopeId}><div class="max-w-max mx-auto"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_button, {
          class: [{ "opacity-25": _ctx.form.processing }, "mt-2"],
          disabled: _ctx.form.processing
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
        _push2(`</div></div>`);
      } else {
        return [
          createVNode("div", { class: "col-span-6 md:col-span-2" }, [
            createVNode(_component_jet_label, {
              for: "tradingAccount",
              value: "Tradding Account"
            }),
            createVNode(_component_jet_input, {
              id: "traddingAccount",
              type: "text",
              class: "mt-1 block w-full",
              modelValue: _ctx.form.tradingAccount,
              "onUpdate:modelValue": ($event) => _ctx.form.tradingAccount = $event
            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
            createVNode(_component_jet_input_error, {
              message: _ctx.form.errors.tradingAccount,
              class: "mt-2"
            }, null, 8, ["message"])
          ]),
          createVNode("div", { class: "col-span-6 md:col-span-2" }, [
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
          createVNode("div", { class: "col-span-6 md:col-span-2" }, [
            createVNode(_component_jet_label, {
              for: "application_date",
              value: "Fecha Aprobaci\xF3n"
            }),
            createVNode(_component_jet_input, {
              id: "application_date",
              type: "datetime-local",
              class: "mt-1 block w-full",
              modelValue: _ctx.form.application_date,
              "onUpdate:modelValue": ($event) => _ctx.form.application_date = $event
            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
            createVNode(_component_jet_input_error, {
              message: _ctx.form.errors.application_date,
              class: "mt-2"
            }, null, 8, ["message"])
          ]),
          createVNode("div", { class: "col-span-6" }, [
            createVNode("div", { class: "max-w-max mx-auto" }, [
              createVNode(_component_jet_button, {
                class: [{ "opacity-25": _ctx.form.processing }, "mt-2"],
                disabled: _ctx.form.processing
              }, {
                default: withCtx(() => [
                  createTextVNode(" Registrar ")
                ]),
                _: 1
              }, 8, ["class", "disabled"])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_CalculateWithdrawal, {
    amountUsd: _ctx.form.amount_usd,
    dollarPrice: _ctx.dollarPrice
  }, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Withdrawals/Partials/CreateForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CreateForm = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  CreateForm as default
};
