import { defineComponent, resolveComponent, mergeProps, withCtx, createTextVNode, createVNode, openBlock, createBlock, useSSRContext } from "vue";
import { A as AppLayoutAdmin } from "./AppLayoutAdmin.8e91ebaa.mjs";
import TableWithdrawals from "./TableWithdrawals.e0a2e905.mjs";
import { Link } from "@inertiajs/inertia-vue3";
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faClock, faCalendarCheck, faFileExcel } from "@fortawesome/free-regular-svg-icons";
import { faHistory } from "@fortawesome/free-solid-svg-icons";
import { ssrRenderComponent, ssrRenderClass } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.43be4956.mjs";
import "./ResponsiveNavLink.105dcaab.mjs";
import "./logoweb.e431fb6b.mjs";
import "./NavLink.e5cf4d5a.mjs";
import "@fortawesome/free-brands-svg-icons";
import "./Pagination.34de1776.mjs";
import "dayjs";
library.add(faClock, faCalendarCheck, faFileExcel, faHistory);
const _sfc_main = defineComponent({
  components: {
    AppLayoutAdmin,
    Link,
    TableWithdrawals,
    TabGroup,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
    FontAwesomeIcon
  },
  props: {
    withdrawalsPending: Object,
    withdrawalsToday: Object,
    withdrawalsVoucher: Object,
    withdrawalsAll: Object
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_app_layout_admin = resolveComponent("app-layout-admin");
  const _component_Link = resolveComponent("Link");
  const _component_TabGroup = resolveComponent("TabGroup");
  const _component_TabList = resolveComponent("TabList");
  const _component_Tab = resolveComponent("Tab");
  const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
  const _component_TabPanels = resolveComponent("TabPanels");
  const _component_TabPanel = resolveComponent("TabPanel");
  const _component_table_withdrawals = resolveComponent("table-withdrawals");
  _push(ssrRenderComponent(_component_app_layout_admin, mergeProps({ title: "Retiros" }, _attrs), {
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
        _push2(`Retiros de Broker </h2>`);
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
            createTextVNode("Retiros de Broker ")
          ])
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="py-6 w-full"${_scopeId}><div class="flex mx-auto lg:mr-4"${_scopeId}><div class="container mx-auto sm:px-6 lg:px-8"${_scopeId}><div class="bg-white overflow-hidden shadow-xl sm:rounded-lg p-2"${_scopeId}><div class="flex flex-col"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_TabGroup, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_TabList, { class: "flex space-x-1 rounded-lg bg-gray-200 p-1" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_Tab, {
                      as: "template",
                      key: 1
                    }, {
                      default: withCtx(({ selected }, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<button class="${ssrRenderClass([
                            "w-full flex items-center justify-center rounded-lg py-2.5 text-md font-medium leading-5 text-dark-brand",
                            "ring-dark-brand/10 ring-opacity-60 ring-offset-2 ring-offset-dark-brand/10 focus:outline-none focus:ring-2",
                            selected ? "bg-white/75 shadow" : "hover:bg-white/60 hover:text-blue-brand/75"
                          ])}"${_scopeId4}>`);
                          _push5(ssrRenderComponent(_component_font_awesome_icon, {
                            class: "text-orange-400 ml-2 mr-4 h-8",
                            icon: ["far", "clock"],
                            size: "lg"
                          }, null, _parent5, _scopeId4));
                          _push5(` Retiros Pendientes </button>`);
                        } else {
                          return [
                            createVNode("button", {
                              class: [
                                "w-full flex items-center justify-center rounded-lg py-2.5 text-md font-medium leading-5 text-dark-brand",
                                "ring-dark-brand/10 ring-opacity-60 ring-offset-2 ring-offset-dark-brand/10 focus:outline-none focus:ring-2",
                                selected ? "bg-white/75 shadow" : "hover:bg-white/60 hover:text-blue-brand/75"
                              ]
                            }, [
                              createVNode(_component_font_awesome_icon, {
                                class: "text-orange-400 ml-2 mr-4 h-8",
                                icon: ["far", "clock"],
                                size: "lg"
                              }),
                              createTextVNode(" Retiros Pendientes ")
                            ], 2)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_Tab, {
                      as: "template",
                      key: 2
                    }, {
                      default: withCtx(({ selected }, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<button class="${ssrRenderClass([
                            "w-full flex items-center justify-center rounded-lg py-2.5 text-md font-medium leading-5 text-dark-brand",
                            "ring-dark-brand/10 ring-opacity-60 ring-offset-2 ring-offset-dark-brand/10 focus:outline-none focus:ring-2",
                            selected ? "bg-white/75 shadow" : "hover:bg-white/60 hover:text-blue-brand/75"
                          ])}"${_scopeId4}>`);
                          _push5(ssrRenderComponent(_component_font_awesome_icon, {
                            class: "text-blue-brand-complement ml-2 mr-4 h-8",
                            icon: ["far", "calendar-check"],
                            size: "lg"
                          }, null, _parent5, _scopeId4));
                          _push5(` Para Hoy </button>`);
                        } else {
                          return [
                            createVNode("button", {
                              class: [
                                "w-full flex items-center justify-center rounded-lg py-2.5 text-md font-medium leading-5 text-dark-brand",
                                "ring-dark-brand/10 ring-opacity-60 ring-offset-2 ring-offset-dark-brand/10 focus:outline-none focus:ring-2",
                                selected ? "bg-white/75 shadow" : "hover:bg-white/60 hover:text-blue-brand/75"
                              ]
                            }, [
                              createVNode(_component_font_awesome_icon, {
                                class: "text-blue-brand-complement ml-2 mr-4 h-8",
                                icon: ["far", "calendar-check"],
                                size: "lg"
                              }),
                              createTextVNode(" Para Hoy ")
                            ], 2)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_Tab, {
                      as: "template",
                      key: 3
                    }, {
                      default: withCtx(({ selected }, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<button class="${ssrRenderClass([
                            "w-full flex items-center justify-center rounded-lg py-2.5 text-md font-medium leading-5 text-dark-brand",
                            "ring-dark-brand/10 ring-opacity-60 ring-offset-2 ring-offset-dark-brand/10 focus:outline-none focus:ring-2",
                            selected ? "bg-white/75 shadow" : "hover:bg-white/60 hover:text-blue-brand/75"
                          ])}"${_scopeId4}>`);
                          _push5(ssrRenderComponent(_component_font_awesome_icon, {
                            class: "text-red-500 ml-2 mr-4 h-8",
                            icon: ["far", "file-excel"],
                            size: "lg"
                          }, null, _parent5, _scopeId4));
                          _push5(` Sin Comprobante </button>`);
                        } else {
                          return [
                            createVNode("button", {
                              class: [
                                "w-full flex items-center justify-center rounded-lg py-2.5 text-md font-medium leading-5 text-dark-brand",
                                "ring-dark-brand/10 ring-opacity-60 ring-offset-2 ring-offset-dark-brand/10 focus:outline-none focus:ring-2",
                                selected ? "bg-white/75 shadow" : "hover:bg-white/60 hover:text-blue-brand/75"
                              ]
                            }, [
                              createVNode(_component_font_awesome_icon, {
                                class: "text-red-500 ml-2 mr-4 h-8",
                                icon: ["far", "file-excel"],
                                size: "lg"
                              }),
                              createTextVNode(" Sin Comprobante ")
                            ], 2)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_Tab, {
                      as: "template",
                      key: 4
                    }, {
                      default: withCtx(({ selected }, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<button class="${ssrRenderClass([
                            "w-full flex items-center justify-center rounded-lg py-2.5 text-md font-medium leading-5 text-dark-brand",
                            "ring-dark-brand/10 ring-opacity-60 ring-offset-2 ring-offset-dark-brand/10 focus:outline-none focus:ring-2",
                            selected ? "bg-white/75 shadow" : "hover:bg-white/60 hover:text-blue-brand/75"
                          ])}"${_scopeId4}>`);
                          _push5(ssrRenderComponent(_component_font_awesome_icon, {
                            class: "text-green-500 ml-2 mr-4 h-8",
                            icon: ["fas", "history"],
                            size: "lg"
                          }, null, _parent5, _scopeId4));
                          _push5(` Todos </button>`);
                        } else {
                          return [
                            createVNode("button", {
                              class: [
                                "w-full flex items-center justify-center rounded-lg py-2.5 text-md font-medium leading-5 text-dark-brand",
                                "ring-dark-brand/10 ring-opacity-60 ring-offset-2 ring-offset-dark-brand/10 focus:outline-none focus:ring-2",
                                selected ? "bg-white/75 shadow" : "hover:bg-white/60 hover:text-blue-brand/75"
                              ]
                            }, [
                              createVNode(_component_font_awesome_icon, {
                                class: "text-green-500 ml-2 mr-4 h-8",
                                icon: ["fas", "history"],
                                size: "lg"
                              }),
                              createTextVNode(" Todos ")
                            ], 2)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      (openBlock(), createBlock(_component_Tab, {
                        as: "template",
                        key: 1
                      }, {
                        default: withCtx(({ selected }) => [
                          createVNode("button", {
                            class: [
                              "w-full flex items-center justify-center rounded-lg py-2.5 text-md font-medium leading-5 text-dark-brand",
                              "ring-dark-brand/10 ring-opacity-60 ring-offset-2 ring-offset-dark-brand/10 focus:outline-none focus:ring-2",
                              selected ? "bg-white/75 shadow" : "hover:bg-white/60 hover:text-blue-brand/75"
                            ]
                          }, [
                            createVNode(_component_font_awesome_icon, {
                              class: "text-orange-400 ml-2 mr-4 h-8",
                              icon: ["far", "clock"],
                              size: "lg"
                            }),
                            createTextVNode(" Retiros Pendientes ")
                          ], 2)
                        ]),
                        _: 1
                      })),
                      (openBlock(), createBlock(_component_Tab, {
                        as: "template",
                        key: 2
                      }, {
                        default: withCtx(({ selected }) => [
                          createVNode("button", {
                            class: [
                              "w-full flex items-center justify-center rounded-lg py-2.5 text-md font-medium leading-5 text-dark-brand",
                              "ring-dark-brand/10 ring-opacity-60 ring-offset-2 ring-offset-dark-brand/10 focus:outline-none focus:ring-2",
                              selected ? "bg-white/75 shadow" : "hover:bg-white/60 hover:text-blue-brand/75"
                            ]
                          }, [
                            createVNode(_component_font_awesome_icon, {
                              class: "text-blue-brand-complement ml-2 mr-4 h-8",
                              icon: ["far", "calendar-check"],
                              size: "lg"
                            }),
                            createTextVNode(" Para Hoy ")
                          ], 2)
                        ]),
                        _: 1
                      })),
                      (openBlock(), createBlock(_component_Tab, {
                        as: "template",
                        key: 3
                      }, {
                        default: withCtx(({ selected }) => [
                          createVNode("button", {
                            class: [
                              "w-full flex items-center justify-center rounded-lg py-2.5 text-md font-medium leading-5 text-dark-brand",
                              "ring-dark-brand/10 ring-opacity-60 ring-offset-2 ring-offset-dark-brand/10 focus:outline-none focus:ring-2",
                              selected ? "bg-white/75 shadow" : "hover:bg-white/60 hover:text-blue-brand/75"
                            ]
                          }, [
                            createVNode(_component_font_awesome_icon, {
                              class: "text-red-500 ml-2 mr-4 h-8",
                              icon: ["far", "file-excel"],
                              size: "lg"
                            }),
                            createTextVNode(" Sin Comprobante ")
                          ], 2)
                        ]),
                        _: 1
                      })),
                      (openBlock(), createBlock(_component_Tab, {
                        as: "template",
                        key: 4
                      }, {
                        default: withCtx(({ selected }) => [
                          createVNode("button", {
                            class: [
                              "w-full flex items-center justify-center rounded-lg py-2.5 text-md font-medium leading-5 text-dark-brand",
                              "ring-dark-brand/10 ring-opacity-60 ring-offset-2 ring-offset-dark-brand/10 focus:outline-none focus:ring-2",
                              selected ? "bg-white/75 shadow" : "hover:bg-white/60 hover:text-blue-brand/75"
                            ]
                          }, [
                            createVNode(_component_font_awesome_icon, {
                              class: "text-green-500 ml-2 mr-4 h-8",
                              icon: ["fas", "history"],
                              size: "lg"
                            }),
                            createTextVNode(" Todos ")
                          ], 2)
                        ]),
                        _: 1
                      }))
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_TabPanels, { class: "mt-2" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_TabPanel, {
                      key: 1,
                      class: [
                        "rounded-xl bg-white p-3",
                        "ring-white ring-opacity-60 shadow focus:outline-none focus:ring-2"
                      ]
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_table_withdrawals, { withdrawals: _ctx.withdrawalsPending }, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_table_withdrawals, { withdrawals: _ctx.withdrawalsPending }, null, 8, ["withdrawals"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_TabPanel, {
                      key: 2,
                      class: [
                        "rounded-xl bg-white p-3",
                        "ring-white ring-opacity-60 shadow focus:outline-none focus:ring-2"
                      ]
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_table_withdrawals, { withdrawals: _ctx.withdrawalsToday }, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_table_withdrawals, { withdrawals: _ctx.withdrawalsToday }, null, 8, ["withdrawals"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_TabPanel, {
                      key: 3,
                      class: [
                        "rounded-xl bg-white p-3",
                        "ring-white ring-opacity-60 shadow focus:outline-none focus:ring-2"
                      ]
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_table_withdrawals, { withdrawals: _ctx.withdrawalsVoucher }, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_table_withdrawals, { withdrawals: _ctx.withdrawalsVoucher }, null, 8, ["withdrawals"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_TabPanel, {
                      key: 4,
                      class: [
                        "rounded-xl bg-white p-3",
                        "ring-white ring-opacity-60 shadow focus:outline-none focus:ring-2"
                      ]
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_table_withdrawals, { withdrawals: _ctx.withdrawalsAll }, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_table_withdrawals, { withdrawals: _ctx.withdrawalsAll }, null, 8, ["withdrawals"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      (openBlock(), createBlock(_component_TabPanel, {
                        key: 1,
                        class: [
                          "rounded-xl bg-white p-3",
                          "ring-white ring-opacity-60 shadow focus:outline-none focus:ring-2"
                        ]
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_table_withdrawals, { withdrawals: _ctx.withdrawalsPending }, null, 8, ["withdrawals"])
                        ]),
                        _: 1
                      })),
                      (openBlock(), createBlock(_component_TabPanel, {
                        key: 2,
                        class: [
                          "rounded-xl bg-white p-3",
                          "ring-white ring-opacity-60 shadow focus:outline-none focus:ring-2"
                        ]
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_table_withdrawals, { withdrawals: _ctx.withdrawalsToday }, null, 8, ["withdrawals"])
                        ]),
                        _: 1
                      })),
                      (openBlock(), createBlock(_component_TabPanel, {
                        key: 3,
                        class: [
                          "rounded-xl bg-white p-3",
                          "ring-white ring-opacity-60 shadow focus:outline-none focus:ring-2"
                        ]
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_table_withdrawals, { withdrawals: _ctx.withdrawalsVoucher }, null, 8, ["withdrawals"])
                        ]),
                        _: 1
                      })),
                      (openBlock(), createBlock(_component_TabPanel, {
                        key: 4,
                        class: [
                          "rounded-xl bg-white p-3",
                          "ring-white ring-opacity-60 shadow focus:outline-none focus:ring-2"
                        ]
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_table_withdrawals, { withdrawals: _ctx.withdrawalsAll }, null, 8, ["withdrawals"])
                        ]),
                        _: 1
                      }))
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_TabList, { class: "flex space-x-1 rounded-lg bg-gray-200 p-1" }, {
                  default: withCtx(() => [
                    (openBlock(), createBlock(_component_Tab, {
                      as: "template",
                      key: 1
                    }, {
                      default: withCtx(({ selected }) => [
                        createVNode("button", {
                          class: [
                            "w-full flex items-center justify-center rounded-lg py-2.5 text-md font-medium leading-5 text-dark-brand",
                            "ring-dark-brand/10 ring-opacity-60 ring-offset-2 ring-offset-dark-brand/10 focus:outline-none focus:ring-2",
                            selected ? "bg-white/75 shadow" : "hover:bg-white/60 hover:text-blue-brand/75"
                          ]
                        }, [
                          createVNode(_component_font_awesome_icon, {
                            class: "text-orange-400 ml-2 mr-4 h-8",
                            icon: ["far", "clock"],
                            size: "lg"
                          }),
                          createTextVNode(" Retiros Pendientes ")
                        ], 2)
                      ]),
                      _: 1
                    })),
                    (openBlock(), createBlock(_component_Tab, {
                      as: "template",
                      key: 2
                    }, {
                      default: withCtx(({ selected }) => [
                        createVNode("button", {
                          class: [
                            "w-full flex items-center justify-center rounded-lg py-2.5 text-md font-medium leading-5 text-dark-brand",
                            "ring-dark-brand/10 ring-opacity-60 ring-offset-2 ring-offset-dark-brand/10 focus:outline-none focus:ring-2",
                            selected ? "bg-white/75 shadow" : "hover:bg-white/60 hover:text-blue-brand/75"
                          ]
                        }, [
                          createVNode(_component_font_awesome_icon, {
                            class: "text-blue-brand-complement ml-2 mr-4 h-8",
                            icon: ["far", "calendar-check"],
                            size: "lg"
                          }),
                          createTextVNode(" Para Hoy ")
                        ], 2)
                      ]),
                      _: 1
                    })),
                    (openBlock(), createBlock(_component_Tab, {
                      as: "template",
                      key: 3
                    }, {
                      default: withCtx(({ selected }) => [
                        createVNode("button", {
                          class: [
                            "w-full flex items-center justify-center rounded-lg py-2.5 text-md font-medium leading-5 text-dark-brand",
                            "ring-dark-brand/10 ring-opacity-60 ring-offset-2 ring-offset-dark-brand/10 focus:outline-none focus:ring-2",
                            selected ? "bg-white/75 shadow" : "hover:bg-white/60 hover:text-blue-brand/75"
                          ]
                        }, [
                          createVNode(_component_font_awesome_icon, {
                            class: "text-red-500 ml-2 mr-4 h-8",
                            icon: ["far", "file-excel"],
                            size: "lg"
                          }),
                          createTextVNode(" Sin Comprobante ")
                        ], 2)
                      ]),
                      _: 1
                    })),
                    (openBlock(), createBlock(_component_Tab, {
                      as: "template",
                      key: 4
                    }, {
                      default: withCtx(({ selected }) => [
                        createVNode("button", {
                          class: [
                            "w-full flex items-center justify-center rounded-lg py-2.5 text-md font-medium leading-5 text-dark-brand",
                            "ring-dark-brand/10 ring-opacity-60 ring-offset-2 ring-offset-dark-brand/10 focus:outline-none focus:ring-2",
                            selected ? "bg-white/75 shadow" : "hover:bg-white/60 hover:text-blue-brand/75"
                          ]
                        }, [
                          createVNode(_component_font_awesome_icon, {
                            class: "text-green-500 ml-2 mr-4 h-8",
                            icon: ["fas", "history"],
                            size: "lg"
                          }),
                          createTextVNode(" Todos ")
                        ], 2)
                      ]),
                      _: 1
                    }))
                  ]),
                  _: 1
                }),
                createVNode(_component_TabPanels, { class: "mt-2" }, {
                  default: withCtx(() => [
                    (openBlock(), createBlock(_component_TabPanel, {
                      key: 1,
                      class: [
                        "rounded-xl bg-white p-3",
                        "ring-white ring-opacity-60 shadow focus:outline-none focus:ring-2"
                      ]
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_table_withdrawals, { withdrawals: _ctx.withdrawalsPending }, null, 8, ["withdrawals"])
                      ]),
                      _: 1
                    })),
                    (openBlock(), createBlock(_component_TabPanel, {
                      key: 2,
                      class: [
                        "rounded-xl bg-white p-3",
                        "ring-white ring-opacity-60 shadow focus:outline-none focus:ring-2"
                      ]
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_table_withdrawals, { withdrawals: _ctx.withdrawalsToday }, null, 8, ["withdrawals"])
                      ]),
                      _: 1
                    })),
                    (openBlock(), createBlock(_component_TabPanel, {
                      key: 3,
                      class: [
                        "rounded-xl bg-white p-3",
                        "ring-white ring-opacity-60 shadow focus:outline-none focus:ring-2"
                      ]
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_table_withdrawals, { withdrawals: _ctx.withdrawalsVoucher }, null, 8, ["withdrawals"])
                      ]),
                      _: 1
                    })),
                    (openBlock(), createBlock(_component_TabPanel, {
                      key: 4,
                      class: [
                        "rounded-xl bg-white p-3",
                        "ring-white ring-opacity-60 shadow focus:outline-none focus:ring-2"
                      ]
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_table_withdrawals, { withdrawals: _ctx.withdrawalsAll }, null, 8, ["withdrawals"])
                      ]),
                      _: 1
                    }))
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div></div></div></div></div>`);
      } else {
        return [
          createVNode("div", { class: "py-6 w-full" }, [
            createVNode("div", { class: "flex mx-auto lg:mr-4" }, [
              createVNode("div", { class: "container mx-auto sm:px-6 lg:px-8" }, [
                createVNode("div", { class: "bg-white overflow-hidden shadow-xl sm:rounded-lg p-2" }, [
                  createVNode("div", { class: "flex flex-col" }, [
                    createVNode(_component_TabGroup, null, {
                      default: withCtx(() => [
                        createVNode(_component_TabList, { class: "flex space-x-1 rounded-lg bg-gray-200 p-1" }, {
                          default: withCtx(() => [
                            (openBlock(), createBlock(_component_Tab, {
                              as: "template",
                              key: 1
                            }, {
                              default: withCtx(({ selected }) => [
                                createVNode("button", {
                                  class: [
                                    "w-full flex items-center justify-center rounded-lg py-2.5 text-md font-medium leading-5 text-dark-brand",
                                    "ring-dark-brand/10 ring-opacity-60 ring-offset-2 ring-offset-dark-brand/10 focus:outline-none focus:ring-2",
                                    selected ? "bg-white/75 shadow" : "hover:bg-white/60 hover:text-blue-brand/75"
                                  ]
                                }, [
                                  createVNode(_component_font_awesome_icon, {
                                    class: "text-orange-400 ml-2 mr-4 h-8",
                                    icon: ["far", "clock"],
                                    size: "lg"
                                  }),
                                  createTextVNode(" Retiros Pendientes ")
                                ], 2)
                              ]),
                              _: 1
                            })),
                            (openBlock(), createBlock(_component_Tab, {
                              as: "template",
                              key: 2
                            }, {
                              default: withCtx(({ selected }) => [
                                createVNode("button", {
                                  class: [
                                    "w-full flex items-center justify-center rounded-lg py-2.5 text-md font-medium leading-5 text-dark-brand",
                                    "ring-dark-brand/10 ring-opacity-60 ring-offset-2 ring-offset-dark-brand/10 focus:outline-none focus:ring-2",
                                    selected ? "bg-white/75 shadow" : "hover:bg-white/60 hover:text-blue-brand/75"
                                  ]
                                }, [
                                  createVNode(_component_font_awesome_icon, {
                                    class: "text-blue-brand-complement ml-2 mr-4 h-8",
                                    icon: ["far", "calendar-check"],
                                    size: "lg"
                                  }),
                                  createTextVNode(" Para Hoy ")
                                ], 2)
                              ]),
                              _: 1
                            })),
                            (openBlock(), createBlock(_component_Tab, {
                              as: "template",
                              key: 3
                            }, {
                              default: withCtx(({ selected }) => [
                                createVNode("button", {
                                  class: [
                                    "w-full flex items-center justify-center rounded-lg py-2.5 text-md font-medium leading-5 text-dark-brand",
                                    "ring-dark-brand/10 ring-opacity-60 ring-offset-2 ring-offset-dark-brand/10 focus:outline-none focus:ring-2",
                                    selected ? "bg-white/75 shadow" : "hover:bg-white/60 hover:text-blue-brand/75"
                                  ]
                                }, [
                                  createVNode(_component_font_awesome_icon, {
                                    class: "text-red-500 ml-2 mr-4 h-8",
                                    icon: ["far", "file-excel"],
                                    size: "lg"
                                  }),
                                  createTextVNode(" Sin Comprobante ")
                                ], 2)
                              ]),
                              _: 1
                            })),
                            (openBlock(), createBlock(_component_Tab, {
                              as: "template",
                              key: 4
                            }, {
                              default: withCtx(({ selected }) => [
                                createVNode("button", {
                                  class: [
                                    "w-full flex items-center justify-center rounded-lg py-2.5 text-md font-medium leading-5 text-dark-brand",
                                    "ring-dark-brand/10 ring-opacity-60 ring-offset-2 ring-offset-dark-brand/10 focus:outline-none focus:ring-2",
                                    selected ? "bg-white/75 shadow" : "hover:bg-white/60 hover:text-blue-brand/75"
                                  ]
                                }, [
                                  createVNode(_component_font_awesome_icon, {
                                    class: "text-green-500 ml-2 mr-4 h-8",
                                    icon: ["fas", "history"],
                                    size: "lg"
                                  }),
                                  createTextVNode(" Todos ")
                                ], 2)
                              ]),
                              _: 1
                            }))
                          ]),
                          _: 1
                        }),
                        createVNode(_component_TabPanels, { class: "mt-2" }, {
                          default: withCtx(() => [
                            (openBlock(), createBlock(_component_TabPanel, {
                              key: 1,
                              class: [
                                "rounded-xl bg-white p-3",
                                "ring-white ring-opacity-60 shadow focus:outline-none focus:ring-2"
                              ]
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_table_withdrawals, { withdrawals: _ctx.withdrawalsPending }, null, 8, ["withdrawals"])
                              ]),
                              _: 1
                            })),
                            (openBlock(), createBlock(_component_TabPanel, {
                              key: 2,
                              class: [
                                "rounded-xl bg-white p-3",
                                "ring-white ring-opacity-60 shadow focus:outline-none focus:ring-2"
                              ]
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_table_withdrawals, { withdrawals: _ctx.withdrawalsToday }, null, 8, ["withdrawals"])
                              ]),
                              _: 1
                            })),
                            (openBlock(), createBlock(_component_TabPanel, {
                              key: 3,
                              class: [
                                "rounded-xl bg-white p-3",
                                "ring-white ring-opacity-60 shadow focus:outline-none focus:ring-2"
                              ]
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_table_withdrawals, { withdrawals: _ctx.withdrawalsVoucher }, null, 8, ["withdrawals"])
                              ]),
                              _: 1
                            })),
                            (openBlock(), createBlock(_component_TabPanel, {
                              key: 4,
                              class: [
                                "rounded-xl bg-white p-3",
                                "ring-white ring-opacity-60 shadow focus:outline-none focus:ring-2"
                              ]
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_table_withdrawals, { withdrawals: _ctx.withdrawalsAll }, null, 8, ["withdrawals"])
                              ]),
                              _: 1
                            }))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Withdrawals/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Index as default
};
