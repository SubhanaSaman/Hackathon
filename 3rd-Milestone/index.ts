
// Prevent page refresh
document.getElementById('resume-form')?.addEventListener('submit',function(event) {
    event.preventDefault();

    // Get form values

    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLInputElement).value;
    const experince = (document.getElementById('experince') as HTMLInputElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value;


    // Display resume in the output div
    (document.getElementById('resume-display') as HTMLElement).innerHTML = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Education:</strong> ${education}</p>
        <p><strong>Experince:</strong> ${experince}</p>
        <p><strong>Skills:</strong> ${skills}</p>`;
});

