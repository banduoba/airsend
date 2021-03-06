module.exports = isBuf;

var withNativeBuffer = typeof Buffer === 'function' && typeof Buffer.isBuffer === 'function';
var withNativeArrayBuffer = typeof ArrayBuffer === 'function';

var isView = function (obj) {
    return typeof ArrayBuffer.isView === 'function' ? ArrayBuffer.isView(obj) : (obj.buffer instanceof ArrayBuffer);
};


function isBuf(obj) {
    return (withNativeBuffer && Buffer.isBuffer(obj)) ||
        (withNativeArrayBuffer && (obj instanceof ArrayBuffer || isView(obj)));
}