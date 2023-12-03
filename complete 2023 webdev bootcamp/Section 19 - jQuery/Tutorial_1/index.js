//$("h1").addClass("big-title margin-50");


// document.querySelector("button").innerHTML = "Don't click me";
// $("button").html("<em>Click me</em>"); /* if you replace html with text then it will also include the tags */
// $("button").eq(0).text("Don't click me!");
// $("button:first").text("Don't click me!");
// $("button").slice(1, 4).text("Don't click me");


// console.log($("img").attr("src"));
// $("a").attr("href", "https://www.yahoo.com");


/*
$("h1").click(function() {
    $("h1").css("color", "purple")
});
*/


/*
$("button").click(function() {
    $("h1").css("color", "purple");
});
*/


/*
$("input").keypress(function(event) {
    console.log(event.key);
});
*/


/*
$("input").keypress(function(event) {
    $("h1").text(event.key);
});
*/


/*
$("h1").on("mouseover", function() {
    $("h1").css("color", "purple");
});
*/


/*
 $("button").on("click" ,function() {
  //$("h1").toggle(100);  // toggle can also be left empty
  //$("h1").fadeOut();
  //$("h1").fadeToggle();
  //$("h1").slideUp();
  //$("h1").slideDown();
  $("h1").slideToggle();
 });
 */


/*
 $("button").on("click" ,function() {
    $("h1").animate({margin: "20%"}); // this must be a numerical value
 });
 */



 $("button").on("click" ,function() {
    $("h1").slideUp().slideDown().animate({opacity: 0.5});
 });