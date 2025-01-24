import React from 'react';
import PersonalInfo from './components/PersonalInfo';
import Summary from './components/Summary';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Activities from './components/Activities';
import Education from './components/Education';
import Skills from './components/Skills';
import DownloadButton from './components/Download';
import resumeData from './data/resumeData.json';

const App = () => {
  const handleDownload = async () => {
    try {
      // Load jsPDF
      await new Promise((resolve) => {
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js';
        script.onload = resolve;
        document.head.appendChild(script);
      });

      const { jsPDF } = window.jspdf;
      const doc = new jsPDF({
        format: 'a4',
        unit: 'mm',
        orientation: 'portrait'
      });

      // Set initial position
      let yPos = 20;
      const leftMargin = 20;
      const rightColumnStart = 120;
      const pageWidth = 210;
      const lineHeight = 7;

      // Helper functions
      const addText = (text, x, y, options = {}) => {
        const {
          fontSize = 10,
          fontStyle = 'normal',
          maxWidth = 80
        } = options;

        doc.setFontSize(fontSize);
        doc.setFont('helvetica', fontStyle);
        
        const lines = doc.splitTextToSize(text, maxWidth);
        doc.text(lines, x, y);
        return lines.length * (fontSize / 2.8); // Return height of text block
      };

      const addSection = (title, content, x, y, maxWidth) => {
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(12);
        doc.text(title, x, y);
        y += lineHeight;
        
        if (Array.isArray(content)) {
          content.forEach(item => {
            y += addText(item, x, y, { maxWidth }) + 2;
          });
        } else {
          y += addText(content, x, y, { maxWidth }) + 2;
        }
        return y;
      };

      // Right Column Content
      // Personal Info
      doc.setFontSize(16);
      doc.setFont('helvetica', 'bold');
      doc.text(resumeData.personalInfo.name, rightColumnStart, yPos);
      yPos += lineHeight;

      doc.setFontSize(12);
      doc.setFont('helvetica', 'normal');
      doc.text(resumeData.personalInfo.title, rightColumnStart, yPos);
      yPos += lineHeight;

      doc.setFontSize(10);
      doc.text(`Phone: ${resumeData.personalInfo.phone}`, rightColumnStart, yPos);
      yPos += lineHeight - 2;
      doc.text(`Email: ${resumeData.personalInfo.email}`, rightColumnStart, yPos);
      yPos += lineHeight;

      // Summary
      yPos = addSection('Summary', resumeData.summary, rightColumnStart, yPos + 5, 70);

      // Skills
      yPos += 5;
      doc.setFontSize(12);
      doc.setFont('helvetica', 'bold');
      doc.text('Skills', rightColumnStart, yPos);
      yPos += lineHeight;

      Object.entries(resumeData.skills).forEach(([skill, level]) => {
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(10);
        doc.text(skill, rightColumnStart, yPos);
        
        // Draw skill level dots
        for (let i = 0; i < 5; i++) {
          doc.circle(rightColumnStart + 50 + (i * 4), yPos - 1, 1, i < level ? 'F' : 'S');
        }
        yPos += lineHeight - 2;
      });

      // Left Column Content
      // Experience
      let leftYPos = 20;
      doc.setFontSize(12);
      doc.setFont('helvetica', 'bold');
      doc.text('Experience', leftMargin, leftYPos);
      leftYPos += lineHeight;

      resumeData.experiences.forEach(exp => {
        doc.setFontSize(11);
        doc.setFont('helvetica', 'bold');
        doc.text(exp.title, leftMargin, leftYPos);
        leftYPos += lineHeight - 2;

        doc.setFont('helvetica', 'normal');
        doc.setFontSize(10);
        doc.text(exp.company, leftMargin, leftYPos);
        leftYPos += lineHeight - 2;

        doc.setFontSize(9);
        doc.text(exp.duration, leftMargin, leftYPos);
        leftYPos += lineHeight - 2;

        exp.responsibilities.forEach(resp => {
          doc.setFontSize(9);
          const lines = doc.splitTextToSize(`• ${resp}`, 90);
          doc.text(lines, leftMargin, leftYPos);
          leftYPos += lines.length * 5;
        });
        leftYPos += lineHeight - 2;
      });

      // Projects
      leftYPos += 5;
      doc.setFontSize(12);
      doc.setFont('helvetica', 'bold');
      doc.text('Projects', leftMargin, leftYPos);
      leftYPos += lineHeight;

      resumeData.projects.forEach(project => {
        doc.setFontSize(11);
        doc.setFont('helvetica', 'bold');
        doc.text(project.name, leftMargin, leftYPos);
        leftYPos += lineHeight - 2;

        doc.setFontSize(10);
        doc.setFont('helvetica', 'normal');
        doc.text(project.tech, leftMargin, leftYPos);
        leftYPos += lineHeight - 2;

        project.details.forEach(detail => {
          doc.setFontSize(9);
          const lines = doc.splitTextToSize(`• ${detail}`, 90);
          doc.text(lines, leftMargin, leftYPos);
          leftYPos += lines.length * 5;
        });
        leftYPos += lineHeight - 2;
      });

      // Activities & Achievements
      leftYPos += 5;
      doc.setFontSize(12);
      doc.setFont('helvetica', 'bold');
      doc.text('Activities & Achievements', leftMargin, leftYPos);
      leftYPos += lineHeight;

      resumeData.activities.forEach(activity => {
        doc.setFontSize(11);
        doc.setFont('helvetica', 'bold');
        doc.text(activity.title, leftMargin, leftYPos);
        leftYPos += lineHeight - 2;

        activity.details.forEach(detail => {
          doc.setFontSize(9);
          const lines = doc.splitTextToSize(`• ${detail}`, 90);
          doc.text(lines, leftMargin, leftYPos);
          leftYPos += lines.length * 5;
        });
        leftYPos += lineHeight - 2;
      });

      // Add vertical divider
      doc.setLineWidth(0.2);
      doc.line(115, 15, 115, 280);

      doc.save('resume.pdf');
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-5xl mx-auto py-4 px-4">
        <div 
          id="resume-content" 
          className="bg-white rounded-lg shadow-lg p-4" 
          style={{ 
            width: '210mm',
            height: '400mm',
            margin: 'auto',
            overflowY: 'hidden'
          }}
        >
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-8">
              <Experience experiences={resumeData.experiences} />
              <Projects projects={resumeData.projects} />
              <Activities activities={resumeData.activities} />
            </div>
            <div className="col-span-4">
              <PersonalInfo personalInfo={resumeData.personalInfo} />
              <Summary summary={resumeData.summary} />
              <Education education={resumeData.education} />
              <Skills skills={resumeData.skills} />
            </div>
          </div>
        </div>
      </div>
      <DownloadButton onClick={handleDownload} />
    </div>
  );
};

export default App;