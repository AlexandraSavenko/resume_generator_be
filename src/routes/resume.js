import {Router} from "express";
import { generateResume} from "../controllers/resume.js";

const resumeRouter = Router();

resumeRouter.post("/", generateResume);
export default resumeRouter;