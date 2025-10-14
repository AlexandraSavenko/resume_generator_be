import { createResumeService, downloadResumeService } from "../services/resume.js";
import { resumeSchema } from "../validation/resume.js";
import fs from "fs";

export const generateResume = async (req, res) => {
    console.log(req.body)
    const parseResult = resumeSchema.safeParse(req.body);
    if(!parseResult.success){
        return res.status(400).json({
            error: parseResult.error.message
        })
    }
    
    const fileName = await createResumeService(parseResult.data);
   res.json({status: 200, message: "Resume created", fileName})
}

export const downloadResume = (req, res) => {
const {fileName} = req.params;

const filePath = downloadResumeService(fileName)
if(!filePath){
    return res.status(404).json({error: "File not found"})
}
res.download(filePath, "resume.docx", (err) => {
    if(err){
        console.error(err)
        return res.status(500).json({error: "Failed to download file"})
    }
    
    fs.unlink(filePath, (unlinkErr) => {
    if(unlinkErr) console.error("Failed to delete file:", unlinkErr)
});
})

}