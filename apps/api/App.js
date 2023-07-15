'use strict'

require('dotenv').config()
require('./src/entity')
const express = require('express')
const app = express()
const nodeEnv = process.env.NODE_ENV || 'development'
const port = process.env.PORT || 4000
const routers = require('./src/routes')
const cors = require('cors')
// const cookieParser = require('cookie-parser')
const { logger } = require('./src/utils')
const path = require('path')

app.listen(port, () => {
  // console.log(`Server is running in ${nodeEnv} mode on port ${port}`)
  logger.info(`Server is running in ${nodeEnv} mode on port ${port}`)
})

// app.use('/public', express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true, limit: '10mb' }))
app.use(express.json({ limit: '10mb' }))
// app.use(cookieParser())
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }))

app.use('/api', routers)
