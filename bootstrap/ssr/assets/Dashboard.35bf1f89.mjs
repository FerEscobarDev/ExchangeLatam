import { mergeProps, useSSRContext, defineComponent, resolveComponent, withCtx, createTextVNode, createVNode, openBlock, createBlock, Fragment, renderList } from "vue";
import { A as AppLayoutAdmin } from "./AppLayoutAdmin.f439c04f.mjs";
import { Link } from "@inertiajs/inertia-vue3";
import { CheckIcon } from "@heroicons/vue/solid";
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { _ as _sfc_main$3 } from "./Input.c38a320e.mjs";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.43be4956.mjs";
import "./ResponsiveNavLink.105dcaab.mjs";
import "./logoweb.e431fb6b.mjs";
import "./NavLink.67838388.mjs";
import "@fortawesome/vue-fontawesome";
import "@fortawesome/fontawesome-svg-core";
import "@fortawesome/free-solid-svg-icons";
import "@fortawesome/free-brands-svg-icons";
const _sfc_main$2 = {
  __name: "ButtonPrimary",
  __ssrInlineRender: true,
  props: {
    type: {
      type: String,
      default: "submit"
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        type: __props.type,
        class: "inline-flex items-center bg-blue-brand-gradient1 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition"
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</button>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ButtonPrimary.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = defineComponent({
  components: {
    Link,
    ButtonPrimary: _sfc_main$2,
    Input: _sfc_main$3
  },
  props: {
    notification: Object,
    url: String
  },
  data() {
    return {
      form: this.$inertia.form({
        idnotification: this.notification.id
      })
    };
  },
  methods: {
    submit() {
      this.form.post(route("admin.notificationRead"));
    }
  }
});
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Link = resolveComponent("Link");
  const _component_Input = resolveComponent("Input");
  const _component_ButtonPrimary = resolveComponent("ButtonPrimary");
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="flex flex-wrap justify-center md:justify-start bg-white overflow-hidden shadow-xl sm:rounded-lg p-5 my-5"><div>${_ctx.notification.data.mensaje}</div><span> - </span>`);
  _push(ssrRenderComponent(_component_Link, {
    class: "text-blue-brand underline",
    href: _ctx.url + "/admin/dashboard/user/" + _ctx.notification.data.link
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Ir al perfil `);
      } else {
        return [
          createTextVNode(" Ir al perfil ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<span> - </span><form>`);
  _push(ssrRenderComponent(_component_Input, {
    type: "hidden",
    name: "idnotification",
    "v-model": _ctx.form.idnotification
  }, null, _parent));
  _push(ssrRenderComponent(_component_ButtonPrimary, {
    class: ["p-1", { "opacity-25": _ctx.form.processing }],
    disabled: _ctx.form.processing
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Realizado`);
      } else {
        return [
          createTextVNode("Realizado")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</form></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Notification.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const NotificationCard = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = defineComponent({
  components: {
    AppLayoutAdmin,
    CheckIcon,
    NotificationCard,
    Link
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_app_layout_admin = resolveComponent("app-layout-admin");
  const _component_NotificationCard = resolveComponent("NotificationCard");
  _push(ssrRenderComponent(_component_app_layout_admin, mergeProps({ title: "Dashboard" }, _attrs), {
    header: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h2 class="font-semibold text-xl text-gray-700 leading-tight"${_scopeId}> Dashboard </h2>`);
      } else {
        return [
          createVNode("h2", { class: "font-semibold text-xl text-gray-700 leading-tight" }, " Dashboard ")
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="py-6 w-full"${_scopeId}><div class="flex mx-auto lg:mr-4"${_scopeId}>`);
        if (_ctx.$page.props.notifications.countNotifications > 0) {
          _push2(`<div class="container mx-auto sm:px-6 lg:px-8"${_scopeId}><!--[-->`);
          ssrRenderList(_ctx.$page.props.notifications.unreadNotifications, (notificationObj) => {
            _push2(ssrRenderComponent(_component_NotificationCard, {
              key: notificationObj.id,
              notification: notificationObj,
              url: _ctx.$page.props.ziggy.url
            }, null, _parent2, _scopeId));
          });
          _push2(`<!--]--></div>`);
        } else {
          _push2(`<div class="container mx-auto sm:px-6 lg:px-8"${_scopeId}><div class="flex flex-col items-center justify-center bg-white overflow-hidden shadow-xl sm:rounded-lg p-5 my-5"${_scopeId}><h5 class="text-2xl font-semibold text-blue-brand-gradient1"${_scopeId}>\xA1Felicitaciones!</h5><h6 class="text-lg text-black/40 font-medium"${_scopeId}>Excelente trabajo, no tienes tareas pendientes.</h6></div></div>`);
        }
        _push2(`</div></div>`);
      } else {
        return [
          createVNode("div", { class: "py-6 w-full" }, [
            createVNode("div", { class: "flex mx-auto lg:mr-4" }, [
              _ctx.$page.props.notifications.countNotifications > 0 ? (openBlock(), createBlock("div", {
                key: 0,
                class: "container mx-auto sm:px-6 lg:px-8"
              }, [
                (openBlock(true), createBlock(Fragment, null, renderList(_ctx.$page.props.notifications.unreadNotifications, (notificationObj) => {
                  return openBlock(), createBlock(_component_NotificationCard, {
                    key: notificationObj.id,
                    notification: notificationObj,
                    url: _ctx.$page.props.ziggy.url
                  }, null, 8, ["notification", "url"]);
                }), 128))
              ])) : (openBlock(), createBlock("div", {
                key: 1,
                class: "container mx-auto sm:px-6 lg:px-8"
              }, [
                createVNode("div", { class: "flex flex-col items-center justify-center bg-white overflow-hidden shadow-xl sm:rounded-lg p-5 my-5" }, [
                  createVNode("h5", { class: "text-2xl font-semibold text-blue-brand-gradient1" }, "\xA1Felicitaciones!"),
                  createVNode("h6", { class: "text-lg text-black/40 font-medium" }, "Excelente trabajo, no tienes tareas pendientes.")
                ])
              ]))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Dashboard/Dashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Dashboard = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Dashboard as default
};
