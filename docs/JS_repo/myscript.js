const tutorialsButton = document.getElementById("tutorials-button");
const tutorialList = document.getElementById("tutorial-list");

function toggle() {
  if (tutorialList.style.display === "none") {
    tutorialList.style.display = "block";
    document.body.style.marginTop = tutorialList.offsetHeight + "px";
  } else {
    tutorialList.style.display = "none";
    document.body.style.marginTop = "0";
  }
}

tutorialsButton.addEventListener("click", toggle);
