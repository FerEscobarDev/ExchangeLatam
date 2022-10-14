import { defineComponent, resolveComponent, mergeProps, withCtx, createTextVNode, createVNode, openBlock, createBlock, createCommentVNode, withDirectives, vModelText, useSSRContext } from "vue";
import { _ as _sfc_main$2 } from "./Button.feee2cab.mjs";
import { J as JetForm } from "./Form.a498045b.mjs";
import { _ as _sfc_main$3 } from "./Input.c38a320e.mjs";
import { _ as _sfc_main$4 } from "./InputError.bc94ef1e.mjs";
import { _ as _sfc_main$5 } from "./Label.ceceda67.mjs";
import { _ as _sfc_main$1 } from "./ActionMessage.1772107a.mjs";
import { _ as _sfc_main$6 } from "./SecondaryButton.987206fe.mjs";
import { J as JetSelect } from "./Select.c3ee249a.mjs";
import { Link } from "@inertiajs/inertia-vue3";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
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
    JetSecondaryButton: _sfc_main$6,
    JetSelect,
    Link
  },
  props: {
    client: Object
  },
  setup() {
    let options = [
      {
        "id": 1,
        "name": "Si"
      },
      {
        "id": 2,
        "name": "No"
      }
    ];
    return {
      options
    };
  },
  data() {
    return {
      form: this.$inertia.form({
        _method: "PUT",
        verified: this.options[1],
        commentVerified: null,
        formClient: this.options[1],
        commentFormClient: null,
        formFund: this.options[1],
        commentFormFund: null
      })
    };
  },
  methods: {
    updateData() {
      if (this.client.form_knowledge_client === null || this.client.form_fund === null || this.client.verification === null) {
        return this.$page.props.flash.error = "Deben existir todos los requisitos para verificar al usuario.";
      } else if (this.form.verified.name === "No" && this.form.commentVerified === null && this.client.requirement_user.document !== 2) {
        return this.$page.props.flash.error = "Si rechazas el documento de identidad debes a\xF1adir un comentario.";
      } else if (this.form.formClient.name === "No" && this.form.commentFormClient === null && this.client.requirement_user.formKnowledge !== 2) {
        return this.$page.props.flash.error = "Si rechazas el formulario de conocimiento del cliente debes a\xF1adir un comentario.";
      } else if (this.form.formFund.name === "No" && this.form.commentFormFund === null && this.client.requirement_user.formFunds !== 2) {
        return this.$page.props.flash.error = "Si rechazas el formulario de declaraci\xF3n de fondos debes a\xF1adir un comentario.";
      } else {
        this.form.post(route("admin.userVerified", this.client.id), {
          errorBag: "adminUserVerified",
          preserveScroll: true
        });
      }
    }
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_jet_form = resolveComponent("jet-form");
  const _component_Link = resolveComponent("Link");
  const _component_jet_select = resolveComponent("jet-select");
  const _component_jet_input_error = resolveComponent("jet-input-error");
  const _component_jet_label = resolveComponent("jet-label");
  const _component_jet_button = resolveComponent("jet-button");
  _push(ssrRenderComponent(_component_jet_form, mergeProps({ onSubmitted: _ctx.updateData }, _attrs), {
    form: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="col-span-6 md:col-span-3 grid grid-cols-6 gap-4"${_scopeId}>`);
        if (_ctx.client.requirement_user.formFunds !== 2) {
          _push2(`<h2 class="col-span-6 text-center text-2xl font-semibold text-dark-brand"${_scopeId}>\xBFAprobar Formulario Declaraci\xF3n de Fondos?</h2>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`<div class="col-span-6 mt-2"${_scopeId}>`);
        if (_ctx.client.form_fund) {
          _push2(ssrRenderComponent(_component_Link, {
            class: "text-lg uppercase pl-3 underline text-blue-brand visited:text-blue-brand/20",
            href: _ctx.route("formFund.showAdmin", _ctx.client.form_fund)
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(` Ver formulario `);
              } else {
                return [
                  createTextVNode(" Ver formulario ")
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
        } else {
          _push2(`<span class="text-lg uppercase pl-3 underline text-gray-400 cursor-not-allowed"${_scopeId}> Ver formulario </span>`);
        }
        _push2(`</div>`);
        if (_ctx.client.requirement_user) {
          _push2(`<div class="col-span-6"${_scopeId}>`);
          if (_ctx.client.requirement_user.formFunds !== 2) {
            _push2(ssrRenderComponent(_component_jet_select, {
              selectable: _ctx.options,
              selected: _ctx.form.formFund,
              modelValue: _ctx.form.formFund,
              "onUpdate:modelValue": ($event) => _ctx.form.formFund = $event
            }, {
              title: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \xBFAprobar formulario declaraci\xF3n de fondos? `);
                } else {
                  return [
                    createTextVNode(" \xBFAprobar formulario declaraci\xF3n de fondos? ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            _push2(`<!---->`);
          }
          _push2(ssrRenderComponent(_component_jet_input_error, {
            message: _ctx.form.errors.formFund,
            class: "mt-2"
          }, null, _parent2, _scopeId));
          _push2(`</div>`);
        } else {
          _push2(`<!---->`);
        }
        if (_ctx.client.requirement_user) {
          _push2(`<div class="col-span-6"${_scopeId}>`);
          if (_ctx.client.requirement_user.formFunds !== 2) {
            _push2(ssrRenderComponent(_component_jet_label, {
              for: "commentFormFund",
              value: "Comentario"
            }, null, _parent2, _scopeId));
          } else {
            _push2(`<!---->`);
          }
          if (_ctx.client.requirement_user.formFunds !== 2) {
            _push2(`<textarea class="w-full text-gray-600 border-dark-brand focus:border-blue-brand focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm" name="commentFormFund" id="commentFormFund" rows="4" placeholder="En caso de no aprobar el formulario, indicar aqu\xED los motivos."${_scopeId}>${ssrInterpolate(_ctx.form.commentFormFund)}</textarea>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(ssrRenderComponent(_component_jet_input_error, {
            message: _ctx.form.errors.commentFormFund,
            class: "mt-2"
          }, null, _parent2, _scopeId));
          _push2(`</div>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div><div class="col-span-6 md:col-span-3 grid grid-cols-6 gap-4"${_scopeId}>`);
        if (_ctx.client.requirement_user.formKnowledge !== 2) {
          _push2(`<h2 class="col-span-6 text-center text-2xl font-semibold text-dark-brand"${_scopeId}>\xBFAprobar Formulario de Conocimiento del Cliente?</h2>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`<div class="col-span-6 mt-2"${_scopeId}>`);
        if (_ctx.client.form_knowledge_client) {
          _push2(ssrRenderComponent(_component_Link, {
            class: "text-lg uppercase pl-3 underline text-blue-brand visited:text-blue-brand/20",
            target: "_blank",
            href: _ctx.route("formKnowledgeClient.showAdmin", _ctx.client.form_knowledge_client)
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(` Ver formulario `);
              } else {
                return [
                  createTextVNode(" Ver formulario ")
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
        } else {
          _push2(`<span class="text-lg uppercase pl-3 underline text-gray-400 cursor-not-allowed"${_scopeId}> Ver formulario </span>`);
        }
        _push2(`</div>`);
        if (_ctx.client.requirement_user) {
          _push2(`<div class="col-span-6"${_scopeId}>`);
          if (_ctx.client.requirement_user.formKnowledge !== 2) {
            _push2(ssrRenderComponent(_component_jet_select, {
              selectable: _ctx.options,
              selected: _ctx.form.formClient,
              modelValue: _ctx.form.formClient,
              "onUpdate:modelValue": ($event) => _ctx.form.formClient = $event
            }, {
              title: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \xBFAprobar formulario de conocimiento del cliente? `);
                } else {
                  return [
                    createTextVNode(" \xBFAprobar formulario de conocimiento del cliente? ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            _push2(`<!---->`);
          }
          _push2(ssrRenderComponent(_component_jet_input_error, {
            message: _ctx.form.errors.formClient,
            class: "mt-2"
          }, null, _parent2, _scopeId));
          _push2(`</div>`);
        } else {
          _push2(`<!---->`);
        }
        if (_ctx.client.requirement_user) {
          _push2(`<div class="col-span-6"${_scopeId}>`);
          if (_ctx.client.requirement_user.formKnowledge !== 2) {
            _push2(ssrRenderComponent(_component_jet_label, {
              for: "commentFormClient",
              value: "Comentario"
            }, null, _parent2, _scopeId));
          } else {
            _push2(`<!---->`);
          }
          if (_ctx.client.requirement_user.formKnowledge !== 2) {
            _push2(`<textarea class="w-full text-gray-600 border-dark-brand focus:border-blue-brand focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm" name="commentFormClient" id="commentFormClient" rows="4" placeholder="En caso de no aprobar el formulario, indicar aqu\xED los motivos."${_scopeId}>${ssrInterpolate(_ctx.form.commentFormClient)}</textarea>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(ssrRenderComponent(_component_jet_input_error, {
            message: _ctx.form.errors.commentFormClient,
            class: "mt-2"
          }, null, _parent2, _scopeId));
          _push2(`</div>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div>`);
        if (_ctx.client.requirement_user) {
          _push2(`<div class="col-span-6 grid grid-cols-6 gap-4"${_scopeId}>`);
          if (_ctx.client.requirement_user.document !== 2) {
            _push2(`<h2 class="col-span-6 text-center text-2xl font-semibold text-dark-brand"${_scopeId}>\xBFAprobar Identidad?</h2>`);
          } else {
            _push2(`<!---->`);
          }
          if (_ctx.client.requirement_user.document !== 2) {
            _push2(`<div class="col-span-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_jet_select, {
              selectable: _ctx.options,
              selected: _ctx.form.verified,
              modelValue: _ctx.form.verified,
              "onUpdate:modelValue": ($event) => _ctx.form.verified = $event
            }, {
              title: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \xBFAprobar verificaci\xF3n? `);
                } else {
                  return [
                    createTextVNode(" \xBFAprobar verificaci\xF3n? ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_jet_input_error, {
              message: _ctx.form.errors.verified,
              class: "mt-2"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            _push2(`<!---->`);
          }
          if (_ctx.client.requirement_user.document !== 2) {
            _push2(`<div class="col-span-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_jet_label, {
              for: "commentVerification",
              value: "Comentario"
            }, null, _parent2, _scopeId));
            _push2(`<textarea class="w-full text-gray-600 border-dark-brand focus:border-blue-brand focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm" name="commentVerified" id="commentVerified" rows="4" placeholder="En caso de no aprobar la verificaci\xF3n, indicar aqu\xED los motivos."${_scopeId}>${ssrInterpolate(_ctx.form.commentVerified)}</textarea>`);
            _push2(ssrRenderComponent(_component_jet_input_error, {
              message: _ctx.form.errors.commentVerified,
              class: "mt-2"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(`</div>`);
        } else {
          _push2(`<!---->`);
        }
        if (_ctx.client.requirement_user.verified !== 2) {
          _push2(`<div class="col-span-6 flex justify-center items-center"${_scopeId}>`);
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
          _push2(`</div>`);
        } else {
          _push2(`<!---->`);
        }
      } else {
        return [
          createVNode("div", { class: "col-span-6 md:col-span-3 grid grid-cols-6 gap-4" }, [
            _ctx.client.requirement_user.formFunds !== 2 ? (openBlock(), createBlock("h2", {
              key: 0,
              class: "col-span-6 text-center text-2xl font-semibold text-dark-brand"
            }, "\xBFAprobar Formulario Declaraci\xF3n de Fondos?")) : createCommentVNode("", true),
            createVNode("div", { class: "col-span-6 mt-2" }, [
              _ctx.client.form_fund ? (openBlock(), createBlock(_component_Link, {
                key: 0,
                class: "text-lg uppercase pl-3 underline text-blue-brand visited:text-blue-brand/20",
                href: _ctx.route("formFund.showAdmin", _ctx.client.form_fund)
              }, {
                default: withCtx(() => [
                  createTextVNode(" Ver formulario ")
                ]),
                _: 1
              }, 8, ["href"])) : (openBlock(), createBlock("span", {
                key: 1,
                class: "text-lg uppercase pl-3 underline text-gray-400 cursor-not-allowed"
              }, " Ver formulario "))
            ]),
            _ctx.client.requirement_user ? (openBlock(), createBlock("div", {
              key: 1,
              class: "col-span-6"
            }, [
              _ctx.client.requirement_user.formFunds !== 2 ? (openBlock(), createBlock(_component_jet_select, {
                key: 0,
                selectable: _ctx.options,
                selected: _ctx.form.formFund,
                modelValue: _ctx.form.formFund,
                "onUpdate:modelValue": ($event) => _ctx.form.formFund = $event
              }, {
                title: withCtx(() => [
                  createTextVNode(" \xBFAprobar formulario declaraci\xF3n de fondos? ")
                ]),
                _: 1
              }, 8, ["selectable", "selected", "modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true),
              createVNode(_component_jet_input_error, {
                message: _ctx.form.errors.formFund,
                class: "mt-2"
              }, null, 8, ["message"])
            ])) : createCommentVNode("", true),
            _ctx.client.requirement_user ? (openBlock(), createBlock("div", {
              key: 2,
              class: "col-span-6"
            }, [
              _ctx.client.requirement_user.formFunds !== 2 ? (openBlock(), createBlock(_component_jet_label, {
                key: 0,
                for: "commentFormFund",
                value: "Comentario"
              })) : createCommentVNode("", true),
              _ctx.client.requirement_user.formFunds !== 2 ? withDirectives((openBlock(), createBlock("textarea", {
                key: 1,
                class: "w-full text-gray-600 border-dark-brand focus:border-blue-brand focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm",
                name: "commentFormFund",
                id: "commentFormFund",
                rows: "4",
                placeholder: "En caso de no aprobar el formulario, indicar aqu\xED los motivos.",
                "onUpdate:modelValue": ($event) => _ctx.form.commentFormFund = $event
              }, "\r\n                    ", 8, ["onUpdate:modelValue"])), [
                [vModelText, _ctx.form.commentFormFund]
              ]) : createCommentVNode("", true),
              createVNode(_component_jet_input_error, {
                message: _ctx.form.errors.commentFormFund,
                class: "mt-2"
              }, null, 8, ["message"])
            ])) : createCommentVNode("", true)
          ]),
          createVNode("div", { class: "col-span-6 md:col-span-3 grid grid-cols-6 gap-4" }, [
            _ctx.client.requirement_user.formKnowledge !== 2 ? (openBlock(), createBlock("h2", {
              key: 0,
              class: "col-span-6 text-center text-2xl font-semibold text-dark-brand"
            }, "\xBFAprobar Formulario de Conocimiento del Cliente?")) : createCommentVNode("", true),
            createVNode("div", { class: "col-span-6 mt-2" }, [
              _ctx.client.form_knowledge_client ? (openBlock(), createBlock(_component_Link, {
                key: 0,
                class: "text-lg uppercase pl-3 underline text-blue-brand visited:text-blue-brand/20",
                target: "_blank",
                href: _ctx.route("formKnowledgeClient.showAdmin", _ctx.client.form_knowledge_client)
              }, {
                default: withCtx(() => [
                  createTextVNode(" Ver formulario ")
                ]),
                _: 1
              }, 8, ["href"])) : (openBlock(), createBlock("span", {
                key: 1,
                class: "text-lg uppercase pl-3 underline text-gray-400 cursor-not-allowed"
              }, " Ver formulario "))
            ]),
            _ctx.client.requirement_user ? (openBlock(), createBlock("div", {
              key: 1,
              class: "col-span-6"
            }, [
              _ctx.client.requirement_user.formKnowledge !== 2 ? (openBlock(), createBlock(_component_jet_select, {
                key: 0,
                selectable: _ctx.options,
                selected: _ctx.form.formClient,
                modelValue: _ctx.form.formClient,
                "onUpdate:modelValue": ($event) => _ctx.form.formClient = $event
              }, {
                title: withCtx(() => [
                  createTextVNode(" \xBFAprobar formulario de conocimiento del cliente? ")
                ]),
                _: 1
              }, 8, ["selectable", "selected", "modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true),
              createVNode(_component_jet_input_error, {
                message: _ctx.form.errors.formClient,
                class: "mt-2"
              }, null, 8, ["message"])
            ])) : createCommentVNode("", true),
            _ctx.client.requirement_user ? (openBlock(), createBlock("div", {
              key: 2,
              class: "col-span-6"
            }, [
              _ctx.client.requirement_user.formKnowledge !== 2 ? (openBlock(), createBlock(_component_jet_label, {
                key: 0,
                for: "commentFormClient",
                value: "Comentario"
              })) : createCommentVNode("", true),
              _ctx.client.requirement_user.formKnowledge !== 2 ? withDirectives((openBlock(), createBlock("textarea", {
                key: 1,
                class: "w-full text-gray-600 border-dark-brand focus:border-blue-brand focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm",
                name: "commentFormClient",
                id: "commentFormClient",
                rows: "4",
                placeholder: "En caso de no aprobar el formulario, indicar aqu\xED los motivos.",
                "onUpdate:modelValue": ($event) => _ctx.form.commentFormClient = $event
              }, "\r\n                    ", 8, ["onUpdate:modelValue"])), [
                [vModelText, _ctx.form.commentFormClient]
              ]) : createCommentVNode("", true),
              createVNode(_component_jet_input_error, {
                message: _ctx.form.errors.commentFormClient,
                class: "mt-2"
              }, null, 8, ["message"])
            ])) : createCommentVNode("", true)
          ]),
          _ctx.client.requirement_user ? (openBlock(), createBlock("div", {
            key: 0,
            class: "col-span-6 grid grid-cols-6 gap-4"
          }, [
            _ctx.client.requirement_user.document !== 2 ? (openBlock(), createBlock("h2", {
              key: 0,
              class: "col-span-6 text-center text-2xl font-semibold text-dark-brand"
            }, "\xBFAprobar Identidad?")) : createCommentVNode("", true),
            _ctx.client.requirement_user.document !== 2 ? (openBlock(), createBlock("div", {
              key: 1,
              class: "col-span-6"
            }, [
              createVNode(_component_jet_select, {
                selectable: _ctx.options,
                selected: _ctx.form.verified,
                modelValue: _ctx.form.verified,
                "onUpdate:modelValue": ($event) => _ctx.form.verified = $event
              }, {
                title: withCtx(() => [
                  createTextVNode(" \xBFAprobar verificaci\xF3n? ")
                ]),
                _: 1
              }, 8, ["selectable", "selected", "modelValue", "onUpdate:modelValue"]),
              createVNode(_component_jet_input_error, {
                message: _ctx.form.errors.verified,
                class: "mt-2"
              }, null, 8, ["message"])
            ])) : createCommentVNode("", true),
            _ctx.client.requirement_user.document !== 2 ? (openBlock(), createBlock("div", {
              key: 2,
              class: "col-span-6"
            }, [
              createVNode(_component_jet_label, {
                for: "commentVerification",
                value: "Comentario"
              }),
              withDirectives(createVNode("textarea", {
                class: "w-full text-gray-600 border-dark-brand focus:border-blue-brand focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm",
                name: "commentVerified",
                id: "commentVerified",
                rows: "4",
                placeholder: "En caso de no aprobar la verificaci\xF3n, indicar aqu\xED los motivos.",
                "onUpdate:modelValue": ($event) => _ctx.form.commentVerified = $event
              }, "\r\n                    ", 8, ["onUpdate:modelValue"]), [
                [vModelText, _ctx.form.commentVerified]
              ]),
              createVNode(_component_jet_input_error, {
                message: _ctx.form.errors.commentVerified,
                class: "mt-2"
              }, null, 8, ["message"])
            ])) : createCommentVNode("", true)
          ])) : createCommentVNode("", true),
          _ctx.client.requirement_user.verified !== 2 ? (openBlock(), createBlock("div", {
            key: 1,
            class: "col-span-6 flex justify-center items-center"
          }, [
            createVNode(_component_jet_button, {
              class: [{ "opacity-25": _ctx.form.processing }, "mt-2"],
              disabled: _ctx.form.processing
            }, {
              default: withCtx(() => [
                createTextVNode(" Guardar ")
              ]),
              _: 1
            }, 8, ["class", "disabled"])
          ])) : createCommentVNode("", true)
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Verifications/Partials/FormVerification.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const FormVerification = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  FormVerification as default
};
