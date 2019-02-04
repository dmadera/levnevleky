$(window).scroll(function(e) {
  if($(window).scrollTop() < 80) {
    $(".navbar").addClass("top");
    $(".subtitle").addClass("d-lg-block");
  } else {
    $(".navbar").removeClass("top");
    $(".subtitle").removeClass("d-lg-block");
  }
});
