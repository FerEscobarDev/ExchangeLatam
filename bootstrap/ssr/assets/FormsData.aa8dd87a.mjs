import { defineComponent, resolveComponent, mergeProps, withCtx, createVNode, createTextVNode, withModifiers, withDirectives, vShow, openBlock, createBlock, createCommentVNode, toDisplayString, useSSRContext } from "vue";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { ChevronUpIcon } from "@heroicons/vue/solid";
import { Link } from "@inertiajs/inertia-vue3";
import { _ as _sfc_main$1 } from "./Button.feee2cab.mjs";
import { _ as _sfc_main$2 } from "./InputError.bc94ef1e.mjs";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.43be4956.mjs";
const _sfc_main = defineComponent({
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    ChevronUpIcon,
    Link,
    JetButton: _sfc_main$1,
    JetInputError: _sfc_main$2
  },
  props: ["user"],
  data() {
    return {
      form: this.$inertia.form({
        front: null,
        back: null
      }),
      frontPreview: null,
      backPreview: null
    };
  },
  methods: {
    selectFront() {
      this.$refs.front.click();
    },
    selectBack() {
      this.$refs.back.click();
    },
    updateFrontPreview() {
      const frontPreview = this.$refs.front.files[0];
      if (!frontPreview)
        return;
      const reader = new FileReader();
      reader.onload = (e) => {
        this.frontPreview = e.target.result;
      };
      reader.readAsDataURL(frontPreview);
    },
    updateBackPreview() {
      const backPreview = this.$refs.back.files[0];
      if (!backPreview)
        return;
      const reader = new FileReader();
      reader.onload = (e) => {
        this.backPreview = e.target.result;
      };
      reader.readAsDataURL(backPreview);
    },
    submit() {
      if (this.$refs.front) {
        this.form.front = this.$refs.front.files[0];
      }
      if (this.$refs.back) {
        this.form.back = this.$refs.back.files[0];
      }
      this.form.post(this.route("verification.store"), {
        onSuccess: () => this.clearFileInput()
      });
    }
  },
  computed: {
    openVerified() {
      if (this.user.requirement_user.document === 0) {
        return true;
      } else if (this.user.requirement_user.verified === 1) {
        return true;
      } else {
        return false;
      }
    },
    openForms() {
      if (this.user.requirement_user.document !== 0) {
        if (this.user.requirement_user.formFunds === 0 || this.user.requirement_user.formKnowledge === 0) {
          return true;
        }
      }
      return false;
    }
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Disclosure = resolveComponent("Disclosure");
  const _component_DisclosureButton = resolveComponent("DisclosureButton");
  const _component_ChevronUpIcon = resolveComponent("ChevronUpIcon");
  const _component_DisclosurePanel = resolveComponent("DisclosurePanel");
  const _component_jet_input_error = resolveComponent("jet-input-error");
  const _component_jet_button = resolveComponent("jet-button");
  const _component_Link = resolveComponent("Link");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full p-4" }, _attrs))}><div class="w-full p-2 bg-white rounded-2xl">`);
  _push(ssrRenderComponent(_component_Disclosure, { defaultOpen: _ctx.openVerified }, {
    default: withCtx(({ open }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_DisclosureButton, { class: "flex justify-between items-center w-full max-w-xl mx-auto px-4 py-2 text-left text-blue-brand-gradient1/80 bg-blue-brand bg-opacity-25 rounded-lg hover:bg-blue-brand hover:bg-opacity-50 focus:outline-none focus-visible:ring focus-visible:ring-blue-brand-gradient1 focus-visible:ring-opacity-75" }, {
          default: withCtx((_, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<span${_scopeId2}>Verificaci\xF3n de identidad</span>`);
              _push3(ssrRenderComponent(_component_ChevronUpIcon, {
                class: [open ? "transform rotate-180" : "", "w-5 h-5 text-blue-brand-gradient1/80"]
              }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode("span", null, "Verificaci\xF3n de identidad"),
                createVNode(_component_ChevronUpIcon, {
                  class: [open ? "transform rotate-180" : "", "w-5 h-5 text-blue-brand-gradient1/80"]
                }, null, 8, ["class"])
              ];
            }
          }),
          _: 2
        }, _parent2, _scopeId));
        if (_ctx.user.requirement_user.document === 0) {
          _push2(ssrRenderComponent(_component_DisclosurePanel, { class: "px-4 pt-4 pb-2" }, {
            default: withCtx((_, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<p class="text-lg md:text-xl text-black/40 font-medium text-justify"${_scopeId2}>Es necesario subir una foto de su documento para la verificaci\xF3n de identidad que cumpla con las siguientes especificaciones:</p><div class="grid grid-cols-12 lg:gap-2 mt-2"${_scopeId2}><span class="col-span-12 lg:col-span-6 flex items-center w-full px-4"${_scopeId2}><ul class="list-disc"${_scopeId2}><li${_scopeId2}><span class="text-sm text-blue-brand-gradient1 font-semibold text-center"${_scopeId2}> Debe subir el documento con el que abri\xF3 su cuenta bancaria. </span></li><li${_scopeId2}><span class="text-sm text-blue-brand-gradient1 font-semibold text-center"${_scopeId2}> Todos los bordes del documento deben ser visibles. </span></li><li${_scopeId2}><span class="text-sm text-blue-brand-gradient1 font-semibold text-center"${_scopeId2}> El documento debe ser perfectamente legible. </span></li><li${_scopeId2}><span class="text-sm text-blue-brand-gradient1 font-semibold text-center"${_scopeId2}> Se permiten archivos con extensi\xF3n JPG, JPEG o PNG. </span></li></ul></span><span class="col-span-12 lg:col-span-6 flex items-center w-full px-4"${_scopeId2}><ul class="list-disc"${_scopeId2}><li${_scopeId2}><span class="text-sm text-blue-brand-gradient1 font-semibold text-center"${_scopeId2}> S\xF3lo se admite fotograf\xEDa de la c\xE9dula, pasaporte o c\xE9dula de extranjer\xEDa. </span></li><li${_scopeId2}><span class="text-sm text-blue-brand-gradient1 font-semibold text-center"${_scopeId2}> No se admite escaner ni fotocopia, aunque sea escaneado con una app de celular. </span></li><li${_scopeId2}><span class="text-sm text-blue-brand-gradient1 font-semibold text-center"${_scopeId2}> La imagen no debe pesar m\xE1s de 5 Mb. </span></li></ul></span></div><div${_scopeId2}><form class="grid grid-cols-12 gap-4 lg:gap-2 my-4"${_scopeId2}><div class="col-span-12 lg:col-span-6"${_scopeId2}><input type="file" class="hidden"${_scopeId2}><div class="border-2 border-dark-brand border-opacity-30 w-4/5 max-w-sm mx-auto h-52 md:h-44 xl:h-56 rounded-xl shadow-xl hover:shadow-blue-brand hover:shadow-sm hover:border-blue-brand flex items-center justify-center text-md md:text-lg hover:text-lg md:hover:text-xl text-black/40 font-medium p-2"${_scopeId2}><span style="${ssrRenderStyle([
                  _ctx.frontPreview ? null : { display: "none" },
                  "background-image: url('" + _ctx.frontPreview + "');"
                ])}" class="block rounded-lg w-full h-full bg-cover bg-no-repeat bg-center mx-auto"${_scopeId2}></span>`);
                if (!_ctx.frontPreview) {
                  _push3(`<span class="text-justify"${_scopeId2}>Sube aqu\xED la parte frontal</span>`);
                } else {
                  _push3(`<!---->`);
                }
                _push3(`</div>`);
                if (_ctx.frontPreview) {
                  _push3(`<span class="block rounded-lg w-full sm:w-auto mx-auto text-gray-500 text-sm text-center my-2"${_scopeId2}>${ssrInterpolate(_ctx.$refs.front.files[0].name)}</span>`);
                } else {
                  _push3(`<!---->`);
                }
                _push3(ssrRenderComponent(_component_jet_input_error, {
                  message: _ctx.form.errors.front,
                  class: "mt-2"
                }, null, _parent3, _scopeId2));
                _push3(`</div><div class="col-span-12 lg:col-span-6"${_scopeId2}><input type="file" class="hidden"${_scopeId2}><div class="border-2 border-dark-brand border-opacity-30 w-4/5 max-w-sm mx-auto h-52 md:h-44 xl:h-56 rounded-xl shadow-xl hover:shadow-blue-brand hover:shadow-sm hover:border-blue-brand flex items-center justify-center text-md md:text-lg hover:text-lg md:hover:text-xl text-black/40 font-medium p-2"${_scopeId2}><span style="${ssrRenderStyle([
                  _ctx.backPreview ? null : { display: "none" },
                  "background-image: url('" + _ctx.backPreview + "');"
                ])}" class="block rounded-lg w-full h-full bg-cover bg-no-repeat bg-center mx-auto"${_scopeId2}></span>`);
                if (!_ctx.backPreview) {
                  _push3(`<span class="text-justify"${_scopeId2}>Sube aqu\xED la parte trasera</span>`);
                } else {
                  _push3(`<!---->`);
                }
                _push3(`</div>`);
                if (_ctx.backPreview) {
                  _push3(`<span class="block rounded-lg w-full sm:w-auto mx-auto text-gray-500 text-sm text-center my-2"${_scopeId2}>${ssrInterpolate(_ctx.$refs.back.files[0].name)}</span>`);
                } else {
                  _push3(`<!---->`);
                }
                _push3(ssrRenderComponent(_component_jet_input_error, {
                  message: _ctx.form.errors.back,
                  class: "mt-2"
                }, null, _parent3, _scopeId2));
                _push3(`</div><div class="col-span-12 pt-5"${_scopeId2}><div class="max-w-max mx-auto"${_scopeId2}>`);
                _push3(ssrRenderComponent(_component_jet_button, {
                  class: { "opacity-25": _ctx.form.processing },
                  disabled: _ctx.form.processing
                }, {
                  default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(` Enviar `);
                    } else {
                      return [
                        createTextVNode(" Enviar ")
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
                _push3(`</div></div></form></div>`);
              } else {
                return [
                  createVNode("p", { class: "text-lg md:text-xl text-black/40 font-medium text-justify" }, "Es necesario subir una foto de su documento para la verificaci\xF3n de identidad que cumpla con las siguientes especificaciones:"),
                  createVNode("div", { class: "grid grid-cols-12 lg:gap-2 mt-2" }, [
                    createVNode("span", { class: "col-span-12 lg:col-span-6 flex items-center w-full px-4" }, [
                      createVNode("ul", { class: "list-disc" }, [
                        createVNode("li", null, [
                          createVNode("span", { class: "text-sm text-blue-brand-gradient1 font-semibold text-center" }, " Debe subir el documento con el que abri\xF3 su cuenta bancaria. ")
                        ]),
                        createVNode("li", null, [
                          createVNode("span", { class: "text-sm text-blue-brand-gradient1 font-semibold text-center" }, " Todos los bordes del documento deben ser visibles. ")
                        ]),
                        createVNode("li", null, [
                          createVNode("span", { class: "text-sm text-blue-brand-gradient1 font-semibold text-center" }, " El documento debe ser perfectamente legible. ")
                        ]),
                        createVNode("li", null, [
                          createVNode("span", { class: "text-sm text-blue-brand-gradient1 font-semibold text-center" }, " Se permiten archivos con extensi\xF3n JPG, JPEG o PNG. ")
                        ])
                      ])
                    ]),
                    createVNode("span", { class: "col-span-12 lg:col-span-6 flex items-center w-full px-4" }, [
                      createVNode("ul", { class: "list-disc" }, [
                        createVNode("li", null, [
                          createVNode("span", { class: "text-sm text-blue-brand-gradient1 font-semibold text-center" }, " S\xF3lo se admite fotograf\xEDa de la c\xE9dula, pasaporte o c\xE9dula de extranjer\xEDa. ")
                        ]),
                        createVNode("li", null, [
                          createVNode("span", { class: "text-sm text-blue-brand-gradient1 font-semibold text-center" }, " No se admite escaner ni fotocopia, aunque sea escaneado con una app de celular. ")
                        ]),
                        createVNode("li", null, [
                          createVNode("span", { class: "text-sm text-blue-brand-gradient1 font-semibold text-center" }, " La imagen no debe pesar m\xE1s de 5 Mb. ")
                        ])
                      ])
                    ])
                  ]),
                  createVNode("div", null, [
                    createVNode("form", {
                      onSubmit: withModifiers(_ctx.submit, ["prevent"]),
                      class: "grid grid-cols-12 gap-4 lg:gap-2 my-4"
                    }, [
                      createVNode("div", { class: "col-span-12 lg:col-span-6" }, [
                        createVNode("input", {
                          type: "file",
                          class: "hidden",
                          ref: "front",
                          onChange: _ctx.updateFrontPreview
                        }, null, 40, ["onChange"]),
                        createVNode("div", {
                          class: "border-2 border-dark-brand border-opacity-30 w-4/5 max-w-sm mx-auto h-52 md:h-44 xl:h-56 rounded-xl shadow-xl hover:shadow-blue-brand hover:shadow-sm hover:border-blue-brand flex items-center justify-center text-md md:text-lg hover:text-lg md:hover:text-xl text-black/40 font-medium p-2",
                          onClick: withModifiers(_ctx.selectFront, ["prevent"])
                        }, [
                          withDirectives(createVNode("span", {
                            class: "block rounded-lg w-full h-full bg-cover bg-no-repeat bg-center mx-auto",
                            style: "background-image: url('" + _ctx.frontPreview + "');"
                          }, null, 4), [
                            [vShow, _ctx.frontPreview]
                          ]),
                          !_ctx.frontPreview ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: "text-justify"
                          }, "Sube aqu\xED la parte frontal")) : createCommentVNode("", true)
                        ], 8, ["onClick"]),
                        _ctx.frontPreview ? (openBlock(), createBlock("span", {
                          key: 0,
                          class: "block rounded-lg w-full sm:w-auto mx-auto text-gray-500 text-sm text-center my-2"
                        }, toDisplayString(_ctx.$refs.front.files[0].name), 1)) : createCommentVNode("", true),
                        createVNode(_component_jet_input_error, {
                          message: _ctx.form.errors.front,
                          class: "mt-2"
                        }, null, 8, ["message"])
                      ]),
                      createVNode("div", { class: "col-span-12 lg:col-span-6" }, [
                        createVNode("input", {
                          type: "file",
                          class: "hidden",
                          ref: "back",
                          onChange: _ctx.updateBackPreview
                        }, null, 40, ["onChange"]),
                        createVNode("div", {
                          class: "border-2 border-dark-brand border-opacity-30 w-4/5 max-w-sm mx-auto h-52 md:h-44 xl:h-56 rounded-xl shadow-xl hover:shadow-blue-brand hover:shadow-sm hover:border-blue-brand flex items-center justify-center text-md md:text-lg hover:text-lg md:hover:text-xl text-black/40 font-medium p-2",
                          onClick: withModifiers(_ctx.selectBack, ["prevent"])
                        }, [
                          withDirectives(createVNode("span", {
                            class: "block rounded-lg w-full h-full bg-cover bg-no-repeat bg-center mx-auto",
                            style: "background-image: url('" + _ctx.backPreview + "');"
                          }, null, 4), [
                            [vShow, _ctx.backPreview]
                          ]),
                          !_ctx.backPreview ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: "text-justify"
                          }, "Sube aqu\xED la parte trasera")) : createCommentVNode("", true)
                        ], 8, ["onClick"]),
                        _ctx.backPreview ? (openBlock(), createBlock("span", {
                          key: 0,
                          class: "block rounded-lg w-full sm:w-auto mx-auto text-gray-500 text-sm text-center my-2"
                        }, toDisplayString(_ctx.$refs.back.files[0].name), 1)) : createCommentVNode("", true),
                        createVNode(_component_jet_input_error, {
                          message: _ctx.form.errors.back,
                          class: "mt-2"
                        }, null, 8, ["message"])
                      ]),
                      createVNode("div", { class: "col-span-12 pt-5" }, [
                        createVNode("div", { class: "max-w-max mx-auto" }, [
                          createVNode(_component_jet_button, {
                            class: { "opacity-25": _ctx.form.processing },
                            disabled: _ctx.form.processing
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Enviar ")
                            ]),
                            _: 1
                          }, 8, ["class", "disabled"])
                        ])
                      ])
                    ], 40, ["onSubmit"])
                  ])
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
        } else if (_ctx.user.requirement_user.verified === 1) {
          _push2(ssrRenderComponent(_component_DisclosurePanel, { class: "px-4 pt-4 pb-2" }, {
            default: withCtx((_, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<p class="text-lg md:text-xl text-black/40 font-medium text-justify"${_scopeId2}>La verificaci\xF3n se encuentra en <span class="text-orange-400"${_scopeId2}>proceso</span>, recibir\xE1s respuesta a tu correo sobre el resultado en no m\xE1s de 48 horas.</p>`);
              } else {
                return [
                  createVNode("p", { class: "text-lg md:text-xl text-black/40 font-medium text-justify" }, [
                    createTextVNode("La verificaci\xF3n se encuentra en "),
                    createVNode("span", { class: "text-orange-400" }, "proceso"),
                    createTextVNode(", recibir\xE1s respuesta a tu correo sobre el resultado en no m\xE1s de 48 horas.")
                  ])
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
        } else if (_ctx.user.requirement_user.document === 1) {
          _push2(ssrRenderComponent(_component_DisclosurePanel, { class: "px-4 pt-4 pb-2" }, {
            default: withCtx((_, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<p class="text-lg md:text-xl text-black/40 font-medium text-justify"${_scopeId2}>Gracias por subir tu documento, has iniciado el proceso de verificaci\xF3n de cuenta, para completar este proceso debes diligenciar los formularios de la parte inferior para que tu cuenta sea verificada.</p>`);
              } else {
                return [
                  createVNode("p", { class: "text-lg md:text-xl text-black/40 font-medium text-justify" }, "Gracias por subir tu documento, has iniciado el proceso de verificaci\xF3n de cuenta, para completar este proceso debes diligenciar los formularios de la parte inferior para que tu cuenta sea verificada.")
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
        } else {
          _push2(ssrRenderComponent(_component_DisclosurePanel, { class: "px-4 pt-4 pb-2" }, {
            default: withCtx((_, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<p class="text-lg md:text-xl text-black/40 font-medium text-justify"${_scopeId2}>Tu identidad se encuentra <span class="text-green-500"${_scopeId2}>verificada</span>.</p>`);
              } else {
                return [
                  createVNode("p", { class: "text-lg md:text-xl text-black/40 font-medium text-justify" }, [
                    createTextVNode("Tu identidad se encuentra "),
                    createVNode("span", { class: "text-green-500" }, "verificada"),
                    createTextVNode(".")
                  ])
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
        }
      } else {
        return [
          createVNode(_component_DisclosureButton, { class: "flex justify-between items-center w-full max-w-xl mx-auto px-4 py-2 text-left text-blue-brand-gradient1/80 bg-blue-brand bg-opacity-25 rounded-lg hover:bg-blue-brand hover:bg-opacity-50 focus:outline-none focus-visible:ring focus-visible:ring-blue-brand-gradient1 focus-visible:ring-opacity-75" }, {
            default: withCtx(() => [
              createVNode("span", null, "Verificaci\xF3n de identidad"),
              createVNode(_component_ChevronUpIcon, {
                class: [open ? "transform rotate-180" : "", "w-5 h-5 text-blue-brand-gradient1/80"]
              }, null, 8, ["class"])
            ]),
            _: 2
          }, 1024),
          _ctx.user.requirement_user.document === 0 ? (openBlock(), createBlock(_component_DisclosurePanel, {
            key: 0,
            class: "px-4 pt-4 pb-2"
          }, {
            default: withCtx(() => [
              createVNode("p", { class: "text-lg md:text-xl text-black/40 font-medium text-justify" }, "Es necesario subir una foto de su documento para la verificaci\xF3n de identidad que cumpla con las siguientes especificaciones:"),
              createVNode("div", { class: "grid grid-cols-12 lg:gap-2 mt-2" }, [
                createVNode("span", { class: "col-span-12 lg:col-span-6 flex items-center w-full px-4" }, [
                  createVNode("ul", { class: "list-disc" }, [
                    createVNode("li", null, [
                      createVNode("span", { class: "text-sm text-blue-brand-gradient1 font-semibold text-center" }, " Debe subir el documento con el que abri\xF3 su cuenta bancaria. ")
                    ]),
                    createVNode("li", null, [
                      createVNode("span", { class: "text-sm text-blue-brand-gradient1 font-semibold text-center" }, " Todos los bordes del documento deben ser visibles. ")
                    ]),
                    createVNode("li", null, [
                      createVNode("span", { class: "text-sm text-blue-brand-gradient1 font-semibold text-center" }, " El documento debe ser perfectamente legible. ")
                    ]),
                    createVNode("li", null, [
                      createVNode("span", { class: "text-sm text-blue-brand-gradient1 font-semibold text-center" }, " Se permiten archivos con extensi\xF3n JPG, JPEG o PNG. ")
                    ])
                  ])
                ]),
                createVNode("span", { class: "col-span-12 lg:col-span-6 flex items-center w-full px-4" }, [
                  createVNode("ul", { class: "list-disc" }, [
                    createVNode("li", null, [
                      createVNode("span", { class: "text-sm text-blue-brand-gradient1 font-semibold text-center" }, " S\xF3lo se admite fotograf\xEDa de la c\xE9dula, pasaporte o c\xE9dula de extranjer\xEDa. ")
                    ]),
                    createVNode("li", null, [
                      createVNode("span", { class: "text-sm text-blue-brand-gradient1 font-semibold text-center" }, " No se admite escaner ni fotocopia, aunque sea escaneado con una app de celular. ")
                    ]),
                    createVNode("li", null, [
                      createVNode("span", { class: "text-sm text-blue-brand-gradient1 font-semibold text-center" }, " La imagen no debe pesar m\xE1s de 5 Mb. ")
                    ])
                  ])
                ])
              ]),
              createVNode("div", null, [
                createVNode("form", {
                  onSubmit: withModifiers(_ctx.submit, ["prevent"]),
                  class: "grid grid-cols-12 gap-4 lg:gap-2 my-4"
                }, [
                  createVNode("div", { class: "col-span-12 lg:col-span-6" }, [
                    createVNode("input", {
                      type: "file",
                      class: "hidden",
                      ref: "front",
                      onChange: _ctx.updateFrontPreview
                    }, null, 40, ["onChange"]),
                    createVNode("div", {
                      class: "border-2 border-dark-brand border-opacity-30 w-4/5 max-w-sm mx-auto h-52 md:h-44 xl:h-56 rounded-xl shadow-xl hover:shadow-blue-brand hover:shadow-sm hover:border-blue-brand flex items-center justify-center text-md md:text-lg hover:text-lg md:hover:text-xl text-black/40 font-medium p-2",
                      onClick: withModifiers(_ctx.selectFront, ["prevent"])
                    }, [
                      withDirectives(createVNode("span", {
                        class: "block rounded-lg w-full h-full bg-cover bg-no-repeat bg-center mx-auto",
                        style: "background-image: url('" + _ctx.frontPreview + "');"
                      }, null, 4), [
                        [vShow, _ctx.frontPreview]
                      ]),
                      !_ctx.frontPreview ? (openBlock(), createBlock("span", {
                        key: 0,
                        class: "text-justify"
                      }, "Sube aqu\xED la parte frontal")) : createCommentVNode("", true)
                    ], 8, ["onClick"]),
                    _ctx.frontPreview ? (openBlock(), createBlock("span", {
                      key: 0,
                      class: "block rounded-lg w-full sm:w-auto mx-auto text-gray-500 text-sm text-center my-2"
                    }, toDisplayString(_ctx.$refs.front.files[0].name), 1)) : createCommentVNode("", true),
                    createVNode(_component_jet_input_error, {
                      message: _ctx.form.errors.front,
                      class: "mt-2"
                    }, null, 8, ["message"])
                  ]),
                  createVNode("div", { class: "col-span-12 lg:col-span-6" }, [
                    createVNode("input", {
                      type: "file",
                      class: "hidden",
                      ref: "back",
                      onChange: _ctx.updateBackPreview
                    }, null, 40, ["onChange"]),
                    createVNode("div", {
                      class: "border-2 border-dark-brand border-opacity-30 w-4/5 max-w-sm mx-auto h-52 md:h-44 xl:h-56 rounded-xl shadow-xl hover:shadow-blue-brand hover:shadow-sm hover:border-blue-brand flex items-center justify-center text-md md:text-lg hover:text-lg md:hover:text-xl text-black/40 font-medium p-2",
                      onClick: withModifiers(_ctx.selectBack, ["prevent"])
                    }, [
                      withDirectives(createVNode("span", {
                        class: "block rounded-lg w-full h-full bg-cover bg-no-repeat bg-center mx-auto",
                        style: "background-image: url('" + _ctx.backPreview + "');"
                      }, null, 4), [
                        [vShow, _ctx.backPreview]
                      ]),
                      !_ctx.backPreview ? (openBlock(), createBlock("span", {
                        key: 0,
                        class: "text-justify"
                      }, "Sube aqu\xED la parte trasera")) : createCommentVNode("", true)
                    ], 8, ["onClick"]),
                    _ctx.backPreview ? (openBlock(), createBlock("span", {
                      key: 0,
                      class: "block rounded-lg w-full sm:w-auto mx-auto text-gray-500 text-sm text-center my-2"
                    }, toDisplayString(_ctx.$refs.back.files[0].name), 1)) : createCommentVNode("", true),
                    createVNode(_component_jet_input_error, {
                      message: _ctx.form.errors.back,
                      class: "mt-2"
                    }, null, 8, ["message"])
                  ]),
                  createVNode("div", { class: "col-span-12 pt-5" }, [
                    createVNode("div", { class: "max-w-max mx-auto" }, [
                      createVNode(_component_jet_button, {
                        class: { "opacity-25": _ctx.form.processing },
                        disabled: _ctx.form.processing
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Enviar ")
                        ]),
                        _: 1
                      }, 8, ["class", "disabled"])
                    ])
                  ])
                ], 40, ["onSubmit"])
              ])
            ]),
            _: 1
          })) : _ctx.user.requirement_user.verified === 1 ? (openBlock(), createBlock(_component_DisclosurePanel, {
            key: 1,
            class: "px-4 pt-4 pb-2"
          }, {
            default: withCtx(() => [
              createVNode("p", { class: "text-lg md:text-xl text-black/40 font-medium text-justify" }, [
                createTextVNode("La verificaci\xF3n se encuentra en "),
                createVNode("span", { class: "text-orange-400" }, "proceso"),
                createTextVNode(", recibir\xE1s respuesta a tu correo sobre el resultado en no m\xE1s de 48 horas.")
              ])
            ]),
            _: 1
          })) : _ctx.user.requirement_user.document === 1 ? (openBlock(), createBlock(_component_DisclosurePanel, {
            key: 2,
            class: "px-4 pt-4 pb-2"
          }, {
            default: withCtx(() => [
              createVNode("p", { class: "text-lg md:text-xl text-black/40 font-medium text-justify" }, "Gracias por subir tu documento, has iniciado el proceso de verificaci\xF3n de cuenta, para completar este proceso debes diligenciar los formularios de la parte inferior para que tu cuenta sea verificada.")
            ]),
            _: 1
          })) : (openBlock(), createBlock(_component_DisclosurePanel, {
            key: 3,
            class: "px-4 pt-4 pb-2"
          }, {
            default: withCtx(() => [
              createVNode("p", { class: "text-lg md:text-xl text-black/40 font-medium text-justify" }, [
                createTextVNode("Tu identidad se encuentra "),
                createVNode("span", { class: "text-green-500" }, "verificada"),
                createTextVNode(".")
              ])
            ]),
            _: 1
          }))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Disclosure, {
    defaultOpen: _ctx.openForms,
    as: "div",
    class: "mt-2"
  }, {
    default: withCtx(({ open }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_DisclosureButton, { class: "flex justify-between items-center w-full max-w-xl mx-auto px-4 py-2 text-left text-blue-brand-gradient1/80 bg-blue-brand bg-opacity-25 rounded-lg hover:bg-blue-brand hover:bg-opacity-50 focus:outline-none focus-visible:ring focus-visible:ring-blue-brand-gradient1 focus-visible:ring-opacity-75" }, {
          default: withCtx((_, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<span${_scopeId2}>Documentos requeridos</span>`);
              _push3(ssrRenderComponent(_component_ChevronUpIcon, {
                class: [open ? "transform rotate-180" : "", "w-5 h-5 text-blue-brand-gradient1/80"]
              }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode("span", null, "Documentos requeridos"),
                createVNode(_component_ChevronUpIcon, {
                  class: [open ? "transform rotate-180" : "", "w-5 h-5 text-blue-brand-gradient1/80"]
                }, null, 8, ["class"])
              ];
            }
          }),
          _: 2
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_DisclosurePanel, { class: "px-4 pt-4 pb-2" }, {
          default: withCtx((_, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<p class="text-lg md:text-xl text-black/40 font-medium text-justify"${_scopeId2}> Estimado usuario en cumplimiento de cara al Sistema de Administraci\xF3n y Gesti\xF3n del Riesgo Integral de Lavado de Activos y Financiaci\xF3n del Terrorismo (<b${_scopeId2}>SAGRILAFT</b>) implementado en ExchangeLatam, es necesario diligenciar y firmar los siguientes formularios con el fin de garantizar la seguridad de su dinero y de todos los que conf\xEDan en ExchangeLatam para los dep\xF3sitos y retiros de FBS. </p>`);
              if (_ctx.user.requirement_user.document === 0) {
                _push3(`<p class="text-lg md:text-xl text-orange-400 font-medium text-justify"${_scopeId2}> Por favor sube primero el documento de identidad antes de diligenciar los formularios. </p>`);
              } else {
                _push3(`<!---->`);
              }
              if (_ctx.user.requirement_user.document === 0) {
                _push3(`<div class="grid grid-cols-12 lg:gap-2 mt-4"${_scopeId2}><div class="col-span-6 flex items-center w-full px-4"${_scopeId2}><div class="max-w-max mx-auto"${_scopeId2}><button type="button" disabled class="text-center inline-flex items-center px-4 py-2 bg-dark-brand border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition"${_scopeId2}> Declaraci\xF3n de fondos </button></div></div><div class="col-span-6 flex items-center w-full px-4"${_scopeId2}><div class="max-w-max mx-auto"${_scopeId2}><button type="button" disabled class="text-center inline-flex items-center px-4 py-2 bg-dark-brand border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition"${_scopeId2}> Conocimiento del cliente </button></div></div></div>`);
              } else {
                _push3(`<div class="grid grid-cols-12 lg:gap-2 mt-4"${_scopeId2}><div class="col-span-6 flex items-center w-full px-4"${_scopeId2}>`);
                if (_ctx.user.requirement_user.formFunds === 0) {
                  _push3(`<div class="max-w-max mx-auto"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Link, {
                    href: _ctx.route("formFund.create"),
                    class: "text-center inline-flex items-center px-4 py-2 bg-dark-brand border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition"
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Declaraci\xF3n de fondos `);
                      } else {
                        return [
                          createTextVNode(" Declaraci\xF3n de fondos ")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  _push3(`<div class="max-w-max mx-auto"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Link, {
                    href: _ctx.route("formFund.show", _ctx.user.form_fund.id),
                    class: "text-center inline-flex items-center px-4 py-2 bg-dark-brand border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition"
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Ver Declaraci\xF3n de fondos `);
                      } else {
                        return [
                          createTextVNode(" Ver Declaraci\xF3n de fondos ")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                }
                _push3(`</div><div class="col-span-6 flex items-center w-full px-4"${_scopeId2}>`);
                if (_ctx.user.requirement_user.formKnowledge === 0) {
                  _push3(`<div class="max-w-max mx-auto"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Link, {
                    href: _ctx.route("formKnowledgeClient.create"),
                    class: "text-center inline-flex items-center px-4 py-2 bg-dark-brand border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition"
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Conocimiento del cliente `);
                      } else {
                        return [
                          createTextVNode(" Conocimiento del cliente ")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  _push3(`<div class="max-w-max mx-auto"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Link, {
                    href: _ctx.route("formKnowledgeClient.show", _ctx.user.form_knowledge_client.id),
                    class: "text-center inline-flex items-center px-4 py-2 bg-dark-brand border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition"
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Ver Conocimiento del Cliente `);
                      } else {
                        return [
                          createTextVNode(" Ver Conocimiento del Cliente ")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                }
                _push3(`</div></div>`);
              }
            } else {
              return [
                createVNode("p", { class: "text-lg md:text-xl text-black/40 font-medium text-justify" }, [
                  createTextVNode(" Estimado usuario en cumplimiento de cara al Sistema de Administraci\xF3n y Gesti\xF3n del Riesgo Integral de Lavado de Activos y Financiaci\xF3n del Terrorismo ("),
                  createVNode("b", null, "SAGRILAFT"),
                  createTextVNode(") implementado en ExchangeLatam, es necesario diligenciar y firmar los siguientes formularios con el fin de garantizar la seguridad de su dinero y de todos los que conf\xEDan en ExchangeLatam para los dep\xF3sitos y retiros de FBS. ")
                ]),
                _ctx.user.requirement_user.document === 0 ? (openBlock(), createBlock("p", {
                  key: 0,
                  class: "text-lg md:text-xl text-orange-400 font-medium text-justify"
                }, " Por favor sube primero el documento de identidad antes de diligenciar los formularios. ")) : createCommentVNode("", true),
                _ctx.user.requirement_user.document === 0 ? (openBlock(), createBlock("div", {
                  key: 1,
                  class: "grid grid-cols-12 lg:gap-2 mt-4"
                }, [
                  createVNode("div", { class: "col-span-6 flex items-center w-full px-4" }, [
                    createVNode("div", { class: "max-w-max mx-auto" }, [
                      createVNode("button", {
                        type: "button",
                        disabled: "",
                        class: "text-center inline-flex items-center px-4 py-2 bg-dark-brand border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition"
                      }, " Declaraci\xF3n de fondos ")
                    ])
                  ]),
                  createVNode("div", { class: "col-span-6 flex items-center w-full px-4" }, [
                    createVNode("div", { class: "max-w-max mx-auto" }, [
                      createVNode("button", {
                        type: "button",
                        disabled: "",
                        class: "text-center inline-flex items-center px-4 py-2 bg-dark-brand border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition"
                      }, " Conocimiento del cliente ")
                    ])
                  ])
                ])) : (openBlock(), createBlock("div", {
                  key: 2,
                  class: "grid grid-cols-12 lg:gap-2 mt-4"
                }, [
                  createVNode("div", { class: "col-span-6 flex items-center w-full px-4" }, [
                    _ctx.user.requirement_user.formFunds === 0 ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "max-w-max mx-auto"
                    }, [
                      createVNode(_component_Link, {
                        href: _ctx.route("formFund.create"),
                        class: "text-center inline-flex items-center px-4 py-2 bg-dark-brand border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Declaraci\xF3n de fondos ")
                        ]),
                        _: 1
                      }, 8, ["href"])
                    ])) : (openBlock(), createBlock("div", {
                      key: 1,
                      class: "max-w-max mx-auto"
                    }, [
                      createVNode(_component_Link, {
                        href: _ctx.route("formFund.show", _ctx.user.form_fund.id),
                        class: "text-center inline-flex items-center px-4 py-2 bg-dark-brand border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Ver Declaraci\xF3n de fondos ")
                        ]),
                        _: 1
                      }, 8, ["href"])
                    ]))
                  ]),
                  createVNode("div", { class: "col-span-6 flex items-center w-full px-4" }, [
                    _ctx.user.requirement_user.formKnowledge === 0 ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "max-w-max mx-auto"
                    }, [
                      createVNode(_component_Link, {
                        href: _ctx.route("formKnowledgeClient.create"),
                        class: "text-center inline-flex items-center px-4 py-2 bg-dark-brand border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Conocimiento del cliente ")
                        ]),
                        _: 1
                      }, 8, ["href"])
                    ])) : (openBlock(), createBlock("div", {
                      key: 1,
                      class: "max-w-max mx-auto"
                    }, [
                      createVNode(_component_Link, {
                        href: _ctx.route("formKnowledgeClient.show", _ctx.user.form_knowledge_client.id),
                        class: "text-center inline-flex items-center px-4 py-2 bg-dark-brand border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Ver Conocimiento del Cliente ")
                        ]),
                        _: 1
                      }, 8, ["href"])
                    ]))
                  ])
                ]))
              ];
            }
          }),
          _: 2
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_DisclosureButton, { class: "flex justify-between items-center w-full max-w-xl mx-auto px-4 py-2 text-left text-blue-brand-gradient1/80 bg-blue-brand bg-opacity-25 rounded-lg hover:bg-blue-brand hover:bg-opacity-50 focus:outline-none focus-visible:ring focus-visible:ring-blue-brand-gradient1 focus-visible:ring-opacity-75" }, {
            default: withCtx(() => [
              createVNode("span", null, "Documentos requeridos"),
              createVNode(_component_ChevronUpIcon, {
                class: [open ? "transform rotate-180" : "", "w-5 h-5 text-blue-brand-gradient1/80"]
              }, null, 8, ["class"])
            ]),
            _: 2
          }, 1024),
          createVNode(_component_DisclosurePanel, { class: "px-4 pt-4 pb-2" }, {
            default: withCtx(() => [
              createVNode("p", { class: "text-lg md:text-xl text-black/40 font-medium text-justify" }, [
                createTextVNode(" Estimado usuario en cumplimiento de cara al Sistema de Administraci\xF3n y Gesti\xF3n del Riesgo Integral de Lavado de Activos y Financiaci\xF3n del Terrorismo ("),
                createVNode("b", null, "SAGRILAFT"),
                createTextVNode(") implementado en ExchangeLatam, es necesario diligenciar y firmar los siguientes formularios con el fin de garantizar la seguridad de su dinero y de todos los que conf\xEDan en ExchangeLatam para los dep\xF3sitos y retiros de FBS. ")
              ]),
              _ctx.user.requirement_user.document === 0 ? (openBlock(), createBlock("p", {
                key: 0,
                class: "text-lg md:text-xl text-orange-400 font-medium text-justify"
              }, " Por favor sube primero el documento de identidad antes de diligenciar los formularios. ")) : createCommentVNode("", true),
              _ctx.user.requirement_user.document === 0 ? (openBlock(), createBlock("div", {
                key: 1,
                class: "grid grid-cols-12 lg:gap-2 mt-4"
              }, [
                createVNode("div", { class: "col-span-6 flex items-center w-full px-4" }, [
                  createVNode("div", { class: "max-w-max mx-auto" }, [
                    createVNode("button", {
                      type: "button",
                      disabled: "",
                      class: "text-center inline-flex items-center px-4 py-2 bg-dark-brand border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition"
                    }, " Declaraci\xF3n de fondos ")
                  ])
                ]),
                createVNode("div", { class: "col-span-6 flex items-center w-full px-4" }, [
                  createVNode("div", { class: "max-w-max mx-auto" }, [
                    createVNode("button", {
                      type: "button",
                      disabled: "",
                      class: "text-center inline-flex items-center px-4 py-2 bg-dark-brand border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition"
                    }, " Conocimiento del cliente ")
                  ])
                ])
              ])) : (openBlock(), createBlock("div", {
                key: 2,
                class: "grid grid-cols-12 lg:gap-2 mt-4"
              }, [
                createVNode("div", { class: "col-span-6 flex items-center w-full px-4" }, [
                  _ctx.user.requirement_user.formFunds === 0 ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "max-w-max mx-auto"
                  }, [
                    createVNode(_component_Link, {
                      href: _ctx.route("formFund.create"),
                      class: "text-center inline-flex items-center px-4 py-2 bg-dark-brand border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Declaraci\xF3n de fondos ")
                      ]),
                      _: 1
                    }, 8, ["href"])
                  ])) : (openBlock(), createBlock("div", {
                    key: 1,
                    class: "max-w-max mx-auto"
                  }, [
                    createVNode(_component_Link, {
                      href: _ctx.route("formFund.show", _ctx.user.form_fund.id),
                      class: "text-center inline-flex items-center px-4 py-2 bg-dark-brand border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Ver Declaraci\xF3n de fondos ")
                      ]),
                      _: 1
                    }, 8, ["href"])
                  ]))
                ]),
                createVNode("div", { class: "col-span-6 flex items-center w-full px-4" }, [
                  _ctx.user.requirement_user.formKnowledge === 0 ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "max-w-max mx-auto"
                  }, [
                    createVNode(_component_Link, {
                      href: _ctx.route("formKnowledgeClient.create"),
                      class: "text-center inline-flex items-center px-4 py-2 bg-dark-brand border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Conocimiento del cliente ")
                      ]),
                      _: 1
                    }, 8, ["href"])
                  ])) : (openBlock(), createBlock("div", {
                    key: 1,
                    class: "max-w-max mx-auto"
                  }, [
                    createVNode(_component_Link, {
                      href: _ctx.route("formKnowledgeClient.show", _ctx.user.form_knowledge_client.id),
                      class: "text-center inline-flex items-center px-4 py-2 bg-dark-brand border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Ver Conocimiento del Cliente ")
                      ]),
                      _: 1
                    }, 8, ["href"])
                  ]))
                ])
              ]))
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Profile/Partials/FormsData.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const FormsData = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  FormsData as default
};
