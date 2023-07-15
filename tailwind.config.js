/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "primary": '#3E3E6B',
        "primary-mid-emp": "rgba(125, 158, 211, 0.75)",
        "secondary": "rgba(62, 62, 107, 0.75)"
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      dropShadow: {
        'shadow-primary': "0px 0px 34px 0px rgba(125, 158, 211, 0.50)"
      },
      boxShadow: {
        'shadow-primary': "0px 0px 34px 0px rgba(125, 158, 211, 0.50)"
      }
    },
  },
  plugins: [],
}
