import { defineComponent, useSSRContext, resolveComponent, withCtx, createVNode, openBlock, createBlock, createTextVNode, toDisplayString, withModifiers } from "vue";
import { Head, Link } from "@inertiajs/inertia-vue3";
import { J as JetApplicationMark, _ as _sfc_main$2 } from "./ResponsiveNavLink.105dcaab.mjs";
import { J as JetBanner, a as JetDropdownSidebar, b as JetDropdownLinkSidebar, _ as _sfc_main$1, c as JetNavLinkSidebar } from "./NavLink.e5cf4d5a.mjs";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBell, faArrowCircleUp, faArrowCircleDown, faUsers, faDollarSign, faUserShield, faUserLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faMicrosoft } from "@fortawesome/free-brands-svg-icons";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderClass, ssrInterpolate, ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.43be4956.mjs";
library.add(faBell, faMicrosoft, faArrowCircleUp, faArrowCircleDown, faUsers, faDollarSign, faUserShield, faUserLock, faEnvelope);
const _sfc_main = defineComponent({
  props: {
    title: String,
    description: String
  },
  components: {
    Head,
    JetApplicationMark,
    JetBanner,
    JetDropdownSidebar,
    JetDropdownLinkSidebar,
    JetNavLink: _sfc_main$1,
    JetNavLinkSidebar,
    JetResponsiveNavLink: _sfc_main$2,
    Link,
    FontAwesomeIcon
  },
  data() {
    return {
      showingNavigationDropdown: false,
      url: location.origin
    };
  },
  methods: {
    switchToTeam(team) {
      this.$inertia.put(route("current-team.update"), {
        "team_id": team.id
      }, {
        preserveState: false
      });
    },
    logout() {
      this.$inertia.post(route("logout"));
    },
    activeDollarPrice() {
      if (route().current("admin.dollarPriceIndex")) {
        return true;
      } else {
        return false;
      }
    },
    activeMassiveEmail() {
      if (route().current("admin.messagingIndex")) {
        return true;
      } else {
        return false;
      }
    },
    activeRole() {
      if (route().current("admin.roleIndex")) {
        return true;
      } else {
        return false;
      }
    },
    activePermission() {
      if (route().current("admin.permissionIndex")) {
        return true;
      } else {
        return false;
      }
    },
    activeUsers() {
      if (route().current("user.index")) {
        return true;
      } else {
        return false;
      }
    },
    activeWithdrawals() {
      if (route().current("withdrawal.index") || route().current("withdrawal.show")) {
        return true;
      } else {
        return false;
      }
    },
    activeWalletExchange() {
      if (route().current("admin.indexWalletExchange") || route().current("admin.showWalletExchange")) {
        return true;
      } else {
        return false;
      }
    },
    activeDeposits() {
      if (route().current("deposit.index") || route().current("admin.depositShow") || route().current("deposit.show")) {
        return true;
      } else {
        return false;
      }
    },
    activeVerification() {
      if (route().current("verification.create") || route().current("formFund.create") || route().current("formKnowledgeClient.create") || route().current("formKnowledgeClient.show") || route().current("formFund.show")) {
        return true;
      } else {
        return false;
      }
    },
    activeAccounts() {
      if (route().current("accounts.index.user") || route().current("accounts.create.user")) {
        return true;
      } else {
        return false;
      }
    },
    openDropdown() {
      if (route().current("user.edit") || this.activeVerification() || this.activeAccounts() || route().current("users.changePassword")) {
        return true;
      } else {
        return false;
      }
    }
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_Link = resolveComponent("Link");
  const _component_jet_application_mark = resolveComponent("jet-application-mark");
  const _component_jet_dropdown_sidebar = resolveComponent("jet-dropdown-sidebar");
  const _component_jet_dropdown_link_sidebar = resolveComponent("jet-dropdown-link-sidebar");
  const _component_jet_nav_link_sidebar = resolveComponent("jet-nav-link-sidebar");
  const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
  const _component_jet_banner = resolveComponent("jet-banner");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Head, { title: _ctx.title }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<meta name="description"${ssrRenderAttr("content", _ctx.description)}${_scopeId}>`);
      } else {
        return [
          createVNode("meta", {
            name: "description",
            content: _ctx.description
          }, null, 8, ["content"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<aside class="${ssrRenderClass([{ "block p-2 pr-0 w-64": _ctx.showingNavigationDropdown, "hidden lg:block": !_ctx.showingNavigationDropdown }, "bg-gray-100 h-screen sm:w-72 sm:p-4 float-left lg:fixed overflow-hidden"])}"><div class="bg-dark-brand rounded-lg h-full w-full p-1"><div class="flex items-center content-center mx-auto h-16">`);
  _push(ssrRenderComponent(_component_Link, {
    class: "mx-auto",
    href: _ctx.route("company.welcome")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_jet_application_mark, { class: "block h-12 w-auto" }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_jet_application_mark, { class: "block h-12 w-auto" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="bg-gradient-to-r from-dark-brand via-slate-300 to-dark-brand h-[0.5px] my-1"></div><div class="mx-3 relative py-2">`);
  _push(ssrRenderComponent(_component_jet_dropdown_sidebar, {
    width: "full",
    align: "center",
    contentClasses: "bg-transparent",
    openSide: _ctx.openDropdown()
  }, {
    trigger: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="w-10"${_scopeId}><button class="flex items-center text-sm"${_scopeId}>`);
        if (_ctx.$page.props.user.picture) {
          _push2(`<img class="h-8 w-8 rounded-full object-cover"${ssrRenderAttr("src", _ctx.url + "/storage/" + _ctx.$page.props.user.picture)}${ssrRenderAttr("alt", _ctx.$page.props.user.name)}${_scopeId}>`);
        } else {
          _push2(`<img class="h-8 w-8 rounded-full object-cover"${ssrRenderAttr("src", _ctx.$page.props.user.profile_photo_url)}${ssrRenderAttr("alt", _ctx.$page.props.user.name)}${_scopeId}>`);
        }
        _push2(`</button></div><div class="pl-2 w-full"${_scopeId}><span class="inline-flex w-full items-center"${_scopeId}><button type="button" class="flex justify-between items-center w-full py-2 text-base leading-4 font-medium text-gray-300 transition"${_scopeId}>${ssrInterpolate(_ctx.$page.props.user.name.split(" ", 1) + " " + _ctx.$page.props.user.lastname.split(" ", 1))} <svg class="ml-2 -mr-0.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"${_scopeId}><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"${_scopeId}></path></svg></button></span></div>`);
      } else {
        return [
          createVNode("div", { class: "w-10" }, [
            createVNode("button", { class: "flex items-center text-sm" }, [
              _ctx.$page.props.user.picture ? (openBlock(), createBlock("img", {
                key: 0,
                class: "h-8 w-8 rounded-full object-cover",
                src: _ctx.url + "/storage/" + _ctx.$page.props.user.picture,
                alt: _ctx.$page.props.user.name
              }, null, 8, ["src", "alt"])) : (openBlock(), createBlock("img", {
                key: 1,
                class: "h-8 w-8 rounded-full object-cover",
                src: _ctx.$page.props.user.profile_photo_url,
                alt: _ctx.$page.props.user.name
              }, null, 8, ["src", "alt"]))
            ])
          ]),
          createVNode("div", { class: "pl-2 w-full" }, [
            createVNode("span", { class: "inline-flex w-full items-center" }, [
              createVNode("button", {
                type: "button",
                class: "flex justify-between items-center w-full py-2 text-base leading-4 font-medium text-gray-300 transition"
              }, [
                createTextVNode(toDisplayString(_ctx.$page.props.user.name.split(" ", 1) + " " + _ctx.$page.props.user.lastname.split(" ", 1)) + " ", 1),
                (openBlock(), createBlock("svg", {
                  class: "ml-2 -mr-0.5 h-4 w-4",
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 20 20",
                  fill: "currentColor"
                }, [
                  createVNode("path", {
                    "fill-rule": "evenodd",
                    d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
                    "clip-rule": "evenodd"
                  })
                ]))
              ])
            ])
          ])
        ];
      }
    }),
    content: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_jet_dropdown_link_sidebar, {
          href: _ctx.route("users.changePassword"),
          active: _ctx.route().current("users.changePassword")
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Cambiar Contrase\xF1a `);
            } else {
              return [
                createTextVNode(" Cambiar Contrase\xF1a ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`<form${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_dropdown_link_sidebar, { as: "button" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Cerrar Sesi\xF3n `);
            } else {
              return [
                createTextVNode(" Cerrar Sesi\xF3n ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</form>`);
      } else {
        return [
          createVNode(_component_jet_dropdown_link_sidebar, {
            href: _ctx.route("users.changePassword"),
            active: _ctx.route().current("users.changePassword")
          }, {
            default: withCtx(() => [
              createTextVNode(" Cambiar Contrase\xF1a ")
            ]),
            _: 1
          }, 8, ["href", "active"]),
          createVNode("form", {
            onSubmit: withModifiers(_ctx.logout, ["prevent"])
          }, [
            createVNode(_component_jet_dropdown_link_sidebar, { as: "button" }, {
              default: withCtx(() => [
                createTextVNode(" Cerrar Sesi\xF3n ")
              ]),
              _: 1
            })
          ], 40, ["onSubmit"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="bg-gradient-to-r from-dark-brand via-slate-300 to-dark-brand h-[1px] my-1"></div><div class="mx-3 relative py-2">`);
  _push(ssrRenderComponent(_component_jet_nav_link_sidebar, {
    href: _ctx.route("admin.dashboard"),
    active: _ctx.route().current("admin.dashboard")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_font_awesome_icon, {
          class: "text-gray-300 ml-2 mr-4 h-8",
          icon: ["fab", "microsoft"],
          size: "lg"
        }, null, _parent2, _scopeId));
        _push2(`<span${_scopeId}>Dashboard</span>`);
      } else {
        return [
          createVNode(_component_font_awesome_icon, {
            class: "text-gray-300 ml-2 mr-4 h-8",
            icon: ["fab", "microsoft"],
            size: "lg"
          }),
          createVNode("span", null, "Dashboard")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="bg-gradient-to-r from-dark-brand via-slate-300 to-dark-brand h-[0.5px] my-1"></div>`);
  _push(ssrRenderComponent(_component_jet_nav_link_sidebar, {
    href: _ctx.route("deposit.index"),
    active: _ctx.activeDeposits()
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_font_awesome_icon, {
          class: "text-gray-300 ml-2 mr-4 h-8",
          icon: ["fas", "arrow-circle-up"],
          size: "lg"
        }, null, _parent2, _scopeId));
        _push2(`<span${_scopeId}>Dep\xF3sitos</span>`);
      } else {
        return [
          createVNode(_component_font_awesome_icon, {
            class: "text-gray-300 ml-2 mr-4 h-8",
            icon: ["fas", "arrow-circle-up"],
            size: "lg"
          }),
          createVNode("span", null, "Dep\xF3sitos")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_jet_nav_link_sidebar, {
    href: _ctx.route("withdrawal.index"),
    active: _ctx.activeWithdrawals()
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_font_awesome_icon, {
          class: "text-gray-300 ml-2 mr-4 h-8",
          icon: ["fas", "arrow-circle-down"],
          size: "lg"
        }, null, _parent2, _scopeId));
        _push2(`<span${_scopeId}>Retiros</span>`);
      } else {
        return [
          createVNode(_component_font_awesome_icon, {
            class: "text-gray-300 ml-2 mr-4 h-8",
            icon: ["fas", "arrow-circle-down"],
            size: "lg"
          }),
          createVNode("span", null, "Retiros")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_jet_nav_link_sidebar, {
    href: _ctx.route("admin.indexWalletExchange"),
    active: _ctx.activeWalletExchange()
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_font_awesome_icon, {
          class: "text-gray-300 ml-2 mr-4 h-8",
          icon: ["fas", "arrow-circle-down"],
          size: "lg"
        }, null, _parent2, _scopeId));
        _push2(`<span${_scopeId}>Wallet Exchange</span>`);
      } else {
        return [
          createVNode(_component_font_awesome_icon, {
            class: "text-gray-300 ml-2 mr-4 h-8",
            icon: ["fas", "arrow-circle-down"],
            size: "lg"
          }),
          createVNode("span", null, "Wallet Exchange")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_jet_nav_link_sidebar, {
    href: _ctx.route("user.index"),
    active: _ctx.activeUsers()
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_font_awesome_icon, {
          class: "text-gray-300 ml-2 mr-4 h-8",
          icon: ["fas", "users"],
          size: "1x"
        }, null, _parent2, _scopeId));
        _push2(`<span${_scopeId}>Usuarios</span>`);
      } else {
        return [
          createVNode(_component_font_awesome_icon, {
            class: "text-gray-300 ml-2 mr-4 h-8",
            icon: ["fas", "users"],
            size: "1x"
          }),
          createVNode("span", null, "Usuarios")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_jet_nav_link_sidebar, {
    href: _ctx.route("admin.dollarPriceIndex"),
    active: _ctx.activeDollarPrice()
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_font_awesome_icon, {
          class: "text-gray-300 ml-2 mr-4 h-8",
          icon: ["fas", "dollar-sign"],
          size: "lg"
        }, null, _parent2, _scopeId));
        _push2(`<span${_scopeId}>Precio Dolar</span>`);
      } else {
        return [
          createVNode(_component_font_awesome_icon, {
            class: "text-gray-300 ml-2 mr-4 h-8",
            icon: ["fas", "dollar-sign"],
            size: "lg"
          }),
          createVNode("span", null, "Precio Dolar")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_jet_nav_link_sidebar, {
    href: _ctx.route("admin.roleIndex"),
    active: _ctx.activeRole()
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_font_awesome_icon, {
          class: "text-gray-300 ml-2 mr-4 h-8",
          icon: ["fas", "user-shield"],
          size: "1x"
        }, null, _parent2, _scopeId));
        _push2(`<span${_scopeId}>Roles</span>`);
      } else {
        return [
          createVNode(_component_font_awesome_icon, {
            class: "text-gray-300 ml-2 mr-4 h-8",
            icon: ["fas", "user-shield"],
            size: "1x"
          }),
          createVNode("span", null, "Roles")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_jet_nav_link_sidebar, {
    href: _ctx.route("admin.permissionIndex"),
    active: _ctx.activePermission()
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_font_awesome_icon, {
          class: "text-gray-300 ml-2 mr-4 h-8",
          icon: ["fas", "user-lock"],
          size: "1x"
        }, null, _parent2, _scopeId));
        _push2(`<span${_scopeId}>Permisos</span>`);
      } else {
        return [
          createVNode(_component_font_awesome_icon, {
            class: "text-gray-300 ml-2 mr-4 h-8",
            icon: ["fas", "user-lock"],
            size: "1x"
          }),
          createVNode("span", null, "Permisos")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_jet_nav_link_sidebar, {
    href: _ctx.route("admin.messagingIndex"),
    active: _ctx.activeMassiveEmail()
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_font_awesome_icon, {
          class: "text-gray-300 ml-2 mr-4 h-8",
          icon: ["fas", "envelope"],
          size: "1x"
        }, null, _parent2, _scopeId));
        _push2(`<span${_scopeId}>Mensajer\xEDa Masiva</span>`);
      } else {
        return [
          createVNode(_component_font_awesome_icon, {
            class: "text-gray-300 ml-2 mr-4 h-8",
            icon: ["fas", "envelope"],
            size: "1x"
          }),
          createVNode("span", null, "Mensajer\xEDa Masiva")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></aside><div class="bg-gray-100 pt-4 lg:ml-72 min-h-screen"><nav class="bg-transparent w-full rounded-md"><div class="px-4 sm:px-6 lg:px-8"><div class="flex justify-between h-16"><div class="flex items-center">`);
  if (_ctx.$slots.header) {
    _push(`<div class="hidden lg:block"><div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">`);
    ssrRenderSlot(_ctx.$slots, "header", {}, null, _push, _parent);
    _push(`</div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="-mr-2 flex items-center lg:hidden"><button class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition"><svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24"><path class="${ssrRenderClass({ "hidden": _ctx.showingNavigationDropdown, "inline-flex": !_ctx.showingNavigationDropdown })}" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path><path class="${ssrRenderClass({ "hidden": !_ctx.showingNavigationDropdown, "inline-flex": _ctx.showingNavigationDropdown })}" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div></div><div class="flex items-center ml-6"><div class="static mr-2">`);
  _push(ssrRenderComponent(_component_font_awesome_icon, {
    class: "text-gray-600",
    icon: ["fas", "bell"],
    size: "lg"
  }, null, _parent));
  _push(`<div class="ml-3 absolute top-7">`);
  if (_ctx.$page.props.notifications.countNotifications > 0) {
    _push(ssrRenderComponent(_component_Link, {
      href: _ctx.route("admin.dashboard"),
      class: "flex h-5 w-5"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"${_scopeId}></span><span class="rounded-full h-5 w-5 bg-sky-500 text-sm text-black flex items-center pt-0 pb-[3px] justify-center"${_scopeId}>${ssrInterpolate(_ctx.$page.props.notifications.countNotifications)}</span>`);
        } else {
          return [
            createVNode("span", { class: "animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" }),
            createVNode("span", { class: "rounded-full h-5 w-5 bg-sky-500 text-sm text-black flex items-center pt-0 pb-[3px] justify-center" }, toDisplayString(_ctx.$page.props.notifications.countNotifications), 1)
          ];
        }
      }),
      _: 1
    }, _parent));
  } else {
    _push(`<div class="flex h-5 w-5"><span class="rounded-full h-5 w-5 bg-yellow-brand bg-opacity-60 text-sm text-black flex items-center pt-0 pb-[3px] justify-center"> 0 </span></div>`);
  }
  _push(`</div></div></div></div></div></nav><main class="${ssrRenderClass([{ "hidden": _ctx.showingNavigationDropdown }, "md:block overflow-y-auto min-h-[90vh]"])}">`);
  _push(ssrRenderComponent(_component_jet_banner, null, null, _parent));
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</main></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/AppLayoutAdmin.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const AppLayoutAdmin = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  AppLayoutAdmin as A
};
