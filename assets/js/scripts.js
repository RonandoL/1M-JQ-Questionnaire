// click on the question
$(".question").click(function() {
  $(this).next().fadeToggle("fast");  // answer appears/disappears (next sibling)
  $(this).children().toggleClass("collapse");  // arrows appear/disappear (child)
  $("#bear").animate({left: '300px', opacity: '0.475'}, "slow"); // animate: 2 styles
  $("#camaro").animate({left: '300px'}, 1700); // animate: 1 style
  $("#harly-48").animate({opacity: '0.70'}, 1200); // animate: 1 style
  $("#cherries").animate({left: '400px', height: '230px', width: '225px' }, 3200, "linear"); // animate: 1 style

});
