import { defineComponent, resolveComponent, mergeProps, withCtx, createTextVNode, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, useSSRContext } from "vue";
import { A as AppLayout } from "./AppLayout.8882d74f.mjs";
import { Link } from "@inertiajs/inertia-vue3";
import { _ as _sfc_main$2 } from "./Button.feee2cab.mjs";
import { _ as _sfc_main$1 } from "./Checkbox.eba10139.mjs";
import { CheckIcon } from "@heroicons/vue/solid";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime.js";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.43be4956.mjs";
import "./ResponsiveNavLink.105dcaab.mjs";
import "./logoweb.e431fb6b.mjs";
import "./NavLink.67838388.mjs";
import "@fortawesome/vue-fontawesome";
import "@fortawesome/fontawesome-svg-core";
import "@fortawesome/free-solid-svg-icons";
import "@fortawesome/free-brands-svg-icons";
dayjs.extend(relativeTime);
const _sfc_main = defineComponent({
  props: ["formFund"],
  components: {
    AppLayout,
    JetCheckbox: _sfc_main$1,
    JetButton: _sfc_main$2,
    CheckIcon,
    Link
  },
  data() {
    return {
      date: dayjs(this.formFund.date, "YYYY-MM-DD"),
      sign: this.formFund.sign === 0 ? false : true
    };
  },
  methods: {
    monthFormat() {
      console.log(this.date);
      const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiempre", "Octubre", "Noviembre", "Diciembre"];
      let formatted_date = months[this.date.$M];
      return formatted_date;
    }
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_app_layout = resolveComponent("app-layout");
  const _component_Link = resolveComponent("Link");
  const _component_jet_checkbox = resolveComponent("jet-checkbox");
  _push(ssrRenderComponent(_component_app_layout, mergeProps({ title: "Declaraci\xF3n de fondos" }, _attrs), {
    header: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h2 class="font-semibold text-xl text-gray-700 leading-tight"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Link, {
          href: _ctx.route("dashboard"),
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
        _push2(ssrRenderComponent(_component_Link, {
          href: _ctx.route("verification.create"),
          class: "text-blue-brand-gradient1 font-semibold hover:text-blue-brand"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Verificaci\xF3n de cuenta/`);
            } else {
              return [
                createTextVNode("Verificaci\xF3n de cuenta/")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`Declaraci\xF3n de fondos </h2>`);
      } else {
        return [
          createVNode("h2", { class: "font-semibold text-xl text-gray-700 leading-tight" }, [
            createVNode(_component_Link, {
              href: _ctx.route("dashboard"),
              class: "text-blue-brand-gradient1 font-semibold hover:text-blue-brand"
            }, {
              default: withCtx(() => [
                createTextVNode("Dashboard/")
              ]),
              _: 1
            }, 8, ["href"]),
            createVNode(_component_Link, {
              href: _ctx.route("verification.create"),
              class: "text-blue-brand-gradient1 font-semibold hover:text-blue-brand"
            }, {
              default: withCtx(() => [
                createTextVNode("Verificaci\xF3n de cuenta/")
              ]),
              _: 1
            }, 8, ["href"]),
            createTextVNode("Declaraci\xF3n de fondos ")
          ])
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="py-6 w-full"${_scopeId}><div class="flex mx-auto lg:mr-4"${_scopeId}><div class="container mx-auto sm:px-6 lg:px-8"${_scopeId}><div class="bg-white overflow-hidden shadow-xl sm:rounded-lg py-6"${_scopeId}><h1 class="text-3xl text-black/75 font-semibold px-3 pb-3 text-center"${_scopeId}>Declaraci\xF3n Origen de Fondos</h1><div${_scopeId}><div class="col-span-6"${_scopeId}><p class="text-lg md:text-xl text-black/60 font-medium text-justify px-4 md:px-8 max-w-3xl lg:mx-auto mb-4"${_scopeId}> Yo, <span class="text-black/50 font-semibold underline decoration-2"${_scopeId}>${ssrInterpolate(_ctx.$page.props.user.name + " " + _ctx.$page.props.user.lastname)}</span>, identificado(a) con el documento de identidad No. <span class="text-black/50 font-semibold underline decoration-2"${_scopeId}>${ssrInterpolate(_ctx.$page.props.user.data_user.doc_num)}</span> expedido en <span class="text-black/50 font-semibold underline decoration-2"${_scopeId}>${ssrInterpolate(_ctx.$page.props.user.data_user.expeditionPlace)}</span>, obrando en nombre propio de manera voluntaria en mi calidad de persona natural y dando certeza de que todo lo aqu\xED consignado es cierto, realizo la siguiente declaraci\xF3n de origen de fondos con el prop\xF3sito de dar cumplimiento a lo se\xF1alado al respecto en las Pol\xEDticas SAGRILAFT/FPADM de EXCHANGELATAM S.A.S. </p><ul class="list-decimal list-inside text-lg md:text-xl text-black/60 font-medium max-w-3xl lg:mx-auto px-4 md:px-8"${_scopeId}><li class="mb-2"${_scopeId}><span class="text-justify"${_scopeId}> Declaro que los recursos que entrego provienen de actividades l\xEDcitas, de conformidad con la normatividad Colombiana. </span></li><li class="mb-2"${_scopeId}><span class="text-justify"${_scopeId}> Que no admitir\xE9 que terceros efect\xFAen dep\xF3sitos en mis cuentas con fondos provenientes de las actividades il\xEDcitas contempladas en el C\xF3digo Penal Colombiano o en cualquier otra norma que lo adiciones; ni efectuar\xE9 transacciones destinadas a tales actividades o a favor de personas relacionas con las mismas. </span></li><li class="mb-2"${_scopeId}><span class="text-justify"${_scopeId}> Autorizo a resolver cualquier acuerdo, negocio o contrato celebrado con EXCHANGE LATAM S.A.S., en caso de infracci\xF3n de cualquiera de los numerales contenidos en este documento eximiendo a la entidad de toda responsabilidad que se derive por informaci\xF3n err\xF3nea, falsa o inexacta que yo hubiere proporcionado en este documento, o de la violaci\xF3n del mismo. </span></li><li class="mb-2"${_scopeId}><span class="text-justify"${_scopeId}> Autorizo a EXCHANGE LATAM S.A.S. para que, en caso de que lo juzgue necesario, consulte mi informaci\xF3n en listas restrictivas como la Lista del Consejo de Seguridad de las Naciones Unidas, as\xED como en listas OFAC, INTERPOL o FBI. </span></li></ul><p class="text-lg md:text-xl text-black/60 font-medium text-justify px-4 md:px-8 max-w-3xl lg:mx-auto mb-4"${_scopeId}> Bajo la gravedad de juramento manifiesto que los datos aqu\xED consignados obedecen a la realidad, por lo que declaro haber le\xEDdo, entendido y aceptado el presente documento, en constancia firmo a los ${ssrInterpolate(_ctx.date.$D)} d\xEDas del mes de ${ssrInterpolate(_ctx.monthFormat())}, del a\xF1o ${ssrInterpolate(_ctx.date.$y)}, en la ciudad de <span class="text-black/50 font-semibold underline decoration-2"${_scopeId}>${ssrInterpolate(_ctx.formFund.citySign)}</span>. </p><div class="text-lg md:text-xl text-black/60 font-medium text-justify px-4 md:px-8 max-w-3xl lg:mx-auto mb-4"${_scopeId}><div class="flex items-center"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_checkbox, {
          readonly: "",
          disabled: "",
          name: "sign",
          id: "sign",
          class: "ml-4",
          checked: _ctx.sign,
          "onUpdate:checked": ($event) => _ctx.sign = $event
        }, null, _parent2, _scopeId));
        _push2(`<span class="px-2 text-black/75"${_scopeId}>Firma electr\xF3nica:</span> <span class="underline"${_scopeId}>${ssrInterpolate(_ctx.$page.props.user.name + " " + _ctx.$page.props.user.lastname)}</span></div><div class="text-sm font-normal pl-4 mt-2"${_scopeId}> ACEPTACI\xD3N Y FIRMA ELECTR\xD3NICA: Las partes acuerdan que el requisito de firma en el presente documento queda satisfecho y tendr\xE1 plenos efectos jur\xEDdicos con la aceptaci\xF3n electr\xF3nica que el cliente haga con la utilizaci\xF3n de su NIP y/o C\xF3digo y/o Clave y/o imposici\xF3n de huella y/o la utilizaci\xF3n de n\xFAmeros de identificaci\xF3n personal y/o la imposici\xF3n en el presente contrato de su firma manuscrita escaneada y/o la utilizaci\xF3n de sistemas y/o la utilizaci\xF3n de botones de aceptaci\xF3n de tipo &quot;si&quot;, &quot;aceptar&quot; o &quot;acepto&quot; y/o la combinaci\xF3n del documento de identidad proporcionado por el cliente con anterioridad a la firma de este documento. Por utilizaci\xF3n de nuestros servicios de ExchangeLatam el CLIENTE acepta que ha leido y aceptado nuestros t\xE9rminos y condiciones de servicio, al igual que las pol\xEDticas de privacidad y SAGRILAFT. En se\xF1al de aceptaci\xF3n de lo expresado, se firma el presente documento mediante la imposici\xF3n de mi firma electr\xF3nica y check in en la aceptaci\xF3n de firma electr\xF3nica en el presente documento. </div></div>`);
        if (_ctx.$page.props.flash.success) {
          _push2(`<div class="max-w-max mx-auto mb-5"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_Link, {
            disabled: "",
            href: _ctx.route("verification.create"),
            class: "text-center inline-flex items-center px-4 py-2 bg-dark-brand border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition"
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(` Finalizar `);
              } else {
                return [
                  createTextVNode(" Finalizar ")
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
          _push2(`</div>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div></div></div></div></div></div>`);
      } else {
        return [
          createVNode("div", { class: "py-6 w-full" }, [
            createVNode("div", { class: "flex mx-auto lg:mr-4" }, [
              createVNode("div", { class: "container mx-auto sm:px-6 lg:px-8" }, [
                createVNode("div", { class: "bg-white overflow-hidden shadow-xl sm:rounded-lg py-6" }, [
                  createVNode("h1", { class: "text-3xl text-black/75 font-semibold px-3 pb-3 text-center" }, "Declaraci\xF3n Origen de Fondos"),
                  createVNode("div", null, [
                    createVNode("div", { class: "col-span-6" }, [
                      createVNode("p", { class: "text-lg md:text-xl text-black/60 font-medium text-justify px-4 md:px-8 max-w-3xl lg:mx-auto mb-4" }, [
                        createTextVNode(" Yo, "),
                        createVNode("span", { class: "text-black/50 font-semibold underline decoration-2" }, toDisplayString(_ctx.$page.props.user.name + " " + _ctx.$page.props.user.lastname), 1),
                        createTextVNode(", identificado(a) con el documento de identidad No. "),
                        createVNode("span", { class: "text-black/50 font-semibold underline decoration-2" }, toDisplayString(_ctx.$page.props.user.data_user.doc_num), 1),
                        createTextVNode(" expedido en "),
                        createVNode("span", { class: "text-black/50 font-semibold underline decoration-2" }, toDisplayString(_ctx.$page.props.user.data_user.expeditionPlace), 1),
                        createTextVNode(", obrando en nombre propio de manera voluntaria en mi calidad de persona natural y dando certeza de que todo lo aqu\xED consignado es cierto, realizo la siguiente declaraci\xF3n de origen de fondos con el prop\xF3sito de dar cumplimiento a lo se\xF1alado al respecto en las Pol\xEDticas SAGRILAFT/FPADM de EXCHANGELATAM S.A.S. ")
                      ]),
                      createVNode("ul", { class: "list-decimal list-inside text-lg md:text-xl text-black/60 font-medium max-w-3xl lg:mx-auto px-4 md:px-8" }, [
                        createVNode("li", { class: "mb-2" }, [
                          createVNode("span", { class: "text-justify" }, " Declaro que los recursos que entrego provienen de actividades l\xEDcitas, de conformidad con la normatividad Colombiana. ")
                        ]),
                        createVNode("li", { class: "mb-2" }, [
                          createVNode("span", { class: "text-justify" }, " Que no admitir\xE9 que terceros efect\xFAen dep\xF3sitos en mis cuentas con fondos provenientes de las actividades il\xEDcitas contempladas en el C\xF3digo Penal Colombiano o en cualquier otra norma que lo adiciones; ni efectuar\xE9 transacciones destinadas a tales actividades o a favor de personas relacionas con las mismas. ")
                        ]),
                        createVNode("li", { class: "mb-2" }, [
                          createVNode("span", { class: "text-justify" }, " Autorizo a resolver cualquier acuerdo, negocio o contrato celebrado con EXCHANGE LATAM S.A.S., en caso de infracci\xF3n de cualquiera de los numerales contenidos en este documento eximiendo a la entidad de toda responsabilidad que se derive por informaci\xF3n err\xF3nea, falsa o inexacta que yo hubiere proporcionado en este documento, o de la violaci\xF3n del mismo. ")
                        ]),
                        createVNode("li", { class: "mb-2" }, [
                          createVNode("span", { class: "text-justify" }, " Autorizo a EXCHANGE LATAM S.A.S. para que, en caso de que lo juzgue necesario, consulte mi informaci\xF3n en listas restrictivas como la Lista del Consejo de Seguridad de las Naciones Unidas, as\xED como en listas OFAC, INTERPOL o FBI. ")
                        ])
                      ]),
                      createVNode("p", { class: "text-lg md:text-xl text-black/60 font-medium text-justify px-4 md:px-8 max-w-3xl lg:mx-auto mb-4" }, [
                        createTextVNode(" Bajo la gravedad de juramento manifiesto que los datos aqu\xED consignados obedecen a la realidad, por lo que declaro haber le\xEDdo, entendido y aceptado el presente documento, en constancia firmo a los " + toDisplayString(_ctx.date.$D) + " d\xEDas del mes de " + toDisplayString(_ctx.monthFormat()) + ", del a\xF1o " + toDisplayString(_ctx.date.$y) + ", en la ciudad de ", 1),
                        createVNode("span", { class: "text-black/50 font-semibold underline decoration-2" }, toDisplayString(_ctx.formFund.citySign), 1),
                        createTextVNode(". ")
                      ]),
                      createVNode("div", { class: "text-lg md:text-xl text-black/60 font-medium text-justify px-4 md:px-8 max-w-3xl lg:mx-auto mb-4" }, [
                        createVNode("div", { class: "flex items-center" }, [
                          createVNode(_component_jet_checkbox, {
                            readonly: "",
                            disabled: "",
                            name: "sign",
                            id: "sign",
                            class: "ml-4",
                            checked: _ctx.sign,
                            "onUpdate:checked": ($event) => _ctx.sign = $event
                          }, null, 8, ["checked", "onUpdate:checked"]),
                          createVNode("span", { class: "px-2 text-black/75" }, "Firma electr\xF3nica:"),
                          createTextVNode(),
                          createVNode("span", { class: "underline" }, toDisplayString(_ctx.$page.props.user.name + " " + _ctx.$page.props.user.lastname), 1)
                        ]),
                        createVNode("div", { class: "text-sm font-normal pl-4 mt-2" }, ' ACEPTACI\xD3N Y FIRMA ELECTR\xD3NICA: Las partes acuerdan que el requisito de firma en el presente documento queda satisfecho y tendr\xE1 plenos efectos jur\xEDdicos con la aceptaci\xF3n electr\xF3nica que el cliente haga con la utilizaci\xF3n de su NIP y/o C\xF3digo y/o Clave y/o imposici\xF3n de huella y/o la utilizaci\xF3n de n\xFAmeros de identificaci\xF3n personal y/o la imposici\xF3n en el presente contrato de su firma manuscrita escaneada y/o la utilizaci\xF3n de sistemas y/o la utilizaci\xF3n de botones de aceptaci\xF3n de tipo "si", "aceptar" o "acepto" y/o la combinaci\xF3n del documento de identidad proporcionado por el cliente con anterioridad a la firma de este documento. Por utilizaci\xF3n de nuestros servicios de ExchangeLatam el CLIENTE acepta que ha leido y aceptado nuestros t\xE9rminos y condiciones de servicio, al igual que las pol\xEDticas de privacidad y SAGRILAFT. En se\xF1al de aceptaci\xF3n de lo expresado, se firma el presente documento mediante la imposici\xF3n de mi firma electr\xF3nica y check in en la aceptaci\xF3n de firma electr\xF3nica en el presente documento. ')
                      ]),
                      _ctx.$page.props.flash.success ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "max-w-max mx-auto mb-5"
                      }, [
                        createVNode(_component_Link, {
                          disabled: "",
                          href: _ctx.route("verification.create"),
                          class: "text-center inline-flex items-center px-4 py-2 bg-dark-brand border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Finalizar ")
                          ]),
                          _: 1
                        }, 8, ["href"])
                      ])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Profile/FormFundShow.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const FormFundShow = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  FormFundShow as default
};
