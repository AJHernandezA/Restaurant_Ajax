$(function(){

    $("#navbrToggle").blur(function(event){
        var screenWidth = window.innerWidth;
        if (screenWidth < 991){
            $("#navbarNav").collapse('hide');
        }
    });
});