const clock = document.querySelector("#clock");

// .padStart(2, "0"); 이 텍스트의 길이는 2이여야 하며 모자라는 앞부분은 0을 추가한다.
// 뒤에 채우려면 End로 쓰면됨. 단 숫자와쓸수 없으므로 텍스트로 바꿔서 사용
function getTime() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours} : ${minutes} : ${seconds}`;
}
getTime();
// setInterval(getTime, 1000); getTime함수를 1000ms 마다 반복해서 실행
// setTimeout(getTime, 1000); getTime 함수를 1000ms 후에 한번 실행
setInterval(getTime, 1000);
