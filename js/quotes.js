const famousSaying = [
  {
    quotes: "Do make someting!",
    author: "nico",
  },
  {
    quotes: "하루에 3시간을 걸으면 7년 후에 지구를 한바퀴 돌 수 있다.",
    author: "사무엘존슨",
  },
  {
    quotes:
      "먼저핀꽃은 먼저진다  남보다 먼저 공을 세우려고 조급히 서둘것이 아니다.",
    author: "채근담",
  },
];

const quotes = document.querySelector("#quotes");
const author = document.querySelector("#author");

const todaysQuotesNum = Math.floor(Math.random() * famousSaying.length);

quotes.innerText = famousSaying[todaysQuotesNum].quotes;
author.innerText = famousSaying[todaysQuotesNum].author;
