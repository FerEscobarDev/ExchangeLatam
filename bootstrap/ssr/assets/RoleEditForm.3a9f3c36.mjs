import { defineComponent, resolveComponent, mergeProps, withCtx, createTextVNode, createVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { _ as _sfc_main$1 } from "./Button.feee2cab.mjs";
import { J as JetForm } from "./Form.e2d7b3ed.mjs";
import { _ as _sfc_main$2 } from "./Input.c38a320e.mjs";
import { _ as _sfc_main$5 } from "./Checkbox.eba10139.mjs";
import { _ as _sfc_main$3 } from "./InputError.bc94ef1e.mjs";
import { _ as _sfc_main$4 } from "./Label.ceceda67.mjs";
import { ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.43be4956.mjs";
const _sfc_main = defineComponent({
  components: {
    JetButton: _sfc_main$1,
    JetForm,
    JetInput: _sfc_main$2,
    JetInputError: _sfc_main$3,
    JetLabel: _sfc_main$4,
    Checkbox: _sfc_main$5
  },
  props: {
    role: Object,
    permissionsAll: Array
  },
  setup(props) {
    let permissionSelect = [];
    props.role.permissions.forEach((element) => {
      permissionSelect.push(element.id);
    });
    return {
      permissionSelect
    };
  },
  data() {
    return {
      form: this.$inertia.form({
        _method: "PUT",
        name: this.role.name,
        permissions: this.permissionSelect
      })
    };
  },
  methods: {
    roleEdit() {
      this.form.post(route("admin.roleUpdate", this.role.id), {
        preserveScroll: true
      });
    }
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_jet_form = resolveComponent("jet-form");
  const _component_jet_label = resolveComponent("jet-label");
  const _component_jet_input = resolveComponent("jet-input");
  const _component_jet_input_error = resolveComponent("jet-input-error");
  const _component_Checkbox = resolveComponent("Checkbox");
  const _component_jet_button = resolveComponent("jet-button");
  _push(ssrRenderComponent(_component_jet_form, mergeProps({ onSubmitted: _ctx.roleEdit }, _attrs), {
    form: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="col-span-6"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_label, {
          for: "name",
          value: "Rol"
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
        _push2(`</div><div class="col-span-6"${_scopeId}><h5${_scopeId}>Permisos</h5><!--[-->`);
        ssrRenderList(_ctx.permissionsAll, (permission) => {
          _push2(`<div class="flex justify-start items-center pt-2"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_Checkbox, {
            value: permission.id,
            checked: _ctx.form.permissions,
            id: permission.id,
            modelValue: _ctx.form.permissions,
            "onUpdate:modelValue": ($event) => _ctx.form.permissions = $event
          }, null, _parent2, _scopeId));
          _push2(ssrRenderComponent(_component_jet_label, {
            for: permission.id,
            value: permission.description,
            class: "ml-2"
          }, null, _parent2, _scopeId));
          _push2(`</div>`);
        });
        _push2(`<!--]--></div><div class="col-span-6"${_scopeId}><div class="max-w-max mx-auto"${_scopeId}>`);
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
          createVNode("div", { class: "col-span-6" }, [
            createVNode(_component_jet_label, {
              for: "name",
              value: "Rol"
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
          createVNode("div", { class: "col-span-6" }, [
            createVNode("h5", null, "Permisos"),
            (openBlock(true), createBlock(Fragment, null, renderList(_ctx.permissionsAll, (permission) => {
              return openBlock(), createBlock("div", {
                class: "flex justify-start items-center pt-2",
                key: permission.id
              }, [
                createVNode(_component_Checkbox, {
                  value: permission.id,
                  checked: _ctx.form.permissions,
                  id: permission.id,
                  modelValue: _ctx.form.permissions,
                  "onUpdate:modelValue": ($event) => _ctx.form.permissions = $event
                }, null, 8, ["value", "checked", "id", "modelValue", "onUpdate:modelValue"]),
                createVNode(_component_jet_label, {
                  for: permission.id,
                  value: permission.description,
                  class: "ml-2"
                }, null, 8, ["for", "value"])
              ]);
            }), 128))
          ]),
          createVNode("div", { class: "col-span-6" }, [
            createVNode("div", { class: "max-w-max mx-auto" }, [
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Roles/Partials/RoleEditForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const RoleEditForm = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  RoleEditForm as default
};
