
var tools = {
    sayHello: function() {
        console.log("hello");
    return 'hello NodeJS';
    },
    add: function(x, y) {
    return x + y;
    }
    };
    // 模块接口的暴露
    // module.exports = tools;
    exports.sayHello = tools.sayHello;
    exports.add = tools.add;
