$(document).ready(function() {
    $('.ham-menu').on('click',  function(e){
       e.preventDefault();
       $('.nav').toggleClass('menu-show');
   });
 });