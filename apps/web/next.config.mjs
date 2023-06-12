// @ts-check
/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
 * This is especially useful for Docker builds.
 */
!process.env.SKIP_ENV_VALIDATION && (await import("./src/env/server.mjs"));

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  output: 'standalone',
  async redirects() {
    return [
      {
        source: '/',
        destination: '/calculator/select',
        permanent: true,
      },
    ]
  },
  publicRuntimeConfig: {
    NEXT_PUBLIC_WEBFLOW_URL_BASE: process.env.NEXT_PUBLIC_WEBFLOW_URL_BASE,
  }
};
export default config;
