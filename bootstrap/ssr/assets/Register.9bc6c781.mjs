import { defineComponent, resolveComponent, withCtx, createVNode, createTextVNode, withModifiers, openBlock, createBlock, createCommentVNode, useSSRContext } from "vue";
import { J as JetAuthenticationCard } from "./AuthenticationCard.87df7a60.mjs";
import { _ as _sfc_main$1 } from "./AuthenticationCardLogo.6fd411c3.mjs";
import { _ as _sfc_main$2 } from "./Button.feee2cab.mjs";
import { _ as _sfc_main$3 } from "./Input.c38a320e.mjs";
import { _ as _sfc_main$4 } from "./Checkbox.eba10139.mjs";
import { _ as _sfc_main$5 } from "./Label.ceceda67.mjs";
import { J as JetValidationErrors } from "./ValidationErrors.5de4280e.mjs";
import { Head, Link } from "@inertiajs/inertia-vue3";
import { ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
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
  data() {
    return {
      form: this.$inertia.form({
        name: "",
        lastname: "",
        mobil: "",
        email: "",
        password: "",
        password_confirmation: "",
        terms: false
      })
    };
  },
  methods: {
    submit() {
      this.form.post(this.route("register"), {
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
  const _component_jet_checkbox = resolveComponent("jet-checkbox");
  const _component_jet_button = resolveComponent("jet-button");
  const _component_Link = resolveComponent("Link");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Head, { title: "Registro" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<meta name="description" content="Registrate y empieza a ahorrar dinero en el cambio de tus inversiones." head-key="description"${_scopeId}>`);
      } else {
        return [
          createVNode("meta", {
            name: "description",
            content: "Registrate y empieza a ahorrar dinero en el cambio de tus inversiones.",
            "head-key": "description"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
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
          for: "name",
          value: "Nombres"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_jet_input, {
          id: "name",
          type: "text",
          class: "mt-1 block w-full",
          modelValue: _ctx.form.name,
          "onUpdate:modelValue": ($event) => _ctx.form.name = $event
        }, null, _parent2, _scopeId));
        _push2(`</div><div class="mt-4"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_label, {
          for: "lastname",
          value: "Apellidos"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_jet_input, {
          id: "lastname",
          type: "text",
          class: "mt-1 block w-full",
          modelValue: _ctx.form.lastname,
          "onUpdate:modelValue": ($event) => _ctx.form.lastname = $event
        }, null, _parent2, _scopeId));
        _push2(`</div><div class="mt-4"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_label, {
          for: "mobil",
          value: "Celular"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_jet_input, {
          id: "mobil",
          type: "number",
          class: "mt-1 block w-full",
          modelValue: _ctx.form.mobil,
          "onUpdate:modelValue": ($event) => _ctx.form.mobil = $event
        }, null, _parent2, _scopeId));
        _push2(`</div><div class="mt-4"${_scopeId}>`);
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
        _push2(`</div><div class="mt-4"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_label, {
          for: "password_confirmation",
          value: "Confirmar Constrase\xF1a"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_jet_input, {
          id: "password_confirmation",
          type: "password",
          class: "mt-1 block w-full",
          modelValue: _ctx.form.password_confirmation,
          "onUpdate:modelValue": ($event) => _ctx.form.password_confirmation = $event
        }, null, _parent2, _scopeId));
        _push2(`</div>`);
        if (_ctx.$page.props.jetstream.hasTermsAndPrivacyPolicyFeature) {
          _push2(`<div class="mt-4"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_jet_label, { for: "terms" }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<div class="flex items-center"${_scopeId2}>`);
                _push3(ssrRenderComponent(_component_jet_checkbox, {
                  name: "terms",
                  id: "terms",
                  checked: _ctx.form.terms,
                  "onUpdate:checked": ($event) => _ctx.form.terms = $event
                }, null, _parent3, _scopeId2));
                _push3(`<div class="ml-2"${_scopeId2}> Aceptar los <a target="_blank"${ssrRenderAttr("href", _ctx.route("terms.show"))} class="underline text-sm text-gray-600 hover:text-gray-900"${_scopeId2}>T\xE9rminos y Condiciones</a> y nuestra <a target="_blank"${ssrRenderAttr("href", _ctx.route("policy.show"))} class="underline text-sm text-gray-600 hover:text-gray-900"${_scopeId2}>Pol\xEDtica de Tratamiendo de Datos</a></div></div>`);
              } else {
                return [
                  createVNode("div", { class: "flex items-center" }, [
                    createVNode(_component_jet_checkbox, {
                      name: "terms",
                      id: "terms",
                      checked: _ctx.form.terms,
                      "onUpdate:checked": ($event) => _ctx.form.terms = $event
                    }, null, 8, ["checked", "onUpdate:checked"]),
                    createVNode("div", { class: "ml-2" }, [
                      createTextVNode(" Aceptar los "),
                      createVNode("a", {
                        target: "_blank",
                        href: _ctx.route("terms.show"),
                        class: "underline text-sm text-gray-600 hover:text-gray-900"
                      }, "T\xE9rminos y Condiciones", 8, ["href"]),
                      createTextVNode(" y nuestra "),
                      createVNode("a", {
                        target: "_blank",
                        href: _ctx.route("policy.show"),
                        class: "underline text-sm text-gray-600 hover:text-gray-900"
                      }, "Pol\xEDtica de Tratamiendo de Datos", 8, ["href"])
                    ])
                  ])
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
          _push2(`</div>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`<div class="grid grid-cols-1 items-center mt-4"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_button, {
          class: ["mx-auto mb-4 max-w-max", { "opacity-25": _ctx.form.processing }],
          disabled: _ctx.form.processing
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Registrarse `);
            } else {
              return [
                createTextVNode(" Registrarse ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_Link, {
          href: _ctx.route("login"),
          class: "underline text-sm text-gray-600 hover:text-gray-900 max-w-max mx-auto mb-8"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` \xBFYa est\xE1s registrado? `);
            } else {
              return [
                createTextVNode(" \xBFYa est\xE1s registrado? ")
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
                for: "name",
                value: "Nombres"
              }),
              createVNode(_component_jet_input, {
                id: "name",
                type: "text",
                class: "mt-1 block w-full",
                modelValue: _ctx.form.name,
                "onUpdate:modelValue": ($event) => _ctx.form.name = $event
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ]),
            createVNode("div", { class: "mt-4" }, [
              createVNode(_component_jet_label, {
                for: "lastname",
                value: "Apellidos"
              }),
              createVNode(_component_jet_input, {
                id: "lastname",
                type: "text",
                class: "mt-1 block w-full",
                modelValue: _ctx.form.lastname,
                "onUpdate:modelValue": ($event) => _ctx.form.lastname = $event
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ]),
            createVNode("div", { class: "mt-4" }, [
              createVNode(_component_jet_label, {
                for: "mobil",
                value: "Celular"
              }),
              createVNode(_component_jet_input, {
                id: "mobil",
                type: "number",
                class: "mt-1 block w-full",
                modelValue: _ctx.form.mobil,
                "onUpdate:modelValue": ($event) => _ctx.form.mobil = $event
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ]),
            createVNode("div", { class: "mt-4" }, [
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
            createVNode("div", { class: "mt-4" }, [
              createVNode(_component_jet_label, {
                for: "password_confirmation",
                value: "Confirmar Constrase\xF1a"
              }),
              createVNode(_component_jet_input, {
                id: "password_confirmation",
                type: "password",
                class: "mt-1 block w-full",
                modelValue: _ctx.form.password_confirmation,
                "onUpdate:modelValue": ($event) => _ctx.form.password_confirmation = $event
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ]),
            _ctx.$page.props.jetstream.hasTermsAndPrivacyPolicyFeature ? (openBlock(), createBlock("div", {
              key: 0,
              class: "mt-4"
            }, [
              createVNode(_component_jet_label, { for: "terms" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex items-center" }, [
                    createVNode(_component_jet_checkbox, {
                      name: "terms",
                      id: "terms",
                      checked: _ctx.form.terms,
                      "onUpdate:checked": ($event) => _ctx.form.terms = $event
                    }, null, 8, ["checked", "onUpdate:checked"]),
                    createVNode("div", { class: "ml-2" }, [
                      createTextVNode(" Aceptar los "),
                      createVNode("a", {
                        target: "_blank",
                        href: _ctx.route("terms.show"),
                        class: "underline text-sm text-gray-600 hover:text-gray-900"
                      }, "T\xE9rminos y Condiciones", 8, ["href"]),
                      createTextVNode(" y nuestra "),
                      createVNode("a", {
                        target: "_blank",
                        href: _ctx.route("policy.show"),
                        class: "underline text-sm text-gray-600 hover:text-gray-900"
                      }, "Pol\xEDtica de Tratamiendo de Datos", 8, ["href"])
                    ])
                  ])
                ]),
                _: 1
              })
            ])) : createCommentVNode("", true),
            createVNode("div", { class: "grid grid-cols-1 items-center mt-4" }, [
              createVNode(_component_jet_button, {
                class: ["mx-auto mb-4 max-w-max", { "opacity-25": _ctx.form.processing }],
                disabled: _ctx.form.processing
              }, {
                default: withCtx(() => [
                  createTextVNode(" Registrarse ")
                ]),
                _: 1
              }, 8, ["class", "disabled"]),
              createVNode(_component_Link, {
                href: _ctx.route("login"),
                class: "underline text-sm text-gray-600 hover:text-gray-900 max-w-max mx-auto mb-8"
              }, {
                default: withCtx(() => [
                  createTextVNode(" \xBFYa est\xE1s registrado? ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/Register.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Register = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Register as default
};
