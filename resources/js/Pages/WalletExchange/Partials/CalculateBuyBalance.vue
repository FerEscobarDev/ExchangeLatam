<template>
    <div class="flex flex-col justify-between items-center mt-5 w-full">
        <div class="rounded-lg text-dark-brand w-80 flex flex-col items-center">
            <span class="flex justify-between items-center w-full mt-2">
                <span class="text-sm text-gray-600 mr-1">Monto USD: </span><span class="font-semibold text-dark-brand">$ {{usdFormat(amountUsd)}}</span>
            </span>
            <span class="flex justify-between items-center w-full">
                <span class="text-sm text-gray-600 mr-1">Tasa de cambio: </span><span class="font-semibold text-dark-brand">$ {{dollarPrice}}</span>
            </span>
            <span class="flex justify-between items-center w-full">
                <span class="text-sm text-gray-600 mr-1">Monto COP: </span><span class="font-semibold text-dark-brand">$ {{copAmount(amountCop, dollarPrice, usdFormat(amountUsd))}}</span>
            </span>                                   
            <!--                                                                         
            <span class="flex justify-between items-center w-full">
                <span class="text-sm text-gray-600 mr-1">Impuesto IVA: </span><span class="font-semibold text-dark-brand">$ {{valIva(comission(copAmount(amountCop, dollarPrice, usdFormat(amountUsd))))}}</span>
            </span> -->
            <span class="flex justify-between items-center w-full">
                <span class="text-sm text-gray-600 mr-1">Descuento VIP: </span><span class="font-semibold text-dark-brand">$ {{vipRebate(amountUsd, walletVip)}}</span>
            </span> 
            <span class="flex justify-between items-center w-full">
                <span class="text-sm text-gray-600 mr-1">Total a pagar COP: </span><span class="font-semibold text-dark-brand">$ {{total(amountCop, dollarPrice, usdFormat(amountUsd), walletVip)}}</span>
            </span>
            
        <h2 class="text-lg text-dark-brand font-semibold mt-2">Recibes en Skrill ${{usdFormat(amountUsd)}} USD</h2>
        </div>   
    </div>
</template>

<script>
    export default {
        props: ['amountUsd', 'dollarPrice', 'amountCop', 'walletVip', 'user'],

        methods: {

            usdFormat(amountUsd){
                if(amountUsd === ''){
                    amountUsd = 0.00
                }
                return parseFloat(amountUsd).toFixed(2)
            },
            
            copAmount(amountCop, dollarPrice, amountUsd){
                if(amountCop > 0)
                {
                    return amountCop.toFixed(2)
                }
                else
                {                    
                    return (parseFloat(amountUsd)*parseInt(dollarPrice)).toFixed(2)
                }
            }, 

            /* comission(amountCop){
                return ((amountCop*0.015)/1.19).toFixed(2)
            }, */

            /* valIva(comission){
                return (comission*0.19).toFixed(2)
            }, */
            
            vipRebate(amountUsd, vip){
                let rebateVip = 0;
                if(vip > 0)
                {
                    if(amountUsd >= 500){
                        rebateVip = 10;
                    }else{
                        rebateVip = 0;
                    }
                }
                else
                {
                    rebateVip = 0
                }

                let rebate = amountUsd * rebateVip;

                return parseFloat(rebate).toFixed(2)
            },
            
            total(amountCop, dollarPrice, amountUsd, vip){

                /* let comission
                let iva */
                /* let rebateVip; */
                let total;

                if(amountCop > 0)
                {
                    amountCop = 0;
                }
                else
                {                    
                    amountCop = (parseFloat(amountUsd)*parseInt(dollarPrice));
                }

                /* comission = parseFloat((amountCop*0.015)/1.19)

                iva = parseFloat(comission*0.19) */

                /* if(vip === 'yes' || this.tradingVip){
                    if(amountUsd >= 500){
                        rebateVip = comission
                    }else{
                        rebateVip = 0
                    }
                }else{
                    rebateVip = 0
                } */

                total = amountCop-this.vipRebate(amountUsd, vip);

                return total.toFixed(2);
            }

        },

    }
</script>