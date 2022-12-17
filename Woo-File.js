var fs = require("fs");
const config = require("./config");

const {
  default: woocommerceRestApi,
} = require("@woocommerce/woocommerce-rest-api");
const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;

const WooCommerce = new WooCommerceRestApi({
  url: config.url,
  consumerKey: config.consumerKey,
  consumerSecret: config.consumerSecret,
  version: config.version,
});
const params = {
  per_page: "100",
  "_fields[]": "name",
};
const arr = [];

WooCommerce.get("products", params)
  .then((response) => {
    const arr = [];
    var count2 = 10;
    var count = response.headers["x-wp-totalpages"];
    for (i = 0; i < count2; i++) {
      const params2 = {
        per_page: "100",
        offset: i,
        "_fields[]": "name",
      };
      WooCommerce.get("products", params2).then((prod) => {
        console.log(prod);
      });
    }
  })
  .then((arr2) => console.log(arr))
  .catch((error) => {
    console.log(error);
  });
