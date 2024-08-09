# Listing de vidéos

Ce projet est un exercice frontend développé avec **React**, utilisant **TailwindCSS** et **Material UI** pour le style, **PropTypes** pour la validation des props.

## Technologies utilisées et documentations

- **React** : https://react.dev/reference/react/hooks
- **TailwindCSS** : https://tailwindcss.com/docs/installation
- **Material UI** : https://mui.com/material-ui/getting-started/
- **PropTypes** : https://fr.legacy.reactjs.org/docs/typechecking-with-proptypes.html
- **Phind** : https://www.phind.com/search?home=true
- **Perplexity** : https://www.perplexity.ai/

## Fonctionnalités

- **Affichage des films** :
  - Les films sont affichés dans des cartes stylisées avec TailwindCSS.
  - Chaque carte contient (énoncé de l'exercice) :
    - Le titre du film en gras.
    - La catégorie du film.
    - Une jauge type YouTube indiquant le ratio likes/dislikes.

- **Disposition responsive** :
  - Mise en page responsive grâce à TailwindCSS.
  - Les cartes s'adaptent à la taille de l'écran.

- **Interactivité** :
  - Bouton de suppression pour chaque carte.
  - Bouton toggle like/dislike.

- **Filtre par catégorie** :
  - Filtre multiselect dynamique basé sur les catégories des films.
  - Mise à jour automatique des catégories disponibles.

## Features et amélioration à réaliser plus tard

- **Pagination** :
  - Navigation entre les pages.
  - Choix du nombre d'éléments par page (4, 8 ou 12).

- **Test unitaire**

- **Autres**
  - Png en SVG
  - Fichier JS en TS
  - Chemin avec alias 

## Structure du projet

- `src/components/`: React components
- `src/api/`: API Mock for movie data
- `src/icons/`: .png file

## Installation

1. Clonez le dépôt :
   ```bash
   git clone https://github.com/ItsJessicaDaVeiga/djob_test.git

2. Accédez au répertoire du projet :
    cd djob_test

3. Installez les dépendances :
    npm install

4. Lancez l'application en mode développement :
    npm run dev

5. Cliquez sur le lien localhost qui s'affiche dans le terminal.

## Contributions
Les contributions sont les bienvenues! N'hésitez pas à ouvrir une issue ou à soumettre une pull request. Elles ne seront validé qu'à la fin du mois car il s'agit d'un exercice 
