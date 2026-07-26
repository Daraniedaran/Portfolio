import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, HRFlowable, Table, TableStyle
)
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_JUSTIFY

def generate_pdf():
    pdf_path = "d:/My Projects/Portfolio DD/portfolio/public/resume.pdf"
    
    # 0.5 inch margins (36 pt)
    doc = SimpleDocTemplate(
        pdf_path,
        pagesize=letter,
        leftMargin=36,
        rightMargin=36,
        topMargin=36,
        bottomMargin=36
    )

    styles = getSampleStyleSheet()

    # Custom styles
    name_style = ParagraphStyle(
        'NameStyle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=20,
        leading=24,
        textColor=colors.HexColor('#000000'),
        spaceAfter=4
    )

    contact_style = ParagraphStyle(
        'ContactStyle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=10,
        leading=13,
        textColor=colors.HexColor('#1A1A1A'),
        spaceAfter=6
    )

    heading_style = ParagraphStyle(
        'SectionHeading',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=11,
        leading=14,
        textColor=colors.HexColor('#000000'),
        spaceBefore=10,
        spaceAfter=4
    )

    body_style = ParagraphStyle(
        'BodyText',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9.5,
        leading=13.5,
        textColor=colors.HexColor('#1A1A1A'),
        alignment=TA_LEFT,
        spaceAfter=4
    )

    bullet_style = ParagraphStyle(
        'BulletText',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9.5,
        leading=13.5,
        textColor=colors.HexColor('#1A1A1A'),
        leftIndent=15,
        firstLineIndent=-10,
        spaceAfter=3
    )

    story = []

    # Header
    story.append(Paragraph("<b>DARANIEDARAN K</b>", name_style))
    contact_text = "daraniedaran@gmail.com &nbsp;|&nbsp; +91 9043894153 &nbsp;|&nbsp; linkedin.com/in/daraniedaran-k &nbsp;|&nbsp; github.com/Daraniedaran"
    story.append(Paragraph(contact_text, contact_style))
    story.append(HRFlowable(width="100%", thickness=0.75, color=colors.HexColor('#000000'), spaceBefore=2, spaceAfter=8))

    # OBJECTIVE
    story.append(Paragraph("OBJECTIVE", heading_style))
    obj_text = "Aspiring Full Stack Developer with hands-on experience in building responsive web applications using modern web technologies. Final-year B.Tech Information Technology student with a strong interest in Full Stack Development, AI-powered applications and problem-solving."
    story.append(Paragraph(obj_text, body_style))

    # EDUCATION
    story.append(Paragraph("EDUCATION", heading_style))
    edu_1 = "&bull; <b>2023 &ndash; 2027</b> &nbsp;|&nbsp; Mailam Engineering College &nbsp;|&nbsp; B.Tech &ndash; Information Technology &nbsp;|&nbsp; <b>CGPA: 8.47</b>"
    edu_2 = "&bull; <b>2022 &ndash; 2023</b> &nbsp;|&nbsp; St. Joseph's Higher Secondary School &nbsp;|&nbsp; HSC &nbsp;|&nbsp; <b>Percentage: 82%</b>"
    edu_3 = "&bull; <b>2020 &ndash; 2021</b> &nbsp;|&nbsp; St. Joseph's Higher Secondary School &nbsp;|&nbsp; SSLC &nbsp;|&nbsp; <b>Result : Pass</b>"
    story.append(Paragraph(edu_1, bullet_style))
    story.append(Paragraph(edu_2, bullet_style))
    story.append(Paragraph(edu_3, bullet_style))

    # TECHNICAL SKILLS
    story.append(Paragraph("TECHNICAL SKILLS", heading_style))
    tech_skills = [
        ("Programming Languages", "Python"),
        ("Frontend", "HTML, CSS, JavaScript, React.js"),
        ("Backend", "FastApi"),
        ("Database", "MySQL, Firebase"),
        ("Tools & Platforms", "Git, GitHub, Microsoft 365, Figma")
    ]
    for cat, items in tech_skills:
        t_text = f"&bull; <b>{cat}</b> : {items}"
        story.append(Paragraph(t_text, bullet_style))

    # PROJECTS
    story.append(Paragraph("PROJECTS", heading_style))
    p1 = "&bull; <b>HotFiNet &ndash; Peer-to-Peer Internet Sharing Platform</b> - Developed a mobile application using React native and Firebase that enabling secure, real-time sharing of mobile internet between nearby users via a QR-based connection system and a digital coin economy"
    p2 = "&bull; <b>Smart Academic Companion (SAC)</b> - Developed an AI-powered assistant that build using React, FastAPI and AI integration to help students manage their academic lives efficiently. Features include a personalized study helper chatbot, academic guidance and performance tracking."
    story.append(Paragraph(p1, bullet_style))
    story.append(Paragraph(p2, bullet_style))

    # INTERNSHIP / TRAINING
    story.append(Paragraph("INTERNSHIP / TRAINING", heading_style))
    intern = "&bull; <b>UI/UX Design | Scode Software Solutions</b> - Completed a UI/UX Design internship (Dec 24, 2024 &ndash; Dec 31, 2024), gaining hands-on experience in user interface design, user experience principles, wireframing, and mobile application design."
    story.append(Paragraph(intern, bullet_style))

    # CERTIFICATIONS & ACHIEVEMENTS
    story.append(Paragraph("CERTIFICATIONS & ACHIEVEMENTS", heading_style))
    cert1 = "&bull; <b>IT Specialist &ndash; Python</b> | Certiport / Pearson VUE (CertNexus) | Oct 2024"
    cert2 = "&bull; <b>Full Stack Development</b> | NoviTech R&D Private Limited | Aug 2025"
    cert3 = "&bull; <b>Code 4 Change 2026 &ndash; Hackathon</b> | Karpaga Vinayaga College of Engineering & Technology | Feb 2026"
    cert4 = "&bull; <b>The Joy of Computing using Python</b> | NPTEL | Elite(67%) | Apr 2026"
    cert5 = "&bull; <b>Volunteer &ndash; Photo Exhibition Contest 2K25</b> | Department of IT, Mailam Engineering College"
    cert6 = "&bull; <b>Volunteer &ndash; HackIndia 2026 Spark-3</b> | Department of IT, Mailam Engineering College"
    for c in [cert1, cert2, cert3, cert4, cert5, cert6]:
        story.append(Paragraph(c, bullet_style))

    # SOFT SKILLS
    story.append(Paragraph("SOFT SKILLS", heading_style))
    soft_skills = ["Problem Solving", "Time Management", "Quick Learning Ability", "Teamwork", "Adaptability"]
    for s in soft_skills:
        story.append(Paragraph(f"&bull; {s}", bullet_style))

    doc.build(story)
    print("PDF generated successfully at:", pdf_path)

if __name__ == "__main__":
    generate_pdf()
