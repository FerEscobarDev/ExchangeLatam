import { defineComponent, resolveComponent, mergeProps, withCtx, createTextVNode, createVNode, openBlock, createBlock, toDisplayString, createCommentVNode, Fragment, renderList, useSSRContext } from "vue";
import { A as AppLayoutAdmin } from "./AppLayoutAdmin.60b59efd.mjs";
import { _ as _sfc_main$1 } from "./Button.feee2cab.mjs";
import { Link } from "@inertiajs/inertia-vue3";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCheckCircle, faTimesCircle } from "@fortawesome/free-regular-svg-icons";
import { faUserCheck, faUserClock, faUserTimes } from "@fortawesome/free-solid-svg-icons";
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderClass } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.43be4956.mjs";
import "./ResponsiveNavLink.105dcaab.mjs";
import "./logoweb.e431fb6b.mjs";
import "./NavLink.e5cf4d5a.mjs";
import "@fortawesome/free-brands-svg-icons";
library.add(faCheckCircle, faTimesCircle, faUserCheck, faUserClock, faUserTimes);
const _sfc_main = defineComponent({
  props: ["client", "sessions", "departaments", "cities", "account", "transactions", "roles"],
  components: {
    AppLayoutAdmin,
    Button: _sfc_main$1,
    Link,
    FontAwesomeIcon
  },
  methods: {
    transactionType(transaction) {
      if (transaction.type === 0) {
        return "Retiro";
      } else if (transaction.type === 1) {
        return "Dep\xF3sito";
      } else if (transaction.type === 2) {
        return "Compra de saldo";
      } else if (transaction.type === 3) {
        return "Venta de saldo";
      }
    }
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_AppLayoutAdmin = resolveComponent("AppLayoutAdmin");
  const _component_Link = resolveComponent("Link");
  const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
  _push(ssrRenderComponent(_component_AppLayoutAdmin, mergeProps({ title: "Perfil" }, _attrs), {
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
        _push2(`Perfil Usuario </h2>`);
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
            createTextVNode("Perfil Usuario ")
          ])
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="py-6 w-full"${_scopeId}><div class="flex mx-auto lg:mr-4"${_scopeId}><div class="container mx-auto sm:px-6 lg:px-8"${_scopeId}><div class="bg-white overflow-hidden shadow-xl sm:rounded-lg grid grid-cols-12 gap-x-2 gap-y-10 p-5"${_scopeId}><div class="col-span-12"${_scopeId}><div class="flex flex-col md:flex-row items-center justify-center md:justify-around"${_scopeId}><div class="flex items-center justify-start"${_scopeId}>`);
        if (_ctx.client.picture) {
          _push2(`<div${_scopeId}><div${_scopeId}><img${ssrRenderAttr("src", _ctx.$page.props.ziggy.url + "/storage/" + _ctx.client.picture)} class="rounded-full h-28 w-28 object-cover"${_scopeId}></div></div>`);
        } else {
          _push2(`<div${_scopeId}><div${_scopeId}><img${ssrRenderAttr("src", _ctx.client.profile_photo_url)}${ssrRenderAttr("alt", _ctx.client.name)} class="rounded-full h-28 w-28 object-cover"${_scopeId}></div></div>`);
        }
        if (_ctx.client.data_user === null) {
          _push2(`<div class="flex flex-col ml-5"${_scopeId}><span class="text-xl md:text-2xl text-black/75 font-semibold"${_scopeId}>${ssrInterpolate(_ctx.client.name + " " + _ctx.client.lastname)}</span></div>`);
        } else {
          _push2(`<div class="flex flex-col ml-5"${_scopeId}><span class="text-xl md:text-2xl text-black/75 font-semibold"${_scopeId}>${ssrInterpolate(_ctx.client.name + " " + _ctx.client.lastname)}</span>`);
          if (_ctx.client.data_user.vip === "no") {
            _push2(`<span class="text-black/50 font-medium"${_scopeId}>Cuenta Est\xE1ndar</span>`);
          } else {
            _push2(`<span class="text-amber-500 font-medium"${_scopeId}>Cuenta VIP</span>`);
          }
          _push2(`</div>`);
        }
        _push2(`</div><div class="flex md:flex-col gap-4 mt-6 md:mt-0"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Link, {
          href: _ctx.route("users.createWalletExchangeDeposit"),
          class: "inline-flex justify-center items-center px-4 py-2 bg-dark-brand border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Transacciones `);
            } else {
              return [
                createTextVNode(" Transacciones ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_Link, {
          href: _ctx.route("admin.usersVerification", _ctx.client.id),
          class: "inline-flex justify-center items-center px-4 py-2 bg-dark-brand border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Verificaci\xF3n `);
            } else {
              return [
                createTextVNode(" Verificaci\xF3n ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div></div></div><div class="col-span-12 md:col-span-4 md:col-start-2 px-10 md:px-0 xl:px-5"${_scopeId}><div class="text-dark-brand w-full flex flex-col items-between"${_scopeId}><h2 class="text-2xl text-center font-semibold text-dark-brand mb-2"${_scopeId}>Datos Personales</h2><span class="flex justify-between items-center"${_scopeId}><span class="text-md font-semibold text-dark-brand mr-2"${_scopeId}>Nombres: </span><span class="text-md text-gray-600"${_scopeId}>${ssrInterpolate(_ctx.client.name)}</span></span><span class="flex justify-between items-center"${_scopeId}><span class="text-md font-semibold text-dark-brand mr-2"${_scopeId}>Apellidos: </span><span class="text-md text-gray-600"${_scopeId}>${ssrInterpolate(_ctx.client.lastname)}</span></span><span class="flex justify-between items-center"${_scopeId}><span class="text-md font-semibold text-dark-brand mr-2"${_scopeId}>Documento: </span>`);
        if (_ctx.client.data_user === null) {
          _push2(`<span${_scopeId}> Sin Informaci\xF3n </span>`);
        } else {
          _push2(`<span${_scopeId}><span${_scopeId}>`);
          if (_ctx.client.data_user.doc_type === 1) {
            _push2(`<span class="text-md text-gray-600"${_scopeId}>C\xE9dula</span>`);
          } else if (_ctx.client.data_user.doc_type === 2) {
            _push2(`<span class="text-md text-gray-600"${_scopeId}>C\xE9dula de extranjer\xEDa</span>`);
          } else {
            _push2(`<span class="text-md text-gray-600"${_scopeId}>Pasaporte</span>`);
          }
          _push2(`</span></span>`);
        }
        _push2(`</span><span class="flex justify-between items-center"${_scopeId}><span class="text-md font-semibold text-dark-brand mr-2"${_scopeId}>N\xFAmero: </span>`);
        if (_ctx.client.data_user === null) {
          _push2(`<span${_scopeId}> Sin Informaci\xF3n </span>`);
        } else {
          _push2(`<span${_scopeId}><span class="text-md text-gray-600"${_scopeId}>${ssrInterpolate(_ctx.client.data_user.doc_num)}</span></span>`);
        }
        _push2(`</span><span class="flex justify-between items-center"${_scopeId}><span class="text-md font-semibold text-dark-brand mr-2"${_scopeId}>Email: </span><span class="text-md text-gray-600"${_scopeId}>${ssrInterpolate(_ctx.client.email)}</span></span><span class="flex justify-between items-center"${_scopeId}><span class="text-md font-semibold text-dark-brand mr-2"${_scopeId}>Celular: </span><span class="text-md text-gray-600"${_scopeId}>${ssrInterpolate(_ctx.client.mobil)}</span></span><span class="flex justify-between items-center"${_scopeId}><span class="text-md font-semibold text-dark-brand mr-2"${_scopeId}>Departamento: </span>`);
        if (_ctx.client.data_user === null) {
          _push2(`<span${_scopeId}> Sin Informaci\xF3n </span>`);
        } else {
          _push2(`<span${_scopeId}><span class="text-md text-gray-600"${_scopeId}>${ssrInterpolate(_ctx.client.data_user.departament)}</span></span>`);
        }
        _push2(`</span><span class="flex justify-between items-center"${_scopeId}><span class="text-md font-semibold text-dark-brand mr-2"${_scopeId}>Ciudad: </span>`);
        if (_ctx.client.data_user === null) {
          _push2(`<span${_scopeId}> Sin Informaci\xF3n </span>`);
        } else {
          _push2(`<span${_scopeId}><span class="text-md text-gray-600"${_scopeId}>${ssrInterpolate(_ctx.client.data_user.city)}</span></span>`);
        }
        _push2(`</span><span class="flex justify-between items-center"${_scopeId}><span class="text-md font-semibold text-dark-brand mr-2"${_scopeId}>Direcci\xF3n: </span>`);
        if (_ctx.client.data_user === null) {
          _push2(`<span${_scopeId}> Sin Informaci\xF3n </span>`);
        } else {
          _push2(`<span${_scopeId}><span class="text-md text-gray-600"${_scopeId}>${ssrInterpolate(_ctx.client.data_user.address)}</span></span>`);
        }
        _push2(`</span><div class="flex justify-center items-center mt-5"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Link, {
          href: _ctx.route("admin.userEdit", _ctx.client.id),
          class: "inline-flex items-center px-4 py-2 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest bg-orange-500 hover:bg-orange-700 active:bg-orange-900 focus:outline-none focus:border-orange-900 focus:ring focus:ring-orange-300 disabled:opacity-25 transition"
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
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div></div></div><div class="col-span-12 md:col-span-4 md:col-start-8 px-10 md:px-0 xl:px-5"${_scopeId}>`);
        if (_ctx.account !== null) {
          _push2(`<div class="text-dark-brand w-full flex flex-col items-between"${_scopeId}><h2 class="text-2xl text-center font-semibold text-dark-brand mb-2"${_scopeId}>Datos Bancarios</h2><span class="flex justify-between items-center"${_scopeId}><span class="text-md font-semibold text-dark-brand mr-2 w-16"${_scopeId}>Banco: </span><span class="text-md text-gray-600"${_scopeId}>${ssrInterpolate(_ctx.account.bank.name)}</span></span><span class="flex justify-between items-center"${_scopeId}><span class="text-md font-semibold text-dark-brand mr-2 w-16"${_scopeId}>Numero: </span><span class="text-md text-gray-600"${_scopeId}>${ssrInterpolate(_ctx.account.number)}</span></span><span class="flex justify-between items-center"${_scopeId}><span class="text-md font-semibold text-dark-brand mr-2 w-16"${_scopeId}>Tipo: </span><span class="text-md text-gray-600"${_scopeId}>${ssrInterpolate(_ctx.account.type)}</span></span><span class="flex justify-between items-center"${_scopeId}><span class="text-md font-semibold text-dark-brand mr-2 w-16"${_scopeId}>Inscrita: </span><span class="text-md text-gray-600"${_scopeId}>${ssrInterpolate(_ctx.account.enrolled === 1 ? "Inscrita" : "No Inscrita")}</span></span><div class="flex justify-center items-center mt-5"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_Link, {
            href: _ctx.route("users.createWalletExchangeDeposit"),
            class: "inline-flex items-center px-4 py-2 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest bg-orange-500 hover:bg-orange-700 active:bg-orange-900 focus:outline-none focus:border-orange-900 focus:ring focus:ring-orange-300 disabled:opacity-25 transition"
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(` Administrar `);
              } else {
                return [
                  createTextVNode(" Administrar ")
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
          _push2(`</div></div>`);
        } else {
          _push2(`<div class="text-dark-brand w-full flex flex-col items-between"${_scopeId}><h2 class="text-2xl text-center font-semibold text-dark-brand mb-2"${_scopeId}>Datos Bancarios</h2><span class="flex justify-center items-center w-full"${_scopeId}><span class="text-lg text-gray-600 my-10 w-full text-center"${_scopeId}>Sin datos bancarios registrados</span></span><div class="flex justify-center items-center mt-5"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_Link, {
            href: _ctx.route("users.createWalletExchangeDeposit"),
            class: "inline-flex items-center px-4 py-2 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest bg-orange-500 hover:bg-orange-700 active:bg-orange-900 focus:outline-none focus:border-orange-900 focus:ring focus:ring-orange-300 disabled:opacity-25 transition"
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(` Administrar `);
              } else {
                return [
                  createTextVNode(" Administrar ")
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
          _push2(`</div></div>`);
        }
        _push2(`<div class="text-dark-brand w-full flex flex-col items-between mt-10"${_scopeId}><h2 class="text-2xl text-center font-semibold text-dark-brand mb-2"${_scopeId}>Informaci\xF3n de la Cuenta</h2><span class="flex justify-between items-center"${_scopeId}><span class="text-md font-semibold text-dark-brand mr-2"${_scopeId}>Email Verified: </span>`);
        if (_ctx.client.email_verified_at !== null) {
          _push2(`<span${_scopeId}>`);
          _push2(ssrRenderComponent(_component_font_awesome_icon, {
            class: "text-green-400",
            icon: ["far", "check-circle"],
            size: "sm"
          }, null, _parent2, _scopeId));
          _push2(`</span>`);
        } else {
          _push2(`<span${_scopeId}>`);
          _push2(ssrRenderComponent(_component_font_awesome_icon, {
            class: "text-red-400",
            icon: ["far", "times-circle"],
            size: "sm"
          }, null, _parent2, _scopeId));
          _push2(`</span>`);
        }
        _push2(`</span><span class="flex justify-between items-center"${_scopeId}><span class="text-md font-semibold text-dark-brand mr-2"${_scopeId}>Verified: </span>`);
        if (_ctx.client.requirement_user !== null) {
          _push2(`<span${_scopeId}>`);
          if (_ctx.client.requirement_user.verified === 0) {
            _push2(`<span${_scopeId}>`);
            _push2(ssrRenderComponent(_component_font_awesome_icon, {
              icon: ["fas", "user-times"],
              size: "sm",
              class: "text-red-400"
            }, null, _parent2, _scopeId));
            _push2(`</span>`);
          } else if (_ctx.client.requirement_user.verified === 1) {
            _push2(`<span${_scopeId}>`);
            _push2(ssrRenderComponent(_component_font_awesome_icon, {
              icon: ["fas", "user-clock"],
              size: "sm",
              class: "text-orange-400"
            }, null, _parent2, _scopeId));
            _push2(`</span>`);
          } else {
            _push2(`<span${_scopeId}>`);
            _push2(ssrRenderComponent(_component_font_awesome_icon, {
              icon: ["fas", "user-check"],
              size: "sm",
              class: "text-green-400"
            }, null, _parent2, _scopeId));
            _push2(`</span>`);
          }
          _push2(`</span>`);
        } else {
          _push2(`<span${_scopeId}> Sin Informaci\xF3n </span>`);
        }
        _push2(`</span><span class="flex justify-between items-center"${_scopeId}><span class="text-md font-semibold text-dark-brand mr-2"${_scopeId}>Form Cliente: </span>`);
        if (_ctx.client.form_knowledge_client !== null) {
          _push2(`<span${_scopeId}>`);
          if (_ctx.client.requirement_user.formKnowledge > 0) {
            _push2(`<span${_scopeId}>`);
            _push2(ssrRenderComponent(_component_font_awesome_icon, {
              class: "text-green-400",
              icon: ["far", "check-circle"],
              size: "sm"
            }, null, _parent2, _scopeId));
            _push2(`</span>`);
          } else {
            _push2(`<span${_scopeId}>`);
            _push2(ssrRenderComponent(_component_font_awesome_icon, {
              class: "text-red-400",
              icon: ["far", "times-circle"],
              size: "sm"
            }, null, _parent2, _scopeId));
            _push2(`</span>`);
          }
          _push2(`</span>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`</span><span class="flex justify-between items-center"${_scopeId}><span class="text-md font-semibold text-dark-brand mr-2"${_scopeId}>Form Fondos: </span>`);
        if (_ctx.client.form_fund !== null) {
          _push2(`<span${_scopeId}>`);
          if (_ctx.client.requirement_user.formFunds > 0) {
            _push2(`<span${_scopeId}>`);
            _push2(ssrRenderComponent(_component_font_awesome_icon, {
              class: "text-green-400",
              icon: ["far", "check-circle"],
              size: "sm"
            }, null, _parent2, _scopeId));
            _push2(`</span>`);
          } else {
            _push2(`<span${_scopeId}>`);
            _push2(ssrRenderComponent(_component_font_awesome_icon, {
              class: "text-red-400",
              icon: ["far", "times-circle"],
              size: "sm"
            }, null, _parent2, _scopeId));
            _push2(`</span>`);
          }
          _push2(`</span>`);
        } else {
          _push2(`<span${_scopeId}>`);
          _push2(ssrRenderComponent(_component_font_awesome_icon, {
            class: "text-red-400",
            icon: ["far", "times-circle"],
            size: "sm"
          }, null, _parent2, _scopeId));
          _push2(`</span>`);
        }
        _push2(`</span><span class="flex justify-between items-center"${_scopeId}><span class="text-md font-semibold text-dark-brand mr-2"${_scopeId}>Roles: </span><span class="text-sm text-gray-600"${_scopeId}><!--[-->`);
        ssrRenderList(_ctx.client.roles, (rol) => {
          _push2(`<span${_scopeId}>${ssrInterpolate(" " + rol.name)}</span>`);
        });
        _push2(`<!--]--></span></span></div></div><div class="col-span-12"${_scopeId}><h2 class="text-2xl text-center font-semibold text-dark-brand mb-2"${_scopeId}>Transacciones Recientes</h2><table class="w-full divide-y divide-gray-200"${_scopeId}><thead class=""${_scopeId}><tr${_scopeId}><th scope="col" class="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"${_scopeId}> Tipo </th><th scope="col" class="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"${_scopeId}> Company </th><th scope="col" class="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"${_scopeId}> Cuenta </th><th scope="col" class="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"${_scopeId}> Monto USD </th><th scope="col" class="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"${_scopeId}> Estado </th><th scope="col" class="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"${_scopeId}> Acciones </th></tr></thead>`);
        if (_ctx.transactions[0]) {
          _push2(`<tbody class="bg-white divide-y divide-gray-200"${_scopeId}><!--[-->`);
          ssrRenderList(_ctx.transactions, (transaction) => {
            _push2(`<tr${_scopeId}><td class="${ssrRenderClass([{ "text-blue-brand-gradient2": transaction.type === 1, "text-red-400": transaction.type === 0, "text-green-400": transaction.type === 2, "text-purple-400": transaction.type === 3 }, "px-4 py-4 text-center whitespace-nowrap text-sm"])}"${_scopeId}>${ssrInterpolate(_ctx.transactionType(transaction))}</td>`);
            if (transaction.type < 2) {
              _push2(`<td class="${ssrRenderClass([{ "text-green-500": transaction.transactionable.broker_id === 1, "text-blue-800": transaction.transactionable.broker_id === 2 }, "px-4 py-4 text-center whitespace-nowrap text-sm text-gray-500 font-semibold"])}"${_scopeId}>${ssrInterpolate(transaction.transactionable.broker_id === 1 ? "FBS" : "Pepperstone")}</td>`);
            } else {
              _push2(`<!---->`);
            }
            if (transaction.type > 1) {
              _push2(`<td class="${ssrRenderClass([{ "text-rose-800": transaction.transactionable.wallet_id === 1, "text-green-500": transaction.transactionable.wallet_id === 2 }, "px-4 py-4 text-center whitespace-nowrap text-sm text-gray-500 font-semibold"])}"${_scopeId}>${ssrInterpolate(transaction.transactionable.wallet_id === 1 ? "Skrill" : "Neteller")}</td>`);
            } else {
              _push2(`<!---->`);
            }
            if (transaction.type < 2) {
              _push2(`<td class="px-4 py-4 text-center whitespace-nowrap text-sm text-gray-500"${_scopeId}>${ssrInterpolate(transaction.transactionable.id === 1 ? "No disponible" : transaction.transactionable.number)}</td>`);
            } else {
              _push2(`<!---->`);
            }
            if (transaction.type > 1) {
              _push2(`<td class="px-4 py-4 text-center whitespace-nowrap text-sm text-gray-500"${_scopeId}>${ssrInterpolate(transaction.transactionable.email)}</td>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<td class="px-4 py-4 text-center whitespace-nowrap text-sm text-gray-500"${_scopeId}>${ssrInterpolate(transaction.amount_usd)}</td><td class="${ssrRenderClass([{ "text-green-500": transaction.status === "Realizado", "text-red-500": transaction.status === "Cancelado", "text-orange-500": transaction.status === "Pendiente" }, "px-4 py-4 text-center whitespace-nowrap text-sm text-gray-500"])}"${_scopeId}>${ssrInterpolate(transaction.status)}</td>`);
            if (transaction.type === 0) {
              _push2(`<td class="text-center px-6 py-4 whitespace-nowrap text-sm font-medium"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Link, {
                href: _ctx.route("admin.withdrawalShow", transaction.id),
                class: "text-indigo-600 hover:text-indigo-900"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Ver detalles `);
                  } else {
                    return [
                      createTextVNode(" Ver detalles ")
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</td>`);
            } else if (transaction.type === 1) {
              _push2(`<td class="text-center px-6 py-4 whitespace-nowrap text-sm font-medium"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Link, {
                href: _ctx.route("admin.depositShow", transaction.id),
                class: "text-indigo-600 hover:text-indigo-900"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Ver detalles `);
                  } else {
                    return [
                      createTextVNode(" Ver detalles ")
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</td>`);
            } else if (transaction.type > 1) {
              _push2(`<td class="text-center px-6 py-4 whitespace-nowrap text-sm font-medium"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Link, {
                href: _ctx.route("admin.showWalletExchange", transaction.id),
                class: "text-indigo-600 hover:text-indigo-900"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Ver detalles `);
                  } else {
                    return [
                      createTextVNode(" Ver detalles ")
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</td>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</tr>`);
          });
          _push2(`<!--]--></tbody>`);
        } else {
          _push2(`<tbody class="bg-white divide-y divide-gray-200"${_scopeId}><tr${_scopeId}><td class="px-6 py-4 w-full text-base text-gray-500 text-center" colspan="6"${_scopeId}>Sin transacciones</td></tr></tbody>`);
        }
        _push2(`</table></div></div></div></div></div>`);
      } else {
        return [
          createVNode("div", { class: "py-6 w-full" }, [
            createVNode("div", { class: "flex mx-auto lg:mr-4" }, [
              createVNode("div", { class: "container mx-auto sm:px-6 lg:px-8" }, [
                createVNode("div", { class: "bg-white overflow-hidden shadow-xl sm:rounded-lg grid grid-cols-12 gap-x-2 gap-y-10 p-5" }, [
                  createVNode("div", { class: "col-span-12" }, [
                    createVNode("div", { class: "flex flex-col md:flex-row items-center justify-center md:justify-around" }, [
                      createVNode("div", { class: "flex items-center justify-start" }, [
                        _ctx.client.picture ? (openBlock(), createBlock("div", { key: 0 }, [
                          createVNode("div", null, [
                            createVNode("img", {
                              src: _ctx.$page.props.ziggy.url + "/storage/" + _ctx.client.picture,
                              class: "rounded-full h-28 w-28 object-cover"
                            }, null, 8, ["src"])
                          ])
                        ])) : (openBlock(), createBlock("div", { key: 1 }, [
                          createVNode("div", null, [
                            createVNode("img", {
                              src: _ctx.client.profile_photo_url,
                              alt: _ctx.client.name,
                              class: "rounded-full h-28 w-28 object-cover"
                            }, null, 8, ["src", "alt"])
                          ])
                        ])),
                        _ctx.client.data_user === null ? (openBlock(), createBlock("div", {
                          key: 2,
                          class: "flex flex-col ml-5"
                        }, [
                          createVNode("span", { class: "text-xl md:text-2xl text-black/75 font-semibold" }, toDisplayString(_ctx.client.name + " " + _ctx.client.lastname), 1)
                        ])) : (openBlock(), createBlock("div", {
                          key: 3,
                          class: "flex flex-col ml-5"
                        }, [
                          createVNode("span", { class: "text-xl md:text-2xl text-black/75 font-semibold" }, toDisplayString(_ctx.client.name + " " + _ctx.client.lastname), 1),
                          _ctx.client.data_user.vip === "no" ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: "text-black/50 font-medium"
                          }, "Cuenta Est\xE1ndar")) : (openBlock(), createBlock("span", {
                            key: 1,
                            class: "text-amber-500 font-medium"
                          }, "Cuenta VIP"))
                        ]))
                      ]),
                      createVNode("div", { class: "flex md:flex-col gap-4 mt-6 md:mt-0" }, [
                        createVNode(_component_Link, {
                          href: _ctx.route("users.createWalletExchangeDeposit"),
                          class: "inline-flex justify-center items-center px-4 py-2 bg-dark-brand border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Transacciones ")
                          ]),
                          _: 1
                        }, 8, ["href"]),
                        createVNode(_component_Link, {
                          href: _ctx.route("admin.usersVerification", _ctx.client.id),
                          class: "inline-flex justify-center items-center px-4 py-2 bg-dark-brand border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Verificaci\xF3n ")
                          ]),
                          _: 1
                        }, 8, ["href"])
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "col-span-12 md:col-span-4 md:col-start-2 px-10 md:px-0 xl:px-5" }, [
                    createVNode("div", { class: "text-dark-brand w-full flex flex-col items-between" }, [
                      createVNode("h2", { class: "text-2xl text-center font-semibold text-dark-brand mb-2" }, "Datos Personales"),
                      createVNode("span", { class: "flex justify-between items-center" }, [
                        createVNode("span", { class: "text-md font-semibold text-dark-brand mr-2" }, "Nombres: "),
                        createVNode("span", { class: "text-md text-gray-600" }, toDisplayString(_ctx.client.name), 1)
                      ]),
                      createVNode("span", { class: "flex justify-between items-center" }, [
                        createVNode("span", { class: "text-md font-semibold text-dark-brand mr-2" }, "Apellidos: "),
                        createVNode("span", { class: "text-md text-gray-600" }, toDisplayString(_ctx.client.lastname), 1)
                      ]),
                      createVNode("span", { class: "flex justify-between items-center" }, [
                        createVNode("span", { class: "text-md font-semibold text-dark-brand mr-2" }, "Documento: "),
                        _ctx.client.data_user === null ? (openBlock(), createBlock("span", { key: 0 }, " Sin Informaci\xF3n ")) : (openBlock(), createBlock("span", { key: 1 }, [
                          createVNode("span", null, [
                            _ctx.client.data_user.doc_type === 1 ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: "text-md text-gray-600"
                            }, "C\xE9dula")) : _ctx.client.data_user.doc_type === 2 ? (openBlock(), createBlock("span", {
                              key: 1,
                              class: "text-md text-gray-600"
                            }, "C\xE9dula de extranjer\xEDa")) : (openBlock(), createBlock("span", {
                              key: 2,
                              class: "text-md text-gray-600"
                            }, "Pasaporte"))
                          ])
                        ]))
                      ]),
                      createVNode("span", { class: "flex justify-between items-center" }, [
                        createVNode("span", { class: "text-md font-semibold text-dark-brand mr-2" }, "N\xFAmero: "),
                        _ctx.client.data_user === null ? (openBlock(), createBlock("span", { key: 0 }, " Sin Informaci\xF3n ")) : (openBlock(), createBlock("span", { key: 1 }, [
                          createVNode("span", { class: "text-md text-gray-600" }, toDisplayString(_ctx.client.data_user.doc_num), 1)
                        ]))
                      ]),
                      createVNode("span", { class: "flex justify-between items-center" }, [
                        createVNode("span", { class: "text-md font-semibold text-dark-brand mr-2" }, "Email: "),
                        createVNode("span", { class: "text-md text-gray-600" }, toDisplayString(_ctx.client.email), 1)
                      ]),
                      createVNode("span", { class: "flex justify-between items-center" }, [
                        createVNode("span", { class: "text-md font-semibold text-dark-brand mr-2" }, "Celular: "),
                        createVNode("span", { class: "text-md text-gray-600" }, toDisplayString(_ctx.client.mobil), 1)
                      ]),
                      createVNode("span", { class: "flex justify-between items-center" }, [
                        createVNode("span", { class: "text-md font-semibold text-dark-brand mr-2" }, "Departamento: "),
                        _ctx.client.data_user === null ? (openBlock(), createBlock("span", { key: 0 }, " Sin Informaci\xF3n ")) : (openBlock(), createBlock("span", { key: 1 }, [
                          createVNode("span", { class: "text-md text-gray-600" }, toDisplayString(_ctx.client.data_user.departament), 1)
                        ]))
                      ]),
                      createVNode("span", { class: "flex justify-between items-center" }, [
                        createVNode("span", { class: "text-md font-semibold text-dark-brand mr-2" }, "Ciudad: "),
                        _ctx.client.data_user === null ? (openBlock(), createBlock("span", { key: 0 }, " Sin Informaci\xF3n ")) : (openBlock(), createBlock("span", { key: 1 }, [
                          createVNode("span", { class: "text-md text-gray-600" }, toDisplayString(_ctx.client.data_user.city), 1)
                        ]))
                      ]),
                      createVNode("span", { class: "flex justify-between items-center" }, [
                        createVNode("span", { class: "text-md font-semibold text-dark-brand mr-2" }, "Direcci\xF3n: "),
                        _ctx.client.data_user === null ? (openBlock(), createBlock("span", { key: 0 }, " Sin Informaci\xF3n ")) : (openBlock(), createBlock("span", { key: 1 }, [
                          createVNode("span", { class: "text-md text-gray-600" }, toDisplayString(_ctx.client.data_user.address), 1)
                        ]))
                      ]),
                      createVNode("div", { class: "flex justify-center items-center mt-5" }, [
                        createVNode(_component_Link, {
                          href: _ctx.route("admin.userEdit", _ctx.client.id),
                          class: "inline-flex items-center px-4 py-2 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest bg-orange-500 hover:bg-orange-700 active:bg-orange-900 focus:outline-none focus:border-orange-900 focus:ring focus:ring-orange-300 disabled:opacity-25 transition"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Editar ")
                          ]),
                          _: 1
                        }, 8, ["href"])
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "col-span-12 md:col-span-4 md:col-start-8 px-10 md:px-0 xl:px-5" }, [
                    _ctx.account !== null ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "text-dark-brand w-full flex flex-col items-between"
                    }, [
                      createVNode("h2", { class: "text-2xl text-center font-semibold text-dark-brand mb-2" }, "Datos Bancarios"),
                      createVNode("span", { class: "flex justify-between items-center" }, [
                        createVNode("span", { class: "text-md font-semibold text-dark-brand mr-2 w-16" }, "Banco: "),
                        createVNode("span", { class: "text-md text-gray-600" }, toDisplayString(_ctx.account.bank.name), 1)
                      ]),
                      createVNode("span", { class: "flex justify-between items-center" }, [
                        createVNode("span", { class: "text-md font-semibold text-dark-brand mr-2 w-16" }, "Numero: "),
                        createVNode("span", { class: "text-md text-gray-600" }, toDisplayString(_ctx.account.number), 1)
                      ]),
                      createVNode("span", { class: "flex justify-between items-center" }, [
                        createVNode("span", { class: "text-md font-semibold text-dark-brand mr-2 w-16" }, "Tipo: "),
                        createVNode("span", { class: "text-md text-gray-600" }, toDisplayString(_ctx.account.type), 1)
                      ]),
                      createVNode("span", { class: "flex justify-between items-center" }, [
                        createVNode("span", { class: "text-md font-semibold text-dark-brand mr-2 w-16" }, "Inscrita: "),
                        createVNode("span", { class: "text-md text-gray-600" }, toDisplayString(_ctx.account.enrolled === 1 ? "Inscrita" : "No Inscrita"), 1)
                      ]),
                      createVNode("div", { class: "flex justify-center items-center mt-5" }, [
                        createVNode(_component_Link, {
                          href: _ctx.route("users.createWalletExchangeDeposit"),
                          class: "inline-flex items-center px-4 py-2 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest bg-orange-500 hover:bg-orange-700 active:bg-orange-900 focus:outline-none focus:border-orange-900 focus:ring focus:ring-orange-300 disabled:opacity-25 transition"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Administrar ")
                          ]),
                          _: 1
                        }, 8, ["href"])
                      ])
                    ])) : (openBlock(), createBlock("div", {
                      key: 1,
                      class: "text-dark-brand w-full flex flex-col items-between"
                    }, [
                      createVNode("h2", { class: "text-2xl text-center font-semibold text-dark-brand mb-2" }, "Datos Bancarios"),
                      createVNode("span", { class: "flex justify-center items-center w-full" }, [
                        createVNode("span", { class: "text-lg text-gray-600 my-10 w-full text-center" }, "Sin datos bancarios registrados")
                      ]),
                      createVNode("div", { class: "flex justify-center items-center mt-5" }, [
                        createVNode(_component_Link, {
                          href: _ctx.route("users.createWalletExchangeDeposit"),
                          class: "inline-flex items-center px-4 py-2 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest bg-orange-500 hover:bg-orange-700 active:bg-orange-900 focus:outline-none focus:border-orange-900 focus:ring focus:ring-orange-300 disabled:opacity-25 transition"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Administrar ")
                          ]),
                          _: 1
                        }, 8, ["href"])
                      ])
                    ])),
                    createVNode("div", { class: "text-dark-brand w-full flex flex-col items-between mt-10" }, [
                      createVNode("h2", { class: "text-2xl text-center font-semibold text-dark-brand mb-2" }, "Informaci\xF3n de la Cuenta"),
                      createVNode("span", { class: "flex justify-between items-center" }, [
                        createVNode("span", { class: "text-md font-semibold text-dark-brand mr-2" }, "Email Verified: "),
                        _ctx.client.email_verified_at !== null ? (openBlock(), createBlock("span", { key: 0 }, [
                          createVNode(_component_font_awesome_icon, {
                            class: "text-green-400",
                            icon: ["far", "check-circle"],
                            size: "sm"
                          })
                        ])) : (openBlock(), createBlock("span", { key: 1 }, [
                          createVNode(_component_font_awesome_icon, {
                            class: "text-red-400",
                            icon: ["far", "times-circle"],
                            size: "sm"
                          })
                        ]))
                      ]),
                      createVNode("span", { class: "flex justify-between items-center" }, [
                        createVNode("span", { class: "text-md font-semibold text-dark-brand mr-2" }, "Verified: "),
                        _ctx.client.requirement_user !== null ? (openBlock(), createBlock("span", { key: 0 }, [
                          _ctx.client.requirement_user.verified === 0 ? (openBlock(), createBlock("span", { key: 0 }, [
                            createVNode(_component_font_awesome_icon, {
                              icon: ["fas", "user-times"],
                              size: "sm",
                              class: "text-red-400"
                            })
                          ])) : _ctx.client.requirement_user.verified === 1 ? (openBlock(), createBlock("span", { key: 1 }, [
                            createVNode(_component_font_awesome_icon, {
                              icon: ["fas", "user-clock"],
                              size: "sm",
                              class: "text-orange-400"
                            })
                          ])) : (openBlock(), createBlock("span", { key: 2 }, [
                            createVNode(_component_font_awesome_icon, {
                              icon: ["fas", "user-check"],
                              size: "sm",
                              class: "text-green-400"
                            })
                          ]))
                        ])) : (openBlock(), createBlock("span", { key: 1 }, " Sin Informaci\xF3n "))
                      ]),
                      createVNode("span", { class: "flex justify-between items-center" }, [
                        createVNode("span", { class: "text-md font-semibold text-dark-brand mr-2" }, "Form Cliente: "),
                        _ctx.client.form_knowledge_client !== null ? (openBlock(), createBlock("span", { key: 0 }, [
                          _ctx.client.requirement_user.formKnowledge > 0 ? (openBlock(), createBlock("span", { key: 0 }, [
                            createVNode(_component_font_awesome_icon, {
                              class: "text-green-400",
                              icon: ["far", "check-circle"],
                              size: "sm"
                            })
                          ])) : (openBlock(), createBlock("span", { key: 1 }, [
                            createVNode(_component_font_awesome_icon, {
                              class: "text-red-400",
                              icon: ["far", "times-circle"],
                              size: "sm"
                            })
                          ]))
                        ])) : createCommentVNode("", true)
                      ]),
                      createVNode("span", { class: "flex justify-between items-center" }, [
                        createVNode("span", { class: "text-md font-semibold text-dark-brand mr-2" }, "Form Fondos: "),
                        _ctx.client.form_fund !== null ? (openBlock(), createBlock("span", { key: 0 }, [
                          _ctx.client.requirement_user.formFunds > 0 ? (openBlock(), createBlock("span", { key: 0 }, [
                            createVNode(_component_font_awesome_icon, {
                              class: "text-green-400",
                              icon: ["far", "check-circle"],
                              size: "sm"
                            })
                          ])) : (openBlock(), createBlock("span", { key: 1 }, [
                            createVNode(_component_font_awesome_icon, {
                              class: "text-red-400",
                              icon: ["far", "times-circle"],
                              size: "sm"
                            })
                          ]))
                        ])) : (openBlock(), createBlock("span", { key: 1 }, [
                          createVNode(_component_font_awesome_icon, {
                            class: "text-red-400",
                            icon: ["far", "times-circle"],
                            size: "sm"
                          })
                        ]))
                      ]),
                      createVNode("span", { class: "flex justify-between items-center" }, [
                        createVNode("span", { class: "text-md font-semibold text-dark-brand mr-2" }, "Roles: "),
                        createVNode("span", { class: "text-sm text-gray-600" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(_ctx.client.roles, (rol) => {
                            return openBlock(), createBlock("span", null, toDisplayString(" " + rol.name), 1);
                          }), 256))
                        ])
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "col-span-12" }, [
                    createVNode("h2", { class: "text-2xl text-center font-semibold text-dark-brand mb-2" }, "Transacciones Recientes"),
                    createVNode("table", { class: "w-full divide-y divide-gray-200" }, [
                      createVNode("thead", { class: "" }, [
                        createVNode("tr", null, [
                          createVNode("th", {
                            scope: "col",
                            class: "px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                          }, " Tipo "),
                          createVNode("th", {
                            scope: "col",
                            class: "px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                          }, " Company "),
                          createVNode("th", {
                            scope: "col",
                            class: "px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                          }, " Cuenta "),
                          createVNode("th", {
                            scope: "col",
                            class: "px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                          }, " Monto USD "),
                          createVNode("th", {
                            scope: "col",
                            class: "px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                          }, " Estado "),
                          createVNode("th", {
                            scope: "col",
                            class: "px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                          }, " Acciones ")
                        ])
                      ]),
                      _ctx.transactions[0] ? (openBlock(), createBlock("tbody", {
                        key: 0,
                        class: "bg-white divide-y divide-gray-200"
                      }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(_ctx.transactions, (transaction) => {
                          return openBlock(), createBlock("tr", {
                            key: transaction.id
                          }, [
                            createVNode("td", {
                              class: [{ "text-blue-brand-gradient2": transaction.type === 1, "text-red-400": transaction.type === 0, "text-green-400": transaction.type === 2, "text-purple-400": transaction.type === 3 }, "px-4 py-4 text-center whitespace-nowrap text-sm"]
                            }, toDisplayString(_ctx.transactionType(transaction)), 3),
                            transaction.type < 2 ? (openBlock(), createBlock("td", {
                              key: 0,
                              class: [{ "text-green-500": transaction.transactionable.broker_id === 1, "text-blue-800": transaction.transactionable.broker_id === 2 }, "px-4 py-4 text-center whitespace-nowrap text-sm text-gray-500 font-semibold"]
                            }, toDisplayString(transaction.transactionable.broker_id === 1 ? "FBS" : "Pepperstone"), 3)) : createCommentVNode("", true),
                            transaction.type > 1 ? (openBlock(), createBlock("td", {
                              key: 1,
                              class: [{ "text-rose-800": transaction.transactionable.wallet_id === 1, "text-green-500": transaction.transactionable.wallet_id === 2 }, "px-4 py-4 text-center whitespace-nowrap text-sm text-gray-500 font-semibold"]
                            }, toDisplayString(transaction.transactionable.wallet_id === 1 ? "Skrill" : "Neteller"), 3)) : createCommentVNode("", true),
                            transaction.type < 2 ? (openBlock(), createBlock("td", {
                              key: 2,
                              class: "px-4 py-4 text-center whitespace-nowrap text-sm text-gray-500"
                            }, toDisplayString(transaction.transactionable.id === 1 ? "No disponible" : transaction.transactionable.number), 1)) : createCommentVNode("", true),
                            transaction.type > 1 ? (openBlock(), createBlock("td", {
                              key: 3,
                              class: "px-4 py-4 text-center whitespace-nowrap text-sm text-gray-500"
                            }, toDisplayString(transaction.transactionable.email), 1)) : createCommentVNode("", true),
                            createVNode("td", { class: "px-4 py-4 text-center whitespace-nowrap text-sm text-gray-500" }, toDisplayString(transaction.amount_usd), 1),
                            createVNode("td", {
                              class: [{ "text-green-500": transaction.status === "Realizado", "text-red-500": transaction.status === "Cancelado", "text-orange-500": transaction.status === "Pendiente" }, "px-4 py-4 text-center whitespace-nowrap text-sm text-gray-500"]
                            }, toDisplayString(transaction.status), 3),
                            transaction.type === 0 ? (openBlock(), createBlock("td", {
                              key: 4,
                              class: "text-center px-6 py-4 whitespace-nowrap text-sm font-medium"
                            }, [
                              createVNode(_component_Link, {
                                href: _ctx.route("admin.withdrawalShow", transaction.id),
                                class: "text-indigo-600 hover:text-indigo-900"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Ver detalles ")
                                ]),
                                _: 2
                              }, 1032, ["href"])
                            ])) : transaction.type === 1 ? (openBlock(), createBlock("td", {
                              key: 5,
                              class: "text-center px-6 py-4 whitespace-nowrap text-sm font-medium"
                            }, [
                              createVNode(_component_Link, {
                                href: _ctx.route("admin.depositShow", transaction.id),
                                class: "text-indigo-600 hover:text-indigo-900"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Ver detalles ")
                                ]),
                                _: 2
                              }, 1032, ["href"])
                            ])) : transaction.type > 1 ? (openBlock(), createBlock("td", {
                              key: 6,
                              class: "text-center px-6 py-4 whitespace-nowrap text-sm font-medium"
                            }, [
                              createVNode(_component_Link, {
                                href: _ctx.route("admin.showWalletExchange", transaction.id),
                                class: "text-indigo-600 hover:text-indigo-900"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Ver detalles ")
                                ]),
                                _: 2
                              }, 1032, ["href"])
                            ])) : createCommentVNode("", true)
                          ]);
                        }), 128))
                      ])) : (openBlock(), createBlock("tbody", {
                        key: 1,
                        class: "bg-white divide-y divide-gray-200"
                      }, [
                        createVNode("tr", null, [
                          createVNode("td", {
                            class: "px-6 py-4 w-full text-base text-gray-500 text-center",
                            colspan: "6"
                          }, "Sin transacciones")
                        ])
                      ]))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Users/Show.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Show = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Show as default
};
