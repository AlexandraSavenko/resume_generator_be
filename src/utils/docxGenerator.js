import { Document, Paragraph, Packer, TextRun, BorderStyle, AlignmentType } from 'docx';

export const generateDocx = async (data) => {
  const { name, email, city, country, skills = [], experience = [] } = data;
  const doc = new Document({
  sections: [
    {
      properties: {},
      children: [
        new Paragraph({
          border: {
            bottom: { color: "000000", space: 1, value: BorderStyle.SINGLE, size: 6 },
          },
          spacing: { after: 300 },
        }),
        new Paragraph({
          children: [
            new TextRun({ text: "RESUME", bold: true, size: 32 }),
          ],
          alignment: AlignmentType.CENTER,
          spacing: { after: 400 },
        }),

        new Paragraph({ text: name, heading: "Heading1", spacing: { after: 100 } }),
        new Paragraph({ text: `Email: ${email}`, spacing: { after: 50 } }),
        new Paragraph({ text: `Location: ${city}, ${country}`, spacing: { after: 200 } }),

        new Paragraph({
          text: "Skills:",
          heading: "Heading2",
          spacing: { before: 300, after: 100 },
        }),
        ...skills.map(
          (skill) =>
            new Paragraph({
              text: skill,
              bullet: { level: 0 },
              spacing: { after: 50 },
            })
        ),
        new Paragraph({
          text: "Experience:",
          heading: "Heading2",
          spacing: { before: 300, after: 100 },
        }),
        ...experience.map(
          (el) =>
            new Paragraph({
              children: [
                new TextRun({ text: `Company: ${el.company}`, bold: true, break: 1 }),
                new TextRun({ text: ` Position: ${el.position}`, break: 1 }),
                new TextRun({ text: `Years of experience: ${el.years}`, italics: true, break: 1 }),
              ],
              spacing: { after: 150 },
            })
        ),
      ],
    },
  ],
});
  const buffer = await Packer.toBuffer(doc);
  return buffer;
};
