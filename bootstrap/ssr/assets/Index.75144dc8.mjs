import { defineComponent, resolveComponent, mergeProps, withCtx, createTextVNode, createVNode, withModifiers, openBlock, createBlock, Fragment, renderList, toDisplayString, createCommentVNode, useSSRContext } from "vue";
import { A as AppLayoutAdmin } from "./AppLayoutAdmin.8e91ebaa.mjs";
import { Link } from "@inertiajs/inertia-vue3";
import { P as Pagination } from "./Pagination.34de1776.mjs";
import { _ as _sfc_main$1 } from "./DangerButton.2ed2ad18.mjs";
import { _ as _sfc_main$2 } from "./ConfirmationModal.956871cf.mjs";
import { _ as _sfc_main$3 } from "./SecondaryButton.987206fe.mjs";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.43be4956.mjs";
import "./ResponsiveNavLink.105dcaab.mjs";
import "./logoweb.e431fb6b.mjs";
import "./NavLink.e5cf4d5a.mjs";
import "@fortawesome/free-solid-svg-icons";
import "@fortawesome/free-brands-svg-icons";
import "./Modal.688f150f.mjs";
library.add();
const _sfc_main = defineComponent({
  components: {
    AppLayoutAdmin,
    Link,
    Pagination,
    FontAwesomeIcon,
    DangerButton: _sfc_main$1,
    ConfirmationModal: _sfc_main$2,
    JetSecondaryButton: _sfc_main$3
  },
  props: {
    permissions: Object
  },
  data() {
    return {
      form: this.$inertia.form({
        _method: "delete"
      }),
      delete: false,
      id2: null
    };
  },
  methods: {
    show(id) {
      if (id === this.id2) {
        return true;
      } else {
        return false;
      }
    },
    deletePermission(id = null) {
      if (this.delete) {
        this.delete = false;
        this.id2 = null;
      } else {
        this.delete = true;
        this.id2 = id;
      }
    },
    submit(id) {
      this.form.post(this.route("admin.permissionDestroy", id), {
        onSuccess: () => this.deletePermission()
      });
    }
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_app_layout_admin = resolveComponent("app-layout-admin");
  const _component_Link = resolveComponent("Link");
  const _component_DangerButton = resolveComponent("DangerButton");
  const _component_ConfirmationModal = resolveComponent("ConfirmationModal");
  const _component_jet_secondary_button = resolveComponent("jet-secondary-button");
  const _component_pagination = resolveComponent("pagination");
  _push(ssrRenderComponent(_component_app_layout_admin, mergeProps({ title: "Permisos" }, _attrs), {
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
        _push2(`Listado de Permisos </h2>`);
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
            createTextVNode("Listado de Permisos ")
          ])
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="py-6 w-full"${_scopeId}><div class="flex mx-auto lg:mr-4"${_scopeId}><div class="container mx-auto sm:px-6 lg:px-8"${_scopeId}><div class="overflow-hidden shadow-xl sm:rounded-lg"${_scopeId}><div class="flex flex-col"${_scopeId}><div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8"${_scopeId}><div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"${_scopeId}><div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"${_scopeId}><div class="flex items-center justify-end p-5 w-full bg-white"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Link, {
          href: _ctx.route("admin.permissionCreate"),
          class: "inline-flex items-center px-4 py-2 bg-dark-brand border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Crear Permiso `);
            } else {
              return [
                createTextVNode(" Crear Permiso ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div><table class="min-w-full divide-y divide-gray-200"${_scopeId}><thead class="bg-gray-50"${_scopeId}><tr${_scopeId}><th scope="col" class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"${_scopeId}> ID </th><th scope="col" class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"${_scopeId}> Permiso </th><th scope="col" class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"${_scopeId}> Ruta </th><th scope="col" class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"${_scopeId}> Acciones </th></tr></thead>`);
        if (_ctx.permissions.data[0]) {
          _push2(`<tbody class="bg-white divide-y divide-gray-200"${_scopeId}><!--[-->`);
          ssrRenderList(_ctx.permissions.data, (permission) => {
            _push2(`<tr class="odd:bg-white even:bg-gray-50"${_scopeId}><td class="text-center px-6 py-4 whitespace-nowrap text-sm font-medium"${_scopeId}>${ssrInterpolate(permission.id)}</td><td class="text-center px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-500"${_scopeId}>${ssrInterpolate(permission.description)}</td><td class="text-center px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-500"${_scopeId}>${ssrInterpolate(permission.name)}</td><td class="text-center px-6 py-4 whitespace-nowrap text-sm font-medium flex justify-center items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Link, {
              href: _ctx.route("admin.permissionEdit", permission.id),
              class: "inline-flex items-center px-4 py-2 mr-5 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest bg-orange-500 hover:bg-orange-700 active:bg-orange-900 focus:outline-none focus:border-orange-900 focus:ring focus:ring-orange-300 disabled:opacity-25 transition"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Editar `);
                } else {
                  return [
                    createTextVNode(" Editar ")
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_DangerButton, {
              onClick: ($event) => _ctx.deletePermission(permission.id),
              key: permission.id
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Eliminar `);
                } else {
                  return [
                    createTextVNode(" Eliminar ")
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ConfirmationModal, {
              show: _ctx.show(permission.id),
              onClose: ($event) => _ctx.deletePermission(permission.id),
              key: permission.id
            }, {
              title: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Eliminar Permiso `);
                } else {
                  return [
                    createTextVNode(" Eliminar Permiso ")
                  ];
                }
              }),
              content: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \xBFSeguro que quieres eliminar este permiso? `);
                } else {
                  return [
                    createTextVNode(" \xBFSeguro que quieres eliminar este permiso? ")
                  ];
                }
              }),
              footer: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<form class="mr-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_DangerButton, {
                    class: { "opacity-25": _ctx.form.processing },
                    disabled: _ctx.form.processing
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Eliminar `);
                      } else {
                        return [
                          createTextVNode(" Eliminar ")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(`</form>`);
                  _push3(ssrRenderComponent(_component_jet_secondary_button, {
                    onClick: ($event) => _ctx.deletePermission()
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Cerrar `);
                      } else {
                        return [
                          createTextVNode(" Cerrar ")
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("form", {
                      onSubmit: withModifiers(($event) => _ctx.submit(permission.id), ["prevent"]),
                      class: "mr-4"
                    }, [
                      createVNode(_component_DangerButton, {
                        class: { "opacity-25": _ctx.form.processing },
                        disabled: _ctx.form.processing
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Eliminar ")
                        ]),
                        _: 1
                      }, 8, ["class", "disabled"])
                    ], 40, ["onSubmit"]),
                    createVNode(_component_jet_secondary_button, {
                      onClick: ($event) => _ctx.deletePermission()
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Cerrar ")
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`</td></tr>`);
          });
          _push2(`<!--]--></tbody>`);
        } else {
          _push2(`<tbody class="bg-white divide-y divide-gray-200"${_scopeId}><tr${_scopeId}><td class="px-6 py-4 w-full text-base text-gray-500 text-center" colspan="7"${_scopeId}>No se encontraron resultados</td></tr></tbody>`);
        }
        _push2(`</table>`);
        if (_ctx.permissions.data[0]) {
          _push2(ssrRenderComponent(_component_pagination, { paginating: _ctx.permissions }, null, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div></div></div></div></div></div></div></div>`);
      } else {
        return [
          createVNode("div", { class: "py-6 w-full" }, [
            createVNode("div", { class: "flex mx-auto lg:mr-4" }, [
              createVNode("div", { class: "container mx-auto sm:px-6 lg:px-8" }, [
                createVNode("div", { class: "overflow-hidden shadow-xl sm:rounded-lg" }, [
                  createVNode("div", { class: "flex flex-col" }, [
                    createVNode("div", { class: "-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8" }, [
                      createVNode("div", { class: "py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8" }, [
                        createVNode("div", { class: "shadow overflow-hidden border-b border-gray-200 sm:rounded-lg" }, [
                          createVNode("div", { class: "flex items-center justify-end p-5 w-full bg-white" }, [
                            createVNode(_component_Link, {
                              href: _ctx.route("admin.permissionCreate"),
                              class: "inline-flex items-center px-4 py-2 bg-dark-brand border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Crear Permiso ")
                              ]),
                              _: 1
                            }, 8, ["href"])
                          ]),
                          createVNode("table", { class: "min-w-full divide-y divide-gray-200" }, [
                            createVNode("thead", { class: "bg-gray-50" }, [
                              createVNode("tr", null, [
                                createVNode("th", {
                                  scope: "col",
                                  class: "px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                                }, " ID "),
                                createVNode("th", {
                                  scope: "col",
                                  class: "px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                                }, " Permiso "),
                                createVNode("th", {
                                  scope: "col",
                                  class: "px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                                }, " Ruta "),
                                createVNode("th", {
                                  scope: "col",
                                  class: "px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                                }, " Acciones ")
                              ])
                            ]),
                            _ctx.permissions.data[0] ? (openBlock(), createBlock("tbody", {
                              key: 0,
                              class: "bg-white divide-y divide-gray-200"
                            }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(_ctx.permissions.data, (permission) => {
                                return openBlock(), createBlock("tr", {
                                  key: permission.id,
                                  class: "odd:bg-white even:bg-gray-50"
                                }, [
                                  createVNode("td", { class: "text-center px-6 py-4 whitespace-nowrap text-sm font-medium" }, toDisplayString(permission.id), 1),
                                  createVNode("td", { class: "text-center px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-500" }, toDisplayString(permission.description), 1),
                                  createVNode("td", { class: "text-center px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-500" }, toDisplayString(permission.name), 1),
                                  createVNode("td", { class: "text-center px-6 py-4 whitespace-nowrap text-sm font-medium flex justify-center items-center" }, [
                                    createVNode(_component_Link, {
                                      href: _ctx.route("admin.permissionEdit", permission.id),
                                      class: "inline-flex items-center px-4 py-2 mr-5 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest bg-orange-500 hover:bg-orange-700 active:bg-orange-900 focus:outline-none focus:border-orange-900 focus:ring focus:ring-orange-300 disabled:opacity-25 transition"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Editar ")
                                      ]),
                                      _: 2
                                    }, 1032, ["href"]),
                                    (openBlock(), createBlock(_component_DangerButton, {
                                      onClick: ($event) => _ctx.deletePermission(permission.id),
                                      key: permission.id
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Eliminar ")
                                      ]),
                                      _: 2
                                    }, 1032, ["onClick"])),
                                    (openBlock(), createBlock(_component_ConfirmationModal, {
                                      show: _ctx.show(permission.id),
                                      onClose: ($event) => _ctx.deletePermission(permission.id),
                                      key: permission.id
                                    }, {
                                      title: withCtx(() => [
                                        createTextVNode(" Eliminar Permiso ")
                                      ]),
                                      content: withCtx(() => [
                                        createTextVNode(" \xBFSeguro que quieres eliminar este permiso? ")
                                      ]),
                                      footer: withCtx(() => [
                                        createVNode("form", {
                                          onSubmit: withModifiers(($event) => _ctx.submit(permission.id), ["prevent"]),
                                          class: "mr-4"
                                        }, [
                                          createVNode(_component_DangerButton, {
                                            class: { "opacity-25": _ctx.form.processing },
                                            disabled: _ctx.form.processing
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Eliminar ")
                                            ]),
                                            _: 1
                                          }, 8, ["class", "disabled"])
                                        ], 40, ["onSubmit"]),
                                        createVNode(_component_jet_secondary_button, {
                                          onClick: ($event) => _ctx.deletePermission()
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Cerrar ")
                                          ]),
                                          _: 1
                                        }, 8, ["onClick"])
                                      ]),
                                      _: 2
                                    }, 1032, ["show", "onClose"]))
                                  ])
                                ]);
                              }), 128))
                            ])) : (openBlock(), createBlock("tbody", {
                              key: 1,
                              class: "bg-white divide-y divide-gray-200"
                            }, [
                              createVNode("tr", null, [
                                createVNode("td", {
                                  class: "px-6 py-4 w-full text-base text-gray-500 text-center",
                                  colspan: "7"
                                }, "No se encontraron resultados")
                              ])
                            ]))
                          ]),
                          _ctx.permissions.data[0] ? (openBlock(), createBlock(_component_pagination, {
                            key: 0,
                            paginating: _ctx.permissions
                          }, null, 8, ["paginating"])) : createCommentVNode("", true)
                        ])
                      ])
                    ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Permissions/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Index as default
};
