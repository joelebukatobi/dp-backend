module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '6a7c4994f91309c094bd64bb53104f6f'),
  },
});
