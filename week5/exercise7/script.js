
function attachCircleListener(){

    setInterval(function (){
        const circle = document.getElementById('circle');

        if(circle.style.opacity>0)
            circle.style.opacity = `${parseFloat(circle.style.opacity) - .01}`;
        else
            clearInterval()
    },10)


}


function attachListeners(){
    const circle = document.getElementById('circle');
    circle.style.opacity = '1'
    circle.addEventListener('click',attachCircleListener)
}

document.addEventListener('DOMContentLoaded',attachListeners)
