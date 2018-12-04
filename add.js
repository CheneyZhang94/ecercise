$(document).ready(function() {

    var t1 = "<p>hello1</p>"
    var t2 = $("<p></p>").text("hello2");
    var t3 = document.createElement("p");
    t3.innerHTML = "hello3";
    $("body").append(t1, t2, t3);

})