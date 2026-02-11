---
title: Les lois de Kepler selon Feynman
date: 2026-02-11
categories:
  - Physique
---

<!-- more -->

# Les lois de Kepler selon Feynman

![Illustration Newton](../../assets/images/diffusion-chaotique-henon_square.svg)

## 1re partie : la loi des aires

On vise ici la 2e loi de Kepler : **aires égales en temps égaux** (démonstration de Newton).
On considère une planète soumise à une force centrale, c’est-à-dire toujours dirigée vers le Soleil, noté $S$. On veut montrer que, pour des intervalles de temps égaux $\Delta t$, le rayon vecteur $\overrightarrow{SP}$ balaie des aires égales.

---

### 1) Idée de Newton : « impulsions » successives
Pour raisonner géométriquement, Newton remplace l’action gravitationnelle continue par une suite d’impulsions brèves appliquées à intervalles réguliers $\Delta t$. Entre deux impulsions, le mouvement est rectiligne uniforme (principe d’inertie). Ensuite, on fait tendre $\Delta t$ vers 0 pour retrouver la trajectoire réelle.

### 2) Construction sur deux intervalles successifs
À l’instant $t_0$, la planète est en $A$. Au bout d’un temps $\Delta t$, elle est en $B$. On étudie ensuite l’intervalle suivant $[t_0+\Delta t,\;t_0+2\Delta t]$.

#### Position inertielle
Si, à partir de $B$, aucune force n’agissait, la planète poursuivrait en ligne droite avec la même vitesse. On construit alors un point $c$ tel que :
$$ \overrightarrow{AB} = \overrightarrow{Bc} $$
Ainsi, les segments $AB$ et $Bc$ ont la même longueur et les droites $(AB)$ et $(Bc)$ sont parallèles.

#### Effet de l’impulsion due au Soleil
En $B$, une « impulsion » due au Soleil modifie la vitesse dans la direction de la droite $(SB)$ (force centrale). On représente cette déviation en traçant, à partir de $c$, un segment $[cC]$ dont la droite support est parallèle à $(SB)$. Le point $C$ est alors la position réelle au bout du second intervalle de temps.

![Figure géometrique Newton](../../assets/images/Gemini_Generated_Image_7oyliv7oyliv7oyl.png)

*Attention au repère temporel : $B$ correspond à $t_0+\Delta t$ et $C$ correspond à $t_0+2\Delta t$.*

---

### 3) Égalité des aires balayées
On compare les aires des triangles formés avec le point $S$.

#### Aire($SAB$) = Aire($SBc$)
Les triangles $SAB$ et $SBc$ ont le même sommet $S$. Les segments $AB$ et $Bc$ ont la même longueur, et les droites $(AB)$ et $(Bc)$ sont parallèles (puisque $\overrightarrow{AB}$ et $\overrightarrow{Bc}$ sont colinéaires). La distance de $S$ à la droite $(AB)$ est donc égale à la distance de $S$ à la droite $(Bc)$. Les hauteurs correspondantes sont égales, donc :
$$ Aire(SAB) = Aire(SBc) $$

#### Aire($SBc$) = Aire($SBC$)
Les triangles $SBc$ et $SBC$ ont la même base $SB$. Or la droite $(cC)$ est parallèle à $(SB)$, donc les points $c$ et $C$ sont situés sur une droite parallèle à la base $(SB)$. Leur distance à la droite $(SB)$ est la même, donc les hauteurs relatives à la base $SB$ sont égales. Ainsi :
$$ Aire(SBc) = Aire(SBC) $$

### Conclusion
En combinant les deux égalités, on obtient :
$$ Aire(SAB) = Aire(SBC) $$

Donc, pendant deux intervalles successifs de même durée $\Delta t$, les aires balayées par le rayon vecteur sont égales. En répétant le raisonnement pas de temps après pas de temps, les aires balayées sont égales pour tous les intervalles de temps égaux. En faisant tendre $\Delta t$ vers 0, on retrouve la trajectoire lisse et la loi reste vraie : **aires égales en temps égaux**.

### Remarque importante
Cette preuve ne dépend pas de la forme précise de la loi d’attraction (pas besoin de $1/r^2$). Elle utilise seulement le fait que la force est **centrale**, donc dirigée vers $S$.
