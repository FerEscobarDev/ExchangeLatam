import { defineComponent, resolveComponent, mergeProps, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { _ as _sfc_main$2 } from "./Button.feee2cab.mjs";
import { J as JetForm } from "./Form.a498045b.mjs";
import { _ as _sfc_main$3 } from "./Input.c38a320e.mjs";
import { _ as _sfc_main$4 } from "./InputError.bc94ef1e.mjs";
import { _ as _sfc_main$5 } from "./Label.ceceda67.mjs";
import { _ as _sfc_main$1 } from "./ActionMessage.1772107a.mjs";
import { _ as _sfc_main$6 } from "./SecondaryButton.987206fe.mjs";
import { J as JetSelect } from "./Select.c3ee249a.mjs";
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
    JetSecondaryButton: _sfc_main$6,
    JetSelect
  },
  props: [
    "user",
    "departaments",
    "cities"
  ],
  setup(props) {
    let type_doc = [
      {
        "id": 1,
        "name": "C\xE9dula de Ciudadan\xEDa"
      },
      {
        "id": 2,
        "name": "C\xE9dula de Extranjer\xEDa"
      },
      {
        "id": 3,
        "name": "Pasaporte"
      }
    ];
    let id_doc = 0;
    let departamentResult = null;
    let cityResult = null;
    if (props.user.data_user) {
      id_doc = props.user.data_user.doc_type;
      departamentResult = props.user.data_user.departament;
      cityResult = props.user.data_user.city;
    }
    if (id_doc === 0) {
      type_doc.unshift({ "id": 0, "name": "Seleccione", "valid": "false" });
    } else {
      id_doc = parseInt(props.user.data_user.doc_type - 1);
    }
    let depart = props.departaments;
    let searchDepart = -1;
    if (departamentResult) {
      searchDepart = depart.findIndex((departament) => departament.name === departamentResult);
      if (searchDepart === -1) {
        depart.unshift({ "id": 0, "name": "Seleccione" });
        departamentResult = depart[0];
      } else {
        departamentResult = depart[searchDepart];
      }
    } else {
      depart.unshift({ "id": 0, "name": "Seleccione" });
      departamentResult = depart[0];
    }
    const departamentInit = departamentResult;
    let cit = props.cities;
    let searchCity = -1;
    if (cityResult) {
      searchCity = cit.findIndex((city) => city.name === cityResult.toLowerCase());
      if (searchCity === -1) {
        cit.unshift({ "id": 0, "name": "Seleccione" });
        cityResult = cit[0];
      } else {
        cityResult = cit[searchCity];
      }
    } else {
      cit.unshift({ "id": 0, "name": "Seleccione" });
      cityResult = cit[0];
    }
    const cityInit = cityResult;
    return {
      departamentInit,
      cityInit,
      type_doc,
      id_doc
    };
  },
  data() {
    return {
      form: this.$inertia.form({
        _method: "PUT",
        name: this.user.name,
        lastname: this.user.lastname,
        doc_type: this.type_doc[this.id_doc],
        doc_num: this.user.data_user ? this.user.data_user.doc_num : null,
        mobil: this.user.mobil,
        departament: this.departamentInit,
        city: this.cityInit,
        email: this.user.email,
        address: this.user.data_user ? this.user.data_user.address : null
      })
    };
  },
  methods: {
    updateData() {
      this.form.post(route("user.update"), {
        errorBag: "user.update",
        preserveScroll: true
      });
    },
    refreshCity() {
      this.form.city = "Seleccione";
    }
  },
  computed: {
    departamentSelected() {
      let departamentFormat = this.form.departament;
      let result = this.departaments;
      let search = -1;
      if (departamentFormat) {
        if (typeof departamentFormat === "object") {
          departamentFormat = this.form.departament.id;
          search = result.findIndex((departament) => departament.id === departamentFormat);
        } else {
          search = result.findIndex((departament) => departament.name === departamentFormat);
        }
        if (search === -1) {
          result.unshift({ "id": 0, "name": "Seleccione" });
          return result[0];
        } else {
          return result[search];
        }
      } else {
        result.unshift({ "id": 0, "name": "Seleccione" });
        return result[0];
      }
    },
    citySelected() {
      let cityFormat = this.form.city;
      let result = this.cities;
      let search = -1;
      if (cityFormat) {
        if (typeof cityFormat === "object") {
          cityFormat = this.form.city.name;
          search = result.findIndex((city) => city.name === cityFormat.toLowerCase());
        } else if (typeof cityFormat === "number") {
          search = result.findIndex((city) => city.id === cityFormat);
        } else {
          search = result.findIndex((city) => city.name === cityFormat.toLowerCase());
        }
        if (search === -1) {
          result.unshift({ "id": 0, "name": "Seleccione" });
          return result[0];
        } else {
          return result[search];
        }
      } else {
        result.unshift({ "id": 0, "name": "Seleccione" });
        return result[0];
      }
    },
    citiesList() {
      let list = [];
      let departamentFormat = this.departamentSelected;
      if (departamentFormat.name != "Seleccione") {
        this.cities.forEach((city) => {
          if (city.departament_id === departamentFormat.id) {
            list.push(city);
          }
        });
        return list;
      } else {
        return list.push({ "id": 0, "name": "Seleccione" });
      }
    },
    verified() {
      if (this.user.requirement_user.verified == 0) {
        return false;
      } else {
        return true;
      }
    }
  },
  watch: {
    "form.departament": "refreshCity"
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_jet_form = resolveComponent("jet-form");
  const _component_jet_label = resolveComponent("jet-label");
  const _component_jet_input = resolveComponent("jet-input");
  const _component_jet_input_error = resolveComponent("jet-input-error");
  const _component_jet_select = resolveComponent("jet-select");
  const _component_jet_button = resolveComponent("jet-button");
  _push(ssrRenderComponent(_component_jet_form, mergeProps({ onSubmitted: _ctx.updateData }, _attrs), {
    form: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="col-span-6 md:col-span-3"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_label, {
          for: "name",
          value: "Nombres"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_jet_input, {
          readonly: _ctx.verified,
          id: "name",
          type: "text",
          class: "mt-1 block w-full",
          modelValue: _ctx.form.name,
          "onUpdate:modelValue": ($event) => _ctx.form.name = $event
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_jet_input_error, {
          message: _ctx.form.errors.name,
          class: "mt-2"
        }, null, _parent2, _scopeId));
        _push2(`</div><div class="col-span-6 md:col-span-3"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_label, {
          for: "lastname",
          value: "Apellidos"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_jet_input, {
          readonly: _ctx.verified,
          id: "lastname",
          type: "text",
          class: "mt-1 block w-full",
          modelValue: _ctx.form.lastname,
          "onUpdate:modelValue": ($event) => _ctx.form.lastname = $event
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_jet_input_error, {
          message: _ctx.form.errors.lastname,
          class: "mt-2"
        }, null, _parent2, _scopeId));
        _push2(`</div><div class="col-span-6 md:col-span-3"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_select, {
          disabled: _ctx.verified,
          selectable: _ctx.type_doc,
          selected: _ctx.form.doc_type,
          modelValue: _ctx.form.doc_type,
          "onUpdate:modelValue": ($event) => _ctx.form.doc_type = $event
        }, {
          title: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Tipo de documento `);
            } else {
              return [
                createTextVNode(" Tipo de documento ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_jet_input_error, {
          message: _ctx.form.errors.doc_type,
          class: "mt-2"
        }, null, _parent2, _scopeId));
        _push2(`</div><div class="col-span-6 md:col-span-3"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_label, {
          for: "doc_num",
          value: "N\xFAmero documento"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_jet_input, {
          readonly: _ctx.verified,
          id: "doc_num",
          type: "number",
          class: "mt-1 block w-full",
          modelValue: _ctx.form.doc_num,
          "onUpdate:modelValue": ($event) => _ctx.form.doc_num = $event
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_jet_input_error, {
          message: _ctx.form.errors.doc_num,
          class: "mt-2"
        }, null, _parent2, _scopeId));
        _push2(`</div><div class="col-span-6 md:col-span-3"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_label, {
          for: "mobil",
          value: "N\xFAmero documento"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_jet_input, {
          id: "mobil",
          type: "number",
          class: "mt-1 block w-full",
          modelValue: _ctx.form.mobil,
          "onUpdate:modelValue": ($event) => _ctx.form.mobil = $event
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_jet_input_error, {
          message: _ctx.form.errors.mobil,
          class: "mt-2"
        }, null, _parent2, _scopeId));
        _push2(`</div><div class="col-span-6 md:col-span-3"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_label, {
          for: "email",
          value: "Email"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_jet_input, {
          readonly: "",
          disabled: "true",
          id: "email",
          type: "email",
          class: "mt-1 block w-full",
          modelValue: _ctx.form.email,
          "onUpdate:modelValue": ($event) => _ctx.form.email = $event
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_jet_input_error, {
          message: _ctx.form.errors.email,
          class: "mt-2"
        }, null, _parent2, _scopeId));
        _push2(`</div><div class="col-span-6 md:col-span-3"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_select, {
          selectable: _ctx.departaments,
          selected: _ctx.departamentSelected,
          modelValue: _ctx.form.departament,
          "onUpdate:modelValue": ($event) => _ctx.form.departament = $event
        }, {
          title: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Departamento `);
            } else {
              return [
                createTextVNode(" Departamento ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_jet_input_error, {
          message: _ctx.form.errors.departament,
          class: "mt-2"
        }, null, _parent2, _scopeId));
        _push2(`</div><div class="col-span-6 md:col-span-3"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_select, {
          selectable: _ctx.citiesList,
          selected: _ctx.citySelected,
          modelValue: _ctx.form.city,
          "onUpdate:modelValue": ($event) => _ctx.form.city = $event
        }, {
          title: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Ciudad `);
            } else {
              return [
                createTextVNode(" Ciudad ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_jet_input_error, {
          message: _ctx.form.errors.city,
          class: "mt-2"
        }, null, _parent2, _scopeId));
        _push2(`</div><div class="col-span-6"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_label, {
          for: "address",
          value: "Direcci\xF3n"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_jet_input, {
          id: "address",
          type: "text",
          class: "mt-1 block w-full",
          modelValue: _ctx.form.address,
          "onUpdate:modelValue": ($event) => _ctx.form.address = $event
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_jet_input_error, {
          message: _ctx.form.errors.address,
          class: "mt-2"
        }, null, _parent2, _scopeId));
        _push2(`</div><div class="col-span-6"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_button, {
          class: [{ "opacity-25": _ctx.form.processing }, "mt-2 ml-4 md:mx-auto"],
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
        return [
          createVNode("div", { class: "col-span-6 md:col-span-3" }, [
            createVNode(_component_jet_label, {
              for: "name",
              value: "Nombres"
            }),
            createVNode(_component_jet_input, {
              readonly: _ctx.verified,
              id: "name",
              type: "text",
              class: "mt-1 block w-full",
              modelValue: _ctx.form.name,
              "onUpdate:modelValue": ($event) => _ctx.form.name = $event
            }, null, 8, ["readonly", "modelValue", "onUpdate:modelValue"]),
            createVNode(_component_jet_input_error, {
              message: _ctx.form.errors.name,
              class: "mt-2"
            }, null, 8, ["message"])
          ]),
          createVNode("div", { class: "col-span-6 md:col-span-3" }, [
            createVNode(_component_jet_label, {
              for: "lastname",
              value: "Apellidos"
            }),
            createVNode(_component_jet_input, {
              readonly: _ctx.verified,
              id: "lastname",
              type: "text",
              class: "mt-1 block w-full",
              modelValue: _ctx.form.lastname,
              "onUpdate:modelValue": ($event) => _ctx.form.lastname = $event
            }, null, 8, ["readonly", "modelValue", "onUpdate:modelValue"]),
            createVNode(_component_jet_input_error, {
              message: _ctx.form.errors.lastname,
              class: "mt-2"
            }, null, 8, ["message"])
          ]),
          createVNode("div", { class: "col-span-6 md:col-span-3" }, [
            createVNode(_component_jet_select, {
              disabled: _ctx.verified,
              selectable: _ctx.type_doc,
              selected: _ctx.form.doc_type,
              modelValue: _ctx.form.doc_type,
              "onUpdate:modelValue": ($event) => _ctx.form.doc_type = $event
            }, {
              title: withCtx(() => [
                createTextVNode(" Tipo de documento ")
              ]),
              _: 1
            }, 8, ["disabled", "selectable", "selected", "modelValue", "onUpdate:modelValue"]),
            createVNode(_component_jet_input_error, {
              message: _ctx.form.errors.doc_type,
              class: "mt-2"
            }, null, 8, ["message"])
          ]),
          createVNode("div", { class: "col-span-6 md:col-span-3" }, [
            createVNode(_component_jet_label, {
              for: "doc_num",
              value: "N\xFAmero documento"
            }),
            createVNode(_component_jet_input, {
              readonly: _ctx.verified,
              id: "doc_num",
              type: "number",
              class: "mt-1 block w-full",
              modelValue: _ctx.form.doc_num,
              "onUpdate:modelValue": ($event) => _ctx.form.doc_num = $event
            }, null, 8, ["readonly", "modelValue", "onUpdate:modelValue"]),
            createVNode(_component_jet_input_error, {
              message: _ctx.form.errors.doc_num,
              class: "mt-2"
            }, null, 8, ["message"])
          ]),
          createVNode("div", { class: "col-span-6 md:col-span-3" }, [
            createVNode(_component_jet_label, {
              for: "mobil",
              value: "N\xFAmero documento"
            }),
            createVNode(_component_jet_input, {
              id: "mobil",
              type: "number",
              class: "mt-1 block w-full",
              modelValue: _ctx.form.mobil,
              "onUpdate:modelValue": ($event) => _ctx.form.mobil = $event
            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
            createVNode(_component_jet_input_error, {
              message: _ctx.form.errors.mobil,
              class: "mt-2"
            }, null, 8, ["message"])
          ]),
          createVNode("div", { class: "col-span-6 md:col-span-3" }, [
            createVNode(_component_jet_label, {
              for: "email",
              value: "Email"
            }),
            createVNode(_component_jet_input, {
              readonly: "",
              disabled: "true",
              id: "email",
              type: "email",
              class: "mt-1 block w-full",
              modelValue: _ctx.form.email,
              "onUpdate:modelValue": ($event) => _ctx.form.email = $event
            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
            createVNode(_component_jet_input_error, {
              message: _ctx.form.errors.email,
              class: "mt-2"
            }, null, 8, ["message"])
          ]),
          createVNode("div", { class: "col-span-6 md:col-span-3" }, [
            createVNode(_component_jet_select, {
              selectable: _ctx.departaments,
              selected: _ctx.departamentSelected,
              modelValue: _ctx.form.departament,
              "onUpdate:modelValue": ($event) => _ctx.form.departament = $event
            }, {
              title: withCtx(() => [
                createTextVNode(" Departamento ")
              ]),
              _: 1
            }, 8, ["selectable", "selected", "modelValue", "onUpdate:modelValue"]),
            createVNode(_component_jet_input_error, {
              message: _ctx.form.errors.departament,
              class: "mt-2"
            }, null, 8, ["message"])
          ]),
          createVNode("div", { class: "col-span-6 md:col-span-3" }, [
            createVNode(_component_jet_select, {
              selectable: _ctx.citiesList,
              selected: _ctx.citySelected,
              modelValue: _ctx.form.city,
              "onUpdate:modelValue": ($event) => _ctx.form.city = $event
            }, {
              title: withCtx(() => [
                createTextVNode(" Ciudad ")
              ]),
              _: 1
            }, 8, ["selectable", "selected", "modelValue", "onUpdate:modelValue"]),
            createVNode(_component_jet_input_error, {
              message: _ctx.form.errors.city,
              class: "mt-2"
            }, null, 8, ["message"])
          ]),
          createVNode("div", { class: "col-span-6" }, [
            createVNode(_component_jet_label, {
              for: "address",
              value: "Direcci\xF3n"
            }),
            createVNode(_component_jet_input, {
              id: "address",
              type: "text",
              class: "mt-1 block w-full",
              modelValue: _ctx.form.address,
              "onUpdate:modelValue": ($event) => _ctx.form.address = $event
            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
            createVNode(_component_jet_input_error, {
              message: _ctx.form.errors.address,
              class: "mt-2"
            }, null, 8, ["message"])
          ]),
          createVNode("div", { class: "col-span-6" }, [
            createVNode(_component_jet_button, {
              class: [{ "opacity-25": _ctx.form.processing }, "mt-2 ml-4 md:mx-auto"],
              disabled: _ctx.form.processing
            }, {
              default: withCtx(() => [
                createTextVNode(" Guardar ")
              ]),
              _: 1
            }, 8, ["class", "disabled"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Profile/Partials/UpdateData.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const UpdateData = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  UpdateData as default
};
