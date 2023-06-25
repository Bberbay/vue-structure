var myGreatMixin = {
    // ...
    methods: {
        $_myGreatMixin_update: function () {
            // ...
        }
    }
}
// Even better!
var myGreatMixin2 = {
    // ...
    methods: {
        publicMethod() {
            // ...
            myPrivateFunction()
        }
    }
}

function myPrivateFunction() {
    // ...
}