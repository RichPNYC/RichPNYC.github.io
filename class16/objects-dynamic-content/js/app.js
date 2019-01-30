$('document').ready(function () {

  // Set the body's background color to equal the pageLoadData object's backgroundColor property
  $('body').css('background-color', pageLoadData.backgroundColor);
  // In .elem-1 set the background image, and the content inside .elem-1__title and .elem-1_date
  $('.elem-1').css('background', pageLoadData.elem1.backgroundImg);
  $('.elem-1__title').html(.pageLoadData.elem1.title);
  $('.elem-1__date').html(.pageLoadData.elem1.date);

  // In .elem-2 set the background image, and the content inside .elem-2__title and .elem-2_date
  $('.elem-2').css('background', elem2.backgroundImg)
  // In .elem-3 set the background image, and the content inside .elem-3__title and .elem-3_date
  $('.elem-3').css('background', elem3.backgroundImg)
  // In .elem-4 set the background image, and the content inside .elem-4__title and .elem-4_date
  $('.elem-4').css('background', elem4.backgroundImg)
  // Put the created at date from our data object into the footer's h1
  $(h1).html('background', elem4.backgroundImg)
})

