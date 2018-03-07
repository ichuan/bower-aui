/*!
 * @atlassian/aui - Atlassian User Interface Framework
 * @version v7.3.4
 * @link https://docs.atlassian.com/aui/latest/
 * @license SEE LICENSE IN LICENSE.md
 * @author Atlassian Pty Ltd.
 */
// src/js/aui/header-async.js
(typeof window === 'undefined' ? global : window).__545cbced900823964e821b9311e6180e = (function () {
  var module = {
    exports: {}
  };
  var exports = module.exports;
  
  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  
  var _createHeader = __2003939762e27a5cda2d7e01a006b7b9;
  
  var _createHeader2 = _interopRequireDefault(_createHeader);
  
  var _skate = __a9085d87de8a4b57f20fb5e5e56c0813;
  
  var _skate2 = _interopRequireDefault(_skate);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var Header = (0, _skate2.default)('aui-header', {
      type: _skate2.default.type.CLASSNAME,
      created: function created(element) {
          (0, _createHeader2.default)(element);
      }
  });
  
  exports.default = Header;
  module.exports = exports['default'];
  
  return module.exports;
}).call(this);
// src/js/aui-header-async.js
(typeof window === 'undefined' ? global : window).__efde1941441afc97fed11718738c3b27 = (function () {
  var module = {
    exports: {}
  };
  var exports = module.exports;
  
  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  __545cbced900823964e821b9311e6180e;
  
  exports.default = window.AJS;
  module.exports = exports['default'];
  
  return module.exports;
}).call(this);