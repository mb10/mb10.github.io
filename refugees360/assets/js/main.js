if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    $(document).ready(function() {
        $("body").css("background-image","none");

    });


}



$(document).ready(function() {
    $(".tinyPlanetHome").hover(
        function() {
            $(this).removeClass("shrink");
            $(this).addClass("expand");
        },
        function() {
            $(this).removeClass("expand");
            $(this).addClass("shrink");
        }
    );

    $(".profPlanet").hover(
        function() {
            $(this).removeClass("shrink");
            $(this).addClass("expand");
        },
        function() {
            $(this).removeClass("expand");
            $(this).addClass("shrink");
        }
    );
    // $(".tinyPlanetHome").hover(
    //     function() {
    //         var larger = $(this).height() * 1.1; 
    //         $(this).animate({"height": larger}, 300);
    //     },
    //     function() {
    //         var smaller = $(this).height() / 1.1; 
    //         $(this).animate({"height": smaller}, 300);
    //     }
    // );

    // $("tinyPlanetHome").css({"animation":"planetWobble"});

    var menu = {};

});
