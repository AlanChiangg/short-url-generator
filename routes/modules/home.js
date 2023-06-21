const express = require('express')
const router = express.Router()
const URL = require('../../models/URL')
const generateShortUrl = require('../../public/javascripts/generateShortUrl')

router.get('/', (req, res) => {
  res.render('index')
})

// 轉換短網址新增到DB
router.post('/', (req, res) => {
  const fullUrl = req.body.fullUrl
  const shortUrl = 'http://localhost:3000/' + generateShortUrl()
  if (!fullUrl) return res.redirect("/")

  URL.findOne({ fullUrl })
    .then(url => {
      if (url) {
        // 如果找到對應的url，則直接使用該url的shortUrl來渲染。
        res.render('shortenUrl', { fullUrl, shortUrl: url.shortUrl })
      } else {
        URL.create({ fullUrl, shortUrl })
          .then(newUrl => {
            res.render('shortenUrl', { fullUrl, shortUrl })
          })
          .catch(err => console.log('Error creating new URL:', err))
      }
    })
    .catch(err => console.log('Error finding URL:', err))
})


// 將短網址連至原網址
router.get('/:radomCode', (req, res) => {
  const radomCode = req.params.radomCode
  const shortUrl = 'http://localhost:3000/' + radomCode
  URL.findOne({ shortUrl })
    .then(url => {
      if (!url) return res.redirect("/")
      res.redirect(url.fullUrl)
    })
    .catch(err => console.log(err))
})

module.exports = router