document.getElementById('toggleSkills')?.addEventListener('click', () => {
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
        skillsSection.style.display = skillsSection.style.display === 'none' ? 'block' : 'none';
    }
});

document.getElementById('toggleWorkExperience')?.addEventListener('click', () => {
    const workExperienceSection = document.getElementById('work-experience');
    if (workExperienceSection) {
        workExperienceSection.style.display = workExperienceSection.style.display === 'none' ? 'block' : 'none';
    }
});