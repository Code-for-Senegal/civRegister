# Guide de développement

Nous sommes ravis que vous soyez intéressé par civRegister! Dans ce fichier, vous trouverez toutes les informations pour être en mesure de build, de modifier le code source et la configuration de l'environnement à la création d'un executable.

-   [Environnement](#Environnement)
-   [Setup](#Setup)
    -   [Cloner le référentiel](#Cloner-le-référentiel)
    -   [Installer les dépendances](#Installer-les-dépendances)
-   [Exécution de civRegister](#Exécution-de-civRegister)
-   [Linting & mise en page](#Linting-&-mise-en-page)
-   [Tests](#Tests)
-   [Exécutable](#Exécutable)

*   [Ouverture d'une Pull Request (PR)](#Ouverture-d'une-Pull-Request-PR)

<!-- tocstop -->

## Environnement

-   Installer [Node.js](https://nodejs.org/en/): version 8.x ou supérieure
-   Installer [git](https://git-scm.com/)

## Setup

Si vous avez l'intention de contribuer au projet, vous devrez créer un [fork](https://guides.github.com/activities/forking/) d'abord, puis clonez-le sur votre ordinateur local.
Si vous souhaitez simplement build l'executabe localement, vous pouvez le cloner directement à partir du référentiel principal: `https://github.com/dofbi/civRegister`

### Cloner le référentiel

Pour cloner votre référentiel:

```bash
git clone https://github.com/<VOTRE COMPTE>/civRegister
cd civRegister
```

### Installer les dépendances

```bash
npm ci
npm install
```

## Exécution de civRegister

Pour exécuter civRegister, après les étapes ci-dessus:

```bash
npm start
```

## Linting & mise en page

## Tests

## Exécutable

Après le build et les tests, vous voudrez peut-être empaqueter l'application, crée un exécutable / programme d'installation qui peut être partagé avec d'autres (sans avoir besoin d'installer d'autres dépendances). Vous pouvez utiliser les commandes suivantes:

```bash
# macOS
npm run package-mac

# Windows
npm run package-win

# Debian
npm run package-deb
```

Ceux-ci créeront le fichier respectif sous le dossier `release-builds/`.

# Ouverture d'une Pull Request (PR)

Tous les PR sont les bienvenus et nous ferons de notre mieux pour les examiner le plus rapidement possible. Si vous souhaitez travailler sur un [issue](https://github.com/dofbi/civRegister/issues) spécifique, contactez-nous et nous vous attribuerons le problème.
Une fois que vous avez terminé, soumettez simplement un PR avec une description pertinente du changement et fournissez des captures d'écran, le cas échéant.
Les [issues](https://github.com/dofbi/civRegister/issues) sans activité pendant 7 jours seront considérés comme périmés et non attribués, sauf justification.