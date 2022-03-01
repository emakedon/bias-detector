// let changeColor = document.getElementById('changeColor');

// chrome.storage.sync.get('color', function(data) {
//   changeColor.style.backgroundColor = data.color;
//   changeColor.setAttribute('value', data.color);
// });

// changeColor.onclick = function(element) {
//     let color = element.target.value;
//     chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//       chrome.tabs.executeScript(
//           tabs[0].id,
//           {code: 'document.body.style.backgroundColor = "' + color + '";'});
//     });
//   };

let highlightBias = document.getElementById('highlightBias');

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

chrome.storage.sync.get('color', function(data) {
    highlightBias.style.backgroundColor = data.color;
    highlightBias.setAttribute('value', data.color);
});

highlightBias.onclick = function(element) {
    let color = element.target.value;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {code: 'document.body.style.backgroundColor = "' + color + '";'});
    });
  };