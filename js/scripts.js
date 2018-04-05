// var newRange = [];
function generateRange(number) {
  range = [];
  for (var i=2; i<=number; i++) {
    range.push(i);
  }
  return range;
}

function excludeNonPrime(range) {
  range.forEach(function(element) {
    var newRange = [1];
    if (element === 0 || element === 1) {
            return false;
        }
        for (var i = 2; i < element; i++) {
            if (element%i === 0) {
                return false;
            }
        }
        return true;
        newRange.push(element);
    });
  }
//     var index = 0;
//     var i = 2;
//     if (element>2 && element <=range.length) {
//       while (i<element) {
//         if (element%i ===0) {
//           index = range.indexOf(element);
//           range.splice(index,1);
//           i++;
//         } else {}
//       }
//     }
//     });
//   return range;
// }
  //
  // for (var j=0; j<=range.length; j++) {
  //   for (var p=2; p<range[j]; p++) {
  //     if ((range[j]%p) === 0) {
  //       break;
  //     } else if ((range[j]%p) !== 0) {
  //       newRange.push(range[j]);
  //
  //     }
  //   }
  // }
  // return newRange;

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
