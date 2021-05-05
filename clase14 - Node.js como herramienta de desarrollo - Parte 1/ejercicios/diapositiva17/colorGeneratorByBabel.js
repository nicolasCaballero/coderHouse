"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var getNum0To255 = function getNum0To255() {
    return Math.floor(Math.random() * 256);
};

var GetColor = function () {
    function GetColor() {
        _classCallCheck(this, GetColor);
    }

    _createClass(GetColor, [{
        key: "generateColor",
        value: function generateColor() {
            return "rgb(" + getNum0To255() + "," + getNum0To255() + "," + getNum0To255() + ")";
        }
    }]);

    return GetColor;
}();

;

var color = new GetColor();
console.log(color.generateColor());
