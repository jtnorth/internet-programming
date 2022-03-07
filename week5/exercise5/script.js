
function attachCircleListener(){
    const circle = document.getElementById('circle');

    if(circle.style.opacity < 1)
            circle.style.opacity = `${parseFloat(circle.style.opacity) + .1}`;

}


function attachListeners(){
    const circle = document.getElementById('circle');
    circle.style.opacity = '0.5'
    circle.addEventListener('click',attachCircleListener)
}

document.addEventListener('DOMContentLoaded',attachListeners)
