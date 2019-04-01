const aside = document.getElementById("aside");
const close = document.getElementById("close");
const menu = document.getElementById("menu-more");

close.addEventListener('click', (event) => {
    event.preventDefault();
    aside.style.display = 'none';
});

menu.addEventListener('click', (event) => {
    event.preventDefault();
    aside.style.display = 'block';
});