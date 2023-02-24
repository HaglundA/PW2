// myscript.js

const tutorialsButton = document.getElementById("tutorials-button");
const tutorialList = document.getElementById("tutorial-list");

tutorialsButton.addEventListener("click", function() {
  if (tutorialList.style.display === "none") {
    tutorialList.style.display = "block";
    document.body.style.marginTop = tutorialList.offsetHeight + "px";
  } else {
    tutorialList.style.display = "none";
    document.body.style.marginTop = "0px";
  }
});
