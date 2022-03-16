let scanArticle = document.getElementById('scanArticle');
// let viewAnalysis =  document.getElementById('viewAnalysis');
let libwordcount = document.getElementById('libwordcount');
console.log(scanArticle);
// console.log(viewAnalysis);

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
            <p>${response.libwords} words might show <span style="background-color:#9ABFFC ">liberal</span> bias.</p>
            <p> ${response.conswords}  words might show <span style="background-color:#FC9A9A">conservative</span>  bias.</p>
            <p> ${response.angrywords}  words might show <span style="background-color:#ca88fc ">angry</span>  bias.</p>
            <p> ${response.xtremewords}  words might show <span style="background-color:#ABFBAF ">extreme</span>  bias.</p>
            `;
            document.querySelector('#scanArticle').innerText = response.button_status;
    });
    });
};

// viewAnalysis.onclick = function(element) {

//     chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//         let activeTab = tabs[0];
//         chrome.tabs.sendMessage(activeTab.id, {"message": "analyze"});
//     });
// };

