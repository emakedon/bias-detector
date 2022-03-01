// chrome.runtime.onMessage.addListener(gotMessage);



chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if( request.message == "highlight" ) {
          highlightArticle();
        }
    }
  );
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if(request.message == "analyze" ){
            analyzeArticle();
        }
    }
);


let isPressed = false;
const word_dict = {};
const libarr = ["misogynist", "equity", "microaggression", "microaggressions", 'privilege', 'phobe', 'racist',
 'racism', 'fascist', 'sexist', 'bigot', 'ally', 'allies',
 'incarceration', 'marginalized', 'diversity', 'affirmative action', 'awareness',
  'gentrification', 'imperialist', 'oppressor', 'intersectionality', 'tolerant', 'homophobia',
   'justice', 'systemic', 'universal', 'programs', 'community', 'corporate', 'forgiveness', 'harm',
    'advocacy', 'fair', 'accountability','accountability', 'fairness', 'equitable', 'vulnerable',
     'wrongful', 'restorative', 'resolution', 'inclusive', 'inclusion', 'toxic', 'xenophobic',
      'safe', 'belonging', 'equitable', 'colonialism', 'rooted', 'sustainable', 'climate',
       'science', 'undocumented', 'ally-ship', 'disparate', 'inequity', 'structures', 'fragility',
        'prejudice', 'decolonialism', 'implicit', 'internalized', 'bias', 'biases', 'unconscious',
         'reactionary'];
const consarr = ['tyranny', 'communist', 'criminal', 'freedom', 'radical', 'traitors', 'welfare', 'corruption', 'illegal', 'individualism', 'individual', 'responsibility', 'constitutional', 'constitution', 'overreach',
'incompetent', 'values', 'free', 'liberty', 'liberties', 'marxist', 'marxism', 'elites', 'socialist', 'socialists','socialism', 'patriot', 'patriots', 'patriotism', 'thugs', 'thug', 'families', 'family', 'honest', 'Christian', 'penalty', 'creators', 'globalism', 'Soros', 'terror', 'terrorist', 'rights', 
'lawlessness'];
const emoarr = [];
for(libword of libarr){
    word_dict[libword] = "#FC9A9A";
}
for (consword of consarr){
    word_dict[consword] = "#9ABFFC";
}

// console.log(word_dict);

String.prototype.replaceAtIndex = function(index, value, wordlen) {
    return ` <span> ${this.substr(0, index)}</span>` + value + `<span>${this.substr(index + wordlen)} </span>`
}

// function gotMessage(message,sender,sendresponse)
function highlightArticle()
{
	if (!isPressed){
        let paragraphs = document.getElementsByTagName("p");
        for(elt of paragraphs)
        {
            let p_html = ``;
            let lowerinnerwords = elt.innerText.toLowerCase();
            let innerwords_string = lowerinnerwords.split(" ");
            // console.log(innerwords_string);
            for (innerword of innerwords_string){
                let html = ``;
                if(innerword in word_dict){
                    let background_color = word_dict[innerword];
                    // console.log(background_color);
                    html = `<span style="background-color:${background_color}!important;">${innerword} </span>`;
                }
                else{
                    html = `${innerword} `;
                }
                p_html += html;
            }
            console.log(p_html);
            elt.innerHTML = p_html;
        }
        toggleHighlight();
    }
    else{
        let paragraphs = document.getElementsByTagName("p");
        for(elt of paragraphs)
        {
            let p_html = ``;
            let lowerinnerwords = elt.innerText.toLowerCase();
            let innerwords_string = lowerinnerwords.split(" ");
            for (innerword of innerwords_string){
                let html = ``;
                if(innerword in word_dict){
                    html = `<span style="background-color:'' !important;">${innerword} </span>`;
                }
                else{
                    html = `${innerword} `;
                }
                p_html += html;
            }
            console.log(p_html);
            elt.innerHTML = p_html;
        }
        toggleHighlight();
    }
//     else{
//         let paragraphs = document.getElementsByTagName("p");
//         for(elt of paragraphs)
//         {
//             let lowerinnerwords = elt.innerText.toLowerCase();
//             let innerwords = elt.innerText;
//             for (libword of libarr){
//                 if (lowerinnerwords.includes(" " + libword)){
//                     let position = lowerinnerwords.search(libword.toLowerCase()); //added
//                     let html = `<span style="background-color: "" !important;">${libword}</span>`;
//                     let wordlen = libword.length;
//                     replaced_innerwords = innerwords.replaceAtIndex(position, html, wordlen);
//                     // elt.innerHTML = replaced_innerwords;
//                     replace_html += replaced_innerwords;
//                 }
//                 else{
//                     replace_html += elt.innerHTML;
//                 }
//             }
//             for (consword of consarr){
//                 if (lowerinnerwords.includes(" " + consword)){
//                     let position = lowerinnerwords.search(consword.toLowerCase()); //added
//                     let html = `<span style="background-color: "" !important;">${consword}</span>`;
//                     let wordlen = consword.length;
//                     replaced_innerwords = innerwords.replaceAtIndex(position, html, wordlen);
//                     // elt.innerHTML = replaced_innerwords;
//                     replace_html += replaced_innerwords;
//                 }
//                 else{
//                     replace_html += elt.innerHTML;
//                 }
//             }
//             elt.innerHTML = replace_html;
//         }
//         console.log("end of loop");
//         toggleHighlight();
//     }
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

function analyzeArticle(){
    window.open('https://totnmg6wtmgnaue4.anvil.app/DXEUBUSYFS2QM7GPNC7Y3HDD', '_blank');
}