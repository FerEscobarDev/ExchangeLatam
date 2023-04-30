import { defineComponent, resolveComponent, mergeProps, withCtx, createTextVNode, createVNode, openBlock, createBlock, createCommentVNode, toDisplayString, useSSRContext } from "vue";
import { A as AppLayoutAdmin } from "./AppLayoutAdmin.8e91ebaa.mjs";
import { Link } from "@inertiajs/inertia-vue3";
import { _ as _sfc_main$2 } from "./Button.feee2cab.mjs";
import { _ as _sfc_main$1 } from "./Checkbox.eba10139.mjs";
import { _ as _sfc_main$3 } from "./Input.c38a320e.mjs";
import { _ as _sfc_main$4 } from "./Label.ceceda67.mjs";
import { CheckIcon } from "@heroicons/vue/solid";
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
const _sfc_main = defineComponent({
  props: ["dataUser"],
  components: {
    AppLayoutAdmin,
    JetCheckbox: _sfc_main$1,
    JetButton: _sfc_main$2,
    JetInput: _sfc_main$3,
    JetLabel: _sfc_main$4,
    CheckIcon,
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
    const date = props.dataUser[0].form_knowledge_client.date;
    return {
      doc_types,
      date
    };
  },
  data() {
    return {
      pep: this.dataUser[0].form_knowledge_client.pep === 0 ? false : true,
      publicFunds: this.dataUser[0].form_knowledge_client.publicFunds === 0 ? false : true,
      tributeCountry: this.dataUser[0].form_knowledge_client.tributeCountry === 0 ? false : true,
      transactionsForeignMoney: this.dataUser[0].form_knowledge_client.transactionsForeignMoney === 0 ? false : true,
      productsFinancialExt: this.dataUser[0].form_knowledge_client.productsFinancialExt === 0 ? false : true,
      accountsForeignMoney: this.dataUser[0].form_knowledge_client.accountsForeignMoney === 0 ? false : true,
      auth_1: this.dataUser[0].form_knowledge_client.auth_1 === 0 ? false : true,
      auth_2: this.dataUser[0].form_knowledge_client.auth_2 === 0 ? false : true,
      sign: this.dataUser[0].form_knowledge_client.sign === 0 ? false : true
    };
  },
  computed: {
    advertence() {
      if (this.pep || this.publicFunds || this.tributeCountry || this.transactionsForeignMoney || this.productsFinancialExt || this.accountsForeignMoney) {
        return true;
      } else {
        return false;
      }
    }
  },
  methods: {
    monthFormat() {
      const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiempre", "Octubre", "Noviembre", "Diciembre"];
      let formatted_date = months[this.now.getMonth()];
      return formatted_date;
    }
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_app_layout_admin = resolveComponent("app-layout-admin");
  const _component_Link = resolveComponent("Link");
  const _component_jet_label = resolveComponent("jet-label");
  const _component_jet_input = resolveComponent("jet-input");
  const _component_jet_select = resolveComponent("jet-select");
  const _component_jet_checkbox = resolveComponent("jet-checkbox");
  _push(ssrRenderComponent(_component_app_layout_admin, mergeProps({ title: "Declaraci\xF3n de fondos" }, _attrs), {
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
        _push2(ssrRenderComponent(_component_Link, {
          href: _ctx.route("admin.userShow", _ctx.dataUser[0].id),
          class: "text-blue-brand-gradient1 font-semibold hover:text-blue-brand"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Perfil Usuario/`);
            } else {
              return [
                createTextVNode("Perfil Usuario/")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_Link, {
          href: _ctx.route("admin.usersVerification", _ctx.dataUser[0].id),
          class: "text-blue-brand-gradient1 font-semibold hover:text-blue-brand"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Verificaci\xF3n/`);
            } else {
              return [
                createTextVNode("Verificaci\xF3n/")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(` Conocimiento del Cliente </h2>`);
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
            createVNode(_component_Link, {
              href: _ctx.route("admin.userShow", _ctx.dataUser[0].id),
              class: "text-blue-brand-gradient1 font-semibold hover:text-blue-brand"
            }, {
              default: withCtx(() => [
                createTextVNode("Perfil Usuario/")
              ]),
              _: 1
            }, 8, ["href"]),
            createVNode(_component_Link, {
              href: _ctx.route("admin.usersVerification", _ctx.dataUser[0].id),
              class: "text-blue-brand-gradient1 font-semibold hover:text-blue-brand"
            }, {
              default: withCtx(() => [
                createTextVNode("Verificaci\xF3n/")
              ]),
              _: 1
            }, 8, ["href"]),
            createTextVNode(" Conocimiento del Cliente ")
          ])
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="py-6 w-full"${_scopeId}><div class="flex mx-auto lg:mr-4"${_scopeId}><div class="container mx-auto sm:px-6 lg:px-8"${_scopeId}><div class="bg-white overflow-hidden shadow-xl sm:rounded-lg py-6"${_scopeId}>`);
        if (_ctx.advertence) {
          _push2(`<h3 class="text-xl text-orange-600 font-semibold p-3 text-center"${_scopeId}>Admin verificador el cliente ha diligenciado campos especiales por favor revise con detenimiento.</h3>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`<h1 class="text-3xl text-black/75 font-semibold px-3 pb-3 text-center"${_scopeId}>Formulario Conocimiento del Cliente</h1><div class="grid grid-cols-6 gap-2 px-4 py-5"${_scopeId}><div class="col-span-3 md:col-start-1 md:col-end-3"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_label, {
          for: "date",
          value: "Fecha diligenciamiento"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_jet_input, {
          readonly: "",
          id: "date",
          type: "date",
          class: "read-only:bg-gray-200 mt-1 block w-full",
          modelValue: _ctx.date,
          "onUpdate:modelValue": ($event) => _ctx.date = $event
        }, null, _parent2, _scopeId));
        _push2(`</div><div class="col-span-3 md:col-end-7 md:col-span-2"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_label, {
          for: "citySign",
          value: "Ciudad diligenciamiento"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_jet_input, {
          readonly: "",
          id: "citySign",
          type: "text",
          class: "read-only:bg-gray-200 mt-1 block w-full",
          modelValue: _ctx.dataUser[0].form_knowledge_client.citySign,
          "onUpdate:modelValue": ($event) => _ctx.dataUser[0].form_knowledge_client.citySign = $event
        }, null, _parent2, _scopeId));
        _push2(`</div><div class="col-span-6"${_scopeId}><h2 class="col-span-6 text-xl text-black/75 font-semibold px-3 pt-1 text-center"${_scopeId}>Informaci\xF3n B\xE1sica Persona Natural</h2></div><div class="col-span-6 md:col-span-3"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_label, {
          for: "name",
          value: "Nombres"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_jet_input, {
          readonly: "",
          id: "name",
          type: "text",
          class: "read-only:bg-gray-200 mt-1 block w-full",
          modelValue: _ctx.dataUser[0].name,
          "onUpdate:modelValue": ($event) => _ctx.dataUser[0].name = $event
        }, null, _parent2, _scopeId));
        _push2(`</div><div class="col-span-6 md:col-span-3"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_label, {
          for: "lastname",
          value: "Apellidos"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_jet_input, {
          readonly: "",
          id: "lastname",
          type: "text",
          class: "read-only:bg-gray-200 mt-1 block w-full",
          modelValue: _ctx.dataUser[0].lastname,
          "onUpdate:modelValue": ($event) => _ctx.dataUser[0].lastname = $event
        }, null, _parent2, _scopeId));
        _push2(`</div><div class="col-span-6 md:col-span-2"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_select, {
          readonly: true,
          disabled: "",
          selectable: _ctx.doc_types,
          selected: _ctx.doc_types[_ctx.dataUser[0].data_user.doc_type - 1]
        }, {
          title: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Tipo de documento `);
            } else {
              return [
                createTextVNode(" Tipo de documento ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div><div class="col-span-6 md:col-span-2"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_label, {
          for: "doc_num",
          value: "N\xFAmero documento"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_jet_input, {
          readonly: "",
          id: "doc_num",
          type: "number",
          class: "read-only:bg-gray-200 mt-1 block w-full",
          modelValue: _ctx.dataUser[0].data_user.doc_num,
          "onUpdate:modelValue": ($event) => _ctx.dataUser[0].data_user.doc_num = $event
        }, null, _parent2, _scopeId));
        _push2(`</div><div class="col-span-6 md:col-span-2"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_label, {
          for: "expeditionDate",
          value: "Fecha de expedici\xF3n"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_jet_input, {
          readonly: "",
          id: "expeditionDate",
          type: "date",
          class: "read-only:bg-gray-200 mt-1 block w-full",
          modelValue: _ctx.dataUser[0].data_user.expeditionDate,
          "onUpdate:modelValue": ($event) => _ctx.dataUser[0].data_user.expeditionDate = $event
        }, null, _parent2, _scopeId));
        _push2(`</div><div class="col-span-6 md:col-span-2"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_label, {
          for: "expeditionPlace",
          value: "Lugar de expedici\xF3n"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_jet_input, {
          readonly: "",
          id: "expeditionPlace",
          type: "text",
          class: "read-only:bg-gray-200 mt-1 block w-full",
          modelValue: _ctx.dataUser[0].data_user.expeditionPlace,
          "onUpdate:modelValue": ($event) => _ctx.dataUser[0].data_user.expeditionPlace = $event
        }, null, _parent2, _scopeId));
        _push2(`</div><div class="col-span-6 md:col-span-2"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_label, {
          for: "birthDate",
          value: "Fecha de nacimiento"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_jet_input, {
          readonly: "",
          id: "birthDate",
          type: "date",
          class: "read-only:bg-gray-200 mt-1 block w-full",
          modelValue: _ctx.dataUser[0].data_user.birthDate,
          "onUpdate:modelValue": ($event) => _ctx.dataUser[0].data_user.birthDate = $event
        }, null, _parent2, _scopeId));
        _push2(`</div><div class="col-span-6 md:col-span-2"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_label, {
          for: "birthPlace",
          value: "Lugar de nacimiento"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_jet_input, {
          readonly: "",
          id: "birthPlace",
          type: "text",
          class: "read-only:bg-gray-200 mt-1 block w-full",
          modelValue: _ctx.dataUser[0].data_user.birthPlace,
          "onUpdate:modelValue": ($event) => _ctx.dataUser[0].data_user.birthPlace = $event
        }, null, _parent2, _scopeId));
        _push2(`</div><div class="col-span-6 md:col-span-2"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_label, {
          for: "nationality",
          value: "Nacionalidad"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_jet_input, {
          readonly: "",
          id: "nationality",
          type: "text",
          class: "read-only:bg-gray-200 mt-1 block w-full",
          modelValue: _ctx.dataUser[0].data_user.nationality,
          "onUpdate:modelValue": ($event) => _ctx.dataUser[0].data_user.nationality = $event
        }, null, _parent2, _scopeId));
        _push2(`</div><div class="col-span-6 md:col-span-2"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_label, {
          for: "mobil",
          value: "Celular"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_jet_input, {
          readonly: "",
          id: "mobil",
          type: "number",
          class: "read-only:bg-gray-200 mt-1 block w-full",
          modelValue: _ctx.dataUser[0].mobil,
          "onUpdate:modelValue": ($event) => _ctx.dataUser[0].mobil = $event
        }, null, _parent2, _scopeId));
        _push2(`</div><div class="col-span-6 md:col-span-2"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_label, {
          for: "email",
          value: "Email"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_jet_input, {
          readonly: "",
          id: "email",
          type: "email",
          class: "read-only:bg-gray-200 mt-1 block w-full",
          modelValue: _ctx.dataUser[0].email,
          "onUpdate:modelValue": ($event) => _ctx.dataUser[0].email = $event
        }, null, _parent2, _scopeId));
        _push2(`</div><div class="col-span-6 md:col-span-3"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_label, {
          for: "departament",
          value: "Departamento"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_jet_input, {
          readonly: "",
          id: "departament",
          type: "text",
          class: "read-only:bg-gray-200 mt-1 block w-full",
          modelValue: _ctx.dataUser[0].data_user.departament,
          "onUpdate:modelValue": ($event) => _ctx.dataUser[0].data_user.departament = $event
        }, null, _parent2, _scopeId));
        _push2(`</div><div class="col-span-6 md:col-span-3"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_label, {
          for: "city",
          value: "Ciudad"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_jet_input, {
          readonly: "",
          id: "city",
          type: "text",
          class: "read-only:bg-gray-200 mt-1 block w-full",
          modelValue: _ctx.dataUser[0].data_user.city,
          "onUpdate:modelValue": ($event) => _ctx.dataUser[0].data_user.city = $event
        }, null, _parent2, _scopeId));
        _push2(`</div><div class="col-span-6"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_label, {
          for: "address",
          value: "Direcci\xF3n"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_jet_input, {
          readonly: "",
          id: "address",
          type: "text",
          class: "read-only:bg-gray-200 mt-1 block w-full",
          modelValue: _ctx.dataUser[0].data_user.address,
          "onUpdate:modelValue": ($event) => _ctx.dataUser[0].data_user.address = $event
        }, null, _parent2, _scopeId));
        _push2(`</div><div class="col-span-6"${_scopeId}><p class="text-md md:text-lg text-black/60 font-medium text-justify px-4 py-4"${_scopeId}> Por favor marque la casilla si su respuesta es afirmativa. </p></div><div class="col-span-6"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_label, { for: "terms" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="flex items-center"${_scopeId2}><div class="text-lg md:text-xl font-medium mr-2"${_scopeId2}> \xBFEs persona expuesta p\xFAblicamente (PEP)? </div>`);
              _push3(ssrRenderComponent(_component_jet_checkbox, {
                readonly: "",
                disabled: "",
                name: "tributeCountry",
                id: "tributeCountry",
                checked: _ctx.pep,
                "onUpdate:checked": ($event) => _ctx.pep = $event
              }, null, _parent3, _scopeId2));
              _push3(`</div>`);
            } else {
              return [
                createVNode("div", { class: "flex items-center" }, [
                  createVNode("div", { class: "text-lg md:text-xl font-medium mr-2" }, " \xBFEs persona expuesta p\xFAblicamente (PEP)? "),
                  createVNode(_component_jet_checkbox, {
                    readonly: "",
                    disabled: "",
                    name: "tributeCountry",
                    id: "tributeCountry",
                    checked: _ctx.pep,
                    "onUpdate:checked": ($event) => _ctx.pep = $event
                  }, null, 8, ["checked", "onUpdate:checked"])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div><div class="col-span-6"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_label, { for: "terms" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="flex items-center"${_scopeId2}><div class="text-lg md:text-xl font-medium mr-2"${_scopeId2}> \xBFPor su actividad o cargo administra recursos p\xFAblicos? </div>`);
              _push3(ssrRenderComponent(_component_jet_checkbox, {
                readonly: "",
                disabled: "",
                name: "tributeCountry",
                id: "tributeCountry",
                checked: _ctx.publicFunds,
                "onUpdate:checked": ($event) => _ctx.publicFunds = $event
              }, null, _parent3, _scopeId2));
              _push3(`</div>`);
            } else {
              return [
                createVNode("div", { class: "flex items-center" }, [
                  createVNode("div", { class: "text-lg md:text-xl font-medium mr-2" }, " \xBFPor su actividad o cargo administra recursos p\xFAblicos? "),
                  createVNode(_component_jet_checkbox, {
                    readonly: "",
                    disabled: "",
                    name: "tributeCountry",
                    id: "tributeCountry",
                    checked: _ctx.publicFunds,
                    "onUpdate:checked": ($event) => _ctx.publicFunds = $event
                  }, null, 8, ["checked", "onUpdate:checked"])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div><div class="col-span-6"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_label, { for: "terms" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="flex items-center"${_scopeId2}><div class="text-lg md:text-xl font-medium mr-2"${_scopeId2}> \xBFEst\xE1 obligado a tributar en otro pa\xEDs? </div>`);
              _push3(ssrRenderComponent(_component_jet_checkbox, {
                readonly: "",
                disabled: "",
                name: "tributeCountry",
                id: "tributeCountry",
                checked: _ctx.tributeCountry,
                "onUpdate:checked": ($event) => _ctx.tributeCountry = $event
              }, null, _parent3, _scopeId2));
              _push3(`</div>`);
            } else {
              return [
                createVNode("div", { class: "flex items-center" }, [
                  createVNode("div", { class: "text-lg md:text-xl font-medium mr-2" }, " \xBFEst\xE1 obligado a tributar en otro pa\xEDs? "),
                  createVNode(_component_jet_checkbox, {
                    readonly: "",
                    disabled: "",
                    name: "tributeCountry",
                    id: "tributeCountry",
                    checked: _ctx.tributeCountry,
                    "onUpdate:checked": ($event) => _ctx.tributeCountry = $event
                  }, null, 8, ["checked", "onUpdate:checked"])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div>`);
        if (_ctx.tributeCountry) {
          _push2(`<div class="col-span-6"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_jet_label, {
            for: "countries",
            value: "Indique en qu\xE9 pa\xEDses"
          }, null, _parent2, _scopeId));
          _push2(ssrRenderComponent(_component_jet_input, {
            readonly: "",
            id: "countries",
            type: "text",
            class: "read-only:bg-gray-200 mt-1 block w-full",
            modelValue: _ctx.formKnowledgeClient.countries,
            "onUpdate:modelValue": ($event) => _ctx.formKnowledgeClient.countries = $event
          }, null, _parent2, _scopeId));
          _push2(`</div>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`<div class="col-span-6"${_scopeId}><h2 class="col-span-6 text-xl text-black/75 font-semibold px-3 py-4 text-center"${_scopeId}>Informaci\xF3n Financiera</h2></div><div class="col-span-6 md:col-span-2"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_label, {
          for: "income",
          value: "Ingresos Mensuales (COP)"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_jet_input, {
          readonly: "",
          id: "income",
          type: "number",
          class: "read-only:bg-gray-200 mt-1 block w-full",
          modelValue: _ctx.dataUser[0].financial_data_user.income,
          "onUpdate:modelValue": ($event) => _ctx.dataUser[0].financial_data_user.income = $event
        }, null, _parent2, _scopeId));
        _push2(`</div><div class="col-span-6 md:col-span-2"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_label, {
          for: "expenses",
          value: "Egresos Mensuales (COP)"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_jet_input, {
          readonly: "",
          id: "expenses",
          type: "number",
          class: "read-only:bg-gray-200 mt-1 block w-full",
          modelValue: _ctx.dataUser[0].financial_data_user.expenses,
          "onUpdate:modelValue": ($event) => _ctx.dataUser[0].financial_data_user.expenses = $event
        }, null, _parent2, _scopeId));
        _push2(`</div><div class="col-span-6 md:col-span-2"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_label, {
          for: "assets",
          value: "Activos (COP)"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_jet_input, {
          readonly: "",
          id: "assets",
          type: "number",
          class: "read-only:bg-gray-200 mt-1 block w-full",
          modelValue: _ctx.dataUser[0].financial_data_user.assets,
          "onUpdate:modelValue": ($event) => _ctx.dataUser[0].financial_data_user.assets = $event
        }, null, _parent2, _scopeId));
        _push2(`</div><div class="col-span-6 md:col-span-2"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_label, {
          for: "liabilities",
          value: "Pasivos (COP)"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_jet_input, {
          readonly: "",
          id: "liabilities",
          type: "number",
          class: "read-only:bg-gray-200 mt-1 block w-full",
          modelValue: _ctx.dataUser[0].financial_data_user.liabilities,
          "onUpdate:modelValue": ($event) => _ctx.dataUser[0].financial_data_user.liabilities = $event
        }, null, _parent2, _scopeId));
        _push2(`</div><div class="col-span-6 md:col-span-2"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_label, {
          for: "heritage",
          value: "Patrimonio (COP)"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_jet_input, {
          readonly: "",
          id: "heritage",
          type: "number",
          class: "read-only:bg-gray-200 mt-1 block w-full",
          modelValue: _ctx.dataUser[0].financial_data_user.heritage,
          "onUpdate:modelValue": ($event) => _ctx.dataUser[0].financial_data_user.heritage = $event
        }, null, _parent2, _scopeId));
        _push2(`</div><div class="col-span-6 md:col-span-2"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_label, {
          for: "incomeOther",
          value: "Otros Ingresos (COP)"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_jet_input, {
          readonly: "",
          id: "incomeOther",
          type: "number",
          class: "read-only:bg-gray-200 mt-1 block w-full",
          modelValue: _ctx.dataUser[0].financial_data_user.incomeOther,
          "onUpdate:modelValue": ($event) => _ctx.dataUser[0].financial_data_user.incomeOther = $event
        }, null, _parent2, _scopeId));
        _push2(`</div>`);
        if (_ctx.dataUser[0].financial_data_user.incomeOther) {
          _push2(`<div class="col-span-6"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_jet_label, {
            for: "descriptionIncome",
            value: "Concepto Otros Ingresos"
          }, null, _parent2, _scopeId));
          _push2(ssrRenderComponent(_component_jet_input, {
            readonly: "",
            id: "descriptionIncome",
            type: "text",
            class: "read-only:bg-gray-200 mt-1 block w-full",
            modelValue: _ctx.dataUser[0].financial_data_user.descriptionIncome,
            "onUpdate:modelValue": ($event) => _ctx.dataUser[0].financial_data_user.descriptionIncome = $event
          }, null, _parent2, _scopeId));
          _push2(`</div>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`<div class="col-span-6"${_scopeId}><h2 class="col-span-6 text-xl text-black/75 font-semibold px-3 py-4 text-center"${_scopeId}>Actividades En Operaciones Internacionales</h2><p class="text-md md:text-lg text-black/60 font-medium text-justify px-4 py-4"${_scopeId}> Por favor marque la casilla si su respuesta es afirmativa. </p></div><div class="col-span-6"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_label, { for: "terms" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="flex items-center"${_scopeId2}><div class="text-lg md:text-xl font-medium mr-2"${_scopeId2}> \xBFRealiza transacciones en moneda extranjera? </div>`);
              _push3(ssrRenderComponent(_component_jet_checkbox, {
                readonly: "",
                disabled: "",
                name: "transactionsForeignMoney",
                id: "transactionsForeignMoney",
                checked: _ctx.transactionsForeignMoney,
                "onUpdate:checked": ($event) => _ctx.transactionsForeignMoney = $event
              }, null, _parent3, _scopeId2));
              _push3(`</div>`);
            } else {
              return [
                createVNode("div", { class: "flex items-center" }, [
                  createVNode("div", { class: "text-lg md:text-xl font-medium mr-2" }, " \xBFRealiza transacciones en moneda extranjera? "),
                  createVNode(_component_jet_checkbox, {
                    readonly: "",
                    disabled: "",
                    name: "transactionsForeignMoney",
                    id: "transactionsForeignMoney",
                    checked: _ctx.transactionsForeignMoney,
                    "onUpdate:checked": ($event) => _ctx.transactionsForeignMoney = $event
                  }, null, 8, ["checked", "onUpdate:checked"])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div><div class="col-span-6"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_label, { for: "terms" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="flex items-center"${_scopeId2}><div class="text-lg md:text-xl font-medium mr-2"${_scopeId2}> \xBFPosee productos financieros en el exterior? </div>`);
              _push3(ssrRenderComponent(_component_jet_checkbox, {
                readonly: "",
                disabled: "",
                name: "productsFinancialExt",
                id: "productsFinancialExt",
                checked: _ctx.productsFinancialExt,
                "onUpdate:checked": ($event) => _ctx.productsFinancialExt = $event
              }, null, _parent3, _scopeId2));
              _push3(`</div>`);
            } else {
              return [
                createVNode("div", { class: "flex items-center" }, [
                  createVNode("div", { class: "text-lg md:text-xl font-medium mr-2" }, " \xBFPosee productos financieros en el exterior? "),
                  createVNode(_component_jet_checkbox, {
                    readonly: "",
                    disabled: "",
                    name: "productsFinancialExt",
                    id: "productsFinancialExt",
                    checked: _ctx.productsFinancialExt,
                    "onUpdate:checked": ($event) => _ctx.productsFinancialExt = $event
                  }, null, 8, ["checked", "onUpdate:checked"])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div><div class="col-span-6"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_label, { for: "terms" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="flex items-center"${_scopeId2}><div class="text-lg md:text-xl font-medium mr-2"${_scopeId2}> \xBFPosee cuentas en moneda extranjera? </div>`);
              _push3(ssrRenderComponent(_component_jet_checkbox, {
                readonly: "",
                disabled: "",
                name: "accountsForeignMoney",
                id: "accountsForeignMoney",
                checked: _ctx.accountsForeignMoney,
                "onUpdate:checked": ($event) => _ctx.accountsForeignMoney = $event
              }, null, _parent3, _scopeId2));
              _push3(`</div>`);
            } else {
              return [
                createVNode("div", { class: "flex items-center" }, [
                  createVNode("div", { class: "text-lg md:text-xl font-medium mr-2" }, " \xBFPosee cuentas en moneda extranjera? "),
                  createVNode(_component_jet_checkbox, {
                    readonly: "",
                    disabled: "",
                    name: "accountsForeignMoney",
                    id: "accountsForeignMoney",
                    checked: _ctx.accountsForeignMoney,
                    "onUpdate:checked": ($event) => _ctx.accountsForeignMoney = $event
                  }, null, 8, ["checked", "onUpdate:checked"])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div><div class="col-span-6"${_scopeId}><h2 class="col-span-6 text-xl text-black/75 font-semibold px-3 py-4 text-center"${_scopeId}>Cl\xE1usula de Autorizaci\xF3n</h2><p class="text-md md:text-lg text-black/60 font-medium text-justify px-4"${_scopeId}> Para efectos de la presente autorizaci\xF3n, enti\xE9ndase por EXCHANGELATAM S.A.S. la(s) sociedad(es). </p></div><div class="col-span-6"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_label, { for: "terms" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="flex items-center"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_jet_checkbox, {
                readonly: "",
                disabled: "",
                name: "auth_1",
                id: "auth_1",
                class: "ml-4",
                checked: _ctx.auth_1,
                "onUpdate:checked": ($event) => _ctx.auth_1 = $event
              }, null, _parent3, _scopeId2));
              _push3(`<div class="text-md md:text-lg text-black/60 font-medium text-justify px-4 mr-2"${_scopeId2}> Autorizo expresa e inequ\xEDvocamente a usar mis datos personales con fines comerciales en los t\xE9rminos que trata la consideraci\xF3n 2 de la Cl\xE1usula de Autorizaci\xF3n del presente documento, la cual le\xED y comprend\xED cabalmente. </div></div>`);
            } else {
              return [
                createVNode("div", { class: "flex items-center" }, [
                  createVNode(_component_jet_checkbox, {
                    readonly: "",
                    disabled: "",
                    name: "auth_1",
                    id: "auth_1",
                    class: "ml-4",
                    checked: _ctx.auth_1,
                    "onUpdate:checked": ($event) => _ctx.auth_1 = $event
                  }, null, 8, ["checked", "onUpdate:checked"]),
                  createVNode("div", { class: "text-md md:text-lg text-black/60 font-medium text-justify px-4 mr-2" }, " Autorizo expresa e inequ\xEDvocamente a usar mis datos personales con fines comerciales en los t\xE9rminos que trata la consideraci\xF3n 2 de la Cl\xE1usula de Autorizaci\xF3n del presente documento, la cual le\xED y comprend\xED cabalmente. ")
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div><div class="col-span-6"${_scopeId}><p class="text-md md:text-lg text-black/60 font-medium text-justify px-4"${_scopeId}> Declaro expresamente: </p><ul class="list-decimal list-inside text-md md:text-lg text-black/60 font-medium text-justify px-4"${_scopeId}><li class="mb-2"${_scopeId}><span class="text-justify"${_scopeId}> Que para efectos de acceder a la prestaci\xF3n de productos y/o servicios por parte de EXCHANGELATAM S.A.S., suministramos nuestros datos para todos los fines precontractuales y contractuales, as\xED como para fines comerciales, de consulta y conocimiento de la persona jur\xEDdica. </span></li><li class="mb-2"${_scopeId}><span class="text-justify"${_scopeId}> Que EXCHANGELATAM S.A.S. ha informado de manera expresa: </span><ul class="list-none list-inside text-md md:text-lg text-black/60 font-medium text-justify px-4"${_scopeId}><li class="mb-2"${_scopeId}><span class="text-justify"${_scopeId}> I. Finalidad del tratamiento de datos personales. </span></li><li class="mb-2"${_scopeId}><span class="text-justify"${_scopeId}> II. El tratamiento podr\xE1 ser realizado directamente por la citada sociedad o por los encargados del tratamiento que ellas consideren necesarios. </span></li><li class="mb-2"${_scopeId}><span class="text-justify"${_scopeId}> III. Usuarios de la informaci\xF3n </span></li><li class="mb-2"${_scopeId}><span class="text-justify"${_scopeId}> IV. TRANSFERENCIA INTERNACIONAL DE INFORMACI\xD3N A TERCEROS PA\xCDSES: que en ciertas situaciones es necesario realizar transferencias internacionales de mis datos para cumplir las finalidades del tratamiento. </span></li><li class="mb-2"${_scopeId}><span class="text-justify"${_scopeId}> V. DATOS PERSONALES DE NI\xD1AS, NI\xD1OS Y ADOLESCENTES: que son facultativas las respuestas a las preguntas sobre datos de ni\xF1as, ni\xF1os y adolescentes. En consencuencia, no hemos sido obligados a responderlas. </span></li><li class="mb-2"${_scopeId}><span class="text-justify"${_scopeId}> VI. DERECHOS DEL TITULAR DE LA INFORMACI\xD3N: que como titular de la informaci\xF3n, nos asisten los derechos previstos en la Ley 1266 de 2008. En especial, el derecho a conocer, actualizar y rectificar las informaciones que se hayan recogido sobre nosotros. </span></li><li class="mb-2"${_scopeId}><span class="text-justify"${_scopeId}> VII. RESPONSABLES Y ENCARGADOS DEL TRATAMIENTO DE LA INFORMACI\xD3N: que los Responsables del tratamiento de la informaci\xF3n es EXCHANGELATAM S.A.S., cuyos datos de contacto se incluyeron en el encabezado de esta autorizaci\xF3n. </span></li></ul>`);
        _push2(ssrRenderComponent(_component_jet_label, { for: "terms" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="flex items-center"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_jet_checkbox, {
                readonly: "",
                disabled: "",
                name: "auth_2",
                id: "auth_2",
                class: "ml-4",
                checked: _ctx.auth_2,
                "onUpdate:checked": ($event) => _ctx.auth_2 = $event
              }, null, _parent3, _scopeId2));
              _push3(`<div class="text-md md:text-lg text-black/60 font-medium text-justify px-4 mr-2"${_scopeId2}> Autorizo expresa e inequ\xEDvocamente a EXCHANGELATAM S.A.S. para que traten mis datos personales en los t\xE9rminos descritos en el numeral III del numeral 2 denominado &quot;usuarios de la informaci\xF3n&quot;, especialmente para efectos de prevenci\xF3n y control de fraudes, la selecci\xF3n de riesgos, y control de requisitos para acceder al Sistema General de Seguridad Social Integral, as\xED como la elaboraci\xF3n de estudios internos. </div></div>`);
            } else {
              return [
                createVNode("div", { class: "flex items-center" }, [
                  createVNode(_component_jet_checkbox, {
                    readonly: "",
                    disabled: "",
                    name: "auth_2",
                    id: "auth_2",
                    class: "ml-4",
                    checked: _ctx.auth_2,
                    "onUpdate:checked": ($event) => _ctx.auth_2 = $event
                  }, null, 8, ["checked", "onUpdate:checked"]),
                  createVNode("div", { class: "text-md md:text-lg text-black/60 font-medium text-justify px-4 mr-2" }, ' Autorizo expresa e inequ\xEDvocamente a EXCHANGELATAM S.A.S. para que traten mis datos personales en los t\xE9rminos descritos en el numeral III del numeral 2 denominado "usuarios de la informaci\xF3n", especialmente para efectos de prevenci\xF3n y control de fraudes, la selecci\xF3n de riesgos, y control de requisitos para acceder al Sistema General de Seguridad Social Integral, as\xED como la elaboraci\xF3n de estudios internos. ')
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`<span class="text-justify mt-2 px-4"${_scopeId}> Para efectos de la verificaci\xF3n espec\xEDfica de las pol\xEDticas internas sobre el tratamiento de datos personales, como titular de la informaci\xF3n acudir\xE9 a las p\xE1ginas web de los responsables y encargados que estoy autorizando en el presente escrito. </span></li><li class="mb-2"${_scopeId}><span class="text-justify"${_scopeId}> AUTORIZACI\xD3N: de manera expresa, AUTORIZAMOS el Tratamiento de los datos y, de ser necesario, la transferencia nacional e internacional de los mismos, por las personas, para las finalidades y en los t\xE9rminos que nos fueron informados en este documento. </span></li><li class="mb-2"${_scopeId}><span class="text-justify"${_scopeId}> CERTIFICACI\xD3N: manifestamos que la informaci\xF3n suministrada por nosotros para las finalidades se\xF1aladas en este documento, puede contener datos personales de empleados, proveedores, colaboradores o clientes de la compa\xF1\xEDa, por lo cual certificamos de manera expresa que la misma, ha sido: i) obtenida de acuerdo con lo previsto en la legislaci\xF3n aplicable, particularmente en la Ley 1581 de 2012 y ii) que, existen las autorizaciones necesarias de acuerdo con lo previsto en la legislaci\xF3n aplicable, para el tratamiento y circulaci\xF3n de esta Base de Datos por parte de EXCHANGELATAM S.A.S. se\xF1alado en este documento. </span></li></ul></div><div class="col-span-6 text-md md:text-lg text-black/60 font-medium text-justify px-4"${_scopeId}><div class="flex items-center"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_checkbox, {
          readonly: "",
          disabled: "",
          name: "sign",
          id: "sign",
          class: "ml-4",
          checked: _ctx.sign,
          "onUpdate:checked": ($event) => _ctx.sign = $event
        }, null, _parent2, _scopeId));
        _push2(` <span class="px-2 text-black/75"${_scopeId}>Firma electr\xF3nica:</span> <span class="underline"${_scopeId}>${ssrInterpolate(_ctx.dataUser[0].name + " " + _ctx.dataUser[0].lastname)}</span></div><div class="text-sm font-normal pl-4 mt-2"${_scopeId}> ACEPTACI\xD3N Y FIRMA ELECTR\xD3NICA: Las partes acuerdan que el requisito de firma en el presente documento queda satisfecho y tendr\xE1 plenos efectos jur\xEDdicos con la aceptaci\xF3n electr\xF3nica que el cliente haga con la utilizaci\xF3n de su NIP y/o C\xF3digo y/o Clave y/o imposici\xF3n de huella y/o la utilizaci\xF3n de n\xFAmeros de identificaci\xF3n personal y/o la imposici\xF3n en el presente contrato de su firma manuscrita escaneada y/o la utilizaci\xF3n de sistemas y/o la utilizaci\xF3n de botones de aceptaci\xF3n de tipo &quot;si&quot;, &quot;aceptar&quot; o &quot;acepto&quot; y/o la combinaci\xF3n del documento de identidad proporcionado por el cliente con anterioridad a la firma de este documento. Por utilizaci\xF3n de nuestros servicios de ExchangeLatam el CLIENTE acepta que ha leido y aceptado nuestros t\xE9rminos y condiciones de servicio, al igual que las pol\xEDticas de privacidad y SAGRILAFT. En se\xF1al de aceptaci\xF3n de lo expresado, se firma el presente documento mediante la imposici\xF3n de mi firma electr\xF3nica y check in en la aceptaci\xF3n de firma electr\xF3nica en el presente documento. </div></div></div></div></div></div></div>`);
      } else {
        return [
          createVNode("div", { class: "py-6 w-full" }, [
            createVNode("div", { class: "flex mx-auto lg:mr-4" }, [
              createVNode("div", { class: "container mx-auto sm:px-6 lg:px-8" }, [
                createVNode("div", { class: "bg-white overflow-hidden shadow-xl sm:rounded-lg py-6" }, [
                  _ctx.advertence ? (openBlock(), createBlock("h3", {
                    key: 0,
                    class: "text-xl text-orange-600 font-semibold p-3 text-center"
                  }, "Admin verificador el cliente ha diligenciado campos especiales por favor revise con detenimiento.")) : createCommentVNode("", true),
                  createVNode("h1", { class: "text-3xl text-black/75 font-semibold px-3 pb-3 text-center" }, "Formulario Conocimiento del Cliente"),
                  createVNode("div", { class: "grid grid-cols-6 gap-2 px-4 py-5" }, [
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
                        modelValue: _ctx.date,
                        "onUpdate:modelValue": ($event) => _ctx.date = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", { class: "col-span-3 md:col-end-7 md:col-span-2" }, [
                      createVNode(_component_jet_label, {
                        for: "citySign",
                        value: "Ciudad diligenciamiento"
                      }),
                      createVNode(_component_jet_input, {
                        readonly: "",
                        id: "citySign",
                        type: "text",
                        class: "read-only:bg-gray-200 mt-1 block w-full",
                        modelValue: _ctx.dataUser[0].form_knowledge_client.citySign,
                        "onUpdate:modelValue": ($event) => _ctx.dataUser[0].form_knowledge_client.citySign = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                        modelValue: _ctx.dataUser[0].name,
                        "onUpdate:modelValue": ($event) => _ctx.dataUser[0].name = $event
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
                        modelValue: _ctx.dataUser[0].lastname,
                        "onUpdate:modelValue": ($event) => _ctx.dataUser[0].lastname = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", { class: "col-span-6 md:col-span-2" }, [
                      createVNode(_component_jet_select, {
                        readonly: true,
                        disabled: "",
                        selectable: _ctx.doc_types,
                        selected: _ctx.doc_types[_ctx.dataUser[0].data_user.doc_type - 1]
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
                        type: "number",
                        class: "read-only:bg-gray-200 mt-1 block w-full",
                        modelValue: _ctx.dataUser[0].data_user.doc_num,
                        "onUpdate:modelValue": ($event) => _ctx.dataUser[0].data_user.doc_num = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", { class: "col-span-6 md:col-span-2" }, [
                      createVNode(_component_jet_label, {
                        for: "expeditionDate",
                        value: "Fecha de expedici\xF3n"
                      }),
                      createVNode(_component_jet_input, {
                        readonly: "",
                        id: "expeditionDate",
                        type: "date",
                        class: "read-only:bg-gray-200 mt-1 block w-full",
                        modelValue: _ctx.dataUser[0].data_user.expeditionDate,
                        "onUpdate:modelValue": ($event) => _ctx.dataUser[0].data_user.expeditionDate = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", { class: "col-span-6 md:col-span-2" }, [
                      createVNode(_component_jet_label, {
                        for: "expeditionPlace",
                        value: "Lugar de expedici\xF3n"
                      }),
                      createVNode(_component_jet_input, {
                        readonly: "",
                        id: "expeditionPlace",
                        type: "text",
                        class: "read-only:bg-gray-200 mt-1 block w-full",
                        modelValue: _ctx.dataUser[0].data_user.expeditionPlace,
                        "onUpdate:modelValue": ($event) => _ctx.dataUser[0].data_user.expeditionPlace = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", { class: "col-span-6 md:col-span-2" }, [
                      createVNode(_component_jet_label, {
                        for: "birthDate",
                        value: "Fecha de nacimiento"
                      }),
                      createVNode(_component_jet_input, {
                        readonly: "",
                        id: "birthDate",
                        type: "date",
                        class: "read-only:bg-gray-200 mt-1 block w-full",
                        modelValue: _ctx.dataUser[0].data_user.birthDate,
                        "onUpdate:modelValue": ($event) => _ctx.dataUser[0].data_user.birthDate = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", { class: "col-span-6 md:col-span-2" }, [
                      createVNode(_component_jet_label, {
                        for: "birthPlace",
                        value: "Lugar de nacimiento"
                      }),
                      createVNode(_component_jet_input, {
                        readonly: "",
                        id: "birthPlace",
                        type: "text",
                        class: "read-only:bg-gray-200 mt-1 block w-full",
                        modelValue: _ctx.dataUser[0].data_user.birthPlace,
                        "onUpdate:modelValue": ($event) => _ctx.dataUser[0].data_user.birthPlace = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", { class: "col-span-6 md:col-span-2" }, [
                      createVNode(_component_jet_label, {
                        for: "nationality",
                        value: "Nacionalidad"
                      }),
                      createVNode(_component_jet_input, {
                        readonly: "",
                        id: "nationality",
                        type: "text",
                        class: "read-only:bg-gray-200 mt-1 block w-full",
                        modelValue: _ctx.dataUser[0].data_user.nationality,
                        "onUpdate:modelValue": ($event) => _ctx.dataUser[0].data_user.nationality = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", { class: "col-span-6 md:col-span-2" }, [
                      createVNode(_component_jet_label, {
                        for: "mobil",
                        value: "Celular"
                      }),
                      createVNode(_component_jet_input, {
                        readonly: "",
                        id: "mobil",
                        type: "number",
                        class: "read-only:bg-gray-200 mt-1 block w-full",
                        modelValue: _ctx.dataUser[0].mobil,
                        "onUpdate:modelValue": ($event) => _ctx.dataUser[0].mobil = $event
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
                        modelValue: _ctx.dataUser[0].email,
                        "onUpdate:modelValue": ($event) => _ctx.dataUser[0].email = $event
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
                        modelValue: _ctx.dataUser[0].data_user.departament,
                        "onUpdate:modelValue": ($event) => _ctx.dataUser[0].data_user.departament = $event
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
                        modelValue: _ctx.dataUser[0].data_user.city,
                        "onUpdate:modelValue": ($event) => _ctx.dataUser[0].data_user.city = $event
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
                        modelValue: _ctx.dataUser[0].data_user.address,
                        "onUpdate:modelValue": ($event) => _ctx.dataUser[0].data_user.address = $event
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
                              readonly: "",
                              disabled: "",
                              name: "tributeCountry",
                              id: "tributeCountry",
                              checked: _ctx.pep,
                              "onUpdate:checked": ($event) => _ctx.pep = $event
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
                              readonly: "",
                              disabled: "",
                              name: "tributeCountry",
                              id: "tributeCountry",
                              checked: _ctx.publicFunds,
                              "onUpdate:checked": ($event) => _ctx.publicFunds = $event
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
                              readonly: "",
                              disabled: "",
                              name: "tributeCountry",
                              id: "tributeCountry",
                              checked: _ctx.tributeCountry,
                              "onUpdate:checked": ($event) => _ctx.tributeCountry = $event
                            }, null, 8, ["checked", "onUpdate:checked"])
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    _ctx.tributeCountry ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "col-span-6"
                    }, [
                      createVNode(_component_jet_label, {
                        for: "countries",
                        value: "Indique en qu\xE9 pa\xEDses"
                      }),
                      createVNode(_component_jet_input, {
                        readonly: "",
                        id: "countries",
                        type: "text",
                        class: "read-only:bg-gray-200 mt-1 block w-full",
                        modelValue: _ctx.formKnowledgeClient.countries,
                        "onUpdate:modelValue": ($event) => _ctx.formKnowledgeClient.countries = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                        readonly: "",
                        id: "income",
                        type: "number",
                        class: "read-only:bg-gray-200 mt-1 block w-full",
                        modelValue: _ctx.dataUser[0].financial_data_user.income,
                        "onUpdate:modelValue": ($event) => _ctx.dataUser[0].financial_data_user.income = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", { class: "col-span-6 md:col-span-2" }, [
                      createVNode(_component_jet_label, {
                        for: "expenses",
                        value: "Egresos Mensuales (COP)"
                      }),
                      createVNode(_component_jet_input, {
                        readonly: "",
                        id: "expenses",
                        type: "number",
                        class: "read-only:bg-gray-200 mt-1 block w-full",
                        modelValue: _ctx.dataUser[0].financial_data_user.expenses,
                        "onUpdate:modelValue": ($event) => _ctx.dataUser[0].financial_data_user.expenses = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", { class: "col-span-6 md:col-span-2" }, [
                      createVNode(_component_jet_label, {
                        for: "assets",
                        value: "Activos (COP)"
                      }),
                      createVNode(_component_jet_input, {
                        readonly: "",
                        id: "assets",
                        type: "number",
                        class: "read-only:bg-gray-200 mt-1 block w-full",
                        modelValue: _ctx.dataUser[0].financial_data_user.assets,
                        "onUpdate:modelValue": ($event) => _ctx.dataUser[0].financial_data_user.assets = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", { class: "col-span-6 md:col-span-2" }, [
                      createVNode(_component_jet_label, {
                        for: "liabilities",
                        value: "Pasivos (COP)"
                      }),
                      createVNode(_component_jet_input, {
                        readonly: "",
                        id: "liabilities",
                        type: "number",
                        class: "read-only:bg-gray-200 mt-1 block w-full",
                        modelValue: _ctx.dataUser[0].financial_data_user.liabilities,
                        "onUpdate:modelValue": ($event) => _ctx.dataUser[0].financial_data_user.liabilities = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", { class: "col-span-6 md:col-span-2" }, [
                      createVNode(_component_jet_label, {
                        for: "heritage",
                        value: "Patrimonio (COP)"
                      }),
                      createVNode(_component_jet_input, {
                        readonly: "",
                        id: "heritage",
                        type: "number",
                        class: "read-only:bg-gray-200 mt-1 block w-full",
                        modelValue: _ctx.dataUser[0].financial_data_user.heritage,
                        "onUpdate:modelValue": ($event) => _ctx.dataUser[0].financial_data_user.heritage = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", { class: "col-span-6 md:col-span-2" }, [
                      createVNode(_component_jet_label, {
                        for: "incomeOther",
                        value: "Otros Ingresos (COP)"
                      }),
                      createVNode(_component_jet_input, {
                        readonly: "",
                        id: "incomeOther",
                        type: "number",
                        class: "read-only:bg-gray-200 mt-1 block w-full",
                        modelValue: _ctx.dataUser[0].financial_data_user.incomeOther,
                        "onUpdate:modelValue": ($event) => _ctx.dataUser[0].financial_data_user.incomeOther = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _ctx.dataUser[0].financial_data_user.incomeOther ? (openBlock(), createBlock("div", {
                      key: 1,
                      class: "col-span-6"
                    }, [
                      createVNode(_component_jet_label, {
                        for: "descriptionIncome",
                        value: "Concepto Otros Ingresos"
                      }),
                      createVNode(_component_jet_input, {
                        readonly: "",
                        id: "descriptionIncome",
                        type: "text",
                        class: "read-only:bg-gray-200 mt-1 block w-full",
                        modelValue: _ctx.dataUser[0].financial_data_user.descriptionIncome,
                        "onUpdate:modelValue": ($event) => _ctx.dataUser[0].financial_data_user.descriptionIncome = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ])) : createCommentVNode("", true),
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
                              readonly: "",
                              disabled: "",
                              name: "transactionsForeignMoney",
                              id: "transactionsForeignMoney",
                              checked: _ctx.transactionsForeignMoney,
                              "onUpdate:checked": ($event) => _ctx.transactionsForeignMoney = $event
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
                              readonly: "",
                              disabled: "",
                              name: "productsFinancialExt",
                              id: "productsFinancialExt",
                              checked: _ctx.productsFinancialExt,
                              "onUpdate:checked": ($event) => _ctx.productsFinancialExt = $event
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
                              readonly: "",
                              disabled: "",
                              name: "accountsForeignMoney",
                              id: "accountsForeignMoney",
                              checked: _ctx.accountsForeignMoney,
                              "onUpdate:checked": ($event) => _ctx.accountsForeignMoney = $event
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
                              readonly: "",
                              disabled: "",
                              name: "auth_1",
                              id: "auth_1",
                              class: "ml-4",
                              checked: _ctx.auth_1,
                              "onUpdate:checked": ($event) => _ctx.auth_1 = $event
                            }, null, 8, ["checked", "onUpdate:checked"]),
                            createVNode("div", { class: "text-md md:text-lg text-black/60 font-medium text-justify px-4 mr-2" }, " Autorizo expresa e inequ\xEDvocamente a usar mis datos personales con fines comerciales en los t\xE9rminos que trata la consideraci\xF3n 2 de la Cl\xE1usula de Autorizaci\xF3n del presente documento, la cual le\xED y comprend\xED cabalmente. ")
                          ])
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
                                  readonly: "",
                                  disabled: "",
                                  name: "auth_2",
                                  id: "auth_2",
                                  class: "ml-4",
                                  checked: _ctx.auth_2,
                                  "onUpdate:checked": ($event) => _ctx.auth_2 = $event
                                }, null, 8, ["checked", "onUpdate:checked"]),
                                createVNode("div", { class: "text-md md:text-lg text-black/60 font-medium text-justify px-4 mr-2" }, ' Autorizo expresa e inequ\xEDvocamente a EXCHANGELATAM S.A.S. para que traten mis datos personales en los t\xE9rminos descritos en el numeral III del numeral 2 denominado "usuarios de la informaci\xF3n", especialmente para efectos de prevenci\xF3n y control de fraudes, la selecci\xF3n de riesgos, y control de requisitos para acceder al Sistema General de Seguridad Social Integral, as\xED como la elaboraci\xF3n de estudios internos. ')
                              ])
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
                          readonly: "",
                          disabled: "",
                          name: "sign",
                          id: "sign",
                          class: "ml-4",
                          checked: _ctx.sign,
                          "onUpdate:checked": ($event) => _ctx.sign = $event
                        }, null, 8, ["checked", "onUpdate:checked"]),
                        createTextVNode(),
                        createVNode("span", { class: "px-2 text-black/75" }, "Firma electr\xF3nica:"),
                        createTextVNode(),
                        createVNode("span", { class: "underline" }, toDisplayString(_ctx.dataUser[0].name + " " + _ctx.dataUser[0].lastname), 1)
                      ]),
                      createVNode("div", { class: "text-sm font-normal pl-4 mt-2" }, ' ACEPTACI\xD3N Y FIRMA ELECTR\xD3NICA: Las partes acuerdan que el requisito de firma en el presente documento queda satisfecho y tendr\xE1 plenos efectos jur\xEDdicos con la aceptaci\xF3n electr\xF3nica que el cliente haga con la utilizaci\xF3n de su NIP y/o C\xF3digo y/o Clave y/o imposici\xF3n de huella y/o la utilizaci\xF3n de n\xFAmeros de identificaci\xF3n personal y/o la imposici\xF3n en el presente contrato de su firma manuscrita escaneada y/o la utilizaci\xF3n de sistemas y/o la utilizaci\xF3n de botones de aceptaci\xF3n de tipo "si", "aceptar" o "acepto" y/o la combinaci\xF3n del documento de identidad proporcionado por el cliente con anterioridad a la firma de este documento. Por utilizaci\xF3n de nuestros servicios de ExchangeLatam el CLIENTE acepta que ha leido y aceptado nuestros t\xE9rminos y condiciones de servicio, al igual que las pol\xEDticas de privacidad y SAGRILAFT. En se\xF1al de aceptaci\xF3n de lo expresado, se firma el presente documento mediante la imposici\xF3n de mi firma electr\xF3nica y check in en la aceptaci\xF3n de firma electr\xF3nica en el presente documento. ')
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Forms/FormClientShow.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const FormClientShow = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  FormClientShow as default
};
