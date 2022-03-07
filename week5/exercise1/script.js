
function attachCircleListener(){
    alert('The button was pressed')
}

function attachListeners(){
    const circle = document.getElementById('circle');
    circle.addEventListener('click',attachCircleListener)
}

document.addEventListener('DOMContentLoaded',attachListeners)
