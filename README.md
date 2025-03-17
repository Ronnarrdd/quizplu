# Quiz PLU

Application web d'entraînement aux codes PLU (Price Look-Up).

## Description

Quiz interactif permettant de s'entraîner à mémoriser les codes d'articles. L'application propose différentes versions selon le niveau de difficulté souhaité.

## Versions disponibles

- `hard.html` : Version avancée (plus d'articles)
- `quizv2.html` : Version standard
- `quizv2.1.html` : Version alternative

## Installation

1. Déployer le projet sur un serveur web local (XAMPP/WAMP)
2. Configurer l'authentification dans `config/.htaccess`

## Utilisation

1. Accéder à `http://localhost/quiz-plu/public/`
2. Sélectionner la version souhaitée
3. Entrer le code PLU correspondant à l'article affiché
4. Valider avec Entrée ou le bouton "Soumettre"

## Personnalisation

### Articles
- Éditer `src/data/articles.csv` ou `hard.csv`
- Format : `code,nom,image`
- Images dans `assets/images/`

### Style
- CSS dans `assets/css/style.css`
- Styles inline dans les fichiers HTML

### Fonctionnalités
- JavaScript : `src/js/`
- PHP : `src/php/`

## Support

En cas de problème :
1. Vérifier la console du navigateur
2. Valider les chemins des fichiers
3. Contrôler les permissions

## Licence

MIT - Utilisation libre sans garantie.
