import { mergeProps, withCtx, createVNode, openBlock, createBlock, Fragment, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AppLayout.83ff4bad.mjs";
import _sfc_main$4 from "./DeleteTeamForm.88f481e9.mjs";
import { J as JetSectionBorder } from "./SectionBorder.4e05c514.mjs";
import _sfc_main$3 from "./TeamMemberManager.f5bc1d2a.mjs";
import _sfc_main$2 from "./UpdateTeamNameForm.e61d6354.mjs";
import "@inertiajs/inertia";
import "@inertiajs/inertia-vue3";
import "./_plugin-vue_export-helper.43be4956.mjs";
import "./Modal.cba2064f.mjs";
import "./SectionTitle.3d2d12a1.mjs";
import "./ConfirmationModal.0914172a.mjs";
import "./DangerButton.f1676f49.mjs";
import "./SecondaryButton.1e2440a9.mjs";
import "./ActionMessage.1772107a.mjs";
import "./Button.10379eef.mjs";
import "./DialogModal.992e94bd.mjs";
import "./FormSection.5192c88f.mjs";
import "./InputError.6c0d0b83.mjs";
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
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({ title: "Team Settings" }, _attrs), {
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
            _push2(ssrRenderComponent(_sfc_main$2, {
              team: __props.team,
              permissions: __props.permissions
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              class: "mt-10 sm:mt-0",
              team: __props.team,
              "available-roles": __props.availableRoles,
              "user-permissions": __props.permissions
            }, null, _parent2, _scopeId));
            if (__props.permissions.canDeleteTeam && !__props.team.personal_team) {
              _push2(`<!--[-->`);
              _push2(ssrRenderComponent(JetSectionBorder, null, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$4, {
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
                  createVNode(_sfc_main$2, {
                    team: __props.team,
                    permissions: __props.permissions
                  }, null, 8, ["team", "permissions"]),
                  createVNode(_sfc_main$3, {
                    class: "mt-10 sm:mt-0",
                    team: __props.team,
                    "available-roles": __props.availableRoles,
                    "user-permissions": __props.permissions
                  }, null, 8, ["team", "available-roles", "user-permissions"]),
                  __props.permissions.canDeleteTeam && !__props.team.personal_team ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                    createVNode(JetSectionBorder),
                    createVNode(_sfc_main$4, {
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
