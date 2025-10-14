import { createResumeService } from "../services/resume.js";

export const generateResume = async (req, res) => {
    console.log(req.body)
    const docBuffer = await createResumeService(req.body);
    res.setHeader("Content-Type", "application/vnd.openxmlformats-officedocument.wordprocessingml.document");
    res.setHeader("Content-Disposition", "attachment; filename=resume.docx");
        res.send(docBuffer)
}