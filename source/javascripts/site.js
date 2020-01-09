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


/*
function active1() {
	var barra1 = document.getElementById("bar1")
	var barra2 = document.getElementById("bar2")
	var imagem1 = document.getElementById("image-1")
	var imagem2 = document.getElementById("image-2")

	if (barra1.className !== "active") {

		barra1.classList.remove("active");
		barra2.classList.add("active");

		imagem1.style.display = "none";
		imagem1.classList.remove("active");
		imagem2.classList.add("active");
	}
}


function active2() {
	var barra1 = document.getElementById("bar1");
	var barra2 = document.getElementById("bar2");
	var imagem1 = document.getElementById("image-1");
	var imagem2 = document.getElementById("image-2");

	if (barra2.className !== "active") {

		barra2.classList.remove("active");
		barra1.classList.add("active");

		imagem2.style.display = "none";
		imagem2.classList.remove("active");
		imagem1.classList.add("active");
	}
}
*/



