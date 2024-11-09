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
            home: 'url(public/assets/home/home-bg.png)',
            dots: 'url(public/assets/dots.svg)',
            illustration_contact: 'url(public/assets/contact/illustration.svg)',
        },
      },
    },
    plugins: [
        tailwindGradientMaskImage,
    ],
}