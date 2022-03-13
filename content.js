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

const angryarr = ['disgust', 'envy', 'exasperation', 'irritation', 'rage', 'torment', 'contempt', 'revulsion', 'jealous', 'aggravated', 'aggravation', 'agitated', 'agitation', 'annoy', 'annoying', 
'annoying', 'grouchy', 'grouchiness', 'grumpy', 'grumpiness', 'irritating', 'irritation', 'bitter', 'bitterness', 'ferocious', 'ferocity', 'hate', 'hatred', 'fury', 'hostile', 'hostility', 'loathe', 
'loathing', 'outrage', 'resent', 'resentment', 'score', 'spite', 'vengefulness', 'vengeful', 
'wrath', 'abuse', 'abused', 'aggravate', 'agitate', 'anguished', 'anguish', 'betrayed', 'betray', 'cheated', 'coerced', 'cheat', 'coerce', 'controlled', 'control', 'deceived', 'deceived', 'disgusted', 
'displeased', 'dismay', 'dismay', 'exploited', 'fuming', 'incensed', 'harassed', 'harass', 'furious', 'furiously', 'exasperated', 'mad', 'offended', 'offend', 'maddening', 
'provoked', 'rebel', 'rebellious', 'resentful', 'seething', 'seethe', 'smothered', 'stifled', 'strangle', 
'strangled', 'throttled', 'vindictive', 'ridiculed', 'ridicule', 'sabotage', 'sabotaged', 'perturbed', 'perturb', 'patronize', 'patronizing', 
'repulse', 'repulsed', 'stifle', 'stifled', 'uptight', 'affront', 'affronted', 'antagonistic'];

const extremearr = ['always', 'never', 'best', 'worst', 'all', 'none', 'must', 'except', 'every', 'just', 'only', 'impossible', 'imperfect', 'unnecessary'
,'unequal', 'everything', 'greatest', 'entire', 'certain', 'blameless', 'confirmed', 'equivalent', 'innocent', 'premeditated', 'omnipotent', 'invulnerable', 'unconditional', 'universal', 'unquestionable', 'true', 'false', 'widespread', 'ultimate'
, 'obvious', 'lacking', 'literally', 'infinite', 'total', 'unanimous', 'sure', 'vital', 'absolute', 'central', 'equal', 'eternal', 'exact', 'finest', 'ideal', 'immortal', 'incomparable', 'inevitable', 'irrefutable', 'needless', 'perfect', 'pure', 
, 'definite', 'definitely', 'absolutely', 'complete', 'completely', 'constant', 'constantly', 'nothing', 'full', 'ever', 'totally', 'any', 'usual', 'usually', 'generally', 'regular', 'generally', 'general', 'rarely', 'seldom', 'frequently']

for(libword of libarr){
    word_dict[libword] = "#FC9A9A";
}
for (consword of consarr){
    word_dict[consword] = "#9ABFFC";
}

for (angryword of angryarr){
    word_dict[angryword] = "#F28500";
}
for (extremeword of extremearr){
    word_dict[extremeword] = "#33cc33";
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
    // window.open('https://totnmg6wtmgnaue4.anvil.app/DXEUBUSYFS2QM7GPNC7Y3HDD', '_blank');
    // window.open(chrome.runtime.getURL('hello.html'));
    let paragraphs = document.getElementsByTagName("p");
    let words = ``;
    for(paragraph of paragraphs) {
        words += paragraph.innerText;
    }
    console.log(words)
    var w = window.open("about:blank", "_newtab");
    w.document.write(words);
}
