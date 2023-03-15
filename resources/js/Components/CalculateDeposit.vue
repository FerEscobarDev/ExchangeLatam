<template>
    <div class="flex flex-col justify-between items-center mt-5 w-full">
        <div class="rounded-lg text-dark-brand w-80 flex flex-col items-center">
            <span class="flex justify-between items-center w-full mt-2">
                <span class="text-sm text-gray-600 mr-1">Depósito USD: </span><span class="font-semibold text-dark-brand">$ {{ usdFormat() }}</span>
            </span>                                   
            <span class="flex justify-between items-center w-full">
                <span class="text-sm text-gray-600 mr-1">Tasa de cambio: </span><span class="font-semibold text-dark-brand">$ {{ dollarPrice }}</span>
            </span>
            <span class="flex justify-between items-center w-full">
                <span class="text-sm text-gray-600 mr-1">Monto COP: </span><span class="font-semibold text-dark-brand">$ {{ copAmount() }}</span>
            </span>
            <span class="flex justify-between items-center w-full">
                <span class="text-sm text-gray-600 mr-1">Total a pagar COP: </span><span class="font-semibold text-dark-brand">$ {{ total() }}</span>
            </span>
            
            <h2 class="text-lg text-dark-brand font-semibold mt-2">Recibes en Broker ${{ usdFormat() }} USD</h2>
        </div>   
    </div>
</template>

<script>
    export default {
        props: ['amountUsd', 'dollarPrice', 'amountCop', 'user'],

        methods: {

            usdFormat(){
                if(this.amountUsd === ''){
                    this.amountUsd = 0.00
                }
                return parseFloat(this.amountUsd).toFixed(2);
            },
            
            copAmount(){
                let amount_cop = this.dollarPrice * this.usdFormat();
                return parseFloat(amount_cop).toFixed(2)
            }, 
            
            total(){
                let total = this.copAmount();
                return parseFloat(total).toFixed(2);
            },

        },

    }
</script>