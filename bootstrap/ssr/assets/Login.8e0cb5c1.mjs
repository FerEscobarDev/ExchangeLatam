import { defineComponent, resolveComponent, withCtx, createVNode, createTextVNode, openBlock, createBlock, toDisplayString, createCommentVNode, withModifiers, useSSRContext } from "vue";
import { J as JetAuthenticationCard } from "./AuthenticationCard.87df7a60.mjs";
import { _ as _sfc_main$1 } from "./AuthenticationCardLogo.6fd411c3.mjs";
import { _ as _sfc_main$2 } from "./Button.feee2cab.mjs";
import { _ as _sfc_main$3 } from "./Input.c38a320e.mjs";
import { _ as _sfc_main$4 } from "./Checkbox.eba10139.mjs";
import { _ as _sfc_main$5 } from "./Label.ceceda67.mjs";
import { J as JetValidationErrors } from "./ValidationErrors.5de4280e.mjs";
import { Head, Link } from "@inertiajs/inertia-vue3";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.43be4956.mjs";
import "./logoweb.e431fb6b.mjs";
const _sfc_main = defineComponent({
  components: {
    Head,
    JetAuthenticationCard,
    JetAuthenticationCardLogo: _sfc_main$1,
    JetButton: _sfc_main$2,
    JetInput: _sfc_main$3,
    JetCheckbox: _sfc_main$4,
    JetLabel: _sfc_main$5,
    JetValidationErrors,
    Link
  },
  props: {
    canResetPassword: Boolean,
    status: String
  },
  data() {
    return {
      form: this.$inertia.form({
        email: "",
        password: "",
        remember: false
      })
    };
  },
  methods: {
    submit() {
      this.form.transform((data) => ({
        ...data,
        remember: this.form.remember ? "on" : ""
      })).post(this.route("login"), {
        onFinish: () => this.form.reset("password")
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
  const _component_jet_checkbox = resolveComponent("jet-checkbox");
  const _component_jet_button = resolveComponent("jet-button");
  const _component_Link = resolveComponent("Link");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Head, { title: "Iniciar Sesi\xF3n" }, null, _parent));
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
        if (_ctx.status) {
          _push2(`<div class="mb-4 font-medium text-sm text-green-600"${_scopeId}>${ssrInterpolate(_ctx.status)}</div>`);
        } else {
          _push2(`<!---->`);
        }
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
          "onUpdate:modelValue": ($event) => _ctx.form.email = $event
        }, null, _parent2, _scopeId));
        _push2(`</div><div class="mt-4"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_label, {
          for: "password",
          value: "Contrase\xF1a"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_jet_input, {
          id: "password",
          type: "password",
          class: "mt-1 block w-full",
          modelValue: _ctx.form.password,
          "onUpdate:modelValue": ($event) => _ctx.form.password = $event
        }, null, _parent2, _scopeId));
        _push2(`</div><div class="block mt-4"${_scopeId}><label class="flex items-center"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_checkbox, {
          name: "remember",
          checked: _ctx.form.remember,
          "onUpdate:checked": ($event) => _ctx.form.remember = $event
        }, null, _parent2, _scopeId));
        _push2(`<span class="ml-2 text-sm text-gray-600"${_scopeId}>Remember me</span></label></div><div class="grid grid-cols-1 items-center mt-4"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_button, {
          class: ["mx-auto mb-4 max-w-max", { "opacity-25": _ctx.form.processing }],
          disabled: _ctx.form.processing
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Iniciar Sesi\xF3n `);
            } else {
              return [
                createTextVNode(" Iniciar Sesi\xF3n ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_Link, {
          href: _ctx.route("password.request"),
          class: "underline text-sm text-gray-600 hover:text-gray-900 max-w-max mx-auto mb-4"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` \xBFOlvidaste tu contrase\xF1a? `);
            } else {
              return [
                createTextVNode(" \xBFOlvidaste tu contrase\xF1a? ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_Link, {
          href: _ctx.route("register"),
          class: "underline text-sm text-gray-600 hover:text-gray-900 max-w-max mx-auto mb-8"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` \xBFNo te has registrado? `);
            } else {
              return [
                createTextVNode(" \xBFNo te has registrado? ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div></form>`);
      } else {
        return [
          createVNode(_component_jet_validation_errors, { class: "mb-4" }),
          _ctx.status ? (openBlock(), createBlock("div", {
            key: 0,
            class: "mb-4 font-medium text-sm text-green-600"
          }, toDisplayString(_ctx.status), 1)) : createCommentVNode("", true),
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
                "onUpdate:modelValue": ($event) => _ctx.form.email = $event
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ]),
            createVNode("div", { class: "mt-4" }, [
              createVNode(_component_jet_label, {
                for: "password",
                value: "Contrase\xF1a"
              }),
              createVNode(_component_jet_input, {
                id: "password",
                type: "password",
                class: "mt-1 block w-full",
                modelValue: _ctx.form.password,
                "onUpdate:modelValue": ($event) => _ctx.form.password = $event
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ]),
            createVNode("div", { class: "block mt-4" }, [
              createVNode("label", { class: "flex items-center" }, [
                createVNode(_component_jet_checkbox, {
                  name: "remember",
                  checked: _ctx.form.remember,
                  "onUpdate:checked": ($event) => _ctx.form.remember = $event
                }, null, 8, ["checked", "onUpdate:checked"]),
                createVNode("span", { class: "ml-2 text-sm text-gray-600" }, "Remember me")
              ])
            ]),
            createVNode("div", { class: "grid grid-cols-1 items-center mt-4" }, [
              createVNode(_component_jet_button, {
                class: ["mx-auto mb-4 max-w-max", { "opacity-25": _ctx.form.processing }],
                disabled: _ctx.form.processing
              }, {
                default: withCtx(() => [
                  createTextVNode(" Iniciar Sesi\xF3n ")
                ]),
                _: 1
              }, 8, ["class", "disabled"]),
              createVNode(_component_Link, {
                href: _ctx.route("password.request"),
                class: "underline text-sm text-gray-600 hover:text-gray-900 max-w-max mx-auto mb-4"
              }, {
                default: withCtx(() => [
                  createTextVNode(" \xBFOlvidaste tu contrase\xF1a? ")
                ]),
                _: 1
              }, 8, ["href"]),
              createVNode(_component_Link, {
                href: _ctx.route("register"),
                class: "underline text-sm text-gray-600 hover:text-gray-900 max-w-max mx-auto mb-8"
              }, {
                default: withCtx(() => [
                  createTextVNode(" \xBFNo te has registrado? ")
                ]),
                _: 1
              }, 8, ["href"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/Login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Login = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Login as default
};
