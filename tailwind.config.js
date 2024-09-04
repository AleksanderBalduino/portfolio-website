/** @type {import('tailwindcss').Config} */

import tailwindGradientMaskImage from 'tailwind-gradient-mask-image';

export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
            googleFont: ["Quicksand", "sans-serif"],
        },
        backgroundImage: {
            home: 'url(src/assets/home/home-bg.png)',
            shape_1: 'url(src/assets/home/shape-1.svg)',
            shape_2: 'url(src/assets/home/shape-2.svg)',
            dots: 'url(src/assets/dots.svg)',
            illustration_contact: 'url(src/assets/contact/illustration.svg)',
        },
      },
    },
    plugins: [
        tailwindGradientMaskImage,
    ],
}