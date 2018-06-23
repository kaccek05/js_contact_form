console.log("Loading complete")
$(document).ready(function() {
  $("#button").click(function(button) {
    $.post("http://csbackend.s1.themasters.io/api/v1/contact_messages")
    .done(function() {
      alert("second success");
    })
    .fail(function(data) {
      var errors = data.responseJSON.errors
      $("#email-error-message").text(errors.email[0])
      $("#type-error-message").text(errors.type[0])
      $("#message-error-message").text(errors.content[0])
    })
  })
})
