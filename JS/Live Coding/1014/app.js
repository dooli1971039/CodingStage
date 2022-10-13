/* clock */

const clock=document.querySelector("h2#clock");

function getClock(){
    const date=new Date();

    const hours=String(date.getHours()).padStart(2,"0");
    const minutes=String(date.getMinutes()).padStart(2,"0");
    const seconds=String(date.getSeconds()).padStart(2,"0");
    clock.innerText=`${hours}:${minutes}:${seconds}`;
}

getClock() // 웹사이트 로드되자마자 실행
setInterval(getClock, 1000); // 1초에 한 번씩 반복해서 실행


/* random image */
const images=["0.png","1.png","2.png","3.png","4.png","5.png","6.png"]

const chosenImg = images[Math.floor(Math.random()*images.length)]; //랜덤으로 이미지 고르기

const bgImage = document.createElement("img"); // img 태그 생성
bgImage.src = `images/${chosenImg}`; // img 태그에 src 속성 추가

document.body.appendChild(bgImage); // body에 추가