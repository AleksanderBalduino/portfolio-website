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
            home: 'url(/assets/home/home-bg.png)',
            dots: 'url(/assets/dots.svg)',
            illustration_contact: 'url(/assets/contact/illustration.svg)',
        },
      },
    },
    plugins: [
        tailwindGradientMaskImage,
    ],
}