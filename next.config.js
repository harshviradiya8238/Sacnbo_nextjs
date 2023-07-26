module.exports = {
  /* config options here */
  reactStrictMode: false,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/authentication/login",
        permanent: true,
      },
    ];
  },
};
