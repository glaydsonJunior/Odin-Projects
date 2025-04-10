import css from "./style.css"


function showSection(sectionId, title) {
    const sections = document.querySelectorAll('.content');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    const sectionToShow = document.getElementById(sectionId);
    if (sectionToShow) {
        sectionToShow.style.display = 'block';
    }

    const headerTitle = document.querySelector('header h1');
    if (headerTitle) {
        headerTitle.textContent = title;
    }
}

document.getElementById('home-btn').addEventListener('click', () => {
    showSection('home', 'Pizzeria di Giorno');
});
document.getElementById('menu-btn').addEventListener('click', () => {
    showSection('menu', 'Pizzeria di Giorno - Menu');
});
document.getElementById('about-btn').addEventListener('click', () => {
    showSection('about', 'Pizzeria di Giorno - Sobre');
});
