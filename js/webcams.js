$(function() {
  $('.webcams .webcam').each(function() {
    setWebcam($(this), $(this).attr('data-name'));
  });

  $('.webcams .webcam-main').each(function() {
    setWebcam($(this), $(this).attr('data-name'));
  });

  $('.webcams .webcam').click(function(e) {
    setWebcam($('.webcams .webcam-main'), $(this).attr('data-name'));
  });

});

function setWebcam(webcam, cam_name, small = false) {
  const link = $('.webcam-main').attr('data-link');
  var add = "";
  if(small) add = "-small";
  var src = link.replace('<cam_name>', cam_name + add);
  webcam.find('img').attr('src', src);
}

