let scanArticle = document.getElementById('scanArticle');
let libwordcount = document.getElementById('libwordcount');

String.prototype.replaceAtIndex = function(index, value, wordlen) {
    return ` <span> ${this.substr(0, index)}</span>` + value + `<span>${this.substr(index + wordlen)} </span>`
}

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
