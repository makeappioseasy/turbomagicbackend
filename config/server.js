module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  //host: env('HOST', '192.168.2.34'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'aaab3b9432fe1a2b49bd36e50e5752d19d6'),
    },
  },
});
