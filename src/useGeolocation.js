"use strict";
exports.__esModule = true;
exports.useGeolocation = void 0;
var react_1 = require("react");
exports.useGeolocation = function () {
    var _a = react_1.useState(null), position = _a[0], setPosition = _a[1];
    react_1.useEffect(function () {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                fetch("https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=" + position.coords.latitude + "&longitude=" + position.coords.longitude + "&localityLanguage=it")
                    .then(function (res) { return res.json(); })
                    .then(function (data) {
                    position.cityName = data.city;
                    setPosition(position);
                    //setCityName(data.city);
                });
            });
        }
    }, []);
    return position;
};
