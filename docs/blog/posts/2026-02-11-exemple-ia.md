---
date: 2026-02-11
tags:
  - IA
---

# Exemple IA

Ce billet introduit une idée de base en apprentissage automatique.
Un modèle cherche à minimiser une fonction de coût sur des données.
On peut représenter la prédiction linéaire par $\hat{y} = wx + b$.
L’entraînement ajuste les paramètres pour améliorer la généralisation.

$$
\mathcal{L}(w,b) = \frac{1}{n}\sum_{i=1}^{n}(\hat{y_i}-y_i)^2
$$

Cette logique se retrouve dans de nombreux algorithmes modernes.
