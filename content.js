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
const libarr = ['affordable', 'gap', 'pollution', 'minority', 'renewable', 'leadership', 'ecological', 'greenhouse', 
'coalition', 'bottom', 'supports', 'revenues', 'educated', 
'amount', 'dominant', 'wealthiest', 'generate', 'solar', 'fewer', 'democracy', 'ability', 'rooted', 'homes', 
'forms', 'lobbyists', 'neighborhoods', 'equity', 'workingclass',
 'grants', 'violated', 'insecurity', 'incomes', 'parts',
  'relatively', 'protecting', 'improving', 'inequalities', 'impact', 'toxic', 
  'degradation', 'news', 'ideology', 'clinton', 'source', 'manufacturing', 'bills', 
  'inadequate', 'establishment', 'revenue', 'generation',
  'prison', 'gross', 'gains', 'peace', 'positions', 'cheap', 'vehicles', 'planet',
   'taken', 'treatment', 'break', 'affluent', 'immigrants', 'focused', 'earnings', 
   'urban', 'broad', 'workplace', 'adequate', 'expanding', 'committee', 'extreme', 'bargaining', 
   'structural', 'purposes', 'capitalists', 'corporation',
   'attacked', 'seriously', 'collective', 'base', 'improvement', 'test', 'completely', 'lending', 
   'patterns', 'expanded', 'gives', 'african', 'fundamental', 'compassionate', 'permits', 'points', 
   'species', 'domination', 'thinking', 'projects', 'affected', 'happiness',
   'richest', 'hell', 'built', 'falling', 'dream', 'insurers',
    'expensive', 'space', 'rejected', 'achieving', 'struggle', 'proposal', 'later', 'standing', 
    'procedure', 'compassion', 'agreements', 'classes',
    'severely', 'regulate', 'attacking', 'replace', 'extra', 'struggling', 'valuable', 'option', 
    'impossible', 'importance', 'overwhelming', 'rural', 'limit', 'dynamic', 'late', 'offered', 'calls',
     'disasters', 'structure', 'factors', 'counseling', 'contracts', 'chinese', 'tried', 'weaken', 
     'preventing', 'instruments', 'engaged', 'favorable', 'several', 'dioxide', 'contradictions', 
     'took', 'strategies', 'claimed', 'voter', 'aggressively', 'humans', 'tremendous', 
     'accumulation', 'initiatives', 'responses', 'treatments', 'includes', 'payroll', 
     'energysaving', 'banking', 'accounting', 'populist', 'backlash', 'retirees', 'reliance', 
     'exploitation', 'desperately', 'enact', 'shelters', 'environmentally', 'sustainable', 'represents', 'grounds', 'attempts', 
      'walmart', 'biodiversity', 'provisions', 'message', 'mistakes', 'survival', 
      'enemies', 'substantial', 'earlier', 'agriculture', 'define', 'roles', 'centered', 
      'movements', 'enhancing', 'buildings', 'hatred', 'offers', 'somehow', 'precisely', 
      'worry', 'pensions', 'discrimination', 'average', 'loyalty', 'bankruptcy', 'deep', 
      'loophole', 'block', 'turning', 'opposing', 'osub', 'link', 'meant', 'libertarians',
       'deeply', 'integrated', 'generous', 'reap', 'saved', 'becoming', 'associated', 
       'preserve', 'thrust', 'rhetoric', 'challenges', 'overwhelmingly', 'petty', 'depends', 
       'call', 'older', 'unfair', 'rungs', 'applied', 'express', 'faced', 'indeed', 'series', 'conscience', 'dying', 'implications', 'step', 
        'elements', 'encouraging', 'gradually', 'procedures', 'permanent', 'served', 'extraction', 
        'started', 'fees', 'consumerism', 'measure', 'organized', 'salaries', 'stopped', 'humanity',
    'partnership', 'loopholes', 'expenditures', 'package',
     'wealthier', 'extensive', 'atmosphere', 'subsidized', 'narrow', 'manipulated', 'govern', 
    'diversity', 'shifting', 'prop', 'fraudulent', 'flood', 'shows', 'ocean', 'harder', 'developed',
    'abused', 'content', 'mechanisms', 'elderly', 'disaster', 'naturally', 'excess', 'frequently', 'takes', 
    'cheats', 'crises', 'shareholders', 'send', 'room', 'numerous', 'governing', 
    'addition', 'prek', 'eat', 'legitimate', 'provision', 'hopeless', 'disposal', 'historic', 'wait', 
    'imbalance', 'type', 'cap', 'membership', 'externalities', 'att', 'version', 'looking', 'managed', 
    'leaving', 'south', 'border', 'broader', 'manufacturers', 'congressional', 'adjust', 'analysis',
     'buying', 'cities', 'rightwing', 'legislative', 'battling', 'europe', 'lowered', 'estimates', 
    'starting', 'essentially', 'pressures', 'eligible', 'notably', 'testing', 'options', 
    'flexibility', 'outraged', 'ending', 'implement', 'prefer', 'competing', 'privileged', 
    'violations', 'extend', 'permitted', 'pharmaceutical', 'corruption', 'interested', 'overseas', 
    'socially', 'targeted', 'promarket', 'citizen', 'annual', 'hear', 'misogynist', 'equity', 
    'microaggression', 'microaggressions', 'privilege', 'phobe', 'racist', 'racism', 'fascist', 
    'sexist', 'bigot', 'ally', 'allies', 'incarceration', 'marginalized', 'diversity', 'affirmative action', 
    'awareness', 'gentrification', 'imperialist', 'oppressor', 'intersectionality', 'tolerant', 'homophobia', 
    'justice', 'systemic', 'universal', 'programs', 'community', 'corporate', 'forgiveness', 'harm', 
    'advocacy', 'fair', 'accountability', 'accountability', 'fairness', 'equitable', 'vulnerable', 
    'wrongful', 'restorative', 'resolution', 'inclusive', 'inclusion', 'toxic', 'xenophobic', 'safe', 
    'belonging', 'equitable', 'colonialism', 'rooted', 'sustainable', 'climate', 'science', 'undocumented', 
    'ally-ship', 'disparate', 'inequity', 'structures', 'fragility', 'prejudice', 'decolonialism', 'implicit',
     'internalized', 'bias', 'biases', 'unconscious', 'reactionary'];
const consarr = ['enterprise', 'thin', 'sexual', 'prosperity', 'resulted', 'currency', 'intervention', 
'innocent', 'virtue', 'output', 'constitutional', 'encourages', 'attempt', 'catholic', 'commerce', 
'terrorist', 'suffer', 'vote', 'unintended', 'founders', 'gave', 'regardless', 'murder', 'confidence', 
'killer', 'stand', 'obamacare', 'ethanol', 'carry', 'code', 'burdens', 'largely', 'crude', 'purchase', 
'produces', 'bureaucrats', 'deductions', 'socialist', 'morality', 'notion', 'excessive', 'assigned', 
'firearms', 'look', 'claims', 'entrepreneurs', 'bubble', 'difference', 'belief', 'reduced', 'uncertainty', 
'wanted', 'rule', 'opposition', 'thousands', 'required', 'pointed', 'theory', 'weapon', 'dismiss', 
'condition', 'initiative', 'original', 'sin', 'everything', 'pluses', 'freely', 'illegals', 'owners', 
'alter', 'complex', 'model', 'heart', 'protected', 'prolife', 'enemy', 'respond', 'libertarian', 
'bureaucracy', 'presents', 'records', 'church', 'barriers', 3, 'usually', 'compelling', 'light', 
'believed', 'opponents', 'justified', 'pregnancy', 'immigrant', 'approach', 'mandate', 'morally', 
'forcing', 'genuine', 'battles', 'criminal', 'known', 'dignity', 'bigger', 'charity', 'breakdown', 
'freedoms', 'interstate', 'godgiven', 'compliance', 'trading', 'restore', 'throughout', 'recognize', 
'creativity', 'impose', 'currently', 'loan', 'philosophy', 'movie', 'mandates', 'disruption', 
'association', 'overcome', 'ignorance', 'proposals', 'murders', 'dependency', 'vice', 'established', 
'consume', 'cultural', 'represent', 'emotional', 'trillions', 'active', 'tyranny', 'fails', 'fully', 
'reports', 'destroys', 'criminals', 'mutually', 'possibly', 'whatever', 'privileges', 'stake', 
'surely', 'minorities', 'gasoline', 'harms', 'bailouts', 'informed', 'rewarding', 'john', 'christians', 
'religion', 'economists', 'alarming', 'costly', 'saw', 'ineffective', 'teen', 'absolute', 'voting',
 'gold', 'consequence', 'fdr', 'sovereignty', 'leader', 'comply', 'principle', 'republic', 'consider', 
 'student', 'doctors', 'clause', 'hearts', 'porn', 'acorn', 'mind', 'spirit', 'b', 'entertainment', 
 'possibility', 'shift', 'focusing', 'imposition', 'industrial', 'maintenance', 'christ', 
 'christianity', 'dr', 'clearly', 'guarantee', 'spends', 'total', 'immense', 'traffic', 'perfectly', 
 'rely', 'felt', 'writing', 'kennedy', 'trouble', 'unborn', 'powers', 'departments', 'determine', 
 'motivated', 'dependence', 'brought', 'exposure', 'virtually', 'pushed', 'female', 'ideological', 
 'bible', 'judges', 'december', 'period', 'ignorant', 'entitled', 'losing', 'socialism', 'web', 
 'talent', 'environmentalism', 'intentions', 'schemes', 'lawsuit', 'desperate', 'beliefs',
  'whites', 'came', 'character', 'taught', 'premiums', 'decision', 'samesex', 'article', 'borrowers', 
  'reflect', 'attract', 'license', 'ipcc', 'defending', 'male', 'arms', 'critics', 'guncontrol', 
  'virtues', 'changed', 'previously', 'hospitals', 'bailout', 'acting', 'written', 'described', 'sending',
   'youth', 'strongly', 'bankrupting', 'recently', 'entitlement', 'workforce', 'lesser', 'design', 'related',
    'disease', 'boosting', 'addiction', 'concerns', 'neoliberal', 'opposite', 'remain', 'leverage', 
    'european', 'super', 'stage', 'purchases', 'solved', 'hundreds', 'controlled', 'rejecting', 'meet', 
    'rationale', 'teaching', 'existence', 'surplus', 'drained', 'subsidize', 'deregulation', 'potentially',
     'acceptance', 'checks', 'tolerance', 'discipline', 'governor', 'ad', 'criticize', 'statement', 
     'artificially', 'neither', 'blacks', 'faithbased', 'obtain', 'deliver', 'planners', 'fix', 'iran', 
     'temporary', 'nays', 'strength', 'manner', 'overspending', 'socialized', 'kept', 'assure', 'candidate', 
     'task', 'harmless', 'threatens', 'area', 'external', 'worked', 'erode', 'worried', 'immediately', 
     'aspect', 'appear', 'evils', 'bankroll', 'divorce', 'mean', 'cheaper', 'dominance', 'works', 'suggest', 
     'efficiently', 'violation', 'liabilities', 'contemporary', 'thomas', 'energyefficiency', 'friend', 
     'promoting', 'fought', 'payments', 'charitable', 'recovery', 'released', 'constantly', 'sort', 
     'founding', 'appreciate', 'sales', 'heritage', 'england', 'massachusetts', 'brutal', 'situation',
      'term', 'negligible', 'regime', 'cash', 'restricting', 'litigation', 'concludes', 'diseases', 
      'typically', 'core', 'incorporate', 'discredit', 'ted', 'author', 'requires', 'creditors', 
      'exorbitant', 'routinely', 'agendas', 'birth', 'method', 'lowering', 'happens', 'inducing', 
      'inventors', 'provider', 'ownership', 'bodies', 'believers', 'learn', 'hunting', 'traditions', 
      'catholics', 'excellence', 'illness', 'reporting', 'encouragement', 'terrorists', 'interfere', 
      'ice', 'chapter', 'size', 'alcohol', 'goals', 'panic', 'freed', 'hurts', 'employee', 'adopt', 
      'fundraiser', 'suffered', 'adverse', 'entitlements', 'democrat', 'unfunded', 'beings', 'exercise', 
      'continuing', 'barack', 'asian', 'ladder', 'exist', 'compensation', 'insane', 'misleading', 'aliens',
       'tyranny', 'communist', 'criminal', 'freedom', 'radical', 'traitors', 'welfare', 'corruption', 
       'illegal', 'individualism', 'individual', 'responsibility', 'constitutional', 'constitution', 
       'overreach', 'incompetent', 'values', 'free', 'liberty', 'liberties', 'marxist', 'marxism', 
       'elites', 'socialist', 'socialists', 'socialism', 'patriot', 'patriots', 'patriotism', 'thugs', 
       'thug', 'families', 'family', 'honest', 'Christian', 'penalty', 'creators', 'globalism', 
       'Soros', 'terror', 'terrorist', 'rights', 'lawlessness'];
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
}
function toggleHighlight(){
    console.log("toggling");
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
