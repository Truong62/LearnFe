import express from 'express'
import Userrouter from './routes/users.router'
import databaseSv from './services/database'

const app = express()
const port = 3000
app.use(express.json())
app.use('/user', Userrouter)

// app.get('/', (req, res) => {
//   res.send('hello')
// })
databaseSv.run()
app.listen(port, () => {
  console.log(`${port}`)
})
