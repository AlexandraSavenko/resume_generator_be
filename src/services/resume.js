import { generateDocx } from "../utils/docxGenerator.js"

export const createResumeService = async (data) => {
    const buffer = await generateDocx(data)
    return buffer;
}