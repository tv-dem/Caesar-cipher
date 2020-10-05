const {Transform} = require('stream')
const {codeStr} = require('./code')
module.exports.myTrans = class Encrypt extends Transform{
        constructor(opt) {
            super(opt);
            this._shift = opt.shift;
            this._action = opt.action;
        }
        _transform(chunk, encoding, callback) {
            let str = chunk.toString('utf-8')
            callback(null, codeStr(str, this._action, this._shift))
        }
    }