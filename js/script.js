var sssheet = (function() {
	var style = document.createElement("style");
	style.appendChild(document.createTextNode(""));
	document.head.appendChild(style);
	return style.sheet;
})();

for(i=0; i<100; i++)
{
    window.clearInterval(i);
}

if (window.location.href.indexOf('ifoodie.tw')==-1) {
	// Remove floating ad
	sssheet.insertRule(".adsbygoogle:last-child { display: none !important; }", 0);
	sssheet.insertRule(".adsbygoogle[data-anchor-shown='true'] { display: none !important; }", 0);
}


if (window.location.href.indexOf('ifoodie.tw/post')!=-1) {
	sssheet.insertRule("#header { display: none !important; }", 0);
}

else if (window.location.href.indexOf('yukiblog.tw')!=-1) {
	$('.adsbygoogle').remove();$('.postad').remove();$("iframe").remove();
}
else if (window.location.href.indexOf('wiselyview.cc')!=-1) {
	sssheet.insertRule("#top-btn { display: none !important; }", 0);
}
else if (window.location.href.indexOf('mshw.info')!=-1) {
	sssheet.insertRule("#page { overflow: hidden; }", 0);
	sssheet.insertRule(".adsbygoogle { display: none !important; }", 0);
	sssheet.insertRule(".shr_ss { display: none !important; }", 0);
}
else if (window.location.href.indexOf('meishijournal.com')!=-1) {
	sssheet.insertRule(".adsbygoogle { display: none !important; }", 0);
}
else if (window.location.href.indexOf('wiselyview.cc')!=-1) {
	jQuery("iframe").remove();jQuery("#aswift_0_expand").remove();jQuery("#aswift_3_expand").remove();
}
else if (window.location.href.indexOf('lanlan-life.com')!=-1) {
	sssheet.insertRule("#header { display: none !important; }", 0);
	sssheet.insertRule("#sharebar { display: none !important; }", 0);
	sssheet.insertRule("#sharebar-block { display: none !important; }", 0);
}
else if (window.location.href.indexOf('fengtaiwanway')!=-1) {
	sssheet.insertRule(".left-side-menu { display: none !important; }", 0);
	sssheet.insertRule(".Ba_Ad { display: none !important; }", 0);
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
sssheet.insertRule(".pi-Ad-mb-stick { visibility: hidden !important; }", 0);
// sssheet.insertRule(".adsbygoogle ins { display: none !important; }", 0);
sssheet.insertRule(".nc_wrapper .floatBottom { display: none !important; }", 0);
sssheet.insertRule(".header-advertise { display: none !important; }", 0);
sssheet.insertRule(".drag-wrapper { display: none !important; }", 0);
sssheet.insertRule(".fixed-top { display: none !important; }", 0);
sssheet.insertRule(".addiv { display: none !important; }", 0);
sssheet.insertRule(".wow-gemini-ad-bottom-wrapper { display: none !important; }", 0);
sssheet.insertRule(".pi-ad-mobile-tag-outer { display: none !important; }", 0);
sssheet.insertRule(".right-nav-stream-button { display: none !important; }", 0);
sssheet.insertRule(".right-nav-share-button { display: none !important; }", 0);
sssheet.insertRule(".sticky-box { display: none !important; }", 0);

if (Math.random() > 0.2) {
	sssheet.insertRule(".pop-ad-cover { display: none !important; }", 0);
	sssheet.insertRule("#scupio_interstitialad { display: none !important; }", 0);
	sssheet.insertRule("#scupio_interstitial { display: none !important; }", 0);
	sssheet.insertRule("#incover-layout0 { display: none !important; }", 0);
}


if (jQuery) {
	jQuery('#pixad1101d').css('overflow', 'hidden');
	jQuery('.sticky-box').remove();
	jQuery('#main').css('overflow', 'hidden');
	jQuery('.article-body iframe').remove();
	jQuery('.article-body .adsbygoogle').remove();
	jQuery('.article-body').removeClass('show-summary');
	jQuery('.article-header .adsbygoogle').remove();
	jQuery('.header-ad').css({height: '120px'});

	jQuery('a img').parent().css('pointer-events', 'none');
	jQuery("iframe[src*='maps.google.com']").remove();
	jQuery("iframe[src*='www.google.com/maps']").remove();
	jQuery("iframe[src*='facebook.com']").remove();
	jQuery('#main .relative-article').remove();
	jQuery('.article-body').css('overflow-x', 'hidden');
	jQuery('#recommend-tools').remove();
	jQuery('#main .comment-form').remove();
	jQuery('#main .article-comments').remove();
	jQuery('#header-bar__share-tools').remove();
	jQuery('#header .bar--reading span').remove();

	jQuery('#sb-site #logo').remove();
	jQuery('#wrapper #toggleMenu').remove();
	jQuery('#float_fb_plugin').remove();

	if (window.location.href.indexOf('bluehero.pixnet')!=-1) {
		jQuery('table,embed').width('100%');
	}

}



// Yuki
// jQuery('.article-header .adsbygoogle').css({height: '120px', overflow: 'hidden'});