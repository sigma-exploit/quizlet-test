function parseUrl() {
  var urlParams = new URLSearchParams(window.location.search);
  alert(decodeURIComponent(urlParams.get('data')));
  return decodeURIComponent(urlParams.get('data')); // Get the 'data' query parameter from the URL
}

function makeTestArray(data) {
  var quizContents_final = [];
  var questionAnswerPairs = data.split("\");

  for (var i = 0; i < questionAnswerPairs.length; i++) {
    var pair = questionAnswerPairs[i].split("|");
    if (pair.length === 2) {
      quizContents_final.push([pair[0].trim(), pair[1].trim()]);
    }
  }
  alert(quizContents_final.length);
  return quizContents_final;
}

// Function to scramble the order of the questions
function scrambleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

var questions = parseUrl();
alert(questions);
if (questions) {
  questions = scrambleArray(makeTestArray(questions));
} else {
  console.error("No quiz data found in URL!");
}

function addTestQuestion(values) {
  var testArea = document.getElementById("testArea");
  
  if (!testArea) {
    console.error("testArea element not found!");
    return;
  }

  if (values.length === 0) {
    console.error("No questions available!");
    return;
  }

  testArea.innerHTML = '';

  for (var i = 0; i < values.length; i++) {
    var testQ = document.createElement("div");
    testQ.classList.add("testQuestion");  // Use classList to add class
    var qNum = i + 1;
    testQ.innerHTML = "<h3>Question " + qNum + "</h3><p>" + values[i][0] + "</p><input class='answerBox' type='text'>";
    testArea.appendChild(testQ);
  }
}

if (questions && questions.length > 0) {
  addTestQuestion(questions);
} else {
  console.error("There are no questions to display.");
}

function parseAnswers() {
  var answers = document.getElementsByClassName("answerBox");
  var userAnswers = [];

  for (var i = 0; i < answers.length; i++) {
    userAnswers.push(answers[i].value); // Push user input values into array
  }

  return userAnswers;
}

function checkAnswers() {
  var answers = parseAnswers();
  var score = 0;

  for (var i = 0; i < answers.length; i++) {
    if (answers[i].trim().toLowerCase() === questions[i][1].toLowerCase()) {  // Compare user answer with correct answer
      score++;
    }
  }

  document.getElementById("score").innerHTML = "Your Score: " + score + " / " + questions.length;
}
document.getElementById("submit").onclick = function () {
  checkAnswers();
};
