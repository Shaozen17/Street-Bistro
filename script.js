document.addEventListener('DOMContentLoaded', () => {

    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
 });


document.addEventListener('DOMContentLoaded', (event) => {
    const openBtn = document.getElementById('openBtn');
    const closeBtn = document.getElementById('closeBtn');
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.getElementById('main');
    openBtn.addEventListener('click', () => {
        sidebar.style.width = '250px';
        mainContent.style.marginLeft = '250px';
    });
    closeBtn.addEventListener('click', () => {
        sidebar.style.width = '0';
        mainContent.style.marginLeft = '0';
    });
 });