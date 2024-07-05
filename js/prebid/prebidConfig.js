// Modules: userId, appierBidAdapter, appierBidAdapter, appierBidAdapter, appierBidAdapter, asealBidAdapter, bridgewellBidAdapter, openxBidAdapter, teadsBidAdapter, consentManagement, consentManagementGpp, consentManagementUsp, enrichmentFpdModule, gdprEnforcement, gppControl_usnat, gptPreAuction, currency, prebidServerBidAdapter, schain, criteoIdSystem, teadsIdSystem, uid2IdSystem
// Use: line_item_manager to create line item

var pbjs = pbjs || {}
pbjs.que = pbjs.que || []
pbjs.que.push(function () {
  pbjs.setConfig({
    deviceAccess: true,
    priceGranularity: 'auto',
    currency: {
      adServerCurrency: 'USD',
      granularityMultiplier: 1,
      defaultRates: { USD: { TWD: 31 }, TWD: { USD: 0.03 } },
      rates: { USD: { TWD: 31 }, TWD: { USD: 0.03 } },
    },
    userSync: {
      userIds: [
        {
          name: 'teadsId',
          params: {
            pubId: 25645,
          },
        },
      ],
    },
  })
  pbjs.bidderSettings = {
    teads: {
      storageAllowed: true,
    },
  }
  pbjs.addAdUnits([
    {
      // ifoodie_post_end
      code: 'div-gpt-ad-1607503109429-0',
      mediaTypes: {
        banner: {
          sizes: [
            [1, 1],
            [300, 250],
            [336, 280],
          ],
        },
      },
      floors: {
        default: 0.01,
      },
      bids: [
        {
          bidder: 'teads',
          params: {
            placementId: 189357,
            pageId: 174400,
          },
        },
        // {
        //   bidder: 'bridgewell',
        //   params: {
        //     cid: 19647,
        //   },
        // },
        {
          bidder: 'clickforce',
          params: {
            zone: '18846',
          },
        },
      ],
    },
    {
      // ifoodie_post_begin
      code: 'div-gpt-ad-1604643823354-0',
      mediaTypes: {
        banner: {
          sizes: [
            [1, 1],
            [300, 250],
            [336, 280],
          ],
        },
      },
      floors: {
        default: 0.01,
      },
      bids: [
        {
          bidder: 'teads',
          params: {
            placementId: 189357,
            pageId: 174400,
          },
        },
        // {
        //   bidder: 'bridgewell',
        //   params: {
        //     cid: 19634,
        //   },
        // },
        {
          bidder: 'clickforce',
          params: {
            zone: '18212',
          },
        },
      ],
    },
    {
      // ifoodie_article_inread_1
      code: 'div-gpt-ad-1597893529239-0',
      mediaTypes: {
        banner: {
          sizes: [
            [1, 1],
            [300, 250],
            [336, 280],
          ],
        },
      },
      floors: {
        default: 0.01,
      },
      bids: [
        {
          bidder: 'teads',
          params: {
            placementId: 189357,
            pageId: 174400,
          },
        },
        // {
        //   bidder: 'bridgewell',
        //   params: {
        //     cid: 19641,
        //   },
        // },
        {
          bidder: 'clickforce',
          params: {
            zone: '18842',
          },
        },
      ],
    },
    {
      // ifoodie_article_inread_2
      code: 'div-gpt-ad-1600151549294-0',
      mediaTypes: {
        banner: {
          sizes: [
            [1, 1],
            [300, 250],
            [336, 280],
          ],
        },
      },
      floors: {
        default: 0.01,
      },
      bids: [
        {
          bidder: 'teads',
          params: {
            placementId: 189357,
            pageId: 174400,
          },
        },
        // {
        //   bidder: 'bridgewell',
        //   params: {
        //     cid: 19642,
        //   },
        // },
        {
          bidder: 'clickforce',
          params: {
            zone: '18843',
          },
        },
      ],
    },
    {
      // ifoodie_post_desktop_inread
      code: 'div-gpt-ad-1618910700996-0',
      mediaTypes: {
        banner: {
          sizes: [
            [1, 1],
            // [300, 250],
          ],
        },
      },
      floors: {
        default: 0.01,
      },
      bids: [
        {
          bidder: 'teads',
          params: {
            placementId: 189357,
            pageId: 174400,
          },
        },
      ],
    },
    // ==== ifoodie ====
    {
      // ifoodie_article_320x100
      code: 'div-gpt-ad-1647504834610-0',
      mediaTypes: {
        banner: {
          sizes: [
            [320, 100],
            [320, 50],
          ],
        },
      },
      floors: {
        default: 0.4,
      },
      bids: [
        {
          bidder: 'teads',
          params: {
            placementId: 191019,
            pageId: 176031,
          },
        },
        // {
        //   bidder: 'bridgewell',
        //   params: {
        //     cid: 19635,
        //   },
        // },
        {
          bidder: 'clickforce',
          params: {
            zone: '18213',
          },
        },
      ],
    },
    {
      // ifoodie_popup_970x250
      code: 'div-gpt-ad-1635653502147-0',
      mediaTypes: {
        banner: {
          sizes: [
            [950, 90],
            [980, 90],
            [930, 180],
            [970, 66],
            [980, 120],
            [728, 90],
            [960, 90],
            [970, 250],
            [970, 90],
          ],
        },
      },
      floors: {
        default: 3.6,
      },
      bids: [
        {
          bidder: 'teads',
          params: {
            placementId: 191019,
            pageId: 176031,
          },
        },
        // {
        //   bidder: 'bridgewell',
        //   params: {
        //     cid: 19636,
        //   },
        // },
        {
          bidder: 'clickforce',
          params: {
            zone: '18214',
          },
        },
      ],
    },
    {
      // ifoodie_popup_320x480
      code: 'div-gpt-ad-1608888303981-0',
      mediaTypes: {
        banner: {
          sizes: [[320, 480]],
        },
      },
      floors: {
        default: 5,
      },
      bids: [
        {
          bidder: 'teads',
          params: {
            placementId: 191019,
            pageId: 176031,
          },
        },
      ],
    },
    {
      // ifoodie_popup_300x250
      code: 'div-gpt-ad-1587457527646-0',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 250],
            [336, 280],
          ],
        },
      },
      floors: {
        default: 3,
      },
      bids: [
        {
          bidder: 'teads',
          params: {
            placementId: 191019,
            pageId: 176031,
          },
        },
        {
          bidder: 'clickforce',
          params: {
            zone: '19007',
          },
        },
      ],
    },
    {
      // ifoodie_restaurant_desktop_728x90
      code: 'div-gpt-ad-1627917815759-0',
      mediaTypes: {
        banner: {
          sizes: [[728, 90]],
        },
      },
      floors: {
        default: 0.6,
      },
      bids: [
        {
          bidder: 'teads',
          params: {
            placementId: 191019,
            pageId: 176031,
          },
        },
      ],
    },
    {
      // ifoodie_restaurant_desktop_inread
      code: 'div-gpt-ad-1617174764203-0',
      mediaTypes: {
        banner: {
          sizes: [
            [468, 60],
            [480, 320],
            [336, 280],
            [300, 250],
          ],
        },
      },
      floors: {
        default: 0.01,
      },
      bids: [
        {
          bidder: 'teads',
          params: {
            placementId: 191019,
            pageId: 176031,
          },
        },
        // {
        //   bidder: 'bridgewell',
        //   params: {
        //     cid: 19648,
        //   },
        // },
        {
          bidder: 'clickforce',
          params: {
            zone: '18847',
          },
        },
      ],
    },
    {
      // ifoodie_restaurant_top
      code: 'div-gpt-ad-1648114466176-0',
      mediaTypes: {
        banner: {
          sizes: [
            [1, 1],
            [300, 250],
            [336, 280],
          ],
        },
      },
      floors: {
        default: 1.3,
      },
      bids: [
        {
          bidder: 'teads',
          params: {
            placementId: 191018,
            pageId: 176030,
          },
        },
        // {
        //   bidder: 'bridgewell',
        //   params: {
        //     cid: 19637,
        //   },
        // },
        {
          bidder: 'clickforce',
          params: {
            zone: '18215',
          },
        },
      ],
    },
    {
      // ifoodie_explore_desktop_inread
      code: 'div-gpt-ad-1618366243171-0',
      mediaTypes: {
        banner: {
          sizes: [
            [1, 1],
            [480, 320],
            [336, 280],
            [300, 250],
          ],
        },
      },
      floors: {
        default: 0.01,
      },
      bids: [
        {
          bidder: 'teads',
          params: {
            placementId: 191018,
            pageId: 176030,
          },
        },
        // {
        //   bidder: 'bridgewell',
        //   params: {
        //     cid: 19638,
        //   },
        // },
        {
          bidder: 'clickforce',
          params: {
            zone: '18216',
          },
        },
      ],
    },
    {
      // ifoodie_explore_desktop_second_inread
      code: 'div-gpt-ad-1634977976638-0',
      mediaTypes: {
        banner: {
          sizes: [[1, 1]],
        },
      },
      floors: {
        default: 0.2,
      },
      bids: [
        {
          bidder: 'teads',
          params: {
            placementId: 191018,
            pageId: 176030,
          },
        },
      ],
    },
    {
      // ifoodie_search_recommend_0
      code: 'div-gpt-ad-1688016069151-0',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 250],
            [336, 280],
            [1, 1],
          ],
        },
      },
      floors: {
        default: 0.01,
      },
      bids: [
        {
          bidder: 'teads',
          params: {
            placementId: 191018,
            pageId: 176030,
          },
        },
        // {
        //   bidder: 'bridgewell',
        //   params: {
        //     cid: 19650,
        //   },
        // },
        {
          bidder: 'clickforce',
          params: {
            zone: '18849',
          },
        },
      ],
    },
    {
      // ifoodie_post_inread_0
      code: 'div-gpt-ad-1688010381407-0',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 250],
            [336, 280],
            [1, 1],
          ],
        },
      },
      floors: {
        default: 0.01,
      },
      bids: [
        {
          bidder: 'teads',
          params: {
            placementId: 191018,
            pageId: 176030,
          },
        },
        {
          bidder: 'clickforce',
          params: {
            zone: '19008',
          },
        },
      ],
    },
    {
      // ifoodie_post_inread_1
      code: 'div-gpt-ad-1640920888717-0',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 250],
            [336, 280],
            [1, 1],
          ],
        },
      },
      floors: {
        default: 0.01,
      },
      bids: [
        {
          bidder: 'teads',
          params: {
            placementId: 191018,
            pageId: 176030,
          },
        },
      ],
    },
    {
      // ifoodie_post_inread_2
      code: 'div-gpt-ad-1640920915564-0',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 250],
            [336, 280],
            [1, 1],
          ],
        },
      },
      floors: {
        default: 0.01,
      },
      bids: [
        {
          bidder: 'teads',
          params: {
            placementId: 191018,
            pageId: 176030,
          },
        },
      ],
    },
    {
      // ifoodie_search_top
      code: 'div-gpt-ad-1604812887987-0',
      mediaTypes: {
        banner: {
          sizes: [
            [1, 1],
            [300, 250],
            [336, 280],
          ],
        },
      },
      floors: {
        default: 0.01,
      },
      bids: [
        {
          bidder: 'teads',
          params: {
            placementId: 191018,
            pageId: 176030,
          },
        },
        // {
        //   bidder: 'bridgewell',
        //   params: {
        //     cid: 19639,
        //   },
        // },
        {
          bidder: 'clickforce',
          params: {
            zone: '18217',
          },
        },
      ],
    },
    {
      // ifoodie_search_recommend_1
      code: 'div-gpt-ad-1688016649708-0',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 250],
            [336, 280],
            [1, 1],
          ],
        },
      },
      floors: {
        default: 0.01,
      },
      bids: [
        {
          bidder: 'teads',
          params: {
            placementId: 191018,
            pageId: 176030,
          },
        },
        // {
        //   bidder: 'bridgewell',
        //   params: {
        //     cid: 19651,
        //   },
        // },
        {
          bidder: 'clickforce',
          params: {
            zone: '18850',
          },
        },
      ],
    },
    {
      // ifoodie_search_recommend_2
      code: 'div-gpt-ad-1688029436468-0',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 250],
            [336, 280],
            [1, 1],
          ],
        },
      },
      floors: {
        default: 0.01,
      },
      bids: [
        {
          bidder: 'teads',
          params: {
            placementId: 191018,
            pageId: 176030,
          },
        },
        // {
        //   bidder: 'bridgewell',
        //   params: {
        //     cid: 19652,
        //   },
        // },
        {
          bidder: 'clickforce',
          params: {
            zone: '18851',
          },
        },
      ],
    },
    {
      // ifoodie_restaurant_blog_bottom_hi
      code: 'div-gpt-ad-1687943907042-0',
      mediaTypes: {
        banner: {
          sizes: [[1, 1], [336, 280], [300, 250]],
        },
      },
      floors: {
        default: 0.01,
      },
      bids: [
        {
          bidder: 'teads',
          params: {
            placementId: 191018,
            pageId: 176030,
          },
        },
      ],
    },
    {
      // ifoodie_restaurant_checkin_bottom
      code: 'div-gpt-ad-1604910381655-0',
      mediaTypes: {
        banner: {
          sizes: [
            [1, 1],
            [336, 280],
            [300, 250],
            [320, 480],
          ],
        },
      },
      floors: {
        default: 0.01,
      },
      bids: [
        {
          bidder: 'teads',
          params: {
            placementId: 191018,
            pageId: 176030,
          },
        },
      ],
    },
    {
      // ifoodie_search_list_0_hi
      code: 'div-gpt-ad-1687944133133-0',
      mediaTypes: {
        banner: {
          sizes: [
            [1, 1],
            [300, 250],
            [336, 280],
          ],
        },
      },
      floors: {
        default: 0.01,
      },
      bids: [
        {
          bidder: 'teads',
          params: {
            placementId: 191018,
            pageId: 176030,
          },
        },
        // {
        //   bidder: 'bridgewell',
        //   params: {
        //     cid: 19640,
        //   },
        // },
        {
          bidder: 'clickforce',
          params: {
            zone: '18841',
          },
        },
      ],
    },
    {
      // ifoodie_explore_youtube_2
      code: 'div-gpt-ad-1648785277406-0',
      mediaTypes: {
        banner: {
          sizes: [
            [1, 1],
            [300, 250],
            [336, 280],
          ],
        },
      },
      floors: {
        default: 0.01,
      },
      bids: [
        {
          bidder: 'teads',
          params: {
            placementId: 191018,
            pageId: 176030,
          },
        },
        {
          bidder: 'clickforce',
          params: {
            zone: '19002',
          },
        },
      ],
    },
    {
      // ifoodie_search_list_1
      code: 'div-gpt-ad-1604978783209-0',
      mediaTypes: {
        banner: {
          sizes: [
            [1, 1],
            [300, 250],
            [336, 280],
          ],
        },
      },
      floors: {
        default: 0.01,
      },
      bids: [
        {
          bidder: 'teads',
          params: {
            placementId: 191018,
            pageId: 176030,
          },
        },
        // {
        //   bidder: 'bridgewell',
        //   params: {
        //     cid: 19646,
        //   },
        // },
        {
          bidder: 'clickforce',
          params: {
            zone: '18845',
          },
        },
      ],
    },
    {
      // ifoodie_search_list_2
      code: 'div-gpt-ad-1648784695488-0',
      mediaTypes: {
        banner: {
          sizes: [
            [1, 1],
            [300, 250],
            [336, 280],
          ],
        },
      },
      floors: {
        default: 0.01,
      },
      bids: [
        {
          bidder: 'teads',
          params: {
            placementId: 191018,
            pageId: 176030,
          },
        },
        {
          bidder: 'clickforce',
          params: {
            zone: '19004',
          },
        },
      ],
    },
    {
      // ifoodie_explore_youtube_1_hi
      code: 'div-gpt-ad-1687966937379-0',
      mediaTypes: {
        banner: {
          sizes: [
            [1, 1],
            [300, 250],
            [336, 280],
          ],
        },
      },
      floors: {
        default: 0.01,
      },
      bids: [
        {
          bidder: 'teads',
          params: {
            placementId: 191018,
            pageId: 176030,
          },
        },
        // {
        //   bidder: 'bridgewell',
        //   params: {
        //     cid: 19649,
        //   },
        // },
        {
          bidder: 'clickforce',
          params: {
            zone: '18848',
          },
        },
      ],
    },
    {
      // ifoodie_restaurant_desktop_right_column_top
      code: 'div-gpt-ad-1604634348324-0',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 250],
            [336, 280],
            [300, 600],
          ],
        },
      },
      floors: {
        default: 0.46,
      },
      bids: [
        {
          bidder: 'teads',
          params: {
            placementId: 191019,
            pageId: 176031,
          },
        },
        // {
        //   bidder: 'bridgewell',
        //   params: {
        //     cid: 19643,
        //   },
        // },
        {
          bidder: 'clickforce',
          params: {
            zone: '18218',
          },
        },
      ],
    },
    {
      // ifoodie_floating_square
      code: 'div-gpt-ad-1647255671474-0',
      mediaTypes: {
        banner: {
          sizes: [[300, 250]],
        },
      },
      floors: {
        default: 0.01,
      },
      bids: [
        {
          bidder: 'teads',
          params: {
            placementId: 191019,
            pageId: 176031,
          },
        },
      ],
    },
    {
      // ifoodie_desktop_bottom
      code: 'div-gpt-ad-1671808613318-0',
      mediaTypes: {
        banner: {
          sizes: [[728, 90]],
        },
      },
      floors: {
        default: 0.01,
      },
      bids: [
        {
          bidder: 'teads',
          params: {
            placementId: 191019,
            pageId: 176031,
          },
        },
      ],
    },
    {
      // ifoodie_restaurant_sidebar_300x600
      code: 'div-gpt-ad-1620029208833-0',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 600],
            [320, 480],
            [336, 280],
            [300, 250],
          ],
        },
      },
      floors: {
        default: 0.01,
      },
      bids: [
        {
          bidder: 'teads',
          params: {
            placementId: 191019,
            pageId: 176031,
          },
        },
        {
          bidder: 'clickforce',
          params: {
            zone: '19005',
          },
        },
      ],
    },
    {
      // ifoodie_search_desktop_1
      code: 'div-gpt-ad-1604842342418-0',
      mediaTypes: {
        banner: {
          sizes: [
            [336, 280],
            [300, 250],
          ],
        },
      },
      floors: {
        default: 0.01,
      },
      bids: [
        {
          bidder: 'teads',
          params: {
            placementId: 191019,
            pageId: 176031,
          },
        },
        // {
        //   bidder: 'bridgewell',
        //   params: {
        //     cid: 19644,
        //   },
        // },
        {
          bidder: 'clickforce',
          params: {
            zone: '18844',
          },
        },
      ],
    },
    {
      // ifoodie_search_desktop_2
      code: 'div-gpt-ad-1604842398257-0',
      mediaTypes: {
        banner: {
          sizes: [
            [336, 280],
            [300, 250],
          ],
        },
      },
      floors: {
        default: 0.01,
      },
      bids: [
        {
          bidder: 'teads',
          params: {
            placementId: 191019,
            pageId: 176031,
          },
        },
        // {
        //   bidder: 'bridgewell',
        //   params: {
        //     cid: 19645,
        //   },
        // },
      ],
    },
  ])
})
