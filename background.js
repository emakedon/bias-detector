chrome.runtime.onInstalled.addListener(function() {
	chrome.storage.sync.set({color: '#00FF00', color1: '#acdeef', color2: '#f6adbb', buttonstatus: 'false'}, function() {
	});
	chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
	  chrome.declarativeContent.onPageChanged.addRules([{
		conditions: [new chrome.declarativeContent.PageStateMatcher({
		  pageUrl: {hostEquals: 'developer.chrome.com'},
		})
		],
			actions: [new chrome.declarativeContent.ShowPageAction()]
	  }]);
	});
  });