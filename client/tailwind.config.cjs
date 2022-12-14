const defaultTheme = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                "display": ['DM Sans', ...defaultTheme.fontFamily.sans],
                "body": ['Exo 2', ...defaultTheme.fontFamily.serif],
            },
            colors: {
                'background': '#1a1a1a',
                'on-background': '#707070',
                'on-background-light': '#ffffff',
                'primary': '#ffffff',
                'on-primary': '#000000'
            },
        },
    },
    plugins: [],
}
