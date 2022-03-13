function attachCircleListener(event){


    switch (event.keyCode){
        case 37:
            moveCircleLeft()
            break;
        case 39:
            moveCircleRight()
            break;
        case 38:
            moveCircleTop()
           break;
        case 40:
            moveCircleBottom()
            break;
    }

}

function moveCircleLeft(){

    setInterval(function (){
        const circle = document.getElementById('circle');

        circle.style.left = `${circle.offsetLeft - 1}px`
    },10)

}

function moveCircleRight(){

    setInterval(function (){
        const circle = document.getElementById('circle');
        circle.style.left = `${circle.offsetLeft + 1}px`
    },10)

}

function moveCircleTop(){
    setInterval(function (){
        const circle = document.getElementById('circle');
        circle.style.top = `${circle.offsetTop - 1}px`
    },10)

}

function moveCircleBottom(){
    setInterval(function (){
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
