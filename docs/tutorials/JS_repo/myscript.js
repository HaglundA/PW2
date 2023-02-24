// Toggle tutorial list when "Tutorials" button is clicked
function toggleTutorialList() {
    var tutorialList = document.getElementById("tutorial-list");
    if (tutorialList.style.display === "none") {
      tutorialList.style.display = "block";
      document.body.style.marginTop = "120px";
    } else {
      tutorialList.style.display = "none";
      document.body.style.marginTop = "0";
    }
  }
  
  var tutorialsButton = document.getElementById("tutorials-button");
  tutorialsButton.addEventListener("click", toggleTutorialList);
  