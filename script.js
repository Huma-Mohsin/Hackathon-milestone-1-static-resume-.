var _a, _b, _c;
(_a = document.getElementById('toggleSkills')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    var skillsSection = document.getElementById('skills');
    if (skillsSection) {
        skillsSection.style.display = skillsSection.style.display === 'none' ? 'block' : 'none';
    }
});
(_b = document.getElementById('toggleWorkExperience')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
    var workExperienceSection = document.getElementById('work-experience');
    if (workExperienceSection) {
        workExperienceSection.style.display = workExperienceSection.style.display === 'none' ? 'block' : 'none';
    }
});
(_c = document.getElementById('generateResume')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', function () {
    var _a;
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var degree = document.getElementById('degree').value;
    var university = document.getElementById('university').value;
    var gradYear = document.getElementById('grad-year').value;
    var skills = document.getElementById('skills-input').value;
    var jobTitle = document.getElementById('job-title').value;
    var company = document.getElementById('company').value;
    var experience = document.getElementById('experience').value;
    // Handle the profile picture
    var profilePictureInput = document.getElementById('profile-picture');
    var profilePicture = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
    var profilePictureUrl = profilePicture ? URL.createObjectURL(profilePicture) : '';
    var resumeHtml = "\n        <div class=\"resume-container\">\n            <div class=\"resume-header\">\n                ".concat(profilePictureUrl ? "<img src=\"".concat(profilePictureUrl, "\" alt=\"Profile Picture\" />") : '', "\n                <h1>").concat(name, "</h1>\n            </div>\n            <div class=\"resume-section\">\n                <h2>Personal Information</h2>\n                <p><strong>Email:</strong> ").concat(email, "</p>\n                <p><strong>Phone:</strong> ").concat(phone, "</p>\n            </div>\n            <div class=\"resume-section\">\n                <h2>Education</h2>\n                <p><strong>Degree:</strong> ").concat(degree, "</p>\n                <p><strong>University:</strong> ").concat(university, "</p>\n                <p><strong>Graduation Year:</strong> ").concat(gradYear, "</p>\n            </div>\n            <div class=\"resume-section\">\n                <h2>Skills</h2>\n                <ul class=\"skills-list\">\n                    ").concat(skills.split(',').map(function (skill) { return "<li>".concat(skill.trim(), "</li>"); }).join(''), "\n                </ul>\n            </div>\n            <div class=\"resume-section work-experience\">\n                <h2>Work Experience</h2>\n                <h3>").concat(jobTitle, " at ").concat(company, "</h3>\n                <p>").concat(experience, "</p>\n            </div>\n        </div>\n    ");
    document.getElementById('resumeDisplay').innerHTML = resumeHtml;
});
