const loaderUtils = require("loader-utils");
const fs = require("fs");
const path = require("path");

module.exports = function (source) {
  const { name } = loaderUtils.getOptions(this);

  this.cacheable(false);

  const json = JSON.stringify(source)
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\\u2029");

  // throw new Error('Error');
  // return `export default ${json}`;
  this.callback(null, json);
};
