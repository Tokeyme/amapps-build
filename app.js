// Zweisprachige Texte (DE / EN). Umschaltung über die DE/EN-Buttons oben rechts.
const I18N = {
  de: {
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
    footer_privacy: "Datenschutz"
  },
  en: {
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
    footer_privacy: "Privacy"
  }
};

function applyLang(lang){
  if(!I18N[lang]) lang = "de";
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(function(el){
    var k = el.getAttribute("data-i18n");
    if(I18N[lang][k] != null) el.textContent = I18N[lang][k];
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
