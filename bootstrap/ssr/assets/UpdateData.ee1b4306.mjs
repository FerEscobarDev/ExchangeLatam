import { defineComponent, resolveComponent, mergeProps, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { _ as _sfc_main$1 } from "./Button.feee2cab.mjs";
import { J as JetForm } from "./Form.a498045b.mjs";
import { _ as _sfc_main$2 } from "./Input.c38a320e.mjs";
import { _ as _sfc_main$3 } from "./InputError.bc94ef1e.mjs";
import { _ as _sfc_main$4 } from "./Label.ceceda67.mjs";
import { J as JetSelect } from "./Select.c3ee249a.mjs";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.43be4956.mjs";
import "@headlessui/vue";
import "@heroicons/vue/solid";
const _sfc_main = defineComponent({
  components: {
    JetButton: _sfc_main$1,
    JetForm,
    JetInput: _sfc_main$2,
    JetInputError: _sfc_main$3,
    JetLabel: _sfc_main$4,
    JetSelect
  },
  props: {
    client: Object
  },
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
    if (props.client.data_user) {
      id_doc = props.client.data_user.doc_type;
    }
    if (id_doc === 0) {
      type_doc.unshift({ "id": 0, "name": "Seleccione", "valid": "false" });
    } else {
      id_doc = parseInt(props.client.data_user.doc_type - 1);
    }
    return {
      type_doc,
      id_doc
    };
  },
  data() {
    return {
      form: this.$inertia.form({
        _method: "PUT",
        name: this.client.name,
        lastname: this.client.lastname,
        doc_type: this.type_doc[this.id_doc],
        doc_num: this.client.data_user ? this.client.data_user.doc_num : null,
        verification: true
      })
    };
  },
  methods: {
    updateData() {
      this.form.post(route("admin.userUpdate", this.client.id), {
        errorBag: "admin.userUpdate",
        preserveScroll: true
      });
    }
  },
  computed: {
    verified() {
      if (this.client.requirement_user.verified == 0) {
        return false;
      } else {
        return true;
      }
    }
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
        _push2(`<div class="col-span-6 grid grid-cols-8 gap-2"${_scopeId}><h2 class="col-span-8 text-center text-2xl font-semibold text-dark-brand"${_scopeId}>Datos Registrados</h2><div class="col-span-8 md:col-span-2"${_scopeId}>`);
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
        _push2(ssrRenderComponent(_component_jet_input_error, {
          message: _ctx.form.errors.name,
          class: "mt-2"
        }, null, _parent2, _scopeId));
        _push2(`</div><div class="col-span-8 md:col-span-2"${_scopeId}>`);
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
        _push2(ssrRenderComponent(_component_jet_input_error, {
          message: _ctx.form.errors.lastname,
          class: "mt-2"
        }, null, _parent2, _scopeId));
        _push2(`</div><div class="col-span-8 md:col-span-2"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_select, {
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
        _push2(`</div><div class="col-span-8 md:col-span-2"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_label, {
          for: "doc_num",
          value: "N\xFAmero documento"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_jet_input, {
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
        _push2(`</div><div class="col-span-8 flex justify-center items-center"${_scopeId}>`);
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
          createVNode("div", { class: "col-span-6 grid grid-cols-8 gap-2" }, [
            createVNode("h2", { class: "col-span-8 text-center text-2xl font-semibold text-dark-brand" }, "Datos Registrados"),
            createVNode("div", { class: "col-span-8 md:col-span-2" }, [
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
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_component_jet_input_error, {
                message: _ctx.form.errors.name,
                class: "mt-2"
              }, null, 8, ["message"])
            ]),
            createVNode("div", { class: "col-span-8 md:col-span-2" }, [
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
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_component_jet_input_error, {
                message: _ctx.form.errors.lastname,
                class: "mt-2"
              }, null, 8, ["message"])
            ]),
            createVNode("div", { class: "col-span-8 md:col-span-2" }, [
              createVNode(_component_jet_select, {
                selectable: _ctx.type_doc,
                selected: _ctx.form.doc_type,
                modelValue: _ctx.form.doc_type,
                "onUpdate:modelValue": ($event) => _ctx.form.doc_type = $event
              }, {
                title: withCtx(() => [
                  createTextVNode(" Tipo de documento ")
                ]),
                _: 1
              }, 8, ["selectable", "selected", "modelValue", "onUpdate:modelValue"]),
              createVNode(_component_jet_input_error, {
                message: _ctx.form.errors.doc_type,
                class: "mt-2"
              }, null, 8, ["message"])
            ]),
            createVNode("div", { class: "col-span-8 md:col-span-2" }, [
              createVNode(_component_jet_label, {
                for: "doc_num",
                value: "N\xFAmero documento"
              }),
              createVNode(_component_jet_input, {
                id: "doc_num",
                type: "number",
                class: "mt-1 block w-full",
                modelValue: _ctx.form.doc_num,
                "onUpdate:modelValue": ($event) => _ctx.form.doc_num = $event
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_component_jet_input_error, {
                message: _ctx.form.errors.doc_num,
                class: "mt-2"
              }, null, 8, ["message"])
            ]),
            createVNode("div", { class: "col-span-8 flex justify-center items-center" }, [
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Verifications/Partials/UpdateData.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const UpdateData = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  UpdateData as default
};
