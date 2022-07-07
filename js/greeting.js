// querySelector 를 사용할때는 id 면 # , class 면 . , 즉 css 에서 쓰는 것처럼 써야함.
const loginForm = document.querySelector("#loginForm");
const loginInput = document.querySelector("#loginForm input");
const greeting = document.querySelector("#greeting");

// String 이 2번이상 반복되면 아래처럼 저장해서 사용 이유는 오타로인한 오류를 찾기 힘들기때문
const HIDDEN_CLASS = "hidden";
const USER_NAME = "UserName";

function loginSubmit(event) {
  // 폼안에서는 submit(submit 버튼을 누른다거나 엔터를 치면)이 되면
  // 자동으로 새로고침이 되는데 그걸 막는게 event.preventDefault();
  // event.preventDefault();는 이벤트가 발생할때 브라우저가 기본적으로 수행하는 모든 동작
  // 을 막음
  event.preventDefault();

  // loginForm.classList.add(HIDDEN_CLASS); 클레스를 추가.
  loginForm.classList.add(HIDDEN_CLASS);
  const userName = loginInput.value;
  // localStorage 에 값을 저장하는 방법. 앞에가 이름 뒤에가 벨류.
  localStorage.setItem(USER_NAME, userName);
  useGreeting(userName);
}

// 같은 동작이 반복되면 함수로 만들어서 사용.
function useGreeting(userName) {
  greeting.innerText = `Hello ${userName}`;
  // loginForm.classList.remove(HIDDEN_CLASS); 클레스를 제거.
  greeting.classList.remove(HIDDEN_CLASS);
}

const savedUserName = localStorage.getItem(USER_NAME);

if (savedUserName === null) {
  loginForm.classList.remove(HIDDEN_CLASS);
  // loginForm.addEventListener("submit", loginSubmit); addEventListener가 봐야할 동작은 submit
  // submit을 관측하면 실행해야할 동작은 loginSubmit이며 이때 loginSubmit 함수는 관측될때 마다
  // 실행가기 위해서 () 를 빼고 실행 함. ()가 있으면 한번 실행되고 끝남.
  loginForm.addEventListener("submit", loginSubmit);
} else {
  useGreeting(savedUserName);
}
