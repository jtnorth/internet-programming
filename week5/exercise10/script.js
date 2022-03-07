
function attachCircleListener(event){
        const circle = document.getElementById('circle');


    switch (event.keyCode){
        case 37:
            circle.style.left = `${circle.offsetLeft - 10}px`
            break;
        case 39:
            circle.style.left = `${circle.offsetLeft + 10}px`
            break;
        case 38:
            circle.style.top = `${circle.offsetTop - 10}px`
            break;
        case 40:
            circle.style.top = `${circle.offsetTop + 10}px`
            break;
    }

}


function attachListeners(){
    const circle = document.getElementById('circle');
    circle.style.opacity = '1'
    document.addEventListener('keydown',attachCircleListener)
}

document.addEventListener('DOMContentLoaded',attachListeners)
