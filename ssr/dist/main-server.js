!(function (e, n) {
  if ('object' == typeof exports && 'object' == typeof module) module.exports = n();
  else if ('function' == typeof define && define.amd) define([], n);
  else {
    var o = n();
    for (var t in o) ('object' == typeof exports ? exports : e)[t] = o[t];
  }
})(window, function () {
  return (window.webpackJsonp = window.webpackJsonp || []).push([
    [1],
    {
      0: function (e, n, o) {
        o(1), (e.exports = o(308));
      },
      308: function (e, n, o) {
        var t = o(309),
          a = o(314);
        o(320);
        var r = o(324).default;
        'undefined' == typeof document
          ? (e.exports = t.createElement(r, null))
          : a.hydrate(t.createElement(r, null), document.getElementById('root'));
      },
      320: function (e, n, o) {
        var t = o(321),
          a = o(322);
        'string' == typeof (a = a.__esModule ? a.default : a) && (a = [[e.i, a, '']]);
        var r = { injectType: 'singletonStyleTag', insert: 'head', singleton: !0 };
        t(a, r);
        e.exports = a.locals || {};
      },
      322: function (e, n, o) {
        (n = o(323)(!0)).push([
          e.i,
          '*{box-sizing:border-box}',
          '',
          {
            version: 3,
            sources: [
              '/Users/coyeahchen/Desktop/workspace/github/webpack-demo/ssr/src/index.less',
              'index.less',
            ],
            names: [],
            mappings: 'AAAA,EACE,qBCCF',
            file: 'index.less',
            sourcesContent: [
              '* {\n  box-sizing: border-box;\n}\n\n@primary-color: #1890ff;@link-color: #1890ff;@success-color: #52c41a;@warning-color: #faad14;@error-color: #f5222d;@font-size-base: 14px;@heading-color: rgba(0, 0, 0, 0.85);@text-color: rgba(0, 0, 0, 0.65);@text-color-secondary: rgba(0, 0, 0, 0.45);@disabled-color: rgba(0, 0, 0, 0.25);@border-radius-base: 4px;@border-color-base: #d9d9d9;@box-shadow-base: 0 2px 8px rgba(0, 0, 0, 0.15);',
              '* {\n  box-sizing: border-box;\n}\n',
            ],
          },
        ]),
          (e.exports = n);
      },
      324: function (e, n, o) {
        'use strict';
        o.r(n);
        o(325);
        var t = o(330),
          a = o.n(t),
          r = o(309),
          i = o.n(r),
          s = o(440),
          l = o(441),
          c = o.n(l),
          p = 'oops-project',
          d = 'https://github.com/Coyeah/oops-project',
          x = a.a.Header,
          f = a.a.Footer,
          A = a.a.Content;
        n.default = function () {
          return i.a.createElement(
            a.a,
            { className: c.a.layout },
            i.a.createElement(x, { className: c.a.header }, p),
            i.a.createElement(
              A,
              { className: c.a.content },
              i.a.createElement('img', { src: s.default }),
              i.a.createElement(
                'div',
                null,
                i.a.createElement('span', null, 'Code in here'),
                i.a.createElement('code', null, './App.tsx'),
              ),
              i.a.createElement(
                'div',
                null,
                i.a.createElement('span', null, '感谢支持，希望 start 支持一下～'),
                i.a.createElement('a', { href: d, target: '_blank' }, d),
              ),
            ),
            i.a.createElement(f, { className: c.a.footer }, '© 2020 Coyeah_chen@outlook.com'),
          );
        };
      },
      440: function (e, n, o) {
        'use strict';
        o.r(n), (n.default = o.p + 'images/logo-02809.oops-project.png');
      },
      441: function (e, n, o) {
        var t = o(321),
          a = o(442);
        'string' == typeof (a = a.__esModule ? a.default : a) && (a = [[e.i, a, '']]);
        var r = { injectType: 'singletonStyleTag', insert: 'head', singleton: !0 };
        t(a, r);
        e.exports = a.locals || {};
      },
      442: function (e, n, o) {
        (n = o(323)(!0)).push([
          e.i,
          '._3OJ9iipPLW2xYP1bqBnObl{height:100%}._3OJ9iipPLW2xYP1bqBnObl ._2P41IhLGvjlRZXpTDHcbQT{font-size:42px;font-weight:700;color:#fff;font-style:italic;text-shadow:1px 1px 2px #f9f9f9}._3OJ9iipPLW2xYP1bqBnObl ._3ruFWoBEi2L3ixo5gcBYSa{margin:auto;padding:20px;display:flex;justify-content:center;align-items:flex-start;flex-direction:column}._3OJ9iipPLW2xYP1bqBnObl ._3ruFWoBEi2L3ixo5gcBYSa img{width:300px;height:300px;margin:0 auto}._3OJ9iipPLW2xYP1bqBnObl ._3ruFWoBEi2L3ixo5gcBYSa code{padding:5px 12px;background-color:#ddd;border-radius:5px}._3OJ9iipPLW2xYP1bqBnObl ._3ruFWoBEi2L3ixo5gcBYSa div{margin:8px auto}._3OJ9iipPLW2xYP1bqBnObl ._3ruFWoBEi2L3ixo5gcBYSa div>span{margin-right:12px}._3OJ9iipPLW2xYP1bqBnObl ._3DbGZPfZJ2gQXkq8cBQbI9,._3OJ9iipPLW2xYP1bqBnObl ._2P41IhLGvjlRZXpTDHcbQT{text-align:center}',
          '',
          {
            version: 3,
            sources: [
              '/Users/coyeahchen/Desktop/workspace/github/webpack-demo/ssr/src/App.less',
              'App.less',
            ],
            names: [],
            mappings:
              'AAAA,yBACE,WCCF,CDFA,kDAII,cAAA,CACA,eAAA,CACA,UAAA,CACA,iBAAA,CACA,+BCCJ,CDTA,kDAYI,WAAA,CACA,YAAA,CAEA,YAAA,CACA,sBAAA,CACA,sBAAA,CACA,qBCDJ,CDjBA,sDAqBM,WAAA,CACA,YAAA,CACA,aCDN,CDtBA,uDA2BM,gBAAA,CACA,qBAAA,CACA,iBCFN,CD3BA,sDAiCM,eCHN,CDKM,2DACE,iBCHR,CDjCA,oGA2CI,iBCNJ',
            file: 'App.less',
            sourcesContent: [
              '.layout {\n  height: 100%;\n\n  .header {\n    font-size: 42px;\n    font-weight: 700;\n    color: #fff;\n    font-style: italic;\n    text-shadow: 1px 1px 2px #f9f9f9;\n  }\n\n  .content {\n    margin: auto;\n    padding: 20px;\n\n    display: flex;\n    justify-content: center;\n    align-items: flex-start;\n    flex-direction: column;\n\n    img {\n      width: 300px;\n      height: 300px;\n      margin: 0px auto;\n    }\n\n    code {\n      padding: 5px 12px;\n      background-color: #ddd;\n      border-radius: 5px;\n    }\n\n    div {\n      margin: 8px auto;\n\n      & > span {\n        margin-right: 12px;\n      }\n    }\n  }\n\n  .footer,\n  .header {\n    text-align: center;\n  }\n}\n\n@primary-color: #1890ff;@link-color: #1890ff;@success-color: #52c41a;@warning-color: #faad14;@error-color: #f5222d;@font-size-base: 14px;@heading-color: rgba(0, 0, 0, 0.85);@text-color: rgba(0, 0, 0, 0.65);@text-color-secondary: rgba(0, 0, 0, 0.45);@disabled-color: rgba(0, 0, 0, 0.25);@border-radius-base: 4px;@border-color-base: #d9d9d9;@box-shadow-base: 0 2px 8px rgba(0, 0, 0, 0.15);',
              '.layout {\n  height: 100%;\n}\n.layout .header {\n  font-size: 42px;\n  font-weight: 700;\n  color: #fff;\n  font-style: italic;\n  text-shadow: 1px 1px 2px #f9f9f9;\n}\n.layout .content {\n  margin: auto;\n  padding: 20px;\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  flex-direction: column;\n}\n.layout .content img {\n  width: 300px;\n  height: 300px;\n  margin: 0px auto;\n}\n.layout .content code {\n  padding: 5px 12px;\n  background-color: #ddd;\n  border-radius: 5px;\n}\n.layout .content div {\n  margin: 8px auto;\n}\n.layout .content div > span {\n  margin-right: 12px;\n}\n.layout .footer,\n.layout .header {\n  text-align: center;\n}\n',
            ],
          },
        ]),
          (n.locals = {
            layout: '_3OJ9iipPLW2xYP1bqBnObl',
            header: '_2P41IhLGvjlRZXpTDHcbQT',
            content: '_3ruFWoBEi2L3ixo5gcBYSa',
            footer: '_3DbGZPfZJ2gQXkq8cBQbI9',
          }),
          (e.exports = n);
      },
    },
    [[0, 0, 2]],
  ]);
});
//# sourceMappingURL=main-server.js.map
