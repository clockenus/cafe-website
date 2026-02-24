const body = document.querySelector('body');
const headbar = document.querySelector('.headbar');
const sidebar = document.querySelector('.sidebar');
const main = document.querySelector('main');
const content = main.querySelector('#content');
const footer = document.querySelector('footer');
const banner = document.querySelector('#banner')

const hiddenObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.remove('hidden');
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
            entry.target.classList.add('hidden');
        }
    });
}, {});
const hiddenElements = main.querySelectorAll('.button, .product-box, .to-hide');
hiddenElements.forEach(element => {
    element.classList.add('hidden');
    hiddenObserver.observe(element);
});

const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            headbar.classList.add('headbar-hidden');
            sidebar.classList.add('sidebar-hidden');
        } else {
            headbar.classList.remove('headbar-hidden');
        }
    });
}, {
    threshold: 0.8
});
navObserver.observe(banner);

function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.remove('sidebar-hidden');
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.add('sidebar-hidden');
}