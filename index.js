function generateQuiz() {
  var quizContents = document.getElementById("quizcontents").value;
  if (quizContents === "") {
    alert("Please enter valid quiz contents");
    console.log("Generation stopped because no quiz contents were entered");
    return; // Stop further execution
  }

  var quizContents_line = quizContents.split("\n");
  var quizContents_final = [];
  
  for (var i = 0; i < quizContents_line.length; i++) {
    var parts = quizContents_line[i].split(": ");
    if (parts.length === 2) {
      quizContents_final.push({
        question: parts[0].trim(),
        answer: parts[1].trim()
      });
    }
  }

  if (quizContents_final.length > 0) {
    // Implement the logic to generate the quiz from quizContents_final
    alert("Quiz generated with " + quizContents_final.length + " questions!");
    // Example: Redirect to a new page with quiz details (you can replace this with your actual link)
    window.open("https://example.com/quiz?data=" + encodeURIComponent(JSON.stringify(quizContents_final)), "_blank");
  } else {
    alert("No valid data found for quiz generation.");
  }
}

document.getElementById("submit").onclick = function () {
  try {
    generateQuiz();
  } catch (e) {
    alert("Error generating quiz: " + e);
  }
};
