const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
const upperCaseLetters = lowerCaseLetters.toUpperCase()
const numbers = '1234567890'

function generateShortUrl() {
  let shortUrl = ''
  for (let i = 0; i < 5; i++) {
    let allCharacter = [...lowerCaseLetters, ...upperCaseLetters, ...numbers]
    shortUrl += allCharacter[Math.floor(Math.random() * allCharacter.length)]
  }
  return shortUrl
}

module.exports = generateShortUrl