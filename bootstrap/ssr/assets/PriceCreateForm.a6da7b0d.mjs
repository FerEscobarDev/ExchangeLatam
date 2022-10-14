import { defineComponent, resolveComponent, mergeProps, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { _ as _sfc_main$1 } from "./Button.feee2cab.mjs";
import { J as JetForm } from "./Form.a498045b.mjs";
import { _ as _sfc_main$2 } from "./Input.c38a320e.mjs";
import { _ as _sfc_main$3 } from "./InputError.bc94ef1e.mjs";
import { _ as _sfc_main$4 } from "./Label.ceceda67.mjs";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.43be4956.mjs";
const _sfc_main = defineComponent({
  components: {
    JetButton: _sfc_main$1,
    JetForm,
    JetInput: _sfc_main$2,
    JetInputError: _sfc_main$3,
    JetLabel: _sfc_main$4
  },
  data() {
    return {
      form: this.$inertia.form({
        date: null,
        dollar_buy: null,
        dollar_sell: null
      })
    };
  },
  methods: {
    priceStore() {
      this.form.post(route("admin.dollarPriceStore"), {
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
  _push(ssrRenderComponent(_component_jet_form, mergeProps({ onSubmitted: _ctx.priceStore }, _attrs), {
    form: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="col-span-6 md:col-span-2"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_label, {
          for: "date",
          value: "Fecha"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_jet_input, {
          id: "date",
          type: "date",
          class: "mt-1 block w-full",
          modelValue: _ctx.form.date,
          "onUpdate:modelValue": ($event) => _ctx.form.date = $event
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_jet_input_error, {
          message: _ctx.form.errors.date,
          class: "mt-2"
        }, null, _parent2, _scopeId));
        _push2(`</div><div class="col-span-6 md:col-span-2"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_label, {
          for: "dollar_buy",
          value: "Precio Dep\xF3sitos"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_jet_input, {
          id: "dollar_buy",
          type: "text",
          class: "mt-1 block w-full",
          modelValue: _ctx.form.dollar_buy,
          "onUpdate:modelValue": ($event) => _ctx.form.dollar_buy = $event
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_jet_input_error, {
          message: _ctx.form.errors.dollar_buy,
          class: "mt-2"
        }, null, _parent2, _scopeId));
        _push2(`</div><div class="col-span-6 md:col-span-2"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_label, {
          for: "dollar_sell",
          value: "Precio Retiros"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_jet_input, {
          id: "dollar_sell",
          type: "text",
          class: "mt-1 block w-full",
          modelValue: _ctx.form.dollar_sell,
          "onUpdate:modelValue": ($event) => _ctx.form.dollar_sell = $event
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_jet_input_error, {
          message: _ctx.form.errors.dollar_sell,
          class: "mt-2"
        }, null, _parent2, _scopeId));
        _push2(`</div><div class="col-span-6"${_scopeId}><div class="max-w-max mx-auto"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_button, {
          class: [{ "opacity-25": _ctx.form.processing }, "mt-2"],
          disabled: _ctx.form.processing
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Guardar `);
            } else {
              return [
                createTextVNode(" Guardar ")
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
              for: "date",
              value: "Fecha"
            }),
            createVNode(_component_jet_input, {
              id: "date",
              type: "date",
              class: "mt-1 block w-full",
              modelValue: _ctx.form.date,
              "onUpdate:modelValue": ($event) => _ctx.form.date = $event
            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
            createVNode(_component_jet_input_error, {
              message: _ctx.form.errors.date,
              class: "mt-2"
            }, null, 8, ["message"])
          ]),
          createVNode("div", { class: "col-span-6 md:col-span-2" }, [
            createVNode(_component_jet_label, {
              for: "dollar_buy",
              value: "Precio Dep\xF3sitos"
            }),
            createVNode(_component_jet_input, {
              id: "dollar_buy",
              type: "text",
              class: "mt-1 block w-full",
              modelValue: _ctx.form.dollar_buy,
              "onUpdate:modelValue": ($event) => _ctx.form.dollar_buy = $event
            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
            createVNode(_component_jet_input_error, {
              message: _ctx.form.errors.dollar_buy,
              class: "mt-2"
            }, null, 8, ["message"])
          ]),
          createVNode("div", { class: "col-span-6 md:col-span-2" }, [
            createVNode(_component_jet_label, {
              for: "dollar_sell",
              value: "Precio Retiros"
            }),
            createVNode(_component_jet_input, {
              id: "dollar_sell",
              type: "text",
              class: "mt-1 block w-full",
              modelValue: _ctx.form.dollar_sell,
              "onUpdate:modelValue": ($event) => _ctx.form.dollar_sell = $event
            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
            createVNode(_component_jet_input_error, {
              message: _ctx.form.errors.dollar_sell,
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
                  createTextVNode(" Guardar ")
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
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/DollarPrice/Partials/PriceCreateForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const PriceCreateForm = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  PriceCreateForm as default
};
