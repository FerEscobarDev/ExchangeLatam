<!doctype html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <style>        
        @media  only screen and (max-width: 600px) {
            .inner-body {
                width: 100% !important;
            }

            .footer {
                width: 100% !important;
            }
        }

        @media  only screen and (max-width: 400px) {
            .button {
                width: 80% !important;
            }
        }

        p,
        ul,
        ol,
        blockquote {
            line-height: 1.4;
            text-align: left;
        }

        a {
            color: #3869d4;
        }

        a img {
            border: none;
        }

        /* Typography */

        h1 {
            color: #3d4852;
            font-size: 18px;
            font-weight: bold;
            margin-top: 0;
            text-align: left;
        }

        .subtitle{
            color: #3d4852;
            font-weight: bold;
        }

        h2 {
            font-size: 16px;
            font-weight: bold;
            margin-top: 0;
            text-align: left;
        }

        h3 {
            font-size: 14px;
            font-weight: bold;
            margin-top: 0;
            text-align: left;
        }

        p {
            font-size: 16px;
            line-height: 1.5em;
            margin-top: 0;
            text-align: left;
        }

        .footer p {
            font-size: 12px;
        }

        img {
            max-width: 100%;
        }

        .header{
            padding-top: 12px;
            padding-bottom: 12px;
            text-align: center;
        }

        .header a{
            color: #3d4852;
            text-decoration: none;
        }

        .logo{
            width: auto; 
            height: 36px; 
            padding: 6px;
        }

        .body{            
            margin: 0;
            padding: 0;
            width: 100%;
        }

        .inner-body{
            background-color: #ffffff;
            border-color: #e8e5ef;
            border-radius: 2px;
            border-width: 1px;
            box-shadow: 0 2px 0 rgba(0, 0, 150, 0.025), 2px 4px 0 rgba(0, 0, 150, 0.015);
            margin: 0 auto;
            padding: 0;
            width: 600px;
        }

        .content-cell {
            max-width: 100vw;
            padding: 32px;
        }

        /* Buttons */

        .action {
            margin: 30px auto;
            padding: 0;
            text-align: center;
            width: 100%;
        }

        .button {
            -webkit-text-size-adjust: none;
            border-radius: 4px;
            color: #fff;
            display: inline-block;
            overflow: hidden;
            text-decoration: none;
        }

        .button-blue,
        .button-primary {
            background-color: #2d3748;
            border-bottom: 8px solid #2d3748;
            border-left: 18px solid #2d3748;
            border-right: 18px solid #2d3748;
            border-top: 8px solid #2d3748;
        }

        .button-green,
        .button-success {
            background-color: #48bb78;
            border-bottom: 8px solid #48bb78;
            border-left: 18px solid #48bb78;
            border-right: 18px solid #48bb78;
            border-top: 8px solid #48bb78;
        }

        .button-red,
        .button-error {
            background-color: #e53e3e;
            border-bottom: 8px solid #e53e3e;
            border-left: 18px solid #e53e3e;
            border-right: 18px solid #e53e3e;
            border-top: 8px solid #e53e3e;
        }

        .footer {
            margin: 0 auto;
            padding: 0;
            text-align: center;
            width: 570px;
        }

        .footer p {
            color: #b0adc5;
            font-size: 12px;
            text-align: center;
        }

        .footer a {
            color: #b0adc5;
            text-decoration: underline;
        }

        
        /* Subcopy */

        .subcopy {
            border-top: 1px solid #e8e5ef;
            margin-top: 25px;
            padding-top: 25px;
        }

        .subcopy p {
            font-size: 14px;
        }

        /* Utilities */

        .break-all {
            word-break: break-all;
        }

        .whatsapp{
            text-decoration: none;
            font-size: 14px;
            color: #718096;
        }

        .text-color{
            color: #3869d4;
        }
    </style>
</head>
<body>
    <div class="header" style="background-color: #2c3e50;">
        <a href="{{ 'https://admin.exchangelatam.com/' }}" style="display: inline-block;">
            <img src="{{ asset('img_web/logo.png') }}" class="logo">
        </a>	
    </div>
	<div class="body" style="-webkit-text-size-adjust: none; max-width: 100%; background-color: #2c3e50;-webkit-text-size-adjust: none; height: 100%; line-height: 1.4; margin: 0; padding: 0; width: 100% !important; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; ">
		<div class="inner-body">
            <div class="content-cell">
                <h1>Hola Admin,</h1><br>

                <p><strong>El usuario</strong> {{$name}} {{$lastname}} ha cargado el comprobante para el deposito por {{ $amount_usd }} USD.</p>
                <p><strong>ID del deposito:</strong> {{$deposit_id}}.</p>

                <p>Puede acceder a la solicitud desde el siguiente botón.</p>

                <div class="action">
                    <a class="button button-primary" style="color: #fff;" href="{{'https://admin.exchangelatam.com/admin/user/'.$user_id.'/deposits'}}" target="_blank">Acceder</a>
                </div>

                <p>
                    <span class="subtitle">
                        Notificación ExchangeLatam
                    </span>
                </p>


                <div class="subcopy">
                    <p><span class="break-all">Realice depósitos y retiros sin comisiones y sin costo alguno siendo cliente <a href="https://fbs.com/?ppk=exchangelatam">VIP</a>.</span></p>
                    <p><span class="break-all">Vísite nuestra sección <a href="{{ 'https://exchangelatam.com/faq' }}">FAQ</a> y resuelva todas sus dudas antes de usar nuestros servicios.</span></p>
                    <p><span class="break-all">Si tiene problemas haciendo click en el botón "Acceder", copie y pegue el siguiente enlace en su navegador: <a href="{{'https://admin.exchangelatam.com/admin/user/'.$user_id.'/deposits'}}">{{'https://admin.exchangelatam.com/admin/user/'.$user_id.'/deposits'}}</a></span></p>
                </div>
            </div>
		</div>
    </div>
    <div style="background-color: #2c3e50; margin: 0px auto; padding: 0; text-align: center; border: none; border-color: #2c3e50;">
        <div class="footer"   style="background-color: #2c3e50; margin: 0 auto; padding: 0; text-align: center; width: 570px; ">
            <div class="content-cell">
                <p>© {{ date('Y') }} {{ config('app.name') }}. @lang('All rights reserved.')</p>
            </div>
        </div>
    </div>
</body>
</html>