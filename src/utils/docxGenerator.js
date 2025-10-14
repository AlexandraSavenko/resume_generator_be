import { Document, Paragraph, Packer, TextRun } from 'docx';

export const generateDocx = async (data) => {
  const { name, email, city, country, skills = [], experience = [] } = data;
  const doc = new Document({
    sections: [
      {
        properties: {},
        children: [
          new Paragraph({
            children: [new TextRun({ text: 'Resume', bold: true, size: 32 })],
            spacing: { after: 300 },
          }),
          new Paragraph({ text: name, heading: 'Heading1' }),
          new Paragraph({ text: `Email: ${email}` }),
          new Paragraph({ text: `Location: ${city}, ${country}` }),
          new Paragraph({
            text: 'Skills:',
            spacing: { before: 300, after: 100 },
          }),
          ...skills.map(
            (skill) =>
              new Paragraph({ text: `${skill}`, index: { left: 400 } }),
          ),
          new Paragraph({
            text: 'Experience:',
            spacing: { before: 300, after: 100 },
          }),
          ...experience.map(
            (el) =>
              new Paragraph({
                children: [
                  new TextRun({ text: `Company: ${el.company}`, bold: true }),
                  new TextRun({ text: `Position: ${el.role}`}),
                  new TextRun({ text: `${el.years} years`, break: 1}),

                ],
                spacing: {after: 200}
              }),
          ),
        ],
      },
    ],
  });
  const buffer = await Packer.toBuffer(doc);
  return buffer;
};
