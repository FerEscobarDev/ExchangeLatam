import { defineComponent, resolveComponent, mergeProps, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { A as AppLayoutAdmin } from "./AppLayoutAdmin.f439c04f.mjs";
import UpdateData from "./UpdateData.ee1b4306.mjs";
import ShowDocument from "./ShowDocument.39e12259.mjs";
import FormVerification from "./FormVerification.478e7465.mjs";
import { Link } from "@inertiajs/inertia-vue3";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.43be4956.mjs";
import "./ResponsiveNavLink.105dcaab.mjs";
import "./logoweb.e431fb6b.mjs";
import "./NavLink.67838388.mjs";
import "@fortawesome/vue-fontawesome";
import "@fortawesome/fontawesome-svg-core";
import "@fortawesome/free-solid-svg-icons";
import "@fortawesome/free-brands-svg-icons";
import "./Button.feee2cab.mjs";
import "./Form.a498045b.mjs";
import "./Input.c38a320e.mjs";
import "./InputError.bc94ef1e.mjs";
import "./Label.ceceda67.mjs";
import "./Select.c3ee249a.mjs";
import "@headlessui/vue";
import "@heroicons/vue/solid";
import "./ActionMessage.1772107a.mjs";
import "./SecondaryButton.987206fe.mjs";
const _sfc_main = defineComponent({
  components: {
    AppLayoutAdmin,
    UpdateData,
    ShowDocument,
    FormVerification,
    Link
  },
  props: {
    sessions: Object,
    client: Object
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_AppLayoutAdmin = resolveComponent("AppLayoutAdmin");
  const _component_Link = resolveComponent("Link");
  const _component_ShowDocument = resolveComponent("ShowDocument");
  const _component_update_data = resolveComponent("update-data");
  const _component_FormVerification = resolveComponent("FormVerification");
  _push(ssrRenderComponent(_component_AppLayoutAdmin, mergeProps({ title: "Verification" }, _attrs), {
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
        _push2(`Verificaci\xF3n del Usuario </h2>`);
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
            createTextVNode("Verificaci\xF3n del Usuario ")
          ])
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="py-6 w-full"${_scopeId}><div class="flex mx-auto lg:mr-4"${_scopeId}><div class="container mx-auto sm:px-6 lg:px-8"${_scopeId}><div class="bg-white shadow-xl sm:rounded-lg mt-5 overflow-visible grid grid-cols-8 gap-4"${_scopeId}><div class="col-span-8"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_ShowDocument, {
          verification: _ctx.client.verification
        }, null, _parent2, _scopeId));
        _push2(`</div><div class="col-span-8"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_update_data, { client: _ctx.client }, null, _parent2, _scopeId));
        _push2(`</div><div class="col-span-8"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_FormVerification, { client: _ctx.client }, null, _parent2, _scopeId));
        _push2(`</div></div></div></div></div>`);
      } else {
        return [
          createVNode("div", { class: "py-6 w-full" }, [
            createVNode("div", { class: "flex mx-auto lg:mr-4" }, [
              createVNode("div", { class: "container mx-auto sm:px-6 lg:px-8" }, [
                createVNode("div", { class: "bg-white shadow-xl sm:rounded-lg mt-5 overflow-visible grid grid-cols-8 gap-4" }, [
                  createVNode("div", { class: "col-span-8" }, [
                    createVNode(_component_ShowDocument, {
                      verification: _ctx.client.verification
                    }, null, 8, ["verification"])
                  ]),
                  createVNode("div", { class: "col-span-8" }, [
                    createVNode(_component_update_data, { client: _ctx.client }, null, 8, ["client"])
                  ]),
                  createVNode("div", { class: "col-span-8" }, [
                    createVNode(_component_FormVerification, { client: _ctx.client }, null, 8, ["client"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Verifications/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Index as default
};
