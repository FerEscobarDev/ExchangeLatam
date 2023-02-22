import { defineComponent, resolveComponent, mergeProps, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { A as AppLayout } from "./AppLayout.ea9195d2.mjs";
import UpdatePasswordForm from "./UpdatePasswordForm.2f561e8d.mjs";
import { Link } from "@inertiajs/inertia-vue3";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.43be4956.mjs";
import "./ResponsiveNavLink.105dcaab.mjs";
import "./logoweb.e431fb6b.mjs";
import "./NavLink.e5cf4d5a.mjs";
import "@fortawesome/vue-fontawesome";
import "@fortawesome/fontawesome-svg-core";
import "@fortawesome/free-solid-svg-icons";
import "@fortawesome/free-brands-svg-icons";
import "./ActionMessage.1772107a.mjs";
import "./Button.feee2cab.mjs";
import "./Form.e2d7b3ed.mjs";
import "./Input.c38a320e.mjs";
import "./InputError.bc94ef1e.mjs";
import "./Label.ceceda67.mjs";
const _sfc_main = defineComponent({
  props: ["sessions", "departaments", "cities"],
  components: {
    AppLayout,
    UpdatePasswordForm,
    Link
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_app_layout = resolveComponent("app-layout");
  const _component_Link = resolveComponent("Link");
  const _component_update_password_form = resolveComponent("update-password-form");
  _push(ssrRenderComponent(_component_app_layout, mergeProps({ title: "Perfil" }, _attrs), {
    header: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h2 class="font-semibold text-xl text-gray-700 leading-tight"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Link, {
          href: _ctx.route("dashboard"),
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
        _push2(`Cambiar contrase\xF1a </h2>`);
      } else {
        return [
          createVNode("h2", { class: "font-semibold text-xl text-gray-700 leading-tight" }, [
            createVNode(_component_Link, {
              href: _ctx.route("dashboard"),
              class: "text-blue-brand-gradient1 font-semibold hover:text-blue-brand"
            }, {
              default: withCtx(() => [
                createTextVNode("Dashboard/")
              ]),
              _: 1
            }, 8, ["href"]),
            createTextVNode("Cambiar contrase\xF1a ")
          ])
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="px-3 lg:mr-4 max-w-full flex flex-col shadow border border-gray-200 sm:rounded-lg bg-white"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_update_password_form, {
          user: _ctx.$page.props.user
        }, null, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "px-3 lg:mr-4 max-w-full flex flex-col shadow border border-gray-200 sm:rounded-lg bg-white" }, [
            createVNode(_component_update_password_form, {
              user: _ctx.$page.props.user
            }, null, 8, ["user"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Profile/ChangePassword.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ChangePassword = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  ChangePassword as default
};
