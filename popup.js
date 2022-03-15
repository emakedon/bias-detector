let scanArticle = document.getElementById('scanArticle');
let viewAnalysis =  document.getElementById('viewAnalysis');
let libwordcount = document.getElementById('libwordcount');
console.log(scanArticle);
console.log(viewAnalysis);

String.prototype.replaceAtIndex = function(index, value, wordlen) {
    return ` <span> ${this.substr(0, index)}</span>` + value + `<span>${this.substr(index + wordlen)} </span>`
}

// chrome.runtime.onMessage.addListener(
//     function(request, sender, sendResponse) {
//         if(request.message == "countwords" ){
//             document.querySelector('#libwordcount').innerHTML = `<p> There are ${request.libwords} liberal words.</p>`;
//         }
//     }
// );

scanArticle.onclick = function(element) {

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        let activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, {"message": "highlight"}, function(response) {
            document.querySelector('#libwordcount').innerHTML =
            `
            <p> There are ${response.libwords} <span style="background-color:#9ABFFC ">liberal</span> words.</p>
            <p> There are ${response.conswords}  <span style="background-color:#FC9A9A">conservative</span> words.</p>
            <p> There are ${response.angrywords}  <span style="background-color:#ca88fc ">angry</span> words.</p>
            <p> There are ${response.xtremewords}  <span style="background-color:#ABFBAF ">extreme</span> words.</p>
            `;
    });
    });
};

viewAnalysis.onclick = function(element) {

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        let activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, {"message": "analyze"});
    });
};

