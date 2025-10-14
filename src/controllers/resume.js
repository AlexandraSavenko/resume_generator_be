import {createResumeDoc} from "../services/resume.js";

export const generateResume = async (req, res) => {
    const docBuffer = await createResumeDoc(req.body);
        res.send(docBuffer)
}