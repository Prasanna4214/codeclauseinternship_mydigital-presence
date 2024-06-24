
const form = document.getElementById('resumeForm');
const resumeOutput = document.getElementById('resumeOutput');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const fullName = form.elements.fullName.value;
    const email = form.elements.email.value;
    const phone = form.elements.phone.value;
    const summary = form.elements.summary.value;
    const experience = form.elements.experience.value;
    const education = form.elements.education.value;
    
    // Generate HTML for the resume
    const resumeHTML = `
        <h2>${fullName}</h2>
        <p>Email: ${email} | Phone: ${phone}</p>
        <h3>Summary</h3>
        <p>${summary}</p>
        <h3>Experience</h3>
        <p>${experience}</p>
        <h3>Education</h3>
        <p>${education}</p>
    `;
    
    // Display the generated resume
    resumeOutput.innerHTML = resumeHTML;
});
