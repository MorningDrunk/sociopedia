import express from "express";
import {
  getUser,
  getUserFriends,
  addRemoveFriend,
} from "../controllers/users.js";
import { verifiedToken } from "../middleware/auth.js";

const router = express.Router();

// READ
router.get("/:id", verifiedToken, getUser);
