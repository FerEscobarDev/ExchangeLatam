import { mergeProps, withCtx, createVNode, openBlock, createBlock, Fragment, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { A as AppLayout } from "./AppLayout.8882d74f.mjs";
import _sfc_main$3 from "./DeleteTeamForm.6a65866f.mjs";
import { J as JetSectionBorder } from "./SectionBorder.4e05c514.mjs";
import _sfc_main$2 from "./TeamMemberManager.8a6d7b05.mjs";
import _sfc_main$1 from "./UpdateTeamNameForm.090f5213.mjs";
import "@inertiajs/inertia-vue3";
import "./ResponsiveNavLink.105dcaab.mjs";
import "./logoweb.e431fb6b.mjs";
import "./_plugin-vue_export-helper.43be4956.mjs";
import "./NavLink.67838388.mjs";
import "@fortawesome/vue-fontawesome";
import "@fortawesome/fontawesome-svg-core";
import "@fortawesome/free-solid-svg-icons";
import "@fortawesome/free-brands-svg-icons";
import "./ActionSection.f2b811fa.mjs";
import "./SectionTitle.3d2d12a1.mjs";
import "./ConfirmationModal.956871cf.mjs";
import "./Modal.688f150f.mjs";
import "./DangerButton.2ed2ad18.mjs";
import "./SecondaryButton.987206fe.mjs";
import "@inertiajs/inertia";
import "./ActionMessage.1772107a.mjs";
import "./Button.feee2cab.mjs";
import "./DialogModal.04a42090.mjs";
import "./FormSection.5192c88f.mjs";
import "./Input.c38a320e.mjs";
import "./InputError.bc94ef1e.mjs";
import "./Label.ceceda67.mjs";
const _sfc_main = {
  __name: "Show",
  __ssrInlineRender: true,
  props: {
    team: Object,
    availableRoles: Array,
    permissions: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(AppLayout, mergeProps({ title: "Team Settings" }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="font-semibold text-xl text-gray-800 leading-tight"${_scopeId}> Team Settings </h2>`);
          } else {
            return [
              createVNode("h2", { class: "font-semibold text-xl text-gray-800 leading-tight" }, " Team Settings ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}><div class="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$1, {
              team: __props.team,
              permissions: __props.permissions
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$2, {
              class: "mt-10 sm:mt-0",
              team: __props.team,
              "available-roles": __props.availableRoles,
              "user-permissions": __props.permissions
            }, null, _parent2, _scopeId));
            if (__props.permissions.canDeleteTeam && !__props.team.personal_team) {
              _push2(`<!--[-->`);
              _push2(ssrRenderComponent(JetSectionBorder, null, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$3, {
                class: "mt-10 sm:mt-0",
                team: __props.team
              }, null, _parent2, _scopeId));
              _push2(`<!--]-->`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("div", { class: "max-w-7xl mx-auto py-10 sm:px-6 lg:px-8" }, [
                  createVNode(_sfc_main$1, {
                    team: __props.team,
                    permissions: __props.permissions
                  }, null, 8, ["team", "permissions"]),
                  createVNode(_sfc_main$2, {
                    class: "mt-10 sm:mt-0",
                    team: __props.team,
                    "available-roles": __props.availableRoles,
                    "user-permissions": __props.permissions
                  }, null, 8, ["team", "available-roles", "user-permissions"]),
                  __props.permissions.canDeleteTeam && !__props.team.personal_team ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                    createVNode(JetSectionBorder),
                    createVNode(_sfc_main$3, {
                      class: "mt-10 sm:mt-0",
                      team: __props.team
                    }, null, 8, ["team"])
                  ], 64)) : createCommentVNode("", true)
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Teams/Show.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
