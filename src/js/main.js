import $ from 'jquery';
import 'bootstrap'; // j'importe bootstrap.js depuis node_modules
// import owlCarousel from 'owl.carousel'; /* si il y a un carousel */



$(document).ready(function () {

  //Smooth scroll main nav
  function scrollNav() {
    $('.navbar a').click(function(){  
      //Toggle Class
      $(".active").removeClass("active");      
      $(this).closest('li').addClass("active");
      var theClass = $(this).attr("class");
      $('.'+theClass).parent('li').addClass('active');
      //Animate
      $('html, body').stop().animate({
          scrollTop: $( $(this).attr('href') ).offset().top - 60
      }, 400);
      return false;
    });
    $('.scrollTop a').scrollTop();
  }
  scrollNav();

  //smooth scroll card
  function scrollCard() {
    $('.card a').click(function(){  
      //Toggle Class
      $(".active").removeClass("active");      
      $(this).closest('li').addClass("active");
      var theClass = $(this).attr("class");
      $('.'+theClass).parent('li').addClass('active');
      //Animate
      $('html, body').stop().animate({
          scrollTop: $( $(this).attr('href') ).offset().top - 60
      }, 400);
      return false;
    });
    $('.scrollTop a').scrollTop();
  }
  scrollCard();

  //Smooth scroll menu interactif
  function scrollMenu() {
    $('.menu a').click(function(){  
      //Toggle Class
      $(".active").removeClass("active");      
      $(this).closest('li').addClass("active");
      var theClass = $(this).attr("class");
      $('.'+theClass).parent('li').addClass('active');
      //Animate
      $('html, body').stop().animate({
          scrollTop: $( $(this).attr('href') ).offset().top - 60
      }, 400);
      return false;
    });
    $('.scrollTop a').scrollTop();
  }
  scrollMenu();

  //Smooth scroll nav_footer
  function scrollNavFooter() {
    $('.nav_footer a').click(function(){  
      //Toggle Class
      $(".active").removeClass("active");      
      $(this).closest('li').addClass("active");
      var theClass = $(this).attr("class");
      $('.'+theClass).parent('li').addClass('active');
      //Animate
      $('html, body').stop().animate({
          scrollTop: $( $(this).attr('href') ).offset().top - 60
      }, 400);
      return false;
    });
    $('.scrollTop a').scrollTop();
  }
  scrollNavFooter();

  //Back to top
  $(window).scroll(function(){ 
    if ($(this).scrollTop() > 3600) { 
        $('#scroll').fadeIn(); 
    } else { 
        $('#scroll').fadeOut(); 
    } 
  }); 
  $('#scroll').click(function(){ 
    $("html, body").animate({ scrollTop: 0 }, 600); 
    return false; 
  }); 


});