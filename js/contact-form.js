var request;
$('#contactForm').submit(function(event) {
    event.preventDefault();

    var form = $(this);
    var inputs = form.find("input, select, button, textarea");
    var form_array = form.serializeArray();
    var data = form.serialize();

    inputs.prop("disabled", true);

    if (request) {
        request.abort();
    }

    grecaptcha.ready(function() {
      grecaptcha.execute(
        window.localStorage.getItem('api-captcha-client'),
        {action: 'send_contact_form'})
        .then(function(captcha_token) {

          data += '&token=' + window.localStorage.getItem('token');
          data += '&captcha=' + captcha_token;

          console.log(data);

          request = $.ajax({
            url: "scripts/contact-form.php",
            type: "POST",
            dataType: 'json',
            contentType: 'application/x-www-form-urlencoded',
            data: data
          });

          request.done(function (response, textStatus, jqXHR){
            console.log(response);

            if(response.success) {
              form[0].reset();
              showMessage('message-success', response);
            } else {
              showMessage('message-failure', response);
            }
          });

          request.fail(function (jqXHR, textStatus, errorThrown){
            console.error(
              "The following error occurred: "+
              textStatus, errorThrown
            );
            showMessage('message-failure', errorThrown);
          });

          request.always(function () {
            inputs.prop("disabled", false);
          });
        });
    });
});
