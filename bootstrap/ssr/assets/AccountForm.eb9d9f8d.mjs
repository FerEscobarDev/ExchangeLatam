import { defineComponent, resolveComponent, mergeProps, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { _ as _sfc_main$2 } from "./Button.feee2cab.mjs";
import { J as JetForm } from "./Form.e2d7b3ed.mjs";
import { _ as _sfc_main$3 } from "./Input.c38a320e.mjs";
import { _ as _sfc_main$4 } from "./InputError.bc94ef1e.mjs";
import { _ as _sfc_main$5 } from "./Label.ceceda67.mjs";
import { _ as _sfc_main$1 } from "./ActionMessage.1772107a.mjs";
import "./SecondaryButton.987206fe.mjs";
import { J as JetSelect } from "./Select.c13c9df3.mjs";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.43be4956.mjs";
import "@headlessui/vue";
import "@heroicons/vue/solid";
const _sfc_main = defineComponent({
  components: {
    JetActionMessage: _sfc_main$1,
    JetButton: _sfc_main$2,
    JetForm,
    JetInput: _sfc_main$3,
    JetInputError: _sfc_main$4,
    JetLabel: _sfc_main$5,
    JetSelect
  },
  props: ["banks"],
  setup(props) {
    let types = [
      {
        "id": 1,
        "name": "Cuenta de Ahorros"
      },
      {
        "id": 2,
        "name": "Cuenta Corriente"
      }
    ];
    return {
      types
    };
  },
  data() {
    return {
      form: this.$inertia.form({
        number: null,
        type: this.types[0],
        bank: this.banks[0]
      })
    };
  },
  methods: {
    accountStore() {
      this.form.post(route("accounts.store.user"), {
        errorBag: "account.store.user",
        preserveScroll: true
      });
    }
  },
  computed: {}
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_jet_form = resolveComponent("jet-form");
  const _component_jet_label = resolveComponent("jet-label");
  const _component_jet_input = resolveComponent("jet-input");
  const _component_jet_input_error = resolveComponent("jet-input-error");
  const _component_jet_select = resolveComponent("jet-select");
  const _component_jet_button = resolveComponent("jet-button");
  _push(ssrRenderComponent(_component_jet_form, mergeProps({ onSubmitted: _ctx.accountStore }, _attrs), {
    form: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="col-span-6 md:col-span-2"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_label, {
          for: "number",
          value: "N\xFAmero de cuenta"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_jet_input, {
          id: "number",
          type: "number",
          class: "mt-1 block w-full",
          modelValue: _ctx.form.number,
          "onUpdate:modelValue": ($event) => _ctx.form.number = $event
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_jet_input_error, {
          message: _ctx.form.errors.number,
          class: "mt-2"
        }, null, _parent2, _scopeId));
        _push2(`</div><div class="col-span-6 md:col-span-2"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_select, {
          selectable: _ctx.types,
          selected: _ctx.form.type,
          modelValue: _ctx.form.type,
          "onUpdate:modelValue": ($event) => _ctx.form.type = $event
        }, {
          title: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Tipo de cuenta `);
            } else {
              return [
                createTextVNode(" Tipo de cuenta ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_jet_input_error, {
          message: _ctx.form.errors.type,
          class: "mt-2"
        }, null, _parent2, _scopeId));
        _push2(`</div><div class="col-span-6 md:col-span-2"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_select, {
          selectable: _ctx.banks,
          selected: _ctx.form.bank,
          modelValue: _ctx.form.bank,
          "onUpdate:modelValue": ($event) => _ctx.form.bank = $event
        }, {
          title: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Banco `);
            } else {
              return [
                createTextVNode(" Banco ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_jet_input_error, {
          message: _ctx.form.errors.bank,
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
              for: "number",
              value: "N\xFAmero de cuenta"
            }),
            createVNode(_component_jet_input, {
              id: "number",
              type: "number",
              class: "mt-1 block w-full",
              modelValue: _ctx.form.number,
              "onUpdate:modelValue": ($event) => _ctx.form.number = $event
            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
            createVNode(_component_jet_input_error, {
              message: _ctx.form.errors.number,
              class: "mt-2"
            }, null, 8, ["message"])
          ]),
          createVNode("div", { class: "col-span-6 md:col-span-2" }, [
            createVNode(_component_jet_select, {
              selectable: _ctx.types,
              selected: _ctx.form.type,
              modelValue: _ctx.form.type,
              "onUpdate:modelValue": ($event) => _ctx.form.type = $event
            }, {
              title: withCtx(() => [
                createTextVNode(" Tipo de cuenta ")
              ]),
              _: 1
            }, 8, ["selectable", "selected", "modelValue", "onUpdate:modelValue"]),
            createVNode(_component_jet_input_error, {
              message: _ctx.form.errors.type,
              class: "mt-2"
            }, null, 8, ["message"])
          ]),
          createVNode("div", { class: "col-span-6 md:col-span-2" }, [
            createVNode(_component_jet_select, {
              selectable: _ctx.banks,
              selected: _ctx.form.bank,
              modelValue: _ctx.form.bank,
              "onUpdate:modelValue": ($event) => _ctx.form.bank = $event
            }, {
              title: withCtx(() => [
                createTextVNode(" Banco ")
              ]),
              _: 1
            }, 8, ["selectable", "selected", "modelValue", "onUpdate:modelValue"]),
            createVNode(_component_jet_input_error, {
              message: _ctx.form.errors.bank,
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Accounts/Partials/AccountForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const AccountForm = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  AccountForm as default
};
