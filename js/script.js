$(document).ready(function () {
    
$('.swatch').on('mouseover', function(){
$('#product-photo').attr('src','img/chair-'+ $(this).attr('id') +'@2x.jpg');
// this allows jquery to read which button you clicked on

$('.swatch').removeClass('selected') // changes hover class for border
$(this).addClass('selected')


})




});