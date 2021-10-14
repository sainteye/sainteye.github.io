var sssheet = (function () {
  var style = document.createElement('style')
  style.appendChild(document.createTextNode(''))
  document.head.appendChild(style)
  return style.sheet
})()

if (window.location.href.indexOf('ifoodie.tw') == -1) {
  // Remove floating ad
  sssheet.insertRule('.adsbygoogle:last-child { display: none !important; }', 0)
  sssheet.insertRule('.anchor-ad-container { display: none !important; }', 0)
  sssheet.insertRule(
    ".adsbygoogle[data-anchor-shown='true'] { display: none !important; }",
    0
  )
  sssheet.insertRule('#blogimoveSLIDE { display: none !important; }', 0)
  sssheet.insertRule('.friends-links { display: none !important; }', 0)
  sssheet.insertRule('#hellobar-bar { display: none !important; }', 0)
  sssheet.insertRule('#gtx-trans { display: none !important; }', 0)
  sssheet.insertRule('#banner-wrapper { display: none !important; }', 0)
  sssheet.insertRule('.nc_wrapper.bottom { display: none !important; }', 0)
  sssheet.insertRule('.mystickyelements-fixed { display: none !important; }', 0)
  // Remove sticky anything
  sssheet.insertRule('.GoTop { display: none !important; }', 0)
  sssheet.insertRule('.sticky { display: none !important; }', 0)
  sssheet.insertRule('.anchor-ad { display: none !important; }', 0)
  sssheet.insertRule('.addiv { display: none !important; }', 0)
  sssheet.insertRule(
    '.wow-gemini-ad-bottom-wrapper { display: none !important; }',
    0
  )

  setTimeout(function () {
    for (i = 0; i < 100; i++) {
      window.clearInterval(i)
    }
  }, 5000)
}

if (window.location.href.indexOf('mirrormedia.mg') != -1) {
  sssheet.insertRule(
    '.header.scrolled .header__section-layer { position: relative !important; }',
    0
  )
  sssheet.insertRule(
    '.header.scrolled .header__logo-layer { position: relative !important; }',
    0
  )
  sssheet.insertRule('.relateds-over-content { display: none !important; }', 0)
  sssheet.insertRule('.dfp-st { display: none !important; }', 0)
}

if (window.location.href.indexOf('ifoodie.tw/post') != -1) {
  sssheet.insertRule('#header { display: none !important; }', 0)
} else if (window.location.href.indexOf('maruko.tw') != -1) {
  sssheet.insertRule('#header-inner { display: none !important; }', 0)
} else if (window.location.href.indexOf('google.com') != -1) {
  sssheet.insertRule('[data-attrid="kc:/location/location:third_party_aggregator_ratings"] { display: none !important; }', 0)
  sssheet.insertRule('[data-attrid="kc:/collection/knowledge_panels/local_reviewable:rate_and_review"] { display: none !important; }', 0)
  sssheet.insertRule('localreviews-place-topics { display: none !important; }', 0)
  sssheet.insertRule('g-sticky-content { display: none !important; }', 0)
  sssheet.insertRule('.kp-hc { display: none !important; }', 0)
  sssheet.insertRule('.kp-header-icon { display: none !important; }', 0)
  sssheet.insertRule('.fixed-title { display: none !important; }', 0)
  sssheet.insertRule('#media_result_group { display: none !important; }', 0)
} else if (window.location.href.indexOf('leafyeh.com') != -1) {
  sssheet.insertRule('.left-side-menu { display: none !important; }', 0)
  sssheet.insertRule('.scrollup { display: none !important; }', 0)
} else if (window.location.href.indexOf('mecocute.com') != -1) {
  sssheet.insertRule('#header { display: none !important; }', 0)
} else if (window.location.href.indexOf('yukiblog.tw') != -1) {
  $('.adsbygoogle').remove()
  $('.postad').remove()
  $('iframe').remove()
} else if (window.location.href.indexOf('wiselyview.cc') != -1) {
  sssheet.insertRule('#top-btn { display: none !important; }', 0)
  sssheet.insertRule('iframe { display: none !important; }', 0)
} else if (window.location.href.indexOf('mshw.info') != -1) {
  sssheet.insertRule('#page { overflow: hidden; }', 0)
  sssheet.insertRule('.adsbygoogle { display: none !important; }', 0)
  sssheet.insertRule('.shr_ss { display: none !important; }', 0)
} else if (window.location.href.indexOf('meishijournal.com') != -1) {
  sssheet.insertRule('.adsbygoogle { display: none !important; }', 0)
} else if (window.location.href.indexOf('wiselyview.cc') != -1) {
  jQuery('iframe').remove()
  jQuery('#aswift_0_expand').remove()
  jQuery('#aswift_3_expand').remove()
} else if (window.location.href.indexOf('lanlan-life.com') != -1) {
  sssheet.insertRule('#header { display: none !important; }', 0)
  sssheet.insertRule('#sharebar { display: none !important; }', 0)
  sssheet.insertRule('#sharebar-block { display: none !important; }', 0)
} else if (window.location.href.indexOf('fengtaiwanway') != -1) {
  sssheet.insertRule('.left-side-menu { display: none !important; }', 0)
  sssheet.insertRule('.Ba_Ad { display: none !important; }', 0)
} else if (window.location.href.indexOf('candicecity.com') != -1) {
  jQuery('.adsbygoogle, .sharedaddy').remove()
  sssheet.insertRule('.pi-Ad-mb-stick { display: none !important; }', 0)
} else if (window.location.href.indexOf('starwing.cc') != -1) {
  sssheet.insertRule('.adsbygoogle { display: none !important; }', 0)
} else if (window.location.href.indexOf('yuann.tw') != -1) {
  jQuery("a[href='http://radarurl.com/monitor']").remove()
} else if (window.location.href.indexOf('ladymoko.com') != -1) {
  jQuery('.adsbygoogle').remove()
} else if (window.location.href.indexOf('xuite.net') != -1) {
  jQuery('#rmiad').remove()
  sssheet.insertRule('#rmiad { display: none !important; }', 0)
}

if (window.location.href.indexOf('ifoodie.tw') == -1) {
  sssheet.insertRule(
    '.subscribe-bar-container { display: none !important; }',
    0
  )
  sssheet.insertRule(
    '.article-author__subscribe { display: none !important; }',
    0
  )
  sssheet.insertRule(
    '.pixnavbar__top-bar__list { display: none !important; }',
    0
  )

  sssheet.insertRule('.pi-ad-mobile-tag-outer { display: none !important; }', 0)
  sssheet.insertRule('.pi-Ad-mb-stick { display: none !important; }', 0)
  sssheet.insertRule('.pi-Ad-mb-stick { visibility: hidden !important; }', 0)
  // sssheet.insertRule(".adsbygoogle ins { display: none !important; }", 0);
  // sssheet.insertRule(".article-body iframe { display: none !important; }", 0);
  // sssheet.insertRule(".article-body .adsbygoogle { display: none !important; }", 0);
  // sssheet.insertRule(".article-header .adsbygoogle { display: none !important; }", 0);
  sssheet.insertRule(
    '.nc_wrapper .floatBottom { display: none !important; }',
    0
  )
  sssheet.insertRule('.header-advertise { display: none !important; }', 0)
  sssheet.insertRule('.drag-wrapper { display: none !important; }', 0)
  sssheet.insertRule('.fixed-top { display: none !important; }', 0)
  sssheet.insertRule('.addiv { display: none !important; }', 0)
  sssheet.insertRule(
    '.wow-gemini-ad-bottom-wrapper { display: none !important; }',
    0
  )
  sssheet.insertRule(
    '.right-nav-stream-button { display: none !important; }',
    0
  )
  sssheet.insertRule('.right-nav-share-button { display: none !important; }', 0)
  sssheet.insertRule('.sticky-box { display: none !important; }', 0)
  sssheet.insertRule('#pilot { display: none !important; }', 0)
  sssheet.insertRule('.fb_iframe_widget { display: none !important; }', 0)

  if (Math.random() > 0.2) {
    sssheet.insertRule('.pop-ad-cover { display: none !important; }', 0)
    sssheet.insertRule(
      '#scupio_interstitialad { display: none !important; }',
      0
    )
    sssheet.insertRule('#scupio_interstitial { display: none !important; }', 0)
    sssheet.insertRule('#incover-layout0 { display: none !important; }', 0)
  }

  sssheet.insertRule('.sticky-box { display: none !important; }', 0)
  sssheet.insertRule('#pixad1101d { overflow: hidden !important; }', 0)
  sssheet.insertRule('#main { overflow: hidden !important; }', 0)
  sssheet.insertRule('.header-ad { height: 120px !important; }', 0)
  sssheet.insertRule('#main .relative-article { display: none !important; }', 0)
  sssheet.insertRule('.article-body { overflow-x: hidden !important; }', 0)
  sssheet.insertRule('#recommend-tools { display: none !important; }', 0)
  sssheet.insertRule('#main .comment-form { display: none !important; }', 0)
  sssheet.insertRule('#comment-block { display: none !important; }', 0)
  sssheet.insertRule('#main .article-comments { display: none !important; }', 0)
  sssheet.insertRule(
    '#header-bar__share-tools { display: none !important; }',
    0
  )
  sssheet.insertRule(
    '#header .bar--reading span { display: none !important; }',
    0
  )
  sssheet.insertRule('#sb-site #logo { display: none !important; }', 0)
  sssheet.insertRule('#wrapper #toggleMenu { display: none !important; }', 0)
  sssheet.insertRule('#float_fb_plugin { display: none !important; }', 0)

  if (jQuery) {
    jQuery('.article-body').removeClass('show-summary')
    jQuery('a img').parent().css('pointer-events', 'none')
    jQuery("iframe[src*='maps.google.com']").remove()
    jQuery("iframe[src*='www.google.com/maps']").remove()
    jQuery("iframe[src*='facebook.com']").remove()

    if (window.location.href.indexOf('bluehero.pixnet') != -1) {
      jQuery('table,embed').width('100%')
    }
  }
}

// Yuki
// jQuery('.article-header .adsbygoogle').css({height: '120px', overflow: 'hidden'});
