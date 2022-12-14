import { Request, Response, NextFunction } from "express"
import jwt from 'jsonwebtoken'

export const isLoggedIn = (req: Request, resp: Response, next: NextFunction) => {

  const authHeader = req.headers.authorization

  const token = authHeader && authHeader.split(' ')[1]
  if (token == null) return resp.sendStatus(401)
  const secret = process.env.ACCESS_SECRET || "hello"
  jwt.verify(token, secret, (err, user: any) => {
    if (err) return resp.sendStatus(403)
    req.query.username = user?.username
    next()
  })

}
