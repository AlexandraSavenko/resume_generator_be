import { generateDocx } from "../utils/docxGenerator.js"
import fs from "fs";
import path from "path"

export const createResumeService = async (data) => {
    const buffer = await generateDocx(data)
    const fileName = `resume_${Date.now()}.docx`;
    const filePath = path.join(process.cwd(), "generated", fileName);
    fs.writeFileSync(filePath, buffer)
    return fileName;
}

export const downloadResumeService = (fileName) => {
    
    const filePath = path.join(process.cwd(), "generated", fileName);
    console.log(filePath)
    console.log(fs.existsSync(filePath))

    if(!fs.existsSync(filePath)){
        return null;
    }
    return filePath;
}