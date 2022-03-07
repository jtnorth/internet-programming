
function attachCircleListener(){
    const circle = document.getElementById('circle');

    circle.style.opacity ="0.5";
}


function attachListeners(){
    const circle = document.getElementById('circle');
    circle.style.opacity ="1";
    circle.addEventListener('click',attachCircleListener)
}

document.addEventListener('DOMContentLoaded',attachListeners)
