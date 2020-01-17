var valOne = $("input:radio[name=toothbrush]:checked").val();
var valTwo = $("input:radio[name=season]:checked").val();
var valThree = $("input:radio[name=shape]:checked").val();
var valFour = $("input:radio[name=creature]:checked").val();
var valFive = $("input:radio[name=house]:checked").val();
var score = valOne+valTwo+valThree+valFour+valFive;

$(document).ready(function() {
  $("#firstButton").click(function() {
    $("#intro").hide();
    $("#hello").show();
  });

  $("#secondButton").click(function() {
    event.preventDefault();
    $("#hello").hide();
    $("#questions").show();
  });

  $("#thirdButton").click(function() {
    event.preventDefault();
    var name = $("input#name").val();
    $("#questions").hide();
    $("#suggestion").show();
    $("#nameInput").text(name);
  });

});
