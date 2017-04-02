$(document).ready(function(){
    // Hide, tada delay puse sec, tada daryt fadeIn
    // Kodel? kad panaudot dar 3 funkcijas
    $("body").hide().delay(500).fadeIn(1000);
    $(".gameListItem").delay(800).each(function(index){
        $(this).delay(100*index).animate({
            top:'-10px',
            opacity: '0.5'
        });
    })
    $(".gameListItem").delay(110).each(function(index){
        $(this).delay(100*index).animate({
            top:'10px',
            opacity: '1.0'
        });
    })
});