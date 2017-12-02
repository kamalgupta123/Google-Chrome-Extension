//$(function(){
//  $('#name').keyup(function(){
//      $('#p').text($('#name').val());
//  }) 
//})
$(document).ready(function(){
     $('#name').keyup(function(){
      $('#greet').text($('#name').val());
         console.log('in');
});
});