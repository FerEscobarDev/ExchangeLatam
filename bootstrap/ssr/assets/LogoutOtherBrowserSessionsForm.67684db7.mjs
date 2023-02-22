import { defineComponent, resolveComponent, withCtx, createTextVNode, createVNode, withKeys, openBlock, createBlock, Fragment, renderList, toDisplayString, createCommentVNode, useSSRContext } from "vue";
import { _ as _sfc_main$1 } from "./ActionMessage.1772107a.mjs";
import { _ as _sfc_main$2 } from "./ActionSection.f2b811fa.mjs";
import { _ as _sfc_main$3 } from "./Button.feee2cab.mjs";
import { _ as _sfc_main$4 } from "./DialogModal.04a42090.mjs";
import { _ as _sfc_main$5 } from "./Input.c38a320e.mjs";
import { _ as _sfc_main$6 } from "./InputError.bc94ef1e.mjs";
import { _ as _sfc_main$7 } from "./SecondaryButton.987206fe.mjs";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.43be4956.mjs";
import "./SectionTitle.3d2d12a1.mjs";
import "./Modal.688f150f.mjs";
const _sfc_main = defineComponent({
  props: ["sessions"],
  components: {
    JetActionMessage: _sfc_main$1,
    JetActionSection: _sfc_main$2,
    JetButton: _sfc_main$3,
    JetDialogModal: _sfc_main$4,
    JetInput: _sfc_main$5,
    JetInputError: _sfc_main$6,
    JetSecondaryButton: _sfc_main$7
  },
  data() {
    return {
      confirmingLogout: false,
      form: this.$inertia.form({
        password: ""
      })
    };
  },
  methods: {
    confirmLogout() {
      this.confirmingLogout = true;
      setTimeout(() => this.$refs.password.focus(), 250);
    },
    logoutOtherBrowserSessions() {
      this.form.delete(route("other-browser-sessions.destroy"), {
        preserveScroll: true,
        onSuccess: () => this.closeModal(),
        onError: () => this.$refs.password.focus(),
        onFinish: () => this.form.reset()
      });
    },
    closeModal() {
      this.confirmingLogout = false;
      this.form.reset();
    }
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_jet_action_section = resolveComponent("jet-action-section");
  const _component_jet_button = resolveComponent("jet-button");
  const _component_jet_action_message = resolveComponent("jet-action-message");
  const _component_jet_dialog_modal = resolveComponent("jet-dialog-modal");
  const _component_jet_input = resolveComponent("jet-input");
  const _component_jet_input_error = resolveComponent("jet-input-error");
  const _component_jet_secondary_button = resolveComponent("jet-secondary-button");
  _push(ssrRenderComponent(_component_jet_action_section, _attrs, {
    title: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Browser Sessions `);
      } else {
        return [
          createTextVNode(" Browser Sessions ")
        ];
      }
    }),
    description: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Manage and log out your active sessions on other browsers and devices. `);
      } else {
        return [
          createTextVNode(" Manage and log out your active sessions on other browsers and devices. ")
        ];
      }
    }),
    content: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="max-w-xl text-sm text-gray-600"${_scopeId}> If necessary, you may log out of all of your other browser sessions across all of your devices. Some of your recent sessions are listed below; however, this list may not be exhaustive. If you feel your account has been compromised, you should also update your password. </div>`);
        if (_ctx.sessions.length > 0) {
          _push2(`<div class="mt-5 space-y-6"${_scopeId}><!--[-->`);
          ssrRenderList(_ctx.sessions, (session, i) => {
            _push2(`<div class="flex items-center"${_scopeId}><div${_scopeId}>`);
            if (session.agent.is_desktop) {
              _push2(`<svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor" class="w-8 h-8 text-gray-500"${_scopeId}><path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"${_scopeId}></path></svg>`);
            } else {
              _push2(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" class="w-8 h-8 text-gray-500"${_scopeId}><path d="M0 0h24v24H0z" stroke="none"${_scopeId}></path><rect x="7" y="4" width="10" height="16" rx="1"${_scopeId}></rect><path d="M11 5h2M12 17v.01"${_scopeId}></path></svg>`);
            }
            _push2(`</div><div class="ml-3"${_scopeId}><div class="text-sm text-gray-600"${_scopeId}>${ssrInterpolate(session.agent.platform)} - ${ssrInterpolate(session.agent.browser)}</div><div${_scopeId}><div class="text-xs text-gray-500"${_scopeId}>${ssrInterpolate(session.ip_address)}, `);
            if (session.is_current_device) {
              _push2(`<span class="text-green-500 font-semibold"${_scopeId}>This device</span>`);
            } else {
              _push2(`<span${_scopeId}>Last active ${ssrInterpolate(session.last_active)}</span>`);
            }
            _push2(`</div></div></div></div>`);
          });
          _push2(`<!--]--></div>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`<div class="flex items-center mt-5"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_button, { onClick: _ctx.confirmLogout }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Log Out Other Browser Sessions `);
            } else {
              return [
                createTextVNode(" Log Out Other Browser Sessions ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_jet_action_message, {
          on: _ctx.form.recentlySuccessful,
          class: "ml-3"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Done. `);
            } else {
              return [
                createTextVNode(" Done. ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div>`);
        _push2(ssrRenderComponent(_component_jet_dialog_modal, {
          show: _ctx.confirmingLogout,
          onClose: _ctx.closeModal
        }, {
          title: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Log Out Other Browser Sessions `);
            } else {
              return [
                createTextVNode(" Log Out Other Browser Sessions ")
              ];
            }
          }),
          content: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Please enter your password to confirm you would like to log out of your other browser sessions across all of your devices. <div class="mt-4"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_jet_input, {
                type: "password",
                class: "mt-1 block w-3/4",
                placeholder: "Password",
                ref: "password",
                modelValue: _ctx.form.password,
                "onUpdate:modelValue": ($event) => _ctx.form.password = $event,
                onKeyup: _ctx.logoutOtherBrowserSessions
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_jet_input_error, {
                message: _ctx.form.errors.password,
                class: "mt-2"
              }, null, _parent3, _scopeId2));
              _push3(`</div>`);
            } else {
              return [
                createTextVNode(" Please enter your password to confirm you would like to log out of your other browser sessions across all of your devices. "),
                createVNode("div", { class: "mt-4" }, [
                  createVNode(_component_jet_input, {
                    type: "password",
                    class: "mt-1 block w-3/4",
                    placeholder: "Password",
                    ref: "password",
                    modelValue: _ctx.form.password,
                    "onUpdate:modelValue": ($event) => _ctx.form.password = $event,
                    onKeyup: withKeys(_ctx.logoutOtherBrowserSessions, ["enter"])
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeyup"]),
                  createVNode(_component_jet_input_error, {
                    message: _ctx.form.errors.password,
                    class: "mt-2"
                  }, null, 8, ["message"])
                ])
              ];
            }
          }),
          footer: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_jet_secondary_button, { onClick: _ctx.closeModal }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` Cancel `);
                  } else {
                    return [
                      createTextVNode(" Cancel ")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_jet_button, {
                class: ["ml-2", { "opacity-25": _ctx.form.processing }],
                onClick: _ctx.logoutOtherBrowserSessions,
                disabled: _ctx.form.processing
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` Log Out Other Browser Sessions `);
                  } else {
                    return [
                      createTextVNode(" Log Out Other Browser Sessions ")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_jet_secondary_button, { onClick: _ctx.closeModal }, {
                  default: withCtx(() => [
                    createTextVNode(" Cancel ")
                  ]),
                  _: 1
                }, 8, ["onClick"]),
                createVNode(_component_jet_button, {
                  class: ["ml-2", { "opacity-25": _ctx.form.processing }],
                  onClick: _ctx.logoutOtherBrowserSessions,
                  disabled: _ctx.form.processing
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Log Out Other Browser Sessions ")
                  ]),
                  _: 1
                }, 8, ["onClick", "class", "disabled"])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode("div", { class: "max-w-xl text-sm text-gray-600" }, " If necessary, you may log out of all of your other browser sessions across all of your devices. Some of your recent sessions are listed below; however, this list may not be exhaustive. If you feel your account has been compromised, you should also update your password. "),
          _ctx.sessions.length > 0 ? (openBlock(), createBlock("div", {
            key: 0,
            class: "mt-5 space-y-6"
          }, [
            (openBlock(true), createBlock(Fragment, null, renderList(_ctx.sessions, (session, i) => {
              return openBlock(), createBlock("div", {
                class: "flex items-center",
                key: i
              }, [
                createVNode("div", null, [
                  session.agent.is_desktop ? (openBlock(), createBlock("svg", {
                    key: 0,
                    fill: "none",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "2",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    class: "w-8 h-8 text-gray-500"
                  }, [
                    createVNode("path", { d: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" })
                  ])) : (openBlock(), createBlock("svg", {
                    key: 1,
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    "stroke-width": "2",
                    stroke: "currentColor",
                    fill: "none",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    class: "w-8 h-8 text-gray-500"
                  }, [
                    createVNode("path", {
                      d: "M0 0h24v24H0z",
                      stroke: "none"
                    }),
                    createVNode("rect", {
                      x: "7",
                      y: "4",
                      width: "10",
                      height: "16",
                      rx: "1"
                    }),
                    createVNode("path", { d: "M11 5h2M12 17v.01" })
                  ]))
                ]),
                createVNode("div", { class: "ml-3" }, [
                  createVNode("div", { class: "text-sm text-gray-600" }, toDisplayString(session.agent.platform) + " - " + toDisplayString(session.agent.browser), 1),
                  createVNode("div", null, [
                    createVNode("div", { class: "text-xs text-gray-500" }, [
                      createTextVNode(toDisplayString(session.ip_address) + ", ", 1),
                      session.is_current_device ? (openBlock(), createBlock("span", {
                        key: 0,
                        class: "text-green-500 font-semibold"
                      }, "This device")) : (openBlock(), createBlock("span", { key: 1 }, "Last active " + toDisplayString(session.last_active), 1))
                    ])
                  ])
                ])
              ]);
            }), 128))
          ])) : createCommentVNode("", true),
          createVNode("div", { class: "flex items-center mt-5" }, [
            createVNode(_component_jet_button, { onClick: _ctx.confirmLogout }, {
              default: withCtx(() => [
                createTextVNode(" Log Out Other Browser Sessions ")
              ]),
              _: 1
            }, 8, ["onClick"]),
            createVNode(_component_jet_action_message, {
              on: _ctx.form.recentlySuccessful,
              class: "ml-3"
            }, {
              default: withCtx(() => [
                createTextVNode(" Done. ")
              ]),
              _: 1
            }, 8, ["on"])
          ]),
          createVNode(_component_jet_dialog_modal, {
            show: _ctx.confirmingLogout,
            onClose: _ctx.closeModal
          }, {
            title: withCtx(() => [
              createTextVNode(" Log Out Other Browser Sessions ")
            ]),
            content: withCtx(() => [
              createTextVNode(" Please enter your password to confirm you would like to log out of your other browser sessions across all of your devices. "),
              createVNode("div", { class: "mt-4" }, [
                createVNode(_component_jet_input, {
                  type: "password",
                  class: "mt-1 block w-3/4",
                  placeholder: "Password",
                  ref: "password",
                  modelValue: _ctx.form.password,
                  "onUpdate:modelValue": ($event) => _ctx.form.password = $event,
                  onKeyup: withKeys(_ctx.logoutOtherBrowserSessions, ["enter"])
                }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeyup"]),
                createVNode(_component_jet_input_error, {
                  message: _ctx.form.errors.password,
                  class: "mt-2"
                }, null, 8, ["message"])
              ])
            ]),
            footer: withCtx(() => [
              createVNode(_component_jet_secondary_button, { onClick: _ctx.closeModal }, {
                default: withCtx(() => [
                  createTextVNode(" Cancel ")
                ]),
                _: 1
              }, 8, ["onClick"]),
              createVNode(_component_jet_button, {
                class: ["ml-2", { "opacity-25": _ctx.form.processing }],
                onClick: _ctx.logoutOtherBrowserSessions,
                disabled: _ctx.form.processing
              }, {
                default: withCtx(() => [
                  createTextVNode(" Log Out Other Browser Sessions ")
                ]),
                _: 1
              }, 8, ["onClick", "class", "disabled"])
            ]),
            _: 1
          }, 8, ["show", "onClose"])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Profile/Partials/LogoutOtherBrowserSessionsForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const LogoutOtherBrowserSessionsForm = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  LogoutOtherBrowserSessionsForm as default
};
