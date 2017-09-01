console.log('data structures!')

// useless data values
// 'tiger'
// 'lion'
// 'bear'

// data values given to the array zoo 
var zoo = ['tiger', 'lion', 'bear']

// useless data values
// 'beatles'
// 'i wanna hold your hand'
// 1964

// put into an array
var song = ['beatles', 'i wanna hold your hand', 1964];
// these values have no context so its difficult to understand its purpose

// so we create an object
var songObject = {
  artist: 'beatles',
  title: 'i wanna hold your hand',
  'release year': 1964
}
// this gives our values some context and also allows us to create key pair values.

// get some data
// 'marissa', 346, 'elmo', 212, 'captain buckethead', 345

// organise this data
var candidates = [{
  name: 'marissa',
  votes: 346
}]

var candidatesAsAnObject = {
  marissa: 346,
  elmo: 212,
  captainBuckethead: 345
}

var letters = ['ab', 'bb', 'cb', 'db', 'eb'];
var numLett = [1, 2, 3, 4, 'ab', 'bb', 'cb', 4];
