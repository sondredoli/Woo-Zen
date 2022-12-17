var fs = require("fs");
const config = require("./config");

const {
  default: woocommerceRestApi,
} = require("@woocommerce/woocommerce-rest-api");
const { page } = require("har-validator");
const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;

const WooCommerce = new WooCommerceRestApi({
  url: config.url,
  consumerKey: config.consumerKey,
  consumerSecret: config.consumerSecret,
  version: config.version,
});

var params = {
  per_page: "100",
  "_fields[]": "name",
};
var all_products = [];

WooCommerce.get("products", params)
  .then((total) => (total = total.headers["x-wp-totalpages"]))
  .then((tot) => {
    for (i = 1; i < tot; i++) {
      var params = {
        per_page: "100",
        page: i,
      };
      WooCommerce.get("products", params).then((ret) => {
        for (o = 1; o < ret.data.length; o++) {
          var prod2 = [{ sku: ret.data[o].sku , stock: ret.data[o].stock_quantity}];
          console.log(prod2);
        }
      });
    }
  });
