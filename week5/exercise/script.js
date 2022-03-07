
function attachHeadingListener(){

    const h1 = document.getElementById('h1');
    h1.innerText = 'New Heading';
}

function attachListeners(){
    //document.addEventListener('DOMContentLoaded',attachHeadingListener)
    attachHeadingListener()
}

document.addEventListener('DOMContentLoaded',attachListeners)
