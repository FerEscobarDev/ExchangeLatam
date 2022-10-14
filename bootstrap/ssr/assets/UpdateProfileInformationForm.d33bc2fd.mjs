import { defineComponent, resolveComponent, mergeProps, withCtx, createTextVNode, openBlock, createBlock, createVNode, withDirectives, vShow, withModifiers, createCommentVNode, useSSRContext } from "vue";
import { _ as _sfc_main$2 } from "./Button.feee2cab.mjs";
import { _ as _sfc_main$3 } from "./FormSection.5192c88f.mjs";
import { _ as _sfc_main$4 } from "./Input.c38a320e.mjs";
import { _ as _sfc_main$5 } from "./InputError.bc94ef1e.mjs";
import { _ as _sfc_main$6 } from "./Label.ceceda67.mjs";
import { _ as _sfc_main$1 } from "./ActionMessage.1772107a.mjs";
import { _ as _sfc_main$7 } from "./SecondaryButton.987206fe.mjs";
import { ssrRenderComponent, ssrRenderStyle, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.43be4956.mjs";
import "./SectionTitle.3d2d12a1.mjs";
const _sfc_main = defineComponent({
  components: {
    JetActionMessage: _sfc_main$1,
    JetButton: _sfc_main$2,
    JetFormSection: _sfc_main$3,
    JetInput: _sfc_main$4,
    JetInputError: _sfc_main$5,
    JetLabel: _sfc_main$6,
    JetSecondaryButton: _sfc_main$7
  },
  props: ["user"],
  data() {
    return {
      form: this.$inertia.form({
        _method: "PUT",
        name: this.user.name,
        lastname: this.user.lastname,
        mobil: this.user.mobil,
        email: this.user.email,
        photo: null
      }),
      photoPreview: null
    };
  },
  methods: {
    updateProfileInformation() {
      if (this.$refs.photo) {
        this.form.photo = this.$refs.photo.files[0];
      }
      this.form.post(route("user-profile-information.update"), {
        errorBag: "updateProfileInformation",
        preserveScroll: true,
        onSuccess: () => this.clearPhotoFileInput()
      });
    },
    selectNewPhoto() {
      this.$refs.photo.click();
    },
    updatePhotoPreview() {
      const photo = this.$refs.photo.files[0];
      if (!photo)
        return;
      const reader = new FileReader();
      reader.onload = (e) => {
        this.photoPreview = e.target.result;
      };
      reader.readAsDataURL(photo);
    },
    deletePhoto() {
      this.$inertia.delete(route("current-user-photo.destroy"), {
        preserveScroll: true,
        onSuccess: () => {
          this.photoPreview = null;
          this.clearPhotoFileInput();
        }
      });
    },
    clearPhotoFileInput() {
      var _a;
      if ((_a = this.$refs.photo) == null ? void 0 : _a.value) {
        this.$refs.photo.value = null;
      }
    }
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_jet_form_section = resolveComponent("jet-form-section");
  const _component_jet_label = resolveComponent("jet-label");
  const _component_jet_secondary_button = resolveComponent("jet-secondary-button");
  const _component_jet_input_error = resolveComponent("jet-input-error");
  const _component_jet_input = resolveComponent("jet-input");
  const _component_jet_action_message = resolveComponent("jet-action-message");
  const _component_jet_button = resolveComponent("jet-button");
  _push(ssrRenderComponent(_component_jet_form_section, mergeProps({ onSubmitted: _ctx.updateProfileInformation }, _attrs), {
    title: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Informaci\xF3n personal `);
      } else {
        return [
          createTextVNode(" Informaci\xF3n personal ")
        ];
      }
    }),
    description: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Update your account&#39;s profile information and email address. `);
      } else {
        return [
          createTextVNode(" Update your account's profile information and email address. ")
        ];
      }
    }),
    form: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        if (_ctx.$page.props.jetstream.managesProfilePhotos) {
          _push2(`<div class="col-span-6 sm:col-span-4"${_scopeId}><input type="file" class="hidden"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_jet_label, {
            for: "photo",
            value: "Photo"
          }, null, _parent2, _scopeId));
          _push2(`<div class="mt-2" style="${ssrRenderStyle(!_ctx.photoPreview ? null : { display: "none" })}"${_scopeId}><img${ssrRenderAttr("src", _ctx.user.profile_photo_url)}${ssrRenderAttr("alt", _ctx.user.name)} class="rounded-full h-20 w-20 object-cover"${_scopeId}></div><div class="mt-2" style="${ssrRenderStyle(_ctx.photoPreview ? null : { display: "none" })}"${_scopeId}><span class="block rounded-full w-20 h-20 bg-cover bg-no-repeat bg-center" style="${ssrRenderStyle("background-image: url('" + _ctx.photoPreview + "');")}"${_scopeId}></span></div>`);
          _push2(ssrRenderComponent(_component_jet_secondary_button, {
            class: "mt-2 mr-2",
            type: "button",
            onClick: _ctx.selectNewPhoto
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(` Select A New Photo `);
              } else {
                return [
                  createTextVNode(" Select A New Photo ")
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
          if (_ctx.user.profile_photo_path) {
            _push2(ssrRenderComponent(_component_jet_secondary_button, {
              type: "button",
              class: "mt-2",
              onClick: _ctx.deletePhoto
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Remove Photo `);
                } else {
                  return [
                    createTextVNode(" Remove Photo ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            _push2(`<!---->`);
          }
          _push2(ssrRenderComponent(_component_jet_input_error, {
            message: _ctx.form.errors.photo,
            class: "mt-2"
          }, null, _parent2, _scopeId));
          _push2(`</div>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`<div class="col-span-6 sm:col-span-4"${_scopeId}>`);
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
        _push2(`</div><div class="col-span-6 sm:col-span-4"${_scopeId}>`);
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
        _push2(`</div><div class="col-span-6 sm:col-span-4"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_label, {
          for: "email",
          value: "Email"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_jet_input, {
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
        _push2(`</div>`);
      } else {
        return [
          _ctx.$page.props.jetstream.managesProfilePhotos ? (openBlock(), createBlock("div", {
            key: 0,
            class: "col-span-6 sm:col-span-4"
          }, [
            createVNode("input", {
              type: "file",
              class: "hidden",
              ref: "photo",
              onChange: _ctx.updatePhotoPreview
            }, null, 40, ["onChange"]),
            createVNode(_component_jet_label, {
              for: "photo",
              value: "Photo"
            }),
            withDirectives(createVNode("div", { class: "mt-2" }, [
              createVNode("img", {
                src: _ctx.user.profile_photo_url,
                alt: _ctx.user.name,
                class: "rounded-full h-20 w-20 object-cover"
              }, null, 8, ["src", "alt"])
            ], 512), [
              [vShow, !_ctx.photoPreview]
            ]),
            withDirectives(createVNode("div", { class: "mt-2" }, [
              createVNode("span", {
                class: "block rounded-full w-20 h-20 bg-cover bg-no-repeat bg-center",
                style: "background-image: url('" + _ctx.photoPreview + "');"
              }, null, 4)
            ], 512), [
              [vShow, _ctx.photoPreview]
            ]),
            createVNode(_component_jet_secondary_button, {
              class: "mt-2 mr-2",
              type: "button",
              onClick: withModifiers(_ctx.selectNewPhoto, ["prevent"])
            }, {
              default: withCtx(() => [
                createTextVNode(" Select A New Photo ")
              ]),
              _: 1
            }, 8, ["onClick"]),
            _ctx.user.profile_photo_path ? (openBlock(), createBlock(_component_jet_secondary_button, {
              key: 0,
              type: "button",
              class: "mt-2",
              onClick: withModifiers(_ctx.deletePhoto, ["prevent"])
            }, {
              default: withCtx(() => [
                createTextVNode(" Remove Photo ")
              ]),
              _: 1
            }, 8, ["onClick"])) : createCommentVNode("", true),
            createVNode(_component_jet_input_error, {
              message: _ctx.form.errors.photo,
              class: "mt-2"
            }, null, 8, ["message"])
          ])) : createCommentVNode("", true),
          createVNode("div", { class: "col-span-6 sm:col-span-4" }, [
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
          createVNode("div", { class: "col-span-6 sm:col-span-4" }, [
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
          createVNode("div", { class: "col-span-6 sm:col-span-4" }, [
            createVNode(_component_jet_label, {
              for: "email",
              value: "Email"
            }),
            createVNode(_component_jet_input, {
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
          ])
        ];
      }
    }),
    actions: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_jet_action_message, {
          on: _ctx.form.recentlySuccessful,
          class: "mr-3"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Saved. `);
            } else {
              return [
                createTextVNode(" Saved. ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_jet_button, {
          class: { "opacity-25": _ctx.form.processing },
          disabled: _ctx.form.processing
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Save `);
            } else {
              return [
                createTextVNode(" Save ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_jet_action_message, {
            on: _ctx.form.recentlySuccessful,
            class: "mr-3"
          }, {
            default: withCtx(() => [
              createTextVNode(" Saved. ")
            ]),
            _: 1
          }, 8, ["on"]),
          createVNode(_component_jet_button, {
            class: { "opacity-25": _ctx.form.processing },
            disabled: _ctx.form.processing
          }, {
            default: withCtx(() => [
              createTextVNode(" Save ")
            ]),
            _: 1
          }, 8, ["class", "disabled"])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Profile/Partials/UpdateProfileInformationForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const UpdateProfileInformationForm = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  UpdateProfileInformationForm as default
};
