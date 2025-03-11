function parseUrl () {
  var url = window.location.href;
  return url.substring(54);
}
function makeTestArray (array) {
  var quizContents_line = array.split(";");
  var quizContents_final = [];
  for (var i = 0; i < quizContents_line.length; i++) {
    quizContents_final.push(quizContents_line[i].split(","));
  }
  return quizContents_final;
}
function scrambleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
var questions = parseUrl();
questions = scrambleArray(makeTestArray(questions));
function addTestQuestion (values) {
  for (var i = 0; i < values.length) {
    var testQ = document.createElement("div");
    testQ.class = "testQuestion";
    var qNum = i + 1;
    testQ.innerHTML = "<h3>Question " + qNum + "</h3><p>" + values[i][1] + "</p><input class = 'answerBox'>"; // insecure use of innerHTML, will fix later
    document.getElementById("testArea").appendChild(testQ);
  }
}
