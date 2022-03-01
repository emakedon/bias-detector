chrome.runtime.onMessage.addListener(gotMessage);
let isPressed = false;
const libarr = ["and", "Soviet", "Russia", "Ukraine", "war"];
const consarr = ['different', 'attempt', 'notion', 'claims', 'uncertainty',
'initiative', 'impose', 'association', 'leader', 'clearly', 'felt', 'dependence',
'brought', 'december', 'intentions', 'changed', 'acting', 'sending', 'remain',
'stage', 'meet', 'situation', 'democrat', 'barack', 'first', 'place', 'without',
'government', 'american', 'way', 'made', 'us', 'party', 'leaders', 'us',
'government', 'energy', 'crisis', 'us', 'foreign', 'government', 'spend',
'felt', 'need', 'one', 'reason', 'made', 'country', 'including', 'explicit',
'us', 'global', 'industry', 'name', 'way', 'men', 'democratic', 'president',
'government', 'means', 'first', 'time', 'one', 'might', 'us', 'energy',
'supplies', 'us', 'faced', 'future', 'government', 'instead', 'east',
'heavily', 'much', 'way', 'government', 'refusal', 'social', 'political',
'place', 'energy', 'american', 'politics', 'domestic', 'initiative',
'made', 'sure', 'one', 'important', 'middle', 'east', 'heavily', 'first',
'place', 'energy', 'facing', 'united', 'states'];
const emoarr = [];

String.prototype.replaceAtIndex = function(index, value, wordlen) {
    console.log("1 ", this.substr(0, index));
    console.log("2 ", value);
    console.log("2 ", this);
    console.log("2.5 ", index);
    console.log("2.6 ", value.length);
    console.log("3 ", this.substr(index + value.length));
    return ` <span> ${this.substr(0, index)}</span>` + value + `<span>${this.substr(index + wordlen)} </span>`
}

function gotMessage(message,sender,sendresponse)
{
	if (!isPressed){
        console.log(message.clickedOn);
        let paragraphs = document.getElementsByTagName("p");
        for(elt of paragraphs)
        {
            let lowerinnerwords = elt.innerText.toLowerCase();
            let innerwords = elt.innerText;
            for (libword of libarr){
                if (lowerinnerwords.includes(" " + libword)){
                    let position = lowerinnerwords.search(libword.toLowerCase()); //added
                    let html = `<span style="background-color: #FC9A9A !important;">${libword}</span>`;
                    let wordlen = libword.length;
                    console.log(wordlen);
                    replaced_innerwords = innerwords.replaceAtIndex(position, html, wordlen);
                    elt.innerHTML = replaced_innerwords;
                }
            }
            for (consword of consarr){
                if (lowerinnerwords.includes(" " + consword)){
                    let position = lowerinnerwords.search(consword.toLowerCase()); //added
                    let html = `<span style="background-color: #9ABFFC !important;">${consword}</span>`;
                    let wordlen = consword.length;
                    replaced_innerwords = innerwords.replaceAtIndex(position, html, wordlen);
                    elt.innerHTML = replaced_innerwords;
                }
            }
        }
        toggleHighlight();
    }
    else{
        // let paragraphs = document.getElementsByTagName("p");
        // for(elt of paragraphs)
        // {
        //     elt.style['background-color'] = '';
        // }
        // console.log("unhighlighting");
        let paragraphs = document.getElementsByTagName("p");
        for(elt of paragraphs)
        {
            let lowerinnerwords = elt.innerText.toLowerCase();
            let innerwords = elt.innerText;
            for (libword of libarr){
                if (lowerinnerwords.includes(" " + libword)){
                    let position = lowerinnerwords.search(libword.toLowerCase()); //added
                    let html = `<span style="background-color: "" !important;">${libword}</span>`;
                    let wordlen = libword.length;
                    console.log(wordlen);
                    replaced_innerwords = innerwords.replaceAtIndex(position, html, wordlen);
                    elt.innerHTML = replaced_innerwords;
                }
            }
            for (consword of consarr){
                if (lowerinnerwords.includes(" " + consword)){
                    let position = lowerinnerwords.search(consword.toLowerCase()); //added
                    let html = `<span style="background-color: "" !important;">${consword}</span>`;
                    let wordlen = consword.length;
                    replaced_innerwords = innerwords.replaceAtIndex(position, html, wordlen);
                    elt.innerHTML = replaced_innerwords;
                }
            }
        }
        toggleHighlight();
    }
}
function toggleHighlight(){
    if(!isPressed){
        isPressed = true;
        console.log("turning isPress to true");
    }
    else{
        isPressed = false;
        console.log("turning isPress to false");
    }
}