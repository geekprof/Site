function relocateMetadata() {
    const meta = document.querySelector(".md-post__inner .md-post__meta");
    const sidebar = document.querySelector(".md-sidebar--secondary .md-nav--secondary");

    if (meta && sidebar) {
        // Supprimer l'ancienne sidebar custom si elle existe (pour les changements de page SPA)
        const oldContainer = document.querySelector(".custom-meta-sidebar");
        if (oldContainer) oldContainer.remove();

        const metaContainer = document.createElement("div");
        metaContainer.className = "custom-meta-sidebar";
        metaContainer.innerHTML = "<strong>Informations</strong>" + meta.innerHTML;

        sidebar.appendChild(metaContainer);
    }
}

// Exécuter au chargement et lors des changements de page (navigation instantanée)
document.addEventListener("DOMContentLoaded", relocateMetadata);
if (typeof document.addEventListener === "function") {
    // Pour MkDocs Material qui utilise du chargement instantané
    document.addEventListener("DOMNodeInserted", function (e) {
        if (e.target.id === "__search" || e.target.className === "md-content") {
            relocateMetadata();
        }
    });
}
window.addEventListener("hashchange", relocateMetadata);
