/**
 * BA Study Materials - Internationalization (i18n) Engine
 * Author: Nguyễn Đăng Cẩm Tú (Hazel)
 * Default Language: Vietnamese ('vi')
 * Persistence: localStorage ('ba_study_lang')
 */

(function () {
  const STORAGE_KEY = 'ba_study_lang';
  const DEFAULT_LANG = 'vi';

  function getSavedLanguage() {
    return localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
  }

  function setLanguage(lang) {
    if (lang !== 'vi' && lang !== 'en') lang = 'vi';
    document.documentElement.lang = lang;
    document.documentElement.className = 'lang-' + lang;
    localStorage.setItem(STORAGE_KEY, lang);

    // Update active state on toggle button
    const btnPills = document.querySelectorAll('.lang-pill');
    btnPills.forEach(pill => {
      if (pill.getAttribute('data-lang') === lang) {
        pill.classList.add('active');
      } else {
        pill.classList.remove('active');
      }
    });

    // Dispatch global event for interactive components
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang: lang } }));
  }

  function init() {
    const currentLang = getSavedLanguage();
    setLanguage(currentLang);

    // Bind click events on language toggles
    document.addEventListener('click', function (e) {
      const toggle = e.target.closest('.lang-toggle-btn');
      if (toggle) {
        const current = document.documentElement.lang || DEFAULT_LANG;
        const next = (current === 'vi') ? 'en' : 'vi';
        setLanguage(next);
      }
    });
  }

  window.BA_I18N = {
    getLanguage: getSavedLanguage,
    setLanguage: setLanguage
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
