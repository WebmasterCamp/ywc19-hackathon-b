'use strict'

const express = require('express')
const router = express.Router()


const fs = require('fs')

router.get('/image', (req, res) => {
  const { path, file_name } = req.query
  const allow_filetype = ['jpg', 'jpeg', 'png', 'gif', 'bmp']
  let isFileExists = null

  for (let i = 0; i < allow_filetype.length; i++) {
    const type = allow_filetype[i]
    const is_exists = fs.existsSync(`public/image/${path}/${file_name}.${type}`)

    if (is_exists) {
      isFileExists = `public/image/${path}/${file_name}.${type}`
      break
    }
  }

  if (!isFileExists) {
    return res.json({
      status: false
    })
  }

  let file = fs.readFileSync(isFileExists, 'base64')

  return res.json({ status: true, data: 'data:image/gif;base64,' + file })
})

// router.post('/auth/sing-in', AuthValidator.singIn, AuthController.singIn)


module.exports = router
