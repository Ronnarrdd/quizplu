# Quiz PLU (Codes d’Articles)

> **Note légale** : Ce projet est un outil **personnel** et n’est **pas** affilié à une enseigne ou une entreprise particulière. Il sert uniquement de support pour mémoriser des codes d’articles (PLU).

## Description

**Quiz PLU** est une application web visant à s’entraîner à retenir des codes d’articles, aussi appelés **PLU**. Elle se présente sous différentes versions HTML selon la quantité d’articles ou le niveau de difficulté souhaité.

### Versions disponibles

1. **`hard.html`** : Une version “avancée” ou “plus compliquée” du quiz, avec davantage d’articles (et potentiellement plus difficiles).  
2. **`quizv2.html`** et **`quizv2.1.html`** : Des variantes du quiz offrant des fonctionnalités légèrement différentes ou une présentation alternative.  

Toutes ces pages s’appuient sur un fichier CSV (`articles.csv`) qui contient la liste des articles (nom, code PLU, etc.).

## Fonctionnalités principales

- **Affichage aléatoire d’articles** : À chaque nouvelle question, un article est sélectionné au hasard dans la liste du CSV.  
- **Saisie du code PLU** : L’utilisateur doit entrer le code correspondant à l’article affiché.  
- **Vérification de la réponse** : Le quiz indique si le code est correct et peut proposer une nouvelle question.  
- **Possible affichage d’images** : Chaque article peut être associé à une image pour faciliter la mémorisation.  
- **Versions multiples** : Chacune des pages HTML (`hard.html`, `quizv2.html`, etc.) propose un contenu ou une interface différente.

## Installation

1. **Cloner ou télécharger** le dépôt sur votre machine locale.  
2. **Ouvrir** l’une des pages HTML au choix (par ex. `quizv2.html`) dans votre navigateur web.  

> **Remarque** :  
> - Certains navigateurs **bloquent** la lecture de fichiers CSV en local. Pour éviter ce problème, vous pouvez lancer un petit serveur local (ex. via [live-server](https://www.npmjs.com/package/live-server) ou tout autre outil équivalent).  
> - Si des scripts PHP (ajout, suppression, etc.) sont inclus, il faudra alors un serveur web local (XAMPP/WAMP, etc.) pour en profiter pleinement.

## Utilisation

1. **Lancement du Quiz** : Ouvrez `quizv2.html`, `quizv2.1.html` ou `hard.html`.  
2. **Sélection aléatoire** : Le script charge le fichier `articles.csv` (via Papa Parse ou un autre moyen) et choisit un article au hasard.  
3. **Saisie du code** : Saisissez le code PLU dans le champ prévu, puis validez.  
4. **Résultat** : Un message vous informe si votre réponse est correcte ou non.  
5. **Question suivante** : Vous pouvez cliquer pour générer une nouvelle question et poursuivre l’entraînement.

## Personnalisation

- **Modifier la liste d’articles** : Éditez directement le fichier `articles.csv` pour ajouter ou supprimer des lignes (articles).  
- **Adaptation du style** : Vous pouvez ajuster l’apparence (CSS) ou la logique (JS) dans les fichiers HTML ou JavaScript selon vos besoins.  
- **Choix de la version** : Selon votre progression ou la quantité d’articles souhaitée, vous pouvez utiliser la version “hard” ou l’une des versions “v2”.

## Limitations & Évolutions possibles

- **Fichier CSV statique** : L’ajout ou la suppression d’articles nécessite l’édition manuelle du fichier CSV (sauf si un script serveur existe).  
- **Compatibilité navigateur** : Testé principalement sur les navigateurs modernes. Des comportements inattendus peuvent survenir sur des versions obsolètes.  
- **Gestion des scores** : Non incluse par défaut, pourrait être implémentée pour suivre la progression de l’utilisateur.

## Licence & Avertissements

- **Licence** : Vous êtes libre de forker, de réutiliser ou d’adapter ce quiz dans un cadre non commercial.  
- **Avertissement** : Les noms de marques ou d’enseignes mentionnés le sont uniquement à titre d’exemple ou de référence. Aucun partenariat n’est sous-entendu ou formalisé.
