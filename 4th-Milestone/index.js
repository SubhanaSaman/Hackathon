var _a;
(_a = document.getElementById('resume-form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent page refresh
    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experince = document.getElementById('experince').value;
    var skills = document.getElementById('skills').value;
    // Display resume in the output div
    document.getElementById('resume-display').innerHTML = "\n        <p><strong>Name:</strong> ".concat(name, "</p>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n        <p><strong>Phone:</strong> ").concat(phone, "</p>\n        <p><strong>Education:</strong> ").concat(education, "</p>\n        <p><strong>Experince:</strong> ").concat(experince, "</p>\n        <p><strong>Skills:</strong> ").concat(skills, "</p>");
});
