import express from 'express'
import serveIndex from 'serve-index'
import * as url from 'url'
import bodyParser from 'body-parser'

import showsRouter from './shows-api.js'
import config from './config.json' assert { type: 'json' }
const _dirname = url.fileURLToPath(new URL('.', import.meta.url))

const app = express()

// serve workspaces and corrections for first labs
app.get('/', serveIndex(_dirname + '/../..', { icons: true }))
app.use(
  '/workspaces',
  express.static(_dirname + '/../../workspaces'),
  serveIndex(_dirname + '/../../workspaces', { icons: true })
)
app.use(
  '/corrections',
  express.static(_dirname + '/../../corrections'),
  serveIndex(_dirname + '/../../corrections', { icons: true })
)

// serve images of films (url in beta series change often so we have the images locally)
app.use('/posters', express.static(_dirname + '/../posters'))

// Add body-parser
app.use(bodyParser.json())
app.use(function addCorsHeaders(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})

showsRouter(app)

const listenOn = process.env.PUBLIC_DNS || 'localhost'
app.listen(config.port, listenOn, (err) => {
  if (err) {
    console.error(err)
  }

  console.info(`Server listening on : http://${listenOn}:${config.port}`)
})
