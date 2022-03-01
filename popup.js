let scanArticle = document.getElementById('scanArticle');
let viewAnalysis =  document.getElementById('viewAnalysis');
console.log(scanArticle);
console.log(viewAnalysis);

String.prototype.replaceAtIndex = function(index, value, wordlen) {
    return ` <span> ${this.substr(0, index)}</span>` + value + `<span>${this.substr(index + wordlen)} </span>`
}

scanArticle.onclick = function(element) {

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        let activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, {"message": "highlight"});
        });
    };

viewAnalysis.onclick = function(element) {

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        let activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, {"message": "analyze"});
        });
    };