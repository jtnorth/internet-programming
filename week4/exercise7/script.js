

function handleDisplay(){
    const input = document.getElementById('text');
    const display= document.getElementById('display');
    display.textContent = input.value
}
function addClickEvent(){
    const button = document.getElementById('button');
    button.addEventListener('click',handleDisplay)
}

document.addEventListener('DOMContentLoaded',addClickEvent)
