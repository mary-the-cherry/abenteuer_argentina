window.cookieconsent.initialise({
  palette: {
    popup: {
      background: '#3c404d',
      text: '#d6d6d6',
    },
    button: {
      background: '#28a745',
    },
  },
  theme: 'classic',
    position: 'bottom-right',
    type: "opt-in",
  content: {
    message:
      'Du magst Cookies genauso gerne wie ich? Dann lasse dir Dank der Cookies ein besseres Websiteerlebnis bescheren. ',
    link: 'Erfahre mehr über die Cookies!',
      dismiss: 'Nur essentielle Cookies',
      allow:'Gib mir Cookies!',
     deny: 'Nur essentielle Cookies',
    href: 'https://abenteuer-argentina.de/datenschutzerklaerung.html',
    },
    onInitialise: function (status) {
        var type = this.options.type;
        var didConsent = this.hasConsented();
        if (type == 'opt-in' && didConsent) {
            console.log("1. Enable");
            window['ga-disable-UA-175425475-1'] = false;
        }
        if (type == 'opt-out' && !didConsent) {
            // disable cookies
            console.log("1. Disable");
            window['ga-disable-UA-175425475-1'] = true;
        }
    },
    onStatusChange: function (status, chosenBefore) {
        var type = this.options.type;
        var didConsent = this.hasConsented();
        if (type == 'opt-in' && didConsent) {
            // enable cookies
            console.log("2. Enable");
            window['ga-disable-UA-175425475-1'] = false;
        }
        if (type == 'opt-out' && !didConsent) {
            // disable cookies
            console.log("2. Disable");
            window['ga-disable-UA-175425475-1'] = true;
        }
    },
    onRevokeChoice: function () {
        var type = this.options.type;
        if (type == 'opt-in') {
            // disable cookies
            console.log("3. Disable");
            window['ga-disable-UA-175425475-1'] = true;
        }
        if (type == 'opt-out') {
            // enable cookies
            console.log("3. Enable");
            window['ga-disable-UA-175425475-1'] = false;
        }
    },

});
