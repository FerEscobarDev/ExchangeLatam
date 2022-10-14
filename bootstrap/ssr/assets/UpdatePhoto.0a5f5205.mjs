import { defineComponent, resolveComponent, mergeProps, withCtx, createTextVNode, createVNode, openBlock, createBlock, withDirectives, vShow, toDisplayString, withModifiers, useSSRContext } from "vue";
import { _ as _sfc_main$2 } from "./Button.feee2cab.mjs";
import { J as JetForm } from "./Form.a498045b.mjs";
import { _ as _sfc_main$3 } from "./Input.c38a320e.mjs";
import { _ as _sfc_main$4 } from "./InputError.bc94ef1e.mjs";
import { _ as _sfc_main$5 } from "./Label.ceceda67.mjs";
import { _ as _sfc_main$1 } from "./ActionMessage.1772107a.mjs";
import { _ as _sfc_main$6 } from "./SecondaryButton.987206fe.mjs";
import { ssrRenderComponent, ssrRenderStyle, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.43be4956.mjs";
const _sfc_main = defineComponent({
  components: {
    JetActionMessage: _sfc_main$1,
    JetButton: _sfc_main$2,
    JetForm,
    JetInput: _sfc_main$3,
    JetInputError: _sfc_main$4,
    JetLabel: _sfc_main$5,
    JetSecondaryButton: _sfc_main$6
  },
  props: ["user"],
  data() {
    return {
      form: this.$inertia.form({
        _method: "PUT",
        picture: null
      }),
      url: location.origin,
      photoPreview: null
    };
  },
  methods: {
    updateProfileInformation() {
      if (this.$refs.picture) {
        this.form.picture = this.$refs.picture.files[0];
      }
      this.form.post(route("users.picture"), {
        errorBag: "updateProfileInformation",
        preserveScroll: true,
        onSuccess: () => this.clearPhotoFileInput()
      });
    },
    selectNewPhoto() {
      this.$refs.picture.click();
    },
    updatePhotoPreview() {
      const picture = this.$refs.picture.files[0];
      if (!picture)
        return;
      const reader = new FileReader();
      reader.onload = (e) => {
        this.photoPreview = e.target.result;
      };
      reader.readAsDataURL(picture);
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
      if ((_a = this.$refs.picture) == null ? void 0 : _a.value) {
        this.$refs.picture.value = null;
        this.photoPreview = null;
      }
    }
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_jet_form = resolveComponent("jet-form");
  const _component_jet_secondary_button = resolveComponent("jet-secondary-button");
  const _component_jet_button = resolveComponent("jet-button");
  const _component_jet_input_error = resolveComponent("jet-input-error");
  _push(ssrRenderComponent(_component_jet_form, mergeProps({ onSubmitted: _ctx.updateProfileInformation }, _attrs), {
    form: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="col-span-6"${_scopeId}><div class="flex flex-col md:flex-row items-center justify-between"${_scopeId}><div class="flex items-center justify-start"${_scopeId}><input type="file" class="hidden"${_scopeId}>`);
        if (_ctx.user.picture) {
          _push2(`<div${_scopeId}><div class="" style="${ssrRenderStyle(!_ctx.photoPreview ? null : { display: "none" })}"${_scopeId}><img${ssrRenderAttr("src", _ctx.url + "/storage/" + _ctx.user.picture)}${ssrRenderAttr("alt", _ctx.user.name)} class="rounded-full h-20 w-20 object-cover"${_scopeId}></div></div>`);
        } else {
          _push2(`<div${_scopeId}><div class="mt-2" style="${ssrRenderStyle(!_ctx.photoPreview ? null : { display: "none" })}"${_scopeId}><img${ssrRenderAttr("src", _ctx.user.profile_photo_url)}${ssrRenderAttr("alt", _ctx.user.name)} class="rounded-full h-20 w-20 object-cover"${_scopeId}></div></div>`);
        }
        _push2(`<div class="mt-2" style="${ssrRenderStyle(_ctx.photoPreview ? null : { display: "none" })}"${_scopeId}><span class="block rounded-full w-20 h-20 bg-cover bg-no-repeat bg-center" style="${ssrRenderStyle("background-image: url('" + _ctx.photoPreview + "');")}"${_scopeId}></span></div>`);
        if (_ctx.user.data_user === null) {
          _push2(`<div class="flex flex-col ml-5"${_scopeId}><span class="text-xl md:text-2xl text-black/75 font-semibold"${_scopeId}>${ssrInterpolate(_ctx.user.name + " " + _ctx.user.lastname)}</span></div>`);
        } else {
          _push2(`<div class="flex flex-col ml-5"${_scopeId}><span class="text-xl md:text-2xl text-black/75 font-semibold"${_scopeId}>${ssrInterpolate(_ctx.user.name + " " + _ctx.user.lastname)}</span>`);
          if (_ctx.user.data_user.vip === "no") {
            _push2(`<span class="text-black/50 font-medium"${_scopeId}>Cuenta Est\xE1ndar</span>`);
          } else {
            _push2(`<span class="text-amber-500 font-medium"${_scopeId}>Cuenta VIP</span>`);
          }
          _push2(`</div>`);
        }
        _push2(`</div><div class="flex flex-row md:flex-col items-center justify-between"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_secondary_button, {
          class: "mt-2 mx-auto",
          type: "button",
          style: !_ctx.user.picture && !_ctx.photoPreview ? null : { display: "none" },
          onClick: _ctx.selectNewPhoto
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Subir foto `);
            } else {
              return [
                createTextVNode(" Subir foto ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_jet_secondary_button, {
          class: "mt-2 mx-auto",
          type: "button",
          style: _ctx.photoPreview || _ctx.user.picture ? null : { display: "none" },
          onClick: _ctx.selectNewPhoto
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Cambiar foto `);
            } else {
              return [
                createTextVNode(" Cambiar foto ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_jet_button, {
          class: [{ "opacity-25": _ctx.form.processing }, "mt-2 ml-4 md:mx-auto"],
          style: _ctx.photoPreview ? null : { display: "none" },
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
        _push2(ssrRenderComponent(_component_jet_input_error, {
          message: _ctx.form.errors.picture,
          class: "mt-2"
        }, null, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "col-span-6" }, [
            createVNode("div", { class: "flex flex-col md:flex-row items-center justify-between" }, [
              createVNode("div", { class: "flex items-center justify-start" }, [
                createVNode("input", {
                  type: "file",
                  class: "hidden",
                  ref: "picture",
                  onChange: _ctx.updatePhotoPreview
                }, null, 40, ["onChange"]),
                _ctx.user.picture ? (openBlock(), createBlock("div", { key: 0 }, [
                  withDirectives(createVNode("div", { class: "" }, [
                    createVNode("img", {
                      src: _ctx.url + "/storage/" + _ctx.user.picture,
                      alt: _ctx.user.name,
                      class: "rounded-full h-20 w-20 object-cover"
                    }, null, 8, ["src", "alt"])
                  ], 512), [
                    [vShow, !_ctx.photoPreview]
                  ])
                ])) : (openBlock(), createBlock("div", { key: 1 }, [
                  withDirectives(createVNode("div", { class: "mt-2" }, [
                    createVNode("img", {
                      src: _ctx.user.profile_photo_url,
                      alt: _ctx.user.name,
                      class: "rounded-full h-20 w-20 object-cover"
                    }, null, 8, ["src", "alt"])
                  ], 512), [
                    [vShow, !_ctx.photoPreview]
                  ])
                ])),
                withDirectives(createVNode("div", { class: "mt-2" }, [
                  createVNode("span", {
                    class: "block rounded-full w-20 h-20 bg-cover bg-no-repeat bg-center",
                    style: "background-image: url('" + _ctx.photoPreview + "');"
                  }, null, 4)
                ], 512), [
                  [vShow, _ctx.photoPreview]
                ]),
                _ctx.user.data_user === null ? (openBlock(), createBlock("div", {
                  key: 2,
                  class: "flex flex-col ml-5"
                }, [
                  createVNode("span", { class: "text-xl md:text-2xl text-black/75 font-semibold" }, toDisplayString(_ctx.user.name + " " + _ctx.user.lastname), 1)
                ])) : (openBlock(), createBlock("div", {
                  key: 3,
                  class: "flex flex-col ml-5"
                }, [
                  createVNode("span", { class: "text-xl md:text-2xl text-black/75 font-semibold" }, toDisplayString(_ctx.user.name + " " + _ctx.user.lastname), 1),
                  _ctx.user.data_user.vip === "no" ? (openBlock(), createBlock("span", {
                    key: 0,
                    class: "text-black/50 font-medium"
                  }, "Cuenta Est\xE1ndar")) : (openBlock(), createBlock("span", {
                    key: 1,
                    class: "text-amber-500 font-medium"
                  }, "Cuenta VIP"))
                ]))
              ]),
              createVNode("div", { class: "flex flex-row md:flex-col items-center justify-between" }, [
                withDirectives(createVNode(_component_jet_secondary_button, {
                  class: "mt-2 mx-auto",
                  type: "button",
                  onClick: withModifiers(_ctx.selectNewPhoto, ["prevent"])
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Subir foto ")
                  ]),
                  _: 1
                }, 8, ["onClick"]), [
                  [vShow, !_ctx.user.picture && !_ctx.photoPreview]
                ]),
                withDirectives(createVNode(_component_jet_secondary_button, {
                  class: "mt-2 mx-auto",
                  type: "button",
                  onClick: withModifiers(_ctx.selectNewPhoto, ["prevent"])
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Cambiar foto ")
                  ]),
                  _: 1
                }, 8, ["onClick"]), [
                  [vShow, _ctx.photoPreview || _ctx.user.picture]
                ]),
                withDirectives(createVNode(_component_jet_button, {
                  class: [{ "opacity-25": _ctx.form.processing }, "mt-2 ml-4 md:mx-auto"],
                  disabled: _ctx.form.processing
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Guardar ")
                  ]),
                  _: 1
                }, 8, ["class", "disabled"]), [
                  [vShow, _ctx.photoPreview]
                ])
              ])
            ]),
            createVNode(_component_jet_input_error, {
              message: _ctx.form.errors.picture,
              class: "mt-2"
            }, null, 8, ["message"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Profile/Partials/UpdatePhoto.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const UpdatePhoto = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  UpdatePhoto as default
};
