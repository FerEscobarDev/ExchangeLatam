const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {    
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './vendor/laravel/jetstream/**/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        extend: {
            fontFamily: {
                brand: ['myriad-pro', 'sans-serif'],
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                'blue-brand': '#17A9E1',
                'blue-brand-complement': '#49A0FC',
                'yellow-brand': '#FBD500',
                'dark-brand': '#1C2241',
                'blue-brand-gradient1': '#2267AF',
                'blue-brand-gradient2': '#13A7DF',
                'facebook': '#3b5998',
                'instagram': '#E1306C',
                'whatsapp': '#00bb2d',
            },
        },
    },

    plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
