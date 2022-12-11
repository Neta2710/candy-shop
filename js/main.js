
  let elementsArray = document.querySelectorAll("#buyPage");

  elementsArray.forEach(function(elem) {
      elem.addEventListener("click", function() {
        document.getElementById("popUp").style.display = "flex"
      });
  });


document.getElementById("iconClose").addEventListener("click", ferme);

function ferme() {
    document.getElementById("popUp").style.display = "none"
}


