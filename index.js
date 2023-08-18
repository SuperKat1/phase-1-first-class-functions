function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction() {
    const Named = function(){};
    return Named;
}

function returnsAnAnonymousFunction() {
    return (function(){});
}