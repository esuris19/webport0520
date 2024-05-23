document.addEventListener('DOMContentLoaded', function () {
    const projectItems = document.querySelectorAll('#projects .list-group-item');

    projectItems.forEach(item => {
        // Get the project title and arrow button
        const projectTitle = item.querySelector('.project-title');
        const arrowButton = projectTitle.querySelector('.arrow-icon');

        // Hide the project details initially
        const projectDetails = item.querySelector('.project-details');
        projectDetails.style.display = 'none';

        // Add click event listener to the arrow button
        arrowButton.addEventListener('click', function () {
            if (projectDetails.style.display === 'none') {
                projectDetails.style.display = 'flex';
                arrowButton.innerHTML = '▼';
            } else {
                projectDetails.style.display = 'none';
                arrowButton.innerHTML = '➔';
            }
        });
    });
});
