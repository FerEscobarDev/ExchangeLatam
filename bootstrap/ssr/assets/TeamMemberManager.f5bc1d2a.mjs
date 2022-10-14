import { ref, withCtx, createTextVNode, unref, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { Inertia } from "@inertiajs/inertia";
import { useForm, usePage } from "@inertiajs/inertia-vue3";
import { _ as _sfc_main$5 } from "./ActionMessage.1772107a.mjs";
import { _ as _sfc_main$7 } from "./Modal.cba2064f.mjs";
import { _ as _sfc_main$6 } from "./Button.10379eef.mjs";
import { _ as _sfc_main$a } from "./ConfirmationModal.0914172a.mjs";
import { _ as _sfc_main$b } from "./DangerButton.f1676f49.mjs";
import { _ as _sfc_main$8 } from "./DialogModal.992e94bd.mjs";
import { _ as _sfc_main$1 } from "./FormSection.5192c88f.mjs";
import { _ as _sfc_main$3, a as _sfc_main$4 } from "./InputError.6c0d0b83.mjs";
import { _ as _sfc_main$2 } from "./Label.ceceda67.mjs";
import { _ as _sfc_main$9 } from "./SecondaryButton.1e2440a9.mjs";
import { J as JetSectionBorder } from "./SectionBorder.4e05c514.mjs";
import "./SectionTitle.3d2d12a1.mjs";
import "./_plugin-vue_export-helper.43be4956.mjs";
const _sfc_main = {
  __name: "TeamMemberManager",
  __ssrInlineRender: true,
  props: {
    team: Object,
    availableRoles: Array,
    userPermissions: Object
  },
  setup(__props) {
    const props = __props;
    const addTeamMemberForm = useForm({
      email: "",
      role: null
    });
    const updateRoleForm = useForm({
      role: null
    });
    const leaveTeamForm = useForm();
    const removeTeamMemberForm = useForm();
    const currentlyManagingRole = ref(false);
    const managingRoleFor = ref(null);
    const confirmingLeavingTeam = ref(false);
    const teamMemberBeingRemoved = ref(null);
    const addTeamMember = () => {
      addTeamMemberForm.post(route("team-members.store", props.team), {
        errorBag: "addTeamMember",
        preserveScroll: true,
        onSuccess: () => addTeamMemberForm.reset()
      });
    };
    const cancelTeamInvitation = (invitation) => {
      Inertia.delete(route("team-invitations.destroy", invitation), {
        preserveScroll: true
      });
    };
    const manageRole = (teamMember) => {
      managingRoleFor.value = teamMember;
      updateRoleForm.role = teamMember.membership.role;
      currentlyManagingRole.value = true;
    };
    const updateRole = () => {
      updateRoleForm.put(route("team-members.update", [props.team, managingRoleFor.value]), {
        preserveScroll: true,
        onSuccess: () => currentlyManagingRole.value = false
      });
    };
    const confirmLeavingTeam = () => {
      confirmingLeavingTeam.value = true;
    };
    const leaveTeam = () => {
      leaveTeamForm.delete(route("team-members.destroy", [props.team, usePage().props.value.user]));
    };
    const confirmTeamMemberRemoval = (teamMember) => {
      teamMemberBeingRemoved.value = teamMember;
    };
    const removeTeamMember = () => {
      removeTeamMemberForm.delete(route("team-members.destroy", [props.team, teamMemberBeingRemoved.value]), {
        errorBag: "removeTeamMember",
        preserveScroll: true,
        preserveState: true,
        onSuccess: () => teamMemberBeingRemoved.value = null
      });
    };
    const displayableRole = (role) => {
      return props.availableRoles.find((r) => r.key === role).name;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (__props.userPermissions.canAddTeamMembers) {
        _push(`<div>`);
        _push(ssrRenderComponent(JetSectionBorder, null, null, _parent));
        _push(ssrRenderComponent(_sfc_main$1, { onSubmitted: addTeamMember }, {
          title: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Add Team Member `);
            } else {
              return [
                createTextVNode(" Add Team Member ")
              ];
            }
          }),
          description: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Add a new team member to your team, allowing them to collaborate with you. `);
            } else {
              return [
                createTextVNode(" Add a new team member to your team, allowing them to collaborate with you. ")
              ];
            }
          }),
          form: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="col-span-6"${_scopeId}><div class="max-w-xl text-sm text-gray-600"${_scopeId}> Please provide the email address of the person you would like to add to this team. </div></div><div class="col-span-6 sm:col-span-4"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$2, {
                for: "email",
                value: "Email"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$3, {
                id: "email",
                modelValue: unref(addTeamMemberForm).email,
                "onUpdate:modelValue": ($event) => unref(addTeamMemberForm).email = $event,
                type: "email",
                class: "mt-1 block w-full"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$4, {
                message: unref(addTeamMemberForm).errors.email,
                class: "mt-2"
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
              if (__props.availableRoles.length > 0) {
                _push2(`<div class="col-span-6 lg:col-span-4"${_scopeId}>`);
                _push2(ssrRenderComponent(_sfc_main$2, {
                  for: "roles",
                  value: "Role"
                }, null, _parent2, _scopeId));
                _push2(ssrRenderComponent(_sfc_main$4, {
                  message: unref(addTeamMemberForm).errors.role,
                  class: "mt-2"
                }, null, _parent2, _scopeId));
                _push2(`<div class="relative z-0 mt-1 border border-gray-200 rounded-lg cursor-pointer"${_scopeId}><!--[-->`);
                ssrRenderList(__props.availableRoles, (role, i) => {
                  _push2(`<button type="button" class="${ssrRenderClass([{ "border-t border-gray-200 rounded-t-none": i > 0, "rounded-b-none": i != Object.keys(__props.availableRoles).length - 1 }, "relative px-4 py-3 inline-flex w-full rounded-lg focus:z-10 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200"])}"${_scopeId}><div class="${ssrRenderClass({ "opacity-50": unref(addTeamMemberForm).role && unref(addTeamMemberForm).role != role.key })}"${_scopeId}><div class="flex items-center"${_scopeId}><div class="${ssrRenderClass([{ "font-semibold": unref(addTeamMemberForm).role == role.key }, "text-sm text-gray-600"])}"${_scopeId}>${ssrInterpolate(role.name)}</div>`);
                  if (unref(addTeamMemberForm).role == role.key) {
                    _push2(`<svg class="ml-2 h-5 w-5 text-green-400" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"${_scopeId}></path></svg>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(`</div><div class="mt-2 text-xs text-gray-600 text-left"${_scopeId}>${ssrInterpolate(role.description)}</div></div></button>`);
                });
                _push2(`<!--]--></div></div>`);
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                createVNode("div", { class: "col-span-6" }, [
                  createVNode("div", { class: "max-w-xl text-sm text-gray-600" }, " Please provide the email address of the person you would like to add to this team. ")
                ]),
                createVNode("div", { class: "col-span-6 sm:col-span-4" }, [
                  createVNode(_sfc_main$2, {
                    for: "email",
                    value: "Email"
                  }),
                  createVNode(_sfc_main$3, {
                    id: "email",
                    modelValue: unref(addTeamMemberForm).email,
                    "onUpdate:modelValue": ($event) => unref(addTeamMemberForm).email = $event,
                    type: "email",
                    class: "mt-1 block w-full"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$4, {
                    message: unref(addTeamMemberForm).errors.email,
                    class: "mt-2"
                  }, null, 8, ["message"])
                ]),
                __props.availableRoles.length > 0 ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "col-span-6 lg:col-span-4"
                }, [
                  createVNode(_sfc_main$2, {
                    for: "roles",
                    value: "Role"
                  }),
                  createVNode(_sfc_main$4, {
                    message: unref(addTeamMemberForm).errors.role,
                    class: "mt-2"
                  }, null, 8, ["message"]),
                  createVNode("div", { class: "relative z-0 mt-1 border border-gray-200 rounded-lg cursor-pointer" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(__props.availableRoles, (role, i) => {
                      return openBlock(), createBlock("button", {
                        key: role.key,
                        type: "button",
                        class: ["relative px-4 py-3 inline-flex w-full rounded-lg focus:z-10 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200", { "border-t border-gray-200 rounded-t-none": i > 0, "rounded-b-none": i != Object.keys(__props.availableRoles).length - 1 }],
                        onClick: ($event) => unref(addTeamMemberForm).role = role.key
                      }, [
                        createVNode("div", {
                          class: { "opacity-50": unref(addTeamMemberForm).role && unref(addTeamMemberForm).role != role.key }
                        }, [
                          createVNode("div", { class: "flex items-center" }, [
                            createVNode("div", {
                              class: ["text-sm text-gray-600", { "font-semibold": unref(addTeamMemberForm).role == role.key }]
                            }, toDisplayString(role.name), 3),
                            unref(addTeamMemberForm).role == role.key ? (openBlock(), createBlock("svg", {
                              key: 0,
                              class: "ml-2 h-5 w-5 text-green-400",
                              fill: "none",
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round",
                              "stroke-width": "2",
                              stroke: "currentColor",
                              viewBox: "0 0 24 24"
                            }, [
                              createVNode("path", { d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" })
                            ])) : createCommentVNode("", true)
                          ]),
                          createVNode("div", { class: "mt-2 text-xs text-gray-600 text-left" }, toDisplayString(role.description), 1)
                        ], 2)
                      ], 10, ["onClick"]);
                    }), 128))
                  ])
                ])) : createCommentVNode("", true)
              ];
            }
          }),
          actions: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_sfc_main$5, {
                on: unref(addTeamMemberForm).recentlySuccessful,
                class: "mr-3"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Added. `);
                  } else {
                    return [
                      createTextVNode(" Added. ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$6, {
                class: { "opacity-25": unref(addTeamMemberForm).processing },
                disabled: unref(addTeamMemberForm).processing
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Add `);
                  } else {
                    return [
                      createTextVNode(" Add ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_sfc_main$5, {
                  on: unref(addTeamMemberForm).recentlySuccessful,
                  class: "mr-3"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Added. ")
                  ]),
                  _: 1
                }, 8, ["on"]),
                createVNode(_sfc_main$6, {
                  class: { "opacity-25": unref(addTeamMemberForm).processing },
                  disabled: unref(addTeamMemberForm).processing
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Add ")
                  ]),
                  _: 1
                }, 8, ["class", "disabled"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.team.team_invitations.length > 0 && __props.userPermissions.canAddTeamMembers) {
        _push(`<div>`);
        _push(ssrRenderComponent(JetSectionBorder, null, null, _parent));
        _push(ssrRenderComponent(_sfc_main$7, { class: "mt-10 sm:mt-0" }, {
          title: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Pending Team Invitations `);
            } else {
              return [
                createTextVNode(" Pending Team Invitations ")
              ];
            }
          }),
          description: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` These people have been invited to your team and have been sent an invitation email. They may join the team by accepting the email invitation. `);
            } else {
              return [
                createTextVNode(" These people have been invited to your team and have been sent an invitation email. They may join the team by accepting the email invitation. ")
              ];
            }
          }),
          content: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="space-y-6"${_scopeId}><!--[-->`);
              ssrRenderList(__props.team.team_invitations, (invitation) => {
                _push2(`<div class="flex items-center justify-between"${_scopeId}><div class="text-gray-600"${_scopeId}>${ssrInterpolate(invitation.email)}</div><div class="flex items-center"${_scopeId}>`);
                if (__props.userPermissions.canRemoveTeamMembers) {
                  _push2(`<button class="cursor-pointer ml-6 text-sm text-red-500 focus:outline-none"${_scopeId}> Cancel </button>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div></div>`);
              });
              _push2(`<!--]--></div>`);
            } else {
              return [
                createVNode("div", { class: "space-y-6" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(__props.team.team_invitations, (invitation) => {
                    return openBlock(), createBlock("div", {
                      key: invitation.id,
                      class: "flex items-center justify-between"
                    }, [
                      createVNode("div", { class: "text-gray-600" }, toDisplayString(invitation.email), 1),
                      createVNode("div", { class: "flex items-center" }, [
                        __props.userPermissions.canRemoveTeamMembers ? (openBlock(), createBlock("button", {
                          key: 0,
                          class: "cursor-pointer ml-6 text-sm text-red-500 focus:outline-none",
                          onClick: ($event) => cancelTeamInvitation(invitation)
                        }, " Cancel ", 8, ["onClick"])) : createCommentVNode("", true)
                      ])
                    ]);
                  }), 128))
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.team.users.length > 0) {
        _push(`<div>`);
        _push(ssrRenderComponent(JetSectionBorder, null, null, _parent));
        _push(ssrRenderComponent(_sfc_main$7, { class: "mt-10 sm:mt-0" }, {
          title: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Team Members `);
            } else {
              return [
                createTextVNode(" Team Members ")
              ];
            }
          }),
          description: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` All of the people that are part of this team. `);
            } else {
              return [
                createTextVNode(" All of the people that are part of this team. ")
              ];
            }
          }),
          content: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="space-y-6"${_scopeId}><!--[-->`);
              ssrRenderList(__props.team.users, (user) => {
                _push2(`<div class="flex items-center justify-between"${_scopeId}><div class="flex items-center"${_scopeId}><img class="w-8 h-8 rounded-full"${ssrRenderAttr("src", user.profile_photo_url)}${ssrRenderAttr("alt", user.name)}${_scopeId}><div class="ml-4"${_scopeId}>${ssrInterpolate(user.name)}</div></div><div class="flex items-center"${_scopeId}>`);
                if (__props.userPermissions.canAddTeamMembers && __props.availableRoles.length) {
                  _push2(`<button class="ml-2 text-sm text-gray-400 underline"${_scopeId}>${ssrInterpolate(displayableRole(user.membership.role))}</button>`);
                } else if (__props.availableRoles.length) {
                  _push2(`<div class="ml-2 text-sm text-gray-400"${_scopeId}>${ssrInterpolate(displayableRole(user.membership.role))}</div>`);
                } else {
                  _push2(`<!---->`);
                }
                if (_ctx.$page.props.user.id === user.id) {
                  _push2(`<button class="cursor-pointer ml-6 text-sm text-red-500"${_scopeId}> Leave </button>`);
                } else {
                  _push2(`<!---->`);
                }
                if (__props.userPermissions.canRemoveTeamMembers) {
                  _push2(`<button class="cursor-pointer ml-6 text-sm text-red-500"${_scopeId}> Remove </button>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div></div>`);
              });
              _push2(`<!--]--></div>`);
            } else {
              return [
                createVNode("div", { class: "space-y-6" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(__props.team.users, (user) => {
                    return openBlock(), createBlock("div", {
                      key: user.id,
                      class: "flex items-center justify-between"
                    }, [
                      createVNode("div", { class: "flex items-center" }, [
                        createVNode("img", {
                          class: "w-8 h-8 rounded-full",
                          src: user.profile_photo_url,
                          alt: user.name
                        }, null, 8, ["src", "alt"]),
                        createVNode("div", { class: "ml-4" }, toDisplayString(user.name), 1)
                      ]),
                      createVNode("div", { class: "flex items-center" }, [
                        __props.userPermissions.canAddTeamMembers && __props.availableRoles.length ? (openBlock(), createBlock("button", {
                          key: 0,
                          class: "ml-2 text-sm text-gray-400 underline",
                          onClick: ($event) => manageRole(user)
                        }, toDisplayString(displayableRole(user.membership.role)), 9, ["onClick"])) : __props.availableRoles.length ? (openBlock(), createBlock("div", {
                          key: 1,
                          class: "ml-2 text-sm text-gray-400"
                        }, toDisplayString(displayableRole(user.membership.role)), 1)) : createCommentVNode("", true),
                        _ctx.$page.props.user.id === user.id ? (openBlock(), createBlock("button", {
                          key: 2,
                          class: "cursor-pointer ml-6 text-sm text-red-500",
                          onClick: confirmLeavingTeam
                        }, " Leave ")) : createCommentVNode("", true),
                        __props.userPermissions.canRemoveTeamMembers ? (openBlock(), createBlock("button", {
                          key: 3,
                          class: "cursor-pointer ml-6 text-sm text-red-500",
                          onClick: ($event) => confirmTeamMemberRemoval(user)
                        }, " Remove ", 8, ["onClick"])) : createCommentVNode("", true)
                      ])
                    ]);
                  }), 128))
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_sfc_main$8, {
        show: currentlyManagingRole.value,
        onClose: ($event) => currentlyManagingRole.value = false
      }, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Manage Role `);
          } else {
            return [
              createTextVNode(" Manage Role ")
            ];
          }
        }),
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (managingRoleFor.value) {
              _push2(`<div${_scopeId}><div class="relative z-0 mt-1 border border-gray-200 rounded-lg cursor-pointer"${_scopeId}><!--[-->`);
              ssrRenderList(__props.availableRoles, (role, i) => {
                _push2(`<button type="button" class="${ssrRenderClass([{ "border-t border-gray-200 rounded-t-none": i > 0, "rounded-b-none": i !== Object.keys(__props.availableRoles).length - 1 }, "relative px-4 py-3 inline-flex w-full rounded-lg focus:z-10 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200"])}"${_scopeId}><div class="${ssrRenderClass({ "opacity-50": unref(updateRoleForm).role && unref(updateRoleForm).role !== role.key })}"${_scopeId}><div class="flex items-center"${_scopeId}><div class="${ssrRenderClass([{ "font-semibold": unref(updateRoleForm).role === role.key }, "text-sm text-gray-600"])}"${_scopeId}>${ssrInterpolate(role.name)}</div>`);
                if (unref(updateRoleForm).role === role.key) {
                  _push2(`<svg class="ml-2 h-5 w-5 text-green-400" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"${_scopeId}><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"${_scopeId}></path></svg>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div><div class="mt-2 text-xs text-gray-600"${_scopeId}>${ssrInterpolate(role.description)}</div></div></button>`);
              });
              _push2(`<!--]--></div></div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              managingRoleFor.value ? (openBlock(), createBlock("div", { key: 0 }, [
                createVNode("div", { class: "relative z-0 mt-1 border border-gray-200 rounded-lg cursor-pointer" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(__props.availableRoles, (role, i) => {
                    return openBlock(), createBlock("button", {
                      key: role.key,
                      type: "button",
                      class: ["relative px-4 py-3 inline-flex w-full rounded-lg focus:z-10 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200", { "border-t border-gray-200 rounded-t-none": i > 0, "rounded-b-none": i !== Object.keys(__props.availableRoles).length - 1 }],
                      onClick: ($event) => unref(updateRoleForm).role = role.key
                    }, [
                      createVNode("div", {
                        class: { "opacity-50": unref(updateRoleForm).role && unref(updateRoleForm).role !== role.key }
                      }, [
                        createVNode("div", { class: "flex items-center" }, [
                          createVNode("div", {
                            class: ["text-sm text-gray-600", { "font-semibold": unref(updateRoleForm).role === role.key }]
                          }, toDisplayString(role.name), 3),
                          unref(updateRoleForm).role === role.key ? (openBlock(), createBlock("svg", {
                            key: 0,
                            class: "ml-2 h-5 w-5 text-green-400",
                            fill: "none",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-width": "2",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24"
                          }, [
                            createVNode("path", { d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" })
                          ])) : createCommentVNode("", true)
                        ]),
                        createVNode("div", { class: "mt-2 text-xs text-gray-600" }, toDisplayString(role.description), 1)
                      ], 2)
                    ], 10, ["onClick"]);
                  }), 128))
                ])
              ])) : createCommentVNode("", true)
            ];
          }
        }),
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$9, {
              onClick: ($event) => currentlyManagingRole.value = false
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Cancel `);
                } else {
                  return [
                    createTextVNode(" Cancel ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$6, {
              class: ["ml-3", { "opacity-25": unref(updateRoleForm).processing }],
              disabled: unref(updateRoleForm).processing,
              onClick: updateRole
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
              createVNode(_sfc_main$9, {
                onClick: ($event) => currentlyManagingRole.value = false
              }, {
                default: withCtx(() => [
                  createTextVNode(" Cancel ")
                ]),
                _: 1
              }, 8, ["onClick"]),
              createVNode(_sfc_main$6, {
                class: ["ml-3", { "opacity-25": unref(updateRoleForm).processing }],
                disabled: unref(updateRoleForm).processing,
                onClick: updateRole
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
      _push(ssrRenderComponent(_sfc_main$a, {
        show: confirmingLeavingTeam.value,
        onClose: ($event) => confirmingLeavingTeam.value = false
      }, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Leave Team `);
          } else {
            return [
              createTextVNode(" Leave Team ")
            ];
          }
        }),
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Are you sure you would like to leave this team? `);
          } else {
            return [
              createTextVNode(" Are you sure you would like to leave this team? ")
            ];
          }
        }),
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$9, {
              onClick: ($event) => confirmingLeavingTeam.value = false
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Cancel `);
                } else {
                  return [
                    createTextVNode(" Cancel ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$b, {
              class: ["ml-3", { "opacity-25": unref(leaveTeamForm).processing }],
              disabled: unref(leaveTeamForm).processing,
              onClick: leaveTeam
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Leave `);
                } else {
                  return [
                    createTextVNode(" Leave ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$9, {
                onClick: ($event) => confirmingLeavingTeam.value = false
              }, {
                default: withCtx(() => [
                  createTextVNode(" Cancel ")
                ]),
                _: 1
              }, 8, ["onClick"]),
              createVNode(_sfc_main$b, {
                class: ["ml-3", { "opacity-25": unref(leaveTeamForm).processing }],
                disabled: unref(leaveTeamForm).processing,
                onClick: leaveTeam
              }, {
                default: withCtx(() => [
                  createTextVNode(" Leave ")
                ]),
                _: 1
              }, 8, ["class", "disabled"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$a, {
        show: teamMemberBeingRemoved.value,
        onClose: ($event) => teamMemberBeingRemoved.value = null
      }, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Remove Team Member `);
          } else {
            return [
              createTextVNode(" Remove Team Member ")
            ];
          }
        }),
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Are you sure you would like to remove this person from the team? `);
          } else {
            return [
              createTextVNode(" Are you sure you would like to remove this person from the team? ")
            ];
          }
        }),
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$9, {
              onClick: ($event) => teamMemberBeingRemoved.value = null
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Cancel `);
                } else {
                  return [
                    createTextVNode(" Cancel ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$b, {
              class: ["ml-3", { "opacity-25": unref(removeTeamMemberForm).processing }],
              disabled: unref(removeTeamMemberForm).processing,
              onClick: removeTeamMember
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Remove `);
                } else {
                  return [
                    createTextVNode(" Remove ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$9, {
                onClick: ($event) => teamMemberBeingRemoved.value = null
              }, {
                default: withCtx(() => [
                  createTextVNode(" Cancel ")
                ]),
                _: 1
              }, 8, ["onClick"]),
              createVNode(_sfc_main$b, {
                class: ["ml-3", { "opacity-25": unref(removeTeamMemberForm).processing }],
                disabled: unref(removeTeamMemberForm).processing,
                onClick: removeTeamMember
              }, {
                default: withCtx(() => [
                  createTextVNode(" Remove ")
                ]),
                _: 1
              }, 8, ["class", "disabled"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Teams/Partials/TeamMemberManager.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
