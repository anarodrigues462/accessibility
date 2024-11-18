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
    togglePortugueseStylesheet(lang); 
}

function togglePortugueseStylesheet(lang) {
    const head = document.querySelector('head');
    const link = document.querySelector('#styles-link');

    if (link) {
        head.removeChild(link); 
    } else if (lang === 'pt') {
        const newLink = document.createElement('link');
        newLink.id = 'styles-link';
        newLink.rel = 'stylesheet';
        newLink.href = 'css/stylePT.css'; 
        head.appendChild(newLink);
    }
}

window.addEventListener('DOMContentLoaded', async () => {
    const userPreferredLanguage = localStorage.getItem('language') || 'en';
    const langData = await fetchLanguageData(userPreferredLanguage);
    updateContent(langData);
    togglePortugueseStylesheet(userPreferredLanguage);
});

function toggleTheme() {
    const body = document.body;
    const currentTheme = body.getAttribute("data-theme");
    const themeIcon = document.getElementById("theme-icon");
    const themeText = document.getElementById("theme-text");

    if (currentTheme === "dark") {
        body.setAttribute("data-theme", "light");
        themeIcon.classList.remove("fa-sun");
        themeIcon.classList.add("fa-moon");
        themeText.textContent = "Modo Escuro"; 
        localStorage.setItem("theme", "light");
    } else {
        body.setAttribute("data-theme", "dark");
        themeIcon.classList.remove("fa-moon");
        themeIcon.classList.add("fa-sun");
        themeText.textContent = "Modo Claro"; 
        localStorage.setItem("theme", "dark");
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme") || "light";
    document.body.setAttribute("data-theme", savedTheme);


    const themeIcon = document.getElementById("theme-icon");
    const themeText = document.getElementById("theme-text");
    if (savedTheme === "dark") {
        themeIcon.classList.remove("fa-moon");
        themeIcon.classList.add("fa-sun");
        themeText.textContent = "Modo Claro";
    } else {
        themeIcon.classList.remove("fa-sun");
        themeIcon.classList.add("fa-moon");
        themeText.textContent = "Modo Escuro";
    }
});

function changeSizeBySlider() {
    let slider = document.getElementById("slider");

    let TextCont = document.getElementById("text-container");

    TextCont.style.fontSize = slider.value + "em";
}

function changeVisible(textId, iconId) {

    const textContainer = document.getElementById(textId);
    const eyeIcon = document.getElementById(iconId);

    const isVisible = textContainer.style.visibility !== 'hidden';

    if (isVisible) {

        textContainer.style.visibility = 'hidden';
        eyeIcon.classList.remove("fa-eye");
        eyeIcon.classList.add("fa-eye-slash");
        localStorage.setItem("visibility", "hidden");
    } else {
 
        textContainer.style.visibility = 'visible';
        eyeIcon.classList.remove("fa-eye-slash");
        eyeIcon.classList.add("fa-eye");
        localStorage.setItem("visibility", "visible");
    }
}

window.onload = () => {
    const savedVisibility = localStorage.getItem("visibility");
    const textContainer = document.getElementById("text-container1");
    const eyeIcon = document.getElementById("eye-icon");

    if (savedVisibility === "hidden") {
        textContainer.style.visibility = 'visible';
        eyeIcon.classList.remove("fa-eye-slash");
        eyeIcon.classList.add("fa-eye");
    }
};