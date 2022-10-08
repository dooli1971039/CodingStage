const hi = document.getElementById("hi");
console.log(hi);

hi.innerText = "뉸뉴냔나 lululala";

const hello = document.querySelector(".hello p");
console.log(hello);

hello.addEventListener("click", handleHelloClick);

function handleHelloClick() {
  hello.innerHTML = "안녕하세요";
  console.log("쨘~~");
}

const mouse1 = () => console.log("마우스 올라옴");
hello.addEventListener("mouseover", mouse1);

hello.addEventListener("mouseout", () => console.log("마우스 나감"));
