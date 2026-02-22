const body = document.querySelector('body');
const header = document.querySelector('header');
const main = document.querySelector('main');
const content = main.querySelector('#content');

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

const headerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            header.classList.remove('header-hidden');
        } else {
            header.classList.add('header-hidden');
        }
    });
}, {
    threshold: 0.1
});
headerObserver.observe(content);