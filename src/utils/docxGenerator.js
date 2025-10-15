import {
  Document,
  Paragraph,
  Packer,
  TextRun,
  BorderStyle,
  AlignmentType,
} from 'docx';

export const generateDocx = async (data) => {
  const {
    name,
    email,
    city,
    country,
    description,
    skills = [],
    experience = [],
    education=[]
  } = data;
const doc = new Document({
  sections: [
    {
      properties: {},
      children: [
        // --- Decorative top border ---
        new Paragraph({
          border: {
            bottom: {
              color: '000000',
              space: 1,
              value: BorderStyle.SINGLE,
              size: 6,
            },
          },
          spacing: { after: 300 },
        }),

        // --- Title ---
        new Paragraph({
          children: [new TextRun({ text: 'RESUME', bold: true, size: 32 })],
          alignment: AlignmentType.CENTER,
          spacing: { after: 400 },
        }),

        // --- Personal info ---
        new Paragraph({
          children: [new TextRun({ text: name || '', bold: true })],
          alignment: AlignmentType.CENTER,
          spacing: { after: 100 },
        }),
        new Paragraph({ text: `Email: ${email || ''}`, spacing: { after: 50 } }),
        new Paragraph({
          text: `Location: ${city || ''}, ${country || ''}`,
          spacing: { after: 200 },
        }),
        description ? new Paragraph({ text: description, spacing: { after: 50 } }) : null,

        // --- Skills ---
        new Paragraph({
          text: 'Skills:',
          spacing: { before: 300, after: 100 },
        }),
        ...(skills || []).map(
          (skill) =>
            new Paragraph({
              text: String(skill || ''),
              bullet: { level: 0 },
              spacing: { after: 50 },
            }),
        ),
        // --- Experience ---
        new Paragraph({
          text: 'Experience:',
          spacing: { before: 300, after: 100 },
        }),
        ...(experience || []).map(
          (el) =>
            new Paragraph({
              children: [
                new TextRun({
                  text: `Company: ${el?.company || ''}`,
                  bold: true,
                  break: 1,
                }),
                new TextRun({ text: `Position: ${el?.position || ''}`, break: 1 }),
                new TextRun({
                  text: `Years of experience: ${el?.years || ''}`,
                  italics: true,
                  break: 1,
                }),
              ],
              spacing: { after: 150 },
            }),
        ),

        // --- Education ---
        new Paragraph({
          text: 'Education:',
          spacing: { before: 300, after: 100 },
        }),
        ...(education || []).map(
          (el) =>
            new Paragraph({
              children: [
                new TextRun({ text: el?.place || '', bold: true, break: 1 }),
                new TextRun({
                  text: `Graduated in: ${el?.grYear || ''}`,
                  break: 1,
                }),
              ],
              spacing: { after: 150 },
            }),
        ),
      ].filter(Boolean), // filters out nulls (important!)
    },
  ],
});

  const buffer = await Packer.toBuffer(doc);
  return buffer;
};
