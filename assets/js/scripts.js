// click on the question
$(".question").click(function() {
  $(this).next().fadeToggle("fast");  // answer appears/disappears (next sibling)
  $(this).children().toggleClass("collapse");  // arrows appear/disappear (child)
});
