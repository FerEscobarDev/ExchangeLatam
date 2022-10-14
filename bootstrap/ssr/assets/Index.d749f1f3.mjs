import { defineComponent, resolveComponent, mergeProps, withCtx, createTextVNode, createVNode, withModifiers, withDirectives, vModelText, toDisplayString, useSSRContext } from "vue";
import { A as AppLayoutAdmin } from "./AppLayoutAdmin.f439c04f.mjs";
import { Link } from "@inertiajs/inertia-vue3";
import { CheckIcon } from "@heroicons/vue/solid";
import { _ as _sfc_main$1 } from "./Input.c38a320e.mjs";
import { _ as _sfc_main$2 } from "./InputError.bc94ef1e.mjs";
import { _ as _sfc_main$3 } from "./Label.ceceda67.mjs";
import { J as JetSelect } from "./Select.c3ee249a.mjs";
import { J as JetApplicationMark } from "./ResponsiveNavLink.105dcaab.mjs";
import { _ as _sfc_main$4 } from "./Button.feee2cab.mjs";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.43be4956.mjs";
import "./NavLink.67838388.mjs";
import "@fortawesome/vue-fontawesome";
import "@fortawesome/fontawesome-svg-core";
import "@fortawesome/free-solid-svg-icons";
import "@fortawesome/free-brands-svg-icons";
import "@headlessui/vue";
import "./logoweb.e431fb6b.mjs";
const _sfc_main = defineComponent({
  components: {
    AppLayoutAdmin,
    CheckIcon,
    Link,
    Input: _sfc_main$1,
    InputError: _sfc_main$2,
    Label: _sfc_main$3,
    Select: JetSelect,
    ApplicationMark: JetApplicationMark,
    Button: _sfc_main$4
  },
  setup() {
    const addressees = [
      {
        id: 0,
        name: "Todos"
      },
      {
        id: 1,
        name: "VIP"
      },
      {
        id: 3,
        name: "Nuevos"
      }
    ];
    return {
      addressees
    };
  },
  data() {
    return {
      form: this.$inertia.form({
        subject: null,
        addressee: this.addressees[0],
        content: null
      })
    };
  },
  methods: {
    submit() {
      this.form.post(this.route("admin.messagingMassive"));
    }
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_app_layout_admin = resolveComponent("app-layout-admin");
  const _component_Link = resolveComponent("Link");
  const _component_Select = resolveComponent("Select");
  const _component_Label = resolveComponent("Label");
  const _component_Input = resolveComponent("Input");
  const _component_InputError = resolveComponent("InputError");
  const _component_Button = resolveComponent("Button");
  const _component_ApplicationMark = resolveComponent("ApplicationMark");
  _push(ssrRenderComponent(_component_app_layout_admin, mergeProps({ title: "Mensajer\xEDa Masiva" }, _attrs), {
    header: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h2 class="font-semibold text-xl text-gray-700 leading-tight"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Link, {
          href: _ctx.route("admin.dashboard"),
          class: "text-blue-brand-gradient1 font-semibold hover:text-blue-brand"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Dashboard/`);
            } else {
              return [
                createTextVNode("Dashboard/")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`Listado de Permisos </h2>`);
      } else {
        return [
          createVNode("h2", { class: "font-semibold text-xl text-gray-700 leading-tight" }, [
            createVNode(_component_Link, {
              href: _ctx.route("admin.dashboard"),
              class: "text-blue-brand-gradient1 font-semibold hover:text-blue-brand"
            }, {
              default: withCtx(() => [
                createTextVNode("Dashboard/")
              ]),
              _: 1
            }, 8, ["href"]),
            createTextVNode("Listado de Permisos ")
          ])
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="py-6 w-full"${_scopeId}><div class="flex mx-auto lg:mr-4"${_scopeId}><div class="container mx-auto sm:px-6 lg:px-8"${_scopeId}><div class="grid grid-cols-6 gap-3 overflow-hidden shadow-xl sm:rounded-lg p-5 bg-white"${_scopeId}><div class="col-span-6 md:col-span-3 w-full h-full flex flex-col justify-start items-center shadow rounded-md"${_scopeId}><h2 class="text-dark-brand font-medium text-xl"${_scopeId}>Mensajer\xEDa Masiva</h2><form class="flex flex-col w-full h-full p-2"${_scopeId}><div class="w-full mb-2"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Select, {
          selectable: _ctx.addressees,
          selected: _ctx.form.addressee,
          modelValue: _ctx.form.addressee,
          "onUpdate:modelValue": ($event) => _ctx.form.addressee = $event
        }, {
          title: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Destinatarios `);
            } else {
              return [
                createTextVNode(" Destinatarios ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div><div class="w-full mb-2"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Label, {
          for: "subject",
          value: "Asunto"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_Input, {
          id: "subject",
          type: "text",
          class: "mt-1 block w-full",
          modelValue: _ctx.form.subject,
          "onUpdate:modelValue": ($event) => _ctx.form.subject = $event
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_InputError, {
          message: _ctx.form.errors.subject,
          class: "mt-2"
        }, null, _parent2, _scopeId));
        _push2(`</div><div class="w-full mb-2"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Label, {
          for: "content",
          value: "Mensaje"
        }, null, _parent2, _scopeId));
        _push2(`<textarea class="w-full text-gray-600 border-dark-brand focus:border-blue-brand focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm" name="content" id="content" rows="22" placeholder="Escribe el mensaje"${_scopeId}>${ssrInterpolate(_ctx.form.content)}</textarea></div><div class="w-full"${_scopeId}><div class="max-w-max mx-auto"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Button, {
          class: [{ "opacity-25": _ctx.form.processing }, "mt-2"],
          disabled: _ctx.form.processing
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Enviar `);
            } else {
              return [
                createTextVNode(" Enviar ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div></div></form></div><div class="col-span-6 md:col-span-3 w-full flex flex-col justify-start items-center shadow rounded-md p-2"${_scopeId}><h2 class="text-dark-brand font-medium text-xl"${_scopeId}>Vista Previa del Mensaje</h2><div class="w-full min-h-max bg-dark-brand rounded-sm mt-2 flex flex-col justify-between"${_scopeId}><div class="w-full 2xl:w-[600px] mx-auto flex justify-center items-center p-4"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_ApplicationMark, { class: "block h-12 w-auto" }, null, _parent2, _scopeId));
        _push2(`</div><div class="w-full 2xl:w-[600px] p-8 rounded-md mx-auto bg-white flex flex-col justify-between items-start text-lg font-sans text-gray-700"${_scopeId}><h1 class="text-lg font-sans font-medium mb-4"${_scopeId}>Hola <span class="font-semibold text-dark-brand"${_scopeId}>${ssrInterpolate(_ctx.$page.props.user.name.split(" ", 1) + " " + _ctx.$page.props.user.lastname.split(" ", 1))}</span>,</h1><div class="mt-6"${_scopeId}>${_ctx.form.content}</div><p class="mt-3"${_scopeId}>Puedes acceder al \xE1rea de usuario desde el siguiente bot\xF3n.</p><div class="mt-3 w-full flex justify-center"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Button, {
          class: [{ "opacity-25": _ctx.form.processing }, "mt-2"],
          disabled: _ctx.form.processing
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Acceder `);
            } else {
              return [
                createTextVNode(" Acceder ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div><p class="mt-3"${_scopeId}>Gracias por elegirnos como tu medio de dep\xF3sitos y retiros.</p><br${_scopeId}><p class="mt-6 m-b3"${_scopeId}>Saludos y buen trading,</p><br${_scopeId}><p class="mt-3"${_scopeId}><span class="font-medium text-dark-brand"${_scopeId}> ExchangeLatam </span><br${_scopeId}><a class="text-sm font-medium"${_scopeId}> Whatsapp: 3223105578 </a></p><div class="my-6 flex flex-col justify-center text-sm"${_scopeId}><p${_scopeId}><span${_scopeId}>Registrate <a class="underline text-blue-600"${_scopeId}>aqu\xED</a> y conviertete en cliente VIP para realizar dep\xF3sitos y retiros sin comisi\xF3n.</span></p><p${_scopeId}><span${_scopeId}>V\xEDsita nuestra secci\xF3n <a class="underline text-blue-600"${_scopeId}>FAQ</a> y resuelve todas tus dudas antes de usar nuestros servicios.</span></p><p${_scopeId}><span${_scopeId}>Si tienes problemas haciendo click en el bot\xF3n &quot;Acceder&quot;, copia y pega el siguiente enlace en t\xFA navegador: <a class="underline text-blue-600"${_scopeId}>https://www.exchangelatam.com/dashboard</a></span></p></div></div><div class="w-full 2xl:w-[600px] mx-auto flex justify-center items-center p-8 text-center"${_scopeId}><p class="text-md text-gray-500"${_scopeId}>ExchangeLatam, Todos los derechos reservados.</p></div></div></div></div></div></div></div>`);
      } else {
        return [
          createVNode("div", { class: "py-6 w-full" }, [
            createVNode("div", { class: "flex mx-auto lg:mr-4" }, [
              createVNode("div", { class: "container mx-auto sm:px-6 lg:px-8" }, [
                createVNode("div", { class: "grid grid-cols-6 gap-3 overflow-hidden shadow-xl sm:rounded-lg p-5 bg-white" }, [
                  createVNode("div", { class: "col-span-6 md:col-span-3 w-full h-full flex flex-col justify-start items-center shadow rounded-md" }, [
                    createVNode("h2", { class: "text-dark-brand font-medium text-xl" }, "Mensajer\xEDa Masiva"),
                    createVNode("form", {
                      onSubmit: withModifiers(_ctx.submit, ["prevent"]),
                      class: "flex flex-col w-full h-full p-2"
                    }, [
                      createVNode("div", { class: "w-full mb-2" }, [
                        createVNode(_component_Select, {
                          selectable: _ctx.addressees,
                          selected: _ctx.form.addressee,
                          modelValue: _ctx.form.addressee,
                          "onUpdate:modelValue": ($event) => _ctx.form.addressee = $event
                        }, {
                          title: withCtx(() => [
                            createTextVNode(" Destinatarios ")
                          ]),
                          _: 1
                        }, 8, ["selectable", "selected", "modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", { class: "w-full mb-2" }, [
                        createVNode(_component_Label, {
                          for: "subject",
                          value: "Asunto"
                        }),
                        createVNode(_component_Input, {
                          id: "subject",
                          type: "text",
                          class: "mt-1 block w-full",
                          modelValue: _ctx.form.subject,
                          "onUpdate:modelValue": ($event) => _ctx.form.subject = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode(_component_InputError, {
                          message: _ctx.form.errors.subject,
                          class: "mt-2"
                        }, null, 8, ["message"])
                      ]),
                      createVNode("div", { class: "w-full mb-2" }, [
                        createVNode(_component_Label, {
                          for: "content",
                          value: "Mensaje"
                        }),
                        withDirectives(createVNode("textarea", {
                          class: "w-full text-gray-600 border-dark-brand focus:border-blue-brand focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm",
                          name: "content",
                          id: "content",
                          rows: "22",
                          placeholder: "Escribe el mensaje",
                          "onUpdate:modelValue": ($event) => _ctx.form.content = $event
                        }, null, 8, ["onUpdate:modelValue"]), [
                          [vModelText, _ctx.form.content]
                        ])
                      ]),
                      createVNode("div", { class: "w-full" }, [
                        createVNode("div", { class: "max-w-max mx-auto" }, [
                          createVNode(_component_Button, {
                            class: [{ "opacity-25": _ctx.form.processing }, "mt-2"],
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
                  ]),
                  createVNode("div", { class: "col-span-6 md:col-span-3 w-full flex flex-col justify-start items-center shadow rounded-md p-2" }, [
                    createVNode("h2", { class: "text-dark-brand font-medium text-xl" }, "Vista Previa del Mensaje"),
                    createVNode("div", { class: "w-full min-h-max bg-dark-brand rounded-sm mt-2 flex flex-col justify-between" }, [
                      createVNode("div", { class: "w-full 2xl:w-[600px] mx-auto flex justify-center items-center p-4" }, [
                        createVNode(_component_ApplicationMark, { class: "block h-12 w-auto" })
                      ]),
                      createVNode("div", { class: "w-full 2xl:w-[600px] p-8 rounded-md mx-auto bg-white flex flex-col justify-between items-start text-lg font-sans text-gray-700" }, [
                        createVNode("h1", { class: "text-lg font-sans font-medium mb-4" }, [
                          createTextVNode("Hola "),
                          createVNode("span", { class: "font-semibold text-dark-brand" }, toDisplayString(_ctx.$page.props.user.name.split(" ", 1) + " " + _ctx.$page.props.user.lastname.split(" ", 1)), 1),
                          createTextVNode(",")
                        ]),
                        createVNode("div", {
                          innerHTML: _ctx.form.content,
                          class: "mt-6"
                        }, null, 8, ["innerHTML"]),
                        createVNode("p", { class: "mt-3" }, "Puedes acceder al \xE1rea de usuario desde el siguiente bot\xF3n."),
                        createVNode("div", { class: "mt-3 w-full flex justify-center" }, [
                          createVNode(_component_Button, {
                            class: [{ "opacity-25": _ctx.form.processing }, "mt-2"],
                            disabled: _ctx.form.processing
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Acceder ")
                            ]),
                            _: 1
                          }, 8, ["class", "disabled"])
                        ]),
                        createVNode("p", { class: "mt-3" }, "Gracias por elegirnos como tu medio de dep\xF3sitos y retiros."),
                        createVNode("br"),
                        createVNode("p", { class: "mt-6 m-b3" }, "Saludos y buen trading,"),
                        createVNode("br"),
                        createVNode("p", { class: "mt-3" }, [
                          createVNode("span", { class: "font-medium text-dark-brand" }, " ExchangeLatam "),
                          createVNode("br"),
                          createVNode("a", { class: "text-sm font-medium" }, " Whatsapp: 3223105578 ")
                        ]),
                        createVNode("div", { class: "my-6 flex flex-col justify-center text-sm" }, [
                          createVNode("p", null, [
                            createVNode("span", null, [
                              createTextVNode("Registrate "),
                              createVNode("a", { class: "underline text-blue-600" }, "aqu\xED"),
                              createTextVNode(" y conviertete en cliente VIP para realizar dep\xF3sitos y retiros sin comisi\xF3n.")
                            ])
                          ]),
                          createVNode("p", null, [
                            createVNode("span", null, [
                              createTextVNode("V\xEDsita nuestra secci\xF3n "),
                              createVNode("a", { class: "underline text-blue-600" }, "FAQ"),
                              createTextVNode(" y resuelve todas tus dudas antes de usar nuestros servicios.")
                            ])
                          ]),
                          createVNode("p", null, [
                            createVNode("span", null, [
                              createTextVNode('Si tienes problemas haciendo click en el bot\xF3n "Acceder", copia y pega el siguiente enlace en t\xFA navegador: '),
                              createVNode("a", { class: "underline text-blue-600" }, "https://www.exchangelatam.com/dashboard")
                            ])
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "w-full 2xl:w-[600px] mx-auto flex justify-center items-center p-8 text-center" }, [
                        createVNode("p", { class: "text-md text-gray-500" }, "ExchangeLatam, Todos los derechos reservados.")
                      ])
                    ])
                  ])
                ])
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/MassiveEmails/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Index as default
};
