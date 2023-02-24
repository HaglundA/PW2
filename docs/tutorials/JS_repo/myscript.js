// Toggle tutorial list when "Tutorials" button is clicked
window.onload = function() {
    var tutorialsButton = document.getElementById("tutorials-button");
    var tutorialList = document.getElementById("tutorial-list");
  
    tutorialsButton.addEventListener("click", toggle);
  
    function toggle() {
      if (tutorialList.style.display === "none") {
        tutorialList.style.display = "block";
        document.body.style.marginTop = "150px";
      } else {
        tutorialList.style.display = "none";
        document.body.style.marginTop = "0";
      }
    }
  };
  