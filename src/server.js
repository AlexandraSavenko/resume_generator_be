import express from "express";
import cors from "cors"
import resumeRouter from "./routes/resume.js";

export const setupServer = () => {
   const app = express();

app.use(cors())
app.use(express.json())

app.use('/resume', resumeRouter)
app.listen(3000, () => console.log("Web-server successfully running on 3000 port")) 
}
