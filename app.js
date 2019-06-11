window.addEventListener("load", function(){
    const loader = $(".loader");
    loader.className += " hidden";
});

$(document).ready(function() {

    setTimeout(function(){
        $(".loader").remove();
    }, 4000);


    var clicked = false;
    // hamburger menu
    $("#nav-toggle").on("click", function () {
        console.log("hello")
        this.classList.toggle("active");
        if (clicked === true) {
            console.log("clicked is true");
            closeNav();
        }
        else {
            console.log("clicked is false"); 
            openNav();
        }

    });

    function openNav() {
        $("#myNav").css("display", "block");
        clicked = true;
        $('.navvy').each(function(){
            $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
        });
    
        anime.timeline().add({
            targets: '.navvy .letter',
            translateY: [100,0],
            translateZ: 0,
            opacity: [0,1],
            easing: "easeOutExpo",
            duration: 1000,
            delay: function(el, i) {
                return 300 + 30 * i;
            }
        })
    }

    function closeNav() {
        $('.navvy').each(function(){
            $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
        });
        anime.timeline().add({
            targets: '.navvy .letter',
            translateY: [0,-100],
            opacity: [1,0],
            easing: "easeInExpo",
            duration: 1200,
            delay: function(el, i) {
              return 100 + 30 * i;
            }
        });
        $("#myNav").css("display", "none");
        clicked = false;
    }

    $("#nav-about").on("click", function() {
        console.log("howdy");
        $(".info").css("display", "block")
        $("#prof").css("display", "block")
        closeNav();
        
    });

    $("#nav-port").on("click", function() {
        console.log("howdy");
        closeNav();
    });

    $("#nav-contact").on("click", function() {
        console.log("howdy");
        closeNav();
    })

    $("#font").on("click", () => $(".info").css("display", "block"));

    $("")
    

});