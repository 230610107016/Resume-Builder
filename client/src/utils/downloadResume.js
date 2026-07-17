import html2pdf from "html2pdf.js";

export const downloadResume = (fileName = "Resume") => {
  const resumeElement = document.getElementById("resume-preview");

  if (!resumeElement) {
    console.error("Resume preview not found!");
    return;
  }

  const options = {
    margin: 0,

    filename: `${fileName}.pdf`,

    image: {
        type: "jpeg",
        quality: 1,
    },

    html2canvas: {
        scale: 3,
        useCORS: true,
        scrollY: 0,
    },

    jsPDF: {
        unit: "px",
        format: [794, 1123],
        orientation: "portrait",
    },

    pagebreak: {
        mode: ["css", "avoid-all"],
    },
};

  html2pdf()
    .set(options)
    .from(resumeElement)
    .save();
};