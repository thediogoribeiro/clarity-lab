// This is where it all goes :)

//href="javascript:void(0);" onclick="myFunction()">
function showBurger() {
  var x = document.getElementById("menu__links");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
