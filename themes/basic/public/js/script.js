// add your code here

$(window).load(function() {
    $('.flexslider').flexslider({
        animation: "slide",
        slideshow: false,
        directionNav: false
    });

    $(".profile-prospect").click(function(){
        $("#region-panel").hide();
    });

    $("#region-dropdown").click(function(){
        $("#region-panel").show();
     });




//    var closeForm = function (event) {
//        event.preventDefault();
////        $("#region-panel").hide();
////        window.location.hash = '';
//        $("#region-dropdown").click(function(){
//            $("#region-panel").show();
//        });
//    };
//
//    $(document).keyup(function (e) {
//        if (e.keyCode == 27) { // esc
//            loaderFlag = false;
//            closeForm(e);
//        }
//    });
//
//    $(".profile-prospect").on("click touchstart", function (e) {
//        //loaderFlag = false;
//        closeForm(e);
//        window.location.hash = '';
//    });




});

//function hidecounty(){
//    $("#region-panel").hide();
//}
//
//
//$(document).ready(function() {
//    $("body").click(function () {
//        hidecounty()
//    });
//});

