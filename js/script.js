var sssheet = (function() {
	var style = document.createElement("style");
	style.appendChild(document.createTextNode(""));
	document.head.appendChild(style);
	return style.sheet;
})();

var isPixnet = false;
if (window.location.href.indexOf('pixnet')!=-1) {
	isPixnet = true;
}
if (window.location.href.indexOf('paulyear.com')!=-1) {
	isPixnet = true;
}

if (isPixnet) {
	jQuery('#pixad1101d').css('overflow', 'hidden');jQuery('.sticky-box').remove();
	jQuery('#main').css('overflow', 'hidden');jQuery('.article-body iframe').remove();
	jQuery('.article-body .adsbygoogle').remove();jQuery('.article-body').removeClass('show-summary');
	jQuery('.article-header .adsbygoogle').remove();
	jQuery('.header-ad').css({height: '120px'});

	jQuery('a img').parent().css('pointer-events', 'none');
	jQuery("iframe[src*='maps.google.com']").remove();
	jQuery("iframe[src*='www.google.com/maps']").remove();
	jQuery("iframe[src*='facebook.com']").remove();
	jQuery('#main .relative-article').remove();jQuery('.article-body').css('overflow-x', 'hidden');
	jQuery('#recommend-tools').remove();jQuery('#main .comment-form').remove();
	jQuery('#main .article-comments').remove(); jQuery('#header-bar__share-tools').remove();
	jQuery('#header .bar--reading span').remove();

	jQuery('#sb-site #logo').remove(); jQuery('#wrapper #toggleMenu').remove(); jQuery('#float_fb_plugin').remove();

	sssheet.insertRule("#scupio_interstitialad { display: none !important; }", 0);
	sssheet.insertRule(".pop-ad-cover { display: none !important; }", 0);
	sssheet.insertRule(".pi-ad-mobile-tag-outer { display: none !important; }", 0);

	if (window.location.href.indexOf('bluehero.pixnet')!=-1) {
		jQuery('table,embed').width('100%');
	}

}
else if (window.location.href.indexOf('yukiblog.tw')!=-1) {
	$('.adsbygoogle').remove();$('.postad').remove();$("iframe").remove();
}
else if (window.location.href.indexOf('wiselyview.cc')!=-1) {
	sssheet.insertRule("#top-btn { display: none !important; }", 0);
}
else if (window.location.href.indexOf('wiselyview.cc')!=-1) {
	jQuery("iframe").remove();jQuery("#aswift_0_expand").remove();jQuery("#aswift_3_expand").remove();
}
else if (window.location.href.indexOf('candicecity.com')!=-1) {
	jQuery('.adsbygoogle, .sharedaddy').remove();
	sssheet.insertRule(".pi-ad-mobile-tag-outer { display: none !important; }", 0);
	sssheet.insertRule(".pi-Ad-mb-stick { display: none !important; }", 0);
}
else if (window.location.href.indexOf('starwing.cc')!=-1) {
	sssheet.insertRule(".adsbygoogle { display: none !important; }", 0);
}
else if (window.location.href.indexOf('yuann.tw')!=-1) {
	jQuery("a[href='http://radarurl.com/monitor']").remove();
}
else if (window.location.href.indexOf('ladymoko.com')!=-1) {
	jQuery('.adsbygoogle').remove();
}
else if (window.location.href.indexOf('xuite.net')!=-1) {
	jQuery('#rmiad').remove();
	sssheet.insertRule("#rmiad { display: none !important; }", 0);
}

sssheet.insertRule(".pi-ad-mobile-tag-outer { display: none !important; }", 0);
sssheet.insertRule(".pi-Ad-mb-stick { display: none !important; }", 0);
// sssheet.insertRule(".adsbygoogle ins { display: none !important; }", 0);
sssheet.insertRule(".nc_wrapper .floatBottom { display: none !important; }", 0);




// Yuki
// jQuery('.article-header .adsbygoogle').css({height: '120px', overflow: 'hidden'});