chrome.runtime.onMessage.addListener(gotMessage);
let isPressed = false;
const libarr = ["and"];
const consarr = ["the"];
// , "than", "even", "now", "say", "could", "can"];

String.prototype.replaceAtIndex = function(index, value) {
    return ` <span> ${this.substr(0, index)}</span>` + value + `<span> ${this.substr(index + value.length)} </span>`
}

function gotMessage(message,sender,sendresponse)
{
	if (!isPressed){
        console.log(message.clickedOn);
        let paragraphs = document.getElementsByTagName("p");
        count = 0;
        for(elt of paragraphs)
        {
            console.log("befor changes: ", elt);
            count += 1;
            innerwords = elt.innerText.toLowerCase();
            for (libword of libarr){
                if (innerwords.includes(libword)){
                    let position = innerwords.search(libword.toLowerCase()); //added
                    let html = `<span style="background-color: #FC9A9A !important;">${libword}</span>`;
                    replaced_innerwords = innerwords.replaceAtIndex(position, html);
                    elt.innerHTML = replaced_innerwords;
                    console.log("after changes: ", elt);
                }
            }
            for (consword of consarr){
                if (innerwords.includes(consword)){
                    let position = innerwords.search(consword.toLowerCase()); //added
                    let html = `<span style="background-color: #9ABFFC !important;">${consword}</span>`;
                    replaced_innerwords = innerwords.replaceAtIndex(position, html);
                    elt.innerHTML = replaced_innerwords;
                    console.log("after changes: ", elt);
                }
            }
        }
        
        toggleHighlight()
    }
    else{
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