

function handleDisplay(event){
    const input = document.getElementById('text');
    const display= document.getElementById('display');
    display.textContent = input.value

    if( event.type === 'click'){
        const button = document.getElementById('button');
        button.style.display = "none";
        input.addEventListener('keyup',handleDisplay)
    }

}
function addClickEvent(){
    const button = document.getElementById('button');
    button.addEventListener('click',handleDisplay)
}

document.addEventListener('DOMContentLoaded',addClickEvent)
