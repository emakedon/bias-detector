console.log("Background running");
chrome.browserAction.onClicked.addListener(IconClicked);
function IconClicked(tab)
{
	let msg = {
		clickedOn : "highlighting on",
        clickedOff : "highlighting off"
	}
	chrome.tabs.sendMessage(tab.id,msg);
}