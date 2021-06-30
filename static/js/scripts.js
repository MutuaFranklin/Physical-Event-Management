$(document).ready(function(){
    $('.event-list').carousel({
      interval: 2000
    })
 
  
    $('.service-list').carousel({
      interval: false
    })


    $(".card-caption").hide().fadeIn(4000);
    $(".btn").hide().fadeIn(4000);

    

// Service list card hover effect
    $("#service1").hover(
      function () {
        $("#service1 .service-description").slideUp('1500').show('1000');
        $("#service1 .service-description").css("display", "flex");
        $("#service1 .service-description #text").hide().slideDown(2000).show();


      },
      function () {
        $("#service1 .service-description").slideDown('2000').hide('2000');
        
      },
    );

    $("#service2").hover(
      function () {
        $("#service2 .service-description").slideUp('1500').show('1000');
        $("#service2 .service-description").css("display", "flex");
        $("#service2 .service-description #text").hide().slideDown(2000).show();


      },
      function () {
        $("#service2 .service-description").slideDown('1500').hide('1000');
      },
    );

    $("#service3").hover(
      function () {
        $("#service3 .service-description").slideUp('1500').show('1000');
        $("#service3 .service-description").css("display", "flex");
        $("#service3 .service-description #text").hide().slideDown(2000).show();


      },
      function () {
        $("#service3 .service-description").slideDown('1500').hide('1000');
      },
    );

    $("#service4").hover(
      function () {
        $("#service4 .service-description").slideUp('1500').show('1000');
        $("#service4 .service-description").css("display", "flex");
        $("#service4 .service-description #text").hide().slideDown(2000).show();


      },
      function () {
        $("#service4 .service-description").slideDown('1500').hide('1000');
        
      },
    );

    $("#service5").hover(
      function () {
        $("#service5 .service-description").slideUp('1500').show('1000');
        $("#service5 .service-description").css("display", "flex");
        $("#service5 .service-description #text").hide().slideDown(2000).show();


      },
      function () {
        $("#service5 .service-description").slideDown('1500').hide('1000');
      },
    );

    $("#service6").hover(
      function () {
        $("#service6 .service-description").slideUp('1500').show('1000');
        $("#service6 .service-description").css("display", "flex");
        $("#service6 .service-description #text").hide().slideDown(2000).show();


      },
      function () {
        $("#service6 .service-description").slideDown('1500').hide('1000');
      },
    );


  });    



  // $(document).ready(function () {
  //   $("#work1").hover(
  //     function () {
  //       $("#work1 .solid-border").show();
  //     },
  //     function () {
  //       $("#work1 .solid-border").hide();
  //     },
      
  //   );
  // });