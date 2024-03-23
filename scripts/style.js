document.addEventListener('DOMContentLoaded', () =>{
    let body = document.querySelector('body');
    let change_style = document.querySelector('.change_style');

    change_style.onclick = function() {
        body.classList.toggle('white_bg');
        body.classList.toggle('green_bg');
    };
})