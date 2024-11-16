function updateContent(langData) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        element.innerHTML = langData[key];
    });
}

function setLanguagePreference(lang) {
    localStorage.setItem('language', lang);
    location.reload();
}

async function fetchLanguageData(lang) {
    const response = await fetch(`languages/${lang}.json`);
    return response.json();
}

async function changeLanguage(lang) {
    await setLanguagePreference(lang);
    
    const langData = await fetchLanguageData(lang);
    updateContent(langData);
    togglePortugueseStylesheet(lang); // Toggle Portuguese stylesheet
}

// Function to toggle Portuguese stylesheet based on language selection
function togglePortugueseStylesheet(lang) {
    const head = document.querySelector('head');
    const link = document.querySelector('#styles-link');

    if (link) {
        head.removeChild(link); // Remove the old stylesheet link
    } else if (lang === 'pt') {
        const newLink = document.createElement('link');
        newLink.id = 'styles-link';
        newLink.rel = 'stylesheet';
        newLink.href = 'css/stylePT.css'; // Path to Portuguese stylesheet
        head.appendChild(newLink);
    }
}

// Call updateContent() on page load
window.addEventListener('DOMContentLoaded', async () => {
    const userPreferredLanguage = localStorage.getItem('language') || 'en';
    const langData = await fetchLanguageData(userPreferredLanguage);
    updateContent(langData);
    togglePortugueseStylesheet(userPreferredLanguage);
});

function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }