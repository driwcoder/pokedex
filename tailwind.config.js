module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [
    {
      pattern: /(bg|text|border)-(gray|red|blue|yellow|green|cyan|orange|purple|indigo|pink|lime|black|white)/,
    },
  ],
}