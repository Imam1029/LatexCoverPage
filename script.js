
//page-এর number hide করতে চাও \pagestyle{empty} 
// \\begin{document} \\thispagestyle{empty}
//https://chatgpt.com/share/69de9cea-daf4-8324-bb9f-fea949926c46

function updateLabels() {
    const type = document.getElementById("reportType").value;
}
function setCourseCode() {
    const courseName = document.getElementById("courseName").value;
    const courseCode = document.getElementById("courseCode");

    const courseMap = {
        "Software Engineering": "CSE 3233",
        "Software Engineering Laboratory": "CSE 3234",
        "Computer Networks": "CSE 3567",
        "Computer Networks Laboratory": "CSE 3568",
        "Project Management and Entrepreneurship": "MGT 3301",
        "Data Communication": "CSE 4427",
        "Software Development Project": "CSE 3000",
        "Computer and Cyber Security": "CSE 3637",
        "Theory of Computation": "CSE 3409",
        "Software Testing and Quality Assurance": "CSE 4293",
        "Software Testing and Assurance Quality Laboratory": "CSE 4294",
        "Machine Learning": "CSE 4311",
        "Machine Learning Lab": "CSE 4312",
        "Cloud Computing": "CSE 4523",
        "Cloud Computing Laboratory": "CSE 4524",
        "Technical Writing and Presentation": "ENG 4104",
        "Society, Engineering Ethics and Environmental Protection": "HUM 3101"
    };

    courseCode.value = courseMap[courseName] || "";
}

function generateLatex() {
    const universityName = document.getElementById("universityName").value;
    const departmentName = document.getElementById("departmentName").value;
    const reportType = document.getElementById("reportType").value;
    const courseName = document.getElementById("courseName").value;
    const courseCode = document.getElementById("courseCode").value;
    const reportTitle = document.getElementById("reportTitle").value;
    const reportNumber = document.getElementById("reportNumber").value;
    const submissionDate = document.getElementById("submissionDate").value;
    const teacherName = document.getElementById("teacherName").value;
    const designation = document.getElementById("designation").value;
    const teacherUniversity = document.getElementById("teacherUniversity").value;
    const studentName = document.getElementById("studentName").value;
    const studentId = document.getElementById("studentId").value;
    const semester = document.getElementById("semester").value;
    const batch = document.getElementById("batch").value;
    const session = document.getElementById("session").value;
    const section = document.getElementById("section").value;

    let reportLabel = "";
    let numberLabel = "";

    if (reportType === "Assignment") {
        reportLabel = "Name of Assignment";
        numberLabel = "Number of Assignment";
    } else {
        reportLabel = "Name of Lab Report";
        numberLabel = "Number of Lab Report";
    }

    const latex = `\\documentclass[12pt,a4paper]{article}

\\usepackage[margin=1in]{geometry}
\\usepackage{graphicx}
\\usepackage{setspace}
\\usepackage{array}
\\usepackage{fancybox}
\\usepackage{ragged2e}

\\begin{document}
\\thispagestyle{empty}  

\\begin{center}

{\\Large \\textbf{${universityName}}}\\\\[8pt]

\\fbox{\\textbf{${departmentName}}}

\\includegraphics[width=6cm]{logo.png}\\\\[4pt]

\\fbox{{\\Large \\textbf{${reportType}}}}\\\\[18pt]

\\end{center}

\\begin{flushleft}

\\begin{tabbing}
Course Name \\hspace{3cm} \\= : ${courseName} \\\\[4pt]
Course Code \\> : ${courseCode} \\\\[4pt]
${reportLabel} \\> : ${reportTitle} \\\\[4pt]
${numberLabel} \\> : ${reportNumber} \\\\[4pt]
Date of Submission \\> : ${submissionDate} \\\\[4pt]
\\end{tabbing}

\\end{flushleft}

\\vspace{18pt}

\\hrule

\\vspace{60pt}

\\noindent
\\begin{minipage}[t]{0.20\\textwidth}
    \\textbf{Submitted To :}
\\end{minipage}%
\\begin{minipage}[t]{0.60\\textwidth}
    \\begin{center}
        \\textbf{${teacherName}}\\\\
        ${designation}\\\\
        ${teacherUniversity}
    \\end{center}
\\end{minipage}%

\\vspace{22pt}

\\begin{flushleft}

\\textbf{Submitted By :}\\\\[10pt]

\\begin{tabbing}
Name \\hspace{4.45cm} \\= : ${studentName} \\\\[4pt]
ID \\> : ${studentId}\\\\[4pt]
Semester \\> : ${semester}\\\\[4pt]
Batch \\> : ${batch}\\\\[4pt]
Session \\> : ${session}\\\\[4pt]
Section \\> : ${section}
\\end{tabbing}

\\end{flushleft}

\\end{document}`;

    document.getElementById("latexOutput").value = latex;
}

function copyLatex() {
    const text = document.getElementById("latexOutput");
    text.select();
    document.execCommand("copy");
    alert("Copied!");
}

function downloadTex() {
    const content = document.getElementById("latexOutput").value;
    const blob = new Blob([content], { type: "text/plain" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "cover_page.tex";
    a.click();
}
