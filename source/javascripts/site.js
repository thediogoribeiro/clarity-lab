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

window.addEventListener("DOMContentLoaded", function() {

  // get the form elements defined in your form HTML above
  
  var form = document.getElementById("contacts__form");
  var button = document.getElementById("contacts__btn");
  var status = document.getElementById("form__status");

  // Success and Error functions for after the form is submitted
  
  function success() {
    form.reset();
    button.style = "display: none ";
    status.innerHTML = "Thanks!";
  }

  function error() {
    status.innerHTML = "Oops! There was a problem.";
  }

  // handle the form submission event

  /*form.addEventListener("Send", function(ev) {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });*/

  getElementById("contacts__btn").addEventListener("Click", function(ev) {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });  


});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function() {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}




/*
jQuery(document).ready(function($) {
  var alterClass = function() {
    var ww = document.body.clientWidth;
    if (ww < 400) {
      $('.test').removeClass('blue');
    } else if (ww >= 401) {
      $('.test').addClass('blue');
    };
  };
  $(window).resize(function(){
    alterClass();
  });
  //Fire it when the page first loads:
  alterClass();
});
*/

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



