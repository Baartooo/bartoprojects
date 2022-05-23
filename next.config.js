// eslint-disable-next-line @typescript-eslint/no-var-requires
const withReactSvg = require('next-react-svg');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.ctfassets.net'],
  },
  i18n: {
    locales: ['pl'],
    defaultLocale: 'pl',
  },
  include: path.resolve(__dirname, 'src/assets/svg'),
};

module.exports = withReactSvg(nextConfig);
