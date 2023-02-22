import { defineComponent, resolveComponent, withCtx, createVNode, createTextVNode, openBlock, createBlock, createCommentVNode, withModifiers, useSSRContext } from "vue";
import { J as JetAuthenticationCard } from "./AuthenticationCard.87df7a60.mjs";
import { _ as _sfc_main$1 } from "./AuthenticationCardLogo.6fd411c3.mjs";
import { _ as _sfc_main$2 } from "./Button.feee2cab.mjs";
import { Head, Link } from "@inertiajs/inertia-vue3";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.43be4956.mjs";
import "./logoweb.e431fb6b.mjs";
const _sfc_main = defineComponent({
  components: {
    Head,
    JetAuthenticationCard,
    JetAuthenticationCardLogo: _sfc_main$1,
    JetButton: _sfc_main$2,
    Link
  },
  props: {
    status: String
  },
  data() {
    return {
      form: this.$inertia.form()
    };
  },
  methods: {
    submit() {
      this.form.post(this.route("verification.send"));
    }
  },
  computed: {
    verificationLinkSent() {
      return this.status === "verification-link-sent";
    }
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_jet_authentication_card = resolveComponent("jet-authentication-card");
  const _component_jet_authentication_card_logo = resolveComponent("jet-authentication-card-logo");
  const _component_jet_button = resolveComponent("jet-button");
  const _component_Link = resolveComponent("Link");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Head, { title: "Email Verification" }, null, _parent));
  _push(ssrRenderComponent(_component_jet_authentication_card, null, {
    logo: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_jet_authentication_card_logo, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_jet_authentication_card_logo)
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="mb-4 text-sm text-gray-600"${_scopeId}> Gracias por registrarte! Antes de comenzar, \xBFpodr\xEDas verificar tu direcci\xF3n de correo electr\xF3nico haciendo clic en el enlace que te acabamos de enviar? Si no recibiste el correo electr\xF3nico, con gusto te enviaremos otro. </div>`);
        if (_ctx.verificationLinkSent) {
          _push2(`<div class="mb-4 font-medium text-sm text-green-600"${_scopeId}> Se ha enviado un nuevo enlace de verificaci\xF3n a la direcci\xF3n de correo electr\xF3nico que proporcionaste durante el registro. </div>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`<form${_scopeId}><div class="mt-4 flex items-center justify-between"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_jet_button, {
          class: { "opacity-25": _ctx.form.processing },
          disabled: _ctx.form.processing
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Reenviar correo de verificaci\xF3n `);
            } else {
              return [
                createTextVNode(" Reenviar correo de verificaci\xF3n ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_Link, {
          href: _ctx.route("logout"),
          method: "post",
          as: "button",
          class: "underline text-sm text-gray-600 hover:text-gray-900"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Cerrar Sesi\xF3n`);
            } else {
              return [
                createTextVNode("Cerrar Sesi\xF3n")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div></form>`);
      } else {
        return [
          createVNode("div", { class: "mb-4 text-sm text-gray-600" }, " Gracias por registrarte! Antes de comenzar, \xBFpodr\xEDas verificar tu direcci\xF3n de correo electr\xF3nico haciendo clic en el enlace que te acabamos de enviar? Si no recibiste el correo electr\xF3nico, con gusto te enviaremos otro. "),
          _ctx.verificationLinkSent ? (openBlock(), createBlock("div", {
            key: 0,
            class: "mb-4 font-medium text-sm text-green-600"
          }, " Se ha enviado un nuevo enlace de verificaci\xF3n a la direcci\xF3n de correo electr\xF3nico que proporcionaste durante el registro. ")) : createCommentVNode("", true),
          createVNode("form", {
            onSubmit: withModifiers(_ctx.submit, ["prevent"])
          }, [
            createVNode("div", { class: "mt-4 flex items-center justify-between" }, [
              createVNode(_component_jet_button, {
                class: { "opacity-25": _ctx.form.processing },
                disabled: _ctx.form.processing
              }, {
                default: withCtx(() => [
                  createTextVNode(" Reenviar correo de verificaci\xF3n ")
                ]),
                _: 1
              }, 8, ["class", "disabled"]),
              createVNode(_component_Link, {
                href: _ctx.route("logout"),
                method: "post",
                as: "button",
                class: "underline text-sm text-gray-600 hover:text-gray-900"
              }, {
                default: withCtx(() => [
                  createTextVNode("Cerrar Sesi\xF3n")
                ]),
                _: 1
              }, 8, ["href"])
            ])
          ], 40, ["onSubmit"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/VerifyEmail.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const VerifyEmail = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  VerifyEmail as default
};
