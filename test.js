// Function to parse the URL and extract the 'data' parameter
function parseUrl() {
  var urlParams = new URLSearchParams(window.location.search);
  alert(decodeURIComponent(urlParams.get('data')));
  return decodeURIComponent(urlParams.get('data')); // Get the 'data' query parameter from the URL
}

// Function to convert the query string into an array of question-answer pairs
function makeTestArray(data) {
  var quizContents_final = [];
  var questionAnswerPairs = data.split("&"); // Split the data string by '&' to get each question-answer pair

  for (var i = 0; i < questionAnswerPairs.length; i++) {
    var pair = questionAnswerPairs[i].split("="); // Split each pair by '=' to separate question and answer
    if (pair.length === 2) {
      quizContents_final.push([pair[0].trim(), pair[1].trim()]); // Push question-answer pair into the final array
    }
  }
  alert(quizContents_final.length);
  return quizContents_final;
}

// Function to scramble the order of the questions
function scrambleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap
  }
  return arr;
}

// Fetch the data from the URL, parse it, and scramble it
var questions = parseUrl();
alert(questions);
if (questions) {
  questions = scrambleArray(makeTestArray(questions)); // Parse and scramble the questions
} else {
  console.error("No quiz data found in URL!");
}

// Function to add the questions and input fields to the page
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

  // Clear the testArea before adding questions to avoid duplication
  testArea.innerHTML = '';

  for (var i = 0; i < values.length; i++) {
    var testQ = document.createElement("div");
    testQ.classList.add("testQuestion");  // Use classList to add class
    var qNum = i + 1;
    testQ.innerHTML = "<h3>Question " + qNum + "</h3><p>" + values[i][0] + "</p><input class='answerBox' type='text'>";
    testArea.appendChild(testQ);
  }
}

// Only add the test questions if they exist
if (questions && questions.length > 0) {
  addTestQuestion(questions);
} else {
  console.error("There are no questions to display.");
}

// Function to gather the answers from the user input fields
function parseAnswers() {
  var answers = document.getElementsByClassName("answerBox");
  var userAnswers = [];

  for (var i = 0; i < answers.length; i++) {
    userAnswers.push(answers[i].value); // Push user input values into array
  }

  return userAnswers;
}

// Function to check the user's answers and display the score
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
// Add event listener to the "Submit Test" button to check answers
document.getElementById("submit").onclick = function () {
  checkAnswers();
};
