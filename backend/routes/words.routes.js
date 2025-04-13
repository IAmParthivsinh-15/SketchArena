import { Router } from "express";
import { genWords } from "../controllers/words.controller.js";

const router = Router();

router.get("/words", genWords);

export default router;
