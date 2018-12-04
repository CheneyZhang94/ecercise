$(document).ready(function() {


    $("#p1").on("click", phidden);

});

function phidden(e) {

    $(this).hide();
}
$(document).ready(function() {


    $(".btn1").click(function() {

        alert($("#p1").text());

    });

});