export default ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '8590eb309d1089f25f3a9777d4a10e41'),
  },
});
