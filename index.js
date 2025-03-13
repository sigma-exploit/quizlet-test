function generateQuiz() {
  var quizContents = document.getElementById("quizcontents").value;
  if (quizContents === "") {
    alert("Please enter valid quiz contents");
    console.log("Generation stopped because no quiz contents were entered");
    return; // Stop further execution
  }

  var quizContents_line = quizContents.split("\n");
  var quizContents_final = [];
  var quizContents_url = "";
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
    // Construct the URL string properly
    for (var i = 0; i < quizContents_final.length; i++) {
      quizContents_url += encodeURIComponent(quizContents_final[i].question) + "," + encodeURIComponent(quizContents_final[i].answer) + ";";
    }
    // Remove the last "&" character from the URL
    quizContents_url = quizContents_url.slice(0, -1);
    
    // Implement the logic to generate the quiz from quizContents_final
    alert("Quiz generated with " + quizContents_final.length + " questions!");
    // Redirect to the new page with quiz data
    window.open("https://sigma-exploit.github.io/quizlet-test/test.html?data=" + quizContents_url, "_blank");
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


