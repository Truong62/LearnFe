import { Request, Response, NextFunction } from 'express'

export const loginController = (req: Request, res: Response) => {
  const { email, password } = req.body
  if (email === 'test@example.com' && password === '123') {
    return res.json({
      message: 'login'
    })
  }
  return res.status(400).json({
    error: 'failed'
  })
}
