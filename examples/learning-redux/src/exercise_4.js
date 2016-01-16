import expect from 'expect';

const testInitialState = () => {
  const newTweet = {}
  expect(tweets(undefined, {})).toEqual(newTweet)
}

const testHeartTweet = () => {
  const currentTweet = {text: "pio pio pio", id: 1, heartCount: 2}
  const newTweet = {text: "pio pio pio", id: 1, heartCount: 3}
  const action = {type: 'HEART'}
  
  expect(tweets(currentTweet, action)).toEqual(newTweet)
}

testInitialState()
testHeartTweet()

document.body.innerHTML = "<h1>¡Viva! Todas las pruebas pasaron</h1>"
