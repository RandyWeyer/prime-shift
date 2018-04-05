

function generateRange(number) {
  range = [];
  for (var i=2; i<=number; i++) {
    range.push(i);
  }
  return range;
}

function excludeNonPrime(range) {
  var newRange = [];
  for (var j=0; j<range.length; j++) {
    var jIsPrime = true;
    for (var prime=2; prime<range[j]/2; prime++) {
      if ((range[j]%prime) === 0) {
        jIsPrime = false;
        break;
      }
    }
    if (jIsPrime) {
        newRange.push(range[j]);
    }
  }
  return newRange;
}

$(document).ready(function() {
  $("form#prime").submit(function(event) {
    event.preventDefault();
    newOutput = "";

    var inputNumber = parseInt($("#number").val());

    var inputRange = generateRange(inputNumber);
    console.log(inputRange);

    var newOutput = excludeNonPrime(inputRange);
    console.log(newOutput);

    $(".output").text(newOutput);
    $("#result").show();
  });
});
