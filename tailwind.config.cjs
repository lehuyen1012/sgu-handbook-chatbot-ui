/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
                roboto: ["Roboto", "sans-serif"],
            },
        },
    },
    daisyui: {
        themes: ["light", "dark", "winter"],
    },
    plugins: [require("daisyui"), require("tailwind-scrollbar")],
    variants: {
        scrollbar: ["rounded"],
    },
};
