chrome.runtime.onMessage.addListener(gotMessage);
let isPressed = false;
const wordarr = ["and"];
// , "than", "even", "now", "say", "could", "can"];
function gotMessage(message,sender,sendresponse)
{
	if (!isPressed){
        console.log(message.clickedOn);
        let paragraphs = document.getElementsByTagName("p");
        for(elt of paragraphs)
        {
            innerwords = elt.innerText
            for (word of wordarr){
                if (innerwords.includes(word)){
                    console.log(innerwords)
                    elt.style['background-color'] = '#ffdf65';
                }
            }
        }
        
        toggleHighlight()
    }
    else{
        // console.log(message.clickedOff);
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