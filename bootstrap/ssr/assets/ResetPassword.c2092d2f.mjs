import { defineComponent, resolveComponent, withCtx, createVNode, createTextVNode, withModifiers, useSSRContext } from "vue";
import { Head } from "@inertiajs/inertia-vue3";
import { J as JetAuthenticationCard } from "./AuthenticationCard.87df7a60.mjs";
import { _ as _sfc_main$1 } from "./AuthenticationCardLogo.6fd411c3.mjs";
import { _ as _sfc_main$2 } from "./Button.feee2cab.mjs";
import { _ as _sfc_main$3 } from "./Input.c38a320e.mjs";
import { _ as _sfc_main$4 } from "./Label.ceceda67.mjs";
import { J as JetValidationErrors } from "./ValidationErrors.5de4280e.mjs";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.43be4956.mjs";
import "./logoweb.e431fb6b.mjs";
const _sfc_main = defineComponent({
  components: {
    Head,
    JetAuthenticationCard,
    JetAuthenticationCardLogo: _sfc_main$1,
    JetButton: _sfc_main$2,
    JetInput: _sfc_main$3,
    JetLabel: _sfc_main$4,
    JetValidationErrors
  },
  props: {
    email: String,
    token: String
  },
  data() {
    return {
      form: this.$inertia.form({
        token: this.token,
        email: this.email,
        password: "",
        password_confirmation: ""
      })
    };
  },
  methods: {
    submit() {
      this.form.post(this.route("password.update"), {
        onFinish: () => this.form.reset("password", "password_confirmation")
      });
    }
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_jet_authentication_card = resolveComponent("jet-authentication-card");
  const _component_jet_authentication_card_logo = resolveComponent("jet-authentication-card-logo");
  const _component_jet_validation_errors = resolveComponent("jet-validation-errors");
  const _component_jet_label = resolveComponent("jet-label");
  const _component_jet_input = resolveComponent("jet-input");
  const _component_jet_button = resolveComponent("jet-button");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Head, { title: "Reset Password" }, null, _parent));
  _push(ssrRenderComponent(_component_jet_authentication_card, null, {
    logo: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_jet_authentication_card_logo, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_jet_authentication_card_logo)
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_jet_validation_errors, { class: "mb-4" }, null, _parent2, _scopeId));
        _push2(`<form${_scopeId}><div${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_label, {
          for: "email",
          value: "Correo Electr\xF3nico"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_jet_input, {
          id: "email",
          type: "email",
          class: "mt-1 block w-full",
          modelValue: _ctx.form.email,
          "onUpdate:modelValue": ($event) => _ctx.form.email = $event,
          required: "",
          autofocus: ""
        }, null, _parent2, _scopeId));
        _push2(`</div><div class="mt-4"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_label, {
          for: "password",
          value: "Nueva Contrase\xF1a"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_jet_input, {
          id: "password",
          type: "password",
          class: "mt-1 block w-full",
          modelValue: _ctx.form.password,
          "onUpdate:modelValue": ($event) => _ctx.form.password = $event,
          required: "",
          autocomplete: "new-password"
        }, null, _parent2, _scopeId));
        _push2(`</div><div class="mt-4"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_label, {
          for: "password_confirmation",
          value: "Confirmar Contrase\xF1a"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_jet_input, {
          id: "password_confirmation",
          type: "password",
          class: "mt-1 block w-full",
          modelValue: _ctx.form.password_confirmation,
          "onUpdate:modelValue": ($event) => _ctx.form.password_confirmation = $event,
          required: "",
          autocomplete: "new-password"
        }, null, _parent2, _scopeId));
        _push2(`</div><div class="flex items-center justify-end mt-4"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_button, {
          class: { "opacity-25": _ctx.form.processing },
          disabled: _ctx.form.processing
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Restaurar Contrase\xF1a `);
            } else {
              return [
                createTextVNode(" Restaurar Contrase\xF1a ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div></form>`);
      } else {
        return [
          createVNode(_component_jet_validation_errors, { class: "mb-4" }),
          createVNode("form", {
            onSubmit: withModifiers(_ctx.submit, ["prevent"])
          }, [
            createVNode("div", null, [
              createVNode(_component_jet_label, {
                for: "email",
                value: "Correo Electr\xF3nico"
              }),
              createVNode(_component_jet_input, {
                id: "email",
                type: "email",
                class: "mt-1 block w-full",
                modelValue: _ctx.form.email,
                "onUpdate:modelValue": ($event) => _ctx.form.email = $event,
                required: "",
                autofocus: ""
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ]),
            createVNode("div", { class: "mt-4" }, [
              createVNode(_component_jet_label, {
                for: "password",
                value: "Nueva Contrase\xF1a"
              }),
              createVNode(_component_jet_input, {
                id: "password",
                type: "password",
                class: "mt-1 block w-full",
                modelValue: _ctx.form.password,
                "onUpdate:modelValue": ($event) => _ctx.form.password = $event,
                required: "",
                autocomplete: "new-password"
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ]),
            createVNode("div", { class: "mt-4" }, [
              createVNode(_component_jet_label, {
                for: "password_confirmation",
                value: "Confirmar Contrase\xF1a"
              }),
              createVNode(_component_jet_input, {
                id: "password_confirmation",
                type: "password",
                class: "mt-1 block w-full",
                modelValue: _ctx.form.password_confirmation,
                "onUpdate:modelValue": ($event) => _ctx.form.password_confirmation = $event,
                required: "",
                autocomplete: "new-password"
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ]),
            createVNode("div", { class: "flex items-center justify-end mt-4" }, [
              createVNode(_component_jet_button, {
                class: { "opacity-25": _ctx.form.processing },
                disabled: _ctx.form.processing
              }, {
                default: withCtx(() => [
                  createTextVNode(" Restaurar Contrase\xF1a ")
                ]),
                _: 1
              }, 8, ["class", "disabled"])
            ])
          ], 40, ["onSubmit"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/ResetPassword.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ResetPassword = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  ResetPassword as default
};
