import express from 'express'
const router = express.Router()
router.use((req, res, next) => {
  console.log('time: ', Date.now())
  next()
})

router.get('/test', (req, res) => {
  res.json({
    data: [
      {
        id: 1,
        text: 'hello world'
      }
    ]
  })
})
export { router }
