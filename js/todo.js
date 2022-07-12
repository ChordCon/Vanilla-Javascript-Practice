const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#toDoInput");
const toDoList = document.querySelector("#toDoList");
const toDoCard = document.querySelector("#toDo-card");

let toDos = [];

const TODOS_KEY = "toDos";
const HIDDEN = "hidden";

if (localStorage.UserName === undefined) {
  toDoCard.classList.add(HIDDEN);
} else {
  toDoCard.classList.remove(HIDDEN);
}

// JSON.stringify(toDos) 스트링 타입으로 저장
function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

// 버튼이 여러개 생성되어 삭제 할 것을 특정하여야 할경우
// event.target.parentElement; target은 누르는 버튼, parentElement 버튼의 부모요소
// 버튼이 속한 부모요소를 찾아서 삭제함.
function deleteToDo(event) {
  const li = event.target.parentElement;

  li.remove();
  // filter를 이용해서 삭제구현
  // filter는 트루가 리턴된것만을 포함한 새로운 어레이를 생성.
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function paintToDo(newToDoObj) {
  const li = document.createElement("li");
  li.id = newToDoObj.id;
  const span = document.createElement("span");
  span.innerText = newToDoObj.text;
  const button = document.createElement("button");
  button.innerText = "✔";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";

  console.log(toDos.length);
  if (toDos.length > 4) {
    alert("할 일이 너무 많습니다. (5개의 할 일만 저장가능합니다.)");
  } else {
    const newToDoObj = {
      text: newToDo,
      id: Date.now(),
    };
    // 이 함수에서 얻은 값을 다른 함수로 보낼때 파마미터를 사용.
    paintToDo(newToDoObj);
    toDos.push(newToDoObj);
    saveToDos();
  }
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  // 이전에 있던것들을 추가
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
