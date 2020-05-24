$(document).ready(function () {
  //Всплывающее меню
  jQuery('.header-wrap-menu ul li.menu-item-has-children').hover(function(){
    jQuery(this).children('ul').slideDown(100);
  }, function(){
    jQuery(this).children('ul').slideUp(100);
  });

  jQuery('.mob-menu').on('click', function() { 
    jQuery(this).addClass('mob-menu-active');
    jQuery('.header-wrap-menu').toggleClass('header-wrap-menu-active');
    jQuery('.header-wrap-menu').slideToggle(300);
  });
  jQuery('.close-mob').on('click', function() { 
    jQuery(this).removeClass('mob-menu-active');
    jQuery('.header-wrap-menu').removeClass('header-wrap-menu-active');
    jQuery('.header-wrap-menu').slideUp(300);
  });
});