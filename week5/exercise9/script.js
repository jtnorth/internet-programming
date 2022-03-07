
function attachCircleListener(event){
    if(event.keyCode === 37){
        const circle = document.getElementById('circle');
        circle.style.left = `${circle.offsetLeft - 10}px`
    }


}


function attachListeners(){
    const circle = document.getElementById('circle');
    circle.style.opacity = '1'
    document.addEventListener('keydown',attachCircleListener)
}

document.addEventListener('DOMContentLoaded',attachListeners)
