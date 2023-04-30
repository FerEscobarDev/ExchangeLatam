<?php

if (! function_exists('priceBuyBalance')) {
    function priceBuyBalance()
    {
        $dataSkrill = file_get_contents("https://www.skrill.com/mktgcc/v1/rates?source=COP&target=USD&length=1&unit=day");
        $skrillPrices = json_decode($dataSkrill);

        $dataTrm = file_get_contents('https://www.datos.gov.co/resource/32sa-8pi3.json?$order=vigenciadesde%20DESC&$limit=1&$$app_token=LYqb1Q5Nj0TkfXrJnFDN7xk60');
        $trmPrice = json_decode($dataTrm);  

        $priceDeposit = $skrillPrices[24]->value - ($skrillPrices[24]->value * 0.0399);
        $priceDeposit = $priceDeposit + ($priceDeposit * 0.015); 
        $priceDeposit = $priceDeposit + 150;
        $priceDeposit = $priceDeposit + ($priceDeposit * 0.004);
        $priceDeposit = round($priceDeposit, 0);

        if($priceDeposit < $trmPrice[0]->valor){
            $priceDeposit = $trmPrice[0]->valor;
        }

        return  $priceDeposit;
    }
}

if (! function_exists('priceSellBalance')) {
    function priceSellBalance()
    {
        $dataSkrill = file_get_contents("https://www.skrill.com/mktgcc/v1/rates?source=COP&target=USD&length=1&unit=day");
        $skrillPrices = json_decode($dataSkrill);

        $dataTrm = file_get_contents('https://www.datos.gov.co/resource/32sa-8pi3.json?$order=vigenciadesde%20DESC&$limit=1&$$app_token=LYqb1Q5Nj0TkfXrJnFDN7xk60');
        $trmPrice = json_decode($dataTrm);  

        $priceWithdrawal = $skrillPrices[24]->value - ($skrillPrices[24]->value * 0.0399);
        $priceWithdrawal = $priceWithdrawal + ($priceWithdrawal * 0.015); 
        $priceWithdrawal = round($priceWithdrawal, 0);

        if($priceWithdrawal > $trmPrice[0]->valor){
            $priceWithdrawal = $trmPrice[0]->valor;
        }

        return  $priceWithdrawal;
    }
}

if(! function_exists('getTrm')) {
    function getTrm()
    {
        $dataTrm = file_get_contents('https://www.datos.gov.co/resource/32sa-8pi3.json?$order=vigenciadesde%20DESC&$limit=1&$$app_token=LYqb1Q5Nj0TkfXrJnFDN7xk60');
        return json_decode($dataTrm); 
    }
}
