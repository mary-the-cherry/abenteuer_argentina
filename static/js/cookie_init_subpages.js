// obtain cookieconsent plugin
var cc = initCookieConsent();

// run plugin with config object
cc.run({
    autorun: true,
    delay: 0,
    current_lang: 'de',
    theme_css: "../static/css/cookieconsent.css",
    autoclear_cookies: true,
    cookie_expiration: 365,

    gui_options: {
        consent_modal: {
            layout: 'cloud',
            position: 'bottom',
            transition: 'slide'
        },
        settings_modal: {
            layout: 'box',
            transition: 'slide'
        }
    },

    onAccept: function (cookies) {
        if (cc.allowedCategory('analytics_cookies')) {
            cc.loadScript('https://www.google-analytics.com/analytics.js', function () {
                ga('create', 'UA-175425475-1', 'auto');  //replace UA-XXXXXXXX-Y with your tracking code
                ga('send', 'pageview');
            });
        }
    },

    languages: {
        de: {
            consent_modal: {
                title: "Magst du Cookies",
                description: 'Hi, ich nutze hier Cookies. Einige von ihnen sind essenziell, andere helfen mir dabei, diese Website für dich zu verbessern und alle Inhalte kostenlos anzubieten.   <a aria-label="Cookie policy" class="cc-link" href="datenschutzerklaerung.html">Lese mehr dazu</a>',
                primary_btn: {
                    text: 'Akzeptieren',
                    role: 'accept_all'				//'accept_selected' or 'accept_all'
                },
                secondary_btn: {
                    text: 'Individuelle Einstellungen',
                    role: 'settings'				//'settings' or 'accept_necessary'
                }
            },
            settings_modal: {
                title: 'Cookie Einstellungen',
                save_settings_btn: "Speichere Einstellungen",
                accept_all_btn: "Akzeptiere ALLE",
                cookie_table_headers: [
                    { col1: "Name" },
                    { col2: "Dienst"},
                    { col3: "Anbieter" },
                    { col4: "Zweck" },
                    { col5: "Cookie Laufzeit" }
                ],
                blocks: [
                    {
                        title: "Cookie Einstellungen",
                        description: 'Hier findest du eine Übersicht über alle verwendeten Cookies. Du kannst die Zustimmung zu ganzen Kategorien geben oder dir weitere Informationen anzeigen lassen und so nur bestimmte Cookies auswählen.'
                    }, {
                        title: "Essenzielle Cookies",
                        description: 'Diese Cookies sind essenziell für die Funktionalität der Website. Ohne diese Cookies wäre die Website nicht arbeitsfähig.',
                        toggle: {
                            value: 'necessary_cookies',
                            enabled: true,
                            readonly: true
                        }
                    }, {
                        title: "Statistiken",
                        description: 'Statistik Cookies erfassen Informationen anonym. Diese Informationen helfen uns zu verstehen, wie unsere Besucher unsere Website nutzen.',
                        toggle: {
                            value: 'analytics_cookies',
                            enabled: false,
                            readonly: false
                        },
                        cookie_table: [
                            {
                                col1: '_ga',
                                col2: 'Google Analytics',
                                col3: 'Google LLC',
                                col4: 'Cookie von Google für Website-Analysen. Erzeugt statistische Daten darüber, wie der Besucher die Website nutzt.',
                                col5: '2 Jahre'
                            },
                            {
                                col1: '_gat',
                                col2: 'Google Analytics',
                                col3: 'Google LLC',
                                col4: 'Cookie von Google für Website-Analysen.',
                                col5: '2 Jahre'
                            },
                            {
                                col1: '_gid',
                                col2: 'Google Analytics',
                                col3: 'Google LLC',
                                col4: 'Cookie von Google für Website-Analysen.',
                                col5: '2 Jahre'
                            },
                        ]
                    }, {
                        title: "Weitere Infos",
                        description: 'Weitere Informationen zu den Cookies und der Datenschutzerklärung findest du <a class="cc-link" href="datenschutzerklaerung.html">hier</a>.',
                    }
                ]
            }
        }
    }
});