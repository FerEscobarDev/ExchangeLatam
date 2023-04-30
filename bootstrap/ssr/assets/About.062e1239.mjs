import { defineComponent, resolveComponent, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { Head, Link } from "@inertiajs/inertia-vue3";
import { J as JetApplicationMark, _ as _sfc_main$1 } from "./ResponsiveNavLink.105dcaab.mjs";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFacebook, faInstagram, faWhatsapp, faSketch } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faCompass } from "@fortawesome/free-solid-svg-icons";
import { ssrRenderComponent, ssrRenderAttr, ssrRenderClass, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.43be4956.mjs";
import "./logoweb.e431fb6b.mjs";
library.add(faFacebook, faInstagram, faWhatsapp, faEnvelope, faSketch, faCompass);
const _sfc_main = defineComponent({
  components: {
    Head,
    Link,
    JetApplicationMark,
    FontAwesomeIcon,
    JetResponsiveNavLink: _sfc_main$1
  },
  data() {
    return {
      showingNavigationDropdown: false
    };
  },
  props: {
    canLogin: Boolean,
    canRegister: Boolean,
    contact: Array
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_Link = resolveComponent("Link");
  const _component_jet_application_mark = resolveComponent("jet-application-mark");
  const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
  const _component_jet_responsive_nav_link = resolveComponent("jet-responsive-nav-link");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Head, { title: "Acerca de nosotros" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<meta name="description" content="Somos un exchanger en Colombia para el brokers desde marzo del 2017, operamos 100% de manera virtual y como persona jur\xEDdica bajo la raz\xF3n social de ExchangeLatam SAS con NIT. 901.422.406-6." head-key="description"${_scopeId}>`);
      } else {
        return [
          createVNode("meta", {
            name: "description",
            content: "Somos un exchanger en Colombia para el brokers desde marzo del 2017, operamos 100% de manera virtual y como persona jur\xEDdica bajo la raz\xF3n social de ExchangeLatam SAS con NIT. 901.422.406-6.",
            "head-key": "description"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div><div class="static"><nav class="h-16 bg-dark-brand z-50 fixed top-0 left-0 right-0"><div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px:8"><div class="h-16"><div class="flex justify-between h-16"><div class="flex-shrink-0 flex items-center">`);
  _push(ssrRenderComponent(_component_Link, {
    href: _ctx.route("company.welcome")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_jet_application_mark, { class: "block h-auto w-auto" }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_jet_application_mark, { class: "block h-auto w-auto" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
  if (_ctx.canLogin) {
    _push(`<div class="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">`);
    if (_ctx.$page.props.user) {
      _push(ssrRenderComponent(_component_Link, {
        href: _ctx.route("dashboard"),
        class: "uppercase inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 text-white hover:text-gray-300 transition"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Dashboard `);
          } else {
            return [
              createTextVNode(" Dashboard ")
            ];
          }
        }),
        _: 1
      }, _parent));
    } else {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_Link, {
        href: _ctx.route("login"),
        class: "uppercase inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 text-white hover:text-gray-300 transition"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Iniciar Sesi\xF3n `);
          } else {
            return [
              createTextVNode(" Iniciar Sesi\xF3n ")
            ];
          }
        }),
        _: 1
      }, _parent));
      if (_ctx.canRegister) {
        _push(ssrRenderComponent(_component_Link, {
          href: _ctx.route("register"),
          class: "uppercase inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 text-white hover:text-gray-300 transition"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Registrarse `);
            } else {
              return [
                createTextVNode(" Registrarse ")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    }
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="hidden space-x-4 sm:-my-px sm:ml-10 sm:flex"><a${ssrRenderAttr("href", _ctx.contact[0].link)} class="inline-flex items-center px-1 pt-1 text-lg text-blue-500 hover:opacity-60 transition">`);
  _push(ssrRenderComponent(_component_font_awesome_icon, {
    icon: ["fab", "facebook"],
    size: "lg"
  }, null, _parent));
  _push(`</a><a${ssrRenderAttr("href", _ctx.contact[1].link)} class="inline-flex items-center px-1 pt-1 text-lg text-instagram hover:opacity-60 transition">`);
  _push(ssrRenderComponent(_component_font_awesome_icon, {
    icon: ["fab", "instagram"],
    size: "lg"
  }, null, _parent));
  _push(`</a><a${ssrRenderAttr("href", _ctx.contact[2].link)} class="inline-flex items-center px-1 pt-1 text-lg text-whatsapp hover:opacity-60 transition">`);
  _push(ssrRenderComponent(_component_font_awesome_icon, {
    icon: ["fab", "whatsapp"],
    size: "lg"
  }, null, _parent));
  _push(`</a></div><div class="-mr-2 flex items-center sm:hidden"><button class="inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-dark-brand hover:bg-yellow-brand transition"><svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24"><path class="${ssrRenderClass({ "hidden": _ctx.showingNavigationDropdown, "inline-flex": !_ctx.showingNavigationDropdown })}" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path><path class="${ssrRenderClass({ "hidden": !_ctx.showingNavigationDropdown, "inline-flex": _ctx.showingNavigationDropdown })}" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div></div></div></div><div class="${ssrRenderClass([{ "block": _ctx.showingNavigationDropdown, "hidden": !_ctx.showingNavigationDropdown }, "sm:hidden"])}"><div class="pb-1 bg-opacity-60 bg-dark-brand"><div class="space-y-1">`);
  if (_ctx.canLogin) {
    _push(`<div>`);
    if (_ctx.$page.props.user) {
      _push(ssrRenderComponent(_component_jet_responsive_nav_link, {
        href: _ctx.route("dashboard"),
        class: "uppercase"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>Dashboard</span>`);
          } else {
            return [
              createVNode("span", null, "Dashboard")
            ];
          }
        }),
        _: 1
      }, _parent));
    } else {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_jet_responsive_nav_link, {
        href: _ctx.route("login"),
        class: "uppercase"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>Iniciar Sesi\xF3n</span>`);
          } else {
            return [
              createVNode("span", null, "Iniciar Sesi\xF3n")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_jet_responsive_nav_link, {
        href: _ctx.route("register"),
        class: "uppercase"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>Registrarse</span>`);
          } else {
            return [
              createVNode("span", null, "Registrarse")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    }
    _push(`<div>`);
    _push(ssrRenderComponent(_component_jet_responsive_nav_link, {
      href: _ctx.route("company.faq"),
      class: "uppercase"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<span${_scopeId}>Faq</span>`);
        } else {
          return [
            createVNode("span", null, "Faq")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(ssrRenderComponent(_component_jet_responsive_nav_link, {
      href: _ctx.route("company.about"),
      class: "uppercase"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<span${_scopeId}>Acerca de Nosotros</span>`);
        } else {
          return [
            createVNode("span", null, "Acerca de Nosotros")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div><hr class="hr"><a${ssrRenderAttr("href", _ctx.contact[0].link)} class="uppercase block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-300 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition">`);
    _push(ssrRenderComponent(_component_font_awesome_icon, {
      class: "text-blue-500",
      icon: ["fab", "facebook"],
      size: "lg"
    }, null, _parent));
    _push(`<span> Facebook</span></a><a${ssrRenderAttr("href", _ctx.contact[1].link)} class="uppercase block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-300 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition">`);
    _push(ssrRenderComponent(_component_font_awesome_icon, {
      class: "text-instagram",
      icon: ["fab", "instagram"],
      size: "lg"
    }, null, _parent));
    _push(`<span> Instagram</span></a><a${ssrRenderAttr("href", _ctx.contact[2].link)} class="uppercase block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-300 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition">`);
    _push(ssrRenderComponent(_component_font_awesome_icon, {
      class: "text-whatsapp",
      icon: ["fab", "whatsapp"],
      size: "lg"
    }, null, _parent));
    _push(`<span> Whatsapp</span></a></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div></div></nav></div><header class="min-h-[60vh] h-2/3 flex items-center bg-fixed bg-cover bg-center relative left-0 top-0 text-white" style="${ssrRenderStyle({ "background-image": "url(../images/fondo.jpg)" })}"><div class="bg-black/50 min-h-[60vh] h-2/3 w-screen"></div><div class="container absolute mx-auto left-0 right-0 content-center text-center"><h1 class="text-4xl sm:text-6xl md:text-7xl font-extrabold mb-3">Acerca de Nosotros</h1></div></header><div class="relative z-[3] bg-white -mt-14 w-11/12 mx-auto content-center rounded-md shadow-lg block mb-4"><div class="container mx-auto py-8"><section class="w-full lg:max-w-4xl text-center mx-auto mb-10"><h2 class="text-4xl md:text-5xl text-black/75 font-bold p-5">\xBFQuienes somos?</h2><p class="text-lg md:text-xl text-black/40 font-medium pt-2 px-4 text-justify"> Somos un exchanger para brokers en Colombia desde septiembre del 2017, operamos 100% de manera virtual y como persona jur\xEDdica bajo la raz\xF3n social de ExchangeLatam SAS con NIT. 901.422.406-6. En ExchangeLatam nos encargamos de todo el proceso correspondiente al intercambio de divisas al momento de depositar o retirar su inversi\xF3n, de esta manera facilitamos que pueda realizar todas las transacciones desde su cuenta bancaria evitando todo el tramite de las transferencias internacionales ya que nosotros lo hacemos por usted. </p><div class="grid grid-cols-1 md:grid-cols-10 mt-10 mb-10 px-5"><section class="flex col-span-6"><div class="flex-none w-14 pt-5 text-green-500">`);
  _push(ssrRenderComponent(_component_font_awesome_icon, {
    icon: ["fab", "sketch"],
    size: "lg"
  }, null, _parent));
  _push(`</div><div class="flex-auto text-left"><h4 class="text-xl md:text-2xl text-black/75 font-semibold py-5">Misi\xF3n</h4><p class="text-base text-black/40 font-normal"> Trabajamos para ofrecer un servicio de excelente calidad en el intercambio de divisas en Colombia manejando dep\xF3sitos y retiros para brokers buscando diariamente la optimizaci\xF3n de los procesos y los tiempos de gesti\xF3n informados a nuestros clientes, garantizando seguridad en cada transacci\xF3n, siendo para nosotros un eje fundamental la atenci\xF3n personalizada en nuestros canales de contacto con los miles de inversores que hoy conf\xEDan en nosotros. </p></div></section><section class="flex col-span-4"><div class="flex-none w-14 pt-5 text-yellow-600">`);
  _push(ssrRenderComponent(_component_font_awesome_icon, {
    icon: ["fas", "compass"],
    size: "lg"
  }, null, _parent));
  _push(`</div><div class="flex-auto w-full text-left"><h4 class="text-xl md:text-2xl text-black/75 font-semibold py-5">Visi\xF3n</h4><p class="text-base text-black/40 font-normal"> Para el a\xF1o 2024 seremos la empresa l\xEDder en intercambio para Colombia y Latinoamerica. Ampliando nuestra cobertura a monederos virtuales. Logrando un impacto positivo en el servicio ofrecido a nuestros clientes. </p></div></section></div></section><section class="w-full lg:max-w-4xl text-center mx-auto mb-10"><h3 class="text-4xl md:text-4xl text-black/75 font-bold p-5">Horario de atenci\xF3n</h3><p class="text-lg md:text-xl text-black/40 font-medium pt-2 px-4 text-justify sm:text-center"> Horario de atenci\xF3n al usuario de 8:00 am a 06:00 pm en d\xEDas h\xE1biles de lunes a viernes. </p><p class="text-lg md:text-xl text-black/40 font-medium pt-2 px-4 text-justify sm:text-center"> Horario de procesamiento de transacciones de 7:00 am a 10:00 pm. </p></section><section class="w-full lg:max-w-4xl text-center mx-auto mb-10"><h3 class="text-4xl md:text-4xl text-black/75 font-bold p-5">Cont\xE1ctenos</h3><div class="grid grid-cols-1 md:grid-cols-2 text-center mb-10 py-10"><a target="_blank"${ssrRenderAttr("href", _ctx.contact[2].link)} class="px-1 pt-1 text-lg hover:opacity-60 transition">`);
  _push(ssrRenderComponent(_component_font_awesome_icon, {
    class: "text-whatsapp",
    icon: ["fab", "whatsapp"],
    size: "lg"
  }, null, _parent));
  _push(`<span class="text-base text-black/70 font-normal"> +57 322 310 55 78</span></a><a target="_blank"${ssrRenderAttr("href", _ctx.contact[3].link)} class="px-1 pt-1 text-lg hover:opacity-60 transition">`);
  _push(ssrRenderComponent(_component_font_awesome_icon, {
    class: "text-blue-600",
    icon: ["fas", "envelope"],
    size: "lg"
  }, null, _parent));
  _push(`<span class="text-base text-black/70 font-normal"> support@exchangelatam.com</span></a></div></section><section class="w-full lg:max-w-4xl text-center mx-auto mb-10"><h3 class="text-4xl md:text-4xl text-black/75 font-bold p-5">Pol\xEDticas</h3><div class="grid grid-cols-1 md:grid-cols-2 text-center mb-10 py-10"><a target="_blank"${ssrRenderAttr("href", _ctx.route("terms.show"))} class="underline text-lg text-dark-brand hover:text-blue-brand"> T\xE9rminos y Condiciones </a><a target="_blank"${ssrRenderAttr("href", _ctx.route("policy.show"))} class="underline text-lg text-dark-brand hover:text-blue-brand"> Pol\xEDtica de Tratamiendo de Datos </a><a target="_blank"${ssrRenderAttr("href", _ctx.route("company.policy"))} class="underline text-lg text-dark-brand hover:text-blue-brand"> SAGRILAFT </a></div></section></div></div><footer class="bg-transparent text-black/75 p-5"><div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"><div class="flex flex-col md:flex-row"><div class="md:flex-auto md:inline-flex w-64 mx-auto">`);
  _push(ssrRenderComponent(_component_Link, {
    href: _ctx.route("company.faq"),
    class: "px-4 inline-flex text-sm font-semibold uppercase items-center"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Faq `);
      } else {
        return [
          createTextVNode(" Faq ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Link, {
    href: _ctx.route("company.about"),
    class: "px-4 inline-flex text-sm font-semibold uppercase items-center"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Acerca de nosotros `);
      } else {
        return [
          createTextVNode(" Acerca de nosotros ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="md:inline-flex text-base items-center mx-auto"> \xA9 2022, Todos los derechos reservados. </div></div></div></footer></div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Publics/About.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const About = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  About as default
};
