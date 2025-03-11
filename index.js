function generateQuiz () {
  var quizContents = document.getElementById("quizcontents").value;
  if (quizContents == "") {
    alert("Please enter valid quiz contents");
    console.log("Generation stopped because no quiz contents were entered");
  }
  var quizContents_line = quizContents.split("\n");
  var quizContents_final = [];
  for (var i = 0; i < quizContents_line.length; i++) {
    quizContents_final.push(quizContents_line.split(": "));
  }
  window.open(); // TODO: replace with final link later
}
document.getElementById("submit").onclick = function () {
  alert("Redirecting to test...");
  generateQuiz();
}
