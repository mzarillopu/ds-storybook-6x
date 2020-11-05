'use strict';

function rgbaToHexFromString(str) {
    var arr = str.replace('rgba(', '').replace(')', '').split(',');
    return rgbaToHex(arr[0], arr[1], arr[2], arr[3]);
}

function rgbaToHex(r, g, b, a) {
    var red = Math.round(parseInt(r) * a + 255 * (1 - parseFloat(a)));
    var green = Math.round(parseInt(g) * a + 255 * (1 - parseFloat(a)));
    var blue = Math.round(parseInt(b) * a + 255 * (1 - parseFloat(a)));
    return ('#' + red.toString(16) + green.toString(16) + blue.toString(16)).toUpperCase();
}

const rgba = process.argv[2];
console.log(rgbaToHexFromString(rgba));
