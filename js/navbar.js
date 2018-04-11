$(window).scroll(function(e) {
  if($(window).scrollTop() < 80) {
    $(".navbar").addClass("top");
  } else {
    $(".navbar").removeClass("top");
  }
});
