/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                'aboutus' :'/i2.jpg'
            },
            colors: {
                primary: {
                    50: "#ffedd8",
                    100: "#f3d5b5",
                    200: "#e7bc91",
                    300: "#d4a276",
                    400: "#bc8a5f",
                    500: "#a47148",
                    600: "#8b5e34",
                    700: "#6f4518",
                    800: "#603808",
                    900: "#583101",
                },
                yellow1: "#ffa630",
                dark: "#1e1e1e"
            },
            fontFamily: {
                // merienda: ['merienda']
            }
        },
    },
    plugins: [],
};
