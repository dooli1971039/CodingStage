var ajaxCheck = new Promise(function (success, fail) {
    $.get("https://codingapple1.github.io/hello.txt").done(function (msg) {
        success(msg);
    });
});

ajaxCheck
    .then((msg) => {
        var ajaxCheck2 = new Promise(function (success, fail) {
            $.get("https://codingapple1.github.io/hello2.txt").done(function (msg) {
                success(msg);
            });
        });
        return ajaxCheck2;
    })
    .then((msg2) => console.log(msg2));
