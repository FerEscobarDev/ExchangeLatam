import { defineComponent, resolveComponent, mergeProps, withCtx, createTextVNode, createVNode, openBlock, createBlock, createCommentVNode, toDisplayString, useSSRContext } from "vue";
import { A as AppLayout } from "./AppLayout.ea9195d2.mjs";
import { Link } from "@inertiajs/inertia-vue3";
import { J as JetForm } from "./Form.e2d7b3ed.mjs";
import { _ as _sfc_main$2 } from "./Button.feee2cab.mjs";
import { _ as _sfc_main$1 } from "./Checkbox.eba10139.mjs";
import { _ as _sfc_main$3 } from "./Input.c38a320e.mjs";
import { _ as _sfc_main$4 } from "./InputError.bc94ef1e.mjs";
import { _ as _sfc_main$5 } from "./Label.ceceda67.mjs";
import FormsData from "./FormsData.be784cc0.mjs";
import { J as JetSelect } from "./Select.c13c9df3.mjs";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.43be4956.mjs";
import "./ResponsiveNavLink.105dcaab.mjs";
import "./logoweb.e431fb6b.mjs";
import "./NavLink.e5cf4d5a.mjs";
import "@fortawesome/vue-fontawesome";
import "@fortawesome/fontawesome-svg-core";
import "@fortawesome/free-solid-svg-icons";
import "@fortawesome/free-brands-svg-icons";
import "@headlessui/vue";
import "@heroicons/vue/solid";
const _sfc_main = defineComponent({
  props: {
    dataUser: Object,
    financialDataUser: Object
  },
  components: {
    AppLayout,
    FormsData,
    JetCheckbox: _sfc_main$1,
    JetButton: _sfc_main$2,
    JetInput: _sfc_main$3,
    JetInputError: _sfc_main$4,
    JetLabel: _sfc_main$5,
    JetForm,
    JetSelect,
    Link
  },
  setup(props) {
    let doc_types = [
      {
        "id": 1,
        "name": "C\xE9dula de Ciudadan\xEDa"
      },
      {
        "id": 2,
        "name": "C\xE9dula de Extranjer\xEDa"
      },
      {
        "id": 3,
        "name": "Pasaporte"
      }
    ];
    const now = new Date();
    console.log(now);
    let day = now.getDate();
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    if (month < 10) {
      month = "0" + month;
    }
    if (day < 10) {
      day = "0" + day;
    }
    const today = year + "-" + month + "-" + day;
    return {
      doc_types,
      today
    };
  },
  data() {
    return {
      form: this.$inertia.form({
        citySign: null,
        expeditionDate: this.dataUser.expeditionDate,
        expeditionPlace: this.dataUser.expeditionPlace,
        birthDate: this.dataUser.birthDate,
        birthPlace: this.dataUser.birthPlace,
        nationality: this.dataUser.nationality,
        pep: false,
        publicFunds: false,
        tributeCountry: false,
        countries: null,
        income: this.financialDataUser === null ? null : this.financialDataUser.income,
        expenses: this.financialDataUser === null ? null : this.financialDataUser.expenses,
        assets: this.financialDataUser === null ? null : this.financialDataUser.assets,
        liabilities: this.financialDataUser === null ? null : this.financialDataUser.liabilities,
        heritage: this.financialDataUser === null ? null : this.financialDataUser.heritage,
        incomeOther: this.financialDataUser === null ? null : this.financialDataUser.incomeOther,
        descriptionIncome: this.financialDataUser === null ? null : this.financialDataUser.descriptionIncome,
        transactionsForeignMoney: false,
        productsFinancialExt: false,
        accountsForeignMoney: false,
        auth_1: null,
        auth_2: null,
        sign: null
      }),
      doc_num: this.$page.props.user.data_user.doc_num,
      mobil: this.$page.props.user.mobil
    };
  },
  methods: {
    monthFormat() {
      const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiempre", "Octubre", "Noviembre", "Diciembre"];
      let formatted_date = months[this.now.getMonth()];
      return formatted_date;
    },
    submit() {
      this.form.post(this.route("formKnowledgeClient.store"));
    }
  },
  computed: {
    hasErrors() {
      if (this.form.errors.auth_1 || this.form.errors.auth_2 || this.form.errors.sign) {
        return true;
      } else {
        return false;
      }
    }
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_app_layout = resolveComponent("app-layout");
  const _component_Link = resolveComponent("Link");
  const _component_jet_form = resolveComponent("jet-form");
  const _component_jet_label = resolveComponent("jet-label");
  const _component_jet_input = resolveComponent("jet-input");
  const _component_jet_input_error = resolveComponent("jet-input-error");
  const _component_jet_select = resolveComponent("jet-select");
  const _component_jet_checkbox = resolveComponent("jet-checkbox");
  const _component_jet_button = resolveComponent("jet-button");
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
        _push2(`<div class="px-3 mb-4 pt-5 md:pt-6 lg:mr-4 max-w-full flex flex-col justify-center items-center shadow border border-gray-200 sm:rounded-lg bg-white"${_scopeId}><h1 class="text-3xl text-black/75 font-semibold px-3 pb-3 text-center"${_scopeId}>Formulario Conocimiento del Cliente</h1>`);
        _push2(ssrRenderComponent(_component_jet_form, { onSubmitted: _ctx.submit }, {
          form: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="col-span-3 md:col-start-1 md:col-end-3"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_jet_label, {
                for: "date",
                value: "Fecha diligenciamiento"
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_jet_input, {
                readonly: "",
                id: "date",
                type: "date",
                class: "read-only:bg-gray-200 mt-1 block w-full",
                modelValue: _ctx.today,
                "onUpdate:modelValue": ($event) => _ctx.today = $event
              }, null, _parent3, _scopeId2));
              _push3(`</div><div class="col-span-3 md:col-end-7 md:col-span-2"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_jet_label, {
                for: "citySign",
                value: "Ciudad diligenciamiento"
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_jet_input, {
                id: "citySign",
                type: "text",
                class: "read-only:bg-gray-200 mt-1 block w-full",
                modelValue: _ctx.form.citySign,
                "onUpdate:modelValue": ($event) => _ctx.form.citySign = $event
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_jet_input_error, {
                message: _ctx.form.errors.citySign,
                class: "mt-2"
              }, null, _parent3, _scopeId2));
              _push3(`</div><div class="col-span-6"${_scopeId2}><h2 class="col-span-6 text-xl text-black/75 font-semibold px-3 pt-1 text-center"${_scopeId2}>Informaci\xF3n B\xE1sica Persona Natural</h2></div><div class="col-span-6 md:col-span-3"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_jet_label, {
                for: "name",
                value: "Nombres"
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_jet_input, {
                readonly: "",
                id: "name",
                type: "text",
                class: "read-only:bg-gray-200 mt-1 block w-full",
                modelValue: _ctx.$page.props.user.name,
                "onUpdate:modelValue": ($event) => _ctx.$page.props.user.name = $event
              }, null, _parent3, _scopeId2));
              _push3(`</div><div class="col-span-6 md:col-span-3"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_jet_label, {
                for: "lastname",
                value: "Apellidos"
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_jet_input, {
                readonly: "",
                id: "lastname",
                type: "text",
                class: "read-only:bg-gray-200 mt-1 block w-full",
                modelValue: _ctx.$page.props.user.lastname,
                "onUpdate:modelValue": ($event) => _ctx.$page.props.user.lastname = $event
              }, null, _parent3, _scopeId2));
              _push3(`</div><div class="col-span-6 md:col-span-2"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_jet_select, {
                readonly: true,
                disabled: "",
                selectable: _ctx.doc_types,
                selected: _ctx.doc_types[_ctx.$page.props.user.data_user.doc_type - 1]
              }, {
                title: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` Tipo de documento `);
                  } else {
                    return [
                      createTextVNode(" Tipo de documento ")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div><div class="col-span-6 md:col-span-2"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_jet_label, {
                for: "doc_num",
                value: "N\xFAmero documento"
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_jet_input, {
                readonly: "",
                id: "doc_num",
                type: "text",
                class: "read-only:bg-gray-200 mt-1 block w-full",
                modelValue: _ctx.doc_num,
                "onUpdate:modelValue": ($event) => _ctx.doc_num = $event
              }, null, _parent3, _scopeId2));
              _push3(`</div><div class="col-span-6 md:col-span-2"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_jet_label, {
                for: "expeditionDate",
                value: "Fecha de expedici\xF3n"
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_jet_input, {
                id: "expeditionDate",
                type: "date",
                class: "read-only:bg-gray-200 mt-1 block w-full",
                modelValue: _ctx.form.expeditionDate,
                "onUpdate:modelValue": ($event) => _ctx.form.expeditionDate = $event
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_jet_input_error, {
                message: _ctx.form.errors.expeditionDate,
                class: "mt-2"
              }, null, _parent3, _scopeId2));
              _push3(`</div><div class="col-span-6 md:col-span-2"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_jet_label, {
                for: "expeditionPlace",
                value: "Lugar de expedici\xF3n"
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_jet_input, {
                id: "expeditionPlace",
                type: "text",
                class: "read-only:bg-gray-200 mt-1 block w-full",
                modelValue: _ctx.form.expeditionPlace,
                "onUpdate:modelValue": ($event) => _ctx.form.expeditionPlace = $event
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_jet_input_error, {
                message: _ctx.form.errors.expeditionPlace,
                class: "mt-2"
              }, null, _parent3, _scopeId2));
              _push3(`</div><div class="col-span-6 md:col-span-2"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_jet_label, {
                for: "birthDate",
                value: "Fecha de nacimiento"
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_jet_input, {
                id: "birthDate",
                type: "date",
                class: "read-only:bg-gray-200 mt-1 block w-full",
                modelValue: _ctx.form.birthDate,
                "onUpdate:modelValue": ($event) => _ctx.form.birthDate = $event
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_jet_input_error, {
                message: _ctx.form.errors.birthDate,
                class: "mt-2"
              }, null, _parent3, _scopeId2));
              _push3(`</div><div class="col-span-6 md:col-span-2"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_jet_label, {
                for: "birthPlace",
                value: "Lugar de nacimiento"
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_jet_input, {
                id: "birthPlace",
                type: "text",
                class: "read-only:bg-gray-200 mt-1 block w-full",
                modelValue: _ctx.form.birthPlace,
                "onUpdate:modelValue": ($event) => _ctx.form.birthPlace = $event
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_jet_input_error, {
                message: _ctx.form.errors.birthPlace,
                class: "mt-2"
              }, null, _parent3, _scopeId2));
              _push3(`</div><div class="col-span-6 md:col-span-2"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_jet_label, {
                for: "nationality",
                value: "Nacionalidad"
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_jet_input, {
                id: "nationality",
                type: "text",
                class: "read-only:bg-gray-200 mt-1 block w-full",
                modelValue: _ctx.form.nationality,
                "onUpdate:modelValue": ($event) => _ctx.form.nationality = $event
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_jet_input_error, {
                message: _ctx.form.errors.nationality,
                class: "mt-2"
              }, null, _parent3, _scopeId2));
              _push3(`</div><div class="col-span-6 md:col-span-2"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_jet_label, {
                for: "mobil",
                value: "Celular"
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_jet_input, {
                readonly: "",
                id: "mobil",
                type: "text",
                class: "read-only:bg-gray-200 mt-1 block w-full",
                modelValue: _ctx.mobil,
                "onUpdate:modelValue": ($event) => _ctx.mobil = $event
              }, null, _parent3, _scopeId2));
              _push3(`</div><div class="col-span-6 md:col-span-2"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_jet_label, {
                for: "email",
                value: "Email"
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_jet_input, {
                readonly: "",
                id: "email",
                type: "email",
                class: "read-only:bg-gray-200 mt-1 block w-full",
                modelValue: _ctx.$page.props.user.email,
                "onUpdate:modelValue": ($event) => _ctx.$page.props.user.email = $event
              }, null, _parent3, _scopeId2));
              _push3(`</div><div class="col-span-6 md:col-span-3"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_jet_label, {
                for: "departament",
                value: "Departamento"
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_jet_input, {
                readonly: "",
                id: "departament",
                type: "text",
                class: "read-only:bg-gray-200 mt-1 block w-full",
                modelValue: _ctx.$page.props.user.data_user.departament,
                "onUpdate:modelValue": ($event) => _ctx.$page.props.user.data_user.departament = $event
              }, null, _parent3, _scopeId2));
              _push3(`</div><div class="col-span-6 md:col-span-3"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_jet_label, {
                for: "city",
                value: "Ciudad"
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_jet_input, {
                readonly: "",
                id: "city",
                type: "text",
                class: "read-only:bg-gray-200 mt-1 block w-full",
                modelValue: _ctx.$page.props.user.data_user.city,
                "onUpdate:modelValue": ($event) => _ctx.$page.props.user.data_user.city = $event
              }, null, _parent3, _scopeId2));
              _push3(`</div><div class="col-span-6"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_jet_label, {
                for: "address",
                value: "Direcci\xF3n"
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_jet_input, {
                readonly: "",
                id: "address",
                type: "text",
                class: "read-only:bg-gray-200 mt-1 block w-full",
                modelValue: _ctx.$page.props.user.data_user.address,
                "onUpdate:modelValue": ($event) => _ctx.$page.props.user.data_user.address = $event
              }, null, _parent3, _scopeId2));
              _push3(`</div><div class="col-span-6"${_scopeId2}><p class="text-md md:text-lg text-black/60 font-medium text-justify px-4 py-4"${_scopeId2}> Por favor marque la casilla si su respuesta es afirmativa. </p></div><div class="col-span-6"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_jet_label, { for: "terms" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div class="flex items-center"${_scopeId3}><div class="text-lg md:text-xl font-medium mr-2"${_scopeId3}> \xBFEs persona expuesta p\xFAblicamente (PEP)? </div>`);
                    _push4(ssrRenderComponent(_component_jet_checkbox, {
                      name: "pep",
                      id: "pep",
                      checked: _ctx.form.pep,
                      "onUpdate:checked": ($event) => _ctx.form.pep = $event
                    }, null, _parent4, _scopeId3));
                    _push4(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "flex items-center" }, [
                        createVNode("div", { class: "text-lg md:text-xl font-medium mr-2" }, " \xBFEs persona expuesta p\xFAblicamente (PEP)? "),
                        createVNode(_component_jet_checkbox, {
                          name: "pep",
                          id: "pep",
                          checked: _ctx.form.pep,
                          "onUpdate:checked": ($event) => _ctx.form.pep = $event
                        }, null, 8, ["checked", "onUpdate:checked"])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div><div class="col-span-6"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_jet_label, { for: "terms" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div class="flex items-center"${_scopeId3}><div class="text-lg md:text-xl font-medium mr-2"${_scopeId3}> \xBFPor su actividad o cargo administra recursos p\xFAblicos? </div>`);
                    _push4(ssrRenderComponent(_component_jet_checkbox, {
                      name: "publicFunds",
                      id: "publicFunds",
                      checked: _ctx.form.publicFunds,
                      "onUpdate:checked": ($event) => _ctx.form.publicFunds = $event
                    }, null, _parent4, _scopeId3));
                    _push4(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "flex items-center" }, [
                        createVNode("div", { class: "text-lg md:text-xl font-medium mr-2" }, " \xBFPor su actividad o cargo administra recursos p\xFAblicos? "),
                        createVNode(_component_jet_checkbox, {
                          name: "publicFunds",
                          id: "publicFunds",
                          checked: _ctx.form.publicFunds,
                          "onUpdate:checked": ($event) => _ctx.form.publicFunds = $event
                        }, null, 8, ["checked", "onUpdate:checked"])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div><div class="col-span-6"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_jet_label, { for: "terms" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div class="flex items-center"${_scopeId3}><div class="text-lg md:text-xl font-medium mr-2"${_scopeId3}> \xBFEst\xE1 obligado a tributar en otro pa\xEDs? </div>`);
                    _push4(ssrRenderComponent(_component_jet_checkbox, {
                      name: "tributeCountry",
                      id: "tributeCountry",
                      checked: _ctx.form.tributeCountry,
                      "onUpdate:checked": ($event) => _ctx.form.tributeCountry = $event
                    }, null, _parent4, _scopeId3));
                    _push4(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "flex items-center" }, [
                        createVNode("div", { class: "text-lg md:text-xl font-medium mr-2" }, " \xBFEst\xE1 obligado a tributar en otro pa\xEDs? "),
                        createVNode(_component_jet_checkbox, {
                          name: "tributeCountry",
                          id: "tributeCountry",
                          checked: _ctx.form.tributeCountry,
                          "onUpdate:checked": ($event) => _ctx.form.tributeCountry = $event
                        }, null, 8, ["checked", "onUpdate:checked"])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div>`);
              if (_ctx.form.tributeCountry) {
                _push3(`<div class="col-span-6"${_scopeId2}>`);
                _push3(ssrRenderComponent(_component_jet_label, {
                  for: "countries",
                  value: "Indique en qu\xE9 pa\xEDses"
                }, null, _parent3, _scopeId2));
                _push3(ssrRenderComponent(_component_jet_input, {
                  id: "countries",
                  type: "text",
                  class: "read-only:bg-gray-200 mt-1 block w-full",
                  modelValue: _ctx.form.countries,
                  "onUpdate:modelValue": ($event) => _ctx.form.countries = $event
                }, null, _parent3, _scopeId2));
                _push3(ssrRenderComponent(_component_jet_input_error, {
                  message: _ctx.form.errors.countries,
                  class: "mt-2"
                }, null, _parent3, _scopeId2));
                _push3(`</div>`);
              } else {
                _push3(`<!---->`);
              }
              _push3(`<div class="col-span-6"${_scopeId2}><h2 class="col-span-6 text-xl text-black/75 font-semibold px-3 py-4 text-center"${_scopeId2}>Informaci\xF3n Financiera</h2></div><div class="col-span-6 md:col-span-2"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_jet_label, {
                for: "income",
                value: "Ingresos Mensuales (COP)"
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_jet_input, {
                id: "income",
                type: "number",
                class: "read-only:bg-gray-200 mt-1 block w-full",
                modelValue: _ctx.form.income,
                "onUpdate:modelValue": ($event) => _ctx.form.income = $event
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_jet_input_error, {
                message: _ctx.form.errors.income,
                class: "mt-2"
              }, null, _parent3, _scopeId2));
              _push3(`</div><div class="col-span-6 md:col-span-2"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_jet_label, {
                for: "expenses",
                value: "Egresos Mensuales (COP)"
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_jet_input, {
                id: "expenses",
                type: "number",
                class: "read-only:bg-gray-200 mt-1 block w-full",
                modelValue: _ctx.form.expenses,
                "onUpdate:modelValue": ($event) => _ctx.form.expenses = $event
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_jet_input_error, {
                message: _ctx.form.errors.expenses,
                class: "mt-2"
              }, null, _parent3, _scopeId2));
              _push3(`</div><div class="col-span-6 md:col-span-2"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_jet_label, {
                for: "assets",
                value: "Activos (COP)"
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_jet_input, {
                id: "assets",
                type: "number",
                class: "read-only:bg-gray-200 mt-1 block w-full",
                modelValue: _ctx.form.assets,
                "onUpdate:modelValue": ($event) => _ctx.form.assets = $event
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_jet_input_error, {
                message: _ctx.form.errors.assets,
                class: "mt-2"
              }, null, _parent3, _scopeId2));
              _push3(`</div><div class="col-span-6 md:col-span-2"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_jet_label, {
                for: "liabilities",
                value: "Pasivos (COP)"
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_jet_input, {
                id: "liabilities",
                type: "number",
                class: "read-only:bg-gray-200 mt-1 block w-full",
                modelValue: _ctx.form.liabilities,
                "onUpdate:modelValue": ($event) => _ctx.form.liabilities = $event
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_jet_input_error, {
                message: _ctx.form.errors.liabilities,
                class: "mt-2"
              }, null, _parent3, _scopeId2));
              _push3(`</div><div class="col-span-6 md:col-span-2"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_jet_label, {
                for: "heritage",
                value: "Patrimonio (COP)"
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_jet_input, {
                id: "heritage",
                type: "number",
                class: "read-only:bg-gray-200 mt-1 block w-full",
                modelValue: _ctx.form.heritage,
                "onUpdate:modelValue": ($event) => _ctx.form.heritage = $event
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_jet_input_error, {
                message: _ctx.form.errors.heritage,
                class: "mt-2"
              }, null, _parent3, _scopeId2));
              _push3(`</div><div class="col-span-6 md:col-span-2"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_jet_label, {
                for: "incomeOther",
                value: "Otros Ingresos (COP)"
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_jet_input, {
                id: "incomeOther",
                type: "number",
                class: "read-only:bg-gray-200 mt-1 block w-full",
                modelValue: _ctx.form.incomeOther,
                "onUpdate:modelValue": ($event) => _ctx.form.incomeOther = $event
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_jet_input_error, {
                message: _ctx.form.errors.incomeOther,
                class: "mt-2"
              }, null, _parent3, _scopeId2));
              _push3(`</div><div class="col-span-6"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_jet_label, {
                for: "descriptionIncome",
                value: "Concepto Otros Ingresos"
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_jet_input, {
                id: "descriptionIncome",
                type: "text",
                class: "read-only:bg-gray-200 mt-1 block w-full",
                modelValue: _ctx.form.descriptionIncome,
                "onUpdate:modelValue": ($event) => _ctx.form.descriptionIncome = $event
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_jet_input_error, {
                message: _ctx.form.errors.descriptionIncome,
                class: "mt-2"
              }, null, _parent3, _scopeId2));
              _push3(`</div><div class="col-span-6"${_scopeId2}><h2 class="col-span-6 text-xl text-black/75 font-semibold px-3 py-4 text-center"${_scopeId2}>Actividades En Operaciones Internacionales</h2><p class="text-md md:text-lg text-black/60 font-medium text-justify px-4 py-4"${_scopeId2}> Por favor marque la casilla si su respuesta es afirmativa. </p></div><div class="col-span-6"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_jet_label, { for: "terms" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div class="flex items-center"${_scopeId3}><div class="text-lg md:text-xl font-medium mr-2"${_scopeId3}> \xBFRealiza transacciones en moneda extranjera? </div>`);
                    _push4(ssrRenderComponent(_component_jet_checkbox, {
                      name: "transactionsForeignMoney",
                      id: "transactionsForeignMoney",
                      checked: _ctx.form.transactionsForeignMoney,
                      "onUpdate:checked": ($event) => _ctx.form.transactionsForeignMoney = $event
                    }, null, _parent4, _scopeId3));
                    _push4(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "flex items-center" }, [
                        createVNode("div", { class: "text-lg md:text-xl font-medium mr-2" }, " \xBFRealiza transacciones en moneda extranjera? "),
                        createVNode(_component_jet_checkbox, {
                          name: "transactionsForeignMoney",
                          id: "transactionsForeignMoney",
                          checked: _ctx.form.transactionsForeignMoney,
                          "onUpdate:checked": ($event) => _ctx.form.transactionsForeignMoney = $event
                        }, null, 8, ["checked", "onUpdate:checked"])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div><div class="col-span-6"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_jet_label, { for: "terms" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div class="flex items-center"${_scopeId3}><div class="text-lg md:text-xl font-medium mr-2"${_scopeId3}> \xBFPosee productos financieros en el exterior? </div>`);
                    _push4(ssrRenderComponent(_component_jet_checkbox, {
                      name: "productsFinancialExt",
                      id: "productsFinancialExt",
                      checked: _ctx.form.productsFinancialExt,
                      "onUpdate:checked": ($event) => _ctx.form.productsFinancialExt = $event
                    }, null, _parent4, _scopeId3));
                    _push4(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "flex items-center" }, [
                        createVNode("div", { class: "text-lg md:text-xl font-medium mr-2" }, " \xBFPosee productos financieros en el exterior? "),
                        createVNode(_component_jet_checkbox, {
                          name: "productsFinancialExt",
                          id: "productsFinancialExt",
                          checked: _ctx.form.productsFinancialExt,
                          "onUpdate:checked": ($event) => _ctx.form.productsFinancialExt = $event
                        }, null, 8, ["checked", "onUpdate:checked"])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div><div class="col-span-6"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_jet_label, { for: "terms" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div class="flex items-center"${_scopeId3}><div class="text-lg md:text-xl font-medium mr-2"${_scopeId3}> \xBFPosee cuentas en moneda extranjera? </div>`);
                    _push4(ssrRenderComponent(_component_jet_checkbox, {
                      name: "accountsForeignMoney",
                      id: "accountsForeignMoney",
                      checked: _ctx.form.accountsForeignMoney,
                      "onUpdate:checked": ($event) => _ctx.form.accountsForeignMoney = $event
                    }, null, _parent4, _scopeId3));
                    _push4(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "flex items-center" }, [
                        createVNode("div", { class: "text-lg md:text-xl font-medium mr-2" }, " \xBFPosee cuentas en moneda extranjera? "),
                        createVNode(_component_jet_checkbox, {
                          name: "accountsForeignMoney",
                          id: "accountsForeignMoney",
                          checked: _ctx.form.accountsForeignMoney,
                          "onUpdate:checked": ($event) => _ctx.form.accountsForeignMoney = $event
                        }, null, 8, ["checked", "onUpdate:checked"])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div><div class="col-span-6"${_scopeId2}><h2 class="col-span-6 text-xl text-black/75 font-semibold px-3 py-4 text-center"${_scopeId2}>Cl\xE1usula de Autorizaci\xF3n</h2><p class="text-md md:text-lg text-black/60 font-medium text-justify px-4"${_scopeId2}> Para efectos de la presente autorizaci\xF3n, enti\xE9ndase por EXCHANGELATAM S.A.S. la(s) sociedad(es). </p></div><div class="col-span-6"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_jet_label, { for: "terms" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div class="flex items-center"${_scopeId3}>`);
                    _push4(ssrRenderComponent(_component_jet_checkbox, {
                      name: "auth_1",
                      id: "auth_1",
                      class: "ml-4",
                      checked: _ctx.form.auth_1,
                      "onUpdate:checked": ($event) => _ctx.form.auth_1 = $event
                    }, null, _parent4, _scopeId3));
                    _push4(`<div class="text-md md:text-lg text-black/60 font-medium text-justify px-4 mr-2"${_scopeId3}> Autorizo expresa e inequ\xEDvocamente a usar mis datos personales con fines comerciales en los t\xE9rminos que trata la consideraci\xF3n 2 de la Cl\xE1usula de Autorizaci\xF3n del presente documento, la cual le\xED y comprend\xED cabalmente. </div></div>`);
                    _push4(ssrRenderComponent(_component_jet_input_error, {
                      message: _ctx.form.errors.auth_1,
                      class: "my-2 ml-4"
                    }, null, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode("div", { class: "flex items-center" }, [
                        createVNode(_component_jet_checkbox, {
                          name: "auth_1",
                          id: "auth_1",
                          class: "ml-4",
                          checked: _ctx.form.auth_1,
                          "onUpdate:checked": ($event) => _ctx.form.auth_1 = $event
                        }, null, 8, ["checked", "onUpdate:checked"]),
                        createVNode("div", { class: "text-md md:text-lg text-black/60 font-medium text-justify px-4 mr-2" }, " Autorizo expresa e inequ\xEDvocamente a usar mis datos personales con fines comerciales en los t\xE9rminos que trata la consideraci\xF3n 2 de la Cl\xE1usula de Autorizaci\xF3n del presente documento, la cual le\xED y comprend\xED cabalmente. ")
                      ]),
                      createVNode(_component_jet_input_error, {
                        message: _ctx.form.errors.auth_1,
                        class: "my-2 ml-4"
                      }, null, 8, ["message"])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div><div class="col-span-6"${_scopeId2}><p class="text-md md:text-lg text-black/60 font-medium text-justify px-4"${_scopeId2}> Declaro expresamente: </p><ul class="list-decimal list-inside text-md md:text-lg text-black/60 font-medium text-justify px-4"${_scopeId2}><li class="mb-2"${_scopeId2}><span class="text-justify"${_scopeId2}> Que para efectos de acceder a la prestaci\xF3n de productos y/o servicios por parte de EXCHANGELATAM S.A.S., suministramos nuestros datos para todos los fines precontractuales y contractuales, as\xED como para fines comerciales, de consulta y conocimiento de la persona jur\xEDdica. </span></li><li class="mb-2"${_scopeId2}><span class="text-justify"${_scopeId2}> Que EXCHANGELATAM S.A.S. ha informado de manera expresa: </span><ul class="list-none list-inside text-md md:text-lg text-black/60 font-medium text-justify px-4"${_scopeId2}><li class="mb-2"${_scopeId2}><span class="text-justify"${_scopeId2}> I. Finalidad del tratamiento de datos personales. </span></li><li class="mb-2"${_scopeId2}><span class="text-justify"${_scopeId2}> II. El tratamiento podr\xE1 ser realizado directamente por la citada sociedad o por los encargados del tratamiento que ellas consideren necesarios. </span></li><li class="mb-2"${_scopeId2}><span class="text-justify"${_scopeId2}> III. Usuarios de la informaci\xF3n </span></li><li class="mb-2"${_scopeId2}><span class="text-justify"${_scopeId2}> IV. TRANSFERENCIA INTERNACIONAL DE INFORMACI\xD3N A TERCEROS PA\xCDSES: que en ciertas situaciones es necesario realizar transferencias internacionales de mis datos para cumplir las finalidades del tratamiento. </span></li><li class="mb-2"${_scopeId2}><span class="text-justify"${_scopeId2}> V. DATOS PERSONALES DE NI\xD1AS, NI\xD1OS Y ADOLESCENTES: que son facultativas las respuestas a las preguntas sobre datos de ni\xF1as, ni\xF1os y adolescentes. En consencuencia, no hemos sido obligados a responderlas. </span></li><li class="mb-2"${_scopeId2}><span class="text-justify"${_scopeId2}> VI. DERECHOS DEL TITULAR DE LA INFORMACI\xD3N: que como titular de la informaci\xF3n, nos asisten los derechos previstos en la Ley 1266 de 2008. En especial, el derecho a conocer, actualizar y rectificar las informaciones que se hayan recogido sobre nosotros. </span></li><li class="mb-2"${_scopeId2}><span class="text-justify"${_scopeId2}> VII. RESPONSABLES Y ENCARGADOS DEL TRATAMIENTO DE LA INFORMACI\xD3N: que los Responsables del tratamiento de la informaci\xF3n es EXCHANGELATAM S.A.S., cuyos datos de contacto se incluyeron en el encabezado de esta autorizaci\xF3n. </span></li></ul>`);
              _push3(ssrRenderComponent(_component_jet_label, { for: "terms" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div class="flex items-center"${_scopeId3}>`);
                    _push4(ssrRenderComponent(_component_jet_checkbox, {
                      name: "auth_2",
                      id: "auth_2",
                      class: "ml-4",
                      checked: _ctx.form.auth_2,
                      "onUpdate:checked": ($event) => _ctx.form.auth_2 = $event
                    }, null, _parent4, _scopeId3));
                    _push4(`<div class="text-md md:text-lg text-black/60 font-medium text-justify px-4 mr-2"${_scopeId3}> Autorizo expresa e inequ\xEDvocamente a EXCHANGELATAM S.A.S. para que traten mis datos personales en los t\xE9rminos descritos en el numeral III del numeral 2 denominado &quot;usuarios de la informaci\xF3n&quot;, especialmente para efectos de prevenci\xF3n y control de fraudes, la selecci\xF3n de riesgos, y control de requisitos para acceder al Sistema General de Seguridad Social Integral, as\xED como la elaboraci\xF3n de estudios internos. </div></div>`);
                    _push4(ssrRenderComponent(_component_jet_input_error, {
                      message: _ctx.form.errors.auth_2,
                      class: "my-2 ml-4"
                    }, null, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode("div", { class: "flex items-center" }, [
                        createVNode(_component_jet_checkbox, {
                          name: "auth_2",
                          id: "auth_2",
                          class: "ml-4",
                          checked: _ctx.form.auth_2,
                          "onUpdate:checked": ($event) => _ctx.form.auth_2 = $event
                        }, null, 8, ["checked", "onUpdate:checked"]),
                        createVNode("div", { class: "text-md md:text-lg text-black/60 font-medium text-justify px-4 mr-2" }, ' Autorizo expresa e inequ\xEDvocamente a EXCHANGELATAM S.A.S. para que traten mis datos personales en los t\xE9rminos descritos en el numeral III del numeral 2 denominado "usuarios de la informaci\xF3n", especialmente para efectos de prevenci\xF3n y control de fraudes, la selecci\xF3n de riesgos, y control de requisitos para acceder al Sistema General de Seguridad Social Integral, as\xED como la elaboraci\xF3n de estudios internos. ')
                      ]),
                      createVNode(_component_jet_input_error, {
                        message: _ctx.form.errors.auth_2,
                        class: "my-2 ml-4"
                      }, null, 8, ["message"])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`<span class="text-justify mt-2 px-4"${_scopeId2}> Para efectos de la verificaci\xF3n espec\xEDfica de las pol\xEDticas internas sobre el tratamiento de datos personales, como titular de la informaci\xF3n acudir\xE9 a las p\xE1ginas web de los responsables y encargados que estoy autorizando en el presente escrito. </span></li><li class="mb-2"${_scopeId2}><span class="text-justify"${_scopeId2}> AUTORIZACI\xD3N: de manera expresa, AUTORIZAMOS el Tratamiento de los datos y, de ser necesario, la transferencia nacional e internacional de los mismos, por las personas, para las finalidades y en los t\xE9rminos que nos fueron informados en este documento. </span></li><li class="mb-2"${_scopeId2}><span class="text-justify"${_scopeId2}> CERTIFICACI\xD3N: manifestamos que la informaci\xF3n suministrada por nosotros para las finalidades se\xF1aladas en este documento, puede contener datos personales de empleados, proveedores, colaboradores o clientes de la compa\xF1\xEDa, por lo cual certificamos de manera expresa que la misma, ha sido: i) obtenida de acuerdo con lo previsto en la legislaci\xF3n aplicable, particularmente en la Ley 1581 de 2012 y ii) que, existen las autorizaciones necesarias de acuerdo con lo previsto en la legislaci\xF3n aplicable, para el tratamiento y circulaci\xF3n de esta Base de Datos por parte de EXCHANGELATAM S.A.S. se\xF1alado en este documento. </span></li></ul></div><div class="col-span-6 text-md md:text-lg text-black/60 font-medium text-justify px-4"${_scopeId2}><div class="flex items-center"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_jet_checkbox, {
                name: "sign",
                id: "sign",
                checked: _ctx.form.sign,
                "onUpdate:checked": ($event) => _ctx.form.sign = $event
              }, null, _parent3, _scopeId2));
              _push3(` <span class="px-2 text-black/75"${_scopeId2}>Firma electr\xF3nica:</span> <span class="underline"${_scopeId2}>${ssrInterpolate(_ctx.$page.props.user.name + " " + _ctx.$page.props.user.lastname)}</span></div><div class="text-sm font-normal pl-4 mt-2"${_scopeId2}> ACEPTACI\xD3N Y FIRMA ELECTR\xD3NICA: Las partes acuerdan que el requisito de firma en el presente documento queda satisfecho y tendr\xE1 plenos efectos jur\xEDdicos con la aceptaci\xF3n electr\xF3nica que el cliente haga con la utilizaci\xF3n de su NIP y/o C\xF3digo y/o Clave y/o imposici\xF3n de huella y/o la utilizaci\xF3n de n\xFAmeros de identificaci\xF3n personal y/o la imposici\xF3n en el presente contrato de su firma manuscrita escaneada y/o la utilizaci\xF3n de sistemas y/o la utilizaci\xF3n de botones de aceptaci\xF3n de tipo &quot;si&quot;, &quot;aceptar&quot; o &quot;acepto&quot; y/o la combinaci\xF3n del documento de identidad proporcionado por el cliente con anterioridad a la firma de este documento. Por utilizaci\xF3n de nuestros servicios de ExchangeLatam el CLIENTE acepta que ha leido y aceptado nuestros t\xE9rminos y condiciones de servicio, al igual que las pol\xEDticas de privacidad y SAGRILAFT. En se\xF1al de aceptaci\xF3n de lo expresado, se firma el presente documento mediante la imposici\xF3n de mi firma electr\xF3nica y check in en la aceptaci\xF3n de firma electr\xF3nica en el presente documento. </div>`);
              _push3(ssrRenderComponent(_component_jet_input_error, {
                message: _ctx.form.errors.sign,
                class: "mt-2"
              }, null, _parent3, _scopeId2));
              _push3(`</div><div class="col-span-6 mx-auto"${_scopeId2}>`);
              if (_ctx.hasErrors) {
                _push3(`<div class="max-w-max mx-auto"${_scopeId2}><div class="font-medium text-red-600"${_scopeId2}>\xA1Vaya! Algo sali\xF3 mal.</div><ul class="mt-3 list-disc list-inside text-sm text-red-600"${_scopeId2}>`);
                if (_ctx.form.errors.auth_1) {
                  _push3(`<li${_scopeId2}>${ssrInterpolate(_ctx.form.errors.auth_1)}</li>`);
                } else {
                  _push3(`<!---->`);
                }
                if (_ctx.form.errors.auth_2) {
                  _push3(`<li${_scopeId2}>${ssrInterpolate(_ctx.form.errors.auth_2)}</li>`);
                } else {
                  _push3(`<!---->`);
                }
                if (_ctx.form.errors.sign) {
                  _push3(`<li${_scopeId2}>${ssrInterpolate(_ctx.form.errors.sign)}</li>`);
                } else {
                  _push3(`<!---->`);
                }
                _push3(`</ul></div>`);
              } else {
                _push3(`<!---->`);
              }
              _push3(`</div><div class="col-span-6"${_scopeId2}><div class="max-w-max mx-auto"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_jet_button, {
                class: [{ "opacity-25": _ctx.form.processing }, "mt-2 ml-4 md:mx-auto"],
                disabled: _ctx.form.processing
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` Firmar y enviar `);
                  } else {
                    return [
                      createTextVNode(" Firmar y enviar ")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div></div>`);
            } else {
              return [
                createVNode("div", { class: "col-span-3 md:col-start-1 md:col-end-3" }, [
                  createVNode(_component_jet_label, {
                    for: "date",
                    value: "Fecha diligenciamiento"
                  }),
                  createVNode(_component_jet_input, {
                    readonly: "",
                    id: "date",
                    type: "date",
                    class: "read-only:bg-gray-200 mt-1 block w-full",
                    modelValue: _ctx.today,
                    "onUpdate:modelValue": ($event) => _ctx.today = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                createVNode("div", { class: "col-span-3 md:col-end-7 md:col-span-2" }, [
                  createVNode(_component_jet_label, {
                    for: "citySign",
                    value: "Ciudad diligenciamiento"
                  }),
                  createVNode(_component_jet_input, {
                    id: "citySign",
                    type: "text",
                    class: "read-only:bg-gray-200 mt-1 block w-full",
                    modelValue: _ctx.form.citySign,
                    "onUpdate:modelValue": ($event) => _ctx.form.citySign = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_component_jet_input_error, {
                    message: _ctx.form.errors.citySign,
                    class: "mt-2"
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "col-span-6" }, [
                  createVNode("h2", { class: "col-span-6 text-xl text-black/75 font-semibold px-3 pt-1 text-center" }, "Informaci\xF3n B\xE1sica Persona Natural")
                ]),
                createVNode("div", { class: "col-span-6 md:col-span-3" }, [
                  createVNode(_component_jet_label, {
                    for: "name",
                    value: "Nombres"
                  }),
                  createVNode(_component_jet_input, {
                    readonly: "",
                    id: "name",
                    type: "text",
                    class: "read-only:bg-gray-200 mt-1 block w-full",
                    modelValue: _ctx.$page.props.user.name,
                    "onUpdate:modelValue": ($event) => _ctx.$page.props.user.name = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                createVNode("div", { class: "col-span-6 md:col-span-3" }, [
                  createVNode(_component_jet_label, {
                    for: "lastname",
                    value: "Apellidos"
                  }),
                  createVNode(_component_jet_input, {
                    readonly: "",
                    id: "lastname",
                    type: "text",
                    class: "read-only:bg-gray-200 mt-1 block w-full",
                    modelValue: _ctx.$page.props.user.lastname,
                    "onUpdate:modelValue": ($event) => _ctx.$page.props.user.lastname = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                createVNode("div", { class: "col-span-6 md:col-span-2" }, [
                  createVNode(_component_jet_select, {
                    readonly: true,
                    disabled: "",
                    selectable: _ctx.doc_types,
                    selected: _ctx.doc_types[_ctx.$page.props.user.data_user.doc_type - 1]
                  }, {
                    title: withCtx(() => [
                      createTextVNode(" Tipo de documento ")
                    ]),
                    _: 1
                  }, 8, ["selectable", "selected"])
                ]),
                createVNode("div", { class: "col-span-6 md:col-span-2" }, [
                  createVNode(_component_jet_label, {
                    for: "doc_num",
                    value: "N\xFAmero documento"
                  }),
                  createVNode(_component_jet_input, {
                    readonly: "",
                    id: "doc_num",
                    type: "text",
                    class: "read-only:bg-gray-200 mt-1 block w-full",
                    modelValue: _ctx.doc_num,
                    "onUpdate:modelValue": ($event) => _ctx.doc_num = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                createVNode("div", { class: "col-span-6 md:col-span-2" }, [
                  createVNode(_component_jet_label, {
                    for: "expeditionDate",
                    value: "Fecha de expedici\xF3n"
                  }),
                  createVNode(_component_jet_input, {
                    id: "expeditionDate",
                    type: "date",
                    class: "read-only:bg-gray-200 mt-1 block w-full",
                    modelValue: _ctx.form.expeditionDate,
                    "onUpdate:modelValue": ($event) => _ctx.form.expeditionDate = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_component_jet_input_error, {
                    message: _ctx.form.errors.expeditionDate,
                    class: "mt-2"
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "col-span-6 md:col-span-2" }, [
                  createVNode(_component_jet_label, {
                    for: "expeditionPlace",
                    value: "Lugar de expedici\xF3n"
                  }),
                  createVNode(_component_jet_input, {
                    id: "expeditionPlace",
                    type: "text",
                    class: "read-only:bg-gray-200 mt-1 block w-full",
                    modelValue: _ctx.form.expeditionPlace,
                    "onUpdate:modelValue": ($event) => _ctx.form.expeditionPlace = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_component_jet_input_error, {
                    message: _ctx.form.errors.expeditionPlace,
                    class: "mt-2"
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "col-span-6 md:col-span-2" }, [
                  createVNode(_component_jet_label, {
                    for: "birthDate",
                    value: "Fecha de nacimiento"
                  }),
                  createVNode(_component_jet_input, {
                    id: "birthDate",
                    type: "date",
                    class: "read-only:bg-gray-200 mt-1 block w-full",
                    modelValue: _ctx.form.birthDate,
                    "onUpdate:modelValue": ($event) => _ctx.form.birthDate = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_component_jet_input_error, {
                    message: _ctx.form.errors.birthDate,
                    class: "mt-2"
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "col-span-6 md:col-span-2" }, [
                  createVNode(_component_jet_label, {
                    for: "birthPlace",
                    value: "Lugar de nacimiento"
                  }),
                  createVNode(_component_jet_input, {
                    id: "birthPlace",
                    type: "text",
                    class: "read-only:bg-gray-200 mt-1 block w-full",
                    modelValue: _ctx.form.birthPlace,
                    "onUpdate:modelValue": ($event) => _ctx.form.birthPlace = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_component_jet_input_error, {
                    message: _ctx.form.errors.birthPlace,
                    class: "mt-2"
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "col-span-6 md:col-span-2" }, [
                  createVNode(_component_jet_label, {
                    for: "nationality",
                    value: "Nacionalidad"
                  }),
                  createVNode(_component_jet_input, {
                    id: "nationality",
                    type: "text",
                    class: "read-only:bg-gray-200 mt-1 block w-full",
                    modelValue: _ctx.form.nationality,
                    "onUpdate:modelValue": ($event) => _ctx.form.nationality = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_component_jet_input_error, {
                    message: _ctx.form.errors.nationality,
                    class: "mt-2"
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "col-span-6 md:col-span-2" }, [
                  createVNode(_component_jet_label, {
                    for: "mobil",
                    value: "Celular"
                  }),
                  createVNode(_component_jet_input, {
                    readonly: "",
                    id: "mobil",
                    type: "text",
                    class: "read-only:bg-gray-200 mt-1 block w-full",
                    modelValue: _ctx.mobil,
                    "onUpdate:modelValue": ($event) => _ctx.mobil = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                createVNode("div", { class: "col-span-6 md:col-span-2" }, [
                  createVNode(_component_jet_label, {
                    for: "email",
                    value: "Email"
                  }),
                  createVNode(_component_jet_input, {
                    readonly: "",
                    id: "email",
                    type: "email",
                    class: "read-only:bg-gray-200 mt-1 block w-full",
                    modelValue: _ctx.$page.props.user.email,
                    "onUpdate:modelValue": ($event) => _ctx.$page.props.user.email = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                createVNode("div", { class: "col-span-6 md:col-span-3" }, [
                  createVNode(_component_jet_label, {
                    for: "departament",
                    value: "Departamento"
                  }),
                  createVNode(_component_jet_input, {
                    readonly: "",
                    id: "departament",
                    type: "text",
                    class: "read-only:bg-gray-200 mt-1 block w-full",
                    modelValue: _ctx.$page.props.user.data_user.departament,
                    "onUpdate:modelValue": ($event) => _ctx.$page.props.user.data_user.departament = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                createVNode("div", { class: "col-span-6 md:col-span-3" }, [
                  createVNode(_component_jet_label, {
                    for: "city",
                    value: "Ciudad"
                  }),
                  createVNode(_component_jet_input, {
                    readonly: "",
                    id: "city",
                    type: "text",
                    class: "read-only:bg-gray-200 mt-1 block w-full",
                    modelValue: _ctx.$page.props.user.data_user.city,
                    "onUpdate:modelValue": ($event) => _ctx.$page.props.user.data_user.city = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                createVNode("div", { class: "col-span-6" }, [
                  createVNode(_component_jet_label, {
                    for: "address",
                    value: "Direcci\xF3n"
                  }),
                  createVNode(_component_jet_input, {
                    readonly: "",
                    id: "address",
                    type: "text",
                    class: "read-only:bg-gray-200 mt-1 block w-full",
                    modelValue: _ctx.$page.props.user.data_user.address,
                    "onUpdate:modelValue": ($event) => _ctx.$page.props.user.data_user.address = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                createVNode("div", { class: "col-span-6" }, [
                  createVNode("p", { class: "text-md md:text-lg text-black/60 font-medium text-justify px-4 py-4" }, " Por favor marque la casilla si su respuesta es afirmativa. ")
                ]),
                createVNode("div", { class: "col-span-6" }, [
                  createVNode(_component_jet_label, { for: "terms" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "flex items-center" }, [
                        createVNode("div", { class: "text-lg md:text-xl font-medium mr-2" }, " \xBFEs persona expuesta p\xFAblicamente (PEP)? "),
                        createVNode(_component_jet_checkbox, {
                          name: "pep",
                          id: "pep",
                          checked: _ctx.form.pep,
                          "onUpdate:checked": ($event) => _ctx.form.pep = $event
                        }, null, 8, ["checked", "onUpdate:checked"])
                      ])
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "col-span-6" }, [
                  createVNode(_component_jet_label, { for: "terms" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "flex items-center" }, [
                        createVNode("div", { class: "text-lg md:text-xl font-medium mr-2" }, " \xBFPor su actividad o cargo administra recursos p\xFAblicos? "),
                        createVNode(_component_jet_checkbox, {
                          name: "publicFunds",
                          id: "publicFunds",
                          checked: _ctx.form.publicFunds,
                          "onUpdate:checked": ($event) => _ctx.form.publicFunds = $event
                        }, null, 8, ["checked", "onUpdate:checked"])
                      ])
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "col-span-6" }, [
                  createVNode(_component_jet_label, { for: "terms" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "flex items-center" }, [
                        createVNode("div", { class: "text-lg md:text-xl font-medium mr-2" }, " \xBFEst\xE1 obligado a tributar en otro pa\xEDs? "),
                        createVNode(_component_jet_checkbox, {
                          name: "tributeCountry",
                          id: "tributeCountry",
                          checked: _ctx.form.tributeCountry,
                          "onUpdate:checked": ($event) => _ctx.form.tributeCountry = $event
                        }, null, 8, ["checked", "onUpdate:checked"])
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _ctx.form.tributeCountry ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "col-span-6"
                }, [
                  createVNode(_component_jet_label, {
                    for: "countries",
                    value: "Indique en qu\xE9 pa\xEDses"
                  }),
                  createVNode(_component_jet_input, {
                    id: "countries",
                    type: "text",
                    class: "read-only:bg-gray-200 mt-1 block w-full",
                    modelValue: _ctx.form.countries,
                    "onUpdate:modelValue": ($event) => _ctx.form.countries = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_component_jet_input_error, {
                    message: _ctx.form.errors.countries,
                    class: "mt-2"
                  }, null, 8, ["message"])
                ])) : createCommentVNode("", true),
                createVNode("div", { class: "col-span-6" }, [
                  createVNode("h2", { class: "col-span-6 text-xl text-black/75 font-semibold px-3 py-4 text-center" }, "Informaci\xF3n Financiera")
                ]),
                createVNode("div", { class: "col-span-6 md:col-span-2" }, [
                  createVNode(_component_jet_label, {
                    for: "income",
                    value: "Ingresos Mensuales (COP)"
                  }),
                  createVNode(_component_jet_input, {
                    id: "income",
                    type: "number",
                    class: "read-only:bg-gray-200 mt-1 block w-full",
                    modelValue: _ctx.form.income,
                    "onUpdate:modelValue": ($event) => _ctx.form.income = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_component_jet_input_error, {
                    message: _ctx.form.errors.income,
                    class: "mt-2"
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "col-span-6 md:col-span-2" }, [
                  createVNode(_component_jet_label, {
                    for: "expenses",
                    value: "Egresos Mensuales (COP)"
                  }),
                  createVNode(_component_jet_input, {
                    id: "expenses",
                    type: "number",
                    class: "read-only:bg-gray-200 mt-1 block w-full",
                    modelValue: _ctx.form.expenses,
                    "onUpdate:modelValue": ($event) => _ctx.form.expenses = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_component_jet_input_error, {
                    message: _ctx.form.errors.expenses,
                    class: "mt-2"
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "col-span-6 md:col-span-2" }, [
                  createVNode(_component_jet_label, {
                    for: "assets",
                    value: "Activos (COP)"
                  }),
                  createVNode(_component_jet_input, {
                    id: "assets",
                    type: "number",
                    class: "read-only:bg-gray-200 mt-1 block w-full",
                    modelValue: _ctx.form.assets,
                    "onUpdate:modelValue": ($event) => _ctx.form.assets = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_component_jet_input_error, {
                    message: _ctx.form.errors.assets,
                    class: "mt-2"
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "col-span-6 md:col-span-2" }, [
                  createVNode(_component_jet_label, {
                    for: "liabilities",
                    value: "Pasivos (COP)"
                  }),
                  createVNode(_component_jet_input, {
                    id: "liabilities",
                    type: "number",
                    class: "read-only:bg-gray-200 mt-1 block w-full",
                    modelValue: _ctx.form.liabilities,
                    "onUpdate:modelValue": ($event) => _ctx.form.liabilities = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_component_jet_input_error, {
                    message: _ctx.form.errors.liabilities,
                    class: "mt-2"
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "col-span-6 md:col-span-2" }, [
                  createVNode(_component_jet_label, {
                    for: "heritage",
                    value: "Patrimonio (COP)"
                  }),
                  createVNode(_component_jet_input, {
                    id: "heritage",
                    type: "number",
                    class: "read-only:bg-gray-200 mt-1 block w-full",
                    modelValue: _ctx.form.heritage,
                    "onUpdate:modelValue": ($event) => _ctx.form.heritage = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_component_jet_input_error, {
                    message: _ctx.form.errors.heritage,
                    class: "mt-2"
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "col-span-6 md:col-span-2" }, [
                  createVNode(_component_jet_label, {
                    for: "incomeOther",
                    value: "Otros Ingresos (COP)"
                  }),
                  createVNode(_component_jet_input, {
                    id: "incomeOther",
                    type: "number",
                    class: "read-only:bg-gray-200 mt-1 block w-full",
                    modelValue: _ctx.form.incomeOther,
                    "onUpdate:modelValue": ($event) => _ctx.form.incomeOther = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_component_jet_input_error, {
                    message: _ctx.form.errors.incomeOther,
                    class: "mt-2"
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "col-span-6" }, [
                  createVNode(_component_jet_label, {
                    for: "descriptionIncome",
                    value: "Concepto Otros Ingresos"
                  }),
                  createVNode(_component_jet_input, {
                    id: "descriptionIncome",
                    type: "text",
                    class: "read-only:bg-gray-200 mt-1 block w-full",
                    modelValue: _ctx.form.descriptionIncome,
                    "onUpdate:modelValue": ($event) => _ctx.form.descriptionIncome = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_component_jet_input_error, {
                    message: _ctx.form.errors.descriptionIncome,
                    class: "mt-2"
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "col-span-6" }, [
                  createVNode("h2", { class: "col-span-6 text-xl text-black/75 font-semibold px-3 py-4 text-center" }, "Actividades En Operaciones Internacionales"),
                  createVNode("p", { class: "text-md md:text-lg text-black/60 font-medium text-justify px-4 py-4" }, " Por favor marque la casilla si su respuesta es afirmativa. ")
                ]),
                createVNode("div", { class: "col-span-6" }, [
                  createVNode(_component_jet_label, { for: "terms" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "flex items-center" }, [
                        createVNode("div", { class: "text-lg md:text-xl font-medium mr-2" }, " \xBFRealiza transacciones en moneda extranjera? "),
                        createVNode(_component_jet_checkbox, {
                          name: "transactionsForeignMoney",
                          id: "transactionsForeignMoney",
                          checked: _ctx.form.transactionsForeignMoney,
                          "onUpdate:checked": ($event) => _ctx.form.transactionsForeignMoney = $event
                        }, null, 8, ["checked", "onUpdate:checked"])
                      ])
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "col-span-6" }, [
                  createVNode(_component_jet_label, { for: "terms" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "flex items-center" }, [
                        createVNode("div", { class: "text-lg md:text-xl font-medium mr-2" }, " \xBFPosee productos financieros en el exterior? "),
                        createVNode(_component_jet_checkbox, {
                          name: "productsFinancialExt",
                          id: "productsFinancialExt",
                          checked: _ctx.form.productsFinancialExt,
                          "onUpdate:checked": ($event) => _ctx.form.productsFinancialExt = $event
                        }, null, 8, ["checked", "onUpdate:checked"])
                      ])
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "col-span-6" }, [
                  createVNode(_component_jet_label, { for: "terms" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "flex items-center" }, [
                        createVNode("div", { class: "text-lg md:text-xl font-medium mr-2" }, " \xBFPosee cuentas en moneda extranjera? "),
                        createVNode(_component_jet_checkbox, {
                          name: "accountsForeignMoney",
                          id: "accountsForeignMoney",
                          checked: _ctx.form.accountsForeignMoney,
                          "onUpdate:checked": ($event) => _ctx.form.accountsForeignMoney = $event
                        }, null, 8, ["checked", "onUpdate:checked"])
                      ])
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "col-span-6" }, [
                  createVNode("h2", { class: "col-span-6 text-xl text-black/75 font-semibold px-3 py-4 text-center" }, "Cl\xE1usula de Autorizaci\xF3n"),
                  createVNode("p", { class: "text-md md:text-lg text-black/60 font-medium text-justify px-4" }, " Para efectos de la presente autorizaci\xF3n, enti\xE9ndase por EXCHANGELATAM S.A.S. la(s) sociedad(es). ")
                ]),
                createVNode("div", { class: "col-span-6" }, [
                  createVNode(_component_jet_label, { for: "terms" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "flex items-center" }, [
                        createVNode(_component_jet_checkbox, {
                          name: "auth_1",
                          id: "auth_1",
                          class: "ml-4",
                          checked: _ctx.form.auth_1,
                          "onUpdate:checked": ($event) => _ctx.form.auth_1 = $event
                        }, null, 8, ["checked", "onUpdate:checked"]),
                        createVNode("div", { class: "text-md md:text-lg text-black/60 font-medium text-justify px-4 mr-2" }, " Autorizo expresa e inequ\xEDvocamente a usar mis datos personales con fines comerciales en los t\xE9rminos que trata la consideraci\xF3n 2 de la Cl\xE1usula de Autorizaci\xF3n del presente documento, la cual le\xED y comprend\xED cabalmente. ")
                      ]),
                      createVNode(_component_jet_input_error, {
                        message: _ctx.form.errors.auth_1,
                        class: "my-2 ml-4"
                      }, null, 8, ["message"])
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "col-span-6" }, [
                  createVNode("p", { class: "text-md md:text-lg text-black/60 font-medium text-justify px-4" }, " Declaro expresamente: "),
                  createVNode("ul", { class: "list-decimal list-inside text-md md:text-lg text-black/60 font-medium text-justify px-4" }, [
                    createVNode("li", { class: "mb-2" }, [
                      createVNode("span", { class: "text-justify" }, " Que para efectos de acceder a la prestaci\xF3n de productos y/o servicios por parte de EXCHANGELATAM S.A.S., suministramos nuestros datos para todos los fines precontractuales y contractuales, as\xED como para fines comerciales, de consulta y conocimiento de la persona jur\xEDdica. ")
                    ]),
                    createVNode("li", { class: "mb-2" }, [
                      createVNode("span", { class: "text-justify" }, " Que EXCHANGELATAM S.A.S. ha informado de manera expresa: "),
                      createVNode("ul", { class: "list-none list-inside text-md md:text-lg text-black/60 font-medium text-justify px-4" }, [
                        createVNode("li", { class: "mb-2" }, [
                          createVNode("span", { class: "text-justify" }, " I. Finalidad del tratamiento de datos personales. ")
                        ]),
                        createVNode("li", { class: "mb-2" }, [
                          createVNode("span", { class: "text-justify" }, " II. El tratamiento podr\xE1 ser realizado directamente por la citada sociedad o por los encargados del tratamiento que ellas consideren necesarios. ")
                        ]),
                        createVNode("li", { class: "mb-2" }, [
                          createVNode("span", { class: "text-justify" }, " III. Usuarios de la informaci\xF3n ")
                        ]),
                        createVNode("li", { class: "mb-2" }, [
                          createVNode("span", { class: "text-justify" }, " IV. TRANSFERENCIA INTERNACIONAL DE INFORMACI\xD3N A TERCEROS PA\xCDSES: que en ciertas situaciones es necesario realizar transferencias internacionales de mis datos para cumplir las finalidades del tratamiento. ")
                        ]),
                        createVNode("li", { class: "mb-2" }, [
                          createVNode("span", { class: "text-justify" }, " V. DATOS PERSONALES DE NI\xD1AS, NI\xD1OS Y ADOLESCENTES: que son facultativas las respuestas a las preguntas sobre datos de ni\xF1as, ni\xF1os y adolescentes. En consencuencia, no hemos sido obligados a responderlas. ")
                        ]),
                        createVNode("li", { class: "mb-2" }, [
                          createVNode("span", { class: "text-justify" }, " VI. DERECHOS DEL TITULAR DE LA INFORMACI\xD3N: que como titular de la informaci\xF3n, nos asisten los derechos previstos en la Ley 1266 de 2008. En especial, el derecho a conocer, actualizar y rectificar las informaciones que se hayan recogido sobre nosotros. ")
                        ]),
                        createVNode("li", { class: "mb-2" }, [
                          createVNode("span", { class: "text-justify" }, " VII. RESPONSABLES Y ENCARGADOS DEL TRATAMIENTO DE LA INFORMACI\xD3N: que los Responsables del tratamiento de la informaci\xF3n es EXCHANGELATAM S.A.S., cuyos datos de contacto se incluyeron en el encabezado de esta autorizaci\xF3n. ")
                        ])
                      ]),
                      createVNode(_component_jet_label, { for: "terms" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "flex items-center" }, [
                            createVNode(_component_jet_checkbox, {
                              name: "auth_2",
                              id: "auth_2",
                              class: "ml-4",
                              checked: _ctx.form.auth_2,
                              "onUpdate:checked": ($event) => _ctx.form.auth_2 = $event
                            }, null, 8, ["checked", "onUpdate:checked"]),
                            createVNode("div", { class: "text-md md:text-lg text-black/60 font-medium text-justify px-4 mr-2" }, ' Autorizo expresa e inequ\xEDvocamente a EXCHANGELATAM S.A.S. para que traten mis datos personales en los t\xE9rminos descritos en el numeral III del numeral 2 denominado "usuarios de la informaci\xF3n", especialmente para efectos de prevenci\xF3n y control de fraudes, la selecci\xF3n de riesgos, y control de requisitos para acceder al Sistema General de Seguridad Social Integral, as\xED como la elaboraci\xF3n de estudios internos. ')
                          ]),
                          createVNode(_component_jet_input_error, {
                            message: _ctx.form.errors.auth_2,
                            class: "my-2 ml-4"
                          }, null, 8, ["message"])
                        ]),
                        _: 1
                      }),
                      createVNode("span", { class: "text-justify mt-2 px-4" }, " Para efectos de la verificaci\xF3n espec\xEDfica de las pol\xEDticas internas sobre el tratamiento de datos personales, como titular de la informaci\xF3n acudir\xE9 a las p\xE1ginas web de los responsables y encargados que estoy autorizando en el presente escrito. ")
                    ]),
                    createVNode("li", { class: "mb-2" }, [
                      createVNode("span", { class: "text-justify" }, " AUTORIZACI\xD3N: de manera expresa, AUTORIZAMOS el Tratamiento de los datos y, de ser necesario, la transferencia nacional e internacional de los mismos, por las personas, para las finalidades y en los t\xE9rminos que nos fueron informados en este documento. ")
                    ]),
                    createVNode("li", { class: "mb-2" }, [
                      createVNode("span", { class: "text-justify" }, " CERTIFICACI\xD3N: manifestamos que la informaci\xF3n suministrada por nosotros para las finalidades se\xF1aladas en este documento, puede contener datos personales de empleados, proveedores, colaboradores o clientes de la compa\xF1\xEDa, por lo cual certificamos de manera expresa que la misma, ha sido: i) obtenida de acuerdo con lo previsto en la legislaci\xF3n aplicable, particularmente en la Ley 1581 de 2012 y ii) que, existen las autorizaciones necesarias de acuerdo con lo previsto en la legislaci\xF3n aplicable, para el tratamiento y circulaci\xF3n de esta Base de Datos por parte de EXCHANGELATAM S.A.S. se\xF1alado en este documento. ")
                    ])
                  ])
                ]),
                createVNode("div", { class: "col-span-6 text-md md:text-lg text-black/60 font-medium text-justify px-4" }, [
                  createVNode("div", { class: "flex items-center" }, [
                    createVNode(_component_jet_checkbox, {
                      name: "sign",
                      id: "sign",
                      checked: _ctx.form.sign,
                      "onUpdate:checked": ($event) => _ctx.form.sign = $event
                    }, null, 8, ["checked", "onUpdate:checked"]),
                    createTextVNode(),
                    createVNode("span", { class: "px-2 text-black/75" }, "Firma electr\xF3nica:"),
                    createTextVNode(),
                    createVNode("span", { class: "underline" }, toDisplayString(_ctx.$page.props.user.name + " " + _ctx.$page.props.user.lastname), 1)
                  ]),
                  createVNode("div", { class: "text-sm font-normal pl-4 mt-2" }, ' ACEPTACI\xD3N Y FIRMA ELECTR\xD3NICA: Las partes acuerdan que el requisito de firma en el presente documento queda satisfecho y tendr\xE1 plenos efectos jur\xEDdicos con la aceptaci\xF3n electr\xF3nica que el cliente haga con la utilizaci\xF3n de su NIP y/o C\xF3digo y/o Clave y/o imposici\xF3n de huella y/o la utilizaci\xF3n de n\xFAmeros de identificaci\xF3n personal y/o la imposici\xF3n en el presente contrato de su firma manuscrita escaneada y/o la utilizaci\xF3n de sistemas y/o la utilizaci\xF3n de botones de aceptaci\xF3n de tipo "si", "aceptar" o "acepto" y/o la combinaci\xF3n del documento de identidad proporcionado por el cliente con anterioridad a la firma de este documento. Por utilizaci\xF3n de nuestros servicios de ExchangeLatam el CLIENTE acepta que ha leido y aceptado nuestros t\xE9rminos y condiciones de servicio, al igual que las pol\xEDticas de privacidad y SAGRILAFT. En se\xF1al de aceptaci\xF3n de lo expresado, se firma el presente documento mediante la imposici\xF3n de mi firma electr\xF3nica y check in en la aceptaci\xF3n de firma electr\xF3nica en el presente documento. '),
                  createVNode(_component_jet_input_error, {
                    message: _ctx.form.errors.sign,
                    class: "mt-2"
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "col-span-6 mx-auto" }, [
                  _ctx.hasErrors ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "max-w-max mx-auto"
                  }, [
                    createVNode("div", { class: "font-medium text-red-600" }, "\xA1Vaya! Algo sali\xF3 mal."),
                    createVNode("ul", { class: "mt-3 list-disc list-inside text-sm text-red-600" }, [
                      _ctx.form.errors.auth_1 ? (openBlock(), createBlock("li", { key: 0 }, toDisplayString(_ctx.form.errors.auth_1), 1)) : createCommentVNode("", true),
                      _ctx.form.errors.auth_2 ? (openBlock(), createBlock("li", { key: 1 }, toDisplayString(_ctx.form.errors.auth_2), 1)) : createCommentVNode("", true),
                      _ctx.form.errors.sign ? (openBlock(), createBlock("li", { key: 2 }, toDisplayString(_ctx.form.errors.sign), 1)) : createCommentVNode("", true)
                    ])
                  ])) : createCommentVNode("", true)
                ]),
                createVNode("div", { class: "col-span-6" }, [
                  createVNode("div", { class: "max-w-max mx-auto" }, [
                    createVNode(_component_jet_button, {
                      class: [{ "opacity-25": _ctx.form.processing }, "mt-2 ml-4 md:mx-auto"],
                      disabled: _ctx.form.processing
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Firmar y enviar ")
                      ]),
                      _: 1
                    }, 8, ["class", "disabled"])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "px-3 mb-4 pt-5 md:pt-6 lg:mr-4 max-w-full flex flex-col justify-center items-center shadow border border-gray-200 sm:rounded-lg bg-white" }, [
            createVNode("h1", { class: "text-3xl text-black/75 font-semibold px-3 pb-3 text-center" }, "Formulario Conocimiento del Cliente"),
            createVNode(_component_jet_form, { onSubmitted: _ctx.submit }, {
              form: withCtx(() => [
                createVNode("div", { class: "col-span-3 md:col-start-1 md:col-end-3" }, [
                  createVNode(_component_jet_label, {
                    for: "date",
                    value: "Fecha diligenciamiento"
                  }),
                  createVNode(_component_jet_input, {
                    readonly: "",
                    id: "date",
                    type: "date",
                    class: "read-only:bg-gray-200 mt-1 block w-full",
                    modelValue: _ctx.today,
                    "onUpdate:modelValue": ($event) => _ctx.today = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                createVNode("div", { class: "col-span-3 md:col-end-7 md:col-span-2" }, [
                  createVNode(_component_jet_label, {
                    for: "citySign",
                    value: "Ciudad diligenciamiento"
                  }),
                  createVNode(_component_jet_input, {
                    id: "citySign",
                    type: "text",
                    class: "read-only:bg-gray-200 mt-1 block w-full",
                    modelValue: _ctx.form.citySign,
                    "onUpdate:modelValue": ($event) => _ctx.form.citySign = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_component_jet_input_error, {
                    message: _ctx.form.errors.citySign,
                    class: "mt-2"
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "col-span-6" }, [
                  createVNode("h2", { class: "col-span-6 text-xl text-black/75 font-semibold px-3 pt-1 text-center" }, "Informaci\xF3n B\xE1sica Persona Natural")
                ]),
                createVNode("div", { class: "col-span-6 md:col-span-3" }, [
                  createVNode(_component_jet_label, {
                    for: "name",
                    value: "Nombres"
                  }),
                  createVNode(_component_jet_input, {
                    readonly: "",
                    id: "name",
                    type: "text",
                    class: "read-only:bg-gray-200 mt-1 block w-full",
                    modelValue: _ctx.$page.props.user.name,
                    "onUpdate:modelValue": ($event) => _ctx.$page.props.user.name = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                createVNode("div", { class: "col-span-6 md:col-span-3" }, [
                  createVNode(_component_jet_label, {
                    for: "lastname",
                    value: "Apellidos"
                  }),
                  createVNode(_component_jet_input, {
                    readonly: "",
                    id: "lastname",
                    type: "text",
                    class: "read-only:bg-gray-200 mt-1 block w-full",
                    modelValue: _ctx.$page.props.user.lastname,
                    "onUpdate:modelValue": ($event) => _ctx.$page.props.user.lastname = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                createVNode("div", { class: "col-span-6 md:col-span-2" }, [
                  createVNode(_component_jet_select, {
                    readonly: true,
                    disabled: "",
                    selectable: _ctx.doc_types,
                    selected: _ctx.doc_types[_ctx.$page.props.user.data_user.doc_type - 1]
                  }, {
                    title: withCtx(() => [
                      createTextVNode(" Tipo de documento ")
                    ]),
                    _: 1
                  }, 8, ["selectable", "selected"])
                ]),
                createVNode("div", { class: "col-span-6 md:col-span-2" }, [
                  createVNode(_component_jet_label, {
                    for: "doc_num",
                    value: "N\xFAmero documento"
                  }),
                  createVNode(_component_jet_input, {
                    readonly: "",
                    id: "doc_num",
                    type: "text",
                    class: "read-only:bg-gray-200 mt-1 block w-full",
                    modelValue: _ctx.doc_num,
                    "onUpdate:modelValue": ($event) => _ctx.doc_num = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                createVNode("div", { class: "col-span-6 md:col-span-2" }, [
                  createVNode(_component_jet_label, {
                    for: "expeditionDate",
                    value: "Fecha de expedici\xF3n"
                  }),
                  createVNode(_component_jet_input, {
                    id: "expeditionDate",
                    type: "date",
                    class: "read-only:bg-gray-200 mt-1 block w-full",
                    modelValue: _ctx.form.expeditionDate,
                    "onUpdate:modelValue": ($event) => _ctx.form.expeditionDate = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_component_jet_input_error, {
                    message: _ctx.form.errors.expeditionDate,
                    class: "mt-2"
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "col-span-6 md:col-span-2" }, [
                  createVNode(_component_jet_label, {
                    for: "expeditionPlace",
                    value: "Lugar de expedici\xF3n"
                  }),
                  createVNode(_component_jet_input, {
                    id: "expeditionPlace",
                    type: "text",
                    class: "read-only:bg-gray-200 mt-1 block w-full",
                    modelValue: _ctx.form.expeditionPlace,
                    "onUpdate:modelValue": ($event) => _ctx.form.expeditionPlace = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_component_jet_input_error, {
                    message: _ctx.form.errors.expeditionPlace,
                    class: "mt-2"
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "col-span-6 md:col-span-2" }, [
                  createVNode(_component_jet_label, {
                    for: "birthDate",
                    value: "Fecha de nacimiento"
                  }),
                  createVNode(_component_jet_input, {
                    id: "birthDate",
                    type: "date",
                    class: "read-only:bg-gray-200 mt-1 block w-full",
                    modelValue: _ctx.form.birthDate,
                    "onUpdate:modelValue": ($event) => _ctx.form.birthDate = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_component_jet_input_error, {
                    message: _ctx.form.errors.birthDate,
                    class: "mt-2"
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "col-span-6 md:col-span-2" }, [
                  createVNode(_component_jet_label, {
                    for: "birthPlace",
                    value: "Lugar de nacimiento"
                  }),
                  createVNode(_component_jet_input, {
                    id: "birthPlace",
                    type: "text",
                    class: "read-only:bg-gray-200 mt-1 block w-full",
                    modelValue: _ctx.form.birthPlace,
                    "onUpdate:modelValue": ($event) => _ctx.form.birthPlace = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_component_jet_input_error, {
                    message: _ctx.form.errors.birthPlace,
                    class: "mt-2"
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "col-span-6 md:col-span-2" }, [
                  createVNode(_component_jet_label, {
                    for: "nationality",
                    value: "Nacionalidad"
                  }),
                  createVNode(_component_jet_input, {
                    id: "nationality",
                    type: "text",
                    class: "read-only:bg-gray-200 mt-1 block w-full",
                    modelValue: _ctx.form.nationality,
                    "onUpdate:modelValue": ($event) => _ctx.form.nationality = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_component_jet_input_error, {
                    message: _ctx.form.errors.nationality,
                    class: "mt-2"
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "col-span-6 md:col-span-2" }, [
                  createVNode(_component_jet_label, {
                    for: "mobil",
                    value: "Celular"
                  }),
                  createVNode(_component_jet_input, {
                    readonly: "",
                    id: "mobil",
                    type: "text",
                    class: "read-only:bg-gray-200 mt-1 block w-full",
                    modelValue: _ctx.mobil,
                    "onUpdate:modelValue": ($event) => _ctx.mobil = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                createVNode("div", { class: "col-span-6 md:col-span-2" }, [
                  createVNode(_component_jet_label, {
                    for: "email",
                    value: "Email"
                  }),
                  createVNode(_component_jet_input, {
                    readonly: "",
                    id: "email",
                    type: "email",
                    class: "read-only:bg-gray-200 mt-1 block w-full",
                    modelValue: _ctx.$page.props.user.email,
                    "onUpdate:modelValue": ($event) => _ctx.$page.props.user.email = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                createVNode("div", { class: "col-span-6 md:col-span-3" }, [
                  createVNode(_component_jet_label, {
                    for: "departament",
                    value: "Departamento"
                  }),
                  createVNode(_component_jet_input, {
                    readonly: "",
                    id: "departament",
                    type: "text",
                    class: "read-only:bg-gray-200 mt-1 block w-full",
                    modelValue: _ctx.$page.props.user.data_user.departament,
                    "onUpdate:modelValue": ($event) => _ctx.$page.props.user.data_user.departament = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                createVNode("div", { class: "col-span-6 md:col-span-3" }, [
                  createVNode(_component_jet_label, {
                    for: "city",
                    value: "Ciudad"
                  }),
                  createVNode(_component_jet_input, {
                    readonly: "",
                    id: "city",
                    type: "text",
                    class: "read-only:bg-gray-200 mt-1 block w-full",
                    modelValue: _ctx.$page.props.user.data_user.city,
                    "onUpdate:modelValue": ($event) => _ctx.$page.props.user.data_user.city = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                createVNode("div", { class: "col-span-6" }, [
                  createVNode(_component_jet_label, {
                    for: "address",
                    value: "Direcci\xF3n"
                  }),
                  createVNode(_component_jet_input, {
                    readonly: "",
                    id: "address",
                    type: "text",
                    class: "read-only:bg-gray-200 mt-1 block w-full",
                    modelValue: _ctx.$page.props.user.data_user.address,
                    "onUpdate:modelValue": ($event) => _ctx.$page.props.user.data_user.address = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                createVNode("div", { class: "col-span-6" }, [
                  createVNode("p", { class: "text-md md:text-lg text-black/60 font-medium text-justify px-4 py-4" }, " Por favor marque la casilla si su respuesta es afirmativa. ")
                ]),
                createVNode("div", { class: "col-span-6" }, [
                  createVNode(_component_jet_label, { for: "terms" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "flex items-center" }, [
                        createVNode("div", { class: "text-lg md:text-xl font-medium mr-2" }, " \xBFEs persona expuesta p\xFAblicamente (PEP)? "),
                        createVNode(_component_jet_checkbox, {
                          name: "pep",
                          id: "pep",
                          checked: _ctx.form.pep,
                          "onUpdate:checked": ($event) => _ctx.form.pep = $event
                        }, null, 8, ["checked", "onUpdate:checked"])
                      ])
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "col-span-6" }, [
                  createVNode(_component_jet_label, { for: "terms" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "flex items-center" }, [
                        createVNode("div", { class: "text-lg md:text-xl font-medium mr-2" }, " \xBFPor su actividad o cargo administra recursos p\xFAblicos? "),
                        createVNode(_component_jet_checkbox, {
                          name: "publicFunds",
                          id: "publicFunds",
                          checked: _ctx.form.publicFunds,
                          "onUpdate:checked": ($event) => _ctx.form.publicFunds = $event
                        }, null, 8, ["checked", "onUpdate:checked"])
                      ])
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "col-span-6" }, [
                  createVNode(_component_jet_label, { for: "terms" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "flex items-center" }, [
                        createVNode("div", { class: "text-lg md:text-xl font-medium mr-2" }, " \xBFEst\xE1 obligado a tributar en otro pa\xEDs? "),
                        createVNode(_component_jet_checkbox, {
                          name: "tributeCountry",
                          id: "tributeCountry",
                          checked: _ctx.form.tributeCountry,
                          "onUpdate:checked": ($event) => _ctx.form.tributeCountry = $event
                        }, null, 8, ["checked", "onUpdate:checked"])
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _ctx.form.tributeCountry ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "col-span-6"
                }, [
                  createVNode(_component_jet_label, {
                    for: "countries",
                    value: "Indique en qu\xE9 pa\xEDses"
                  }),
                  createVNode(_component_jet_input, {
                    id: "countries",
                    type: "text",
                    class: "read-only:bg-gray-200 mt-1 block w-full",
                    modelValue: _ctx.form.countries,
                    "onUpdate:modelValue": ($event) => _ctx.form.countries = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_component_jet_input_error, {
                    message: _ctx.form.errors.countries,
                    class: "mt-2"
                  }, null, 8, ["message"])
                ])) : createCommentVNode("", true),
                createVNode("div", { class: "col-span-6" }, [
                  createVNode("h2", { class: "col-span-6 text-xl text-black/75 font-semibold px-3 py-4 text-center" }, "Informaci\xF3n Financiera")
                ]),
                createVNode("div", { class: "col-span-6 md:col-span-2" }, [
                  createVNode(_component_jet_label, {
                    for: "income",
                    value: "Ingresos Mensuales (COP)"
                  }),
                  createVNode(_component_jet_input, {
                    id: "income",
                    type: "number",
                    class: "read-only:bg-gray-200 mt-1 block w-full",
                    modelValue: _ctx.form.income,
                    "onUpdate:modelValue": ($event) => _ctx.form.income = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_component_jet_input_error, {
                    message: _ctx.form.errors.income,
                    class: "mt-2"
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "col-span-6 md:col-span-2" }, [
                  createVNode(_component_jet_label, {
                    for: "expenses",
                    value: "Egresos Mensuales (COP)"
                  }),
                  createVNode(_component_jet_input, {
                    id: "expenses",
                    type: "number",
                    class: "read-only:bg-gray-200 mt-1 block w-full",
                    modelValue: _ctx.form.expenses,
                    "onUpdate:modelValue": ($event) => _ctx.form.expenses = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_component_jet_input_error, {
                    message: _ctx.form.errors.expenses,
                    class: "mt-2"
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "col-span-6 md:col-span-2" }, [
                  createVNode(_component_jet_label, {
                    for: "assets",
                    value: "Activos (COP)"
                  }),
                  createVNode(_component_jet_input, {
                    id: "assets",
                    type: "number",
                    class: "read-only:bg-gray-200 mt-1 block w-full",
                    modelValue: _ctx.form.assets,
                    "onUpdate:modelValue": ($event) => _ctx.form.assets = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_component_jet_input_error, {
                    message: _ctx.form.errors.assets,
                    class: "mt-2"
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "col-span-6 md:col-span-2" }, [
                  createVNode(_component_jet_label, {
                    for: "liabilities",
                    value: "Pasivos (COP)"
                  }),
                  createVNode(_component_jet_input, {
                    id: "liabilities",
                    type: "number",
                    class: "read-only:bg-gray-200 mt-1 block w-full",
                    modelValue: _ctx.form.liabilities,
                    "onUpdate:modelValue": ($event) => _ctx.form.liabilities = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_component_jet_input_error, {
                    message: _ctx.form.errors.liabilities,
                    class: "mt-2"
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "col-span-6 md:col-span-2" }, [
                  createVNode(_component_jet_label, {
                    for: "heritage",
                    value: "Patrimonio (COP)"
                  }),
                  createVNode(_component_jet_input, {
                    id: "heritage",
                    type: "number",
                    class: "read-only:bg-gray-200 mt-1 block w-full",
                    modelValue: _ctx.form.heritage,
                    "onUpdate:modelValue": ($event) => _ctx.form.heritage = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_component_jet_input_error, {
                    message: _ctx.form.errors.heritage,
                    class: "mt-2"
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "col-span-6 md:col-span-2" }, [
                  createVNode(_component_jet_label, {
                    for: "incomeOther",
                    value: "Otros Ingresos (COP)"
                  }),
                  createVNode(_component_jet_input, {
                    id: "incomeOther",
                    type: "number",
                    class: "read-only:bg-gray-200 mt-1 block w-full",
                    modelValue: _ctx.form.incomeOther,
                    "onUpdate:modelValue": ($event) => _ctx.form.incomeOther = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_component_jet_input_error, {
                    message: _ctx.form.errors.incomeOther,
                    class: "mt-2"
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "col-span-6" }, [
                  createVNode(_component_jet_label, {
                    for: "descriptionIncome",
                    value: "Concepto Otros Ingresos"
                  }),
                  createVNode(_component_jet_input, {
                    id: "descriptionIncome",
                    type: "text",
                    class: "read-only:bg-gray-200 mt-1 block w-full",
                    modelValue: _ctx.form.descriptionIncome,
                    "onUpdate:modelValue": ($event) => _ctx.form.descriptionIncome = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_component_jet_input_error, {
                    message: _ctx.form.errors.descriptionIncome,
                    class: "mt-2"
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "col-span-6" }, [
                  createVNode("h2", { class: "col-span-6 text-xl text-black/75 font-semibold px-3 py-4 text-center" }, "Actividades En Operaciones Internacionales"),
                  createVNode("p", { class: "text-md md:text-lg text-black/60 font-medium text-justify px-4 py-4" }, " Por favor marque la casilla si su respuesta es afirmativa. ")
                ]),
                createVNode("div", { class: "col-span-6" }, [
                  createVNode(_component_jet_label, { for: "terms" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "flex items-center" }, [
                        createVNode("div", { class: "text-lg md:text-xl font-medium mr-2" }, " \xBFRealiza transacciones en moneda extranjera? "),
                        createVNode(_component_jet_checkbox, {
                          name: "transactionsForeignMoney",
                          id: "transactionsForeignMoney",
                          checked: _ctx.form.transactionsForeignMoney,
                          "onUpdate:checked": ($event) => _ctx.form.transactionsForeignMoney = $event
                        }, null, 8, ["checked", "onUpdate:checked"])
                      ])
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "col-span-6" }, [
                  createVNode(_component_jet_label, { for: "terms" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "flex items-center" }, [
                        createVNode("div", { class: "text-lg md:text-xl font-medium mr-2" }, " \xBFPosee productos financieros en el exterior? "),
                        createVNode(_component_jet_checkbox, {
                          name: "productsFinancialExt",
                          id: "productsFinancialExt",
                          checked: _ctx.form.productsFinancialExt,
                          "onUpdate:checked": ($event) => _ctx.form.productsFinancialExt = $event
                        }, null, 8, ["checked", "onUpdate:checked"])
                      ])
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "col-span-6" }, [
                  createVNode(_component_jet_label, { for: "terms" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "flex items-center" }, [
                        createVNode("div", { class: "text-lg md:text-xl font-medium mr-2" }, " \xBFPosee cuentas en moneda extranjera? "),
                        createVNode(_component_jet_checkbox, {
                          name: "accountsForeignMoney",
                          id: "accountsForeignMoney",
                          checked: _ctx.form.accountsForeignMoney,
                          "onUpdate:checked": ($event) => _ctx.form.accountsForeignMoney = $event
                        }, null, 8, ["checked", "onUpdate:checked"])
                      ])
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "col-span-6" }, [
                  createVNode("h2", { class: "col-span-6 text-xl text-black/75 font-semibold px-3 py-4 text-center" }, "Cl\xE1usula de Autorizaci\xF3n"),
                  createVNode("p", { class: "text-md md:text-lg text-black/60 font-medium text-justify px-4" }, " Para efectos de la presente autorizaci\xF3n, enti\xE9ndase por EXCHANGELATAM S.A.S. la(s) sociedad(es). ")
                ]),
                createVNode("div", { class: "col-span-6" }, [
                  createVNode(_component_jet_label, { for: "terms" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "flex items-center" }, [
                        createVNode(_component_jet_checkbox, {
                          name: "auth_1",
                          id: "auth_1",
                          class: "ml-4",
                          checked: _ctx.form.auth_1,
                          "onUpdate:checked": ($event) => _ctx.form.auth_1 = $event
                        }, null, 8, ["checked", "onUpdate:checked"]),
                        createVNode("div", { class: "text-md md:text-lg text-black/60 font-medium text-justify px-4 mr-2" }, " Autorizo expresa e inequ\xEDvocamente a usar mis datos personales con fines comerciales en los t\xE9rminos que trata la consideraci\xF3n 2 de la Cl\xE1usula de Autorizaci\xF3n del presente documento, la cual le\xED y comprend\xED cabalmente. ")
                      ]),
                      createVNode(_component_jet_input_error, {
                        message: _ctx.form.errors.auth_1,
                        class: "my-2 ml-4"
                      }, null, 8, ["message"])
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "col-span-6" }, [
                  createVNode("p", { class: "text-md md:text-lg text-black/60 font-medium text-justify px-4" }, " Declaro expresamente: "),
                  createVNode("ul", { class: "list-decimal list-inside text-md md:text-lg text-black/60 font-medium text-justify px-4" }, [
                    createVNode("li", { class: "mb-2" }, [
                      createVNode("span", { class: "text-justify" }, " Que para efectos de acceder a la prestaci\xF3n de productos y/o servicios por parte de EXCHANGELATAM S.A.S., suministramos nuestros datos para todos los fines precontractuales y contractuales, as\xED como para fines comerciales, de consulta y conocimiento de la persona jur\xEDdica. ")
                    ]),
                    createVNode("li", { class: "mb-2" }, [
                      createVNode("span", { class: "text-justify" }, " Que EXCHANGELATAM S.A.S. ha informado de manera expresa: "),
                      createVNode("ul", { class: "list-none list-inside text-md md:text-lg text-black/60 font-medium text-justify px-4" }, [
                        createVNode("li", { class: "mb-2" }, [
                          createVNode("span", { class: "text-justify" }, " I. Finalidad del tratamiento de datos personales. ")
                        ]),
                        createVNode("li", { class: "mb-2" }, [
                          createVNode("span", { class: "text-justify" }, " II. El tratamiento podr\xE1 ser realizado directamente por la citada sociedad o por los encargados del tratamiento que ellas consideren necesarios. ")
                        ]),
                        createVNode("li", { class: "mb-2" }, [
                          createVNode("span", { class: "text-justify" }, " III. Usuarios de la informaci\xF3n ")
                        ]),
                        createVNode("li", { class: "mb-2" }, [
                          createVNode("span", { class: "text-justify" }, " IV. TRANSFERENCIA INTERNACIONAL DE INFORMACI\xD3N A TERCEROS PA\xCDSES: que en ciertas situaciones es necesario realizar transferencias internacionales de mis datos para cumplir las finalidades del tratamiento. ")
                        ]),
                        createVNode("li", { class: "mb-2" }, [
                          createVNode("span", { class: "text-justify" }, " V. DATOS PERSONALES DE NI\xD1AS, NI\xD1OS Y ADOLESCENTES: que son facultativas las respuestas a las preguntas sobre datos de ni\xF1as, ni\xF1os y adolescentes. En consencuencia, no hemos sido obligados a responderlas. ")
                        ]),
                        createVNode("li", { class: "mb-2" }, [
                          createVNode("span", { class: "text-justify" }, " VI. DERECHOS DEL TITULAR DE LA INFORMACI\xD3N: que como titular de la informaci\xF3n, nos asisten los derechos previstos en la Ley 1266 de 2008. En especial, el derecho a conocer, actualizar y rectificar las informaciones que se hayan recogido sobre nosotros. ")
                        ]),
                        createVNode("li", { class: "mb-2" }, [
                          createVNode("span", { class: "text-justify" }, " VII. RESPONSABLES Y ENCARGADOS DEL TRATAMIENTO DE LA INFORMACI\xD3N: que los Responsables del tratamiento de la informaci\xF3n es EXCHANGELATAM S.A.S., cuyos datos de contacto se incluyeron en el encabezado de esta autorizaci\xF3n. ")
                        ])
                      ]),
                      createVNode(_component_jet_label, { for: "terms" }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "flex items-center" }, [
                            createVNode(_component_jet_checkbox, {
                              name: "auth_2",
                              id: "auth_2",
                              class: "ml-4",
                              checked: _ctx.form.auth_2,
                              "onUpdate:checked": ($event) => _ctx.form.auth_2 = $event
                            }, null, 8, ["checked", "onUpdate:checked"]),
                            createVNode("div", { class: "text-md md:text-lg text-black/60 font-medium text-justify px-4 mr-2" }, ' Autorizo expresa e inequ\xEDvocamente a EXCHANGELATAM S.A.S. para que traten mis datos personales en los t\xE9rminos descritos en el numeral III del numeral 2 denominado "usuarios de la informaci\xF3n", especialmente para efectos de prevenci\xF3n y control de fraudes, la selecci\xF3n de riesgos, y control de requisitos para acceder al Sistema General de Seguridad Social Integral, as\xED como la elaboraci\xF3n de estudios internos. ')
                          ]),
                          createVNode(_component_jet_input_error, {
                            message: _ctx.form.errors.auth_2,
                            class: "my-2 ml-4"
                          }, null, 8, ["message"])
                        ]),
                        _: 1
                      }),
                      createVNode("span", { class: "text-justify mt-2 px-4" }, " Para efectos de la verificaci\xF3n espec\xEDfica de las pol\xEDticas internas sobre el tratamiento de datos personales, como titular de la informaci\xF3n acudir\xE9 a las p\xE1ginas web de los responsables y encargados que estoy autorizando en el presente escrito. ")
                    ]),
                    createVNode("li", { class: "mb-2" }, [
                      createVNode("span", { class: "text-justify" }, " AUTORIZACI\xD3N: de manera expresa, AUTORIZAMOS el Tratamiento de los datos y, de ser necesario, la transferencia nacional e internacional de los mismos, por las personas, para las finalidades y en los t\xE9rminos que nos fueron informados en este documento. ")
                    ]),
                    createVNode("li", { class: "mb-2" }, [
                      createVNode("span", { class: "text-justify" }, " CERTIFICACI\xD3N: manifestamos que la informaci\xF3n suministrada por nosotros para las finalidades se\xF1aladas en este documento, puede contener datos personales de empleados, proveedores, colaboradores o clientes de la compa\xF1\xEDa, por lo cual certificamos de manera expresa que la misma, ha sido: i) obtenida de acuerdo con lo previsto en la legislaci\xF3n aplicable, particularmente en la Ley 1581 de 2012 y ii) que, existen las autorizaciones necesarias de acuerdo con lo previsto en la legislaci\xF3n aplicable, para el tratamiento y circulaci\xF3n de esta Base de Datos por parte de EXCHANGELATAM S.A.S. se\xF1alado en este documento. ")
                    ])
                  ])
                ]),
                createVNode("div", { class: "col-span-6 text-md md:text-lg text-black/60 font-medium text-justify px-4" }, [
                  createVNode("div", { class: "flex items-center" }, [
                    createVNode(_component_jet_checkbox, {
                      name: "sign",
                      id: "sign",
                      checked: _ctx.form.sign,
                      "onUpdate:checked": ($event) => _ctx.form.sign = $event
                    }, null, 8, ["checked", "onUpdate:checked"]),
                    createTextVNode(),
                    createVNode("span", { class: "px-2 text-black/75" }, "Firma electr\xF3nica:"),
                    createTextVNode(),
                    createVNode("span", { class: "underline" }, toDisplayString(_ctx.$page.props.user.name + " " + _ctx.$page.props.user.lastname), 1)
                  ]),
                  createVNode("div", { class: "text-sm font-normal pl-4 mt-2" }, ' ACEPTACI\xD3N Y FIRMA ELECTR\xD3NICA: Las partes acuerdan que el requisito de firma en el presente documento queda satisfecho y tendr\xE1 plenos efectos jur\xEDdicos con la aceptaci\xF3n electr\xF3nica que el cliente haga con la utilizaci\xF3n de su NIP y/o C\xF3digo y/o Clave y/o imposici\xF3n de huella y/o la utilizaci\xF3n de n\xFAmeros de identificaci\xF3n personal y/o la imposici\xF3n en el presente contrato de su firma manuscrita escaneada y/o la utilizaci\xF3n de sistemas y/o la utilizaci\xF3n de botones de aceptaci\xF3n de tipo "si", "aceptar" o "acepto" y/o la combinaci\xF3n del documento de identidad proporcionado por el cliente con anterioridad a la firma de este documento. Por utilizaci\xF3n de nuestros servicios de ExchangeLatam el CLIENTE acepta que ha leido y aceptado nuestros t\xE9rminos y condiciones de servicio, al igual que las pol\xEDticas de privacidad y SAGRILAFT. En se\xF1al de aceptaci\xF3n de lo expresado, se firma el presente documento mediante la imposici\xF3n de mi firma electr\xF3nica y check in en la aceptaci\xF3n de firma electr\xF3nica en el presente documento. '),
                  createVNode(_component_jet_input_error, {
                    message: _ctx.form.errors.sign,
                    class: "mt-2"
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "col-span-6 mx-auto" }, [
                  _ctx.hasErrors ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "max-w-max mx-auto"
                  }, [
                    createVNode("div", { class: "font-medium text-red-600" }, "\xA1Vaya! Algo sali\xF3 mal."),
                    createVNode("ul", { class: "mt-3 list-disc list-inside text-sm text-red-600" }, [
                      _ctx.form.errors.auth_1 ? (openBlock(), createBlock("li", { key: 0 }, toDisplayString(_ctx.form.errors.auth_1), 1)) : createCommentVNode("", true),
                      _ctx.form.errors.auth_2 ? (openBlock(), createBlock("li", { key: 1 }, toDisplayString(_ctx.form.errors.auth_2), 1)) : createCommentVNode("", true),
                      _ctx.form.errors.sign ? (openBlock(), createBlock("li", { key: 2 }, toDisplayString(_ctx.form.errors.sign), 1)) : createCommentVNode("", true)
                    ])
                  ])) : createCommentVNode("", true)
                ]),
                createVNode("div", { class: "col-span-6" }, [
                  createVNode("div", { class: "max-w-max mx-auto" }, [
                    createVNode(_component_jet_button, {
                      class: [{ "opacity-25": _ctx.form.processing }, "mt-2 ml-4 md:mx-auto"],
                      disabled: _ctx.form.processing
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Firmar y enviar ")
                      ]),
                      _: 1
                    }, 8, ["class", "disabled"])
                  ])
                ])
              ]),
              _: 1
            }, 8, ["onSubmitted"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Profile/FormClient.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const FormClient = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  FormClient as default
};
