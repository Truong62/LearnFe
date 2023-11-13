import { Request, Response, NextFunction } from 'express'

export const loginCalidator = (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body
  // console.log('Email:', email)
  // console.log('Password:', password)
  if (!email || !password) {
    return res.status(400).json({
      error: 'Both email and password are required.'
    })
  }
  next()
}
