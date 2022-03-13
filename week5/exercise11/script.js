
let timer;

function clearTimer(){
    if(timer){
        clearInterval(timer)
    }

}
function attachCircleListener(event){
    switch (event.keyCode){
        case 37:
            clearTimer()
            moveCircleLeft()
            break;
        case 39:
            clearTimer()
            moveCircleRight()
            break;
        case 38:
            clearTimer()
            moveCircleTop()
           break;
        case 40:
            clearTimer()
            moveCircleBottom()
            break;
        case 32:
            clearTimer()
            break;
    }

}

function moveCircleLeft(){

    timer = setInterval(function (){
        const circle = document.getElementById('circle');

        circle.style.left = `${circle.offsetLeft - 1}px`
    },10)

}

function moveCircleRight(){

    timer = setInterval(function (){
        const circle = document.getElementById('circle');
        circle.style.left = `${circle.offsetLeft + 1}px`
    },10)

}

function moveCircleTop(){
    timer = setInterval(function (){
        const circle = document.getElementById('circle');
        circle.style.top = `${circle.offsetTop - 1}px`
    },10)

}

function moveCircleBottom(){
    timer = setInterval(function (){
        const circle = document.getElementById('circle');
        circle.style.top = `${circle.offsetTop + 1}px`
    })

}
function attachListeners(){
    const circle = document.getElementById('circle');
    circle.style.opacity = '1'
    document.addEventListener('keydown',attachCircleListener)
}

document.addEventListener('DOMContentLoaded',attachListeners)
