window.addEventListener('scroll', function(){
    const nav = document.querySelector('nav');
    nav.classList.toggle('color', window.scrollY > 0);
});

const btn = document.getElementById('btn');

btn.addEventListener('click', function(){
    document.querySelector('.lista').classList.toggle('show');
    document.querySelector('.fa-bars').classList.toggle('view');
});