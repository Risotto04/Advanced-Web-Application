/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require("@spartan-ng/ui-core/hlm-tailwind-preset")],
  content: [
    "./src/**/*.{html,ts}",
    "./src/app/shared/components/**/*.{html,ts}",
  ],
  theme: {
    theme: {
      white: "#ffffff",
      colors: {
        extraLight: "#F5F5F7",
        lightGray: "#D2D2D7",
        gray: "#808080",
        darkgray: "#424245",
        black: "#121212",
        succeess: "#32936F",
        error: "#F55F56",
      },
    },
  },
  plugins: [],
};
