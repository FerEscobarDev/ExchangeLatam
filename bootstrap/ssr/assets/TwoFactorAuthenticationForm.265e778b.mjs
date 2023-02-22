import { ref, reactive, withCtx, createTextVNode, toDisplayString, createVNode, withKeys, useSSRContext, nextTick, defineComponent, resolveComponent, openBlock, createBlock, createCommentVNode, Fragment, renderList } from "vue";
import { _ as _sfc_main$7 } from "./ActionSection.f2b811fa.mjs";
import { _ as _sfc_main$6 } from "./Button.feee2cab.mjs";
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderComponent, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { _ as _sfc_main$2 } from "./DialogModal.04a42090.mjs";
import { _ as _sfc_main$3 } from "./Input.c38a320e.mjs";
import { _ as _sfc_main$4 } from "./InputError.bc94ef1e.mjs";
import { _ as _sfc_main$5 } from "./SecondaryButton.987206fe.mjs";
import { _ as _sfc_main$8 } from "./DangerButton.2ed2ad18.mjs";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.43be4956.mjs";
import "./SectionTitle.3d2d12a1.mjs";
import "./Modal.688f150f.mjs";
const _sfc_main$1 = {
  __name: "ConfirmsPassword",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      default: "Confirm Password"
    },
    content: {
      type: String,
      default: "For your security, please confirm your password to continue."
    },
    button: {
      type: String,
      default: "Confirm"
    }
  },
  emits: ["confirmed"],
  setup(__props, { emit }) {
    const confirmingPassword = ref(false);
    const form = reactive({
      password: "",
      error: "",
      processing: false
    });
    const passwordInput = ref(null);
    const confirmPassword = () => {
      form.processing = true;
      axios.post(route("password.confirm"), {
        password: form.password
      }).then(() => {
        form.processing = false;
        closeModal();
        nextTick().then(() => emit("confirmed"));
      }).catch((error) => {
        form.processing = false;
        form.error = error.response.data.errors.password[0];
        passwordInput.value.focus();
      });
    };
    const closeModal = () => {
      confirmingPassword.value = false;
      form.password = "";
      form.error = "";
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<span${ssrRenderAttrs(_attrs)}><span>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</span>`);
      _push(ssrRenderComponent(_sfc_main$2, {
        show: confirmingPassword.value,
        onClose: closeModal
      }, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(__props.title)}`);
          } else {
            return [
              createTextVNode(toDisplayString(__props.title), 1)
            ];
          }
        }),
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(__props.content)} <div class="mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              ref_key: "passwordInput",
              ref: passwordInput,
              modelValue: form.password,
              "onUpdate:modelValue": ($event) => form.password = $event,
              type: "password",
              class: "mt-1 block w-3/4",
              placeholder: "Password",
              onKeyup: confirmPassword
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              message: form.error,
              class: "mt-2"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createTextVNode(toDisplayString(__props.content) + " ", 1),
              createVNode("div", { class: "mt-4" }, [
                createVNode(_sfc_main$3, {
                  ref_key: "passwordInput",
                  ref: passwordInput,
                  modelValue: form.password,
                  "onUpdate:modelValue": ($event) => form.password = $event,
                  type: "password",
                  class: "mt-1 block w-3/4",
                  placeholder: "Password",
                  onKeyup: withKeys(confirmPassword, ["enter"])
                }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeyup"]),
                createVNode(_sfc_main$4, {
                  message: form.error,
                  class: "mt-2"
                }, null, 8, ["message"])
              ])
            ];
          }
        }),
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$5, { onClick: closeModal }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Cancel `);
                } else {
                  return [
                    createTextVNode(" Cancel ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$6, {
              class: ["ml-3", { "opacity-25": form.processing }],
              disabled: form.processing,
              onClick: confirmPassword
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(__props.button)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(__props.button), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$5, { onClick: closeModal }, {
                default: withCtx(() => [
                  createTextVNode(" Cancel ")
                ]),
                _: 1
              }),
              createVNode(_sfc_main$6, {
                class: ["ml-3", { "opacity-25": form.processing }],
                disabled: form.processing,
                onClick: confirmPassword
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(__props.button), 1)
                ]),
                _: 1
              }, 8, ["class", "disabled"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</span>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ConfirmsPassword.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = defineComponent({
  components: {
    JetActionSection: _sfc_main$7,
    JetButton: _sfc_main$6,
    JetConfirmsPassword: _sfc_main$1,
    JetDangerButton: _sfc_main$8,
    JetSecondaryButton: _sfc_main$5
  },
  data() {
    return {
      enabling: false,
      disabling: false,
      qrCode: null,
      recoveryCodes: []
    };
  },
  methods: {
    enableTwoFactorAuthentication() {
      this.enabling = true;
      this.$inertia.post("/user/two-factor-authentication", {}, {
        preserveScroll: true,
        onSuccess: () => Promise.all([
          this.showQrCode(),
          this.showRecoveryCodes()
        ]),
        onFinish: () => this.enabling = false
      });
    },
    showQrCode() {
      return axios.get("/user/two-factor-qr-code").then((response) => {
        this.qrCode = response.data.svg;
      });
    },
    showRecoveryCodes() {
      return axios.get("/user/two-factor-recovery-codes").then((response) => {
        this.recoveryCodes = response.data;
      });
    },
    regenerateRecoveryCodes() {
      axios.post("/user/two-factor-recovery-codes").then((response) => {
        this.showRecoveryCodes();
      });
    },
    disableTwoFactorAuthentication() {
      this.disabling = true;
      this.$inertia.delete("/user/two-factor-authentication", {
        preserveScroll: true,
        onSuccess: () => this.disabling = false
      });
    }
  },
  computed: {
    twoFactorEnabled() {
      return !this.enabling && this.$page.props.user.two_factor_enabled;
    }
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_jet_action_section = resolveComponent("jet-action-section");
  const _component_jet_confirms_password = resolveComponent("jet-confirms-password");
  const _component_jet_button = resolveComponent("jet-button");
  const _component_jet_secondary_button = resolveComponent("jet-secondary-button");
  const _component_jet_danger_button = resolveComponent("jet-danger-button");
  _push(ssrRenderComponent(_component_jet_action_section, _attrs, {
    title: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Two Factor Authentication `);
      } else {
        return [
          createTextVNode(" Two Factor Authentication ")
        ];
      }
    }),
    description: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Add additional security to your account using two factor authentication. `);
      } else {
        return [
          createTextVNode(" Add additional security to your account using two factor authentication. ")
        ];
      }
    }),
    content: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        if (_ctx.twoFactorEnabled) {
          _push2(`<h3 class="text-lg font-medium text-gray-900"${_scopeId}> You have enabled two factor authentication. </h3>`);
        } else {
          _push2(`<h3 class="text-lg font-medium text-gray-900"${_scopeId}> You have not enabled two factor authentication. </h3>`);
        }
        _push2(`<div class="mt-3 max-w-xl text-sm text-gray-600"${_scopeId}><p${_scopeId}> When two factor authentication is enabled, you will be prompted for a secure, random token during authentication. You may retrieve this token from your phone&#39;s Google Authenticator application. </p></div>`);
        if (_ctx.twoFactorEnabled) {
          _push2(`<div${_scopeId}>`);
          if (_ctx.qrCode) {
            _push2(`<div${_scopeId}><div class="mt-4 max-w-xl text-sm text-gray-600"${_scopeId}><p class="font-semibold"${_scopeId}> Two factor authentication is now enabled. Scan the following QR code using your phone&#39;s authenticator application. </p></div><div class="mt-4"${_scopeId}>${_ctx.qrCode}</div></div>`);
          } else {
            _push2(`<!---->`);
          }
          if (_ctx.recoveryCodes.length > 0) {
            _push2(`<div${_scopeId}><div class="mt-4 max-w-xl text-sm text-gray-600"${_scopeId}><p class="font-semibold"${_scopeId}> Store these recovery codes in a secure password manager. They can be used to recover access to your account if your two factor authentication device is lost. </p></div><div class="grid gap-1 max-w-xl mt-4 px-4 py-4 font-mono text-sm bg-gray-100 rounded-lg"${_scopeId}><!--[-->`);
            ssrRenderList(_ctx.recoveryCodes, (code) => {
              _push2(`<div${_scopeId}>${ssrInterpolate(code)}</div>`);
            });
            _push2(`<!--]--></div></div>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(`</div>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`<div class="mt-5"${_scopeId}>`);
        if (!_ctx.twoFactorEnabled) {
          _push2(`<div${_scopeId}>`);
          _push2(ssrRenderComponent(_component_jet_confirms_password, { onConfirmed: _ctx.enableTwoFactorAuthentication }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(ssrRenderComponent(_component_jet_button, {
                  type: "button",
                  class: { "opacity-25": _ctx.enabling },
                  disabled: _ctx.enabling
                }, {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(` Enable `);
                    } else {
                      return [
                        createTextVNode(" Enable ")
                      ];
                    }
                  }),
                  _: 1
                }, _parent3, _scopeId2));
              } else {
                return [
                  createVNode(_component_jet_button, {
                    type: "button",
                    class: { "opacity-25": _ctx.enabling },
                    disabled: _ctx.enabling
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Enable ")
                    ]),
                    _: 1
                  }, 8, ["class", "disabled"])
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
          _push2(`</div>`);
        } else {
          _push2(`<div${_scopeId}>`);
          _push2(ssrRenderComponent(_component_jet_confirms_password, { onConfirmed: _ctx.regenerateRecoveryCodes }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                if (_ctx.recoveryCodes.length > 0) {
                  _push3(ssrRenderComponent(_component_jet_secondary_button, { class: "mr-3" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Regenerate Recovery Codes `);
                      } else {
                        return [
                          createTextVNode(" Regenerate Recovery Codes ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  _push3(`<!---->`);
                }
              } else {
                return [
                  _ctx.recoveryCodes.length > 0 ? (openBlock(), createBlock(_component_jet_secondary_button, {
                    key: 0,
                    class: "mr-3"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Regenerate Recovery Codes ")
                    ]),
                    _: 1
                  })) : createCommentVNode("", true)
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
          _push2(ssrRenderComponent(_component_jet_confirms_password, { onConfirmed: _ctx.showRecoveryCodes }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                if (_ctx.recoveryCodes.length === 0) {
                  _push3(ssrRenderComponent(_component_jet_secondary_button, { class: "mr-3" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Show Recovery Codes `);
                      } else {
                        return [
                          createTextVNode(" Show Recovery Codes ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  _push3(`<!---->`);
                }
              } else {
                return [
                  _ctx.recoveryCodes.length === 0 ? (openBlock(), createBlock(_component_jet_secondary_button, {
                    key: 0,
                    class: "mr-3"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Show Recovery Codes ")
                    ]),
                    _: 1
                  })) : createCommentVNode("", true)
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
          _push2(ssrRenderComponent(_component_jet_confirms_password, { onConfirmed: _ctx.disableTwoFactorAuthentication }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(ssrRenderComponent(_component_jet_danger_button, {
                  class: { "opacity-25": _ctx.disabling },
                  disabled: _ctx.disabling
                }, {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(` Disable `);
                    } else {
                      return [
                        createTextVNode(" Disable ")
                      ];
                    }
                  }),
                  _: 1
                }, _parent3, _scopeId2));
              } else {
                return [
                  createVNode(_component_jet_danger_button, {
                    class: { "opacity-25": _ctx.disabling },
                    disabled: _ctx.disabling
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Disable ")
                    ]),
                    _: 1
                  }, 8, ["class", "disabled"])
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
          _push2(`</div>`);
        }
        _push2(`</div>`);
      } else {
        return [
          _ctx.twoFactorEnabled ? (openBlock(), createBlock("h3", {
            key: 0,
            class: "text-lg font-medium text-gray-900"
          }, " You have enabled two factor authentication. ")) : (openBlock(), createBlock("h3", {
            key: 1,
            class: "text-lg font-medium text-gray-900"
          }, " You have not enabled two factor authentication. ")),
          createVNode("div", { class: "mt-3 max-w-xl text-sm text-gray-600" }, [
            createVNode("p", null, " When two factor authentication is enabled, you will be prompted for a secure, random token during authentication. You may retrieve this token from your phone's Google Authenticator application. ")
          ]),
          _ctx.twoFactorEnabled ? (openBlock(), createBlock("div", { key: 2 }, [
            _ctx.qrCode ? (openBlock(), createBlock("div", { key: 0 }, [
              createVNode("div", { class: "mt-4 max-w-xl text-sm text-gray-600" }, [
                createVNode("p", { class: "font-semibold" }, " Two factor authentication is now enabled. Scan the following QR code using your phone's authenticator application. ")
              ]),
              createVNode("div", {
                class: "mt-4",
                innerHTML: _ctx.qrCode
              }, null, 8, ["innerHTML"])
            ])) : createCommentVNode("", true),
            _ctx.recoveryCodes.length > 0 ? (openBlock(), createBlock("div", { key: 1 }, [
              createVNode("div", { class: "mt-4 max-w-xl text-sm text-gray-600" }, [
                createVNode("p", { class: "font-semibold" }, " Store these recovery codes in a secure password manager. They can be used to recover access to your account if your two factor authentication device is lost. ")
              ]),
              createVNode("div", { class: "grid gap-1 max-w-xl mt-4 px-4 py-4 font-mono text-sm bg-gray-100 rounded-lg" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(_ctx.recoveryCodes, (code) => {
                  return openBlock(), createBlock("div", { key: code }, toDisplayString(code), 1);
                }), 128))
              ])
            ])) : createCommentVNode("", true)
          ])) : createCommentVNode("", true),
          createVNode("div", { class: "mt-5" }, [
            !_ctx.twoFactorEnabled ? (openBlock(), createBlock("div", { key: 0 }, [
              createVNode(_component_jet_confirms_password, { onConfirmed: _ctx.enableTwoFactorAuthentication }, {
                default: withCtx(() => [
                  createVNode(_component_jet_button, {
                    type: "button",
                    class: { "opacity-25": _ctx.enabling },
                    disabled: _ctx.enabling
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Enable ")
                    ]),
                    _: 1
                  }, 8, ["class", "disabled"])
                ]),
                _: 1
              }, 8, ["onConfirmed"])
            ])) : (openBlock(), createBlock("div", { key: 1 }, [
              createVNode(_component_jet_confirms_password, { onConfirmed: _ctx.regenerateRecoveryCodes }, {
                default: withCtx(() => [
                  _ctx.recoveryCodes.length > 0 ? (openBlock(), createBlock(_component_jet_secondary_button, {
                    key: 0,
                    class: "mr-3"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Regenerate Recovery Codes ")
                    ]),
                    _: 1
                  })) : createCommentVNode("", true)
                ]),
                _: 1
              }, 8, ["onConfirmed"]),
              createVNode(_component_jet_confirms_password, { onConfirmed: _ctx.showRecoveryCodes }, {
                default: withCtx(() => [
                  _ctx.recoveryCodes.length === 0 ? (openBlock(), createBlock(_component_jet_secondary_button, {
                    key: 0,
                    class: "mr-3"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Show Recovery Codes ")
                    ]),
                    _: 1
                  })) : createCommentVNode("", true)
                ]),
                _: 1
              }, 8, ["onConfirmed"]),
              createVNode(_component_jet_confirms_password, { onConfirmed: _ctx.disableTwoFactorAuthentication }, {
                default: withCtx(() => [
                  createVNode(_component_jet_danger_button, {
                    class: { "opacity-25": _ctx.disabling },
                    disabled: _ctx.disabling
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Disable ")
                    ]),
                    _: 1
                  }, 8, ["class", "disabled"])
                ]),
                _: 1
              }, 8, ["onConfirmed"])
            ]))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Profile/Partials/TwoFactorAuthenticationForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TwoFactorAuthenticationForm = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  TwoFactorAuthenticationForm as default
};
