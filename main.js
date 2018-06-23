console.log("Loading complete")
$(document).ready(function() {
  $("#button").click(function(button) {
    $("#email-error-message").text('')
    $("#type-error-message").text('')
    $("#message-error-message").text('')

    var data = {
      email: $("#email").val(),
      type: $("#type").val(),
      content: $("#message").val(),
    }
    $.post("http://csbackend.s1.themasters.io/api/v1/contact_messages", data)
    .done(function(data) {
      console.log(data)
    })
    .fail(function(data) {
      var errors = data.responseJSON.errors
      if (errors.email) {
        $("#email-error-message").text(errors.email[0])
      }
      if (errors.type) {
        $("#type-error-message").text(errors.type[0])
      }
      if (errors.content) {
        $("#message-error-message").text(errors.content[0])
      }
    })
  })
})
