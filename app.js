// Zweisprachige Texte (DE / EN). Umschaltung über die DE/EN-Buttons oben rechts.
const I18N = {
  de: {
    brand: "AM · App-Entwicklung",
    nav_back: "← zurück",
    hero_title: "Ich baue Ihre App-Idee fertig.",
    hero_sub: "iOS und Android aus einer Hand — KI-gestützt entwickelt, von einem Entwickler mit über 20 Jahren Erfahrung.",
    hero_cta: "Projekt anfragen",
    services_title: "Was ich für Sie mache",
    svc_1: "Komplette App-Entwicklung — von der Idee bis in den Store",
    svc_2: "MVP-Entwicklung für Gründer & Startups",
    svc_3: "iOS & Android — nativ oder plattformübergreifend",
    svc_4: "Prototypen und kleine, klar abgegrenzte Apps",
    svc_5: "Bestehende Apps erweitern und warten",
    svc_6: "Veröffentlichung im App Store und bei Google Play",
    approach_title: "Mein Ansatz: KI-gestützt",
    approach_text: "Ich entwickle mit einem konsequent KI-gestützten Ansatz. Ihr Vorteil: spürbar schneller und günstiger als bei einer klassischen Agentur — für die Qualität stehe ich dabei selbst gerade. Wenn Sie technische Vorgaben haben, richte ich mich danach.",
    portfolio_title: "Eigene Apps",
    app_umrechner: "Schneller, übersichtlicher Einheiten-Umrechner mit tausenden Nutzern. Nativ für iOS und Android.",
    app_podcast: "Schlanker Podcast-Player mit aktuellen Charts und zuverlässiger Hintergrund-Wiedergabe.",
    app_feste: "Findet Feste und Veranstaltungen in der Region — auch offline. Für iOS, Android und Web.",
    link_web: "Web",
    about_title: "Über mich",
    about_1: "Guten Tag, ich bin Andreas Maier — freiberuflicher App-Entwickler aus Lorch, Baden-Württemberg. Softwareentwicklung ist seit über 20 Jahren mein Beruf: ausgebildeter Fachinformatiker für Anwendungsentwicklung, langjährige Praxis mit Java und Swift, Desktop-Anwendungen ebenso wie iPhone-Apps — und selbstständig.",
    about_2: "Heute baue ich vor allem komplette Apps für iOS und Android, nativ oder plattformübergreifend. Besonders gut passe ich zu klar umrissenen Projekten und MVPs; kleinere Aufgaben übernehme ich genauso gern wie größere Vorhaben.",
    contact_title: "Ihre Idee?",
    contact_text: "Erzählen Sie mir von Ihrem Vorhaben — ich melde mich schnell und ehrlich zurück, was sich umsetzen lässt.",
    contact_cta: "E-Mail schreiben",
    footer_imprint: "Impressum",
    footer_privacy: "Datenschutz",
    footer_home: "← Startseite",
    // Impressum
    imp_title: "Impressum",
    imp_intro: "Angaben gemäß § 5 DDG (Digitale-Dienste-Gesetz):",
    imp_addr: "Andreas Maier<br>Dürerstr. 14<br>73547 Lorch<br>Deutschland",
    imp_contact_h: "Kontakt",
    imp_contact_p: "E-Mail: andreas_maier@me.com",
    imp_resp_h: "Verantwortlich für den Inhalt",
    imp_resp_p: "Andreas Maier (Anschrift wie oben)",
    imp_liab_h: "Haftung für Inhalte und Links",
    imp_liab_p: "Die Inhalte dieser Seite wurden mit größtmöglicher Sorgfalt erstellt. Für Richtigkeit, Vollständigkeit und Aktualität wird keine Gewähr übernommen. Für die Inhalte externer Links sind ausschließlich deren Betreiber verantwortlich.",
    // Datenschutz
    dp_title: "Datenschutzerklärung",
    dp1_h: "1. Verantwortlicher",
    dp1_addr: "Andreas Maier<br>Dürerstr. 14, 73547 Lorch, Deutschland<br>E-Mail: andreas_maier@me.com",
    dp2_h: "2. Aufruf dieser Website (Server-Logs)",
    dp2_p: "Beim Aufruf dieser Website werden durch den Hosting-Anbieter automatisch Daten in Server-Logfiles gespeichert, die Ihr Browser übermittelt: IP-Adresse, Datum und Uhrzeit des Zugriffs, aufgerufene Seite sowie verwendeter Browser und Betriebssystem. Die Verarbeitung erfolgt zur technischen Bereitstellung und Sicherheit der Website auf Grundlage unseres berechtigten Interesses (Art. 6 Abs. 1 lit. f DSGVO). Die Logdaten werden nach kurzer Zeit gelöscht, soweit sie nicht für Sicherheitszwecke benötigt werden.",
    dp3_h: "3. Keine Cookies, kein Tracking",
    dp3_p: "Diese Website setzt keine Cookies und verwendet keine Analyse- oder Tracking-Dienste. Ihre Sprachauswahl (DE/EN) wird ausschließlich lokal in Ihrem Browser gespeichert und nicht an mich oder Dritte übertragen.",
    dp4_h: "4. Kontaktaufnahme",
    dp4_p: "Wenn Sie mich per E-Mail kontaktieren, verarbeite ich Ihre Angaben ausschließlich zur Bearbeitung Ihrer Anfrage (Art. 6 Abs. 1 lit. b und f DSGVO). Die Daten werden gelöscht, sobald sie nicht mehr benötigt werden und keine gesetzlichen Aufbewahrungspflichten entgegenstehen.",
    dp5_h: "5. Externe Links",
    dp5_p: "Diese Website verlinkt auf externe Angebote (z. B. App Store, Google Play). Für deren Inhalte und den dortigen Datenschutz sind ausschließlich die jeweiligen Anbieter verantwortlich.",
    dp6_h: "6. Ihre Rechte",
    dp6_p: "Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch sowie das Recht auf Beschwerde bei einer Datenschutz-Aufsichtsbehörde."
  },
  en: {
    brand: "AM · App Development",
    nav_back: "← Back",
    hero_title: "I build your app idea, start to finish.",
    hero_sub: "iOS and Android from a single source — AI-assisted, by a developer with 20+ years of experience.",
    hero_cta: "Request a project",
    services_title: "What I do for you",
    svc_1: "Complete app development — from idea to the store",
    svc_2: "MVP development for founders & startups",
    svc_3: "iOS & Android — native or cross-platform",
    svc_4: "Prototypes and small, well-defined apps",
    svc_5: "Extending and maintaining existing apps",
    svc_6: "Publishing to the App Store and Google Play",
    approach_title: "My approach: AI-assisted",
    approach_text: "I develop with a consistently AI-assisted approach. Your advantage: noticeably faster and more affordable than a traditional agency — while I personally stand behind the quality. When you have technical requirements, I follow them.",
    portfolio_title: "My own apps",
    app_umrechner: "Fast, clean unit converter with thousands of users. Native for iOS and Android.",
    app_podcast: "Lean podcast player with current charts and reliable background playback.",
    app_feste: "Finds festivals and events nearby — even offline. For iOS, Android and Web.",
    link_web: "Web",
    about_title: "About me",
    about_1: "Hello, I'm Andreas Maier — a freelance app developer from Lorch, Baden-Württemberg. Software development has been my profession for over 20 years: a trained IT specialist in application development, with long experience in Java and Swift, desktop applications as well as iPhone apps — employed and self-employed.",
    about_2: "Today I mainly build complete apps for iOS and Android, native or cross-platform. I'm a great fit for clearly scoped projects and MVPs; small tasks are just as welcome as larger ones.",
    contact_title: "Got an idea?",
    contact_text: "Tell me about your project — I'll get back to you quickly and honestly about what's possible.",
    contact_cta: "Send an email",
    footer_imprint: "Legal notice",
    footer_privacy: "Privacy",
    footer_home: "← Home",
    // Impressum / Legal notice
    imp_title: "Legal Notice",
    imp_intro: "Information pursuant to § 5 DDG (German Digital Services Act):",
    imp_addr: "Andreas Maier<br>Dürerstr. 14<br>73547 Lorch<br>Germany",
    imp_contact_h: "Contact",
    imp_contact_p: "Email: andreas_maier@me.com",
    imp_resp_h: "Responsible for the content",
    imp_resp_p: "Andreas Maier (address as above)",
    imp_liab_h: "Liability for content and links",
    imp_liab_p: "The contents of this page were created with the utmost care. No guarantee is given for the accuracy, completeness or timeliness. The operators of external links are solely responsible for their content.",
    // Datenschutz / Privacy policy
    dp_title: "Privacy Policy",
    dp1_h: "1. Controller",
    dp1_addr: "Andreas Maier<br>Dürerstr. 14, 73547 Lorch, Germany<br>Email: andreas_maier@me.com",
    dp2_h: "2. Accessing this website (server logs)",
    dp2_p: "When you access this website, the hosting provider automatically stores data in server log files that your browser transmits: IP address, date and time of access, the page accessed, and the browser and operating system used. Processing takes place for the technical provision and security of the website on the basis of our legitimate interest (Art. 6(1)(f) GDPR). The log data is deleted after a short time, unless it is required for security purposes.",
    dp3_h: "3. No cookies, no tracking",
    dp3_p: "This website does not set any cookies and does not use any analytics or tracking services. Your language selection (DE/EN) is stored exclusively locally in your browser and is not transmitted to me or any third parties.",
    dp4_h: "4. Contacting me",
    dp4_p: "If you contact me by email, I process your details exclusively to handle your request (Art. 6(1)(b) and (f) GDPR). The data is deleted as soon as it is no longer needed and no statutory retention obligations apply.",
    dp5_h: "5. External links",
    dp5_p: "This website links to external services (e.g. App Store, Google Play). The respective providers are solely responsible for their content and their data protection.",
    dp6_h: "6. Your rights",
    dp6_p: "You have the right to access, rectification, erasure, restriction of processing, data portability and objection, as well as the right to lodge a complaint with a data protection supervisory authority."
  }
};

function applyLang(lang){
  if(!I18N[lang]) lang = "de";
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(function(el){
    var k = el.getAttribute("data-i18n");
    if(I18N[lang][k] != null) el.textContent = I18N[lang][k];
  });
  document.querySelectorAll("[data-i18n-html]").forEach(function(el){
    var k = el.getAttribute("data-i18n-html");
    if(I18N[lang][k] != null) el.innerHTML = I18N[lang][k];
  });
  document.querySelectorAll(".lang-switch button").forEach(function(b){
    b.classList.toggle("active", b.getAttribute("data-lang") === lang);
  });
  try { localStorage.setItem("am_build_lang", lang); } catch(e){}
}

(function(){
  var saved = null;
  try { saved = localStorage.getItem("am_build_lang"); } catch(e){}
  var initial = saved || (((navigator.language || "de").slice(0,2) === "en") ? "en" : "de");
  document.querySelectorAll(".lang-switch button").forEach(function(b){
    b.addEventListener("click", function(){ applyLang(b.getAttribute("data-lang")); });
  });
  applyLang(initial);
})();
