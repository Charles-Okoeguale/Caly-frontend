const environment = process.env.NODE_ENV;
const rootEndPoint =
  environment == "production"
    ? "https://Caly-api.herokuapp.com/"
    : "http://localhost:4000/";

module.exports = {
  env: {
    BASE_URL: rootEndPoint,
    DOMAIN: "https://www.Caly.xyz",
  },
};
