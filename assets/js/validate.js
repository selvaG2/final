$(document).ready(function () {
  $("#myForm").validate({
    rules: {
      username: {
        required: true,
        pattern: /^(\w){5,8}$/
      },
      email: {
        required: true,
        pattern: /^[\w]+@cgvakindia\.com$/
      },
      phone: {
        required: true,
        pattern: /^(\d){10}$/
      },
      comment: {
        required: true
      }
    },
    messages: {
      username: {
        required: "This field can't be empty",
        pattern: "It should contain only alphabet number and underscore"
      },
      email: {
        required: "This field can't be empty",
        pattern: "It should be a CG-VAK email"
      },
      phone: {
        required: "This field can't be empty",
        pattern: "Must contain 10 numbers only"
      },
      comment: {
        required: "This field can't be empty"
      }
    }
  });
});


function deal(){
  alert("Deals will be displayed soon");
}

function response(){
  alert("Thanks for the comment");
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