import express from 'express';
import {renderPage, postSentence} from '../controllers/sentences.js'

const router = express.Router();

router.get("/", renderPage)
router.get("/:pos", renderPage)
router.post("/:pos", postSentence)
 
export default router;