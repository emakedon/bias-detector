console.log("Background running");
chrome.action.onClicked.addListener(IconClicked);
function IconClicked(tab)
{
	let msg = {
		clickedOn : "highlighting on",
        clickedOff : "highlighting off"
	}
	chrome.tabs.sendMessage(tab.id,msg);
}