# Les pages du Prof Geek 🚀

Bienvenue sur le dépôt du site **Les pages du Prof Geek**. Ce site regroupe des ressources, des notes et des articles autour de la **Physique-Chimie**, de l'**Intelligence Artificielle** et de la **Pédagogie numérique**.

Le site est construit avec **MkDocs Material** et déployé automatiquement via **GitHub Actions**.

---

# Guide : Ajouter du contenu facilement 📝

Pour que la mise à jour de votre site soit un plaisir et non une corvée technique, voici la méthode la plus simple.

## 1. La méthode "Zéro Installation" (via GitHub)
Vous pouvez ajouter un article sans même ouvrir VS Code ou Git, directement depuis votre navigateur :
1. Allez sur votre dépôt GitHub.
2. Naviguez vers `docs/blog/posts/`.
3. Cliquez sur **Add file** > **Create new file**.
4. Nommez-le sous la forme `AAAA-MM-JJ-titre.md`.
5. Copiez-collez le **Modèle** ci-dessous et remplissez-le.
6. Cliquez sur **Commit changes...** en haut à droite.
7. C'est tout ! Le site se met à jour tout seul en 1 minute.

## 2. Le Modèle d'article (Template)
Copiez-collez ce bloc au début de chaque nouvel article :

```markdown
---
date: 2026-02-11
categories:
  - IA et Éducation
---

# Titre de votre article

Votre texte ici en Markdown. 
C'est comme écrire un e-mail avec quelques symboles :
- **Gras** pour l'importance.
- *Italique* pour les termes.
- `###` pour les sous-titres.
```

## 3. Le mode "Autopilote"
Le site est configuré pour être totalement automatique :
- Votre article apparaîtra **automatiquement** sur la page du Blog.
- Il sera **automatiquement** classé dans la bonne rubrique sur la page d'accueil (Physique, Chimie ou IA et Éducation) grâce à son étiquette `categories`.

Plus besoin de toucher à aucun autre fichier !

## 4. Insérer des images 🖼️
Pour ajouter une image dans votre article :

1. **Déposez votre image** dans le dossier : `docs/assets/images/`
2. **Utilisez ce code** dans votre texte Markdown :
   ```markdown
   ![Description de l'image](assets/images/votre-image.jpg)
   ```
   *(Note : Assurez-vous que le nom du fichier est identique)*.

---

### Astuces :
- **Anciens articles** : Pour créer un nouvel article, le plus simple est d'ouvrir un article existant, de copier son contenu, et de s'en servir de base.
- **Preview** : Si vous utilisez VS Code, cliquez sur l'icône de loupe en haut à droite pour voir le rendu avant d'envoyer !
