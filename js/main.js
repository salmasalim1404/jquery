$('.openslider').click(function(){
    $('.slider').css('left' , '0');

})
$('.icon-x').click(function(){
    $('.slider').css('left' , '-270px');
})


$('.duration h3').click(function(){
    $(this).next().slideToggle();
    $('.duration div').not($(this).next()).slideUp();
})

$('.slider ul a[href^="#"]').click(function () {
    const offsetsection = $(this).attr('href');
    const section = $(offsetsection).offset().top;
    $('html , body').animate({scrollTop : section} , 1000)
})





var countDownDate = new Date("Jan 30, 2024 15:37:25").getTime();

var x = setInterval(function() {



  var now = new Date().getTime();


  var distance = countDownDate - now;


  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);


  document.getElementById("time").innerHTML = `
  <div class="col-md-3 text-white fw-bolder fs-4 d-flex align-items-center justify-content-center">${days} D</div>
  <div class="col-md-3 text-white fw-bolder fs-4 d-flex align-items-center justify-content-center">${hours} H</div>
  <div class="col-md-3 text-white fw-bolder fs-4 d-flex align-items-center justify-content-center">${minutes} M</div>
  <div class="col-md-3 text-white fw-bolder fs-4 d-flex align-items-center justify-content-center">${seconds} S</div>
  </div>`;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);



$("textarea").keyup(function(){
    let valUe = $(this).val().length;
    $('#count').text(100 - valUe)
})