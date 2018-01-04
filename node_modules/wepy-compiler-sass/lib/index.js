'use strict';

exports.__esModule = true;

exports.default = function (content, config, file) {
    return new Promise(function (resolve, reject) {
        config.data = content;
        config.file = file;
        _nodeSass2.default.render(config, function (err, res) {
            if (err) {
                reject(err);
            } else {
                resolve(res.css);
            }
        });
    });
};

var _nodeSass = require('node-sass');

var _nodeSass2 = _interopRequireDefault(_nodeSass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

;