function theBeatlesPlay(musicians, instruments) {
  let array = [];
  for (var i = 0; i < musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}

function johnLennonFacts(array){
  var newArray = []
  var i = 0;
  while (i < array.length) {
    newArray.push(`${array[i]}!!!`)
    array++
  }
  return newArray
}
