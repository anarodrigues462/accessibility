function changeVisible() {
    const element = document.getElementById("text-container1");
    const visibleIcon = document.getElementById("eye-button").firstElementChild;
    
    // Verificar estado atual
    const isCurrentlyVisible = element.style.visibility !== 'hidden';

    if (isCurrentlyVisible) {
        // Tornar invisível
        element.style.visibility = 'hidden';
        visibleIcon.classList.remove("fa-eye");
        visibleIcon.classList.add("fa-eye-slash");
        localStorage.setItem("visible", "hidden");
    } else {
        // Tornar visível
        element.style.visibility = 'visible';
        visibleIcon.classList.remove("fa-eye-slash");
        visibleIcon.classList.add("fa-eye");
        localStorage.setItem("visible", "visible");
    }
}

// Restaurar estado ao carregar a página
window.onload = () => {
    const savedState = localStorage.getItem("visible");
    const element = document.getElementById("text-container1");
    const visibleIcon = document.getElementById("eye-button").firstElementChild;

    if (savedState === "hidden") {
        element.style.visibility = 'hidden';
        visibleIcon.classList.remove("fa-eye");
        visibleIcon.classList.add("fa-eye-slash");
    } else {
        element.style.visibility = 'visible';
        visibleIcon.classList.remove("fa-eye-slash");
        visibleIcon.classList.add("fa-eye");
    }
};