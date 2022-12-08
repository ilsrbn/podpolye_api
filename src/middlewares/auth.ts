import { Request, Response, NextFunction } from "express"

export const isLoggedIn = (req: Request, resp: Response, next: NextFunction) => {
  console.log(req.session);

  if (req.session && req.session.user) {
    next()
  } else {
    resp.sendStatus(401)
  }
}