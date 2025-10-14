import {Router} from "express";
import { downloadResume, generateResume, } from "../controllers/resume.js";

const resumeRouter = Router();

resumeRouter.post("/", generateResume);

resumeRouter.get("/download/:fileName", downloadResume);
export default resumeRouter;