import { defineComponent, resolveComponent, mergeProps, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { _ as _sfc_main$1 } from "./ActionMessage.1772107a.mjs";
import { _ as _sfc_main$2 } from "./Button.feee2cab.mjs";
import { J as JetForm } from "./Form.a498045b.mjs";
import { _ as _sfc_main$3 } from "./Input.c38a320e.mjs";
import { _ as _sfc_main$4 } from "./InputError.bc94ef1e.mjs";
import { _ as _sfc_main$5 } from "./Label.ceceda67.mjs";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.43be4956.mjs";
const _sfc_main = defineComponent({
  components: {
    JetActionMessage: _sfc_main$1,
    JetButton: _sfc_main$2,
    JetForm,
    JetInput: _sfc_main$3,
    JetInputError: _sfc_main$4,
    JetLabel: _sfc_main$5
  },
  data() {
    return {
      form: this.$inertia.form({
        current_password: "",
        password: "",
        password_confirmation: ""
      })
    };
  },
  methods: {
    updatePassword() {
      this.form.put(route("user-password.update"), {
        errorBag: "updatePassword",
        preserveScroll: true,
        onSuccess: () => this.form.reset(),
        onError: () => {
          if (this.form.errors.password) {
            this.form.reset("password", "password_confirmation");
            this.$refs.password.focus();
          }
          if (this.form.errors.current_password) {
            this.form.reset("current_password");
            this.$refs.current_password.focus();
          }
        }
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
  _push(ssrRenderComponent(_component_jet_form, mergeProps({ onSubmitted: _ctx.updatePassword }, _attrs), {
    form: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="col-span-6 md:col-span-2"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_label, {
          for: "current_password",
          value: "Contrase\xF1a actual"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_jet_input, {
          id: "current_password",
          type: "password",
          class: "mt-1 block w-full",
          modelValue: _ctx.form.current_password,
          "onUpdate:modelValue": ($event) => _ctx.form.current_password = $event,
          ref: "current_password",
          autocomplete: "current-password"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_jet_input_error, {
          message: _ctx.form.errors.current_password,
          class: "mt-2"
        }, null, _parent2, _scopeId));
        _push2(`</div><div class="col-span-6 md:col-span-2"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_label, {
          for: "password",
          value: "Nueva contrase\xF1a"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_jet_input, {
          id: "password",
          type: "password",
          class: "mt-1 block w-full",
          modelValue: _ctx.form.password,
          "onUpdate:modelValue": ($event) => _ctx.form.password = $event,
          ref: "password",
          autocomplete: "new-password"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_jet_input_error, {
          message: _ctx.form.errors.password,
          class: "mt-2"
        }, null, _parent2, _scopeId));
        _push2(`</div><div class="col-span-6 md:col-span-2"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_label, {
          for: "password_confirmation",
          value: "Confirmar contrase\xF1a"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_jet_input, {
          id: "password_confirmation",
          type: "password",
          class: "mt-1 block w-full",
          modelValue: _ctx.form.password_confirmation,
          "onUpdate:modelValue": ($event) => _ctx.form.password_confirmation = $event,
          autocomplete: "new-password"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_jet_input_error, {
          message: _ctx.form.errors.password_confirmation,
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
              for: "current_password",
              value: "Contrase\xF1a actual"
            }),
            createVNode(_component_jet_input, {
              id: "current_password",
              type: "password",
              class: "mt-1 block w-full",
              modelValue: _ctx.form.current_password,
              "onUpdate:modelValue": ($event) => _ctx.form.current_password = $event,
              ref: "current_password",
              autocomplete: "current-password"
            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
            createVNode(_component_jet_input_error, {
              message: _ctx.form.errors.current_password,
              class: "mt-2"
            }, null, 8, ["message"])
          ]),
          createVNode("div", { class: "col-span-6 md:col-span-2" }, [
            createVNode(_component_jet_label, {
              for: "password",
              value: "Nueva contrase\xF1a"
            }),
            createVNode(_component_jet_input, {
              id: "password",
              type: "password",
              class: "mt-1 block w-full",
              modelValue: _ctx.form.password,
              "onUpdate:modelValue": ($event) => _ctx.form.password = $event,
              ref: "password",
              autocomplete: "new-password"
            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
            createVNode(_component_jet_input_error, {
              message: _ctx.form.errors.password,
              class: "mt-2"
            }, null, 8, ["message"])
          ]),
          createVNode("div", { class: "col-span-6 md:col-span-2" }, [
            createVNode(_component_jet_label, {
              for: "password_confirmation",
              value: "Confirmar contrase\xF1a"
            }),
            createVNode(_component_jet_input, {
              id: "password_confirmation",
              type: "password",
              class: "mt-1 block w-full",
              modelValue: _ctx.form.password_confirmation,
              "onUpdate:modelValue": ($event) => _ctx.form.password_confirmation = $event,
              autocomplete: "new-password"
            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
            createVNode(_component_jet_input_error, {
              message: _ctx.form.errors.password_confirmation,
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Profile/Partials/UpdatePasswordForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const UpdatePasswordForm = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  UpdatePasswordForm as default
};
