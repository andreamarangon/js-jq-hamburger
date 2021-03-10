//prendo .fas.fa-bars (hamburger) e faccio in modo cha al
//click venga tolto da hamburger-menù la classe .active
$(".fas.fa-bars").click(function() {
  $(".hamburger-menu").toggleClass("active");
});

//prendo .fas.fa-times (X) e faccio in modo cha al
//click venga aggiunto ad hamburger-menù la classe .active
$(".fas.fa-times").click(function() {
  $(".hamburger-menu").toggleClass("active");
});
