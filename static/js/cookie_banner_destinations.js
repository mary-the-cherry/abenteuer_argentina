var CookieBanner = (function () {
  return {
    createCookieWhenBannerIsShown: false,
    createCookieWhenAcceptIsClicked: true,
    cookieDuration: 14, // Number of days before the cookie expires, and the banner reappears
    cookieName: 'cookieConsent', // Name of our cookie
    cookieValue: 'accepted', // Value of cookie

    _createDiv: function (html, mobileVsScreen) {
      var bodytag = document.getElementsByTagName('body')[0];
      var div = document.createElement('div');
      div.setAttribute('id', 'cookie-law');
      div.innerHTML = html;
      if (mobileVsScreen.matches) {
        div.style.flexWrap = 'wrap';
        div.style.justifyContent = 'space-around';
        div.firstChild.style.paddingBottom = '25px';
        div.firstChild.style.paddingRight = '0px';
      } else {
        div.firstChild.style.paddingBottom = '0px';
        div.firstChild.style.paddingRight = '25px';
      }

      bodytag.insertBefore(div, bodytag.firstChild); // Adds the Cookie Law Banner just after the opening <body> tag

      document.getElementsByTagName('body')[0].className += ' cookiebanner'; //Adds a class tothe <body> tag when the banner is visible

      if (CookieBanner.createCookieWhenBannerIsShown) {
        CookieBanner.createAcceptCookie();
      }
    },

    _createCookie: function (name, value, days) {
      var expires;
      if (days) {
        var date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = '; expires=' + date.toGMTString();
      } else {
        expires = '';
      }
      document.cookie = name + '=' + value + expires + '; path=/';
    },

    _checkCookie: function (name) {
      var nameEQ = name + '=';
      var ca = document.cookie.split(';');
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
      }
      return null;
    },

    _eraseCookie: function (name) {
      CookieBanner._createCookie(name, '', -1);
    },

    createAcceptCookie: function () {
      CookieBanner._createCookie(
        CookieBanner.cookieName,
        CookieBanner.cookieValue,
        CookieBanner.cookieDuration
      ); // Create the cookie
    },

    closeBanner: function () {
      var element = document.getElementById('cookie-law');
      element.parentNode.removeChild(element);
    },

    accept: function () {
      CookieBanner.createAcceptCookie();
      CookieBanner.closeBanner();
    },

    showUnlessAccepted: function (html, mobileVsScreen) {
      if (
        CookieBanner._checkCookie(CookieBanner.cookieName) !=
        CookieBanner.cookieValue
      ) {
        CookieBanner._createDiv(html, mobileVsScreen);
      }
    },
  };
})();

window.onload = function () {
  var html =
    '<div>' +
    'Du magst Cookies genauso gerne wie ich? Dann lasse dir Dank der Cookies dieser Seite ein einmaliges ' +
    'Websiteerlebnis jetzt und auch in Zukunft bescheren. Möchtest du weitere Informationen zu den  ' +
    'Cookies dieser Seite haben, dann schaue in die etwas trocken geratene ' +
    '<a class="text-success" href="../datenschutzerklaerung.html">Datenschutzerklärung</a>. ' +
    '<br>' +
    'Stimme zu und genieße einen Einblick in das Land Argentinien mit ein paar Cookies nebenher.' +
    '</div>';

  // Add the accept button
  html +=
    '<div><a href="javascript:void(0);" onclick="CookieBanner.accept();"><span>Zustimmen</span></a></div>';

  var mobileVsScreen = window.matchMedia('(max-width: 700px)');
  CookieBanner.showUnlessAccepted(html, mobileVsScreen);
};
