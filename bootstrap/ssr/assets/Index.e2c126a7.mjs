import { defineComponent, resolveComponent, mergeProps, withCtx, createTextVNode, createVNode, openBlock, createBlock, toDisplayString, withModifiers, Fragment, renderList, createCommentVNode, useSSRContext } from "vue";
import { A as AppLayoutAdmin } from "./AppLayoutAdmin.8e91ebaa.mjs";
import { Link } from "@inertiajs/inertia-vue3";
import { P as Pagination } from "./Pagination.34de1776.mjs";
import { _ as _sfc_main$1 } from "./Input.c38a320e.mjs";
import { _ as _sfc_main$2 } from "./Button.feee2cab.mjs";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCheckCircle, faTimesCircle } from "@fortawesome/free-regular-svg-icons";
import { faUserCheck, faUserClock, faUserTimes } from "@fortawesome/free-solid-svg-icons";
import dayjs from "dayjs";
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.43be4956.mjs";
import "./ResponsiveNavLink.105dcaab.mjs";
import "./logoweb.e431fb6b.mjs";
import "./NavLink.e5cf4d5a.mjs";
import "@fortawesome/free-brands-svg-icons";
library.add(faCheckCircle, faTimesCircle, faUserCheck, faUserClock, faUserTimes);
const _sfc_main = defineComponent({
  components: {
    AppLayoutAdmin,
    Link,
    Pagination,
    FontAwesomeIcon,
    jetInput: _sfc_main$1,
    Button: _sfc_main$2
  },
  props: {
    users: Object,
    search: String
  },
  data() {
    return {
      form: this.$inertia.form({
        search: ""
      })
    };
  },
  methods: {
    submit() {
      this.form.get(route("user.index"), { preserveState: true });
    },
    dateFormat(date) {
      let dateNew = dayjs(date, "YYYY-MM-DD");
      const months = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
      let formatted_date = dateNew.$D + "-" + months[dateNew.$M] + "-" + dateNew.$y;
      return formatted_date;
    }
  },
  watch: {
    "form.search": "submit"
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_app_layout_admin = resolveComponent("app-layout-admin");
  const _component_Link = resolveComponent("Link");
  const _component_jet_input = resolveComponent("jet-input");
  const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
  const _component_pagination = resolveComponent("pagination");
  _push(ssrRenderComponent(_component_app_layout_admin, mergeProps({ title: "Usuarios" }, _attrs), {
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
        _push2(`Listado de usuarios </h2>`);
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
            createTextVNode("Listado de usuarios ")
          ])
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="px-3 py-5 md:p-6 lg:mr-4 max-w-full flex flex-col shadow border border-gray-200 sm:rounded-lg bg-white"${_scopeId}><div class="flex justify-center md:justify-start items-center mb-6"${_scopeId}><form class="w-full md:w-72"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_input, {
          class: "w-full",
          id: "search",
          type: "search",
          placeholder: "Buscar",
          autofocus: "",
          modelValue: _ctx.form.search,
          "onUpdate:modelValue": ($event) => _ctx.form.search = $event
        }, null, _parent2, _scopeId));
        _push2(`</form></div><div class="min-w-full overflow-x-scroll xl:overflow-auto border border-gray-200 rounded-lg"${_scopeId}><table class="min-w-full divide-y divide-gray-200"${_scopeId}><thead class="bg-gray-50"${_scopeId}><tr${_scopeId}><th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"${_scopeId}> Nombre </th><th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"${_scopeId}> Documento </th><th scope="col" class="hidden md:table-cell px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"${_scopeId}> Celular </th><th scope="col" class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"${_scopeId}> Formularios </th><th scope="col" class="hidden md:table-cell px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"${_scopeId}> Estado </th><th scope="col" class="hidden md:table-cell px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"${_scopeId}> Email </th><th scope="col" class="hidden md:table-cell px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"${_scopeId}> Fecha Registro </th><th scope="col" class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"${_scopeId}> ID </th></tr></thead>`);
        if (_ctx.users.data[0]) {
          _push2(`<tbody class="bg-white divide-y divide-gray-200"${_scopeId}><!--[-->`);
          ssrRenderList(_ctx.users.data, (user) => {
            _push2(`<tr class="odd:bg-white even:bg-gray-50"${_scopeId}><td class="text-center font-semibold px-3 py-4 whitespace-nowrap text-sm"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Link, {
              href: _ctx.route("admin.userShow", user.id),
              class: "text-indigo-600 hover:text-indigo-900 flex justify-start items-center"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (user.picture) {
                    _push3(`<span class="w-10"${_scopeId2}><img${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/storage/" + user.picture)}${ssrRenderAttr("alt", user.name)} class="rounded-full h-10 w-10 object-cover"${_scopeId2}></span>`);
                  } else {
                    _push3(`<span class="w-10"${_scopeId2}><img${ssrRenderAttr("src", user.profile_photo_url)}${ssrRenderAttr("alt", user.name)} class="rounded-full h-10 w-10 object-cover"${_scopeId2}></span>`);
                  }
                  _push3(`<span class="flex flex-col justify-center items-start ml-4"${_scopeId2}><span${_scopeId2}>${ssrInterpolate(user.name + " " + user.lastname)}</span><span class="text-gray-400"${_scopeId2}>${ssrInterpolate(user.email)}</span></span>`);
                } else {
                  return [
                    user.picture ? (openBlock(), createBlock("span", {
                      key: 0,
                      class: "w-10"
                    }, [
                      createVNode("img", {
                        src: _ctx.$page.props.ziggy.url + "/storage/" + user.picture,
                        alt: user.name,
                        class: "rounded-full h-10 w-10 object-cover"
                      }, null, 8, ["src", "alt"])
                    ])) : (openBlock(), createBlock("span", {
                      key: 1,
                      class: "w-10"
                    }, [
                      createVNode("img", {
                        src: user.profile_photo_url,
                        alt: user.name,
                        class: "rounded-full h-10 w-10 object-cover"
                      }, null, 8, ["src", "alt"])
                    ])),
                    createVNode("span", { class: "flex flex-col justify-center items-start ml-4" }, [
                      createVNode("span", null, toDisplayString(user.name + " " + user.lastname), 1),
                      createVNode("span", { class: "text-gray-400" }, toDisplayString(user.email), 1)
                    ])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`</td><td class="text-left px-3 py-4 whitespace-nowrap text-sm font-medium"${_scopeId}>`);
            if (user.data_user === null) {
              _push2(`<span${_scopeId}> Sin Informaci\xF3n </span>`);
            } else {
              _push2(`<span${_scopeId}><span${_scopeId}>`);
              if (user.data_user.doc_type === 1) {
                _push2(`<span class="text-sm text-gray-600 mr-1"${_scopeId}>C\xE9dula: </span>`);
              } else if (user.data_user.doc_type === 2) {
                _push2(`<span class="text-sm text-gray-600 mr-1"${_scopeId}>C\xE9dula de extranjer\xEDa: </span>`);
              } else {
                _push2(`<span class="text-sm text-gray-600 mr-1"${_scopeId}>Pasaporte: </span>`);
              }
              _push2(`</span><span${_scopeId}><span class="text-sm font-semibold text-dark-brand"${_scopeId}>${ssrInterpolate(user.data_user.doc_num)}</span></span></span>`);
            }
            _push2(`</td><td class="text-center hidden md:table-cell px-3 py-4 whitespace-nowrap text-sm text-gray-500"${_scopeId}>${ssrInterpolate(user.mobil)}</td><td class="text-center font-semibold px-3 py-4 whitespace-nowrap text-sm flex justify-center items-center"${_scopeId}>`);
            if (user.form_knowledge_client !== null) {
              _push2(`<span class="flex justify-center items-center"${_scopeId}>`);
              if (user.requirement_user.formKnowledge > 0) {
                _push2(ssrRenderComponent(_component_Link, {
                  href: _ctx.route("formKnowledgeClient.showAdmin", user.form_knowledge_client.id),
                  class: "flex justify-start items-center"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<span${_scopeId2}>Cliente </span> `);
                      _push3(ssrRenderComponent(_component_font_awesome_icon, {
                        class: "text-green-400 ml-2 mr-4 h-8",
                        icon: ["far", "check-circle"],
                        size: "sm"
                      }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode("span", null, "Cliente "),
                        createTextVNode(),
                        createVNode(_component_font_awesome_icon, {
                          class: "text-green-400 ml-2 mr-4 h-8",
                          icon: ["far", "check-circle"],
                          size: "sm"
                        })
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              } else {
                _push2(`<span class="flex justify-start items-center"${_scopeId}><span${_scopeId}>Cliente </span> `);
                _push2(ssrRenderComponent(_component_font_awesome_icon, {
                  class: "text-red-400 ml-2 mr-4 h-8",
                  icon: ["far", "times-circle"],
                  size: "sm"
                }, null, _parent2, _scopeId));
                _push2(`</span>`);
              }
              _push2(`</span>`);
            } else {
              _push2(`<span class="flex justify-start items-center"${_scopeId}><span${_scopeId}>Cliente </span> `);
              _push2(ssrRenderComponent(_component_font_awesome_icon, {
                class: "text-red-400 ml-2 mr-4 h-8",
                icon: ["far", "times-circle"],
                size: "sm"
              }, null, _parent2, _scopeId));
              _push2(`</span>`);
            }
            if (user.form_fund !== null) {
              _push2(`<span class="flex justify-center items-center"${_scopeId}>`);
              if (user.requirement_user.formFunds > 0) {
                _push2(ssrRenderComponent(_component_Link, {
                  href: _ctx.route("formFund.showAdmin", user.form_fund.id),
                  class: "flex justify-end items-center"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<span${_scopeId2}>Fondos </span> `);
                      _push3(ssrRenderComponent(_component_font_awesome_icon, {
                        class: "text-green-400 ml-2 mr-4 h-8",
                        icon: ["far", "check-circle"],
                        size: "sm"
                      }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode("span", null, "Fondos "),
                        createTextVNode(),
                        createVNode(_component_font_awesome_icon, {
                          class: "text-green-400 ml-2 mr-4 h-8",
                          icon: ["far", "check-circle"],
                          size: "sm"
                        })
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              } else {
                _push2(`<span class="flex justify-end items-center"${_scopeId}><span${_scopeId}>Fondos </span> `);
                _push2(ssrRenderComponent(_component_font_awesome_icon, {
                  class: "text-red-400 ml-2 mr-4 h-8",
                  icon: ["far", "times-circle"],
                  size: "sm"
                }, null, _parent2, _scopeId));
                _push2(`</span>`);
              }
              _push2(`</span>`);
            } else {
              _push2(`<span class="flex justify-end items-center"${_scopeId}><span${_scopeId}>Fondos </span> `);
              _push2(ssrRenderComponent(_component_font_awesome_icon, {
                class: "text-red-400 ml-2 mr-4 h-8",
                icon: ["far", "times-circle"],
                size: "sm"
              }, null, _parent2, _scopeId));
              _push2(`</span>`);
            }
            _push2(`</td><td class="text-center hidden md:table-cell px-3 py-4 whitespace-nowrap text-sm text-gray-500"${_scopeId}>`);
            if (user.requirement_user !== null) {
              _push2(`<span${_scopeId}>`);
              if (user.requirement_user.verified === 0) {
                _push2(`<span class="flex justify-center items-center"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_font_awesome_icon, {
                  icon: ["fas", "user-times"],
                  size: "sm",
                  class: "text-red-400 mr-2"
                }, null, _parent2, _scopeId));
                _push2(` Sin verificar</span>`);
              } else if (user.requirement_user.verified === 1) {
                _push2(`<span class="flex justify-center items-center"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_font_awesome_icon, {
                  icon: ["fas", "user-clock"],
                  size: "sm",
                  class: "text-orange-500 mr-2"
                }, null, _parent2, _scopeId));
                _push2(` Verificando</span>`);
              } else {
                _push2(`<span class="flex justify-center items-center"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_font_awesome_icon, {
                  icon: ["fas", "user-check"],
                  size: "sm",
                  class: "text-green-400 mr-2"
                }, null, _parent2, _scopeId));
                _push2(` Verificado</span>`);
              }
              _push2(`</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</td><td class="text-center hidden md:table-cell px-3 py-4 whitespace-nowrap text-sm text-gray-500"${_scopeId}>`);
            if (user.email_verified_at !== null) {
              _push2(`<span${_scopeId}>`);
              _push2(ssrRenderComponent(_component_font_awesome_icon, {
                class: "text-green-400 ml-2 mr-4 h-8",
                icon: ["far", "check-circle"],
                size: "sm"
              }, null, _parent2, _scopeId));
              _push2(`</span>`);
            } else {
              _push2(`<span${_scopeId}>`);
              _push2(ssrRenderComponent(_component_font_awesome_icon, {
                class: "text-red-400 ml-2 mr-4 h-8",
                icon: ["far", "times-circle"],
                size: "sm"
              }, null, _parent2, _scopeId));
              _push2(`</span>`);
            }
            _push2(`</td><td class="text-center hidden md:table-cell px-3 py-4 whitespace-nowrap text-sm text-gray-500"${_scopeId}>`);
            if (user.created_at) {
              _push2(`<span${_scopeId}>${ssrInterpolate(_ctx.dateFormat(user.created_at))}</span>`);
            } else {
              _push2(`<span${_scopeId}> Antiguo </span>`);
            }
            _push2(`</td><td class="text-center px-3 py-4 whitespace-nowrap text-sm text-gray-500"${_scopeId}>${ssrInterpolate(user.id)}</td></tr>`);
          });
          _push2(`<!--]--></tbody>`);
        } else {
          _push2(`<tbody class="bg-white divide-y divide-gray-200"${_scopeId}><tr${_scopeId}><td class="px-6 py-4 w-full text-base text-gray-500 text-center" colspan="7"${_scopeId}>No se encontraron resultados</td></tr></tbody>`);
        }
        _push2(`</table></div><div class="mt-3"${_scopeId}>`);
        if (_ctx.users.data[0]) {
          _push2(ssrRenderComponent(_component_pagination, {
            class: "border-none",
            paginating: _ctx.users
          }, null, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div></div>`);
      } else {
        return [
          createVNode("div", { class: "px-3 py-5 md:p-6 lg:mr-4 max-w-full flex flex-col shadow border border-gray-200 sm:rounded-lg bg-white" }, [
            createVNode("div", { class: "flex justify-center md:justify-start items-center mb-6" }, [
              createVNode("form", {
                onSubmit: withModifiers(_ctx.submit, ["prevent"]),
                class: "w-full md:w-72"
              }, [
                createVNode(_component_jet_input, {
                  class: "w-full",
                  id: "search",
                  type: "search",
                  placeholder: "Buscar",
                  autofocus: "",
                  modelValue: _ctx.form.search,
                  "onUpdate:modelValue": ($event) => _ctx.form.search = $event
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ], 40, ["onSubmit"])
            ]),
            createVNode("div", { class: "min-w-full overflow-x-scroll xl:overflow-auto border border-gray-200 rounded-lg" }, [
              createVNode("table", { class: "min-w-full divide-y divide-gray-200" }, [
                createVNode("thead", { class: "bg-gray-50" }, [
                  createVNode("tr", null, [
                    createVNode("th", {
                      scope: "col",
                      class: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    }, " Nombre "),
                    createVNode("th", {
                      scope: "col",
                      class: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    }, " Documento "),
                    createVNode("th", {
                      scope: "col",
                      class: "hidden md:table-cell px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                    }, " Celular "),
                    createVNode("th", {
                      scope: "col",
                      class: "px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                    }, " Formularios "),
                    createVNode("th", {
                      scope: "col",
                      class: "hidden md:table-cell px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                    }, " Estado "),
                    createVNode("th", {
                      scope: "col",
                      class: "hidden md:table-cell px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                    }, " Email "),
                    createVNode("th", {
                      scope: "col",
                      class: "hidden md:table-cell px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                    }, " Fecha Registro "),
                    createVNode("th", {
                      scope: "col",
                      class: "px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                    }, " ID ")
                  ])
                ]),
                _ctx.users.data[0] ? (openBlock(), createBlock("tbody", {
                  key: 0,
                  class: "bg-white divide-y divide-gray-200"
                }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(_ctx.users.data, (user) => {
                    return openBlock(), createBlock("tr", {
                      key: user.id,
                      class: "odd:bg-white even:bg-gray-50"
                    }, [
                      createVNode("td", { class: "text-center font-semibold px-3 py-4 whitespace-nowrap text-sm" }, [
                        createVNode(_component_Link, {
                          href: _ctx.route("admin.userShow", user.id),
                          class: "text-indigo-600 hover:text-indigo-900 flex justify-start items-center"
                        }, {
                          default: withCtx(() => [
                            user.picture ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: "w-10"
                            }, [
                              createVNode("img", {
                                src: _ctx.$page.props.ziggy.url + "/storage/" + user.picture,
                                alt: user.name,
                                class: "rounded-full h-10 w-10 object-cover"
                              }, null, 8, ["src", "alt"])
                            ])) : (openBlock(), createBlock("span", {
                              key: 1,
                              class: "w-10"
                            }, [
                              createVNode("img", {
                                src: user.profile_photo_url,
                                alt: user.name,
                                class: "rounded-full h-10 w-10 object-cover"
                              }, null, 8, ["src", "alt"])
                            ])),
                            createVNode("span", { class: "flex flex-col justify-center items-start ml-4" }, [
                              createVNode("span", null, toDisplayString(user.name + " " + user.lastname), 1),
                              createVNode("span", { class: "text-gray-400" }, toDisplayString(user.email), 1)
                            ])
                          ]),
                          _: 2
                        }, 1032, ["href"])
                      ]),
                      createVNode("td", { class: "text-left px-3 py-4 whitespace-nowrap text-sm font-medium" }, [
                        user.data_user === null ? (openBlock(), createBlock("span", { key: 0 }, " Sin Informaci\xF3n ")) : (openBlock(), createBlock("span", { key: 1 }, [
                          createVNode("span", null, [
                            user.data_user.doc_type === 1 ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: "text-sm text-gray-600 mr-1"
                            }, "C\xE9dula: ")) : user.data_user.doc_type === 2 ? (openBlock(), createBlock("span", {
                              key: 1,
                              class: "text-sm text-gray-600 mr-1"
                            }, "C\xE9dula de extranjer\xEDa: ")) : (openBlock(), createBlock("span", {
                              key: 2,
                              class: "text-sm text-gray-600 mr-1"
                            }, "Pasaporte: "))
                          ]),
                          createVNode("span", null, [
                            createVNode("span", { class: "text-sm font-semibold text-dark-brand" }, toDisplayString(user.data_user.doc_num), 1)
                          ])
                        ]))
                      ]),
                      createVNode("td", { class: "text-center hidden md:table-cell px-3 py-4 whitespace-nowrap text-sm text-gray-500" }, toDisplayString(user.mobil), 1),
                      createVNode("td", { class: "text-center font-semibold px-3 py-4 whitespace-nowrap text-sm flex justify-center items-center" }, [
                        user.form_knowledge_client !== null ? (openBlock(), createBlock("span", {
                          key: 0,
                          class: "flex justify-center items-center"
                        }, [
                          user.requirement_user.formKnowledge > 0 ? (openBlock(), createBlock(_component_Link, {
                            key: 0,
                            href: _ctx.route("formKnowledgeClient.showAdmin", user.form_knowledge_client.id),
                            class: "flex justify-start items-center"
                          }, {
                            default: withCtx(() => [
                              createVNode("span", null, "Cliente "),
                              createTextVNode(),
                              createVNode(_component_font_awesome_icon, {
                                class: "text-green-400 ml-2 mr-4 h-8",
                                icon: ["far", "check-circle"],
                                size: "sm"
                              })
                            ]),
                            _: 2
                          }, 1032, ["href"])) : (openBlock(), createBlock("span", {
                            key: 1,
                            class: "flex justify-start items-center"
                          }, [
                            createVNode("span", null, "Cliente "),
                            createTextVNode(),
                            createVNode(_component_font_awesome_icon, {
                              class: "text-red-400 ml-2 mr-4 h-8",
                              icon: ["far", "times-circle"],
                              size: "sm"
                            })
                          ]))
                        ])) : (openBlock(), createBlock("span", {
                          key: 1,
                          class: "flex justify-start items-center"
                        }, [
                          createVNode("span", null, "Cliente "),
                          createTextVNode(),
                          createVNode(_component_font_awesome_icon, {
                            class: "text-red-400 ml-2 mr-4 h-8",
                            icon: ["far", "times-circle"],
                            size: "sm"
                          })
                        ])),
                        user.form_fund !== null ? (openBlock(), createBlock("span", {
                          key: 2,
                          class: "flex justify-center items-center"
                        }, [
                          user.requirement_user.formFunds > 0 ? (openBlock(), createBlock(_component_Link, {
                            key: 0,
                            href: _ctx.route("formFund.showAdmin", user.form_fund.id),
                            class: "flex justify-end items-center"
                          }, {
                            default: withCtx(() => [
                              createVNode("span", null, "Fondos "),
                              createTextVNode(),
                              createVNode(_component_font_awesome_icon, {
                                class: "text-green-400 ml-2 mr-4 h-8",
                                icon: ["far", "check-circle"],
                                size: "sm"
                              })
                            ]),
                            _: 2
                          }, 1032, ["href"])) : (openBlock(), createBlock("span", {
                            key: 1,
                            class: "flex justify-end items-center"
                          }, [
                            createVNode("span", null, "Fondos "),
                            createTextVNode(),
                            createVNode(_component_font_awesome_icon, {
                              class: "text-red-400 ml-2 mr-4 h-8",
                              icon: ["far", "times-circle"],
                              size: "sm"
                            })
                          ]))
                        ])) : (openBlock(), createBlock("span", {
                          key: 3,
                          class: "flex justify-end items-center"
                        }, [
                          createVNode("span", null, "Fondos "),
                          createTextVNode(),
                          createVNode(_component_font_awesome_icon, {
                            class: "text-red-400 ml-2 mr-4 h-8",
                            icon: ["far", "times-circle"],
                            size: "sm"
                          })
                        ]))
                      ]),
                      createVNode("td", { class: "text-center hidden md:table-cell px-3 py-4 whitespace-nowrap text-sm text-gray-500" }, [
                        user.requirement_user !== null ? (openBlock(), createBlock("span", { key: 0 }, [
                          user.requirement_user.verified === 0 ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: "flex justify-center items-center"
                          }, [
                            createVNode(_component_font_awesome_icon, {
                              icon: ["fas", "user-times"],
                              size: "sm",
                              class: "text-red-400 mr-2"
                            }),
                            createTextVNode(" Sin verificar")
                          ])) : user.requirement_user.verified === 1 ? (openBlock(), createBlock("span", {
                            key: 1,
                            class: "flex justify-center items-center"
                          }, [
                            createVNode(_component_font_awesome_icon, {
                              icon: ["fas", "user-clock"],
                              size: "sm",
                              class: "text-orange-500 mr-2"
                            }),
                            createTextVNode(" Verificando")
                          ])) : (openBlock(), createBlock("span", {
                            key: 2,
                            class: "flex justify-center items-center"
                          }, [
                            createVNode(_component_font_awesome_icon, {
                              icon: ["fas", "user-check"],
                              size: "sm",
                              class: "text-green-400 mr-2"
                            }),
                            createTextVNode(" Verificado")
                          ]))
                        ])) : createCommentVNode("", true)
                      ]),
                      createVNode("td", { class: "text-center hidden md:table-cell px-3 py-4 whitespace-nowrap text-sm text-gray-500" }, [
                        user.email_verified_at !== null ? (openBlock(), createBlock("span", { key: 0 }, [
                          createVNode(_component_font_awesome_icon, {
                            class: "text-green-400 ml-2 mr-4 h-8",
                            icon: ["far", "check-circle"],
                            size: "sm"
                          })
                        ])) : (openBlock(), createBlock("span", { key: 1 }, [
                          createVNode(_component_font_awesome_icon, {
                            class: "text-red-400 ml-2 mr-4 h-8",
                            icon: ["far", "times-circle"],
                            size: "sm"
                          })
                        ]))
                      ]),
                      createVNode("td", { class: "text-center hidden md:table-cell px-3 py-4 whitespace-nowrap text-sm text-gray-500" }, [
                        user.created_at ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(_ctx.dateFormat(user.created_at)), 1)) : (openBlock(), createBlock("span", { key: 1 }, " Antiguo "))
                      ]),
                      createVNode("td", { class: "text-center px-3 py-4 whitespace-nowrap text-sm text-gray-500" }, toDisplayString(user.id), 1)
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
              ])
            ]),
            createVNode("div", { class: "mt-3" }, [
              _ctx.users.data[0] ? (openBlock(), createBlock(_component_pagination, {
                key: 0,
                class: "border-none",
                paginating: _ctx.users
              }, null, 8, ["paginating"])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Users/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Index as default
};
