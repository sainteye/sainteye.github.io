if (window.location.href.indexOf('yukiblog.tw')!=-1) {
	$('.adsbygoogle').remove();$('.postad').remove();$("iframe").remove();
	return;
}

if (window.location.href.indexOf('pixnet')==-1) {
	return;
}
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
var sssheet = (function() {
	var style = document.createElement("style");
	style.appendChild(document.createTextNode(""));
	document.head.appendChild(style);
	return style.sheet;
})();
sssheet.insertRule("#scupio_interstitialad { display: none !important; }", 0);
sssheet.insertRule(".pop-ad-cover { display: none !important; }", 0);
// Yuki
// jQuery('.article-header .adsbygoogle').css({height: '120px', overflow: 'hidden'});