import expect from 'expect';


const testAddTweet = () => {
  const currentArray = [{text: "pio pio pio"}]
  const newArray = [{text: "pio pio pio"}, {text: "los pollitos dicen"}]
  const action = {type: 'ADD', text: "los pollitos dicen"}
  
  expect(tweets(currentArray, action)).toEqual(newArray)
}

const testRemoveTweet = () => {
  const currentArray = [{text: "pio pio pio"}, {text: "los pollitos dicen"}]
  const newArray = [{text: "los pollitos dicen"}]
  const action = {type: 'REMOVE', index: 0}
  
  expect(tweets(currentArray, action)).toEqual(newArray)
}

testAddTweet()
testRemoveTweet()

document.body.innerHTML = "<h1>¡Viva! Todas las pruebas pasaron</h1>"
