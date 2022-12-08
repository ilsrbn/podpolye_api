import express from "express";

import {
  createAccount,
  login,
} from "./Account.service";

const AccountController = express.Router();

AccountController.post("/login", login);

AccountController.post("/register", createAccount);

export default AccountController;
