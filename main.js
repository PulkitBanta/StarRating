// Add this code to your existing JS file
$(document).ready(function (){
    // setting the stars color on clicking the stars
    $("span").click(function() {
        $(this).prevAll().css('color', 'orange'), $(this).css('color', 'orange');
        $(this).nextAll().css('color', 'black');
    });

    // to color the stars on hovering over them
    $('span').mouseover(function() {
        $(this).prevAll().addClass('checked'), $(this).addClass('checked');
        $(this).mouseleave(function() {
            $('span').removeClass('checked');
        });
    });
})