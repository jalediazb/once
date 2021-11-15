var aviso = document.getElementById('aviso-cookies')
var btnAceptar = document.getElementById('aceptar-cookies')
var btnRechazar = document.getElementById('rechazar-cookies')
var dominio = document.location.host

function ocultarAviso () {
    aviso.classList.remove('is-active')
}

function aceptaCookies () {
    ocultarAviso()
    document.cookie = 'cookies_advice_' + dominio + '=acepta; max-age=31536000; path=/; SameSite=Lax';
    inyectar ()
}

function rechazaCookies () {
    ocultarAviso()
    document.cookie = 'cookies_advice_' + dominio + '=rechaza; max-age=86400; path=/; SameSite=Lax';

    // Anuncios no personalizados
    // (adsbygoogle = window.adsbygoogle || []).requestNonPersonalizedAds = 1;
    // (adsbygoogle = window.adsbygoogle || []).pauseAdRequests = 0
}

function inyectar () {
    if (typeof analyticsID !== 'undefined') {
        /*--- Edit or paste code below ---*/
        // Fichero Externo Analytics
        var jsAnalytics = document.createElement('script')
        jsAnalytics.src = 'https://www.googletagmanager.com/gtag/js?id='.concat(analyticsID)
        // jsAnalytics.async = true;
        document.body.appendChild(jsAnalytics)
        // Codigo Inline Analytics
        var inlineJsAnalytics = document.createElement('script')
        inlineJsAnalyticsCode = document.createTextNode('function gtag(){dataLayer.push(arguments)}window.dataLayer=window.dataLayer||[],gtag("js",new Date),gtag("config","'.concat(analyticsID,"\"); setTimeout(\"gtag('event', 'No Bounce', { 'event_category' : 'Adjusted Bounce' })\",50000);"))
        inlineJsAnalytics.appendChild(inlineJsAnalyticsCode)
        document.body.appendChild(inlineJsAnalytics);

        // Activar personalizacion de anuncios
        // (adsbygoogle = window.adsbygoogle || []).requestNonPersonalizedAds = 0
        // (adsbygoogle = window.adsbygoogle || []).pauseAdRequests = 0
    }
}

// Si no detecta cookie, muestra el aviso
if ( document.cookie.indexOf('cookies_advice_' + dominio) === -1 ) {
    aviso.classList.add('is-active')
}

// Si detecta cookie, y es aceptada inyecta
if ( document.cookie.indexOf('cookies_advice_' + dominio + '=acepta') !== -1 ) {
    inyectar()
}

// Si detecta cookie, y es rechazada
if ( document.cookie.indexOf('cookies_advice_' + dominio + '=rechaza') !== -1 ) {
    // Anuncios no personalizados
    (adsbygoogle = window.adsbygoogle || []).requestNonPersonalizedAds = 1
    (adsbygoogle = window.adsbygoogle || []).pauseAdRequests = 0
}


btnAceptar.addEventListener('click', aceptaCookies)
btnRechazar.addEventListener('click', rechazaCookies)



