$(document).ready(function () {
  $("#myform").validate({
    rules: {
      username: {
        required: true,
        pattern: /^(\w){5,8}$/,
      },
      email: {
        required: true,
        pattern: /^[\w]+@cgvakindia.com$/
      },
      phone: {
        required: true,
        pattern: /^(\d){10}$/
      },
      comment:{
        required: true
      }
    },
    username: {
        required: "This field cant be empty",
        pattern: "It should contain only alphabet number and underscore",
      },
      email: {
        required: "This field cant be empty",
        pattern: "It should be cgvak email"
      },
      phone: {
        required:"This field cant be empty",
        pattern: "must contain 10 numbers only"
      },
      comment:{
        required: "This field cant be empty",
    },
  });
});
