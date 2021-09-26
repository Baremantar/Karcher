$(".catalog").click(function() {
    console.log('sad')
  if ($(".shadow").hasClass('disable')) {
    $(".shadow").removeClass('disable');
  } else {
    $(".shadow").addClass('disable');
  }
});
