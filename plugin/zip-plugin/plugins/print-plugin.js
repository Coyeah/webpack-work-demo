const path = require("path");
const RawSource = require("webpack-sources").RawSource;

module.exports = class ZipPlugin {
  constructor(options) {
    this.options = options;
  }

  apply(compiler) {
    compiler.hooks.emit.tapAsync('emit', (compilation, cb) => {
      console.log('\n\n\n');

      const content = Buffer.from('module.export = ' + JSON.stringify(Object.keys(compilation.assets)));
      const outputPath = path.join(
        compilation.options.output.path,
        ".tim/config.ssr.js"
      );
      const outputRelativePath = path.relative(
        compilation.options.output.path,
        outputPath
      );

      compilation.assets[outputRelativePath] = new RawSource(content);
      console.log(compilation.assets);

      console.log('\n\n\n');
      cb();
    });
  }
};
