import Typed from 'typed.js';
 const loadDynamicBannerText = function ()  {
  new Typed('#banner-typed-text', {
    strings: ["Be creative.", "Be bold.", "Unleash the passion.", "Create your cocktails today", "and share them with the world."],
    typeSpeed: 80,
    loop: false
  });
}
 export { loadDynamicBannerText };
