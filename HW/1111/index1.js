var imgCheck = new Promise(function (success, fail) {
    const img = document.querySelector("#test");

    img.addEventListener("load", () => {
        success();
    });

    img.addEventListener("error", () => {
        fail();
    });
});

imgCheck.then(() => console.log("성공")).catch(() => console.log("실패"));
