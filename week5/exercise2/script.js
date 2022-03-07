
function attachCircleListener(){
    const circle = document.getElementById('circle');

    circle.style.backgroundColor = 'blue';
}

function attachListeners(){
    const circle = document.getElementById('circle');
    circle.addEventListener('click',attachCircleListener)
}

document.addEventListener('DOMContentLoaded',attachListeners)
