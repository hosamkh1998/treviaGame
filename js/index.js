function onInit() {
  console.log("ready");
}

var quesIndex = 0;

var questions = [
  {
    _id: "q101",
    question: "מהו הרובע הכי מפואר במשחק הסודוקו?",
    options: [
      { answer: "הרובע המרכזי", correct: false },
      { answer: "הרובע העליון שמאלה", correct: false },
      { answer: "הרובע העליון מימין", correct: true },
      { answer: "הרובע התחתון משמאלה", correct: false },
    ],
    explanation:
      "הרובע העליון מימין הוא הרובע המפואר ביותר במשחק הסודוקו, מכיוון שהוא מכיל את המספר הגבוה ביותר של תאים למילוי.",
    level: "easy",
    btnColor: "",
    msg: "",
    listDisplay: "",
  },
  {
    _id: "q102",
    question: "מהו המספר הגבוה ביותר של תאים שניתן למלא ברובע?",
    options: [
      { answer: "9", correct: false },
      { answer: "8", correct: false },
      { answer: "7", correct: false },
      { answer: "6", correct: true },
    ],
    explanation:
      "המספר הגבוה ביותר של תאים שניתן למלא ברובע הוא 6, מכיוון שכל רובע מכיל 9 מספרים בסך הכל, ולכן ניתן למלא 9 תאים ברובע.",
    level: "easy",
    btnColor: "",
    msg: "",
    listDisplay: "",
  },
  {
    _id: "q103",
    question: "מהו השם המדעי של עצם הזנב של האדם?",
    options: [
      { answer: "קוקסיס", correct: true },
      { answer: "פמוריום", correct: false },
      { answer: "פלביס", correct: false },
      { answer: "טלוס", correct: false },
    ],
    explanation:
      "קוקסיס הוא השם המדעי של עצם הזנב של האדם, שגם נקרא עצם הטיילת.",
    level: "hard",
    btnColor: "",
    msg: "",
    listDisplay: "",
  },
  {
    _id: "q104",
    question: 'מהו שם הזוכה בתואר "מיס ארצות הברית" בשנת 2019?',
    options: [
      { answer: "קיילי ג'נר", correct: false },
      { answer: "האלי ריימונד", correct: false },
      { answer: "ניהול פרנדס", correct: false },
      { answer: "צירה קריוס", correct: true },
    ],
    explanation: "צירה קריוס נבחרה למיס ארצות הברית בשנת 2019.",
    level: "easy",
    btnColor: "",
    msg: "",
    listDisplay: "",
  },
  {
    _id: "q105",
    question: "באיזו מדינה ממוקמת עיר הוותיקן?",
    options: [
      { answer: "איטליה", correct: true },
      { answer: "ספרד", correct: false },
      { answer: "צרפת", correct: false },
      { answer: "פולין", correct: false },
    ],
    explanation: "הוותיקן הוא המדינה הקטנה בעולם וממוקם ברומא, באיטליה.",
    level: "normal",
    btnColor: "",
    msg: "",
    listDisplay: "",
  },
  {
    _id: "q106",
    question: "מהו שם האלבום הראשון של ליידי גאגא?",
    options: [
      { answer: "The Fame", correct: true },
      { answer: "Born This Way", correct: false },
      { answer: "Joanne", correct: false },
      { answer: "Artpop", correct: false },
    ],
    explanation: '"The Fame" הוא האלבום הראשון של ליידי גאגא, שיצא בשנת 2008.',
    level: "easy",
    btnColor: "",
    msg: "",
    listDisplay: "",
  },
  {
    _id: "q107",
    question: "באיזו שנה נפל חומת ברלין?",
    options: [
      { answer: "1989", correct: true },
      { answer: "1990", correct: false },
      { answer: "1987", correct: false },
      { answer: "1991", correct: false },
    ],
    explanation:
      "חומת ברלין נפלה בשנת 1989, לאחר עשורים של חלוקה בין מזרח ומערב בעיר ברלין.",
    level: "normal",
    btnColor: "",
    msg: "",
    listDisplay: "",
  },
  {
    _id: "q108",
    question: "מה הוא השם המלא של היישוב היהודי הראשון בארץ ישראל?",
    options: [
      { answer: "גדרה", correct: false },
      { answer: "ראש פינה", correct: false },
      { answer: "רישון לציון", correct: true },
      { answer: "כפר תבור", correct: false },
    ],
    explanation:
      "רישון לציון הוא היישוב היהודי הראשון בארץ ישראל, שנוסד בשנת 1882.",
    level: "hard",
    btnColor: "",
    msg: "",
    listDisplay: "",
  },
  {
    _id: "q109",
    question: "מהו שם הסרט הראשון של סטיבן ספילברג?",
    options: [
      { answer: "קרן הגמדים", correct: false },
      { answer: "אקסטרה-טרסטריאל", correct: false },
      { answer: "דווקא", correct: false },
      { answer: "אמנות הקסם", correct: true },
    ],
    explanation:
      '"אמנות הקסם" הוא הסרט הראשון של סטיבן ספילברג, שיצא בשנת 1971.',
    level: "hard",
    btnColor: "",
    msg: "",
    listDisplay: "",
  },
  {
    _id: "q110",
    question: "מהו הצבע המוביל בדגל צרפת?",
    options: [
      { answer: "כחול", correct: true },
      { answer: "אדום", correct: false },
      { answer: "צהוב", correct: false },
      { answer: "ירוק", correct: false },
    ],
    explanation:
      "דגל צרפת מורכב משלושה צבעים: כחול, לבן ואדום. צבע הכחול מופיע בחלק העליון של הדגל והוא מייצג את תנועת ההשכלה והחירות.",
    level: "normal",
    btnColor: "",
    msg: "",
    listDisplay: "",
  },
];

var score = 100;
var escore = document.querySelector(".score");
var eBasicDetails = document.querySelector(".basicDetails");
function checkDetails() {
  var eUserName = document.querySelector(".userName").value;
  var eUserAge = document.querySelector(".userAge").value;
  var eUserGender = document.querySelector(".userGender").value;
  var ewrongMsg = document.querySelector(".wrongMsg");
  var eNewGame = document.querySelector(".newGameCheck");
  if (
    document.querySelector(".userName").value == "" ||
    document.querySelector(".userAge").value == "" ||
    document.querySelector(".userGender").value == "0"
  ) {
    ewrongMsg.innerHTML = `<div class="alert alert-danger col-12" role="alert">
    יש להזין את כל המידע שבשדות בשביל להתחיל את המשחק !
  </div>`;
    setTimeout(() => {
      ewrongMsg.innerHTML = "";
    }, 2000);
  } else {
    if (eNewGame.checked == true) {
      localStorage.clear();
    }
    getFromLocalStorage();
    escore.innerHTML = `<span class="fs-4">שלום ${eUserName}, בנינו עבורך עכשיו משחק מותאם אישית לגילך שהוא: ${eUserAge} <br>
    הציון העדכני שלך הוא <span class="updateScore">${score}</span><br>
    אנא שמור עליו בקפידה!</span>`;
    renderGame();
    eBasicDetails.innerHTML = "";
  }
}
function checkAnswer(ques_id, answer) {
  var currQuestion = questions.find((q) => q._id === ques_id);
  var correctAnswer = currQuestion.options.find((o) => o.correct);
  var eMsgText = document.querySelector(".msgText");
  if (correctAnswer.answer == answer) {
    currQuestion.btnColor = "btn-success";
    currQuestion.msg = `התשובה שלך היא: ${answer} והיא תשובה נכונה!`;
  } else {
    if (score >= 10) score -= 10;
    currQuestion.btnColor = "btn-danger";
    currQuestion.msg = `התשובה שלך היא: ${answer} והיא תשובה לא נכונה!`;
  }
  currQuestion.listDisplay = "none";
  document.querySelector(".updateScore").innerHTML = score;
  renderGame();
  renderCurrQuestion(ques_id);
  setToLocalStorage();
}
var strHtml = "";
function renderGame() {
  strHtml = "";
  strHtml += `<div class="row">
  <div class="col-3">
    <div class="col-12">
      <ul class="nav flex-column col-12 p-0">
        <li class="nav-item">`;
  for (var i = 0; i < questions.length; i++) {
    strHtml += `
          <button
            class="btn btn-outline-dark col-12 ${questions[i].btnColor}"
            aria-current="page"
            onclick="renderCurrQuestion('${questions[i]._id}')"
          >
            שאלה מספר ${i + 1}
          </button>
          `;
  }
  strHtml += `</li>
        
      </ul>
    </div>
  </div>
  <div class="col-9 border border-secondary quesCard">
    <div class="row">
      <div class="col-8 questionCard">
      
        
        
      </div>
      <div
        class="col-4 msgImage d-flex justify-content-center align-items-center"
      ></div>
    </div>
  </div>
  <div class="col-12 mt-2 finishGame"></div>
</div>`;
  document.querySelector(".mainGame").innerHTML = strHtml;
  setToLocalStorage();
}

function renderCurrQuestion(ques_id) {
  var currQuestionInd = questions.findIndex((q) => q._id === ques_id);
  var eQuestionCard = document.querySelector(".questionCard");
  var eCurrQuestion = questions[currQuestionInd];
  var eMsgImage = document.querySelector(".msgImage");
  quesIndex = currQuestionInd;
  var strHtml = "";
  strHtml += `
  <span class="fs-3 fw-bolder text-primary"
    >${questions[quesIndex].question}</span
  >
  <ol class="fs-4 listCard" style="display: ${questions[quesIndex].listDisplay} ">
    <li class="answerQues" onclick="checkAnswer('${questions[quesIndex]._id}','${questions[quesIndex].options[0]?.answer}')">
      ${questions[quesIndex].options[0]?.answer}
    </li>
    <li class="answerQues" onclick="checkAnswer('${questions[quesIndex]._id}','${questions[quesIndex].options[1]?.answer}')">
      ${questions[quesIndex].options[1]?.answer}
    </li>
    <li class="answerQues" onclick="checkAnswer('${questions[quesIndex]._id}','${questions[quesIndex].options[2]?.answer}')">
      ${questions[quesIndex].options[2]?.answer}
    </li>
    <li class="answerQues" onclick="checkAnswer('${questions[quesIndex]._id}','${questions[quesIndex].options[3]?.answer}')">
      ${questions[quesIndex].options[3]?.answer}
    </li>
  </ol>`;

  if (questions[quesIndex].btnColor == "") {
    strHtml += `<p class="fs-5 text-info msgText">עוד לא ענית</p>`;
    eMsgImage.innerHTML = "";
  } else if (questions[quesIndex].btnColor == "btn-success") {
    strHtml += `<div class="alert alert-success" role="alert">${eCurrQuestion.msg}</div>`;
    eMsgImage.innerHTML = `<img
    style="rotate: 180deg;"
    class="img-fluid"
    src="https://i.gifer.com/origin/89/89dd32f3f12f1ed90be652acb3b974b8_w200.gif"
    alt="wrongGif"
  />`;
  } else {
    strHtml += `<div class="alert alert-danger" role="alert">${eCurrQuestion.msg}</div>`;
    eMsgImage.innerHTML = `<img
    style="rotate: 0deg;"
    class="img-fluid"
    src="https://i.gifer.com/origin/89/89dd32f3f12f1ed90be652acb3b974b8_w200.gif"
    alt="wrongGif"
  />`;
  }
  if (quesIndex == questions.length - 1) {
    var flag = true;
    for (var i = 0; i < questions.length; i++) {
      if (questions[i].btnColor == "") {
        flag = false;
      }
    }
    if (flag) {
      strHtml += `<button class="btn btn-primary" onclick="finishGame()">סיים</button>`;
    }
  } else {
    if (quesIndex > 0) {
      strHtml += `<button class="btn btn-primary m-2" onclick="renderCurrQuestion('${
        questions[quesIndex - 1]._id
      }')">הקודם</button>`;
    }
    strHtml += `<button class="btn btn-primary" onclick="renderCurrQuestion('${
      questions[quesIndex + 1]._id
    }')">הבא</button>`;
  }

  eQuestionCard.innerHTML = strHtml;
}

function setToLocalStorage() {
  localStorage.setItem("questions", JSON.stringify(questions));
  localStorage.setItem("score", score);
}

function getFromLocalStorage() {
  questions = JSON.parse(localStorage.getItem("questions"))
    ? JSON.parse(localStorage.getItem("questions"))
    : questions;
  score = localStorage.getItem("score") ? localStorage.getItem("score") : score;
}

function finishGame() {
  var eFinishGame = document.querySelector(".finishGame");
  var strHtml = "";
  var time = 5;
  var timer = setInterval(function () {
    document.querySelector(".timer").innerHTML = `הדף ירענן בעוד ${time} שניות`;
    time--;
    if (time < 0) {
      clearInterval(timer);
      refreshPage();
      localStorage.clear();
    }
  }, 1000);

  if (score > 55) {
    strHtml += `<div class="alert alert-success" role="alert">
  <h4 class="alert-heading">סיימת את המשחק בהצלחה!</h4>
  <p>הניקוד שלך הוא: ${score}</p>
  <p class="col-5 fw-bolder fs-2 timer"></p>
  <hr>
  <p class="mb-0">בהצלחה בכל המשימות הבאות!</p>
</div>`;
  } else {
    strHtml += `<div class="alert alert-danger" role="alert">
    <h4 class="alert-heading">סיימת את המשחק!</h4>
    <p>הניקוד שלך הוא: ${score}</p>
    <p class="col-5 fw-bolder fs-2 timer"></p>
    <hr>
    <p class="mb-0">לא עברת את המבחן נסה שוב!</p>
  </div>`;
  }
  eFinishGame.innerHTML = strHtml;
}

function refreshPage() {
  window.location.reload();
}
