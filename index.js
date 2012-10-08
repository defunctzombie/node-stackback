var capture = function (err, trace) {
    return trace;
}

module.exports = function(err) {

    // save original stacktrace
    var save = Error.prepareStackTrace;

    // replace capture with our function
    Error.prepareStackTrace = capture;

    var captured = err.stack;

    // return original capture
    Error.prepareStackTrace = save;

    return captured;
};
