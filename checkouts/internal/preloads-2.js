
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/polyfills-legacy.CVG96VhB.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/app-legacy.ZDJd-zJ_.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/page-OnePage-legacy.CYvV-AHp.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/DeliveryMethodSelectorSection-legacy.DWM-XdVU.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/useEditorShopPayNavigation-legacy.BBr75Rhj.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/VaultedPayment-legacy.By48MUPx.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/LocalizationExtensionField-legacy.CpZxdw_4.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/RememberMeDescriptionText-legacy.C0rVap-j.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/ShopPayOptInDisclaimer-legacy.BFWyJd5u.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/PayButtonSection-legacy.Cj7d37pS.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/component-ShopPayVerificationSwitch-legacy.IaKP-uGq.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/useSubscribeMessenger-legacy.bFIlfBj2.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.fr/index-legacy.BZCe_mqi.js"];
      var styles = [];
      var fontPreconnectUrls = ["https://fonts.shopifycdn.com"];
      var fontPrefetchUrls = ["https://fonts.shopifycdn.com/inter/inter_n4.481bd4d19704ca98fb1d3abd50c668b6962860a2.woff2?h1=ZmVhc3RhYmxlcy5jb20&hmac=f2362d0c07c861854961e9c52925d6cf1aaeebad5d7591ea86b9d27976b4085a","https://fonts.shopifycdn.com/inter/inter_n7.50ef4139896edec0637fde057914fbf7e3a8d56e.woff2?h1=ZmVhc3RhYmxlcy5jb20&hmac=e0b63c2a47dd1309ed9ca20b967c3ec13095f4b6d9ebccd1a2d7b4db5c55c364","https://fonts.shopifycdn.com/prompt/prompt_n4.a0d8d0b044775ceddc106ae236fbbcc8363bb3fa.woff2?h1=ZmVhc3RhYmxlcy5jb20&hmac=c2ba0a193a13774b7b0b4d9290370c258104fb8c84e8e7788e0fe12bbca1bd2f","https://fonts.shopifycdn.com/prompt/prompt_n7.fc3862c8bbb0ff06bba7f3afbfb5dad83225f43a.woff2?h1=ZmVhc3RhYmxlcy5jb20&hmac=ad16e3f72af816e09c03b15ddfd4c9b661491058825fc7a82410a170b717bf06"];
      var imgPrefetchUrls = ["https://cdn.shopify.com/s/files/1/0551/6060/2784/files/Feastables_Logo_2024_x320.png?v=1696022323"];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        function run() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        }
        var next = (self.requestIdleCallback || setTimeout).bind(self, run);
        next();
      }

      function onLoaded() {
        try {
          if (parseFloat(navigator.connection.effectiveType) > 2 && !navigator.connection.saveData) {
            preconnectAssets();
            prefetchAssets();
          }
        } catch (e) {}
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  