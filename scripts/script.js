document.addEventListener('DOMContentLoaded', function() {
    const projectTitles = document.querySelectorAll('.project-title');

    projectTitles.forEach(title => {
        title.addEventListener('click', function() {
            const projectDetails = this.nextElementSibling;
            if (projectDetails.style.display === 'none' || !projectDetails.style.display) {
                projectDetails.style.display = 'block';
            } else {
                projectDetails.style.display = 'none';
            }
        });
    });
});
