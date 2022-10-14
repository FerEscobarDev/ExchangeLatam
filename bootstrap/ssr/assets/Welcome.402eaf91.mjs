import { defineComponent, resolveComponent, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { Head, Link } from "@inertiajs/inertia-vue3";
import { J as JetApplicationMark, _ as _sfc_main$1 } from "./ResponsiveNavLink.105dcaab.mjs";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFacebook, faInstagram, faWhatsapp, faCreativeCommonsNc } from "@fortawesome/free-brands-svg-icons";
import { faBusinessTime, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { ssrRenderComponent, ssrRenderAttr, ssrRenderClass, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.43be4956.mjs";
import "./logoweb.e431fb6b.mjs";
const _imports_0 = "/build/assets/UpTrading_Vertical_Amarillo.a33ef38b.jpg";
const _imports_1 = "/build/assets/divitrade.b8c615ea.jpg";
library.add(faFacebook, faInstagram, faWhatsapp, faBusinessTime, faCreativeCommonsNc, faGlobe);
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
  _push(ssrRenderComponent(_component_Head, { title: "Exchanger para Brokers en Colombia." }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<meta name="description" content="Obten un Exchanger con el cual podr\xE1s realizar dep\xF3sitos y retiros de tu broker o billetera virtual desde y hacia tu cuenta bancaria con bajas comisiones, agilidad y confianza.
                    Con ExchangeLatam empresa colombiana con 5 a\xF1os de experiencia, Preoc\xFApate solo por operar, nosotros hacemos el resto." head-key="description"${_scopeId}>`);
      } else {
        return [
          createVNode("meta", {
            name: "description",
            content: "Obten un Exchanger con el cual podr\xE1s realizar dep\xF3sitos y retiros de tu broker o billetera virtual desde y hacia tu cuenta bancaria con bajas comisiones, agilidad y confianza.\r\n                    Con ExchangeLatam empresa colombiana con 5 a\xF1os de experiencia, Preoc\xFApate solo por operar, nosotros hacemos el resto.",
            "head-key": "description"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div><div class="static"><nav class="h-16 bg-dark-brand z-50 fixed top-0 left-0 right-0"><div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px:8"><div class="h-16"><div class="flex justify-between h-16"><div class="flex-shrink-0 flex items-center">`);
  _push(ssrRenderComponent(_component_Link, {
    href: _ctx.route("dashboard")
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
  _push(`</div></div></div></nav></div><header class="min-h-screen flex items-center bg-fixed bg-cover bg-center relative left-0 top-0 text-white" style="${ssrRenderStyle({ "background-image": "url(../images/fondo.jpg)" })}"><div class="bg-black/50 min-h-screen w-screen"></div><div class="container absolute mx-auto left-0 right-0 content-center text-center"><h1 class="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-widest mb-3">EXCHANGELATAM</h1><p class="text-lg md:text-2xl"> Exchanger para brokers en Colombia. </p><p class="text-lg md:text-2xl"> Preoc\xFApate solo por operar, nosotros hacemos el resto. </p></div></header><div class="relative z-[3] bg-white -mt-14 w-11/12 mx-auto content-center rounded-md shadow-lg block mb-4"><div class="container mx-auto py-8"><section class="w-full lg:max-w-4xl text-center mx-auto mb-10"><h2 class="text-4xl md:text-5xl text-black/75 font-bold p-5">Nuestro servicio</h2><p class="text-lg md:text-xl text-black/40 font-medium pt-2 px-4 text-justify"> Prestamos el servicio de intercambio de divisas desde y hacia su broker para que pueda administrar su inversi\xF3n sin necesidad de transferencias internacionales costosas o tarjetas de cr\xE9dito, todas sus transacciones ser\xE1n de manera local y con medios de pago locales o directamente desde la app de su banco. </p></section><div class="text-center lg:max-w-5xl mx-auto"><h2 class="text-4xl md:text-5xl text-black/75 font-bold mb-5 p-5">Aliados Comerciales</h2><div class="grid grid-cols-1 md:grid-cols-2 pt-2"><section class="flex flex-col md:flex-row mx-8 md:mx-auto"><div class="grow w-full md:w-1/3 h-max rounded-xl shadow-2xl mb-5 md:ml-3"><a target="_blank" href="https://www.up-trading.com/"><img class="w-full md:w-[211px] rounded-xl object-contain"${ssrRenderAttr("src", _imports_0)}></a></div><div class="flex-none w-full md:w-2/3 px-5"><div class=""><h5 class="text-lg md:text-xl text-black/75 pt-5 font-bold">Up Trading</h5><h6 class="text-sm md:text-normal text-black/50 py-2 font-bold uppercase">Academia</h6><p class="text-justify text-base text-black/40 font-normal pb-3"> UP Trading es una academia de educaci\xF3n en mercados burs\xE1tiles que tiene como prop\xF3sito superior mejorar la calidad de vida por medio de las inversiones inteligentes en Trading digital. </p><p class="text-justify text-base text-black/40 font-normal"> Desde 2014 llevamos brindando educaci\xF3n en Universidades locales y en m\xE1s de 18 paises por medios digitales en donde hemos capacitado m\xE1s de 1200 estudiantes. </p></div><div class="mb-10 py-10"><a target="_blank" href="https://www.instagram.com/up.trading/" class="px-1 pt-1 text-lg text-instagram hover:opacity-60 transition">`);
  _push(ssrRenderComponent(_component_font_awesome_icon, {
    icon: ["fab", "instagram"],
    size: "lg"
  }, null, _parent));
  _push(`</a><a target="_blank" href="https://es-la.facebook.com/uptrading.edu/" class="px-1 pt-1 text-lg text-blue-500 hover:opacity-60 transition">`);
  _push(ssrRenderComponent(_component_font_awesome_icon, {
    icon: ["fab", "facebook"],
    size: "lg"
  }, null, _parent));
  _push(`</a><a target="_blank" href="https://www.up-trading.com/" class="text-base text-black/50 font-bold">`);
  _push(ssrRenderComponent(_component_font_awesome_icon, {
    icon: ["fas", "globe"],
    size: "lg"
  }, null, _parent));
  _push(` www.up-trading.com </a></div></div></section><section class="flex flex-col md:flex-row mx-8 md:mx-auto"><div class="grow w-full md:w-1/3 h-max rounded-xl shadow-2xl mb-5 md:ml-3"><a target="_blank" href="https://www.divitradefx.com/"><img class="w-full md:w-[211px] rounded-xl object-contain"${ssrRenderAttr("src", _imports_1)}></a></div><div class="flex-none w-full md:w-2/3 px-5"><div class=""><h5 class="text-lg md:text-xl text-black/75 pt-5 font-bold">Divitrade FX</h5><h6 class="text-sm md:text-normal text-black/50 py-2 font-bold uppercase">Academia</h6><p class="text-justify text-base text-black/40 font-normal pb-3"> Somos una academia enfocada en la educaci\xF3n de una nueva generaci\xF3n de traders que sienta sus bases en la alta precisi\xF3n y el smart money. Legalmente estamos constituidos como Divitradefx desde 2017 con el NIT 1110542113-1. </p><p class="text-justify text-base text-black/40 font-normal"> Divitade Fx emplea recursos virtuales para facilitar el acceso a la educaci\xF3n a personas de todo el mundo. </p></div><div class="mb-10 py-10"><a target="_blank" href="https://www.instagram.com/divitrade.fx/" class="px-1 pt-1 text-lg text-instagram hover:opacity-60 transition">`);
  _push(ssrRenderComponent(_component_font_awesome_icon, {
    icon: ["fab", "instagram"],
    size: "lg"
  }, null, _parent));
  _push(`</a><a target="_blank" href="https://www.facebook.com/divitrade.fx/" class="px-1 pt-1 text-lg text-blue-500 hover:opacity-60 transition">`);
  _push(ssrRenderComponent(_component_font_awesome_icon, {
    icon: ["fab", "facebook"],
    size: "lg"
  }, null, _parent));
  _push(`</a><a target="_blank" href="https://www.divitradefx.com/" class="text-base text-black/50 font-bold">`);
  _push(ssrRenderComponent(_component_font_awesome_icon, {
    icon: ["fas", "globe"],
    size: "lg"
  }, null, _parent));
  _push(` www.divitradefx.com </a></div></div></section></div></div></div></div><footer class="bg-transparent text-black/75 p-5"><div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"><div class="flex flex-col md:flex-row"><div class="md:flex-auto md:inline-flex w-64 mx-auto">`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Publics/Welcome.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Welcome = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Welcome as default
};
