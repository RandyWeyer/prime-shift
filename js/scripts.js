
function generateRange(number) {
  range = [];
  for (var i=0; i<=number; i++) {
    range.push(i);
  }
  return range;
}

function excludeNonPrime(range) {
  var newRange = [];
  for (var j=2; j<=range.length; j++) {
    for (var p=0; p<j; p++) {
      if ((j%p) !== 0) {
        newRange.push(range[j]);
      }
    }
  }
  return newRange;
}

$(document).ready(function() {
  $("form#prime").submit(function(event) {
    event.preventDefault();

    var inputNumber = parseInt($("#number").val());

    var inputRange = generateRange(inputNumber);
    console.log(inputRange);

    var newOutput = excludeNonPrime(inputRange);
    console.log(newOutput);

    $("#answer").text(newOutput);
    $("#result").show();
  });
});
