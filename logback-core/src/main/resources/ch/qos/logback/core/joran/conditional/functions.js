var OptionHelper = Java.type("ch.qos.logback.core.util.OptionHelper");

var property = function(key) {
    var val = OptionHelper.propertyLookup(key, props, ctx);
    return val ? val : "";
};
var p = property;

var isDefined = function(key) {
    var val = OptionHelper.propertyLookup(key, props, ctx);
    return val ? true : false;
};

var isNull = function(key) {
    return !isDefined(key);
};
