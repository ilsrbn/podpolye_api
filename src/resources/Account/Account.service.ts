import { Request, Response } from "express";
import { AccountModel } from "./Account.model";
import DS from "../../db";
import bcrypt from 'bcrypt'

const AccountRepo = DS.getRepository(AccountModel);

export const logout = async (req: Request, resp: Response) => {
  try {
    if (req.session) {
      req.session.destroy(() => { })
    } else {
      resp.sendStatus(200)
    }
  } catch (e) {
    console.log(e);
  }
}

export const login = async (req: Request, resp: Response) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) resp.status(400).send({ message: "Username and Password are required" })
    const user = await AccountRepo.findOneOrFail({
      where: {
        username
      },
      select: {
        username,
        password,
      }
    })
    const isMatch = await comparePasswords(password, user.password)
    if (!isMatch) resp.status(401).send({ message: "Invalid credentials" })
    req.session.user = {
      username: user.username,
      id: username.id
    }
    resp.send(user)

  } catch (e) {
    console.log(e);
    resp.status(401).send({ message: "Invalid credentials" })
  }
}

export const createAccount = async (req: Request, resp: Response) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) resp.status(400).send({ message: "Username and Password are required" })
    const newUser = new AccountModel();
    newUser.username = username;
    newUser.password = hashPassword(password)

    await AccountRepo.save(newUser);
    resp.status(201).send(newUser);
  } catch (e) {
    console.log(e);
  }
};

const hashPassword = (oldPassword: string): string => {
  const password = bcrypt.hashSync(oldPassword, 8)
  return password
}

const comparePasswords = (passFromJSON: string, passFromDB: string) => {
  return bcrypt.compare(passFromJSON, passFromDB)
}