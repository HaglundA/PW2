var tutorialsButton = document.getElementById("tutorials-button");
var tutorialList = document.getElementById("tutorial-list");

tutorialsButton.addEventListener("click", function() {
  if (tutorialList.style.display === "none") {
    tutorialList.style.display = "block";
    document.body.style.marginTop = "200px"; // or whatever height you want to shift the page down by
  } else {
    tutorialList.style.display = "none";
    document.body.style.marginTop = "0";
  }
});