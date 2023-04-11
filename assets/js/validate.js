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
