(function app(window, $) {
    let msg = "module1";
    function foo() {
        console.log(msg)
    }
    window.foo = foo;
    $("body").css("background","yellow");
})(window,jQuery)