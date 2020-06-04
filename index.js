function theBeatlesPlay(musicians, instruments) {
  let array = [];
  for (var i = 0; i < musicians.length; i++) {
    array.push(`${musicians} plays ${instruments}`)
  }
  return array
}
