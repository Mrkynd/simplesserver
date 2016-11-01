$(document).ready(function(){
  $('.item').click(function(){
    $('.item').removeClass("active teal");
    $(this).addClass("active teal");
  });
});

$(".menu .item").tab();

$('.ui.accordion').accordion();
