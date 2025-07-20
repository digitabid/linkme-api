import UsersController from "../controllers/UsersController";
import { Router } from "express";

const router = Router();

router.get("/", UsersController.getAllUsers);

export default router;