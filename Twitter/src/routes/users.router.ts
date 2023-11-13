import { Router } from 'express'
import { loginCalidator } from '../middlewares/users.middleware'
import { loginController } from '../controllers/user'
const Userrouter = Router()

// Userrouter.use((req, res, next) => {
//   console.log('time: ', Date.now())
//   next()
// })

Userrouter.post('/login', loginCalidator, loginController)
export default Userrouter
