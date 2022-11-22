var btnCheck = new Promise(function (success, fail) {
    document.querySelector("#btn").addEventListener("click", () => success());
});

async function clickBtn() {
    var result = await btnCheck;
    console.log("성공");
}

clickBtn();
