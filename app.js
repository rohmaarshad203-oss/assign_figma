document.addEventListener('DOMContentLoaded', () => {
    const processItems = document.querySelectorAll('.process-item');

    processItems.forEach(item => {
        const header = item.querySelector('.process-header');
        
        header.addEventListener('click', () => {
           
            item.classList.toggle('active');

            // Icon update karein
            const icon = item.querySelector('.process-icon');
            if (item.classList.contains('active')) {
                icon.textContent = '−';
            } else {
                icon.textContent = '+';
            }
        });
    });
});