document.addEventListener('DOMContentLoaded', function () {
    const projectItems = document.querySelectorAll('#projects .list-group-item');

    projectItems.forEach(item => {
        // Create the 'plus' sign button
        const plusButton = document.createElement('button');
        plusButton.innerHTML = '+';
        plusButton.classList.add('btn', 'btn-primary', 'mr-2');

        // Get the project title and insert the button before it
        const projectTitle = item.querySelector('.project-title');
        projectTitle.parentNode.insertBefore(plusButton, projectTitle);

        // Hide the project details initially
        const projectDetails = item.querySelector('.project-details');
        projectDetails.style.display = 'none';

        // Add click event listener to the 'plus' button
        plusButton.addEventListener('click', function () {
            if (projectDetails.style.display === 'none') {
                projectDetails.style.display = 'flex';
                plusButton.innerHTML = '-';
            } else {
                projectDetails.style.display = 'none';
                plusButton.innerHTML = '+';
            }
        });
    });
});
