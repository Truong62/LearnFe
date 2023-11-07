import express from 'express'
import { router } from './router'

const app = express()

const port = 3000

app.get('/', (req, res) => {
  res.send('hello')
})

app.use('/demo', router)

app.listen(port, () => {
  console.log(`${port}`)
})
