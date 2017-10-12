$(document).ready(function() {
  $("button#meow").click(function() {
    $("ul#cat").prepend("<li>Meowww!</li>");
  });

  $("button#purr").click(function() {
    $("ul#cat").prepend("<li>Purrrrrrr</li>");
  });

  $("button#hiss").click(function() {
    $("ul#cat").prepend("<li>Hissssssss!</li>");
  });

  $("button#woof").click(function() {
    $("ul#dog").prepend("<li>Woof! Woof! </li>");
  });

  $("button#growl").click(function() {
    $("ul#dog").prepend("<li>GrrrRRRRRrrrrrrr!</li>");
  });

  $("button#yip").click(function() {
    $("ul#dog").prepend("<li>Yip yip yip!</li>");
  });
});
