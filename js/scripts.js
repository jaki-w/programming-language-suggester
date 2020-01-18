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
    $("#questions").slideUp();
    $("#suggestion").show();
    $("#nameInput").text(name);

    var valOne = parseInt($("input:radio[name=toothbrush]:checked").val());
    var valTwo = parseInt($("input:radio[name=season]:checked").val());
    var valThree = parseInt($("input:radio[name=shape]:checked").val());
    var valFour = parseInt($("input:radio[name=creature]:checked").val());
    var valFive = parseInt($("input:radio[name=house]:checked").val());
    var score = valOne+valTwo+valThree+valFour+valFive;

    if (score <= 9) {
      $("#languageSuggestion").text("JavaScript");
    }
    else if (score > 9 && score <= 12) {
      $("#languageSuggestion").text("Ruby");
    }
    else if (score > 12 && score <=15) {
      $("#languageSuggestion").text("C#");
    }

  });
});
