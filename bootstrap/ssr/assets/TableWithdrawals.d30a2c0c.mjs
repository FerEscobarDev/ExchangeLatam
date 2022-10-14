import { defineComponent, resolveComponent, mergeProps, withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { Link } from "@inertiajs/inertia-vue3";
import { P as Pagination } from "./Pagination.c197a55d.mjs";
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderComponent, ssrRenderClass } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.43be4956.mjs";
const _sfc_main = defineComponent({
  components: {
    Link,
    Pagination
  },
  props: {
    withdrawals: Object
  },
  methods: {
    dateFormat(date) {
      let dateNew = new Date(date);
      const months = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
      let formatted_date = dateNew.getDate() + "-" + months[dateNew.getMonth()] + "-" + dateNew.getFullYear();
      return formatted_date;
    }
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Link = resolveComponent("Link");
  const _component_pagination = resolveComponent("pagination");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col" }, _attrs))}><div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8"><div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"><div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"><table class="min-w-full divide-y divide-gray-200"><thead class="bg-gray-50"><tr><th scope="col" class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"> Id </th><th scope="col" class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"> Usuario </th><th scope="col" class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"> Broker </th><th scope="col" class="hidden md:table-cell px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"> Cuenta Trading </th><th scope="col" class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"> Monto USD </th><th scope="col" class="hidden md:table-cell px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"> Monto COP </th><th scope="col" class="hidden md:table-cell px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"> Total </th><th scope="col" class="hidden md:table-cell px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"> Fecha L\xEDmite </th><th scope="col" class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"> Estado </th><th scope="col" class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"> Acciones </th></tr></thead>`);
  if (_ctx.withdrawals.data[0]) {
    _push(`<tbody class="bg-white divide-y divide-gray-200"><!--[-->`);
    ssrRenderList(_ctx.withdrawals.data, (withdrawal) => {
      _push(`<tr class="odd:bg-white even:bg-gray-50"><td class="text-center font-semibold px-6 py-4 whitespace-nowrap text-sm">${ssrInterpolate(withdrawal.id)}</td><td class="text-center px-6 py-4 whitespace-nowrap text-sm font-medium">`);
      _push(ssrRenderComponent(_component_Link, {
        href: _ctx.route("admin.userShow", withdrawal.user_id),
        class: "text-indigo-600 hover:text-indigo-900"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(withdrawal.user.name)}`);
          } else {
            return [
              createTextVNode(toDisplayString(withdrawal.user.name), 1)
            ];
          }
        }),
        _: 2
      }, _parent));
      _push(`</td><td class="${ssrRenderClass([{ "text-green-500": withdrawal.transactionable.broker.id === 1, "text-blue-800": withdrawal.transactionable.broker.id === 2 }, "text-center font-semibold px-6 py-4 whitespace-nowrap text-sm"])}">${ssrInterpolate(withdrawal.transactionable.broker.name)}</td><td class="text-center hidden md:table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-500">${ssrInterpolate(withdrawal.transactionable.id === 1 ? "No disponible" : withdrawal.transactionable.number)}</td><td class="text-center px-6 py-4 whitespace-nowrap text-sm text-gray-500">${ssrInterpolate(withdrawal.amount_usd.toLocaleString())}</td><td class="text-center hidden md:table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-500">${ssrInterpolate(withdrawal.amount_cop.toLocaleString())}</td><td class="text-center hidden md:table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-500">${ssrInterpolate(withdrawal.total.toLocaleString())}</td><td class="text-center hidden md:table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-500">${ssrInterpolate(_ctx.dateFormat(withdrawal.expiration_date))}</td><td class="${ssrRenderClass([{ "text-green-500": withdrawal.status === "Realizado", "text-red-500": withdrawal.status === "Cancelado", "text-orange-500": withdrawal.status === "Pendiente" }, "text-center px-6 py-4 whitespace-nowrap text-sm text-gray-500"])}">${ssrInterpolate(withdrawal.status)}</td><td class="text-center px-6 py-4 whitespace-nowrap text-sm font-medium">`);
      _push(ssrRenderComponent(_component_Link, {
        href: _ctx.route("admin.withdrawalShow", withdrawal.id),
        class: "text-indigo-600 hover:text-indigo-900"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Ver detalles `);
          } else {
            return [
              createTextVNode(" Ver detalles ")
            ];
          }
        }),
        _: 2
      }, _parent));
      _push(`</td></tr>`);
    });
    _push(`<!--]--></tbody>`);
  } else {
    _push(`<tbody class="bg-white divide-y divide-gray-200"><tr><td class="px-6 py-4 w-full text-base text-gray-500 text-center" colspan="7">No tienes transacciones</td></tr></tbody>`);
  }
  _push(`</table>`);
  if (_ctx.withdrawals.data[0]) {
    _push(ssrRenderComponent(_component_pagination, { paginating: _ctx.withdrawals }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Withdrawals/Partials/TableWithdrawals.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TableWithdrawals = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  TableWithdrawals as default
};
