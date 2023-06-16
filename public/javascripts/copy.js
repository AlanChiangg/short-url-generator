function copy() {
  const copyURL = document.querySelector('#generatedURL')
  navigator.clipboard.writeText(copyURL.innerText)
    .then(() => alert('Short URL copied to clipboard!'))
    .catch(error => console.log(error))
}
