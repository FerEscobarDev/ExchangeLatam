import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.43be4956.mjs";
const _sfc_main = {
  props: ["amountUsd", "dollarPrice", "amountCop", "walletVip", "user"],
  methods: {
    usdFormat(amountUsd) {
      if (amountUsd === "") {
        amountUsd = 0;
      }
      return parseFloat(amountUsd).toFixed(2);
    },
    copAmount(amountCop, dollarPrice, amountUsd) {
      if (amountCop > 0) {
        return amountCop.toFixed(2);
      } else {
        return (parseFloat(amountUsd) * parseInt(dollarPrice)).toFixed(2);
      }
    },
    vipRebate(amountUsd, vip) {
      let rebateVip = 0;
      if (vip > 0) {
        if (amountUsd >= 500) {
          rebateVip = 10;
        } else {
          rebateVip = 0;
        }
      } else {
        rebateVip = 0;
      }
      let rebate = amountUsd * rebateVip;
      return parseFloat(rebate).toFixed(2);
    },
    total(amountCop, dollarPrice, amountUsd, vip) {
      let total;
      if (amountCop > 0) {
        amountCop = 0;
      } else {
        amountCop = parseFloat(amountUsd) * parseInt(dollarPrice);
      }
      total = Number(amountCop) + Number(this.vipRebate(amountUsd, vip));
      return total.toFixed(2);
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col justify-between items-center mt-5 w-full" }, _attrs))}><div class="rounded-lg text-dark-brand w-80 flex flex-col items-center"><span class="flex justify-between items-center w-full mt-2"><span class="text-sm text-gray-600 mr-1">Monto USD: </span><span class="font-semibold text-dark-brand">$ ${ssrInterpolate($options.usdFormat($props.amountUsd))}</span></span><span class="flex justify-between items-center w-full"><span class="text-sm text-gray-600 mr-1">Tasa de cambio: </span><span class="font-semibold text-dark-brand">$ ${ssrInterpolate($props.dollarPrice)}</span></span><span class="flex justify-between items-center w-full"><span class="text-sm text-gray-600 mr-1">Monto COP: </span><span class="font-semibold text-dark-brand">$ ${ssrInterpolate($options.copAmount($props.amountCop, $props.dollarPrice, $options.usdFormat($props.amountUsd)))}</span></span><span class="flex justify-between items-center w-full"><span class="text-sm text-gray-600 mr-1">Adicional por VIP: </span><span class="font-semibold text-dark-brand">$ ${ssrInterpolate($options.vipRebate($props.amountUsd, $props.walletVip))}</span></span><span class="flex justify-between items-center w-full"><span class="text-sm text-gray-600 mr-1">Total a pagar COP: </span><span class="font-semibold text-dark-brand">$ ${ssrInterpolate($options.total($props.amountCop, $props.dollarPrice, $options.usdFormat($props.amountUsd), $props.walletVip))}</span></span><h2 class="text-lg text-dark-brand font-semibold mt-2">Recibes: $${ssrInterpolate($options.total($props.amountCop, $props.dollarPrice, $options.usdFormat($props.amountUsd), $props.walletVip))} COP</h2></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/WalletExchange/Partials/CalculateSellBalance.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CalculateSellBalance = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  CalculateSellBalance as default
};
