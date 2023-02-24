let toggleTutorialsButton = document.getElementById("toggle-tutorials-button");
let tutorialList = document.getElementById("tutorial-list");

function toggleTutorials() {
  if (tutorialList.style.display === "none") {
    tutorialList.style.display = "block";
    document.body.style.paddingTop = tutorialList.offsetHeight + "px";
  } else {
    tutorialList.style.display = "none";
    document.body.style.paddingTop = 0;
  }
}

toggleTutorialsButton.addEventListener("click", toggleTutorials);
