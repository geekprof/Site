document.addEventListener("DOMContentLoaded", function() {
    // Chercher les métadonnées de l'article (date, catégories)
    const meta = document.querySelector(".md-post__inner .md-post__meta");
    const toc = document.querySelector(".md-sidebar--secondary .md-nav--secondary ul");

    if (meta && toc) {
        // Créer un conteneur pour la sidebar
        const metaContainer = document.createElement("div");
        metaContainer.className = "custom-meta-sidebar";
        metaContainer.innerHTML = "<strong>Informations</strong>" + meta.innerHTML;
        
        // L'ajouter après la table des matières
        toc.closest(".md-nav--secondary").appendChild(metaContainer);
    }
});
