const imgs = ["0.jpg", "1.jpg", "2.jpg"];

const todaysImgNum = Math.floor(Math.random() * imgs.length);
const todaysImg = imgs[todaysImgNum];

// document.createElement("style"); html이 아닌 자바스크립트에서 html 엘리먼트를 만드는 방법
// 여기서는 <style></style>을 만듬.
const bgImg = document.createElement("style");

bgImg.innerText = `body {background-image: url(img/${todaysImg}); background-position: center;  background-repeat: no-repeat;  background-size: cover; }`;

// document.head.appendChild(bgImg); head의 자식으로 bgImg 를 보냄 html에 나타나게.
// document.body.appendChild(bgImg) body에도 가능~
document.head.appendChild(bgImg);
