var sssheet = (function() {
	var style = document.createElement("style");
	style.appendChild(document.createTextNode(""));
	document.head.appendChild(style);
	return style.sheet;
})();

sssheet.insertRule(".adsbygoogle { display: none !important; }", 0);
sssheet.insertRule("iframe { display: none !important; }", 0);
sssheet.insertRule(".pop-ad-cover { display: none !important; }", 0);
sssheet.insertRule(".fbAdLink { display: none !important; }", 0);
