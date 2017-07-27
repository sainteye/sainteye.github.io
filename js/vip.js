var sssheet = (function() {
	var style = document.createElement("style");
	style.appendChild(document.createTextNode(""));
	document.head.appendChild(style);
	return style.sheet;
})();

sssheet.insertRule(".adsbygoogle { display: none !important; }", 0);
sssheet.insertRule(".pop-ad-cover { display: none !important; }", 0);
sssheet.insertRule("#scupio_interstitialad { display: none !important; }", 0);
sssheet.insertRule("#scupio_interstitial { display: none !important; }", 0);
sssheet.insertRule(".fbAdLink { display: none !important; }", 0);
sssheet.insertRule(".header-ad { display: none !important; }", 0);
sssheet.insertRule("#ad_root, #ad_root_2, #ad_root_3 { display: none !important; }", 0);

if (window.location.href.indexOf('ifoodie.tw')==-1) {
	sssheet.insertRule("iframe { display: none !important; }", 0);
}
