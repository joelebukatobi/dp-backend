module.exports = ({ env }) => ({
  proxy: true,
  url: env("MY_HEROKU_URL"),
  app: {
    keys: env.array("APP_KEYS", [
      "xKzoRR2mmeh72puK60W2ww==",
      "siVDiquqeypkDuuzPYvYLQ==",
    ]),
  },
});
