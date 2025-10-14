import { createResumeService } from "../services/resume.js";
import { resumeSchema } from "../validation/resume.js";

export const generateResume = async (req, res) => {
    const parseResult = resumeSchema.safeParse(req.body);
    if(!parseResult.success){
        return res.status(400).json({
            error: parseResult.error.message
        })
    }
    const data = parseResult.data
    const docBuffer = await createResumeService(data);
   
    res.setHeader("Content-Type", "application/vnd.openxmlformats-officedocument.wordprocessingml.document");
    res.setHeader("Content-Disposition", "attachment; filename=resume.docx");
        res.send(docBuffer)
}