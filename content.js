chrome.runtime.onMessage.addListener(gotMessage);
let isPressed = false;
function gotMessage(message,sender,sendresponse)
{
	if (!isPressed){
        console.log(message.clickedOn);
        let paragraphs = document.getElementsByTagName("p");
        // if (paragraphs.length == 0){
        //     console.log("there are no 'p' tags in this document.")
        // }
        for(elt of paragraphs)
        {
            elt.style['background-color'] = '#ffdf65';
        }
        toggleHighlight()
    }
    else{
        console.log(message.clickedOff);
        let paragraphs = document.getElementsByTagName("p");
        for(elt of paragraphs)
        {
            elt.style['background-color'] = '';
        }
        toggleHighlight()
    }
}
function toggleHighlight(){
    if(!isPressed){
        isPressed = true;
    }
    else{
        isPressed = false;
    }
}