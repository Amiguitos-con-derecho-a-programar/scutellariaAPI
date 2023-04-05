import { Router } from "express";
import { 
    createUser,
    getScores
 } from "../controllers/posts.controller.js";

const router = Router();

router.get('/getScores', getScores);
router.post('/createUser', createUser);


export default router;