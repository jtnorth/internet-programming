

function handleHeadingEvents( event){

    const heading = document.getElementById('pageheading');
    heading.firstChild.nodeValue = 'New heading';

    switch (event.type){
        case 'click':
            heading.textContent='Content changed on click'
            break
        case 'mouseenter':
            heading.textContent='Mouse entered'
            break
        case 'mouseleave':
            heading.textContent='Click On Heading To Change This'
            break
    }

}


function handleParagraphEvent(event){
    const pageContent = document.getElementById('pageContent');


    switch (event.type){
        case 'click':
            pageContent.firstChild.nodeValue = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.';
            break
        case 'mouseenter':
            pageContent.textContent='Mouse entered'
            break
        case 'mouseleave':
            pageContent.textContent='Click On Heading To Change This'
            break
    }

}
function handleEvents(){
    const heading = document.getElementById('pageheading');
    heading.addEventListener('click',handleHeadingEvents)
    heading.addEventListener('mouseenter',handleHeadingEvents)
    heading.addEventListener('mouseleave',handleHeadingEvents)

    const pageContent = document.getElementById('pageContent');
    pageContent.addEventListener('click',handleParagraphEvent)
    pageContent.addEventListener('mouseenter',handleParagraphEvent)
    pageContent.addEventListener('mouseleave',handleParagraphEvent)
}


document.addEventListener('DOMContentLoaded',handleEvents)
