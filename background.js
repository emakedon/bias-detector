console.log("Background running");

chrome.storage.local.get(["badgeText"], ({ badgeText }) => {
	chrome.action.setBadgeText({ text: badgeText });
  });

chrome.action.onClicked.addListener(handleActionClick);
function IconClicked(tab)
{
	let msg = {
		clickedOn : "highlighting on",
        clickedOff : "highlighting off"
	}
	chrome.tabs.sendMessage(tab.id,msg);
}

function buildCanvas(width, height) {
	const canvas = new OffscreenCanvas(width, height);
	return canvas;
  }