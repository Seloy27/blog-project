
const darkmode = document.getElementById('darkmode');
const main_content = document.getElementById('main-content');

darkmode.addEventListener('mousedown', event => {
    main_content.classList.toggle('darkmode');
});