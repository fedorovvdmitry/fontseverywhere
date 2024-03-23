document.addEventListener('DOMContentLoaded', () =>{
    let objects = document.querySelector('.objects');
    let abiut_button = document.querySelector('.abiut_button');
    let about = document.querySelector('.about');

    abiut_button.onclick = function() {
        objects.style.display = "none";
        // about.style.display = "visible";
        // about.style.display = prompt('display?', 'visible');
    };

    
})