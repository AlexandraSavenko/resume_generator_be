import {Router} from "express";
import { generateResume} from "../controllers/resume.js";

const resumeRouter = Router();

resumeRouter.post("/resume", generateResume);
export default resumeRouter;