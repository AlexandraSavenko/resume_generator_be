import { Document, Paragraph, Packer } from "docx";


export const generateDocx = async (data) => {
   const {name, city, country, skills, experience} = data;
    const doc = new Document({
        sections: [
            {
                properties: {},
                children: [
                    new Paragraph({text: name, heading: "Heading1"}),
                    new Paragraph({text: `Location: ${city}, ${country}`}),
                    new Paragraph({text: `Skills: ${skills}`}),
                    new Paragraph({text: `Experience: ${experience}`}),
                ]
            }
        ]
    });
    const buffer = await Packer.toBuffer(doc);
    return buffer;
}