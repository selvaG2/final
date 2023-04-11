document.addEventListener("DOMContentLoaded", function() {
  var myForm = document.getElementById("myForm");

  myForm.addEventListener("submit", function(event) {
    event.preventDefault();
    validateForm();
  });

  function validateForm() {
    var username = document.forms["myForm"]["username"].value;
    var email = document.forms["myForm"]["email"].value;
    var phone = document.forms["myForm"]["phone"].value;
    var comment = document.forms["myForm"]["comment"].value;

    var usernamePattern = /^(\w){5,8}$/;
    var emailPattern = /^[\w]+@cgvakindia\.com$/;
    var phonePattern = /^(\d){10}$/;

    if (username === "" || !usernamePattern.test(username)) {
      highlightError("username");
      return false;
    }

    if (email === "" || !emailPattern.test(email)) {
      highlightError("email");
      return false;
    }

    if (phone === "" || !phonePattern.test(phone)) {
      highlightError("phone");
      return false;
    }

    if (comment === "") {
      highlightError("comment");
      return false;
    }

    return alert("Thanks for comment");
  }

  function highlightError(fieldName) {
    var inputElement = document.forms["myForm"][fieldName];
    inputElement.classList.add("error");
  }

  var inputs = document.querySelectorAll("#myForm input");

  for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("blur", function(event) {
      if (event.target.value === "") {
        event.target.classList.remove("error");
        return;
      }

      if (event.target.name === "username" && !/^(\w){5,8}$/.test(event.target.value)) {
        highlightError("username");
      } else if (event.target.name === "email" && !/^[\w]+@cgvakindia\.com$/.test(event.target.value)) {
        highlightError("email");
      } else if (event.target.name === "phone" && !/^(\d){10}$/.test(event.target.value)) {
        highlightError("phone");
      } else {
        event.target.classList.remove("error");
      }
    });
  }
});


function deal(){
  alert("Deals will be displayed soon");
}


function report(){
  alert("Reports are on the way");
}

function plans(){
  alert("Thanks for choosing our plan");
}

function error(){
  alert("Software under maintanance");
}
